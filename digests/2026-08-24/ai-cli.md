# AI CLI 工具社区动态日报 2026-08-24

> 生成时间: 2026-08-24 11:03 UTC | 覆盖工具: 9 个

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

# AI CLI 工具生态横向对比分析报告（2026-08-24）

## 1. 生态全景

AI CLI 工具已从"代码补全助手"演进为**多智能体协作、远程服务化、可观测性完备的完整开发平台**。当日 8 个主流工具（Claude Code、OpenAI Codex、Gemini CLI、GitHub Copilot CLI、Kimi Code、OpenCode、Pi、Qwen Code、DeepSeek TUI/CodeWhale）均无重大版本发布（除 Copilot CLI v1.0.81-8 与 Qwen Code 夜间版），社区讨论集中于三大核心矛盾：**资源消耗不透明**（计费/Token 浪费）、**执行可靠性**（挂起、误报、压缩丢失状态）与**平台支持短板**（Windows 体验、跨设备协同）。Claude Code 与 Codex 社区累积关注度最高，而 Gemini CLI 与 Pi 在架构自主性（AST 感知、零依赖沙箱）上提出更前瞻的探索方向。

## 2. 各工具活跃度对比

| 工具 | 今日更新 Issues | 今日活跃/合并 PR | Release | 高热度信号（👍/评论） |
|---|---|---|---|---|
| Claude Code | ~50 | 1 | 无 | #13024（81👍/26评论）、#82506（31评论） |
| OpenAI Codex | ~50 | 10+ | rust-v0.149.1、rust-v0.149.0-alpha.4.3 | #28919（41👍/39评论）、#13733（35👍/38评论） |
| Gemini CLI | 10（Top） | 10（Top） | v0.56.0-nightly.20260824 | #28912（25评论）、#21409（8👍/P1） |
| GitHub Copilot CLI | 10+ | 1（存疑） | v1.0.81-8 | #1274（27评论/11👍）、#1973（27👍/12评论） |
| Kimi Code | 2（数据有限） | 3 | 无 | #1994（7👍/8评论）、#1283（27评论） |
| OpenCode | 10+ | 10+ | 无 | #20695（136评论/105👍）、#7790（79👍/19评论） |
| Pi | 10（精选） | 10+ | 无 | #7547（40评论）、#6879（19👍/21评论） |
| Qwen Code | 10（Top） | 10+ | v0.22.0-nightly | #5975（P2流式中断）、#9459（P1） |
| CodeWhale（DeepSeek TUI） | 10+ | 10+ | v0.9.11 | #1004（10评论，已关闭）、#4326（6评论） |

## 3. 共同关注的功能方向

1. **用量与成本透明度**（Claude Code #82506/#82744、Codex #13733/#37445、Kimi #1994、Pi #7995）——会话限额被无故消耗、后台轮询触发完整 API 调用、长思维链模型 token 激增、缺失 prompt-caching 导致 2.5 倍成本。用户对"额度被偷走"的负面情绪是全行业最强烈信号。
2. **上下文压缩可靠性**（Claude Code #72549/#84187、Copilot #4572、OpenCode #30680、Pi #6879/#7048）——压缩后技能状态丢失、死循环、超过 100% 窗口才触发、摘要截断在半词。长会话场景下的基础链路尚不牢固。
3. **Agent/子代理状态可信度**（Gemini #22323/#21968、Copilot #4566、Qwen #9276）——子代理 MAX_TURNS 后被误报成功、口头确认但不执行、普通消息被误判。多智能体协作的状态上报与权限边界需标准化。
4. **细粒度事件钩子与扩展 API**（Claude Code #13024、Codex #40382、Kimi #2614、OpenCode #34498、Pi #5932）——等待输入触发 Hook、工具调用来源暴露、SKILL.md 禁用模型调用、ctx.navigateTree() 暴露。扩展生态的"可编程性"诉求趋同。
5. **Windows 平台支持**（Codex 近 1/3 Issue、Copilot #4570、Gemini #28832、Pi #7547/#8512、OpenCode #44528）——从文件锁冲突、路径分隔符错误到 TUI 渲染漂移，跨平台兼容是当前最大短板。
6. **跨设备/远程协同**（Codex #28919/#34804、OpenCode #7790、Kimi #2616、Pi #8538）——SSH 远程连接桌面端、移动设备配对注入会话、工作区跨设备同步，远程开发场景需求密集。

## 4. 差异化定位分析

| 工具 | 目标用户 | 核心差异化 | 技术路线特征 |
|---|---|---|---|
| **Claude Code** | 专业开发者/企业 | Hook 生态最成熟、插件机制完善 | 深度集成 Agent SDK，社区关注计费与权限边界 |
| **OpenAI Codex** | 通用开发者 | ChatGPT 生态联动、桌面应用 | Rust 重写（rust-v0.149.x），TUI 密集迭代、沙箱加固（bubblewrap） |
| **Gemini CLI** | 多模态/Google 生态 | 模型原生 bash 亲和力（#19873）、AST 感知代码理解（#22745） | 探索零依赖沙箱、frontmatter 解析、夜间构建高频 |
| **Copilot CLI** | GitHub 深度用户 | 与 GitHub 平台/企业策略绑定 | Grok 4.6 支持、本地插件市场热加载、多提供商 BYOK |
| **Kimi Code** | 中文/多模态场景 | 移动端配对（gbr-agent/MIT 协议） | K2.6 长思维链模型、插件安全边界文档化 |
| **OpenCode** | 开源重度用户 | Memory Megathread 透明治理、AgentRouter 原生支持 | 机器人贡献常态化、LLM 协议层健壮性（Bedrock 帧边界、原型污染防护） |
| **Pi** | 终端极客/跨平台 | 高度可扩展（PowerShell 工具、Mermaid 渲染升级）、provider 兼容层 | 多运行时（llama.cpp、Bedrock Mantle）、社区驱动 UI 改进 |
| **Qwen Code** | 阿里云/多模态开发者 | serve/daemon 化（HTTP/SSE、TLS）、ACP 透传 | Config 派生边界集中化重构、OpenTUI 迁移、Multimodal 接入 |
| **CodeWhale** | DeepSeek 生态迁移用户 | 监督式运维栈（lifecycle outbox、control socket、/relaunch） | v0.9.12 集成周期、provider 中立化转型、代码库健康度治理 |

## 5. 社区热度与成熟度

- **社区活跃度最高**：Claude Code（50+ 条 Issue，高赞问题多）、Codex（Windows Bug 集中爆发，PR 合并频繁）——两者处于"大量用户涌入 → 暴露规模化问题"阶段。
- **快速迭代期**：Gemini CLI（夜间版本每日发布、P1 问题密集修复）、Qwen Code（重构主线明确，Config 派生边界集中化）、CodeWhale（v0.9.12 集成周期密集推进，发布前收尾清理）。三者均在**主动清偿架构债务**，属于"发展快但需治理"阶段。
- **问题驱动的稳定期**：Pi 与 OpenCode 社区讨论以功能请求（SSH 远程、TUI 搜索）和长期悬而未决问题（Memory Megathread 136 评论）为主，维护者更关注 LLM 协议层健壮性（Pi 的 Bedrock 帧边界校验、OpenCode 的工具流原型污染防护）。
- **数据不完整**：Kimi Code 当日数据仅 2 条 Issue、3 条 PR，无法全面评估热度，但 #1994（用量问题）获得 7 个 👍 表明成本敏感度不低。
- **品牌迁移过渡期**：CodeWhale 已废弃 `deepseek-tui` npm 包，但仓库仍沿用旧名，短期存在认知混淆风险（维护者已通过 Release 说明澄清）。

## 6. 值得关注的趋势信号

1. **"用量透明度"从功能需求升级为信任危机**：Claude Code、Codex、Kimi 三个工具同日出现"未使用却消耗限额"类 Issue，Codex 桌面应用静默消耗 6% 周配额被用户称为"被偷走"。在 Agent 化产品中，**计费可观测性（每次 API 调用的触发原因、Token 消耗明细）将成为关键差异化能力**，而非可选项。

2. **多 Agent 编排的"状态可信度"是通用痛点**：从 Gemini 的 MAX_TURNS 误报、Qwen 的普通消息误判 shutdown、Copilot 的口头确认不执行，到 CodeWhale 的 Degraded 折叠为 Completed——**子代理执行状态的准确上报与审计跟踪**（如 CodeWhale 的 lifecycle outbox 方案）是各团队都在补的能力拼图。

3. **"监督式运行"成为独立产品方向**：CodeWhale 的 control socket + lifecycle outbox + /relaunch 组合（同一开发者连续 4 个 PR）与 OpenCode 的 SSH 远程、Codex 的跨设备同步，都指向**运维层面的可编程性**（机器可读事件、外部控制面、远程注入）。Agent CLI 正从交互式工具扩展为**可嵌入 CI/CD 与远程工作流的运行时**。

4. **沙箱安全进入"竞速"阶段**：Codex 当日合并 3 条安全相关 PR（bubblewrap 挂载隔离、沙箱错误信息保留）、Pi 提出零依赖 OS 沙箱构想、OpenCode 加固工具流状态原型链防护——**安全边界的设计从"防逃逸"转为"可诊断、可组合、零配置"**，是未来 Agent 接入企业环境的决定性因素。

5. **模型接入层的兼容性成为隐性门槛**：Pi 的 openai-responses 缺失 prompt-caching（2.5 倍成本）、Qwen 的 /effort max 在 OpenAI 兼容提供商上 400、Codex 的 BYOK 本地 403、OpenAI 的 compact 端点 404——**多提供商的 API 语义差异（缓存、推理参数、流式协议）正成为用户选型时的隐性成本**。统一抽象层（如 OpenCode 的 AgentRouter）的价值被验证。

6. **Windows 是下一个主战场**：Codex 近 1/3 的 Issue 聚焦 Windows（登录循环、侧边栏混乱、Store 静默退出）、Pi 维护者放弃修复 git bash 直接提供 PowerShell 工具、Copilot 插件在 VS Code 运行时文件锁冲突——**跨平台体验的投入力度将直接决定工具在非 macOS 开发者中的渗透率**，且从"修 Bug"转向"重建工具链"（如 Pi 的 PowerShell 原生方案）。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告

**数据截止：2026-08-24**

---

## 1. 热门 Skills 排行

### 🥇 skill-creator 修复（PR #1298）
**状态：Open** | 创建：2026-06-10
[GitHub 链接](https://github.com/anthropics/skills/pull/1298)

**功能：** 修复 `run_eval.py` 始终报告 0% recall 的关键缺陷——eval 产物未作为真实 skill 安装，同时修复 Windows 流读取、触发检测和并行 worker 问题。该脚本被 `run_loop.py` 和 `improve_description.py` 所依赖。

**社区讨论热点：** 关联 Issue #556（超过 10 个独立复现），核心矛盾在于 **`.claude/commands/` 目录下的命令文件无法被 `claude -p` 触发**，导致所有 query 记录为 "not triggered"，优化循环每轮输出 `precision=100% recall=0%`。此问题直接使 skill-creator 的核心优化流程完全不可用。

---

### 🥈 document-typography 技能（PR #514）
**状态：Open** | 创建：2026-03-04
[GitHub 链接](https://github.com/anthropics/skills/pull/514)

**功能：** 为 AI 生成文档添加排版质量控制：孤行词换行（1-6 个词溢出到下一行）、段落孤寡（节标题滞留页底）和编号错位。这些问题影响每一份 AI 生成的文档（docx/pdf/typst），覆盖面广。

**社区讨论热点：** 属高频刚需——提供可执行的检查清单和 xx-common 共享 skill 中的样式指导，意图将排版质量问题系统化解决。

---

### 🥉 Hivemind 多代理编排技能（PR #1628）
**状态：Open** | 创建：2026-08-21
[GitHub 链接](https://github.com/anthropics/skills/pull/1628)

**功能：** 让 Claude Code 将机械性工作委派给 headless [opencode](https://opencode.ai) workers（运行免费模型），Claude Code 仅承担规划、审查与合并角色。目标是以接近零成本完成多代理并行任务。

**社区讨论热点：** 直击大模型成本痛点——通过"主从代理"模式显著降低 token 开销，反映社区对高效多代理编排方案的强烈渴求。

---

### 4️⃣ scnet-hpc 技能（PR #1615）
**状态：Open** | 创建：2026-08-20，更新至 2026-08-24
[GitHub 链接](https://github.com/anthropics/skills/pull/1615)

**功能：** 通过 profile 驱动的 SSH 和 Slurm 工作流操作 SCNet HPC 集群，涵盖连接、分区、内存、模块和加速器配置以及 Slurm 作业提交。

**社区讨论热点：** 垂直场景深耕——展现社区从通用技能向科研计算/高性能计算场景细分的趋势。

---

### 5️⃣ self-audit 技能（PR #1367）
**状态：Open** | 创建：2026-06-28
[GitHub 链接](https://github.com/anthropics/skills/pull/1367)

**功能：** 交付前审计 AI 输出——先做机械文件验证，再按危害严重度执行四维推理审计。宣称与任何项目、技术栈、模型通用。

**社区讨论热点：** 需求核心在于"推理质量门控"（Reasoning Quality Gate），关联 Issue #1385 提出完整的三段式流水线（任务前校准 → 对抗性审查 → 交付验证），代表社区对输出质量系统性把控的追求。

---

### 6️⃣ ODT 技能（PR #486）
**状态：Open** | 创建：2026-03-01
[GitHub 链接](https://github.com/anthropics/skills/pull/486)

**功能：** OpenDocument 文本创建与模板填充，并可将 ODT 解析为 HTML；覆盖 `.odt`、`.ods` 等格式。

**社区讨论热点：** 补全文档格式生态版图（对齐已有 docx/pdf/pptx 族），触发词设计完整，落地条件成熟。

---

### 7️⃣ testing-patterns 技能（PR #723）
**状态：Open** | 创建：2026-03-22
[GitHub 链接](https://github.com/anthropics/skills/pull/723)

**功能：** 覆盖完整测试栈：Testing Trophy 模型、单元测试（AAA 模式、纯函数、边界条件）、测试命名规范、"该测什么 vs 不该测什么"。

**社区讨论热点：** 呼应 AI 生成代码质量保障的核心诉求——测试是验证 AI 产出的第一道防线。

---

### 8️⃣ ServiceNow 平台技能（PR #568）
**状态：Open** | 创建：2026-03-08
[GitHub 链接](https://github.com/anthropics/skills/pull/568)

**功能：** 涵盖 ServiceNow 平台脚本、架构、SecOps、ITAM/SAM、FSM、SPM、CSDM 和 IntegrationHub，定位为平台级助手而非单一脚本助手。

**社区讨论热点：** 企业级平台深度切入，展现社区向大型企业管理软件领域的拓展意图。

---

## 2. 社区需求趋势

### 🔥 高热度：安全与信任边界（Issue #492，43 评论）
社区技能在 `anthropic/` 命名空间下分发，**伪装成官方技能**造成信任边界滥用风险——用户可能将高权限授予社区技能。这反映了生态扩大后对**供应链安全治理**的核心焦虑。

### 🔥 高热度：组织级技能共享（Issue #228，16 评论，👍8）
当前用户必须手动下载 `.skill` 文件、通过 Slack/Teams 传输、再引导同事到 Settings > Capabilities 上传。**组织级共享技能库**（或直接分享机制）成为呼声最高的功能需求。

### 📈 技能分发与容错
- **重复技能冲突**（Issue #189，👍9）：`document-skills` 和 `example-skills` 插件包含相同技能，导致上下文窗口产生重复内容，需要去重机制。
- **技能丢失**（Issue #62，10 评论）：文件重命名后技能不可见且报错，用户希望更健壮的技能管理。

### 📈 技能描述质量治理
- Issue #202 指出 skill-creator 本身"更像开发者文档而非可操作的技能"，教育性口吻显著削弱 token 效率——**社区开始反向审视官方 skill 的质量**。

### 📈 特定技术问题
- **AWS Bedrock 兼容性**（Issue #29）：如何让 Skills 在 Bedrock 上工作。
- **Skills 暴露为 MCP**（Issue #16）：将技能内容通过 MCP 协议标准化接口化。
- **DOCX/OOXML 空白格式重排损坏文件**（Issue #12）：docx 技能添加评论导致文件无法被 Word 打开。

---

## 3. 高潜力待合并 Skills（活跃但未合并）

| Skill | PR | 活跃度信号 | 潜力分析 |
|---|---|---|---|
| **skill-creator 全套修复** | [#1298](https://github.com/anthropics/skills/pull/1298) | 关联 #556（12 评论、👍7），另有 3 个并行修复 PR（#1099、#1050、#539、#538、#541） | 工具链完全不可用状态，官方极有可能合并其中一版 |
| **Hivemind 多代理编排** | [#1628](https://github.com/anthropics/skills/pull/1628) | 2026-08-21 创建，持续活跃更新 | 新方向、高话题性，代表未来趋势 |
| **document-typography** | [#514](https://github.com/anthropics/skills/pull/514) | 覆盖所有生成文档的痛点 | 泛用性强，任何文档生成场景都需要 |
| **self-audit + Reasoning Quality Gate** | [#1367](https://github.com/anthropics/skills/pull/1367) | 配套提案 [#1385](https://github.com/anthropics/skills/issues/1385) | 质量保障体系化，官方可能借鉴内化 |
| **testing-patterns** | [#723](https://github.com/anthropics/skills/pull/723) | 测试是 AI 代码质量第一道防线 | 与官方代码生成主路径强协同 |
| **skill-quality-analyzer + skill-security-analyzer** | [#83](https://github.com/anthropics/skills/pull/83) | 与 Issue #492 安全讨论呼应 | 元技能方向，官方可能优先整合 |

> ⚠️ 注意：以上 PR 均标注为 OPEN，无 merged 状态的确认数据。

---

## 4. Skills 生态洞察

**社区最集中的诉求是"质量与安全"——对内修复 skill-creator 评估工具的可靠性缺陷、补齐 typography 与 testing 等质量保障技能；对外建立信任边界（防冒用）、组织级共享机制和技能去重方案，同时以多代理编排（Hivemind）和推理质量门控（self-audit）探索成本与质量的系统性优化。**

用一个词概括：**从"数量扩张"转向"质量与信任治理"**。

---

# Claude Code 社区动态日报 — 2026-08-24


## 一、今日速览

今日无新版本发布，社区讨论围绕一批**已关闭的历史 Issue** 的最终定论展开。核心焦点集中在三块：**用量与计费问题**（会话限额被无故消耗、空闲会话产生用量）、**Hook 与权限机制缺陷**（bypassPermissions 下 Edit|Write 钩子失效、Auto 模式误拦内部 agent 调用）、以及**插件与遥测数据可靠性**（插件缓存缺失、OTel 事件缺失）。值得关注的是 #13024（等待用户输入时触发 Hook）虽长期活跃，最终以关闭收尾。另有 1 个 Plugins/Hook 开发文档相关的 PR #83374 在今日处于活跃状态。


## 二、版本发布

过去 24 小时内无新版本发布。


## 三、社区热点 Issues（按关注度筛选 10 条）

### 1. #82506 — [BUG] Claude Max 用量 Bug：会话限额在未使用时被消耗
**更新于 2026-08-24 | 状态：已关闭（CLOSED） | 评论：31 | 👍：7**
作者报告其 Claude Max 会话限额在未实际使用的情况下被耗尽，属于计费/用量类问题，社区讨论热度高（31 条评论），反映出用户对用量透明度的敏感度。
🔗 https://github.com/anthropics/claude-code/issues/82506

### 2. #13024 — [FEATURE] 为“Claude 等待用户输入”状态添加 Hook
**更新于 2026-08-24 | 状态：已关闭（CLOSED） | 评论：26 | 👍：81**
获得 81 个 👍 的高关注功能请求，希望新增当 Claude 暂停等待用户输入时触发的 Hook 事件。虽然最终关闭，但其高赞数表明开发者对此类细粒度事件钩子的强烈需求。
🔗 https://github.com/anthropics/claude-code/issues/13024

### 3. #69336 — [BUG] API 错误：新上下文窗口中响应中途连接关闭
**更新于 2026-08-24 | 状态：开放（OPEN） | 评论：19 | 👍：18 | 标签：platform:linux, area:api, area:agent-sdk **
Linux 平台上在新开启的上下文窗口中立即出现 “Connection closed mid-response” 错误，涉及 API 与 Agent SDK 层。仍在开放状态，获得 18 个 👍，是当前少数仍处于活跃状态的 bug 之一，影响 Agent 开发者的日常使用。
🔗 https://github.com/anthropics/claude-code/issues/69336

### 4. #66504 — [FEATURE] 会话 URL 默认附加到提交信息和 PR 描述中——应改为可选加入
**更新于 2026-08-24 | 状态：已关闭（CLOSED） | 评论：17 | 👍：50**
用户反映 Claude Code 默认将 Session URL 写入 commit message 和 PR 描述，属于默认行为与用户预期不符的问题，50 个 👍 表明不少用户认为应将该行为改为 opt-in。
🔗 https://github.com/anthropics/claude-code/issues/66504

### 5. #86164 — [BUG] MCP stdio 客户端在处理健康新起服务器的特定工具响应时失败
**更新于 2026-08-24 | 状态：已关闭（CLOSED） | 评论：3**
MCP stdio 客户端无法正确解析来自健康服务器的特定工具响应，而通过原始 JSON-RPC 探测却能正常工作，表明客户端可能在某些边缘情况的响应处理上存在兼容性问题。
🔗 https://github.com/anthropics/claude-code/issues/86164

### 6. #82744 — [BUG] 空闲打开的会话（无新提示词）时 Claude Code 用量持续增加
**更新于 2026-08-24 | 状态：已关闭（CLOSED） | 评论：4**
用户发现即使不发送新提示词，空闲的会话仍在持续消耗用量。与 #82506 同属用量计费透明度的关切，此类问题频繁出现反映了社区对计费机制的高度关注。
🔗 https://github.com/anthropics/claude-code/issues/82744

### 7. #76759 — [BUG] 通过 enabledPlugins 自动安装插件未填充 plugins/cache/ 目录
**更新于 2026-08-24 | 状态：已关闭（CLOSED） | 评论：4 | 👍：1**
在 Linux 环境（Ubuntu Docker）下，通过设置 `enabledPlugins` 自动安装插件时，`installed_plugins.json` 已写入但 `plugins/cache/` 未填充，可能导致插件加载异常。
🔗 https://github.com/anthropics/claude-code/issues/76759

### 8. #74942 — [BUG] bypassPermissions 下 PreToolUse 钩子匹配 Edit|Write 时整个会话静默失效
**更新于 2026-08-24 | 状态：已关闭（CLOSED） | 评论：4 | 标签：platform:macos, area:security, area:hooks**
在 `bypassPermissions` 模式下，匹配 `Edit|Write` 的 PreToolUse 钩子在整个会话中完全不被调用，而同会话中匹配 `Bash` 的钩子正常工作。涉及安全与 Hook 关键路径。
🔗 https://github.com/anthropics/claude-code/issues/74942

### 9. #72549 — [BUG] 上下文压缩后 mode 技能被错误重新激活
**更新于 2026-08-24 | 状态：已关闭（CLOSED） | 评论：3**
在上下文压缩后，一个本来已被用户在对话中禁用且无参数的 “mode” 技能，因摘要中丢失了禁用信息而被重新视为激活状态，属于压缩机制的信息保持缺陷。
🔗 https://github.com/anthropics/claude-code/issues/72549

### 10. #75608 — [BUG] Auto 模式的分类器会拦截已授权 Workflow 运行内部的 agent() 调用
**更新于 2026-08-24 | 状态：已关闭（CLOSED） | 评论：4 | 标签：area:agents, area:permissions**
Auto 模式的安全分类器不仅评估 Workflow 调用的顶层，还会对 Workflow 脚本*内部*的每次 `agent()` 调用重新评估，导致自定义多智能体 Workflow 工具无法正常工作。对依赖 Workflow 的开发者影响较大。
🔗 https://github.com/anthropics/claude-code/issues/75608

### 附：其他值得关注的问题

- **#84187** — [BUG] 上下文压缩抖动（Context-compaction thrashing）
  🔗 https://github.com/anthropics/claude-code/issues/84187
- **#86261** — [MODEL] 模型接受明确完成条件但提前停止——跨 5 个会话重复出现
  🔗 https://github.com/anthropics/claude-code/issues/86261
- **#81859** — [Bug] OTel `claude_code.user_prompt` 仅对斜杠命令发出，普通提示词无事件
  🔗 https://github.com/anthropics/claude-code/issues/81859


## 四、重要 PR 进展

过去 24 小时内共 1 条 PR 处于活跃状态：

### #83374 — docs(plugin-dev): 补充 MessageDisplay 流式语义文档
**更新于 2026-08-23 | 状态：开放（OPEN）**
作者发现官方 Hook 开发技能文档中遗漏了 `MessageDisplay` 这一支持的钩子事件（未出现在触发描述、事件指南和速查表中）。该 PR 将 `MessageDisplay` 补充至 Hook 开发文档，提升插件开发者对事件类型的可发现性。
🔗 https://github.com/anthropics/claude-code/pull/83374


## 五、功能需求趋势

从过去 24 小时内更新的全部 Issue 中，可以提炼出社区当前关注的功能方向：

| 方向 | 代表性 Issue | 热度信号 |
|---|---|---|
| **细粒度事件钩子（Hooks）** | #13024（等待用户输入时触发 Hook） | 81 👍、26 评论，需求强烈 |
| **用量与计费透明度** | #82506、#82744（用量消耗不透明） | 31 条评论、7 👍 |
| **默认行为可配置（opt-in）** | #66504（Session URL 默认写入 commit/PR） | 50 👍、17 评论 |
| **上下文压缩可靠性** | #72549（压缩后技能状态丢失）、#84187（压缩抖动） | 持续出现同类问题 |
| **Agent/Workflow 权限边界** | #75608（Auto 模式拦截内部 agent 调用） | 影响多智能体工作流开发 |
| **插件自动安装完整性** | #76759（缓存目录未填充） | 插件生态可靠性诉求 |
| **可观测性（OTel）** | #81859（user_prompt 事件缺失） | 数据分析用户受影响 |


## 六、开发者关注点

综合全部 50 条 Issue，开发者反馈中的痛点集中在以下几个高频领域：

1. **用量计费不透明**：多条 Issue（#82506、#82744）指向同一问题——用户在未主动使用时仍被消耗限额，且无从追溯原因，说明当前用量统计与展示机制亟需改进。

2. **Hook 机制的稳定性与覆盖度**：#74942（bypassPermissions 下 Hook 失效）、#13024（缺少等待输入的 Hook 事件），既包含已有 Hook 的可靠性缺陷，也包含对更细粒度事件的支持诉求。此外，PR #83374 表明官方文档对 Hook 事件的覆盖也存在遗漏。

3. **上下文压缩的有损性**：#72549 和 #84187 均与压缩有关——压缩后技能状态被错误恢复、反复触发压缩导致性能抖动，表明压缩机制在长会话场景下的行为仍需打磨。

4. **Agent/Workflow 与权限系统的摩擦**：#75608 揭示了 Auto 模式的分类器对 Workflow 内部 `agent()` 重新评估导致自定义多智能体工具失效，说明安全模型与高级自动化之间存在设计张力。

5. **数据与遥测缺失**：#81859（OTel 事件缺失）反映了高阶用户对可观测性和数据流水线完整性的需求，这类问题直接影响依赖数据做分析或审计的团队。

6. **模型行为一致性**：#86261（模型接受完成条件但提前停止，5 次会话重复出现）、#78031（Fable 5 提交无效 sed 替换）表明模型在复杂工作流中遵循指令的可靠性仍是开发者关注的核心问题。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报 — 2026-08-24

## 1. 今日速览

今日 Codex 发布了 rust-v0.149.1 与 rust-v0.149.0-alpha.4.3 两个版本。社区讨论焦点集中在 Windows 端应用的多个 Bug（登录循环、侧边栏混乱、闪烁问题）以及后台轮询消耗 token 导致额度快速耗尽的严重问题。PR 方面，今日密集合并了一批 TUI 增强（任务管理、@提任务）和沙箱安全加固改动。

## 2. 版本发布

**rust-v0.149.1** — 补丁版本，无详细变更说明。查看完整变更：https://github.com/openai/codex/compare/rust-v0.149.0...rust-v0.149.1

**rust-v0.149.0-alpha.4.3** — 预发布版本，无详细变更说明。

## 3. 社区热点 Issues

### 🔥 高热度（30+ 评论）
1. **#28919 — Windows 版 Codex 应用缺少"控制其他设备"标签页** ([链接](https://github.com/openai/codex/issues/28919))
   用户报告 Windows 客户端在 设置 > 连接 中缺少远程设备控制入口，影响远程开发工作流。39 条评论、41 个👍，自 6 月创建至今仍开放，关注度高。

2. **#13733 — 后台进程轮询浪费 token：每次 write_stdin 轮询触发完整的 API 调用** ([链接](https://github.com/openai/codex/issues/13733))
   当后台构建/测试运行时，Codex 进入轮询循环，**每次状态检查都携带完整对话历史进行完整 API 往返**，严重消耗 token/额度。38 条评论、35 个👍，是当前最严重的资源浪费问题之一。

3. **#38350 — 定时任务成功后自动禁用，未经用户授权** ([链接](https://github.com/openai/codex/issues/38350))
   用户在 ChatGPT Web 端配置的定时任务在成功运行后从 enabled 变为 paused。37 条评论，影响自动化的可靠性。

### 中等关注（10-30 评论）

4. **#35746 — 分页历史丢弃有效的扁平化 rollout 记录并复用序号** ([链接](https://github.com/openai/codex/issues/35746))
   分页历史功能导致会话记录丢失和序号复用，对依赖历史记录的开发工作流造成困扰。

5. **#39903 — [增强] 增加选项禁用"Ran N commands"折叠** ([链接](https://github.com/openai/codex/issues/39903))
   用户希望始终显示已执行命令而非折叠。19 条评论、31 个👍，反映 TUI 用户体验改进需求。

6. **#37445 — 打开 ChatGPT 桌面应用静默消耗 Codex 周限额** ([链接](https://github.com/openai/codex/issues/37445))
   仅打开桌面应用（内置 Codex Framework）未提交任何请求，即消耗每周配额 **6%**（受控实验复现）。15 条评论、13 个👍，用户对此表达强烈不满。

7. **#27928 — CLI /review 后续操作失败：review_rollout_user id 报错** ([链接](https://github.com/openai/codex/issues/27928))
   使用 Azure OpenAI 提供商的用户在代码审查后续操作中遇到 ID 格式错误（期望 `msg` 前缀）。

8. **#32754 — Windows 版应用在 Microsoft Store 更新扫描失败后静默退出** ([链接](https://github.com/openai/codex/issues/32754))
   应用在 Store 更新扫描失败后无提示退出，影响使用的稳定性。

9. **#38323 — CLI 0.146.0 的 /backend-api/codex/responses/compact 返回 404** ([链接](https://github.com/openai/codex/issues/38323))
   上下文压缩接口返回 404 "Not Found"，涉及 API 端点变更兼容性问题。

10. **#33398 — Codex Desktop 在上下文/任务交接后过早停止** ([链接](https://github.com/openai/codex/issues/33398))
   任务交接后 Codex Desktop 表现为等待新请求而非继续当前任务，需要用户再次发送消息才能恢复执行。

## 4. 重要 PR 进展

### 功能增强

1. **#40382 — 向扩展工具暴露调用来源（ToolCallSource）** ([链接](https://github.com/openai/codex/pull/40382))
   为扩展的 `ToolCall` 添加 `ToolCallSource`，传播直接调用或 Code Mode 调用元数据，包含运行时单元格和嵌套工具调用 ID——便于扩展理解调用上下文。

2. **#40315 — TUI 编辑器新增任务 @提及** ([链接](https://github.com/openai/codex/pull/40315))
   在 `@` 提及弹窗中展示匹配的 Codex 任务（支持任务工具时会话），优先显示当前工作目录的任务，可选中作为布尔值提交。

3. **#40308 — TUI 新增管理 Codex 任务工具** ([链接](https://github.com/openai/codex/pull/40308))
   此前 TUI 拒绝应用服务器动态工具调用，导致代理无法在 TUI 会话中管理其他 Codex 任务。新增 `codex_tui` 工具命名空间解决此问题。

4. **#40321 — 更新 frameless 实时会话默认模型** ([链接](https://github.com/openai/codex/pull/40321))
   默认模型更新为 `gpt-live-1-codex`，同时保留显式指定的会话级模型覆盖。

5. **#31175 — MongoDB 线程存储与会话迁移** ([链接](https://github.com/openai/codex/pull/31175))
   实验性 MongoDB 后端线程存储（通过 `experimental_thread_store` 选择）＋ `codex sessions migrate-to-mongo` 流式迁移命令。

### 沙箱与安全

6. **#40302 — 加固 bubblewrap 合成挂载注册表隔离** ([链接](https://github.com/openai/codex/pull/40302))
   修复可写绑定重叠临时目录导致注册表暴露的风险，防止已存在的注册表被篡改——沙箱安全关键修复。

7. **#40381 — 会话初始化期间保留沙箱错误信息** ([链接](https://github.com/openai/codex/pull/40381))
   修复 macOS 上拒绝符号链接可写根目录时被误报为"会话数据损坏"的问题，使两类错误可区分。

### 平台与兼容性

8. **#40376 — Unix 平台宣告 shell snapshot v2 支持** ([链接](https://github.com/openai/codex/pull/40376))
   在 Unix 上设 `shellSnapshotV2` 能力为 true，其他平台继续报告不支持。

9. **#40363 — 将本地环境变量转发至 Agent Plugin MCP 服务器** ([链接](https://github.com/openai/codex/pull/40363))
   从 `.codex-plugin/plugin.json` 应用本地 `env_vars` 到 stdio 服务器，替换 `${NAME}` 占位符。

### 安全与命名

10. **#40301 — Business Pro Lite 计划标记为 Business Premium** ([链接](https://github.com/openai/codex/pull/40301))
    TUI 账户显示中将 `SelfServeBusinessProLite` 显示为 `Business Premium` 而非归入 `Business`。

## 5. 功能需求趋势

从近 24 小时的问题和 PR 中可提炼以下社区关注方向：

- **后台任务智能化**：多个 Issue 关注后台进程轮询导致的 token 浪费（#13733），以及希望新增 agent 可调用的 `monitor` 工具，在日志/文件/构建/CI 事件发生时唤醒 Codex 而非轮询（#29922）——核心诉求是**减少不必要的 API 调用和 token 消耗**。
- **TUI 交互增强**：昨日合并的 PR 大量集中在 TUI 的代码质量提升，包括任务 @提及（#40315）、任务管理工具（#40308）、命令折叠选项（#39903）——TUI 正在被积极补全为完整的前端交互界面。
- **跨设备工作流**：#34804 请求工作区跨设备连续性，结合 #28919（远程控制设备标签缺失）和 #29163（项目不跨设备同步），反映用户在**多设备开发场景**下的强需求。
- **沙箱/安全加固持续投入**：bubblewrap 挂载隔离（#40302）、沙箱错误信息保留（#40381）等改动表明开发团队在**沙箱安全性和错误可诊断性**上持续投入。

## 6. 开发者关注点

- **成本敏感**：两个高赞 Issue（#13733、#37445）都直指 token/额度消耗问题——后台轮询和静默消耗周配额让用户感到被"偷走"额度。这已成为社区最强烈的负面情绪来源。
- **Windows 端体验问题集中爆发**：今日 50 条 Issue 中 Windows 相关占近 1/3（登录循环 #40036、侧边栏子代理线程混乱 #38780、Store 更新后静默退出 #32754、Ryzen 集显下应用持续闪烁 #39846、Chrome 原生主机过期 #40228）。Windows 版本质量和稳定性成为明显的短板。
- **远程/跨设备能力不足**：远程设备控制缺失（#28919）、工作区不跨设备同步（#29163）、Intel macOS 缺少 Computer Use 服务（#31160）——开发者对远程开发的期待与实际支持的差距明显。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报 — 2026-08-24

## 今日速览

今日发布 v0.56.0-nightly.20260824 新版本。社区讨论热度最高的 Issue 是 #28912「You do not have a valid license of this product」（25 条评论），反映企业授权相关问题受到较多关注。多个 P1 级 Issue 今日被更新，包括 #22323（子代理 MAX_TURNS 后被误报为成功）、#21409（通用 agent 挂起）、#25166（Shell 命令执行后卡在 "Waiting input"）、#22186（get-shit-done 输出 hook 崩溃）。

## 版本发布

**v0.56.0-nightly.20260824.g5411f113c** — 发布于 2026-08-24

[查看完整变更日志](https://github.com/google-gemini/gemini-cli/compare/v0.56.0-nightly.20260823.g5411f113c...v0.56.0-nightly.20260824.g5411f113c)

夜间构建版本，具体变更内容需参考 changelog 链接。

## 社区热点 Issues（Top 10）

**1. [#28912] You do not have a valid license of this product** | P2, Bug, 需更多信息
作者: RedBaron1914 | 👍 7 | 💬 25 | [GitHub](https://github.com/google-gemini/gemini-cli/issues/28912)
**为什么重要**: 登录时报「You do not have a valid license」错误。非企业用户可能误收到此消息。25 条评论是今日最高，说明不少用户遇到该问题或提供了排查信息。
**社区反应**: 仍在等待维护者回应（status/need-information）。

**2. [#22323] Subagent recovery after MAX_TURNS reported as GOAL success** | P1, Bug
作者: matei-anghel | 👍 2 | 💬 13 | [GitHub](https://github.com/google-gemini/gemini-cli/issues/22323)
**为什么重要**: `codebase_investigator` 子代理在达到 MAX_TURNS 后被误报为 "GOAL success"，隐藏了中断原因。P1 级别，需要重新测试（status/need-retesting）。影响任务追踪的可靠性。

**3. [#21409] Generalist agent hangs** | P1, Bug
作者: turmanticant | 👍 8 | 💬 8 | [GitHub](https://github.com/google-gemini/gemini-cli/issues/21409)
**为什么重要**: 委派给 generalist agent 时无限挂起，连简单操作（如创建文件夹）都会卡住一小时以上。P1 + 8 个 👍 表明这是广泛影响的核心稳定性问题。

**4. [#25166] Shell command execution stuck with "Waiting input" after completion** | P1, Bug
作者: rnett | 👍 3 | 💬 4 | [GitHub](https://github.com/google-gemini/gemini-cli/issues/25166)
**为什么重要**: Shell 命令实际已执行完毕，但 Gemini CLI 仍显示 "Awaiting user input"。P1 级别高频问题，严重干扰日常使用。

**5. [#22186] get-shit-done output hook causes crash** | P1, Bug
作者: businesscasual98 | 💬 3 | [GitHub](https://github.com/google-gemini/gemini-cli/issues/22186)
**为什么重要**: 输出 hook 在打印用户摘要阶段导致崩溃。作为 P1 问题影响核心工作流的稳定性。

**6. [#21983] browser subagent fails in wayland** | P1, Bug
作者: sigmaSd | 👍 1 | 💬 4 | [GitHub](https://github.com/google-gemini/gemini-cli/issues/21983)
**为什么重要**: Wayland 环境下浏览器子代理失败。P1 级别，Linux 用户广泛受影响。已标记 need-retesting，等待验证修复。

**7. [#19873] Leverage model's bash affinity via Zero-Dependency OS Sandboxing & Post-Execution Intent Routing** | P2, Enhancement
作者: abhipatel12 | 👍 1 | 💬 8 | [GitHub](https://github.com/google-gemini/gemini-cli/issues/19873)
**为什么重要**: 探讨利用 Gemini 3 模型原生 bash 能力，通过零依赖沙箱与意图路由来优化工具链。Effort/large，是代理架构层面的长期演进方向。

**8. [#22745] Assess impact of AST-aware file reads, search, and mapping** | P2, Feature
作者: gundermanc | 👍 1 | 💬 7 | [GitHub](https://github.com/google-gemini/gemini-cli/issues/22745)
**为什么重要**: AST 感知的文件读取/搜索/代码库映射可减少单次工具调用所需的轮次，改善效率。属于 EPIC 级探索，对大型代码库场景有实际价值。

**9. [#21968] Gemini does not use skills and sub-agents enough** | P2, Bug
作者: rnett | 💬 6 | [GitHub](https://github.com/google-gemini/gemini-cli/issues/21968)
**为什么重要**: 模型不会主动使用自定义 skills 和子代理，需要显式指令。影响用户自定义扩展的有效性，是代理自主性方面的核心短板。

**10. [#26522] Stop Auto Memory from retrying low-signal sessions indefinitely** | P2, Bug
作者: SandyTao520 | 💬 5 | [GitHub](https://github.com/google-gemini/gemini-cli/issues/26522)
**为什么重要**: Auto Memory 对低信号会话无限重试，浪费资源。属于记忆系统的可靠性问题。

## 重要 PR 进展（Top 10）

**1. [#28914] fix(core): inject on-retry nudge into contents 以保留前缀缓存**
作者: Ultron09 | Size/l | [GitHub](https://github.com/google-gemini/gemini-cli/pull/28914)
**内容**: 将 on-retry 提示从 `systemInstruction` 移到 `contents` 尾部，保留静态前缀缓存并确保模型看到恢复提示。修复 #28909 的性能/正确性问题。

**2. [#29006] fix(core): 简化 frontmatter 解析器 — 剥离引号并处理块标量**
作者: loulanyue | Size/s | [GitHub](https://github.com/google-gemini/gemini-cli/pull/29006)
**内容**: 修复 YAML 解析失败回退时，name/description 残留引号的问题，并处理块标量标志（`|`、`>`）。

**3. [#29005] fix(sandbox): 规范化 DEBUG 环境变量真值判断**
作者: Eswar809 | Size/m | [GitHub](https://github.com/google-gemini/gemini-cli/pull/29005)
**内容**: 防止 `"false"`、`"0"` 等字符串值意外启用调试功能（端口发布、pull 日志）。修复 #28885。

**4. [#29004] fix(core): 防止 formatTruncatedToolOutput 负值 maxChars 异常**
作者: Eswar809 | P1 | Size/s | [GitHub](https://github.com/google-gemini/gemini-cli/pull/29004)
**内容**: 防护 `maxChars` 为 0 或负数时输出膨胀至约两倍大小的问题。

**5. [#28938] fix(core): 保持 GIT_CONFIG_* 环境变量三元组内部一致**
作者: Shivansh1980 | P1 | Size/l | [GitHub](https://github.com/google-gemini/gemini-cli/pull/28938)
**内容**: `sanitizeEnvironment()` 可能生成 git 拒收的 `GIT_CONFIG_*` 环境配置，导致所有 git 调用中止。修复后可避免每个 git 操作失败。

**6. [#28995] fix(core): 修复 formatTruncatedToolOutput 对负 maxChars 的输出膨胀**
作者: Kanika0306 | P1 | Size/m | [GitHub](https://github.com/google-gemini/gemini-cli/pull/28995)
**内容**: 修复 `String.prototype.slice()` 负索引导致输出异常放大。与 #29004 解决同一问题（#28620），需注意合并策略。

**7. [#28926] docs: 为 CONTRIBUTING.md 添加 Windows longpaths 设置说明**
作者: Shivang9983 | P2 | Size/xs | [GitHub](https://github.com/google-gemini/gemini-cli/pull/28926)
**内容**: 添加 Windows `core.longpaths=true` 配置与恢复步骤，解决嵌套快照路径超过 Windows 默认 260 字符限制导致克隆失败的问题。

**8. [#28832] test(core): 带原因跳过环境相关测试而非失败**
作者: Chirag6722 | P2 | Size/l | [GitHub](https://github.com/google-gemini/gemini-cli/pull/28832)
**内容**: 干净的 Windows 检出时 `npx vitest run` 报告 13 个失败——8 个需要 Windows 默认不授予的权限，4 个需要 PowerShell。改为带原因跳过，关闭 #28830。

**9. [#28834] fix(core): 抑制工作区扫描中对瞬时子目录的虚假 ENOENT 警告**
作者: Xsidz | P1/P2 | Size/m | [GitHub](https://github.com/google-gemini/gemini-cli/pull/28834)
**内容**: BFS 工作区遍历器在 `readdir` 和递归之间目录消失时触发虚假警告。消除 `Warning: Could not read directory ... projects.json.lock: ENOENT` 噪音。

**10. [#28848] fix(cli): 非交互模式下优雅处理 refreshAuth 失败**
作者: chelsealong | P2, Security | Size/m | [GitHub](https://github.com/google-gemini/gemini-cli/pull/28848)
**内容**: 修复 `refreshAuth()` 失败时 CLI 崩溃并输出原始堆栈的问题，改为返回干净的、可操作的错误和专用认证错误退出码。

## 功能需求趋势

从今日 Issues 中提炼的社区关注方向：

1. **授权与许可**: #28912 许可证错误引发大量讨论，涉及非企业用户的误报问题，是当前最紧迫的用户侧问题。
2. **代理稳定性与自主性**: Multiple Issues（#21409 挂起、#21968 不主动使用 skills/sub-agents、#22323 状态误报、#26522 记忆重试）表明用户期待代理在**自主决策能力**和**可靠性**上有更强表现。
3. **AST 感知的代码理解**: #22745 探索 AST-aware 工具以提升文件读取/搜索/代码库映射精确度，是代理代码理解方向的重要演进。
4. **安全与沙箱**: #26525（确定性脱敏与日志减少）、#19873（零依赖 OS 沙箱）显示用户关注**安全边界的可控性**与敏感数据处理。
5. **修复破坏性行为**: #22672 期待代理避免危险 git 操作（reset、--force），自动选择更安全的替代方案，体现对代理安全操作行为的重视。
6. **浏览器代理弹性**: #22232 期待自动 session 接管与锁恢复；#22267 反映浏览器代理忽略 settings.json 覆盖（如 maxTurns）。

## 开发者关注点

以下问题在多个 Issue 中反复出现，属于社区高频痛点：

1. **Shell 执行卡死**: Shell 命令完成后仍显示 "Waiting input"（#25166），通用 agent 挂起（#21409），以及 get-shit-done hook 崩溃（#22186）——核心执行链路的稳定性问题被反复报告，属于 P1 级别。
2. **子代理状态上报不准确**: 子代理在 MAX_TURNS 后被误报为成功（#22323），以及代理不主动使用 skills/sub-agents（#21968）——用户对代理结果的可信度存疑。
3. **工具数量/配置边界**: 超过 128/400 个工具时出现 400 错误（#24246），浏览器代理忽略 settings.json 覆盖（#22267）——配置边界行为不透明。
4. **工作区整洁性**: 模型随意在临时目录创建脚本（#23571），造成 git 提交前清理负担。
5. **环境兼容性**: Wayland 下浏览器代理失败（#21983）、Windows 下 13 个测试失败（#28832）——跨平台兼容性仍是实际障碍。
6. **Sandbox 环境变量解析不一致**: DEBUG 环境变量真值判断导致意外开启调试功能（#29005）——开发者对开发环境行为的一致性有明确需求

。

---

*本日报基于 google-gemini/gemini-cli 仓库 2026-08-24 的公开数据生成，所有链接均指向对应 GitHub Issue/PR。*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报 — 2026-08-24

## 今日速览

今日发布 v1.0.81-8 版本，新增 Grok 4.6 的 xhigh 推理能力支持，并优化了本地插件市场的热加载机制。社区方面，高频 400 错误（#1274）和交互模式工具白名单需求（#1973）仍是讨论焦点，同时新出现多个关于会话管理、插件兼容性的问题，开发者对交互体验和稳定性关注度持续上升。

## 版本发布

**v1.0.81-8** ([Release 链接](https://github.com/github/copilot-cli/releases))

**新增**
- 为 Grok 4.6 添加 xhigh 推理能力支持

**改进**
- 本地（目录源）市场中的路径源插件现在可直接从其真实目录实时加载，编辑后通过 `/restart` 或新会话即可生效，无需执行 `/plugin update`
- 技能和自定义 agent 现已可被发现

## 社区热点 Issues（Top 10）

**1. [#1274 CLI 持续收到 400 错误 "invalid request body"](https://github.com/github/copilot-cli/issues/1274)**
🔥 评论 27 | 👍 11 | 状态：OPEN
过去数小时内约 95% 的代码评审请求均返回 400 错误，用户怀疑是服务端校验或客户端构造请求体的问题。这是当前社区反馈最集中的稳定性问题，已持续数月未解决。

**2. [#1973 功能请求：交互模式的工具白名单](https://github.com/github/copilot-cli/issues/1973)**
🔥 评论 12 | 👍 27 | 状态：OPEN
交互模式下每个工具调用（包括 grep、cat、git log 等只读操作）都需手动确认，用户希望引入白名单机制避免重复审批。这是社区支持度最高的功能请求之一，反映了开发者对效率的强烈诉求。

**3. [#2306 企业策略授权间歇性失效](https://github.com/github/copilot-cli/issues/2306)**
💬 评论 9 | 👍 3 | 状态：OPEN
每周出现 2-3 次 "You are not authorized to use this Copilot feature" 错误，要求启用企业/组织策略，但随后自行消失。企业用户的间歇性认证问题，影响工作连续性。

**4. [#4535 `store_memory` 在 v1.0.81 预发布版中失败：`Instance id is required`](https://github.com/github/copilot-cli/issues/4535)**
💬 评论 5 | 状态：OPEN
v1.0.81 预发布版中上下文记忆写入功能持续失败，原生 memory writer 被调用时缺少必需的实例 ID。影响依赖长时记忆的自动化工作流。

**5. [#4572 后台压缩可能丢失并行 GPT 工具结果并导致 HTTP 400](https://github.com/github/copilot-cli/issues/4572)**
💬 评论 1 | 状态：OPEN
gpt-5.6-sol 长上下文自动会话在自动后台压缩后立即失败，报错 "No tool output found for function call"。涉及上下文记忆与模型协作的深层数据一致性问题。

**6. [#4570 Windows 插件安装/更新在 VS Code 运行时失败](https://github.com/github/copilot-cli/issues/4570)**
💬 评论 1 | 状态：OPEN
Windows 下若 VS Code 正在运行，`plugin install/update` 即报 "Access is denied" 错误，关闭 VS Code 后恢复正常。影响所有插件，Windows 用户的日常使用痛点。

**7. [#4566 Agent 反复确认工作但未执行工具操作](https://github.com/github/copilot-cli/issues/4566)**
💬 评论 2 | 👍 1 | 状态：OPEN
v1.0.80 中 agent 在响应中反复声明已完成工作，但实际未调用任何工具，导致任务悬空。涉及 agent 行为可靠性的核心问题。

**8. [#3255 非正常退出遗留陈旧 `inuse.<pid>.lock` 文件](https://github.com/github/copilot-cli/issues/3255)**
💬 评论 1 | 状态：OPEN
进程被 SIGKILL 或崩溃时不会清理锁文件，导致 `~/.copilot/sessions` 中残留大量陈旧锁文件。长期存在的稳定性隐患，影响会话恢复体验。

**9. [#4414 BYOK 自定义提供商在请求到达前即返回本地 403](https://github.com/github/copilot-cli/issues/4414)**
💬 评论 1 | 👍 2 | 状态：CLOSED
自定义 OpenAI/Anthropic 兼容提供商的所有推理请求在到达提供商前即被本地拒绝，报 `Authorization error`。已关闭但曾影响 BYOK 用户的接入体验。

**10. [#4576 `includeCoAuthoredBy: false` 未被任务子代理继承](https://github.com/github/copilot-cli/issues/4576)**
💬 评论 0 | 状态：OPEN
交互会话尊重该配置，但 `task` 工具的子代理提交仍会添加 `Co-authored-by: Copilot` 标记。配置一致性 bug，影响希望控制提交元数据的用户。

## 重要 PR 进展

**#4573 [Rename README.md to README.mdmain](https://github.com/github/copilot-cli/pull/4573)**
当前唯一在更新中的 PR。将 README.md 重命名为 README.mdmain，标题疑似拼写异常，无实质性代码变更，推测为误操作或占位 PR。

## 功能需求趋势

从今日更新的 Issues 中可提炼出以下社区关注方向：

- **工具调用效率**（#1973）：只读操作白名单、减少交互审批次数是最高呼声
- **会话管理增强**（#4578、#4554、#4555）：fork 新终端、/resume 全局视图、ACP 模式会话中断行为改进
- **多轮交互支持**（#4577）：/ask 命令从单轮扩展为多轮对话
- **插件生态兼容性**（#4570、#4556）：Windows 文件锁冲突、服务端管理的市场注册失败
- **配置继承一致性**（#4576）：子代理继承全局设置（如 includeCoAuthoredBy）
- **上下文与记忆可靠性**（#4535、#4572）：store_memory 稳定性、压缩不丢数据

## 开发者关注点

- **稳定性优先**：400 错误高频出现（#1274）和后台压缩丢结果（#4572）是最影响工作效率的阻塞性问题，社区持续关注但修复进展缓慢
- **交互效率**：开发者对每个只读工具调用都需手动确认表示强烈不满（#1973，👍 27），希望引入白名单机制减少打断
- **企业/认证问题**：企业策略授权间歇性失效（#2306）和 BYOK 本地 403（#4414）反映出认证链路仍不够健壮
- **Windows 兼容性**：VS Code 运行导致插件操作失败（#4570）是一个直接影响日常使用的平台性缺陷
- **Agent 行为可靠性**：agent 口头确认但不执行操作（#4566）以及无限循环重试 patch（#4553）引发对 agent 决策质量的担忧
- **清理与维护**：陈旧锁文件堆积（#3255）是长期存在的卫生问题，影响会话管理体验

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报 — 2026-08-24

## 今日速览

本期重点关注三个方向：一是内存系统（Memory System）的跨会话持久化需求长期悬而未决（#1283），二是用户对用量计算方式的强烈不满（#1994，👍 7），三是两个新提交的 PR 分别涉及文件编辑安全性（#2595）与远程设备配对功能（#2616）。此外，插件安全文档 PR（#2614）也值得关注。

## 社区热点 Issues

### 1. 内存系统：跨会话持久化上下文（#1283）
- **作者**：CatKang | **更新**：2026-08-23 | **评论**：27 | **👍**：0
- **为什么重要**：请求实现 comprehensive Memory System，支持跨会话记忆项目上下文、模式与用户偏好，涵盖自动与手动记忆两种模式。这是 CLI 工具向"智能体化"演进的关键能力，社区讨论热度高。
- **链接**：[Issue #1283](https://github.com/MoonshotAI/kimi-cli/issues/1283)

### 2. 用量计算问题（#1994）
- **作者**：wanghonghust | **更新**：2026-08-24 | **评论**：8 | **👍**：7
- **为什么重要**：用户反馈每 5 小时 2 小时额度仅完成 2 个任务即耗尽，根因是 K2.6 思维链过长导致 token 消耗激增。订阅会员每 2 小时仅能提问 2 次，体验不佳。该问题获得较高 👍 数，说明用量计费方式引发普遍不满。
- **链接**：[Issue #1994](https://github.com/MoonshotAI/kimi-cli/issues/1994)

> 说明：当前数据源仅提供上述 2 条 Issue，未满足 10 条的挑选要求。建议后续补充更多 Issue 数据以获得更全面的社区动态视图。

## 重要 PR 进展

> 说明：当前数据源仅提供上述 3 条 PR，未满足 10 条的挑选要求。以下为全部 PR 汇总。

### 1. 拒绝编辑非 UTF-8 文件（#2595）
- **作者**：shoemoney | **创建**：2026-08-06 | **更新**：2026-08-24
- **内容**：修复 `StrReplaceFile` 使用 `errors="replace"` 解码导致二进制数据损坏的问题，改为拒绝编辑非 UTF-8 编码文件。关联 Issue #2591。
- **链接**：[PR #2595](https://github.com/MoonshotAI/kimi-cli/pull/2595)

### 2. 构建远程代理手机配对功能（#2616）
- **作者**：LinespottingPrivate | **创建**：2026-08-23 | **更新**：2026-08-23
- **内容**：新增 Build Remote Agent 作为桌面代理的配对设备，通过免费的 MIT 协议 `gbr-agent` 实现 iOS/Android 应用远程围观并注入本地会话。为移动端交互开辟了新场景。
- **链接**：[PR #2616](https://github.com/MoonshotAI/kimi-cli/pull/2616)

### 3. 插件安全与持久化文档（#2614）
- **作者**：QIANLING-0831 | **创建**：2026-08-20 | **更新**：2026-08-23
- **内容**：纯文档变更，明确 kimi-cli 插件约定的安全边界与持久化数据行为（`plugin.json`、命令工具、`inject` 机制、安装路径 `~/.k`）。有助于降低插件生态的使用门槛。
- **链接**：[PR #2614](https://github.com/MoonshotAI/kimi-cli/pull/2614)

## 功能需求趋势

- **跨会话记忆能力**（#1283）：期望 CLI 能自动记忆项目模式与用户偏好，降低重复上下文的输入成本。
- **移动端协同**（#2616）：出现通过手机远程配对、注入桌面会话的诉求，反映用户对"随时随地质询 agent"的需求增长。
- **插件安全透明化**（#2614）：社区对插件机制的安全边界与数据持久化行为有明确文档化需求。

## 开发者关注点

- **计费成本敏感**（#1994）：用户对基于 token 的用量计费在长思维链模型（如 K2.6）下消耗过快表示不满，希望调整计费策略或优化 token 压缩。此问题获得 7 👍，为近期最高赞。
- **文件编辑安全**（#2595）：二进制文件被 `errors="replace"` 误改的风险已通过 PR 修复，反映开发者对数据完整性的关注。
- **命令行工具与移动端/远程场景结合**（#2616）：社区正在探索将本地 agent 能力扩展到移动设备的新交互模式。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 — 2026-08-24

## 今日速览

今日无新版本发布，社区活跃度集中在未决问题的持续讨论上。**内存问题（Memory Megathread）** 以 136 条评论继续占据讨论榜首，此外 **SSH 远程连接桌面端** 与 **禁用模型调用（disable-model-invocation）支持** 两项功能需求获得强社区支持。PR 侧，机器人提交的文档与 TUI 修复占据主要合并流，**AgentRouter Provider 支持** 与 **`opencode stats` 命令** 是值得关注的功能级改动。

## 社区热点 Issues

**1. Memory Megathread（#20695）** — 136 评论 / 105 👍
内存问题的集中跟踪帖，已持续近 5 个月，社区强调通过 Heap Snapshot 而非猜测来定位问题。维护者长期关注，是所有内存报告的事实汇聚点。
[查看 Issue](https://github.com/anomalyco/opencode/issues/20695)

**2. [FEATURE]: TUI 内搜索会话缓冲区字符串（#4714）** — 34 评论 / 45 👍
类似文本编辑器的查找功能。TUI 重度用户的高频诉求，尽管提出近 9 个月仍为开放状态，反映该功能在路线图中的优先级可能不高。
[查看 Issue](https://github.com/anomalyco/opencode/issues/4714)

**3. [FEATURE]: 基于 SSH 的远程服务器连接 OpenCode Desktop（#7790）** — 19 评论 / 79 👍
呼声很高的功能请求，希望获得 VS Code Remote 式的 SSH 直连体验。👍 数显著高于评论数，说明需求广泛但讨论深度有限。
[查看 Issue](https://github.com/anomalyco/opencode/issues/7790)

**4. “Copied to clipboard” 无效（#41470）** — 18 评论
VSCode Server（Docker）环境下复制功能失效，提示成功但剪贴板实际为空。影响远程桌面/容器开发场景，值得注意。
[查看 Issue](https://github.com/anomalyco/opencode/issues/41470)

**5. 自动压缩（auto-compaction）死循环（#30680）** — 16 评论
在全新空目录中仍持续自动压缩并消耗 Token，最终停止响应。与内存 Megathread 相关，属于核心稳定性问题。
[查看 Issue](https://github.com/anomalyco/opencode/issues/30680)

**6. [FEATURE]: 尊重 SKILL.md frontmatter 中的 disable-model-invocation（#34498）** — 16 评论 / 55 👍
希望 SKILL.md 支持禁用模型调用的元数据。55 👍 表明较高认可，属于对 Skills 能力的精细控制。
[查看 Issue](https://github.com/anomalyco/opencode/issues/34498)

**7. Bug Report: network error（#44528）** — 15 评论
Windows 10 上使用 Big Pickle 模型（ollama cloud）时突然出现网络错误，旧版本正常。批量传播的同类问题提示可能存在服务端或版本回归。
[查看 Issue](https://github.com/anomalyco/opencode/issues/44528)

**8. LLM 响应期间滚动查看历史被强制拉回底部（#29094）** — 7 评论
此前 #4196 已修复过的问题再次回归，多 Token 流式输出时阅读历史消息仍不可能。属于桌面端/TUI 的交互体验痛点。
[查看 Issue](https://github.com/anomalyco/opencode/issues/29094)

**9. OpenCode Go 服务频繁间歇性故障（#36889）** — 6 评论
`opencode.ai/zen/go/v1` 每天多次出现 HTTP 000/503/524，持续 6-12 分钟后恢复。对依赖 Go 服务的用户影响显著。
[查看 Issue](https://github.com/anomalyco/opencode/issues/36889)

**10. DeepSeek-v4-flash-free 模型缺失于 Zen provider 下拉框（#43805）** — 6 评论
模型已存在于 `/zen/v1/models` API 且配置文件可引用，但 UI 下拉框中不显示。模型列表同步 Bug。
[查看 Issue](https://github.com/anomalyco/opencode/issues/43805)

## 重要 PR 进展

**1. [contributor] docs(acp): 更新 Zed 自定义 agent 配置（#44658）** — 已合并
推荐通过 Zed 的 ACP Registry 安装 OpenCode，并将手动 `agent_servers` 设为回退方案。
[查看 PR](https://github.com/anomalyco/opencode/pull/44658)

**2. feat(cli): 新增可分享的 stats 命令（#43653）** — 开放中
新增终端原生的 `opencode stats` 活动卡片，支持模型、工具、成本三种表格模式；通过有界 SQLite 标量查询聚合，避免加载完整消息负载。
[查看 PR](https://github.com/anomalyco/opencode/pull/43653)

**3. [contributor] fix(tui): 加载分页会话历史（#44656）** — 已合并
TUI 滚动回退到最旧本地行时自动加载下一页服务端消息，并保持滚动锚点与导航连续性。
[查看 PR](https://github.com/anomalyco/opencode/pull/44656)

**4. feat(app): 上下文搜索行与 Figma 对齐（#44654）** — 已合并
将展开的 `Explored` 上下文组的 glob/grep 行视觉与 Figma 规范对齐，匹配数移入独立的 6px `fill-circle` 槽位。
[查看 PR](https://github.com/anomalyco/opencode/pull/44654)

**5. feat(core): 支持 AgentRouter provider（#44378）** — 开放中
为核心增加 AgentRouter 的原生处理（关闭 #41873），同时标记为 Bug fix 和 New feature。
[查看 PR](https://github.com/anomalyco/opencode/pull/44378)

**6. [contributor] fix(session-ui): 保持时间线消息顺序（#44652）** — 已合并
当助手错误或重试后跟随时间线通知时，保持时间顺序源序；并完整投影助手片段后再渲染结束通知。
[查看 PR](https://github.com/anomalyco/opencode/pull/44652)

**7. feat(app): 执行工具与 shell 处理对齐（#44642）** — 已合并
将 Code Mode 的 `execute` 工具渲染器与双色调 shell 处理（源于 #44368）对齐，移除触发器的控制台图标。
[查看 PR](https://github.com/anomalyco/opencode/pull/44642)

**8. [needs:compliance] fix(llm): 拒绝超大 Bedrock 事件流帧（#44649）** — 开放中
AWS 文档规定事件流消息上限 16 MiB，但帧前导声明 32 位长度时可声明至 4 GiB。此前无界等待导致 `appendChunk` 持续分配内存，现增加边界校验。
[查看 PR](https://github.com/anomalyco/opencode/pull/44649)

**9. [needs:compliance] fix(llm): 防护工具流状态中的 Object.prototype 键（#44648）** — 开放中
使用 `Object.hasOwn()` 拒绝 `toString`、`constructor` 等原型成员名作为流键，修复工具调用累加器的原型污染风险。
[查看 PR](https://github.com/anomalyco/opencode/pull/44648)

**10. [needs:compliance] fix(ci): 非默认分支回退正文扫描关闭关键字（#44650）** — 开放中
针对 PR 目标为非默认分支（如 `v2`）时，GraphQL `closingIssuesReferences` 恒为 0 的问题，回退到正文扫描避免误判 `needs:issue`。
[查看 PR](https://github.com/anomalyco/opencode/pull/44650)

另有两条值得关注：
- **docs(go): 添加 LongCat-2.0（#44636）** — 已合并，Go 模型列表更新。
- **docs: 添加 Eden AI 至 providers 列表（#43386）** — 开放中，文档补充新 Provider。

## 功能需求趋势

- **远程与桌面端集成**：SSH 远程连接（#7790）和高关注度的远程环境剪贴板修复（#41470）表明，用户在服务器/容器工作流中的体验是持续痛点。
- **TUI/Desktop 交互体验**：会话内查找（#4714）、流式响应期间阅读历史（#29094）、子代理独立视图（#37267）均涉及信息浏览与检索的可操作性。
- **模型与服务稳定性**：Go 服务间歇性故障（#36889）、网络错误（#44528）、DeepSeek 模型缺失（#43805）反映出对 Zen 服务及模型列表同步的可靠性依赖。
- **Skills 能力细化**：支持 `disable-model-invocation`（#34498）与技能配置合并策略（#33053）显示社区希望更精细地控制 Skill 行为。
- **配置与迁移一致性**：SQLite 迁移遗漏会话（#36178）、compaction variant 被忽略（#41578）、variant 中 limit 不生效（#44448）等配置相关缺陷集中出现。

## 开发者关注点

- **稳定性优先**：自动压缩死循环、SIGBUS 崩溃（#44643）、内存问题等从根本上影响日常可用性，是社区最迫切关注的痛点。
- **模型端到端一致性**：API 中存在但 UI 缺失的模型（#43805）、不同字段名的 reasoning 流被丢弃（#35283）等问题，说明模型接入层的兼容性测试有待加强。
- **配置语义明确性**：variant、limit 等配置项在多 agent 或嵌套场景下被忽略，开发者期望配置行为更可预测。
- **机器人贡献趋于常规化**：`opencode-agent[bot]` 已批量贡献文档与 TUI 修复，人工维护者更聚焦于 LLM 协议层（Bedrock 帧边界、工具流键防护）的健壮性加固。

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报 — 2026-08-24

## 今日速览

Pi 项目今日无新版本发布，社区讨论活跃度集中在两个方向：Windows 平台的使用体验（`#7547` 已积累 40 条评论，成为最热 Issue），以及上下文压缩（auto-compaction）机制在超过 100% 上下文窗口后才触发的问题（`#6879`，获 19 个 👍）。值得注意的合并动态包括新增 PowerShell 工具（`#8512`）和 llama.cpp 未加载模型展示（`#8535`），两者均为改善 Windows 端用户体验而提出。

## 社区热点 Issues

以下为评论数最多的 20 条中挑选的 10 条值得关注的 Issue：

**1. [Windows 使用体验集中讨论](https://github.com/earendil-works/pi/issues/7547)**（评论 40 | 👍 2）
这是 Windows 用户的集中反馈帖，作者列举了 Pi 在 Windows 上的多种运行方式，希望收集用户实际遇到的问题以便更有针对性地分配精力（修 bug、完善文档等）。Windows 生态开发者基数大，此帖很可能会影响项目的 Windows 支持优先级。

**2. [auto-compaction 超过 100% 上下文后才触发](https://github.com/earendil-works/pi/issues/6879)**（评论 21 | 👍 19）
在 gpt-5.6-sol 上的一个 agentic turn 跑了 2 小时，footer 显示超过压缩阈值并持续超过 100% 上下文窗口，但压缩直到 API 拒绝请求才发生。19 个 👍 表明这是大量用户遇到的高频痛点，直接影响长任务的稳定性。

**3. [grok-mermaid 迁移至 lovely-mermaid](https://github.com/earendil-works/pi/issues/8157)**（评论 10 | 👍 1）
grok-mermaid 是从 grok 构建中 1:1 移植的 mermaid 渲染器，几乎没有人工干预，继承了大量上游的边界情况和限制。社区提出迁移到更优秀的 lovely-mermaid 渲染方案。

**4. [npm search 未索引新发布的 pi-packages](https://github.com/earendil-works/pi/issues/7885)**（评论 8）
发布 `pi-affix-prompt`（含 `pi-package` 关键字和 `pi` manifest）后，`npm search` 返回为空，导致包从未出现在 pi.dev/packages 的 gallery 中（gallery 镜像 npm search，目前 49 个包）。从 8 月 4 日起就没有新包被收录。此问题已关闭。

**5. [openai-responses 缺少 anthropic 缓存支持，造成 2.5 倍成本开销](https://github.com/earendil-works/pi/issues/7995)**（评论 8）
OpenRouter 的 Luke Parke 基于 870 次基准测试提交：`openai-responses` 实现缺少 Anthropic 风格的 prompt-caching 支持，导致通过 OpenRouter 使用 Claude 时成本实测高出 2.5 倍。性能与成本直接挂钩，此问题已关闭。由代理代为提交，值得关注是否会跟进修复。

**6. [AgentSession 会话结算/续接与 assistant-tail 生命周期 bug](https://github.com/earendil-works/pi/issues/5886)**（评论 8 | 👍 4）
由 mitsuhiko 提交的 meta issue，汇总了 post-run 逻辑中反复出现的同类 bug，说明何时触发、为何这类问题涉及更大的修复范围。

**7. [工具批次中间注入自定义消息导致后续轮次出现 DeepSeek 400 错误](https://github.com/earendil-works/pi/issues/8166)**（评论 7）
扩展在 tool_calls 批次中间注入消息，打破了 `tool_calls→tool` 的邻接关系，导致每次后续轮次都报错：`Messages with role 'tool' must be a response to a preceding message with 'tool_calls'`。这是一个稳定可复现的 400 错误。

**8. [向扩展上下文暴露 ctx.navigateTree()](https://github.com/earendil-works/pi/issues/5932)**（评论 7 | 👍 2）
`navigateTree()` 存在于 `ExtensionCommandContext` 但不在普通事件/工具 `ExtensionContext` 中，作者正在自定义实现中需要此 API。建议将其暴露到 `ExtensionContext` 以方便更多扩展场景。

**9. [Compaction 摘要可在 token 上限处截断为半词](https://github.com/earendil-works/pi/issues/7048)**（评论 4 | 👍 1）
`generateSummary` 将摘要输出限制在 `min(0.8 * reserveTokens, model.maxTokens)`，但只在 `stopReason` 不匹配时才抛出异常——如果生成达到 token 上限（`stopReason='length'`），摘要可能保存在单词中间，造成截断内容持久化。这对后续续接会话的状态保真度有负面影响。

**10. [Windows 路径包含检查的分隔符不匹配问题](https://github.com/earendil-works/pi/issues/8441)**（评论 3）
v0.84.2 在 Windows 上所有带显式路径参数的工具都报 "Path outside repository" 错误，根因是 containment check 中分隔符不匹配。虽然此问题已被标记为已关闭，但它是 Windows 用户立即被阻塞的高频问题。

## 重要 PR 进展

以下为 PR 列表中挑选的 10 条重点关注：

**1. [新增可选 PowerShell 工具](https://github.com/earendil-works/pi/pull/8512)**（已合并）
mitsuhiko 提交：由于 git bash 在 Windows 上的路径处理问题（无论是 Unix 工具还是 Windows 工具都会被破坏），放弃继续修复 git bash，直接在 coding-agent 中新增可选的 PowerShell 工具。这对 Windows 用户是一个重要的体验改进方向。

**2. [bash-only 工具环境下保持 skills 可用](https://github.com/earendil-works/pi/pull/8552)**（开放）
xl0 提交，关闭 #8551，确保在仅有 bash 工具的环境中 skills 仍然可用。

**3. [TUI 编辑器光标跟随点击移动](https://github.com/earendil-works/pi/pull/8547)**（开放）
Panoplos 提交：将主按钮点击路由到聚焦的 TUI 组件，光标可跨换行移动到点击的 grapheme，同时保留编辑器 padding。这是该作者系列 UI 改进的一部分。

**4. [新增 Amazon Bedrock Mantle 支持](https://github.com/earendil-works/pi/pull/8302)**（开放，WIP）
cristinaponcela 提交，解决 #5363。Amazon 通过 Mantle（新 API 表面）添加了主要模型（GPT、openai.gpt-5.x），而 Pi 目前只支持 Converse，缺少 Mantle 支持。因等待 API key 权限进行 e2e 测试而保持 WIP。

**5. [升级 Mermaid 终端渲染](https://github.com/earendil-works/pi/pull/8158)**（开放）
xl0 提交，关闭 #8157 和 #7832，与上述 grok-mermaid 迁移到 lovely-mermaid 的 Issue 对应。

**6. [暴露未加载的 llama.cpp 预设](https://github.com/earendil-works/pi/pull/8479)**（已合并）
KaelWD 提交：作者使用 `llama-server --models-preset` 而非 `--models-dir`，希望预设始终可选择，在请求时按需加载。

**7. [移除 xAI Grok Build 的 reasoning effort 字段](https://github.com/earendil-works/pi/pull/8422)**（开放）
yearth 提交：xAI 拒绝含 `reasoning.effort` 的 `grok-build-0.1` 请求，Pi 在显式 reasoning level 和默认路径中都会发送该字段（可能为 `"none"`），导致 HTTP 400。

**8. [设置并发、配额错误重试与 provider 失败可见性修复](https://github.com/earendil-works/pi/pull/8543)**（已合并）
avion23 提交，修复 v0.84.2 中多会话长时间运行的五个缺陷，包括：设置陈旧快照合并、非原子写入、静默延迟错误；配额错误的可重试性；provider 失败的可见性；模型警告。

**9. [llama.cpp 在 /model 中也展示未加载模型](https://github.com/earendil-works/pi/pull/8535)**（已合并）
ryanabx 提交，关联 #8479。llama.cpp router 会暴露未加载模型，向其发送 prompt 时会自动加载。此 PR 使 `/model` 中也能看到这些模型，无需手动管理加载状态。

**10. [Build Remote Agent 手机配对](https://github.com/earendil-works/pi/pull/8538)**（已合并）
LinespottingPrivate 提交：新增 **Build Remote Agent** 作为桌面 agent 的配对设备，协议为 `gbr/1`。手机角色为旁观者 + 否决权，而非编排者。独立产品，与 xAI/SpaceX 无关。

另有一条值得留意的 PR：**#8548**（docs: 添加产品描述与验证材料，已关闭，作者注明"仅供代码分享，有意立刻关闭"），以及 **#8232**（"DONT MERGE: dev branch"，用于 CI 和评论）。

## 功能需求趋势

从近 24 小时活跃的 Issues 中可以提炼出以下社区关注的功能方向：

- **Windows 支持与体验优化**：`#7547` 收集 Windows 用户问题；`#8183` 文档化 Windows Terminal 的 `Ctrl+Shift+F` 快捷键冲突；新增 PowerShell 工具 PR（`#8512`）；`#8441` Windows 路径校验问题。Windows 是当前社区最活跃的关注方向。
- **上下文压缩（Compaction）机制改进**：`#6879`（压缩直到 API 拒绝才触发）、`#8452`（改进默认压缩 prompt 以保留连续状态）和 `#7048`（摘要截断在半词处）共同指向压缩流程在真实长会话场景下的可靠性问题。
- **新模型/新服务接入**：`#8157`+`#8158`（Mermaid 渲染升级）、`#8302`（Amazon Bedrock Mantle）、`#8206`（opencode-go 模型 catalog 修复 qwen3.6-plus/minimax-m2.7 路由）、`#8422`（xAI Grok Build reasoning 字段修复）。
- **TUI 可用性与可交互性增强**：`#7683`（组件级鼠标事件）、`#8547`（编辑器光标点击定位）、`#8291`（可配置编辑器 prompt 前缀）、`#8434`（v0.84.2 TUI 无响应）。
- **扩展 API 能力暴露**：`#5932`（`ctx.navigateTree()` 暴露建议）、`#7607`（per-tool 跳过参数校验的开关）。

## 开发者关注点

- **上下文压缩的可靠性**：压缩在 `>100%` 后才触发、摘要可能截断在半词、冷恢复会重放已被实时恢复移除的溢出 assistant 消息（`#7724`）——长会话场景下压缩链条的多个环节均存在已知缺陷，直接影响生产可用性。
- **Windows 路径与工具链**：路径分隔符不匹配导致 "Path outside repository"（`#8441`）；git bash 路径处理导致维护者选择直接放弃修复、改为提供 PowerShell 工具（`#8512`）。Windows 生态是明确的待改进方向。
- **成本问题**：openai-responses 缺少 anthropic 缓存支持导致 Claude 成本 2.5 倍（`#7995`）——API 兼容层实现不仅影响功能，也直接作用于用户的经济成本。
- **模型 catalog 正确性**：`#8206` 指出了生成的 opencode-go catalog 将 qwen3.6-plus 和 minimax-m2.7 路由到了 `/v1/messages` 并不服务的 openai-completions 端点——catalog 数据与端点表格不一致造成实际请求 400。
- **TUI 稳定性回归**：`#8434` 报告 v0.84.2 在 Ubuntu 24.04 上 TUI 不再响应命令（/login 仅回显），VS Code 终端内输入显示为乱码——属于高影响回归案例。
- **超时设置不可配置**：`#3627`（已关闭）指出 openai-* provider 无法配置 timeout 和 retry，10 分钟默认值使本地推理场景不可用。虽然关闭，但开放了更广泛的配置需求讨论。


</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报 — 2026-08-24

## 1. 今日速览

今日发布了 v0.22.0-nightly.20260824 夜间版本，主要修复 Web Shell 打开时的 workspace 传递问题，并同步更新 CUA Driver 预编译二进制。社区讨论焦点集中在配置架构重构（Config 派生边界集中化）、模型切换时 token 计数串路由的缺陷修复，以及 Multimodal 接入实验的新进展。多条高热度 issue 已闭环，团队在 ACP 多会话隔离与记忆扫描不对称问题上持续收敛。

## 2. 版本发布

**v0.22.0-nightly.20260824.3a1f86d805**

- **修复（Web Shell）**：从 overview 面板打开会话时正确传递 workspace cwd（PR #9730）
- **基础设施**：gh-attach-assets 资产上传；**cua-driver-rs v0.20.0** 预编译二进制同步（macOS 已签名/公证；Linux、Windows x86_64 + arm64 未签名，glibc 2.31 下限）

## 3. 社区热点 Issues（Top 10）

**#4514** — tracking(serve): daemon capability gaps & prioritized backlog（评论 16 | 👍 0）
`qwen serve` HTTP/SSE 接口的真实能力缺口与优先级积压追踪，远程客户端可透传 ACP 兼容斜杠命令。持续三个月仍为核心讨论对象，说明 serve 功能仍是演进重头。
[查看 Issue](https://github.com/QwenLM/qwen-code/issues/4514)

**#5975** — [API Error: No stream activity for 120000ms after 19 chunks（评论 12 | 👍 1）★优先级 P2**
v0.19.3 升级后流式输出高频中断（"Thought for 2s" 后无输出），影响真实编码体验，已有 1 个 👍，欢迎 PR 修复。
[查看 Issue](https://github.com/QwenLM/qwen-code/issues/5975)

**#4063** — refactor: core + cli 架构 Review — 12 项结构性问题清单（评论 9 | 👍 1）
核心类型系统被 `@google/genai` 绑架等 14 项结构性问题（P0 级），持续活跃两个多月，是架构演进的重要参考。
[查看 Issue](https://github.com/QwenLM/qwen-code/issues/4063)

**#9276** — Team members cannot send ordinary messages to their leader（评论 7 | 👍 0）★已关闭
团队成员无法向 leader 发送普通消息，被误判为 shutdown 请求。多 Agent 协作流程中的关键通信缺陷，已修复。
[查看 Issue](https://github.com/QwenLM/qwen-code/issues/9276)

**#9459** — /effort max bricks the session on OpenAI-compatible providers（评论 7 | 👍 0）★优先级 P1
`/effort max` 在 OpenAI 兼容提供商上导致会话持续 400 错误，`clampReasoningEffort()` 未截断该值，每次后续请求都失败。ready-for-agent 状态。
[查看 Issue](https://github.com/QwenLM/qwen-code/issues/9459)

**#8083** — design(core): make derived Config context ownership explicit（评论 6 | 👍 0）★优先级 P1
用显式所有权替代临时 `Object.create(base)` 原型委托，是今日多项 Config 重构 PR 的设计源头。
[查看 Issue](https://github.com/QwenLM/qwen-code/issues/8083)

**#9146** — refactor(core,cli): make utils/ a leaf layer（评论 5 | 👍 0）★已关闭
107 个向上导入使目录图循环，`utils/` 需成为叶子层。依赖治理方向明确，已闭环。
[查看 Issue](https://github.com/QwenLM/qwen-code/issues/9146)

**#8662** — Migrate TUI rendering layer from ink to OpenTUI（评论 4 | 👍 0）
当前 ink 7 + React 19 + 1037 行补丁方案产生结构性渲染问题，OpenTUI 提供无闪烁与一等鼠标支持。属 roadmap/terminal-ux，值得关注 UI 层的开发者留意。
[查看 Issue](https://github.com/QwenLM/qwen-code/issues/8662)

**#9378** — Recall/forget scan-cap asymmetry（评论 3 | 👍 0）★已关闭
超过 200 文档上限的文档可被召回但永远无法被遗忘，记忆系统不对称缺陷已修复。
[查看 Issue](https://github.com/QwenLM/qwen-code/issues/9378)

**#9911** — Restore VS Code message edit and rewind after the WebShell cutover（评论 2 | 👍 0）
WebShell 切换后未保留 VS Code 逐消息编辑/回退交互能力，IDE 集成体验需要补齐。
[查看 Issue](https://github.com/QwenLM/qwen-code/issues/9911)

## 4. 重要 PR 进展（Top 10）

**#9920** — refactor(core): centralize scoped config profiles（yiliang114）
将 memory、remember、skill-review 的 Config 覆盖层迁移到共享派生边界。直接响应 #8083 的架构诉求，是今日核心重构主线。
[查看 PR](https://github.com/QwenLM/qwen-code/pull/9920)

**#9915** — refactor(core): centralize worktree config derivation（yiliang114）
两个 worktree 启动路径统一走共享派生 Config 边界，隔离 worktree 与调用方 worktree 的路径/上下文绑定行为收敛。
[查看 PR](https://github.com/QwenLM/qwen-code/pull/9915)

**#9811** — refactor(vscode-ide-companion): complete the WebShell UI cutover（yiliang114）
VS Code 插件可见 UI 从旧 WebUI 完整切换到 Web Shell，保留 ACP 与 VS Code API 作为宿主边界。与 #9911 形成"先迁移、后补能力"的节奏。
[查看 PR](https://github.com/QwenLM/qwen-code/pull/9811)

**#9914** — fix(web-shell): reduce streaming thought render jank（ytahdn）
将流式 assistant/thinking 文本更新移出顶层渲染路径，同时在卸载 compact tool/thinking 详情时消除卡顿，提升交互流畅度。
[查看 PR](https://github.com/QwenLM/qwen-code/pull/9914)

**#9692** — fix(ui): suppress duplicate identical TodoList panels（PratikWayase）
为 `todo_write` 工具添加无操作检测，同一回合内相同 todo 快照跳过文件写入、hook 触发与 TUI 面板渲染。
[查看 PR](https://github.com/QwenLM/qwen-code/pull/9692)

**#9921** — fix(tools): propagate ask_user_question cancellation reason（AaronZ345）
存储并回传 `ask_user_question` 取消原因，附带回归测试。修复用户确认取消后上层拿不到原因的问题。
[查看 PR](https://github.com/QwenLM/qwen-code/pull/9921)

**#9919** — feat(review): add a --topology minimal single-pass A/B arm（wenshao）
`/review` 技能新增"minimal"拓扑：在 orchestrator 上下文内以单次资深工程师审查替换多代理流水线，可做 A/B 对比。
[查看 PR](https://github.com/QwenLM/qwen-code/pull/9919)

**#9626** — fix(serve): Repair persisted session lifecycle（doudouOUC）
delete/archive/unarchive 在文件为空、head 损坏或遗留孤儿会话时仍能维护持久化 transcript，修复 serve 会话生命周期管理。
[查看 PR](https://github.com/QwenLM/qwen-code/pull/9626)

**#9392** — fix(serve): let channel workers reach TLS-enabled daemons（qqqys）
配置 `--tls-cert/--tls-key` 时，channel worker 通过 `https://` 回环 URL 连接 daemon，替代硬编码的 `http://`，解决 TLS 模式下 worker 无法触达的问题。
[查看 PR](https://github.com/QwenLM/qwen-code/pull/9392)

**#9856** — feat(computer-use): replace built-in tools with bundled skill（LaZzyMan）
移除内置 Computer Use 工具集（设置、下载器、权限引导、schema 与直接运行时），改为单一捆绑 skill，首次使用时自动配置。简化架构、增强可维护性。
[查看 PR](https://github.com/QwenLM/qwen-code/pull/9856)

## 5. 功能需求趋势

- **配置/架构现代化**：今日最大主线 — Config 派生边界集中化（#8083，#9920，#9915）、utils/ 叶子层治理（#9146）。社区对包结构循环依赖与类型系统外部绑定的容忍度在降低。
- **多会话/多路由正确性**：#9454 模型切换 token 串路由、#9529 会话 token 缓存路由作用域、#9534 ACP 日志跨界 — 多会话/multiplexed 场景下的隔离问题集中爆发。
- **Serve/daemon 能力补全**：#4514 持续三个月的 backlog 追踪、#9626 会话生命周期修复、#9392 TLS 支持，远程服务化是明确演进方向。
- **Review 工具链升级**：#9919 minimal 拓扑、#9273 capture-tui 像素级证据、#9340 审查形态判断 — 代码审查的子代理拓扑与可验证性在快速迭代。
- **多模态（Omni）接入**：#8197 实验总纲持续推进，新交付形态转为独立 MCP server（#9333），Community 对多模态接入保持关注。

## 6. 开发者关注点

- **高频痛点**：#5975 流式中断（120s 无活动即报错）是当前体验影响最大的问题，升级 v0.19.3 后集中出现；#9459 `/effort max` 可"击穿"整个会话，修复优先级高（P1）。
- **架构债务**：#4063 的 14 项结构性问题与 #9146、#9145 的代码重复/循环依赖，说明核心包在快速发展后进入治理窗口期，社区（尤其 yiliang114 等高活跃贡献者）正在系统性清偿。
- **IDE 集成体验**：#9911 明确承认 WebShell 切换牺牲了 VS Code 消息编辑/回退能力，"先切架构、后补能力"的策略值得用户关注。
- **测试可靠性**：#9909 的 run-ledger 测试在 root 下必然失败（chmod 0o000 对 root 无效），暴露了测试环境权限假设问题，对贡献者友好度有影响。

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI 社区动态日报 — 2026-08-24

## 一、今日速览

今日社区核心动向是 **v0.9.12 集成周期密集推进**：维护者 Hmbown 连续提交了多项针对代码库健康度的审计议题（大文件拆分、死代码清理、provider 中立性检查），同时 `M-Maciej` 主导的"监督式运行栈"（lifecycle outbox、control socket、/relaunch 命令）进入最终合入阶段。此外，**品牌迁移已实质完成**——原 `deepseek-tui` npm 包已废弃，产品正式更名 CodeWhale，但 Issue 仓库仍沿用旧名。今日另有多个历史 Issue 被集中关闭，显示维护团队正在做发布前的收尾清理。

## 二、版本发布

**v0.9.11**（过去 24 小时内发布的唯一版本）

> 发布说明要点：正式确认产品品牌迁移——**CodeWhale** 为 Shannon Labs 的公开产品名，`codewhale` 命令、npm 包名及发布资产保持小写技术标识。旧版 npm 包 `deepseek-tui` 已弃用且不再发布新版本。从 v0.8.x 旧版 `deepseek` / `d...`（原文截断）迁移的用户需注意命令变更。

## 三、社区热点 Issues（精选 10 条）

1. **[#5588] Provider 中立性：18 处 DeepSeek 专属门控应改为 provider-neutral**（OPEN，评论 4）
   维护者 Hmbown 对全部生产代码做了 `deepseek` 出现次数的全量审计（279 个文件、2281 行），识别出 18 处行为被 DeepSeek 门控但概念上应通用化的代码路径。**标志着产品从单一 DeepSeek 绑定走向多 provider 支持的战略转型**，对使用非 DeepSeek 后端的用户影响重大。
   [链接](https://github.com/Hmbown/CodeWhale/issues/5588)

2. **[#5586] 拆分巨型文件：lib.rs（18.7k 行）、config.rs（12.3k）、client.rs（11.1k）、runtime_threads.rs（9.3k）**（OPEN，评论 2）
   用户明确要求 v0.9.12 清理通道处理 10k+ 行的大文件。维护者公布了精确的行数统计，`crates/tui/src/lib.rs` 已达 18747 行。**代码可维护性已成为社区核心诉求**。
   [链接](https://github.com/Hmbown/CodeWhale/issues/5586)

3. **[#5587] 死代码清理阶段 2-4：75 个仅测试用的标记、约 242 个过期 allow**（OPEN，评论 2）
   继续已审计的清理工作（第一阶段已落地，删除 8 个确证死代码项）。对 `crates/tui/src` 中全部 379 个 `allow(dead_code)` 进行了全工作区引用分类。与 #5586 共同反映维护者正在系统性改善代码库健康度。
   [链接](https://github.com/Hmbown/CodeWhale/issues/5587)

4. **[#1004] /dryrun 命令：预览即将发送的 chat completion 请求而不实际发送**（CLOSED，评论 10，今日关闭）
   针对 DeepSeek V4 Pro 长轮次调试痛点——超长 system prompt、大量缓存 repo 文件、工具定义、@提及、多步思考——开发者无法在发送前看到实际请求内容。评论数全场最高，社区需求强烈，现已关闭说明已解决。
   [链接](https://github.com/Hmbown/CodeWhale/issues/1004)

5. **[#4959] 提议 'stop' 命令**（CLOSED，评论 9，今日关闭）
   在 YOLO 模式或深度自主工作流中，文本命令（如 `+ st...`）无法有效打断模型。提议新增 `/stop` 命令及运行时 STOP 词拦截机制，用于机械性阻断工具调用。今日关闭，大概率已实现。
   [链接](https://github.com/Hmbown/CodeWhale/issues/4959)

6. **[#5583] Workflow responseSchema 失败需要有限修复和原始输出收据**（OPEN，评论 3）
   workflow 任务使用 `responseSchema` 时，子任务返回散文或非法 JSON 会导致整个运行失败。CodeWhale 能正确暴露 schema 失败而非静默返回 null，但**丢弃了原始输出**，用户无法诊断问题根源。
   [链接](https://github.com/Hmbown/CodeWhale/issues/5583)

7. **[#5582] Workflow owner 快照将 Degraded 折叠为 Completed**（OPEN，评论 3）
   当前 `main` 分支将降级（Degraded）的 workflow owner 显示为已完成，rust 代码片段直指 `WorkflowRunStatus::Completed | WorkflowRunStatus::Degraded` 被合并处理。状态可视化不准确，影响运维判断。
   [链接](https://github.com/Hmbown/CodeWhale/issues/5582)

8. **[#2492] 不具备跨会话记忆**（CLOSED，评论 6，今日关闭）
   用户反馈：每次重启丢失上一轮会话记忆；强制写入记忆后重启也不会主动读取。该 Issue 今日关闭，说明跨会话记忆能力已在近期版本落地。
   [链接](https://github.com/Hmbown/CodeWhale/issues/2492)

9. **[#4326] 取消 32-worker 风暴后 RSS 不下降，需解释并限制内存**（OPEN，评论 6）
   32-worker PTY 基准测试证明高扇出足够响应，但取消后单次 RSS 采样反而继续增长而非回落。需要区分分配器高水位保留与实际内存占用。**高并发场景下的内存管理是性能关注重点**。
   [链接](https://github.com/Hmbown/CodeWhale/issues/4326)

10. **[#1409] MCP 验证：能否加入 OAuth 2.1 协议支持？**（CLOSED，评论 2，👍 1，今日关闭）
    用户添加 tinyfish 搜索引擎 MCP 服务时发现需要 OAuth 2.1 验证，而当前项目仅支持 API 密钥方式。详细对比了两种认证模式。今日关闭说明可能已纳入路线图。
    [链接](https://github.com/Hmbown/CodeWhale/issues/1409)

**其他值得关注的今日动态：**

- **[#1482]** NVIDIA NIM 调用返回 404 错误（CLOSED，评论 7）——第三方推理服务兼容问题已解决
  [链接](https://github.com/Hmbown/CodeWhale/issues/1482)
- **[#4029]** 社区提问是否有计划打造类似 Reasonix 的界面（CLOSED，评论 5）
  [链接](https://github.com/Hmbown/CodeWhale/issues/4029)
- **[#5534]** Goal-continuation 节奏在 turn 内分发路径上被绕过（CLOSED，评论 2）
  [链接](https://github.com/Hmbown/CodeWhale/issues/5534)
- **[#5290]** 非英语路由上可点击控件失效（OPEN，评论 3）——本地化 UX 问题
  [链接](https://github.com/Hmbown/CodeWhale/issues/5290)

## 四、重要 PR 进展（精选 10 条）

1. **[#5576] v0.9.12 集成分支：must-fix + UX 修复（进行中）**（OPEN）
   维护者主推的 v0.9.12 发布集成分支，**已完成发布阻断项的代码冻结**，剩余工作为版本号提升和 changelog/RC 门禁（tracker: #5573），明确"门禁未绿前不合并"。
   [链接](https://github.com/Hmbown/CodeWhale/pull/5576)

2. **[#5592] lifecycle outbox - part b**（OPEN）
   新增可选的 `[lifecycle_outbox]` 配置表，启用后每条生命周期事件（turn_start/turn_end 等）追加一行 JSONL 到指定文件，**同时覆盖交互式 TUI 会话和 headless `codewhale exec` 运行**，无需 per-hook shell 配置。
   [链接](https://github.com/Hmbown/CodeWhale/pull/5592)

3. **[#5594] control socket - part d（最终）**（OPEN）
   监督式运行的最终控制面：可选的 Unix-only、换行分隔 JSON-RPC socket，每会话一个。默认关闭（`enabled = false`），行为不变。
   [链接](https://github.com/Hmbown/CodeWhale/pull/5594)

4. **[#5593] /relaunch 命令 - part c**（OPEN）
   解决 `/update` 安装新二进制后需要用户手动重启的问题：`/relaunch` 在持久化行为上等同 `/exit`，但将自动切换会话到当前二进制，一步到位完成更新。
   [链接](https://github.com/Hmbown/CodeWhale/pull/5593)

5. **[#5591] Goal-continuation 节奏修复 - part a**（CLOSED）
   修复 #5534：`[goal] continuation_delay_seconds` 只接入了两条 goal-continuation 分发路径中的一条。turn 内分发钩子（`goal_continuation_message_if_needed`）绕过静默期，导致恢复/CLI 会话瞬间连发 pass。此 PR 修复了该路径。
   [链接](https://github.com/Hmbown/CodeWhale/pull/5591)

6. **[#5599] 增加能力门控的 cursor accent（CLOSED）**
   实现 #5554 的已批准范围：TUI 会话现在仅在终端明确识别为支持且非 reduced-motion/纯文本模式时，应用微妙的 OSC 12 光标强调色。
   [链接](https://github.com/Hmbown/CodeWhale/pull/5599)

7. **[#5598] CI：将 credit 检查限定到 PR 提交（CLOSED）**
   修复 harvested-credit 门控误报：原先比较 PR 创建时的 `base.sha` 与 GitHub 合成 merge checkout，`main` 推进后该范围会重查不相关的合并提交，导致纯文档 PR #5565 被历史 credit 问题误阻塞。
   [链接](https://github.com/Hmbown/CodeWhale/pull/5598)

8. **[#5590] CI：在 PR 上运行 Linux workspace 测试（CLOSED）**
   解决 #5547 的 CI 覆盖缺口：重型 PR 现在直接在 GitHub Ubuntu 矩阵上运行已有的 Linux workspace 门禁（`cargo nextest run --workspace --all-features` 等），不依赖分支前缀，修复了 ubuntu 任务仅为占位符的问题。
   [链接](https://github.com/Hmbown/CodeWhale/pull/5590)

9. **[#5584] 修复：子代理审批收据持久化（OPEN）**
   关闭 #5543：子代理审批提示可能仅凭内存决策批准工具调用，而无持久化的 Asked 或终止证据。此 PR 在子运行时继承会话审批收据存储，并在批准前提交 Asked 记录。
   [链接](https://github.com/Hmbown/CodeWhale/pull/5584)

10. **[#5535] 监督式操作栈：lifecycle outbox、/relaunch、per-session control socket 和 goal-continuation 静默期修复**（CLOSED）
    一个 PR 包含五个提交域变更，全部围绕同一接缝——长生命周期 codewhale 会话的机器可读监督：lifecycle 事件 outbox（可选 JSONL + webhook）、turn_start/turn_end/turn_... 事件、/relaunch 命令等。**今日 part b/c/d 系列 PR 是该工作的拆分延续**。
    [链接](https://github.com/Hmbown/CodeWhale/pull/5535)

## 五、功能需求趋势

从今日全部 Issues 中提炼出以下社区关注方向：

| 趋势方向 | 代表性 Issue | 热度信号 |
|---------|------------|---------|
| **多 Provider 支持（去 DeepSeek 绑定）** | #5588：18 处 DeepSeek 专属门控审计 | 维护者主导，战略级方向 |
| **监督式/自动化运维** | #5535 / #5592 / #5593 / #5594：lifecycle outbox、control socket、/relaunch | 同一个开发者在同一接缝上连续提交 4 个 PR |
| **代码库健康度/可维护性** | #5586（巨型文件拆分）、#5587（死代码清理） | 维护者昨今两日连续提交 |
| **Workflow 可靠性与可诊断性** | #5583（responseSchema 失败需原始输出收据）、#5582（Degraded 状态折叠） | 同一用户 jbovard2016 连续提交两个 workflow 相关 Issue |
| **CI 基础设施可靠性** | #5547 / #5590 / #5598 | 社区贡献者参与修复 CI 盲区 |
| **内存与性能优化** | #4326：32-worker 取消后 RSS 不回落 | 高扇出场景内存管理 |

## 六、开发者关注点（痛点 / 高频需求）

1. **发布稳定性与 CI 可信度**：多个 Issue（#5547、#5598）暴露了 CI 门控在分支策略（非镜像分支不跑测试）和 credit 检查范围上的实际缺陷，导致 PR 被误阻塞或测试漏跑。社区贡献者 wuisabel-gif 主动修复了这两个问题。

2. **会话记忆与状态持久化**：#2492（跨会话记忆失效）虽是老 Issue 但今日关闭，配套 #5584（子代理审批收据持久化）仍在进行中，说明**持久化层正在系统性加强**。

3. **工作流（Workflow）失败诊断困难**：#5583 和 #5582 连续暴露两个问题——schema 失败时丢弃原始输出、Degraded 状态被错误展示为 Completed。运维场景下这两者都会直接误导开发者。

4. **代码维护成本上升**：#5586 中用户明确指出巨型文件"持续造成痛苦"（keep causing pain），18747 行的 lib.rs 对贡献者形成实质门槛。这解释了为何维护者近期密集投入拆分与死代码清理。

5. **终端体验细节优化**：#5554（OSC 12 光标强调色）虽小但今日已通过 PR #5599 落地，体现维护者对终端沉浸感的关注。

6. **MCP 生态兼容性**：#1409（OAuth 2.1 支持）今天关闭，加上 #1482（NVIDIA NIM 404）也关闭，显示**第三方服务接入正在快速补齐**，但 API 密钥之外的认证方式仍可能是未来需求。

7. **品牌迁移过渡**：v0.9.11 发布说明明确了 `deepseek-tui` 已废弃，社区需要时间适应 `codewhale` 命令和包名。仓库名称（Hmbown/DeepSeek-TUI）与实际产品名（CodeWhale）不一致，短期内可能造成困惑。

</details>

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar) 自动生成。*