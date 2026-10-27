# AI CLI 工具社区动态日报 2026-09-29

> 生成时间: 2026-09-29 14:21 UTC | 覆盖工具: 9 个

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

# AI CLI 工具生态横向对比分析报告（2026-09-29）

> 本报告仅基于所提供 GitHub 社区动态数据整理，未补充外部信息。涉及"成熟度""活跃度"的判断均为对当日数据的相对比较，不代表工具整体评价。

---

## 1. 生态全景

当前 AI CLI 工具已整体越过"能否跑通"的阶段，竞争焦点转向**可靠性、成本可控性与企业可管控性**三条主线。最突出的共性信号是：**上下文/令牌成本治理**与**MCP、OAuth 等认证链路**几乎成为所有工具社区共同的技术债重灾区。与此同时，**托管 Agent / 服务端运行时**（Qwen Code 的 Managed Agent、Codex 的多智能体消息板）开始从设计讨论走向代码落地，预示架构层竞争即将展开。**Windows 平台**在多个工具中一致表现为系统性短板，而**桌面端稳定性回归**（Codex）与**输入体验回归**（DeepSeek TUI）显示快速迭代正在积累质量摩擦。

---

## 2. 各工具活跃度对比

| 工具 | Issues 动态 | PR 动态 | Release 情况 | 当日热度定性 |
|---|---|---|---|---|
| **Claude Code** | 50 条更新，绝大多数为 `stale` 文档类集中关闭 | 8 条（3 条同一作者权限安全系列） | **v2.1.284**：Sonnet 5.5 成为默认 Sonnet，1M 上下文 | 高：版本重磅 + 批量清理 |
| **OpenAI Codex** | 多条 Windows 桌面故障集中活跃，Meta 配额议题持续累积 | 10 条（企业 MCP 授权、多智能体、Windows 沙箱等） | **rust-v0.159.0** 稳定版 + 0.160.0 多 alpha | 高：桌面端问题爆发 |
| **Gemini CLI** | 集中于 agent/子代理可靠性 + 安全 | 10 条（grep 注入 CWE-88、策略目录权限、沙箱限流） | **v0.63.0-nightly**（修复认证死循环） | 高：安全与 agent 双主线 |
| **GitHub Copilot CLI** | 集中关闭潮（MCP/认证/记忆），OAuth 新痛点活跃 | **0 条** | **v1.0.89 ~ v1.0.90-2 共 6 个版本** | 高发布频率、零 PR |
| **OpenCode** | 计费争议、会话初始化栈溢出、图片导致会话锁死 | 10 条（MCP OAuth 复用、instructions 解析、Nix 打包等） | 无 | 中高：v2 回归 + 计费风险 |
| **Pi** | 推理模型上下文管理问题集群（compaction、上下文上限死锁） | 10 条（Codemode/MCP、托管 llama.cpp、虚拟模型） | 无 | 高：架构级 PR 密集 |
| **Qwen Code** | 50 条（Managed Agent 架构线 + token 治理伞形议题） | 50 条（Hosted 延迟基线、MCP 运行时、Broker 契约） | **v0.24.7**（测试补齐 + MCP 修复） | 高：单日 PR 量最大 |
| **DeepSeek TUI** | 26 条（0.10.0 回归集群 + bug-hunt） | 50 条（#6750–#6760 密集修复） | 无 | 高：回归驱动的修复潮 |
| **Kimi Code CLI** | — | — | — | **过去 24 小时无活动** |

> 说明：Issue/PR 数为所提供摘要中显式提及的当日更新条目数，非仓库累计总量。Claude Code 与 Qwen Code 的 50 条系摘要中明确给出的统计口径。

---

## 3. 共同关注的功能方向

**① 令牌 / 上下文成本治理（覆盖面最广）**
- **Qwen Code**：`#12028` 伞形议题，量化指出内置工具 schema 是最大块非对话上下文；子项涵盖工具集选择（#12326）、系统提示词精简（#12781）、召回/成功率门禁缺失（#12333）。
- **Claude Code**：`#21132`（16 👍）要求 Claude 自主清理上下文；`#54174` 反映 `/context` token 可见性文档缺口。
- **OpenCode**：`#51818` 指出压缩反而可能使上下文变大（保留 reasoning 块）。
- **Pi**：`#10033`、`#9409` 推理模型 compaction 失败 / 上下文上限死锁。
- **Gemini CLI**：`#24246` 工具数超阈值触发 400，期望智能收敛。

**② MCP 与 OAuth 认证可靠性**
- **GitHub Copilot CLI**：`#4968`（OAuth 重定向端口不匹配）、`#4985`（`${secret:...}` 占位符未传递）、`#2581`（工具名点号导致 400）——MCP 是数量最多的议题簇。
- **OpenAI Codex**：`#35006`（OAuth 全生命周期 + 企业 SSO）、`#29630`（失效 client_id 不重新注册）。
- **OpenCode**：`#48076` 复用 OAuth 客户端注册。
- **Claude Code**：`#54171`（Agent SDK MCP `redirectUri`）、`#55194`（代理/IPv6 下 OAuth 超时）。
- **Pi**：`#9508` 向兼容 provider 发送 OpenAI 专有字段导致 400/422。

**③ 企业级权限与管控**
- **Claude Code**：PR `#98083`（`allowManagedModsOnly`）、`#98080`（deny 规则优先于个人插件 allow）。
- **OpenAI Codex**：PR `#49260`（限制企业 MCP 授权并 fail closed）。
- **Gemini CLI**：PR `#29336`（保护非系统策略目录写权限）。

**④ Windows 平台兼容性（一致短板）**
- **Codex**：加载卡死、无法发送后续消息、组织设置加载失败、渲染进程崩溃。
- **Copilot CLI**：`#3281` 原生绑定缺失。
- **OpenCode**：`#50924` curl 升级反斜杠路径失败、`#46095` 插件解析污染。
- **DeepSeek TUI**：`#6427` 多行粘贴逐行自提交、`#6745` ExecutionPolicy 失败。
- **Claude Code**：`#55190` PowerShell 7 发现来源文档缺失。

**⑤ 会话恢复与错误语义准确性**
- **Gemini CLI**：`#22323` 子代理中断被误报为 success；`#29553` 不可重试配额错误被当作可重试。
- **Qwen Code**：`#12970`（+PR `#12982`）`invalid_tool_params` 被误判为 max_tokens 截断。
- **OpenCode**：`#52042` 图片被拒后会话锁死、无恢复路径。
- **Pi**：`#10031` ESC 停止卡在 "Working..."。

---

## 4. 差异化定位分析

| 维度 | Claude Code | OpenAI Codex | Gemini CLI | Copilot CLI | OpenCode | Pi | Qwen Code | DeepSeek TUI |
|---|---|---|---|---|---|---|---|---|
| **功能侧重** | 模型能力前沿（1M 上下文）+ 企业管控 | 桌面端 + 多智能体协作 + CLI/TUI | Agent 可靠性 + 安全加固 | MCP 生态 + 编辑器/IDE 联动（.claude/rules 兼容） | 插件 API + 多 provider 兼容层 | 本地模型（llama.cpp）+ 实验性扩展（Codemode/虚拟模型） | 托管 Agent / Hosted Workspace 基础设施 | 多提供商网关接入 + hooks 扩展生态 |
| **技术路线** | 闭源模型驱动，权限模型快速细化 | Rust 实现（rust-v* 版本号），沙箱与云策略 | Nightly 高频迭代，ACP 协议支持 | 高频小版本滚动（6 版本/日） | v2 大版本迁移中 | 扩展注册体系 + 内置扩展可禁用 | 保留 TS agent loop 与推理/工具解耦的双路径 | TUI crate 拆分（EPIC-005） |
| **目标用户** | 企业 + 重度专业开发者 | Windows 桌面用户 + 订阅付费用户 | 通用开发者 + 安全敏感场景 | GitHub 生态 / VS Code 用户 | 插件开发方 + 自建 provider 用户 | 本地/自托管推理模型用户 | 平台化部署方 + 多模型远程执行 | 运维/网关集成 + 插件开发者 |
| **商业化信号** | 新价格结构明确（$2/$10 per Mtok） | 配额与计费信任议题（#41220） | 月度消费上限（#29553） | — | zen 账户计费争议（#18016） | — | — | — |

**核心差异总结**：
- **Claude Code 与 Codex** 处于"模型厂商第一方工具"位置，竞争围绕模型能力与企业管控展开，但 Codex 明显被 Windows 桌面质量问题拖累。
- **Gemini CLI 与 Copilot CLI** 都在经历"生态扩张后遗症"：前者是 agent 可靠性，后者是 MCP 接入的标准化缺口。
- **Pi 与 OpenCode** 走开放性路线，但 Pi 押注本地模型（llama.cpp 托管模式、虚拟模型），OpenCode 押注插件 API 与 provider 兼容。
- **Qwen Code 是唯一明确向"服务端托管 Agent"演进**的工具，其 Managed Agent 双路径架构在本次数据中独一无二。
- **DeepSeek TUI** 的差异化在 hooks 生态（MemoryWhale 等外部插件依赖执行回执）与多网关标准化接入。

---

## 5. 社区热度与成熟度

**社区活跃度分层（基于当日数据）**：

- **最活跃（Issue 与 PR 双高）**：Qwen Code（50 Issue + 50 PR）、DeepSeek TUI（26 Issue + 50 PR）——两者均处于**架构演进 + 密集修复并行**的阶段。
- **高热度但形态不同**：
  - **Claude Code**：Issue 量最大但以 `stale` 文档清理为主，实际新增工程讨论密度低于表面数字。
  - **Codex**：Issue 由用户故障报告主导（评论数最高的 #48074 达 91 条），属**问题驱动型活跃**。
- **快速迭代阶段**：**GitHub Copilot CLI**（单日 6 个版本，但 0 PR——迭代完全由内部驱动）、**Gemini CLI**（nightly + 安全 PR 密集）。
- **架构跃迁期**：**Pi**（Codemode/MCP、托管 llama.cpp、虚拟模型三项大功能同日更新）、**Qwen Code**（Managed Agent 全套基础设施）。
- **成熟度信号**：
  - 出现**集中的 stale 批量关闭**（Claude Code）：说明维护流程已制度化，但也可能掩盖仍有效的文档问题。
  - 出现**量化证据驱动的报告**（DeepSeek TUI `#6728` 跨三版本二进制对比）：用户群体技术成熟度高。
  - 出现**回归问题反复**（DeepSeek TUI `#6427` 标记为"#5981 再次失效"）：质量守门存在缺口。

**成熟度最低环节**：几乎所有工具在**跨平台（尤其 Windows）** 与 **MCP/OAuth 认证**两处表现出一致的不成熟。

---

## 6. 值得关注的趋势信号

**信号一：Agent 的"错误语义"正成为一等公民问题**
Gemini CLI（中断报成 success）、Qwen Code（工具参数错误报成截断）、Copilot CLI 等多个工具同时暴露"错误分类不可信"。对开发者而言：**当前不应无条件信任 CLI 上报的任务成功状态**，自动化流水线中需要额外的验证层。

**信号二：托管式 Agent 是下一个架构分水岭**
Qwen Code 的 `#12380`（保留 TS agent loop 同时解耦推理与工具环境）+ `#12946`（Hosted MCP 运行时，模型仅收到投影信息）+ Codex 的 `#49267`（远程 agent 消息板）共同指向：**Agent 运行时正在从本地进程转向服务端托管，安全边界与凭据治理随之重构**。技术决策者应提前评估数据不出本地的合规要求。

**信号三："优化不得破坏缓存"成为硬约束**
Qwen Code 中 `#11550`（记忆写入导致 prompt 重处理）是当日唯一获赞议题且 blocked 三周；`#12326` 明确要求不破坏 prompt 前缀。这揭示一个被低估的成本真相：**很多 token 优化方案在缓存层面被抵消**。开发者评估优化方案时，应同时核算缓存命中率。

**信号四：令牌优化的"代价侧"缺乏度量**
Qwen Code `#12333` 直言 token 工作只有节省指标、没有召回率与任务成功率门禁，且"没有 owner"。这是对行业方法的警示：**省 token 与任务质量之间存在未被测量的权衡**。

**信号五：Windows 是被集体忽视的高价值市场**
从 Codex 桌面故障集群到 Claude Code、Copilot CLI、OpenCode、DeepSeek TUI 的 Windows 问题，**五个以上工具在同一平台表现薄弱**。对开发者而言，若工作流强依赖 Windows，当前应优先选择有明确 Windows 修复 PR 在途的工具，并保留回滚路径。

**信号六：计费透明度已进入信任链**
Codex `#41220`（Meta 配额追踪）、OpenCode `#18016`（账户无法删除仍被扣费，9 👍）、Gemini CLI `#29553`（消费上限误判为可重试）、Claude Code 新价格结构——**成本可解释性与产品稳定性已合并为同一条信任链**。企业采购时建议将用量核算透明度纳入评估项。

**信号七：推理模型 + 自托管的组合体验最差**
Pi 的多条议题（compaction 失败、上下文上限死锁、非 ASCII 参数静默损坏）集中在推理模型 + llama.cpp 自托管场景。这说明**当前 AI CLI 对带 thinking 输出的推理模型适配尚不成熟**，使用本地推理模型的团队应预期较高的重试成本。

---

*本报告仅基于所提供 GitHub 数据整理，未补充外部信息。*

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告（数据截止 2026-09-29）

## 1. 热门 Skills 排行（按关注度/评论）

> 说明：本次提供的 PR 数据中评论数字段均为 `undefined`，无法按评论数严格排序。以下按数据中体现的关注度（更新活跃度、问题严重性、Issue 讨论量）综合挑选。

1. **skill-creator 系列修复**（PR #1298 / #1681 / #1383）
   功能：修复 Skill 创建工具链的触发评估、Windows 兼容、脚本打包等问题。
   热点：Issue #556（12 评论）报告 `run_eval.py` 触发率为 0%；#1383 列出六个可复现缺陷；#202（已关闭）批评 skill-creator 文档化倾向过重。
   状态：OPEN
   https://github.com/anthropics/skills/pull/1298

2. **mcp-builder 修复**（PR #1742）
   功能：适配 `mcp>=2` 的 `streamable_http_client` 重命名及自定义 headers。
   热点：Issue #1390（4 评论）指出 evaluation.py 对所有真实 MCP server 评分 0/N。
   状态：OPEN
   https://github.com/anthropics/skills/pull/1742

3. **claude-api 模型退役更新**（PR #1607）
   功能：将四个已退役模型 ID 标记为 retired。
   热点：Issue #1487（4 评论）指出 claude-api skill 单次工具调用注入约 156k tokens，耗尽上下文窗口。
   状态：OPEN
   https://github.com/anthropics/skills/pull/1607

4. **docx 相关修复**（PR #1792 / #1734 / #541）
   功能：LibreOffice 超时错误上报、孤立批注检测、`w:id` 冲突导致文档损坏修复。
   状态：OPEN
   https://github.com/anthropics/skills/pull/1792

5. **md2video-audio**（PR #1703）
   功能：零成本将 Markdown 编译为带拟真人声的 MP4 视频。
   状态：OPEN
   https://github.com/anthropics/skills/pull/1703

6. **pyxel**（PR #525）
   功能：Python 复古游戏开发、调试与验证（无头输入驱动、逐帧检查）。
   状态：OPEN
   https://github.com/anthropics/skills/pull/525

7. **proofcore-contract-auditor**（PR #1771）
   功能：Solidity/Rust 智能合约静态分析，并将审计证明锚定到 TON 区块链。
   状态：OPEN
   https://github.com/anthropics/skills/pull/1771

8. **document-typography**（PR #514）
   功能：生成文档的排版质量控制（孤词换行、寡行段落、编号错位）。
   状态：OPEN
   https://github.com/anthropics/skills/pull/514

## 2. 社区需求趋势（来自 Issues）

- **安全与信任边界**：Issue #492（43 评论，最高）反映社区 skill 冒用 `anthropic/` 命名空间，构成信任边界滥用。
  https://github.com/anthropics/skills/issues/492
- **组织内 Skill 共享**：Issue #228（16 评论，👍8）希望在 Claude.ai 内直接共享 skill，免除手动上传。
  https://github.com/anthropics/skills/issues/228
- **评估/测试工具链可信度**：Issue #556（触发率 0%）、#1390（MCP 评估伪造错误）、#1383（benchmark 静默失败）——社区强烈要求 eval 工具真实可用。
  https://github.com/anthropics/skills/issues/556
- **安全分析类 meta-skill**：#83 提出 skill-quality-analyzer 与 skill-security-analyzer；#412 提出 agent-governance（策略执行、威胁检测、审计）。
  https://github.com/anthropics/skills/issues/412
- **上下文效率**：#1487 的 156k tokens 注入问题；#1329 提出 compact-memory 符号化压缩 agent 状态。
  https://github.com/anthropics/skills/issues/1329
- **文档处理与治理**：#1175 讨论 SharePoint 文档的安全与上下文窗口；#189（👍9）报告插件内容重复导致 skill 冗余。
  https://github.com/anthropics/skills/issues/189

## 3. 高潜力待合并 Skills（评论活跃、可能近期落地）

- **PR #1298 / #1681**：skill-creator 兼容性与打包修复，更新至 2026-09-16 / 09-27，对应多个高热度 Issue。
- **PR #1742**：mcp-builder 适配 mcp>=2，更新至 2026-09-29（数据截止当日），Fixes #1668。
- **PR #1607**：claude-api 模型退役更新，更新至 2026-09-28，Fixes #1603。
- **PR #1792**：docx 超时错误处理，更新至 2026-09-25。
- **PR #1771 / #1776**：proofcore-contract-auditor、blast-radius（批量破坏性写操作前的检查清单），均为 2026-09 新建且更新时间相近。

## 4. Skills 生态洞察

**当前社区最集中的诉求是：官方 Skill 工具链（尤其 skill-creator 与 mcp-builder）的可靠性与安全性亟待修复，同时呼吁建立可信的 skill 命名/分发信任边界——即"先让评估与分发可信，再谈新 Skill 扩张"。**

---
*注：本报告严格基于所提供数据，PR 评论数字段缺失，故排行依据更新活跃度与关联 Issue 讨论量推断。*

---

# Claude Code 社区动态日报（2026-09-29）

## 1. 今日速览

今日最重磅的动态是 v2.1.284 发布，Claude Sonnet 5.5 正式成为 Anthropic API 上默认的 Sonnet 模型，带来 1M 上下文窗口与新的价格结构。社区侧今日有大量 Issue 集中关闭，其中绝大多数为标记 `stale` 的文档类修正（同一作者 coygeek 批量提交），说明维护团队正在清理积压的文档欠账。同时安全方向出现新动向：社区提交的 PR 引入 `allowManagedModsOnly` 等企业级权限管控选项。

## 2. 版本发布

### v2.1.284
- **新模型支持**：新增 Claude Sonnet 5.5（`claude-sonnet-5-5`），并成为 Anthropic API 上的默认 Sonnet 模型。
  - 1M 上下文窗口
  - 定价 $2 / $10 per Mtok，缓存读取 $0.20/Mtok
- **交互改进**：auto 模式在工作目录之外进行读取时，确认提示新增「Yes, but ask again next time」选项，减少重复授权打断。
- 链接：github.com/anthropics/claude-code/releases

## 3. 社区热点 Issues

> 说明：今日更新列表中的高评论 Issue 几乎全部处于 `CLOSED` 状态，且大量带 `stale` 标签，以下按「社区关注度 / 功能价值」排序。

1. **#21132 [CLOSED] Claude 自主清理上下文（Claude clear context for itself）**
   16 个 👍、12 条评论，是今日列表中社区认可度最高的功能需求。让 Claude 自主判断并清理上下文直接关系到长会话的成本与效率，属于核心（area:core）能力。
   https://github.com/anthropics/claude-code/issues/21132

2. **#33242 [CLOSED] [VSCode] 接受 plan mode 前计划内容不可见**
   12 条评论、8 个 👍，IDE 集成中的显著体验缺口——用户在确认计划前看不到计划内容，直接影响 plan mode 可用性。
   https://github.com/anthropics/claude-code/issues/33242

3. **#55580 [CLOSED] Claude in Chrome：允许用户覆盖服务端域名黑名单**
   7 个 👍。涉及权限（area:permissions）与浏览器扩展的冲突，反映企业管控与个人可用性之间的张力。
   https://github.com/anthropics/claude-code/issues/55580

4. **#67868 [CLOSED] 第三方 marketplace autoUpdate 未在会话启动时刷新**
   自建 GitLab marketplace + 用户级插件的真实场景 bug（v2.1.175），重启也无法拉到新版本，影响插件分发链路可靠性。
   https://github.com/anthropics/claude-code/issues/67868

5. **#54174 [CLOSED] [DOCS] VS Code `/context` 缺少原生 token 用量对话框说明**
   文档与实现不一致，涉及 token 可见性这一高频关注点。
   https://github.com/anthropics/claude-code/issues/54174

6. **#54471 [CLOSED] [DOCS] OpenTelemetry 未记录 `api_request` / `api_error` 数值属性类型**
   影响企业可观测性接入：属性类型未定义会导致监控面板与告警规则写错。
   https://github.com/anthropics/claude-code/issues/54471

7. **#54171 [CLOSED] [DOCS] Agent SDK MCP 缺少 `mcp_authenticate` 的 `redirectUri` 用法**
   涉及自定义 scheme 与 Claude.ai connector 的 OAuth2 认证，是 SDK 集成方的实际阻塞点。
   https://github.com/anthropics/claude-code/issues/54171

8. **#55194 [CLOSED] [DOCS] OAuth 登录排障缺少慢速 / 代理 / 纯 IPv6 环境的超时指引**
   网络受限环境下的登录失败是长期痛点，文档缺口会显著增加支持成本。
   https://github.com/anthropics/claude-code/issues/55194

9. **#55190 [CLOSED] [DOCS] PowerShell 工具未说明 Windows PowerShell 7 的发现来源**
   Windows 平台工具链文档缺失，影响跨平台开发者上手。
   https://github.com/anthropics/claude-code/issues/55190

10. **#60408 [CLOSED] [DOCS] 自定义工具未说明不支持的 MCP 图片 MIME 回退行为**
    涉及 MCP tool-result 图片块，边缘但容易导致静默失败的行为未文档化。
    https://github.com/anthropics/claude-code/issues/60408

（其余同批关闭的文档类 Issue 还包括 #54167 语言设置本地化、#54170 LSP 诊断摘要、#54173 语音听写回退、#54168 connector 去重、#54175 Bash 启动目录恢复、#55188 auto 模式卡住的权限检查、#55193 组织禁用 OAuth、#60399 `/resume` 后台会话、#60405 Read 工具文本回退、#60691 全屏鼠标交互，均属同类低 👍 清理项。）

## 4. 重要 PR 进展

1. **#97952 [OPEN] ci: 调用 Claude 的 GitHub Actions 工作流安全加固**
   针对 `claude-issue-triage.yml`、`claude-dedupe-issues.yml`、`claude.yml` 三个工作流做安全加固，是仓库自身 CI 供应链安全的直接改进。
   https://github.com/anthropics/claude-code/pull/97952

2. **#98083 [OPEN] sec-default: 新增 `allowManagedModsOnly` 托管选项**
   组织可仅允许自有 mods、拒绝个人安装的 mods，通过 managed settings 中的 `pluginConfigs` 配置，为企业管控提供单开关方案。
   https://github.com/anthropics/claude-code/pull/98083

3. **#98080 [OPEN] sec-default: settings deny 规则优先于个人插件返回的 allow/ask**
   在 `tool.check` 阶段，用户层插件无法再覆盖安全默认位置上的 deny 规则，堵住权限降级路径。
   https://github.com/anthropics/claude-code/pull/98080

4. **#94847 [OPEN] diff: 首次编辑仅在确有文件可列出时才打开面板**
   修复 diff 面板在 `Edit`/`Write`/`NotebookEdit` 后过早自动打开（且在拉取数据前打开）的问题，涵盖仓库外、被忽略文件、不同 worktree 等场景。
   https://github.com/anthropics/claude-code/pull/94847

5. **#98018 [CLOSED] mods: 回滚两项变更（agents-md 截断读取、diff 强制颜色）**
   回滚 #96363 与 #96364，使 agents-md 与 diff 两个 mod 恢复原有行为，属于快速纠偏。
   https://github.com/anthropics/claude-code/pull/98018

6. **#96364 [CLOSED] agents-md: 自动分页读取嵌套 AGENTS.md 不再视为已投递**
   修复整文件读取超 token 上限被分页后，语义上「是否已投递该文件」判断失准的问题（已被 #98018 回滚）。
   https://github.com/anthropics/claude-code/pull/96364

7. **#96363 [CLOSED] diff: 传 `--no-color` 避免强制 git 颜色清空 diff 正文**
   当仓库或用户 git config 设置 `color.ui=always` 时，ANSI 转义会破坏 diff 正文（header 与计数仍正常，因其来自 `--shortstat`/`--numstat`）（已被 #98018 回滚）。
   https://github.com/anthropics/claude-code/pull/96363

8. **#31204 [CLOSED] 新增 AI 学习路线图交互式 canvas 应用**
   基于 React + Vite 的节点-边可视化学习路径应用。与 Claude Code 本体关联度低，更接近社区示例项目，已关闭。
   https://github.com/anthropics/claude-code/pull/31204

> 注：过去 24 小时更新的 PR 共 8 条，以上为全部条目，其中 3 条为同一作者 poteat 的权限安全系列（#98083、#98080、#98018），值得整体关注。

## 5. 功能需求趋势

从今日 Issue 池（50 条更新，含大量 stale 文档项）可提炼出以下方向：

- **IDE 深度集成（VS Code 为主）**：#33242（plan 内容可见性）、#54174（`/context` token 对话框）、#54173（语音听写语言回退）——IDE 内行为与终端行为的差异是持续摩擦点。
- **模型与上下文能力**：v2.1.284 引入 Sonnet 5.5 / 1M 上下文；#21132 要求 Claude 自主清理上下文，说明大上下文时代下「上下文预算管理」正在成为一等公民需求。
- **MCP 与 Agent SDK 工具链**：#54171（OAuth `redirectUri`）、#54168（connector 去重）、#60408（图片 MIME 回退）——MCP 生态已进入「边缘行为需要明确契约」的成熟期。
- **权限与企业管控**：PR #98083 / #98080 的企业级 mods 管控，配合 Issue #55580（Chrome 域名黑名单覆盖）、#55188（auto 模式卡住的权限检查）、#55193（组织禁用 OAuth），权限语义正在快速细化。
- **可观测性与运维**：#54471（OpenTelemetry 属性类型）、#55194（代理 / IPv6 环境 OAuth 超时）——企业部署路径的文档与行为缺口。
- **跨平台**：#55190（Windows PowerShell 7）、#55193、#55580（platform:windows）——Windows 侧需求密度仍然偏高。

## 6. 开发者关注点

- **文档与实现不一致是今日最大噪音源**：单日更新中约 15 条以上为同一作者提交的 `[DOCS]` 修正，全部带 `stale` 标签并集中关闭。这说明大量已知文档欠账被长时间搁置后才批量处理，建议维护方评估 `stale` 自动关闭策略是否会误伤仍然有效的文档问题。
- **权限模型的可预测性**：社区 PR 连续围绕「用户安装的 mods 不应能覆盖安全 deny 规则」展开，配合 #55580 的用户侧覆盖诉求，反映出**组织策略 vs 个人可用性**是当前最尖锐的权限设计矛盾。
- **插件 / mods 分发链路可靠性**：#67868 显示第三方 marketplace 的 autoUpdate 在会话启动时机上不可靠，且跨重启无法恢复，对依赖私有插件源的企业用户影响直接。
- **上下文成本可见性与控制权**：1M 上下文发布后，#21132 的高赞与 `/context` 文档问题（#54174）共同指向一个需求——开发者希望**看得见 token 去向，并且能让模型自己动手清理**。
- **计划模式（plan mode）的可信度**：用户在确认计划前看不到计划内容（#33242），削弱了「先审阅后执行」这一安全机制的实际价值。
- **自托管与受限网络的接入体验**：OAuth 超时、组织禁用 OAuth、纯 IPv6 等场景的排障指引缺失（#55194、#55193），是企业内网推广中的常见阻塞点。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报（2026-09-29）

## 1. 今日速览

今日 Codex 发布稳定版 rust-v0.159.0，带来可选的 `instant_interrupt` 输入打断能力与全新欢迎界面，同时 0.160.0 系列多个 alpha 版本持续推进。社区侧最突出的信号是 **Windows 桌面端系列故障**（加载卡死、消息无法发送、组织设置加载失败、渲染进程崩溃）集中爆发，多条相关 Issue 在 24 小时内持续活跃；此外配额异常消耗的 Meta 追踪 Issue #41220 仍在累积报告。

## 2. 版本发布

- **rust-v0.159.0**：新增可选的 `instant_interrupt`，允许在模型响应期间或长时间运行的 code-mode 调用中由新输入直接引导 Codex（#48135、#48141）；新会话获得紧凑的欢迎屏与统一头部，并在回合中/后偶尔展示提示（#48513、#48562、#48352）。
  链接: openai/codex Releases
- **rust-v0.160.0-alpha.6 / alpha.3 / alpha.2**：0.160.0 系列预发布版本推进。
  链接: openai/codex Releases
- **rust-v0.159.0-alpha.13**：0.159.0 系列预发布版本。
  链接: openai/codex Releases

> 注：0.159.0 release notes 中 «The warnings v...» 内容被截断，未包含完整信息。

## 3. 社区热点 Issues

1. **#48074 [OPEN] Windows：安装 Codex daemon 后终端窗口在请求期间反复闪烁**（评论 91 / 👍126）
   当前评论数与点赞数最高的 Issue，属 Windows + CLI + app-server 组合问题，影响面广，社区参与度极高。
   链接: openai/codex Issue #48074

2. **#41220 [OPEN] [Meta] Codex 用量/配额异常消耗与计费不一致 —— 跨报告追踪**（评论 53 / 👍18）
   汇总多份“配额消耗远快于基线”的用户报告，直接涉及付费用户成本，是当前最敏感的商业信任议题。
   链接: openai/codex Issue #41220

3. **#36040 [OPEN] 回归：iOS Remote 仅列出有近期会话的项目**（评论 62 / 👍4）
   跨 iOS + macOS 主机的远程控制回归，长期未闭环，反映远程工作流的稳定性缺口。
   链接: openai/codex Issue #36040

4. **#45626 [OPEN] [Windows Desktop] 首个回合完成后无法发送后续消息**（评论 36 / 👍7）
   已存在会话与新建会话均受影响，CLI 不受影响——是桌面端可用性的核心阻塞问题。
   链接: openai/codex Issue #45626

5. **#48324 [OPEN] ChatGPT Windows 桌面版 Codex 报 “Unable to load organization settings”**（评论 23 / 👍4）
   在加载 composer 前即失败，无法创建任何会话，Web 与 CLI 正常，企业/组织配置路径可能存在问题。
   链接: openai/codex Issue #48324

6. **#48463 [OPEN] Windows 桌面更新后卡在加载屏（app_start bootstrap 超时）**（评论 22 / 👍3）
   更新后应用无限期卡在加载屏，浏览器版同一 PC 正常，属升级回归。
   链接: openai/codex Issue #48463

7. **#48938 [OPEN] [Windows] 更新后渲染进程反复崩溃、白屏重载与严重输入延迟**（评论 5 / 👍1）
   用户以付费 Pro 20x 身份描述对工作、计划与用量的严重冲击，情绪激烈，代表高付费用户的不满积累。
   链接: openai/codex Issue #48938

8. **#35006 [OPEN] [MCP] 使 OAuth 生命周期与企业 SSO 重新认证可靠**（评论 12 / 👍2）
   MCP OAuth 全生命周期的伞形追踪 Issue，关系企业级 SSO 落地，是 MCP 生态的关键基础设施议题。
   链接: openai/codex Issue #35006

9. **#29630 [OPEN] MCP OAuth：invalid_client / 刷新令牌过期时不重新注册（DCR），需手动重认证**（评论 5 / 👍5）
   与 #35006 配套的具体缺陷：Codex 未丢弃失效 client_id 并请求注册端点，导致企业中频繁人工干预。
   链接: openai/codex Issue #29630

10. **#37541 [OPEN] [Windows 11] 渲染进程 OOM 自动重载后卡在加载屏，app-server 任务仍在继续**（评论 8）
    渲染进程约 4 GiB 后崩溃，后台 agent 工作照常运行但界面卡死，暴露桌面端内存与状态同步的架构问题。
    链接: openai/codex Issue #37541

其他值得留意：#48125（TUI/CLI 文本复制回归，已关闭，情绪化反馈）、#48602（Linux 桌面卡在 “Starting your task”，回滚可恢复）、#48774（Android Remote 配对失败）、#46980（“Selected model is at capacity” 模型容量报错）、#48906（Windows 11 切换器不显示 Codex）、#46743（Windows 桌面无法连接 Chrome）。

## 4. 重要 PR 进展

1. **#49260 限制企业 MCP 授权，并在配置刷新时 fail closed**
   配置重载需遵守当前托管限制，不得向既有会话授予新的企业 MCP 权限，也不得以旧配置覆盖新配置。
   链接: openai/codex PR #49260

2. **#49269 在配置重载期间保留 thread overrides 与云策略有效性**
   修复 host 配置引用缺失 model provider 时，thread overrides 可替代却被判定为无效配置的问题。
   链接: openai/codex PR #49269

3. **#49267 支持多智能体会话中的远程 agent 消息板**
   新增 `features.multi_agent_v2.message_board_remote`，可配置 board URL 与 bearer token（直接提供或经环境变量）。
   链接: openai/codex PR #49267

4. **#49262 追踪回合阶段，并将已接受输入与回合关联**
   解决 steering/recovery 请求与原回合 trace 不同、采样在工具仍在执行时结束的相关性追踪问题。
   链接: openai/codex PR #49262

5. **#49261 保留 Windows 沙箱运行器启动错误**
   修复 `SetErrorMode` 恢复错误模式时覆盖 `CreateProcessWithLogonW` 失败码，导致 `RunnerLogonError` 报错错误的问题。
   链接: openai/codex PR #49261

6. **#49257 允许 Guardian 在根上下文不完整时使用缓存审批**
   避免缺失的 retained root 指令无限期阻塞 worker 匹配低风险缓存评分后批准操作。
   链接: openai/codex PR #49257

7. **#49164 抑制后台子进程的 Windows 控制台窗口**
   针对 detached Windows 进程启动的后台 helper 会分配控制台窗口的问题，在 Job Object 启动与 containment fallback 路径保留控制台抑制。
   链接: openai/codex PR #49164

8. **#49161 在 TUI 中遵循 app-server 的 provider 默认值**
   修复客户端 provider 默认值覆盖 app-server 配置 provider，进而使会话在 resume/fork 历史中不可见的问题。
   链接: openai/codex PR #49161

9. **#49160 支持使用 workspace 默认值的无项目 TUI 会话**
   对本地发现的无项目目录跳过文件夹信任提示，应用 workspace-write 权限与细粒度审批默认值。
   链接: openai/codex PR #49160

10. **#49153 在 TUI 复制引用选区时省略引用标记**
    修复在 blockquote 内选择文本复制时带入 Markdown 引用符号的问题，返回纯文本。
    链接: openai/codex PR #49153

补充：#49145（远程/本地后台服务器连接时在 `/status` 隐藏 reasoning summary 设置）、#49171（修复 TUI 历史的 model provider 查找）、#49246（bwrap 测试改用可执行 fixture 复制，避免向同级 spawn 暴露可写 fd）。

## 5. 功能需求趋势

- **桌面端稳定性与性能**：本日更新中 Windows/Linux 桌面问题占绝对多数——启动卡死、渲染进程 OOM/崩溃、白屏重载、后续消息禁用、控制台窗口闪烁。多份 PR（#49164、#49261）正从底层修复 Windows 进程与沙箱行为。
- **远程控制与跨设备配对**：iOS Remote 项目列表回归（#36040）、Android 配对失败（#48774）、Windows 端 Chrome 连接失败（#46743），跨端远程工作流是持续热点。
- **MCP 与企业级认证**：OAuth 生命周期（#35006）、DCR 缺失（#29630）与今日 PR #49260 的企业 MCP 授权收紧，共同指向企业 SSO 与 MCP 权限治理。
- **输入引导与多智能体协作**：`instant_interrupt` 已进入稳定版，配套 tracing（#49262）与远程消息板（#49267）显示多智能体会话正在成形。
- **会话与任务可见性**：持久化侧边栏展示活动任务（#33730）、项目排序控件失效（#33077），反映用户在任务量增大后的组织需求。
- **无障碍**：屏幕阅读器友好的 TUI 模式需求（#20489）仍在等待，作者表示已有本地修复可参考。
- **配额与计费透明度**：#41220 及各 rate-limits 报告表明用量核算透明度已成为社区持续诉求。

## 6. 开发者关注点

- **Windows 桌面体验是当前最大痛点**：卡加载、无法发送后续消息、组织设置加载失败、渲染进程崩溃/内存膨胀、切换器缺项等问题相互叠加，且多在更新后出现，开发者需要清晰的回滚路径与状态同步修复。
- **故障期间后台任务与界面状态不一致**：多个报告（#37541、#24850、#48463）显示 app-server 任务仍在运行，而 UI 卡在加载或 Thinking 状态，用户无法感知进度。
- **认证与配置的“失败方式”**：MCP/OAuth 失效后不自动重新注册、配置重载时可能授予或覆盖权限，开发者期望 fail closed 的可预期行为（对应 PR #49260、#49269）。
- **付费用户对配额与稳定性的容忍度接近临界**：#41220 与 #48938 中明确提及订阅等级与用量损失，情绪强烈，说明成本可解释性与桌面稳定性是同一条信任链。
- **CLI/TUI 细节回归影响日常效率**：文本复制失效（#48125）、块引用复制带标记（#49153）、provider 默认值覆盖导致历史不可见（#49161），虽是细节但对高频用户影响直接。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报（2026-09-29）

## 1. 今日速览

今日发布 v0.63.0 夜间构建，核心修复为认证环节的死循环问题（文件竞争、无头模式 keyring、supervisor 状态丢失）。过去 24 小时内 Issue 与 PR 活动高度集中在 **agent/子代理可靠性** 与 **安全加固** 两条主线：大量 agent 相关 bug 被重新测试或补充信息，同时 grep 参数注入、策略目录权限校验、沙箱扩展限流等安全类 PR 密集提交。

## 2. 版本发布

**v0.63.0-nightly.20260929.gfe6350238**
- `fix(auth)`: 修复由文件竞争、无头 keyring、supervisor 状态丢失导致的无限认证循环（#28341，PR #29448）。
- 完整变更对比：https://github.com/google-gemini/gemini-cli/compare/v0.63.0-n

## 3. 社区热点 Issues（精选 10 条）

1. **#22323 [P1] 子代理 MAX_TURNS 中断被误报为 GOAL 成功**（13 评论 👍2）
   `codebase_investigator` 在未做任何分析前就触及最大轮次，却仍上报 `status: "success"`。此类错误信号会直接污染自动化评估与用户判断，是 agent 可靠性的核心问题。
   https://github.com/google-gemini/gemini-cli/issues/22323

2. **#21409 [P1] 通用代理挂死**（8 评论 👍8）
   一旦委派给 generalist agent 即无限挂起，连创建文件夹这类简单操作也会卡住一小时以上。高赞数反映这是广泛存在的实际使用阻塞。
   https://github.com/google-gemini/gemini-cli/issues/21409

3. **#19873 [P2] 通过零依赖 OS 沙箱 + 执行后意图路由利用模型的 bash 亲和性**（9 评论）
   提出让 Gemini 3 更充分地以原生 POSIX 工具链（grep/cat/sed/awk）探索与编辑代码库，属架构级增强提案。
   https://github.com/google-gemini/gemini-cli/issues/19873

4. **#21968 [P2] Gemini 未充分利用 skills 与子代理**（6 评论）
   用户反馈除非显式指令，模型几乎不会主动调用自定义 skills 和子代理。这直接影响 agent 编排能力的实际收益。
   https://github.com/google-gemini/gemini-cli/issues/21968

5. **#22745 [P2] 评估 AST 感知的文件读取、搜索与映射**（7 评论）
   EPIC 追踪 AST 感知工具能否减少轮次、更精确读取方法边界，与 #22746 的 CLI 工具选型调研（tilth / glyph）配套。
   https://github.com/google-gemini/gemini-cli/issues/22745

6. **#22267 [P2] Browser Agent 忽略 settings.json 覆盖（如 maxTurns）**
   Browser Agent 完全无视全局与项目级配置覆盖，说明 AgentRegistry 与实际执行路径之间存在配置断裂。
   https://github.com/google-gemini/gemini-cli/issues/22267

7. **#24246 [P2] 工具数超过阈值时触发 400 错误**
   工具数量过多时 API 返回 400，期望 CLI 能智能收敛工具范围。这是工具生态扩张后的规模化问题。
   https://github.com/google-gemini/gemini-cli/issues/24246

8. **#22672 [P2] 代理应阻止/抑制破坏性行为**
   模型在复杂 git 操作中偶发使用 `git reset`、`--force` 等危险命令，需要更安全的替代路径与拦截策略。
   https://github.com/google-gemini/gemini-cli/issues/22672

9. **#21983 [P1] browser 子代理在 Wayland 下失败**
   特定桌面环境下的浏览器子代理不可用，属平台兼容性阻塞。
   https://github.com/google-gemini/gemini-cli/issues/21983

10. **#23571 [P2] 模型频繁在随机位置创建临时脚本**
    在限制为 shell 执行时，模型会在多个目录生成编辑脚本，给提交前的清理带来大量额外开销。
    https://github.com/google-gemini/gemini-cli/issues/23571

## 4. 重要 PR 进展（精选 10 条）

1. **#29547 [P1][CLOSED] 修复 @ 命令正则吞噬引号字符串与 glob 停滞**（#29434）
   修复无头模式（`gemini -p`）下因输入含 `"@scope/..."` 类引号字符串导致的不可中断 100% CPU 卡死。
   https://github.com/google-gemini/gemini-cli/pull/29547

2. **#29536 修复 grep 命令行选项注入（CWE-88）**
   通过显式 `-e` 分隔符强制参数分离，加固 `packages/core/src/tools/grep.ts`。
   https://github.com/google-gemini/gemini-cli/pull/29536

3. **#29552 上报 ripgrep 执行失败**
   捕获 ripgrep 错误并返回 `GREP_EXECUTION_ERROR` 元数据，使调度器能正确记为失败的工具调用。
   https://github.com/google-gemini/gemini-cli/pull/29552

4. **#29553 [P2] 将月度消费上限视为终态配额错误**
   此前 details 为空、message 为项目消费上限的 429 被误判为可重试，TUI 会持续重试高需求错误。
   https://github.com/google-gemini/gemini-cli/pull/29553

5. **#29546 [P2] 非交互模式支持 `/skill-name` 激活技能**
   在非交互式 slash 命令路径中注册 `SkillCommandLoader`，使技能可在交互 UI 之外被激活。
   https://github.com/google-gemini/gemini-cli/pull/29546

6. **#29549 打通 ACP 的 PromptResponse.usage 并发出 usage_update 通知**（#29389）
   在 `gemini --acp` 模式下填充标准 ACP 字段，并捕获 cachedContentTokenCount 与 thoughtsTokenCount。
   https://github.com/google-gemini/gemini-cli/pull/29549

7. **#29535 尊重允许的 onboarding tier**（修复 #29529）
   当 Code Assist API 返回的允许层级未标记默认值时，避免回退到旧版层级而使个人/免费账号被错误处理。
   https://github.com/google-gemini/gemini-cli/pull/29535

8. **#29551 将中性化的 core.sshCommand 指向 ssh**
   修复 shell 与内部 git 环境把 `core.sshCommand` 覆盖为空串，导致 SSH 远端报 `fatal: unable to fork`。
   https://github.com/google-gemini/gemini-cli/pull/29551

9. **#29332 [P2] 限制单次调用扩展沙箱的次数**
   修复工具每次尝试都返回 `sandbox_expansion_required` 时 `_execute` 无计数递归、最终 FATAL 崩溃的问题。
   https://github.com/google-gemini/gemini-cli/pull/29332

10. **#29336 [P2] 保护非系统策略目录的写权限**（修复 #29311）
    将 `isDirectorySecure` 校验从仅系统目录扩展到全部层级，并支持 POSIX/Windows 下的当前用户所有权。
    https://github.com/google-gemini/gemini-cli/pull/29336

（另可关注 #29554 修复行为评估技能文档中的本地 `file://` 链接问题，属小型文档治理。）

## 5. 功能需求趋势

从过去 24 小时更新的 Issues 中可提炼出以下方向：

- **子代理可靠性优先**：MAX_TURNS 误报、generalist agent 挂死、Browser Agent 忽略配置、Wayland 失败等构成最集中的问题簇，标签多为 `area/agent` + `workstream-rollup`。
- **Skills 与子代理的主动调用能力**：#21968 反映模型不会自发使用自定义能力，指向 prompt/路由层面的改进需求。
- **工具规模化与收敛**：#24246（工具数超限 400 错误）、#23571（临时脚本散落）指向工具范围管理与输出治理。
- **AST 感知的代码理解**：#22745、#22746 探索用 AST 精确读取/搜索/映射代码库以降低轮次消耗。
- **原生 Bash 工作流深化**：#19873 提出零依赖沙箱与执行后意图路由，让模型更自然地使用 POSIX 工具链。
- **可观测性与评估**：#22598 希望子代理轨迹可通过 `/chat share` 查看，服务行为评估。
- **安全与破坏性行为抑制**：#22672 要求代理避免 `git reset --force` 类危险操作。

## 6. 开发者关注点

- **挂起与死循环是最大痛点**：generalist agent 无限挂死（#21409）、认证无限循环（今日 release 修复）、含引号 `@` 字符串导致的 CPU 卡死（#29547）——稳定性问题横跨 agent、认证与 CLI 解析层。
- **错误语义不准确**：子代理把中断报成 GOAL 成功（#22323）、把不可重试的配额错误当作可重试（#29553），开发者需要可信的状态与错误分类。
- **配置一致性缺失**：Browser Agent 忽略 settings.json（#22267）、`~/.gemini/agents/` 下 symlink 不被识别（#20079），说明配置读取路径存在多处死角。
- **破坏性操作的安全边界**：反复出现对 `--force`/`reset` 的担忧（#22672）以及多个安全类 PR（grep 注入 #29536、策略目录权限 #29336/#29333），显示安全加固正成为活跃方向。
- **平台兼容性**：Wayland 下浏览器子代理失败（#21983）、Windows/POSIX 目录权限差异（#29336）表明跨环境支持仍需补齐。
- **交互体验细节**：终端 resize 卡顿与闪烁（#21924）、交互式提示卡住 vite 创建（#22465）、`\n` 转义错误（#22466）等长期存在的体验问题持续被跟进。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报（2026-09-29）

## 1. 今日速览

过去 24 小时内，Copilot CLI 密集发布了 v1.0.89 至 v1.0.90-2 共 6 个版本，重点修复 MCP OAuth 令牌缓存复用、会话恢复后已撤回提示的残留，以及新增 `.claude/rules` 规则文件支持。Issue 侧出现明显的集中关闭潮：多条长期存在的 MCP、认证与上下文记忆问题被标记为 CLOSED（如 #4870 Figma MCP、#3281 安装故障、#2581 工具名点号问题）。同时，MCP OAuth 相关的新问题（#4968 重定向端口不匹配、#4985 密钥占位符未传递）仍是活跃痛点。

## 2. 版本发布

- **v1.0.90-2**：修复与变更（Fixes and changes）。
- **v1.0.90-1**：**Fixed** —— MCP OAuth 登录 Datadog 等服务时复用仍然有效的缓存令牌；会话恢复后已撤回的运行中提示保持移除状态。
- **v1.0.90-0**：修复与变更。
- **v1.0.89**（2026-09-28）：左键点击 `ask_user` 与 elicitation 表单输入项可聚焦并将光标定位到点击位置；新增对 `.claude/rules` 中 Claude Code 规则文件作为自定义指令的支持；侧边栏会话在完成一个尚未打开的回合计时显示蓝点。
- **v1.0.89-7**：修复与变更。

## 3. 社区热点 Issues

1. **[CLOSED] #4870 — Figma 远程 MCP 服务器加载失败**（评论 8，👍 12）
   最热议题。Figma 托管 MCP 服务器（mcp.figma.com）认证与初始化成功，但 CLI 将 `server/discover` 返回的 `-32601` 视为致命错误，导致工具从未注册；同类在 VS Code 中可用。已关闭，说明处理已有结论。
   https://github.com/github/copilot-cli/issues/4870

2. **[CLOSED] #3281 — 升级到 v1.0.46 后 CLI 无法使用**（评论 7）
   启动打印 banner 后立即报 "Cannot find native binding"（npm 可选依赖 bug），属安装/环境类阻断性问题，影响面大。
   https://github.com/github/copilot-cli/issues/3281

3. **[CLOSED] #2861 — `/compact` 压缩失败：模型返回空响应**（评论 7，👍 5）
   在 Opus 4.6 的短会话（<30 轮）手动 `/compact` 连续三次失败，涉及上下文记忆核心功能。
   https://github.com/github/copilot-cli/issues/2861

4. **[CLOSED] #3589 — 多个 sessionStart/subagentStart 钩子的 additionalContext 只注入最后一个**（评论 4，👍 2）
   插件钩子机制的上下文合并缺陷，影响依赖多钩子的工作流。
   https://github.com/github/copilot-cli/issues/3589

5. **[CLOSED] #4919 — `/ask` 在 auto 模型模式下不可用**（评论 4）
   auto 模式下使用 `/ask` 反复报"模型不支持"，1.0.86 版本复现。
   https://github.com/github/copilot-cli/issues/4919

6. **[CLOSED] #3682 — 支持不重启 CLI 即可刷新 BYOK 凭据**（评论 4，👍 9）
   高赞需求：BYOK 短时令牌（Entra ID/Azure AD、AWS STS、OIDC JWT）过期后必须重启 CLI，对企业用户影响显著。
   https://github.com/github/copilot-cli/issues/3682

7. **[CLOSED] #2581 — MCP 工具名含点号导致 400 Bad Request**（评论 3，👍 3）
   工具名不符合 API 的 `^[a-zA-Z0-9_-]` 模式而被拒绝，涉及与 MCP 规范的一致性。
   https://github.com/github/copilot-cli/issues/2581

8. **[CLOSED] #4807 — 空闲 CLI 触发 FileWatch 事件风暴，占用两核 CPU 并写出 33+ GB 日志**（评论 3）
   由 Agency 启动的空闲进程持续约 221% CPU 超 35 小时，属严重资源泄漏问题。
   https://github.com/github/copilot-cli/issues/4807

9. **[CLOSED] #4968 — OAuth 重定向 URI 端口不匹配导致多数 MCP 服务器登录失败**（评论 3）
   CLI 发布的 CIMD 声明固定端口，但运行时绑定临时端口，导致 OAuth 回调失败。
   https://github.com/github/copilot-cli/issues/4968

10. **[OPEN] #3172 — 异常提示 "Somebody else is owning the clipboard"**（评论 3，👍 11）
    本日最高赞的开放议题。复制文本后在其他应用复制，状态栏出现异常提示并破坏 TUI 布局，属渲染/键鼠交互问题。
    https://github.com/github/copilot-cli/issues/3172

其他值得关注：[OPEN] #4971 每小时出现授权错误（凭据过期，`/login` 无效）；[OPEN] #4985 MCP 服务器 `${secret:...}` 环境变量占位符未传递到子进程；[CLOSED] #1825 空输入 Schema 导致 CLI 崩溃（👍 10）；[CLOSED] #1405 支持用 `/rename` 的名字作为 `--resume` 参数（👍 5）；[CLOSED] #2805 希望像 skills 一样便捷切换 MCP（👍 5）。

## 4. 重要 PR 进展

过去 24 小时内更新的 Pull Request 数量为 **0**，本日无 PR 动态可汇报。

## 5. 功能需求趋势

从当前可见 Issues 中可提炼出以下社区关注方向：

- **MCP 生态与规范化**：OAuth 认证流程（#4968、#3393）、工具名与 Input Schema 校验（#2581、#1825）、密钥占位符传递（#4985）、MCP 快速开关（#2805）、Figma 等第三方服务器兼容（#4870）——MCP 是数量最多、最集中的议题簇。
- **认证与凭据管理**：BYOK 凭据热刷新（#3682）、周期性授权错误（#4971）、Kerberos 代理支持（#523）、macOS 键盘输入与后台用户名提示冲突（#3533）。
- **上下文与记忆机制**：`/compact` 失败（#2861）、多钩子 additionalContext 注入（#3589）。
- **终端渲染与输入交互**：剪贴板异常提示（#3172）、表单点击聚焦（已在 v1.0.89 落地）、`ask_user` 枚举字段的"自定义答案"逃生口（#3323）。
- **会话管理与扩展能力**：会话重命名作为 resume 标识（#1405）、PDF 文件上传支持（#4583）。

## 6. 开发者关注点

- **MCP 接入的稳定性与标准化**是当前最大痛点：从服务器发现、OAuth 回调端口、工具命名到密钥注入，多个环节存在阻断性缺陷。
- **企业级认证体验**：短时令牌需要重启 CLI 才能刷新（#3682），以及每小时一次的凭据失效（#4971）直接影响持续使用。
- **资源与日志异常**：FileWatch 事件风暴导致高 CPU 与超大日志（#4807）属需优先排查的严重问题。
- **安装与原生绑定问题**（#3281）在特定 npm 环境下使 CLI 完全不可用，社区反馈强烈。
- **上下文可靠性**：压缩失败与钩子上下文丢失，会让开发者对长会话的稳定性产生疑虑。
- **交互细节打磨**：剪贴板提示破坏 TUI、表单点击聚焦等细粒度体验问题获得较多点赞，反映用户对终端交互质量的期待。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报（2026-09-29）

## 1. 今日速览

过去 24 小时无新版本发布，社区活跃度集中在 Windows 平台缺陷与 v2.0 回归问题上。计费争议（#18016）、会话初始化栈溢出（#50296）、镜像输入导致会话不可恢复（#52042）是当前最值得关注的未解决痛点。PR 侧以修复类为主，涉及 MCP OAuth 复用、自定义工具加载、Nix 打包注册与指令配置解析。

---

## 2. 版本发布

过去 24 小时无新 Release。

---

## 3. 社区热点 Issues（10 条）

1. **#18016 [OPEN] 无法删除 zen 账户，持续被扣费**（评论 10 / 👍 9）
   用户称 zen 账户无法删除、持续计费且邮件联系无回应。这是本批次中情绪最强烈、点赞最高的 Issue，涉及计费与账户生命周期，直接影响用户信任，建议优先响应。
   https://github.com/anomalyco/opencode/issues/18016

2. **#49389 [OPEN] [FEATURE] 五个核心已有但插件无法触达的会话能力**（评论 9 / 👍 4）
   作者系统梳理了插件 API 在会话写入侧的缺口，并明确区分了 #43517、#40863 等相邻提案。这是插件生态扩展性的关键讨论，对第三方集成方意义重大。
   https://github.com/anomalyco/opencode/issues/49389

3. **#50296 [OPEN] core: 指令初始化被不可用来源阻塞（Maximum call stack size exceeded）**（评论 6 / 👍 3）
   每次会话启动都因 `Instructions.InitializationBlocked` 报错而失败，根因是栈溢出。属于阻断级缺陷，影响面为全体用户。
   https://github.com/anomalyco/opencode/issues/50296

4. **#52042 [OPEN] session: provider 拒绝图片后会话被“锁死”，仅有通用 400 错误且无恢复路径**（评论 5）
   自定义 OpenAI 兼容 provider 拒绝图片输入后，后续每个请求都会重放该图片与完整历史并持续失败。缺少错误恢复路径，属于体验与健壮性双重问题，且是当日新报。
   https://github.com/anomalyco/opencode/issues/52042

5. **#50924 [OPEN] cli: `upgrade --method curl` 在 Windows 上失败（反斜杠路径被传给 bash）**（评论 8）
   Windows 路径 `C:\Users\...` 被 bash 解析时反斜杠被破坏。Windows 升级链路问题在本期反复出现，需系统排查。
   https://github.com/anomalyco/opencode/issues/50924

6. **#30533 [OPEN] OpenAI 授权失败**（评论 7 / 👍 1）
   desktop 端连接 OpenAI provider 的授权流程走不通，用户提供了复现步骤与版本号（v1.15.12）。认证链路问题长期未闭合。
   https://github.com/anomalyco/opencode/issues/30533

7. **#45223 [OPEN] OpenAI 兼容 provider 在需要 `max_completion_tokens` 时失败**（评论 4）
   通用 openai-chat 协议恒发 `max_tokens`，导致部分部署直接拒绝请求。对兼容层的健壮性有普遍影响。
   https://github.com/anomalyco/opencode/issues/45223

8. **#48974 [OPEN] tui: 会话选择器只显示全项目最近更新的 50 条会话**（评论 4）
   接口无参数拉取全局 50 条后在客户端按当前目录过滤，多项目场景下会漏掉目标项目的历史会话。影响高频使用者的日常效率。
   https://github.com/anomalyco/opencode/issues/48974

9. **#51818 [OPEN] 压缩会把 reasoning 文本留在 `recent` 中，可能使上下文比压缩前更大**（评论 3）
   自动压缩写入 `recent` 时完整保留所有 reasoning 块，与压缩目的相悖。属于上下文管理的设计级问题。
   https://github.com/anomalyco/opencode/issues/51818

10. **#46095 [OPEN] [2.0] plugins: Windows 上首次导入瞬时失败会永久污染插件解析**（评论 3）
    配置监听器触发的加载与文件写入竞争，失败结果被缓存至进程结束。对 Windows 插件开发者影响显著。
    https://github.com/anomalyco/opencode/issues/46095

其他值得留意的已关闭项：#52078（desktop v2 中 xai 提供商不再出现在连接列表）、#51982（zh/zht 本地化术语错误）、#52079（`/btw` 追问线程）、#19405（`<system-reminder>` 泄漏进用户消息）。

---

## 4. 重要 PR 进展（10 条）

1. **#48076 [OPEN] fix(mcp): 复用 OAuth 客户端注册**（关闭 #44700）
   在重新认证时复用已存储的 OAuth 客户端注册与 token，改善 MCP 认证体验。
   https://github.com/anomalyco/opencode/pull/48076

2. **#51422 [OPEN] fix(core): 解析已配置的 instructions**（关闭 #51341、#51262）
   v2 保留了 `instructions` 配置字段却未实际生效，该 PR 补齐解析逻辑，可能直接缓解 #50296 相关的指令初始化问题。
   https://github.com/anomalyco/opencode/pull/51422

3. **#52090 [OPEN] fix(core): 在不落盘的情况下投递实时日志事件**（关联 #42839）
   针对 9 月 24 日实时跟随（live-follow）报告的修复；作者明确说明不包含原始 Issue 请求的 CLI 持久化选项。
   https://github.com/anomalyco/opencode/pull/52090

4. **#50304 [OPEN] fix(opencode): 加载导入 .txt 描述文件的自定义工具**（关闭 #48112）
   `.opencode/tool/*.ts` 中引用 `.txt` 描述的自定义工具此前无法加载。
   https://github.com/anomalyco/opencode/pull/50304

5. **#51891 [OPEN] fix(nix): 修复 v2 分支上的三处打包缺陷**（关闭 #50408）
   三处缺陷各自均为致命问题，涉及 v2 的 Nix 打包链路。
   https://github.com/anomalyco/opencode/pull/51891

6. **#52091 [OPEN] fix(ai): 为扁平协议展平命名空间的 choices**（关闭 #52088）
   处理扁平 provider 请求中 `crm_lookup` 等命名空间字段与强制嵌套结构之间的冲突。
   https://github.com/anomalyco/opencode/pull/52091

7. **#51971 [OPEN] fix(ci): 为非默认 base 的 PR 识别关闭关键字**（修复 #51970）
   `pr-standards` 此前会对所有目标为非默认 base 的 PR 打标，该 PR 修正自动标签逻辑。
   https://github.com/anomalyco/opencode/pull/51971

8. **#52087 [OPEN] fix(ui): 渲染 `$..$` 与同行 `$$..$$` 数学公式**（关闭 #51725）
   katex 扩展仅识别 `\(...\)` 与换行分隔的 `$$` 块，而 LLM 输出多为 `$..$`；该版本补充美元定界符并处理货币符号误判。注：#51989 为同一修复的已关闭版本。
   https://github.com/anomalyco/opencode/pull/52087

9. **#51854 [OPEN] fix(tui): 无播放设备时跳过音频初始化**（关闭 #41763）
   解决 Linux 无音频设备环境（Termux/Android、无声主机）下的初始化问题。
   https://github.com/anomalyco/opencode/pull/51854

10. **#46712 [OPEN] fix(desktop): Windows 上在项目目录打开 PowerShell**（关闭 #39851、#40045、#40277、#48799）
    修复“Open in → PowerShell”因 open-path 处理器导致的 `CommandNotFoundException`，一次性关闭 4 个相关 Issue。
    https://github.com/anomalyco/opencode/pull/46712

其他：#51918（拒绝而非记录未知的 `--variant` 提示变体）、#52086（在 open 菜单中输入精确 ID 打开子会话）、#47628（文档补充 llmman provider）、#52082（生态项目表新增 emulo）。

---

## 5. 功能需求趋势

- **插件 API 能力缺口**：#49389 集中反映了插件在会话写入侧的能力缺失，是本期最结构化的功能提案方向。
- **AGENTS.md / 贡献规范治理**：#52022 提出为 fix/chore/test 类 PR 明确关联 Issue 规则并收窄导入规则，与 #51971 的 CI 标签修复形成同一主题。
- **会话管理可视化**：#36609（隐藏启动屏，已关闭）、#48974（会话选择器范围）、#52079（`/btw` 追问，已关闭）显示用户对 TUI 交互细节诉求持续存在。
- **多语言本地化质量**：#51982（zh/zht 术语错误）表明大规模本地化合并后需要术语校对流程。
- **Provider 兼容层**：#45223、#52091、#30533 共同指向 OpenAI 兼容协议在真实部署中的适配需求。

---

## 6. 开发者关注点

- **Windows 平台问题成堆**：升级链路（#50924 curl、#51386 bun 报成功但未替换二进制）、插件解析污染（#46095）、desktop PowerShell 启动（#46712）四类问题并存，构成系统性平台短板。
- **计费与账户治理**：#18016 的账户无法删除与持续扣费问题获得最高点赞，属于信任级风险。
- **会话健壮性与恢复能力**：#52042（图片拒绝锁死）、#52015（空响应静默成功）、#51818（压缩反而增大上下文）、#50296（初始化栈溢出）共同说明会话生命周期缺乏失败兜底与恢复路径。
- **v2 迁移回归**：`instructions` 配置不生效（#51422）、xai provider 在 desktop v2 消失（#52078）、nix 打包缺陷（#51891）等集中在 v2 分支。
- **CLI 运行时配置暴露不足**：#42839 指出 `events.persist` 未通过 `opencode2 serve` 暴露，#52090 的修复也仅覆盖实时投递，未解决配置缺口。

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报（2026-09-29）

## 1. 今日速览

今天没有新版本发布，社区活跃度主要集中在 bug 修复与核心架构演进上：与推理模型（reasoning model）上下文管理相关的多个问题持续发酵，包括 compaction 失败、会话卡在上下文上限等。PR 侧动作频繁，mitsuhiko 主导的 Codemode/MCP、llama.cpp 托管服务模式、虚拟模型等多项重要功能同日更新，显示 Pi 正在向更完整的本地模型与扩展生态扩展。

## 2. 版本发布

过去 24 小时无新 release。

## 3. 社区热点 Issues

1. **[#10031 [OPEN] Pi 在 ESC 停止思考时偶发卡在 "Working..."](https://github.com/earendil-works/pi/issues/10031)**
   评论 17 条、👍 2，是今日讨论最热的问题。用户反馈已持续约一个月，唯一恢复方式是 `Ctrl+C` 退出后 `pi -c` 恢复，属于影响日常可用性的阻塞级 bug。

2. **[#10033 [CLOSED] Compaction prompt 包含全部 thinking 文本，导致超出上下文窗口](https://github.com/earendil-works/pi/issues/10033)**
   `serializeConversation()` 将每个 thinking block 完整塞入，导致长会话 + 返回 thinking 的推理模型（DeepSeek V4.1 自托管）自动 compaction 永远失败。对本地推理模型用户影响直接。

3. **[#9508 [OPEN] pi-ai 向兼容 provider 发送 OpenAI 专有字段/角色/鉴权头](https://github.com/earendil-works/pi/issues/9508)**
   导致本可正常工作的 OpenAI 兼容 provider 返回 400/422。兼容层问题波及面广，是生态扩展的关键障碍。

4. **[#9409 [OPEN] 推理模型会话在上下文上限永久卡死](https://github.com/earendil-works/pi/issues/9409)**
   每次请求返回 `stopReason: "length"`、`usage.output: 16`，auto-compaction 又报错无法恢复，属会话级死锁，与 #10033 同源。

5. **[#10154 [OPEN] 中文 `**bold**` 在特定标点后仍渲染为字面量（0.87.1 仍存在，回归 #3353）](https://github.com/earendil-works/pi/issues/10154)**
   closing `**` 紧邻 CJK 全角标点（。：，！？）时失效。老问题 #3353 已关闭但实际未修复，中文用户体验受损。

6. **[#10074 [OPEN] Anthropic 工具调用中非 ASCII 编辑参数静默损坏](https://github.com/earendil-works/pi/issues/10074)**
   `\uXXXX` 丢 `u` 变成 `\b`/`\f` 控制字符，韩文文件编辑频繁失败甚至损坏文件，且被静默接受，风险较高。

7. **[#9962 [OPEN] registerNativeProvider 与启动刷新竞争，模型解析自过期快照](https://github.com/earendil-works/pi/issues/9962)**
   扩展注册自定义 provider + OAuth 后间歇性报 "No models available"，影响扩展开发者。

8. **[#9974 [CLOSED] Pi 误处理 llama.cpp 返回的 Responses API tool calls，执行重复且损坏的调用](https://github.com/earendil-works/pi/issues/9974)**
   本地 llama.cpp 用户的工具调用可靠性问题，已关闭。

9. **[#10144 [OPEN] 排队 prompt 逐条发送而非批量](https://github.com/earendil-works/pi/issues/10144)**
   用户手动重新提交（此前 AI 生成的 #10046 被判 no-action），反映排队消息交互体验问题。

10. **[#10166 [CLOSED] SessionManager append 失败后内存推进，后续 JSONL 留下缺失 parent](https://github.com/earendil-works/pi/issues/10166)**
    注入 `EBUSY` 后失败条目留在内存但不在磁盘，破坏 transcript 一致性，属数据持久化隐患。

其他值得留意：#9817（扩展无法解析使用 `main`/`exports` 的 npm 包）、#10077（llama.cpp 的 contextWindow 被重置为 128000）、#9828（全屏退出时 scrollback 损坏）、#10147（建议将 /scoped-models 并入 /model）、#6393（请求允许禁用 `/share` 以防敏感数据泄露）。

## 4. 重要 PR 进展

1. **[#10122 [OPEN] feat(coding-agent): 新增托管 llama.cpp server 模式](https://github.com/earendil-works/pi/pull/10122)**
   `/login llama.cpp` 可让 Pi 自行启动 llama-server：分离式 supervisor 在随机本地端口 + 随机 API key 运行 router，并通过本地 socket 统计连接的 Pi 进程数。

2. **[#10040 [CLOSED] feat(coding-agent): Codemode 与 MCP](https://github.com/earendil-works/pi/pull/10040)**
   新增 codemode（在 worker 内的 QuickJS wasm VM 运行模型生成的 JS，可调用 Pi 工具、使用 per-session store）及 MCP 支持，是扩展能力的重要跃升。

3. **[#10159 [CLOSED] refactor(coding-agent): 内置扩展解析为 `builtin:<name>` 路径](https://github.com/earendil-works/pi/pull/10159)**
   内置扩展（mcp、llama.cpp、codemode、tool-search）现可通过 `pi config` 全局或按项目禁用。

4. **[#10035 [CLOSED] feat(coding-agent): 虚拟模型](https://github.com/earendil-works/pi/pull/10035)**
   实验性支持，扩展可通过 `pi.registerVirtualModel()` 注册目录条目，每次请求自行挑选物理模型与 thinking 等级。

5. **[#10158 [CLOSED] fix(llama): reload 时保留缓存上下文](https://github.com/earendil-works/pi/pull/10158)**
   修复 #10077：此前重建模型目录时丢失 `meta.n_ctx` 并回退到 `n_ctx_train`，覆盖了缓存的运行时上下文窗口。

6. **[#10156 [CLOSED] feat(coding-agent): 可配置滚轮滚动](https://github.com/earendil-works/pi/pull/10156)**
   全屏模式下可配置 normal / alt 滚轮行为，支持 `/settings` 预设或 `settings.json` 自定义，修复 #9758。

7. **[#9714 [OPEN] feat(ai): 支持 Azure Foundry Chat Completions 部署](https://github.com/earendil-works/pi/pull/9714)**
   Azure provider 此前仅实现 Responses API，补齐 Chat Completions 以支持 DeepSeek V4 Pro 等 Foundry 部署，关闭 #9645。

8. **[#10142 [OPEN] fix(ai): 在 Bedrock Converse 上向 OpenAI 模型发送 reasoning effort](https://github.com/earendil-works/pi/pull/10142)**
   此前 Bedrock Converse adapter 只对 Claude 发送 thinking 字段，OpenAI 模型在 Bedrock 上始终以默认 `medium` 运行。

9. **[#10165 [OPEN] fix(coding-agent): 跟踪被丢弃的用户 bash 输出](https://github.com/earendil-works/pi/pull/10165)**
   用户 `!` 命令丢弃早期分块却报 `truncated: false`，模型收不到截断提示或完整日志路径，此 PR 修复并关闭 #10164。

10. **[#10146 [OPEN] fix(coding-agent): 编辑器恢复时保留粘贴文本](https://github.com/earendil-works/pi/pull/10146)**
    将排队消息恢复到含大段粘贴的草稿时，Pi 会提交字面量 `[paste #x +y lines]` 而非实际内容，0.87.1 上可复现。

其他并入视线的修复：#10135（规范化 compaction usage，避免 resume 时 footer 崩溃）、#10136（粘贴 Finder 文件路径而非图标）、#10163（修正 find 工具的 `directoryOnly` 参数与测试）、#9137（Nix flake，WIP）、#10150（文档新增 Footer 章节）。

## 5. 功能需求趋势

- **本地模型支持深化**：llama.cpp 相关话题密集（托管 server 模式 #10122、缓存上下文修复 #10158、contextWindow 重置 #10077、Responses API tool call 处理 #9974），显示本地推理是重点投入方向。
- **推理模型上下文管理**：#10033、#9409、#10074 集中暴露 compaction、上下文上限与 thinking 处理问题，是当前最紧迫的技术债。
- **扩展与自定义生态**：npm 包解析（#9817）、native provider 竞态（#9962）、内置扩展可禁用（#10159），社区在推动更强的可扩展性。
- **Provider 兼容与覆盖**：OpenAI 兼容层（#9508）、Azure Foundry（#9714）、Bedrock Converse（#10142）反映出多 provider 适配需求。
- **TUI/交互体验**：隐藏工具行（#10011）、滚轮滚动（#10156）、全屏 scrollback 损坏（#9828）、`/scoped-models` 合并（#10147）等，反映终端 UI 打磨诉求。
- **国际化渲染**：CJK 粗体渲染（#3353、#10154）是长期反复出现的方向。

## 6. 开发者关注点

- **卡死与会话不可恢复**：ESC 停止卡在 "Working..."（#10031）与上下文上限死锁（#9409）是最影响可用性的痛点，均缺乏优雅恢复路径。
- **推理模型 + 自托管体验差**：compaction 失败（#10033）、非 ASCII 参数损坏（#10074）、contextWindow 被覆盖（#10077）让本地/推理模型用户频繁重试。
- **兼容层一致性**：向 OpenAI 兼容 provider 发送不兼容字段（#9508）导致大量 400/422，扩展开发者直接受阻。
- **数据一致性隐患**：SessionManager 失败后内存与 JSONL 不一致（#10166）涉及 transcript 可信度。
- **交互细节回归**：排队消息逐条发送（#10144）、粘贴标记误提交（#10146）、CJK 渲染（#10154）等小问题累积影响日常体验。
- **隐私与安全**：`/share` 难以禁用（#6393）引发敏感数据泄露担忧。

---
*本日报仅基于所提供 GitHub 数据整理，未补充外部信息。*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报（2026-09-29）

## 今日速览

今天最值得关注的是 Managed Agent / Hosted Workspace 架构线的密集推进：从 Issue #12380 的双路径架构提案，到 #12945 的 Hosted 延迟基线测试、#12998 的任务事件与取消语义、#12946 的私有 Hosted MCP 运行时，一整套「服务端托管 Agent」基础设施正在成形。与此同时，围绕 #12028「非对话上下文 token 治理」的伞形议题仍在持续产出（工具 schema 大小追踪、系统提示词精简、缓存保持等），是当前社区讨论最密集的工程主线。发布方面仅有一个小版本 v0.24.7，主要为测试补齐与 MCP 修复。

---

## 版本发布

### v0.24.7

- **test(cli)**: 补齐 managed-context/1 遗留的 fixture 缺口（#12712，@wenshao）
- **fix(mcp)**: 修复从 header 发现流程中保留注册 URL 的问题

链接：https://github.com/QwenLM/qwen-code/releases

---

## 社区热点 Issues

**1. #12380 [OPEN] proposal(serve): 定义 Managed Agent 双路径架构与分阶段交付**（评论 37，👍0）
今天评论数最高的议题。核心提议是保留现有 TypeScript agent loop，同时让模型推理与工具环境供给解耦，并赋予 Session 持久化的所有权与 Workspace 边界。这是整个 Managed Agent 路线图的顶层设计文档，后续多个 PR（#12945/#12998/#12868/#12946）都在其框架下推进，值得跟踪者优先阅读。
https://github.com/QwenLM/qwen-code/issues/12380

**2. #12028 [OPEN] tracking(core): 非对话上下文 token 治理**（评论 14，👍0）
「伞形议题」：系统提示词、内置工具 schema、`QWEN.md`、skill 列表在每次请求都要发送并计费，在长上下文模型上这块很容易超过对话本身。今天大量子议题（#12054、#12326、#12333、#12781、#13003）都挂在它下面，是当前最成体系的性能工作线。
https://github.com/QwenLM/qwen-code/issues/12028

**3. #12947 [OPEN] 跟踪结构化 Auto Memory 在 main 上的上线就绪度**（评论 8，👍0）
结构化自动记忆的收尾跟踪器，聚焦正确性、有效性与验证三方面的剩余工作，是 #10151 的记忆专项关账议题。记忆子系统能否推广，取决于这里的结论。
https://github.com/QwenLM/qwen-code/issues/12947

**4. #12326 [OPEN] 内置工具集是手工维护的静态列表——能否让程序来选择，同时不破坏 prompt 前缀**（评论 7，👍0）
与 #12028 同源，聚焦「谁来决定常驻工具集」。要点是引入选择机制但**不能破坏 prompt 缓存前缀**。当前处于 blocked 状态，依赖新增的测量标尺（#12119 已落地）。
https://github.com/QwenLM/qwen-code/issues/12326

**5. #12054 [CLOSED] 内置工具描述与 schema 是最大块非对话上下文，且无大小追踪**（评论 7，👍0）
给出了量化数据：在 1M 上下文模型中，内置工具是占比最大的类别。今天已关闭，说明该项已被纳入治理并有落地路径，可作为 token 优化的关键背景数据。
https://github.com/QwenLM/qwen-code/issues/12054

**6. #12333 [OPEN] token 工作缺少召回率/任务成功率门禁——让现有 benchmark 能对比两种配置**（评论 6，👍0）
被作者称为「没有 owner 的验收标准」：所有 token 优化只测省了多少，没人测工具召回或任务成功率的代价。这是性能优化能否安全推行的关键基础设施，目前 blocked。
https://github.com/QwenLM/qwen-code/issues/12333

**7. #12970 [OPEN] invalid_tool_params 失败被误判为 max_tokens 截断，多调用轮次中失败调用不再执行**（评论 5，👍0，09-29 新建）
今天新建的高价值 bug：即便同一轮 `usageMetadata` 证明未被截断，工具参数错误仍会被套上「响应被 max_tokens 截断」的说明，且多调用轮次中失败的调用不再继续执行。直接影响可靠性诊断与用户排查体验，已有对应修复 PR #12982。
https://github.com/QwenLM/qwen-code/issues/12970

**8. #13003 [OPEN] perf(memory): 在已交付唯一强召回命中后跳过 selector**（评论 4，👍0，09-29 新建）
记忆召回的性能优化：当确定性快速召回已命中唯一稳定匹配时，跳过模型 selector，降低延迟。这是长上下文 + 记忆方向上的典型「省一次模型调用」思路。
https://github.com/QwenLM/qwen-code/issues/13003

**9. #12781 [OPEN] 系统提示词精简——三轮已完成、外部对比与下一步方向**（评论 4，👍0）
记录主会话系统提示词已完成三轮实测精简，并与 Claude 做了对比。这是 #12028 下最有产出的子项之一，可直接指导后续精简方向。
https://github.com/QwenLM/qwen-code/issues/12781

**10. #11550 [OPEN] qwen code 在写入记忆时触发 prompt 重新处理**（评论 4，👍1）
唯一获得点赞的议题，且已持续近三周仍在 blocked：记忆写入导致 prompt 缓存失效、整段重新处理。这是缓存 + 记忆交叉领域的高频痛点，社区关注度明显。
https://github.com/QwenLM/qwen-code/issues/11550

（次选关注：#12973 Code Mode 懒加载后续修复、#12853 记忆审查技术债清算、#11471 auto-memory 缺少频率门控、#8998 召回初始轮预算验证。）

---

## 重要 PR 进展

**1. #12945 [OPEN] test(managed-agent): 记录 Hosted 延迟基线**（@wenshao）
用打包 Harness、Spring SQL Session Store 和真实本地进程 Runtime Broker/worker 建立可复现的 Hosted 延迟基线，两个全新 Workspace 将 worker 启动延迟 15 秒。为托管 Agent 的性能评估提供基准。
https://github.com/QwenLM/qwen-code/pull/12945

**2. #13020 [OPEN] fix(core): 暴露延迟工具规则、以受审 schema 门控 tool_call、为 skill 列表做预算**（@yiliang114）
模型加载延迟工具前只能看到描述首行。本 PR 把 `monitor` 与 `lsp` 的选择规则移入首行，并用受审 schema 门控工具调用、给 skill 列表加预算——直接呼应 #12028 的 token 治理。
https://github.com/QwenLM/qwen-code/pull/13020

**3. #12998 [OPEN] fix(managed-agent): 敲定任务事件与取消语义**（@wenshao）
在任务事件与取消路由可用前，先敲定 #12847 的 A1–A8。Contract v1.22.0 定义了即使无事件剩余也存在的持久保留下限，并发布带稳定游标标识的已提交前缀。
https://github.com/QwenLM/qwen-code/pull/12998

**4. #12946 [OPEN] feat(managed-agent): 实现私有 Hosted MCP 运行时（H1）**（@wenshao）
新增 `hosted-workspace-mcp/1` 私有 profile（Stage H1）及 Hosted → Broker → Runtime 前置接线。Runtime 持有 stdio、Streamable HTTP 与 SSE 连接及凭据，模型仅收到投影信息——托管环境安全边界的关键一环。
https://github.com/QwenLM/qwen-code/pull/12946

**5. #12868 [OPEN] feat(serve): 实现通用 Broker provider 控制**（@wenshao）
把 Broker provider 接入版本化 worker 契约，覆盖 manifest、轮次准备、工具准备、审批、预检与文件历史；每次 provider 调用保留持久化的七字段引用。
https://github.com/QwenLM/qwen-code/pull/12868

**6. #12582 [OPEN] feat(agents): 新增远程 Qwen、Codex 和 Claude 运行时**（@yiliang114）
在 #12851 的 A2A 层之上增加远程执行运行时：单次注册令牌加入、可撤销 Host 凭据、对外公布已安装程序、从协调方租用工作。跨模型远程执行能力的重要扩展。
https://github.com/QwenLM/qwen-code/pull/12582

**7. #12982 [OPEN] fix(core): 停止把畸形工具调用参数误判为 max_tokens 截断**（@yiliang114）
当 provider 流式输出拼接错误或畸形的工具参数时，流式解析器将 JSON 标记为不完整，OpenAI 转换器却无条件改写为截断说明。本 PR 修正该误诊断，对应 Issue #12970。
https://github.com/QwenLM/qwen-code/pull/12982

**8. #12891 [OPEN] feat(memory): 为主 CLI 打包 Mem0**（@yiliang114）
为 Qwen Code CLI 增加可选接入 Mem0 的能力：通过 `memory.mem0` 配置 endpoint 与 `envKey`，凭据放在顶层 settings 的 `env` 字段，与模型 provider 的配置方式保持一致。
https://github.com/QwenLM/qwen-code/pull/12891

**9. #13021 [OPEN] fix(cli): 补全建议加载中不再吞掉 Enter 键（#13015）**（@qwen-code-dev-bot）
修复交互式输入框的丢键 bug：补全下拉仍显示「Loading suggestions…」空列表时按 Enter，会被接受建议分支吞掉。典型的高频交互体验修复。
https://github.com/QwenLM/qwen-code/pull/13021

**10. #12953 [OPEN] fix(cli): 在全部出口面清理 aux-model 凭据并持久化 tombstone**（@shleder，解决 #12856）
对辅助模型选择器（`visionModel`、`imageModel`、`advisorModel`、`fastModel`、`compactionModel`）在所有公开出口面做全面脱敏。安全相关，值得优先关注。
https://github.com/QwenLM/qwen-code/pull/12953

（另可关注：#13013 在 E2E harness 中默认关闭 managed auto-memory、#12977 托管 Workspace 运维恢复流程、#12987 已关闭的跨目录工具调用权限修复、#12650 CI yamllint 回退加固。）

---

## 功能需求趋势

从今日 50 条 Issue 与 50 条 PR 的标签分布看，社区关注方向高度集中在以下几点：

**1. 上下文与 Token 治理（第一主线）**
`scope/token-management`、`roadmap/context-performance`、`model/long-context` 是出现频率最高的标签组合。#12028 伞形议题下已形成完整子体系：工具 schema 大小追踪（#12054）、常驻工具集选择（#12326）、系统提示词精简（#12781）、缓存保持（#11321）、召回/成功率门禁（#12333）。这是当前投入最密集的工程方向。

**2. 记忆子系统（memory）**
从结构化 Auto Memory 上线就绪度（#12947）、写入时的 prompt 重处理（#11550）、selector 跳过优化（#13003）、频率门控（#11471）到打包 Mem0（#12891），记忆相关的正确性、性能、外部集成三线并行。

**3. Managed Agent / 托管运行时（增长最快）**
`scope/web-shell`、`daemon`、`roadmap/multi-agent`、`roadmap/platform-distribution` 标签密集出现在 #12380 及配套 PR 中。涉及架构分层、延迟基线、任务事件与取消语义、Broker 契约、Hosted MCP 运行时、远程多模型运行时（Codex/Claude/Qwen）。

**4. 多 Agent 与远程执行**
远程运行时（#12582）、本地 workspace-agent 协作（#11206）、general-purpose 子代理的工具可见性问题（#12809）显示多 Agent 从设计走向落地。

**5. 性能与延迟**
`category/performance`、`scope/latency`、`scope/caching` 相关议题持续活跃，核心诉求是「不破坏缓存的优化」。

**6. 安全与凭据管理**
辅助模型凭据脱敏（#12953）、Hosted 环境私有 MCP（#12946）表明随着托管形态出现，凭据与出口面治理权重上升。

---

## 开发者关注点

**1. 缓存失效与重复处理是最强痛点**
#11550（记忆写入导致 prompt 重新处理）是今日唯一获赞的议题，且已 blocked 三周；#11321（deferred tools 保持 prompt 缓存）同样长期挂起；#12326 明确要求「不破坏 prompt 前缀」。开发者反复强调：token 优化不能以牺牲缓存为代价。

**2. 缺少「代价侧」度量，优化缺乏安全网**
#12333 直言 token 工作只有节省指标、没有召回率与任务成功率门禁，且该验收标准「没有 owner」。这是社区对当前优化方法论最集中的质疑。

**3. 错误诊断信息误导排查**
#12970 反映 `invalid_tool_params` 被统一误报为 `max_tokens` 截断，即使 `usageMetadata` 已证明未截断；且多调用轮次中失败调用不再执行。此类「错误信息与事实不符」的问题对开发者日常调试体验影响直接。相关的 #11814（tools.disabled 后 schema 仍发送）也是同类「配置与行为不一致」。

**4. 配置与行为不一致**
#12760（多 API Key 下的模型选择问题，已关闭）、#11814（禁用工具后 schema 仍发送）反映多 provider / 多凭据场景下的配置语义仍有模糊地带。

**5. 长期挂起的技术债**
多个 `status/on-hold`、`status/blocked` 议题（#11321、#12326、#12333、#11550、#8998）显示：测量基础设施、缓存保持、召回预算验证这几类「不直观但关键」的工作容易被延后，而它们恰是后续优化的前置条件。

**6. 代码质量与一致性**
#12038（`<task-notification>` 信封有 7 份未同步的 emitter 拷贝、3 份 matcher 拷贝且无真实 emitter 测试）、#12853 与 #12235（超五轮审查后的非阻塞债务外移）显示项目在加速交付的同时也在清算结构性问题。

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI 社区动态日报（2026-09-29）

> 数据来源：github.com/Hmbown/DeepSeek-TUI（仓库实际指向 Hmbown/Codewhale）

## 1. 今日速览

今日无新版本发布，过去 24 小时内社区更新集中在 26 条 Issue 与 50 条 PR 上。0.10.0 引入的多项回归问题持续发酵——Windows Terminal 多行粘贴逐行自提交（#6427）与 CPU 占用随版本递增的回归（#6728）成为新的质量焦点。同时，维护者密集提交了一批 bug-hunt 修复 PR（#6750–#6760），覆盖工具参数边界、shell 生命周期、审批回执持久化等底层稳定性问题。

## 2. 版本发布

无（过去 24 小时无新 Release）。

## 3. 社区热点 Issues

1. **[#5316] EPIC-005: CodeWhale TUI Crate Decomposition（Umbrella）** — 评论 29 条，本日最活跃。TUI crate 拆分总纲，涉及 FEAT-029 的 CI 跟进，PR #6707 处于 draft 状态等待校验。链接：Hmbown/Codewhale Issue #5316
2. **[#6427] 0.10.0 回归：Windows Terminal 多行粘贴逐行自提交（#5981 再次失效）** — 直接影响 Windows 用户核心输入体验，是被标记为"再次破坏"的回归。链接：Hmbown/Codewhale Issue #6427
3. **[#6728] CPU 占用回归：v0.9.12（空闲）→ v0.9.13（中等）→ v0.10.0（严重）** — FreeBSD 用户通过三个版本二进制对比给出可复现证据，性能问题首次被量化。链接：Hmbown/Codewhale Issue #6728
4. **[#6573] 多 TUI 会话争抢 Subagents Store 导致 CPU 空转** — 与 #6728 形成性能问题集群，跨平台可能性高。链接：Hmbown/Codewhale Issue #6573
5. **[#6699] SSE 响应头未到达时不重试、直接终止会话** — 已关闭，暴露网络错误处理层不一致。链接：Hmbown/Codewhale Issue #6699
6. **[#6700] 暴露流重试预算与传输超时配置** — 与 #6699 配套，代理/不稳定网络用户无法调参，只能接受编译期常量。链接：Hmbown/Codewhale Issue #6700
7. **[#6379] 2026-09-21 安全与依赖扫描** — 因 `GITHUB_CODEWHALE_SECURITY_PAT` 未配置导致 CodeQL 告警无法列出，安全流程本身存在缺口。链接：Hmbown/Codewhale Issue #6379
8. **[#6745] Windows：机器级 ExecutionPolicy 下 shell 工具失败** — 提案使用进程级 `-ExecutionPolicy Bypass`，涉及企业环境可用性。链接：Hmbown/Codewhale Issue #6745
9. **[#6582] hooks：为 shell tool_call_after 提供结构化执行回执** — 外部插件 MemoryWhale 依赖此能力记录实际执行的 shell 命令。链接：Hmbown/Codewhale Issue #6582
10. **[#6747] 面向模型的文本仍提及当前环境不存在的工具（7 处残留）** — 跨 fork 修复未完全上游化，可能导致模型调用失败。链接：Hmbown/Codewhale Issue #6747

## 4. 重要 PR 进展

1. **[#6713] feat(hooks): 向 tool_call_after 导出准入后执行回执** — 已关闭，Closes #6689；采用环境变量而非 stdin JSON，故 #6582 仍开放。链接：Hmbown/Codewhale PR #6713
2. **[#6750] fix(core): 保留文本工具参数边界** — 修复含 Unicode 或花括号的旧式文本工具调用可能导致 panic 或 JSON 截断的问题。链接：Hmbown/Codewhale PR #6750
3. **[#6759] fix(tools): shell 作业保留、输出增量与子进程生命周期** — 来自 bug-hunt 通道，含两次提交（原始修复 + 评审跟进）。链接：Hmbown/Codewhale PR #6759
4. **[#6754] fix(fleet): SSH 目标校验、实时墙钟限制、策略提示投递等** — fleet 主机/管理器/存储多层修复。链接：Hmbown/Codewhale PR #6754
5. **[#6760] fix(receipts): 恢复被中断的追加尾部而不复活旧审批** — 防止会话或检查点加载失败。链接：Hmbown/Codewhale PR #6760
6. **[#6758] fix(execpolicy): 区分 shell 语法与精确授权数据** — 依赖 #6732，需先落地该 PR。链接：Hmbown/Codewhale PR #6758
7. **[#6755] fix(tui): 审批对话框需明确输入** — 默认从 Abort 开始，忽略打开前的陈旧输入，避免误授权。链接：Hmbown/Codewhale PR #6755
8. **[#6757] fix(tools): 在读取与编辑前限制文件原语处理** — 修复小写 read/write/edit 原语先全量加载文件再应用限制的问题。链接：Hmbown/Codewhale PR #6757
9. **[#6707] refactor(commands): 使整个 debug 组可移植（FEAT-029）** — 已合并最新 main，保留贡献者历史，是 crate 拆分总纲的关键一环。链接：Hmbown/Codewhale PR #6707
10. **[#6761] feat(providers): 新增 Cheaper Inference 捆绑描述符行** — 不新增 ProviderKind，沿用 #6616/#6695 的 OpenAI 兼容模式，反映第三方网关接入的标准化路径。链接：Hmbown/Codewhale PR #6761

## 5. 功能需求趋势

- **多提供商/网关接入标准化**：Tsubasa（#6695）、Cheaper Inference（#6761）均通过已有兼容传输层加描述符行的方式接入，避免新增传输实现。
- **网络韧性可配置化**：流重试预算、传输超时可配置（#6700）、SSE 建连失败重试（#6699）、搜索后端 DuckDuckGo 不可达时的尾链兜底（#6746）构成一组网络健壮性需求。
- **Hooks 生态与外部集成**：工具执行回执（#6582、#6689、PR #6713）服务于 MemoryWhale 等外部插件，显示 hooks 正在成为第三方扩展接口。
- **TUI 交互与状态可见性**：代理在线状态芯片、侧边会话、活动回执流（#6322），以及跨界面一致的确定性"代码鲸"音视觉形象（#6109）。
- **架构可移植性**：CodeWhale TUI crate 拆分（#5316 / FEAT-029）与 debug 命令组可移植化（#6706），属于长期结构性工程。

## 6. 开发者关注点

- **稳定性回归是首要痛点**：0.10.0 被反复指认为回归源头，涵盖输入（#6427）、性能（#6728）、CPU 空转（#6573）、渲染背景异常（#6704），用户已开始提供跨版本二进制对比的量化证据。
- **Windows 平台适配薄弱**：多行粘贴与 PowerShell ExecutionPolicy（#6745）两类问题都集中在 Windows 企业环境。
- **配置面缺失**：网络容错参数以 `const` 硬编码（#6700），运维人员无调优手段。
- **错误信息可诊断性差**：如 #6435 抛出 `operation binding shell:xxx is not registered` 这类内部标识符且无解释，且与既有守护逻辑承诺的行为矛盾。
- **跨 fork 修复上游化不完整**：#6747 显示面向模型文本的工具名修正仍有 7 处残留，协作同步存在损耗。
- **安全流程自身受阻**：#6379 因 PAT 未配置导致 CodeQL 告警无法列出，夜间扫描形同虚设。

</details>

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar) 自动生成。*