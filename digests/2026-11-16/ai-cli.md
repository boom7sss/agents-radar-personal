# AI CLI 工具社区动态日报 2026-11-16

> 生成时间: 2026-11-16 20:31 UTC | 覆盖工具: 9 个

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

# AI CLI 工具生态横向对比分析 · 2026-11-16

## 1. 生态全景

当前 AI CLI 工具已跨过"能否用"阶段，社区反馈全面转向**可靠性、安全边界与自动化可控性**。今日 8 个有动态的工具中，无一个发布正式版本（仅 Codex 连发 3 个 rust alpha、Qwen Code 出 nightly），说明生态处于"稳定化冲刺"而非功能扩张期。MCP 集成（连接/鉴权/生命周期）、子代理调度正确性、桌面端跨平台一致性构成三大共性痛点。计费透明与免费层稳定性（OpenCode 380 条评论主帖）成为信任层面的新矛盾。安全议题从"更严格/更宽松"转向"可审计、可强制"。

## 2. 各工具活跃度对比

> 说明：数字为提供的日报样本中列举/提及的条目数，非仓库全量；"—"表示当日无动态或未提供。Claude Code PR 数按日报明示"仅 1 条"。

| 工具 | 热点 Issues（样本） | 评论最热 Issue | PR 动态 | Release | 今日基调 |
|---|---|---|---|---|---|
| **Claude Code** | 10（另列 3 条） | #26408（34 评论） | 1（已关闭） | 无 | 安全模型有效性争议 |
| **OpenAI Codex** | 10 | #50403（29 评论，已关闭） | 10（全 CLOSED，bot 提交） | rust 0.171.0-alpha.7/8/9 | 桌面端基础可用性缺陷 |
| **Gemini CLI** | 10 | #22323（13 评论，p1） | 10 | 无 | 子代理可靠性 + 安全修复 |
| **GitHub Copilot CLI** | 10 | #4905（7 评论，OPEN） | 0 | 无 | 鉴权脆弱 + 积压清理 |
| **Kimi Code CLI** | — | — | — | 无 | 无活动 |
| **OpenCode** | 10 | #59387（380 评论！） | 11 | 无 | 免费层 + 子代理回归 |
| **Pi** | 10（另列 1） | #10605（14 评论） | 10 | 无 | Provider 接入 + 会话正确性 |
| **Qwen Code** | 10（另列 2） | #14724（407 评论，CI） | 10 | nightly | 1.0 内核 + Managed Agent |
| **DeepSeek TUI** | 10（含 3 条合并） | #6970（7 评论） | 10 | 无（0.10.3 收尾） | TUI 状态层严重 bug |

**关键读数**：Qwen Code（407 评论 CI 帖）与 OpenCode（380 评论免费层帖）出现单个 Issue 评论数远超其他工具的现象，反映两者用户基数大或积压严重；Codex 的 10 条 PR 全部为 bot 当日闭环，社区外部贡献参与度低。

## 3. 共同关注的功能方向

| 方向 | 涉及工具 | 具体诉求 |
|---|---|---|
| **MCP 连接/鉴权生命周期** | Claude Code、Copilot CLI、OpenCode、Claude(#99539)、Codex(#59381) | OAuth 刷新被放弃致登出（Claude #99539）、redirect_uri 未注册（Copilot #4901）、工具列表变更致会话 400（Copilot #5359）、每小时重枚举（Copilot #4892）、MCP Skills 支持（OpenCode #64157） |
| **权限/沙箱策略精细化** | Claude Code、Codex、Copilot CLI、Gemini CLI、Pi、DeepSeek TUI | Bash 权限误判（Claude #27899/#28174）、沙箱默认值争议（Codex #58450）、透明 TCP 捕获（Codex #61851）、MCP 系统命令权限校验（Gemini #30283）、拒绝 `hash -p` 别名绕过（DeepSeek #7305） |
| **子代理/多代理调度** | Gemini CLI、OpenCode、Codex、Pi | 误报成功（Gemini #22323）、无限挂起（Gemini #21409、👍8）、"始终后台运行"回归争议（OpenCode #64073）、`spawn_agent` 增 `cwd`（Codex #18969）、同消息并发读写竞态（Pi #11950，p0） |
| **自动化会话不被阻塞** | Claude Code、Copilot CLI、Pi、Qwen Code | `--wait-on-usage-limit`（Claude #41502）、autopilot 无限循环耗额度（Copilot #2881）、长任务断连（Pi #12124）、headless 登录（Qwen #17038） |
| **指令遵从的可强制性** | Claude Code、Gemini CLI | `CLAUDE.md/AGENTS.md` 无法架构层强制（Claude #53223，称"10+ 独立报告"）、模型不主动用 skills/子代理（Gemini #21968）、劝阻破坏性命令（Gemini #22672） |
| **长会话/上下文管理** | Pi、OpenCode、Qwen Code、DeepSeek TUI | 压缩静默中断（Pi #12076）、compaction 后台化与截断修复（OpenCode #64290-92）、工具结果降级纯文本（Qwen #16770）、用量账本 1 MiB 触顶（DeepSeek #7356） |
| **跨平台一致性** | 几乎所有 | macOS 打包/拦截（Claude）、Windows MSIX/终端弹窗（Claude、Codex #61749、Qwen #17350）、Wayland（Gemini #21983）、WSL2 粘贴（Gemini #30097）、Windows socket（Copilot #4463） |

## 4. 差异化定位分析

- **Claude Code —— 企业级 + 安全治理导向**：Issue 话语体系最成熟（安全议题有复现、有后果记录、有架构讨论）；桌面端 + MCP + Skills/Routines 并行推进，功能面最宽；PR 极少但聚焦 MDM/企业部署（#78049），走"稳、少动、重治理"路线。

- **OpenAI Codex —— 内部迭代 + 沙箱/多代理做深**：当日 PR 全为 bot 闭环，说明核心团队掌控节奏、外部贡献少；技术主线清晰——code-mode 工具目录复用、透明 TCP 捕获、turn 元数据隔离，偏底层架构；但桌面端（macOS/Windows）打开率与审批链路问题密集，呈现"内核强、外壳弱"。

- **Gemini CLI —— 模型原生能力挖掘**：路线独特，围绕 Gemini 3 的 bash 亲和性（#19873）与 AST 感知工具（#22745）设计工具链以减轮次，并有 `need-retesting`/`help wanted` 机制化的社区参与，开放度最高。

- **GitHub Copilot CLI —— 平台绑定 + 企业 MCP**：深度耦合 GitHub 凭证体系（credential registration 崩溃是头号痛点），MCP OAuth 与沙箱网络（Gradle/#5390）是企业场景主战场；当日无 PR、集中关闭陈旧 Issue，处清理期。

- **OpenCode —— 生态/插件优先 + 免费层驱动增长**：PR 最活跃（11 条），Code Mode、MCP Skills、插件市场、桌面内嵌浏览器全线推进；但免费层（#59387）与子代理后台化回归（#64073）显示"增长与稳定性赛跑"。

- **Pi —— 多 Provider 兼容层 + 长会话工程**：针对性解决 Provider 接入（OpenAI OAuth、Codex zstd/WebSocket、Bedrock 客户端复用、Vertex 超时），错误元数据契约（#11071）设计意识强；面向自建/多模型用户，资源成本敏感度高。

- **Qwen Code —— 1.0 架构重构 + 服务化**：事件驱动循环内核（#17045）、Managed Agent（Broker/Control Plane）、Channels 多平台（钉钉），战线最长、子系统最多，也最容易陷 CI 泥潭。

- **DeepSeek TUI —— 外部 Agent 聚合 + 安全加固**：以 ACP 将 Claude Code/Codex/Kimi/Copilot 等作为原生会话接入侧栏（#7279），定位"聚合器";今日 3 项安全修复（IDN、CJK 密钥脱敏、别名绕过）显示信任边界投入。

- **Kimi Code CLI —— 无动态**，本日无法定位。

## 5. 社区热度与成熟度

**热度第一梯队（评论量级最高、矛盾最尖锐）**
- **Qwen Code**：CI 跟踪帖 407 评论 + 三张长期 CI 单合计超 500 条，是"高活跃伴随高噪音"的典型；Managed Agent P1/P2 连报，处快速迭代期。
- **OpenCode**：免费层主帖 380 评论为全场最高单帖，PR 11 条最活跃，用户基数与增长动能最强，但稳定性欠账明显。

**热度第二梯队（结构化的成熟社区）**
- **Claude Code / Codex / Gemini CLI / Pi / Copilot CLI / DeepSeek TUI**：Issues 均有良好标签、复现标记、优先级体系，讨论质量高但单帖评论量中等——是"用户成熟、维护者治理规范"的体现。
- 其中 **Codex 与 Gemini CLI** 的 PR 闭环率高（多当日开当日关），修复响应快；**Claude Code** PR 最少，节奏最稳。

**特别观察**
- **社区贡献开放度**：Gemini CLI（`help wanted`、`need-retesting`）、Pi（AI 生成 Issue 已按 CONTRIBUTING 标注）、DeepSeek TUI（外部贡献者提文档 PR）最开放；Codex（bot 全包）、Copilot CLI（0 PR）最封闭。
- **成熟度悖论**：功能面最宽的（Claude Code、Qwen Code）恰恰是安全/CI 争议最多的，说明"表面对齐 + 内核未固化"是当前阶段特征。

## 6. 值得关注的趋势信号

1. **"文档约定"正让位于"架构强制"**：Claude #53223 直指 CLAUDE.md/AGENTS.md 指令无法在架构层强制，开发者要求可审计、可强制的安全约束。**对决策者**：评估 AI CLI 时，应把"权限机制的强制力"作为选型硬指标，而非只看功能清单。

2. **权限误报正在反噬安全**：Claude #27899/#28174 的错误理由让用户倾向盲目放行。**信号**：权限系统的可用性与安全性是同一问题，误报多的工具实际更危险。

3. **子代理/多代理是下一个成熟度分水岭**：从"误报成功"（Gemini）到"并发竞态"（Pi p0）到"默认后台化争议"（OpenCode），调度正确性尚未收敛。**给开发者的建议**：现阶段对子代理工作流应保留人工兜底，不要盲目信任 `success` 状态。

4. **MCP 是集成红利也是故障主源**：几乎所有工具的第三方服务故障都集中在 MCP 的 OAuth 生命周期与工具列表变更。**企业落地**：MCP 集成的运维成本应计入 TCO，优先选择有会话/认证恢复机制的工具。

5. **"无人值守"成硬需求**：`--wait-on-usage-limit`、autopilot 成本失控、长任务断连——开发者要把 AI CLI 编进 CI/远程流程，弹窗式交互是最大敌人。

6. **成本视角进入 Issue 语言**：Prompt 缓存失效（Claude #83913）、Bedrock 每请求新建客户端（Pi #11527）、premium request 循环消耗（Copilot #2881）——开发者开始用"成本/复杂度"提 issue，工具商需提供可量化的资源可观测性。

7. **外部 Agent 聚合新赛道**：DeepSeek TUI 的 ACP 聚合（#7279）与 OpenCode 的插件市场（#28696）预示"多 CLI 统一入口"可能成为新竞争维度——开发者未来面对的不是"选哪个 CLI"，而是"选哪个聚合层"。

8. **AI 生成贡献成常态**：Pi 多条 Issue 标注 AI 参与、Codex 全 bot PR——维护方的审核成本结构正在变化，这可能重塑开源协作的信任与流程设计。

---
*说明：本报告仅基于提供的各工具日报数据；表中数量为样本统计，非仓库全量；Kimi Code CLI 当日无动态，未参与横向对比。*

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告（数据截止 2026-11-16）

## 1. 热门 Skills 排行

> 说明：PR 评论数在给定数据中均显示为 `undefined`，以下按可观测的关注信号（更新活跃度、维护者反复修订、关联 Issue 讨论量）排序。

1. **skill-creator 触发器评估修复系列**（PR #1298、#1352、#1997、#1681）
   功能：修复 `run_eval.py` / `parse_skill_md` 的评估逻辑，包括并行 worker 交叉匹配、Windows 兼容、YAML frontmatter 解析。
   讨论热点：对应 Issue #1352（`--num-workers > 1` 时触发率系统性归零）、#556（`claude -p` 触发率 0%）。这是整个生态中噪声最大的话题——评估工具本身不可靠，直接影响所有 Skill 的质量验证。状态：全部 OPEN。
   https://github.com/anthropics/skills/pull/1298 ｜ https://github.com/anthropics/skills/pull/1997

2. **mcp-builder 兼容性修复**（PR #1742）
   功能：适配 `mcp>=2.0.0` 的 `streamable_http_client` 重命名与自定义 header 配置方式。状态：OPEN（Fixes #1668）。
   https://github.com/anthropics/skills/pull/1742

3. **notion-spec-to-implementation + quantitative-resume-auditor**（PR #1245）
   功能：将产品/技术 spec 转为可执行的 Notion 任务；第二项为简历量化审计。状态：OPEN，更新至 2026-10-15，是列表中最晚仍活跃的新增 Skill 提案。
   https://github.com/anthropics/skills/pull/1245

4. **md2video-audio**（PR #1703）
   功能：Markdown 文档直接编译为带拟真人配音的 MP4，主打零成本。状态：OPEN。
   https://github.com/anthropics/skills/pull/1703

5. **proofcore-contract-auditor**（PR #1771）
   功能：对 Solidity / Rust 智能合约做静态分析，并将审计证明锚定到 TON 区块链。状态：OPEN，属厂商主导的 Web3 垂直 Skill。
   https://github.com/anthropics/skills/pull/1771

6. **pyxel 复古游戏开发**（PR #525）
   功能：Python 编写、无头输入驱动运行、逐帧检查与状态验证。状态：OPEN，自 2026-03-05 持续更新至 11-01，是生命周期最长的活跃 PR 之一。
   https://github.com/anthropics/skills/pull/525

7. **document-typography**（PR #514）
   功能：治理 AI 生成文档的孤行、寡段、编号错位等排版问题。状态：OPEN。
   https://github.com/anthropics/skills/pull/514

## 2. 社区需求趋势

- **Skill 安全与信任边界**（Issue #492，46 评论，最高热度）：社区 Skill 冒用 `anthropic/` 命名空间，构成权限授予风险。这是仓库层面而非单个 Skill 层面的头号诉求。
  https://github.com/anthropics/skills/issues/492
- **组织级分发与共享**（Issue #228，17 评论，👍8）：希望摆脱「下载 .skill → Slack 传文件 → 手动上传」的流程，建立共享 Skill 库。
  https://github.com/anthropics/skills/issues/228
- **评估与质量基础设施**（Issue #556、#1352）：触发率评测不可信、并行执行误判，是开发者最普遍的工程痛点。
  https://github.com/anthropics/skills/issues/556 ｜ https://github.com/anthropics/skills/issues/1352
- **Agent 状态与推理流程类新 Skill**：compact-memory 用符号化表示压缩长会话状态（#1329）；Reasoning Quality Gate Pipeline 提出「任务前校准 → 对抗评审 → 交付验证」三闸门（#1385）。
  https://github.com/anthropics/skills/issues/1329 ｜ https://github.com/anthropics/skills/issues/1385
- **治理/安全模式**（Issue #412，已 CLOSED）：策略执行、威胁检测、信任评分与审计留痕类 Skill 被提出后关闭，说明方向有需求但落地路径未定。
  https://github.com/anthropics/skills/issues/412
- **上下文预算意识**（Issue #1487）：`claude-api` 单次调用注入约 156k tokens，社区开始关注 Skill 的 token 占用而非仅关注功能。
  https://github.com/anthropics/skills/issues/1487
- **文档技能（docx/xlsx/pptx）的可靠性**：大量 issue 集中在命名空间丢失导致非法 XML（#2018）、LibreOffice 超时误报成功、渐变参数 off-by-one（#1868）等细粒度缺陷。
  https://github.com/anthropics/skills/issues/2018 ｜ https://github.com/anthropics/skills/issues/1868

## 3. 高潜力待合并 Skills

- **PR #2019 fix(xlsx) 外部链接风险检测**：修复 worksheet 级 defined names 漏检问题（Fixes #2013），更新至 2026-11-03，缺陷边界清晰，落地门槛低。
  https://github.com/anthropics/skills/pull/2019
- **PR #1975 / #1976 / #1977（同作者 gerardrecinto 的三连修复）**：分别对应 `--cols` 参数前置校验、textarea/select 元素识别、`wrapAround()` 负数取模，均带明确 Issue 编号与修复说明，属典型的「小而正确」补丁。
  https://github.com/anthropics/skills/pull/1975 ｜ https://github.com/anthropics/skills/pull/1976 ｜ https://github.com/anthropics/skills/pull/1977
- **PR #1980 webapp-testing 移除 shell=True**：安全加固型改动，更新至 2026-11-01。
  https://github.com/anthropics/skills/pull/1980
- **PR #1792 fix(docx) LibreOffice 超时如实报错**：修正「失败仍报成功」的行为，并校验输出不再含 `w:ins`/`w:del` 修订标记。
  https://github.com/anthropics/skills/pull/1792
- **PR #1950 docs(claude-api) pause_turn 恢复指引**：依据 Python SDK 1.1.0 已支持自动恢复，移除过时的外层重启建议；更新至 2026-11-10，是列表中最新活跃的 PR。
  https://github.com/anthropics/skills/pull/1950
- **PR #1730 修复失效文档 URL**：替换 3 个 404 链接并已用 `curl -sI -L` 验证 200，验证成本极低。
  https://github.com/anthropics/skills/pull/1730
- **PR #2108 澄清 document skills 的快照性质与同步关系**：引用可核验的导出里程碑（#1447、#330），属文档澄清类，易被接受。
  https://github.com/anthropics/skills/pull/2108

## 4. Skills 生态洞察

**当前社区最集中的诉求不在于「多一个 Skill」，而在于「可被信任与验证」——认证命名空间、可靠的触发率评估、以及 Skill 引入的上下文成本可控，这三点决定了生态的可扩展性。**

---

# Claude Code 社区动态日报 · 2026-11-16

## 1. 今日速览

过去 24 小时无新版本发布。社区讨论集中在**安全与权限模型的有效性**：`CLAUDE.md/AGENTS.md` 指令无法被架构层面强制执行（#53223）与 Bash 权限提示的误判（#27899、#28174）持续获得验证性评论。另有多个跨平台问题（macOS 打包/安全拦截、Windows MSIX 安装、桌面端 MCP）仍在更新，表明桌面端与 MCP 生态是当前稳定性焦点。

## 2. 版本发布

过去 24 小时内无新 Release。

## 3. 社区热点 Issues（10 条）

1. **#26408 选中模型（claude-sonnet-4-6）存在问题** — 评论数最高（34），👍15。虽创建于 2026-02，但持续活跃，说明模型选择相关缺陷影响面广且未被彻底解决。
   https://github.com/anthropics/claude-code/issues/26408

2. **#53223 [安全] CLAUDE.md/AGENTS.md 指令遵从在架构上未被强制执行** — 评论 33，作者称有"10+ 独立报告"和已记录的安全后果。这是本日最重要的安全议题，涉及智能体指令边界的设计根本。
   https://github.com/anthropics/claude-code/issues/53223

3. **#12433 [macOS/打包] 活动监视器进程名显示为版本号而非 "claude"** — 👍40，全文最高赞。带可复现标记，属"小而扰人"问题，社区呼声明确。
   https://github.com/anthropics/claude-code/issues/12433

4. **#27899 [权限] `2>&1` 被误判为"可覆盖任意文件"** — 评论 23。权限提示的误报直接拖慢开发流程，且与安全判断准确性相关。
   https://github.com/anthropics/claude-code/issues/27899

5. **#28174 [权限/Bash] Bash 权限提示中"ANSI-C quoting"理由不成立** — 评论 21。与 #27899 同源，反映 Bash 命令解析在权限判定上的系统性薄弱。
   https://github.com/anthropics/claude-code/issues/28174

6. **#22711 [TUI/后台任务] 后台任务输出文件不可访问** — 评论 21，带复现。影响长任务工作流，是开发者高频使用场景。
   https://github.com/anthropics/claude-code/issues/22711

7. **#41502 [CLI] 请求新增 `--wait-on-usage-limit` 标志** — 评论 19。远程控制/无交互场景下，用量上限弹出交互提示会无限阻塞会话，属典型自动化阻断点。
   https://github.com/anthropics/claude-code/issues/41502

8. **#83913 [性能] 历史重建时 PreToolUse/PostToolUse 的 additionalContext 变化导致 Prompt 缓存失效** — 评论 10。直指每轮首请求的缓存命中率与成本/延迟，性能议题中价值最高。
   https://github.com/anthropics/claude-code/issues/83913

9. **#78523 [Skills] `disable-model-invocation: true` 破坏显式 `/skill-name` 调用** — 评论 7，👍8。Skills 机制是近期重点功能，该副作用会影响显式调用的可用性。
   https://github.com/anthropics/claude-code/issues/78523

10. **#106708 [桌面端/MCP 回归] Code 标签页中 MCP App 工具调用报 "IPC not available"** — 评论 5，标记为 regression。直接影响桌面端 MCP 集成可用性。
    https://github.com/anthropics/claude-code/issues/106708

> 另值得留意：#91447（macOS 以"Malicious Script Blocked"终止进程）、#99539（会话关闭时 MCP OAuth 刷新被放弃导致登出）、#96608（桌面端 Enter/Cmd+Enter 发送与排队行为无法自定义，👍14）。

## 4. 重要 PR 进展

过去 24 小时内仅有 **1 条** PR 更新，因此无法凑足 10 条，以下列出全部：

1. **#78049 [已关闭] fix(mdm): 32 位 PowerShell 宿主下 Set-ClaudeCodePolicy.ps1 误写入 Program Files (x86)** — 修复企业 MDM 策略脚本在 Intune 默认 32 位宿主下的目标路径错误（应依据 `ProgramFiles` 与实际宿主位数判断）。对企业集中部署有实际意义。
   https://github.com/anthropics/claude-code/pull/78049

## 5. 功能需求趋势

- **非交互/自动化可控性**：`--wait-on-usage-limit`（#41502）代表对 CI、远程控制场景下"不阻塞、可编排"的诉求。
- **权限与安全模型精细化**：多条 Issue（#27899、#28174、#53223）指向 Bash 解析、提示理由与指令强制执行的准确性，而非单纯"更严格"或"更宽松"。
- **桌面端体验定制**：键位与发送/排队语义（#96608）、Code 标签页与 MCP 集成（#106708）显示桌面端正成为主要使用面。
- **Skills 与 Routines 机制成熟化**：Skills 显式调用（#78523）、`fire_trigger` 恢复持久会话（#94748）、面向非开发者的"个人小机器人"套件（#105206）。
- **性能与成本**：Prompt 缓存失效（#83913）属少见的直接成本类反馈。

## 6. 开发者关注点

1. **指令遵从缺乏可验证的强制机制**（#53223）：开发者希望安全约束不是"文档约定"，而可审计、可强制。
2. **权限提示误报侵蚀信任**：Bash 重定向与引号解析的错误理由（#27899、#28174）让用户倾向于盲目放行，反而削弱安全性。
3. **跨平台安装/运行稳定性**：macOS 打包与安全拦截（#12433、#91447）、Windows MSIX 更新失败与残留进程（#106416、#92345）反复出现。
4. **自动化会话被交互提示阻塞**：用量上限提示、后台任务通知冒充用户取消权限请求（#85408）等，破坏无人值守流程。
5. **MCP 会话与认证生命周期**：OAuth 刷新在关闭时被放弃（#99539）、IPC 不可用（#106708），是接入第三方服务的主要故障面。
6. **Issue 治理体验**：重复标记不引用原 Issue（#79523）被单独提出，反映社区对协作流程透明度的在意。

---
说明：本日报仅依据提供的 GitHub 数据生成；PR 部分因过去 24 小时仅 1 条更新，未做数量补足。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报 · 2026-11-16

## 1. 今日速览

今日 Codex 仓库以内部修复与优化类 PR 为主，15 条高关注 PR 全部由 `copyberry[bot]` 提交并于当日关闭，集中在会话/线程数据读取、code-mode 工具目录复用与 app-server 元数据隔离。Issues 侧则集中爆发于桌面端（macOS/Windows）的审批、浏览器访问、组织设置加载及队列消息等基础可用性缺陷；rust 通道继续发布 0.171.0 alpha 迭代。

## 2. 版本发布

- **rust-v0.171.0-alpha.9 / alpha.8 / alpha.7**：过去 24 小时内连续发布三个 alpha 版本，Release 说明仅包含版本号，未披露具体变更内容。

## 3. 社区热点 Issues（10 条）

1. **[CLOSED] VS Code 扩展队列消息静默发送失败**（#50403，29 条评论）— Windows 上出现 “Failed to release queued message send lock” 与 `undefined` JSON 解析错误，是当日讨论热度最高的 Issue，已关闭。
   https://github.com/openai/codex/issues/50403
2. **[OPEN] macOS 重启后已有会话中浏览器显示为禁用**（#57190，22 条评论）— 同一账号其他会话正常，属于状态不一致问题，影响桌面端浏览器能力的可用性。
   https://github.com/openai/codex/issues/57190
3. **[OPEN] macOS 桌面 Work 审批立即失败**（#53560，18 条评论，👍4）— 点击“允许/批准”后即报 “approval request is no longer active”，而网页端同一账号可正常使用，直击桌面端审批链路。
   https://github.com/openai/codex/issues/53560
4. **[OPEN] 浏览器自动化不可用：“The browser access host is unavailable”**（#56928，18 条评论，👍19）— 当日点赞最高的 Issue，说明浏览器访问依赖存在系统性故障。
   https://github.com/openai/codex/issues/56928
5. **[CLOSED] Windows 无法加载组织设置（rename_staging / EPERM）**（#57005，14 条评论）— 部署阶段文件重命名权限问题，已关闭。
   https://github.com/openai/codex/issues/57005
6. **[OPEN] macOS 工作区 diff 被 SIGKILL 后遗留临时 Git 对象导致磁盘反复耗尽**（#43158，10 条评论）— 长期未解决的数据残留与性能问题，影响重负载用户。
   https://github.com/openai/codex/issues/43158
7. **[OPEN] Agent 创建的线程默认使用 workspace-write/on-request，而非 full-access**（#58450，8 条评论）— 沙箱权限默认值与应用设置不一致，涉及安全与预期行为。
   https://github.com/openai/codex/issues/58450
8. **[OPEN] 为 `spawn_agent` 增加 `cwd` 参数**（#18969，6 条评论，👍12）— 当日点赞第二高的功能需求，用于并行子代理按独立工作目录隔离。
   https://github.com/openai/codex/issues/18969
9. **[CLOSED] app-server daemon 复用首个会话环境，shell 工具读到过期的 HC_TERMINAL_ID**（#59381，4 条评论）— 守护进程环境隔离缺陷，影响多会话场景下的命令执行正确性。
   https://github.com/openai/codex/issues/59381
10. **[CLOSED] Windows 使用 CLI 时终端窗口反复弹出（v0.169.0 仍存在）**（#61749，3 条评论）— 当日新建并关闭，反映 Windows 终端体验问题仍在追踪中。
    https://github.com/openai/codex/issues/61749

## 4. 重要 PR 进展（10 条，均为 CLOSED）

1. **#61846 跨执行复用 code-mode 工具目录** — 通过目录版本号让客户端在会话内复用已确认的工具目录，避免重复发送完整工具清单。
   https://github.com/openai/codex/pull/61846
2. **#61845 延迟构建 code-mode 工具目录** — 将 `tools` / `ALL_TOOLS` 改为首次访问时惰性初始化，减少未被使用的单元格开销。
   https://github.com/openai/codex/pull/61845
3. **#61854 允许模型元数据控制 code mode 下的多代理工具** — 新增 `multi_agent_tools_in_code_mode` 元数据，控制原生多代理工具是否遵循模型的 `tool_mode`。
   https://github.com/openai/codex/pull/61854
4. **#61860 为上游代理提供可选的工具调用归因** — 通过 `CODEX_TOOL_CALL_ATTRIBUTION_PROXY` 指定消费并剥离 `x-openai-internal-tool-call-id` 的上游代理。
   https://github.com/openai/codex/pull/61860
5. **#61851 允许网络策略启用透明 TCP 捕获** — 新增默认关闭的 `transparent_tcp` 配置，启用后将托管 Linux 沙箱命令的出站 TCP 路由至捕获链路。
   https://github.com/openai/codex/pull/61851
6. **#61866 在线程列表中保留 SQLite 行元数据** — 避免将 SQLite 行转换为 rollout 摘要后丢失原有标题与分区排序元数据。
   https://github.com/openai/codex/pull/61866
7. **#61840 降序历史分页时惰性解析 fork 祖先** — 避免读取最新条目时解析整条 rollout 血缘。
   https://github.com/openai/codex/pull/61840
8. **#61817 按 turn ID 隔离 app-server 轮次元数据** — 防止上一轮迟到的完成事件消费下一轮元数据并清除其命令跟踪。
   https://github.com/openai/codex/pull/61817
9. **#61841 轮次被中断时关闭迟到的命令审批项** — 修复中断后续轮次时遗留的待审批命令项。
   https://github.com/openai/codex/pull/61841
10. **#61871 跨版本变更保留插件技能选择器排序** — 插件技能路径包含安装版本，改动后通过聚合历史选择维持 `$` 选择器的排序影响。
    https://github.com/openai/codex/pull/61871

## 5. 功能需求趋势

- **多代理/子代理能力扩展**：`spawn_agent` 的 `cwd` 参数需求（#18969）与 PR #61854 的多代理工具元数据控制相呼应，说明并行代理工作流是明确的演进方向。
- **桌面端稳定性与平台一致性**：大量 Issue 集中在 macOS/Windows 桌面应用的审批、浏览器访问、组织设置、会话项目归属等，跨端行为不一致是主要矛盾。
- **沙箱与网络策略精细化**：权限默认值争议（#58450）与透明 TCP 捕获（#61851）显示沙箱网络与权限配置正在向更细粒度演进。
- **IDE 集成与消息队列可靠性**：VS Code 扩展队列消息丢失/卡住（#50403、#50609）反复出现，是 IDE 集成中的高优先级缺陷方向。
- **性能与资源占用**：临时 Git 对象导致磁盘耗尽（#43158）、线程/工具目录读取冗余（多个 PR）表明性能优化持续受到关注。

## 6. 开发者关注点

- **审批链路不可用**：macOS Work 审批即时失败（#53560）、迟到审批项残留（#61841）、Windows 本地任务审批报 AbsolutePathBuf 错误（#51593），审批是跨平台高频痛点。
- **浏览器自动化可靠性**：浏览器访问主机不可用（#56928）与浏览器状态错误（#57190）并存，阻断依赖浏览器的任务流。
- **app-server 环境与状态隔离**：守护进程复用首会话环境（#59381）、stdio 下 `account/read` 回复被挂起（#61610）、轮次元数据串扰（#61817），反映多会话架构下的隔离仍需加强。
- **Windows 平台特有问题密集**：组织设置加载失败（#57005、#52836）、终端窗口反复弹出（#61749）、对话加载报 “no rollout found”（#55743），Windows 体验修复需求集中。
- **长会话数据管理**：大体积历史库（约 1 GB）导致状态回填卡死并超时（#52836）、临时 Git 对象残留（#43158），提示历史数据清理与迁移机制需改进。

---
*说明：以上内容均基于所提供的 GitHub 数据整理，PR 评论区数据未提供，故未涉及社区讨论热度判断。*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报（2026-11-16）

## 今日速览

今日无新版本发布，社区动态主要由存量 Issue 的复测推进和 PR 修复堆积构成。最受关注的是 subagent（子代理）可靠性问题：#22323 中 `codebase_investigator` 在达到 MAX_TURNS 后仍误报 `GOAL` 成功，#21409 中通用代理无限挂起（8 个 👍，为今日最高），两者均标记为 p1 并处于 `need-retesting` 状态。PR 侧集中于安全与平台兼容性修复，包括系统级 MCP 命令权限校验（#30283）、Windows shell 描述修正（#30312）和 WSL2 图片粘贴（#30097）。

## 版本发布

过去 24 小时内无新 Release，本节省略。

## 社区热点 Issues

1. **#22323 [p1] Subagent 达到 MAX_TURNS 后被误报为 GOAL 成功**（13 条评论，👍2）
   子代理在尚未进行任何分析时就已耗尽轮次上限，却对外汇报 `status: "success"`，从而掩盖了中断事实。这直接破坏了对代理执行结果的信任，13 条评论为今日最高，讨论热度最高。
   https://github.com/google-gemini/gemini-cli/issues/22323

2. **#21409 [p1] 通用代理无限挂起**（8 条评论，👍8）
   只要请求被转交给 generalist agent，即使是创建文件夹这样的简单操作也会挂起，有用户等待一小时才取消。👍 数为今日最高，说明影响面广。
   https://github.com/google-gemini/gemini-cli/issues/21409

3. **#21968 [p2] Gemini 几乎不会主动使用 skills 与 sub-agents**（7 条评论）
   用户观察到，除非显式指示，模型基本不会在相关场景中调用自定义 skills 和子代理，这削弱了扩展机制的实际价值。
   https://github.com/google-gemini/gemini-cli/issues/21968

4. **#22745 [p2] 评估 AST 感知的文件读取、搜索与代码库映射**（7 条评论）
   该 EPIC 用于追踪 AST 感知工具的价值验证，目标是用单次工具调用精确定位方法边界、减少交互轮次，代表代理工具链的架构演进方向。
   https://github.com/google-gemini/gemini-cli/issues/22745

5. **#19873 [p2] 利用模型的 bash 亲和性：零依赖 OS 沙箱与执行后意图路由**（9 条评论）
   该提案基于 Gemini 3 模型天然擅长链式调用 POSIX 工具的特性，希望通过沙箱化释放其原生 bash 能力，是讨论度第二高的 Issue。
   https://github.com/google-gemini/gemini-cli/issues/19873

6. **#22267 [p2] Browser Agent 忽略 settings.json 覆盖项（如 maxTurns）**（5 条评论）
   AgentRegistry 虽然读取了配置，但 Browser Agent 完全不生效，导致用户无法通过配置约束浏览器代理行为。
   https://github.com/google-gemini/gemini-cli/issues/22267

7. **#21983 [p1] browser 子代理在 Wayland 下失败**（4 条评论，👍1）
   这是明确的平台兼容缺陷，影响 Linux Wayland 桌面用户使用浏览器子代理。
   https://github.com/google-gemini/gemini-cli/issues/21983

8. **#24246 [p2] 工具数量超过限制时触发 400 错误**（3 条评论）
   摘要中标题写 128 个工具、正文写 400 个，两处数字不一致；但核心诉求明确：代理应更智能地约束可用工具范围。
   https://github.com/google-gemini/gemini-cli/issues/24246

9. **#22672 [p2] 代理应阻止或劝阻破坏性操作**（3 条评论，👍1）
   模型在复杂 git 操作中偶发使用 `git reset`、`--force` 等命令，在存在更安全替代方案时构成风险，属于安全类需求。
   https://github.com/google-gemini/gemini-cli/issues/22672

10. **#22598 [p3] 子代理轨迹应可通过 `/chat share` 查看**（2 条评论，👍1）
    子代理轨迹虽被记录但难以访问，不利于行为复盘与评测，反映可观测性需求。
    https://github.com/google-gemini/gemini-cli/issues/22598

## 重要 PR 进展

1. **#30283 [CLOSED] 跳过命令权限不安全的系统 MCP 服务器**
   对系统级配置文件（`settings.json`、`system-defaults.json`）引用的本地 MCP 命令与脚本参数执行所有权和写权限校验，延续 #29115 的安全加固。
   https://github.com/google-gemini/gemini-cli/pull/30283

2. **#30289 [OPEN, p1] 扩展链接披露规范化路径，并将默认同意提示设为 no**
   更新 `gemini extensions link` 与非交互式扩展同意流程，解析目标扩展的实际路径，并收紧默认授权。
   https://github.com/google-gemini/gemini-cli/pull/30289

3. **#30090 [CLOSED] CI 修复：不再向 fork 控制的代码暴露 GEMINI_API_KEY**
   为 `chained_e2e.yml` 增加门禁，防止在带密钥的 base-repo 上下文中执行 PR 代码，这是一项重要供应链安全修复。
   https://github.com/google-gemini/gemini-cli/pull/30090

4. **#30316 [OPEN] 保留自定义模型别名的生成配置**
   修复 `applyModelSelection()` 将别名解析后的具体模型（如 `gemini-2.5-flash-lite`）与请求层级错误比较的问题（#30238）。
   https://github.com/google-gemini/gemini-cli/pull/30316

5. **#30315 [OPEN] 从 CLI 路径而非 cwd 检测本地 git 克隆**
   修复从克隆根目录外（其他目录、其他仓库、`npm link` 场景）运行时，将本地源码检出误判为全局 npm 安装、进而触发错误自动更新的问题。
   https://github.com/google-gemini/gemini-cli/pull/30315

6. **#30097 [OPEN, p2, help wanted] 修复 WSL2 图片粘贴**
   两处根因：`getUserLinuxClipboardTool()` 仅检查 `XDG_SESSION_TYPE`，而 WSLg 设置的是 `WAYLAND_DISPLAY`；另需 BMP 回退方案。该 PR 被标记为 help wanted。
   https://github.com/google-gemini/gemini-cli/pull/30097

7. **#30281 [OPEN] 在 Node 26 上遵循已配置的 fetch 超时**
   将核心 Undici 升级至 7.30.2，使全局 dispatcher 注册在 Node 26 内置 fetch 所用的 symbol 下，并补充回归测试。
   https://github.com/google-gemini/gemini-cli/pull/30281

8. **#30312 [OPEN] 准确描述 Windows 下选中的 shell**
   让面向模型的 `run_shell_command` 描述反映实际选用的 shell；当选中 PowerShell 5.1 时说明其原生参数的引号行为。
   https://github.com/google-gemini/gemini-cli/pull/30312

9. **#30082 [CLOSED] 新增 `model.requestTimeoutMs` 设置项**
   允许调高 60 秒的 API headers 超时；此前该值只能经由在 Vertex AI / API key 认证下不会拉取的实验 flag 修改。
   https://github.com/google-gemini/gemini-cli/pull/30082

10. **#29168 [CLOSED] 依赖升级 qs 6.14.2 → 6.16.0**
    这是 Dependabot 发起的依赖变更，今日关闭，属于常规维护。
    https://github.com/google-gemini/gemini-cli/pull/29168

## 功能需求趋势

- **子代理系统的健壮性与可信度**：今日最集中的方向，覆盖误报成功（#22323）、无限挂起（#21409）、不主动调用（#21968）、轨迹不可见（#22598）等。
- **模型原生工具能力挖掘**：围绕 Gemini 3 的 bash 亲和性（#19873）与 AST 感知工具链（#22745、#22746），指向减少轮次、提升精度的工具设计。
- **配置系统一致性**：settings.json 的覆盖值未能在 Browser Agent 上生效（#22267），反映配置语义需要统一。
- **跨平台兼容**：Wayland（#21983）、WSL2（#30097）、Windows shell（#30312）均出现具体缺陷。
- **安全与权限**：MCP 命令权限校验、CI 密钥隔离、破坏性命令劝阻（#22672）共同构成安全主线。

## 开发者关注点

- **结果可信度**：代理汇报的 `success`/`GOAL` 可能掩盖中断，开发者需要能区分真实完成与被迫终止。
- **挂起与卡死**：generalist agent 无限挂起、在交互式提示（vite 创建，#22465）处卡住，这类体验问题复现门槛低但破坏性大。
- **扩展机制的实际价值**：skills 与 sub-agents 需要模型主动触发才能真正发挥作用，而非依赖用户每次显式指示。
- **配置无效带来的困扰**：用户写入 settings.json 的约束被忽略时，缺少可诊断的反馈。
- **平台差异带来的维护负担**：WSLg、Wayland、PowerShell 5.1 等环境的边缘行为需要专门处理，其中 #30097 已标记 help wanted，适合社区贡献。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报（2026-11-16）

## 1. 今日速览

今日无新版本发布、无 PR 更新，社区活动集中在 Issue 跟踪上。最值得关注的是 **#4905**：桌面端会话在启动后数分钟即因"GitHub credential registration 不再可用"而崩溃，进而使 github-mcp-server 目录失效，目前仍处 OPEN 状态并有 7 条讨论。此外，一批 MCP OAuth、沙箱权限和会话恢复相关的陈旧 Issue 今日集中关闭，显示维护者正在清理积压。

## 2. 版本发布

过去 24 小时无新 Release。

## 3. 社区热点 Issues（10 条）

1. **#4905 [OPEN] 桌面端会话短暂存活后崩溃** — `area:authentication, area:sessions, area:mcp`
   macOS arm64 桌面端 1.1.22（内置 CLI 1.0.84-5）中，会话启动数分钟后报"GitHub credential registration is no longer available for this session"，导致 github-mcp-server 目录陈旧并致命失败。评论最多（7 条）、👍 4，是当前影响面最大的未解决问题。
   https://github.com/github/copilot-cli/issues/4905

2. **#2881 [CLOSED] Autopilot 模式无限循环消耗 premium requests** — `area:agents`
   启用 autopilot 后助手自我重复输出"Continuing autonomously (1 premium request)"且不停止，持续消耗高级请求直至手动取消。今日关闭，对成本敏感用户意义重大。
   https://github.com/github/copilot-cli/issues/2881

3. **#5359 [CLOSED] MCP 工具变更后会话恢复全量 400 失败** — `area:sessions, area:mcp`
   MCP server 两次启动间工具列表变化后，恢复的会话每个请求都返回 `400 Tool reference '...' not found in available tools`。已关闭。
   https://github.com/github/copilot-cli/issues/5359

4. **#5177 [CLOSED] 手动审批不再拦截改动仓库的 Git 命令** — `area:permissions`
   作者称 2026 年 10 月 Copilot agent harness 迁移引入回归：此前 VS Code Copilot Chat 会在执行仓库变更类 Git 命令前请求显式批准，迁移后失效。属安全相关回归，值得关注。
   https://github.com/github/copilot-cli/issues/5177

5. **#4901 [OPEN] Atlassian MCP OAuth 报 redirect_uri 未注册** — `area:mcp`
   1.0.86 上 `unauthorized_client: redirect_uri is not registered`（v2 endpoint），并关联 #4490、#2536。企业 MCP 集成受阻。
   https://github.com/github/copilot-cli/issues/4901

6. **#4041 [CLOSED] `web_fetch` 在所有 URL 上失败** — `area:networking, area:tools`
   IPv4-only 沙箱环境中 `web_fetch` 对包括 example.com 在内的所有地址返回 `TypeError: fetch failed`。影响网络受限环境下的基础工具可用性。
   https://github.com/github/copilot-cli/issues/4041

7. **#4463 [CLOSED] Windows 上 MCP OAuth 间歇性 socket 10013 失败** — `area:authentication, area:platform-windows, area:mcp`
   远程 HTTP MCP server 的 OAuth 在浏览器授权流程打开前即失败，报 socket 访问错误。Windows 平台 + MCP 组合的典型问题。
   https://github.com/github/copilot-cli/issues/4463

8. **#4894 [OPEN] 恢复长会话时大幅回滚滚动位置** — `area:sessions, area:terminal-rendering`
   切回长生命周期会话时滚动条跳到中段甚至开头，且多次设置滚动位置，拖回不稳定。终端互操作体验问题，仍开放。
   https://github.com/github/copilot-cli/issues/4894

9. **#4893 [OPEN] 终端链接难以点击** — `area:terminal-rendering`
   纯 URL 链接悬停下划线仅闪烁、无稳定响应，需要反复点击。与 #4894 同作者，指向终端渲染层的交互稳定性。
   https://github.com/github/copilot-cli/issues/4893

10. **#4892 [OPEN] 扩展宿主与全部 MCP server 每小时被重新枚举** — `area:plugins, area:mcp`
    报告者已更正原稿中关于进程泄漏与内存占用的错误说法，但保留"会话内每小时 reload 重新枚举 MCP"的核心问题。涉及性能与资源开销。
    https://github.com/github/copilot-cli/issues/4892

## 4. 重要 PR 进展

过去 24 小时内无 PR 更新，本节无内容。

## 5. 功能需求趋势

从今日 Issue 分布可提炼以下方向：

- **MCP 集成稳定性是绝对主线**：OAuth 失败（#4901、#4584、#4463、#3973）、工具列表变更导致会话不可用（#5359）、周期性重新枚举（#4892）——MCP 的连接、鉴权与生命周期管理占据最大比重。
- **权限与沙箱策略精细化**：macOS 沙箱需暴露精确的 Mach/XPC 白名单（#4881）；`allowLocalNetwork: true` 仍生成 `hostLoopback: deny` 阻断 Gradle（#5390）；HOME 覆盖触发误判的 `script_action_changed`（#5107）；Windows 路径在审批预览中被截断（#4701）。
- **终端渲染与交互体验**：链接可点击性（#4893）、会话滚动恢复（#4894）等基础可用性问题长期未闭环。
- **Agent 自主模式的可控性**：请求关闭 autopilot 的"Task complete"重复摘要（#5033），与 #2881 的无限循环问题同源，指向对自主 agent 输出与开销控制的诉求。
- **模型能力扩展**：请求 Claude 模型支持 1M token 上下文（#2601）。

## 6. 开发者关注点

- **凭证与鉴权链路的脆弱性**：桌面端会话因 credential registration 失效而崩溃（#4905），叠加多起 MCP OAuth 失败，鉴权是当前最集中的痛点。
- **回归风险**：harness 迁移引入的手动审批失效（#5177）表明底层架构调整对安全语义有直接影响，开发者对"迁移即静默放宽权限"高度敏感。
- **会话恢复的数据一致性**：MCP 工具变更（#5359）、rewind 后剪贴板图片丢失（#5037）说明会话状态的持久化边界仍不清晰。
- **跨平台差异**：Windows 的 socket 端口排除（#4463、#3973）与 macOS 的沙箱网络/进程限制（#5390、#4881）需要平台特定的配置粒度和可观测性。
- **自主模式的成本与噪声**：premium request 被循环消耗（#2881）与冗余摘要（#5033），反映开发者希望对 autopilot 行为施加更明确的开关与上限。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报（2026-11-16）

## 1. 今日速览

今日无新版本发布，社区焦点集中在免费额度（Free tier）问题的持续发酵以及 2.3.0 版本引入的“始终后台运行子代理”变更引发的回归争议。PR 侧活跃度高，核心团队推进 Code Mode 与 MCP Skills 等架构级特性，同时社区贡献了多项 compaction、插件列表与文档修复。

## 2. 版本发布

过去 24 小时内无新版本发布。

## 3. 社区热点 Issues

- **#59387 免费额度问题总汇帖**（OPEN，380 评论，👍28）
  免费层问题的官方主帖，汇总 `Free usage exceeded`、`Free usage limit reached` 等报错。评论量极高说明免费层稳定性仍是最大社区矛盾点。
  https://github.com/anomalyco/opencode/issues/59387

- **#60311 Go 用量限制文档与实现不一致**（CLOSED，reproduced，👍4）
  文档称限制按模型计算，实际 5 小时滚动/周/月额度为所有付费模型共享池。已复现并关闭，属于计费透明度问题。
  https://github.com/anomalyco/opencode/issues/60311

- **#64073 / #64096 子代理执行模式回归争议**（#64073 OPEN；#64096 CLOSED）
  2.3.0 将子代理改为“始终后台运行”，社区要求恢复前台/阻塞式调用。两帖同日活跃，反映该变更对既有工作流的冲击。
  https://github.com/anomalyco/opencode/issues/64073
  https://github.com/anomalyco/opencode/issues/64096

- **#28696 插件/Agent/Skills 市场主帖**（CLOSED，👍38，为本批最高赞）
  统一 OpenCode marketplace/registry 的 master issue 关闭，意味着该方向将由具体 PR 承接，值得追踪后续落地。
  https://github.com/anomalyco/opencode/issues/28696

- **#51209 向插件暴露 V2 TUI composer**（OPEN，👍8）
  V1 插件可通过 `client` 追加文本到 composer，V2 缺少等价能力，插件生态迁移受阻。
  https://github.com/anomalyco/opencode/issues/51209

- **#64184 TUI 在 SSH 断开时因未捕获 EIO 崩溃**（CLOSED，v2.3.0，linux）
  应优雅退出却抛出未捕获异常，同日创建并关闭，修复响应迅速。
  https://github.com/anomalyco/opencode/issues/64184

- **#49704 带 build/prepare 脚本的 git 插件依赖安装失败**（OPEN，reproduced）
  `NpmInstallFailedError`，影响插件从 git 源安装的可靠性，插件开发者高频痛点。
  https://github.com/anomalyco/opencode/issues/49704

- **#58111 主机休眠后健康后台服务被误杀**（OPEN）
  探测超时被当作无响应，客户端对健康服务发 SIGTERM/SIGKILL 并重启，影响长任务与会话连续性。
  https://github.com/anomalyco/opencode/issues/58111

- **#56352 reasoning_content 被回放导致工具调用标记泄漏**（OPEN）
  会话历史持久化并回传 CoT，违背 DeepSeek 等 API 约束，存在正确性与隐私双重风险。
  https://github.com/anomalyco/opencode/issues/56352

- **#63867 原生密钥引用（OS 凭证库/密钥管理）**（OPEN，v2）
  早期同类请求被自动关闭，本次重新提出，指向凭证管理的长期缺口。
  https://github.com/anomalyco/opencode/issues/63867

## 4. 重要 PR 进展

- **#64284 `feat(core): move shell into Code Mode behind full_codemode`**（OPEN，jlongster）
  在 `full_codemode` 开关下将 `shell` 变为 Code Mode 工具，堆叠于 #64281，是 Code Mode 架构推进的关键一步。
  https://github.com/anomalyco/opencode/pull/64284

- **#64256 `feat(core): make shell a Code Mode tool`**（CLOSED，jlongster）
  不再将 shell 作为工具直接发送给模型，与 #64284 构成同一演进线。
  https://github.com/anomalyco/opencode/pull/64256

- **#64157 `feat(core): add experimental MCP Skills support`**（OPEN，rekram1-node）
  实验性支持 MCP Skills，连接插件市场与 Skills 生态方向。
  https://github.com/anomalyco/opencode/pull/64157

- **#64166 `feat(ai): add mid-conversation tool changes`**（OPEN，rekram1-node）
  允许在对话中途增删工具，提升长会话与动态工具集场景的灵活性。
  https://github.com/anomalyco/opencode/pull/64166

- **#64290 `feat(core): run background compaction by default`**（OPEN，neriousy）
  默认启用 `background_compaction`，与下方 compaction 修复线共同改善长上下文表现。
  https://github.com/anomalyco/opencode/pull/64290

- **#64291 `fix(core): truncate large tool call inputs in recent compaction text`**（OPEN，Closes #64279）
  摘要压缩后 `<recent-context>` 中保留的大型工具调用输入被截断。
  https://github.com/anomalyco/opencode/pull/64291

- **#64292 `fix(core): keep remaining text cuts from splitting characters`**（CLOSED，Closes #64006）
  #63967 的后续，修复剩余 `.slice()` 截断处切断字符的问题。
  https://github.com/anomalyco/opencode/pull/64292

- **#64222 `feat(core): time-based model availability with fallback`**（OPEN）
  按时间窗口切换模型可用性并带回退，替代因模板不全被关闭的 #63728。
  https://github.com/anomalyco/opencode/pull/64222

- **#64287 `fix(cli): display package id for tui plugins in plugin list`**（OPEN，Closes #64175）
  `opencode plugin list` 的 ID 列此前对 TUI 插件显示 `-`，属插件可观测性修复。
  https://github.com/anomalyco/opencode/pull/64287

- **#57161 `feat(core): discover models for configured OpenAI-compatible providers`**（OPEN，Closes #48938）
  为 LiteLLM 等自定义 OpenAI 兼容网关自动发现模型，长期开放的自定义 provider 能力补全。
  https://github.com/anomalyco/opencode/pull/57161

- **#63002 `feat(desktop): signed-in browser pane…`**（OPEN，Hona）
  桌面端内嵌已登录浏览器窗格，支持扩展、预览与代理防护，同时回应了 #60875 类桌面交互需求。
  https://github.com/anomalyco/opencode/pull/63002

## 5. 功能需求趋势

- **插件与生态可扩展性**：V2 TUI composer 暴露（#51209）、插件市场（#28696）、MCP Skills（#64157）、插件列表显示修复（#64287），生态基础设施建设是主线。
- **子代理/工作流控制权**：社区明确要求保留前台/阻塞式子代理调用（#64073、#64096），反对全部后台化。
- **凭证与安全**：原生密钥引用（#63867）、reasoning_content 回放（#56352）显示安全与隐私边界的关注在上升。
- **自定义 Provider 与模型支持**：自定义 provider 选项消失（#59603）、OpenAI 兼容网关模型发现（#57161）、LM Studio 推理控制文档（#64045）。
- **性能与上下文管理**：compaction 后台化与截断修复（#64290、#64291、#64292）、会话标签加载优化（#63582）。“compaction/truncation”在今日 PR 中占比显著。
- **桌面端体验**：内嵌浏览器（#63002）、shell 代码块 Run 按钮（#60875）。

## 6. 开发者关注点

- **免费层与计费透明度**：#59387 的 380 条评论与 #60311 的文档-实现不一致，说明额度规则是最尖锐的信任问题。
- **服务与进程稳健性**：休眠后误杀健康后台服务（#58111）、SSH 断开崩溃（#64184）、glibc < 2.28 下 PTY 503（#51796）——长驻与远程场景的健壮性反复被提及。
- **插件开发体验**：git 依赖带构建脚本安装失败（#49704）、V1→V2 能力缺失（#51209），直接影响第三方插件迁移成本。
- **平台兼容性**：Linux glibc 版本、Windows MCP 页面脚本异常（#64293）显示跨平台测试覆盖仍有缺口。
- **认证与入门门槛**：多条同类认证求助（#64269、#64277）集中出现，付费后凭证问题需要更清晰的引导。

---
*数据来源：github.com/anomalyco/opencode，统计窗口 2026-11-16 过去 24 小时；Issues/PR 仅覆盖所提供样本。*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报 · 2026-11-16

## 1. 今日速览
今日无新版本发布，社区活动集中在 **provider 接入稳定性**（OpenAI OAuth 403、Codex WebSocket 60 分钟断连、Bedrock 客户端重复创建）与 **session/compaction 正确性**（RPC 会话切换重复触发、压缩静默中断）。同时有一批当日提交的 PR 聚焦锁/资源释放、系统提示词角色默认值和 SSE 解析性能，修复节奏明显加快。

## 2. 版本发布
过去 24 小时无新 Release，本节略。

## 3. 社区热点 Issues（10 条）

1. **[#10605] ChatGPT/OpenAI OAuth 403**（OPEN，14 条评论，👍1）
   已订阅 Plus 的用户反复登出/登录仍报 `The ChatGPT user is not eligible for subscription sharing`。这是当前评论最多的未决问题，影响付费用户基础可用性。
   https://github.com/earendil-works/pi/issues/10605

2. **[#11950] 同一消息内 tool calls 并发执行**（OPEN，prio:p0，7 条评论）
   bash 与 read 在同一 assistant 消息中同时启动，read 可能在命令写完文件前执行，导致读到未落盘的构建日志/图像。属于 P0 级正确性缺陷。
   https://github.com/earendil-works/pi/issues/11950

3. **[#11527] Bedrock 每次请求新建 BedrockRuntimeClient**（OPEN，7 条评论）
   `stream()` 内反复 `new BedrockRuntimeClient(config)`，每次调用都重建凭证 provider 和 HTTP/2 会话；使用 SSO profile 时成本明显。属可量化的资源浪费。
   https://github.com/earendil-works/pi/issues/11527

4. **[#12124] Codex WebSocket 60 分钟连接上限在单轮内触发**（OPEN，inprogress，3 条评论）
   尽管此前已有 #5973、#6268 等修复，长连续任务中仍出现连接上限错误，说明问题未被彻底解决。
   https://github.com/earendil-works/pi/issues/12124

5. **[#12060] zstd 压缩请求导致 openai-codex SSE 400**（OPEN，prio:p0，3 条评论）
   同样的请求体未压缩可通过，压缩后返回 `{"detail":"Bad Request"}`，自 11 月 9 日起影响长会话。报告由 AI agent 生成并已按规范标注。
   https://github.com/earendil-works/pi/issues/12060

6. **[#12076] 压缩阶段工具循环静默终止**（OPEN，3 条评论）
   在 Pi 1.5.2 + vLLM 下，接近上下文上限时陷入压缩循环，`seq 1 2000` 每次约增加 9k token，最终静默结束而非正常压缩，且报告者已验证两次。直接影响长任务可靠性。
   https://github.com/earendil-works/pi/issues/12076

7. **[#12224] MCP SSE 反复拼接、重扫不完整大事件**（CLOSED，3 条评论）
   `consumeSseStream()` 用单一字符串累积缓冲并反复 slice，大事件分片到达时产生重复拼接与重扫描。当日提交、当日关闭，属性能类优化。
   https://github.com/earendil-works/pi/issues/12224

8. **[#12225] Anthropic 与 Pi SSE reader 释放锁但未取消响应体**（CLOSED，3 条评论）
   `iterateSseMessages()` 与 `readPiMessagesEvents()` 的 `finally` 仅 `releaseLock`，未取消 body，可能导致底层连接悬挂。同为当日闭环的修复。
   https://github.com/earendil-works/pi/issues/12225

9. **[#12070] google-vertex 流超时与中途 ECONNRESET 归类为可重试**（OPEN，3 条评论）
   在 `@earendil-works/pi-ai@1.5.2` 多轮评测中发现：未接线 `timeoutMs`，且中途流重置/超时未被判定为可重试，导致 Vertex 流卡死。对评测工作流影响大。
   https://github.com/earendil-works/pi/issues/12070

10. **[#11071] 让 AssistantMessage 保留结构化 provider 失败元数据**（OPEN，3 条评论）
    为 HTTP 状态码、provider 错误码和可重试性提供共享类型契约，是多项错误处理修复的上游基础设计需求。
    https://github.com/earendil-works/pi/issues/11071

> 补充：#10470（RPC 四个会话操作重复触发 `session_start`，9 条评论）已 CLOSED，见下节对应 PR。

## 4. 重要 PR 进展（10 条）

1. **[#12230] RPC 会话替换时只触发一次 session_start**（CLOSED，关闭 #10470）
   修复 `new_session`/`switch_session`/`fork`/`clone` 中扩展 handler 被调用两次、中间缺少 `session_shutdown` 的问题。
   https://github.com/earendil-works/pi/pull/12230

2. **[#12229] 重试 Codex WebSocket 连接上限错误**（OPEN，关闭 #12124）
   针对后端 60 分钟关闭连接的行为增加重试，是长任务稳定性的关键补丁。
   https://github.com/earendil-works/pi/pull/12229

3. **[#12115] 报告会话替换时的诊断信息**（CLOSED，关联 #11264）
   让 `/new`、`/resume`、`/fork`、import 及 RPC 会话操作后出现的诊断信息能被正确上报。
   https://github.com/earendil-works/pi/pull/12115

4. **[#12117] 移除两处直写终端**（CLOSED，关联 #11264）
   清理 TUI 运行期间残留的 `console.error` 直写，避免污染全屏界面。
   https://github.com/earendil-works/pi/pull/12117

5. **[#12134] openai-completions 默认指令角色由 developer 改为 system**（OPEN）
   触发于 Groq qwen/qwen3.8-27b 首条消息 400 报错，旨在提升 chat-completions 类接口的兼容性。
   https://github.com/earendil-works/pi/pull/12134

6. **[#12198] 升级 undici 至 8.12.4**（CLOSED）
   仅修改 `packages/coding-agent` 的精确依赖版本并刷新 lockfile，无应用/测试代码改动。
   https://github.com/earendil-works/pi/pull/12198

7. **[#11800] 更新 Ant Ling 模型兼容性并移除废弃模型**（CLOSED）
   将 Ant Ling 的 API 兼容层与 DeepSeek 统一，以新模型替换离线的 `Ling 2.6` / `Ring 2.6`，并清理旧格式。
   https://github.com/earendil-works/pi/pull/11800

8. **[#12228] models.md 增加托管网关示例与坑点**（CLOSED）
   示例基于作者参与开发的 TeapotRouter，但作者声明步骤是协议通用的，并愿意替换示例。文档类贡献，需注意利益披露。
   https://github.com/earendil-works/pi/pull/12228

9. **[#12222] 保留 macOS argv 以恢复 Zellij 会话**（对应 Issue CLOSED）
   提议在 CLI、RPC、Bun 启动路径中跳过 macOS 上的 `process.title` 赋值，Linux/Windows 行为不变，是对 #9766（已关闭为不计划）的复议。
   https://github.com/earendil-works/pi/issues/12222

10. **[#12212] 在非严格 Anthropic tools 中保留 $schema 声明**（Issue CLOSED）
    因 `convertTools()` 会丢弃 `$schema`，提议在 `input_schema` 中保留；作者已备好最小修复与离线回归测试，等待批准开 PR。
    https://github.com/earendil-works/pi/issues/12212

## 5. 功能需求趋势
- **Provider 接入与兼容性**：OpenAI OAuth、Codex WebSocket/zstd、Bedrock 客户端生命周期、Vertex 超时、Mistral Large 4 工具调用挂起，构成今日最密集的方向。
- **模型支持更新**：Ant Ling 模型替换与 API 兼容统一（#11800），反映本地/国产模型适配仍在持续维护。
- **流式传输健壮性**：SSE 锁取消（#12225）、MCP SSE 缓冲重扫（#12224）、结构化错误元数据（#11071）指向统一的流错误处理设计。
- **会话与压缩语义**：RPC 会话事件重复（#10470）、压缩 checkpoint 拒收失败摘要（#12204）、压缩静默终止（#12076），是长会话可靠性的核心诉求。
- **扩展事件扩展**：#8530 请求 `user_bash_complete` 事件，说明社区希望基于扩展构建更细粒度的自动化。
- **终端/平台集成**：macOS + Zellij argv 保留（#12222）、split mouse report 编辑区残留（#11172），属于 TUI 交互细节打磨。

## 6. 开发者关注点
- **付费用户的认证阻塞最痛**：#10605 持续 14 条评论仍未决，OAuth 403 直接影响 Plus 订阅者日常使用。
- **并发正确性优先于性能**：P0 的 #11950 表明工具调用调度缺少依赖顺序，易被用户误判为“文件不存在”类假错。
- **长会话稳定性反复出问题**：Codex 60 分钟断连、compaction 循环、SSE 连接未取消三件事共同指向“长任务中途失败且难以恢复”的体验痛点。
- **资源浪费被量化关注**：Bedrock 每请求新建客户端、MCP SSE 重复重扫，说明开发者开始用成本/复杂度视角提 issue。
- **错误元数据缺乏统一契约**：#11071 反映重试策略依赖散落的字符串判断，社区希望上游提供类型化错误模型。
- **AI 生成报告已成常态**：多条 issue 明确按 CONTRIBUTING.md 标注 AI 参与，维护方需适应此类贡献的审核成本。
- **文档贡献需利益披露**：#12228 的网关示例虽有披露，但社区对厂商中立的示例仍有期待。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报 · 2026-11-16

## 今日速览

今日社区焦点集中在 **1.0 Preview 内核落地**与 **Managed Agent 服务稳定性**两条主线：1.0 的事件驱动循环内核开始分片合入 main（#17045 已关闭），而 Managed Agent 侧连报多个 P1/P2 缺陷。CI 治理仍是最大噪音源，三条长期失败的 CI 跟踪 Issue 合计评论超 500 条。PR 侧以 yiliang114 的 Managed Agent 大型拆分系列（#16023、#17357）为主，另有多个 Python SDK 生命周期修复。

## 版本发布

**v0.27.3-nightly.20261115.6e3b2dcc19**（nightly）
- `feat(web-shell)`：新增侧边栏工作区过滤器（PR #17244）
- `feat(managed-agent)`：新增钉钉（DingTalk）适配器

## 社区热点 Issues

1. **#14724 Main CI 失败：Managed Agent gate 无测试识别**（OPEN，407 评论）
   机器人自动创建的 CI 长期跟踪 Issue，2026-10-19 创建至今仍未收敛，评论数居首，标签 `autofix/skip` 表明自动修复流程已放弃处理，需人工介入。
   https://github.com/QwenLM/qwen-code/issues/14724

2. **#17045 跟踪(core)：1.0 Preview 循环内核分片合入 main**（CLOSED，21 评论，P1）
   将 `v1.0.0-preview` 中基于单一 `query()` 入口的事件驱动内核逐步迁到 main，是版本架构级变更的路线图，今日关闭说明阶段目标达成。
   https://github.com/QwenLM/qwen-code/issues/17045

3. **#11680 Main CI 失败：E2E Tests 无测试识别**（OPEN，62 评论）
   9 月起持续存在的主分支 E2E 跟踪 Issue，今日仍在更新，反映 E2E 稳定性长期欠账。
   https://github.com/QwenLM/qwen-code/issues/11680

4. **#17077 评审请求：#15634（channels 注入消息派发）卡在两个批准上**（OPEN，8 评论，P3）
   该 PR 自 11-09 起无维护者活动，分支已在冲突后与 main 重新同步，是社区贡献者推动评审流程阻塞的典型诉求。
   https://github.com/QwenLM/qwen-code/issues/17077

5. **#17467 [managed-agent] managed-config_install 未进入 Session Store 依赖遍历列表，导致提交丢失资源闭包**（OPEN，P1）
   `collectNestedResourceRefs` 对该类型返回 `[]`，提交时只记录自身、遗漏其依赖资源，属数据一致性类严重问题。
   https://github.com/QwenLM/qwen-code/issues/17467

6. **#17408 [managed-agent] 工作区隔离绑定时 ChildResultRelay 永久自旋**（OPEN，P2）
   子 Turn 已 `turn.completed` 但父 Turn 收不到结果直至超时，直接影响 workspace 隔离模式下的会话可用性。
   https://github.com/QwenLM/qwen-code/issues/17408

7. **#17371 verify-pr：跟踪 PR #17185「接受残余风险合入」遗留风险**（OPEN，P1，security/ci-cd）
   该 PR 经 17 轮评审后按显式残余风险决策合入，核心安全目标（豁免审批）仍有待追踪，属供应链安全议题。
   https://github.com/QwenLM/qwen-code/issues/17371

8. **#17350 Windows：`run_shell_command` 输出被填充至终端宽度，26–34% 为空白**（OPEN，P2）
   自 v0.24.0 起的回归，通过 ConPTY + headless xterm 捕获时按列宽补空格并送入模型，浪费上下文且影响模型判断，标签 `ready-for-agent`。
   https://github.com/QwenLM/qwen-code/issues/17350

9. **#16767 Web Shell 在 Turn 以工具调用结束时误报「上一请求被中断」**（OPEN，P2）
   最后一个 `todo_write` 之后无模型文本即触发误报警告，影响 Web Shell 用户对会话状态的判断。
   https://github.com/QwenLM/qwen-code/issues/16767

10. **#14019 feat(web-shell)：完整实验性智能 UI，支持有状态交互**（OPEN，P2，need-discussion）
    让助手在纯文本、原生交互组件与隔离 HTML 可视化之间按任务选择，是 UI 层面最受关注的功能型需求。
    https://github.com/QwenLM/qwen-code/issues/14019

（另：**#17038** headless Linux 下 OAuth 登录卡在验证态，已关闭，P2；**#16204** 建议在 web-search 文档中增加免密钥 MCP 搜索服务 Keenable，待讨论。）

## 重要 PR 进展

1. **#17471 feat(managed-agent)：将未绑定 Session 的权限统一到 ownership 行**（OPEN，[16023 A/2]）
   从 #16023 拆出，处理未绑定 Session 的主体归属迁移。
   https://github.com/QwenLM/qwen-code/pull/17471

2. **#17474 feat(managed-agent)：把外部前景 Shell 接入 Broker 与 Control Plane**（OPEN，[17357 B/2]）
   涉及 Runtime Broker 的 dispatch/cancel/reconcile/close 栅栏与控制面配置协商。
   https://github.com/QwenLM/qwen-code/pull/17474

3. **#17478 feat(managed-agent)：新增外部 Shell worker 配置与发布生产者**（OPEN，[17357 A/2]）
   与 #17474 同源拆分，覆盖 worker 侧实现。
   https://github.com/QwenLM/qwen-code/pull/17478

4. **#17458 fix(core)：拒绝在被跳过的 artifact 目录内记录 `record_artifact`**（OPEN，修复 #17453）
   此前 `.qwen/tmp/` 下文件记录返回 `available` 但面板不显示，工具上报与实际结果矛盾。
   https://github.com/QwenLM/qwen-code/pull/17458

5. **#17459 fix(managed-agent)：恢复超时的托管 journal 提交**（CLOSED）
   提交丢失应答时先重放原字节再挂起 Session；已落库的提交不重复执行工具，保证幂等。
   https://github.com/QwenLM/qwen-code/pull/17459

6. **#17498 fix(sdk-python)：关闭 query 前等待进程启动完成**（OPEN）
   避免在进程启动中关闭导致残留后台工作，重复关闭保持幂等。
   https://github.com/QwenLM/qwen-code/pull/17498

7. **#17497 fix(sdk-python)：释放被取消和失败的控制请求**（OPEN）
   在取消、写失败、排空失败时释放待回复与超时，补齐 Python SDK 资源泄漏。
   https://github.com/QwenLM/qwen-code/pull/17497

8. **#17495 fix(core)：安装过程中保留插件 hook 根路径**（OPEN）
   保留 `${CLAUDE_PLUGIN_ROOT}` 至扩展加载时按安装目录解析，与内联 hook 行为对齐。
   https://github.com/QwenLM/qwen-code/pull/17495

9. **#17393 test(serve)：固定 managed hooks 对 description 与 statusMessage 的接受性**（CLOSED）
   配套 #17381 缺陷，允许 command/http/prompt/function 四类 hook 携带标准元数据。
   https://github.com/QwenLM/qwen-code/pull/17393

10. **#15458 feat(core)：Linux 新安装改用 XDG 配置目录**（OPEN）
    全局状态迁往 `$XDG_CONFIG_HOME/qwen`（默认 `~/.config/qwen`），符合 XDG Base Directory 规范。
    https://github.com/QwenLM/qwen-code/pull/15458

（另有 **#16472** Web Shell 会话摘要受 `general.showSessionRecap` 与延迟分钟数控制；**#16679** ACP 上报失败的 `todo_write`；**#16770** 保留在高度预算内的工具结果 Markdown 渲染。）

## 功能需求趋势

- **1.0 架构演进**：事件驱动循环内核分片落地（#17045），会话管理成为 roadmap 主轴。
- **Web Shell 智能化**：有状态交互组件与可视化（#14019）、侧边栏工作区过滤（#17244）、会话摘要开关（#16472）。
- **集成生态扩张**：Channels 多平台（钉钉适配器、QQ 出站富媒体 #15450、消息注入 #15634）、MCP 网页搜索服务补充（#16204）、OpenAI 兼容 provider 文档（#17329）。
- **托管/Managed Agent 服务化**：工作区隔离、绑定会话归属、Broker/Control Plane 接入成为最活跃的工程方向。
- **跨平台与规范适配**：Windows shell 输出、Linux XDG 目录、headless 登录。

## 开发者关注点

- **CI 稳定性是首要痛点**：三条长期 CI 跟踪 Issue（#14724、#11680、#11678）持续更新，另有多个 deflake Issue（#17262、#17483），失败识别与 flaky 判定成本高。
- **评审流程阻塞**：社区 PR 因缺少两名批准而长期停滞（#17077、#17167 分别卡 72 小时以上），贡献者要求明确维护者响应机制。
- **Managed Agent 缺陷密集**：journal 提交、结果中继、hook 元数据、资源闭包等 P1/P2 问题集中出现，显示该子系统仍处快速迭代、稳定性待巩固阶段。
- **上下文与输出质量**：Windows shell 输出大量空白填充（#17350）、工具结果被降级为纯文本（#16770）等直接影响模型输入质量的问题被明确提出。
- **Python SDK 生命周期管理**：进程启动竞态与取消/失败路径的资源释放连续被修复（#17497、#17498）。

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI 社区动态日报 · 2026-11-16

> 数据来源：github.com/Hmbown/DeepSeek-TUI（Issues/PR 链接实际指向 codewhale-hq/Codewhale）。过去 24 小时无新版本发布；v0.10.3 相关事项持续活跃。

## 1. 今日速览

今天最显著的动态是 v0.10.3 版本冲刺带来的集中反馈：ACP 外部 Agent 会话集成进入分片落地阶段，同时 TUI 状态层暴露出多个严重缺陷（新回合开始时界面冻结、会话用量账本超过 1 MiB 后无法保存、`/undo` 重复加载回合存储），这些都是今天新开的高优先级 bug。安全与沙箱方向有 4 个 Issue 关闭并配套 PR 合并，贡献者活跃度较高。

## 2. 版本发布

过去 24 小时无新 Release。#7279、#7174、#7274 等条目仍标记 `v0.10.3`，说明 0.10.3 处于发布前收尾期。

## 3. 社区热点 Issues（10 条）

1. **#7357 TUI 在新回合开始时冻结整个回合** — 今天新开。回合切换间隙触发 save-snapshot 时，界面会冻结整个新回合时长，按键无响应，只能关闭终端。这是最影响日常使用的缺陷，已有 1 条评论。
   https://github.com/codewhale-hq/Codewhale/issues/7357

2. **#7356 用量账本达到 1 MiB 后会话彻底无法保存** — 今天新开。late-usage ledger 触顶后，checkpoint、snapshot、commit 全部失败，压缩报 `Making room failed`。会导致长时间会话数据丢失，属于数据可靠性风险。
   https://github.com/codewhale-hq/Codewhale/issues/7356

3. **#6970 Windows 下 `/undo` 严重 bug（7 条评论，本批最多）** — 长期悬而未决的跨平台回滚问题。摘要显示 macOS 与源码路径已修复，Windows 终验仍开放，是发布阻塞项。
   https://github.com/codewhale-hq/Codewhale/issues/6970

4. **#7279 0.10.3：通过 ACP 将已安装 Agent（Claude Code、Codex、Kimi 等）作为 Codewhale 会话运行** — 0.10.3 的核心方向，涉及 sandbox、subagents、install、state 多模块，标记 help wanted / good first issue，已拆分为多个分片 PR。
   https://github.com/codewhale-hq/Codewhale/issues/7279

5. **#7354 Fork 准备期间持有全局会话准入锁，阻塞无关线程** — 按 turn_id fork 时全程持有 manager 级准入守卫，并发场景下会拖慢其他会话。
   https://github.com/codewhale-hq/Codewhale/issues/7354

6. **#7355 具名回合撤销在 fork 前两次读取整个回合存储** — 200 回合线程的 `/undo` 需要加载两遍全部 turn/item，性能问题明显，与 #7354 同源。
   https://github.com/codewhale-hq/Codewhale/issues/7355

7. **#7274 引擎/tools/util/repl 健壮性：panic、glob 挂起与错误文本** — 读代码审查发现的崩溃、挂起与输出错误集合，逐项拆成小 PR 跟踪，重试配置 panic 等属于稳定性隐患。
   https://github.com/codewhale-hq/Codewhale/issues/7274

8. **#7174 conformance：安装了可选工具的主机无法通过 prompt fixture 测试** — `host_probed_tools.golden.json` 钉死宿主工具集，导致 CI 结果依环境而异，标记 `status:awaiting-release`。
   https://github.com/codewhale-hq/Codewhale/issues/7174

9. **#7270 死代码候选需要维护者决策** — 引用 #4785，列出“从未产出或仅测试可达”的代码，每项都像未完成功能的起点，需决定补全还是删除。
   https://github.com/codewhale-hq/Codewhale/issues/7270

10. **#7302 / #7301 / #7305 三项已关闭的安全修复** — IDN 网络 deny 条目从未匹配、密钥脱敏漏掉紧邻中日韩文字或全角标点的 token、deny 规则漏掉 `hash -p`/`zsh =cmd` 别名重绑定及 parallel/chpst/screen/at 等启动器。三者均已关闭并配套 PR，安全面收敛明显。
    https://github.com/codewhale-hq/Codewhale/issues/7302
    https://github.com/codewhale-hq/Codewhale/issues/7301
    https://github.com/codewhale-hq/Codewhale/issues/7305

## 4. 重要 PR 进展（10 条）

1. **#7349 fix(client)：按端点而非模型 id 决定 reasoning 方言** — 修复 `openai-compatible` 自定义路由携带 DeepSeek 模型 id 时被误发原生 `thinking` 对象的问题。对多 Provider 用户影响直接。
   https://github.com/codewhale-hq/Codewhale/pull/7349

2. **#7294 feat(workflow)：用隔离宿主 oracle 验证封存候选** — 来自 #7250 / #7262 的维护者要求切片，冻结版本化宿主规格、干净 Git 基线与授权窗口，属于评估器能力建设，仍开放。
   https://github.com/codewhale-hq/Codewhale/pull/7294

3. **#7326 feat(engine)：将 GitHub Copilot CLI 加入外部 Agent 注册表** — #7279 的 2 号分片，维护者建议与 Qwen Code（#7293）并行推进，单行注册即可接入。
   https://github.com/codewhale-hq/Codewhale/pull/7326

4. **#7353 fix(engine)：记录安全的 Provider 失败诊断** — 在 `envelope_for_llm_error` 边界输出结构化告警，覆盖流打开、流读取等路径，解决超时/传输失败无日志的问题。
   https://github.com/codewhale-hq/Codewhale/pull/7353

5. **#7352 fix(app-server)：Web picker 保留具名 Provider** — 修复 Web 端新建线程时命名自定义 Provider（如 `seer`）无法加载模型列表的问题，多个路由都被标为 `custom` 导致精确 ID 丢失。
   https://github.com/codewhale-hq/Codewhale/pull/7352

6. **#7342 fix(core)：CLI 参数值内的赋值保持字面量** — 修复回退解析器把 `--command "MODE=dev node app.js"` 中的 `MODE=` 误识别为工具参数的 bug。
   https://github.com/codewhale-hq/Codewhale/pull/7342

7. **#7321 fix(execpolicy)：对重绑定命令词及更多启动器维持 deny 规则** — 对应 #7305，涉及信任边界（沙箱策略），作者按 CONTRIBUTING 要求先提 Issue 再提交，等待维护者确认方向。
   https://github.com/codewhale-hq/Codewhale/pull/7321

8. **#7318 fix(sanitize)：遮蔽紧邻 CJK 文本的 Provider 密钥** — 对应 #7301，覆盖 `密钥：sk-…`、`我的密钥是sk-…` 等写法，中文用户场景的隐私修复。
   https://github.com/codewhale-hq/Codewhale/pull/7318

9. **#7346 docs：illustrate hybrid claude bundle and host hook boundary** — 外部贡献者（vshulcz）为 `CLAUDE_PLUGIN_COMPAT.md` 及中文本补充混合 bundle 示例，中文文档同步更新。
   https://github.com/codewhale-hq/Codewhale/pull/7346

10. **依赖批量更新** — #7337 jsonschema 0.57.0→0.61.2、#7336 lru 0.18.5→0.19.0 仍开放；#7334 tokio 1.53.3→1.54.1、#7338 globset、#7339 flate2 已关闭合并。另 #7351 因主干已有 b4625cec6 而被标记为被取代。
    https://github.com/codewhale-hq/Codewhale/pull/7337
    https://github.com/codewhale-hq/Codewhale/pull/7336
    https://github.com/codewhale-hq/Codewhale/pull/7334

## 5. 功能需求趋势

- **ACP 生态集成**：#7279 以 ACP 为先，把 Claude Code、Codex、Kimi、GitHub Copilot CLI、Qwen Code 等外部 Agent CLI 作为原生会话接入侧栏与历史，是当前最大的功能方向。
- **多 Provider 路由正确性**：#7349、#7352 表明命名自定义 Provider 与 openai-compatible 路由是使用热点，reasoning 方言选择需按端点判定。
- **状态与会话持久化架构**：今日新增 bug 集中在 session admission 锁、回合存储重复读取、用量账本容量，指向状态层需要结构性优化。
- **沙箱与安全策略**：deny 规则绕过、IDN 域名、CJK 密钥脱敏构成一组连续的安全加固需求。
- **跨平台验收**：Windows（#6970）与 macOS 的发布验收仍是质量门禁焦点。

## 6. 开发者关注点

- **TUI 卡死与不可恢复**：新回合冻结（#7357）、会话无法保存（#7356）是最伤体验的两类问题，用户唯一出路是关闭终端或丢弃会话。
- **`/undo` 与 fork 的性能与并发**：#7355、#7354 暴露双重加载与全局锁，长线程场景下代价被放大。
- **测试环境不确定性**：#7174 的 golden 文件与宿主可选工具耦合，导致测试结果依环境而异，影响 CI 可信度。
- **可观测性缺口**：#7353 反映 Provider 超时/传输失败在默认日志中不留痕，排查困难。
- **技术债决策**：#7270 的死代码清单需要维护者明确“补全或删除”，否则长期悬置。
- **信任边界流程**：#7321 作者明确按 CONTRIBUTING 先提 Issue 再提 PR，说明沙箱策略变更的审核流程对贡献者而言影响较大。

</details>

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar-personal) 自动生成。*