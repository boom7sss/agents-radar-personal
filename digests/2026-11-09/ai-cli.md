# AI CLI 工具社区动态日报 2026-11-09

> 生成时间: 2026-11-09 20:48 UTC | 覆盖工具: 9 个

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

# AI CLI 工具生态横向对比分析报告（2026-11-09）

## 1. 生态全景

当前 AI CLI 工具已越过"能用"阶段，社区反馈重心从功能缺失转向**可靠性、成本可控与平台一致性**：会话中途被限额中断（Claude Code #56978）、配置不生效（Copilot CLI #5390、Gemini CLI #22267）、静默失败（Gemini CLI #21409）成为多家共同痛点。发布侧分化明显——Claude Code、Copilot CLI、Qwen Code 保持日更节奏，Gemini CLI、OpenCode、Pi 处修复期，Kimi Code CLI 零活动。Windows 平台在 Codex、Copilot CLI、Pi、DeepSeek 四家中均为问题密度最高的平台，跨平台一致性仍是普遍短板。与此同时，多模态输入、MCP 生态治理、上下文成本控制成为跨工具的新一轮需求主线。

## 2. 各工具活跃度对比

> 注：各源材料统计口径不一（部分仅给出 Top 列表），下表按材料明确披露的信息填写，"—"表示材料未提供确切数值。

| 工具 | Release | Issues（材料口径） | PR（材料口径） | 社区信号 |
|---|---|---|---|---|
| Claude Code | v2.1.321（新默认模型 Fable 5.2，1M 上下文） | Top 10 列出，另附 3 条；单条最高 19 评论 | 24h 内仅 1 条（#89404） | 成本/限额为最大痛点 |
| OpenAI Codex | rust-v0.169.0-alpha.6（无变更说明） | Top 10 列出；#29343 达 58 评论、#56655 👍79 | 19 条 PR，多为 CLOSED（copyberry[bot]） | Windows 问题集中爆发 |
| Gemini CLI | 无 | Top 10 列出；#3375 达 29 评论 | Top 10 列出（含 1 条 P0） | Agent/子代理稳定性 |
| GitHub Copilot CLI | v1.0.108 | Top 10 列出 | **0 条** | ACP 模式兼容、沙箱策略 |
| Kimi Code CLI | — | — | — | **过去 24h 无活动** |
| OpenCode | 无 | #59387 单帖 **338 评论**（全生态最高） | Top 10 列出 | 免费额度争议压倒性 |
| Pi | 无 | 10 条列出；#3200 12 评论/👍8 | 10 条列出（Issues+PR 合计 68 条更新） | 1.5.x 稳定性修复密集 |
| Qwen Code | v0.27.1 + desktop + SDK 两版 | #14724 达 **282 评论**（CI 机器人跟踪） | Top 10 列出 | CI 稳定性、托管代理 |
| DeepSeek TUI | 无 | 24h 内共 7 条（全部列出） | 24h 内共 7 条（全部列出） | v0.10.3 发布验收收尾 |

**活跃度速读**：发布频次 Qwen Code > Claude Code ≈ Copilot CLI > 其余；PR 产出 Codex（19）> Pi/Qwen Code/OpenCode（约 7–10）> Copilot CLI（0）；单帖讨论热度 OpenCode（338）远超其他。

## 3. 共同关注的功能方向

**① 成本与限额治理（最高共识）**
- Claude Code：#56978 限额中断优雅处理、#55945 token 耗尽钩子并暴露恢复时间、#105621 用量异常加快、#85169 上下文/MCP 结果淘汰。
- OpenCode：#43250 `keep.tokens` 未被遵守（实际超设定 5–15 倍）、#59861 成本可见性、#59387 免费额度。
- Codex：#51043 限额重置后仍被阻塞。
- Pi：#8617 图片改用 file 引用以压缩请求体积、#11949 长上下文计价修正。

**② 配置"说了不算"的一致性问题**
- Copilot CLI：#5390 `allowLocalNetwork: true` 仍产生 `hostLoopback: deny`。
- Gemini CLI：#22267 Browser Agent 忽略 `settings.json` 覆盖。
- DeepSeek TUI：#6992 ACP 沙箱配置被忽略。
- OpenCode：#62872 配置文件半写状态即拒绝整份配置且无 last-good 回退。

**③ 长会话与上下文连续性**
- Codex：#31659 Auto-Compaction 丢失 goal、退回追逐最近提示。
- OpenCode：#43250 token 超限、#61189 历史回放截断。
- Qwen Code：#16598 微压缩误清持久化占位。
- Gemini CLI：#22323 MAX_TURNS 中断却误报 success。

**④ 工具调用可控性**
- Gemini CLI：#3375 可配置工具调用超时（对应 PR #30212）、#30109 限制 grep 输出、#24246 工具数 >128 报 400。
- Claude Code：#85169 MCP 工具结果淘汰。Pi：#11952 `bash` 需串行化。

**⑤ 平台兼容（以 Windows 为焦点）**
- Codex（VS Code 扩展启动失败 #56655、项目消失 #59895）、Copilot CLI（Git Bash #508）、Pi（PowerShell 5.1 stderr 误判 #8842/#11944）、Qwen Code（macOS WKWebView 渲染 #16766）、Claude Code（Linux pkill 自匹配 #93607、Windows 命令 8,191 字符截断 #100936）。

**⑥ 多模态与 MCP 生态成熟化**
- 多模态：Pi #3200 视频/音频输入；Copilot CLI v1.0.108 Grok PDF 回退。
- MCP：Codex #60423 暴露休眠服务器、Pi #11918/#11919/#11957、Claude Code #85169。

## 4. 差异化定位分析

| 工具 | 功能侧重 | 目标用户 | 技术路线特征 |
|---|---|---|---|
| **Claude Code** | 模型能力前沿 + 钩子/权限体系 | 重度长任务、Max 订阅用户 | 快速推新默认模型（Fable 5.2，1M 上下文），以 `remote-control`、`--settings` 强化会话配置管理；问题集中在成本可预期性 |
| **OpenAI Codex** | IDE/桌面端 + Browser/Computer Use | IDE 集成用户、企业/Windows 用户 | Rust 侧基础设施化（认证归属校验、SQLite 升 3.54 修 RUSTSEC-2026-0459、app-server 状态机）；PR 多由 bot 提交，倾向平台稳定性 |
| **Gemini CLI** | Agent/子代理编排 + 工具控制 | 自建 agent 工作流开发者 | AST 感知检索（#22745）、bash 原生沙箱路线（#19873）、可配置工具超时；方向偏架构探索 |
| **Copilot CLI** | 终端/IDE/移动端生态互操作 | GitHub 生态内、企业网络用户 | OSC 7501 状态协议（#5320 已关闭）、ACP 非交互模式、tgrep 索引；强调与外部终端/编辑器对接 |
| **OpenCode** | 订阅计费 + 桌面/APP 多端 | 订阅制个人开发者 | 免费层额度、Code Mode、AWS Secrets Manager CI 迁移、V1 文档站点重建；产品化与多端覆盖并进 |
| **Pi** | 可嵌入引擎 + pi-durable 存储 | 库嵌入方、本地模型用户 | 1.5.x 类型稳定性（#11869 P0）、多 provider（Ollama/Azure）、MCP 鉴权传递；偏底层能力 |
| **Qwen Code** | 托管代理（Managed Agent）+ 多渠道 | 平台/服务化集成方 | unifiedAgentLoop（#15327）、混合代码模式（#11854 对齐 Codex）、微信通道；Java 侧与企业化痕迹明显 |
| **DeepSeek TUI** | 发布可验证性 + 引擎嵌入 | 多分发渠道用户、嵌入应用方 | 发布验收闭环（archive/npm/NSIS/WinGet）、host policy 注入（#7251）；工程严谨度导向 |
| **Kimi Code CLI** | — | — | 过去 24h 无活动，材料不足，不做推断 |

**差异小结**：Claude Code 与 Codex 走"模型+平台"双轮；Gemini CLI 与 Qwen Code 重 Agent 架构演进；Copilot CLI 与 OpenCode 重产品化与多端；Pi 与 DeepSeek TUI 重引擎可嵌入与工程质量。

## 5. 社区热度与成熟度

- **讨论热度最高**：OpenCode（#59387 单帖 338 评论，生态第一）、Qwen Code（#14724 达 282 评论）、Claude Code（多条 10–19 评论，分布均匀）、Codex（#29343 58 评论、#56655 👍79）。注意：Qwen Code 高热度条目多为 CI 机器人自动跟踪，属"工程噪音"而非用户需求热度，解读时需区分。
- **用户诉求最集中**：Codex（Windows 全链路问题）、Copilot CLI（会话事件超时 #5100/#5395 系统性问题）、OpenCode（免费额度+回归性缺陷）。
- **快速迭代阶段**：Qwen Code（日更 CLI/desktop/SDK，托管代理为主线，但 CI 长期未愈）、Pi（1.5.x 稳定性修复密集，多数 no-action 关闭，响应快）、DeepSeek TUI（v0.10.3 发布验收收尾）。
- **成熟但承压**：Claude Code、Codex 版本节奏稳定，但成本与平台问题积累；Gemini CLI 无发布、多条 P1 长期停留 need-retesting，迭代节奏相对偏慢。
- **冷清**：Kimi Code CLI 过去 24h 无活动（材料未说明原因，不作推断）。

## 6. 值得关注的趋势信号

**对工具维护者**
1. **"静默失败"比崩溃更伤信任**：MAX_TURNS 误报 success（Gemini #22323）、超时显示"after 0ns"（DeepSeek #7253）、Code Mode 返回 null（OpenCode #62923）——结果可信度正在成为新的质量基线。
2. **配置需具备原子性与回退**：半写配置即杀会话（OpenCode #62872）提示需要 last-good 快照与热生效语义，而非简单重载。
3. **副作用工具需显式串行化**：Pi #11952 的 bash 并行读脏输出是并发模型的通用陷阱。
4. **发布链路本身是可用性一环**：Gemini nightly 连续多日 413（#30207）、Qwen SDK 补发（#16490）、DeepSeek 发布验收清单化——CI/发布健壮性应纳入 SLA。

**对开发者选型与使用**
5. **成本可编程化**：多家呼唤限额钩子与恢复时间（Claude Code #55945）、成本估算（OpenCode #59861）——建议在选型时优先评估工具是否提供可被脚本消费的额度信号。
6. **平台适配需先验证目标平台**：Windows 在四家均为最高问题密度平台；macOS 26/WKWebView、Wayland、PowerShell 5.1 是新增高频环境组合，上线前应做端到端冒烟。
7. **仓库副作用需治理**：Copilot CLI 每轮创建 `refs/agents/*` Git 引用（#5323）、Pi/Codex 图片 base64 重放（#8617）——与 Git/请求体积深度集成的工具，需关注其对仓库与成本的隐性污染。
8. **生态互操作协议正在标准化**：OSC 7501 状态上报（Copilot #5320）、ACP 模式能力对齐（Copilot #5397/#5396）、混合代码模式工具枚举对齐 Codex（Qwen #11854）——终端状态协议与工具调用模式正走向跨工具收敛，值得提前对齐。

**数据说明**：本报告严格基于所给 2026-11-09 各源材料，未补充材料外信息；各工具 Issue/PR 统计口径不一，横向比较时已注明差异，单一高评论数（如 OpenCode #59387、Qwen Code #14724）需结合是否为机器人跟踪帖解读。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告（数据截止 2026-11-09）

> 说明：以下分析严格基于所提供的 PR / Issue 数据。所有 PR 评论数均为 `undefined`（数据缺失），故“热门 PR”部分改以**更新活跃度、涉及的核心内置 Skill、关联社区讨论**作为关注度代理指标；Issues 部分保留原始评论数。

---

## 1. 热门 Skills 排行

按“涉及核心内置 Skill 程度 + 更新活跃度 + 关联 Issue 热度”综合，关注度最高的条目如下（均为 **OPEN**）：

| # | Skill / PR | 功能 | 社区讨论热点 | 状态 |
|---|---|---|---|---|
| 1 | **mcp-builder** 修复 [#1742](https://github.com/anthropics/skills/pull/1742) | 适配 `mcp>=2.0.0`：`streamablehttp_client` 更名为 `streamable_http_client`，自定义头部改由 `create_mcp_http_client` 配置 | MCP 生态快速演进导致官方 Skill 失效，属高频依赖；关联 Issue #1668 | OPEN |
| 2 | **skill-creator** 触发评估隔离 [#1298](https://github.com/anthropics/skills/pull/1298) | 修复 trigger eval 误报：并行 worker 命令探测竞争、Windows 上 subprocess 管道 `select()` 失败 | Skill 评估结果可信度，直接影响描述优化与触发率 | OPEN |
| 3 | **webapp-testing** 安全加固 [#1980](https://github.com/anthropics/skills/pull/1980) | `with_server.py` 移除 `shell=True`，避免未净化命令注入 | 首个明确的安全类修复，与 Issue #492 的信任边界议题呼应 | OPEN |
| 4 | **docx** 超时报错修正 [#1792](https://github.com/anthropics/skills/pull/1792) | LibreOffice `soffice` 超时返回 Error 而非伪成功；校验输出已无修订标记 | 静默失败（silent success）导致产物错误 | OPEN |
| 5 | **xlsx** 外部链接风险检测 [#2019](https://github.com/anthropics/skills/pull/2019) | 解析工作表级 defined names / 别名，修正 `external_links_at_risk` 漏报 | 财务报表场景的准确性；关联 Issue #2013 | OPEN |
| 6 | **claude-api** 死链修复 [#1730](https://github.com/anthropics/skills/pull/1730) | 替换 academy-guide 与 tool-use-concepts 中 3 个 404 文档链接 | 与 Issue #1487（该 Skill 注入约 156k token 耗尽上下文）叠加，凸显维护滞后 | OPEN |
| 7 | **pyxel** 复古游戏开发（新 Skill）[#525](https://github.com/anthropics/skills/pull/525) | 指导创建/调试/验证 Python 复古游戏，支持无头输入驱动运行与逐帧检查 | 生命周期最长的新 Skill 提案之一（2026-03 至今仍活跃更新） | OPEN |
| 8 | **document-typography** 排版质控（新 Skill）[#514](https://github.com/anthropics/skills/pull/514) | 治理孤词换行、寡妇段落、编号错位等 AI 生成文档版面问题 | “最后一公里”输出质量，与 doc 系列 Skill 强互补 | OPEN |

---

## 2. 社区需求趋势

从 Issues 提炼，社区诉求集中在以下方向（括号内为原始评论数）：

1. **安全与信任边界**（最热）
   - Issue [#492](https://github.com/anthropics/skills/issues/492)（46 评论）：社区 Skill 在 `anthropic/` 命名空间下分发，冒充官方 Skill，存在权限提升型信任漏洞。另有 PR #1980 以安全修复形式回应。
2. **Skill 组织内协作与分发**
   - Issue [#228](https://github.com/anthropics/skills/issues/228)（17 评论）：期望 Claude.ai 支持**组织级共享 Skill 库**，替代“下载 .skill → Slack 传输 → 手动上传”的现状。
3. **评估与质量基础设施（skill-creator）**
   - Issue [#556](https://github.com/anthropics/skills/issues/556)（13 评论）`claude -p` 触发率 0%；[#1352](https://github.com/anthropics/skills/issues/1352)（5 评论）并行 worker 交叉匹配 UUID 致假阴性；[#1394](https://github.com/anthropics/skills/issues/1394)（4 评论）eval-viewer XSS；[#202](https://github.com/anthropics/skills/issues/202)（CLOSED，8 评论）建议 skill-creator 从“教学文档”改为“操作指令”。→ 社区核心诉求是**让 Skill 评估本身可信**。
4. **上下文与经济性**
   - Issue [#1487](https://github.com/anthropics/skills/issues/1487)（5 评论）：claude-api 单次工具调用注入约 156k token；[#1329](https://github.com/anthropics/skills/issues/1329)（10 评论）提议 compact-memory 符号化压缩 agent 状态。
5. **Agent 质量与治理范式（主动提案）**
   - Issue [#1385](https://github.com/anthropics/skills/issues/1385)（7 评论）：三闸门推理质量流水线（预任务校准 → 对抗评审 → 交付验证）；[#412](https://github.com/anthropics/skills/issues/412)（CLOSED）agent-governance：策略执行、威胁检测、信任评分、审计链。
6. **文档生成链路**：Issue [#189](https://github.com/anthropics/skills/issues/189)（6 评论，👍9）：document-skills 与 example-skills 插件内容完全相同，导致上下文重复。

> 注：数据未显示对“代码审查”“测试生成”方向的明确新 Skill 需求；webapp-testing 相关讨论均为缺陷修复而非新增需求。

---

## 3. 高潜力待合并 Skills

综合“修复明确、范围收敛、近期仍有更新、有 Issue 编号闭环”判断：

| PR | 内容 | 潜力依据 |
|---|---|---|
| [#1977](https://github.com/anthropics/skills/pull/1977) | algorithmic-art：`wrapAround()` 改为对负数也正确的取模 | 补丁极小，Fixes #1897，2026-10-18 仍更新 |
| [#1976](https://github.com/anthropics/skills/pull/1976) | webapp-testing：textarea / select 标签识别修正 | Fixes #1891，改动局部 |
| [#1975](https://github.com/anthropics/skills/pull/1975) | pptx：`--cols < 1` 由 argparse 前置报错 | Fixes #1809，属体验改进 |
| [#1997](https://github.com/anthropics/skills/pull/1997) | skill-creator：正确解析 YAML frontmatter 标量 | 直接缓解“评估元数据与 SKILL.md 不一致”问题族 |
| [#1681](https://github.com/anthropics/skills/pull/1681) | skill-creator：支持 `package_skill.py` 独立执行 | 修复 `ModuleNotFoundError`，使用门槛降低 |
| [#2019](https://github.com/anthropics/skills/pull/2019) | xlsx 外部链接风险漏报 | Fixes #2013，2026-11-03 更新，财务场景价值高 |
| [#538](https://github.com/anthropics/skills/pull/538) | pdf：修正 SKILL.md 中 8 处大小写敏感引用 | 零风险文档修复 |

**新 Skill 提案中更值得跟踪的**：
- [#525](https://github.com/anthropics/skills/pull/525) pyxel — 维护周期最长、持续更新，社区协作信号明显。
- [#1615](https://github.com/anthropics/skills/pull/1615) scnet-hpc — 面向 SCNet 集群的 SSH/Slurm 运维，属少见的垂直工程场景。
- [#1771](https://github.com/anthropics/skills/pull/1771) proofcore-contract-auditor — Solidity/Rust 静态分析 + TON 链上审计凭证锚定，但涉及第三方协议背书，评审门槛更高。
- [#1245](https://github.com/anthropics/skills/pull/1245) notion-spec-to-implementation — 规格到 Notion 任务的实现计划拆解，**属于最贴近“工作流自动化”方向的提案**，2026-10-15 仍有更新。

---

## 4. Skills 生态洞察

**一句话总结：社区当前最集中的诉求不是“再造更多 Skill”，而是“把 Skill 生态变成可信的基础设施”——即评估结果可信（skill-creator 触发率/解析）、分发身份可信（命名空间防冒充、组织内共享）、产物正确可信（docx/xlsx/pdf 的静默失败与 XML 校验），安全与可验证性已成为压倒性的主线。**

---

# Claude Code 社区动态日报（2026-11-09）

> 数据来源：github.com/anthropics/claude-code

## 1. 今日速览

Claude Code 发布 v2.1.321，引入新默认模型 Claude Fable 5.2（1M 上下文），并为 `claude remote-control` 增加 `--settings <file>` 参数。社区侧，成本与用量限制成为最集中的痛点：多条高互动 Issue 围绕限额会话中断、用量消耗异常加快、以及 token 耗尽钩子展开；此外若干已复现的跨平台 Bug（Linux Bash 工具 pkill/pgrep 自匹配、macOS 终端标题被清空、Windows Bash 命令截断）仍在持续讨论。

## 2. 版本发布

**v2.1.321**
- 新增 Claude Fable 5.2（`claude-fable-5-2`），成为默认 Fable 模型：1M 上下文，$8/$40 每 Mtok，缓存读取 $0.20/Mtok。
- `claude remote-control` 新增 `--settings <file>`：对每个新启动的会话应用该设置文件；若文件变更，则不再影响已启动会话（原文在此处截断）。

## 3. 社区热点 Issues（Top 10）

1. **[#52477](https://github.com/anthropics/claude-code/issues/52477)** [OPEN][bug, area:model, memory] Claude 覆盖用户记忆中的明确人称代词并默认男性化 — 评论 19，👍7。涉及模型行为与用户偏好记忆的可靠性，是本日评论数最高的 Issue，反映对模型遵从用户设定的敏感度。
2. **[#56978](https://github.com/anthropics/claude-code/issues/56978)** [OPEN][enhancement, area:cost] 会话中途触及用量上限时的优雅处理 — 评论 16，👍3。Max 计划下使用 1M 上下文模型时，触达限额即被 429 锁定会话，直接影响长时间任务可用性。
3. **[#24534](https://github.com/anthropics/claude-code/issues/24534)** [OPEN][bug, has repro, Windows, area:ide, area:desktop] Windows 桌面端归档的 Code 会话在 Archive 筛选中不可见 — 评论 15，👍13。本日点赞最高之一，属可复现的桌面端功能缺陷。
4. **[#55945](https://github.com/anthropics/claude-code/issues/55945)** [OPEN][enhancement, area:hooks] token 耗尽时触发的钩子，并暴露恢复可用时间 — 评论 15。让工具链能感知限额状态并做自动化调度，呼应用量成本主题。
5. **[#55854](https://github.com/anthropics/claude-code/issues/55854)** [OPEN][enhancement, area:tui, permissions] 权限提示中“否”不使用数字键，误按数字回退为“是” — 评论 13，👍7。涉及交互安全与误操作风险，社区关注度较高。
6. **[#55915](https://github.com/anthropics/claude-code/issues/55915)** [OPEN][enhancement, area:tui] 欢迎页热力图支持配置周起始日为周一 — 评论 13，👍1。符合 ISO 8601 的本地化诉求。
7. **[#79146](https://github.com/anthropics/claude-code/issues/79146)** [OPEN][bug] `auto-close-duplicates` 仅识别 Issue 作者本人的 👎，与机器人评论承诺不符 — 评论 12，👍2。属仓库自动化脚本行为不一致问题。
8. **[#105621](https://github.com/anthropics/claude-code/issues/105621)** [OPEN][duplicate, Windows, area:cost, area:desktop] 2026 年 10 月中旬起 Max Windows 桌面端用量消耗显著加快（工作流未变）— 评论 10，👍4。与成本主题叠加，提示可能存在用量计算或后端变化。
9. **[#93607](https://github.com/anthropics/claude-code/issues/93607)** [OPEN][bug, has repro, Linux, area:bash] Linux Bash 工具的 `pkill -f`/`pgrep -f` 会匹配工具自身的 `bash -c … eval` 包装进程（exit 144、幽灵 PID）；2.1.214 的防护只覆盖 CLI 进程 — 评论 9，👍4。可复现的进程管理陷阱，影响脚本可靠性。
10. **[#85169](https://github.com/anthropics/claude-code/issues/85169)** [OPEN][enhancement] 上下文保留可调 / MCP 工具结果淘汰机制 — 评论 9。直接关系到上下文窗口利用效率与成本，与 1M 上下文新模型形成呼应。

> 其他值得留意：[#97695](https://github.com/anthropics/claude-code/issues/97695)（Routine 表单应暴露 effort 等级，👍12，为点赞最高条目之一）、[#105923](https://github.com/anthropics/claude-code/issues/105923)（regression：`DISABLE_TELEMETRY=1` 时 `/model` 隐藏 Mythos 及历史模型）、[#101890](https://github.com/anthropics/claude-code/issues/101890)（未文档化的 `CLAUDE_CODE_OAUTH_TOKEN` 子进程剥离行为）。

## 4. 重要 PR 进展

过去 24 小时内更新的 PR 仅 1 条：

1. **[#89404](https://github.com/anthropics/claude-code/pull/89404)** [OPEN] validate-agent.sh：不在首个警告处中止（`set -e` + `((x++))` 问题），并停止误报有效 agent — 作者 bcherny。修复公开 Issue [#83803](https://github.com/anthropics/claude-code/issues/83803)：plugin-dev skill 的 `validate-agent.sh` 在自身 agent 文件上失败，根因均为 `set -euo pipefail` 交互问题，其中首要问题是“在首个警告处中止”。

> 说明：本次数据中仅提供 1 条 PR，无法凑足 10 条，故如实列出全部。

## 5. 功能需求趋势

- **成本与用量治理**：最突出方向。包括限额中断的优雅处理（#56978）、token 耗尽钩子（#55945）、用量消耗异常（#105621），以及上下文保留/MCP 结果淘汰以控制开销（#85169）。
- **上下文与模型控制**：1M 上下文新模型上线同期，社区要求可调控的上下文保留策略；Routine 表单需暴露 effort 等级（#97695），与交互式 `/effort` 能力对齐。
- **TUI / 交互体验**：权限提示的误操作防护（#55854）、周起始日本地化（#55915）、会话级草稿/暂存消息（#105686）、agent view 改进。
- **IDE / 桌面端集成**：桌面端归档筛选（#24534）、Windows 桌面端 Bash 命令截断与转义问题（#100936）。
- **安全与环境变量语义**：OAuth token 子进程剥离未文档化（#101890）、文件名触发安全软件冲突（#90426）。

## 6. 开发者关注点

- **用量与成本的不可预期性**：会话中途被 429 锁定、消耗速度无解释地加快，是开发者对生产可用性最直接的担忧；社区希望获得可编程的限额信号（钩子 + 恢复时间）。
- **可复现的跨平台 Bug 占比高**：Linux（#93607）、macOS（#85776 终端标题退出时被清空而非恢复，破坏 tmux-resurrect；#100936 同类桌面端截断）、Windows（#100936 命令约 8,191 字符截断、双反斜杠被减半）——均标注 `has repro`，修复优先级值得关注。
- **文档与实现不一致**：`auto-close-duplicates` 与机器人评论承诺不符（#79146）、`CLAUDE_CODE_OAUTH_TOKEN` 剥离行为未文档化（#101890），反映对透明度和文档准确性的诉求。
- **仓库自动化噪音**：Issue [#81632](https://github.com/anthropics/claude-code/issues/81632) 报告 “Run failed: Claude Issue Triage - main” 邮件，表明 triage 工作流本身存在失败反馈问题。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报 · 2026-11-09

> 数据来源：github.com/openai/codex

## 1. 今日速览

过去 24 小时 codex 仓库以修 bug 的 PR 为主（19 条 PR 中绝大多数已 CLOSED，且多由 `copyberry[bot]` 提交），核心集中在认证/限额校验、MCP 资源列举、app-server 状态管理等基础设施层。社区侧 Windows 平台问题集中爆发，其中 VS Code 扩展 UI 无法启动（#56655）、应用更新后本地项目消失（#59895）等获得高赞/高评论。唯一的新版本为 Rust 侧 `0.169.0-alpha.6` 预发布。

## 2. 版本发布

- **rust-v0.169.0-alpha.6**：Release 说明仅为版本号本身（"0.169.0-alpha.6"），未提供具体变更内容。属 alpha 预发布通道。
  链接：openai/codex Releases

## 3. 社区热点 Issues（10 条）

1. **#29343 Chrome 插件 / 浏览器 / Computer Use 拒绝在特定站点交互**（OPEN，58 评论，👍20）
   持续近半年（创建于 2026-06-21）的高热度安全问题，涉及 browser 与 computer-use 两类能力。评论量全榜第一，说明跨站点权限/安全拦截是长期未解的痛点。
   https://github.com/openai/codex/issues/29343

2. **#56655 VS Code 扩展 UI 无法启动（26.51021.22027）**（OPEN，54 评论，👍79）
   👍 数全榜最高，Windows 上的 IDE 扩展启动失败。IDE 集成是开发者日常入口，高赞反映影响面广、用户诉求强烈。
   https://github.com/openai/codex/issues/56655

3. **#59895 Windows：应用更新并切回个人账户后本地项目消失**（OPEN，41 评论，👍15）
   数据可见性/丢失类问题，风险等级高——涉及用户本地项目"消失"，对信任影响大，值得优先跟踪。
   https://github.com/openai/codex/issues/59895

4. **#41779 Windows：本地 API 启动被 "blocked by policy" 拒绝**（OPEN，17 评论）
   `exec_command` 提交的 PowerShell 命令在执行前即被策略拒绝，sandbox/工具调用策略在 Windows 上的误拦截问题。
   https://github.com/openai/codex/issues/41779

5. **#59855 Windows Desktop 恢复云托管会话时报 AbsolutePathBuf 错误**（OPEN，17 评论）
   打开受影响的云会话即报反序列化错误，属会话/持久化层缺陷。
   https://github.com/openai/codex/issues/59855

6. **#51043 周限额重置后 Pi 仍被 Subscription Sharing 限额阻塞**（OPEN，17 评论，👍20）
   auth + rate-limits 交叉问题，影响第三方客户端通过 OpenAI 登录使用模型，反映额度同步机制不一致。
   https://github.com/openai/codex/issues/51043

7. **#57190 macOS：重启后已有聊天中浏览器显示为"禁用"**（OPEN，16 评论）
   权限状态与实际可用性不一致，与 #37738、#58439 构成同一类"浏览器权限状态不同步"问题簇。
   https://github.com/openai/codex/issues/57190

8. **#37738 Browser Use 无视"允许浏览"权限，仍阻止 localhost**（OPEN，14 评论）
   本地开发场景（`http://localhost:3000`）被拦截，直接阻碍 Web 开发工作流，影响面典型。
   https://github.com/openai/codex/issues/37738

9. **#31659 `/goal` 期间的 Auto-Compaction 丢失目标、退回追逐最近提示**（OPEN，10 评论）
   上下文管理类行为缺陷，直接影响长任务的连续性，是 CLI 用户关注的模型行为问题。
   https://github.com/openai/codex/issues/31659

10. **#54955 macOS Desktop 回合 diff 捕获产生 263.7 GB tmp_pack 垃圾填满磁盘**（OPEN，5 评论）
    数据量惊人且"禁用开关不可用、配置不能热生效"，属性能/磁盘安全类高风险缺陷。
    https://github.com/openai/codex/issues/54955

其他值得留意：#59546（自动化限制与外链监控冲突，👍12）、#43189（"Daybreak Verified" 后仍被内容拦截）、#54640（MCP 代理禁用 ControlMaster 破坏 SSH 密码/OTP 主机）。

## 4. 重要 PR 进展（10 条）

> 以下 PR 均为 CLOSED，且作者为 `copyberry[bot]`（除注明外）。

1. **#60443 实时附件的取消与超时支持**：待处理的实时连接握手会阻塞后续附件请求，允许调用方取消过期尝试或限制建立时长。
   https://github.com/openai/codex/pull/60443

2. **#60436 预算检查后重新校验请求认证归属**：异步请求初始化期间账户切换可能使已选凭证失效，改为在认证归属变化时重启 HTTP 请求初始化。
   https://github.com/openai/codex/pull/60436

3. **#60432 内置 SQLite 升级至 3.54**：修复 `RUSTSEC-2026-0459`（WAL 打开时），同时保留 WAL 重置的损坏修复；`libsqlite3-sys` 升至 0.39.1。安全相关，值得关注。
   https://github.com/openai/codex/pull/60432

4. **#60423 在资源列表中暴露延后的 MCP 服务器**：聚合资源列表此前遗漏休眠的 MCP 服务器，新增排序后的 `deferredServers`。
   https://github.com/openai/codex/pull/60423

5. **#60390 允许在 thread item 列表中延迟纯文本 MCP 输出**：为 `thread/items/list` 增加实验性 `deferOutput.mcpToolCall`（按 `turnId` 限定）。
   https://github.com/openai/codex/pull/60390

6. **#60434 回合开始时重置 app-server 回合摘要**：修复"回合开始前记录的错误导致成功回合被报为失败"的状态残留问题。
   https://github.com/openai/codex/pull/60434

7. **#60418 后台终端运行时允许终端状态转为 done**：修复回合结束后状态卡在 `Working`、无法上报 `Done`/回到 `Idle` 的问题。
   https://github.com/openai/codex/pull/60418

8. **#60342 将 goal 目标视为不可信上下文**：目标以不可信 `goal_objective` 上下文传入，而非拼进续写指令，降低注入风险。
   https://github.com/openai/codex/pull/60342

9. **#60414 支持网关 OAuth 下的模型目录发现**：使用网关 OAuth + 显式模型目录的自定义提供方无需 API key 即可发现模型。
   https://github.com/openai/codex/pull/60414

10. **#60335 恢复 Cloud 线程时避免重复助手消息**：TUI 重放 Cloud 线程历史后，同一已完成助手条目的通知不再重复渲染文本。
    https://github.com/openai/codex/pull/60335

其他：#60435（用量恢复后关闭模型切换提示）、#60389（云预热请求携带 Codex Apps 配置）、#60391（简化 Guardian 拒绝后审批指引）、#60416（全屏 Markdown 中 URL 不跨行断裂）。

## 5. 功能需求趋势

- **IDE 与桌面客户端稳定性**：VS Code 扩展、Windows/macOS 桌面应用为问题高发区（#56655、#59895、#59855、#57190）。
- **Browser Use / Computer Use 权限模型**：多条 Issue（#29343、#37738、#57190、#58439、#59422）指向"权限已设为允许但仍被拦截"的一致性问题，涵盖 localhost、跨站点、窗口截图超时。
- **远程与多机协作**：社区明确提出移动端 Remote Control 的多账户/多机连接（#31187）、将已有远程 CLI 会话接入 App 项目（#21886）、watchOS 应用做语音提示与审批（#33528），以及自动化监控外部系统（#59546）。
- **上下文与目标管理**：#31659（Auto-Compaction 丢失 goal）显示长任务上下文保持是 CLI 侧关注点，与 PR #60342 将 goal 作为不可信上下文的处理方向呼应。
- **平台覆盖**：Windows 相关 Issue 在榜单中占比突出（#56655、#59895、#41779、#59855、#59422），是当前问题密度最高的平台。

## 6. 开发者关注点

- **Windows 体验是最大痛点**：启动失败、项目消失、策略误拦截、云会话恢复报错、窗口截图超时，覆盖安装→启动→会话→工具调用的完整链路。
- **权限设置"说了不算"**：浏览器/站点权限在更新、重启、切换聊天后状态不一致，且无法通过重建权限或设置变更即时生效（#37738、#57190、#58439、#54955 的"配置不能热生效"）。
- **数据与磁盘安全**：#59895 本地项目消失、#54955 单次产生 263.7 GB 垃圾且禁用开关不可用，是信任成本最高的两类反馈。
- **额度与认证一致性**：限额重置后仍被阻塞（#51043）、账号切换导致凭证失效（对应 PR #60436），说明跨账户/跨客户端的状态同步需加强。
- **长任务连续性**：goal 在自动压缩后丢失（#31659），开发者期望代理在长周期任务中保持目标而非退回最近提示。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报（2026-11-09）

## 1. 今日速览

今日没有新的版本发布，社区活动集中在 Agent 与子代理的稳定性以及工具调用控制上。多个 P1 级问题（包括子代理挂起、MAX_TURNS 后仍误报成功、Wayland 下浏览器子代理失败）持续等待复测。PR 侧围绕工具调用超时、搜索输出限制、无头模式信号处理与构建发布修复展开，同时一个 P0 级 nightly 发布失败修复值得优先关注。

## 2. 版本发布

过去 24 小时无新版本发布。

## 3. 社区热点 Issues

1. **#3375 支持为工具调用设置超时时长**（29 条评论，👍9，OPEN）
   社区呼声最高的增强需求，希望可配置单次工具调用的执行时间上限。评论量居首，长期活跃，已有对应 PR #30212 落地。
   https://github.com/google-gemini/gemini-cli/issues/3375

2. **#22323 子代理 MAX_TURNS 恢复被误报为 GOAL 成功**（13 条评论，P1，OPEN）
   `codebase_investigator` 在实际因达到最大轮次而中断时仍上报 `status: "success"`，掩盖了中断事实。属于结果可信度问题，被标为需复测。
   https://github.com/google-gemini/gemini-cli/issues/22323

3. **#21409 通用代理（generalist agent）挂起**（8 条评论，👍8，P1，OPEN）
   一旦委派给通用代理便永久挂起，甚至创建文件夹这类简单操作也会卡住，用户曾等待长达一小时。高赞反映影响面广。
   https://github.com/google-gemini/gemini-cli/issues/21409

4. **#19873 利用模型 bash 亲和力：零依赖 OS 沙箱与执行后意图路由**（9 条评论，P2，OPEN）
   提出 Gemini 3 模型原生擅长链式调用 POSIX 工具，建议以此构建沙箱执行方案。属于较大的架构方向探索。
   https://github.com/google-gemini/gemini-cli/issues/19873

5. **#22745 评估 AST 感知的文件读取、搜索与代码库映射**（7 条评论，P2，OPEN）
   EPIC 级调研，目标是减少工具调用轮次、更精确地读取方法边界，与 #22746 关联。
   https://github.com/google-gemini/gemini-cli/issues/22745

6. **#21968 Gemini 未充分利用 skills 与子代理**（7 条评论，P2，OPEN）
   用户反馈若不显式指示，模型基本不会主动调用自定义 skills 与子代理。关系到 Agent 编排的实际可用性。
   https://github.com/google-gemini/gemini-cli/issues/21968

7. **#22267 Browser Agent 忽略 settings.json 覆盖项**（5 条评论，P2，OPEN）
   浏览器代理完全忽略全局/项目级配置（如 `maxTurns`），AgentRegistry 相关逻辑存在缺陷。
   https://github.com/google-gemini/gemini-cli/issues/22267

8. **#21983 Wayland 下浏览器子代理失败**（4 条评论，P1，OPEN）
   特定桌面环境下浏览器子代理直接失败，属环境兼容性 P1 缺陷。
   https://github.com/google-gemini/gemini-cli/issues/21983

9. **#24246 工具数超过 128 时触发 400 错误**（3 条评论，P2，OPEN）
   可用工具过多导致请求失败，期望代理能更智能地收敛工具范围。
   https://github.com/google-gemini/gemini-cli/issues/24246

10. **#22672 代理应停止/劝阻破坏性行为**（3 条评论，P2，OPEN）
    在复杂 git 操作中模型可能使用 `git reset` 或 `--force`，存在误操作风险，属于安全方向诉求。
    https://github.com/google-gemini/gemini-cli/issues/22672

（另：**#30007** 无头模式信号处理相关 Issue 已 CLOSED，对应 PR #30204 亦已关闭，详见下节。）

## 4. 重要 PR 进展

1. **#30212 feat(core)：可配置的单次工具调用超时 `tools.callTimeout`**（P3，OPEN）
   新增以秒为单位的配置，默认 0 表示禁用；超时后触发 `AbortSignal`，以可恢复的 `TOOL_CALL...` 结束。直接回应 #3375。
   https://github.com/google-gemini/gemini-cli/pull/30212

2. **#30207 fix(build)：esbuild 前清理 bundle/ 以移除陈旧 chunk**（P0，OPEN）
   自 2026-11-05 起 nightly 发布连续失败（发布 `@google/gemini-cli` 时报 413，tarball 25.2 MB）。发布链路阻断，优先级最高。
   https://github.com/google-gemini/gemini-cli/pull/30207

3. **#30211 fix(core)：read-many-files 仅在显式请求时内联二进制资源**（P1，OPEN）
   修复宽泛目录 glob（如 `reports/**`）误将 image/pdf/audio 以 base64 内联进模型负载的问题（#29045）。
   https://github.com/google-gemini/gemini-cli/pull/30211

4. **#30204 fix(cli,core)：无头中止时终止子进程、记录取消工具并保留信号退出码**（CLOSED）
   处理 `-p` 模式收到 SIGTERM/SIGINT/SIGHUP 时子进程与 PTY 未终止、退出码为 0、会话未记录的问题（对应 #30007）。
   https://github.com/google-gemini/gemini-cli/pull/30204

5. **#30164 fix(cli)：进入 macOS Seatbelt 沙箱前先解析文件夹信任**（P1，CLOSED）
   修复 #28598 启动崩溃修复后仍残留的信任失败问题（受 #29214 的 Seatbelt 配置影响）。
   https://github.com/google-gemini/gemini-cli/pull/30164

6. **#30185 fix(cli)：防止 Shell 模式下递归启动交互式 gemini 会话**（P1，OPEN）
   拦截在 `!` Shell Mode 与 `[Shell]` 工具内再次启动交互式 `gemini` 的递归行为。
   https://github.com/google-gemini/gemini-cli/pull/30185

7. **#30109 fix(core)：限制 grep_search 输出大小并提示模型收窄搜索**（P2，OPEN）
   现有匹配数上限并不限制单行长度，长日志或压缩行会生成超大输出。
   https://github.com/google-gemini/gemini-cli/pull/30109

8. **#30189 fix(core)：MessageBus.request() 在 publish 失败时立即 reject**（P2，OPEN）
   原逻辑需等待完整超时（约 60 秒）才失败，改动后立即以原始错误拒绝并释放计时器与监听器。
   https://github.com/google-gemini/gemini-cli/pull/30189

9. **#30210 fix(core)：请求取消后停止 WebFetch 回退处理**（OPEN，修复 #30099）
   在主动请求被取消后不再继续执行回退逻辑，改善取消语义。
   https://github.com/google-gemini/gemini-cli/pull/30210

10. **#30176 fix(cli)：认证重启后保留所选 worktree**（OPEN，修复 #30078）
    在 `RELAUNCH_EXIT_CODE = 199` 重启时保留 `--worktree` 选择，覆盖 bootstrap 与旧子进程两套 supervisor。
    https://github.com/google-gemini/gemini-cli/pull/30176

（其他：#30104 修复 `/skills link` 后斜杠命令未刷新；#30160 用 `isSubpath` 替换主题文件的字符串前缀检查；#30139 约束 triage 自动化只应用仓库已定义的标签。）

## 5. 功能需求趋势

- **工具调用可控性**：超时配置（#3375 / #30212）、输出大小限制（#30109）、工具数量上限治理（#24246）。
- **Agent/子代理体系成熟化**：状态正确性（#22323）、配置覆盖（#22267）、轨迹可见与分享（#22598）、本地子代理迭代（#20195）、仓库内示例代理（#18283）。
- **上下文效率与检索质量**：AST 感知的读取/搜索/代码库映射（#22745、#22746），以及 bash 原生工作流路线（#19873）。
- **安全与行为约束**：抑制破坏性命令（#22672）、沙箱与信任模型（#30164）。
- **平台兼容性**：Wayland（#21983）、macOS Seatbelt 沙箱。

## 6. 开发者关注点

- **可靠性优先**：挂起（#21409）与误报成功（#22323）这类“静默失败”问题最影响信任，且多条 P1 长期停留在 need-retesting 状态。
- **配置不生效**：多个 Agent 对 `settings.json` 覆盖无响应（#22267），削弱了用户侧调优能力。
- **模型主动性不足**：skills 与子代理需显式指令才会被调用（#21968），限制了 Agent 编排价值。
- **发布链路稳定性**：nightly 连续多日因包体积超限失败（#30207），需尽快恢复。
- **易用性细节**：符号链接代理识别（#20079）、斜杠命令刷新（#30104）、临时脚本散落（#23571）等高频小摩擦持续被提及。

---
数据来源：github.com/google-gemini/gemini-cli（Issues/PR 统计截至 2026-11-09）

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报（2026-11-09）

## 1. 今日速览

今天发布 v1.0.108，新增 Windows 目录枚举授权配置和 `/index` 索引命令，默认启用受管共享 tgrep 索引；Grok 4.7/4.6 的 PDF 附件改为回退为文件引用。同日新开多条 triage 级 Issue，集中在 ACP 模式兼容性、沙箱网络策略、会话事件超时与 Windows 凭据存储诊断，另有 macOS 26 原生 canvas 窗口空白的严重渲染问题。

## 2. 版本发布

**v1.0.108（2026-11-09）**
- 新增 `settings.json` 配置项 `sandbox.userPolicy.filesystem.enumeratePaths`，支持 Windows 下仅枚举（enumerate-only）的目录授权。
- 新增 `/index` 命令，并对符合条件（eligible）的仓库默认启用受管共享 tgrep 索引。
- Grok 4.7 和 Grok 4.6 上的 PDF 附件回退为文件引用方式。
- 链接：https://github.com/github/copilot-cli/releases

## 3. 社区热点 Issues

1. **#5323 新增禁用 agent checkpoint refs（`refs/agents/*`）的设置** — OPEN
   每轮 agent 对话都会以用户 Git 身份在仓库中创建 `refs/agents/<session-id>/checkpoints/turn/N` 引用，用户希望在配置中关闭。评论 5、👍1，是当前讨论度最高的功能诉求。
   https://github.com/github/copilot-cli/issues/5323

2. **#5185 内部告警：copilot-runtime-bazel-cache 内存用量与限额冲突（P3 CRITICAL）** — OPEN
   来自内部状态页机器人的容器运行时监控告警，虽非用户反馈，但涉及内部基础设施稳定性。
   https://github.com/github/copilot-cli/issues/5185

3. **#5320 支持 OSC 7501 agent 状态上报（Herdr）** — CLOSED
   请求 Copilot CLI 原生支持 Program Status Protocol，以便 Herdr 等终端展示会话状态。👍11 为最高赞条目之一，且已关闭，进展积极。
   https://github.com/github/copilot-cli/issues/5320

4. **#2616 长任务完成时发送原生系统通知** — OPEN
   自 2026-04 持续活跃的老 Issue，反映长时间任务缺少完成提醒的体验缺口。
   https://github.com/github/copilot-cli/issues/2616

5. **#508 Windows 下支持 Git Bash** — OPEN
   要求替代默认 PowerShell，👍7，反映 Windows 用户对 shell 可选项的强烈需求。
   https://github.com/github/copilot-cli/issues/508

6. **#5100 会话事件在单次 120s host-ack 超时后永久失败** — OPEN
   长时间交互会话中 prompt 提交报 "session host did not acknowledge…"，会话不可用直到 resume，属高影响稳定性缺陷。
   https://github.com/github/copilot-cli/issues/5100

7. **#5395 后台任务事件超时导致会话停止接收消息、结果丢失** — OPEN（今日新建）
   与 #5100 同类但表现为 `session.background_tasks_changed` 超时，说明事件投递超时是系统性问题。
   https://github.com/github/copilot-cli/issues/5395

8. **#5390 macOS 沙箱 `allowLocalNetwork: true` 仍生成 `hostLoopback: deny`** — OPEN
   代理模式下阻断 Gradle 连接 localhost 守护进程，影响 1.0.107 用户的 macOS 构建工作流。
   https://github.com/github/copilot-cli/issues/5390

9. **#5398 macOS 26 原生 canvas 窗口全部空白（WKWebView 从未加载 URL）** — OPEN（今日新建）
   任意 canvas（含极简页面）都不发起请求，属渲染栈（webviewjs/tao）层面的严重问题。
   https://github.com/github/copilot-cli/issues/5398

10. **#5352 子代理误读指令，拒绝从 temp 读取文件** — CLOSED
    子代理系统提示中的 "禁止写 /tmp" 被理解为读取也禁止，已关闭，说明 prompt 约束精度问题得到处理。
    https://github.com/github/copilot-cli/issues/5352

## 4. 重要 PR 进展

过去 24 小时内 PR 更新为 **0 条**，本部分无内容可汇总。

## 5. 功能需求趋势

- **终端/IDE 集成与状态互操作**：#5320（OSC 7501 状态上报）、#5315（GitHub Mobile 语音远程控制）、#2616（系统通知）——社区希望 Copilot CLI 更好地融入外部终端、移动端与桌面通知生态。
- **Windows / 跨平台环境适配**：#508（Git Bash）、#5399（Windows 凭据管理器诊断）、#5390（macOS 沙箱网络）、#5398（macOS 26 渲染）——平台差异带来的兼容与诊断需求集中。
- **配置与可定制性**：#5323（checkpoint refs 开关）、#5390（沙箱网络策略生效）、#144（`$HOME` 展开，已关闭）——用户要求更细粒度、行为一致的配置控制。
- **网络与企业代理支持**：#5142（Kerberos/Negotiate 代理下的 Remote HTTP MCP，已关闭）、#4322（Trusted Access for Cyber 程序）——企业网络与安全策略下的可用性是持续议题。
- **ACP / 非交互模式能力对齐**：#5397（`--acp` 下 Connectors 不可用）、#5396（preToolUse hook 的 `ask` 被 host 策略拒绝）、#5357（`-p` I/O 失败）——ACM/自动化集成路径上的功能缺口明显。

## 6. 开发者关注点

- **会话稳定性是最大痛点**：#5100、#5395 均指向事件投递 120s/后台任务超时后会话不可恢复或结果丢失，影响长会话与后台 agent 场景。
- **ACP 模式与交互模式行为不一致**：Connectors 缺失、hook 审批决策被 host 策略覆盖（#5397、#5396），阻碍自动化客户端集成。
- **沙箱策略"配置了但不生效"**：#5390 中 `allowLocalNetwork: true` 仍产生 `hostLoopback: deny`，以及 #5399 中 Windows 凭据存储警告过于笼统，反映错误诊断与策略执行可信度不足。
- **对仓库副作用敏感**：#5323 关注 agent 自动创建的 Git refs 污染用户仓库历史，这是与 Git 深度集成的独特风险点。
- **模型侧限制与回退**：#4322 的安全内容误判（422 flagged）、v1.0.108 中 Grok 的 PDF 附件回退，显示模型能力差异仍需在 CLI 层面兜底。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报（2026-11-09）

## 1. 今日速览

今日无新版本发布，社区讨论高度集中在 OpenCode Zen 免费额度问题上——主追踪 Issue #59387 评论数已达 338 条。与此同时，v2.2.5/2.2.6 版本暴露出一批影响使用的高优缺陷：Code Mode `execute` 工具全部返回 null、配置热重载因竞态写入导致整份配置被拒并终止所有会话、大仓库下 git 轮询占满 CPU。PR 侧主要围绕缓存预热（warming）策略修复、V1 文档迁移到新站点以及 CI 密钥迁移到 AWS Secrets Manager 展开。

## 2. 版本发布

过去 24 小时无新版本发布。

## 3. 社区热点 Issues

1. **#59387 [OPEN] Zen 免费额度问题主帖（338 评论 / 👍27）**
   https://github.com/anomalyco/opencode/issues/59387
   官方将"Free usage exceeded / 免费额度已达上限"类问题收敛到单一主帖，说明免费层不限模型共享额度（切换模型也无法恢复）是当前最突出的体验问题，社区讨论热度远超其他议题。

2. **#43250 [OPEN] [2.0, reproduced] keep.tokens 未被遵守，会话上下文超出设定值 5–15 倍**
   https://github.com/anomalyco/opencode/issues/43250
   文档称 `keep.tokens` 默认 15000，但 agent 驱动会话中压缩回退逻辑无界，实际可达 234K。直接影响长会话的 token 成本与模型上下文窗口，是核心层的正确性问题。

3. **#62923 [OPEN] Code Mode `execute` 工具对所有代码返回 null（v2.2.6）**
   https://github.com/anomalyco/opencode/issues/62923
   普通返回值、`console.log`、`search()`、甚至抛出的异常均返回 null，涉及版本 2.2.6，属于功能性回归，对依赖 Code Mode 的开发者影响大。

4. **#62872 [OPEN] [reproduced] 配置文件瞬时半写状态导致整份配置被拒，杀死所有运行中会话**
   https://github.com/anomalyco/opencode/issues/62872
   并发写入 `opencode.jsonc` 时，重载进程解析失败即拒绝整份配置且无 last-good 回退，直接中断所有会话，是可靠性层面的严重风险。

5. **#62948 [OPEN] 大型 worktree 下 git 轮询循环占满 CPU**
   https://github.com/anomalyco/opencode/issues/62948
   在约 130 万文件 / 47GB 的仓库中，快照目录位于项目内触发反复全量扫描。对大型单体仓库用户是使用阻断级问题。

6. **#62641 [OPEN] [reproduced] step 上限终止时以 assistant 角色发起请求，被不支持 prefill 的模型拒绝**
   https://github.com/anomalyco/opencode/issues/62641
   `SessionRunner.runStep` 达到 `steps` 上限后发送 `Message.assistant(MAX_STEPS_PROMPT)`，Claude Opus 5.5 拒绝此类请求。属于多模型兼容性缺陷。

7. **#61695 [OPEN] [reproduced] Claude Agent 宿主端重启被模型误读为"用户不想继续"**
   https://github.com/anomalyco/opencode/issues/61695
   工具调用进行中遇重启时，模型接收到 "The user doesn't want to proceed"，会导致 agent 错误中止任务，影响 claude-agent provider 的稳定性。

8. **#58128 [OPEN] LLM API 失败不应停止重试**
   https://github.com/anomalyco/opencode/issues/58128
   当前硬编码为指数退避、最长 10s 间隔、10 次上限。提交者认为这是源码中的糟糕默认值，涉及长时间任务在 API 抖动下的存活能力。

9. **#59861 [OPEN] TUI：对上报 $0 成本的 provider 可选显示目录价估算**
   https://github.com/anomalyco/opencode/issues/59861
   Go 订阅用户因 provider 上报 $0 而看不到"$X spent"，属 v2.2.0 后的行为变化，反映订阅用户对成本可见性的诉求。

10. **#23153 [CLOSED] [FEATURE] 支持用加密货币支付 OpenCode Go（35 评论 / 👍67）**
    https://github.com/anomalyco/opencode/issues/23153
    点赞数为本期最高，今日以 CLOSED 状态更新。虽已关闭，但高赞表明支付方式的灵活性仍是社区关注点。

其他值得留意：#62934（Android 0.3.0 缺少 `ACCESS_LOCAL_NETWORK` 无法连接局域网）、#54985（web DOCX 预览中文字符显示为方块，BetterOffice CJK 字体问题）、#59603（v2.2.0 自定义 provider 选项消失）、#61189（legacy schema 长会话编辑重发后历史回放截断）。

## 4. 重要 PR 进展

1. **#62926 [OPEN] fix(core): ping 未命中缓存后停止预热会话**
   https://github.com/anomalyco/opencode/pull/62926
   关联 issue #61775，修复缓存预热在 ping 未命中后继续执行的逻辑。

2. **#62831 [CLOSED] [contributor] fix(core): 默认按模型 cache.ttl 计算预热时长**
   https://github.com/anomalyco/opencode/pull/62831
   同为 #61775 的一部分，将预热时间改为默认跟随模型声明的 cache.ttl。

3. **#62957 [CLOSED] ci: v1 部署与发布密钥改从 AWS Secrets Manager 读取**
   https://github.com/anomalyco/opencode/pull/62957
   v1 工作流通过 GitHub OIDC 在 `v1` 环境假定 IAM 角色，按需获取 Cloudflare / Sentry 等密钥。

4. **#62954 [CLOSED] ci: dev 侧部署与发布密钥改从 AWS Secrets Manager 读取**
   https://github.com/anomalyco/opencode/pull/62954
   每个 job 假定 `opencode-<stage>` 角色，仅拉取自身使用的键，缩小 GitHub Secrets 暴露面。

5. **#62922 [CLOSED] feat(app): 右键"关闭右侧标签页"，⌘W/⌘⇧T 识别侧面板**
   https://github.com/anomalyco/opencode/pull/62922
   修复 ⌘W 误关会话标签的问题，并支持 RTL 下显示为"关闭左侧"。

6. **#62950 [OPEN] refactor(site): 参数化 src/docs 以支持多套文档**
   https://github.com/anomalyco/opencode/pull/62950
   将 V1 文档接入站点文档流水线的堆叠 PR 之一（配合 #62951、#62956）。

7. **#62951 [OPEN] feat(site): 以新设计在 /v1/docs 提供 V1 文档**
   https://github.com/anomalyco/opencode/pull/62951
   堆叠在 #62950 之上，实现 V1 文档在新设计下的呈现。

8. **#62956 [OPEN] feat(site): 翻译 V1 文档框架与仅英文页面**
   https://github.com/anomalyco/opencode/pull/62956
   使翻译后的 V1 页面整体为读者语言，而非仅正文。

9. **#57581 [OPEN] [contributor] fix(app): 按位置而非 ID 字符串排序消息**
   https://github.com/anomalyco/opencode/pull/57581
   修复 fork 会话或含 iOS 消息的会话中 Rewind 隐藏错误消息、提交回退时丢失整段记录的问题。

10. **#62949 [CLOSED] [contributor] docs(console): 新增 Claude Fable 5.2**
    https://github.com/anomalyco/opencode/pull/62949
    在 Console 模型端点与价格表中加入 Claude Fable 5.2（Zen）：$8/$40，缓存读 $0.20、写 $10 每 1M tokens。

补充：#62930（TUI 粘贴 chip 文本在深浅色模式下取反）、#62932（shell 输出对话框新设计底部操作）、#62952（修复 `navigation.bench.ts` 的 TS7053 类型错误）、#62931（perf 基准升级 strobe 0.26.0，更严格的参数校验）。

## 5. 功能需求趋势

- **免费层与订阅计费体验**：#59387（免费额度）、#59861（成本显示）、#23153（加密支付）共同指向额度、成本可见性与支付方式的组合需求。
- **上下文与 token 成本控制**：#43250 暴露 `keep.tokens` 语义与实际行为脱节，压缩/摘要策略的确定性成为关注点。
- **多模型兼容与 prefill 支持**：#62641、#61695 显示 agent 运行时在不同模型（Claude Opus 5.5 等）约束下的适配问题，以及新模型接入（#62949）。
- **IDE/编辑器与桌面体验**：#61704（PowerShell 扫描器拒绝含 em/en dash 与弯引号的命令）、#62918（Dock 收藏后实例不合并）、#54985（DOCX 预览 CJK 字体）、#62934（Android 局域网权限）。
- **Provider 扩展性**：#59603 反映 v2.2.0 后自定义 provider 入口消失，社区对自定义接入有持续需求。
- **性能与大规模仓库**：#62948（git 轮询）、#62952/#62931（perf 基准维护）体现对大型仓库和非交互路径性能的投入。

## 6. 开发者关注点

- **可靠性高于新功能**：配置热重载无 last-good 回退（#62872）、重试上限硬编码（#58128）、Code Mode 全面返回 null（#62923）三类问题都会让正在进行的会话直接失败，是开发者最不能容忍的。
- **跨平台细节摩擦**：Windows 多用户端口冲突（#62749）、Android 权限缺失（#62934）、PowerShell 字符规范化（#61704）、Linux Dock 集成（#62918）显示平台差异仍在持续消耗用户耐心。
- **长会话的数据完整性**：历史回放截断（#61189）、消息排序错乱导致 Rewind 丢记录（#57581），涉及会话数据可信度。
- **配置与账户管理**：#18654 指出 Zen 无法修改或移除邮箱，属于账户基础能力缺口。
- **可观测性**：订阅制下"$0 成本即权威"的规则让用户失去成本感知（#59861），呼吁为不报成本的 provider 提供估算选项。

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报 · 2026-11-09

## 今日速览

今日无新版本发布，但社区活动密集：Issues 与 PR 合计更新 68 条，围绕 pi-durable 资源生命周期、Windows PowerShell 5.1 误报错误、MCP 连接与鉴权、codemode 输出等问题的修复集中落地。多数问题已转为 CLOSED（含 no-action 标记），显示维护者对 1.5.x 稳定性问题的响应较快。

## 版本发布

过去 24 小时内无新 Release。

## 社区热点 Issues（10 个）

1. **#11869 [OPEN][prio:p0] 1.5.0 新 `StringEnum` 破坏编译期类型** — 1.5.0 的 `StringEnum` 不再基于 typebox，导致 `registerTool` 派生的参数静态类型失效，属 P0 级类型破坏，赞数 3。链接：https://github.com/earendil-works/pi/issues/11869
2. **#3200 [OPEN] 扩展 `prompt` RPC 支持视频/音频** — 在现有 `images` 之外纳入 video/audio 内容，是本日评论最多（12）、点赞最高（8）的 Issue，反映多模态输入诉求。链接：https://github.com/earendil-works/pi/issues/3200
3. **#9216 [OPEN] Ollama qwen3.8:27b 流式 `terminated` 错误（0.84.x→0.85.x 回归）+ 自动压缩不再重触发** — 本地模型 + 重工具场景的稳定性回归，影响 agentic 长会话。链接：https://github.com/earendil-works/pi/issues/9216
4. **#11026 [OPEN] pi-durable：永久删除会话** — 提出 `harness.deleteConversation(id, ctx)`，运行中先拒绝/中止再清理条目，涉及存储层数据管理能力。链接：https://github.com/earendil-works/pi/issues/11026
5. **#11676 [OPEN][inprogress] `Harness.close()` 未释放 pi-ai 会话资源** — 关闭后仍残留 WebSocket 及 5 分钟空闲定时器，影响进程干净退出，已有对应 PR。链接：https://github.com/earendil-works/pi/issues/11676
6. **#8617 [OPEN] Codex 图片密集工具结果改用 file 引用** — 建议本地保存图片字节、外发以 ChatGPT `file_id` 引用替代每次重放 base64，关乎请求体积与成本。链接：https://github.com/earendil-works/pi/issues/8617
7. **#11919 [CLOSED][no-action] MCP 重连在无法连接的服务器上阻塞 2–4 分钟** — 远程 OAuth MCP 服务器（Google Workspace）场景下顺序重连所有服务器，其中一个 re-auth 会触发全部重新握手，移动端/桌面端均受影响。链接：https://github.com/earendil-works/pi/issues/11919
8. **#11918 [CLOSED][no-action] MCP 工具返回空结果** — 鉴权有效但 sign-in 后会话/鉴权头未携带，导致工具调用空返回。链接：https://github.com/earendil-works/pi/issues/11918
9. **#11944 [CLOSED] install.ps1 在 npm 写 stderr 时中止** — Windows PowerShell 5.1 下单个 `npm warn` 即令安装器在动作菜单前中断，已有配套修复与 changelog。链接：https://github.com/earendil-works/pi/issues/11944
10. **#8842 [CLOSED] PowerShell 工具误判 stderr 进度为失败** — PS 5.1 的 NativeCommandError 会把子进程正常退出（0）判为失败，影响 Windows 上的构建/推送等操作。链接：https://github.com/earendil-works/pi/issues/8842

补充关注：#11939（pi-durable 只读查看器在 open 时仍有 JSONL 恢复写入）、#11892（pi-durable 1.5.0 任务卡在 waiting/completing）。

## 重要 PR 进展（10 个）

1. **#11961 [OPEN] 修复 durable：harness 关闭时清理 provider 资源** — 活动任务结束后释放进程内 pi-ai 资源，使进程可干净退出；对应 #11676。链接：https://github.com/earendil-works/pi/pull/11961
2. **#11964 [CLOSED] 修复 coding-agent：Windows PowerShell 5.1 报告原生退出码** — 修正重定向 stderr 时的误判失败，Fixes #8842。链接：https://github.com/earendil-works/pi/pull/11964
3. **#11952 [CLOSED] 修复 coding-agent：`bash` 单独串行执行，其余调用并行** — 解决同一消息中 `bash` 与 `read` 并行导致读到尚未写出的构建日志/输出文件。链接：https://github.com/earendil-works/pi/pull/11952
4. **#10969 [CLOSED] 修复 coding-agent：复用未变更的 codemode 高亮** — 行更新（结果进度、计时、展开/折叠）不再整段重新高亮，属性能优化。链接：https://github.com/earendil-works/pi/pull/10969
5. **#11945 [CLOSED] 修复 codemode：正确输出 NaN / Infinity** — 修正 `console.*` 与抛出值显示为 `null` 的问题，避免模型基于错误值推理。链接：https://github.com/earendil-works/pi/pull/11945
6. **#11957 [OPEN] 修复 coding-agent：在 tool_search 结果中报告已声明工具** — 修复查询已激活工具（如 direct MCP 工具）时返回「No matching tools found」。链接：https://github.com/earendil-works/pi/pull/11957
7. **#11949 [CLOSED] 修复 ai：保留 Azure OpenAI 模型长上下文价格档** — 重建 cost 时丢失 272K 以上输入的长上下文费率。链接：https://github.com/earendil-works/pi/pull/11949
8. **#11947 [CLOSED] 修复 tui：退格后重编号保留短粘贴标记** — 修正 `[paste #2]` 等无后缀标记被破坏的问题。链接：https://github.com/earendil-works/pi/pull/11947
9. **#11962 [CLOSED] 文档：Windows 安装器 stderr 修复的 changelog** — 与 pi.dev#188 一同合并，关闭 #11944。链接：https://github.com/earendil-works/pi/pull/11962
10. **#11960 [OPEN] / #11958 [OPEN] 文档：修订 llama serve 命令与统一入口** — 简化启动说明并推广 `llama` 统一入口（`llama --version` 验证安装）。链接：https://github.com/earendil-works/pi/pull/11960 、https://github.com/earendil-works/pi/pull/11958

## 功能需求趋势

- **多模态输入**：#3200 希望在 `prompt` RPC 中原生支持视频/音频，与现有图片支持对齐。
- **会话与存储治理**：pi-durable 方向需求集中，包括永久删除会话（#11026）、只读查看器的写入语义（#11939）、任务状态机可靠性（#11892）。
- **MCP 生态成熟化**：鉴权会话传递（#11918）、重连策略（#11919）、工具暴露粒度（#11526）、tool_search 覆盖已声明工具（#11957）等，显示 MCP 从可用走向可控。
- **成本与请求效率**：Codex 图片改用文件引用（#8617）、Azure 长上下文计价修正（#11949），指向 token/请求体积优化。
- **Windows 平台体验**：安装器与 PowerShell 工具的多处 stderr 处理问题，是跨平台一致性的高频来源。

## 开发者关注点

1. **类型稳定性**：#11869 的 P0 类型破坏是当日最需优先关注的问题，直接影响工具注册的编译期类型推导。
2. **Windows PowerShell 5.1 兼容**：同一根因（stderr 重定向触发 NativeCommandError）在安装器（#11944）与工具执行（#8842）双双出现，已由 #11964、#11962 修复。
3. **资源泄漏与进程退出**：`Harness.close()` 未释放 WebSocket 及定时器（#11676 / PR #11961），以及只读查看器仍产生恢复写入（#11939），是 pi-durable 的主要痛点。
4. **本地模型流式稳定性**：#9216 的回归与自动压缩失效，影响本地 Ollama 重工具会话的持续可用性。
5. **工具调用语义**：#11952 指出并行调用中 `bash` 与其他调用的顺序伪影，提示并发模型需对副作用型工具做串行化处理。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报（2026-11-09）

## 1. 今日速览

今日发布了 CLI v0.27.1，并同步推出 Desktop v0.27.1、SDK TypeScript v0.1.31（捆绑 CLI 0.27.1）及补发版 SDK TypeScript v0.1.29（捆绑 CLI 0.26.9）。社区焦点集中在 CI 稳定性与托管代理（Managed Agent）质量：多个 CI 失败跟踪 Issue 持续高频更新，同时 Java 侧测试编译失败（#16712）已修复关闭。GitHub 通道的 API 预算与轮询性能优化成为新的功能提案热点。

## 2. 版本发布

- **v0.27.1**（CLI）：本次仅有一项功能变更，即在启动上下文中显示当前活动的 shell（#16491，@2Sin）。无已知破坏性变更。
- **desktop-v0.27.1**：文档补充了 OpenAI 兼容提供商下的 Wally（#16529），并包含一项 core 修复。
- **sdk-typescript-v0.1.31**：捆绑 CLI 0.27.1，由同一分支/ref 源码构建。
- **sdk-typescript-v0.1.29**：补发版本，对应此前已发布至 npm 的 0.1.29（原发布工作流在 npm 发布成功后的发布分支推送步骤失败，见 #16490），捆绑 CLI 0.26.9。

## 3. 社区热点 Issues

1. **#14724 [OPEN] Main CI 失败：Managed Agent gate 未识别到测试**（282 评论）
   长期存在的 CI 机器人跟踪 Issue，自 10-19 创建至今持续更新，讨论量远超其他条目，反映 Managed Agent 门禁测试识别机制反复失效。链接：QwenLM/qwen-code Issue #14724

2. **#13078 [OPEN] 每日依赖 CVE 审计失败**（46 评论）
   定时依赖 CVE 审计任务失败，疑似出现新的高危漏洞，属安全相关高频关注点。链接：QwenLM/qwen-code Issue #13078

3. **#16672 [OPEN] Main CI 失败：Managed Agent gate — HostedExtensionsIT 多项测试**（35 评论）
   涉及 MySQL 场景下扩展持久化与 Harness 替换取消/关闭的托管进程故障测试。链接：QwenLM/qwen-code Issue #16672

4. **#16712 [CLOSED] Java 主线编译失败：SurfaceAdmissionAcceptanceTest 重复 case 标签**（P1）
   主线对所有 PR 的 Java lane 造成阻塞（测试编译阶段即失败，无 Java 测试可运行），现已关闭，是今日重要的 CI 阻塞事件。链接：QwenLM/qwen-code Issue #16712

5. **#11680 [OPEN] Main CI 失败：E2E Tests 未识别到测试**（24 评论）
   E2E 工作流在测试结果上报前即失败，按 commit 逐条跟踪。链接：QwenLM/qwen-code Issue #11680

6. **#16546 [OPEN] 功能请求：在 WebShell 中为托管会话暴露侧边栏面板能力**（8 评论，P2）
   附带能力对照表（Skills 列表、control-plane、WebShell provider 槽位等），是托管代理前端能力补齐的关键讨论。链接：QwenLM/qwen-code Issue #16546

7. **#16690 [CLOSED] GitHub 通道：暴露 API 预算并保护提及通道**（5 评论，P2）
   提案让通道感知剩余 API 预算，并在预算紧张时保护交互式处理；今日创建即关闭，反映该方向的快速推进。链接：QwenLM/qwen-code Issue #16690

8. **#15327 [OPEN] 追踪（core）：在 experimental.unifiedAgentLoop 下让所有界面共用单一 agent loop**（4 评论，P1）
   统一 agent loop 的路线图级追踪项，涉及核心架构收敛。链接：QwenLM/qwen-code Issue #15327

9. **#16766 [OPEN] Desktop（macOS WKWebView）中 Generated UI 卡片卡在加载态**（3 评论，P2）
   同一卡片在 Chromium 中正常渲染，指向 Tauri WKWebView 的平台兼容问题。链接：QwenLM/qwen-code Issue #16766

10. **#16140 [OPEN] core：shell 重定向提取器漏掉 N>（fd≥3）、>| 及无空格 cd>file 形式**（3 评论，P1，安全）
    导致 Write/Edit 拒绝规则无法对这些形式生效，属权限安全类问题。链接：QwenLM/qwen-code Issue #16140

## 4. 重要 PR 进展

1. **#16685 [OPEN] fix(acp)：在 ACP 轮次上调度托管 skill 审查**
   让 `qwen serve`、daemon 及 ACP 桥接 CLI 与交互式 CLI 一样触发托管 skill 审查，避免触发状态累积未读。链接：QwenLM/qwen-code PR #16685

2. **#16758 [OPEN] feat(managed-agent)：新增私有 BTW 与 session recap**
   为托管代理加入持久的、按 actor 隔离的 BTW 后续追问，以及手动或可选的自动会话回顾，覆盖 Runtime 已被回收的 ACTIVE 会话。链接：QwenLM/qwen-code PR #16758

3. **#16768 [OPEN] fix(cli)：不再把已结算的闭合工具结果尾部误报为中断**
   修复 `end_turn` 结算于闭合工具对（如末尾 `todo_write` 无模型文本）时恢复尾部分类器的误判。链接：QwenLM/qwen-code PR #16768

4. **#16686 [OPEN] feat(headless)：在终端错误结果中保留 provider HTTP 状态**
   无头运行因 provider 失败结束时，终端结果信封新增可选 `status` 字段携带上游状态码。链接：QwenLM/qwen-code PR #16686

5. **#16725 [OPEN] fix(core)：在命令实际运行的目录中归属 `gh pr create`**
   当 agent 在 worktree 中通过 shell 内切换目录创建 PR 时，会话现在能自动完成 PR 绑定。链接：QwenLM/qwen-code PR #16725

6. **#16738 [CLOSED] fix(subscription)：恢复模型切换并对齐会话恢复**
   恢复订阅登出后的 CLI 模型切换（含无需重启即可发送首条消息），并对齐订阅默认持久化与 Desktop 运行时刷新。链接：QwenLM/qwen-code PR #16738

7. **#16739 [OPEN] perf(memory)：移除捆绑的 auto-memory 参考并保留常驻策略**
   主会话仅保留 #16303 引入的常驻 auto-memory 策略，去掉捆绑参考及其加载指针。链接：QwenLM/qwen-code PR #16739

8. **#16598 [OPEN] fix(core)：避免微压缩清理持久化输出占位**
   微压缩的清理分支不再把已溢出的 `<persisted-output>` 占位当作普通工具结果替换掉整个 `response.output`。链接：QwenLM/qwen-code PR #16598

9. **#16736 [OPEN] feat(web-shell)：通过浏览器内二维码登录配置微信通道**
   微信成为 Web Shell 中可配置的通道，包含扫码登录、标准通道编辑器与账户面板。链接：QwenLM/qwen-code PR #16736

10. **#11854 [OPEN] feat：新增混合代码模式**
    引入与 Codex 对齐的 `tools.mode` 枚举（`direct`、`code_mode`、`code_mode_only`），在保留普通工具直接调用的同时暴露隔离的 `exec` JavaScript 工具。链接：QwenLM/qwen-code PR #11854

## 5. 功能需求趋势

- **GitHub 通道性能与预算管理**：#16690、#16691（条件请求轮询）、#16692（GraphQL 批量查询 PR 状态）三连提案，均由同一作者在今日提交，指向降低 API 消耗、提升轮询效率。
- **托管代理（Managed Agent）能力扩展**：#16546 的 WebShell 侧边栏能力、#16758 的 BTW 与 session recap，以及多个 Java 侧测试与重构 PR，显示该方向是当前最活跃的开发主线。
- **渠道集成**：微信通道（#16736）加入 Web Shell 的通道平台体系，延续多渠道配置化思路。
- **核心架构统一**：#15327 的 unifiedAgentLoop 追踪，以及混合代码模式（#11854），指向统一 agent loop 与工具调用模式的演进。
- **性能与上下文管理**：auto-memory 精简（#16739）与微压缩修复（#16598）反映对内存占用与上下文压缩质量的持续投入。

## 6. 开发者关注点

- **CI 稳定性是最大痛点**：多条高评论 Issue 均为 CI 机器人自动创建的失败跟踪（Managed Agent gate、E2E、Qwen Code CI、依赖 CVE 审计），部分自 9 月/10 月持续至今仍未关闭；#16712 显示 Java lane 的测试编译失败会阻塞所有 PR，影响面广。
- **权限与 shell 解析安全**：非 UTF-8 ANSI-C 字节折叠为 U+FFFD 导致 shell 路径守卫失效（#16757），以及重定向形式漏检使 Write/Edit 拒绝规则不生效（#16140），均为 P1/P2 安全类问题，值得优先关注。
- **平台兼容性问题**：Desktop 在 macOS WKWebView 下 Generated UI 卡片无法渲染（#16766），与 Chromium 行为不一致。
- **长期未决的 CLI/UI 缺陷**：#5142（虚拟化历史模式下历史不可见）自 6 月创建至今仍有讨论。
- **发布流程可靠性**：SDK TypeScript 0.1.29 因工作流在 npm 发布后推送分支失败而需手工补发，暴露发布流水线的健壮性缺口。

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI 社区动态日报（2026-11-09）

> 数据来源：github.com/Hmbown/DeepSeek-TUI。过去 24 小时无新 Release；Issues 更新 7 条，PRs 更新 7 条，以下按实际材料逐条呈现，未在材料中出现的条目不做扩充。

## 今日速览

v0.10.3 的发布验收仍在收尾：#7203（Windows 上 ChatGPT 认证校验失败）与 #6992（ACP 沙箱配置回归）被标注为 release-blocker / 发布验收项，macOS 侧已修复、Windows 与客户端侧待闭合。与此同时，外部贡献者贡献了一批小而精准的 TUI 与 engine 修复，涉及中文/日文文本后的 @ 提及识别、fuzzy edit 截断行、`/load` 后上下文计量器不刷新等交互体验问题。

## 版本发布

过去 24 小时无新版本发布。

## 社区热点 Issues

1. **#7203 [release-blocker, v0.10.3] Windows 上 ChatGPT 认证校验失败**
   https://github.com/codewhale-hq/Codewhale/issues/7203
   浏览器登录成功后报 `ChatGPT token signature or identity claims failed verification`，`auth status --provider openai-codex` 后续仍异常。属发布阻断项，直接影响 Windows 用户使用 OpenAI 系 provider，5 条评论说明讨论活跃。

2. **#6992 [bug] 0.10.1 起的 ACP 回归：sandbox_mode/ask 配置被忽略**
   https://github.com/codewhale-hq/Codewhale/issues/6992
   Paseo ACP 会话被强制沙箱化并需审批，违反用户配置意图。摘要显示 posture 源已修复、真实客户端平台仍开放，是 0.10.3 验收的关键缺口。

3. **#6970 [bug, os:windows] `/undo` 命令引发严重问题**
   https://github.com/codewhale-hq/Codewhale/issues/6970
   发布验收记录称 macOS 旅程已修复，最终 Windows 验收获批仍未完成。`/undo` 涉及范围回滚与调用 UUID 绑定，属状态一致性高风险区域。

4. **#7252 [area:tui, area:mcp, area:install] Anthropic provider 在 tool_search 注入 `web.run` 后返回 400**
   https://github.com/codewhale-hq/Codewhale/issues/7252
   工具名含点号（`tools.N.custom.name`）触发 Anthropic 校验失败，问题跨 TUI/MCP/state 多个区域；报告者已确认与 #4729 不重复。对多 provider 兼容性有直接影响。

5. **#7091 [enhancement, area:install] 让卸载在各安装方式下完整且可验证**
   https://github.com/codewhale-hq/Codewhale/issues/7091
   由项目维护者 Hmbown 提出，覆盖 archive、npm、NSIS、WinGet、macOS 等多条分发渠道。目前生命周期源侧覆盖已落地，分发门槛仍未闭合，体现安装/卸载可验证性的工程债。

6. **#7194 [needs-triage] 应用侧复用审计产出的上游候选（推理档位、provider 事实、产物生产器、MCP keys）**
   https://github.com/codewhale-hq/Codewhale/issues/7194
   来自嵌入式应用 Pinvou 的「重复造轮子」审计，梳理出可回流 `deepseek-tui`（= `codewhale-tui`）的能力项。属生态集成的信号性议题，值得关注是否被采纳。

7. **#7250 [enhancement, area:core] 为实验性搜索提出「带验证的候选评估」工作流**
   https://github.com/codewhale-hq/Codewhale/issues/7250
   现 `operate_best_of_n.workflow.js` 支持 `strategy: "search"`、独立 worktree 与只读 reviewer，但结果仍停留在生成阶段。提议补充评审/验证环节（review-only），指向工作流质量的下一步。

> 说明：过去 24 小时共 7 条 Issues 更新，以上为全部条目，未凑足 10 条以避免虚构。

## 重要 PR 进展

1. **#7257 [OPEN] fix(engine)：fuzzy 匹配回退时保留行内其余内容**
   https://github.com/codewhale-hq/Codewhale/pull/7257
   `oldText` 经归一化（如直引号 vs 弯引号）才匹配时，整行会被规范化文本重建、导致内容丢失。外部贡献者 Lstarsky0 提交。

2. **#7258 [OPEN] fix(tui)：识别中文/日文文本之后的 @ 提及**
   https://github.com/codewhale-hq/Codewhale/pull/7258
   原先 `@` 只在空白、ASCII 括号或引号后触发，中日文无空格导致紧跟文字的提及被忽略。对中日文用户是直接可感的交互修复。

3. **#7256 [OPEN] fix(tui)：转写被替换时清除逐消息 token 估算**
   https://github.com/codewhale-hq/Codewhale/pull/7256
   `/load` 较小会话后，footer 上下文计量器仍显示旧会话体量且下一轮不自纠。属状态残留类 bug。

4. **#7251 [CLOSED] feat(transport)：允许为模型 HTTP 客户端配置可选 host policy**
   https://github.com/codewhale-hq/Codewhale/pull/7251
   为嵌入方提供 opt-in 的内存态 `ModelHttpPolicy`，可拒绝构造或返回定制 builder，覆盖 primary、model-list 与 HTTP 路径。

5. **#7253 [CLOSED] fix(engine)：不再把 provider 超时报告为 "after 0ns"**
   https://github.com/codewhale-hq/Codewhale/pull/7253
   `LlmError::from_reqwest` 因 reqwest 错误不含耗时，将超时映射为 `Timeout(Duration::ZERO)`，导致所有传输层超时都显示 0ns，误导排障。

6. **#7255 [CLOSED] fix(tui)：发送失败返回时保留用户草稿**
   https://github.com/codewhale-hq/Codewhale/pull/7255
   回车后 composer 即清空、后台发送；失败回填消息会覆盖用户已输入的新内容。修复草稿被吞的体验问题。

7. **#7254 [CLOSED] fix(engine)：限制嵌套花括号展开与重复 globstar**
   https://github.com/codewhale-hq/Codewhale/pull/7254
   修复 #7215 合入后在 `matches_glob` 引入的两个问题：64 种组合上限只数到首个 `}`，嵌套组隐藏逗号。

> 说明：过去 24 小时共 7 条 PR 更新，以上为全部条目。

## 功能需求趋势

- **可验证的发布与安装质量**：#7091、#7203、#6992、#6970 都挂在「发布验收」主线，社区（尤其维护者）关注跨平台、跨安装方式的端到端可验证性。
- **多 provider / MCP 兼容性**：#7252 点号工具名触发 Anthropic 400；#7194 提到 MCP keys 与 provider 事实回流，说明 provider 抽象与工具命名规范是持续摩擦点。
- **工作流深度**：#7250 希望从「候选生成」走向「带验证的候选评估」，反映对结果质量而非仅吞吐的诉求。
- **嵌入与生态集成**：#7194（Pinvou 应用侧复用）、#7251（embedder 的 HTTP policy）指向把引擎作为库嵌入的需求正在增长。

## 开发者关注点

- **状态一致性类 bug 反复出现**：`/undo` 回滚、`/load` 后计量器不刷新、ACP 沙箱配置被忽略，均属状态未正确重置或未尊重配置。
- **跨平台差异仍是主要风险**：Windows 在 #7203、#6970 中均为「待闭合」的一侧，macOS 先被修复。
- **可观测性表述需准确**：`after 0ns` 超时信息直接伤害排障体验（#7253）。
- **输入体验细节被高频反馈**：中日文 @ 提及、发送失败回填覆盖草稿、fuzzy edit 截断行，均为“小改动、高感知”的修复。
- **外部贡献集中且同源**：Lstarsky0 独占 #7254–#7258 五条 PR，外部贡献活跃但 reviewers 负载可能集中。

</details>

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar-personal) 自动生成。*