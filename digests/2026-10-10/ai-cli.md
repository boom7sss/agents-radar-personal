# AI CLI 工具社区动态日报 2026-10-10

> 生成时间: 2026-10-10 13:58 UTC | 覆盖工具: 9 个

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

# AI CLI 工具生态横向对比分析报告（2026-10-10）

> 数据窗口：2026-10-10 各社区公开动态摘要。所有数字与结论均来自所提供材料。

---

## 1. 生态全景

当前 AI CLI 工具生态已从"功能竞赛"整体转入**稳定性、平台兼容性与架构治理的深水区**：今日九个工具中仅四个有新版本发布，而 Windows 平台缺陷、会话/后台服务可靠性、配置持久化成为跨工具的集中反馈点。与此同时，多 Agent 架构（Qwen Code 的 Managed Agent、Claude Code 的 subagent、Gemini CLI 的 subagent 体系）成为下一阶段的架构主线，社区讨论已从"能不能用"转向"多会话并发下的状态一致性"。认证与计费（Passkey、Keychain、速率限制 Reset、用量限额）则构成付费用户情绪最敏感的触点。整体判断：**工具已进入可用阶段，但距离"生产级可靠"仍有明显差距**。

---

## 2. 各工具活跃度对比

| 工具 | 版本发布 | 热点 Issues（材料列出） | PR 更新（材料列出） | 今日基调 |
|---|---|---|---|---|
| **Claude Code** | v2.1.296 | 10 条热点（#50246 👍211） | 3 条（材料注明不足 10 条） | 版本迭代 + 桌面端缺陷集中 |
| **OpenAI Codex** | rust-v0.162.1（稳定）+ 0.163.0-alpha.5 | 10 条 | 10 条 | Windows 问题集中爆发 |
| **Gemini CLI** | v0.65.0-nightly + v0.64.0-preview.1 | 10 条 | 10 条 | subagent 行为缺陷密集 |
| **GitHub Copilot CLI** | v1.0.96-0 / -1 / -2（+ v1.0.95） | 10 条 | 1 条（材料注明仅 1 条） | 沙箱权限 + 认证回归 |
| **Kimi Code CLI** | 无 | 0 条 | 1 条（文档类） | 静止，仅文档更新 |
| **OpenCode** | 无 | 10 条 | 10 条 | managed service 稳定性危机 |
| **Pi (pi-mono)** | 无 | 10 条 | 8 条（注：标题写"10 条"但实际列出 8 条） | 终端兼容回归 + provider 缺陷 |
| **Qwen Code** | v0.25.0-nightly | 10 条 | 10 条 | Managed Agent 架构推进 + P1 Bug |
| **DeepSeek TUI (Codewhale)** | 无 | 10 条（9 条中 8 条今日关闭） | 10 条 | v0.10.2 缺陷收敛 + 架构拆分 |

**观察**：Release 密度与社区活跃度不成正比——OpenCode、Pi、Qwen Code 均无正式发版，但 Issue/PR 讨论量饱满；Kimi Code CLI 当日唯一信号是文档，属于明显的低活跃窗口。

---

## 3. 共同关注的功能方向

### 3.1 终端/TUI 可靠性（覆盖最广）
- **Claude Code**：控制键永久失效（#96499）、输出无法复制（#93147）、粘贴被折叠（#99252）
- **Pi**：0.99.x 颜色查询泄漏误触外部编辑器（#10256）、大 diff 击穿 TUI（#8036）、失焦后光标态错误（#3896）
- **Gemini CLI**：终端 resize 闪烁（#21924）、Ctrl+R 中 Unicode 高亮偏移（#29699）
- **OpenCode**：自动滚动跳变（#54147）、timeline 滚动性能（#54293）
- **Pi**：herdr 中 kitty 图片渲染回退（#10774）

> 共性诉求：**跨终端（mintty/ConPTY/Wayland/GNOME Terminal）行为一致 + 大规模输出不崩**。

### 3.2 Windows / 跨平台质量
- **OpenAI Codex**：WSL 执行失败（#49731）、沙箱共享冲突（#51932）、桌面崩溃（#43347）、卡加载（#48522）——今日最密集的阻断性缺陷簇
- **Claude Code**：桌面端定时任务消失（#97406）、@ 文件选择器遗漏深层文件（#101047）、SendMessage 静默失败（#87501）
- **OpenCode**：Windows ARM64 构建失败（#45875）、UTF-16 BOM 导入失败（#54306）
- **Pi**：Windows 使用方式汇总（#7547，80 评论）
- **DeepSeek TUI**：Windows junction/跨卷状态路径失败（#6947、#6949）

### 3.3 会话与配置持久化
- **OpenAI Codex**：权限/审批模式无法持久化（#29915）
- **Gemini CLI**：Browser Agent 忽略 settings.json 覆盖（#22267）、symlink agent 不被识别（#20079）
- **Claude Code**：`/resume` 无法枚举会话（#99066）
- **OpenCode**：session 卡死 HTTP 400 不可恢复（#52463）
- **Qwen Code**：daemon 上单 Session 阻塞其他 Session（#13800）

### 3.4 认证与计费权益
- **Claude Code**：Passkey/WebAuthn 统一登录（#84862）、用量限额异常消耗（#100746）
- **OpenAI Codex**：Reset 失败却消耗次数（#31606，👍68 为全样本最高）
- **Copilot CLI**：Keychain 提示回归（#2494）、NixOS keychain 损坏（#3081）、Atlassian MCP 重复授权（#2536）
- **Pi**：OpenAI OAuth 403（#10605）

### 3.5 静默失败 / "报成功但不生效"
- **Claude Code**：SendMessage 假成功（#87501）、OSC 52 假成功（#93147）
- **Gemini CLI**：subagent 达 MAX_TURNS 却报 GOAL 成功（#22323）
- **Pi**：headless 永久挂死无错误（#10762）、RPC prompt 静默丢弃（#10606）
- **DeepSeek TUI**：安全扫描无法拉取 CodeQL 告警却"未读取即无操作"（#6951）

### 3.6 多 Agent 与监督层
- **Qwen Code**：Managed Agent 双路径架构（#12380，51 评论）、子 Agent worktree 隔离
- **OpenAI Codex**：持久化监督者提案（#52564）+ "完成任务前停手"（#50771）
- **Gemini CLI**：subagent 主动调用率过低（#21968）、AST 感知代码库映射（#22745）
- **Claude Code**：subagent `autoCompactWindow` 字段（v2.1.296）

---

## 4. 差异化定位分析

| 工具 | 功能侧重 | 目标用户 | 技术路线特征 |
|---|---|---|---|
| **Claude Code** | 企业网关策略、桌面端一致性、合规（HIPAA 示例） | 企业团队 + 个人开发者 | 闭源为主，"开源 Claude Code" 长期 PR（#41447）话题性强 |
| **OpenAI Codex** | 执行层可观测性、浏览器/computer use、移动端远程接管 | 付费 Pro 用户 + 跨设备协作 | Rust 重写（rust-v*），强调运行时/连接层诊断能力 |
| **Gemini CLI** | subagent 体系、AST 感知代码理解、OS 沙箱 | 大型代码库 / 强自动化用户 | 依托 Gemini 3 原生 bash 亲和性，nightly 高频迭代 |
| **GitHub Copilot CLI** | 沙箱权限模型、BYOK 多模型、IDE/ACP 集成 | 企业 + IDE 生态绑定用户 | 与 GitHub/VS Code/Entra 深度耦合，ACP 是集成主线 |
| **OpenCode** | 后台托管服务（managed service）、TUI 插件生态 | 追求自托管与扩展性的开发者 | 强调服务平台化，v2 迁移带来破坏性变更 |
| **Pi (pi-mono)** | 扩展/插件 API 契约、多 provider 灵活接入 | 高级扩展作者 + 多模型用户 | 契约驱动的扩展体系，provider 配置高度可定制 |
| **Qwen Code** | Managed Agent 架构、Session 管理、WebShell | 多 Agent / 后台自动化场景 | 分阶段切片交付（H3/H4），架构先行 |
| **DeepSeek TUI** | Rust crate 解耦（RS-8/RS-9）、PTY 深度集成 | Rust 生态 / 终端重度用户 | 架构治理与贡献门控（Contribution-Gate）并重 |

**关键分野**：
- **"网关/策略派"**（Claude Code、Copilot CLI）vs **"运行时/执行派"**（Codex、Qwen Code）
- **闭源合规路线**（Claude Code）vs **Rust 工程化路线**（Codex、DeepSeek TUI）vs **TS 快速迭代路线**（Gemini CLI、OpenCode）

---

## 5. 社区热度与成熟度

### 高活跃 / 快速迭代阶段
- **OpenAI Codex**：Issue 与 PR 各 10 条饱满，稳定版 + alpha 双线并行，Windows 缺陷密度最高 → 处于**扩张期但平台质量承压**
- **Qwen Code**：P1 Bug 与架构 PR 密集，维护者（wenshao、yiliang114）高频提交，51 评论的架构提案 → **架构建设中**
- **OpenCode**：managed service 高严重度缺陷（#54181 severity:high）+ 双位数 PR → **稳定性攻坚期**
- **Pi**：8 条 PR + 10 条 Issue，扩展 API 契约类需求密集 → **生态打磨期**
- **Gemini CLI**：nightly + preview 双发布，P1/P2 subagent 缺陷成体系 → **高频迭代期**

### 结构收敛 / 成熟阶段
- **Claude Code**：发布节奏稳定、Issue 呈现"体验细节"特征（复制、粘贴、限额），长期功能请求（#50246 消息队列）已关闭 → **成熟度较高**
- **DeepSeek TUI**：9 条 Issue 中 8 条今日关闭，进入 v0.10.2 收尾 → **缺陷收敛期**
- **Copilot CLI**：一日三个补丁版本，Issue 偏企业集成（Entra、Atlassian MCP） → **企业化打磨期**

### 低活跃窗口
- **Kimi Code CLI**：Issue 0 条、仅 1 条文档 PR → **明显静默**（材料明确说明无法据此提炼趋势）

**成熟度排序（基于当日信号）**：Claude Code ≈ Copilot CLI > DeepSeek TUI > Gemini CLI > Codex / OpenCode / Pi / Qwen Code > Kimi Code CLI

---

## 6. 值得关注的趋势信号

### 信号一：稳定性与回归已压倒新功能
今日 OpenCode（"稳定性与回归而非新功能"）、Pi（"回归与稳定性优先"）、Codex（Windows 阻断缺陷）三处社区情绪指向一致。**参考价值**：开发者选型时应优先考察目标工具在自身平台（尤其 Windows/WSL）的近三个月缺陷关闭率，而非功能列表长度。

### 信号二："静默失败"成为最难排查的缺陷类别
假成功（SendMessage）、假成功（OSC 52）、误报成功（MAX_TURNS→GOAL）、无信号挂死（Pi headless）横跨四个工具。**参考价值**：评估工具时需关注其**可观测性投入**——Codex 今日 PR 集中于运行时重置上报（#52825）、连接观测（#52724）、关闭原因解释（#52721），是正向样本。

### 信号三：多 Agent 从"能力"转向"隔离与恢复正确性"
Qwen Code 的 worktree 隔离（#13841）、Claude Code 的 subagent 压缩窗口、Gemini CLI 的 subagent 终止语义，共同指向**子代理状态一致性**。**参考价值**：多 Agent 落地的真正瓶颈不在模型能力，而在会话隔离、挂载检查与恢复路径——选型时应验证并发子会话是否互相阻塞（参考 Qwen #13800）。

### 信号四：付费权益与计量准确性成信任红线
Codex Reset 失败消耗次数（👍68，全样本最高）、Claude Code 限额异常消耗（#100746）、Codex 付费用户站点策略误伤（#29343）。**参考价值**：计量与配额问题的社区情绪烈度远高于普通 Bug，是企业采购时的高风险项。

### 信号五：终端兼容性是被低估的长期成本
从 mintty/ConPTY（Pi）、Wayland（Gemini CLI）、GNOME Terminal（Claude Code）到 Windows junction 跨卷（DeepSeek TUI），跨平台细节反复消耗社区注意力。**参考价值**：在异构终端环境（Linux 服务器 + Windows 本地）中部署时，应将终端兼容性列入 POC 验证清单。

### 信号六：架构治理类工作正在被"贡献门控"制度化
DeepSeek TUI 的 RS-8/RS-9 拆分以 `module_graph.py --check` 为强制基线，并出现 Contribution-Gate 自锁缺陷（#6952）——说明**架构约束已进入工作流引擎层面**。**参考价值**：这代表 AI CLI 项目开始具备中大型软件工程的治理特征，对评估项目长期可维护性是积极信号。

---

**一句话结论**：今日生态的核心矛盾是**"快速扩张的功能面"与"尚未成熟的平台可靠性"之间的落差**；对技术决策者而言，当前选型的关键变量已从模型能力转向**平台一致性、可观测性与计量可信度**。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告

> 数据来源：github.com/anthropics/skills，截止 2026-10-10。所有条目均基于所提供材料，评论数缺失的 PR 按关注度梯队排列。

## 1. 热门 Skills 排行

| Skill / PR | 功能 | 讨论热点 | 状态 |
|---|---|---|---|
| [skill-creator 系列修复](https://github.com/anthropics/skills/pull/1298)（#1298 / #1352 / #1383 / #1394 / #1681 / #1961） | 修复 Skill 创建与评测工具链 | 触发评测在 Windows 失败、并行 worker 交叉匹配导致误报、eval viewer 的 XSS 与安全加固 | OPEN（多为长期未合并） |
| [mcp-builder 修复](https://github.com/anthropics/skills/pull/1742)（#1742 / #1390） | 适配 `mcp>=2.0.0` 的导入与自定义 header；修复评测打分 | 新版本 API 重命名、`TextContent` 不可序列化导致评测 0/N | OPEN |
| [proofcore-contract-auditor](https://github.com/anthropics/skills/pull/1771) | Solidity/Rust 智能合约静态审计，审计证明锚定 TON 区块链 | Web3 与加密证明方向的新 Skill | OPEN |
| [md2video-audio](https://github.com/anthropics/skills/pull/1703) | 将 Markdown 直接编译为带拟人配音的 MP4 | 零成本文档转视频工作流 | OPEN |
| [document-typography](https://github.com/anthropics/skills/pull/514)（#514 / #1734 / #1792） | 排版质量控制（孤词、孤行、编号错位）；docx 孤儿注释与 LibreOffice 超时检测 | AI 生成文档的排版与可靠性 | OPEN |
| [notion-spec-to-implementation / quantitative-resume-auditor](https://github.com/anthropics/skills/pull/1245) | 将产品/技术规格转为 Notion 可执行任务；简历量化审计 | 规格到实现的工作流自动化 | OPEN |
| [scnet-hpc](https://github.com/anthropics/skills/pull/1615) | 通过 SSH + Slurm 操作 SCNet HPC 集群 | 科研/高性能计算场景 | OPEN |
| [AWT (AI Watch Tester)](https://github.com/anthropics/skills/pull/822) | 赋予 Claude 视觉与浏览器控制做 E2E 测试 | AI 驱动的端到端测试 | OPEN |

> 注：以上 PR 评论数在数据中均为 `undefined`，排序依据为提供的展示次序与更新活跃度。

## 2. 社区需求趋势（来自 Issues）

- **Skill 安全与信任边界**：[Issue #492](https://github.com/anthropics/skills/issues/492) 43 条评论，指出社区 Skill 在 `anthropic/` 命名空间下分发造成的冒名与提权风险，是当前讨论最集中的议题。
- **组织级 Skill 共享与分发**：[Issue #228](https://github.com/anthropics/skills/issues/228) 16 条评论，希望 Claude.ai 支持组织内共享技能库，替代手动下载/上传 `.skill` 文件。
- **评测工具链可信度**：[#556](https://github.com/anthropics/skills/issues/556)、[#1390](https://github.com/anthropics/skills/issues/1390)、[#1383](https://github.com/anthropics/skills/issues/1383)、[#1352](https://github.com/anthropics/skills/issues/1352) 反复反映 `run_eval.py` 触发率 0%、评测误判等评测可靠性问题。
- **上下文窗口与 Token 效率**：[Issue #1487](https://github.com/anthropics/skills/issues/1487) 指出 `claude-api` 单次注入约 156k tokens；[Issue #202](https://github.com/anthropics/skills/issues/202)（已关闭）批评 skill-creator 文档化而非操作化，均指向同一诉求。
- **新方向提案**：compact-memory 符号化状态压缩（[#1329](https://github.com/anthropics/skills/issues/1329)）、agent-governance 治理模式（[#412](https://github.com/anthropics/skills/issues/412)，已关闭）、Reasoning Quality Gate Pipeline 三段式质量门（[#1385](https://github.com/anthropics/skills/issues/1385)）。
- **重复与冲突问题**：[Issue #189](https://github.com/anthropics/skills/issues/189) 反映 `document-skills` 与 `example-skills` 插件内容完全相同导致上下文重复。

## 3. 高潜力待合并 Skills

- [webapp-testing 修复](https://github.com/anthropics/skills/pull/1976)（#1976 / #1980）：修复 `textarea`/`select` 元素识别，并移除 `with_server.py` 的 `shell=True`，均为小而明确的修复，2026-10-06 提交后近期仍在更新。
- [algorithmic-art wrapAround 修复](https://github.com/anthropics/skills/pull/1977)：修正取模逻辑使其支持负数，直接修复 Issue #1897。
- [skill-creator eval viewer 安全加固](https://github.com/anthropics/skills/pull/1961)：覆盖脚本注入、DNS rebinding、跨站 POST 与转义，2026-10-03 新提交。
- [docx LibreOffice 超时处理](https://github.com/anthropics/skills/pull/1792)：超时改为报错并校验输出，与 #1734 同属 docx 可靠性改进。
- [claude-api 死链修复](https://github.com/anthropics/skills/pull/1730)：替换 3 个 404 文档链接并已验证 HTTP 200，风险低、易合并。
- [mcp-builder 适配 mcp>=2](https://github.com/anthropics/skills/pull/1742)：修复 #1668，2026-10-08 仍在更新，处于活跃维护状态。

## 4. Skills 生态洞察

当前社区最集中的诉求是 **Skill 工具链的安全性与可靠性地基**——命名空间信任边界、评测结果可信度、以及 Skill 的 Token 成本控制，改进需求显著压倒新 Skill 的功能扩张。

---

# Claude Code 社区动态日报（2026-10-10）

## 今日速览
今日发布 v2.1.296，重点扩展了 Claude apps gateway 的策略配置能力并新增 subagent 的 `autoCompactWindow` 字段。社区方面，长期呼声极高的消息队列模式 Issue #50246 已关闭，同时 Windows 桌面端与 TUI 的稳定性缺陷集中更新。认证、成本消耗、桌面端一致性仍是开发者反馈的三大焦点。

## 版本发布

**v2.1.296**
- 在 Claude apps gateway 的 `managed.policies[]` 中新增 `code` 键：应用与 `cli` 相同的设置，同时作用于 Claude Desktop 的 Code 标签页；与 `desktop` 并列使用时，可开启 Claude Desktop 的 gateway 模式。
- 在 subagent frontmatter 和 `--agents` 定义中新增 `autoCompactWindow` 字段。

链接: anthropics/claude-code v2.1.296

## 社区热点 Issues

1. **#50246 [CLOSED] 消息队列模式**（👍 211，评论 75）：请求在任务执行中排队后续消息而非强制打断，是今日热度最高、社区反响最强烈的功能。该需求已关闭，值得关注其落地方式。
   链接: anthropics/claude-code Issue #50246

2. **#84862 [OPEN] Passkey（WebAuthn）登录**（👍 100，评论 14）：呼吁在所有终端界面统一支持 Passkey 登录，反映社区对认证体验现代化的强需求。
   链接: anthropics/claude-code Issue #84862

3. **#99407 [OPEN] Shopify 连接器支持多店铺**：开发者需同时连接一个组织下的九个开发店铺，说明连接器在企业工作流中正被重度使用，多资源管理能力成为瓶颈。
   链接: anthropics/claude-code Issue #99407

4. **#97406 [OPEN] Windows 桌面端定时任务列表消失**：属回归缺陷，计划任务不再列于 "Scheduled" 下且打开需多次点击，影响桌面端日常可用性。
   链接: anthropics/claude-code Issue #97406

5. **#97574 [OPEN] 桌面端 Code 标签页忽略 ANTHROPIC_BASE_URL**：终端 CLI 正常而桌面端失效，涉及网络配置一致性，对企业代理/自建网关用户影响较大。
   链接: anthropics/claude-code Issue #97574

6. **#99066 [OPEN] `/resume` 无法枚举会话**：43 个完整 transcript 存在却返回零会话，而 `claude --resume <id>` 可正常恢复，属带复现的高价值缺陷。
   链接: anthropics/claude-code Issue #99066

7. **#100746 [OPEN] 用量限额消耗过快**：周限额与会话限额消耗远超预期，涉及成本，属开发者高度敏感的问题。
   链接: anthropics/claude-code Issue #100746

8. **#87501 [OPEN] 跨会话 SendMessage 在原生 Windows 静默失败**：返回 success 但消息从未被消费，属隐蔽的数据一致性问题，排查成本高。
   链接: anthropics/claude-code Issue #87501

9. **#91915 [OPEN] 自动更新重启后远程控制无法重建**：导致 headless 机器永久失联，对远程/无人值守场景危害严重。
   链接: anthropics/claude-code Issue #91915

10. **#100791 [OPEN] Auto mode 分类器阻止 agent 修复自身 skill 脚本**：无人值守定时运行中被标为 [Self-Modification] 且无审批路径，反映自动化与权限模型的冲突。
    链接: anthropics/claude-code Issue #100791

**其他值得留意**：#96499（进入 agent view 后 ESC/Ctrl+C 等控制键永久失效）、#93147（GNOME Terminal 输出无法复制且 OSC 52 静默失败）、#99252（用户粘贴内容被折叠且无法展开/复制）、#101047（桌面端 @ 文件选择器遗漏深层嵌套文件）均指向 TUI 与终端交互的可靠性问题。

## 重要 PR 进展

1. **#41447 [OPEN] feat: open source claude code ✨**：主张开源 Claude Code，关联关闭多个历史 Issue，虽长期挂起但话题性极强。
   链接: anthropics/claude-code PR #41447

2. **#6754 [OPEN] 文档：VS Code 中 Claude CLI 的 RTL 支持**：新增 `rtl-support.md`，解决希伯来语/阿拉伯语/波斯语在 VS Code 集成终端中的渲染问题。
   链接: anthropics/claude-code PR #6754

3. **#100293 [CLOSED] 新增 HIPAA 设置示例**：在 `examples/settings/` 下加入 `settings-hipaa.json`、`managed-mcp-hipaa.json` 及 `README-hipaa.md`，面向需限制会话的合规组织。
   链接: anthropics/claude-code PR #100293

> 注：过去 24 小时内更新的 PR 仅 3 条，无法凑齐 10 条，以上为全部可用条目。

## 功能需求趋势

- **交互模式创新**：消息队列模式（#50246）获 211 赞，显示用户希望在不打断当前任务的前提下持续追加指令。
- **认证现代化**：Passkey/WebAuthn 全平台统一登录（#84862）呼声高。
- **桌面端能力补齐**：就地编辑 Markdown 预览（#98103）、可折叠计划任务列表（#97406）等，反映桌面应用与 CLI 体验对齐的诉求。
- **集成与多资源管理**：Shopify 多店铺连接（#99407）代表连接器需要支持并发多实例。
- **自动化与权限治理**：无人值守场景下的权限审批路径（#100791）成为新方向。

## 开发者关注点

- **桌面端与 CLI 行为不一致**：`ANTHROPIC_BASE_URL` 被忽略（#97574）、@ 文件选择器遗漏深层文件（#101047）、计划任务列表消失（#97406）等，说明桌面端与 CLI 的配置与功能对齐是高频痛点。
- **终端交互可靠性**：控制键失效（#96499）、输出无法复制（#93147）、粘贴内容被折叠（#99252）直接影响日常使用体验。
- **成本与用量透明度**：限额异常消耗（#100746）引发对计量准确性的担忧。
- **隐蔽失败与静默错误**：SendMessage 假成功（#87501）、OSC 52 假成功（#93147）等"报成功但不生效"类问题显著增加排查成本。
- **自动化权限模型**：Auto mode 在无人值守运行时阻断 agent 自我修复，缺少审批通路（#100791）。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报（2026-10-10）

## 今日速览

今日 Codex 发布稳定补丁版 **rust-v0.162.1**，修复了 TUI 多行异步问题的崩溃以及后台服务与 CLI 默认特性不一致导致的启动失败，同时发布 0.163.0-alpha.5 预发布版本。社区侧，Windows 平台问题本周持续集中爆发，涉及沙箱运行时、桌面应用崩溃与 WSL 执行失败等；此外，限制速率的 Reset 失败、iOS Remote 项目列表回归、以及"Codex 完成任务前反复停手"的模型行为问题成为讨论最热烈的话题。

---

## 版本发布

**rust-v0.162.1（稳定版）**
- **修复 TUI 崩溃**：当异步问题包含多行内容时，保留换行与完整超链接目标，避免崩溃。(#51866)
- **修复启动失败**：解决运行中后台服务器的特性设置与 CLI 默认值不一致所导致的启动问题，并改进兼容性检查。

**rust-v0.163.0-alpha.5（预发布）**
- 仅发布版本号，未附详细说明。

---

## 社区热点 Issues

1. **[#36040] iOS Remote 仅列出有近期会话的项目（回归）** — 75 条评论，iOS Remote Control 与 macOS 主机配对后无法列出完整项目，属影响核心协作流程的回归问题。👍4
   https://github.com/openai/codex/issues/36040

2. **[#31606] 速率限制 Reset 失败未生效且浪费一次重置** — 60 条评论，👍68 为今日最高。Pro 订阅用户反馈 Reset 未应用却被消耗，直接触及付费权益，社区情绪强烈。
   https://github.com/openai/codex/issues/31606

3. **[#29343] Chrome 插件、浏览器与 computer use 拒绝访问特定站点** — 47 条评论。付费（€225/月）用户反馈站点安全策略误伤，涉及浏览器/计算机使用能力可用性。
   https://github.com/openai/codex/issues/29343

4. **[#49731] Windows "Run agent in WSL" 所有命令失败** — 35 条评论，👍22。报错"Failed to create unified exec process: No such file or directory"，arg0 helper 目录被 Windows exec-server 删除，严重影响 Windows+WSL 工作流。
   https://github.com/openai/codex/issues/49731

5. **[#51932] Windows App 沙箱运行时读取/执行校验失败（共享冲突）** — 28 条评论。26.1002.7124.0 版本下沙箱校验报 sharing violation。
   https://github.com/openai/codex/issues/51932

6. **[#43347] Windows 关闭最后一个内置 Browser Use 标签页导致桌面应用崩溃** — 23 条评论。跨多个构建可复现的稳定性缺陷。
   https://github.com/openai/codex/issues/43347

7. **[#48522] Windows 桌面应用卡在无限加载转圈** — 17 条评论。渲染进程存活但 `app://-/index.html` 路由始终不解析，应用不可用。
   https://github.com/openai/codex/issues/48522

8. **[#50771] Codex 在任务完成前反复停手或丢失任务** — 11 条评论。模型声称会继续却结束回合，被指出错误后道歉但不执行，属模型行为/上下文类问题。
   https://github.com/openai/codex/issues/50771

9. **[#52564] 功能请求：为 Codex 线程提供持久化的 ChatGPT 风格监督者** — 10 条评论。提议独立、证据驱动的项目级监督会话，与执行型 worker 职责分离。
   https://github.com/openai/codex/issues/52564

10. **[#29915] 权限/审批模式选择在新旧线程中均无法持久化** — 9 条评论。涉及会话恢复（thread/resume）与桌面端更广泛的持久化缺陷。
    https://github.com/openai/codex/issues/29915

---

## 重要 PR 进展

1. **[#52825] 在接受后续请求前报告 exec 运行时重置** — 替换 gRPC code-mode 运行时会丢失已存值与运行中的 cell，此前重连后静默继续会掩盖该丢失。
   https://github.com/openai/codex/pull/52825

2. **[#52778] 使固定的转录提示可点击** — 单击固定的提示标题即可滚动定位到原始提示，同时结束文本选择、取消搜索并清除活动状态。
   https://github.com/openai/codex/pull/52778

3. **[#52756] 对语音会话失败进行分类并记录终态** — 为语音失败指标补充原因与生命周期阶段，修复会话时长在最终结果确定前就被记录的问题。
   https://github.com/openai/codex/pull/52756

4. **[#52748] 让 code-mode 的 `exit()` 停止整个 cell** — 此前 `exit()` 作为可捕获异常，可在 catch、finally 及排队回调中继续执行。
   https://github.com/openai/codex/pull/52748

5. **[#52742] 为 OpenAI 请求添加可选的输出 token 回放** — 新增默认关闭的 `output_token_replay`，请求 `output.encrypted_content` 并保留加密的消息与工具调用输出。
   https://github.com/openai/codex/pull/52742

6. **[#52736] 允许模型目录覆盖增量工具通知** — 为更新提示、工具与 namespace 移除头、namespace 指令更新与清除消息增加 `model_messages.tools.incremental_tools` 覆盖项。
   https://github.com/openai/codex/pull/52736

7. **[#52725] 使用 OSC 7501 报告终端程序状态** — 此前生命周期状态上报仅限 iTerm2，OSC 7501 可让其他终端接收 Codex 的程序状态。
   https://github.com/openai/codex/pull/52725

8. **[#52723] 为 code-mode 主机添加可选的 gRPC over stdio** — 新增 `grpc+stdio://` 主机传输及默认关闭的 `code_mode_host_grpc` 特性标志，跨调用共享惰性 HTTP/2 通道与主机进程。
   https://github.com/openai/codex/pull/52723

9. **[#52702] 请求失败后通过系统代理重试 bootstrap GET** — 账户发现与云配置 GET 在连接后、收到响应头前失败时会绕过系统代理，现改为经代理重试。
   https://github.com/openai/codex/pull/52702

10. **[#52707] 将 Windows MXC 沙箱迁移到拆分的 MXC crate** — 因 PSEC API 符号可能出现在尚未启用 MXC 的过渡性 Windows 构建上，可用性检测需验证原生进程安全环境。
    https://github.com/openai/codex/pull/52707

---

## 功能需求趋势

- **远程/移动端协同**：iOS Remote 项目列表回归（#36040）、Windows 无法启用 Remote Control（#31387）、希望 mobile app 可用 codex-cli 会话（#38963）等，指向跨设备接管与 CLI↔移动端打通的强烈需求。
- **监督与记忆层**：持久化监督者（#52564）结合 #50771 反映的"任务未完成即停手"问题，社区希望引入独立于执行者的项目级监督与记忆机制。
- **浏览器/computer use 可控性**：多条 Issue（#29343、#44451、#47992、#51442）集中于站点安全策略、URL 策略与本地文件/自签名证书（#23891），开发者要求更透明的放行与恢复路径。
- **Windows 平台质量**：Windows 相关 Issue 占比突出，涵盖沙箱、exec-server、MXC、桌面崩溃与卡加载，是当前最集中的平台短板方向。

---

## 开发者关注点

- **Windows 可靠性是首要痛点**：沙箱共享冲突（#51932）、WSL 执行失败（#49731）、helper 错误（#38290）、MXC 启动失败（#52407）等构成密集反馈，且多为阻断性缺陷。
- **付费权益与限流体验**：Reset 失败消耗次数（#31606）、站点安全策略误伤付费用户（#29343），易引发对订阅价值的质疑，社区互动量（👍68、👍19）明显偏高。
- **会话与设置持久化**：权限/审批模式无法持久化（#29915）、远程控制配对失败（#31387），影响日常使用的一致性。
- **工具链基础设施可见性**：今日 PR 集中于运行时重置上报（#52825）、连接尝试观测（#52724）、关闭原因解释（#52721）与代理重试（#52702），显示团队正加强执行/连接层的可观测性与诊断能力。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报（2026-10-10）

## 今日速览

今天的动态集中于**稳定性修复**与**子智能体（subagent）行为问题**。社区对 `codebase_investigator`、generalist agent、browser subagent 的异常终止、挂起、配置失效等问题反馈密集，多个 P1/P2 bug 持续活跃。同时，一批针对性修复 PR 正在推进，涉及超时处理、unicode 高亮、锁定文件同步等。

---

## 版本发布

- **v0.65.0-nightly.20261010.g9b6e0265d**（nightly）
  - `fix(cli)`：在 `fetchJson` 中处理 JSON 解析与响应流错误（[#29658](https://github.com/google-gemini/gemini-cli/pull/29658)）
  - `fix(core)`：在 `truncateString` 中保留行终止符（[#29673](https://github.com/google-gemini/gemini-cli/pull/29673)）

- **v0.64.0-preview.1**（preview 补丁）
  - 从 `release/v0.64.0-preview.0` 分支 cherry-pick 补丁（[#29696](https://github.com/google-gemini/gemini-cli/pull/29696)）

---

## 社区热点 Issues

1. **[#22323](https://github.com/google-gemini/gemini-cli/issues/22323) [P1/agent]** Subagent 达到 `MAX_TURNS` 后被报告为 `GOAL` 成功，掩盖了中断事实 —— `codebase_investigator` 未完成分析却返回 success，属于结果误导性 bug，13 条评论，社区高度关注。

2. **[#21409](https://github.com/google-gemini/gemini-cli/issues/21409) [P1/agent]** Generalist agent 永久挂起 —— 简单操作（如创建文件夹）即挂起，用户等待可长达一小时，👍 数达 8，是反馈最强烈的可用性问题之一。

3. **[#21983](https://github.com/google-gemini/gemini-cli/issues/21983) [P1/agent/browser]** Browser subagent 在 Wayland 环境下失败 —— 影响 Linux Wayland 用户群，属于平台兼容性阻塞问题。

4. **[#19873](https://github.com/google-gemini/gemini-cli/issues/19873) [P2/agent]** 通过零依赖 OS 沙箱与执行后意图路由，发挥模型的 bash 亲和性 —— 方向性提案，涉及 Gemini 3 原生 bash 能力的充分利用，具备架构意义。

5. **[#22745](https://github.com/google-gemini/gemini-cli/issues/22745) [P2/agent]** 评估 AST 感知的文件读取、搜索与代码库映射 —— EPIC 级调研，目标是减少工具调用轮次、提升读取精度。

6. **[#21968](https://github.com/google-gemini/gemini-cli/issues/21968) [P2/agent]** Gemini 主动使用 skills 和 sub-agents 的频率过低 —— 用户反馈除非显式指令，否则几乎不触发，影响自定义能力落地。

7. **[#22267](https://github.com/google-gemini/gemini-cli/issues/22267) [P2/agent]** Browser Agent 忽略 `settings.json` 覆盖项（如 `maxTurns`）—— 配置失效问题，破坏用户对配置系统的信任。

8. **[#20079](https://github.com/google-gemini/gemini-cli/issues/20079) [P2/agent]** `~/.gemini/agents/filename.md` 为符号链接时无法被识别为 agent —— 影响依赖 symlink 管理组织 agent 配置的用户。

9. **[#24246](https://github.com/google-gemini/gemini-cli/issues/24246) [P2/agent]** 工具数超过 128 时触发 400 错误 —— 大规模工具/扩展场景下的硬性瓶颈。

10. **[#22672](https://github.com/google-gemini/gemini-cli/issues/22672) [P2/agent]** Agent 应停止/抑制破坏性行为 —— 模型偶发使用 `git reset`、`--force` 等危险命令，属安全性关切。

---

## 重要 PR 进展

1. **[#29608](https://github.com/google-gemini/gemini-cli/pull/29608) [P1/core]** 为挂起的 web 搜索设置 30 秒超时 —— 修复 `GoogleSearch`/`WebFetch` 请求不返回导致 agent 永久停留在 `Thinking...` 的问题。

2. **[#29703](https://github.com/google-gemini/gemini-cli/pull/29703) [agent]** 将 atomic-write 临时文件名控制在 `NAME_MAX` 内 —— 修复长文件名（215–255 字节）写入触发 `ENAMETOOLONG`。

3. **[#29611](https://github.com/google-gemini/gemini-cli/pull/29611) [core]** 为带点的 Gemini 3 模型及别名支持多模态 function response —— 避免 `read_file` 读取的图像被作为非法 sibling parts 输出。

4. **[#29606](https://github.com/google-gemini/gemini-cli/pull/29606) [core]** 仅在有效 RFC 9110 token 前拆分自定义 header —— 修复 JSON 元数据类 header 值被错误解析。

5. **[#29607](https://github.com/google-gemini/gemini-cli/pull/29607) [platform]** 无报告时让 nightly eval summary 失败 —— 防止 `continue-on-error` 掩盖评测缺失。

6. **[#29644](https://github.com/google-gemini/gemini-cli/pull/29644) [P1/cli]** 恢复终端宽度变化时的防抖静态 UI 刷新（100ms）—— 改善横向/缩放场景下的渲染体验。

7. **[#29699](https://github.com/google-gemini/gemini-cli/pull/29699) [core]** 修正反向搜索（Ctrl+R）中 Unicode 字符高亮偏移 —— 修复如 `İ`（U+0130）小写展开导致的 off-by-one。

8. **[#29615](https://github.com/google-gemini/gemini-cli/pull/29615) [ci]** 对 chained E2E 增加触发成功门控与 SHA 回退加固 —— 防止 `workflow_run` 路径下的非预期代码检出。

9. **[#29700](https://github.com/google-gemini/gemini-cli/pull/29700) [P2/deps]** 同步 workspace `package.json` 与 lockfile 版本，并在 CI 中强制校验。

10. **[#29643](https://github.com/google-gemini/gemini-cli/pull/29643) [cli, CLOSED]** 重新选择 Google 登录时清除缓存凭据 —— 允许切换账号或重新认证，避免被陈旧 token 锁定。

---

## 功能需求趋势

- **子智能体体系成熟化**：围绕 subagent 的可靠性（恢复、终止语义）、可观测性（`/chat share` 展示轨迹，[#22598](https://github.com/google-gemini/gemini-cli/issues/22598)）、配置正确性持续积累需求。
- **自动化 agent 使用率**：社区希望模型能主动调用 skills 与 sub-agents，而非依赖显式指令（[#21968](https://github.com/google-gemini/gemini-cli/issues/21968)）。
- **代码库理解能力**：AST 感知的读取/搜索/映射成为调研主线（[#22745](https://github.com/google-gemini/gemini-cli/issues/22745)、[#22746](https://github.com/google-gemini/gemini-cli/issues/22746)）。
- **执行安全与沙箱**：零依赖 OS 沙箱、抑制破坏性命令（[#22672](https://github.com/google-gemini/gemini-cli/issues/22672)）等安全向需求上升。
- **浏览器 agent 韧性**：会话接管与锁恢复（[#22232](https://github.com/google-gemini/gemini-cli/issues/22232)）、平台兼容（Wayland）。

---

## 开发者关注点

- **挂起与超时**：generalist agent、web 搜索、交互式 prompt（如创建 vite app，[#22465](https://github.com/google-gemini/gemini-cli/issues/22465)）等多处出现卡死，开发者对缺乏超时保护反馈强烈。
- **配置与识别失效**：`settings.json` 覆盖被忽略、symlink agent 不被识别，暴露配置系统一致性问题。
- **终端渲染体验**：终端 resize 的闪烁与性能（[#21924](https://github.com/google-gemini/gemini-cli/issues/21924)）及 Unicode 高亮偏移，是 CLI 层高频细节痛点。
- **工具规模上限**：工具数超阈值触发 400 错误，限制扩展生态发展。
- **转义与字符串处理**：`\n` 转义行为（[#22466](https://github.com/google-gemini/gemini-cli/issues/22466)）、行终止符保留等底层字符串逻辑反复出现，属易被忽视但影响面广的问题。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报（2026-10-10）

## 今日速览

今日发布了 v1.0.96 系列的三个补丁版本，重点在沙箱凭据管理、模型 ID 规范化和权限决策时间线可视化。社区层面，认证与沙箱权限问题持续发酵：v1.0.16 的 Keychain 提示回归被关闭，NixOS keychain 与 macOS 沙箱限制 Gradle 等新问题浮现；同时 ACP 会话列表性能、BYOK 子代理模型兼容性等新 Issue 值得关注。

---

## 版本发布

**v1.0.96-2**
- 修复：`/model` 和 `/config model` 中的模型 ID 改为大小写不敏感，并保存规范化 ID。

**v1.0.96-1**
- 新增：交互式沙箱设置可提示可能的环境密钥，并支持在保存前添加掩码主机。
- 修复：在企业策略仍在解析期间，启动时保持 `/allow-all` 可用。

**v1.0.96-0**
- 改进：git 仓库中的交互式会话更快到达输入提示；时间线现在显示每次权限决策是由用户、Assisted Permissions、策略还是无人值守回退做出的。
- 修复：`/add-dir` 为当前会话授予所添加目录的沙箱访问权。

**v1.0.95（2026-10-09）**
- macOS 上可用时使用原生 Microsoft Entra broker 认证，并提供浏览器回退。
- `copilot config` 支持沙箱凭据注入主机键，Bash、Zsh、Fish 下支持键补全。
- `--context` 现在应用于新建和恢复的 ACP 会话。

---

## 社区热点 Issues

1. **[#2494 [CLOSED] copilot login 自动应答 'y/N' 导致 Keychain 提示回归](https://github.com/github/copilot-cli/issues/2494)**
   v1.0.16 起，系统 Keychain 不可用时 `copilot login` 不再等待用户输入而自动应答。12 条评论，认证流程的回归问题引发较多讨论，现已关闭。

2. **[#4686 [OPEN] Node.js OOM 崩溃：约 37 分钟后泄漏 31,965 个 libuv 句柄](https://github.com/github/copilot-cli/issues/4686)**
   Linux/EC2 环境下长时间会话崩溃，SEA 忽略 NODE_OPTIONS。会话稳定性关键问题，影响长时任务用户。

3. **[#5076 [CLOSED] `/add-dir` 未将目录加入沙箱允许列表](https://github.com/github/copilot-cli/issues/5076)**
   已在 v1.0.96-0 中修复，是沙箱权限体系的重要补漏。

4. **[#3035 [OPEN] 可被工具调用的 `cwd`（等价于 TUI `/cwd`）](https://github.com/github/copilot-cli/issues/3035)**
   请求让插件/工具能切换工作目录并触发技能重扫描，反映插件生态对更大控制权的需求。

5. **[#2536 [OPEN] Atlassian MCP 每次调用都需重新授权](https://github.com/github/copilot-cli/issues/2536)**
   3 个 👍、3 条评论，MCP 凭据持久化痛点，影响企业用户日常使用。

6. **[#3081 [OPEN] NixOS keychain 支持损坏](https://github.com/github/copilot-cli/issues/3081)**
   尽管已装 libsecret、GNOME Keyring、Seahorse，Copilot 仍无法访问系统 keychain。平台兼容性问题，2 条评论、3 个 👍。

7. **[#3866 [CLOSED] 深色背景下 Thinking 文本不可读（硬编码暗色）](https://github.com/github/copilot-cli/issues/3866)**
   4 个 👍，可访问性问题，已关闭，说明主题/对比度反馈被采纳。

8. **[#590 [CLOSED] 提供 `copilot mcp` 子命令进行 MCP 配置](https://github.com/github/copilot-cli/issues/590)**
   对标 Codex CLI、Claude Code、Gemini CLI 的 `mcp` 子命令，4 个 👍，已关闭，可能已落地。

9. **[#5103 [OPEN] BYOK：子代理固定使用会话 wire API 导致跨家族模型 400 错误](https://github.com/github/copilot-cli/issues/5103)**
   新提交，BYOK 模式下 `COPILOT_PROVIDER_WIRE_API` 未按子代理模型区分，影响自定义模型供应商集成。

10. **[#5108 [OPEN] ACP `session/list` 每页全量扫描，千级会话需数分钟](https://github.com/github/copilot-cli/issues/5108)**
    新提交，ACP 客户端分页性能问题，影响桌面/IDE 集成体验。

其他值得留意的：**[#5098](https://github.com/github/copilot-cli/issues/5098)** sessionStart hook 在添加沙箱文件系统路径后停止运行；**[#5105](https://github.com/github/copilot-cli/issues/5105)** macOS 沙箱阻止 Gradle daemon 连接；**[#4633](https://github.com/github/copilot-cli/issues/4633)** view 工具误报 8.6 KB 文件过大；**[#5100](https://github.com/github/copilot-cli/issues/5100)** 待补充。

---

## 重要 PR 进展

过去 24 小时内仅 1 条 PR 更新：

1. **[#5106 [OPEN] Create index.html](https://github.com/github/copilot-cli/pull/5106)**
   作者 lg3707082-cpu，附 index.html 附件。内容与 Copilot CLI 核心功能关联不明确，暂无法评估其对产品的影响。

*注：数据窗口内无其他 PR 更新，故无法凑足 10 条；以下不再列示。*

---

## 功能需求趋势

从全部 Issues 可提炼出以下社区关注方向：

- **沙箱与权限控制**：`/add-dir` 沙箱授权、sandbox.userPolicy.filesystem 路径配置、macOS sandbox 网络/本地连接限制、HOME 覆盖触发误报（#5076、#5098、#5105、#5107）——权限模型复杂度上升带来一系列边界问题。
- **认证与凭据管理**：Keychain 提示回归、NixOS keychain、Entra broker、Atlassian MCP 重复授权（#2494、#3081、#2536）——跨平台认证一致性是高频诉求。
- **MCP 与插件生态**：`copilot mcp` 子命令、工具可调用 cwd、工具参数缺失导致无工具可用（#590、#3035、#5101）。
- **性能与稳定性**：Node OOM 泄漏、ACP session/list 全量扫描（#4686、#5108）——长会话与多会话场景性能瓶颈。
- **BYOK 与多模型**：子代理跨家族模型 wire API 不匹配（#5103）——自定义模型供应商集成需求增长。
- **终端渲染与可访问性**：Thinking 文本对比度、用户/助手输出视觉区分（#3866、#2746）。

---

## 开发者关注点

- **认证流程的可靠性**：Keychain/Keyring 在 Linux、NixOS、macOS 上的行为不一致，`login` 自动应答等回归直接影响上手体验。
- **沙箱边界难以预测**：添加文件系统路径后 hook 停止、Gradle daemon 被阻断、HOME 覆盖误判为风险操作，说明沙箱策略与开发者实际工作流的摩擦较多。
- **长会话稳定性**：libuv 句柄泄漏导致 OOM 是长期未决的严重问题。
- **IDE/宿主集成**：VS Code SDK、ACP、Desktop 相关 Issue（#5104、#5107、#5108）显示集成场景的会话管理与性能仍需打磨。
- **多模型/自定义供应商**：BYOK 与子代理模型组合的兼容性成为新痛点。

*所有链接均来自 github.com/github/copilot-cli。*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报（2026-10-10）

## 1. 今日速览

今日无新版本发布，社区 Issue 更新为 0 条，整体动态集中在文档层面：一个已关闭的文档类 PR（#1718）于今日更新，新增 AGENTS.md 专题页、安全边界说明与首页导览。当日无功能、修复或性能相关变更进入社区视野。

## 2. 版本发布

过去 24 小时内无新 Release，略。

## 3. 社区热点 Issues

过去 24 小时内更新的 Issue 共 0 条，无可供挑选与排序的条目。因此本日不存在可评估热度、社区反应的 Issue 列表。

## 4. 重要 PR 进展

过去 24 小时内更新的 PR 共 1 条，以下为完整记录（非 Top 10 筛选）：

**PR #1718 [CLOSED] docs: 新增 AGENTS.md 专题页、安全边界说明和首页导览**
- 作者：liwang614
- 创建：2026-04-02 ｜ 更新：2026-10-10 ｜ 👍 0
- 链接：https://github.com/MoonshotAI/kimi-cli/pull/1718
- 内容：新增 `docs/{zh,en}/customization/agents-md.md` 专题页，说明 AGENTS.md 与 README.md 的区别、加载行为（仅工作目录、大写优先）以及 `/init` 生成流程；同时补充安全边界说明与首页导览。
- 关注点：该 PR 为文档改动且状态为 CLOSED，覆盖中英文双语，对理解 AGENTS.md 的加载规则与初始化流程有直接参考价值。

## 5. 功能需求趋势

本次数据中 Issues 数量为 0，PR 也仅有一条文档改动，无法据此提炼 IDE 集成、性能、新模型支持等社区功能方向。任何趋势结论都缺乏数据支撑，故不列示。

## 6. 开发者关注点

- 唯一可依据的信号来自 PR #1718：文档侧在补齐 AGENTS.md 的行为边界（加载范围限工作目录、文件名大写优先）与安全边界说明，说明这类配置语义仍是需要明确解释的认知点。
- 除此之外，本日无 Issue 或功能类 PR 数据，无法归纳开发者痛点或高频需求。

---

**数据说明**：本日报仅基于 2026-10-10 提供的 GitHub 数据生成。Releases 为 0、Issues 为 0、PR 为 1，因此第 3、5 部分无内容可填写；第 4 部分按要求列出全部可用 PR 而非凑足 10 条。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报（2026-10-10）

## 1. 今日速览

今日无新版本发布，但 Issue/PR 活跃度很高：**managed service（后台托管服务）稳定性问题集中爆发**，出现会话静默丢失、端口占用导致重启失败等严重缺陷；**v2 安装与 TUI 回归问题**（curl 安装缓慢、`--agent`/`--model` 缺失）持续受关注；同时社区通过多个文档 PR 补齐 Gentoo 安装、Graphify 插件等生态条目。

## 2. 版本发布

过去 24 小时无新 Release。

## 3. 社区热点 Issues（10 条）

1. **#32747 [OPEN] `@` 文件提及不包含启动后新建的文件**（评论 18，👍 16）
   热度最高的老问题（6 月创建、今日仍有更新）。索引文件可被 `@` 搜索到，但启动后新建的文件必须重启才可见，直接影响日常编码体验。社区点赞数最高，说明痛点普遍。
   https://github.com/anomalyco/opencode/issues/32747

2. **#54181 [OPEN] [severity:high] managed service 卡死、watchdog 恢复导致会话丢失（404 session not found）**（评论 3，👍 1）
   标记为高严重度，涉及 `opencode serve --service` 的三个耦合缺陷：服务卡住、恢复流程丢会话、重启风暴与 2.0.25/2.0.26 服务槽位竞争。会**静默销毁会话**，是当前最危险的稳定性问题。
   https://github.com/anomalyco/opencode/issues/54181

3. **#54267 [OPEN] [reproduced] 重启失败："Managed service port already in use"**（评论 3）
   前一个后台服务未退出时，重新启动 `opencode` 报端口占用，客户端误报服务为 `missing`。已复现，与 #54181 同属服务生命周期管理问题。
   https://github.com/anomalyco/opencode/issues/54267

4. **#53702 [OPEN] [reproduced] 官方 v2 curl 安装脚本极慢**（评论 4）
   官方 `curl -fsSL https://opencode.ai/v2/install | bash` 需数分钟，而直连 `registry.npmjs.org` 仅需约 0.3s。属于安装链路（分发/CDN）性能问题，影响新用户首次体验。
   https://github.com/anomalyco/opencode/issues/53702

5. **#53728 [CLOSED] [reproduced] cli：为 v2 全屏 TUI 恢复 `--agent` 与 `--model`**（评论 4，👍 2）
   v2 根命令仅保留 `--prompt`，`--agent`/`--model` 只在 `opencode mini` 和 `opencode run` 可用，破坏依赖交互式会话启动的脚本。已关闭，属 v2 迁移中的 CLI 兼容性回归。
   https://github.com/anomalyco/opencode/issues/53728

6. **#52463 [OPEN] session 在失败步骤后永久卡在 HTTP 400，compaction 同样失败**（评论 4）
   会话彻底不可用：所有 provider 请求在任何模型输出前返回 `HTTP 400 (provider.invalid-request)`，且手动 compaction 也失败。缺乏恢复路径，影响可用性。
   https://github.com/anomalyco/opencode/issues/52463

7. **#54111 [CLOSED] free tier：自定义 subagent 即使通过官方 CLI 也被拒绝**（评论 4）
   免费/贡献者模型下自定义 markdown subagent 报鉴权错误，而内置 subagent（`explore`、`general`）在同一会话正常。三天内复现 10 次，涉及免费层权限模型一致性。
   https://github.com/anomalyco/opencode/issues/54111

8. **#45875 [OPEN] Windows ARM64 原生构建失败：Bun stable 无 `bun:ffi`，`bun-pty` 仅提供 x64 DLL**（评论 5）
   在 Snapdragon X 等 ARM64 Windows 上，构建可通过但运行存在两个缺口。属平台覆盖问题，影响 Windows on ARM 开发者。
   https://github.com/anomalyco/opencode/issues/45875

9. **#54148 [CLOSED] skill 工具输出在 50 KB 处被截断，大型 SKILL.md 尾部无法送达模型**（评论 2）
   受通用工具输出截断限制（`MAX_BYTES = 50KB`、`MAX_LINES = 2000`）影响，超长 `SKILL.md` 尾部丢失。对依赖 Skill 的场景是实质性功能缺陷。
   https://github.com/anomalyco/opencode/issues/54148

10. **#54313 [OPEN] docs：在 README 中补充 Gentoo 安装方式**（评论 4）
    安装章节列了 npm/brew/scoop/choco/pacman/AUR/mise/nix，唯独缺 Gentoo（`::guru` overlay 的 `dev-util/opencode-bin`）。属易修复的文档缺口，已对应 PR #54316。
    https://github.com/anomalyco/opencode/issues/54313

其他值得一提：**#54306 [CLOSED]** `import` 无法解析带 BOM 的 UTF-16 JSON（Windows PowerShell 重定向默认编码），已有对应修复 PR；**#53741 [CLOSED]** Zen 平台图像模型 `gpt-image-1.5` 报不可用/无权限。

## 4. 重要 PR 进展（10 条）

1. **#54316 [OPEN] docs：README 增加 Gentoo 安装说明** — 关闭 #54313，补充 `eselect repository enable guru` + `emerge dev-util/opencode-bin`。
   https://github.com/anomalyco/opencode/pull/54316

2. **#54317 [OPEN] refactor(desktop)：将 legacy store 导入从首窗口路径中拆出** — 关闭 #54296，解决桌面窗口在主进程就绪前显示、后续工作阻塞同线程导致的短暂无响应。
   https://github.com/anomalyco/opencode/pull/54317

3. **#54302 [OPEN] refactor(app)：无法驱逐时跳过 eviction pass** — 关闭 #54295，`runEviction` 在每个带 location 的事件上都执行且遍历开销大，此改动避免无效遍历。
   https://github.com/anomalyco/opencode/pull/54302

4. **#54293 [OPEN] fix(app)：约束 timeline 行以减少滚动布局开销** — 关闭 #54291，解决长会话滚动时主线程耗时过高的问题（对应 #54147 的自动滚动抱怨）。
   https://github.com/anomalyco/opencode/pull/54293

5. **#54251 [OPEN] fix(core)：中断时保留已完成的 execute 结果** — 关闭 #54222，中断 `execute` 时不再丢失已完成的有界预览结果。
   https://github.com/anomalyco/opencode/pull/54251

6. **#54299 [OPEN] fix(core)：为工具执行加共享超时上限** — 关闭 #53433，阻止永不返回的工具执行（如 `read`）无限挂起。注意同作者另有已关闭的 #54297 处理同一问题，存在重复提交。
   https://github.com/anomalyco/opencode/pull/54299

7. **#54307 [CLOSED] fix(core)：`readJson` 支持解码 UTF-16 BOM** — 关闭 #54306，此前 `FSUtil.readJson` 一律按 UTF-8 解码，导致 Windows 下导入失败。
   https://github.com/anomalyco/opencode/pull/54307

8. **#51482 [OPEN] fix(core)：支持 AI SDK v4 媒体输入** — 修复 #50960，版本化的 AI SDK v4 provider 此前会把工具图片序列化为 null。挂起时间较长（9 月创建），仍在推进。
   https://github.com/anomalyco/opencode/pull/51482

9. **#54149 [OPEN] feat(tui)：在子会话中隐藏 Subagents 卡片** — 关联 #54135，新增可选设置 `session.hide_subagents_in_child_sessions`，减少子会话界面噪音。
   https://github.com/anomalyco/opencode/pull/54149

10. **#54248 [OPEN] refactor(ui)：用透明度脉冲替换文字 shimmer 扫光** — 修复 #48708，原实现动画 `background-position` 导致性能问题。
    https://github.com/anomalyco/opencode/pull/54248

生态文档类 PR 也在集中提交：**#54310**（Graphify 插件，取代 #54304，目标分支 v2）、**#54224**（生态项目列表加入 nsq）。

## 5. 功能需求趋势

从当前 Issue 集合看，社区关注方向集中在：

- **平台覆盖与安装分发**：Gentoo 安装缺失（#54313）、v2 curl 安装缓慢（#53702）、Windows ARM64 原生支持（#45875）——说明分发链路与非主流平台是明显的体验短板。
- **v2 迁移兼容性**：CLI 标志回归（#53728）、TUI 插件 API 渲染代码块（#54126）等，反映 v2 与既有脚本/插件生态的磨合。
- **可扩展性与插件生态**：TUI 插件渲染能力（#54126）、插件生态文档扩充（#54310、#54224），社区在主动构建周边。
- **界面与交互打磨**：自动滚动跳变（#54147）、子会话卡片隐藏（#54149）等 UI 细节需求持续存在。
- **免费层与模型可用性**：自定义 subagent 鉴权（#54111）、Zen 平台 Ling 模型不可用（#54143）、图像模型不可用（#53741），指向 provider/权限层的一致性问题。

## 6. 开发者关注点

- **后台服务（managed service）可靠性是当前最大痛点**：#54181 与 #54267 共同指向会话静默丢失、端口竞争、重启失败，直接影响数据安全与可用性。
- **会话恢复能力不足**：#52463 的 HTTP 400 死锁与会话不可恢复，说明缺少从错误状态回退的机制。
- **工具执行缺乏超时边界**：#53433 相关修复（#54299/#54297）与 skill 输出截断（#54148）表明核心工具链的边界处理不完善。
- **跨平台细节欠缺**：Windows（BOM 编码 #54306、ARM64 构建 #45875）、非主流 Linux 发行版（#54313）问题反复出现。
- **v2 迁移带来的破坏性变更**：CLI 标志与服务重启行为变化，使依赖脚本化调用的开发者受影响（#53728）。

整体看，今日社区情绪集中在"稳定性与回归"而非新功能，后台服务与会话可靠性应是最优先处理项。

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报 — 2026-10-10

数据来源：github.com/badlogic/pi-mono（Issue/PR 链接指向 earendil-works/pi）

## 今日速览

今日无新版本发布。社区焦点集中在 **Windows 平台支持**（#7547 已积累 80 条讨论）与 **0.99.x 终端兼容性回归**（#10256），前者呼吁明确 Windows 上的支持方向，后者涉及 mintty/ConPTY 下颜色查询泄漏并误触外部编辑器，属于影响可用的严重回归。此外，多起 provider 相关缺陷仍在活跃：#10605 OpenAI OAuth 403、#9512 GPT-6 Astra 压缩失败、#10762 headless 模式挂死。

## 版本发布

无（过去 24 小时无新 Releases）。

## 社区热点 Issues

1. **#7547 [OPEN] Windows 使用方式与问题汇总**（80 评论 / 👍2）
   Windows 上 Pi 的多种运行路径导致资源难以聚焦，作者呼吁社区集中反馈问题与文档缺口。讨论量远超其他 Issue，是当前平台支持方向的关键议题。
   https://github.com/earendil-works/pi/issues/7547

2. **#8643 [OPEN] Bedrock 上 OpenAI 模型拒绝 toolResult.content 内嵌图片**（12 评论 / 👍4）
   提议沿用 openai-completions.ts 的做法，将工具结果中的图片提升为同级 user 内容块；作者称修复与回归测试已在 fork 上就绪。涉及 Bedrock + OpenAI 组合的多模态正确性。
   https://github.com/earendil-works/pi/issues/8643

3. **#5291 [CLOSED] Anthropic 订阅下会话卡在 “Working...”**（11 评论 / 👍3）
   使用 Anthropic 企业订阅时会话成批卡住，中断后恢复可继续。已关闭，但曾影响生产使用体验，值得关注根因结论。
   https://github.com/earendil-works/pi/issues/5291

4. **#9773 [OPEN] before_provider_request 不触发压缩/摘要请求**（11 评论 / 👍1）
   文档声明该钩子在发起 provider 请求前触发并可替换 payload，但压缩与分支摘要路径不走该钩子，属于插件/扩展的契约不一致。
   https://github.com/earendil-works/pi/issues/9773

5. **#8036 [OPEN] edit 工具渲染大 diff 时令 TUI 崩溃**（9 评论）
   编辑本身成功，但结果中包含约 14.5 MB、来自超长物理行 HTML 的 diff，导致交互式 TUI 崩溃，且在会话恢复时复现。是渲染路径的稳定性风险。
   https://github.com/earendil-works/pi/issues/8036

6. **#10256 [OPEN] 0.99.x 终端颜色查询回复泄漏进提示区，BEL 打开外部编辑器**（9 评论 / 👍3）
   Windows mintty/ConPTY 上启动即触发外部编辑器，提示区出现 `rgb:...` 转义片段；0.87.1 正常，属 0.99.x 回归。严重干扰日常使用。
   https://github.com/earendil-works/pi/issues/10256

7. **#10605 [OPEN] ChatGPT/OpenAI OAuth 403**（9 评论）
   Plus 订阅用户登出/登录后仍遇 403（“user is not eligible for subscription sharing”）。直接影响 OpenAI 账号接入可用性。
   https://github.com/earendil-works/pi/issues/10605

8. **#9512 [OPEN] GPT-6 Astra 在 max reasoning 下压缩超出摘要输出上限**（6 评论 / 👍2）
   上下文溢出恢复失败，摘要生成触及 token 上限。涉及新模型 + 高推理档位下的上下文管理可靠性。
   https://github.com/earendil-works/pi/issues/9512

9. **#10719 [OPEN] Bun 安装 + Node 运行时时所有扩展报 `Cannot find module 'jiti'`**（3 评论）
   报告者用 `pi -ne` 确认属核心而非扩展问题。影响混合包管理器/运行时的安装路径，属环境兼容痛点。
   https://github.com/earendil-works/pi/issues/10719

10. **#10639 [OPEN] `sendCustomMessage({ triggerTurn: true })` 首个请求缺失系统提示**（3 评论）
    在没有系统消息的会话中，由自定义消息触发的运行首个请求不带系统提示，与 PR #10739 直接相关。
    https://github.com/earendil-works/pi/issues/10639

其他值得一读：#3896（👍8，失焦后光标仍显示为激活态，已关闭）、#10281（允许读取 Claude Code 的 `.mcp.json`）、#10762（headless `pi -p` 在 OpenAI 兼容 provider 掉线时永久挂死，已关闭）。

## 重要 PR 进展

1. **#10774 [OPEN] fix(tui): 在 herdr 中启用 kitty 图片**
   #10573 使 pi 对 herdr 返回 `images: null`，此前 herdr 面板会走 ghostty 分支并正常渲染 kitty 图片，1.1.0 因此破坏了 herdr 内联图片。
   https://github.com/earendil-works/pi/pull/10774

2. **#10766 [CLOSED] feat(coding-agent): 扩展中止后的同轮继续**
   扩展在 `message_update` 中调用 `ctx.abort()` 后，会话会提前退出运行循环、遗留排队后续消息；该 PR 提供同轮继续能力。
   https://github.com/earendil-works/pi/pull/10766

3. **#10751 [OPEN] feat(coding-agent): 采用 pi.dev 配置 schema**
   将 pi.dev schema 端点作为生成配置 schema 的规范 `$id`，内置主题与示例改用已发布主题 schema，并补充 models/settings/keybindings/theme 的 schema URL 文档。
   https://github.com/earendil-works/pi/pull/10751

4. **#10747 [OPEN] feat: 支持自定义 Cloudflare AI Gateway 域名与访问凭据**
   对应 Issue #10627，允许自定义网关域名和凭证；作者提到内部存在多层三元表达式待评估。
   https://github.com/earendil-works/pi/pull/10747

5. **#10672 [OPEN] feat(ai,coding-agent): 仅列出 key 可用的 OpenRouter 模型**
   每次刷新时把内置与新版 pi.dev 目录与 `GET /models/user` 结果合并，仅保留该 key 可用的 chat 模型，并采用其上下文长度、最大输出与价格。
   https://github.com/earendil-works/pi/pull/10672

6. **#10745 [CLOSED] 可禁用鼠标点击重定位光标**
   新增 `editorClickMovesCursor` 设置，环境变量 `PI_EDITOR_CLICK_MOVES_CURSOR=0` 可全局关闭且优先级高于设置项。
   https://github.com/earendil-works/pi/pull/10745

7. **#9126 [OPEN] fix(coding-agent): 在销毁前结算工具结果**
   修复 #9124：工具执行期间销毁 runtime 会在中断轮次结算前断开持久化，留下没有结果的 assistant 工具调用；改为关闭与销毁前先 `await session.abort()`。
   https://github.com/earendil-works/pi/pull/9126

8. **#10739 [OPEN] fix(coding-agent): 为自定义消息触发的运行发出 before_agent_start**
   修复由 `pi.sendMessage(..., { triggerTurn: true })` 启动的运行跳过 `before_agent_start` 的问题；否则首轮工具调用后刷新会回退到基础提示选项，抹掉 handler 添加的段落。
   https://github.com/earendil-works/pi/pull/10739

其余更新较少、信息有限的 PR：#10751、#10747、#10672 均创建于 10-08/10-09，尚无评论数据可参考；#9126 创建于 9-04，仍在开放状态。

## 功能需求趋势

- **平台与终端兼容性**：Windows（#7547、#10256）、Linux/WSL 下的右键粘贴（#10345）、终端焦点与光标状态（#3896）、kitty 图片渲染（#10774）集中反映 TUI 跨终端一致性是最大摩擦面。
- **多 provider / 多云接入**：Bedrock 多模态（#8643）、OpenAI OAuth（#10605）、Cloudflare AI Gateway 自定义域名（#10747）、OpenRouter 按 key 过滤模型（#10672）显示 provider 配置灵活性需求上升。
- **新模型与推理档位适配**：GPT-6 Astra 在 max reasoning 下的压缩失败（#9512）表明新模型 + 高推理档位的上下文管理需要跟进。
- **扩展/插件 API 契约**：`before_provider_request` 覆盖不全（#9773）、`sendCustomMessage` 系统提示缺失（#10639）、`sendMessage()` 无异步发布语义（#8023）、扩展 abort 后继续（#10766），共同指向扩展生命周期与钩子一致性的系统性需求。
- **互操作与生态整合**：可选读取 Claude Code `.mcp.json`（#10281）、pi.dev 配置 schema 规范化（#10751）。
- **包管理与运行时组合**：Bun 安装 + Node 运行导致 `jiti` 缺失（#10719）。
- **包目录/分发**：`pi-live-speed` 详情页存在但未出现在 /packages 列表（#10145）。

## 开发者关注点

- **回归与稳定性优先**：0.99.x 的颜色查询泄漏（#10256）与 herdr 图片回退（#10774）说明近期版本改动引入了可见回归，终端相关行为需要更谨慎的回归覆盖。
- **静默失败与挂死最难排查**：headless `pi -p` 永久挂死且无错误无重试（#10762）、RPC 模式下 prompt 被确认却静默丢弃（#10606）、会话卡在 “Working...” 但中断可恢复（#5291），共同构成“无信号失败”类痛点。
- **文档与契约不一致**：`before_provider_request` 的文档承诺与实际触发范围不符（#9773），扩展作者难以依赖既有 API 语义。
- **交互式界面可逃逸性**：bash 工具可能触发无法脱离的交互式 UI（如 pinentry，见 #4493，已因重构关闭），提示工具执行需要更强的交互隔离。
- **大规模输出的健壮性**：超大 diff 直接击穿 TUI（#8036），渲染层需要尺寸防护。
- **配置可移植性**：`deviceId` 被放入全局设置后，对以 Git 管理 dotfiles 的用户造成冲突（#10187）。

---
说明：以上内容均基于所提供数据整理；评论数与点赞数为数据中给出的值，PR 评论数在原始数据中为 `undefined`，故未引用。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报（2026-10-10）

## 今日速览

今日动态集中在 **Managed Agent 架构的分阶段落地**：Session 管理、子 Agent 隔离（worktree）、后台进程监控等 H3/H4 切片持续推进，并伴随多个 P1 级稳定性 Bug 被提出。与此同时，**XML 工具调用恢复机制**的相关缺陷与性能问题成为新一轮讨论焦点，多位维护者（wenshao、yiliang114、doudouOUC）活跃提交修复。夜间版本 v0.25.0-nightly.20261009 已发布。

---

## 版本发布

**v0.25.0-nightly.20261009.085a44f336**（nightly）
- fix(agents): 替换选中的远程 Hosts 时不再丢失 bindings（PR #13430，by @yiliang114）
- 附带 core 测试收尾工作

---

## 社区热点 Issues

1. **#12380 [OPEN] proposal(serve): Managed Agent 双路径架构与分阶段交付**（51 条评论，最高热度）
   定义保留现有 TypeScript agent loop、推理与工具环境供给解耦、Session 持久化归属的新架构。作为多 Agent 路线图的核心提案，讨论量远超其他 Issue。
   https://github.com/QwenLM/qwen-code/issues/12380

2. **#13078 [OPEN] 每日依赖 CVE 审计失败**（16 条评论）
   自动化 CVE 审计（Run 36661572770）失败，可能涉及新出现的高危漏洞，属于供应链安全问题，需尽快 triage。
   https://github.com/QwenLM/qwen-code/issues/13078

3. **#6710 [OPEN] fix(acp): 区分用户取消的 turn 与恢复后的意外中断**（15 条评论，P1）
   在最新 main（1aba19c）仍可复现，涉及 daemon 真实 REST/SSE 请求路径，属长期未闭合的会话恢复缺陷。
   https://github.com/QwenLM/qwen-code/issues/6710

4. **#10797 [OPEN] 非思考模式脚手架标签泄漏到用户可见输出**（10 条评论）
   tool-result blocks、system-reminders 等非思考脚手架标签被回显到输出中，still reproducible，需 welcome-pr。
   https://github.com/QwenLM/qwen-code/issues/10797

5. **#13800 [OPEN] fix(managed-agent): recovery_blocked 的 Session 会卡住同一 daemon 上其他 Session**（P1，5 条评论，今日新建）
   一个恢复受阻的 Session 会导致同一 daemon 上其他 Session 的后续 turn 卡死，journal 停在 hostedModelAttempt 之后——典型的级联故障，威胁 daemon 稳定性。
   https://github.com/QwenLM/qwen-code/issues/13800

6. **#13709 [OPEN] [H4b follow-up] 子会话准入时计算 PostToolUse 已知未来挂载**（P1，blocked）
   涉及 child-Session runtime 的挂载检查（PR #13550），前景分支仅读取"当前"状态，存在并发正确性风险。
   https://github.com/QwenLM/qwen-code/issues/13709

7. **#12333 [OPEN] feat(ci): token 工作缺少 recall/任务成功率门禁**（9 条评论）
   指出现有 token 优化只测"节省"、不测对工具召回与任务成功率的"代价"，是上下文性能路线图（#12028）缺失的验收标准。
   https://github.com/QwenLM/qwen-code/issues/12333

8. **#13492 [OPEN] XML 工具调用恢复丢弃含引用工具标记的外层调用**（8 条评论）
   PR #13515 已修复部分问题（防止引用标记被当作真实调用派发），但外层调用恢复仍待 PR #13579 完成。
   https://github.com/QwenLM/qwen-code/issues/13492

9. **#2566 [OPEN] feat(core): 基于上下文压力的动态工具输出截断**（5 条评论）
   长期需求（创建于 3 月），最新 PR #13599 已保留经测试的生产树，属上下文性能方向的重点推进项。
   https://github.com/QwenLM/qwen-code/issues/2566

10. **#11550 [OPEN] 内存写入触发 prompt 重复处理**（4 条评论，👍1）
    性能类 Bug，用户反馈 memory write 时 prompt 被重新处理，涉及缓存与内存范围，属较受关注的实际体验问题。
    https://github.com/QwenLM/qwen-code/issues/11550

---

## 重要 PR 进展

1. **#13843 [OPEN] feat(mods): 运行实验性无头 Mod 命令**
   为无头 Qwen Code 会话引入可选的、可执行的 Claude Code Mods 子集，支持已安装的 Claude/原生扩展注册 slash 命令并保留模块变量。
   https://github.com/QwenLM/qwen-code/pull/13843

2. **#13841 [OPEN] feat(managed-agent): 子 Agent 的 worktree 准入（#13753 I2）**
   隔离切片的第二步：托管子 Agent 可在自己的子 Workspace（基于 I1 的 Git worktree，PR #13781）中运行，结果合并回父 Workspace 后父 Agent 才可见。
   https://github.com/QwenLM/qwen-code/pull/13841

3. **#13822 [OPEN] feat(managed-agent): H4d-b 会话消息运行时**
   H4d 切片的运行时部分（承接 H4d-a 契约 #13786），产出 session message 记录与子 Agent 延续。
   https://github.com/QwenLM/qwen-code/pull/13822

4. **#13830 [OPEN] fix(managed-agent): 在 Session 重新获取时观察后台进程退出**
   为后台进程退出观察提供生产调用方：自然退出的后台 Shell 进程此前不会在 release sweep 之外被 Broker 观察到。
   https://github.com/QwenLM/qwen-code/pull/13830

5. **#13128 [OPEN] fix(core): 将失败或不可用的 LSP 诊断上报为错误**
   `NativeLspService.diagnostics()` 与 `workspaceDiagnostics()` 在无法获取诊断时不再返回"干净"结果，改为在无就绪 server 时拒绝响应。
   https://github.com/QwenLM/qwen-code/pull/13128

6. **#13760 [OPEN] feat(managed-agent): 支持 WebShell 会话 cwd 变更**
   为 WebShell 中的 Managed Session 增加同 Workspace 目录切换，并实现 Java BFF 的显式 cwdChange 能力。
   https://github.com/QwenLM/qwen-code/pull/13760

7. **#13771 [OPEN] fix(web-shell): 将待处理 edit diff 限制在邻近上下文**
   编辑审批对话框与待处理编辑卡片仅展示变更行及上下各最多 3 行未变更内容，减少噪音。
   https://github.com/QwenLM/qwen-code/pull/13771

8. **#13772 [OPEN] fix(runtime): 在目录解析过程中保留 CSI 挂载身份**
   从 #13526 中独立拆出的修复，保留跨挂载观察的原始根目录描述符。
   https://github.com/QwenLM/qwen-code/pull/13772

9. **#12585 [OPEN] fix(acp): 为 transcript 回放持久化嵌入文本资源**
   持久化有界的原始 ACP 嵌入文本 resource 块并归属到用户 prompt，daemon UI SDK 单独暴露这些块，便于回放。
   https://github.com/QwenLM/qwen-code/pull/12585

10. **#13841/#13844 相关：修复主分支 CI 稳定性**
    #13844 修复子 Workspace Git 布局测试的 flaky 问题（主分支 CI run 38049885785 失败），体现子 Agent 隔离测试的基建完善。
    https://github.com/QwenLM/qwen-code/pull/13844

---

## 功能需求趋势

从近期 Issues 标签与提案分布可提炼以下方向：

- **多 Agent 与 Session 管理**：出现频率最高（roadmap/multi-agent、scope/session-management），核心是 Managed Agent 的分阶段架构（#12380）、子 Agent 隔离（worktree）、恢复与挂载正确性。
- **上下文性能与 Token 管理**：动态工具输出截断（#2566）、token 变更的 recall/成功率门禁（#12333）、长上下文模型支持（model/long-context）持续受关注。
- **daemon 与后台自动化**：daemon、roadmap/background-automation 标签密集，聚焦后台进程观察、重启恢复（#13533、#13532、#13708）。
- **内容生成质量**：XML 工具调用恢复、思考标签泄漏（#10797、#13492、#13787、#10700）构成独立的缺陷簇。
- **CI/CD 与供应链**：CVE 审计（#13078）、benchmark 门禁（#12333）反映自动化质量保障需求。

---

## 开发者关注点

- **稳定性优先级高**：多个 P1 级 Bug（#6710、#13709、#13800）集中在 Session 恢复、子会话准入与 daemon 隔离，说明多 Session 并发下的状态一致性是当前痛点。
- **恢复机制的正确性**：XML 工具调用恢复反复出现边界问题（引用标记、孤立闭合标签、前缀扫描性能），是高频缺陷来源。
- **可观测性与验证**：开发者呼吁为 token 变更建立"代价"侧门禁（#12333），并推动在真实 Linux 主机上产出精确 commit 的验收证据（#13532）。
- **性能回退**：内存写入触发 prompt 重处理（#11550）、XML 恢复在大批量调用下变慢（#13787）等性能问题仍受用户关注。
- **供应链安全**：自动化 CVE 审计失败（#13078）提醒依赖安全需持续跟进。

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI 社区动态日报（2026-10-10）

> 数据来源：github.com/Hmbown/DeepSeek-TUI（实际条目来自 codewhale-hq/Codewhale 仓库）

## 1. 今日速览

今日无新版本发布，社区活动集中在 **v0.10.2 缺陷收敛** 与 **runtime/TUI 架构拆分**（RS-8/RS-9）的推进上，多条相关 Issue 今日集中关闭。同时出现两条 Contribution-Gate 工作流与代码清理类 PR，以及一次夜间安全扫描（#6951）报告 CodeQL 告警列表疑似拉取失败。依赖升级类 PR 批量关闭，Rust 生态维护节奏正常。

## 2. 版本发布

过去 24 小时无新 Release。

## 3. 社区热点 Issues（10 条）

1. **[#6951] [security] 夜间安全与依赖扫描 2026-10-10**（OPEN，bot 提交）
   针对 main @ 64bb073a4 的每日安全扫描。值得关注：报告表明确标注 CodeQL 告警列表"无法拉取、未读取"，意味着当日未能完成告警核查——存在安全监控盲区的信号。
   https://github.com/codewhale-hq/Codewhale/issues/6951

2. **[#6936] [cleanup, tui, reliability] Runtime split RS-9：切断引擎剩余的终端侧泄漏**（CLOSED）
   属于 runtime/TUI crate 拆分工作，涉及上下文阈值、git 上下文、剪贴板目录、通知投递、本地 ollama adopt 等终端耦合点；以 `scripts/split/module_graph.py --check` 的边界基线作为强制约束。
   https://github.com/codewhale-hq/Codewhale/issues/6936

3. **[#6935] [cleanup, tui, subagents] Runtime split RS-8：将 auto-review 与风险策略迁出 tui/ 至 core::authority**（CLOSED）
   与 RS-9 同属拆分序列，按 `docs/design/TUI_DECONSTRUCTION.md` 的所有权划分迁移。架构治理类工作连续收口，值得追踪其对后续 crate 边界的影响。
   https://github.com/codewhale-hq/Codewhale/issues/6935

4. **[#6912] [tui] TUI 工作坞终端视图：观察模型 PTY 会话并可直接输入**（CLOSED）
   终端 dock 与会话自有 wait 分离已进入 PR #6907（head 6d9fb21…）；提及 Terminal 208/208 与原生 PTY 凭据为"有日期的证据"。是 TUI 交互能力的一次实质扩展。
   https://github.com/codewhale-hq/Codewhale/issues/6912

5. **[#6942] [documentation, tools, v0.10.2] Code mode 文档与实际默认行为不一致**（CLOSED）
   官网 MCP 页面（中/英）与任务卡仍描述"默认关闭、只读、无 MCP、30 秒"，而实际发布版本为默认开启的门控。属于文档与实现脱节，涉及 i18n 字典文件。
   https://github.com/codewhale-hq/Codewhale/issues/6942

6. **[#6902] [bug, tui, ux, v0.10.2] Plan mode：恢复计划结束时的批准并切换交接**（CLOSED）
   该行为在 v0.9.1 中被移除，属长期回归而非 0.10.0→0.10.x 的新问题。UX 回归修复，对计划模式工作流影响直接。
   https://github.com/codewhale-hq/Codewhale/issues/6902

7. **[#6512] [bug, ux, reliability, runtime-api] Goal 轮次在 1000 步停止，普通轮次无上限；`[goal] max_steps = 0` 并非无限**（CLOSED）
   自 2026-09-24 的旧问题，本次状态标记为"部分完成"，剩余工作为让 `max_steps` 的 None/0 经 `turn_budget::resolve_max_model_st...` 解析为无上限。涉及运行时长与预算语义的一致性。
   https://github.com/codewhale-hq/Codewhale/issues/6512

8. **[#5836] [enhancement, cleanup] Cloud dispatch：退役 legacy launcher，明确当前 Computer 契约**（OPEN）
   自 0.9.12 时代提交、为 v0.10.0 规划重写正文，0.10.1 复审仍为"未开始"。需决定并记录 Computer 契约，属于长期悬置的清理项。
   https://github.com/codewhale-hq/Codewhale/issues/5836

9. **[#5837] [enhancement] Boat Computer 镜像与 codewhale app-server**（CLOSED）
   董事会 2026-10-09 决定将 openvscode-server sidecar 与 VS Code 扩展移出范围（路线图无 VS Code）；创始人 2026-10-02 方向为"Daya 退出、AWS Lambda microVM 进入"，并批准 IDE 计划第一阶段（PRD §6）。
   https://github.com/codewhale-hq/Codewhale/issues/5837

10. **[#6951 之外的] 备注：9 条 Issue 中 8 条今日更新即关闭**
    仅 #5836、#6951 保持 OPEN。集中关闭表明 v0.10.2 相关缺陷与拆分任务正进入收尾阶段。

## 4. 重要 PR 进展（10 条）

1. **[#6952] [contribution-gate] fix(workflow)：拒绝阻塞自身角色的门控**（OPEN）
   针对 #6945：当 gate 的 `role` 与 `blocks_role` 同为 `implement` 时，会阻塞唯一能通过它的角色，导致该阶段派发时运行失败（spawn rejected: workflow gate bloc…）。修复工作流自锁逻辑。
   https://github.com/codewhale-hq/Codewhale/pull/6952

2. **[#6943] [contribution-gate] chore(tui)：移除五个模块的全量 dead_code allow**（OPEN）
   属 #5587 的一个切片。逐模块通过 `cargo check -p codewhale-tui --all-targets` 核实被掩盖的项，例如 `worker_profile.rs` 的 allow 已失效（无实际掩盖内容）。
   https://github.com/codewhale-hq/Codewhale/pull/6943

3. **[#6946] [contribution-gate] chore：移除 30 个已无作用的 dead_code allow**（CLOSED）
   同为 #5587 切片。方法为以 `RUSTFLAGS="--force-warn dead_code"` 跑 `cargo check --workspace --all-targets`，并分别对非测试与测试目标核对。
   https://github.com/codewhale-hq/Codewhale/pull/6946

4. **[#6947] fix(artifacts)：解析链接型 state root，使迁移后的 Codewhale home 继续可用**（CLOSED）
   Windows 下当状态目录经由 junction 访问（将 `%USERPROFILE%\.codewhale` 放到其他卷的常见做法）时，所有会话产物写入失败，报"Fleet artifact path must stay wit…"。跨卷场景修复。
   https://github.com/codewhale-hq/Codewhale/pull/6947

5. **[#6949] fix(subagent)：state root 迁移后重新定位状态路径检查**（OPEN）
   同一根因的另一处表现：workspace 的 `.codewhale` 为 junction 时，所有子代理在**第 0 步**即失败，报"sub-agent state path must stay within state root: \\?\D:\CodeWhaleData\state\subag…"。
   https://github.com/codewhale-hq/Codewhale/pull/6949

6. **[#6948] fix(tui)：会话切换被阻塞时，指明是哪项工作造成的**（CLOSED）
   此前仅提示"Cannot start a new session while runtime work is active"，未说明具体阻塞来源；现改为具名提示运行中的 turn、维护或后台任务。
   https://github.com/codewhale-hq/Codewhale/pull/6948

7. **[#6950] [contribution-gate] feat(plugins)：新增 CLI 安装与应用内 OAuth 登录**（OPEN）
   承接 #6805 引入的"经审查、宿主托管的 OAuth AI 提供方"；本次解决仍需独立终端命令登录、以及从源码安装插件的体验缺口。
   https://github.com/codewhale-hq/Codewhale/pull/6950

8. **[#6821] build(deps)：rmcp 3.4.0 → 3.5.0**（OPEN）
   来自 modelcontextprotocol/rust-sdk 的 MCP Rust SDK 升级，涉及 MCP 相关能力，仍处开启状态，需留意协议兼容性。
   https://github.com/codewhale-hq/Codewhale/pull/6821

9. **[#6822] build(deps)：rio-vt 0.5.26 → 0.5.28**（CLOSED）
   终端模拟/虚拟终端相关依赖升级，与 TUI 的 PTY 能力直接相关。
   https://github.com/codewhale-hq/Codewhale/pull/6822

10. **[#6824 / #6823 / #6826] 依赖批量升级**（均 CLOSED）
    - `encoding_rs` 0.8.41 → 0.8.42（#6824）
    - `thiserror` 2.0.20 → 2.0.21（#6823）
    - `uuid` 1.26.0 → 1.27.0（#6826）
    均由 dependabot 提交并关闭，Rust 依赖维护例行推进。
    https://github.com/codewhale-hq/Codewhale/pull/6824 ｜ https://github.com/codewhale-hq/Codewhale/pull/6823 ｜ https://github.com/codewhale-hq/Codewhale/pull/6826

（另有 #6825 `dtolnay/rust-toolchain` GitHub Actions 升级，CLOSED。）

## 5. 功能需求趋势

从本批 Issues 归纳，社区与维护者的关注方向集中在：

- **架构解耦（最显著）**：RS-8、RS-9 连续两项拆分任务今日关闭，围绕 runtime/TUI crate 边界、`core::authority` 所有权、以及 `module_graph.py --check` 基线约束，说明项目正系统性消除终端侧耦合。
- **终端与 PTY 深度集成**：TUI 工作坞终端视图（#6912）允许观察并输入模型的 PTY 会话，配合 rio-vt 依赖升级，指向更强的会话可观测性。
- **云端与分发形态调整**：#5837 明确移除 VS Code 扩展/侧车范围、转向 AWS Lambda microVM，IDE 计划进入第一阶段；#5836 的 Computer 契约与 legacy launcher 退役仍在待决。
- **插件与 OAuth 提供方体验**：#6950 将登录与安装收进应用内，反映宿主托管 AI 提供方之后的易用性诉求。
- **工作流门控（Contribution-Gate）**：#6952 与 #6945 暴露门控角色自锁类设计缺陷，工作流引擎的正确性是新的关注点。
- **文档与实现一致性**：#6942 表明默认行为变更后，官网中英文档与任务卡需同步，涉及 i18n 字典。
- **状态目录可迁移性**：junction/跨卷场景在 artifacts、subagent 两处重复出现，构成一类系统性需求。

## 6. 开发者关注点

综合今日反馈，痛点与高频需求如下：

- **状态路径在目录迁移（junction / 跨卷）场景下大面积失败**：Windows 用户将 `.codewhale` 放到其他卷是常见做法，却导致产物写入失败（#6947）与子代理在第 0 步即失败（#6949）。同根因两处修复说明该假设被多处硬编码，值得系统性排查。
- **错误信息不具名、不可操作**：会话切换被拒时只告知"runtime work is active"而不说明具体阻塞项（#6948），属典型可诊断性不足。
- **默认行为与文档脱节**：Code mode 已改为默认开启门控，但官网中英文页面与任务卡仍描述旧行为（#6942），容易误导使用者。
- **UX 长期回归**：Plan mode 的批准并切换交接自 v0.9.1 起缺失（#6902），跨度较长才发现并修复。
- **语义不一致**：Goal 轮次限制 1000 步而普通轮次无上限、`max_steps = 0` 不等于无限（#6512），预算语义需要统一。
- **安全监控可靠性**：#6951 显示安全扫描在无法拉取 CodeQL 告警列表时"未读取即无操作"，可能导致告警被静默遗漏，需补足失败告警机制。
- **老问题长期悬置**：#5836 自 2026-09-02 提出、经 0.10.0 规划重写正文、0.10.1 复审仍未启动，反映清理类工作在优先级竞争中易被搁置。
- **遗留代码标记堆积**：#6943 与 #6946 分别清理 5 个与 30 个失效的 `dead_code` allow，说明历史抑制标记缺乏定期复核机制。

</details>

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar) 自动生成。*