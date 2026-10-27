# AI CLI 工具社区动态日报 2026-09-12

> 生成时间: 2026-09-12 13:09 UTC | 覆盖工具: 9 个

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

# AI CLI 工具生态横向对比分析报告（2026-09-12）

## 1. 生态全景

当前 AI CLI 工具已从"单一编码助手"进入**平台化竞争**阶段：版本迭代稳定推进（Claude Code、Gemini CLI、Copilot CLI、Qwen Code 今日均有发布），但社区反馈重心明显从功能诉求转向**稳定性、计费可靠性与跨端协同**——额度异常、MCP 生命周期、桌面端回归占据各工具点赞与评论榜首。与此同时，多款工具不约而同地推进**子代理/多 Agent 编排、插件与扩展生态、会话持久化**这三条能力线，说明头部产品正在收敛到相似的能力框架。Windows/远程开发与企业受控环境成为跨工具普遍补课的短板，而"静默失败""配置被覆盖"这类隐蔽问题已成为社区信任度的主要消耗点。

## 2. 各工具活跃度对比

> 注：下表除特别说明外，均指**过去 24 小时内更新/新建**的条目；社区日报中的"热点 Issues"为工具方选取的 10 条代表条目，此处列其数量以保持口径一致。

| 工具 | Release | 热点 Issues（所列条数） | 今日 PR 动态 | 社区热度最高的信号 |
|---|---|---|---|---|
| **Claude Code** | v2.1.269（新增 `plugin eval`、`/output-style`） | 10 条（含 5 条 CLOSED） | 0 条 | #38335 额度异常：849 评论 / 476👍 |
| **OpenAI Codex** | rust-v0.155.0-alpha.3.10（无变更说明） | 10 条 + 其他（均 OPEN 为主） | 10 条（均 CLOSED） | #37403 远程线程恢复：62 评论 / 40👍 |
| **Gemini CLI** | v0.61.0-nightly.20260912（安全加固为主） | 10 条 | 10 条 + 2 条另注 | #22323 Subagent 误报成功（13 评论） |
| **GitHub Copilot CLI** | v1.0.84-5（会话/记忆导入、补全重构） | 10 条 + 8 条其他 | 0 条 | #4753 会话恢复取消 stdio MCP |
| **Kimi Code CLI** | 无 | **2 条**（均为 CLOSED、零评论） | 0 条 | 仅 Issue 积压清理，活跃度最低 |
| **OpenCode** | 无 | 10 条 | 10 条（CLOSED/OPEN 混合） | #37790 付款成功但余额不足：20 评论 |
| **Pi** | 无 | 10 条 + 4 条其他 | 10 条 + 3 条其他 | #4945 Codex 连接卡死：78 评论 / 33👍 |
| **Qwen Code** | v0.23.3-nightly.20260911 | 10 条 + 2 条另注 | 10 条 | #11500 TUI 崩溃（P1，8 评论） |
| **DeepSeek TUI** | 无 | 10 条 + 2 条另注 | 10 条 + 5 条 Dependabot | #6025 V4 Pro 下线（9/14 生效） |

**关键读数**：活跃度分层明显——Claude Code、Pi、Codex 的头部 Issue 讨论量在数十至数百条量级；Kimi Code CLI 仅 2 条零互动的关闭 Issue，处于明显的低活跃态。

## 3. 共同关注的功能方向

| 方向 | 涉及工具 | 具体诉求 |
|---|---|---|
| **会话持久化 / 长期记忆** | OpenCode（#48497 请求 `/teach` `/recall` `/learn` `/memory`）、DeepSeek TUI（#6017 跨会话持久记忆，由 MemCode 创始人提交）、Claude Code（#11455 会话交接/连续性）、Copilot CLI（v1.0.84-5 已交付 JSONL 会话/记忆导入） | 突破单次会话边界，携带项目上下文与用户偏好 |
| **MCP 生态成熟化** | Copilot CLI（#4753/#4818/#4636/#4464/#4759，覆盖 stdio 与 HTTP、恢复与清理）、OpenCode（#40111 按服务器配置信任、#36288 不可达时静默隐藏命令）、Qwen Code（#11499 `${VAR}` 不展开、#9693 Windows STDIO）、Pi（扩展注册 provider）、Codex（#41437 Upwork MCP 启动失败） | 连接生命周期可靠性、按服务器粒度信任策略、超时与错误显式暴露 |
| **子代理 / 多 Agent 编排** | Gemini CLI（#22323 MAX_TURNS 误报成功、#21409 generalist agent 挂起）、Qwen Code（#11695 harness 与执行环境分离 + #11711 容器执行）、OpenCode（#48612 请求 subagents）、DeepSeek TUI（#6097 子 Agent 不执行 permissions.toml）、Codex（command center 分组/token 用量，PR #44970/#44957/#44969） | 终止状态诚实可辨、权限规则一致贯彻、可观测的编排与成本 |
| **插件 / Skill 生态可控性** | Claude Code（今日发 `plugin eval`，但 #81320 `${CLAUDE_PLUGIN_ROOT}` 不解析）、Copilot CLI（#4438 `disable-model-invocation` 使 skill 完全不可达）、OpenCode（PR #40609 支持 SKILL.md `disable-model-invocation`）、Gemini CLI（#21968 模型不主动调用 skills）、Pi（#7658 扩展无法持久化 API key） | 插件可评测、技能可默认不向模型广播、配置解析可靠 |
| **Windows / 跨平台一致性** | Claude Code（#81341 MSIX GPU 崩溃、#92099 更新失败、#91028 Linux 沙箱因 MSIX 身份检测失败）、Codex（app-server 被杀 #40231、渲染崩溃 #44739、首轮后无法发消息 #44102）、Pi（#7547 Windows 使用方式征集、#9262 路径分隔符 silently 返回空、PR #9501/#9504 shell 解析）、Qwen Code（#11623 hook 进程树回收）、Gemini CLI（#21983 Wayland 下 browser 子代理失败） | 打包/签名、shell 解析、路径语义、进程回收 |
| **权限边界与安全默认值** | Gemini CLI（#29203 shell wrapper 绕过、#26525 脱敏发生在数据外发**之后**、今日 release 修间接提示注入）、DeepSeek TUI（#6098 deny 规则误匹配 heredoc 正文）、OpenCode（#48651 用户报告 LLM 绕过 AGENTS.md 且在 Plan Mode 下执行写操作）、Qwen Code（#11666 `logPrompts=false` 仍导出请求内容） | fail-closed 默认、脱敏前置、规则在全路径一致生效 |
| **IDE / 远程开发集成** | Qwen Code（#11556 Remote-SSH 下 webview 卡加载）、Claude Code（#75863 VSCode Background Tasks 面板）、Codex（Remote Control 线程恢复 #37403、iOS 项目列表 #36040） | 远程与移动端接管的可用性 |
| **终端 UX 细节** | Gemini CLI（#29295 闪烁/撕裂，当日即有 PR #29294）、Qwen Code（#11710 VP 退出脏状态）、Copilot CLI（#4826 Linux 桌面不重绘）、Claude Code（#76110 重复标签页）、Pi（#9052 fullscreen 滚轮慢 3 倍、#7321 Termux 多行粘贴） | 渲染稳定性与终端兼容长尾 |

## 4. 差异化定位分析

- **Claude Code（Anthropic）**：定位最成熟的**平台级产品**，已把能力延伸到插件评测（`plugin eval`）、输出样式、Remote Control 与云端环境。目标用户偏专业开发者与团队。技术路线强调插件/子代理生态与桌面+云协同，但代价是**计费信任与 Windows/MSIX 平台问题**集中爆发。
- **OpenAI Codex**：明显押注**多端协同与可编程编排**——Remote Control（桌面/CLI/iOS 互接管）、agent command center（分组、token 与 credits 估算、外部任务只读历史）、Windows 沙箱设置改走 app server。PR 密度今日最高（10 条全 CLOSED），工程推进快，但 26.90x 系列桌面版本稳定性压力大。
- **Gemini CLI（Google）**：路线最偏**安全与架构底层**——今日 nightly 两条均为安全修复（间接提示注入、沙箱文件系统边界），社区还在讨论"利用模型 bash 亲和性、以 OS 沙箱替代工具封装"（#19873）与 AST 感知读取（#22745）。同时强调 Agent 可靠性（termination 语义、挂起恢复）。
- **GitHub Copilot CLI**：定位**企业/受管环境**，因此 OAuth 刷新、组织策略下发时序、PATH 变量破坏、遥测（HydraFusion 分阶段属性）、OpenAI Flex tier 成本优化等议题占比高。发布节奏偏工程化（补全与导入命令）。
- **OpenCode（anomalyco）**：路线偏向**开放生态与自托管**——按 MCP 服务器配置信任（面向 OPNsense/TrueNAS/Proxmox 等自签名 TLS 私有网络）、插件扩展点（助手消息页脚插件化）、多种支付渠道。但当前最突出的痛点落在**计费/支付可靠性与 Console Go 网关稳定性**上，说明商业化链路承压。
- **Pi（badlogic/pi-mono）**：定位偏**极客向、可深度定制的 TUI agent**——高度关注 Windows 平台收敛、TUI 快捷键可配置化、system message 分段架构重构（PR #9116/#9117）、扩展 provider 生态。社区贡献者驱动的性能与正确性修复较多。
- **Qwen Code（QwenLM）**：路线强调**多 provider 互通与架构分层**——DashScope 聚合网关兼容、harness 与执行环境分离（#11695）及容器化落地（#11711）、hooks 契约向 Claude Code 对齐（#11610）。它的差异化在于服务自家模型生态的同时，力图做跨厂商请求语义统一的中间层。
- **DeepSeek TUI（Hmbown）**：定位偏**Rust 系模块化 TUI**，正系统推进 crate 拆解（EPIC-005 #5316）与权限体系补齐（deny 规则表达力、子 Agent 权限一致性）。受外部服务变更影响直接（V4 Pro 下线）。
- **Kimi Code CLI（MoonshotAI）**：本期几乎无信号，仅关闭两条 3 月创建的旧 bug（web 模式端口刷新、Reckless behaviour），零评论、无 Release、无 PR，社区与迭代活跃度处于最低位。

## 5. 社区热度与成熟度

**热度梯队（依据头部 Issue 评论/点赞量）：**

- **第一梯队（数百量级、情绪浓度高）**：Claude Code（#38335 849 评论 / 476👍，计费类）、Pi（#4945 78 评论 / 33👍，连接可靠性）。
- **第二梯队（数十量级）**：Codex（#37403 62 评论 / 40👍；#36040 41 评论）、Copilot CLI（MCP 系列多点开花但单条评论较低）、Gemini CLI（#22323 13 评论、#21409 8 评论 / 8👍）、DeepSeek TUI（#5316 22 评论，架构讨论）。
- **第三梯队（个位数至低位）**：OpenCode、Qwen Code（单条最高 8 评论，但 P1 密集）、Kimi Code CLI（2 条零互动）。

**成熟度与阶段判断：**

- **成熟但承压**：Claude Code、Codex。功能迭代快、发布密集，但**回归性故障与计费信任问题**成为主要风险，用户对版本回滚信息依赖度高（Codex #37403、#44743、#40231 均明确"此前可用/曾修复过"）。
- **快速迭代、架构奠基中**：Qwen Code、DeepSeek TUI、Pi。三者本期的 PR 都指向结构性重构（容器执行后端、crate 拆解、system message 分层），说明仍处能力框架成型期。
- **工程治理期**：Gemini CLI、Copilot CLI。今日动作以安全加固、契约对齐、生命周期修复为主，功能新增较少。
- **商业化链路是短板**：OpenCode 的榜首 Issue 全部围绕"付款成功但服务不可用"，是本期唯一以**计费可靠性**为第一痛点的工具。
- **信号稀薄**：Kimi Code CLI 本期几乎无社区互动，仅体现 Issue 积压清理。

## 6. 值得关注的趋势信号

1. **"静默失败"成为最伤信任的失败模式**。多个工具的高优问题都指向"无报错但结果错误"：Gemini CLI 子代理耗尽轮次却返回 `status: "success"`（#22323）、Pi 的 `find` 对 Windows glob 静默返回空导致 agent 得出错误结论（#9262）、OpenCode 本地 MCP 不可达时静默丢弃命令（#36288）、Codex UI 可见但 `read_thread` 返回空（#40014）。**对开发者的参考价值**：在自动化/监督型工作流中，需为 agent 增加独立于 UI 的状态校验，不能仅信任工具返回值。

2. **计费与用量可见性正成为产品信任的核心变量**。Claude Code（额度异常 #38335/#79773）、Codex（限额回归仅显示周限额 #41553，同时 PR #44970 增加 token 与成本估算）、OpenCode（付款成功但余额不足，跨 Stripe 与支付宝）、Copilot CLI（请求 Flex tier 以降 50% 成本）。**信号**：社区不仅要"能用"，还要"看得清、算得准、升级权益确实到账"。

3. **多端接管与远程协同进入实用性验证期**。Codex 的 Remote Control（桌面↔iOS↔CLI 线程接管）、Claude Code 的 Remote Control 与云端输出样式、Qwen Code 的 Web Shell 本地+远程工作区（PR #11548）、Pi 的并行启动凭据竞态（#8928，对 CI/多实例关键）。**风险点**：鉴权与账号态强绑定（Codex #21710 显示 API-key 模式下 Browser Use 不可用），多端场景下的凭据竞态需优先解决。

4. **子代理/多 Agent 的"权限一致性"与"执行隔离"是下一道门槛**。同份 `permissions.toml` 在 DeepSeek TUI 的父级循环、ACP 适配器、子 Agent 循环中行为不一致（#6097）；Qwen Code 提出 harness 与执行环境分离并已落地容器执行后端（#11695/#11711）；Gemini CLI 呼吁以沙箱替代工具封装（#19873）。**参考价值**：多 agent 落地前，权限模型需做到跨路径一致、执行位置可分离可寻址。

5. **扩展生态从"能装"走向"可治理"**。Claude Code 发 `plugin eval`（JSON + HTML 评分报告）但 `${CLAUDE_PLUGIN_ROOT}` 不解析（#81320）；Copilot CLI 与 OpenCode 都在推进 `disable-model-invocation` 语义；Pi 抱怨扩展无法持久化凭据（#7658）。**信号**：插件/技能的评价、可达性、凭据管理与配置解析，正成为生态健康度的衡量标准。

6. **"配置尊重度"是信任基础设施**。显式选定的模型被静默改写（Gemini CLI #29217）、browser agent 忽略 `settings.json`（#22267）、桌面端无法关闭基于文件的自动记忆（Claude Code #80615）、AGENTS.md 越过仓库边界导入无关指令（Copilot CLI #4822）、LLM 绕过 AGENTS.md 且 Plan Mode 下仍写操作（OpenCode #48651）。**参考价值**：配置的显式意图必须被强制尊重，边界外泄比性能问题更难排查。

7. **组织级/企业环境适配是尚未被充分满足的需求池**。Copilot CLI（OAuth 反复登录、组织策略时序、PATH >2047 字符被破坏）、Claude Code Cowork 出口白名单失效（#30112）、Codex Windows 沙箱删除被策略拦截（#34331）、OpenCode 自签名 TLS 的 MCP 信任配置（#40111）。**信号**：面向受管终端与大规模部署的适配仍是竞争差异化空间。

8. **外部服务变更的连锁冲击需纳入选型考量**。DeepSeek TUI 的 V4 Pro 于 2026-09-14 下线、请求全部路由至 V4.1 Flash 并变更计费（#6025），要求用户主动调整配置与预算预期；Codex 侧 GPT-6 Astra 的模型选择器放量不一致（#42853）与 Qwen Code 的非 Qwen 模型因 metadata 注入整体报 400（#11590）同属此类。**参考价值**：多模型/多 provider 方案中，客户端请求构造的兼容性常比模型本身更易出问题，需保留可快速切换与可覆盖的配置开关。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告

> 数据来源：github.com/anthropics/skills，截止 2026-09-12。以下内容仅基于所提供的 PR/Issue 摘要，评论数字段在 PR 数据中为 `undefined`，故 PR 部分以摘要与更新时间作为活跃度参考。

## 1. 热门 Skills 排行（PR）

- **fix(skill-creator): run_eval.py 恒报 0% recall** — PR [#1298](https://github.com/anthropics/skills/pull/1298)（OPEN，作者 MartinCajiao）
  修复 `run_eval.py` 对所有 skill description 都报告 `recall=0%` 的问题（关联 Issue #556，10+ 次独立复现），并修复 Windows 流读取、触发检测与并行 worker。这是影响 skill 描述优化闭环的核心 bug，波及 `run_loop.py` 与 `improve_description.py`。

- **Add document-typography skill** — PR [#514](https://github.com/anthropics/skills/pull/514)（OPEN，作者 PGTBoos）
  面向生成文档的排版质量控制：防止孤词换行、寡行段落（章节标题滞留页底）、编号错位。属于文档类通用能力增强。

- **Add ODT skill** — PR [#486](https://github.com/anthropics/skills/pull/486)（OPEN，作者 GitHubNewbie0）
  支持 OpenDocument 文本（.odt/.ods）的创建、模板填充、读取与 ODT→HTML 转换，补齐 LibreOffice 文档格式支持。

- **fix(mcp-builder): 支持 mcp>=2 的 streamable_http_client 导入与自定义 headers** — PR [#1742](https://github.com/anthropics/skills/pull/1742)（OPEN，作者 Kuldeeep18，修复 #1668）
  适配 `mcp>=2.0.0` 中 `streamablehttp_client` → `streamable_http_client` 的重命名，以及通过 `create_mcp_http_client` / `http_client` 配置自定义 HTTP headers。

- **mcp-builder: 评估默认模型升级到 claude-sonnet-5** — PR [#1724](https://github.com/anthropics/skills/pull/1724)（OPEN，作者 ExpertVagabond）
  将 `evaluation.py` 默认模型从 `claude-3-7-sonnet-20250219` 更新，并同步修正 `reference/evaluation.md` 的推荐快照。

- **Add scnet-hpc skill** — PR [#1615](https://github.com/anthropics/skills/pull/1615)（OPEN，作者 lql341）
  通过 profile 化的 SSH + Slurm 工作流操作 SCNet HPC 集群，覆盖连接、分区、内存、模块与加速器指引。

- **Add Hivemind: Zero-Cost Multi-Agent Orchestration** — PR [#1628](https://github.com/anthropics/skills/pull/1628)（OPEN，作者 Hanishchow）
  让 Claude Code 将机械性工作委派给运行免费模型的 headless opencode worker，自身仅保留规划、审查与合并角色。

- **Add buffer-api Agent Skill** — PR [#1627](https://github.com/anthropics/skills/pull/1627)（OPEN，作者 JPeetz）
  面向 Buffer GraphQL API 的可移植 Agent Skill，用于社交帖子的排期、管理与分析，声明兼容 Claude、Cursor、Codex 等多个 agent。

## 2. 社区需求趋势（Issues）

- **信任边界与安全治理**：Issue [#492](https://github.com/anthropics/skills/issues/492)（43 评论，最高热度）指出社区技能以 `anthropic/` 命名空间分发，存在冒充官方技能、诱导用户授予高权限的信任边界滥用风险。安全类需求还包括 [#412](https://github.com/anthropics/skills/issues/412)（agent-governance 治理模式）与 [#1175](https://github.com/anthropics/skills/issues/1175)（SPO 文档处理的权限与上下文窗口顾虑）。

- **组织级技能共享与分发**：Issue [#228](https://github.com/anthropics/skills/issues/228)（16 评论，8 👍）希望技能可在组织内直接共享，当前需下载 .skill 文件再经 Slack/Teams 手动上传。

- **skill-creator 工具链稳定性**：Issue [#556](https://github.com/anthropics/skills/issues/556)（12 评论，7 👍）报告 `claude -p` 从不触发 skills/commands（0% 触发率）；Issue [#202](https://github.com/anthropics/skills/issues/202)（CLOSED）认为 skill-creator 更像开发文档而非可执行技能，token 效率低。

- **上下文窗口与 token 效率**：Issue [#1487](https://github.com/anthropics/skills/issues/1487) 指出 `claude-api` 技能单次工具调用即注入约 156k tokens，直接耗尽上下文窗口；[#1175](https://github.com/anthropics/skills/issues/1175) 从 SPO 场景提出同类担忧。

- **打包与插件去重**：Issue [#189](https://github.com/anthropics/skills/issues/189)（6 评论，9 👍）发现 `document-skills` 与 `example-skills` 插件安装内容完全相同，导致上下文窗口中出现重复技能。

- **模型/API 时效性维护**：Issue [#1603](https://github.com/anthropics/skills/issues/1603)（由 PR #1607 修复）反映 `claude-api` 技能中的退役模型 ID 未及时标注。

- **跨平台与环境集成**：Issue [#29](https://github.com/anthropics/skills/issues/29)（AWS Bedrock 使用）、[#16](https://github.com/anthropics/skills/issues/16)（将 Skills 暴露为 MCP）、[#1362](https://github.com/anthropics/skills/issues/1362)（web-artifacts-builder 在 pnpm ≥10.1 下构建失败）。

- **新技能提案方向**：压缩记忆/符号化状态（[#1329](https://github.com/anthropics/skills/issues/1329)）、推理质量门流水线（[#1385](https://github.com/anthropics/skills/issues/1385)）、以及 mcp-builder 评估链路修复（[#1390](https://github.com/anthropics/skills/issues/1390)）。

## 3. 高潜力待合并 Skills（活跃但未合并）

- PR [#1742](https://github.com/anthropics/skills/pull/1742)（2026-09-08 创建，2026-09-11 更新）——明确修复 #1668，聚焦 mcp-builder 对新版 MCP SDK 的兼容，时效性强。
- PR [#1724](https://github.com/anthropics/skills/pull/1724)（2026-09-04 创建，2026-09-07 更新）——模型默认值更新，改动范围小、落地成本低。
- PR [#1734](https://github.com/anthropics/skills/pull/1734)（2026-09-06 创建，2026-09-11 更新）——检测 docx 孤立批注，摘要为空但时间上最活跃。
- PR [#1298](https://github.com/anthropics/skills/pull/1298)（2026-06-10 创建，2026-09-12 更新，报告截止日当天仍有更新）——对应 Issue #556 的高频复现问题，是 skill-creator 优化闭环的关键修复。
- PR [#1628](https://github.com/anthropics/skills/pull/1628) 与 PR [#1627](https://github.com/anthropics/skills/pull/1627)（均为 2026-08-21 创建，8 月下旬至 9 月初持续更新）——多智能体编排与第三方 API 集成两类新技能方向。
- PR [#1602](https://github.com/anthropics/skills/pull/1602)（2026-08-17 创建，2026-08-24 更新）——集中修复序列化、基准指标、编码与脚本稳定性等多类可靠性问题。

> 注：以上 PR 均为 OPEN 状态；所给数据未包含任何 PR 的 merged 记录。

## 4. Skills 生态洞察

**一句话总结**：社区当前最集中的诉求是"让 Skills 的工具链真正可靠且可信"——即修复 skill-creator / mcp-builder 评估脚本的失效（0% recall、0/N 评分、Windows 兼容）、控制技能的上下文占用、并解决 `anthropic/` 命名空间下的信任边界与分发重复问题，新技能提案则集中在多智能体编排、第三方 API 集成与文档格式扩展。

---

# Claude Code 社区动态日报（2026-09-12）

## 今日速览
今日发布 v2.1.269，新增 `claude plugin eval` 插件评测命令（输出 JSON + HTML 评分报告）以及 `/output-style` 输出样式切换（支持 Remote Control 与云端环境）。社区讨论仍高度集中于订阅额度异常消耗问题（#38335 累计 849 条评论、476 赞），同时 Windows/MSIX 相关的安装、更新与沙箱故障持续产生新反馈。

## 版本发布

### v2.1.269
- 新增 `claude plugin eval`：对插件运行 eval 套件，获得可评分、可复现的结果（JSON + HTML 报告），详见 `claude plugin eval --help`
- 新增 `/output-style [name]`：列出并切换输出样式，支持通过 Remote Control 以及在云端环境下使用

链接: github.com/anthropics/claude-code

## 社区热点 Issues（10 个）

1. **#38335 [OPEN] Max 计划会话额度自 2026-03-23 起异常快速耗尽（CLI）**
   作者 karenrebecag，849 条评论、476 👍。今日社区最热议题，长时间未解决，涉及计费与限流核心体验，情绪浓度高。
   anthropics/claude-code Issue #38335

2. **#30112 [OPEN] Cowork 网络出口白名单失效，自定义域名被 403 blocked-by-allowlist 拦截**
   作者 RogerMellie，75 条评论、59 👍。企业/团队场景下的网络策略功能缺陷，影响受控环境可用性。
   anthropics/claude-code Issue #30112

3. **#81341 [OPEN] Claude Desktop MSIX：CIG（MicrosoftSignedOnly）+ 厂商签名 vk_swiftshader.dll 导致每次浏览器预览时 GPU 进程崩溃（0x060C201E）**
   作者 allarounderservices，34 条评论。Windows 打包与代码完整性策略冲突，属平台级阻塞问题。
   anthropics/claude-code Issue #81341

4. **#11455 [OPEN] 功能请求：会话交接 / 连续性支持（Session Handoff）**
   作者 patrickhardiman，28 条评论、25 👍。长期高关注的功能请求，指向跨会话上下文延续的刚需。
   anthropics/claude-code Issue #11455

5. **#5277 [CLOSED] SSH/sftp 场景下的图片粘贴（Linux TUI）**
   作者 lsntkadev，24 条评论、33 👍。远程开发典型工作流痛点，已关闭，具参考价值。
   anthropics/claude-code Issue #5277

6. **#79773 [OPEN] Max 20x 升级未反映到周限额——按 Max 5x 甚至更差速率消耗（2026-07-16 升级）**
   作者 Remy-authority，16 条评论。与 #38335 同属额度/计费信任问题，反映升级权益落空。
   anthropics/claude-code Issue #79773

7. **#76110 [OPEN] Ctrl+点击输出中的链接会打开两个重复浏览器标签（xfce4-terminal）**
   作者 plittlefield，12 条评论、4 👍。已复现的 TUI 交互细节缺陷，影响日常操作。
   anthropics/claude-code Issue #76110

8. **#48805 [CLOSED] 桌面应用终端字体族设置（增强）**
   作者 vdsmon，12 条评论、61 👍。本批议题中点赞最高，显示桌面端可定制性诉求强烈。
   anthropics/claude-code Issue #48805

9. **#92099 [OPEN] Windows 上 Claude Code Desktop 更新时报错**
   作者 jonvanausdeln，11 条评论、15 👍。新近提交（2026-09-04）的安装/更新类缺陷，Windows 体验问题延续。
   anthropics/claude-code Issue #92099

10. **#81320 [OPEN] `${CLAUDE_PLUGIN_ROOT}` 在插件 `settings.json` 中不解析，导致插件自带 `subagentStatusLine` 无法引用自身脚本**
    作者 phil9922，文档类 + 可复现问题。直接影响插件生态的作者体验，与今日 `plugin eval` 发布形成呼应。
    anthropics/claude-code Issue #81320

## 重要 PR 进展
过去 24 小时内更新的 Pull Request 共 0 条，今日无 PR 动态可汇总。

## 功能需求趋势
- **会话连续性**：#11455 提出的会话交接/连续性支持，是本期最明确的核心能力型需求。
- **IDE / 编辑器集成**：#75863 请求 VSCode 扩展增加与桌面端对齐的 "Background Tasks" 面板；#93667 请求将 IDE 选区指示器固定在页脚而非内联提示（针对 v2.1.268 变更的后续反馈）。
- **桌面端可定制与组织**：#48805 终端字体族设置（61 👍）、#68262 在 Claude.ai Project 中支持子文件夹/嵌套组织。
- **浏览器扩展与本地文件交互**：#66077 请求 Claude in Chrome 允许会话期间将截图保存到本地文件系统。
- **插件生态可用性**：#81320 反映插件作者在环境变量与配置解析上的能力缺口。

## 开发者关注点
- **额度与计费信任**：#38335（849 评论）与 #79773 集中反映订阅限额异常消耗、升级权益未生效，是当前社区情绪最强烈的痛点。
- **Windows / MSIX 平台问题密集**：GPU 进程崩溃（#81341、#68049）、更新失败与更新器误判 sideload 安装（#92099、#92432）、Linux 沙箱因 MSIX 身份检测失败无法启动（#91028）。
- **网络与沙箱策略**：Cowork 出口白名单失效（#30112）与沙箱启动失败（#91028）影响受控/企业环境落地。
- **配置可控性**：桌面端无法关闭基于文件的自动记忆（#80615，`tengu_session_memory` 开关疑似被忽略）。
- **插件开发体验**：`${CLAUDE_PLUGIN_ROOT}` 不解析（#81320）限制了插件自带脚本的可用性。
- **TUI/终端细节**：重复打开链接（#76110）、SSH 下图片粘贴（#5277）等日常交互问题仍有较高关注度。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报（2026-09-12）

> 数据来源：github.com/openai/codex。本文仅基于所提供的 Releases / Issues / PR 数据整理。

## 1. 今日速览

今日社区焦点集中在 **桌面端与 Remote Control 的回归性故障**：macOS Desktop 无法恢复远程/CLI 线程（#37403 已积累 62 条评论、40 个赞），iOS Remote 项目列表缺失（#36040，41 条评论）。同时，Windows Desktop 暴露出多个渲染崩溃与消息发送失败问题（#44743、#44739、#44102），显示 26.90x 系列桌面版本存在较大稳定性压力。PR 侧则以 agent command center、上下文快照一致性和 Windows 沙箱设置重构为主。

## 2. 版本发布

- **rust-v0.155.0-alpha.3.10**：Release 说明仅为版本号本身，未提供额外变更内容。链接：openai/codex Release rust-v0.155.0-alpha.3.10

## 3. 社区热点 Issues（10 条）

1. **#37403 macOS Desktop 无法恢复 Remote Control / CLI 线程**（OPEN，62 评论 / 40👍）
   更新后出现 `already has an active writer`，破坏「移动端远程接管桌面 CLI 线程」的核心工作流，是当前热度最高的问题。
   https://github.com/openai/codex/issues/37403

2. **#36040 iOS Remote 仅列出有近期会话的项目**（OPEN，41 评论 / 1👍）
   配对 macOS 主机后项目列表不完整，直接影响移动端 Remote Control 的可用范围。
   https://github.com/openai/codex/issues/36040

3. **#42853 Windows Desktop 缺失 GPT-6 Astra 模型选项**（OPEN，23 评论 / 4👍）
   ChatGPT Pro 账号在模型选择器中看不到 Astra，属于新模型放量/资格判定问题，影响面广。
   https://github.com/openai/codex/issues/42853

4. **#40014 已完成子回合在 UI 可见但 `read_thread` 返回空**（OPEN，20 评论 / 4👍）
   UI 与 app-server 线程状态不一致，会破坏监督型 Work 任务的编排可靠性。
   https://github.com/openai/codex/issues/40014

5. **#44102 Windows Desktop 首个回合完成后无法发送后续消息**（OPEN，14 评论）
   属于阻断性可用问题，Windows 用户基本无法继续多轮对话。
   https://github.com/openai/codex/issues/44102

6. **#44743 macOS 26.908.31748 在线时白屏，渲染层报 `r is not a function`**（OPEN，9 评论 / 4👍）
   报告定位到 authed-route 与 app-primary 循环导入，且回滚到 26.901.51231 可修复，是典型的前端回归。
   https://github.com/openai/codex/issues/44743

7. **#44739 Windows Desktop 宠物/avatarOverlay 崩溃 `r is not a function`**（OPEN，6 评论 / 1👍）
   与 #44743 报错一致，提示同一类渲染/模块加载缺陷跨平台扩散。
   https://github.com/openai/codex/issues/44739

8. **#41922 上下文压缩后会话不可用并抛出内部校验错误**（OPEN，9 评论）
   涉及 context compaction 这一长会话关键机制，可能导致聊天彻底不可用。
   https://github.com/openai/codex/issues/41922

9. **#40231 Windows app-server 执行命令中被 `STATUS_CONTROL_C_EXIT` 杀死**（OPEN，12 评论）
   执行本地 shell 命令几分钟后进程被终止，且为修复后的再次回归（26.818.5229）。
   https://github.com/openai/codex/issues/40231

10. **#41437 Upwork MCP 在 Windows 启动失败，报 "Unexpected response type"**（OPEN，7 评论 / 4👍）
    发生在工具发现之前，属于 MCP 集成在 Windows 上的阻塞性问题。
    https://github.com/openai/codex/issues/41437

其他值得留意的条目：#44781（编辑并重发排队消息触发 "App-server queued follow-up no longer exists"，11👍）、#44398（Astra 输入框动画导致 kitty 下无法选择文本，10👍）、#45016（Chrome 浏览器控制创建 about:blank 超时 30 秒）、#41987（macOS 侧边栏无法删除的「幽灵会话」）、#34331（Windows 忽略缓存目录的路径删除被策略拦截）。

## 4. 重要 PR 进展（10 条，均为 CLOSED）

1. **#45035 直接在 Ubuntu runner 上运行 DotSlash 发布**：避免每次发布重建上游 Docker 镜像并下载 apt 依赖，改用 runner 自带的 Python 与 `gh`。
   https://github.com/openai/codex/pull/45035

2. **#44976 统一上下文快照的文本渲染**：请求设置中的模型指令与 Responses Lite 开发者内容使用同一套渲染，并让 `rewrite_known_segments` 输出纯标签。
   https://github.com/openai/codex/pull/44976

3. **#44970 在 agent command center 显示任务 token 与用量估算**：展示输入/输出 token 数及预估 credits 与美元成本，优先使用实时统计、回退到完整用量汇总。
   https://github.com/openai/codex/pull/44970

4. **#44969 将外部管理的任务以只读历史形式打开**：修复此前 command center 拒绝打开其他 app server 管理的任务、导致用户无法查看历史的问题。
   https://github.com/openai/codex/pull/44969

5. **#44957 为 agent command center 增加按模型分组**：可用 `Ctrl+S` 在项目、状态、模型间切换分组，页脚显示当前分组方式。
   https://github.com/openai/codex/pull/44957

6. **#44952 保证语音字幕在说话人切换与历史交接时保持可见**：修复已完成字幕在插入历史前消失、以及交替发言互相遮挡的问题。
   https://github.com/openai/codex/pull/44952

7. **#44946 退役 Friendly / Pragmatic 人格选择**：改用字面模型指令模板与标准回退提示，忽略旧人格变量，仅保留目录解码兼容性。
   https://github.com/openai/codex/pull/44946

8. **#44945 / #44939 将 TUI Windows 沙箱设置改走 app server**：使用 `windowsSandbox/setupStart` 处理提权与非提权设置，并让设置反映本地 app server 就绪状态，而非 TUI 本地状态。
   https://github.com/openai/codex/pull/44945 ・ https://github.com/openai/codex/pull/44939

9. **#44944 对既有 app-server 线程强制执行托管 provider 要求**：避免线程保留的模型 provider 配置在托管要求变更后失效。
   https://github.com/openai/codex/pull/44944

10. **#44938 增加无需安装 URL 的连接器鉴权失败检测**：此前 `connector_auth_failure_from_tool_result` 必须带 install URL 才返回鉴权失败，即便工具结果已含有效鉴权失败元数据。
    https://github.com/openai/codex/pull/44938

其他：**#44934** 为 `gpt-6-astra` 增加远程压缩与 Code Mode 工具的集成场景快照；**#44942** 明确语音包在 Windows 上的 Visual C++ 运行库提示（`bin/vcruntime140.dll`）；**#44948** 为异步提问与插件刷新增加上下文快照。

## 5. 功能需求趋势

- **Remote Control 与多端协同**：移动端远程接管桌面/CLI 线程（#37403、#36040）是当前最集中的诉求方向，涉及线程写者占用、项目列表过滤等机制。
- **新模型可用性与一致性**：GPT-6 Astra 的模型选择器缺失（#42853）、Astra 输入框动画干扰交互（#44398）、以及 PR 中针对 `gpt-6-astra` 的场景测试，说明 Astra 正在放量并伴随体验问题。
- **浏览器/Computer Use 与 MCP 集成**：Chrome Browser Use 在 API-key 模式下依赖 ChatGPT 鉴权（#21710）、创建 about:blank 超时（#45016）、Upwork MCP 启动失败（#41437）、Windows CUA 缺少 trusted RPC（#42745）。
- **会话与上下文管理**：上下文压缩后不可用（#41922）、幽灵会话（#41987）、项目从侧边栏消失（#42739、#43202）等侧边栏/会话持久化问题反复出现。
- **配额与用量可见性**：5 小时限额回归后仅显示周限额（#41553），与 PR #44970 增加用量估算形成呼应。
- **可编程编排与可观测性**：PR 侧围绕 command center 的分组、历史只读打开、token 与成本展示，显示多任务/多模型编排正在成为产品重点。

## 6. 开发者关注点

- **Windows 桌面端稳定性是最大痛点**：app-server 被杀（#40231）、沙箱删除被策略拦截（#34331）、更新后项目消失（#42739、#43202）、首轮后无法发消息（#44102）、渲染崩溃（#44739、#44743）集中爆发。
- **回归问题比例高，且回滚可解**：#37403、#44743、#40231 均明确指出「此前可用/曾修复过」，社区对版本回滚信息高度依赖。
- **UI 与后台线程状态不一致**：#40014（UI 可见但 `read_thread` 为空）与 #44781（排队消息丢失）属于同一类状态同步缺陷，直接影响自动化与监督型工作流。
- **远程/移动端鉴权与账号态耦合**：#21710 显示 API-key/自定义 provider 模式下 Browser Use 无法工作，说明部分能力仍强绑定 ChatGPT 登录态。
- **诊断信息需求明确**：多条 Issue 附带了具体的 App 版本号、bundled codex-cli 版本、构建号与系统版本，建议官方在报告中同步固定这些版本标识，便于定位回归区间。
- **人格设置退场**：PR #44946 与 #44935 移除 Friendly/Pragmatic 人格选择及相关 TUI 命令，使用自定义人格配置的开发者需关注兼容性变化。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报（2026-09-12）

## 今日速览

今日发布 nightly 版本 v0.61.0-nightly.20260912，核心变更聚焦安全加固：修复构建文件修改导致的间接提示注入，并强化沙箱文件系统边界。社区侧，Subagent 生命周期问题集中爆发——`MAX_TURNS` 被误报为 GOAL 成功（#22323）、generalist agent 无限挂起（#21409）位居讨论热度前列，同时终端闪烁（#29295 / PR #29294）当日即有对应修复提交。

## 版本发布

**v0.61.0-nightly.20260912.g9c1b0a610**（PR #29291 为对应版本号自动提升）
- `fix(core)`: 阻止通过构建文件修改和不受信任 flag 实施的间接提示注入（PR #29250）
- `fix(sandbox)`: 强化文件系统边界并隔离运行时状态

两条均为安全方向修复，与今日多条安全类 PR 形成呼应。

## 社区热点 Issues

1. **#22323 [p1] Subagent 在 MAX_TURNS 后恢复被误报为 GOAL 成功**（13 评论 / 👍2）
   子代理实际已耗尽最大轮次、未做任何分析，却返回 `status: "success"`。这会隐藏中断、误导用户判断任务是否真正完成，是当前评论数最高的 Issue。
   https://github.com/google-gemini/gemini-cli/issues/22323

2. **#21409 [p1] Generalist agent 挂起**（8 评论 / 👍8）
   一旦 CLI 转向 generalist agent 就会永久挂起，简单如创建文件夹也会卡死，用户最长等待一小时。👍 数最高，说明影响面广。
   https://github.com/google-gemini/gemini-cli/issues/21409

3. **#19873 [p2] 利用模型 bash 亲和性：零依赖 OS 沙箱 + 执行后意图路由**（9 评论）
   主张 Gemini 3 原生擅长链式调用 POSIX 工具，应以沙箱而非工具封装来发挥这一优势，属架构级提案。
   https://github.com/google-gemini/gemini-cli/issues/19873

4. **#25166 [p1] Shell 命令执行完毕后卡在 "Waiting input"**（4 评论 / 👍3）
   命令已结束，UI 仍显示活跃并等待输入，属高频阻塞性体验问题。
   https://github.com/google-gemini/gemini-cli/issues/25166

5. **#22745 [p2] 评估 AST 感知的文件读取、搜索与映射**（7 评论）
   EPIC 级调研，目标是单次工具调用精确读取方法边界，减少往返轮次。
   https://github.com/google-gemini/gemini-cli/issues/22745

6. **#21968 [p2] Gemini 不主动使用 skills 和子代理**（6 评论）
   用户反馈需显式指令才会调用自定义 skills / subagents，削弱了扩展机制的实际价值。
   https://github.com/google-gemini/gemini-cli/issues/21968

7. **#26525 [p2] 增加确定性脱敏并减少 Auto Memory 日志**（5 评论）
   Auto Memory 会在内容已发送给背景抽取 agent 之后才按提示要求脱敏，存在密钥泄露窗口。
   https://github.com/google-gemini/gemini-cli/issues/26525

8. **#21983 [p1] browser 子代理在 Wayland 下失败**（4 评论）
   Linux Wayland 环境浏览器代理不可用，涉及平台兼容性。
   https://github.com/google-gemini/gemini-cli/issues/21983

9. **#24246 [p2] 工具数超过 128 时遇到 400 错误**（3 评论）
   启用工具过多时直接报错，暴露工具范围管理策略的缺陷。
   https://github.com/google-gemini/gemini-cli/issues/24246

10. **#29295 [p2] 输入与 spinner 动画期间终端严重闪烁/撕裂**（当日新建，2 评论）
    今日新报，且当天即有修复 PR 提交，响应速度快，值得持续跟踪。
    https://github.com/google-gemini/gemini-cli/issues/29295

## 重要 PR 进展

1. **#29294 fix(cli): 修复 stdout 争用与光标焦点导致的终端闪烁**（Closes #29295）
   定位到两个并发渲染源，直接回应当日新建的高频体验问题。
   https://github.com/google-gemini/gemini-cli/pull/29294

2. **#29201 fix(cli): 在确认重试间保留已批准的 shell 命令**（Fixes #29197）
   修复含多个 `!{...}` 注入的 TOML 自定义命令陷入无限权限循环。
   https://github.com/google-gemini/gemini-cli/pull/29201

3. **#29203 fix(security): 剥离携带额外 flag 的 shell wrapper**
   原 `stripShellWrapper` 仅识别裸 `bash -c` / `powershell -Command`，带额外 flag 即可绕过策略引擎的二次检查。
   https://github.com/google-gemini/gemini-cli/pull/29203

4. **#29200 fix(core): 运行时一致执行 MCP 策略**
   对齐服务器名大小写/空白匹配，并将显式空 `mcp.allowed` 视为 fail-closed。
   https://github.com/google-gemini/gemini-cli/pull/29200

5. **#29217 fix(config): 不再重写显式指定的 gemini-2.5-flash**
   原 `isFlashModel()` 用 `endsWith('flash')` 宽匹配，误将用户固定选型自动升级为 `gemini-3.5-flash`。
   https://github.com/google-gemini/gemini-cli/pull/29217

6. **#29208 fix(core): agents.json 结构异常时回退为空**
   防止中断保存/磁盘满/同步冲突导致的畸形 `agents.json` 触发原始 `TypeError`。
   https://github.com/google-gemini/gemini-cli/pull/29208

7. **#29292 fix(checkpoint): 校验 history 为数组**
   避免合法 JSON 但 `history` 非数组（如 `null`）导致的 checkpoint 加载失败。
   https://github.com/google-gemini/gemini-cli/pull/29292

8. **#29205 fix(cli): 提交 MCP prompt 文本不再做 JSON 编码**
   保留 MCP 服务器返回的引号与换行原貌，并补充回归测试。
   https://github.com/google-gemini/gemini-cli/pull/29205

9. **#29211 fix(cli): 停止在 state updater 内调度状态更新**
   修复 `useInputHistoryStore` 在 updater 中调用 setState 引发的渲染问题。
   https://github.com/google-gemini/gemini-cli/pull/29211

10. **#29114 [CLOSED] fix(core): 防止 spawn 失败时重复执行 handleExit**
    以重入保护标志解决 Node.js 同时触发 `error` 与 `exit` 导致的重复退出处理。
    https://github.com/google-gemini/gemini-cli/pull/29114

另：**#29287 [CLOSED]** 将 `--yolo` 映射为 `allowedTools: ["*"]` 通配策略，并移除独立的 `ApprovalMode.YOLO` 状态（对应 issue #11303），是权限模型上的一次结构性调整。
https://github.com/google-gemini/gemini-cli/pull/29287

## 功能需求趋势

从今日 50 条 Issue 的标签与内容看，社区关注集中在以下方向：

- **Agent 可靠性（占比最高）**：几乎所有高评论 Issue 都带 `area/agent`。核心诉求是让子代理的终止状态诚实可辨（#22323）、避免挂起（#21409）、并让 browser agent 更具韧性（#22232，含会话接管与锁恢复）。
- **安全与沙箱**：提示注入防护、沙箱边界硬化（本次 release）、shell wrapper 绕过（#29203）、Auto Memory 脱敏时机（#26525）与无效 memory patch 隔离（#26523）构成一条完整的安全议题线。
- **模型能力对齐**：呼吁按模型原生习惯设计工具链（bash 亲和性 #19873、AST 感知读取 #22745），以及工具数上限管理（#24246）。
- **扩展机制有效性**：skills 与 subagents 不被主动调用（#21968），反映"能力已具备但触发率低"的落差。
- **终端体验**：闪烁/撕裂、卡在等待输入、hook 输出崩溃（#22186）等前端与进程交互问题持续存在。

## 开发者关注点

- **状态语义失真**：最突出的痛点是"报告成功但实际失败/中断"（#22323）与"看似仍在等待实则已结束"（#25166），这类问题比单纯报错更难排查。
- **挂起类故障成本高**：generalist agent 无限挂起（#21409）迫使开发者自行取消任务，缺乏超时与自我恢复机制。
- **安全默认值被质疑**：脱敏发生在数据外发之后（#26525）、显式空 `mcp.allowed` 曾等于全放开（#29200），开发者期待更前置、更 fail-closed 的默认行为。
- **破坏性操作缺乏劝阻**：模型在复杂 git 操作中可能使用 `git reset` / `--force`（#22672），且倾向在随机目录生成临时脚本（#23571），增加清理与提交成本。
- **配置被静默覆盖**：显式选定的 2.5-flash 被自动改写（#29217）、browser agent 忽略 `settings.json`（#22267）等，说明"配置尊重度"是信任基础。
- **平台与环境兼容性**：Wayland 下 browser 子代理失败（#21983）、`~/.gemini/agents/` 中 symlink 不被识别（#20079）等边缘路径问题仍在等待处理。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报（2026-09-12）

## 今日速览

今日发布 v1.0.84-5，新增语义化 JSONL 会话/记忆导入命令，并重构了 shell 补全生成逻辑。社区侧 MCP 连接生命周期问题集中爆发：会话恢复与 `/clear` 导致 stdio/HTTP MCP 服务器被意外取消或滞留 `failed` 状态，成为当日最密集的反馈主题；另有多个 skill 可达性与指令发现范围（AGENTS.md）相关的设计缺陷被持续讨论。

## 版本发布

### v1.0.84-5

**Added**
- 新增 session 与 memory 的导入命令，支持语义化 JSONL 交换格式。

**Improved**
- Shell 补全改为由 CLI 解析所用的同一套语法生成：`copilot <TAB>` 现在同时提供根级 flag 与子命令，且每个子命令只展示自身选项。

来源：github.com/github/copilot-cli Releases

## 社区热点 Issues

1. **[#4753](github/copilot-cli Issue #4753) `v1.0.83` 会话恢复取消进行中的 stdio MCP 连接（超时从 ~16s 骤降至 ~1s）** — 受影响的 MCP 服务器在整个会话中静默不可用，属回归性问题，v1.0.82 表现正常。是今日 MCP 系列问题的核心。

2. **[#4818](github/copilot-cli Issue #4818) 远程/HTTP MCP 服务器在每次 `/clear` 或会话重启后滞留 `failed`** — 每次前台会话交接都会导致远程 MCP 连接失效，与 #4753 共同指向会话生命周期管理缺陷。

3. **[#4636](github/copilot-cli Issue #4636) `--additional-mcp-config` 提供的 MCP 服务器在启动对账中被移除（1.0.81-11）** — 启动阶段的二次 MCP 配置计算丢弃了附加配置，命令行注入方式不可靠。

4. **[#4464](github/copilot-cli Issue #4464)（已关闭）远程 MCP OAuth 静默刷新失败（AADSTS70011）导致反复交互式登录** — 刷新请求混用 `.default` 与资源级 scope，约每 60–75 分钟强制重新登录，已关闭但影响面大。

5. **[#4759](github/copilot-cli Issue #4759)（已关闭）CLI 应发送 MCP 取消请求** — URL 模式 elicitation 未完成时不发送取消请求，属协议合规性缺口。

6. **[#4438](github/copilot-cli Issue #4438) `disable-model-invocation: true` 使 skill 完全不可达（而非仅禁手动模式）** — `skill list` 可见但调用返回 "Skill not found"，7 个 👍、5 条评论，社区关注度最高的 skill 类问题。

7. **[#4637](github/copilot-cli Issue #4637) 斜杠调用的 skill 存在重复查找与误导性上下文噪音** — 与 #4438 同源，一个路径成功注入指令，另一个路径报 "Skill not found"。

8. **[#4822](github/copilot-cli Issue #4822) AGENTS.md 发现跟随已解析符号链接并遍历全部祖先目录** — 不遵守 Git 仓库边界，会导入无关仓库的指令，影响多仓库工作区隔离性。

9. **[#4819](github/copilot-cli Issue #4819) 组织策略在 Copilot 加载后才下发模型列表，导致默认模型选择失败** — 企业环境下的启动时序竞态。

10. **[#4826](github/copilot-cli Issue #4826) Linux 桌面版（WebKitGTK/Tauri）UI 不自动重绘** — 仅在窗口聚焦变化或缩放时刷新，v1.0.84-4 的打开即刷问题。

**其他值得留意**：[#4817](github/copilot-cli Issue #4817) `ask_user` 多选退化�为纯文本、[#4824](github/copilot-cli Issue #4824) `ctrl-t` 入队提示不执行、[#4816](github/copilot-cli Issue #4816) 安装器破坏 PATH 环境变量（>2047 字符）、[#4821](github/copilot-cli Issue #4821) 请求支持 OpenAI Flex tier、[#4820](github/copilot-cli Issue #4820) 请求会话结束 hook、[#4825](github/copilot-cli Issue #4825) 请求 HydraFusion 分阶段遥测属性、[#4823](github/copilot-cli Issue #4823) `/skills list` 输出可读性。

## 重要 PR 进展

过去 24 小时内更新的 Pull Request 数量为 **0**，无进展可报告。

## 功能需求趋势

- **MCP 生命周期与配置可靠性**：会话恢复、`/clear`、启动对账、OAuth 刷新四条路径均出现连接丢失或认证失败，是当前最集中的技术债务方向。
- **Skill 系统语义一致性**：`disable-model-invocation` 的预期行为与实际可达性不符，重复查找路径需统一。
- **指令发现范围控制**：AGENTS.md 的祖先目录遍历与符号链接跟随，反映出对仓库边界感知的需求。
- **可观测性**：HydraFusion 分阶段 model/verdict/credit 属性写入 OpenTelemetry，说明多模型路由场景需要更细粒度遥测。
- **成本与模型选择**：OpenAI Flex tier 支持请求（据称可降 50% 非时效性 token 成本）、组织策略模型列表时序问题，指向企业级模型配置灵活性。
- **会话钩子与自动化**：会话结束 hook（配合 `/clear` 前执行任务）反映 CI/自动化类工作流集成诉求。

## 开发者关注点

- **MCP 是最痛的区域**：同一周期内至少 5 个相关 Issue，覆盖 stdio 与 HTTP 两种传输、恢复与清理两种场景，开发者普遍反映连接"静默失效"，排查成本高。
- **交互层卡顿与误导**：`ctrl-t` 队列无限转圈、ask_user 选项退化为 JSON 文本、Linux 桌面版不重绘，直接影响日常使用体验。
- **企业环境适配**：OAuth 反复登录、组织策略时序、PATH 环境变量被破坏（>2047 字符），对受管终端与大规模部署不友好。
- **skill 与指令的边界模糊**：多个 Issue 表明 skill 可达性与 AGENTS.md 作用域缺乏明确规则，容易在跨仓库场景产生意外注入。
- **对遥测与可审计性的期待**：开发者希望获得每次路由决策的可导出指标，而不仅是单一答案与 credit 数字。

---
数据来源：github.com/github/copilot-cli（Issues、Releases 均以 2026-09-12 更新为准）

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报（2026-09-12）

## 1. 今日速览

今日无新版本发布、无 PR 更新，社区动态集中在旧 Issue 的关闭处理上。过去 24 小时内共有 2 条 Issue 更新，均为 2026-03-11 创建、今日被标记为 CLOSED 的 bug 报告，且均无评论互动。整体社区活跃度较低，Issue 积压清理是本期主要信号。

## 2. 版本发布

无新版本发布。

## 3. 社区热点 Issues

过去 24 小时内更新的 Issue 共 2 条，均无评论、无点赞，社区讨论热度为零，以下为全部条目：

1. **[CLOSED] [bug] kimi cli web mode keeps refreshing and connects different port** — [Issue #1409](https://github.com/MoonshotAI/kimi-cli/issues/1409)
   - 作者：LSTM-Kirigaya｜创建于 2026-03-11｜今日关闭｜评论 0｜👍 0
   - 环境：Kimi Code CLI 1.20.0，Kimi Code 平台，kimi-for-coding 模型，Darwin 25.2.0 arm64
   - 重要性：web 模式反复刷新并连接到不同端口，属于影响可用性的核心交互缺陷。该问题自 3 月创建至 9 月关闭，跨度约半年，反映此类问题可能长期未在公开渠道获得讨论或反馈。

2. **[CLOSED] [bug] Reckless behaviour** — [Issue #1404](https://github.com/MoonshotAI/kimi-cli/issues/1404)
   - 作者：acorello｜创建于 2026-03-11｜今日关闭｜评论 0｜👍 0
   - 环境：Kimi Code CLI 1.19.0，kimi.ai 平台，kimi-for-coding 模型，Darwin 25.3.0 arm64
   - 重要性：标题指向 CLI 的“鲁莽行为”（摘要内容不完整，无法确认具体行为细节），涉及 Agent 类工具的行为可控性问题，通常与文件操作、命令执行的安全边界相关，值得关注但当前缺乏进一步信息。

> 说明：数据仅提供 2 条 Issue，无法凑足 10 条；为避免虚构，此处仅列出来源中实际存在的条目。

## 4. 重要 PR 进展

过去 24 小时内无 PR 更新，暂无可报告内容。

## 5. 功能需求趋势

基于本期仅有的 2 条 Issue，可提炼出的方向有限，且均为缺陷报告而非功能请求：

- **Web 模式稳定性**：Issue #1409 指向 web 界面的会话/端口管理存在缺陷，说明 Web 端使用体验是社区关注的实际场景之一（参考 [#1409](https://github.com/MoonshotAI/kimi-cli/issues/1409)）。
- **Agent 行为可控性**：Issue #1404 的标题暗示对 CLI 自动化行为安全边界的关切（参考 [#1404](https://github.com/MoonshotAI/kimi-cli/issues/1404)）。
- **macOS / arm64 环境适配**：两条 Issue 均来自 Darwin arm64 环境，提示该平台组合下的问题反馈相对集中。

> 受样本量限制，本期不足以支撑更广泛的功能趋势判断（如 IDE 集成、性能、新模型支持等方向在本次数据中均无体现）。

## 6. 开发者关注点

- **长期未闭环的 bug 体验**：两条 Issue 均创建于 2026-03-11、于 2026-09-12 关闭，期间零评论。开发者在遇到问题后缺乏公开讨论与跟进反馈，可能影响其对问题处理透明度的信心。
- **版本迭代与问题延续**：Issue #1404 基于 1.19.0，Issue #1409 基于 1.20.0，两者在同一时间窗口被关闭，但无法从现有数据判断是修复关闭还是其他原因关闭。
- **报告信息质量**：Issue #1404 摘要截断，缺少可复现细节；#1409 摘要同样未完整展示。有效的问题描述（复现步骤、日志、预期行为）仍是提升处理效率的关键。

---

*本日报仅基于 github.com/MoonshotAI/kimi-cli 在 2026-09-12 的 Releases、Issues、Pull Requests 数据生成，未包含来源之外的任何信息。*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报（2026-09-12）

## 今日速览

今日无新版本发布。社区讨论高度集中在**计费与支付问题**：多条高评论 Issue 反映订阅付款成功但工作区余额未更新，涉及 Stripe 与支付宝渠道。同时，MCP 相关缺陷（本地服务器不可达导致命令面板静默丢失命令、无法按服务器配置信任）以及 Console Go 上游请求失败问题持续发酵。

## 版本发布

无。

## 社区热点 Issues

1. **[BUG] OpenCode Go 订阅付款成功但工作区显示"余额不足"** — #37790（20 评论）
   通过 Stripe 付款成功，但工作区仍报 Insufficient balance，导致服务无法使用。这是今日评论数最高的 Issue，且从 7 月创建至今仍在更新，说明问题长期未闭环，用户资金与服务可用性直接受影响。
   https://github.com/anomalyco/opencode/issues/37790

2. **付款被拒：使用 3 个月的信用卡突然续费失败** — #45278（15 评论，👍4）
   同一张卡已正常支付约三个月，突然被拒，用户强调卡与银行侧均无异常。支付链路稳定性问题反复出现，且获得点赞说明并非个例。
   https://github.com/anomalyco/opencode/issues/45278

3. **[Bug] Console Go 上游请求失败 — Kimi K3** — #37815（9 评论，👍9）
   Kimi K3 出现在模型列表但选中即报 "Upstream request failed"，其他 Console Go 模型正常。点赞数最高，说明影响面广且指向特定模型的接入问题。
   https://github.com/anomalyco/opencode/issues/37815

4. **Console Go 全模型返回上游请求失败** — #37231（10 评论，已关闭）
   所有 Go 模型在 CLI、桌面端等各入口均报同一错误。虽已关闭，但与 #37815 相互印证，反映 Console Go 网关层稳定性问题。
   https://github.com/anomalyco/opencode/issues/37231

5. **桌面端无响应：输入 → 思考 → 无输出** — #34087（8 评论，👍5）
   桌面应用在 Go 和 Zen 模型下均卡住无响应，用户报告版本 1.16.2。属于核心使用路径阻塞，从 6 月持续至今仍未解决。
   https://github.com/anomalyco/opencode/issues/34087

6. **付款已扣款但额度未更新（CreditsError）** — #48604（4 评论）
   通过支付宝付款成功且已扣款，但工作区余额未增加。与 #37790 类似但渠道不同，说明计费同步问题跨多个支付渠道存在。
   https://github.com/anomalyco/opencode/issues/48604

7. **[FEATURE] 长期持久记忆系统（/teach、/recall、/learn、/memory）** — #48497（4 评论）
   请求为 OpenCode 增加跨会话的长期记忆能力。这是当日最受关注的纯功能类需求，反映社区对上下文持久化的强烈期望。
   https://github.com/anomalyco/opencode/issues/48497

8. **[FEATURE] 支持按 MCP 服务器配置信任** — #40111（4 评论）
   面向 OPNsense、TrueNAS、Proxmox、Kubernetes、Home Assistant 等使用自签名 TLS 的私有网络 MCP 服务器，请求按服务器粒度配置信任策略。切中企业/自托管场景的实际痛点。
   https://github.com/anomalyco/opencode/issues/40111

9. **本地 MCP 服务器不可达时静默隐藏文件类命令** — #36288（3 评论）
   当配置的本地 MCP 服务器启动时不可达，TUI 的斜杠命令/命令面板会静默丢弃所有基于文件的自定义命令。故障表现隐蔽、难以排查，属于典型的可用性陷阱。
   https://github.com/anomalyco/opencode/issues/36288

10. **tool.execute.before 钩子无法修改实际执行的命令** — #42409（3 评论）
    插件在 `tool.execute.before` 中修改 `output.args.command`，后续钩子能看到改动，但 shell 工具仍执行原命令。这是插件生态的语义缺陷，直接影响插件对命令的拦截与改写能力。
    https://github.com/anomalyco/opencode/issues/42409

## 重要 PR 进展

1. **feat: 支持 SKILL.md frontmatter 中的 disable-model-invocation** — #40609（开启）
   让技能可默认不向模型广播，解决大型人工维护技能库被无条件暴露的问题。关闭 #34498。
   https://github.com/anomalyco/opencode/pull/40609

2. **fix(tui): 修复服务端同步字段为 null 时的 TUI 崩溃** — #45322（已关闭）
   修复 `Object.entries requires that input parameter not be null or undefined` 这一系列反复出现的崩溃，关联 #21014、#20388 等历史问题。
   https://github.com/anomalyco/opencode/pull/45322

3. **feat(provider): 从 /v1/models 发现 Requesty 模型** — #28973（开启）
   让 Requesty 用户已审批的模型与路由策略能在 OpenCode 中直接发现。关闭 #16344。
   https://github.com/anomalyco/opencode/pull/28973

4. **fix(opencode): 列出文件命令时不再阻塞等待 MCP 连接** — #48630（开启，contributor）
   实测 9 个 MCP 服务器下 `/command` 需等待 5.6 秒。直接修复 #36288 的静默丢命令与启动卡顿问题。
   https://github.com/anomalyco/opencode/pull/48630

5. **fix(core): 消除 turn diff 导致的持久化事件写放大** — #48638（开启）
   `SessionSummary.summarize` 将整轮 git patch 文本附加到消息上，造成重复发布。针对 #48641 的性能修复。
   https://github.com/anomalyco/opencode/pull/48638

6. **fix(core): 压缩重复的消息 diff 事件** — #48537（已关闭，needs:issue/compliance）
   针对同类 diff 写放大问题的另一种处理方案，说明该性能问题受到多位贡献者关注。
   https://github.com/anomalyco/opencode/pull/48537

7. **fix(tui): 恢复 SSH 下的终端能力检测** — #48632（开启）
   修复通过 SSH 连接到 Mac 上的 Linux 机器时的颜色显示问题。关闭 #39923。
   https://github.com/anomalyco/opencode/pull/48632

8. **feat(tui): 将助手消息页脚改为可替换插件** — #46562（开启）
   把每条助手消息的页脚组件开放为插件扩展点。关闭 #46268，是 TUI 可扩展性的重要一步。
   https://github.com/anomalyco/opencode/pull/46562

9. **fix(app): 稳定移动端时间线触摸滚动** — #48600（开启）
   修复 iPhone 上虚拟化会话文本偏离手指 544px 的问题，并保持图片批量加载时的阅读锚点。
   https://github.com/anomalyco/opencode/pull/48600

10. **fix(opencode): 处理 Windows 字面量归档路径** — #43038（已关闭）
    通过子进程环境变量传递 Windows 归档与目标路径。关闭 #43036，改善 Windows 平台兼容性。
    https://github.com/anomalyco/opencode/pull/43038

## 功能需求趋势

- **记忆与上下文持久化**：#48497 提出 /teach、/recall、/learn、/memory 长期记忆系统，代表社区希望突破单次会话边界。
- **MCP 生态成熟化**：包括按服务器配置信任（#40111，面向自签名 TLS 私有网络）、MCP 连接不阻塞命令面板（#36288/#48630）、MCP 子进程生命周期管理（#48595）。
- **多账号与桌面/Web 能力对齐**：#45484 指出 CLI 支持多账号切换但 Web UI 缺失对应管理界面。
- **技能（Skills）可控性**：#40609 引入 disable-model-invocation，回应技能库管理的实际需要。
- **插件扩展点**：助手消息页脚插件化（#46562）与钩子语义修正（#42409）显示插件生态正在被认真对待。
- **多 Agent 能力**：#48612 请求类似 Claude Code 的 subagents 与 ultracode（已关闭）。

## 开发者关注点

- **计费与支付的可靠性是当前最突出的痛点**：今日评论数最高的两条 Issue（#37790、#45278）以及 #48604 均为付费成功但服务不可用或额度未到账，横跨 Stripe 与支付宝渠道，属于影响用户信任的高优先级问题。
- **Console Go 网关稳定性**：上游请求失败错误反复出现（#37231、#37815），并集中在特定模型（Kimi K3），同时存在随之而来的内部服务器错误（#48649）与第三方/自有提供商的响应延迟（#48328）。
- **MCP 的失败模式设计不佳**：不可达服务器会静默隐藏命令（#36288）、阻塞命令列表加载、且缺乏按服务器的信任配置（#40111），提示需要更明确的错误暴露与超时策略。
- **性能与资源问题**：turn diff 写放大（#48638/#48537）、Bun 运行时向 /tmp 泄漏 Zig compiler_rt 文件（#48643，一天累积 356 个文件 / 4.8GB）值得关注。
- **Agent 行为可控性**：有用户报告 LLM 绕过 AGENTS.md / opencode.json 中的指令，且在 Plan Mode 下仍执行写操作（#48651）——这类问题直接关系到用户对 Agent 权限边界的信任。

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报（2026-09-12）

> 数据来源：github.com/badlogic/pi-mono（earendil-works/pi）

## 今日速览

过去 24 小时内 Pi 无新版本发布，社区讨论集中在开放 Issue 上。最受关注的是 `openai-codex` / `gpt-5.5` 连接可靠性问题（#4945，78 条评论、33 个赞），Windows 使用体验（#7547）与 Fullscreen TUI 交互缺陷也持续升温。PR 侧以 Windows 兼容、TUI 快捷键可配置化、以及 system message 分段架构重构为主。

## 版本发布

过去 24 小时内无新 Release。

## 社区热点 Issues

### 1. #4945 [OPEN] [inprogress] openai-codex Connection Reliability Issues
交互式 TUI 在 `openai-codex` / `gpt-5.5` 下有时卡在 `Working...`，无流式文本、无工具调用、也无错误提示，只能按 Escape 中止。讨论量大（78 评论、33 赞）且已标记 inprogress，是当前最影响日常使用的稳定性问题。
https://github.com/earendil-works/pi/issues/4945

### 2. #7547 [OPEN] [Windows] [sink-thread] How do you use Pi on windows? What issues are you seeing?
官方征集 Windows 使用方式与问题，用于决定投入方向（修 bug、文档还是其他）。62 条评论说明 Windows 场景分歧大、痛点多，是了解平台支持现状的重要线索。
https://github.com/earendil-works/pi/issues/7547

### 3. #9052 [OPEN] Fullscreen 模式滚轮速度比常规模式慢 3 倍
用户为了固定底部输入框切换到 fullscreen 模式，但滚轮滚动速度明显劣化（9 评论、4 赞）。属于影响高频操作的 TUI 体验问题。
https://github.com/earendil-works/pi/issues/9052

### 4. #8928 [OPEN] [inprogress] 并行启动时因过期 OAuth 凭据误报 "No API key found"（约 48s）
作者给出确定性复现与计时数据，指出多进程场景下该问题更常出现，并关联 #1871、#4919、#6880。对 CI/多实例部署的用户价值高。
https://github.com/earendil-works/pi/issues/8928

### 5. #5323 [OPEN] Improve Vertex + GCP metadata server support
指出 `is Vertex authed?` 使用同步 `existsSync` 检查的问题，涉及 `packages/ai/src/env-api-keys.ts`。对企业 GCP/Vertex 用户较关键。
https://github.com/earendil-works/pi/issues/5323

### 6. #7321 [OPEN] 无 bracketed paste 的终端（如 Termux）多行粘贴失效
粘贴含换行的文本时首个 `\r` 直接触发提交，影响 Android/Termux 等终端用户。
https://github.com/earendil-works/pi/issues/7321

### 7. #9262 [OPEN] [last-read] find 工具使用 Windows 分隔符的 glob 静默返回空结果
`src\**\*.ts` 这类原生 Windows 路径模式不报错却无结果，会让 agent 得出错误结论，属隐蔽的正确性问题。
https://github.com/earendil-works/pi/issues/9262

### 8. #6108 [OPEN] Release 二进制在 /reload 时重复执行扩展依赖副作用
Linux release 二进制在 `/reload` 重新加载扩展时会重复求值依赖模块副作用（示例涉及 `@plannotator/pi-extension`）。对扩展生态可靠性有直接影响。
https://github.com/earendil-works/pi/issues/6108

### 9. #7658 [OPEN] 扩展持久化 API-key 凭据（auth.json）的 Extension API
扩展可通过 `pi.registerProvider()` 注册 provider，但无法以编程方式持久化 API key 凭据，限制了自定义 provider 生态。
https://github.com/earendil-works/pi/issues/7658

### 10. #9267 [OPEN] 在不改变排序的前提下降低模糊会话搜索扫描成本
建议在 `fuzzyMatch()` 中用 `String.indexOf()` 替代逐字符扫描（`packages/tui/src/fuzzy.ts:30`），属低风险性能优化提案。
https://github.com/earendil-works/pi/issues/9267

其他值得留意的条目：#5372 / #6930（OAuth 回调页与 HTML 渲染函数公开化）、#7629（select 列表未处理 pageUp/pageDown）、#9311（fullscreen 选区跨会话残留）、#9205（示例传入不存在的 `--no-extension` 标志）。

## 重要 PR 进展

### 1. #9116 [CLOSED] feat(ai): 增加会话中途 system message
#8998 拆分的第一层，仅限 pi-ai 与让 pi-agent-core、coding-agent 传递新 role 所需的最小改动。
https://github.com/earendil-works/pi/pull/9116

### 2. #9117 [CLOSED] feat(coding-agent): 以 system message delta 传递 prompt 与工具变更
#8998 第二层，把 prompt 与工具装载变更作为 system message delta 下发，而不是重写顶层 prompt。
https://github.com/earendil-works/pi/pull/9117

### 3. #9514 [CLOSED] fix(tui): 将硬编码快捷键改为可配置 keybinding
把 TUI 编辑器、输入框和模型选择器中的硬编码快捷键改为可配置，并新增 Ctrl+C 清空搜索/取消模型选择等回归测试（作者自述 coding-agent 测试在当前环境未通过）。
https://github.com/earendil-works/pi/pull/9514

### 4. #9517 [CLOSED] feat(tui): 折叠长工具调用序列
将连续 6 个及以上工具调用折叠为聚合行，保留失败调用并提供点击展开，附带摘要与折叠/展开渲染测试。
https://github.com/earendil-works/pi/pull/9517

### 5. #9523 [CLOSED] 修复 #9522：Pi 自身阻塞式提示未发出 ui_prompt_start / ui_prompt_end
模型选择器、设置、resume、session tree 等经 `showSelector()` 的流程此前不发出事件，导致状态集成无法上报“等待用户”。
https://github.com/earendil-works/pi/pull/9523

### 6. #9505 [CLOSED] fix(ai): 在 openai-completions 流路径中遵循 model.samplingParams
`models.json` 的 `samplingParams`（#7568）在 `buildBaseOptions` 中合并，却被支持工具的流路径静默丢弃。
https://github.com/earendil-works/pi/pull/9505

### 7. #9501 [OPEN] fix(coding-agent): 从安装目录解析 Windows shell
统一并文档化 Windows 二进制查找逻辑，此前存在硬编码路径、环境变量、多级回退混杂的情况。
https://github.com/earendil-works/pi/pull/9501

### 8. #9504 [OPEN] fix(coding-agent): 接受 Windows Store shell 别名
改用 `accessSync(F_OK)` 校验 Windows shell，避免 `existsSync()` 对可运行的 Store 别名因 stat 报 EACCES 而误判。
https://github.com/earendil-works/pi/pull/9504

### 9. #9489 [CLOSED] fix(bedrock-converse): 按模型族归一化 usage.input（毛额→净额）
修复 #8752：Bedrock Converse 上 Anthropic Claude 与其他模型族的 `inputTokens` 口径不一致（缓存命中计入 cacheReadInputTokens）。
https://github.com/earendil-works/pi/pull/9489

### 10. #8635 [OPEN] fix(ai): 在惰性 setup 中保留 aborted stop reason
修复 #8409：将请求 abort signal 透传到惰性流 setup，setup 失败在已中止时报告为 aborted，并添加工具执行期间中止的回归测试。
https://github.com/earendil-works/pi/pull/8635

其他：#9503（浅色主题警告对比度）、#9495（approve-contributor 空白行写入修复）、#9491（定制化文档 evals）。

## 功能需求趋势

- **Windows 平台支持成体系化议题**：#7547（使用方式征集）、#9262（路径分隔符）、#9501/#9504（shell 解析）、#9490（`findPowerShell` 硬编码 C: 盘）等集中出现，说明 Windows 是当前最密集的改进方向。
- **TUI 交互与可配置性**：fullscreen 模式的滚动/选区/跨会话行为（#9052、#9311），快捷键可配置化（#9514），键位在 select 列表中未生效（#7629），长工具调用折叠（#9517）。
- **认证与凭据管理**：OAuth 回调页自定义与渲染函数公开（#5372、#6930）、扩展持久化 API key（#7658）、并行启动凭据竞态（#8928）、Vertex/GCP 鉴权（#5323）。
- **模型与 provider 参数保真**：`samplingParams` 被丢弃（#9505）、Bedrock usage 口径归一化（#9489）、会话中途 system message（#9116/#9117）。
- **性能与搜索**：模糊会话搜索扫描成本（#9267），以及工具调用聚合展示以缓解长上下文阅读负担。

## 开发者关注点

- **稳定性优先**：`openai-codex` 卡死在 `Working...`（#4945）与并行启动误报无 API key（#8928）都是会中断工作流的问题，社区反应最强烈。
- **平台一致性成本高**：Windows 上"运行 Pi 的方式太多"（#7547），需要官方收敛路径与文档，否则 bug、文档、支持精力被分散。
- **静默失败最危险**：`find` 工具对 Windows glob 静默返回空（#9262）、示例脚本因未知参数直接退出（#9205），这类无报错行为容易让用户与 agent 产生错误判断。
- **扩展生态的基础设施缺口**：无法持久化凭据（#7658）、reload 重复副作用（#6108）、内部 HTML 渲染函数未公开（#6930），限制了扩展作者的能力边界。
- **终端兼容性长尾**：Termux 多行粘贴（#7321）、Windows Terminal 的 Shift+Enter（#7175，已关闭为 no-action），说明输入层兼容仍是持续摩擦点。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报 · 2026-09-12

数据来源：github.com/QwenLM/qwen-code

---

## 1. 今日速览

今日社区焦点集中在**多模型兼容性与请求管线正确性**：DashScope 聚合网关的 `metadata` 字段导致非 Qwen 模型返回 400，已有对应修复 PR（#11606）；同时 `reasoning` / tool-call 邻接不变式在 Responses 管线和 Fireworks 侧均出现问题。TUI 稳定性（React #185 崩溃、VP 退出脏状态）与 Goal/checkpoint 校验逻辑也是当日讨论密集区。

---

## 2. 版本发布

**v0.23.3-nightly.20260911.aaa6a32aae**（nightly）

- `refactor(dingtalk)`: 移除过时的后台响应聚合逻辑（PR #11570）
- `feat(channels)!`: 渠道相关破坏性变更（标题截断为 "remove me"）

链接：https://github.com/QwenLM/qwen-code/pull/11570

---

## 3. 社区热点 Issues（10 条）

1. **#11500 [P1][bug][ui] TUI 在多个后台 agent 相继完成时静默退出（未捕获 React #185）**
   Ink `useBoxMetrics` 布局监听器触发 setState 循环，导致 "Maximum update depth exceeded"，进程直接掉回 shell 且无错误提示。8 条评论为当日最高，属影响交互式使用的 P1 级崩溃。
   https://github.com/QwenLM/qwen-code/issues/11500

2. **#11590 [P1][bug][integration] 非 Qwen 厂商模型因自动插入 metadata 报 400**
   请求发往 DashScope OpenAI 兼容端点时会在顶层塞入 `metadata` 对象，聚合网关将其转发给厂商后端（如 ZHIPU/GLM-5.3-Flash），对方结构体中 `metadata` 为 string 类型，反序列化失败导致该模型在 Qwen Code 中完全不可用。
   https://github.com/QwenLM/qwen-code/issues/11590

3. **#11665 [P2][bug][core] Responses 清理可能破坏 reasoning/tool-call 邻接性**
   replayed `reasoning` item 与其所属 `function_call` 必须作为整体处理，当前两处转换会破坏该不变式，属请求管线正确性缺陷。
   https://github.com/QwenLM/qwen-code/issues/11665

4. **#11657 [P1][bug][core] Fireworks 上 Qwen3 tool-call 续传因镜像 messages[].reasoning 报 400**
   0.23.3 在 Fireworks + Qwen 3.8 Max 上，首次响应可正常返回 reasoning 与 tool call，但续传请求失败，与 #11665 同属 reasoning 回放问题族。
   https://github.com/QwenLM/qwen-code/issues/11657

5. **#11556 [P1][bug][vscode] vscode-ide-companion 0.23.1 在 Remote-SSH 下无法工作，webview 卡在加载**
   客户端 1.133.0 / 服务端 1.137.0（linux-arm64）环境复现，直接影响 IDE 集成在远程开发场景的可用性。
   https://github.com/QwenLM/qwen-code/issues/11556

6. **#11610 [P1][hooks] 呼吁将 hook 契约与 Claude Code 对齐**
   涉及纯文本 stdout、`stop_hook_active`、timeout 单位、matcher、通用输入等。qwen-code hooks 引擎在事件分发、多 hook 聚合、HTTP hook 加固、Stop-hook 上限、进程树取消上已结构性对齐，剩余差异点正在收敛。
   https://github.com/QwenLM/qwen-code/issues/11610

7. **#11666 [P2][telemetry] logPrompts=false 时仍导出 API 请求内容（已关闭）**
   启用遥测时，`api_request.request_text` 属性仍包含完整 API 请求内容，属数据隐私问题，已在 main（4a029e64）上确认并关闭。
   https://github.com/QwenLM/qwen-code/issues/11666

8. **#11695 [P2][core][security] 追踪议题：将 agent harness 与执行环境分离**
   提出让工具执行位置成为运行时可分离、可寻址的部分，而非 agent loop 进程的属性，是 roadmap/multi-agent 方向的基础性架构提案。
   https://github.com/QwenLM/qwen-code/issues/11695

9. **#11577 [P2][core] Goal checkpoint 在窗口溢出时以相同请求无限重试**
   证据窗口溢出的 Goal 每轮以完全相同的请求重试 checkpoint，一次失败即同样失败三次，最终由 stall breaker 终止 Goal。配套分裂议题 #11689 处理 `stripCodeFence` 回溯与 fenced reply 拒绝问题。
   https://github.com/QwenLM/qwen-code/issues/11577

10. **#11710 [P2][cli] Virtual Viewport 在部分终端退出后留下脏状态**
    Ctrl-D / Ctrl-C / /exit / /quit 任一方式退出后终端状态未恢复，摘要闪现即消失，后续使用 `nano` 出现异常，属终端 UX 高频反馈。
    https://github.com/QwenLM/qwen-code/issues/11710

（另注：#11499 `.mcp.json` 中 `${VAR}` 占位符未展开，headers 明文发送，P2 配置类问题值得跟进；#9693 Windows 下 MCP STDIO -32000 已挂 need-retesting。）

---

## 4. 重要 PR 进展（10 条）

1. **#11606 fix(dashscope): 仅对 qwen 系列模型发送请求 metadata**
   只在线路模型属于 qwen family 时携带 DashScope `metadata` 对象，并提供 `enableRequestMetadata` 覆盖开关——直接回应 #11590 的非 Qwen 模型 400 问题。
   https://github.com/QwenLM/qwen-code/pull/11606

2. **#11711 feat(core): 为 subagent 增加容器执行**
   通过 `QWEN_AGENT_EXECUTION_BACKEND` 让可信操作者启用 Docker 或 Podman，Agent 工具可选择 `execution_backend: "container"`，是 #11695 harness/执行环境分离方向的首个落地实现。
   https://github.com/QwenLM/qwen-code/pull/11711

3. **#11548 feat(web-shell): 支持本地与远程工作区**
   为独立 Web Shell 增加远程 daemon 连接，本地与远程项目同列侧边栏，用户可选择计算机、浏览并显式确认目录、可选命名工作区。
   https://github.com/QwenLM/qwen-code/pull/11548

4. **#11642 fix(vscode): 优雅关闭 ACP CLI 而非直接 kill**
   VS Code Companion 先关闭 stdin，让 CLI 走正常关闭路径：SessionEnd hooks、MCP 关闭、session 释放与进程清理，改善 IDE 集成的资源回收。
   https://github.com/QwenLM/qwen-code/pull/11642

5. **#11713 fix(vscode): 统一会话历史并移除来源切换**
   用单一历史列表替换 #11584 引入的 VS Code / Terminal 来源选择器，Terminal、浏览器、VS Code 及历史会话共享入口。
   https://github.com/QwenLM/qwen-code/pull/11713

6. **#11669 fix(core): 防止内部 git 调用受用户配置的 helper 程序干扰**
   在相关命令边界禁用 fsmonitor helper、外部 diff/textconv 程序与签名程序，部分 status 探测同时禁用可选 index 写入。
   https://github.com/QwenLM/qwen-code/pull/11669

7. **#11623 fix(core): 在 Windows 上回收残留的 hook 进程树**
   此前 Windows 上取消"父进程退出后仍存活"的 hook 时清理路径为空操作，detached supervisor 启动的 shell 无人回收，此 PR 修复该问题。
   https://github.com/QwenLM/qwen-code/pull/11623

8. **#7837 fix(cli): 协调终端 teardown**
   为交互式会话提供单一同步、幂等的终端清理，且先于异步资源清理执行，覆盖正常清理、直接退出、SIGINT/SIGTERM/SIGHUP——与 #11710 的 VP 脏状态问题直接相关。
   https://github.com/QwenLM/qwen-code/pull/7837

9. **#11714 fix(dingtalk): 保留平台归一化后的 mention**
   移除 DingTalk 对首个 `@...` token 的第二次启发式删除，直接透传适配器归一化文本，与 nightly 中 dingtalk refactor（#11570）呼应。
   https://github.com/QwenLM/qwen-code/pull/11714

10. **#11625 chore(pnpm): 以 package-lock 约束 pnpm-lock 并声明 hoisted imports**
    为双 lockfile 方案补齐一致性门禁，是 #10444 Stage 1 评审后的跟进项。
    https://github.com/QwenLM/qwen-code/pull/11625

---

## 5. 功能需求趋势

- **IDE 与远程开发集成**：`vscode-ide-companion` 在 Remote-SSH 下不可用（#11556）、ACP CLI 关闭方式（#11642）、会话历史统一（#11713）集中出现，roadmap/ide-integration 是活跃方向。
- **多模型/多厂商互通**：DashScope 聚合网关 metadata 兼容（#11590）、Fireworks reasoning 回放（#11657）、模型切换时的 reasoning metadata 串味（#9453）、OpenAI Responses 邻接不变式（#11665）共同指向跨 provider 请求语义统一。
- **MCP 配置与可靠性**：`${VAR}` 占位符不展开（#11499）、Windows STDIO 连接失败（#9693），配置正确性与跨平台支持是持续诉求。
- **Hooks 生态对齐**：与 Claude Code 契约对齐（#11610）、Stop-hook 封顶在工具往返后重置（#11673），hooks-events roadmap 讨论活跃。
- **平台分布与移动端**：新增官方 Android companion（thin client for `qwen serve`/ACP）提案（#11704），属 platform-distribution 的 need-discussion 阶段。
- **沙箱与多 agent 架构**：harness 与执行环境分离（#11695）及其容器化实现（#11711），指向多 agent 与安全隔离方向。
- **终端 UX 与渲染**：VP 退出脏状态（#11710）、VP 短内容底对齐（#9305）、web_search 引用标题设计（#11564，已关闭）。
- **Web Shell / daemon**：本地+远程工作区（#11548）、Shell 与 Monitor 任务输出展示（#10906）、扩展按 workspace runtime 作用域（#11086）。

---

## 6. 开发者关注点

- **交互式稳定性优先**：TUI 静默崩溃（React #185，P1）与终端退出脏状态是两个最直观的体验痛点，且都与渲染/清理路径相关。
- **"模型不可用"类问题最伤用户**：非 Qwen 模型因自动注入字段而整体报 400，问题不在模型本身而在客户端请求构造，用户侧难以自行绕过。
- **reasoning 回放语义是系统性风险**：多个 P1/P2 issue（#11665、#11657、#9453）同源，涉及 reasoning item 与 tool call 的绑定、跨 provider 字段复用（`Part.thoughtSignature`）。
- **隐私与默认值**：`logPrompts=false` 仍导出请求内容（#11666）虽已关闭，但说明遥测默认行为需要更严格的审查。
- **跨平台一致性**：Windows 上的 MCP STDIO（#9693）与 hook 进程树回收（#11623）显示 Windows 路径长期处于补课状态。
- **重复失败应可区分**：Goal checkpoint 以相同请求重试直至 stall breaker 触发（#11577），开发者期望失败重试具备信息增量而非机械重复。
- **双 lockfile 与构建一致性**：pnpm-lock/package-lock 门禁（#11625）、playwright 版本对齐（#11336）反映仓库工具链治理仍在收尾。
- **审查流程负担**：多条 issue/PR 标注 need-discussion、ready-for-human、autofix/needs-human 及 deferred review findings（#11587、#11336），显示自动修复循环与人工评审之间的边界是当前工程关注点。

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI 社区动态日报（2026-09-12）

> 数据来源：github.com/Hmbown/DeepSeek-TUI（仓库内实际链接为 Hmbown/Codewhale）

## 今日速览

今日无新版本发布。社区最重磅的动态是 **DeepSeek 计划于 2026-09-14 12:00（北京时间）下线 V4 Pro 服务**（#6025），所有 Pro 模型请求将被路由至 V4.1 Flash 并按新计费执行，直接影响用户模型配置。同时，围绕 TUI 稳定性的多个 bug 在今日集中关闭，包括会话恢复失败（#6102）、Windows 窗口控制阻塞（#5923）、MCP 服务器认证死锁（#6030）以及插件安装提示无法永久忽略（#6031）。

## 版本发布

无新版本发布。

## 社区热点 Issues

1. **#6025 [CLOSED] DeepSeek 计划 9 月 14 日下线 V4 Pro 服务** — 影响最大的外部变更：Pro 请求将全部路由至 V4.1 Flash 并改变计费。社区已有 5 条评论，属需要用户尽快调整配置的时效性事件。
   https://github.com/Hmbown/DeepSeek-TUI/issues/6025

2. **#5316 [OPEN] EPIC-005: CodeWhale TUI Crate 拆解（总纲）** — 评论数最高（22 条）的长期架构议题，覆盖 C03–C10 的归属、依赖顺序与完成证据，反映项目正在推进 crate 模块化重构。
   https://github.com/Hmbown/DeepSeek-TUI/issues/5316

3. **#5620 [CLOSED] 上下文压力警告是瞬时的，Agent 不会主动响应** — 中等级别但"静默降级"的运行时问题，涉及 agent turn 元数据与上下文压缩。17 条讨论后关闭，说明上下文管理是核心痛点。
   https://github.com/Hmbown/DeepSeek-TUI/issues/5620

4. **#5929 [OPEN] codewhale-tui 库测试并行执行不稳定（跟踪）** — 6 个测试在负载下失败、单独运行通过，均由维护者 Hmbown 跟踪。影响 CI 可信度，是工程质量的直接信号。
   https://github.com/Hmbown/DeepSeek-TUI/issues/5929

5. **#6045 [CLOSED] 用户输入弹窗裁剪选项、隐藏已输入内容** — 固定 22 行上限、居中浮层、无滚动、无返回导航。真实终端下模型提问对话框不可靠，已修复关闭。
   https://github.com/Hmbown/DeepSeek-TUI/issues/6045

6. **#6018 [OPEN] 全新安装下的 Google Gemini 问题** — 关联 Core 执行计划 C22，影响新用户首次接入 Gemini 的体验。
   https://github.com/Hmbown/DeepSeek-TUI/issues/6018

7. **#5856 [OPEN] Computer-use 插件：实时安装回执 + 首个 look-act 循环** — 被标记为 release-blocker 的工具类增强，评论确立了"内置即无独立安装仪式"的验收路径。
   https://github.com/Hmbown/DeepSeek-TUI/issues/5856

8. **#6017 [OPEN] CodeWhale 能否支持跨会话持久记忆？** — MemCode 创始人 Vivek Gupta 提交，主张用持久记忆在会话间携带项目上下文与用户偏好，代表外部集成诉求。
   https://github.com/Hmbown/DeepSeek-TUI/issues/6017

9. **#5268 [CLOSED] 轮次中控制（排队/立即发送/Esc 保留草稿）+ 命名等待** — TUI 交互体验增强，解决"运行中聊天框被锁死"的操作感问题。同批关闭的还有 #5271（会话窥视）与 #5269（持久计划产物）。
   https://github.com/Hmbown/DeepSeek-TUI/issues/5268

10. **#6102 / #6098 / #6097 [CLOSED] 会话恢复、execpolicy、子 Agent 权限三连修** — 会话恢复 ENOENT、heredoc 正文误匹配 deny 规则、子 Agent 工具循环不执行 permissions.toml 规则，均为安全与可靠性关键修复。
    https://github.com/Hmbown/DeepSeek-TUI/issues/6102
    https://github.com/Hmbown/DeepSeek-TUI/issues/6098
    https://github.com/Hmbown/DeepSeek-TUI/issues/6097

## 重要 PR 进展

1. **#6110 [OPEN] 新增确定性音视频宠物世界与 TUI Watch** — 将此前散落在兄弟目录、未提交的 pet 源码整理为可构建的 `pet/` 包，含 event-v1 分桶器、确定性世界/计分、回放与检查点、可移植宿主。
   https://github.com/Hmbown/DeepSeek-TUI/pull/6110

2. **#5842 [CLOSED] feat(runtime-api): 通过 /v1/apps 提供插件与市场管理（Engine 侧）** — 本地插件系统的 Engine 实现，门禁全绿、dead-code 预算 425 通过，App 侧另行跟进。
   https://github.com/Hmbown/DeepSeek-TUI/pull/5842

3. **#6100 [OPEN] feat(web_search): 新增 Serply 搜索 Provider** — 为 Web 工具增加 `provider = "serply"`，调用 `GET api.serply.io/v1/search`，沿用 #2790 中 Sofya 适配器的形态。
   https://github.com/Hmbown/DeepSeek-TUI/pull/6100

4. **#6096 [OPEN] feat(commands): TUI 会话导出切片采用 capability 形态（FEAT-025）** — 将 `/export`（别名 `/daochu`）改接到可移植命令契约，纯结构性迁移，无用户可见行为变更。
   https://github.com/Hmbown/DeepSeek-TUI/pull/6096

5. **#6056 [CLOSED] feat(session): 以 tar.xz 导出全保真会话归档** — 作为面向分享、有损的 `/export` markdown 的机器侧补充，一条命令打包完整持久会话记录，支持 CLI 与库内嵌宿主。
   https://github.com/Hmbown/DeepSeek-TUI/pull/6056

6. **#6054 [CLOSED] feat(execpolicy): 规则集 deny 匹配表达力增强** — 为 deny 前缀匹配器增加四项能力，覆盖真实数据外泄与破坏性命令所用的向量，例如 cmd.exe 单字母斜杠标志（`/f`、`/s`、`/q`）可像 `-` 标志一样跨位置/顺序跳过。
   https://github.com/Hmbown/DeepSeek-TUI/pull/6054

7. **#5996 [CLOSED] docs(config): 记录 R1 轮次预算并补充 [goal] 示例** — 将 `[tui].max_model_steps` 与 `[tui].turn_wall_clock_secs` 从配置示例注释提升到 `docs/CONFIGURATION.md` 键参考。
   https://github.com/Hmbown/DeepSeek-TUI/pull/5996

8. **#5990 [CLOSED] fix(test): 裁剪阈值改用记录的 timestamps，而非固定 6 秒** — 修复仅 Windows 出现的测试 flake，属 #5929/#5980 之外的同类问题，提升测试稳定性。
   https://github.com/Hmbown/DeepSeek-TUI/pull/5990

9. **#5984 [CLOSED] docs: 历史项目名为 DeepSeek-TUI，而非 "DeepSeek CLI"** — 修正 LICENSE 与 app-server 文档注释中的版权署名，无行为变更。
   https://github.com/Hmbown/DeepSeek-TUI/pull/5984

10. **#5985 [CLOSED] chore(gh): 贡献门禁放行 @goransh-walia** — 解决外部贡献者每次推送七个工作流都停在 `action_required`、导致 PR 两次显示停滞的问题。
    https://github.com/Hmbown/DeepSeek-TUI/pull/5985

> 另有 5 个 Dependabot 依赖升级（#6103 dirs 6.0.0→7.0.0、#6104 encoding_rs、#6105 rustls、#6106 lru、#6107 flate2），其中 `dirs` 为主版本跃升，需留意兼容性。

## 功能需求趋势

- **模型与 Provider 适配**：V4 Pro 下线（#6025）、Gemini 全新安装问题（#6018）、自定义/网关 Provider 的按模型 `context_window` 覆盖（#6108）、新增 Serply 搜索 Provider（#6100），显示多模型与 Provider 灵活性是持续焦点。
- **架构模块化**：EPIC-005 的 TUI crate 拆解（#5316）与 `crates/core` 的提示词组装 + 角色分层（#5263）表明项目正系统性地从单体走向模块化。
- **Agent 运行时可靠性**：上下文压力响应（#5620）、并行测试 flake（#5929）、会话恢复（#6102）、MCP 中途认证死锁（#6030）。
- **权限与安全策略**：子 Agent 不执行 permissions.toml（#6097）、deny 规则误匹配 heredoc 正文（#6098）、deny 匹配表达力增强（#6054），权限体系正在被系统性补齐。
- **TUI 交互体验**：轮次中控制（#5268）、会话窥视（#5271）、持久计划产物（#5269）、输入弹窗修复（#6045）。
- **扩展与生态**：计算机使用插件（#5856）、插件市场管理（#5842）、插件安装提示无法永久忽略（#6031）、第三方持久记忆集成（#6017）。
- **会话数据可携带**：全保真 tar.xz 归档（#6056）与命令契约迁移（#6096）。

## 开发者关注点

- **外部服务变更的连锁影响**：V4 Pro 下线要求用户主动修改模型配置与预算预期，这是今日最需要用户行动的事项。
- **"静默降级"类问题最受抵触**：上下文压力不主动响应（#5620）与会话恢复直接报错（#6102）都属用户难以察觉或无法自救的失败模式。
- **权限规则的一致性缺口**：同一份 `permissions.toml` 在父级交互循环、ACP 适配器、子 Agent 工具循环中行为不一致（#6097），是操作者对安全边界信任的关键风险。
- **配置不便忽略的重复打扰**：插件安装提示仅内存级 dismiss，导致每个新会话重复询问（#6031），被创始人直接抱怨。
- **测试与 CI 可信度**：并行 flake（#5929）与 Windows 专项 flake（#5990）说明测试套件在负载与跨平台下的稳定性仍是工程债务。
- **文档与代码不同步**：R1 轮次预算仅存在于示例注释中（#5996）、版权署名沿用错误的历史项目名（#5984），反映文档维护需要跟上配置演进。

</details>

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar) 自动生成。*