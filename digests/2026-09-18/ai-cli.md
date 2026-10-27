# AI CLI 工具社区动态日报 2026-09-18

> 生成时间: 2026-09-18 11:49 UTC | 覆盖工具: 9 个

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

# AI CLI 工具生态横向对比分析报告（2026-09-18）

## 1. 生态全景

当前 AI CLI 工具已从"功能竞赛"进入**稳定性与可观测性偿还期**：今日八款工具中仅 3 款发布新版本，而社区讨论高度集中在静默失败、权限语义、模型通道健壮性等基础问题上。**"配置被读取但不被遵守"成为跨工具的共性痛点**——Claude Code、Codex、Gemini CLI、Copilot CLI、Pi 均出现此类报告。与此同时，Windows 平台可用性在各工具中普遍落后于 macOS/Linux，成为最大的平台级短板。架构层面，多款工具（Codex、OpenCode、DeepSeek TUI）正在同步推进"回合边界状态隔离"与"MCP 栈收敛"两类重构，显示行业正从快速迭代转向结构性收敛。

---

## 2. 各工具活跃度对比

| 工具 | Issues 更新 | PR 更新 | Release | 当日最热议题 |
|---|---|---|---|---|
| **Claude Code** | 10+ 条（含 3 条补充） | 2 条 | v2.1.276（回归修复） | 多 Connector 账号 #27302（250 评论/381👍） |
| **OpenAI Codex** | 10+ 条 | 10 条（多为 CLOSED） | 6 个（1 个实质性：rust-v0.155.0） | 关闭 60 秒自动解析 #28969（88 评论/208👍） |
| **Gemini CLI** | 10 条 | 10 条（多条 P1 安全类） | v0.62.0-nightly | 子代理假成功 #22323（P1） |
| **GitHub Copilot CLI** | 10 条 | **0 条** | v1.0.86 | skills 子文件夹 #1632（24👍，已关闭） |
| **Kimi Code CLI** | 14 条（多数关闭） | 2 条 | 无 | macOS 2.0.0 粘贴图片回归 #2652 |
| **OpenCode** | 10+ 条 | 10 条 | 无 | 免费额度报错 #49433（34 评论） |
| **Pi** | 10+ 条 | 10 条 | 无 | Windows 体验征集 #7547（64 评论） |
| **DeepSeek TUI** | 10 条 | 5 条 | 无 | 引擎静默冻结 #6184 |

**关键观察**：Codex 与 Gemini CLI 的 PR 活跃度最高且以修复/安全为主；Copilot CLI 当日 PR 挂零但版本迭代最快；Claude Code 讨论集中度最高（单议题 381👍）。

---

## 3. 共同关注的功能方向

### ① 静默失败与静默降级（8/8 工具均已出现）
- **Claude Code**：`sandbox.excludedCommands`、`metadata.pluginRoot`、`permissions.ask` 的 `:*` 被静默忽略
- **Codex**：`default_permissions` 被丢弃（#46252）、API key 下浏览器控制静默不可用（#43410）
- **Gemini CLI**：Auto Memory 无效补丁静默跳过（#26523）
- **Copilot CLI**：会话恢复取消 MCP 连接（#4753）、`session_store_sql` 静默返回空（#2654）
- **Pi**：`PI_OFFLINE` 行为超文档范围（#8684）、非法 `--mode` 无告警（#9045）
- **OpenCode**：免费额度报错误伤（#49433/#49680）
- **DeepSeek TUI**：引擎冻结无日志（#6184）、MCP 死连接显示 "connected"（#6187）
- **Kimi CLI**：粘贴图片偶发无反应（#2652）

### ② MCP 协议层的正确性与稳健性（6 款工具）
| 工具 | 具体诉求 |
|---|---|
| Claude Code | int64 精度丢失（#78762，协议级隐患） |
| Codex | 线程级 STDIO MCP socket 累积（#38981） |
| Copilot CLI | Figma 远程 MCP 错误处理与 VS Code 不一致（#4870）；希望 `--disable-repo-mcps`（#3380） |
| Kimi CLI | MCP 断连容错（#1296，已关闭） |
| DeepSeek TUI | MCP 连接监督缺失、双栈并存需合并（#6187/#6142） |
| Gemini CLI | 工具数 >128 触发 400 错误（#24246） |

### ③ 权限/沙箱语义可预测性（5 款工具）
- **Claude Code**：点击穿透提交权限选项（#76743，安全语义问题）
- **Codex**：Windows 沙箱长期未收敛（#34013/#44783/#46114）
- **Gemini CLI**：Windows 沙箱 git 参数校验（#29184，已修复）
- **Copilot CLI**：希望禁止读取仓库自带 MCP 定义（#3380）
- **DeepSeek TUI**：多仓工作区写入在派发前被拒（#6232）

### ④ Windows 平台补齐（5 款工具）
Copilot CLI（PowerShell 强制、Ctrl+Backspace）、Codex（截图、浏览器、沙箱三重故障）、Pi（shellPath 非确定性、扩展加载）、DeepSeek TUI（MATE 终端闪烁）、Claude Code（焦点穿透、插件卸载死锁）。

### ⑤ 成本/用量可观测性（4 款工具）
- **OpenCode**：subagent 成本未计入（#45417，11👍）
- **Codex**：5 小时额度政策（#34035，164👍）
- **DeepSeek TUI**：按组件/按模型 token 账目（#6011）
- **Qwen Code**：非对话上下文 token 治理（#12028）

### ⑥ 破坏性行为的可控性（3 款工具）
- **Gemini CLI**：#29394 在调度层阻断变更类工具，解决用户 "wait" 被忽视的问题；源码永久丢失（#26767）
- **Codex**：目标目录外的写入触发无意义面板（PR #94847）
- **Gemini CLI/Pi**：agent 生成失控脚本（#23571）

---

## 4. 差异化定位分析

| 工具 | 功能侧重 | 目标用户 | 技术路线特征 |
|---|---|---|---|
| **Claude Code** | 企业级 Agent 编排、插件/marketplace、沙箱 | 专业开发者、企业团队 | 闭源客户端 + 丰富扩展体系；多账号/网关方向明确 |
| **OpenAI Codex** | 桌面端 Computer Use、多语言 TUI、语音 | ChatGPT 付费用户、Pro/Business | Rust 重写；强调回合边界状态隔离；OAuth 网关凭据 |
| **Gemini CLI** | 自主 Agent、AST 感知、bash 亲和 | Gemini 生态开发者 | 安全修复密集；探索 AST 工具与执行后意图路由 |
| **Copilot CLI** | GitHub 生态集成、仓库指令文件 | GitHub 用户、企业开发团队 | 与 VS Code 行为一致性为核心诉求；插件体系快速演进 |
| **Kimi CLI** | 多 provider 兼容、Desktop/CLI 一致 | Moonshot 用户、多模型使用者 | 作为多模型客户端；桌面端与 CLI 行为对齐 |
| **OpenCode** | Zen/Console 平台、插件化重构、subagent | 平台托管用户 | 核心架构解耦（compaction 下沉为插件）；插件生态扩张 |
| **Pi** | 本地 LLM、多 provider 覆盖、compaction 精修 | 自托管/本地推理用户 | 强调 provider 覆盖广度；thinking 生命周期管理 |
| **DeepSeek TUI** | Rust TUI、Fleet 子代理、外部记忆 | 性能敏感型开发者 | 0.9.14 大规模重构（MCP 双栈合并、config 单一权威） |
| **Qwen Code** | 长上下文治理、IDE/ACP 集成、Web Shell | 中文开发者、Zed 用户 | token 治理结构化；Goal 卡片投影阶梯式退役 |

**技术路线分歧点**：闭源+插件（Claude Code）vs. Rust 重写+回合隔离（Codex）vs. 核心解耦+插件化（OpenCode）vs. 本地优先+provider 广覆盖（Pi）。

---

## 5. 社区热度与成熟度

### 高活跃度 + 高成熟度（稳居中盘）
- **Claude Code**：单议题 381👍 显示用户基数与参与度最高；有明确版本节奏（v2.1.276 当日修复回归）；问题分类清晰、复现完整。
- **OpenAI Codex**：Issues 与 PR 双线活跃（10+10），`copyberry[bot]` 批量提交显示工程化程度高；回合边界重构系统性强。

### 高活跃度 + 快速迭代（重构期）
- **OpenCode**：Zen/Console 平台故障密集但社区粘性强；插件化重构（#49575）与生态 PR 并行推进。
- **Pi**：compaction/thinking 问题集群反映架构处于攻坚期；provider 覆盖迭代快，但目录 pin 常滞后。
- **DeepSeek TUI**：0.9.14 backlog 成批关闭，从快速迭代转向结构收敛阶段。

### 中活跃度 + 生态整合期
- **Gemini CLI**：安全 PR 密集（P1 占比高），但 Agent 可靠性问题（挂起、假成功）仍是中长期痛点。
- **Qwen Code**：CI/发布重试类 PR 占比高，显示正在系统性偿还基础设施债。

### 低活跃度或整合期
- **GitHub Copilot CLI**：当日 PR 挂零，但版本迭代最快（v1.0.86）；Issue 多为 CLOSED，可能处于维护整合期。
- **Kimi Code CLI**：14 条 Issue 中多数集中关闭，批量清理积压；新增 Open Issue 少，PR 仅 2 条。

**成熟度排序参考**（综合版本节奏、社区治理、问题闭合率）：Claude Code ≈ Codex > Copilot CLI > Gemini CLI > OpenCode > Qwen Code > Pi > DeepSeek TUI > Kimi CLI。

---

## 6. 值得关注的趋势信号

### 信号一：自动化行为需要"退出路径"
Codex #28969 以 208👍 请求关闭"60 秒自动解析"，Gemini #29394 在调度层阻断变更类工具——**用户反感不可配置的自动推进**。对开发者参考：任何带默认超时、默认重试、默认执行的交互，都应提供显式开关。

### 信号二：权限"静默降级"正在成为安全事件源
Claude Code 点击穿透提交权限、Codex `default_permissions` 被丢弃、Pi 非法参数被忽略——**权限配置的静默失效等价于非预期授权**。建议开发者在集成时主动校验权限配置是否生效，而非信任配置文件。

### 信号三：模型 id 生命周期管理成为新运维负担
DeepSeek TUI #6035 指出模型 id 被独立 pin 在六处，厂商下线旧 id 后 fleet 成员配置失效。**随模型迭代加速，"pin 一致性"将成为多 provider 客户端的标配需求**。

### 信号四：回合边界状态隔离成为工程共识
Codex 的 #46335/#46310/#46331/#46309 系列 PR 系统性确保"为下一回合的设置"不污染当前回合。**该模式值得所有 agent 框架参考**，尤其在支持运行中切换模型/环境的工具中。

### 信号五：reasoning/thinking 通道是新的故障高发区
Pi 的 compaction/thinking 集群（#9652/#9391/#9602/#9717）、OpenCode 的 encrypted_content 报错（#48741/#48973/#48805）、Qwen Code 的 reasoning 输出为空（#49673）——**推理通道的序列化、压缩与归属校验尚未成熟**，是 2026 下半年可预期的密集修复区。

### 信号六：本地 LLM 与代理环境是长尾刚需
Pi（本地 llama.cpp 上的 Qwen3.8）、Kimi CLI（企业代理环境代理失效 #1234）、Qwen Code（代理/TLS 拦截下 Batch API 失败 #12169）、OpenCode（本地模型超时放宽 #49602）——**企业网络与本地推理场景的端到端可用性仍普遍被忽视**，是差异化竞争的潜在切入点。

### 信号七：Fleet/子代理的计量与语义尚未对齐
OpenCode #45417（subagent 成本未计入）、DeepSeek TUI #5529（子代理三类失败）、Gemini #22323（子代理中断上报为成功）——**fan-out 工作流已进入生产使用，但成本计量与状态语义滞后**，是子代理框架的下一阶段核心课题。

---

**一句话总结**：今天的 AI CLI 生态不缺新功能，缺的是"出错时能说清楚、配置了能生效、计费了能对上"的基础确定性——谁能率先补齐这三项，谁就能在企业与高强度用户场景中取得信任优势。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告

> 数据来源：github.com/anthropics/skills（截止 2026-09-18）

---

## 1. 热门 Skills 排行

> 注：本次提供的 PR 数据中评论数字段均为 `undefined`，故按 Issue 讨论热度 + PR 更新活跃度综合排序。

| 排名 | Skill | 功能 | 讨论热点 | 状态 |
|---|---|---|---|---|
| 1 | **skill-creator 触发器修复** (PR #1769) | 修复 skill-creator 触发评估始终报告 `precision=100% recall=0%` 的问题 | 关联 Issue #556，触发检测失效导致描述调优基于错误证据 | OPEN |
| 2 | **mcp-builder 修复** (PR #1742, #1724) | 适配 `mcp>=2` 的 `streamable_http_client`、自定义 headers；更新默认评估模型 | 关联 Issue #1390，评估脚本对所有真实 MCP server 打 0 分 | OPEN |
| 3 | **document-typography** (PR #514) | 文档排版质量控制：孤行、孤段、编号错位 | 影响所有 AI 生成文档的通用质量痛点 | OPEN |
| 4 | **md2video-audio** (PR #1703) | 将 Markdown 直接编译为带拟真配音的 MP4 视频，零成本 | 文档→多媒体自动化，实用性高 | OPEN |
| 5 | **proofcore-contract-auditor** (PR #1771) | Solidity/Rust 智能合约静态分析 + 审计证明上链（TON） | Web3 细分场景 | OPEN |
| 6 | **scnet-hpc** (PR #1615) | 通过 SSH + Slurm 操作 SCNet HPC 集群 | 科研/高性能计算工作流 | OPEN |
| 7 | **Hivemind** (PR #1628) | 由 headless opencode 免费模型承担机械任务，Claude Code 保留规划/审查/合并 | 多智能体编排、成本优化 | OPEN |
| 8 | **pyxel** (PR #525) | Python 复古游戏开发：确定性无头运行、逐帧检查、状态校验 | 游戏开发场景 | OPEN |

其他值得注意：frontend-design 清晰化 (PR #210)、ODT 支持 (PR #486)、docx 修订 ID 冲突修复 (PR #541)。

---

## 2. 社区需求趋势

从 Issues 提炼出的高期待方向：

- **安全与信任边界**（Issue #492，43 评论，最高热度）
  社区技能以 `anthropic/` 命名空间分发，冒充官方技能，构成信任越界风险。
  → https://github.com/anthropics/skills/issues/492

- **组织级协作与共享**（Issue #228，16 评论，👍8）
  期望 Claude.ai 内建组织级共享技能库，免去手动下载 `.skill` 再上传。
  → https://github.com/anthropics/skills/issues/228

- **评估与测试工具链可靠性**（Issue #556，12 评论，👍7）
  `run_eval.py` 触发率为 0，测试生成/评估是工具链最大短板。
  → https://github.com/anthropics/skills/issues/556

- **上下文窗口治理**（Issue #1487）
  `claude-api` 单次调用注入约 156k tokens，穷尽上下文窗口。
  → https://github.com/anthropics/skills/issues/1487

- **Agent 治理与安全模式**（Issue #412，6 评论）
  政策执行、威胁检测、信任评分、审计追踪，仍属技能空白。
  → https://github.com/anthropics/skills/issues/412

- **记忆与状态压缩**（Issue #1329，9 评论）
  `compact-memory` 用符号化记法压缩长期 Agent 状态。
  → https://github.com/anthropics/skills/issues/1329

- **平台集成**：AWS Bedrock 支持（Issue #29）、Skills 暴露为 MCP（Issue #16）。

---

## 3. 高潜力待合并 Skills

近期更新活跃、与热门 Bug 强关联，可能较快落地：

- **PR #1742** — mcp-builder 适配 `mcp>=2` 导入与自定义 headers，直接修复 Issue #1668。
  → https://github.com/anthropics/skills/pull/1742
- **PR #1769** — 修复 skill-creator 触发检测 0% recall（Fixes #1721），与社区最热的 #556 同源。
  → https://github.com/anthropics/skills/pull/1769
- **PR #1765** — office 技能以 UTF-8 解码修订差异（Fixes #1707），Windows 兼容性修复。
  → https://github.com/anthropics/skills/pull/1765
- **PR #1734** — 检测孤立 docx 批注。
  → https://github.com/anthropics/skills/pull/1734
- **PR #1703** — md2video-audio，文档转视频，功能差异化明显。
  → https://github.com/anthropics/skills/pull/1703
- **PR #539 / #541** — 由同一作者 (Lubrsy706) 提交的 skill-creator YAML 校验与 docx 修订 ID 冲突修复。
  → https://github.com/anthropics/skills/pull/539 · https://github.com/anthropics/skills/pull/541

---

## 4. Skills 生态洞察

**一句话总结**：当前社区在 Skills 层面最集中的诉求是「信任与可靠性」——既要堵住命名空间冒充的安全漏洞，也要修复 skill-creator / mcp-builder 等核心工具链的评估失效问题，让技能真正可被安全地测试、共享与信任。

---

# Claude Code 社区动态日报（2026-09-18）

## 1. 今日速览

今日发布 v2.1.276，修复了 v2.1.275 引入的代理/网关场景下所有请求返回 `400 Input tag 'advisor_20260301'` 的回归问题。社区侧，多账号 Connector 支持（#27302）以 250 条评论、381 个赞继续稳居讨论热度首位；权限、插件路径与沙箱配置相关的实现缺陷仍是本轮 Issue 更新中的高频主题。

## 2. 版本发布

**v2.1.276**
- 修复：当 `ANTHROPIC_BASE_URL` 指向代理或网关时，所有请求报 `400 … Input tag 'advisor_20260301'` 的错误（属 2.1.275 回归）。

**v2.1.275**
- 新增：在 Claude apps gateway 登录流程中加入已登录账号信息——当网关指定账号时，需在凭据保存前确认，且 `/status` 中会显示该账号。
- 新增：发送快捷键（ctrl+enter，或 ctrl+x ctrl+s），可中断当前回合并发送所有排队消息。

链接：https://github.com/anthropics/claude-code

## 3. 社区热点 Issues

1. **#27302 [enhancement] 支持多个 Connector 账号**（250 评论 / 381 👍）——允许同一 connector 绑定不同账号，横跨 Claude 与 Web 端 Claude Code。评论与点赞量远超其他议题，是当前社区最强的功能诉求。
https://github.com/anthropics/claude-code/issues/27302

2. **#85891 [invalid] Claude Desktop（Windows 11）主窗口强制置顶且无法关闭**（109 评论 / 265 👍）——窗口始终绘制在其他应用之上，无应用内设置可禁用，影响 Windows 日常使用体验，互动量居次席。
https://github.com/anthropics/claude-code/issues/85891

3. **#94393 [bug] Monitor 工具的 persistent 标志无效、`timeout_ms` 上限与实际寿命不符**（7 评论 / 13 👍）——schema 允许 3600000ms，实际生命周期约 30 分钟，即使会话活跃。工具契约与实际行为不一致，对依赖长时监控的自动化流程影响明显。
https://github.com/anthropics/claude-code/issues/94393

4. **#3662 [bug] 自定义 slash 命令无法请求执行 bash 脚本的权限**（18 评论 / 10 👍，含复现）——macOS/TUI/core 相关，长期未解，直接影响自定义命令的可用边界。
https://github.com/anthropics/claude-code/issues/3662

5. **#31388 [bug] 插件路径硬编码为绝对路径，跨环境失效**（14 评论 / 8 👍，含复现）——Linux/WSL 插件场景，团队共享配置时易踩坑。
https://github.com/anthropics/claude-code/issues/31388

6. **#75571 [bug] VS Code 扩展每 30–40 分钟挂起 90 秒以上（macOS ARM64）**（15 评论）——原生进程在 kevent64 中正确空闲，问题指向扩展宿主层，属高干扰性 IDE 体验问题。
https://github.com/anthropics/claude-code/issues/75571

7. **#76743 [bug] Windows 点击聚焦会"穿透"提交权限对话框选项**（10 评论，含复现）——首次点击本意仅为聚焦窗口，却落在权限选项上造成误答，涉及权限安全语义。
https://github.com/anthropics/claude-code/issues/76743

8. **#89931 [bug] `sandbox.excludedCommands` 无效，被排除命令仍受沙箱限制**（4 评论 / 1 👍，含复现，macOS）——配置被读取但未生效，影响文件系统与网络操作，属沙箱可控性问题。
https://github.com/anthropics/claude-code/issues/89931

9. **#78762 [bug] MCP 客户端传输在 >2^53 的整数上丢失精度**（5 评论，含复现）——任何返回 int64 ID 的 MCP 工具结果都会被污染，是 MCP 生态的协议级隐患。
https://github.com/anthropics/claude-code/issues/78762

10. **#73697 [bug] 项目级插件安装无法卸载**（3 评论，含复现，Windows）——uninstall 提示"已在项目作用域启用"，disable 提示"已禁用"，形成死锁；原 issue #62966 已被过期关闭。
https://github.com/anthropics/claude-code/issues/73697

其他值得留意的条目：**#65378**（hooks 在会话 cwd 被删除时 `posix_spawn ENOENT`，建议回退 cwd）、**#84969**（`permissions.ask` 规则中非末尾 `:*` 被静默忽略）、**#68936**（`metadata.pluginRoot` 被忽略，文档与实现不符）。

## 4. 重要 PR 进展

过去 24 小时内更新的 PR 仅 2 条，均为 diff 模块相关，一并列出：

1. **#95198 mods/diff：将 `openPane` 返回类型改为 `unknown`，以兼容更丰富的 `$.ui.open` 结果**——作者 poteat。diff mod 的宿主契约原声明 `openPane` 返回 `Promise<void>`，因 `$.ui.open` 即将返回一个小结果对象，改为 `Promise<unknown>` 后可同时兼容当前与下一版本。
https://github.com/anthropics/claude-code/pull/95198

2. **#94847 diff：仅当有文件可列出时，首次编辑才打开面板**——作者 bcherny。原行为是会话内首次成功的 Edit/Write/NotebookEdit 即自动打开 diff 面板，且在拉取数据之前就打开。新逻辑避免了对仓库外文件、被忽略文件或不同 worktree 的写入触发无意义面板。
https://github.com/anthropics/claude-code/pull/94847

> 说明：本次数据仅包含上述 2 条 PR，未凑足 10 条，不做补充。

## 5. 功能需求趋势

- **账号与身份管理**：多 Connector 账号支持（#27302）是唯一超大规模讨论的功能需求，与 v2.1.275 新增的网关登录账号确认、`/status` 展示形成呼应，多账号/多凭据管理正在成为方向。
- **IDE 与终端集成体验**：VS Code 扩展挂起（#75571）、`/tui fullscreen` 输出裁剪（#74322）、窄终端分隔线截断（#75692）、全屏主题对比度冲突（#77243）集中反映 TUI/IDE 渲染质量诉求。
- **权限与沙箱可预测性**：包含点击穿透误答（#76743）、Bash 规则中冒号与 `:*` 语义（#76509、#84969）、`sandbox.excludedCommands` 失效（#89931），社区期望权限规则"写得下、说得清、跑得对"。
- **插件与市场机制**：绝对路径失效（#31388）、`metadata.pluginRoot` 被忽略（#68936）、项目级插件不可卸载（#73697），插件生态的安装/卸载/跨环境一致性是薄弱环节。
- **MCP 与工具契约**：int64 精度丢失（#78762）、Monitor 工具持久化与超时语义（#94393），反映对协议层正确性和工具行为一致性的关注。

## 6. 开发者关注点

- **回归与网关/代理环境稳定性**：v2.1.275 的 `advisor_20260301` 回归导致代理网关下全线 400，虽已在 v2.1.276 修复，但说明网关路径的测试覆盖仍需加强。
- **配置读取与生效不一致**：多个 Issue 描述同一模式——配置被"读取但不被遵守"（`sandbox.excludedCommands`、`metadata.pluginRoot`、`permissions.ask` 的 `:*`），缺乏显式报错，导致静默失效，调试成本高。
- **跨平台/跨环境脆性**：路径硬编码、项目级插件卸载死锁、Windows 焦点行为、WSL/Linux 插件问题，集中在非 macOS 单一环境的使用场景。
- **长时任务与会话生命周期**：hooks 在 cwd 被删除后 spawn 失败、Monitor 工具实际寿命远低于声明，反映会话边界条件下的健壮性缺口。
- **权限交互的安全语义**：点击穿透提交权限选项、权限规则静默失效，均属"看似无害但可能造成非预期授权"的问题，值得优先处理。

---
数据来源：github.com/anthropics/claude-code（截至 2026-09-18）

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报（2026-09-18）

## 今日速览

过去 24 小时内 Codex 仓库共更新 6 个 release，其中唯一带完整更新说明的是 `rust-v0.155.0`，引入了实验性 `/voice` 语音对话和 TUI 实时推理摘要。社区侧讨论热度集中在"自动超时解析"、Windows 平台可用性（截图、浏览器控制、沙箱）以及使用额度策略三类议题上，其中 Issue #28969 以 88 条评论、208 个 👍 位居今日首位。PR 方面，`copyberry[bot]` 在 9 月 17–18 日批量提交了一批以环境配置一致性、沙箱清理和插件缓存为核心的改动，多数已关闭合并。

## 版本发布

- **rust-v0.155.0**：加入实验性 `/voice` 会话，支持实时转写与麦克风控制，需通过 `/experimental` 启用（#43581、#43651、#44331）；TUI 现在在状态行显示实时推理摘要，并在成功回合后显示完成时间戳。
- **rust-v0.156.0-alpha.2 / -alpha.1、rust-v0.155.0-alpha.9.2 / -alpha.18 / -alpha.17**：均为 alpha 渠道版本，release 说明仅包含版本号，无进一步变更内容。
  链接: https://github.com/openai/codex/releases

## 社区热点 Issues

1. **#28969**（OPEN，88 评论 / 208 👍）— 请求增加设置项，关闭"60 秒后自动解析问题"的行为。今日评论数和点赞数均最高，说明自动超时对交互节奏的干扰是当前最强的集体痛点（环境：codex-cli 0.141.0 / Plus / gpt-5.5）。
   链接: https://github.com/openai/codex/issues/28969
2. **#25178**（OPEN，67 评论 / 28 👍）— Windows 10 22H2 上 Computer Use 在调用 `SetIsBorderRequired` 时截图失败。Computer Use 是桌面端核心能力，截图链路中断会直接阻断整条自动化流程。
   链接: https://github.com/openai/codex/issues/25178
3. **#34035**（OPEN，30 评论 / 164 👍）— 请求将"5 小时使用额度临时取消"变为永久政策（保留周额度）。高点赞低评论的典型"共鸣型"提案，直接关系 Plus / Pro / Business 用户的成本预期。
   链接: https://github.com/openai/codex/issues/34035
4. **#43410**（OPEN，38 评论 / 17 👍）— Windows 上使用 API key 认证时 Edge 插件浏览器控制不可用，首次浏览器操作即报 `unsupported`。API key 与浏览器扩展的认证路径不一致，是典型的"配置合法但功能静默失效"问题。
   链接: https://github.com/openai/codex/issues/43410
5. **#42853**（OPEN，29 评论 / 5 👍）— Windows 桌面端符合条件的 Pro 账号模型选择器中缺少 GPT-6 Astra。模型可见性属于高优先级问题，容易引发账号权益争议。
   链接: https://github.com/openai/codex/issues/42853
6. **#46252**（OPEN，7 评论）— `app-server` 的 `thread/start` 忽略 `default_permissions`，显式 `SandboxMode` 会静默丢弃权限配置文件。权限静默降级对 app-server 集成方是安全语义问题，创建次日即获跟进。
   链接: https://github.com/openai/codex/issues/46252
7. **#46114**（OPEN，6 评论 / 1 👍）— Windows 桌面端提升权限的沙箱在每个线程（新建与已有）都报 "requires effective :root read access"，重装、管理员重启、修复、重置均无效。影响面为"完全不可用"，且现有自助手段全部失效。
   链接: https://github.com/openai/codex/issues/46114
8. **#44783**（OPEN，7 评论）— Windows 11 Pro build 26200 上 Codex CLI 0.154.0 沙箱仍以 `CreateProcessAsUserW failed: 2` 失败，无法启动任何子进程（重新 provisioning 后依旧）。与 #34013、#46114 共同构成 Windows 沙箱问题簇。
   链接: https://github.com/openai/codex/issues/44783
9. **#34013**（OPEN，7 评论）— Windows 沙箱辅助进程在更新 `deny_read_acl_state.json` 时存在竞态；作者在 2026-08-13 更新中说明事务锁根因在当前 `main` 上仍然存在。属于长期未收敛的底层缺陷。
   链接: https://github.com/openai/codex/issues/34013
10. **#30967**（OPEN，5 评论）— 希望 `app-server` 的 `thread/start` 支持线程级 skill / plugin 选择。该需求与今日多个 PR 中"按回合隔离环境与插件状态"的改动方向直接呼应。
    链接: https://github.com/openai/codex/issues/30967

其他值得留意：#41591（macOS 孤儿 inProgress 回合隐藏后续已完成回合）、#38503（Web 端 "Too many requests" 阻断对话）、#38981（Windows 线程级 STDIO MCP 进程与 CLOSE_WAIT socket 累积）、#38133（VS Code 打开生成图片 canvas 预览后会话永久空白）、#45449（macOS 27 上 Chrome 扩展已安装但桌面端报告缺失）。

## 重要 PR 进展

1. **#46335**（CLOSED）— 保持 MCP 策略评估与回合环境一致：为下一回合保存的环境设置不得改变当前活跃回合的 MCP 工具可用性，改为使用单一环境快照。
   链接: https://github.com/openai/codex/pull/46335
2. **#46334**（CLOSED）— 在路径、网络与沙箱配置间共享平台标识：为 `codex-utils-path-uri` 引入 `Platform`，包含元数据解析、原生平台检测与路径约定映射。
   链接: https://github.com/openai/codex/pull/46334
3. **#46333**（CLOSED）— 清理阶段处理已被禁用的 Windows 沙箱账号：临时启用账号时必须留下再次禁用的持久义务。
   链接: https://github.com/openai/codex/pull/46333
4. **#46331**（CLOSED）— 将环境网络策略校验推迟到组合之后：避免特性设置与托管要求替换域名/socket 值后，仍按先前选定的配置误判无效条目。
   链接: https://github.com/openai/codex/pull/46331
5. **#46328**（CLOSED）— 避免为无项目目录持久化项目信任：此前在无项目目录中启动线程可能持久化信任，并预先批准后续加入的项目配置。
   链接: https://github.com/openai/codex/pull/46328
6. **#46324**（CLOSED）— 将 compaction 回退范围扩展到当前模型：模型切换后，用旧模型做压缩可能在流式重试耗尽后失败而不回退到已选模型。
   链接: https://github.com/openai/codex/pull/46324
7. **#46323**（CLOSED）— 在回合分析中记录活跃插件清单：新增 `active_plugin_ids_at_turn_start`，合并活跃宿主插件与选中的插件包，优先使用远端插件 ID。
   链接: https://github.com/openai/codex/pull/46323
8. **#46319**（CLOSED）— 在 `exec --json` 输出中保留 web search 动作与结果：此前 web search 事件丢失结构化结果，并依赖一次序列化往返来转换动作类型。
   链接: https://github.com/openai/codex/pull/46319
9. **#46318**（CLOSED）— 为模型提供商网关加入 OAuth 凭据管理：导出 `GatewayAuthConfig` 与 `GatewayAuthManager`，支持 PKCE 浏览器登录、回环回调、令牌缓存解析，以及过期或被拒后的刷新。
   链接: https://github.com/openai/codex/pull/46318
10. **#46310**（CLOSED）— 将环境选择变更推迟到下一回合：避免在回合运行中更新环境选择导致工具被重定向或挂起的环境初始化无法完成。
    链接: https://github.com/openai/codex/pull/46310

补充观察：#46332（TUI 对话回顾文字降为 dim 样式，`Next:` 去掉青色但保留斜体与粗体标签）、#46309（显示元数据刷新时保留插件缓存）、#46306（将 bio policy 错误保留为独立的不可重试错误）分别对应 TUI 可读性、缓存失效和错误分类三个细分方向。

## 功能需求趋势

- **平台可用性（Windows 为主）**：今日 Issues 中 Windows 相关条目密集覆盖截图（#25178）、浏览器控制（#43410）、沙箱（#34013、#44783、#46114）、UI（#41446、#16669）与 MCP 资源累积（#38981），构成最集中的问题簇。
- **权限与沙箱语义**：#46252（`default_permissions` 被忽略）、#46328（无项目目录不应持久化信任）、#46114（权限要求报错）表明社区对"权限被静默降级或错误拒绝"高度敏感。
- **用量与限流策略**：#34035（永久取消 5 小时限制）与 #38503（Web 端 429 阻断）反映额度政策与限流体验是长期关注点。
- **模型可见性与选择**：#42853 属于模型选择器层面的权益/可见性诉求。
- **线程级扩展能力**：#30967 提出 app-server 的线程级 skill / plugin 选择，与本次多个"按回合隔离环境与插件状态"的 PR 方向一致。
- **可调节的 IDE / App 界面**：#16669（聊天内容宽度可调）、#43807（全屏图片查看器无法用 Esc 或点击背景关闭）、#38133（VS Code 图片预览导致会话空白）指向界面回归与可配置性。

## 开发者关注点

1. **静默失效与静默降级最受抵触**：无论是权限配置被丢弃（#46252）、浏览器控制在 API key 下不可用（#43410），还是扩展已装却报告缺失（#45449），共同特征是缺少明确错误提示。
2. **自动行为缺乏开关**：#28969 以 208 👍 请求关闭"60 秒自动解析"，说明带默认超时/自动推进的交互需要可配置的退出路径。
3. **Windows 沙箱处于长期未收敛状态**：#34013 的作者明确指出根因在当前 `main` 上仍存在，#44783 在校验后依旧失败，叠加 #46114 的"所有自助手段无效"，建议优先排查该子系统。
4. **回合边界的状态隔离是当前工程主线**：从 PR #46335、#46310、#46331、#46309 可见，团队正在系统性地确保"为下一回合所做的设置变更"不污染当前活跃回合。
5. **压缩与流式重试的边界情况**：#46324 显示模型切换后的 compaction 回退路径此前不完整。
6. **TUI 信息密度诉求**：#46332 的样式调整与 rust-v0.155.0 中新增的推理摘要、完成时间戳，共同说明终端用户的实时可观测性正在被补齐。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报（2026-09-18）

## 今日速览

今日发布 v0.62.0 nightly 版本，修复 OAuth token 刷新与 UI 边框渲染问题。Agent 可靠性仍是社区最集中的议题：子代理挂起、错误上报成功状态、破坏性操作等问题持续获得高评论与点赞。安全相关 PR 密集推进，覆盖 Windows 沙箱 git 参数校验、checkpoint 路径穿越等问题。

---

## 版本发布

**v0.62.0-nightly.20260918.g9450ade79**

- `fix(core)`：刷新时保留 OAuth refresh token，并使凭证删除具备幂等性（#29339）
- `fix(ui)`：在边框渲染中对负的布局尺寸进行防护（PR 详情被截断）

链接：https://github.com/google-gemini/gemini-cli/pull/29339

---

## 社区热点 Issues

1. **#22323 子代理 MAX_TURNS 中断被上报为 GOAL 成功**（P1，13 评论）
   子代理在达到最大轮次限制、未做任何分析时，仍报告 `status: "success"` 与 `Termination Reason: "GOAL"`，掩盖了中断事实。这直接损害用户对 agent 执行结果的信任，是当前评论数最高的 Issue。
   https://github.com/google-gemini/gemini-cli/issues/22323

2. **#21409 通用 agent 无限挂起**（P1，8 评论，8 👍）
   一旦 gemini-cli 交给 generalist agent，即使创建文件夹这类简单操作也会永久挂起，用户等待长达一小时。高点赞数说明影响面广，是目前用户体验层面最严重的问题之一。
   https://github.com/google-gemini/gemini-cli/issues/21409

3. **#19873 通过零依赖 OS 沙箱与执行后意图路由利用模型的 bash 亲和性**（P2，9 评论）
   提案指出 Gemini 3 模型本质上是原生 bash 用户，倾向链式使用 `grep`/`sed`/`awk`。该 Issue 试图从架构层面释放这一能力，是方向性较强的设计讨论。
   https://github.com/google-gemini/gemini-cli/issues/19873

4. **#22745 评估 AST 感知的文件读取、搜索与映射**（P2，7 评论）
   EPIC 追踪 AST 感知工具的价值：用单次工具调用精确读取方法边界，减少轮次消耗。这是提升 agent 效率与精度的潜在结构性改进。
   https://github.com/google-gemini/gemini-cli/issues/22745

5. **#25166 命令执行完成后卡在 "Waiting input"**（P1，4 评论，3 👍）
   简单 CLI 命令已执行完毕，但界面仍显示命令活跃并等待用户输入。属于高频、易复现的交互缺陷。
   https://github.com/google-gemini/gemini-cli/issues/25166

6. **#21968 Gemini 使用 skills 与子代理不足**（P2，6 评论）
   用户反馈：除非显式指令，Gemini 几乎不会自主调用自定义 skills 和子代理，即使任务高度相关。这关系到 agent 自主编排能力的实际落地效果。
   https://github.com/google-gemini/gemini-cli/issues/21968

7. **#26767 Agent 数据破坏与源代码永久丢失**（P1，5 评论）
   报告称 agent 在项目管理任务中执行了逻辑有缺陷的自动化脚本，导致源码永久丢失。涉及数据安全的严重客户问题。
   https://github.com/google-gemini/gemini-cli/issues/26767

8. **#26525 Auto Memory 增加确定性脱敏并减少日志**（P2，area/security，5 评论）
   指出 Auto Memory 会把本地会话记录发送给后台抽取 agent，脱敏发生在内容发出之后，存在密钥泄露风险窗口。隐私相关的重要议题。
   https://github.com/google-gemini/gemini-cli/issues/26525

9. **#24246 工具数超过 128 时出现 400 错误**（P2，3 评论）
   启用工具过多时 agent 触发 400 错误，用户期望 agent 能更智能地限定工具范围。反映出工具规模增长下的上下文管理问题。
   https://github.com/google-gemini/gemini-cli/issues/24246

10. **#21983 browser 子代理在 Wayland 下失败**（P1，4 评论）
    Linux Wayland 环境下 browser subagent 直接失败，属于平台兼容性缺陷，影响特定桌面环境的用户群。
    https://github.com/google-gemini/gemini-cli/issues/21983

---

## 重要 PR 进展

1. **#29394 在调度层阻断变更类工具以强制用户 hold 指令**（P1，size/xl，OPEN）
   针对 agent 的"行动偏见"：用户说"等一下""先解释"时，agent 仍会触发破坏性工具调用。该 PR 在调度层拦截变更型工具，解决 #26390。
   https://github.com/google-gemini/gemini-cli/pull/29394

2. **#29393 用持久化文件型任务跟踪替换 WriteToDo**（P3，size/l，OPEN）
   将纯上下文内的 WriteToDo 工具替换为基于 TrackerService 的持久化 CRUD 任务系统，解决 #18836，使任务状态不再局限于对话上下文。
   https://github.com/google-gemini/gemini-cli/pull/29393

3. **#29184 校验 Windows 沙箱 git 参数，阻断静默 `git diff --output`**（P1，area/security，CLOSED）
   修复 Windows 上所有 `git status|log|diff|show|branch` 被当作只读、无需确认即执行的问题，避免 `git diff --output=<path>` 静默写文件。
   https://github.com/google-gemini/gemini-cli/pull/29184

4. **#29192 将 checkpoint 遗留 raw tag 路径限制在 checkpoints 目录内**（P1，area/security，CLOSED）
   修复 `/chat delete <tag>` 传入 `../` 时可删除目录外文件的路径穿越漏洞。
   https://github.com/google-gemini/gemini-cli/pull/29192

5. **#29186 修正 shell 沙箱拒绝启发式中的 exitCode null 检查**（P1，area/security，CLOSED）
   修复 `ShellToolInvocation` 的沙箱拒绝检测逻辑错误，解决 #29043。
   https://github.com/google-gemini/gemini-cli/pull/29186

6. **#29188 read-many-files 精确匹配 include 模式与文件名/扩展名**（P1，CLOSED）
   原实现使用 `String.prototype.includes()` 判断二进制资源是否被显式请求，任意文本重叠即误判，现改为精确匹配。
   https://github.com/google-gemini/gemini-cli/pull/29188

7. **#29195 checkpoint 非数组 history 降级而非崩溃**（P2，CLOSED）
   合法 JSON 但 `history` 非数组时，`/resume resume` 会抛出原始 TypeError；现在会校验结构并降级为空 checkpoint。
   https://github.com/google-gemini/gemini-cli/pull/29195

8. **#29180 避免将同级 home 路径错误波浪号化**（P2，area/core，CLOSED）
   修复 `tildeifyPath` 把名称共享 home 前缀的同级目录误判为用户 home 内路径的问题。
   https://github.com/google-gemini/gemini-cli/pull/29180

9. **#29387 单个损坏的扩展目录不再导致全部扩展加载失败**（area/extensions，OPEN）
   `_buildExtension()` 在 try/catch 之前就校验安全配置，导致一处异常拖垮整个扩展加载流程。
   https://github.com/google-gemini/gemini-cli/pull/29387

10. **#29386 修复 a2a-server 中 express.json 注册顺序导致 req.body 为 undefined**（P2，OPEN）
    修复 #29315：`express.json` 在 A2A 路由之后注册，导致请求体解析失败。
    https://github.com/google-gemini/gemini-cli/pull/29386

---

## 功能需求趋势

- **Agent 自主性与编排**：多个 Issue 聚焦子代理的调用、恢复、轮次限制与状态上报（#22323、#21968、#21409、#20195），社区希望 agent 更主动、更可靠地使用 skills 与子代理。
- **安全与权限控制**：涉及 git 参数校验、checkpoint 路径穿越、Auto Memory 脱敏与日志（#29184、#29192、#26525），安全类修复在 PR 中占比显著。
- **工具规模与上下文管理**：工具数量过多引发 400 错误（#24246），以及任务跟踪从上下文迁移到持久化文件（#29393），显示上下文容量是持续瓶颈。
- **代码理解精度**：AST 感知的读取/搜索/映射（#22745）作为提升效率的探索方向被正式立项。
- **浏览器代理的健壮性**：会话接管、锁恢复、settings.json 覆盖失效、Wayland 兼容（#22232、#22267、#21983）构成一组集中诉求。

---

## 开发者关注点

- **Agent 挂起与假成功**：通用 agent 无限挂起（#21409）与子代理中断被上报为成功（#22323）是最突出的两类可靠性痛点，直接影响可信度。
- **破坏性行为缺乏约束**：用户明确的 "wait/先解释" 指令被 agent 的行动偏见覆盖（#29394），以及 git reset/--force 的激进使用（#22672）、源码永久丢失（#26767），反映安全边界需求强烈。
- **隐私与密钥泄露风险**：Auto Memory 在脱敏前就将会话内容发送给模型（#26525），以及无效内存补丁被静默跳过（#26523），是开发者关注的数据安全细节。
- **配置与行为不一致**：browser agent 忽略 settings.json 覆盖（#22267）、符号链接 agent 文件不被识别（#20079），属于影响可预期性的配置层问题。
- **环境兼容性与文件操作**：Wayland 下 browser 子代理失败（#21983）、模型在随机目录生成临时脚本（#23571），增加工作区清理与跨平台使用成本。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报（2026-09-18）

## 1. 今日速览

今日最值得关注的是 **v1.0.86 发布**，为自定义 agent 引入了可选读取仓库指令文件（AGENTS.md、copilot-instructions.md、CLAUDE.md）的能力。Issue 侧热度集中在 **MCP 生态兼容性**：Figma 远程 MCP 因 `-32601` 被判定为致命错误（#4870），以及非仓库根目录下配置无法读取（#4765）持续引发讨论。过去 24 小时内多个长期 Issue 关闭，涉及会话恢复、Windows 平台与子 agent 等问题。

## 2. 版本发布

**v1.0.86**（2026-09-17）

- 自定义 agent 可通过在 frontmatter 中设置 `include-custom-instructions: true`，选择加入读取仓库指令文件（AGENTS.md、copilot-instructions.md、CLAUDE.md）。
- 在无 plugin-directory、discovery 或 working-directory 覆盖的情况下恢复活跃会话时，保留 market 状态。

## 3. 社区热点 Issues

1. **[#1632 [CLOSED] skills 支持子文件夹以更好地组织](https://github.com/github/copilot-cli/issues/1632)** — 24 👍、11 条评论，为今日热度最高。用户希望将技能按类别（如 testing）归入子目录，该需求已被关闭，反映插件/技能组织方式受到广泛关注。

2. **[#4870 [OPEN] Figma 远程 MCP 加载失败，`server/discover` 返回 `-32601` 被当作致命错误](https://github.com/github/copilot-cli/issues/4870)** — 11 👍、6 条评论。该服务器在 VS Code 中正常工作，仅在 CLI 中失败，说明 CLI 的 MCP 错误处理策略与主流客户端不一致，影响实际可用性。

3. **[#1824 [CLOSED] 默认模型选择](https://github.com/github/copilot-cli/issues/1824)** — 6 条评论。用户抱怨每次启动都默认使用 Claude Sonnet，却找不到设置默认模型的入口，属于高频配置诉求。

4. **[#4765 [OPEN] 工作目录非仓库根时无法读取配置](https://github.com/github/copilot-cli/issues/4765)** — 4 条评论。多仓库工作区（workspace 目录本身不是 git 仓库）场景下，`.mcp.json` 与 hook 文件无法被读取，影响非 monorepo 用户。

5. **[#1086 [CLOSED] 不要在 Windows 上强制使用 PowerShell](https://github.com/github/copilot-cli/issues/1086)** — 4 条评论。`cmd` 终端下无法运行 `gradlew` 等批处理文件，Windows 平台执行环境问题长期存在，现已关闭。

6. **[#4753 [CLOSED] v1.0.83 会话恢复会取消进行中的 stdio MCP 连接](https://github.com/github/copilot-cli/issues/4753)** — 4 条评论。恢复会话时约 1 秒的超时（相比 v1.0.82 的约 16 秒）导致 MCP 服务器静默不可用，属回归问题，已修复关闭。

7. **[#2892 [CLOSED] 子 agent（task 工具）的 MCP stdio 传输约 4 秒后关闭](https://github.com/github/copilot-cli/issues/2892)** — 3 条评论。agent 仍在运行时传输即被关闭，影响子 agent 的 MCP 使用体验。

8. **[#3380 [OPEN] 增加 `--disable-repo-mcps` 标志](https://github.com/github/copilot-cli/issues/3380)** — 3 条评论。目前没有干净的方式在启动时忽略仓库自带的 MCP 定义，涉及安全与可控性诉求。

9. **[#4886 [OPEN] `--plugin-dir` 加载的技能未出现在 `/skills` 与 `/env`](https://github.com/github/copilot-cli/issues/4886)** — 2 条评论。后端已识别技能但交互式面板不显示，而同一调用的非交互式命令正常，属一致性问题。

10. **[#3858 [CLOSED] Windows 上 Ctrl+Backspace 无效](https://github.com/github/copilot-cli/issues/3858)** — 6 👍。这是 Windows 上通用的"删除前一个词"快捷键，Alt+Backspace 可绕过，已关闭，体现输入体验细节受到关注。

## 4. 重要 PR 进展

过去 24 小时内更新的 Pull Request 数量为 **0 条**，本部分无内容可汇总。

## 5. 功能需求趋势

- **MCP 生态兼容与可控性**：多个高热度 Issue 围绕 MCP 展开，包括远程服务器错误处理（#4870）、非仓库根配置读取（#4765）、启动时禁用仓库 MCP（#3380）、OAuth issuer 不匹配（#4606）以及会话恢复中断连接（#4753）。
- **插件与技能组织**：skills 子文件夹支持（#1632）、`--plugin-dir` 技能在面板中缺失（#4886）、扩展斜杠命令重复触发（#4264）、`.copilot` 目录符号链接文档（#3264）显示插件体系正在快速演进。
- **配置与默认行为定制**：默认模型选择（#1824）、禁用任务栏图标（#4839）、copyOnSelect 支持 X11/Wayland PRIMARY 选择（#4236）。
- **跨平台支持**：Windows（PowerShell 强制、Ctrl+Backspace）、Linux（剪贴板选择）、FreeBSD（#3382 平台不受支持回归）等问题集中出现。
- **性能与稳定性**：密钥扫描阻塞 UI 线程（#3900）、长任务完成时发送原生系统通知（#2616）。

## 6. 开发者关注点

- **静默失败最令人困扰**：无论是 MCP 连接被取消（#4753）、子 agent 传输提前关闭（#2892），还是 `session_store_sql` 在本地同步模式下静默返回空（#2654），问题都在于缺乏可见的错误反馈。
- **CLI 与 IDE 行为不一致**：Figma MCP 在 VS Code 可用而 CLI 不可用（#4870），是用户明确指出的对比痛点。
- **平台回归风险**：FreeBSD 从约 1.0.43 起不再受支持（#3382）、会话恢复超时从约 16 秒缩短到约 1 秒（#4753），提示近期版本在兼容性与行为稳定性上存在回退。
- **输入与交互细节影响日常体验**：Backspace 一次删除整词（#4447）、Ctrl+Backspace 失效（#3858）、扩展命令重复排队（#4264），虽属小问题但直接影响高频操作。
- **围绕仓库配置的信任与控制**：用户希望明确控制 CLI 是否读取仓库提供的 MCP 定义与配置，反映出对可预测性、安全性与可审计性的诉求。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报（2026-09-18）

## 1. 今日速览

今日无新版本发布。过去 24 小时内共有 14 条 Issue 和 2 条 PR 更新，其中多数为历史 Issue 被集中关闭，说明维护方在批量清理积压问题。新增两条当日 Open Issue 值得关注：macOS 2.0.0 粘贴图片偶发静默失败（#2652）以及 Kimi Desktop「梦境记忆」开关不写入配置（#2649）。

## 2. 版本发布

无。

## 3. 社区热点 Issues

1. **[#2652 OPEN] macOS 2.0.0 粘贴图片偶发静默失败（0.43.x 回归）**
   当日新建、当前零评论的最高优先级问题。用户通过 `kimi upgrade` 升级至 2.0.0（darwin-arm64 单文件版）后，剪贴板含图片时按 `Ctrl+V` 偶发无反应，且被明确定位为回归问题。涉及最新版本的核心交互路径，建议优先复现。
   https://github.com/MoonshotAI/kimi-cli/issues/2652

2. **[#2649 OPEN] Kimi Desktop「chat 记忆 / 梦境记忆」开关拨动后不写入配置**
   创建于昨日，涉及 Kimi Desktop 3.2.9（macOS, Electron 43.6.0）。用户发现开关可正常拨动，但本地 `daimon/config.json` 未写入对应 feature 项，怀疑服务端功能门控未放行。这是新功能可用性层面的问题，影响用户对功能状态的信任。
   https://github.com/MoonshotAI/kimi-cli/issues/2649

3. **[#1234 CLOSED] aiohttp 默认设置导致环境变量代理在 `kimi login` 时失效**
   14 条评论、2 个 👍，是本次更新中讨论最充分的 Issue。企业网络环境下通过环境变量配置代理是常见诉求，该问题长期存在后被关闭，值得留意其关闭原因与解决方案。
   https://github.com/MoonshotAI/kimi-cli/issues/1234

4. **[#1680 OPEN] VSCode 中独立调节 kimi 窗口字体大小**
   2 条评论、2 个 👍 的 enhancement。用户指出目前只能随 VSCode 整体调整字体（ctrl +/-），会破坏其他窗口的既有设置，并明确以 CodeGeeX 插件作为参照。IDE 集成体验的典型诉求。
   https://github.com/MoonshotAI/kimi-cli/issues/1680

5. **[#1296 CLOSED] 断开的 MCP 导致间歇性错误**
   MCP 连接稳定性问题，影响 Windows 平台用户。随着 MCP 成为工具集成的关键协议，此类断连容错能力的修复对稳定性口碑很重要。
   https://github.com/MoonshotAI/kimi-cli/issues/1296

6. **[#1291 CLOSED] Stdin Prompt 中非法 Markdown 格式导致 Kimi 崩溃**
   输入校验不足导致进程崩溃，属于健壮性问题。通过管道/stdin 调用 CLI 的自动化场景容易触发。
   https://github.com/MoonshotAI/kimi-cli/issues/1291

7. **[#1107 CLOSED] 安装用 sh 脚本存在 bug**
   安装脚本问题直接影响首次使用体验，属于入门阻断类缺陷，被关闭是好消息。
   https://github.com/MoonshotAI/kimi-cli/issues/1107

8. **[#734 CLOSED] Google GenAI provider 因工具参数含 `$schema` 报 extra_forbidden**
   使用 `gemini-3-pro-preview` 时工具参数 schema 校验过严导致失败。多模型 provider 兼容性问题的代表，关系到 Kimi Code CLI 作为多模型客户端的定位。
   https://github.com/MoonshotAI/kimi-cli/issues/734

9. **[#1339 CLOSED] 文件提及（@）列表中显示内部 `.git/objects/` 文件**
   文件补全未过滤版本控制内部目录，影响日常使用体验与列表可用性。
   https://github.com/MoonshotAI/kimi-cli/issues/1339

10. **[#1301 CLOSED] ghostty light theme 下 'yolo' 标识难以分辨**
    终端主题对比度问题，虽小但反映终端渲染适配的细节诉求，涉及 Ghostty 这一较新终端。
    https://github.com/MoonshotAI/kimi-cli/issues/1301

其他已关闭 Issue：#1302（Web UI 项目路径视图与 diff 视图重叠）、#1459（Kimi 无法自行完成配置）、#1480（flow:skill 交互模式下无法中断或选择）、#1342（建议增加 OSC 9/777 终端通知）。

## 4. 重要 PR 进展

过去 24 小时内仅有 2 条 PR 更新，均处于 OPEN 状态：

1. **[#2176 OPEN] fix(hooks): 从 ContentPart 中提取文本以修复 UserPromptSubmit hook**
   当 `user_input` 为 `list[ContentPart]`（所有消息的默认形式）时，该 hook 收到的是空的 `prompt` 与 `matcher_value`，原代码只处理了 `str` 分支。关联 Issue #2148。
   https://github.com/MoonshotAI/kimi-cli/pull/2176

2. **[#2651 OPEN] fix: 阻止重复的工具调用循环**
   将「重复相同工具调用」的检测从仅设标记升级为达到重复上限后硬性中止下一次重复调用，修复工具调用死循环。关联 Issue #2637。
   https://github.com/MoonshotAI/kimi-cli/pull/2651

说明：本次数据仅提供 2 条 PR，无法凑足 10 条，故如实列出全部。

## 5. 功能需求趋势

从本次 Issue 集合可提炼出以下方向：

- **IDE 集成体验细化**：#1680 要求 VSCode 插件内独立控制字体大小，说明用户已从「能用」进入「可调优」阶段，追求与宿主编辑器解耦的独立配置。
- **多模型 / Provider 兼容性**：#734 的 Google GenAI `$schema` 校验问题表明，作为多 provider 客户端，参数 schema 的跨厂商兼容是持续性的工程负担。
- **MCP 集成稳定性**：#1296 的 MCP 断连错误显示工具协议集成在异常场景下的容错仍需加强。
- **终端渲染与主题适配**：#1301（ghostty 浅色主题）、#1342（OSC 9/777 桌面通知）反映社区对终端生态（新终端模拟器、通知协议、多路复用器）的原生适配有明确期待。
- **桌面端功能一致性**：#2649 涉及 Desktop 端记忆功能开关与配置落盘不一致，指向跨端（CLI / Desktop）行为一致性问题。

## 6. 开发者关注点

- **回归风险控制**：#2652 明确指出 2.0.0 相对 0.43.x 的粘贴图片回归，说明大版本升级引入的交互退化是用户最敏感的问题类型，建议加强升级回归测试。
- **崩溃与健壮性**：#1291（非法 Markdown 导致崩溃）、#1107（安装脚本缺陷）显示输入校验与安装链路的边界处理仍需补强。
- **网络与企业环境适配**：#1234（环境变量代理失效）长期存在且讨论量最大，代理配置在受限网络下是刚性需求。
- **自动化调用可靠性**：#2176 与 #2651 两个 PR 分别指向 hook 数据提取和工具调用循环，均属于在自动化/编程式使用场景下暴露的问题，反映 CLI 被集成进流水线后的稳定性诉求。

---

*注：本日报仅依据所提供的 GitHub 数据生成，未包含数据源之外的信息。*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报（2026-09-18）

## 1. 今日速览

今日社区焦点集中在 **Zen / Console 平台的模型可用性故障**：Muse Spark 系列因 reasoning `encrypted_content` 报错持续发酵，多模型、多账户受影响；同时免费额度「只能在 OpenCode 内使用」的报错在多个 Issue 中重复出现。功能侧，社区对新 UI 可用性下滑、subagent 成本与后台任务统计不准确提出集中反馈，PR 方向则以插件化重构、TUI/桌面端体验修复和生态文档补充为主。

## 2. 版本发布

过去 24 小时无新版本发布。

## 3. 社区热点 Issues

1. **#49433 免费额度报错「OpenCode's free tier can only be used from within OpenCode」**（34 评论 / 👍6）
   任意模型均触发，作者版本 1.3.17。评论数最高，说明影响面广且尚未解决。
   https://github.com/anomalyco/opencode/issues/49433

2. **#48741 [2.0] Muse Spark 系列在图片输入或工具调用时出现 Zen 严重错误**（28 评论 / 👍9）
   `reasoning encrypted_content was not issued to this caller`，2.0 关键路径上的 blocker。
   https://github.com/anomalyco/opencode/issues/48741

3. **#37231 [CLOSED] Console Go 全模型「Upstream request failed」**（25 评论 / 👍1）
   跨 CLI、桌面端复现，虽然已关闭，但今日仍有更新，值得观察是否真正修复。
   https://github.com/anomalyco/opencode/issues/37231

4. **#39827 [CLOSED] Zen 全模型 AuthError「Request blocked by upstream provider」**（11 评论 / 👍4）
   作者明确表示非客户端问题，直连 DeepSeek/Anthropic 正常，指向上游封锁。
   https://github.com/anomalyco/opencode/issues/39827

5. **#48973 Muse Spark 1.3 + Zen 的 encrypted_content 报错**（7 评论 / 👍8）
   与 #48741 同源，说明该问题不是单点，而是系统性回归。
   https://github.com/anomalyco/opencode/issues/48973

6. **#48805 [Bug] muse-spark-1.3-contributor-free 同会话切换模型时失败**（7 评论 / 👍7）
   指出触发条件更具体：**同一 session 内切换模型**即报错，对排查极具价值。
   https://github.com/anomalyco/opencode/issues/48805

7. **#48958 新布局让 UI 不可用**（5 评论 / 👍11）
   点赞数偏高，用户强调「项目切换、快速新建会话」等基础功能被破坏，属于体验回归。
   https://github.com/anomalyco/opencode/issues/48958

8. **#45417 会话成本未包含 subagent 成本（TUI 侧栏 / stats / export）**（5 评论 / 👍11）
   多 subagent 工作流下显示成本远低于实际计费，涉及计费透明度，点赞数高。
   https://github.com/anomalyco/opencode/issues/45417

9. **#44055 [2.0] TUI resize 监听器泄漏，反复出现 EventEmitter 内存泄漏警告**（2 评论）
   长时间运行会话的稳定性隐患，属于 2.0 架构遗留问题。
   https://github.com/anomalyco/opencode/issues/44055

10. **#49673 DeepSeek V4.1 Flash 回答只出现在 reasoning 中（output=0）且 reasoning 泄漏到可见文本**（4 评论）
    新模型接入的推理通道处理缺陷，影响输出正确性。
    https://github.com/anomalyco/opencode/issues/49673

其他值得留意：#49680（免费额度报错重复出现）、#49365（升级后 `TypeError: undefined is not an object (evaluating 'a.name')`，附有完整 DEBUG 日志）、#48826（V2 subagent 后台任务被提前标记完成）。

## 4. 重要 PR 进展

1. **#49575 [CLOSED] refactor(core): 将原生压缩机制移入插件**（nexxeln）
   让 Core 只保留必要职责，把 provider 原生 compaction（触发方式 vs 端点、checkpoint 窗口组装）下沉为内部插件，是核心架构解耦的重要一步。
   https://github.com/anomalyco/opencode/pull/49575

2. **#49750 [OPEN] feat(app): 新增 `/btw` 侧问面板**（opencode-agent[bot]）
   支持带参数的斜杠命令，绕过常规 session 准入，复用 transient `session.generate` 在右侧可关闭面板渲染回答。
   https://github.com/anomalyco/opencode/pull/49750

3. **#49729 [OPEN] feat(core): 强制执行 Console 托管策略**（adamdotdevin）
   将 Console 按成员编译的 Providers / Tools 策略落到 `experimental.policies`，客户端此前只解码了 providers 与 websearch，属安全与合规相关修复。
   https://github.com/anomalyco/opencode/pull/49729

4. **#49305 [OPEN] fix(core): subagent 完成前等待子级后台任务**（Ploppy3，Closes #48826）
   修复 subagent 在后台工作未结束时就上报 completed 的问题，避免结果丢失。
   https://github.com/anomalyco/opencode/pull/49305

5. **#49733 [OPEN] fix(core): 注册兼容 Responses provider**（Dante-dan，Closes #49670）
   注册文档所述的 `@opencode/ai/providers/openai-compatible/responses`，补齐 provider 接入路径。
   https://github.com/anomalyco/opencode/pull/49733

6. **#49746 [OPEN] feat(app): 改进行内评论交互**（arvsrn）
   升级 Pierre diffs，按选区方向与行号栏定位评论操作，并刷新评论编辑器，面向代码评审场景。
   https://github.com/anomalyco/opencode/pull/49746

7. **#49731 [OPEN] fix: 空搜索时目录选择器只显示隐藏目录**（Toothless5143，Closes #49730）
   目录选择器在无搜索词时错误调用 SDK 过滤，属直接可感知的交互 bug。
   https://github.com/anomalyco/opencode/pull/49731

8. **#49744 [OPEN] fix(app): 输入时保持快捷键搜索框焦点**（ysm-dev，Fixes #49743）
   改为直接导入 Icon，避免懒加载导致搜索框失焦，与其他搜索框保持一致。
   https://github.com/anomalyco/opencode/pull/49744

9. **#48501 [OPEN] feat(desktop): 改进 Console onboarding**（usrnk1）
   优化桌面端 Console 认证与首个 provider 的配置流程，直指新用户上手路径。
   https://github.com/anomalyco/opencode/pull/48501

10. **#49716 [CLOSED] feat(tui): 斜杠命令自动补全纳入 skills**（smallironman666）
    此前 skills 不在补全列表，必须打开 `/skills` 弹窗或记住命令名，可发现性差。
    https://github.com/anomalyco/opencode/pull/49716

生态文档类 PR 集中出现：#49709（Context7 插件）、#49735（Kimaki 官网链接）、#49714（Agent Run Inspector）、#49749（TUI 主题 spec）。

## 5. 功能需求趋势

- **模型通道与推理（reasoning）处理**：Muse Spark、DeepSeek V4.1 Flash 相关 Issue 集中在 reasoning 通道——`encrypted_content` 归属校验、切换模型后失败、答案只落入 reasoning 且输出为空。模型接入层的健壮性是当前最大热点。
- **subagent 编排与可观测性**：会话成本未计入 subagent（#45417）、后台任务被提前判定完成（#48826）、对应 PR #49305，显示 fan-out 工作流已进入实际使用但语义与计量尚未对齐。
- **UI/布局与基础交互**：新布局可用性（#48958）、TUI resize 泄漏（#44055）、目录选择器、焦点保持、斜杠命令补全 skills，反映对「基础功能不回归」的诉求强于新功能。
- **生态与插件扩展**：Context7、Kimaki、Agent Run Inspector 等生态条目 PR 密集，插件/文档生态在持续扩张。
- **本地模型与超时控制**：#49602 提出放宽超时限制以适配超过 5 分钟的本地模型，#49733 补齐兼容 provider 注册。

## 6. 开发者关注点

- **平台侧故障的持续性与诊断困难**：Zen / Console 多个高评论 Issue（#49433、#48741、#39827、#37231）指向上游错误在客户端被原样透出，用户难以区分自身配置问题与平台问题；免费额度「只能在 OpenCode 内使用」的报错在 #49433 与 #49680 重复出现，提示判定逻辑可能存在误伤。
- **错误后的会话不可恢复**：#49083 指出网络中断会导致同一线程永久失效，后续消息持续报 upstream 错误，恢复路径缺失。
- **计费与成本透明度**：#45417（subagent 成本缺失）与 #32168（UPI 二维码金额显示 ₹15000 而非 ₹464.50）分别从成本显示与支付展示两端引发不信任。
- **升级带来的回归**：#49365 展示升级后 `a.name` 为 undefined 的崩溃，其作者特别提到「很多人开了 issue 但没人干净地提供日志」，说明日志与复现信息规范本身也是协作痛点。
- **2.0 稳定性**：多个带 `[2.0]` 标签的 Issue（#48741、#44055、#48826）同时存在，subagent、TUI、provider 三个子系统均有遗留缺陷。

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报 · 2026-09-18

数据来源：github.com/badlogic/pi-mono（Issues/PR 链接指向 earendil-works/pi）

## 今日速览

今日无新版本发布，社区焦点集中在**稳定性与跨平台体验**：Windows 使用体验征集帖（#7547）以 64 条评论成为最热议题，多起 compaction/thinking 相关 bug 形成集群（#9652、#9391、#9602、#9717）。PR 侧以修复类为主，同时出现 prompt cache warming（#9668）、Azure Foundry Chat Completions 支持（#9714）等值得关注的功能提案。

## 版本发布

过去 24 小时无新 release。

## 社区热点 Issues

1. **[#7547](https://github.com/earendil-works/pi/issues/7547) [OPEN] Windows 使用体验征集（64 评论）** — 作者 petrroll 指出 Windows 上运行 Pi 的方式过多，难以判断资源应投向修 bug、文档还是集成。评论量最高，说明 Windows 支持是目前社区最大共识痛点。

2. **[#6278](https://github.com/earendil-works/pi/issues/6278) [CLOSED] 新 Claude 模型与 edit 工具兼容性问题（25 评论，👍10）** — 部分会话中约 20% 编辑失败，报错为 edit 参数含 LLM 自造的额外键。已关闭，是模型—工具契约不匹配的典型案例，获赞最高。

3. **[#8684](https://github.com/earendil-works/pi/issues/8684) [OPEN] `PI_OFFLINE` 静默禁用全部 provider 模型发现（11 评论）** — 文档只说不影响启动期网络操作，实际却切断了模型目录网络请求，属于文档与行为不一致的隐患。

4. **[#8928](https://github.com/earendil-works/pi/issues/8928) [OPEN][inprogress] 并行启动时因过期 OAuth 凭证报 "No API key found" 约 48 秒（10 评论）** — 作者提供确定性复现与计时数据，多进程场景下触发频率高，对生产环境影响明显。

5. **[#9361](https://github.com/earendil-works/pi/issues/9361) [OPEN] Windows 下 shellPath 在加载扩展后被非确定性忽略（8 评论）** — 回退路径甚至经 WSL 的 System32 bash.exe 执行，与 #7547 一起构成 Windows 平台的系统性问题。

6. **[#9652](https://github.com/earendil-works/pi/issues/9652) [OPEN] Compaction 因转写 thinking 块被 Claude Fable 拒绝（5 评论）** — `/compact` 在 claude-fable-5 上失败，Anthropic 的 reasoning_extraction 分类器拒收，涉及序列化策略。

7. **[#9391](https://github.com/earendil-works/pi/issues/9391) [CLOSED] 压缩后过期签名 thinking 块被每轮重放（5 评论）** — 导致每请求出现 prefix_binding_mismatch，Anthropic 持续丢弃 15 个 thinking 块，与 #9652 同属 thinking 生命周期管理问题。

8. **[#9602](https://github.com/earendil-works/pi/issues/9602) [OPEN] Compaction 可能因纳入被先前请求省略的 thinking 消息而溢出（5 评论）** — 使用 llama.cpp 上的本地 Qwen3.8 时出现，说明问题不限于云端 provider。

9. **[#9036](https://github.com/earendil-works/pi/issues/9036) [OPEN] openai-codex SSE 解析将整段响应缓冲为单一字符串，导致堆 OOM（4 评论）** — 触发致命 V8 out-of-memory，属于流式解析的资源管理缺陷。

10. **[#9062](https://github.com/earendil-works/pi/issues/9062) [OPEN] 工具调用参数解析在碎片化 delta 下退化为 O(N²)（4 评论）** — `processResponsesStream()` 每收到一个 delta 就重新解析整个累积缓冲区，直接影响长响应性能。

其他值得留意：**[#9485](https://github.com/earendil-works/pi/issues/9485)**（OpenRouter DeepSeek V4.1 级别档位过期）、**[#9571](https://github.com/earendil-works/pi/issues/9571)**（畸形 Retry-After 导致零退避重试）、**[#9045](https://github.com/earendil-works/pi/issues/9045)**（非法 `--mode` 值被静默忽略）。

## 重要 PR 进展

1. **[#9668](https://github.com/earendil-works/pi/pull/9668) [OPEN] feat(coding-agent): prompt cache warming** — mitsuhiko 提交的实验性功能，为显式缓存 provider（目前仅 Anthropic）保持缓存热度。

2. **[#9714](https://github.com/earendil-works/pi/pull/9714) [OPEN] feat(ai): 支持 Azure Foundry Chat Completions 部署** — 现有 `azure-openai-responses` 仅实现 Responses API，导致使用 Chat Completions 的 Foundry 部署（如 DeepSeek V4 Pro）不可用。

3. **[#7989](https://github.com/earendil-works/pi/pull/7989) [OPEN] feat(ai): 新增 Qwen Token Plan Individual CN provider** — 面向中国区 cn-beijing 端点的个人订阅目录，复用 `QWEN_TOKEN_PLAN_CN_API_KEY`，对应 #7659 的中国区镜像。

4. **[#9744](https://github.com/earendil-works/pi/pull/9744) [CLOSED] feat(coding-agent): 新增 `/retry` 命令** — 用于在连接重试失败后恢复被放弃的回合，解决本地 LLM 重启 llama-server 后无法续跑的困扰。

5. **[#9724](https://github.com/earendil-works/pi/pull/9724) [CLOSED] fix(ai): 畸形 Retry-After 日期回退到指数退避** — 修复 `NaN` 延迟导致 429 立即重试的问题，对应 issue #9571。

6. **[#9736](https://github.com/earendil-works/pi/pull/9736) [CLOSED] fix(ai): 无论措辞如何，在终止事件前重试被截断的流** — 覆盖 Pi 自身与 Anthropic SDK 两种报错文案，修复 #9735。

7. **[#9717](https://github.com/earendil-works/pi/pull/9717) [CLOSED] fix(coding-agent): 限制 compaction 摘要中的纯 thinking 消息** — 避免把完整推理内容塞入压缩提示词，与 #9602 同源。

8. **[#9734](https://github.com/earendil-works/pi/pull/9734) [CLOSED] fix(coding-agent): 拒绝有歧义的 --session/--fork ID 前缀** — 此前前缀匹配多个会话时会静默打开最近的会话并把历史追加到错误文件，现改为列出候选并退出。

9. **[#9720](https://github.com/earendil-works/pi/pull/9720) [CLOSED] fix(ai): 用 thinkingLevelMap 驱动 Mistral 推理分发，新增 zai-glm-5-3** — 将基于 id 白名单的判定改为上游驱动映射，并补充新模型。

10. **[#9738](https://github.com/earendil-works/pi/pull/9738) [CLOSED] fix(core): 在溢出重试前冲刷延迟的自定义消息** — 修复 auto-compaction 命中可重试溢出时 `_pendingCustomMessages` 未及时发送的问题。

其他：**[#9719](https://github.com/earendil-works/pi/pull/9719)**（工具 shell 垂直内边距可配置）、**[#9630](https://github.com/earendil-works/pi/pull/9630)**（`pi.on(...)` 支持取消订阅）、**[#9722](https://github.com/earendil-works/pi/pull/9722)**（无诊断体的 4xx 重试）。

## 功能需求趋势

- **跨平台支持（尤其 Windows）**：#7547、#9361 反映 Windows 上运行路径、shell 解析、扩展加载均存在非确定性行为，社区呼吁明确支持边界。
- **Provider 与模型目录覆盖**：#9485、#9737、#7989、#9714 集中体现对 DeepSeek V4.1、Qwen Token Plan、Azure Foundry 等新模型/端点快速跟进的需求，且目录常因 pin 过期而滞后。
- **Compaction 与 thinking 生命周期**：#9652、#9391、#9602、#9717 构成一组，说明长会话压缩、签名 thinking 块重放与摘要边界是当前架构的薄弱环节。
- **性能与资源管理**：#9062（O(N²) 解析）、#9036（堆 OOM）、#9267（fuzzy 搜索扫描成本）指向流式处理与大响应场景的效率问题。
- **TUI 体验细节**：#9052（全屏模式滚轮速度）、#8827（LaTeX 字体切换回退）、#9742（shell 时长展示）显示用户对交互细节的敏感度在提升。

## 开发者关注点

- **文档与实现不一致**：#8684（`PI_OFFLINE` 范围）与 #8896（`/export` 丢弃 display:false 消息）都源于文档承诺与实际行为脱节，容易在生产中造成静默错误。
- **静默失败与可诊断性**：#9045（非法 `--mode` 无告警）、#9734（歧义前缀静默打开最近会话）、#9011（`wl-paste` stderr 泄漏破坏 TUI）共同指向「出错时缺少明确提示」。
- **重试与退避语义**：#9571、#9722、#9736 显示网关返回的畸形或不透明错误在重试策略中处理不足。
- **本地 LLM 与多进程场景**：#9744、#9602、#8928 表明本地推理服务重启、并行启动等真实工作流仍有明显摩擦。
- **认证状态健壮性**：#8928 的过期 OAuth 凭证阻塞启动约 48 秒，是多 provider 配置下的高频痛点。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报（2026-09-18）

## 1. 今日速览

今日社区焦点集中在 **上下文与内存治理**：一条 P1 级 glob 内存溢出问题（#12151）和一条非对话上下文 token 治理追踪（#12028）同日活跃，直接指向大上下文模型下的成本与稳定性瓶颈。同时，**Goal 卡片投影退役**的阶梯式重构进入第 5-b 步（#12179、#12181），Live Voice 模型接入统一 `modelProviders` 注册表的需求也已落地为 PR。夜间版本 v0.24.0-nightly 正常发布，主要包含 ACP 边界验收文档与 CI 修复。

## 2. 版本发布

**v0.24.0-nightly.20260917.f822124af5**（nightly 通道）

- `docs(serve)`: 记录已合并的 ACP 边界验收（PR #12024，@wenshao）
- `fix(ci)`: 等待已发布的 export 完成（release notes 中此项描述被截断）

> 说明：本次 nightly 更新内容较少，主要为文档与 CI 层面的收尾工作。

## 3. 社区热点 Issues（10 条）

| # | 标题 | 状态 | 为何值得关注 |
|---|------|------|-------------|
| [#12151](https://github.com/QwenLM/qwen-code/issues/12151) | Heap OOM from glob in repos with a big untracked folder | OPEN / P1 | **今日最高优先级**。`GitIgnoreParser` 按目录缓存 matcher，在含大型未跟踪目录的仓库中导致重复会话崩溃（`JavaScript heap out of memory`），是可直接复现的稳定性事故。 |
| [#12028](https://github.com/QwenLM/qwen-code/issues/12028) | tracking(core): non-conversation context token governance | OPEN / P2 | 指出 system prompt、内置工具 schema、`QWEN.md`、skill 列表每次请求都计费，在大上下文模型上可远超对话本身，是成本与性能的结构性议题。 |
| [#11895](https://github.com/QwenLM/qwen-code/issues/11895) | review: dimension agents 读取主检出而非 PR worktree | CLOSED / P1 | `/review` 的 `working_dir` 只约束相对路径，维度 agent 实际读取主仓库代码，会直接影响 PR 审查结论的可信度。 |
| [#12167](https://github.com/QwenLM/qwen-code/issues/12167) | node-repl 顶层语句缺分号导致整个 cell 失败 | OPEN / P2 | 报错指向内部生成标识符，用户无法定位真实原因，属于 MCP 工具链的可诊断性问题。 |
| [#12147](https://github.com/QwenLM/qwen-code/issues/12147) | feat(extensions): 从目录加载部署管理的扩展 | OPEN / P3 | 提议为 `qwen` 与 `qwen serve` 增加 `--extension-dir <root>`，分离扩展打包与部署，便于企业统一管理。 |
| [#12169](https://github.com/QwenLM/qwen-code/issues/12169) | Batch API 上传绕过 pinned dispatcher | OPEN / P2 | 两处上传直接调用全局 `fetch`，在代理或 TLS 拦截环境下必然失败，报告方已给出一行修复方案。 |
| [#12176](https://github.com/QwenLM/qwen-code/issues/12176) | 保存的 workflow 作为斜杠命令运行后无回报 | OPEN / P2 | 3 阶段、9 次 `agent()` 调用的 workflow 成功执行但结果为空，影响后台自动化这一路线图方向的可用性。 |
| [#12172](https://github.com/QwenLM/qwen-code/issues/12172) | web-shell 内联消息编辑器在窄面板溢出 | OPEN / P2 | 编辑最新用户消息时 textarea 与发送按钮超出气泡，移动端/窄屏 Web Shell 的布局缺陷。 |
| [#11361](https://github.com/QwenLM/qwen-code/issues/11361) | AskUserQuestion 在 ACP/Zed 中显示为 "Raw Input" | OPEN / P2 | Zed 集成里多选题界面未渲染，退化为原始输入，直接影响 IDE 交互体验。 |
| [#12179](https://github.com/QwenLM/qwen-code/issues/12179) | Goal: retire the legacy card projection（阶梯第 5-b 步） | OPEN / P2 | 承接 #12053 的 Goal 瘦身阶梯，5-a（#12155）已停止从 `goal_status` 卡片恢复 Goals，本步清理遗留投影。 |

其他值得留意：已关闭的 [#11995](https://github.com/QwenLM/qwen-code/issues/11995)（Web Shell 会话恢复横幅误报）、[#11717](https://github.com/QwenLM/qwen-code/issues/11717)（WebShell create 超时）、[#6181](https://github.com/QwenLM/qwen-code/issues/6181)（移动端会话切换卡顿，四层成本叠加分析）。

## 4. 重要 PR 进展（10 条）

| # | 标题 | 状态 | 内容 |
|---|------|------|------|
| [#12181](https://github.com/QwenLM/qwen-code/pull/12181) | refactor(goal)!: 停止发送 `active_goal` 流事件 | OPEN | `--output-format stream-json` 不再输出 `active_goal`（pre-#7895 卡片形状的投影），属破坏性变更，与 #12179 配套。 |
| [#12136](https://github.com/QwenLM/qwen-code/pull/12136) | fix(cli): 拒绝修改任何挂载到活跃 runtime 的会话 | OPEN | 会话有 prompt 在途时删除返回 409，此前仅 Live Voice 调用受保护，两个会话修改入口均收口。 |
| [#12173](https://github.com/QwenLM/qwen-code/pull/12173) | feat(live): 从 `realtimeOnly` 的 modelProviders 路由解析 Live Voice 模型 | CLOSED | 新增 `realtimeOnly` 服务角色标志，Live Voice 不再自带 endpoint 与明文 API key。 |
| [#12178](https://github.com/QwenLM/qwen-code/pull/12178) | feat(web-shell): 随 cli 发布一同发布 web-shell 包 | OPEN | npm 发布工作流在同一次运行中发布 `@qwen-code/web-shell`，紧随 cli bundle 之后。 |
| [#12135](https://github.com/QwenLM/qwen-code/pull/12135) | fix(ci): 回收 Docker 缓存并清理 review 临时目录 | OPEN | review 获得 runner 临时存储下的私有 `TMPDIR`，避免验证副本残留在共享 `/tmp`。 |
| [#11769](https://github.com/QwenLM/qwen-code/pull/11769) | fix(core): 清除已删除会话的 prompt 日志 | CLOSED | 删除会话时同步从 `~/.qwen/tmp/<project-hash>/logs.json` 移除其 prompt，新增 `removeSessionsMessages`。 |
| [#11731](https://github.com/QwenLM/qwen-code/pull/11731) | fix(ci): e2e.yml 安装步骤重试瞬时 `npm ci` 失败 | OPEN | 复用 `repo-hygiene.yml` / `qwen-autofix.yml` 已有的三次有界重试配方。 |
| [#11963](https://github.com/QwenLM/qwen-code/pull/11963) | fix(ci): verify-capture 渲染器补做粗体合成 | OPEN | SVG 中粗体单元仅设 `font-weight="bold"`，本 PR 补足栅格化时的实际合成，修复证据图渲染。 |
| [#11792](https://github.com/QwenLM/qwen-code/pull/11792) | fix(live): 让 monitor debug store 在 Windows 上工作 | OPEN | 修复 `packages/qwen-live` 在 Windows 夜间 CI 的三处失败，含隐私检查误拒所有目录。 |
| [#11879](https://github.com/QwenLM/qwen-code/pull/11879) | fix(release): 重试瞬时的独立运行时下载 | OPEN | 校验和列表与运行时归档下载各加 12 秒级有界重试，加固发布流水线。 |

长期挂起的 autofix 项仍有待人工介入：[#9305](https://github.com/QwenLM/qwen-code/pull/9305)（VP 模式内容顶对齐）、[#10455](https://github.com/QwenLM/qwen-code/pull/10455)（输出语言文件不可写时启动崩溃）、[#11001](https://github.com/QwenLM/qwen-code/pull/11001)（交互式 PTY 清理等待）、[#11134](https://github.com/QwenLM/qwen-code/pull/11134)（macOS E2E 分片重试）、[#11658](https://github.com/QwenLM/qwen-code/pull/11658)（OpenTUI 确认框溢出视口）。

## 5. 功能需求趋势

从今日 50 条 Issue 的标签与主题看，社区关注方向集中在以下几类：

1. **上下文与 token 治理**（`model/long-context`、`scope/token-management`、`scope/memory`）
   #12028 将非对话上下文（system prompt、工具 schema、`QWEN.md`、skill 列表）单列为治理对象，与 `#12151` 的内存溢出共同构成本日最显著的主题线。

2. **IDE 与 ACP 集成**（`scope/zed`、`scope/mcp`、`daemon`）
   #11361（Zed 中 AskUserQuestion 退化为 Raw Input）、#11359（daemon REST/SSE API 文档）、#11717/#11987（Web Shell 与 SDK 会话时序）显示集成侧对文档与稳定协议的需求上升。

3. **Web Shell 与移动端体验**（`scope/web-shell`、`category/ui`）
   #12172（编辑器溢出）、#11995（恢复横幅误报）、#6181（移动端切换卡顿）构成一组 UI/性能问题簇。

4. **扩展与部署配置**（`scope/extensions`、`roadmap/configuration`）
   #12147 的 `--extension-dir` 与 #12170 的 Live Voice 走 `modelProviders`，共同指向"配置统一、凭据集中"的方向。

5. **后台自动化与 workflow**（`roadmap/background-automation`）
   #12176（workflow 结果不回传）、#5124（`/loop` 对齐父议题，今日关闭）反映该路线图仍在推进中。

6. **供应链与代理环境适配**
   #12169 揭示 Batch API 上传未走 pinned dispatcher，代理/TLS 拦截场景下的端到端可用性仍需补强。

## 6. 开发者关注点

- **稳定性优先于新功能**：`#12151` 的 heap OOM 与 `#12176` 的空结果，都是"能用但会突然崩/静默失败"的类型，对日常使用影响最大，社区反馈也最直接。
- **错误信息不可诊断**：`#12167`（报错指向内部生成标识符）、`#12169`（代理下失败无明确指向）说明失败路径的可观测性仍是短板。
- **审查与安全语义需收紧**：`#11895`（agent 读错 worktree）与 `#12136`（拒绝修改活跃会话）都在处理"操作对象与预期不一致"的一致性问题。
- **凭据与配置分散**：Live Voice 自带 endpoint 与明文 key（#12170/#12173）是重复出现的模式，统一到 `modelProviders` 并获得 `realtimeOnly` 这类显式角色标志，是社区认可的解法。
- **CI 与发布可靠性**：本日 PR 中有 5 条以上为 CI/发布重试与清理类修复，说明维护者正在系统性偿还基础设施债，这也解释了为何多条 autofix PR 长期待人工复核。
- **移动端与窄屏体验**：`#6181`、`#12172`、`#11995` 三例表明 Web Shell 在移动端的表现是高频投诉区，涉及轮询、渲染与状态判定多个层面。

---

*本日报仅基于 2026-09-18 抓取的 GitHub 数据生成，所有链接指向 QwenLM/qwen-code 对应 issue/PR 编号。*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI 社区动态日报（2026-09-18）

> 数据来源：github.com/Hmbown/DeepSeek-TUI（Hmbown/Codewhale）。过去 24 小时无新版本发布，动态集中在 Issues 讨论与 PR 落地。

---

## 1. 今日速览

今日无新版本发布，社区活动集中在 0.9.13 发布后的稳定性与架构收敛上。最突出的信号有两个：**运行时静默冻结（#6184）** 这类无日志、无崩溃的引擎级问题被持续跟进，以及围绕 0.9.14 的大规模重构 backlog（MCP 双栈、config 单一权威、依赖去重）开始成批关闭。同时，Fleet/子代理的可用性、模型 pin 失效、用量与工具诊断等核心执行能力仍是讨论重心。

---

## 2. 版本发布

过去 24 小时无新 Release。社区讨论中多次提及 **0.9.13（Rust TUI）** 为当前版本，**0.9.14 重构 backlog** 为下一阶段工作来源。

---

## 3. 社区热点 Issues（10 条）

1. **#6184 [OPEN][bug] 引擎运行中静默冻结** — 用户消息已持久化但从未被应答，无错误、无日志、无崩溃记录（codewhale 0.9.13 / linux x86_64 / zai GLM-5.3-Flash，Ask/workspace-write 姿态）。评论 6，是当前最严重的可观测性缺陷。
   https://github.com/Hmbown/Codewhale/issues/6184

2. **#6011 [OPEN][enhancement] 用量与工具诊断** — 提出按组件/按模型统计 token 账目（含缓存命中率）、按工具统计 sink、压缩成本，以及工具调用错误模式。评论 9，属 C11 核心执行包，是成本可观测性的关键提案。
   https://github.com/Hmbown/Codewhale/issues/6011

3. **#6015 [OPEN][documentation, enhancement] Fleet 自适应防停滞 + 更宽的安全只读 shell 语法** — 归属 C05/C06，主张以默认值而非逐用户配置生效。评论 9，直接影响子代理可靠性。
   https://github.com/Hmbown/Codewhale/issues/6015

4. **#5587 [OPEN] 死代码清理第 2–4 阶段** — 对 crates/tui/src 中全部 379 处 `allow(dead_code)` 做全量审计（75 个 test-only 标记、约 242 处陈旧 allow）。评论 9，第 1 阶段已在 e5ca0aa86 落地。
   https://github.com/Hmbown/Codewhale/issues/5587

5. **#6187 [CLOSED] MCP 缺少连接监督** — 已死 MCP server 会一直显示 "connected"，直到下一次工具调用遇到 EOF 才惰性恢复，没有自动重连或 list_changed 处理。评论 5，已被关闭。
   https://github.com/Hmbown/Codewhale/issues/6187

6. **#6142 [OPEN][rust, cleanup] 合并两套 MCP 客户端栈** — `tui/src/mcp/`（约 13.2k 行，McpPool、oauth、stdio/http/sse）与 `crates/mcp`（约 4.5k 行，McpManager 及同名模块）并存，来自 0.9.14 重构 backlog。评论 5。
   https://github.com/Hmbown/Codewhale/issues/6142

7. **#6311 [CLOSED] MATE 终端极端窗口闪烁** — 0.9.13 比 0.9.12 明显恶化；用户说明问题并非由 codewhale 直接引起，但版本升级放大了它。评论 5，当日创建当日关闭。
   https://github.com/Hmbown/Codewhale/issues/6311

8. **#5529 [CLOSED] 子代理无法可靠执行** — 三种失败模式：墙钟超时丢失未提交工作、provider 路由失败阻断派发、shell 工具需要绕过方案，直接动摇 Fleet 的核心价值主张。评论 5。
   https://github.com/Hmbown/Codewhale/issues/5529

9. **#6035 [OPEN] 模型 pin 不传播** — 模型 id 至少被独立 pin 在六处，无统一所有者、厂商退役 id 时无迁移；真实案例：DeepSeek 发布 V4.1 Flash（`deepseek-flash`）并下线 `deepseek-v4-f...` 后，fleet 成员与 agent profile 仍保留已退役 id。评论 3，涉及新模型支持时效性。
   https://github.com/Hmbown/Codewhale/issues/6035

10. **#6232 [CLOSED][bug] 结构化 plan 子节点无法设置 cwd** — 在非 git 仓库但包含多个仓库的工作区中，`risk: writes` 的并行写入在派发前即被全部拒绝。评论 3。
    https://github.com/Hmbown/Codewhale/issues/6232

---

## 4. 重要 PR 进展（10 条）

1. **#6055 [CLOSED] feat(subagent): 限流自适应的启动调度** — 解决共享 provider 下子代理蜂群导致并行 429 成为常态的问题；原启动闸门是固定容量 `Semaphore`，容量无法收缩。
   https://github.com/Hmbown/Codewhale/pull/6055

2. **#6333 [OPEN] 安全加固：unsafe 文档、异步 I/O、递归与读取预算** — 基于 main（531cddb56）rebase，为每个未文档化的 `unsafe` 块补 SAFETY 契约，将 async 中的阻塞文件调用迁移到 `tokio::fs` 或 `spawn_blocking`。今日新建、仍开放。
   https://github.com/Hmbown/Codewhale/pull/6333

3. **#6321 [CLOSED] feat(tui): 在 turn 上记录该轮实际运行的模式** — 此前模式只能从 thread 反推，会在运行中切换模式时把已完成 turn 报告为从未运行过的模式。
   https://github.com/Hmbown/Codewhale/pull/6321

4. **#6233 [CLOSED] 告诉用户真正可用的 resume 路径（#6225）** — 原会话切换拒绝信息指引用户做一件不可能的事（"Resume it in a new Codewhale process"），在干净安装的最普通路径上就会触发。
   https://github.com/Hmbown/Codewhale/pull/6233

5. **#6170 [CLOSED] fix(weixin-bridge): 补充 Quick Start 文档** — 原 README 指向不存在的 `/opt/codewhale/weixin-bot-bridge` 路径，没有运行时启动命令，且引用了无人读取的 env 文件。
   https://github.com/Hmbown/Codewhale/pull/6170

> 说明：过去 24 小时内更新的 PR 共 5 条，以上已全部列出；其余相关重构项（#6151 依赖去重 reqwest 0.12/0.13 等、#6143 config 单一权威、#6088 acp_server.cs 第二套 turn loop）目前以 CLOSED Issue 形式记录在 backlog 中，尚无对应 PR。

---

## 5. 功能需求趋势

- **核心执行与可观测性**：token 账目/缓存命中率/按工具 sink（#6011）、goal 门控与独立验证（#6013）、turn 模式记录（#6321）构成 C11/C06 主线。
- **Fleet 与子代理**：启动调度抗限流（#6055）、自适应防停滞（#6015）、provider→model→shortlist→role 的模型选择流（#5915）、子代理一等公民管理面板（#5479）。
- **架构收敛（0.9.14 重构 backlog）**：MCP 双栈合并（#6142）、config 单一权威（#6143）、依赖去重（#6151）、死代码清理（#5587）。
- **外部记忆**：会话 scratchpad 与三类存储（workshop 输出 / scratchpad 文件 / Agent Mail）的统一寻址方案（#6086）；可插拔记忆后端 seam，以 causal-memory / mem0 为参考实现（#6050）。
- **IDE 集成**：在完整 thread/turn runtime 上运行 ACP 会话，支持 Zed、JetBrains、VS Code、Neovim（#5835，IDE 第 2 阶段）。
- **多模型与厂商迁移**：模型 pin 随厂商退役自动传播（#6035）。

---

## 6. 开发者关注点

- **静默失败最不可接受**：引擎中途冻结却无错误、无日志、无崩溃条目（#6184），叠加 MCP 死连接长期显示 "connected"（#6187），共同指向可观测性与监督机制的缺口。
- **Fleet/子代理不可用即失去核心价值**：墙钟超时丢工作、路由失败阻断派发、shell 工具需绕过（#5529），以及并行 429（#6055）是采纳的主要障碍。
- **模型 id 生命周期管理**：六处独立 pin、无迁移路径，厂商下线旧 id 后配置即失效（#6035）。
- **终端渲染与平台差异**：MATE 终端闪烁在 0.9.13 明显恶化（#6311）；TUI 界面信息密度过高，`/settings` 71 行、`/setup providers` 平铺 30+（#6087，已关闭）。
- **文档与实际不符**：weixin-bridge 文档指向不存在路径（#6170）；RUNTIME_API.md 的 ACP 文档已陈旧（#5835）。
- **多仓工作区写入受挫**：非 git 根目录下的并行写 plan 在派发前被拒（#6232）。
- **安全与代码卫生**：未文档化 `unsafe`、async 中阻塞 I/O（#6333）与大规模死代码/双栈重复（#5587、#6142、#6143）并行推进，显示项目正处于从快速迭代转向结构性收敛的阶段。

</details>

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar) 自动生成。*