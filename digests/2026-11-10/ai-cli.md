# AI CLI 工具社区动态日报 2026-11-10

> 生成时间: 2026-11-10 17:53 UTC | 覆盖工具: 9 个

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

# AI CLI 工具生态横向对比分析（2026-11-10）

## 1. 生态全景

当前 AI CLI 工具已从"能否用"进入"能否被信任"的阶段：今日几乎每家工具的热点都指向**长任务可靠性、权限与安全边界、计费透明度**这三类系统性问题，而非单点新功能。新模型（Claude Fable 5.2）在一天内被 Claude Code、Copilot CLI、Pi 等多个工具同步接入，模型供给已高度商品化，工具间的竞争正在转向**运行时治理（多 agent 协作、会话持久化、沙箱权限）与跨平台体验**。同时多家工具出现明显回归（OpenCode 2.2.6、Copilot 1.0.108、Claude Code 桌面端打包），说明快速迭代节奏与质量门禁之间存在紧张关系。

## 2. 各工具活跃度对比

| 工具 | Release | Issue 热度概况 | PR 进展 | 主要聚焦 |
|---|---|---|---|---|
| **Claude Code** | v2.1.321 / v2.1.322（Fable 5.2 默认模型、Vertex 快速模式） | 热点 Issue 10 条；#69044 达 133 评论；#89673 98 👍 | 过去 24h 仅 1 条（#74722 已关闭） | 新模型配套、用量计量、桌面端稳定性 |
| **OpenAI Codex** | 3 个 Rust alpha（含 1 个桌面热修复回合并） | #51524 86 评论居首，Windows 问题密集 | ~13 条，多为 bot 内部打磨 | Windows 平台、Computer Use、会话状态 |
| **Gemini CLI** | 无 | Agent 子系统问题为主，#22323（P1）13 评论 | ~10 条，多项 P1 安全修复 | 子 agent 可靠性 + 安全护栏 |
| **GitHub Copilot CLI** | v1.0.109 系列（沙箱 CIDR、Fable 5.2） | MCP 问题集中；#4438 17 评论 / 20 👍；多条历史 Issue 今日关闭 | **0 条** | MCP 生命周期、沙箱权限 |
| **OpenCode** | v2.2.7（GitHub Copilot Auto 路由） | #59387 免费层汇总帖 344 评论；计费类多条 | ~15 条，含计费修复主 PR #59803 | Copilot 计费准确性、2.2.6 回归 |
| **Pi** | v1.5.2 / v1.5.1（会话分支迁移、`pi auth` 命令） | #7547 Windows 议题 96 评论 | ~10 条，多为已关闭/存储迁移 | 缓存预热、多 provider 兼容、Windows |
| **Qwen Code** | 无 | **#14724 CI 失败单 287 评论**（机器人刷屏） | ~11 条，Managed Agent/Channel 密集 | CI 治理、统一 Agent Loop、P1 挂起缺陷 |
| **DeepSeek TUI** | 无（0.10.3 发布候选） | 7 条发布跟踪 Issue 集中开出；CJK 缺陷修复 | ~10 条，多为 CJK/健壮性修复 | 0.10.3 收尾、CJK 支持、ACP 双向集成 |
| **Kimi Code CLI** | 无 | **过去 24h 无活动** | 无 | — |

> 说明：Issue/PR 数均为摘要中列举的"热点/重要"条目数，非全量；Qwen Code 的高评论数主要来自机器人自动评论，不等同于真实社区热度。

## 3. 共同关注的功能方向

**① Agent 可靠性 —— "沉默的失败"是跨工具共识痛点**
- Gemini CLI：#22323 子 agent 达 MAX_TURNS 却上报 GOAL 成功；#21409 generalist agent 永久挂死。
- Codex：#50771 模型承诺继续却提前结束；#34026 会话状态卡死（自 7 月起未决）；#31659 压缩丢失 goal。
- Pi：#10956 缓存预热静默失效、#10812 默认模型被静默回退。
- OpenCode：#62923 Code Mode 返回 null、#62636 `run` 挂起不退出。
- **一致诉求：静默失败需显式报错，长任务状态需可观测、可恢复。**

**② 权限与安全边界精细化**
- Gemini CLI：#30171 修 `rm -rf` 变体漏检、#30095 Windows Git diff 权限绕过、#22672 要求 agent 劝阻破坏性命令。
- Copilot CLI：沙箱 CIDR 规则（v1.0.109）、#5388 凭据掩码在 GHE 租户失效。
- Claude Code：#98287 无人值守定时任务被权限分类器误拒。
- DeepSeek TUI：#7283 统一权限盘（Shift+Tab）默认 Accept Edits。
- OpenCode：PR #63139 企业级 `remote.use` 关闭远程访问。
- **一致诉求：沙箱行为可预期、无人值守场景有明确的授权放行机制。**

**③ 计费/用量透明**
- Claude Code：#108734（Ultra 两天 29%）、#108534（Team 计量加速）。
- OpenCode：Copilot 成本低估约 6 倍（#59671）、#41969 要求公开 Go 套餐模型检查点，修复 PR #59803。
- **一致诉求：token 与额度消耗需可解释。**

**④ 跨平台（尤其 Windows）稳定性**
Claude Code、Codex、Pi、Gemini CLI、Copilot CLI、Qwen Code 均出现 Windows 相关缺陷，覆盖路径大小写、设备身份、键盘输入、浏览器绑定、git-bash 检测——这是**全生态共性短板**。

**⑤ 多 Agent / 会话协作治理**
Claude Code（#94000 跨会话上限、#91910 钩子载荷）、Qwen Code（#15327 统一 Agent Loop、#15659 teammate 活动）、OpenCode（PR #63143 垂直会话侧栏）——对多 agent 可见性与控制力的需求在同步上升。

## 4. 差异化定位分析

| 工具 | 功能侧重 | 技术路线特征 | 目标用户 |
|---|---|---|---|
| **Claude Code** | 模型能力领先、桌面+Chrome 集成、Hooks 自动化 | 自有模型深度捆绑，模型目录与客户端版本强耦合 | 追求前沿模型能力的专业开发者/团队 |
| **Codex** | Computer Use / 浏览器自动化、Cloud+CLI+IDE 三端 | Rust 实现，alpha 渠道高频推送，内部打磨为主 | OpenAI 生态用户、自动化重度场景 |
| **Gemini CLI** | Agent 子系统（子 agent、Browser Agent）、安全护栏 | 开源（OSS）、npm 发布工程、AST 结构化方向探索 | 开源贡献者、Google 生态 |
| **Copilot CLI** | 沙箱与企业网络、MCP 生态、与 GitHub 工作流集成 | 企业/代理认证适配优先，模型多源接入（Fable 5.2） | 企业团队、GitHub 重度用户 |
| **OpenCode** | 多 provider 计费、Desktop/Web 体验、免费层 | 聚合第三方 provider，计费准确性为核心工程难题 | 多模型/成本敏感用户、免费层用户 |
| **Pi** | 多 provider 兼容、缓存优化、扩展生态 | P2 后端存储整合（Chord）、llama.cpp 本地推理 | 本地/自托管、多模型折腾型用户 |
| **Qwen Code** | Managed Agent、Channel 投递、Web Shell | 多 surface 统一运行时，CI 工程化重投入 | Qwen 生态、需要后台自动化者 |
| **DeepSeek TUI** | 中日韩国际化、ACP 编辑器双向集成、TUI 健壮性 | Rust TUI，发布门槛严格（Windows 验收） | CJK 用户、Zed 等 ACP 编辑器用户 |
| **Kimi Code CLI** | 无明显动态 | — | — |

**定位小结**：Claude Code/Codex 走"模型+产品一体"；Gemini CLI/DeepSeek TUI 走开源+协议（ACP）开放；Copilot CLI 锚定企业工作流；OpenCode/Pi 走多 provider 聚合，价值主张在"中立与兼容"，代价是计费与 provider 差异成为主要缺陷来源。

## 5. 社区热度与成熟度

**社区热度（真实讨论量）**
- **最高**：Claude Code（#69044 133 评论、98 👍 的输入需求）、OpenCode（免费层 344 评论，但集中于单帖）、Pi（Windows 议题 96 评论）。
- **高**：Codex（#51524 86 评论）、Qwen Code（数字最高但为机器人噪音，需打折看待）、Copilot CLI（MCP 议题 17–20 评论规模）。
- **中等/内敛**：Gemini CLI（评论数低但 P1 密度高，质量信号强）、DeepSeek TUI（多为维护者主导的发布跟踪）。
- **静默**：Kimi Code CLI 过去 24h 零活动，需关注其项目节奏。

**成熟度与迭代阶段**
- **快速迭代/回归频发**：OpenCode（2.2.6 引入三类回归仍未清）、Copilot CLI（1.0.108 namespace 丢失、1.0.98 键盘回归）、Claude Code（桌面捆绑版本滞后于模型发布）。
- **工程治理进行中**：Qwen Code 的 CI 噪音已影响信噪比，是成熟度瓶颈的典型信号；DeepSeek TUI 通过严格 Windows 发布门槛（#7281）展现较强的发布纪律。
- **高活跃但趋向打磨**：Codex 当日 PR 以 bot 内部改进为主，主功能迭代让位于平台稳定性修复。

## 6. 值得关注的趋势信号

1. **模型商品化，工具价值转向"运行时"**：Claude Fable 5.2 同日被至少 3 家工具接入，模型不再是差异化壁垒；差异化落在会话持久化、权限模型、多 agent 治理上。对新模型上线的配套同步（如 Claude Code #108640 的 200K 缩水）成为新的质量风险点。

2. **"静默失败"成为质量分水岭**：缓存不预热、任务提前结束、参数损坏被接受、默认模型被无提示替换——多家社区已不再容忍无声错误。**对开发者：评估工具时应优先测试长任务中途中断与恢复路径，而非演示时的单轮效果。**

3. **计费可信度可直接影响选型**：OpenCode 的 Copilot 成本低估 6 倍、Claude Code 的限额加速消耗，都是"可感知但不可解释"的问题。**采用聚合型工具前，应对账单一周实测。**

4. **Windows 是全生态结构性短板**：Codex #34026 已开四个月、DeepSeek `/undo` 自 10 月起未闭环。**Windows 团队选型时需将平台缺陷积压作为独立评估项。**

5. **协议标准化正在成形**：DeepSeek TUI 把 ACP 双向集成（运行外部 agent CLI / 编辑器驱动自身）作为 0.10.3 优先级，Copilot CLI 与多家围绕 MCP 生命周期反复打磨。**MCP/ACP 互操作可能成为下一阶段工具粘性的关键，值得关注谁先提供稳定的双向桥接。**

6. **安全护栏从"事后修"进入"架构层"**：Gemini CLI 用可复用的 Git 安全 helper 替代散落校验、Qwen Code #16604 主张以 tree-sitter-bash 取代手写 shell 模型——**提示手写正则式安全判定已到瓶颈，底层解析器投入是必然方向。**

7. **企业/无人值守场景是需求凹地**：Copilot CLI 的 NTLM 回退、GHE 数据驻留租户、自定义 MCP registry，Claude Code 的定时任务授权，OpenCode 的 `remote.use`——**面向企业网络与自动化部署的适配仍普遍不成熟，是有明确付费意愿的空白区。**

---

*本报告仅基于所提供的 2026-11-10 各工具社区摘要，Issue/PR 计数为摘要列举条目，非全量统计；评论数含机器人自动评论（尤以 Qwen Code 显著），解读时请区分真实社区热度与自动化噪音。*

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告（数据截止 2026-11-10）

> 数据说明：PR 列表的评论数字段均为 `undefined`，无法据此排序；本报告按 Issue 评论数/👍 及 PR 摘要描述的问题影响面组织。所有 PR 状态均为 OPEN，且未提供合并信息。

## 1. 热门 Skills 排行（按社区关注度）

1. **skill-creator 修复系列**（触发评测与打包）
   PR #1298（隔离触发评测、处理 Windows 与运行时失败）、#1681（直接执行 package_skill.py 失败）、#1997（YAML frontmatter 标量解析错误）
   讨论热点：`run_eval.py` 触发率误报（对应 Issue #556/#1352），skill-creator 是生态“造技能”的基础设施，任何评测失真都会放大整个生态的质量问题。
   状态：全部 OPEN
   https://github.com/anthropics/skills/pull/1298
   https://github.com/anthropics/skills/pull/1681
   https://github.com/anthropics/skills/pull/1997

2. **mcp-builder（mcp>=2 兼容）** PR #1742
   功能：适配 `streamable_http_client` 重命名及自定义 HTTP header 新配置方式。
   热点：MCP 生态版本升级带来的破坏性变更，直接影响构建类 Skill 可用性。
   状态：OPEN（Fixes #1668）
   https://github.com/anthropics/skills/pull/1742

3. **document-typography** PR #514
   功能：文档排版质量控制——孤字换行、孤段(章节标题卡页底)、编号错位。
   热点：AI 生成文档的“最后一公里”排版问题，覆盖面广。
   状态：OPEN（创建于 2026-03-04，更新时间较早）
   https://github.com/anthropics/skills/pull/514

4. **webapp-testing 安全与元素识别修复** PR #1980 / #1976
   功能：移除 `with_server.py` 中的 `shell=True`（命令注入风险）；修正 `element_discovery.py` 对 textarea/select 的误报。
   热点：Agent 脚本的安全边界与测试准确性。
   状态：OPEN
   https://github.com/anthropics/skills/pull/1980
   https://github.com/anthropics/skills/pull/1976

5. **docx / xlsx 文档处理修复** PR #1792 / #1734 / #2019
   功能：LibreOffice 超时正确报错并校验产物、检测孤立批注、解析工作表级定义名。
   热点：文档类 Skill 在真实 Office 文件上的静默失败问题。
   状态：OPEN
   https://github.com/anthropics/skills/pull/1792
   https://github.com/anthropics/skills/pull/2019

6. **pyxel（复古游戏开发）** PR #525
   功能：Python 复古游戏创作、调试、无头输入驱动运行与帧检查。
   状态：OPEN（创建于 2026-03-05，持续更新至 2026-11-01，长尾关注）
   https://github.com/anthropics/skills/pull/525

7. **notion-spec-to-implementation + quantitative-resume-auditor** PR #1245
   功能：将产品/技术规格转化为 Notion 可执行任务；简历量化审计。
   状态：OPEN
   https://github.com/anthropics/skills/pull/1245

8. **proofcore-contract-auditor** PR #1771
   功能：Solidity/Rust 智能合约静态分析，并将审计证明锚定至 TON 区块链。
   状态：OPEN
   https://github.com/anthropics/skills/pull/1771

## 2. 社区需求趋势（来自 Issues）

- **安全与信任边界**（Issue #492，46 评论，最高热度）：社区 Skill 在 `anthropic/` 命名空间下分发，存在冒充官方、越权授权的信任风险。这是当前最集中的结构性诉求。
- **Skill 评测可靠性**（Issue #556 13 评论 👍7；#1352 5 评论 👍3）：`run_eval.py` 触发率系统性失真（含并行 worker UUID 串匹配），社区对 Skill 质量控制工具本身的信任不足。
- **组织级共享与分发**（Issue #228，17 评论 👍8）：希望 Claude.ai 内直接做组织内 Skill 共享库，减少手工上传。
- **上下文与 Token 效率**（Issue #1487、#1329、#202）：`claude-api` 单次注入约 156k tokens；compact-memory 符号化记忆；skill-creator 文风“像文档而非操作指令”。
- **治理与质量流水线**（Issue #412 已关闭、#1385）：agent 治理、推理质量门禁（校准→对抗评审→交付验证）。
- **插件重复安装**（Issue #189，👍9）：document-skills 与 example-skills 内容重复占用上下文。
- **平台级诉求外溢**（Issue #1143，👍15）：修改账户邮箱等，属平台功能而非 Skill 范畴，但出现在本仓库。
- 文档类（docx/xlsx/pptx/pdf）以 bug 反馈为主（#2018、#1868），说明文档 Skill 使用面广、稳定性需求高。

## 3. 高潜力待合并 Skills

> 均为 OPEN；此处“高潜力”指修复明确问题、有对应 Issue 编号、近期活跃度高的 PR。

| PR | 内容 | 近期更新 | 为何值得关注 |
|---|---|---|---|
| #1352（关联 #1298） | skill-creator 并行评测修复 | 2026-11-08 | 社区反复报告，修复基础工具链 |
| #1980 | webapp-testing 移除 shell=True | 2026-11-01 | 安全修复，问题定义清晰 |
| #1792 | docx 超时与产物校验 | 2026-11-01 | 消除“假成功” |
| #2019 | xlsx 外部链接误判 | 2026-11-03 | Fixes #2013，改动明确 |
| #1997 | skill-creator YAML 解析 | 2026-10-19 | 影响所有 Skill 元数据 |
| #525 | pyxel 复古游戏 | 2026-11-01 | 社区长期关注的新增 Skill（非修复） |
| #2108 | README 同步说明 | 2026-11-03 | 文档澄清，影响生态预期 |

https://github.com/anthropics/skills/pull/1352（间接，Issue 链接）
https://github.com/anthropics/skills/pull/1980
https://github.com/anthropics/skills/pull/1792
https://github.com/anthropics/skills/pull/2019
https://github.com/anthropics/skills/pull/1997
https://github.com/anthropics/skills/pull/525
https://github.com/anthropics/skills/pull/2108

## 4. Skills 生态洞察

社区最集中的诉求是**“让 Skill 可信、可管、可验证”** —— 即命名空间与权限的信任边界、Skill 评测机制的可靠性、以及其在真实文件/上下文中的稳定性，而非单纯追求更多新 Skill。

---

# Claude Code 社区动态日报（2026-11-10）

## 1. 今日速览

今日发布两个版本：v2.1.321 引入新默认 Fable 模型（1M 上下文）及 `remote-control` 的 `--settings` 参数，v2.1.322 增加 Vertex 全球/美/欧区域快速模式。社区侧，新模型发布带出配套问题——桌面端捆绑的 2.1.317 缺少 `claude-fable-5-2` 目录项致上下文仅 200K；用量消耗异常偏快（Ultra/Team 多例）成为跨平台热点，Claude in Chrome 连接问题亦集中出现。

## 2. 版本发布

- **v2.1.322**：在 Vertex 的 global、us、eu 区域新增快速模式，Vertex 拒绝时回退到标准速度。
- **v2.1.321**：新增 Claude Fable 5.2（`claude-fable-5-2`），成为默认 Fable 模型——1M 上下文，$8/$40 每 Mtok，缓存读取 $0.20/Mtok；`claude remote-control` 新增 `--settings <file>`，对每个启动的会话应用设置文件，文件变更后不再新建会话（描述截断）。

## 3. 社区热点 Issues

1. **#69044 [OPEN] 长期使用错误汇总** — 用户用德语系统记录数月日常使用中的重复错误，133 条评论为近期最高，反映长期可靠性仍是核心议题。👍0
   https://github.com/anthropics/claude-code/issues/69044
2. **#89673 [OPEN] 桌面端 Enter 换行 / Ctrl+Enter 提交** — 24 评论、98 👍，社区支持度最高，直指桌面聊天输入习惯。👍98
   https://github.com/anthropics/claude-code/issues/89673
3. **#91910 [OPEN] Hooks 载荷缺口（子代理压缩/摘要调用）** — 有复现，PreCompact/PostCompact/SessionStart(compact) 缺 agent 字段，SubagentStop 指向不存在的 agent_transcript_path，影响钩子可靠性与自动化。👍7
   https://github.com/anthropics/claude-code/issues/91910
4. **#94000 [OPEN] 跨会话发送上限不可配置** — 桌面 Code 标签跨会话消息 10 次后停止，且忽略人工来源消息，多会话协作场景受阻。👍14
   https://github.com/anthropics/claude-code/issues/94000
5. **#107318 [OPEN] 桌面更新后跨账号共享 Artifacts 不可读写** — 回归问题，影响团队共享编辑流程。👍4
   https://github.com/anthropics/claude-code/issues/107318
6. **#98287 [OPEN] Cowork 定时任务权限分类器拒绝所有者授权发信** — 同一操作在有人值守会话中成功，无人值守任务被拦，且无按任务放行配置，阻碍自动化。👍1
   https://github.com/anthropics/claude-code/issues/98287
7. **#108640 [OPEN] 桌面 Code 标签运行 Fable 5.2 仅 200K 上下文** — 捆绑的 2.1.317 无 `claude-fable-5-2` 目录项，直接关联今日版本发布，属新模型上线配套缺陷。👍1
   https://github.com/anthropics/claude-code/issues/108640
8. **#108734 [OPEN] Ultra 周用量两天达 29%** — 用户称 token 量比 10 月低 2–5 倍，与 #108534（Team 计划同样偏快）呼应，用量计量准确性受关注。👍0
   https://github.com/anthropics/claude-code/issues/108734
9. **#108534 [OPEN] Team 计划用量自 10 月中加速消耗** — 本地 token 记录下降但周/5 小时限额消耗加快，疑与 #105621 相关，跨平台成本感知问题。👍0
   https://github.com/anthropics/claude-code/issues/108534
10. **#108547 / #108679 [OPEN] Claude in Chrome 连接中断** — 前者桥接 WebSocket 以 1008/upstream_403（OAuth token forbidden）反复断开；后者自 11-07 起新会话报“扩展未连接”而旧会话正常，属回归。👍0
    https://github.com/anthropics/claude-code/issues/108547
    https://github.com/anthropics/claude-code/issues/108679

其他值得一提：#91618（Windows worktree 盘符大小写比较误判）、#108217（Windows Alt+V 粘贴图片阻塞事件循环约 12 秒）、#88692（Windows 重装后 `ant-did` 重建致会话孤立）。

## 4. 重要 PR 进展

过去 24 小时内仅 1 条 PR 更新，无法凑足 10 条，如实列出：

1. **#74722 [CLOSED] `/commit-push-pr` 支持 Conventional Branch 命名** — 为命令增加可选 `conventional` 参数，按 Conventional Branch 1.0.0 规范以 `<type>/<description>` 命名新分支（type 含 feature、bugfix、hotfix 等）。该 PR 已于今日关闭，是否合并未从数据中体现。👍0
   https://github.com/anthropics/claude-code/pull/74722

## 5. 功能需求趋势

- **输入与键位可定制**：#89673、#92774 均要求交换 Enter / Cmd+Enter 的“换行 vs 发送”行为，覆盖桌面端与 TUI/CLI，是今日 👍 最集中的需求方向。
- **多会话与代理协作治理**：#94000（跨会话发送上限可配置）、#91910（子代理钩子载荷完整性）、#105831（恢复 workflow 面板中按代理的模型/Token/工具调用显示）指向对多代理运行的可见性与控制力诉求。
- **无人值守自动化权限**：#98287 要求定时任务具备按任务的授权放行机制。
- **新模型快速适配**：#108640 显示桌面端打包版本与模型目录同步是新模型上线的关键路径。
- **跨平台（尤其 Windows/macOS 桌面端）稳定性**：设备身份、worktree 校验、粘贴性能、Chrome 扩展连接等缺陷占比较高。
- **用量与成本透明**：#108734、#108534 延续对限额计量准确性的关注。

## 6. 开发者关注点

- **新模型上线体验割裂**：Fable 5.2 已作为默认模型发布，但桌面端捆绑旧版 CLI 导致上下文缩水至 200K，开发者需关注客户端与模型目录的版本配套。
- **长期可靠性优先**：#69044 以数月记录和 133 条评论居首，说明零散 bug 的累积效应比单个新功能更影响日常使用信心。
- **自动化被权限层阻断**：Cowork 定时任务在无人值守时被分类器拒绝，而人工会话可成功，权限模型与自动化场景的匹配度是落地瓶颈。
- **多会话工作流受限**：硬编码的 10 次发送上限与不可配置性，限制了桌面端多会话协同的实际可用性。
- **用量计费不透明**：多计划（Ultra、Team）用户报告 token 量下降但限额消耗加快，缺乏可解释的计量反馈。
- **平台细节缺陷高频**：Windows 路径大小写、重装后设备身份、图片粘贴卡顿及 Chrome 桥接鉴权等，集中在桌面端跨平台体验。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报（2026-11-10）

## 今日速览

今日无稳定版发布，仅推送三个 Rust alpha 版本（0.169.0-alpha.7/6、0.167.0-alpha.4.1），其中 0.167.0-alpha.4.1 对应一个桌面端热修复回合并。社区热度集中在 **Windows 平台**：Computer Use 无法读取浏览器 URL 的 #51524 以 86 条评论居首，Desktop 会话恢复、文件面板、浏览器绑定等问题密集出现。PR 侧以 bot 批量合并的内部改进为主，覆盖 MCP 配置、`thread/sample` 采样、GCP 增量工具声明、Windows 沙箱引号转义等。

---

## 版本发布

- **rust-v0.169.0-alpha.7** / **rust-v0.169.0-alpha.6**：预发布版本，说明仅为版本号，未见具体变更说明。
- **rust-v0.167.0-alpha.4.1**：对应 PR #60457 的桌面端热修复回合并，将 #59832、#60040 回合到 `rust-v0.167.0-alpha.4`，为原生 Amazon Bedrock 提供商的常规 Responses 引入默认关闭的 `incremental_tools_legacy` 特性（含工具更新与确认）。
  - https://github.com/openai/codex/pull/60457

> 注：以上均为 alpha/预发布渠道，生产用户暂无需跟进。

---

## 社区热点 Issues

1. **#51524 [Windows] Computer Use 卡在 get_window_state，无法获取浏览器 URL（Chrome/Edge）**
   86 条评论、9 👍，今日最热。窗口枚举正常，但 `sky.get_window_state({include_text:true})` 会直接终止回合。这是 Windows Computer Use 的核心可用性回归，影响所有浏览器自动化场景。
   https://github.com/openai/codex/issues/51524

2. **#50182 `codex cloud` 无法发现当前 Cloud 环境**
   26 条评论、22 👍（今日点赞最高）。CLI 0.160.0 + ChatGPT 认证下 Cloud 环境发现失败，属于 Cloud 工作流的基础阻塞问题，社区认可度高。
   https://github.com/openai/codex/issues/50182

3. **#59855 Windows Desktop 恢复云端托管会话时报 AbsolutePathBuf 错误**
   21 条评论。从侧边栏打开受影响的云端会话即报 `AbsolutePathBuf deserialized without a base`，Windows 上会话恢复链路存在序列化缺陷。
   https://github.com/openai/codex/issues/59855

4. **#50771 Codex 反复中途停止、丢失任务**
   20 条评论、19 👍，标签为 model-behavior/context。模型声称会继续却提前结束回合，需用户多次催促才能完成工作，直接损害长任务信任度。
   https://github.com/openai/codex/issues/50771

5. **#34026 Windows Desktop 已完成线程持续显示“thinking”，新消息排队无法发起回合**
   跨版本复现（26.715.2305.0 与 26.715.4045.0），自 7 月创建至今仍开放，属长期未决的会话状态机问题。
   https://github.com/openai/codex/issues/34026

6. **#31935 移除阻塞等待的 60 秒上限**
   15 条评论、24 👍。请求删除 GPT-5.6 / GPT-6 Astra 开发者提示中“阻塞 sleep/wait 不超过 60 秒”的约束，反映长时自动化任务对超时策略的诉求。
   https://github.com/openai/codex/issues/31935

7. **#31659 `/goal` 期间的 Auto-Compaction 丢失目标**
   自动压缩后丢弃 goal，回退为追逐近期提示，影响 CLI 长流程的目标保持能力。
   https://github.com/openai/codex/issues/31659

8. **#59546 内置自动化限制阻断对外部 Web 系统的监控任务**
   11 条评论、16 👍，且与 Scheduled tasks 文档存在冲突，涉及自动化能力的边界与文档一致性。
   https://github.com/openai/codex/issues/59546

9. **#58916 [Windows 11][VS Code] 原生 @Browser 报 “browser access host is unavailable”**
   IDE 扩展 26.51021.22027（pre-release）下浏览器访问不可用，而 Desktop 浏览器正常，指向扩展与浏览器宿主间的连接问题。
   https://github.com/openai/codex/issues/58916

10. **#60364 桌面端切换 ChatGPT 账号会清空本地侧边栏组织**
    自定义分区、本地项目、线程到项目的归属全部丢失且无迁移路径，属于数据持久化风险，需尽快给出迁移方案。
    https://github.com/openai/codex/issues/60364

---

## 重要 PR 进展

1. **#60457 [Hotfix] 将 legacy 增量工具回合到 0.167.0-alpha.4**
   https://github.com/openai/codex/pull/60457

2. **#60624 Windows 沙箱 cmd 调用中保留脚本引号**
   修复 CRT 参数转义在 `cmd.exe /c` 脚本中添加反斜杠、破坏带引号路径与可执行名的问题。
   https://github.com/openai/codex/pull/60624

3. **#60622 TUI 改用 app-server 的 MCP 配置与启动事件**
   解决本地配置的 MCP 服务器与应用服务器上报不一致、导致启动进度卡在忙碌状态的问题。
   https://github.com/openai/codex/pull/60622

4. **#60620 `thread/sample` 支持采样进行中的回合**
   新增 `allowInProgressTurn`（默认 `false`），不再要求源线程最新回合结束后才能采样。
   https://github.com/openai/codex/pull/60620

5. **#60617 GCP Responses 支持增量工具声明**
   启用 `incremental_tools_legacy` 时，工具声明通过 `additional_tools` 输入而非顶层 `tools` 数组下发。
   https://github.com/openai/codex/pull/60617

6. **#60578 RMCP 客户端新增公开 OAuth 元数据发现**
   暴露 `discover_authorization_metadata`，返回已发布的授权服务器元数据，完善 MCP 鉴权链路。
   https://github.com/openai/codex/pull/60578

7. **#60574 支持搜索已持久化的附加线程**
   新增 `includeAttachedThreads`，使标题/内容搜索覆盖附加线程，与普通线程一同可检索。
   https://github.com/openai/codex/pull/60574

8. **#60568 `codex tcp-tunnel` 新增 OpenSSH ProxyCommand 模式**
   通过 HTTP/3 CONNECT 中继 SSH 会话，弥补现有回环监听模式无法提供 stdin/stdout 传输的缺口。
   https://github.com/openai/codex/pull/60568

9. **#60560 消除空闲 Windows 文件监听的周期性唤醒**
   在 Bazel 中修补 `notify` 8.2.0，避免底层每 100ms 唤醒一次，降低空闲 CPU 占用。
   https://github.com/openai/codex/pull/60560

10. **#60559 为分页线程 fork 保留继承预览**
    修复引用型 fork 缺少本地开场用户消息、导致其从线程列表消失或在新回合写入时丢失继承预览的问题。
    https://github.com/openai/codex/pull/60559

> 补充：#60613 澄清安全拒答文案并新增举报选项；#60557 / #60556 改进全屏对话中已完成回合与连续工具调用的折叠展示；#60599 在打开已保存侧聊时保持 TUI 响应。今日 PR 多为 `copyberry[bot]` 提交并已关闭（多为已合并/处理完毕），以内部打磨为主。

---

## 功能需求趋势

- **浏览器 / Computer Use 集成**：今日 Issues 中占比最高的方向（#51524、#57190、#58916、#57107、#58439、#56772），问题贯穿 Windows、macOS、Desktop 与 VS Code 扩展，核心是会话绑定、权限与宿主可用性。
- **Windows 平台稳定性**：问题涉及 Computer Use、会话恢复、文件面板、浏览器绑定、cmd 引号转义、文件监听唤醒等，Windows 是当前缺陷最集中的平台。
- **会话与上下文管理**：自动压缩丢失 goal（#31659）、任务提前终止（#50771）、线程状态卡死（#34026）、侧边栏组织丢失（#60364），指向长会话状态保持与持久化。
- **自动化与定时任务**：#59546 反映监控类自动化受内置限制阻断，且与官方文档冲突——对文档已承诺能力的落地诉求。
- **CLI Cloud 环境发现**：#50182 高点赞说明 Cloud 与本地 CLI 的衔接是开发者高频路径。
- **超时与阻塞策略**：#31935 要求放开 60 秒阻塞等待上限，为长时轮询/等待类自动化松绑。
- **技能与配置**：#20210（项目级 `skills.config` 过滤）已 CLOSED，技能配置的细粒度控制正在成形。

---

## 开发者关注点

- **Windows 体验是首要痛点**：浏览器控制失效、会话无法恢复、文件面板右键菜单退化（#58294）、切换账号丢数据，均直接影响日常使用，且部分问题跨越多个月份仍未解决（如 #34026 自 7 月开放）。
- **“任务做不完”的信任问题**：模型在承诺继续后提前结束、Auto-Compaction 丢失目标，使开发者难以把长任务放心交给 Codex。
- **浏览器自动化的可靠性优先于新特性**：多个高评论 Issue 都是“原本可用、现在不可用”的回归，社区更关心修复而非扩展。
- **数据与配置的持久性**：账号切换清空侧边栏组织而无迁移路径，属于用户可感知的数据丢失风险。
- **Cloud / CLI / IDE 三端一致性**：Cloud 环境发现失败、IDE 扩展与 Desktop 浏览器行为不一致，说明跨端能力对齐仍有缺口。
- **性能细节受关注**：Windows 空闲文件监听每 100ms 唤醒被单独修复，表明社区与维护方都在意后台资源占用。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报（2026-11-10）

## 今日速览

今日无新版本发布。社区讨论几乎全部集中在 agent 子系统：子 agent 的终止状态误报、generalist agent 挂死、Browser Agent 配置失效等问题占据高优先级 bug 榜首，同时多项 PR 在收紧命令执行安全边界（`rm`、`git diff`、SSH 客户端），显示"agent 可靠性 + 安全护栏"是当前主线。

## 版本发布

今日无新版本发布。

## 社区热点 Issues

1. **[#22323] 子 agent 达到 MAX_TURNS 却上报 GOAL 成功**（P1，13 条评论）
   子 agent 因轮次上限被中断时，仍报告 `status: "success"` 和 `Termination Reason: "GOAL"`，掩盖了真实的中断原因。这是本日评论最多的议题，属于可观测性与正确性的双重缺陷。链接：google-gemini/gemini-cli Issue #22323

2. **[#21409] Generalist agent 挂死**（P1，8 条评论，👍 8）
   一旦转交 generalist agent 就会永久无响应，连创建文件夹这类简单操作也会卡住长达一小时。高赞说明受影响用户面广。链接：google-gemini/gemini-cli Issue #21409

3. **[#19873] 利用模型的 bash 亲和性：零依赖 OS 沙箱与执行后意图路由**（P2，9 条评论）
   提出 Gemini 3 模型原生擅长链式 POSIX 工具，应通过沙箱与执行后意图路由充分释放这一能力，是 agent 架构层面的方向性提案。链接：google-gemini/gemini-cli Issue #19873

4. **[#22745] 评估 AST 感知的文件读取、搜索与代码库映射**（P2，7 条评论）
   EPIC 议题，探讨 AST 工具能否以单次调用精确读取方法边界、减少轮次，代表 agent 工具链向结构化代码理解演进。链接：google-gemini/gemini-cli Issue #22745

5. **[#21968] Gemini 不主动使用 skills 与子 agent**（P2，7 条评论）
   用户反馈模型几乎不会自发调用自定义 skills 和子 agent，只有显式指令才会触发，直接影响该能力体系的实用价值。链接：google-gemini/gemini-cli Issue #21968

6. **[#22267] Browser Agent 忽略 settings.json 覆盖项（如 maxTurns）**（P2，5 条评论）
   浏览器 agent 完全忽略全局与项目级配置覆盖，使配置体系对其失效。链接：google-gemini/gemini-cli Issue #22267

7. **[#21983] browser 子 agent 在 Wayland 下失败**（P1，4 条评论）
   Linux Wayland 环境下 browser 子 agent 运行失败，属平台兼容性硬伤。链接：google-gemini/gemini-cli Issue #21983

8. **[#22232] 增强 browser_agent 韧性：自动会话接管与锁恢复**（P3，4 条评论）
   当前对锁定浏览器 profile 采取 fail-fast 策略，建议改为自动接管与恢复，与上一条共同指向 Browser Agent 稳定性。链接：google-gemini/gemini-cli Issue #22232

9. **[#24246] 工具数超过 128 个时出现 400 错误**（P2，3 条评论）
   工具规模膨胀触发请求失败，摘要中同时出现"128"与"400"两个数值，建议以复现结果为准核实具体阈值。链接：google-gemini/gemini-cli Issue #24246

10. **[#22672] Agent 应停止/劝阻破坏性行为**（P2，3 条评论）
    模型在复杂 git 操作中可能使用 `git reset` 或 `--force`，而非更安全的替代方案，涉及数据库等资源维护时的安全性。链接：google-gemini/gemini-cli Issue #22672

## 重要 PR 进展

1. **[#30171] fix(core)：无论参数位置如何，标记递归与强制 rm**（P1）
   修复 POSIX 下 `isDangerousCommand` 仅比较 `args[1]` 导致 `rm -r -f x`、`rm -Rf x`、`rm x -rf` 等变体漏检的问题。链接：google-gemini/gemini-cli PR #30171

2. **[#30095] fix：修复 Windows Git diff 权限绕过**（P1，安全）
   将 Git 命令安全校验抽为可复用 helper，防止危险 Git 参数被误判为只读安全操作。链接：google-gemini/gemini-cli PR #30095

3. **[#30217] fix(core)：避免 PDF inlineData 与遥测缓冲区内存滞留**
   针对多轮 PDF 摄入及模型回退场景下的 V8 堆内存溢出崩溃（遥测默认关闭时触发）。链接：google-gemini/gemini-cli PR #30217

4. **[#30219] fix(acp)：在活跃 chat 上记录工具调用，防止压缩会话重载时 400**
   避免压缩后的工具调用挂到已移除的模型消息上。链接：google-gemini/gemini-cli PR #30219

5. **[#30220] fix(cli)：保留 Unicode 提示词并在会话预览中剥离 ANSI 片段**
   修复会话预览与搜索对非 ASCII 字符和 ANSI 转义序列的处理。链接：google-gemini/gemini-cli PR #30220

6. **[#30216] test(core)：为 isApiError 与 isStructuredError 增加单元测试**
   为配额/API 错误分类的类型守卫补充测试覆盖。链接：google-gemini/gemini-cli PR #30216

7. **[#30009] ci(release)：新增 OSS Exit Gate npm 发布工作流**
   支持通过 Google OSS Exit Gate 管线发布 `@google/gemini-cli`、`-a2a-server`、`-core` 三个包。链接：google-gemini/gemini-cli PR #30009

8. **[#30102] fix(core)：IDE 连接改用 ide_connection 事件名记录**
   原先统一记为 `start_session`，虚增了 IDE companion 用户的会话计数。链接：google-gemini/gemini-cli PR #30102

9. **[#30096] fix(cli)：空环境变量时 `${VAR:-default}` 应取默认值**
   修复变量已设置但为空时返回空串而非默认值的行为。链接：google-gemini/gemini-cli PR #30096

10. **[#30214] fix(core)：将 TortoiseGitPlink 识别为 PuTTY 系 SSH 客户端**
    使 `getSafeGitEnv()` 正确插入 `-batch` 而非 OpenSSH 的 `-o BatchMode=yes`。链接：google-gemini/gemini-cli PR #30214

## 功能需求趋势

- **子 agent 体系成熟化**：既有 sprint 规划（#20195）、示例 agent 建设（#18283）、codebase_investigator 改进（#18282），也有轨迹可视化与分享（#22598）、本地子 agent 等配套需求。
- **Agent 工具链结构化**：AST 感知的读取/搜索/代码库映射（#22745、#22746），以及用原生文件工具维护任务追踪（#21000）。
- **Browser Agent 专项强化**：配置 honoring（#22267）、会话锁恢复（#22232）、Wayland 兼容（#21983）。
- **安全与破坏性行为约束**：与多项 P1 安全 PR 相呼应，社区同时要求 agent 主动劝阻破坏性命令。
- **企业/遥测与发布工程**：遥测 SERVICE_VERSION、IDE 连接事件命名、npm 发布工作流等 PR 均属此类。

## 开发者关注点

- **Agent 挂死与静默失败最伤体验**：generalist agent 永久挂起（#21409）与子 agent 误报成功（#22323）都会让用户误以为任务完成或无从判断，是"沉默的错误"类痛点。
- **配置项被忽略**：settings.json 覆盖对 Browser Agent 无效、`${VAR:-default}` 空值语义错误，反映配置系统一致性不足。
- **平台兼容性**：Wayland 下 browser 子 agent 失败、Windows Git 安全检查绕过、TortoiseGitPlink 识别，跨平台路径仍需打磨。
- **资源与内存稳定性**：PDF 摄入 OOM（#30217）、压缩会话重载 400（#30219）、工具数量超限 400（#24246）显示长会话与大输入场景的压力点。
- **模型行为主动性不足**：不主动使用 skills/子 agent、在随机位置生成临时脚本（#23571）、交互式 prompt 处卡死（#22465），提示需要更多行为评估与提示词调优。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报（2026-11-10）

## 1. 今日速览

今日发布 v1.0.109 系列版本，核心新增为沙箱主机规则的 IPv4/IPv6 CIDR 支持与新模型 Claude Fable 5.2 接入模型选择器。社区侧 MCP 相关问题集中出现（工具未暴露、注册表连接、进程残留、OAuth 回调端口等），多条历史 Issue 于今日关闭。稳定性痛点集中在 1.0.108 的回归问题与沙箱权限行为上。

## 2. 版本发布

**v1.0.109 / v1.0.109-1 / v1.0.109-0**（2026-11-10）

- **新增**：沙箱主机 allow/deny 规则支持 IPv4/IPv6 CIDR；在 "New models" 中新增 Claude Fable 5.2 模型选择支持。
- **改进**：
  - 沙箱路径设置支持环境变量，同时在设置与编辑器中保留原始表达式。
  - `/share` 或 `/export` 跟随符号链接保存本地文件前会请求确认。
  - URL 权限提示可为当前会话批准所有子域。
  - 只读 shell 脚本请求权限的频率降低；修改 git refs 或通过隐藏路径读取文件的脚本仍受限制。
  - `copilot help input` 说明更新：在 shell 输入开头按 Backspace 会退出 shell 模式并保留已输入文本。

链接：github.com/github/copilot-cli Releases

## 3. 社区热点 Issues（10 条）

1. **#4438 [OPEN] skill 设置 `disable-model-invocation: true` 后完全不可达**（17 评论，👍20）
   `copilot skill list` 能显示该 Project skill，但模型 `skill()` 工具返回 "Skill not found"，实际效果是"无法调用"而非"仅手动调用"。这是 agent 技能机制中语义与实现不一致的典型问题，社区讨论热度最高。
   github/copilot-cli Issue #4438

2. **#191 [CLOSED] MCP 服务器已配置但工具未暴露给 AI 助手**（15 评论，👍15）
   跨版本长期存在的 MCP 集成问题，今日以 more-info-needed 关闭。对依赖 MCP 扩展能力的企业用户影响面大。
   github/copilot-cli Issue #191

3. **#4949 [CLOSED] 无法从自定义 MCP registry 拉取可用 MCP**（4 评论）
   企业配置的 MCP registry URL 在 VSCode 中可用，但 CLI 无法访问。企业级 MCP 分发链路的兼容性问题。
   github/copilot-cli Issue #4949

4. **#4392 [CLOSED] 启动时认证后重建 MCP 客户端，遗留孤儿 stdio MCP 进程**（4 评论）
   启动时先拉起 MCP 服务器，认证完成后整体销毁重建，导致第一代 stdio 进程残留。资源泄漏类缺陷。
   github/copilot-cli Issue #4392

5. **#5171 [OPEN] Windows 下 NumLock 关闭时小键盘导航与 Delete 被忽略**（4 评论）
   1.0.98 的键盘输入回归，影响 Windows 终端用户的基础交互体验。
   github/copilot-cli Issue #5171

6. **#5242 [CLOSED] inotify 达到上限时 MCP 配置监听注册失败，会话停止处理**（2 评论）
   在共享 Linux 主机容器中运行 `copilot --server` 时，inotify watch 预算耗尽会导致会话队列被放弃。对服务端部署场景风险较高。
   github/copilot-cli Issue #5242

7. **#4461 [CLOSED] 关闭会话后 stdio Docker MCP 容器仍在运行**（2 评论，👍3）
   多会话共用 Docker 化 stdio MCP 服务器时，关闭单个会话不清理对应容器。与 #4392 同属 MCP 进程生命周期管理问题。
   github/copilot-cli Issue #4461

8. **#5283 [OPEN] 个人 Copilot Free 账号启用远程环境被 remote-control 策略阻止**（2 评论，👍5）
   本地入站连接设置显示已启用，但环境状态报告被策略阻断。涉及远程访问的权限策略边界。
   github/copilot-cli Issue #5283

9. **#5388 [CLOSED] 沙箱在 GHE Cloud 数据驻留租户中凭据掩码对 `GH_TOKEN`/`GH_ENTERPRISE_TOKEN` 无效**（1 评论）
   1.0.106 以 `--sandbox --yolo` 运行时，token 环境变量在掩码前即被丢弃。安全相关，企业用户需关注。
   github/copilot-cli Issue #5388

10. **#5400 [CLOSED] 1.0.108 回归：延迟 MCP function_call 在下一次交互中丢失 namespace**（1 评论）
    SDK 托管会话在延迟 MCP 工具调用后，下一次交互首个请求返回 400 "Missing namespace for function_call"。影响 SDK 集成方可直接导致会话不可用。
    github/copilot-cli Issue #5400

其他值得留意的新 Issue（今日创建，0 评论）：#5408 反复内容过滤失败与 AI credit 用量质疑；#5407 企业代理 Negotiate 认证下需支持 NTLM 回退；#5406 Linear 任务委派时 agent 收不到 `<problem_statement>` 上下文。

## 4. 重要 PR 进展

过去 24 小时内更新的 Pull Request 数量为 **0 条**，本期无可报告的 PR 进展。

## 5. 功能需求趋势

- **MCP 生态稳定性**：本期最集中方向，涵盖工具暴露失败、自定义 registry 不可达、认证后客户端重建、Docker/stdio 进程残留、inotify 限额、延迟调用的 namespace 丢失，以及固定 OAuth 回调端口（#5391，已关闭）。
- **模型控制与路由**：#5369 请求在 fusion/auto 模式下支持模型 block list；配套新模型 Claude Fable 5.2 的接入。
- **沙箱与权限精细化**：CIDR 主机规则、路径设置支持环境变量、符号链接确认、子域批量授权、只读脚本减少提权——版本发布与 Issue（#5388）共同反映这一方向。
- **企业/代理与认证环境**：#5407 NTLM 回退、#4949 自定义 registry、#5388 GHE 数据驻留租户，指向企业网络与凭据场景的适配需求。
- **系统集成与依赖替换**：#4456 希望使用系统安装的 GitHub CLI 而非内置 `gh.exe`；#5406 Linear 与 Copilot Cloud Agents 的任务委派上下文传递。
- **交互与输入体验**：Windows 小键盘与 Delete 键（#5171）、shell 输入模式切换说明更新。

## 6. 开发者关注点

- **MCP 进程生命周期管理是高频痛点**：孤儿 stdio 进程、残留 Docker 容器、认证后重建客户端三类问题同源，建议优先统一 MCP 客户端的重建与清理逻辑。
- **回归问题影响信任**：1.0.108 的 namespace 丢失（#5400）与 1.0.98 的键盘输入回归（#5171）表明近期版本存在稳定性回退，升级前需关注。
- **沙箱安全行为需可预期**：凭据掩码在特定企业环境下失效（#5388）属于安全敏感缺陷；CIDR 与符号链接确认等改进方向正确。
- **大量 Issue 以 more-info-needed 关闭**：#191、#4949、#4392 等均以该标签关闭，社区对企业 MCP 场景的后续支持仍待明确回应。
- **部署环境边界**：共享 Linux 主机的 inotify 限制（#5242）、企业代理认证（#5407）显示容器化与服务端部署尚需更多环境适配。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 · 2026-11-10

数据来源：github.com/anomalyco/opencode

---

## 1. 今日速览

OpenCode 发布 v2.2.7，新增 GitHub Copilot Auto 模型路由支持，同时社区围绕 Copilot 计费不准确与符号链接配置失效两大问题持续升温。免费额度问题是当前评论量最高的议题（344 条），而 Copilot 长期上下文与缓存写入的计费低估已有多条复现 Issue 与对应修复 PR 并行推进。

---

## 2. 版本发布

**v2.2.7**（过去 24 小时）

- **GitHub Copilot Auto**：当 Copilot 账户拥有 Auto 池时，可在模型选择器中选择 **Auto**，由 Copilot 的路由器为每个会话选择模型，并享受 Auto 折扣；若路由失败，OpenCode 回退到账户的默认聊天模型。
  https://github.com/anomalyco/opencode/pull/62997

> 注意：v2.2.6/2.2.7 也引入了新的回归问题（见下方 Issue #63129、#63119）。

---

## 3. 社区热点 Issues（10 条）

| # | Issue | 状态 | 关注理由 |
|---|-------|------|----------|
| 1 | [#59387](https://github.com/anomalyco/opencode/issues/59387) 免费层问题集中上报帖 | OPEN · 344 评论 · 👍27 | 免费额度提示（"Free usage exceeded / limit reached"）的主汇总帖，维护者指定为免费层问题唯一上报入口，社区互动量远超其他议题。 |
| 2 | [#41969](https://github.com/anomalyco/opencode/issues/41969) 公开 Go 套餐模型的确切版本/检查点 | OPEN · 20 评论 · 👍16 | 要求官方文档说明每个 Go 套餐模型实际服务的模型版本（如 deepseek-v4-flash 是否为 0731），反映用户对模型版本透明度的强烈诉求。 |
| 3 | [#34644](https://github.com/anomalyco/opencode/issues/34644) Copilot Free/Student（仅 Auto）不显示模型 | CLOSED · 14 评论 · 👍29 | 点赞数最高的问题之一：通过 OAuth 连接 Copilot 后模型选择器中完全没有 `github-copilot` provider，这与 v2.2.7 新增的 Auto 支持直接相关。 |
| 4 | [#59671](https://github.com/anomalyco/opencode/issues/59671) Copilot 分层定价成本计算严重偏低 | CLOSED · 6 评论 | 25 小时会话面板显示 $1.56，实际约 $9.3–10.2（低估约 6 倍）；Claude Haiku 5.5 长上下文分层与缓存写入计费均未生效。计费准确性问题中最具代表性的案例。 |
| 5 | [#63129](https://github.com/anomalyco/opencode/issues/63129) 符号链接定义文件在 2.2.6 后停止加载 | OPEN · 5 评论 | 从 2.2.5 升级到 2.2.6 后，`~/.config/opencode/skills` 下经符号链接的全局 skills 无法加载，2.2.7 仍可复现，属新版本回归。 |
| 6 | [#62234](https://github.com/anomalyco/opencode/issues/62234) 桌面内置浏览器预览每 ~60 秒重载 | OPEN · 4 评论 | 重新附加连接会销毁所有 tunnel，导致页面每 60–80 秒刷新一次，且每次发送 prompt 时立即刷新，严重影响桌面端使用体验。 |
| 7 | [#60839](https://github.com/anomalyco/opencode/issues/60839) TUI 在电脑休眠唤醒后回到起始屏 | OPEN · 5 评论 · 已复现 | 会话本身仍在运行、历史完好，但窗口不再显示会话，对长时间无人值守任务影响明显。 |
| 8 | [#62636](https://github.com/anomalyco/opencode/issues/62636) `opencode run` 在子会话繁忙时挂起 | OPEN · 3 评论 · 已复现 | 根会话结束时若 `parentID` 子会话仍忙，CLI 永不退出，影响脚本化/CI 场景。 |
| 9 | [#60051](https://github.com/anomalyco/opencode/issues/60051) Build/Plan 模式或推理等级显示与实际不符 | OPEN · 3 评论 | 界面显示 Max thinking，实际被切到 xHigh；显示 Build 但 Agent 认为自己处于 Plan，属状态一致性问题。 |
| 10 | [#62923](https://github.com/anomalyco/opencode/issues/62923) Code Mode `execute` 工具对所有代码返回 null | CLOSED · 4 评论 | v2.2.6 中 `execute` 无论返回值、`console.log`、`search()` 还是抛错代码一律返回 `null`，MCP 服务端本身正常，属核心功能回归。 |

**附带关注**（已关闭但值得留档）：

- [#51845](https://github.com/anomalyco/opencode/issues/51845)、[#52089](https://github.com/anomalyco/opencode/issues/52089)：Copilot 会话成本忽略缓存写入与长上下文定价，均已复现。
- [#55775](https://github.com/anomalyco/opencode/issues/55775)：SSH + Windows 下 TUI 中 Ctrl+V 粘贴冻结。
- [#62618](https://github.com/anomalyco/opencode/issues/62618)：Session inbox 已投递消息残留永久排队条目。

---

## 4. 重要 PR 进展（10 条）

| # | PR | 类型 | 内容 |
|---|----|------|------|
| 1 | [#59803](https://github.com/anomalyco/opencode/pull/59803) | Bug fix（OPEN） | 为 Copilot 长上下文分层与缓存写入正确计价，修复 #52089；直接回应计费低估问题。 |
| 2 | [#61703](https://github.com/anomalyco/opencode/pull/61703) | 新功能（OPEN） | 核心层在支持的模型上使用 freeform 工具输入，使 `patch`、`execute` 等工具不再强制要求 JSON。 |
| 3 | [#62769](https://github.com/anomalyco/opencode/pull/62769) | 新功能（OPEN） | 可选开启 SQLite FTS5 会话历史全文索引（`experimental.sqlite_fts: true`），默认关闭；本 PR 仅建索引，搜索工具后续跟进。 |
| 4 | [#63139](https://github.com/anomalyco/opencode/pull/63139) | 新功能（OPEN） | 新增 `remote.use` 策略，供组织在公司笔记本上关闭远程访问。 |
| 5 | [#63143](https://github.com/anomalyco/opencode/pull/63143) | 实验功能（OPEN） |  Settings → Experimental 下新增可自定义的垂直 Sessions 侧栏，可跨所有已连接服务器分组/筛选会话。 |
| 6 | [#63166](https://github.com/anomalyco/opencode/pull/63166) | Bug fix + 文档（OPEN） | 允许 per-server MCP `timeout` 使用对象形式（此前仅接受数字），并修正文档；关闭 #63092。 |
| 7 | [#63152](https://github.com/anomalyco/opencode/pull/63152) | Bug fix（OPEN） | npm 安装的 `opencode upgrade` 改为通过自身 prefix 更新，修复 #52152。 |
| 8 | [#63158](https://github.com/anomalyco/opencode/pull/63158) | Bug fix（CLOSED） | 缓存编译后的 wildcard 正则（#63099 显示 `Tool.snapshot` 每次 provider step 都重新编译 `RegExp`），消除权限热路径开销。 |
| 9 | [#63165](https://github.com/anomalyco/opencode/pull/63165) | Bug fix（OPEN，需合规） | 将 Swift 高亮 query 固定到解析器版本 0.7.1，修复 `nil_literal` 等新节点导致的 Swift 代码块纯文本渲染（#62867）。 |
| 10 | [#62882](https://github.com/anomalyco/opencode/pull/62882) | 重构（CLOSED） | 移除 media 模块与其客户端之间的运行时循环依赖，为开启 `import/no-cycle` lint 规则铺路（系列首个）。 |

**补充**：[#55322](https://github.com/anomalyco/opencode/pull/55322)（缓存通配符正则，长期 OPEN）、[#63160](https://github.com/anomalyco/opencode/pull/63160)（glob 14.0.4 / minimatch 11.0.5 升级）。

---

## 5. 功能需求趋势

- **模型/计费透明度**：公开 Go 套餐模型的确切版本与检查点（#41969）；Copilot 分层定价、缓存写入计费准确化（#52089/#51845/#59671 及 PR #59803）。
- **GitHub Copilot 与免费层兼容**：仅 Auto 的 Free/Student 账户模型可见性（#34644）；免费额度提示与清零逻辑集中反馈（#59387）。
- **桌面/Web 体验**：会话内容宽度可调（#53382）、内置浏览器预览稳定性（#62234）、侧栏会话组织（PR #63143）。
- **TUI 与 CLI 健壮性**：休眠唤醒后会话保持（#60839）、CLI 子会话挂起（#62636）、SSH 环境剪贴板（#55775）。
- **交互细节**：Thinking 块点击任意区域可收起（#60009）、Build/Plan 与推理等级状态一致性（#60051）。
- **性能与检索**：wildcard 正则缓存热点路径（#63099）、SQLite FTS5 会话历史索引（PR #62769）。
- **企业策略控制**：`remote.use` 关闭远程访问（PR #63139）。

---

## 6. 开发者关注点

1. **计费可信度是最大痛点**：Copilot 会话成本低估达数倍，根源是忽略 `cache_write_price`、`long_context` 分层与 `cache_write_tokens`；多个复现 Issue 指向同一修复 PR（#59803），建议优先合入。
2. **2.2.6 引入的回归集中爆发**：符号链接 skills 失效（#63129）、Code Mode `execute` 返回 null（#62923）、shell 不可用（#63119），升级到 2.2.7 后部分问题仍在。
3. **长时间/无人值守会话的稳定性**：休眠唤醒丢显示、子会话挂起导致 `run` 不退出、浏览器预览周期性重载，均影响长会话与自动化场景。
4. **权限热路径性能**：`Tool.snapshot` 反复编译正则被定位为性能问题，已有两版修复 PR（#55322、#63158）。
5. **免费层沟通成本高**：单个汇总 Issue 累积 344 条评论，说明免费额度规则与提示信息仍不够清晰。
6. **模型版本可预期性**：用户希望知道 Go 套餐模型背后具体服务的检查点，以便评估行为差异。

---

*本期共覆盖 1 个版本、20 条 Issue 摘要、15 条 PR 摘要，均来自提供的 GitHub 数据。*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报（2026-11-10）

> 数据来源：github.com/badlogic/pi-mono（earendil-works/pi）

## 1. 今日速览

今天发布 v1.5.2 与 v1.5.1 两个版本，分别加入“原目录丢失会话的分支迁移”和独立于会话的 `pi auth login/logout` 凭据命令。社区侧最热的话题仍是 Windows 使用体验（#7547，96 条评论），同时多个涉及模型目录、缓存预热和工具调用参数解析的问题集中更新，反映出缓存与多模型兼容是当前稳定性焦点。

## 2. 版本发布

**v1.5.2**
- 新增“原目录已丢失的会话分支”：当会话原文件夹被移动或删除时，可将该会话 fork 到当前文件夹，避免后续恢复时反复询问。详见文档“Continue or switch sessions”。
- 链接：https://github.com/earendil-works/pi/blob/v1.5.2

**v1.5.1**
- 新增 Shell 登录/登出：无需启动会话即可使用 `pi auth login <provider>` 与 `pi auth logout <provider>`，支持 API-key 与无浏览器登录方式。详见“Credential commands”。
- 链接：https://github.com/earendil-works/pi/blob/v1.5.1/packages/coding-agent/docs/cli.md#credential-commands

## 3. 社区热点 Issues（10 条）

1. **#7547 [OPEN] Windows 使用方式与问题征集**（96 评论）— Windows 上运行 Pi 方式过多，难以确定该优先修 bug、写文档还是做其他改进，是当前讨论度最高的议题。
   https://github.com/earendil-works/pi/issues/7547

2. **#5103 [CLOSED] Windows 构建无法正确从 PATH 识别 git-bash**（25 评论）— GitHub Release 的 `pi-windows-x64.zip` 中内置 bash 检测失效，直接影响 Windows 开箱体验。
   https://github.com/earendil-works/pi/issues/5103

3. **#10956 [OPEN] cacheWarming “idle” 在扩展处理 turn_end 后静默失效**（13 评论）— 自 9 月以来 507 次 `cache_warming_decision` 事件全部落在 continuationProbability 1，0.15 一次未触发，涉及缓存成本。
   https://github.com/earendil-works/pi/issues/10956

4. **#10074 [CLOSED] Anthropic 工具调用中损坏的非 ASCII edit 参数被静默接受**（12 评论）— 含韩文文件编辑频繁失败甚至损坏文件，属于数据安全问题。
   https://github.com/earendil-works/pi/issues/10074

5. **#11021 [OPEN] ChatGPT 登录下 GPT-6.1 Sol 仍按 272K 上下文上报，而账户目录为 500K**（9 评论，👍8）— 上下文窗口被低估，社区认同度最高。
   https://github.com/earendil-works/pi/issues/11021

6. **#7062 [OPEN] openai-completions 未处理数组 content 与缺失 finish_reason**（9 评论）— 影响 Databricks 上 Qwen3、gpt-oss 等非标准流式响应。
   https://github.com/earendil-works/pi/issues/7062

7. **#6415 [CLOSED] 建议将 `lastChangelogVersion` 移出配置文件**（8 评论，👍7）— 多设备 git 同步配置的用户被该字段反复干扰。
   https://github.com/earendil-works/pi/issues/6415

8. **#10812 [OPEN] 已保存的默认模型不在目录中时被静默回退**（7 评论）— DeepSeek 更名后新会话未使用用户设定，且无提示。
   https://github.com/earendil-works/pi/issues/10812

9. **#10536 [OPEN] 虚拟模型（registerVirtualModel）会话的缓存预热立即停止**（4 评论）— 扩展路由模型场景下缓存不再刷新。
   https://github.com/earendil-works/pi/issues/10536

10. **#12014 [CLOSED, untriaged] 工具调用参数中的孤立 UTF-16 代理项破坏后续所有请求**（2 评论）— pi-ai 仅对文本/思考/工具结果做清理，参数原样发送。
    https://github.com/earendil-works/pi/issues/12014

其他值得留意：#11989（Anthropic OAuth 固定 claude-cli/2.1.280 被拒，需 2.1.290）、#12015（MCP 指令改变已缓存系统前缀）、#10539（cloudflare-ai-gateway 目录缺少 DeepSeek/xAI/Qwen 等上游）。

## 4. 重要 PR 进展（10 条）

1. **#12016 [CLOSED] 为 Azure OpenAI 增加 Microsoft Entra ID 认证** — 基于 DefaultAzureCredential 链，无需 API-key 即可连接 Microsoft Foundry。
   https://github.com/earendil-works/pi/pull/12016

2. **#11961 [CLOSED] Harness 关闭时清理 provider 资源** — `Harness.close()` 在任务结束后释放 pi-ai 资源，修复进程无法干净退出的问题（对应 #11676）。
   https://github.com/earendil-works/pi/pull/11961

3. **#12002 [CLOSED] p2 会话目录改为服务端 Chord 存储中按 host 键控的行** — 使导出/导入/删除与 Chord 备份涵盖会话目录。
   https://github.com/earendil-works/pi/pull/12002

4. **#12011 [CLOSED] 将 subagents 与 shares 也迁入 Chord 存储** — 延续 #12002 的迁移。
   https://github.com/earendil-works/pi/pull/12011

5. **#11990 [OPEN, inprogress] Radius 会话同步适配器原型** — 为 P2 提供会话备份/恢复的后端边界，避免耦合 Radius HTTP API。
   https://github.com/earendil-works/pi/pull/11990

6. **#11951 [CLOSED, inprogress] 会话索引作为 Chord outbox** — 会话为权威数据源，index 由此构建并由 mirror 更新。
   https://github.com/earendil-works/pi/pull/11951

7. **#11998 [CLOSED] ant-ling provider 新增 Ling 3.x Flash 系列** — 以 Ling 3.2/3.1/3.0 Flash 替换废弃的 Ling 2.6 / Ring 2.6，其中 3.2 Flash 支持图像输入。
   https://github.com/earendil-works/pi/pull/11998

8. **#12001 [OPEN] 修正 llama.cpp 默认端口为 9931** — 同步示例与当前服务端默认值，31 个 llama.cpp 测试通过（#12000 为同内容已关闭版本）。
   https://github.com/earendil-works/pi/pull/12001

9. **#11986 [CLOSED] 工具搜索对读动词查询排序只读工具** — 修复“read my email”与 `gmail_...` 工具无共同词导致检索失败的问题。
   https://github.com/earendil-works/pi/pull/11986

10. **#11985 [CLOSED] codemode 包装器不再遮蔽 prelude 全局变量** — 移除与 `globalThis` 上 `tools`/`console` 重复的参数名。
    https://github.com/earendil-works/pi/pull/11985

## 5. 功能需求趋势

- **Windows 平台支持**：跨数月仍是最大讨论面（#7547、#5103），集中在安装方式统一、git-bash 检测等。
- **多模型与提供商覆盖**：Azure OpenAI 认证（#12016）、Ling 3.x Flash（#11998）、Cloudflare AI Gateway 目录补齐（#10539）、Kimi Code OAuth 主机调整（#9819）。
- **模型目录与上下文元数据准确性**：默认模型静默回退（#10812）、上下文窗口上报偏小（#11021）、模型更名兼容。
- **缓存与提示前缀稳定性**：cacheWarming 失效（#10956、#10536）、MCP 指令改变已缓存系统前缀（#12015）。
- **工具调用健壮性**：非 ASCII 参数损坏（#10074）、参数解析失败可修复（#11112）、孤立代理项（#12014）、工具搜索排序（#11986）。
- **本地推理集成**：llama.cpp 文档与默认端口统一（#11958–#12005 系列）。

## 6. 开发者关注点

- **静默失败最伤体验**：缓存预热不触发、默认模型被替换、损坏参数被接受，均缺少显式报错或提示。
- **配置可移植性**：运行时状态（如 `lastChangelogVersion`）混入用户配置文件，影响多设备 git 同步。
- **扩展生态兼容**：扩展无法解析通过 `package.json` main/exports 声明的 npm 包（#9817）、虚拟模型下缓存失效（#10536）。
- **上游模型变更带来的连锁问题**：Anthropic OAuth 版本头过旧（#11989）、Fable 5.2 需要新 header（#11969）、模型重命名（#10812）。
- **非标准流式响应兼容**：openai-completions 对数组 content 与缺失 finish_reason 处理不足（#7062）。
- **资源生命周期**：Harness 关闭后残留 provider 会话与 WebSocket（#11676/#11961）。
- **服务端存储整合**：多个 PR 将会话目录、subagents、shares 统一迁入 Chord 存储，显示 P2 后端收敛方向。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报（2026-11-10）

## 今日速览

今日无新版本发布，社区动态集中在稳定性与架构治理：主分支 CI 失败问题持续堆积，多条跟踪 Issue 长期未收敛；同时 Managed Agent、Channel 交付、统一 Agent Loop 等方向的 PR 密集推进。值得注意的是一条 P1 级工作流权限审批卡死缺陷（#16425）仍在开放中，会直接导致运行挂起。

## 版本发布

过去 24 小时无新 Release。

## 社区热点 Issues

1. **#14724 主 CI 失败：Managed Agent gate 未识别到测试**（287 条评论，自 2026-10-19 持续）
  机器人反复追加失败的测试指纹，评论量远超其他问题，说明该门禁长期无法稳定通过，已成为 CI 噪音源。
  https://github.com/QwenLM/qwen-code/issues/14724

2. **#16672 主 CI 失败：HostedExtensionsIT 等多个托管扩展用例**
  涉及 MySQL 场景下扩展在 Harness 替换/取消/关闭后仍存活，共 +11 个失败用例，指向托管扩展生命周期管理。
  https://github.com/QwenLM/qwen-code/issues/16672

3. **#16425 [P1] 工作流 Agent 权限审批不渲染，运行无限挂起**（0.26.6 观察，0.26.8 复现）
  `PermissionRequest` 与 `Notification(permission_prompt)` 均已触发、状态栏也提示需审批，但界面未渲染审批请求。这是本期唯一明确影响用户可用性的 P1 缺陷。
  https://github.com/QwenLM/qwen-code/issues/16425

4. **#8662 TUI 渲染层从 ink 迁移到 OpenTUI（跟踪）**
  多批实现已合并，当前卡在“同候选安装/平台 + 完整 Ink/真实终端验收”门禁，是终端体验路线的关键工程。
  https://github.com/QwenLM/qwen-code/issues/8662

5. **#15660 子 Agent 启动即带巨量上下文**
  父会话 42k 上下文、子 Agent 提示仅 1k，但推理引擎报告子会话以 105k 提示启动，来源不明。涉及 token 管理与成本，反馈者无法自行定位。
  https://github.com/QwenLM/qwen-code/issues/15660

6. **#16604 用真实 bash 解析器替换手写 amend shell 模型**
  作者指出 PR #16075 经十五轮评审仍在补漏，建议改用 tree-sitter-bash / mvdan-sh 并做 AST 归因。属于安全/Shell 判定层面的根本性改进提议。
  https://github.com/QwenLM/qwen-code/issues/16604

7. **#15327 所有界面统一到单一 Agent Loop（experimental.unifiedAgentLoop）**
  P1 特性跟踪，目标是在 `packages/core` 提供唯一 Agent Loop 实现供各 surface 复用，标记为 ready-for-human。
  https://github.com/QwenLM/qwen-code/issues/15327

8. **#13078 每日依赖 CVE 审计失败**
  定时审计任务失败，可能源于新增高危漏洞，已积压一个多月且仍为 needs-triage，属供应链安全待办。
  https://github.com/QwenLM/qwen-code/issues/13078

9. **#14075 静态模式换行产生 1-2 字符孤行**
  在关闭虚拟化历史（`ui.useTerminalBuffer: false`）的渲染路径下，行填满终端宽度时换行异常，Windows 相关标签也在列，影响日常阅读。
  https://github.com/QwenLM/qwen-code/issues/14075

10. **#14019 [Web Shell] 完善实验性智能 UI 与有状态交互**
  目标是让助手按任务选择纯文本、原生交互组件或隔离 HTML 可视化。已有配套验收评估 PR #16811，是 Web Shell 方向的主线需求。
  https://github.com/QwenLM/qwen-code/issues/14019

（另：#12224 `/cd` 在 v0.24.0 后失效已 CLOSED；#16691 GitHub Channel 条件请求轮询已 CLOSED。）

## 重要 PR 进展

1. **#16840 refactor(managed-agent)：异步准入成为唯一发布模式**
  托管工具输出的发布统一为单一生产者模式：每类请求落库后返回 HTTP 202 待定态，由后台验证，简化状态机。
  https://github.com/QwenLM/qwen-code/pull/16840

2. **#16839 fix(channels)：Channel 运行期间重试已存储的 GitHub 回复**
  当限流导致最终回复未送达时，回复写入私有待投递文件、任务停在 `reply_pending`，本 PR 补上运行期重试。
  https://github.com/QwenLM/qwen-code/pull/16839

3. **#16835 feat(managed-agent)：Managed Sessions 的持久化自定步调 /loop 唤醒**
  将自定步调唤醒从内存态改为写入 Session journal 的持久输入，是 `/loop` 的基础设施。
  https://github.com/QwenLM/qwen-code/pull/16835

4. **#16728 [CLOSED] fix(managed-agent)：Session 关闭时释放 MCP owner**
  修复 #16116 之后 close 仅排空 MCP 配置、遗留 `mcp_configuration` 行的问题。
  https://github.com/QwenLM/qwen-code/pull/16728

5. **#16687 fix(cli)：消息排队期间保持 footer 挂载**
  使“N queued”徽标在消息排队全程可见，属终端交互细节修复。
  https://github.com/QwenLM/qwen-code/pull/16687

6. **#16691 [CLOSED] fix(channels)：PR 状态轮询改用条件请求**
  利用 `If-None-Match`/`ETag` 与 `If-Modified-Since` 减少 API 预算消耗；配套的 GraphQL 批量复查在 #16692 讨论中。
  https://github.com/QwenLM/qwen-code/pull/16691

7. **#16847 feat(serve)：记录 slim listing 的状态并把 key 传给 watch**
  修复“slim listing 返回的 keys”从未被填充、导致已关闭 PR 无法退出视图轮换的缺陷。
  https://github.com/QwenLM/qwen-code/pull/16847

8. **#16831 fix(cli)：重跑 join 时复用首次运行保存的凭证**
  首次拿到凭证但连接失败后，重跑同一命令可继续完成，而不再被判为无效/过期 token。
  https://github.com/QwenLM/qwen-code/pull/16831

9. **#16826 fix(managed-agent)：加固 Harness 错误码解析、host reader 与异常原因**
  以共享解析替换三处手写 `indexOf("\"code\":\"")` 扫描，属审计发现的可运维性修复。
  https://github.com/QwenLM/qwen-code/pull/16826

10. **#16703 fix(acp)：把被拒绝的组信号视为暂态而非关闭失败**
  避免 `EPERM` 这类单次瞬态错误被永久记录为 shutdown 失败。
  https://github.com/QwenLM/qwen-code/pull/16703

11. **#15659 feat(acp)：在不影响 leader 输出的前提下展示 teammate 活动**（三层堆叠 PR 的 C 层）
  https://github.com/QwenLM/qwen-code/pull/15659

## 功能需求趋势

- **统一 Agent 运行时与多 Agent 协作**：#15327（单一 Agent Loop）、#16425（工作流 Agent 权限流）、#15660（子 Agent 上下文）、#15659（teammate 活动展示），以及 `roadmap/multi-agent` 标签的持续出现。
- **终端/渲染体验**：#8662 的 ink→OpenTUI 迁移、#14075 换行孤行，均归在 `roadmap/terminal-ux` 与渲染类目。
- **Channel 与后台自动化**：GitHub Channel 的限流、条件请求、批量 GraphQL（#16691、#16692），以及对外平台 webhook（#16751，钉钉机器人）与 `roadmap/background-automation`。
- **Web Shell 智能化**：#14019 提出按任务选择交互组件或隔离 HTML 可视化，并已有对应验收评估。
- **安全与 Shell 语义**：#16604 主张以真实 bash 解析器替代手写模型，反映 amend/blob 防护的持续演进需求。
- **会话生命周期与持久化**：MCP owner 释放、自定步调 `/loop` 唤醒、会话管理路线（`roadmap/session-management`）。

## 开发者关注点

- **CI 噪音与自动化失败成主要负担**：评论数最高的 Issue 几乎全是机器人自动开的 CI 失败单（#14724、#11680、#11678、#16787、#15185、#16091），存在“无测试可识别”的失败，说明门禁与失败归因机制本身需要治理；多条单子还带有 `autofix/skip`、`autofix/in-progress` 标签。
- **待办积压**：CVE 审计失败（#13078）与部分 CI 问题长期处于 `status/needs-triage`。
- **P1 可用性缺陷**：权限审批不渲染导致挂起（#16425）是本期最需要优先响应的用户可感知问题。
- **性能与成本敏感**：子 Agent 上下文异常膨胀（#15660）、API 预算消耗（#16691/#16692）反映用户对 token 与调用配额的关注。
- **重复的修复模式信号**：#16604 指出手写 shell 模型逐轮补漏，提示维护者需要在底层解析与安全判定上做结构性投入，而非继续打补丁。

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI 社区动态日报 · 2026-11-10

> 数据来源：github.com/Hmbown/DeepSeek-TUI（codewhale-hq/Codewhale）。过去 24 小时无新 Release；17 条 Issue、18 条 PR 有更新。0.10.3 处于发布候选阶段，但尚未正式发布。

## 1. 今日速览

0.10.3 进入发布收尾：维护者 Hmbown 一次性开出多条发布跟踪 Issue（#7284、#7281、#7283、#7282、#7280、#7279、#7278），把 Windows 测试是否全部通过、ACP 双向集成、权限模式统一、插件兼容等列为发布前必须满足的条件。社区侧集中的是针对 CJK（中日韩文本）的真实缺陷修复：按显示宽度排列文本、以全角空格分隔参数、识别中文后的 @ 提及，以及补充中文文档。

## 2. 版本发布

无新版本发布。需注意 #7284 明确：当前源码候选版本只写在 CHANGELOG 的 `[0.10.3]` 下，“未正式发布前不算已发布版本”。

## 3. 社区热点 Issues

1. **#7284 0.10.3 发布跟踪**（OPEN，pinned）— 0.10.3 的总入口，说明剩余工作与参与方式。版本观察必读。
   https://github.com/codewhale-hq/Codewhale/issues/7284
2. **#7281 Windows 测试套件必须在发布候选上通过**（OPEN）— Windows x64 是发布门槛操作系统，要求在确切发布 SHA 上 Windows `Test` 通过、脚本化流程零失败，macOS/Linux 结果不计入。
   https://github.com/codewhale-hq/Codewhale/issues/7281
3. **#6970 `/undo` 在 Windows 上的严重缺陷**（OPEN，os:windows）— 自 10-13 持续至今，5 条评论；摘要显示 macOS 路径已修复，最终 Windows 验证仍开放。长期未闭环的跨平台缺陷。
   https://github.com/codewhale-hq/Codewhale/issues/6970
4. **#7252 Anthropic provider 在 tool_search 后返回 400**（OPEN）— 延迟工具 `web.run` 名称含点号，进入 `tools.N.custom.name` 后请求失败；作者指出与 #4729（仅 MCP 工具名）不重复。影响 Anthropic+工具搜索组合。
   https://github.com/codewhale-hq/Codewhale/issues/7252
5. **#7271 CJK 文本错位与过度截断**（CLOSED）— TUI 多处按字节或 `char` 计宽，而终端按显示列计算（CJK 字符 3 字节、2 列），中英日韩混排时列错位、文本被截得过短。已随对应 PR 关闭。
   https://github.com/codewhale-hq/Codewhale/issues/7271
6. **#7268 斜杠命令参数解析错误**（CLOSED）— `/config` 仅按 ASCII 空格切分，全角空格（U+3000）或 Tab 失效；占位符文本被二次展开；目标文本中的 `budget:` 和以 delete 开头的锚点被误读。
   https://github.com/codewhale-hq/Codewhale/issues/7268
7. **#7279 通过 ACP 把已安装的 agent CLI 作为 Codewhale 会话运行**（OPEN，good first issue）— 覆盖 Claude Code、Codex、Kimi 等，作为完整会话进入侧栏、历史与应用状态。0.10.3 把 ACP 置于优先位置，这是其中一个方向。
   https://github.com/codewhale-hq/Codewhale/issues/7279
8. **#7280 让编辑器通过 ACP 驱动 Codewhale（ACP server）**（OPEN）— `codewhale serve --acp` 走 stdio，Zed 是目前主要支持 ACP 的编辑器。与 #7279 构成 ACP 双向集成。
   https://github.com/codewhale-hq/Codewhale/issues/7280
9. **#7283 单一权限盘（Shift+Tab），默认 Accept Edits**（OPEN，good first issue）— 循环 Ask → Accept Edits → Plan → Auto-Review → Full Access → Ask，新安装默认 Accept Edits，统一权限入口为文档 `docs/MODES.md`。
   https://github.com/codewhale-hq/Codewhale/issues/7283
10. **#7274 健壮性：panic、glob 卡死与错误文本**（OPEN）— 通读 engine/tools/util/repl crates，发现崩溃、挂起与错误输出，每个问题单独提小 PR，本 issue 跟踪。另见 #7270 死代码候选待维护者决定。
   https://github.com/codewhale-hq/Codewhale/issues/7274
   https://github.com/codewhale-hq/Codewhale/issues/7270

## 4. 重要 PR 进展

1. **#7273 fix(tui): 按显示宽度补齐与截断 CJK 文本**（CLOSED）— 对应 #7271，ASCII 渲染不受影响。
   https://github.com/codewhale-hq/Codewhale/pull/7273
2. **#7269 fix(tui): 按任意空白解析斜杠命令参数，只接受格式正确的后缀**（CLOSED）— 对应 #7268。
   https://github.com/codewhale-hq/Codewhale/pull/7269
3. **#7260 fix(tui): 用户命令与参数按任意空白切分**（CLOSED）— 现状仅按 ASCII 空格切分，`/ask 闭包` 这类调用中模型只拿到 `exp...`。
   https://github.com/codewhale-hq/Codewhale/pull/7260
4. **#7258 fix(tui): 识别紧随中文或日文之后的 @ 提及**（CLOSED）— 中日文词间无空格，`请看@...` 的提及此前被忽略。
   https://github.com/codewhale-hq/Codewhale/pull/7258
5. **#7259 fix(tui): 同一文件被提及两次时附加全部行区间**（CLOSED）— 此前仅第一个区间送达模型。
   https://github.com/codewhale-hq/Codewhale/pull/7259
6. **#7256 fix(tui): 会话被替换时清掉逐消息 token 估算**（CLOSED）— `/load` 较小会话后页脚上下文计量仍显示旧值，且下一轮不自纠。
   https://github.com/codewhale-hq/Codewhale/pull/7256
7. **#7276 fix(engine): 以线性时间匹配 search include glob**（CLOSED）— `matches_simple_glob` 对每个 `*` 回溯、无记忆且每次新建 `String`，恶意模式如 `*a*a*a*a*a*a*a*a*a*a*b` 可卡住。
   https://github.com/codewhale-hq/Codewhale/pull/7276
8. **#7275 fix: 配置加载时拒绝负重试延迟而非在重试时 panic**（CLOSED）— `jitter=false` 且 `max_delay`/`initial_delay` 为负时，首次传输重试即 panic。
   https://github.com/codewhale-hq/Codewhale/pull/7275
9. **#7277 feat(app-server,tui): 通过 Runtime API 运行只读内置命令**（OPEN）— `GET /v1/commands` 已声明 `/system`、`/tokens`、`/cost` 为 `binding: "host"` 却无法执行，本 PR 新增 `POST /v1/...` 执行入口。
   https://github.com/codewhale-hq/Codewhale/pull/7277
10. **#7262 experiment(workflow): 证据门控的进化式编码搜索**（OPEN）— 基于 Workflow VM、Fleet dispatch、Runtime worktree 与 subagent receipts；首个提交是可独立评审的宿主持有评估器（冻结 Git/fixture），对应 #7250。
   https://github.com/codewhale-hq/Codewhale/pull/7262
   另：**#7261 从 dialect profile 驱动 Responses 行为**（CLOSED）— 把按 provider 分支的逻辑（Codex/DeepSeek/Concentrate/通用 OpenAI 兼容网关）收拢为方言配置（对应 #5093）。
   https://github.com/codewhale-hq/Codewhale/pull/7261

## 5. 功能需求趋势

- **ACP / 编辑器集成成为主线**：0.10.3 把 ACP 置于优先位置，双向推进（#7279 运行外部 agent CLI、#7280 让编辑器驱动 Codewhale），Zed 是已明确提到的 ACP 客户端。
- **国际化与东亚输入体验**：CJK 显示宽度、全角空格、无空格语言的 @ 提及、多语言下 `/config` 对齐（#7267）、zh_hans 文档（#7265、#7266）形成一条清晰的社区修复链。
- **沙箱与权限模型收敛**：统一权限盘与默认 Accept Edits（#7283）。
- **本地化与可扩展性**：DSH 插件在 0.2.2-rc.1 host 上免改运行（#7278）、原生 DSH host 完整对齐与 web 插件 UI（#7238）。
- **工作流与搜索策略**：存在对候选评估的疑问，见 #7250、#7262（review-only 提案与实验性演进式搜索）。
- **健壮性工程**：panic、glob 复杂度、死代码清理（#7274、#7270）。

## 6. 开发者关注点

- **跨平台尤其 Windows 仍是最大痛点**：`/undo` 严重缺陷（#6970）长期未闭环，Windows 被设为发布门槛系统且验收标准严格（#7281）；而 #7142 提及的自动关闭恢复保护修复已进入验证。
- **终端文本度量语义错误是成簇的系统问题**：字节/字符 vs 显示列的混用同时影响渲染、命令解析、提及识别与配置面板对齐，多由外部贡献者（luochen211、Lstarsky0）提交，说明外部贡献者在内核 TUI 层的参与度在上升。
- **provider 差异是隐蔽缺陷来源**：Anthropic 工具名含点号触发 400（#7252），以及 #7261 试图用方言配置替代按 provider 分支。
- **运行时边界设计受关注**：会话结束时终端与后台任务应随之结束（#7282）；只读内置命令需可通过 Runtime API 执行（#7277）。
- **功能取向待决策的信号**：死代码多为“某项功能的雏形”（#7270），以及搜索候选“当前仅是生成”（#7250），均需维护者明确取舍。

</details>

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar-personal) 自动生成。*