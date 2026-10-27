# AI CLI 工具社区动态日报 2026-09-11

> 生成时间: 2026-09-11 11:49 UTC | 覆盖工具: 9 个

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

# AI CLI 工具生态横向对比分析报告（2026-09-11）

> 数据基础：本报告全部结论均来自所提供各工具当日社区动态摘要，未引入外部信息。部分工具当日数据量较少，相关判断已注明样本限制。

---

## 1. 生态全景

当前 AI CLI 工具整体处于**"功能扩张与稳定性债务并存"**的阶段：版本迭代速度普遍较快（Codex 单日多个 alpha、Qwen Code 稳定版 + SDK 双发），但社区讨论的重心已明显从"要新功能"转向"别挂、别丢、别静默失败"。**沙箱/网络出口策略、会话历史持久化、子 agent 生命周期与状态可信度**成为跨工具的共性痛点，Claude Code 的 Cowork 出口白名单回归、Codex 与 Qwen Code 的历史丢失、Gemini CLI 的子 agent 挂起与误报成功，均属同一类问题。与此同时，**MCP 协议合规性与 Provider/模型自动发现**作为扩展生态和接入体验的关键环节，在多个仓库同时进入磨合期。总体看，行业正从"能跑通"迈向"可诊断、可配置、可信任"，配置项被静默忽略、无错误信息等问题被反复点名，是这一阶段最典型的信号。

---

## 2. 各工具活跃度对比

| 工具 | Issues（本期列出） | PR（本期列出/更新） | Release | 备注 |
|---|---|---|---|---|
| **Claude Code** | 10 条热点 + 3 条补充 | 3 条（全部列出，未凑满 10） | v2.1.268 | 网关口径统一；出口白名单回归集中爆发 |
| **OpenAI Codex** | 10 条热点 + 4 条补充 | 10 条（+5 条其他） | Python SDK 0.154.0；Rust 0.155.0-alpha 系列多个 | 当日 alpha 迭代最密集 |
| **Gemini CLI** | 10 条 | 10 条 | v0.61.0-nightly.20260911 | 夜间例行构建，无重大变更 |
| **GitHub Copilot CLI** | 10 条 + 多条补充 | 2 条（数据仅 2 条） | v1.0.84-4 | 发布仅见 Added 部分 |
| **Kimi Code CLI** | 2 条（全部） | 0 条 | 无 | 样本极小，仅可观察个别问题 |
| **OpenCode** | 10 条 | 10 条 | 无 | Issue 热度最高（#6231：57 评论 / 232 👍） |
| **Pi** | 10 条 + 3 条补充 | 10 条 + 6 条其他 | 无 | 性能与压缩机制问题集中 |
| **Qwen Code** | 10 条 + 多条补充 | 10 条 + 5 条其他 | v0.23.3 稳定版 + TS SDK v0.1.12 | 含破坏性变更信号 |
| **DeepSeek TUI** | 10 条 | 11 条 | 无 | 测试基础设施与 ClickHouse 分析栈主题 |

**说明**：Issue/PR 计数取自各摘要明确列出的条目，部分仓库原始数据本身不足 10 条或仅提供部分变更类别，已如实标注，不构成完整总量统计。

---

## 3. 共同关注的功能方向

以下方向在**多个工具社区同时出现**，是本日最具共识性的诉求：

### （1）会话历史与状态持久化
- **OpenAI Codex**：#15349（重启丢历史/上下文）、#43124（历史冻结在旧轮次，迁移报 `already_paginated`）
- **Qwen Code**：#11574（扩展更新后历史会话全部隐藏，`sourceType` 元数据缺失）
- **Pi**：#9459（恢复会话时应优先采用已记录的模型变更）
- **Claude Code**：#85624（重启后 worktree 会话在历史搜索中不可见）

> 共性：跨设备、跨版本、重启后的"状态一致性"普遍未解决。

### （2）沙箱 / 网络出口与权限一致性
- **Claude Code**：#30112、#93525、#93507、#93562（出口白名单失效，"All domains"仍 403，明确 regression）
- **Gemini CLI**：#29184（Windows 沙箱静默 `git diff --output`）、#29186（exitCode 判空）、#22672（劝阻破坏性 git 操作）
- **OpenAI Codex**：PR #44755 / #44746 / #44732（文件夹信任校验）、#42115（文件操作缺 manifest/回滚）
- **DeepSeek TUI**：PR #6054（增强 deny 匹配）、#6052（`finance` 工具绕过 network_policy）

> 共性：**"配置声明与实际执行不一致"**是反复出现的信任成本来源。

### （3）Provider / 模型接入标准化
- **OpenCode**：#6231（OpenAI 兼容端点自动发现模型，232 👍）+ PR #48486；#4232（显示未配置模型）
- **OpenAI Codex**：#26472（模型选择不应持久化写 config）
- **Pi**：#8810（扩展注册 provider 默认模型被间歇忽略）、#9331（Bedrock 下 reasoning effort 从未发送）、#8752（usage.input 未归一化致成本翻倍）
- **Qwen Code**：PR #11349（扩展 Kimi/Qwen/DeepSeek 推理预设）

> 共性：多 provider 场景下，模型元数据同步与行为一致性是核心挑战。

### （4）配额 / 用量可视化与计费透明
- **OpenAI Codex**：#24182（常驻显示 5 小时/每周额度，15 👍）、#44262（配额跳变并中断任务）
- **OpenCode**：#5374（tokens/second，109 👍）、#48330（v2 单次耗尽 Copilot 配额）、#45278（支付被拒）
- **Claude Code**：v2.1.268 统一网关 `pricing:` 与 `/cost`、遥测口径

> 共性：付费用户对"花了多少、为什么被扣"的透明诉求强烈。

### （5）非核心功能可关闭 / 配置可控
- **OpenAI Codex**：#34349（禁用 Pets，46 👍，本期最高赞之一）、#44561（默认关闭 whimsy）
- **Pi**：#8133（按模型配置 compaction profiles，5 👍）
- **Gemini CLI**：#22267（浏览器 agent 完全忽略 settings.json 的 maxTurns）

### （6）MCP 生态可靠性
- **GitHub Copilot CLI**：#4809 / #4370（`server/discover` 违反 MCP 生命周期规范，FastMCP 返回 -32602）
- **OpenCode**：#33027（MCP 工具已连接但未暴露给 agent）
- **Kimi Code CLI**：#1388（CentOS 7.9 下 MCP 连接失败，历时约半年关闭）

---

## 4. 差异化定位分析

| 维度 | 工具与特点 |
|---|---|
| **企业 / 网关导向** | **Claude Code**：`gateway.yaml`、`pricing:`、`access_control.allow_cidrs`、managed settings，明显偏企业部署与统一计量；**OpenAI Codex**：文件夹信任、Windows 沙箱服务发布、托管默认值保护 |
| **Agent 调度架构探索** | **Gemini CLI**：子 agent 生命周期（#22323、#21409、#21968）、AST 感知代码理解（#22745）、持久化任务追踪（#18836），路线最"agent-native" |
| **本地 / 多 provider 中立** | **OpenCode**：强调 OpenAI 兼容端点自动发现、组织级路由（PR #48483）、自定义 provider；**Pi**：`registerProvider` 扩展 API、per-model compaction、多 provider 一致性 |
| **轻量 SDK 与运行时输出** | **OpenAI Codex**：同时维护 Rust 通道与 Python SDK，关注 JSONL 输出纯净度；**Qwen Code**：CLI + TypeScript SDK 捆绑发布，daemon 会话管理成体系（#11386、PR #8927） |
| **终端体验 / 键盘工作流** | **GitHub Copilot CLI**：vim 模式（76 👍）、Ctrl+Backspace、`@` 补全；**Pi**：TUI 冻结与流式性能；**DeepSeek TUI**：输入弹窗 UI 缺陷（#6045） |
| **可观测性 / 分析栈** | **DeepSeek TUI**：ClickHouse 分析栈四连（PR #6019–#6022）、Langfuse vs 自建 tracing 决策（PR #6024），目标是用真实数据回答"哪个模型多贵多快" |

**目标用户推测**：
- Claude Code、OpenAI Codex、GitHub Copilot CLI —— 企业团队与 IDE 深度用户
- OpenCode、Pi —— 自托管 / 多 provider / 代理网关用户
- Gemini CLI、Qwen Code —— 平台生态（Google / 阿里）内的集成开发者
- DeepSeek TUI —— 关注分析可观测性的工程团队
- Kimi Code CLI —— 样本过小，暂不明确定位

---

## 5. 社区热度与成熟度

**热度最高的信号（以 👍 / 评论为准）**：
- **OpenCode #6231**：57 评论 / 232 👍，且有 PR #48486 对应，是本期"需求—落地"闭环最明确的案例
- **GitHub Copilot CLI #13（vim 模式）**：76 👍，已关闭，落地形式待观察
- **Claude Code #36151（多账号切换）**：715 👍 / 174 评论，长期霸榜，但创建于 2026-03-19 至今未实现
- **OpenAI Codex #34349（禁用 Pets）**：46 👍
- **Gemini CLI #21409（agent 挂起）**：8 条评论中 👍 最高

**快速迭代阶段**：
- **OpenAI Codex**：0.155.0-alpha 系列单日多个预发布 + Python SDK 0.154.0，主干高速演进
- **Qwen Code**：稳定版 + SDK 同发，且带破坏性变更信号（`feat(channels)!: remove me...`），处于主动重构期
- **OpenCode**：v2 分支迁移带来回归（#48330、#38567、#44725），属"重构阵痛期"

**成熟度相对稳健**：
- **Claude Code**：有明确版本节奏（v2.1.268）与网关配置演进，但本期因网络出口 regression 暴露稳定性短板
- **GitHub Copilot CLI**：发布节奏稳定，但 Windows/WSL2 稳定性问题长期未闭环（#4026 自 2026-05 起）

**样本受限**：
- **Kimi Code CLI**：仅 2 条 Issue 更新、0 条 PR、无 Release，社区热度尚无法评估；#2640（Linux/WSL2 硬死锁）虽严重但零评论零点赞，未见社区响应
- **DeepSeek TUI**：#6082（眼科编码）等无关 Issue 混入，反映分类治理不足

---

## 6. 值得关注的趋势信号

### （1）"回归"成为高频关键词，发版验证压力上升
Claude Code 的出口白名单 regression（#93507 给出精确时间点 2026-09-10 ~23:15 UTC）、Codex 的 #44687 / #44720（当日新建即 11 评论）、Qwen Code 的 #48330（v2 回归耗尽配额）、Copilot CLI 的 #3700（高严重度回归）——多个工具在同一时期出现新版本回归。
> **对开发者的参考**：升级窗口需谨慎，建议关注各仓库 `regression` 标签；生产环境不宜自动跟随 alpha / nightly。

### （2）配置可信度成为信任基础
Claude Code "All domains 仍 403"、Gemini CLI "maxTurns 被完全忽略"、Pi "无效 `--mode` 被静默吞掉"、Codex PR #44691（对未识别配置项告警）——社区对"写进配置就等于生效"的假设正在被打破。
> **对开发者的参考**：优先选择对未知配置发出警告、对权限决策透明化的工具版本。

### （3）静默失败比崩溃更令人困扰
OpenCode #48455 / #47796（"无报错、无反应"）、Pi #9294 / #9331、DeepSeek TUI #6048（直接抛 Google 原始 400）——**错误可操作化**正成为新的质量标尺。
> **对开发者的参考**：评估工具时，可优先关注其错误信息是否给出"下一步该做什么"。

### （4）自动恢复机制本身需要被信任
Pi #8061（compact-and-retry 以同样原因失败）、Claude Code #92434（自动压缩溢出）、Copilot CLI #4764（自动批准约 1 小时后失效）——自动化的"善后逻辑"若不可靠，反而放大不确定性。
> **对开发者的参考**：长会话场景应预留手动干预路径。

### （5）隐私处理时序被提上审计层面
Qwen Code #11198（遥测上传未脱敏的原始工具错误文本，含 shell 命令行，默认开启）、Gemini CLI #26525（Auto Memory 脱敏发生在内容已送出之后）——"先发送再处理"的设计正受到明确质疑。
> **对开发者的参考**：企业部署前应核查遥测默认开关与脱敏时序。

### （6）可观测性从"日志"走向"数据栈"
DeepSeek TUI 的 ClickHouse 分析栈、OpenCode 的 tokens/s 展示、Codex 的额度常驻显示、Claude Code 的 `/cost` 与遥测统一——**用量、成本、性能的可解释性**成为下一阶段竞争力。
> **对开发者的参考**：选型时可关注工具是否提供结构化用量数据导出能力。

### （7）外部强制变更的风险管理
DeepSeek TUI #6025：DeepSeek 计划 2026-09-14 12:00（北京时间）下线 V4 Pro，请求将路由至 V4.1 Flash 并计费。这是本期唯一明确标注的**外部强制变更**，涉及计费差异。
> **对开发者的参考**：依赖第三方模型的工具链需建立模型下线监测与快速切换机制。

---

*本报告所有数据、Issue/PR 编号、👍 数与评论数均严格取自用户提供的各工具社区动态摘要，未进行任何数据推算或外部补充。部分工具样本量不足，相关结论已作限定说明。*

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告

> 数据来源：github.com/anthropics/skills，截止 2026-09-11。PR 评论数在当前数据集中未提供具体数值，下文排序依据任务给定顺序与更新活跃度。

---

## 1. 热门 Skills 排行（PR）

| # | Skill / PR | 功能 | 讨论热点 | 状态 |
|---|---|---|---|---|
| 1 | [#1298 fix(skill-creator)](https://github.com/anthropics/skills/pull/1298) | 修复 `run_eval.py` 始终报 0% recall，安装 eval 产物为真实 skill，并修 Windows 流读取、触发检测、并行 worker | 关联 #556（10+ 次独立复现），skill-creator 评测链路整体失效 | OPEN |
| 2 | [#514 document-typography](https://github.com/anthropics/skills/pull/514) | 生成文档的排版质量控制：孤词换行、孤行段落、编号错位 | 面向所有 AI 生成文档的通用排版问题 | OPEN |
| 3 | [#1615 scnet-hpc](https://github.com/anthropics/skills/pull/1615) | 通过 profile 化 SSH 与 Slurm 工作流操作 SCNet HPC 集群 | 高性能计算场景接入，连接/分区/内存/模块/加速器指导 | OPEN |
| 4 | [#486 ODT skill](https://github.com/anthropics/skills/pull/486) | 创建/填写/读取/转换 OpenDocument（.odt/.ods），并解析 ODT 到 HTML | 补齐 LibreOffice/ODF 文档格式支持 | OPEN |
| 5 | [#1628 Hivemind](https://github.com/anthropics/skills/pull/1628) | 零成本多智能体编排：Claude Code 作为唯一 planner/reviewer/merger，把机械工作委派给 headless opencode worker | 用免费模型承担机械工作的成本优化思路 | OPEN |
| 6 | [#210 frontend-design 改进](https://github.com/anthropics/skills/pull/210) | 提升 frontend-design skill 的清晰度、可执行性与内部一致性 | 让指令变成 Claude 单轮会话中真正可执行的步骤 | OPEN |
| 7 | [#83 skill-quality-analyzer / skill-security-analyzer](https://github.com/anthropics/skills/pull/83) | 两个元 skill：五维度质量分析 + 安全分析，加入 marketplace 的 example-skills | 对 skill 本身做质量与安全审计 | OPEN |
| 8 | [#1367 self-audit](https://github.com/anthropics/skills/pull/1367) | 交付前审计 AI 输出：先机械文件校验，再按损害严重度做四维推理质量门禁（v1.3.0） | 通用性（任意项目/技术栈/模型）+ 推理质量把关 | OPEN |

---

## 2. 社区需求趋势（Issues）

- **安全与信任边界**：社区技能以 `anthropic/` 命名空间分发，冒充官方技能，可能诱导用户授予过高权限 → [#492](https://github.com/anthropics/skills/issues/492)（43 评论，本数据集最高）。
- **组织级技能共享**：希望 Claude.ai 内直接共享 skill，而非下载 `.skill` 文件经 Slack/Teams 手动上传 → [#228](https://github.com/anthropics/skills/issues/228)（16 评论，👍8）。
- **skill-creator 评测可靠性**：`run_eval.py` 中 `claude -p` 从不触发 skill/命令（全查询 0% 触发率） → [#556](https://github.com/anthropics/skills/issues/556)（12 评论，👍7）。
- **上下文窗口治理**：`claude-api` skill 单次工具调用注入约 156k tokens 耗尽上下文 → [#1487](https://github.com/anthropics/skills/issues/1487)；SPO 文档处理中的安全与上下文担忧 → [#1175](https://github.com/anthropics/skills/issues/1175)（已关闭）。
- **安装/分发体验**：`document-skills` 与 `example-skills` 插件内容完全相同导致重复 skill → [#189](https://github.com/anthropics/skills/issues/189)（👍9）。
- **新 Skill 方向提议**：
  - agent 治理与安全模式（策略执行、威胁检测、信任评分、审计追踪）→ [#412](https://github.com/anthropics/skills/issues/412)（已关闭）
  - 推理质量门禁流水线（任务前校准 → 对抗评审 → 交付验证）→ [#1385](https://github.com/anthropics/skills/issues/1385)
  - compact-memory：用符号化记法压缩长时运行 agent 的状态 → [#1329](https://github.com/anthropics/skills/issues/1329)
- **平台与集成诉求**：AWS Bedrock 上使用 skills → [#29](https://github.com/anthropics/skills/issues/29)；将 Skills 暴露为 MCP → [#16](https://github.com/anthropics/skills/issues/16)。

**趋势归纳**：文档格式扩展（ODT/DOCX/PDF 修复）、多智能体与成本优化编排、skill 自身的质量与安全审计、以及安装分发和上下文效率，是社区集中提出的方向。

---

## 3. 高潜力待合并 Skills（活跃 OPEN PR）

| PR | 亮点 | 近期更新 |
|---|---|---|
| [#1742 fix(mcp-builder)](https://github.com/anthropics/skills/pull/1742) | 支持 `mcp>=2` 的 `streamable_http_client` 导入与自定义 header，修复 #1668 | 2026-09-11 |
| [#1734 检测孤儿 docx 评论](https://github.com/anthropics/skills/pull/1734) | docx 评论一致性检测 | 2026-09-10 |
| [#1724 mcp-builder 评测默认模型](https://github.com/anthropics/skills/pull/1724) | 将 `evaluation.py` 默认模型从 `claude-3-7-sonnet-20250219` 更新为 `claude-sonnet-5` | 2026-09-07 |
| [#1607 claude-api 模型退役标记](https://github.com/anthropics/skills/pull/1607) | 标记四个已退役模型 ID，修复 #1603 | 2026-09-01 |
| [#1627 buffer-api](https://github.com/anthropics/skills/pull/1627) | Buffer GraphQL 社交帖排期/管理/分析，宣称可移植到多 agent | 2026-09-05 |
| [#1595 加入 UIZZE 合作技能](https://github.com/anthropics/skills/pull/1595) | 免费 anti-ui-slop skill，产品级 UI 方向与完成门禁 | 2026-08-29 |
| [#1602 评测与脚本稳定性修复](https://github.com/anthropics/skills/pull/1602) | 修复 MCP 结果序列化、基准指标、编码与脚本稳定性 | 2026-08-24 |
| [#1615 scnet-hpc](https://github.com/anthropics/skills/pull/1615) | HPC 集群操作 skill | 2026-08-24 |

---

## 4. Skills 生态洞察

**当前社区最集中的诉求是：让 Skills 本身可信、可评测、可高效加载——即在扩展文档格式与自动化场景之前，先解决命名空间信任、评测链路失效和上下文膨胀这三类基础设施问题。**

---

# Claude Code 社区动态日报（2026-09-11）

> 数据来源：github.com/anthropics/claude-code

---

## 1. 今日速览

今日社区最突出的信号是 **Cowork 网络出口（egress allowlist）大面积失效**：多个新提交的回归报告指出，即使账户设置为"允许所有域名"，本地沙箱与云端容器仍对绝大多数域名返回 403，问题时间点集中在 2026-09-10 至 09-11。与此同时，v2.1.268 发布，将网关 `pricing:` 配置与客户端 `/cost` 及遥测口径对齐。此外，**多账号切换（#36151，👍715）** 长期保持最高热度，仍是社区呼声最大的未实现需求。

---

## 2. 版本发布

### v2.1.268
- **网关计费口径统一**：在 `gateway.yaml` 中设置 `pricing:` 后，已登录的 Claude Code 客户端通过 managed settings 获得相同费率，使 `/cost` 与遥测数据与实际消费计量保持一致。
- **网关启动告警**：当 `access_control.allow_cidrs` 为空时，网关启动阶段会给出警告。

---

## 3. 社区热点 Issues

以下 10 条为今日最值得关注的 Issue：

**1. #36151 [OPEN] 移动端多账号切换（不带共享邮箱）** — 👍715 / 评论 174
创建于 2026-03-19，热度长期位居榜首，说明多账号隔离是企业与个人用户共同的强需求。
https://github.com/anthropics/claude-code/issues/36151

**2. #53247 [OPEN] Windows 桌面端启动失败（Silo / Job Object 残留）** — 👍30 / 评论 77
应用崩溃后残留孤立 Job Object，导致仅能通过注销或重启恢复，涉及 HRESULT 0x80070020 与 AppModel-Runtime EventID 215/208，属于影响面较广的 Windows 平台稳定性问题。
https://github.com/anthropics/claude-code/issues/53247

**3. #30112 [OPEN] Cowork 出口白名单失效，自定义域名被 403 拦截** — 👍56 / 评论 64
与今日多条新回归报告同源，是出口策略问题的早期信号，社区反馈积累已相当充分。
https://github.com/anthropics/claude-code/issues/30112

**4. #93525 [OPEN] Cowork 云沙箱出口白名单坍缩至约 5 个主机（标记 duplicate / regression）** — 评论 8
明确指出设置为"All domains"时仍只放行极少数内置主机，与 #30112 相互印证。
https://github.com/anthropics/claude-code/issues/93525

**5. #93507 [OPEN] macOS Cowork 本地沙箱无网络路由，云端代理对全部域名返回 403** — 👍1 / 评论 4
报告了明确的时间点回归（自 2026-09-10 ~23:15 UTC），是本次回归事件中信息最完整的报告之一。
https://github.com/anthropics/claude-code/issues/93507

**6. #93562 [OPEN] 出口白名单忽略 "All domains"，CONNECT 请求 403（回归 09-10 → 09-11）** — 👍3 / 评论 2
从 `area:routines` 角度补充了同一回归的表现，说明影响范围已超出单纯网络层。
https://github.com/anthropics/claude-code/issues/93562

**7. #93494 [OPEN] macOS Cowork 会话中途全部出站连接丢失（桌面工作区与云容器同时）** — 👍3 / 评论 3
强调文件访问不受影响、仅网络中断，对定位问题边界有参考价值。
https://github.com/anthropics/claude-code/issues/93494

**8. #92434 [OPEN] 自动压缩基于上一轮 token 数判断，导致指令文件重注入时溢出** — 👍0 / 评论 5（含复现）
涉及核心上下文管理逻辑，对长会话用户影响直接。
https://github.com/anthropics/claude-code/issues/92434

**9. #88430 [OPEN] VS Code 扩展 2.1.235+：新面板获得焦点但输入框未聚焦，吞掉所有快捷键** — 👍1 / 评论 4（回归）
影响 IDE 高频操作流，属于体验类回归中较典型的一例。
https://github.com/anthropics/claude-code/issues/88430

**10. #85624 [OPEN] VS Code 扩展 2.1.226：重启后 worktree 会话在历史搜索中不可见** — 👍1 / 评论 8
同时涉及三个会话恢复问题，反映 worktree 与会话历史之间的集成缺口。
https://github.com/anthropics/claude-code/issues/85624

**其他值得留意：**
- #68071 [OPEN] 希望 Claude Code 会话能将技能发布到账号级 Skills store（👍4）
  https://github.com/anthropics/claude-code/issues/68071
- #85118 [OPEN] worktree 隔离仅覆盖 git 而不覆盖 jj，隔离会话会静默读写主 checkout
  https://github.com/anthropics/claude-code/issues/85118
- #91717 [OPEN] 桌面端更新后 Remote Control 返回 HTTP 403，重试无法恢复
  https://github.com/anthropics/claude-code/issues/91717

---

## 4. 重要 PR 进展

过去 24 小时内更新的 PR 共 3 条，全部列出：

**1. #42205 [CLOSED] fix(hookify)：规范化工具匹配器解析**
修复 Hookify 工具匹配字符串在分隔符两侧含空格时无法匹配的问题（如 `Edit or Write` 因拆分后未 trim 而失败），改动为对比较前的值做裁剪处理。
https://github.com/anthropics/claude-code/pull/42205

**2. #93452 [OPEN] mods/diff：对齐内置 /diff 面板**
将 `/diff` mod 的窗格与内置 diff 面板对齐，包括通过引擎 code 元素绘制 hunk、内置的关闭 ✕、行间距与空状态位置、窄终端下的 resize 分隔线，以及一处仓库探测逻辑。
https://github.com/anthropics/claude-code/pull/93452

**3. #93244 [CLOSED] mods：API 重命名、遥测修复与 diff 后端接缝**
跟进插件 API 的命名调整（diff mod 中的 `isFocused`、`tool`），收紧遥测（行按序上报、每行读取全部分析开关、第三方 provider 不上报任何数据），并为 diff mod 引入后端接缝。
https://github.com/anthropics/claude-code/pull/93244

> 说明：本次数据仅包含 3 条 PR，未凑满 10 条；其余条目不在所给材料范围内。

---

## 5. 功能需求趋势

从今日 Issue 分布可提炼出以下方向：

- **网络与沙箱策略（今日最集中）**：出口白名单、域名放行、本地/云沙箱网络路由，涉及 `area:networking`、`area:sandbox`、`area:cowork`，多条被标记为 regression 或 duplicate。
- **多账号与认证**：以 #36151 为代表，覆盖移动端与桌面端的账号隔离、Remote Control 鉴权（#91717）。
- **IDE 集成（VS Code）**：会话恢复、worktree 历史检索、面板焦点与快捷键冲突。
- **技能与扩展生态**：Skills store 发布流程（#68071）、插件 API 与 mod 体系（PR #93244、#93452）、Hookify 匹配（PR #42205）。
- **核心上下文与隔离机制**：自动压缩判断时机（#92434）、worktree 隔离对 jj 等工具覆盖不全（#85118）。
- **网关与企业配置**：本次版本新增的 `pricing:` 与 `access_control.allow_cidrs` 告警，属于企业侧配置可观测性方向。

---

## 6. 开发者关注点

- **回归问题的紧迫性**：多条 issue 明确标注 `regression` 并给出精确时间点（如 #93507 的 2026-09-10 ~23:15 UTC），说明出口策略变更对生产使用造成直接阻断，是需要优先处理的痛点。
- **设置不生效的信任成本**：多处反馈"设置为 All domains 仍被 403"（#93525、#93562）、`permissions.allow` 条目被忽略（#80658、#81535），配置与实际行为不一致反复出现。
- **权限与隔离的边界**：worktree 隔离对 git 有效但 jj 无效（#85118），以及子代理后台任务泄漏、状态误报（#86345、#86471、#86518），反映隔离与生命周期管理仍不严密。
- **长会话稳定性**：自动压缩溢出（#92434）、后台子代理返回空结果（#86471）、agent-team 注册表不清空（#86518），集中在长时间、多代理运行场景。
- **平台差异**：Windows（#53247、#86345、#86518）、macOS（#92434、#93507、#93494）、Linux（#86197）各有独立问题，跨平台一致性仍是关注点。

---

*注：本日报所有内容均基于所提供的数据，未补充外部信息。*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报（2026-09-11）

## 1. 今日速览

今日 Codex 仓库以 0.155.0-alpha 系列 Rust 构建的高频迭代为主，同时发布 Python SDK 0.154.0，新增 `max` 与 `ultra` 两档 reasoning-effort。PR 侧集中修复 TUI/Agent Command Center 的文件夹信任校验、语音字幕排序、Linux 语音运行时打包与 Windows 沙箱服务发布等基础设施问题。社区 Issue 热度则集中在会话历史丢失、Windows 桌面端缺陷、用量配额显示异常与 Pets/whimsy 等可配置性诉求上。

---

## 2. 版本发布

**Python SDK 0.154.0**（`pip install --upgrade openai-codex==0.154.0`，需 Python 3.10+，含配套 `openai-codex-cli-bin==0.154.0` 运行时）
- 新增 `max` 和 `ultra` 两档 reasoning-effort 取值（PR #39662）
- 同步版新增 `ExternalMessage`
- 链接：https://github.com/openai/codex/pull/39662

**Rust 通道**：过去 24 小时连续发布 0.155.0-alpha.1 / alpha.2 / alpha.2.3 / alpha.3 / alpha.3.7 / alpha.3.8，以及 0.154.0-alpha.6.2，均为 alpha 预发布，发布说明未提供细节，反映主干处于快速迭代期。

**voice-cygwin-108b38cf67cbb731**：Windows 原生语音发布的 CI 专用构建输入（`cygwin-build-inputs.tar.gz` 含 103 个固定版本 Cygwin 二进制包及签名索引；`cygwin-build-sources.tar` 含 83 个对应源码）。官方明确说明这些归档**不包含在** Codex 用户分发包中。

---

## 3. 社区热点 Issues

1. **#34499 [OPEN] Windows 桌面端无法在 ChatGPT Project 内创建本地 Work chat** — 27 条评论、16 👍，是今日讨论量最高的 Issue，自 2026-07-21 创建至今仍在更新，说明该问题长期未解。
   https://github.com/openai/codex/issues/34499

2. **#9282 [CLOSED] 企业账号 device auth 缺少 workspace admin 启用选项** — 24 条评论，已关闭，对企业/Business 用户登录链路有直接价值。
   https://github.com/openai/codex/issues/9282

3. **#24182 [OPEN] 请求在 App 中常驻显示 5 小时与每周用量额度** — 14 条评论、15 👍，反映出用户不愿为查额度专门打开 Settings。
   https://github.com/openai/codex/issues/24182

4. **#43124 [OPEN] macOS 桌面端历史冻结在旧轮次（ordinal 3185 vs 3184，迁移报 already_paginated）** — 13 条评论，属会话持久化/分页迁移的数据一致性问题。
   https://github.com/openai/codex/issues/43124

5. **#15349 [OPEN] 应用重启后大量近期对话轮次/历史/上下文丢失** — 11 条评论、8 👍，与 #43124 同属历史丢失主题，跨版本长期存在。
   https://github.com/openai/codex/issues/15349

6. **#44687 [OPEN] macOS App 26.908.31457 路由预取报 "r is not a function"** — 当日新建即 11 条评论，属最新版本回归，影响面可能较广。
   https://github.com/openai/codex/issues/44687

7. **#44720 [OPEN] ChatGPT "hit a snag" 报错可复现** — 当日新建、11 条评论，20x Pro 用户反馈。
   https://github.com/openai/codex/issues/44720

8. **#34349 [OPEN] 功能请求：完全禁用 Pets 并从侧栏移除入口** — 10 条评论但高达 **46 👍**，是今日点赞最高的诉求之一，社区对非核心功能的可关闭性呼声强烈。
   https://github.com/openai/codex/issues/34349

9. **#44561 [OPEN] 请求默认关闭 whimsy 特效（Astra stars）** — 9 条评论、9 👍，用户希望不必手动往 config 写 `[tui] whimsy = false`。
   https://github.com/openai/codex/issues/44561

10. **#44262 [OPEN] 每周配额从约 3% 跳至 52%，重置日 9/15→9/13 后回滚并中断任务** — 7 条评论，涉及配额状态一致性与任务中断，直接影响付费用户信任。
    https://github.com/openai/codex/issues/44262

另外值得留意：#26472（模型选择不应持久化写入 config，24 👍）、#15379（父进程退出后残留孤儿子进程）、#42115（文件操作中丢失任务焦点，缺少 manifest/回滚保护）、#43189（Daybreak 已验证仍提示内容无法显示）。

---

## 4. 重要 PR 进展

1. **#44755 在创建或恢复 TUI 任务前检查文件夹授权**（已关闭）— 从 Agent Command Center 派发任务、恢复会话、打开已加载任务时均校验目录信任。
   https://github.com/openai/codex/pull/44755

2. **#44746 在解析启动目标后再检查文件夹信任**（已关闭）— 恢复/分叉会改变工作目录，授权需覆盖最终选定目标。
   https://github.com/openai/codex/pull/44746

3. **#44732 明确文件夹信任提示并支持受限组件**（已关闭）— 说明文件夹设置可自动执行代码、信任决定会被保存，按钮改为 "Trust and continue" / "Quit"。
   https://github.com/openai/codex/pull/44732

4. **#44714 打包 Linux 语音运行时并提升音频可靠性**（已关闭）— 内置系统 ALSA 插件并增加缓冲，适配 PipeWire 图周期，避免采集样本丢失。
   https://github.com/openai/codex/pull/44714

5. **#44749 重放 TUI 历史时保持语音字幕顺序**（已关闭）— 修复保留的语音字幕被追加到历史之后、导致语音排在后续输入之后的问题。
   https://github.com/openai/codex/pull/44749

6. **#44747 更新 `quinn-proto` 并允许固定的 H3 Git 源**（已关闭）— `quinn-proto` 由 0.11.14 升至 0.11.15，Cargo/Bazel lockfile 同步；在 `codex-rs/deny.toml` 中允许 `hyperium/h3` 固定 revision。
   https://github.com/openai/codex/pull/44747

7. **#44701 新增线程级指令 provider**（已关闭）— 通过 `StartThreadOptions` 暴露 `ThreadInstructionsProvider`，在启动与模型请求边界加载快照，插在全局指令之后。
   https://github.com/openai/codex/pull/44701

8. **#44694 将 Windows 沙箱服务纳入发布产物**（已关闭）— 为 x86_64 与 ARM64 增加 `codex-windows-sandbox-service`，并在 DotSlash 配置中注册两种架构。
   https://github.com/openai/codex/pull/44694

9. **#44693 保留所选 profile 设置，不被托管的新线程默认值覆盖**（已关闭）— 防止 model、reasoning effort、service tier 被 managed defaults 改写。
   https://github.com/openai/codex/pull/44693

10. **#44691 对未识别的配置项发出警告**（已关闭）— 收集有效配置中的未知字段，避免拼写错误或已废弃配置被静默忽略。
    https://github.com/openai/codex/pull/44691

其他：#44752（Agent 概览任务详情渲染 Markdown）、#44742（跨会话与线程切换保留编辑器 yank）、#44711（会话取消/删除后返回命令中心）、#44744（归档确认数字快捷键立即生效）、#44676（按执行主机路径上下文解析权限 profile）。

---

## 5. 功能需求趋势

- **用量与配额可视化**：#24182 请求在 App 常驻显示 5 小时/每周额度，配合 #44262 的配额跳变 bug，说明额度透明度是付费用户的核心关注。
- **可配置性 / 关闭非核心功能**：#34349（禁用 Pets，46 👍）、#44561（默认关闭 whimsy 特效）显示社区希望 UI 装饰性功能默认克制、可彻底关闭。
- **配置与状态持久化语义**：#26472（模型选择不应写入 config）、#41859（Fast 模式被误选而 config 仍显示 Standard）、#44668（Astra reasoning 频繁重置为 Medium）共同指向"UI 状态与 config 不一致"这一类问题。
- **跨设备 / 远程控制**：#34028 请求 Windows→Windows 的 Codex Remote Control。
- **安全与沙箱**：#42115 建议文件操作引入强制 manifest / 回滚保障；PR 侧文件夹信任校验与 Windows 沙箱服务发布与之呼应。
- **平台覆盖**：Windows 桌面端（#34499、#41859、#44112、#22585）与 macOS 桌面端（#43124、#44687、#43386）问题密度均较高。

---

## 6. 开发者关注点

- **会话历史可靠性是最大痛点**：#15349 与 #43124 分别从"重启丢上下文"和"历史冻结在旧轮次 + 迁移状态 already_paginated"两个角度暴露会话持久化缺陷，且均长期未解决。
- **Windows 桌面端与 Computer Use/Browser Use 稳定性**：#44112（Browser Use 报 "Unable to load browser request-header policy"）、#43386（macOS Computer Use 访问 Xcode 27 Device Hub 约 5 秒超时，-10005 timeoutReached）说明代理式操作仍不稳定。
- **新版本回归风险**：#44687 与 #44720 均在 26.908.31457 版本、报告当日即获得 11 条评论，提示发版后回归验证需加强。
- **CLI/TUI 细节体验**：#22585（文件路径显示为蓝色但不可点击）、#15379（孤儿子进程残留）、#43189（Daybreak 已验证仍提示内容不可显示）属高频小摩擦，但累积影响日常使用。
- **配置可诊断性**：PR #44691 对未识别配置发出警告，正面回应了开发者对"配置被静默忽略"的长期不满。

*说明：以上内容全部基于所提供的 GitHub 数据整理，未包含数据源之外的信息。*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报（2026-09-11）

## 今日速览

今日发布 v0.61.0 夜间版本，无重大功能变更。社区讨论集中在 agent 可靠性问题上：子 agent 中断被误报为成功（#22323）、通用 agent 无限挂起（#21409）是最受关注的两个议题。安全方向 PR 密集提交，涵盖 Windows 沙箱 git 参数校验、checkpoint 路径穿越等修复。

---

## 版本发布

**v0.61.0-nightly.20260911.ged2ac40df**
每日例行夜间构建，未附带变更说明。完整变更对比见 [changelog](https://github.com/google-gemini/gemini-cli/compare/v0.61.0-nightly.20260910.ged2ac40df...v0.61.0-nightly.20260911.ged2ac40df)。配套版本号提升 PR 由机器人提交（[#29285](https://github.com/google-gemini/gemini-cli/pull/29285)）。

---

## 社区热点 Issues

1. **[#22323](https://github.com/google-gemini/gemini-cli/issues/22323)（P1，13 条评论）子 agent 超限被误报为 GOAL 成功**
   `codebase_investigator` 子 agent 在触及最大轮次上限、尚未完成分析时，仍返回 `status: "success"` 与 `Termination Reason: "GOAL"`。这会掩盖真实的中断，让调用方误判任务完成，直接影响依赖子 agent 结果的自动化流程。已标记 `need-retesting`。

2. **[#21409](https://github.com/google-gemini/gemini-cli/issues/21409)（P1，8 条评论，8 个 👍）通用 agent 永久挂起**
   一旦 CLI 转交 generalist agent，即使是创建文件夹这类简单操作也会无限挂起，用户等待长达一小时。👍 数为本批次最高，说明影响面广。规避方式是显式禁止模型委托子 agent。

3. **[#19873](https://github.com/google-gemini/gemini-cli/issues/19873)（P2，9 条评论）利用模型的 bash 亲和性：零依赖 OS 沙箱 + 执行后意图路由**
   提案指出 Gemini 3 模型被训练为原生 bash 用户，习惯串联 `grep`/`cat`/`sed`/`awk`。希望通过沙箱与意图路由充分发挥这一原生能力，属于 `effort/large` 的架构级增强。

4. **[#21968](https://github.com/google-gemini/gemini-cli/issues/21968)（P2，6 条评论）Gemini 不会主动使用 skills 与子 agent**
   用户反馈模型基本不会自主调用自定义 skills 与子 agent，除非显式指令。这与 #21409 形成对照：一侧是委托后挂起，另一侧是根本不愿委托，共同指向 agent 调度策略需要调整。

5. **[#25166](https://github.com/google-gemini/gemini-cli/issues/25166)（P1，4 条评论）shell 命令执行完成后卡在 "Waiting input"**
   简单 CLI 命令已执行完毕，界面仍显示命令活跃并"等待用户输入"。这是高频交互路径上的状态机缺陷，会直接阻塞会话推进。

6. **[#22745](https://github.com/google-gemini/gemini-cli/issues/22745)（P2，7 条评论）评估 AST 感知的文件读取、搜索与映射**
   EPIC 级议题，探讨 AST 感知工具能否用单次调用精确读取方法边界，从而减少轮次。若验证成功，可能改变代码库探索的基础机制。

7. **[#26525](https://github.com/google-gemini/gemini-cli/issues/26525)（P2，5 条评论）为 Auto Memory 增加确定性脱敏并降低日志量**
   Auto Memory 读取本地会话记录并发送给后台抽取 agent，脱敏发生在内容已送出之后。这是隐私边界问题，与 #26522、#26523 构成同一组 Auto Memory 治理议题。

8. **[#21983](https://github.com/google-gemini/gemini-cli/issues/21983)（P1，4 条评论）browser 子 agent 在 Wayland 下失败**
   Linux Wayland 环境下浏览器子 agent 无法工作，属平台兼容性缺陷，影响该环境下所有浏览器自动化任务。

9. **[#24246](https://github.com/google-gemini/gemini-cli/issues/24246)（P2，3 条评论）工具数超过 128 时触发 400 错误**
   工具数量过多时 CLI 报 400 错误（正文另提及 400 个工具的阈值）。随着技能与子 agent 增多，工具膨胀问题会愈发突出，需要更智能的作用域裁剪。

10. **[#22672](https://github.com/google-gemini/gemini-cli/issues/22672)（P2，3 条评论）agent 应阻止/劝阻破坏性行为**
    模型在复杂 git 操作中倾向使用 `git reset` 或 `--force`，即使存在更安全的替代方案。涉及数据与仓库安全，需要更严格的破坏性操作拦截。

---

## 重要 PR 进展

本批次 PR 以安全加固与缺陷修复为主，均于 2026-09-03 前后提交并在今日更新。

1. **[#29192](https://github.com/google-gemini/gemini-cli/pull/29192)（P1，security）修复 checkpoint 目录穿越**
   `/chat delete <tag>` 在 tag 含 `../` 时可删除 checkpoints 目录之外的文件——遗留的原始 tag 回退逻辑未做校验即传入 `path.join`。属路径穿越类安全问题。

2. **[#29184](https://github.com/google-gemini/gemini-cli/pull/29184)（P1，security）Windows 沙箱校验 git 参数，封堵静默 `git diff --output`**
   Windows 上 `git status | log | diff | show | branch` 被一律视为只读且不弹确认，导致 `git diff --output=<path>` 在默认非 YOLO 模式下静默写文件。

3. **[#29186](https://github.com/google-gemini/gemini-cli/pull/29186)（P1，security）修正 shell 沙箱拒绝启发式中的 exitCode 空值判断**
   修复 #29043：原判断 `result.exitCode !== undefined && result.exitCode !== 0` 与 `ExecutionResult` 的实际语义不符，可能导致沙箱拒绝检测失效。

4. **[#29188](https://github.com/google-gemini/gemini-cli/pull/29188)（P1，core）read-many-files 的 include 模式改为精确匹配文件名与扩展名**
   原先用 `String.prototype.includes()` 判断二进制资源是否被"显式请求"，任意文本重叠即可命中，判断过于宽松。

5. **[#29187](https://github.com/google-gemini/gemini-cli/pull/29187)（P2，core）对 LLM 提示模板占位符改用 safeLiteralReplace**
   修复 #29044：三处模板用 `replace('{placeholder}', 用户可控值)` 填充，替换串中的 `$` 序列在 JavaScript 中具有特殊含义，存在注入风险。

6. **[#29195](https://github.com/google-gemini/gemini-cli/pull/29195)（P2，core）checkpoint 历史非数组时降级而非崩溃**
   checkpoint 文件 JSON 合法但 `history` 非数组时，`/resume` 会抛出原始 `TypeError`。现改为校验结构并降级为空 checkpoint，与不可解析文件的既有处理保持一致。

7. **[#29180](https://github.com/google-gemini/gemini-cli/pull/29180)（P2，core）修复 tildeifyPath 误判同级 home 路径**
   原名与 home 目录前缀相同的同级目录会被错误显示为 `~` 路径。改用平台相关的 `path.relative` 进行严格判断。

8. **[#29190](https://github.com/google-gemini/gemini-cli/pull/29190)（P2，vscode-ide-companion）补全 activate() 中所有 Disposable 的订阅注册**
   逗号运算符缺陷导致成对注册中每组只有最后一个 Disposable 被推入 `context.subscriptions`，影响 `gemini.diff.accept` 与工作区变更监听的清理。

9. **[#29181](https://github.com/google-gemini/gemini-cli/pull/29181)（size/l）新增强制模型交互遵循顶层原则的文件日志拦截器**
   引入拦截器以强制执行全局 `GEMINI.md` 中的"顶层原则"，用于校验与调试模型交互，提升行为可预测性。

10. **[#29287](https://github.com/google-gemini/gemini-cli/pull/29287)（size/xl，已关闭）将 `--yolo` 映射为 allowedTools 通配策略**
    把 `--yolo` 原生映射为 `allowedTools: ["*"]`，并移除 `ApprovalMode.YOLO` 这一独立状态，完成 issue #11303。该 PR 已关闭。

---

## 功能需求趋势

- **子 agent 调度与可靠性**：本批次最集中的方向。#22323（中断误报成功）、#21409（委托后挂起）、#21968（不愿委托）、#22232（浏览器会话接管与锁恢复）、#22267（浏览器 agent 忽略 maxTurns）、#20195（本地子 agent Sprint 1）共同指向子 agent 生命周期管理尚未成熟。
- **Auto Memory 治理**：#26525、#26522、#26523 三连提出，涵盖确定性脱敏、停止无限重试低信号会话、隔离非法 inbox patch，反映该功能进入隐私与稳定性打磨阶段。
- **安全与沙箱**：PR 侧 #29192、#29184、#29186 均标 `area/security`，Issue 侧 #22672 关注破坏性命令，安全边界正在系统性补齐。
- **AST 感知的代码理解**：#22745 探讨 AST 感知读取、搜索与映射，目标是减少轮次、提升精度。
- **持久化任务追踪**：#18836 提议用文件型 CRUD 任务跟踪替代依赖上下文记忆的 WriteToDo，以缓解 context rot 与 token 成本；#21000 则试验用原生文件工具维护任务追踪。
- **工具规模管理**：#24246 的 400 错误提示工具膨胀已成为实际阻碍。
- **平台兼容性**：#21983 的 Wayland 问题、#20079 的 symlink agent 识别问题。

---

## 开发者关注点

- **挂起与状态失真是首要痛点**：无论是通用 agent 永久挂起（#21409）、shell 命令完成后卡在"等待输入"（#25166），还是子 agent 超限却报成功（#22323），本质都是状态机不可信，开发者无法从 CLI 反馈判断任务真实进展。
- **模型行为需要更强的约束而非更多自由**：一方面模型在危险 git 操作上需要被劝阻（#22672），另一方面它又倾向在随机目录生成临时脚本（#23571），说明文件与命令的作用域管理仍需收紧。
- **隐私处理的时序问题**：Auto Memory 的脱敏发生在内容已发送之后（#26525），这类"先发送再处理"的设计在安全审计中难以接受，开发者期待确定性、前置的脱敏。
- **配置项被静默忽略**：浏览器 agent 完全忽略 `settings.json` 的 maxTurns 等覆盖（#22267），配置可信度受损。
- **符号链接与路径边界**：`~/.gemini/agents/` 下的 symlink 不被识别为 agent（#20079），以及路径显示层面的 tildeify 误判（对应 PR #29180），反映路径处理细节仍不完善。
- **长期依赖 workstream-rollup 标签**：本批次 20 条 Issue 中绝大多数带 `workstream-rollup` 与 `maintainer only` 标记，且部分创建于 2026 年 2–3 月仍在更新，说明存在一批长期未收敛的积压议题。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报（2026-09-11）

## 1. 今日速览

今日发布 v1.0.84-4，将指令/LSP 列表拆分为独立命令并为插件相关命令补充 `--json` 输出与 `enable`/`disable` 能力。社区侧，MCP 生命周期合规问题集中爆发（#4809、#4370、#4795），成为最受关注的技术议题；同时 Windows/WSL2 平台稳定性问题（高 CPU 占用、崩溃、粘贴失败）持续占据高热度讨论。

## 2. 版本发布

**v1.0.84-4**（过去 24 小时）

- **新增**：
  - `copilot instruction list` 与 `copilot lsp list`，取代 `copilot plugins list --kind instruction` 和 `--kind lsp`
  - `copilot plugin list`、`copilot plugin marketplace list`、`copilot plugin marketplace browse` 支持 `--json`
  - `copilot plugin` 新增 `enable` 与 `disable` 子命令

> 说明：本条发布内容仅覆盖 Added 部分，未见其他变更类别信息。

## 3. 社区热点 Issues（10 个）

1. **#4809 [CLOSED] 原生 MCP 连接器在 `initialize` 前发送非标准 `server/discover`，违反 MCP 生命周期规范**
   https://github.com/github/copilot-cli/issues/4809
   与 #4370 指向同一根因（对本地 stdio MCP 服务器发专有请求），已关闭，说明官方已确认这是需要修正的协议层面问题。

2. **#4370 [OPEN] 1.0.79-1 在 `server/discover` 返回 `-32602` 时 MCP 初始化失败**
   https://github.com/github/copilot-cli/issues/4370
   FastMCP 未实现该方法即返回 `-32602 Invalid`，导致 CLI 无法连接——直接影响使用 FastMCP 生态的开发者，属于兼容性硬阻塞。

3. **#13 [CLOSED] CLI 输入应支持 vi/vim 模式**
   https://github.com/github/copilot-cli/issues/13
   获得 **76 个 👍**，是本期数据中社区呼声最高的功能请求之一，12 条评论讨论充分，已关闭，值得关注落地形式。

4. **#3700 [OPEN] [High severity] 1.0.60 WSL2 回归：主线程空闲时约 215% CPU，TUI 输出冻结至重启**
   https://github.com/github/copilot-cli/issues/3700
   标注为高严重度回归（#2208 的回归），TUI 实际不可用，对 WSL2 用户影响显著。

5. **#4699 [OPEN] 长时间 `--resume` 会话 OOM（`JavaScript heap out of memory`），崩溃转储写入用户 cwd**
   https://github.com/github/copilot-cli/issues/4699
   约 14 小时内崩溃 3 次，均触及 4 GiB 堆上限；崩溃转储污染工作目录是额外痛点，5 个 👍 反映共鸣。

6. **#4095 [OPEN] Windows 插件更新报 "Access is denied (os error 5)"（VS Code 运行时）**
   https://github.com/github/copilot-cli/issues/4095
   **21 个 👍**，为本期最高赞 Issue；VS Code Copilot 扩展持有已安装插件的 watcher 句柄导致更新失败，影响桌面端与 CLI 双路径。

7. **#1168 [OPEN] 单个请求中授权提示过多（"authorization fatigue"）**
   https://github.com/github/copilot-cli/issues/1168
   长期存在的权限体验问题，反映权限模型粒度与用户预期的落差。

8. **#4764 [OPEN] 自动批准约 1 小时后失效**
   https://github.com/github/copilot-cli/issues/4764
   影响 1.0.83 的 assisted permissions 模式，需新开会话才能恢复，属于会话级可靠性问题。

9. **#4742 [OPEN] 桌面端 1.1.15：已有 Local 会话运行时无法创建第二个 Local（branch）会话**
   https://github.com/github/copilot-cli/issues/4742
   "This project already has an active Local workspace" 提示，涉及会话/工作区模型设计，11 条评论显示讨论充分。

10. **#4035 [OPEN] 语音安装器指向私有 Azure Artifacts feed，返回 401**
    https://github.com/github/copilot-cli/issues/4035
    Microsoft.AI.Foundry.Local.Core 1.2.3 实际上在 nuget.org 公开可用，安装流程配置错误导致 voice 模式无法启用。

**其他值得留意的条目**：#3260（tmux over SSH 到 Windows Server 2025 粘贴失效）、#3534（WSL2 ARM64 `/copy` 因 cmd.exe 引号问题失败）、#4026（Windows 原生运行时反复崩溃，自 2026-05 未解决）、#4795（Atlassian MCP OAuth 回调端口不匹配）、#4652（Windows 25H2 沙箱不受支持）、#1285（组织级 Agent 不显示）、#3854（`@` 文件引用补全失效，已关闭）、#2199（Ctrl+Backspace 删除整词，7 个 👍）。

## 4. 重要 PR 进展

本期数据仅提供 2 条 PR，远少于 10 条，故按实际数据列出全部：

1. **#4808 [OPEN] Pin GitHub Actions to commit SHAs**（作者：github-security-bot）
   https://github.com/github/copilot-cli/pull/4808
   将 GitHub Actions 的 `uses:` 引用固定到不可变 commit SHA，属供应链安全加固。变更 4 个文件、扫描 3 个文件、发现并固定 3 个引用、跳过 0 个。

2. **#4786 [CLOSED] Revise notice regarding third-party services**（作者：nkasuku）
   https://github.com/github/copilot-cli/pull/4786
   更新第三方服务相关条款，澄清访问要求与条款说明，属文档/合规类变更。

## 5. 功能需求趋势

- **MCP 协议合规与生态兼容**：`server/discover` 相关问题（#4809、#4370）与 OAuth 回调问题（#4795）显示，MCP 客户端实现与规范、第三方服务器（FastMCP、Atlassian）之间的兼容性是当前最集中的技术议题。
- **CLI 交互与键盘体验**：vim/vi 输入模式（#13，76 👍）、Ctrl+Backspace 删除整词（#2199）、`@` 文件引用补全（#3854）共同指向对高效键盘驱动编辑与补全的持续需求。
- **权限与自动化控制**：授权疲劳（#1168）、自动批准过期（#4764）反映出对更细粒度、更持久可控的权限策略的期待。
- **平台稳定性（Windows / WSL2 优先）**：CPU 自旋（#3700）、崩溃（#4026）、粘贴/复制失败（#3260、#3534）、沙箱不支持（#4652）、插件更新权限错误（#4095）构成最大的问题簇。
- **会话与资源管理**：长会话堆 OOM（#4699）、桌面端多会话冲突（#4742）指向会话生命周期与内存治理需求。
- **插件/扩展体系演进**：v1.0.84-4 新增 `instruction`/`lsp` 独立命令、`--json` 输出与 enable/disable，与 #4095 的插件更新问题形成呼应。
- **企业与组织级能力**：组织级 Agent 不显示（#1285）涉及企业配置与私有仓库（`.github-private`）集成。

## 6. 开发者关注点

- **Windows/WSL2 是当前最大的体验短板**：高 CPU 自旋、反复崩溃、剪贴板不可用、沙箱不受支持、插件更新被占用句柄阻塞，问题覆盖面广且长期未闭环（#4026 自 2026-05 起持续）。
- **MCP 集成仍在磨合期**：非标准握手导致规范兼容服务器崩溃或连接失败，OAuth 回调端口不匹配使企业工具（Atlassian）无法接入，开发者需要更严格遵循规范的客户端实现。
- **长会话可靠性不足**：堆内存 OOM 与会话级功能（自动批准）超时失效，迫使开发者频繁重启会话，并产生诊断文件写入项目目录的副作用。
- **权限交互成本高**：频繁授权提示与自动批准失效并存，说明权限模型在"安全"与"流畅"之间尚未取得平衡。
- **平台与安装链路细节问题多**：语音运行时错误指向私有 feed 返回 401、Windows 上插件更新受 VS Code 句柄影响，均属安装/更新链路的可修复缺陷。
- **高呼声功能等待落地**：vim 模式（76 👍）与 Windows 插件更新（21 👍）是社区投票最集中的两项，前者已关闭，后者仍待解决。

---
*本日报仅基于用户提供的 GitHub 数据整理，未引入外部信息。*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报（2026-09-11）

## 1. 今日速览

今日无新版本发布、无 PR 动态，社区仅有 2 条 Issue 更新。最值得关注的是新提交的严重缺陷 Issue #2640：kimi CLI 0.42.0 在 Linux/WSL2 环境下出现随机硬死锁，SIGTERM/SIGQUIT 无法终止进程，并会拖死 SSH 会话，属于影响可用性的高危问题。另一条为长期遗留 Issue #1388（CentOS 7.9 下 MCP 连接失败）于今日被关闭。

## 2. 版本发布

过去 24 小时无新 Release。

## 3. 社区热点 Issues

今日过去 24 小时内更新的 Issue 仅 2 条，未达到 10 条，以下为全部内容：

1. **[OPEN][bug] Linux/WSL2 下 kimi CLI 0.42.0 随机硬死锁，SIGTERM/SIGQUIT 无法终止，并拖死 SSH 会话**（#2640）
   - 作者: jinruyan02 | 创建/更新: 2026-09-11 | 评论: 0 | 👍: 0
   - 环境: kimi CLI 0.42.0，Kimi Code（kimi.com/code），模型 kimi-for-coding，平台 Linux/WSL2
   - 重要性: 进程无法被常规信号终止且波及宿主 SSH 会话，属于阻断级可用性问题，对 WSL2 与远程开发用户影响显著。目前尚无评论与社区回应。
   - 链接: https://github.com/MoonshotAI/kimi-cli/issues/2640

2. **[CLOSED][bug] kimicode 在 centos7.9 terminal 无法使用，显示 mcp connect failed（Unexpected error: Failed to connect MCP servers）**（#1388）
   - 作者: supsmile | 创建: 2026-03-10 | 更新: 2026-09-11 | 评论: 0 | 👍: 0
   - 环境: kimi version 1.17.0，/login 方式，模型 kimi-for-coding，平台 CentOS 7.9
   - 重要性: 该 Issue 自 3 月创建、9 月关闭，跨度约半年，反映旧版 CLI 在 CentOS 7.9 上 MCP 服务器连接失败的问题已处理完毕；对仍在旧发行版环境部署的用户有参考价值。
   - 链接: https://github.com/MoonshotAI/kimi-cli/issues/1388

## 4. 重要 PR 进展

过去 24 小时内无 PR 更新。

## 5. 功能需求趋势

基于今日提供的两条 Issue，可观察到的关注方向有限，仅包括：

- **MCP 连接与兼容性**：Issue #1388 指向 MCP servers 连接失败，说明 MCP 生态接入在旧版 Linux 发行版（CentOS 7.9）上的兼容性仍是社区会遇到的问题。
- **运行时稳定性与进程管理**：Issue #2640 指向 CLI 在 Linux/WSL2 下的死锁与信号处理异常，属于稳定性与进程生命周期管理的核心方向。

注：本次数据样本仅 2 条 Issue，无法反映更广泛的功能需求分布。

## 6. 开发者关注点

- **WSL2/Linux 下的可靠性**：0.42.0 版本出现随机硬死锁，且 SIGTERM/SIGQUIT 均无法终止，开发者期望进程可被正常中断、不牵连 SSH 会话。
- **旧发行版环境支持**：CentOS 7.9 等旧环境下的 MCP 连接失败问题持续时间较长（3 月至 9 月），提示对非主流/旧版环境的验证仍有缺口。
- 两条 Issue 评论数与 👍 均为 0，暂未形成社区讨论热度，建议关注 #2640 后续是否获得官方确认与修复进展。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报（2026-09-11）

## 1. 今日速览

今日无新版本发布，社区讨论集中在**模型自动发现**与**Provider 兼容性**两大方向：#6231（OpenAI 兼容端点自动发现模型）以 57 条评论、232 个赞成为绝对热点，并已有对应 PR #48486 提交。此外，v2 分支的稳定性问题（并发启动卡死、Copilot 配额异常消耗）和多起 provider 配置类 bug 持续受到关注。

## 2. 版本发布

过去 24 小时内无新版本发布。

## 3. 社区热点 Issues（10 条）

1. **[#6231](https://github.com/anomalyco/opencode/issues/6231) Auto-discover models from OpenAI-compatible provider endpoints**（OPEN，57 评论，👍232）
   本地 provider（LM Studio、Ollama、llama.cpp）目前需手动在 `opencode.json` 中罗列全部模型，繁琐且易错。这是当前社区呼声最高的需求，且有 PR #48486 直接对应，落地可能性较大。

2. **[#8796](https://github.com/anomalyco/opencode/issues/8796) [zen] [bug] Country, region, or territory not supported error**（CLOSED，33 评论）
   explore 任务触发 `AI_APICallError`，涉及地域限制问题。已关闭，对受地区限制影响的用户是重要信号。

3. **[#5374](https://github.com/anomalyco/opencode/issues/5374) [FEATURE]: show tokens / second**（OPEN，22 评论，👍109）
   请求展示当前与平均 tokens/s。高赞说明用户对推理性能可观测性有明确诉求。

4. **[#29059](https://github.com/anomalyco/opencode/issues/29059) [FEATURE]: Add Dynamic workflows for repeatable multi-step automation**（CLOSED，18 评论，👍22）
   对标 Claude Code 的可复用多步自动化工作流，属于工作流编排方向的代表性需求，已被关闭（可能已实现或转其他方式处理）。

5. **[#45278](https://github.com/anomalyco/opencode/issues/45278) Payment Declined After 3 Months Despite No Issue With Card or Bank**（OPEN，14 评论）
   订阅续费被拒，卡与银行均无异常。涉及付费转化与用户信任，商业影响直接。

6. **[#4232](https://github.com/anomalyco/opencode/issues/4232) OpenCode displays models which aren't configured & don't exist in LM Studio**（CLOSED，13 评论，👍10）
   与 #6231 同源的模型列表不准确问题，已关闭，说明该方向的清理工作正在推进。

7. **[#33027](https://github.com/anomalyco/opencode/issues/33027) [BUG] MCP tools connected but not exposed to agent**（OPEN，12 评论）
   MCP server 连接成功、`tools/list` 可见，但工具未暴露给 agent。MCP 是当前扩展生态核心，此 bug 影响面大。

8. **[#36454](https://github.com/anomalyco/opencode/issues/36454) Is the destruction of the TreeSitter client causing a memory leak?**（OPEN，7 评论）
   代码高亮回退伴随 TreeSitter 客户端销毁警告，疑似内存泄漏，属长期性能隐患。

9. **[#48330](https://github.com/anomalyco/opencode/issues/48330) [2.0] Copilot Legacy Plan fully consumed by a single prompt**（OPEN，5 评论）
   opencode2 中单次会话耗尽 Copilot 1500 次/月配额并触发 429，v1 无此问题。属于 v2 回归缺陷，影响付费用户成本。

10. **[#48410](https://github.com/anomalyco/opencode/issues/48410) WebKit StringImpl assertion failure when database grows large (SIGTRAP crash)**（CLOSED，5 评论）
    macOS 上数据库增大后 SIGTRAP 崩溃，属数据规模相关的严重稳定性问题，当天提交当天关闭，响应迅速。

## 4. 重要 PR 进展（10 条）

1. **[#48486](https://github.com/anomalyco/opencode/pulls/48486) feat(provider): discover models for openai-compatible providers**（CLOSED）
   对配置了 `baseURL` 且未显式声明 `models` 的 OpenAI 兼容 provider，通过 `GET <baseURL>/models` 自动探测模型。直接回应 #6231，是今日最关键的实现进展。

2. **[#44725](https://github.com/anomalyco/opencode/pulls/44725) feat(core): restore OPENCODE_DISABLE_CLAUDE_CODE support in v2**（OPEN）
   在 v2 分支恢复该环境变量支持，避免 OpenCode 读取 `~/.claude`，回应 v2 迁移中的配置兼容问题。

3. **[#48487](https://github.com/anomalyco/opencode/pulls/48487) docs(ecosystem): add opencode-cd plugin**（OPEN）
   将 `opencode-cd` 加入官方生态 Plugins 表格，属生态文档维护。

4. **[#44946](https://github.com/anomalyco/opencode/pulls/44946) chore: bump embedded Bun to 1.4.2**（OPEN）
   将固定的 packageManager 从 bun@1.3.14 升级到 1.4.x（对应 1.4 Rust 重写后的跟进），修复相关运行时问题。

5. **[#48397](https://github.com/anomalyco/opencode/pulls/48397) fix(core): break filesystem cycle in compiled prompts**（OPEN）
   修复编译后 prompt 的文件系统循环，与 #44946 的 Bun 升级互补而非重复。

6. **[#48483](https://github.com/anomalyco/opencode/pulls/48483) feat(routing): add organization routes to model selectors**（OPEN）
   为模型选择器增加组织级路由，配套 Console PR #2196，涉及多租户/团队使用场景。

7. **[#48466](https://github.com/anomalyco/opencode/pulls/48466) / [#48485](https://github.com/anomalyco/opencode/pulls/48485) fix(llm/ai): round-trip Anthropic tool_search_tool_result blocks**（OPEN）
   修复 #45527，补齐 Anthropic tool-search 块的协议往返；作者明确说明仅覆盖协议层，未包含 `defer_loading` 配置入口。

8. **[#47635](https://github.com/anomalyco/opencode/pulls/47635) fix(opencode): resolve markdown agent prompts**（OPEN）
   修复 Markdown agent/mode 加载器覆盖 frontmatter 中 `prompt:` 字段的问题。

9. **[#48366](https://github.com/anomalyco/opencode/pulls/48366) fix(core): keep a refused inotify instance from wedging the process**（OPEN）
   修复 inotify 实例被拒导致进程卡死的问题（关联 #16610），作者指出这仅解决了 #37111 两个触发条件之一。

10. **[#42316](https://github.com/anomalyco/opencode/pulls/42316) fix(opencode): filter compaction events from jsonl output**（OPEN）
    避免自动压缩时 `opencode run --format json` 输出干扰性事件，改善 CI/脚本消费 JSONL 的体验。

## 5. 功能需求趋势

- **Provider 与模型管理**：自动发现模型（#6231、#4232）、自定义 provider 下的 prompt caching（#45750）、OAuth 相关配额与限制计算（#44821）——是当下最密集的方向。
- **性能与可观测性**：tokens/s 展示（#5374）、timeline 渲染性能（#48434 提到 320 轮会话每次流式增量比较 1288 行）、TreeSitter 内存泄漏（#36454）。
- **工作流与自动化**：可复用多步工作流（#29059），对标 Claude Code 的 dynamic workflows。
- **MCP 生态**：工具连通性 bug（#33027）表明 MCP 集成仍不够可靠。
- **桌面端体验**：文件树缺失（#42031）、Windows 付费模型静默失败（#47796）、ChatGPT OAuth 失败（#43850）。
- **稳定性**：v2 并发启动卡死（#38567）、大规模数据库崩溃（#48410）、进程挂起（#36384）。

## 6. 开发者关注点

1. **v2 回归问题突出**：Copilot 配额单次耗尽（#48330）、并发实例启动卡死（#38567）、`OPENCODE_DISABLE_CLAUDE_CODE` 缺失（#44725）——迁移 v2 的用户面临明显的体验倒退。
2. **付费与配额链路脆弱**：支付被拒（#45278）、付费模型静默失败（#47796）、配额统计错误（#44821、#48459 DeepSeek 用量别名合并）——涉及收入与信任，优先级应高。
3. **Provider 配置仍靠手工**：模型列表与实际不符、需手动枚举（#6231、#4232），自动发现是明确的共识解法。
4. **静默失败难排查**：多个 issue 描述“无报错、无反应”（#48455、#47796），缺乏可诊断的错误信息是共性痛点。
5. **代理/网关场景兼容性**：自定义 provider 名称配 Anthropic 原生协议时 caching 失效（#45750），说明协议识别逻辑过于依赖 provider 命名。
6. **性能细节进入深水区**：TreeSitter 生命周期、timeline 深比较、JSONL 输出纯净度等，反映社区对细节质量的关注度上升。

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报（2026-09-11）

## 1. 今日速览

今日无新版本发布，社区讨论集中在**上下文预算与压缩（compaction）机制的正确性**上：多个 issue 指向 token 估算、输出预留和溢出恢复的缺陷。同时，**性能问题**成为新增焦点，包括流式工具调用参数解析的 O(n²) 复杂度和大会话下 TUI 冻结。当日多条提案类 issue 被新增并快速关闭，反映维护者对新扩展能力的审慎处理。

## 2. 版本发布

过去 24 小时无新版本发布。

## 3. 社区热点 Issues

1. **#8061 [OPEN] Context budget 忽略 maxTokens 输出预留，溢出恢复重试同样失败**
   输入仅占模型窗口约 78% 时请求仍被拒，且自动 compact-and-retry 恢复因同样原因失败——这是压缩机制的核心可靠性问题，附 2 个 👍。
   https://github.com/earendil-works/pi/issues/8061

2. **#9323 [CLOSED] 改进 fireworks 专用配置**
   当日评论最多的 issue（14 条），作者明确说明报告系人工撰写（部分调研由 AI 辅助），已关闭。
   https://github.com/earendil-works/pi/issues/9323

3. **#8133 [CLOSED] 按模型配置 compaction 设置**
   提议在 settings.json 中引入以 model id 为键的 `compaction.profiles` 映射，全局值作为回退。获得 5 个 👍，是社区呼声较高的配置灵活性需求，已关闭。
   https://github.com/earendil-works/pi/issues/8133

4. **#9410 [OPEN] 大会话下按 Escape 中断流式输出导致约 60 秒 TUI 完全冻结**
   v0.85.1 中，在约 465k token 上下文（gemini-3.8-flash）下按 Escape 触发 `app.interrupt` 后 CLI 完全冻结，属严重交互体验问题。
   https://github.com/earendil-works/pi/issues/9410

5. **#9265 [OPEN] pi-ai：openai-completions 流式工具调用参数重复解析致 O(n²) 并阻塞事件循环**
   每个 delta 都重新解析全部累积的工具调用 JSON，使单个工具调用的流式成本随其总大小呈平方增长，嵌入式运行时中会冻结事件循环。
   https://github.com/earendil-works/pi/issues/9265

6. **#9294 [OPEN] claude-fable-5 内置 allowedFallbackModels 仍列出 API 已拒绝（400）的 claude-opus-4-8**
   使用 `--model claude-fable-5` 的每个请求立即失败，已有对应 PR 处理，说明内置模型元数据与上游 API 存在同步滞后。
   https://github.com/earendil-works/pi/issues/9294

7. **#8810 [OPEN] 扩展注册的 provider：新会话间歇性忽略 defaultProvider/defaultModel**
   通过 `pi.registerProvider(name, config)` 注册的 provider，新会话会间歇性地启动到其他 provider 的默认模型上——对多 provider 用户是明显的可复现性/一致性问题。
   https://github.com/earendil-works/pi/issues/8810

8. **#8752 [OPEN] bedrock-converse：usage.input 未跨模型族归一化，导致虚假缓存未命中提示与输入成本翻倍**
   Anthropic 模型的 `input` 为扣除缓存后的净值，OpenAI 系模型为含 cacheRead 的毛值，pi 未做归一化。获 5 个 👍，直接影响计费与用量判断。
   https://github.com/earendil-works/pi/issues/8752

9. **#9331 [OPEN] Bedrock：OpenAI reasoning effort 从未发送给模型**
   通过 Bedrock 访问 `global.openai.gpt-5.6-sol` 等模型时，调整 thinking level 对实际请求无影响（low/medium/high 表现一致），已在基准测试中复现。
   https://github.com/earendil-works/pi/issues/9331

10. **#9361 [OPEN] Windows：加载扩展后 settings 中的 shellPath 被非确定性忽略，PATH 回退到 WSL 的 System32 bash.exe**
    Windows 平台下 bash 工具的 shell 解析不确定，影响扩展场景的可预测性。
    https://github.com/earendil-works/pi/issues/9361

其他值得留意：#9045（无效 `--mode` 值被静默忽略，无诊断输出）、#2374（tmux 内 Kitty 内联图片不渲染，已关闭）、#9478 相关 PR 指向的压缩误触发问题。

## 4. 重要 PR 进展

1. **#9461 [OPEN] fix(ai): 延迟流式工具参数解析至读取时**
   针对 #9265，改为在各次访问 `.arguments` 时（带缓存）解析，而非每个 delta 全量重解析，直接消除 O(n²) 行为。
   https://github.com/earendil-works/pi/pull/9461

2. **#9478 [CLOSED] fix(coding-agent): 限制压缩 token 估算中的单条消息字符数**
   修复 #9476：两个 web_fetch 结果共约 6.6MB JSON 落入上下文后，压缩刚完成 3 分钟即再次误触发，根因是估算逻辑被超大消息撑爆。
   https://github.com/earendil-works/pi/pull/9478

3. **#9475 [CLOSED] 提案：拆分启动与会话恢复优化**
   提交五个独立分支（基于 d12cd92），包括跳过已配置项等启动期减负，请求批准后再分别开 PR。
   https://github.com/earendil-works/pi/pull/9475

4. **#9469 [CLOSED] 提案：面向 webhook 与消息队列的非阻塞事件导出扩展**
   定义小型版本化接口，将 Pi 生命周期的交互、工具与结构化遥测事件导出到外部系统。
   https://github.com/earendil-works/pi/pull/9469

5. **#9468 [CLOSED] feat(coding-agent): 延迟扩展重载（requestReload，settle 时合并）**
   `ExtensionContext.requestReload` 在 agent run 结束后统一执行（绝不中途重载），并如实返回是否绑定了真实重载处理器。
   https://github.com/earendil-works/pi/pull/9468

6. **#9467 [CLOSED] fix(ai): 将 setup 阶段的中断归类为 "aborted"**
   修复 lazyStream setup 期间中断被渲染为硬错误（stopReason "error"），而非软中断的问题。
   https://github.com/earendil-works/pi/pull/9467

7. **#9442 [OPEN] fix(ai): 允许兼容代理使用 prompt cache key**
   目前 `prompt_cache_key` 仅发给直连 OpenAI URL 或长保留场景，兼容代理默认短保留下无法接收 pi 的会话 key。
   https://github.com/earendil-works/pi/pull/9442

8. **#9459 [OPEN] fix(coding-agent): 恢复会话时优先采用已记录的模型变更**
   基于 @pwguler 的诊断，优先使用最后的 `model_change` 记录而非最后一条 assistant 消息的模型，保留原有回退逻辑。
   https://github.com/earendil-works/pi/pull/9459

9. **#9301 [OPEN] feat(coding-agent): 对设备码浏览器与剪贴板操作增加确认**
   修复 #9282，为自动打开浏览器和复制设备码增加确认，避免在企业环境中强制触发。
   https://github.com/earendil-works/pi/pull/9301

10. **#8627 → #9483 [CLOSED] 工具 cwd 解析改为通过 customCwd 选择加入**
     #8627 让 cwd 敏感工具优先使用 `ctx.cwd`，随后 #9483 为使用显式 `cwd` 创建的工具恢复向后兼容。
     https://github.com/earendil-works/pi/pull/8627 | https://github.com/earendil-works/pi/pull/9483

其他：#8708（不再通过 GitHub API 解析 fd/rg 版本，规避匿名配额限制）、#1598（防止 `estimateTokens` 在非数组 content 上崩溃）、#9297（移除无效的 Fable 5 回退目标）、#8616（JPEG 非 EXIF APP1 段扫描）、#8980（内存会话导入外部条目）、#8744（可选的全屏覆盖层选区排除）。

## 5. 功能需求趋势

- **上下文与压缩机制精细化**：从 #8133 的 per-model compaction profiles、#9478 的估算修正到 #8061 的输出预留问题，社区要求压缩策略更准确、更可配置。
- **多 provider / 多模型一致性**：#8810（扩展注册 provider 的默认模型）、#8752 与 #9331（Bedrock 用量与 reasoning effort）、#9294（Fable 5 回退元数据）共同指向跨 provider 行为与模型元数据的统一。
- **性能与响应性**：#9265（O(n²) 工具参数解析）、#9410（60 秒 TUI 冻结）、#9475（启动/恢复减负）显示性能已成为一线痛点。
- **代理与兼容层支持**：#9442（兼容代理的 prompt cache key）表明通过第三方代理使用 Pi 的场景增加。
- **扩展生态能力**：#9468（延迟重载）、#9469（事件导出）、#8627/#9483（扩展上下文 cwd）反映扩展作者对更完整生命周期 API 的需求。
- **Windows 平台可靠性**：#9361 显示 Windows 下 shell 解析的非确定性仍待解决。

## 6. 开发者关注点

- **静默失败与缺乏诊断**：#9045（无效 `--mode` 被无提示吞掉）、#9294（内置回退模型已被 API 拒绝）、#9331（thinking level 静默无效）——配置错误往往无声无息，排查成本高。
- **自动恢复机制不可靠**：#8061 中 compact-and-retry 在重试时以同样原因失败，使"自动恢复"反而增加不确定性。
- **成本与用量可解释性**：#8752 的 usage.input 语义差异导致虚假缓存未命中提示和输入成本翻倍，直接影响用户对费用的信任。
- **大上下文下的稳定性**：超大工具结果（#9478 的 6.6MB JSON）与大会话中断（#9410）反复暴露上下文规模的边界问题。
- **跨平台行为一致性**：Windows（#9361）与 tmux 环境（#2374）的差异行为是长期存在的摩擦点。
- **扩展 API 的向后兼容**：从 #8627 合并后需 #9483 补救可见，扩展接口变更对生态的影响受到重视。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报（2026-09-11）

## 1. 今日速览

今日发布 v0.23.3 稳定版，并推出捆绑该 CLI 版本的 TypeScript SDK v0.1.12；核心侧扩展了对 Kimi、Qwen、DeepSeek 推理预设（reasoning presets）的支持。Windows 平台进程泄漏问题依然是社区最集中的焦点：虽然 shell 侧泄漏已由 #11497 修复，但 web-terminal PTY 的 conhost.exe 泄漏仍在讨论中。此外，会话历史丢失、Remote-SSH 下 VS Code 扩展无法加载等问题，反映出 IDE 集成与 daemon 会话管理是当前社区关注的主线。

## 2. 版本发布

- **v0.23.3（稳定版）**：正式发布，具体变更清单见下方完整列表。
  - 附带 nightly 构建 v0.23.3-nightly.20260910.c46cb85cf2。
  - 含破坏性变更信号：`feat(channels)!: remove me...`（渠道相关移除），以及 dingtalk 后台响应聚合逻辑的移除（#11570）。
- **sdk-typescript-v0.1.12**：TypeScript SDK 发布，**捆绑 CLI 版本 0.23.3**（由同分支源码构建）。
- **核心变更**：`feat(core): expand Kimi, Qwen and DeepSeek reasoning presets`（PR #11349）。
  - 链接：https://github.com/QwenLM/qwen-code/pull/11349

## 3. 社区热点 Issues（10 个）

1. **#11303** [OPEN][P1] Windows 下 VS Code Companion 泄漏无头 conhost.exe (ConPTY) 进程——约 12 小时后累计 347 个进程 / ~2.8 GB 内存。评论 15 条，为今日讨论最热的 Issue，Windows 资源泄漏是核心痛点。
   https://github.com/QwenLM/qwen-code/issues/11303
2. **#11352** [OPEN][P1] Web-terminal PTY 在自然退出时泄漏 conhost.exe；shell 侧已由 #11497 修复，范围收窄至 web-terminal。评论 6 条，与 #11303 同属 Windows 进程泄漏主线。
   https://github.com/QwenLM/qwen-code/issues/11352
3. **#6067** [CLOSED] Windows 平台进程管理异常的高风险汇总贴，串联 v0.19.2 起的进程泄漏历史。虽已关闭但持续更新，是理解泄漏问题全貌的关键线索。
   https://github.com/QwenLM/qwen-code/issues/6067
4. **#11574** [OPEN][P2] VS Code 扩展更新后隐藏全部历史会话：历史对话框硬编码 `sourceType` 过滤，0.23.x 之前的记录缺少该元数据。评论 6 条，升级即丢历史，用户体验影响大。
   https://github.com/QwenLM/qwen-code/issues/11574
5. **#11556** [OPEN][P1] vscode-ide-companion 0.23.1 在 Remote-SSH 环境下无法工作，webview 卡在加载中。评论 4 条，远程开发场景的阻塞性缺陷。
   https://github.com/QwenLM/qwen-code/issues/11556
6. **#11500** [OPEN][P1] 多个后台 agent 同时完成时 TUI 静默退出（未捕获 React #185，Ink useBoxMetrics 布局监听 setState 循环）。评论 4 条，属渲染层稳定性问题。
   https://github.com/QwenLM/qwen-code/issues/11500
7. **#11198** [OPEN][P1/Security] 用量统计遥测将原始工具错误文本（含 shell 命令行）未脱敏上传至 RUM 端点，默认开启。评论 3 条，涉及数据隐私与凭据安全，值得优先关注。
   https://github.com/QwenLM/qwen-code/issues/11198
8. **#11386** [CLOSED][P2] `feat(serve)`：通过 LRU live set 将会话注册与活跃运行时解耦，以支持超过 25 个 daemon 工作区；实测闲置主机成本不支持完整 LRU 实现。
   https://github.com/QwenLM/qwen-code/issues/11386
9. **#11024** [OPEN][P2] Worktree 会话生命周期清理与残留发现（Part 4A）；状态同步显示前两项已合并修复，第三项仍为未验证残留。评论 4 条。
   https://github.com/QwenLM/qwen-code/issues/11024
10. **#10444** [OPEN][P2] 用 PNPM 与快速 bootstrap 路径降低 worktree 搭建成本。评论 5 条，指向构建系统的效率瓶颈。
    https://github.com/QwenLM/qwen-code/issues/10444

其他值得留意：#8138（worktree settings.json 写错位置）、#11511 / #11510（ACP 会话与断连升级）、#8908 / #10103 / #9490（daemon 会话管理多个状态同步）、#11514（UI 缺少 Max thinking effort 选项）、#7167（Fleet Shepherd Dashboard 自动维护）。

## 4. 重要 PR 进展（10 个）

1. **#11634** `fix(core): retry transient server errors in established streams`——在已建立的模型流中重试瞬时 5xx，前提是尚未输出答案文本或工具调用，与现有两次重试预算共享。今日新开。
   https://github.com/QwenLM/qwen-code/pull/11634
2. **#11650** `feat(web-shell): Edit and resend the latest user message`——为最新普通用户消息增加内联编辑，发送后替代该轮并生成新回复，保留原图片与文件。
   https://github.com/QwenLM/qwen-code/pull/11650
3. **#11620** `chore(core): cover every hook event in the settings schema and hook bus`——settings schema 与 hook 消息总线覆盖全部 hook 事件，新增 PostCompact、PermissionDenied、TodoCreated、TodoCompleted、InstructionsLoaded。
   https://github.com/QwenLM/qwen-code/pull/11620
4. **#11656** `fix(cli): keep the expanded confirmation dialog inside the viewport`——修复 OpenTUI 渲染器 E2E 主 CI 失败，长确认对话框此前无法看到尾部。
   https://github.com/QwenLM/qwen-code/pull/11656
5. **#11562** `fix(cli): keep one-shot system reminders out of the user's own message`——不再将折叠进提示前部的一次性提醒回显给用户，涉及转录、↑ 历史回忆等。
   https://github.com/QwenLM/qwen-code/pull/11562
6. **#11575** `ci(desktop): publish the desktop app when the CLI releases`——桌面应用跟随 CLI 稳定版发布同版本（类似 VS Code companion 的做法），当前为空载落地。
   https://github.com/QwenLM/qwen-code/pull/11575
7. **#10347** `feat(core): auto-retry transient network errors (EOF) where Ctrl+Y is unavailable`——将实为底层网络失败的 4xx（如 `400 network error ... EOF`）归类为可重试传输错误。
   https://github.com/QwenLM/qwen-code/pull/10347
8. **#10455** `fix(cli): don't crash startup when the output-language file is unwritable`——输出语言规则文件不可写（只读 home、root 残留目录）时不再导致启动崩溃。
   https://github.com/QwenLM/qwen-code/pull/10455
9. **#8927** `feat(channels): bound session lifetime with sessionRotation`——新增 per-channel 的 `sessionRotation`，超过时限后该路由下一条消息开启新会话。
   https://github.com/QwenLM/qwen-code/pull/8927
10. **#10906** `feat(web-shell): show shell and monitor task output`——Web Shell 任务详情面板可直接查看 Shell 与 Monitor 输出，Monitor stdout/stderr 持久化并暴露实时会话数据。
    https://github.com/QwenLM/qwen-code/pull/10906

其他：#10439（@qwen-code /resolve 连续失败自动建追踪 issue）、#11297 / #11134 / #9305 / #11001（CI 重试与渲染/测试稳定性修复）。

## 5. 功能需求趋势

- **IDE 与远程开发集成**：VS Code Companion 是需求与缺陷双重集中区——会话历史过滤（#11574）、Remote-SSH 卡加载（#11556）、UI 思考强度选项缺失（#11514）、worktree 设置写入位置（#8138）。
- **Daemon 与会话管理**：工作区规模扩展（#11386）、独立无工作区会话（#8908）、命名会话（#10103）、worktree 会话生命周期清理（#11024）、会话轮换（PR #8927），形成清晰的 roadmap 集群。
- **Windows 平台稳定性与性能**：进程/PTY 泄漏（#11303、#11352、#6067）、内存占用（scope/memory-usage）。
- **核心模型能力**：扩展 Kimi、Qwen、DeepSeek 推理预设（PR #11349），反映多模型推理配置的需求。
- **构建与 CI 效率**：PNPM 与快速 bootstrap（#10444）、ECS runner 更新（#11403）、E2E 重试策略。
- **Web Shell 能力补全**：消息编辑重发（#11650）、shell/monitor 输出展示（#10906）、PTY 泄漏（#11352）。

## 6. 开发者关注点

- **Windows 进程泄漏是最持续的痛点**：从 v0.19.2 到当前版本反复出现，Issue #6067 甚至建议暂停使用；shell 侧已修复，但 web-terminal PTY 仍未闭环，Windows 用户资源消耗风险高。
- **遥测隐私**：#11198 指出默认开启的用量统计会上传未脱敏的原始工具错误文本（含命令行），涉及数据隐私与凭据泄漏风险。
- **升级即丢数据的体验问题**：会话历史因 `sourceType` 元数据缺失而不可见（#11574），会直接影响老用户升级信心。
- **CI/构建稳定性投入较大**：多条 E2E 重试、断言等待、启动崩溃修复 PR（#11297、#11134、#11001、#10455）显示测试与发布链路仍在夯实。
- **稳定性修复聚焦网络与流式重试**：#10347、#11634 表明开发者对瞬时网络/服务错误的自动恢复有明确诉求。

---
*说明：以上内容均基于所提供的 GitHub 数据整理，Issue/PR 状态与评论数取自数据快照；部分正文因原始数据截断而未展开。*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI 社区动态日报（2026-09-11）

> 数据来源：github.com/Hmbown/DeepSeek-TUI（仓库内容以 Codewhale 项目呈现）

## 1. 今日速览

今日无新版本发布，社区焦点集中在**测试稳定性与 CI 可靠性**（并行 flake、栈溢出、死锁）以及**分析基础设施落地**（ClickHouse 系列决策全部关闭）。功能侧最值得关注的是围绕**可插拔 Agent 记忆**与**工具能力扩展**（图像结果、子代理限流调度）的多条提案与 PR。此外，DeepSeek 计划于 2026-09-14 12:00（北京时间）下线 V4 Pro 服务，需提前评估影响。

## 2. 版本发布

过去 24 小时无新 Release。

## 3. 社区热点 Issues

1. **[#5929](https://github.com/Hmbown/Codewhale/issues/5929)（OPEN，5 评论）并行执行 flake 追踪**：6 个测试在负载下失败、单独运行通过，且均只失败一次。属于典型的可复现性黑洞，直接影响开发者对测试套件的信任，是当前评论数最高的 Issue。
2. **[#5988](https://github.com/Hmbown/Codewhale/issues/5988)（CLOSED，4 评论）libtest 线程栈溢出**：两个测试超出 2MiB libtest 线程栈，而 nextest 的进程隔离掩盖了该问题。已关闭，说明"CI 绿≠本地绿"的工具链差异已被正视。
3. **[#6045](https://github.com/Hmbown/Codewhale/issues/6045)（OPEN，3 评论）用户输入弹窗 UI 缺陷**：固定 22 行上限、居中遮罩、无滚动、无法返回，导致内容被截断且输入不可见，错误不可撤销。真实终端下的可用性问题，社区反馈具体且可复现。
4. **[#6025](https://github.com/Hmbown/Codewhale/issues/6025)（OPEN，3 评论）DeepSeek V4 Pro 停服通知**：2026-09-14 12:00（北京时间）起 Pro 模型请求将全部路由至 V4.1 Flash 并计费。这是影响所有用户的外部强制变更，需尽快确认路由与计费兼容性。
5. **[#5932](https://github.com/Hmbown/Codewhale/issues/5932)（CLOSED，3 评论）测试隔离泄漏到真实配置文件**：onboarding 测试把 fixture provider 写入了真实的 `~/.codewhale/setup_state.json`。测试污染用户环境属高严重度问题，已关闭。
6. **[#6049](https://github.com/Hmbown/Codewhale/issues/6049)（CLOSED，1 评论）完整 libtest 套件死锁**：env barrier 与 workshop guard 之间的 ABBA 反转导致全量测试冻结在 5285/12390。与 #5929/#5988 同属测试基础设施可靠性主题。
7. **[#6050](https://github.com/Hmbown/Codewhale/issues/6050)（OPEN，1 评论）可插拔 Agent 记忆后端**：`MemoryBackend` 目前仅有 `Native`/`Off` 两个变体，提案引入通用后端接缝，以 causal-memory / mem0 作为参考实现。
8. **[#6017](https://github.com/Hmbown/Codewhale/issues/6017)（OPEN，2 评论）跨会话持久记忆需求**：MemCode 创始人提出以持久记忆在命令与会话之间携带项目上下文和用户偏好，并寻求集成。与 #6050 形成同一方向的两股力量。
9. **[#5923](https://github.com/Hmbown/Codewhale/issues/5923)（OPEN，1 评论）Windows 窗口置顶阻塞 TUI 线程**：`toggle_pin` 在宿主终端消息泵上执行跨进程 `SetWindowPos/ShowWindow`，导致 UI 卡顿。平台特有问题，长期未解。
10. **[#6018](https://github.com/Hmbown/Codewhale/issues/6018)（OPEN，3 评论）+ [#6048](https://github.com/Hmbown/Codewhale/issues/6048)（OPEN，0 评论）Gemini 全新安装与思考签名回放问题**：在非官方路由上，thought-signature 回放失败时直接抛出 Google 原始 400 而非可操作错误。#6048 已从 #6018 拆分。

## 4. 重要 PR 进展

1. **[#6081](https://github.com/Hmbown/Codewhale/pull/6081)（CLOSED）fix(client): 解释缺失的 Gemini thought signature**：修复 #6048，当网关以 `missing a thought_signature` 拒绝回放时，给出选择内置 `google` provider 等可操作恢复指引。
2. **[#6022](https://github.com/Hmbown/Codewhale/pull/6022) / [#6021](https://github.com/Hmbown/Codewhale/pull/6021) / [#6020](https://github.com/Hmbown/Codewhale/pull/6020) / [#6019](https://github.com/Hmbown/Codewhale/pull/6019)（均 CLOSED）ClickHouse 分析栈四连**：分别覆盖按模型/账户维度的成本、速度、可靠性报表端点，表结构与保留策略，带稳定 ID/重试/去重的使用回执导出，以及引入 ClickHouse 作为分析库（强调是新增而非迁移）。
3. **[#6024](https://github.com/Hmbown/Codewhale/pull/6024)（CLOSED）决策：采用 Langfuse 还是自建 tracing**：基于 Langfuse 已用 ClickHouse 存储 traces/observations/scores 的现状，评估在自建等价设施前是否直接采用。
4. **[#6023](https://github.com/Hmbown/Codewhale/pull/6023)（CLOSED）决策：ClickPipes Postgres 复制 vs 自研导出**：权衡避免自建复制链路的方案，并要求记录决策理由。
5. **[#6051](https://github.com/Hmbown/Codewhale/pull/6051)（CLOSED）fix(zai): 强制思考模型与 BigModel 主机的推理控制**：GLM-5.3 / GLM-5.3-Flash 为强制思考模型，`thinking.type: "disabled"` 会被拒绝，`reasoning_effort` 仅接受 low/high/max。
6. **[#6052](https://github.com/Hmbown/Codewhale/pull/6052)（CLOSED）fix(tui): 对齐面向模型的文档与工具门控**：五项审计修复，其中包括 `finance` 工具声明了 `Network` 能力却从未检查 `context.network_policy` 的越权绕过。
7. **[#6053](https://github.com/Hmbown/Codewhale/pull/6053)（OPEN）feat(tools): 工具结果通过 metadata.images 携带图像**：约定 `ToolResult.metadata["images"]` 存放文件路径数组，引擎在回合循环中把可读、provider 支持的图像附加给视觉模型（如 computer-use 截图）。
8. **[#6055](https://github.com/Hmbown/Codewhale/pull/6055)（OPEN）feat(subagent): 限流自适应启动调度**：子代理蜂群共享 provider 时并行 429 已成常态，现有固定容量 `Semaphore` 无法收缩，需改为自适应调度。
9. **[#6054](https://github.com/Hmbown/Codewhale/pull/6054)（OPEN）feat(execpolicy): 增强 deny 匹配表达力**：新增四项能力，使规则集能覆盖真实外泄与破坏命令所用的向量（如 cmd.exe 单字母斜杠参数 `/f`、`/s`、`/q`）。
10. **[#6056](https://github.com/Hmbown/Codewhale/pull/6056)（OPEN）feat(session): 以 tar.xz 导出全保真会话归档**：作为 `/export` markdown（有损、面向分享）的机器可读对应物，从 CLI 或库内打包完整持久会话记录。
11. **[#6057](https://github.com/Hmbown/Codewhale/pull/6057)（CLOSED）chore(deps): 2026-09-11 安全升级**：夜间安全清扫，解决全部 9 个 Dependabot 告警（均为 npm dev/传递依赖，无 Cargo 告警），目标版本均在 7 天前（8/18–8/26）发布。

## 5. 功能需求趋势

- **Agent 记忆与上下文持久化**：#6050（可插拔后端接缝）与 #6017（跨会话持久记忆）指向同一方向——记忆从"硬编码单一实现"走向可扩展、可跨会话。
- **分析可观测性**：#6019–#6024 集中定义 ClickHouse 分析栈、导出链路、报表端点与 tracing 选型，目标是用真实使用数据回答"哪个模型多贵、多快、多容易失败"。
- **多模态工具结果**：#6053 让工具（如截图）能向视觉模型回传图像，拓展 computer-use 类场景。
- **多 provider / 新模型适配**：#6051（GLM-5.3 强制思考）、#6048（Gemini thought signature）、#6043（`deepseek-flash` 声明为默认却未注册）显示模型适配层仍需加固。
- **测试基础设施作为一等公民**：#5929、#5988、#5932、#6049 四条同主题问题说明并行执行、隔离与工具链一致性已成为瓶颈。
- **平台与 UI 体验**：#5923（Windows 线程阻塞）、#6045（输入弹窗）反映终端 UI 在真实环境中的可靠性缺口。

## 6. 开发者关注点

- **测试可信度**：并行 flake、栈溢出、死锁、隔离泄漏四类问题同时活跃，且 nextest 与 libtest 行为差异使 CI 无法暴露真实故障，社区对"测试通过"的信号信任度下降。
- **外部强制变更**：DeepSeek V4 Pro 将于 9-14 停服并路由至 V4.1 Flash，涉及计费差异，属需立即核实的高优先级外部风险。
- **错误可操作性**：Gemini 原始 400、`deepseek-flash` 默认未注册等案例中，用户拿到的是底层报错而非修复指引，收敛方向是"给出可执行建议"。
- **安全与权限一致性**：`finance` 工具绕过 network_policy、execpolicy deny 匹配表达力不足、夜间安全扫清扫 9 个告警，表明能力声明与实际门控的一致性仍待审计。
- **限流与规模化**：子代理并行触发 429 已成常态，固定容量信号量不再适用。
- **垃圾/无关 Issue 干扰**：#6082（眼科编码）与仓库主题完全无关，提示需要更积极的 Issue 分类与治理。

---
说明：本期所有条目均严格取自所提供的 GitHub 数据；PR 列表中部分条目在原始数据中标注为 CLOSED，此处保留其状态以保持准确。

</details>

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar) 自动生成。*