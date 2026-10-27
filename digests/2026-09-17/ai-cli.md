# AI CLI 工具社区动态日报 2026-09-17

> 生成时间: 2026-09-17 12:05 UTC | 覆盖工具: 9 个

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

**数据日期：2026-09-17** ｜ 样本：Claude Code、OpenAI Codex、Gemini CLI、GitHub Copilot CLI、Kimi Code CLI、OpenCode、Pi、Qwen Code、DeepSeek TUI（CodeWhale）

---

## 1. 生态全景

当前 AI CLI 工具整体已越过"功能扩张期"，进入**可靠性与集成质量打磨期**：九个工具的社区焦点高度重合于状态语义准确性、沙箱权限精确化、会话持久化与会话恢复，而非新能力堆叠。与此同时，**模型与 provider 生态扩张速度已明显超过内置适配的跟进速度**，Pi、OpenCode、DeepSeek TUI 三家均出现集中的新模型接入与兼容层缺陷。平台侧呈现明显的**Windows 与远程/容器开发体验洼地**——Claude Code、Codex、Copilot CLI 三家在 Windows 启动、文件句柄、沙箱策略上问题密度最高。多智能体与子代理进入"治理"阶段，成本控制、委派审查、并行写入争用成为新的架构议题。整体判断：行业正从"能跑通"转向"可信、可诊断、可运维"。

---

## 2. 各工具活跃度对比

| 工具 | Release（24h） | Issues（本期） | PR（24h 更新） | 突出特征 |
|---|---|---|---|---|
| **Claude Code** | 1（v2.1.274） | 10 精选 + 3 已关闭 | 3 | 版本节奏稳定；PR 极少；Windows 问题主导 |
| **OpenAI Codex** | **9**（Rust alpha 密集） | 10 | 10（均为 bot 提交，CLOSED） | 迭代最激进；容量报错集中 |
| **Gemini CLI** | 1（nightly） | 10 + 3 其他 | 10 | Issue 与修复 PR 同日配对闭环 |
| **GitHub Copilot CLI** | 3（v1.0.86-0/1/2） | 10 精选（共 50 更新） | **0** | 修正式发版；无 PR 动态 |
| **Kimi Code CLI** | 0 | **3（全量）** | **1** | 数据量最小；社区规模有限 |
| **OpenCode** | 0 | 10 | 10 | Issue/PR 双向活跃；插件生态诉求强 |
| **Pi** | 0 | 10 | 10 | 小型修复快速合入；稳定性问题簇明显 |
| **Qwen Code** | 2（v0.24.0 + Desktop + nightly） | 12 | 10 + 若干 | 含破坏性变更；自身驱动多组 issue |
| **DeepSeek TUI** | 0 | 10 | 10 | 架构重构主线；Provider 扩张 |

**读法提示**：Issues/PR 数受各仓库当日数据披露口径影响，Claude Code 与 Copilot CLI 的 PR 数为实际披露值（3 / 0），非筛选结果；Kimi Code CLI 为全量呈现（3 Issue + 1 PR）。

---

## 3. 共同关注的功能方向

**① 权限与沙箱的精确化（覆盖面最广，6 家）**
- Claude Code：私有网络主机持久交互授权（#90305）、公网子资源被整体拦截（#89725）、Plan 模式与权限状态脱节（#94877）
- Codex：Windows 上显式授权删除仍被 "blocked by policy"（#38886、#45403）、读写沙箱权限应各自独立（PR #46122）
- Copilot CLI：托管设置刷新破坏 IDE MCP 重载并禁用 /allow-all（#4847）
- Gemini CLI：破坏性命令（`git reset`、`--force`）抑制（#22672）
- Qwen Code：Bash allow 规则可被 `\r/\v/\f/\u00a0` 绕过（#11851，安全）
- DeepSeek TUI：写入声明争用禁止不相交文件并行写（#6278）

**② 会话/上下文持久化与恢复（6 家）**
- Claude Code：auto-memory 索引加载状态不可知（#82056）
- Codex：排队 follow-up 丢失（#45019，👍51）、工具输出未追加导致线程卡死（#44604）
- Gemini CLI：ACP 会话恢复失败（#29288 → PR #29368）、`-r` 重放工具响应两次（PR #29366）
- Copilot CLI：会话恢复、损坏恢复（v1.0.86-0/1）
- Qwen Code：删除活跃会话损坏 transcript（#12091）
- DeepSeek TUI：session picker 拒绝已保存会话（#6207）、Resume 后空 transcript（#6185）

**③ 上下文压缩与溢出恢复健壮性（Pi 最突出，跨 3 家）**
- Pi：压缩触发摘要上限（#9512）、thinking 块触发上游分类器拒绝（#9652）、固定 16 MiB 预算使重试无法收敛（#9579）——本日为最集中的单一问题簇
- Qwen Code：百分比预算随窗口增大而失效（#12029）、扩展 context 无预算无条件拼入（#12030）
- DeepSeek TUI：compaction 后 chat roles 丢失（PR #6286）

**④ 静默失败与"假成功"（4 家，信任度议题）**
- Gemini CLI：子代理 MAX_TURNS 耗尽却报 `status: "success"`（#22323 → PR #29367）
- Pi：provider 流不关闭导致 Agent 静默挂死（#8331）、空 tool_use 却结束回合（#9681）
- Qwen Code：钩子失败上报为成功（PR #12081）、`permissionDecision:"ask"` 被静默拒绝（#6321）
- DeepSeek TUI：steer 被丢弃仍报已投递（#6276）

**⑤ Windows / 远程容器平台体验（3–4 家）**
- Windows：Claude Code（#42776、#89467、#94320）、Codex（#25220、#41339、#38886）、Copilot CLI（#4095，👍22；#4531）
- 远程/容器：Copilot CLI（Codespaces OAuth 回调不可达，无令牌回退 #3009）、Qwen Code（VS Code Remote webview 无法连接 daemon #11976、#12023）

**⑥ MCP 生态从"能连"走向"可运维"（4 家）**
- Copilot CLI：Figma 远程服务器 -32601 被判致命（#4870）、`.mcp.json` 检测到但未连接（#4542）
- DeepSeek TUI：死掉的 server 仍为 'ready'，无自动重连与 list_changed（#6187）、协议版本协商推进（PR #6281）
- Claude Code：新增 MCP 启动等待时间可控（v2.1.274）
- Gemini CLI：MCP OAuth 强制 RFC 9207 发行方校验（PR #29117）

**⑦ 成本可观测性（3–4 家）**
- Codex：等待轮询仍消耗额度（#35259，👍22）
- OpenCode：上下文窗口上限显示（PR #42927）、用量与营销文案不一致（#49517）
- Qwen Code：`/context` 明细不闭合、遥测被整体丢弃（#12033、#12048）
- DeepSeek TUI：单步无成本上限，638k tokens 零产出事故（#6282）

---

## 4. 差异化定位分析

| 工具 | 功能侧重 | 目标用户 | 技术路线特征 |
|---|---|---|---|
| **Claude Code** | 记忆机制、Plan 模式、Browser pane、Cowork 多设备协作 | Anthropic 生态重度用户、企业 | 闭源模型 + 桌面端为主；版本节奏稳（v2.1.x），社区 PR 参与度低（仅 3 条） |
| **OpenAI Codex** | 多智能体（Ultra）、Guardian 委派审查、沙箱权限路由、守护进程 | 付费 Pro/Plus 用户、自定义模型接入方 | Rust 侧高频 alpha（24h 9 个 release）；PR 由 bot 集中提交，人工社区贡献弱 |
| **Gemini CLI** | 子代理状态语义、ACP/IDE 集成、Auto Memory 脱敏 | IDE 用户（Zed 等 ACP 客户端）、POSIX/bash 亲和用户 | 开源 + nightly 节奏；Issue 与修复 PR 同日配对，闭环效率高；主张零依赖 OS 沙箱（#19873） |
| **GitHub Copilot CLI** | MCP 生态、插件/自定义代理规范（Agent Plugins 1.0）、IDE 协同 | GitHub/VS Code 生态开发者、企业托管用户 | 与 VS Code 深度耦合（既是优势也是冲突源）；修正式发版；本期无 PR |
| **Kimi Code CLI** | 子代理认证、Desktop 记忆功能、PreToolUse 安全钩子 | Moonshot 生态用户、Desktop 用户 | 社区规模最小（3 Issue/1 PR）；重心在服务端认证与配置门控一致性 |
| **OpenCode** | TUI 会话检索、插件 API、自托管多实例 | 自托管/多实例部署者、插件开发者 | 插件与 UI 扩展开放度最高；桌面/Web 双端配置一致性待收敛 |
| **Pi** | 扩展事件 API、多 provider 兼容层、prompt cache warming | 多 provider 混合使用者、扩展开发者 | 硬编码常量多、provider 差异适配滞后；小型修复合入快 |
| **Qwen Code** | 上下文/token 管理归因、执行隔离（容器化）、Chrome 集成 | 企业内网/远程开发、容器化部署 | 正式版 + Desktop + nightly 三线并行；含破坏性变更（钩子变量展开）；自身驱动成组 issue |
| **DeepSeek TUI** | 架构重构（crate 拆分）、去硬编码注册表、Provider 扩张 | 自建 provider、生产级并行 worker 用户 | 处于 0.9.14 重构深水区（72 万行巨型组件拆分）；概念模型（Fleet/agent）尚在取舍 |

**路线分化要点**：Codex 走"高频 alpha + bot 自动化"，Claude Code 走"稳定版本 + 内部主导"；Gemini CLI 与 OpenCode 是社区协作最健康的两端（修复闭环 / 插件开放）；DeepSeek TUI 是唯一处于大规模架构重构中的工具。

---

## 5. 社区热度与成熟度

**社区活跃度分层（基于本期互动数据）**：

- **高互动、高成熟**：Claude Code（#42776 达 193 评论）、Codex（#45019 👍51、#35259 👍22）、OpenCode（#4714 达 35 评论 / 👍55）。Issue 讨论深入，多为长期跟踪型问题。
- **高活跃、快速迭代**：Codex（24h 9 release）、Gemini CLI（Issue↔PR 同日闭环）、Copilot CLI（3 修订版 + 50 Issue 更新）、Qwen Code（三线发版 + 12 Issue）。
- **中等活跃、打磨期**：Pi（Issue 与 PR 并重，稳定性修复密集）、DeepSeek TUI（重构主线推进 + Provider 扩张 PR 集中落地）。
- **社区规模有限**：Kimi Code CLI（3 Issue / 1 PR，全量数据）。

**成熟度信号**：
- **高成熟**：Claude Code、Gemini CLI（修复闭环率）、Copilot CLI（企业托管配置体系）
- **成长中**：OpenCode、Qwen Code、Pi、Codex（功能强但容量/计费透明度不足）
- **重构期**：DeepSeek TUI（#6034 揭示 118/128 模块仍耦合于 `crate::config`，727,748 行单一组件）

**共性短板**：Windows 平台体验在四家工具上一致偏弱，说明这是**行业级而非单点问题**；跨工具集成冲突（Copilot CLI 与 VS Code 争抢文件句柄 #4095）是新出现的生态摩擦类型。

---

## 6. 值得关注的趋势信号

**信号一：状态语义准确性已成为代理可信度的生命线。**
Gemini CLI 在 #22323（子代理假成功）曝光当日即推进修复 PR #29367；Pi 的 #8331/#9681 揭示"流不关闭/空 tool_use"导致的静默挂死缺少看门狗；Qwen Code 的钩子失败被上报为成功。**对开发者的参考价值**：选型时应优先验证工具在"失败时是否明确报错"，而非仅看成功路径能力；长任务场景应自建超时与心跳监控。

**信号二：权限模型正从"二元开关"走向"细粒度 + 可诊断 + 可持久化"。**
Codex 要求读写权限解耦（PR #46122）、Claude Code 要求私有主机持久交互授权（#90305）、Google 侧要求 Bash allow 规则不可被空白字符绕过（#11851）。同时"blocked by policy"类不透明拒绝在多家被反复抱怨。**参考价值**：企业落地时需确认拒绝路径是否可解释、授权是否可审计，这直接影响合规可用性。

**信号三：模型生态扩张速度 > 内置适配能力。**
Pi 单日出现 DeepSeek V4、GPT-6 Astra、Claude Fable、GMI Cloud、Azure Chat Completions、Vercel AI Gateway 多个接入诉求；OpenCode 的 GLM-5.2/5.3 均出问题；Codex 的 `call_id` 缺失导致严格上游 400。**参考价值**：依赖第三方或自建 provider 的团队应有心理预期——兼容层缺陷是当前高频故障源，建议锁定经过验证的 provider 版本组合。

**信号四：上下文压缩失败 = 会话报废。**
Pi 的三条 issue（#9512/#9652/#9579）共同模式是：压缩失败后用户只能放弃会话，且失败原因（上游分类器拒绝、固定字节预算、摘要上限）各不相同。Qwen Code 的百分比预算在大窗口下失效更暴露设计缺陷。**参考价值**：长会话用户应关注工具的压缩重试是否真正收敛，而非仅看"是否支持自动压缩"。

**信号五：成本可见性诉求从"查看"升级为"归因"。**
Qwen Code 的 `/context` 明细不闭合、token 估算器混用、遥测整体丢弃，反映开发者需要**可归因的成本账本**；Codex 的等待轮询计费（👍22）与 DeepSeek TUI 的 638k tokens 零产出事故，则指向**单步成本上限**缺失。**参考价值**：规模化部署前应确认工具是否提供 per-turn / per-tool 的成本分解，以及是否支持单步熔断。

**信号六：MCP 正从"能连上"进入"可运维"阶段。**
DeepSeek TUI 的"死 server 仍报 ready、无自动重连"（#6187）、Copilot CLI 的"检测到但未连接"（#4542）、Gemini CLI 的 OAuth 发行方校验（PR #29117）共同指向：MCP 的发现、健康检查、重连、认证安全已取代"能否连通"成为新焦点。**参考价值**：以 MCP 为核心集成策略的团队，应把连接监管（health check + reconnect）纳入自身运维体系，不能完全依赖 CLI 内置能力。

**信号七：stale 关闭策略可能埋没有效诉求。**
Claude Code 多条 enhancement（#86435、#86440、#86467、#80892、#81015）以 stale 关闭，其中包含合理的权限范围限定与认证授权缺口。**参考价值**：仅凭 Issue 状态判断工具能力边界有风险，重要诉求应直接跟踪修复 PR 而非 Issue 开关状态。

---

*本报告仅基于所提供的数据源整理，未引入外部信息；所有版本号、Issue 编号、评论/点赞数均来自原文披露。*

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告（数据截止 2026-09-17）

## 1. 热门 Skills 排行（按 PR 关注度）

> 注：本次提供的 PR 数据中评论数均为 `undefined`，故按更新时间活跃度与议题重要性综合排序。

| # | Skill / PR | 功能 | 讨论热点 | 状态 |
|---|---|---|---|---|
| 1 | [skill-creator 触发评估修复 #1298](https://github.com/anthropics/skills/pull/1298) | 修复 skill-creator 的触发评估逻辑，隔离 per-worker 探测、支持 Windows 与运行时错误处理 | skill-creator 的评估管线可靠性——误报漏报、Windows 兼容 | OPEN（2026-09-16 更新） |
| 2 | [Fix skill-creator 触发检测 0% recall #1769](https://github.com/anthropics/skills/pull/1769) | 修复 skill-creator 对所有 skill 报 `precision=100% recall=0%` 的严重缺陷 | 触发评估失效导致描述调优基于错误证据 | OPEN（修复 Issue #1721） |
| 3 | [proofcore-contract-auditor #1771](https://github.com/anthropics/skills/pull/1771) | 面向 Web3 的智能合约静态审计 Skill，支持 Solidity/Rust，并将审计证明锚定到 TON 区块链 | 智能合约审计 + 链上存证的垂直场景 | OPEN（2026-09-16 更新） |
| 4 | [md2video-audio #1703](https://github.com/anthropics/skills/pull/1703) | 零成本将 Markdown 文档编译为带拟真配音的 MP4 视频 | 文档到视频的自动化内容生产 | OPEN（2026-09-15 更新） |
| 5 | [pyxel 复古游戏开发 #525](https://github.com/anthropics/skills/pull/525) | 用 Python 创建、调试、验证复古游戏，含确定性无头运行与逐帧检查 | 游戏开发 + 确定性验证工作流，长期活跃 | OPEN（2026-09-16 更新） |
| 6 | [document-typography #514](https://github.com/anthropics/skills/pull/514) | AI 生成文档的排版质量控制：孤词换行、寡行段落、编号错位 | 文档排版质量这一跨场景通用痛点 | OPEN（2026-03-13 更新） |
| 7 | [mcp-builder 适配 mcp>=2 #1742](https://github.com/anthropics/skills/pull/1742) | 支持 `streamable_http_client` 导入重命名与自定义 HTTP 头 | 跟随 MCP 2.0 依赖升级 | OPEN（修复 Issue #1668） |
| 8 | [claude-api 标记退役模型 #1607](https://github.com/anthropics/skills/pull/1607) | 将四个已退役模型 ID 更新为 retired 状态 | 模型元数据准确性 | OPEN（修复 Issue #1603） |

---

## 2. 社区需求趋势（提炼自 Issues）

1. **评估与触发机制的可信度** —— 最集中的技术诉求。[Issue #556](https://github.com/anthropics/skills/issues/556)（`claude -p` 完全不触发 skill，所有查询 0% 触发率，12 条评论）与 skill-creator 的 recall 缺陷相互印证，说明社区对"skill 到底有没有被正确触发/评估"高度焦虑。

2. **安全与信任边界** —— [Issue #492](https://github.com/anthropics/skills/issues/492)（43 条评论，全站最高）指出社区 skill 被发布在 `anthropic/` 命名空间下，存在冒充官方 skill 的信任边界滥用风险；[Issue #1175](https://github.com/anthropics/skills/issues/1175) 进一步探讨 SharePoint 文档处理中的权限与上下文窗口安全。此外 [PR #83](https://github.com/anthropics/skills/pull/83) 提出 skill-security-analyzer 元 skill 与此呼应。

3. **组织内分发与协作** —— [Issue #228](https://github.com/anthropics/skills/issues/228)（16 条评论、8 个 👍）希望实现 org 级 skill 共享，替代当前"下载 .skill 文件 → Slack 发送 → 手动上传"的原始流程；[Issue #189](https://github.com/anthropics/skills/issues/189)（9 个 👍）则抱怨 document-skills 与 example-skills 内容重复，污染上下文窗口。

4. **上下文窗口效率** —— [Issue #1487](https://github.com/anthropics/skills/issues/1487) 指出 `claude-api` skill 单次工具调用即注入约 156k tokens，直接耗尽上下文窗口，代表社区对 skill 体积膨胀的担忧。

5. **治理、质量门与状态管理类新 skill 方向** —— [Issue #412](https://github.com/anthropics/skills/issues/412)（agent-governance：策略执行、威胁检测、信任评分、审计追踪）、[Issue #1385](https://github.com/anthropics/skills/issues/1385)（三阶段推理质量门：预任务校准 → 对抗性审查 → 交付验证）、[Issue #1329](https://github.com/anthropics/skills/issues/1329)（compact-memory：用符号记法压缩 agent 状态）。

6. **外部协议与集成** —— [Issue #16](https://github.com/anthropics/skills/issues/16) 提议将 Skills 暴露为 MCP；[Issue #29](https://github.com/anthropics/skills/issues/29) 询问 AWS Bedrock 兼容性。

---

## 3. 高潜力待合并 Skills（活跃但未合并）

- [PR #1769](https://github.com/anthropics/skills/pull/1769) — skill-creator 触发检测 0% recall 修复，直接解决社区最痛的基础设施缺陷，创建后 1 天内即更新，落地可能性高。
- [PR #1298](https://github.com/anthropics/skills/pull/1298) — skill-creator 触发评估隔离与跨平台修复，与 #1769 同属一条主线，二者合并将显著改善 skill 开发体验。
- [PR #1742](https://github.com/anthropics/skills/pull/1742) — mcp-builder 适配 mcp>=2.0.0，属依赖升级刚性需求，维护成本低。
- [PR #1771](https://github.com/anthropics/skills/pull/1771) — proofcore-contract-auditor，Web3 智能合约审计垂直 skill，2026-09-15 新建即持续更新。
- [PR #1703](https://github.com/anthropics/skills/pull/1703) — md2video-audio，Markdown 转带配音视频，内容自动化方向热度高。
- [PR #525](https://github.com/anthropics/skills/pull/525) — pyxel 复古游戏开发，自 2026-03 起长期维护并持续更新至 9 月，社区黏性强。
- [PR #1742 / #1724](https://github.com/anthropics/skills/pull/1724) — mcp-builder 相关修复双线推进（依赖兼容 + 默认模型更新至 claude-sonnet-5），预示该 skill 正被集中迭代。

---

## 4. Skills 生态洞察

**当前社区在 Skills 层面最集中的诉求是"可信度与治理"：既要让 skill 能被正确地触发和评估（skill-creator 评估失效、0% 触发率），也要厘清信任边界与分发方式（anthropic/ 命名空间滥用、org 级共享、上下文窗口污染）——即从"能写 skill"转向"能信任、能验证、能安全分发 skill"。**

---

# Claude Code 社区动态日报（2026-09-17）

## 1. 今日速览

今天发布 v2.1.274，重点在内存告警与 MCP 启动等待时间可控性。社区侧，长期悬置的 Windows 桌面端问题（重启失败、窗口强制置顶）持续占据高互动量。同时 Cowork、Plan 模式、权限与沙箱相关缺陷集中更新，Windows 平台问题占比明显偏高。

## 2. 版本发布

**v2.1.274**
- 内存占用达到临界值时显示可见警告，并给出释放内存或安全重启的步骤。
- 新增 `CLAUDE_CODE_MCP_STARTUP_WAIT_MS`，用于限定首个非交互轮次等待 MCP server 连接的最长时间（`0` 表示不等待）。
- 新增 `effort` 属性（数据源摘要在此处截断，未提供完整说明）。
- 链接：https://github.com/anthropics/claude-code/releases

## 3. 社区热点 Issues（按评论/点赞筛选）

1. **#42776 [OPEN] Windows 桌面端因孤儿进程文件锁无法重启**（评论 193，👍 91）
   创建于 4 月，至今仍在更新，是当前互动量最高的 Issue。Windows 桌面端可靠性问题的代表性案例。
   https://github.com/anthropics/claude-code/issues/42776

2. **#89467 [OPEN] Windows 应用窗口强制置顶，无法关闭**（评论 32，👍 64）
   无任何设置/快捷键/菜单项可取消置顶，影响基础可用性，社区点赞数很高。
   https://github.com/anthropics/claude-code/issues/89467

3. **#82056 [OPEN] 会话无法判断 auto-memory 索引是完整加载、被截断还是完全未加载**（评论 51）
   涉及自动记忆机制的可观测性缺失，在长会话/多子代理场景下影响结果可信度。
   https://github.com/anthropics/claude-code/issues/82056

4. **#95070 [OPEN] Opus 5 reasoning_extraction 安全机制拦截良性首条消息，且跨新会话复现**（评论 7，当日新建）
   在 2.1.274 + Opus 5 上复现，属于模型安全层误伤，直接影响可用性。
   https://github.com/anthropics/claude-code/issues/95070

5. **#93482 [OPEN] Cowork: device_commit_files 覆盖写报成功但磁盘内容滞后一个 commit**（评论 4）
   标记 data-loss、有复现步骤。静默陈旧写入且 mtime 刷新，属于高风险数据一致性问题。
   https://github.com/anthropics/claude-code/issues/93482

6. **#94320 [OPEN] CoworkVMService 无法配置自身崩溃恢复动作（Access is denied）**（评论 1）
   导致桌面应用崩溃后无法自愈，与 #42776 同属 Windows 端自恢复能力缺失。
   https://github.com/anthropics/claude-code/issues/94320

7. **#89725 [OPEN] Browser pane 对公网域名的所有子资源返回 ERR_BLOCKED_BY_CLIENT**（评论 3）
   与 #87472 症状相同但目标不是 RFC1918 地址，说明沙箱拦截逻辑可能过度收紧。
   https://github.com/anthropics/claude-code/issues/89725

8. **#90305 [OPEN] Browser pane 请求对已批准私有网络主机的持久化交互授权（而非仅读取）**（评论 3，👍 2）
   权限模型的功能需求，反映“读取/交互”授权粒度不足。
   https://github.com/anthropics/claude-code/issues/90305

9. **#94877 [OPEN] VS Code：Plan 模式指示器仍为选中态，后续消息却按 Edit automatically 权限执行**（评论 1，👍 1）
   权限状态与 UI 显示不一致，存在误操作风险。
   https://github.com/anthropics/claude-code/issues/94877

10. **#94041 [OPEN] 原生 `/goal` Stop hook 无限重触发，无法确认 hold 状态**（评论 1）
    在助手已给出条件满足证据后仍重复触发，影响 hook 驱动工作流的可控性。
    https://github.com/anthropics/claude-code/issues/94041

**另值得留意（已关闭）**：#86435 全局禁止删除数据的 Prohibited 块（无范围限定）被标 stale 关闭；#86440 要求代理在 Docker 上下文连接失败时报错而非绕过；#86467 Plan 模式需要不破坏计划视图的讨论态。三者均以 stale 关闭，反映出相关诉求尚未落地。
- https://github.com/anthropics/claude-code/issues/86435
- https://github.com/anthropics/claude-code/issues/86440
- https://github.com/anthropics/claude-code/issues/86467

## 4. 重要 PR 进展

本期过去 24 小时内更新的 PR 仅 3 条，逐一列出：

1. **#87077 [OPEN] 修复 pr-review-toolkit 中所有 agent 的非法 YAML frontmatter**
   各 agent 的 description 为未加引号的标量且内含 `Daisy: "..."` 形式的对话行，被 YAML 解析为嵌套映射而非法，导致解析失败。
   https://github.com/anthropics/claude-code/pull/87077

2. **#94847 [OPEN] diff：首个编辑仅在有文件可列时才打开面板**
   此前 diff 面板在会话首个成功的 Edit/Write/NotebookEdit 时即自动打开，且先于拉取数据；对仓库外写入、被忽略文件或其他 worktree 的写入会误开。
   https://github.com/anthropics/claude-code/pull/94847

3. **#94843 [CLOSED] diff：prompt hint 通过可能缺少该字段的类型读取 viewport 布局**
   `mods/diff` 读取 `viewport.isFullscreen`，在未声明该字段的引擎上类型检查失败，尽管运行时行为正确。
   https://github.com/anthropics/claude-code/pull/94843

> 说明：数据源本次仅提供 3 条 PR，未满 10 条，故不补充其他条目。

## 5. 功能需求趋势

从本期 Issue 分布可提炼出以下方向：

- **Windows 桌面端稳定性与自恢复**：#42776（孤儿进程文件锁导致无法重启）、#94320（崩溃恢复动作配置失败）、#89467（窗口强制置顶）。这是当前最集中的平台性痛点。
- **权限与沙箱粒度控制**：#90305（私有网络主机的持久交互授权）、#89725（公网子资源被整体拦截）、#94877（Plan 模式与权限状态不一致）、#86435（全局禁止删除、缺少范围限定）。社区希望权限模型更细粒度、可持久化、且与 UI 状态一致。
- **Cowork / 多设备协作的正确性**：#93482（静默陈旧写入）、#94320、#95115。数据一致性与故障恢复是核心诉求。
- **可观测性与状态可见性**：#82056（auto-memory 索引加载状态不可知）、#94041（hook 无法确认 hold）。开发者需要明确得知内部机制是“完整、截断还是失败”。
- **IDE 与编辑器集成**：#80892（VS Code 扩展输入框不遵循 `~/.claude/keybindings.json`）、#94877、#94964（IntelliJ，作者撤回）。键位与权限在 IDE 内的一致性仍待完善。
- **模型安全层误伤**：#95070（Opus 5 reasoning_extraction 拦截良性消息），属于新模型接入后的回归类问题。
- **CLI / 认证能力**：#81015（`claude setup-token` 仅授予 `user:inference`，导致 `/usage` 面板 403，缺少 `usage:read` 之类的只读授权）。

## 6. 开发者关注点

- **Windows 平台问题密度最高**：本期高互动 Issue 中，Windows 相关（#42776、#89467、#95070、#93482、#94320、#89725、#94877）占绝大多数，涵盖重启、窗口管理、沙箱拦截、崩溃自愈等基础能力。
- **数据一致性风险受关注**：#93482 的“报成功但内容滞后一个 commit”属静默数据损坏，虽评论数不高但严重度高，建议优先关注。
- **权限模型“过宽/过严”双向不满**：一边是 #86435 抱怨 Prohibited 块无范围限定、连操作员明确指令也无法覆盖；另一边是 #89725/#90305 反映拦截与授权粒度过粗。
- **Plan 模式与 hook 的可控性**：#94877（Plan 指示与权限状态脱节）、#86467（讨论计划会破坏计划视图）、#94041（Stop hook 无限重触发）集中反映“模式状态机”在边界情况下不可预期。
- **可观测性缺口**：#82056 指出会话无法自检记忆索引完整性，属于开发者难以自查的隐性故障。
- **stale 关闭策略值得留意**：多条 enhancement 以 stale 关闭（#86435、#86440、#86467、#80861、#80892、#81015），其中不乏未落地的合理诉求，可能造成需求被埋没。

---
*本日报仅基于所提供的 GitHub 数据整理，未补充外部信息。*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报 — 2026-09-17

数据来源: github.com/openai/codex

---

## 1. 今日速览

过去 24 小时内，Codex 仓库密集发布了 9 个 Rust 侧 alpha 版本（`rust-v0.155.0-alpha.11` 至 `alpha.16`，另有 `alpha.2.5/2.6` 及 `rusty-v8-v152.2.0`），呈现高频迭代节奏。社区讨论高度集中在两类问题：**模型容量/速率限制报错**（多账号在额度充足时仍遭遇 "model is at capacity"）与**Windows 端应用启动、沙箱策略阻塞**。同时，一批由 `copyberry[bot]` 提交的 PR 集中落地了守护进程（daemon）、沙箱权限路由和 TUI 体验相关的改动。

---

## 2. 版本发布

过去 24 小时内共 9 个 Release，均为 Rust 侧构建产物，无详细更新说明：

- `rust-v0.155.0-alpha.16` — Release 0.155.0-alpha.16
- `rust-v0.155.0-alpha.15` — Release 0.155.0-alpha.15
- `rust-v0.155.0-alpha.14` — Release 0.155.0-alpha.14
- `rust-v0.155.0-alpha.13` — Release 0.155.0-alpha.13
- `rust-v0.155.0-alpha.12` — Release 0.155.0-alpha.12
- `rust-v0.155.0-alpha.11` — Release 0.155.0-alpha.11
- `rust-v0.155.0-alpha.2.6` — Release 0.155.0-alpha.2.6
- `rust-v0.155.0-alpha.2.5` — Release 0.155.0-alpha.2.5
- `rusty-v8-v152.2.0` — 无描述

**观察**：同一 0.155.0 主线在 24 小时内推出多个 alpha 序号，说明 0.155.0 正处于快速预发布阶段；`rusty-v8` 单独发版表明 V8 绑定/运行时组件也在独立更新。所有条目均未附带 release notes，无法从数据中确认具体变更内容。

---

## 3. 社区热点 Issues（10 条）

1. **#43337 [OPEN] 账号级容量报错，尽管周额度充足**（评论 49，👍5）
   ChatGPT Pro 20x 用户报告在 `codex-cli 0.153.4` 下使用 `gpt-6-astra`、`gpt-5.6-luna` 时出现账号专属容量错误。评论数最高，说明该问题波及面广。
   https://github.com/openai/codex/issues/43337

2. **#25220 [OPEN] Windows 上捆绑插件全部不可用（EFS 加密导致的 copyfile 失败）**（评论 41，👍4）
   Computer Use、Browser、Chrome、LaTeX 插件在 Windows 11 Microsoft Store 安装版上因加密文件复制失败而失效，同时打上 computer-use / browser / skills 多标签。
   https://github.com/openai/codex/issues/25220

3. **#35259 [OPEN] Codex Desktop 在等待/状态轮询时反复进入模型，消耗大量额度**（评论 27，👍22）
   点赞数最高的 Issue 之一。多智能体（Ultra）工作流中，仅执行 wait 类工具调用的模型轮次仍被计费。
   https://github.com/openai/codex/issues/35259

4. **#45019 [OPEN] App-server 排队的 follow-up 丢失**（评论 21，👍51）
   点赞数全场最高（51）。Codex App 版本 26.908.40834，X20 PRO 订阅，排队消息不再存在，属于明显的功能回归。
   https://github.com/openai/codex/issues/45019

5. **#42088 [OPEN] `function_call_output` 可缺失 `call_id`，导致严格上游返回 400**（评论 13，👍6）
   影响自定义模型接入（如 DeepSeek 等严格 OpenAI 兼容 `/responses` 服务），恢复会话或续聊时触发。
   https://github.com/openai/codex/issues/42088

6. **#38886 [OPEN] Windows 上用户明确授权的文件删除被策略提前拦截**（评论 10，👍1）
   即使开启完全访问，工具包装器仍返回 "rejected: blocked by policy"。
   https://github.com/openai/codex/issues/38886

7. **#41339 [OPEN] Windows 启动被更新策略阻塞 5 分钟以上**（评论 17）
   AppX 迁移后 `26.825.4187.0` 因待定应用内更新策略导致启动长时间挂起。
   https://github.com/openai/codex/issues/41339

8. **#31651 [OPEN] 请求为 ask-question 工具 UI 增加关闭自动消失倒计时选项**（评论 8，👍30）
   高赞增强类需求（30 赞），智能体提问界面的倒计时被用户认为干扰操作。
   https://github.com/openai/codex/issues/31651

9. **#38917 [CLOSED] 文档所述的 1M 上下文在 CLI/桌面端不可用**（评论 6，👍4）
   文档与实测不符，引用官方人员公开说法作为对照。已关闭，但反映文档一致性问题。
   https://github.com/openai/codex/issues/38917

10. **#46172 [OPEN] "Selected model is at capacity. Please try a different model."**（评论 10，👍2，创建于今日）
    与 #46079（同日创建，评论 5）同日出现，Plus/Pro 用户均受影响，说明容量类报错在今日集中爆发。
    https://github.com/openai/codex/issues/46172

---

## 4. 重要 PR 进展（10 条）

> 今日展示的 PR 均由 `copyberry[bot]` 提交并标记为 CLOSED，评论数未提供（undefined），以下按功能重要性筛选。

1. **#46179 在 Guardian 委派审查中包含发送方用户消息**
   委派任务可能遗漏发送方用户消息中的限制条件，Guardian 审查接收线程动作时需该上下文。
   https://github.com/openai/codex/pull/46179

2. **#46126 记录守护进程启动与更新遥测（含同意处理）**
   修复 TUI 在连接成功前即上报所选 app-server 模式、从而误报嵌入回退或启动失败的问题。
   https://github.com/openai/codex/pull/46126

3. **#46125 修复私有 tmp 挂载下的守护进程套接字隔离检查**
   私有 `/tmp` 绑定挂载会在 `/proc/self/mountinfo` 留下隐藏条目，导致 Linux 沙箱误拒安全隔离布局。
   https://github.com/openai/codex/pull/46125

4. **#46122 让文件系统读写各自遵循自身沙箱权限**
   此前只要写受限，读也必须依赖沙箱，即使已授予全盘读权限，读操作被不必要地牵连。
   https://github.com/openai/codex/pull/46122

5. **#46117 新增可选的自动后台服务器启动**
   新增 `features.daemon_auto_start`（默认关闭，通过 `/experimental` 开启），为新建、恢复、分叉会话启动共享本地服务器。
   https://github.com/openai/codex/pull/46117

6. **#46088 新增 `--no-daemon` 以绕过共享后台服务器**
   即使共享服务器已在运行也不启动或探测，并在 `resume`、`fork` 中保留该标志。
   https://github.com/openai/codex/pull/46088

7. **#46112 cwd 消失时保留文件系统沙箱策略上下文**
   删除所选工作目录会导致沙箱辅助进程无法启动，即使请求的绝对路径仍可访问。
   https://github.com/openai/codex/pull/46112

8. **#46108 用运行时兼容守卫替代 Sites 迁移状态**
   兼容旧版 Desktop 客户端向独立更新的 SSH app-server 提供捆绑 Sites 的场景，缓存的远程安装须优先。
   https://github.com/openai/codex/pull/46108

9. **#46116 让 TUI 的网页与图像活动摘要更紧凑、更具描述性**
   网页活动单行渲染并做宽度感知截断，区分搜索、打开页面与页内搜索。
   https://github.com/openai/codex/pull/46116

10. **#46123 允许模型目录覆盖 V2 `spawn_agent` 描述**
    从 `model_messages.tools.multi_agent.spawn_agent.description` 读取静态描述，与运行时工具命名空间解耦。
    https://github.com/openai/codex/pull/46123

---

## 5. 功能需求趋势

从本期 Issues 可见社区关注方向集中在：

- **速率限制与模型容量透明度**：#43337、#35259、#46172、#46079 集中反映额度充足却报容量不足、等待轮询仍计费等计费/限额可预期性问题。
- **沙箱与权限模型精确化**：#38886、#45403 显示 Windows 上"完全访问"与策略拦截之间存在矛盾，开发者期望授权即生效，并希望有可审查的拒绝路径。
- **自定义模型 / 跨供应商兼容**：#42088、#44604、#38365 指向对严格 OpenAI 兼容上游的适配，以及跨供应商会话交接时工具历史的规范化。
- **多智能体与委派治理**：#35259（Ultra/多智能体）、#46179（Guardian 委派审查）表明多智能体工作流的成本与安全审查是新兴重点。
- **上下文窗口一致性**：#40258（originator 门控导致 272K vs 872K）、#38917（文档称 1M 但不可用）反映对模型目录与文档一致性的诉求。
- **桌面端 UI/交互增强**：#31651（禁用自动消失倒计时）为高赞增强需求。

---

## 6. 开发者关注点

- **平台稳定性差异明显**：Windows 端问题密集（#25220、#41339、#41539、#44342、#38886、#45403、#44604），涉及启动阻塞、插件不可用、沙箱拒绝、更新策略门控，而 macOS 侧问题更多集中在安全审查误报（#43321、#43312）。
- **额度与容量报错缺乏解释**："Selected model is at capacity" 在同一天出现多条独立报告（#46172、#46079），且与 #43337 的账号级容量错误呼应，开发者呼吁明确可行的解决方案而非重试提示。
- **安全审查误报的连锁效应**：#43312、#43321 描述误报可升级为近乎每轮检查，影响普通聊天与 Codex 任务，属于体验层面的高摩擦点。
- **会话/线程状态脆弱**：#45019（排队消息丢失）、#44604（工具输出未追加即发起下次采样导致线程卡死）、#45405（Local Work 全部挂起）反映 app-server 会话状态管理仍是薄弱环节。
- **沙箱"策略阻塞"缺乏可诊断性**：多个 Issue（#38886、#45403）反复出现不透明的 "blocked by policy" 且无审查路径，开发者需要可解释的拒绝原因。

*注：以上内容均基于所提供的 GitHub 数据，未包含数据外的事实、版本号或结论；PR 评论数在原始数据中为 undefined，故未作推断。*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报（2026-09-17）

## 1. 今日速览

今日最大看点是子代理状态上报的严重缺陷开始收敛：Issue #22323 与对应修复 PR #29367 同日推进，解决 MAX_TURNS/TIMEOUT 恢复被错误提升为 GOAL 成功的问题。同时，ACP 会话恢复（#29288 → PR #29368）与 `-r` 会话重放工具响应两次（PR #29366）两条高优先级修复路线也在今天同步落地。整体上，社区讨论仍高度集中在代理稳定性与吞吐可靠性上。

## 2. 版本发布

- **v0.62.0-nightly.20260917.g6a466a7e2**：例行 nightly 构建，暂无详细变更说明。
  Changelog: https://github.com/google-gemini/gemini-cli/compare/v0.62.0-nightly.20260916.g6a466a7e2...v0.62.0-nightly.20260917.g6a466a7e2
- 配套自动版本号 PR #29364 同步开启。

## 3. 社区热点 Issues（Top 10）

1. **#22323 [p1] 子代理 MAX_TURNS 恢复被上报为 GOAL 成功**（13 评论）
   子代理明明耗尽轮次、未做任何分析，却返回 `status: "success"`，父代理无法感知中断。这是代理可信度的根基问题，讨论热度最高，且今日已有对应修复 PR。
   https://github.com/google-gemini/gemini-cli/issues/22323

2. **#19873 [p2] 零依赖 OS 沙箱 + 执行后意图路由**（9 评论）
   主张顺应 Gemini 3 模型"原生 bash 用户"的训练特性，围绕 POSIX 工具链设计沙箱。属方向性增强提案，值得关注其定位。
   https://github.com/google-gemini/gemini-cli/issues/19873

3. **#21409 [p1] Generalist agent 无限挂起**（8 评论，👍 8）
   一旦委派给 generalist agent 就会永久卡死，用户等待长达一小时。点赞数高，说明影响面广，是社区情绪最强的痛点之一。
   https://github.com/google-gemini/gemini-cli/issues/21409

4. **#29288 [p1] ACP 会话 sessionId 不一致导致 session/load 失败**（5 评论）
   Gemini CLI 0.59.0 作为 ACP agent 在 Zed 下无法恢复会话，报 "Invalid session identifier"。直接影响 IDE 集成体验。
   https://github.com/google-gemini/gemini-cli/issues/29288

5. **#26525 [p2] Auto Memory 需确定性脱敏并减少日志**（5 评论）
   指出脱敏发生在内容已发送给模型之后，属先发后审的安全缺口，安全方向的重点议题。
   https://github.com/google-gemini/gemini-cli/issues/26525

6. **#25166 [p1] 命令执行完毕后仍卡在 "Waiting input"**（4 评论，👍 3）
   极简 shell 命令结束却持续显示等待用户输入，属基础交互可靠性问题。
   https://github.com/google-gemini/gemini-cli/issues/25166

7. **#21983 [p1] browser 子代理在 Wayland 下失败**（4 评论）
   浏览器子代理在 Wayland 环境完成即报错，影响 Linux 桌面用户。
   https://github.com/google-gemini/gemini-cli/issues/21983

8. **#21968 [p2] Gemini 不主动使用 skills 与子代理**（6 评论）
   用户反馈除非显式指令，模型几乎不会自主调用自定义技能与子代理，指向代理调度策略问题。
   https://github.com/google-gemini/gemini-cli/issues/21968

9. **#22267 [p2] Browser Agent 忽略 settings.json 覆盖**（3 评论）
   全局/项目级配置（如 maxTurns）被完全忽略，AgentRegistry 与实际执行脱节。
   https://github.com/google-gemini/gemini-cli/issues/22267

10. **#22672 [p2] 代理应抑制破坏性行为**（3 评论）
    在复杂 git 操作中模型偶发使用 `git reset`、`--force` 等危险命令，属安全与可控性需求。
    https://github.com/google-gemini/gemini-cli/issues/22672

其他值得留意：#24246（工具数超限触发 400 错误）、#23571（在随机目录生成临时脚本）、#22186（输出钩子导致崩溃）。

## 4. 重要 PR 进展（Top 10）

1. **#29367 [p1] 修复子代理预算耗尽被误报为 GOAL**（OPEN，今日创建）
   保留 MAX_TURNS/TIMEOUT 的恢复语义，将预算耗尽上报为 incomplete 而非 success。直接回应 #22323。
   https://github.com/google-gemini/gemini-cli/pull/29367

2. **#29368 修复 ACP 按 ID 解析 session/load**（OPEN，今日创建）
   明确指出 #29288 中只有一半是 agent 侧缺陷，问题不在写入路径。修复 ACP 会话恢复。
   https://github.com/google-gemini/gemini-cli/pull/29368

3. **#29366 [p1] 修复会话恢复时工具响应被重放两次**（OPEN，今日创建）
   使用 `-r`、会话浏览器或 ACP 恢复时每个工具结果发送两次，导致首个请求在 functionCall/functionResponse 配对校验下失败。
   https://github.com/google-gemini/gemini-cli/pull/29366

4. **#29117 [CLOSED] MCP OAuth 流程强制 RFC 9207 发行方校验**
   实现 OAuth 2.0 授权服务器发行方标识验证，防止 token 被路由到非预期目标。今日关闭。
   https://github.com/google-gemini/gemini-cli/pull/29117

5. **#29166 [CLOSED] 扩展更新前先备份目录以支持回滚**
   此前 `updateExtension` 从未真正备份扩展，临时目录为空，回滚形同虚设。今日关闭。
   https://github.com/google-gemini/gemini-cli/pull/29166

6. **#29172 [CLOSED] 新增 gemini-3.8-flash 作为默认 flash 模型**
   注册 3.5-flash-lite、3.6/3.7/3.8-flash 为可选模型。注意：该 PR 已关闭，建议关注其后续替代方案。
   https://github.com/google-gemini/gemini-cli/pull/29172

7. **#29265 [p2] 防止中断轮次污染会话上下文**
   针对 SIGINT、超时或工具中止后聊天历史被"毒化"、后续提示执行失败的问题。
   https://github.com/google-gemini/gemini-cli/pull/29265

8. **#29330 [p2] 修复日志响应前输入丢失及重复读取**
   修正 `setPastSessionMessages` 在 `setCurrentSessionMessages` updater 内调用的 React 纯度违规，并附带回归测试。
   https://github.com/google-gemini/gemini-cli/pull/29330

9. **#29304 修复截断时拆分 UTF-16 代理对**
   避免 `sanitizeForDisplay` 在 emoji 等字符中间截断产生孤立代理项。属显示层修复。
   https://github.com/google-gemini/gemini-cli/pull/29304

10. **#29225 [p1] 修复 Skill Loader**（更新于 9-16）
    技能加载器修复，与 #21968"Gemini 不主动用 skills"的诉求相关。
    https://github.com/google-gemini/gemini-cli/pull/29225

另有多条 nightly 版本号 PR（#29364、#28441、#28245、#28250）在流转，其中 #28245、#28250 因陈旧被关闭。

## 5. 功能需求趋势

- **代理可靠性与状态语义**：本期最集中的方向。子代理状态误报、挂起、上下文污染、中断恢复均指向"代理执行结果不可信"这一核心问题。
- **IDE / ACP 集成**：以 Zed 为代表的 ACP 客户端会话恢复失败（#29288），说明编辑器集成是活跃但尚未稳定的战场。
- **安全与可控性**：Auto Memory 脱敏时机（#26525）、MCP OAuth 发行方校验（#29117）、破坏性命令抑制（#22672）构成三条独立的安全主线。
- **模型支持与版本迭代**：gemini-3.8-flash 等新模型注册（#29172）显示模型列表持续扩张。
- **工具链与代码理解**：AST 感知的文件读取/搜索/映射（#22745）、工具数量上限（#24246）、bash 亲和与沙箱（#19873）反映对"更聪明的工具选择"的诉求。
- **Browser Agent 成熟度**：Wayland 兼容（#21983）、配置忽略（#22267）、会话接管与锁恢复（#22232）多点开花，但均属稳定性修补阶段。

## 6. 开发者关注点

- **"假成功"与静默失败最伤信任**：子代理声称成功实则耗尽预算（#22323）被迅速修复，反映社区对状态语义准确性的高要求。
- **基础交互的稳定性欠佳**：命令已结束却卡在 "Waiting input"（#25166）、generalist agent 无限挂起（#21409）、简单命令导致崩溃（#22186），这些低门槛操作上的失败最消耗耐心。
- **配置不被尊重**：settings.json 覆盖被忽略（#22267）、符号链接 agent 不被识别（#20079），说明配置系统与扫描逻辑存在一致性缺口。
- **能力"存在但不用"**：模型不主动调用 skills 与子代理（#21968），是能力落地与提示/编排策略之间的落差。
- **工作区卫生**：模型在随机位置生成临时脚本（#23571），直接影响提交前清理成本。

整体判断：今日动态以"修复代理状态语义"和"修复会话恢复"为主线，社区情绪集中在稳定性而非新功能，符合项目当前正从功能扩张转向可靠性与集成质量打磨的阶段特征。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报（2026-09-17）

## 1. 今日速览

Copilot CLI 连续发布 v1.0.86-0/1/2 三个修订版本，重点修复会话恢复、Autopilot 行为与自定义代理的指令文件支持。社区侧，Agent Plugins 1.0 下自定义代理未被发现的问题（#4655）已关闭，而 MCP 相关问题（Figma 服务器加载失败、工作区 `.mcp.json` 不生效）仍在持续发酵。此外，Auto 模型模式在选择不可用推理等级时反复出错，成为多个已关闭 Issue 的共同主题。

---

## 2. 版本发布

- **v1.0.86-2**：Fixes and changes（细节未在数据中给出）。
- **v1.0.86-1**
  - Added：自定义代理可通过在 frontmatter 中设置 `include-custom-instructions: true` 选择启用仓库指令文件（AGENTS.md、copilot-instructions.md、CLAUDE.md）。
  - Fixed：在没有 plugin-directory、discovery 或 working-directory 覆盖的情况下恢复活跃会话时保持原有行为。
- **v1.0.86-0**
  - Fixed：即使会话记录文件存在可恢复的损坏，也能恢复会话。
  - Fixed：紧凑时间线中展开的推理文本不再变暗，可读性与其他部分一致。
  - Fixed：Autopilot 在接受任务完成后停止，不再意外继续。

---

## 3. 社区热点 Issues（共 50 条更新，精选 10 条）

1. **[#4655 CLOSED] Agent Plugins 1.0：com.github.copilot/agents 下的自定义代理未被发现**
   `area:agents, area:plugins`｜4 条评论｜mcollier｜已关闭
   影响按 Agent Plugins 1.0 规范构建插件并附带 Copilot 专属自定义代理的用户。作为规范兼容性问题被关闭，值得关注其与最新版本自定义代理变更的关联。
   https://github.com/github/copilot-cli/issues/4655

2. **[#3304 OPEN] ERR_HTTP2_INVALID_SESSION 导致反复的瞬时重试**
   `area:networking`｜4 条评论｜sriadd
   自 2026-05 持续至今的网络层顽固问题，每个会话中频繁出现"瞬态 API 错误"重试后报错。长期未解，属高频稳定性痛点。
   https://github.com/github/copilot-cli/issues/3304

3. **[#4095 OPEN] Windows：VS Code 运行时插件更新失败（Access is denied, os error 5）**
   `area:platform-windows, area:plugins`｜3 条评论｜👍 22
   今日列表中点赞最高（22），Windows 平台插件更新被 VS Code Copilot 扩展持有的 watcher 句柄阻塞。跨工具集成冲突，社区关注度高。
   https://github.com/github/copilot-cli/issues/4095

4. **[#4870 OPEN] MCP：Figma 远程服务器（mcp.figma.com）加载失败——server/discover 返回 -32601 被当作致命错误**
   `triage`｜3 条评论｜👍 7｜创建于 2026-09-16
   新提交即获 7 赞。Figma 托管 MCP 服务器认证与初始化成功，但 CLI 因 -32601 将其标记为致命失败，而 VS Code 中可正常工作，属 MCP 客户端兼容性缺陷。
   https://github.com/github/copilot-cli/issues/4870

5. **[#4887 OPEN] Auto 模型模式下使用 /btw 或 /ask 命令返回错误**
   `triage`｜3 条评论｜创建于 2026-09-17（当日）
   影响版本即最新的 1.0.86-2；指定具体模型时无问题。反映 Auto 模式与斜杠命令的交互缺陷。
   https://github.com/github/copilot-cli/issues/4887

6. **[#4847 OPEN] 自动 managed-settings 刷新破坏 IDE MCP 重载并禁用 /allow-all**
   `triage`｜3 条评论｜👍 3｜jackhorton
   长时间运行的 VS Code 会话中，自动托管设置刷新在重载动态贡献的 IDE MCP 服务器时失败，并连带禁用 /allow-all。涉及企业托管配置与 IDE 集成的交互。
   https://github.com/github/copilot-cli/issues/4847

7. **[#4542 OPEN] 工作区 .mcp.json 能被 'mcp list'/'mcp get' 检测，但在实际代理会话中未连接**
   `area:configuration, area:mcp`｜3 条评论｜👍 1
   检测与连接行为不一致——配置显示 Enabled/Workspace，但交互式/-i/-p 会话中不可用。MCP 配置可信度问题。
   https://github.com/github/copilot-cli/issues/4542

8. **[#3009 OPEN] 远程容器/Codespaces 中 MCP OAuth 回调不可达，且无手动粘贴令牌的回退方案**
   `area:authentication, area:mcp`｜2 条评论｜👍 1
   远程容器场景下 OAuth 重定向到浏览器无法访问的 localhost 回调，缺少手动令牌回退。影响 Codespaces/Dev Containers 用户。
   https://github.com/github/copilot-cli/issues/3009

9. **[#4531 OPEN] 从 Copilot CLI 启动 VS Code 时丢弃空 GIT_CONFIG_VALUE，破坏 Git 发现**
   `area:platform-windows, area:configuration`｜2 条评论｜👍 2
   CLI 向子进程导出的索引式 GIT_CONFIG 块中，core.fsmonitor 覆盖为空值，导致从 CLI 启动 VS Code 时 Git 发现失败。
   https://github.com/github/copilot-cli/issues/4531

10. **[#2555 CLOSED] 在 ACP 中支持所有斜杠命令**
    `area:non-interactive`｜2 条评论｜👍 3｜sebasmonia
    请求通过 ACP 协议公开所有斜杠命令（当前未公开）。已关闭，对非交互式/IDE 集成方有价值。
    https://github.com/github/copilot-cli/issues/2555

---

## 4. 重要 PR 进展

过去 24 小时内更新的 Pull Request 数量为 **0**，无 PR 动态可汇总。

---

## 5. 功能需求趋势

从本期 50 条 Issue 更新的标签与主题看，社区关注集中在以下方向：

- **MCP 生态成熟度**：多个 Issue（#4870、#4542、#3009、#1505、#4847）围绕 MCP 服务器发现、连接一致性、OAuth 认证、托管设置刷新。是当前最密集的方向。
- **IDE / 编辑器集成**：与 VS Code 的交互冲突频繁（#4095、#4847、#4531），涉及插件更新、MCP 重载、Git 发现等跨工具协作。
- **跨平台体验（尤其 Windows）**：`area:platform-windows` 出现在 #4095、#4531，涉及文件句柄、环境变量导出等平台特有问题。
- **模型选择与 Auto 模式可靠性**：#4459、#4445 反映 Auto 模式选择不可用推理等级/不可能模型，涉及 `area:models`。
- **插件与自定义代理规范**：Agent Plugins 1.0 下的代理发现（#4655）及版本发布中 `include-custom-instructions` 的引入，显示插件/代理规范正快速演进。
- **会话与状态管理**：会话恢复、sandbox 会话的 plan.md 写入权限（#4193）、会话切换导致挂起（#4319）。
- **网络与稳定性**：ERR_HTTP2_INVALID_SESSION（#3304）、Bash 工具 PTY 清理损坏（#1239）。

---

## 6. 开发者关注点

- **稳定性与可靠性优先**：网络重试无效（#3304）、PTY 子系统损坏（#1239）、会话挂起（#4319）等长期未解问题持续被追踪，是开发者最直接的痛点。
- **MCP 行为不一致**：配置"检测到"却"未连接"、CLI 与 VS Code 行为差异（#4870）、远程容器无令牌回退（#3009），降低了 MCP 配置的可信度。
- **平台与工具链摩擦**：Windows 上插件更新被 VS Code 占用文件句柄阻塞（点赞 22）、启动 VS Code 破坏 Git 发现，影响日常开发流。
- **Auto 模型模式不可靠**：选择不存在或不可用的推理等级导致工作丢失（#4445），开发者期望更安全的模型回退逻辑。
- **对显式控制与可读性的诉求**：自定义代理指令文件的按需启用、会话恢复的确定性行为，以及时间线推理文本可读性，均在本期版本中得到回应。

---

*数据来源：github.com/github/copilot-cli，统计时间 2026-09-17。*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报（2026-09-17）

## 1. 今日速览

今日无新版本发布，社区动态集中在 Issue 与 PR 上：新增 3 条 Issue（其中 2 条为当日创建的新 Bug），覆盖自动补全、子代理 OAuth 超时、以及 Kimi Desktop「梦境记忆」配置不写入三类问题；PR 侧仅 1 条更新，为社区贡献的 `PreToolUse` 安全网关示例。整体来看，稳定性问题（认证时序、配置持久化）是当前社区反馈的核心。

## 2. 版本发布

无新版本发布，本部分省略。

## 3. 社区热点 Issues

> 说明：过去 24 小时内更新的 Issue 共 3 条，以下为全部条目，未做凑数扩充。

1. **#2650 [OPEN] 子代理启动间歇性失败：OAuth token 请求 auth.kimi.ai 超时**
   链接: MoonshotAI/kimi-cli Issue #2650
   重要性：这是当日新提交的活跃 Bug，直接影响子代理（subagent）可用性。用户已完全认证且主会话正常，但启动子代理时会间歇性地在 `auth.kimi.ai` 出现 OAuth 连接超时，重试后又能成功，指向瞬时认证层问题。
   社区反应：创建当日，暂无评论与点赞，尚待维护者复现与定位。

2. **#2649 [OPEN] [Bug][Kimi Desktop]「chat 记忆 / 梦境记忆」开关拨动后不写入配置；疑似服务端功能门控未放行**
   链接: MoonshotAI/kimi-cli Issue #2649
   重要性：涉及 Kimi Desktop 3.2.9（macOS，Electron 43.6.0）的功能开关失效——UI 开关可拨动，但本地 `daimon/config.json` 中的 features 配置未随之写入，报告者怀疑是服务端功能门控未放行。属于典型的前后端配置一致性问题。
   社区反应：创建当日，暂无评论与点赞；报告者提供了较完整的环境信息（账号、用户 ID、联系邮箱），便于排查。

3. **#1276 [CLOSED] [bug] `@` 自动补全缺失文件**
   链接: MoonshotAI/kimi-cli Issue #1276
   重要性：该 Issue 自 2026-02-27 创建，历经约半年于今日关闭，是存量问题的清理。问题为 Kimi Code CLI 1.16.0 + kimi-k2.5（Linux 6.1）环境下，`@` 触发的文件自动补全遗漏文件。
   社区反应：累计 2 条评论，无点赞；今日状态转为 CLOSED，说明该问题已得到处理，可作为版本演进中的修复信号。

## 4. 重要 PR 进展

> 说明：过去 24 小时内更新的 PR 仅 1 条，以下为全部条目。

1. **#2648 [OPEN] examples: 新增 HOL Guard PreToolUse 网关**
   作者: kantorcodes | 创建: 2026-09-16 | 更新: 2026-09-16
   链接: MoonshotAI/kimi-cli PR #2648
   功能内容：新增一个聚焦的 `PreToolUse` 示例，在 Kimi CLI 的 `Shell` 命令执行前将其发送至 HOL Guard 校验。该 hook 会调用 `hol-guard command test <command> --json`，并仅在返回结果中 `classification.explicitly_benign` 为真时才继续执行。
   意义：这是社区对「工具执行前安全拦截」能力的一次示例性扩展，展示了利用 `PreToolUse` 钩子接入第三方命令安全分类器的可行路径，对关注 CLI 安全边界的开发者有参考价值。

## 5. 功能需求趋势

基于本期全部 Issue（3 条）可提炼出以下方向：

- **认证与网络稳定性**：#2650 暴露了 OAuth 认证请求的间歇性超时问题，属于服务可用性层面的关注点。
- **配置持久化与功能门控一致性**：#2649 反映出 Desktop 端 UI 状态与本地配置、服务端门控三者不同步的问题，涉及功能开关体系的可信度。
- **CLI 交互体验（自动补全）**：#1276 的 `@` 文件补全缺失问题虽已关闭，但说明补全准确性是长期存在的体验诉求。
- **工具执行安全**：PR #2648 显示社区正主动探索 `PreToolUse` 场景下的命令安全校验集成。

## 6. 开发者关注点

- **痛点一：间歇性失败难复现**。#2650 的「重试即可成功」特征，给定位与验证带来难度，是典型的时序/瞬时故障类痛点。
- **痛点二：开关状态「看起来能用但没生效」**。#2649 中 UI 可操作但配置未落盘，叠加服务端门控疑云，容易让开发者误判为客户端 Bug。
- **痛点三：高频交互环节的准确性**。#1276 的补全缺失问题曾在 1.16.0 上被报告，说明自动补全这类高频操作的可靠性备受关注。
- **正向信号：社区贡献安全扩展**。PR #2648 表明开发者不仅报告问题，也在围绕 `PreToolUse` 等扩展点贡献示例，安全与可控执行正成为 CLIC 生态的关注方向。

---

**数据边界提示**：本期过去 24 小时内 Releases 为 0、Issues 为 3 条、PRs 为 1 条，因此第 3、4 部分无法按要求各挑选 10 条，已按实际数据全量呈现，未作推测性补充。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报（2026-09-17）

## 今日速览

今日无新版本发布。社区讨论集中在**新会话模型/变体配置未生效**这一跨端一致性问题（Issue #38333、#49540 与 PR #49544 形成闭环）；同时 **Console 免费额度报错**批量出现（#49430、#49433、#49493），疑似版本校验逻辑问题。功能需求侧，TUI 内检索会话内容（#4714）以 35 条评论、55 个 👍 继续领跑，插件化状态栏与内联技能调用也保持高热度。

## 版本发布

过去 24 小时无新 Release。

## 社区热点 Issues

1. **#4714 [OPEN] TUI 会话缓冲区字符串查找**（35 评论 / 👍55）
   请求为 TUI 增加类似文本编辑器 find 的会话内搜索能力，是今日互动量最高的 Issue，长期高赞说明会话变长后的可检索性已是刚需。
   https://github.com/anomalyco/opencode/issues/4714

2. **#33264 [CLOSED] 信用卡被拒**（20 评论 / 👍7）
   支付/账单类问题获得大量讨论并已关闭，反映 Console 付费链路的用户摩擦。
   https://github.com/anomalyco/opencode/issues/33264

3. **#43199 [CLOSED] Mistral GLM-5.2 工具调用报错**（12 评论 / 👍11）
   Mistral 开始托管第三方开源模型后，手动添加 GLM-5.2 时工具调用失败；已关闭，是「新模型接入」类问题的代表案例。
   https://github.com/anomalyco/opencode/issues/43199

4. **#15617 [OPEN] 支持 `$skill-name` 内联技能调用**（10 评论 / 👍25）
   高赞功能请求，希望在任何位置以 `$skill-name` 语法内联调用技能，指向更灵活的技能编排方式。
   https://github.com/anomalyco/opencode/issues/15617

5. **#23539 [OPEN] 自定义状态栏组件的插件 API**（8 评论 / 👍5）
   作者明确说明该 Issue 整合了此前的 `ui.statusLine`（#8619）与 `ui.footer`（#18969）请求，是插件扩展能力的关键缺口。
   https://github.com/anomalyco/opencode/issues/23539

6. **#49008 [OPEN] OpenCode 无限循环自我回复**（7 评论）
   通过自定义 provider（llmapi.ai）接入 GLM-5.3-Flash 后陷入无限回复循环，属于严重的智能体失控类缺陷，需手动物理中断。
   https://github.com/anomalyco/opencode/issues/49008

7. **#48214 [OPEN] 提示词工具列表与会话中期运行时注册表不一致**（6 评论）
   生产环境 headless `opencode serve` 1.18.25 多租户场景下复现，且不涉及 MCP 变更，被作者认为比 #39902 更广泛，属架构级隐患。
   https://github.com/anomalyco/opencode/issues/48214

8. **#49430 [CLOSED] 提示「需要 OpenCode 1.17.0 或更新版本」才能使用免费额度**（5 评论）
   用户实际运行 1.18.x 却收到版本过低报错；同批次还有 #49433（免费额度仅限 OpenCode 内使用）与 #49493，构成今日最集中的一类问题。
   https://github.com/anomalyco/opencode/issues/49430

9. **#41359 [OPEN] todowrite 列表多轮失效、卡在单项并泄漏上个任务的待办**（4 评论）
   桌面端 todo 多轮不更新，切换任务时还会残留上一任务的条目，直接影响智能体任务追踪的可信度。
   https://github.com/anomalyco/opencode/issues/41359

10. **#38333 [OPEN] 选择 agent 后新会话使用了错误的模型**（4 评论）
    桌面端 1.18.4 下，选中带模型配置的 agent 不会应用其模型，需重新选择才生效；与 #49540、PR #49544 同源。
    https://github.com/anomalyco/opencode/issues/38333

## 重要 PR 进展

1. **#49544 [OPEN] fix(app): 将 agent 默认值应用到新会话草稿**
   修复 #38333：选择或切换 agent 时同时应用其配置的 model/variant，而不只是更新 agent 状态。
   https://github.com/anomalyco/opencode/pull/49544

2. **#49542 [CLOSED] feat(cli): 支持自定义 Console 登录**
   允许自托管用户与开发者登录不同的 Console，面向自部署场景的账号体系扩展。
   https://github.com/anomalyco/opencode/pull/49542

3. **#49502 [OPEN] 可配置 plans 目录 + 插件依赖安装可选退出**
   一次性关闭 #46189、#27786、#28174、#30337，其中 #30337 的启动卡死根因被彻底移除（新项目不再默认安装插件依赖）。
   https://github.com/anomalyco/opencode/pull/49502

4. **#48729 [CLOSED] fix(session): 让非 Claude 模型的 todo 列表保持最新**
   修复 #27560：非 Anthropic 提示词路径的模型收不到更新待办的指令，导致任务完成后仍停留 `in_progress`；已用 Qwen3 经 OpenAI 兼容 provider 复现。
   https://github.com/anomalyco/opencode/pull/48729

5. **#47907 [OPEN] 通过 `OPENCODE_WEB_UI_TITLE` 配置 Web UI 标题**
   新增环境变量覆盖页面 `<title>`，关闭 #47906，便于多实例自托管部署区分。
   https://github.com/anomalyco/opencode/pull/47907

6. **#49527 [CLOSED] fix(console): Union Alpha 设为不限量**
   让 `union-alpha` 豁免 Zen 免费额度限流器，并补充回归测试，由 @heimoshuiyu 请求、机器人提交。
   https://github.com/anomalyco/opencode/pull/49527

7. **#42927 [CLOSED] feat(tui): 在 token 计数与侧边栏显示上下文窗口上限**
   关闭 #42929，可能同时满足 #13003，让用户直观看到已用/可用上下文额度。
   https://github.com/anomalyco/opencode/pull/42927

8. **#49359 [OPEN] fix(installer): 尊重安装器目录偏好**
   修复安装脚本忽略文档所述目录设置的问题，一次性关闭 #42974、#43772、#47649。
   https://github.com/anomalyco/opencode/pull/49359

9. **#49528 [CLOSED] fix(tui): 解绑后台快捷键**
   移除 `session.background` 默认的 `Ctrl+B` 绑定，保留其作为提示符光标左移键，并同步更新文档默认值与 footer 预期。
   https://github.com/anomalyco/opencode/pull/49528

10. **#49537 [OPEN] docs(ecosystem): 收录 oos —— 跨项目会话搜索 TUI**
    将 Go 编写的 `oos` 加入 Ecosystem 项目表，它直接读取本地会话数据库，对所有项目的会话做模糊查找。
    https://github.com/anomalyco/opencode/pull/49537

## 功能需求趋势

- **TUI/会话内交互增强**：会话缓冲区查找（#4714）、`/cd` 目录切换与 `change_directory` 工具（#43223）、项目级会话切换器（#49543）、跨项目会话搜索（PR #49537）——围绕「长会话 + 多项目」的导航与检索是最大需求簇。
- **插件与扩展能力**：自定义状态栏组件的插件 API（#23539）、内联技能调用（#15617），社区希望把 UI 与技能编排开放给插件。
- **新模型/provider 接入**：Mistral 托管的 GLM-5.2 工具调用报错（#43199）、GLM-5.3-Flash 无限循环（#49008），第三方与自建 provider 的兼容性持续承压。
- **模型/变体配置正确性**：新会话 agent 模型未生效（#38333、#49540）、`model.json` 中持久化的 per-model variant 覆盖 `agent.variant`（#38363）。
- **任务状态（todo）可靠性**：桌面端 todo 失效与跨任务泄漏（#41359）、非 Claude 模型不标记完成（#27560）。
- **运行时与工程化**：捆绑 Bun 从 1.3.14 升级到 1.4.2（#44945）、可配置 plans 目录与插件依赖安装开关（PR #49502）。

## 开发者关注点

- **免费额度报错集中爆发**：多个用户在 1.18.x / 1.18.30、1.3.17 等版本上收到「需要 1.17.0 或更新版本」或「免费额度只能在 OpenCode 内使用」的提示（#49430、#49433、#49493），版本校验与额度判定逻辑疑似存在误判，需优先排查。
- **配置优先级不透明**：`agent.<name>.variant` 在 TUI 主 agent 上不生效，尽管 `GET /config` 已返回新值（#38363）；`model.json` 持久化状态遮蔽配置文件，属于难排查类型的问题。
- **跨端一致性欠缺**：同一个「新会话模型」缺陷在桌面端（#38333）与 Web 端（#49540）分别出现，说明 agent 默认值的应用逻辑未统一收敛。
- **智能体可控性**：无限自我回复（#49008）与提示词工具列表漂移（#48214）都指向会话运行时的可观测与控制边界，开发者希望有明确的中断与一致性保障。
- **上下文与成本可视化**：上下文窗口上限显示（PR #42927）、DeepSeek V4 Flash 用量显示与营销文案不一致（#49517）反映出用户对额度与消耗的透明度诉求。
- **安装与自托管体验**：安装器忽略目录偏好（PR #49359）、自定义 Console 登录（PR #49542）、Web UI 标题配置（PR #47907）显示自托管与多实例部署群体在持续扩大。

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报 · 2026-09-17

数据来源：github.com/badlogic/pi-mono（过去 24 小时更新）

## 1. 今日速览

今日无新版本发布，社区动态集中在**稳定性与可靠性**：Agent 循环在 provider 流中断时挂死（#8331）、上下文压缩（compaction）在多家模型上连续报错（#9512、#9652、#9579）成为最受关注的问题簇。PR 侧以小型修复为主，TUI 渲染崩溃、剪贴板非 ASCII 乱码、跨平台测试等补丁快速合入；同时 `pi.on(...)` 退订机制与 prompt cache warming 等基础设施改进正在推进。

## 2. 版本发布

过去 24 小时无新 release。

## 3. 社区热点 Issues

1. **#8331 [OPEN] Provider 流中途停滞导致 Agent 循环永久挂死**（评论 6，👍 2）
   Anthropic 529 过载窗口期间，4 个长会话卡死在 turn 中途：SSE 流停止推送事件但永不关闭，`for await` 无限等待。这是生产环境中最致命的一类问题，评论数最高。
   https://github.com/earendil-works/pi/issues/8331

2. **#9512 [OPEN] GPT-6 Astra max reasoning 下压缩触发摘要输出上限**（评论 4）
   `openai/gpt-6-astra` 在 `max` reasoning 下，上下文溢出恢复因摘要"命中 token 上限"而失败，直接影响长会话可用性。
   https://github.com/earendil-works/pi/issues/9512

3. **#9652 [OPEN] Claude Fable 因 thinking 块转录拒绝压缩**（评论 4，👍 1）
   `serializeConversation` 将 thinking 块写入摘要 prompt，被 Anthropic 的 `reasoning_extraction` 分类器拒绝，`/compact` 失败。涉及推理模型与压缩流程的兼容性。
   https://github.com/earendil-works/pi/issues/9652

4. **#9579 [OPEN] 溢出图片恢复固定 16 MiB 预算超出小限额 provider**（评论 4）
   pi 0.85.1 中，请求体限制 6 MiB 的 provider 返回 `request_too_large`，但 `capImagesToByteBudget()` 固定 16 MiB，重试仍然超限——压缩重试逻辑未能真正收敛。
   https://github.com/earendil-works/pi/issues/9579

5. **#9566 [CLOSED] models.json 重复 id 导致 context size 回退 128k**（评论 4，👍 2）
   自定义 provider 条目 id 与已暴露模型匹配时，默认 128k 上下文及错误的 cost/input/maxTokens 被采用。对自建 provider 用户影响明显。
   https://github.com/earendil-works/pi/issues/9566

6. **#9645 [OPEN] Azure 需支持 Chat Completions 部署**（评论 3）
   当前 `azure-openai-responses` 仅实现 Responses API，Foundry 上的 DeepSeek V4 Pro 等非 OpenAI 模型无法使用。属于新模型接入的阻塞项。
   https://github.com/earendil-works/pi/issues/9645

7. **#9664 [CLOSED] openai-responses 经翻译网关第二轮 400**（评论 3）
   网关将 Responses 调用翻译为 Chat Completions 时，因 `output_text` vs `text` 字段差异导致第二轮请求 400。兼容层互通性问题。
   https://github.com/earendil-works/pi/issues/9664

8. **#9654 [CLOSED] read 工具即使只读一行也加载整个文件**（评论 3）
   `read` 在应用 `offset`/`limit` 前将全文件读入内存，大文件单行读取可能崩溃。显存/内存类性能隐患。
   https://github.com/earendil-works/pi/issues/9654

9. **#9686 [CLOSED] 小图片却报"图像内容不能超过 30 MB"**（评论 2）
   使用 `@narumitw/pi-goal` 与 DeepSeek v4.1 Flash 时，查看小图即触发 agent error。图片大小校验与实际内容不符。
   https://github.com/earendil-works/pi/issues/9686

10. **#9681 [CLOSED] stopReason "toolUse" 却无 tool_use 块，回合静默结束**（评论 2）
    Anthropic 返回 `stop_reason: "tool_use"` 但 content 为空时，pi 记录空助手消息后找不到工具调用，表现为"挂起"。与 #8331 同属静默挂死类问题。
    https://github.com/earendil-works/pi/issues/9681

## 4. 重要 PR 进展

1. **#7610 [OPEN] 新增 LLM Gateway 与 LLM Gateway DevPass provider**
   以 `openai-completions` 内置 provider 形式接入 OpenRouter 式路由，替代被自动关闭的 #7480。
   https://github.com/earendil-works/pi/pull/7610

2. **#9630 [OPEN] coding-agent 事件处理器支持退订**
   `pi.on(...)` 增加 unsubscribe；每次 dispatch 先复制处理器列表，保证增删不影响在途分发。
   https://github.com/earendil-works/pi/pull/9630

3. **#9692 [CLOSED] TUI 溢出渲染行改为裁剪而非崩溃**
   `TuiMainScreen` 差分渲染中，单行超出终端宽度即抛未捕获异常并崩溃整个会话，现改为裁剪。
   https://github.com/earendil-works/pi/pull/9692

4. **#9682 [CLOSED] 修复 macOS pbcopy 回退破坏非 ASCII 文本**
   修复 UTF-8 被错误转换导致的 `—`→`‚Äî`、`José`→`Jos√©` 等乱码。
   https://github.com/earendil-works/pi/pull/9682

5. **#9677 [CLOSED] 阻止压缩队列回滚重放已接受消息**
   原实现用首个排队 prompt 的整个 agent-run promise 作为发送确认，导致回滚后重放已接受消息。
   https://github.com/earendil-works/pi/pull/9677

6. **#9662 [CLOSED] 用户 bash hook 出错时 fail-closed**
   `user_bash` 处理器抛异常时，`!`、`!!` 及 RPC bash 命令不再回退到本地 shell，属文档化的破坏性行为变更。
   https://github.com/earendil-works/pi/pull/9662

7. **#9668 [OPEN] 实验性 prompt cache warming**（WIP）
   由 mitsuhiko 提交，尝试保持 prompt 缓存热度，可能对成本与延迟有实质影响。
   https://github.com/earendil-works/pi/pull/9668

8. **#9548 [CLOSED] 会话中途的 system message**
   将 system prompt 文本与工具变更纳入 transcript，而非静默重写起始条件，可记录指令/工具变更并在恢复会话后还原状态。
   https://github.com/earendil-works/pi/pull/9548

9. **#8635 [OPEN] lazy setup 期间保留 aborted stop reason**
   将请求 abort signal 透传至 lazy stream setup 包装层，请求已中止时把 setup 失败上报为 aborted，并补回归测试。
   https://github.com/earendil-works/pi/pull/8635

10. **#9694 [CLOSED] 测试更新 DeepSeek flash 模型引用至 v4**
    目录将 `deepseek-flash` 更名为 `deepseek-v4-flash`，旧 id 导致 `tsgo --noEmit` 失败，更新三处引用。
    https://github.com/earendil-works/pi/pull/9694

（#9693 同类：`formatCwdForFooter` 测试在 Windows 上因硬编码 `/` 失败，改用 `node:path` 的 `sep`。）

## 5. 功能需求趋势

- **新模型与新 provider 接入**：DeepSeek V4 / V4.1 Flash、GPT-6 Astra、Claude Fable、GMI Cloud（#9685）、LLM Gateway（#7610）、Azure Chat Completions（#9645）、Vercel AI Gateway（#9676）密集出现，说明模型生态扩张速度已超过内置适配的跟进速度。
- **多 provider 兼容层互通**：openai-responses 与 Chat Completions 翻译网关之间的字段契约（output_text/text、usage in streaming、空签名 thinking）反复出问题（#9664、#9665、#9680、#9676）。
- **上下文压缩与溢出恢复的健壮性**：本期最集中的问题簇（#9512、#9652、#9579、#9677），核心是把压缩失败从"静默失败"变成可恢复。
- **扩展与事件 API 能力**：session replacement API（#5952）、事件退订（#9630）、bash hook 语义（#9662）显示扩展开发者对生命周期控制的需求上升。
- **TUI/终端体验细节**：折叠工具卡仅显示标题（#9661）、"跳转最新消息"悬浮层抖动（#9136、#9666）、HStack 无用渲染（#9659），偏体验打磨而非功能。

## 6. 开发者关注点

- **静默挂死是最强痛点**：provider 流不关闭（#8331）、空 tool_use 响应（#9681）都表现为"Agent 卡住但不报错"，这类问题缺少超时/看门狗机制，对长会话用户危害最大。
- **压缩链路脆弱**：reasoning/thinking 块被转录进摘要 prompt 会触发上游分类器拒绝（#9652），固定字节预算使重试无法收敛（#9579），摘要输出上限拦截恢复（#9512）——压缩一旦失败，用户往往只能放弃会话。
- **配置回退静默且错误**：models.json 重复 id 导致上下文与成本参数回退到默认值（#9566），且无任何提示。
- **资源使用与边界值不匹配**：read 全量加载文件（#9654）、图片 16 MiB 固定预算（#9579）、30 MB 误报（#9686），反映出多处硬编码常量未随 provider 差异调整。
- **平台与编码细节仍会咬人**：macOS pbcopy 破坏非 ASCII（#9684/#9682）、Windows 路径分隔符导致测试失败（#9693），跨平台一致性仍需持续投入。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报（2026-09-17）

## 1. 今日速览

今日发布 **v0.24.0 正式版**（含 Desktop 版与 nightly 构建），核心变更为破坏性调整：命令钩子中的项目目录变量改由 bash 展开。社区讨论集中在两类问题上：一是**上下文与 token 管理**的系统性缺陷（一组由 @yiliang114 提交的关联 issue），二是 **VS Code 远程开发场景**下 webview 无法连接 workspace daemon。会话生命周期与工具调度器的稳定性问题也获得较多关注。

---

## 2. 版本发布

**v0.24.0** — 正式版。亮点部分仅指向完整变更列表，未提供独立摘要。

**Breaking Changes**
- `fix(core)!`: 命令钩子（command hooks）中的项目目录变量改由 bash 展开，而非由 Qwen Code 处理 — PR [#11864](https://github.com/QwenLM/qwen-code/pull/11864)（@qqqys）。使用钩子拼接路径的用户需确认现有脚本行为是否受影响。

**同期发布**
- `v0.24.0-nightly.20260916.b8def02aad`：nightly 构建，包含 ACP 边界验收文档记录（[#12024](https://github.com/QwenLM/qwen-code/pull/12024)）、CI 发布导出等待修复等。
- `desktop-v0.24.0`（Qwen Code Desktop）：包含 ACP 权限队列按会话隔离（[#11802](https://github.com/QwenLM/qwen-code/pull/11802)）、channels 共享输出模式等。

---

## 3. 社区热点 Issues

1. **[#12091](https://github.com/QwenLM/qwen-code/issues/12091)（P1，OPEN）** — 对活跃会话执行 `sessions/delete` 会删除其 transcript，但仍在写入的 writer 会重建无头文件，导致会话永久损坏（degraded_history、自动续接失效）。属于数据完整性级缺陷，影响会话管理可信度。

2. **[#11976](https://github.com/QwenLM/qwen-code/issues/11976)（P1，CLOSED）** — VS Code Remote（Container）下 webview 因动态端口绑定未使用 `asExternalUri` 而无法连接 workspace daemon。已由 [#11983](https://github.com/QwenLM/qwen-code/pull/11983) 修复并随 companion 0.24.0 发布。

3. **[#12023](https://github.com/QwenLM/qwen-code/issues/12023)（P1，CLOSED）** — 中文用户报告 VS Code 插件在 SSH 远程开发时报"工作区加载失败/无法连接工作区服务"。与上条同源，是远程开发场景的高频阻塞问题。

4. **[#12029](https://github.com/QwenLM/qwen-code/issues/12029)（P2）** — 以"上下文窗口百分比"表达的两处预算随窗口增大而失效：大窗口下 ToolSearch 预加载从不触发、常驻上下文告警从不发出。涉及长上下文模型的成本控制逻辑方向性错误。

5. **[#12030](https://github.com/QwenLM/qwen-code/issues/12030)（P2）** — 扩展的 context 文件被无条件拼入每个请求的 system prompt，无路径门控、无预算、无归因。扩展生态扩张后上下文成本会线性上涨。

6. **[#12033](https://github.com/QwenLM/qwen-code/issues/12033)（P2）** — `/context` 分类明细不闭合：skills 列表未归因、messages 来自缓存减法、启动前奏未计入。已于 2026-09-17 重新界定范围。

7. **[#12048](https://github.com/QwenLM/qwen-code/issues/12048)（P3）** — 存在非 function 类型工具时上下文用量遥测被整体丢弃，且混用两套 token 估算器（仅遥测，不影响用户可见数字）。

8. **[#10689](https://github.com/QwenLM/qwen-code/issues/10689)（P1）** — 通过 OpenAI 兼容代理使用 `moonshot/kimi-k3` 时反复报 "malformed tool call" 并耗尽 5 次重试。第三方模型路由的兼容性痛点。

9. **[#11851](https://github.com/QwenLM/qwen-code/issues/11851)（P1，安全）** — `isAsyncOperator` 将 `\r/\v/\f/\u00a0` 视为 bash 词分隔符，导致一条 Bash allow 规则可能覆盖第二条命令。属权限绕过风险，建议优先处理。

10. **[#10887](https://github.com/QwenLM/qwen-code/issues/10887)（P1）** — 工具反复返回相同错误（如 `git remote -v` 退出码 128）时无早期终止机制，会话在死循环中消耗 5–14M tokens。

11. **[#8622](https://github.com/QwenLM/qwen-code/issues/8622)（P1，CLOSED）** — 0.21.6 回归：`PreToolUse`/`PostToolUse`/`PreCompact`/`SessionStart` 钩子从不触发，仅 `UserPromptSubmit` 与 `Stop` 工作。

12. **[#6321](https://github.com/QwenLM/qwen-code/issues/6321)（P2，CLOSED）** — `PreToolUse` 钩子返回 `permissionDecision: "ask"` 被静默拒绝，从不弹出确认提示，与文档承诺不符。

---

## 4. 重要 PR 进展

1. **[#12069](https://github.com/QwenLM/qwen-code/pull/12069)** — 保持 `CoreToolScheduler` 在回调标识变化时稳定，避免后续 `schedule()` 并行启动第二个调度器。对应 issue [#12061](https://github.com/QwenLM/qwen-code/issues/12061)。

2. **[#11711](https://github.com/QwenLM/qwen-code/pull/11711)**（@wenshao） — 为普通 subagent 增加容器执行后端（`QWEN_AGENT_EXECUTION_BACKEND=docker|podman`），面向 Unix 宿主的隔离执行。

3. **[#11242](https://github.com/QwenLM/qwen-code/pull/11242)** — Browser SDK 通过 Chrome Native Messaging 本地主机与 Qwen Chrome 扩展，接入用户现有 Chrome。

4. **[#11163](https://github.com/QwenLM/qwen-code/pull/11163)**（@wenshao） — Web Shell 工作区 git popover 新增 **Manage Remotes** 面板，可查看与配置 remote。

5. **[#11816](https://github.com/QwenLM/qwen-code/pull/11816)** — Web Shell 支持为分支会话启用可选 worktree。

6. **[#12081](https://github.com/QwenLM/qwen-code/pull/12081)**（@qqqys） — 让 http/prompt/function 钩子运行器如实上报 `HookExecutionResult.outcome`，修复钩子进度总线把失败报成成功的问题。

7. **[#11651](https://github.com/QwenLM/qwen-code/pull/11651)** — 修复 DashScope 缓存前缀：自动重挂的图片随历史增长移至请求尾部，破坏了含缓存断点的复用。

8. **[#12087](https://github.com/QwenLM/qwen-code/pull/12087)** — 修复 omni 媒体错误路径脱敏：文件系统重新拼写路径时（大小写/短名等）已知路径未被替换，可能泄露绝对路径。

9. **[#10835](https://github.com/QwenLM/qwen-code/pull/10835)** — MCP 工具返回的超大图片统一走与磁盘读图相同的视觉预算，杜绝截图绕过体积限制。

10. **[#11857](https://github.com/QwenLM/qwen-code/pull/11857)** — CI 评审跳过 diff 逐字节未变的 push（典型场景为 "Update branch" 合并 main），减少无效评审。

**其他值得留意**：修复 CLI 启动时输出语言文件不可写导致崩溃（[#10455](https://github.com/QwenLM/qwen-code/pull/10455)）；修复展开的 OpenTUI 确认框溢出视口（[#11658](https://github.com/QwenLM/qwen-code/pull/11658)）；VP 模式短内容底部对齐（[#9305](https://github.com/QwenLM/qwen-code/pull/9305)）。

---

## 5. 功能需求趋势

- **上下文与 token 管理**：本日最集中的方向。围绕 [#12028](https://github.com/QwenLM/qwen-code/issues/12028) 派生出多条 issue，覆盖 `/context` 归因准确性、扩展上下文预算、百分比预算随窗口放大而失效、上下文遥测丢失。社区诉求是"可见、可控、可归因"的上下文成本。
- **IDE 集成与远程开发**：VS Code Remote / SSH / Dev Container / WSL 场景的 webview→daemon 连通性成为成组问题，并有后续覆盖面任务（[#12059](https://github.com/QwenLM/qwen-code/issues/12059)）。
- **会话生命周期与持久化**：删除活跃会话损坏 transcript（[#12091](https://github.com/QwenLM/qwen-code/issues/12091)）暴露会话管理语义不完整。
- **执行隔离与安全**：subagent 容器化（[#11711](https://github.com/QwenLM/qwen-code/pull/11711)）、Bash 权限规则解析漏洞（[#11851](https://github.com/QwenLM/qwen-code/issues/11851)）、远程窗口权限队列按会话隔离。
- **钩子/事件系统可靠性**：多条 issue 与 PR 指向钩子未触发、决策被静默忽略、执行结果上报失真。
- **浏览器自动化**：Chrome Native Messaging 方案（[#11242](https://github.com/QwenLM/qwen-code/pull/11242)）。
- **第三方模型与代理兼容**：OpenRouter 预设头部错误（[#12072](https://github.com/QwenLM/qwen-code/issues/12072)：发送 `X-OpenRouter-Title` 而非 `X-Title`）、OpenAI 兼容代理下的畸形工具调用。

---

## 6. 开发者关注点

- **失败不留痕、错误被吞**：钩子失败上报为成功、`permissionDecision: "ask"` 被静默拒绝、缺失早期终止导致死循环烧掉数百万 token——开发者对"系统假装一切正常"的不信任感明显。
- **性能与成本的可观测性缺口**：遥测被丢弃、token 估算器混用、`/context` 明细不闭合，使开发者无法判断成本从何而来。
- **远程/容器化开发体验**：VS Code Remote、SSH、WSL 下插件不可用是直接的采用阻塞点，且修复后仍有覆盖面缺口（转发的端口 Host 门控、IPv6 CSP）。
- **权限与安全边界**：Bash allow 规则可被 `\r/\v/\f/\u00a0` 绕过、路径脱敏在 Windows 或文件系统重拼写时失效，属于安全相关的高优先级反馈。
- **破坏性变更的迁移提示**：v0.24.0 钩子变量展开方式的变更需要用户在脚本层面确认，日报建议随版本附迁移说明。
- **评审与 CI 噪声**：deferred review findings、autofix/needs-human 标签的长期挂起（如 [#11134](https://github.com/QwenLM/qwen-code/pull/11134)、[#11001](https://github.com/QwenLM/qwen-code/pull/11001)），反映自动化流程与人工评审之间的衔接成本。

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI 社区动态日报（2026-09-17）

> 数据来源：github.com/Hmbown/DeepSeek-TUI（仓库实际引用为 Hmbown/Codewhale）

## 1. 今日速览

今日无新版本发布，社区讨论集中在 0.9.14 重构收尾与 v0.9.14 可靠性缺陷修复上。最受关注的是 EPIC-005 TUI crate 拆分总纲（29 条评论）持续推进，同时多个生产环境 bug（会话恢复、子代理写入争用、steer 回执虚假投递）已被关闭修复。Provider 生态继续扩张，ModelScope、AICraft 等 OpenAI 兼容供应商的接入 PR 集中落地。

## 2. 版本发布

过去 24 小时无新 Release。

## 3. 社区热点 Issues

1. **[#5316 [OPEN] EPIC-005: CodeWhale TUI Crate Decomposition](https://github.com/Hmbown/Codewhale/issues/5316)** — TUI crate 拆分总纲，评论数最高（29 条），关联 Core execution plan 的 C03–C10 阶段，是整个重构工作的协调中枢。
2. **[#5586 [OPEN] Decompose the mega files（lib.rs 18.7k / config.rs 12.3k 等）](https://github.com/Hmbown/Codewhale/issues/5586)** — 巨型文件拆分，属于 C09 执行阶段，直接决定编译与可维护性上限。
3. **[#6207 [CLOSED] session picker 拒绝保存的会话](https://github.com/Hmbown/Codewhale/issues/6207)** — TUI 打开已保存会话时报「属于另一个 Runtime host」，影响核心使用路径，17 条评论后已关闭。
4. **[#6034 [OPEN] TUI 拆分被 crate::config 阻塞：118/128 模块形成 727,748 行单一组件](https://github.com/Hmbown/Codewhale/issues/6034)** — 揭示了拆分工作的真实瓶颈，是判断重构进度的关键数据点。
5. **[#6185 [CLOSED] Resume 后空 transcript，工具调用修复每次加载重复执行](https://github.com/Hmbown/Codewhale/issues/6185)** — 强制退出后恢复会话丢历史，且修复结果未持久化，属数据一致性问题。
6. **[#6278 [CLOSED] 写入声明争用禁止 N 个 worker 写同一 root 下的不相交文件](https://github.com/Hmbown/Codewhale/issues/6278)** — 当前协调机制禁止了最自然的并行 fan-out 模式，直接影响子代理生产力。
7. **[#6282 [CLOSED] 子代理工具结果在捕获时限流（1 MiB / 10k tokens）](https://github.com/Hmbown/Codewhale/issues/6282)** — 生产事故：worker 分块读取 542KB 文件烧掉 638k input tokens 后死亡且零产出。
8. **[#6244 [CLOSED] Fleet 角色选择器歧义导致 agent 生成失败（生产 cw:768b024a）](https://github.com/Hmbown/Codewhale/issues/6244)** — 模型调用未带 role 时被「role:general is ambiguous」阻断，属工具边界的可用性缺陷。
9. **[#6036 [OPEN] "Fleet" 与 "agent" 概念重复存储，成员角色/模型固定/路由书签混杂](https://github.com/Hmbown/Codewhale/issues/6036)** — 创始人直接提出的数据模型混乱问题，涉及长期架构方向。
10. **[#6187 [OPEN] MCP 无连接监管：死掉的 server 仍是 'ready'，无自动重连与 list_changed](https://github.com/Hmbown/Codewhale/issues/6187)** — MCP 集成的可靠性缺口，用户明确反馈「我们不知道它什么时候断」。

其他值得留意：#6289（移除 ProviderSetupTemplate，让命名 OpenAI 兼容主机成为普通 provider）、#6139（app-server 无法执行 turn）、#6144（session_manager 与 codewhale-state 的会话真相归属）、#4173（去硬编码 model/provider/tool 注册表：81 模型 / 31 provider / ~52 工具）。

## 4. 重要 PR 进展

1. **[#6294 [CLOSED] feat(subagent): 在捕获时限制子工具结果（修复 #6282）](https://github.com/Hmbown/Codewhale/pull/6294)** — 采纳 codex 风格的限流方案，修复读取饥饿导致 worker 死亡的问题。
2. **[#6299 [CLOSED] Feat/modelscope support](https://github.com/Hmbown/Codewhale/pull/6299)** — 通过 OpenAI 兼容端点（api-inference.modelscope.cn/v1）内置 ModelScope，可访问 Qwen、DeepSeek、Kimi、GLM 等开源模型。
3. **[#6258 [CLOSED] Shoreline: TUI 重设计，重基于 main 而剔除无关提交](https://github.com/Hmbown/Codewhale/pull/6258)** — Shoreline 成为全新安装的默认界面，从 #6222 抢救出重设计提交。
4. **[#6286 [CLOSED] fix(tui): compaction 后保留 chat roles](https://github.com/Hmbown/Codewhale/pull/6286)** — 修复 compaction 后 `user → assistant(tool_calls) → tool → user` 被严格成对模板拒绝的问题。
5. **[#6288 [CLOSED] feat(providers): 新增 AICraft OpenAI 兼容 provider 模板](https://github.com/Hmbown/Codewhale/pull/6288)** — 落地 @BX166 的贡献（源自 #6171），保留原作者署名。
6. **[#6281 [CLOSED] feat(mcp): 协商协议版本 2025-06-18 + bundle 模式 dsh 转换器](https://github.com/Hmbown/Codewhale/pull/6281)** — 此前各接口均声明 2024-11-05，属 MCP 兼容性推进的第一步。
7. **[#6279 [CLOSED] fix(tui): recommended_plugins 每个 engine 仅提示一次](https://github.com/Hmbown/Codewhale/pull/6279)** — 以 per-Engine 门控限制追加式 `<recommended_plugins>` 片段无限增长。
8. **[#6284 [CLOSED] test(runtime): 固定中断 turn 的 pending 用户输入结算](https://github.com/Hmbown/Codewhale/pull/6284)** — 补齐 turn 终止路径中最后未覆盖的中断分支测试。
9. **[#6096 [CLOSED] feat(commands): 在 TUI session-export 切片采用 capability shapes（FEAT-025）](https://github.com/Hmbown/Codewhale/pull/6096)** — 将 `/export`（别名 `/daochu`）接入可移植命令契约，仅有结构性迁移。
10. **[#6171 [CLOSED] feat(providers): AICraft OpenAI 兼容 provider 模板（原始提交）](https://github.com/Hmbown/Codewhale/pull/6171)** — 与 #6288 同源的原始 PR，因 fork 推送问题由维护者代传。

## 5. 功能需求趋势

- **架构重构与 crate 拆分**：EPIC-005、#5586、#6034、#6139、#6144、#6145 构成 0.9.14 重构主线，核心诉求是消除 72 万行级巨型组件、明确 session 真相归属、统一命令契约。
- **去硬编码与注册表统一**：#4173（81 模型 / 31 provider / ~52 工具）与 #4166（ModelRegistry 与 RouteResolver 合并）代表可扩展性方向。
- **Provider 生态扩张**：ModelScope、AICraft 接入；#6289 主张取消 ProviderSetupTemplate 特例层，改为普通 provider。
- **子代理与并行执行**：#6278（写入争用）、#6282（结果限流）、#6244（角色歧义）指向多 worker fan-out 的可靠性。
- **MCP 集成**：#6187（连接监管）、#6281（协议版本协商）显示 MCP 正从「能连」走向「可运维」。
- **模型/Agent 概念模型**：#6036、#6038 围绕 Fleet 与 agent 的重复概念进行取舍。

## 6. 开发者关注点

- **恢复与持久化不可靠**：#6207、#6185 均涉及会话恢复失败或数据丢失，且 #6144 显示 TUI 与 app-server 读写不同的状态源。
- **并行协作的机制性阻碍**：写入声明争用（#6278）让最自然的并行模式无法实现，属机制设计问题而非配置问题。
- **成本失控与静默失败**：#6282 的 638k tokens 零产出事故说明单步无成本上限，75% 节流通知来得太晚。
- **错误信息不可自救**：#6272 指出写入争用拒绝信息未提及真正有效的 `release` 命令；#6244 的角色歧义同样在工具边界阻断调用。
- **虚假成功回执**：#6276 显示 runtime API 在引擎决定前即上报 steer 已投递，而被丢弃的 steer 仍被报告为已发送。
- **安全扫描自身受阻**：#6058 夜间安全扫描因 `GITHUB_CODEWHALE_SECURITY_PAT` 未配置而无法列出 CodeQL 告警。

</details>

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar) 自动生成。*