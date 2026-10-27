# AI CLI 工具社区动态日报 2026-09-24

> 生成时间: 2026-09-24 12:15 UTC | 覆盖工具: 9 个

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

# AI CLI 工具生态横向对比分析（2026-09-24）

> 数据来源：Claude Code、OpenAI Codex、Gemini CLI、GitHub Copilot CLI、Kimi Code CLI、OpenCode、Pi、Qwen Code、DeepSeek TUI 九个仓库当日社区数据

---

## 1. 生态全景

当前 AI CLI 工具已进入"功能收敛、质量分化"阶段：底层能力（MCP 工具生态、子代理编排、浏览器/IDE 集成、多 provider 接入）在主流工具中已基本齐备，竞争焦点从"能做什么"转向"是否可靠、是否可控、是否可预期"。今日九成以上工具的社区讨论围绕回归缺陷、权限语义不一致、上下文成本与跨平台一致性展开，而非新功能诉求。Windows 平台与沙箱/权限链路是跨工具的最大共性痛点，IDE 集成与 ACP 协议则成为各工具新一轮能力落地的"最后一公里"战场。发布节奏出现明显分层：Codex 单日推进 8 个 alpha 版本，而 Kimi、OpenCode、Pi、DeepSeek TUI 当日零 Release，反映各项目在版本策略与成熟阶段上的差距。整体看，社区对"官方响应速度"与"跨版本复现问题"的耐心正在下降，长期积压 issue 已开始催生外部替代方案。

---

## 2. 各工具活跃度对比

| 工具 | Release 情况 | 热点 Issues | PR 动态 | 当日活跃度评估 |
|---|---|---|---|---|
| **Claude Code** | v2.1.281（gateway/Bedrock IAM 支持） | 热点 10 条，最高 50 评论/57 👍 | 5 条更新（4 条同作者、1 条 bot） | 高（版本+议题+PR 三线活跃） |
| **OpenAI Codex** | 8 个 alpha（0.158.0-alpha.2~8 + 0.155.0-alpha.16.4） | 热点 10 条，最高 37 评论 | 10 条精选，均为 bot 当日创建并关闭 | 极高（发布节奏最快） |
| **Gemini CLI** | 4 条（0.62.0 nightly/preview、0.61.0 正式、0.61.0-preview.1） | 热点 10 条，最高 13 评论 | 10 条精选，含 2 条 P1 安全修复 | 高（安全+稳定性双主线） |
| **GitHub Copilot CLI** | v1.0.89-1（新增 GPT-6 Sol/Luna） | 热点 10 条，最高 37 评论/75 👍 | 仅 1 条（维护性） | 中高（Issue 热度高，PR 冷清） |
| **Kimi Code CLI** | 无 | 0 条 | 1 条（依赖安全，已关闭） | 极低（当日近乎静默） |
| **OpenCode** | 无 | 热点 10 条，最高 34 评论/39 👍 | 10 条精选（含核心修复） | 高（2.0 回归讨论密集） |
| **Pi** | 无 | 热点 10 条，最高 14 评论 | 10 条精选（多 provider 落地） | 中高（Issue+PR 双线活跃） |
| **Qwen Code** | v0.24.4-nightly（文档/测试修正） | 热点 10 条，最高 14 评论 | 10 条精选（架构+性能并进） | 中高（架构提案驱动讨论） |
| **DeepSeek TUI** | 无 | 热点 10 条，最高 3 评论 | 10 条精选（含关键修复 #6518） | 中（Issues 量大、单条互动低） |

**说明**：Issues/PR 数为各日报呈现的精选条目数，非仓库全量；👍 与评论数为数据源提供的可见值。

---

## 3. 共同关注的功能方向

**① 多代理（子代理）编排可靠性**
- **Gemini CLI**：#22323 子代理未分析却报 `status: success`；#21409 generalist agent 挂起一小时
- **Codex**：#15723 子代理完成不唤醒调用方；#40299 主 agent 提前关闭子任务
- **DeepSeek TUI**：#6504 子代理 100k 单步上限处被杀且不压缩；#6536 摘要需作为交付物
- **Claude Code**：PR #96364 嵌套 AGENTS.md 投递语义
- **OpenCode**：PR #51095 新增 session subagent API

**② 权限模型粒度与一致性**
- **Claude Code**：#90305 私有网络主机"交互"授权 vs 仅读取；#94880 站点级权限无授予途径
- **Codex**：#38886 显式授权删除仍被策略拦截；#15298 execpolicy 返回 allow 不被遵守
- **Gemini CLI**：PR #29480 Windows git 参数绕过权限提示（P1 安全）
- **Qwen Code**：#11966 Desktop 工具块渲染为空导致审批前无法核验

**③ 上下文/Token 成本与压缩机制**
- **DeepSeek TUI**：#6540 16 次压缩 15 次失败、0% 缓存命中；#6541 未命中成本是命中 50 倍
- **Claude Code**：#90018 `totalTokensReminder` 破坏 prompt-cache 命中
- **Pi**：#9512 GPT-6 Astra 压缩触达输出上限
- **OpenCode**：#30680 自动压缩死循环耗尽 token
- **Copilot CLI**：#4663 压缩失败后每轮原样重试、无限计费

**④ IDE / 协议集成（IDE、ACP、MCP）**
- **Claude Code**：#8451 VSCode `ide_selection`/`ide_opened_file` 缺失（50 评论）；#32726 面板抢焦点（57 👍）
- **OpenCode**：#50236 ACP 忽略 providers/agents/默认模型
- **Gemini CLI**：#23297 IDE 集成终端 Enter 无响应（PR #29476/#29475）
- **Qwen Code**：PR #12603 headless 跳过 `/ide` 交互探针

**⑤ 跨平台一致性（尤其 Windows）**
- **Codex**：Windows 问题占据 Top 20 多数席位（#27117、#47383、#44696、#38886 等）
- **Claude Code**：#92246 Windows 强制自动更新重启；#96680 更新后 registry error 1021
- **Copilot CLI**：#1680 仅装 PowerShell 5.1 的 Win11 CLI 完全不可用
- **Pi**：#9361 shellPath 被非确定性忽略回退 WSL；#9497 CJK IME 卡顿
- **Gemini CLI**：#21983 Wayland 下 browser 子代理失败

**⑥ 会话管理与持久化**
- **Copilot CLI**：#2058 `/fork` 分叉会话；#2170 时间线历史搜索
- **OpenCode**：#16077 持久化会话记忆；#49641 V1→V2 迁移不完整
- **Qwen Code**：#12380 Session 持久所有权；#12619/#12620 会话删除与路由缺陷
- **Pi**：PR #9459 恢复会话时优先采用记录的模型变更

---

## 4. 差异化定位分析

| 工具 | 功能侧重 | 目标用户 | 技术路线特征 |
|---|---|---|---|
| **Claude Code** | 桌面端策略管控、MCP 工具生态、IDE 上下文；当日新增企业级 gateway/Bedrock IAM | 企业团队、需策略合规的开发者 | 强化 Claude apps gateway + Bedrock IAM 角色，向企业治理层延伸 |
| **OpenAI Codex** | 平台稳定性、沙箱策略、Guardian 授权；Rust 侧高频迭代 | 平台覆盖广的开发者，Windows 用户压力大 | Rust 多版本线快速推进（155/158 并行），PR 由 bot 自动化流转 |
| **Gemini CLI** | 安全加固（路径穿越、参数绕过）、AST 感知、Gemini 3 bash 亲和性 | 追求模型原生能力释放的开发者 | 押注 Gemini 3 的 bash 亲和性 + 零依赖沙箱 + 意图路由 |
| **GitHub Copilot CLI** | 模型选择（GPT-6 Sol/Luna）、企业托管策略、MCP 接入 | 已嵌入 GitHub/企业 MDM 体系的开发者 | 依赖 GitHub 生态与托管策略，官方响应节奏受质疑 |
| **Kimi Code CLI** | 当日无功能动向 | — | 仅见依赖供应链维护，公开动态稀少 |
| **OpenCode** | 2.0 全新架构、插件生态、ACP 多端接入 | 插件/扩展开发者、代理环境用户 | 从插件 API 到 subagent API，向可扩展平台演进 |
| **Pi** | 多 provider 覆盖（Vertex/Azure/Bedrock）、TUI 主题重构 | 多模型并用的进阶用户 | 广度优先的 provider 抽象层 + 扩展生命周期语义 |
| **Qwen Code** | 服务端化（qwen serve）、多语言 SDK、Managed Agent 双路径架构 | 多端部署、CI/自动化用户 | 从单机 CLI 向托管运行时 + 多客户端（Web/Desktop/Android）演进 |
| **DeepSeek TUI** | Token 效率审计、子代理预算、模型路由 `/router` | 成本敏感的重度会话用户 | 以真实会话数据驱动优化，仓库瘦身去重（"双权威"清理） |

---

## 5. 社区热度与成熟度

**社区热度排序（综合评论、👍 与议题密度）：**
1. **Codex** — 单日 8 个 alpha，10 条 PR 全量流转，Issue 密度最高但 Windows 缺陷长期 OPEN
2. **Claude Code** — 议题互动最深（50 评论、57 👍 双高），企业能力持续落地
3. **OpenCode** — 2.0 迁移期讨论集中，#785（39 👍）为全样本最高热度议题
4. **Copilot CLI** — #53 以 75 👍 居全样本点赞之最，但属"官方沉默催生替代"的负面信号
5. **Gemini CLI / Pi / Qwen Code** — 中高活跃，议题-PR 双线均衡
6. **DeepSeek TUI** — Issues 量大（50 条）但单条互动低，处于早期高密度反馈阶段
7. **Kimi Code CLI** — 当日近乎静默，仅见依赖维护

**成熟度分层：**
- **快速迭代/高波动**：Codex（alpha 密集）、OpenCode（2.0 回归集中）、DeepSeek TUI（0.10.x 缺陷密集）、Qwen Code（nightly + 架构提案）
- **稳定演进**：Claude Code（版本+议题+PR 节奏均衡）、Pi（provider 广度扩张）
- **承压期**：Copilot CLI（Issue 积压一年未解，PR 侧冷清）、Gemini CLI（安全修复密集，说明边界仍在补）

**关键成熟度信号**：#66084（Claude Code 在 2.1.165 仍可复现，从旧 issue 拆分）、#53（Copilot CLI 积压近一年）、#15723（Codex 自 2026-03-25 持续 OPEN）——三者共同说明"跨版本长期未修复问题"是当前生态的系统性风险点。

---

## 6. 值得关注的趋势信号

**① "可控性"正在超越"新功能"成为首要诉求**
Claude Code #32726（面板抢焦点，57 👍）、#92246（强制自动更新重启）、Pi #9497（CJK IME）均属"不请自来"的行为。开发者明确要求：可关闭、可延迟、可预测。**对开发者参考**：在选型时，工具对自身行为的可干预程度应纳入评估，而非只看能力清单。

**② 权限语义从"能否读"走向"能否交互、能否持久化"**
Claude Code #90305、#94880 与 Codex #38886、#15298 形成共鸣：显式授权与策略判定的不一致会直接侵蚀信任。**对开发者参考**：涉及自动化/无人值守场景时，务必实测"用户显式批准是否真正生效"。

**③ MCP 生态进入"深水区"——认证与策略成为主要摩擦点**
Claude Code #66084（工具索引不刷新）、#91311（widget 无法导出）、Copilot CLI #4901（Atlassian MCP OAuth）、Codex #33601（连接器未挂载）。**对开发者参考**：MCP 接入的瓶颈已从"协议能否连通"转为"权限/认证/策略能否落地"，企业环境尤需预留调试成本。

**④ Token 经济学成为显性工程议题**
DeepSeek TUI #6541（未命中成本为命中 50 倍）、#6540（0% 缓存命中）；Claude Code #90018（prompt-cache 被破坏）；Codex PR #47758（32KiB/128KiB 预算）；Qwen Code PR #12638（合并 in-flight 加载）。**对开发者参考**：长会话/高频工具调用场景的成本差异可能达数量级，缓存命中率应作为生产监控指标。

**⑤ 跨工具出现"技能 + MCP 前置护栏"新兴模式**
Gemini CLI PR #29449 与 Qwen Code PR #12572 同日各自新增 **PkgDiet 依赖护栏 skill**（通过 MCP 拦截 `npm install` 并评估包健康度），Pi #9970 亦提交同名 skill。**对开发者参考**：这是三个独立项目在同一周收敛到的同一模式，值得作为"agent 安全前置"的参考范式。

**⑥ "官方沉默 → 社区自建"的信任临界点**
Copilot CLI #53 明确记录：等待 6 个月无回应后社区已开发 `shell-ai` 替代。**对开发者参考**：评估工具时，官方对高赞长期 issue 的响应速度，可能比当前功能集更能预测长期可用性。

**⑦ IDE/ACP 协议标准化竞争加剧**
Claude Code (#8451)、OpenCode (#50236)、Gemini CLI (#23297)、Qwen Code (#11966) 同时在修 IDE/协议集成缺陷。**对开发者参考**：若团队重度依赖 IDE 内工作流，建议在升级前验证所选工具的 IDE 上下文传递与终端交互是否回归。

---

*本报告仅基于所提供 GitHub 数据整理；Release 文本未包含变更细节的部分，仅陈述可见信息。*

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告

数据来源：github.com/anthropics/skills｜数据截止 2026-09-24

> 说明：所给数据中 PR 的评论数均为 `undefined`，本报告对 PR 的"关注度"以**更新时间活跃度**（近期仍在迭代）与**议题代表性**为依据排序，并对 Issues 严格按照评论数排序。

---

## 1. 热门 Skills 排行（PR）

| 排名 | Skill | 功能 | 讨论热点 | 状态 |
|---|---|---|---|---|
| 1 | **skill-creator 触发评测修复** #1298 | 隔离 trigger evals，处理 Windows 与运行时失败 | 触发评测误报漏检、子进程管道在 Windows 上报错、运行时失败被误判为未触发 | OPEN（2026-09-16 更新） |
| 2 | **pyxel** #525 | Python 复古游戏开发：实现、无头输入驱动运行、帧级检查 | 创建/调试/验证游戏的可复现流程，跨 6 个月仍在迭代 | OPEN（2026-09-22 更新） |
| 3 | **mcp-builder 兼容性修复** #1742 | 适配 `mcp>=2.0.0` 的 `streamable_http_client` 与自定义 headers | 修复 #1668，跟进 MCP SDK 破坏性变更 | OPEN（2026-09-19 更新） |
| 4 | **AWT（AI Watch Tester）** #822 | 赋予 Claude 视觉与浏览器控制的 E2E 测试 Skill | 端到端测试自动化能力下沉到 Skill 层 | OPEN（2026-09-19 更新） |
| 5 | **testing-patterns** #723 | 覆盖完整测试栈：测试哲学（Testing Trophy）、单测 AAA、命名等 | 通用测试方法论 Skill 的需求 | OPEN（2026-09-21 更新） |
| 6 | **docx 系列修复** #1792 / #1790 / #1734 / #541 | LibreOffice 超时误报、缺失 rels 自动创建、孤立批注检测、tracked change 与书签 ID 冲突 | 文档 Skill 的健壮性，是 PR 中修复类最密集的模块 | 均 OPEN |
| 7 | **proofcore-contract-auditor** #1771 | Solidity/Rust 智能合约静态分析，审计证明锚定到 TON 链 | Web3 垂直领域 Skill 化的探索 | OPEN（2026-09-16 更新） |
| 8 | **document-typography** #514 | 生成文档的排版质量控制：孤字换行、寡行段落、编号错位 | 面向"生成质量"而非"生成能力"的 Skill | OPEN |

其他值得关注的 PR：`blast-radius` #1776（批量/破坏性写操作前的检查清单）、`md2video-audio` #1703（Markdown 直出带配音 MP4）、`scnet-hpc` #1615（SCNet HPC 的 SSH/Slurm 工作流）、`ODT` #486、`skill-quality-analyzer` / `skill-security-analyzer` #83。

---

## 2. 社区需求趋势（Issues）

按评论数排序，社区诉求集中在以下方向：

- **信任与安全边界（最高热度）** — #492（43 评论，👍2）：社区 Skill 以 `anthropic/` 命名空间分发，造成官方身份的冒用与信任边界滥用。这是全仓库讨论最激烈的议题。
- **组织级 Skill 共享与分发** — #228（16 评论，👍8）：目前只能下载 `.skill` 文件再经 Slack/Teams 手动上传到 Settings > Capabilities，社区期待共享 Skill 库。同一诉求下还有 #189（6 评论，👍9）——`document-skills` 与 `example-skills` 插件内容重复，导致上下文窗口中出现重复 Skill。
- **评测与触发机制可靠性** — #556（12 评论，👍7）：`run_eval.py` 中 `claude -p` 从不触发 Skill，触发率 0%；#1390（4 评论）：`mcp-builder` 的 `evaluation.py` 对任何真实 MCP 服务器都报 0/N，将 TextContent 序列化错误伪装成工具执行错误。评测链路本身不可信，是第二大痛点。
- **上下文窗口经济性** — #1487（4 评论）：`claude-api` Skill 单次工具调用即注入约 156k tokens，直接耗尽上下文。与 #1329（10 评论）提出的 `compact-memory`（符号化压缩 agent 状态）相呼应。
- **Skill 的元规范与质量** — #202（8 评论，CLOSED）：`skill-creator` 更像开发者文档而非可执行 Skill，冗长说教式语气浪费 token；#83 提出的质量/安全分析器同属此方向。
- **Agent 治理与输出质量门禁** — #412（6 评论，CLOSED）：策略执行、威胁检测、信任评分、审计轨迹；#1385（4 评论）：任务前校准 → 对抗式复核 → 交付验证的三段式质量门禁。
- **平台接入与形态开放** — #16：将 Skills 以 MCP 形式暴露，使其拥有可调用的 API 签名；#29：Bedrock 上的可用性；#1175（CLOSED）：SharePoint Online 文档处理中的安全与上下文窗口顾虑。

---

## 3. 高潜力待合并 Skills

这些 PR 讨论活跃、近期仍在更新，落地概率较高（全部为 OPEN）：

1. **#1298 skill-creator 触发评测隔离** — 与 Issue #556、#1769、#1721 同源，是修复生态地基的 PR：trigger detection 报 0% recall 意味着所有 Skill 的描述调优都在错误证据上进行。
2. **#1742 mcp-builder `mcp>=2` 适配** — 明确 Fixes #1668，属于必须跟进的依赖破坏性变更。
3. **#1792 / #1790 docx 修复** — 同一作者（TINGyu123644）同日提交两个补丁，分别解决超时误报成功与 `document.xml.rels` 缺失，改动小、验证明确。
4. **#723 testing-patterns** — 覆盖测试全栈，社区对通用工程方法论的稳定需求。
5. **#525 pyxel** — 跨 2026-03 至 2026-09 持续迭代，属长线打磨型贡献。
6. **#822 AWT** — 把浏览器控制与视觉验证引入 Skill 层，与 E2E 测试需求直接对接。
7. **#514 document-typography** — 面向生成结果的排版质量，填补"文档类 Skill 只管生成不管观感"的空白。
8. **#83 skill-quality-analyzer / skill-security-analyzer** — 与 Issue #492 的安全诉求方向一致，若安全议题持续升温，这类元 Skill 有被优先采纳的可能。

---

## 4. Skills 生态洞察

**当前社区在 Skills 层面最集中的诉求是：把 Skill 的"信任与质量"基础设施补齐——先让命名空间可信（#492）、评测可信（#556/#1390/#1298）、上下文可控（#1487/#1329），再谈新 Skill 的扩张。**

补充观察：PR 侧的努力高度集中在**修补既有 Skill 的健壮性**（docx、pdf、mcp-builder、skill-creator 的 Windows/超时/大小写/ID 冲突类修复），而 Issue 侧则集中在**分发、安全、评测、上下文成本**等系统性问题。新增 Skill 提案中，Web3 合约审计（#1771）、破坏性操作防护（#1776）、HPC 工作流（#1615）、文档排版（#514）代表了社区向垂直专业场景延伸的趋势，但尚未出现评论数领先的"爆款"新 Skill——生态当前的重心仍在**修复地基**而非**扩充数量**。

---

# Claude Code 社区动态日报（2026-09-24）

数据来源：github.com/anthropics/claude-code

---

## 1. 今日速览

Claude Code 发布 v2.1.281，为 desktop 策略块新增 Claude apps gateway 支持（含 `blockReadsOutsideWorkingDirectories`、`disableBypassPermissionsMode`），并支持在 gateway 的 Bedrock upstream 上以 IAM 角色（`assume_role`）调用。社区侧，VSCode 扩展的 `ide_selection`/`ide_opened_file` 缺失问题（#8451）以 50 条评论、35 个 👍 成为最热议题，IDE 面板抢焦点（#32726，57 👍）同样是高共鸣的体验痛点。MCP 工具索引刷新、prompt-cache 失效、桌面端自动更新强制重启等问题持续被开发者追踪。

---

## 2. 版本发布

**v2.1.281**

- 新增 Claude apps gateway 对较新 Claude Desktop key 的支持，适用于 `desktop` 策略块，包括 `blockReadsOutsideWorkingDirectories` 和 `disableBypassPermissionsMode`。
- 新增 Claude apps gateway Bedrock upstream 的 `assume_role` 能力：gateway 以 IAM 角色身份调用 Bedrock。

> 说明：本次 release 附带的 What's changed 仅包含以上两项内容。

---

## 3. 社区热点 Issues

1. **[OPEN] #8451 — VSCode 扩展缺失 `ide_selection`、`ide_opened_file` 错误**（50 评论 / 35 👍）
   标记 bug、has repro、platform:linux、area:ide、oncall。IDE 上下文传递是 Claude Code 的核心能力之一，该问题直接影响到编辑器内选区和当前文件信息的正确性，评论数与点赞数均为今日最高，属于社区最集中的技术议题。
   https://github.com/anthropics/claude-code/issues/8451

2. **[OPEN] #32726 — VSCode 扩展：希望增加禁止面板抢焦点的选项**（21 评论 / 57 👍）
   面板在产生输出时自动展开并夺取焦点，打断正在其他标签页中的输入。👍 数全场最高，说明这是高频、可复现的日常打扰型痛点。
   https://github.com/anthropics/claude-code/issues/32726

3. **[OPEN] #66084 — `tools/list_changed` 未刷新 deferred-tool / ToolSearch 索引**（15 评论 / 3 👍）
   标记已复现，并注明在 2.1.165 仍可复现，系从 #4118 / #60626 拆分而来。MCP 动态工具变更无法被交互式会话感知，会直接影响 MCP 工具的可用性。
   https://github.com/anthropics/claude-code/issues/66084

4. **[OPEN] #47383 — Gmail connector OAuth 缺少 label 操作所需的 write/modify scope**（9 评论 / 18 👍）
   area:cowork、area:routines。连接器的权限范围不足会让标签类自动化操作无法完成，属于自动化工作流的能力缺口。
   https://github.com/anthropics/claude-code/issues/47383

5. **[CLOSED] #86362 — Browser pane 对经 /etc/hosts 映射到 127.0.0.1 的本地开发域名拦截同源子资源（ERR_BLOCKED_BY_CLIENT），页面空白**（8 评论 / 8 👍）
   本地开发场景（desktop app, macOS）下的浏览器面板误拦截，已关闭；对本地调试流程影响直接。
   https://github.com/anthropics/claude-code/issues/86362

6. **[OPEN] #90305 — Browser pane：希望为已批准的私有网络主机提供持久化的“交互”授权，而不仅是读取**（6 评论 / 2 👍）
   area:permissions、platform:windows。现有授权粒度无法覆盖交互操作，是浏览器自动化权限模型的明确诉求。
   https://github.com/anthropics/claude-code/issues/90305

7. **[OPEN] #90018 — `totalTokensReminder` 导致工具循环中 prompt-cache 反复触底，关闭后恢复增量命中**（5 评论 / 2 👍）
   area:cost、area:core。与 #88211 区分开来的独立问题，关系到成本与缓存命中率，对高频工具调用场景尤为关键。
   https://github.com/anthropics/claude-code/issues/90018

8. **[OPEN] #92246 — Windows 桌面应用自动更新并重启正在进行中的会话，9 天 9 次强制重启且无法退出**（4 评论 / 2 👍）
   更新流程直接终止应用内正在运行的工作，无提示、无延迟、无设置项，属于可用性与数据安全的硬伤。
   https://github.com/anthropics/claude-code/issues/92246

9. **[OPEN] #91311 — 桌面端 MCP widgets 无可用导出路径：复制到剪贴板失败、下载文件无响应**（3 评论 / 2 👍）
   platform:windows、area:mcp、area:desktop。MCP Apps 产出无法带出应用，限制了 widget 的实际使用价值。
   https://github.com/anthropics/claude-code/issues/91311

10. **[OPEN] #94880 — Claude for Chrome：部分域名无法配置站点级权限，且没有授予途径**（2 评论 / 3 👍）
    在使用 `mcp__claude-in-chrome__*` 驱动 `dev.vk.com` 多步表单时权限缺失，属于浏览器能力落地时的权限阻塞。
    https://github.com/anthropics/claude-code/issues/94880

> 其他值得留意：#96118（Opus 5.5 safeguards 因 reasoning_extraction 拦截消息，标记 duplicate）、#88061（持续 API 卡顿与 “Waiting for API Response”）、#96680（Windows Claude Desktop 自动更新后 registry error 1021 无法启动）、#79901（Artifact 版本历史与 URL 版本化需求）、#92993（保留 ANSI 颜色或默认展开工具输出，用于终端绘图）。

---

## 4. 重要 PR 进展

今日更新的 PR 共 5 条，其中 4 条来自同一作者、1 条来自 claude[bot]。摘要如下：

1. **#96570 [OPEN] diff：`command.run` hook 用字面量命名命令，以匹配引擎的扫描逻辑**（作者 poteat）
   mod 原本通过命名常量（`{ command: Names.COMMAND_NAME }`）匹配自身命令，而引擎扫描 hooks 模块时读取的是 `command.run` matcher 中的字面量命令名，用于决定哪些 slash 命令可用。
   https://github.com/anthropics/claude-code/pull/96570

2. **#96487 [OPEN] telemetry：数据行携带引擎版本、基础版本与构建时间（来自 `$.session.version()`）**（作者 poteat）
   此前 mod 在引擎暴露自身版本之前就采集环境字段，导致外部构建上报的行没有版本信息；自 2.1.281 起 `$.session.version()` 返回 `{ version, base?, builtAt? }`。
   https://github.com/anthropics/claude-code/pull/96487

3. **#96434 [OPEN] security-guidance：让被拒绝的文件和密钥文件不进入审查者视野**（作者 claude[bot]）
   修复 #96276。security-guidance 审查者可能把会话权限规则本身禁止读取的文件放入模型上下文；Stop-hook、commit 与 push 的审查提示由 `git diff` 等组装而成。属于安全边界修复。
   https://github.com/anthropics/claude-code/pull/96434

4. **#96363 [OPEN] diff：传入 `--no-color`，避免强制的 git 颜色导致 diff 正文为空**（作者 poteat）
   当仓库或用户 git config 设置了 `color.ui=always` 或 `color.diff=always`，每次 `git diff` 都返回 ANSI 转义；头部与逐文件计数仍正常（来自 `--shortstat` 与 `--numstat`），但正文被破坏。
   https://github.com/anthropics/claude-code/pull/96363

5. **#96364 [OPEN] agents-md：嵌套 AGENTS.md 的自动分页 Read 不再被计为“已投递”**（作者 poteat）
   当 Read 未指定 `offset`/`limit` 时，读取嵌套 `AGENTS.md` 本身算作已投递；但超过 Read 工具 token 上限的整文件读取会被分页，逻辑需要修正以避免重复附加或误判。
   https://github.com/anthropics/claude-code/pull/96364

> 说明：本批次 PR 的评论数字段在数据源中为 undefined，故未列出。

---

## 5. 功能需求趋势

从本期 Issues 的标签与内容看，社区关注集中在以下方向：

- **IDE 集成深度与体验**：`ide_selection`/`ide_opened_file` 上下文正确性（#8451），以及面板焦点管理（#32726）。这是评论与点赞最集中的方向。
- **MCP 与工具生态**：工具列表变更后的索引刷新（#66084）、MCP widget 导出（#91311）、MCP 与权限/Chrome 的交叉问题（#94880）。
- **浏览器面板与权限模型**：本地开发域名拦截（#86362）、私有网络主机的交互式持久授权（#90305）、站点级权限缺失（#94880）——权限粒度正从“能否读取”走向“能否交互”。
- **成本与上下文效率**：prompt-cache 命中被 `totalTokensReminder` 破坏（#90018），属于直接影响账单与延迟的底层问题。
- **桌面端更新与稳定性**：Windows 强制自动更新重启（#92246）、更新后无法启动（#96680）。
- **产物与知识管理**：Artifact 版本历史与 URL 版本化（#79901）、嵌套 AGENTS.md 投递语义（#96364）。
- **终端呈现能力**：保留 ANSI 颜色 / 默认展开工具输出以支持终端绘图（#92993）。

---

## 6. 开发者关注点

- **日常打断感强于功能缺失**：抢焦点（#32726）与强制自动更新重启（#92246）这类“不请自来”的行为收获明确负面反馈，其中 #32726 的 57 个 👍 是本期最高，说明可控性（可关闭、可延迟）比新增功能更迫切。
- **IDE 与 MCP 的“最后一公里”问题反复出现**：上下文字段缺失、工具索引不刷新、widget 无法导出——底层能力已具备，但边界场景下的链路不完整。
- **权限模型需要更细的粒度**：社区希望区分“读取”与“交互”，并希望授权可以持久化、可按域名授予（#90305、#94880）。
- **成本相关的问题被严肃对待**：开发者会自行对照实验、拆分 issue（#90018 明确说明与 #88211 的区别），说明 prompt-cache 与 token 计数直接影响生产使用。
- **同一问题跨版本复现引发耐心消耗**：#66084 特别注明在 2.1.165 仍可复现，并标注为从其他 issue 拆分出的“carve-out”，反映长期未修复问题会被反复追踪。
- **自动化工作流受权限范围掣肘**：Gmail 连接器缺少 write/modify scope（#47383）使 label 类操作无法完成，属于连接器能力与真实自动化需求之间的落差。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报（2026-09-24）

## 1. 今日速览

过去 24 小时内，Codex 仓库发布了 8 个 Rust 侧 alpha 版本，其中 7 个集中在 `rust-v0.158.0-alpha.2` 至 `alpha.8` 的连续迭代，另有一个 `rust-v0.155.0-alpha.16.4` 补丁版本，发布节奏明显加快。Issues 端最活跃的话题集中在 Windows 平台（沙箱、CLI、桌面应用）的多类故障上，其中 `#27117`（PowerShell 更新继承 `PSModulePath`）以 37 条评论和 27 个 👍 位居热度首位。PR 侧当日合并/关闭的一批改动以内部重构、测试稳定性修复和 Guardian 授权逻辑迭代为主，多为 `copyberry[bot]` 自动提交。

## 2. 版本发布

- **rust-v0.158.0-alpha.2 ～ alpha.8**（7 个连续 alpha）：Release note 均为简单标注“Release 0.158.0-alpha.x”，未提供具体 changelog。
- **rust-v0.155.0-alpha.16.4**：155 系列的补丁式 alpha 版本。

说明：上述 Release 文本中未包含变更细节，无法从所给数据判断具体功能差异，仅能确认发布节奏与版本线分布。

## 3. 社区热点 Issues（精选 10 条）

1. **[#27117](https://github.com/openai/codex/issues/27117)** `[bug, windows-os, CLI]` Windows 独立更新从 pwsh 启动时把 `PSModulePath` 继承进 `powershell.exe`，导致 `Get-FileHash` 失败。
   - 状态：OPEN，37 评论，👍 27。当前评论数最高的 Issue，且提出了可复现的根因（PowerShell 5.1 与 7 的环境变量隔离问题），属于更新链路中的实际阻塞性缺陷。

2. **[#47383](https://github.com/openai/codex/issues/47383)** `[bug, windows-os, sandbox, app]` Windows 10 桌面版 26.917.6896.0：Core setup 注册失败并阻断审批模式。
   - 状态：OPEN，26 评论。直接导致 approve 模式不可用，影响桌面端可用性。

3. **[#15723](https://github.com/openai/codex/issues/15723)** `[bug, subagent]` 后台子进程/子 agent 完成时不会唤醒调用方 agent。
   - 状态：OPEN（自 2026-03-25 持续），25 评论，👍 10。长期未解决的并发/唤醒语义问题，涉及 `gpt-5.3-codex medium` 与 CLI 0.116.0。

4. **[#45119](https://github.com/openai/codex/issues/45119)** `[bug, sandbox, CLI]` macOS 14.2 沙箱启动报 `unbound variable TIOCSTI`。
   - 状态：OPEN，25 评论。作者提供了本机复现环境、bundle build 及对上游 main 的比对，定位质量高。

5. **[#44696](https://github.com/openai/codex/issues/44696)** `[bug, windows-os, sandbox, CLI, tool-calls]` Windows 沙箱 helper 报 `helper_unknown_error: setup refresh had errors`，每次 `exec_command` 与文件读取均失败。
   - 状态：OPEN，20 评论。Windows 默认 `workspace-write` 模式下几乎不可用。

6. **[#42243](https://github.com/openai/codex/issues/42243)** `[bug, app, pets]` Codex Pet 悬浮组件收起后会重新出现。
   - 状态：OPEN，19 评论，👍 29。当日 👍 数最高的非破坏性体验问题，说明周边交互细节关注度高。

7. **[#18343](https://github.com/openai/codex/issues/18343)** `[enhancement, agent, memory]` 请求为 Codex 记忆引入作用域管理（全局 / 项目 / 混合 / 按线程）。
   - 状态：OPEN，14 评论，👍 12。代表记忆机制从单一全局存储向可配置模型演进的明确需求。

8. **[#38886](https://github.com/openai/codex/issues/38886)** `[bug, windows-os, sandbox, tool-calls, app]` Windows 桌面端即使用户显式授权删除单个文件，仍在 PowerShell 启动前被策略拦截。
   - 状态：OPEN，14 评论。策略与显式授权之间的冲突，涉及权限模型的可预期性。

9. **[#46590](https://github.com/openai/codex/issues/46590)** `[bug, windows-os, app]` Windows 桌面应用第二条消息卡在加载中，永远不会发送。
   - 状态：OPEN，14 评论。与 [#47054](https://github.com/openai/codex/issues/47054)（同样描述 Windows 桌面在既有任务中发送第二条消息时无限挂起）构成同一症状的多个报告，指向共性回归。

10. **[#47511](https://github.com/openai/codex/issues/47511)** `[bug, app]` 缺少 git commit 与 push 按钮。
    - 状态：OPEN（创建于 2026-09-23，更新于 09-24），6 评论，👍 17。新建即获得较高认同，属于功能可见性回退类问题。

其他值得留意：#45060（Azure-only 认证下 Chrome 扩展命令被 ChatGPT 身份校验拦截）、#15298（`default.rules` 即使 execpolicy 返回 allow 也不被遵守）、#47415（Linux/Btrfs 下 app-server socket 挂载拒绝）、#47043（桌面设置对 `features.thread_tools` 的未识别告警）、#47054（Windows 桌面第二条消息挂起）。

## 4. 重要 PR 进展（精选 10 条）

以下 PR 均为 `copyberry[bot]` 于 2026-09-24 创建并更新，当前状态为 CLOSED。

1. **[#47820](https://github.com/openai/codex/pull/47820)** 为 host agent controllers 增加集成测试覆盖：新增 `TestCodexBuilder::with_thread_manager` 钩子，并注册使用测试 `AgentController` 的集成测试套件。

2. **[#47819](https://github.com/openai/codex/pull/47819)** 当授权发生变化时重试 Guardian review：修复用户在 Guardian 审查期间的新输入（即使只是询问状态）会作废在途审批并中止待执行动作的问题。

3. **[#47811](https://github.com/openai/codex/pull/47811)** 在 Guardian 授权中保留显式用户目标更新：将“仅检查、不要发布”这类限制性目标编辑作为授权证据保留。

4. **[#47808](https://github.com/openai/codex/pull/47808)** 允许 host 通过 `ThreadManager` 提供 agent controller：新增 `ThreadManager::with_agent_control_factory`，可基于最终 thread ID 异步选择宿主自有的 controller，覆盖新建与冷恢复线程。

5. **[#47799](https://github.com/openai/codex/pull/47799)** 默认启用终端输入审批：将 `write_stdin_approval` 提升为 stable 并默认开启，同时调整 stdin 审批测试套件以依赖默认设置。

6. **[#47797](https://github.com/openai/codex/pull/47797)** 支持 close-on-exec 描述符传递且不改变 PTY 语义：修复此前向 PTY 传额外 fd 会误用继承式提权 socket 行为（stdin 关闭不产生 EOF、信号退出状态不同等）的问题。

7. **[#47773](https://github.com/openai/codex/pull/47773)** 异步用户输入遵循 catalog schema：`request_user_input_async` 工具 schema 改用模型 catalog 的 `send_user_message_async.parameters` 覆盖，不可用时回退内置 schema。

8. **[#47758](https://github.com/openai/codex/pull/47758)** 在出站消息预算内保留更多工具元数据：指出 32 KiB 单结果上限与 128 KiB 总量预算会在请求仍有空间时丢弃工具元数据，并移除单结果上限。

9. **[#47755](https://github.com/openai/codex/pull/47755)** 集中化类型化 app-server 响应解码：在进程内与远程客户端、请求句柄之间共享响应解码与类型化错误映射，并移除已完成的 transport。

10. **[#47814](https://github.com/openai/codex/pull/47814)** 修复统一 exec 终止测试中的丢失唤醒：在 `terminating_initial_exec_command_rechecks_initial_response_state` 中用 `notify_one()` 替代 `notify_waiters()`，以在终止等待者未就绪时保留释放通知。

其他同批改动包括：#47817（线程恢复与记忆双写测试稳定性）、#47813（sleep 中断测试事件处理与 fixture 生命周期）、#47757（工具遥测产品 SKU 改为 `KNOWN_PRODUCT_SKUS` 白名单）、#47751（减少 RPC 与 Markdown 渲染中的泛型重复代码）、#47748（对齐 Cargo 与 Bazel 的 Rust 调试信息默认值）。

## 5. 功能需求趋势

从当日 Issues 数据看，社区关注集中在以下方向：

- **平台稳定性（Windows 为主要矛盾）**：Windows 相关的沙箱、更新、桌面应用问题在 Top 20 中占据多数席位，覆盖 `#27117`、`#47383`、`#44696`、`#38886`、`#46590`、`#47054`、`#25770`、`#26187`、`#15298` 等。macOS（`#45119`）与 Linux/Btrfs（`#47415`）也有沙箱类问题，但密度明显低于 Windows。
- **沙箱与权限策略**：包括 `TIOCSTI` 未绑定变量、Btrfs 下 app-server socket 挂载隔离失败、`default.rules` 在逃逸命令上不被遵守、显式授权删除仍被策略拦截。多份报告指向“策略判定与实际执行不一致”。
- **Agent / 子 agent 编排语义**：`#15723`（子进程完成不唤醒调用方）与 `#40299`（主 agent 不可靠地管理 subagent，常在子任务稍长时提前关闭）共同指向多 agent 调度与生命周期管理的可靠性。
- **记忆作用域（memory scoping）**：`#18343` 明确要求从单一全局记忆库扩展为全局 / 项目 / 混合 / 按线程的可配置作用域。
- **TUI 与可读性**：`#26279` 请求在 CLI TUI 中折叠 MCP 工具结果的冗长正文，同时保留完整结果。
- **企业认证与集成**：`#45060` 反映仅使用 Azure 认证时，Chrome 扩展命令被 ChatGPT 身份校验拦截，属于企业身份体系与客户端能力之间的衔接问题。
- **连接器 / 工具挂载**：`#33601` 反映桌面版未挂载已安装的 Slack 或 Outlook 连接器工具，并与旧版本形成“已知可用”对比。

## 6. 开发者关注点

- **Windows 运行时是当前最大痛点来源**：从更新（`PSModulePath` 污染、MSIX 旧包锁定）、沙箱（helper setup refresh 失败、策略误拦截）到桌面交互（第二条消息挂起、生成图片显示为损坏占位图），问题横跨安装、执行、UI 三层，且多条 Issue 持续数周乃至数月仍在 OPEN。
- **策略与显式授权的一致性**：`#38886` 与 `#15298` 表明开发者期望“用户显式批准”或“execpolicy 返回 allow”能真正生效，而当前实现存在绕过用户意图的体验落差。
- **多 agent 行为不可预期**：`#15723` 与 `#40299` 中，调用方 agent 不等待子 agent 完成便继续或提前关闭子任务，这类问题直接影响编排类工作负载的可信度。
- **更新与安装链路的可靠性**：Windows standalone 与 Store/MSIX 两条更新路径均有失败报告，对需要长期稳定环境的开发者影响较大。
- **配置与功能开关的可见性**：`#47043`（桌面设置对 `features.thread_tools` 报未识别告警）说明配置项在 UI 与 CLI 之间的同步仍存在认知负担。
- **工具输出体积管理**：`#26279`（TUI 折叠 MCP 结果）与本批 PR 中 `#47758`（出站消息 32 KiB/128 KiB 预算）从客户端和服务端两侧共同指向“工具结果体积”这一正在被主动处理的工程问题。

---

以上内容均基于所提供的 GitHub 数据整理；Release 文本未包含变更细节，相关部分仅陈述可见信息。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报（2026-09-24）

## 1. 今日速览

今日社区焦点集中在**安全加固**与**交互稳定性**两条主线上：新提交的 PR 修补了 checkpoint 路径穿越和 Windows 下 git 参数绕过权限提示两个 P1 级安全问题，同时多个 PR 尝试解决 IDE 集成终端中 Enter 键无响应的老问题（#23297）。Agent 行为异常（子代理误报成功、generalist agent 卡死）仍是评论数最高的 Issue 主题。

## 2. 版本发布

- **v0.62.0-nightly.20260924.g8e70c862f**：新增 VS Code 集成测试存在性检查（#29462）；修复 CLI 连接恢复期间重试进度指示器显示（#28340）。
- **v0.62.0-preview.0**：a2a-server 在不支持的 store 上提前返回（#29334）；包含 v0.61.0-preview.0 变更日志。
- **v0.61.0**：正式版，包含 v0.60.0-preview.0 变更日志与版本号提升。
- **v0.61.0-preview.1**：补丁版本，cherry-pick 62364cb 至 preview 分支（#29455）。

## 3. 社区热点 Issues

1. **[#22323](https://github.com/google-gemini/gemini-cli/issues/22323)（P1，13 评论）** 子代理 `codebase_investigator` 在触及 MAX_TURNS 上限、未做任何分析的情况下仍报告 `status: success` / `Termination Reason: GOAL`，掩盖了中断事实。这是本日评论最多的 Issue，直接影响用户对子代理结果的信任。
2. **[#21409](https://github.com/google-gemini/gemini-cli/issues/21409)（P1，8 评论，8 👍）** generalist agent 调用后无限挂起，简单如建目录的操作也能卡一小时。高点赞数说明影响面广。
3. **[#19873](https://github.com/google-gemini/gemini-cli/issues/19873)（P2，9 评论）** 提议利用 Gemini 3 模型的 bash 亲和性，通过零依赖 OS 沙箱与执行后意图路由来充分发挥模型原生能力。
4. **[#22745](https://github.com/google-gemini/gemini-cli/issues/22745)（P2，7 评论）** EPIC：评估 AST 感知的文件读取、搜索与代码库映射价值，目标是以更少轮次精确读取方法边界。
5. **[#21968](https://github.com/google-gemini/gemini-cli/issues/21968)（P2，6 评论）** 反馈称 Gemini 几乎不会主动使用自定义 skills 和子代理，除非被显式指令要求。
6. **[#26525](https://github.com/google-gemini/gemini-cli/issues/26525)（P2，5 评论）** Auto Memory 在脱敏前已将转录内容发送给后台提取代理，需加入确定性脱敏并减少日志。
7. **[#22267](https://github.com/google-gemini/gemini-cli/issues/22267)（P2，4 评论）** Browser Agent 完全忽略 `settings.json` 中的 `maxTurns` 等覆盖配置。
8. **[#21983](https://github.com/google-gemini/gemini-cli/issues/21983)（P1，4 评论）** browser 子代理在 Wayland 环境下失败。
9. **[#24246](https://github.com/google-gemini/gemini-cli/issues/24246)（P2，3 评论）** 工具数量超过 128（摘要另处提及 400）时触发 400 错误，工具范围控制需要更智能。
10. **[#22672](https://github.com/google-gemini/gemini-cli/issues/22672)（P2，3 评论）** 建议模型在复杂 git 操作等场景避免 `git reset`、`--force` 等破坏性命令。

## 4. 重要 PR 进展

1. **[#29479](https://github.com/google-gemini/gemini-cli/pull/29479)（P1，安全）** 修复 checkpoint 删除/加载的路径穿越：形如 `x/../../secret` 的 tag 可使 legacy 路径逃逸出 checkpoints 目录。
2. **[#29480](https://github.com/google-gemini/gemini-cli/pull/29480)（P1，安全）** 在 Windows 命令安全校验中验证 git 参数，阻止 `git diff --output=<path>` 绕过权限提示并静默覆写文件。
3. **[#29476](https://github.com/google-gemini/gemini-cli/pull/29476) / [#29475](https://github.com/google-gemini/gemini-cli/pull/29475)（P1）** 修复 IDE 集成终端下工具确认提示按 Enter 无响应（#23297）。#29452 已从"解耦工具确认与 IDE diff RPC"角度提出另一方案但已关闭。
4. **[#28734](https://github.com/google-gemini/gemini-cli/pull/28734)（P1，已关闭）** 处理 `resolveToRealPath` 的 EACCES，修复 macOS Seatbelt 沙箱下 CWD 位于 git 仓库内时的启动崩溃。
5. **[#29449](https://github.com/google-gemini/gemini-cli/pull/29449)（P3）** 新增内置 PkgDiet 技能，自动拦截 `npm install`/yarn/pnpm，通过 MCP server 检查包健康度、体积与弃用状态。
6. **[#29265](https://github.com/google-gemini/gemini-cli/pull/29265)（P2，已关闭）** 修复中断 agentic 流（SIGINT、超时、工具中止）后会话上下文被污染的问题。
7. **[#29359](https://github.com/google-gemini/gemini-cli/pull/29359)** 修复 `web_fetch` 丢失页面表格的行列结构问题。
8. **[#29354](https://github.com/google-gemini/gemini-cli/pull/29354)（P2）** 为 rootless podman 沙箱添加 `--userns=keep-id`，解决挂载目录 EACCES 导致的原生依赖重建失败。
9. **[#29358](https://github.com/google-gemini/gemini-cli/pull/29358)** 修复 Ctrl+R 反向搜索高亮偏移（如 `İ` 等字符导致的错位）。
10. **[#29352](https://github.com/google-gemini/gemini-cli/pull/29352) / [#29353](https://github.com/google-gemini/gemini-cli/pull/29353)** 文档补全：Hooks 的 `ask`/`approve` 决策值；修正环境变量脱敏配置路径并注明默认关闭。

## 5. 功能需求趋势

- **Agent 可靠性**：子代理终止原因语义、generalist agent 挂起、中断后上下文污染、破坏性命令抑制，构成最大需求簇。
- **工具与上下文效率**：AST 感知读取/搜索/映射、工具数量上限控制、持久化文件型任务跟踪（#18836）、用原生文件工具维护 task tracker（#21000）。
- **模型能力释放**：围绕 Gemini 3 的 bash 亲和性做沙箱与意图路由（#19873），以及提升 skills / 子代理的自发使用率（#21968）。
- **Memory 与安全**：Auto Memory 的脱敏时序、低信号会话重试、无效 patch 隔离（#26523）、inbox 质量（#26516）。
- **平台兼容**：Wayland、macOS Seatbelt、rootless podman、Windows 命令安全。
- **IDE 集成**：VS Code 集成测试、集成终端交互响应。

## 6. 开发者关注点

- **信任与可观测性**：子代理报告"成功"但实际未完成，是当前最突出的痛点；用户需要真实反映中断与失败的状态。
- **卡死与无响应**：generalist agent 挂起、IDE 终端 Enter 无响应，均直接阻断工作流，多位开发者报告需长时间等待后才取消。
- **配置不生效**：`settings.json` 覆盖被 Browser Agent 忽略，配置语义不被遵守会削弱用户对配置系统的信心。
- **安全默认值**：路径穿越、权限提示绕过、脱敏默认关闭等表明开发者期待更安全的默认行为与更明确的文档。
- **清理成本**：模型在随机目录生成临时脚本，给干净提交带来额外清理负担（#23571）。

---
*数据来源：github.com/google-gemini/gemini-cli，截至 2026-09-24。*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报（2026-09-24）

## 1. 今日速览

今日发布 v1.0.89-1，新增 GPT-6 Sol / GPT-6 Luna 模型选择，并修复 view 工具行范围与本地会话输入队列问题。社区侧，要求恢复旧版 CLI 命令的 Issue #53 已积压近一年、获得 75 个 👍，成为最受关注的长期诉求；同时多条会话、认证、上下文压缩类问题集中更新。

## 2. 版本发布

**v1.0.89-1**

- **新增**：在模型可用时，将 GPT-6 Sol 和 GPT-6 Luna 加入模型选择器。
- **修复**：
  - View 工具在 provider 传入扁平化 `view_range` 参数时，正确遵循行范围。
  - 本地会话中，在空白聊天输入框按上方向键可召回待发送消息，并将排队中的 prompt 保留在队列中。

## 3. 社区热点 Issues（10 个）

1. **#53 [OPEN] 恢复旧版 GitHub Copilot in the CLI 命令，避免破坏现有工作流**
   作者 EDM115，创建于 2025-09-26，37 条评论、75 👍。这是评论数与点赞数最高的 Issue。摘要指出：等待 6 个月仍未获 GitHub 回应，社区已开始自行开发替代方案（如 `shell-ai`）。这是当前社区情绪最强的信号，反映官方沉默正在催生外部替代生态。
   github/copilot-cli Issue #53

2. **#2058 [CLOSED] 新增 /fork 命令，为支线任务分叉会话而不打断主目标**
   作者 grantborthwick，10 条评论、10 👍。诉求是当用户中途提问支线问题时，Copilot 不应整体切换目标。已被关闭，属于多步任务场景下会话管理的代表性需求。
   github/copilot-cli Issue #2058

3. **#2995 [CLOSED] 无法使用 DeepSeek API**
   作者 raffaeler，10 条评论、9 👍。通过 `COPILOT_PROVIDER_BASE_URL` 等环境变量配置 DeepSeek 时失败。反映社区对 BYOK 第三方模型接入的实际需求，尤其在国内/开源模型使用者中。
   github/copilot-cli Issue #2995

4. **#1680 [CLOSED] `pwsh.exe` 硬编码 6 处，仅装 PowerShell 5.1 的 Windows 11 上 CLI 完全不可用**
   作者 guidegdm，9 条评论、11 👍。指出 #411 于 2025-10 被以 “not_planned” 关闭，但问题依旧且更严重，现已导致无法执行任何 shell 命令。这是平台兼容性的高优先级痛点。
   github/copilot-cli Issue #1680

5. **#2408 [CLOSED] CLI 自动更新存在问题**
   作者 bamurtaugh，7 条评论、5 👍。用户花费 3 个会话才拿到最新版本，影响版本 1.0.11 与 1.0.14。升级路径不可靠会直接影响所有用户获取修复的效率。
   github/copilot-cli Issue #2408

6. **#3682 [CLOSED] 支持刷新 BYOK provider 凭据而无需重启 CLI**
   作者 gwexler-msft，3 条评论、8 👍。针对 Entra ID / Azure AD OAuth、AWS STS、OIDC JWT 等短时令牌场景。对企业和安全敏感环境尤为关键。
   github/copilot-cli Issue #3682

7. **#4663 [OPEN] 上下文压缩失败后每轮原样重试：无限计费重试、上下文单调增长、无用户可见错误**
   作者 AlBurns-MSFT，3 条评论，更新于 2026-09-23。指出压缩模型调用失败后无退避、无回退、无错误提示，每轮重复同样的请求。涉及计费与稳定性，属高风险问题。
   github/copilot-cli Issue #4663

8. **#4929 [OPEN] 进程内认证令牌停止刷新，重启前所有 prompt 全部失败**
   作者 NGloreous，创建于 2026-09-22，3 条评论，更新于 2026-09-23。长驻进程会永久丢失认证，`/login` 无法恢复，只能重启。直接影响长时间使用的可靠性。
   github/copilot-cli Issue #4929

9. **#4775 [OPEN] [triage] Mission Control 面板链接 404：`/copilot/tasks/<uuid>` 路径不存在，实际会话位于 `/agents/tasks/<uuid>`**
   作者 dai，4 条评论、2 👍。链接失效但会话本身仍存活且在 CLI 可访问。属明确的路径映射缺陷。
   github/copilot-cli Issue #4775

10. **#4901 [OPEN] [triage] Atlassian MCP OAuth 失败：`unauthorized_client: redirect_uri is not registered`（v2 端点）**
    作者 bart-rijnders，创建于 2026-09-18，3 条评论。影响版本 1.0.86，并关联此前的 #4490、#2536。MCP 生态接入受阻，值得关注。
    github/copilot-cli Issue #4901

其他值得留意：#4522（1.0.81 在托管策略未确定时强制启用沙箱，覆盖用户显式配置 `sandbox.enabled=false`，7 👍）、#3934（MCP server 被策略阻止，本地配置正确且在 VSCode/IntelliJ 中正常）、#3948（`web_fetch` 始终 `TypeError: fetch failed`）、#2170（时间线历史搜索）、#3276（Rocky Linux 8.10 GLIBC 版本不匹配）。

## 4. 重要 PR 进展

过去 24 小时内更新的 PR 仅 1 条，无法列出 10 条。

1. **#4948 [OPEN] 更新 github-script action pin**
   作者 klockhoffbjorn-collab，创建于 2026-09-23。将固定的 `actions/github-script` 依赖刷新至当前 v9.0.0 release commit。摘要说明：仓库无运行时依赖清单，其余 GitHub Actions pin 已检查，`actions/stale` 已是最新。属维护性变更。
   github/copilot-cli PR #4948

## 5. 功能需求趋势

基于本次数据，社区关注方向集中在以下几类：

- **会话管理与上下文控制**：`/fork` 分叉会话（#2058）、时间线历史搜索（#2170）、上下文压缩失败重试（#4663），显示多步任务下的会话行为与上下文成本是核心议题。
- **模型接入与灵活性**：DeepSeek API 接入失败（#2995）、BYOK 凭据刷新（#3682），以及本版新增 GPT-6 Sol / GPT-6 Luna，说明模型选择与第三方 provider 支持是持续诉求。
- **MCP 与生态集成**：Atlassian MCP OAuth（#4901）、MCP server 被策略阻止（#3934），MCP 接入的认证与企业策略问题反复出现。
- **跨平台兼容性**：Windows PowerShell 5.1（#1680）、Rocky Linux 8.10 GLIBC（#3276），平台适配仍是高优先级痛点。
- **安装与升级体验**：自动更新失败（#2408）、命令行 `init` 失效（#2002）、Markdown 链接不可点击（#1974）。
- **网络与认证稳定性**：`web_fetch` 失败（#3948）、HTTP2 会话失效重试（#3304）、认证令牌停止刷新（#4929）。

## 6. 开发者关注点

- **官方响应滞后引发信任问题**：最高热度的 #53 已积压近一年，摘要明确指出社区因长期无回应而转向自建方案。这是需要最优先关注的信号。
- **企业/托管环境的行为一致性**：#4522 中沙箱在托管策略未确定时被强制启用，即使 MDM 无沙箱设置、用户已显式关闭；#3934 中 MCP 在 CLI 被策略阻止但 IDE 正常。策略解析与降级行为不一致，影响企业采用。
- **Windows 与 Linux 发行版的可用性缺口**：仅装 PowerShell 5.1 的 Windows 11 上 CLI 完全不可用（#1680），Rocky Linux 8.10 因 GLIBC 无法启动（#3276），两者都会阻断整条使用链路。
- **长驻会话的稳定性与成本可控性**：认证令牌停止刷新需重启进程（#4929）、压缩失败每轮原样重试且无错误提示（#4663），直接关系到长时间使用与计费透明度。
- **升级与配置的可预期性**：自动更新需多个会话才完成（#2408）、命令行 `init` 不再生成 `.md` 文件（#2002），这类基础流程问题会放大其他缺陷的影响。
- **终端交互细节**：复制 prompt 时夹带输入框左边框字符（#4116）、空输入框按上方向键召回消息（本版已修复），反映 TUI 细节体验仍是高频反馈来源。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报（2026-09-24）

## 1. 今日速览

今日仓库无新版本发布，Issues 在过去 24 小时内无更新，整体社区活动平淡。唯一的动态是一条已关闭的依赖安全升级 PR #2622，将 `pykaos` 包中的 `asyncssh` 从 2.21.1 升级到 2.23.1，以修复两个安全公告。该 PR 从 2026-08-28 创建到 2026-09-24 更新，说明此类依赖维护工作流转周期较长。

## 2. 版本发布

过去 24 小时内无新 Release。

## 3. 社区热点 Issues

过去 24 小时内更新的 Issue 数量为 0 条，无可供挑选和汇总的条目。

## 4. 重要 PR 进展

今日仅 1 条 PR，全部列出如下：

- **#2622 [CLOSED] deps: bump asyncssh to 2.23.1 in pykaos (GHSA-2wxc-x7rj-hg8f)**
  作者：katsugtgz | 创建：2026-08-28 | 更新：2026-09-24 | 👍：0
  内容：将 `pykaos` 工作区包中的 `asyncssh` 从 2.21.1 升级至 2.23.1，用于修复 GHSA-2wxc-x7rj-hg8f 与 GHSA-qr67-gv47-xwwh 两个安全公告。PR 说明中给出的依据是 `packages/kaos/pyproject.toml` 中曾固定 `asyncssh==2.21.1`，且 `uv.lock` 解析到的也是 2.21.1。
  链接：https://github.com/MoonshotAI/kimi-cli/pull/2622

说明：数据源过去 24 小时内仅有 1 条 PR，未达到“挑选 10 个”的数量基础，因此不进行额外补充或推测。

## 5. 功能需求趋势

今日无 Issue 数据可供提炼，无法基于社区反馈总结功能方向（如 IDE 集成、性能、新模型支持等）。唯一的信号来自 PR #2622，体现的是依赖安全维护这一非功能性方向。

## 6. 开发者关注点

- **依赖安全维护**：PR #2622 反映仓库需要跟进 `asyncssh` 的安全公告修复，涉及 `pykaos` 包的版本固定与 `uv.lock` 锁定状态，属于供应链安全层面的关注点。
- **维护流转周期**：该 PR 创建于 2026-08-28、更新于 2026-09-24，跨度近一个月，可能提示依赖类变更在评审或合并上存在延迟。

> 备注：受限于当日数据量（0 条 Release、0 条 Issue、1 条 PR），“社区热点 Issues”“功能需求趋势”等部分无足够素材展开，以上内容均严格基于所提供的 GitHub 数据。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报（2026-09-24）

## 1. 今日速览

今日无新版本发布，社区讨论集中在 **2.0 系列回归问题**上：MCP 环境变量传递失效、ACP 配置加载中断、V1→V2 会话迁移不完整等问题集中浮现。同时，UI 改版引发的争议持续发酵（#48882 恢复旧版侧边栏请愿已获 30 👍），流式模式关闭需求（#785）以 34 条评论、39 👍 稳居热度榜首。

## 2. 版本发布

无。

## 3. 社区热点 Issues

1. **[#785](https://github.com/anomalyco/opencode/issues/785) 是否可禁用流式模式？**（34 评论 / 39 👍）
   使用 Credal OpenAI Proxy 的用户遭遇 `Streaming is not supported` 错误，无法使用 OpenCode。同类代理场景广泛，属于阻塞性兼容需求，是当前讨论最热的议题。

2. **[#48882](https://github.com/anomalyco/opencode/issues/48882) [FEATURE] 恢复旧版持久左侧边栏 UI 选项**（25 评论 / 30 👍）
   针对 #20242 侧边栏改版的集中反对声音，用户希望保留经典 UI 作为可选项。UI 变更引发的高热度回退诉求，值得产品侧重视。

3. **[#30680](https://github.com/anomalyco/opencode/issues/30680) [CLOSED] 自动压缩死循环导致停止响应**（19 评论）
   即使在全新空目录中也会反复 auto-compaction 并耗尽 token，最终模型完全停止输出。属于严重可用性缺陷，已关闭（暗示已有修复或结论）。

4. **[#16077](https://github.com/anomalyco/opencode/issues/16077) [FEATURE] 持久化会话记忆**（18 评论 / 4 👍）
   请求在启动时从本地文件加载历史会话上下文，实现跨会话连续性。CLI 场景下长期存在的高频需求。

5. **[#5554](https://github.com/anomalyco/opencode/issues/5554) [CLOSED] 禁用遥测**（12 评论 / 14 👍）
   用户配置关闭遥测后，OpenCode 仍连接远程主机。隐私合规敏感点，已关闭。

6. **[#41696](https://github.com/anomalyco/opencode/issues/41696) [2.0] opencode2 卡在启动托管后台服务**（8 评论）
   反复 spawn `serve --service` 但不报告底层错误，2.0 启动链路的关键稳定性问题。

7. **[#18822](https://github.com/anomalyco/opencode/issues/18822) [CLOSED] [FEATURE] ast_grep / ast_edit 结构化代码搜索与重写工具**（6 评论 / 5 👍）
   现有 `grep` 仅做文本匹配，无法按代码结构定位函数声明或方法调用。面向 agent 代码理解能力的重要增强，已关闭。

8. **[#50236](https://github.com/anomalyco/opencode/issues/50236) acp: session/new 目录自 2.0.4 起忽略配置 providers / agents / 默认模型**（4 评论 / 2 👍）
   `opencode acp` 不再加载用户配置，Ollama 等自定义 provider 与自定义 agent 全部失效。IDE 集成（ACP）用户的阻塞性回归。

9. **[#50312](https://github.com/anomalyco/opencode/issues/50312) 插件工具无法直接调用："No tool named …"**（3 评论）
   V2 插件注册的工具出现在目录中（带 `tools.` 前缀），但 agent 直接调用时服务端报错。插件生态可用性核心问题。

10. **[#50882](https://github.com/anomalyco/opencode/issues/50882) mcp: `{env:...}` 未传递给本地 MCP 服务器——2.0.14/2.0.15 回归**（3 评论）
    使用 `{env:VAR}` 占位符的本地 MCP 服务器启动时丢失环境变量，属于最新版本的明确回归，影响面直接。

## 4. 重要 PR 进展

1. **[#51106](https://github.com/anomalyco/opencode/pull/51106) fix: 以固定 5s 间隔重试瞬时网络与 TLS 错误**
   针对企业代理后 `unknown certificate verification error` 导致会话直接失败的问题。缓解代理环境下的连接顽疾。

2. **[#51105](https://github.com/anomalyco/opencode/pull/51105) fix(core): 在下一块开始前发布批量增量**（contributor）
   `createLLMEventPublisher` 批量缓存文本/推理增量最长 100ms，却立即发布 block start，导致工具调用前后的增量顺序错乱。修复流式事件时序。

3. **[#51104](https://github.com/anomalyco/opencode/pull/51104) 以 workaround 修复 #45359**
   部分模型（如 Gemini）要求最后一条消息为 `user`，此为快速 monkeypatch 保证兼容。

4. **[#51101](https://github.com/anomalyco/opencode/pull/51101) feat(tui): 向插件暴露模型变体选择**
   新增 `context.ui.model`（当前模型、变体列表、变体切换），扩展插件对模型层的控制能力。

5. **[#51095](https://github.com/anomalyco/opencode/pull/51095) feat(core): 新增 session subagent API**
   增加 `POST /api/session/:sessionID/subagent`，为子 agent 编排提供核心接口。

6. **[#51090](https://github.com/anomalyco/opencode/pull/51090) fix(app): 纯推理轮次中保持 Working 状态**（contributor）
   仅含推理的轮次不再显示"Used 1 Thought"分组，避免误判任务已结束。

7. **[#48331](https://github.com/anomalyco/opencode/pull/48331) fix(mcp): 消除 MCP 工具 schema 的 Ajv unknown format 警告**
   Rust/schemars 生成的 MCP 服务器会输出非标准 `format` 值，导致校验噪音。改善 MCP 生态兼容性。

8. **[#47966](https://github.com/anomalyco/opencode/pull/47966) fix(sdk): 处理 SSE 取消拒绝**
   SSE abort 处理器调用 `reader.cancel()` 时未观察其返回的 Promise，造成未处理拒绝。

9. **[#47999](https://github.com/anomalyco/opencode/pull/47999) fix(tui): 按服务器隔离保存的标签页**
   避免不同服务器间的 TUI 标签页与终端选择相互串扰，多实例用户受益。

10. **[#51099](https://github.com/anomalyco/opencode/pull/51099) docs(ecosystem): 新增 telepathy 插件** / **[#51093](https://github.com/anomalyco/opencode/pull/51093) docs(ecosystem): 新增 opencode-commandcode-usage**
    生态文档持续扩充，反映第三方插件社区活跃度。

## 5. 功能需求趋势

- **UI/交互可配置化**：旧版侧边栏回退（#48882）、鼠标追踪开关（#36266）、可配置自动批准键位（#40331）、session 标签页聚焦（#51102）——用户强烈要求 UI 行为可自定义。
- **会话连续性与记忆**：持久会话记忆（#16077）、V1→V2 迁移补全（#49641）反映对跨会话上下文与数据完整性的诉求。
- **插件与扩展能力开放**：插件模型变体访问（#51101）、session subagent API（#51095）、core 能力向插件暴露（#49389）、插件工具直接调用修复（#50312）——扩展生态正成为核心演进方向。
- **Agent 代码理解增强**：结构化 AST 搜索/重写工具（#18822）代表从文本匹配向语义操作升级的需求。
- **Provider / 协议兼容性**：禁用流式模式（#785）、ACP 配置加载（#50236）、Gemini 消息顺序（#51104）——多 provider 与 IDE 集成兼容是持续痛点。

## 6. 开发者关注点

- **2.0 迁移与回归是最大风险源**：MCP 环境变量丢失（#50882）、ACP 配置忽略（#50236）、会话导入不完整（#49641）、后台服务启动卡死（#41696）均集中在 2.0.x 版本线上，开发者对升级稳定性存在明显顾虑。
- **隐私与遥测控制**：禁用遥测无效（#5554）引发 14 👍 共鸣，合规场景下用户要求彻底的网络行为开关。
- **平台覆盖不足**：Termux/Android 无法运行（#36081）暴露非主流环境支持缺口。
- **连接层健壮性**：代理与 TLS 错误直接终止会话（#51106）、SSE 取消未处理（#47966），企业网络环境下的容错仍待加强。
- **插件系统语义不一致**：工具可见但不可调用（#50312）、core 能力无法从插件触达（#49389），插件 API 完整性直接影响第三方生态建设。

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报 — 2026-09-24

数据来源：github.com/badlogic/pi-mono（earendil-works/pi）

## 1. 今日速览

今日无新版本发布。社区讨论集中在 Windows 平台体验（shell 解析非确定性、CJK 输入法卡顿）、TUI 渲染性能（长会话全屏重绘风暴）以及多provider 兼容性（OpenAI 专有字段污染兼容端点、Bedrock 图片嵌套）。PR 侧，Google Vertex AI 新增 Anthropic Claude 支持、Azure Foundry Chat Completions 支持、以及 TUI 主题/颜色体系重构较为值得关注。

## 2. 版本发布

过去 24 小时内无新 Release。

## 3. 社区热点 Issues

1. **[#7885] npm search 不再索引新发布的 pi-packages（CLOSED，14 评论）**
   `pi-affix-prompt` 已带 `pi-package` 关键词与 `pi` manifest，但 `npm search` 无结果，导致 pi.dev/packages 画廊不再更新（自 8 月 4 日起无新包名）。这直接影响包生态的可见性与分发，是社区最活跃的讨论。
   https://github.com/earendil-works/pi/issues/7885

2. **[#9361] Windows：加载扩展后 shellPath 被非确定性忽略，回退到 WSL System32 bash.exe（OPEN，11 评论）**
   有效的 `shellPath` 被静默忽略并回退到 Git Bash / WSL 路径，属跨平台一致性问题，Windows 用户基数大，影响面广。
   https://github.com/earendil-works/pi/issues/9361

3. **[#9688] 回归：剪贴板复制失效（CLOSED，8 评论，👍2）**
   为修复 #9618，提交 3349e1db1800 改变了 OSC 52 剪贴板事件的触发条件——现在仅在既无 xsel/wl-copy 且处于 SSH 会话时才触发，导致本地复制回归。是当日点赞最高的 Issue。
   https://github.com/earendil-works/pi/issues/9688

4. **[#2144] 无法向 Pi 粘贴图片（CLOSED，8 评论）**
   Claude Code 支持 Warp Terminal 下 Ctrl+V 粘贴剪贴板图片，Pi 不支持。剪贴板/图片交互是长期高频诉求。
   https://github.com/earendil-works/pi/issues/2144

5. **[#9255] TuiMainScreen 全屏重绘风暴（OPEN，7 评论，👍1）**
   当变更行位于视口顶部之上时，`doRender()` 几乎每帧走 `fullRender(true)`，导致长会话在流式输出时画面剧烈跳动、文字重影。这是长会话场景下的核心 TUI 性能问题。
   https://github.com/earendil-works/pi/issues/9255

6. **[#9674] mistral-conversations：空内容 delta 开启文本块（GLM 5.x 出现空白与重放 400）（OPEN，7 评论）**
   #8069 被以 not_planned 关闭后，绕过方案被迫走 `openai-completions`，从而丢失 Mistral 原生 prompt cache。涉及新模型接入与成本/缓存正确性。
   https://github.com/earendil-works/pi/issues/9674

7. **[#9508] pi-ai 向兼容 provider 发送 OpenAI 专有字段/角色/鉴权头（OPEN，6 评论）**
   导致本可正常工作的 OpenAI 兼容 provider 返回 400/422。是 provider 抽象层健壮性的代表性问题。
   https://github.com/earendil-works/pi/issues/9508

8. **[#8643] Bedrock：OpenAI 模型拒绝嵌套在 toolResult.content 中的图片（OPEN，6 评论，👍1）**
   需要像 `openai-completions.ts` 那样把工具结果中的图片提升为同级 user 内容块。作者称修复与回归测试已就绪。
   https://github.com/earendil-works/pi/issues/8643

9. **[#9512] GPT-6 Astra 最大推理下压缩触达摘要输出上限（OPEN，5 评论，👍1）**
   上下文压缩间歇性失败，报错 “generation hit the token cap”，上下文溢出恢复被中断。关系到长上下文模型的可用性。
   https://github.com/earendil-works/pi/issues/9512

10. **[#9997] session_shutdown 处理函数永不 resolve 时退出挂起无反馈（CLOSED，3 评论）**
    扩展的 `session_shutdown` 不返回会导致退出时冻结：TUI 帧保留、CPU 约 0%、`shutdown()` 已置 `isShuttingDown` 却无任何提示。当日新增、涉及扩展生命周期健壮性。
    https://github.com/earendil-works/pi/issues/9997

其他可留意：#9932（before_agent_start 强制 system prompt 与 setActiveTools 未同步）、#9497（Windows CJK IME 输入卡顿，showHardwareCursor 可临时修复）、#9886（clearQueue 静默销毁扩展自定义消息）、#9887（read 工具行号被模型以字符串返回导致渲染错误拼接）。

## 4. 重要 PR 进展

1. **[#9993] 为 Google Vertex AI provider 增加 Anthropic Claude 支持（CLOSED）**
   此前 `google-vertex` 目录不支持 Claude，用户无法用 GCP 凭据（ADC/API key）访问 Model Garden 中的 Claude Opus/Sonnet/Haiku。
   https://github.com/earendil-works/pi/pull/9993

2. **[#9714] 支持 Azure Foundry Chat Completions 部署（OPEN）**
   实现 #9645。Azure provider 此前仅有 Responses API，Foundry 上使用 Chat Completions 的部署（如 DeepSeek V4 Pro）无法工作。
   https://github.com/earendil-works/pi/pull/9714

3. **[#8398] 引入颜色值与主题样式（OPEN，mitsuhiko）**
   大幅重构 TUI 与主题支持，直接暴露颜色，便于 agent 做颜色运算等更丰富的样式，并为未来非终端 UI 铺路。
   https://github.com/earendil-works/pi/pull/8398

4. **[#9948] 统一图片与分类器模型基础设施（CLOSED，mitsuhiko）**
   对模型系统做较大改造，使其在 chat 模型之外支持其他模型类型。
   https://github.com/earendil-works/pi/pull/9948

5. **[#9995] 修复并行中止时 tool_result 丢失（CLOSED）**
   修复 #9994。`executeToolCallsParallel` 一旦检测到 `signal.aborted` 即跳出循环，未处理到的工具调用既无 `tool_execution_start` 也无结果。
   https://github.com/earendil-works/pi/pull/9995

6. **[#9964] 采用 GPT-6 API 上下文上限（CLOSED）**
   将 GPT-6 Astra/Sol/Luna 上下文窗口设为 1,050,000 tokens，保留 128,000 输出限制与既有 272K 阈值及长上下文价格档，并补充生成目录回归覆盖。
   https://github.com/earendil-works/pi/pull/9964

7. **[#9988] 将 read 渲染器行范围参数强制转为数字（CLOSED）**
   模型偶尔把 `offset`/`limit` 以 JSON 字符串返回（在 `openrouter:xiaomi/mimo-v2.6-flash` 上观察到），渲染时发生字符串拼接错误。对应 Issue #9887。
   https://github.com/earendil-works/pi/pull/9988

8. **[#6881] 优先使用 provider 上报的成本（OPEN）**
   当响应包含计费成本时用作 `usage.cost.total`，替代目录费率；未上报时回退到 `calculateCost`。从 `openai-completions` 读取 `usage.cost` 与 `cost_details`。
   https://github.com/earendil-works/pi/pull/6881

9. **[#9459] 恢复会话时优先采用记录的模型变更（CLOSED）**
   优先使用最后一次 `model_change`（每个会话起始至少有一条），而非最后一条 assistant 消息的模型，并保留原有回退逻辑。
   https://github.com/earendil-works/pi/pull/9459

10. **[#9957] TUI 按宽高失真选择 Kitty 图像行数（OPEN）**
    作者说明这不是彻底修复而是一项改进，通过选择失真更小的方案改善部分场景，并附带 AI 辅助的测试矩阵。
    https://github.com/earendil-works/pi/pull/9957

其他：#9763（pi.dev 兼容性检查，将 PR gate 作为唯一贡献者授权边界）、#9970（PkgDiet 依赖护栏 skill）、#9977（导出 scoped storage 一致性测试套件）。

## 5. 功能需求趋势

- **多 provider / 新模型接入与兼容**：Azure Foundry Chat Completions（#9714）、Vertex AI 上的 Claude（#9993）、Mistral 原生 prompt cache（#9674）、GPT-6 上下文上限（#9964）、Bedrock 图片处理（#8643）、OpenAI 专有字段污染兼容端点（#9508）。
- **扩展（extension）API 与生命周期语义**：RPC 响应暴露 prompt disposition（#9098）、`clearQueue()` 与自定义消息（#9886）、`ExtensionContext` 无法感知排队的 continuation（#8349）、`before_agent_start` 与工具集同步（#9932）、`session_shutdown` 挂起（#9997）。
- **TUI 渲染与终端交互**：重绘风暴（#9255）、Kitty 图像行选择（#9957）、主题与颜色体系（#8398）、剪贴板复制/粘贴（#9688、#2144、#9786）。
- **Windows 与本地化体验**：shell 解析非确定性（#9361）、CJK IME 输入（#9497）、Ollama 本地模型识别文件路径异常（#9858）。
- **成本与配额可观测性**：采用 provider 上报成本（#6881）、长上下文价格档保持（#9964）。
- **包生态与命名空间**：npm search 索引（#7885）、可选 `pi.namespace`（#8834，已以 no-action 关闭）。

## 6. 开发者关注点

- **跨平台一致性仍是首要痛点**：Windows 上 shellPath 被忽略并回退到 WSL bash.exe（#9361）、CJK IME 输入几乎不可用（#9497），说明平台适配层缺少确定性保证。
- **扩展生命周期语义不清晰或不可观测**：`clearQueue()` 静默丢弃消息且不返回（#9886）、扩展无法检测排队 continuation（#8349）、`session_shutdown` 不 resolve 导致退出冻结且无反馈（#9997）、prompt 处置状态不可见（#9098）。
- **模型/provider 兼容层过于宽松又过于激进**：一方面向兼容端点发送 OpenAI 专有字段导致 400/422（#9508），另一方面工具结果中的图片未被正确提升（#8643）；模型返回非预期类型（如字符串 `offset`/`limit`）也会击穿渲染层（#9887）。
- **长会话与长上下文下的正确性**：TUI 重绘风暴（#9255）与压缩触达输出上限（#9512）都集中在“会话变长之后”。
- **生态可见性与分发**：npm search 索引失效导致新包无法出现在 pi.dev/packages 画廊（#7885），直接影响开发者发布包的积极性。
- **回归风险受关注**：剪贴板复制的回归（#9688）显示为修一个 bug 而引入新问题，社区对修复引入的副作用较为敏感。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报（2026-09-24）

## 今日速览

今日 Qwen Code 发布了 v0.24.4-nightly.20260923 夜间版本，主要修正了延迟工具桥接（deferred-tool bridge）导致的文档与测试陈旧问题。社区讨论集中在 **Managed Agent 双路径架构提案（#12380，14 条评论）** 与长期存在的 **core + cli 架构债务清单（#4063，12 条评论）**，同时 Web Shell / Desktop 的会话管理与 UI 缺陷成为新的高频反馈点。

---

## 版本发布

### v0.24.4-nightly.20260923.d0cd622a68

夜间版本，改动集中在文档与测试一致性修正：

- `fix(core,docs): correct what the deferred-tool bridge made stale or untested`（@yiliang114，PR #12355）
- 另有一项 `docs(plans)` 相关改动

整体属于维护性更新，无用户可见的新功能。

---

## 社区热点 Issues

1. **#12380 [OPEN] Managed Agent 双路径架构与分阶段交付提案**（14 条评论）
   由 doudouOUC 提出，主张保留现有 TypeScript agent loop，将模型推理与工具环境供给解耦，并赋予 Session 持久所有权。涉及 session-management、multi-agent、platform-distribution 多条路线图，是当前讨论热度最高、影响面最广的架构提案。
   https://github.com/QwenLM/qwen-code/issues/12380

2. **#4063 [OPEN] core + cli 架构 Review — 12 项结构性问题清单**（12 条评论，1 👍）
   长期跟踪的结构性债务记录，P0 级问题包括「核心类型系统被 `@google/genai` 绑架」——`ContentGenerator` 接口直接暴露第三方 SDK 类型。标记 status/in-progress，说明重构已在推进但尚未收敛。
   https://github.com/QwenLM/qwen-code/issues/4063

3. **#9005 [OPEN] Anthropic wire 缺少 OpenAI wire 已有的流安全保护**（9 条评论，P1）
   指出 `anthropicContentGenerator` 在流式处理上缺少对等保护，属于可能导致运行时异常的协议层缺陷，P1 + status/in-progress，优先级较高。
   https://github.com/QwenLM/qwen-code/issues/9005

4. **#12609 [OPEN] /review fix audit: round-31 deferrals from #10169**（6 条评论）
   承接 #10169 合并后的第 31 轮 review 遗留问题，附有具体 run artifact 与 commit 锚点（`6c3eb96eea`）。反映项目正在用自动化 review 流程做持续收敛，值得关注其累积的 deferral 清单。
   https://github.com/QwenLM/qwen-code/issues/12609

5. **#11966 [OPEN] Desktop 端工具调用块渲染为空，无法在批准前核验内容**（6 条评论）
   完成的 `Edit` / `Shell` 块只显示空 `{}`，用户无法在授权前检查将执行的内容。这既是 UI 缺陷，也是安全审批链路的实质削弱，标记 ready-for-human。
   https://github.com/QwenLM/qwen-code/issues/11966

6. **#9733 [OPEN] core 循环检测在验证循环上误报，导致无人值守回合不可恢复终止**（5 条评论）
   在长脚本化多阶段自动化中，正当的「写脚本 → 运行 → 编辑 → 重跑验证」序列被误判为循环并终止回合，且无法恢复。对 CI/自动化用户是硬伤。
   https://github.com/QwenLM/qwen-code/issues/9733

7. **#12619 [OPEN] Web Shell 与 Desktop 无法删除当前选中的会话**（4 条评论，今日新建）
   侧边栏对当前行禁用删除、删除选择器也拒绝选中，导致用户必须先切换再删除。与 PR #12636 直接对应，属于快速修复类。
   https://github.com/QwenLM/qwen-code/issues/12619

8. **#12620 [OPEN] Live Voice 会话中新建任务失败："Live Voice is unavailable"**（4 条评论，今日新建）
   在 Live Voice 会话下点击 New task 会错误地发送 `POST /live/new`，而非创建普通会话。会话状态机与命令路由耦合导致的路径错误。
   https://github.com/QwenLM/qwen-code/issues/12620

9. **#11451 [OPEN] Web Shell「just completed」未读指示器刷新即丢失**（4 条评论）
   后台会话完成时的状态点（`sidebar.completedUnread`）在刷新后消失、断连后不再出现，属于 dogfooding 发现的实时状态同步问题，由核心贡献者 yiliang114 提交。
   https://github.com/QwenLM/qwen-code/issues/11451

10. **#10309 [OPEN] 模型配置时主动探测多模态能力，替代静态名称模式猜测**（4 条评论）
    建议仅对「靠命名模式表猜出来」的模型发送一次极小的多模态测试请求并记录结论。直接针对 model-switching / settings 环节的可靠性，need-discussion。
    https://github.com/QwenLM/qwen-code/issues/10309

其他值得留意的方向性提案：**#11704**（Android 官方伴侣客户端，作为 `qwen serve` 的 ACP 薄客户端）、**#12444**（Web Shell 侧边栏工作区置顶）、**#2603**（启动时自定义 session ID，如 `--session my-project`）、**#12618**（可独立于 `QWEN_HOME` 配置受管 scratch 工作区根目录）。

---

## 重要 PR 进展

1. **#12636 fix(web-shell): 允许从侧边栏和选择器删除当前会话**
   移除 `disabled={busy || isCurrent}` 限制并放宽 picker 切换逻辑，直接修复 #12619。
   https://github.com/QwenLM/qwen-code/pull/12636

2. **#12630 feat(cli): 声明 v2 execute/status/cancel Managed Runtime 契约**
   将三条路由加入 `OWNED_MANAGED_RUNTIME_ROUTES`，并附带证明纪律（POST、精确路径、客户端 attestation）。与 #12380 的架构提案呼应。
   https://github.com/QwenLM/qwen-code/pull/12630

3. **#12637 feat(sdk-java): 在运行时传输层加入 v2 工具操作**
   为 Java 客户端的 `HttpRuntimeTransport` 实现 `execute`、`status`、`cancel`，以原始调用引用（sessionId 等）为键。说明 Managed Runtime 契约正在多语言 SDK 同步落地。
   https://github.com/QwenLM/qwen-code/pull/12637

4. **#12627 feat(sdk-java): 恢复并采用持久化的 Runtime bindings**
   解决 Broker 重启后持久化 `READY` binding 无法续用、只能以 `runtime_reconciliation_required` 失败关闭的问题。
   https://github.com/QwenLM/qwen-code/pull/12627

5. **#12308 [autofix/takeover] feat(serve): 会话创建时支持模型与推理强度选择**
   外部调用者可通过 `startupConfig: { modelServiceId, reasoningEffort }` 创建普通与独立会话，`modelServiceId` 必填、`reasoningEffort` 可选。
   https://github.com/QwenLM/qwen-code/pull/12308

6. **#12633 test(cli): 固定 managed-runtime worker 的启动、绑定与关闭守卫**
   针对 #12506 的变异测试发现的「无测试可杀死」守卫补齐测试（attestation worker）。属于提升关键路径可信度的测试补充。
   https://github.com/QwenLM/qwen-code/pull/12633

7. **#12638 perf(serve): 合并进行中的扩展状态加载**
   同一 controller / locale / workspace trust 状态下的并发缓存未命中现在共享一次 in-flight 加载，成功响应仍保留 2 秒缓存。降低扩展列表接口的重复开销。
   https://github.com/QwenLM/qwen-code/pull/12638

8. **#12603 perf(cli): headless 启动时跳过仅交互式探针**
   非交互运行（如 `-p`）不再构建仅交互使用的 `/ide` 命令，避免为查找祖先进程逐个执行 `ps`。对 CI/脚本场景是直接的启动加速。
   https://github.com/QwenLM/qwen-code/pull/12603

9. **#12562 fix(core): JSON-RPC -32601 时保持 MCP server 连接**
   修改 `mcp-client.ts` 的 `client.onerror`，遇到方法不存在错误时不再把服务器置为 DISCONNECTED。修复 #12496。
   https://github.com/QwenLM/qwen-code/pull/12562

10. **#12572 feat(skills): 新增 pkgdiet 依赖护栏 skill**
    通过 PkgDiet MCP server，在执行 `npm install` / `yarn add` 前自动评估待安装包。体现「skill + MCP 前置护栏」这一新兴模式。
    https://github.com/QwenLM/qwen-code/pull/12572

另有 **#12602**（阻止一次性运行重复启动 CLI 进程）和 **#12617**（live-journal 修复时保留 prompt settlement）等性能与状态一致性修复值得跟进。

---

## 功能需求趋势

从本轮 Issues 与 PR 标签看，社区关注方向集中在以下几处：

- **服务端与多端分发（serve / daemon / platform-distribution）**：Managed Agent 架构、Java SDK、Android 伴侣客户端、Web Shell 与 Desktop 并行演进，`qwen serve` 正在成为多客户端的事实接入点。
- **会话管理（session-management）**：会话的删除、置顶、状态指示器、生命周期所有权（#12380、#12619、#12444、#11451、#2603）密集出现，是当前最集中的功能面。
- **多智能体与平台化**：multi-agent 路线图标签出现在核心提案中，配合 Managed Runtime 契约的 v2 化，指向从单机 CLI 向托管运行时演进。
- **模型接入可靠性**：多模态能力主动探测（#10309）、模型与推理强度在会话创建时可选（#12308），说明模型切换配置仍是痛点。
- **性能与启动开销**：多个 perf PR（#12638、#12603、#12602）聚焦缓存合并与减少重复启动/探测。

---

## 开发者关注点

- **审批链路的可信度**：Desktop 工具调用块渲染为空（#11966）导致用户无法在执行前核验 Edit / Shell 内容，这被视为安全审批失效而非单纯 UI 问题。
- **自动化场景的健壮性**：循环检测误报并不可恢复地终止回合（#9733），直接冲击无人值守的脚本化流水线。
- **架构耦合**：核心类型系统依赖 `@google/genai`（#4063 P0），以及 Anthropic 与 OpenAI 两条 wire 的保护不对等（#9005），是长期被记录但仍在推进中的结构性风险。
- **多客户端一致性与配置灵活性**：Web Shell / Desktop 之间的行为差异（#12619、#12620、#11451）以及 `QWEN_HOME` 强绑定 scratch 工作区（#12618）被反复提出，反映用户希望在部署拓扑上拥有更多控制权。
- **遗留缺陷清理节奏**：多个 CLOSED 但标记 need-retesting / need-information 的 issue（#8382、#7665、#8214、#8538）在同日更新，说明维护者正在批量回收旧问题，但复测确认环节仍有积压。

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI 社区动态日报（2026-09-24）

> 数据来源：github.com/Hmbown/DeepSeek-TUI · 过去 24 小时内无新版本发布

## 1. 今日速览

今日社区焦点集中在**子代理（sub-agent）上下文预算**问题上：#6504 报告 explore 子代理在 deepseek-flash（1M 窗口）下因单步输入超过 100k 上限、56 秒后被杀死且不会压缩，配套修复 PR #6518 已提交。同时，创始人基于 115 个会话、60 天本地数据的**Token 效率审计**产出一批高价值缺陷报告，暴露出压缩失败、工具错误、缓存命中率低等运行质量问题。此外，官方模型路由 `/router`（#6525 / PR #6539）与模型选择器重构（#6533 / PR #6537）构成了今天的功能主线。

## 2. 版本发布

过去 24 小时无新 Releases。

## 3. 社区热点 Issues

1. **#6504 · 子代理在 100k 单步输入上限处被杀死且不压缩**（3 条评论，今日评论最多）
   创始人实测：workflow 的 explore 子代理在 deepseek-flash 上运行 56 秒后失败，报 `child context budget exhausted: step billed 103126 input tokens, over the 100000 per-step bound`。根因是子代理运行循环缺少压缩路径。这是当日社区讨论度最高的问题，直接影响多代理工作流可靠性。
   https://github.com/Hmbown/DeepSeek-TUI/issues/6504

2. **#6421 · 使用 deepseek-flash 时提示不支持图片输入（0.10.0）**
   用户报告粘贴图片后模型拒绝读取。该问题与 #6529 中"目录把 deepseek-flash 标为纯文本"的描述相互印证，属于模型能力元数据错误，已产生 2 条评论。
   https://github.com/Hmbown/DeepSeek-TUI/issues/6421

3. **#6540 · 16 次压缩中 15 次失败，摘要调用读取约 219k tokens 且缓存命中率为 0%**
   Token 效率审计的核心发现。压缩是长会话的救命机制，如此高的失败率意味着上下文管理链路存在系统性缺陷。
   https://github.com/Hmbown/DeepSeek-TUI/issues/6540

4. **#6541 · Token 效率：逐请求用量遥测、基于成本的压缩触发、稳定工具列表、缩小静态前缀**
   审计基准数据：deepseek-flash 占 3.55B tokens 的 94.8%（未命中成本是命中的 50 倍）。这是一份量化的优化路线图，对成本敏感用户价值高。
   https://github.com/Hmbown/DeepSeek-TUI/issues/6541

5. **#6542 · 复发性工具错误：edit 旧文本不匹配、agent cwd 越界/写作用域争用、无目标时调用 update_goal**
   工具调用错误率 5.0%，每类都可在 harness 层修复。属于高频日常痛点。
   https://github.com/Hmbown/DeepSeek-TUI/issues/6542

6. **#6531 · Web 抓取/搜索质量：提取器丢弃真实页面、恢复提示失效、原生搜索抢占已配置 provider、图片静默丢失**
   创始人近期会话中 16 次 Web fetch 有 8 次返回"无可读内容"。搜索抓取是 TUI 的核心能力之一，半数失败率值得优先处理。
   https://github.com/Hmbown/DeepSeek-TUI/issues/6531

7. **#6536 · 子代理预算耗尽时应将确定性摘要作为交付物，而非仅放进交回提示**
   从 #6504 的独立复现中提炼：若模型的有界报告未产出，摘要就丢失了。这是对 #6504 修复方案的补充设计意见。
   https://github.com/Hmbown/DeepSeek-TUI/issues/6536

8. **#6533 · 模型选择器默认列表应反映实际使用：当前、固定/Fleet、最近；移除遗留 enabled_models 表**
   创始人实测：选择器仍显示 GLM-5.2 和旧的 OpenRouter 测试模型，却漏掉本周用过的模型（30 天/78 会话中 deepseek-flash 用了 61 次）。默认列表与实际使用脱节，影响日常操作效率。
   https://github.com/Hmbown/DeepSeek-TUI/issues/6533

9. **#6525 · 官方模型路由：/router（及 /model router）支持 Jev via OpenRouter 或 TypeSafe**
   每轮路由器 `[auto.router]` 目前只能手改配置，且文档说明"没有交互式开关"，用户无从知晓其存在。将路由能力显性化是重要的可用性提升。
   https://github.com/Hmbown/DeepSeek-TUI/issues/6525

10. **#6516 / #6517 / #6515 · 遗留与"第二权威"清扫系列**
    包括：清理无用的 config/flag/env 与广告性 stub（#6516）、删除约 2,650 行无生产消费者的 `crates/workflow`（#6517）、67 处调用点仍用模型名表而非路由能力决定模型能力（#6515）。这组问题反映出仓库存在明显的双权威/历史包袱，对长期可维护性关键。
    https://github.com/Hmbown/DeepSeek-TUI/issues/6516
    https://github.com/Hmbown/DeepSeek-TUI/issues/6517
    https://github.com/Hmbown/DeepSeek-TUI/issues/6515

## 4. 重要 PR 进展

1. **#6518 · fix(agents)：子代理像父代理一样压缩，而非在 100k 单步上限处死亡**（OPEN）
   直接关闭 #6504。为子代理运行循环补上压缩路径，是今日最关键的修复。
   https://github.com/Hmbown/DeepSeek-TUI/pull/6518

2. **#6539 · feat(auto)：通过 /router 与 Jev 实现官方模型路由（OpenRouter 或 TypeSafe）**（OPEN）
   关闭 #6525。新增 `[auto.router] kind = "decision"`（默认 `chat`）、`min_confidence`（默认 0.5）与 `base_url`；每次 Auto 轮次发起一次 System One 调用，在快/慢档之间决策。
   https://github.com/Hmbown/DeepSeek-TUI/pull/6539

3. **#6538 · fix(web)：抓取保留真实内容、固定搜索优先、完整原生答案、图片提示与降采样**（OPEN）
   关闭 #6531，并关联 #6508。提取器保留列表页每个 `<article>`、保留 header、解包 `<form>`，仅剥离控件。
   https://github.com/Hmbown/DeepSeek-TUI/pull/6538

4. **#6537 · fix(tui)：/model 列出你实际使用的内容——当前、固定/Fleet、最近；移除 enabled_models**（OPEN）
   关闭 #6533。默认视图顺序为：当前路由 → 固定与 Fleet 模型（始终可见，修复 provider 无配置模型时固定项被隐藏的问题）→ 最多 8 个最近使用的路由。
   https://github.com/Hmbown/DeepSeek-TUI/pull/6537

5. **#6523 · fix(tui)：搜索中也能固定模型与 Fleet，并显示回执**（OPEN）
   关闭 #6500。修复 ⇧P / ⇧F 仅在空查询时生效的问题——此前一旦输入搜索词，快捷键就变成查询文本。
   https://github.com/Hmbown/DeepSeek-TUI/pull/6523

6. **#6524 · fix(client)：在所有 Chat Completions 路由上，推理内容一律显示为 Thinking**（OPEN）
   关闭 #6501。此前流式解码器仅在路由同时通过 provider 与模型校验时才展示 `reasoning_content` / `reasoning` / `reasoning_details`。
   https://github.com/Hmbown/DeepSeek-TUI/pull/6524

7. **#6519 · fix(tui)：失焦时保持绘制（VTE 之外）；仅在工作栏可关闭处显示 Esc**（OPEN）
   关闭 #6502，关联 #6311。4a633a0fa9 的改动导致失焦后画面冻结，是 0.10.0 的回归。
   https://github.com/Hmbown/DeepSeek-TUI/pull/6519

8. **#6451 · feat(plugins)：原生 DeepSeek Harness bundle 导入并带审核**（CLOSED）
   DSH 插件采用路径第二步。此前 bundle 只能通过仓库内 Python 脚本（依赖 PyYAML）转换，游离于产品安装流程之外，桌面端与 TUI 均无法直接使用。
   https://github.com/Hmbown/DeepSeek-TUI/pull/6451

9. **#6443 · fix(fleet)：限制每 tick 心跳与内存采样负载**（CLOSED，关联 #6424）
   修复 macOS CI 在全量测试负载下 4 个 Fleet manager 生命周期测试失败的问题（单独运行同一 CI binary 可在 1.2 秒内通过）。
   https://github.com/Hmbown/DeepSeek-TUI/pull/6443

10. **#6483 · fix(tui)：让 undo 回滚它所撤销那一轮的**文件（OPEN，作者 gaord）
    修复 VS Code 客户端保存的会话中，undo 不恢复文件的问题（由客户端报告诊断而来）。
    https://github.com/Hmbown/DeepSeek-TUI/pull/6483

> 另：#6535 / #6507（gaord）修复 Windows CI 中 NSIS 安装重试的成功判定，使其真正验证工具已到位，值得 CI 维护者关注。
> https://github.com/Hmbown/DeepSeek-TUI/pull/6535 · https://github.com/Hmbown/DeepSeek-TUI/pull/6507

## 5. 功能需求趋势

从今日 50 条 Issues 中可提炼出以下方向：

- **上下文与 Token 效率（最突出）**：#6540、#6541、#6542、#6536、#6504 构成一组，聚焦压缩可靠性、成本触发、逐请求遥测与子代理预算管理，且均来自对真实会话数据的审计。
- **模型能力与路由的正确性**：#6515（67 处调用点用模型名表）、#6529（用户可设置 per-model 能力覆盖）、#6525（官方路由预设）、#6533（模型选择器反映实际使用）——核心诉求是"能力由路由决定，并允许用户覆盖"。
- **配置治理与可观测性**：#6530（为每个 config.toml 键建立声明表 + 版本化迁移）、#6526（标准指令预算可调，且裁剪/丢弃时可见）、#6516（清理死配置与 stub）。
- **Web 抓取与多媒体**：#6531（抓取/搜索质量、图片静默丢弃）、#6421（图片输入能力误判）。
- **仓库瘦身与去重**：#6517（删除约 2,650 行无消费者代码）、#6514（4 个手写推理 HTTP 客户端并列于 CodewhaleClient）。
- **发布与 CI 可靠性**：#6534（测试向真实 `~/.codewhale/audit.log` 写入 integration.dsh.* 事件）、#6543（cargo +1.89 check 因 8 处未满足的 `#[expect(dead_code)]` 失败）、#6507/#6535（Windows NSIS 安装验证）。

## 6. 开发者关注点

- **子代理生命周期与父代理不对等**：子代理不会压缩、预算耗尽即"死亡"，且确定性摘要只存在于交回提示中（#6504、#6536）。这是多代理工作流可靠性的直接障碍。
- **压缩机制事实上不可用**：16 次记录中 15 次失败，摘要调用约 219k tokens 且 0% 缓存命中（#6540）。长会话用户受影响最重。
- **缓存经济学未被优化**：deepseek-flash 占 3.55B tokens 的 94.8%，未命中成本是命中的 50 倍（#6541），而 #6540 显示的 0% 命中率说明优化空间很大。
- **工具调用错误率偏高**：5.0% 的调用出错，主要是 edit 旧文本不匹配、cwd 越界与写作用域争用、无目标调用 update_goal（#6542）。
- **配置"第二权威"与遗留代码**：配置键、环境变量、命令行 flag 存在多份权威；`crates/workflow` 约 2,650 行无生产消费者；模型能力判定分散在模型名表中（#6516、#6517、#6515、#6514）。
- **贡献者体验**：`cargo +1.89 check` 在 origin/main 上直接失败（#6543），会阻塞新贡献者；测试向真实 audit.log 写入事件（#6534）说明测试隔离（`scripts/with-hermetic-test-home.sh`）未被全部路径遵守。
- **模型元数据可被用户修正**：当目录错误或缺项时（如 #6421），用户没有任何配置手段声明"此模型支持图像/推理/256k 窗口"（#6529）。
- **凭据处理的细节问题**：粘贴的 API key 仅做 `.trim()`，BOM、零宽空格、不间断空格会导致鉴权失败；鉴权错误信息未指明 provider、host 与 key 来源（#6528）。

</details>

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar) 自动生成。*