# AI CLI 工具社区动态日报 2026-10-08

> 生成时间: 2026-10-08 15:01 UTC | 覆盖工具: 9 个

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

# AI CLI 工具生态横向对比分析报告（2026-10-08）

## 1. 生态全景

当前 AI CLI 工具已从"能否跑通"进入"稳定可用"的攻坚期，各工具的发版节奏与 Issue 密度显示社区对可靠性的要求显著超过对新功能的期待。**Windows 平台成为全行业共同短板**——Claude Code、Codex、Copilot CLI、OpenCode、Pi、Qwen Code 六家今日均有 Windows 专项问题浮出水面，涉及沙箱、终端集成、打包虚拟化、进程管理等结构性缺陷。**Hooks/权限/沙箱正演变为安全边界**，多个工具在今日集中修补 fail-open 漏洞、审批路径转义缺口与配置静默失效。与此同时，**模型多供应商对齐与计费透明度**成为订阅用户的核心敏感点，Claude Haiku 5.5、GPT-6.1 Sol 等新模型的默认化推进与用量异常报告同步出现。整体看，生态竞争焦点正从"模型能力"转向**工程确定性（可诊断、可恢复、可预期）**。

---

## 2. 各工具活跃度对比

| 工具 | Release | Issues（今日更新） | PR（24h 内） | 今日最热信号 |
|---|---|---|---|---|
| **Claude Code** | v2.1.293 / v2.1.294 | 10+ 热点（多条集中关闭） | 7 条 | Windows 桌面回归 bug；hooks 判定修复 |
| **OpenAI Codex** | rust-v0.161.0 + 4 个 alpha | 10 条（约 15 条带 windows-os） | 10 条（全部 CLOSED，以修复为主） | Windows sandbox 失败集群（#51601，86 评论） |
| **Gemini CLI** | v0.65.0-nightly | 10 条（多条 P1） | 10 条（含 4 条 P1 安全） | Subagent MAX_TURNS 误报成功（P1） |
| **GitHub Copilot CLI** | 5 个补丁版（1.0.94-0~4） | 10+（41 条更新） | **0 条** | 沙箱限制需求 #892（👍49）；MCP 生态故障 |
| **Kimi Code CLI** | 无 | **无活动** | 无 | — |
| **OpenCode** | 无 | 10 条（含 2 条 reproduced） | 10 条 | Windows Bun 段错误 #33742（61 评论 / 👍46） |
| **Pi** | v1.1.0 | 10 条 | 10 条（含 5 条 CLOSED） | OpenRouter 模型过滤（1 Issue + 2 PR） |
| **Qwen Code** | v0.25.0-nightly | 10 条 | 10 条 | Managed Agent 架构（#12380，50 评论） |
| **DeepSeek TUI** | v0.10.1（Codewhale） | 10 条（多为关闭） | 10 条 | MCP 双栈合并；可插拔 memory 接缝 |

**要点观察**：
- **发版最密集**：Copilot CLI（5 个补丁版本/24h）、Codex（1 正式 + 4 alpha）
- **社区讨论最热**：Codex #51601（86 评论）、OpenCode #33742（61 评论 / 👍46）、Qwen Code #12380（50 评论）
- **PR 效率差异**：Codex 10 条 PR 全部 CLOSED（快速合并），Copilot CLI 0 条（可能处于发版冻结期），其余多为 OPEN 状态
- **唯一静默工具**：Kimi Code CLI 过去 24 小时无任何活动

---

## 3. 共同关注的功能方向

### 3.1 安全边界与权限隔离（覆盖 7 个工具）
- **Claude Code**：hookify fail-closed（PR #84364）、规则加载路径绕过（#85716）、HIPAA 受管配置（#100293）
- **Copilot CLI**：沙箱限制文件访问范围的需求 **#892（👍49，今日最高）**、`/add-dir` 未纳入沙箱白名单（#5076）
- **Gemini CLI**：非信任工作区清空 settings.json（#29466）、粘贴文本 `@path` 误展开上传（#29458）、OAuth URL 截断（#29460）
- **Qwen Code**：Auto 模式误拦截无害文本（#13570）、审批卡未转义模型文本（#13566）
- **OpenCode**：Plan 模式仍执行破坏性编辑（#53955）
- **Pi**：安全默认值诉求（TUI 渲染、copy-paste 完整性）
- **DeepSeek TUI**：Windows 安全门误拦合法操作（#6871）

### 3.2 Windows 平台一致性（覆盖 6 个工具）
- **Codex**：sandbox 共享冲突 os error 32（#51601）、daemon 权限错误（#48043，👍45）、`helper_unknown_error`（#29797）
- **Claude Code**：MSIX 打包下终端集成失败（#99192）、复选框静默失效（#79358）
- **Copilot CLI**：Windows Entra 登录失败（#5068，👍10）
- **Qwen Code**：browser-use 技能完全不支持（#13663）、Hook 子进程最小化终端（#13662）
- **Pi**：`pi.exec` 无法执行 .cmd（#10616）、Bun 二进制图片附件丢失（#10645）
- **DeepSeek TUI**：ExecutionPolicy 下 shell 工具失效（#6745）、复制粘贴不完整（#6877）

### 3.3 Subagent / 多智能体可靠性（覆盖 4 个工具）
- **Gemini CLI**：MAX_TURNS 误报"GOAL 成功"（#22323）、Generalist agent 无限挂起（#21409）、模型不主动使用 subagent（#21968）
- **Codex**：多智能体 V2 生命周期管理（#52081、#52034、#52062 等系列 PR）
- **OpenCode**：subagent 分支隔离（#53425）、GitLab 新会话委派失败（#51464）
- **Qwen Code**：Managed Agent 双路径架构（#12380）

### 3.4 MCP 生态成熟度（覆盖 4 个工具）
- **Copilot CLI**：启动时序、企业认证（#5068）、上下文膨胀（#3024）、陈旧绑定文件（#4998）
- **OpenCode**：elicitation 能力声明与实现脱节（#51856）
- **Gemini CLI**：Google 端点 OAuth refresh token 缺失（#29578）
- **DeepSeek TUI**：MCP 双栈合并（#6142）、启用 MCP 后工具不可见（#6828）

### 3.5 成本 / 配额可观测性（覆盖 4 个工具）
- **Claude Code**：同一配额点 17 倍 token 计费波动（#84607，Max 20x 用户）
- **Copilot CLI**：子代理 span 缺失计费属性（#4224）、PRU 配额异常（#4802）
- **OpenCode**：prompt-cache 复用率仅 3.44%（#53765）、cache-preserving compaction（#46369）
- **Pi**：采用 OpenRouter 上报的实际计费（#10286）

### 3.6 配置加载与一致性（覆盖 5 个工具）
- **Gemini CLI**：settings 占位符展开竞态（#29678）、browser agent 忽略 settings.json（#22267）
- **OpenCode**：项目级 `.opencode` 目录从不被发现（#53839）、插件符号链接静默失效（#53763）
- **Copilot CLI**：managed settings 抑制 bypass 标志（v1.0.94-3）
- **Pi**：配置 JSON Schema 发布（#9880）
- **Qwen Code**：subagent 定义中 `${}` 导致启动失败（#13689）

---

## 4. 差异化定位分析

| 工具 | 功能侧重 | 目标用户 | 技术路线特征 |
|---|---|---|---|
| **Claude Code** | Hooks 语义、企业合规（HIPAA）、IDE/桌面集成 | 企业团队、订阅用户（Max） | 官方闭源，生态插件化（hookify 等），强调 provider 一致性 |
| **OpenAI Codex** | Rust 实现、Bedrock 多智能体 V2、Ultra reasoning、GovCloud | 企业级、AWS 生态 | 强依赖 Amazon Bedrock 云侧能力，沙箱化设计，模型目录内置 |
| **Gemini CLI** | Subagent 体系、AST 感知代码理解、POSIX 工具亲和 | 开发者、研究型用户 | 开源，投入 subagent 成熟化，探索零依赖 OS 沙箱与模型原生能力 |
| **GitHub Copilot CLI** | 企业托管策略、沙箱、ACP 协议 | 企业组织、IDE 集成方 | 与 GitHub 生态深度绑定（PRU、managed settings），IDE 协议优先 |
| **OpenCode** | 桌面端与 TUI 并重、多代理任务隔离、缓存优化 | 个人开发者、跨平台用户 | 快速迭代（V2 双轨），多客户端矩阵（桌面/TUI/ACP） |
| **Pi** | 终端协议（OSC 7501）、扩展生态、OpenRouter 集成 | 终端重度用户、扩展开发者 | 底层终端协议先行，强调 provider 透明度（实际计费） |
| **Qwen Code** | Managed Agent 架构、云端 Workspace、平台分发 | 云托管/AaaS 场景 | 推理与工具环境解耦，K8s 运行时，roadmap 驱动 |
| **DeepSeek TUI** | 可插拔架构、Chrome 侧边栏、Terminal dock | 开源社区、Windows 用户 | 品牌重组（Codewhale），运行时抽象，多客户端扩张 |
| **Kimi Code CLI** | （无今日动态，无法分析） | — | — |

**关键差异点**：
- **Claude Code / Copilot CLI** 走**闭源 + 企业合规**路线（HIPAA、managed settings、策略警告）
- **Codex** 走**云侧深度绑定**路线（Bedrock 默认模型、GovCloud 区域）
- **Gemini CLI / Qwen Code / DeepSeek TUI** 走**架构开放**路线（AST 工具、Managed Agent 解耦、可插拔接缝）
- **Pi / OpenCode** 走**终端/协议先行**路线（OSC 7501、ACP、多客户端）

---

## 5. 社区热度与成熟度

### 热度梯度

**第一梯队（高热度 × 高速迭代）**
- **OpenAI Codex**：Windows 故障集群单 Issue 86 评论，10 条 PR 全部 24h 内合并，1 正式 + 4 alpha 版本 —— 迭代最快的团队之一
- **GitHub Copilot CLI**：41 条 Issue 更新（今日最多），5 个补丁版本连续发布，但 PR 侧 0 更新 —— 发版驱动型
- **Gemini CLI**：多条 P1 Issue 长期挂起，PR 侧集中处理 4 条 P1 安全修复 —— 稳定性攻坚期

**第二梯队（活跃 × 架构演进）**
- **Claude Code**：Issue 集中关闭（8 月旧报告清理），PR 侧象征性开源诉求（#41447）+ 安全加固 —— 维护/清理轮次
- **Qwen Code**：Managed Agent 架构讨论（50 评论）带动 roadmap 系列 —— 架构设计期
- **OpenCode**：稳定性问题主导（Windows 崩溃、Plan 模式违约）—— 可靠性追赶期
- **Pi**：Provider 模型可用性（OpenRouter 过滤）+ 终端协议 —— 生态集成期
- **DeepSeek TUI**：品牌重组 + MCP 双栈合并 —— 技术债清理期

**第三梯队（低活动 / 待观察）**
- **Kimi Code CLI**：过去 24 小时无任何活动，需持续观察

### 成熟度观察指标

| 维度 | 领先工具 | 说明 |
|---|---|---|
| **发版节奏** | Copilot CLI、Codex | 分别 5 个补丁版 / 5 个版本（含 alpha） |
| **Issue 响应速度** | Codex（10 PR 全 CLOSED） | 快速合并且今日多为修复类 |
| **社区自发回滚方案** | Codex（#51668） | 社区已提供 26.930.7945.0 回滚步骤 |
| **长期架构讨论** | Qwen Code（#12380）、Claude Code（#41447） | 50 评论 / 长期活跃 |
| **P1 问题积压** | Gemini CLI | 多条 P1 跨越多月未解 |
| **技术债清理** | DeepSeek TUI（MCP 双栈合并）、Copilot CLI（MCP 生命周期） | 从"能用"到"稳定" |

---

## 6. 值得关注的趋势信号

### 信号 1：静默失败成为最不可接受的反模式
**证据**：Claude Code #79358（复选框静默失效）、#86959（Vertex 字段被剥离）、Copilot CLI #4998（陈旧设备 ID 无提示）、OpenCode #53839（项目级配置从不加载）、Gemini CLI #22267（browser agent 忽略配置）。
**参考价值**：失败必须显式暴露，是当前社区一致诉求。工具方应优先在启动、配置加载、provider 适配层加入可诊断日志（如 Codex PR #51974、#51896 的方向）。

### 信号 2：Hooks / 权限 / 沙箱既是能力也是攻击面
**证据**：Claude Code fail-open 修复（#84364）、Gemini CLI 非信任工作区破坏配置（#29466）、Qwen Code 审批转义缺口（#13566）、Copilot CLI 沙箱需求（#892，👍49）。
**参考价值**：安全默认值（safe-by-default）从"加分项"变为"必备项"。开发者评估工具时应优先考察：异常时是否 fail-closed、非信任路径是否隔离、审批路径是否转义。

### 信号 3：Subagent 从"能跑"到"可信"
**证据**：Gemini CLI #22323（MAX_TURNS 误报成功）直接掩盖中断、#21968（模型不主动使用 subagent）、Codex 多智能体 V2 生命周期系列 PR。
**参考价值**：多智能体架构的**状态语义正确性**（终止原因、失败传播、轨迹可视）比"能否并行"更重要。调试与追踪能力（如 Gemini #22598 建议 `/chat share` 暴露轨迹）将成为差异化竞争点。

### 信号 4：Windows 成为全行业共同负债
**证据**：6 个工具在同期均有 Windows 专项问题，涉及 MSIX 打包、sandbox、daemon 权限、Bun 二进制、ExecutionPolicy、终端最小化。
**参考价值**：对工具方，Windows 兼容性测试需从"CI 覆盖"升级为"打包产物端的真实终端 QA"；对使用者，选择工具时应关注其 Windows 支持的成熟度（当前 Codex、Copilot CLI 问题最集中）。

### 信号 5：模型多供应商对齐与计费透明度
**证据**：Claude Haiku 5.5 默认化、GPT-6.1 Sol 默认化、Pi 采用 OpenRouter 实际计费（#10286）、Claude Code 17 倍计费波动（#84607）、Copilot CLI PRU 配额异常（#4802）。
**参考价值**：随着多 provider 路由普及，"模型能力对齐"+"真实计费回传"成为基础工程能力。开发者做成本预算时应优先选择使用 provider 实测计费的客户端（而非本地目录估算），并要求 OTel span 完整上报。

### 信号 6：上下文与存储的无界增长
**证据**：OpenCode event 表 9.03 GB（#53760）、Gemini CLI 工具数超 128 触发 400（#24246）、Copilot CLI MCP 过多导致持续压缩（#3024）、Pi 长会话内存不释放（#10642）。
**参考价值**：长会话与大规模工具生态下，**资源边界管理**（事件日志轮转、工具范围动态限定、二进制资源过滤）将成为新工具架构的必备设计。

### 对开发者的选型建议
- **企业合规场景**：Claude Code（HIPAA 示例）、Copilot CLI（managed settings）、Codex（Bedrock/GovCloud）
- **架构开放与定制**：Gemini CLI（AST 工具 EPIC）、Qwen Code（Managed Agent）、DeepSeek TUI（可插拔接缝）
- **终端重度使用**：Pi（OSC 7501、协议先行）、OpenCode（TUI/桌面双客户端）
- **Windows 关键路径**：当前需谨慎评估所有工具，可能需配合特定版本回滚策略（如 Codex 26.930.7945.0）

---

*本报告所有数据均引自 2026-10-08 各工具社区动态摘要，未做外部事实补充。*

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告

> 数据来源：github.com/anthropics/skills（截止 2026-10-08）

## 1. 热门 Skills 排行（PR）

注：所给数据中所有 PR 的评论数均标记为 `undefined`、👍 均为 0，因此无法按评论数真实排序。以下按**更新时间新鲜度 + 讨论活跃度线索**选出关注度较高的条目。

| # | Skill / PR | 功能 | 讨论热点 | 状态 |
|---|---|---|---|---|
| 1 | **[#1742] mcp-builder** — 支持 mcp>=2 的 streamable_http_client 导入与自定义 header | 修复 MCP 构建器在 mcp 2.0 下的兼容性 | 呼应 Issue #1668，属高优先级工具链修复 | OPEN |
| 2 | **[#1298] skill-creator** — 隔离触发评估、处理 Windows 与运行时失败 | 修复触发评估误报/无效评分 | 涉及 skill-creator 核心评估逻辑 | OPEN |
| 3 | **[#1961] skill-creator** — 加固 eval viewer（脚本注入、DNS rebinding、跨站 POST、转义） | 本地评估页面的安全加固 | 与 Issue #1394 的 XSS 问题同源 | OPEN |
| 4 | **[#1681] skill-creator** — 支持直接执行 package_skill.py 并更新路径 | 修复独立运行的 ModuleNotFoundError | 工具链可用性 | OPEN |
| 5 | **[#1771] proofcore-contract-auditor** — 智能合约公证 | Solidity/Rust 静态分析 + TON 链上审计凭证 | Web3 场景新 Skill，第三方协议提交 | OPEN |
| 6 | **[#1703] md2video-audio** — Markdown 转 MP4 视频 | 零成本编译带旁白的视频 | 内容自动化方向 | OPEN |
| 7 | **[#525] pyxel** — 复古游戏开发 | 创建/调试/验证 Python 复古游戏 | 独立创意向 Skill | OPEN |
| 8 | **[#822] AWT (AI Watch Tester)** — AI 驱动的 E2E 测试 | 赋予 Claude 视觉与浏览器控制 | 测试自动化方向 | OPEN |

## 2. 社区需求趋势（来自 Issues）

- **安全与信任边界** —— Issue #492（43 评论）：社区 Skill 以 `anthropic/` 命名空间分发，冒用官方身份，形成信任边界漏洞。**这是评论数最高的议题。**
- **组织级共享与分发** —— Issue #228（16 评论，👍8）：希望 Skills 能在组织内直接共享，而非下载 .skill 文件后手动上传。
- **评估/触发机制可靠性** —— Issue #556（12 评论，👍7）：`run_eval.py` 中 `claude -p` 从未触发 Skills，触发率 0%。
- **上下文窗口治理** —— Issue #1487：`claude-api` skill 单次工具调用注入约 156k tokens 耗尽上下文。
- **外部 Skill 贡献入口** —— Issue #1329、#1385 等：社区持续提出 compact-memory、推理质量门等新方向，并追问外部贡献是否被接受（见 #1328）。
- **插件去重与安装一致性** —— Issue #189（👍9）：`document-skills` 与 `example-skills` 安装内容重复。

**方向归纳**：安全/信任 > 分发共享 > 评估可靠性 > 上下文效率 > 新场景 Skill（治理、记忆、质量门）。

## 3. 高潜力待合并 Skills

以下均为 OPEN 且近期有更新的 PR，落地可能性较高：

- **[#1742] mcp-builder 兼容修复**（更新 2026-10-08）—— 直接 Fixes #1668，工具链级修复。
- **[#1681] skill-creator package_skill.py 修复**（更新 2026-10-08）—— 同作者连续活跃维护。
- **[#1961] skill-creator eval viewer 安全加固**（更新 2026-10-07）—— 与高评论 Issue #1394 呼应。
- **[#1977] algorithmic-art wrapAround() 修复**（更新 2026-10-07）—— Fixes #1897，范围小、易合并。
- **[#1730] claude-api 死链修复**（更新 2026-10-04）—— 已用 curl 验证 HTTP 200，低风险。
- **[#1792] docx LibreOffice 超时处理**、**[#1980] webapp-testing 移除 shell=True** —— 均为安全性/健壮性小修。

## 4. Skills 生态洞察

**当前社区在 Skills 层面最集中的诉求，是围绕"安全与信任"的一整套基础设施焦虑——包括命名空间冒用、评估/触发机制不可靠、上下文窗口被单次调用榨干，以及组织级分发缺位，而非缺少新 Skill 创意本身。**

---

# Claude Code 社区动态日报（2026-10-08）

## 今日速览

今天发布两个版本：v2.1.293 引入 Claude Haiku 5.5 作为 API 默认 Haiku 模型（1M 上下文），v2.1.294 集中修复 `prompt`/`agent` hooks 被当作指令书写时的判定问题。Issue 侧大量 8 月旧报告在今日集中关闭，涉及 Vertex 思考显示被静默剥离、权限规则 `$HOME` 展开、TODO 任务丢失等，说明维护者正在进行一轮 bug 清理。PR 侧值得注意的是一条要求将 Claude Code 开源的长期 PR，以及多条针对 hookify 插件绕过漏洞的安全修复。

## 版本发布

**v2.1.293**
- 新增 Claude Haiku 5.5（`claude-haiku-5-5`），现为 Anthropic API 上默认 Haiku 模型：1M 上下文，$0.10/$0.50 每 Mtok（超过 100K 的提示为 $0.50/$2.50）
- `subagentStatusLine` payload 新增 `agentType`，脚本可区分自定义 subagent 类型
- https://github.com/anthropics/claude-code/releases

**v2.1.294**
- 修复以指令形式书写的 `prompt` 和 `agent` hooks（如 "Block commands that..."）允许了本应阻止的操作
- 改进 Stop 与 SubagentStop 上以指令形式书写的 `prompt` hooks 的判定（如 "Carry on if the build is broken"），减少误判
- https://github.com/anthropics/claude-code/releases

## 社区热点 Issues

1. **#79358 [CLOSED] Desktop (Windows)：'Auto-fix CI and address comments' 复选框自 1.22209.0 起静默失效**（12 评论 / 7 👍）
   回归类 bug，明确标注 last working 版本，是今日评论数与点赞最高的 Issue。Windows 桌面端 PR 工作流的静默失败对日常使用影响直接。
   https://github.com/anthropics/claude-code/issues/79358

2. **#99192 [OPEN] Code tab 终端集成在 Windows（MSIX 安装）失败**（8 评论）
   根因指向 MSIX 虚拟化 AppData 与包外 shell 的路径不一致，属于 Windows 打包方式带来的结构性问题，仍在开放状态。
   https://github.com/anthropics/claude-code/issues/99192

3. **#86959 [CLOSED] Vertex：`thinking.display` 被 provider gate 静默剥离**（4 评论）
   CLI 接受 `--thinking-display summarized` 却在发往 Vertex 的请求体中删掉该字段，导致 Opus 4.7 及后续模型返回空思考内容。涉及企业级 Vertex 用户，属于静默行为差异。
   https://github.com/anthropics/claude-code/issues/86959

4. **#87542 [CLOSED] PostToolUse hook 的 exit-2/stderr 警告未传递给模型（VSCode 扩展）**（3 评论）
   与今日 v2.1.294 的 hooks 修复方向一致，说明 hooks 语义在 IDE 扩展与 CLI 之间存在传递缺口。
   https://github.com/anthropics/claude-code/issues/87542

5. **#87139 [CLOSED] 权限规则：启动校验时符号链接配置下 `$HOME` 未展开**（3 评论）
   先解析 symlink 再求值权限变量，导致规则匹配与预期不符，对使用符号链接配置目录的用户是隐性权限偏差。
   https://github.com/anthropics/claude-code/issues/87139

6. **#84607 [CLOSED] 同一周配额点对应的 token 计费出现 17 倍日间波动**（Max 20x，2.1.221）（5 评论）
   计费一致性问题，直接影响 Max 订阅用户的成本可预期性，属于高敏感度话题。
   https://github.com/anthropics/claude-code/issues/84607

7. **#87365 [CLOSED] 1Password for Claude：autofill_credential 全部 tab_unavailable / agenticModeNotEnabled**（14/14 失败）
   凭据请求成功但自动填充 100% 失败，跨 desktop / chrome / integrations 多区域，反映第三方集成链路的不稳定。
   https://github.com/anthropics/claude-code/issues/87365

8. **#87057 [CLOSED] TODO 任务在执行过程中丢失**（Windows，2.1.233）
   任务状态丢失属于长会话可靠性问题，社区标签为纯 bug 无 repro 细节，仍被关闭。
   https://github.com/anthropics/claude-code/issues/87057

9. **#85724 [CLOSED] Opus 5 忽略任务范围，执行不必要的修改**
   模型行为类抱怨：超出任务边界改动导致额外返工，是 agent 自主性边界的典型反馈。
   https://github.com/anthropics/claude-code/issues/85724

10. **#87295 [CLOSED] 文件内容中的 Log4Shell 探测字符串触发连接重置而非安全提示**（Windows，2.1.233）
    通过 Read 工具读取含探测串的良性日志行会确定性重置连接，跨 Fable 5 与 Sonnet 5，安全过滤的误报处理方式受到质疑。
    https://github.com/anthropics/claude-code/issues/87295

（另有多条 `needs-repro` / `invalid` 的重复或信息不足报告在今日集中关闭，如 #85688、#86869、#86813、#86808、#86801。）

## 重要 PR 进展

1. **#41447 [OPEN] feat: open source claude code ✨**
   长期开放的开源诉求 PR，一次性关联关闭 #59、#456、#2846、#22002、#41434 等多个历史请求，今日仍有更新，是社区关注度最高的象征性提案。
   https://github.com/anthropics/claude-code/pull/41447

2. **#100293 [OPEN] 新增 HIPAA managed-settings 示例**
   提供 `hipaa-baseline.json` 与 `managed-mcp.lockdown.json`，面向已启用 HIPAA 配置、需要限制会话内容流向的组织。
   https://github.com/anthropics/claude-code/pull/100293

3. **#82320 [OPEN] 修复 examples/gateway/aws/setup.sh 在 macOS 自带 bash 3.2 上中断**
   `setup.sh` 第 66 行使用 bash 4 的大小写改写展开 `${DIST_SHA256,,}`，在 macOS 默认 bash 3.2 下脚本提前退出。
   https://github.com/anthropics/claude-code/pull/82320

4. **#86746 [OPEN] fix(security-guidance): 保留 Python 探测错误**
   修复 #86709：此前 `sg-python.sh` 将探测 stderr 重定向到 `/dev/null`，导致所有候选解释器失败时无诊断信息。
   https://github.com/anthropics/claude-code/pull/86746

5. **#85323 [OPEN] fix(plugin-dev): 解析块标量 agent 描述**
   修复 #83803 遗留的 YAML 块标量缺陷，`validate-agent.sh` 改为按缩进内容而非标量标记来度量 `description: |` / `description: >`。
   https://github.com/anthropics/claude-code/pull/85323

6. **#84364 [OPEN] fix(hookify): PreToolUse hook 异常时 fail closed**
   修复安全漏洞：规则求值期间发生 ImportError 等异常时 hook 以状态 0 退出并放行受限工具调用，现改为发出 permissionDecision 拒绝。
   https://github.com/anthropics/claude-code/pull/84364

7. **#85716 [OPEN] fix(hookify): 从祖先 .claude 目录加载规则以防静默绕过**
   修复 #85613，跨平台、Python 3.10+，针对 `plugins/hookify/core/config_loader.py` 的规则加载路径问题。
   https://github.com/anthropics/claude-code/pull/85716

（过去 24 小时内更新的 PR 共 7 条，其余为上述条目，无更多可补充内容。）

## 功能需求趋势

- **Hooks 语义与可靠性**：今日两个版本均围绕 hooks 判定（v2.1.294），Issue #87542 与 PR #84364、#85716 分别从传递、fail-closed、规则加载三个角度指向同一方向——hooks 已成为安全边界，但语义在 CLI、VSCode 扩展与插件间尚不一致。
- **企业合规与受管配置**：PR #100293 的 HIPAA 示例反映组织对受管设置、MCP 锁定的需求。
- **模型与供应商一致性**：v2.1.293 的 Haiku 5.5 默认化，与 #86959（Vertex 字段被剥离）共同显示多 provider 下能力对齐是持续主题。
- **桌面端与 IDE 集成**：Windows MSIX 相关问题（#79358、#99192）占据今日评论前列，桌面端打包与终端集成是集中痛点。
- **计费与配额透明度**：#84607 的 17 倍波动指向用量可预期性需求。
- **安全过滤误报处理**：#87295、#85722、#85680 多条报告指向过滤触发时缺乏上下文说明。

## 开发者关注点

- **静默失败最不可接受**：多个高热度 Issue（#79358 复选框无操作、#86959 字段被剥离、#99192 终端集成不加载）都表现为无错误提示的功能失效，开发者希望失败要显式暴露。
- **Windows 体验是明显短板**：今日评论数前二均为 Windows 平台问题，且与 MSIX 打包机制强相关。
- **hooks 应默认 fail closed**：PR #84364 与 #85716 表明社区正主动加固 hookify 插件，防止异常或路径问题导致权限被绕过。
- **成本与配额可预测性**：#84607 的高点赞说明计费一致性对订阅用户敏感度高。
- **期望开源**：#41447 持续活跃更新，反映社区对 Claude Code 开源化的长期诉求。
- **旧 Issue 集中关闭**：今日关闭的多为 8 月报告，其中不少带 `needs-repro` / `invalid` 标签，提示报告质量与复现信息仍是分流效率的关键。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报（2026-10-08）

## 1. 今日速览

今日最突出的动态是一批 **Windows 平台 sandbox 初始化失败**问题集中爆发：多个版本（26.1002.51308 / 26.1002.52244 等）在启动沙箱时因 `node_repl.exe` / 运行时的共享冲突（os error 32）而阻塞所有命令执行，Issue #51601 已累积 86 条评论。与此同时，`rust-v0.161.0` 正式发布，宣布 **GPT-6.1 Sol 成为内置目录及 Amazon Bedrock 目录的默认模型**，并扩展了 Bedrock 的多智能体 V2、Ultra 推理与 GovCloud 区域支持。PR 侧则以多智能体 V2 生命周期管理与 Windows 沙箱诊断日志的修复为主。

---

## 2. 版本发布

**rust-v0.161.0（正式版）**
- **GPT-6.1 Sol 成为默认模型**：在随附目录及 Amazon Bedrock 目录中生效（#49318、#49339）。
- **Amazon Bedrock 能力扩展**：兼容模型支持 multi-agent V2 与 Ultra reasoning；Bedrock Mantle 支持 AWS GovCloud 区域（#49345、#49813）。
- 支持从 MCP 服务器登录（原文摘要在此处截断）。

**Alpha 预发布版本（过去 24 小时）**
- `rust-v0.162.0-alpha.20`、`rust-v0.162.0-alpha.18.1`、`rust-v0.162.0-alpha.17.2`、`rust-v0.162.0-alpha.17.1`。均为滚动 alpha，无额外说明。

> 链接：github.com/openai/codex/releases

---

## 3. 社区热点 Issues

1. **[#51601](https://github.com/openai/codex/issues/51601)（OPEN，86 评论，👍25）** Windows app 26.1002.51308 sandbox 在验证自身活动运行时时因共享冲突失败，导致所有命令执行前即报错。**今日最热问题**，是当前 Windows 沙箱故障群的核心线索。

2. **[#48043](https://github.com/openai/codex/issues/48043)（OPEN，61 评论，👍45）** Codex CLI 0.157.0 在 Windows 上因 daemon 权限错误无法启动（0.156.1 正常）。**👍最高**，说明这是影响面广的版本回退型启动故障。

3. **[#29797](https://github.com/openai/codex/issues/29797)（OPEN，22 评论，👍8）** Windows 上 `helper_unknown_error: setup refresh had errors`，运行 git log 或读取项目文件时触发。自 6 月延续至今的老问题，仍未解决。

4. **[#51824](https://github.com/openai/codex/issues/51824)（OPEN，17 评论）** ChatGPT for Windows 在 `windows-updater.node` 中崩溃（0xc0000005），打开后 30–60 秒无提示关闭。

5. **[#43019](https://github.com/openai/codex/issues/43019)（OPEN，12 评论）** Windows 桌面对海量未跟踪文件（测试含约 4,771 个）产生无界的 `git diff --no-index` 扇出，耗尽系统 commit 并崩溃。属性能/资源耗尽类严重缺陷。

6. **[#45340](https://github.com/openai/codex/issues/45340)（OPEN，9 评论，👍2）** Windows 桌面内置浏览器可见但浏览器自动化工具无法枚举/控制，`cua.getState` 报 `nodeRepl.fetch request failed`，阻塞网站部署工作流。

7. **[#47865](https://github.com/openai/codex/issues/47865)（OPEN，7 评论，👍10）** CLI 审批提示阻塞聊天滚动与 Ctrl+T 记录访问，跨平台（Ubuntu 报告）。**👍10** 反映 TUI 交互体验痛点。

8. **[#48853](https://github.com/openai/codex/issues/48853)（CLOSED，7 评论）** Windows daemon 安装在 `FSCTL_SET_REPARSE_POINT` 处报 os error 5。**今日少见的已关闭项**，可能已修复。

9. **[#51668](https://github.com/openai/codex/issues/51668)（OPEN，5 评论）** 与 #51601 相关，提供经核验的回滚/恢复步骤：回退到 26.930.7945.0 可恢复执行。对受困用户具实操价值。

10. **[#52144](https://github.com/openai/codex/issues/52144)（OPEN，3 评论）** 浏览器中打开 LinkedIn 失败，报 `windows sandbox failed: helper_unknown_error`，进一步印证沙箱故障正在影响浏览器/工具调用链路。

---

## 4. 重要 PR 进展

1. **[#52081](https://github.com/openai/codex/pull/52081)（CLOSED）** 修复断连的多智能体 V2 子进程空闲清理，添加生命周期监听器以在空闲时释放运行时。

2. **[#52034](https://github.com/openai/codex/pull/52034)（CLOSED）** 卸载空闲 multi-agent V2 子进程时保留状态（未读邮件与环境选择），改走本地驱逐路径。

3. **[#52061](https://github.com/openai/codex/pull/52061)（CLOSED）** Guardian 对话分类器并发运行并保持动作顺序，避免新分类被阻塞。

4. **[#52065](https://github.com/openai/codex/pull/52065)（CLOSED）** 收紧 Guardian 解析器签名（`&str` 替代 `Option<&str>`），移除冗余缺失处理。

5. **[#52062](https://github.com/openai/codex/pull/52062)（CLOSED）** 新增 worker 上下文跨空闲驱逐的场景测试覆盖。

6. **[#52040](https://github.com/openai/codex/pull/52040)（CLOSED）** 新增取消的 agent 重载回归测试，验证取消 V2 发送不取消注册。

7. **[#51974](https://github.com/openai/codex/pull/51974)（CLOSED）** 记录 Windows 沙箱可用性与后端选择日志——直接对应今日大量沙箱诊断需求。

8. **[#51896](https://github.com/openai/codex/pull/51896)（CLOSED）** 在 Windows 沙箱 ACL 诊断中保留原生错误，便于定位失败根因。

9. **[#51930](https://github.com/openai/codex/pull/51930)（CLOSED）** 支持按模型定制的函数描述前缀，按未限定工具名键入。

10. **[#51908](https://github.com/openai/codex/pull/51908)（CLOSED）** 异步提问遵循用户输入设置，避免在功能关闭时仍暴露 `request_user_input_async`。

> 另注：[#31657](https://github.com/openai/codex/pull/31657)（OPEN）为 Codex Apps 文件上传失败增加重试，针对短时效预签名 URL 在单次传输失败后即整调用失败的问题，仍处开放状态。

---

## 5. 功能需求趋势

- **Windows 桌面稳定性为首要方向**：本次 20 条热点 Issue 中约 15 条带 `windows-os` 标签，几乎全部围绕 sandbox、daemon、浏览器运行时与 app 崩溃。
- **沙箱机制与工具调用可靠性**：大量 `sandbox`、`tool-calls`、`helper_unknown_error` 标签，指向沙箱初始化与命令执行链路是当前最大瓶颈。
- **浏览器自动化 / computer-use**：#45340、#41359、#35897、#52144 均涉及内置浏览器与 cua 控制，是不可忽视的功能方向。
- **多智能体 V2 生命周期管理**：PR 侧集中修复 V2 子进程的驱逐、重载、清理，反映 V2 正在经历稳定性打磨。
- **新模型支持**：v0.161.0 默认 GPT-6.1 Sol、Bedrock ultra reasoning、GovCloud，属官方主动推进方向。
- **Dots 功能一致性**：#51731、#52138 反映 dot 在 Windows 与 web 端的同步/格式兼容问题。

---

## 6. 开发者关注点

- **Windows 沙箱回归是当前最大痛点**：自 #48043（CLI 0.157.0 启动失败）到 #51601/#51668/#51777/#51875/#51969/#52094，故障横跨多个版本且可复现，社区已自发提供回滚方案（#51668），亟需官方修复。
- **错误信息不可诊断**：`helper_unknown_error`、os error 32/5 等泛化错误反复出现，社区难以定位根因——这正是 #51974、#51896 两项 PR 试图改善的方向。
- **资源耗尽类缺陷**：#43019 的无界 diff 扇出暴露了在高文件数仓库下的架构性风险。
- **模型行为一致性**：#48939 报告 Windows 端 Pro/Extra High 选项保持选中但响应异常快且质量偏低，而 web/移动端正常，指向平台侧模型行为差异。
- **TUI/交互体验**：#47865 的审批提示阻塞滚动（👍10）说明 CLI 交互细节仍受关注。

> 说明：以上内容均基于所提供的 GitHub 数据整理，未做外部事实补充。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报（2026-10-08）

## 今日速览

今日发布 v0.65.0-nightly 版本，主要包含 CI 工作流修复与 core 模块的用户轮次不变式强化。社区侧，**Subagent 可靠性问题集中爆发**：多个 P1 级别的 Issue（MAX_TURNS 误报成功、Generalist agent 无限挂起、Wayland 下 browser subagent 失败）持续占据讨论热度，评论数均达 8-13 条。PR 侧则集中修复安全与配置类问题，包括 OAuth URL 截断、非信任工作区破坏 settings.json、`@path` 粘贴误展开等。

---

## 版本发布

### v0.65.0-nightly.20261008.g44d764ee5

- **fix(ci)**: 为 unassign-inactive-assignees 工作流补充缺失的循环逻辑（PR #29609）
- **fix(core)**: 强制终端用户轮次不变式并规范化请求内容（PR 链接未完整展示）

链接: https://github.com/google-gemini/gemini-cli/releases

---

## 社区热点 Issues

**1. #22323 [P1] Subagent 达到 MAX_TURNS 后误报 GOAL 成功**
`codebase_investigator` subagent 在触发最大轮次限制、未做任何分析的情况下，仍上报 `status: "success"` 和 `Termination Reason: "GOAL"`。这会掩盖中断、误导用户判断任务是否真正完成，属于可靠性核心缺陷。13 条评论，👍 2。
链接: https://github.com/google-gemini/gemini-cli/issues/22323

**2. #21409 [P1] Generalist agent 无限挂起**
用户报告只要 CLI 交办给 generalist agent 就会永久挂起，连创建文件夹这类简单操作也不例外，最长等待一小时。8 条评论、👍 8 为该批次最高，说明影响面广。
链接: https://github.com/google-gemini/gemini-cli/issues/21409

**3. #21983 [P1] browser subagent 在 Wayland 下失败**
Linux Wayland 环境下浏览器子代理无法正常工作。随 Wayland 普及，这类平台兼容问题会持续影响 Linux 开发者体验。👍 1。
链接: https://github.com/google-gemini/gemini-cli/issues/21983

**4. #19873 [P2] 通过零依赖 OS 沙箱与执行后意图路由利用模型的 bash 亲和性**
提出 Gemini 3 模型原生擅长使用 `grep`、`cat`、`sed`、`awk` 等 POSIX 工具，应设计沙箱与意图路由机制充分发挥该能力。这是一条方向性的增强提案，涉及工具架构。
链接: https://github.com/google-gemini/gemini-cli/issues/19873

**5. #21968 [P2] Gemini 不会主动使用 skills 和 sub-agents**
用户反馈 Gemini 几乎从不自发调用自定义 skills 与子代理，除非显式指令。这直接削弱了 subagent 架构的价值，是产品体验层面的高频抱怨。
链接: https://github.com/google-gemini/gemini-cli/issues/21968

**6. #24246 [P2] 工具数超过 128 个时触发 400 错误**
可用工具数过多时 CLI 遇到 400 错误，用户期望 agent 能更智能地限定工具范围。随生态工具增多，此问题会愈发普遍。
链接: https://github.com/google-gemini/gemini-cli/issues/24246

**7. #22745 [P2] 评估 AST 感知的文件读取、搜索与代码库映射**
EPIC 级议题，探讨 AST 感知工具能否通过一次调用精确读取方法边界，从而减少轮次消耗。与 #22746 联动，是提升代码理解效率的长期方向。
链接: https://github.com/google-gemini/gemini-cli/issues/22745

**8. #22672 [P2] Agent 应停止/劝阻破坏性行为**
模型在复杂 git 操作中会使用 `git reset` 或 `--force`，即使存在更安全的替代方案。涉及数据库等资源维护时风险更高，是安全侧的关注点。
链接: https://github.com/google-gemini/gemini-cli/issues/22672

**9. #22465 [P2] 创建 vite 应用时卡在交互式提示**
提示 agent 创建 vite 应用会卡在交互式提示处。这类"陷入交互式命令"的问题在自动化场景中破坏性很强，建议配合行为评估修复。
链接: https://github.com/google-gemini/gemini-cli/issues/22465

**10. #22267 [P2] Browser Agent 忽略 settings.json 覆盖配置**
浏览器代理完全忽略全局或项目级 `settings.json` 中的配置覆盖（如 `maxTurns`），与 `AgentRegistry` 行为不一致，影响可配置性。
链接: https://github.com/google-gemini/gemini-cli/issues/22267

*其他值得留意：#20079（agent 文件为符号链接时不被识别）、#23571（模型在随机位置创建临时脚本）、#22598（建议通过 `/chat share` 暴露 subagent 轨迹）、#21924（终端 resize 时的性能与闪烁问题）。*

---

## 重要 PR 进展

**1. #29683 [size/l] fix(a2a-server): 在顺序批次中将工具拒绝隔离到当前调用**
当模型在一个批次中发出多个顺序文件修改工具调用时，本 PR 将工具拒绝限定在活动调用内，避免误伤后续调用。
链接: https://github.com/google-gemini/gemini-cli/pull/29683

**2. #29672 [area/security] fix: 修复非信任标志误报**
消除 shell 命令执行时因变量展开问题与 `untrustedContextTracker` 中过宽的 token 索引导致的误报安全警告和确认中断。
链接: https://github.com/google-gemini/gemini-cli/pull/29672

**3. #29678 [area/core] fix(cli): 在解析 settings 占位符前加载环境变量**
修复 `_doLoadSettings` 与 `loadEnvironment` 的加载顺序竞态——此前 settings 文件中的环境变量占位符会在 `.env` 加载前被展开和校验。
链接: https://github.com/google-gemini/gemini-cli/pull/29678

**4. #29677 [area/core] fix(core): 在工具结果展示中保留 ask_user 问题文本**
修复回答 `ask_user` 对话框后，历史记录中只剩简短标题与答案、问题正文丢失的问题。
链接: https://github.com/google-gemini/gemini-cli/pull/29677

**5. #29458 [P1][area/security] fix(cli): 默认阻止粘贴文本中的 @path 展开**
粘贴 `user@host:~/project$ cat @id_rsa` 这类 shell 文本会触发 `@path` 展开并上传本只想粘贴的文件。本 PR 将 `ui.escapePastedAtSymbols` 默认改为 `true`。**安全相关，优先级高。**
链接: https://github.com/google-gemini/gemini-cli/pull/29458

**6. #29466 [P1][area/core] fix(cli): 阻止非信任工作区清空自身 settings.json**
在未信任目录中运行 `gemini mcp add` 会静默销毁该项目 `.gemini/settings.json`，仅保留刚写入的键并报告成功。**数据破坏类严重缺陷。**
链接: https://github.com/google-gemini/gemini-cli/pull/29466

**7. #29457 [P1][area/core] fix(core): 用 glob 匹配替换 read-many-files 中模糊的 requestedExplicitly 逻辑**
修复二进制资源（图片、PDF、音频）因朴素的 `String.prototype.includes()` 模糊匹配被误判为"显式请求"，导致上下文膨胀的关键缺陷（#29045）。
链接: https://github.com/google-gemini/gemini-cli/pull/29457

**8. #29459 [P1][area/core] fix(cli): 将取消操作传递进 shell 命令注入**
`!{...}` 注入此前使用全新的 `AbortController().signal`，导致调用方取消无法传递至子进程、注入也无预算控制。
链接: https://github.com/google-gemini/gemini-cli/pull/29459

**9. #29460 [P1][area/security] fix: 修复 OAuth URL 换行问题**
长 Google OAuth URL 被终端换行截断会导致 `Error 400: invalid_request` 认证失败，现改用 OSC 8 终端超链接渲染。
链接: https://github.com/google-gemini/gemini-cli/pull/29460

**10. #29578 [size/m] fix(mcp): 为 Google 端点请求离线访问并在刷新时保留 clientSecret**
修复对 Google 端点（Docs、Sheets、Slides、Drive 等）配置 OAuth 2.0 的远程 MCP 服务器无法获取 refresh token 的问题。
链接: https://github.com/google-gemini/gemini-cli/pull/29578

*其他：#29674（修 IdeServer.stop() 在 MCP 会话打开时不返回）、#29563（截断字符串时保留换行符）、#29573（修正沙箱镜像名解析中的 registry 端口）、#29552（上报 ripgrep 执行失败）。*

---

## 功能需求趋势

从当前 Issue 池可提炼出以下方向：

1. **Subagent 体系成熟化**：包括恢复语义正确性（#22323）、提高自主使用率（#21968）、轨迹可视与分享（#22598）、本地子代理 Sprint 规划（#20195）、配置一致性（#22267）。这是当前投入最密集的方向。
2. **AST 感知的代码理解**：#22745 与 #22746 构成 EPIC，主张用 AST 工具精确读取方法边界、映射代码库，以降低轮次开销。
3. **利用模型原生能力**：#19873 建议围绕模型对 POSIX/bash 的天然亲和性重构工具与沙箱设计。
4. **安全与信任边界**：非信任工作区破坏配置（#29466）、破坏性 git 操作（#22672）、粘贴内容意外上传（#29458）、非信任标志误报（#29672）共同指向权限与信任模型的加固。
5. **浏览器代理稳健性**：#21983（Wayland）、#22232（会话接管与锁恢复）、#22267（配置忽略）。
6. **终端渲染与交互质量**：#21924（resize 性能与闪烁）、#22186（输出钩子崩溃）、#22465（交互式提示卡死）。

---

## 开发者关注点

- **可靠性优先于功能**：多条 P1 Issue 集中在 subagent 挂起、状态误报、特定平台失败，开发者希望先解决"能不能稳定跑完"的问题。
- **配置加载顺序与一致性**：settings.json 占位符展开竞态（#29678）、browser agent 忽略配置（#22267）、非信任工作区配置被清空（#29466）反映出配置系统存在多处语义不一致。
- **上下文与工具规模管理**：二进制资源被误判为显式请求（#29457）、工具数超限触发 400（#24246）、临时脚本乱放（#23571）说明上下文与工具范围的精细化控制是共性需求。
- **安全默认值**：开发者多次提交涉及安全默认行为的修复（粘贴不展开 `@path`、OAuth URL 渲染、非信任警告去噪），期望"安全"作为默认而非可选。
- **可观测性诉求**：subagent 轨迹难以查看（#22598）、ripgrep 失败未被记录（#29552）表明调试与追踪能力需要加强。

---

*数据来源: github.com/google-gemini/gemini-cli，统计时间 2026-10-08。*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报（2026-10-08）

## 1. 今日速览

过去 24 小时内 Copilot CLI 连续发布 5 个补丁版本（1.0.94-0 至 1.0.94-4），重点围绕 MCP 生命周期、Assisted Permissions 权限判定与企业托管策略（managed settings）行为展开修复。Issues 侧共 41 条更新，其中 MCP 相关故障、模型切换/冻结、沙箱（sandbox）与权限策略冲突是绝对焦点，多个高 👍 问题在今日集中关闭。PR 侧过去 24 小时无更新。

## 2. 版本发布

- **v1.0.94-4**
  - Fixed：MCP 启用/禁用现在可在服务器发现之前生效，无需先启动 MCP 服务器。
  - Fixed：Assisted Permissions 会将可见的 shell 代码发送给权限判定器（permission judge），不再要求不必要的人工批准。
- **v1.0.94-3**
  - Added：将 Claude Haiku 5.5 加入模型选择与 `--model` 补全。
  - Fixed：当启动时的 bypass-permission 标志被 managed settings 抑制时，现在会显示策略警告。
- **v1.0.94-2**：Fixes and changes（发布说明未展开细节）。
- **v1.0.94-1**
  - Fixed：分屏（split-view）协调过程中，点击 Sessions 侧边栏行现在可可靠切换会话。
- **v1.0.94-0**
  - Improved：当 managed settings 要求更新的 CLI 版本时，会显示升级指引，且不阻塞正常提示。
  - Managed policy 可禁用 Assisted Permissions，并将会话保持在 Manual Approval 模式。

## 3. 社区热点 Issues

1. **#770 [CLOSED] Claude Opus 4.5 处理提示时冻结（16 评论，👍3）**
   连续 3 次冻结并消耗 3 次 premium 请求，作者情绪强烈。高互动量说明模型稳定性直接影响付费额度，已关闭。
   https://github.com/github/copilot-cli/issues/770

2. **#1941 [CLOSED] 大量 "CAPIError: 400 The requested model is not supported"（13 评论）**
   几乎每次请求后都报错，属于典型服务端/模型路由事故。已关闭，但影响面广。
   https://github.com/github/copilot-cli/issues/1941

3. **#892 [CLOSED] 增加沙箱模式限制文件访问范围（12 评论，👍49）**
   今日 👍 最高的 Issue，要求将 agent 文件系统权限约束在指定工作目录。反映社区对 agent 安全边界的强烈诉求，现已关闭。
   https://github.com/github/copilot-cli/issues/892

4. **#4998 [CLOSED] macOS 更新/重启后 `.mcp-writer.binding` 残留陈旧设备 ID 导致 CLI 不可用（10 评论，👍11）**
   macOS 安全更新后所有新旧会话均无法处理提示，属高严重度可用性故障，已关闭。
   https://github.com/github/copilot-cli/issues/4998

5. **#5068 [OPEN] Windows 下 MCP Entra 登录失败（2 评论，👍10）**
   报错 "this server's advertised scopes could not be safely validated for the account broker"，影响 Azure DevOps MCP 等企业场景。企业身份认证与 MCP 的兼容性值得持续关注。
   https://github.com/github/copilot-cli/issues/5068

6. **#4802 [OPEN][triage] PRU 配额被清空，疑与启用 Assisted Permissions 有关（3 评论）**
   Pro 年度计划（legacy request-based PRU）用户报告配额异常消耗。与 1.0.94-3/-4 对 Assisted Permissions 的连续修复形成呼应，属付费敏感问题。
   https://github.com/github/copilot-cli/issues/4802

7. **#4224 [CLOSED] 子代理调用的 OTel span 缺失计费属性（6 评论，👍1）**
   子代理模型调用缺少 `github.copilot.nano_aiu`、`github.copilot.cost`，导致外部成本核算低估实际账单。对企业成本治理意义重大。
   https://github.com/github/copilot-cli/issues/4224

8. **#3024 [CLOSED] MCP 服务器过多导致持续压缩（3 评论）**
   启用过多 MCP 服务器会超出模型上下文窗口，使 agent 进入退化状态。与 1.0.94-4 的 MCP 修复方向一致。
   https://github.com/github/copilot-cli/issues/3024

9. **#4275 [OPEN] ACP：将 contextTier 暴露为会话配置项（4 评论，👍3）**
   交互式 CLI 可通过 `/model` 调整上下文层级，但 ACP server 未暴露该能力，影响 IDE/编辑器集成方（作者来自 GitKraken）。
   https://github.com/github/copilot-cli/issues/4275

10. **#5076 [OPEN] `/add-dir` 未将目录加入沙箱允许列表（3 评论）**
    新建 Issue（1.0.93 复现），沙箱与目录管理之间的不一致会直接阻断工作流，属新近暴露的沙箱配套缺陷。
    https://github.com/github/copilot-cli/issues/5076

其余值得留意：#2285（代码块复制携带不可见字符导致 command not found，👍10）、#4844（`--yolo` 被 pre-auth fail-closed 策略吞掉）、#4909（沙箱下 `/ide` 找不到工作区）、#4866（表单中 Ctrl-D 误触会话关闭）、#3978（BYOK 切换后被回退模型）。

## 4. 重要 PR 进展

过去 24 小时内 PR 更新数为 0，无 PR 可供汇总。

## 5. 功能需求趋势

- **沙箱与权限隔离**：#892（49 👍）、#5076、#4909 共同指向一个方向——社区希望 agent 的文件系统与进程访问被严格约束在工作区内，且沙箱与 `/add-dir`、`/ide` 等特性需保持一致。
- **MCP 生态成熟度**：本周 MCP 相关 Issue 密度最高，涵盖启动时序（#770 系列修复对应）、企业身份认证（#5068）、上下文膨胀（#3024）、陈旧绑定文件（#4998），说明 MCP 已从"能用"进入"稳定可用"的攻坚期。
- **IDE / 协议集成（ACP）**：#4275、#1774（自定义 agent 以斜杠命令前缀暴露）显示 ACP 协议的能力对齐是第三方编辑器集成方的核心诉求。
- **成本与用量可观测性**：#4224（OTel 计费属性缺失）、#4802（PRU 配额异常）反映用户对 AI 额度与账单透明度的需求上升。
- **模型选择与切换体验**：#1941、#3978、#4270 涉及模型路由、BYOK 切换与模型降级委托，模型控制权的可预期性是持续痛点。

## 6. 开发者关注点

1. **稳定性与额度浪费**：模型冻结、CAPI 400 报错等故障会消耗 premium 请求额度，用户的不满集中在"失败仍计费"。
2. **企业托管策略的可预测性**：多个 Issue（#4844、#4802）指向 managed settings / fail-closed 策略与命令行标志、Assisted Permissions 之间的冲突，策略切换过程缺乏透明度。
3. **沙箱功能的一致性缺陷**：沙箱已上线但配套命令（`/add-dir`）与集成（`/ide`）未同步适配。
4. **跨平台与企业认证**：macOS 设备 ID 残留、Windows Entra 登录失败，显示平台差异与身份认证仍是稳定性的薄弱环节。
5. **OTel 计费数据完整性**：子代理 span 的父子关系（#4858）与计费属性（#4224）双双缺失，做成本核算的团队需注意数据不可靠。

---

*说明：本日报仅基于所提供的 GitHub 数据生成；"过去 24 小时"以数据中标注的更新日期为准，部分 Issue 的创建时间较早但于 2026-10-08 有更新。*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报（2026-10-08）

## 1. 今日速览

今日无新版本发布，社区讨论集中在稳定性与平台兼容性问题上：Windows 平台 v1.17.10 的 Bun 段错误崩溃（#33742）持续发酵，成为评论数最高的 Issue（61 条评论、46 个赞）。同时，多项长期存在的配置加载、跨会话数据泄漏与资源占用问题在今日获得更新或被关闭，反映出社区对可靠性与工程质量的关注度明显上升。

## 2. 版本发布

无（过去 24 小时内无新 Release）。值得注意的是，PR #53969 为 V2 发布说明引入了"highlights"摘要机制，说明发布流程正在改进。

## 3. 社区热点 Issues

1. **#33742 [OPEN] v1.17.10 在 Windows 上因 Bun 段错误崩溃，v1.17.9 稳定** — 61 条评论、46 赞，是今日热度最高的 Issue。严重崩溃且存在明确回退方案，属于优先级最高的稳定性问题。
   https://github.com/anomalyco/opencode/issues/33742

2. **#11176 [OPEN] 官方 VS Code 扩展需求** — 32 条评论、160 赞，是榜单中点赞数最高的功能请求，历时数月仍在活跃讨论，说明 IDE 集成是社区最强的诉求之一。
   https://github.com/anomalyco/opencode/issues/11176

3. **#53839 [CLOSED] 项目级 `.opencode` 目录从未被发现（agents 与 opencode.jsonc 未加载）** — 仅全局配置生效，直接影响项目级配置能力，虽已关闭但值得关注其修复方式。
   https://github.com/anomalyco/opencode/issues/53839

4. **#53760 [CLOSED] event 表占据数据库绝大部分：9.03 GB 事件日志 vs 1.09 GB 消息内容** — `opencode.db` 达 11.37 GB，暴露出事件日志无界增长的存储设计问题，对长期用户影响大。
   https://github.com/anomalyco/opencode/issues/53760

5. **#53955 [OPEN] [reproduced] Plan 模式下 Agent 仍在执行编辑操作** — 最新提交（10-08）且已复现，Plan 模式破坏协议执行破坏性变更，属于安全/信任层面的严重问题。
   https://github.com/anomalyco/opencode/issues/53955

6. **#51856 [OPEN] MCP 客户端声明 elicitation 能力却从不处理 elicitation/create 请求，导致工具调用挂起超时** — 能力声明与实际实现不一致，影响所有依赖 elicitation 的 MCP 工具链。
   https://github.com/anomalyco/opencode/issues/51856

7. **#41399 [OPEN] 跨会话文件变更泄漏：同一目录下"Files Changed"面板显示其他会话的修改** — 数据隔离缺陷，多会话并行场景下容易造成误判。
   https://github.com/anomalyco/opencode/issues/41399

8. **#53763 [OPEN] [reproduced] 本地插件目录符号链接被重定向后静默失效，需重启才能恢复** — 影响 nix/home-manager、stow 等常见 dotfiles 工作流，已复现。
   https://github.com/anomalyco/opencode/issues/53763

9. **#53765 [CLOSED] V2：ChatGPT Token Sharing 在原生 CLI 中报告仅 3.44% prompt-cache 复用率** — 缓存复用率异常偏低，直接关系成本与性能，在原生 CLI 中复现（无 SuperOne 注入）。
   https://github.com/anomalyco/opencode/issues/53765

10. **#53745 [CLOSED] TUI：粘贴的图片以同一会话中较早的图片送达模型** — 输入内容错位，会导致模型回答错误截图，影响交互正确性。
    https://github.com/anomalyco/opencode/issues/53745

补充关注：**#52269** OpenAI 提供商间歇性 upstream 连接失败、**#53730** Windows 11 插件子进程弹出闪现终端窗口、**#30659** ACP 从 todowrite 发出 `SessionUpdate::Plan`（已关闭）。

## 4. 重要 PR 进展

1. **#53975 [OPEN] [contributor] fix(core)：将未识别的 OpenAI 兼容模型设置作为 body 字段转发** — Closes #53677，切换至原生 `@opencode/ai/...` 后修复兼容模型参数丢失问题。
   https://github.com/anomalyco/opencode/pull/53975

2. **#46369 [OPEN] feat(opencode)：新增保留缓存的压缩（cache-preserving compaction）** — Closes #43249，提供可选的压缩方式以保留 prompt 缓存，与 #53765 的缓存复用问题方向一致。
   https://github.com/anomalyco/opencode/pull/46369

3. **#53973 [OPEN] fix(app)：避免为被动关注启动历史 location** — Refs #44272，防止恢复非活动标签时触发权限/表单读取、启动 MCP 服务器与 watcher，属于性能与资源优化。
   https://github.com/anomalyco/opencode/pull/53973

4. **#53425 [OPEN] feat(task)：subagent 分支隔离** — 为 task 工具添加可选 branch 参数，通过 Git.Service 捕获当前分支并为 subagent 创建/移除独立 worktree，Addresses #53111。
   https://github.com/anomalyco/opencode/pull/53425

5. **#53796 [OPEN] fix(plugin)：解析本地包 manifest 入口点** — Addresses #52300，修复本地包目录形式的 manifest 入口发现（不含文件路径配置部分）。
   https://github.com/anomalyco/opencode/pull/53796

6. **#52550 [OPEN] fix(core)：围绕发布对 prompt 结算进行串行化** — Closes #34853，针对 `v2`，修复 prompt 结算与发布之间的竞态。
   https://github.com/anomalyco/opencode/pull/52550

7. **#52000 [OPEN] feat(tui)：新增按语言区域的 i18n 基础设施并接入 UI 字符串** — Closes #37216，为 TUI 引入多语言支持。
   https://github.com/anomalyco/opencode/pull/52000

8. **#53946 [CLOSED] fix(cli)：将配对链接放入远程配对二维码** — `opencode pair --remote` 现在直接编码配对链接 URL 而非 JSON，普通 `opencode pair` 保持 JSON。
   https://github.com/anomalyco/opencode/pull/53946

9. **#53969 [CLOSED] feat(release)：V2 发布说明以 highlights 开头** — 发布工具改进，让 Release Notes 更易读。
   https://github.com/anomalyco/opencode/pull/53969

10. **#53967 [CLOSED] refactor(console)：将所有无 key 的免费 Zen 模型代理到新推理服务** — 统一免费模型的 keyless 请求路由。
    https://github.com/anomalyco/opencode/pull/53967

其他：**#52011** 在 opencode-ai 包元数据中补充 repository 字段；**#49308** 修复 TUI 对话框底部内边距对齐。

## 5. 功能需求趋势

- **IDE 与编辑器集成**：官方 VS Code 扩展（#11176，160 赞）是呼声最高的需求；ACP 协议相关改进（#30659 从 todowrite 发出 Plan 更新）表明编辑器/协议集成是活跃方向。
- **多代理与任务隔离**：subagent 分支隔离（#53425）、GitLab 新会话 subagent 委派失败（#51464）显示社区关注多代理协作的可靠性与会话隔离。
- **缓存与成本优化**：prompt 缓存复用率过低（#53765）与保留缓存的压缩方案（#46369）共同指向 token 成本与性能优化。
- **桌面端体验**：按项目分组会话标签（#44589）、修复 File → Open Project 无响应（#52238）、设置跨机器同步到服务端（#53750）。
- **MCP 生态**：elicitation 能力未实现（#51856）暴露 MCP 客户端能力声明与实现脱节的问题。
- **多语言（i18n）**：TUI 多语言基础设施（#52000）呼应社区国际化需求。

## 6. 开发者关注点

- **平台稳定性**：Windows 是问题高发平台，包括 v1.17.10 段错误崩溃（#33742）、插件子进程弹出终端窗口（#53730）、桌面应用关闭后 `opencode-cli.exe` 残留占用内存与 CPU（#18199）。
- **配置系统可靠性**：项目级 `.opencode` 目录从不被发现（#53839）、插件符号链接重定向后静默失效（#53763）——配置文件与插件的加载/发现问题反复出现。
- **数据隔离与正确性**：跨会话文件变更泄漏（#41399）、Plan 模式仍执行破坏性编辑（#53955）、TUI 图片粘贴错位（#53745）——均属会误导用户的正确性问题。
- **资源与存储膨胀**：event 表无界增长至 9 GB（#53760）、恢复标签页时误启 MCP 服务器与 watcher（#53973）、Windows 进程残留（#18199），反映长期运行下的资源管理压力。
- **提供商与网络稳定性**：OpenAI 提供商间歇性 upstream 连接失败（#52269）、模型列表为空（#53367）、API 限流导致会话中断（#52332）。
- **流程合规摩擦**：多个 PR 带有 `needs:issue`、`needs:compliance`、`needs:title` 标签（#53973、#53425、#53796 等），并有 PR 因自动化清理被关闭（#43128），说明贡献流程的合规要求给开发者带来额外负担。

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报 — 2026-10-08

数据来源：github.com/badlogic/pi-mono（earendil-works/pi）

## 1. 今日速览

今天 Pi 发布 v1.1.0，核心新增是 OSC 7501 程序状态上报，让终端与 agent dashboard 能感知 Pi 的工作状态。同时 OpenRouter 模型过滤成为最热方向：Issue #10353 与两个相关 PR（#10569、#10672）同日活跃。稳定性方面，多个高风险缺陷被集中处理，包括 OpenAI OAuth 403、Anthropic 订阅请求挂起、以及 Windows/管道启动死锁。

## 2. 版本发布

**v1.1.0**
- **Program status reporting**：支持 OSC 7501 的终端与 agent dashboard 可以显示 Pi 当前是"工作中、阻塞在对话框或登录、已完成、还是失败"。
- 详情见文档：terminal-setup.md（Program status 一节）。

## 3. 社区热点 Issues（10 个）

1. **[#10605] ChatGPT/OpenAI OAuth 403**（OPEN，7 评论）
   使用 OpenAI Plus 订阅仍报 `403: The ChatGPT user is not eligible for subscription sharing`，登出/登录无效。涉及订阅共享策略，影响登录可用性。
   链接：earendil-works/pi Issue #10605

2. **[#10019] Anthropic 订阅请求在 :00/:30 UTC 挂起**（OPEN，7 评论）
   会话间歇性冻结、spinner 不停，返回 200 与 pings 但无 `message_start`。属服务端交互时序问题，持续未解。
   链接：earendil-works/pi Issue #10019

3. **[#10415] stdin 为未关闭非 TTY 管道时启动挂起**（OPEN，4 评论）
   `readPipedStdin()` 在管道未 EOF 时死锁。影响脚本化/自动化调用场景，属启动级阻塞缺陷。
   链接：earendil-works/pi Issue #10415

4. **[#10616] 扩展 `pi.exec` 无法执行 Windows 上的 .cmd 命令**（OPEN，4 评论）
   Windows 下 `pi.exec("npm", ["--version"])` 返回 exit 1 且 stdout 为空，而 bash 工具正常。直接影响扩展生态在 Windows 的开发体验。
   链接：earendil-works/pi Issue #10616

5. **[#10656] DashScope/Qwen 429 被误判为不可重试的计费错误**（OPEN，3 评论）
   `insufficient_quota` 实际是瞬时 TPS/TPM 限流，却被归类为非重试账务错误，导致请求直接失败。已有对应修复 PR #10677。
   链接：earendil-works/pi Issue #10656

6. **[#10645] 编译版（Bun）中 resizeImage 返回 null**（OPEN，2 评论）
   Windows 独立二进制下 spawn 后所有图片附件被丢弃，自 0.87.x 起存在，影响 RPC 模式与图像输入工作流。
   链接：earendil-works/pi Issue #10645

7. **[#9257] extractCursorPosition 残留 CURSOR_MARKER**（OPEN，6 评论）
   只移除首个 marker，残余 marker 可能被输出到终端，属 TUI 渲染污染问题，已有相关修复 PR #9441。
   链接：earendil-works/pi Issue #9257

8. **[#10657] 终端回复碎片泄漏进编辑器输入**（OPEN，3 评论）
   终端回复被拆分（如 DA1 分成 8 字节读取）且间隔 >50ms 时，可打印片段被当作文本插入 composer。TUI 输入可靠性问题。
   链接：earendil-works/pi Issue #10657

9. **[#10642] 嵌入式 SDK 长会话内存不释放**（CLOSED，3 评论）
   嵌入 coding-agent SDK 的长期服务（OAR）中，compaction 后条目常驻、resume 加载整个文件。对以 SDK 构建服务的开发者是重要隐患。
   链接：earendil-works/pi Issue #10642

10. **[#10353] OpenRouter 应只展示登录用户可用的模型**（OPEN，4 评论，👍1）
    建议用 `GET /api/v1/models/user` 过滤 `/model` 与 `--list-models`。是今日 OpenRouter 相关最受关注的需求，已有两个 PR 对应。
    链接：earendil-works/pi Issue #10353

其他值得留意：#10648（多 overlay 下 `done()` 关闭错误 overlay）、#10597（行尾空格破坏 shell 换行复制粘贴）、#10654（mcp.json 中 transport 在环境变量展开前解析）。

## 4. 重要 PR 进展（10 个）

1. **[#10672] 仅列出 OpenRouter key 可用的模型**（OPEN，davidbrai）
   每次刷新时合并内置/pi.dev catalog 与 `GET /models/user`，仅保留可用 chat 模型并取其上下文、max output 与价格。与 #10569 方向一致。
   链接：earendil-works/pi PR #10672

2. **[#10569] 按 key 可用性过滤 OpenRouter 模型**（OPEN，adawalli）
   通过认证的 `GET /api/v1/models/user` 过滤模型，Closes #10353，使用 provider 配置的 baseUrl。
   链接：earendil-works/pi PR #10569

3. **[#10677] 将 DashScope 配额限流归类为可重试**（CLOSED，bdqfork）
   修正 `retry.ts` 中的 `NON_RETRYABLE_PROVIDER_LIMIT_ERROR_PATTERN`，Fixes #10656。
   链接：earendil-works/pi PR #10677

4. **[#10680] 支持 npm 12 pack JSON 输出**（OPEN，christianklotz）
   npm 12 将 `npm pack --json` 从数组改为按包名索引的对象，修复安装校验、发布 dry run、本地 release 与打包失败。
   链接：earendil-works/pi PR #10680

5. **[#10663] 新增 `pi auth --continue`**（OPEN，cristinaponcela）
   通用认证续接入口，接受或提示 `base64url` JSON payload，用于完成在别处发起的认证流程。
   链接：earendil-works/pi PR #10663

6. **[#10286] 使用 OpenRouter 上报的实际总费用**（OPEN，vegarsti）
   OpenRouter 路由到不同定价 provider 时，实际计费常与 Pi 目录估算不同，改为采用其 Usage Accounting 报告值。
   链接：earendil-works/pi PR #10286

7. **[#10668] 扩展模态对话框打开时隐藏可见 overlay**（CLOSED，nikallass）
   修复 `ctx.ui.select()/confirm()/input()` 渲染在编辑区被 overlay 遮挡的问题，Fixes #10667。
   链接：earendil-works/pi PR #10668

8. **[#9441] 防止 cursor marker 泄漏**（OPEN，muyiyr）
   将 APC cursor marker 视为位置元数据而非持久样式，避免在选区与终端渲染路径中被重放。
   链接：earendil-works/pi PR #9441

9. **[#10590] 向扩展宿主提供 `@earendil-works/pi-mcp`**（CLOSED，georgeharker）
   该包已是 coding-agent 真实依赖，但未列入 `VIRTUAL_MODULES` 与 `HOST_PROVIDED_EXTENSION_PACKAGES`，此 PR 补齐并对宿主加守卫。
   链接：earendil-works/pi PR #10590

10. **[#9880] 发布配置 JSON Schema**（CLOSED，christianklotz）
    从 TypeBox 契约生成并发布 models、settings、keybindings、themes 的 JSON Schema，集中管理元数据、默认值与 provider 兼容定义。
    链接：earendil-works/pi PR #9880

其他值得关注：#10646（MCP 工具在资源枚举前注册）、#10521（为 NVIDIA NIM 模型内联 `$ref` tool schema）、#8112（jiti 导入前 realpath 扩展入口，修复 pnpm 布局）、#10528（重构 Nix 打包）、#8307（启用实验性 cache-friendly compaction）。

## 5. 功能需求趋势

- **Provider 模型可用性与计费**：OpenRouter 按 key 过滤模型（#10353 / #10569 / #10672）、采用实际计费（#10286），是今日最集中的方向。
- **认证与订阅体验**：OpenAI OAuth 403（#10605）、Anthropic 订阅挂起（#10019）、`pi auth --continue`（#10663）显示登录/订阅流程仍是重点。
- **扩展生态与 Windows 兼容**：`pi.exec` 无法跑 .cmd（#10616）、扩展入口 realpath（#8112）、宿主提供 MCP 包（#10590）。
- **TUI 渲染与终端集成**：cursor marker 泄漏（#9257）、终端回复碎片入输入（#10657）、行尾空格影响复制粘贴（#10597）、v1.1.0 的 OSC 7501 状态上报。
- **长会话 / 内存与压缩**：SDK 长会话内存不释放（#10642）、cache-friendly compaction（#8307）。
- **可配置文件与 Schema**：配置 JSON Schema 发布（#9880）。

## 6. 开发者关注点

- **Windows 平台一致性**：`pi.exec` 的 .cmd 失败（#10616）、NFS+HDD 下 resume 截断与 ETIMEDOUT（#10661）、Bun 二进制中图片附件丢失（#10645），Windows 相关问题在今日集中出现。
- **启动/会话稳定性**：stdin 管道死锁（#10415）、Anthropic 请求挂起（#10019），直接影响自动化与会话可靠性。
- **Provider 错误分类准确性**：DashScope 限流被误判为不可重试（#10656 / #10677），开发者希望限流与计费错误被正确区分。
- **数据与内容安全**：edit 工具在多编辑触发模糊匹配时静默把全角中文标点（，：（）"——）转为 ASCII（#10655），对中文文档维护者影响明显。
- **文档措辞准确性**：`codemode` 的"no file system"表述被指误导（#10673），`pi mcp login --timeout` 帮助文本不准确（#10636）。
- **扩展 API 语义正确性**：多 overlay 下 `done()` 关错层（#10648）、模态对话框遮挡 overlay（#10668），扩展作者对 UI API 行为一致性敏感。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报（2026-10-08）

## 1. 今日速览

今日社区焦点集中在 **Managed Agent 架构落地**与 **Windows 平台兼容性缺陷**两条主线上：托管会话的日志恢复、审批投递、审批卡安全等核心问题都有新进展或新报告。同时 Windows 侧集中爆发了 browser-use 技能不可用、Hook 子进程弹窗、以及自动化安全策略误判等多个 bug。CLI 侧 OpenTUI 渲染层持续修复（滚动窗口、光标稳定性）。

## 2. 版本发布

**v0.25.0-nightly.20261007.8003d28042**（nightly 构建）

- `fix(agents): replace selected remote Hosts without losing bindings`（#13430，@yiliang114）：修复替换远程 Host 时丢失绑定的问题。
- 附带一项 core 测试关闭（close #126）。
- 链接：https://github.com/QwenLM/qwen-code/releases

> 说明：这是 nightly 构建，Release Notes 由 `.github/release.yml` 自动生成，未包含完整变更清单。

## 3. 社区热点 Issues（10 条）

1. **#12380 Managed Agent 双路径架构提案**（评论 50，最高热度）
   https://github.com/QwenLM/qwen-code/issues/12380
   保留现有 TypeScript agent loop，将模型推理与工具环境供给解耦，并给 Session 持久化归属与 Workspace 能力。这是当前所有 Managed Agent 相关 PR/Issue 的总纲，讨论热度远超其他条目，建议优先关注其阶段性交付节奏。

2. **#13395 Kubernetes 工具运行时进度与跨平台交付门禁**（评论 16）
   https://github.com/QwenLM/qwen-code/issues/13395
   跟踪 K8s 工具运行时进度，2026-10-08 更新指向 Draft #13526 接入了 K2 私有运行时。属于平台分发（platform-distribution）关键路径。

3. **#13078 每日依赖 CVE 审计失败**（评论 13，github-actions 机器人）
   https://github.com/QwenLM/qwen-code/issues/13078
   定时依赖漏洞审计失败，提示可能存在新高危漏洞。与下方的依赖修复 PR #13169 直接相关，供应链安全需跟踪。

4. **#6710 ACP 无法区分用户取消与恢复后的意外中断**（评论 13，P1）
   https://github.com/QwenLM/qwen-code/issues/6710
   在最新 main 上仍可复现（已用真实 REST/SSE 请求验证），长期敞开的高优先级 bug，涉及会话恢复语义正确性。

5. **#13650 Hosted Session 日志在一次激活续期跨度的故障后永久失效**（P1，新报告）
   https://github.com/QwenLM/qwen-code/issues/13650
   控制面故障跨越一次 activation renewal 后，Session 日志永久死亡，后续操作全部返回 503。属可用性严重问题，托管会话用户需重点关注。

6. **#13632 MCP 在 `notifications/tools/list_changed` 时刷新工具列表**（评论 7）
   https://github.com/QwenLM/qwen-code/issues/13632
   交互会话中，MCP 服务器发出工具列表变更通知时自动重跑 `tools/list` 并替换会话工具集。属工具生态高频需求。

7. **#13570 Auto 模式误拦截仅提及 amend 字样的无害文本**（评论 7，P2 安全）
   https://github.com/QwenLM/qwen-code/issues/13570
   Auto 模式的安全拦截在用户自身规则之前生效，且无逃生通道，纯粹提及相关短语即被阻断。安全策略过严导致的可用性问题。

8. **#13566 web-shell 审批卡未对同级模型文本做转义，命令块注释夸大覆盖范围**（评论 6，P2 安全）
   https://github.com/QwenLM/qwen-code/issues/13566
   从已合并的 #13549 延续而来的残留审查项，属审批路径的 XSS/注入面风险，安全相关需优先处理。

9. **#13663 browser-use 技能在 Windows 上完全不可用**（P2，新报告）
   https://github.com/QwenLM/qwen-code/issues/13663
   Native Messaging host 从未在 Windows 注册，仅支持 macOS/Linux。Windows 10 LTSC 24H2 环境实测，影响所有 Windows 用户。

10. **#13689 subagent 定义中的 `${identifier}` 导致模板字符串抛错**（P2，新报告）
    https://github.com/QwenLM/qwen-code/issues/13689
    只要 `.qwen/agents/*.md` 正文含 `${...}` 序列（即便在代码围栏内作为文档），subagent 就启动失败。会影响文档/示例编写，属易踩坑的体验问题。

其他值得留意：#13271（公共 Workspace Session 的前台 Shell 配置文件准入）、#13662（Windows Hook 子进程缺少 `windowsHide: true`）、#13683（扩展技能无法用裸名调用）。

## 4. 重要 PR 进展（10 条）

1. **#13669 fix(cli): OpenTUI transcript 窗口化，修复恢复时白屏**
   https://github.com/QwenLM/qwen-code/pull/13669
   仅挂载视口附近的条目，按行预算而非条目数，用占位盒补位以保持滚动条准确。直接修复 blank-screen resume。

2. **#13693 fix(cli): 保持 OpenTUI 输入光标稳定**
   https://github.com/QwenLM/qwen-code/pull/13693
   将编辑器光标固定为常亮方块，避免终端默认的闪烁方块，属渲染细节打磨。

3. **#13636 fix(permissions): 重复的破坏性命令拒绝升级为人工审批**
   https://github.com/QwenLM/qwen-code/pull/13636
   AUTO 模式下重复拒绝破坏性命令时可升级为人工审批，与分类器拒绝行为对齐，改善安全与效率的平衡。

4. **#13682 fix(managed-agent): 缓存丢失后恢复排队中的审批投递**
   https://github.com/QwenLM/qwen-code/pull/13682
   调度器丢失附件缓存后，用被动重接协议恢复已接受的 Workspace 审批答案，提升托管会话的可靠性。

5. **#13652 feat(core): 从产出到注入全程记录工具结果大小**
   https://github.com/QwenLM/qwen-code/pull/13652
   工具结果从此携带数值化大小统计，贯穿生产者、持久化、单工具、合并、批处理等各层，为可观测性与上下文管理打基础。

6. **#13654 feat(managed-agent): 异步验证工具发布**
   https://github.com/QwenLM/qwen-code/pull/13654
   在服务端标志与客户端能力头同时开启时，将工具发布回读与流验证迁移到有界后台 worker，上传返回 HTTP 202。属托管 Agent 扩展运行时关键组件。

7. **#13572 feat(managed-agent): 邮件参考适配器的 H5b/H5c 通道运行时**
   https://github.com/QwenLM/qwen-code/pull/13572
   落地 Managed Agent 扩展运行时（proposal #12380 stage H）的通道运行时，以邮件适配器为参考垂直，堆叠于 #13548 之上。

8. **#11854 feat: 添加 hybrid code mode**（Codex 对齐）
   https://github.com/QwenLM/qwen-code/pull/11854
   引入 `tools.mode` 枚举：`direct` / `code_mode` / `code_mode_only`，`code_mode` 在保留普通工具直接调用的同时暴露隔离的 `exec` JavaScript 工具。

9. **#13679 fix(web-shell): Session Overview 列出并打开独立会话**
   https://github.com/QwenLM/qwen-code/pull/13679
   当 daemon 宣告 `standalone_sessions_v1` 能力时，Overview 可同时列出无工作区的独立会话。

10. **#13169 chore(deps): 更新存在漏洞的依赖**
    https://github.com/QwenLM/qwen-code/pull/13169
    针对每日 CVE 审计（#13078）识别的高危生产依赖做更新并添加定向 overrides。与审计失败问题配套。

其他值得留意：#13685（web-shell 俄语 locale）、#12395（本地发布文件产物保持临场性）、#13614（agent tab 按自身模型上下文窗口计量）、#9305（VP 模式底部对齐修复）。

## 5. 功能需求趋势

从本期 Issues 的标签与内容看，社区最关注的方向：

- **Managed Agent / 托管会话架构**：`roadmap/multi-agent`、`roadmap/session-management`、`scope/web-shell` 出现在 #12380、#13395、#13271、#13269、#13502、#13650、#13649 等大量条目中，是绝对主战场。核心诉求是推理与工具环境解耦、Session 持久归属、审批/取消的可恢复语义。
- **平台分发的跨平台对等性**：Windows 缺陷集中爆发——browser-use 技能（#13663）、Hook 窗口最小化（#13662）、以及安装/打包（`scope/windows`、`scope/installation`、`scope/packaging`）。另 #13656 提出在 qwen.ai 暴露 Desktop 下载并自动维护 README 链接。
- **MCP 与扩展生态**：MCP 工具列表动态刷新（#13632）、扩展技能裸名调用（#13683）显示社区希望扩展/MCP 集成更贴近"即插即用"。
- **安全策略精确性**：多个安全类 Issue（#13570、#13566、#13549 延续）指向 Auto 模式与审批路径的误判和转义缺口，方向是在安全与可用性之间求更精细的平衡。
- **CLI/Web 体验细节**：OpenTUI 渲染（白屏恢复、光标）、artifact 卡片文件名（#13667）、会话概览（#13679）等交互一致性问题持续被关注。

## 6. 开发者关注点（痛点与高频需求）

- **安全策略过度拦截**：Auto 模式对"仅提及"敏感字样的文本做拦截，且优先级高于用户自定义规则、无逃生通道（#13570），被开发者视为明显的误伤。
- **审批路径仍有未转义面**：web-shell 审批卡同级模型文本未做转义（#13566），安全审查线程被 merge 关闭而非解决，留下技术债。
- **Windows 体验断层**：browser-use 技能仅支持 macOS/Linux（#13663），Hook 子进程未加 `windowsHide` 导致整个 Windows Terminal 被最小化（#13662），Windows 用户在核心功能上被区别对待。
- **模板/占位符解析过于激进**：subagent 定义中任何 `${...}`（含代码围栏内的文档示例）都会导致启动失败（#13689），对编写文档与示例极不友好。
- **扩展命名严格化带来的兼容性回退**：扩展技能注册为 `<extension>:<authoredName>` 后，裸名调用被拒（#13683），影响既有用户习惯。
- **会话恢复与故障韧性**：Hosted Session 日志在跨激活续期的故障后永久死亡（#13650，P1）、ACP 无法区分用户取消与意外中断（#6710，P1），是托管场景下最受关注的两类可用性风险。
- **供应链安全**：每日 CVE 审计失败（#13078）与依赖修复 PR（#13169）提示漏洞治理已进入常态化流程，需要持续跟进。

---

*本文所有内容均基于 github.com/QwenLM/qwen-code 在 2026-10-08 提供的 Release / Issues / Pull Requests 数据整理。*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI 社区动态日报（2026-10-08）

> 数据来源：github.com/Hmbown/DeepSeek-TUI（项目现以 **Codewhale** / Shannon Labs 名义发布）

## 1. 今日速览

今日最核心的动态是 **v0.10.1 正式发布**，产品公开品牌转为 Shannon Labs 的 Codewhale，旧 npm 包 `deepseek-tui` 正式弃用。同时 **v0.10.2 候选 PR #6907** 已开启，带来 Terminal dock、shell wait 控制与恢复机制修复。过去 24 小时大量 Issue 集中关闭，重点是 MCP 客户端栈合并、provider 重试预算配置化与错误分类修复。

## 2. 版本发布

**v0.10.1**（Codewhale）
- 公开产品名为 Shannon Labs 的 **Codewhale**；`codewhale` 命令、npm 包与 release asset 名称保持小写技术标识。
- 旧 npm 包 **`deepseek-tui` 已弃用**，不再有新版本。
- 来源版本为 v0.8.x 旧 `deepseek` 命令的用户需迁移。
- 相关发布记录同步：PR #6908 将 v0.10.1 记录为已发布版本并让 `check:latest-release` 转绿。
- npm provenance 修正（PR #6905）：`package.json` 的 `repository` 需与发布仓库大小写一致，并附带 Windows 插件状态重试与贡献者署名。

## 3. 社区热点 Issues（10 个）

1. **#6050 [OPEN] 可插拔 agent memory 后端接缝**（评论 6，👍 0）
   当前 `MemoryBackend` 枚举仅有 `Native`/`Off`，无第三方后端入口；提议引入通用接缝，以 causal-memory / mem0 作为参考实现。这是本批次评论数最高、影响架构开放性的需求。
   https://github.com/Hmbown/DeepSeek-TUI/issues/6050

2. **#6142 [CLOSED] 合并两套 MCP 客户端栈**（评论 5）
   将 `tui/src/mcp/`（约 13.2k 行）与 `crates/mcp`（约 4.5k 行）重复实现统一，源自 0.9.14 重构 backlog。已关闭，是长期技术债的关键清理。
   https://github.com/Hmbown/DeepSeek-TUI/issues/6142

3. **#6700 [CLOSED] 将 stream 重试预算与传输超时暴露为配置**（评论 3）
   这些决定网络容错时长的参数原本编译为 `const`，代理/不稳定网络下的运维无法调优；现已转为可配置项。
   https://github.com/Hmbown/DeepSeek-TUI/issues/6700

4. **#6155 [OPEN] /pet 栖息地在真实终端的验收 + TUI/桌面共享 owner**（评论 2）
   0.10.1 重新分级为“部分完成”，仍需在 Kitty 协议终端上跑真实终端 QA。与今日 PR #6920 直接相关。
   https://github.com/Hmbown/DeepSeek-TUI/issues/6155

5. **#6871 [CLOSED] Windows 安全门误拦变量 PID 的 Stop-Process**（评论 2）
   为 #6827 增加的安全门正确拒绝 `Get-Process node | Stop-Process -Force`，却连带阻止了它自己推荐的有主进程停止操作。属安全性与可用性的边界问题。
   https://github.com/Hmbown/DeepSeek-TUI/issues/6871

6. **#6828 [CLOSED] 0.10.0：启用的 MCP server 在会话中不暴露任何工具**（评论 2）
   配置三个 MCP server 后，新 TUI 会话与 `codewhale exec` 均无 `mcp_*` 工具，`tool_search` 返回空，模型无法发现或调用它们。属高优先级功能阻断。
   https://github.com/Hmbown/DeepSeek-TUI/issues/6828

7. **#6795 [CLOSED] 内联 provider 错误帧绕过所有重试预算**（评论 2）
   OpenAI 兼容 provider 可在 HTTP 200 响应内以 chunk 级 `{"error":...}` 帧报告上游瞬时故障（如 OpenRouter），导致回合在首帧即失败。可靠性关键修复。
   https://github.com/Hmbown/DeepSeek-TUI/issues/6795

8. **#6788 [CLOSED] /retry 与 /undo 只回滚 UI 层**（评论 1）
   撤销的消息仍留在模型上下文并逐次累积，持久化会话也未同步，重载后被撤销消息全部回归。中文社区报告，属上下文一致性核心缺陷。
   https://github.com/Hmbown/DeepSeek-TUI/issues/6788

9. **#6843 [CLOSED] 确定性拒绝被标记为 "internal"**（评论 1，标签含 v0.10.2）
   `classify_error_message` 未覆盖 provider-4xx、budget 与裸 ERROR 词汇，回退逻辑把它们渲染成警告。直接影响错误可读性与诊断。
   https://github.com/Hmbown/DeepSeek-TUI/issues/6843

10. **#6818 [OPEN] 将 Ratatui 组件浏览器部署到 codewhale.net**（评论 0）
    2026-10-08 更新：PR #6907 head 包含未变更的 plain-copy 站点，后续三次 Computer Use 提交新增 CU/feature-registry 路径，独立源码审查通过。属文档/生态展示方向。
    https://github.com/Hmbown/DeepSeek-TUI/issues/6818

其他值得留意：#6803（工具调用失败后线程不可再发送）、#6800（卡死恢复仅 UI 侧）、#6746（DuckDuckGo 不可达网络下搜索回退链断裂）、#6745（Windows ExecutionPolicy 下 shell 工具失效）、#6303（Computer Use 跨安装方式统一）。

## 4. 重要 PR 进展（10 个）

1. **#6920 [OPEN] feat(tui)：真实 Engine 会话使用原生 full pet 模式**
   让 `/pet on` 复用共享原生 `PetMode`（规范 GPUI whale、当前会话保留的 agent、实际流式回复或失败），替代此前独立的 tank 渲染。对应 Issue #6155。
   https://github.com/Hmbown/DeepSeek-TUI/pull/6920

2. **#6907 [OPEN] [v0.10.2] Terminal dock、shell wait 控制、恢复与贡献者修复**
   0.10.2 候选：新增可用 Terminal dock，允许运维在命令继续运行时释放 shell wait，修复共享 Runtime 恢复与审批路由，并围绕实际能力、模型与……简化首页。今日最重要的版本候选。
   https://github.com/Hmbown/DeepSeek-TUI/pull/6907

3. **#6919 [CLOSED] fix(tui)：翻译 /profile 回复**
   `/profile` 在所有 locale 下均以英文回复，本 PR 补齐 `profile_switch` 用法文本、"Switching to profile 'work'..." 及 `apply.rs` 中 `SwitchProfile` 分支的本地化。属贡献者门禁通过的小型 i18n 修复。
   https://github.com/Hmbown/DeepSeek-TUI/pull/6919

4. **#6916 [CLOSED] feat(telemetry)：允许嵌入方声明 server 的 surface**
   运行 `codewhale serve --http` 的编辑器扩展此前会话被统一标为 `serve`，与其它无头 API 客户端无法区分；现可通过 `CODEWHALE_TEL...` 环境变量自报身份。
   https://github.com/Hmbown/DeepSeek-TUI/pull/6916

5. **#6913 [CLOSED] fix：解析 Chat Completions usage 中的 prompt_cache_write_tokens**
   解析上报的 cache-write 用量，缺失的缓存遥测保持缺失；在保留贡献者原始提交的前提下，将修复迁移到当前抽出的 `client/wire.rs` 模块。
   https://github.com/Hmbown/DeepSeek-TUI/pull/6913

6. **#6906 [CLOSED] [contribution-gate, v0.10.2] fix(prompts)：在 Windows 环境块中命名 npm launcher**
   Windows npm 安装下 launcher 的 `node.exe` 全程是 `codewhale.exe` 的父进程，按名杀 `node.exe` 会终止会话（#6827）；本 PR 在模型可见的环境块中说明 launcher 名称，配合已发布的安全门选项 B。
   https://github.com/Hmbown/DeepSeek-TUI/pull/6906

7. **#6917 [OPEN] [bot-authored] chore(deps)：2026-10-08 安全升级**
   夜间安全扫描：将 `web/` 的 `next` 从 16.3.6 升到 16.3.8，修复当前导致 `security-audit.yml` 的 `npm-audit (web)` 任务在 main 上失败的高危公告。属自动化依赖维护。
   https://github.com/Hmbown/DeepSeek-TUI/pull/6917

8. **#6908 [CLOSED] chore(web)：记录 v0.10.1 为已发布版本**
   由 release.yml 的 `sync-release-record` 在 v0.10.1 发布后自动生成，合并后让 main 上的 `check:latest-release` 转绿。
   https://github.com/Hmbown/DeepSeek-TUI/pull/6908

9. **#6607 [CLOSED] fix(tools)：截断时保留 run_tests、git 与 verifier 输出的尾部**
   `run_tests`、各 git 工具（`git_diff`、`git_status`、commit plan、`git_log`、`git_show`、`git_blame`、`git_fetch`、`git_merge_tree`）与 verifier 门各自复制了一份“只留头部”的 `truncate_with_note`，本 PR 统一并改为保留尾部——尾部通常才是失败信息所在。
   https://github.com/Hmbown/DeepSeek-TUI/pull/6607

10. **#6398 [CLOSED] feat(chrome)：新增 Chromewhale，Codewhale 的 Chrome 侧边栏客户端**
    Manifest V3 侧边栏，与本地 Codewhale runtime 通信；无追踪 issue，为直接请求的新客户端。代表浏览器集成方向。
    https://github.com/Hmbown/DeepSeek-TUI/pull/6398

其他已关闭的维护/文档类 PR：#5744（v0.9.12 源码准备）、#6429（补网站 404 特性发布记录）、#6399（为重排 `load_skill` 表面重新固定 runtime-contract 预算）、#6905（0.10.1 收尾）。

## 5. 功能需求趋势

- **可扩展架构与插件化**：#6050 的 agent memory 可插拔后端接缝、#6142 的 MCP 客户端栈合并、#6303 的 Computer Use 跨安装方式统一，共同指向“把内置单实现改造成开放接缝”。标签中 `plugins`、`mcp` 高频出现。
- **MCP 生态成熟度**：#6828 暴露了启用 MCP server 后工具不可见的阻断性缺陷，#6142 处理双栈重复，说明 MCP 已是核心集成面但仍不稳定。
- **多客户端与平台覆盖**：TUI + 桌面共享 owner（#6155）、Chrome 侧边栏（#6398）、VS Code 扩展遥测身份（#6916）、macOS 打包（#6303）——客户端矩阵持续扩张。
- **可靠性与网络容错**：#6700（重试预算/超时配置化）、#6795（内联错误帧）、#6800（卡死恢复）、#6803（失败工具调用致线程不可发送）构成一条完整的“故障可恢复”需求线。
- **Windows 平台适配**：本批次出现至少四条 Windows 专项（#6871、#6745、#6877 复制粘贴、#6906 launcher 命名），Windows 是当前问题密度最高的平台。
- **上下文与会话一致性**：#6788 的 `/retry`、`/undo` 只回滚 UI，#6803 的失败调用持久化缺工具结果，指向同一类“UI 状态与引擎/磁盘状态不一致”。
- **文档与展示基建**：#6814（codewhale-ratatui 组件目录与 README 渲染图库）、#6818（组件浏览器上线 codewhale.net）。

## 6. 开发者关注点

- **状态不同步是最大痛点**：模型上下文、持久化会话与 UI 三者不一致（#6788、#6800、#6803），会直接污染思维链并让重载后行为不可预期。
- **错误信息不可诊断**：确定性拒绝被归为 "internal" 并以警告呈现（#6843），加上内联错误帧绕过重试（#6795），使失败原因难以定位。
- **Windows 体验反复受阻**：安全门误拦（#6871）、ExecutionPolicy 导致 shell 工具拒跑（#6745）、复制粘贴不完整（#6877）、launcher 与父进程关系导致误杀（#6906）。
- **不稳定网络下的可调性缺失**：编译期常量化的重试预算与超时（#6700）让代理环境运维无手段可施；搜索回退链在 DuckDuckGo 不可达时断裂（#6746）。
- **工具输出截断方向错误**：多处“只留头部”的截断（#6607）丢弃了真正包含失败信息的尾部；模型可见文本仍会提及环境中不存在的工具（#6747）。
- **CI 与发布流程噪音**：#6698（共享进程 workspace gate 在 main 上失败而 nextest CI 通过）、#6399（runtime-contract 预算因 eager `load_skill` 变红）显示主干绿灯需要持续的人工重新固定。

---

*注：本日报所有条目、链接与描述均基于所提供的 GitHub 数据，未作外部补充。部分 Issue/PR 摘要因原始数据截断而以省略号呈现。*

</details>

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar) 自动生成。*