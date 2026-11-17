# AI CLI 工具社区动态日报 2026-11-17

> 生成时间: 2026-11-17 19:12 UTC | 覆盖工具: 9 个

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

# AI CLI 工具生态横向对比分析 · 2026-11-17

## 1. 生态全景

当前 AI CLI 工具生态已从"功能竞赛"进入"可靠性治理"阶段：各工具今日的社区热点几乎全部集中在会话状态一致性、权限/授权模型和资源泄漏上，而非新能力发布。发布节奏明显分化——Codex 单日 5 个 alpha、Qwen Code 单日 5 个发布物，而 Gemini CLI、Kimi Code CLI、Pi 今日无版本。Windows 平台问题在 Codex（热门 Issue 过半带 `windows-os` 标签）与 Copilot CLI（#5478 XDR 杀进程）中集中爆发，跨平台一致性成为普遍短板。同时，多个工具出现"配置作用域失效"类反馈（Claude Code 的 deny/allow 优先级、Gemini 的 settings.json 被忽略、Copilot 的子代理配置不继承），显示配置体系的可预测性正成为信任瓶颈。

## 2. 各工具活跃度对比

| 工具 | 今日 Release | Issues（今日更新/热点） | PR（今日） | 活跃度特征 |
|---|---|---|---|---|
| **Claude Code** | v2.1.326（小版本） | Top 10 热点，最高 140 评论；权限类累积 30+ 未解决 | **0**（24h 无更新） | 社区热度高但官方代码侧静默，情绪紧张 |
| **OpenAI Codex** | 5 个 alpha（0.171.0 系列 + 0.170.0-alpha.4.1） | Top 10，最高 93 评论 | 10 个同日合并（多为 copyberry[bot]） | 高频迭代，内部主导开发 |
| **Gemini CLI** | 无 | Top 10（最高 13 评论，多为 P1 subagent 故障） | 10 个（安全/策略修复集中） | 稳定迭代，聚焦安全默认值 |
| **Copilot CLI** | v1.0.113 / -0 / -1 | 约 50 条更新（Top 10 多 CLOSED） | **0** | Issue 处理密集，无代码贡献流入 |
| **Kimi Code CLI** | 无 | 无活动 | 无 | 静默 |
| **OpenCode** | v1.19.6 + process-daemon v0.6.0 | Top 10（V2 缺陷密集） | 10 个（含 contributor PR） | 大版本迁移期，缺陷与贡献同步高 |
| **Pi** | 无 | 48 条 Issue 更新（最高 18 评论） | 17 条更新（含批量会话事件修复） | Issue 与 PR 双高，单日最密集之一 |
| **Qwen Code** | 5 个（v0.28.0 正式 + 预览 + desktop + SDK + nightly） | Top 10（CI Issue 429 评论；Java SDK 十余个 P2） | 10 个 | 多端同步发布，SDK 质量告警 |
| **DeepSeek TUI** | 无 | 仅 2 条更新 | 16 条更新（含外部贡献者） | Issue 少、PR 多，维护者驱动 |

**数据要点**：今日 PR 活动最密集的是 Pi（17 条）与 DeepSeek TUI（16 条）；OpenAI Codex 是唯一单日发布 5 个 alpha 的工具，但 release note 均无变更内容；Claude Code 与 Copilot CLI 今日 PR 为 0，其中 Claude Code 社区最热的权限 issue（#30519，80 👍）明确指官方回应稀少。

## 3. 共同关注的功能方向

| 方向 | 涉及工具 | 具体诉求 |
|---|---|---|
| **权限/授权模型可预测性** | Claude Code、Gemini CLI、Copilot CLI、Qwen Code | Claude Code 要求 allow 按规则具体性覆盖宽泛 deny（#79759）、匹配失效（#30519）；Gemini 对含未解析展开的 shell 命令保留 ASK_USER（#30338）、YOLO 模式不被风险检查误打断（#30268）；Qwen Code 权限规则重定向后保留参数（#17372）；Copilot 的 `--allow-all` 下 MCP sampling 仍被拒（#2882） |
| **会话状态与可恢复性** | Claude Code、Copilot CLI、OpenCode、Pi、Qwen Code | 会话重命名损坏 transcript（Claude #73638）、锁文件残留致会话不可恢复（Copilot #4805）、会话永久卡死（OpenCode #54588）、会话树分叉（Pi #12266）、transcript 未写入用户消息（Qwen #17559） |
| **配置作用域一致性** | Claude Code、Gemini CLI、Copilot CLI、Codex | 子代理不继承主会话配置（Copilot #4576、#5122）、Browser Agent 忽略 settings.json（Gemini #22267）、`ANTHROPIC_BASE_URL` 仅 CLI 生效（Claude #97574）、权限模式跨会话生效（Codex #22771） |
| **MCP/子进程资源治理** | Codex、OpenCode、Gemini CLI、Copilot CLI | stdio fd 泄漏触发 EMFILE（Codex #26984）、子代理 MCP 进程栈泄漏（Codex #25015）、缓存 Location 致 MCP 进程倍增（OpenCode #37844）、中止工具调用撕裂 MCP 连接（Qwen #16661）、MCP 环境变量解析错误（Gemini #30331） |
| **Windows/平台适配** | Codex、Copilot CLI、Gemini CLI、Pi | Computer Use 卡在 `get_window_state`（Codex #51524）、XDR 杀 shell（Copilot #5478）、PowerShell 卡死（Gemini #30334）、Wayland 浏览器子代理失败（Gemini #21983） |
| **危险操作护栏** | Gemini CLI、Claude Code、Qwen Code | 抑制 `git reset`/`--force`（Gemini #22672）、隐藏指令注入不可关闭（Claude #93683）、权限引擎最小权限落地 |
| **IDE/编辑器集成** | OpenCode、Copilot CLI | 官方 VS Code 扩展（OpenCode #11176，165 👍，今日最高赞单项需求） |
| **新模型/Provider 快速适配** | Pi、OpenCode、Qwen Code | thinking 档位未映射（Pi #12184）、上下文窗口少算（Pi #11021，8 👍）、按调用选择搜索 Provider（OpenCode #64486）、新增六个托管推理 provider（Pi #11370） |

## 4. 差异化定位分析

- **Claude Code**：功能最成熟、生态最广，但**官方维护响应与社区体量不匹配**——今日 0 PR、权限问题数月无实质回应，社区已自建规避方案。定位为"重型工作流 + 插件/通道生态（Cowork、agent teams、Code Mode）"，路线偏平台化，但可靠性债务正在累积信任成本。
- **OpenAI Codex**：**内部工程主导**（PR 绝大多数来自 bot，同日批量合并），开发重心在沙箱安全（Linux PID 命名空间、Windows 沙箱密码策略）与 Guardian 授权/审查流程。目标用户偏企业受管环境（AppLocker、沙箱账户策略），但 Windows 桌面端稳定性是明显短板。
- **Gemini CLI**：**安全默认值优先**的技术路线，PR 侧集中修复 PolicyEngine、re2js 线性时间正则、扩展同意默认 no。核心痛点在 subagent 执行链路可靠性（误报成功、无限挂起），架构级提案（#19873 零依赖 OS 沙箱、#22745 AST 感知代码理解）显示其探索更底层的能力边界。
- **Copilot CLI**：**企业集成导向**，今日新增托管设置禁用 Browser Use 即体现管理员治理思路；Issue 集中在 Entra ID OAuth、企业路由 401、GitHub Enterprise 账户。目标用户是受管企业开发者，但 PR 为 0，属"反馈多、外部贡献少"模式。
- **OpenCode**：处于 **v1→v2 大版本迁移期**，1.19.6 提供升级入口且保留会话/项目/设置。技术路线强调 Code Mode 可扩展性（Rust 移植、语言层拆分、插件就绪上报），并有外部 contributor PR 流入，是少数"实现先行、设计审批待定"的活跃贡献型项目。
- **Pi**：**扩展生态与事件语义精细化**阶段，单日 17 条 PR 多为一人的会话事件修复批次（#12230–#12235），性能议题（#9549 全屏重渲染）是唯一长期开放热点。LLM 迁移用户口碑正面（#11226 称"像呼吸到新鲜空气"），provider 扩展（#11370 六个托管推理）显示其瞄准自托管/多 provider 用户。
- **Qwen Code**：**多端 + 多语言 SDK 并行**，单日 5 个发布物（正式版、预览、desktop、TypeScript SDK、nightly），managed-agent 接入钉钉体现企业 IM 集成主线。但 Java SDK 单日被同一贡献者提交 10+ 个 P2 缺陷（进程泄漏、路径分隔符拼接文本、JSON-RPC 缺 sessionId），跨语言质量是当前风险点。
- **DeepSeek TUI**：**维护者 + 外部贡献者驱动的小型项目**，Issue 极少（2 条）但 PR 16 条，焦点在 TUI 冻结（#7357 快照等待致整回合无响应）与按端点判定推理方言（#7349）。技术路线强调运行时/状态生命周期系统化治理（0.10.3 追踪项 #7282）。

## 5. 社区热度与成熟度

**社区热度（按今日信号强度）**：
- **第一梯队**：Pi（48 Issue + 17 PR）、OpenCode（V2 缺陷密集 + 10 PR）、Copilot CLI（约 50 条 Issue 更新）。
- **第二梯队**：Codex（5 alpha + 10 合并 PR + 93 评论热点）、Gemini CLI（10 PR + 多个 P1）、Qwen Code（5 发布 + 10 PR + 429 评论 CI 长尾）、Claude Code（140 评论最高热帖但 0 PR）。
- **第三梯队**：DeepSeek TUI（PR 活跃、Issue 稀疏）、Kimi Code CLI（静默）。

**成熟度分层**：
- **功能成熟但响应滞后**：Claude Code——功能面最全，但官方代码侧今日零动作，权限积怨（30+ 未解决）是成熟度与响应力脱节的典型。
- **快速迭代期**：Codex（0.171.0 多 alpha 密集推进）、OpenCode（v2 迁移摩擦集中暴露）、Qwen Code（1.x 预览进入实际试用，反馈闭环待加速）。
- **稳定迭代 + 质量加固**：Gemini CLI（安全策略修复为主，无新版本）、Copilot CLI（版本更新 + Issue 处理，但无外部 PR）。
- **社区驱动的小生态**：Pi、DeepSeek TUI——外部贡献者活跃，维护者响应快（Pi #12266 当日创建当日处理；DeepSeek #7361 因重复当日关闭），但 CI/基础设施成熟度待观察（Qwen #14724 主 CI 持续失败 429 评论是最反面的例子）。

## 6. 值得关注的趋势信号

1. **"静默失败"成为跨工具公敌**：Pi（模型回退不上报、压缩静默结束）、Claude Code（工具间文本不落盘 #77651、隐藏指令注入 #93683）、Gemini（MAX_TURNS 误报 GOAL 成功 #22323）、Qwen（Java SDK 错误静默吞没）反复出现同一诉求——**出问题时必须明确说出来**。对开发者的参考价值：选型时把"失败是否可诊断"列为与功能同等重要的评估维度。

2. **权限引擎从"修补"走向"重构"**：Claude Code 要求按规则具体性决定优先级、Gemini 对未展开 shell 保留人工确认、Qwen 重定向后保留参数——社区不再接受零散修补，而是要求**可推理、可预期的授权语义**。这是企业采用的前置条件。

3. **并发与多进程安全开始集中暴露**：Pi 的 session 树分叉与共享 npm 前缀无锁竞争（#10798）、Qwen 的并发 iterator 释放他人订阅（#17646），说明单机多实例/CI 并行场景已进入主流使用，但工具侧缺乏锁与版本校验机制。

4. **大版本迁移期的兼容摩擦是可预期的成本**：OpenCode v2 缺 `CLAUDE.md` 回退（#53402）、代理环境变量失效（#51247）、V1 插件需更新，提示开发者在升级前应评估插件/配置迁移面。

5. **跨语言 SDK 成为新的质量战场**：Qwen Java SDK 单日 10+ P2 缺陷（进程泄漏、编码、JSON-RPC 规范性）说明，当 CLI 被嵌入 Java/TypeScript 等宿主时，**传输层正确性与资源释放**的复杂度不亚于 CLI 本身。

6. **多 provider / 自托管推理需求外溢**：Pi 新增六个托管推理 provider、llama.cpp 登录持久化诉求（#12096）、OpenCode Bedrock 推理块兼容修复——开发者希望在同一工具内自由路由模型，而非被锁定在单一 provider。

7. **CI 稳定性正在消耗维护带宽**：Qwen #14724（429 评论的 CI 长尾）、Codex 的 flaky 治理缺位，提示"工具自身的工程健康度"也是生态成熟度信号——CI 长期失败的项目，功能迭代速度会被隐性拖慢。

---

*说明：本报告严格基于所提供数据生成；评论数、点赞数在部分工具（如 Pi PR、DeepSeek PR）中缺失或显示为 0，相关判断以问题严重性与现象描述为依据，未作数值外推。*

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告（数据截止 2026-11-17）

> 说明：本次提供的 PR 数据中评论数字段均为 `undefined`，因此“热门 Skills 排行”无法按评论数严格排序，以下依据 Issue 侧关联讨论、更新活跃度和修复影响面综合整理。所有状态均为仓库所显示状态。

## 1. 热门 Skills 排行（关注度最高的 PR / 相关 Skill）

由于 PR 评论数缺失，以下条目以“关联 Issue 讨论热度 + 更新活跃度”作为关注度替代指标。

1. **claude-api（修复：替换失效文档链接）** — PR #1730 [OPEN]
   修复 `academy-guide` 与 `tool-use-concepts` 中的 3 个 404 文档链接，作者已用 `curl` 验证为新 URL（HTTP 200）。关联该 Skill 的 Issue #1487 讨论其“单次工具调用注入约 156k tokens、耗尽上下文窗口”的问题，是 claude-api 最受关注的争议点。
   https://github.com/anthropics/skills/pull/1730 ｜ https://github.com/anthropics/skills/issues/1487

2. **skill-creator（触发评估可靠性修复）** — PR #1298 [OPEN]
   修复 trigger 评估的误判：多 worker 命令探测相互竞争、Windows 上子进程 pipe 的 `select()` 失败、无关工具中断扫描，以及运行时失败被误判为“未触发”。与 Issue #1352（`--num-workers>1` 时触发率系统性接近 0）和 Issue #556（`claude -p` 触发率 0%）直接呼应，是社区讨论最集中的技术痛点之一。
   https://github.com/anthropics/skills/pull/1298 ｜ https://github.com/anthropics/skills/issues/1352

3. **mcp-builder（兼容 mcp>=2）** — PR #1742 [OPEN]
   适配 `mcp>=2.0.0`：`streamablehttp_client` 更名为 `streamable_http_client`，自定义 HTTP 头改由 `create_mcp_http_client` / `http_client` 配置。对应 Issue #1668。
   https://github.com/anthropics/skills/pull/1742

4. **webapp-testing（安全与元素识别修复）** — PR #1980 / #1976 [OPEN]
   #1980 移除 `with_server.py` 中的 `shell=True`，消除未净化命令字符串注入风险；#1976 修正 `element_discovery.py` 中 textarea / select 被误报为 `text` 的问题（Fixes #1891）。安全类改动通常关注度较高。
   https://github.com/anthropics/skills/pull/1980 ｜ https://github.com/anthropics/skills/pull/1976

5. **docx（正确性修复）** — PR #1792 / #1734 [OPEN]
   #1792 让 `accept_changes.py` 在 LibreOffice 超时时报错，并校验输出 DOCX 已无 `w:ins` / `w:del` 修订标记；#1734 检测孤立的 docx 批注。另有关联 Issue #2018（`merge_runs.py` 丢失命名空间声明、写出非法 XML）。
   https://github.com/anthropics/skills/pull/1792 ｜ https://github.com/anthropics/skills/pull/1734

6. **xlsx（外部链接风险检测修复）** — PR #2019 [OPEN]
   修复 `external_links_at_risk` 仅检查工作簿级 `defined_names` 导致的漏报，补上工作表作用域定义名与别名的解析（Fixes #2013）。
   https://github.com/anthropics/skills/pull/2019

7. **pptx / algorithmic-art（参数与逻辑修复）** — PR #1975 / #1977 [OPEN]
   #1975 让 `thumbnail.py` 在渲染前就对 `--cols < 1` 报 argparse 错误（Fixes #1809）；#1977 修复 `wrapAround()` 对负值直接返回 max 的错误取模逻辑（Fixes #1897）。
   https://github.com/anthropics/skills/pull/1975 ｜ https://github.com/anthropics/skills/pull/1977

8. **新增 Skill 提案：md2video-audio / pyxel / proofcore-contract-auditor** — PR #1703 / #525 / #1771 [OPEN]
   分别覆盖“Markdown 直出带配音 MP4 视频”、“Python 复古游戏开发与帧级验证”、“Solidity/Rust 智能合约静态审计并将证明锚定至 TON 链”。其中 #525 自 2026-03 创建、更新至 2026-11，属长期未合并但持续维护的提案。
   https://github.com/anthropics/skills/pull/1703 ｜ https://github.com/anthropics/skills/pull/525 ｜ https://github.com/anthropics/skills/pull/1771

## 2. 社区需求趋势（基于 Issues）

- **安全与信任边界（最高讨论量）**：Issue #492（46 评论）指出社区 Skill 以 `anthropic/` 命名空间分发、冒充官方 Skill，构成权限提升风险。这是全仓库评论数最高的议题。
  https://github.com/anthropics/skills/issues/492

- **Skills 的组织内分发与共享**：Issue #228（17 评论）要求 Claude.ai 支持组织级 Skill 共享，替代当前“下载 .skill 文件 → Slack 传输 → 手动上传”的流程。
  https://github.com/anthropics/skills/issues/228

- **评估/测试工具链的正确性**：Issue #556（13 评论，`claude -p` 触发率 0%）、#1352（多 worker 交叉匹配 UUID 导致假阴性）表明社区最迫切的工程需求是“可信任的 Skill 触发评估”。
  https://github.com/anthropics/skills/issues/556 ｜ https://github.com/anthropics/skills/issues/1352

- **Agent 记忆与推理工作流**：Issue #1329 提出 `compact-memory`（用符号化记法压缩长时 Agent 状态）；Issue #1385 提出“预任务校准 → 对抗式评审 → 交付验证”三段式推理质量门。方向是工作流自动化与输出质量管控。
  https://github.com/anthropics/skills/issues/1329 ｜ https://github.com/anthropics/skills/issues/1385

- **Agent 治理（已关闭）**：Issue #412（CLOSED）曾提议 `agent-governance`，覆盖策略执行、威胁检测、信任评分与审计轨迹，反映社区对 Agent 安全模式的需求，但未落地。
  https://github.com/anthropics/skills/issues/412

- **Skill 元数据与上下文效率**：Issue #2064 指出 `theme-factory` 的描述只讲“做什么”不讲“何时用”，影响触发准确率；Issue #202（CLOSED）批评 `skill-creator` 写得像开发者文档、浪费 token，偏离操作性指令。
  https://github.com/anthropics/skills/issues/2064 ｜ https://github.com/anthropics/skills/issues/202

- **文档类 Skill 的重复安装与状态说明**：Issue #189（9 👍）指出 `document-skills` 与 `example-skills` 插件内容完全相同、造成上下文重复；PR #2108 尝试在 README 澄清文档类 Skill 的“参考快照”状态。
  https://github.com/anthropics/skills/issues/189 ｜ https://github.com/anthropics/skills/pull/2108

## 3. 高潜力待合并 Skills（活跃但未合并）

- **PR #1298 — skill-creator 触发评估隔离**（2026-06 创建，2026-09-16 更新）：同时被 Issue #1352 与 #556 指向的根因修复，落地价值最高。
  https://github.com/anthropics/skills/pull/1298

- **PR #1742 — mcp-builder 适配 mcp>=2**（2026-09 创建，2026-10-08 更新）：属依赖版本断裂问题，不修则 Skill 直接失效。
  https://github.com/anthropics/skills/pull/1742

- **PR #1980 — webapp-testing 去 `shell=True`**（2026-10 创建，2026-11-01 更新）：安全类修复，且改动范围局部。
  https://github.com/anthropics/skills/pull/1980

- **PR #2019 — xlsx 外部链接漏报**（2026-10 创建，2026-11-03 更新）：附带明确 Fixes 编号，回归验证路径清晰。
  https://github.com/anthropics/skills/pull/2019

- **PR #1681 / #1997 — skill-creator 脚本可用性与 YAML 解析**（更新至 2026-10）：前者修复 `package_skill.py` 独立运行时的 `ModuleNotFoundError`，后者修复 `parse_skill_md` 手写引号剥离导致元数据与 SKILL.md 不一致。
  https://github.com/anthropics/skills/pull/1681 ｜ https://github.com/anthropics/skills/pull/1997

- **PR #1734 — docx 孤立批注检测**（2026-09-06 创建，2026-09-25 更新）：摘要为空，建议补充说明后再评估。
  https://github.com/anthropics/skills/pull/1734

## 4. Skills 生态洞察

**一句话总结**：社区当前最集中的诉求不是“再加更多 Skill”，而是“让已有 Skill 可信、可评估、可安全分发”——即优先解决命名空间冒用带来的信任风险（#492）、触发评估工具链的系统性误报（#556 / #1352）、以及文档/表格等官方 Skill 的正确性与上下文开销问题，新增领域 Skill 更多是补充而非主线。

---

# Claude Code 社区动态日报 · 2026-11-17

## 今日速览

今日仅发布一个小版本 v2.1.326，核心变化是 Code Mode 与 agent teams 的联动行为，以及启动时对工具参数配置的校验警告。过去 24 小时无 PR 更新，Issues 讨论集中在权限系统（匹配失效、deny/allow 优先级）、Cowork 的上下文与调度问题、以及桌面端平台适配。权限相关 issue 已累积"30+ 未解决"，但官方回应稀少，是当前社区情绪最紧张的方向。

---

## 版本发布

**v2.1.326**
- 支持在启用 agent teams 时开启 Code Mode；若用户此前已开启 Code Mode，启用 teams 的会话现在默认以 Code Mode 启动。
- 启动时新增警告：当 `--allowedTools`、`--disallowedTools` 或 `--tools` 中存在"看起来不像完整条目"的值时给出提示（Release 说明未展示完整内容）。

🔗 https://github.com/anthropics/claude-code/releases

---

## 社区热点 Issues（Top 10）

1. **#69044 [bug] 长期使用错误汇编（140 评论）**
   用户 klausrattenbacher 连续数月系统记录日常使用中的重复性错误，形成德语反馈文档。评论量最高、跨度从 6 月延续至今，是观察真实使用痛点的高价值汇总帖。
   🔗 https://github.com/anthropics/claude-code/issues/69044

2. **#84862 [enhancement] 全平台 Passkey (WebAuthn) 登录（219 👍 / 47 评论）**
   今日点赞最高的功能请求，覆盖所有入口的账户登录。高赞低争议，属于社区共识型需求。
   🔗 https://github.com/anthropics/claude-code/issues/84862

3. **#30519 [bug] 权限匹配"根本性失效"（32 评论 / 80 👍）**
   报告称该问题自 2025 年中持续存在，关联 30+ 未解决 issue，官方仅在 2025 年 9 月给过一次规避建议。社区被迫自行构建规避方案——这是今日最值得官方优先回应的信号。
   🔗 https://github.com/anthropics/claude-code/issues/30519

4. **#47180 [bug] Cowork 定时任务忽略"始终允许"权限（42 评论 / 48 👍）**
   macOS 上每次运行都重新弹出权限提示，直接影响自动化任务可用性，评论数仅次于 #69044。
   🔗 https://github.com/anthropics/claude-code/issues/47180

5. **#79759 [area:permissions] 允许具体 allow 覆盖宽泛 deny（8 👍）**
   指出当前引擎中 deny 无条件优先于 allow，使最小权限模式难以落地；诉求是按规则具体性决定优先级。与 #30519 共同指向权限引擎设计缺陷。
   🔗 https://github.com/anthropics/claude-code/issues/79759

6. **#73638 [bug, has repro] 工具调用中重命名会话永久损坏 transcript（15 评论）**
   在 `server_tool_use` 进行中改标题会注入合成 user turn，导致后续每次请求都返回 400。有复现步骤，数据损坏类问题优先级应较高。
   🔗 https://github.com/anthropics/claude-code/issues/73638

7. **#77651 [bug, has repro] 工具调用间的助手文本静默丢失（12 评论）**
   交错思考场景下，工具调用之间的文本既不渲染、不在 Ctrl+O 中显示、也不写入会话 .jsonl。影响可观测性与审计。
   🔗 https://github.com/anthropics/claude-code/issues/77651

8. **#93683 [bug, has repro] 工具结果中被注入无法关闭的指令（8 评论）**
   每个工具结果都附加一条 `type=attachment` 指令，覆盖用户的显式指示且无退出选项。涉及提示可控性与可预测性。
   🔗 https://github.com/anthropics/claude-code/issues/93683

9. **#107077 [bug] Cowork 云会话在"弃用模式"下启动（13 评论）**
   插件 hooks 与 slash commands 在该模式下完全不执行，且额外弹出"允许一次"提示；同一账户/环境下表现随模式 100% 或 0% 成功。对插件生态影响直接。
   🔗 https://github.com/anthropics/claude-code/issues/107077

10. **#44380 [bug, has repro] Channel 消息无法唤醒空闲会话（16 评论）**
    `--channels` 插件收到的消息只显示在终端，不触发空闲会话处理。阻塞 Telegram 等外部通道的可用性。
    🔗 https://github.com/anthropics/claude-code/issues/44380

> 其他值得扫读：#37273（Cowork 上下文压缩不可逆丢失历史）、#97574（桌面 Code tab 忽略 `ANTHROPIC_BASE_URL`）、#57998 / #91409（Windows 数据目录不可配置）、#79220（RTX 50 系闪烁）。

---

## 重要 PR 进展

过去 24 小时内**无**更新的 Pull Request。今日无法评估社区贡献代码的合入节奏。

---

## 功能需求趋势

- **认证与安全**：Passkey/WebAuthn 全平台登录（#84862）是唯一高赞新方向，反映对强认证的明确诉求。
- **权限模型重构**：从匹配失效（#30519）到优先级语义（#79759），社区要求的是"可推理、可预期"的权限引擎，而非零散修补。
- **跨平台与目录可配置**：Windows 数据目录（#57998、#91409）、桌面端归档会话可见性（#102116）、隐藏文件显示（#94663）、托盘图标持久化（#86213）——桌面端细节需求密集。
- **自动化与可观测**：定时任务/Routine 在侧栏可见（#54517）、Cowork 调度权限持久化（#47180）、上下文压缩后保留历史（#37273）。
- **网络与自托管**：桌面端应遵守 `ANTHROPIC_BASE_URL`（#97574），与自定义网关需求相关。
- **模型/工具行为可控性**：#93683 的隐藏指令注入，属于"提示层应可关闭"的一类新诉求。

---

## 开发者关注点（痛点与高频需求）

1. **权限系统是最大积怨**：匹配失效叠加 deny 优先级固定，导致"始终允许"类体验反复失效；#30519 明确指出官方回应极少，社区已有自建规避方案，信任成本在上升。
2. **数据不可逆丢失类缺陷**：会话重命名损坏 transcript（#73638）、Cowork 压缩删除历史（#37273）、工具间文本不落盘（#77651）——均影响可恢复性，建议优先给复现与修复状态。
3. **桌面端与 CLI 行为不一致**：`ANTHROPIC_BASE_URL` 仅 CLI 生效（#97574）、Cowork 云会话模式分裂（#107077），让开发者难以推断实际运行环境。
4. **平台适配阻塞规避手段**：MSIX 打包阻止应用 `--disable-direct-composition`（#79220），Windows junction 场景写入失败（#91409），说明打包/存储假设成为修复障碍。
5. **插件/通道链路不闭环**：hooks 与 slash commands 依赖会话启动模式、Channel 消息不能唤醒空闲会话，直接限制插件生态的可靠性。
6. **噪音与信号**：部分 issue 被标记 `invalid`（#79220、#86213），但仍有持续讨论，说明分类与用户预期之间存在错位。

---

*说明：本日报仅基于所提供数据生成；v2.1.326 的 Release 说明为截断内容，未展示部分未作推测。*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报（2026-11-17）

## 1. 今日速览

今日仓库以高频 alpha 发布和一批同日合并的 CLOSED PR 为主，改动集中在沙箱安全（Linux PID 命名空间、Windows 沙箱密码策略）、Guardian 授权与审查流程、app-server 错误处理及 rollout 压缩/搜索性能。社区侧最突出的信号仍是 Windows 平台稳定性——Computer Use 卡在 `get_window_state`、无法恢复云端会话、更新后本地项目丢失等问题讨论热度最高，多个长期 Issue 持续活跃。

## 2. 版本发布

过去 24 小时共发布 5 个 alpha 版本，均为 Rust 侧版本号推进，release note 未提供具体变更内容，此处不做推断：

- rust-v0.171.0-alpha.12
- rust-v0.171.0-alpha.11
- rust-v0.171.0-alpha.10
- rust-v0.171.0-alpha.9
- rust-v0.170.0-alpha.4.1

同日密集迭代 0.171.0 的多个 alpha 序号，说明该分支处于活跃开发阶段，建议关注后续进入稳定版时的变更汇总。

## 3. 社区热点 Issues

1. **#51524 [Windows] Computer Use 在 `get_window_state` 处中断，无法获取浏览器 URL（Chrome/Edge）** — 93 条评论，为今日全站最热。10 月 6 日起原本可用的 Windows Computer Use 在窗口枚举成功后立即终止回合，直接影响核心自动化场景。
   https://github.com/openai/codex/issues/51524

2. **#57101 [Windows] 截图回合结束后捕获访问与金色/黄色显示边框仍然保留** — 54 条评论。涉及 Computer Use 的截图权限与 UI 边框清理，属于用户可感知的隐私/体验问题。
   https://github.com/openai/codex/issues/57101

3. **#59855 [Windows] Codex Desktop 恢复云端托管会话失败，报 AbsolutePathBuf 错误** — 39 条评论。打开侧边栏中的受影响云端会话即报 `Invalid request: AbsolutePathBuf deserialized without a b...`，阻断正常使用。
   https://github.com/openai/codex/issues/59855

4. **#26984 [MCP, CLI] MCP stdio 服务器泄漏管道 fd 与孤儿子进程，累积触发 EMFILE** — 30 条评论，自 6 月持续至今。长会话稳定性问题，对重度 CLI/MCP 用户影响显著。
   https://github.com/openai/codex/issues/26984

5. **#25015 [MCP, Linux] app-server 为子代理泄漏 MCP 进程栈，导致线性内存增长** — 21 条评论，带 Papercuts 2026 标签。`close_agent` 后 MCP 子进程树仍存活于长期运行的 app-server 下。
   https://github.com/openai/codex/issues/25015

6. **#54564 [Windows] 新建 Work 线程无法发送消息，发送按钮持续禁用** — 18 条评论。影响工作流主路径。
   https://github.com/openai/codex/issues/54564

7. **#60530 GPT-6.1 Sol 用量限制消耗明显加快** — 14 条评论。涉及配额/限速，直接关系付费用户成本感知。
   https://github.com/openai/codex/issues/60530

8. **#55654 ChatGPT Work / Sites 报 "No usable execution environment"，跨移动端、桌面端和浏览器均无法编辑** — 14 条评论、4 个赞。
   https://github.com/openai/codex/issues/55654

9. **#41958 [Windows] AppLocker 拦截解压到 %LOCALAPPDATA% 的 Codex 运行时时 ChatGPT 以 "spawn UNKNOWN" 启动失败** — 10 条评论。企业受管环境兼容性问题。
   https://github.com/openai/codex/issues/41958

10. **#35823 [Windows, 性能] `logs_2.sqlite` 从不回收空闲页：已设 auto_vacuum=INCREMENTAL 但从未执行** — 10 条评论。10 天保留策略下文件仍单调增长。
    https://github.com/openai/codex/issues/35823

其余值得留意的动态：#61294 Windows 更新后本地 Codex 项目消失（7 条评论）；#62032 Windows/Android 的 Codex Remote 无法连接、二维码配对卡住（今日新建，4 条评论）；#61637 macOS 主窗口退化为 logo 加载页而任务继续运行（4 条评论）。已关闭的 #12119（响应中途返回 `{"detail": "Bad Request"}`）与 #15788（用量达上限时可选排队提交 prompt 的功能请求）今日更新为 CLOSED。

## 4. 重要 PR 进展

今日合并的 PR 大多来自 copyberry[bot]，均为 CLOSED 状态：

1. **#62100 支持带继承 PID 命名空间的透明 TCP** — 允许 `--linux-sandbox-pid-namespace=inherit` 下使用透明 TCP，默认仍保持 PID 隔离；继承模式下复用 `/proc` 视图并做校验。
   https://github.com/openai/codex/pull/62100

2. **#62099 明确 Guardian 授权过期后的恢复指引** — 对 `StaleAuthorization` 说明操作未执行、并非策略拒绝，并指示代理重试。
   https://github.com/openai/codex/pull/62099

3. **#62083 按策略修订版隔离 Guardian v2 评分缓存** — 保证评分与保留的分类器会话跟随各自的策略修订版，避免重叠回合串用。
   https://github.com/openai/codex/pull/62083

4. **#62080 为内置 App hooks 增加经策略校验的分发路径** — hook MCP 调用携带期望的 connector 身份，内置 App 分发要求宿主 Apps server、匹配的 connector 及当前策略许可。
   https://github.com/openai/codex/pull/62080

5. **#62094 确保 Windows 沙箱密码包含所有字符类** — 修复从合并字符表随机取样可能缺失密码策略所要求字符类、导致沙箱账户密码更新失败的问题。
   https://github.com/openai/codex/pull/62094

6. **#62096 集中 app-server 回合错误转换** — 为 `TurnError` 增加共享的 `From<ErrorEvent>` 实现，并在线程历史、rollout 投影与实时事件处理中复用。
   https://github.com/openai/codex/pull/62096

7. **#62093 v2 `send_message` 返回空成功输出** — 移除成功响应中的确认文本与 `followup_task` 提示，包括发往根代理的消息。
   https://github.com/openai/codex/pull/62093

8. **#62092 压缩时先跳过近期 rollout 再读取头部** — 避免在 relatime 挂载上因扫描读取头部而更新不参与压缩的近期 rollout 的访问时间。
   https://github.com/openai/codex/pull/62092

9. **#62079 配置服务器支持设备码登录** — 修复 `codex login --device-auth` 在需要配置服务器登录时仍走浏览器授权、无法使用设备码流程的问题。
   https://github.com/openai/codex/pull/62079

10. **#62076 在 rollout 片段搜索中复用正则** — 线程搜索原先为每个 rollout 文件重复编译相同的片段匹配正则，复用后可保留正则缓存。
    https://github.com/openai/codex/pull/62076

另有关注度较高的长期开放 PR **#31476**（core: capture request-stable connector runtime tools），引入默认关闭的 `apps_runtime_state_refactor` 特性，按模型采样步捕获 connector 运行时状态。
https://github.com/openai/codex/pull/31476

## 5. 功能需求趋势

- **Computer Use 的可靠性**：两个最高热度 Issue 均围绕 Windows Computer Use（窗口状态读取、截图后权限与边框清理），说明屏幕/窗口自动化是当前社区投入最多的使用面。
- **MCP 生命周期管理**：stdio 服务器与子代理相关的 fd 泄漏、孤儿进程、内存增长长期未解，指向 MCP 进程治理与长会话资源回收需求。
- **跨设备与远程协作**：Codex Remote（Windows/Android）配对失败、云端会话恢复失败、跨端 "无可用执行环境" 等，显示云端托管会话 + 移动端接入是活跃使用场景。
- **配额与限速体验**：用量消耗加快、达上限时的排队提交请求（#15788）反映社区希望配额策略更可预期、可配置。
- **企业/受管环境兼容性**：AppLocker 拦截运行时、沙箱密码策略适配，说明企业部署是明确需求方向。

## 6. 开发者关注点

- **Windows 平台问题高度集中**：今日 20 条热门 Issue 中过半带 `windows-os` 标签，涉及会话恢复、发送按钮禁用、本地项目丢失、远程连接与配对，建议 Windows 用户谨慎评估升级节奏。
- **长会话资源泄漏是反复出现的痛点**：#26984、#25015 均为数月未关的 MCP/子代理资源泄漏问题，直接影响 CLI 与 app-server 的持续运行稳定性。
- **状态与配置一致性**：#22771（权限模式变更跨会话生效而非仅当前会话）、#36322（工作区认证下忽略配置的默认 `model` 与 `service_tier`）反映用户对配置作用域和生效优先级的困惑。
- **本地数据增长**：#35823 的 SQLite 日志文件不回收页问题，是长期运行用户的磁盘占用隐患。
- **PR 侧信号**：同日批量合并的修复集中在沙箱安全与 Guardian 策略校验，说明安全边界与授权一致性是当前内部开发重心，与社区侧的稳定性诉求并行推进。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报（2026-11-17）

## 1. 今日速览

今日无新版本发布，社区活动集中在 subagent 稳定性和安全策略两条主线。Issues 侧，多个 P1 级 subagent 故障（MAX_TURNS 被误报为成功、generalist agent 挂起、Wayland 下 browser subagent 失败）持续更新评论，反映出子代理执行链路的可靠性仍是最大痛点。PR 侧，一批针对 PolicyEngine / shell 命令安全判定的修复（保留 ASK_USER、re2js 线性时间正则、YOLO 模式一致性）集中涌现。

## 2. 版本发布

过去 24 小时无新版本发布。

## 3. 社区热点 Issues（10 个）

1. **[#22323] Subagent 在 MAX_TURNS 后恢复被误报为 GOAL 成功**（P1，13 条评论，👍2）
   `codebase_investigator` subagent 在未做任何分析即触达最大轮次限制时，仍返回 `status: "success"` 和 `Termination Reason: "GOAL"`，掩盖了中断事实。这是今日评论最多的 Issue，直接影响用户对 subagent 输出可信度的判断。
   https://github.com/google-gemini/gemini-cli/issues/22323

2. **[#21409] Generalist agent 无限挂起**（P1，8 条评论，👍8）
   一旦 CLI 转向 generalist agent 就永久卡住，连创建文件夹这类简单操作也会挂起，用户等待长达一小时。点赞数为本批最高，说明遭遇面较广。
   https://github.com/google-gemini/gemini-cli/issues/21409

3. **[#19873] 利用模型的 bash 亲和性：零依赖 OS 沙箱与执行后意图路由**（P2，9 条评论）
   大型设计提案，主张针对 Gemini 3 原生偏好链式 POSIX 工具（grep/cat/sed/awk）的特性，配套沙箱与执行后路由机制。属于架构级方向讨论。
   https://github.com/google-gemini/gemini-cli/issues/19873

4. **[#21968] Gemini 不会主动使用 skills 和 sub-agents**（P2，7 条评论）
   用户反馈除非显式指令，模型基本不会自行调用自定义 skills 与 subagent，削弱了这些能力的实际价值。
   https://github.com/google-gemini/gemini-cli/issues/21968

5. **[#22745] 评估 AST 感知的文件读取、搜索与代码映射**（P2，7 条评论，👍1）
   EPIC 型调研，目标是减少工具调用轮次、提升代码库理解精度，并关联 #22746 对 AST 感知 CLI 工具的调研。
   https://github.com/google-gemini/gemini-cli/issues/22745

6. **[#22267] Browser Agent 忽略 settings.json 覆盖（如 maxTurns）**（P2，5 条评论）
   尽管 AgentRegistry 能读取配置，Browser Agent 仍完全忽略全局/项目级 `settings.json` 覆盖项，配置可信度问题。
   https://github.com/google-gemini/gemini-cli/issues/22267

7. **[#21983] browser subagent 在 Wayland 下失败**（P1，4 条评论，👍1）
   Linux Wayland 环境下的浏览器子代理直接失败，属于平台兼容性阻塞问题。
   https://github.com/google-gemini/gemini-cli/issues/21983

8. **[#24246] 工具数超过 128 时触发 400 错误**（P2，3 条评论）
   可用工具过多时 CLI 报 400，期望模型能更智能地限定启用工具范围，涉及 agent 工具选择策略。
   https://github.com/google-gemini/gemini-cli/issues/24246

9. **[#22672] Agent 应阻止/抑制破坏性行为**（P2，3 条评论，👍1）
   模型在复杂 git 操作中偶尔使用 `git reset`、`--force` 等危险命令，而存在更安全的替代方案；Issue 还提及数据库等资源维护场景。
   https://github.com/google-gemini/gemini-cli/issues/22672

10. **[#22598] Subagent 轨迹应可通过 `/chat share` 查看**（P3，2 条评论，👍1）
    轨迹虽已由 chat recording 服务保存但难以访问，便于审查与评估 subagent 行为，属可观测性需求。
    https://github.com/google-gemini/gemini-cli/issues/22598

补充：**[#22186] get-shit-done 输出钩子导致崩溃**（P1，3 条评论）为高优先级崩溃类问题，值得一并关注。
https://github.com/google-gemini/gemini-cli/issues/22186

## 4. 重要 PR 进展（10 个）

1. **[#30339] fix(acp): 暴露 BeforeAgent 钩子拒绝与停止原因**（size/m）
   修复 ACP 模式下 `BeforeAgent`/`AfterAgent` 钩子拒绝或停止执行时未正确上报的问题（关联 #30114、#30132）。
   https://github.com/google-gemini/gemini-cli/pull/30339

2. **[#30338] fix(core): 对含未解析展开的 shell 命令保留 ASK_USER**（size/l）
   `PolicyEngine.applyShellHeuristics()` 基于未展开文本分类命令，此 PR 对 bash 会重写参数的命令保留人工确认，避免自动放行。
   https://github.com/google-gemini/gemini-cli/pull/30338

3. **[#30282] refactor(core): 使用 re2js 实现线性时间策略正则评估**（size/xl）
   将 `argsPattern`、`commandRegex`、`commandPrefix` 规则改用 `re2js` 的 `SafeRegExp` 包装，规避正则回溯风险。
   https://github.com/google-gemini/gemini-cli/pull/30282

4. **[#30268] fix(core): 在污点与构建文件检查中尊重 YOLO 模式**（size/l）
   使 `--approval-mode=yolo` 的交互与无头运行不再被风险检查误中断，修正策略一致性。
   https://github.com/google-gemini/gemini-cli/pull/30268

5. **[#30289] fix(cli): 披露规范链接路径并将默认同意提示设为 no**（P1，size/l）
   调整 `gemini extensions link` 与扩展同意流程，路径解析到规范目标，默认不同意，属安全加固。
   https://github.com/google-gemini/gemini-cli/pull/30289

6. **[#30334] fix(core,cli): 异步解析 PowerShell 命令以避免 UI 卡死**（P2，size/xl）
   修复 Windows 上验证/执行 PowerShell 时 Thinking 与计时器冻结数秒的问题。
   https://github.com/google-gemini/gemini-cli/pull/30334

7. **[#30335] fix(core): 不再用空字符串覆盖 core.sshCommand**（size/m）
   `getSafeGitEnv()` 将 `core.sshCommand` 置空导致 Git 执行失败（`cannot run :`），影响所有需 SSH 的操作。
   https://github.com/google-gemini/gemini-cli/pull/30335

8. **[#30332] fix(cli): 支持逗号分隔的 MCP 工具过滤**（size/m/l）
   修复 `gemini mcp add` 的 `--include-tools`/`--exclude-tools` 对逗号分隔列表的处理。
   https://github.com/google-gemini/gemini-cli/pull/30332

9. **[#30331] fix(cli): 保留含 = 与空值的 MCP 环境变量**（size/s）
   修复 `-e KEY=value` 使用 `split('=')` 导致 `TOKEN=abc=def==` 被截断为 `"abc"` 且仍返回 0 的静默错误。
   https://github.com/google-gemini/gemini-cli/pull/30331

10. **[#30321] chore(deps): 更新工作区依赖与沙箱运行时包**（size/xl）
    同步 npm 依赖与 Stage 2 沙箱容器 Dockerfile 运行时，保持系统包、全局 npm 与 overrides 一致。
    https://github.com/google-gemini/gemini-cli/pull/30321

## 5. 功能需求趋势

- **Subagent 可靠性与可观测性**：误报成功、挂起、配置忽略、轨迹不可见（#22323、#21409、#22267、#22598）构成今日最密集的方向。
- **主动调用能力**：模型不主动使用 skills/subagent（#21968），以及 subagent 示例缺位（#18283），指向"该用时会用"的能力缺口。
- **AST 感知代码理解**：以 AST 感知方式做文件读取、搜索与代码库映射（#22745、#22746）以减少轮次、提升精度，并关联 codebase_investigator 改进（#18282）。
- **安全与危险操作抑制**：对 `git reset`/`--force` 等破坏性命令的约束（#22672），与 PR 侧的 PolicyEngine、ASK_USER、YOLO 一致性修复形成呼应。
- **平台兼容与稳定性**：Wayland 浏览器子代理（#21983）、Windows PowerShell 卡顿（#30334）、工具数超限 400 错误（#24246）。
- **MCP 配置健壮性**：环境变量解析、逗号分隔工具过滤（#30331、#30332）显示 MCP 接入细节仍在打磨。

## 6. 开发者关注点

- **可信度优先**：subagent 完成状态与终止原因必须如实反映，否则上层编排与用户判断均不可靠（#22323）。
- **避免无限等待**：generalist agent 挂起一小时以上是严重体验问题，需超时或恢复机制（#21409）。
- **配置应被尊重**：settings.json 覆盖项在实际代理中失效，削弱了用户对配置体系的信任（#22267）。
- **安全默认值**：含未解析展开的 shell 命令不应被自动放行；策略正则需防回溯；扩展同意默认应为 no（#30338、#30282、#30289）。
- **危险命令需护栏**：模型倾向使用 `--force` 类操作，开发者期望更安全的替代路径（#22672）。
- **跨平台可用性**：Linux Wayland、Windows PowerShell、Node 26 下的 HTTP MCP（#29801）等平台差异是高频摩擦点。
- **企业/自动化场景**：YOLO 无头运行不应被风险检查误打断（#30268），反映 CI/自动化使用诉求上升。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报（2026-11-17）

## 1. 今日速览

今日发布 v1.0.113 系列版本，核心新增是管理员可通过托管设置 `features.browserUse` 禁用内置 Browser Use 功能（含运行中的会话）。过去24小时 Issues 更新密集（50 条，多为 CLOSED），集中在会话恢复、子代理行为、MCP 认证与 Windows 平台兼容问题。Pull Requests 过去24小时无更新。

## 2. 版本发布

**v1.0.113 / v1.0.113-1 / v1.0.113-0**（2026-11-17）
- 新增：管理员可通过托管设置 `features.browserUse` 禁用内置 Browser Use，包括在正在运行的会话中生效。
- v1.0.113-0 仅标注为修复与变更，未提供具体条目。

## 3. 社区热点 Issues（10 条）

1. **[#5478](https://github.com/github/copilot-cli/issues/5478)（OPEN，4 评论）** — Windows 上 Cortex XDR 的 `parent_process_spoofing` 规则会在 Copilot CLI 调用 git 时杀掉启动 shell。安全软件兼容性直接影响 Windows 用户可用性。
2. **[#4674](https://github.com/github/copilot-cli/issues/4674)（CLOSED，4 评论）** — 恢复会话时不还原自定义代理（#917 回归），`mcp-servers:` 与 `tools:` 允许列表均未重新应用。影响依赖自定义代理的会话连续性。
3. **[#5290](https://github.com/github/copilot-cli/issues/5290)（CLOSED，3 评论，👍3）** — 缺少 `--fusion-tier` 参数，与官方文档中 `fusionTier` 的说明不一致。文档与实现对齐问题，获较多认同。
4. **[#4576](https://github.com/github/copilot-cli/issues/4576)（CLOSED，3 评论，👍5）** — `includeCoAuthoredBy: false` 不被 `task` 子代理继承，子代理提交仍带 Co-authored-by 尾注。影响提交规范与合规，点赞数较高。
5. **[#3106](https://github.com/github/copilot-cli/issues/3106)（CLOSED，3 评论）** — 会话进行中新增的 `.agent.md` 不被 task 工具的 `agent_type` 识别（热加载缺口），即使 `session.agent.reload` 已重新扫描磁盘。
6. **[#5165](https://github.com/github/copilot-cli/issues/5165)（CLOSED，2 评论）** — 1.0.98 版本中 Copilot Enterprise 账户被路由到 `api.business.githubcopilot.com`，模型目录返回 401。企业认证路由的关键故障。
7. **[#5040](https://github.com/github/copilot-cli/issues/5040)（OPEN，2 评论）** — MCP OAuth 场景下 Entra ID 拒绝 `127.0.0.1` 回调（AADSTS50011），且无 localhost 主机覆盖选项。影响企业远程 MCP 服务器接入。
8. **[#5318](https://github.com/github/copilot-cli/issues/5318)（CLOSED，2 评论）** — 内置 grep 输出压缩会误把数字文件名后缀/目录组件当作字段分隔符，导致文件名与行号错乱、不同文件被合并。
9. **[#4805](https://github.com/github/copilot-cli/issues/4805)（OPEN，2 评论）** — 崩溃宿主遗留的 `inuse.<pid>.lock` 永不被回收，导致会话无法重新打开（数据本身未损坏）。
10. **[#5483](https://github.com/github/copilot-cli/issues/5483)（OPEN，1 评论）** — 两条 `mode: "immediate"` 消息在同一步被合并为单条用户消息且各自被裁剪（"no" + "drop phase 7" 变成 "nodrop phase 7"），存在语义扭曲风险。

## 4. 重要 PR 进展

过去24小时内无 PR 更新（共 0 条），本节不适用。

## 5. 功能需求趋势

- **会话与状态可靠性**：会话恢复不还原代理（#4674）、锁文件残留致会话不可恢复（#4805）、孤儿/挂起进程清理命令 `/cleanup`（#1790）。
- **代理与子代理一致性**：配置继承（#4576）、代理热加载（#3106）、长工具调用序列下提示缓存失效与 token 消耗放大（#4829）。
- **MCP 与企业集成**：MCP OAuth 回调与 Entra 兼容（#5040）、非交互模式下 MCP Sampling 被拒（#2882）、多插件 `additionalContext` 仅最后一个生效（#5122）。
- **可观测性**：HydraFusion 按阶段输出模型、裁决与额度属性到 OpenTelemetry（#4825）。
- **上下文/指令发现**：`AGENTS.md` 沿符号链接与所有祖先目录加载，跨越仓库边界（#4822）。
- **平台与交互细节**：Windows 安全软件兼容（#5478）、`ctrl-t` 入队提示不执行（#4824）、语音模式安装 401（#4814）。

## 6. 开发者关注点

- **配置语义的一致性**：多处反馈显示设置项在主会话与子代理/插件之间继承不一致（#4576、#5122），热加载存在边界缺口（#3106）。
- **失败可诊断性不足**：凭证选择不可见（#4804）、企业路由 401（#5165）、模型列表加载时序问题（#4819）——开发者需要更清晰的错误与状态暴露。
- **非交互/自动化场景的可靠性**：`--allow-all` 下 MCP sampling 仍被拒（#2882）、immediate 消息合并与裁剪（#5483），影响 CI 与脚本化使用。
- **数据正确性风险**：grep 压缩导致文件名/行号错乱（#5318）、指令文件跨仓库误加载（#4822），可能误导模型决策。
- **安全软件与平台适配**：Windows 上 XDR 与 shell 进程树交互成为实际阻断点（#5478）。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 — 2026-11-17

## 1. 今日速览
今日核心动态是 OpenCode 1 正式开放升级至 2.0 的通道，采用后台下载、用户自选重启/退出时升级/稍后升级的方式，并保留会话、项目与设置，但 OpenCode 1 插件需更新；同时 `process-daemon` 发布 v0.6.0（协议 9，npm 包 `@opencode/pty@0.6.0`）。社区侧，V2 相关缺陷密集出现：工具调用参数跨调用损坏、缓存导致 MCP 子进程膨胀、移动端权限与斜杠命令故障等。功能呼声最高的仍是官方 VS Code 扩展（165 个 👍）。

## 2. 版本发布
- **v1.19.6（Desktop）**：OpenCode 1 提供升级至 OpenCode 2.0 的入口。2.0 在后台下载，仅在用户选择「重启升级」「退出时升级」或「稍后」时安装；会话、项目与设置均保留；为 OpenCode 1 编写的插件需要更新。
- **process-daemon v0.6.0**：来自 `packages/process-daemon` 的 `opencode-pty 0.6.0`（协议 9），以 `@opencode/pty@0.6.0` 发布到 npm。

## 3. 社区热点 Issues
1. **[#11176](https://github.com/anomalyco/opencode/issues/11176) 官方 VS Code 扩展（OPEN）** — 40 条评论、165 👍，是当前呼声最高的功能需求，直接关系 IDE 集成体验。
2. **[#47902](https://github.com/anomalyco/opencode/issues/47902) 工具调用参数跨调用损坏（2.0, triaging）** — V2 会话中工具参数出现内部序列化标记，且 schema 非法调用仍可执行，属核心正确性与数据完整性问题。
3. **[#53465](https://github.com/anomalyco/opencode/issues/53465) API 返回已解析的 Provider 凭据（OPEN）** — `/api/model`、`/api/config`、`/api/provider/{id}` 会把环境变量替换后的字面密钥返回，属于安全敏感问题。
4. **[#37844](https://github.com/anomalyco/opencode/issues/37844) 缓存 Location 导致 MCP 子进程倍增（bug/perf/core）** — 单个 V2 服务下观察到约十组重复 MCP 进程，资源占用风险明确。
5. **[#56862](https://github.com/anomalyco/opencode/issues/56862) 子代理因上下文压缩持续失败（reproduced）** — 读取大文件后压缩失败，影响长上下文工作流稳定性。
6. **[#54588](https://github.com/anomalyco/opencode/issues/54588) 复用的 tool-call ID 产生重复 function_call_output（reproduced）** — 会话永久卡死、无法恢复，属于会阻断使用的严重缺陷。
7. **[#64481](https://github.com/anomalyco/opencode/issues/64481) 失败响应被持久化为空参数工具调用（2.3.0）** — 随后会话循环报 `Invalid arguments ... {}`，暴露错误处理与状态持久化问题。
8. **[#61899](https://github.com/anomalyco/opencode/issues/61899) 桌面端集成终端 Ctrl+C 无法中断进程** — 只能 `taskkill /F /PID`，影响日常开发可用性。
9. **[#64468](https://github.com/anomalyco/opencode/issues/64468) 移动端审批过期请求返回 404 且卡片无限重试** — 涉及 iOS/Android 官方 App 与 `opencode pair --remote` 配对流程。
10. **[#64469](https://github.com/anomalyco/opencode/issues/64469) 移动端斜杠命令选择器点击与输入 `/goal` 均失效** — 目标无法创建或展示，移动端端到端不可用。

其他值得留意：#51247（V2 中 `HTTPS_PROXY` 失效，已关闭）、#53402（V2 缺少 `CLAUDE.md` 回退，已关闭）、#54816（TUI 本地 Markdown 链接被交给仅支持 HTTP 的浏览器打开）、#55094（TUI 选区高亮反色）、#64415（TUI 启动后新增键位不热重载）、#64484（2.3.0 间歇性 ECONNRESET）。

## 4. 重要 PR 进展
1. **[#64486](https://github.com/anomalyco/opencode/pulls/64486) websearch：按调用选择搜索 Provider（OPEN）** — 打通了 schema 与 HTTP API 中已存在但未被模型使用的 `providerID`。
2. **[#64437](https://github.com/anomalyco/opencode/pulls/64437) codemode：新增可嵌入的 Rust 移植（OPEN, contributor）** — 新增 `packages/codemode-rust`，使任意 Rust 程序可嵌入 Code Mode。
3. **[#64487](https://github.com/anomalyco/opencode/pulls/64487) codemode：拆分语言层与 Code Mode（OPEN, contributor）** — 落实既定的语言层/Code Mode 分层设计。
4. **[#64492](https://github.com/anomalyco/opencode/pulls/64492) fix(ai)：chunkTimeout 只计模型输出，不计 keep-alive（OPEN）** — 针对 Zen 上流式 `anthropic-messages` 中途静默的问题。
5. **[#64381](https://github.com/anomalyco/opencode/pulls/64381) core：会话中途工具变更就地发送（OPEN）** — 处理 MCP 服务器连接变化导致工具集变化时的发送语义。
6. **[#63858](https://github.com/anomalyco/opencode/pulls/63858) Bedrock 拒绝 reasoning 时降级重试（OPEN）** — 修复 Bedrock Converse 上 OpenAI 模型回放推理块报 400 的问题（Closes #63857）。
7. **[#64029](https://github.com/anomalyco/opencode/pulls/64029) server：在 plugin.list 上报插件就绪状态（OPEN）** — 异步插件提案的就绪部分实现。
8. **[#64482](https://github.com/anomalyco/opencode/pulls/64482) codemode：每次运行自选运行时扩展（CLOSED）** 与 **[#64476](https://github.com/anomalyco/opencode/pulls/64476) 在 `full_codemode` 后加入 Node `path`（CLOSED）** — 提升 Code Mode 脚本能力与宿主可控性。
9. **[#64477](https://github.com/anomalyco/opencode/pulls/64477) docs(console)：暂缓收录语音模型（CLOSED）** — 仅保留图像模型，`gpt-live-1` 待用量数据就绪后再上线。
10. **[#59785](https://github.com/anomalyco/opencode/pulls/59785) 审阅面板复制完整文件内容（CLOSED，Closes #58878）** — 设计尚未获批，实现已就绪。

另有文档类 PR：[#64491](https://github.com/anomalyco/opencode/pulls/64491)（Zen 新增 GPT 6.2 Astra/Sol 及定价）、[#64493](https://github.com/anomalyco/opencode/pulls/64493)（上调 Go 上 GLM 5.3 用量上限）。

## 5. 功能需求趋势
- **IDE 集成**：官方 VS Code 扩展仍是最大诉求（#11176）。
- **V2 兼容与迁移**：`CLAUDE.md` 回退（#53402）、代理环境变量（#51247）、OpenCode 1 插件需更新（Release 说明）等迁移摩擦集中显现。
- **Code Mode 与扩展性**：Rust 移植、语言层拆分、按运行选择扩展、插件就绪上报、Desktop 内联插件 HTML/JS（#57818）共同构成插件/脚本能力主线。
- **模型与 Provider 生态**：按调用选择搜索 Provider、新模型接入与定价文档、Bedrock 推理块兼容、Go 用量上限调整。
- **移动端**：配对流程、权限审批、斜杠命令与目标（#64468、#64469）。
- **性能与资源**：MCP 子进程膨胀（#37844）、超时与保活语义（#64492）。
- **桌面/TUI 细节**：终端 Ctrl+C、复制按钮常显（#64478）、键位热重载。

## 6. 开发者关注点
- **正确性与可恢复性优先**：参数损坏（#47902）、会话卡死（#54588）、失败响应持久化为空参数（#64481）都属于会让会话无法继续的问题，且多条已标记 `reproduced`。
- **安全敏感面**：API 返回解析后的明文凭据（#53465）需优先处理。
- **V2 稳定性**：ECONNRESET（#64484）在 #60399 修复后仍于 2.3.0 间歇出现，用户希望修复不只是口头「最新版已修」。
- **资源占用**：MCP 进程重复启动影响性能与内存。
- **跨平台一致性**：Windows 端问题在本期 Issue 中出现频率较高（终端中断、网络、移动端配套）。
- **贡献活跃但评审待跟进**：多个 CLOSED PR 标注「设计审批待定」，说明实现先行、流程需加速。

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报 · 2026-11-17

## 1. 今日速览

今日无新版本发布，但 Issue 与 PR 活动极为密集：48 条 Issue 更新、17 条 PR 更新，且大量条目集中在**会话事件（session lifecycle）一致性**与**全屏模式性能**两大主题上。prtrroll 一人提交的一批会话事件修复 PR（#12230–#12235）集中关闭了 RPC 重复触发、print 模式漏发事件、reload 不触发等一类问题；性能方面 #9549（大型 transcript 每帧重渲染）仍是评论最多的开放 Issue，配套的滚动帧优化 PR #11968 已合入。

## 2. 版本发布

过去 24 小时无新 Release。

## 3. 社区热点 Issues

1. **#9549 [OPEN] 全屏下大型 transcript 每帧重渲染，单核被占满** — 评论 18，今日最热开放 Issue。Windows Terminal 环境下整条 transcript 在每次 resize 时重发，属于典型性能回归。PR #11968 已修好滚动帧部分，但常规模式 resize 与 spinner 开销仍开放，值得持续跟踪。
   https://github.com/earendil-works/pi/issues/9549

2. **#11021 [OPEN] ChatGPT 登录下 GPT-6.1 Sol 上下文仍按 272K 而非账号目录的 500K** — 👍 8，是今日点赞最高的 Issue。上下文窗口被少算近一半，直接影响长任务可用性，属于认证路径与模型目录不一致的问题。
   https://github.com/earendil-works/pi/issues/11021

3. **#7885 [CLOSED] npm search 未索引 8 月 4 日后新发布的 pi-packages** — 评论 17。发布者能上 npm、详情页正常，但不进 pi.dev/packages 画廊，生态分发链路断裂，对包作者影响直接。
   https://github.com/earendil-works/pi/issues/7885

4. **#6873 [CLOSED][no-action] 新包永远不进 browse/search 列表** — 与 #7885 同源，评论 6、👍 2。两条同问题 Issue 同时更新并以 CLOSED 收尾，说明官方做了结论性处理，但列表索引问题对社区可见度影响持续。
   https://github.com/earendil-works/pi/issues/6873

5. **#12266 [CLOSED] 空闲的第二个 Pi 实例用陈旧 leafId 追加条目，导致会话树分叉** — 当日创建当日处理，评论 5。多进程同时打开同一 session 文件是典型并发缺陷，resume 落到空分支会让用户丢失上下文。
   https://github.com/earendil-works/pi/issues/12266

6. **#12096 [OPEN][bug] `/login llama.cpp` 连接配置不跨会话持久化** — 评论 5，OPEN 状态。本地推理用户每次启动都要重新登录，属于体验层面的高频摩擦点。
   https://github.com/earendil-works/pi/issues/12096

7. **#12070 [OPEN] google-vertex 流式未接 timeoutMs，且流中断/超时未被归为可重试** — 评论 4。来自多轮 coding agent 评测场景，Vertex 流卡住或重置会直接毁掉评测结果，云厂商接入的健壮性问题。
   https://github.com/earendil-works/pi/issues/12070

8. **#12076 [OPEN][bug] 压缩流程在工具循环中静默结束而非执行压缩** — 评论 4，Pi 1.5.2 + vLLM 复现两次。接近上下文上限时关键行为失效，会让长会话直接中断，属于功能正确性问题。
   https://github.com/earendil-works/pi/issues/12076

9. **#12184 [CLOSED] Google 适配器拒绝 Gemini 4 Hydrogen 的 xhigh 思考档位** — 评论 4。新模型四档 thinking level 未映射，导致新模型能力无法通过 `/thinking` 使用，反映新模型适配滞后。
   https://github.com/earendil-works/pi/issues/12184

10. **#11226 [OPEN][bug] codemode 脚本声明顶层变量 `tools` 时在运行前即失败** — 评论 4，作者从 Claude Code 迁来并给予正面评价。变量名碰撞属易踩坑点，影响 codemode 上手体验。
    https://github.com/earendil-works/pi/issues/11226

补充提及：**#10798** 并发 Pi 进程对共享 `.pi/npm` 前缀的托管 npm install 无锁竞争（OPEN）；**#12248**、**#12265**、**#12264** 三条当日提交并关闭的 untriaged 问题分别涉及 `pi update --models` 跳过内置扩展注册的 provider、虚拟模型下 compaction.modelOverrides 被忽略、OpenAI Decisions GA 缓存用量丢失。

## 4. 重要 PR 进展

1. **#12230 [CLOSED] RPC 模式下 new_session/switch_session/fork/clone 只发一次 session_start** — 关闭 #10470，修掉扩展处理器被触发两次且中间无 session_shutdown 的问题。
   https://github.com/earendil-works/pi/pull/12230

2. **#12231 [CLOSED] reload 在 bindExtensions({}) 后补发 session_start** — 修掉因条件判断过严导致扩展收不到 start 事件。
   https://github.com/earendil-works/pi/pull/12231

3. **#12232 [CLOSED] JSON print 模式流式输出 session_start 事件** — 之前订阅晚于 bindExtensions，导致扩展在 session_start 中 append 的 entry 事件丢失。
   https://github.com/earendil-works/pi/pull/12232

4. **#11968 [CLOSED] 全屏滚动帧降为 O(viewport)** — 针对 #9549 的滚动部分，此前每个滚轮事件（最高 60 帧/秒）都会重建整条 transcript。
   https://github.com/earendil-works/pi/pull/11968

5. **#12236 [CLOSED] 交互 TUI 运行时捕获 git / npm 输出** — 此前 `runCommand()` 用 `stdio: "inherit"`，会污染全屏界面。
   https://github.com/earendil-works/pi/pull/12236

6. **#12229 [CLOSED] 从 Codex WebSocket 60 分钟连接上限中恢复** — 关闭 #12124，长时间连续任务不再因连接上限报错中断。
   https://github.com/earendil-works/pi/pull/12229

7. **#12234 [CLOSED] /resume 后及各模式下上报模型回退** — 会话恢复时模型不存在或无登录会静默换模型，现在会明确提示。
   https://github.com/earendil-works/pi/pull/12234

8. **#12262 [CLOSED] boundary-draft 压缩补发 session_compact** — 通过 boundary draft 提交压缩时只发 entry_appended，扩展依赖的 compact 事件缺失。
   https://github.com/earendil-works/pi/pull/12262

9. **#12249 [CLOSED] 在流式 assistant 消息上记录 ttftMs / ttfaMs** — 在已有 durationMs 之外补充首 token 延迟，为延迟分析提供数据基础。
   https://github.com/earendil-works/pi/pull/12249

10. **#11370 [OPEN] 新增 DeepInfra、Nebius、Ollama Cloud、Scaleway、SiliconFlow、StepFun 六个托管推理 provider** — 基于 models.dev 贡献活跃度与 issue 需求挑选，Stacked on #11369，是今日最值得关注的 provider 扩展。
    https://github.com/earendil-works/pi/pull/11370

另有 **#12246**（/login 与 /logout 搜索选中最佳匹配，OPEN）、**#12256**（抑制高优先级 skill 覆盖时的误报警告）、**#12235**（p2 Web UI 按设备/平台显示手势与键位提示）今日合入。

## 5. 功能需求趋势

- **会话生命周期与事件一致性**：RPC、print、reload、boundary draft 多处 session_start / session_compact 语义不统一，是本轮最集中的修复类别。
- **并发与多进程安全**：同一 session 文件被两个进程打开（#12266）、共享 npm 前缀无安装锁（#10798），并发场景缺陷开始集中暴露。
- **模型与 provider 适配跟进**：新模型能力（Gemini 4 Hydrogen 的 xhigh）、上下文窗口（#11021）、流式超时与重试（#12070）、provider 扩展（#11370）、新增 Sarvam AI 内置 provider 请求（#12258）。
- **压缩（compaction）行为**：静默结束工具循环（#12076）与虚拟模型下 modelOverrides 失效（#12265）显示压缩逻辑在复杂路由下边界不清。
- **性能与全屏 TUI**：大型 transcript 重渲染（#9549）是当前唯一仍在开放的高评论性能议题。
- **生态分发（pi.dev/packages 索引）**：#7885 与 #6873 表明包发布—索引链路是包作者的核心关切。
- **极简本地/自托管推理**：llama.cpp 登录持久化（#12096）、vLLM 相关反馈持续出现。

## 6. 开发者关注点

- **静默失败最伤体验**：模型回退不上报、压缩静默结束、流超时不重试——开发者反复要求"出问题时明确说出来"。
- **多进程/并发场景缺少保护**：session 树分叉、npm 安装竞争，均无锁或版本校验机制。
- **新模型上线即需可用**：thinking 档位、上下文窗口与账号目录不一致，会直接被用户感知为"新模型不好用"。
- **扩展开发者对事件语义敏感**：session_start 重复/缺失、user_bash_complete 之类新事件的诉求（#8530，已以 no-action 关闭），说明扩展生态已进入精细化阶段。
- **全屏 TUI 的质量门槛**：大 transcript 性能与 TUI 中命令输出污染是两个独立但都影响日常使用的点。
- **迁移用户口碑正面**：#11226 中用户明确表示从 Claude Code 迁来"像呼吸到新鲜空气"，这类反馈在 bug 报告中值得关注。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报（2026-11-17）

## 1. 今日速览

今天 Qwen Code 发布 v0.28.0 正式版及 v0.28.1-preview.0 预览版，同时更新 TypeScript SDK 和桌面端。Web Shell 侧边栏工作区过滤、managed-agent 的钉钉适配器是本次版本的核心新增能力。Issue 侧最显著的是 Java SDK 集中爆出十余个 P2 级缺陷（均由同一贡献者提交），以及 1.x 分支自定义 Provider 环境变量引用无法解析的 P1 问题。

---

## 2. 版本发布

| 版本 | 说明 |
|---|---|
| **v0.28.0** | 正式版，无已知 Breaking Changes。Features 包括 `feat(web-shell)` 侧边栏工作区过滤（#17244，by @callmeYe）等。 |
| **v0.28.1-preview.0** | 预览版，含 managed-agent 全栈 E2E 中真实定时 `/loop` 触发的测试观测（#17506，by @wenshao）、`fix(verify-pr)` 加固等。 |
| **desktop-v0.28.0** | 桌面端同步，包含 Web Shell 侧边栏工作区过滤、managed-agent 钉钉适配器。 |
| **sdk-typescript-v0.1.35** | TypeScript SDK 发布，捆绑 CLI 0.28.0（由同分支源码构建）。 |
| **v0.27.4-nightly.20261116.eb3a599ef3** | 夜间构建，含侧边栏工作区过滤与钉钉适配器。 |

- v0.28.0: https://github.com/QwenLM/qwen-code/releases
- PR #17244: https://github.com/QwenLM/qwen-code/pull/17244
- PR #17506: https://github.com/QwenLM/qwen-code/pull/17506

---

## 3. 社区热点 Issues

1. **#14724 [OPEN] [type/bug] Main CI failed: Managed Agent gate — no test identified**（429 条评论）
   主 CI 持续失败的长尾 Issue，自 2026-10-19 创建至今仍在更新，评论量远超其他 Issue，说明 Managed Agent 门禁问题长期未收敛，值得维护者优先处理。
   https://github.com/QwenLM/qwen-code/issues/14724

2. **#17659 [OPEN] [P1] 自定义 Provider apiKey 环境变量引用在启动时不解析**
   设置 schema 推荐用环境变量引用 `providers.<id>.apiKey`，但启动路径从不解析，导致密钥放在环境变量中完全无法使用。用户报告在 1.0.0-preview.1/2 均可复现，属 1.x 分支的阻断级问题。
   https://github.com/QwenLM/qwen-code/issues/17659

3. **#10932 [OPEN] [P2] 语音听写无法使用 Token Plan ASR**
   语音管线硬编码旧模型 ID，拒绝 `qwen-audio-3.0-asr-flash`，导致 Token Plan 的 ASR 模型完全不可用。涉及新模型家族支持，状态为 `ready-for-human`。
   https://github.com/QwenLM/qwen-code/issues/10932

4. **#17559 [OPEN] [P2] Web Shell 回合进行中发送的提示未写入会话 transcript**
   用户消息能送达模型并得到响应，但未被持久化为 `user` 记录。属于会话 transcript 完整性问题，影响历史回放与审计。
   https://github.com/QwenLM/qwen-code/issues/17559

5. **#17640 [OPEN] [P2] Java SDK 初始化失败后遗留子进程**
   `QwenCodeCli.newSession` 超时抛出、`AcpClient` 被拒时均不释放子进程，造成进程泄漏。属 Java SDK 批量缺陷之一。
   https://github.com/QwenLM/qwen-code/issues/17640

6. **#17641 [OPEN] [P2] Java SDK `simpleQuery` 丢弃 assistant tool-use 输入**
   线路上有完整 input，但返回 `{}`。影响所有依赖工具调用结果的 Java 集成方。
   https://github.com/QwenLM/qwen-code/issues/17641

7. **#17642 [OPEN] [P2] Java SDK 文件读取用路径分隔符拼接文本行**
   `onReadTextFileRequest` 在每行后追加 `File.separator`，Linux 下 `alpha\nbeta\n` 变成 `alpha/beta/`。属于数据损坏级缺陷，且标记 `ready-for-agent`。
   https://github.com/QwenLM/qwen-code/issues/17642

8. **#17602 [OPEN] [P2] Java SDK `Session.cancel` 发送未带作用域的 JSON-RPC 请求**
   `session/cancel` 帧缺少 `params.sessionId`，不符合捆绑的 ACP schema，取消操作可能无法定位会话。
   https://github.com/QwenLM/qwen-code/issues/17602

9. **#17635 [OPEN] [P2] Git worktree 忽略仓库 info/exclude 规则**
   `GitIgnoreParser` 只读 `<projectRoot>/.git/info/exclude`；worktree 或 `--separate-git-dir` 场景下 `.git` 是文件，规则被静默忽略。
   https://github.com/QwenLM/qwen-code/issues/17635

10. **#17646 [OPEN] [P2] 未使用的 event iterator 清理会释放他人的活跃订阅**
    未启动的 iterator 调用 `return()`/`throw()` 时可能释放其他 iterator 的 guard，属并发正确性问题，标记 `ready-for-agent`。
    https://github.com/QwenLM/qwen-code/issues/17646

---

## 4. 重要 PR 进展

1. **#17557 fix(web-shell): 对齐 managed 错误与 DAC 并稳定恢复流程**（by @yiliang114）
   将请求失败、会话失败与阻塞性恢复诊断改为与 DAC 相同的普通错误消息渲染，移除对话上方的恢复面板。
   https://github.com/QwenLM/qwen-code/pull/17557

2. **#17662 feat(serve): 统一所有流式接口的 SSE 准入与占用**（by @wenshao）
   把 #17502 的监听槽位保护扩展到 agent session-events、session/workspace 生成、artifact-library 等所有长连接流式面。
   https://github.com/QwenLM/qwen-code/pull/17662

3. **#17299 feat(web-shell): 在定时任务、侧边栏与会话头展示待触发的 loop 唤醒**（by @4ekuct25）
   `GET /scheduled-tasks` 新增 `wakeups` 数组，使 `/loop` 自调度唤醒可见。
   https://github.com/QwenLM/qwen-code/pull/17299

4. **#16661 fix(mcp): 修复被中止工具调用撕裂的 MCP 连接**（by @2SinceJuly）
   中止在途 MCP 请求会导致传输层断开、服务器进入 `DISCONNECTED`；原中止路径提前返回不做修复，现补齐重连修复。
   https://github.com/QwenLM/qwen-code/pull/16661

5. **#17500 feat(cli): 新增原生屏幕阅读器呈现**（by @chiga0）
   可选的屏幕阅读器模式，真实键盘控制 + 追加式语义输出，完成回复只播报一次；Ink 仍为默认。
   https://github.com/QwenLM/qwen-code/pull/17500

6. **#17541 feat(cli): 打磨终端布局与流式交互**（by @DragonnZhang）
   输入框固定底部、有界对话框居中、审批模式移至输入框右下边框的循环快捷键旁，虚拟滚动改用更小步长。
   https://github.com/QwenLM/qwen-code/pull/17541

7. **#17372 fix(core): 权限规则在重定向后保留参数**（by @Afloat16）
   `git > /dev/null push origin main` 现在生成 `Bash(git push *)`，既保留重定向后的参数，又不放行可执行文件的所有子命令。
   https://github.com/QwenLM/qwen-code/pull/17372

8. **#14204 feat(web-shell): 将选中消息文本引用到输入框或新侧任务**（by @4ekuct25）
   文本选择浮层新增 "Quote to composer"，与已有复制纯文本/复制 Markdown 并列。
   https://github.com/QwenLM/qwen-code/pull/14204

9. **#17518 feat(web-shell): 点击时按列表元数据显示会话产物数**（by @wenshao）
   会话摘要携带产物计数：活跃会话取内存产物存储，冷会话读取 transcript 旁的小型每会话摘要文件。
   https://github.com/QwenLM/qwen-code/pull/17518

10. **#15572 fix(core): 从中间模型回合背后提取真实 functionResponse**（by @suzhiguo7）
    孤儿 tool-use 修复在合成占位符前，先扫描相邻窗口之外寻找真正的 `functionResponse`。
    https://github.com/QwenLM/qwen-code/pull/15572

---

## 5. 功能需求趋势

- **多 SDK 生态补齐**：Java SDK 相关 Issue 集中涌现（初始化资源释放、工具调用解析、编码、并发写、JSON-RPC 错误处理），TypeScript SDK 已单独发版，社区对非 TS 语言集成需求明显上升。
- **集成渠道扩展**：managed-agent 持续接入钉钉适配器（#17173 跟进、桌面端同步），企业 IM 集成是当前主线之一。
- **Web Shell / 桌面端体验**：侧边栏工作区过滤、消息引用、loop 唤醒可见性、产物计数、错误渲染统一，Web Shell 是迭代最密集的表面。
- **可访问性**：原生屏幕阅读器呈现（#17500）进入 PR 阶段。
- **新模型支持**：Token Plan ASR 模型家族（`qwen-audio-3.0-asr-flash`）接入受阻（#10932）。
- **Provider 配置灵活性**：环境变量引用解析缺失（#17659），以及对 OpenAI 兼容 Provider 文档的补充请求（#16718）。
- **会话与任务可观测性**：session transcript 完整性（#17559）、定时任务/唤醒展示（#17299）。

---

## 6. 开发者关注点

- **阻塞级配置问题**：1.x 分支自定义 Provider 的 apiKey 环境变量不解析，直接阻断使用（#17659），是今日优先级最高的用户痛点。
- **Java SDK 质量集中告警**：单个贡献者（@Afloat16）一天内提交 10+ 个 P2 缺陷，涵盖进程泄漏、数据损坏（路径分隔符、UTF-8 编码、JSONL 边界交错）、并发锁阻塞、错误静默吞没，建议集中安排修复轮次。
- **编码与并发正确性**：Java 传输层未显式指定 charset、写操作非原子、空闲 append 锁未释放（#17577），是跨语言 SDK 的共性风险点。
- **CI 稳定性**：主 CI 长期失败（#14724，429 条评论）与 flaky 测试治理（#17558）持续消耗维护带宽；相关 PR #17553 为共享池卡顿给出统一等待档位。
- **1.x 迁移反馈**：用户明确报告 `1.0.0-preview.1/2` 上的问题，说明 1.x 预览已进入实际试用阶段，需加快反馈闭环。

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI 社区动态日报 · 2026-11-17

> 数据来源：github.com/Hmbown/DeepSeek-TUI。过去24小时无新版本发布；更新 Issues 2 条，更新 PR 16 条（下方按评论数展示 15 条，其中评论数均未显示，原文标记为 undefined）。

## 1. 今日速览

今日无新版本发布，但 0.10.3 的运行时/状态生命周期工作正在推进（#7282 已标注 `status:awaiting-release`）。社区焦点集中在两个性能与稳定性问题上：快照等待导致的 TUI 冻结（#7357 / #7360）与模型/端点路由的推理方言误判（#7349）。外部贡献者活跃，当天提交了多项 TUI、引擎与模型层的修复 PR。

## 2. 版本发布

过去24小时无新 Release。

## 3. 社区热点 Issues

说明：过去24小时仅 2 条 Issue 有更新，以下列出全部并在原因中说明；无法凑足 10 条，故不补充未提供的内容。

1. **#7282 [OPEN] 0.10.3：终端与后台任务归属其会话** — 作者 Hmbown，创建 2026-11-10，更新 2026-11-17，评论 1，👍 0。
   重要性：终端会话与后台任务绑定到发起它们的会话，会话结束时一并终止，避免任务“无家可归”地继续运行。标有 `tracking`、`v0.10.3`、`status:awaiting-release`，属于版本发布前的关键追踪项。
   社区反应：1 条评论，👍 0，讨论度低但属发布阻塞级议题。
   链接：codewhale-hq/Codewhale Issue #7282

2. **#7357 [OPEN] bug：新回合开始时请求保存快照，TUI 会冻结整个回合** — 作者 7jrxt42BxFZo4iAnN4CX，创建/更新 2026-11-16，评论 1，👍 0。
   重要性：当一个回合结束、新回合在数毫秒内开始时，TUI 会在新回合全程冻结——按键被忽略、无渲染，只能关闭终端退出。这是影响核心可用性的严重卡死问题。标签涉及 `area:tui`、`area:install`、`area:core`、`area:state`。
   社区反应：1 条评论；该问题直接催生了 #7360、#7361 两条修复 PR。
   链接：codewhale-hq/Codewhale Issue #7357

## 4. 重要 PR 进展

1. **#7360 [OPEN] fix(tui)：为终端快照等待设置上限** — 作者 deosiree，创建/更新 2026-11-17，外部贡献者。
   内容：将回合结束时请求的终端会话快照等待限制在既有的两秒 Engine 快照等待内；若 Engine 正忙于新回合，TUI 返回事件循环而非冻结。直接修复 #7357。已有维护者评审。
   链接：codewhale-hq/Codewhale PR #7360

2. **#7361 [CLOSED] fix(tui)：限制已完成回合的会话快照等待** — 作者 laozidabo，创建/更新 2026-11-17。
   内容：因与更早的 #7360 重复而关闭；作者说明其在分支构建期间未看到新 PR，并致谢 #7360 与问题诊断者。
   链接：codewhale-hq/Codewhale PR #7361

3. **#7364 [OPEN] fix(models)：在 Moonshot 路由上保留带 null 默认可选参数的 MCP 工具** — 作者 ruanchaves，创建/更新 2026-11-17，外部贡献者。
   内容：在 Moonshot（Kimi）模型上，若 Python 服务端的 MCP 工具含 `limit: int | None = None` 之类可选参数，会被从请求中丢弃，导致模型看不到该工具。此 PR 修复该问题。
   链接：codewhale-hq/Codewhale PR #7364

4. **#7363 [OPEN] fix(tui)：重新捕获焦点而不擦除视口** — 作者 laozidabo，创建/更新 2026-11-17，外部贡献者。
   内容：普通窗口焦点恢复当前会在重绘前擦除视口，在忽略 DEC 2026 的终端上会暴露中间空白屏。PR 将焦点重捕获与显式清除请求分离。
   链接：codewhale-hq/Codewhale PR #7363

5. **#7362 [OPEN] fix(engine)：避免命名回合撤销时重复读取历史** — 作者 laozidabo，创建/更新 2026-11-17，外部贡献者。
   内容：命名回合撤销先加载全部源回合与条目以解析相对深度，再委托给深度相对准备，导致历史被读两遍；长会话在撤销准备时多付一次全量历史读取。PR 消除该冗余读。
   链接：codewhale-hq/Codewhale PR #7362

6. **#7359 [CLOSED] fix(subagent)：子提示继承会话已评审的记忆** — 作者 gaord，创建/更新 2026-11-17，外部贡献者。
   内容：让子代理系统提示携带会话已评审的 native-memory 包及其 `## Memory Hygiene` 指引，与根会话提示保持相同字节；此前子代理两者皆无。状态为已关闭。
   链接：codewhale-hq/Codewhale PR #7359

7. **#7349 [CLOSED] fix(client)：按端点而非模型 id 决定推理方言** — 作者 SparkofSpike，创建/更新 2026-11-16，外部贡献者。
   内容：`kind = "openai-compatible"`（custom 身份）的提供商行若携带 DeepSeek 模型 id，会在 `/v1/chat/completions` 上被发送 DeepSeek 原生 `thinking` 对象；原因是 `apply_route_reasoning_controls` 对任何模型 id 都会提升。PR 改为按端点判定。状态为已关闭。
   链接：codewhale-hq/Codewhale PR #7349

8. **#6393 [OPEN] feat：源导航回显与受保护的 fork 前缀继承** — 作者 AdityaVG13，创建 2026-09-21，更新 2026-11-16，外部贡献者。
   内容：原生 `read` 窗口在最终模型请求投影中保留修订守卫；`grep_files` 增加有界 Rust 导航提示；fork 的代理保留符合条件的父前缀。为长期开放的功能性 PR。
   链接：codewhale-hq/Codewhale PR #6393

9. **#7358 [CLOSED] ci(cw-8178)：分片 PR CI 验证运行（草稿，将关闭）** — 作者 Hmbown，创建 2026-11-16，更新 2026-11-17。
   内容：仅用于触发 b086db35c3 上分片 CI 的 pull_request 触发器；不合并即关闭，变更走常规 main 路径。反映 CI 分片基础设施的验证工作。
   链接：codewhale-hq/Codewhale PR #7358

10. **#7335 [OPEN] chore(deps)：actions/setup-java 6.1.0 → 6.2.0** — 作者 dependabot[bot]，创建 2026-11-13，更新 2026-11-17。
    内容：常规依赖升级。同日还有多条 dependabot 更新（#7333 docker/login-action、#7332 action-gh-release、#7330 发布脚本、#7337 jsonschema 等），属维护性更新。
    链接：codewhale-hq/Codewhale PR #7335

## 5. 功能需求趋势

基于本次提供的 Issues（仅 2 条），可提炼的方向有限，仅就现有信息归纳：

- **会话生命周期与资源归属**：#7282 将终端与后台任务的生命周期绑定到所属会话，指向运行时/状态模型（`area:runtime-api`、`area:core`、`area:state`）的系统化治理。
- **TUI 响应性与稳定性**：#7357 的冻结问题表明，快照等阻塞式等待需要纳入超时/异步边界，性能与交互流畅性是社区关注方向。
- **多模型/多提供商路由正确性**：由 #7364（Moonshot/Kimi + MCP 工具）与 #7349（按端点判定推理方言）可见，兼容多提供商与 MCP 工具是持续的集成方向。

（未在提供的 Issues 中发现 IDE 集成等方向的具体证据，故不作推断。）

## 6. 开发者关注点

- **卡死与冻结是最痛的点**：#7357 描述新回合开始时 TUI 完全无响应、只能关终端，且同时引出两条修复 PR，说明快照等待的上限约束是当前最紧迫的工程问题。
- **长会话的性能开销**：#7362 指出命名回合撤销会重复读取全部历史，长会话为此额外付出一次全量读取。
- **终端渲染兼容性**：#7363 反映在忽略 DEC 2026 的终端上，焦点恢复会闪出空白屏。
- **跨提供商细节差异易出错**：MCP 工具的可选参数在 Moonshot 路由被丢弃（#7364）、DeepSeek 模型 id 在 openai-compatible 端点上被误用原生 `thinking` 对象（#7349），显示按端点/提供商分流逻辑需更严谨。
- **子代理上下文一致性**：#7359 指子代理系统提示缺失会话记忆与记忆卫生指引，开发者希望父子会话行为对齐。

---
*注：本日报严格基于所提供数据；评论数与点赞数在 PR 数据中多数缺失或显示为 0，Issue 评论数均偏低，热点判断以问题严重性为依据。*

</details>

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar-personal) 自动生成。*