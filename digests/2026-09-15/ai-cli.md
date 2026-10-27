# AI CLI 工具社区动态日报 2026-09-15

> 生成时间: 2026-09-15 12:08 UTC | 覆盖工具: 9 个

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

**数据日期：2026-09-15** ｜ 覆盖工具：Claude Code、OpenAI Codex、Gemini CLI、GitHub Copilot CLI、Kimi Code CLI、OpenCode、Pi、Qwen Code、DeepSeek TUI

---

## 1. 生态全景

当前 AI CLI 工具已进入**"功能竞赛转向质量竞争"**的阶段：九个工具中有六个在 24 小时内发布了新版本，但发布内容以 Bug 修复、稳定性补强与细节打磨为主，重大新功能稀缺。社区情绪的重心明显从"能做什么"转向"能不能稳定跑完"——内存溢出、静默冻结、假成功、权限阻塞、计费异常等**可信度与可靠性问题**成为跨工具的共同痛点。与此同时，各工具的差异化路线开始清晰：Claude Code / Copilot CLI 走企业级与 IDE 协同，Codex / Gemini CLI 深耕多代理编排，OpenCode / Pi / DeepSeek TUI 则押注可扩展性与 provider 生态。计费透明度与工具调用正确性（而非模型能力本身）正在成为用户流失的主要风险点。

---

## 2. 各工具活跃度对比

| 工具 | Release（24h） | Issues 更新 | 热点评论量峰值 | PR 更新 | PR 状态特征 |
|---|---|---|---|---|---|
| **Claude Code** | 2 个（v2.1.271/272） | 10 条热点 + 多项补充 | 852 评论 / 476 👍 | 2 条 | 均为 CLOSED，贡献活跃度低 |
| **OpenAI Codex** | 3 个（rust 0.155.0 alpha.2.4/5/6） | 10 条热点 + 多项补充 | 90 评论 / 397 👍 | 10 条 | 几乎全部 copyberry[bot] 提交且 CLOSED |
| **Gemini CLI** | 1 个（v0.61.0-nightly） | 10 条热点 + 多项补充 | 13 评论 | 10 条 | 修复/安全导向，含 P1/P2 分级 |
| **GitHub Copilot CLI** | 3 个（v1.0.84-6/7/8） | 10 条热点 + 多项补充 | 13 评论 / 76 👍 | **0 条** | 无 PR 更新 |
| **Kimi Code CLI** | 无 | **3 条（全部）** | 2 评论 | **0 条** | 无 PR 更新 |
| **OpenCode** | 1 个（v1.18.31） | 10 条热点 + 多项补充 | 53 评论 / 138 👍 | 10 条 | 含 fix / 新功能 / 生态文档 |
| **Pi** | 无 | 10 条热点 + 多项补充 | 22 评论 / 60 👍 | 10 条 | 5 条 CLOSED、5 条 OPEN，含新 provider |
| **Qwen Code** | 4 个（v0.23.4 + nightly + CUA ×3） | 10 条热点 + 2 条已关闭 | 15 评论 | 10 条 | 含 breaking change 与 CI 阻塞 |
| **DeepSeek TUI** | 无 | 10 条热点 + 多项补充 | 8 评论 | **6 条（全部）** | 2 条新增、2 条 CLOSED |

**数据说明**：Issues/PR 数均为当日素材中明确列出的条目数，非全量统计；Kimi、Pi、DeepSeek TUI 三家的数据量本身较小，对比时需注意基数差异。

---

## 3. 共同关注的功能方向

以下方向在**三个及以上工具**中出现，属于行业级共性诉求：

### 3.1 性能与资源治理（出现最广）
- **Claude Code**：Windows PowerShell 工具调用等待约 154 秒（#94344）、macOS worktree 68 万文件 clonefile 冻结 30 秒（#93382）
- **OpenAI Codex**：macOS `syspolicyd` / `trustd` CPU 与内存失控（#25719，👍397）
- **GitHub Copilot CLI**：长会话 OOM 崩溃簇——resume（#4664/#4251/#4699）、压缩（#4780）、1.0.74 内存回归约 3–4 倍
- **OpenCode**：#30086 CPU 占用过高，可并行会话数从 10+ 降至 3

> **共性**：内存/CPU 失控已跨越 macOS、Windows、Linux 三平台，且多数与**长会话或大规模工具配置**相关，指向会话状态管理的架构级问题。

### 3.2 权限、安全与沙箱边界
- **Gemini CLI**：策略目录权限校验范围不全（PR #29333/#29336）、日志泄漏凭证（PR #29328）、Auto Memory 脱敏发生在内容外发之后（#26525）、破坏性 git 操作劝阻（#22672）
- **Qwen Code**：`--acp` 忽略审批模式、工具自动执行且从不发权限请求（#11887）；MCP 权限身份碰撞（PR #10202）；Bash 权限规则丢失环境变量前缀（PR #10212）
- **OpenCode**：压缩摘要注入可执行指令（#36682，SECURITY）
- **Pi**：`user_bash` 扩展失败静默回退宿主执行（#9068，安全问题）
- **Copilot CLI**：托管 Edit/Write 规则扩展至原生 shell 重定向（v1.0.84-6）

> **共性**：权限模型正从"能不能用"转向"边界是否可证明"，多工具出现**权限被绕过、脱敏时机错误、静默降级执行**三类问题。

### 3.3 会话恢复与状态持久化
- **DeepSeek TUI**：resume 后空 transcript（#6185）、picker 拒绝跨 Runtime host 会话（#6207）
- **Copilot CLI**：resume OOM（#4664/#4699）、会话历史 JSONL 仍在但界面丢失（Codex #44362、Qwen #11574）
- **OpenCode**：ACP 会话恢复丢失 model/effort/mode（v1.18.31）
- **Pi**：精确 session ID 查询避免全量扫描（PR #9601）、`/forget` 上下文回滚（PR #9615）
- **Qwen Code**：VS Code 扩展升级后历史会话全部隐藏（#11574）

> **共性**：**UI 视图与本地存储不一致**是普遍模式，会话恢复被视为"不该出错的核心流程"。

### 3.4 配置契约不被遵守
- **Gemini CLI**：Browser Agent 忽略 `settings.json` 的 `maxTurns`（#22267）、SDK 忽略 `env`/`timeoutSeconds`（PR #29327）
- **Codex**：原生 subagent 忽略显式 `model_provider` 覆盖（#40858）
- **Claude Code**：定时任务忽略 UI 权限模式与模型设置（#79782）
- **Pi**：SDK 嵌入时 `/login` 报告错误的全局 auth.json 路径（#9537）、RPC 不暴露默认模型（#9527）

> **共性**：配置优先级语义不清晰，对需要跨供应商编排的高级用户构成实际阻塞。

### 3.5 多模型 / Provider 兼容适配
- **Pi**：openai-completions 丢弃 Gemini thoughtSignature（#9444）、OpenAI 兼容网关丢弃工具结果图片（#9518）、Vertex 拒绝 thinking level（#9535）
- **OpenCode**：Muse Spark `encrypted_content` 错误（#48741）、DeepSeek V4 Flash 突需 opt-in（#39845）、多 provider 报错集中
- **Qwen Code**：DeepSeek tokenLimits 误判 128k/32k 而非 1M/384k（#11894）、MiniMax 工具参数丢失（PR #11842）
- **Pi / DeepSeek TUI**：均在新增 provider（OrcaRouter、GMI Cloud、Antigravity、AICraft）

> **共性**：**"官方语义正确、兼容网关拒绝"**是一类系统性适配问题，反映 provider 适配层尚缺标准化契约。

### 3.6 用量与计费透明度
- **Kimi Code CLI**：`cache_read` 每轮计费而 `cache_creation` 恒为 0，配额放大约 10 倍（#2626）
- **Claude Code**：额度异常快速耗尽（#38335，852 评论）、失败请求照样扣费（#62466）
- **Codex**：上下文压缩丢任务状态并耗尽周额度（#35935）
- **OpenCode**：Go 套餐用量 API 请求（#16017，👍138，全场最高赞）

> **共性**：计费正确性是**付费用户情绪最敏感**的单一议题，Kimi 与 Claude Code 的问题均为当前未解决状态。

### 3.7 "非核心功能侵入工作界面"
- **Codex**：要求彻底禁用 Pets（#34349，👍54）、默认关闭 whimsy 星效（#44561，👍43）
- **OpenCode**：恢复旧版左侧边栏 UI（#48882）、可选垂直标签栏（PR #38308）

> **共性**：用户倾向**默认值应符合专业使用习惯**，反对强制改版与装饰性功能。

---

## 4. 差异化定位分析

| 工具 | 功能侧重 | 目标用户 | 技术路线特征 |
|---|---|---|---|
| **Claude Code** | 终端 TUI 精细度 + 云端/自托管 Remote 会话 | 付费订阅重度用户、企业团队 | 快速小版本迭代；TUI 交互细节（`/config` 鼠标、`/diff`、kitty 协议）为主要迭代区；PR 贡献活跃度低 |
| **OpenAI Codex** | 多代理编排 + Guardian 评审架构 | 高级用户、跨供应商编排需求者 | Rust 实现、alpha 高频发布；PR 由 bot 主导的架构收敛（`AgentControl`、生命周期归位）；Windows 平台回归簇突出 |
| **Gemini CLI** | 子代理/代理编排 + 企业安全治理 | 企业用户、Linux/Wayland 用户 | 夜间版本节奏；Issue 几乎被 `area/agent` 占满；PR 侧以安全与权限校验为主 |
| **GitHub Copilot CLI** | IDE 协同 + 企业托管配置 + Agent Factory | VS Code 生态用户、企业托管场景 | 补丁版本高频（-6/-7/-8）；`/config` 侧边栏、`/sandbox` 网络规则；vi 模式等高票需求开始落地 |
| **Kimi Code CLI** | 订阅制编码套餐接入 | Kimi 年度订阅用户 | 数据量最小（3 条 Issue）；核心矛盾在计费统计正确性；第三方 agent 接入诉求（PicoClaw） |
| **OpenCode** | 可扩展性 + 生态插件 + UI 可定制 | 多 provider 用户、插件开发者 | 生态 PR 活跃（provider 文档、翻译、插件）；2.0 相关新问题已出现；回归问题优先级最高 |
| **Pi** | Provider 广度 + 扩展 API + 长会话性能 | SDK 嵌入方、多 provider 高级用户 | 一日内多个新 provider 合并；扩展系统与生命周期 API 持续演进；兼容网关适配问题密集 |
| **Qwen Code** | ACP/daemon 多会话 + CI 可靠性 | daemon 无人值守场景、VS Code/Remote-SSH 用户 | ACP 协议为核心；权限队列、JSON 边界、CI 阻塞为当前焦点；CUA Driver 预编译三平台分发 |
| **DeepSeek TUI** | 外部记忆 + 多代理（Fleet）+ 终端原生交互 | 终端重度用户、多任务工作流用户 | 0.9.14 里程碑堆叠 PR；核心路线推进高度集中于单一贡献者；需求入口集中度值得关注 |

---

## 5. 社区热度与成熟度

### 热度分层（按评论量峰值与 👍 峰值）

**第一梯队 —— 大规模用户基数 + 情绪集中**
- **Claude Code**：#38335 单条 852 评论、476 👍，量级远超其他工具，说明付费用户规模大且对额度问题高度敏感
- **OpenAI Codex**：#25719 达 90 评论、397 👍，且持续三个半月未关闭
- **OpenCode**：#16017 达 138 👍（全场最高）、#6651 达 80 👍，功能请求热度高于缺陷讨论

**第二梯队 —— 稳定活跃、议题分散**
- **Gemini CLI**：P1 问题持续获得关注，但单条评论量偏低（峰值 13）
- **Qwen Code**：P1 议题密集（TUI 静默退出、权限队列阻塞、JSON 边界），单条峰值 15 评论
- **Pi**：#2870（XDG 规范）60 👍 / 22 评论为峰值，Issue 清理节奏快（多数当日关闭）
- **GitHub Copilot CLI**：v1.0.84-6/7/8 三日连发，但 OOM 问题 6 条以上同类报告，说明迭代速度与质量存在张力

**第三梯队 —— 小样本、需谨慎解读**
- **DeepSeek TUI**：峰值 8 评论，且 20 条高评论 issue 中多条出自同一贡献者
- **Kimi Code CLI**：24 小时内仅 3 条 Issue 更新，但 #2626 属高优先级计费问题

### 成熟度信号

| 信号 | 表现 |
|---|---|
| **快速迭代期** | Codex（3 alpha/日）、Copilot CLI（3 补丁/日）、Qwen Code（4 版本/日）、Pi（单日多个 provider 合并） |
| **架构收敛期** | Codex 的 Guardian/`AgentControl` 重构、Pi 的扩展生命周期 API、DeepSeek TUI 的"单一真相来源"清理（#6036、#6143） |
| **质量债暴露期** | Copilot CLI 连续 OOM 回归、OpenCode 1.18.30 `a.name` 崩溃、Qwen Code CI 全仓失败 |
| **流程成熟度不足** | Claude Code 24h 仅 2 条 PR 且均关闭；Copilot CLI 与 Kimi 无 PR；DeepSeek TUI 提示 PR 前需先开 Issue 等维护者评论 |

---

## 6. 值得关注的趋势信号

### 信号一：可靠性正在取代能力成为核心竞争力
跨工具的**静默失败**（DeepSeek TUI #6184 无日志冻结、Pi #9068 静默回退、Gemini #22323 假成功）与**长会话资源失控**（Copilot CLI、OpenCode、Codex）表明：用户对"模型多强"的边际敏感度在下降，对"能不能信任它的输出与状态"的敏感度在上升。

> **对开发者的参考价值**：在评估工具时，应优先验证长会话（>4 小时）、大工具集（>10 个 MCP）、跨版本升级三个场景的稳定性，而非仅看基准能力。

### 信号二：权限模型从"开关"走向"可证明的边界"
Gemini CLI 的脱敏时机、Qwen Code 的 ACP 审批绕过、Pi 的扩展路由回退、OpenCode 的压缩摘要注入——这些问题的共同特征是**权限执行点与用户预期之间缺少可验证的一致性**。

> **对开发者的参考价值**：企业落地前应审计"脱敏/审批发生在数据流的哪一段"，而非仅检查是否存在该功能。

### 信号三：Provider 适配层成为新的技术债集中区
Pi、OpenCode、Qwen Code 三家均出现"官方语义正确但兼容网关拒绝"的问题，且 Pi 单日新增多个 provider。Provider 数量增长与适配质量呈反比趋势。

> **对开发者的参考价值**：多 provider 场景建议保留 provider 特定的回归测试集，尤其是工具调用签名、图片编码、流式增量三类字段。

### 信号四：计费透明度是付费用户留存的隐藏开关
Kimi 的 10 倍计费放大、Claude Code 的 852 评论额度议题、OpenCode 的 138 👍 用量 API 请求——三者的用户画像高度重叠（重度订阅用户），且均为**未解决或刚提出**状态。

> **对开发者的参考价值**：选型时建议确认工具是否提供 cache 命中率、按工具/按模型的明细用量；对于团队采购，这是可量化的成本控制项。

### 信号五：配置契约的可靠性被低估
Gemini CLI SDK 忽视 `timeoutSeconds`、Codex 忽视 `model_provider`、Claude Code 定时任务忽视权限模式——配置"看起来生效但不生效"是**最难排查的缺陷类型**。

> **对开发者的参考价值**：CI/CD 集成时应加入配置生效性断言，而非仅依赖文档承诺。

### 信号六：专业用户对"默认值噪声"的容忍度接近临界
Codex 的 Pets（👍54）与 whimsy（👍43）、OpenCode 的侧边栏回退（👍23）——三项高赞请求均指向"装饰性功能不应默认侵入工作界面"。

> **对开发者的参考价值**：这反映了 AI CLI 用户群体的**专业化收敛**——工具正在从"演示友好"转向"长时间工作台友好"，默认值设计将影响留存。

---

*本报告仅基于所提供的 2026-09-15 各工具社区动态素材整理，未对未出现的数据、指标或版本内容进行推断。Issue/PR 的最终处理状态以各仓库实时信息为准。*

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告（数据截止 2026-09-15）

## 1. 热门 Skills 排行（按社区关注度）

> 注：所提供数据中 PR 的 `评论` 字段均为 `undefined`，无法按评论数精确排序。以下依据 Issues 中对应 Skill 的讨论热度、相关 PR 的讨论关联度及更新活跃度综合排列。

**① skill-creator（触发评估缺陷，多 PR 集中修复）**
- 功能：创建与校验 Skill 的核心元工具。
- 热点：`run_eval.py` / 触发评估被报告"precision=100% recall=0%""0% 触发率"，多个 PR 同时修复评估隔离、Windows 兼容、YAML 引号校验等问题。
- 状态：OPEN（#1769、#1298、#539 均未合并）
- 链接：https://github.com/anthropics/skills/pull/1769 ；https://github.com/anthropics/skills/pull/1298

**② mcp-builder**
- 功能：构建与评估 MCP Server 的 Skill。
- 热点：`evaluation.py` 对真实 MCP Server "每个工具调用都被伪造为错误"（#1390）、TextContent 非 JSON 可序列化、mcp>=2 的 `streamable_http_client` 重命名与自定义 header 适配、默认模型版本过旧。
- 状态：OPEN（#1742、#1724、#1602）
- 链接：https://github.com/anthropics/skills/pull/1742 ；https://github.com/anthropics/skills/issues/1390

**③ claude-api**
- 功能：Claude API 使用参考（含模型清单）。
- 热点：模型 ID 退役信息未同步；被报告"单次工具调用急切注入约 156k tokens"耗尽上下文窗口（#1487），为上下文治理焦点。
- 状态：OPEN（#1607）
- 链接：https://github.com/anthropics/skills/issues/1487 ；https://github.com/anthropics/skills/pull/1607

**④ document-typography**
- 功能：生成文档的排版质量控制（孤字换行、孤行段落、编号错位）。
- 热点：直击 AI 生成文档的通用排版问题，被描述为"影响每一份文档"。
- 状态：OPEN（#514）
- 链接：https://github.com/anthropics/skills/pull/514

**⑤ ODT（OpenDocument 文本/模板/HTML 转换）**
- 功能：创建、填充、读取、转换 .odt/.ods/ODF，兼容 LibreOffice 场景。
- 热点：补齐 Office 格式覆盖面的需求（对照已有 DOCX/PPTX/XLSX/PDF）。
- 状态：OPEN（#486）
- 链接：https://github.com/anthropics/skills/pull/486

**⑥ pyxel（复古游戏开发）**
- 功能：对接 pyxel-mcp，用 Python 制作像素/8-bit 复古游戏。
- 热点：垂直创作型 Skill，跨月持续更新（2026-03 → 2026-09）。
- 状态：OPEN（#525）
- 链接：https://github.com/anthropics/skills/pull/525

**⑦ md2video-audio**
- 功能：零成本将 Markdown 直接编译为带类人配音的 MP4。
- 热点：内容生产自动化方向的高关注提案。
- 状态：OPEN（#1703）
- 链接：https://github.com/anthropics/skills/pull/1703

**⑧ scnet-hpc**
- 功能：通过 profile 化 SSH 与 Slurm 工作流操作 SCNet HPC 集群。
- 热点：面向科研/高性能计算的专业运维 Skill。
- 状态：OPEN（#1615）
- 链接：https://github.com/anthropics/skills/pull/1615

---

## 2. 社区需求趋势（来自 Issues）

- **安全与信任边界（最高热，43 评论）**：社区 Skill 以 `anthropic/` 命名空间分发，存在冒充官方、诱导提权风险。链接：https://github.com/anthropics/skills/issues/492
- **组织级 Skill 共享**：呼吁 Claude.ai 内置组织共享库，替代"下载 .skill → Slack 传 → 手动上传"的流程。链接：https://github.com/anthropics/skills/issues/228
- **上下文/Token 治理**：`claude-api` 单次注入 ~156k tokens、文档类插件内容重复导致上下文污染，成为对"Skill 体积与注入策略"的集中诉求。链接：https://github.com/anthropics/skills/issues/1487 ；https://github.com/anthropics/skills/issues/189
- **评估与测试可靠性**：`run_eval.py` 0% 触发率、mcp-builder 评估全量误判，反映社区希望有可信的 Skill 自测机制。链接：https://github.com/anthropics/skills/issues/556
- **强化学习/外部贡献入口**：多个 Issue 直接询问外部 Skill 贡献是否被接受（#1328、#1329），并主动提交 compact-memory（压缩型 Agent 状态符号化）等提案。链接：https://github.com/anthropics/skills/issues/1329
- **企业/平台集成**：SharePoint Online 文档处理的安全与上下文顾虑、AWS Bedrock 兼容、将 Skills 暴露为 MCP 接口。链接：https://github.com/anthropics/skills/issues/1175 ；https://github.com/anthropics/skills/issues/29 ；https://github.com/anthropics/skills/issues/16
- **Agent 治理与质量门禁**：agent-governance（策略执行、威胁检测、审计轨迹）、Reasoning Quality Gate（预任务校准 → 对抗评审 → 交付验证）等系统性提案。链接：https://github.com/anthropics/skills/issues/412 ；https://github.com/anthropics/skills/issues/1385

---

## 3. 高潜力待合并 Skills（评论活跃 / 近期更新）

| PR | Skill | 看点 | 状态 |
|---|---|---|---|
| [#1769](https://github.com/anthropics/skills/pull/1769) | fix(skill-creator) 触发检测 0% recall | 直接修复 #1721，9/14 提交、9/15 更新，时效性最高 | OPEN |
| [#1742](https://github.com/anthropics/skills/pull/1742) | fix(mcp-builder) mcp>=2 导入与新 header 配置 | 修复 #1668，解决新版 MCP 断代兼容 | OPEN |
| [#1703](https://github.com/anthropics/skills/pull/1703) | md2video-audio | 零成本 Markdown→配音视频，功能完整度高 | OPEN |
| [#1628](https://github.com/anthropics/skills/pull/1628) | Hivemind 多智能体编排 | 用免费模型跑 opencode 无头 worker，Claude Code 保留规划/审查权 | OPEN |
| [#1627](https://github.com/anthropics/skills/pull/1627) | buffer-api | 跨 Agent（Claude/Cursor/Codex 等）可移植的 Buffer GraphQL 排期 | OPEN |
| [#1602](https://github.com/anthropics/skills/pull/1602) | 评估序列化/指标/编码综合修复 | 一次覆盖多个仓库级稳定性问题 | OPEN |
| [#525](https://github.com/anthropics/skills/pull/525) | pyxel 复古游戏 | 垂直场景，持续维护近半年 | OPEN |
| [#514](https://github.com/anthropics/skills/pull/514) | document-typography | 通用文档质量，适用面最广 | OPEN |

> 说明：本批数据中所有展示的 PR 均为 `[OPEN]`，未见 merged 状态条目。

---

## 4. Skills 生态洞察

**当前社区最集中的诉求是"可信与可用"——即修复 skill-creator / mcp-builder / claude-api 等核心 Skill 的评估、兼容与上下文开销缺陷，同时建立安全的命名空间与共享机制，让社区 Skill 能被放心引用。**

---

# Claude Code 社区动态日报（2026-09-15）

## 今日速览
过去 24 小时内，Claude Code 发布 v2.1.271/v2.1.272 两个版本，重点为 Remote 会话加入 fast mode 与全屏 `/config` 面板的鼠标支持。社区讨论依旧集中在用量限制、跨平台桌面端稳定性与终端交互细节上，多个长期 Issue 在今日仍有更新。PR 侧仅有 2 条且均已关闭，代码贡献活跃度较低。

## 版本发布
- **v2.1.272**：Bug 修复与可靠性改进。（链接：https://github.com/anthropics/claude-code/releases）
- **v2.1.271**：
  - 在 Claude Code Remote 会话（云端与自托管 runner）中新增 fast mode：会话主机的 fast-mode 设置或在会话中输入 `/fast` 会在组织允许的范围内生效。
  - 全屏模式下 `/config` 面板新增鼠标支持，滚轮可滚动设置项。
  （链接：https://github.com/anthropics/claude-code/releases）

## 社区热点 Issues
1. **#38335 [OPEN][invalid] Claude Max 计划会话限制自 2026-03-23 起异常快速耗尽（CLI）** — 852 评论、476 👍，是当前社区情绪最集中的议题，直接关系付费用户的可用额度。链接：https://github.com/anthropics/claude-code/issues/38335
2. **#36151 [OPEN][invalid, area:auth] 移动端多账号切换（无需共享邮箱）** — 181 评论、724 👍，是点赞数最高的功能请求，反映多身份/多组织用户的强需求。链接：https://github.com/anthropics/claude-code/issues/36151
3. **#92958 [OPEN][bug, has repro, platform:windows, area:cowork] Cowork Windows：2026 年 9 月累积更新破坏 Plan9 share attach，device_bash 在 ARM64 与 x64 上均失效** — 已在五台机器上通过回滚 A/B 验证，属可复现的平台级回归。链接：https://github.com/anthropics/claude-code/issues/92958
4. **#69044 [OPEN][bug, area:model] 长期日常使用中反复出现的错误汇总** — 用户数月系统性记录问题，对定位模型/工具层长期缺陷有参考价值。链接：https://github.com/anthropics/claude-code/issues/69044
5. **#65961 [OPEN][bug, area:model] Claude 默认输出冗长代码注释且无视停止指令** — 225 👍，说明输出风格控制是普遍痛点，而非个案。链接：https://github.com/anthropics/claude-code/issues/65961
6. **#62466 [OPEN][bug] 反复出现 "Image couldn't be processed" API 错误并消耗用量额度** — 35 评论，错误直接扣减配额，影响成本与体验。链接：https://github.com/anthropics/claude-code/issues/62466
7. **#94344 [OPEN][bug, has repro, platform:windows, area:tools] Windows 桌面端每次新的 PowerShell 工具调用等待约 154 秒** — Bash 瞬时完成，已排除对话框、权限与主机 IPC，属严重性能回归。链接：https://github.com/anthropics/claude-code/issues/94344
8. **#93382 [OPEN][bug, has repro, platform:macos, regression] macOS 桌面端 worktreeDepSeed 的 68 万文件 clonefile 拖死主线程 rename(2)** — 每个新 worktree 会话确定性冻结约 30 秒，且被误判为“休眠”。链接：https://github.com/anthropics/claude-code/issues/93382
9. **#82624 [OPEN][area:hooks] Web/CCR git stop hook 存在两个误报，其中签名误报要求的 amend 循环永不收敛** — 会阻塞 agent 回合，影响 CI/自动化流程的可靠性。链接：https://github.com/anthropics/claude-code/issues/82624
10. **#85018 [OPEN][area:desktop] Google Cloud BigQuery 连接器 OAuth redirect_uri_mismatch** — 重复开启的历史问题（#43959/#48957/#62271），企业数据接入受阻。链接：https://github.com/anthropics/claude-code/issues/85018

补充可关注：#77298（Agent/Task 工具支持 per-call effort 参数，14 👍）、#79782（定时任务忽略 UI 权限模式与模型设置）、#94229（Windows 桌面恢复会话卡在 "Can't reach your computer"）、#71700 与 #76816（终端 kitty 协议门控、SGR 鼠标报告串入 prompt，均已关闭）。

## 重要 PR 进展
过去 24 小时内更新的 PR 共 2 条，且状态均为 CLOSED，缺乏可用合并记录：
1. **#83890 [CLOSED] Create pylint.yml**（作者 KrypticKode007）— 新增 pylint CI 配置，无摘要内容。链接：https://github.com/anthropics/claude-code/pull/83890
2. **#94184 [CLOSED] mods/diff: 固定表头、仅正文滚动、内置列表与基础快捷键、滚轮路由、DiffDialog 退出全屏**（作者 poteat）— 使停靠面板与内置 `/diff` 逐帧对齐：表头、基准行与 8 行文件列表保持固定，滚轮以每格 3 行移动 hunk，指针悬停在溢出列表上时按文件切换。链接：https://github.com/anthropics/claude-code/pull/94184

说明：本次数据中仅提供 2 条 PR，无法按要求挑选 10 条；其余 PR 信息未在素材中出现，不作补充。

## 功能需求趋势
- **账号与身份管理**：#36151 多账号切换（724 👍）显示多组织、多身份用户对认证层的强烈诉求；相关标签 area:auth。
- **性能与响应速度**：Windows PowerShell 工具调用 154 秒延迟（#94344）、macOS 桌面端 30 秒冻结（#93382）、Windows MSIX 更新失败（#76357），跨平台性能与稳定性是持续主题。
- **模型行为可控性**：默认冗长注释难以关闭（#65961）、per-call effort 参数（#77298），开发者希望对推理成本与输出风格有更细粒度控制。
- **IDE/终端交互体验**：全屏 `/config` 鼠标支持、kitty 键盘协议能力检测（#71700）、SGR 鼠标报告串入输入（#76816）、`/diff` 面板改造（#94184）表明 TUI 交互细节是高频迭代区。
- **桌面端与协作能力**：Cowork/Plan9 share（#92958）、定时任务权限模式（#79782）、私有链接分享（#85463）。
- **企业数据接入与安全**：BigQuery 连接器 OAuth（#85018）、security-guidance 竞态（#93310）。

## 开发者关注点
- **用量与计费透明度**：#38335（852 评论）与 #62466 显示额度异常消耗和失败请求照样扣费是最大不满来源。
- **跨平台桌面端可靠性**：Windows 更新失败需重启（#76357）、PowerShell 调用长延迟（#94344）、恢复会话无法连接（#94229）、macOS worktree 冻结（#93382），桌面端质量成为主要摩擦点。
- **工具层静默篡改与误判**：Bash 工具 `normalizeToolInput` 会剥离引号内的 `cd <cwd> && `（#76082，已关闭）、auto-mode 分类器误拦合法 Jira 删除请求（#89557）、定时任务忽略权限设置（#79782）。
- **错误信息可信度**：多个报告指出问题被错误归因（如“likely sleep”、hook 误报要求 amend 循环），开发者希望更准确的诊断与更少的假阳性阻塞。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报（2026-09-15）

## 1. 今日速览

今日 Codex Rust 端连续发布三个 0.155.0 alpha 版本（alpha.2.4 / alpha.5 / alpha.6），迭代节奏密集。社区侧，macOS 桌面版的 `syspolicyd` / `trustd` CPU 与内存失控问题以 90 条评论、397 个 👍 成为绝对焦点。PR 队列则以 copyberry[bot] 主导的 Guardian 评审架构重构为主，涉及生命周期、拒绝计数与中断规则的模块归位。

---

## 2. 版本发布

过去 24 小时内共 3 个 Rust 预发布版本，均为 alpha 通道，发布日期与用户侧变更说明未在数据中给出：

- **rust-v0.155.0-alpha.6** — Release 0.155.0-alpha.6
- **rust-v0.155.0-alpha.5** — Release 0.155.0-alpha.5
- **rust-v0.155.0-alpha.2.4** — Release 0.155.0-alpha.2.4

> 注：以上 Release 正文仅含版本号，无变更详情；alpha.2.4 与 alpha.5/alpha.6 的序号跨度较大，实际改动内容需以仓库 commits / changelog 为准。

---

## 3. 社区热点 Issues

1. **[#25719] macOS 桌面版反复触发 syspolicyd / trustd CPU 与内存失控**（OPEN，90 评论，👍397）
   全站热度最高的议题，持续三个半月仍未关闭。Codex Desktop 26.527.60818 在 Darwin arm64 上反复拉起系统策略与信任守护进程，属于系统级资源泄漏，影响面广，高 👍 反映大量用户共鸣。
   https://github.com/openai/codex/issues/25719

2. **[#205] 请求支持 .codexignore 文件**（CLOSED，10 评论，👍55）
   提出于 2025-04-17 的元老级需求，今日关闭。目标是阻止含敏感数据的文件被发送给模型，👍 数极高，说明敏感数据外发是长期未被满足的核心诉求。
   https://github.com/openai/codex/issues/205

3. **[#34349] 允许彻底禁用 Pets 并移除 “Show Pet” 菜单项**（OPEN，13 评论，👍54）
   👍 数第二高的开放议题。用户要求完全关闭 Pets 功能并从侧边栏移除入口，反映出对非核心功能侵入主界面的普遍抵触。
   https://github.com/openai/codex/issues/34349

4. **[#44561] 默认关闭 whimsy 星效（astra stars）**（OPEN，19 评论，👍43）
   TUI/CLI 侧的美观性诉求：Astra 下的星效应默认关闭，而非要求用户手工写入 `[tui] whimsy = false`。与上一条同属“开箱默认值应符合专业使用习惯”的诉求谱系。
   https://github.com/openai/codex/issues/44561

5. **[#42215] Windows ChatGPT Work：项目上下文同步在文件系统阶段反复失败**（OPEN，33 评论）
   评论数第二高。ChatGPT Windows 桌面端在既有 Project（23 个源文件）中无法开启新的本地聊天，错误信息为 “Could not use this project for a local chat”，属 Work 场景的阻塞性缺陷。
   https://github.com/openai/codex/issues/42215

6. **[#13270] `invalid_request_error`：工具调用 arguments 字符串超长**（OPEN，19 评论）
   自 2026-03-02 起长期开放的 tool-calls 缺陷，报错为 `input[15].arguments` 超出最大长度限制。属于工具调用链路的硬性长度约束问题，讨论持续半年仍未收敛。
   https://github.com/openai/codex/issues/13270

7. **[#17793] TUI 退格键删除多于一个字符**（OPEN，19 评论，👍5）
   影响 CLI 输入体验的基础交互 bug，从 0.120.0 延续至今，Pro / Linux / gpt-5.4 环境下复现。虽 👍 不高，但直接损害日常提示词编写效率。
   https://github.com/openai/codex/issues/17793

8. **[#40858] 原生 subagent 忽略显式 model_provider 覆盖**（OPEN，18 评论，👍12）
   model 覆盖生效但 provider 覆盖失效，涉及 gpt-5.6-luna 父代理调用 MiniMax-M3 子代理的混合配置场景。对需要跨供应商编排子代理的高级用户是关键阻塞。
   https://github.com/openai/codex/issues/40858

9. **[#39855] Windows Remote：每个无项目聊天都因畸形路径无法通过信任校验**（OPEN，19 评论，👍12）
   与 #42215、#44135 同属 Windows 侧的信任/连通性故障簇，显示 Windows 远程与安全校验路径存在系统性缺陷。
   https://github.com/openai/codex/issues/39855

10. **[#30271] 合法逆向工程工作被误判 “Cyber Abuse” 政策标记**（OPEN，11 评论，👍4）
    用户为经 chatgpt.com/cyber 验证的安全研究者，仍遭政策误报。涉及安全研究场景的误伤边界，对专业用户信任度影响较大。
    https://github.com/openai/codex/issues/30271

**其他值得留意的清单**：#44135（Windows Chrome 控制 `nodeRepl.fetch request failed`）、#41081（Windows 26.820 更新后发送按钮失效）、#41880（已删除会话残留于 Recents）、#35935（上下文压缩丢任务状态并耗尽周额度）、#44362（Windows 会话历史丢失但 JSONL 仍在）、#45001（恢复会话报 `list_turns is not supported yet`）、#38595（Linux 原生窗口装饰）。

---

## 4. 重要 PR 进展

今日 PR 列表几乎全部由 `copyberry[bot]` 提交并标记为 CLOSED，主题集中在 Guardian 评审与多代理控制的架构收敛：

1. **[#45680] 收紧 guardian 评估解析与熔断器可见性**
   将 `parse_guardian_assessment`、拒绝熔断器类型与方法及 `AUTO_REVIEW_DENIAL_WINDOW_SIZE` 收敛为 crate 可见（`pub(crate)`），缩小公开 API 面。
   https://github.com/openai/codex/pull/45680

2. **[#45672] 统一 Guardian reviewer 生命周期归属**
   用取消守卫将可复用 reviewer 与临时 fork 绑定到生命周期，覆盖 review future 被 drop 的情形，并替换已取消的可复用 reviewer。
   https://github.com/openai/codex/pull/45672

3. **[#45677] 将 Guardian 评审上报与拒绝计数下沉至扩展内**
   由 `SynchronousReview` 持有评估事件、遥测、告警、证据记录决策与连续拒绝计数。
   https://github.com/openai/codex/pull/45677

4. **[#45679] 废弃未使用的 Guardian 扩展原型 API**
   将 `guardian_ext` 标记为已移除的兼容开关，删除 `InternalSessionSpawner`、`InternalSessionSpawnFuture`、`ApprovalReviewInput` 等类型。
   https://github.com/openai/codex/pull/45679

5. **[#45676] 将生成代理的中断规则移入 `AgentControl`**
   抽取 V2 中断校验与派发为 `AgentControl::interrupt_spawned_agent`，返回代理路径与前置状态并附带类型化校验。
   https://github.com/openai/codex/pull/45676

6. **[#45670] V2 代理消息投递移入 `AgentControl`**
   从 V2 工具处理器中抽取目标校验、运行时重载与消息投递到 `AgentControl::deliver_message`。
   https://github.com/openai/codex/pull/45670

7. **[#45669] 在 agent 模块集中管理子代理配置**
   将 spawn / resume 共享配置助手迁至 `agent::child_config`，两个多代理版本统一走 `prepare_agent_spawn_config`。
   https://github.com/openai/codex/pull/45669

8. **[#45602] 修正限流与配额错误的 retry 分类**
   修复 `slow_down` 被误判为终态服务过载，以及余额与支出上限耗尽被降级为可重试流式错误的问题。
   https://github.com/openai/codex/pull/45602

9. **[#45612] 在 TUI 中渲染独立显示公式**
   TUI 已能将行内公式渲染为 Unicode，本 PR 补齐 display equation 的空间布局，并保持流式公式的可变性。
   https://github.com/openai/codex/pull/45612

10. **[#45579] 将当前线程附件复制到非临时 fork**
    创建非临时 fork（含回溯到更早 turn 的 fork）时复制源线程当前附件，副本获得新的附件 ID 与创建时间。
    https://github.com/openai/codex/pull/45579

**补充**：#45580（`codex app-server daemon update --from-cli` 支持复制并固定调用方 CLI 完整包，含降级与本地构建）、#45558（从完整本地 CLI 包初始化缺失的 daemon 安装）、#45559（服务重启后恢复 Windows 沙箱注册刷新）、#45649（app 与 MCP 分析新增 `elicitation_type` 分类，取值 `auth_or_link` / `approval`）。

---

## 5. 功能需求趋势

从本次 50 条 Issue 的标签分布看，社区关注点集中在以下方向：

- **Windows 平台稳定性**：`windows-os` 标签在热点 Issue 中占比最高，覆盖项目上下文同步、远程信任校验、浏览器控制、发送按钮失效、会话历史丢失、沙箱注册等多个子模块，已构成一组平台级回归簇。
- **TUI / CLI 体验打磨**：`TUI` 相关需求围绕默认值（whimsy 星效、粘贴文本折叠 #17332）、输入正确性（退格键）与渲染完整性（display math）展开，反映 CLI 重度用户对可配置性的要求。
- **开关与默认值治理**：Pets 禁用（#34349，👍54）、whimsy 默认关闭（#44561，👍43）等诉求表明用户希望非核心/装饰性功能默认不侵入工作界面。
- **敏感数据与安全边界**：`.codexignore`（#205，👍55）与逆向工程误报（#30271）分别对应“数据不出本地”与“政策不误伤专业场景”两类需求。
- **多代理与自定义模型**：`subagent`、`custom-model` 标签下出现 provider 覆盖失效（#40858）等问题，说明跨供应商子代理编排已有真实使用需求。

---

## 6. 开发者关注点

- **系统级资源与性能**：#25719（syspolicyd / trustd 失控，👍397）和 #7 语境下的 performance 标签问题，是当前用户情绪最集中的痛点，涉及 macOS 桌面端的基础可用性。
- **长上下文与请求限制**：#13270（arguments 超长）长期未解、#35935（上下文压缩丢失任务状态并耗尽周额度）表明上下文管理与请求体上限仍是核心摩擦点，且直接关联用量成本。
- **状态持久化与一致性**：#44362（历史从界面消失但 JSONL 仍在）、#41880（删除会话残留 Recents）、#45001（`list_turns is not supported yet`）共同指向会话状态在 UI 与本地存储之间的不一致。
- **Windows 信任与沙箱链路**：#39855、#42215、#44135 均涉及信任校验或控制通道失败，提示 Windows 侧的安全校验路径需要系统性排查而非逐个修补。
- **配置覆盖的可预期性**：#40858（model_provider 覆盖被忽略）显示配置优先级语义不清晰，会直接影响高级用户的架构选择。

---

*本日报仅基于上述 GitHub 数据整理，Issue/PR 的最终处理状态以仓库实时信息为准。*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报（2026-09-15）

## 1. 今日速览

今天发布了 v0.61.0 夜间版本，核心代码库持续推进稳定性与安全性修复，暂无重大功能变更。社区讨论高度集中在 **Agent/子代理行为可靠性**：子代理恢复被误报为成功、通用代理挂起、浏览器子代理在 Wayland 下失败等 P1 问题持续获得关注。安全与权限治理（策略目录权限校验、Auto Memory 脱敏、日志凭证泄漏）成为 PR 侧的主要发力方向。

## 2. 版本发布

**v0.61.0-nightly.20260915.g9c1b0a610**（夜间构建）
- 由 gemini-cli-robot 自动触发的版本号递增（对应 PR #29337 的版本 bump）。
- 完整变更对比：https://github.com/google-gemini/gemini-cli/compare/v0.61.0-nightly.20260914.g9c1b0a610...v0.61.0-nightly.20260915.g9c1b0a610

> 说明：数据源未提供该夜间版本的具体 commit 内容明细，此处不臆测变更范围。

## 3. 社区热点 Issues（Top 10）

1. **#22323 子代理达到 MAX_TURNS 后仍被报告为 GOAL 成功**（P1，13 条评论）
   子代理在未做任何分析就触及轮次上限时，仍返回 `status: "success"`，掩盖了中断事实。对依赖子代理结果的自动化流程是严重可信度问题。
   https://github.com/google-gemini/gemini-cli/issues/22323

2. **#19873 利用模型的 bash 亲和性：零依赖 OS 沙箱 + 执行后意图路由**（P2，9 条评论）
   提出发挥 Gemini 3 原生 bash 使用能力的方向性增强，涉及沙箱化与工具链路由，属于较大工作量的架构级提案。
   https://github.com/google-gemini/gemini-cli/issues/19873

3. **#21409 通用代理（generalist agent）永久挂起**（P1，8 条评论，8 个 👍）
   简单操作（如创建文件夹）也会挂起，最长等待一小时。点赞数最高，反映实际使用阻塞严重。
   https://github.com/google-gemini/gemini-cli/issues/21409

4. **#25166 Shell 命令执行完成后仍卡在 “Waiting input”**（P1，4 条评论，3 个 👍）
   命令已结束但界面仍显示等待输入，属于高频交互阻塞类缺陷。
   https://github.com/google-gemini/gemini-cli/issues/25166

5. **#21983 浏览器子代理在 Wayland 下失败**（P1，4 条评论）
   影响 Linux/Wayland 用户的浏览器自动化功能可用性。
   https://github.com/google-gemini/gemini-cli/issues/21983

6. **#26525 为 Auto Memory 增加确定性脱敏并减少日志**（P2，5 条评论）
   当前脱敏发生在内容已发送给后台提取模型之后，存在敏感信息外泄风险，安全面关注度高。
   https://github.com/google-gemini/gemini-cli/issues/26525

7. **#22745 评估 AST 感知的文件读取、检索与代码库映射**（P2，7 条评论）
   EPIC 级调研：通过 AST 感知工具精确读取方法边界，以减少轮次消耗，属长期效率优化方向。
   https://github.com/google-gemini/gemini-cli/issues/22745

8. **#21968 Gemini 对技能与子代理的使用不足**（P2，6 条评论）
   社区反馈模型几乎不会主动调用自定义技能/子代理，除非明确指令，影响扩展能力落地。
   https://github.com/google-gemini/gemini-cli/issues/21968

9. **#22672 Agent 应停止/劝阻破坏性操作**（P2，3 条评论）
   模型在复杂 git 操作中可能使用 `git reset` 或 `--force`，缺少更安全替代方案判断，属安全与信任问题。
   https://github.com/google-gemini/gemini-cli/issues/22672

10. **#24246 工具数量超过 128 时出现 400 错误**（P2，3 条评论）
    工具规模膨胀导致请求失败，社区期望代理能更智能地裁剪已启用工具范围。
    https://github.com/google-gemini/gemini-cli/issues/24246

**其他值得留意**：#28861（扩展未被 Extensions Gallery 索引）、#22267（Browser Agent 忽略 settings.json 覆盖）、#22186（输出钩子导致崩溃）、#26522/#26523（Auto Memory 重试与无效补丁处理）。

## 4. 重要 PR 进展（Top 10）

1. **#29333 fix(core): 校验按约定发现的策略目录权限**（P2，enterprise）
   `filterSecurePolicyDirectories` 此前只校验系统策略目录，现扩展检查用户与工作区目录——因这些目录同样会被 CLI 读取。
   https://github.com/google-gemini/gemini-cli/pull/29333

2. **#29328 fix(a2a-server): 遵守 LOG_LEVEL 并避免凭证进入日志**（P1，security）
   修复日志级别未生效与凭证泄漏两个问题，安全面优先级高。
   https://github.com/google-gemini/gemini-cli/pull/29328

3. **#29332 fix(core): 限制单次调用可扩展沙箱的次数**（P2）
   此前工具反复返回 `sandbox_expansion_required` 会导致 `_execute` 无计数递归，最终进程致命崩溃。
   https://github.com/google-gemini/gemini-cli/pull/29332

4. **#29335 fix(core): 确保 AgentLoopContext 属性在对象展开中保留**（P1，maintainer only）
   修复 `Config` 类以原型 getter 实现 `AgentLoopContext` 导致展开后属性丢失的问题。
   https://github.com/google-gemini/gemini-cli/pull/29335

5. **#29336 fix(core): 保护非系统策略目录的写权限**（P2，enterprise，Fixes #29311）
   将 `isDirectorySecure` 校验移出仅系统目录判断，支持 POSIX 与 Windows 下的当前用户所有权。
   https://github.com/google-gemini/gemini-cli/pull/29336

6. **#29327 fix(sdk): 遵守 AgentShellOptions 的 env 与 timeoutSeconds**（P2）
   `SdkAgentShell.exec` 此前忽略 `env` 与超时，`exec('sleep 30', { timeoutSeconds: 1 })` 会真的等 30 秒。
   https://github.com/google-gemini/gemini-cli/pull/29327

7. **#29242 fix(core): 停止将 401 作为子串匹配**（P2）
   原实现会把端口号、ID、行号中的 `401` 误判为认证错误。
   https://github.com/google-gemini/gemini-cli/pull/29242

8. **#29304 fix(cli): 截断时避免拆分代理对**（size/s）
   修复 `sanitizeForDisplay` 在 emoji 边界截断产生孤立 UTF-16 代理字符的问题。
   https://github.com/google-gemini/gemini-cli/pull/29304

9. **#29329 fix(cli): 截断后暂停 stdin 并明确放弃时机**（P2）
   指出 `process.stdin.destroy()` 不可逆——销毁后的 stdin 在本进程生命周期内无法再次读取。
   https://github.com/google-gemini/gemini-cli/pull/29329

10. **#29330 fix(cli): 保留 logger 响应前输入的文本并只读取一次**（P2）
    针对在 `setCurrentSessionMessages` 更新器中调用 `setPastSessionMessages` 的 React 纯度违规，并附带发现的两处相关问题。
    https://github.com/google-gemini/gemini-cli/pull/29330

**其他**：#29237（后台进程信号终止时不再打印 `Exit Code: null`）、#29334（A2A server 非内存存储返回 501 后提前返回）、#29326（修复 unassign-inactive-assignees 工作流缺失的循环）、#29337（夜间版本 bump）。

## 5. 功能需求趋势

从本次 Issues 数据可提炼出以下方向：

- **子代理与代理编排（绝对主导）**：Issue 列表几乎被 `area/agent` 标签占满，涵盖子代理恢复语义（#22323）、通用代理挂起（#21409）、技能与子代理调用率（#21968）、本地子代理 Sprint（#20195）、任务追踪器文件工具（#21000）、浏览器代理韧性（#22232）与配置覆盖（#22267）。
- **沙箱化与执行安全**：零依赖 OS 沙箱 + 后执行意图路由（#19873）、破坏性命令劝阻（#22672）、沙箱扩展次数限制（PR #29332）。
- **权限与凭证安全**：策略目录权限校验（PR #29333、#29336）、日志凭证隔离（PR #29328）、Auto Memory 确定性脱敏（#26525）。
- **上下文与工具规模治理**：AST 感知读取/检索（#22745）、工具超 128 个报 400（#24246）、临时脚本散落（#23571）。
- **扩展生态**：Extensions Gallery 索引问题（#28861）。
- **跨平台可用性**：Wayland 下的浏览器子代理失败（#21983）。

## 6. 开发者关注点

- **“静默失败”与“假成功”最伤信任**：子代理触及上限却报 `GOAL/success`（#22323）、无效 Auto Memory 补丁被静默跳过（#26523）——开发者需要可观测、可归因的失败信号。
- **挂起类缺陷造成实际阻塞**：通用代理挂起（#21409）、Shell 命令完成后卡在等待输入（#25166）、输出钩子导致崩溃（#22186），均为高频、直接影响日常使用的问题。
- **安全默认值不足**：脱敏在内容外发之后才执行（#26525）、日志可能含凭证（PR #29328）、策略目录校验范围不完整（PR #29333/#29336）。
- **配置不被遵守**：Browser Agent 忽略 `settings.json` 的 `maxTurns`（#22267）、SDK 忽略 `env`/`timeoutSeconds`（PR #29327），反映配置契约与实现存在脱节。
- **工具数量扩展的边界**：工具超过 128 个即触发 400 错误（#24246），与扩展、技能生态的成长形成直接张力。

---
*本日报仅基于所提供的 GitHub 数据生成，未对未出现的版本内容、日期或指标进行推断。*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报（2026-09-15）

## 1. 今日速览

今日发布 3 个补丁版本（v1.0.84-6/7/8），集中在配置侧边栏、沙箱网络规则、Claude 自适应思考修复与 Agent Factory 运行控制。社区侧最突出的问题仍是**长会话内存耗尽（OOM）**：今日更新的 Issues 中有 6 条以上同类崩溃报告，涵盖 resume、compaction、事件存储重试等多个触发路径。此外，MCP 初始化、OAuth 回调端口、Windows 平台行为等集成类问题持续活跃。

---

## 2. 版本发布

### v1.0.84-8
- **新增**：新增 `transcriptView: "concise"` 配置，将工具调用活动归组为可展开的工作摘要。
- **改进**：可在 `/factories` 对话框中暂停与恢复 Agent Factory 运行。
- **修复**：登录、切换账号或登出后，模型列表现可正确刷新。

### v1.0.84-7
- **修复**：修正发送给「仅自适应（adaptive-only）」Claude 模型的 thinking 形状——保持自适应而非报错；关闭 thinking 时改为降低推理强度，且禁用 thinking 时推理强度上限限制为 high。
- **修复**：`/clear` 关闭会话时现在会运行 `sessionEnd` 钩子。

### v1.0.84-6
- **新增**：新增 `/config` 命令，打开 CLI 内的侧边栏配置界面。
- **新增**：新增 `/sandbox` 网络主机允许/拒绝规则，且不替换已配置的上游代理。
- **改进**：托管的 Edit 与 Write 规则现可应用于已识别的原生 shell 重定向及支持的就地 `sed` 操作。

---

## 3. 社区热点 Issues

1. **[#13 [CLOSED] CLI 输入应支持 vi/vim 模式](https://github.com/github/copilot-cli/issues/13)** — 13 条评论、76 个 👍，是今日互动量最高的 Issue。长期高票需求终于关闭，对 Vim 用户群体意义重大。
2. **[#54 [CLOSED] 应完整集成 VS Code Copilot Chat 的能力](https://github.com/github/copilot-cli/issues/54)** — 13 条评论、20 个 👍。反映用户希望 CLI 成为已配置 VS Code 项目的批处理/命令行入口，与 IDE 集成趋势直接相关。
3. **[#4664 [OPEN] 恢复长期会话时 JavaScript 堆内存溢出崩溃](https://github.com/github/copilot-cli/issues/4664)** — 8 条评论。崩溃发生在加载/恢复阶段，用户无法继续工作，属高阻断性问题。
4. **[#4725 [OPEN] Linux 平台频繁 JavaScript 堆内存溢出](https://github.com/github/copilot-cli/issues/4725)** — 6 条评论。问题描述为"每隔几分钟"崩溃一次，严重影响日常可用性。
5. **[#4849 [OPEN] 降低子代理工作流的延迟与评审循环开销](https://github.com/github/copilot-cli/issues/4849)** — 今日新建、5 条评论。指出代理启动、任务交接、反复评审/修复循环每轮耗时数分钟，是性能方向的新声音。
6. **[#4699 [OPEN] 长 `--resume` 会话 OOM，且崩溃转储写入用户当前目录](https://github.com/github/copilot-cli/issues/4699)** — 5 个 👍。除 OOM 本身外，转储文件污染工作目录是额外的用户困扰。
7. **[#4251 [OPEN] 1.0.74 恢复大会话 OOM 且单核空转约 70 分钟（相较 1.0.73 回归，内存约 3–4 倍）](https://github.com/github/copilot-cli/issues/4251)** — 用户通过控制变量 A/B 测试定位到版本回归，证据链清晰。
8. **[#4780 [OPEN] 会话压缩 OOM 且永不完成，导致会话永久无法恢复](https://github.com/github/copilot-cli/issues/4780)** — 触及压缩阈值后进入不可恢复的崩溃循环，属数据可用性风险。
9. **[#1148 [OPEN] Windows 平台将所有触及文件的行尾改为 CRLF](https://github.com/github/copilot-cli/issues/1148)** — 7 条评论、8 个 👍。会静默污染 LF 仓库的整个文件历史，对跨平台团队影响大。
10. **[#4552 [OPEN] MCP 服务器不可用被误报为"waiting on ide"并导致 CLI 挂起](https://github.com/github/copilot-cli/issues/4552)** — 错误信息误导性强，用户难以自行定位配置问题。

其他值得留意：**[#4800](https://github.com/github/copilot-cli/issues/4800)** 与 **[#4793](https://github.com/github/copilot-cli/issues/4793)** 均反映 CIMD OAuth 回调端口与声明不一致；**[#4847](https://github.com/github/copilot-cli/issues/4847)**（今日新建）报告托管设置自动刷新会破坏 IDE MCP 重载并禁用 `/allow-all`。

---

## 4. 重要 PR 进展

过去 24 小时内**无更新的 Pull Request**，本节无内容可报告。

---

## 5. 功能需求趋势

从今日 Issues 分布看，社区关注集中在以下方向：

- **会话生命周期与内存管理（最突出）**：OOM 崩溃报告占据今日热点的大半，触发场景覆盖 resume 加载（#4664、#4251、#4699）、上下文压缩（#4780）、内存压力看门狗误触发（#4506）、事件存储耗尽重试风暴（#4639）。这是一个系统性的内存治理问题，而非单点缺陷。
- **IDE 与生态集成**：VS Code Copilot Chat 能力打通（#54，已关闭）、IDE MCP 动态重载（#4847）、托管设置刷新与插件市场注册（#4556）均指向 CLI 与 IDE、企业托管配置之间的协同。
- **MCP 与认证互操作**：MCP 初始化协议兼容（#4525，已关闭）、服务器不可用时的错误呈现（#4552）、CIMD OAuth 回调端口一致性（#4800、#4793）。
- **终端交互体验**：vi/vim 输入模式（#13，已关闭）、终端主题配色适配（#4843）、编辑密集型用户的键盘导航需求。
- **代理工作流性能**：子代理启动与评审循环的延迟优化（#4849）首次以独立 Issue 形式提出。
- **跨平台一致性**：Windows 行尾处理（#1148）、Windows 每次执行命令弹出可见 PowerShell 窗口（#4549）。

---

## 6. 开发者关注点

- **长会话可靠性是当前最大痛点**：多位开发者在不同版本、不同平台上遭遇堆内存溢出，其中 #4251 明确指出 1.0.74 起存在相对 1.0.73 的回归。恢复旧会话、压缩上下文这类核心流程一旦崩溃，会直接中断工作，且部分场景（#4780）会导致会话永久不可恢复。
- **错误信息与实际原因脱节**：MCP 服务器不可用被报为"waiting on ide"（#4552），OAuth 失败信息指向重定向 URI 而非端口绑定逻辑（#4800），增加了排查成本。
- **工具副作用需更可控**：自动改写文件行尾（#1148）、崩溃转储写入工作目录（#4699）属于"CLI 动了不该动的东西"，对版本控制洁净度有实际影响。
- **平台细节打磨仍有缺口**：Windows 控制台窗口闪烁（#4549）、Warp 终端配色不遵循主题（#4843）等虽非阻断性问题，但高频出现，影响长期使用体验。
- **企业托管配置路径的健壮性**：托管 Edit/Write 规则、`extraKnownMarketplaces` 注册、托管设置自动刷新等企业场景连续出现静默失败或副作用报告（#4556、#4847），值得优先排查。

---

*注：本日报仅基于所提供的数据来源生成，未包含任何外部补充信息。*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报（2026-09-15）

## 1. 今日速览

今日无新版本发布、无 Pull Request 更新，社区动态集中在 3 条 Issue 上。最值得关注的是配额计费异常问题 #2626：用户报告 `cache_read` 每轮均被计费而 `cache_creation` 始终为 0，导致配额消耗放大约 10 倍，该问题自 2026-08-28 出现、至今仍处 OPEN 状态。另外两条为长期挂起后于今日关闭的老 Issue（#1433、#1435）。

## 2. 版本发布

过去 24 小时无新 Release，本节略。

## 3. 社区热点 Issues

> 说明：过去 24 小时内更新的 Issue 共 3 条，不足 10 条，以下为全部条目。

**1. #2626 [OPEN] 配额异常消耗：`cache_read` 每轮计费而 `cache_creation` 恒为 0（放大约 10 倍）**
- 作者：ahmadyaseen35-coder ｜ 创建：2026-08-29 ｜ 更新：2026-09-15 ｜ 评论：2 ｜ 👍：0
- 为什么重要：这是当前唯一活跃的未解决问题，直接涉及付费订阅用户的计费正确性。报告者称其为 Kimi Code 年度订阅用户，问题自 2026-08-28 晚间（+03:00）开始出现，5 小时配额窗口内出现异常消耗；现象为所有会话中 `cache_read` 被计费但 `cache_creation` 为 0，放大约 10 倍。若属实，属于影响所有重度用户成本的高优先级计费/缓存统计缺陷。
- 社区反应：评论数 2，热度不高但性质敏感，需官方给出计费口径说明或修复结论。
- 链接：MoonshotAI/kimi-cli Issue #2626

**2. #1433 [CLOSED] clipboard 图片处理仅考虑 Ctrl + V，忽略 Cmd + V**
- 作者：ringotypowriter ｜ 创建：2026-03-13 ｜ 更新：2026-09-15 ｜ 评论：2 ｜ 👍：1
- 为什么重要：macOS（Darwin 25.3）平台下粘贴图片的快捷键未被正确处理，属于影响 macOS 用户日常使用的平台兼容性缺陷。报告环境为 kimi 1.22.0、Kimi Coding Plan、kimi-for-coding 模型。
- 社区反应：获得 1 个 👍，今日关闭，说明已得到处理（数据未提供具体处理结论）。
- 链接：MoonshotAI/kimi-cli Issue #1433

**3. #1435 [CLOSED] 功能请求：为 Kimi For Coding API 增加 PicoClaw 支持**
- 作者：clawaizhang ｜ 创建：2026-03-14 ｜ 更新：2026-09-15 ｜ 评论：0 ｜ 👍：0
- 为什么重要：来自开源 AI agent 项目 PicoClaw（sipeed/picoclaw）用户的集成请求，希望使用 Kimi For Coding 订阅接入该 agent 项目，反映第三方 agent 生态对接需求。
- 社区反应：无评论、无点赞，今日关闭。
- 链接：MoonshotAI/kimi-cli Issue #1435

## 4. 重要 PR 进展

过去 24 小时内无 Pull Request 更新，暂无可汇总的 PR 进展。

## 5. 功能需求趋势

基于今日更新的 3 条 Issue，可提炼出以下方向：

- **计费与配额透明度**：`cache_read` / `cache_creation` 的计量逻辑与配额扣减规则需要更清晰的说明与准确性保障（#2626）。
- **平台/快捷键兼容性**：macOS 下 Cmd 系快捷键与 Ctrl 系快捷键需对等支持，尤其是剪贴板图片粘贴等交互场景（#1433）。
- **第三方 agent 生态集成**：社区希望 Kimi For Coding API 能被外部开源 agent 项目（如 PicoClaw）直接接入使用（#1435）。

## 6. 开发者关注点

- **付费用户对配额消耗异常高度敏感**：#2626 涉及约 10 倍的计费放大，直接影响订阅成本预期，是当前最需要官方回应的痛点。
- **macOS 用户体验细节**：快捷键处理不完整这类"小问题"会持续影响日常使用，且往往长期挂起（#1433 从 3 月创建至 9 月才关闭）。
- **订阅可用范围**：用户希望 Kimi For Coding 订阅不局限于官方 CLI，而能覆盖更多第三方 agent 工具（#1435）。
- **响应时效**：两条 3 月创建的老 Issue 均于今日集中关闭，而 8 月底提出的计费问题仍在处理中，建议关注官方对计费类问题的后续说明。

---

*注：本日报仅基于所提供的 GitHub 数据（1 条 Issues 更新集、0 PR、0 Release）生成，未包含数据的部分不作推测。*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报（2026-09-15）

## 1. 今日速览

今天最值得关注的是 **1.18.30 引入的严重回归**：多条 Issue 报告每次 prompt 都会以 `TypeError: undefined is not an object (evaluating 'a.name')` 失败，涉及 SystemPrompt.environment 路径。与此同时，v1.18.31 发布，主要修复 ACP 会话恢复与 TUI 远程配置认证错误。社区侧，"恢复旧版左侧边栏 UI"与"子代理动态模型选择"成为高赞讨论焦点。

## 2. 版本发布

**v1.18.31**

- **Core（Bugfixes）**：修复加载、恢复或 fork 会话时，ACP 会话的 model、effort、mode 以及 reasoning chunk 边界丢失的问题（@JacobNWolf）。
- **TUI（Bugfixes）**：启动时显示远程配置认证错误，并以失败状态退出。
- **Extensions**：包含改进项（发布说明中该部分内容被截断）。

## 3. 社区热点 Issues

1. **#30086 [OPEN] 新版本 CPU 占用过高**（53 评论 / 👍29）
   约 7 天前起 CPU 使用率骤升，此前可并行 10+ 会话，现在 3 个就吃力。高评论数说明影响面广，是当前最热的稳定性问题。
   https://github.com/anomalyco/opencode/issues/30086

2. **#6651 [OPEN] 通过 Task 工具为子代理动态选择模型**（41 评论 / 👍80）
   最高赞的功能请求：主代理调用子代理时无法动态指定模型。对成本和能力分层使用场景价值很高。
   https://github.com/anomalyco/opencode/issues/6651

3. **#16017 [CLOSED] 新增 Go 套餐用量/余额 API 端点**（35 评论 / 👍138）
   请求暴露 Go 订阅的滚动/周/月窗口用量数据。全场最高赞，同时已关闭，值得关注落地方式。
   https://github.com/anomalyco/opencode/issues/16017

4. **#48741 [OPEN] [2.0] Muse Spark 系列在图片/工具调用时出现严重错误**（27 评论）
   Zen 上任何 Muse Spark 模型返回 `reasoning encrypted_content was not issued to this caller`，属 2.0 相关的新问题。
   https://github.com/anomalyco/opencode/issues/48741

5. **#39845 [OPEN] DeepSeek V4 Flash 突然要求"启用中国托管模型"**（23 评论 / 👍27）
   会话中途失效并要求在 workspace 显式 opt-in，涉及合规与可用性双重影响。
   https://github.com/anomalyco/opencode/issues/39845

6. **#48882 [OPEN] 恢复旧版左侧边栏 UI 作为可选项**（18 评论 / 👍23）
   针对侧边栏改版（#20242）移除经典布局的反馈，UI 变更引发的用户反弹。
   https://github.com/anomalyco/opencode/issues/48882

7. **#48645 [OPEN] 1.18.30 回归：每个 prompt 都在 SystemPrompt.environment 崩溃**（7 评论 / 👍12）
   全新会话首次 prompt 即失败，1.18.18 正常。这是今日版本的直接关联问题，优先级高。
   https://github.com/anomalyco/opencode/issues/48645

8. **#48811 [OPEN] macOS：每个 prompt 都以 `undefined is not an object (evaluating 'a.name')` 失败**（9 评论 / 👍37）
   与 #48645 症状一致但获赞更高，说明影响 macOS 用户群体广泛。
   https://github.com/anomalyco/opencode/issues/48811

9. **#48743 [OPEN] 官方 MCP 预热/预启动机制**（4 评论）
   Windows 桌面端配置 14+ 本地 stdio MCP 时，全部在会话开始时被标记 `status=failed`，需逐个手动重启。
   https://github.com/anomalyco/opencode/issues/48743

10. **#36682 [OPEN] [SECURITY] 压缩摘要注入可执行指令**（4 评论）
    自动压缩产生的摘要含"Next Move"行动项，模型会当作输入执行而未经用户同意——安全类问题，值得跟踪。
    https://github.com/anomalyco/opencode/issues/36682

（另可关注 #37815 Kimi K3 在 Console Go 上请求失败、#48069 Bedrock GPT-6 Astra 读取图片后失败、#37354 OpenRouter 对 Gemini 的未授权请求。）

## 4. 重要 PR 进展

1. **#49162 [OPEN] 会话空闲前延迟配置 reload**（fix）
   桌面主题切换器（Omarchy、Noctalia）发送 SIGUSR2 刷新，改为等会话空闲，关闭 #42621。
   https://github.com/anomalyco/opencode/pull/49162

2. **#48990 [CLOSED] SIGUSR2 reload 时配置未变则跳过实例销毁**（fix）
   同一 #42621 根因的另一处理路径，已合并。
   https://github.com/anomalyco/opencode/pull/48990

3. **#47510 [OPEN] 压缩被取代的持久化事件快照**（fix）
   关闭 #47223，并修复 #47512、#47513，同时覆盖 #33356、#46833、#47022 等同一根因问题。
   https://github.com/anomalyco/opencode/pull/47510

4. **#49061 [OPEN] 空补全不管 finish reason 一律重试**（fix）
   在 #40531 基础上扩大守卫范围，覆盖 `finish: "stop"`（原只处理 `"unknown"`），关联 #37735。
   https://github.com/anomalyco/opencode/pull/49061

5. **#35311 [OPEN] 同一仓库的多个 clone 被识别为不同项目**（fix + refactor）
   一次性关闭 #17940、#19348、#29869、#31593、#42040 等十余个重复 Issue。
   https://github.com/anomalyco/opencode/pull/35311

6. **#49155 [CLOSED] 问题面板自定义输入忽略 IME 组合键**（fix）
   修复日文等 IME 确认/取消组合时的 Enter/Escape 被误判为提交/关闭，关闭 #49154。
   https://github.com/anomalyco/opencode/pull/49155

7. **#49148 [CLOSED] 外部 git commit 后刷新 review 面板**（fix）
   review 面板缓存 vcs.diff 且禁用了所有 refetch hook，外部 commit 不会触发刷新。
   https://github.com/anomalyco/opencode/pull/49148

8. **#46562 [OPEN] 将助手消息 footer 做成可替换插件**（新功能）
   把每条助手消息的 footer 改为插件化，关闭 #46268，指向更强的 TUI 扩展性。
   https://github.com/anomalyco/opencode/pull/46562

9. **#38308 [OPEN] 可选垂直标签栏**（新功能，contributor）
   在 Settings › General 中开启，水平标签仍为默认且不移除任何功能，关闭 #36942。
   https://github.com/anomalyco/opencode/pull/38308

10. **生态/文档类集中提交**
    - #49161 / #49152：将 opencode-agent-factory-plugin 加入官方生态页。
    - #35119：新增 QVAC 本地 provider 文档。
    - #47783：新增波斯语（fa）README 翻译。
    - #48722：新增 lintlang 插件。
    - #49157：新增 xKiro provider（依赖 models.dev 目录先合并）。
    https://github.com/anomalyco/opencode/pull/49161 · https://github.com/anomalyco/opencode/pull/35119 · https://github.com/anomalyco/opencode/pull/47783

## 5. 功能需求趋势

- **UI 可定制化**：恢复旧版侧边栏（#48882）、垂直标签栏（#38308）、旧/新 UI 切换常驻（#38230）——用户反对强制改版，倾向可选项。
- **多代理/模型编排**：子代理动态模型选择（#6651，👍80）是最集中的功能诉求。
- **用量与计费可见性**：Go 套餐用量 API（#16017，👍138）反映订阅用户对配额透明度需求强。
- **MCP 体验优化**：本地 MCP 冷启动批量失败（#48743）指向需要预热/重连机制。
- **会话与上下文管理**：会话标题按当前上下文自动刷新（#17631）、临时目录一等配置（#28173）。
- **权限与工作流摩擦**：外部目录反复弹权限（#28173）属高频小痛点。
- **模型兼容性**：Muse Spark、Kimi K3、DeepSeek V4 Flash、Bedrock GPT-6 Astra、OpenRouter Gemini 的报错集中出现，指向 provider 适配层压力。

## 6. 开发者关注点

- **回归问题优先级最高**：1.18.30 的 `a.name` 崩溃（#48645、#48811）和 CPU 飙升（#30086）是当前最直接的可用性阻断项，均为高评论/高赞。
- **Provider 适配层脆弱**：多模型同时出现 upstream 失败与字段不兼容（图片字段、encrypted_content），开发者希望更快定位与隔离。
- **MCP 大规模配置不可用**：14+ 本地 MCP 全部冷启动失败，说明并发初始化缺少健壮处理。
- **安全信任边界**：压缩摘要被当作可执行指令（#36682）提示需要在上下文注入上加约束。
- **生态接入活跃**：大量 docs PR（插件、provider、翻译）说明社区扩展意愿强，但部分带 `needs:issue`、`needs:compliance` 标签，流程门槛仍在。

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报 · 2026-09-15

> 数据来源：github.com/badlogic/pi-mono（Issues/PR 链接前缀为 `earendil-works/pi`）

## 1. 今日速览

今日无新版本发布，社区活动集中在 Issue 集中清理与 PR 评审。过去 24 小时内 50 条 Issue 更新中，绝大多数被标记为 `no-action` 并关闭；仍处于 OPEN 状态的问题集中在多模态工具调用、OpenAI 兼容网关适配和 Google Vertex 适配层。PR 侧则以新 Provider 接入（OrcaRouter、GMI Cloud、Antigravity）和兼容性修复为主线。

## 2. 版本发布

过去 24 小时无新 Release。

## 3. 社区热点 Issues

1. **[#2870 CLOSED] 遵循 XDG Base Directory**（👍 60，评论 22）— 今日互动量最高的 Issue。Linux 下应用配置/状态目录污染 home 目录，要求改用 `$XDG_CONFIG_HOME` 等标准路径。高赞数表明这是长期积累的普遍诉求。
   https://github.com/earendil-works/pi/issues/2870

2. **[#9444 OPEN] openai-completions 丢弃 Gemini thoughtSignature**（评论 3）— 流式 `tool_calls[]` 增量中的 `thoughtSignature` 未被捕获，导致经 OpenAI 兼容网关访问的 Gemini 在多轮工具调用中签名丢失、链路中断。属 OPEN 状态，影响面较大。
   https://github.com/earendil-works/pi/issues/9444

3. **[#9535 OPEN] Vertex 拒绝 Gemini 3 Flash 的 THINKING_LEVEL_MINIMAL**（评论 1）— `google-vertex.ts` 中两个 helper 发出的 thinking level 被 Vertex 拒绝，涉及 `@earendil-works/pi-ai` 0.85.1。新版模型适配的典型回归。
   https://github.com/earendil-works/pi/issues/9535

4. **[#9534 OPEN] OpenRouter 丢弃 Claude 仅含签名的 reasoning chunk**（评论 1）— 作者自述"可能不符合预期行为"，但指出了 Claude 经 OpenRouter 时的 reasoning 处理边界问题，需维护者确认语义。
   https://github.com/earendil-works/pi/issues/9534

5. **[#9068 OPEN] [bug, inprogress] user_bash 扩展失败时静默回退到宿主执行**（评论 2）— 当扩展将 `!`/`!!` 路由到隔离域（如 Gondolin VM）时，路由处理器抛异常会使 Pi 继续用默认本地 BashOperations 执行。属安全性问题且已在处理中，值得优先关注。
   https://github.com/earendil-works/pi/issues/9068

6. **[#9537 OPEN] SDK 嵌入时 /login 状态行报告全局 auth.json 路径**（评论 1）— 使用自定义 `agentDir` 时凭证路径提示错误，影响 SDK 集成方的可用性判断。
   https://github.com/earendil-works/pi/issues/9537

7. **[#9520 CLOSED] stream_read_error 未触发自动重试** — Pi 0.85.1 收到该错误码后直接结束会话，需手动再发消息。`retry.ts` 错误分类未识别该错误码，属可靠性缺陷。
   https://github.com/earendil-works/pi/issues/9520

8. **[#9519 CLOSED] iTerm2 内联图片缺少重绘路径** — 常规模式下每次重绘都重新发送图片载荷并堆叠副本，实测约 50 张内联图片（约 98MB base64）时明显卡顿。长会话体验痛点。
   https://github.com/earendil-works/pi/issues/9519

9. **[#9518 CLOSED] openai-responses 工具结果图片被兼容网关丢弃** — tool-result 图片按官方 Responses 编码放入 `function_call_output.output`，但兼容网关不接受数组形式，导致图片静默丢失。
   https://github.com/earendil-works/pi/issues/9518

10. **[#9490 CLOSED] findPowerShell 硬编码 C:\ 路径** — 在仅存在 D: 盘的 Windows 系统上 `findPowerShell()` 失败，硬编码路径是跨平台健壮性的典型问题。
    https://github.com/earendil-works/pi/issues/9490

其他值得留意：**#9521**（`/resume` 列表 Ctrl+F 创建会话副本）、**#9480**（MCP 重连后不刷新 tools/list）、**#9493**（技能横幅忽略 `disable-model-invocation`）、**#9527**（RPC `get_available_models` 不暴露默认模型）。

## 4. 重要 PR 进展

1. **[#9620 CLOSED] 新增 OrcaRouter 一等 Provider**（含 API-key 与 OAuth 2.0 PKCE 登录、能力过滤的模型列表）— 今日创建并关闭的新 Provider 集成。
   https://github.com/earendil-works/pi/pull/9620

2. **[#9619 CLOSED] 保留根级 schema 组合器对 Anthropic 模型可见**（Closes #9134）— Anthropic 对工具 `input_schema` 根部的 `anyOf`/`oneOf`/`allOf` 返回 400，原非严格转换会丢弃它们，导致模型只看到分散属性。
   https://github.com/earendil-works/pi/pull/9619

3. **[#9615 CLOSED] 新增 `/forget` 命令实现上下文回滚** — 可从模型上下文中移除最近 N 个用户轮次，并可选同步移除会话文件内容。
   https://github.com/earendil-works/pi/pull/9615

4. **[#9607 CLOSED] 将 provider hooks 应用于摘要流** — 此前 compaction / branch summary 直接调用 session streamFunction，遗漏 `onPayload`，导致 `before_provider_request` 扩展被跳过。
   https://github.com/earendil-works/pi/pull/9607

5. **[#9605 CLOSED] 新增 GMI Cloud Provider** — OpenAI Chat Completions 聚合器，复用 `openai-completions`，无需新 API 实现。
   https://github.com/earendil-works/pi/pull/9605

6. **[#9594 CLOSED] 新增 Gemini-only Antigravity Provider** — 以一等 OAuth Provider 形式恢复订阅制 Gemini 访问能力。
   https://github.com/earendil-works/pi/pull/9594

7. **[#9548 OPEN] 对话中途的系统消息**（作者 mitsuhiko）— 将系统提示词与工具变更纳入 transcript，而非静默改写起始条件，使指令/工具变更可被记录并在恢复会话后还原。
   https://github.com/earendil-works/pi/pull/9548

8. **[#9601 OPEN] 精确 session ID 查询避免全量 transcript 扫描**（Fixes #9440）— 改用精确 ID 读取会话头部，作者对比后选择同步实现以获得更好的缓存命中；直接针对长会话恢复性能。
   https://github.com/earendil-works/pi/pull/9601

9. **[#8635 OPEN] 惰性设置期间保留 aborted stop reason**（Fixes #8409）— 将请求中止信号穿透 lazy stream setup 包装层，并补充了工具执行中中止的回归测试。
   https://github.com/earendil-works/pi/pull/8635

10. **[#9434 OPEN] 允许扩展追加会话系统提示词**（Closes #9432）— `session_start` 处理器可返回只增的 `systemPromptAppend`，按扩展/处理器顺序收集并附带来源元数据与错误隔离。
    https://github.com/earendil-works/pi/pull/9434

其他：#9611（清理已移除的 `session_switch` 处理器）、#9604（向调用方上报 shell pid，服务无头/桌面宿主）、#9274（修复 diff 渲染中缩进丢失）、#8732（DeepSeek 系端点跨模型重放保留 reasoning_content）。

## 5. 功能需求趋势

- **Provider 与认证生态扩张**：OrcaRouter、GMI Cloud、Antigravity、Cursor Pro（#9530）等接连提出接入，同时伴随 OAuth/订阅制登录路径需求。
- **OpenAI 兼容网关的适配一致性**：多个 Issue（#9444、#9518、#9508、#9534）指向同一类问题——Pi 按官方 OpenAI 语义发送字段、角色、认证头或内容编码，但在兼容网关上被拒绝或静默丢弃。
- **跨平台健壮性**：XDG 目录规范（#2870）、非 C: 盘 Windows（#9490）均属路径与环境假设问题。
- **TUI 渲染与长会话性能**：内联图片重绘（#9519）、标题内行内代码样式丢失（#9473）、diff 缩进（#9274）、会话恢复扫描（#9601）共同构成体验主线。
- **会话可编辑性与上下文控制**：`/forget`（#9615）、会话 fork 快捷键（#9521）、中途系统消息（#9548）反映出对上下文精细管理的需求。
- **扩展与 MCP 集成能力**：系统提示词追加（#9434）、MCP 重连刷新工具列表（#9480）、user_bash 路由安全（#9068）。

## 6. 开发者关注点

- **静默失败与回退语义**：`user_bash` 路由异常回退本地执行（#9068）、图片被网关静默丢弃（#9518）、`stream_read_error` 不触发重试（#9520）——开发者希望失败可见、可重试，而非无声降级。
- **错误分类与重试覆盖不全**：`retry.ts` 未覆盖部分流错误码，导致会话中断需手动恢复。
- **扩展 API 的一致性与生命周期**：`ui_prompt_start/end` 仅覆盖扩展发起的提示（#9522）、`session_switch` 已移除但旧扩展仍注册（#9611），API 变更与遗留代码之间存在摩擦。
- **SDK/RPC 嵌入场景的配置正确性**：自定义 `agentDir` 下凭证路径提示错误（#9537）、RPC 不暴露默认模型导致集成方回退到 `models[0]`（#9527）。
- **安全相关 Issue 的处理节奏**：如 #9500（SIGILL 崩溃，原因未确认）标注为新建者自动关闭策略下结案，反映出社区对自动关闭策略可能掩盖有效报告的担忧。
- **贡献流程**：多条 PR/Issue 提及需先开 Issue 并等待维护者评论后再提 PR（CONTRIBUTING.md），流程约束对贡献意愿有一定影响（#9591、#9475）。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报（2026-09-15）

## 今日速览

今日社区焦点集中在 **ACP/daemon 权限与会话管理的稳定性问题**：多个 P1 级 Issue 指出权限队列绑定 ACP 连接会阻塞其他会话、超大命令通知会击穿 JSON 限制导致会话 404。同时 v0.23.4 正式版发布并带来一项 breaking change（移除频道消息前缀过滤），CUA Driver 连续发布 v0.20.7–v0.20.9 三个预编译版本。

---

## 版本发布

**v0.23.4（正式版）**
- **Breaking Change**：移除频道的可配置消息前缀过滤，符合条件的消息将直接遵循常规的发送者、群组、提及与配对策略，无需前缀。[#11571](https://github.com/QwenLM/qwen-code/pull/11571)

**v0.23.4-nightly.20260914.f024b37689（nightly）**
- `test`: 记录 Windows inode 门控掩盖的行为，并取消一项跳过（[@yiliang114](https://github.com/QwenLM/qwen-code/pull/11853)）
- `fix(cua)`: 保留相关修复

**cua-driver-rs v0.20.7 / v0.20.8 / v0.20.9（连续三个版本）**
- 提供 Qwen CUA Driver 预编译二进制（位于 `packages/cua-driver`）
- **macOS**：代码签名 + 公证的通用二进制 + `QwenCuaDriver.app`
- **Linux**：未签名（x86_64 + arm64，glibc 2.31 下限）
- **Windows**：未签名 UIAccess worker + 原生 SDK payload（x86_64 + arm64）

---

## 社区热点 Issues

1. **[#11500](https://github.com/QwenLM/qwen-code/issues/11500) [OPEN, P1] TUI 在多个后台 agent 完成时静默退出（未捕获 React #185）**
   多个后台子 agent 接连完成时，交互式 TUI 因未捕获的 React error #185（"Maximum update depth exceeded"）崩溃，直接退回 shell 且无错误提示。根因指向 Ink `useBoxMetrics` 的 layout-listener setState 循环。15 条评论，是今日讨论最热的问题，属于会直接影响用户体验的渲染级 bug。

2. **[#11795](https://github.com/QwenLM/qwen-code/issues/11795) [OPEN, P1] 权限队列以 ACP 连接为键，一个空闲会话的未应答提示会无限期静默阻塞其他所有会话**
   该问题指出 daemon 上单个会话的未应答权限提示会阻塞全部其他会话。报告者说明 fix 3（序列化范围）已在 #11802 实现，fix 1 经评审后撤回，Issue 保持开放以跟踪 fix 2/4。对多会话 daemon 使用场景影响极大。

3. **[#11908](https://github.com/QwenLM/qwen-code/issues/11908) [OPEN, P1] 超大 `available_commands_update` 触发 MAX_JSON_NODES，拆毁通道并导致后续请求全部 404**
   会话启动通知超过 MAX_JSON_NODES（10,000）时被判定为 `ndjson_invalid_message`，通道 fail-closed 拆毁、子进程被 SIGKILL，之后所有请求返回 `No session with id`。这是典型的"一个边界条件导致整个会话不可用"的严重缺陷。

4. **[#11895](https://github.com/QwenLM/qwen-code/issues/11895) [OPEN, P1] `/review` 的维度 agent 读取主检出而非 PR worktree**
   brief 只给出 diff 的绝对路径，从不提供 worktree 路径，导致 agent 固定在临时 worktree 的约束只对相对路径生效。对代码审查结果的准确性有实质影响。

5. **[#11937](https://github.com/QwenLM/qwen-code/issues/11937) [OPEN, P1] CI "Run .github/scripts helper tests" 全仓失败——gh shim 被当作 ESM 加载**
   `Lint & Static` 在 step 35 失败，凡是 `ci_profile` 为 `full` 的 PR 都受影响。这是当前开发流程的阻塞项，已有 PR #11938 尝试修复。

6. **[#11887](https://github.com/QwenLM/qwen-code/issues/11887) [OPEN, P2] `--acp` 忽略审批模式：工具自动执行，从不发送 `session/request_permission`**
   即使会话设置为限制性模式，仍会执行文件写入和 shell 命令且零权限请求。属于安全相关的集成缺陷，社区已给出原始 ACP 客户端复现步骤。

7. **[#11936](https://github.com/QwenLM/qwen-code/issues/11936) [OPEN, P2] `USE_OPENAI_RESPONSES` 泄漏字面量 `${session_id}` 且不发送 User-Agent**
   在自定义 `customHeaders` 中使用运行时占位符时，Responses 线路上没有占位符展开，字面量被直接发送。影响使用 OpenAI 兼容网关的用户。

8. **[#11894](https://github.com/QwenLM/qwen-code/issues/11894) [OPEN, P2] tokenLimits 将 DeepSeek `deepseek-flash` 解析为 128k/32k 而非 V4 的 1M/384k**
   `tokenLimits.ts` 按模型名匹配上下文窗口，导致长会话在压缩失败后终止。反映了按名称匹配模型能力的脆弱性。

9. **[#11945](https://github.com/QwenLM/qwen-code/issues/11945) [OPEN, P2] MCP Apps：Amplitude 图表 UI 被固定 1 MiB HTML 限制与 10s 资源超时拒绝**
   同一会话中两次调用产生不同的资源加载结果，说明限制条件可能与真实 MCP App 负载不匹配。

10. **[#11949](https://github.com/QwenLM/qwen-code/issues/11949) [OPEN, P3] feat(web-shell): 为嵌入式宿主提供可配置的设置展示**
    为嵌入式 WebShell 增加可选 `settings` prop，在保留现有设置页的同时控制其呈现方式。属于 WebShell 生态扩展方向的功能请求。

> 另有两项值得留意的已关闭 Issue：[#11556](https://github.com/QwenLM/qwen-code/issues/11556)（Remote-SSH 下 webview 卡在加载中）与 [#11574](https://github.com/QwenLM/qwen-code/issues/11574)（VS Code 扩展升级后历史会话全部隐藏，因 `sourceType` 元数据仅存在于 0.23.x 之后的记录中）。二者均反映了升级兼容性问题。

---

## 重要 PR 进展

1. **[#11865](https://github.com/QwenLM/qwen-code/pull/11865) [OPEN] fix(core): `isAsyncOperator` 仅将空格/制表符/换行视为分词符**
   修正 `rule-parser.ts` 中判定裸 `&` 是异步操作符还是重定向一部分的逻辑。

2. **[#11241](https://github.com/QwenLM/qwen-code/pull/11241) [OPEN] feat(browser-use): 新增基于 Playwright 的 Browser SDK**
   在持久化 Node REPL 中运行的、面向模型的类型化 Browser SDK，控制既有 Chrome 会话；API 设计参考 Codex Browser Use，含语义化 Playwright 定位器与 DOM 快照引用。

3. **[#5928](https://github.com/QwenLM/qwen-code/pull/5928) [OPEN] feat(config): 新增 `todosDirectory` 设置以支持项目内 todo 持久化**
   允许 todo-write 工具将待办持久化在项目内（如 `.qwen/todos`）而非仅存于全局运行时目录，使任务状态可提交到仓库。

4. **[#11842](https://github.com/QwenLM/qwen-code/pull/11842) [OPEN] fix(core): 在 MiniMax chat-completions 线路上保留工具参数**
   阻止 chat-completions 序列化器在路由到 MiniMax 时发送缺少 `parameters` 键的函数声明，其他路由保持不变。

5. **[#10212](https://github.com/QwenLM/qwen-code/pull/10212) [OPEN] fix(core): 在 Bash 权限规则中保留环境变量前缀**
   将前导环境赋值纳入 Bash 权限身份的一部分（覆盖 exact、prefix、glob 三类模式），而非在匹配前静默剥离。

6. **[#10202](https://github.com/QwenLM/qwen-code/pull/10202) [OPEN] fix(permissions): 防止 MCP 权限身份碰撞**
   避免经旧版或 provider 名称净化后发生身份碰撞的 MCP 权限规则被放大；服务级与通配符匹配改用权威原始 MCP 身份。

7. **[#11943](https://github.com/QwenLM/qwen-code/pull/11943) [CLOSED] feat(core): 按名称运行已保存 workflow，并将 workflow 授权绑定到脚本内容**
   `Workflow({ name, args })` 成为选择脚本的第三种方式；对已保存或扩展 workflow 的"始终允许"会固定到用户批准的脚本上。

8. **[#11931](https://github.com/QwenLM/qwen-code/pull/11931) [CLOSED] feat(workflow): 在运行与恢复之间保留 source 引用**
   为原生 Workflow 工具增加可选的调用方 `sourceRef: { id, revision }`，在首次 agent 调度前持久化，并保留在运行结果与实时/历史任务数据中。

9. **[#11806](https://github.com/QwenLM/qwen-code/pull/11806) [OPEN] fix(cli): 关闭与 ink 对比发现的十二处 OpenTUI 差异**
   OpenTUI 渲染器迁移的后续修复，其中八处来自在真实机器上以同一假模型服务并行驱动两种渲染器时暴露的差异，四处由评审发现。

10. **[#11825](https://github.com/QwenLM/qwen-code/pull/11825) [OPEN] fix(core): 在错误脱敏后保留 ripgrep 探测失败区分（#11715）**
    将结构化的 `probeFailureReason` 元数据（`unhealthy_probe` | `probe_execution_failed` | `binary_missing` | `command_not_found`）直接附加到 `RipgrepError` 实例上。

> 另有 [#11830](https://github.com/QwenLM/qwen-code/pull/11830)（在会话侧边栏展示 Qwen Live 任务）与 [#11840](https://github.com/QwenLM/qwen-code/pull/11840)（默认开启跨会话消息）两项目前已关闭的相关改动。

---

## 功能需求趋势

- **IDE 集成（VS Code / Remote-SSH）**：Issue #11556、#11574、#11514、#9911、#9387 集中在 VS Code 扩展的 Remote-SSH 兼容、会话历史可见性、thinking effort 上限选项，以及 WebShell 切换后消息编辑/回滚能力的恢复。
- **会话管理与 daemon 可靠性**：Issue #11795、#11908、#11944 指向同一方向——让无人值守的 daemon 会话更易诊断、更可预测，包括权限队列可见性、JSON 边界处理与机器可读结果。
- **权限与安全（ACP / MCP）**：Issue #11887（ACP 忽略审批模式）与 PR #10212、#10202 显示权限身份建模是持续投入的重点。
- **内容生成与模型适配**：Issue #11936（Responses 线路占位符）、#11894（DeepSeek tokenLimits）、PR #11842（MiniMax 参数）表明多 provider 适配仍有较多边角问题。
- **WebShell 与嵌入式宿主**：Issue #11949 提出为嵌入式宿主提供可配置设置展示，延续 WebShell 作为统一宿主的演进方向。
- **MCP 生态（MCP Apps）**：Issue #11945 反映 MCP App 展示的资源限制需要与真实负载对齐。

---

## 开发者关注点

- **多会话/daemon 场景下的静默失败**：权限提示阻塞、会话 404、TUI 无提示崩溃——问题共同特征是"无错误信息、难以定位"，开发者呼吁更好的可观测性（参见 #11944 提出的机器可读结果与可诊断性）。
- **升级兼容性**：多个 Issue 涉及版本升级后的回退（#2382 的 0.12.2 可用而 0.12.3 不可用、#11574 的历史会话消失），社区对破坏性变更的敏感度较高。
- **CI 阻塞**：#11937 使 `full` profile 的 PR 全面失败，直接影响贡献流程，相关修复 PR #11938 已提交。
- **文档与代码不一致**：Issue #11948 列出四处注释/JSDoc 与实际代码相矛盾的实例，指出这类误导性文档会同时消耗维护者与 AI 编码工具的时间。
- **审查工具的正确性**：#11895 指出 `/review` 的维度 agent 读取主检出而非 PR worktree，可能影响自动审查结论的可信度。

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI 社区动态日报（2026-09-15）

> 数据来源：github.com/Hmbown/DeepSeek-TUI

## 1. 今日速览

今日无新版本发布，但社区活跃度很高：v0.9.14 里程碑进入第二轮堆叠 PR（#6175），同时 #6222 提出 TUI 整体视觉重设计（Shoreline 配色）；Issues 侧集中爆发了一批 0.9.13 的运行时稳定性缺陷——引擎静默冻结（#6184）、resume 后空 transcript（#6185）、终端作业控制缺失（#6169）。

## 2. 版本发布

过去 24 小时无 Releases。

## 3. 社区热点 Issues

1. **#6184 [OPEN][bug] 引擎中途静默冻结**（bevis-wong，评论 5）
   0.9.13（Rust TUI，zai / GLM-5.3-Flash）在长时间工具密集运行中停止产出模型输出，用户消息已持久化但永不被回答，无报错、无日志、无崩溃记录。是今日最严重的运行时问题，并已衍生出 #6185。
   https://github.com/Hmbown/DeepSeek-TUI/issues/6184

2. **#6011 [OPEN][enhancement] usage 与工具诊断：token 计量 + 工具调用错误模式**（评论 8，本批最高）
   要求按组件/按模型统计 token（含缓存命中率）、按工具分槽统计、压缩成本，并收集工具调用错误模式。属于 Core C11。评论数最多，说明社区对可观测性诉求强烈。
   https://github.com/Hmbown/DeepSeek-TUI/issues/6011

3. **#6015 [OPEN][documentation, enhancement] 车队自适应防卡死 + 更宽的安全只读 shell 语法**（评论 7）
   主张以默认值（而非每用户配置）形式提供防卡死与只读 shell 语法，已纳入 Core 计划 C05/C06。
   https://github.com/Hmbown/DeepSeek-TUI/issues/6015

4. **#6185 [OPEN][bug] Resume 渲染空 transcript，工具调用修复每次加载都重跑**（评论 3）
   journal 完好但恢复后界面为空；相同的 tool-call 修复结果未被持久化，导致每次加载重复执行。触发场景为强制退出 #6184 的冻结运行。
   https://github.com/Hmbown/DeepSeek-TUI/issues/6185

5. **#6169 [OPEN][bug] TUI 缺少作业控制握手**（评论 4）
   前台归属检查仅在启动时执行一次（`event_loop.rs:628`）；进程组进入后台后 SIGTTIN 将其挂起，终端残留鼠标/粘贴/raw 模式，进行中的回合只存在于 checkpoint。影响 CLI 工作流中的多任务切换。
   https://github.com/Hmbown/DeepSeek-TUI/issues/6169

6. **#6207 [OPEN][bug] Session Picker 拒绝“非本机 Runtime host”的已保存会话**（评论 4）
   打开已保存会话时报错 “This session belongs to another Runtime host”，即便 runtime store 实际存在。跨进程/host 的会话恢复路径存在硬性阻断。
   https://github.com/Hmbown/DeepSeek-TUI/issues/6207

7. **#6036 [OPEN] “Fleet” 与 “agent” 概念重复存储，成员混用角色/模型绑定/路由书签**（评论 4）
   由创始人提出并引用其原话，指出同一对象在两处存储造成真实困惑（如 `scout` 同时存在于两者）。涉及数据模型层面的概念收敛。
   https://github.com/Hmbown/DeepSeek-TUI/issues/6036

8. **#6086 [OPEN][enhancement, external-memory] session scratchpad + 三存储统一寻址**（评论 3）
   目标是让 scratchpad、Agent Mail、workshop 协同工作，并为三类存储建立统一寻址方案。当前确认 scratchpad 尚不存在。属外部记忆方向的核心需求。
   https://github.com/Hmbown/DeepSeek-TUI/issues/6086

9. **#6190 [OPEN] 引导输入未作为最新历史条目插入**（评论 3）
   在 agent 工作时发送 steering 消息，该消息落在已有内容之上方，时间线与用户阅读顺序不一致。影响多轮交互的可读性。
   https://github.com/Hmbown/DeepSeek-TUI/issues/6190

10. **#6173 [OPEN][bug] Gemini：`/models` 报错**（评论 2）
    与 #6018 相同的安装与复现步骤，获取模型列表时报错。属外部 provider 接入的回归问题。
    https://github.com/Hmbown/DeepSeek-TUI/issues/6173

其他值得留意：#6165（`/hooks edit` 未暂停 TUI 输入线程，导致按键被编辑器与输入框拆分）、#6150（已关闭，`Op::SendMessage` 拆出 `TurnSpec`）、#6014（已关闭，Session Picker UX 四项改进）、#6033（已关闭，MCP 改为按需惰性连接）、#6132（已关闭，Cargo 警告策略校验）。

## 4. 重要 PR 进展

1. **#6175 [OPEN] v0.9.14 第二轮切片：惰性 MCP、会话恢复 + picker UX、启动修复行**（Hmbown）
   基于 `origin/main`（433685b2，在 #6161 合并后）的堆叠切片，共九个 issue 切片加一个 lint 修复，每个 issue 一个 commit 且逐个验证。
   https://github.com/Hmbown/DeepSeek-TUI/pull/6175

2. **#6222 [OPEN] TUI 重设计：Shoreline，双客户端共用一套调色板**（Hmbown）
   将 TUI 重新上色以对齐 GPUI 客户端调色板，并向终端 agent 市场的通用惯例靠拢。作者标注为 Draft：核心条目尚未完成，此次推送主要因原先仅存于本地。
   https://github.com/Hmbown/DeepSeek-TUI/pull/6222

3. **#6161 [CLOSED] v0.9.14：控制台冻结、审批中断、压缩与会话保留修复**（Hmbown）
   修复两处已诊断的控制台冻结/静默死亡缺陷：运行中调用 `/mcp`、以及无人值守审批运行被 idle-timeout 取消而死亡。
   https://github.com/Hmbown/DeepSeek-TUI/pull/6161

4. **#6171 [OPEN] feat(providers)：新增 AICraft OpenAI 兼容 provider 模板**（BX166）
   按 SenseNova、Baseten、Groq、Cerebras、Command Code 相同的 descriptor-row 模式新增 AICraft，`AICRAFT_TEMPLATE_ID = "aicraft"`。
   https://github.com/Hmbown/DeepSeek-TUI/pull/6171

5. **#5867 [CLOSED] feat(config)：新增 [reasoning_only] 配置段**（Gabriel-Degret）
   将原先硬编码的 `MAX_REASONING_ONLY_REPROMPTS = 2` 变为用户可配置：当推理模型只返回隐藏思考而不产出可见内容时的重试次数。
   https://github.com/Hmbown/DeepSeek-TUI/pull/5867

6. **#6105 [CLOSED][dependencies] chore(deps)：rustls 0.23.43 → 0.23.44**（dependabot）
   依赖例行升级。
   https://github.com/Hmbown/DeepSeek-TUI/pull/6105

> 注：本批 PR 共 6 条，以上为全部条目；其中 #6175、#6222 为今日新增，是当前最值得关注的两个变更。

## 5. 功能需求趋势

- **可观测性与成本核算**：#6011 是评论数最高的 issue，要求按组件/按模型/按工具多维度的 token 计量、缓存命中率与压缩成本，并把工具调用错误模式纳入诊断——社区希望“看得见钱和错误”。
- **会话生命周期与恢复**：#6207、#6185、#6014、#6175 都指向同一方向：会话的保存、恢复、picker 呈现需要端到端可用，跨 host/runtime 的恢复是当前最大断点。
- **外部记忆与多存储协同**：#6086 提出 scratchpad、Agent Mail、workshop 三存储统一寻址，是外部记忆方向的明确路线图需求。
- **MCP 与启动性能**：#6033（惰性连接，23 个 server 全量启动的开销）、#6140（MCP server 去 DeepSeek 专属化、stdio 循环异步化）表明社区在意启动时延与 provider 中立性。
- **Provider 接入扩展**：#6171 新增 AICraft 模板、#6173 报告 Gemini `/models` 报错，反映多 provider 兼容仍是持续需求（既在加新，也在修旧）。
- **终端交互契约**：#6169（作业控制/SIGTTIN）、#6165（`$EDITOR` 与输入线程争抢 stdin）、#6190（steering 消息排序）构成一组“TUI 与终端原生行为不一致”的需求。

## 6. 开发者关注点

- **静默失败最难排查**：#6184 的“无错误、无日志、无崩溃记录”是开发者最反感的失败形态；#6015 的“自适应防卡死”与 #6011 的错误模式采集都可视作对此的回应。
- **状态持久化不完整引发的重复劳动**：#6185 中 tool-call 修复结果不落盘、每次加载重跑，属可复现且可量化的浪费。
- **概念/配置双重权威带来的混乱**：#6036（fleet 与 agent 双份存储，创始人直接点名）、#6143（`tui/src/config*` 与 `crates/config` 并存）、#6139（app-server 无法独立跑一轮 turn）显示 0.9.14 重构 backlog 正在集中清理“同一件事有多个真相来源”的结构性问题。
- **异步路径中的阻塞调用**：#6149（已关闭）审计了 `thread::sleep` 与 `std::fs` 在生产工具路径中的使用，说明非阻塞约定需要统一。
- **构建/CI 一致性**：#6132（已关闭）验证了 `CARGO_BUILD_WARNINGS=deny` 在不同 message format 下行为不一致，属影响可信度的工具链细节。
- **需求入口高度集中**：本批 20 条高评论 issue 中，#6011、#6015、#6014、#6207 均出自同一贡献者 `7jrxt42BxFZo4iAnN4CX`，核心路线推进与普通用户反馈之间存在明显比例落差。

</details>

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar) 自动生成。*