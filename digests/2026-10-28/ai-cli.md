# AI CLI 工具社区动态日报 2026-10-28

> 生成时间: 2026-10-28 06:51 UTC | 覆盖工具: 9 个

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

# AI CLI 工具生态横向对比分析（2026-10-28）

## 1. 生态全景

当前 AI CLI 工具已跨过"能否跑通"阶段，社区讨论重心全面转向**成本可控性、平台稳定性与可观测性**三大方向。token 消耗与配额透明问题在 Codex、Claude Code、Pi、DeepSeek TUI 四个工具中同时成为高热度议题，说明"钱花在哪"已成为最普遍的结构性痛点。同时，Windows/WSL2 平台的可靠性缺陷、MCP 集成的成熟度不足、以及"静默失败"难排查，构成跨工具的共同摩擦面。功能层面，子代理/后台任务编排进入可评估、可分享的深水区，扩展生态的安装校验与权限边界正在补齐。

## 2. 各工具活跃度对比

| 工具 | 版本发布 | 热点 Issue 关注点（最高热度） | PR 活动特征 | 整体活跃度 |
|---|---|---|---|---|
| **Claude Code** | v2.1.312（OIDC claim、click to send） | 多账号（#18435，225 评论/966👍）、多窗口 | 仅 2 条更新，无功能类 | 高（桌面端诉求强） |
| **OpenAI Codex** | rust-v0.165.0 + 4 个 alpha | 后台轮询浪费 token（#13733，45 评论） | 10+ 条，多为 bot 提交并关闭，集中 OTEL/安全 | 很高 |
| **Gemini CLI** | v0.66.0 稳定 + v0.67.0-preview + nightly | 子代理误报成功（#22323）、generalist 挂起（#21409） | 10 条，MCP 分页/扩展校验为主 | 高（多版本并行） |
| **GitHub Copilot CLI** | v1.0.105 及两个补丁版 | WSL2 CPU 空转（#3700）、钩子绕过（#2893） | 仅 4 条，全部聚焦安装脚本 | 中（补丁迭代） |
| **Kimi Code CLI** | 无 | — | — | 无活动 |
| **OpenCode** | v2.2.0 + v1.19.5 | 免费额度汇总（#59387，46 评论） | 10 条，含核心契约与 MCP OAuth 修复 | 高（功能迭代快） |
| **Pi** | 无 Release | 上下文上限卡死（#9409）、Anthropic 请求失败（#11376） | 24 条更新，压缩成本优化为主 | 很高（无版本但高流转） |
| **Qwen Code** | v0.26.2 稳定 + v0.26.3-preview + SDK | Managed Agent 架构（#12380，72 评论） | 10 条，CI 稳定性与托管能力 | 高（平台化推进） |
| **DeepSeek TUI** | 无 | Crate 拆分 EPIC（#5316，33 评论）、token 计量（#6011） | 10 条，本地化与可靠性修复 | 中高 |

> 说明：原始数据未提供统一的 Issues/PR 绝对计数（部分工具仅给 Top 列表），表中以可核实的热度指标与活动特征替代，避免虚构统计。

## 3. 共同关注的功能方向

**① 成本与 token 可观测性（最广泛共识）**
- Codex：#13733 轮询浪费 token、#45974 配额提前耗尽、#51088 缓存 prompt 异常消耗。
- Claude Code：#97074 无头模式比交互式多耗约 1.8 倍额度。
- DeepSeek TUI：#6011 按组件/模型/工具统计 token 与缓存命中率、#6969 驱逐策略成本盲区。
- Pi：#11500/#11499 压缩请求无共享前缀导致全额 prefill。

**② 后台任务/子代理编排可靠性**
- Codex：#15723、#32188、#44855 呼吁"事件驱动唤醒而非轮询"，明确对标 Claude Code 的 `monitor`。
- Gemini CLI：#22323 超限误报成功、#21409 generalist 挂起、#21968 不主动调用子代理。
- Claude Code：#105579/#105577 回合中消息排队不投递。

**③ MCP 集成成熟度**
- OpenCode：#51003 进程重复启动耗尽内存、#51089 注册竞态、#59821 OAuth 刷新令牌缺失。
- Gemini CLI：#29846/#29843 工具分页只取第一页。
- Copilot CLI：#4994 每会话弹 OAuth、#4600 图像结果被丢弃。
- Codex：#38162 本地 MCP 工具未暴露给 Chat 会话。

**④ 平台稳定性（Windows/WSL2 突出）**
- Claude Code：#94478 每秒 15–20 次 git 进程、#90688 刷新令牌回归。
- Codex：#16786 `ntfs.sys` 内存增长、#57005/#45858 启动 EPERM。
- Copilot CLI：#3700 CPU 空转、#5197 语音段错误。
- DeepSeek TUI：#2323 中文输入法长期未适配、#7109 CRLF 破坏校验。

**⑤ "静默失败"难排查**
- OpenCode：#51020 消息未写库、#50934 diff 误报无变更。
- Pi：#9409 卡死、#11486 内存/磁盘漂移。
- DeepSeek TUI：#6184 无日志无崩溃冻结。

## 4. 差异化定位分析

| 工具 | 功能侧重 | 目标用户 | 技术路线特征 |
|---|---|---|---|
| **Claude Code** | 桌面工作台 + 企业身份（OIDC）；IDE 集成 | 多身份专业开发者、企业 | 桌面端从单会话转向多身份工作台；认证体系（多账号/OIDC/刷新令牌）密集演进 |
| **OpenAI Codex** | 云端任务 + 企业可观测性 | 企业部署、云端协作 | OTEL 托管配置、header 脱敏、`codex doctor` 诊断；provider 扩展（GCP Vertex、Bedrock） |
| **Gemini CLI** | 子代理 + Browser Agent + 扩展生态 | 探索型开发者 | AST 感知工具链、bash 原生沙箱、扩展校验/GitHub 简写安装 |
| **Copilot CLI** | GitHub 工作流 + 企业 MCP 管控 | GitHub 生态用户、企业 | 安装脚本/供应链安全修补为主，功能迭代相对保守 |
| **OpenCode** | 桌面插件化 + 免费额度 | 免费用户 → 付费转化 | v2 桌面插件系统为最大方向；MCP 稳定性与权限边界收紧 |
| **Pi** | 多 provider 兼容 + 压缩成本 | 本地/第三方模型用户 | 供应商适配层（llama.cpp/LiteLLM/OpenRouter/OpenCode）；AI 辅助贡献常态化 |
| **Qwen Code** | 托管 Agent 平台化 | 企业集成、Java/Spring 宿主 | 双路径架构、故障门测试体系、同上下文 JVM 嵌入 |
| **DeepSeek TUI** | TUI 架构重构 + 中文本地化 | 中文社区、终端重度用户 | Crate 拆分（50k→10k 行收敛）、命令反馈本地化、成本诊断 |

## 5. 社区热度与成熟度

**高活跃 + 快速迭代**
- **OpenAI Codex / Pi**：无稳定发布计划的 Pi 仍保持 24 条 PR 流转，且 P0 缺陷当天合入，属"高频修补型"迭代；Codex 稳定版 + 4 个 alpha 并行，bot 驱动 PR 流显示工程化程度高但社区贡献入口受限。
- **Qwen Code**：72 评论的架构总纲 Issue 罕见，Stage F 故障门集中关闭显示测试体系进入收尾，处于**平台化成型期**。

**高热度 + 成熟度待补**
- **Claude Code**：桌面端诉求（多账号 966👍）极强，但 PR 仅 2 条、长期未合并（#15620 自 2025-12），社区贡献处理效率是短板。
- **Gemini CLI**：三版本并行 + 多个 p1 子代理缺陷并存，功能推进快但**代理可靠性滞后**。
- **Copilot CLI**：三版本修复同一问题（Fusion High/Max），平台回归反复，"发布验证对非 macOS 覆盖不足"被社区直接点名。

**稳定但方向收敛**
- **DeepSeek TUI**：聚焦架构清理与本地化，help wanted 标签多，**贡献入口友好**，适合外部开发者切入。
- **Kimi Code CLI**：本期无活动，需持续观察。

## 6. 值得关注的趋势信号

1. **"轮询即成本"将倒逼架构转型**：Codex 多个高赞 Issue 指向同一根因（后台监控依赖模型轮询），#44855 直接要求对标 `monitor`。**对开发者参考**：选择工具时应评估其后台任务唤醒机制，轮询式设计在高推理档位下会显著吞配额。

2. **压缩/上下文复用成为新的性能战场**：Pi 的 #11499（压缩请求共享前缀）、DeepSeek TUI 的 #6969（驱逐导致全前缀重填）、Claude Code 的 #100277（Auto-Compact 过早触发）表明，**上下文管理的经济性**正取代单纯的长上下文能力成为竞争点。

3. **可观测性从"有日志"转向"可解释用量"**：Codex 的 OTEL 托管配置 + header 脱敏、DeepSeek TUI 的分组件 token 计量、Codex 的 `codex doctor --network-only`，显示企业部署需求正推动**用量与诊断能力产品化**。

4. **"看起来成功、实际未生效"是新型信任风险**：Copilot 的钩子并行绕过（#2893）、安装校验空转（#5093），OpenCode 的静默持久化失败（#51020），Pi 的子代理误报成功（#22323）——**失败即放行的隐式语义**需要显式化，这是评估工具安全边界的关键维度。

5. **AI 辅助贡献常态化**：Pi 多条 Issue/PR 标注由 AI 代理起草、人工复核，甚至 bot 提交修复。维护者需适配新的协作与审查流程，这也意味着**社区活跃度指标需重新解读**（数量增长未必等于人类贡献增长）。

6. **平台覆盖不均是升级风险源**：Windows/WSL2 在 Claude Code、Codex、Copilot CLI、DeepSeek TUI 四家中同时出现严重回归。**对技术决策者参考**：跨平台团队在升级前应重点验证非 macOS 环境的发布质量。

---

*说明：以上分析严格基于所提供材料；各工具 Issues/PR 绝对计数在原始数据中未统一给出，故以可核实的热度指标与活动特征替代，未做推算。*

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告

**数据截止：2026-10-28｜来源：github.com/anthropics/skills**

> 说明：PR 评论数字段在供给数据中均为 `undefined`，因此下文"热门 Skills 排行"以更新活跃度、修复问题的重要性及关联 Issue 热度综合判断，"高潜力待合并"部分则以持续的社区讨论与更新为依据。

---

## 1. 热门 Skills 排行（PR 维度）

**① md2video-audio — Markdown 转视频带配音**（PR #1742 同批高活跃新增类）
- 功能：将 Markdown 文档直接编译为带真人感旁白的 MP4 视频。
- 热点：零成本视频生成属于跨模态新场景，拓展了 Skills 能力边界。
- 状态：OPEN（创建 2026-09-01，更新 2026-09-15）
- https://github.com/anthropics/skills/pull/1703

**② webapp-testing 系列修复（#1980 / #1976）**
- 功能：Web 应用自动化测试技能中的服务器启动与元素发现脚本修复。
- 热点：#1980 移除 `subprocess` 的 `shell=True`（安全）与 #1976 修正 textarea/select 元素上报（正确性），体现该技能被真实高频使用。
- 状态：均 OPEN
- https://github.com/anthropics/skills/pull/1980 ｜ https://github.com/anthropics/skills/pull/1976

**③ notion-spec-to-implementation + quantitative-resume-auditor**（PR #1245）
- 功能：把 Notion 规格页拆解为可执行任务；量化简历审计。
- 热点：将产品规格转化为 AI 可执行计划的工作流技能，属社区高需求方向；长期保持更新（至 2026-10-15）。
- 状态：OPEN
- https://github.com/anthropics/skills/pull/1245

**④ pyxel — 复古游戏开发**（PR #525）
- 功能：用 Python/Pyxel 创建、调试、验证像素风游戏，含无头输入驱动运行与帧检查。
- 热点：老牌 PR 持续被关注（创建 2026-03，更新至 2026-10-23），垂直领域创作类技能。
- 状态：OPEN
- https://github.com/anthropics/skills/pull/525

**⑤ document-typography — 生成文档的排版质检**（PR #514）
- 功能：修复孤行、孤段、编号错位等 AI 生成文档的典型排版问题。
- 热点：直击"AI 生成文档质量"通用痛点。
- 状态：OPEN（长期未合并）
- https://github.com/anthropics/skills/pull/514

**⑥ proofcore-contract-auditor — 智能合约审计**（PR #1771）
- 功能：对 Solidity/Rust 合约做静态分析，并将审计证明锚定到 TON 区块链。
- 热点：Web3 垂直场景 + 可验证审计，新方向探索。
- 状态：OPEN
- https://github.com/anthropics/skills/pull/1771

**⑦ ODT skill — OpenDocument 创建/模板填充/转 HTML**（PR #486）
- 功能：补齐 ODT/ODS 文档处理能力（对照已有 docx/pptx/pdf）。
- 状态：OPEN
- https://github.com/anthropics/skills/pull/486

---

## 2. 社区需求趋势（Issues 提炼）

| 方向 | 代表 Issue | 诉求要点 |
|---|---|---|
| **信任边界 / 命名空间安全** | #492（46 评论，👍3） | 社区技能冒充 `anthropic/` 官方命名空间，存在被授予过高权限的风险——当前讨论度最高 |
| **团队/组织级共享** | #228（17 评论，👍8） | 希望 Claude.ai 内直接共享 Skill 库，而非下载 `.skill` 文件手动上传 |
| **技能触发与评测的可信度** | #556（13 评论，👍7）、#1390 | `run_eval.py` 触发率为 0%、MCP 评测对真实服务器全部误报，评测体系本身需修 |
| **agent 状态与上下文治理** | #1329、#1487 | 压缩符号记忆（compact-memory）、`claude-api` 单次注入约 156k token 撑爆上下文 |
| **质量门禁 / 治理模式** | #1385、#412 | 前置校准→对抗评审→交付验证三阶段流程；agent 治理安全模式 |
| **去重与插件管理** | #189（👍9） | 两个插件包含相同技能导致上下文重复 |
| **Skill 写作规范** | #202、#2064 | 描述应从"做什么"改为"何时用"，减少教学式冗余 token |

总体看：需求已从"增加新 Skill"偏向**生态可信性、评测可靠性、上下文效率与团队协作**四大基础设施方向。

---

## 3. 高潜力待合并 Skills（活跃 OPEN PR）

- **clock 触发隔离与跨平台修复** PR #1298 `fix(skill-creator)`：修复触发评测误判、Windows 兼容与运行时失败被误记为未触发，更新至 2026-09-16。https://github.com/anthropics/skills/pull/1298
- **YAML frontmatter 解析修复** PR #1997：修正 `parse_skill_md` 手工剥引号导致的元数据失真，更新至 2026-10-19。https://github.com/anthropics/skills/pull/1997
- **package_skill.py 独立执行修复** PR #1681：解决 `ModuleNotFoundError`，更新至 2026-10-24。https://github.com/anthropics/skills/pull/1681
- **mcp-builder 适配 mcp>=2** PR #1742：`streamable_http_client` 重命名及自定义 header 适配，更新至 2026-10-08。https://github.com/anthropics/skills/pull/1742
- **pptx 参数校验** PR #1975：`--cols < 1` 前置报错，更新至 2026-10-27（最新活跃）。https://github.com/anthropics/skills/pull/1975
- **docx 超时与产物校验** PR #1792：LibreOffice 超时不再谎报成功。https://github.com/anthropics/skills/pull/1792

共同特征：**多为 skill-creator 与核心文档技能（docx/pptx/mcp-builder）的缺陷修复**，合并价值明确，落地阻力小。

---

## 4. Skills 生态洞察

**社区当前最集中的诉求已从"新增 Skill"转向"让 Skill 更可信、更可评测、更省上下文"——命名的安全可信性、评测的准确性、以及上下文与共享的基础设施，才是生态发展的真正瓶颈。**

---

# Claude Code 社区动态日报（2026-10-28）

## 1. 今日速览

今日社区焦点集中在 Claude Desktop 的使用体验上：多账号切换需求（#18435）以 225 条评论、966 个点赞成为最受关注的 Issue，多窗口支持（#30154）同样热度很高。与此同时，成本与认证问题持续发酵：无头模式 token 消耗异常（#97074）和多项登录/刷新令牌故障仍在等待修复。Release v2.1.312 主要改进了网关身份识别与全屏下的消息发送交互。

## 2. 版本发布

**v2.1.312**
- 为 Claude apps gateway 新增 `oidc.user_id_claim`，支持用 `sub` 之外的 id_token claim（如 Microsoft Entra ID 的 `oid`）来识别用户。
- 新增 click to send：全屏模式下点击排队消息下方的 "to send now" 提示即可立即发送，与快捷键行为一致。
- 链接：anthropics/claude-code Release v2.1.312

## 3. 社区热点 Issues

1. **#18435 多 Claude 账号管理（Desktop）** — [OPEN][enhancement] 225 评论 / 966 👍。社区呼声最高，要求桌面端支持多账号与快速 profile 切换，可见多身份使用已成刚需。
2. **#30154 Desktop 多窗口支持** — [OPEN][enhancement] 76 评论 / 253 👍。当前为单窗口 + 侧边栏会话管理，用户希望单实例内并行多窗口。
3. **#97074 无头 `claude -p` token 消耗偏高** — [OPEN][bug] 54 评论 / 93 👍。报告称同样工作量下，`sdk-cli` 入口比交互式 `cli` 多消耗约 1.8 倍 5 小时窗口额度，直接关系到成本，因此值得优先核查。
4. **#33932 VS Code 扩展 Diff 审阅 UI** — [OPEN][enhancement] 47 评论 / 219 👍。社区希望获得类似 GitHub Copilot Edits Review 的差异审阅界面，IDE 集成体验仍是重点诉求。
5. **#94478 Windows 桌面端高频拉起 git 进程** — [OPEN][bug][has repro] 12 评论。测得每秒 15–20 次 `git.exe` 启动，持续运行会放大内核池泄漏至约 6 GB/天，是明显的性能与稳定性问题。
6. **#90688 Windows/VS Code OAuth 刷新令牌被拒（400）** — [OPEN][bug][regression]。自 2.1.247 以来每次睡眠/唤醒后刷新令牌失效，被迫每日重新 `/login`，属于影响日常使用的回归缺陷。
7. **#103056 macOS 登录在 CAPTCHA 后失败** — [OPEN][bug] 11 评论。CLI 与 Desktop 的 `/login` 均出现 "Couldn't complete sign-in"，无重定向或验证码，阻碍新用户接入。
8. **#95764 Opus 5 工具调用间文本被折叠为 thinking** — [OPEN][bug][has repro] 6 评论。自 2026-09-11 起，工具调用之间的散文以摘要 thinking 块返回，代码块丢失且 Desktop 不显示，影响可观测性与信任。
9. **#100277 Opus 5.5 1M 上下文下 Auto-Compact 过早触发** — [OPEN][bug]。状态栏约 27%（preTokens 275,318）即触发压缩，与 1M 窗口预期不符。
10. **#105579 / #105577 Desktop 回合中消息排队不投递** — [OPEN][bug]（均为 2026-10-28 新报）。Windows Code 标签页中回合内发送的消息停留在 "1 message queued"，回合结束后也不投递；值得注意的是，与今日 Release 新增的 click to send 属同一交互区域。

## 4. 重要 PR 进展

过去 24 小时内仅有 2 条 PR 更新，无更多条目可列出：

1. **#15620 fix(plugin-dev): 修正 agent/command 示例中的 tools 格式** — [OPEN]。修复 YAML 解析问题：`tools:` / `allowed-tools:` 中的 JSON 数组被当作字面字符串；将 `["Read", "Write"]` 改为逗号分隔的 `Read, Write`，涉及 plugin-dev 中 11 个文件。
2. **#105303 从 claude-plugins-official 安装 marketplace 插件** — [CLOSED]。作者注明合并顺序：需先合 anthropics/claude-plugins-official#6905（code-review 移植）与 #6906（插件版本），否则用户将拿到旧的 code-review 且更新无效。

## 5. 功能需求趋势

- **Desktop 多账号与多窗口**：#18435、#30154 反映桌面端正从单会话工具转向多任务、多身份工作台。
- **IDE 审阅体验**：#33932 指向 VS Code 内更完整的 diff/review 工作流。
- **上下文管理机制**：围绕 auto-compact 的讨论密集——#100277（过早触发）、#90089（阈值触发的 auto-clear + handover 文档 + 自动恢复）、#82658（自动清空上下文，已关闭）、#102260（idle compaction 被远程开关无通知启用）。
- **界面可定制与可读性**：#102699 请求侧边栏主题/用户 CSS（项目标题对比度低）；#104695 批评 Windows 端 fizzy_lake 改版破坏深色主题。
- **认证与身份**：多账号、OIDC claim（v2.1.312）、OAuth 刷新、CAPTCHA 后登录失败，共同构成认证主题簇。

## 6. 开发者关注点

- **成本透明度**：无头模式与交互模式的配额消耗差异（#97074）是当前最具经济影响的反馈。
- **认证稳定性**：刷新令牌被拒（#90688）、登录流程中断（#103056）造成日常摩擦，且 #90688 为明确回归。
- **Windows 桌面端质量**：高频 git 进程（#94478）、消息排队不投递（#105579/#105577）、UI 改版争议（#104695）集中出现。
- **模型行为可预期性**：工具调用间文本被折叠（#95764）与上下文压缩时机（#100277）影响开发者对模型输出的信任。
- **流程治理**：远程 feature flag 无通知启用（#102260）以及长期未合并的 PR（#15620 自 2025-12 创建），反映出对变更可见性与社区贡献处理效率的关注。

*注：本期数据中 PR 更新仅 2 条，已全部列出，未凑足 10 条。*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报 · 2026-10-28

## 1. 今日速览

今日主线是**后台任务轮询导致的 token 浪费**：多个高热度 Issue 共同指向同一症结——后台进程状态检查会触发完整 API 往返，社区正密集呼吁事件驱动唤醒机制。版本侧发布了 **rust-v0.165.0**，新增 GCP Vertex AI provider 与 GPT-6.1 Terra 模型目录，另有 4 个 0.166.0 alpha 预发布。PR 区几乎全部由自动化账号 `copyberry[bot]` 提交并直接关闭，集中在 OpenTelemetry 配置治理、敏感信息脱敏与遥测链路修复。

## 2. 版本发布

**rust-v0.165.0（稳定版）**
- 新增内置 Google Cloud Vertex AI provider，通过 `model_provider = "gcp"` 配置（#56265）
- 模型目录新增 GPT-6.1 Terra（#57337）
- 会话选择器新增仓库过滤器；agent 命令中心新增目录分组，便于导航

**rust-v0.166.0-alpha.2 / .3 / .4 / .5（预发布）**
- 均为无说明的 alpha 版本，仅标注版本号。

## 3. 社区热点 Issues

1. **#13733 后台轮询浪费 token**（45 评论 / 45 👍，今日评论数最高）— 每次 `write_stdin` 轮询都会携带完整历史触发一次 API 往返，直接消耗 credits。这是今日社区共识最强的痛点。
   https://github.com/openai/codex/issues/13733

2. **#15723 后台子进程/子 agent 完成后不唤醒调用方 agent**（29 评论）— 与 #13733 同源，导致 agent 只能被动等待或轮询。
   https://github.com/openai/codex/issues/15723

3. **#32188 后台 exec 会话完成时的事件驱动唤醒**（24 评论 / 23 👍）— 明确的增强提案，对应 #13733/#15723 的解法。
   https://github.com/openai/codex/issues/32188

4. **#18396 TUI 中隐藏工具调用/输出**（21 评论 / 53 👍，今日点赞最高）— 终端被冗长工具输出淹没，反映 TUI 可读性诉求强烈。
   https://github.com/openai/codex/issues/18396

5. **#16786 Windows 应用反复执行 `git ls-files`，`ntfs.sys` 非分页池持续增长**（21 评论）— 潜在系统级资源泄漏，严重度高于普通 UI 缺陷。
   https://github.com/openai/codex/issues/16786

6. **#38162 ChatGPT Desktop 本地 MCP 工具被发现但未暴露给 Chat 会话**（20 评论）— MCP 生态落地的关键断点。
   https://github.com/openai/codex/issues/38162

7. **#55890 Codex Cloud GitHub Review 手动 `@codex review` 卡在 Running**（17 评论）— 代码评审主流程阻塞，影响 PR 协作。
   https://github.com/openai/codex/issues/55890

8. **#45974 CLI 反复以 xhigh 唤醒轮询确定性长任务，周配额在任务完成前耗尽**（11 评论）— 将轮询问题升级为配额可用性问题。
   https://github.com/openai/codex/issues/45974

9. **#51088 即使在简单缓存 prompt 上配额也异常快速消耗**（8 评论）— 用户侧感知的计费/配额异常，需官方排查。
   https://github.com/openai/codex/issues/51088

10. **#53558 ChatGPT iOS 无法加载已保存的 Codex Cloud 环境（Safari 正常）**（10 评论 / 8 👍）— 平台一致性问题，定位线索清晰。
    https://github.com/openai/codex/issues/53558

> 其他可关注：#57005、#45858（Windows `rename_staging` EPERM 启动失败）、#42981（内置 60 秒轮询指令覆盖用户显式要求）、#44855 / #33542 / #32993（monitor 能力提案）、#57541（CLI pets 终端兼容）。

## 4. 重要 PR 进展

以下 PR 均为 `copyberry[bot]` 提交，状态为 **CLOSED**：

1. **#57649 支持托管式 OpenTelemetry 配置要求** — 允许 `requirements.toml` 管理 OTEL 日志开关、工具结果字节上限、环境及 log/trace/metrics exporter。
   https://github.com/openai/codex/pull/57649

2. **#57638 在 app-server 协议中新增 OpenTelemetry 要求类型** — 为 `ConfigRequirements` 增加可选 `otel` 配置。
   https://github.com/openai/codex/pull/57638

3. **#57654 在 app-server 配置响应中脱敏 OTEL exporter headers** — 修复配置响应（有效配置、来源层、托管要求、覆盖写入）泄露凭据的问题，属安全修复。
   https://github.com/openai/codex/pull/57654

4. **#57658 支持托管 OTEL 元数据与 PEM 客户端身份** — 支持 `otel.span_attributes` 与 `otel.tracestate`。
   https://github.com/openai/codex/pull/57658

5. **#57657 修复账号切换后 trace exporter 未激活** — 启动时关闭追踪会导致订阅者缺少 trace bridge。
   https://github.com/openai/codex/pull/57657

6. **#57606 新增 `codex doctor --network-only`** — 聚焦网络诊断：有效配置、网络环境、provider HTTP 可达性、Responses WebSocket 检查。
   https://github.com/openai/codex/pull/57606

7. **#57628 发布产物中停止附带 `codex-exec-server`** — 从 CLI / app-server 包、发布二进制清单与 Bazel 运行时归档中移除独立 executor。
   https://github.com/openai/codex/pull/57628

8. **#57618 流建立后释放采样 prompt** — 避免响应流式返回期间继续持有图片/音频负载。
   https://github.com/openai/codex/pull/57618

9. **#57615 在子 agent 重载后保留 rollout tracing** — 修复被驱逐子 agent 重载后追踪中断，以及 Code Mode 会话复用旧 cell ID。
   https://github.com/openai/codex/pull/57615

10. **#57635 取消归档线程时恢复其派生子线程** — 修复归档会连带归档子线程、但取消归档只恢复父线程的不对称行为。
    https://github.com/openai/codex/pull/57635

> 其他：#57644（按 Bazel 构建的 V8 归档生成 Rust bindings）、#57626（显式 `model_provider = "openai"` 时仍显示 Bedrock 引导）、#57612（旧版 VTE 后端禁用终端状态序列）、#57607（运行时认证与模型 provider/目录共享）、#57599（命令前缀保存提示的目录标题）。

## 5. 功能需求趋势

- **事件驱动 / monitor 机制（最热）**：#13733、#15723、#32188、#33542、#32993、#44855、#45974 共同指向"后台任务完成时应回调而非轮询"。其中 #44855 明确提出对标 Claude Code 的 `monitor` 工具，并要求远程主机执行作为核心能力；#32993 要求面向 headless Linux / SSH / 远程开发机的持久自愈监控工作流。
- **终端体验（TUI）**：#18396 要求折叠工具调用输出；#57541 要求 `pets` 识别 rozi、herdr 等 Kitty graphics 终端（`/pets` 报 "Pets unavailable"）。显示层与交互层的可定制性被反复提及。
- **MCP 与扩展生态**：#38162 反映本地 MCP 工具在桌面端 Chat 会话中不可用，MCP 可用性是社区关注的功能面。
- **云端与代码评审流程**：#55890（Cloud GitHub Review 卡死）、#53558（iOS 环境选择器失败）说明 Codex Cloud 与多端一致性仍有缺口。
- **Windows 平台稳定性**：50 条 Issue 中 Windows 相关占比显著（#16786、#38162、#57005、#45858、#55527、#53341），涵盖内核内存增长、启动失败、权限设置不持久、审批入口缺失。
- **模型与 provider 扩展**：版本侧已落地 GCP Vertex AI 与 GPT-6.1 Terra；PR #57626 涉及 Bedrock 引导可见性，provider 选择仍是活跃演进方向。

## 6. 开发者关注点

- **轮询即成本**：多个高赞 Issue 的根因相同——后台任务监控依赖模型轮询，既浪费 token 又拖慢任务，并在高推理档位下提前耗尽周配额（#13733、#45974、#51088）。这是当前最影响日常使用的结构性问题。
- **配额透明度与消耗异常**：用户难以判断额度为何快速下降，即使是缓存命中 prompt 也出现异常消耗（#51088），需要可解释的用量反馈。
- **平台可靠性**：Windows 上的启动 EPERM（#57005、#45858）、`ntfs.sys` 内存增长（#16786），以及 `@computer` 的"始终允许"不生效（#55527）、拒绝后无审批入口（#53341），都在阻断实际工作流。
- **配置与可观测性基础设施**：一批 PR 集中在 OTEL 托管配置、header 脱敏与 trace 链路连续性，以及 `codex doctor --network-only` 这类诊断能力，说明企业部署下的可观测性与凭据安全正被补齐。
- **用户意图被内置指令覆盖**：#42981 指出内置 60 秒更新/等待指令会覆盖用户明确要求的低频监控，与轮询问题互为因果，反映行为策略需要更尊重显式指令。

---
*说明：Issue #56890 实际编号为 #55890；PR 评论数字段在数据中为 `undefined`，故未计入。以上内容均基于所提供的 GitHub 数据。*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报（2026-10-28）

## 今日速览

今日仓库发布三个版本：v0.66.0 稳定版、v0.67.0-preview.0 预览版，以及提交 `gfa5c17365` 的 nightly 构建；nightly 的改动集中在核心路径处理，包括 Android（Termux）可信系统路径与 CRLF 归一化。社区侧，子代理和 Agent 行为仍是讨论中心：多个 p1 级 Bug（子代理 MAX_TURNS 被误报为成功、generalist agent 挂起、Wayland 下 browser 子代理失败）持续获得评论。同时，MCP 工具分页发现、扩展安装与校验等 PR 正在推进。

---

## 版本发布

- **v0.67.0-nightly.20261028.gfa5c17365**（nightly）
  主要包含两项核心修复：
  - 允许 Android（Termux）上的受信任系统路径用于 ripgrep 解析（#29884）；
  - 在 `getDiffContextSnippet` 中进行 diff 前归一化 CRLF 行尾。
  配套版本号提升 PR：#29996。

- **v0.67.0-preview.0**（预览版）
  包含 v0.65.0 changelog、版本号提升至 `0.67.0-nightly.20261020.gb041de017`，以及 v0.66.0-preview 的 changelog 条目。

- **v0.66.0**（稳定版）
  更新 ROADMAP.md，移除已过时的 2025 年路线图引用（#29723）；同时包含 v0.65.0-preview.0 的 changelog 与版本号提升。

---

## 社区热点 Issues（Top 10）

1. **#22323 [p1] 子代理 MAX_TURNS 耗尽被报告为 GOAL 成功**
   `codebase_investigator` 子代理在未做任何分析就达到最大轮次限制时，仍返回 `status: "success"` 和 `Termination Reason: "GOAL"`，掩盖了中断事实。这属于可观测性与正确性问题，13 条评论为今日最高活跃度。
   https://github.com/google-gemini/gemini-cli/issues/22323

2. **#21409 [p1] generalist agent 无限挂起**
   CLI 一旦转交 generalist agent 就永久挂起，简单任务（如创建文件夹）也可等待长达一小时；用户被迫指示模型不要转交子代理。8 条评论、8 个 👍，是今日点赞最多的 Issue，说明影响面较广。
   https://github.com/google-gemini/gemini-cli/issues/21409

3. **#21968 [p2] Gemini 不会主动使用 skills 与子代理**
  用户反馈：除非显式指令，模型几乎不会主动调用自定义 skills 和子代理。这关系到 Agent 编排能力的实际可用性。
   https://github.com/google-gemini/gemini-cli/issues/21968

4. **#19873 [p2] 利用模型 bash 亲和性：零依赖 OS 沙箱与执行后意图路由**
   提案认为 Gemini 3 模型天然是 bash 用户，擅长串联 `grep`、`cat`、`sed`、`awk` 等 POSIX 工具；建议通过沙箱化执行充分释放这一能力。属于产品方向性增强提案。
   https://github.com/google-gemini/gemini-cli/issues/19873

5. **#22745 [p2] 评估 AST 感知的文件读取、搜索与代码映射**
   该 EPIC 追踪 AST 感知工具能否减少读取方法边界所需的轮次；配套的 #22746 建议以 tilth 或 glyph 为起点改进 `codebase_investigator`，属于工具效率优化方向。
   https://github.com/google-gemini/gemini-cli/issues/22745

6. **#21983 [p1] browser 子代理在 Wayland 下失败**
   Linux Wayland 环境下 browser 子代理无法正常工作，是明确的平台兼容性缺陷。
   https://github.com/google-gemini/gemini-cli/issues/21983

7. **#22267 [p2] Browser Agent 忽略 settings.json 覆盖项（如 maxTurns）**
   全局与项目级 `settings.json` 配置对 Browser Agent 完全失效，与 AgentRegistry 行为不一致，属于配置一致性 Bug。
   https://github.com/google-gemini/gemini-cli/issues/22267

8. **#24246 [p2] 工具数量超过 128 个时触发 400 错误**
   当可用工具超过上限时 CLI 报 400 错误，社区期望 Agent 能更智能地限制启用工具的范围。该问题关系到扩展生态的可扩展性。
   https://github.com/google-gemini/gemini-cli/issues/24246

9. **#22672 [p2] Agent 应停止或抑制破坏性行为**
   模型在复杂 git 操作中可能使用 `git reset` 或 `--force`，而存在更安全的替代方案；资源维护场景也有类似风险。属于安全性需求。
   https://github.com/google-gemini/gemini-cli/issues/22672

10. **#22598 [p3] 子代理轨迹应可通过 `/chat share` 查看**
    子代理轨迹已由 chat recording service 保存，但不易访问；开放分享有助于评审与评估子代理行为。
    https://github.com/google-gemini/gemini-cli/issues/22598

其他值得留意：#23571（模型在随机位置创建临时脚本，干扰干净提交）、#22465（创建 vite app 时卡在交互式提示）、#22466（`\n` 转义处理错误）、#21924（终端 resize 时应高性能且无闪烁）、#20079（`~/.gemini/agents/` 下的符号链接不被识别为子代理）。

---

## 重要 PR 进展（Top 10）

1. **#29999 [core] Windows 下 `isWithinRoot` 大小写不敏感**
   使 `isWithinRoot()` 与 `getNormalizedRelativePath()` 在 win32 上忽略大小写，Linux/macOS 仍保持大小写敏感。解决 Windows 盘符与目录段大小写不一致导致的误判。
   https://github.com/google-gemini/gemini-cli/pull/29999

2. **#29998 [p2, core] 动态模型配置下在 `/model` 中列出 Auto**
   当启用 `experimental.dynamicModelConfiguration` 且用户无预览模型访问权（`hasAccessToPreview === false`）时，确保 `Auto` 选项出现在 `/model` 对话框与 ACP 可用模型列表中。
   https://github.com/google-gemini/gemini-cli/pull/29998

3. **#29980 [p2, extensions] 新增扩展校验命令与评估测试**
   实现 `gemini extensions validate <path>`，在安装或发布前校验本地扩展配置（含 `gemini-*` 清单检查），提升扩展生态的可靠性。
   https://github.com/google-gemini/gemini-cli/pull/29980

4. **#29846 [agent] 安全分页 MCP 工具发现**
   针对分页 `tools/list` 的 MCP 服务器，当前只暴露第一页工具。该 PR 在构建工具目录前取回全部分页，使初始发现与动态刷新覆盖完整工具集。
   https://github.com/google-gemini/gemini-cli/pull/29846

5. **#29843 [agent] 基于 nextCursor 修复 MCP 工具分页**
   与 #29846 解决同一问题（fixes #29825）：`discoverTools` 仅请求第一页并静默丢弃其余工具。
   https://github.com/google-gemini/gemini-cli/pull/29843

6. **#29841 [extensions] 扩展安装支持 GitHub 仓库简写**
   `gemini extensions install <source>` 现接受 `owner/repo`、`github.com/owner/repo`、`github:owner/repo` 等简写形式。
   https://github.com/google-gemini/gemini-cli/pull/29841

7. **#29965 [p3, cli] 修复 ExpandableText 截断与切换行为**
   修复 UTF-16 代理对边界截断导致的 Unicode 丢字问题（如 emoji 只渲染半字符），属于 UI 渲染质量修复。
   https://github.com/google-gemini/gemini-cli/pull/29965

8. **#29735 [p2, extensions]（已关闭）处理扩展 downloadFile 的响应与写入流错误**
   `downloadFile()` 不再仅依赖 `finish`，而是显式处理 HTTP 响应流与目标写入流的失败，使 Promise 在出错时正确 reject。
   https://github.com/google-gemini/gemini-cli/pull/29735

9. **#29737 [agent]（已关闭）新增 Gemini 4 Argon 模型支持**
   注册 `gemini-4-argon` 至 `VALID_GEMINI_MODELS`，使其可像普通模型一样被选择，而非仅通过自定义模型覆盖使用。
   https://github.com/google-gemini/gemini-cli/pull/29737

10. **#29995 [agent]（已关闭）README 澄清项目范围与工具版图**
    更新 README，反映 Google CLI 产品版图变化，并在顶部加入可快速浏览的免责声明与工具选择指南。
    https://github.com/google-gemini/gemini-cli/pull/29995

---

## 功能需求趋势

- **子代理编排与可观测性**：多个高优先级 Issue 聚焦子代理可靠性（#22323、#21409、#22598）和主动使用（#21968），表明社区正从“能跑”转向“可评估、可分享”。
- **Browser Agent 成熟度**：配置覆盖失效（#22267）、会话接管与锁恢复（#22232）、Wayland 兼容（#21983）构成完整的一组 Browser Agent 需求。
- **AST 感知工具链**：以 #22745、#22746 为代表，探索用 AST 降低读取轮次、改进代码库映射。
- **Bash 原生与沙箱化**：#19873 提出以零依赖 OS 沙箱释放模型的 POSIX 工具亲和性。
- **扩展生态**：扩展校验命令（#29980）、GitHub 简写安装（#29841）、下载流错误处理（#29735）显示扩展的安装、校验与鲁棒性正在补齐。
- **模型支持**：Gemini 4 Argon 注册（#29737）与动态模型配置下 Auto 选项（#29998）。
- **终端体验与平台兼容**：resize 无闪烁（#21924）、Unicode 截断（#29965）、Windows 路径大小写（#29999）、Termux 路径（#29884）反映跨平台打磨。
- **工具规模上限**：#24246 反映扩展增多后，工具数量治理成为新问题，MCP 分页修复（#29846、#29843）同属这一方向。

---

## 开发者关注点

- **Agent 挂起与误报成功是最突出的痛点**：generalist agent 无限挂起（#21409，8 👍）与子代理超限被标为成功（#22323）都直接影响用户对结果的信任。
- **模型不主动调用扩展能力**：skills 与子代理需显式指令才生效（#21968），限制了 Agent 自主性。
- **破坏性操作缺乏防护**：`git reset`、`--force` 等命令在存在安全替代时仍被使用（#22672），开发者希望内置安全约束。
- **工作区污染**：模型在随机目录生成临时编辑脚本（#23571），清理成本高，影响干净提交。
- **交互式命令卡死**：创建 vite app 时卡在交互提示（#22465），说明需要为交互式 CLI 增加处理策略与行为评估。
- **配置不生效**：`settings.json` 对 Browser Agent 无效（#22267），以及符号链接形式的 agent 文件不被识别（#20079），属于配置与文件发现的一致性问题。
- **平台细节问题**：Termux、Wayland、Windows 大小写路径、Unicode 截断等边缘场景仍不断暴露，跨平台质量是持续诉求。

---

*说明：以上内容均基于提供的 GitHub 数据整理；评论数字段部分 PR 显示为 undefined，故未引用。*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报（2026-10-28）

## 今日速览

过去24小时内 Copilot CLI 连发三个补丁版本（v1.0.105、v1.0.105-1、v1.0.105-0），核心修复指向同一问题：长上下文会话中无法通过 `/model` 选择 Copilot Fusion High/Max。社区侧最受关注的两条线索是 Windows/WSL2 平台稳定性（#3700 高 CPU 空转、#5197 语音服务段错误、#4026 反复崩溃）与安全相关缺陷（#2893 `preToolUse` 钩子被并行工具调用绕过）。此外，多起非交互/ACP 与 MCP 相关回归仍在开放状态。

## 版本发布

- **v1.0.105**（2026-10-27）：修复长上下文会话下 `/model` 选择 Copilot Fusion High 或 Max 失效的问题。
- **v1.0.105-1**：标注为"Fixes and changes"，未提供细节。
- **v1.0.105-0**：修复项，内容与 v1.0.105 相同（长上下文会话中 `/model` 选择 Fusion High/Max）。
- 链接: github/copilot-cli Releases

> 注：三个版本均于 2026-10-27 发布，修复主题高度重合，疑似针对同一回归的连续迭代。

## 社区热点 Issues

1. **#3700 [OPEN] [High severity] WSL2 下主线程空转约 215% CPU、TUI 输出冻结** — 高严重度性能回归（#2208 的复发），每个新会话立即复现，TUI 实质上不可用。是当前平台稳定性问题中最严重的一条。
   链接: github/copilot-cli Issue #3700

2. **#2893 [OPEN] `preToolUse` 钩子在并行工具调用下被静默绕过** — `timeoutSec` 超时后 CLI 停止等待但钩子进程未被终止，且并行调用改为串行派发时存在兜底放行逻辑。涉及权限与插件安全边界，值得优先处理。
   链接: github/copilot-cli Issue #2893

3. **#2760 [CLOSED] 为 429 响应实现正确的 HTTP 重试逻辑** — 原问题指 CLI 收到 429 后立即断开连接并无退避地重试。已关闭，说明重试行为已获处理，对高频触发限流的用户有直接价值。
   链接: github/copilot-cli Issue #2760

4. **#4994 [OPEN] 回归（1.0.88 → 1.0.89）：每个 ACP 会话都弹出 MCP OAuth 授权页** — 即使 `~/.copilot/mcp-oauth-config` 中令牌有效仍未过期，仍收到 401 并弹窗。4 个 👍，影响非交互/自动化场景。
   链接: github/copilot-cli Issue #4994

5. **#3260 [OPEN] tmux + SSH 连 Windows Server 2025 时复制粘贴失效** — v1.0.47 起引入，跨 macOS/Linux → Windows 的终端输入场景，9 条评论说明复现讨论充分但尚未解决。
   链接: github/copilot-cli Issue #3260

6. **#5197 [OPEN] 1.0.100 后 WSL2 上语音服务段错误（signal 11），`/voice` 卡在"Fetching voice models"** — 新版语音运行时引发的平台回归，与 #3700 共同构成 WSL2 体验退化。
   链接: github/copilot-cli Issue #5197

7. **#5270 [OPEN] GPT-6.1 Sol 导致 Plan → Implementation 切换永久挂起** — 2026-10-27 新建、次日仍在更新，若被 Auto 模式选中也会触发，属新模型集成阻塞问题。
   链接: github/copilot-cli Issue #5270

8. **#1869 [OPEN] `gpt-5-mini` 模型选择不持久，重开 CLI 回退到 `claude-sonnet-4.6`** — 模型配置持久化的基础体验问题，自 2026-03 悬置至今。
   链接: github/copilot-cli Issue #1869

9. **#3518 [OPEN] 支持取消归档/恢复已归档的项目会话** — 11 个 👍，为本期点赞最高条目。误归档长期编排会话会导致大量上下文与子会话丢失，用户诉求明确。
   链接: github/copilot-cli Issue #3518

10. **#4600 [OPEN] BYOK 提供商下 MCP 工具结果中的图片被静默丢弃** — 工具执行成功但图像内容在到达模型前丢失，影响多模态 + 自建模型接入组合场景。
    链接: github/copilot-cli Issue #4600

> 其他值得留意的已关闭/待补信息条目：#4989（企业 `allowedMcpServers` 用 `serverName` 永不匹配，已关闭）、#310（长提示词触发 "Connection error"，待补信息）、#5115（ACP 下 `/rename` 报成功但未重命名）。

## 重要 PR 进展

过去 24 小时更新的 PR 仅 4 条，且全部为 OPEN 状态、均聚焦安装脚本，无功能类 PR：

1. **#2422 为手动安装用户新增 `uninstall.sh`** — 补齐 curl/wget 脚本安装的卸载路径，并同步更新文档。
   链接: github/copilot-cli PR #2422

2. **#1598 为 `install.sh` 增加 trap，异常退出时清理临时目录** — 修复 `set -e` 提前终止时 `mktemp -d` 目录残留在 `/tmp` 的泄漏。
   链接: github/copilot-cli PR #1598

3. **#2565 重新安装时防止 PATH 配置重复写入** — 当前通过 `command -v copilot` 判断是否需要提示 PATH，导致不重启 shell 重装时重复追加配置行。
   链接: github/copilot-cli PR #2565

4. **#5093 校验与所下载 tarball 相匹配的校验和条目** — 指出 `--ignore-missing` 会导致"空验证"，安装脚本的校验步骤可能在实际未校验的情况下报告成功。属供应链安全相关修复。
   链接: github/copilot-cli PR #5093

## 功能需求趋势

- **MCP 深度集成**：#505 希望像 VS Code 一样加载 MCP 服务器提示（`/mcp.<NAME>.<PROMPT>`）；#4994（OAuth 令牌复用）、#4989（企业允许列表匹配）、#4600（MCP 图像结果）显示 MCP 在鉴权、策略与企业管控层面仍有多处缺口。
- **模型与提供商灵活性**：#4703 要求同一会话内不同 Agent 可对接不同端点（现有 BYOK、`/model`、frontmatter `model` 均不支持）；#4560 指出 `auto` 模式强制 `reasoningEffort: null` 且不可配置；#1869 要求模型选择持久化。
- **平台稳定性（Windows/WSL2）**：#3700、#5197、#4026、#3260 集中指向该平台组合，是当前社区情绪最集中的方向。
- **非交互/ACP 与自动化**：#4994、#5115、#2482（`task_complete` 未写入导致结果丢失）显示脚本化与 ACP 通道的可靠性需求上升。
- **会话生命周期管理**：#3518（取消归档）、#4569（GitHub Mobile 远程会话状态不同步）指向会话状态与恢复能力。

## 开发者关注点

- **平台回归反复出现**：WSL2 上 CPU 空转与语音段错误、Windows 上自 2026-05 起的反复崩溃，说明发布验证对非 macOS 环境覆盖不足，升级风险高。
- **安全与权限语义需明确**：`preToolUse` 钩子在并行调用下静默放行（#2893）属"失败即允许"的隐式行为，与安装脚本校验可能空转（#5093）一样，都是"看起来成功、实际未生效"的信任问题。
- **配置一致性**：模型选择不持久（#1869）、`auto` 模式丢弃 reasoning effort（#4560）、org 级自定义 Agent 仅在含 GitHub 仓库的目录下可见（#3572）——配置行为不可预期，增加调试成本。
- **企业管控策略落地不完整**：`allowedMcpServers` 按 `serverName` 匹配失效（#4989）、org 级 Agent 可见性受工作目录限制（#3572），企业用户需要可解释、可复现的策略行为。
- **错误反馈品质**：长提示词触发无上下文的 "Connection error"（#310）、Autopilot 无有效输出（#2482），开发者希望获得可操作的错误信息而非静默失败。

---
数据来源: github.com/github/copilot-cli | 报告日期: 2026-10-28

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报（2026-10-28）

## 今日速览

v2.2.0 发布，带来实验性的 Desktop 插件系统（可创建、安装、共享桌面插件），v1.19.5 同步修复了 TUI worker 请求失败后挂起的问题。免费额度（Free tier）问题持续发酵，主汇总 Issue 已累积 46 条评论，成为社区最集中的讨论点。MCP 相关缺陷在本期 Issues 中密集出现，涵盖进程泄漏、工具注册时序、OAuth 刷新令牌缺失等多个层面。

---

## 版本发布

**v2.2.0**
- 新增实验性 **Desktop 插件**能力：支持创建、安装与共享图形界面插件，详见官网 v2 文档。（PR #55246、#59469、#59489 等）
- 链接：https://github.com/anomalyco/opencode/releases

**v1.19.5**
- 修复：失败的 TUI worker 请求现在会返回错误，而不是让调用方无限等待。感谢社区贡献者 @Nowaker（#54936）。
- 链接：https://github.com/anomalyco/opencode/releases

> 注意：v2.2.0 的发布说明在数据中被截断，以上仅整理可见内容。

---

## 社区热点 Issues

1. **#59387 免费额度问题主汇总帖**（OPEN，46 评论，👍7）
   官方设立的 Free tier 问题集中反馈入口，覆盖“免费额度超限”“每日免费消息重置”等提示。评论量居首，反映免费用户群体规模与付费转化的敏感度。
   https://github.com/anomalyco/opencode/issues/59387

2. **#51003 MCP 全局 stdio 服务器按目录重复启动导致内存耗尽**（OPEN，16 评论）
   OpenCode 2 为每个已加载目录各启动一份全局 stdio MCP server，多目录场景（如 OpenChamber 每聊天一目录）会成倍放大进程数直至耗尽主机资源。严重的基础设施级缺陷。
   https://github.com/anomalyco/opencode/issues/51003

3. **#51071 v2 子代理模型覆盖未经用户授权即被接受**（OPEN，6 评论，👍8）
   `subagent` 工具向父模型暴露可选 `model` 参数，仅靠工具描述劝阻，缺乏强制约束。高点赞说明社区对权限边界的担忧。
   https://github.com/anomalyco/opencode/issues/51071

4. **#51020 [v2] 消息/part 行从未写入数据库**（OPEN，5 评论）
   v2.0.12+ 桌面 sidecar 接管后，`opencode.db` 中的 `message`、`part` 表长期无写入，仅 `session_v2` 更新。属于数据持久化的静默失效，影响会话历史与可审计性。
   https://github.com/anomalyco/opencode/issues/51020

5. **#40146 达到输出上限被截断的回合被记录为正常完成**（CLOSED，7 评论）
   provider 返回 `finishReason: "length"` 时被会话循环当作正常停止，导致截断内容被误记为完整回复。已关闭，但揭示模型输出处理的语义漏洞。
   https://github.com/anomalyco/opencode/issues/40146

6. **#51089 mcp.add 在工具注册表同步前即返回**（OPEN，5 评论）
   `mcp.add` 返回后 `GET /api/mcp` 已显示 connected，但步骤读取的工具注册表尚由防抖重载延迟更新，导致紧接着的提示看不到新工具。典型的竞态问题。
   https://github.com/anomalyco/opencode/issues/51089

7. **#50904 [功能] 外发 LLM 请求前的凭据脱敏（可选开启）**（OPEN，3 评论）
   提示词、工具输出或系统上下文中若含 API Key、连接串、JWT，会原样进入请求体。插件方案不可靠，社区呼吁原生支持。安全方向的关键需求。
   https://github.com/anomalyco/opencode/issues/50904

8. **#50951 桌面端项目文件夹缺失或不可访问导致请求失败**（OPEN，5 评论）
   保存的项目目录丢失或 macOS 拒绝访问时，本地服务器返回 HTTP 500，桌面端无法加载模型。影响容错体验。
   https://github.com/anomalyco/opencode/issues/50951

9. **#51014 多个 TUI 实例对同一事件重复发送通知**（OPEN，4 评论，👍2）
   任一实例的会话事件会被所有运行中的 TUI 处理，产生重复桌面通知。多实例工作流的常见困扰。
   https://github.com/anomalyco/opencode/issues/51014

10. **#50934 VCS diff 在 Git 无法读取仓库时误报“无变更”**（OPEN，4 评论）
    `vcs.diff()` 忽略了工作区列表命令的退出码，将错误伪装为“无变更”，可能掩盖真实问题。
    https://github.com/anomalyco/opencode/issues/50934

---

## 重要 PR 进展

1. **#59835 fix(core): 不覆盖前序转换提供的模型变体**（OPEN）
   v2.2.0 的晚期配置转换用通用 `["low", ...]` 重新解析 `model.variants`，导致自定义变体被冲掉。
   https://github.com/anomalyco/opencode/pull/59835

2. **#59845 chore(web): 文档站升级至 Astro 7**（OPEN）
   将 `packages/web` 从 Astro 5 升至 7，与 `packages/posts`、`services/www` 对齐，`astro` 纳入根 catalog。
   https://github.com/anomalyco/opencode/pull/59845

3. **#59842 fix(core): 处理 .md 类型的 webfetch URL**（OPEN，Closes #59822）
   修复部分文档站点在声明 `text/markdown` 时返回 404 的抓取问题。
   https://github.com/anomalyco/opencode/pull/59842

4. **#59834 fix(codemode): 解析错误附带位置与提示**（OPEN）
   Code Mode 解析失败时不再暴露 acorn 原始消息（0 基列、格式怪异），改为提供带位置与修复提示的错误。
   https://github.com/anomalyco/opencode/pull/59834

5. **#59833 fix(tui): 向本地服务器发送粘贴图片与 PDF 的路径**（CLOSED）
   此前拖入图片或粘贴路径时 TUI 读取字节并发送 `data:` URI，模型无法再访问原文件；改为传递路径。
   https://github.com/anomalyco/opencode/pull/59833

6. **#59837 fix(tui): 等待后续消息前释放 Mini admission**（OPEN）
   Mini 显示初始提示错误后未发出 admission 信号，导致排队的后续消息无限等待。
   https://github.com/anomalyco/opencode/pull/59837

7. **#59832 fix(ci): 创建 v1 draft release 时不使用 --target**（CLOSED）
   v1 发布流程在 `gh release create` 时因 `HTTP 403` 失败，移除 `--target` 规避工作流文件权限问题。
   https://github.com/anomalyco/opencode/pull/59832

8. **#59771 chore(core): 移除内置 cohere、vercel、perplexity AI SDK 包**（CLOSED）
   删除 `@ai-sdk/cohere`、`@ai-sdk/vercel`、`@ai-sdk/perplexity` 及仅用于加载它们的 provider 插件，精简核心依赖。
   https://github.com/anomalyco/opencode/pull/59771

9. **#59765 feat(ai): provider model() 设置改为可选，configure 输入统一为 Config**（CLOSED）
   统一各 provider 的 `configure()` 输入类型命名，降低插件/扩展开发者的适配成本。
   https://github.com/anomalyco/opencode/pull/59765

10. **#59821 fix(mcp): 请求 offline access 以让 OAuth 服务器签发刷新令牌**（OPEN，Closes #59820）
    MCP OAuth 授权 URL 未请求离线访问，导致无法获得 refresh token，长时间会话会掉线。
    https://github.com/anomalyco/opencode/pull/59821

（此外 #59830/#59828 vite 升级、#59763 zod 升至 4.6.7、#59827 Nix 哈希更新为常规维护。）

---

## 功能需求趋势

- **权限与安全边界收紧**：子代理模型覆盖需用户授权（#51071）、外发请求凭据脱敏（#50904）、MCP OAuth 刷新令牌（#59821），显示社区对“工具自主权”与“数据外泄”的双重警惕。
- **MCP 生态稳定性**：进程模型（#51003）、注册时序（#51089）、OAuth 生命周期（#59821）三类问题并存，MCP 已成为核心集成面但成熟度不足。
- **桌面端插件化**：v2.2.0 的 Desktop 插件是本期最大功能方向，配套问题（项目目录容错 #50951）也在增多。
- **TUI 可定制性**：可配置按键（#50903）、命令面板独立背景（#50901）、模型收藏快捷键（#50969），反映终端用户对交互细节的诉求。
- **可观测性与正确性**：截断回合误判（#40146）、静默持久化失败（#51020）、VCS 误报（#50934），指向“错误不应被静默吞掉”的共性期待。

---

## 开发者关注点

- **静默失败是最大痛点**：TUI worker 挂起（v1.19.5 已修）、part 未写库（#51020）、diff 误报无变更（#50934）、mcp.add 提前返回（#51089）——失败要么不报错，要么报错不准确，显著增加排障成本。
- **资源与并发控制**：全局 MCP server 按目录复制（#51003）、TUI 多实例重复通知（#51014）表明多实例/多目录场景下的隔离与去重机制仍不完善。
- **契约一致性**：`shell` 配置项被 shell 工具遵守但会话终端忽略（#51051）、provider `configure()` 输入类型各异（#59765），配置与 API 的“文档-实现”一致性是高频抱怨点。
- **CI 与发布流程摩擦**：`needs:issue` 对 v2 PR 误判（#51057）、release 创建 403（#59832），影响贡献者体验。
- **平台差异**：Windows 上长期会话的 TLS/连接复用异常（#59786）、PowerShell 强制使用（#51051），跨平台一致性仍需投入。

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报 · 2026-10-28

数据来源：github.com/badlogic/pi-mono（仓库路径，Issue/PR 均位于 earendil-works/pi）

## 1. 今日速览

今日无新版本发布，但 Issue/PR 活动非常密集：过去 24 小时有 50 条 Issue 更新、24 条 PR 更新。焦点集中在 **P0 级会话/工具链缺陷**（会话在上下文上限卡死、删除工具后 Anthropic 请求全线失败、恢复会话丢失内置工具）以及**压缩（compaction）成本优化**。值得注意的是，多条 Issue/PR 明确标注由 AI 代理起草并经人工复核，AI 辅助贡献已成常态。

## 2. 版本发布

过去 24 小时无新 Release。

## 3. 社区热点 Issues（10 条）

1. **#9409 [OPEN] 推理模型会话在上下文上限永久卡死** — 评论 10、👍3。每次请求返回 `stopReason: "length"`、`usage.output: 16`，自动压缩恢复失败。会话直接不可用，属阻断级缺陷，社区讨论最活跃。
   https://github.com/earendil-works/pi/issues/9409

2. **#10953 [CLOSED][no-action] ChatGPT Business 工作区 OpenAI 登录失败** — 评论 11、👍3。常规订阅登录报 `3p_delegated_access_policy_denied`，旧版 Codex 登录可用。企业用户接入痛点，已关闭但反映政策兼容问题。
   https://github.com/earendil-works/pi/issues/10953

3. **#10390 [OPEN][bug] Anthropic SSE 解析器跨网络分块 CRLF 处理错误** — 评论 7。`\r` 与 `\n` 分属两个 chunk 时被当作两次换行，导致 `Unexpected end of JSON input; data=` 并中断回合。`packages/ai/src/api/anthropic-messages.ts` 中的 `iterateSseMessages` 问题，属高概率偶发故障。
   https://github.com/earendil-works/pi/issues/10390

4. **#11376 [OPEN][inprogress][prio:p0] 会话中移除初始工具后 Anthropic 后续请求全部失败** — 评论 4。扩展热重载后不再注册部分工具，报 `tool_reference_unresolved`。影响扩展开发与热更新流程。
   https://github.com/earendil-works/pi/issues/11376

5. **#11460 [CLOSED][prio:p0][fix-available] 会话分支截断后恢复丢失全部内置工具** — 评论 4。Windows、`@earendil-works/pi-coding-agent` 1.4.0，ENOSPC 导致 orphan parentId，`defaultTools` 全丢。已有修复。
   https://github.com/earendil-works/pi/issues/11460

6. **#11472 [CLOSED][bug][no-action] rpc 模式 `turn_end` 无法解析持久化 assistant 条目 ID** — 评论 3。本地 openai-completions 提供方每次运行均中断；在 1.4.0/1.3.0/1.1.0 复现。影响本地 llama.cpp 用户。
   https://github.com/earendil-works/pi/issues/11472

7. **#11415 [CLOSED][prio:p0] openai-responses 回放其他模型的 function_call 时缺命名空间，OpenAI 返回 400** — 评论 3。由 AI 代理实际对 api.openai.com 复现。影响 `additional_tools`（`"changes"` 工具支持模式）。
   https://github.com/earendil-works/pi/issues/11415

8. **#11500 [CLOSED][untriaged] 压缩/摘要请求与实时对话无共享前缀，每次压缩付全额 prefill** — 评论 2。建议向摘要器传入 session 的 system prompt 与工具声明并回放对话。直接影响成本与延迟，对应 PR #11499。
   https://github.com/earendil-works/pi/issues/11500

9. **#11504 [CLOSED][untriaged] Gemini 严格工具 schema：可选参数报「未指定 schema type 字段」** — 评论 2。Gemini 3+ 模型在 `google-generative-ai` 下必现，属新模型支持缺口（提交者为 10-28 当日创建）。
   https://github.com/earendil-works/pi/issues/11504

10. **#11139 [CLOSED][bug][durable] pi-durable 生成响应出错时无限循环** — 评论 3。宿主在流式响应中重启后，`pi.generation` 任务重发同一请求，形成死循环。影响 durable 模块可靠性。
    https://github.com/earendil-works/pi/issues/11139

> 补充：**#11327**（pi-durable `watchEvents` 支持从 last seen 条目续读，CLOSED）与 **#10893**（模型发现中展示多种上下文窗口变体，CLOSED）也值得关注。

## 4. 重要 PR 进展（10 条）

1. **#11499 [CLOSED] feat(compaction): 保留前缀的摘要调用** — 为压缩请求带上 system prompt 与工具声明并回放对话，使请求与实时回合共享前缀，避免全额 prefill。对应 #11500，今日最重要的性能/成本改动。
   https://github.com/earendil-works/pi/pull/11499

2. **#11498 [CLOSED] docs(coding-agent): 恢复完整扩展指南** — 修复 #9898 将 `docs/extensions.md` 从约 3,100 行砍至 130 行的问题（#11039 仅部分恢复），按当前源码校正。对扩展开发者价值高。
   https://github.com/earendil-works/pi/pull/11498

3. **#11496 [CLOSED] fix(ai): 限制 OpenRouter 推理 token** — 改用嵌套 `reasoning.max_tokens`，有 token 预算时忽略 `reasoning.effort`（OpenRouter 拒绝二者并存），并保留至少 1,024 token。
   https://github.com/earendil-works/pi/pull/11496

4. **#11494 [CLOSED] fix(ai): 将 LiteLLM ContextWindowExceededError 识别为上下文溢出** — LiteLLM 预调用检查以 HTTP 400 拒绝超长请求，此前无法触发 pi 的溢出处理。
   https://github.com/earendil-works/pi/pull/11494

5. **#11491 [CLOSED] fix(coding-agent): 识别 vite+ 全局安装并用 `vp update -g` 自更新** — `detectInstallMethod()` 误判原因在于其数据目录含 `/node_modules/`；同时修复 pi update 误写入 vite+ 哈希目录的问题。
   https://github.com/earendil-works/pi/pull/11491

6. **#11486 [CLOSED] fix(coding-agent): 写入失败时保持会话内存与文件一致** — ENOSPC/EBUSY/ETIMEDOUT 时 `_appendEntry` 已写入内存并设为当前叶节点，导致后续条目与磁盘错位。
   https://github.com/earendil-works/pi/pull/11486

7. **#11487 [CLOSED] fix(tui): 显示数学公式超宽时回退为原始 LaTeX** — `$$…$$`、`\[…\]` 多行二维渲染超出 Markdown 内容宽度时逐行错误换行。
   https://github.com/earendil-works/pi/pull/11487

8. **#11482 [CLOSED] fix(coding-agent): 分支摘要传递 thinking 级别** — `/tree` 的 Summarize 选项此前忽略会话 thinking level，`generateBranchSummary` 未读取该参数。
   https://github.com/earendil-works/pi/pull/11482

9. **#11422 [CLOSED] fix(tui): 修正 Kitty 功能键解码** — 解码 F1–F4 CSI/SS3 与 F5–F12 tilde 序列（含修饰键、重复、释放事件），防止私有区功能键码点被当作文本插入。
   https://github.com/earendil-works/pi/pull/11422

10. **#10716 [CLOSED] fix(env): pi-env 启动错误包含 stderr** — 此前守护进程在 `hello` 前退出时仅有退出码，如 `loginShell: true` 下 profile 因文件缺失中止，难以诊断。
    https://github.com/earendil-works/pi/pull/10716

> 其他：[OPEN] **#10528** 重构 Nix 打包（`makeBinaryWrapper` 等）；[OPEN] **#11348** 在所有滚动列表中处理选择翻页键（修复 #7629）；[OPEN] **#11480** 在 Radius MCP 中将 web search 设为直接工具。

## 5. 功能需求趋势

- **上下文与成本效率**：压缩/摘要复用对话前缀（#11500 / #11499）、Codex 空闲后缓存未命中（#11493）、模型上下文窗口多变体可见（#10893）——围绕 token 计费和 prefill 成本的讨论明显增多。
- **多供应商/新模型兼容**：Gemini 3+ 严格工具 schema 可选参数（#11504）、OpenRouter 推理 token（#11496）、LiteLLM 上下文溢出识别（#11494）、OpenCode 协议专用端点（#11132）、ChatGPT Business 登录（#10953）。
- **会话可靠性**：上下文上限卡死（#9409）、ENOSPC 后恢复丢工具（#11460）、并发压缩共享 AbortController 崩溃（#7738）、写入失败后内存/文件漂移（#11486）。
- **扩展生态与热重载**：`/reload` 应排队到代理空闲后执行（#11462）、扩展工具注销破坏 Anthropic 请求（#11376）、已安装包中无法导入 `/api/*.lazy` 分类器传输（#11452）。
- **durable / 事件流**：`watchEvents` 从 last-seen 恢复（#11327）、生成错误无限循环（#11139）、Code Mode 导入路径调整（#11254）。
- **TUI 交互质量**：复制时保留硬换行 vs 软换行（#8019，👍6）、退出提示格式化（#9515）、翻页键与 Kitty 功能键。

## 6. 开发者关注点

- **数据丢失与静默故障最受关注**：ENOSPC 导致会话恢复后工具全丢、写入失败后内存与磁盘不一致、无限循环重发请求——均属低频但高破坏性的场景，修复集中在 2026-10-27 当天合入。
- **本地/第三方 provider 支持仍有裂缝**：本地 llama.cpp（openai-completions）在 rpc 模式每次运行中断（#11472），LiteLLM、OpenRouter、OpenCode、Gemini 各有兼容问题，社区期待供应商适配层更稳健。
- **P0 标签频繁出现**： #11376、#11460、#11415 均标为 prio:p0，说明当前工具声明与请求回放逻辑是最脆弱的环节。
- **文档回归引发不满**：#9898 的文档精简使扩展指南缩水近 96%，#11498 的恢复 PR 显示开发者对 API 参考与工具指引需求强烈。
- **AI 辅助贡献常态化**：多条 Issue/PR 注明由 AI 代理起草、人工复核，甚至由 bot（robopipi[bot]）提交修复，维护者需适配新的协作与审查流程。
- **Nix/打包与自更新**：vite+ 全局安装被误判（#11491）与 Nix 打包重构（#10528）反映非 npm 安装路径仍是薄弱区。

---
*说明：本日报仅基于所提供的 GitHub 数据整理；PR 评论数在数据中未提供，故未引用。*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报（2026-10-28）

## 1. 今日速览

今日主要动态是 v0.26.3-preview.0、v0.26.2 稳定版及配套 SDK 的发布，其中 v0.26.2 包含托管 Agent 的 Web Shell 控制简化这一破坏性变更。社区层面，Managed Agent 双路径架构（#12380）讨论持续升温，同时 Stage F 故障门测试的多条跟踪 Issue 集中关闭并结转残留项，标志着托管 Agent 测试体系进入收尾阶段。CI/发布流水线稳定性问题（CVE 审计、不可变发布预检、main 分支编译缺口）仍是开发者关注焦点。

---

## 2. 版本发布

**v0.26.2（稳定版）** — 引入破坏性变更：`fix(managed-agent)!` 简化 Web Shell 控制并废弃 cwd 提交（[#15616](https://github.com/QwenLM/qwen-code/pull/15616)）。相关托管会话权限规则与自动批准功能在预览版链中引入。

**v0.26.3-preview.0** — 包含 memory 模块在空操作运行后的可选提取节奏（[#13571](https://github.com/QwenLM/qwen-code/pull/13571)）、core 层带引号 CA 的外层 XML 调用恢复修复，以及（承接预览链）托管会话权限规则与 Auto 批准（[#15448](https://github.com/QwenLM/qwen-code/pull/15448)）。

**sdk-typescript-v0.1.24** — 捆绑 CLI 版本 0.26.2（由同分支源码构建）。

---

## 3. 社区热点 Issues

1. **[#12380](https://github.com/QwenLM/qwen-code/issues/12380) Managed Agent 双路径架构定义与分阶段交付**（72 评论，讨论最热烈）— 定义了托管 Agent 的整体架构路线，更新了 Stage F 交付状态（基于 main 快照核验）。这是本轮所有托管 Agent 工作的总纲，值得持续跟踪。

2. **[#13078](https://github.com/QwenLM/qwen-code/issues/13078) 每日依赖 CVE 审计失败**（34 评论）— 定时 CVE 审计流水线持续失败，可能涉及新高危漏洞，影响供应链安全，需尽快处理。

3. **[#15760](https://github.com/QwenLM/qwen-code/issues/15760) 将计划执行偏差检测作为 hook**（6 评论，P3）— 由第三方推理链与工具调用偏离报告触发，提议以 hook 形式检测计划偏差，直接关联 roadmap/hooks-events，安全与可观测性价值明确。

4. **[#15499](https://github.com/QwenLM/qwen-code/issues/15499) managed runtime v0.26.1 卡在不可变发布预检**（11 评论，P2）— 发布流程在发布前失败，直接阻塞托管运行时交付。

5. **[#15052](https://github.com/QwenLM/qwen-code/issues/15052) 保留独立 main E2E 验证**（11 评论，P2）— 并发替换待运行任务会导致中间提交缺失独立验证结果，涉及测试可信度。

6. **[#13951](https://github.com/QwenLM/qwen-code/issues/13951) 集成测试在 Checkout 阶段失败（pack 未解析 delta）**（9 评论，P2）— CI 基础设施级失败，影响所有集成测试通道。

7. **[#14381](https://github.com/QwenLM/qwen-code/issues/14381) main 推送时无任务编译 managed-agent-server**（5 评论，P2）— 曾导致 main 分支 1 小时 35 分钟无法编译却无检查报警，属 CI 覆盖缺口。

8. **[#15741](https://github.com/QwenLM/qwen-code/issues/15741) MCP 重复工具名丢弃整个服务器并误报“无工具”**（3 评论，P2）— 影响 0.26.2 实际用户（macOS 环境），错误信息具有误导性，属 MCP 集成体验问题。

9. **[#15768](https://github.com/QwenLM/qwen-code/issues/15768) 按 Session 在请求时解析模型凭证**（2 评论，P2）— 当前凭证来自进程环境变量，无法按会话隔离，属凭证安全能力缺口。

10. **[#15766](https://github.com/QwenLM/qwen-code/issues/15766) 限制外部所有权谓词锁等待**（2 评论，P1，今日最高优先级）— 外部所有权谓词可触达无界应用级 advisory lock 并暴露于每轮控制路径，存在阻塞风险。

> 补充观察：Stage F 故障门跟踪项 #12872（FG6）、#14054（FG8–FG10）、#14446（FG11）、#14447（FG12）、#14449（FG13）均于今日关闭，残留单元格结转至 [#15750](https://github.com/QwenLM/qwen-code/issues/15750)。

---

## 4. 重要 PR 进展

1. **[#15718](https://github.com/QwenLM/qwen-code/pull/15718) 支持可选的同上下文 Java 嵌入** — 允许托管 Agent 嵌入宿主现有 JVM 与 Spring 上下文，可使用专用连接池或显式 DataSource，扩展企业集成形态。

2. **[#15684](https://github.com/QwenLM/qwen-code/pull/15684) 实体化惰性外部工作区** — 新增仅运维可用的方式，将已注册的外部存储别名变为可发现的 Workspace 并显式委派所有者，仅创建元数据与幂等回执。

3. **[#15696](https://github.com/QwenLM/qwen-code/pull/15696) 有界授权历史查询** — 实现托管会话保留的 PR5 切片：版本化历史身份查询、有界授权事件窗口、流式恢复与消费者迁移。

4. **[#15388](https://github.com/QwenLM/qwen-code/pull/15388) 以轮次预算约束 autofix 接管** — `@qwen-code /takeover for N`（N=1–99）支持有界接管并记录窗口范围预算，提升自动化维护的可控性。

5. **[#15769](https://github.com/QwenLM/qwen-code/pull/15769) 白天保留四个 review runner** — 修复 review runner 池“全有或全无”调度导致白天审查任务排队至晚间的问题。

6. **[#15657](https://github.com/QwenLM/qwen-code/pull/15657) 通过实时与回放帧投影子代理身份** — ACP 子代理可观测性栈的基础 PR（其后接 #15658、#15659）。

7. **[#15756](https://github.com/QwenLM/qwen-code/pull/15756) G3 终端恢复故障门** — 新增两条打包终端恢复用例（回复丢失至 Harness 崩溃），属托管 Agent 故障注入测试体系。

8. **[#15030](https://github.com/QwenLM/qwen-code/pull/15030) 提升工作区技能安装限制** — 拆分原先统一硬编码预算（6 MiB 压缩/解压、2 MiB 单文件、128 文件），区分 zip、GitHub 与本地目录安装。

9. **[#13748](https://github.com/QwenLM/qwen-code/pull/13748) 显示声明的 Channel 提交** — 修复 ACP 桥接中 Channel 来源会话的展示投影，改善多通道交互显示。

10. **[#15767](https://github.com/QwenLM/qwen-code/pull/15767) 将 prune 干跑断言改为集合比较** — 消除对 `git worktree prune` 输出顺序的敏感性，降低测试脆弱性。

> 补充观察：CI/测试稳定性修复密集，包括 #15639（消除 vitest 1 秒默认竞态）、#15770（等待 Shift+Tab 字节后再断言 PTY 所有权）、#15286（隔离 sdk-java 主机缓存）。

---

## 5. 功能需求趋势

- **托管 Agent 平台化**：双路径架构（#12380）为核心主线，衍生出按会话解析凭证（#15768）、外部工作区实体化（#15684）、Java 宿主嵌入（#15718）、有界授权历史（#15696）等系列需求。
- **多代理与故障门测试体系**：roadmap/multi-agent 标签贯穿 Stage F 各故障门（FG6–FG13），测试基础设施投入显著。
- **Hooks 与事件机制**：偏差检测 hook（#15760）表明社区希望以事件钩子形式扩展计划执行可观测性。
- **安全与凭证管理**：按会话隔离模型凭证、CVE 审计失败（#13078）共同指向凭证与供应链安全方向。
- **性能与延迟**：外部工作区能力发现的 N+1 读（#15765）、无界锁等待（#15766）反映性能随功能扩展成为新焦点。
- **MCP 与集成健壮性**：MCP 重复工具名处理（#15741）显示外部工具集成仍需加强错误语义。

---

## 6. 开发者关注点

- **CI/发布流水线可靠性是最高频痛点**：CVE 审计失败、不可变发布预检阻塞、集成测试 Checkout 失败、main 分支无编译监控等问题反复出现，且多处标记为 P2。
- **测试脆弱性**：多处 PR 专门修复时序竞态与顺序敏感断言（#15639、#15767、#15770），说明测试套件稳定性消耗了较多维护精力。
- **自动化维护边界**：autofix 接管引入轮次预算（#15388），反映对自动修复代理可控性的诉求。
- **错误信息质量**：MCP 场景下的误导性错误（#15741）提示错误语义需更准确。
- **破坏性变更需关注**：v0.26.2 废弃 cwd 提交，依赖 Web Shell 工作目录行为的使用方应评估迁移影响。

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI 社区动态日报（2026-10-28）

> 数据来源：github.com/Hmbown/DeepSeek-TUI。Issue/PR 链接在原始数据中均指向 codewhale-hq/Codewhale。

## 1. 今日速览

今日无新版本发布，社区讨论集中在 0.10.3 版本范围内的 **TUI crate 拆分与死代码清理**（EPIC-005 及相关条目），以及围绕 **token 成本与上下文压缩** 的多项优化提案。同时，多个面向中文/本地化体验的修复（`/undo`、`/diff` 本地化）和 Windows 上的可靠性问题密集出现。

## 2. 版本发布

过去 24 小时无新 Release。多个 Issue 引用了 **0.10.3 的状态说明（截至 2026-10-25）**：0.10.3 范围包含完整 crate 拆分，目标是任何 crate 不超过 50,000 生产代码行、向约 10,000 行收敛。

## 3. 社区热点 Issues（10 条）

1. **#5316 EPIC-005：CodeWhale TUI Crate Decomposition（Umbrella）** — 追踪型总纲 Issue，评论数 33，是当前活跃度最高的讨论。0.10.3 的拆分目标与进度节点（W2a 收尾于 995f2a88f9）在此汇总，适合关注架构演进而非单点修复的开发者。
   https://github.com/codewhale-hq/Codewhale/issues/5316
2. **#6011 usage & tool diagnostics：token 计量与工具调用错误模式** — 评论 10。提议按组件、按模型统计 token（含缓存命中率）、按工具统计消耗，并计入压缩成本。直接关系到用户对成本和行为的可观测性。
   https://github.com/codewhale-hq/Codewhale/issues/6011
3. **#6184 Engine 运行中静默冻结**（bug，subagents/reliability）— 评论 9。用户消息已持久化但从不被回答，无错误、无日志、无崩溃记录；环境为 codewhale 0.9.13、zai 的 GLM-5.3-Flash。属于高严重度的可复现性/可靠性问题。
   https://github.com/codewhale-hq/Codewhale/issues/6184
4. **#5587 死代码清理：移除 25 处模块级 blanket allow** — 评论 9，标记 help wanted。与 #5316 同属清理主线，适合新贡献者切入。
   https://github.com/codewhale-hq/Codewhale/issues/5587
5. **#6804 号召成立汉化组** — 评论 7。作者指出 AI 机翻技术文档"只停留在能读"，希望牵头小规模汉化组并跟进英文/日文项目更新。反映中文社区对文档质量的真实诉求。
   https://github.com/codewhale-hq/Codewhale/issues/6804
6. **#6969 Deferred-toolbox 驱逐在提示缓存下经济上净负** — 评论 6。指出 `ToolActivationCache`（8 个名称 / 16 KiB）对成本不敏感，在现行缓存定价下驱逐会导致全前缀重新预填充与写入溢价，并留下长期陈旧的恢复说明。技术深度高，直击成本模型。
   https://github.com/codewhale-hq/Codewhale/issues/6969
7. **#5860 从对话中持续自学习（自动技能演化）** — 评论 6。现有 Skills 系统需手写 `SKILL.md`，知识是静态的；提议自动提取模式。属于产品能力层面的中长线方向。
   https://github.com/codewhale-hq/Codewhale/issues/5860
8. **#2323 未适配中文输入法**（bug，tui/windows，👍1）— 评论 5，创建于 2026-05-28 仍未解决。拼音输入时不隐藏提示文本、在配置/危险操作确认窗口下存在输入问题。老问题长期未闭环，是中文用户的明确痛点。
   https://github.com/codewhale-hq/Codewhale/issues/2323
9. **#7095 对话历史丢失**（bug，v0.10.3）— 评论 4，创建于 10-26。长任务执行中，输入区出现两行错位内容后会话历史丢失。与 #6970（`/undo` 回滚后对话状态异常）可能同源。
   https://github.com/codewhale-hq/Codewhale/issues/7095
10. **#6991 显著降低 token 消耗的新思路** — 评论 4。与 #6969、#6526、#6011 共同构成"上下文成本"议题簇，值得合并阅读。
    https://github.com/codewhale-hq/Codewhale/issues/6991

## 4. 重要 PR 进展（10 条）

1. **#7121 fix(commands): 本地化 /undo 反馈**（OPEN，10-28）— 将 `/undo` 结果消息从硬编码英文改为走 presentation 层，覆盖全部 15 个组件语言；接续 #7071 中 `/diff` 已落地的部分。
   https://github.com/codewhale-hq/Codewhale/pull/7121
2. **#7122 fix(tui): 信号退出前刷新排队中的持久化**（OPEN，10-28）— 关闭终端时 SIGHUP 可能在会话持久化尚有排队任务时到达；旧处理器在排空 Runtime API 后即退出，未要求持久化 actor 刷新。
   https://github.com/codewhale-hq/Codewhale/pull/7122
3. **#7100 fix(tui): 已结束的 turn 不再阻塞其会话保存**（CLOSED）— 流式中断（系统休眠、连接断开）后重试，被中断的 reasoning 段未收到预期处理，导致会话保存静默停止更新。与 #7095 的症状高度相关。
   https://github.com/codewhale-hq/Codewhale/pull/7100
4. **#7117 fix(setup): 第二个实例运行时保留 setup checkpoint**（OPEN）— 汇总两类用户报告共四个缺陷，包括 setup 状态写入失败与路径错误。
   https://github.com/codewhale-hq/Codewhale/pull/7117
5. **#7105 fix(catalog): 读取实时模型列表声明的 token 上限**（CLOSED）— 非 OrcaRouter/OpenRouter/Concentrate 的路由走通用分支，导致每行 `limit: None`，丢弃了提供商公布的单模型上限。
   https://github.com/codewhale-hq/Codewhale/pull/7105
6. **#7110 fix(commands): /cache 不再把未上报的缓存 token 计为 0**（CLOSED）— 无缓存遥测的 turn 在命中/未命中/写入单元格显示 `—` 且不计入总计，避免"从不上报"被误读为"从不命中"。
   https://github.com/codewhale-hq/Codewhale/pull/7110
7. **#7101 fix(commands): 本地化 /diff 反馈**（CLOSED）— 将 `/diff` 的九条面向用户消息与分页标题接入 presentation 层与类型化诊断映射。
   https://github.com/codewhale-hq/Codewhale/pull/7101
8. **#7107 fix(installer): 避免重复下载相同的 codew 资产**（CLOSED）— `curl | sh` 安装器在 manifest 中两个资产 SHA-256 相同时仍会下载两次大二进制。
   https://github.com/codewhale-hq/Codewhale/pull/7107
9. **#7092 fix(fleet): Android 上启用 rename_exclusive 以规避 SELinux EACCES linkat 回退**（CLOSED）— 涉及 `fleet/files.rs`、`plugins/builtin.rs`、`config/private_directory`，关联 #6983。
   https://github.com/codewhale-hq/Codewhale/pull/7092
10. **#7112 / #7103 路径截断显示修复**（均 CLOSED）— 启动卡片与 `/context` 检查器原先从右侧裁剪路径，导致窄面板下丢掉当前文件夹名；改为先退到目录名再裁剪。
    https://github.com/codewhale-hq/Codewhale/pull/7112 ｜ https://github.com/codewhale-hq/Codewhale/pull/7103

> 另：#7108（rustfmt/Clippy）、#7109（Windows 上保留 DSH receipt 字节，避免 CRLF 重写破坏 SHA-256 校验）、#7094（仅在模型真正变更时提示"Model set to"）均属 CI 与交互一致性修缮。

## 5. 功能需求趋势

- **成本与 token 可观测性成为主线**：#6011（分组件/分模型计量 + 缓存命中率 + 压缩成本）、#6969（驱逐策略成本盲区）、#6991（降 token 方案）、#6526（常规指令预算旋钮 + 裁剪可见提示）、#7110（缓存统计口径）共同表明社区正在系统性审视"钱花在哪"。
- **上下文压缩与预算控制**：#6526 的第一部分已在 main（10ce9cde28），超大常规指令文件已被限界。
- **本地化与中文体验**：#6804（汉化组）、#2323（中文输入法未适配）、#7101/#7121（`/diff`、`/undo` 本地化）显示本地化已从文档延伸到命令反馈与输入层。
- **技能系统演进**：#5860 提出从对话自动抽取/演化技能，取代静态 `SKILL.md`。
- **可靠性**：静默冻结（#6184）、会话历史丢失（#7095）、`/undo` 状态异常（#6970）指向长任务与流中断路径的健壮性。
- **平台与分发支持**：#1097 FreeBSD 支持（npm binary / pkg）、#7092 Android、#6155 Kitty 协议终端下的 `/pet` 实测。
- **提供商与模型**：#5848 Ollama 实时目录验证、#5915 Fleet 模型角色保存与常显算子模型列表、#6603 可选的 Decision Gate 以加速常规决策、#6013 goal gates 独立校验。

## 6. 开发者关注点

- **"静默失败"最难排查**：#6184 无错误、无日志、无崩溃记录；#7100 会话保存无声停止更新。开发者需要更完整的诊断与日志链路，#6011 的诊断提案正对此。
- **Windows 与中文环境体验短板**：#2323 长期未闭合、#6970 Windows 下 `/undo` 异常、#7109 CRLF 破坏校验、#7117 setup 路径与写入失败——Windows 路径处理是反复出现的故障源。
- **长任务稳定性**：休眠/断连/重试路径下的会话状态一致性（#7095、#7100、#7122）是高频反馈簇。
- **贡献入口明确**：多条 Issue 标记 help wanted（#5587、#6145、#1097、#2323、#6155），清理与命令契约类任务适合外部贡献者；EPIC-005（#5316）提供了拆分进度的单一追踪点。
- **文档人力缺口**：社区已自发提出组织汉化（#6804），反映文档同步与翻译质量是当前维护者的实际负担。

</details>

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar-personal) 自动生成。*