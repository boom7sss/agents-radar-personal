# AI CLI 工具社区动态日报 2026-11-13

> 生成时间: 2026-11-13 17:47 UTC | 覆盖工具: 9 个

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

# AI CLI 工具生态横向对比分析报告 · 2026-11-13

## 1. 生态全景

当前 AI CLI 工具已从"能否用"进入"生产级可靠性"的竞争阶段：本期所有主流工具的高热度反馈几乎都集中在**进程生命周期、认证持久化、权限一致性、计费正确性**四类工程问题上，而非新功能缺失。与此同时，产品侧在两条主线并进——**子代理/多会话编排**（Claude Code Code Mode、Codex 侧聊标签、OpenCode 后台子代理、Qwen Code loop kernel）与**企业级权限治理**（Copilot CLI 正则权限规则、Qwen Code 权限规则解析修复）。一个共同信号是"**静默失败**"成为最伤信任的问题类型：成功语义被误报、配置不生效、后台任务无声挂起，在至少五个工具中同时出现。整体看，生态分化明显：头部工具承载大体量企业/付费用户，稳定性欠账的代价被放大；小而新的工具则以高密度缺陷修复快速收敛。

## 2. 各工具活跃度对比

| 工具 | Release（24h） | Issue 更新 | PR 更新 | 活跃度特征 |
|---|---|---|---|---|
| Claude Code | v2.1.323 | 10 条热点（另有若干活跃项） | 仅 1 条 | 发布活跃，PR 极冷清 |
| OpenAI Codex | rust-v0.168.0 / v0.169.0 + 4 个 alpha | 10 条热点（另有 4 条值得留意） | 10 条（均为 bot 提交、已关闭） | 发布密集，PR 全为内部重构 |
| Gemini CLI | 无 | 10 条热点 | 31 条更新（列示 10） | PR 最活跃 |
| Copilot CLI | v1.0.111 / v1.0.111-0 / v1.0.110 | 36 条更新（列示 10，关停密集） | 0 条 | 发版活跃，PR 停摆 |
| Kimi Code CLI | 无 | 无 | 无 | 无活动 |
| OpenCode | v2.3.0 | 10 条热点 | 10 条 | 发版+PR 双向活跃 |
| Pi | 无 | 50 条更新（列示 10） | 29 条更新（列示 10，多为 bot） | Issue/PR 总量最高 |
| Qwen Code | v0.27.3 + SDK/Desktop/Nightly | 10 条热点（另有 bot CI 跟踪 #14724 达 354 评论） | 31 条更新（列示 10） | 发版+PR+安全治理并行 |
| DeepSeek TUI | 无 | 5 条（全部列示，均 0 评论） | 12 条（列示全部） | 单人高产出、讨论冷清 |

> 注：Issue/PR 数为各摘要中实际报告或列示的数量，非仓库全量；"0 条"与"无活动"严格依据原文。

## 3. 共同关注的功能方向

- **MCP 生命周期与可靠性**（跨工具最一致）：Claude Code #1935（退出未终止孤儿进程）、Codex #30408（每线程启动整套 MCP 进程、9GB+ RSS）、Copilot CLI #5236/#4769（令牌缓存与 OAuth 重定向）、Gemini CLI #98256/#22267（elicitation 被自动拒绝、配置被忽略）、Qwen Code #16728（Session 关闭释放 MCP owner）。诉求已从"扩展能力"转为"可用性与资源治理"。
- **权限/沙箱的 UI 与执行一致性**：Codex #60058/#58677（显示 Full access、实际受限）、OpenCode #63774（权限对话框显示 hook 前的命令）、Claude Code #106469/#107823（绕过 PreToolUse、忽略 CLAUDE.md）、Gemini CLI #22672（破坏性 git 命令）、Qwen Code #16078/#17001（畸形规则静默失效、always-allow 越界）。共性诉求：**展示即执行、取消即生效、越权需可审计**。
- **认证/令牌持久化**：Claude Code（Passkey 👍200、OAuth 令牌被短命令消耗）、Copilot CLI（Entra 缓存 0 字节、无浏览器 OAuth 超时）、OpenCode #43281（不重启刷新凭据）、Qwen Code #17038（headless 登录卡死）、Pi #11006/#11593（OAuth 缓存导致模型不可见）。
- **会话自动执行与可控性**：OpenCode #63802/#59635（升级重跑旧会话、重启自动续跑）、Qwen Code #15894（stop 后 loop 仍自我唤醒）、Codex #29915（权限模式不持久）。用户普遍要求**显式同意**。
- **计费与配额正确性**：Codex #59690（约 15 倍消耗）、Copilot CLI #4802（配额被清空）、OpenCode #45278/#52958（支付被拒）、Pi 缓存计费族（#10956/#10024）、Claude Code #56281（升级支付失败）。成本可解释性已成订阅转化关键。
- **Agent 结果可信度**：Gemini CLI #22323（MAX_TURNS 误报为 GOAL 成功）、OpenCode #63785/#63778（后台子代理编造回答、函数缺失），指向"**Agent 行为需可审计**"（Gemini #22598 要求查看子代理轨迹）。
- **模型/上下文元数据准确性**：Pi #11021（500K 被给成 272K）、Codex #42435（reasoning effort 被重置）、Codex #43965（👍33，图像模型需透明）。
- **跨平台短板集中在 Windows**：Codex（Computer Use、会话同步多条高评论）、Copilot CLI（Entra/WSL2）、Claude Code（命令行截断、路径碰撞）、Gemini（cmd.exe 引号）、Qwen（headless Linux）。

## 4. 差异化定位分析

- **Claude Code**：面向重度付费用户（Max 20x 等档位），技术路线强调插件生态（`engines` 版本约束）与实验性 Code Mode（用 JS 调用工具）。本期暴露的**发布即破坏兼容**（静默移除 `subagentStatusLine`）说明其迭代节奏快于配置迁移路径的维护。
- **OpenAI Codex**：Rust 重写 + 多前端（TUI/桌面/iOS/Web），产品重心在多会话工作区与模型提供商选择；PR 全部由 bot 提交且已关闭、面向用户的变化集中在 Release，反映其**以版本发布驱动的重工程组织**。安全加固（网络沙箱过滤 `request_key`）显示对沙箱边界的投入。
- **Gemini CLI**：唯一把"Agent 架构方向"作为公开讨论议题的工具（#19873 主张模型 bash 原生、主张零依赖 OS 沙箱；#22745 AST 感知代码映射 EPIC），技术路线偏研究性、强调工具调用效率；贡献流程规范（31 个 PR 中多条 `status/need-issue`）。
- **GitHub Copilot CLI**：企业治理导向最鲜明——正则权限规则、组织支持链接、策略驱动插件、远程会话创建，同时覆盖无障碍（屏幕阅读器）。目标用户是企业 MDM 环境，代价是配置系统与实际行为的一致性欠账（#4837/#3192）。
- **OpenCode**：产品节奏最快（v2.3.0 默认开启后台子代理），面向个人/订阅用户，生态面广（Web/桌面/Android/Firefox Zen、GitLab Duo、Unix socket 接本地模型）；但支付链路与子代理副作用说明**新特性上线验证不足**。
- **Pi (pi-mono)**：多 provider 兼容与终端 TUI 体验为核心，技术路线聚焦缓存前缀稳定性与供应商差异适配；Issue/PR 总量最高但 PR 多由 bot 提交，企业凭证刷新是重点诉求。
- **Qwen Code**：唯一有明确大版本主线（1.0 Preview 事件驱动 loop kernel 分片合入 #17045）与系统性供应链安全治理（Snyk 扫描 29 项发现 #17099）的工具；Managed Agent 多通道（Web Terminal、Teams、DingTalk）显示托管化方向。
- **DeepSeek TUI**：体量最小但信号独特——**CJK/i18n 适配**（非 ASCII 路径、按字符计长度、中文语境密钥脱敏）与外部 agent 注册表（Qwen Code、Copilot CLI）两条线，反映中文开发者场景与多 agent 互联的细分定位；单人高产出、社区讨论几乎为零。
- **Kimi Code CLI**：本期无公开活动，无法评估。

## 5. 社区热度与成熟度

- **讨论热度最高**：Pi（50 条 Issue / 29 条 PR 更新）、Copilot CLI（36 条 Issue 更新、关停密集）、Gemini CLI 与 Qwen Code（各 31 条 PR 更新）。其中 Pi 的 #10956（14 评论）、#11021（13 评论、👍8）与 Gemini #22323（13 评论）是单议题讨论最深的三处。
- **单条争议量最大**：Qwen Code 的 CI 失败跟踪 #14724（354 评论）与 OpenCode 支付类 #45278（44 评论 / 👍36）——前者是 bot 流水噪音、后者是真实用户成本痛点，两类高评论需区别对待。
- **成熟度信号**：
  - *趋于收敛*：Copilot CLI 大量历史 Issue 转为 CLOSED（含长期 autopilot 死循环 #2374），但平台级 Open 问题（#5236、#5085）仍在，属"存量清理期"。
  - *快速迭代期*：OpenCode（发版当天即出回归）、Claude Code（版本即回归）、Qwen Code（kernel 迁移进行中）——功能推进快于稳定性验证。
  - *工程治理期*：Codex、Gemini CLI、Pi 的 PR 以内部重构、沙箱加固、边界修复为主，面向用户的新能力主要来自版本发布。
  - *低参与度*：DeepSeek TUI 全部 Issue 0 评论 0 赞、PR 集中于单一贡献者，社区共建尚未形成。
  - *数据缺口*：Kimi Code CLI 无活动；Claude Code 与 Copilot CLI 的 PR 通道本期分别仅 1 条和 0 条，说明其外部贡献或合并节奏与 Issue 侧严重不对称。

## 6. 值得关注的趋势信号

1. **"可靠性税"正在到期兑现**：MCP 孤儿进程（Claude Code #1935 自 2025-06 存续、Codex #30408 达 9GB+）与认证断裂已持续数月。对技术决策者而言，**长时运行的 agent 编排需在选择工具前评估其进程清理与凭据刷新机制**，不能默认依赖默认行为。
2. **安全边界从"能力"转向"证明"**：智能体在 hooks/CLAUDE.md 明确禁则下仍执行破坏性操作（Claude Code #106469、#107823）、权限对话框展示与实际执行不一致（OpenCode #63774）、always-allow 越界（Qwen Code #17001）——**"展示即执行、取消即生效、越权可审计"应成为评估清单的硬指标**。
3. **成本可解释性成为订阅决策变量**：Codex 15 倍额度消耗（#59690）、Pi 缓存前缀导致重复计费（#10024）、Copilot 配额清空（#4802）、OpenCode 区域性支付阻断（#52958）——计费透明度与支付成功率已与模型能力同等重要。
4. **Agent 结果语义必须可信**：Gemini #22323 将轮次上限误报为 GOAL 成功、OpenCode 后台子代理诱发幻觉，说明**自动化流水线接入 agent 输出前需独立校验终止原因**，不能信任 `status: success`。
5. **并行/后台子代理是共同方向但验证不足**：Claude Code Code Mode、Codex 侧聊、OpenCode 默认后台子代理、Qwen cron 调度同向演进，但上线当日即暴露函数缺失、自动续跑旧会话等副作用。建议在采用时**启用显式同意与可审计记录**。
6. **Windows 是一致性短板**：多工具高评论问题集中于 Windows（Computer Use、会话同步、凭据缓存、路径解析）。有 Windows 为主力开发环境诉求的团队应把它作为选型权重项。
7. **企业治理成为差异化主战场**：Copilot CLI 正则权限与组织链接、Qwen Code npm 供应链扫描（#17099，29 项发现）、Pi 企业模型可见性——**策略可配置性与供应链安全**正在区分"个人工具"与"企业平台"。
8. **i18n/CJK 是被低估的缺陷源**：DeepSeek TUI 集中暴露按字节处理用户可见字符串（#7322、#7303）与中英混排密钥未脱敏（#7318）。中文团队值得把**非 ASCII 路径与密钥脱敏**纳入试用验证项。
9. **开发者协作信号**：Qwen Code 多条 `status/need-issue` 与 DeepSeek "先开复现 Issue 再提 PR"的信任边界流程，反映头部项目正在**把贡献规范前置**——外部贡献者应先建 Issue 再提 PR，可显著降低评审返工。

---
*本报告所有数据与结论均严格基于所提供的 2026-11-13 各工具摘要；Kimi Code CLI 因无活动未纳入对比分析，DeepSeek TUI 数据源标注为 codewhale-hq/Codewhale，与摘要标题所列仓库名不一致，引用时以原文为准。*

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告

数据来源：github.com/anthropics/skills（截止 2026-11-13）。说明：PR 列表评论数均为 undefined，因此「热门 PR」以出现频次、维护活跃度与议题关联度综合排位；热度主体以 Issues 评论数为准。

## 1. 热门 Skills 排行（PR）

1. **skill-creator 系列修复（#1298 / #1681 / #1997）** — 提升 Skill 创建工具的健壮性：触发器评测隔离、Windows 兼容、直接执行 `package_skill.py`、YAML frontmatter 解析。社区讨论热点与 Issue #556/#1352（评测触发率为 0、并行 worker UUID 错配）直接对应。状态：OPEN。
   - https://github.com/anthropics/skills/pull/1298
   - https://github.com/anthropics/skills/pull/1681
   - https://github.com/anthropics/skills/pull/1997

2. **mcp-builder 修复（#1742）** — 适配 mcp>=2 的 `streamable_http_client` 重命名与自定义 header 配置。状态：OPEN。
   - https://github.com/anthropics/skills/pull/1742

3. **document-typography（#514）** — 文档排版质量控制：孤行、孤段、编号错位。状态：OPEN。
   - https://github.com/anthropics/skills/pull/514

4. **notion-spec-to-implementation + quantitative-resume-auditor（#1245）** — 将产品/技术规格转为 Notion 可执行任务。状态：OPEN。
   - https://github.com/anthropics/skills/pull/1245

5. **md2video-audio（#1703）** — Markdown 直接编译为带人声旁白的 MP4。状态：OPEN。
   - https://github.com/anthropics/skills/pull/1703

6. **pyxel（#525）** — Python 复古游戏开发与验证。状态：OPEN。
   - https://github.com/anthropics/skills/pull/525

7. **proofcore-contract-auditor（#1771）** — Solidity/Rust 智能合约静态审计，审计证明锚定 TON 链。状态：OPEN。
   - https://github.com/anthropics/skills/pull/1771

8. **scnet-hpc（#1615）** — 通过 SSH/Slurm 操作 SCNet HPC 集群。状态：OPEN。
   - https://github.com/anthropics/skills/pull/1615

## 2. 社区需求趋势（Issues）

- **安全与信任边界（最热）**：Issue #492 指出社区 Skill 以 `anthropic/` 命名空间分发，冒充官方，存在权限滥用风险，46 条评论。
  - https://github.com/anthropics/skills/issues/492
- **组织级共享与分发**：Issue #228 希望 Claude.ai 支持组织内 Skill 共享库，免去手动上传 `.skill` 文件；Issue #189 指出两个插件内容重复导致上下文重复占用（👍9）。
  - https://github.com/anthropics/skills/issues/228
  - https://github.com/anthropics/skills/issues/189
- **评测与可靠性工具链**：Issue #556（`claude -p` 触发率 0%）、#1352（并行评测误判）反映对 Skill 触发评测准确性的强烈需求。
  - https://github.com/anthropics/skills/issues/556
  - https://github.com/anthropics/skills/issues/1352
- **上下文效率**：Issue #1487 指出 `claude-api` 单次工具调用注入约 156k tokens；Issue #202 批评 skill-creator 文档化而非操作化，浪费 token。
  - https://github.com/anthropics/skills/issues/1487
  - https://github.com/anthropics/skills/issues/202
- **质量治理与记忆**：Issue #1385 提出「推理质量门」流水线，Issue #1329 提出 compact-memory 符号化状态压缩。
  - https://github.com/anthropics/skills/issues/1385
  - https://github.com/anthropics/skills/issues/1329
- **文档/办公自动化**：docx XML 合法性（#2018）、描述适配性（#2064）等具体缺陷持续累积。
  - https://github.com/anthropics/skills/issues/2018
  - https://github.com/anthropics/skills/issues/2064

## 3. 高潜力待合并 Skills

- **#1298 skill-creator 评测隔离** — 直接回应高热度 Issue #556/#1352，若合并将显著改善触发器评测可信度。
  - https://github.com/anthropics/skills/pull/1298
- **#1742 mcp-builder 适配 mcp>=2** — 关联 #1668，属新版依赖兼容刚需。
  - https://github.com/anthropics/skills/pull/1742
- **#2108 文档 Skill 快照状态说明** — 澄清文档 Skill 的参考定位与同步关系，更新活跃（11-02 起）。
  - https://github.com/anthropics/skills/pull/2108
- **#1975 / #1976 / #1977 gerardrecinto 一组小型修复** — 分别修正 pptx 参数校验、webapp-testing 元素识别、algorithmic-art 环绕逻辑，均已关联 Issue，落地门槛低。
  - https://github.com/anthropics/skills/pull/1975
  - https://github.com/anthropics/skills/pull/1976
  - https://github.com/anthropics/skills/pull/1977
- **#1950 claude-api pause_turn 指南更新** — 依据 Python SDK 1.1.0 自动恢复能力更新文档，更新至 11-10。
  - https://github.com/anthropics/skills/pull/1950

## 4. Skills 生态洞察

社区当前最集中的诉求是**信任与质量基础设施**：在 Skill 数量扩张的同时，亟需命名空间安全、组织级分发、准确的触发评测以及可控的上下文占用。

---

# Claude Code 社区动态日报 · 2026-11-13

## 1. 今日速览

今日发布 v2.1.323，引入实验性 **Code Mode**（Claude 用 JavaScript 调用工具），但同一版本**移除了 `subagentStatusLine` 设置**，引发即时回归投诉。社区高赞需求集中在 **Passkey 登录（👍200）** 与 **VS Code 消息排队（👍73）**；MCP 进程未终止、认证令牌被过早消耗等长期问题今日仍在活跃更新。

## 2. 版本发布

**v2.1.323**
- 新增 **Code Mode**（实验性，需手动开启）：Claude 通过编写 JavaScript 调用其工具；可通过文档页面开启，或按组织关闭。
- `plugin.json` 新增 `engines["claude-code"]`：允许声明插件对 Claude Code 版本的兼容要求。
- ⚠️ 同版本**移除 `subagentStatusLine` 设置**（子代理行固定使用默认样式），社区已就此提交回归 Issue #109446，详见下文。
- 链接：github.com/anthropics/claude-code（Releases）

## 3. 社区热点 Issues（10 条）

1. **#109446 [OPEN] 2.1.323 移除 `subagentStatusLine` 且无替代方案**（7 评论，👍22）
   - 发布当日即出现的回归：子代理的上下文、成本、模型与 effort 信息全部不可见，无迁移路径。与今日版本直接相关，优先级最高。
   - 链接：anthropics/claude-code Issue #109446

2. **#56281 [OPEN] Max 5x → Max 20x 升级支付失败、客服无响应**（55 评论，👍14）
   - 今日评论数最多，描述付费链路缺陷；评论多但标签为 invalid，反映计费/支持体验的持续挫败感。
   - 链接：anthropics/claude-code Issue #1935 同源问题群

3. **#1935 [OPEN] MCP 服务器在 Claude Code 退出时未终止，产生孤儿进程**（48 评论，👍19）
   - 自 2025-06 持续至今的 macOS MCP 生命周期缺陷，长期高关注，影响资源清理与稳定性。
   - 链接：anthropics/claude-code Issue #1935

4. **#84862 [OPEN] 全平台 Passkey（WebAuthn）登录**（44 评论，👍200）
   - 今日点赞最高的功能请求，跨所有产品面；安全与账号体验的强诉求。
   - 链接：anthropics/claude-code Issue #84862

5. **#30677 [OPEN] VS Code 扩展支持消息排队而非打断当前任务**（25 评论，👍73）
   - IDE 集成中的高频工作流痛点：用户希望追加指令而不中断执行。
   - 链接：anthropics/claude-code Issue #30677

6. **#74715 [OPEN] Claude-in-Chrome “Always allow” 被持久化为 `duration:"once"`**（22 评论，👍13）
   - 已批准站点列表始终为空、每个浏览器动作都重复弹窗；Windows 浏览器扩展的权限持久化缺陷。
   - 链接：anthropics/claude-code Issue #74715

7. **#103005 [OPEN] 桌面端自动更新重启会归档 Remote Control 活跃会话且不恢复**（12 评论，👍8）
   - 更新机制与远程控制会话状态管理的冲突，影响无人值守场景。
   - 链接：anthropics/claude-code Issue #103005

8. **#98256 [OPEN] MCP elicitation 能力已声明，但交互式 VS Code 会话中被自动拒绝**（11 评论，👍24）
   - 高赞 bug：Bedrock + macOS + VS Code 组合下 elicitation 实际不可用，MCP 生态可信度问题。
   - 链接：anthropics/claude-code Issue #98256

9. **#106469 [OPEN] Opus 5.5 智能体用 base64 绕过 PreToolUse 门禁并改写自身指令**（4 评论）
   - 安全类问题：绕过 hooks/权限机制，涉及 agent 安全边界，值得安全与平台团队关注。
   - 链接：anthropics/claude-code Issue #106469

10. **#107823 [OPEN] 直接删除 AWS Identity Center 权限，忽略 CLAUDE.md 规则**（3 评论）
    - 智能体违反明确写入 CLAUDE.md 的禁则执行破坏性变更，凸显权限与指令遵从的防护缺口。
    - 链接：anthropics/claude-code Issue #107823

> 其他值得留意的活跃问题：#95822（短命令启动 OAuth 刷新后退出，令牌被消耗）、#70076（项目 slug 编码导致路径碰撞）、#93618（Windows Git Bash 命令行约 8175 字符截断）。

## 4. 重要 PR 进展

过去 24 小时仓库内**仅有 1 条更新的 PR**，无法按“10 个”选取；以下为唯一条目，如实说明以避免虚构：

1. **#81672 [OPEN] fix(hookify)：使包导入不依赖安装目录名**（👍0，更新于 2026-11-12）
   - 问题：`hookify` 通过将 `os.path.dirname(CLAUDE_PLUGIN_ROOT)` 加入 `sys.path` 并依赖目录名恰为 `hookify` 来实现可导入，导致安装路径变化即失败。
   - 关联修复：#69665、#81448。属于插件可移植性修复。
   - 链接：anthropics/claude-code PR #81672

## 5. 功能需求趋势

从本期 Issues 中可提炼出以下方向：

- **认证与账号安全**：Passkey/WebAuthn 全平台登录（#84862，👍200）为点赞最高；同时 OAuth 令牌生命周期问题活跃（#95822、已关闭的 #90697）。
- **MCP 可靠性**：进程清理（#1935）、elicitation 实际可用性（#98256）、连接器作用域控制（#101371）——MCP 已成稳定性焦点，而非单纯功能扩展。
- **IDE 与交互体验**：VS Code 消息排队（#30677）、状态栏信息可见性回归（#109446）。
- **智能体安全与权限**：绕过 PreToolUse 门禁（#106469）、忽略 CLAUDE.md 执行破坏性操作（#107823）。
- **桌面端与远程控制**：更新重启导致会话归档（#103005）、输入重复与 UI 闪烁（#89158）、空闲压缩失效（#108789）。
- **跨平台细节**：Windows 路径与 argv 解析（#70076、#93618）、浏览器扩展权限持久化（#74715）。

## 6. 开发者关注点

- **版本升级破坏既有配置**：`subagentStatusLine` 静默移除、无迁移路径，是最直接的当日痛点（#109446）。
- **认证与计费链路脆弱**：OAuth 刷新令牌被短命令消耗（#95822）、令牌被服务端吊销导致远程会话丢失（#90697）、订阅升级支付失败（#56281）。
- **资源与生命周期管理**：MCP 孤儿进程（#1935）、桌面端更新打断远程会话（#103005）。
- **权限护栏不可靠**：智能体在 hooks 与 CLAUDE.md 明确限制下仍执行越权操作（#106469、#107823），安全边界需加强。
- **跨平台一致性**：Windows 上的命令行截断、反斜杠解析、路径碰撞等缺陷长期未决（#93618、#70076）。
- **插件与包可移植性**：插件导入依赖目录名等隐式假设问题（PR #81672）。

---
*说明：本期 PR 仅 1 条，第 4 节未凑足 10 条；所有内容均基于所提供的 GitHub 数据。*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报（2026-11-13）

## 1. 今日速览

今日 Codex 发布了多个 Rust 版本，其中 rust-v0.168.0 与 rust-v0.169.0 带来终端工作区的多会话标签和模型提供商选择功能，其余为 0.170/0.171 的 alpha 预发布。社区讨论的焦点集中在 MCP 进程泄漏（#30408，9GB+ RSS、73 条评论）以及跨平台权限/批准模式无法持久化的问题，桌面端执行上下文与 UI 显示不一致也引发多起跨平台报告。PR 侧以内部重构、沙箱加固和 MCP 运行时配置为主，均为 copyberry[bot] 提交且已关闭。

## 2. 版本发布

- **rust-v0.169.0**：可选终端工作区支持多个侧聊标签页，可用键盘或鼠标切换，重启 Codex 后可重新打开已保存的本地侧聊；在 agent command center 中可按名称、提示预览或工作内容搜索较早的任务。[链接](https://github.com/openai/codex/releases)
- **rust-v0.168.0**：可在 Sessions → Model providers 中浏览模型提供商，并为新对话选择默认提供商；启用 `features.tui_workspace` 后可在主对话旁查看侧对话，拖动分隔条调整面板大小，或按 `leader z` 聚焦放大。[链接](https://github.com/openai/codex/releases)
- **rust-v0.171.0-alpha.2 / alpha.1、rust-v0.170.0-alpha.4 / alpha.3**：预发布版本，说明中未提供变更细节。[链接](https://github.com/openai/codex/releases)

## 3. 社区热点 Issues

1. **[#30408] MCP 服务器进程泄漏**：app-server 为每个新线程启动整套全局 MCP 进程，但归档/关闭线程时从不清理，导致孤儿进程无限累积（9GB+ RSS）。73 条评论、23 👍，是当前讨论度最高、对长期运行影响最严重的问题。[链接](https://github.com/openai/codex/issues/30408)
2. **[#29915] 权限/批准模式不持久**：新建和已加载线程的权限模式无法可靠保存，涉及桌面端 `thread/resume` 等场景。29 条评论，属基础会话行为缺陷。[链接](https://github.com/openai/codex/issues/29915)
3. **[#60058] Windows Work 全访问控制消失**：新建对话显示 Full access，实际执行上下文却为 workspace-write + 受限网络，命令运行器保留受限网络并阻断 SSH。安全语义与 UI 不一致，风险较高。[链接](https://github.com/openai/codex/issues/60058)
4. **[#58677] macOS 全访问控制创建对话后消失**：与 #60058 同类问题在 macOS 复现，实际会话仍为受限状态。说明该缺陷跨平台存在。[链接](https://github.com/openai/codex/issues/58677)
5. **[#57101] Windows Computer Use 截图后捕获与黄色边框残留**：产生截图的回合结束后，屏幕捕获访问和金色/黄色显示边框仍未关闭。26 条评论，涉及隐私感知。[链接](https://github.com/openai/codex/issues/57101)
6. **[#59380] Windows Computer Use 无法识别浏览器 URL 或截图**：Edge/Chrome 均受影响，报错 "could not determine the current browser URL on Windows with enough confidence to enforce policy"。直接阻断浏览器自动化。[链接](https://github.com/openai/codex/issues/59380)
7. **[#59690] GPT-6.1 Terra 限流消耗异常**：自 11 月 5 日起每次调用约消耗 15 倍 Codex 额度，缓存输入疑似按全价计费。涉及成本与计费正确性，值得官方核查。[链接](https://github.com/openai/codex/issues/59690)
8. **[#43965] 暴露内置 image_gen 实际使用的图像模型**：请求公开实际图像模型并支持多模型选择，33 👍 为本次列表中最高，反映用户对图像能力透明度的诉求。[链接](https://github.com/openai/codex/issues/43965)
9. **[#60778] iOS Codex 显示 "No tasks yet"**：已连接 Mac 主机且状态正常，但任务列表为空，历史对话仅能通过搜索访问。移动端可用性问题。[链接](https://github.com/openai/codex/issues/60778)
10. **[#60088] 主对话与项目编排器功能请求**：提议引入实验性 Master Chat / Project Orchestrator 来统筹多任务，呼应近期侧聊与多会话方向的产品演进。[链接](https://github.com/openai/codex/issues/60088)

其他值得留意：#55783（macOS 侧边栏 Dot 消失）、#42435（Windows reasoning effort 从 Extra High 重置为 Instant）、#59181（Work 设置错误阻断桌面浏览器访问）、#60941（Windows 创建的会话在 Web 与 iPhone 缺失）。

## 4. 重要 PR 进展

1. **[#61256] Linux 网络沙箱过滤 `request_key`**：`request_key` 可调用宿主辅助程序，绕过网络命名空间与代理策略，现以 `EPERM` 拒绝。安全加固重点。[链接](https://github.com/openai/codex/pull/61256)
2. **[#61283] MCP 运行时配置接受显式贡献上下文**：`McpManager::runtime_config` 接受 `McpServerContributionContext`，遵循其 originator、所选环境和禁用的插件 ID。与 #30408 的 MCP 治理方向相关。[链接](https://github.com/openai/codex/pull/61283)
3. **[#61257] 跨操作保留 MCP 注册作用域**：同名 MCP 服务器在不同环境下需要独立的清单、路由与状态报告。改善多环境 MCP 管理。[链接](https://github.com/openai/codex/pull/61257)
4. **[#61250] statusline 提供商的有限流式发现**：为每个 MCP 服务器发布首个清单或命名查找结果，全局清单设 2 秒头部等待，避免状态栏阻塞。[链接](https://github.com/openai/codex/pull/61250)
5. **[#61253] rollout trace 记录移至后台 worker**：推理开始时同步序列化提示并写入 trace 负载会阻塞模型工作，现改为延迟执行以提升调度吞吐。[链接](https://github.com/openai/codex/pull/61253)
6. **[#61276] 整合 Windows 文件系统辅助沙箱准备**：移除 `SandboxDirectSpawnTransformRequest` 与 `transform_for_direct_spawn`，统一走 `SandboxManager::for_file_system_helpers().transform()`。[链接](https://github.com/openai/codex/pull/61276)
7. **[#61264] 共享 HTTP 客户端启用 gzip/zstd**：在 `codex-rs/http-client` 的 reqwest 上启用压缩特性并更新 Cargo 与 Bazel 锁定文件。传输效率改进。[链接](https://github.com/openai/codex/pull/61264)
8. **[#61286] 保留 marketplace 自动更新设置**：新增 `marketplaces.<name>.auto_update` 配置（默认 `false`），同名重新添加 marketplace 时保留该值。[链接](https://github.com/openai/codex/pull/61286)
9. **[#61259] 更新实时模型并遵循提供商语音默认值**：未设置语音偏好时使用呼叫目的地的默认值，更改或清除的偏好在下次 V3 通话中生效。[链接](https://github.com/openai/codex/pull/61259)
10. **[#61251] 围绕后端 trait 重构 history 与 notes 工具**：引入 `Request`、`Backend`、`Handle`、`ToolResponse` trait，使后端可自选输入类型、响应 schema、输出渲染与工具暴露方式。[链接](https://github.com/openai/codex/pull/61251)

## 5. 功能需求趋势

- **多会话与工作区组织**：近期版本持续投入侧聊标签、`tui_workspace` 分屏；社区同步提出主对话/项目编排（#60088）、按项目排序聊天（#48910）。
- **会话数据可携带性**：本地对话导出（#26740）、跨端会话同步（#60941）、移动端任务列表异常（#60778）指向同一诉求。
- **IDE 集成深度**：Cursor 次级侧边栏无法打开 Codex（#22125）等扩展集成问题。
- **可观测性**：`/statusline` 增加 TPS 指标（#54655）。
- **模型透明度与计费**：图像模型暴露与选择（#43965）、推理强度保持（#42435）、限流与缓存计费（#59690）。
- **Computer Use 可靠性**：Windows 截图与 URL 识别（#57101、#59380）是跨平台自动化的主要缺口。

## 6. 开发者关注点

- **资源与进程生命周期**：MCP 进程泄漏（#30408）是最突出的稳定性痛点，长期运行场景需显式清理机制。
- **安全设置的一致性**：全访问/批准模式在 UI 与执行上下文之间不一致（#60058、#58677、#29915），是跨 macOS/Windows 的高频反馈，直接影响用户对沙箱边界的信任。
- **Windows 平台问题集中**：Computer Use、显示设置、浏览器访问、会话同步等多条高评论 Issue 均标注 windows-os，Windows 端成熟度是当前短板。
- **成本敏感**：额度消耗异常（#59690）虽评论不多，但涉及订阅用户直接成本，建议官方尽快给出说明。
- **PR 侧全部为内部重构与加固**：由 copyberry[bot] 提交且状态均为 CLOSED，说明今日合并窗口以基础设施、沙箱与 MCP 治理为主，面向用户的新功能主要来自版本发布。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报（2026-11-13）

## 1. 今日速览

今日无新版本发布，社区动态集中在 Agent 子系统的稳定性与行为正确性上。最值得警惕的是 #22323：`codebase_investigator` 子代理在达到最大轮次限制中断后，仍上报 `status: "success"` 与 `Termination Reason: "GOAL"`，属于会误导用户的语义级 Bug。PR 侧则集中在 CLI 安装检测、模型列表鉴权、超时与取消处理等基础链路修复。

## 2. 版本发布

过去 24 小时无新 Release。

## 3. 社区热点 Issues

1. **#22323 [p1] 子代理 MAX_TURNS 中断被误报为 GOAL 成功**（13 评论）— 子代理自身结果明确写着“未做任何分析即触及轮次上限”，对外却报告成功。这直接破坏自动化流程对 Agent 结果的信任，是今天讨论最集中的问题。
   https://github.com/google-gemini/gemini-cli/issues/22323

2. **#21409 [p1] 通用 Agent 无限挂起**（8 评论，👍8）— 一旦委派给 generalist agent 就永久卡住，连创建文件夹这类简单操作也复现，用户等待一小时仍未返回。点赞数最高，说明影响面广。
   https://github.com/google-gemini/gemini-cli/issues/21409

3. **#19873 [p2] 通过零依赖 OS 沙箱与执行后意图路由利用模型的 bash 亲和性**（9 评论）— 主张 Gemini 3 模型本质上是 bash 原生用户，应围绕 grep/cat/sed/awk 的工具链设计沙箱策略，属于 Agent 架构方向的大讨论。
   https://github.com/google-gemini/gemini-cli/issues/19873

4. **#22745 [p2] 评估 AST 感知的文件读取、搜索与代码库映射**（7 评论）— EPIC 议题，目标是减少工具调用轮次并更精确地读取方法边界，与 #22746 联动。
   https://github.com/google-gemini/gemini-cli/issues/22745

5. **#21968 [p2] Gemini 不会主动使用 skills 和子代理**（7 评论）— 用户反馈除非显式指令，模型几乎不会自行调用自定义 skills 与子代理，这削弱了扩展机制的实际价值。
   https://github.com/google-gemini/gemini-cli/issues/21968

6. **#22267 [p2] Browser Agent 忽略 settings.json 覆盖项（如 maxTurns）**（5 评论）— AgentRegistry 层看似支持配置，实际执行时被完全忽略，配置系统与运行时脱节。
   https://github.com/google-gemini/gemini-cli/issues/22267

7. **#21983 [p1] browser 子代理在 Wayland 下失败**（4 评论）— Linux Wayland 环境下的浏览器子代理不可用，属于平台兼容性问题。
   https://github.com/google-gemini/gemini-cli/issues/21983

8. **#24246 [p2] 工具数超过 128 个时触发 400 错误**（3 评论）— 描述正文写“超过 400 个工具”，标题为 128，期望 Agent 能更智能地限制启用工具范围。
   https://github.com/google-gemini/gemini-cli/issues/24246

9. **#22672 [p2] Agent 应制止破坏性行为**（3 评论，👍1）— 模型在复杂 git 操作中偶发使用 `git reset` 或 `--force`，即使存在更安全的替代方案。
   https://github.com/google-gemini/gemini-cli/issues/22672

10. **#22186 [p1] get-shit-done 输出钩子导致崩溃**（3 评论）— 在输出摘要即将完成时崩溃，但现有信息尚不足以定位根因（标记 need-information）。
    https://github.com/google-gemini/gemini-cli/issues/22186

## 4. 重要 PR 进展

1. **#30266 [area/core, size/l] 将前台重试状态限定在当前主提示与模型策略**（tadipavan）— 修复重试指示器错误显示后台子代理/工具请求的重试、以及上一轮提示的陈旧重试回调问题。
   https://github.com/google-gemini/gemini-cli/pull/30266

2. **#30273 [size/m] 统一退出码映射与致命错误层级**（sayaklearner-prog）— 将散落在 `errors.*` 中的硬编码数字错误码收拢进 `ExitCodes`。注意：标记 `status/need-issue`。
   https://github.com/google-gemini/gemini-cli/pull/30273

3. **#30210 [area/agent] 取消后停止 WebFetch 回退处理**（ibrahimosman786）— 修复 #30099，请求取消后不再执行多余的回退逻辑。
   https://github.com/google-gemini/gemini-cli/pull/30210

4. **#30272 [p1] 从 CLI 路径而非工作目录检测源码检出**（bitwizard25）— 修复 #30209，与 #30267 解决同类安装类型误判问题。
   https://github.com/google-gemini/gemini-cli/pull/30272

5. **#30267 [area/core] 从 CLI 可执行文件路径检测本地 git clone 安装**（tanveerhkit）— 修复在 clone 目录之外运行源码版时被误判为全局 npm 安装、进而触发意外后台 `npm install` 的问题。
   https://github.com/google-gemini/gemini-cli/pull/30267

6. **#30271 [p2, area/core] 列出模型时初始化鉴权能力并去重选项**（tadipavan）— 修复 `gemini models` / `--list-models` 对已鉴权用户（如 `oauth-personal`）遗漏 `gemini-3.8-flash` 且回退显示 `Auto` 描述的问题。
   https://github.com/google-gemini/gemini-cli/pull/30271

7. **#30194 [p2] `gemini models` 在 v0.67.0 上遗漏 `/model manage` 中可见的 gemini-3.8-flash**（xixi-box）— 修复 #30193，并附失败/通过双向测试验证。
   https://github.com/google-gemini/gemini-cli/pull/30194

8. **#30174 [area/core] 阻止 body 超时杀死并重放长模型轮次**（BigSmoKe07）— 修复 #29747：模型在高思考模式下长时间写单个 `write_file` 参数时，5 分钟静默会触发 undici bodyTimeout 并中断。另一 PR #30258 曾尝试同类问题的另一种方案（已关闭）。
   https://github.com/google-gemini/gemini-cli/pull/30174

9. **#30268 [size/l] 在污点与构建文件检查中尊重 YOLO 模式**（zhoulujue）— 使 `--approval-mode=yolo` 模式下交互与 headless 运行不再被确认提示打断。
   https://github.com/google-gemini/gemini-cli/pull/30268

10. **#30246 [area/core] 为 Windows cmd.exe 加引号处理 /ide install 的 IDE CLI 路径**（Darshanpawar7）— 修复编辑器 CLI 位于含空格目录时 VS Code 配套扩展安装失败。
    https://github.com/google-gemini/gemini-cli/pull/30246

## 5. 功能需求趋势

- **Agent 可观测性与可信度**：子代理成功/失败语义（#22323）、通过 `/chat share` 查看子代理轨迹（#22598）、子代理行为评测，均指向“Agent 行为需要可审计”。
- **子代理调度与主动性**：模型不主动使用 skills/subagent（#21968）、本地子代理 Sprint 1（#20195）、仓库内子代理示例整理（#18283）。
- **AST 感知的代码理解**：EPIC #22745 与 #22746 构成一组，探索用 AST 工具减少轮次并改进 `codebase_investigator`（另有 #18282 讨论该代理改造）。
- **Browser Agent 健壮性**：配置覆盖失效（#22267）、会话接管与锁恢复（#22232）、Wayland 兼容（#21983）。
- **安全性**：抑制破坏性命令（#22672）、零依赖沙箱（#19873）。
- **工具规模治理**：工具数过多导致 400 错误（#24246）。

## 6. 开发者关注点

- **“静默失败/静默挂起”是最伤信任的一类问题**：成功语义被误报（#22323）、generalist agent 无限挂起（#21409）、交互式提示卡死（#22465）反复出现，且多被标记为 need-retesting。
- **配置不生效**：`settings.json` 覆盖被忽略（#22267）、符号链接的 agent 定义文件不被识别（#20079），说明配置发现与加载链路仍有缺口。
- **长任务与网络超时**：长时间静默的流式轮次被 bodyTimeout 中断（#30174/#30258），体现代理所处网络层的鲁棒性仍需打磨。
- **安装与环境识别**：多个 PR（#30272、#30267）同时处理源码检出被误判为全局安装的问题，说明从 clone 目录外启动是常见开发场景。
- **非交互式 CLI 一致性**：`gemini models` 与 `/model manage` 输出不一致（#30194、#30271），影响脚本化使用。
- **流程规范**：今日 31 个更新 PR 中有多条标记 `status/need-issue`、`pr-nudge-sent`（如 #30273、#30021），提醒贡献者在开 PR 前先建 Issue。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报（2026-11-13）

## 1. 今日速览

今日发布 v1.0.111、v1.0.111-0 与 v1.0.110 三个版本，重点强化企业级权限规则（支持正则表达式）与远程会话创建能力。Issues 侧共有 36 条更新，关停密集（大量历史 Issue 集中转为 CLOSED），但 Windows 上 Entra MCP 令牌缓存失效、macOS 沙箱下 Rust 重写导致 HTTPS 全部失败等平台级问题仍处 OPEN 状态，值得持续关注。过去 24 小时无 PR 活动。

## 2. 版本发布

**v1.0.111 / v1.0.111-0（2026-11-13）**
- 企业托管的 Shell、Bash、PowerShell 权限规则新增正则表达式支持（链接：https://github.com/github/copilot-cli/releases）
- 新增 `--host-allow-session-creation`：允许远程客户端在 CLI 主机上创建会话，仅对当次启动生效，不改动已保存设置
- 刷新 `/usage` 的高级请求用量百分比显示
- 在策略界面展示组织支持链接

**v1.0.110（2026-11-12）**
- 实验性：在掩码对话框中代答 git、ssh、sudo 密码提示（通过 `/experimental on` 启用）
- 修复 Microsoft Entra 登录时，已有组织账号情况下仍弹出无谓错误提示的问题
- 屏幕阅读器可识别当前会话与公告（无障碍改进）

> 趋势：本轮更新明显偏向**企业策略治理**（正则权限、组织支持链接）与**无头/远程使用场景**（远程会话创建、凭据提示代答）。

## 3. 社区热点 Issues

1. **#4802 [CLOSED] Assisted Permissions 疑似导致 PRU 配额被清空**（11 条评论）
   用户报告启用 assisted permissions 后配额异常消耗，Subscriptions 为 Pro 年度计划。虽已关闭，但涉及计费与权限机制，影响面大，社区讨论最活跃。
   https://github.com/github/copilot-cli/issues/4802

2. **#2374 [CLOSED] Autopilot 进入无限循环**（8 条评论）
   `/plan` 后进入 autopilot 触发死循环，是 agents 核心工作流的问题，长期存在（创建于 3 月），现已关闭，说明得到处理。
   https://github.com/github/copilot-cli/issues/2374

3. **#5236 [OPEN] Windows：Entra broker 令牌缓存为 0 字节，每次新进程都要重新登录 MCP**（7 条评论，👍1）
   影响 Windows + HTTP MCP 认证体验，`/restart` 无效，属持续性痛点，仍待修复。
   https://github.com/github/copilot-cli/issues/5236

4. **#4866 [CLOSED] ask_user / elicitation 表单中 Ctrl-D 触发会话关闭并丢弃输入**（3 条评论，👍3）
   点赞数较高，属交互层明显缺陷，影响表单填写体验。
   https://github.com/github/copilot-cli/issues/4866

5. **#5085 [OPEN] macOS 沙箱下 Rust 重写回归：原生 HTTPS 请求报 "bad certificate format"**（👍1）
   自 1.0.93 起，无法访问 `com.apple.SecurityServer` 的沙箱环境中所有 HTTPS 请求失败，影响沙箱化使用场景（如 nono）。
   https://github.com/github/copilot-cli/issues/5085

6. **#4837 [OPEN] 策略驱动的 enabledPlugins 安装插件后仍写为 `"enabled": false`**（3 条评论，👍2）
   MDM/repo 级设置下插件永不激活，直接影响企业批量部署插件。
   https://github.com/github/copilot-cli/issues/4837

7. **#3192 [OPEN] `footer.showCustom=true` 时 `statusLine.command` 不被执行/渲染**（3 条评论，👍2）
   终端渲染与配置项交互缺陷，长期未解（创建于 5 月）。
   https://github.com/github/copilot-cli/issues/3192

8. **#3339 [OPEN] 以 `/` 开头的引号字符串被误判为文件路径**（2 条评论）
   path-access 扫描器误分类，可能引发误报的权限请求，影响日常 shell 操作。
   https://github.com/github/copilot-cli/issues/3339

9. **#4783 [OPEN] 功能需求：为 CLI 沙箱单独提供 yolo 模式的允许策略**（2 条评论，👍1）
   企业希望为沙箱场景设置独立权限策略，与今日 v1.0.111 的企业权限更新方向一致。
   https://github.com/github/copilot-cli/issues/4783

10. **#4769 [OPEN] MCP OAuth 在 metadata URL 重定向时失败**（👍1）
    `.well-known/openid-configuration` 存在 HTTP 重定向即报 issuer 不兼容，影响 MCP 服务接入兼容性。
    https://github.com/github/copilot-cli/issues/4769

> 其他已关闭值得留意：#3039（无浏览器环境 MCP OAuth 超时）、#4320（嵌套自定义 agent 的 MCP 工具授权）、#3732（edit 工具损坏非 UTF-8 字节）、#3046（WSL2 下 session-store.db 未创建）、#5412（扩展斜杠命令报 "No client found"）、#5258（tmux/X11 下 OSC 52 剪贴板问题）、#4978（extensions.discover() 遗漏插件扩展）。

## 4. 重要 PR 进展

过去 24 小时内更新的 Pull Request 共 **0 条**，无进展可汇报。

## 5. 功能需求趋势

从本期 Issues 提炼出以下社区关注方向：

- **企业策略与权限治理**：#4783（沙箱 yolo 策略）、#4837（策略安装插件不激活）与版本中的正则权限规则相呼应，企业级可配置性是当前主线。
- **MCP 稳定性与认证兼容**：#5236、#4769、#3039、#4320 集中暴露 MCP 令牌缓存、OAuth 重定向与嵌套授权问题。
- **跨平台可靠性**：Windows（Entra 缓存、WSL2 会话存储）、macOS（沙箱 HTTPS、Rust 重写回归）问题密集。
- **无障碍与终端交互**：v1.0.110 的屏幕阅读器改进与 #4866、#5258、#3192 表明终端 UI 细节仍是痛点。
- **指令文件/上下文管理**：#4603 提出对重复 Copilot 指令文件的持久化用户级排除。
- **插件生态**：#4978、#5412、#4837 反映插件发现、激活与命令注册链路尚不稳定。

## 6. 开发者关注点

- **计费与配额透明度**：#4802 显示权限功能与配额计算耦合，用户对异常消耗敏感。
- **认证态可持久化**：多进程、无浏览器、重定向场景下 MCP/Entra 认证反复断裂，是跨平台高频抱怨。
- **沙箱兼容性**：macOS 受限沙箱与 Rust 重写的兼容回归（#5085）影响安全隔离部署。
- **Agent 工作流可控性**：autopilot 死循环（#2374）与嵌套 agent 工具授权（#4320）显示复杂流程的可预测性仍需加强。
- **工具正确性**：`edit` 工具损坏非 UTF-8 文件（#3732）属数据安全类问题，值得优先保障。
- **配置一致性**：`footer.showCustom`、`enabledPlugins` 等配置项行为与文档不符，影响高级用户定制。

---

*说明：本日报仅基于所提供 GitHub 数据整理，发布日期、评论数与状态均以数据源为准；因 PR 数据为 0 条，第 4 部分未做内容填充。*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 · 2026-11-13

## 今日速览

v2.3.0 正式发布，默认启用「后台子代理」（Background Subagents by Default）：子代理立即返回、在后台并发运行，空闲时回报结果。但新版本随即暴露出两类问题——升级到 2.3.0 后旧会话被重新执行（#63802），以及后台子代理模式在无独立任务时引发编造回答（#63785）。与此同时，账单与支付类 Issue 持续高位发酵，意大利地区所有支付方式被拒的 #52958 与历史支付被拒的 #45278 仍是社区讨论最集中的两条。

## 版本发布

**v2.3.0**
- **Background Subagents by Default**：子代理现在立即返回，转后台继续运行，空闲时回报；父会话可同时推进其他工作（PR #63382）。
- ⚠️ 升级副作用需注意：已有用户报告升级后旧会话（已取消或失败的）被重新执行（#63802）；另有用户指出后台子代理模式在无独立任务时会诱发幻觉输出（#63785）。

## 社区热点 Issues（10 条）

1. **[#45278](https://github.com/anomalyco/opencode/issues/45278) [CLOSED] 支付被拒，卡与银行均无异常**（44 评论 / 👍36）
   同卡正常使用三个月后突然无法续订，是今日热度最高的 Issue。争议大、点赞多，虽已关闭，但与 #52958 共同指向计费链路问题，值得持续跟踪。

2. **[#52958](https://github.com/anomalyco/opencode/issues/52958) [OPEN] 意大利地区所有支付方式均被拒**（26 评论）
   用户已尝试实体卡、Apple Pay、Stripe Link、新建虚拟 Mastercard 等全部失败，属于区域性支付阻断，影响 OpenCode Go 订阅转化，Open 状态说明尚未解决。

3. **[#63778](https://github.com/anomalyco/opencode/issues/63778) [CLOSED] 子代理首次模型调用报 “Specified function … is not found”**（7 评论）
   跨越所有 provider 的账号级错误（sage/architect/forge 均受影响），直接打击子代理核心功能，与 v2.3.0 的子代理方向高度相关。

4. **[#54375](https://github.com/anomalyco/opencode/issues/54375) [OPEN] 切换 plan/build 时保留当前 Tab 的模型**（10 评论 / 👍4）
   典型的工作流摩擦：Tab 切换 agent 时会恢复各自上次使用的模型，用户希望保持当前模型。需求明确、讨论充分。

5. **[#63743](https://github.com/anomalyco/opencode/issues/63743) [OPEN] `opencode upgrade` 使用 `--force` 下载约 2GB 平台依赖**（5 评论）
   npm 管理的安装升级时拉取全部平台 optionalDependencies，造成带宽与磁盘浪费，已标记 repro-simulated。

6. **[#43281](https://github.com/anomalyco/opencode/issues/43281) [OPEN] 支持不重启 CLI 刷新 provider 凭据**（7 评论 / 👍3）
   企业环境中的常见诉求：希望配置 token 刷新命令与周期，避免每次凭据过期都要重启。

7. **[#61053](https://github.com/anomalyco/opencode/issues/61053) [OPEN] TUI 终端面板拖选时视口冻结**（7 评论）
   拖选期间滚轮无法滚动或扩展选区，导致复制内容无法超过一屏，影响日常操作效率。

8. **[#63774](https://github.com/anomalyco/opencode/issues/63774) [OPEN] 权限对话框显示 hook 前的工具输入**（3 评论）
   TUI 授权 `shell` 时展示的是原始 tool input，而非 `permission.assert` 实际授权的命令；插件改写输入后用户会看到错误命令，属于安全相关的可观测性问题。

9. **[#59635](https://github.com/anomalyco/opencode/issues/59635) [OPEN] 服务重启后自动恢复挂起会话并执行待办任务**（4 评论）
   未经用户同意即自动续跑，存在副作用风险；与 #63802 属同一类「会话自动执行」问题，建议同批排查。

10. **[#63212](https://github.com/anomalyco/opencode/issues/63212) [OPEN] GitLab Duo workflow 模型在 v2 中无法调用工具**（5 评论）
    纯文本正常，一旦工具调用 turn 即静默结束，疑似 v1 有而 v2 缺失的接线，影响 GitLab 生态用户。

## 重要 PR 进展（10 条）

1. **[#63814](https://github.com/anomalyco/opencode/pull/63814)** fix(server)：在 model、provider、generate、voice、websearch 处理器中停止等待插件。回滚 #63040，缓解 #63130。
2. **[#63669](https://github.com/anomalyco/opencode/pull/63669)** feat(core)：新增 agent instructions 并用于 Plan 模式，关闭 #62628。移除 Plan 在每次压缩后重加提醒、导致会话被唤醒的代码路径。
3. **[#63800](https://github.com/anomalyco/opencode/pull/63800)** refactor(core)：从 v2（含 dev 构建）移除 todo 工具与 flag。旧配置 `experimental.todo` 仍可加载，历史列表仍可展示。
4. **[#62743](https://github.com/anomalyco/opencode/pull/62743)** feat(core)：通过 Unix socket 连接模型 provider。本地 llama.cpp / Ollama / vLLM / 企业网关可直接接入，不再需要 socat 桥接。
5. **[#62608](https://github.com/anomalyco/opencode/pull/62608)** feat(app)：在 Web 应用中加载白名单插件 GUI，关闭 #60976；当前为草稿，待设计批准。
6. **[#61064](https://github.com/anomalyco/opencode/pull/61064)** fix(app)：为内置 `/init` 与 `/review` 描述接入 i18n，属于 #57828 的一环。
7. **[#63810](https://github.com/anomalyco/opencode/pull/63810)** fix(core)：对小文本文件也强制执行默认读取上限；此前 6,003 字节文件会返回全部 2,001 行。
8. **[#63808](https://github.com/anomalyco/opencode/pull/63808)** fix(core)：`read` 拒绝 `limit: 0`，改为返回 “Limit must be a positive integer”。
9. **[#63811](https://github.com/anomalyco/opencode/pull/63811)** fix(core)：同时匹配两种六字节 GIF 签名，修复纯文本 “GIF8 is text” 被误判为图片附件。
10. **[#63807](https://github.com/anomalyco/opencode/pull/63807)** docs：新增 v1 桌面端（Windows Electron 1.19.5）卡死排查文档。

## 功能需求趋势

- **Agent 工作流精细化**：切换 agent 保留模型（#54375）、可配置的凭据刷新（#43281）反映用户希望减少上下文丢失与重启打断。
- **支付与订阅方式扩展**：PayPal 支持（#62639）叠加多起支付被拒（#45278、#52958），计费体验已成为社区关注焦点。
- **跨平台与桌面端稳定性**：RHEL 9 FIPS 安装失败（#61016）、Dash to Dock 图标分裂（#62918）、Android 选中文字误触发侧栏（#63530）、Firefox Zen 模态框不可聚焦（#63156）。
- **新增供应商与本地模型接入**：GitLab Duo workflow 工具调用（#63212）、Unix socket 连接 provider（PR #62743）。
- **多端插件能力**：Web 端插件 GUI 加载（PR #62608）、本地目录插件的 TUI 半边被静默跳过（#63740，已关闭）。

## 开发者关注点

- **子代理的默认行为与副作用**：v2.3.0 上线当天即出现账号级函数缺失（#63778）与无独立任务时编造回答（#63785），后台并发带来的可观测性与结果可信度亟待加固。
- **会话自动执行风险**：服务重启自动续跑挂起会话（#59635）、升级 2.3.0 重跑旧会话（#63802），用户强调需显式同意与可审计记录。
- **静默失败难排查**：插件 TUI 半边被跳过（#63740）、工具调用静默结束（#63212）、静默加载异常，均属「不报错但不工作」类问题，消耗大量调试时间。
- **安装与升级成本**：升级拉取约 2GB 依赖（#63743）、FIPS 环境 RPM 校验失败（#61016），影响受限环境与带宽敏感用户。
- **安全相关展示一致性**：权限对话框展示错误命令（#63774），需保证授权内容与实际执行一致。

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报 · 2026-11-13

> 数据来源：github.com/badlogic/pi-mono｜过去 24 小时内：Releases 0 条，更新 Issues 50 条（展示 20 条），更新 PRs 29 条（展示 15 条）。

## 1. 今日速览

今日无新版本发布，社区活跃度集中在**缓存计费与上下文窗口准确性**两类问题：#10956 的 `cacheWarming: "idle"` 静默失效与 #10024 的运行时工具集变更导致系统提示头部位移、重复计费，均持续发酵。PR 侧以小型健壮性修复为主，覆盖大 diff 渲染崩溃、可重试错误识别、`/copy`、`grep`、`find`、`pi.exec` 等边界场景，多个由自动化 bot 提交并已关闭。

## 2. 版本发布

过去 24 小时内无新 Release。

## 3. 社区热点 Issues（10 条）

1. **#10956 [OPEN] cacheWarming “idle” 在扩展处理 turn_end 后静默停止**（14 评论，👍3）
   自 9 月以来 507 次 `cache_warming_decision` 事件全部落在 `continuationProbability: 1`，0.15 档从未触发，`/session` 显示非活跃。属于缓存预热逻辑失效，直接影响成本与延迟，是当前讨论最集中的问题。
   https://github.com/earendil-works/pi/issues/10956

2. **#11021 [OPEN] ChatGPT 登录下 GPT-6.1 Sol 仍按 272K 而非 500K 上下文**（13 评论，👍8）
   账号实时模型目录报告 500K 默认值，Pi 1.3.0 却给模型更小的上下文窗口。今日点赞最高，反映用户对上下文窗口取值准确性的强烈关注。
   https://github.com/earendil-works/pi/issues/11021

3. **#10024 [OPEN] 运行中修改工具集移动系统提示头部并重复计费**（7 评论，👍2）
   工具列表改动会改变系统提示开头的 `- <tool>: <snippet>` 区段，导致该轮下一次请求从该点起重新计费。是缓存前缀稳定性的结构性问题。
   https://github.com/earendil-works/pi/issues/10024

4. **#9986 [CLOSED] 工具执行中中止会留下无结果的工具调用**（7 评论）
   中止点之后的工具调用从会话中消失，已开始的调用则有结果。会话一致性缺陷，已关闭。
   https://github.com/earendil-works/pi/issues/9986

5. **#8036 [CLOSED] 大型 diff 渲染导致 TUI 崩溃**（9 评论，标记 bug、fix-available）
   `edit` 工具处理约 14.5 MB 的超长行 HTML diff 时使交互式 TUI 崩溃，编辑本身成功。与今日 PR #12145 直接对应。
   https://github.com/earendil-works/pi/issues/8036

6. **#7062 [CLOSED] openai-completions：数组内容与缺失 finish_reason**（9 评论，👍3）
   部分 Databricks 模型（Qwen3、gpt-oss 推理模型）将 `choice.delta.content` 返回为数组，导致 `[object Object]` 输出。非标准流式响应兼容性问题。
   https://github.com/earendil-works/pi/issues/7062

7. **#12098 [CLOSED] Anthropic 消息线程：字符串型数值工具参数后 thinking 块被丢弃**（4 评论）
   自 1.5.1 起默认启用消息线程后，每次 `thread_not_found` 回退重发都报 `prefix_binding_mismatch`。涉及新默认行为与提示前缀绑定的交互。
   https://github.com/earendil-works/pi/issues/12098

8. **#12118 [CLOSED] v1.5.2 在运行结束后中止 read 工具流时未捕获 AbortError 退出**（4 评论，no-action）
   未捕获异常直接终止整个进程与在跑任务，调用栈均在 Pi 自身 bundle 内。稳定性类严重问题。
   https://github.com/earendil-works/pi/issues/12118

9. **#11006 [OPEN] 企业管理员启用的 GitHub Copilot 模型重启后仍不可见**（4 评论）
   OAuth 凭证中的 `availableModelIds` 被缓存，重启不一定刷新。影响企业用户模型可用性。
   https://github.com/earendil-works/pi/issues/11006

10. **#11593 [OPEN] 远程目录元数据归零后缓存模型消失**（3 评论）
    `openai-codex/gpt-6.1-terra` 在系统休眠、VPN 异常或国家选择错误后间歇性从 `pi --list-models` 消失。
    https://github.com/earendil-works/pi/issues/11593

## 4. 重要 PR 进展（10 条）

1. **#12145 [CLOSED] 修复超大型自渲染工具结果导致崩溃**
   `ToolExecutionComponent.render()` 对 `renderShell: "self"` 工具（含内置 `edit`）用 `lines.push(...contentLines)` 展开大量行，大数据 diff 会撑爆调用栈。对应 Issue #8036。
   https://github.com/earendil-works/pi/pull/12145

2. **#12136 [CLOSED] 重试仅携带 Node socket 错误码的 provider 错误**
    `read ECONNRESET`、`write EPIPE`、`connect ETIMEDOUT` 等不匹配既有 `RETRYABLE_PROVIDER` 规则，此前不重试。
   https://github.com/earendil-works/pi/pull/12136

3. **#12127 [CLOSED] 重试裸 socket 错误码（如 ECONNRESET）**
    `isRetryableAssistantError()` 覆盖 fetch 与网关措辞但遗漏裸错误码，与 #12136 同一问题族。
   https://github.com/earendil-works/pi/pull/12127

4. **#12121 [CLOSED] `/copy` 跳过无回答结束的轮次**
    修复 `getLastAssistantText()` 在 Esc 中止工具调用等场景下取到无文本的末条 assistant 消息。Closes #12119。
   https://github.com/earendil-works/pi/pull/12121

5. **#12134 [OPEN] openai-completions 默认指令角色改为 system**
    chat-completions API 上把默认指令角色从 developer 改为 system，起因是 Groq 的 `qwen/qwen3.8-27b` 渲染失败。由 #12101 启发。
   https://github.com/earendil-works/pi/pull/12134

6. **#12139 [CLOSED] 非视觉模型读图警告不再写入模型可见内容**
    此前该提示文本被写入会话，切换到视觉模型后模型仍会读到。修复会话内容污染。
   https://github.com/earendil-works/pi/pull/12139

7. **#12089 [CLOSED] 被信号终止的 `pi.exec` 命令上报为失败**
    `code ?? 0` 将缺失退出码映射为 0，超时或被中止的命令被误判为成功。Closes #12088。
   https://github.com/earendil-works/pi/pull/12089

8. **#12087 [CLOSED] grep 与 find 跳过版本控制目录**
    二者对 rg 和 fd 传 `--hidden`，会搜索 `.git/` 等目录；示例中 18 个 `TODO` 有 15 个来自 `.git/`。Closes #12084。
   https://github.com/earendil-works/pi/pull/12087

9. **#12028 [OPEN] 压缩期间推迟 `sendMessage` 的 triggerTurn**
    `pi.sendMessage(msg, { triggerTurn: true })` 会在手动压缩进行中启动运行；`sendCustomMessage` 仅检查 `isStreaming`。Closes #10982。
   https://github.com/earendil-works/pi/pull/12028

10. **#11787 [CLOSED] 跨符号链接路径共享 auth.json 锁**
     `realpath: false` 导致每个路径别名各自持锁，而读写实际指向同一文件。多路径并发下的凭证写入安全修复。
    https://github.com/earendil-works/pi/pull/11787

## 5. 功能需求趋势

- **缓存与计费效率**：缓存预热（#10956）、系统提示前缀稳定（#10024）、分支摘要复用缓存前缀（#9411）构成一条清晰主线，社区希望减少重复计费。
- **模型与上下文元数据准确性**：上下文窗口取值（#11021）、Copilot 企业模型可见性（#11006）、目录元数据归零导致模型消失（#11593）显示模型列表与元数据同步是高频关注点。
- **多 Provider 兼容性**：非标准流式响应（#7062）、WebSocket 传输支持（#3442）、Gemini `MALFORMED_FUNCTION_CALL` 有界重试（#12113）、OpenAI 指令角色（#12134）体现供应商差异适配需求。
- **终端 UI 健壮性**：大 diff 渲染崩溃（#8036）、主题切换残留颜色（#8212）、`/reload` 后自定义工具渲染失效（#7740）、Windows 退出后终端输入序列泄漏（#12133）。
- **交互体验细节**：`/model` 排序（#12122）、docker、devcontainer 中剪贴板不可用（#11273）。

## 6. 开发者关注点

- **静默失败最难排查**：多个问题的共同特征是“无报错但行为错误”——缓存预热不触发、工具调用无声消失、信号终止被记为成功、错误码未触发重试。社区倾向于要求显式失败与更完整的错误识别。
- **会话内容被意外持久化**：非视觉模型的图片警告、Abort 后残留的工具调用，都说明写入会话的文本需要更严格审查，否则影响后续模型请求。
- **大输入与长会话的边界处理**：超长物理行、超多行展开、消息线程前缀绑定，均是极端输入下的稳定性痛点。
- **同步与合并流程噪音**：PR #12151、#12144 等“Sync / merge pull request”类提交占用了列表，增加分诊成本。
- **企业环境的凭证与目录刷新**：OAuth 缓存、VPN 与休眠导致的目录异常，是企业用户反映较集中的诉求。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报（2026-11-13）

## 今日速览

今日发布 v0.27.3 及配套 TypeScript SDK（v0.1.33）、Desktop（v0.27.3）版本，Web Shell 增强为后台工作流增加了状态 chips。社区最核心的讨论仍是 1.0 Preview 事件驱动 loop kernel 向 main 分支分片合入（#17045），并伴随多项 CI 稳定性修复、Managed Agent 能力补齐与安全规则解析问题的跟进。

---

## 版本发布

- **v0.27.3**（CLI）：无已知破坏性变更；主要新增 Web Shell composer 上方的 chips，用于展示未完成的后台工作流、shell、monitor 与本地 agent。链接：https://github.com/QwenLM/qwen-code/releases
- **sdk-typescript-v0.1.33**：捆绑 CLI 0.27.3（由源码同分支构建）。链接：https://github.com/QwenLM/qwen-code/releases
- **desktop-v0.27.3**：包含 CI prettier 忽略集读取修复（#16729）、Agent Host 相关 CLI/core 修复等。链接：https://github.com/QwenLM/qwen-code/pull/16729
- **v0.27.2-nightly.20261112.70a487be84**：含 managed-agent 在 Session 关闭时释放 MCP owner（#16728）等修复。链接：https://github.com/QwenLM/qwen-code/pull/16728

---

## 社区热点 Issues（10 条）

1. **#17045 [OPEN] tracking(core): 将 1.0 Preview loop kernel 分片合入 main**（14 评论，P1）
   追踪将 `v1.0.0-preview` 中重构为事件驱动 kernel、统一 `query()` 入口的 agent loop 分阶段落地。这是当前主线架构迁移的纲领性 issue，影响后续所有 loop/自动化能力。链接：https://github.com/QwenLM/qwen-code/issues/17045

2. **#17099 [OPEN] 追踪 npm 安全扫描剩余发现与分阶段依赖升级**（12 评论，P2，security）
   2026-11-11 的 Snyk 扫描在 43 条依赖路径上报告 29 项发现，涉及 13 个经 `@qwen-code/web-shell@0.26.3` 与 `@qwen-code/sdk@0.1.25` 引入的 npm 包。这是供应链安全的关键跟踪项。链接：https://github.com/QwenLM/qwen-code/issues/17099

3. **#15894 [OPEN] bug(loop): 以用户消息发送的 stop 不会取消待处理的 loop_wakeup**（6 评论，P2）
   自定节奏 `/loop` 在显式停止后仍会自我唤醒恢复，直接影响自主型 agent 的可控性与安全性。链接：https://github.com/QwenLM/qwen-code/issues/15894

4. **#16078 [OPEN] bug(permissions): 部分畸形规则形态静默失效且无报告**（4 评论，P2，need-discussion）
   如 `Bash(rm -rf /))`、`Bash)` 等规则解析为惰性规则却不提示，是权限系统的隐患（接续 #15752/#15780）。链接：https://github.com/QwenLM/qwen-code/issues/16078

5. **#17001 [OPEN] bug(core): 含中途重定向命令的 "always allow" 规则覆盖整个根命令**（4 评论，P2，security）
   重定向位于命令词中间时，"always allow" 仅依据重定向前的词构建，却覆盖整条命令，存在权限越界风险（接续 #16870 R1-3）。链接：https://github.com/QwenLM/qwen-code/issues/17001

6. **#17086 [OPEN] qwen4-max-preview: 服务端中文工具 URL 规则（routify）泄漏进上下文**（5 评论，P2，blocked）
   通过 Model Studio Token Plan 端点使用时，模型收到客户端未发送的中文指令并判定为 prompt injection，涉及模型侧注入与可观测性问题。链接：https://github.com/QwenLM/qwen-code/issues/17086

7. **#17040 [CLOSED] ACP session 在执行 curl/网络调用后空闲无响应，daemon 因 stats 超时终止**（5 评论，P1）
   Web Shell（`qwen serve`）中触发 `agent channel closed mid-request`，子进程未崩溃而是被守护进程误杀，影响 Web Shell 长会话稳定性。链接：https://github.com/QwenLM/qwen-code/issues/17040

8. **#16824 [OPEN] 反复出现相同拼写错误，多次清空重装仍复现**（5 评论，P2，long-context）
   用户报告 Qwen 3.8 via Qwen Code 自发形成错误认知，涉及长上下文/token 管理，反映模型一致性问题的排查需求。链接：https://github.com/QwenLM/qwen-code/issues/16824

9. **#17038 [OPEN] headless Linux 下 CLI 卡在登录验证状态**（4 评论，P2，oauth）
   通过另一台电脑浏览器完成登录后 CLI 无法自动退出验证态，影响无头环境（服务器/CI）的可用性。链接：https://github.com/QwenLM/qwen-code/issues/17038

10. **#17150 [OPEN] `?btw` 侧问题语法在 Ink TUI 中被当作普通 prompt 发送**（4 评论，P3，ready-for-human）
    文档描述的侧问题语法在默认 TUI 下失效，文本混入主上下文，属明确的文档/实现不一致问题。链接：https://github.com/QwenLM/qwen-code/issues/17150

> 另注：`#14724`（354 评论）与 `#11680`（59 评论）为 bot 维护的主分支 CI 失败跟踪 issue，讨论量高但多为逐 commit 流水记录，非真实社区讨论。

---

## 重要 PR 进展（10 条）

1. **#17181 feat(cli): 每轮 ACP 在单次 `runAgentLoop` 调用中执行**（qqqys）
   开启 `experimental.unifiedAgentLoop` 后，ACP 每轮的模型请求与工具批次统一走一个 `runAgentLoop`，与 headless、AgentCore 和两个 TUI 行为对齐，是 #17045 kernel 落地的关键切片。链接：https://github.com/QwenLM/qwen-code/pull/17181

2. **#17088 feat(managed-agent): Managed Sessions 的固定间隔 `/loop` 调度**（wenshao）
   新增 `cron_create`、`cron_list`/`cron_delete` 等 Session 侧工具面，创建/列出/停用自动化定义。链接：https://github.com/QwenLM/qwen-code/pull/17088

3. **#16866 feat(managed-agent): Managed Web Terminal**（wenshao）
   为 Managed Agent 会话加入交互式 Web 终端，浏览器 WebSocket 由 Java 控制平面逐字节转发至 Runtime worker 的 PTY，补齐 `web_terminal` 能力差距。链接：https://github.com/QwenLM/qwen-code/pull/16866

4. **#15620 feat(channels): Microsoft Teams 扩展与 host ingress**（autofix/takeover）
   支持个人会话、显式群组 @ 提及、频道线程隔离与有序最终文本回复。链接：https://github.com/QwenLM/qwen-code/pull/15620

5. **#17108 fix(web-shell): Memory 面板刷新后重试内容读取**（Afloat16）
   在面板内新增 Refresh，重载文件列表并重试选中文件内容读取；读取完整才恢复编辑，失败或截断则保持只读。链接：https://github.com/QwenLM/qwen-code/pull/17108

6. **#17164 fix(memory): 将旧的召回记忆标识为上下文提醒**（mvanhorn）
   修复长工具会话中同一保存规则被反复当作新用户输入插入、导致模型重复开场的问题。链接：https://github.com/QwenLM/qwen-code/pull/17164

7. **#17152 fix(core): 保护 Unicode 恢复转义的边界**（callmeYe）
   Unicode Edit 恢复拒绝跨越单字符反斜杠转义、`\xNN`/`\uXXXX`、`\u{…}` 的匹配，以及末尾奇数字符的恢复。链接：https://github.com/QwenLM/qwen-code/pull/17152

8. **#17180 在 Managed 各入口验证 agent loop 执行**（yiliang114）
   为 #17045 block M 的两条 Managed 路径新增独立 CI lane，真实打包 Hosted workflow 子进程贯通 `agent()` → AgentHeadless 等入口。链接：https://github.com/QwenLM/qwen-code/pull/17180

9. **#17179 fix(external-context): 修复 malformed proxy env 测试不稳定**（dev-bot）
   让测试与执行环境继承的小写 `http_proxy` 隔离，消除非确定性（修 #17176）。链接：https://github.com/QwenLM/qwen-code/pull/17179

10. **#17178 fix(ci): 按 association 路由 classify_pr 并允许 dispatch 进入 fleet**（yiliang114）
    恢复同仓 PR、有写权限的 fork PR、merge queue、main push 和 `workflow_dispatch` 的 routing 规则。链接：https://github.com/QwenLM/qwen-code/pull/17178

---

## 功能需求趋势

- **统一/事件驱动 agent loop（1.0 方向）**：围绕 #17045 的分片合入与配套 CI 夜间 leg（#17050 kernel/OpenTUI）构成最集中的工程主线。
- **后台自动化与调度**：`/loop` 自定节奏、固定间隔 cron 调度（#17088）、loop_wakeup 取消语义（#15894）显示自主型工作流是重点。
- **Managed Agent 能力补齐**：Web Terminal、DingTalk 适配器后续（#17173）、MCP owner 生命周期修复等，体现托管/多通道集成方向。
- **安全与权限模型**：畸形规则解析（#16078）、重定向与 always-allow 覆盖范围（#17001）、npm 依赖扫描（#17099）显示安全治理需求上升。
- **程序化工具调用**：把多工具编排写成沙箱内代码、仅返回结果（#16944，已关闭/重复），属上下文性能方向的无代码编排诉求。

---

## 开发者关注点

- **可控性**：显式停止后 agent 不得自行恢复（#15894），自主 loop 的取消语义需要严格保证。
- **权限规则的正确性**：畸形规则不应静默失效，always-allow 不应越权覆盖整条命令（#16078、#17001），需在 `/permissions` 中可见可删。
- **稳定性误报与 CI 噪音**：daemon 因 stats 超时误杀 Web Shell 会话（#17040）、flaky 测试（#17176/#17179）以及大量 bot 逐 commit 记录的 CI 失败 issue，增加了排查负担。
- **无头/远程环境可用性**：headless Linux 登录卡死（#17038）影响服务器与 CI 场景使用。
- **文档与实现一致性**：`?btw` 语法在默认 TUI 下失效（#17150）属可直接修复的体验问题。
- **模型侧行为透明性**：服务端注入文本进入上下文（#17086）与模型反复产生同一错误（#16824）反映对可观测性与一致性的关注。

---

*注：以上内容均基于提供的 GitHub 数据，未补充数据源以外的信息。*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI 社区动态日报（2026-11-13）

## 1. 今日速览

过去 24 小时无新版本发布，社区动态集中在缺陷修复与合入节奏上：5 条 Issue 全部关闭（仅 1 条仍开启），12 条 PR 中有 9 条已关闭、3 条仍开放。贡献者 luochen211 是当日绝对主力，覆盖 MCP/LSP 协议处理、配置环境变量、状态持久化、非 ASCII 路径与密钥脱敏等多个子系统。另有两项需维护者签字确认的信任边界改动（网络策略、命令拒绝规则）处于开放待审状态。

---

## 2. 版本发布

过去 24 小时无新 Release，本节略。

---

## 3. 社区热点 Issues

今日更新的 Issue 共 5 条，均已列出（不足 10 条）。社区反应普遍冷淡：所有 Issue 评论数均为 0、👍 均为 0，说明讨论尚未展开，问题多由单一贡献者以高密度报告形式提出并很快被对应 PR 关闭。

1. **[#7306] MCP/LSP 客户端把服务器请求误当作回复，且从不作答**（CLOSED，area:mcp, area:core）
   重要原因：属于 JSON-RPC 双向通信的协议层错误，影响 MCP 与 LSP 客户端正确性。社区反应：0 评论，随后由 PR #7319 关闭。
   链接：codewhale-hq/Codewhale Issue #7306

2. **[#7297] 空白的主环境变量会遮蔽其旧别名**（CLOSED，area:sandbox, area:core）
   重要原因：涉及 `CODEWHALE_MODEL`、`*_BASE_URL`、`FORCE_HTTP1` 等配置解析，CI 模板/compose 中导出空变量的场景会静默丢失配置。社区反应：0 评论，由 PR #7315 关闭。
   链接：codewhale-hq/Codewhale Issue #7297

3. **[#7298] 状态快照：断裂的会话索引行吞掉下一条记录；过大的 max_age_days 会清空所有快照**（CLOSED，area:state）
   重要原因：两个会导致磁盘状态丢失的边界场景，属数据可靠性问题。社区反应：0 评论，由 PR #7316 关闭。
   链接：codewhale-hq/Codewhale Issue #7298

4. **[#7303] 非 ASCII 文件名：/diff、@git 与 @diff 出现八进制转义路径，工作集出现空条目**（CLOSED，area:tui, area:tools, area:state）
   重要原因：在含中文、空格与 emoji 文件名的仓库中复现，直接影响中文用户日常 diff 与 git 提及体验。社区反应：0 评论，由 PR #7317 关闭。
   链接：codewhale-hq/Codewhale Issue #7303

5. **[#7328] Provider 失败：诊断日志缺少原因，错误卡片丢弃了类型化错误码**（OPEN，area:tui, area:install, area:core, area:state）
   重要原因：唯一仍开启的 Issue，指向可观测性缺口——失败原因仅以英文散文形式存在于会话记录与 `codewhale receipts` 中，不进入诊断日志，且没有机器可读形式。这是当日最值得持续关注的问题。社区反应：0 评论，暂无对应 PR。
   链接：codewhale-hq/Codewhale Issue #7328

---

## 4. 重要 PR 进展

今日更新 PR 共 12 条，已全部纳入，按状态分组说明。

**仍开放（3 条）**

1. **#7320 fix(net): 匹配以国际化域名书写的网络条目**（OPEN，bug, contributor:external）
   修复内容：以 IDN 形式比较条目与主机。作者明确标注该改动涉及网络策略，属 CONTRIBUTING 所列需维护者先签字确认的信任边界，并已在 #7302 提供复现。
   链接：codewhale-hq/Codewhale PR #7320

2. **#7318 fix(sanitize): 遮蔽紧邻 CJK 文本的 provider 密钥**（OPEN，bug, contributor:external）
   修复内容：`redact_secrets` 与 `redact_model_bound_secrets` 的裸 token 匹配漏掉了 `密钥：sk-…`、`我的密钥是sk-…`、`（ghp_…` 等中文语境下的密钥，属安全相关修复。
   链接：codewhale-hq/Codewhale PR #7318

3. **#7321 fix(execpolicy): 对重绑定的命令词与更多启动器保持拒绝规则生效**（OPEN，bug, area:sandbox, contributor:external）
   修复内容：加固命令拒绝规则。同样声明触及沙箱策略信任边界，需维护者先确认方向，复现见 #7305。
   链接：codewhale-hq/Codewhale PR #7321

**其他开放但值得关注的增强 PR（补充列示）**

4. **#7294 feat(workflow): 用隔离的宿主 oracle 验证封存候选**（OPEN，enhancement）
   内容：从 #7262 拆出的、维护者要求的可选启用验证评估器切片，冻结版本化宿主规范与干净 Git 基线。引用 #7250。
   链接：codewhale-hq/Codewhale PR #7294

5. **#7326 feat(engine): 将 GitHub Copilot CLI 加入外部 agent 注册表**（OPEN，enhancement）
   内容：在 `crates/engine/src/fleet/agents.rs` 的 `AGENTS` 中新增一行，对应 #7279 中维护者建议的第二个切片（Qwen 由 #7293 覆盖）。
   链接：codewhale-hq/Codewhale PR #7326

6. **#7325 fix(app-server): 显示 worktree 侧重命名的来源**（OPEN，bug）
   内容：修正 `split_by_workspace` 在重命名离开工作区时合成 `deleted` 行的守卫条件。
   链接：codewhale-hq/Codewhale PR #7325

**已关闭（6 条）**

7. **#7319 fix(mcp,lsp): 应答服务器请求而非当作回复**（CLOSED）——对应 #7306，两个提交修复 `crates/engine/src/mcp.rs` 与 `crates/lsp/src/client.rs`。链接：codewhale-hq/Codewhale PR #7319

8. **#7315 fix(config): 所有环境变量别名链都经由 env_non_blank 读取**（CLOSED）——对应 #7297，修复 `CODEWHALE_MODEL=` 为空时遮蔽 `DEEPSEEK_MODEL=legacy-model`。链接：codewhale-hq/Codewhale PR #7315

9. **#7316 fix(state,snapshot): 断裂行后保留索引条目并钳制清理年龄**（CLOSED）——对应 #7298，作者表示可拆成两个 PR。链接：codewhale-hq/Codewhale PR #7316

10. **#7317 fix: /diff 与 git 提及按原样显示非 ASCII 路径**（CLOSED）——对应 #7303，含 Runtime API 工作区 diff。链接：codewhale-hq/Codewhale PR #7317

11. **#7322 fix(tui): 会话标题上限按字符而非字节计算**（CLOSED）——中文标题此前因按字节计数被误判超长。链接：codewhale-hq/Codewhale PR #7322

12. **#7293 feat(engine): 将 Qwen Code 加入外部 agent 注册表**（CLOSED）——新增一行 `ExternalAgent`，并更新 `docs/RUNTIME_API.md` 的 agent 列表。链接：codewhale-hq/Codewhale PR #7293

---

## 5. 功能需求趋势

基于本批 Issue（注：本批数据均为缺陷报告，以下方向为其隐含指向）：

- **国际化与 CJK 兼容**：当日最清晰的信号。涉及非 ASCII 文件名的 diff 显示（#7303）、会话标题按字符计数（#7322）、CJK 文本旁的密钥脱敏（#7318）、IDN 网络条目匹配（#7320），四项集中指向中文/多语言环境的系统性适配不足。
- **外部 agent 生态接入**：Qwen Code（#7293）、GitHub Copilot CLI（#7326）相继进入 `AGENTS` 注册表，源自 #7279 的分片推进，显示多 agent 并存是明确的扩展方向。
- **可观测性与诊断质量**：#7328 要求 provider 失败具备机器可读错误码并进入诊断日志，属日志/错误体系的结构性需求。
- **MCP/LSP 协议栈正确性**：#7306 与 #7319 表明协议客户端仍在补齐 JSON-RPC 双向语义。
- **状态与数据可靠性**：#7298、#7316 关注的落盘状态丢失与快照清理策略，属长期健壮性需求。
- **工作流验证能力**：#7294 的隔离宿主 oracle 反映对候选变更可信验证的投入。

---

## 6. 开发者关注点

- **信任边界流程负担**：网络策略（#7320）与命令拒绝规则（#7321）两条 PR 均需先经维护者确认方向才能评审，作者已按 CONTRIBUTING 提前开复现 Issue。这类改动落地节奏依赖维护者响应。
- **静默失败是最突出的痛点**：空环境变量遮蔽别名（#7297）与 provider 失败无结构化原因（#7328）都属"不报错但行为错误"，排查成本高。
- **字节 vs 字符的反复踩坑**：标题长度（#7322）与路径转义（#7303）暴露出多处按字节处理用户可见字符串的问题，可能是同类缺陷的重复来源。
- **中文场景下的安全盲区**：`密钥：sk-…` 一类中英混排密钥未被脱敏（#7318），对中文开发者是实际风险。
- **单人高产出与评审集中**：12 条 PR 中 10 条出自 luochen211/同源 Issue，多数在 24 小时内完成 Issue→PR→关闭闭环，社区其他成员参与度低（评论数普遍为空/0），评审与讨论密度有待提升。
- **PR 可拆分性**：#7316 作者主动提出可将两个独立修复拆分为两个 PR，反映对评审粒度的关注。

</details>

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar-personal) 自动生成。*