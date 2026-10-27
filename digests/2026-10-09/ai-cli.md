# AI CLI 工具社区动态日报 2026-10-09

> 生成时间: 2026-10-10 02:27 UTC | 覆盖工具: 9 个

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

# AI CLI 工具生态横向对比分析报告（2026-10-09）

## 1. 生态全景

当前 AI CLI 工具赛道已从"能否跑通"进入"可靠性 + 可观测性 + 平台一致性"的深水区，八个活跃项目中除 Kimi Code CLI 外均有实质动态。**沙箱/权限模型的不一致**与**静默失败（silent failure）**是横跨所有工具的共性痛点，几乎每个社区都在报告"状态显示正常但实际未生效"类问题。竞争维度正从模型能力转向工程成熟度：Managed Agent 架构（Qwen Code）、MCP 鉴权与工具注册（Copilot CLI、OpenCode、Qwen Code）、跨端会话接续（Claude Code、Codex）成为新一轮投入焦点。Windows 平台问题在 Codex、Pi、DeepSeek TUI 中集中爆发，成为最大的用户侧短板。企业级诉求（HIPAA 配置、企业策略解析、自托管网关）开始显性化，标志工具正在从个人开发者向组织采购场景渗透。

---

## 2. 各工具活跃度对比

| 工具 | Release（24h） | 热点 Issue 数 | 热点 PR 数 | 社区活跃特征 |
|---|---|---|---|---|
| **Claude Code** | v2.1.296 | 10（#91870 达 248 评论） | 7（多为 hookify/安全修复） | 扩展性提案高热，长尾 TUI bug 持续 |
| **OpenAI Codex** | rust-v0.162.1 + 0.163.0-alpha.5/4 | 10（Windows 簇密集） | 10（copyberry[bot] 主导） | Windows 回归集中，PR 密度高 |
| **Gemini CLI** | v0.65.0-nightly + v0.64.0-preview.1 | 10（agent 子系统为主） | 10（稳定性修复） | agent 可靠性缺陷密集 |
| **GitHub Copilot CLI** | 6 个版本（v1.0.95→v1.0.96-2） | 10（沙箱/MCP 授权） | **仅 2**（数据如实呈现） | 发版最频繁，PR 侧偏冷 |
| **OpenCode** | 无 | 10（大量历史 Issue 集中关闭） | 10（MCP/权限/Effect 升级） | 维护动作密集，收口期 |
| **Pi** | 无 | 10（Windows 调查帖 79 评论） | 10（钩子语义 + 平台修复） | 社区讨论度最高之一 |
| **Qwen Code** | v0.25.1-preview.1 + nightly | 10（Managed Agent 主线） | 12（架构级 PR 密集） | 架构推进最系统 |
| **DeepSeek TUI** | 无 | 10（+多维护者自报） | 10（含 RS-8~RS-14 拆分） | 维护者主导重构 |
| **Kimi Code CLI** | 无 | 0 | 0 | 过去 24h 无活动 |

**说明**：各日报均按"热点精选 10 条"口径呈现，故 Issue 数列为采样上限，不代表总量差异；PR 数列反映实际更新量，Copilot CLI（2 条）与 Claude Code/Codex（7-12 条）差距显著。Release 频率上 Copilot CLI 单日 6 版居首，Claude Code/Gemini/Qwen/Codex 保持稳定迭代节奏。

---

## 3. 共同关注的功能方向

**① 沙箱与权限模型一致性（最密集议题簇）**
- Copilot CLI：#5076（`/add-dir` 未入白名单）、#4516（JVM 子进程不遵守路径授权）、#5098（策略路径导致 hook 停止）——体现"原生 shell 生效、子进程失效"的言行不一。
- Claude Code：#29214（Remote Control 忽略 `--dangerously-skip-permissions`）、#99865 权限语义跨端不一致。
- OpenCode：#51241（权限 deny 导致免费模型直接失败）。
- Pi、Qwen Code 亦有 sandbox/权限相关条目。

**② MCP 生态的状态失真与鉴权持久化**
- OpenCode：#54226（401 后仍显示 Connected，无 needs_auth 信号）。
- Qwen Code：#13796（`qwen mcp list` 显示 Connected 但工具整个会话未注册）、#13632（动态工具列表刷新）。
- Copilot CLI：#2536（Atlassian MCP 每次重新授权）、#5101（`--add-github-mcp-tool` 致全部 MCP 工具失效）。
- DeepSeek TUI：#6866（MCP 启动失败时模型收不到信号，工具静默消失）。

**③ 静默失败与可观测性不足**
- Claude Code：长输入静默截断（#74004/#90910/#92118 跨三平台）。
- Pi：RPC 提示被确认后丢弃（#10606）、bash 输出截断不上报（#10165）。
- Qwen Code：daemon 内一个 Session 静默卡死其他 Session（#13800）。
- 各工具普遍诉求：错误应显式上报而非"工具消失"或"状态正常"。

**④ 会话连续性、压缩与长任务生命周期**
- Claude Code：#98299（触顶杀死 workflow agents 而非暂停）、#94063（prompt 持久化与 resume）。
- DeepSeek TUI：#6721（emergency compaction 截断任务）、#6842（会话日志内存无上限）。
- OpenCode：#41453（持久化 session daemon + 零工具调用记忆召回）。
- Qwen Code：Session 持久化生命周期、writer fencing（#12952）。

**⑤ 跨平台（尤其 Windows）适配**
- Codex：Windows 沙箱 os error 32、"setup refresh had errors"、node_repl.exe 占用构成系统性故障簇。
- Pi：#7547（Windows 使用调查 79 评论）、#6300（输入逐字符换行重绘）、#10645（编译版图片附件失效）。
- Copilot CLI：#5094、#3535（Windows 桌面版/Ramdisk）。

**⑥ 模型与上下文能力接入**
- Copilot CLI：#3355（请求放开 Claude Opus 4.6 的 1M 上下文，当前限 200K）。
- Pi：#10157（AI Studio 丢 Gemini 思考签名）、#8643（Bedrock 图片处理）。
- Gemini CLI：#28800（Code Assist Standard 模型可见性）。

**⑦ Agent 自治性与状态语义**
- Gemini CLI：#22323（子代理中断误报 success）、#21409（generalist agent 挂起）、#21968（不主动用 skills）。
- Claude Code：#100813（主代理收不到 skills 列表）。

---

## 4. 差异化定位分析

| 工具 | 功能侧重 | 目标用户 | 技术路线特征 |
|---|---|---|---|
| **Claude Code** | 扩展性（hooks/plugins）、子代理、企业管控 | 专业开发者 + 企业组织 | 强调插件生态与网关策略；HIPAA 配置示例显示向合规市场渗透；TUI 历史包袱较多 |
| **OpenAI Codex** | Rust 实现、多平台（桌面/VS Code/Chrome）、Remote Control | 全平台开发者 | 以 rust-v 版本线迭代，PR 高度自动化（copyberry[bot]）；Windows 沙箱为薄弱环节 |
| **Gemini CLI** | agent 子系统、沙箱执行安全、AST 感知工具 | Google 生态开发者 | 架构方向性提案活跃（零依赖 OS 沙箱 #19873、AST 读取 #22745）；nightly + preview 双线 |
| **Copilot CLI** | 沙箱凭据注入、权限决策可溯源、企业策略 | GitHub 企业用户 | 发版极高频（单日 6 版），强调合规与可追溯（Timeline 决策溯源）；PR 贡献面窄 |
| **OpenCode** | MCP 集成、SDK/服务端、多 provider | SDK 集成方 + 第三方前端 | 服务端可靠性议题多（SSE/ACP 超时）；Effect 运行时依赖升级是当前阻碍 |
| **Pi** | 协议扩展钩子（hooks）、RPC/SDK 嵌入 | 自建宿主/扩展开发者 | 钩子语义一致性为核心（before_provider_request 等）；pi.dev 配置 schema 标准化 |
| **Qwen Code** | Managed Agent 平台化、Kubernetes runtime | 平台级/企业部署方 | 架构最系统：双路径设计、Session 契约、跨平台交付门禁；Issue 生命周期偏长 |
| **DeepSeek TUI** | Rust crate 拆分、TUI 性能、本地化 | 性能敏感 + 中文社区 | 维护者主导结构性重构（RS-8~RS-14）；社区号召汉化组，代码贡献面偏窄 |

---

## 5. 社区热度与成熟度

**社区热度梯队**
- **第一梯队（讨论密度最高）**：Claude Code（#91870 单一提案 248 评论）、Pi（#7547 Windows 调查 79 评论）、Qwen Code（#12380 架构提案 51 评论）——三者均存在"旗帜性议题"驱动社区聚焦。
- **第二梯队（问题密集但分散）**：Codex（多 Issue 60+ 评论但无单一焦点）、Gemini CLI（agent 缺陷簇）、Copilot CLI（Issue 讨论活跃但 PR 冷清）。
- **收口/低活动**：OpenCode（大量历史 Issue 集中关闭，处于维护收口期）、Kimi Code CLI（零活动）。

**成熟度判断**
- **快速迭代期**：Copilot CLI（单日 6 版，但 PR 仅 2 条，发版快而外部贡献少）、Codex（alpha 密集，回归问题敏感）、Qwen Code（Stage D-H 分阶段交付，架构剧烈演进）。
- **稳定迭代期**：Claude Code、Gemini CLI（nightly/preview 双线，补丁为主）。
- **架构重构期**：DeepSeek TUI（维护者主导 crate 拆分，功能性 PR 集中在少数人）、OpenCode（Effect 4.0.1 升级受阻）。
- **回归敏感度普遍偏高**：Codex（0.162.0-alpha.2 沙箱、0.153 Remote Control）、Claude Code（#73338 Desktop 回归）、Copilot CLI 均出现明确标注版本回归的问题，说明版本间兼容性验证是行业共性短板。

---

## 6. 值得关注的趋势信号

**信号一：可观测性正成为一等公民需求。**
Copilot CLI 的 Timeline 权限决策溯源（v1.0.96-0）、OpenCode 的 MCP needs_auth 信号修复、Pi 要求钩子在所有代码路径触发——社区不再满足于"能跑"，而是要求"状态可信、决策可查、失败可归因"。**对开发者参考**：在自建 agent/CLI 时，应把"失败显式上报"和"状态与实际一致性"作为设计前提，而非事后补丁。

**信号二：MCP 已成为集成标配，但会话管理是公认短板。**
四个以上工具同日报告 MCP 状态失真或鉴权问题（OpenCode 401 不触发重鉴权、Qwen Code 显示 Connected 却未注册、Copilot CLI 重复授权、DeepSeek TUI 静默消失）。**对开发者参考**：接入 MCP 时应自建健康检查与重新鉴权信号，勿信任"Connected"状态字面语义。

**信号三：企业级与合规诉求显性化。**
Claude Code 新增 `managed.policies[].code` 与 HIPAA 配置示例、Copilot CLI 强调 Entra broker 认证与企业策略解析、Pi 支持自定义 Cloudflare 网关——工具正从个人订阅向组织采购演进。**对开发者参考**：若在团队/企业内推广某 CLI，应优先评估其策略配置与凭据管理路径。

**信号四：Windows 是当前最大的平台短板。**
Codex（沙箱簇）、Pi（调查帖 + 多个 TUI 缺陷）、Copilot CLI（桌面版 git/Ramdisk）、DeepSeek TUI（junction 状态目录连环故障）均集中暴露 Windows 问题。**对开发者参考**：Windows 用户的排障成本显著高于 Linux/macOS，跨平台项目应配备 Windows 专项回归。

**信号五：Agent 状态语义（success/abort/cancel）的正确性是信任基础。**
Gemini CLI 子代理中断误报 success、Claude Code 触顶杀死而非暂停、Pi 忽略 abort 信号可永久钉住运行、Qwen Code 取消意图在恢复中丢失——这些非功能缺陷直接损耗用户对 agent 的信任。**对开发者参考**：将取消/中断/恢复语义纳入核心测试，比新增功能更影响长期口碑。

**信号六：上下文与资源治理走向动态化。**
Copilot CLI 呼吁放开 1M 上下文、Qwen Code 推动基于上下文压力的动态输出截断（#2566）、OpenCode/DeepSeek TUI 报告内存无上限增长（#6842）——上下文与内存管理正从静态上限转向按需动态治理。**对开发者参考**：长会话场景应设计可观测的上下文/内存预算机制。

---

*本报告基于各工具 2026-10-09 过去 24 小时社区动态摘要综合，数据口径以各日报"热点精选"为准，不同工具间 Issue/PR 绝对量不宜直接横向比较。*

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告

数据来源：github.com/anthropics/skills（截止 2026-10-09）

## 1. 热门 Skills 排行（PR）

> 说明：官方给出的 PR 数据中评论数均为 `undefined`，以下按摘要信息量与更新活跃度选取代表性条目。

- **proofcore-contract-auditor** — 面向 Web3 开发者的 Agent Skill，对 Solidity/Rust 智能合约做静态分析，并将审计证明锚定到 TON 区块链。状态：OPEN。
  https://github.com/anthropics/skills/pull/1771
- **md2video-audio** — 零成本将 Markdown 直接编译为带类人语音旁白的 MP4 视频。状态：OPEN。
  https://github.com/anthropics/skills/pull/1703
- **scnet-hpc** — 通过 profile 化 SSH 与 Slurm 工作流操作 SCNet HPC 集群（连接、分区、内存、模块、加速器指引）。状态：OPEN。
  https://github.com/anthropics/skills/pull/1615
- **AWT (AI Watch Tester)** — 赋予 Claude 视觉与浏览器控制能力以运行 E2E 测试的开源工具。状态：OPEN。
  https://github.com/anthropics/skills/pull/822
- **notion-spec-to-implementation / quantitative-resume-auditor** — 前者把产品/技术规格转化为可供 Claude Code 实现的 Notion 任务（含验收标准），后者为量化简历审查。状态：OPEN。
  https://github.com/anthropics/skills/pull/1245
- **document-typography** — 生成文档的排版质量控制：孤立词换行、孤行段落、编号错位。状态：OPEN。
  https://github.com/anthropics/skills/pull/514
- **ODT skill** — OpenDocument 文本/表格的创建、模板填充与转 HTML。状态：OPEN。
  https://github.com/anthropics/skills/pull/486
- **skill-quality-analyzer / skill-security-analyzer** — 面向 Skills 的元技能：五维质量评估与安全分析，接入 marketplace。状态：OPEN。
  https://github.com/anthropics/skills/pull/83

## 2. 社区需求趋势（Issues）

- **安全与信任边界（讨论度最高）** — 社区技能以 `anthropic/` 命名空间分发造成仿冒风险；另有 eval-viewer 的 XSS/属性转义问题。共 43 条评论，是当前最热议题。
  https://github.com/anthropics/skills/issues/492 https://github.com/anthropics/skills/issues/1394
- **Skills 的组织内共享与分发** — 希望 Claude.ai 支持组织级技能库，免去手动下载 .skill 文件再上传；同时反映 document-skills 与 example-skills 插件内容重复导致上下文重复。
  https://github.com/anthropics/skills/issues/228 https://github.com/anthropics/skills/issues/189
- **skill-creator 工具链可靠性** — 触发评测失效（0% 触发率）、并行 worker 串号产生假阴性、Windows 兼容性、benchmark 静默失败。
  https://github.com/anthropics/skills/issues/556 https://github.com/anthropics/skills/issues/1352 https://github.com/anthropics/skills/issues/1383
- **上下文窗口效率** — `claude-api` skill 单次工具调用即注入约 156k tokens，耗尽上下文；skill-creator 文档化语气违反 token 效率最佳实践。
  https://github.com/anthropics/skills/issues/1487 https://github.com/anthropics/skills/issues/202
- **Agent 治理与推理质量** — 提出 agent-governance（策略执行、威胁检测、信任评分、审计追踪）与推理质量门流水线（预任务校准 → 对抗审查 → 交付验证）。
  https://github.com/anthropics/skills/issues/412 https://github.com/anthropics/skills/issues/1385
- **新方向提案** — compact-memory（长时运行 agent 的符号化紧凑状态）；MCP 评测 harness 对真实服务器打分为 0 的问题反馈。
  https://github.com/anthropics/skills/issues/1329 https://github.com/anthropics/skills/issues/1390

## 3. 高潜力待合并 Skills（评论活跃、尚未合并）

> 数据中 PR 评论数均为 `undefined`，以下按“创建—更新跨度长、近期仍在更新”筛选，代表持续活跃、可能近期落地。

- **#1742 fix(mcp-builder)** — 适配 `mcp>=2` 的 `streamable_http_client` 重命名与自定义 headers。创建 2026-09-08，更新 2026-10-08。
  https://github.com/anthropics/skills/pull/1742
- **#1681 fix(skill-creator)** — 支持 `package_skill.py` 直接执行并更新用法路径（修复 ModuleNotFoundError）。更新 2026-10-08。
  https://github.com/anthropics/skills/pull/1681
- **#1961 skill-creator eval viewer 加固** — 修复脚本逃逸、DNS rebinding、跨站 POST、转义问题。创建 2026-10-03，更新 2026-10-07。
  https://github.com/anthropics/skills/pull/1961
- **#1730 fix(claude-api)** — 替换 academy-guide 与 tool-use-concepts 中的 3 个 404 链接。更新 2026-10-04。
  https://github.com/anthropics/skills/pull/1730
- **#1245 notion-spec-to-implementation + quantitative-resume-auditor** — 创建 2026-06-02，更新 2026-09-30，跨月持续跟进。
  https://github.com/anthropics/skills/pull/1245
- **#1792 fix(docx)** — LibreOffice 超时按错误上报并校验输出 DOCX 是否仍含修订标记。更新 2026-09-25。
  https://github.com/anthropics/skills/pull/1792
- **#1980 / #1976 / #1977** — webapp-testing 去除 `shell=True`、修正 textarea/select 识别；algorithmic-art 的 `wrapAround()` 取模修正。均为 2026-10-06 提交、10-07 更新。
  https://github.com/anthropics/skills/pull/1980 https://github.com/anthropics/skills/pull/1976 https://github.com/anthropics/skills/pull/1977

## 4. Skills 生态洞察

当前社区在 Skills 层面最集中的诉求是：**信任与安全边界（防止命名空间仿冒、修复 eval/评测工具的安全与可靠性缺陷）以及分发与上下文效率（组织级共享、去重、控制 token 注入）**，新增功能类 Skill 提案虽多，但讨论热度明显让位于对现有 skill-creator / 评测工具链可信度的修补。

---

# Claude Code 社区动态日报（2026-10-09）

## 今日速览

今日发布 v2.1.296，重点扩展 Claude 应用网关策略与子代理上下文管理能力。社区侧，扩展性提案 #91870 持续高热（248 条评论），hooks/plugins 生态成为最活跃议题；同时"长输入被静默截断"在多个平台密集出现，已形成跨平台共性 bug 群。

---

## 版本发布

**v2.1.296**
- 网关 `managed.policies[]` 新增 `code` 键：与 `cli` 应用相同设置，同时作用于 Claude Desktop 的 Code 标签页；与 `desktop` 并列使用时开启 Desktop 网关模式。
- 子代理 frontmatter 及 `--agents` 定义新增 `autoCompactWindow`，允许配置自动压缩窗口。

链接: anthropics/claude-code Release v2.1.296

---

## 社区热点 Issues

1. **#91870 [OPEN] Mods - make Claude 10x more extensible**（248 评论 / 131 👍）
   扩展性总提案，附带非官方社区进展更新，是当前讨论度最高的议题。hooks/plugins 生态的核心讨论场。
   https://github.com/anthropics/claude-code/issues/91870

2. **#29214 [OPEN] Remote Control 忽略 --dangerously-skip-permissions 仍弹权限提示**（32 评论 / 81 👍）
   WSL 平台，移动端 Remote Control 与 CLI 权限标志不一致，高赞说明影响面广。
   https://github.com/anthropics/claude-code/issues/29214

3. **#51828 [OPEN] 终端 resize 导致 scrollback 重复（VS Code 终端 / macOS）**（28 评论 / 36 👍）
   带 repro 的 TUI 老 bug，从 2.1.116 延续至今仍未修复，长期困扰用户。
   https://github.com/anthropics/claude-code/issues/51828

4. **#100813 [OPEN] 主代理收不到 skills 列表，`/skills` 却显示已加载（2.1.295）**（2 评论）
   技能系统与主代理上下文传递脱节，子代理反而能拿到列表——技能机制的关键可靠性问题。
   https://github.com/anthropics/claude-code/issues/100813

5. **#73338 [OPEN] Desktop 无法内联打开工作目录之外的文件（回归）**（6 评论 / 11 👍）
   跨 Windows/macOS 的回归，影响 memory 文件等工作流，属明确的版本回退。
   https://github.com/anthropics/claude-code/issues/73338

6. **#98299 [OPEN] 触达 5 小时会话上限时直接杀死进行中的 workflow agents**（2 评论）
   应暂停而非终止，涉及 agent 长任务的可靠性设计。
   https://github.com/anthropics/claude-code/issues/98299

7. **#100545 [OPEN] 线程/进程创建 EAGAIN 时 SIGABRT 崩溃（Linux）**（1 评论）
   容器 cgroup/RLIMIT_NPROC 场景下无提示崩溃，且 Desktop 丢失后台任务，面向生产环境。
   https://github.com/anthropics/claude-code/issues/100545

8. **#100901 [OPEN] Claude Desktop 启动 Docker Desktop 时崩溃（AppData 下 AF_UNIX socket，错误 1920）**（2 评论）
   新增报告，附带 MSIX AppData 重定向追踪证据，补充了此前被关闭 issue 的线索。
   https://github.com/anthropics/claude-code/issues/100901

9. **#99252 [OPEN] 用户粘贴输入被折叠为 "(N lines hidden)" 且无法展开/复制**（1 评论）
   TUI 转录可读性与可复制性问题，与长输入处理系列相关。
   https://github.com/anthropics/claude-code/issues/99252

10. **#94063 [OPEN] 请求持久化 Ctrl+S prompt 暂存，支持 --continue / --resume 恢复**（1 评论）
    与后台会话对齐的功能请求，反映工作流连续性需求。
    https://github.com/anthropics/claude-code/issues/94063

---

## 重要 PR 进展

1. **#41447 [OPEN] feat: open source claude code**（关闭多个历史 issue）
   社区长期诉求的"开源"提案，今日仍在更新。
   https://github.com/anthropics/claude-code/pull/41447

2. **#100293 [CLOSED] 新增 HIPAA 设置示例（settings-hipaa.json 等）**（已关闭）
   为已启用 HIPAA 配置的组织提供 managed-settings / managed-mcp 样例，面向合规场景。
   https://github.com/anthropics/claude-code/pull/100293

3. **#85716 [CLOSED] fix(hookify): 从祖先 .claude 目录加载规则，防止静默绕过**
   修复 rules 加载范围漏洞。
   https://github.com/anthropics/claude-code/pull/85716

4. **#84747 [CLOSED] fix(hookify): 强制正确的规则评估范围并安全读取文件**
   修复 `load_rules()` 在 event 为 None 时绕过事件过滤。
   https://github.com/anthropics/claude-code/pull/84747

5. **#84711 [CLOSED] fix(security): 修复插件脚本 YAML 注入与符号链接凭证覆盖**
   面向插件脚本的安全加固（修复 #76580）。
   https://github.com/anthropics/claude-code/pull/84711

6. **#84364 [CLOSED] fix(hookify): preToolUse hook 异常时 fail closed**
   修复异常导致 hook 返回 0 而放行工具执行的漏洞，改为发出 permissionDecision。
   https://github.com/anthropics/claude-code/pull/84364

7. **#84365 [CLOSED] fix(scripts): 允许任意用户以 thumbs down 阻止自动关闭**
   与去重机器人的承诺对齐（修复 #79146）。
   https://github.com/anthropics/claude-code/pull/84365

（注：过去 24 小时更新的 PR 共 7 条，以上为全部条目；其余为上述 hookify/安全系列修复。）

---

## 功能需求趋势

- **扩展性与插件体系**：以 #91870 为核心，hooks/plugins 是当前社区投入最多的方向，配套的安全修复 PR 亦集中于此。
- **Desktop 与移动端协同 / Remote Control**：#29214、#100114、#99865 反映跨端权限、会话恢复与状态同步的一致性诉求。
- **技能系统（Skills）可靠性**：#100813 暴露技能列表向模型传递的时序/可见性问题。
- **长输入与会话连续性**：长提示截断、prompt 暂存、后台任务保留等形成一组相关需求。
- **合规与企业管控**：HIPAA 设置示例表明组织级策略配置需求在上升（与版本新增的 `managed.policies[].code` 相呼应）。

---

## 开发者关注点

- **静默数据丢失**：#74004、#90910、#92118 分别在 macOS、Warp、Linux/WSL 报告长输入被静默截断且无警告，属高频且高影响痛点。
- **资源受限环境稳定性**：#100545（EAGAIN → SIGABRT）与 #100901（socket 权限）显示容器/MSIX 环境下崩溃与失败无可观测反馈。
- **agent 生命周期管理**：#98299 指出会话上限触发时 agent 被杀死而非暂停，缺乏优雅降级。
- **权限语义一致性**：CLI 标志（`--dangerously-skip-permissions`）与 Desktop/移动端权限行为不一致（#29214、#99865）。
- **可观测与可恢复性**：多个 issue 指向缺乏明确报错、重试或状态恢复机制，而非单纯功能缺失。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报（2026-10-09）

## 今日速览

今日发布 `rust-v0.162.1` 补丁版，修复了 TUI 多行异步问题的崩溃与后台服务器特性设置不一致导致的启动失败，同时推进 `0.163.0-alpha` 系列迭代。社区侧，Windows 平台沙箱与 Dots 任务问题持续集中爆发（多个高评论 Issue 指向 "setup refresh had errors" 与文件占用错误 32），Remote Control 线程锁死问题在多平台上仍未解决。PR 侧大量 `copyberry[bot]` 提交集中在沙箱兼容性、代理重试、Code Mode 退出语义与遥测观测能力上。

---

## 版本发布

- **rust-v0.162.1**（稳定补丁）
  - 修复 TUI 在多行异步问题下崩溃，现可保留换行与完整超链接目标（#51866）
  - 修复因后台服务器特性设置与 CLI 默认值不一致导致的启动失败，新增兼容性检查
  - 链接: openai/codex Release rust-v0.162.1

- **rust-v0.163.0-alpha.5 / alpha.4**（预发布迭代）
  - 均为常规 alpha 发布，未附详细变更说明
  - 链接: openai/codex Release rust-v0.163.0-alpha.5

---

## 社区热点 Issues

1. **[#49458](openai/codex Issue #49458)** [OPEN] Windows 上 dot 启动的本地任务缺少 Computer Use 工具，而普通本地会话正常。67 条评论、25 👍，是今日讨论最热的 Issue，指向 Dots 与 Computer Use 能力的不一致。
2. **[#37403](openai/codex Issue #37403)** [OPEN] macOS 桌面端无法恢复 Remote Control / CLI 线程，报 `already has an active writer`。65 评论、48 👍，为高赞回归问题，影响移动端远程接续工作流。
3. **[#3355](openai/codex Issue #3355)** [OPEN] MacBook 休眠后向 `chatgpt.com/backend-api/codex/responses` 发送请求报错。58 评论、33 👍，是自 2025 年延续至今的长寿连接性问题。
4. **[#49988](openai/codex Issue #49988)** [CLOSED] VS Code 扩展更新后间歇性丢失已提交消息（Enter 清空输入框但不发送）。53 评论、49 👍，今日已关闭，高赞说明影响面广。
5. **[#51634](openai/codex Issue #51634)** [OPEN] Windows 沙箱配置在任意运行时文件被占用时以 os error 32 失败，标记为 0.162.0-alpha.2 回归。34 评论、16 👍，为近期版本引入的明确回归。
6. **[#42520](openai/codex Issue #42520)** [OPEN] Windows 桌面端 Chrome 集成已安装但 `chrome-native-hosts-v2.json` 从未生成，更新后残留 latest junction。22 评论，涉及浏览器集成安装链路。
7. **[#50526](openai/codex Issue #50526)** [OPEN] 桌面端 Guardian 实验重新引入已废弃的 `thread_context`，即便 config.toml 干净。20 评论，反映配置与实验特性冲突。
8. **[#24638](openai/codex Issue #24638)** [OPEN] app-server 本地命令执行缺少 cwd 作用域的环境契约，TUI 启动间可能静默使用不同环境源。14 评论、11 👍，属架构级一致性问题。
9. **[#51882](openai/codex Issue #51882)** / **[#52179](openai/codex Issue #52179)** / **[#52334](openai/codex Issue #52334)** Windows 侧 "setup refresh had errors" 系列（含 node_repl.exe 共享冲突），多条 Issue 同日活跃，显示 Windows 沙箱/远程初始化存在系统性故障簇。
10. **[#32195](openai/codex Issue #32195)** [OPEN] 功能请求：在 Codex App 状态区持续显示 5 小时与每周用量限额。6 评论、17 👍，为少数高赞 enhancement，反映配额可见性需求。

---

## 重要 PR 进展

1. **[#52748](openai/codex PR #52748)** 使 code-mode `exit()` 终止整个 cell，避免 catchable 异常让 JS 在 `catch`/`finally`/promise 回调中继续执行。
2. **[#52742](openai/codex PR #52742)** 为 OpenAI 请求新增默认关闭的 `output_token_replay`，请求 `output.encrypted_content` 并保留加密消息与工具调用输出。
3. **[#52736](openai/codex PR #52736)** 允许模型目录覆盖增量工具通知（更新提示、工具与命名空间移除标题、命名空间指令消息）。
4. **[#52725](openai/codex PR #52725)** 用 OSC 7501 上报终端程序状态（`app=codex`），将生命周期状态上报从 iTerm2 扩展到其他终端。
5. **[#52724](openai/codex PR #52724)** 新增初始 exec-server 连接尝试观测接口，可上报耗时与成功/失败/取消结果。
6. **[#52723](openai/codex PR #52723)** 为 code-mode host 增加可选 `grpc+stdio://` 传输与 `code_mode_host_grpc` 特性开关，跨调用共享惰性 HTTP/2 通道。
7. **[#52707](openai/codex PR #52707)** 迁移 Windows MXC 沙箱至拆分后的 MXC crate，修正 PSEC 符号在过渡版本上的可用性检测。
8. **[#52702](openai/codex PR #52702)** 请求失败后通过系统代理重试 bootstrap GET，覆盖账户发现与云端配置请求。
9. **[#52685](openai/codex PR #52685)** 在输出序列化期间保留 code mode 取消语义，防止终止时重入 V8 把不可捕获取消变为可捕获异常。
10. **[#52696](openai/codex PR #52696)** 修复 Windows junction 下的 marketplace 路径匹配，恢复被重定向托管根目录的托管分类。

*（另：#52721 为服务器关闭时的会话创建失败提供结构化原因；#52689 将每轮 Cyber 访问程序转发给 Guardian；#52686 为 turn 工具输出增加可选留存；#52682 在密码修复前校验 Windows 沙箱账户。）*

---

## 功能需求趋势

- **桌面端与 IDE 集成稳定性**：VS Code 扩展丢消息（#49988）、Chrome 集成安装失败（#42520）、Chrome Browser Use 误拦截（#35549），浏览器与编辑器集成是短板集中区。
- **远程控制与跨设备接续**：Remote Control / iOS 线程锁死（#37403、#44449）、云任务从侧栏消失（#51675），跨设备工作流是长期未解需求。
- **Dots / Computer Use 能力一致性**：多个 Issue（#49458、#50887、#51882、#52334）显示 dot 启动任务与普通会话在工具可用性、授权信任上存在差异。
- **用量与配额可见性**：请求展示 5 小时/每周限额（#32195），属高赞 enhancement。
- **配置与环境契约澄清**：废弃字段回潮（#50526）、cwd 作用域环境契约缺失（#24638），开发者需要更可预测的配置语义。

---

## 开发者关注点

- **Windows 平台问题占据主导**：沙箱配置（os error 32 / "setup refresh had errors"）、node_repl.exe 文件占用、junction 残留、更新后崩溃、控制台窗口闪烁等，构成今日最高频痛点，且多为近期版本回归。
- **回归问题敏感度高**：多个 Issue 明确标注版本回归（0.162.0-alpha.2 沙箱、0.157 hooks TMUX 归属、0.153 Remote Control），说明版本间兼容性验证需加强。
- **长尾问题未被消化**：#3355（休眠后请求失败）持续活跃超一年，用户耐心消耗明显。
- **消息可靠性与状态一致性**：丢消息、线程锁死、云任务消失，开发者对"提交即生效、状态可恢复"的基本可靠性诉求强烈。

---

*数据来源：github.com/openai/codex（统计窗口：2026-10-09 过去 24 小时）*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报（2026-10-09）

## 今日速览

今日发布夜间版 v0.65.0-nightly.20261010.g9b6e0265d，包含 CLI 的 JSON 解析/响应流错误处理与核心字符串截断保留行终止符两项修复；同时 v0.64.0-preview.1 通过 cherry-pick 完成补丁发布。Issue 活跃度集中在 agent 子系统（子代理恢复误报、generalist agent 挂起、browser 子代理兼容性）与 Termux 平台 ripgrep 二进制不兼容问题。PR 侧则以稳定性修复为主调，覆盖 web 搜索超时、CI 链式 E2E 加固、自定义 header 解析等。

---

## 版本发布

**v0.65.0-nightly.20261010.g9b6e0265d**（nightly）
- `fix(cli)`: 在 `fetchJson` 中处理 JSON 解析与响应流错误（#29658）
- `fix(core)`: `truncateString` 保留行终止符（#29673）
- 版本 bump PR：#29701

**v0.64.0-preview.1**（preview）
- 通过 cherry-pick 2ce1a69 至 release/v0.64.0-preview.0-pr-29672 生成补丁版本（#29696）
- 自动生成 changelog PR：#29697

---

## 社区热点 Issues

1. **[#21836](https://github.com/google-gemini/gemini-cli/issues/21836)** [OPEN][p2/bug] Termux 上 ripgrep ENOENT — 托管 rg 二进制为标准 GNU/Linux 编译，在 Android/Termux 缺少动态链接器。16 条评论为今日最高，属长期未解决、影响移动/ARM 场景的兼容性问题。
2. **[#22323](https://github.com/google-gemini/gemini-cli/issues/22323)** [OPEN][p1/bug] 子代理 MAX_TURNS 中断被上报为 GOAL success — `codebase_investigator` 在达到最大轮次未做分析时仍报 success，掩盖中断。标记 need-retesting，涉及 agent 状态语义正确性。
3. **[#21409](https://github.com/google-gemini/gemini-cli/issues/21409)** [OPEN][p1/bug] Generalist agent 挂起 — 简单任务如创建文件夹即无限挂起，用户等待长达一小时。👍8 为今日最高，反映核心 agent 委派流程的严重阻塞。
4. **[#19873](https://github.com/google-gemini/gemini-cli/issues/19873)** [OPEN][p2/enhancement] 零依赖 OS 沙箱 + 执行后意图路由 — 主张利用 Gemini 3 的原生 bash 亲和性（grep/cat/sed/awk 链式探索），是架构方向性提案。
5. **[#28800](https://github.com/google-gemini/gemini-cli/issues/28800)** [CLOSED][p1/bug] Gemini Code Assist Standard 可用模型过少 — 持 Standard 许可用户看不到 gemini 3.1 pro preview 与 3.6 flash。👍5，已关闭，涉及许可与模型可见性策略。
6. **[#22745](https://github.com/google-gemini/gemini-cli/issues/22745)** [OPEN][p2/feature] AST 感知的文件读取/搜索/映射影响评估 — EPIC 级别，探索单次工具调用精确读取方法边界以减少轮次。
7. **[#21968](https://github.com/google-gemini/gemini-cli/issues/21968)** [OPEN][p2/bug] Gemini 不主动使用 skills 和子代理 — 除非显式指令，否则几乎不会自主调用。属 agent 能力利用率问题，待复测。
8. **[#22267](https://github.com/google-gemini/gemini-cli/issues/22267)** [OPEN][p2/bug] Browser Agent 忽略 `settings.json` 覆盖（如 maxTurns）— `AgentRegistry` 与运行时配置脱节。
9. **[#24246](https://github.com/google-gemini/gemini-cli/issues/24246)** [OPEN][p2/bug] 工具数 >128 时触发 400 错误 — 期望 agent 能按启用范围更聪明地限制工具，涉及大规模工具集的可扩展性。
10. **[#21983](https://github.com/google-gemini/gemini-cli/issues/21983)** [OPEN][p1/bug] browser 子代理在 Wayland 下失败 — Linux 桌面环境兼容性，标记 need-retesting。

*其他值得留意：[#22672](https://github.com/google-gemini/gemini-cli/issues/22672) 模型应劝阻 `git reset --force` 等破坏性操作；[#28548](https://github.com/google-gemini/gemini-cli/issues/28548) Plan Mode 只读限制依赖未验证的 MCP 服务端注解（安全，已 CLOSED 为 Won't Fix）。*

---

## 重要 PR 进展

1. **[#29608](https://github.com/google-gemini/gemini-cli/pull/29608)** [p1/agent] `fix(core)`: web 搜索 30 秒超时 — 此前 `GoogleSearch`/`WebFetch` 仅传调用方 abort signal，底层 LLM 调用不结束时 agent 会永久卡在 `Thinking...`。直接回应挂起类痛点。
2. **[#29611](https://github.com/google-gemini/gemini-cli/pull/29611)** [area/core] 支持点号 Gemini 3 模型及别名的多模态函数响应 — 解析模型别名、支持带点版本，避免图像等多模态工具输出被当作无效 sibling parts 发出。
3. **[#29615](https://github.com/google-gemini/gemini-cli/pull/29615)** [ci] 加固 `chained_e2e.yml` 的 `workflow_run` 路径 — 以触发工作流成功为门控，收紧 SHA 回退，防止意外代码 checkout。
4. **[#29606](https://github.com/google-gemini/gemini-cli/pull/29606)** [area/core] 仅在合法 RFC 9110 token 前分割自定义 header — 修复含 `,"name":`（如 `x-portkey-metadata`）的合法 JSON 值被误切。
5. **[#29607](https://github.com/google-gemini/gemini-cli/pull/29607)** [area/platform] 无报告时让 nightly eval 摘要失败退出 — 配合 `continue-on-error: true`，避免空产物静默通过。
6. **[#29505](https://github.com/google-gemini/gemini-cli/pull/29505)** [p1/CLOSED] 支持 rootless Podman 的 keep-id — 修复沙箱启动时正确保留宿主 UID/GID，此前无法创建/切换映射用户。已关闭。
7. **[#29644](https://github.com/google-gemini/gemini-cli/pull/29644)** [p1/cli] 恢复终端宽度变化时的防抖静态 UI 刷新 — `AppContainer.tsx` 中还原 `refreshStatic()`（100ms 防抖）。
8. **[#29617](https://github.com/google-gemini/gemini-cli/pull/29617)** [p1/cli/CLOSED] 跳过 `@<directory>` 引用的急切递归文件读取 — 同时更新 CLI 与 ACP 模式的 `@<path>` 处理。已关闭。
9. **[#29699](https://github.com/google-gemini/gemini-cli/pull/29699)** [area/core] 修复 Unicode 扩展字符的反向搜索高亮索引 — 解决 `Ctrl+R` 历史搜索中 `İ`（U+0130）小写化后长度扩展导致的 UTF-16 偏移 off-by-one。
10. **[#29697](https://github.com/google-gemini/gemini-cli/pull/29697)** [p3/docs/maintainer-only] v0.64.0-preview.1 自动生成 changelog。

*补充：[#29700](https://github.com/google-gemini/gemini-cli/pull/29700) 同步 workspace package.json 与 lockfile 并在 CI 强制校验；[#29643](https://github.com/google-gemini/gemini-cli/pull/29643) 重新选择 Google 登录时清除缓存凭证。*

---

## 功能需求趋势

- **Agent 自治与可靠性**：子代理恢复语义、generalist agent 挂起、skills/子代理自主调用不足、Browser Agent 配置覆盖失效——agent 子系统的可预测性是当前最集中的方向。
- **沙箱与执行安全**：零依赖 OS 沙箱、rootless Podman keep-id、untracked 命令标志误报消除、Plan Mode 只读控制——围绕执行隔离与安全提示精度。
- **平台兼容性**：Termux/Android、Wayland、Windows 终端 Unicode（泰文组合字符）、ARM/动态链接器——跨平台支持是持续需求。
- **工具集可扩展性**：工具数超限 400 错误、AST 感知读取、原生文件工具维护 task tracker——面向大规模代码库的工具效率优化。
- **模型与许可可见性**：模型别名/点号版本解析、Code Assist Standard 模型可见性——模型接入层的兼容与策略问题。

---

## 开发者关注点

1. **agent 挂起与状态失真**：generalist agent 无限挂起（👍8）、子代理中断被误报为成功，是开发者最直接的信任损耗点。
2. **配置不生效**：`settings.json` 覆盖被 Browser Agent 忽略、符号链接 agent 文件不被识别，配置层与运行时的一致性诉求强烈。
3. **跨平台破损**：Termux、Wayland、Windows 终端字符渲染等平台特定缺陷长期开放，移动与 Linux 桌面用户覆盖不足。
4. **破坏性操作防范**：模型在复杂 git 场景下倾向 `reset`/`force`，社区希望 agent 主动降级到更安全替代方案。
5. **工具规模上限**：工具数增长触发 400 错误，开发者期望更智能的工具裁剪而非硬性上限。
6. **登录/凭证体验**：OAuth 未授权（v0.42.0，Stale）与凭证缓存问题（#29643）显示认证流程仍有摩擦。

---

*数据来源：github.com/google-gemini/gemini-cli，统计窗口为过去 24 小时内更新。*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报（2026-10-09）

## 1. 今日速览

今日共发布 6 个版本（v1.0.95 至 v1.0.96-2），重点集中在**沙箱凭据注入、权限决策可追溯性与模型 ID 规范化**。平台适配持续推进：v1.0.95 引入 macOS 原生 Microsoft Entra broker 认证，并修复 `--context` 在 ACP 会话中失效的问题。社区侧，`/add-dir` 沙箱授权、Node.js 内存泄漏 OOM、Atlassian MCP 重复授权等长期痛点持续获得关注。

---

## 2. 版本发布

**v1.0.96-2**（最新）
- 修复：`/model` 与 `/config` 中的模型 ID 现不区分大小写，并保存规范 ID。
- 链接：github.com/github/copilot-cli/releases

**v1.0.96-1**
- 新增：交互式沙箱设置会提示可能的环境密钥，并允许在保存前添加掩码主机。
- 修复：企业策略仍在解析期间，`/allow-all` 保持可用。
- 链接：github.com/github/copilot-cli/releases

**v1.0.96-0**
- 改进：git 仓库中的交互式会话更快到达输入提示符；Timeline 现显示每个权限决策的做出方（用户、Assisted Permissions、策略或无人值守回退）。
- 修复：`/add-dir` 为当前会话授予所添加目录的沙箱访问权限。
- 链接：github.com/github/copilot-cli/releases

**v1.0.95（2026-10-09）**
- macOS 上可用时使用原生 Microsoft Entra broker 认证，并提供浏览器回退。
- `copilot config` 支持 sandbox credential `injectHosts` 键，并在 Bash、Zsh、Fish 中提供键补全。
- `--context` 现应用于新建和恢复的 ACP 会话，而非静默忽略。
- 链接：github.com/github/copilot-cli/releases

**v1.0.95-3 / v1.0.95-2**
- 修复与变更（-3）；`copilot config` 支持 sandbox credential `injectHosts`（-2）。
- 链接：github.com/github/copilot-cli/releases

---

## 3. 社区热点 Issues

1. **#4313 [CLOSED] 允许滚动浏览当前对话历史** — 9 条评论，今日讨论度最高。终端渲染与键盘输入的核心体验问题，已关闭。
   链接：github/copilot-cli Issue #4313

2. **#3355 [CLOSED] 为 Claude Opus 4.6 提供可配置上下文窗口（200K 上限 vs 1M 模型能力）** — 模型原生支持 1M，但 CLI 限制为 200K，导致频繁自动压缩；👍 4。
   链接：github/copilot-cli Issue #3355

3. **#4686 [OPEN] Node.js OOM 崩溃：约 37 分钟后泄漏 31,965 个异步 libuv 句柄（SEA 忽略 NODE_OPTIONS）** — 长会话稳定性隐患，仍开放。
   链接：github/copilot-cli Issue #4686

4. **#5076 [CLOSED] `/add-dir` 未将目录加入沙箱允许列表** — 与今日 v1.0.96-0 修复直接对应，闭环迅速。
   链接：github/copilot-cli Issue #5076

5. **#2536 [OPEN] Atlassian MCP 每次调用 CLI 都需重新授权** — 3 条评论，👍 3，MCP 认证持久化痛点。
   链接：github/copilot-cli Issue #2536

6. **#3081 [OPEN] NixOS keychain 支持损坏** — 已安装 libsecret/GNOME Keyring 仍无法访问系统密钥链，👍 3。
   链接：github/copilot-cli Issue #3081

7. **#3035 [OPEN] 可通过工具调用的 `cwd`（等价于 TUI `/cwd`）** — 请求将 `/cwd` 能力开放给插件/工具调用，并联带技能重扫描。
   链接：github/copilot-cli Issue #3035

8. **#5101 [OPEN] `--add-github-mcp-tool issue_write` 导致所有 MCP 工具不可用** — 与 #3052 同源，MCP 工具注册逻辑缺陷。
   链接：github/copilot-cli Issue #5101

9. **#5098 [OPEN] 添加 `sandbox.userPolicy.filesystem` 路径后 sessionStart hook 停止运行** — 今日新建，沙箱策略与 hook 机制冲突。
   链接：github/copilot-cli Issue #5098

10. **#4516 [OPEN] JVM 进程不遵守沙箱读写路径授权** — 同类路径对原生 shell 可写，对 Maven 等 Java 工具失效。
    链接：github/copilot-cli Issue #4516

*（其他值得留意：#4633 view 工具误报 8.6 KB 文件过大；#5094 Windows 桌面版 1.1.27+ 无法启动内置 git；#3535 Windows Ramdisk 目录不可访问。）*

---

## 4. 重要 PR 进展

过去 24 小时内共 2 条 PR 更新，全部列出：

1. **#5106 [OPEN] Create index.html** — 由 lg3707082-cpu 创建，附带 index.html 附件。内容为新增文件，需关注其意图是否与项目相关。
   链接：github/copilot-cli PR #5106

2. **#5093 [OPEN] install：校验与下载 tarball 匹配的 checksum 条目** — 指出安装脚本的校验存在"空验证"问题：使用 `--ignore-missing` 时可能验证通过却未实际校验下载包。这是安装供应链完整性的实质修复。
   链接：github/copilot-cli PR #5093

> 说明：本期数据仅提供 2 条 PR，无法凑足 10 条，故按实际数据完整呈现。

---

## 5. 功能需求趋势

从本期 Issues 可归纳出以下社区关注方向：

- **沙箱与权限模型精细化**：#5076（`/add-dir`）、#5098（文件系统策略与 hook 冲突）、#4516（JVM 不遵守路径授权）。沙箱一致性是当前最密集的议题簇。
- **MCP 生态稳定性**：#2536（重复授权）、#5101 与 #3052（`--add-github-mcp-tool` 失效）。MCP 集成在意认证持久化与只读端点误配。
- **模型能力与上下文控制**：#3355 呼吁放开 Claude Opus 4.6 的 1M 上下文；v1.0.96-2 的模型 ID 大小写规范化亦属同方向。
- **终端交互与可观测性**：#4313（对话历史滚动）、#2535（消息时间戳）、#3249（编辑 diff 行序混乱）。TUI 体验持续被追问。
- **跨平台适配**：#3081（NixOS 密钥链）、#3535（Windows Ramdisk）、#5094（Windows 桌面版 git）。Linux/Windows 边缘环境支持仍有缺口。
- **长会话可靠性**：#4686（libuv 句柄泄漏 OOM）反映对长时间运行稳定性的担忧。

---

## 6. 开发者关注点

- **沙箱策略的"言行不一"**：多个 Issue 表明路径授权在原生 shell 生效、但在 Java 等子进程或新增策略路径后失效（#4516、#5098、#5076），开发者需要沙箱行为可预测、可解释。
- **认证与密钥链摩擦**：macOS Entra broker、NixOS keychain、Atlassian MCP 重复授权共同指向"认证状态持久化"这一高频痛点。
- **性能与资源泄漏**：Node.js OOM（#4686）与上下文被强制压缩（#3355）是影响长任务的两大成本，开发者期待更透明的资源与上下文管理。
- **交互透明度提升的诉求**：v1.0.96-0 的 Timeline 权限决策溯源，正回应了社区对"谁做了这个决定"的可观测性需求（参见 #4313、#2535 等体验类 Issue）。
- **安装与分发安全**：PR #5093 揭示校验逻辑可被绕过，提醒使用者关注安装链路完整性。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报（2026-10-09）

## 今日速览

今日无新版本发布，但社区维护动作密集：大量历史 Issue 在 10-10 集中关闭，涵盖 session 迁移、Web 项目选择器、ACP/MCP 超时等长期问题。PR 侧焦点集中在 MCP 鉴权失败信号（401 未触发 needs_auth）、Plan 代理执行 shell 命令前的确认机制，以及 Effect 4.0.1 升级带来的运行时 schema 兼容问题。

---

## 版本发布

过去 24 小时无新 Release。

---

## 社区热点 Issues

1. **[CLOSED] "terminated" 错误（#30221）** — 评论 10 / 👍 4
   OpenCode Go 订阅下所有活跃会话稳定报 `UnknownError: "terminated"`，与用户活动或模型选择无关。今日评论数最高的 Issue，且已关闭，说明官方可能已定位该问题。
   https://github.com/anomalyco/opencode/issues/30221

2. **[CLOSED] SDK 无法处理 `question` 工具交互（#19702）** — 评论 7 / 👍 2
   SDK（非 CLI）模式下无法响应模型触发的 `question` 工具调用，直接影响自建前端/Web UI 的集成能力。对 SDK 生态开发者影响较大。
   https://github.com/anomalyco/opencode/issues/19702

3. **[OPEN] 免费模型在 `shell`/`read` 权限被拒时失败（#51241）** — 评论 5 / 👍 1
   v2.0.16 下使用 `opencode/big-pickle` 等免费模型，若 `shell` 或 `read` 权限设为 deny，模型直接失败。权限模型与免费模型的兼容性缺陷，仍处于开启状态。
   https://github.com/anomalyco/opencode/issues/51241

4. **[OPEN] V1→V2 迁移导致会话从 `/sessions` 隐藏（#53709）** — 评论 4
   迁移后 `session.path` 存入了被裁剪的绝对目录，导致旧会话在 TUI 中不可见。属于升级路径上的数据可见性回归，带 `needs:compliance` 标签，需重点关注。
   https://github.com/anomalyco/opencode/issues/53709

5. **[CLOSED] Web 项目选择器为空直到输入搜索（#37611）** — 评论 4 / 👍 2
   `opencode web` 打开 Add Project 时显示 "No folders found"，空查询被传给 `/find/file` 返回空列表。与 #37961、#37005、#39434 构成同一类项目选择器问题族。
   https://github.com/anomalyco/opencode/issues/37611

6. **[CLOSED] 持久化 session daemon + 零工具调用记忆召回（#41453）** — 评论 4
   社区提出的架构级功能请求：常驻会话守护进程与无需工具调用的记忆检索。虽已关闭，但反映了对长期记忆能力的需求方向。
   https://github.com/anomalyco/opencode/issues/41453

7. **[CLOSED] DeepSeek V4 Flash Free 输出中途截断（#39582）** — 评论 4 / 👍 1
   免费模型输出 1-2 行后无警告中断，严重影响正常对话。属于免费模型可用性的高频抱怨。
   https://github.com/anomalyco/opencode/issues/39582

8. **[CLOSED] Windows 下 WinGet 安装的 PowerShell 7 未被检测（#41321）** — 评论 4 / 👍 1
   PowerShell 7.6.4 通过标准 WinGet 流程安装后，shell 发现机制无法识别，尽管系统本身可通过 App Execution Alias 启动 `pwsh`。Windows 平台体验问题。
   https://github.com/anomalyco/opencode/issues/41321

9. **[CLOSED] ACP `session/new` 与 `session/prompt` 无限挂起（#41459）** — 评论 3
   `session/new` 会阻塞等待所有 MCP server 注册完成，但无超时（涉及 `service.ts:196`、`service.ts:710`）。对 ACP 协议集成方是阻塞性缺陷。
   https://github.com/anomalyco/opencode/issues/41459

10. **[CLOSED] SSE 流在回合中途关闭（#38458）** — 评论 3
    文档声称 SSE 持久，实际中途关闭，影响基于 `opencode serve` 的会话监控与编排。对服务端集成开发者是关键问题。
    https://github.com/anomalyco/opencode/issues/38458

---

## 重要 PR 进展

1. **[CLOSED] fix(core): 允许新 subagent 会话传入 null（#51355）** — calebboyd
   一次性关闭 #43297、#43610、#43619 三个 Issue，允许 subagent 消费方传入 `session`。核心会话模型修复，影响面广。
   https://github.com/anomalyco/opencode/pull/51355

2. **[CLOSED] fix(core): Plan 代理执行 shell 命令前需确认（#54227）** — potoior
   修复 Plan 代理可在无提示情况下执行破坏性 shell 命令（如绕过 `edit` deny 写入脚本再执行，见 #53955）。安全相关修复。
   https://github.com/anomalyco/opencode/pull/54227

3. **[OPEN] fix(mcp): 工具调用 401 时标记 server needs_auth（#54226）** — potoior
   MCP server OAuth 刷新失败后持续返回 401，但状态仍显示 Connected，无重新鉴权信号。修复后避免每次调用都无效刷新。同主题的 #54225 已关闭。
   https://github.com/anomalyco/opencode/pull/54226

4. **[OPEN] chore: 升级 Effect 至 4.0.1（#54198）** — kitlangton（contributor）
   V2 目前固定在 Effect `4.0.0-rc.118`。升级到稳定版 `4.0.1` 会破坏两点，其一为 `Schema.brand` 变为纯类型（#8628），影响客户端生成器运行时读取 schema。属于基础依赖升级的关键阻碍。
   https://github.com/anomalyco/opencode/pull/54198

5. **[OPEN] feat(tui): 仅一个 agent 可用时简化 UI（#53906）** — zce
   当只有单个可选 agent 时精简界面。小型 TUI 可用性改进。
   https://github.com/anomalyco/opencode/pull/53906

6. **[OPEN] fix(core): 支持 AI SDK v4 媒体输入（#51482）** — Ethereal49
   修复 #50960：版本化的 AI SDK v4 provider 将工具图片序列化为 null。影响多模态工具调用正确性。
   https://github.com/anomalyco/opencode/pull/51482

7. **[OPEN] fix(core): 无 discovery 时保留已配置的本地模型（#54011）** — GoldArowana
   修复 #53341：显式配置的本地模型可能 provider 为空导致不可用。对本地模型用户重要。
   https://github.com/anomalyco/opencode/pull/54011

8. **[OPEN] feat(desktop): 通过 `opencode://` 深链打开会话（#54187）** — BlueBlock
   桌面端深链功能。此前 #54153 因面向 `dev` 分支被关闭，本 PR 改提交至 `v2` 分支。
   https://github.com/anomalyco/opencode/pull/54187

9. **[OPEN] fix(core): 将遗留 MCP timeout 迁移进 startup 预算（#54174）** — Bearmancer
   修复 #54184：`migrateMcp` 未把 V1 的 per-server `timeout` 映射到 `startup`，只映射了 `catalog` 与 `execution`。MCP 启动时序相关问题。
   https://github.com/anomalyco/opencode/pull/54174

10. **[OPEN] fix(core): 为无法分析的 shell 命令提供解释（#54218）** — kitlangton（contributor）
    portable shell scanner 无法分析命令时仅返回 reason code（如 `command-substitution`），Agent 常在插入 Markdown 时触发。改进错误可读性以减少 Agent 误拒。
    https://github.com/anomalyco/opencode/pull/54218

---

## 功能需求趋势

- **移动端 / 远程访问**：如 #33163 请求通过手机连接并控制 OpenCode，反映对跨设备访问的诉求。
- **第三方模型 / Provider 原生支持**：如 #36702 请求对 Langdock 的原生支持，体现欧洲用户对本地化 provider 的需求。
- **记忆与常驻能力**：如 #41453 的持久化 session daemon + 零工具调用记忆召回，指向长期上下文管理。
- **TUI/UX 信息可见性**：如 #53662 请求在 release 构建的侧边栏显示 session ID。
- **SDK / 服务端集成体验**：多起 Issue（#19702、#38458、#41459）围绕 SDK 工具回调、SSE 持久性、ACP 超时，说明可编程集成是活跃方向。
- **桌面端与 Web 端项目选择器**：#37611、#37961、#37005、#39434、#40697、#32960 集中反映项目/文件夹选择流程的普遍性问题。

---

## 开发者关注点

- **升级路径的破坏性**：V1→V2 迁移导致会话消失（#53709），以及 Effect 4.0.1 升级破坏运行时 schema 读取（#54198），说明版本迁移是当前最敏感的风险点。
- **权限模型与模型行为的耦合**：权限 deny 导致免费模型直接失败（#51241），权限判断需要与模型调用解耦或给出更清晰的回退。
- **MCP 鉴权状态失真**：401 后状态仍显示 Connected（#54226），缺乏明确的重新鉴权信号，是 MCP 集成方的核心痛点。
- **超时与流式稳定性**：ACP 无超时挂起（#41459）、SSE 中途关闭（#38458），服务端消费方对可靠性与超时控制需求强烈。
- **Agent 安全边界**：Plan 代理可执行破坏性 shell 命令（#54227），以及在无法分析命令时的隐晦报错（#54218），安全与可解释性并重。
- **平台检测一致性**：Windows 下 WinGet 安装的 PowerShell 7 未被发现（#41321），平台适配仍需完善。

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报（2026-10-09）

## 今日速览

今日无新版本发布，但社区讨论与 PR 提交活跃。**Windows 平台体验**是绝对焦点：#7547 的 Windows 使用调查帖以 79 条评论高居榜首，同时输入重绘、鼠标滚动、图片附件失效等多个 Windows 相关问题持续更新。此外，**协议扩展钩子（hooks）语义不完整**（如 `before_provider_request`、`before_agent_start` 在部分路径不触发）成为本周期开发者集中反馈的一类系统性问题。

---

## 版本发布

今日无新版本发布。

---

## 社区热点 Issues（精选 10 条）

**1. #7547 [OPEN] Windows 平台使用方式与问题汇总（评论 79）**
社区规模的 Windows 使用调查帖，讨论 Pi 在 Windows 上的多种运行方式及优先级应放在修复 bug、完善文档还是优化体验。79 条评论显示这是当前社区最大规模的集中讨论，对项目路线规划有直接参考价值。
🔗 https://github.com/earendil-works/pi/issues/7547

**2. #10480 [OPEN] [bug] 直连 OpenAI 不识别手动重置的用量限额（评论 17）**
ChatGPT Pro 用户使用储备的重置额度后，Pi 仍显示限额已满；临时方案是登出后改用 openai-codex 重新登录。影响付费用户的实际可用性，需关注修复进展。
🔗 https://github.com/earendil-works/pi/issues/10480

**3. #8643 [OPEN] Bedrock 上 OpenAI 模型拒绝 toolResult.content 内嵌图片（评论 12，👍 4）**
请求将工具结果中的图片上提为并列的 user content block（与 openai-completions.ts 现有行为一致），作者称修复与回归测试已在 fork 上就绪。跨云平台的图片处理一致性缺陷。
🔗 https://github.com/earendil-works/pi/issues/8643

**4. #9773 [OPEN] before_provider_request 在摘要/压缩请求中不触发（评论 11）**
该钩子文档承诺"在发送 provider 请求前触发，可替换 payload"，但压缩与分支摘要请求从不触发，导致依赖此钩子改写请求的扩展在压缩路径上失效。属于扩展机制可信度问题。
🔗 https://github.com/earendil-works/pi/issues/9773

**5. #6300 [OPEN] [bug] Windows 输入行每个按键都换行重绘（评论 11）**
Windows 10 的 cmd.exe 与 Windows Terminal 下 TUI 输入逐字符换行，属高频可用性缺陷，与 #7547 的 Windows 议题相互印证。
🔗 https://github.com/earendil-works/pi/issues/6300

**6. #10645 [OPEN] [inprogress] 编译版（Bun）中 resizeImage 解析为 null，0.87.x 起所有图片附件被丢弃（评论 5）**
影响 Windows 11 上的独立二进制 v0.87.1 / v1.0.4，通过 `pi --mode rpc` 由宿主程序调用时图片附件全部失效。对以 SDK/RPC 方式集成 Pi 的应用影响较大，已标记 inprogress。
🔗 https://github.com/earendil-works/pi/issues/10645

**7. #9656 [OPEN] [bug] Windows + Zellij 下滚轮滚动的是提示历史而非会话记录（评论 5，👍 4）**
全屏模式中，嵌套 Windows → Alacritty → Zellij → Pi 时滚轮行为异常，直接终端无此问题。属多路复用器集成场景下的交互缺陷，获得较高点赞。
🔗 https://github.com/earendil-works/pi/issues/9656

**8. #10606 [OPEN] RPC：上一提示预处理阶段发送的 prompt 被确认后静默丢弃（评论 3）**
返回 `success: true` 但没有 message_start、没有 queue_update、没有回复。对构建在 RPC 之上的自动化宿主是隐蔽的数据丢失风险。
🔗 https://github.com/earendil-works/pi/issues/10606

**9. #10157 [OPEN] AI Studio 的 OpenAI 兼容端点丢 Gemini 工具调用思考签名（评论 3）**
端点返回的 `extra_content.google.thought_signature` 未被保留，影响 Gemini Flash Lite 的工具调用链路。新模型/新端点支持的典型适配问题。
🔗 https://github.com/earendil-works/pi/issues/10157

**10. #10754 [CLOSED] 忽略 abort 信号的工具会永久钉住运行，session.abort() 永不返回（评论 2）**
SDK 1.1.0 中 `execute()` 不 settle 且忽略 `signal` 时，运行无法中止，`isStreaming` 恒为 true。虽已关闭，但揭示了 SDK 中止语义的健壮性边界。同批还有 #10755（`agent_settled` 期间调用 `prompt()` 过早 resolve）。
🔗 https://github.com/earendil-works/pi/issues/10754

---

## 重要 PR 进展（精选 10 条）

**1. #10751 [OPEN] feat(coding-agent): 采用 pi.dev 配置 schema**
将 pi.dev schema 端点设为生成配置 schema 的规范 `$id`，内置主题与示例改用已发布的 theme schema，并补充 models、settings、keybindings、theme 的 schema 文档。利于编辑器的配置校验与补全。
🔗 https://github.com/earendil-works/pi/pull/10751

**2. #10747 [OPEN] feat: 支持自定义 Cloudflare AI Gateway 域名与访问凭据**
修复 #10627，允许用户指定自有的网关域名和凭据，满足企业/自托管代理场景。
🔗 https://github.com/earendil-works/pi/pull/10747

**3. #10672 [OPEN] feat(ai, coding-agent): 仅列出某 API key 可用的 OpenRouter 模型**
每次刷新时结合内置目录、pi.dev 新目录与 `GET /models/user`，只保留该 key 可用的对话模型，并采用其上下文长度、最大输出与价格。解决模型列表与权限/计费不匹配的问题。
🔗 https://github.com/earendil-works/pi/pull/10672

**4. #10730 [OPEN] fix(tui): 修正全角标点旁的 CJK 粗体渲染**
修复 #10154，CommonMark 的 flanking 规则导致 `**这是测试。**后面` 这类写法无法闭合粗体，星号原样显示。改善中文用户的核心阅读体验。
🔗 https://github.com/earendil-works/pi/pull/10730

**5. #10739 [OPEN] fix(coding-agent): 为自定义消息触发的运行补发 before_agent_start**
`pi.sendMessage(..., { triggerTurn: true })` 启动的运行此前跳过该钩子，首次工具调用后的刷新会回退到基础提示选项，抹掉处理器追加的内容，导致系统提示词被悄悄改写。
🔗 https://github.com/earendil-works/pi/pull/10739

**6. #9126 [OPEN] fix(coding-agent): 在销毁前先 settle 工具结果**
修复 #9124，工具执行期间销毁 runtime 会在中断轮次落定前断开持久化，留下无对应结果的 assistant 工具调用。改为关闭与销毁前先 `await session.abort()`。
🔗 https://github.com/earendil-works/pi/pull/9126

**7. #9222 [OPEN] fix(coding-agent): 运行或压缩中拒绝 reload**
修复 #9221，扩展工具在等待期间若被 RPC/SDK 触发 reload，runner 失效后 `ctx.getSystemPrompt()` 抛 stale-context 错误。为扩展开发者消除一类难以复现的上下文失效。
🔗 https://github.com/earendil-works/pi/pull/9222

**8. #10726 [OPEN] fix: codemode 忽略 Node watch 通知**
修复 #10725，`node --watch` 会让 `sandbox.execute('return 42;')` 也失败（`Sandbox bridge broken: unknown message from the worker`），原因是 Node 在 worker 消息通道上发出依赖通知。改善沙箱宿主开发体验。
🔗 https://github.com/earendil-works/pi/pull/10726

**9. #10165 [OPEN] fix(coding-agent): 跟踪被丢弃的用户 bash 输出**
修复 #10164，用户 `!` 命令即使丢弃了前段内容，只要保留的尾部在限制内就报 `truncated: false`，模型因此既无截断提示也无完整日志路径。提升模型对命令输出的判断准确性。
🔗 https://github.com/earendil-works/pi/pull/10165

**10. #10663 [OPEN] feat(cli): 新增 `pi auth --continue`**
为在别处启动的认证流程提供通用续接入口，接受或提示输入 base64url JSON payload。有助于跨设备/跨介质的登录交接。
🔗 https://github.com/earendil-works/pi/pull/10663

---

## 功能需求趋势

1. **Windows 平台体验系统化治理**：#7547（使用方式调查）、#6300（输入重绘）、#9656（Zellij 滚轮）、#10645（编译版图片附件失效）共同构成当前最密集的问题簇，涉及终端兼容、TUI 渲染与二进制分发三个层面。
2. **扩展/钩子机制的语义补全**：#9773（`before_provider_request`）、#10739（`before_agent_start`）表明社区期待钩子在所有代码路径（压缩、摘要、自定义消息触发）上行为一致。
3. **多 provider 与代理网关适配**：#8643（Bedrock 图片）、#10157（AI Studio 思考签名）、#10747（Cloudflare 自定义网关）、#10672（OpenRouter 按 key 过滤模型），反映社区对异构 provider 一致性与可定制代理的强烈需求。
4. **RPC / SDK 作为集成基础的实施度**：#10606、#10754、#10755、#9126、#9155 集中暴露出并发、取消、生命周期时序问题，说明"以 SDK/RPC 嵌入自有宿主"已是主流用法。
5. **会话持久化与并发安全**：#8848（同一 session 文件并发写入无锁）、#10187（`deviceId` 不应放在全局设置、dotfiles 共享场景），指向 dotfiles 同步与多进程协作的工程化需求。
6. **中文/CJK 与国际化渲染**：#10730 修复中文粗体闭合，配合 #6300 的 TUI 重绘问题，显示非英文终端体验仍有缺口。

---

## 开发者关注点

- **Windows 优先级之争**：社区希望项目明确在 bug 修复、文档完善与体验优化之间如何分配精力（#7547），否则问题会持续零散堆积。
- **静默失败最伤信任**：RPC 提示被确认后丢弃（#10606）、bash 输出截断不上报（#10165）、扩展上下文失效（#9222）——共同点是错误不可见，调试成本高。
- **取消与生命周期语义**：忽略 abort 信号即可永久钉住运行（#10754），prompt 在 `agent_settled` 期间过早 resolve（#10755），这类时序问题直接影响宿主程序的稳定性。
- **配置与凭据的可移植性**：`deviceId` 放在全局设置会污染 dotfile 共享仓库（#10187）；自定义网关凭据支持（#10747）也是同类"配置应可自持"的诉求。
- **编译版与源码行为不一致**：Bun 编译二进制中 `resizeImage` 解析为 null（#10645），提示打包路径下的运行时差异需要专门的回归覆盖。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报（2026-10-09）

## 今日速览

Managed Agent 架构推进仍是社区绝对主线：Issue #12380（双路径架构与分阶段交付）以 51 条评论持续领跑，Stage D/G/H 相关跟踪 Issue 与 PR 密集更新。与此同时，XML 工具调用恢复相关的两个长期缺陷（#10700、#13492）进入 review 阶段，MCP 工具注册与刷新问题（#13632、#13796）成为新的工具链焦点。今日发布 v0.25.1-preview.1 与 v0.25.0 nightly 两个版本。

## 版本发布

**v0.25.1-preview.1** / **v0.25.0-nightly.20261009.085a44f336**

两个版本更新内容一致，均为两项变更：
- `fix(agents)`: 替换已选远程 Hosts 时不再丢失绑定（@yiliang114, PR #13430）
- `test(core)`: 关闭 #12693 的合并后评审（release notes 中描述被截断）

链接: https://github.com/QwenLM/qwen-code/releases

## 社区热点 Issues

1. **#12380** [OPEN] proposal(serve): 定义 Managed Agent 双路径架构与分阶段交付 — 51 条评论，本周期讨论最密集的架构提案，保留现有 TypeScript agent loop 并解耦模型推理与工具环境供给。是理解后续 Stage D–H 全部工作的顶层设计文档。
   https://github.com/QwenLM/qwen-code/issues/12380

2. **#13395** [OPEN] tracking(runtime): Kubernetes 工具运行时进度与跨平台交付门禁 — 19 条评论，追踪 Kubernetes runtime 的落地状态与交付门槛，涉及 Draft PR #13526 的进展同步。
   https://github.com/QwenLM/qwen-code/issues/13395

3. **#6710** [OPEN] [P1] fix(acp): 区分用户取消的 turn 与恢复后的意外中断 — 长达 3 个月的 P1 缺陷，2026-10-07 在 `1aba19c` 上仍可复现，已用真实 REST/SSE 请求验证。属于会话恢复语义的核心正确性问题。
   https://github.com/QwenLM/qwen-code/issues/6710

4. **#12867** [CLOSED] feat(managed-agent): Stage D 后续工作（持久化生命周期、Turns、Actions、admission、AgentDefinition）— 已关闭，覆盖 #12380 中 D1–D3 之后的剩余契约工作。
   https://github.com/QwenLM/qwen-code/issues/12867

5. **#13492** [OPEN] XML 工具调用恢复丢弃包含引号工具标记的外层调用 — PR #13515 已合并阻止引号标记被派发为真实调用，后续修复由 PR #13579 承接，处于 in-review。
   https://github.com/QwenLM/qwen-code/issues/13492

6. **#10700** [OPEN] 孤立工具调用闭合标签泄漏为纯文本：XML 恢复仅匹配成对 invoke — 2026-10-07 在真实 CLI/tmux 环境中仍可复现，与 #13492 同属 XML 解析健壮性缺陷族。
   https://github.com/QwenLM/qwen-code/issues/10700

7. **#13632** [OPEN] feat(mcp): 在收到 notifications/tools/list_changed 时刷新服务器工具 — MCP 生态的动态工具列表支持，交互式会话中重新执行 `tools/list` 并替换工具集。
   https://github.com/QwenLM/qwen-code/issues/13632

8. **#13796** [OPEN] HTTP MCP 服务器工具在整个会话中未注册，但 `qwen mcp list` 显示 "Connected" — 用户报告（Qwen Code 0.25.0 / Linux Mint 22.3，Zoteus 1.22.4 over streamable HTTP），状态显示与实际注册行为不一致，属较严重可用性问题。
   https://github.com/QwenLM/qwen-code/issues/13796

9. **#13800** [OPEN] [P1] 一个 recovery-blocked Session 会卡住同一 daemon 上其他 Session 的后续 turn — 高优先级 daemon 级隔离缺陷：journal 在 `hostedModelAttempt` 之后停止，既非拒绝也非报错，属静默卡死。
   https://github.com/QwenLM/qwen-code/issues/13800

10. **#2566** [OPEN] feat(core): 基于上下文压力的动态工具输出截断 — 自 2026-03 的老 Issue 仍在推进，关联 PR #13599 已更新至 `1e92fee`，涉及 context 性能治理。
    https://github.com/QwenLM/qwen-code/issues/2566

其他值得留意：#12952（Stage G 权威 Session 历史与 writer fencing）、#13533/#13532（Stage H3 后台进程观测与 Linux 物理验收）、#2596（`</think>` 尾巴问题）、#13758（OpenTUI 对话框溢出）、#13807（macOS Foundation Models 作为 Fast Model 时 500 错误）。

## 重要 PR 进展

1. **#13297** [autofix/takeover] fix(managed-runtime): 落地 PR #12691 评审后续修复（跨 providers、activator、core tools、runtime broker）— 10 个 Critical 全部修复，覆盖 25 条线程化发现。
   https://github.com/QwenLM/qwen-code/pull/13297

2. **#13530** feat(managed-agent): 执行已固定的 AgentDefinition 修订版 — 存储的 AgentDefinition 现在驱动 Session 执行（D8b/D8c-1/D8c-2），创建时固定 agent ID、revision 与 digest。
   https://github.com/QwenLM/qwen-code/pull/13530

3. **#13219** [autofix/takeover] fix(managed-agent): 为重试循环加上终止状态 — 修复异步重试循环无终止状态（以及一处永久卡死的 projection）问题，为每个循环引入预算与终态。
   https://github.com/QwenLM/qwen-code/pull/13219

4. **#13652** feat(core): 从生产者到注入端统计工具结果大小 — 在现有输出缩减边界上携带 raw/processed/final 三层大小估计，用于输出预算治理。
   https://github.com/QwenLM/qwen-code/pull/13652

5. **#13436** fix(acp): 在会话恢复中保留取消意图 — 新记录的用户取消携带显式来源且不可继续；旧记录与基础设施中断仍保持可恢复。
   https://github.com/QwenLM/qwen-code/pull/13436

6. **#13330** [autofix/takeover] fix(managed-agent): 来自 #12692 R2 评审的 connector 与 broker 健壮性 — 修复 8 项服务端后续问题，含可跨重启存活的 lifecycle fence。
   https://github.com/QwenLM/qwen-code/pull/13330

7. **#10709** fix(core): 重试孤立的 XML 工具调用闭合标签 — 通过现有有界无效流重试路径拒绝 `</parameter></invoke>` 类孤立片段，保留 fenced/indented 场景。
   https://github.com/QwenLM/qwen-code/pull/10709

8. **#13128** fix(core): 将失败或不可用的 LSP 诊断暴露为错误 — `NativeLspService.diagnostics()` 与 `workspaceDiagnostics()` 不再在无法获取诊断时返回干净结果。
   https://github.com/QwenLM/qwen-code/pull/13128

9. **#13664** feat(web-shell): 新增只读 Excel 产物预览 — 为 workspace 产物、@file 引用、待上传与附件提供 XLSX 预览，ExcelJS 运行在惰性加载的 inline worker 中。
   https://github.com/QwenLM/qwen-code/pull/13664

10. **#13771** fix(web-shell): 将待处理编辑 diff 限定到邻近上下文 — 编辑审批对话框与待处理卡片仅展示变更行及上下各最多 3 行未变更上下文。

11. **#12559** [autofix/takeover] fix(cli): 对齐 ink 的 OpenTUI 弹窗几何与补全截断 — 为每个弹窗提供与 ink 一致的固定裁剪区域，解决长弹窗推动布局的问题。
    https://github.com/QwenLM/qwen-code/pull/12559

12. **#13783** test(managed-agent): 放宽 HostedHarnessMySqlIT 生命周期预算以规避 CI MySQL 停顿（#13780）。
    https://github.com/QwenLM/qwen-code/pull/13783

## 功能需求趋势

- **Managed Agent 平台化（最强主线）**：Session 持久化生命周期、Turns/Actions 契约、writer fencing、多 agent 编排、daemon 级隔离，构成 Issue 与 PR 的主体（#12380、#12867、#12952、#13530、#13219、#13330）。
- **运行时与跨平台交付**：Kubernetes 工具运行时（#13395）、Linux 物理验收与后台进程监控（#13532、#13533）、平台分发包。
- **MCP 生态完善**：动态工具列表刷新（#13632）与 HTTP 服务器工具注册一致性（#13796）显示 MCP 会话管理仍是短板。
- **输出/上下文性能治理**：动态工具输出截断（#2566，PR #13599）、工具结果大小核算（#13652）。
- **内容生成与解析健壮性**：XML 工具调用恢复（#10700、#13492）、`</think>` 泄漏（#2596），是持续三个月的缺陷族。
- **记忆与去重**：memory 写入前语义去重检查（#13721）。
- **UI / Web Shell 体验**：限流中断后的「可用时继续」按钮（#13784）、OpenTUI 渲染几何（#13758）、Excel 产物预览（#13664）。
- **新模型/平台接入**：macOS Foundation Models（`fm serve`）作为 Fast Model 时触发 500（#13807）。

## 开发者关注点

1. **守护进程级故障隔离不足**：一个 `recovery_blocked` 的 Session 会静默卡住同一 daemon 上其他 Session 的后续 turn（#13800，P1），且表现为 journal 静默停止而非报错——排查成本高。
2. **会话恢复语义模糊**：用户主动取消与基础设施中断在恢复后难以区分（#6710，P1，已复现三个月）。
3. **状态展示与实际行为不一致**：`qwen mcp list` 显示 "Connected" 但工具整个会话未注册（#13796），会直接误导排障。
4. **XML 工具调用解析脆弱**：孤立闭合标签泄漏为纯文本、外层调用被丢弃，多次验证仍可复现（#10700、#13492），依赖真实 CLI/tmux 场景验证。
5. **长尾 Issue 生命周期偏长**：多个 P1/P2 缺陷自 2026-03、07 起持续存在，需依赖逐次 `Current main verification` 手动确认，社区期望更稳定的回归门禁。
6. **CI 稳定性影响交付节奏**：MySQL 停顿导致生命周期测试失败，需放宽预算或迁移到自托管池（#13783、#13627）。

---
数据来源：github.com/QwenLM/qwen-code（Releases、Issues、Pull Requests，截至 2026-10-09）。

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI 社区动态日报（2026-10-09）

> 数据来源：github.com/Hmbown/DeepSeek-TUI（Issue/PR 内容中多引用 codewhale-hq/Codewhale 仓库）

## 1. 今日速览

今日无新版本发布，但社区活动密集：0.10.2 候选版 PR #6907 关闭，围绕其收尾的文档与兼容性 Issue 集中出现；同时维护者 Hmbown 一次性提交了 RS-8 至 RS-14 共 7 个 runtime/TUI crate 拆分类 Issue，构成今日最大的一条工作主线。社区侧则出现汉化组号召（#6804）与多起性能/可靠性问题（TUI 滚动卡顿、CPU 占用回归、会话日志无上限）的持续讨论。

## 2. 版本发布

无新版本发布。相关背景：0.10.2 候选 PR #6907 已关闭，涉及 Terminal dock、shell 等待控制、Runtime 恢复与审批路由修复，以及首页改版。

## 3. 社区热点 Issues（10 条）

1. **#6804 [localization] 号召成立汉化组** — 作者 SparkofSpike。提出牵头成立小型汉化组，跟进开源英文/日文项目的文档汉化，并指出 LLM 翻译的文档"只停留在能读"。今日评论数最高（6 条），是当前社区参与度最高的议题。
   https://github.com/Hmbown/DeepSeek-TUI/issues/6804

2. **#6721 [enhancement, context, compaction, reliability] Emergency compaction 对 `save session` 任务的影响** — 用户 ronohara 报告 agent 在紧急压缩中被截断，影响其自定义上下文中转流程。属于可靠性反馈，非严格 bug。
   https://github.com/Hmbown/DeepSeek-TUI/issues/6721

3. **#6728 [bug, tui, performance, v0.10.2] CPU 占用回归** — 作者 Gabriel-Degret 在 FreeBSD 15.0 上对比三个二进制：v0.9.12 空闲、v0.9.13 中等、v0.10.0 偏高。带具体平台与产物分析，追踪价值高。
   https://github.com/Hmbown/DeepSeek-TUI/issues/6728

4. **#6652 [bug, tui, performance] TUI 长时间运行后滚动卡顿** — 作者 luestr，描述为"像果冻一样"的部分内容不同步。与 #6728 同属 TUI 性能方向。
   https://github.com/Hmbown/DeepSeek-TUI/issues/6652

5. **#6842 [bug, reliability, performance] 会话日志无上限** — 作者 7jrxt42BxFZo4iAnN4CX：压缩会淘汰活跃消息，但所有被取代的版本仍留在内存中。属内存增长类问题。
   https://github.com/Hmbown/DeepSeek-TUI/issues/6842

6. **#6923 [bug, enhancement, needs-triage] Gemini 429 错误应等待并自动重试** — 作者 Statter，请求在遇到 Gemini 限流时自动重试上一任务。待分诊状态。
   https://github.com/Hmbown/DeepSeek-TUI/issues/6923

7. **#6866 [enhancement, context, reliability, mcp] MCP 启动服务器失败/恢复时告知模型** — 作者 asto18089。当前 MCP 服务器启动失败时模型收不到任何信号，只是工具"消失"。属设计讨论类。
   https://github.com/Hmbown/DeepSeek-TUI/issues/6866

8. **#6944 [bug, ux, v0.10.2] 后台长任务不可见 + Full Access 阻断后台 API** — 维护者 Hmbown 自报：长命令以带超时的前台 `bash` 调用发布，随后静默转为后台；Full Access 又阻断了唯一的后台 API。
   https://github.com/Hmbown/DeepSeek-TUI/issues/6944

9. **#6945 [bug, workflow-runtime] Workflow verify gate 自指导致死锁** — 维护者 Hmbown 自报：`blocks_role` 指向自身角色时，运行会在最昂贵阶段前死锁，而非在 plan admission 阶段失败。
   https://github.com/Hmbown/DeepSeek-TUI/issues/6945

10. **#6934 [bug, tools] file_search 默认激活变更需同步公共工具面** — 维护者 Hmbown 自报：`web/` 的公共工具面契约测试失败，默认值变更未在同一 slice 内更新公开事实表。
    https://github.com/Hmbown/DeepSeek-TUI/issues/6934

> 另附两条 pet 功能追踪 Issue：#6109（共享 owner-contract fixture 与 TUI 外的 Engine 元数据生产者）、#6155（在真实终端中验证 /pet habitat 并接受 TUI + desktop 共享 owner），两者均标注在 0.10.1 为"部分完成"。
> https://github.com/Hmbown/DeepSeek-TUI/issues/6109 · https://github.com/Hmbown/DeepSeek-TUI/issues/6155

## 4. 重要 PR 进展（10 条）

1. **#6907 [CLOSED] [v0.10.2] Terminal dock、shell 等待控制、恢复与贡献者修复** — 维护者 Hmbown。0.10.2 候选：新增可用的 Terminal dock，允许操作者在不终止命令的情况下释放 shell 等待，修复共享 Runtime 恢复与审批路由，并围绕实际能力简化首页。今日已关闭。
   https://github.com/Hmbown/DeepSeek-TUI/pull/6907

2. **#6950 [contribution-gate] feat(plugins): CLI 安装与应用内 OAuth 登录** — 作者 LIghtJUNction。承接 #6805 引入的宿主托管 OAuth AI provider，解决用户仍需单独终端命令登录、从源码安装插件不便的问题。
   https://github.com/Hmbown/DeepSeek-TUI/pull/6950

3. **#6924 feat(runtime): 每个 runtime store 一个控制端点，每个 workspace 一个 driver** — 作者 gaord。修复同一机器上同一用户的两个客户端因共享控制 socket 而互相拒绝（`authenticated Runtime owner belongs to another...`）的问题。
   https://github.com/Hmbown/DeepSeek-TUI/pull/6924

4. **#6948 fix(tui): 说明阻塞会话切换的具体工作** — 作者 SparkofSpike。原先切换会话被拒时只提示"runtime work is active"，现在会指明是哪类工作（当前轮次、维护、后台任务）在阻塞。
   https://github.com/Hmbown/DeepSeek-TUI/pull/6948

5. **#6947 fix(artifacts): 解析链接状态的 state root** — 作者 SparkofSpike。修复 Windows 下 state 目录经 junction（把 `%USERPROFILE%\.codewhale` 放到其他卷的常见做法）访问时，所有会话产物写入失败的问题。
   https://github.com/Hmbown/DeepSeek-TUI/pull/6947

6. **#6949 fix(subagent): state root 重定位时重新锚定路径检查** — 作者 SparkofSpike。修复 `.codewhale` 为 junction 的工作区中所有 sub-agent 在第 0 步即失败的问题。与 #6947 属同一类重定位场景。
   https://github.com/Hmbown/DeepSeek-TUI/pull/6949

7. **#6946 [contribution-gate] chore: 移除 30 个已失效的 dead_code allow** — 作者 Lstarsky0。属 #5587 的"stale allows"收尾切片，通过 `RUSTFLAGS="--force-warn dead_code"` 逐项核对。
   https://github.com/Hmbown/DeepSeek-TUI/pull/6946

8. **#6943 [contribution-gate] chore(tui): 移除五个模块的 blanket dead_code allow** — 作者 Lstarsky0。同为 #5587 切片，其中 `worker_profile.rs` 的 allow 被确认完全失效。代码卫生类改动。
   https://github.com/Hmbown/DeepSeek-TUI/pull/6943

9. **依赖更新批次（dependabot）** — #6822 rio-vt 0.5.26→0.5.28、#6821 rmcp 3.4.0→3.5.0、#6826 uuid 1.26.0→1.27.0、#6823 thiserror 2.0.20→2.0.21、#6824 encoding_rs 0.8.41→0.8.42、#6825 dtolnay/rust-toolchain、#6811 /web 下 react 与 @types/react 联动更新。均为机器提交，尚未合并。
   https://github.com/Hmbown/DeepSeek-TUI/pull/6821 · https://github.com/Hmbown/DeepSeek-TUI/pull/6822

10. **维护者拆分系列 Issue 配套（当日新开）** — #6935 RS-8（auto-review 与 risk policy 移出 tui/ 进 core::authority）、#6936 RS-9（切断 engine 剩余的终端侧泄漏）、#6937 RS-10（十个可分离叶子模块迁入 codewhale-runtime）、#6938 RS-11（完成仅测试用向上边）、#6939 RS-12（迁移 crate-root helpers 与 CLI parse 类型）、#6940 RS-13（命令目录与键位帮助由非 UI owner 提供）、#6941 RS-14（强连通 runtime core 整体迁移，keystone 改动）。统一门槛为 `python3 scripts/split/module_graph.py --check` 对照 `scripts/runtime-boundary-baseline.json`。
    https://github.com/Hmbown/DeepSeek-TUI/issues/6941

## 5. 功能需求趋势

- **TUI 性能与稳定性**：#6652、#6728、#6842 共同指向长时间运行下的滚动卡顿、CPU 占用逐版本升高、以及会话日志内存无上限——性能是当前用户侧最集中的诉求。
- **运行时/架构拆分（维护者主导）**：RS-8 至 RS-14 构成一条完整的 crate 拆分序列，目标是让 runtime 与 UI 解耦、由 `runtime_api` 对外提供能力，属项目长期结构性方向。
- **运行时可靠性与恢复**：#6721（compaction 截断）、#6924（多客户端 owner 冲突）、#6944（后台任务不可见）、#6945（gate 死锁）集中反映恢复、审批路由与并发控制的薄弱点。
- **模型/Provider 接入体验**：#6923（Gemini 429 自动重试）、#6950（插件 OAuth 登录）显示用户希望多 provider 场景下的限流处理与认证流程更顺滑。
- **MCP 可观测性**：#6866 提出 MCP 启动失败与恢复时应主动告知模型，避免工具静默消失。
- **本地化与社区协作**：#6804 号召成立汉化组，是唯一由社区发起的组织型需求，评论数最高。
- **文档与公开契约一致性**：#6942（website MCP 页面 en/zh 与 task card 描述与已发布的默认开启行为不一致）、#6934（file_search 默认激活变更需同步公共工具面）显示文档/契约与实现漂移已被系统性追踪。

## 6. 开发者关注点

- **性能回归被精确量化**：用户给出跨版本二进制对比（82MB → 89MB → 90MB ELF）与具体平台（FreeBSD 15.0），说明核心用户群会做版本级性能追踪，回归难以被忽视。
- **长会话是主要痛点场景**：滚动卡顿、内存增长、compaction 截断均只在"长时间运行"后出现，指向会话生命周期管理是当前最薄弱环节。
- **状态目录重定位（Windows junction）连环故障**：SparkofSpike 一天内提交 #6947、#6949 两个同源修复，表明该场景此前完全不可用，对把状态放在非系统卷的用户影响直接。
- **错误信息可用性**：无论是 #6948 要求说明阻塞会话切换的具体工作，还是 #6866 要求 MCP 失败时告知模型，反馈都指向"静默失败"而非失败本身。
- **跨运行时并发语义**：#6924 反映同一用户多客户端在同一机器上的 owner 归属冲突，随着 runtime 拆分推进，这类边界问题预计会持续暴露。
- **贡献者结构**：当日 23 个 PR 中大量来自 dependabot，实际功能性 PR 集中在少数几位贡献者（SparkofSpike、Lstarsky0、gaord、LIghtJUNction）与维护者本人，社区代码贡献面仍偏窄，而 #6804 的汉化倡议正是对这一状况的回应。

</details>

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar) 自动生成。*