# AI CLI 工具社区动态日报 2026-11-08

> 生成时间: 2026-11-08 16:42 UTC | 覆盖工具: 9 个

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

# AI CLI 工具生态横向对比分析（2026-11-08）

## 1. 生态全景

今日生态呈现"**无发布、重修复**"的典型维护期特征：九款工具中仅 Qwen Code 发布正式版 v0.27.0，其余均无新版本，社区焦点全面转向缺陷闭环与安全加固。**平台稳定性**（尤其 Windows）与**认证/权限链路**成为跨工具的共同痛点，Gemini CLI 与 OpenCode 单日集中出现多条安全修复 PR，说明供应链与权限边界正进入密集修补阶段。Agent 子系统的**可观测性缺口**（状态误报、静默失败、上下文计量失真）被多款工具社区反复提出，是当前架构演进的核心矛盾。与此同时，VS Code 扩展、MCP 企业级支持、mTLS 等"从可用到生产可用"的需求正在抬升。

## 2. 各工具活跃度对比

| 工具 | Issues 动态 | PR 动态 | Release | 备注 |
|---|---|---|---|---|
| **Claude Code** | 50 条更新（展示 20） | 无 | 无 | Issue 主导；高赞需求 #84862（169👍） |
| **OpenAI Codex** | 多条，最热 #20161（211 评论/139👍，已关闭） | 约 10 条（多为 bot 提交、CLOSED） | rust-v0.169.0-alpha.3（说明仅版本号） | PR 批量落地节奏 |
| **Gemini CLI** | 10 条（含 3 个 P1） | 10 条（安全修复密集） | 无 | 安全 PR 为重点 |
| **GitHub Copilot CLI** | 10 条（含 2 条 CLOSED） | 无 | 无 | 扩展系统缺陷簇 |
| **Kimi Code CLI** | 无 | 无 | 无 | 过去 24 小时无活动 |
| **OpenCode** | 10 条（含 4 条 CLOSED） | 10 条（全部 OPEN） | 无 | #11176 达 164👍 |
| **Pi** | 10 条（含 2 条 CLOSED） | 3 条（均已关闭） | 无 | 最热 #7547（94 评论） |
| **Qwen Code** | 10 条（含 3 条 CLOSED） | 10 条 | **v0.27.0 + desktop + SDK 0.1.30 + nightly** | 今日唯一正式发版 |
| **DeepSeek TUI** | 8 条（全部列出） | 2 条（1 CLOSED） | 无 | 1 条 release-blocker |

> 注：各工具统计口径不同（部分为"展示条数"而非全量），跨列数值不宜直接比较绝对值，宜看相对结构与性质。

## 3. 共同关注的功能方向

**① 平台稳定性（Windows 为重灾区）**
- Codex：Computer Use 中断（#51524）、沙箱锁失败（#50520）、最新构建叠加复现（#60192）
- OpenCode：单核 100% 占用（#56945）、路径含空格崩溃（#62606）、端口冲突（#62749）
- Qwen Code：桌面更新 node.exe 锁定（#15276）
- Copilot CLI：PowerShell 审批（#5379）、快捷键文案（#3760）
- Claude Code：桌面提示建议回归（#103335）

**② 认证与权限链路可信度**
- Claude Code：Passkey/WebAuthn（#84862）、macOS 默认浏览器（#64630）
- Codex：手机号验证（#20161）、"已授权但不生效"类语义不一致
- DeepSeek TUI：浏览器登录后 token 校验失败（#7203，release-blocker）
- Pi：MCP OAuth 头未携带（#11918）、重连串行阻塞（#11919）

**③ Agent/子代理治理与可观测性**
- Gemini CLI：MAX_TURNS 误报成功（#22323）、通用代理挂死（#21409）、子代理 session 隔离（PR #20273）
- Codex：子代理 fail-closed 钩子（#60167）、agent tree ID（PR #60190）
- Claude Code：auto-memory 加载完整性无信号（#82056）、跨会话发送上限不可配（#94000）
- Qwen Code：Managed Agent 多子问题并行（v0.27.0）

**④ 上下文与成本计量**
- Claude Code：Max 限额（#37394）、Fable 计量偏差（#107956）
- Pi：上下文用量高估（#10287）、prompt cache 未刷新（PR #11857）
- OpenCode：compaction 缓存未命中（#25120）
- Qwen Code：按模型 autoCompactThreshold（PR #14463）、write_file 预检（#16417）

**⑤ 安全边界加固**
- Gemini CLI：CI 密钥隔离（#30090）、Git 权限绕过（#30095）、MCP OAuth 重校验（#30071）
- DeepSeek TUI：代理凭据写入日志（#7233）
- Qwen Code：Provider 脱敏泄露密码（#8136）、AUTO 模式 amend 守卫（#16075）

**⑥ IDE 集成**
- OpenCode：官方 VS Code 扩展（#11176，164👍 最高）
- Claude Code / Copilot CLI：桌面端与 `/ide` 检测问题

## 4. 差异化定位分析

| 工具 | 功能侧重 | 目标用户 | 技术路线信号 |
|---|---|---|---|
| **Claude Code** | 长会话记忆、无障碍、企业安全分类器 | 付费专业开发者/团队 | 计量与安全策略精细化，Issue 生态成熟、赞数规模大 |
| **OpenAI Codex** | Computer Use、多代理编排、云会话 | 企业/多代理工作流团队 | bot 批量 PR、指标与持久化基础设施化（Bazel 分片、agent tree） |
| **Gemini CLI** | 子代理体系、AST 代码理解、OS 沙箱 | 追求 Agent 自动化的开发者 | 安全修复密集，架构级探讨（#19873 沙箱+POSIX） |
| **GitHub Copilot CLI** | 扩展/插件系统、MCP、企业 GHEC | GitHub 生态/CI 自动化用户 | 扩展生命周期一致性、终端可观测性（OSC 7501） |
| **OpenCode** | IDE 集成、远程/企业（mTLS） | 多 IDE 用户、企业部署 | 数据驱动改进（本地会话统计）、provider 客户端证书 |
| **Pi** | MCP 生态、TUI 交互、多 provider 兼容 | 极客/自动化无人值守用户 | MCP 稳定性、配置可移植性（dotfiles） |
| **Qwen Code** | Managed Agent、Web Shell、SDK | 集成方/托管会话用户 | SDK 流式契约、CI 基础设施、上下文性能 |
| **DeepSeek TUI** | 本地化、多会话隔离、工作流评估 | 中文用户/本地工作流 | 外部贡献活跃但门槛较高（contribution-gate） |
| **Kimi Code CLI** | — | — | 今日无活动，信息不足 |

## 5. 社区热度与成熟度

- **社区规模最大**：Claude Code（单日 50 条 Issue 更新、169👍 级需求）与 OpenAI Codex（211 评论/139👍 的单一 Issue）——讨论体量与情感强度最高，且均进入"长期 Issue 未闭环"阶段（Claude #37394 自 3 月延续），**成熟度高但技术债显性化**。
- **快速迭代/修补期**：Gemini CLI、OpenCode、Qwen Code——单日各 10 条 PR，安全与核心能力修复并行；Qwen Code 是唯一发版者，节奏最"生产化"。
- **中等活跃**：Pi（MCP 问题集中爆发）、Copilot CLI（扩展缺陷簇集中）、DeepSeek TUI（8 条 Issue、1 条 release-blocker，小而精）。
- **沉默**：Kimi Code CLI 今日无任何活动，无法评估其社区成熟度。

## 6. 值得关注的趋势信号

1. **"静默失败"是可观测性的头号敌人**：Copilot CLI（MCP 被静默丢弃 #4378）、Pi（OAuth 后工具返回空 #11918）、Claude Code（auto-memory 无信号 #82056、通道不投递 #99658）均指向同一模式——失败无报错。**对开发者而言，选型时应优先评估工具的错误暴露能力**；对工具方，可见性应作为一等公民指标。

2. **计量/配额可信度成为付费体验分水岭**：Claude Code 与 OpenCode 均出现"未使用却耗尽/结果与实际的数倍偏差"。用户能接受限额但无法接受计量失真——**成本透明度正从 nice-to-have 变为留存关键**。

3. **权限语义与实际行为不一致是系统性风险**：Codex 的"已授权但不生效"（Work Mode、锁定使用）、Gemini CLI 的 settings.json 被忽略（#22267）与 context 配置被丢弃（#30068），说明**配置加载链路一致性**是跨工具的共性缺陷。

4. **安全修复进入集中期，供应链是主战场**：Gemini CLI 的 CI 密钥隔离、fork 代码执行、always-allow 规则、DNS 重绑定，叠加 DeepSeek TUI 的日志凭据泄漏——**CI/CD 与 MCP OAuth 成为新的攻击面**，企业用户在集成前应审查这些补丁的落地状态。

5. **Agent 治理从"能跑"走向"可控"**：fail-closed 钩子（Codex #60167）、抑制破坏性命令（Gemini #22672）、子代理 session 隔离（PR #20273）——**确定性拦截点与可审计轨迹**正在成为多代理架构的必备能力。

6. **IDE 集成与"生产可用"需求抬升**：OpenCode VS Code 扩展 164👍、mTLS 企业部署、MCP 重连恢复——**工具正从"个人试用"向"团队/企业部署"迁移**，远程、证书、多用户隔离将成为下一阶段竞争点。

---
*说明：本报告严格基于用户提供的 2026-11-08 各工具摘要整理，未补充外部信息；跨工具数值口径不同（部分为展示条数），比较时以性质与结构为主。*

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告（数据截止 2026-11-08）

> 说明：本次提供的 PR 数据中“评论数”字段均为 `undefined`，因此 PR 部分无法按真实评论量排序。以下“关注度”以更新活跃度、修复对象的重要性与讨论密度综合判断，并在每条中标注实际状态。所有数据均来自提供的材料。

---

## 1. 热门 Skills 排行（PR）

1. **mcp-builder 修复 — MCP v2 兼容**
   功能：修复 `mcp>=2.0.0` 中 `streamablehttp_client` 更名为 `streamable_http_client`、自定义 header 需经 `create_mcp_http_client` 配置的问题。关联 Issue #1668，涉及整个 MCP 集成链路。
   状态：OPEN｜https://github.com/anthropics/skills/pull/1742

2. **skill-creator 触发器评测修复**
   功能：解决每个 worker 的命令探测互相竞争、Windows 下子进程管道 `select()` 失败、运行期错误被误判为非触发等问题。skill-creator 是造 Skill 的 Skill，影响面大。
   状态：OPEN｜https://github.com/anthropics/skills/pull/1298

3. **webapp-testing 安全加固（去除 shell=True）**
   功能：`with_server.py` 用 `shell=True` 拼接 `cd && command` 链，存在命令注入风险，改为安全方式执行。属安全类修复，优先级高。
   状态：OPEN｜https://github.com/anthropics/skills/pull/1980

4. **docx 变更接受流程可靠性修复**
   功能：`accept_changes.py` 在 `soffice` 超时时改为报错而非误报成功，并校验输出 DOCX 中已无 `w:ins`/`w:del` 修订标记。解决“静默成功”这类隐性数据质量问题。
   状态：OPEN｜https://github.com/anthropics/skills/pull/1792

5. **notion-spec-to-implementation + quantitative-resume-auditor 双 Skill**
   功能：将产品/技术规格页拆解为 Notion 可执行任务（含验收标准）；另一个为量化简历审查。属工作流自动化方向的新增 Skill。
   状态：OPEN｜https://github.com/anthropics/skills/pull/1245

6. **pyxel 复古游戏开发 Skill**
   功能：用 Python 创建、调试、验证复古游戏，支持无头输入驱动运行与逐帧检查。作者为 Pyxel 作者 kitao，社区关注度较高，且从 2026-03 持续更新至 11 月。
   状态：OPEN｜https://github.com/anthropics/skills/pull/525

7. **proofcore-contract-auditor（Web3 智能合约审计）**
   功能：对 Solidity/Rust 合约做静态分析，并将审计凭证锚定到 TON 区块链。Web3 垂直方向的代表性提案。
   状态：OPEN｜https://github.com/anthropics/skills/pull/1771

8. **document-typography 排版质检 Skill**
   功能：防止 AI 生成文档中的孤词换行、孤行标题（widow）、编号错位等排版问题，面向所有文档产出场景。
   状态：OPEN｜https://github.com/anthropics/skills/pull/514

---

## 2. 社区需求趋势（Issues）

- **Skill 分发与信任边界（最热，46 评论）**：社区 Skill 以 `anthropic/` 命名空间分发，存在冒充官方、诱导授予高权限的信任边界风险。
  https://github.com/anthropics/skills/issues/492

- **组织级 Skill 共享**：当前需下载 `.skill` 文件经 Slack/Teams 传递、再手动上传，呼吁共享 Skill 库或直接分享（17 评论，👍 8）。
  https://github.com/anthropics/skills/issues/228

- **评测工具可靠性（多条独立 Issue 指向同一脚本）**：`run_eval.py` 触发率恒为 0%、多 worker 下 UUID 交叉匹配导致假阴性、eval-viewer 存在 XSS，说明 skill-creator 的评测管线是当前最大的质量短板。
  https://github.com/anthropics/skills/issues/556 ｜ https://github.com/anthropics/skills/issues/1352 ｜ https://github.com/anthropics/skills/issues/1394

- **上下文成本治理**：`claude-api` Skill 单次调用注入约 156k tokens，直接耗尽上下文窗口，指向“Skill 内容按需加载”的普遍诉求。
  https://github.com/anthropics/skills/issues/1487

- **Agent 状态与治理类新 Skill 方向**：compact-memory（用符号化记法压缩长期 Agent 状态）、Reasoning Quality Gate（前置校准→对抗评审→交付验证三段门）、agent-governance（策略执行、威胁检测、审计链）。
  https://github.com/anthropics/skills/issues/1329 ｜ https://github.com/anthropics/skills/issues/1385 ｜ https://github.com/anthropics/skills/issues/412

- **Skill 元数据与描述规范**：如 theme-factory 的描述只写了“做什么”、没写“何时使用”，反映对 frontmatter 描述规范的关注。
  https://github.com/anthropics/skills/issues/2064

- **插件内容重复**：`document-skills` 与 `example-skills` 安装内容相同，重复占用上下文窗口（👍 9）。
  https://github.com/anthropics/skills/issues/189

---

## 3. 高潜力待合并 PR（均为 OPEN，近期持续更新）

| PR | 内容 | 潜力判断 | 链接 |
|---|---|---|---|
| #2019 | 修复 xlsx 工作表级定义名/别名解析，消除误判 | 修 Fix #2013，2026-11-03 仍有更新，落地概率高 | https://github.com/anthropics/skills/pull/2019 |
| #1980 | webapp-testing 去除 shell=True 的命令注入风险 | 安全修复，2026-11-01 更新 | https://github.com/anthropics/skills/pull/1980 |
| #1792 | docx 超时误报成功修复 | 2026-11-01 更新，修复“静默成功”类缺陷 | https://github.com/anthropics/skills/pull/1792 |
| #2108 | README 澄清文档类 Skills 的快照状态与同步关系 | 文档治理类，2026-11-02 创建，新且方向贴合维护者需求 | https://github.com/anthropics/skills/pull/2108 |
| #1997 | skill-creator 正确解析 YAML frontmatter 标量 | 与 Issue 中大量评测/描述问题同源，价值高 | https://github.com/anthropics/skills/pull/1997 |
| #1977 / #1976 / #1975 | algorithmic-art wrapAround 越界、webapp-testing 元素识别、pptx `--cols` 参数校验 | 同一作者的一组精准小修，均关联已开 Issue，易被合入 | https://github.com/anthropics/skills/pull/1977 ｜ https://github.com/anthropics/skills/pull/1976 ｜ https://github.com/anthropics/skills/pull/1975 |

---

## 4. Skills 生态洞察

**一句话总结**：社区当前最集中的诉求是“让 Skill 生态可信、可度量、可安全共享”——一方面大量 PR/Issue 在修补 skill-creator 评测链与官方 Skill 的正确性/安全性，另一方面社区在推动命名空间信任、组织级分发与上下文成本控制。社区在拓展垂直场景（Web3、HPC、复古游戏、排版质检）的同时，更关心 Skill 本身是否可靠、可被评估、可被安全分发。

---

# Claude Code 社区动态日报（2026-11-08）

## 1. 今日速览

今日没有新版本发布，也没有 PR 更新；社区讨论集中在三类问题：**用量计量与限额失真、安全分类器误伤正常开发场景、桌面端与跨端体验缺陷**。Issue #37394（Max 计划用量过快触顶）以 93 条评论和 44 个赞继续是讨论最多的议题。#84862（Passkey/WebAuthn 登录）以 169 个赞成为当日社区支持度最高的功能请求。

## 2. 版本发布

过去 24 小时无新 Release。

## 3. 社区热点 Issues（10 条）

1. **[#37394 [BUG] Max 计划用量极快触顶](https://github.com/anthropics/claude-code/issues/37394)** — `bug, area:cost`｜93 评论 / 👍44
   当天评论最多的问题，自 3 月创建后持续活跃，说明计费/限额问题长期未闭环，直接影响付费用户的可用性预期。

2. **[#84862 [FEATURE] 全平台 Passkey（WebAuthn）登录](https://github.com/anthropics/claude-code/issues/84862)** — `enhancement, area:auth`｜31 评论 / 👍169
   当日赞数最高，反映社区对无密码认证与账号安全的一致诉求，覆盖面横跨所有客户端。

3. **[#82056 会话无法判断 auto-memory 索引的加载完整性](https://github.com/anthropics/claude-code/issues/82056)** — 76 评论 / 👍1
   评论量位列第二，涉及 `MEMORY.md` 索引被完整加载、截断或未加载时缺乏可观测信号；对依赖自动记忆的长会话工作流是可靠性隐患（环境：CLI v2.1.220、macOS）。

4. **[#42700 TTS 朗读回复 + 远程控制会话语音模式](https://github.com/anthropics/claude-code/issues/42700)** — `enhancement, area:tui, area:a11y`｜37 评论 / 👍61
   无障碍方向的高热度需求，兼具免手操作场景价值，社区讨论成熟度高。

5. **[#64630 [BUG] macOS 登录不走默认浏览器](https://github.com/anthropics/claude-code/issues/64630)** — `bug, platform:macos, area:auth, area:desktop`｜27 评论 / 👍41
   与 #84862 同属认证链路体验问题，若与 passkey 方案一同处理可一并解决。

6. **[#103335 [Desktop] Code 标签页提示建议消失](https://github.com/anthropics/claude-code/issues/103335)** — `bug, has repro, platform:macos`｜19 评论 / 👍24
   自 2026-10-13 更新后出现的回归，有可复现步骤，是典型的版本回归类缺陷。

7. **[#63751 AUP/网络安全护栏误报污染整个会话](https://github.com/anthropics/claude-code/issues/63751)** — `bug, area:model, area:security`｜17 评论 / 👍11
   指出一次误判即影响整个会话，且作者将其与 #61625、#61642、#62619 等并列，说明这是一类系统性问题，而非孤立案例。

8. **[#94000 跨会话发送上限（每次人类输入 10 条）不可配置](https://github.com/anthropics/claude-code/issues/94000)** — `enhancement, platform:windows, area:agents, area:desktop`｜12 评论 / 👍11
   涉及桌面端多会话 Agent 协作的硬性限制，直接约束多智能体编排的实际可用规模。

9. **[#107956 周度 Fable 计量 87% 但零 Fable 请求](https://github.com/anthropics/claude-code/issues/107956)** — `bug, area:cost, area:desktop`｜3 评论
   用量计量明显偏离实际；作者还称其余额度约为实际的 4 倍。与 #37394 共同指向计量系统的可信度问题。

10. **[#83497 Linux 沙箱 deny-write 占位文件落到项目目录](https://github.com/anthropics/claude-code/issues/83497)** — `reproduced`｜5 评论
    作者于今日更新：在 2.1.319 上仍可复现，并修正了根因描述，即占位文件是宿主机上的真实文件，因此每次 Bash 命令都会产生未跟踪文件，对仓库整洁度与沙箱语义都有影响。

**其他值得留意的短讨论**：[#101775](https://github.com/anthropics/claude-code/issues/101775)（Opus 5.5 网络安全护栏在会话被标记后拦截非安全类消息）、[#100212](https://github.com/anthropics/claude-code/issues/100212)（安全分类器在医疗文书场景下拒答）、[#107896](https://github.com/anthropics/claude-code/issues/107896)（Vivaldi 上 Claude in Chrome 标签组消失导致所有工具调用失败）、[#107827](https://github.com/anthropics/claude-code/issues/107827)（WebFetch 拒绝 web.archive.org）。

## 4. 重要 PR 进展

过去 24 小时无 PR 更新，本节无可报告内容。

## 5. 功能需求趋势

基于今日 50 条更新 Issue（展示 20 条）提炼：

- **认证与账号体验**：Passkey/WebAuthn 全平台登录（#84862）、macOS 默认浏览器登录（#64630）——认证是唯一同时出现在高赞与高频缺陷中的方向。
- **成本与用量可观测性**：Max 计划限额（#37394）、Fable 计量偏差（#107956）。核心诉求是计量结果准确，并且能够解释。
- **安全分类器的精确性**：AUP/网络安全误报（#63751、#101775）、医疗文档拒答（#100212）。共同点是单次误判会污染整个会话或阻断合法专业工作。
- **Agent 与多会话协作**：跨会话发送上限（#94000）、auto-memory 索引完整性（#82056）、开发通道标志在 daemon fork-resume 时丢失（#78028）、channels 在 `-p` 模式下不投递事件（#99658）。
- **桌面端/IDE 可用性**：提示建议回归（#103335）、自定义快捷键（#96882）、会话状态色点（#104548）、`sshConfigs.startDirectory` 被忽略（#91171）。
- **无障碍**：TTS 朗读与语音模式（#42700）。
- **沙箱与工具边界**：Linux 沙箱写占位文件（#83497）、WebFetch 域名检查（#107827）、Claude in Chrome 标签组（#107896）。

## 6. 开发者关注点

- **计量必须可信**：两条高评论/高赞的成本类 Issue 表明，用户能接受限额，但无法接受计量结果与自身实际使用不一致。
- **安全护栏需要按上下文判断，并且只影响局部**：网络安全、医疗等专业场景被反复误判；#63751 明确提出“一次命中污染整个会话”，因此需要细化到消息级或工具级，而不是会话级。
- **长会话与 Agent 的可观测性缺口**：auto-memory 是否完整加载没有信号（#82056），跨会话发送受不可配置的固定上限约束（#94000），多个通道相关问题都落在“静默失败”上（#78028、#99658）。
- **回归与陈旧问题并存**：#37394 自 3 月创建至今评论最多，#103335 是 10 月中旬更新引入的回归，提示回归测试与长期 Issue 的推进节奏都是关注点。
- **今日已关闭**：[#91508](https://github.com/anthropics/claude-code/issues/91508)（VS Code 扩展未遵循 `DISABLE_FEEDBACK_COMMAND=1`）、[#78028](https://github.com/anthropics/claude-code/issues/78028)（开发通道标志在 daemon fork-resume 时丢失）。

---
*说明：本期数据源在 24 小时内无 Release、无 PR，日报以 Issue 动态为主；所有条目均基于所给摘要，未补充外部信息。*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报（2026-11-08）

## 1. 今日速览
今日社区焦点集中在 **Windows 平台稳定性**：Computer Use、浏览器插件与沙箱锁在多个 Issue 中反复失败，且出现 11 月 8 日新建的高优先级报告。登录/验证链路也有重大讨论，手机号验证问题以 211 条评论、139 个赞成为过去 24 小时最热 Issue。代码侧则有一批由机器人提交的 PR 密集合并（多为 CLOSED），集中在 Code Mode 增量工具目录、指标与会话持久化。

## 2. 版本发布
- **rust-v0.169.0-alpha.3**：Release 说明仅标注版本号，无进一步变更细节，暂无可归纳的更新内容。
  链接：openai/codex Release rust-v0.169.0-alpha.3

## 3. 社区热点 Issues

1. **#20161 [CLOSED] 手机号验证失效**（211 评论 / 139 👍）
   跨设备登录改用 SSO 后被要求输入手机号，用户表示未绑定手机号即无法使用。评论量与点赞数远超其他议题，说明账号验证是影响面最广的阻塞性问题，且已关闭，值得关注其修复方式。
   链接：openai/codex Issue #20161

2. **#51524 [OPEN] Windows Computer Use 在 get_window_state 处中断**（76 评论）
   2026-10-06 起，原本可用的 Windows Computer Use 无法读取浏览器窗口状态，`sky.get_window_state` 直接终止回合。这是当前评论数最高的开放 Issue，Windows 自动化能力出现明显回归。
   链接：openai/codex Issue #51524

3. **#21781 [OPEN] Windows 浏览器插件报 “browser-client is not trusted”**（22 评论）
   在 Pro 订阅与较新 App 版本下，尽管已声明 chrome 与 iab 后端，浏览器插件仍不可信。与 #51524 共同指向 Windows 浏览器集成的信任/权限链路问题。
   链接：openai/codex Issue #21781

4. **#32396 [OPEN] macOS 自动解锁失败**（21 评论 / 10 👍）
   已启用锁定使用，但自动解锁在 macOS 上失败。属于桌面端权限与安全交互层面的高频痛点。
   链接：openai/codex Issue #32396

5. **#50520 [OPEN] Windows 沙箱 helper_sandbox_lock_failed 反复出现**（20 评论）
   打开 `%USERPROFILE%\.codex\.sandbox-bin` 时锁定失败，即使手动授予权限后仍复现，直接阻断 shell 命令执行。
   链接：openai/codex Issue #50520

6. **#20093 [OPEN] GitHub 非 review 的 @codex 评论报缺少环境**（18 评论 / 11 👍）
   `@codex review` 正常，但普通 `@codex` 评论走不通，说明 GitHub 集成中环境解析路径不一致，影响 PR 协作工作流。
   链接：openai/codex Issue #20093

7. **#54540 [OPEN] Windows 出现 “workspace routing discovery timed out”**（13 评论）
   在 goals 与 subagent 工作流中反复超时，涉及 app-server 连接与路由发现，影响多代理场景的可用性。
   链接：openai/codex Issue #54540

8. **#54179 [OPEN] Codex Cloud 内部代理 :8080 TCP 连接失败**（13 评论）
   即使已开启互联网访问仍失败，属于云环境网络配置问题，直接影响 Cloud 任务的对外连通性。
   链接：openai/codex Issue #54179

9. **#60192 [OPEN] Windows 桌面 26.1103.32239：Computer Use 超时且 shell 被沙箱锁阻断**（5 评论，当日新建）
   最新版本上同时出现 Computer Use 超时和 helper_sandbox_lock_failed，把 #51524 与 #50520 的问题叠加到最新构建，值得优先跟进。
   链接：openai/codex Issue #60192

10. **#60167 [OPEN] 子代理结果在进入父代理前的 fail-closed 钩子**（7 评论）
    请求同步、fail-closed 的钩子，在子代理结果写入父代理上下文前进行拦截。反映社区对多代理安全与可控性的明确需求。
    链接：openai/codex Issue #60167

其他值得留意的当日新建报告：#60193（浏览器/计算机控制工具在会话间消失、重试消耗额度）、#59855（Windows Desktop 恢复云端会话报 AbsolutePathBuf 错误）、#59890（Images 2.6 在 OAuth 第三方客户端不可用）。

## 4. 重要 PR 进展

以下 PR 均显示为 CLOSED，且多数由 copyberry[bot] 提交，反映内部批量落地节奏。

1. **#60206 将 Bazel core 单测分片从 8 提升到 16**
   缩短核心单元测试耗时。
   链接：openai/codex PR #60206

2. **#60190 暴露 agent tree ID 与环境移除能力**
   新增 `CodexThread::agent_tree_id()`，根与原生子节点共享 ID，便于区分代理树生命周期。
   链接：openai/codex PR #60190

3. **#60188 允许对增量 Code Mode 工具消息做模型覆盖**
   为 `incremental_tools` 增加 `exec_tools_update_hint` 与 `exec_tools_removed_definitions_header`。
   链接：openai/codex PR #60188

4. **#60186 登录过程中允许创建自定义 provider**
   此前自定义 provider 登录必须已有网关配置，否则报错停止；现在可直接在登录流程创建。
   链接：openai/codex PR #60186

5. **#60181 侧边栏标签的键鼠导航**
   新增可配置的 `sidebar_up` / `sidebar_down`，支持循环切换，默认 leader 快捷键使用 Shift-Tab。
   链接：openai/codex PR #60181

6. **#60180 技能补全后附加标点**
   修复技能补全固定插入空格、导致 `$rustdoc ,` 这类多余空白的问题。
   链接：openai/codex PR #60180

7. **#60177 为增量 exec 目录更新增加指标**
   统计 `codex.tools.exec_entry_updates` 的 added / schema_changed / removed 增量。
   链接：openai/codex PR #60177

8. **#60173 测试 exec 目录在会话与压缩变化下的保持**
   覆盖 resume、fork、工具模式切换与压缩场景，验证后台命令采纳行为。
   链接：openai/codex PR #60173

9. **#60172 在答案审核中保留展示指令**
   为恢复的答案历史附加 `display` 指令，使客户端能按原意渲染。
   链接：openai/codex PR #60172

10. **#60152 持久化本地工作区侧边聊天并支持关闭标签**
    侧边聊天作为附件保存到父会话，并可从侧边栏重新打开。
    链接：openai/codex PR #60152

仍处于 OPEN 的长期 PR 也值得关注：#30880（识别 Vite+ 管理的 Codex 安装）、#30509 与 #30500（MCP 后台启动期间允许 review / 未完成 MCP 服务器不阻塞 review）。

## 5. 功能需求趋势
- **Computer Use / 浏览器自动化可靠性**：Windows 与 macOS 上的窗口状态读取、浏览器插件信任、会话间工具消失等问题密集（#51524、#21781、#60193、#60149、#51245），是当前最集中的方向。
- **沙箱与权限模型**：Windows 沙箱锁失败、macOS 自动解锁、Work Mode 声称 Full Access 实际仍为 workspace-write（#54691），显示权限语义与实际执行不一致。
- **多代理与子代理治理**：子代理结果拦截钩子（#60167）、agent tree ID（PR #60190）、subagent 路由超时（#54540）。
- **云与网络连通性**：Codex Cloud 代理连接（#54179）、GitHub 集成环境解析（#20093）。
- **新模型/图像能力接入**：Images 2.6 在 OAuth 第三方客户端无法选择模型或使用新输出（#59890）。
- **会话与数据持久化**：Projects 从侧边栏消失但记录仍在 SQLite（#55869）、云端会话恢复报错（#59855）、侧边聊天持久化（PR #60152）。

## 6. 开发者关注点
- **Windows 平台回归是首要痛点**：Computer Use、浏览器插件、沙箱锁三类问题在最新构建（26.1103.x）上仍复现，且当日新增报告，说明修复尚未覆盖最新版本。
- **权限与配置语义需更透明**：多起 Issue 涉及“已授权/已启用但实际不生效”（锁定使用、Full Access、浏览器信任），开发者需要明确的状态与实际行为一致。
- **工作流阻塞而非体验瑕疵**：手机号验证（#20161）、GitHub @codex 评论（#20093）、shell 被沙箱阻断（#50520）会直接中断开发流程，优先级应高于界面细节。
- **额度消耗与失败重试**：#60193 提到重试在任务未完成时消耗用量，涉及成本透明度。
- **对可控性与安全钩子的诉求上升**：#60167 的 fail-closed 钩子说明团队希望在多代理链路上拥有确定性拦截点。
- **支持流程本身成为议题**：#56737 反映 AI 辅助支持升级循环、重复关闭工单、缺乏责任归属，值得产品侧关注。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报（2026-11-08）

## 今日速览

今日无新版本发布，社区动态集中在 Agent 子系统的稳定性与安全问题。Issues 侧最突出的信号是子代理状态误报（MAX_TURNS 被报告为 GOAL 成功）与通用代理挂死两个 P1 问题持续活跃；PR 侧则出现多条与 CI 密钥隔离、Git 命令权限绕过相关的安全修复，说明供应链与权限边界正成为维护重点。

## 版本发布

过去 24 小时无新 Release。

## 社区热点 Issues

1. **#22323 [P1] 子代理 MAX_TURNS 中断被误报为 GOAL 成功**（13 评论）
   `codebase_investigator` 在未做任何分析即触及轮次上限时，仍返回 `status: "success"` 与 `Termination Reason: "GOAL"`，用户无法区分"完成"与"被打断"。这直接损害结果可信度，是今日评论最多的议题。
   https://github.com/google-gemini/gemini-cli/issues/22323

2. **#21409 [P1] Generalist agent 永久挂起**（8 评论，👍8）
   只要 CLI 转交通用代理就无限挂起，简单的建目录操作也能卡住一小时，且已进入 need-retesting 状态。高赞表明受害者面广，是当前最影响可用性的阻塞项。
   https://github.com/google-gemini/gemini-cli/issues/21409

3. **#21968 [P2] Gemini 不主动使用 skills 与子代理**（7 评论）
   反馈称除非显式指令，模型几乎不会自行调用自定义 skill 或子代理。这关系到 Agent 体系的实际价值，若模型不主动编排，多代理架构形同虚设。
   https://github.com/google-gemini/gemini-cli/issues/21968

4. **#22267 [P2] Browser Agent 忽略 settings.json 覆盖项**（5 评论）
   `maxTurns` 等全局/项目级配置被完全忽略，`AgentRegistry` 的相关配置未生效。配置系统失效会让用户对行为预期失控。
   https://github.com/google-gemini/gemini-cli/issues/22267

5. **#21983 [P1] Wayland 下 browser 子代理失败**（4 评论）
   在 Wayland 环境浏览器子代理直接失败，属于 Linux 桌面用户的平台兼容硬伤。
   https://github.com/google-gemini/gemini-cli/issues/21983

6. **#20079 [P2] 符号链接形式定义的 agent 不被识别**（4 评论）
   `~/.gemini/agents/filename.md` 为 symlink 时不会被当作子代理加载，影响用 dotfiles 管理配置的开发者。
   https://github.com/google-gemini/gemini-cli/issues/20079

7. **#24246 [P2] 工具数超过阈值触发 400 错误**（3 评论）
   标题称 >128 工具，正文描述为 >400 时出现 400 错误，期望代理能更智能地收敛工具范围。随着 MCP 工具增多，此问题会放大。
   https://github.com/google-gemini/gemini-cli/issues/24246

8. **#22672 [P2] Agent 应抑制破坏性操作**（3 评论）
   复杂 git 场景下模型会使用 `git reset`、`--force` 等命令，即使存在更安全的替代方案。这是 Agent 自主执行时代价最高的一类风险。
   https://github.com/google-gemini/gemini-cli/issues/22672

9. **#19873 [P2] 零依赖 OS 沙箱与执行后意图路由**（9 评论）
   提议利用 Gemini 3 对 POSIX 工具链（grep/cat/sed/awk）的原生亲和性，通过沙箱释放 bash 能力。属于较大的架构方向探讨，互动较多。
   https://github.com/google-gemini/gemini-cli/issues/19873

10. **#22745 [P2] 评估 AST 感知的文件读取、搜索与代码库映射**（7 评论）
    EPIC 议题，探索用 AST 感知工具减少轮次、更精确读取方法边界。与 #22746 联动，指向代码理解能力的下一阶段优化。
    https://github.com/google-gemini/gemini-cli/issues/22745

## 重要 PR 进展

1. **#30090 CI 安全：不向 fork 代码暴露 GEMINI_API_KEY**
   `chained_e2e.yml` 在带 secrets 的 base-repo 上下文中检出 fork PR 代码并运行构建与集成测试，存在密钥泄露面。
   https://github.com/google-gemini/gemini-cli/pull/30090

2. **#30066 安全 PoC：package.json 脚本注入金丝雀（请勿合并）**
   通过替换 build 与 sandbox 测试脚本，验证 `Trigger E2E` → `Chained E2E` 链路会执行 fork 分支代码，作为 Google OSS VRP 报告的前置证明。
   https://github.com/google-gemini/gemini-cli/pull/30066

3. **#30095 [P1] 修复 Windows 下 git diff 权限绕过**
   危险 git 参数可能被误判为安全的只读操作，PR 将 Git 命令安全校验抽取为共享 helper 并统一应用。
   https://github.com/google-gemini/gemini-cli/pull/30095

4. **#30196 阻止对"被污染"shell 命令保存 always-allow 规则**
   对含不可信 flag 或构建文件变更后的命令选择"始终允许"时，仍会为命令根（如所有 `npm ...`）持久化放行规则，本次修复该漏洞。
   https://github.com/google-gemini/gemini-cli/pull/30196

5. **#30088 错误报告移出共享临时目录**
   `gemini-client-error-*.json` 含完整对话历史，原先以默认权限写入 `os.tmpdir()`；改为写入 `~/.gemini/tmp/error-reports/` 并仅限本用户可读。
   https://github.com/google-gemini/gemini-cli/pull/30088

6. **#30071 MCP OAuth 请求改走安全 dispatcher**
   OAuth 端点仅在检查时校验一次，元数据与注册请求随后走全局 dispatcher，存在 DNS 重绑定（检查时公网、连接时内网）风险。
   https://github.com/google-gemini/gemini-cli/pull/30071

7. **#30068 将 context management 配置下发至 core**
   当前配置的输出遮蔽阈值（如 400,000 tokens）被丢弃，core 仍保留默认 50,000，属配置未生效类问题。
   https://github.com/google-gemini/gemini-cli/pull/30068

8. **#20273 [P1] 为子代理生成独立 session ID**
   子代理继承父会话 ID，导致 `.gemini/tmp/*/chats/` 下会话记录互相覆盖，影响调试与回放。
   https://github.com/google-gemini/gemini-cli/pull/20273

9. **#29912 [已关闭] 清理 web_fetch URL 尾部标点与不配对括号**
   `parsePrompt()` 按空白切分后直接传入 `new URL()`，导致逗号分隔的 URL 列表被污染。已关闭。
   https://github.com/google-gemini/gemini-cli/pull/29912

10. **#29919 [已关闭] 新增 --append-system-prompt**
    支持在不替换的前提下向系统提示追加指令（含文件与环境变量形式）。已关闭，可关注是否以其他形式回归。
    https://github.com/google-gemini/gemini-cli/pull/29919

## 功能需求趋势

- **子代理编排与可观测性**：多条议题指向"模型不主动用子代理"、子代理轨迹难以查看（#22598 提议通过 `/chat share` 暴露）、子代理 session 隔离等问题，社区希望 Agent 体系更可预测、可审计。
- **代码理解增强**：AST 感知的读取/搜索/映射（#22745、#22746）与 codebase investigator 改造（#18282）构成一条清晰的"减少轮次、提高精度"路线。
- **浏览器代理成熟度**：配置生效、会话接管与锁恢复（#22232）、Wayland 兼容（#21983）显示 browser_agent 正从可用走向健壮。
- **沙箱与安全边界**：OS 级沙箱 + bash 原生能力（#19873）、抑制破坏性命令（#22672）反映对"放权"与"约束"平衡的诉求。
- **工具规模治理**：工具数过多导致 400（#24246），提示需要对启用工具集做动态裁剪。

## 开发者关注点

- **可用性阻塞优先于新功能**：Agent 挂死（#21409）与状态误报（#22323）是当前最痛的两点，且都带有 `status/need-retesting` 标签，说明修复已在推进但尚未确认。
- **配置可信度问题反复出现**：settings.json 被忽略（#22267）、context management 阈值被丢弃（#30068）、symlink agent 不被识别（#20079），共同指向配置加载链路的一致性缺陷。
- **安全修复进入密集期**：今日 PR 集中覆盖 CI 密钥隔离、Git 权限绕过、always-allow 规则、临时文件权限、MCP OAuth 重校验，建议关注方重点评审 #30090 与 #30095。
- **平台兼容性仍有缺口**：Windows（git diff 绕过、权限语义）与 Linux/Wayland（浏览器子代理）是两大薄弱面。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报（2026-11-08）

## 1. 今日速览

过去 24 小时内无新版本发布，也无 PR 更新，社区动态主要集中在 Issues 层面。最突出的主题是 **扩展（Extensions）/插件系统的会话生命周期缺陷**——同一位报告者连续提交 3 个相关 Issue，涉及 `new_context` 后技能丢失、`create_session` 不启动扩展、prompt 模式下扩展工具权限请求永久挂起。此外，MCP OAuth 令牌复用、Windows PowerShell 审批策略、会话状态文件存放位置等也是高关注度话题。

## 2. 版本发布

过去 24 小时无新 Release。

## 3. 社区热点 Issues（10 条）

1. **#5320 [OPEN] 支持 OSC 7501 代理状态上报（Herdr 终端集成）** 👍 11
   请求 Copilot CLI 原生支持 OSC 7501（Program Status Protocol），以便 Herdr 等终端展示会话与活动状态。👍 数最高，反映终端生态对 CLI 可观测性的真实需求。
   https://github.com/github/copilot-cli/issues/5320

2. **#3760 [CLOSED] 快捷键文案与实际行为不符：提示"ctrl+enter enqueue"，实际 ctrl+enter 换行、ctrl+q 才是入队** 👍 12
   Windows 平台输入体验问题，已有视频复现，👍 数最高，属直接影响日常操作的易用性缺陷，现已关闭。
   https://github.com/github/copilot-cli/issues/3760

3. **#4695 [OPEN] HTTP MCP 服务器的 OAuth 令牌跨会话复用不可靠** 👍 2
   PKCE 公共客户端场景下缓存键哈希不一致，导致重复授权。影响所有使用 OAuth MCP 服务器的用户，是 MCP 集成的核心可靠性问题。
   https://github.com/github/copilot-cli/issues/4695

4. **#4378 [OPEN] 云代理：GHEC 数据驻留环境下 MCP registry 策略拉取 401/403，静默屏蔽所有用户配置的 MCP 服务器**
   企业级严重问题：在 `<tenant>.ghe.com` 上用户自定义 MCP 服务器被静默丢弃。对企业用户可信度影响大，且问题定位困难（无报错）。
   https://github.com/github/copilot-cli/issues/4378

5. **#5381 [OPEN] prompt 模式下扩展工具的权限请求永久等待而非拒绝，且 `--allow-tool` 无法指定扩展工具**
   `copilot -p` 无人值守场景下运行会挂起直至被杀，直接阻断 CI/自动化使用扩展工具的可能。
   https://github.com/github/copilot-cli/issues/5381

6. **#5382 [OPEN] 通过扩展 `skillDirectories` 注册的技能在 `new_context` 后消失，恢复的会话也看不到**
   会话上下文清理与技能注册状态不同步，导致技能工具报"Skill not found"。
   https://github.com/github/copilot-cli/issues/5382

7. **#5380 [OPEN] 用 `create_session` 创建的会话不会启动扩展，直到用户切换过去**
   新会话缺失扩展的工具、技能与 hooks，破坏扩展系统的预期语义。
   https://github.com/github/copilot-cli/issues/5380

8. **#5384 [OPEN] 会话状态产物存放在 `~/.copilot/session-state/<id>/files/`，使项目交付物游离于 Git 仓库之外**
   代理生成的架构审计、测试报告等被写到仓库外，与"交付物应纳入版本控制"的工作流冲突，涉及数据可追溯性。
   https://github.com/github/copilot-cli/issues/5384

9. **#5379 [OPEN] 1.0.107 中 PowerShell 审批解析器对简单 git 命令仍要求整脚本审查**
   即使已授权 git 命令，仍触发权限提示。Windows 用户高频摩擦点，降低自动化效率。
   https://github.com/github/copilot-cli/issues/5379

10. **#4977 [CLOSED] / #4918 [CLOSED] 内置 ARM64 ripgrep 在 16KB/64KiB 页内核上因 jemalloc 崩溃（Asahi Linux 等）**
    两个 Issue 同源并均已关闭：捆绑 ripgrep 静态链接的 jemalloc 假设 4KB 页，在非标准页大小 ARM64 内核上初始化即 abort。影响 Linux ARM64 开发者。
    https://github.com/github/copilot-cli/issues/4977 ｜ https://github.com/github/copilot-cli/issues/4918

> 其他值得留意：#5383（允许配置默认 Agent）、#5023 [CLOSED]（会话指标被存为掩码字符串导致会话永久无法恢复）、#4909 [CLOSED]（沙箱下 `/ide` 将 `kill(pid,0)` 的 EPERM 误判为进程已死）、#5374（桌面端未渲染 postToolUse hook 的 `modifiedResult`）。

## 4. 重要 PR 进展

过去 24 小时无 PR 更新。

## 5. 功能需求趋势

- **扩展/插件系统成熟度**：#5380、#5381、#5382、#5374 集中暴露扩展在会话创建、上下文清理、非交互模式、桌面端渲染等环节的生命周期不一致问题，是当前最密集的功能缺陷簇。
- **MCP 与企业环境支持**：#4695（OAuth 令牌复用）、#4378（GHEC 数据驻留策略拉取）显示 MCP 从"能用"走向"企业可用"仍有关键缺口。
- **终端/IDE 集成可观测性**：#5320（OSC 7501 状态上报）、#4909（沙箱下 `/ide` 检测失败）反映 CLI 与外部工具链的协作需求上升。
- **可配置默认行为**：#5383（默认 Agent）延续社区对"减少每次会话重复配置"的诉求，与已有的默认模型/默认工具配置形成一致方向。
- **跨平台输入与审批体验**：#3760（Windows 快捷键）、#5379（PowerShell 审批）显示 Windows 平台体验仍是短板。
- **非标准运行环境兼容性**：#4977/#4918（ARM64 大页内核）提示对异构 Linux 发行版的支持需加强。

## 6. 开发者关注点

- **自动化/无人值守场景的可靠性**：prompt 模式下权限请求挂起（#5381）会让 CI 运行无限等待，是阻断性痛点。
- **静默失败难以排查**：#4378 中 MCP 服务器被静默丢弃、#5023 中会话因掩码字符串永久无法恢复，开发者需要更明确的错误暴露与更健壮的状态解析。
- **扩展状态一致性**：技能与工具在上下文切换、会话恢复、新建会话后丢失，破坏开发者对插件能力的信任。
- **产物与版本控制工作流**：会话产物被写到仓库外（#5384），与团队协作和审计流程不匹配。
- **平台细节打磨**：快捷键文案、审批粒度、大页内核兼容等"小问题"反复出现在高 👍 或高频报告中，直接影响日常使用流畅度。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 — 2026-11-08

## 1. 今日速览

今日无新版本发布，社区讨论集中在**免费模型配额异常**（多条独立 Issue 反映配额在重置后立即耗尽）和**桌面端/Windows 平台稳定性**（Edit 工具失败、shell 路径含空格崩溃、后台服务端口冲突）。功能侧，官方 VS Code 扩展请求（#11176，164 👍）持续升温，仍是呼声最高的特性；PR 方面 MCP 连接恢复、mTLS 客户端证书支持等核心能力修复值得关注。

## 2. 版本发布

过去 24 小时无新版本发布。值得注意的是，多条 Issue 指向 **v2.2.5 / v2.2.6** 升级与运行问题（见下文 #62058、#62606）。

## 3. 社区热点 Issues

1. **[#11176] Official OpenCode VS Code extension**（OPEN，39 评论，164 👍）
   社区最关注的特性请求，要求提供官方 VS Code 扩展。👍 数远超其他 Issue，反映 IDE 集成是最大诉求。
   https://github.com/anomalyco/opencode/issues/11176

2. **[#23153] Pay Go with crypto**（CLOSED，35 评论，67 👍）
   为 OpenCode Go 增加加密货币支付支持，讨论热度高，现已关闭。
   https://github.com/anomalyco/opencode/issues/23153

3. **[#62644] Edit tool consistently failing**（OPEN，6 评论）
   多个 LLM 在桌面版通过 Edit 工具一致失败，属于直接影响核心编码体验的严重缺陷。
   https://github.com/anomalyco/opencode/issues/62644

4. **[#56945] Windows 桌面端单核 100% 占用（内核态）**（OPEN，6 评论）
   在被阻止的 grep 权限请求工作目录被删除后，托管服务永久占满一个 CPU 核心。影响面广、复现条件明确。
   https://github.com/anomalyco/opencode/issues/56945

5. **[#62749] 后台服务绑定机器级全局端口导致多用户 Windows 冲突**（OPEN，4 评论）
   每用户服务却监听固定端口（28894），多账户机器上必然冲突。已有配套文档 PR #62755。
   https://github.com/anomalyco/opencode/issues/62749

6. **[#62606] shell 可执行路径含空格导致所有 shell 调用失败（Windows）**（CLOSED，4 评论）
   v2.2.6 升级后，用户名含空格或 Store 版 PowerShell 7 的用户 shell 工具全部失效，属升级回归。
   https://github.com/anomalyco/opencode/issues/62606

7. **[#54371] ACP 斜杠命令执行但不输出流内容**（OPEN，5 评论，5 👍）
   在 JetBrains Rider 中作为 ACP agent 运行时，`/init` 等命令执行成功但聊天中看不到输出，影响 IDE 集成可用性。
   https://github.com/anomalyco/opencode/issues/54371

8. **[#25120] 约 90% 的 compaction 成本是可避免的缓存未命中**（CLOSED，6 评论，6 👍）
   针对长多轮会话的压缩成本优化提案，对成本和性能敏感用户价值高。
   https://github.com/anomalyco/opencode/issues/25120

9. **[#62593] 免费模型配额数日未使用后仍显示耗尽**（CLOSED，4 评论）
   与 #62604 共同指向免费配额/重置逻辑异常，直接影响付费与免费用户体验。
   https://github.com/anomalyco/opencode/issues/62593

10. **[#62724] 让 /goal 轮次上限可配置（当前固定 50）**（OPEN，4 评论）
    长任务场景下 50 次续接即中止，社区希望可调。
    https://github.com/anomalyco/opencode/issues/62724

（其他同类问题：#62604 免费模型 "big pickle" 配额重置后立即耗尽；#62058 CLI 升级至 2.2.5 失败；#62055 WSL 下严重卡顿；#62748 macOS 窗口无法拖动。）

## 4. 重要 PR 进展

1. **[#62756] core：MCP 连接断开后保留工具并自动重连**（OPEN）
   stdio 崩溃或 HTTP 会话过期后工具立即消失的问题得解，服务不再卡在 `failed` 状态。
   https://github.com/anomalyco/opencode/pull/62756

2. **[#61832] core：模型请求时出示 provider 客户端证书（mTLS）**（OPEN，新功能）
   为企业网关场景解除 TLS 握手拒绝，是向内网/企业部署迈出的关键一步。
   https://github.com/anomalyco/opencode/pull/61832

3. **[#62147] core：tail 从文件末尾读取，缺失文件建议相近名称**（OPEN）
   基于一周本地会话统计：583 次越界 offset 读取失败、1,5…（摘要截断）次相关失败，属数据驱动的可用性改进。
   https://github.com/anomalyco/opencode/pull/62147

4. **[#62176] core：让 Code Mode 目录更新更小更稳定**（OPEN）
   解决共享 2k token 预算导致目录频繁全量重述（约 2.2k token）的问题，降低 token 开销。
   https://github.com/anomalyco/opencode/pull/62176

5. **[#62686] core：将构建元数据设为必需服务，避免特性开关静默回退**（OPEN）
   修正 flag 解析优先级可导致回退到发布默认值的问题。
   https://github.com/anomalyco/opencode/pull/62686

6. **[#58399] app：Android 使用 Service Worker 通知**（OPEN）
   Chrome for Android 拒绝 `new Notification(...)`，改用 SW 通知路径，关闭 #49961。
   https://github.com/anomalyco/opencode/pull/58399

7. **[#62736] desktop：交互式 shell 探测超时后回退到登录 shell**（OPEN）
   重启后 `zsh -il -c 'env -0'` 超 5 秒即放弃探测的问题得解，关闭 #62732。
   https://github.com/anomalyco/opencode/pull/62736

8. **[#62753] core：支持可调用的 Standard Schema 校验**（OPEN）
   识别携带 `~standard` 的可调用 schema，修复工具运行时校验（关闭 #62746）。
   https://github.com/anomalyco/opencode/pull/62753

9. **[#62755] docs：记录服务端口与主机名设置**（OPEN）
   配合 #62749，新增"修改服务端口"章节，缓解多用户端口冲突。
   https://github.com/anomalyco/opencode/pull/62755

10. **[#54149] tui：在子会话中隐藏 Subagents 卡片**（OPEN）
    新增可选设置 `session.hide_subagents_in_child_sessions`，改善子会话界面噪音。
    https://github.com/anomalyco/opencode/pull/54149

## 5. 功能需求趋势

- **IDE 集成**：官方 VS Code 扩展（#11176）为最强需求；ACP/斜杠命令输出（#54371）显示 JetBrains 场景同样受关注。
- **多模态输入**：桌面端语音/语音输入支持（#33300，10 评论）。
- **支付与订阅**：加密货币支付（#23153）及免费/付费配额逻辑（#62593、#62604）反映商业化体验是焦点。
- **可配置性**：`/goal` 轮次上限（#62724）、子会话显示项（#54149）等显示社区希望更多行为可调。
- **文档完善**：MCP 命令用法（#55285）、服务端口（#62755）等文档缺口被持续提出。
- **性能与成本**：compaction 缓存优化（#25120）指向长会话成本控制。

## 6. 开发者关注点

- **平台稳定性**：Windows 是问题高发区——CPU 核心占满（#56945）、shell 路径含空格（#62606）、后台服务端口冲突（#62749）；macOS 窗口拖动（#62748）、WSL 卡顿（#62055）亦有反馈。
- **升级回归**：多条 v2.2.5/v2.2.6 相关 Issue 表明升级路径存在风险（#62058、#62606）。
- **核心工具可靠性**：Edit 工具一致失败（#62644）与 tail/读取行为（#62147）直接影响日常编码流程。
- **配额与计费透明度**：免费模型配额重置异常引发付费用户不满（#62593、#62604），需服务端配额逻辑审查。
- **企业/远程场景**：mTLS（#61832）、远程会话消息去重（#62651）、SSH 兼容性提示错误（#62582）显示远程与企业部署需求增长。

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报 · 2026-11-08

> 数据来源：github.com/badlogic/pi-mono（earendil-works/pi）。过去 24 小时无新版本发布。

## 1. 今日速览

今天没有新 Release，社区动态集中在 issue 的讨论和整理：Windows 使用体验的汇总帖（#7547）持续升温，已有 94 条评论；MCP 远程 OAuth 与重连问题集中爆发，类似问题在当天提交并关闭；同时有多条"配置项不应写入全局设置"的意见被关闭（#6415、#10187）。PR 侧以缓存预热、codemode 修复和文档修正为主。

## 2. 版本发布

过去 24 小时无新版本发布。

## 3. 社区热点 Issues（10 条）

1. **#7547 [Windows] 如何在 Windows 上使用 Pi** — 94 条评论，是当前最热帖。作者指出 Windows 上运行 Pi 的方式太多，难以判断应把精力投入到修复 bug、完善文档还是其他方向，属于平台支持方向的汇总讨论，值得 Windows 用户跟进。  
   https://github.com/earendil-works/pi/issues/7547

2. **#10287 [bug] `getContextUsage()` 在网络错误后严重高估上下文** — 在 0.99.2 上，可重试的网络错误导致上下文用量从约 42k tokens 跳到 330,081。这直接影响上下文压缩与费用判断，属于核心可靠性问题。  
   https://github.com/earendil-works/pi/issues/10287

3. **#10162 [bug] 过多输入图片会中断 agent 任务** — 用户依赖 Pi 长时间无人值守运行（例如盯 PR、做 QA），图片输入导致任务中断，影响长时间自动化场景。  
   https://github.com/earendil-works/pi/issues/10162

4. **#11918 [MCP] OAuth 成功后会话/认证头未携带，MCP 工具返回空结果** — 在 pi 1.5.0 上，Google Workspace MCP 远程服务器的问题。认证链路缺陷会让 MCP 集成在生产场景下不可用。  
   https://github.com/earendil-works/pi/issues/11918

5. **#11919 [MCP] 无法连接的服务器导致重连阻塞 2–4 分钟，且单个服务器重新认证会触发全部重新握手** — 配置 3 个以上 MCP 服务器时，重连逐个串行执行，包括未认证的服务器，这会造成明显卡顿。  
   https://github.com/earendil-works/pi/issues/11919

6. **#10862 [bug] 鼠标选中时硬件光标跳到错误列（1.2.0）** — `showHardwareCursor: true` 下光标位置计算有误，属于 TUI 交互细节但影响编辑体验。  
   https://github.com/earendil-works/pi/issues/10862

7. **#11122 [codemode] `schemaToType` 渲染 allOf 时丢失同级类型** — 带 allOf 约束的 string schema 被渲染为 `unknown`，导致 Code Mode 中 `find`、`replace` 等参数类型信息丢失，影响开发者编写工具的体验。  
   https://github.com/earendil-works/pi/issues/11122

8. **#11923 [bug] TUI 退格会破坏短粘贴标记** — 删除 `[paste #1]` 后残留标记变成 `[paste #1undefined]`，回车会提交损坏的标记。  
   https://github.com/earendil-works/pi/issues/11923

9. **#11913 [bug] 严格 OpenAI 兼容供应商拒绝含 `uniqueItems` 的工具 schema（400）** — 在 OpenRouter 上的 `liquid/lfm-3-1.7b:free` 等严格供应商处复现，影响工具调用的兼容性。  
   https://github.com/earendil-works/pi/issues/11913

10. **#6415 / #10187 配置项不应写入全局配置文件** — 两条均已关闭：`lastChangelogVersion` 与 `deviceId` 分别建议移出配置文件与全局 settings，理由是用 git 同步 dotfiles 的用户被设备特定字段干扰（分别获 👍5、👍6）。  
   https://github.com/earendil-works/pi/issues/6415 · https://github.com/earendil-works/pi/issues/10187

## 4. 重要 PR 进展（3 条）

过去 24 小时仅有 3 条更新的 PR，以下全部列出：

1. **#11857 feat: p2 中的 prompt cache 预热**（作者 mitsuhiko，已关闭）— 指出 p2 使用 5 分钟 Anthropic prompt cache 但从不刷新，间隔超过 305 秒的请求会重写整个 prompt；10 月 12 日至 11 月 5 日的 p2 会话中发生 789 次。属成本与延迟优化。  
   https://github.com/earendil-works/pi/pull/11857

2. **#11920 fix(codemode): 允许脚本声明自己的 tools 和 console 绑定**（已关闭）— 修复 #11226：codemode 脚本顶层声明 `tools` 或 `console` 时抛 `SyntaxError: invalid redefinition of parameter name`、无法运行。  
   https://github.com/earendil-works/pi/pull/11920

3. **#11900 docs: 修正 CONTRIBUTING.md 中的 RFC 链接**（已关闭）— 链接尾部斜杠导致 404。  
   https://github.com/earendil-works/pi/pull/11900

## 5. 功能需求趋势

- **MCP 生态成熟度**：OAuth 认证传递、重连策略、连接状态对外发布（#10871，供自定义 footer 使用）成为集中诉求，表明 MCP 正从"能用"走向"稳定可用"。
- **配置与设备标识分离**：多设备、dotfiles 管理场景下，要求将 `lastChangelogVersion`、`deviceId` 等字段移出共享配置。
- **多模态输入扩展**：有需求希望支持视频/音频附件（#2809），当前仅支持 JPEG/PNG/GIF/WEBP 图片。
- **会话控制精细化**：新增"清空上下文但保留模型与思考等级"的 `/clear`（#11925）、"中断模型但不中止输出"（#11917）。
- **供应商覆盖与兼容**：为 `minimax`/`minimax-cn` 增加 OAuth 登录（#11915）；兼容严格 OpenAI 供应商的 schema 约束（#11913）；处理 Mistral 数组式 `delta.content`（#11916）。
- **Windows 平台支持**：通过 #7547 汇总运行方式与问题，明确投入方向。

## 6. 开发者关注点

- **可靠性优先**：上下文用量计算异常（#10287）、图片过多导致 agent 任务中断（#10162）都发生在长时间无人值守运行中，是开发者最在意的稳定性问题。
- **MCP 认证与重连体验**：#11918/#11919 显示 OAuth 头传递和串行重连会带来数分钟卡顿，直接影响日常使用。
- **配置可移植性**：用 git 管理 dotfiles 的用户反复要求把设备相关字段与用户配置分开。
- **TUI 交互细节**：光标定位（#10862）、退格处理粘贴标记（#11923）、Shift+Enter 换行（#4918）等小问题持续被反馈。
- **第三方供应商兼容性**：OpenCode Zen 会话 ID 被拒（#9690）、OpenRouter 的 PII 拦截后报错（#11928）、严格供应商拒绝 schema 关键字（#11913），说明多 provider 路径仍是 bug 高发区。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报 · 2026-11-08

## 1. 今日速览

Qwen Code 正式发布 **v0.27.0**，带来 Managed Agent 多子问题并行会话、Web Shell 问答热力图等能力，桌面端与 TypeScript SDK（0.1.30，捆绑 CLI v0.27.0）同步跟进。社区侧由 **P1 级 Hosted v2 detach 卡死问题**（#16579）和 **Windows 桌面更新锁文件失败**（#15276 已关闭）等平台级缺陷主导讨论；CI/CD 稳定性与 Windows 平台问题持续占据高频 Issue。上下文管理成为新功能呼声最集中的方向。

## 2. 版本发布

- **v0.27.0（正式版）**
  - Managed Agent 会话可同时持有多个子问题，支持任意顺序作答，并按子问题隔离草稿与错误（#16484）。
  - Web Shell 新增任务问答热力图与 "Ask for d…" 相关问询入口。
  - 文档补充 Wally 作为 OpenAI 兼容 Provider。
- **desktop-v0.27.0**：修复 GitHub 频道入站读取失败后恢复机制失效的问题（#16402）等。
- **sdk-typescript-v0.1.30**：捆绑 CLI 版本 0.27.0（由源码同分支构建）。
- **v0.26.9-nightly.20261107.65e1f1aeaa**：nightly 构建。

## 3. 社区热点 Issues（10 项）

1. **#14724 [OPEN] 主 CI 失败：Managed Agent gate 未识别测试** — 评论 230，为全站最高。自动机器人反复刷新的长期挂起 CI 问题，反映 Managed Agent 测试门禁的不稳定，是维护者最该优先清理的噪音源。
2. **#13078 [OPEN] 每日依赖 CVE 审计失败** — 评论 45。定时安全审计持续告警，涉及潜在高严重度漏洞，直接关系供应链安全。
3. **#16579 [OPEN][P1][已就绪] Hosted v2 detach 在 Hook 配置回合的后台运行上卡死** — 需要 keep-READY 排空机制。P1 级生命周期缺陷，影响托管会话稳定性。
4. **#15276 [CLOSED][P1] Windows 桌面更新报 "Error opening file for writing"，node.exe 被锁定** — 安装器更新阶段失败，Windows 桌面用户的升级阻断性问题（目前已关闭）。
5. **#8136 [OPEN][P2][安全] Provider 警告脱敏器截断含端口的消息，并泄露含 `@` 的密码** — 位于 `workspace-providers-status.ts`，会导致 `/status` 响应泄露凭据，安全影响明确。
6. **#16417 [OPEN][P2] 超大 write_file 应预检输出预算，而非生成后拒绝** — 当前会先让模型生成完整响应，再以 token 截断报错，造成浪费且无落盘，属体验与成本双重优化点。
7. **#15875 [OPEN][P2][SDK] stream-json 在 thinking 后文本快照变更 message.id 且无新 message_start** — 影响 SDK 流式消费方解析，非交互/集成场景的关键 bug。
8. **#16585 [OPEN][P2] 将过期工具结果落盘遮蔽而非直接清除** — 提出上下文退化阶梯中的"可恢复一级"，是上下文性能路线图上的重要设计讨论。
9. **#15052 [OPEN][P2] CI：保留独立的主分支 E2E 校验** — ref 作用域并发会覆盖旧 pending run，导致中间提交缺独立结果，CI 可信度问题。
10. **#16355 [CLOSED][P1] Web Shell `sidebar=false` 时每 5 秒轮询全部可信工作区** — 空闲欢迎页仍持续轮询，性能浪费明显（已关闭）。

## 4. 重要 PR 进展（10 项）

1. **#16657** `ci(autofix)`：将 autofix 的三个维护者命令作业移出 GitHub 托管队列，降低排队依赖。
2. **#16656** `feat(serve)`：为 daemon PR-state watch 增加投递排空，并带开关控制（对应主设计 §4/§5）。
3. **#16639** `fix(managed-agent)`：让本进程无法核验的 preflight 行判为失败，避免基于猜测的误判。
4. **#16643** `fix(serve)`：多次 reset 后清理 worktree checkout，修复此前 checkout 与分支永久泄漏。
5. **#16075** `fix(permissions)`：AUTO 模式 amend 守卫改为匹配解析后的 shell 调用，而非原始文本，提升安全性。
6. **#16636** `fix(core)`：在 `BaseLlmClient.generateText()` 中保留 Provider 的 `finishReason`（流式与非流式），属 #13538 的信号管道部分。
7. **#16408** `feat(cli)`（WIP）：让 `/btw` 侧问题携入会话历史并解耦请求生命周期。
8. **#16500** `feat(managed-agent)`：Managed Skills 与 MCP 自助安装首期交付（ZIP/tar.gz 导入、摘要固定检查、加密 Workspace 设置）。
9. **#14463** `feat(core)`：支持按模型配置 `autoCompactThreshold`，优先于全局上下文压缩阈值。
10. **#16200** `fix(web-shell)`：补齐托管宿主挂载后的集成缺口（无 Java 后端地址时的降级提示）。

## 5. 功能需求趋势

- **上下文与 Token 管理**：按模型自动压缩阈值（#14463）、工具结果落盘遮蔽（#16585）、write_file 预检（#16417）——上下文性能是当前最集中的增强方向。
- **Managed Agent / 托管会话体验**：WebShell 侧边栏能力暴露（#16546）、archive 与 MCP 自助安装，托管能力正在向面板化、自助化演进。
- **CI/CD 与测试基础设施**：专用隔离 runner 池（#15967）、E2E 独立校验（#15052）、聚合门禁迁移——自动化质量保障是高频投入点。
- **Provider 与集成生态**：OpenAI 兼容 Provider（Wally）、MCP 网络搜索服务补充（You.com，见已关闭的 #13987），非 DashScope 用户的集成诉求明显。
- **国际化与渲染**：混合 RTL/LTR 文本中代码块强制 LTR、缺少 bidi 隔离（#13837，已关闭）。

## 6. 开发者关注点

- **Windows 平台体验**：桌面更新因 node.exe 被锁定而失败（#15276）、安装相关 scope/windows 问题，是平台侧最集中的痛点。
- **安全与凭据处理**：Provider 警告脱敏泄露密码（#8136）、依赖 CVE 审计失败（#13078）、AUTO 模式 amend 守卫加固（#16075）。
- **SDK 流式契约稳定性**：thinking 后 message.id 变化（#15875）与 finishReason 丢失（#16636），影响集成方可靠解析。
- **CI 噪音与可信度**：主 CI 自动上报长期堆积（#14724 达 230 条评论）、并发导致的校验覆盖（#15052），增加维护者负担。
- **性能浪费**：空闲 Web Shell 全量轮询（#16355）、超大输出生成后才拒绝（#16417），均为可感知的资源与成本问题。

---
*数据来源：[github.com/QwenLM/qwen-code](https://github.com/QwenLM/qwen-code)，统计窗口为过去 24 小时。*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI 社区动态日报（2026-11-08）

> 数据来源：github.com/Hmbown/DeepSeek-TUI。今日无新版本发布，过去24小时内共 8 条 Issue 更新、2 条 PR 更新（其中 1 条已关闭）。以下内容仅基于所提供材料整理。

## 1. 今日速览

今日无新版本发布，但社区活跃度集中在 v0.10.3 的待发布修复上：与 v0.10.3 相关的 Issue 共 6 条带有 `status:awaiting-release` 标签。最值得关注的两条分别是 **#7203（release-blocker）**：在 Windows 上通过浏览器完成 ChatGPT 登录后，认证仍会失败；以及 **#7232**：工作区级的子代理 coordination flock（协调文件锁）会因残留的旧会话让所有新会话变成只读。此外，外部贡献者的 PR #7251 提出为模型 HTTP 客户端增加可选的 host policy（宿主策略）。

## 2. 版本发布

无新版本发布（过去24小时 Releases 为空）。

## 3. 社区热点 Issues（注：本期数据共 8 条 Issue，已全部列出）

**① #7203 `release-blocker`：ChatGPT 认证在浏览器登录成功后仍校验失败（Windows，0.10.2）**
`codewhale auth chatgpt` 完成浏览器登录后报 `ChatGPT token signature or identity claims failed verification`，之后 `auth status --provider openai-codex` 状态异常。该 Issue 被标记为发布阻塞项，影响 Windows 用户使用 OpenAI 系 provider，属于必须优先修复的问题。3 条评论。
链接：codewhale-hq/Codewhale Issue #7203

**② #7232：移除工作区级子代理 coordination flock**
一个残留会话会导致同一工作区中所有新 TUI 会话变为只读，并在每次子代理侧栏刷新时重复提示 “Failed to clean up sub-agents”。作者为 Hmbown，关联已关闭的 #7042、#5036，影响 macOS/core/state。问题涉及多会话隔离和状态管理，优先级高。暂无评论。
链接：codewhale-hq/Codewhale Issue #7232

**③ #7233：格式错误的 HTTP(S)_PROXY 可能导致代理凭据写入日志**
`crates/net/src/proxy.rs` 中 `redact_proxy_userinfo` 在字符串不含 `://` 时原样返回输入，而某个调用方传入的是原始环境变量值而非解析后的 `Url`，导致凭据可能被写入日志。这是安全问题，涉及 `area:mcp`（MCP 与网络层），建议尽快处置。1 条评论。
链接：codewhale-hq/Codewhale Issue #7233

**④ #7216：`/patch-undo` 忽略 `turn_id`，撤销错误的轮次**
`POST /v1/threads/{id}/patch-undo` 接受与 `/undo` 相同的 `UndoTurnRequest`，但只读取 `depth`。当请求同时包含两个字段时，`/undo` 会移除指定轮次，而 `patch-undo` 行为不一致。这对依赖精确回滚的开发者是明显的正确性缺陷。1 条评论。
链接：codewhale-hq/Codewhale Issue #7216

**⑤ #2323：未适配中文输入法（Windows，v0.10.3）**
使用中文输入法输入拼音时，不会隐藏提示 “编写任务或使用 /。”；在配置界面或危险操作确认界面等弹窗中，输入也存在问题。该 Issue 早在 2026-05-28 创建，至今仍在更新（5 条评论、1 个 👍），说明本地化问题长期存在且关注度较高。
链接：codewhale-hq/Codewhale Issue #2323

**⑥ #7221：clean clipboard-images（增强请求）**
提议将剪贴板图片按会话分组，并新增清理命令。涉及会话数据管理与磁盘占用，属体验型诉求。3 条评论。
链接：codewhale-hq/Codewhale Issue #7221

**⑦ #7206：为长会话提供可选的增量式、缓存稳定的上下文折叠**
增强请求，旨在优化长会话下的上下文管理，保持缓存稳定性。当前为 `needs-triage`，2 条评论。作者说明该文为人工起草、由 DeepSeek 整理英文表述。
链接：codewhale-hq/Codewhale Issue #7206

**⑧ #7250：为实验性搜索提供“已验证候选评估”（仅评审流程）**
今日新开。现有 `workflows/operate_best_of_n.workflow.js` 虽支持 `strategy: "search"`（独立 worktree + 只读 reviewer），但结果目前仍停留在生成阶段。提议补上候选验证评估环节，属工作流能力演进。暂无评论。
链接：codewhale-hq/Codewhale Issue #7250

## 4. 重要 PR 进展（注：本期数据共 2 条 PR）

**① #7251 [OPEN] feat(transport)：允许为模型 HTTP 客户端设置可选的 host policy**
作者 zhuowp（`contributor:external`）。允许嵌入方为现有模型 HTTP builder 应用内存中的可选 `ModelHttpPolicy`；该策略随配置克隆与继承的视觉设置传递，并覆盖 primary/HTTP1 与独立的视觉传输。与 #7233 的代理/网络层问题主题相关，值得关注。
链接：codewhale-hq/Codewhale PR #7251

**② #7230 [CLOSED] feat(tasks)：人类等待可回答问题时暂停任务实际耗时**
作者 asto18089（`contributor:external`）。依据上游 `crates/runtime/src/turn_budget.rs` 的既有语义（“预算限制的是 agent 自身消耗，而非人回答所需时间”），让 #6118 已支持的挂起机制扩展到任务层。该 PR 已关闭，未合并。
链接：codewhale-hq/Codewhale PR #7230

## 5. 功能需求趋势

- **多语言/本地化体验**：#2323 反映出中文输入法（IME）与 TUI 提示、弹窗交互的适配缺口，本地化仍是长期诉求。
- **长会话上下文管理**：#7206（增量、缓存稳定的上下文折叠）指向大上下文场景下的成本与缓存效率。
- **工作流与多候选评估**：#7250 提出从“生成候选”走向“验证候选”，反映对 best-of-n 搜索质量把控的需求。
- **会话数据生命周期管理**：#7221（剪贴板图片按会话分组 + 清理命令）体现对本地数据整理的需求。
- **网络与安全策略可配置化**：#7251（host policy）与 #7233（代理凭据泄漏）共同指向网络层安全与可嵌入性。
- **任务计时的语义准确性**：#7230 提出“人类等待时间不应计入预算”，属运行时公平性优化。

## 6. 开发者关注点

- **认证可靠性**：#7203 作为 release-blocker，浏览器登录成功但 token 校验失败，直接阻断 OpenAI provider 使用，是当前最痛的 Windows 问题。
- **多会话状态隔离**：#7232 中单个残留会话可污染整个工作区（新会话全部只读），说明锁/状态清理机制脆弱，影响日常多任务并行。
- **凭据安全**：#7233 的日志泄漏风险在代理配置异常时触发，属于开发者高度敏感的隐私与合规问题。
- **接口行为一致性**：#7216 显示 `/patch-undo` 与 `/undo` 参数语义不一致，这类隐蔽缺陷会破坏开发者对 API 的信任。
- **长期未闭环的 UX 问题**：#2323 从 5 月持续至今，提示非英语输入法场景的打磨仍需加强。
- **外部贡献活跃**：两条 PR 均来自 `contributor:external`，但 #7230 被关闭，说明贡献门槛（`contribution-gate`）与上游设计对齐仍是协作摩擦点。

</details>

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar-personal) 自动生成。*