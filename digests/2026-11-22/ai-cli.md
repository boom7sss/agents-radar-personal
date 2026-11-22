# AI CLI 工具社区动态日报 2026-11-22

> 生成时间: 2026-11-22 17:52 UTC | 覆盖工具: 9 个

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

# AI CLI 工具生态横向对比分析（2026-11-22）

## 1. 生态全景

今日 9 个主流 AI CLI 工具中仅 Gemini CLI、GitHub Copilot CLI、Qwen Code、DeepSeek TUI 有版本动作，整体处于"功能快速铺开、可靠性回收"的阶段。各社区的高热议题高度重合于三类问题：**配置写了但不生效**（权限/沙箱/代理/模型参数）、**静默失败与状态误报**（把中断报成成功、把失败藏起来）、**agent 编排与无头/自动化场景的确定性**。与此同时，多代理递归、AST 语义化代码理解、Web/桌面多端一致性与 prompt-cache 效率，构成了新一轮能力竞争的主线。

## 2. 各工具活跃度对比

> 数据均取自各工具日报的统计口径；"热点 Issue"指日报列入 Top 10 的条目，不代表当日全部更新量。

| 工具 | 当日 Release | Issue 动态 | PR 动态 | 热点议题焦点 |
|---|---|---|---|---|
| Claude Code | 无 | 50 条更新（Top 10 已列） | 仅 1 条更新（长期 OPEN） | RTL/a11y、Windows 反斜杠吞字符、Office 插件回归、headless 插件 hook 失效 |
| OpenAI Codex | 无 | Top 10 已列（多条长期滞留） | 约 10 条，多为 TUI 修复且当日合并关闭 | Windows 权限/沙箱不一致、macOS 共享项目丢失、TUI 打磨 |
| Gemini CLI | v0.71.0 nightly | 10 条热点（含 P1） | 10 条（含安全修复） | 子代理 MAX_TURNS 误报成功、generalist agent 挂起、ACP/MCP 稳定性 |
| GitHub Copilot CLI | v1.0.115-7 / v1.0.115-6 | 10 条 | **仅 1 条**（CLOSED） | 云沙箱/移动端断连、自定义/子 agent 能力缺口、企业 TLS |
| Kimi Code CLI | 无 | **无活动** | 无活动 | — |
| OpenCode | 无 | 10 条热点（多处 CLOSED/OPEN 并存） | 10 条（含 cli-rs 重构系列） | v2 自定义 Provider 回归、Plan 模式失效、会话自行恢复 139 轮、内存/压缩性能 |
| Pi | 无 | 28 条更新（多为 CLOSED） | **仅 3 条，全部 CLOSED** | 跨 Provider 推理内容处理、会话切换竞态、Windows 路径兼容 |
| Qwen Code | v0.28.4 + desktop + nightly | 热点以 CI 失败为主（#14724 达 538 评论） | 10 条 | 主干 CI 长期红灯、daemon 崩溃恢复、Web Shell 工作台化 |
| DeepSeek TUI | v0.10.3 | 10 条（多条 CLOSED） | 4 条 | Windows `/undo` 缺陷、ChatGPT 认证失败（release-blocker）、插件生态 |

## 3. 共同关注的功能方向

**① 配置/设置不生效（跨工具最一致痛点）**
- Codex：`networkAccess=false` 覆盖 UI 设置、`full-access` 默认值被静默覆盖、`file_opener` 无效
- Gemini CLI：Browser Agent 忽略 `settings.json`、MCP 超时在工具刷新时丢失
- Pi：`http timeout = false` 对 llama.cpp 后端无效、`isContextOverflow` 误判 429/5xx
- DeepSeek TUI：换行符控制、货币单位、重试配置 panic 均属"写了不生效"

**② 静默失败与状态误报**
- Gemini CLI：子代理 MAX_TURNS 报 `success`、generalist agent 静默挂起
- Copilot CLI：`background` 模式被忽略、`/delegate` 未登录无响应（已在 v1.0.115-6 修复）
- OpenCode：更新检查静默无响应
- Pi：会话切换竞态导致 prompt 在已销毁会话上执行

**③ 权限/沙箱一致性**
- Codex（Windows/macOS 桌面端多点并发）、Gemini CLI（YOLO 模式解析失败仍放行、受污染命令的 allow 规则）、Claude Code（Linux 沙箱初始化失败）

**④ 企业/受限网络适配**
- Codex：`http_proxy` 配置高赞（👍73）长期未落地
- Copilot CLI：企业 TLS `handshake_failure`、Surge Fake-IP
- Pi：OAuth token 刷新失败阻断使用

**⑤ 多 agent 编排与可观测性**
- Gemini CLI：agent 调用 agent（#28738）、子代理轨迹经 `/chat share` 查看
- Copilot CLI：子 agent 多轮与后台模式、新增 `resume_session`/`suspend_session`
- OpenCode：子任务阶段在页脚展示
- Claude Code：hook 渲染可控、插件 MCP 与 connector 冲突治理

**⑥ 上下文与缓存效率**
- Claude Code：抑制日期注入以提升 prompt-cache 命中
- OpenCode：会话压缩时 prompt-cache 失效，50k token 需约 456 秒重填
- DeepSeek TUI：GoalSnapshot 重复注入
- Qwen Code：web_fetch 二进制溢出被微压缩清除

## 4. 差异化定位分析

- **Claude Code**：功能面最广（Desktop/Cowork/Office 插件/MCP connector/Agent SDK），议题横跨 IDE 集成、无障碍国际化、移动端认证与合规署名，呈现"大而全平台"的复杂度；社区对平台一致性和集成确定性要求最高。
- **OpenAI Codex**：桌面端（Windows Work / macOS Projects）与 TUI 双线推进，当前投入明显偏向 TUI 细节打磨（宽字符、光标、复制模式）；Windows 缺陷密度最高，企业网络支持是明确短板。
- **Gemini CLI**：技术路线最"agent-native"，押注子代理、ACP 协议、AST 感知代码理解与零依赖沙箱；安全策略收紧的 PR 密集，显示对执行模型的审慎。
- **GitHub Copilot CLI**：深度绑定 GitHub 生态（云沙箱、`gh`/GitHub MCP、移动端），主打会话与远程执行；PR 供给极少，迭代节奏偏保守。
- **OpenCode**：V2 迁移阵痛明显，自定义 Provider 回归是最伤迁移意愿的问题；同时以 Rust CLI（cli-rs）类型化重构展现性能路线野心，多端（Desktop/Web/iOS）一致性诉求强烈。
- **Pi**：轻量多 Provider 聚合器定位，议题几乎全是模型兼容与适配层问题；Issue 分流活跃（大量当日关闭），但高赞长期议题（#8643、#11021）仍 OPEN。
- **Qwen Code**：工程化程度最高，Web Shell 向完整工作台演进，Managed Agent 走向平台化；但 CI 可靠性成为最大噪声源。
- **DeepSeek TUI（Codewhale）**：插件生态（Creator 模式、DeepSeek Harness 兼容）与 Auto-Review 守护为差异化抓手，中文社区本地化需求（人民币计价、双语模板）突出。
- **Kimi Code CLI**：今日无活动，无法从材料判断其定位与节奏。

## 5. 社区热度与成熟度

- **讨论体量最大**：Qwen Code（单条 CI Issue 538 评论，但性质是自动化噪声而非有效讨论）、Claude Code（50 条更新，RTL 议题 48 评论/99👍）、Codex（Computer Use 议题 83 评论）、OpenCode（Plan 模式失效 15 评论）。
- **修复吞吐最快**：Codex（当日约 10 条 TUI PR 全部合并关闭）、Pi（28 条 Issue 更新多为当日 CLOSED）、DeepSeek TUI（多条 v0.10.3 相关 Issue 集中关闭）。
- **迭代最密集**：Gemini CLI（nightly + ACP/MCP/OAuth/安全多线修复）、Qwen Code（正式版+桌面版+nightly+deflake 自动化）、OpenCode（cli-rs 重构系列）。
- **节奏最保守**：Copilot CLI（PR 仅 1 条）、Claude Code（PR 仅 1 条且为长期 OPEN）。
- **成熟度信号**：Pi 与 Qwen Code 的自动化分流（untriaged/no-action、CI Failure Patrol）说明流程成熟，但 Qwen Code 的主干长期红灯、Codex 的 macOS 回归滞留自 7 月，显示"分流成熟 ≠ 治理闭环"。

## 6. 值得关注的趋势信号

1. **"可解释的失败"正在成为一等需求**：状态误报（MAX_TURNS 报成功）、静默挂起、配置被忽略被多个社区反复点名。开发者更愿意要清晰的错误与中止信号，而非"看起来成功"。对工具作者：失败语义设计应进入 API 契约。
2. **无头/自动化场景的可靠性是落地门槛**：Routines API 403、headless 插件 hook 全失效、daemon 被 SIGKILL 后无法恢复、会话自行执行 139 轮——CI 与 fleet 编排的可用性正在决定企业采纳意愿。
3. **多代理从"能力"转向"语义与可观测性"**：递归委托、后台模式、轨迹分享、子任务阶段展示，说明竞争焦点已从"能否多代理"转向"能否复盘、能否约束"。
4. **安全默认值收紧**：受污染命令的持久 allow 规则限制、YOLO 模式解析失败不放行、破坏性 git 操作抑制、代理凭据脱敏覆盖畸形输入，多家在同步收紧，建议开发者复核自身自动化脚本的隐式授权。
5. **成本与性能的可见性诉求上升**：prompt-cache 命中、上下文窗口上报差异（272K vs 500K）、配额异常消耗、"薄封装为何吃内存"——用户开始用成本视角评估工具。
6. **平台一致性仍是最大工程债务**：Windows（路径、编码、权限、认证）在 Claude Code、Codex、Pi、DeepSeek TUI 四家同时是最高缺陷密度平台；macOS 集成回归与 Linux 沙箱/Wayland 兼容紧随其后。
7. **编辑器/协议层成为新战场**：ACP 模式（Gemini CLI、Copilot CLI 图像生成）、VS Code 多根工作区绑定（Claude Code 67👍）、MCP 认证与超时治理，说明 CLI 正从终端工具演化为 IDE/编辑器的 agent 后端。

**给技术决策者的建议**：选型时优先验证"配置是否真的生效"与"失败是否清晰可中止"这两项，而非功能清单长度；对 Windows 与受限企业网络环境，建议先小范围压测再推广。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告

**数据截止：2026-11-22｜来源：github.com/anthropics/skills**

> 说明：所给数据中所有 PR 的评论数均为 `undefined`，因此“热门 Skills”部分**无法按评论数排序**。以下依据 Issue 讨论热度、被 Issue 引用/关联程度及更新活跃度进行组织，所有状态均以原始数据为准（PR 均为 OPEN）。

---

## 1. 热门 Skills 排行（PR）

数据中 PR 评论数缺失，以下 5 条为与高热度 Issue 直接关联、或更新最活跃的 Skill 变更，均状态 **OPEN**。

1. **skill-creator — 触发评测修复（#1298 / #1352 相关）**
   功能：修复 Trigger 评测的假阴性、Windows 下 `select()` 管道失败、运行时故障误判等问题。
   热点：直接对应 Issue #556（0% 触发率）与 #1352（并行 worker 交叉匹配 UUID 致近零触发率），是社区最集中的技术痛点之一。
   状态：OPEN（更新 2026-09-16）
   https://github.com/anthropics/skills/pull/1298

2. **skill-creator — YAML frontmatter 解析（#1997）**
   功能：修正 `parse_skill_md` 手动去引号、拼接续行导致元数据与 `SKILL.md` 不一致的问题。
   热点：影响 description 优化与评测命令，属 Skill 质量基础设施。
   状态：OPEN（更新 2026-10-19）
   https://github.com/anthropics/skills/pull/1997

3. **mcp-builder — 适配 mcp>=2（#1742）**
   功能：适配 `streamable_http_client` 重命名及自定义 headers 配置方式变更。
   热点：修复 #1668，关乎 MCP 生态兼容性。
   状态：OPEN（更新 2026-10-08）
   https://github.com/anthropics/skills/pull/1742

4. **claude-api — 修复失效文档链接（#1730）**
   功能：替换 `academy-guide` 与 tool-use-concepts 中 3 个 404 链接为规范 URL（已验证 HTTP 200）。
   热点：与 Issue #1487（claude-api 单次注入约 156k tokens 耗尽上下文）共同指向该 Skill 的可用性与体积问题。
   状态：OPEN（更新 2026-10-04）
   https://github.com/anthropics/skills/pull/1730

5. **webapp-testing — 移除 shell=True（#1980）/ 元素识别修复（#1976）**
   功能：#1980 避免将未净化命令串交给系统 shell；#1976 修正 textarea/select 被误报为 text 的 fallback。
   热点：安全与测试准确性双重诉求。
   状态：均 OPEN（更新 2026-11-01 / 2026-10-18）
   https://github.com/anthropics/skills/pull/1980 ｜ https://github.com/anthropics/skills/pull/1976

---

## 2. 社区需求趋势（Issues）

- **信任边界与安全**：Issue #492（46 评论）指出社区 Skill 冒用 `anthropic/` 命名空间，属最高热度议题，反映对分发可信度的强烈诉求。
  https://github.com/anthropics/skills/issues/492
- **组织内共享与工作流自动化**：Issue #228（17 评论、8 👍）要求 Claude.ai 支持组织级 Skill 共享库，替代手动下载 `.skill` 文件再上传的流程。
  https://github.com/anthropics/skills/issues/228
- **评测与触发可靠性**：Issue #556（13 评论、7 👍）、#1352（6 评论）集中反映 `run_eval.py` 触发率为 0 与并行误判，属工具链层面的核心需求。
  https://github.com/anthropics/skills/issues/556 ｜ https://github.com/anthropics/skills/issues/1352
- **记忆与上下文管理**：Issue #1329 提出 `compact-memory`，以符号化记法压缩长期 agent 状态。
  https://github.com/anthropics/skills/issues/1329
- **输出质量治理**：Issue #1385 提出“推理质量门”三段式流水线（预任务校准→对抗评审→交付验证）；Issue #412（已关闭）曾提议 `agent-governance` 治理模式 Skill。
  https://github.com/anthropics/skills/issues/1385 ｜ https://github.com/anthropics/skills/issues/412
- **文档/办公技能质量**：Issue #2018（docx 合并 run 丢失命名空间）、#1868（渐变插值比例 off-by-one）等反映文档类 Skill 的稳定性需求。
  https://github.com/anthropics/skills/issues/2018 ｜ https://github.com/anthropics/skills/issues/1868

> 注：数据中**未出现**针对“代码审查”“测试生成”独立新 Skill 的专门 Issue 方向，相关讨论主要集中在已有 skill-creator、webapp-testing 的缺陷修复上。

---

## 3. 高潜力待合并 Skills

以下 PR 更新活跃、且多已 `Fixes #编号` 绑定具体 Issue，落地可能性较高（均为 OPEN）：

- **algorithmic-art：修复 wrapAround()（#1977）**——模运算支持负数，Fixes #1897；更新 2026-10-18。
  https://github.com/anthropics/skills/pull/1977
- **pptx：thumbnail.py 提前拒绝 --cols < 1（#1975）**——Fixes #1809；更新 2026-10-27。
  https://github.com/anthropics/skills/pull/1975
- **xlsx：解析工作表级 defined names（#2019）**——Fixes #2013，修复外部链接误报；更新 2026-11-03。
  https://github.com/anthropics/skills/pull/2019
- **skill-creator：package_skill.py 直接执行（#1681）**——修复 ModuleNotFoundError；更新 2026-11-19（最新）。
  https://github.com/anthropics/skills/pull/1681
- **docx：LibreOffice 超时报错并校验输出（#1792）**——更新 2026-11-01。
  https://github.com/anthropics/skills/pull/1792

新增技能类 PR（较新、待评审）：`md2video-audio`（#1703，Markdown→MP4 视频）、`scnet-hpc`（#1615，Slurm/HPC 操作）、`proofcore-contract-auditor`（#1771，智能合约审计）。

---

## 4. Skills 生态洞察

**社区当前最集中的诉求是“信任与可靠性基础设施”：一方面要求分发层杜绝命名空间冒用（#492 遥遥领先的热度），另一方面要求 skill-creator 的触发评测、YAML 解析与上下文体积真正可用——即先让 Skills 可被信任、可被正确触发，再谈新增技能。**

---

# Claude Code 社区动态日报（2026-11-22）

> 数据来源：github.com/anthropics/claude-code

## 1. 今日速览

过去 24 小时无新版本发布。共 50 条 Issue 更新，讨论集中在 Windows 下 Bash 工具因命令编码不匹配而吞掉反斜杠、Go 的 `/goal` Stop hook 无限重复触发，以及 macOS 上 Microsoft 365 Office 插件安装后消失等回归问题。功能侧，多根工作区（multi-root）下 VS Code 的工作目录与 session 绑定、RTL 支持等需求持续获得较高支持票。

## 2. 版本发布

今日无新版本。

## 3. 社区热点 Issues（Top 10）

1. **[#38005](https://github.com/anthropics/claude-code/issues/38005)** RTL（希伯来语/阿拉伯语）支持，面向 Claude Desktop / Cowork — 48 条评论、99 👍，是今日讨论热度最高的话题；该需求标记为 duplicate/enhancement，并涉及 a11y 无障碍区域。这是长期呼声最高的本地化需求之一。
2. **[#85856](https://github.com/anthropics/claude-code/issues/85856)** Windows/Git Bash：Bash 工具静默吞掉反斜杠（MSVCRT 与 MSYS2 命令行编码不匹配）— 23 评论、23 👍。命令中连续 n 个反斜杠到达 bash 时被减半；这是影响 Windows 开发者的正确性问题，且问题静默发生、难以调试，社区讨论活跃。
3. **[#105770](https://github.com/anthropics/claude-code/issues/105770)** Android 端在已 root、已解锁 bootloader 的设备上登录失败（`/auth/verify_google_mobile` 返回 HTTP 400）— 19 评论、17 👍。Play Integrity 校验拒绝这类设备，被标记为 invalid，反映出移动端认证策略与开发者设备之间的冲突。
4. **[#36105](https://github.com/anthropics/claude-code/issues/36105)** 建议用 `Assisted-by` 替代 `Co-authored-by` 作为 git commit trailer — 14 评论、57 👍。这涉及 AI 贡献署名规范，支持票较高，被开发者视为协作与合规层面的重要改进。
5. **[#111275](https://github.com/anthropics/claude-code/issues/111275)** macOS：Microsoft 365 Office 加载项安装数秒后消失（疑与 Cowork Office 会话有关，见 #61756）— 13 评论，被标记为 regression（回归）。集成功能不稳定，直接影响企业用户的日常流程。
6. **[#94041](https://github.com/anthropics/claude-code/issues/94041)** Linux：原生 `/goal` Stop hook 无限重复触发，且无法确认 hold 状态 — 10 评论。即使已有证据显示目标条件已满足，hook 仍会以不变或过期的文本反复触发，可导致会话无法收敛。
7. **[#102874](https://github.com/anthropics/claude-code/issues/102874)** Routines API：触发 Project routine 返回 403 "this project is paused"（项目实际处于 active 状态）— 8 评论、9 👍。这是自动化调度链路上的阻塞性 API 错误。
8. **[#108161](https://github.com/anthropics/claude-code/issues/108161)** 通过 Docs connector 创建的文档对当前会话不可访问（读被拒、Artifact 404、@Claude 评论丢失）— 6 评论，带 repro（可复现）。这说明 MCP 与集成链路存在闭环断裂问题。
9. **[#36949](https://github.com/anthropics/claude-code/issues/36949)** 为 VS Code 多根工作区增加 `claudeCode.workingDirectory` 设置 — 6 评论、**67 👍**。这是 IDE 集成类需求中支持票最高的 Issue，在搭配 #89094 后，共同指向多根工作区的会话根目录绑定缺失。
10. **[#111610](https://github.com/anthropics/claude-code/issues/111610)** 紧急：headless `-p` / Agent SDK 中，插件 MCP server 被同 URL 的 claude.ai connector 覆盖，导致所有 `mcp_tool` hook 失败（仍存在于 2.1.330）— 当日新建，带 repro。这是当日最紧急的新报告，影响 headless 与 Agent SDK 的插件钩子链路。

**补充关注**：#95941（`<ip_reminder>` 在 4 小时内被服务端注入 44+ 次）、#111336（`reasoning_extraction` 误报拦截，记录 78 个 request ID）、#93130（Ubuntu 24.04 seccomp/apparmor 沙箱初始化失败）、#109663（Max 个人账户 `/feedback` 被组织策略锁定）。这些均带 repro 或量化证据，值得跟进。

## 4. 重要 PR 进展

过去 24 小时内仅有 1 条 PR 更新：

- **[#41447](https://github.com/anthropics/claude-code/pull/41447)** `feat: open source claude code ✨`，作者 gameroman，OPEN，创建于 2026-03-31，更新于 2026-11-21。摘要显示它一次性关闭 #59、#456、#2846、#22002、#41434。该 PR 长期处于开启状态，今日无实质新进展。

> 说明：今日 PR 供给极少，无可挑选的 10 条重要 PR，故仅如实列出唯一一条。请勿据此推断开源计划状态。

## 5. 功能需求趋势

基于本期 Issue 标签与摘要，社区关注方向集中在：

- **IDE 集成 / 多根工作区**：VS Code 的工作目录配置（#36949）、session 固定到特定 root folder（#89094），支持票显著，是需求最集中的方向。
- **无障碍与国际化（a11y / i18n）**：RTL 支持（#38005）为当日评论量榜首。
- **可观测性与成本优化**：抑制系统提示中的每日日期注入，以提升 prompt-cache 命中（#87487）；`/goal` Stop hook 的可控性与状态确认（#94041）。
- **Hook / 插件渲染与扩展能力**：hook 的 `systemMessage` 渲染样式可选（#99048）；插件 MCP 与 connector 的冲突治理（#111610）。
- **终端 TUI 体验**：fullscreen 下固定 prompt、回复填满屏幕后停止跟随（#111670）。
- **平台一致性**：Windows 路径与编码（#85856）、macOS 集成回归（#111275）、Linux 沙箱（#93130）。
- **署名与合规**：git commit trailer 规范（#36105）。

## 6. 开发者关注点

- **Windows 上命令编码问题静默产生错误，影响面大**：反斜杠被减半且无报错，这类路径/转义问题在 Windows + Git Bash 环境下反复出现，开发者要求平台一致性。
- **回归与集成脆弱性**：macOS 上的 Office 加载项消失、Docs connector 文档不可达、插件 MCP 被 connector 覆盖，三者共同指向“集成链路缺乏确定性”。
- **自动化/无头场景的可靠性**：Routines API 返回 403（#102874）、hook 无限触发（#94041）、headless 下的插件 hook 全部失败（#111610），直接影响 CI 与 fleet 编排的落地。
- **误报型安全机制干扰正常开发**：`reasoning_extraction` 误拦截（#111336）、`<ip_reminder>` 高频注入（#95941），开发者需要可解释、可申诉的判定路径。
- **账户与组织策略的透明度**：`/feedback` 被组织策略锁定且无设置可改（#109663），反映权限模型与用户预期之间的落差。
- **需要可见的接口面**：工作目录配置、hook 渲染、prompt 缓存友好性，均属“给予用户显式控制权”的诉求。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报 · 2026-11-22

## 1. 今日速览

今日无新版本发布。社区讨论高度集中在 **Windows 桌面端权限/沙箱机制异常**（Computer Use 采集未释放、networkAccess=false 失效、权限选择器消失）以及 **macOS 端共享项目丢失** 两类长期未解决的问题上。PR 侧由 `copyberry[bot]` 批量提交 TUI 稳定性与渲染修复，多数当日合并关闭，显示 TUI 体验打磨正在密集推进。

## 2. 版本发布

过去 24 小时无新 Release。

## 3. 社区热点 Issues

1. **[#57101] Windows Computer Use：截图回合结束后采集权限与金色边框不关闭**（83 评论，👍14）
   评论数最高的 Issue，涉及 Computer Use 的隐私与资源占用问题。长时间未解决且讨论量巨大，是当前最尖锐的桌面端痛点。
   https://github.com/openai/codex/issues/57101

2. **[#60530] GPT-6.1 Sol 用量限制消耗明显加快**（20 评论）
   用户报告配额异常消耗，直接影响付费用户成本，涉及计费与限流机制的可信度。
   https://github.com/openai/codex/issues/60530

3. **[#6060] 支持在 config.toml 中通过 http_proxy 配置出站代理**（18 评论，👍73）
   👍 数最高的需求类 Issue，企业/学术环境刚需，已挂起超过一年仍为 OPEN。
   https://github.com/openai/codex/issues/6060

4. **[#53278] Windows 桌面端在已开启网络访问时仍应用 networkAccess=false**（18 评论）
   沙箱策略与 UI 设置不一致，会静默阻断 Agent 的网络操作。
   https://github.com/openai/codex/issues/53278

5. **[#62393] Windows Work 新会话发送按钮在输入非空时被间歇性禁用**（15 评论）
   基础交互阻塞，直接影响可用性。
   https://github.com/openai/codex/issues/62393

6. **[#32810] macOS 客户端更新后共享项目缺失**（14 评论，👍8）
   自 7 月创建至今仍未解决，数据可见性缺失引发持续关注。
   https://github.com/openai/codex/issues/32810

7. **[#47366] macOS 桌面端自有共享项目与聊天在 Projects、置顶及搜索中丢失**（14 评论）
   与 #32810 同属一类回归，用户已用旧版 Classic 确认可用，定位为回归缺陷。
   https://github.com/openai/codex/issues/47366

8. **[#58450] App 中 Agent 创建的线程默认走 workspace-write/on-request，无视 full-access 默认值**（10 评论）
   权限默认值被静默覆盖，安全边界与用户预期不符。
   https://github.com/openai/codex/issues/58450

9. **[#62975] Windows Work：发送首条消息后权限选择器消失，Work home 强制 Cloud/TPP 无 Local 选项**（8 评论，👍5）
   新近创建（11-21）但点赞增长快，反映 Work 模式的本地能力受限问题。
   https://github.com/openai/codex/issues/62975

10. **[#62732] CLI：本地文件链接在侧边栏打开而非系统默认应用，file_opener 配置无效**（5 评论，👍2）
    配置项失效属明确功能缺陷，影响 TUI/CLI 工作流。
    https://github.com/openai/codex/issues/62732

> 说明：#50309（Guardian 静默忽略 `auto_review.extra_policy`）与 #21666（TUI 覆盖 Neovim 终端光标样式）已于今日 CLOSED，不再列入待关注列表。

## 4. 重要 PR 进展

1. **[#63152] 默认 TUI 会话保留宿主终端光标形状**（已关闭）
   避免 Codex 在未请求自定义光标时覆盖宿主已设置的光标。
   https://github.com/openai/codex/pull/63152

2. **[#63151] TUI 历史插入时正确计算宽字符换行**（已关闭）
   修复双宽字符导致的行宽计算偏差与历史行计数错误。
   https://github.com/openai/codex/pull/63151

3. **[#63146] 在 docked agent 命令中心显示任务加载进度**（已关闭）
   解决初始发现阶段无反馈、切换任务时用户等待无提示的问题。
   https://github.com/openai/codex/pull/63146

4. **[#63145] 保持任务状态可见并修复命令中心分页**（已关闭）
   修复窄列表隐藏状态、按固定行数分页跳过任务的问题。
   https://github.com/openai/codex/pull/63145

5. **[#63102] resume 选择器启动时显示加载指示器**（已关闭）
   修复 `codex resume` 等待 app server 连接期间终端空白的问题。
   https://github.com/openai/codex/pull/63102

6. **[#63089] 防止启动器恢复阻塞式输入导致 TUI 启动挂起**（已关闭）
   处理共享 stdin 下 `O_NONBLOCK` 被清除后探测阻塞的场景。
   https://github.com/openai/codex/pull/63089

7. **[#63088] 修复根目录 `.codex` 为普通文件时 linked worktree 的 hook 加载**（已关闭）
   修复 `NotADirectory` 错误中断项目配置加载。
   https://github.com/openai/codex/pull/63088

8. **[#63085] TUI 转录复制模式保留围栏代码源文本**（已关闭）
   修复复制模式将后续围栏块文本错误归属到缩进代码/表格的问题。
   https://github.com/openai/codex/pull/63085

9. **[#63075] 阻止 MCP 回复 POST 误解析待处理请求**（已关闭）
   修复 Codex 与 MCP server 的 JSON-RPC ID 冲突导致的错误响应匹配。
   https://github.com/openai/codex/pull/63075

10. **[#31045] 将 MCP 认证发现延迟至启动失败时**（OPEN，2026-07-03 创建）
    避免不可用的可选 HTTP MCP server 因 OAuth 发现阻塞线程创建，针对 Windows Desktop 客户的延迟问题。
    https://github.com/openai/codex/pull/31045

## 5. 功能需求趋势

- **企业网络与代理支持**：#6060（http_proxy 配置）高赞长期未落地，企业/学术环境代理出站是明确缺口。
- **权限与沙箱一致性**：多条 Issue（#53278、#58450、#62975、#49768、#61120、#54574）指向同一主题——UI 设置、默认值与实际沙箱行为不一致，尤其 Windows/macOS 桌面端。
- **桌面端（Work/项目）能力**：SSH 项目被"不支持 cloud work"阻断（#62885）、Work home 无 Local 选项，显示 Work 模式与本地/远程环境的适配仍在完善中。
- **TUI/CLI 体验细节**：光标样式、宽字符渲染、复制模式、文件打开行为等一批低层交互问题集中被修复，说明 TUI 打磨是当前投入重点。
- **用量与计费透明度**：#60530 反映配额消耗异常，用户对限流机制的可解释性有需求。
- **跨端数据一致性**：共享项目/聊天在 macOS 客户端多版本中丢失（#32810、#47366），同步与检索可靠性受关注。

## 6. 开发者关注点

- **Windows 桌面端是当前缺陷密度最高的平台**：Computer Use 采集不释放、网络访问标志失效、发送按钮禁用、权限选择器消失、登录后挂起（#62516）等多点并发，严重影响日常可用性。
- **“设置无效”类问题反复出现**：networkAccess、full-access 默认值、file_opener、`auto_review.extra_policy` 均存在配置被静默忽略的情况，削弱用户对配置系统的信任。
- **回归缺陷长期滞留**：macOS 共享项目丢失自 7 月持续至今，社区以旧客户端对比验证，期望更高优先级。
- **基础交互阻塞优先于新功能**：发送按钮禁用、启动挂起、resume 空白等直接阻断工作流的问题，是开发者反馈中最迫切的诉求。
- **企业环境适配不足**：代理配置与 MCP 认证延迟问题显示，受限网络下的可用性仍是企业与学术用户的准入门槛。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报（2026-11-22）

## 1. 今日速览

今日发布 v0.71.0 夜间构建，代码层面无用户可见变更说明。社区讨论高度集中在 **Agent 子系统可靠性**：子代理 MAX_TURNS 被误报为成功、generalist agent 无限挂起、browser agent 配置失效等问题同时活跃。PR 侧则有一批围绕 ACP 模式、MCP 超时、OAuth 缓存与安全策略的小型修复集中更新，显示维护者正在补齐边界场景的稳定性。

## 2. 版本发布

**v0.71.0-nightly.20261122.geecccfcd5**
- 自动化夜间版本，仅包含相对前一夜间构建（20261121）的增量提交，未提供面向用户的变更说明。
- 对应版本号 bump PR：#30399（bot 自动提交）。
- https://github.com/google-gemini/gemini-cli/releases

## 3. 社区热点 Issues（10 条）

1. **#22323 子代理达到 MAX_TURNS 却报告 GOAL 成功（P1，14 条评论）**
   子代理在未做任何分析前就耗尽轮次，却返回 `status: "success"`，把中断隐藏成成功。这会直接污染上层 agent 的决策与用户对结果的信任，是目前评论数最高的 Issue。
   https://github.com/google-gemini/gemini-cli/issues/22323

2. **#21409 generalist agent 无限挂起（P1，8 👍）**
   一旦请求被转交给 generalist agent 就永久挂起，简单如创建文件夹也会卡住一小时以上。点赞数高说明影响面广，属于阻断性缺陷。
   https://github.com/google-gemini/gemini-cli/issues/21409

3. **#21968 Gemini 不主动使用 skills 与子代理**
   作者反馈模型几乎不会自发调用自定义 skill 和子代理，必须显式指令才触发。这关系到多代理架构的实际价值，是产品体验层面的关键问题。
   https://github.com/google-gemini/gemini-cli/issues/21968

4. **#22267 Browser Agent 忽略 settings.json 覆盖（如 maxTurns）**
   AgentRegistry 读取了配置，但 Browser Agent 实际不生效，导致用户无法通过配置约束浏览器代理行为。
   https://github.com/google-gemini/gemini-cli/issues/22267

5. **#21983 browser 子代理在 Wayland 下失败（P1）**
   Linux Wayland 环境下浏览器子代理直接失败，影响桌面 Linux 用户的核心浏览自动化能力。
   https://github.com/google-gemini/gemini-cli/issues/21983

6. **#30280 Node 26 下模型请求绕过 undici dispatcher，超时配置失效**
   Node 26.13.0 + CLI 0.68.0 上，CLI 设置的 undici 超时不作用于模型请求，因为 SDK 使用内置 fetch 读取全局 dispatcher。属于新版 Node 的兼容性风险。
   https://github.com/google-gemini/gemini-cli/issues/30280

7. **#22672 Agent 应阻止/抑制破坏性操作**
   在复杂 git 操作中，模型可能选用 `git reset` 或 `--force` 而非更安全的替代方案。这是安全性与可信度的长期议题。
   https://github.com/google-gemini/gemini-cli/issues/22672

8. **#22745 / #22746 AST 感知的文件读取、搜索与代码库映射调研**
   两个 EPIC 级调研议题，探索用 AST 感知工具减少轮次、提升 `codebase_investigator` 精度，推荐从 tilth 或 glyph 起步。代表工具层的重要方向。
   https://github.com/google-gemini/gemini-cli/issues/22745
   https://github.com/google-gemini/gemini-cli/issues/22746

9. **#24246 工具数超过阈值时出现 400 错误**
   启用工具过多时 CLI 返回 400，作者期望 agent 能更智能地收敛工具范围。与 #21968 共同指向工具/技能选择策略问题。
   https://github.com/google-gemini/gemini-cli/issues/24246

10. **#22598 子代理轨迹应可通过 `/chat share` 查看**
    子代理轨迹虽已由 chat recording 服务保存，但难以访问，影响调试与评估子代理行为，是提升可观测性的直接需求。
    https://github.com/google-gemini/gemini-cli/issues/22598

> 其他值得留意：#19873（零依赖 OS 沙箱 + 执行后意图路由）、#23571（模型在随机位置生成临时脚本）、#22186（get-shit-done 输出钩子导致崩溃）、#20079（符号链接形式的 agent 文件不被识别）。

## 4. 重要 PR 进展（10 条）

1. **#30281 fix(core): 在 Node 26 上遵循配置的 fetch 超时**
   升级 core Undici 至 7.30.2，使全局 dispatcher 发布在 Node 26 内置 fetch 使用的 symbol 下，并补充双 symbol 回归测试。直接对应 Issue #30280。
   https://github.com/google-gemini/gemini-cli/pull/30281

2. **#30405 fix(a2a-server): 处理 scheduler.schedule() 的 rejection**
   修复 fire-and-forget 调用产生的未处理拒绝——此前会终止整个 a2a-server 进程并影响所有任务，属于服务稳定性修复。
   https://github.com/google-gemini/gemini-cli/pull/30405

3. **#30401 fix(core): 工具刷新时保留 MCP 超时配置**
   在 `tools/list_changed` 后刷新工具列表时保留已配置的 MCP 服务器超时，避免重试路径丢失配置。
   https://github.com/google-gemini/gemini-cli/pull/30401

4. **#30400 fix(cli): ACP 模式下跳过沙箱前的 piped-stdin 读取**
   修复启用沙箱时 `gemini --acp` 不响应启动期 `initialize` 请求、导致 ACP 客户端挂起的问题。
   https://github.com/google-gemini/gemini-cli/pull/30400

5. **#30298 feat(acp): ACP 模式下并行执行独立工具调用**
   将原本串行的工具循环改为并行执行只读、相互独立的工具调用，对齐非 ACP 路径行为（Fixes #30235）。
   https://github.com/google-gemini/gemini-cli/pull/30298

6. **#30297 fix(acp): 截断 ACP 模式下的超大 shell/MCP 工具输出**
   此前工具输出不经截断直接进入模型，大输出会挤占上下文（Fixes #30233）。
   https://github.com/google-gemini/gemini-cli/pull/30297

7. **#30196 fix(core): 阻止为受污染的 shell 命令创建 always-allow 规则（CLOSED）**
   对含不可信参数或构建文件变更后执行的命令选择"始终允许"时，不再写入会话级/持久 allow 规则——一个实质性的安全修复。
   https://github.com/google-gemini/gemini-cli/pull/30196

8. **#30295 fix(core): YOLO 模式下 shell 解析失败时保留 ASK_USER 决策**
   修复 PolicyEngine 在命令解析失败时无条件返回 ALLOW 的问题，收紧 YOLO 模式的安全边界。
   https://github.com/google-gemini/gemini-cli/pull/30295

9. **#28738 fix(feat): 允许 agent 调用 agent（help wanted）**
   让子代理可委派给其他子代理或递归调用自身（Fixes #22092），是本地多代理架构能力的重要扩展，目前仍开放并标记需要帮助。
   https://github.com/google-gemini/gemini-cli/pull/28738

10. **#30404 fix(core): 仅剥离 checkpoint 名称末尾的 .json**
    修复编辑 `package.json` 等文件时 checkpoint 名称被破坏、`/restore <name>` 报"File not found"的问题。
    https://github.com/google-gemini/gemini-cli/pull/30404

> 其他：#30296（驱逐失败的 OAuth 初始化 promise，避免污染缓存）、#30301（同步 ACP 相关 CLI 文档）、#30194（`gemini models` 遗漏 `gemini-3.8-flash`，已关闭）、#30406（修正文件夹信任默认值文档）。

## 5. 功能需求趋势

- **Agent 编排与递归委托**：允许 agent 调用 agent（#28738 / #22092）、提升模型自发使用 skills 与子代理（#21968）、为仓库内置示例子代理（#18283）、Local Subagent Sprint 1（#20195）。
- **Agent 可观测性**：子代理轨迹通过 `/chat share` 分享（#22598），反映社区希望可复盘、可评估 agent 行为。
- **语义化代码理解**：AST 感知的读取、搜索、代码库映射（#22745、#22746），以减少工具调用轮次、提升调查精度。
- **沙箱化与执行模型**：零依赖 OS 沙箱与执行后意图路由（#19873），利用 Gemini 3 模型的原生 bash 倾向。
- **安全策略收紧**：破坏性命令抑制（#22672）、受污染命令的 allow 规则限制（#30196）、YOLO 模式决策修正（#30295）。
- **编辑器/协议集成**：ACP 模式相关修复与文档同步（#30400、#30297、#30298、#30301）。
- **浏览器代理健壮性**：会话接管与锁恢复（#22232）、Wayland 兼容（#21983）、配置覆盖生效（#22267）。

## 6. 开发者关注点

- **静默失败与状态误报**：MAX_TURNS 被上报为 GOAL 成功（#22323）、generalist agent 静默挂起（#21409）、输出钩子导致崩溃（#22186）——开发者最不满的是"看起来成功实际失败"。
- **配置不生效**：Browser Agent 忽略 `settings.json`（#22267）、符号链接 agent 文件不被识别（#20079）、MCP 超时在刷新时丢失（#30401），配置可信度不足。
- **环境兼容性**：Node 26 fetch/dispatcher 行为变化（#30280 / #30281）、Wayland 下的浏览器子代理（#21983）、沙箱 + ACP 组合下的启动挂起（#30400）。
- **安全默认值**：`git reset`/`--force` 的使用、受污染命令的持久 allow 规则、YOLO 模式下解析失败仍放行——开发者希望默认更保守。
- **工具规模与上下文管理**：工具数超限触发 400（#24246）、ACP 下大输出未截断（#30297），指向工具筛选与上下文预算控制。
- **工作区整洁**：模型在随机目录生成临时编辑脚本（#23571），影响提交前清理，属于日常工作流痛点。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报（2026-11-22）

## 1. 今日速览

今日 v1.0.115-7 与 v1.0.115-6 两个补丁版本集中修复了会话恢复、启动残留进程、插件安装重试及 `/delegate` 未登录提示等问题。Issue 侧最值得关注的是**云沙箱与移动端会话连接稳定性**（#5553、#5552）及**自定义 agent / 子 agent 能力缺口**（#5550、#5543、#5549）的集中暴露。另有安装脚本 `VERSION=prerelease` 选错版本（#5547）、企业网络下 TLS 握手失败（#5546）等影响上手的问题待处理。

## 2. 版本发布

- **v1.0.115-7**
  - `--ui-server` 客户端可在服务端开始监听后立即接入被恢复的 CLI 会话。
  - 修复：启动阶段停止 npm 安装的 CLI 时，不再残留后台进程。
  - https://github.com/github/copilot-cli/releases
- **v1.0.115-6**
  - 组织强制插件在临时策略变更中断安装后，可在下次尝试时安装成功，无需等待常规重试延迟。
  - `/delegate` 在未登录时改为明确提示需要登录，而非静默无响应。
  - Unix 下取消 shell 命令（摘要截断，细节以 release notes 为准）。
  - https://github.com/github/copilot-cli/releases

## 3. 社区热点 Issues（10 条）

1. **#5553 [OPEN] GitHub Mobile（Android）云端会话在切后台或空闲 2–3 分钟后断开，重试常需重启 App**
   直接影响移动端使用云沙箱的可用性，属高影响体验问题，今日新报、暂无评论。
   https://github.com/github/copilot-cli/issues/5553

2. **#5552 [OPEN] 云沙箱会话在一次工具调用后永久无法重连，仅剩只读历史**
   与 #5553 同源指向云会话连接层，若确认则可能影响任务可恢复性，优先级应高。
   https://github.com/github/copilot-cli/issues/5552

3. **#5543 [OPEN] 子 agent 再启动的子 agent 无法多轮：`background` 模式被静默忽略，`write_agent` 拒绝**
   暴露出 changelog 宣称能力与实际行为不一致，涉及多 agent 编排的核心语义。
   https://github.com/github/copilot-cli/issues/5543

4. **#5550 [OPEN] `gh` 在 `PATH` 中时，自定义 agent 无法使用内置 GitHub MCP 只读工具**
   由外部项目（hve-core #3458）交叉报告，影响自定义 agent 读取 issue 等基础能力。
   https://github.com/github/copilot-cli/issues/5550

5. **#5549 [OPEN] 建议新增 `resume_session` / `suspend_session` 工具及 Sessions 侧栏挂起操作**
   现有会话工具只能创建/列出/发消息/重命名/关闭，缺少「恢复已持久化会话」与「挂起在线会话」，属合理的能力补全需求（👍1）。
   https://github.com/github/copilot-cli/issues/5549

6. **#5547 [OPEN] `install.sh` 中 `VERSION=prerelease` 会安装比最新稳定版更旧的构建**
   根因是 `git ls-remote --tags --sort version:refname` 把正式版排在自身预发布版之前，影响所有预发布渠道用户。
   https://github.com/github/copilot-cli/issues/5547

7. **#5546 [OPEN] 受管企业网络下连接 `api.individual.githubcopilot.com` 出现 TLS `handshake_failure`（os error -2146893018）**
   已在 triage 中标注需人工介入，属企业环境可用性阻塞类问题。
   https://github.com/github/copilot-cli/issues/5546

8. **#5544 [OPEN] CLI 1.0.114 上 `web_fetch` 仍拒绝被 Surge Fake-IP 解析的公网 URL**
   为已关闭 #5180 的复现跟进，说明此前修复未覆盖 macOS + Surge 增强模式场景。
   https://github.com/github/copilot-cli/issues/5544

9. **#2622 [OPEN] 手动 `/rename` 的会话名会被后续自动命名覆盖**
   长期未决（4 月创建，👍1，标记 more-info-needed），属会话管理一致性问题。
   https://github.com/github/copilot-cli/issues/2622

10. **#1851 [CLOSED] 建议 `/model` 同时展示上下文窗口大小（tokens）**
    社区 👍5 为本批最高，反映模型选型时缺乏 token 预算可见性；已关闭。
    https://github.com/github/copilot-cli/issues/1851

> 其余已关闭项可关注：#4035（voice 安装器误连私有 Azure Artifacts 导致 401）、#5309（内容过滤后误报 `model_not_supported`）、#3601（bash 工具因 `LC_CTYPE=C` 丢弃非 ASCII 字符）、#4581 / #5551（图像生成能力缺口）。

## 4. 重要 PR 进展

过去 24 小时内仅 **1 条** PR 更新，无法凑足 10 条，以下据实列出：

1. **#5310 [CLOSED] Fix container smoke-test workspace permissions**（作者 devm33）
   修复 amd64/arm64 冒烟测试失败：临时工作区以 `0700` 创建，导致镜像运行时用户无法访问；该 PR 针对 workflow run 41153798295 的失败。
   https://github.com/github/copilot-cli/pull/5310

## 5. 功能需求趋势

- **会话生命周期管理**：恢复/挂起会话（#5549）、手动命名持久化（#2622）、`--ui-server` 接入恢复会话（v1.0.115-7）——社区希望会话可被可靠地中断与续接。
- **多 agent 编排**：子 agent 多轮与后台模式（#5543）、自定义 agent 的工具可见性（#5550），指向 agent 间协作语义需要明确与补齐。
- **网络与代理兼容性**：Fake-IP DNS（#5544）、企业 TLS 拦截（#5546），反映受限网络环境的适配仍是高频痛点。
- **模型信息透明**：`/model` 展示上下文窗口（#1851）、内容过滤后的错误语义（#5309）。
- **多模态产出**：图像生成在 ACP 会话（#5551）与开发资产场景（#4581）的缺失。
- **安装与分发可靠性**：预发布版本选择（#5547）、语音运行时依赖源（#4035）、平台包缺失 README（#4595）。

## 6. 开发者关注点

- **云/远程会话的连接韧性**：断线后不可恢复、只能读历史，是当前最影响信任度的问题（#5552、#5553）。
- **静默失败与误导性错误**：`background` 模式被忽略（#5543）、`model_not_supported` 误报（#5309）、`/delegate` 未登录无响应（已由 v1.0.115-6 修复）——开发者希望失败要「说清楚」。
- **能力声明与实际行为不一致**：changelog 宣称的多轮子 agent 与实测不符（#5543），削弱对发布说明的信任。
- **企业/受限网络可用性**：TLS 拦截与 Fake-IP 场景反复出现，安装脚本与运行时下载对私有源、代理环境敏感（#5546、#5544、#4035）。
- **国际化与终端体验**：bash 工具丢弃非 ASCII 字符（#3601）、终端快捷键冲突（#5043），影响非英语开发者日常使用。
- **安装路径正确性**：`VERSION=prerelease` 装到更旧版本（#5547）属低成本高收益修复，建议优先处理。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报（2026-11-22）

## 1. 今日速览

今日无新版本发布，但 Issue 与 PR 的流转非常活跃：v2 系列（2.2.x）的稳定性问题最为集中，涉及计划模式失效、会话自动恢复、内存占用过高以及会话压缩时的 prompt-cache 缺失。与此同时，“自定义 Provider 选项消失”成为当天呼声最高的回归问题，社区连续提交两条 Issue 并与多条 PR 形成呼应。Rust CLI（cli-rs）方向出现一组成体系的性能与类型化重构 PR，值得关注。

## 2. 版本发布

过去 24 小时无新 Release。

## 3. 社区热点 Issues（10 条）

1. **[#60250 [CLOSED] Plan 模式在 v2.2.1 失效：agent 直接实现而非规划](https://github.com/anomalyco/opencode/issues/60250)** — 本日评论最多的 Issue（15 条），有 2 个 👍。用户期望 Plan agent 只给出分析，它却直接提议修改代码，这动摇了 v2 “先规划后执行”的核心假设，对依赖 Plan 模式的工作流影响很大。

2. **[#32706 [CLOSED] 1.17.0 及以上 TUI 启动即崩溃（Effect.tryPromise 错误）](https://github.com/anomalyco/opencode/issues/32706)** — 14 条评论，有 3 个 👍。这是从旧版本延续至今的高频崩溃，能说明 TUI 的兜底能效问题，受 Windows 用户关注度高。

3. **[#59603 [OPEN] 自定义 Provider 选项去哪了？](https://github.com/anomalyco/opencode/issues/59603)** — 11 条评论，有 3 个 👍。v2.2.0 中 Provider 列表不再提供 custom provider，而是直接阻断了接入自建模型端点或区域服务商的主要方式。

4. **[#50979 [OPEN][reproduced] 会话移入空 git 仓库会使全局 project 的 worktree 被重指向](https://github.com/anomalyco/opencode/issues/50979)** — 9 条评论，已复现。这暴露了项目身份仍依赖 git 探测的设计缺陷，会影响多项目之间的隔离。

5. **[#60976 [OPEN][FEATURE] 在 Web 应用中加载 ./gui-experimental 插件](https://github.com/anomalyco/opencode/issues/60976)** — 9 条评论，有 14 个 👍，是本日点赞最高的需求。GUI 插件目前只在窗口环境中加载，社区希望 Web 端也具备同等扩展能力。

6. **[#65368 [CLOSED] 闲置 40 小时的会话自行恢复并执行 139 轮](https://github.com/anomalyco/opencode/issues/65368)** — 7 条评论，标签为 core、version/v2、platform/macos。没有任何用户消息就自动执行大量回合，涉及成本与安全边界，是本日最需要警惕的行为异常。

7. **[#62041 [OPEN] Desktop GUI 无法打开新文件夹作为项目，始终回退到 home 目录](https://github.com/anomalyco/opencode/issues/62041)** — 6 条评论，v2.2.5，清缓存和重装均无效，CLI 正常。这是桌面端的主要流程阻塞问题。

8. **[#65549 [CLOSED] 会话压缩时 prompt-cache 从 token 0 开始失效：约 50k token 需约 456 秒重新预填充](https://github.com/anomalyco/opencode/issues/65549)** — 5 条评论，当日新建并关闭。压缩请求的系统提示词与缓存前缀不一致，导致在本地后端上整段对话被重新预填，对本地部署与长会话性能影响显著。

9. **[#65496 [CLOSED] 内存占用过高](https://github.com/anomalyco/opencode/issues/65496)** — 5 条评论，v2.2.5。用户质疑“只是对接 API 的薄封装为何吃掉大量 RAM”，与 TUI 崩溃、自动恢复一起构成 v2 性能口碑问题。

10. **[#65578 [OPEN][FEATURE] 请把 V2 桌面版的自定义 Provider 选项带回来](https://github.com/anomalyco/opencode/issues/65578)** — 当日新建，3 条评论。与 #59603 同源，说明这不是个别用户的反馈，而是明确的版本回归，社区诉求正在快速聚集。

其余值得留意的：**[#54620](https://github.com/anomalyco/opencode/issues/54620)** 标准 readline 的 CTRL-B 绑定被覆盖（已复现）；**[#61549](https://github.com/anomalyco/opencode/issues/61549)** iOS 推送内容泛化、安全配对始终无法完成；**[#65567](https://github.com/anomalyco/opencode/issues/65567)** Windows 盘根目录下文件无法编辑。

## 4. 重要 PR 进展（10 条）

1. **[#65579 [CLOSED] feat(core)：从 models.dev 读取 ChatGPT 套餐的模型列表](https://github.com/anomalyco/opencode/pull/65579)** — 让 Codex 与 “Sign in with ChatGPT” 两种登录方式的可用模型清单由 models.dev 驱动，减少手工维护。

2. **[#65564 [OPEN] feat(cli)：在 ACP 错误中暴露 provider 状态与重试延迟](https://github.com/anomalyco/opencode/pull/65564)** — 关闭 #65520。ACP 终端错误此前丢弃了 `status` 与 `retryAfterMs`，导致上层无法做限流退避。

3. **[#65588 [CLOSED][needs:compliance] feat(undo)：实现 findUndoMessage 及相关测试](https://github.com/anomalyco/opencode/pull/65588)** — 关闭 #39736。/undo 原先定位“最后一条含文本的用户消息”，此次改为精确定位撤销目标。

4. **[#65562 [CLOSED] fix(core)：当 watch 更新不再唤醒 agent 时通知它](https://github.com/anomalyco/opencode/pull/65562)** — 与会话因等待 CI 观察而闲置两天的问题相关，补上“唤醒失效”的显式告知。

5. **[#65591 [OPEN] fix(mini)：父任务忙时在页脚显示子任务阶段与模型（#65343）](https://github.com/anomalyco/opencode/pull/65591)** — 部分修复子 Task 执行期间状态卡在 “esc stop” 的问题，改善多级 agent 的可观测性。

6. **[#65589 [OPEN] fix：独立就绪错误中呈现 sqlite 启动上下文](https://github.com/anomalyco/opencode/pull/65589)** — 关闭 #65547。SQLite 启动失败此前只留下无上下文的默认错误信息。

7. **[#60683 [OPEN][contributor] fix(desktop)：保留 CLI service 通道](https://github.com/anomalyco/opencode/pull/60683)** — 关闭 #60676。使桌面端服务发现与内置 CLI 的构建通道（latest 使用 `service.json` 等）保持一致。

8. **[#65545 [OPEN][contributor] fix(nix)：启动携带 app fuse 的 electron-builder 二进制](https://github.com/anomalyco/opencode/pull/65545)** — #63002 引入 `enableCookieEncryption` fuse 后的 Nix 跟进修复：Nix Linux 包此前从未运行被翻转 fuse 的那个二进制。

9. **[#65581 [CLOSED] fix(data)：柱状图默认回到日视图](https://github.com/anomalyco/opencode/pull/65581)** — 撤销 #65307 把 /data 全部柱状图默认改为周视图的行为，周视图保留为一次点击可切换。

10. **[#65525 [OPEN] fix(app)：在收件箱侧栏列出草稿](https://github.com/anomalyco/opencode/pull/65525)** — Inbox 侧栏此前只列会话不列标签页，导致草稿不可见。同日还有 **[#65582](https://github.com/anomalyco/opencode/pull/65582)** 修正乌克兰语翻译，[#65595](#) 等 cli-rs 系列将工具与事件从字符串匹配改为类型匹配。

## 5. 功能需求趋势

- **自定义 Provider 回归**：社区诉求最集中的方向，涉及连接自建端点、非主流模型服务商与 V1 迁移用户。
- **插件与扩展能力**：GUI 插件扩展到 Web 端（#60976，14 👍）、移动端成为一等交互面（#59069）、Face ID 签名的权限审批（#64675）。
- **性能与资源**：内存占用、会话压缩的缓存效率、TUI 每帧、每键重建（见 cli-rs 系列 PR），以及 Rust CLI 的类型化状态管理。
- **多端一致性**：Desktop、Web、iOS 在 Provider、通知、权限提示上的行为偏差反复被提出。
- **项目与工作区模型**：项目身份应以目录路径为准而非 git 探测（#47885），会话移动与空仓库场景需正确处理。

## 6. 开发者关注点

- **v2 行为回归是核心痛点**：Plan 模式不再只规划不实现、自定义 Provider 入口消失、更新检查静默无响应（#62238），这类“V1 有、V2 没有或行为变了”的问题最伤迁移意愿。
- **失控执行与成本**：会话自行恢复并跑 139 轮、watch 失效导致 agent 空等，开发者需要明确的执行边界与中止信号。
- **可观测性不足**：错误信息丢失上下文（SQLite 启动、ACP 的 `status`、`retryAfterMs`），子任务状态不显示，排障成本高。
- **跨平台细节**：Windows 盘根目录编辑失败、macOS 桌面端文件夹选择回退到 home 目录、标准终端快捷键 CTRL-B 被覆盖，都有明确复现路径。
- **性能预期落差**：开发者普遍把 CLI 视为“薄封装”，对高内存与长压缩耗时容忍度低，本地后端场景尤甚。

---
*数据来源：github.com/anomalyco/opencode，统计窗口为 2026-11-22 过去 24 小时内的 Issue/PR 更新。*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报 · 2026-11-22

## 1. 今日速览

今天没有新版本发布，活动集中在 Issue 分区：过去 24 小时共有 28 条 Issue 更新，围绕 OpenAI/Bedrock 的推理内容处理、会话切换竞态和 Windows 终端兼容性形成了密集的修复与关闭记录。模型提供方兼容性问题（GPT-6.1 Sol 上下文窗口、Grok 4.7 reasoningContent、gemini-4-neon 中断流）是今日最明确的用户痛点。

## 2. 版本发布

过去 24 小时无新 Release。

## 3. 社区热点 Issues（10 条）

1. **#8643 [OPEN] Bedrock: OpenAI 模型拒绝嵌套在 toolResult.content 中的图片** — 17 条评论、10 个 👍，是今日讨论最活跃的 Issue。建议在 Bedrock 上将工具结果中的图片提升为同级 user 内容块，作者称修复与回归测试已在其 fork 上就绪。属于明确的跨提供方行为不一致问题。
   https://github.com/earendil-works/pi/issues/8643

2. **#11021 [OPEN] ChatGPT 登录仍对 GPT-6.1 Sol 使用 272K，而账户目录为 500K** — 16 条评论、8 个 👍，持续一月未解决（创建于 2026-10-16）。Pi 1.3.0 报告的上下文窗口小于账户实际目录，直接影响可用上下文，关注度高。
   https://github.com/earendil-works/pi/issues/11021

3. **#12367 [OPEN] [prio:p0] OpenAI 丢弃 reasoning items（prefix_mismatch）** — 1.6.0 升级后间歇性出现，TUI 提示"OpenAI dropped 4 reasoning items"。P0 级别，涉及会话中推理链断裂，值得优先关注。
   https://github.com/earendil-works/pi/issues/12367

4. **#5294 [CLOSED] [bug] 请求超时** — 使用 llama.cpp 后端且已设置 `http timeout = false` 仍收到超时，10 条评论，说明本地后端超时配置存在语义问题；今日已关闭。
   https://github.com/earendil-works/pi/issues/5294

5. **#11136 [CLOSED] [no-action] 终端缩放破坏 TUI 渲染/布局** — 在 Alacritty（无 tmux）下缩放窗口会导致文本截断或无法填满屏幕。TUI 基础体验问题，虽标记 no-action 仍获 5 条讨论。
   https://github.com/earendil-works/pi/issues/11136

6. **#8706 [CLOSED] zai thinking handler 对强制思考模型发送 disabled（glm-5.3/5.3-flash），推理泄漏到输出** — 关闭一条影响 Z.AI 模型的推理泄漏缺陷，对中文社区使用 GLM 的用户有价值。
   https://github.com/earendil-works/pi/issues/8706

7. **#12243 [OPEN] 在 switchSession 期间接受的 prompt 在已销毁会话上运行** — 竞态窗口位于等待 `session_shutdown` 处理器期间，可能导致请求发往已销毁的会话。已有对应修复 PR（见下文），是典型的会话生命周期正确性问题。
   https://github.com/earendil-works/pi/issues/12243

8. **#12397 [CLOSED] [bug] "Could not validate your refresh token" / OpenAI** — 登录成功但 `pi auth check` 通过后仍报 `OAuth refresh failed for openai-codex`，阻塞实际使用。
   https://github.com/earendil-works/pi/issues/12397

9. **#12408 [CLOSED] Windows: 非 Program Files 下的 Git for Windows 永远无法被发现** — `getShellConfig()` 只探测 `%ProgramFiles%` 与 `%ProgramFiles(x86)%`，随后回落到 System32 的 WSL 启动器，导致 bash 工具行为异常。Windows 路径兼容性典型问题。
   https://github.com/earendil-works/pi/issues/12408

10. **#12394 [CLOSED] Codemode: 无需重写完整源码即可 patch 并重跑失败的 JS** — 修正一个字符级语法错误也要重发整段内联脚本，作者提出更轻量的 patch + 重跑流程，反映 codemode 的迭代效率诉求。
    https://github.com/earendil-works/pi/issues/12394

其余今日更新还包括 #11167（Windows 下 Ctrl+G 静默退出，退出码 129）、#12382（`isContextOverflow` 将 429/5xx/quota 误判为溢出）、#12398/#12399（工具注册与同名工具执行错配）、#12393（Grok 4.7 拒绝重放 reasoningContent）、#12402（解析 DeepSeek DSML 文本工具调用）、#12406（Tabby/WSL 下右键粘贴双份）、#12407（gemini-4-neon 中途停止）等，多数已在今日关闭。

## 4. 重要 PR 进展

过去 24 小时仅 3 条 PR 更新，且全部为 CLOSED：

1. **#12400 [CLOSED] fix(coding-agent): 在会话被替换时拒绝输入（#12243）** — 修复 `switchSession` / `newSession` / `fork` 等待 `session_shutdown` 期间到达的 prompt 被接受、并在已销毁会话上执行的问题。对应今日最重要的竞态 Issue。
   https://github.com/earendil-works/pi/pull/12400

2. **#12404 [CLOSED] fix(p2): 允许通过触摸完成 @ 文件补全** — 移动端此前必须"接受输入"才能选中建议，改动允许直接点选条目；作者在 Android 上的 Firefox 160.0.1 与 Chrome 155.0.8059.87 测试，桌面 Firefox 亦测。对应 Issue #12405。
   https://github.com/earendil-works/pi/pull/12404

3. **#12390 [CLOSED] Fork/tooling** — 无描述内容，无法从所给材料判断具体内容，建议直接查看 PR 页面。
   https://github.com/earendil-works/pi/pull/12390

## 5. 功能需求趋势

- **模型提供方兼容与适配**：Bedrock（OpenAI、Grok 4.7）、OpenAI 直连、Z.AI/GLM、DeepSeek、Gemini 均有问题上报，社区最强烈的需求是"同一语义在各提供方上行为一致"。
- **推理/思考内容的正确传递**：reasoning items 丢弃、reasoningContent 重放被拒、forced-thinking 模型推理泄漏，构成一组彼此关联的诉求。
- **上下文窗口与错误分类准确性**：272K vs 500K 的上下文报告差异、429/5xx 被误判为 context overflow，都指向元数据与错误判定需要更精确。
- **终端/TUI 与多平台输入体验**：终端缩放布局、Windows 下 Ctrl+G 与外置编辑器、触摸输入的 @ 补全、右键粘贴重复、Slash 命令建议残留。
- **codemode 交互效率**：patch 并重跑失败脚本（#12394），以及 codemode 把仍在运行的调用标记为 cancelled（#12382）。
- **工具系统一致性**：同名工具"展示一个、执行另一个"（#12398）、注册工具时恢复被 `--tools` 禁用的工具（#12399）。

## 6. 开发者关注点

- **会话生命周期竞态**：会话切换/新建/fork 期间接受输入会造成跨会话污染，属于影响正确性的高危问题，社区已自发提交修复。
- **OAuth 与鉴权稳定性**：OpenAI/ChatGPT 与 Codex 的 token 刷新失败会直接阻断使用，即使 `pi auth check` 显示 ready。
- **本地后端与超时语义**：`http timeout` 设置对 llama.cpp 等后端是否真正生效，配置项含义需要明确。
- **Windows 环境适配**：Git 安装路径探测、外置编辑器退出码、剪贴板行为，是 Windows 用户反馈最集中的三类问题。
- **Issue 处理节奏**：今日更新的 28 条中大量为 CLOSED 或标记 untriaged/no-action，说明分流活跃，但部分高频高赞 Issue（#8643、#11021）仍处 OPEN，值得优先推进。

> 说明：本报告仅基于所提供的 GitHub 数据生成；PR 部分过去 24 小时实际可用条目仅 3 条，未凑满 10 条以避免虚构内容。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报 · 2026-11-22

## 1. 今日速览

今日发布了 v0.28.4 正式版与对应桌面版，同时 Web Shell 继续快速迭代（产物库、ChatSurface、过载提示）。社区侧 CI 失败类 Issue 占据热点榜绝大多数，长期未收敛的主干流水线问题已成为社区最大噪声源。功能层面，Managed Agent、会话/工作区恢复和 Web Shell 体验是 PR 的主要发力点。

## 2. 版本发布

- **v0.28.4**（正式版）：发布说明正文未提供具体变更细节，仅有发布标记。
  https://github.com/QwenLM/qwen-code
- **desktop-v0.28.4**（桌面版）：随正式版同步发布。
  https://github.com/QwenLM/qwen-code
- **v0.28.3-nightly.20261121.56ef346859**（夜间版）：包含 `fix(ci)` 人工复审改用实时 review bot（#17848）及 Managed Agent 所需校验稳定化等变更，详情被截断。
  https://github.com/QwenLM/qwen-code/pull/17848

## 3. 社区热点 Issues

1. **#14724 主干 CI 失败：Managed Agent 门禁无法识别测试**（538 条评论，自 2026-10-19 持续至今）。评论量最高，说明长期存在的主干 CI 问题仍在反复触发，是社区注意力最大占用者。
   https://github.com/QwenLM/qwen-code/issues/14724
2. **#11680 主干 E2E 测试失败（无测试被识别）**（106 条评论，自 2026-09-11 起）。跨月未收敛，影响主干可信度。
   https://github.com/QwenLM/qwen-code/issues/11680
3. **#11678 主干 Qwen Code CI 失败**（68 条评论，标记 `autofix/in-progress`）。自动修复已介入但仍在更新，值得关注其收敛进度。
   https://github.com/QwenLM/qwen-code/issues/11678
4. **#13078 每日依赖 CVE 审计失败**（62 条评论，已关闭）。涉及供应链安全，关闭状态是积极信号。
   https://github.com/QwenLM/qwen-code/issues/13078
5. **#17934 E2E：daemon 被 SIGKILL 后会话恢复失败**（40 条评论）。直接关联 `qwen serve` 的崩溃恢复能力，影响服务端可靠性。
   https://github.com/QwenLM/qwen-code/issues/17934
6. **#14104 SDK Java 托管 Shell 生命周期恢复测试失败**（21 条评论，`ready-for-agent`）。反映 Java SDK 侧资源回收正确性问题。
   https://github.com/QwenLM/qwen-code/issues/14104
7. **#16091 bun-pty 在 5000 行洪峰下字节精确性测试失败**（19 条评论）。涉及终端渲染正确性，影响 TUI 稳定性。
   https://github.com/QwenLM/qwen-code/issues/16091
8. **#17085 ECS runner 集群版本陈旧（qwen 更新失败）**（3 条评论）。基础设施问题，可能导致 CI 结果与最新版本不一致。
   https://github.com/QwenLM/qwen-code/issues/17085
9. **#13384 vitest-worker onTaskUpdate RPC 超时导致测试通道失败**（`need-discussion`）。属于负载下的非确定性失败，需要设计层面的讨论。
   https://github.com/QwenLM/qwen-code/issues/13384
10. **#18043 core：保护 web_fetch 二进制溢出不被微压缩清除**（`ready-for-agent`）。涉及 token 管理与上下文压缩的正确性，是实际使用中的数据丢失风险。
    https://github.com/QwenLM/qwen-code/issues/18043

> 补充：今日新增多个 `deflake` 类 Issue（#18119 TUI 智能体循环对齐、#18113 qwen serve 启动窗口同源异常），均由 CI Failure Patrol 自动生成，反映测试稳定性是持续主题。

## 4. 重要 PR 进展

1. **#18054 Web Shell：过载时暂停任务创建并在侧栏显示告警条**。把 daemon 的负载准入状态直接呈现到操作点，改善高负载下的用户预期。
   https://github.com/QwenLM/qwen-code/pull/18054
2. **#18129 Managed Agent v1：对齐运行时存储、审批与 Web Shell 技能准备**。批量整合同一批修复，推进 managed-agent v1 成熟度。
   https://github.com/QwenLM/qwen-code/pull/18129
3. **#18058 Managed Agent：以有界 VARCHAR 替换身份哈希列**。数据库结构层面的可读性与规范化改造，影响租户/会话标识存储。
   https://github.com/QwenLM/qwen-code/pull/18058
4. **#18009 CLI：跨工作区保留并恢复 worktree 快照**（P6 U4/U5）。基于计数的保留策略与所有者范围重建，是会话管理路线图的重要一步。
   https://github.com/QwenLM/qwen-code/pull/18009
5. **#16681 Web Shell：提交视图支持仅提交选中文件**。让提交操作可按文件粒度选择，是日常开发高频需求。
   https://github.com/QwenLM/qwen-code/pull/16681
6. **#16344 core：对 GPT-5 / o 系列在 Chat Completions 上改用 max_completion_tokens**。修正新代模型的输出预算参数，影响多模型兼容性。
   https://github.com/QwenLM/qwen-code/pull/16344
7. **#18095 core：为 Kimi K3 路由推断推理默认值**（已关闭）。在自定义 OpenAI 兼容网关上支持 low/high/max 推理档位，体现新模型接入的持续跟进。
   https://github.com/QwenLM/qwen-code/pull/18095
8. **#17995 SDK：处理异步 stdin 失败**。在输入管道失败后停止写入，区分真实传输错误与子进程正常退出。
   https://github.com/QwenLM/qwen-code/pull/17995
9. **#16578 serve：对重复 WebSocket 升级拒绝日志限流**。每分钟每客户端地址最多记录一次，降低日志噪声。
   https://github.com/QwenLM/qwen-code/pull/16578
10. **#18134 Web Shell：Change Overview 的 PR 按最新绑定排序**。修正会话中变更概览展示旧绑定优先的问题。
    https://github.com/QwenLM/qwen-code/pull/18134

## 5. 功能需求趋势

- **Web Shell 体验深化**：产物库渐进扫描、ChatSurface 共享、提交粒度选择、过载提示——Web Shell 正从基础聊天走向完整工作台。
- **会话与工作区管理**：worktree 快照保留/恢复、延迟 transcript 分页（#18097）、侧栏悬停状态设计（#18088），指向会话持久化与恢复能力。
- **Managed Agent 平台化**：身份存储规范化、审批记录对齐、端到端循环验证，显示托管智能体正在向生产级服务演进。
- **多模型与推理参数适配**：GPT-5/o 系列参数修正、Kimi K3 推理档位，反映对异构模型后端的持续适配投入。
- **测试稳定性工程**：大量 `deflake` 类 Issue/PR 与 CI Failure Patrol 自动化，说明工程侧把测试确定性和 CI 可靠性作为独立方向推进。

## 6. 开发者关注点

- **CI 可靠性是最大痛点**：热点 Issue 前五中有四条为主干 CI 失败，最早的已持续两个月以上，且高频重复评论（#14724 达 538 条）。主干红灯长期存在会侵蚀自动修复与人工复审的信任基础。
- **非确定性测试耗费精力**：vitest-worker RPC 超时（#13384）、bun-pty 洪峰测试（#16091）、多条 `deflake` 工单均属负载相关的偶发失败，开发者需要区分“真随机”与“真 bug”。
- **服务端崩溃恢复能力**：daemon 被 SIGKILL 后的会话恢复（#17934、#18055）反复成为 E2E 失败点，是 `qwen serve` 生产可用的关键短板。
- **基础设施版本漂移**：ECS runner 上 `qwen` 更新失败（#17085）可能导致 CI 环境与发布版本不一致，属于易被忽视的隐性风险。
- **上下文管理的正确性细节**：如 web_fetch 二进制溢出被微压缩清除（#18043），这类边界问题直接影响长会话下的数据完整性。

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI 社区动态日报（2026-11-22）

## 1. 今日速览

Codewhale v0.10.3 正式发布，带来统一的插件界面（Creator 模式与 DeepSeek Harness 插件兼容）以及升级版 Auto-Review 守护机制。当日社区最活跃的议题集中在 v0.10.3 的 Windows 平台 `/undo` 严重缺陷（#6970，9 条评论）和 ChatGPT 认证校验失败（#7203，release-blocker），两者均为待发布阻塞项。PR 侧主要是 TUI 流式渲染与卡片排序的细节修复，另有一批 v0.10.3 相关 Issue 集中关闭。

## 2. 版本发布

**v0.10.3（Codewhale v0.10.3）**
- 统一的 Plugins 界面：新增 Creator 模式（`[features] plugin_creator`）
- 支持未修改的 DeepSeek Harness（`@deepseek-ai/dsh-*`）插件兼容
- 升级 Auto-Review 守护：引入工作区边界、软规则、子代理返回审查
- 发布记录 PR #7456 已同步，合并后 `check:latest-release` 在 main 上转绿：codewhale-hq/Codewhale PR #7456

## 3. 社区热点 Issues（10 个）

1. **#6970 [OPEN] Windows 下 `/undo` 严重缺陷**（9 评论，今日最多）
   v0.10.3 验收进行中：源码与 macOS 路径已修复，最终 Windows 验收仍开放。属于发布验收关键项。
   codewhale-hq/Codewhale Issue #6970

2. **#7203 [OPEN] `codewhale auth chatgpt` 浏览器登录成功后令牌校验失败**
   Windows 上 `ChatGPT token signature or identity claims failed verification`，标记 release-blocker。直接影响 OpenAI 系 Provider 可用性。
   codewhale-hq/Codewhale Issue #7203

3. **#5093 [OPEN] 将 Responses 方言策略抽离为语言无关的一致性测试框架**
   作者 Hmbown，标记 help wanted / agent-ready，自 v0.9.3 起挂起，0.10.1 复评仍为未开始。属跨版本长期可靠性基建。
   codewhale-hq/Codewhale Issue #5093

4. **#7179 [CLOSED] 自定义 openai-compatible Provider 输出预算被托管目录上限钳制**
   服务器接受 262K，客户端却按 32K（qwen3.8-27b）截断，导致推理模型返回空的终止停止。影响自建/第三方端点用户。
   codewhale-hq/Codewhale Issue #7179

5. **#7252 [CLOSED] Anthropic Provider 在 tool_search 注入 `web.run` 后返回 400**
   工具名含点号触发 `tools.N.custom.name` 校验失败，涉及 MCP 工具命名规范。
   codewhale-hq/Codewhale Issue #7252

6. **#7233 [CLOSED] 畸形 HTTP(S)_PROXY 可导致代理凭据写入日志**
   `redact_proxy_userinfo` 在缺少 `://` 时原样返回输入，存在凭据泄露风险，安全相关，值得关注修复版本。
   codewhale-hq/Codewhale Issue #7233

7. **#7357 [CLOSED] 新一轮开始时请求 save-snapshot 会导致 TUI 整轮冻结**
   按键无响应、无法渲染，只能关闭终端。典型 TUI 状态与快照时序缺陷。
   codewhale-hq/Codewhale Issue #7357

8. **#7178 [CLOSED] 一次发送产生两次引擎轮次、两条不同回复**
   同一条用户消息被以裸文本和带 `<turn_meta>` 两种形态各持久化一次，导致每次保存重新分叉。数据一致性问题。
   codewhale-hq/Codewhale Issue #7178

9. **#7172 [CLOSED] 每次目标续跑重复发送完整 GoalSnapshot**
   长 operate 模式下持续注入整份快照 JSON，并需向模型提供诚实的上下文占用数字。属上下文效率问题。
   codewhale-hq/Codewhale Issue #7172

10. **#7292 [CLOSED] 允许 `[[custom_models]]` 用人民币声明价格**
    当前 `cost` 恒按 USD 解释，直接填人民币会失真。中文社区（lang:zh）提出的本地化计费需求。
    codewhale-hq/Codewhale Issue #7292

其他值得留意：#7070（write 忽略 LF 请求静默恢复 CRLF）、#7274（engine/tools/util/repl 中的 panic、glob 挂起与错误文本）、#7348（256 条 usage 记录后下一轮在派发前失败）、#7216（`/patch-undo` 忽略 `turn_id` 撤销错误轮次）。

## 4. 重要 PR 进展

今日过去 24 小时内更新的 PR 共 4 条，全部列出：

1. **#7456 [CLOSED] chore(web): 记录 v0.10.3 为已发布版本**
   由 release.yml 的 `sync-release-record` 自动生成，合并后最新发布检查转绿。
   codewhale-hq/Codewhale PR #7456

2. **#7452 [CLOSED] fix(tui): 流式增量保留在其自身类型所属的单元格**
   块类型仅由起始事件决定；当网关在 thinking 流中途开启 text 块后继续发送 thinking 增量时，出现归属错乱。
   codewhale-hq/Codewhale PR #7452

3. **#7455 [OPEN] fix(tui): 在已跟随的工具之后新开推理卡片**
   `ActiveCell` 按插入顺序渲染且无排序，`ensure_active_entry` 无条件返回已存索引，导致卡片顺序异常。
   codewhale-hq/Codewhale PR #7455

4. **#7451 [OPEN] fix(tui): 会话切换可接管已有内容的 Runtime store**
   此前 `apply_loaded_session_with_goal` 拒绝 `threads/` 非空的目标 store，现允许加载已含历史的会话。
   codewhale-hq/Codewhale PR #7451

## 5. 功能需求趋势

- **插件与扩展生态**：v0.10.3 的 Creator 模式与 DeepSeek Harness 插件兼容，是本期最明确的方向性投入。
- **Provider 与模型兼容性**：大量 Issue 集中在自定义 openai-compatible 端点的输出预算、Anthropic 工具名规范、内置 Provider 扩充（#7085 新增 Runcrate，已关闭）。
- **TUI 交互体验**：前台 shell 卡片显示运行命令（#6436，help wanted）、推理卡片与单元格排序、流式渲染归属。
- **本地化与计费**：人民币计价（#7292）、中英文双语 Issue 模板使用普遍。
- **可靠性基建**：Responses 方言一致性测试框架（#5093）、release 验收自动化痕迹明显。

## 6. 开发者关注点

- **发布质量与平台差异**：Windows 是当前最大风险面（#6970、#7203、#7348 均含 os:windows），多条 Issue 带 `status:awaiting-release`，发布验收流程成为社区可见的瓶颈。
- **数据一致性与状态管理**：重复持久化（#7178）、撤销目标错位（#7216）、会话切换接管 store（#7451）反映 turn/state 层设计待收敛。
- **上下文与性能开销**：GoalSnapshot 重复注入（#7172）、命名轮次撤销重复加载全量 turn store（#7355）、save-snapshot 引发冻结（#7357）。
- **安全与凭据**：代理凭据可能落盘（#7233）提示日志脱敏路径需要覆盖畸形输入。
- **配置语义精确性**：换行符控制（#7070）、重试配置 panic（#7274）、货币单位（#7292）等“配置写了但不生效”类问题反复出现。
- **稳定性和崩溃**：#7274 汇总了 engine、tools、util、repl 中的崩溃、glob 挂起与错误输出，社区对健壮性修复有持续诉求。

</details>

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar-personal) 自动生成。*