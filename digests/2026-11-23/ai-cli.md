# AI CLI 工具社区动态日报 2026-11-23

> 生成时间: 2026-11-23 22:04 UTC | 覆盖工具: 9 个

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

# AI CLI 工具生态横向对比分析报告（2026-11-23）

## 1. 生态全景

当前 AI CLI 工具已越过"能否跑通"的阶段，竞争焦点全面转向**稳定性和信任**：本日几乎所有工具的社区热点都集中在回归缺陷、静默失败与权限边界失控上，而非新功能。子代理（subagent）成为主战场——Claude Code、Gemini CLI、OpenCode、Copilot CLI 均在同一天讨论子代理权限绕过、挂起、用量统计与状态误报。配额与成本透明度是第二大共性情绪，付费用户对计费策略变更高度敏感。与此同时，云平台接入（Claude Code Code Mode）、MCP 协议完整性、ACP 外部 Agent 集成构成三条并行的基础设施演进线。

## 2. 各工具活跃度对比

| 工具 | Release | 热点 Issues（示例） | PR 动态 | 活跃度评级 |
|---|---|---|---|---|
| **Claude Code** | v2.1.331（Code Mode 多云端 + OIDC 分组） | 10 条热点；#47509 Team 档位 78 评论/204👍 | 仅 1 条（#95698 修复 Hook 引号） | 高（Issue 侧）/ 极低（PR 侧） |
| **OpenAI Codex** | 2 个 Rust 预发布（无 changelog） | 10 条；#37403 macOS 回归 69 评论/54👍 | 10+ 条（copyberry bot，均 CLOSED） | 极高 |
| **Gemini CLI** | v0.71.0-nightly | 10 条；#22323 状态误报 14 评论 | 10 条（含 2 笔 A2A 安全修复重叠） | 高（PR 质量密集） |
| **GitHub Copilot CLI** | v1.0.115-8 | 10 条；#2243 worktree 21👍、#4203 OAuth 6👍 | 仅 1 条（#5554 CLOSED） | 中高（Issue 集中） |
| **OpenCode** | v2.4.1 + v2.4.0（内置浏览器） | 10 条；#50206 DSML 18 评论、#33300 15👍 | 10 条（权限语义修复集中） | 高 |
| **Pi** | 无 | 10 条；#10956 cacheWarming 16 评论 | 10 条（petrroll 主导，多项 CLOSED） | 高（PR 密集）/ 无发版 |
| **Qwen Code** | 无 | 10 条；#17045 内核迁移 24 评论 | 10 条（event-bus 内核上线、Action parking 系列） | 高（架构级迭代） |
| **DeepSeek TUI** | 无 | 10 条；#7095 13 评论、大量 `[audit]` | 10 条（审计修复聚合） | 中高（质量收口期） |
| **Kimi Code CLI** | — | 过去 24 小时无活动 | — | 零活跃 |

> 注：数据仅反映当日社区摘要所披露的条目；Issues 数指"热点"条目而非全量。

## 3. 共同关注的功能方向

**① 权限与安全边界（覆盖面最广）**
- Claude Code：子代理未继承 `disallowedTools`（#78063）、PreToolUse 拒绝不上报父级（#76726）、Workflow 内层绕过钩子（#79953）——核心痛点是"静默失效而非安全失败"。
- Codex：只读轮次权限静默降级（#40698）、"never"策略静默阻断审批（#42139）。
- OpenCode：通配 deny 与窄范围 deny 叠加语义歧义（#65899/#65900）、插件绕过 browser skill 授权（#65817）。
- Gemini CLI：A2A 服务器补认证与路径遍历防护（#30417/#30420）、`excludeTools` 文档写法实际无效（#30305）、阻止 `git reset --force`（#22672）。
- Qwen Code：Managed Agent 文件/进程隔离（#15081）、API key 明文落盘（#18165）。
- 共性：开发者要求权限**可审计、可预期、fail-safe**，而非静默放行。

**② 子代理可靠性与可观测性**
- Gemini CLI：MAX_TURNS 误报 GOAL 成功（#22323）、generalist agent 永久挂起（#21409）、模型不主动用 skills（#21968）。
- Claude Code：子代理权限继承与 Hook 链路。
- Codex：subagent 昵称解析（#63444）、持续推进 subagent/memory/session 工作区（#61348）。
- Copilot CLI：子代理用量按配置名分组统计（v1.0.115-8 已落地）。
- 共性：子代理"挂起""误报成功""状态不可见"是信任断裂的三大来源。

**③ 配额与成本透明度**
- Claude Code：Team 缺 Max 20x 档位（#47509，当日最高热度）、1M 上下文触限 429 锁死会话（#56978）、需 token 耗尽 Hook（#55945）。
- Codex：独立 ChatGPT High 与 Codex/Work 配额（#58530，60👍 全榜最高）、用量 UX 误导（#62359）。
- OpenCode：订阅配额耗尽只能积分补充（#65798）、`/btw` 独立模型降本（#65060）。
- 共性：高负载/付费用户对"额度不透明 + 中断不可控"耐受度已见底。

**④ 上下文与计量的真实载荷脱节**
- Codex：内联图片 230 token vs 实际 4.2 MB（#41338）。
- Gemini CLI：宽泛 search 撑爆上下文（#29822）、工具超阈值返回 400（#24246）。
- Pi：压缩摘要从 17k 膨胀到 164k 字符（#12242）、大流式事件反复拼接（#12224）。
- 共性：token 计量与真实 payload 的落差直接威胁长会话稳定性与成本。

**⑤ 长会话/进程级健壮性**
- Pi：临时文件写满即崩（#10585）、max_output_tokens 截断破坏 WebSocket 续传（#12444）。
- Copilot CLI：僵尸锁文件导致会话无法复活（#4805）、MCP 服务器在会话切换时被静默丢弃（#4920）。
- Gemini CLI：web 搜索无超时导致挂起（#30415）。
- Qwen Code：工具调用参数被间歇性丢弃（#18197）。

**⑥ MCP 生态成熟度**
- Copilot CLI：OAuth 令牌不刷新（#4203）、Tasks 扩展两端不一致（#5540/#5555）、动态 headers 对标 Claude Code（#5524）。
- OpenCode：远程 MCP TLS 信任（#60039/#60041）、Figma OAuth 被 allowlist 拒（#65863）。
- Qwen Code：MCP elicitation 支持缺位（#17316）、Skills 声明 MCP 依赖（#17323）。
- DeepSeek TUI：MCP 11 个已验证缺陷（#7478）。
- 共性：MCP 从"能连"走向"协议完整 + 企业级认证"。

## 4. 差异化定位分析

| 维度 | 代表工具 | 定位特征 |
|---|---|---|
| **企业/云平台优先** | Claude Code | 唯一本日集成多云端 Code Mode（Bedrock/GCP/Foundry）与 OIDC 企业网关；面向 CTO/技术负责人等重负载团队用户（正因此 Team 档位不足才引发最大反弹） |
| **多端工作台化** | Codex | 桌面（Win/mac）+ iOS + IDE 全面铺开，转向"持续性工程工作区"（session/memory/subagent/协作 #61348/#62113），但回归面最广，稳定性成最大风险 |
| **Agent 体系原生** | Gemini CLI | `area/agent` 几乎垄断当日议题，子代理调度/可观测/评测是技术路线核心；A2A 服务器 + 借 Gemini bash 亲和性做零依赖沙箱（#19873），偏向 Agent 基础设施 |
| **终端工具链打磨** | Copilot CLI | 聚焦 TUI 确定性（斜杠命令选择、未读事件、subagent 显示）+ MCP 集成，与 GitHub 生态绑定最紧；明确对标 Claude Code 功能 |
| **桌面工作台演进** | OpenCode | v2.4.0 内置浏览器（导入 Chrome/Edge/Firefox/Safari 登录态）从"聊天壳"转向完整工作台，配合语音输入诉求（15👍） |
| **事件驱动内核重构** | Qwen Code | 1.0 Preview event-bus 内核 + Managed Agent action parking，走服务端会话生命周期与可复现性路线（turn 级不可变资源快照 #18178） |
| **性能/稳定极致** | Pi | 关注线性时间读取、流式效率、进程级崩溃容忍，偏底层工程严谨派（大量 P0 推理流问题 + 高密度 PR 修复） |
| **质量收口期** | DeepSeek TUI | 大批 `[audit]` R4–R22 审计 + 0.10.5 聚合修复 PR，处于系统性清债与 ACP 集成（0.10.3）阶段 |

**技术路线分叉**：Claude Code / Codex 走"云 + 多端全栈"；Gemini CLI / Qwen Code 走"Agent 内核 + 协议（A2A/MCP）"；Pi / DeepSeek TUI 走"底层健壮性 + 审计"；OpenCode / Copilot CLI 走"终端/桌面工作台体验"。

## 5. 社区热度与成熟度

**热度第一梯队**
- **Codex**：单日 10+ PR（虽多为 bot 提交）+ 两平台回归 + 60👍 计费议题，声量与问题量均最高；但 bot 主导的 CLOSED PR 居多，真实外部贡献密度存疑。
- **Claude Code**：Issue 情绪浓度最高（204👍 单条、78 评论），但 PR 侧极冷（仅 1 条），呈现"社区呼声高、外部贡献入口窄"的结构。
- **Gemini CLI / Pi / Qwen Code**：PR 质量密集且多为实质修复（Gemini 的安全加固、Pi 的 petrroll 系列修复、Qwen 的内核迁移），处于**快速迭代 + 主动收债**并行。

**快速迭代阶段**：Qwen Code（1.0 内核）、OpenCode（v2.4.x 桌面能力扩张但回归集中）、Gemini CLI（nightly 节奏 + Agent 体系）。

**成熟度信号**
- 相对成熟：Claude Code（发版纪律清晰，Issue 聚焦深度需求）、Codex（工程化 PR 流水线，尽管 bot 化）。
- 质量补课中：DeepSeek TUI（审计驱动）、Pi（长期静默失效问题集中清算）。
- 风险提示：OpenCode v2.4.0 发布当天即现 Windows 秒退、项目根解析为 `/` 等回归，建议升级前评估；Codex 三平台同日回归亦需观望。
- 熄火：Kimi Code CLI 当日零活动，需持续观察是否阶段性停滞。

## 6. 值得关注的趋势信号（对开发者/决策者的参考价值）

1. **"静默失败"是行业级信任危机，也是选型硬指标。** 从 Claude Code 的 Hook 静默失效、Pi 的 cacheWarming 不触发、Gemini 的 GOAL 误报、Copilot 的 MCP 服务器静默丢弃——多工具独立印证同一模式。**建议：评估工具时把"fail-safe / 可审计 / 可观测"列为首要维度，而非功能清单。**

2. **子代理治理将成为下一个平台级能力。** 权限继承、执行预算、状态上报、用量计量正在成为多家必答题；谁的子代理"可控可观测"，谁就能承接复杂生产工作流。

3. **配额经济正在重塑付费决策。** Codex 60👍、Claude Code 204👍 均为计费相关，说明**成本透明度直接影响留存**；若工具无法提供可预测的额度与可编程的配额事件（如 token 耗尽 Hook），重度用户将外流。

4. **MCP 与 ACP 是两条并行的互操作主线。** MCP 走向认证/协议完整（OAuth 刷新、Tasks 扩展、TLS 信任），ACP 走向外部 Agent 会话编排（DeepSeek TUI 0.10.3）。**建议：优先选择协议实现一致、认证可静默刷新的工具。**

5. **平台差异仍在扩大。** Windows（Copilot 锁/认证、OpenCode 秒退、Qwen `@` 补全）与旧 macOS（Codex Swift 运行时、OpenCode macOS 12 SQLite）反复出问题——**跨平台团队应按平台分别评估版本稳定性，谨慎跟进最新版。**

6. **上游依赖是隐性风险源。** Pi 因 models.dev 单次合并即 CI 失败（#12449），暴露对第三方模型目录的强依赖；**建议自建模型清单缓存与降级策略。**

7. **"生成候选 → 验证候选"是工作流质量新方向**（DeepSeek TUI #7250），预示下一阶段竞争将从"能生成"转向"能验证"。

---

*说明：本报告严格基于所提供的 2026-11-23 各工具社区摘要，未对未披露的指标（如总 Issue 数、star 数）作推断；Kimi Code CLI 当日无活动，未纳入横向比较的主体分析。*

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告（数据截止 2026-11-23）

> 说明：提供的 PR 数据中评论数字段均为 `undefined`、点赞均为 0，因此“关注度”排序改为依据可观测信号（更新活跃度、涉及核心 skill、修复关联 Issue 数量、影响范围）。所有结论仅基于所给材料。

## 1. 热门 Skills 排行（按可观测关注度）

1. **mcp-builder 修复（PR #1742，OPEN）**
   功能：适配 `mcp>=2.0.0` 中 `streamable_http_client` 重命名与自定义 headers 配置方式。
   热点：修复 MCP 生态升级兼容性，关联 #1668；2026-10-08 仍有更新，是活跃维护中的核心 skill。
   状态：open
   https://github.com/anthropics/skills/pull/1742

2. **skill-creator 触发器评测修复（PR #1298，OPEN）**
   功能：隔离 trigger evals，修复 Windows 下子进程 `select()` 失败与运行时错误被误判为非触发的问题。
   热点：与 Issue #556（trigger 率 0%）、#1352（多 worker 交叉匹配 UUID 导致假阴性）直接呼应，是社区最集中的 bug 区。
   状态：open
   https://github.com/anthropics/skills/pull/1298

3. **skill-creator 直接执行修复（PR #1681，OPEN）**
   功能：支持 `package_skill.py` 独立运行，修复 `ModuleNotFoundError` 与路径问题。
   热点：更新至 2026-11-19，为近期最活跃 PR 之一；反映 skill-creator 工具链易用性诉求。
   状态：open
   https://github.com/anthropics/skills/pull/1681

4. **webapp-testing 安全与元素识别修复（PR #1980 / #1976，OPEN）**
   功能：#1980 移除 `with_server.py` 的 `shell=True` 命令注入风险；#1976 修正 textarea/select 元素识别。
   热点：安全类修复通常优先级最高；两者分别关联 Issue #1891 等。
   状态：open
   https://github.com/anthropics/skills/pull/1980 · https://github.com/anthropics/skills/pull/1976

5. **docx 系列修复（PR #1792 / #1734，OPEN）**
   功能：#1792 将 LibreOffice 超时报告为错误并校验输出无修订标记；#1734 检测孤立批注。
   热点：文档类 skill 的静默失败问题是社区反复反馈的痛点。
   状态：open
   https://github.com/anthropics/skills/pull/1792 · https://github.com/anthropics/skills/pull/1734

6. **pyxel 复古游戏开发 skill（PR #525，OPEN）**
   功能：指导用 Python 创建、调试、验证复古游戏，支持无头输入驱动运行与逐帧检查。
   热点：自 2026-03 持续更新至 2026-11，属长周期社区贡献型新增 skill。
   状态：open
   https://github.com/anthropics/skills/pull/525

7. **xlsx 外部链接风险检测修复（PR #2019，OPEN）**
   功能：解析工作表级 defined names 与别名，修复 `external_links_at_risk` 假阴性，关联 #2013。
   热点：财务/表格场景的准确性问题。
   状态：open
   https://github.com/anthropics/skills/pull/2019

8. **文档排版质量控制 skill（PR #514，OPEN）**
   功能：防止孤词换行、孤行段落、编号错位等 AI 生成文档排版问题。
   热点：通用性强、影响面广的格式质量诉求。
   状态：open（创建于 2026-03-04，更新 2026-03-13，近期不活跃）
   https://github.com/anthropics/skills/pull/514

## 2. 社区需求趋势（来自 Issues）

- **Skill 信任与安全边界**：Issue #492（46 评论）指出社区 skill 以 `anthropic/` 命名空间分发，存在冒充官方、越权授权风险——生态治理类需求最热。
  https://github.com/anthropics/skills/issues/492
- **组织内 Skill 共享**：Issue #228（17 评论，👍8）希望 Claude.ai 支持组织级共享库，替代手动下载 `.skill` 文件再上传的流程。
  https://github.com/anthropics/skills/issues/228
- **评测与触发器可靠性**：#556（13 评论，👍7）、#1352（6 评论）反映 `run_eval.py` 触发率为 0%、多 worker 结果错误，本质是**测试/质量保障自动化**需求。
  https://github.com/anthropics/skills/issues/556 · https://github.com/anthropics/skills/issues/1352
- **上下文与 token 效率**：#1487 指出 `claude-api` 一次注入约 156k tokens 耗尽上下文；#202（CLOSED）批评 skill-creator 文档化而非可执行。指向 skill 应更精简、可操作。
  https://github.com/anthropics/skills/issues/1487 · https://github.com/anthropics/skills/issues/202
- **Agent 状态与治理模式**：#1329 提出 compact-memory（符号化压缩 agent 状态）；#1385 提出 Reasoning Quality Gate Pipeline（校准→对抗审查→交付验证）；#412（CLOSED）提案 agent-governance。反映**长会话管理与输出质量门禁**方向。
  https://github.com/anthropics/skills/issues/1329 · https://github.com/anthropics/skills/issues/1385 · https://github.com/anthropics/skills/issues/412
- **文档与格式质量**：#189（文档/示例插件安装重复内容，👍9）、#2064（theme-factory 描述未说明何时使用）、文档类脚本缺陷（#2018、#1868）。
  https://github.com/anthropics/skills/issues/189 · https://github.com/anthropics/skills/issues/2064
- **平台级账户功能**：#1143 请求支持修改账户邮箱以防工作区数据丢失（👍20，为所给数据中最高点赞）。
  https://github.com/anthropics/skills/issues/1143

## 3. 高潜力待合并 Skills

- **PR #1742（mcp-builder）**：修复明确的上游重命名，改动局部、风险低，落地可能性高。
- **PR #1681（skill-creator 直接执行）**：11-19 仍更新，作者同为核心 bug 修复者，活跃度高。
- **PR #1980（webapp-testing 移除 `shell=True`）**：安全类修复，通常优先合入。
- **PR #1975 / #1976 / #1977（gerardrecinto 系列）**：均为小型、附关联 Issue 的定点修复（pptx 参数校验、元素识别、wrapAround），合并门槛低。
- **PR #1997（skill-creator YAML frontmatter 解析）**：影响描述优化与评测正确性，与 #1298 形成互补修复簇。
- **PR #1792（docx 超时处理）**：修复误报成功问题，关联文档可靠性主线。
- **PR #2108（README 说明文档快照状态）**：纯文档澄清，附带可验证时间节点，合并阻力最小。

## 4. Skills 生态洞察

**当前社区最集中的诉求是“可被信任、可被可靠评测的 Skills”：一方面抢救 skill-creator 评测链路与 MCP/文档类核心 skill 的静默缺陷，另一方面要求命名空间安全与组织级分发治理。**

*注：本报告基于所给 2026-11-23 截止的部分数据（PR 前 20、Issues 前 15），评论数与点赞多为缺失值，排行采用替代性信号，不作为全量统计。*

---

# Claude Code 社区动态日报 — 2026-11-23

## 1. 今日速览

今日最大动态是 v2.1.331 发布，为终端会话新增 Amazon Bedrock、Google Cloud Agent Platform、Microsoft Foundry 与 AWS 上的 Claude Platform 的 Code Mode 支持，并为企业网关增加 `oidc.groups_jsonpath` 配置。社区侧，Team 计划缺少 Max 20x 等价档位的诉求持续发酵，已累积 78 条评论与 204 个赞，为当日热度最高 Issue。同时，子代理权限与 Hook 执行链路的多处"静默失效"问题集中被讨论，暴露出 agent 安全边界的薄弱点。

## 2. 版本发布

**v2.1.331**（[Release](https://github.com/anthropics/claude-code/releases)）
- 终端会话新增 Code Mode 支持，覆盖 Amazon Bedrock、Google Cloud's Agent Platform、Microsoft Foundry 以及 AWS 上的 Claude Platform。
- Claude apps gateway 新增 `oidc.groups_jsonpath`，可从对象列表的匹配条目中读取分组信息。

## 3. 社区热点 Issues

1. **#47509 [OPEN] Team 计划需要 Max 20x 等价档位** — 当前 Team 仅 Standard（1.25x Pro）与 Premium（6.25x Pro）两档，重度依赖 CLI 的 CTO/技术负责人等用户缺少高配额选项。78 评论、204 👍，社区呼声最强。[链接](https://github.com/anthropics/claude-code/issues/47509)

2. **#56978 [OPEN] 会话中途触达用量上限时缺少优雅处理** — Max 计划搭配 1M 上下文模型时，触限即被 429 锁定整个会话。影响长上下文工作流的可用性。[链接](https://github.com/anthropics/claude-code/issues/56978)

3. **#55945 [OPEN] 增加 token 耗尽触发的 Hook 并暴露恢复时间** — 希望对配额事件提供可编程钩子，便于自动化编排规避中断。[链接](https://github.com/anthropics/claude-code/issues/55945)

4. **#78063 [OPEN] subagent 未继承 disallowedTools** — 通过 Agent 工具派生的子代理可绕过受限工具，包括限制本应拦截的精确命令模式，属安全边界缺口。[链接](https://github.com/anthropics/claude-code/issues/78063)

5. **#76726 [OPEN] 子代理 PreToolUse 拒绝不向父级上报** — 且 Hook 载荷携带父会话 session_id，导致基于 deny Hook 的策略"静默失效、而非安全失败"。[链接](https://github.com/anthropics/claude-code/issues/76726)

6. **#79953 [OPEN] Workflow 内部 agent() 调用不受 PreToolUse 钩子与运行时预算约束** — 外层 Workflow 放行后无法对内部累积的 agent 调用施加限制。[链接](https://github.com/anthropics/claude-code/issues/79953)

7. **#81081 [OPEN] 会话启动时技能描述被静默截断** — 技能列表在尺寸预算下大量截断描述，影响技能发现与调用准确性，已复现。[链接](https://github.com/anthropics/claude-code/issues/81081)

8. **#78775 [OPEN] 桌面端会话时间范围筛选器回归** — 仅在 Group by 设为 State 时出现，Windows/macOS 双平台回归。[链接](https://github.com/anthropics/claude-code/issues/78775)

9. **#55854 [OPEN] 权限提示交互改进：数字键不再代表"No"** — 提议误触数字默认为 Yes 回退，反映 TUI 权限交互的误操作风险。[链接](https://github.com/anthropics/claude-code/issues/55854)

10. **#103592 [OPEN] Artifacts 每日 200 次发布上限阻碍设计迭代** — 建议批量发布或调整计数方式，涉及桌面端设计画布工作流。[链接](https://github.com/anthropics/claude-code/issues/103592)

其余值得留意的还有 **#111275**（macOS 上 Microsoft 365 Office 加载项安装后消失，集成类回归）、**#108890**（桌面端双向往语音对话需求，对标 Codex app）、**#89094**（多根 VSCode 工作区无法将新会话绑定到指定根目录）。

## 4. 重要 PR 进展

过去 24 小时仅 1 条 PR 更新：

1. **#95698 [OPEN] fix(plugins): 通过带引号路径的 bash 运行 ralph-wiggum 与 output-style 的 .sh 钩子** — 作者为 claude[bot]。三个内置插件将 Hook 注册为裸的、未加引号的脚本路径，本 PR 修正引号与调用方式，同时修复 ralph-wiggum / output-style 部分（Refs #95673，另修复 #78490 的一半）。[链接](https://github.com/anthropics/claude-code/pull/95698)

> 说明：由于当日仅此一条 PR 更新，无法凑满 10 条，故按实际数据呈现，不做补充。

## 5. 功能需求趋势

- **配额与成本管理**：Team 高价档位、会话中断的优雅降级、token 耗尽 Hook，构成本周最集中的需求簇。
- **Agent 安全与权限边界**：多个 Issue 指向子代理/工作流对 `disallowedTools`、PreToolUse Hook 的绕过或静默失效，权限继承与执行预算亟待统一。
- **IDE / 编辑器集成**：多根 VSCode 工作区的会话根目录绑定、终端补全导致焦点丢失（#96470）等体验问题。
- **桌面端与跨平台**：时间筛选回归、Office 加载项消失、每日发布配额，反映桌面/办公集成成熟度不足。
- **交互与本地化**：权限提示按键语义、热力图周起始日（#55915，ISO 8601 周一）。

## 6. 开发者关注点

- **"静默失效而非安全失败"**是当日最强的工程师情绪：Hook 与工具限制在子代理、Workflow 内层失效，且不向父级上报，直接威胁基于策略的强制管控。
- **高负载用户的配额焦虑**：Team 档位不足、1M 上下文会话被 429 锁死、缺少配额事件钩子，共同影响生产级工作流稳定性。
- **企业/云平台落地**：v2.1.331 的 Code Mode 云平台覆盖与 OIDC 分组配置，回应了多租户与企业网关的接入诉求。
- **可观测性与可预期性**：技能描述截断、权限提示误触、发布配额硬限制，均属"行为不透明"类痛点，开发者期待更明确的提示与可配置阈值。

---
*数据来源：github.com/anthropics/claude-code（截至 2026-11-23 更新）*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报 — 2026-11-23

## 1. 今日速览

今日社区焦点集中在**桌面端与移动端的稳定性回归**：Windows 桌面端连续出现启动卡死（MoAppHang），macOS 出现 Remote Control 线程无法恢复的回归问题，iOS 端 Codex 标签页崩溃。同时，围绕**用量配额透明度**（ChatGPT High 与 Codex/Work 独立额度）的讨论热度持续走高。PR 侧则是一批由 `copyberry[bot]` 提交的 TUI 与后端工程质量改进，多数已 CLOSED。

## 2. 版本发布

过去 24 小时发布两个 Rust 侧的预发布版本，均无详细更新说明：

- **rust-v0.172.0-alpha.2.1** — Release 0.172.0-alpha.2.1
- **rust-v0.171.0-alpha.13.2** — Release 0.171.0-alpha.13.2

> 注：两条 Release 正文仅包含版本号，未提供变更日志，无法判断具体内容。

## 3. 社区热点 Issues（10 条）

1. **[#37403](https://github.com/openai/codex/issues/37403)** [macOS][regression] 桌面端无法恢复 Remote Control / CLI 线程，报 `already has an active writer`（69 评论，👍54）— 今日热度最高。8 月更新后既有工作流失效，评论数与点赞数均显示影响面广，是当前最需优先修复的回归。

2. **[#58530](https://github.com/openai/codex/issues/58530)** 请求在 Plus 套餐保留独立的 ChatGPT High 与 Codex/Work 配额（37 评论，👍60）— 作者称 OpenAI 已于 11 月 9 日正式确认 12 月的变更计划。点赞数为全榜最高，反映付费用户对配额政策的高敏感度。

3. **[#31925](https://github.com/openai/codex/issues/31925)** 恢复 macOS 上 Option+Space 快速聊天（38 评论，👍58）— ChatGPT/Codex 应用合并后快捷键功能丢失，高赞说明这是高频交互习惯，属易被忽视的体验退化。

4. **[#61348](https://github.com/openai/codex/issues/61348)** 功能请求：将 ChatGPT + Work + Codex 打造为持续性的工程工作区，而非一次性任务（43 评论）— 涉及 subagent、session、memory、remote 多个标签，是跨度最大的架构级提案；但作者自述内容由 ChatGPT 汇编、非独立验证，参考时需谨慎。

5. **[#62731](https://github.com/openai/codex/issues/62731)** [Windows][26.1117.3838.0] 桌面端每次启动都挂起（MoAppHang，13 评论）— 空 `CODEX_HOME` 也可复现，排除本地配置因素，指向应用本体问题。

6. **[#63123](https://github.com/openai/codex/issues/63123)** Windows 桌面端启动后可操作约 3 秒即冻结（11 评论）— 与上条同日出现，事件 ID 1002，且等待链仅显示无响应的 ChatGPT.exe，提示 Windows 桌面端存在共性的启动/渲染阻塞。

7. **[#62944](https://github.com/openai/codex/issues/62944)** [macOS 13 Intel] `launch-services-helper` 以 minos 26.7 构建，在 Ventura 上崩溃循环（缺少 Swift runtime 符号）（6 评论）— 与 #18755、#32175 同类，构成 macOS 旧系统 + Swift 运行时符号缺失的系统性问题族。

8. **[#62899](https://github.com/openai/codex/issues/62899)** ChatGPT iOS 打开 Codex 标签页即崩溃（SwiftUI metadata EXC_BAD_ACCESS，iOS 27.2 Beta）（5 评论）— 11 月 21 日起突然出现，桌面端正常，定位范围明确。

9. **[#41338](https://github.com/openai/codex/issues/41338)** 内联图片输出仅计约 230 token 但实际传输 4.2 MB，导致基于 token 的上下文管理看不到真正卡死线程的载荷（18 评论）— 提供了实测数据，揭示了 token 计量与实际 payload 脱节的机制性缺陷，与 auto-compact 卡死问题相关。

10. **[#62195](https://github.com/openai/codex/issues/62195)** GPT-6.2 SOL 相比 GPT-6.1 SOL 在指令遵循、主动性与任务完成度上出现回归（5 评论，👍7）— 唯一直接针对模型行为质量的反馈，对选型决策有直接参考价值。

**其他值得留意**：#62359（用量额度 UX：误导性的 100% 可用、付费重置选项消失）、#40698（连续只读轮次中权限状态静默降级）、#42139（“Never ask”在 Full Access 下静默阻断审批提示）、#63290（今日新建，Windows ChatGPT Work 中“Ask for approval”置灰、缺少 Local/Cloud 选择器）。

## 4. 重要 PR 进展（10 条）

以下 PR 全部由 `copyberry[bot]` 于 2026-11-23 创建并已 **CLOSED**：

1. **[#63448](https://github.com/openai/codex/pull/63448)** 为 Codex 后端客户端增加 Statsig bootstrap — 暴露 `Client::statsig_bootstrap` 与 `StatsigBootstrapContext`，使调用方可复用现有认证获取服务端评估的 Statsig 值。

2. **[#63438](https://github.com/openai/codex/pull/63438)** 让 Statsig 请求走 Codex 自身的 HTTP 客户端 — 新增 `codex-statsig` crate，使特性开关请求遵循调用方的代理、TLS 与网络策略。

3. **[#63441](https://github.com/openai/codex/pull/63441)** TUI 事件接收器与线程绑定 — 修复清空活动线程时丢失接收器、丢弃未读事件，以及旧流的排队 close 误伤重新附加的同名线程。

4. **[#63428](https://github.com/openai/codex/pull/63428)** `/compact` 被拒绝时保持活动轮次继续运行 — 避免手动压缩在发现会话策略禁止压缩前就中断正在执行的轮次。

5. **[#63440](https://github.com/openai/codex/pull/63440)** 将工具搜索索引延迟到首次搜索时构建 — 避免在未使用 `tool_search` 的轮次中构建索引，改由阻塞 worker 在首次搜索非空工具集时构建。

6. **[#63444](https://github.com/openai/codex/pull/63444)** 在 TUI 会话记录中解析 subagent 昵称 — 修复实时与回放工具调用显示原始 thread ID 的问题，便于辨认已派生/待等待的 agent。

7. **[#63419](https://github.com/openai/codex/pull/63419)** TUI 连接变化时保留斜杠命令选择 — 修复断线导致菜单变化时高亮跳转（如已选 `/export` 被跳到其他项）的问题。

8. **[#63415](https://github.com/openai/codex/pull/63415)** 启动中断时终止未注册的 exec 进程 — 修复 `exec_command` 在启动后、终端注册前被中断而残留进程的问题（网络拒绝监视器持有强引用）。

9. **[#63445](https://github.com/openai/codex/pull/63445)** TUI logo 在不同终端单元格尺寸下保持宽高比 — 改用终端的像素与网格尺寸，避免固定字符网格拉伸。

10. **[#63446](https://github.com/openai/codex/pull/63446)** 减少本地线程转换中的不必要克隆 — 在构建存储线程时移出预览字符串、状态元数据与 Git 元数据，属性能优化。

**其余清理类**：#63433 移除 TUI 仅测试用的 MCP inventory 转换；#63423 移除保留回溯中仅测试用的 agent 消息分组；#63414 删除空预览 rollout summary 测试；#63422 改用 `StoredThread` 转换覆盖 subagent 元数据；#63427 提升测试跨环境可移植性（Bazel 只读 runfiles、Bubblewrap 受限环境）。

## 5. 功能需求趋势

- **配额与计费透明度**：#58530 与 #62359 指向同一诉求——希望独立的 ChatGPT High 与 Codex/Work 额度、更准确的可用性显示、保留付费重置入口。这是当前社区情绪最集中的方向。
- **持续性工作区与协作**：#61348 提出将对话升级为长期工程工作区（session/memory/subagent）；#62113 请求邀请队友进入同一个实时 Codex 工作聊天。方向一致：从“一次性任务”走向“多人、多轮、有记忆”。
- **编辑器输入体验**：#42587 请求在 composer 中提供上下文感知的下一步 prompt 建议，并明确希望同时惠及 App 与 IDE Extension。
- **自动化与审批语义**：#42139、#40698、#63290 共同暴露沙箱权限与审批策略的语义混乱——需要更可预测、可解释的权限模型。
- **旧系统兼容**：#18755、#62944、#32175 构成同一类打包问题（最低系统版本 / Swift 运行时符号），社区希望明确的支持矩阵。

## 6. 开发者关注点

- **桌面端稳定性是第一痛点**：Windows 启动卡死（#62731、#63123）、macOS 线程无法恢复（#37403）、iOS 标签页崩溃（#62899）在同一天活跃，且涉及多个平台与版本号，说明客户端更新引入了较广的回归面。
- **权限状态静默变化令人不安**：#40698 描述只读轮次中 `activePermissionProfile`、`approvalPolicy`、`writableRoots` 悄然降级；#42139 中 `approval_policy = "never"` 与 `sandbox_mode = "danger-full-access"` 组合导致审批提示被静默阻断。开发者要求权限行为可审计、可预期。
- **上下文管理的计量与真实载荷脱节**：#41338 的 230 token vs 4.2 MB 对比是关键证据，与 auto-compact 卡死问题叠加，影响长会话可靠性。
- **模型版本回归影响选型**：#62195 对 GPT-6.2 SOL 与 GPT-6.1 SOL 的对比反馈，提示升级前需要行为级回归验证，而非仅看基准。
- **TUI 细节打磨需求明确**：今日 PR 密集修复斜杠命令选择丢失、未读事件丢失、subagent 显示原始 ID 等问题，反映终端用户对交互确定性的要求正在提高。

---

*数据来源：[github.com/openai/codex](https://github.com/openai/codex)。以上内容均基于提供的 Issues/PR 摘要，未对未列出的事实作推断；两条 Release 缺少变更说明，故未展开。*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报（2026-11-23）

## 1. 今日速览

今日发布 v0.71.0 夜间版本（v0.71.0-nightly.20261123.geecccfcd5）。社区讨论几乎全部被 `area/agent` 占据：子代理（subagent）的可靠性是核心焦点——从“到达 MAX_TURNS 却上报 GOAL 成功”的状态误报，到 generalist agent 永久挂起、Browser Agent 忽略配置、Wayland 环境失败等。同时，A2A 服务器的安全性迎来两笔独立 PR 的加固（Bearer 认证与路径遍历防护）。

## 2. 版本发布

- **v0.71.0-nightly.20261123.geecccfcd5** —— 夜间自动发布。
  变更记录：https://github.com/google-gemini/gemini-cli/compare/v0.71.0-nightly.20261122.geecccfcd5...v0.71.0-nightly.20261123.geecccfcd5
  对应版本号提升 PR：#30411（https://github.com/google-gemini/gemini-cli/pull/30411）

## 3. 社区热点 Issues（10 条）

1. **#22323 子代理 MAX_TURNS 恢复被误报为 GOAL 成功**（P1，14 条评论）
   `codebase_investigator` 在未做任何分析前就触及最大轮次上限，却仍上报 `status: "success"` / `Termination Reason: "GOAL"`，掩盖了中断。属于子代理状态可信度问题，讨论最热。
   https://github.com/google-gemini/gemini-cli/issues/22323

2. **#21409 Generalist agent 永久挂起**（P1，8 条评论，👍 8）
   一旦委托给 generalist agent（如创建文件夹这类简单操作）便无限挂起，最长等待一小时；用户只能指示模型不要委托子代理来绕过。社区共鸣最强（点赞最高）。
   https://github.com/google-gemini/gemini-cli/issues/21409

3. **#19873 利用模型的 bash 亲和性：零依赖 OS 沙箱 + 执行后意图路由**（P2，9 条评论）
   指出 Gemini 3 模型原生倾向链式调用 `grep`/`cat`/`sed`/`awk` 等 POSIX 工具，提议以此为基础构建沙箱与意图路由。属大型增强方向。
   https://github.com/google-gemini/gemini-cli/issues/19873

4. **#21968 Gemini 几乎不主动使用 skills 与子代理**（P2，7 条评论）
   用户反映只有显式指令才会调用自定义 skills / 子代理，即便任务高度相关也不触发，直接影响扩展生态的价值。
   https://github.com/google-gemini/gemini-cli/issues/21968

5. **#22745 评估 AST 感知的文件读取、搜索与代码映射**（P2，7 条评论）
   EPIC 追踪 AST 工具能否减少轮次、提升读取精度；关联 #22746 已建议以 tilth / glyph 为起点。
   https://github.com/google-gemini/gemini-cli/issues/22745

6. **#22267 Browser Agent 忽略 settings.json 覆盖（如 maxTurns）**（P2，5 条评论）
   `AgentRegistry` 似乎未生效，项目级/全局配置对 Browser Agent 完全无效，影响可控性。
   https://github.com/google-gemini/gemini-cli/issues/22267

7. **#21983 browser 子代理在 Wayland 下失败**（P1，4 条评论）
   Linux Wayland 环境下的浏览器子代理不可用，属平台兼容性硬伤。
   https://github.com/google-gemini/gemini-cli/issues/21983

8. **#24246 工具数超过阈值时触发 400 错误**（P2，3 条评论）
   标题写 128，正文写超过 400 个工具时报 400；期望 agent 能更智能地限定启用范围。
   https://github.com/google-gemini/gemini-cli/issues/24246

9. **#22672 Agent 应阻止/劝阻破坏性行为**（P2，3 条评论）
   在复杂 git 操作中模型会使用 `git reset`、`--force` 等，而存在更安全的替代方案；涉及数据库等资源维护时的破坏风险。
   https://github.com/google-gemini/gemini-cli/issues/22672

10. **#22186 get-shit-done 输出钩子导致崩溃**（P1，3 条评论）
    在打印用户摘要的收尾阶段反复使 gemini 崩溃，属可复现的稳定性缺陷。
    https://github.com/google-gemini/gemini-cli/issues/22186

> 其他值得留意：#22598（子代理轨迹应可通过 `/chat share` 查看）、#23571（模型在随机目录生成临时脚本）、#20079（`~/.gemini/agents/` 中的符号链接不被识别为代理）。

## 4. 重要 PR 进展（10 条）

1. **#30417 fix(a2a-server)：强制 HTTP 认证、加固 createTask 信任、阻止 restore 路径遍历**
   宣称修复 `@google/gemini-cli-a2a-server` 的 3 个安全漏洞，覆盖全部 HTTP/JSON-RPC 入口的 Bearer 令牌校验与 Host/Origin 本地校验。P2 / area/extensions。
   https://github.com/google-gemini/gemini-cli/pull/30417

2. **#30420 fix(a2a-server)：从环境配置 Bearer 令牌认证并做请求输入校验**
   与 #30417 方向重叠（均针对 A2A 认证），在 task 创建与 `restore` 命令中统一输入校验。维护者需协调两笔 PR。
   https://github.com/google-gemini/gemini-cli/pull/30420

3. **#30415 fix(core)：为 web 搜索加时限，并在中止时停止重试**（P1）
   解决 #29594 报告的挂起：`google_web_search` 等待模型请求无时限，请求卡住或服务端持续返回可重试错误时 agent 会困在该工具调用上。
   https://github.com/google-gemini/gemini-cli/pull/30415

4. **#29822 fix(core)：限制 total_max_matches 并澄清上下文溢出提示**（P2，help wanted）
   针对宽泛 `SearchText`（grep/ripgrep）查询撑爆上下文（#17448），在已有 100 条匹配上限、单行 2000 字符截断等防护之上进一步收敛。
   https://github.com/google-gemini/gemini-cli/pull/29822

5. **#30419 fix(core)：将从未扫描内容的文件夹标记为截断**（size/s）
   `readFullStructure()` 未遵守 `...` 表示“未展示/已忽略/达到上限”的约定，导致截断状态对模型不可见。
   https://github.com/google-gemini/gemini-cli/pull/30419

6. **#30418 fix(core)：向提示追加时不对非字符串 text 做 stringify**（size/s）
   `appendToLastTextPart()` 仅以 `'text' in lastPart` 判断可追加，却直接插值 `lastPart.text`，类型不安全。
   https://github.com/google-gemini/gemini-cli/pull/30418

7. **#30268 fix(core)：在 taint 与 build 文件检查中尊重激活的 YOLO 模式**（size/l）
   让 `--approval-mode=yolo` / `-y` 下的交互式与无头运行不再被配置检查打断，涉及 `PolicyEngine`。
   https://github.com/google-gemini/gemini-cli/pull/30268

8. **#30305 docs(extensions)：停止推荐永不匹配的 excludeTools 写法**（P2）
   文档示例 `"excludeTools": ["run_shell_command(rm -rf)"]` 实际不拦截任何命令（条目被收进 `Set` 精确匹配）。安全相关文档纠偏。
   https://github.com/google-gemini/gemini-cli/pull/30305

9. **#30306 fix(core)：跳过扫描中途被删除的子目录且不告警**（P1）
   消除 `ENOENT` 告警噪声，常见触发源是 `ProjectRegistry` 使用的 `.gemini/projects.json.lock`。
   https://github.com/google-gemini/gemini-cli/pull/30306

10. **#30360 chore(deps)：npm 依赖组跨目录 67 项升级**（size/xl）
    含 `@octokit/rest` 22.0.0→22.0.1、`@vitest/eslint-plugin` 等，属例行但体量较大的依赖更新。
    https://github.com/google-gemini/gemini-cli/pull/30360

> 另有 #30375（P1，修复文档内链）、#30307（`list_background_processes` 不再输出 `Exit Code: null`）、#28450（GitHub Actions 依赖组 3 项升级）。

## 5. 功能需求趋势

从今日 Issues 分布看，**子代理/Agent 体系是绝对主线**（20 条热门 Issue 中绝大多数带 `area/agent` 与 `workstream-rollup` 标签），具体方向包括：

- **子代理可观测性与评测**：轨迹需经 `/chat share` 可见（#22598），子代理行为可评估。
- **子代理调度与触发**：模型不主动使用 skills / 子代理（#21968），委托后挂起（#21409）。
- **配置与生命周期治理**：Browser Agent 忽略 `settings.json`（#22267）、会话接管与锁恢复（#22232）、工具数超限报 400（#24246）。
- **代码理解能力**：AST 感知的读取/搜索/代码库映射（#22745、#22746），以及 codebase investigator 的通用化改造（#18282）。
- **安全与破坏性操作防护**：阻止 `git reset` / `--force` 等危险命令（#22672）；PR 侧则集中出现 A2A 认证加固与 `excludeTools` 文档纠偏。
- **模型原生工作方式适配**：借 Gemini 3 的 bash 亲和性做零依赖沙箱（#19873）。
- **代理示例与生态建设**：在仓库内整理实用子代理示例（#18283）、本地子代理 Sprint 1（#20195）。

## 6. 开发者关注点

- **“静默失败”比失败更糟**：子代理触及轮次上限却上报 GOAL 成功（#22323），以及浏览器代理仅打印 “Browser Agent Finished” 而无有效结果（#21983），都让开发者无法判断任务是否真正完成。
- **挂起是最伤体验的问题**：generalist agent 无限挂起（#21409）、web 搜索无超时（#30415）、vite 创建卡在交互式提示（#22465）反映了同一类“无时限等待”缺陷。
- **配置不生效削弱信任**：settings.json 被 Browser Agent 忽略（#22267）、文档推荐的 `excludeTools` 写法实际无效（#30305），说明配置语义与文档需要对齐。
- **上下文与工具预算管理**：宽泛搜索撑爆上下文（#29822）、工具超过 400 个返回 400（#24246）——开发者期望 agent 更聪明地裁剪工具与结果。
- **工作区整洁与可回滚**：模型在随机位置生成临时脚本（#23571）、破坏性 git 命令（#22672），直接影响提交前的清理成本与仓库安全。
- **安全审计在补课**：A2A 服务器同时收到两笔独立的安全修复 PR，提示此前缺乏认证与输入校验。
- **维护者流程摩擦**：多笔近期 PR 带 `status/need-issue` 或 `status/pr-nudge-sent`，作者在等待维护者回应；#29473（0.62.0 夜间版本号提升）自 9 月起仍为 Stale 状态。

---
*数据来源：github.com/google-gemini/gemini-cli（过去 24 小时 Releases 1 条、Issues 50 条、Pull Requests 15 条）*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报（2026-11-23）

> 数据来源：github.com/github/copilot-cli。当日仅 1 条 PR 更新，故 PR 部分不凑满 10 条。

## 1. 今日速览

今日发布 v1.0.115-8，重点优化 Assisted Permissions 的容错（主评审模型卡住或失败时自动改用备用模型）以及子代理用量统计。社区方面，MCP 相关问题集中爆发——OAuth 令牌静默刷新、Tasks 扩展协议不一致、Windows 认证失败等多条 Issue 同时活跃，反映出 MCP 集成已成为当前最脆弱的一环。

## 2. 版本发布

**v1.0.115-8**

- `--usage-output-file`：子代理用量现按配置名称分组统计，并报告每个子代理的启动次数（原先按调用 ID 分组）。
- Assisted Permissions：当首个评审模型卡住或失败时，可自动尝试备用评审模型，减少不必要的审批提示。

## 3. 社区热点 Issues

1. **[#4203] Remote MCP (OAuth)：访问令牌过期强制交互式重认证** [OPEN] 👍6
   缓存 access token 过期后，CLI 直接丢弃 MCP 工具并要求交互式登录，即便有效的 refresh_token 可用。这是当日点赞最高的开放 Issue，涉及认证流程若修复将惠及所有远程 MCP 用户。
   github/copilot-cli Issue #4203

2. **[#2243] Worktrees 是噩梦，应默认禁用** [OPEN] 👍21
   当日点赞最高（21）。用户反映会话被交给 CLI 后产生数千行“有用但无法管理”的代码，要求 worktree 仅在人类用户显式开启时启用。反映自动化边界控制的强烈不满。
   github/copilot-cli Issue #2243

3. **[#4946] 后台 shell 完成通知后出现 HTTP 400 `content[].thinking`** [OPEN] 👍1
   后台 shell 命令超出回合后完成时，运行时投递 `system.notification` 导致后续请求 400。长任务场景下的稳定性问题。
   github/copilot-cli Issue #4946

4. **[#4805] 会话无法复活：崩溃宿主遗留的 `inuse.<pid>.lock` 永不回收** [OPEN]
   会话数据本身未损坏、事件可正常重放，但陈旧锁文件导致无法重新打开。数据安全相关，影响用户信任。
   github/copilot-cli Issue #4805

5. **[#5550] `gh` 在 PATH 中时，内置 GitHub MCP 读工具对自定义代理不可用** [OPEN]
   由 microsoft/hve-core 报告，涉及代理读取 GitHub Issue 的能力。影响自定义代理的实际可用性。
   github/copilot-cli Issue #5550

6. **[#5540] 对 `taskSupport: "required"` 的工具未发送 MCP Tasks 增强** [OPEN]
   CLI 在初始化时宣称支持 Tasks，但调用需任务化的工具时不发送 task augmentation，服务端拒绝调用。与 #5555 同属 MCP Tasks 协议落地不完整的问题。
   github/copilot-cli Issue #5540

7. **[#5555] MCP 客户端声明 Tasks 扩展却拒绝 CreateTaskResult** [CLOSED]
   客户端在每个请求（含 tools/call）中声明 `io.modelcontextprotocol/tasks` 扩展，但服务端返回 CreateTaskResult 时拒绝接收。与 #5540 互为镜像，说明协议实现两端不一致，当日已关闭。
   github/copilot-cli Issue #5555

8. **[#5525] Windows：访客租户资源的 MCP 认证失败** [OPEN]
   账号为托管 API 租户的访客时，虽正确发现租户，但 Windows broker 后续请求失败。企业跨租户场景的关键阻塞。
   github/copilot-cli Issue #5525

9. **[#5524] 远程 MCP 动态 headers 助手（对齐 Claude Code 的 `headersHelper`）** [OPEN]
   当前远程 MCP 仅支持静态 headers，`${VAR}` 仅在配置加载时展开一次，插件附带的服务完全不展开。属于明确的竞品对标需求。
   github/copilot-cli Issue #5524

10. **[#4920] 会话 ID 切换时本地 stdio MCP 服务器被静默丢弃** [OPEN]
    每次 `--resume` 或 `/new` 启动时，运行时先创建占位会话并连接全部 MCP 服务器，随后在 ID 切换中丢失。可复现于 1.0.86 与 1.0.67。
    github/copilot-cli Issue #4920

> 另需关注已关闭问题：#5100（一次 120s 宿主确认超时导致事件投递永久失败）、#2482（`task_complete` 未写入输出致结果丢失）、#1446（Windows 终端 `--no-warnings` 未知选项噪音，9 条评论为当日讨论最热）。

## 4. 重要 PR 进展

1. **[#5554] 为 CLI 容器添加可选的连接令牌生成** [CLOSED]
   本地 SDK 客户端在会话尚未获得 GitHub 凭据前，需要一个共享密钥才能连接无头 CLI。该变更允许开发者通过 `COPILOT_CONNECTION_TOKEN_GE...` 设置跳过在宿主上预先创建密钥，直接试用服务。降低 headless 模式的接入门槛。
   github/copilot-cli PR #5554

## 5. 功能需求趋势

- **MCP 生态成熟度居首**：当日 27 条更新 Issue 中过半带 `area:mcp` 标签，覆盖 OAuth 刷新、Tasks 扩展协议、动态 headers、Windows 锁与认证。核心诉求是让 MCP 从“能连”走向“稳定可靠”。
- **会话生命周期与数据可恢复性**：锁文件回收（#4805）、事件投递超时（#5100）、结果输出丢失（#2482）指向同一方向——长会话与后台任务的健壮性。
- **自动化边界的人为控制**：worktree 默认禁用（#2243，👍21）代表用户希望对 CLI 自主行为有更明确的开关。
- **与竞品功能对齐**：动态 headers 需求明确对标 Claude Code 的 `headersHelper`。
- **企业策略与跨租户支持**：要求企业级沙箱强制策略（#4446，已关闭）与访客租户认证（#5525），显示企业部署诉求。

## 6. 开发者关注点

- **认证是最大痛点**：本可静默刷新的令牌却触发交互式重新登录、Windows 访客租户 broker 失败、Supabase OAuth 探测返回 400（#5542）——认证链路的多个环节同时出问题，且都直接阻断工具可用性。
- **静默失败最难排查**：MCP 服务器在会话切换时被“静默丢弃”（#4920）、`--no-warnings` 噪音（#1446）、代理无输出（#2482），问题不报错或报错噪声大，增加诊断成本。
- **平台差异显著**：Windows 相关 Issue 密集（锁权限 os_error=5 #5255、插件卸载失败 #5119、认证 #5525），Windows 用户体感明显落后。
- **协议一致性受质疑**：MCP Tasks 的声明与实现不一致（#5540 / #5555）引发对客户端规范遵循度的担忧。
- **安装/运行时依赖**：语音安装器错误拉取私有 Azure Artifacts 源导致 401（#4035），虽已关闭，但反映依赖分发问题。
- **记忆与上下文**：用户希望 Copilot 能检索历史会话而非从零重解问题（#2048，已关闭）。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 · 2026-11-23

> 数据来源：github.com/anomalyco/opencode（过去 24 小时更新）

## 1. 今日速览

OpenCode 发布 v2.4.1 和 v2.4.0：前者修复 macOS 12 上的消息保存问题，后者为桌面端加入内置浏览器。社区讨论集中在模型输出层的稳定性上：Go 模型产出畸形 XML/DSML 工具调用（#50206，18 条评论）、助手仅输出 reasoning 就静默结束（#55378，15 条评论）是当前最热的两个问题。与此同时，Windows 端的服务启动失败、TUI 显示异常等 v2.4.0 回归问题在发布当天集中出现。

## 2. 版本发布

**v2.4.1**
- 修复 macOS 12 内置 SQLite 旧版本下无法保存助手消息的问题，OpenCode 可以重新保存 assistant messages（#65771）。
- 仅在配置文件中定义的 provider（如 Ollama）现在能正确展示其模型列表。

**v2.4.0**
- 桌面端内置浏览器：可从 Chrome、Edge、Firefox、Safari 导入登录态与浏览历史，支持从 Chromium 浏览器或 Chrome/Edge 商店安装扩展；所有数据保留在一个持久化桌面 profile 中，聊天中的链接可直接以已登录状态打开，标签页在重启后保留。
- 链接：https://github.com/anomalyco/opencode/releases

## 3. 社区热点 Issues（10 条）

1. **#50206 [OPEN][severity:high] Go 模型输出畸形 XML/DSML 工具调用** — 评论 18。opencode-hosted 模型常输出类似 `<｜DSML｜ parameter ...>` 的内容而非合法 tool-call payload，导致工具执行失败。这是标记为 high 的推理层缺陷，影响所有依赖 Go 托管模型的用户。https://github.com/anomalyco/opencode/issues/50206

2. **#55378 [OPEN][reproduced] 仅有 reasoning 的助手轮次被静默结算，agent 停止** — 评论 15，👍4。助手输出无文本、无工具调用且 finish 为 “stop” 时，会话直接停止，是从旧版本遗留的再现问题。https://github.com/anomalyco/opencode/issues/55378

3. **#33300 [OPEN][FEATURE] 桌面端语音/语音输入支持** — 评论 15，👍15（本批最高赞）。社区明确期待桌面 App 支持语音输入，诉求热度持续近半年。https://github.com/anomalyco/opencode/issues/33300

4. **#63817 [CLOSED][reproduced] Linux 下 pty 守护进程遗留僵尸进程（2.3.0 起）** — 评论 11。shell 命令正常返回结果和退出码，但进程始终不被回收，属于资源泄漏型问题，已关闭。https://github.com/anomalyco/opencode/issues/63817

5. **#6111 [CLOSED][opentui, windows] SSH 场景剪贴板复制失效** — 评论 11，👍4。在 Windows 终端经 SSH 使用 OpenCode 时，“复制消息”显示成功但剪贴板内容不变，影响远程开发工作流。https://github.com/anomalyco/opencode/issues/6111

6. **#65798 [CLOSED] 卡巴斯基持续拦截 OpenCode，且订阅配额耗尽后只能靠积分补充** — 评论 8。用户反映杀软误报频率从偶发变为数小时一次，同时询问配额策略；涉及分发安全与计费体验两方面。https://github.com/anomalyco/opencode/issues/65798

7. **#65777 [CLOSED][area/core, macOS] git worktree 场景项目根目录解析为文件系统根** — 评论 3。在 `.git` 为文件的 worktree 检出中，根目录被解析到 `/`，服务在每次 attach 时对 `/` 注册 watcher，约 20 秒的事件循环停顿触发 watchdog 反复杀死并重启服务。这是一个严重的性能事故。https://github.com/anomalyco/opencode/issues/65777

8. **#65839 [CLOSED][Windows] 后台服务启动后立即退出（v2.4.0）** — 评论 4。`opencode service status` 显示服务在 2 秒内死亡，属于新版本回归，建议 Windows 用户暂缓升级或关注修复。https://github.com/anomalyco/opencode/issues/65839

9. **#65863 [OPEN][area/mcp] 远程 MCP OAuth 对 Figma 全部版本失败** — 评论 3。DCR 发送的 client_name “OpenCode” 被 Figma allowlist 以 403 拒绝；该问题影响所有版本（已在 v1.19.0 / v1.19.6 验证），并且不会打开浏览器。涉及 MCP 生态互通的硬性阻塞。https://github.com/anomalyco/opencode/issues/65863

10. **#65060 [OPEN][FEATURE] 允许 /btw 使用可配置模型而非始终沿用会话模型** — 评论 3。打开偏好的用户可通过 /btw 使用独立的模型，以减少无关调用开销。https://github.com/anomalyco/opencode/issues/65060

（其他值得留意的：**#65832** ConEmu+Far 在 v2.4.0 下颜色错乱、Tab 失效；**#61096 / #62918** Linux Dash to Dock 收藏项不合并；**#49660** pacman 安装下 `/update` 提示的版本无法升级；**#61016** RHEL 9 开启 FIPS 后无法安装桌面 rpm。）

## 4. 重要 PR 进展（10 条）

1. **#65899 [OPEN] fix(core): 当窄范围 deny 跟随在通配 deny 之后时正确隐藏工具** — 关闭 #65892，修正 `Tool.snapshot` 对“完全禁用”的判断。https://github.com/anomalyco/opencode/pull/65899

2. **#65900 [CLOSED] fix(core): 通配规则 deny 之后被更窄 deny 覆盖的工具不应隐藏** — 重写 `Tool.whollyDisabled` 逻辑，原实现只检查最后匹配的 `resource:"*"` deny，与 #65899 属于同一类问题。https://github.com/anomalyco/opencode/pull/65900

3. **#65817 [OPEN] fix(plugin-browser): 拒绝加载被禁用的 browser skill** — 当前核心在每次 agent 规则之后评估 session 级 `skill: browser` 授权，导致插件层权限判断被绕过。https://github.com/anomalyco/opencode/pull/65817

4. **#65901 [OPEN] chore(cli-rs): 锁定 OpenTUI 0.9.8，各视图共享同一语法主题** — 覆盖八个平台的 native 库并锁定版本，同时统一 Markdown/代码视图的语法主题，改善 TUI 一致性。https://github.com/anomalyco/opencode/pull/65901

5. **#60041 [OPEN] feat(mcp): 首次使用时信任私有网络服务器证书** — 属于 #40111 系列，叠加在 #60039 之上，补齐自签证书的首次信任流程。https://github.com/anomalyco/opencode/pull/60041

6. **#60039 [OPEN] feat(mcp): 远程 MCP 服务器支持 per-server TLS 信任配置** — 新增可选 `tls` 配置块，允许自签证书的远程 MCP 服务器接入。https://github.com/anomalyco/opencode/pull/60039

7. **#65898 [OPEN] refactor(ai): 由模型能力在 AI 包内决定 freeform 格式** — 此前“工具是否以原始文本发送、使用哪种语法”在 core 与 AI 包两处分别决定，本 PR 收敛为单一判断点。https://github.com/anomalyco/opencode/pull/65898

8. **#65889 [CLOSED] feat(core): 上报 session cwd 并加载该目录的 AGENTS.md** — 带 `cwd` 的会话现在会告知模型真实工作目录，并通过环境文件驱动加载该目录下的 `AGENTS.md` / `CLAUDE.md`；位于 `machines` feature flag 之后，改动完全在 packages/core 内。https://github.com/anomalyco/opencode/pull/65889

9. **#64954 [CLOSED] feat(codemode): 基础 class 支持** — 在 getters/setters（#64908）基础上为 Code Mode 的 VM 增加类支持，是脚本能力演进的一步。https://github.com/anomalyco/opencode/pull/64954

10. **#65391 [OPEN] fix(app): 为旧版 WebView 补齐 change-array-by-copy 方法** — WebView 110 之前 `toSorted` 缺失会导致命令面板首次渲染抛错，本 PR 以 polyfill 修复。https://github.com/anomalyco/opencode/pull/65391

（另：**#65317** Windows 任务栏进度条展示会话状态；**#65897** 用户消息内联展示引用块；**#3883** 为 TUI 恢复 `/export` 并新增 `/copy`。）

## 5. 功能需求趋势

- **桌面端交互能力扩张**：语音输入（#33300，15 赞）、内置浏览器（v2.4.0 已落地）、Windows 任务栏状态反馈，显示桌面端正从“聊天壳”向完整工作台演进。
- **模型与推理可控性**：`/btw` 可配置独立模型（#65060）、provider 仅配置时展示模型（v2.4.1），社区希望更细粒度地控制模型选择与成本。
- **MCP 生态互通**：远程 MCP 的 TLS 信任（#60039/#60041）与 OAuth 兼容（#65863）是当前 MCP 方向的主要需求。
- **插件与生态入口**：Axolotl Companion（#65746）、opencode-palace（#65853）、AutoRouter（#65260）等生态条目提案活跃，社区希望在官方插件/项目表中获得曝光。
- **终端与远程环境体验**：SSH 剪贴板（#6111）、ConEmu 颜色（#65832）反映 TUI/终端兼容性仍是高频诉求。

## 6. 开发者关注点

- **模型输出契约不稳定**：#50206（DSML 畸形输出）与 #55378（仅 reasoning 即结束）都指向“模型输出解析”这一层缺乏防御，且后者在 v1 中曾以“版本不对”被关闭后又在新版本重现，社区对问题闭环的信任度受损。
- **v2.4.0 回归集中**：Windows 后台服务秒退（#65839）、ConEmu 颜色与 Tab 失效（#65832）、项目根被解析为 `/` 导致 watchdog 反复重启（#65777），均出现在新版本，建议升级前先评估。
- **平台打包与安装一致性**：pacman 管理的安装无法完成升级（#49660）、RHEL 9 FIPS 下 rpm digest 报错（#61016）、GNOME 两个 desktop 文件导致窗口不合并（#61096/#62918），Linux/RHEL 发行侧安装问题反复出现。
- **权限规则语义**：#65899/#65900 表明工具权限的通配与窄范围 deny 叠加规则存在歧义，并直接决定工具是否暴露给模型，开发者正集中修整这一块。
- **安全软件误报**：#65798 显示杀软拦截频次升高，影响用户信任与分发，需在发布流程中关注签名/二进制特征。

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报 — 2026-11-23

## 今日速览

今日无新版本发布，但 PR 活动异常密集：以 petrroll 为主的多位贡献者集中提交了一批修复，涵盖临时文件写入崩溃、大流式事件线性读取、失效模型目录清理与认证状态显示等长期问题。社区最活跃的讨论仍是 `cacheWarming: "idle"` 静默失效（16 条评论）与工具展示 API 需求。多条 P0 级 openai-codex / Gemini 推理流稳定性问题在当日集中出现。

## 版本发布

过去 24 小时无 Releases。

## 社区热点 Issues

1. **#10956 cacheWarming "idle" 静默失效**（OPEN，16 评论，👍4）
   扩展处理 `turn_end` 且上下文含自定义/压缩消息后，idle 预热从未触发；作者统计自 9 月以来 507 次决策事件全部落在 `continuationProbability: 1`。影响缓存命中成本，讨论量最高。
   https://github.com/earendil-works/pi/issues/10956

2. **#10259 公开的工具展示 API 或内置单行工具模式**（OPEN，8 评论，👍3）
   社区要求可控制所有工具行（内置、MCP、codemode、自定义扩展）的展示方式，或提供单行模式。属终端 UI 可扩展性核心诉求。
   https://github.com/earendil-works/pi/issues/10259

3. **#10585 bash 临时文件流错误仍导致进程崩溃**（OPEN，`inprogress`，`prio:p0`，4 评论）
   1.0.4 上 `/tmp` 写满（ENOSPC）或 EACCES 触发未捕获异常，直接杀死整个进程及进行中的会话。
   https://github.com/earendil-works/pi/issues/10585

4. **#12444 openai-codex-responses：max_output_tokens 截断破坏 WebSocket 续传**（OPEN，`prio:p0`，3 评论）
   `gpt-6.2-astra` 会话中途丢弃 `previous_response_id` 回退为全量重发，且重序列化 function_call 参数触发 prefix_mismatch。影响长会话稳定性。
   https://github.com/earendil-works/pi/issues/12444

5. **#12242 压缩摘要每次更新持续膨胀**（OPEN，3 评论）
   一次长会话九次压缩后摘要从 17k 涨到 164k 字符，第九次耗时 588 秒、75k 输出 token。直接关系长会话可用性与成本。
   https://github.com/earendil-works/pi/issues/12242

6. **#12224 MCP SSE 对大事件反复拼接与重扫描**（OPEN，`inprogress`，3 评论）
   `consumeSseStream()` 将未完成事件保存在单一字符串中逐块重扫，大事件分多块到达时性能退化。
   https://github.com/earendil-works/pi/issues/12224

7. **#12150 非法 codemode 调用污染整个会话**（OPEN，4 评论）
   模型输出畸形外层调用 `{"":""}`，本地校验已正确拒绝，但后续会话仍被污染。
   https://github.com/earendil-works/pi/issues/12150

8. **#12166 安装脚本与系统同名 `pi` 包混淆**（OPEN，`inprogress`，3 评论）
   Ubuntu 上 `apt install pi` 提供的 `/usr/bin/pi` 被误判为已有安装并提示重装/卸载。
   https://github.com/earendil-works/pi/issues/12166

9. **#12407 gemini-4-neon 流中途停止**（OPEN，2 评论）
   新模型频繁在中途停止且不恢复；报告者声明为纯人工、无 AI 生成内容。
   https://github.com/earendil-works/pi/issues/12407

10. **#12443 Gemini xhigh 思考级别在请求前即失败**（CLOSED，3 评论）
    `google/gemini-4-neon` / `gemini-4-hydrogen` 选择 xhigh 报 "Unsupported Google thinking level mapping"，虽 Google 已支持。
    https://github.com/earendil-works/pi/issues/12443

## 重要 PR 进展

1. **#12452 临时文件写入失败不再崩溃**（OPEN，修复 #10585）
   为 `$TMPDIR` 截断输出的 `WriteStream` 增加 error 监听，避免未捕获异常杀死 pi。
   https://github.com/earendil-works/pi/pull/12452

2. **#12451 大流式行与事件线性时间读取**（OPEN，关闭 #12224）
   改为仅在保存偏移处匹配，避免 `+=` 拼接字符串导致 V8 复杂度退化；覆盖 mcp/ai/agent/coding-agent/tui。
   https://github.com/earendil-works/pi/pull/12451

3. **#12455 finish_reason "error" 纳入重试分类器**（CLOSED，关闭 #12206）
   Copilot、OpenRouter、Mistral 的瞬态流错误此前在 1.6.0 不重试，改为在分类器统一判定。
   https://github.com/earendil-works/pi/pull/12455

4. **#12454 未解析的存储凭据显示为未配置**（CLOSED，修复 #12164）
   `getProviderAuthStatus()` 此前对任何 `auth.json` 条目返回 configured，即使 `!command` 失败。
   https://github.com/earendil-works/pi/pull/12454

5. **#12459 显示未解析的存储密钥并重跑保存的 command 密钥**（OPEN）
    #12454 的后续：区分"密钥损坏"与"未配置"，并支持重跑 `!command`。
   https://github.com/earendil-works/pi/pull/12459

6. **#12450 从 OpenAI 目录移除已下线 gpt-5-chat-latest**（CLOSED，关闭 #12202）
    `/model` 不再列出 OpenAI 已于 2026-07-23 关停的模型。
   https://github.com/earendil-works/pi/pull/12450

7. **#12453 清理 Groq 已下线模型与未文档化的 mistral-medium-3.5**（CLOSED）
   Groq 启用 `skipDeprecated`，修正 `/model` 中的失效条目。
   https://github.com/earendil-works/pi/pull/12453

8. **#12449 替换已退役 Mistral 模型**（CLOSED）
    models.dev 于当日移除 `devstral-medium-latest` 与 `pixtral-12b`，导致 `main` 分支 CI 因目录重建失败。
   https://github.com/earendil-works/pi/pull/12449

9. **#12441 支持 Gemini xhigh 思考级别**（CLOSED，修复 #12443）
    修正 Google thinking level 映射，使 xhigh 在请求前不再报错。
   https://github.com/earendil-works/pi/pull/12441

10. **#12446 wl-copy 显式传入 text/plain**（CLOSED，修复 #12374）
    Wayland 下避免 MIME 类型推断为非文本导致复制静默失败。
    https://github.com/earendil-works/pi/pull/12446

## 功能需求趋势

- **终端 UI 可扩展性**：工具展示 API / 单行模式（#10259）、Mermaid 超宽图回退需给出原因（#12324）。
- **模型与推理集成的时效性**：Gemini xhigh（#12443）、Codex 推理 effort 与续传（#12444、#12437）、OpenAI Responses 推理摘要边界（#12456）。
- **模型目录治理**：废弃模型清理（#12202、#12450、#12453、#12449）成为持续性维护工作。
- **长会话性能与成本**：压缩摘要膨胀（#12242）、缓存预热（#10956）、流式读取效率（#12224）。
- **认证与凭据管理**：Kimi Code OAuth host 变更（#9819）、`!command` 密钥失败可见性（#12164）。
- **跨平台安装健壮性**：WSL 与系统同名包误判（#12166、#12172）。

## 开发者关注点

- **进程级崩溃容忍度**：磁盘写失败、SSE 解析等非核心路径错误不应杀死整个会话（#10585、#12224）。
- **静默失败与可观测性**：缓存预热不触发、Mermaid 回退无解释、认证显示错误，均表现为"无声失败"，缺乏诊断信息。
- **会话状态污染**：单次畸形工具调用或恢复会话时扩展工具未恢复（#12150、#12323）导致需要重开会话。
- **上游目录变更的连锁影响**：models.dev 单次合并即可让 CI 失败，暴露对第三方模型目录的强依赖。
- **长时间运行的资源膨胀**：摘要与缓冲字符串随会话增长而累积，影响延迟与 token 成本。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报（2026-11-23）

## 今日速览

今日无新版本发布，但核心架构迁移是最大看点：1.0 Preview 的 event-bus 内核开始默认接管 headless 会话（PR #18154），对应的落地跟踪 Issue #17045 讨论热度最高。Managed Agent 的"Action parking"（等待状态挂起与恢复）连续合并多个切片，显示服务端会话生命周期管理进入密集迭代期。同时，新提交的 API key 明文落盘（#18165）与工具调用参数丢失（#18197）两个严重缺陷值得优先关注。

## 版本发布

过去 24 小时无新版本发布。

## 社区热点 Issues

1. **#17045 [OPEN] 1.0 Preview 内核分片合入 main（24 条评论）**
   1.0 Preview 将 agent loop 重构为 event-driven kernel 并通过单一 `query()` 入口暴露，此 Issue 跟踪其分阶段合入。是当前核心架构演进的"总账本"，讨论数远超其他议题。
   https://github.com/QwenLM/qwen-code/issues/17045

2. **#14019 [OPEN] Web Shell 智能 UI（7 条评论）**
   让助手按任务在纯文本、原生交互组件和隔离 HTML 可视化之间自主选择渲染形式。属于用户可见的产品级能力，牵涉面广故设为 need-discussion。
   https://github.com/QwenLM/qwen-code/issues/14019

3. **#17446 [OPEN] 自定义 Provider 的模型自动发现（5 条评论）**
   要求把 `/auth` 已有的模型发现能力扩展到 OpenAI Chat Completions、OpenAI Responses 与 Anthropic 兼容端点。直接改善第三方模型接入体验。
   https://github.com/QwenLM/qwen-code/issues/17446

4. **#17316 [OPEN] MCP elicitation 能力支持（4 条评论）**
   MCP 服务端可在交互中请求结构化用户输入，但当前 MCP 客户端栈不支持。属于 MCP 生态对齐的重要缺口。
   https://github.com/QwenLM/qwen-code/issues/17316

5. **#18030 [OPEN] 工作区与 Git worktree 共享项目记忆（4 条评论）**
   #6462 之后每个 worktree 拥有独立 auto-memory，导致切换 worktree 后模型"遗忘"已学到的上下文。影响多 worktree 开发者的日常体验。
   https://github.com/QwenLM/qwen-code/issues/18030

6. **#15081 [OPEN] Managed Agent 文件与进程访问隔离（3 条评论）**
   对 Workspace 会话中的文件与 Shell 工具施加挂载根目录约束。当前 Managed 路径明确未做此限制，属安全加固类需求。
   https://github.com/QwenLM/qwen-code/issues/15081

7. **#18165 [OPEN] 会话日志明文记录 API key（1 条评论，新提）**
   更换 Token Plan API key 时，`cat`/`grep` 等工具输出中的完整密钥被以明文写入 `~/.qwen/projects/.../chats/*.jsonl` 的多个字段。敏感信息落盘风险高，建议优先处理。
   https://github.com/QwenLM/qwen-code/issues/18165

8. **#18197 [OPEN] 工具调用参数被间歇性丢弃（0 条评论，新提）**
   报错 `params must have required property`，即使模型已输出该参数；问题定位在序列化/发送层，可能升级为不可恢复重试循环导致整会话不可用。
   https://github.com/QwenLM/qwen-code/issues/18197

9. **#18141 [OPEN] Windows 下含空格/括号文件名被静默丢弃（2 条评论）**
   `@` 自动补全与拖拽插入转义 token（如 `@测试\ 文档.md`），提交后被静默丢弃。Windows 平台高频可用性缺陷。
   https://github.com/QwenLM/qwen-code/issues/18141

10. **#18178 [OPEN] 为每个 turn 提供不可变资源视图（1 条评论，新提）**
    在 `qwen serve` 中让每个 prompt turn 捕获已验证的 Skill 内容、扩展贡献、工具注册、hooks 等的快照。对可复现性与审计有价值。
    https://github.com/QwenLM/qwen-code/issues/18178

## 重要 PR 进展

1. **#18154 [CLOSED] headless 会话默认运行于 event-bus 内核**
   `-p`、stream-json 及 SDK 会话默认走共享 agent loop 的 event-bus 内核，可通过 `experimental.eventBusAgentLoop: false` 回退。标志 1.0 内核迁移的实质性一步。
   https://github.com/QwenLM/qwen-code/pull/18154

2. **#18155 [OPEN] Managed Agent：受限的 Hosted Workspace Shell**
   为绑定到已注册 Workspace 根目录的 Hosted Agent 会话增加 opt-in 前台 Shell profile，使用 Bubblewrap 为每条命令提供只读私有视图。
   https://github.com/QwenLM/qwen-code/pull/18155

3. **#18199 [OPEN] Web Shell：按被查看会话解析跨工作区文件链接**
   修复文件/图片链接错误地以"当前活动会话"的工作区解析的问题，改为按消息所属会话解析绝对路径。
   https://github.com/QwenLM/qwen-code/pull/18199

4. **#17323 [OPEN] Skills 激活时提示未配置的 MCP 依赖**
   SKILL.md 可通过 `mcp:` frontmatter 声明依赖的 MCP 服务，激活时校验并提示缺失项。
   https://github.com/QwenLM/qwen-code/pull/17323

5. **#18052 [OPEN] CLI：主机高负载时拒绝新会话**
   两秒监控窗口结合每核负载均值、事件循环 p99 延迟与观测间隙保护，连续三次超限后拒绝分配新 ACP 子进程的守护进程操作。
   https://github.com/QwenLM/qwen-code/pull/18052

6. **#18171 [OPEN] LSP：pull 诊断不支持时回退到 push**
   宣传并缓存 `textDocument.publishDiagnostics`，当服务端对 `textDocument/diagnostic` 返回 `-32601` 时回退。提升 LSP 兼容性。
   https://github.com/QwenLM/qwen-code/pull/18171

7. **#17003 [OPEN] Live Voice：可配置 turn_detection**
   按所选实时模型实际支持的能力协商轮次检测模式，未配置时对 qwen-audio 系列默认 `server_vad`。
   https://github.com/QwenLM/qwen-code/pull/17003

8. **#16598 [OPEN] 持久化输出 stub 不被 microcompaction 清除**
   修复压缩清理分支将已溢出的 `<persisted-output>` stub（含保存路径、sha256、预览）整体替换的问题。
   https://github.com/QwenLM/qwen-code/pull/16598

9. **#18169 [OPEN] CLI：按宿主能力门控 Agent Team 工具**
   仅当宿主显式支持 teammate 汇报与审批、实验开启且 Shell 沙箱允许时才暴露旧版 Agent Team 工具。
   https://github.com/QwenLM/qwen-code/pull/18169

10. **Managed Agent Action parking 系列（#18164 / #18187 / #18166 均已合入）**
    分别让仅含图片附件的审批等待、处于已认证后台持有旁的审批等待、扩展命令步骤触发的审批等待可以挂起并在崩溃后恢复，是 #18149 提案的 S1/S2/S7 切片。
    https://github.com/QwenLM/qwen-code/pull/18149 · https://github.com/QwenLM/qwen-code/pull/18164 · https://github.com/QwenLM/qwen-code/pull/18187 · https://github.com/QwenLM/qwen-code/pull/18166

## 功能需求趋势

- **Web Shell 平台化**：从完整智能 UI（#14019）、自定义面板（#18159）到跨工作区链接修复（#18198/#18199），Web Shell 正从演示界面走向可扩展的宿主平台。
- **多模型/Provider 接入**：自定义 Provider 模型发现（#17446）与模型切换 scope 相关请求持续活跃。
- **MCP 生态深化**：elicitation 协议支持（#17316）、Skills 声明 MCP 依赖（#17323），显示 MCP 从"能连"转向"协议完整"。
- **Managed Agent / 守护进程会话生命周期**：Action parking 系列、高负载准入（#18052）、turn 级不可变资源快照（#18178）、Workspace 隔离（#15081/#18155）构成明显的主线。
- **记忆与上下文管理**：worktree 间共享 auto-memory（#18030）、microcompaction 保真（#16598）。
- **本地化**：TUI 界面 i18n 请求（#17143）虽被关闭，但反映出界面语言与模型输出语言分离的诉求。

## 开发者关注点

- **安全与隐私是当前最尖锐痛点**：API key 明文写入会话日志（#18165），且同一输出在日志多个字段重复出现；Managed 路径的文件/进程访问缺乏约束（#15081）也被持续追问，对应 PR #18155 正在补齐。
- **稳定性**：工具调用参数在发送层被丢弃并可导致整会话故障（#18197），属于影响面最广的可靠性问题。
- **Windows 体验短板**：`@` 补全与拖拽对含空格/括号路径静默失败（#18141），登录流程反复报认证错误导致新用户受阻（#18192），两者都指向平台适配不足。
- **会话/工作区状态一致性**：文件链接解析错会话工作区（#18198）、worktree 记忆割裂（#18030），说明多会话、多 worktree 场景下的状态隔离与共享边界仍不清晰。
- **跨平台 UI 细节**：iOS Safari 对 portal 内输入框 14px 字号触发整页缩放（#17933）、环境面板被待回答问题卡片遮挡（#17963）两个 bug 已关闭，反映 Web Shell 移动端适配正在收敛。
- **版本分布**：Web Shell 相关问题同时出现于 0.27.2、0.28.x，提醒使用者关注版本差异。

*链接参考：* https://github.com/QwenLM/qwen-code/issues/18159 · https://github.com/QwenLM/qwen-code/issues/18198 · https://github.com/QwenLM/qwen-code/issues/17143 · https://github.com/QwenLM/qwen-code/issues/17933 · https://github.com/QwenLM/qwen-code/issues/17963 · https://github.com/QwenLM/qwen-code/issues/18192 · https://github.com/QwenLM/qwen-code/issues/18149 · https://github.com/QwenLM/qwen-code/pull/18174 · https://github.com/QwenLM/qwen-code/pull/16573

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI 社区动态日报（2026-11-23）

> 数据来源：github.com/Hmbown/DeepSeek-TUI（Issue/PR 链接实际指向 codewhale-hq/Codewhale 仓库）

## 1. 今日速览

今天没有新版本发布，社区焦点集中在 **0.10.5 的代码审计修复**：外部贡献者 7jrxt42BxFZo4iAnN4CX 提交的一批 `[audit]` Issue（R4–R22 多个审查单元）集中更新，维护者 Hmbown 已推送对应的聚合修复 PR（#7502、#7503 等）。同时 0.10.3 的 ACP（Agent Client Protocol）方向仍在推进，ACP 相关的回归与模式执行问题成为讨论热点。

## 2. 版本发布

过去 24 小时无新 Releases。

## 3. 社区热点 Issues

1. **[#7095 [CLOSED] [bug] 会话历史丢失](https://github.com/codewhale-hq/Codewhale/issues/7095)** — 今日评论最多（13 条）。涉及失败的 reset-save 保留与 Windows 控制适配器修复，"scoped recovery 已修复、具体事故仍开放"，是稳定性相关的高关注收尾话题。

2. **[#7279 [OPEN] Agents over ACP：认证流程与剩余控制项](https://github.com/codewhale-hq/Codewhale/issues/7279)** — 维护者本人提出，0.10.3 将 ACP 置于首位，此 Issue 跟踪"Codewhale 通过 ACP 运行已安装的 agent CLI"这一方向，属于路线图级议题（8 条评论）。

3. **[#6992 [OPEN] 0.10.1 ACP 回归：sandbox_mode/ask 配置被忽略](https://github.com/codewhale-hq/Codewhale/issues/6992)** — Paseo ACP 会话被强制沙箱化并需审批，破坏了 0.10.1 的配置语义，属于危害较大的行为回归（5 条评论）。

4. **[#7344 [OPEN] GNOME Terminal 退出后残留 Nord 主题配色](https://github.com/codewhale-hq/Codewhale/issues/7344)** — Linux 终端用户可感知的体验缺陷：退出后背景被留在 `#ECEFF4`，影响日常使用（4 条评论）。

5. **[#7250 [OPEN] 提议：实验性搜索的候选评估验证（仅评审）](https://github.com/codewhale-hq/Codewhale/issues/7250)** — 针对 `operate_best_of_n.workflow.js` 的 `strategy: "search"` 目前只做生成、不做验证的问题，提出 verified candidate evaluation，属于工作流质量提升方向（4 条评论）。

6. **[#7091 [CLOSED] 0.10.3：让卸载在各安装方式下完整且可验证](https://github.com/codewhale-hq/Codewhale/issues/7091)** — 源生命周期覆盖已落地，但分发渠道门禁仍开放，涉及 npm、NSIS、WinGet、mac 等多种安装路径（4 条评论）。

7. **[#7478 [OPEN] [audit] MCP 多处 11 个已验证缺陷（R22）](https://github.com/codewhale-hq/Codewhale/issues/7478)** — 覆盖 `crates/mcp/`、`engine/src/mcp/`、app-server 与 tui 的 MCP 实现，是审计系列中影响面较广的一条。

8. **[#7462 [OPEN] [audit] execpolicy、sandbox、secrets、sanitize、paths：12 个缺陷（R6）](https://github.com/codewhale-hq/Codewhale/issues/7462)** — 涉及执行策略、沙箱与密钥处理，安全敏感度高。

9. **[#7403 [CLOSED] 原始粘贴超过 64 KiB 被静默截断](https://github.com/codewhale-hq/Codewhale/issues/7403)** — `PASTE_BURST_MAX_BYTES` 导致 CJK 大段粘贴丢尾部；已关闭，对中文用户意义直接。

10. **[#7328 [OPEN] Provider 失败：诊断日志无根因、错误卡丢失错误码](https://github.com/codewhale-hq/Codewhale/issues/7328)** — 请求失败原因只以英文散文形式存在于会话记录与 receipts 中，无法进入诊断日志，影响排障效率。

## 4. 重要 PR 进展

1. **[#7503 [OPEN] fix(engine)：0.10.5 engine 审计修复（R4、R5、R6/R19 跟进、R16、R22）](https://github.com/codewhale-hq/Codewhale/pull/7503)** — 维护者提交的 engine 审计聚合 PR，分组 A（#7460、#7461）先行落地。

2. **[#7502 [OPEN] fix(tui)：0.10.5 ui/commands/views/session/pickers/app 审计修复](https://github.com/codewhale-hq/Codewhale/pull/7502)** — TUI 侧审计报告的打包修复，例如审批路由的 deny/cancel 错误改为记录而非被吞掉（对应 #7464）。

3. **[#7504 [OPEN] fix(acp)：通过 agent 模式强制执行 Ask、加固发现流程、保留错误细节](https://github.com/codewhale-hq/Codewhale/pull/7504)** — 明确标注需 Claude 评审后方可合并，针对 CW-8372「外部 agent 未执行 Ask 姿态」问题。

4. **[#7499 [OPEN] fix(skills,plugins,secrets)：R6/R19 暂存、持久性与异步阻塞修复](https://github.com/codewhale-hq/Codewhale/pull/7499)** — 修复 skill-install 的暂存竞态（stage_tarball / place_package）。

5. **[#7495 [OPEN] fix(engine)：传播 usage 计量错误、追踪子审批错误、限制 server 工具增量](https://github.com/codewhale-hq/Codewhale/pull/7495)** — 外部贡献者 NieZhuZhu 修复 R1 的全部 3 个已验证缺陷（含 `cost_status.rs`）。

6. **[#7492 [OPEN] fix(subagent)：修复 R2 的 7 个已验证审计缺陷](https://github.com/codewhale-hq/Codewhale/pull/7492)** — 同在 subagent 路径上，将此前被静默丢弃的 usage 发布错误改为 `tracing::warn!`。

7. **[#7507 [OPEN] refactor(tui)：让所有 TaskManager 消费者经由 App 的 slot](https://github.com/codewhale-hq/Codewhale/pull/7507)** — 外部贡献者 Serendo 提交，是 #7451 store-adoption 工作的前半部分，收敛 TaskManager 的四条访问路径。

8. **[#7506 [OPEN] feat(providers)：新增 AtmoRouter 内置描述符](https://github.com/codewhale-hq/Codewhale/pull/7506)** — 以与 WorldRouter（#7488）、LLMTR（#7450）相同的形式接入 OpenAI 兼容网关，扩展 provider 生态。

9. **[#7508 [CLOSED] build(engine)：将 engine crate 递归上限提升至 512](https://github.com/codewhale-hq/Codewhale/pull/7508)** — 因 macOS arm64 release 构建在 `codewhale-engine` 报 E0275 而追加的构建修复。

10. **[#7399 [CLOSED] fix(engine)：非流式并行工具调用的唯一 fallback id](https://github.com/codewhale-hq/Codewhale/pull/7399)** — 修复多个无 id 并行调用碰撞导致整轮校验失败的问题。

## 5. 功能需求趋势

- **ACP / 外部 Agent 集成**：0.10.3 以 ACP 为先（#7279），同时出现模式执行与配置语义的回归（#6992），对外部 agent 的会话生命周期管理是主线方向。
- **代码审计与健壮性收口**：大量 `[audit]` Issue（R4、R5、R6、R8、R14、R16、R17、R18、R19、R21、R22）与 `0.10.5 / simplification` 标签，显示项目正系统性地清理缺陷与死代码（另有 #7270 死代码决策清单）。
- **工作流质量验证**：从"生成候选"走向"验证候选"（#7250）。
- **Provider 生态扩展**：连续新增 OpenAI 兼容网关描述符（#7506 及可追溯的 #7488、#7450）。
- **安装/卸载生命周期**：多种分发渠道（npm、NSIS、WinGet、mac、nix、packaging）的可验证性被单独跟踪（#7091、#7477）。

## 6. 开发者关注点

- **错误可观测性不足**：Provider 失败根因无法进入诊断日志、错误码在 UI 卡片中丢失（#7328）；多处审计修复也集中在"错误被静默丢弃"上（#7495、#7492）。
- **配置语义被破坏的风险**：`sandbox_mode`/`ask` 被忽略（#6992）、Ask 姿态未被执行（#7504），说明权限与审批模型是信任核心。
- **大输入与多语言场景**：64 KiB 粘贴截断严重影响 CJK 用户（#7403）。
- **平台细节缺陷**：Linux 终端配色残留（#7344）、Windows 安装与构建问题在多个 Issue/PR 中反复出现（#7279、#7474、#7477、#7508）。
- **合并纪律**：多个 PR 明确要求先经评审再合并（#7504），审计修复按分组提交以避免 force-push，反映维护者对 review 质量的重视。

</details>

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar-personal) 自动生成。*