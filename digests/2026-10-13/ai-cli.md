# AI CLI 工具社区动态日报 2026-10-13

> 生成时间: 2026-10-13 12:10 UTC | 覆盖工具: 9 个

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

# AI CLI 工具生态横向对比分析报告（2026-10-13）

## 1. 生态全景

当前 AI CLI 工具生态已从"功能可用"进入"生产可用"的深水区，竞争焦点从模型能力转向**可靠性、多代理编排与成本透明度**。今日 9 个工具中无一发布正式稳定版（仅 Gemini CLI、Copilot CLI、OpenCode、Pi 有 nightly/补丁或版本动作），但所有工具社区都在高频讨论崩溃恢复、会话状态一致性与平台兼容性。Windows/macOS 平台稳定性、长会话信任问题、BYOK/多 provider 路由是企业与重度用户的核心痛点。同时，企业落地（Azure DevOps、企业策略、系统级安装）与配置体系一致性成为新战场。

## 2. 各工具活跃度对比

| 工具 | Release 情况 | 热点 Issues（本期列举） | 重要 PR（本期） | 当日最热话题 |
|---|---|---|---|---|
| **Claude Code** | 无 | 10（+3 留意） | 1（首个 PR，已关闭） | Windows TUI 冻结（30 评论）、嵌套 subagent 编排失控 |
| **OpenAI Codex** | 无 | 10 | 10 | Windows daemon 终端闪烁（152 评论/155 👍） |
| **Gemini CLI** | v0.65.0-nightly | 10 | 10 | 子代理 MAX_TURNS 误报成功、generalist agent 永久挂起 |
| **GitHub Copilot CLI** | v1.0.97-0/-1/-2 | 10（+4 留意） | 无 | macOS Gatekeeper 拦截（22 👍）、BYOK 模型路由 |
| **Kimi Code CLI** | 无活动 | — | — | 无 |
| **OpenCode** | 无（v2.0.27/28 迭代中） | 10 | 10 | Snapshot 仓库膨胀 15 GB、压缩回退无界 |
| **Pi** | **v1.2.0 正式发布** | 10 | 10 | Windows sink-thread（83 评论）、codemode 破坏性变更 |
| **Qwen Code** | v0.25.1-nightly | 10（+8 关闭项） | 10 | Managed Agent 双路径架构（57 评论） |
| **DeepSeek TUI** | 无（0.10.2 RC） | 10（+3 留意） | 8 | `/undo` 严重 bug、Windows 稳定性 |

> 注：以上为本期提供的数据集范围，不代表各仓库全量。

## 3. 共同关注的功能方向

- **多代理/子代理编排可靠性**（最集中）：Claude Code（#75043 嵌套 subagent 失控）、Gemini CLI（#22323 误报成功、#21409 永久挂起、#21968 不主动用子代理）、Qwen Code（Managed Agent 双路径 #12380、崩溃阻塞 lead Session #13847）、OpenCode（并行 hook 错误保留 #50399）、Pi（multi-agent V2 相关）。

- **会话/上下文与成本管理**：Claude Code（#77001 长会话用量异常）、OpenCode（#43250 keep.tokens 失效、#51109 cache TTL 可配）、Qwen Code（#12333 工具加载成本评估）、DeepSeek TUI（#6969 工具箱驱逐经济性）。

- **企业级集成与部署**：Copilot CLI（Gatekeeper #970、系统级安装器 #5129、managed policy #5130）、Codex（Azure DevOps #10665、代理环境 #49829）、Qwen Code（千问AI平台接入 #14025）。

- **MCP 生态健壮性**：Codex（#30125 token 状态不一致）、Copilot CLI（Entra 登录 #5068、工具集失效 #5101）、Qwen Code（#14032 面板状态与重连不一致）、OpenCode（#54805 Figma MCP）。

- **BYOK / 多 provider 模型路由**：Copilot CLI（#5126/#5127/#5103 三连）、Pi（#10741 Groq 角色兼容、v1.2.0 OpenRouter 按 key 过滤）、OpenCode（模型能力探测脱节 #50257）。

- **平台兼容（Windows 尤为突出）**：Claude Code、Codex、Copilot CLI、OpenCode、Pi、DeepSeek TUI 六个工具均有 Windows 相关热点，涉及 TUI 渲染、沙箱、权限、进程清理。

- **安全与破坏性行为管控**：Gemini CLI（#29536 命令注入、#22672 抑制 `git reset --force`）、Codex（#53506 重复 Host 头拒绝）、Copilot CLI（#316 权限 Epic）。

## 4. 差异化定位分析

| 工具 | 功能侧重 | 目标用户 | 技术路线信号 |
|---|---|---|---|
| **Claude Code** | 多代理编排 + 工具调用协议 + 订阅计费 | 深度 agents 团队、macOS 主力 | 模型层（Opus 4.8/Fable 5）与 hooks 自动化并重 |
| **OpenAI Codex** | daemon/app-server 架构 + 远程异步能力 | 企业 + Windows 用户 | 工程投入集中在 **async compaction**、远程 V2；Web/Desktop/Remote 跨端一致 |
| **Gemini CLI** | 子代理可观测性 + AST 感知工具链 | Linux/终端开发者 | 探索 AST 工具减少轮次、bash 亲和力、OS 沙箱 |
| **Copilot CLI** | 自定义 agent + hooks + 企业合规 | 企业 GitHub 用户 | 声明式 agent hooks、inline 图片、企业策略解析 |
| **Kimi Code CLI** | —（今日无活动） | — | 数据不足，无法分析 |
| **OpenCode** | V2 配置体系 + 插件系统 + 成本控制 | 插件生态开发者、成本敏感用户 | 激进 V2 迁移（配置解析分裂）、TUI 与 desktop 双端 |
| **Pi** | 模型目录治理 + TUI 性能 + 打包 | 极客/多模型玩家 | 按 key 过滤 OpenRouter、Nix 打包、RPC/Workers 扩展 |
| **Qwen Code** | Managed Agent 多智能体运行时 | 自研托管平台用户 | 解耦推理与工具供给、Session 持久所有权、Tauri 替代 Electron |
| **DeepSeek TUI** | 会话可靠性 + Windows 适配 | 中文用户、长会话用户 | 状态一致性、ConPTY、provider 成本模型审计 |

## 5. 社区热度与成熟度

**热度最高（高互动/高 👍）：**
- **OpenAI Codex**：#48074 单条 152 评论 / 155 👍，为全生态最热议题。
- **Pi**：#7547 Windows 讨论 83 评论，v1.2.0 为今日唯一正式版。
- **Qwen Code**：#12380 架构提案 57 评论，社区参与治理程度高。

**快速迭代阶段（默认/补丁频发，架构调整中）：**
- **OpenCode**：V2 迁移中，配置解析、插件、schema 多处分裂，属"演进阵痛期"。
- **Qwen Code**：Managed Agent 从"跑通"向"可生产"过渡，H3/H4 阶段密集验收。
- **Gemini CLI**：nightly 节奏，子代理可靠性体系正在系统性构建。
- **GitHub Copilot CLI**：v1.0.97 三连补丁，agent 能力快速扩展。

**相对成熟/收敛中：**
- **Pi**：已出 v1.2.0 正式版，问题以边缘兼容与体验打磨为主。
- **DeepSeek TUI**：0.10.2 RC 验证中，问题多为明确的回归与状态一致性修复。

**信息不足：**
- **Kimi Code CLI**：过去 24 小时无活动，无法评估。

## 6. 值得关注的趋势信号

1. **"可靠性缺口"是行业共同瓶颈**：崩溃恢复、失败信号失真（假的 success）、无终态重试、状态承诺与实际不符——在 Qwen Code、Gemini CLI、Claude Code、OpenCode 反复出现。**对开发者的参考**：评估 AI CLI 时应优先测试"任务中断后能否恢复/是否真实完成"，而非仅看功能列表。

2. **从"单模型"走向"多 provider + BYOK"是必经之路**：Copilot CLI、Pi、OpenCode 均在模型路由/元数据上密集出问题。**参考**：企业采购需重点验证跨 provider 的 wire API 隔离与错误提示质量。

3. **Windows 是当前最大的体验洼地**：六个工具同时出现 Windows 热点，涉及渲染、沙箱、权限、进程。**参考**：Windows 团队的选型应额外关注 TUI 渲染性能与沙箱网络策略。

4. **成本透明度成为独立需求**：token 用量归属、cache TTL 配置、工具箱驱逐经济性、压缩回退无界——社区开始从"能用"追问"值不值"。**参考**：长会话/高频使用者应优先选择提供用量明细配置的产品。

5. **企业落地仍缺开箱即用路径**：企业策略、系统级安装、代理环境、Entra 认证等问题集中，说明 AI CLI 的企业分发与合规适配尚未成熟。**参考**：企业规模化部署前需预留政策与网络适配成本。

6. **治理方式差异显现**：Qwen Code 的架构提案（#12380）、官方账号参与（#14025）、DeepSeek TUI 的 tracking 帖（#6094）显示部分项目已建立社区共治机制，而破坏性变更（Pi codemode 1.2.0）也提示 semver 兼容性风险。**参考**：选择长期依赖的工具时，关注其发布规范与破坏性变更管理成熟度。

---

*本报告仅基于所提供的 2026-10-13 各工具 GitHub 社区数据整理，未引入外部信息。各工具数据覆盖范围以源摘要为准。*

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告

> 数据来源：github.com/anthropics/skills，截止 2026-10-13。PR 评论数字段在原始数据中为 `undefined`，因此本报告按原始列表的排序（评论数排序）与更新活跃度呈现，不虚构具体评论数。

## 1. 热门 Skills 排行（按评论数排序的前列 PR）

| 排名 | Skill / PR | 功能 | 讨论热点 | 状态 |
|---|---|---|---|---|
| 1 | [mcp-builder 修复 #1742](https://github.com/anthropics/skills/pull/1742) | 适配 `mcp>=2` 的 `streamable_http_client` 重命名与自定义 headers（`create_mcp_http_client`） | MCP 2.x 兼容性、import 重命名、header 配置方式变更；Fixes #1668 | OPEN（2026-09-08 创建，2026-10-08 更新） |
| 2 | [skill-creator 修复 #1298](https://github.com/anthropics/skills/pull/1298) | 隔离 trigger evals，处理 Windows 与运行时失败 | 触发评估误报/无效评分、Windows 下 subprocess pipe 的 `select()` 失败、无关工具中断扫描 | OPEN（2026-06-10 创建，2026-09-16 更新） |
| 3 | [proofcore-contract-auditor #1771](https://github.com/anthropics/skills/pull/1771) | 面向 Web3 的 Agent Skill：对 Solidity/Rust 智能合约做静态分析，并将审计证明锚定到 TON 区块链 | 智能合约审计 + 链上存证这一新方向 | OPEN（2026-09-15 创建，2026-09-16 更新） |
| 4 | [Detect orphaned docx comments #1734](https://github.com/anthropics/skills/pull/1734) | 检测 DOCX 中孤立（orphaned）批注 | 文档处理（docx）工具链的边界情况 | OPEN（2026-09-06 创建，2026-09-25 更新） |
| 5 | [md2video-audio #1703](https://github.com/anthropics/skills/pull/1703) | 将 Markdown 直接编译为带拟真配音的 MP4 视频（标称零成本） | Markdown→视频的自动化内容生产 | OPEN（2026-09-01 创建，2026-09-15 更新） |
| 6 | [notion-spec-to-implementation + quantitative-resume-auditor #1245](https://github.com/anthropics/skills/pull/1245) | 将产品/技术 spec 转为可由 Claude Code 实现的 Notion 任务；简历量化审核 | 规格到任务的落地工作流 | OPEN（2026-06-02 创建，2026-09-30 更新） |
| 7 | [skill-creator eval viewer 加固 #1961](https://github.com/anthropics/skills/pull/1961) | 加固 `generate_review.py` + `viewer.html`（脚本逃逸、DNS rebinding、跨站 POST、转义） | 本地评估查看器的安全边界 | OPEN（2026-10-03 创建，2026-10-11 更新） |
| 8 | [document-typography #514](https://github.com/anthropics/skills/pull/514) | 生成文档的排版质量控制：孤词换行、寡行段落、编号错位 | 影响"每一份文档"的通用排版问题 | OPEN（2026-03-04 创建，2026-03-13 更新） |

## 2. 社区需求趋势（来自 Issues）

- **安全与信任边界**（最集中）：[Issue #492](https://github.com/anthropics/skills/issues/492)（46 评论）指出社区技能以 `anthropic/` 命名空间分发，冒充官方技能、造成信任边界滥用；配套的还有 [Issue #1394](https://github.com/anthropics/skills/issues/1394)（eval-viewer escapeHtml 非 attribute-safe 导致 display-path XSS）与 [Issue #1175](https://github.com/anthropics/skills/issues/1175)（SPO 文档的权限与上下文窗口顾虑，已 CLOSED）。
- **上下文窗口与 token 效率**：[Issue #1487](https://github.com/anthropics/skills/issues/1487) 反映 `claude-api` skill 单次工具调用即注入约 156k tokens；[Issue #202](https://github.com/anthropics/skills/issues/202)（CLOSED）批评 skill-creator 更像开发文档而非可执行技能，拖累 token 效率。
- **评估/触发机制的可靠性**：多条 Issue 指向同一痛点——[Issue #556](https://github.com/anthropics/skills/issues/556)（`run_eval.py` 全查询 0% 触发率）、[Issue #1352](https://github.com/anthropics/skills/issues/1352)（多 worker 交叉匹配 UUID 造成假阴性）、[Issue #1383](https://github.com/anthropics/skills/issues/1383)（静默 benchmark 失败、Windows 触发评估损坏）、[Issue #1390](https://github.com/anthropics/skills/issues/1390)（evaluation.py 对真实 MCP server 全线 0/N）。这是社区投入最密集的技术方向。
- **组织级分发与协作**：[Issue #228](https://github.com/anthropics/skills/issues/228)（16 评论、👍8）要求 org-wide 技能共享，替代当前"下载 .skill → Slack 发送 → 手动上传"的流程；[Issue #189](https://github.com/anthropics/skills/issues/189)（👍9）指出 `document-skills` 与 `example-skills` 插件内容完全相同造成重复技能。
- **Agent 治理与推理质量**：[Issue #412](https://github.com/anthropics/skills/issues/412)（agent-governance：策略执行、威胁检测、信任评分、审计追踪，已 CLOSED）、[Issue #1385](https://github.com/anthropics/skills/issues/1385)（三闸门推理质量管线：任务前校准 → 对抗式复核 → 交付验证）、[Issue #1329](https://github.com/anthropics/skills/issues/1329)（compact-memory：用符号化记法压缩 agent 状态）。
- **工作流/内容自动化**（由 PR 侧佐证）：spec→实现（#1245）、Markdown→视频（#1703）、HPC 集群运维（[#1615](https://github.com/anthropics/skills/pull/1615)）、E2E 浏览器测试（[#822 AWT](https://github.com/anthropics/skills/pull/822)）。
- **文档格式扩展**：DOCX 批注检测（#1734）、ODT/ODS 创建与转换（[#486](https://github.com/anthropics/skills/pull/486)）、排版质控（#514）。

## 3. 高潜力待合并 Skills（评论活跃、尚未合并）

- [mcp-builder `mcp>=2` 兼容修复 #1742](https://github.com/anthropics/skills/pull/1742)——2026-10-08 仍有更新，直接对应 #1668，属于阻塞性兼容问题。
- [skill-creator eval viewer 安全加固 #1961](https://github.com/anthropics/skills/pull/1961)——最新一批 PR，呼应 #1394 的 XSS 隐患，方向明确、改动收敛。
- [skill-creator 直接执行 `package_skill.py` 修复 #1681](https://github.com/anthropics/skills/pull/1681)——修复 `ModuleNotFoundError: No module named 'scripts.quick_validate'`，与 #1298、#1961 同属 skill-creator 工具链的成组修复。
- [docx LibreOffice 超时误报修复 #1792](https://github.com/anthropics/skills/pull/1792)——超时不再报成功，并校验输出 DOCX 无 `w:ins`/`w:del` 修订标记。
- [webapp-testing 去除 `shell=True` #1980](https://github.com/anthropics/skills/pull/1980)——针对未净化命令串注入 shell 的安全修复。
- [webapp-testing 修正 textarea/select 上报 #1976](https://github.com/anthropics/skills/pull/1976) 与 [algorithmic-art wrapAround 修复 #1977](https://github.com/anthropics/skills/pull/1977)——均为 2026-10-06 提交、指向具体 issue（#1891、#1897）的小而明确的修复。
- [claude-api 死链替换 #1730](https://github.com/anthropics/skills/pull/1730)——替换 3 个 404 文档 URL，作者称已用 `curl -sI -L` 验证 HTTP 200。

## 4. Skills 生态洞察

**社区最集中的诉求是"让 Skills 的评估、分发与信任机制真正可靠"**——高频问题全部落在触发/评估结果的正确性（0% 触发率、假阴性、静默失败）、命名空间冒用带来的信任边界风险、以及 token 过度注入与重复分发上，而非缺少新技能类别。

---

# Claude Code 社区动态日报（2026-10-13）

## 今日速览

过去 24 小时无新版本发布。社区讨论集中在多代理（subagent）编排缺陷、Windows/macOS 平台稳定性问题以及订阅计费与用量归属争议上，最高热度 Issue 已积累 30 条评论和 19 个赞同。值得注意的几个高评论 Issue 在今日集中更新，但均非新提交，属于持续发酵类问题。

## 版本发布

过去 24 小时内无新 Release。

## 社区热点 Issues

1. **#12234 Windows Terminal 间歇性冻结**
   [OPEN] [bug, platform:windows, area:tui, area:core] 作者 isaac-bender，30 评论 / 19 👍。评论数最高，涉及 Windows 平台 TUI 核心交互稳定性，用户报告清缓存后仍复现。长期未解决会持续影响 Windows 主力用户。
   链接: anthropics/claude-code Issue #12234

2. **#75043 嵌套 subagent 编排失控**
   [OPEN] [bug, has repro, platform:macos, area:agents, reproduced] 作者 mof086999-code，24 评论 / 6 👍。子代理派生的子代理无视 `run_in_background` 强制异步、完成通知无法回传父代理、resume 后 TaskStop 报所有权错误。这是多代理工作流的结构性缺陷，已在 Opus 4.8 与 Fable 5 上复现，对深度使用 agents 的团队影响最大。
   链接: anthropics/claude-code Issue #75043

3. **#57853 Bun JSC GC 段错误**
   [CLOSED] [bug, has repro, platform:linux, area:packaging] 作者 aik-rocket，21 评论。涉及 Bun 1.3.14 在 AMD Ryzen 5 5500 / Linux x86_64 上的 `SlotVisitor::drain` 崩溃，且所有平台二进制相同。虽已关闭，但暴露打包层面的架构兼容风险。
   链接: anthropics/claude-code Issue #57853

4. **#64108 工具调用被输出为字面文本**
   [OPEN] [bug, platform:macos, platform:linux, area:model] 作者 lyrova-andy，17 评论 / 35 👍。长上下文 Opus 会话中偶发出现杂散 `court` 标记加原始 `<invoke>` 文本，工具不执行。点赞数全榜最高，说明用户对长会话可靠性高度敏感，属模型层与工具调用协议交互问题。
   链接: anthropics/claude-code Issue #64108

5. **#98134 Apple Max 20x 订阅被识别为 Pro**
   [OPEN] [bug, platform:macos, area:auth] 作者 Roxy-Chao，14 评论。有效的 Apple 订阅仍被降级识别，直接影响付费用户权益与信任。
   链接: anthropics/claude-code Issue #98134

6. **#89171 陈旧 Apple 订阅状态阻断网页计费**
   [OPEN] [bug] 作者 whitedemong，12 评论。取消订阅后账号显示 Free 但后端仍为 active Pro，导致无法重新计费。与 #98134 同属 Apple 订阅状态同步问题，形成一类系统性计费缺陷。
   链接: anthropics/claude-code Issue #89171

7. **#78537 组织级发布产物默认共享**
   [OPEN] [enhancement, area:tools, area:routines] 作者 boz-tech，8 评论 / 23 👍。请求为已发布 artifacts 提供组织级默认共享设置，点赞数居前，反映团队协作场景下的权限管理需求。
   链接: anthropics/claude-code Issue #78537

8. **#77001 长会话用量异常消耗**
   [OPEN] [enhancement, platform:macos, area:cost] 作者 antonio-avantic，6 评论。报告 2 小时内仅少量短消息却消耗约 15% 会话额度，怀疑与缓存 TTL 过期重写有关，且 `/usage` 缺乏用量归属明细。成本透明度是高频诉求。
   链接: anthropics/claude-code Issue #77001

9. **#101463 Auto 模式分类器误拒用户已批准操作**
   [OPEN] [bug, area:mcp, platform:web, area:permissions] 作者 TheAviv，1 评论。claude.ai 云会话中，用户在对话内批准的邮件草稿编辑被 Auto 模式分类器以"Unrequested Commit in a Connected App"拒绝。权限分类器与上下文批准的冲突值得关注。
   链接: anthropics/claude-code Issue #101463

10. **#94041 `/goal` Stop hook 无限重触发**
    [OPEN] [bug, platform:linux, area:hooks] 作者 sergeiwallace，4 评论。会话级 Stop hook 在条件已满足或进入 hold 后仍反复触发且无法确认，影响 hooks 自动化可靠性。
    链接: anthropics/claude-code Issue #94041

（其余值得留意的条目：#92046 Windows 桌面 MCP 服务器零工具注册的回归问题；#91009 多会话并发导致认证轮换竞态全线掉线；#101522 路径绑定的项目身份与跨机器记忆同步请求。）

## 重要 PR 进展

过去 24 小时内更新的 PR 仅 1 条：

1. **#1 Create SECURITY.md** [CLOSED] 作者 bcherny。该仓库首个 PR，新增安全政策文件，目前状态为已关闭。因今日无其他 PR 活动，暂无可进一步汇总的合并或功能推进信息。
   链接: anthropics/claude-code PR #1

> 说明：数据源只提供 1 条 PR，无法凑足 10 条，故据实罗列，不做补充。

## 功能需求趋势

- **团队与组织协作**：#78537 组织级默认共享，显示发布产物权限管理走向团队化。
- **成本与用量可视化**：#77001 要求用量归属明细，成本透明成为独立需求方向。
- **跨机器记忆与项目身份**：#101522 提出与路径解耦的项目标识及记忆同步，指向多设备工作流。
- **多代理编排能力**：#75043 暴露 subagent 嵌套与生命周期管理的深层需求。
- **Hooks 与自动化可靠性**：#94041 反映 hooks 作为自动化原语的稳定性诉求。
- **IDE / 桌面集成**：#101522、#76051、#92046 均涉及 VSCode 与桌面端，集成体验问题较集中（状态栏渲染、MCP 工具注册、记忆同步）。

## 开发者关注点

- **平台稳定性**：Windows（#12234、#92046、#91009）与 macOS（#64108、#98134）问题集中，TUI 冻结、MCP 零工具、认证竞态为高频痛点。
- **长会话可靠性**：#64108 工具调用泄漏与 #77001 用量异常，共同指向长上下文会话的信任问题。
- **计费与订阅状态一致性**：Apple 订阅识别（#98134）与后端状态不同步（#89171）反复出现，直接触达付费用户。
- **权限与安全策略摩擦**：#101463 Auto 模式分类器误拒用户已批准操作，反映权限判定的上下文感知不足。
- **多会话/并发场景**：#91009 显示高并发多会话工作流下认证轮换竞态可致全部会话掉线，是 power user 的关键风险。

---

*注：本日报仅基于提供的 GitHub 数据整理，未展示完整 50 条 Issues，Issue 编号跨度较大，具体分类与时序以源数据为准。*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报（2026-10-13）

## 今日速览

今日无新版本发布，社区讨论集中在 Windows 平台的稳定性问题上：多个高热度 Issue 指向 CLI 与 app-server daemon 导致的终端窗口闪烁回归（#48074、#49264），其中 #48074 以 152 条评论、155 个 👍 成为当日最热议题。同时，Codex Web 与桌面端的功能缺口（Azure DevOps 集成、Cloud 任务状态显示）持续获得关注。

## 版本发布

过去 24 小时内无新版本发布。

## 社区热点 Issues

1. **[#48074](https://github.com/openai/codex/issues/48074) [CLOSED] Windows: 安装 Codex daemon 后请求期间终端窗口反复闪烁**（152 评论 / 155 👍）
   当日最热议题。codex-cli 0.157.0 + Pro 订阅 + Windows 11 环境下，终端窗口在请求过程中反复闪现。高评论量与高点赞数说明这是大范围影响 Windows 用户的回归问题，且已关闭。

2. **[#10665](https://github.com/openai/codex/issues/10665) [OPEN] 功能请求：原生 Azure DevOps（Azure Repos）集成**（30 评论 / 88 👍）
   要求为 Codex Web 提供与现有 GitHub 集成同等级的原生 Azure Repos 支持。高 👍 比表明企业用户对非 GitHub 代码托管平台的支持需求强烈。

3. **[#49264](https://github.com/openai/codex/issues/49264) [CLOSED] Windows: CLI 为每条派生命令闪烁 Windows Terminal 窗口（app-server daemon 回归）**（19 评论 / 7 👍）
   与 #48074 同源问题，影响 codex-cli 0.159.0。可与 #48074 对照阅读，判断修复覆盖范围。

4. **[#49829](https://github.com/openai/codex/issues/49829) [OPEN] 代理环境下 Dot 任务无法在桌面端打开**（19 评论 / 3 👍）
   cloud WebSocket 需要代理时，桌面端报 "Codex app-server is not available"。影响 macOS + ChatGPT Pro 用户，暴露代理场景下 app-server 连接的兼容性缺口。

5. **[#49453](https://github.com/openai/codex/issues/49453) [OPEN] 浏览器访问被已保存的会话级拒绝记录阻塞**（17 评论 / 1 👍）
   即使用户显式允许某站点，先前保存的拒绝策略仍生效。属于策略优先级/状态刷新缺陷，影响 Browser Use 的可用性。

6. **[#52389](https://github.com/openai/codex/issues/52389) [OPEN] Windows 提权沙箱在 node_repl.exe 运行时初始化失败（OS error 32）**（11 评论）
   `windows.sandbox = "elevated"` 配置下，文件被占用导致沙箱 setup 失败，波及 CLI 0.160.1 与 app-server 0.161.0/0.162.0。涉及安全边界配置，值得优先关注。

7. **[#51524](https://github.com/openai/codex/issues/51524) [OPEN] Windows Computer Use 卡在 get_window_state，无法获取浏览器 URL**（10 评论 / 2 👍）
   2026-10-06 起 Chrome/Edge 窗口检查功能突然失效，属于 Computer Use 能力回归。

8. **[#20863](https://github.com/openai/codex/issues/20863) [OPEN] 支持可配置的自定义宠物动画序列与活动事件**（10 评论 / 8 👍）
   希望扩展 `pet.json` 以描述动画行为而非仅精灵图资源。虽是趣味功能，但评论与点赞活跃，反映用户对个性化生态的投入。

9. **[#50844](https://github.com/openai/codex/issues/50844) [OPEN] 新版 Codex Cloud 缺少 "Create PR" 选项，任务列表不显示已合并状态**（6 评论）
   2026 年 10 月初 Web 界面改版后的两处回归，影响未迁移的 Legacy Codex Cloud 环境用户的工作流。

10. **[#30125](https://github.com/openai/codex/issues/30125) [OPEN] MCP bearer-token 环境变量在缺失时仍显示已配置**（6 评论 / 1 👍）
    配置校验与实际进程环境不一致，可能导致 MCP 服务鉴权静默失败，影响可观测性与排障效率。

## 重要 PR 进展

1. **[#53633](https://github.com/openai/codex/pull/53633) [CLOSED] 为 Guardian Decisions 添加环境 API Key 回退**
   当默认 `openai` provider 无自定义 base URL 且未配置 `CODEX_GUARDIAN_DECISIONS_API_KEY` 时，允许回退使用 `OPENAI_API_KEY`。

2. **[#53632](https://github.com/openai/codex/pull/53632) [CLOSED] 稳定共享 message board 场景的写入顺序**
   非并行工具调用可能以任意顺序获取锁，导致 `last_message_id` 快照不确定；改为按序发送以保证测试确定性。

3. **[#53631](https://github.com/openai/codex/pull/53631) [CLOSED] 在测试 daemon 重启前物化线程**
   更新 `codex-rs/cli/tests/daemon_startup.rs` 的 `discovered` 场景，在重启前重命名线程——空草稿无需在 daemon 重启后存活。

4. **[#53628](https://github.com/openai/codex/pull/53628) [CLOSED] 记录被接受的 Guardian 审查输入截断指标**
   在输入最终化成功后发出 `codex.guardian.review.truncation` 计数与字节直方图。

5. **[#53622](https://github.com/openai/codex/pull/53622) [CLOSED] 保留远程 exec 输出直至被收集**
   修复远程进程退出早于最终输出、继承管道保持流开启时，提前移除 session 导致输出丢失的问题。

6. **[#53620](https://github.com/openai/codex/pull/53620) [CLOSED] 为远程 V2 compaction 复用后台结果**
   前台 compaction 需要时等待兼容的待处理后台请求，并与前台请求共享结果安装路径。

7. **[#53617](https://github.com/openai/codex/pull/53617) [CLOSED] 允许隐藏原生工具同时保留 multi-agent V2 运行时**
   新增 `features.multi_agent_v2.disable_native_tools`，面向 host-provided 工具场景隐藏原生工具但保留 V2 运行时与指令。

8. **[#53614](https://github.com/openai/codex/pull/53614) / [#53606](https://github.com/openai/codex/pull/53606) / [#53595](https://github.com/openai/codex/pull/53595) [CLOSED] 推测式远程 V2 compaction 基础设施**
   三件套：捕获历史、prompt 元数据、路由状态、鉴权归属与上下文窗口标识以支持后台 compaction 请求；提取可脱离 turn WebSocket 状态运行的 HTTP Responses 执行器；注册默认关闭的 `async_compaction` 功能及 `model_async_compact_threshold_percent` 配置。

9. **[#53506](https://github.com/openai/codex/pull/53506) [CLOSED] 网络代理拒绝重复 Host 头**
   对包含多个 `Host` 头的请求返回 `400 Bad Request`，防止策略评估与上游解析器选择不同的 Host 字段行——属安全加固。

10. **[#53453](https://github.com/openai/codex/pull/53453) [CLOSED] WSL 上优先使用 Windows 剪贴板并限制复制尝试**
    修复 WSLg 剪贴板初始化无限阻塞、PowerShell 剪贴板写入卡住导致后续 TUI 复制失败的问题。

## 功能需求趋势

- **平台与托管集成扩展**：#10665 要求原生支持 Azure DevOps/Azure Repos，与既有 GitHub 一等公民集成对齐，反映企业用户对多样化代码托管平台的需求。
- **Computer Use / Browser Use 成熟度**：#51524、#53321、#44451、#46034、#45678、#49453 多条 Issue 集中在浏览器与桌面窗口控制上——窗口状态获取、截图超时、站点安全策略、Chrome native-host 连接与策略缓存问题突出。
- **桌面端与云端一致性**：#50844（PR 创建选项与合并状态）、#45577（Remote 线程同步缺失）、#49829（Dot 任务打开失败）指向 Cloud/Desktop/Remote 跨端体验的不一致。
- **个性化与扩展性**：#20863 提出自定义宠物动画序列，延续 Codex 宠物生态的可扩展方向。
- **异步/后台能力建设**：从 PR 侧看，`async_compaction`、远程 V2 compaction、后台请求复用构成了近期核心工程方向。

## 开发者关注点

1. **Windows 平台回归频发**：终端窗口闪烁（#48074、#49264）、app-server WebSocket 崩溃（#30884）、提权沙箱初始化失败（#52389）、Computer Use 窗口状态获取失效（#51524、#53321）——Windows 是当日问题最集中的平台，且部分为明确标注的 regression。
2. **daemon / CLI 版本错配**：#51758 显示 CLI 0.160.1 连接 managed app-server 0.161.0 时出现兼容性提示，但启动提示未给出 CLI 升级指引，排障路径不清晰。
3. **配置状态与实际环境不一致**：#30125 中 MCP bearer-token 环境变量在缺失时仍显示已配置，容易导致静默失败。
4. **鉴权与登录流程摩擦**：#50919 中 ChatGPT Classic 登录在 openai-sidetron 回调失败（清 Firefox cookie 可临时绕过）、#49453 中策略拒绝状态无法被显式允许覆盖——两者均反映状态与策略管理缺乏可预期的手动修复入口。
5. **代理与网络受限环境支持不足**：#49829 的代理场景 app-server 不可用，说明网络受限企业环境仍需专门适配。

---
*本日报仅基于上述 GitHub 数据整理，未包含数据源之外的信息。*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报（2026-10-13）

## 今日速览

今日发布 v0.65.0-nightly.20261013，核心修复为扩展加载的容错能力：当某个扩展未通过白名单检查时，CLI 会继续加载其余扩展，而非整体中断。社区讨论仍然高度集中在 Agent/子代理方向——子代理在触及最大轮次后误报"成功"、generalist agent 永久挂起、子代理利用率不足等问题持续占榜。安全与稳定性类 PR 活跃，包括 grep 命令注入防护、Ctrl-C 会话污染竞态修复等。

---

## 版本发布

### v0.65.0-nightly.20261013.g51617c1bc
- **fix(cli)**：当某个扩展未通过 allowlist 检查而失败时，保持继续加载其他扩展（PR #29720，@jesussamuel-byte）。
- 完整变更对比：https://github.com/google-gemini/gemini-cli/compare/v0.65.0-nightly.20261012.g9b6e0265d...v0.65.0-nightly.20261013.g51617c1bc
- 版本号提升 PR：#29730

---

## 社区热点 Issues

1. **[#22323](https://github.com/google-gemini/gemini-cli/issues/22323) 子代理 MAX_TURNS 后误报 GOAL 成功**（13 评论，priority/p1）
   子代理在触及最大轮次、尚未完成分析的情况下仍返回 `status: "success"`，掩盖了中断事实。这是 Agent 可靠性上的严重信号失真问题，评论数最高，值得优先跟进。

2. **[#21409](https://github.com/google-gemini/gemini-cli/issues/21409) Generalist agent 永久挂起**（8 评论，👍8，priority/p1）
   一旦 CLI 移交 generalist agent 就会无限挂起，简单操作（如创建文件夹）也如此，用户最长等待一小时。👍 数最高，说明影响面广、用户痛感强。

3. **[#19873](https://github.com/google-gemini/gemini-cli/issues/19873) 通过零依赖 OS 沙箱释放模型的 bash 亲和力**（9 评论，priority/p2）
   提出利用 Gemini 3 模型原生的 bash 使用倾向，结合沙箱与执行后意图路由。属于 Agent 架构级增强提案，讨论活跃。

4. **[#21968](https://github.com/google-gemini/gemini-cli/issues/21968) Gemini 不主动使用 skills 与子代理**（7 评论，priority/p2）
   用户反馈除非显式指令，模型几乎不会自主调用自定义技能和子代理。直指 Agent 编排能力的核心短板。

5. **[#22745](https://github.com/google-gemini/gemini-cli/issues/22745) 评估 AST 感知的文件读取、搜索与代码映射**（7 评论，priority/p2）
   EPIC 级议题，探索 AST 感知工具能否减少工具调用轮次、提升方法边界读取精度。关系到工具链的长期演进方向。

6. **[#21983](https://github.com/google-gemini/gemini-cli/issues/21983) browser 子代理在 Wayland 下失败**（4 评论，priority/p1）
   Linux Wayland 环境下浏览器子代理不可用，属于平台兼容性阻塞问题，影响 Linux 开发者。

7. **[#22267](https://github.com/google-gemini/gemini-cli/issues/22267) Browser Agent 忽略 settings.json 覆盖**（4 评论，priority/p2）
   浏览器代理完全无视全局/项目级配置覆盖（如 maxTurns），AgentRegistry 未生效，是配置体系一致性缺陷。

8. **[#24246](https://github.com/google-gemini/gemini-cli/issues/24246) 工具数超过 128 时触发 400 错误**（3 评论，priority/p2）
   启用工具数量过多时 API 报错，期望 CLI 智能裁剪工具范围。反映工具规模膨胀下的上下文管理需求。

9. **[#22672](https://github.com/google-gemini/gemini-cli/issues/22672) Agent 应抑制破坏性行为**（3 评论，priority/p2）
   模型在复杂 git 操作中会使用 `git reset`、`--force` 等高风险命令，缺少安全替代路径的引导。属安全类高频诉求。

10. **[#23571](https://github.com/google-gemini/gemini-cli/issues/23571) 模型随意创建临时脚本**（3 评论，priority/p2）
    限制为 shell 执行后，模型在多个目录散落生成编辑脚本，污染工作区、增加清理成本，直接影响提交整洁度。

---

## 重要 PR 进展

1. **[#29536](https://github.com/google-gemini/gemini-cli/pull/29536)（CLOSED）grep 命令行选项注入防护**
   在 `grep.ts` 中强制使用显式 `-e` 分隔符，防范 CWE-88 参数注入，属安全加固。

2. **[#29728](https://github.com/google-gemini/gemini-cli/pull/29728) 防止快速 Ctrl-C 导致会话污染**（priority/p1）
   修复连续两次 Ctrl-C 时 `cancelOngoingRequest` 未 await 引发的竞态，避免会话状态被破坏。

3. **[#29703](https://github.com/google-gemini/gemini-cli/pull/29703) 原子写入临时文件名不超 NAME_MAX**
   修复 215–255 字节文件名因附加 41 字节 `.uuid.tmp` 后缀而触发 `ENAMETOOLONG` 的问题。

4. **[#29532](https://github.com/google-gemini/gemini-cli/pull/29532)（CLOSED）正确处理 RetryInfo 延迟为 0 的配额错误**
   此前延迟为 0 的常规限流被误判为终态配额错误并中止重试，此修复恢复正确的重试行为。

5. **[#29535](https://github.com/google-gemini/gemini-cli/pull/29535)（CLOSED）尊重允许的 onboarding 层级**
   当 Code Assist API 返回的层级未指定默认项时，避免回退到 legacy 层级，修复免费/个人账号被错误分级。

6. **[#29644](https://github.com/google-gemini/gemini-cli/pull/29644) 恢复终端宽度变化时的防抖静态 UI 刷新**（priority/p1）
   在 `AppContainer.tsx` 中以 100ms 防抖恢复 `refreshStatic()`，改善水平方向渲染。

7. **[#29695](https://github.com/google-gemini/gemini-cli/pull/29695) 修复调试控制台高度计算与 terminalBuffer 闪烁**
   改进 F12 调试控制台布局，并对静态历史项做记忆化与安全缓存失效。

8. **[#29638](https://github.com/google-gemini/gemini-cli/pull/29638) 移除 VS Code 启动时市场更新检查**
   消除 `vscode-ide-companion` 每次激活时的多余网络请求，修复 #29555。

9. **[#29699](https://github.com/google-gemini/gemini-cli/pull/29699) 修正反向搜索高亮索引偏移**
   修复 `Ctrl+R` 历史搜索中 Unicode 字符（如 `İ`）小写展开导致的 UTF-16 偏移错位。

10. **[#29722](https://github.com/google-gemini/gemini-cli/pull/29722) 将纯空白 UTF-16/UTF-32 文件视为空**
    修复 `isEmpty()` 始终按 UTF-8 解码导致 BOM 之后的空白字节残留 NUL 的判定错误。

---

## 功能需求趋势

- **子代理可靠性体系**：从误报成功（#22323）、异常挂起（#21409）到轨迹可见性（#22598、#20195），社区与维护者正系统性构建子代理的可观测性与可信度。
- **模型自主编排能力**：模型不主动使用 skills/子代理（#21968），以及 bash 亲和力利用（#19873），指向"如何让模型更自主地选对工具"这一方向。
- **AST 感知工具链**：议题 #22745 / #22746 提出以 AST 感知读取、搜索、代码映射减少轮次，推荐 tilth、glyph 作为起点。
- **安全与破坏性行为管控**：命令注入防护（#29536）、抑制 `git reset --force`（#22672）等，安全边界持续受到关注。
- **跨平台与 IDE 集成**：Wayland 下 browser 子代理失败（#21983）、VS Code 扩展网络请求优化（#29638）体现平台兼容与 IDE 体验并重。

---

## 开发者关注点

- **Agent 挂起与失败信号失真**是当前最尖锐的痛点：长时间挂起（#21409）与"假成功"（#22323）让开发者难以判断任务真实状态，直接削弱信任。
- **配置与扩展的一致性缺口**：Browser Agent 忽略 settings.json（#22267）、扩展加载因单点失败中断（本日 nightly 修复）说明配置体系执行路径不统一。
- **工作区污染与清理成本**：临时脚本散落（#23571）、破坏性命令（#22672）增加提交前的整理负担。
- **交互与渲染稳定性**：多个 PR 聚焦终端 resize 防抖、调试控制台闪烁、反向搜索高亮偏移，反映终端 UI 稳定性仍是高频修复区。
- **规模化上下文管理**：工具数过多触发 400 错误（#24246）提示在工具数量膨胀下需要更智能的裁剪策略。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报（2026-10-13）

## 今日速览

今日发布 v1.0.97 系列三个补丁版本，重点修复自定义 agent 发现机制（超过 100 个或深层嵌套场景），并新增 agent 级声明式 hooks 和内联图片默认渲染能力。社区侧 BYOK（自带密钥）相关模型路由问题集中爆发，三位不同用户提交的 #5126、#5127、#5103 均指向 provider 模型与 agent 默认模型匹配失效；同时 macOS 沙箱与企业管理策略的冲突持续升温。本期 PR 无更新。

---

## 版本发布

**v1.0.97-2** — 修复：仓库定义超过 100 个自定义 agent 或 agent 文件深层嵌套时无法被完整发现的问题。

**v1.0.97-1** — 常规修复与调整（摘要未提供细节）。

**v1.0.97-0** — 主要更新：
- **新增**：为自定义 agent 提供 agent 作用域的声明式 hooks。
- **改进**：支持的终端上默认渲染内联图片，无需开启实验模式；可通过 `/settings inlineImages false` 关闭。
- **修复**：Autopilot 此前会拒绝 `preToolUse` hook 的 "ask" 决策。

**v1.0.96**（2026-10-12）— 交互式沙箱设置支持建议可能的环境密钥并允许在保存前添加掩码主机；`/model` 与 `/config model` 中的模型 ID 改为大小写不敏感并保存规范 ID；企业策略解析期间保持 `/allow-all` 可用。

---

## 社区热点 Issues

1. **[#970](https://github.com/github/copilot-cli/issues/970) [OPEN] macOS Gatekeeper 在企业管理策略下拦截 Copilot 应用** — Homebrew 每次升级后弹出 "Apple could not verify..." 提示，8 条评论、22 个 👍（本期最高互动），是企业环境分发的典型阻塞点。

2. **[#5114](https://github.com/github/copilot-cli/issues/5114) [OPEN] 触及会话限额后等待 5 小时无法从断点继续** — 用户反馈即使等待上限解除，仍报 "runtime 429 cap still blocks" 且无法续接上下文，直接影响长时间任务可用性。

3. **[#5068](https://github.com/github/copilot-cli/issues/5068) [OPEN] Windows 上 MCP Entra 登录失败** — 连接 Entra ID 保护的 Azure DevOps MCP 服务器时，作用域校验报错 "advertised scopes could not be safely validated"，12 个 👍，影响企业身份认证集成。

4. **[#5101](https://github.com/github/copilot-cli/issues/5101) [CLOSED] `--add-github-mcp-tool issue_write` 导致无 MCP 工具可用** — 特定工具参数使整个 MCP 服务工具集失效，现已关闭，可作为类似配置问题的参考案例。

5. **[#5105](https://github.com/github/copilot-cli/issues/5105) [OPEN] macOS 沙箱阻止 Gradle daemon 连接** — 即使允许本地网络，Gradle daemon 仍无法访问 localhost，凸显沙箱网络策略与实际构建流程的矛盾。

6. **[#5126](https://github.com/github/copilot-cli/issues/5126) [OPEN] BYOK：内置 agent（explore/task/research）从不使用其默认模型** — 内置 agent 声明了各自推荐模型，但实际静默回退到会话模型，违背用户预期。

7. **[#5127](https://github.com/github/copilot-cli/issues/5127) [OPEN] BYOK：短模型名未匹配到 provider 模型** — 短名称找不到对应 provider 模型，自定义 agent 失败，会话模型还会抛出误导性的 "No GitHub OAuth token" 错误。

8. **[#5103](https://github.com/github/copilot-cli/issues/5103) [OPEN] BYOK：子 agent 沿用会话 wire API，跨模型族时报 400** — `COPILOT_PROVIDER_WIRE_API` 全局生效，导致使用不同模型族的子 agent 请求失败。

9. **[#5100](https://github.com/github/copilot-cli/issues/5100) [OPEN] 一次 120 秒 host-ack 超时后会话事件投递永久失效** — 长会话中 prompt 提交失败且无法恢复，直到 resume 才恢复，影响长时交互稳定性。

10. **[#316](https://github.com/github/copilot-cli/issues/316) [OPEN] Epic：权限系统改进** — 官方 Epic 汇总公开预览以来的权限问题，是理解权限相关 issue 脉络的索引入口。

其他值得留意：[#5129](https://github.com/github/copilot-cli/issues/5129)（企业级 Windows 系统级安装器需求）、[#5130](https://github.com/github/copilot-cli/issues/5130)（持续报 "Managed account policy" 错误）、[#5045](https://github.com/github/copilot-cli/issues/5045)（gpt-6.1-sol 下 `/compact` 返回空响应，已关闭）。

---

## 重要 PR 进展

过去 24 小时内无 PR 更新。

---

## 功能需求趋势

- **自定义 Agent 与 Hooks 能力**：v1.0.97-0 新增 agent 级声明式 hooks，同时修复多 agent 发现，表明 agent 配置体系正快速扩展；社区亦关注 agent 模型路由。
- **BYOK / 多模型支持**：#5126、#5127、#5103 集中反映自带密钥与多 provider 场景下的模型匹配、wire API 隔离需求。
- **会话管理**：#5128 请求在 Sessions 视图和侧边栏重命名会话；#5100 关注长会话事件投递稳定性；#5114 关注限额恢复后续接。
- **企业部署与安全合规**：#970（Gatekeeper）、#5129（系统级安装器）、#5130（managed account policy）、#5127（企业策略解析）指向企业场景的安装、认证与策略适配。
- **沙箱与网络细粒度控制**：#5105 反映沙箱对本地网络访问的限制仍不完善。
- **终端渲染与可观测性**：#5125 请求为 AI 响应增加时间戳与耗时显示；v1.0.97-0 内联图片默认渲染也属该方向。

---

## 开发者关注点

1. **BYOK 模型路由是当前最集中的痛点** — 短名解析、内置 agent 默认模型、子 agent wire API 三个问题相互关联，跨 provider 用户受影响明显，且错误提示（如 "No GitHub OAuth token"）具有误导性。
2. **企业环境落地受阻** — macOS Gatekeeper 拦截、Windows 缺少系统级安装器、持续弹出的 managed account policy 错误，说明企业在安装与合规层面仍缺开箱即用路径。
3. **长会话可靠性** — 120 秒 host-ack 超时导致会话永久失效、限额恢复无法续接，是长时任务使用者的高频阻塞。
4. **MCP 集成稳定性** — Entra 认证与工具参数导致的工具集失效，提示 MCP 在企业身份与配置健壮性上需加强。
5. **沙箱与构建工具冲突** — 本地网络已放行但 Gradle daemon 仍被阻断，反映沙箱策略需更精细地适配开发工具链。

---

*数据来源：github.com/github/copilot-cli，统计截至 2026-10-13。*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报（2026-10-13）

## 今日速览

今日无新版本发布，但 Issue 与 PR 活动密集。V2 相关的配置加载一致性（`OPENCODE_CONFIG_DIR`、`instructions`、config schema）成为最集中的问题簇；同时多个"已复现"的严重缺陷被提交，包括 snapshot 仓库 11.5 小时膨胀至 15 GB、TUI 插件 `./tui` 部分静默不加载。PR 侧以修复为主：压缩循环（compaction loop）、更新服务 503、配置引用缺失文件等均已有对应补丁。

---

## 版本发布

过去 24 小时无新 Release。Issue 中提及的最新版本为 v2.0.27 / v2.0.28。

---

## 社区热点 Issues

1. **#55010 [reproduced] Snapshot 仓库 11.5 小时膨胀至 15 GB**
   在 v2.0.27 上，快照内部 git 仓库从零增长到 15 GB，产生 33.4 万个松散对象及 `tmp_obj_*`/`tmp_pack_*` 垃圾，maintenance gc 无效，直接撑爆 40 GB 根分区。这是数据安全与磁盘占用的严重问题，且已被复现。
   [链接](anomalyco/opencode Issue #55010)

2. **#43250 [2.0] `keep.tokens` 未生效，压缩回退无界**
   文档称默认保留 15000 tokens，实际 agent 会话中常达 5–15 倍（如 234K）。涉及上下文管理与成本，长期会话用户影响明显。
   [链接](anomalyco/opencode Issue #43250)

3. **#32825 [bug, core, 2.0] `OPENCODE_CONFIG_DIR` 在 v2 服务中替换全局配置**
   旧加载器将其视为额外配置目录，v2/core 视为替换目录，行为不一致。与 #28658（覆盖全局 AGENTS.md 路径）构成同一类配置解析分裂问题。
   [链接](anomalyco/opencode Issue #32825)

4. **#54796 [CLOSED] 发布的 config.json schema 仍是 V1，拒绝 V2 的 `providers` 键**
   `https://opencode.ai/config.json` 仍描述单数 `provider`，而 V2 读取复数 `providers`，导致基于该 schema 的编辑器校验报错。影响所有依赖 schema 校验的用户。
   [链接](anomalyco/opencode Issue #54796)

5. **#55084 [reproduced] Git 安装的插件 `./tui` 部分从不加载**
   通过 `plugins` 以 Git 包形式安装的 V2 插件，其 `./tui` 部分被 TUI 静默跳过，尽管服务端报告插件为 active。插件开发者需重点关注。
   [链接](anomalyco/opencode Issue #55084)

6. **#51109 可配置的 prompt-cache TTL（按 agent、按 provider/model）**
   `cache: "auto"` 的 TTL 固定为 Anthropic 5 分钟，长会话中成为主要成本来源。社区提出在 `opencode.jsonc` 中开放配置。属于明确的成本优化诉求。
   [链接](anomalyco/opencode Issue #51109)

7. **#55077 [CLOSED] v2.0.28 中 GPT-6.1 Sol 上下文窗口报 628k，仍低于 1.05M**
   新模型支持相关的上下文窗口报告问题，虽已关闭但反映模型元数据与真实能力不一致。
   [链接](anomalyco/opencode Issue #55077)

8. **#50257 desktop 模型选择器对所有 V2 模型显示 "No reasoning"**
   原因是 `capabilities.reasoning` 从未被设置，即使 deepseek-v4.1-flash、kimi-k3、glm-5.3 等明显支持推理。UI 与能力探测脱节。
   [链接](anomalyco/opencode Issue #50257)

9. **#40097 `opencode.exe` 在 Windows 10/11 报 "Unsupported 16-Bit Application"**
   通过 npm 全局安装后无法运行，👍 4，是列表中赞同数最高的问题之一，影响 Windows 用户入门体验。
   [链接](anomalyco/opencode Issue #40097)

10. **#55110 [pending, triaging] 多 MB 内联附件使会话永久无法解码**
    会话一旦包含超大内联附件即永久解码失败，v2.0.28 可复现。涉及会话数据健壮性。
    [链接](anomalyco/opencode Issue #55110)

---

## 重要 PR 进展

1. **#54994 fix(opencode): 阻止压缩循环与过期的压缩重试**（Closes #54993）
   若压缩后的下一轮仍然溢出则停止循环，并避免陈旧的重试。直接回应 #43250 所反映的压缩行为问题。
   [链接](anomalyco/opencode PR #54994)

2. **#55116 [contributor] feat(core): 在 v2 中加载配置的 instructions**
   V2 schema 虽接受 `instructions`，`/init` 与内置 skill 也推荐，但此前无人读取。现接入 `ConfigInstructionPlugin`。
   [链接](anomalyco/opencode PR #55116)

3. **#55109 [contributor] fix(update): 缓存 D1 读取并使用部分索引**
   更新 Worker 持续返回 503（#54920 只换了错误页，未解决 D1 负载）；桌面端启动时及每 10 分钟轮询，属于稳定复现的线上问题。
   [链接](anomalyco/opencode PR #55109)

4. **#55117 fix(core): 为缺失的配置文件引用替换为空值**
   用户删除被全局配置引用的文件（如 `file:~/.secrets/...`）后应用直接停止工作，此补丁改为以空值替换。
   [链接](anomalyco/opencode PR #55117)

5. **#55123 feat: 新增 `plan_exit` 工具，经确认从 Plan 切换到 Build**
   在 v2 上重新实现 #49218，提供显式、经用户批准的 Plan→Build 切换路径。
   [链接](anomalyco/opencode PR #55123)

6. **#55126 fix(core): 迁移路径按任一分隔符切分**
   `packages/core/script/migration.ts` 中 `generatedMigrations` 的路径切分在 Windows 上可能出错（Closes #55125）。
   [链接](anomalyco/opencode PR #55126)

7. **#50399 fix(core): 保留每个并行工具 hook 的错误**
   并行的 `execute.before` hook 失败时各自保留错误信息，此前会被覆盖（Closes #50331）。
   [链接](anomalyco/opencode PR #50399)

8. **#51690 fix(cli): 扩大慢速更新探测范围并报告失败**
   修复 `opencode update` 以"安装方式"为由跳过可用更新的问题（Fixes #51604）。
   [链接](anomalyco/opencode PR #51690)

9. **#55120 refactor(console): 停止在代理中剥离旧 Zen 头**
   推理已不再读取 `x-zen`、`x-zen-model`、`x-zen-ip`、`cf-access-client-id`，代理仅需剥离 `host` 与 `content-length`。
   [链接](anomalyco/opencode PR #55120)

10. **#54749 [contributor] feat(app,tui): 在其他客户端创建的会话以后台标签打开**
    此前只有会话搜索可见 `opencode run`、SDK、codemode 等外部创建的会话，此 PR 增加可选项自动以背景标签打开。
    [链接](anomalyco/opencode PR #54749)

（另：#54391 修复菜单高度限制以支持长列表滚动，#54434 修复 TUI 播放结束后音频不停止，#55113/#54278 修复以未加引号 flow indicator 开头的 frontmatter 值。）

---

## 功能需求趋势

- **V2 配置体系一致性**：`OPENCODE_CONFIG_DIR` 语义、`instructions` 加载、config schema 版本、缺失文件引用处理——四条不同 Issue/PR 指向同一主题，V2 迁移中的配置解析尚未收敛。
- **成本与上下文管理**：`keep.tokens` 未生效、prompt-cache TTL 不可配，均指向长会话的 token 与费用控制。
- **平台与客户端体验**：Windows 安装失败、中文 IME 预编辑重叠、桌面模型选择器推理能力显示错误——跨平台 UI 细节仍有缺口。
- **外部集成**：#54805 请求将 OpenCode 接入 Figma 远程 MCP server，MCP 生态接入是持续诉求。
- **插件系统成熟度**：Git 安装插件 `./tui` 不加载、自定义工具首次调用"不存在"，插件加载时序与可用性问题突出。

---

## 开发者关注点

- **数据与磁盘安全**：snapshot 仓库膨胀 15 GB（#55010）与会话因超大附件永久损坏（#55110）是最需要尽快处理的健壮性问题。
- **行为不一致**：多个 bug 源于 v1/v2 两套加载器或路径解析策略分裂（#32825、#28658、#54796），建议统一解析逻辑。
- **静默失败**：插件 `./tui` 被静默跳过、自定义工具间歇性"不可用"、Windows 报 16 位应用错误，均缺少清晰错误提示，增加排查成本。
- **服务可用性**：更新服务持续 503、Zen Go `/v1/responses` 单会话永久 503（#53120），影响日常使用与升级路径。
- **权限与环境变量**：`PYTHONPATH=... uv run` 场景下的"Allow always"未按预期覆盖（#45914），环境变量前缀命令的权限匹配规则需要修正。

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报 · 2026-10-13

数据来源: github.com/badlogic/pi-mono（earendil-works/pi）

---

## 1. 今日速览

今天最引人关注的是 **v1.2.0 正式发布**，核心亮点是按 OpenRouter key 过滤可用模型列表并同步上下文、价格等参数。与此同时，社区围绕 **Windows 支持、TUI 渲染性能、终端兼容性** 的讨论持续升温，Windows sink-thread（#7547）已成为评论数最高的长期议题。此外，`@earendil-works/pi-codemode` 1.2.0 的破坏性变更（移除 `MCP_TYPESCRIPT_PREAMBLE`）引发下游项目 `pi-web` 崩溃反馈。

---

## 2. 版本发布

### v1.2.0

**新特性：按 key 过滤的 OpenRouter 模型列表**

- 配置 OpenRouter key 后，Pi 仅列出该 key 有权使用的模型；
- 每个模型显示对应 key 的上下文窗口、最大输出与价格；
- 支持 `models.json` 中配置的区域性端点（regional endpoints）。

该特性与社区长期诉求一致，对应 PR #10569、#10672 的实现方向。详见 [v1.2.0 Release](https://github.com/earendil-works/pi)。

---

## 3. 社区热点 Issues（10 条）

1. **[#7547 OPEN] [Windows] [sink-thread] How do you use Pi on windows?**
   评论 83（今日最高）。发起者指出 Windows 上运行 Pi 的方式过多，难以判断该优先修 bug、完善文档还是支持某一路径。这是 Windows 支持方向的长期聚合讨论。
   https://github.com/earendil-works/pi/issues/7547

2. **[#6187 CLOSED] Pi login hangs in WSL after GitHub Copilot device authorization**
   评论 28。WSL 中 GitHub Copilot 设备授权完成后 Pi 客户端无法检测到登录状态。已关闭，是 WSL/认证链路的重要修复信号。
   https://github.com/earendil-works/pi/issues/6187

3. **[#10314 CLOSED] Reconsider Home/End defaults in fullscreen mode?**
   评论 24，👍 5。全屏模式下 Home/End 从"行首/行尾"改为全屏行为，引发老用户交互习惯争议。已关闭，说明默认行为已定论。
   https://github.com/earendil-works/pi/issues/10314

4. **[#8834 CLOSED] [no-action] Opt-in package namespace (pi.namespace) for skills and prompt templates**
   评论 12。提议在 `package.json` 中增加可选 `pi.namespace` 字段，统一 skills 与 prompt 模板的解析命名空间。标记 no-action。
   https://github.com/earendil-works/pi/issues/8834

5. **[#10256 OPEN] [bug] 终端颜色查询回包泄漏进 prompt，BEL 打开外部编辑器（mintty/ConPTY）**
   评论 10，👍 3。Windows 下启动即触发外部编辑器，prompt 中出现 `rgb:...` 乱码；0.99.x 受影响，0.87.1 正常。属明确回归。
   https://github.com/earendil-works/pi/issues/10256

6. **[#9549 OPEN] [fullscreen] 大型 transcript 每帧重渲染，resize 重发整个 transcript（单核跑满）**
   评论 9。Windows 11 / Windows Terminal 下性能问题，由本地 Pi agent 协助定位并经 `pi -ne` 复现。全屏性能核心痛点。
   https://github.com/earendil-works/pi/issues/9549

7. **[#10840 CLOSED] openai-codex: GPT-6.1 Sol 仍使用 272K，Codex 默认已升至 500K**
   评论 8。目录中 `contextWindow: 272000` 未随上游更新，导致压缩预算偏保守。涉及新模型上下文支持。
   https://github.com/earendil-works/pi/issues/10840

8. **[#10870 OPEN] [radius] Radius 改变 /share 行为，应可配置**
   评论 5。今日新开。提议新增 `PI_SHARE_USE_RADIUS` 环境变量（默认 true），允许在 radius 作为 provider 时仍将会话保存到 gist。
   https://github.com/earendil-works/pi/issues/10870

9. **[#10868 OPEN] [bug, prio:p0] pi-ai: 非法 \u 转义导致工具调用参数丢字段**
   评论 2，P0 优先级。`parseStreamingJson` 遇到 `\url`、`\usepackage` 等非法 JSON 转义时会静默丢弃受影响字段。影响工具调用正确性。
   https://github.com/earendil-works/pi/issues/10868

10. **[#10741 OPEN] Groq Qwen3.8 27B 因 Pi 发送 `developer` 角色返回 HTTP 400**
    评论 4。Groq 的 `qwen/qwen3.8-27b` 在简单问候即报模板渲染错误。涉及新模型/新提供商兼容。
    https://github.com/earendil-works/pi/issues/10741

---

## 4. 重要 PR 进展（10 条）

1. **[#10694 OPEN] fix(ai): 在 slow_down 后调整 OAuth 设备轮询间隔**
   解决 WSL/Ubuntu 时钟偏快（约 10%）导致 Copilot OAuth 轮询始终"稍快于 slow-down"、永不成功的问题。
   https://github.com/earendil-works/pi/pull/10694

2. **[#10528 OPEN] refactor nix part**
   重构 Pi 的 Nix 打包，清理 `package.nix`，移除 `*.map`、`*.d.ts` 等，仍在进行中。
   https://github.com/earendil-works/pi/pull/10528

3. **[#10855 CLOSED] fix(ai): 在小米 MiMo 模型上将 minimal thinking 映射为 low**
   MiMo API 只接受 `low/medium/high/none`，此前 `minimal` 直接透传导致 400；通过 `thinkingLevelMap` 修正。
   https://github.com/earendil-works/pi/pull/10855

4. **[#10569 CLOSED] feat(ai, coding-agent): 按 key 可用性过滤 OpenRouter 模型**
   通过 `GET /api/v1/models/user` 过滤被 key guardrails 排除的模型，Closes #10353，是 v1.2.0 特性的实现之一。
   https://github.com/earendil-works/pi/pull/10569

5. **[#10672 CLOSED] feat(ai, coding-agent): 只列出 key 可用的 OpenRouter 模型**
   每次刷新时合并目录与 `/models/user`，保留可用 chat 模型并取其上下文、最大输出与价格。v1.2.0 的另一实现。
   https://github.com/earendil-works/pi/pull/10672

6. **[#10847 OPEN] fix: 发布时保留旧版模型目录路由**
   修复 #9099：0.80.8–0.84.4 从 pi.dev 拉取目录但请求走 `openai-completions`，而按模型的 OpenRouter API 从 0.85.0 才引入。
   https://github.com/earendil-works/pi/pull/10847

7. **[#10718 OPEN] fix(coding-agent): 在 `--export` HTML 中包含 system prompt**
   命令行 `pi --export` 输出的 HTML 缺少 system prompt，而交互式 `/export` 包含；此 PR 补齐一致性。
   https://github.com/earendil-works/pi/pull/10718

8. **[#10872 CLOSED] fix(tui): rxvt-unicode 下避免重复 wheel 步进**
   Fixes #10824，使 Pi 在 rxvt-unicode 中的鼠标滚轮行为与其他 TUI 一致。
   https://github.com/earendil-works/pi/pull/10872

9. **[#1 CLOSED] feat: bash 工具增加 Windows Git Bash 支持**
   较早期的功能请求型 PR（代码未测试、由 Claude Code 生成），加入平台检测与回退错误处理，呼应 Windows 支持讨论。
   https://github.com/earendil-works/pi/pull/1

10. **[#10528 相关] Nix 打包持续重构**
    与 #10528 同向，社区在打包与分发层面的持续投入（此处以 #10528 为代表）。
    https://github.com/earendil-works/pi/pull/10528

---

## 5. 功能需求趋势

- **Windows 平台支持**：sink-thread #7547、#10256（mintty/ConPTY 颜色查询泄漏）、#9549（Windows Terminal 性能）、#1（Git Bash）等，构成最集中的方向——社区希望明确"官方推荐路径"并优先修复。
- **OpenRouter / 模型目录治理**：v1.2.0 按 key 过滤模型、#10840 上下文窗口同步、#10847 目录路由、#10741 Groq 角色兼容，均围绕"模型元数据与可用性"展开。
- **新模型与新提供商接入**：GPT-6.1 Sol（Codex）、Groq Qwen3.8 27B、小米 MiMo、Radius provider 等，社区对前沿模型即时支持需求强烈。
- **TUI 交互与终端兼容**：全屏 Home/End 默认值（#10314）、rxvt-unicode 滚轮（#10872）、硬件光标覆盖（#9925）、隐藏 thinking 空行（#9765）。
- **打包与分发**：Nix 重构（#10528）。
- **API/协议层扩展**：pi-env 支持注入 daemon 以在 Workers 运行（#10846）、RPC session 事件（#10470）。

---

## 6. 开发者关注点

- **跨平台一致性是最大痛点**：Windows/WSL 上登录、编辑器误触发、渲染性能、包管理（Git SHA 不更新 #10758、release 剪枝导致模块丢失 #10864）问题密集。
- **性能与资源占用**：全屏大型 transcript 单核跑满、每次 resize 重绘（#9549），影响重度用户。
- **正确性与静默失败**：非法 JSON 转义丢字段（#10868，P0）、Groq 模板报错（#10741）、路径 Unicode 归一化致 ENOENT（#8877）——"静默错误"类问题最受关注。
- **破坏性变更管理**：`pi-codemode` 1.2.0 移除导出使 `pi-web` 崩溃（#10869），社区对 semver 与发布兼容性敏感。
- **可配置性诉求**：`PI_SHARE_USE_RADIUS`（#10870）、`pi.namespace`（#8834）等反映社区希望以环境变量/配置项控制行为，而非硬编码默认值。

---

*注：以上内容均基于所提供的 GitHub 数据整理，未添加外部信息。*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报（2026-10-13）

## 1. 今日速览

Managed Agent 架构仍是社区绝对主线：Issue #12380 的"双路径架构"提案评论数达 57 条，围绕 H3/H4 阶段的一批验收、可靠性与隔离问题今日集中收敛或关闭。与此同时，CI 稳定性（#13951 checkout 失败）和工具调用恢复类缺陷（#13492、#13801）进入 review 阶段，反映多智能体运行时从"跑通"向"可生产"过渡。此外，官方 千问AI平台 / QwenCloud 的接入替换需求（#14025）今日新开，涉及 `/auth` 默认 provider 顺序调整。

## 2. 版本发布

**v0.25.1-nightly.20261012.18f80f5666**（nightly）
- `fix(managed-agent)`: 根据 #12692 R2 review 改进 connector 与 broker 的健壮性（PR #13330，@wenshao）
- `feat(managed-a...`（release notes 内容被截断，未在数据中完整给出）

## 3. 社区热点 Issues（10 条）

1. **#12380 [OPEN] proposal(serve): Define Managed Agent dual-path architecture and staged delivery** — 57 条评论，今日最热。定义保留 TypeScript agent loop、将模型推理与工具环境供给解耦、赋予 Session 持久所有权的分阶段架构，是理解整个 managed-agent 路线图的入口。
   https://github.com/QwenLM/qwen-code/issues/12380

2. **#12333 [OPEN] eval: verify tool-loading cost and task quality with local CLI A/B** — 15 条评论。2026-10-13 更新明确缩小范围：用现有本地 CLI A/B 证据评估工具加载成本与任务质量，不再以外部 DSW pool 或标准套件为前提。
   https://github.com/QwenLM/qwen-code/issues/12333

3. **#13492 [OPEN] XML tool-call recovery drops outer calls containing quoted tool markup** — 11 条评论，status/in-review。PR #13515 已合并阻止带引号工具标记被当作真实调用派发，后续 PR #13579 处理外层调用恢复。
   https://github.com/QwenLM/qwen-code/issues/13492

4. **#8596 [CLOSED] Deprecate the Electron desktop app and rename desktop-shell to desktop** — 10 条评论后关闭。决定弃用 `packages/desktop`（Electron），将 Tauri 的 `desktop-shell` 重命名为 `desktop`，桌面端技术栈正式转向 Tauri。
   https://github.com/QwenLM/qwen-code/issues/8596

5. **#10797 [OPEN] Non-thinking scaffolding tags echoed into user-visible output** — 10 条评论，status/in-review。工具结果块、system-reminder 等脚手架标签泄漏到用户可见输出，2026-10-07 在 `1aba19c8` 上仍可复现，标记 welcome-pr。
   https://github.com/QwenLM/qwen-code/issues/10797

6. **#14011 [OPEN] feat: harness SWE — feature-type benchmark tasks that exercise qwen code's own features** — 今日新建，7 条评论、2 个 👍（本批次少见的高赞）。提议用真实小仓库 + 功能实现指令 + 行为验证器构建基准套件，专门压测 qwen code 自身功能面。
   https://github.com/QwenLM/qwen-code/issues/14011

7. **#13847 [OPEN] [H4b follow-up] Harness crash inside a batch with no Runtime work blocks the lead Session** — 7 条评论。批量中仅有后台 Agent 启动或 team 调用的 Hosted Turn 崩溃后无可恢复的持久记录，会阻塞 lead Session，属多智能体可靠性关键缺陷。
   https://github.com/QwenLM/qwen-code/issues/13847

8. **#13951 [OPEN] CI: Integration Tests (no-AK, No Sandbox) fails at Checkout with "fatal: pack has 1 unresolved delta"** — 6 条评论。PR #13815 的 CI 运行在 `integration_no_ak` lane checkout 阶段失败，影响合并流水线可信度。
   https://github.com/QwenLM/qwen-code/issues/13951

9. **#14025 [OPEN] Replace ModelStudio onboarding with 千问AI平台 / QwenCloud; keep it first** — 今日新建，5 条评论。由官方账号 QianWen-AI-Platform 提出，将 `/auth` 中的 Alibaba ModelStudio 替换为覆盖国内与国际平台的 千问AI平台 / QwenCloud，并保持其置顶。
   https://github.com/QwenLM/qwen-code/issues/14025

10. **#14032 [OPEN] /mcp 面板将有状态 HTTP Streamable MCP 显示为 disconnected 且 Reconnect 失败** — 今日新建，4 条评论。同一会话内工具调用实际成功、`mcp list` 新进程也正常，但面板状态与重连行为不一致，属 MCP 状态显示与重连的 UI/状态同步缺陷。
    https://github.com/QwenLM/qwen-code/issues/14032

其他值得一扫的关闭项：#13533（后台进程退出观察与捕获背压，H3 启用前置）、#13532（H3 精确 head 的 Linux 物理验收）、#13535（actor 角色与租户隔离验收，所有部分均已有 PR）、#11358（`qwen serve` 托管自定义 Web Shell 发行版）、#12984（`--include-tools/--exclude-tools` 逗号分隔未拆分）、#13794（file-history 快照 payload 门禁重复）、#10118（Live 拆分为独立语音应用，设计已收敛进入排期）。

## 4. 重要 PR 进展（10 条）

1. **#14056 [OPEN] fix(cli): recover Hosted journal-only tool batches after crashes** — 在 Hosted 工具批首次写控制面之前增加持久化 journal-only 等待，使崩溃后替换流程可恢复，直接对应 #13847 类问题。
   https://github.com/QwenLM/qwen-code/pull/14056

2. **#14039 [OPEN] fix(managed-agent): recover lost lifecycle detach replies** — 处理 lifecycle detach 成功但 HTTP 响应丢失的场景：明确的 resource-phase 404 仅丢弃那条过期引用，避免后续 v2 资源请求被 Java 缓存的 Harness Session 引用阻塞。
   https://github.com/QwenLM/qwen-code/pull/14039

3. **#14055 [OPEN] fix(cli): reject batch plan targets that alias the same path** — `qwen batch` 计划校验此前按字节比较 target 字符串，`out/result.md` 与 `out/./result.md` 可绕过；现改为拒绝同一文件的别名路径。
   https://github.com/QwenLM/qwen-code/pull/14055

4. **#14046 [OPEN] feat(core): add a real PTY backend for the Bun runtime** — Bun runtime 边界计划 S2（堆叠于 #14036）。Bun 下 `@lydell/node-pty` 将非阻塞 fd 的 `EAGAIN` 表现为错误，需真实 PTY 后端。
   https://github.com/QwenLM/qwen-code/pull/14046

5. **#14050 [OPEN] feat(daemon): support session-targeted Skill and Extension refresh** — 显式刷新请求可带可选 `sessionIds` 只刷新指定活跃会话；省略为全量刷新，重复 ID 只刷新一次，空数组不刷新。
   https://github.com/QwenLM/qwen-code/pull/14050

6. **#13219 [OPEN] fix(managed-agent): bound retry loops with terminal states** — 为 managed-agent 栈中原本无终态的异步重试循环（含一处永久卡死的投影）引入预算与终态。
   https://github.com/QwenLM/qwen-code/pull/13219

7. **#13815 [OPEN] fix(managed-agent): numeric parity and family-list hoisting for publication families** — 起于 #13533 Linux 验收发现的 A1（capture-publication reserve 拒绝后台 Shell 与 Monitor payload），叠加 #13789 的改动，附带端到端准入与 wedge 证据。注意其 CI lane 正被 #13951 阻塞。
   https://github.com/QwenLM/qwen-code/pull/13815

8. **#13816 [OPEN] fix(managed-agent): hand back the Workspace mount when a tool turn goes recovery blocked** — 新增 broker 内部 `POST /tool-sessions/{runtimeSessionId}:release-mount`，仅释放 managed Workspace Session 持有的执行挂载，避免恢复受阻时挂载泄漏。
   https://github.com/QwenLM/qwen-code/pull/13816

9. **#11854 [OPEN] feat: add hybrid code mode** — 引入对齐 Codex 的 `tools.mode` 枚举（`direct` / `code_mode` / `code_mode_only`）：`code_mode` 保留普通工具直调，同时暴露隔离的 `exec` JavaScript 工具。长期挂起的较大型功能改动。
   https://github.com/QwenLM/qwen-code/pull/11854

10. **#13958 [OPEN] feat(web-shell): review MCP App messages before submission (PR3a)** — 为 MCP App 文本消息增加提交前审阅流：Test Failure Explorer 可请求分析最多 20 个选中失败，宿主展示完整请求、来源与原实时会话后再提交。
    https://github.com/QwenLM/qwen-code/pull/13958

另可关注：#14043（DingTalk / WeCom 长消息按 Markdown 结构切分，普通目标 3800、完整结构上限 20000）、#14014（按提交序列排序发送方命令，并让成员重启 IT 真正打断活跃等待）、#14052 / #14053（Web Shell 与 Desktop 品牌标识更新、让 Web Shell 接收 OS 文件拖放）。

## 5. 功能需求趋势

- **Managed Agent 运行时与多智能体**：压倒性主线。涵盖双路径架构（#12380）、H3/H4 阶段验收（#13532、#13533、#13535）、后台 Agent 与 team 调用（#13847）、子任务状态终态（#13801）、重试循环终态（#13219）与挂载释放（#13816）。
- **会话与令牌/上下文管理**：compaction 的服务器上下文上限缺少作用域导致无法安全套用到独立压缩模型（#13876）、长上下文下的工具加载成本评估（#12333）、Session 所有权与持久化（#12380）。
- **MCP 生态与工具可用性**：`qwen mcp add` 的 include/exclude 参数解析（#12984）、有状态 HTTP Streamable MCP 的面板状态与重连（#14032）、将 You.com 免费 MCP 加入文档中的 web search 服务列表（#13987）——起因是内置 `web_search` 仅对 DashScope 配置开启。
- **CLI / 批处理**：`qwen batch` 计划校验（#14055）、Hosted journal-only 批次崩溃恢复（#14056）、Bun runtime 的 PTY 支持（#14046）。
- **Web Shell / 桌面端分发**：弃用 Electron 转向 Tauri（#8596）、`qwen serve` 托管自定义 Web Shell 发行版（#11358）、Web Shell 拖放与品牌更新（#14053、#14052）、MCP App 消息审阅（#13958）。
- **计费与认证接入**：以 千问AI平台 / QwenCloud 取代 ModelStudio 并置顶（#14025）。
- **评测与 CI 质量**：harness SWE 基准（#14011）、集成测试 checkout 不稳定（#13951）。
- **语音入口**：Live 作为全部会话的语音总入口拆分（#10118）。

## 6. 开发者关注点

1. **崩溃恢复与终态语义是当前最痛的可靠性缺口**：无 Runtime 工作的批次崩溃会阻塞 lead Session（#13847）、`child_run` 卡在 `dispatch_started` 却进程从未启动（#13801）、无终态的重试循环（#13219）、丢失的 detach 响应阻塞后续资源请求（#14039）——同一类"状态承诺与实际不符"的问题反复出现。
2. **MCP 状态显示与真实行为不一致**：工具调用实际成功、`mcp list` 正常，但 `/mcp` 面板显示 disconnected 且重连失败（#14032）；`--include-tools` 按字节存成一个工具名导致白名单隐藏全部工具（#12984）。面板与状态的信任度受损。
3. **CI 稳定性直接影响合并节奏**：`fatal: pack has 1 unresolved delta` 阻塞集成测试 lane（#13951），而该 lane 正是 #13815 这类关键 managed-agent 修复的验收路径。
4. **脚手架内容泄漏到用户可见输出**：非思考模式下工具结果块与 system-reminder 被回显（#10797），已标记 welcome-pr，适合新贡献者切入。
5. **内置能力的作用域限制引发集成摩擦**：`web_search` 仅对 DashScope 生效，OpenRouter / DeepSeek / ModelScope / 本地模型用户被导向 MCP 方案（#13987）。
6. **长任务评估方法本身被质疑**：标准套件与外部池不是前置条件，社区倾向先用本地 CLI A/B 证据说话（#12333），并希望用压测自身功能面的基准来验证质量（#14011）。

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI 社区动态日报（2026-10-13）

> 数据来源：github.com/Hmbown/DeepSeek-TUI（文中链接指向 codewhale-hq/Codewhale 仓库）

## 今日速览

今日无新版本发布，0.10.2 仍处于 release candidate 阶段（PR #6968 尚未合并发布）。社区讨论集中在 **Windows 平台稳定性**（启动崩溃回归守卫、子进程生命周期）与 **会话恢复可靠性**（大 session 文档、sub-agent handoff 无法 resume）。同时 `/undo` 命令被发现严重 bug，多份静态审计类 issue 持续更新。

## 版本发布

无新版本发布。上一已发布版本为 v0.10.1，0.10.2 release candidate 仍在验证中。

## 社区热点 Issues（10 条）

1. **[#6970](https://github.com/codewhale-hq/Codewhale/issues/6970) `/undo` 命令严重 bug**（OPEN，新建于 10-13）
   执行 `/undo` 后 TUI 提示文件改动已回退，但对话状态异常。当日新建即获 2 条评论，属影响核心工作流的高优先级缺陷。

2. **[#6652](https://github.com/codewhale-hq/Codewhale/issues/6652) 长时间运行后 TUI 滚动卡顿**（OPEN，8 条评论）
   Windows 下运行较久后滚动出现“果冻感”，部分内容已滚动、部分未滚。评论数最多，反映渲染/性能层长期未解问题。

3. **[#6094](https://github.com/codewhale-hq/Codewhale/issues/6094) 0.10.2 tracking 帖**（OPEN，7 条评论）
   维护者 Hmbown 维护的发布跟踪贴，明确 0.10.2 已更新至 10-13 但尚未发布，是了解下一补丁版本范围与参与方式的入口。

4. **[#2323](https://github.com/codewhale-hq/Codewhale/issues/2323) 中文输入法未适配**（OPEN，5 条评论，1 👍）
   中文输入拼音时不隐藏提示“编写任务或使用 /”，且配置/危险操作确认窗口下输入异常。持续半年的本地化痛点，中文用户关注度高。

5. **[#6963](https://github.com/codewhale-hq/Codewhale/issues/6963) Windows runtime floor 阻断只读管道命令**（OPEN，4 条评论）
   在 Full Access 下，native（非 npm）安装的 Windows 环境无法执行只读 piped 命令，为 #6827 的后续问题，涉及权限模型与命令分类。

6. **[#6953](https://github.com/codewhale-hq/Codewhale/issues/6953) Windows 10 1607 启动失败**（CLOSED，2 条评论）
   v0.10.1 在 Win10 Pro 1607 上因 `DeriveCapabilitySidsFromName` 导入未解析（0xC0000139）无法启动。虽已关闭，但直接催生了回归守卫 issue #6962。

7. **[#6955](https://github.com/codewhale-hq/Codewhale/issues/6955) 超过 8 MiB 的 session 文档无法 resume/fork**（OPEN）
   保存的会话文档超限后无法恢复或分叉，且拒绝提示未给出补救方案，journal 是溢出主因。影响长会话用户。

8. **[#6954](https://github.com/codewhale-hq/Codewhale/issues/6954) 含原始 sub-agent handoff 的会话无法 resume**（OPEN）
   `codewhale resume` 拒绝保存历史中仍含 raw sub-agent handoff 的会话，涉及 Engine 恢复消息与保存文档的比对逻辑。

9. **[#6969](https://github.com/codewhale-hq/Codewhale/issues/6969) Deferred-toolbox 驱逐在经济上净负收益**（OPEN，新建于 10-13）
   指出 `ToolActivationCache`（8 名称 / 16 KiB）在 provider prompt caching 下驱逐会导致全前缀重新 prefill 与写入溢价，属成本模型层面的深度分析。

10. **[#6923](https://github.com/codewhale-hq/Codewhale/issues/6923) Gemini 429 错误应等待并自动重试**（OPEN，3 条评论）
    请求在遇到 429 限流时自动等待重试上一任务，兼具 bug 与 enhancement 标签，涉及多 provider 支持体验。

**其他值得留意：** [#6558](https://github.com/codewhale-hq/Codewhale/issues/6558) 子/worker 进程生命周期清理缺口、[#6555](https://github.com/codewhale-hq/Codewhale/issues/6555) 持久化写入非崩溃原子（tmp+rename 无 fsync）、[#6160](https://github.com/codewhale-hq/Codewhale/issues/6160) Runtime API 终端契约（Windows ConPTY），均为长期跟踪的可靠性议题。

## 重要 PR 进展（10 条）

1. **[#6968](https://github.com/codewhale-hq/Codewhale/pull/6968) 0.10.2 candidate：endpoint 作用域目录、分级定价与发布验证**（OPEN）
   当前 PR head 为 `cf7199b52e`，尚未发布。记录创始人在最终 head 通过验证后批准 squash-merge，是 0.10.2 发布的关键通道。

2. **[#6949](https://github.com/codewhale-hq/Codewhale/pull/6949) 修复子代理 state-path 检查（state root 迁移场景）**（OPEN）
   当 `.codewhale` 为 junction（跨卷存放应用状态）时，子代理在 step 0 全部失败；此 PR 重新定位 state-path 检查根路径。

3. **[#6929](https://github.com/codewhale-hq/Codewhale/pull/6929) 修复 execpolicy：重定向不是命令分隔符**（CLOSED）
   含孤立 `&` 的 shell 命令在 Windows 上被硬阻断，此 PR 修正安全门对重定向的误判。

4. **[#6952](https://github.com/codewhale-hq/Codewhale/pull/6952) 修复 workflow：拒绝会阻断自身角色的 gate**（CLOSED）
   处理 #6945，`role: "implement"` 且 `blocks_role: "implement"` 的 gate 会卡死唯一能通过它的角色。

5. **[#6971](https://github.com/codewhale-hq/Codewhale/pull/6971) 修复 MCP 两项 loopback 测试在 HTTP 代理后失败**（OPEN）
   适配导出 `HTTP_PROXY`/`HTTPS_PROXY` 的环境，改善本地代理开发者的测试体验。

6. **[#6967](https://github.com/codewhale-hq/Codewhale/pull/6967) 修复 steer 测试不再依赖 2 秒 in-band receipt**（OPEN）
   `steer_turn` 在 `STEER_SETTLE_WAIT` 内未获引擎裁决时返回 `Queued`（steer_count 为 0），导致断言失败，此 PR 调整测试。

7. **[#6966](https://github.com/codewhale-hq/Codewhale/pull/6966) 将三处短审批超时放宽至 30 秒**（OPEN）
   针对 windows-latest 上 `child_permission_gate` 测试 250ms 超时频繁 overrun 的 flakiness 修复。

8. **[#6943](https://github.com/codewhale-hq/Codewhale/pull/6943) 移除五个模块的 blanket `dead_code` allow**（OPEN）
   #5587 的一部分，清理过期的 `#![allow(dead_code)]`，属工程卫生类改动。

## 功能需求趋势

- **Windows 平台适配优先**：本批 issue/PR 中 Windows 标签出现频率最高，涵盖启动导入回归（#6953/#6962）、权限与命令分类（#6963）、子进程清理（#6558）、ConPTY（#6160）、持久化原子性（#6555），平台兼容已成主线。
- **本地化与输入体验**：中文输入法适配（#2323）持续受关注；`codewhale init` 按当前语言生成 agents.md（[#6964](https://github.com/codewhale-hq/Codewhale/issues/6964)）。
- **会话可靠性与状态管理**：大 session 文档 resume（#6955）、sub-agent handoff 恢复（#6954）、`/undo` 一致性（#6970）构成一组状态一致性需求。
- **性能与成本模型**：TUI 滚动性能（#6652）、prompt 缓存下的工具箱驱逐经济性（#6969）。
- **多 provider 支持**：Gemini 429 自动重试（#6923）、provider 失败模式记录（[#6889](https://github.com/codewhale-hq/Codewhale/issues/6889)）。

## 开发者关注点

1. **Windows 稳定性是首要痛点**：从启动崩溃到权限判定、进程清理、原子写入，多个独立问题指向同一平台，社区反馈密集。
2. **会话无法恢复/分叉是高频阻塞**：超限文档与残留 handoff 都会导致 resume 被拒，且提示缺少可行补救方案（#6955、#6954）。
3. **性能随运行时长劣化**：TUI 滚动卡顿（#6652）与工具箱驱逐的成本盲区（#6969）反映在长会话与定价敏感场景下的体验缺口。
4. **本地化体验影响核心输入**：中文输入法问题会直接干扰任务编写与危险操作确认（#2323）。
5. **测试 flakiness 与贡献者体验**：多个 PR 在修正 Windows CI 上的超时与代理导致的测试失败（#6966、#6967、#6971），维护者也在通过审计类 issue（#6558、#6555）系统化清理技术债。

</details>

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar) 自动生成。*