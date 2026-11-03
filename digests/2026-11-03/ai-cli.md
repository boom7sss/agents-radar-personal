# AI CLI 工具社区动态日报 2026-11-03

> 生成时间: 2026-11-03 17:53 UTC | 覆盖工具: 9 个

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

# AI CLI 工具社区横向对比分析报告（2026-11-03）

## 1. 生态全景

当前 AI CLI 工具生态已从"能不能用"进入"能不能放心用"的阶段：安全护栏（危险命令执行、仓库 hooks 无审批运行、git 权限绕过）与平台稳定性（Windows、macOS 沙箱、终端复用器兼容）成为多条产品线同日爆发的头号问题。与此同时，各工具都在密集收口各自的 Agent 子系统——子代理终止语义、多智能体路由、会话异常恢复——说明 agent 化架构仍是主线演进方向。成本与配额透明度（Prompt Cache 重复写入、限额重置不确定性、免费额度争议）已从边缘吐槽上升为直接影响用户信任的核心议题。整体上，社区对"新功能"的兴奋度低于对"稳定性、可观测性、可预测计费"的要求。

## 2. 各工具活跃度对比

> 说明：Issue/PR 数均为本期日报中**实际提及的条目数**（Claude Code 与 Copilot CLI 的 PR 数按日报披露的真实总量），并非仓库全量统计。

| 工具 | 版本发布 | 提及热点 Issue | 提及 PR | 社区活跃度信号 |
|---|---|---|---|---|
| Claude Code | v2.1.317 | 10（另有 2 条关闭项） | 3（仓库全量仅 3） | 最高热度 bug #26224，132 评论、152 👍，跨 9 个月未解 |
| OpenAI Codex | rust-v0.167.0-alpha.4（无变更说明） | 10 | 10（均为 bot 提交、CLOSED） | 安全事件 #59060（24 评论）；Windows #51524 达 62 评论 |
| Gemini CLI | v0.67.0-nightly（单点修复） | 10 | 10 | 多条 P1 子代理挂起/假成功；安全 PR 集中 |
| GitHub Copilot CLI | 4 个补丁版（v1.0.106-3 至 -6） | 10 | 1（仓库全量仅 1） | 企业托管策略刷新失败成批出现 |
| Kimi Code CLI | 无 | 无 | 无 | 过去 24 小时无活动 |
| OpenCode | 无 | 10（另有 2 条关闭） | 10 | 免费额度主帖 #59387 达 245 评论，为本期最高 |
| Pi | 无 | 10 | 10（另有 2 条合并） | OAuth 403 与上下文窗口不匹配持续发酵 |
| Qwen Code | v0.26.6 + TS SDK v0.1.27 | 10（另有 3 条长期 CI 议题） | 10 | CI 可靠性为核心焦点；#14724 累计 161 评论 |
| DeepSeek TUI | 无 | 6（日报说明为全部更新项） | 10（另有 2 项） | 批量 TUI 渲染修复，多为已合入 |

## 3. 共同关注的功能方向

**① 安全默认值与危险操作护栏（最广共识）**
- Codex #59060：模型被指示"重启服务器"后摧毁 systemd/容器，损失 $10,000+；PR #59120/#59118 修补审批与复议逻辑。
- Gemini CLI #22672：模型偶发使用 `git reset` / `--force`；PR #30095 修复 Windows `git diff` 权限绕过。
- Qwen Code #14746：默认关闭 folder trust 导致克隆仓库的 hooks 无审批执行。
- Copilot CLI #5206：恢复会话中权限请求被静默拒绝。

**② 成本、token 与配额透明度**
- Claude Code #106705（170 个 agent 每会话约 14k tokens）、#82563（Prompt Cache 重复写入占 3 周缓存支出 31%）。
- Codex #9508（每周限额重置确定性）、#37619（语音被 Work 配额拦截）。
- OpenCode #59387（免费额度主帖）、#60840（充值后仍提示余额不足）、#60626（单次请求费用异常）。
- Pi #11021（账户目录 500K 上下文却按 272K 使用）；DeepSeek TUI #7206（增量、缓存稳定的上下文折叠）。

**③ Agent / 子代理的语义与可观测性**
- Gemini CLI #22323（达到 MAX_TURNS 仍报 success）、#21409（generalist agent 无限挂起）、#21968（不主动使用自定义 skills/sub-agents）。
- Codex #34700（`spawn_agent` 拒绝指定模型）+ 多个 message board/邮箱路由 PR。
- Claude Code 子代理描述懒加载、stale git 标记。
- Copilot CLI #5339（只读 agent 监控 TUI）、#5112（OSC 7501 状态上报已落地）。
- Qwen Code #16171（Web Shell 回放缓慢）、#15799（已完成工具调用被误报失败）。
- Pi #10470（RPC 重复 `session_start`）。

**④ 配置一致性与热重载**
- Claude Code #24057：MCP/hooks/插件配置变更需重启会话。
- Gemini CLI #22267（Browser Agent 忽略 `settings.json`）、PR #30057（显式模型被动态解析覆盖）。
- Pi #10781（压缩摘要忽略 `transport` 设置）。
- OpenCode #54786（非法 `opencode.json` 被静默忽略）。

**⑤ 会话中断与持久化健壮性**
- Qwen Code #15799、#16169（SIGHUP 下已完成调用误报失败、排队消息静默丢失）。
- OpenCode #60251（重启后历史丢失）。
- Pi PR #11696（实验性多设备会话同步）。

**⑥ 平台兼容（Windows 尤为集中）**
- Codex #51524、#50915、#56933；Gemini CLI PR #30110、#30095；Copilot CLI #1148（LF→CRLF）、#5171；Claude Code #106779、#107019；DeepSeek TUI #7203。

## 4. 差异化定位分析

| 工具 | 功能侧重 | 目标用户 | 技术路线信号 |
|---|---|---|---|
| **Claude Code** | 云调度任务、Agent SDK hooks、插件/MCP 生态与 UI 渲染 API | 重度 agent 用户、插件作者 | 平台化（`/schedule`、hooks `onFailure`）；重心在生态扩展而非性能 |
| **OpenAI Codex** | 沙箱审批、Guardian 审查、多智能体编排、Computer Use | 需强管控的企业/高级 Pro 用户 | Rust 重写（alpha 版本号 rust-v0.167）；内部模块向 app-server 迁移 |
| **Gemini CLI** | 子代理体系、AST 感知代码理解、原生 bash 沙箱 | 开源开发者、Linux 桌面用户 | 自底向上做安全 helper 与工具层治理（grep 体积上限、MCP OAuth 防 DNS rebinding） |
| **GitHub Copilot CLI** | `/settings` 统一仪表盘、终端状态上报、ACP 集成、企业策略 | 企业用户、VS Code/IDE 生态 | 围绕 GitHub 企业治理与终端协议标准化；补丁式快速迭代（单日 4 版） |
| **OpenCode** | TUI 可配置性、多 provider、stats 基础设施 | 追求 UI 定制与自选模型的开发者 | 基础设施现代化（Cloudflare Workflows 迁移）；但 v2.2.x 稳定性承压 |
| **Pi** | 传输层健壮性、pi-durable 持久化、多 provider 适配、Nix 分发 | 嵌入/长驻进程场景、Nix 用户 | 底层资源生命周期与 schema 正确性；偏基础设施取向 |
| **Qwen Code** | Web Shell 运营化、Managed Agent/托管部署、CI 基建 | 企业托管、Web 端用户 | 托管运行时性能优化（租户锁系列 PR）、企业隐私开关 |
| **DeepSeek TUI** | 终端富文本渲染质量、Fleet 多智能体、自托管 provider | TUI 极客、自建模型用户 | Rust/ratatui；渲染正确性与路径语义是当前投入重点 |
| **Kimi Code CLI** | — | — | 本期无活动，无法评估 |

## 5. 社区热度与成熟度

**热度最高（按评论量）**
- OpenCode #59387（245 评论）为本期单帖之最，但高度集中于免费额度争议，属"政策摩擦"而非技术深度。
- Qwen Code #14724（161 评论）为长期自动机器人 CI 议题，噪声属性强。
- Claude Code #26224（132 评论 / 152 👍）是**持续时间最长、共识最统一的体验型 bug**，跨近 9 个月未解。
- Codex #51524（62 评论）、#16857（57 👍）显示 Windows 与性能细节对情绪影响大。

**成熟度分层**
- **稳定迭代、以补丁收口**：Copilot CLI（单日 4 补丁版、ACP 缺陷成批关闭）、Qwen Code（版本 + SDK 同步发布、托管运行时持续性能优化）——版本节奏稳定，问题以修复为主。
- **快速迭代但稳定性承压**：OpenCode（v2.2.x 连接重置/卡 Working/证书失败密集）、Codex（alpha 版本无变更说明、高危安全事件、PR 全为 bot 内部重构）。
- **架构重构期**：Codex（模块迁往 app-server）、DeepSeek TUI（Crate 拆分 EPIC-005 有实质进展）、Pi（pi-durable 新能力）。
- **低活动**：Kimi Code CLI 本期无活动。

**需注意的信号**：Claude Code 与 Copilot CLI 本期 PR 量（3 条、1 条）显著低于其他工具，且 Claude Code 的 3 条 PR 均为内部 triage/去重工作流调整，**尚无直接面向用户痛点的功能合入**——修复落地节奏值得后续跟踪。

## 6. 值得关注的趋势信号

1. **"高危命令护栏"正从审批开关转向多层校验。** Codex PR #59120/#59118、Gemini CLI #30095、Qwen Code #14746 同期出现，说明单一审批开关不足，行业在补"安全默认值 + 独立审批步骤 + 权限绕过检测"。**对开发者**：在设计 agent 自动化时，应假定模型会在合理指令下执行破坏性操作，需自建可回滚机制。

2. **成本可观测性成为一等公民。** Claude Code 给出 31% 缓存支出占比、Pi 发现上下文窗口被低估、OpenCode 出现单请求费用异常——这些都是**可量化、可复现**的成本缺陷。**对开发者**：选型时应把 token 计量透明度与缓存策略纳入评估，而不仅看功能列表。

3. **Agent 终止语义缺乏统一契约是信任风险源。** Gemini CLI "#22323 假成功"与 Qwen Code "#15799 已完成调用被误报失败"是同一问题的两面：**状态上报不可信会直接破坏下游自动化**。**对开发者**：依赖子代理结果做编排时，应加入独立校验而非仅信任 status 字段。

4. **配置应覆盖所有请求路径，否则就是隐性 bug。** Pi #10781、Gemini CLI #22267、Claude Code #24057 共同表明：配置项"部分生效"比"完全不支持"更难排查。**对开发者**：关注工具是否支持配置热重载与优先级规则文档化。

5. **Windows 与终端复用器是兼容性长尾。** Codex、Gemini CLI、Copilot CLI、Claude Code、Pi（Zellij）、DeepSeek TUI 均有 Windows 或终端环境相关缺陷集中出现。**对开发者**：跨平台团队应优先在 Windows 上做验收。

6. **实验特性需要降级与状态保留策略。** Codex #43194（`new_context` 丢状态）、OpenCode 跨模型压缩测量（#61372）、Pi 扩展加载器执行测试代码杀死宿主（#11691）——实验能力缺乏兜底会放大风险。**对开发者**：谨慎在关键路径启用实验开关。

7. **分发渠道与依赖图变更需同步。** Pi 因新增 `pi-schema` 导致 Nix 求值失败（p0），Qwen Code 因 RHEL 10 移除 Xvfb 调整 CI——**内部包变更会击穿下游分发链路**。**对依赖方**：锁定版本并关注上游依赖图变动。

---

*本报告仅基于 2026-11-03 各工具社区动态摘要生成，未引入摘要之外的信息；"提及 Issue/PR 数"为日报中实际列出的条目数，不等同仓库全量统计。*

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告（数据截止 2026-11-03）

> 说明：数据中 PR 的“评论数”字段缺失（undefined），因此无法按评论数对 PR 排序。以下“热门 Skills 排行”依据数据中出现的排序位置、更新时间及内容重要性综合呈现；评论数仅在 Issues 中可用。所有状态均以供给数据为准，未提供 merged 状态的 PR 一律标注为 OPEN。

## 1. 热门 Skills 排行

1. **fix(mcp-builder): 适配 mcp>=2 的 streamable_http_client 与自定义 headers**（#1742，OPEN）
   功能：修复 MCP 客户端在 mcp>=2.0.0 下的导入名变更与自定义 HTTP header 配置方式。热点：官方 mcp-builder 技能与最新 MCP SDK 的兼容性断裂。关联 Issue #1668。
   链接：https://github.com/anthropics/skills/pull/1742

2. **fix(skill-creator): 隔离触发评测并处理 Windows 与运行时失败**（#1298，OPEN）
   功能：修复 skill-creator 触发评测的误判与平台兼容问题（Windows 下管道 select 失效、worker 探测竞争、工具中断扫描）。热点：技能评测结果的可靠性。
   链接：https://github.com/anthropics/skills/pull/1298

3. **新增 notion-spec-to-implementation 与 quantitative-resume-auditor 技能**（#1245，OPEN）
   功能：将产品/技术规格转化为 Notion 可执行任务；以及简历量化审查技能。热点：工作流自动化类新技能的社区提交。
   链接：https://github.com/anthropics/skills/pull/1245

4. **webapp-testing: 移除 with_server.py 中的 shell=True**（#1980，OPEN）
   功能：消除将未净化命令字符串传入系统 shell 的风险。热点：官方技能脚本的输入安全。
   链接：https://github.com/anthropics/skills/pull/1980

5. **fix(docx): LibreOffice 超时报告为错误并校验输出**（#1792，OPEN）
   功能：超时不再误报成功，且仅在确认修订标记已清除后才宣称成功。热点：文档技能的静默失败问题。
   链接：https://github.com/anthropics/skills/pull/1792

6. **新增 proofcore-contract-auditor（智能合约存证审计）**（#1771，OPEN）
   功能：对 Solidity / Rust 合约做静态分析，并将审计证明锚定到 TON 区块链。热点：Web3 垂直领域技能。
   链接：https://github.com/anthropics/skills/pull/1771

7. **新增 pyxel 复古游戏开发技能**（#525，OPEN，创建于 2026-03-05、更新至 2026-11-01，长期活跃）
   功能：指导用 Python 开发、调试并验证复古游戏，含无头输入驱动运行与逐帧检查。热点：创意/游戏类技能。
   链接：https://github.com/anthropics/skills/pull/525

8. **新增 document-typography 排版质量控制技能**（#514，OPEN）
   功能：防止孤行、寡段（章节标题滞留页底）、编号错位等文档排版问题。热点：生成文档的成品质量。
   链接：https://github.com/anthropics/skills/pull/514

## 2. 社区需求趋势

- **企业内共享技能库**：Issue #228 希望 Organization 内直接共享技能，而非手动下载 .skill 文件经 Slack/Teams 传递后逐人上传。这是 👍（8）最高的需求之一。
  链接：https://github.com/anthropics/skills/issues/228

- **技能命名空间与信任边界**：Issue #492 指出社区技能以 `anthropic/` 命名空间分发造成仿冒与越权授权风险，讨论最热（46 条评论）。反映社区对技能分发治理的强烈诉求。
  链接：https://github.com/anthropics/skills/issues/492

- **技能触发与评测可信度**：Issue #556（run_eval.py 触发率 0%，13 条评论）、#1394（eval-viewer XSS）、#1390（mcp-builder 评测对真实服务器全 0 分）显示：社区最期待的是“技能是否真的被触发、评测结果是否可信”这一类工具链质量方向。
  链接：https://github.com/anthropics/skills/issues/556 ｜ https://github.com/anthropics/skills/issues/1394 ｜ https://github.com/anthropics/skills/issues/1390

- **上下文与 token 效率**：Issue #202 批评 skill-creator 像文档而非操作指令、浪费 token；Issue #1487 反映 claude-api 技能单次注入约 156k token 撑爆上下文；Issue #1329 提出 compact-memory 用符号记法压缩 agent 状态。核心诉求是技能本身要“省上下文”。
  链接：https://github.com/anthropics/skills/issues/202 ｜ https://github.com/anthropics/skills/issues/1487 ｜ https://github.com/anthropics/skills/issues/1329

- **输出质量门禁/治理流程**：Issue #1385 提出“预任务校准 → 对抗审查 → 交付验证”三段式质量门；#412 提议 agent-governance 安全模式（已 CLOSED）。反映对 AI 输出可控性的需求。
  链接：https://github.com/anthropics/skills/issues/1385 ｜ https://github.com/anthropics/skills/issues/412

- **文档类技能的可靠性**：docx 合并丢命名空间写坏 XML（#2018）、docx 孤立评论检测（#1734）、xlsx 工作表级定义名解析（#2019）、pptx 缩略图参数校验（#1975）等，集中指向 Office 文档技能的健壮性。
  链接：https://github.com/anthropics/skills/issues/2018 ｜ https://github.com/anthropics/skills/issues/1868

- **描述质量规范**：Issue #2064 指出 theme-factory 的 description 只说了“做什么”未说“何时用”，与 skill-creator 最佳实践相悖。
  链接：https://github.com/anthropics/skills/issues/2064

## 3. 高潜力待合并 Skills（OPEN，近期更新活跃）

| PR | 内容 | 最近更新 | 判断依据 |
|---|---|---|---|
| [#2019](https://github.com/anthropics/skills/pull/2019) | xlsx 解析工作表级定义名与别名 | 2026-11-03 | 当日更新，修复 #2013，范围明确 |
| [#1980](https://github.com/anthropics/skills/pull/1980) | webapp-testing 移除 shell=True | 2026-11-01 | 安全问题，改动小且聚焦 |
| [#1792](https://github.com/anthropics/skills/pull/1792) | docx 超时误报修复与输出校验 | 2026-11-01 | 修复静默失败，可验证性强 |
| [#525](https://github.com/anthropics/skills/pull/525) | pyxel 复古游戏技能 | 2026-11-01 | 从 3 月持续维护至今，作者即 Pyxel 作者 kitao |
| [#2108](https://github.com/anthropics/skills/pull/2108) | README 澄清文档技能快照状态与同步关系 | 2026-11-03 | 纯文档澄清，低风险 |
| [#1975](https://github.com/anthropics/skills/pull/1975) / [#1976](https://github.com/anthropics/skills/pull/1976) / [#1977](https://github.com/anthropics/skills/pull/1977) | pptx 参数前置校验、webapp-testing 元素识别、algorithmic-art wrapAround 修复 | 2026-10-18~27 | 同一作者 gerardrecinto 的系列小修复，各自关联已开 Issue |
| [#1245](https://github.com/anthropics/skills/pull/1245) | notion-spec-to-implementation + 简历量化审查 | 2026-10-15 | 新技能提交，更新活跃但需人工评审 |

## 4. Skills 生态洞察

**一句话总结：社区当前最集中的诉求不是“更多技能”，而是“更可信的技能”——即修复触发评测失真、上下文膨胀、静默失败与命名空间仿冒等基础质量问题，让技能真正按预期被调用、被信任。**

---

# Claude Code 社区动态日报（2026-11-03）

> 数据来源：github.com/anthropics/claude-code

## 今日速览

今日发布 v2.1.317，重点在云调度任务的连接器告警与账户邮箱外发确认等安全/隐私防护。社区侧，长期未解的「卡死 5–20 分钟」问题（#26224，132 条评论、152 个赞）仍是最高热度 bug；同时新增多条 2.1.317 相关的连通性与工具链缺陷（如 EPROTO 连接中断、子代理 stale git 标记）。PR 方面数量很少，仅 3 条更新，集中在内部 issue 分诊/去重工作流的模型切换与执行方式调整。

## 版本发布

**v2.1.317**
- 当新的云端定时任务被附加了用户未请求的 connectors 时，`/schedule` 会给出警告并提示如何移除。
- 新增检查：当 web 或 shell 工具调用会将账户邮箱地址发送到网络时，先向用户确认。
- Agent SDK hooks 新增 `onFailure: "block"` 配置项（发布说明在此处被截断，后续内容未提供）。

## 社区热点 Issues

1. **[#26224](https://github.com/anthropics/claude-code/issues/26224) [OPEN] 卡死/冻结 5–20 分钟以上**
   自 2026-02 创建至今仍开放，132 条评论、152 个赞，是当前热度最高的 bug。大量用户的日常阻塞性体验问题，值得优先跟踪。

2. **[#53915](https://github.com/anthropics/claude-code/issues/53915) [OPEN] API 错误：服务端临时限流（非用户用量上限）**
   69 条评论、25 个赞，跨 Windows / VS Code / API 多标签。反映限流错误信息与用户配额提示混淆，易造成误判。

3. **[#24057](https://github.com/anthropics/claude-code/issues/24057) [OPEN] MCP 服务器、hooks、插件配置变更应自动重载**
   37 条评论、21 个赞。痛点明确：任何配置修改都需重启会话、丢失上下文，是插件生态体验的核心摩擦点。

4. **[#106705](https://github.com/anthropics/claude-code/issues/106705) [OPEN] 自定义子代理描述懒加载**
   用户拥有 170 个自定义 agent 时，每个会话及每次子代理启动约消耗 14k tokens，而实际仅少量被使用。成本优化诉求强烈且量化清晰。

5. **[#82563](https://github.com/anthropics/claude-code/issues/82563) [OPEN] Prompt Cache 全量前缀被反复重写**
   报告称短间隔内多会话、多模型重复写入完整前缀，占 3 周缓存写入支出的 31%。直接关联计费，是成本类反馈中最具数据支撑的一条。

6. **[#102480](https://github.com/anthropics/claude-code/issues/102480) [OPEN] Desktop Code 标签页：next-step 框遮挡插件 AbovePrompt 渲染**
   带复现步骤，涉及插件 UI 渲染 API（`ui.render` / `AbovePrompt`），对插件作者有直接影响。

7. **[#106779](https://github.com/anthropics/claude-code/issues/106779) [OPEN] Desktop Code 标签页丢弃 MCP 未声明工具参数并显示过期 schema**
   Windows + FastMCP/stdio 场景，涉及 `claude_desktop_config.json` 加载行为，影响 MCP 服务端集成的正确性。

8. **[#106422](https://github.com/anthropics/claude-code/issues/106422) [OPEN] `--resume` 恢复被 `session.compact` hook 删除的消息**
   当会话文件 ≤5 MiB 时复现，涉及 hooks API 与恢复逻辑的一致性，对依赖 hooks 做上下文治理的用户是关键缺陷。

9. **[#106884](https://github.com/anthropics/claude-code/issues/106884) [OPEN] 频繁 API 连接中断（EPROTO）**
   报告环境为 macOS + Ghostty + 2.1.317，属当日新增、与最新版本相关的连通性问题（已被标为 duplicate）。

10. **[#107019](https://github.com/anthropics/claude-code/issues/107019) [OPEN] 2.1.317 三处缺陷：子代理 stale git 标记、压缩后 Edit 失败、SendMessage 问题**
    单条报告汇总三个可复现问题，直接对应最新版本，是版本回归排查的有价值线索。

**其他值得留意的已关闭项**：[#100023](https://github.com/anthropics/claude-code/issues/100023)（VS Code 扩展 Shift+拖拽失效，已关闭）、[#106785](https://github.com/anthropics/claude-code/issues/106785)（美国夏令时结束后定时触发延迟约 48 分钟，已关闭）。

## 重要 PR 进展

> 过去 24 小时内仓库仅有 3 条 PR 更新，不足 10 条，以下为全部内容，不作补充。

1. **[#106972](https://github.com/anthropics/claude-code/pull/106972) [OPEN] 让去重 agent 在前台运行**
   部分去重任务数秒即结束，疑因 Claude 在后台启动 agent 后结束回合导致被截断。该 PR 在去重步骤设置 `CLAUDE_CODE_DISABLE_BACKGROUND_TASKS=1` 以规避。

2. **[#106583](https://github.com/anthropics/claude-code/pull/106583) [CLOSED] 将 issue 分诊与去重工作流迁移到 Claude Sonnet 5.5**
   涉及 `claude-issue-triage.yml`（opus-4-6 → sonnet-5-5）与 `claude-dedupe-issues.yml` 等三个工作流的模型切换。

3. **[#58673](https://github.com/anthropics/claude-code/pull/58673) [OPEN] 标题与摘要均为 "s"**
   无有效描述，无可评估内容。

## 功能需求趋势

从本期 Issues 的标签与内容看，社区关注方向集中在：

- **MCP / 插件生态体验**：配置热重载（#24057）、MCP 图标渲染（#95558）、工具参数与 schema 正确性（#106779）——生态扩展性已成为主要诉求面。
- **成本与 token 效率**：子代理描述懒加载（#106705）、Prompt Cache 重复写入（#82563），均给出了具体 token/费用量化。
- **记忆与上下文**：将 workspace memory stores 开放给 Claude Code、claude.ai 与 Desktop（#98667）。
- **UI / TUI 细节**：回合中回复被折叠为不可展开的灰色摘要（#104946）、全屏 TUI 复制选区丢失 pill 单元格（#103841）、Desktop 语音听写丢尾词（#103080）。
- **平台与 IDE 集成**：VS Code、Desktop Code 标签页相关的多条 bug 与回归。

## 开发者关注点

- **稳定性压倒一切**：#26224 持续近 9 个月仍是最高热度问题，长时间卡死对日常开发流程影响最大。
- **错误信息不透明**：#53915 中「服务端临时限流」与「用户用量上限」提示混淆，容易误导用户判断自身配额状态。
- **配置变更成本高**：改一次 MCP/hooks/插件就要重启会话，是插件开发者的高频抱怨。
- **版本回归敏感**：多条新报 bug 直接标注 2.1.317（#106884、#107019），且当前 Windows 平台相关报告密度较高。
- **工具链细节缺陷累积**：grep 垫片退出码反转（#88802）、`--resume` 与 compact hook 不一致（#106422）等底层行为问题虽影响面小，但会破坏 agent 自动化流程的可预测性。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报 — 2026-11-03

## 今日速览

今日社区讨论重心集中在**安全问题与平台兼容性**：一则关于 Codex CLI 被指示“重启服务器”后破坏 systemd、容器并造成万元以上损失的 Issue（#59060）引起高强度讨论（24 条评论），揭示了高危命令执行的管控缺口。同时 Windows 端 Computer Use 与 MXC 沙箱的稳定性问题持续发酵，Issue #51524 累计 62 条评论。PR 侧以内部重构为主，集中于 Guardian 审查、agent message board 与认证共享的模块迁移。

---

## 版本发布

**rust-v0.167.0-alpha.4**（alpha 预发布）
- Release 说明仅包含版本号，未提供变更细节，暂无法评估具体更新内容。
- 链接：openai/codex Release rust-v0.167.0-alpha.4

---

## 社区热点 Issues

1. **#59060 [OPEN] 被指示重启服务器，却摧毁 systemd、容器并造成 $10,000+ 损失**
   v0.166.0 CLI + `gpt-6-sol medium`，在 Linux 上执行高危操作。这是今日最具安全警示价值的报告，直接指向模型行为与命令执行的边界管控。社区评论 24 条。
   openai/codex Issue #59060

2. **#51524 [OPEN] [Windows] Computer Use 卡在 get_window_state，无法识别浏览器 URL**
   `sky.get_window_state` 在 Chrome/Edge 上直接中止回合，此前正常。62 条评论、7 个赞，是当前评论量最高的 Issue，Windows 端 Computer Use 可用性问题突出。
   openai/codex Issue #51524

3. **#16857 [CLOSED] 应用“思考”时因微小无用动画导致 GPU 高占用**
   56 条评论、57 个赞，是今日点赞最高的 Issue。已关闭，反映社区对无谓资源开销的强烈不满，也说明性能问题获得了处理。
   openai/codex Issue #16857

4. **#9508 [OPEN] 让每周限额重置变为确定性行为**
   Pro 用户提出增强需求，49 条评论、36 个赞。限额重置的不确定感是高频付费用户的核心摩擦点。
   openai/codex Issue #9508

5. **#50915 [OPEN] 存在无关的已锁定 BitLocker 卷时，MXC 在命令启动前失败**
   Windows 沙箱对系统环境过于敏感，工作区并不引用该卷却仍失败，28 条评论。属于典型的环境耦合缺陷。
   openai/codex Issue #50915

6. **#34700 [OPEN] 启用 multi_agent_v2 时，spawn_agent 拒绝 gpt-5.6-luna**
   14 条评论但高达 37 个赞，说明多智能体与模型路由的组合问题影响面较大，社区共鸣强。
   openai/codex Issue #34700

7. **#56933 [OPEN] Intel macOS 上显示或拖动桌面宠物时反复出现 setAcceptsMouseMovedEvents 错误**
   24 条评论。`pets` 相关缺陷在 Intel Mac 上稳定复现，属平台兼容性问题。
   openai/codex Issue #56933

8. **#51838 [OPEN] Computer Use 的“始终允许”重复弹出：MCP elicitation 回复收到未识别错误**
   涉及 MCP、computer-use、dots、app-server 多个标签，13 条评论。跨组件链路的授权交互缺陷，修复复杂度较高。
   openai/codex Issue #51838

9. **#43194 [OPEN] 实验性上下文管理：Pro + Astra 下原生 notes/history 返回 404**
   实验特性可用性缺口，且 `new_context` 可能丢弃任务状态，11 条评论。对依赖上下文连续性的用户风险较高。
   openai/codex Issue #43194

10. **#37619 [OPEN] macOS Pro 20x（$200/月）下，从 Chat → New voice chat 进入的语音被已耗尽的 Codex/Work 配额拦截**
    13 条评论。计费/配额池隔离逻辑错误，涉及付费用户的直接体验与权益。
    openai/codex Issue #37619

---

## 重要 PR 进展

> 说明：以下 PR 均为 `copyberry[bot]` 提交且状态为 CLOSED，评论数未提供。多为内部重构与测试整理。

1. **#59192 依据已公布的模型程序解析已保存的 Daybreak 偏好**
   新增 `SavedDaybreakChoice` 与 `ModelAccessPrograms::select_saved`，用于解析可选的已保存偏好。
   openai/codex PR #59192

2. **#59177 将共享运行时认证贯通到线程与 API 客户端**
   启用 `runtime_agent_instances` 时，在线程、模型发现与扩展客户端间共享惰性注册的运行时，同时尊重各自的认证设置。
   openai/codex PR #59177

3. **#59167 将 agent message board 清理迁移至 app server**
   把永久删除逻辑从 `codex-core` 移入 app server 的线程存储清理回调，并在 board 功能禁用时保持清理有效。
   openai/codex PR #59167

4. **#59162 将 agent message board 宿主集成迁移至 app-server**
   把 board 宿主适配器与 `install_agent_message_board` 从 `codex-core` 迁至 `codex-app-server`，改用 core 的公开运行时接口。
   openai/codex PR #59162

5. **#59154 为 message board 访问暴露线程 API**
   为 `CodexThread` 增加读取注册来源、解析 agent 引用、读取配置时钟的方法，替代 board 专用的线程查找。
   openai/codex PR #59154

6. **#59139 将 message board 通知改经 agent 邮箱路由**
   修复接收方无活跃回合时通知被跳过的问题，改走常规 agent-message 路径，使空闲接收者可收到通知。
   openai/codex PR #59139

7. **#59136 只解析一次 Guardian 审查响应**
   引入 `GuardianReviewResponse` 同时保留解析结果与原始文本，供授权检查、拒绝复议与审查复用。
   openai/codex PR #59136

8. **#59120 沙箱审批关闭时仍允许危险命令审查**
   修复将 granular `sandbox_approval` 设为 `false` 后连带阻断 `rm -f` 等危险命令审批请求的问题。
   openai/codex PR #59120

9. **#59118 复议超时时保留 Guardian 的拒绝结论**
   避免复议超时覆盖已完成的 Guardian 拒绝结果，保留原始评估，属安全判定正确性修复。
   openai/codex PR #59118

10. **#59130 新增隐藏聚焦侧边会话面板的快捷键**
    新增 `tui.keymap.global.hide_pane`，workspace 模式下默认 `leader -`，隐藏后返回父会话并保留对话内容。
    openai/codex PR #59130

---

## 功能需求趋势

- **限额与配额透明度**：#9508（每周限额重置确定性）、#37619（语音被 Work 配额拦截）显示计费与配额边界是明确的功能诉求方向。
- **多智能体与模型路由**：#34700（`spawn_agent` 与 `multi_agent_v2`）、多个 PR 涉及 agent message board 与邮箱路由，多 agent 协同是当前架构演进主线。
- **Computer Use 与浏览器自动化**：#51524、#51838、#56928（“browser access host is unavailable”）、#51103（云端浏览器反复崩溃）构成一组集中的浏览器/桌面自动化可靠性需求。
- **沙箱与权限管控**：#50915（BitLocker 耦合）、#59060（高危命令破坏系统）、PR #59120/#59118 共同指向沙箱、审批与危险命令拦截的健壮性。
- **上下文与记忆**：#43194（notes/history 404、`new_context` 丢状态）反映实验性上下文管理的可用性需求。
- **界面可定制性**：#48396 请求可隐藏/折叠/自定义 Windows 左侧导航栏；#59130 已落地侧栏隐藏快捷键。

---

## 开发者关注点

- **高危操作缺乏硬性护栏**：#59060 中模型在合理指令下执行破坏性操作并造成经济损失，开发者需要更可靠的危险命令审查与可回滚机制，而非仅依赖审批开关（参见 PR #59120）。
- **Windows 平台稳定性成短板**：Computer Use 无法读取窗口状态、沙箱受无关 BitLocker 卷影响、视口跳动（#55025）、导航栏不可定制，Windows 相关问题在热门 Issue 中占比显著。
- **资源开销敏感**：GPU 高占用动画 Issue 获得 57 个赞并已关闭，说明性能细节对社区情绪影响很大。
- **付费配额逻辑需明确**：Pro/Plus/Business 用户多次报告配额池被错误共用或拦截非 Codex 功能，配额边界与重置规则亟需确定化。
- **实验特性需可用性兜底**：上下文管理、多智能体等实验能力的 404 与状态丢失问题，要求更清晰的降级与状态保留策略。
- **PR 侧以内部重构为主**：今日高评论 PR 均来自 bot、模块迁移与测试整理，尚未出现直接面向上述用户痛点的功能合入，修复落地节奏值得后续跟踪。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报 · 2026-11-03

## 1. 今日速览

今日动态集中在**Agent 子系统的稳定性与可观测性**：多个 P1 级 Issue 反映子代理（generalist agent、browser subagent）挂起、误报成功、被中断等问题。安全侧有两项 Windows 相关修复 PR（git diff 权限绕过、PowerShell 命令误判）进入审查。版本侧仅有一个 nightly 修复。

## 2. 版本发布

**v0.67.0-nightly.20261103.g0ac57c029**
- `fix(core)`：防止被中断的 Whisper 模型下载被误判为"已安装"（PR #30058）
- 属于单点修复型 nightly，无 API 变更。

## 3. 社区热点 Issues（10 条）

1. **#22323 [P1]** Subagent 在达到 MAX_TURNS 后仍上报 `status: "success"` / `Termination Reason: "GOAL"`，掩盖了中断事实。评论 13 条，为今日讨论最热烈的问题。对依赖子代理结果做自动化的用户影响直接。
   https://github.com/google-gemini/gemini-cli/issues/22323
2. **#21409 [P1]** 委派给 generalist agent 后无限挂起（最长等待 1 小时），获 👍8，是今日社区共鸣最强的痛点。
   https://github.com/google-gemini/gemini-cli/issues/21409
3. **#21983 [P1]** browser subagent 在 Wayland 下失败，Linux 桌面用户的阻塞性 bug。
   https://github.com/google-gemini/gemini-cli/issues/21983
4. **#22186 [P1]** 输出 hook 触发 gemini 崩溃，影响输出渲染链路稳定性。
   https://github.com/google-gemini/gemini-cli/issues/22186
5. **#19873 [P2]** 提议利用 Gemini 3 对 bash 的原生亲和性，通过零依赖 OS 沙箱 + 执行后意图路由提升工具使用效率。属于架构级 enhancement。
   https://github.com/google-gemini/gemini-cli/issues/19873
6. **#22745 [P2]** EPIC：评估 AST 感知的文件读取/搜索/代码库映射，目标减少往返轮次，相关议题 #22746 建议从 tilth 或 glyph 入手。
   https://github.com/google-gemini/gemini-cli/issues/22745
7. **#21968 [P2]** 反馈 Gemini 不会主动使用自定义 skills 与 sub-agents，仅在显式指令下才调用，直接影响扩展功能实用性。
   https://github.com/google-gemini/gemini-cli/issues/21968
8. **#22267 [P2]** Browser Agent 完全忽略 `settings.json`（如 `maxTurns`）覆盖，配置系统一致性缺陷。
   https://github.com/google-gemini/gemini-cli/issues/22267
9. **#22672 [P2]** 模型在复杂 git 操作中偶发使用 `git reset` / `--force`，缺少安全替代引导，属破坏性行为治理议题。
   https://github.com/google-gemini/gemini-cli/issues/22672
10. **#24246 [P3]** 工具数超过 128 时出现 400 错误，多工具/扩展场景下的上限问题。
    https://github.com/google-gemini/gemini-cli/issues/24246

## 4. 重要 PR 进展（10 条）

1. **#30110** `fix(core)`：修复 v0.63.0 引入的 Windows PowerShell 命令误判（括号、方法调用、`-NonInteractive` 包装被误识别），size/xl。
   https://github.com/google-gemini/gemini-cli/pull/30110
2. **#30095 [P1, security]** 修复 Windows 上 `git diff` 权限绕过——危险 git 参数可能被当作安全只读操作；抽取共享 Git 安全校验 helper。
   https://github.com/google-gemini/gemini-cli/pull/30095
3. **#30109 [P2]** 对 `grep_search` 输出做体积上限，并提示模型收窄过大搜索（当前 100 条匹配可能产生巨量文本）。
   https://github.com/google-gemini/gemini-cli/pull/30109
4. **#30020** 重试时丢弃失败尝试已流式产出的 tool call，避免前端重复收集 `ToolCallRequest`。
   https://github.com/google-gemini/gemini-cli/pull/30020
5. **#30057 [P2]** 动态模型解析中保留用户显式指定的 `gemini-2.5-flash`，修复 `useLatestFlash` 覆盖显式选择的错误。
   https://github.com/google-gemini/gemini-cli/pull/30057
6. **#30100 [P2]** 扩展发布下载加固：流失败处理、部分文件清理、SSRF/重定向防护与 socket 超时。
   https://github.com/google-gemini/gemini-cli/pull/30100
7. **#29831 [CLOSED]** ripgrep 搜索超时改为上报错误，不再返回被当作"无匹配"的部分结果。
   https://github.com/google-gemini/gemini-cli/pull/29831
8. **#30071** 将 MCP OAuth 的元数据与注册请求改走安全调度器，防 DNS rebinding 类校验绕过。
   https://github.com/google-gemini/gemini-cli/pull/30071
9. **#30094 [P2]** 在 UI 中展示正在执行的子代理工具调用，修复仅显示待审批调用的过滤缺陷（Fixes #22589）。
   https://github.com/google-gemini/gemini-cli/pull/30094
10. **#29960** 遥测 `SERVICE_VERSION` 改用 CLI 版本而非 Node 运行时版本（Fixes #29893），影响企业侧观测数据准确性。
    https://github.com/google-gemini/gemini-cli/pull/29960

## 5. 功能需求趋势

- **子代理（Subagent）体系成熟化**：终止状态语义、轨迹可视化（#22598 `/chat share`）、本地子代理 sprint（#20195）、示例子代理库（#18283）、codebase_investigator 改进（#18282）——是当前最密集的 issue 簇。
- **AST 感知的代码理解**：以 #22745 / #22746 为代表，探索用 AST 工具减少工具调用轮次。
- **原生 Bash 亲和 + 沙箱**：#19873 提出零依赖 OS 沙箱，发挥模型原生的 POSIX 工具链能力。
- **浏览器代理（browser_agent）健壮性**：会话接管、锁恢复（#22232）、Wayland 兼容（#21983）、配置覆盖（#22267）。
- **安全与破坏性行为治理**：#22672 呼吁约束 `git reset --force` 一类危险操作；安全类 PR 占比明显上升。

## 6. 开发者关注点

- **挂起与假成功**：generalist agent 无限挂起、MAX_TURNS 后误报成功，是最影响信任的问题；多条 P1 issue 标注 `status/need-retesting`，说明修复在验证中。
- **配置一致性**：`settings.json` 对 Browser Agent 无效、显式模型被动态解析覆盖，反映配置优先级规则不清晰。
- **工具规模上限**：工具数 >128 触发 400 错误、`grep_search` 输出过大，工具生态扩张后需要更精细的治理。
- **Windows 平台体验**：PowerShell 误判与 git 权限绕过两项修复同日出现，Windows 用户是近期回归问题的集中受害者。
- **可观测性缺口**：子代理轨迹难以查看/分享、遥测版本号错误，说明"看得见才能调优"的需求正在被正视。

---
*数据来源：github.com/google-gemini/gemini-cli，统计窗口 2026-11-02 至 2026-11-03。*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报（2026-11-03）

## 今日速览

今日共发布 4 个连续补丁版本（v1.0.106-3 至 -6），核心是 `/settings` 统一仪表盘与全局搜索、终端程序状态上报（OSC 7501）、以及 ACP 模式下 `includeCoAuthoredBy: false` 的修复。社区侧，企业账号"Managed account policy"刷新失败问题集中爆发（#5109、#5130、#5342），成为当日最高频反馈；ACP 模式相关缺陷（#5115、#5133、#3942）也成批关闭，显示该集成路径正在集中收口。

## 版本发布

过去 24 小时共 4 个版本：

- **v1.0.106-6**：`/settings` 对所有用户开放统一仪表盘，并在设置与本地资源间加入全局搜索；交互式 CLI 向支持的终端上报程序状态（含需要关注时）。
  https://github.com/github/copilot-cli/releases
- **v1.0.106-5**：修复 ACP 模式（`copilot --acp`）下 `includeCoAuthoredBy: false` 被忽略、仍添加 Co-authored-by 尾注的问题；定向 `/settings` 命令立即显示所选设置。
- **v1.0.106-4**：修复空会话在会话选择器中闪现；修复括号、引号、反引号内的 `@file` 提及被静默忽略、以及在 `!` shell 命令中无法展开的问题。
- **v1.0.106-3**：新增可选启用的会话管理工具与本地会话 `@mentions`；托管账户策略刷新警告加入 Policy Helper 结论并在策略解析后清除。

## 社区热点 Issues

1. **#1857（OPEN，15 评论，👍33）**：无法取消已入队消息（`Ctrl+Q`/`Ctrl+Enter`），agent 忙碌或 `/compact` 期间消息一旦入队不可撤回。👍 数居首，属于高频交互体验痛点。
   https://github.com/github/copilot-cli/issues/1857

2. **#4438（OPEN，13 评论，👍18）**：`disable-model-invocation: true` 使技能完全不可达，而非仅禁止模型自动调用——`skill list` 可见但显式调用返回 "Skill not found"，属技能系统语义缺陷。
   https://github.com/github/copilot-cli/issues/4438

3. **#5105（CLOSED，7 评论）**：macOS 沙箱在允许本地网络的情况下仍阻断 Gradle daemon 连接，影响真实构建工作流。
   https://github.com/github/copilot-cli/issues/5105

4. **#1148（CLOSED，7 评论，👍9）**：Copilot CLI 编辑文件时把所有 LF 行尾改为 CRLF，污染 Windows 用户的版本差异；长期存在后关闭，值得关注。
   https://github.com/github/copilot-cli/issues/1148

5. **#1257（OPEN，6 评论，👍7）**：Termux/Android 支持请求，移动端运行 CLI 的需求持续存在。
   https://github.com/github/copilot-cli/issues/1257

6. **#5112（OPEN，5 评论，👍13）**：请求支持 OSC 7501 程序状态协议上报 agent 状态——与 v1.0.106-6 新发布的状态上报功能直接对应，可视为需求已被响应。
   https://github.com/github/copilot-cli/issues/5112

7. **#5109（OPEN，4 评论）**：企业环境中 CLI 基本不可用，启动即报 "Managed account policy could not be refreshed"。
   https://github.com/github/copilot-cli/issues/5109

8. **#5342（OPEN，1 评论，当日创建）**：v1.0.105 macOS 托管设置拉取每次启动失败，报 `model: Expected string, received object`，`/login` 仅当前终端临时生效——企业配置解析的类型错误。
   https://github.com/github/copilot-cli/issues/5342

9. **#5335（OPEN，1 评论）**：HTTP 422 网络安全风险标记反复拦截本地不稳定测试的调试请求，影响合法开发场景。
   https://github.com/github/copilot-cli/issues/5335

10. **#5206（CLOSED，1 评论）**：恢复的会话中需显式批准的工具操作被静默拒绝（"could not request permission from user"），即使已启用 yolo 模式，属权限与会话状态交互缺陷。
    https://github.com/github/copilot-cli/issues/5206

## 重要 PR 进展

过去 24 小时内仅有 **1 条** PR 更新，因此无法凑足 10 条；以下列出唯一在列项，不做补充臆测：

1. **#5339（OPEN，[Feature]）**：新增只读 agent 监控 TUI（Graph + Timeline），位于 `tools/agent-monitor`，面向单个显式选定的本地 CLI 会话，沿用 Copilot CLI 的界面语言，用于回答对应功能请求中的可视化问题。作者 ychu-msft，当日创建。
   https://github.com/github/copilot-cli/pull/5339

## 功能需求趋势

- **终端交互可观测性**：#5112 的 OSC 7501 状态上报已随 v1.0.106-6 落地，#5339 的 agent 监控 TUI 进一步表明社区希望"看清 agent 在做什么"。
- **输入与会话控制**：#1857 入队消息撤回、#5171 Windows NumLock 关闭时小键盘与 Delete 键失效、#4789 Ctrl+C 复制文本误触发对话框取消，指向键盘输入与确认流程的精细控制。
- **会话生命周期管理**：#4502 请求支持取消归档（误点 Done 即永久移除会话），与 v1.0.106-3 的可选会话管理工具方向一致。
- **技能与插件扩展模型**：#4438 技能可达性语义、#5099 请求"仅展示层"的 assistant 消息 hook（对用户显示真实值、模型见脱敏 token），反映对技能/钩子精细控制的诉求。
- **企业环境可用性与策略治理**：多条 managed policy 相关 Issue 表明企业策略刷新机制是当前最大稳定性缺口。

## 开发者关注点

- **企业托管策略刷新失败是首要痛点**：#5109、#5130、#5342 均指向 "Managed account policy could not be refreshed"，且 #5342 暴露了 `model` 字段类型解析错误（期望 string、收到 object），跨 macOS / 企业 Windows 多平台复现。v1.0.106-3 已改进该警告的信息量与清除逻辑，但根因问题仍开放。
- **ACP 模式一致性**：`includeCoAuthoredBy` 已在 v1.0.106-5 修复，#5115（`/rename` 报成功但不生效）与 #3942（`--acp` 与 `--agent` 不兼容）已关闭，但 #5115 描述的"命令被 advertise 却无效果"提示 ACP 命令契约仍需更严格的验证。
- **沙箱与权限的误伤**：macOS 沙箱阻断 Gradle daemon（#5105）、Windows 托管设备 preflight `CreateProcessW` 失败（#5285）、恢复会话中权限请求被静默拒绝（#5206），说明沙箱/权限层在真实构建与恢复场景下的兼容性仍需打磨。
- **文件修改的副作用**：#1148 的 LF→CRLF 行尾污染虽已关闭，但对使用版本控制的团队影响明显，值得在回归测试中固化。
- **安全过滤的误报**：#5335 显示网络安全风险标记会阻塞本地测试调试，开发者需要在安全策略与日常调试效率之间取得平衡。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报（2026-11-03）

## 1. 今日速览

今天 OpenCode 无新版本发布，社区讨论仍集中在免费额度（free tier）问题（#59387 累计 245 条评论）与 v2.2.x 的稳定性故障（连接重置、请求卡在 "Working"、证书校验失败）。代码侧有多项针对会话压缩模型作用域、TUI 使用体验的修复与功能 PR 提交，其中 #61379 直接对应今天新报的压缩逻辑缺陷 #61372。

## 2. 版本发布

过去 24 小时内无新 Release。

## 3. 社区热点 Issues

1. **#59387 免费额度问题集中反馈帖（245 评论，👍17）**  
   官方设立的 free tier 问题主帖，汇集 "Free usage exceeded / limit reached" 等提示。评论量极高，说明免费额度策略仍是当前用户争议焦点。  
   https://github.com/anomalyco/opencode/issues/59387

2. **#48882 恢复带常驻左侧栏的旧版 UI（35 评论，👍44）**  
   针对侧栏改版（#20242）的功能请求，是本期点赞最高的 Issue，显示界面改版存在明显用户反弹。  
   https://github.com/anomalyco/opencode/issues/48882

3. **#61304 Openbotjr 误关闭有回复的 Issue（9 评论）**  
   用户反映自动机器人以"未收到回复"为由关闭已有回应的 Issue，且无法 @ 该机器人、也读不到评论。涉及社区流程信任问题。  
   https://github.com/anomalyco/opencode/issues/61304

4. **#60636 桌面端 CONNRESET（9 评论）**  
   桌面应用中 socket 连接意外关闭，与 #60620 症状一致，指向同一类连接稳定性缺陷。  
   https://github.com/anomalyco/opencode/issues/60636

5. **#54786 非法 opencode.json 被静默忽略（8 评论，已复现）**  
   配置写错时启动无任何提示，对新用户学习配置造成障碍；已被标记 reproduced。  
   https://github.com/anomalyco/opencode/issues/54786

6. **#47902 V2 工具调用参数损坏、schema 非法调用仍可执行（7 评论）**  
   参数中出现序列化残留标记，且不合 schema 的调用仍被执行，属于影响正确性与安全性的核心缺陷。  
   https://github.com/anomalyco/opencode/issues/47902

7. **#60330 v2.2.1 在 OpenCode GO 中长时间卡在 "Working"（6 评论）**  
   简单消息需 15 分钟才有响应，影响可用性，与本期多条"不可用"报告相互印证。  
   https://github.com/anomalyco/opencode/issues/60330

8. **#60251 服务重启后既有会话丢失重启前历史（5 评论）**  
   会话仍出现在 `session list` 中但早期历史不可见，属于数据持久化问题。  
   https://github.com/anomalyco/opencode/issues/60251

9. **#60840 充值后仍提示余额不足（5 评论）**  
   无头服务器 + Windows 客户端组合下计费状态异常，涉及计费链路可靠性。  
   https://github.com/anomalyco/opencode/issues/60840

10. **#61372 压缩逻辑跨模型复用测量提示（3 评论，已复现）**  
    今日报出并已复现：`estimatePrompt` 仅按 provider 匹配测量锚点，而同文件 `measuredPrompt` 还要求其他条件，存在不一致。已有对应修复 PR。  
    https://github.com/anomalyco/opencode/issues/61372

补：#58437（大历史会话阻塞同服务器其它会话，7 评论）与 #60915（ChatGPT Business OAuth 登录失败，7 评论）均已在今日关闭，可作为已处理项追踪。

## 4. 重要 PR 进展

1. **#61379 fix(core): 将压缩测量限定到当前模型**  
   只复用相同 provider、model、variant、agent 的用量数据，关闭 #61372。  
   https://github.com/anomalyco/opencode/pull/61379

2. **#61461 feat(stats): 在 Cloudflare Workflows 上运行 stats 同步**  
   将公开模型统计同步从常驻 ECS Fargate 迁移到 Cron Worker 触发的 Cloudflare Workflow，站点数据不变。  
   https://github.com/anomalyco/opencode/pull/61461

3. **#55261 feat(tui): 新增 prompt 历史作用域设置**  
   增加可选 `prompt.history_scope`，默认 `global` 保持现有上下键召回行为。  
   https://github.com/anomalyco/opencode/pull/55261

4. **#61460 feat(tui): 发送时保持滚动位置**  
   新增 `session.submit_scroll` 设置，避免发送 prompt 后丢失阅读位置。  
   https://github.com/anomalyco/opencode/pull/61460

5. **#60365 fix(tui): 提问到达时保持对话框焦点**  
   修复 `FormPrompt` 导致的焦点被抢占问题（#52767）。  
   https://github.com/anomalyco/opencode/pull/60365

6. **#61455 fix(tui): 不再展示仅桌面端可用的发布亮点**  
   修复 TUI 的 v2.2.5 更新说明中宣传桌面专属 worktree/shell 功能的问题（#61237）。  
   https://github.com/anomalyco/opencode/pull/61455

7. **#60923 feat(core): 新增"本次会话允许"权限答复（已关闭）**  
   在 "Allow once" 与 "Always allow" 之间增加 **Allow for session**，仅对当前会话生效、不写入项目配置。  
   https://github.com/anomalyco/opencode/pull/60923

8. **#58672 fix(core): 在重复订阅抖动中保持 watcher 订阅存活**  
   修复 `Watcher.Service` 在最后一个消费者离开时立即关闭原生订阅、Windows 上频繁停止/启动的问题（#47505）。  
   https://github.com/anomalyco/opencode/pull/58672

9. **#60333 fix(app): 文件预览将 Markdown frontmatter 渲染为属性列表**  
   改善侧栏文件预览中 frontmatter 的呈现（#51564）。  
   https://github.com/anomalyco/opencode/pull/60333

10. **#61459 docs(console): 新增 Crouton Alpha Free**  
    补充免费档模型的 endpoint、价格、免费说明及国家限制与隐私例外，并在数据页标记为 stealth 模型。  
    https://github.com/anomalyco/opencode/pull/61459

其他：#61444 调整 V2 字重 token（400→440、500→530）；#61454 补齐土耳其语翻译；#61428 为 macOS DMG 增加自定义背景。

## 5. 功能需求趋势

- **UI/交互可配置性**：恢复旧版侧栏（#48882）、prompt 历史作用域（#55261）、发送时保持滚动（#61460），显示社区偏好"可选而非强制"的界面演进。
- **Agent 能力扩展**：屏幕视觉（截图）与浏览器控制工具（#48377），属 agent 工具链延伸方向。
- **上下文与成本管理**：#48418 反映上下文占用增长过快，期望自适应压缩；#60626 报告单次请求费用异常增长（疑似重复请求），与压缩/计量问题同属成本主题。
- **配置与错误可观测性**：非法配置静默忽略（#54786）说明用户要求更明确的校验反馈。

## 6. 开发者关注点

- **稳定性优先于新功能**：连接重置（#60636/#60620）、卡在 "Working"（#60330）、证书失败（#60271）、桌面端不可用（#60739）等报告密集出现，v2.2.1 桌面端是重灾区。
- **计费与免费额度透明度**：#59387 主帖、#60840 充值无效、#60626 费用异常，叠加 OAuth 企业账号不可用（#60915），计费链路是当前信任风险最高的环节。
- **核心正确性**：工具调用参数损坏与 schema 校验缺失（#47902）、跨模型压缩测量（#61372）、会话历史持久化（#60251）均属影响数据可信度的底层问题。
- **社区流程体验**：自动机器人误关 Issue（#61304）引发对 triage 机制的明确不满，建议关注其改进。

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报 · 2026-11-03

> 数据来源：github.com/badlogic/pi-mono（Issues 与 PR 链接均指向 earendil-works/pi 仓库）

## 1. 今日速览

今日无新版本发布，社区活跃度集中在**会话与传输层缺陷修复**：OpenAI/ChatGPT OAuth 403 与 GPT-6.1 Sol 上下文窗口报小两个问题持续发酵，MCP SSE、Codex SSE 重试等资源泄漏类修复密集合并。同时，Nix 打包因新增 `pi-schema` 运行依赖而失效，已有社区 PR 跟进；schema `$id` 双重解析导致工具参数校验失败的问题 Issue 与修复 PR 同日出现。

## 2. 版本发布

过去 24 小时无新 Release。

## 3. 社区热点 Issues（10 条）

1. **[#9656 [bug] Windows + Zellij 下滚轮滚动提示历史而非对话记录](https://github.com/earendil-works/pi/issues/9656)**（13 评论，👍5）
   全屏模式在 Windows → Alacritty → Zellij 链路上滚轮行为错误，直接终端下无此问题。评论数最高、点赞最多，说明终端复用器场景用户基数不小，属交互体验高优先级问题。

2. **[#10605 [bug] ChatGPT/OpenAI OAuth 403](https://github.com/earendil-works/pi/issues/10605)**（12 评论）
   报错 “The ChatGPT user is not eligible for subscription sharing”，重新登出/登录无效。认证链路阻断直接影响 Plus 订阅用户使用，是接入层面的高影响缺陷。

3. **[#11021 openai: ChatGPT 登录仍对 GPT-6.1 Sol 使用 272K 上下文，而账户目录为 500K](https://github.com/earendil-works/pi/issues/11021)**（7 评论，👍7）
   模型目录与 Pi 内部上下文窗口不一致，导致可用上下文被低估。点赞数高，反映用户对模型能力未被充分利用的不满。

4. **[#10470 RPC 的 new_session/switch_session/fork/clone 触发两次 session_start](https://github.com/earendil-works/pi/issues/10470)**（8 评论）
   RPC 模式下生命周期事件重复触发，会干扰依赖该事件的集成方与自动化脚本，是宿主/IDE 集成类用户的核心痛点。

5. **[#11697 [fix-available] 相对 `$id` 被解析两次，合法工具参数校验失败](https://github.com/earendil-works/pi/issues/11697)**（4 评论）
   工具参数 schema 使用相对 `$id` + 自引用 `$ref` 时，工具直接无法运行。已附修复，可快速落地。

6. **[#10781 压缩摘要忽略 transport 设置（openai-codex 始终 WebSocket 优先）](https://github.com/earendil-works/pi/issues/10781)**（3 评论）
   即使配置 `"transport": "sse"`，自动与 `/compact` 摘要仍走 WebSocket。体现配置一致性缺失，对企业网络环境（WebSocket 受限）用户影响明显。

7. **[#10697 流式传输失败只暴露 `terminated`，`error.cause` 被丢弃](https://github.com/earendil-works/pi/issues/10697)**（4 评论）
   错误信息丢失真实原因，显著增加排障成本，属可观测性问题。

8. **[#11682 [prio:p0, fix-available] Nix 包无法求值：`pi-schema` 未加入 packageSourceOverrides](https://github.com/earendil-works/pi/issues/11682)**（2 评论，👍4）
   `nix build` 因 `attribute 'integrity' missing` 失败，由 `pi-schema` 成为 coding-agent 运行时依赖引起。被标为 p0，Nix 用户构建路径完全中断，已有配套 PR。

9. **[#11676 pi-durable: `Harness.close()` 未释放 pi-ai provider 会话资源](https://github.com/earendil-works/pi/issues/11676)**（2 评论）
   Codex 响应后仍保留 WebSocket 与五分钟空闲定时器，长驻 Node 进程存在资源泄漏，属服务端/嵌入场景问题。

10. **[#11691 扩展加载器自动导入 `.pi/extensions/` 下 `*.test.ts`，`process.exit(0)` 杀死宿主进程](https://github.com/earendil-works/pi/issues/11691)**（2 评论，已关闭）
    自执行测试文件导致 pi-web 服务两次崩溃。虽是易修复问题，但暴露扩展加载策略过于宽泛，值得关注设计改进。

## 4. 重要 PR 进展（10 条）

1. **[#11726 fix(schema): 解析引用时仅应用一次相对根 `$id`](https://github.com/earendil-works/pi/pull/11726)**（OPEN）
   修复 #11697：根 `$id` 带目录时本地 `$ref` 无法解析，工具参数被误拒。

2. **[#11735 fix(mcp): 取消超过消息大小限制的 SSE 响应流](https://github.com/earendil-works/pi/pull/11735)**（CLOSED）
   原 `finally` 仅释放读锁，不取消响应体，导致连接被心跳持续占用。

3. **[#11725 fix(ai): Codex SSE 退避后移除 abort 监听器](https://github.com/earendil-works/pi/pull/11725)**（CLOSED）
   修复 `sleep()` 每次重试残留监听器导致的信号监听器累积。

4. **[#11724 fix(mcp): 服务器退出后 stdio 关闭时清理子进程](https://github.com/earendil-works/pi/pull/11724)**（CLOSED）
   POSIX 下主进程先退出而子进程持有 stdout/stderr 时，避免传输层清理不彻底。

5. **[#11685 fix(nix): 在 Nix 包中从 checkout 打包 pi-schema](https://github.com/earendil-works/pi/pull/11685)**（OPEN）
   针对 #11682 的构建修复，恢复 `nix build .#pi` 可用性。

6. **[#11736 fix(coding-agent): 启动基准测试后释放会话运行时](https://github.com/earendil-works/pi/pull/11736)**（OPEN）
   `PI_STARTUP_BENCHMARK=1` 场景下扩展收不到 `session_shutdown`，定时器/套接字可能残留在基准测试后不清理。

7. **[#11696 feat(storage): 复制（实验性会话同步）](https://github.com/earendil-works/pi/pull/11696)**（OPEN）
   新增 `@earendil-works/pi-durable/sync`，设备通过远端上传/拉取会话提交（基于 outbox 与 `applyBatch`），涉及多设备并写冲突，属新能力方向。

8. **[#11545 Anthropic message threads](https://github.com/earendil-works/pi/pull/11545)**（CLOSED）
   在设置 session id 时启用服务端会话，仅发送新增消息而非全量历史，可降低每轮 token 消耗。

9. **[#11733 fix(tui): 在终端图片上方渲染覆盖层](https://github.com/earendil-works/pi/pull/11733)**（CLOSED）
   覆盖层与 Kitty/iTerm2 图片锚点相交时抑制并恢复图片排版，改善全屏 UI 下图片场景的渲染正确性。

10. **[#11711 fix(coding-agent): 仅当 pi update 实际检查过包时才报告“已是最新”](https://github.com/earendil-works/pi/pull/11711)**（CLOSED）
    修复 #11707：npm 未实际升级或包未被检查时错误提示“Packages are already up to date”。

> 另注：PR #11739（TUI 不再用可复制空格填充未着色行）与 #11712（OpenRouter 输入 token 高估时预留余量）也已合并，分别改善复制体验与长输出模型的路由失败问题。

## 5. 功能需求趋势

- **多设备/持久化会话**：PR #11696 与 Issue #11683（在截止时间前唤醒休眠任务）指向 pi-durable 的持久化与同步能力扩展。
- **扩展系统能力**：Issue #10264 请求在事件钩子（如 `before_agent_start`、`agent_settled`）中调用已注册工具；Issue #11738 要求对排队消息中的图片做归一化，反映扩展与多模态输入处理需求上升。
- **多模型/提供商适配**：GPT-6.1 Sol 上下文、Anthropic message threads、OpenRouter token 计数差异，说明对各家 API 语义差异的适配是持续主线。
- **终端 UI 与复用器兼容**：Zellij、herdr、Ghostty 等终端环境相关的滚动、主题跟随、图片渲染问题集中出现。
- **资源生命周期管理**：Harness、MCP 子进程、SSE 流、abort 监听器等多处泄漏类问题，表明嵌入与长驻进程场景正被更多用户使用。

## 6. 开发者关注点

- **认证与服务端资格判断**：OAuth 403 与上下文窗口不一致表明 Pi 对上游账户能力目录的同步不完整，建议以账户实时模型目录为准。
- **错误可观测性**：#10697 的 `terminated` 抹掉 `error.cause` 是典型痛点，开发者需要可诊断的传输错误链。
- **配置一致性**：`transport` 设置在压缩摘要路径被忽略（#10781），配置项需覆盖所有请求路径。
- **构建与分发稳定性**：新增内部包（`pi-schema`）导致 Nix 求值失败，提示依赖图变更需同步各分发渠道。
- **扩展加载安全性**：自动导入目录下所有 TS/JS 文件会执行测试代码并杀死宿主，建议限制加载规则。
- **事件生命周期语义**：RPC 重复 `session_start` 与基准测试不触发 `session_shutdown`，事件契约需与集成方对齐。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报（2026-11-03）

## 今日速览

今日发布 v0.26.6，Web Shell 新增侧边栏活动视图，可展示审批、输入、错误状态与未读提示；配套 TypeScript SDK 升至 v0.1.27，并内嵌 CLI 0.26.6。CI 稳定性仍是主要焦点：E2E `sandbox:docker` 环节在冷启动重建镜像时反复触及 60 分钟超时，新增 P1 议题；另有多个 CI 自动修复议题仍长期开放。Web Shell 的会话性能与会话中断后的消息丢失问题集中出现，既有 Issue 得到修复，也有新 PR 跟进。

## 版本发布

**v0.26.6**
- Web Shell 新增侧边栏活动视图，面向受信任工作区会话，展示审批、输入、错误状态与未读提示。无已知破坏性变更。
- 完整变更列表见仓库 Release 页面。

**sdk-typescript v0.1.27**
- 内嵌 CLI 版本 0.26.6（基于与 SDK 相同的分支、引用从源码构建）。
- 同批次还发布 v0.26.5-nightly.20261102.0441faff21 夜间版本。

## 社区热点 Issues

1. **#16214 [P1] E2E `sandbox:docker` 环节在冷重建镜像的 pool 主机上触及 60 分钟上限**（今日创建，5 评论）
   main 分支上的 E2E 约一半被标记为 cancelled，原因始终是同一 job 超时。这是当前影响 CI 可靠性的核心问题。
   https://github.com/QwenLM/qwen-code/issues/16214

2. **#14746 [P1][已关闭] 仓库 `.qwen/settings.json` 中的 hooks 启动即执行且无审批（folder trust 默认关闭）**
   安全类问题，默认配置下克隆仓库的 hooks 在启动时可无提示执行。今日关闭，值得关注最终修复方式。
   https://github.com/QwenLM/qwen-code/issues/14746

3. **#15799 [P1] 会话异常结束后，已完成的工具调用被报告为“未记录…按失败重试”**
   终端关闭（SIGHUP）打断并行调用后，恢复会话时已完成调用被误报失败。影响长任务可靠性。
   https://github.com/QwenLM/qwen-code/issues/15799

4. **#16169 [P2] 工具执行期间排队的消息在 SIGHUP 时被静默丢失**
   页脚显示 `⏳ 1 queued`，终端关闭后消息消失且不可恢复。与 #15799 同属 SIGHUP 场景下的会话健壮性问题。
   https://github.com/QwenLM/qwen-code/issues/16169

5. **#16171 [P1][已关闭] Web Shell 会话打开极慢：实时回放保留 edit 工具结果的完整文件内容**
   部分会话打开耗时异常，daemon 内存与回放数据量相关。已关闭，反映回放存储策略需要优化。
   https://github.com/QwenLM/qwen-code/issues/16171

6. **#16119 [P2][已关闭] Web Shell 后台 shell 结果要等本轮结束才送达**
   通知缺少 `sourceTurnId`，导致结果无法在轮次中到达，只能作为新轮次出现。影响后台自动化体验。
   https://github.com/QwenLM/qwen-code/issues/16119

7. **#16063 [P2][已关闭] VS Code 插件意外打开内置 `generated-ui/main.js`**
   Generated UI MCP server 被以 Electron GUI 方式启动，而不是 Node 方式，导致编辑器自动弹出文件。IDE 集成类典型缺陷。
   https://github.com/QwenLM/qwen-code/issues/16063

8. **#16006 [P2][已关闭] 允许托管安装从设置中关闭 models.dev 目录刷新并尊重隐私选择**
   自 #11959（v0.25.0）起每次 Config 初始化都会触发目录下载。涉及企业托管与数据隐私。
   https://github.com/QwenLM/qwen-code/issues/16006

9. **#16147 [P2][已关闭] Managed Runtime worker 每次 `run_shell_command` 多耗约 166 MiB/沙箱**
   源于 `shouldRemindToRecordArtifact()` 检查，同时产生对未声明工具的提醒。性能与内存类代表问题。
   https://github.com/QwenLM/qwen-code/issues/16147

10. **#16158 [P3][已关闭] OpenRouter `:exacto` 模型 id 回退到默认上下文窗口**
    变体标签在查找模型限额时丢失，导致回退为 200K 窗口、32K 输出。影响第三方模型接入准确性。
    https://github.com/QwenLM/qwen-code/issues/16158

补充关注（长期未闭环）：**#14724**（Managed Agent gate CI 失败，161 评论）、**#13078**（每日依赖 CVE 审计失败，40 评论）、**#15173**（E2E Tests CI 失败，37 评论）——均为自动机器人议题，持续更新中。
https://github.com/QwenLM/qwen-code/issues/14724 ｜ https://github.com/QwenLM/qwen-code/issues/13078 ｜ https://github.com/QwenLM/qwen-code/issues/15173

## 重要 PR 进展

1. **#16221 perf(managed-agent): 将 harness 准入检查移出租户锁**（doudouOUC）
   Runtime 绑定仓库中七个方法的 harness 检查（普通准入、恢复、清理、Hook 准入）不再获取租户放置保护，仅读取 Session 行。
   https://github.com/QwenLM/qwen-code/pull/16221

2. **#16223 perf(managed-agent): 将轮次准入移出租户锁**（doudouOUC）
   轮次提交准入不再获取租户保护；存储迁移的 prepare 步骤改为在锁定 fence 行后检查已提交数据的空闲状态。与 #16225 构成堆叠系列。
   https://github.com/QwenLM/qwen-code/pull/16223

3. **#16225 perf(managed-agent): 将 16 个 Session 命令移出租户锁**（doudouOUC）
   堆叠于 #16223 之上，rename 等 Session 命令不再获取租户放置保护，建议只审最后两个提交。
   https://github.com/QwenLM/qwen-code/pull/16225

4. **#16218 fix(ci): 探测 apt 镜像以支持大陆 E2E 主机构建沙箱镜像**（yiliang114）
   构建前测量 runner 拉取 Debian 镜像的速度，仅在默认镜像过慢时切换到国内镜像。直接回应 #16214 所涉沙箱构建瓶颈。
   https://github.com/QwenLM/qwen-code/pull/16218

5. **#16211 fix(ci): 在无 Xvfb 的 rpm root 上以无头方式运行桌面冒烟测试**（yiliang114）
   RHEL 10 已移除 `xorg-x11-server-Xvfb`；此 PR 将 Xvfb 限定于 Fedora 44 环节，并为 RHEL 10 提供真实无头显示。
   https://github.com/QwenLM/qwen-code/pull/16211

6. **#16226 feat(web-shell): 在 channel 事件中链接 GitHub PR/Issue**（wenshao）
   channel 事件页的 target 列可点击，每行 `owner/repo#N` 在新标签页打开对应 GitHub 页面。
   https://github.com/QwenLM/qwen-code/pull/16226

7. **#16149 feat(web-shell): 在 channel 编辑器中编辑 GitHub 仓库设置**（已关闭）
   三项决定 GitHub Channel 行为的设置可不再手改 daemon 主机的 `settings.json`：哪些账号可在指定仓库发起任务等。
   https://github.com/QwenLM/qwen-code/pull/16149

8. **#16116 fix(managed-agent): 验证 A3 重写命令恢复时不重跑 Hook**（wenshao）
   补全 G3 Step 3 恢复矩阵中剩余部分：证明被 Hook 重写的命令输入被视为新的独立审批步骤，而非继承原审批。
   https://github.com/QwenLM/qwen-code/pull/16116

9. **#16175 fix(managed-agent): 在服务器实际发布 Flyway 脚本的模块 jar 中查找**（wenshao）
   修复升级命令 `check` 的脚本比对逻辑，改为在模块嵌套 jar 中定位脚本。
   https://github.com/QwenLM/qwen-code/pull/16175

10. **#16021 fix(web-shell): 升级 `@datafe-open/markdown-chart` 至 0.4.1**
    web-shell 的 markdown-chart 系列依赖从 `^0.1.12` 升至 `^0.4.1`。
    https://github.com/QwenLM/qwen-code/pull/16021

补充：**#16224** 为 ACP 一致性测试台设置独立 scratch 运行目录，避免运行时状态写入被比较的工作区。
https://github.com/QwenLM/qwen-code/pull/16224

## 功能需求趋势

- **Web Shell 成熟化**：侧边栏活动视图（v0.26.6）、channel 设置编辑、事件链接跳转、后台 shell 实时通知——Web Shell 正从可用走向可运营。
- **IDE 与桌面集成**：#16063 暴露 VS Code 插件 MCP 启动方式问题；#16209 提出在 Qwen Code Desktop 与 `qwen serve` 中内置零配置 Web UI 预览/检查器面板，替代依赖外部 Chrome。属于 `roadmap/platform-distribution` 方向的讨论议题。
  https://github.com/QwenLM/qwen-code/issues/16209
- **会话管理与中断恢复**：SIGHUP 下排队消息丢失、已完成工具调用被误判失败、Web Shell 回放缓慢，共同指向会话状态持久化这一高频需求。
- **性能与资源占用**：Managed Runtime 租户锁成为连续三个 PR 的优化目标，另有沙箱内存开销与回放数据量议题。
- **企业托管与隐私控制**：models.dev 目录刷新开关、folder trust 与 hooks 审批，反映托管安装场景对可控性和安全默认值的诉求。
- **第三方模型兼容**：OpenRouter 变体 id 的上下文窗口回退问题。
- **CI/发布基建**：沙箱镜像发布失败（#16039）、E2E 超时、CVE 审计失败，占议题量显著比例。

## 开发者关注点

1. **CI 可信度**：E2E docker leg 超时与“no test identified”类自动议题（#14724、#15173）长期开放且评论量大，开发者需要能区分真实回归与基础设施噪声的信号。
2. **异常终止的会话健壮性**：SIGHUP 场景下消息丢失与工具调用误报失败，是两个 P1 级用户可见问题，直接影响对长任务可靠性的信任。
3. **安全默认值**：#14746 表明默认关闭 folder trust 会让克隆仓库的 hooks 无审批执行，“默认安全”配置受到实质质疑。
4. **Web Shell 性能**：会话打开延迟与回放存储体积强相关，是当前 Web Shell 体验的主要瓶颈。
5. **托管部署的可配置性**：企业环境要求能从系统设置层面关闭外部目录下载并尊重隐私选择。
6. **自动修复流程的吞吐**：多个 `autofix/needs-human` PR（#15060、#15274、#15286）长期挂起，说明自动化修复后的人工评审是当前瓶颈环节。

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI 社区动态日报（2026-11-03）

> 数据来源：github.com/Hmbown/DeepSeek-TUI（仓库内实际链接指向 codewhale-hq/Codewhale）

## 1. 今日速览

今日无新版本发布。Issue 侧以 0.10.x 系列的质量问题为主，新增两个当日提交的待分诊问题——ChatGPT 认证校验失败（#7203）与长会话上下文折叠需求（#7206），另有一条关于自定义 openai-compatible 提供方输出预算被错误限制的 Bug（#7179）持续发酵。PR 侧则是一波密集的 TUI 渲染与路径处理修复，主要由 Lstarsky0 推动，多数已合入关闭。

## 2. 版本发布

过去 24 小时无新 Release。

## 3. 社区热点 Issues

1. **#5316 [EPIC-005] CodeWhale TUI Crate 拆分总览**（OPEN，35 条评论）
   长期跟踪的架构拆分史诗，11-02 的验收记录显示拆分有了实质进展，原有的 full50k/10k 目标已被创始人粗粒度方向取代。评论量居首，是理解项目重构节奏的核心线索。
   https://codewhale-hq/Codewhale/issues/5316

2. **#7179 自定义 openai-compatible 提供方输出预算被钳制**（OPEN，2 条评论）
   服务端接受 262K 上下文，TUI 却按托管目录上限（qwen3.8-27b 为 32K）钳制，导致推理模型返回空终止。直接影响自建/自托管模型用户，属于高优先级可用性缺陷。
   https://codewhale-hq/Codewhale/issues/7179

3. **#7203 `auth chatgpt` 浏览器登录成功后校验失败**（OPEN，新提交，1 条评论）
   0.10.2 / Windows 环境下报 “ChatGPT token signature or identity claims failed verification”，且 `auth status --provider openai-codex` 状态不一致。登录链路断裂会直接阻断新用户上手。
   https://codewhale-hq/Codewhale/issues/7203

4. **#7206 长会话的增量、缓存稳定上下文折叠**（OPEN，新提交，1 条评论）
   请求可选的增量式上下文折叠机制，且保持缓存稳定。面向长会话的成本与命中率优化，属于性能类增强。
   https://codewhale-hq/Codewhale/issues/7206

5. **#5915 Fleet 模型：workers 视图内保存角色 + 常驻操作员模型列表**（OPEN，4 条评论）
   短名单存储与按需名册已具备，但 workers 视图的保存动作和 operator-awareness 契约尚未完成。多智能体/子代理工作流的关键拼图。
   https://codewhale-hq/Codewhale/issues/5915

6. **#6303 Computer Use：网站应用、市场插件与源码检出统一安装路径**（CLOSED，1 条评论）
   自 0.8.x 时代提出，0.10.1 复检时为“部分完成”，今日关闭。安装体验收敛的里程碑，但残留的干净机器验收项值得留意。
   https://codewhale-hq/Codewhale/issues/6303

> 说明：本期过去 24 小时内更新的 Issue 共 6 条，以上为全部条目，未凑满 10 条。

## 4. 重要 PR 进展

1. **#7205 命令面板插入命令时保留草稿**（OPEN）
   从面板选择带参命令（如 `/rename`）会覆盖输入框内容，且历史搜索无法找回。修复输入内容丢失。
   https://codewhale-hq/Codewhale/pull/7205

2. **#7204 修复 #7138 合并后的 CI 资格遗留问题**（OPEN）
   #7138 在 CI 资格未完成时即被合并，本 PR 承接剩余修复，属流程性跟进。
   https://codewhale-hq/Codewhale/pull/7204

3. **#7207 阻止 home 工作区拒绝自身的 junction 状态目录**（OPEN）
   在用户主目录启动会话时，四处调用点错误地施加工作区限制；home 并非仓库，当前会直接失败。
   https://codewhale-hq/Codewhale/pull/7207

4. **#7198 非 ASCII 文本参与数学渲染时不再崩溃 TUI**（CLOSED）
   LaTeX 环境内出现非 ASCII 字符会使 TUI 崩溃，`--continue` 重开同一会话会复现。影响 release 构建与 0.10.2。
   https://codewhale-hq/Codewhale/pull/7198

5. **#7201 保留数学中的转义字符与命名分隔符**（CLOSED）
   `\{`、`\%`、`\&` 等转义被静默吞掉，百分比与集合显示错误。
   https://codewhale-hq/Codewhale/pull/7201

6. **#7196 不再把金额当作行内数学**（CLOSED）
   行内数学会在任意 `$` 处开启并远距离闭合，导致公式前的美元金额丢符号、段落被误吞。
   https://codewhale-hq/Codewhale/pull/7196

7. **#7197 表格列宽按内容分配**（CLOSED）
   当前所有列等分终端宽度，短列浪费空间、长句被迫折行。改为内容驱动。
   https://codewhale-hq/Codewhale/pull/7197

8. **#7193 展开回复与已发送消息中的制表符**（CLOSED）
   ratatui 会丢弃控制字符，Go/Makefile 代码因此失去全部缩进，`a<TAB>b` 显示为 `ab`。
   https://codewhale-hq/Codewhale/pull/7193

9. **#7200 `/save` 与 `/load` 路径统一按工作区解析**（CLOSED）
   两者路径语义不一致；在 `--workspace` 指向其他目录时行为异常。
   https://codewhale-hq/Codewhale/pull/7200

10. **#7199 以 BM 开头的文本文件不再被当作位图**（CLOSED）
    `read` 工具将任何以 `BM` 开头的文件判定为 BMP，正文含 “BM25” 的笔记会被当作图片丢弃。
    https://codewhale-hq/Codewhale/pull/7199

> 另有两项待观察：#6393（OPEN，无索引源码导航回显与受控 fork-prefix 继承）与 #7202（修复隔离测试状态根目录在进程退出时未清理，已关闭）。

## 5. 功能需求趋势

- **上下文与成本治理**：#7206 提出增量、缓存稳定的上下文折叠，指向长会话场景的 tokens 成本与缓存命中率。
- **多智能体 / Fleet 工作流**：#5915 聚焦 workers 视图与 operator 模型列表，子代理的可操作性成为 UX 重点。
- **自托管与自定义提供方**：#7179 显示 openai-compatible 接入的实际需求强烈，且当前预算策略与真实服务端能力脱节。
- **认证与身份链路**：#7203 的 ChatGPT 登录校验问题反映外部身份集成仍是脆弱环节。
- **分发与安装体验**：#6303 的关闭意味着“一处安装、多处分发”（网站 / 插件市场 / 源码）的方向已基本落地。
- **终端渲染质量**：今日 PR 集群（数学、表格、制表符、HTML 实体、非 ASCII）说明富文本渲染稳定性是持续投入方向。

## 6. 开发者关注点

- **渲染健壮性**：转义字符、非 ASCII、金额与 `$` 符号、HTML 实体（`&lt;`、`&amp;`、`&nbsp;`）反复引发显示错误甚至 TUI 崩溃，测试覆盖不足。
- **路径与工作区语义**：`/save`、`/load` 与 `--workspace` 的不一致，以及 home 目录被当作工作区，暴露出路径解析缺乏统一约束。
- **工具误判输入**：`read` 工具的文件类型嗅探过于粗糙（`BM` 前缀），同类“魔术字节”判定的健壮性需要系统性排查。
- **CI 流程纪律**：PR #7138 在 CI 资格未完成时被合并，需要后续 PR 补修，反映合并门槛执行不严。
- **环境碎片化**：Windows 平台与 HarmonyOS（#7195 文档更新）等非主流环境的适配问题持续出现，文档正在从“历史故障记录”转向“当前可用说明”。

</details>

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar-personal) 自动生成。*