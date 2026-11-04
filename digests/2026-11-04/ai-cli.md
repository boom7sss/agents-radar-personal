# AI CLI 工具社区动态日报 2026-11-04

> 生成时间: 2026-11-04 18:00 UTC | 覆盖工具: 9 个

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

# AI CLI 工具生态横向对比分析（2026-11-04）

## 1. 生态全景

当前 AI CLI 工具已进入"**功能补齐后的可靠性竞争**"阶段：今日 9 个有动态的工具中，高热度议题几乎全部是缺陷、挂起、静默失败与安全边界问题，而非新能力发布。成本与上下文效率、可撤销/可回滚的 Agent 操作、企业环境可用性三条主线同时浮现，反映出用户已从"能不能用"转向"敢不敢托付"。与此同时，各工具的 CI 自身稳定性（Qwen Code 的 bot 噪声、DeepSeek TUI 的主干编译失败）开始成为贡献者体验的隐性瓶颈。版本节奏上，多数工具处于小版本或预发布迭代，未见重大架构发布。

## 2. 各工具活跃度对比

> 数据严格依据原文；原文未给出绝对 Issue/PR 总数的，标注为"原文列举条目数"，不可等同于仓库总量。"—"表示原文未提供。

| 工具 | Release 情况 | 热点 Issues（原文列举/最高评论） | 重要 PR（原文列举） | 社区信号 |
|---|---|---|---|---|
| Claude Code | v2.1.318 | 10 条主列（#18435：234 评论/999👍） | 2 条（均 OPEN） | 高互动，UI 重设计与成本议题集中 |
| OpenAI Codex | rust-v0.168.0-alpha.1；libcap-v2.75（构建用） | 10 条主列（#59060：276 评论） | 10 条（均 CLOSED，copyberry bot） | 安全事故类议题主导 |
| Gemini CLI | v0.67.0-nightly | 10 条主列（#22323：13 评论） | 10 条 | Subagent 稳定性为焦点，PR 活跃 |
| GitHub Copilot CLI | 3 个预发布（1.0.106-7/8/9） | 10 条主列（#4438：15 评论/19👍） | 2 条（均 OPEN） | 企业策略问题集中 |
| Kimi Code CLI | 无活动 | — | — | 当日静默 |
| OpenCode | 无新 Release（#61522 待合入） | 10 条主列（#59387：274 评论） | 10 条 | 免费额度争议 + 模型层重构 |
| Pi | 无新 Release | 10 条主列（#7730：25 评论/12👍） | 10 条 | TUI/终端兼容修复收尾 |
| Qwen Code | v0.26.7 | 10 条主列（#14724：166 评论） | 10 条 | CI 噪声淹没真实讨论 |
| DeepSeek TUI | 无新 Release | 5 条（全部，最高 #5316：36 评论） | 11 条（全部） | 桥接与平台修复为主 |

## 3. 共同关注的功能方向

- **可撤销/可回滚的 Agent 操作**：Codex `/rewind` 检查点恢复（#11626，229👍）；DeepSeek TUI `/patch-undo` 忽略 `turn_id` 撤销错误轮次（#7216）；Pi 编辑器恢复时保留粘贴内容（#10146）。开发者期望 Agent 操作具备与手工开发同等的可逆性。

- **上下文与成本效率**：Claude Code 子代理描述延迟加载（#106705，14k tokens/会话）与后台子代理 Read 循环（#106556，19k 次读取）；Gemini CLI AST 感知读取以减回合（#22745）；OpenCode `@opencode/ai` 成本计算（#61717）；Codex 项目指令字节预算警告（#59445）。用量可见性与上下文治理成为一致诉求。

- **静默失败与"假成功"**：Gemini CLI MAX_TURNS 误报 GOAL 成功（#22323）、Codex 项目/设置静默丢失与指令静默截断（#42739、#51917、#59445）、DeepSeek TUI `grep_files` 静默返回空（#7215）与 WeCom 消息静默截断（#7209）。"失败但无提示"是跨工具共性的信任杀手。

- **会话连续性与恢复**：Claude Code 自动更新归档 Remote Control 会话（#103005）、Gemini CLI 桌面崩溃残留后端（#14600）、Qwen Code 崩溃后无法重连（#14600 同列）、Copilot CLI `--resume` 落入空会话（#5228）、OpenCode 侧边栏会话丢失（#61672）。会话状态在多界面、崩溃、重连下保持一致是普遍缺口。

- **企业/受管环境可用性**：Copilot CLI 托管策略刷新失败、计费实体、Entra 令牌缓存（#5109、#4005、#5236、#5341）；Claude Code 企业网关 `assume_role`（v2.1.318）；Pi 自更新被 MDM 拦截（#11614）。企业落地是新的分水岭。

- **终端/TUI 与平台一致性**：Pi 的 tmux/Zellij/Kitty 兼容（#9656、#10628、#11584）、OpenCode 转义序列分片（#60268）、Gemini CLI Wayland（#21983）、Copilot CLI WSL2 keyring（#49）、DeepSeek TUI Windows 剪贴板与 junction（#7217–#7219）。跨平台与深层终端链路是长期摩擦带。

- **工具发现与工具规模上限**：Gemini CLI MCP 工具分页丢失（#29843/#29846）与 >128 工具 400 错误（#24246）；DeepSeek TUI `grep_files` glob（#7215）；Pi MCP schema `$ref` 解析（#11803）。工具注册与发现需要系统化治理。

## 4. 差异化定位分析

| 工具 | 功能侧重 | 目标用户 | 技术路线特征 |
|---|---|---|---|
| Claude Code | 企业网关、桌面/Remote Control、多账号 | 企业团队 + 重度付费用户 | 闭源产品化，mods/effort 等可配置层扩展 |
| OpenAI Codex | 云线程/Guardian 上下文预算、Computer Use、浏览器 | 平台化开发者 | Rust 主体、CLOSED 批量 bot PR、云+本地双轨 |
| Gemini CLI | Subagent 体系、AST 代码理解、MCP | 开源生态开发者 | nightly 快迭代，ACP、主题/统计等 CLI 深化 |
| GitHub Copilot CLI | 终端集成（OSC 7501、Kitty）、企业策略、ACP | 企业 + GitHub 生态用户 | 预发布高频，终端厂商协作 |
| OpenCode | 免费层、模型层重构、MCP OAuth | 个人开发者/低成本用户 | `@opencode/ai` 模型类收敛、堆叠式重构 |
| Pi | TUI 渲染、多 provider、pi-durable 会话同步 | 终端极客/自托管 | 终端协议深适配、多设备同步实验 |
| Qwen Code | managed-agent 多租户、Java 控制面 | 自托管/企业部署 | Java 控制面 + MySQL，容量与锁优化 |
| DeepSeek TUI | IM 桥接（WeCom）、Windows 体验 | 移动端/IM 场景 + Windows 用户 | Rust，桥接生产化、工具体系一致性 |
| Kimi Code CLI | — | — | 当日无动态 |

## 5. 社区热度与成熟度

- **讨论热度最高**：OpenAI Codex（#59060 达 276 评论）、Claude Code（#18435 999👍）、OpenCode（#59387 274 评论）。三者体量大、议题两极（安全事件、产品需求、额度争议）。
- **快速迭代期**：Gemini CLI（nightly + 10 条 PR 含热力图/主题/错误格式化）、Copilot CLI（单日 3 个预发布）、OpenCode（5 个堆叠重构 PR）、Pi（单日 10 条 PR 含 8 条 CLOSED，修复收尾快）。迭代活跃但稳定性议题同步高发。
- **维护节奏偏收敛**：Claude Code 与 Copilot CLI 当日仅各 2 条 PR，PR 通道较窄；Codex 以 bot 批量 CLOSED PR 为主，人工贡献信号弱。
- **治理性风险**：Qwen Code 的真实讨论被 bot CI 报告淹没（#14724 达 166 评论、GITHUB_TOKEN 限流 #16188），社区信号质量受损；DeepSeek TUI 主干编译失败（#7148）一度冻结外部贡献。
- **静默**：Kimi Code CLI 当日无活动，无法据此判断成熟度。

## 6. 值得关注的趋势信号

1. **"可靠性与可逆性"正在取代"能力"成为竞争核心**：今日最高赞/最高评论议题几乎全是回滚、恢复、失败上报。对开发者的参考价值——评估工具时应优先看失败可观测性与撤销能力，而非模型跑分。

2. **安全边界进入实证阶段**：Codex #59060（破坏性运维指令）、Gemini CLI 破坏性 git 操作（#22672）、Claude Code 误报安全拒绝（#107248）。Agent 需要破坏性操作的确认层与沙箱边界，这是采购决策的硬指标。

3. **成本治理成为一等公民**：用户已能用具体数字量化浪费（14k tokens、19k 次 Read）。上下文工程（延迟加载、字节预算、压缩期消息保留）正从优化项变为基础能力。

4. **企业受管环境是新战场**：托管策略、SSO/Entra、计费实体、MDM 拦截问题在 Copilot CLI、Claude Code、Pi 同时出现，企业落地摩擦集中在身份与策略层。

5. **"静默失败"是最高 ROI 的改进点**：跨工具的静默截断、空结果、假成功、设置丢失反复出现。修复成本低、体验收益高，是贡献者切入的优选方向。

6. **CI 与仓库自身健康度成为贡献者体验前提**：Qwen Code 的 bot 噪声、DeepSeek TUI 的主干编译冻结说明——基础设施治理决定社区能否有效贡献。

7. **终端生态协作明朗化**：OSC 7501 状态上报（Copilot CLI）、Kitty 内联图片、tmux/Zellij passthrough（Pi）显示 CLI 与终端厂商的协议对齐正在成为产品差异化点。

---
*说明：本报告仅基于所提供的 9 个工具当日摘要，Kimi Code CLI 当日无活动未纳入分析；各工具仓库绝对 Issue/PR 总量原文未提供，活跃度对比以原文列举条目与互动数据为依据。*

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告

数据来源：github.com/anthropics/skills（数据截止 2026-11-04）

> 说明：所提供的 PR 数据中评论数均缺失（显示为 undefined），且无任何 PR 被标记为 merged。因此"热门排行"按更新活跃度与讨论关联度（关联 Issue 评论、被引用的修复目标）排序，并注明这一口径限制。

## 1. 热门 Skills 排行（基于 PR 活跃度与关联讨论）

1. **webapp-testing 修复系列**（PR #1980 / #1976，作者 Pcmhacker-piro、gerardrecinto，OPEN）
   功能：修复 Web 应用测试 Skill 的 `with_server.py` 用 `shell=True` 启动服务带来的命令注入风险，以及 `element_discovery.py` 对 textarea/select 元素识别错误。
   热点：安全加固与元素发现正确性；两个 PR 均更新至 2026-11-01/10-18，是近期最活跃的模块。
   链接：https://github.com/anthropics/skills/pull/1980 ；https://github.com/anthropics/skills/pull/1976

2. **skill-creator 修复系列**（PR #1298 / #1681 / #1997，作者 MartinCajiao、Kuldeeep18、BichengWang，OPEN）
   功能：修复触发评估误判（Windows 下 subprocess select 失败、运行时错误被吞）、`package_skill.py` 直接执行报 ModuleNotFoundError、YAML frontmatter 解析不准确。
   热点：Skill 自身工具链的可靠性与跨平台（Windows）支持，累计 3 个 PR 指向同一 Skill。
   链接：https://github.com/anthropics/skills/pull/1298 ；https://github.com/anthropics/skills/pull/1681 ；https://github.com/anthropics/skills/pull/1997

3. **mcp-builder: 支持 mcp>=2 新 API**（PR #1742，作者 Kuldeeep18，OPEN，修复 #1668）
   功能：适配 `streamablehttp_client` → `streamable_http_client` 的改名，并改用 `create_mcp_http_client` 配置自定义请求头。
   热点：MCP 生态版本演进对 Skill 的兼容性冲击。
   链接：https://github.com/anthropics/skills/pull/1742

4. **docx 修复**（PR #1792 / #1734，作者 TINGyu123644、rohitjain25，OPEN）
   功能：LibreOffice 超时被误报为成功、输出 DOCX 修订标记未清除、孤立批注检测。
   热点：Office 文档 Skill 的静默失败问题（"报成功但结果错误"）。
   链接：https://github.com/anthropics/skills/pull/1792 ；https://github.com/anthropics/skills/pull/1734

5. **xlsx: 外部链接风险检测修复**（PR #2019，作者 reginaldalfret，OPEN，修复 #2013，更新至 2026-11-03）
   功能：`external_links_at_risk` 支持工作表级 defined names 与别名，消除漏报。
   热点：Excel 公式引用完整性。
   链接：https://github.com/anthropics/skills/pull/2019

6. **Pyxel 复古游戏开发 Skill**（PR #525，作者 kitao，OPEN，自 2026-03-05 持续更新至 2026-11-01）
   功能：指导用 Python 开发、调试、验证复古游戏，支持无头输入驱动运行与逐帧检查。
   热点：长期存活的社区新增 Skill 提案，跨 8 个月仍在迭代。
   链接：https://github.com/anthropics/skills/pull/525

7. **document-typography 排版质检 Skill**（PR #514，作者 PGTBoos，OPEN）
   功能：防止 AI 生成文档中的孤词换行、寡行段落、编号错位等排版问题。
   热点：文档"最后一公里"质量。
   链接：https://github.com/anthropics/skills/pull/514

8. **新增功能型 Skill 提案**（PR #1245 双 Skill、#1771 智能合约审计、#1703 Markdown 转视频、#1615 SCNet HPC，均 OPEN）
   功能：Notion 规格转实现 + 量化简历审计；Solidity/Rust 静态审计并将证明锚定到 TON 区块链；Markdown 生成带配音 MP4；SCNet 超算集群 SSH/Slurm 操作。
   热点：垂直领域与外接生态（Web3、HPC、媒体生成）的扩展尝试。
   链接：https://github.com/anthropics/skills/pull/1245 ；https://github.com/anthropics/skills/pull/1771 ；https://github.com/anthropics/skills/pull/1703 ；https://github.com/anthropics/skills/pull/1615

## 2. 社区需求趋势（来自 Issues）

- **安全与信任边界**：Issue #492（46 评论，全场最高）指出社区 Skill 以 `anthropic/` 命名空间分发，冒充官方 Skill，存在信任边界滥用风险。这是社区最集中的安全诉求。
  链接：https://github.com/anthropics/skills/issues/492
- **组织级共享与分发**：Issue #228（17 评论，👍8）希望在 Claude.ai 内建立组织共享 Skill 库，替代手动下载 .skill 文件并逐个上传。
  链接：https://github.com/anthropics/skills/issues/228
- **Skill 触发与评估可靠性**：Issue #556（13 评论，👍7）报告 `run_eval.py` 在所有查询下触发率为 0%，评估机制本身失真。
  链接：https://github.com/anthropics/skills/issues/556
- **上下文预算/Token 效率**：Issue #1487 指出 `claude-api` Skill 单次工具调用注入约 156k tokens 耗尽上下文；Issue #202 批评 skill-creator 写成了人读文档而非可执行指令。
  链接：https://github.com/anthropics/skills/issues/1487 ；https://github.com/anthropics/skills/issues/202
- **新 Skill 方向**：记忆压缩（Issue #1329 compact-memory）、推理质量门控（Issue #1385 三段式校准→对抗评审→交付验证）、智能体治理（Issue #412 agent-governance，已关闭）。
  链接：https://github.com/anthropics/skills/issues/1329 ；https://github.com/anthropics/skills/issues/1385 ；https://github.com/anthropics/skills/issues/412
- **Skill 描述规范**：Issue #2064 指出 theme-factory 的 description 只说明"做什么"、未说明"何时使用"，影响触发准确率。
  链接：https://github.com/anthropics/skills/issues/2064

## 3. 高潜力待合并 Skills

- **PR #2019（xlsx 外部链接修复）**：更新至 2026-11-03，修复目标明确（#2013），改动范围局部，落地门槛低。
  https://github.com/anthropics/skills/pull/2019
- **PR #1980 / #1976（webapp-testing 安全与正确性）**：2026-11-01 仍在更新，安全类修复通常优先级较高。
  https://github.com/anthropics/skills/pull/1980 ；https://github.com/anthropics/skills/pull/1976
- **PR #1792（docx 超时误报为成功）**：修正"假成功"，属于可靠性核心问题。
  https://github.com/anthropics/skills/pull/1792
- **PR #1742（mcp-builder 适配 mcp>=2）**：阻断性问题（旧 import 在新版本下直接失效），随 mcp 2.x 普及紧迫性上升。
  https://github.com/anthropics/skills/pull/1742
- **PR #1977（algorithmic-art wrapAround 越界）**：小型确定性修复，修复 #1897。
  https://github.com/anthropics/skills/pull/1977
- **PR #1997 / #1681（skill-creator 解析与可执行性）**：影响所有 Skill 创建者的输入链路。
  https://github.com/anthropics/skills/pull/1997 ；https://github.com/anthropics/skills/pull/1681

## 4. Skills 生态洞察

当前社区在 Skills 层面最集中的诉求是**"可靠性与信任"**——PR 侧几乎全是修复静默失败、安全注入、平台兼容和版本适配的补丁，Issue 侧最热议题是命名空间冒用与分发信任，说明生态已越过"要更多 Skill"阶段，进入"要可被安全依赖的 Skill"阶段。

---
注：本报告严格依据所提供的 PR/Issue 标题与摘要撰写；原数据中 PR 评论数缺失、无 merged 状态记录，故未对合并结果或讨论量做任何推断。

---

# Claude Code 社区动态日报（2026-11-04）

> 数据来源：github.com/anthropics/claude-code

## 1. 今日速览

今日发布 v2.1.318，主要围绕企业网关角色管理与配置项扩展。社区端，桌面端多账号切换需求（#18435）已成为呼声最高的议题（999👍、234 评论）；同时 `fizzy_lake` 重新设计引发的深色主题/字体/可读性投诉持续发酵，构成当日最集中的体验类反馈。另有多条与成本相关的议题（子代理描述重复加载、后台子代理 Read 循环耗尽配额）值得重点关注。

## 2. 版本发布

**v2.1.318**（链接：anthropics/claude-code Releases）

- 记录用户在会话中授权 Claude Code 开启其所写 mods 时的答复；
- 在 Claude apps gateway 的 `mantle` 上游新增 `assume_role`，支持跨 AWS 账号角色，并可按开发者归集 AWS 成本；
- 在 mod 中新增 `effort` 选项。

（注：Release 说明在 `effort` 一项处被截断，未见完整描述。）

## 3. 社区热点 Issues

1. **#18435 [OPEN] 桌面端多账号管理与快速切换**（234 评论 / 999👍）
   要求 Claude Desktop 支持多账号 profile 切换，是当日互动量最高的需求。
   https://github.com/anthropics/claude-code/issues/18435

2. **#69044 [OPEN] 长期使用中反复出现的错误汇总**（123 评论）
   用户将数月日常使用中的错误与失败模式系统化整理成文档（德文），属于高信息密度的长周期反馈。
   https://github.com/anthropics/claude-code/issues/69044

3. **#24726 [CLOSED] VS Code 扩展：可关闭自动附加当前文件/选区**（96 评论 / 272👍，已关闭）
   与 IDE 集成体验直接相关，关闭状态值得关注后续实现方式。
   https://github.com/anthropics/claude-code/issues/24726

4. **#104695 [OPEN] Desktop（Windows）`fizzy_lake` 重设计破坏深色主题**（20 评论 / 35👍）
   涉及文字刺眼、冷色调、字体与聊天渲染变差、侧边栏反色、启动变慢。
   https://github.com/anthropics/claude-code/issues/104695

5. **#104529 [OPEN] `fizzy_lake` 实验：加粗在拉丁字母下难以辨认、西里尔字母下不可见**（16 评论）
   还包含行内代码变灰、格式化在重新登录与刷新之间不一致的问题；作者更新称重登录与移除 `spa:fizzy-lake` 已无法恢复旧样式。
   https://github.com/anthropics/claude-code/issues/104529

6. **#94000 [OPEN] 跨会话发送上限（每次人类输入 10 条）不可配置，且忽略入站人工消息**（11 评论 / 11👍）
   Desktop Code 标签页的 `send_message` 达到 10 次后被拒绝投递。
   https://github.com/anthropics/claude-code/issues/94000

7. **#103005 [OPEN] 自动更新重启会归档活跃的 Remote Control 会话且不恢复**（9 评论）
   影响手机端远程控制连续使用，属可用性缺陷。
   https://github.com/anthropics/claude-code/issues/103005

8. **#106705 [OPEN] 延迟加载自定义子代理描述**（5 评论）
   作者称 170 个子代理导致每会话、每子代理约 14k tokens 的重复开销，是有明确量化数据的成本类建议（接续 #8997、#44536）。
   https://github.com/anthropics/claude-code/issues/106705

9. **#105477 [OPEN] Opus 5.5 自 10 月 19 日当周起回归，10 月 26–27 日已不可用（Max 20x）**（4 评论 / 17👍）
   付费重度用户反映忽略指令等问题，并抱怨缺乏人工支持渠道。
   https://github.com/anthropics/claude-code/issues/105477

10. **#106556 [OPEN] 后台子代理在 Read 调用上循环，93 张图片产生 19k 次读取，耗尽套餐额度**（3 评论）
    发生在 Claude Code 2.1.312 / Sonnet 5.5，附带会话 ID，可复现性线索较完整。
    https://github.com/anthropics/claude-code/issues/106556

其他可留意：#107248（误报安全拒绝导致长会话中断）、#105909（Desktop 4.29.0 中 `ccd_pr set_monitor` 拒绝 auto-fix）、#96440（`/voice` 实时转写卡顿）、#74914（Linux/GNOME Wayland 通知触发条件异常）、#107262（无法与组织成员共享项目）。

## 4. 重要 PR 进展

过去 24 小时内更新的 PR 共 2 条，均处于 OPEN 状态：

1. **#37084 为 GitHub API 脚本增加重试、超时与限流处理**（作者 WYSIATI）
   抽出共享 `githubRequest` 工具（`scripts/github-request.ts`），封装 `fetch()` 的重试/超时/限流逻辑，并将 4 个 GitHub API 脚本迁移至该工具，消除 4 份重复实现。
   https://github.com/anthropics/claude-code/pull/37084

2. **#95698 修复插件 hook：以 bash 加引号路径执行 `ralph-wiggum` 与 output-style 的 .sh 脚本**（作者 claude[bot]）
   三个内置插件将 hook 注册为未加引号的裸脚本路径；Refs #95673，并修复 #78490 中 ralph-wiggum / output-style 相关部分。
   https://github.com/anthropics/claude-code/pull/95698

> 说明：本次数据中可用 PR 仅 2 条，未凑足 10 条，以上为全部内容。

## 5. 功能需求趋势

- **桌面端账号与身份管理**：多账号 profile 切换（#18435）是绝对热点；相关的鉴权稳定性问题亦有反馈（#94855，网络切换后强制重登录、会话被杀，已关闭）。
- **UI / 视觉重设计争议**：`fizzy_lake` 实验引发的可读性、字体、深色主题、渲染退化问题占据多条高互动 Issue（#104695、#104529、#105591、#106710），并涉及多语言（西里尔字母）显示。
- **成本与 Token 效率**：子代理描述延迟加载（#106705）、后台子代理 Read 循环耗尽配额（#106556），均指向上下文与调用开销控制。
- **代理与跨会话编排**：跨会话发送上限需可配置（#94000）、阻止误报安全拒绝中断长会话（#107248）。
- **IDE / 编辑器集成**：VS Code 自动附加文件/选区的开关需求（#24726），以及 VS Code 平台上的成本/代理问题（#106556）。
- **语音交互**：双向语音编码（#104784，被标记 duplicate）与 `/voice` 实时转写卡顿（#96440）。
- **远程控制与更新体验**：自动更新重启破坏 Remote Control 会话（#103005）。

## 6. 开发者关注点

- **可配置性不足**：多个高频痛点源于“无用户级开关”——会话满意度调查（#94710）、字体重绘（#106710）、跨会话发送上限（#94000）、VS Code 自动附加（#24726）。
- **成本可见性与控制**：用户已能用具体数字（14k tokens/会话、19k 次 Read/93 张图）量化浪费，期望在代理规模变大后仍可控。
- **模型质量回退与支持通道**：#105477 反映 Opus 5.5 体验下滑，且付费用户难以触达人工支持，属信任层面的风险信号。
- **长会话稳定性**：误报安全拒绝（#107248）、自动更新归档会话（#103005）、网络切换杀会话（#94855）共同指向“会话连续性”是核心诉求。
- **UI 变更的迁移成本**：重设计实验缺乏回退路径（#104529 中移除 `spa:fizzy-lake` 已失效），社区希望保留旧版可选。
- **平台一致性**：Windows、macOS、Linux 各有独立缺陷（通知、主题、鉴权），跨平台体验仍不均衡。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报 — 2026-11-04

## 1. 今日速览

今天社区最受关注的事件是 Issue #59060：一位用户报告 Codex CLI 在执行"重启服务器"指令时摧毁了 systemd、容器并执行了随机脚本，并称造成超过 1 万美元损失，该 Issue 已积累 276 条评论。同时，Windows 桌面端的项目消失、工作区设置加载失败等问题持续发酵；PR 侧则以大量 `copyberry` 提交的闭环 PR 为主，集中在上下文预算、云线程预热、TUI 会话锁等底层能力。

## 2. 版本发布

- **rust-v0.168.0-alpha.1**：仅标注为 0.168.0-alpha.1 版本发布，无进一步说明。
- **libcap-v2.75**：并非功能发布，而是用于构建 Codex Linux musl 包中 Bubblewrap 的 libcap 2.75 源码镜像（附上游归档链接与 SHA-256）。

## 3. 社区热点 Issues

1. **#59060 [OPEN] 被要求重启服务器却摧毁了 systemd、容器并造成 $10,000+ 损失**
   `bug / model-behavior / CLI`，v0.166.0 + gpt-6-sol medium，276 评论 / 255 👍。今日热度与争议度最高，直接涉及模型在高风险运维指令下的行为安全问题。
   openai/codex Issue #59060

2. **#11626 [OPEN] CLI 增加 `/rewind` 检查点恢复，同时回滚对话上下文与 Codex 应用的代码修改**
   `enhancement / TUI`，52 评论 / 229 👍。高赞功能需求，反映用户对"可撤销的 Agent 编辑"有强烈诉求。
   openai/codex Issue #11626

3. **#42739 [OPEN] Windows 桌面更新后本地项目从侧边栏消失**
   `bug / windows-os / app / session`，71 评论。长期未决的 Windows 数据可见性问题，影响面广。
   openai/codex Issue #42739

4. **#51917 [OPEN] Windows 更新后"无法加载工作区设置"仍阻塞新建对话**
   30 评论 / 13 👍，报告者在 10-11 更新后复测问题依旧存在，属反复回归。
   openai/codex Issue #51917

5. **#49980 [OPEN] Windows/WSL 下 Agent 工具因进程创建与 workspace URI 报错失败**
   30 评论。影响 WSL 场景下的工具调用可用性。
   openai/codex Issue #49980

6. **#29343 [OPEN] Chrome 插件、浏览器与 Computer Use 拒绝与部分站点交互**
   `safety-check / computer-use / browser`，56 评论 / 19 👍。站点安全策略误判的典型代表。
   openai/codex Issue #29343

7. **#56941 [OPEN] Windows Computer Use 后系统级 UI 卡顿，仅杀 codex-computer-use.exe 可立即恢复**
   18 评论。Computer Use 的性能与进程管理问题。
   openai/codex Issue #56941

8. **#53349 / #54065 [OPEN] 浏览器使用被站点安全策略拦截（淘宝只读采集、MyAnimeList）**
   即便设置 "Always allow" 仍在审批前被拦截，涉及安全分类误判与恢复流程缺失。
   openai/codex Issue #53349 ｜ openai/codex Issue #54065

9. **#58293 [OPEN] macOS 桌面端 Work 与 Codex Local 卡在 Reconnecting 5/5（ENOENT unlink 启动失败）**
   4 评论。连接稳定性问题，附带具体错误根因线索。
   openai/codex Issue #58293

10. **#58515 [OPEN] Dots 授权型循环 HTTP 工作流卡在轮换凭证确认，使无人值守自动化失效**
    反映长时自动化与凭证确认机制之间的冲突。
    openai/codex Issue #58515

> 其他近期动态：#59399（"This model is not available"，全模型不可用）已于当日关闭；#59132 报告 Codex Cloud `409 environment_offline` 导致任务与文件不可访问；#30222 请求 Usage 面板支持 12 小时制。

## 4. 重要 PR 进展

以下 PR 均为 `copyberry[bot]` 提交并处于 CLOSED 状态（无评论数据展示）：

1. **#59444 为同步 Guardian 审查增加可选弹性预算**
   新增 `features.guardianv2.sync_elastic_budgeting` 与 `sync_elastic_sections`，可配置各段最小值、单条目 token 上限与可选段最大值。
   openai/codex PR #59444

2. **#59401 在弹性 Guardian 上下文预算中遵守段限制**
   修复预算压力下段最小值被压缩、以及请求整体可容纳时绕过段最大值的问题，并要求指令去重一并考虑。
   openai/codex PR #59401

3. **#59445 项目指令超出配置字节预算时给出警告**
   原先指令可能被静默截断或跳过，现改为报告被截断与跳过的文件。
   openai/codex PR #59445

4. **#59404 压缩（compaction）过程中保留待处理的 Agent 消息**
   确保在模型请求开始后到达的 Agent 消息能存活至正常推理请求包含它们。
   openai/codex PR #59404

5. **#59351 云客户端增加受管线程预热**
   新增 `Client::prewarm_default_thread`，可在默认受管云环境中预建普通编码线程，支持可选模型与 provider。
   openai/codex PR #59351

6. **#59343 云线程以解析后设置激活**
   新增 `Client::activate`，通过 `UpdateConfig` 仅发送线程 ID 与 `exclude_turns=true` 加载云线程，并返回可序列化的解析设置与线程元数据。
   openai/codex PR #59343

7. **#59330 OS 会话锁定时停止 TUI 语音通话**
   在 Linux/macOS/Windows 上监控会话锁状态，开始音频前先检查初始状态，锁定时中止本地媒体（含连接、重试阶段）。
   openai/codex PR #59330

8. **#59354 通过 Agent 运行时共享上下文窗口 ID 分配**
   在 `LocalAgentRuntime` 中保存共享的 `ContextWindowIdGenerator` 并传入各会话，统一初始与后续窗口 ID。
   openai/codex PR #59354

9. **#59468 允许已准备的 fork 使用源重校验**
   新增 `PreparedFork::with_source_revalidation`，供在使子级历史引用持久化时重校验源的后端使用。
   openai/codex PR #59468

10. **#59369 稳定跨平台测试与目录切换 fork 权限**
    让测试区分子进程启动缓慢与操作超时，并在断言或清理 fixture 前等待异步工作完成。
    openai/codex PR #59369

> 另：#59447 恢复 `features.daemon_auto_start` 为默认开启的稳定设置；#59458 在切换焦点前排空排队的 side-conversation 事件；#59348 相关 `rules_rs` 调整为 Linux zlib 下载优先使用 Launchpad。

## 5. 功能需求趋势

- **可撤销 / 可回滚的 Agent 操作**：`/rewind` 检查点恢复（#11626，229 👍）是最高赞功能诉求。
- **安全策略的精细化与可恢复性**：多起站点安全分类误判（#29343、#53349、#54065）显示社区需要更可解释的拦截理由与授权恢复路径。
- **高风险指令的行为约束**：#59060 指向模型在执行破坏性运维操作时的确认与防护机制。
- **Windows 平台质量**：项目/会话可见性、工作区设置、WSL 工具调用构成持续高发问题簇。
- **长时无人值守自动化**：凭证轮换确认（#58515）与云环境离线（#59132）阻碍全自动工作流。
- **本地化与 UI 细节**：如 12 小时制时间显示（#30222）。
- **上下文与指令管理**：PR 侧的字节预算警告、压缩期消息保留、弹性 Guardian 预算，显示对上下文工程能力的持续投入。

## 6. 开发者关注点

- **安全与可控性矛盾突出**：一方面用户要求放开浏览器/Computer Use 限制，另一方面 #59060 的破坏性后果凸显操作确认与沙箱边界的重要性。
- **"静默失败"最伤体验**：策略拦截不给出可操作原因（#57623）、项目与设置静默丢失（#42739、#51917）、项目指令被截断无警告（#59445）反复出现。
- **平台一致性**：Windows 与 macOS 桌面端在连接、会话同步、进程管理上问题集中，WSL 场景尤其脆弱。
- **自动化可靠性**：凭证确认、环境离线等中断点让"无人值守"承诺难以兑现。
- **对可恢复性的强需求**：检查点回滚与编辑撤销类能力持续获得高赞，说明开发者期望 Agent 操作具备与手工开发同等的可逆性。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报（2026-11-04）

## 1. 今日速览

今日发布 nightly 版本 v0.67.0-nightly.20261104，包含针对扩展下载流失败和显式 `gemini-2.5-flash` 模型解析的两项修复。社区端围绕 subagent/agent 稳定性的讨论最为集中——MAX_TURNS 被误报为成功、generalist agent 挂起等多个 P1 级问题在过去 24 小时持续有更新。MCP 工具分页发现的两份修复 PR 已关闭，同时多个 CLI 体验优化 PR（/stats 热力图、自定义主题、错误格式化）集中提交。

## 2. 版本发布

**v0.67.0-nightly.20261104.g89e9d25d6**
- `fix(cli)`：处理扩展发布下载过程中的流失败（PR #30100）
- `fix(core)`：在动态模型解析中保留显式指定的 `gemini-2.5-flash` 模型（PR 编号在原文中未完整给出）
- 配套自动版本号 PR #30123：https://github.com/google-gemini/gemini-cli/pull/30123

## 3. 社区热点 Issues

1. **#22323 [P1] Subagent 达到 MAX_TURNS 却报告 GOAL 成功** — 子代理在未做任何分析前即触达回合上限，却上报 `success`/`GOAL`，掩盖了实际中断。13 条评论为当日最高，状态标为 need-retesting，说明属回归风险问题。
   https://github.com/google-gemini/gemini-cli/issues/22323

2. **#21409 [P1] Generalist agent 无限挂起** — 只要 CLI 交由 generalist agent 处理就永久卡死，连创建文件夹等简单操作也如此，等待长达一小时仍无法恢复。8 条评论、8 个 👍，是社区共鸣度最高的问题之一。
   https://github.com/google-gemini/gemini-cli/issues/21409

3. **#19873 [P2] 借助模型 bash 亲和性做零依赖 OS 沙箱与执行后意图路由** — 提案利用 Gemini 3 模型原生偏好 POSIX 工具链（grep/cat/sed/awk）的特性，设计沙箱与路由机制，属较有雄心的方向性讨论。
   https://github.com/google-gemini/gemini-cli/issues/19873

4. **#22745 [P2] 评估 AST 感知的文件读取、搜索与映射** — EPIC 议题，目标是减少回合数、更精确地读取方法边界，关系到 agent 效率的核心改进。
   https://github.com/google-gemini/gemini-cli/issues/22745

5. **#21968 [P2] Gemini 不够主动使用 skills 与 sub-agents** — 除非显式指示，模型几乎不会自发调用自定义 skills 和子代理，直接影响 subagent 体系的实际价值。7 条评论。
   https://github.com/google-gemini/gemini-cli/issues/21968

6. **#22267 [P2] Browser Agent 忽略 settings.json 覆盖（如 maxTurns）** — 全局与项目级配置均被无视，配置系统与 AgentRegistry 行为不一致。
   https://github.com/google-gemini/gemini-cli/issues/22267

7. **#21983 [P1] Wayland 下 browser subagent 失败** — Linux Wayland 环境下的浏览器子代理不可用，影响桌面 Linux 用户群体。
   https://github.com/google-gemini/gemini-cli/issues/21983

8. **#24246 [P2] 工具数超过 128 个时报 400 错误** — 摘要中同时出现 ">128 tools" 与 ">400 tools" 两种表述，建议以原始 issue 为准。核心诉求是让 agent 更智能地限定启用工具范围。
   https://github.com/google-gemini/gemini-cli/issues/24246

9. **#22672 [P2] Agent 应停止/劝阻破坏性行为** — 在复杂 git 操作中模型可能使用 `git reset` 或 `--force`，存在安全风险，属高优先级信任问题。
   https://github.com/google-gemini/gemini-cli/issues/22672

10. **#22186 [P1] get-shit-done 输出钩子导致崩溃** — 在打印用户摘要接近完成时反复崩溃，属钩子机制稳定性问题。
    https://github.com/google-gemini/gemini-cli/issues/22186

## 4. 重要 PR 进展

1. **#30135 `/stats heatmap` 子命令** — 新增 GitHub 风格日历热力图，按日展示 token 使用量，支持 `today|yesterday|YYYY-MM-DD`，也可通过 `/usage heatmap` 调用。
   https://github.com/google-gemini/gemini-cli/pull/30135

2. **#30136 模板占位符保留字面 `$` 字符** — 修复自定义命令 `{{args}}` 与系统提示模板占位符（`${AgentSkills}`、`${SubAgents}` 等）中 `$$`、`$&` 等序列被替换的问题。
   https://github.com/google-gemini/gemini-cli/pull/30136

3. **#30134 通过 ACP 报告被钩子拦截的提示** — 此前被拦截提示只返回空 `end_turn`，客户端无法得知原因；现改为发送 `agent_message_chunk` 携带原因。
   https://github.com/google-gemini/gemini-cli/pull/30134

4. **#29956 WSL2 下支持 BMP 剪贴板图片** — 当 `XDG_SESSION_TYPE` 未设置且剪贴板提供 `image/bmp` 时，回退到 `WAYLAND_DISPLAY` 或 `DISPLAY` 检测后端。
   https://github.com/google-gemini/gemini-cli/pull/29956

5. **#30117 无头 CLI 错误负载归一化** — 在 core 包引入集中式错误归一化工具，并在 CLI 中加入上下文感知的错误格式化器。
   https://github.com/google-gemini/gemini-cli/pull/30117

6. **#30119 独立 `theme.json` 自定义主题** — 将自定义配色从 `settings.json` 解耦，自动发现 `~/.gemini/theme.json` 及 XDG 回退路径。
   https://github.com/google-gemini/gemini-cli/pull/30119

7. **#30133 扩展重载后刷新 skill 命令** — 修复 `/extensions reload` 后旧 skill 斜杠命令仍残留在补全列表、新命令不可用的问题。
   https://github.com/google-gemini/gemini-cli/pull/30133

8. **#30124 `tildeifyPath` 需路径分隔符边界** — 防止同名前缀的兄弟目录被错误缩写（如 `/Users/albert/proj` 被错误转为 `~bert/proj`）。
   https://github.com/google-gemini/gemini-cli/pull/30124

9. **#29843 / #29846 MCP 工具发现分页（均已关闭）** — 修复 `discoverTools` 仅取第一页、静默丢弃其余工具的问题，两份 PR 均已关闭，需关注最终合入方案。
   https://github.com/google-gemini/gemini-cli/pull/29843
   https://github.com/google-gemini/gemini-cli/pull/29846

10. **#25364 会话超出 JSON 可序列化大小时处理 RangeError** — 捕获 `JSON.stringify` 抛出的 `Invalid string length`，避免 `appendRecord` 未处理拒绝导致崩溃。
    https://github.com/google-gemini/gemini-cli/pull/25364

## 5. 功能需求趋势

- **Subagent / Agent 体系成熟度**：当日热点几乎被 agent 相关议题占满——回合上限语义、generalist 挂起、skills 与子代理自发性、子代理轨迹可分享（#22598）、本地子代理 sprint 规划（#20195）、仓库内示例代理（#18283）与 codebase investigator 改进（#18282）。
- **配置系统一致性**：Browser Agent 忽略 `settings.json`（#22267）与 symlink 代理不被识别（#20079）等问题，反映配置解析路径不统一。
- **AST 感知的代码理解**：EPIC #22745 与 #22746 探索 AST 感知的读取、搜索与代码库映射，并点名 tilth、glyph 作为起点。
- **浏览器自动化稳定性**：Wayland 失败（#21983）、会话接管与锁恢复（#22232）构成一组浏览器子代理需求。
- **CLI 可观测性与 UI**：token 使用热力图、自定义主题、错误格式化等 PR 显示用户对用量洞察与界面定制的需求在上升。

## 6. 开发者关注点

- **失败被误报为成功**：MAX_TURNS 上报为 GOAL 成功（#22323）让自动化流程无法察觉中断，是可信度层面的核心痛点。
- **挂起与崩溃**：generalist agent 永久挂起（#21409）与输出钩子崩溃（#22186）直接阻断日常使用。
- **破坏性操作风险**：`git reset`、`--force` 等命令缺乏劝阻（#22672），以及在随机目录生成临时脚本造成清理负担（#23571）。
- **跨平台环境问题**：Wayland、WSL2 剪贴板、Linux 剪贴板后端检测等平台差异带来持续修复需求。
- **工具规模上限**：工具数量过多触发 400 错误（#24246），以及 MCP 工具分页发现缺陷，提示工具注册与发现机制需要系统化治理。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报（2026-11-04）

## 今日速览

今日发布三个预发布版本（1.0.106-7/8/9），集中在 Windows 本地模型安装、终端渲染与配置校验。社区方面，技能（skill）可见性、macOS 沙箱网络、企业托管策略与 OSC 7501 终端状态上报成为讨论焦点；企业用户报告的启动/恢复挂起和多条托管策略错误值得优先排查。

## 版本发布

**v1.0.106-9**
- `apply_patch` 不再为每个新增/删除文件多计一行，时间线摘要、权限提示、`/usage` 与退出摘要显示真实行数。
- `copilot config` 在 settings.json 因类型错误被忽略时给出警告，而非静默读取。
- 链接: github/copilot-cli Release v1.0.106-9

**v1.0.106-8**
- 改进：Windows 本地模型下载自动安装 llama.cpp 并显示引擎安装进度；`/memory show` 在仓库记忆作用域不可用时给出提示。
- 修复：当 `-p --agent` 选择的 agent 含 Copilot 忽略的 frontmatter 键时，向 stderr 输出警告并记录。
- 链接: github/copilot-cli Release v1.0.106-8

**v1.0.106-7**
- 新增：Rex 终端通过 Kitty 直接放置渲染内联图片；新增 `/code` 命令在 VS Code 中打开当前会话；`copilot config` 新增 Fusion tier 设置。
- 改进：内置 browser-use 插件升级至 0.1.0，改善初始化与浏览器集成行为。
- 链接: github/copilot-cli Release v1.0.106-7

## 社区热点 Issues

1. **#4438 [OPEN] 技能定义中的 "disable-model-invocation: true" 导致技能无法显式调用**（15 评论，👍19）——设置该项后项目技能在 CLI 中完全不可达，`copilot skill list` 可见但模型工具返回 "Skill not found"。这是 agents 区域评论与点赞最高的议题，反映技能可见性语义与用户预期不符。
   https://github.com/github/copilot-cli/issues/4438

2. **#5105 [CLOSED] macOS 沙箱在允许本地网络时仍阻断 Gradle 守护进程连接**（9 评论）——即使配置允许出站与本地网络，Gradle 守护进程监听 localhost 仍无法连接。沙箱策略与本地开发工具链的兼容性是高频摩擦点。
   https://github.com/github/copilot-cli/issues/5105

3. **#49 [CLOSED] WSL2 Ubuntu 24 上 Copilot CLI 无法识别 keychain/keyring**（9 评论，👍4）——安装 gnome-keyring 与 keychain 后仍提示未找到。跨平台凭据存储是长期存在的环境兼容问题。
   https://github.com/github/copilot-cli/issues/49

4. **#5112 [OPEN] 交互式 CLI 支持 OSC 7501 程序状态上报**（6 评论，👍16）——请求通过 OSC 7501 向支持的终端报告 agent 状态。点赞数高，与 #5320 形成同一需求的两条线，显示终端生态集成的明确需求。
   https://github.com/github/copilot-cli/issues/5112

5. **#5109 [OPEN] copilot-cli 在企业环境中不可用**（6 评论，👍3）——托管账户策略无法刷新，完整策略无法获取，阻塞使用。企业部署可用性问题影响面大。
   https://github.com/github/copilot-cli/issues/5109

6. **#4005 [OPEN] 未选择 Copilot 计费实体导致无法保存记忆**（5 评论，👍6）——企业配置下其他功能正常，但保存记忆报错。涉及企业计费实体与 context-memory 的交互。
   https://github.com/github/copilot-cli/issues/4005

7. **#5236 [OPEN] Windows：MCP 登录后 Entra broker 令牌缓存为 0 字节，每个新进程重复提示**（5 评论）——每次新进程都重新弹出账户选择，`/restart` 不触发。影响 Windows + MCP + 企业身份认证的组合场景。
   https://github.com/github/copilot-cli/issues/5236

8. **#5270 [OPEN] 多数模型卡在 plan 模式**（4 评论）——选择 GPT-6.1 Sol 后无法从 Plan 模式转入 Implementation 模式，永久挂起。涉及模型与 agent 流程的关键路径缺陷。
   https://github.com/github/copilot-cli/issues/5270

9. **#5228 [CLOSED] 无 ID 执行 `copilot --resume` 落入空白新会话**（3 评论）——统一 Sessions 浏览器成为默认后，会话列表约 2 秒后自动替换，信任提示抢占第一次回车。会话恢复流程的回归类问题。
   https://github.com/github/copilot-cli/issues/5228

10. **#5341 [OPEN] 企业 MCP 策略结算超时后 CLI 启动/恢复挂起**（1 评论）——在设置 `forceRemoteSettingsRefresh` 的 Enterprise Managed User 账户下，macOS 上偶发无限挂起。与 #5109、#5130 同属托管策略可靠性问题群。
    https://github.com/github/copilot-cli/issues/5341

## 重要 PR 进展

过去 24 小时内更新的 PR 仅 2 条，且均为 OPEN 状态，以下为全部条目：

1. **#5186 [OPEN] 更新 feature_request.yml**（作者 Bilalabdulkadir）——修改功能请求 Issue 模板。涉及社区贡献流程的表单配置。
   https://github.com/github/copilot-cli/pull/5186

2. **#5339 [OPEN] [Feature] 新增只读 agent 监控 TUI（Graph + Timeline）**（作者 ychu-msft）——在 `tools/agent-monitor` 下提供独立的只读终端查看器，针对显式选定的单个本地 Copilot CLI 会话，沿用 Copilot CLI 的界面语言。属于可观测性方向的工具新增。
   https://github.com/github/copilot-cli/pull/5339

说明：本期数据中未提供其他 PR，故不额外补足至 10 条。

## 功能需求趋势

- **终端生态集成**：OSC 7501 程序状态协议出现两条独立需求（#5112、#5320），并已有 Rex 终端的 Kitty 内联图片支持落地（v1.0.106-7），终端厂商与 CLI 的协作正在成为明确方向。
- **IDE / 编辑器集成**：新增 `/code` 命令在 VS Code 中打开会话（v1.0.106-7），IDE 联动从需求走向落地。
- **企业策略与身份**：托管策略刷新失败、计费实体选择、Entra 令牌缓存、MCP 策略结算超时等构成一组集中出现的 enterprise 区域问题。
- **Agent 与技能可配置性**：技能可见性语义（#4438）、agent frontmatter 校验（v1.0.106-8）、autopilot 任务完成强制行为（#4318）显示社区对 agent 行为边界的关注。
- **协议对齐**：ACP 模式下的 stdio MCP 传输支持（#3889）与 ACP `session/prompt` 无条件中止会话（#4555）指向对 Agent Client Protocol 规范的遵循诉求。
- **可观测性**：agent 监控 TUI（#5339）与行数统计修正（v1.0.106-9）体现对使用数据准确性的要求。

## 开发者关注点

- **企业环境可用性最突出**：托管策略相关错误（#5109、#5130、#5341）与计费实体问题（#4005）叠加，导致登录、记忆保存、启动挂起等基础流程受阻，是当前反馈中最集中的痛点。
- **沙箱与本地工具链冲突**：macOS 沙箱阻断 Gradle 守护进程（#5105）说明网络权限配置与实际工具需求之间存在缺口。
- **跨平台凭据与认证体验**：WSL2 keyring 识别（#49）与 Windows Entra 令牌缓存为空导致重复登录（#5236），反映凭据持久化在不同平台不一致。
- **状态与流程卡死类缺陷影响信任**：模型卡在 plan 模式（#5270）、`--resume` 落入空会话（#5228）、预发布版 1.0.106-2 启动即报错（#5322）等，均直接中断工作流。
- **消息与终端的呈现细节**：时间线中用户消息的 Markdown 渲染（#5353）、Grep 命令参数识别（#1931）属于体验层面的高频小需求。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 — 2026-11-04

> 数据来源：github.com/anomalyco/opencode｜过去 24 小时无新版本发布

---

## 1. 今日速览

今日无新 Release，社区焦点集中在**免费额度（Free tier）问题**：主汇总 Issue #59387 评论数达 274，且"额度耗尽/无法使用免费模型"的重复报告继续涌入。工程侧，`@opencode/ai` 模型层重构（7 个模型类合并为单一 `Model`）以 5 个堆叠 PR 持续推进；同时 MCP OAuth 令牌刷新并发缺陷收到对应修复 PR。

---

## 2. 版本发布

过去 24 小时无新版本发布。（注：PR #61522 正在将 `dev` 提升至 `production`，含 26 个提交，尚未合并。）

---

## 3. 社区热点 Issues（10 条）

**① #59387 免费层问题主汇总帖** — [链接](https://github.com/anomalyco/opencode/issues/59387)
`neniery` 维护的免费层问题总入口（274 评论 / 20 👍）。社区自发集中反馈"Free usage exceeded / 额度已达上限"，是当前声量最大的议题。

**② #60612 MCP 并发 OAuth 刷新导致凭证被删** — [链接](https://github.com/anomalyco/opencode/issues/60612)
已复现、严重度 high。多个位置（项目目录/worktree）并发刷新轮换型 refresh token，会互相失效并删除凭证（影响 Grafana Cloud 等）。安全与稳定性双重风险。

**③ #61688 桌面端启动即占满 CPU 并崩溃循环** — [链接](https://github.com/anomalyco/opencode/issues/61688)
v2.2.5 / Linux，"server thrashing" 崩溃循环、UI 无法渲染，属阻断级可用性问题，当日新建。

**④ #61672 桌面/Web 侧边栏只显示当前会话** — [链接](https://github.com/anomalyco/opencode/issues/61672)
API 返回 3 个会话，侧边栏仅显示 1 个，空闲会话丢失（v2.2.5，已关闭）。

**⑤ #55699 切换会话后滚动位置丢失** — [链接](https://github.com/anomalyco/opencode/issues/55699)
v2.0.29 / Windows，长会话切走再切回会跳到底部。UX 高频抱怨点，3 👍。

**⑥ #61053 TUI 拖拽选择时视口冻结** — [链接](https://github.com/anomalyco/opencode/issues/61053)
拖选期间滚轮既不能滚动也不扩展选区，导致无法跨屏复制，影响 TUI 日常使用。

**⑦ #60268 分片到达的转义序列被敲进输入框** — [链接](https://github.com/anomalyco/opencode/issues/60268)
ESC 与后续字节分两次到达时，ESC 被当作独立按键、剩余部分被插入 prompt（鼠标报告、PageUp 触发）。已复现。

**⑧ #48588 managed serve 受客户端 cgroup 限制被反复杀死** — [链接](https://github.com/anomalyco/opencode/issues/48588)
`serve --service` 以 detached 启动但未脱离客户端 cgroup，Linux 内存受限环境下共享服务被 watchdog 反复杀。

**⑨ #61694 重试响应时工具已执行，模型却被告知已中止** — [链接](https://github.com/anomalyco/opencode/issues/61694)
流式响应失败后已发出的完整 tool call 仍被执行，但重试时模型收到"已中止"，存在副作用与状态不一致风险。

**⑩ #55764 桌面端会话置顶（与 TUI 对齐）** — [链接](https://github.com/anomalyco/opencode/issues/55764)
功能需求，5 评论 / 4 👍，为当日点赞最高的功能请求之一。

其他值得留意：#53202 自定义 OpenAI 兼容模型 `/thinking` 的 `high` 选项破坏 llama.cpp Qwen3.8 模板且失败重试 5 次；#59904 `session export` 仅支持 JSON，请求 `--format md`。

---

## 4. 重要 PR 进展（10 条）

**① #61492 `@opencode/ai` 模型重构第一步：能力标志迁至 model capabilities** — [链接](https://github.com/anomalyco/opencode/pull/61492)
`Model` 对齐 models.dev v2 的 `ModelV2`，统一 camelCase 字段。整个重构系列的基础层。

**② #61494 用 model options 取代 model/route 默认值** — [链接](https://github.com/anomalyco/opencode/pull/61494)
重构第 2 步，堆叠于 #61492。

**③ #61499 以单一 `Model` 取代 7 个模型类** — [链接](https://github.com/anomalyco/opencode/pull/61499)
重构第 3 步，核心收敛；依赖链 #61494。

**④ #61501 以 api / baseURL / auth 描述文本模型** — [链接](https://github.com/anomalyco/opencode/pull/61501)
重构第 4 步，堆叠于 #61499。

**⑤ #61717 基于模型目录成本计算用量价格** — [链接](https://github.com/anomalyco/opencode/pull/61717)
重构第 5 步。此前仅 core 侧持有模型价格，本 PR 让 `@opencode/ai` 能回报单次调用成本。

**⑥ #60944 用凭证锁协调 MCP token 刷新** — [链接](https://github.com/anomalyco/opencode/pull/60944)
对应 #60612 的修复：刷新纳入按凭证的锁，避免轮换 token 被重放。

**⑦ #61328 以内部插件形式恢复 v2 的 doom loop 检测** — [链接](https://github.com/anomalyco/opencode/pull/61328)
Closes #59339，标记 contributor，提出方称可供设计评审并按团队方向调整实现。

**⑧ #60552 write 工具获取事务锁** — [链接](https://github.com/anomalyco/opencode/pull/60552)
Closes #60509。`edit`/`patch` 已有 file 级锁，`write` 对齐后消除并发写竞争。

**⑨ #61706 MCP 登录支持粘贴重定向 URL** — [链接](https://github.com/anomalyco/opencode/pull/61706)
解决 MCP 登录在无本地回调场景下的完成路径，关联 #54495、#33966。

**⑩ #61522 将 `dev` 提升至 `production`（26 提交）** — [链接](https://github.com/anomalyco/opencode/pull/61522)
含 #61461：公共统计同步由 AWS ECS 迁至 Cloudflare Workflow + Cron，部署前将 ECS 服务缩容至 0。

**补充**：#61679（CLOSED）清理已被 transcript 证实送达的 pending prompt；#61718（CLOSED）在 `packages/app/AGENTS.md` 中确立生命周期状态必须是显式状态机；#57134 支持从错误页重启卡住的后台服务。

---

## 5. 功能需求趋势

- **桌面端与 TUI 体验对齐**：#55764 会话置顶、#53202 `/thinking` 选项与自定义模型能力声明一致性。
- **会话可移植性**：#59904 请求 `session export --format md`，服务于归档、分享与 issue 粘贴等常见场景。
- **重试与钩子可观测性**：#54862 请求在内置重试耗尽时触发 `session.retry` 钩子（从 V1 重新提交至 2.0）；#61694 暴露重试与工具执行的状态不一致。
- **插件 API 扩展**：#61457 请求插件服务端可回复表单（与 `ctx.permission.reply` 并列）。
- **MCP 接入体验**：登录回调（#61706）与 token 生命周期管理（#60612 / #60944）成为连续诉求。
- **免费额度透明度**：大量重复报告指向额度提示与重置机制缺少清晰解释。

---

## 6. 开发者关注点

1. **免费额度判定与重置不可预期**：#59387、#60280、#61553、#61599、#61716 均指向"跨日重置后立即再次触顶"或"持续数日提示超限"，环境涵盖 Apple 旧版本、Linux VPS 等，用户无法自行定位。
2. **v2 桌面端稳定性**：启动即高 CPU 崩溃循环（#61688）、后台服务启动失败需手动重启（#57134）、侧边栏会话丢失（#61672）与滚动位置丢失（#55699）叠加，直接影响日常可用性。
3. **TUI 输入与选择边界情况**：转义序列分片（#60268）、拖选冻结（#61053）、resize 后界面残缺（#51945），多为终端输入解析层面的长期问题。
4. **MCP OAuth 并发安全**：轮换型 refresh token 与多处并发刷新冲突，属凭证丢失级缺陷，已有对应修复 PR 待评审。
5. **自定义 OpenAI 兼容后端适配**：模型变体与 `/thinking` 等级不匹配（#53202），并伴随无谓的 5 次重试，对本地推理用户影响明显。

---
*今日无 Release，以上条目均基于过去 24 小时有更新的 Issues / Pull Requests。*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报 · 2026-11-04

## 1. 今日速览

今日无新版本发布，社区活动集中在 TUI 渲染与终端兼容性问题的修复收尾：全屏模式下光标标记泄漏、扩展控制台输出污染界面、大段粘贴内容丢失等一批问题随对应 PR 关闭。同时，多项 provider 支持（Qwen Token Plan 中国区、LM Studio、Ant Ling 3.0）与 `pi-durable` 会话同步/复制能力推进落地。

## 2. 版本发布

过去 24 小时无新 Release。

## 3. 社区热点 Issues

1. **#7730 [OPEN] macOS 长会话高 CPU 占用**（25 条评论，👍12）
   会话上下文增大时 CPU 在 50–110% 间波动、内存 600–800MB。评论数最高、点赞最多，是当前最具共识的性能问题。
   https://github.com/earendil-works/pi/issues/7730

2. **#9656 [OPEN] Windows + Zellij 下滚轮滚动提示历史而非对话记录**（14 条评论）
   问题仅出现在 Windows → Alacritty → Zellij → Pi 的多层终端链路，属输入事件路由缺陷。
   https://github.com/earendil-works/pi/issues/9656

3. **#10628 [OPEN] tmux 吞掉全屏 TUI 的 OSC 52 复制**（12 条评论）
   pi 直接写入原始 OSC 52，未做 tmux passthrough 包裹，导致显示"Copied!"但剪贴板为空。
   https://github.com/earendil-works/pi/issues/10628

4. **#11584 [OPEN] 覆盖层无法遮盖终端图片**（4 条评论）
   `compositeTuiLine` 将 Kitty/iTerm2 图片行直接透传，覆盖层出现"空洞"，影响使用内联图片的终端用户。
   https://github.com/earendil-works/pi/issues/11584

5. **#11622 [OPEN] [prio:p0] pi-durable 无 content 的 input 导致运行 faulted**（2 条评论）
   `submit({type:"input"})` 缺少 content 仍被接受并存储，随后运行报 "content is not iterable"，标注 p0 值得优先跟进。
   https://github.com/earendil-works/pi/issues/11622

6. **#11614 [OPEN] 允许自更新跳过 release-age override**（2 条评论）
   企业 MDM 安全软件会拦截该 override 并终止进程，需提供 `--no-release-age-override` 开关。
   https://github.com/earendil-works/pi/issues/11614

7. **#11802 [CLOSED] kitty CSI-u 分割序列被当作文本灌入输入框**
   原始转义序列进入 composer 后 Enter、`/quit`、`/resume` 全部失效；已关闭，输入层健壮性修复落地。
   https://github.com/earendil-works/pi/issues/11802

8. **#11804 [CLOSED] insertThinkingLevelMessages 产生相邻 output_config 导致 OpenRouter 400**
   anthropic-messages provider 在每个带思考的 assistant 消息前插入 system 指令，重复时触发网关拒绝。
   https://github.com/earendil-works/pi/issues/11804

9. **#11803 [CLOSED] tool_search 无法解析本地 `$ref` 后的参数描述**
   参数描述藏在本地引用后时工具不可被发现，内联 schema 后恢复，反映 MCP schema 归一化问题。
   https://github.com/earendil-works/pi/issues/11803

10. **#7847 [CLOSED] 新增 Qwen Token Plan Individual（中国区）内置 provider**
    对接 cn-beijing 端点的个人订阅模型目录，复用 `QWEN_TOKEN_PLAN_CN_API_KEY`，对应 PR 已合并。
    https://github.com/earendil-works/pi/issues/7847

> 其他已关闭的 TUI/扩展类问题（#9257 光标标记残留、#9332 拖选损坏显示、#10002 扩展输出覆盖 TUI、#9809 大段粘贴丢失、#8092 pnpm 扩展依赖解析失败）均已随修复 PR 关闭，说明 TUI 与扩展加载器的一轮集中清理基本完成。

## 4. 重要 PR 进展

1. **#11696 [OPEN] feat(storage): replication**
   新增实验性会话同步 `@earendil-works/pi-durable/sync`，设备通过远端上传/拉取会话 commits，从 Chord store 的 outbox 读取并用 `applyBatch` 应用。
   https://github.com/earendil-works/pi/pull/11696

2. **#11801 [OPEN] feat(ui): 构建 bundled 的脚本**
   将 p2 构建的 bundled UI 打包并上传至 R2（每次 main 绿灯提交），用于对外共享。
   https://github.com/earendil-works/pi/pull/11801

3. **#11800 / #11799 [CLOSED] fix(ai): 更新 Ant Ling 模型兼容性**
   以 Ling 3.0 替换 Ling 2.6 / Ring 2.6，统一 API 兼容层为 DeepSeek 风格，移除旧格式与模型。
   https://github.com/earendil-works/pi/pull/11800

4. **#11798 [OPEN] fix: issue triage schema 迁移至 pi-schema**
   因 `Type` 从 `pi-ai` 移除导致 triage 工具无法启动，迁移到 `pi-schema` 修复。
   https://github.com/earendil-works/pi/pull/11798

5. **#9889 [OPEN] fix(coding-agent): 对齐 manifest 资源发现**
   自动发现扩展目录与 `discoverAndLoadExtensions` 将 `pi.extensions` glob 当作字面路径，导致 `!./ext...` 排除规则失效。
   https://github.com/earendil-works/pi/pull/9889

6. **#9441 [CLOSED] fix(tui): 防止光标标记泄漏**
   将 APC 光标标记视为位置元数据而非持久样式，避免 `sliceWithWidth()` 在选区与渲染中回放标记（对应 #9257、#9332）。
   https://github.com/earendil-works/pi/pull/9441

7. **#10050 [CLOSED] fix(coding-agent): 隔离扩展控制台输出**
   扩展进程内运行，`console.*` 与直接 stdout/stderr 写入会绕过差分渲染器，现将其隔离在 TUI 之外。
   https://github.com/earendil-works/pi/pull/10050

8. **#10146 [CLOSED] fix(coding-agent): 编辑器恢复时保留粘贴内容**
   修复队列消息恢复到含大段粘贴的草稿时只提交 `[paste #x +y lines]` 标记的问题。
   https://github.com/earendil-works/pi/pull/10146

9. **#8250 [CLOSED] fix(coding-agent): 子代理进度与失败更可靠**
   修复子代理未完成即报完成、进程失败信息丢失、实际失败却返回正常工具结果等问题。
   https://github.com/earendil-works/pi/pull/8250

10. **#9442 [CLOSED] fix(ai): 允许兼容代理使用 prompt cache key**
    Chat Completions 此前仅对 OpenAI 直连或长保留场景发送 `prompt_cache_key`，现兼容代理在默认短保留下也可接收。
    https://github.com/earendil-works/pi/pull/9442

## 5. 功能需求趋势

- **内置 provider 扩充**：Qwen Token Plan 中国区（#7847）、LM Studio（#7668）、Ant Ling 3.0（#11799/#11800）相继推进，模型/网关目录持续补齐。
- **网关兼容性细粒度开关**：`requiresNonNullAssistantContent`（#8063）独立于既有 flag，说明社区需要针对第三方 OpenAI 兼容网关的逐项兼容配置。
- **多设备/持久化会话**：`pi-durable` 的复制与同步（#11696）、thinkingBudget 与 websocket 超时选项（#10410）指向跨设备工作流。
- **终端 TUI 深度适配**：tmux、Zellij、kitty CSI-u、内联图片成为高频问题来源，全屏模式的输入、渲染、剪贴板链路是当前最集中的集成方向。
- **企业环境可用性**：MDM 拦截（#11614）等需求表明自更新机制需适配受管环境。

## 6. 开发者关注点

- **性能**：#7730 的长会话高 CPU 仍是未关闭的头号痛点，社区关注度最高。
- **终端链路兼容**：#9656、#10628、#11584、#11802 集中反映在多层终端（tmux/Zellij + kitty 协议）下的输入路由、剪贴板与图片合成缺陷。
- **扩展系统可靠性**：pnpm 隔离 node_modules 下的依赖解析（#8092）、manifest glob 解析（#9889）、扩展输出污染 TUI（#10002）显示扩展加载与运行时隔离仍不够稳。
- **provider 边界情况**：相邻 output_config 指令（#11804）、本地 `$ref` 下的工具发现（#11803）、兼容代理缓存键（#9442）表明第三方网关与 MCP schema 的兼容细节是持续调试热点。
- **数据完整性**：#9809、#10146 的粘贴内容丢失与 #11622 的无 content 提交，都涉及"静默接受错误输入"的健壮性问题。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报（2026-11-04）

## 1. 今日速览

今天是典型的"CI 噪声日"：社区更新量最大的议题几乎全部来自 `qwen-code-dev-bot` 自动上报的主干 CI 失败（#14724 累计 166 条评论仍未关闭），真实功能讨论被大量淹没。同时，managed-agent（Java 控制面 / MySQL）方向出现密集的性能与稳定性 PR，显示团队正在集中优化多租户会话的数据库与锁竞争开销。功能侧值得关注的是 v0.26.7 引入的模型目录刷新开关，以及 Mod 在 headless 模式下自主提交 prompt 的能力。

## 2. 版本发布

**v0.26.7**
- 新增 operator 作用域的 `model.catalogRefresh` 配置项。
- 当 `privacy.usageStatisticsEnabled: false` 时，后台模型目录刷新会停止。即隐私开关现在能真正阻断目录拉取这类后台网络行为。
- 无已知破坏性变更。
- 链接：QwenLM/qwen-code Releases（v0.26.7）

## 3. 社区热点 Issues（10 条）

1. **#14724 [OPEN] Managed Agent gate 无测试可识别（166 评论）** — 持续时间最长的自动 CI 报告，从 10-19 拖到 11-04 仍未关闭，说明 Managed Agent 门禁存在难以定位的失败模式。
   QwenLM/qwen-code Issue #14724
2. **#12714 [OPEN] Qwen Code CI 无测试可识别（26 评论）** — 同类问题的更早实例，反映"无法定位失败测试"这一机制性缺陷在反复出现。
   QwenLM/qwen-code Issue #12714
3. **#16265 [OPEN] WorkspaceMigrationMySqlIT.legacyCwdSettlementWaitingForMigrationSeesCommittedFence** — 今日新报的 Managed Agent 失败，涉及迁移期间的提交栅栏语义，属数据一致性敏感区。
   QwenLM/qwen-code Issue #16265
4. **#16320 [OPEN] managed-agent 控制面每会话 SQL 开销随会话数与历史线性增长** — 明确指出问题不在内存而在数据库工作量，是容量规划的关键信号，已被标记需讨论。
   QwenLM/qwen-code Issue #16320
5. **#16321 [CLOSED] 主干违反自身 class-size ratchet（JournalCommit 886 > 880）** — 代码规模约束被打破，已关闭，但暴露 Java 侧该类持续膨胀。
   QwenLM/qwen-code Issue #16321
6. **#16188 [OPEN] bot 工作流突发耗尽 GITHUB_TOKEN 速率限制，阻塞无关 CI** — 直接解释了今日 CI 噪声的成因，属基础设施级问题，优先级 P1。
   QwenLM/qwen-code Issue #16188
7. **#15327 [OPEN] 用 experimental.unifiedAgentLoop 让所有界面共用同一 agent loop** — 核心架构级追踪议题，影响 TUI、headless、ACP/SDK 的一致性，需人工决策。
   QwenLM/qwen-code Issue #15327
8. **#14600 [OPEN] Desktop 崩溃后残留后端持有会话，重启无法重连或恢复** — Linux 桌面端实际的会话丢失与孤儿 daemon 问题，直接影响可用性。
   QwenLM/qwen-code Issue #14600
9. **#14097 [OPEN] SGLang 上下文溢出错误被漏判或丢失 token 数** — 长上下文 + 自托管推理栈的组合痛点，会导致会话卡在持续失败状态。
   QwenLM/qwen-code Issue #14097
10. **#14025 [CLOSED] 用千问AI平台 / QwenCloud 替换 ModelStudio 引导项并保持首位** — 认证入口的官方提供方调整，已关闭，影响 `/auth` 首次使用体验。
    QwenLM/qwen-code Issue #14025

补充值得留意（未计入上述十条）：#15741 已关闭，MCP 服务器内重名工具会丢弃整个 server 并给出误导性"无工具"报错；#15645 已关闭，daemon 的技能目录在磁盘新建项目技能后不刷新。

## 4. 重要 PR 进展（10 条）

1. **#16335 perf(managed-agent)：将 publication reserve/renew 移出 tenant 锁** — 普通工具发布路径不再持有 `output_publication` 租户守卫。
   QwenLM/qwen-code PR #16335
2. **#16327 perf(managed-agent)：队列派发与 workspace 会话创建移出 tenant 锁** — 常规流量下的两次准入不再争抢租户放置锁，与 #16320 的数据库开销问题直接呼应。
   QwenLM/qwen-code PR #16327
3. **#16318 fix(managed-agent)：加固容量恢复并整理 Java 约定** — 容量拒绝保持可重试，提取失败分类，防止启动后失败绕过恢复阻断。
   QwenLM/qwen-code PR #16318
4. **#16302 feat(mods)：允许 Mod 在 headless 运行中自行提交 prompt** — 通过 `$.prompt.submit({ text, asUser? })` 在空闲后开启新回合，扩展自动化能力。
   QwenLM/qwen-code PR #16302
5. **#16333 fix(channels)：GitHub 通知在瞬时线程错误时保持未读** — 遇到 5xx、网络错误或限流时不吞消息，保证可恢复性。
   QwenLM/qwen-code PR #16333
6. **#16334 fix(channels)：二次限流命中的 GitHub 回复予以保留** — 将二次限流视为确定性未写入并在进程内重试。
   QwenLM/qwen-code PR #16334
7. **#16316 fix(cli)：项目 hook 审批环境限制在工作区内** — 审批哈希的环境输入收窄至工作区根下的 `.env`，避免祖先目录 `.env` 影响，并让 host 上已批准的 hook 在 docker 沙箱内继续有效。
   QwenLM/qwen-code PR #16316
8. **#16264 fix(core)：headless 项目 hook 信任需依赖 folder-trust** — 统一为"仅在显式文件夹信任下加载"，覆盖 TUI、headless 与 ACP/SDK 嵌入。
   QwenLM/qwen-code PR #16264
9. **#14613 feat(cli)：通过用户级设置与环境变量启用 LSP** — 无需命令行 flag，从 user/system/system-defaults 层读取新 Tools 设置，降低实验性能力的启用门槛。
   QwenLM/qwen-code PR #14613
10. **#16246 docs(design)：提议由 daemon 的 PR 刷新驱动 PR 状态迁移** — 纯设计提案，拟将 CI 失败、合并冲突、head 变更等检测从 GitHub channel 轮询移入 daemon。
    QwenLM/qwen-code PR #16246

另有 #16258（GitHub 绑定会话按 `review`/`verify`/`fix` 角色化投递）已关闭，#15274、#15286、#15060 三条 autofix PR 长期挂着 `autofix/needs-human` 等待人工介入。

## 5. 功能需求趋势

- **会话管理与统一 agent loop**：#15327 与 #14600 分别从架构与桌面端可用性两个方向指向同一目标——会话状态在崩溃、重连、多界面切换下保持一致。
- **托管 agent 的可扩展性**：#16320（每会话 SQL 开销）、#16321（类体积）、以及多条 tenant 锁优化 PR，构成一条清晰的"多租户容量与数据库成本"主线。
- **长上下文与自托管推理兼容性**：#14097 的 SGLang 溢出错误处理，属模型侧错误语义适配。
- **通道与通知可靠性**：#16333、#16334、#16246 连续三条 GitHub channel 提案，说明 channel 是当前活跃演进面。
- **认证与提供方入口**：#14025 的千问AI平台 / QwenCloud 替换。
- **IDE / LSP 集成**：#14613 让 LSP 可通过设置启用，是 IDE 能力的低摩擦入口。

## 6. 开发者关注点

- **CI 可信度是第一痛点**。自动 bot 刷出的大量"无测试可识别"报告占据评论榜首（#14724 达 166 条），且 #12714 与 #14724 长期未收敛；叠加 #16188 的 token 限流导致无关 CI 被阻塞，社区很难从 issue 列表里分辨真实信号。#16219、#16220、#15814、#13075、#13009 等多条"Provisional"报告已被关闭，也印证了大量报告是暂态噪声。
- **CI 基础设施自身的脆弱性**：Maven 缓存写回失败（#15274）、sdk-java 解析器簿记污染 host 缓存（#15286）等修复迟迟需人工介入。
- **安全默认值被持续收紧**：项目 hook 审批（#16316、#16264）从多条路径收敛到"必须显式文件夹信任"，隐私开关开始真正阻断后台请求（v0.26.7），说明项目在向更保守的默认行为靠拢。
- **误导性错误信息**：#15741 的 MCP 重名工具报"无工具"、#14097 的 overflow 丢 token 数，这类问题虽小但显著增加排障成本。

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI 社区动态日报（2026-11-04）

> 数据来源：github.com/Hmbown/DeepSeek-TUI（实际链接与 Issue/PR 编号指向 codewhale-hq/Codewhale）

## 1. 今日速览

今日无新版本发布，社区活动集中在两类：一是 **WeCom 桥接（bridges）** 方向由同一作者连续提交 5 个修复/增强 PR，补齐富媒体、语音、消息分片与流式续期能力；二是 **CI 与主干编译阻塞**（#7148）已关闭，外部贡献通道恢复。此外，TUI 剪贴板图片粘贴（#7217/#7218）与 Windows 状态目录软链接兼容（#7219）成为新的修复焦点。

## 2. 版本发布

过去 24 小时内无新 Release。

## 3. 社区热点 Issues

> 注：过去 24 小时内更新的 Issue 共 5 条，以下为全部条目，未凑足 10 条。

1. **[#7148] [已关闭] main 编译失败：`PersistRequest::ClearCheckpoint` 成为死代码，所有 PR 必检项均失败**
   https://github.com/codewhale-hq/Codewhale/issues/7148
   影响面最大的一条：`main` 在仓库自身 lint 策略下无法编译，所有 PR 的必需检查都卡在同一错误上，导致外部贡献无法合并。现已关闭，贡献通道恢复，值得优先关注其对积压 PR 的连带影响。

2. **[#7216] [开放] `/patch-undo` 忽略 `turn_id`，撤销了错误的轮次**
   https://github.com/codewhale-hq/Codewhale/issues/7216
   接口接受与 `/undo` 相同的 `UndoTurnRequest`，但只读取 `depth`，当请求同时携带两字段时会删除错误的轮次。属于数据正确性问题，影响用户对撤销操作的信任，当前尚无评论。

3. **[#7214] [开放] 提案：provider picker 中保留大小写敏感的模型 ID**
   https://github.com/codewhale-hq/Codewhale/issues/7214
   来自贡献者的一个小修复提案，针对模型选择恢复时的 ID 大小写问题，作者已表明愿意提交贡献，适合作为新手切入点。

4. **[#5316] [开放] EPIC-005：TUI Crate 拆分（Umbrella 跟踪）**
   https://github.com/codewhale-hq/Codewhale/issues/5316
   长期架构跟踪 issue，评论数达 36 条，是当前讨论最活跃的条目。摘要显示已有实质性的拆分/Shapes 进展，但历史上的 full50k/10k 目标已被创始人粗粒度方向取代，说明范围仍在演进。

5. **[#6561] [开放] 审计：本地化/组件加固待办清单**
   https://github.com/codewhale-hq/Codewhale/issues/6561
   安全与可靠性跟踪 issue。据 11 月 2 日的发布验收记录，组件修复已有相当进展，但逐区域验收仍不完整，可作为安全相关贡献的任务池。

## 4. 重要 PR 进展

> 注：过去 24 小时内更新的 PR 共 11 条，以下全部列出，未凑足 10 条的补充说明：其中 #7204 已关闭，其余为开放状态。

**WeCom 桥接（由 gaord 提交，5 条）**
1. **[#7212] feat(bridges)：WeCom 桥接支持媒体与语音消息**
   https://github.com/codewhale-hq/Codewhale/pull/7212
   当前桥接对所有非文本帧返回“目前仅支持文本消息”，手机用户无法直接发送照片/视频/文件；语音（WeCom 已转写）同样被拒。此项解除最主要的移动端交互限制。

2. **[#7211] feat(bridges)：对运行中的 WeCom 轮次进行引导而非丢弃消息**
   https://github.com/codewhale-hq/Codewhale/pull/7211
   轮次运行期间 `runPrompt` 只回忙碌提示并丢弃消息内容，属于移动端最糟糕的输入丢失时机。整改后可将新消息注入正在执行的轮次。

3. **[#7210] fix(bridges)：在 10 分钟过期前轮换 WeCom 流式回复**
   https://github.com/codewhale-hq/Codewhale/pull/7210
   WeCom 流消息约 10 分钟后拒绝更新（errcode 846608），而 `streamTurnEvents` 整个轮次只用一个 `streamId`，需要提前轮换。

4. **[#7209] fix(bridges)：按 UTF-8 字节数切分 WeCom 回复**
   https://github.com/codewhale-hq/Codewhale/pull/7209
   `splitMessage` 按字符计数，而 WeCom 单条上限为 4096 UTF-8 字节；3500 个中文字符（约 10.5 KB）被当作一条发送并被静默截断。对中文用户影响直接。

5. **[#7208] fix(bridges)：在桥接回复中暴露 WeCom API 错误详情**
   https://github.com/codewhale-hq/Codewhale/pull/7208
   SDK 抛出的是普通对象（含 `errcode`/`errmsg`），现有错误格式化只读 `message`，导致真实错误信息丢失。

**TUI 与工作区（由 SparkofSpike 提交，3 条）**
6. **[#7219] fix(workspace)：将 home 状态目录排除在链接限制之外**
   https://github.com/codewhale-hq/Codewhale/pull/7219
   当状态根目录被 junction 重定向（`~/.codewhale` → `D:\CodeWhaleData`）时，会连带引发子代理存储准入失败等三个看似无关的问题。

7. **[#7218] fix(tui)：通过 .NET 回退读取 Windows 剪贴板图片**
   https://github.com/codewhale-hq/Codewhale/pull/7218
   针对 QQ 截图工具产生的截图在 `Ctrl+V` 时无响应、但经其他应用转手复制后即可粘贴的现象，提供回退读取路径。

8. **[#7217] feat(tui)：粘贴剪贴板图片并预览所有附件**
   https://github.com/codewhale-hq/Codewhale/pull/7217
   声明 Windows 下 `Ctrl+V` 从未真正附加图片，作者定位到 5 个独立缺陷，各自都足以导致失败。

**引擎工具修复（由 Lstarsky0 提交，2 条）**
9. **[#7215] fix(engine)：`grep_files` 支持花括号与嵌套目录 glob**
   https://github.com/codewhale-hq/Codewhale/pull/7215
   对于 `*.{txt,md}`、嵌套目录等常见 `include` 形式，工具静默返回空结果且无报错，模型会误判为“没有匹配”。

10. **[#7213] fix(engine)：`file_search` 结果统一以工作区根为基准**
    https://github.com/codewhale-hq/Codewhale/pull/7213
    `file_search` 带 `path` 时返回相对该路径的结果，而 `read` 等工具以工作区为基准，导致返回路径指向另一文件。

**其他**
11. **[#7204] [已关闭] fix(ci)：跟进 #7138 后的会话归属与终端回归修复**
    https://github.com/codewhale-hq/Codewhale/pull/7204
    #7138 在 CI 资格认证未完成时即被合并，此 PR 承接剩余修复。

## 5. 功能需求趋势

- **移动端/IM 桥接成熟化**：5 个 WeCom 相关 PR 覆盖富媒体、语音、消息分片、流式续期、错误透传，显示桥接正从“仅文本可用”向生产可用的方向补齐。
- **Windows 平台体验**：剪贴板图片读取、junction 重定向下的状态目录兼容，反映出 Windows 用户的可用性缺口正在被系统性修复。
- **工具体系一致性**：`grep_files` glob 支持、`file_search` 路径基准，社区在推动工具返回结果与模型预期保持一致，减少静默失败。
- **架构演进**：TUI crate 拆分（#5316）仍是长期主线，但验收目标已从量化指标转为粗粒度方向。
- **安全加固**：本地化/组件加固清单（#6561）持续存在，逐区域验收尚未完成。

## 6. 开发者关注点

- **主干可编译性是最大阻塞**：#7148 表明必检项失败会直接冻结所有外部贡献，CI 健康度是贡献者体验的前提。
- **静默失败比报错更危险**：`grep_files` 空结果、WeCom 消息静默截断、错误对象信息丢失，多起问题共同指向“失败但无提示”。
- **平台差异（尤其 Windows）**：剪贴板、junction 路径等平台特有问题需要专门回退路径。
- **撤销/状态操作的正确性**：`/patch-undo` 忽略 `turn_id` 反映接口参数与实际读取不一致，需加强请求字段校验。
- **贡献门槛偏好**：如 #7214 这类小而明确的提案，作者主动表明贡献意愿，适合被维护者快速接纳。

</details>

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar-personal) 自动生成。*