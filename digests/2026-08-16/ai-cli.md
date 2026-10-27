# AI CLI 工具社区动态日报 2026-08-16

> 生成时间: 2026-08-16 01:43 UTC | 覆盖工具: 9 个

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

# AI CLI 工具生态横向对比分析报告

**报告日期**: 2026-08-16  
**覆盖工具**: Claude Code、OpenAI Codex、Gemini CLI、GitHub Copilot CLI、Kimi Code、OpenCode、Pi、Qwen Code、DeepSeek TUI（CodeWhale）

---

## 1. 生态全景

当前 AI CLI 工具生态处于**快速迭代与稳定性阵痛并行**的阶段。一方面，各大工具保持高频发布节奏（Codex 连续发布 2 个 Rust 预发布版、Gemini CLI 发布夜间版、Qwen Code 发布 preview.5），功能边界持续扩展；另一方面，**平台兼容性（尤其 Windows/macOS）和长会话可靠性**成为跨工具共性问题——Claude Code 的 Windows GPU 崩溃、Codex 的 macOS Computer Use 进程风暴内核恐慌、Copilot CLI 的 Windows OOM、Kimi 的配额焦虑、OpenCode 的数据库膨胀至 13GB、Pi 的压缩不触发等，均指向"功能越强、稳定性越脆弱"的行业现状。同时，**多账户支持、跨会话记忆持久化、消息队列/非中断交互、上下文压缩优化、配额感知**等需求在多工具间高度重合，说明用户对 AI CLI 的期待正从"单次任务助手"转向"长期协作伙伴"。

---

## 2. 各工具活跃度对比

| 工具 | 今日 Issues 数* | 今日 PR 数* | Release 情况 | 活跃度评级 |
|------|---------------|------------|-------------|-----------|
| **Claude Code** | 10（覆盖） | 3（更新） | 无新版本 | ★★★★ |
| **OpenAI Codex** | 10（覆盖） | 10（覆盖） | 2 个预发布（alpha.19/20） | ★★★★★ |
| **Gemini CLI** | 10（覆盖） | 10（覆盖） | v0.56.0-nightly.20260816 | ★★★★★ |
| **GitHub Copilot CLI** | 10（覆盖） | 2（更新） | 无新版本 | ★★★ |
| **Kimi Code** | 4（覆盖） | 2（覆盖） | 无新版本 | ★★ |
| **OpenCode** | 50（总计） | 50（总计） | 无新版本（1.18.4 有相关讨论） | ★★★★★ |
| **Pi** | 38（总计） | 14（总计） | 无新版本 | ★★★★ |
| **Qwen Code** | 10（覆盖） | 10（覆盖） | v0.21.12-preview.5 + nightly | ★★★★ |
| **DeepSeek TUI（CodeWhale）** | 10（覆盖） | 10（覆盖） | 无新版本（v0.9.8 收尾中） | ★★★★ |

*注：部分工具为"覆盖"数据（仅列 Top 10），部分为仓库全量数据（OpenCode、Pi），不可直接横向比较绝对值；评级综合 Issue/PR 密集度、热点话题热度与版本节奏综合判定。

---

## 3. 共同关注的功能方向

### 3.1 上下文管理与压缩优化（5 个工具同时涉及）
| 工具 | 具体诉求 |
|------|---------|
| **Claude Code** | 消息队列模式，排队而非中断当前任务（#50246，197 👍） |
| **Kimi Code** | 配额感知压缩——1M 上下文窗口下压缩几乎不触发（#2603） |
| **Pi** | 压缩超过 100% 后仍不触发（#6879，17 👍）；压缩时消息序列损坏（#8168）；压缩崩溃（#8164） |
| **OpenCode** | 压缩失败时无限压缩循环（#27924） |
| **Gemini CLI** | AST 感知的文件读取以降低 token 噪声（#22745） |

### 3.2 跨会话记忆/状态持久化（3 个工具）
| 工具 | 具体诉求 |
|------|---------|
| **Kimi Code** | Memory System 跨会话持久上下文（#1283，40+ 评论，持续近 6 个月） |
| **Claude Code** | 跨设备配置/记忆同步与跨会话多 Agent 记忆持久化（#87027/#87028/#87023） |
| **Gemini CLI** | Auto Memory 系统可靠性系列修复（#26522/#26523/#26525） |

### 3.3 平台稳定性（Windows/macOS 为主）（5 个工具）
| 工具 | 具体问题 |
|------|---------|
| **Claude Code** | Windows GPU 崩溃（#80444）、后台任务被静默杀死（#68625）、Linux GPU 日志膨胀 346GB（#83453） |
| **Codex** | Windows 系统级鼠标卡顿（#20214/#38546/#38750，5 个相关 Issue）、macOS Computer Use 进程风暴内核恐慌（#38455/#38760） |
| **Copilot CLI** | Windows OOM 崩溃（#4499）、NixOS Bash 工具失效（#3392） |
| **Pi** | WSL 登录挂起（#6187，27 评论）、Windows bash 工具可杀死自身宿主（#8170） |
| **Qwen Code** | Web Shell 白屏（#9253）、长时间运行 OOM（#9198） |

### 3.4 付费/配额透明性（3 个工具）
| 工具 | 具体问题 |
|------|---------|
| **Kimi Code** | Vivace 档周配额疑似被静默缩减 3-5 倍（#2604） |
| **OpenCode** | Go 订阅扣款成功但显示"余额不足"（#37790）、官网宣称免费却要求订阅（#42143） |
| **DeepSeek TUI** | 定价端点 503 导致所有会话 `unverified_live_pricing`（#5241） |

### 3.5 配置不生效/静默降级（4 个工具）
| 工具 | 具体问题 |
|------|---------|
| **Claude Code** | attribution 设置被忽略（#77830）、skillOverrides 对插件技能无效（#76156） |
| **Gemini CLI** | 浏览器代理忽略 settings.json 覆盖（#22267）、预览模型被静默替换（PR #28828） |
| **Copilot CLI** | Task 工具静默降级子代理模型（#3565） |
| **OpenCode** | agent 设置被 CI 工作流静默丢弃（PR #9252） |

---

## 4. 差异化定位分析

| 工具 | 核心定位 | 功能侧重 | 目标用户 | 技术路线特征 |
|------|---------|---------|---------|-------------|
| **Claude Code** | 企业级全功能 Agent CLI | 多 Connector 账户管理、CVP 安全合规、插件技能、桌面+CLI 双端 | 企业团队、白帽安全研究员 | Web 端 + 桌面端 + CLI 三端协同；安全审核流程深度耦合（CVP） |
| **OpenAI Codex** | 高性能会话式编码 Agent | 会话恢复/分叉、MCP 工具链、TUI 体验、Computer Use 多模态 | 重度 CLI 用户、多模态自动化开发者 | Rust 核心 + TypeScript SDK；Computer Use 集成探索前沿但稳定性欠缺 |
| **Gemini CLI** | 多模型 Agent 编排与评估 | 子代理架构、行为评估体系（evals）、Auto Memory、安全边界（SSRF 防护） | 模型评估工程师、多模型工作流用户 | 评估驱动开发（大量 evals PR）；Agent 治理与安全并重 |
| **GitHub Copilot CLI** | GitHub 生态深度集成 | MCP 生态、CI/CD 认证、worktree 会话、Codespaces | GitHub 重度用户、CI 自动化开发者 | 与 GitHub Actions/Codespaces 深度绑定；MCP 注册表策略 |
| **Kimi Code** | 长上下文 Agent 编码 | 1M token 窗口、订阅计费、Memory System（诉求中） | 大规模 agentic 编码用户、国产模型生态用户 | 大上下文窗口为差异化卖点；配额管理与压缩策略未跟上 |
| **OpenCode** | 开源多模型编码平台 | V2 容器化工作区（Docker/Incus）、语音输入、会话预算、事件溯源 | 自托管/开源社区、多提供商用户 | 开源 + 多提供商业服务（Go/Zen）；V2 架构正推进容器化隔离 |
| **Pi** | 终端优先的轻量 Agent | TUI 体验精细打磨、扩展系统、Mermaid 渲染、多 provider 兼容 | 终端爱好者、扩展开发者 | 单体 Go/Rust 轻量架构；扩展生态活跃 |
| **Qwen Code** | 审查/CI 自动化 Agent | `/review` 审查管线、autofix 自动化、Web Shell、DSW EAS 部署 | CI/CD 自动化团队、阿里云 EAS 用户 | autofix/takeover 自动化高频运用；审查管线自修复能力强 |
| **DeepSeek TUI（CodeWhale）** | 多提供商轻量 TUI | 第三方模型模板、bwrap 沙箱、国际化（宪章定稿）、定价透明 | 多模型切换用户、低成本替代方案用户 | 社区驱动型轻量项目；CI 可靠性仍在建设中 |

---

## 5. 社区热度与成熟度

### 5.1 高热度 + 高活跃（快速迭代期）

- **OpenAI Codex**: 今日 2 个预发布版本 + 10 个 PR 覆盖 + 多热点 Issue（Windows 卡顿连续 3 条新 Issue）。处在功能快速迭代期，但新功能（Computer Use）的稳定性问题正在反噬社区信心。
- **Gemini CLI**: 夜间版持续发布 + 大量行为评估（evals）PR（#28822/#28823/#28824），显示评估驱动开发模式已成型。但 P1 级别 Bug（子代理挂起 #21409、MAX_TURNS 误报 #22323）长期未解决，说明"评估多但修复慢"的矛盾。
- **OpenCode**: 50 Issue + 50 PR 的日活量居首。V2 架构推进（Docker/Incus 工作区、语音输入、会话预算）带来大量新能力，但事件表膨胀 13GB、付费流程 bug 等底层问题显示成熟度不足。

### 5.2 中高活跃 + 稳定性阵痛期

- **Claude Code**: 无新版本 + 少量 PR，处于稳定期。但 Windows 平台三天内集中爆发 3 个稳定性问题（GPU 崩溃、后台任务被杀、回归），且长期霸榜功能请求（#27302，346 👍）未解决——社区期待高但交付速度慢。
- **Pi**: 38 Issue + 14 PR 活跃度适中，但压缩（compaction）相关 Bug 贯穿 Issue 与 PR，显示核心机制的可靠性仍需打磨。
- **Qwen Code**: 版本持续预发布 + 大量 `/review` 自修复 PR，处于自身审查管线的密集加固期。社区提交者以核心维护者（wenshao、yiliang114）为主，外部贡献者参与度有待观察。
- **DeepSeek TUI（CodeWhale）**: v0.9.8 收尾阶段，双平台 CI 全红（#5403）为发布阻断级问题，但 PR 密集跟进，修复节奏快。

### 5.3 中低活跃 + 需关注

- **GitHub Copilot CLI**: 24 小时内仅 2 个 PR 更新，但 Atlassian MCP OAuth 连续两版本回归（#4480/#4490）、NixOS Bash 破裂 3 个月未修（#3392），社区信任度承压。
- **Kimi Code**: 今日仅 4 个 Issue 覆盖，社区活跃度较低。但配额缩减质疑（#2604）与 Memory 系统 6 个月未落地（#1283）可能是用户的"沉默流失"信号——热议度低不等于满意度高。

---

## 6. 值得关注的趋势信号

### 趋势一：平台兼容性正成为采纳门槛

Windows 与 macOS 的系统级稳定性问题在至少 5 个工具中同时出现（Claude Code GPU 崩溃、Codex 鼠标卡顿 + 内核恐慌、Copilot CLI OOM、Pi WSL 挂起、Qwen OOM）。**信号**：跨平台开发者在选择工具时，平台稳定性可能与模型能力同等重要。建议关注各工具对 Windows/macOS 原生支持的投入速度。

### 趋势二：从"对话工具"到"长期协作伙伴"的能力跃迁

多工具社区同时表达了对**跨会话记忆**（Kimi #1283 40+ 评论、Claude Code 账户级状态同步）、**非中断交互**（Claude Code 消息队列 197 👍）、**会话生命周期精细管理**（Codex 会话隔离、OpenCode 会话预算、Copilot `/restart` 修复）的需求。**信号**：AI CLI 正从"每次对话独立"向"持续协作 + 可审计"演进。率先实现可靠持久记忆与配额感知的工具将获得差异化优势。

### 趋势三：上下文压缩成为基础设施级瓶颈

从 Pi 的压缩不触发/崩溃（#6879/#8164/#8168）、Kimi 的 1M 窗口压缩空转（#2603）、OpenCode 的无限压缩循环（#27924）到 Claude Code 的消息队列诉求，**压缩机制的可靠性已从"优化项"变为"必需项"**。**信号**：1M token 大窗口若无配额感知压缩策略配合，反而成为成本负担。工具方需重新设计压缩触发条件（从"窗口上限"改为"预算/质量驱动"）。

### 趋势四：MCP 从"能连"走向"可运维"

Copilot CLI 的 MCP 握手 60 秒硬超时无重试（#4421，29% 初始化失败率）、Codex 的 MCP 工具处理器接入 hooks（#38705）、Gemini CLI 的 MCP 生态讨论，以及 Copilot 的 CI 中 MCP 注册表 403（#4346），**信号**：MCP 基础设施（握手超时、注册表策略、认证）的稳定性与可配置性将决定其能否进入企业级生产环境。

### 趋势五：安全与合规审核的平衡艺术

三方面信号值得关注：Claude Code 的 CVP 误报问题（#84352，102 评论）与配套修复 PR（#86870）；Gemini CLI 的 SSRF 漏洞修复（CVSS 8.6）与 Node 20 EOL 升级；Qwen Code 的 PAT 任务与不可信代码 runner 隔离诉求（#9089）。**信号**：安全机制若产生过多误杀，将直接影响开发效率与用户信任——工具方需要在"安全边界"与"工作流不中断"之间找到可配置的平衡点。

### 趋势六：计费透明性与配额治理成为信任基础

Kimi 的配额被静默缩减 3-5 倍质疑（#2604）、OpenCode 的扣款成功但显示余额不足（#37790）、DeepSeek TUI 的定价 503 降级路径（#5241）、Codex 的桌面端 429 限流异常（#38804）——**信号**：用户对成本可视性与计量正确性的敏感度极高。工具方应主动提供计量透明度（如配额仪表盘、消耗审计接口），否则将面临社区信任危机。

### 趋势七：评估驱动开发（Evals-driven development）正在形成

Gemini CLI 连续提交大量行为评估 PR（任务规划、错误恢复、多工具链、安全边界），OpenCode 新增会话预算测试，Qwen Code 为 Web Shell 补充回归测试钉住行为。**信号**：社区正通过测试用例驱动代理行为改进——这可能是 AI CLI 从"经验开发"走向"工程化验证"的标志性趋势，对开发者的启示是：选择工具时可将评估测试的覆盖范围作为成熟度参考指标。

---

**总体判断**：2026 年 8 月的 AI CLI 生态正处于"功能军备竞赛 → 稳定性与可运维性回归"的转折点。对技术决策者而言，选择工具时建议将**平台兼容性记录、压缩可靠性、计费透明度、配置一致性**作为与模型能力同等重要的评估维度；对开发者而言，当前阶段优先考虑那些对社区反馈响应速度快（如 Gemini CLI 的评估驱动模式）、且已建立系统性稳定性机制的工具，同时警惕"新功能频繁但基础 Bug 长期未修复"的"假性活跃"。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告（数据截止 2026-08-16）

## 1. 热门 Skills 排行

按社区关注度（评论数/Issue 关联）排序，以下为当前讨论最集中的 PR：

1. **run_eval.py 评估脚本修复（#1298）** — [链接](https://github.com/anthropics/skills/pull/1298)
   修复 `run_eval.py` 对所有 Skill description 始终报告 `recall=0%` 的严重问题，该问题被 10+ 独立用户复现并关联 Issue #556、#1169。描述优化循环目前是在对噪声做优化，属于 **skill-creator 工具链的基础设施缺陷**，直接阻塞社区所有人编写高效 Skill。状态：open。
   
2. **add document-typography skill（#514）** — [链接](https://github.com/anthropics/skills/pull/514)
   针对 AI 生成文档的排版质量控制：孤儿词换行、孤行段落（标题滞留页底）、编号错位。社区讨论点：该问题影响 Claude 生成的所有文档，但用户很少主动提出排版诉求，属于"用户不要求但实际存在"的高频痛点。状态：open。

3. **Add ODT skill（#486）** — [链接](https://github.com/anthropics/skills/pull/486)
   OpenDocument 格式（.odt/.ods）创建、模板填充及 ODT→HTML 转换，触发词覆盖 ODT/ODS/ODF/OpenDocument/LibreOffice。社区关注点：补齐官方 skills 中缺失的开源办公格式支持，与既有 docx/pdf 形成互补。状态：open。

4. **Improve frontend-design skill 清晰度与可执行性（#210）** — [链接](https://github.com/anthropics/skills/pull/210)
   重写前端设计 skill 的指令，确保每条指导 Claude 都能在单次会话内执行，且具体到能约束行为而非泛泛而谈。社区讨论：呼应 Issue #202 中"skill 应像操作手册而非开发者文档"的批评。状态：open。

5. **Add skill-quality-analyzer 与 skill-security-analyzer（#83）** — [链接](https://github.com/anthropics/skills/pull/83)
   两个元 Skill：质量分析器从结构/文档/示例等五个维度评估 Skill（各占 20% 权重）；安全分析器用于审查 Skill 的安全性。社区关注点：与 #492 的安全信任边界 Issue 一脉相承，社区开始自我审视 Skill 供应链安全。状态：open。

6. **Windows 兼容性修复系列（#1099、#1050）** — [链接](https://github.com/anthropics/skills/pull/1099)、[#1050](https://github.com/anthropics/skills/pull/1050)
   `run_eval.py` 与 `run_loop.py` 在 Windows 下完全不可用：subprocess 不识别 `claude.cmd`（WinError 2）、管道读取崩溃（WinError 10038）、流编码错误。症状均为 `precision=100% recall=0%`。社区讨论：skill-creator 的跨平台缺陷是 Windows 用户的首要痛点。状态：open。

7. **Add testing-patterns skill（#723）** — [链接](https://github.com/anthropics/skills/pull/723)
   覆盖完整测试技术栈：Testing Trophy 模型、AAA 模式、React Testing Library、测试命名与边界用例。社区关注点：直接回应社区对代码质量类 Skill 的明确需求（见 Issue 趋势）。状态：open。

8. **Add self-audit skill（#1367）** — [链接](https://github.com/anthropics/skills/pull/1367)
   交付前自动审计：先做机制性文件验证（检查所有声称输出的文件是否存在），再按损伤严重度优先级做四维推理审计。定位为"通用——适配任何项目/技术栈/模型"。社区讨论：将质量门禁从静态检查扩展到推理过程验证，是本期最具创新性的 Skill 提案。状态：open。

---

## 2. 社区需求趋势

从 Issues 看，社区需求集中在四个方向：

- **安全性（信任边界）**：Issue #492（43 评论）是本期最热 Issue——社区 Skill 在 `anthropic/` 命名空间下分发，冒充官方 Skill 造成信任边界漏洞。用户可能将高权限授予自认为官方、实为社区的 Skill。这是当前最紧迫的治理问题。
- **企业内部协同**：#228（16 评论）要求 Skill 支持组织级共享，替代当前"下载文件→Slack 传→手动上传"的低效流程。
- **工具链可靠性**：#556（12 评论）与 #1169 指向 run_eval.py 的系统性缺陷——skill-creator 的评估循环在所有查询下均报 0% trigger rate，导致 description 优化失去意义。
- **新的 Skill 方向**：推理质量门禁（#1385）、agent 治理模式（#412）、符号化压缩记忆 compact-memory（#1329）。共性趋势：从"生成内容"转向"治理与审计"——社区开始关注 Agent 行为本身的可靠性与可审计性。

---

## 3. 高潜力待合并 Skills

以下 PR 评论活跃、功能完整且尚未合并，近期落地可能性较高：

| Skill | PR | 核心价值 | 关键信号 |
|---|---|---|---|
| service now 平台助手 | [#568](https://github.com/anthropics/skills/pull/568) | 覆盖 ITSM/ITOM/ITAM/SecOps/CSDM 等全平台能力的通用助手 | 更新至 08-12，仍活跃维护 |
| pyxel 复古游戏开发 | [#525](https://github.com/anthropics/skills/pull/525) | 配合 pyxel-mcp 的 Python 像素游戏工作流（write → run_and_capture → iterate） | 作者即 pyxel-mcp 创建者，专业度高 |
| SAP-RPT-1-OSS 预测 | [#181](https://github.com/anthropics/skills/pull/181) | 调用 SAP 开源表格基础模型做企业数据预测 | 垂直领域、企业级场景明确 |
| plan-file-hygiene | [#1479](https://github.com/anthropics/skills/pull/1479) | 治理 plan 文档的生命周期，解决规划产物无规律累积问题 | 直接回应 #1417，社区协作完成 |
| 规范合规修复 | [#1538](https://github.com/anthropics/skills/pull/1538) | 将两个 Skill 修正为符合 Agent Skills 规范 | 官方仓库作为规范参考实现，合规 PR 更易通过 |

---

## 4. Skills 生态洞察

**社区当前最集中的诉求是"工具链可靠性 + 信任治理"双主线**——一方面 run_eval.py 的系统性缺陷（#556/#1298）让 Skill 开发者在"对噪声做优化"，skill-creator 的跨平台不可用（#1099/#1050）困扰 Windows 用户；另一方面 #492 暴露的官方命名空间被社区 Skill 滥用问题，直接威胁用户对 Skill 生态的信任基础。内容创作类 Skill（文档排版、测试模式、ODT）虽持续涌现，但其优先级已低于"让 Skill 生态本身更可靠、更安全"的元层需求。

---

# Claude Code 社区动态日报 — 2026-08-16

## 1. 今日速览

今日无新版本发布，社区讨论聚焦三大热点：多 Connector 账户支持（#27302）以 346 👍 持续霸榜成为最热门功能请求；CVP 安全审核误报问题（#84352）引发 102 条评论成为最热门 Bug 讨论；Windows 平台多项稳定性问题（GPU 崩溃、后台任务被杀、日志刷爆磁盘）集中爆发，平台兼容性成关注焦点。

## 2. 版本发布

过去 24 小时内无新版本发布。

## 3. 社区热点 Issues

### 🏆 最热门（高热度）

1. **[#27302] 支持多 Connector 账户（同一 Connector、不同账户）** — 346 👍 / 229 评论
   社区呼声最高的功能请求，用户希望在 Claude Code Web 上同时管理同一 Connector 的多个账户（如多个 GitHub 或 Salesforce 账号），无需反复切换登录态。长期霸榜说明这是企业用户的核心痛点。
   [查看 Issue](https://github.com/anthropics/claude-code/issues/27302)

2. **[#84352] CVP 已批准的组织仍收到网络防护拦截** — 19 👍 / 102 评论
   Cyber Verification Program 已获批的 Claude.ai 组织在 Claude Code 中仍遭遇网络防护封锁，且验证门户显示"审核中"而非批准状态。涉及安全合规流程的一致性问题，企业用户受影响严重。
   [查看 Issue](https://github.com/anthropics/claude-code/issues/84352)

3. **[#50246] 消息队列模式：排队消息而非中断当前任务** — 197 👍 / 56 评论
   用户在 Claude 执行任务期间想到后续操作时，当前只能中断任务或事后遗忘。该请求建议新增"队列模式"，待当前任务完成后再处理排队消息。高 👍 数说明这是使用体验的核心痛点。
   [查看 Issue](https://github.com/anthropics/claude-code/issues/50246)

### Windows 平台稳定性

4. **[#80444] Windows 桌面应用 GPU 进程崩溃导致 MSIX 包无法启动** — 5 👍 / 34 评论
   应用内浏览器标签页触发 GPU 进程致命崩溃（0x060C201E），崩溃后 MSIX 包进入不可启动状态（appxState=2），需修复安装。Electron 42.7.0 / Chrome 148 环境下复现，用户被迫中断工作流。
   [查看 Issue](https://github.com/anthropics/claude-code/issues/80444)

5. **[#68625] Windows 桌面端静默杀死 15 分钟无操作的 run_in_background 任务** — 3 👍 / 5 评论
   WarmLifecycle 机制在空闲 15 分钟后对嵌入式 CLI 进程树执行 taskkill，后台任务被静默终止且无通知，长时间运行的任务（如模型训练、批处理）面临数据丢失风险。
   [查看 Issue](https://github.com/anthropics/claude-code/issues/68625)

6. **[#83453] Linux 桌面端 GPU 进程每秒重试 9000 次，24 小时内写入 346GB 日志** — 0 👍 / 1 评论
   GPU 进程陷入无限重启循环，以约 9000 次/秒的频率重试启动，同时将错误输出写入 /var/log/syslog，24 小时内消耗 346GB 磁盘空间。极端情况下可导致磁盘写满系统崩溃。
   [查看 Issue](https://github.com/anthropics/claude-code/issues/83453)

### ⚠️ 新发现（近日提交）

7. **[#87024] Windows Cowork bash 回归：安装在数月后报"not supported on this device"** — 0 👍 / 1 评论
   8 月初的回归导致此前正常工作的 Cowork bash 在 Windows 上失败，`msix_required` 被强制执行，但旧版安装无升级路径。
   [查看 Issue](https://github.com/anthropics/claude-code/issues/87024)

8. **[#86362] 浏览器面板阻止同源子资源（ERR_BLOCKED_BY_CLIENT）** — 4 👍 / 5 评论
   通过 /etc/hosts 映射到 127.0.0.1 的本地开发域名，在浏览器面板中页面渲染空白，子资源请求被 ERR_BLOCKED_BY_CLIENT 拦截，影响本地 Web 开发调试流程。
   [查看 Issue](https://github.com/anthropics/claude-code/issues/86362)

### 🕳️ 核心功能缺陷

9. **[#77830] commit attribution 设置被忽略：`Claude-Session:` 尾注仍被注入** — 1 👍 / 5 评论
   即使用户通过 `attribution: {"commit": ""}` 明确禁用提交归属信息，Claude Code 仍会向 git 提交消息追加 `Claude-Session:` 尾注。设置项形同虚设，并影响使用 Claude Code 的外部工具的提交信息规范。
   [查看 Issue](https://github.com/anthropics/claude-code/issues/77830)

10. **[#77898] 单个 416 字节损坏 transcript 隐藏整个项目的全部 33 个会话** — 0 👍 / 2 评论
    一个格式错误的 stub transcript 文件会导致 `/resume` 列表完全为空，同一项目目录下的所有健康会话均不可见。数据可访问性风险较高，用户可能误以为会话丢失。
    [查看 Issue](https://github.com/anthropics/claude-code/issues/77898)

## 4. 重要 PR 进展

过去 24 小时内仅有 3 条 PR 更新，按关注度排序：

1. **[#86870] 修复：授权安全研究期间的 CVP 状态误判** — 作者 JoTalbot，2026-08-15 更新
   扩展 `review_api.py` 的 `cap_diff_for_prompt()` 逻辑以识别授权实验室环境，新增 `is_authorized_lab()` 检查标志，防止白帽安全研究人员在执行授权测试时被防护机制误判为违规。关联 #84352（CVP 误报）。
   [查看 PR](https://github.com/anthropics/claude-code/pull/86870)

2. **[#84600] 在项目范围内启用 frontend-design 插件** — 作者 DanWebOps，已关闭（2026-08-15）
   注册 anthropics/claude-code marketplace 并通过项目级 `.claude/settings.json` 启用 frontend-design 技能。
   [查看 PR](https://github.com/anthropics/claude-code/pull/84600)

3. **[#82981] 自动盘点耗材库存** — 作者 Eduardo-neira，2026-08-15 更新
   Claude 辅助的耗材库存自动化项目，持续活跃中。
   [查看 PR](https://github.com/anthropics/claude-code/pull/82981)

## 5. 功能需求趋势

| 趋势方向 | 代表 Issue | 热度（👍 合计） | 说明 |
|---------|-----------|---------------|------|
| **多账户 / 多实例支持** | #27302（346 👍） | 346+ | 同一 Connector 多账户管理是最大需求，企业用户切换成本高 |
| **消息队列 / 非中断交互** | #50246（197 👍） | 197+ | 用户需要"边做边想"的能力，不愿因补充指令打断主任务 |
| **跨设备 / 账户级状态同步** | #87027、#87028（新增） | ~0（新提交） | 用户期望配置、CLAUDE.md、记忆在不同机器间随登录同步，当前纯本地存储 |
| **TUI 可用性增强** | #62929（7 👍） | 7 | 无滚动条导致长输出无法定位，需要可视化的滚动导航 |
| **跨会话 / 多 Agent 记忆持久化** | #87023（新增） | 0（新提交） | 多 Agent 部署下的跨会话记忆机制是大型团队的核心诉求 |
| **插件技能覆盖机制** | #76156（1 👍） | 1 | 用户期望 `skillOverrides` 对插件技能同样生效 |

## 6. 开发者关注点

### 🔴 高频痛点

- **Windows 平台可靠性堪忧**：GPU 崩溃（#80444）、后台任务被静默终止（#68625）、Cowork bash 回归（#87024）三天内集中爆发，Windows 用户构建的生产环境稳定性受到显著影响
- **设置被静默忽略**：`attribution` 设置无效（#77830）、`skillOverrides` 对插件技能无效（#76156）、`permissionDecision: "ask"` 在 bypassPermissions 下被自动批准（#77212）—— 配置项不生效类问题反复出现
- **内存 / transcript 数据安全**：单文件损坏导致全部会话消失（#77898）、YAML frontmatter 解析失败时清空记忆文件内容（#76868）、进程重启后后台任务状态残留（#65925）
- **Hook 机制行为不一致**：PreToolUse deny 在整个回合中断而非返回工具错误（#78527）、`allow` 不抑制复合命令的权限提示（#77110）、PostCompact 在交互模式不触发（#78760）

### 📌 新趋势

- **平台一致性诉求上升**：用户同时使用桌面版和 CLI 版，但两者行为差异（版本号不同、功能不一致）带来混乱
- **账户级体验成新焦点**：配置同步、记忆同步、跨产品上下文延续（claude.ai ↔ Claude Code）是新出现的高频需求
- **CVP 安全流程受关注**：误报问题（#84352）加上配套修复 PR（#86870），暗示安全合规审核与开发效率之间的平衡是当前社区讨论的重要话题
- **日志膨胀问题**：Linux GPU 崩溃循环写 346GB 日志（#83453）暴露日志输出缺少速率限制和轮转机制

---

*本日报基于 anthropics/claude-code GitHub 仓库公开数据生成，数据采集于 2026-08-16。*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报 — 2026-08-16

## 今日速览

昨日发布两个 Rust 预发布版本（0.148.0-alpha.19/20），主要为基础发布，无显著功能变更。今日社区焦点集中在桌面应用性能回归：Windows 上 Codex 空闲时导致的系统级鼠标卡顿成为最热议题（单日新增 3 条相关 Issue），macOS 上 Computer Use 进程风暴引发的 OOM 崩溃和内核恐慌也持续发酵。与此同时，存储空间失控问题（Crashpad dump、子代理 JSONL 历史、镜像文件重复复制）成为跨平台最突出的稳定性痛点。

## 版本发布

**rust-v0.148.0-alpha.20**（`0.148.0-alpha.20`）
- 仅标注 "Release 0.148.0-alpha.20"，无额外变更说明

**rust-v0.148.0-alpha.19**（`0.148.0-alpha.19`）
- 仅标注 "Release 0.148.0-alpha.19"，无额外变更说明

---

## 社区热点 Issues（10 个）

### 1. #20214 — [OPEN] Codex App 在 Windows 11 Pro 上频繁冻结/卡顿
- **链接**: [openai/codex#20214](https://github.com/openai/codex/issues/20214)
- **创建**: 2026-04-29 | **评论**: 104 | **👍**: 85
- **重要性**: 社区最高热度 Issue 之一，持续近 4 个月未解决。用户在系统资源充足（Ryzen 5 5600 + 32GB RAM）的情况下仍遭遇频繁 UI 冻结，已获 85 个赞同，说明影响面极广。
- **社区反应**: 大量用户跟帖确认复现，讨论集中在桌面应用架构（可能涉及 Electron/WebView 渲染性能）。

### 2. #38546 — [OPEN] [Windows] ChatGPT/Codex 桌面应用在非管理员运行时引发系统级鼠标卡顿
- **链接**: [openai/codex#38546](https://github.com/openai/codex/issues/38546)
- **创建**: 2026-08-14 | **评论**: 25 | **👍**: 11
- **重要性**: 新报告但获赞迅速，矛头指向 app 版本 26.810.41047 的系统级性能回归，与 #20214 可能同源。
- **社区反应**: 用户验证了与进程权限的关系，推测与桌面应用的输入钩子或渲染管线有关。

### 3. #38455 — [OPEN] macOS 上 ChatGPT 桌面应用反复生成 Computer Use 进程并因 V8 OOM 崩溃
- **链接**: [openai/codex#38455](https://github.com/openai/codex/issues/38455)
- **创建**: 2026-08-13 | **更新**: 2026-08-16 | **评论**: 18 | **👍**: 6
- **重要性**: 严重稳定性问题——空闲时即崩溃，崩溃时产生 316 个线程（其中 187 个名为 computer-use）。上一版本 26.730.61639 正常，明确为回归。
- **社区反应**: 用户提供完整复现路径（启动后 98 秒自动复现），已定位为 `node::OOMErrorHandler` 触发的 SIGABRT。

### 4. #38750 — [OPEN] [Windows] Codex 空闲时引发系统级卡顿，完全退出后系统立即恢复
- **链接**: [openai/codex#38750](https://github.com/openai/codex/issues/38750)
- **创建**: 2026-08-15 | **评论**: 9
- **重要性**: 最新报告（版本 26.810.50856，2026-08-14 发布），卡顿发生在**没有任何活动任务**时，指向后台进程问题而非任务执行负载。
- **社区反应**: 与 #38546/#38719 高度关联，用户已确认退出应用即恢复系统响应。

### 5. #25921 — [OPEN] Codex Desktop 无限生成 Crashpad dumps，每天至少增加 5GB
- **链接**: [openai/codex#25921](https://github.com/openai/codex/issues/25921)
- **创建**: 2026-06-02 | **评论**: 17 | **👍**: 9
- **重要性**: 磁盘占用失控的典型代表——一天内目录增长至 4.9GB、54,504 个文件且持续增长。反映桌面应用存在崩溃-上报的恶性循环。
- **社区反应**: 用户持续跟进但官方未修复，此问题与 #30779/#35470 共同构成"存储失控"系列。

### 6. #28109 — [CLOSED] [Windows] 打开含大型 sessions 目录的 Codex 后出现短暂鼠标/输入冻结
- **链接**: [openai/codex#28109](https://github.com/openai/codex/issues/28109)
- **创建**: 2026-06-13 | **评论**: 23 | **👍**: 14
- **重要性**: 虽已关闭，但揭示了根因方向——大 sessions 目录导致启动/运行时的间歇性系统输入冻结（每次 1-2 秒）。为当前 #38546/#38750 系列问题提供了背景线索。
- **社区反应**: 用户确认"频繁但短暂"的卡顿模式，与当前 Windows 卡顿问题描述一致。

### 7. #35746 — [OPEN] 分页历史丢弃有效 rollout 记录并复用序号
- **链接**: [openai/codex#35746](https://github.com/openai/codex/issues/35746)
- **创建**: 2026-07-28 | **评论**: 13
- **重要性**: 数据正确性问题——CLI 分页历史解码不一致，可能静默丢失会话记录。在 0.146.0-alpha.10.1 上发现，且相关源码在 alpha.14 中未修复。
- **社区反应**: 技术性讨论，用户提供了详细的 RolloutLine 解码分析。

### 8. #18629 — [OPEN] 内联 base64 工具图片可毒化桌面线程，导致恢复时 "Bad Request"
- **链接**: [openai/codex#18629](https://github.com/openai/codex/issues/18629)
- **创建**: 2026-04-20 | **更新**: 2026-08-16 | **评论**: 12
- **重要性**: 会话持久化的设计缺陷——图片工具输出以 base64 形式内联到回放历史中，累积后导致线程不可用，且可能虚增 token 用量。跨平台问题。

### 9. #38804 — [OPEN] Windows 应用请求失败：状态 429（限流）
- **链接**: [openai/codex#38804](https://github.com/openai/codex/issues/38804)
- **创建**: 2026-08-15 | **评论**: 3 | **👍**: 1
- **重要性**: 用户反映桌面端无法发送消息或新建会话，但网页端正常——指向桌面端限流状态处理或认证状态不同步问题。

### 10. #38760 — [OPEN] [Bug] Computer Use 进程风暴耗尽 launchservicesd 并触发 WindowServer 看门狗内核恐慌
- **链接**: [openai/codex#38760](https://github.com/openai/codex/issues/38760)
- **创建**: 2026-08-15 | **更新**: 2026-08-16 | **评论**: 4
- **重要性**: 今日最严重的 macOS 新报告——启动后每秒产生 5-8 个 SkyComputerUseService 进程且不回收，导致内核级崩溃。与 #38455 同属 Computer Use 子系统回归。

---

## 重要 PR 进展（10 个）

### 1. #38817 — [CLOSED] TypeScript SDK 新增原始配置覆盖（configOverrides）
- **链接**: [openai/codex#38817](https://github.com/openai/codex/pull/38817)
- **内容**: 添加 `CodexOptions.configOverrides`，支持传递有序的 `--config key=value` 覆盖。解决部分 TOML 配置（如带字面路径键的权限映射）无法通过结构化点键配置安全表达的问题。
- **意义**: SDK 用户绕过结构化配置限制的新通道。

### 2. #38795 — [CLOSED] `codex doctor` 新增存储诊断
- **链接**: [openai/codex#38795](https://github.com/openai/codex/pull/38795)
- **内容**: 报告 `CODEX_HOME` 和工作树可用空间，低于 5 GiB 警告、低于 1 GiB 报错。Windows 上检测 Git 工作树是否在受信任 Dev Drive 上。
- **意义**: 直接回应了社区长期存在的磁盘失控问题，提供了主动诊断手段。

### 3. #38774 — [CLOSED] 持久化 exec 线程改用分页历史
- **链接**: [openai/codex#38774](https://github.com/openai/codex/pull/38774)
- **内容**: `codex exec` 启动持久线程时请求分页历史；临时线程保持原逻辑，对不支持分页的线程存储自动回退。
- **意义**: 对大会话的恢复效率有直接影响，可能缓解部分卡顿问题。

### 4. #38788 — [CLOSED] TUI 启动时显示恢复/分叉状态
- **链接**: [openai/codex#38788](https://github.com/openai/codex/pull/38788)
- **内容**: 在 TUI 启动时显示暗色的 "Resuming session…" 或 "Forking session…" 状态，会话选择解析后更新或清除。
- **意义**: 改善大会话启动时无反馈的体验问题。

### 5. #38785 — [CLOSED] 保持进行中回合的模型设置稳定
- **链接**: [openai/codex#38785](https://github.com/openai/codex/pull/38785)
- **内容**: 线程设置可在回合进行中变化（包括采样请求之间），此前会中途切换模型配置；此 PR 使更新延迟到下一回合生效。
- **意义**: 修复了回合中途模型切换可能导致的请求不一致问题。

### 6. #38743 — [CLOSED] TUI 应用目录状态限定到当前会话上下文
- **链接**: [openai/codex#38743](https://github.com/openai/codex/pull/38743)
- **内容**: 使应用目录数据和进行中的请求不会越过账户、工作区或线程边界存活，避免过期应用出现在当前 TUI 上下文中。
- **意义**: 修复跨上下文状态污染问题，与 #3550 的会话作用域需求相关。

### 7. #38705 — [CLOSED] Hooks 引擎支持 MCP 工具处理器
- **链接**: [openai/codex#38705](https://github.com/openai/codex/pull/38705)
- **内容**: 发现同步 `mcp_tool` 钩子处理器，并通过注入的执行器调用其配置的 MCP 服务器和工具；在 MCP 工具输入中展开嵌套钩子事件占位符。
- **意义**: 扩展现有 hooks 机制，将 MCP 工具调用接入 hooks 管线。

### 8. #38701 — [CLOSED] 权限请求统一走共享 Guardian 审批
- **链接**: [openai/codex#38701](https://github.com/openai/codex/pull/38701)
- **内容**: 将 `request_permissions` 调用建模为共享审批动作，通过通用审批路径转换为 Guardian 权限请求；保留审批期间的回合取消机制。
- **意义**: 统一权限审批链路，减少分支逻辑。

### 9. #38704 — [CLOSED] 粘贴文本时规范化 CRLF 行尾
- **链接**: [openai/codex#38704](https://github.com/openai/codex/pull/38704)
- **内容**: 先规范化 CRLF 对，再转换剩余的裸回车符，防止 Windows 上粘贴文本时产生双重换行。
- **意义**: 修复 Windows 用户 TUI 粘贴体验的具体 bug。

### 10. #38806 — [CLOSED] code-mode gRPC 监听器新增健康端点
- **链接**: [openai/codex#38806](https://github.com/openai/codex/pull/38806)
- **内容**: 提供 `GET /healthz` 返回 200 OK，支持 HTTP/1.1 和 HTTP/2；其余请求继续要求 HTTP/2 以避免 gRPC 方法暴露在 HTTP/1.1 上。
- **意义**: 为 code-mode 服务的健康检查/编排探测提供支持。

---

## 功能需求趋势

1. **会话隔离与作用域**（#3550、#38743）: 社区持续要求 Codex 会话按项目/工作区隔离，避免跨项目会话混杂。CLI 和 Desktop 共用存储层加剧了这一问题。
2. **存储管理与诊断**（#30779、#34337、#35470、#38795）: 会话/rollout 存储失控是跨平台高频痛点，从 CLI 到 Desktop 均受影响。官方已通过 `codex doctor` 存储诊断、分页历史等方向开始响应。
3. **Windows 性能修复**（#20214、#38546、#38750、#38719、#38518）: Windows 桌面的系统级卡顿是当前最集中的诉求，用户希望官方优先修复空闲状态下的后台进程问题。
4. **恢复/续传可靠性**（#35746、#19837、#18629）: 大会话的恢复失败、历史记录丢失、base64 图片毒化线程等问题，说明会话持久化机制需要更稳健的设计。
5. **MCP 集成深化**（#38705、#38707）: MCP 工具处理器接入 hooks、远程 streamable HTTP 的 elicitation 支持等，反映社区对 MCP 生态的重视。

---

## 开发者关注点

1. **Windows 系统级卡顿（最重要痛点）**: 至少 5 个独立 Issue（#20214、#38546、#38750、#38719、#38518）报告同一类问题——Codex 桌面应用（即便空闲）导致系统级鼠标/输入卡顿。用户已确认退出应用即恢复，问题指向后台进程（可能为 Crashpad、Computer Use 服务或渲染循环）。
2. **macOS Computer Use 崩溃回归**: #38455、#38760 和 #38744（已关闭）共同指向新版本中 Computer Use 子系统失控——进程风暴、OOM、甚至内核恐慌。用户希望官方能提供禁用 Computer Use 的开关或回退机制。
3. **磁盘占用失控**: 从 Crashpad dump（#25921）、子代理 JSONL 历史（#30779）到镜像文件 15 万次复制消耗 400 GiB（#35470），存储膨胀以多种形式出现。社区呼吁提供自动清理、压缩和配额机制。
4. **限流与 API 错误处理**: #38804（429）、#38706（404 compact）、#38323（404 compact）表明远程 compact 端点的不稳定以及 Windows 桌面端限流状态与实际不符的问题，影响正常开发流。
5. **签名与平台兼容**（#38814）: macOS arm64 的 npm SDK 产物未通过代码签名验证，影响 CI/CD 集成场景的可靠性。
6. **远程恢复可靠性**（#19837、#35746）: `--remote` 恢复在大型会话后失败、分页历史解码不一致，说明长会话的端到端可靠性仍需加强。

---

*数据来源: [github.com/openai/codex](https://github.com/openai/codex)，统计窗口: 2026-08-15 ~ 2026-08-16*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报 — 2026-08-16

## 今日速览

今日发布新夜间版本 **v0.56.0-nightly.20260816**。社区讨论聚焦于 **Agent/子代理可靠性**（最大轮次后误报成功、通用代理挂起、浏览器代理在 Wayland 下失败等）、**安全增强**（SSRF 漏洞修复、Sandbox 依赖升级、敏感信息脱敏）及 **Auto Memory 系统的稳定性**。多个安全修复 PR 正在推进中，包括预览模型认证兜底和 401 错误误判修复。

---

## 版本发布

### v0.56.0-nightly.20260816.g2a87e7be1
- **类型**: 夜间构建
- **变更**: 仅含版本号自动升级（Automated version bump for nightly release）
- **对比**: [查看与上一夜版的完整差异](https://github.com/google-gemini/gemini-cli/compare/v0.56.0-nightly.20260815.g2a87e7be1...v0.56.0-nightly.20260816.g2a87e7be1)

---

## 社区热点 Issues（Top 10）

### 1. 🔴 Subagent 达到 MAX_TURNS 后被误报为 GOAL 成功，隐藏了中断
- **Issue**: [#22323](https://github.com/google-gemini/gemini-cli/issues/22323)
- **标签**: P1 / Agent / Bug / 需重新测试
- **社区反应**: 12 条评论，2 👍；自 3 月创建以来持续受到维护者关注
- **要点**: `codebase_investigator` 子代理在未完成任何分析即触发最大轮次限制时，仍报告 `status: "success"` 和 `Termination Reason: "GOAL"`，掩盖了实际的中断。这对依赖子代理结果的自动化流程造成误导。

### 2. 🔴 通用代理（Generalist agent）挂起
- **Issue**: [#21409](https://github.com/google-gemini/gemini-cli/issues/21409)
- **标签**: P1 / Agent / Bug / 需重新测试
- **社区反应**: 8 条评论，8 👍（今日最高👍的 Bug）
- **要点**: 当 Gemini CLI 委托给通用代理时，即使是简单的文件夹创建也会无限期挂起（用户等待超过 1 小时）。强制模型不使用子代理可绕过问题。这是社区反馈最强烈的可靠性痛点之一。

### 3. 🟠 组件级评估系统（EPIC）
- **Issue**: [#24353](https://github.com/google-gemini/gemini-cli/issues/24353)
- **标签**: P1 / Agent / 客户问题 / 评估基础设施
- **社区反应**: 7 条评论
- **要点**: 在已有 76 个行为评估测试的基础上，计划构建更健壮的组件级评估体系，覆盖 6 个受支持的 Gemini 模型。反映出团队在系统化验证代理行为方面的投入。

### 4. 🟠 评估 AST 感知的文件读取、搜索与代码库映射
- **Issue**: [#22745](https://github.com/google-gemini/gemini-cli/issues/22745)
- **标签**: P2 / Agent / 功能 / EPIC
- **社区反应**: 7 条评论，1 👍
- **要点**: 探讨 AST 感知工具能否通过单次调用精确读取方法边界、减少 token 噪声、改进代码库导航。关联 issue [#22746](https://github.com/google-gemini/gemini-cli/issues/22746) 建议以 tilth 或 glyph 作为切入点，改进 `codebase_investigator`。

### 5. 🟠 Gemini 不会主动使用 skills 和子代理
- **Issue**: [#21968](https://github.com/google-gemini/gemini-cli/issues/21968)
- **标签**: P2 / Agent / Bug / 需重新测试
- **社区反应**: 6 条评论
- **要点**: 用户观察（anecdotal）表明 Gemini 几乎不会自主调用自定义 skills 和子代理，即使任务高度相关，只有显式指示时才会使用。影响自定义工作流的自动化体验。

### 6. 🟠 Add OTLP headers 以支持遥测认证
- **Issue**: [#11802](https://github.com/google-gemini/gemini-cli/issues/11802)
- **标签**: P2 / Core / Bug
- **社区反应**: 4 条评论，7 👍（长期悬而未决的高需求功能）
- **要点**: 用户需要自定义 OTLP headers（认证等）来向 OTEL Collector 发送指标和日志。需通过配置文件、环境变量等方式支持。自 2025 年 10 月提出至今仍开放。

### 7. 🟠 Shell 命令执行完成后卡在 "Waiting input"
- **Issue**: [#25166](https://github.com/google-gemini/gemini-cli/issues/25166)
- **标签**: P1 / Core / Bug
- **社区反应**: 4 条评论，3 👍
- **要点**: 极其简单的 CLI 命令执行完毕后，Gemini 仍显示命令为活动状态并挂起等待输入。高频触发的界面卡死问题。

### 8. 🟠 移除或隔离无效的 Auto Memory 收件箱补丁
- **Issue**: [#26523](https://github.com/google-gemini/gemini-cli/issues/26523)
- **标签**: P2 / Agent / Bug
- **社区反应**: 3 条评论
- **要点**: 内存收件箱静默跳过格式错误的补丁，但后台提取器的待处理摘要会读取每个 `.patch` 文件，导致低质量补丁反复处理。与 [#26522](https://github.com/google-gemini/gemini-cli/issues/26522)（低信号会话无限重试）、[#26525](https://github.com/google-gemini/gemini-cli/issues/26525)（确定性脱敏）同属 Auto Memory 优化系列。

### 9. 🟡 浏览器代理在 Wayland 下失败
- **Issue**: [#21983](https://github.com/google-gemini/gemini-cli/issues/21983)
- **标签**: P1 / Agent / Bug / 需重新测试
- **社区反应**: 4 条评论，1 👍
- **要点**: 浏览器子代理在 Wayland 环境下报错失败，已标记为需重新测试。环境兼容性问题影响 Linux 用户体验。

### 10. 🟡 浏览器代理忽略 settings.json 覆盖（如 maxTurns）
- **Issue**: [#22267](https://github.com/google-gemini/gemini-cli/issues/22267)
- **标签**: P2 / Agent / Bug / 需重新测试
- **社区反应**: 3 条评论
- **要点**: Browser Agent 完全忽略全局或项目级 `settings.json` 中的配置覆盖。虽然 `AgentRegistry` 正确读取并合并，但实际执行未生效。配置灵活性受损。

---

## 重要 PR 进展（Top 10）

### 1. 🟢 fix(core): 预览模型被静默替换时发出警告
- **PR**: [#28828](https://github.com/google-gemini/gemini-cli/pull/28828) — P1 / Agent / M 规模
- **作者**: chelsealong
- **内容**: 当用户请求预览模型（如 `gemini-3.1-pro-preview`）但账户无预览权限时，`Config` 当前会静默将模型改为 `auto-gemini-2.5`，无任何提示。此 PR 增加警告机制。修复 #28825。

### 2. 🟢 fix(core): 避免 401 子字符串导致的错误认证失败
- **PR**: [#28827](https://github.com/google-gemini/gemini-cli/pull/28827) — P2 / Core / S 规模
- **作者**: mikemikimike
- **内容**: 修复 `isAuthenticationError` 将包含 "401" 的无关注值（如端口号、退出码）误判为认证失败的问题。仅当 "401" 出现在消息开头或紧跟 HTTP/状态上下文时识别。修复 #28203。

### 3. 🟢 feat(evals): 任务跟踪器关系与错误恢复行为评估
- **PR**: [#28823](https://github.com/google-gemini/gemini-cli/pull/28823) — XL 规模
- **作者**: ved015
- **内容**: 新增针对任务图依赖（`tracker_add_dependency`）、任务图可视化（`tracker_visualize`）、文件路径 404 错误恢复、Shell 命令失败恢复的行为评估测试。

### 4. 🟢 feat(evals): 多工具链、上下文安全与安全边界评估
- **PR**: [#28824](https://github.com/google-gemini/gemini-cli/pull/28824) — L 规模
- **作者**: ved015
- **内容**: 新增多工具链执行工作流、大文件上下文安全处理、敏感文件/目录安全边界强制的行为评估。含新文件 `evals/multi_tool_chain.eval.ts`。

### 5. 🟢 feat(evals): 待办与任务跟踪器评估
- **PR**: [#28822](https://github.com/google-gemini/gemini-cli/pull/28822) — XL 规模
- **作者**: ved015
- **内容**: 新增对 `write_todos`（任务规划）、`complete_task`（任务完成信号）、`tracker_list_tasks` 和 `tracker_get_task`（状态查询）的行为评估。含新文件 `evals/write_todos.eval.ts`。

### 6. 🟢 fix(security): 修复 web-fetch 中 DNS 解析绕过的 SSRF 漏洞
- **PR**: [#28725](https://github.com/google-gemini/gemini-cli/pull/28725) — P2 / Security / M 规模
- **作者**: alifakbxr
- **内容**: 修复 `web-fetch` 工具中的严重 SSRF 漏洞（CVSS 8.6）。恶意用户可通过自定义域名指向私有/环回 IP（如 `169.254.169.254`）绕过 DNS 防护。修复 #28555。

### 7. 🟢 fix(security): 升级 Sandbox Dockerfile 至 node:22-slim
- **PR**: [#28726](https://github.com/google-gemini/gemini-cli/pull/28726) — P1 / Security / S+M 规模
- **作者**: alifakbxr
- **内容**: 将 Sandbox 及 `tools/caretaker-agent/cloudrun/*/Dockerfile` 从 `node:20-slim` 升级至 `node:22-slim`。Node 20 即将 EOL，不再接收安全修复。修复 #28584。

### 8. 🟢 fix(auth): 改进使用标准 API Key 时的 Vertex AI 401 错误提示
- **PR**: [#28679](https://github.com/google-gemini/gemini-cli/pull/28679) — P2 / Security / S 规模
- **作者**: SHAI-nikhil-chaudhary
- **内容**: 当用户使用 vertex-ai 认证类型但仅提供标准 Gemini API Key（无 Google Cloud 凭据）时，改进错误处理和开发者体验。

### 9. 🔴 fix(core): API Key 认证下预览模型 404 时回退到稳定模型
- **PR**: [#28608](https://github.com/google-gemini/gemini-cli/pull/28608) — P2 / Agent / M 规模
- **状态**: 已关闭（CLOSED）
- **内容**: 使用 Gemini API Key 认证时，`Config.initialize()` 假设所有 Key 都有预览模型权限。当项目无权限时发送 `gemini-3.1-pro-preview` 会收到 404。此 PR 实现回退策略。修复 #28600。

### 10. 🔴 chore: 将 .opencode 添加到 .gitignore
- **PR**: [#28769](https://github.com/google-gemini/gemini-cli/pull/28769) — XS 规模
- **作者**: love-be
- **内容**: 将 OpenCode IDE 生成的 `.opencode` 目录加入 `.gitignore`，防止误提交。此外 [#28831](https://github.com/google-gemini/gemini-cli/pull/28831) 为今日夜间版本自动版本号升级 PR。

---

## 功能需求趋势

| 趋势方向 | 代表 Issues | 说明 |
|---------|------------|------|
| **Agent 治理与安全** | #22672（阻止破坏性行为）、#26525（确定性脱敏）、#28725/#28726（SSRF/依赖安全） | 社区对模型误用 `git reset`/`--force`、敏感信息泄露及安全漏洞高度关注 |
| **行为评估体系化** | #24353（组件级评估 EPIC）、PR #28822/#28823/#28824 | 团队正大量投入行为评估测试，覆盖任务规划、错误恢复、多工具链和安全边界 |
| **AST 感知的代码理解** | #22745（EPIC）、#22746（AST CLI 工具调研） | 探索通过 AST 实现更精确的文件读取、方法边界定位和代码库映射，减少 token 噪声 |
| **Auto Memory 可靠性** | #26516（记忆系统质量）、#26522（无限重试）、#26523（无效补丁隔离）、#26525（脱敏） | 系列问题聚焦记忆提取过程中的重试逻辑、补丁质量控制和敏感数据保护 |
| **AI 自我认知改进** | #21968（主动使用 skills）、#21432（Agent 对自身 CLI 参数/热键的认知） | 社区希望 Gemini 能更主动地利用自定义技能并准确理解自身机制 |
| **可观测性与诊断** | #11802（OTLP headers）、#22598（子代理轨迹可分享）、#21763（Bugreport 含子代理上下文） | 对遥测配置、子代理执行轨迹可视化和诊断信息完整性的需求 |
| **浏览器代理健壮性** | #22232（会话接管与锁恢复）、#22267（settings.json 覆盖生效）、#21983（Wayland 失败） | 浏览器子代理在配置覆盖、环境兼容和故障恢复方面存在明显短板 |
| **工具扩展与上下文管理** | #24246（>128 工具 400 错误）、#23571（临时脚本散落）、#22465（vite 交互提示卡住） | 工具数量上限、临时文件管理和交互式命令处理是实际使用中的高频痛点 |

---

## 开发者关注点

1. **子代理可靠性是最大痛点**：MAX_TURNS 误报成功（#22323）、通用代理无响应挂起（#21409）、子代理无权限自动启用（#22093）等问题集中暴露了代理执行链路的不稳定性。受影响用户建议临时禁用子代理规避。

2. **配置不生效问题多发**：浏览器代理忽略 `settings.json` 覆盖（#22267）、代理不按配置禁用却自动启用（#22093），配置声明与实际行为不一致严重削弱用户对 CLI 的控制力。

3. **模型选择与认证的透明度不足**：预览模型被静默替换为其他模型（PR #28828 动机）、API Key 无预览权限时遭遇难以理解的 404（PR #28608），用户希望在模型降级/失败时获得明确提示。

4. **安全与隐私意识强烈**：SSRF 漏洞（CVSS 8.6）修复、Node 20 EOL 升级、Auto Memory 在内容进入模型上下文后才进行脱敏的设计质疑（#26525）——开发者对安全边界和敏感数据处理时机高度敏感。

5. **新增行为评估测试成主流贡献方向**：PR #28822/#28823/#28824 连续提交大量行为评估（evals），表明社区通过测试用例驱动代理行为改进的模式正在形成。

6. **错误信息与诊断质量待提升**：401 误判（#28203 相关 PR）、Shell 执行后假死（#25166）、Bugreport 缺少子代理上下文（#21763）——开发者需要更精确、可操作的错误提示和更完整的诊断信息。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报 — 2026-08-16

## 今日速览

过去24小时内 Copilot CLI 仓库无新版本发布，但 Issue 和 PR 讨论活跃。核心焦点集中在 **Atlassian MCP OAuth 认证回归**（已在 1.0.79 和 1.0.80 连续出现）、**Windows 平台 OOM 崩溃**以及 **NixOS 上 Bash 工具失效**三个稳定性问题上。此外，MCP 初始化握手超时不可配置、BYOK 模式破坏提示缓存等基础设施问题也获得了较高关注。

---

## 社区热点 Issues（Top 10）

1. **NixOS 上 Bash 工具破裂（#3392）** — 版本 >=1.0.49 起，NixOS 上 agent 执行任何命令均报 `Failed to start bash process`，strace 显示可能是进程启动路径问题。9 👍，4 评论，已持续近三个月，为当前最受关注的历史遗留问题。
   🔗 [Issue #3392](https://github.com/github/copilot-cli/issues/3392)

2. **Atlassian MCP OAuth 失败（#4480，已关闭）** — 1.0.79 起连接 Atlassian 远程 MCP 服务器时 OAuth 发现流程报 RFC 8414 §3.3 不兼容错误，1.0.71 时正常。6 👍，4 评论，已标记 CLOSED，但下一条显示 1.0.80 仍在复发。
   🔗 [Issue #4480](https://github.com/github/copilot-cli/issues/4480)

3. **Atlassian MCP OAuth 在 1.0.80 再次失效（#4490）** — 与 #4480 相同错误，用户明确表示 1.0.78 正常、1.0.80 失败。认证回归在连续两个版本中未彻底修复，值得紧盯。
   🔗 [Issue #4490](https://github.com/github/copilot-cli/issues/4490)

4. **Windows 平台 OOM 崩溃 `Committing semi space failed`（#4499）** — v1.0.79 在长时间 autopilot 会话中崩溃，崩溃时 V8 堆仅用 607 MB / 4.3 GB，判定为宿主内存提交失败而非堆上限。Windows 上长期会话稳定性隐患。
   🔗 [Issue #4499](https://github.com/github/copilot-cli/issues/4499)

5. **MCP initialize 握手固定 60s 超时且无重试（#4421）** — 硬编码 60 秒预算，npx 启动的 stdio 服务器约 29% 会话初始化失败后永不重试。对重度 MCP 用户影响面广。
   🔗 [Issue #4421](https://github.com/github/copilot-cli/issues/4421)

6. **CI 中 MCP 注册表策略返回 403（#4346，已关闭）** — GitHub Actions 中使用内置 `GITHUB_TOKEN` 认证时，MCP 注册表策略获取返回 403，导致所有非默认 MCP 服务器在 CI 中被阻断。影响 CI 自动化用户。
   🔗 [Issue #4346](https://github.com/github/copilot-cli/issues/4346)

7. **Task 工具静默降级子代理模型（#3565，已关闭）** — 当请求模型成本倍率高于会话模型时，frontmatter 和显式 `model` 覆盖均被忽略，静默降级为会话模型。模型行为与预期不符，影响按需使用高端模型的用户。
   🔗 [Issue #3565](https://github.com/github/copilot-cli/issues/3565)

8. **`/spawn` 模板自相矛盾，可导致跨会话写入（#4491）** — 展开后的提示词同时要求"创建子会话"和"复用现有会话"，可能静默演变为向无关运行中会话注入上下文，且无审批门槛。安全风险值得关注。
   🔗 [Issue #4491](https://github.com/github/copilot-cli/issues/4491)

9. **Codespaces 内置 1.0.3 且 `copilot update` 失败（#4501）** — 新 Codespace 预装 1.0.3，`copilot update` 需 `sudo` 才能替换 `/usr/local/bin/copilot`，普通用户无法完成升级。开发者体验相关隐患。
   🔗 [Issue #4501](https://github.com/github/copilot-cli/issues/4501)

10. **`/restart` 在 `-w` 会话中失败（#4493）** — v1.0.80 中，worktree 会话执行 `/restart` 时 worktree 选项与已有会话 ID 冲突，无法恢复会话。影响常用 `-w` 模式的用户。
    🔗 [Issue #4493](https://github.com/github/copilot-cli/issues/4493)

---

## 重要 PR 进展

过去 24 小时仅 2 条 PR 更新，均为维护性修复：

1. **处理 fork PR 关联缺失（#4497，OPEN）** — 更新 invalid-label 写入器，当 GitHub 未填充 PR 关联时，基于可信工作流运行元数据搜索并要求恰好一个开放 PR 匹配，避免 fork PR 工作流被误处理。
   🔗 [PR #4497](https://github.com/github/copilot-cli/pull/4497)

2. **迁移 PR 自动化远离 `pull_request_target`（#4449，CLOSED）** — 将 invalid-label 自动化从 `pull_request_target` 迁移至 issue-scoped 直写 token + 无权限 `pull_request` 信号，保留 issue/PR 关闭行为的同时降低权限风险。此 PR 优化了仓库安全姿态。
   🔗 [PR #4449](https://github.com/github/copilot-cli/pull/4449)

---

## 功能需求趋势

1. **MCP 生态深化** — 多处诉求指向 MCP 相关能力：`contextTier` 作为会话配置项暴露（#4275）、MCP 注册表在 CI 中正常工作（#4346）、握手超时可配置且支持重试（#4421）。MCP 从"能连"走向"稳定、可配置、可运维"阶段。

2. **新模型 / 参数支持** — 两个直接需求：支持 GPT-5.6 `reasoning.mode` 参数选 "pro"（#4495）；新启用模型需清除本地缓存才能生效的问题（#4494），说明用户期待更快的模型目录刷新和新模型参数的跟上速度。

3. **OTLP 协议完整性** — 要求支持 protobuf OTLP 导出的请求（#2934，已关闭）表明 OpenTelemetry 用户期望标准协议覆盖，而非仅限 JSON。

4. **会话生命周期管理** — `Done` 后无法取消归档（#4502）、`/restart` 在 worktree 模式下失效（#4493），反映对会话状态的精细控制需求。

5. **BYOK / 非交互场景效率** — BYOK 模式 autopilot 补全轮重建已发送的 transcript 项、破坏提示缓存（#4500），说明 BYOK 用户对 token 成本和缓存效率敏感。

---

## 开发者关注点

1. **Atlassian MCP 认证连续回归是最大痛点** — 1.0.79（#4480）和 1.0.80（#4490）连续两个版本内 OAuth 发现逻辑均与 RFC 8414 §3.3 冲突，而 1.0.71/1.0.78 正常。此类"改一次坏一次"的回归动摇了用户的升级信心。

2. **平台特定稳定性成为升级顾虑** — NixOS Bash 工具失效（#3392）与 Windows 长时间 autopilot OOM（#4499）均非小概率问题，开发者可能在非主流平台上被迫滞留旧版本。

3. **MCP 初始化 "一次失败终身失败" 是高频抱怨** — 60 秒硬超时 + 无重试的设计（#4421）使 npx 类 stdio 服务器在慢环境中极脆弱，用户明确希望超时可配置 + 退避重试。

4. **CI 场景的认证差异化** — GITHUB_TOKEN 下的 MCP 注册表 403（#4346）表明官方文档推荐的"无 PAT"方案在实际 CI 中并未完全打通，配置文档与实际行为存在偏差。

5. **会话与模型行为不符合直觉** — 模型静默降级（#3565）与 `/spawn` 模板误导（#4491）均属"文档之外的行为"，用户更希望显式报错或提供审批门，而非让 agent 自行选择破坏性路径。

6. **环境配置维护成本** — Codespaces 预装 1.0.3 + 需 sudo 更新（#4501）与新模型需手动清缓存（#4494）均指向"安装-更新-生效"链路仍需打磨。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报 — 2026-08-16

## 今日速览

今日无新版本发布，社区焦点集中在两大议题：一是用户通过仪表化数据报告订阅配额（Vivace 档位）周限额疑似被静默缩减 3–5 倍，引发对条款变更与计量回归的质疑；二是多位用户围绕 1M token 上下文窗口下的配额感知压缩策略展开讨论。此外，一条已关闭的 `openai_legacy` 提供商推理内容丢失问题被重新激活，获得社区关注。

---

## 社区热点 Issues

### 1. 订阅配额疑似被静默缩减（⚠️ 高热度）
**[#2604] Effective weekly allowance appears reduced ~3–5× without announcement — instrumented before/after data. Terms change, or metering regression?**
- 作者：tobiu | 创建：2026-08-15 | 更新：2026-08-15 | 评论：2
- [GitHub 链接](https://github.com/MoonshotAI/kimi-cli/issues/2604)

**摘要**：Vivace 档位订阅用户自 7 月中旬起使用 agentic 编码工作负载，通过客户端 wire-level JSONL 账本（直接探测 API 调用）逐日记录原始 token 量（新输入 + 缓存读取 + 输出）。实测数据显示每周有效配额相较此前缩减约 3–5 倍，且无任何官方公告。作者提出两个可能原因：服务条款变更，或计量回归（metering regression）。

**为什么重要**：这是当前社区最敏感的议题——若确认为条款变更，涉及对既有订阅用户的契约违约问题；若为计量回归，则直接影响所有依赖 CLI 进行大规模 agentic 开发的用户成本。仪表化数据方法也为后续排查提供了可复现的参照路径。2 条评论中用户普遍表达关注，建议作者补充会员等级、时间区间等细节以便官方复现。

---

### 2. Memory 系统功能请求（长期高热，40+ 评论）
**[#1283] [enhancement] Feature Request: Memory System - Persistent context across sessions**
- 作者：CatKang | 创建：2026-02-27 | 更新：2026-08-15 | 评论：40
- [GitHub 链接](https://github.com/MoonshotAI/kimi-cli/issues/1283)

**摘要**：请求实现全面的 **Memory System**，使 Kimi Code CLI 跨会话记住有用上下文、项目模式与用户偏好。包含两大模块：自动记忆（AI 管理的笔记）与手动记忆（用户自定指令）。

**为什么重要**：这是当前开放时间最久、讨论最热烈的功能需求之一（40 条评论）。持续近 6 个月仍保持活跃更新，说明社区对跨会话持久化的诉求长期未被满足。该能力对于将 CLI 从"单次对话工具"升级为"长期协作伙伴"具有决定性意义，且与当前 agentic coding 工作流高度耦合。

---

### 3. 配额感知的上下文压缩策略（⚡ 当日新增）
**[#2603] Quota-aware compaction: on subscription plans, context compaction should trigger on a token budget, not only near the model's max context window**
- 作者：salim4n | 创建：2026-08-15 | 更新：2026-08-15 | 评论：0
- [GitHub 链接](https://github.com/MoonshotAI/kimi-cli/issues/2603)

**摘要**：Kimi Code 仅在对话接近模型最大上下文窗口时才触发压缩。在 K3 的 1M token 窗口（`max_context_size = 1048576`）与默认 `reserved_context_size = 50000` 配置下，真实会话中压缩机制几乎永远不会触发。每次 agentic 任务都会消耗大量 token 却无压缩保护。

**为什么重要**：该问题直接回应了 #2604 所暴露的配额缩减焦虑——社区已开始从"被动等待官方答复"转向"主动在客户端通过压缩减少 token 消耗"。1M token 巨窗反而成为配额管理的负担，这是一个反直觉但真实的工程矛盾。

---

### 4. openai_legacy 提供商推理内容丢失问题重新激活（⚠️ 需关注）
**[#1155] openai_legacy provider drops reasoning content, causing APIEmptyResponseError**
- 作者：rongou | 创建：2026-02-14 | 更新：2026-08-15 | 评论：0
- [GitHub 链接](https://github.com/MoonshotAI/kimi-cli/issues/1155)

**摘要**：使用 OpenAI 兼容服务器（如 sglang 或 vllm）时，若推理/思考内容被分离到独立响应字段，`openai_legacy` provider 会因 `reasoning_key` 未传入 `OpenAILegacy` 构造函数而丢弃全部推理内容，进而触发 `APIEmptyResponseError`。

**为什么重要**：该 Issue 创建于 2 月，今日被重新更新（状态仍为已关闭），但说明在自托管/第三方推理引擎场景下该问题仍有影响。对依赖 sglang/vllm 等替代后端的开发者而言，推理内容丢失意味着复杂任务链路的断裂。社区建议关注 #2524 等相近修复的走向。

---

*注：剩余 3 条 Issue 为 2026-08-15 前创建、今日无更新的历史条目（如 #1283 已涵盖），未重复列举。*

---

## 重要 PR 进展

### 1. StrReplaceFile 链式编辑计数修复（核心修复）
**[#2524] fix(tools): count StrReplaceFile replacements against the running content**
- 作者：Sreekant13 | 创建：2026-07-20 | 更新：2026-08-15 | 状态：OPEN
- [GitHub 链接](https://github.com/MoonshotAI/kimi-cli/pull/2524)

**相关 Issue**：#2526

**内容**：`StrReplaceFile` 当前按顺序应用编辑，但报告的重替换次数基于**原始**文件内容计算。当链式编辑中某个 `old` 字符串由前一次编辑产生时，它在原始内容中不存在，导致计数不准确。

**重要性**：该 PR 直接修复了工具编辑计数的正确性问题，影响所有依赖 `StrReplaceFile` 的自动化编辑场景（如 agentic 多步修改）。计数错误可能引发误报或漏报，进而干扰上层逻辑判断。

---

### 2. kosong 模块循环引用错误提示（代码健壮性）
**[#2506] fix(kosong): raise a clear error on circular $ref in deref_json_schema**
- 作者：Sreekant13 | 创建：2026-07-18 | 更新：2026-08-15 | 状态：CLOSED
- [GitHub 链接](https://github.com/MoonshotAI/kimi-cli/pull/2506)

**内容**：`kosong.utils.jsonschema.deref_json_schema` 会内联所有本地 `$ref` 并递归遍历目标。当 JSON Schema 存在循环引用时，当前行为是无限递归直至栈溢出。该 PR 新增了循环引用检测，抛出清晰错误信息。作者自述为小型自包含 bug 修复，代码量低于 100 行。

**重要性**：JSON Schema 循环引用在复杂配置中并不罕见。将栈溢出（难以定位的运行时崩溃）替换为描述性错误，显著提升可观测性与调试效率。虽已关闭，但该修复质量值得关注。

---

*注：其余 PR 为更早创建、今日无显著更新的条目，已按重要性筛选以上 2 条。*

---

## 功能需求趋势

从全部 Issue 数据中可提炼以下社区关注方向：

1. **跨会话持久记忆** (#1283)：自动记忆 + 手动指令双模式的长效上下文保持，40+ 评论热度持续不减，为当前第一优先级需求。

2. **配额感知与 Token 成本管控**（#2604、#2603）：用户不再满足于硬性限额，期望 CLI 主动感知配额预算（token budget），在达到模型窗口上限**之前**即触发压缩、裁剪等降耗策略。与订阅制计费模式深度绑定。

3. **外部推理引擎兼容性补强**（#1155）：sglang/vllm 等自托管推理服务器的适配问题长期存在，`reasoning` 内容分离字段的处理逻辑需要完善。

4. **计量透明化与可观测性**（#2604）：用户趋向于自建 instrumentation（如 wire-level JSONL 账本）来审计服务端计量行为，对官方透明度和可验证性提出更高要求。

---

## 开发者关注点

- **配额被静默缩减的恐慌情绪**：仪表化数据显示 Vivace 档周配额锐减 3–5 倍而官方无公告，直接引发对"定价模型变更不透明"的根本性质疑。开发者要求官方提供计量基准、历史数据对比接口，并明确是否调整了条款。
- **1M 大窗与配额管理的矛盾**：136K 可用上下文与 1M 总窗口之间严重失衡，压缩策略滞后导致 token 消耗不可控。开发者期望压缩触发条件从"窗口上限"改为"配额预算"。
- **对第三方推理栈的容忍度低**：`openai_legacy` 的推理内容丢失问题经历数月未被修复，说明官方对非 moonshot 推理引擎的适配优先级偏低，但这部分开发者（自托管、私有化部署）对生态的长期信心高度依赖此类修复的响应速度。
- **链式编辑的可靠性诉求**：自动化编辑链路中的计数准确性直接影响 agentic 工作流的可预测性，开发者期望所有工具类操作在状态更新上做到"所见即所得"。

---

*日报基于 2026-08-15 日更新数据生成。所有 Issue 与 PR 均附原始 GitHub 链接，可直接跳转追踪。*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 — 2026-08-16

## 今日速览

今日社区活跃度较高，共 50 条 Issue 和 50 条 PR 更新。核心焦点集中在：**OpenCode Go 订阅计费异常与 grok-4.5 服务端错误**等付费服务稳定性的高频投诉；**event 表无限增长导致数据库膨胀至 13GB+** 的严重性能问题继续发酵；同时，围绕**会话预算限制、Docker/Incus 工作区、事件持久化**等新特性的 PR 正在密集推进。值得注意的是，多个 PR 因 "needs:compliance" 标签被关闭，同时自动化清理机器人也在批量关闭陈旧 PR。

## 社区热点 Issues（Top 10）

1. **[#33356] [2.0] event 表无限增长：opencode.db 膨胀至 13GB+（无保留/压缩机制）** — 评论 19，👍 5
   长期运行的实例中，事件溯源 `event` 表从未被清理或压缩，两台实例的数据库已膨胀至 ~13GB，几乎占满 22GB 磁盘。这是严重的存储泄漏问题，直接影响长期用户的磁盘空间。
   [链接](https://github.com/anomalyco/opencode/issues/33356)

2. **[#37790] [BUG] OpenCode Go 订阅扣款成功但工作区显示“余额不足”** — 评论 14
   Stripe 付款已成功，但工作区仍报 "Insufficient balance" 导致无法使用付费服务。典型的付费流程一致性 bug，直接影响付费用户体验。
   [链接](https://github.com/anomalyco/opencode/issues/37790)

3. **[#24879] [FEATURE] Go Pro 档位（$20）+ Share 修饰符首月折扣** — 评论 11，👍 11
   用户抱怨 Go 月度额度用完后的唯一备选 Zen 按量付费难以预算，希望推出更高档位和首月折扣。高赞功能需求，反映社区对定价灵活性的需求。
   [链接](https://github.com/anomalyco/opencode/issues/24879)

4. **[#42143] 官网声称 100% 免费，为什么要求我订阅？** — 评论 10
   关于定价透明度的困惑，官方宣称免费与实际要求订阅之间存在落差，影响新用户信任度。
   [链接](https://github.com/anomalyco/opencode/issues/42143)

5. **[#7801] [FEATURE] Plan Mode + Question 工具可自动切换到 Build 模式** — 评论 10，👍 31
   用户希望 Plan 模式在调用 Question 工具后能自动切换回 Build 模式。今日最高赞功能请求（31 👍），反映社区对模式切换流畅度的强烈需求。
   [链接](https://github.com/anomalyco/opencode/issues/7801)

6. **[#40206] grok-4.5 在 opencode go 自 8 月 2 日起持续报错** — 评论 9（已关闭）
   grok-4.5 调用自 8 月 2 日起一直返回 500 错误。该 issue 今日关闭，**点击查看 #42802 确认服务端已恢复**。
   [链接](https://github.com/anomalyco/opencode/issues/40206)

7. **[#27924] bug(session)：压缩失败时无限压缩循环** — 评论 8
   `prompt.ts` 中的会话循环可能进入无限压缩：溢出检测 → 压缩 → 仍溢出 → 再压缩。上下文超限且压缩无法减量时引发死循环，影响长会话稳定性。
   [链接](https://github.com/anomalyco/opencode/issues/27924)

8. **[#35649] Kitty 终端中跨行链接不可点击** — 评论 5
   长 URL 换行后失去可点击性（OSC 8 超链接渲染问题）。同类问题 #42805 今日已关闭。
   [链接](https://github.com/anomalyco/opencode/issues/35649)

9. **[#37671] [2.0] v2 CLI：无头命令加载 OpenTUI 并泄漏原生临时文件** — 评论 2，👍 2
   `--version`、`--help` 等无 TUI 渲染的命令仍加载 OpenTUI 原生库，每个进程在临时目录泄漏 13.1 MiB 的 `libopentui.so`。接口诊断类命令的磁盘泄漏问题。
   [链接](https://github.com/anomalyco/opencode/issues/37671)

10. **[#38598] Deepseek V4 FLASH（FREE）在 1.18.4 更新后任务无法完成** — 评论 3，👍 3
    更新至 1.18.4 后 deepseek v4 flash（免费）模型变“懒惰”，忽略简单请求且无法完成任务。模型行为回归，引发社区关于 DeepSeek API 计费的关联讨论（#32911）。
    [链接](https://github.com/anomalyco/opencode/issues/38598)

## 重要 PR 进展（Top 10）

1. **[#42840] fix(cli): 暴露持久化事件存储** — 新增
   将 `OPENCODE_EVENTS_PERSIST=1` 映射到 CLI 管理的 `ServerOptions.events.persist` 设置。修复事件持久化配置无法从 CLI 启用的缺陷。
   [链接](https://github.com/anomalyco/opencode/pull/42840)

2. **[#42823] feat(opencode): 添加每会话预算限制**（已关闭）— 新增
   新增可选的每会话消费预算，达到限额后自动停止助手。包含新 `budget` 字段、存储列与 DB 迁移（`20260812223059_session_budget`），`PATCH /session/:id` 支持设置/清除预算。
   [链接](https://github.com/anomalyco/opencode/pull/42823)

3. **[#42824] feat(app): 添加语音输入和会话预算 UI**（已关闭）— 新增
   在提示输入框新增麦克风按钮，支持连续语音转文字；同时新增会话预算面板。基于现有 `getSpeechRecognitionCtor` 运行时适配器实现，兼容浏览器与桌面端。
   [链接](https://github.com/anomalyco/opencode/pull/42824)

4. **[#42831] feat(core): 添加 Docker blueprint 工作区**（已关闭）— 新增
   新增基于不可变 blueprint 快照的本地 Docker 工作区提供者，opencode 协调器和模型循环保持在工作区容器之外。支持 SDK Next 工作区分叉、子代理隔离容器、空闲容器停止与按需唤醒。
   [链接](https://github.com/anomalyco/opencode/pull/42831)

5. **[#42829] feat(core): 添加 Incus 工作区分叉**（已关闭）— 新增
   为容器或 VM blueprint 添加 Incus 后端工作区提供者，支持基于快照的工作区分叉并通过 SDK Next 暴露。与 #42831 共同指向 V2 工作区架构的容器化方向。
   [链接](https://github.com/anomalyco/opencode/pull/42829)

6. **[#42826] fix(core): 批量推送流式会话增量**（已关闭）— 新增
   服务端当前将 provider 的每个文本/推理/工具输入片段都作为独立公共事件发布。实测平均推送的增量数据过多，此 PR 实现批量合并，显著降低事件推送频率与负载。
   [链接](https://github.com/anomalyco/opencode/pull/42826)

7. **[#42811] [contributor] feat(session): 添加已读状态** — 新增
   将未读状态从各 TUI 的本地 tab 文件迁移到 Session 本身的 `viewed` 字段，解决多客户端未读状态不一致问题。将注意力状态从客户端特性升级为 Session 的事实属性。
   [链接](https://github.com/anomalyco/opencode/pull/42811)

8. **[#42836] fix(acp): 新会话优先使用默认 agent 的模型而非配置默认值** — 新增
   `session/new` 通过 `selectDefaultModel(snapshot)` 解析默认模型，读的是配置的默认模型，而非默认 agent 的模型。此 PR 修复 ACP 会话创建的模型选择逻辑。
   [链接](https://github.com/anomalyco/opencode/pull/42836)

9. **[#42832] fix(plugin): 限定 Promise 事件迭代器作用域** — 新增
   将 Promise 事件适配器中无主的 `Stream.toAsyncIterable` 桥替换为每个异步迭代器独立的子 Effect 作用域和 scoped 队列，防止缓冲事件在取消后泄漏出作用域。
   [链接](https://github.com/anomalyco/opencode/pull/42832)

10. **[#42833] fix(session-ui): 防止移动端变体选择重叠** — 新增
    修复 v2 提示输入中推理强度（variant）选择器在 320-390px 窄视口下与发送按钮重叠的问题，Closes #42834。
    [链接](https://github.com/anomalyco/opencode/pull/42833)

## 功能需求趋势

从今日 Issue 与 PR 中可提炼出以下社区核心关注方向：

- **定价与订阅灵活性（最热）**：多起付费问题（Go 余额不同步 #37790、grok-4.5 服务故障 #40206/#40886/#42802、免费声明争议 #42143）与定价档位需求（#24879，👍 11）表明，商业模式透明度与稳定性是社区当前最大痛点，直接影响信任度。
- **工作区/沙箱架构演进（V2 方向）**：Docker（#42831）与 Incus（#42829）工作区提供者、快照分叉与子代理隔离，显示 V2 正积极推进容器化工作区架构。
- **会话管理与状态控制**：会话预算限制（#42823/#42824）、已读状态（#42811）、批量流式增量（#42826）、事件持久化（#42840）等 PR 集中落地，会话生命周期管理正在系统化完善。
- **本地/私有部署与模型支持**：LAN 本地模型自动发现（#27554）、Poe/Bedrock 提供者回归（#42818）、GLM 的 `reasoningToggle()` 支持缺失（#42793）、Deepseek 稳定性（#38598/#32911），多渠道模型接入的兼容性需求持续增长。
- **UI/UX 打磨**：Plan/Build 模式自动切换（#7801，👍 31 为今日最高赞）、移动端布局修复（#42833）、语音输入（#42824），交互流畅度与移动体验是持续优化方向。
- **性能与稳定性**：event 表无限增长（#33356）、虚拟化时间线 DOM 节点泄漏（#42825）、无限压缩循环（#27924）、SSE 丢失（#37156），长会话下的资源管理与稳定性问题频发。

## 开发者关注点

- **存储与资源泄漏**：event 表无保留/压缩机制导致 DB 无限膨胀（13GB+）是最严重的资源问题；另有 OpenTUI 原生库在无头模式下泄漏临时文件（每个进程 13.1 MiB）、渲染器保留约 37,500 个脱离的 DOM 节点（#42825）。
- **付费服务稳定性**：Go 订阅余额不同步、grok-4.5 连续多日 500/503 错误、官网宣称免费却要求订阅，这类问题消耗用户信任，且涉及多模型（grok/deepseek）与多提供者（Go/Zen/Poe）。
- **会话可靠性**：无限压缩循环、SSE 事件在 bwrap PID 命名空间下丢失、fetch 失败需重启才能恢复（#42329）、"Endpoint is unavailable" 重试失败等，直接影响日常使用的稳定性与连续性。
- **多终端/多客户端一致性**：未读状态在多个 TUI 客户端间不同步、跨行链接不可点击（Kitty 终端）、项目目录移动后路径未更新、tui.json 禁用鼠标后滚轮行为异常等，跨环境体验的一致性问题频繁出现。
- **事件推送性能**：每个文本/推理/工具输入片段独立发布为公共事件，实测平均推送密度过高、亟待批量化处理（#42826），反映长对话高负载场景下的性能瓶颈。

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报 — 2026-08-16

## 1. 今日速览

今日 Pi 项目无新版本发布，但社区活跃度极高：过去 24 小时内共有 38 条 Issue 与 14 个 PR 更新。核心焦点集中在**上下文压缩（auto-compaction）可靠性**、**DeepSeek V4 Flash 的 thinking level 支持**，以及 **Mermaid 图表渲染升级**上。多个关于 compaction 崩溃和消息序列损坏的 bug 正在被积极修复。

---

## 2. 社区热点 Issues

### 🔥 高热度（评论 ≥ 5）
**#6879 — [OPEN] auto-compaction 在上下文超过 100% 后仍不触发，直到 provider 溢出**
作者: alexanderkreidich | 评论: 21 | 👍: 17
这是一个引发广泛共鸣的严重 bug：一次 agentic turn 运行超 2 小时，context 已超过 100% 阈值但 compaction 始终未触发，直到 API 在 373k token 处拒绝请求。用户建议在每次 agent 步骤后都检查 context 用量。17 个 👍 表明这是当前社区最关切的稳定性问题之一。
🔗 https://github.com/earendil-works/pi/issues/6879

**#6187 — [CLOSED] Pi 在 WSL 中登录挂起（GitHub Copilot device authorization 后）**
作者: makoit | 评论: 27
安装成功后浏览器端设备授权已完成显示注册，但 WSL 终端中的 pi 客户端检测不到授权完成，一直挂起等待登录。共 27 条评论说明此问题影响面较广，已关闭说明可能已有解决方案。
🔗 https://github.com/earendil-works/pi/issues/6187

**#7855 — [CLOSED] Pi 随机报错 "Response was truncated before completion."**
作者: rolznz | 评论: 5
使用任意 OpenAI 兼容 API（本地 VLLM 测试可复现）时随机出现响应截断报错，用户需手动提示继续。该问题已标记为 no-action 关闭。
🔗 https://github.com/earendil-works/pi/issues/7855

**#7765 — [CLOSED] 全屏 TUI 鼠标滚轮步长硬编码为 1 行，不可配置**
作者: OldSuns | 评论: 5
`pi-tui` 的 `TuiAltScreen` 中滚轮滚动步长被写死为 1 行。功能请求虽小但代表了 5 位用户的共性需求。
🔗 https://github.com/earendil-works/pi/issues/7765

**#8105 — [CLOSED] Codex 将可选工具参数序列化为必填（gpt-5.6-sol）**
作者: slicenferqin | 评论: 4
`openai-codex-responses` 以 `strict: null` 序列化工具，导致 gpt-5.6-sol 将可选参数当作必填处理，强制调用方提交每个属性。属于模型兼容性关键问题。
🔗 https://github.com/earendil-works/pi/issues/8105

**#4776 — [CLOSED] 增加 shell 补全脚本生成器**
作者: cad0p | 评论: 4 | 👍: 5
提议添加 `pi completion <bash|zsh|fish>` 子命令，输出补全脚本到 stdout。5 个 👍 表明这是一个被广泛期待的功能。
🔗 https://github.com/earendil-works/pi/issues/4776

### 📌 新提交/关键 Bug（当日更新）
**#8171 — [CLOSED] TUI：固定高度可滚动 thinking 块 + 完成后自动折叠**
作者: Arteiimis
建议通过 `thinkingMaxHeight` 设置限制可见 thinking 块高度，超出部分内部滚动，而非撑开 transcript。
🔗 https://github.com/earendil-works/pi/issues/8171

**#8170 — [CLOSED] Windows：bash 工具可通过 taskkill /F /IM node.exe 杀死自身宿主**
作者: 0verme
Pi 内置 bash 工具执行了模型生成的 `taskkill /F /IM node.exe` 命令，直接杀死了 pi-web 宿主进程。这是安全边界问题。
🔗 https://github.com/earendil-works/pi/issues/8170

**#8028 — [OPEN] TUI fullRender 在输出超过 V8 字符串限制时崩溃（RangeError）**
作者: runthesim
处理大量图片帧的视频制作 agent 触发 `RangeError: Invalid string length`，进程直接退出。
🔗 https://github.com/earendil-works/pi/issues/8028

**#8168 — [CLOSED] Compaction + session restore 破坏 tool-result role → 422 错误**
作者: Phoenix0531-sudo
自动压缩后工具密集回合的下一次请求返回 422 `"Input should be <ChatMessageRole.TOOL: 'tool'>"`，表明压缩过程可能损坏了消息 role 序列。
🔗 https://github.com/earendil-works/pi/issues/8168

---

## 3. 重要 PR 进展

**#8158 — [OPEN] feat(coding-agent): 升级 Mermaid 终端渲染**
作者: xl0
关闭 #8157 和 #7832，将 `grok-mermaid` 迁移到 `lovely-mermaid`（一个更完善的渲染器，解析器质量更高）。同日另有 PR #7984 将 grok-mermaid 更新到 0.2.3（已关闭）。
🔗 https://github.com/earendil-works/pi/pull/8158

**#8181 — [CLOSED] fix(ai): 为 opencode/opencode-go 上的 DeepSeek V4 Flash 开放 low thinking level**
作者: tianshuang
修复 `DEEPSEEK_V4_FLASH_THINKING_LEVEL_MAP` 仅应用于 `deepseek/deepseek-v4-flash` 的问题，使 opencode 与 opencode-go 提供方也能使用 `low` 推理等级。对应 Issue #8182。
🔗 https://github.com/earendil-works/pi/pull/8181

**#8153 — [CLOSED] fix: 在安全的 turn 边界执行压缩（compaction at safe turn boundaries）**
作者: adnichols
新增 run-scoped 边界压缩请求 API，在完整 turn 之间消费。修复了压缩可能中断进行中 turn 的问题。
🔗 https://github.com/earendil-works/pi/pull/8153

**#8164 — [CLOSED] fix(agent-session): 绝不在尾部 assistant 消息上继续（压缩崩溃修复）**
作者: sebbuntu
静默溢出压缩在已完成 turn（stopReason 'stop'）上重试 `agent.continue()` 导致崩溃。修复为：仅在 turn 中途被拒绝（stopReason 'error'）时重试。
🔗 https://github.com/earendil-works/pi/pull/8164

**#8165 — [CLOSED] fix(coding-agent): tokens.total 仅计费 token（排除 cacheRead/cacheWrite）**
作者: sebbuntu
`getStats` 的 tokens.total 包含了缓存 token（按 1/120 输入费率计费），导致压缩预算和状态统计失真。修后 total = input + output，缓存单独报告。
🔗 https://github.com/earendil-works/pi/pull/8165

**#8155 — [OPEN] fix(tui): 渲染期间不重置光标闪烁**
作者: muyiyr
修复流式输出时输入框光标疯狂闪烁的问题（对应 Issue #8003），在 `TuiBase` 中跟踪终端光标可见性，仅在状态转换时发送可见性命令。
🔗 https://github.com/earendil-works/pi/pull/8155

**#8146 — [CLOSED] fix(ai): 将 Baseten DeepSeek V4 Flash 输出上限设为 384k tokens**
作者: white-hat
models.dev 报告 1,048,576 token 输出上限，但 Baseten 实际只支持 384k。超过即失败，此 PR 在 `safetensors` 层将 maxTokens 限制为 384,000。
🔗 https://github.com/earendil-works/pi/pull/8146

**#8151 — [CLOSED] fix(extensions): 包含 widget 渲染失败并在失效时清理 ctx 拥有的 widget**
作者: tryingET
第三方扩展 `@marckrenn/pi-sub-bar` 在 `/reload` 后 widget 注册存留但 runner 失效，render 中引用失效 ctx 导致崩溃。
🔗 https://github.com/earendil-works/pi/pull/8151

**#8174 — [CLOSED] fix(coding-agent): 对重复的 ambiguous length 停止使用中性措辞**
作者: doriangironde
修复第二个可恢复的 `length` 停止耗尽压缩重试后，即便两个响应都不匹配 `isContextOverflow` 仍报 "Context overflow recovery failed..." 的误导性错误。
🔗 https://github.com/earendil-works/pi/pull/8174

**#8124 — [OPEN] feat(ai): xAI 模型改走 Responses API，默认 Grok 4.6**
作者: Jaaneek
将 xAI 默认 API 从 completions 切换为 responses，默认模型从 Grok 4.5 升级到 Grok 4.6，并发送 Pi 的 user agent。
🔗 https://github.com/earendil-works/pi/pull/8124

**#8172 — [CLOSED] example: 工具结果剪枝 + spill 扩展示例**
作者: adamteale
参考 DeepSeek Harness 的 compaction-tool-result-pruner（8192/4096/1024）和 spill-policy（maxInlineBytes 50000），新增 "spill-copy-on-prune" 设计——剪枝同时将完整输出写入 spill 文件。
🔗 https://github.com/earendil-works/pi/pull/8172

**#8076 — [OPEN] DRAFT: 含新 harness 的 dev 分支**
作者: davidbrai
开发中 PR，暂无摘要。
🔗 https://github.com/earendil-works/pi/pull/8076

---

## 4. 功能需求趋势

### 🔧 上下文管理与压缩（占比最高）
- 压缩在上下文超过 100% 后仍不触发（#6879）
- 压缩在 turn 中途/尾部触发导致崩溃或损坏消息序列（#8164、#8153、#8168）
- 压缩失败不向扩展处理器暴露（#8175）
- 重复 length 停止的错误消息误导用户（#8176→PR #8174）

### 📦 新模型与 Provider 支持
- LLMTR 作为内置 provider（#8178）
- DeepSeek V4 Flash `low` thinking level 在 opencode/opencode-go 上缺失（#8182→PR #8181）
- Baseten DeepSeek V4 Flash 输出上限需修正（PR #8146）
- xAI 默认模型升级至 Grok 4.6 并切换 Responses API（PR #8124）
- 内置 llama.cpp 支持模型无法出现在模型列表中（#8167）

### 🖥️ TUI/终端体验优化
- 全屏鼠标滚轮步长可配置（#7765）
- 固定高度可滚动 thinking 块 + 自动折叠（#8171）
- 隐藏 thinking 块时出现空白行（#8154）
- 光标闪烁/渲染性能问题（#8003→PR #8155）
- Windows Terminal Ctrl+Shift+F 快捷键冲突文档化（#8183）

### 🔌 扩展系统能力
- 快捷键处理器支持 ExtensionCommandContext（#8180）
- UI 对话框前后发出扩展事件（#7147）
- 可取消的 `model_select_before` 钩子（#8169）
- 压缩失败事件需通知扩展处理器（#8175）
- 工具结果剪枝 + spill 扩展示例（#8173→PR #8172）

### 🛠️ 安全与稳定性
- Windows 上 bash 工具可通过 taskkill 杀死自身宿主（#8170）
- 工具结果 role 损坏导致 422（#8168）
- auth-check.ts 存在 TOCTOU 竞态条件（#8185）

---

## 5. 开发者关注点

1. **压缩（compaction）是当前最大的痛点**：从自动触发失败（#6879）到压缩后消息序列损坏（#8168），再到压缩崩溃（#8164），压缩流程的可靠性问题贯穿今日热点，开发者社区正投入大量注意力。

2. **流式/长时间任务的稳定性不足**：一次 agentic turn 运行 2 小时以上导致 context 超限（#6879）、渲染输出超过 V8 字符串限制崩溃（#8028）、响应随机截断（#7855）——这些均指向长会话场景下的稳定性短板。

3. **模型兼容性是高频需求**：从 Codex 可选参数被序列化为必填（#8105），到 DeepSeek V4 Flash 的 thinking level 缺失（#8182），再到 Baseten 输出上限与模型目录不符（PR #8146），不同 provider 间的模型行为差异正在消耗开发者的时间。

4. **TUI 体验细节成为焦点**：光标闪烁、thinking 块渲染、隐藏后的空白行、滚动步长不可配置——这些"小问题"被反复提出，说明 TUI 已进入体验打磨阶段。

5. **Windows/WSL 环境存在特有痛点**：登录挂起（#6187）、`taskkill` 杀死宿主（#8170）、Windows Terminal 快捷键冲突（#8183）——Windows 平台的适配仍是薄弱环节。

6. **扩展系统的可见性不足**：压缩失败时扩展处理器得不到通知（#8175）、快捷键无法使用 ExtensionCommandContext（#8180）——扩展作者希望更深层的事件可见性和控制能力。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报 — 2026-08-16

## 今日速览

今日发布两个预发布版本（v0.21.12-preview.5 与 nightly 构建），核心工作集中在 `/review` 审查管线的系统修复，包括重叠检测、worktree 并发锁与输入归一化等问题。此外，DSW EAS 全量端到端验证通过（SWE-bench Verified 500 例 + Terminal-Bench 2.0 89 例），社区反馈热点则聚集在 Web Shell 白屏、OOM 与文档导出等方向。

- **版本发布**：v0.21.12-preview.5（无显著变更说明）；nightly 包含一项 autofix 相关 commit。
- **内核修复**：多轮 `/review` PR 针对审查管线的重叠删除、worktree 并发竞争、验证探针污染共享工作区等漏洞进行修复。
- **质量验证**：基于 v0.21.12 的 DSW EAS 全量端到端基准验证成功（SWE-bench Verified 500 例 + Terminal-Bench 2.0 89 例）。

## 版本发布

| 版本 | 类型 | 关键内容 |
| --- | --- | --- |
| [v0.21.12-preview.5](https://github.com/QwenLM/qwen-code/releases/tag/v0.21.12-preview.5) | Preview | 无显著变更说明，变更日志见 [v0.21.12...v0.21.12-preview.5](https://github.com/QwenLM/qwen-code/compare/v0.21.12...v0.21.12-preview.5)；基准参考 v0.21.12 |
| [v0.21.11-nightly.20260816.5677823abb](https://github.com/QwenLM/qwen-code/releases/tag/v0.21.11-nightly.20260816.5677823abb) | Nightly | 新增 `feat(autofix)`：默认拒绝的 footprint 门控与位置窗口审查（PR #9156） |

**注意**：今日发布的版本均为预发布/夜间构建，尚无面向稳定用户的功能更新说明。

## 社区热点 Issues

已按优先级、评论数与时效性综合筛选以下 10 个值得关注的 Issue：

### 1. [#9253 Web Shell 开发标签页白屏且无恢复 UI](https://github.com/QwenLM/qwen-code/issues/9253)（新, P2）
- 作者 wenshao；开发模式（localhost:5173）下 dev-server/daemon 重启后，长开的 Web Shell 标签页变为白屏，无错误提示，需手动刷新恢复。

### 2. [#9200 相同任务调用相同本地模块，过程差异巨大](https://github.com/QwenLM/qwen-code/issues/9200)（新, 需信息）
- 用户 yushuisheng1235 质疑 `qwen code` 在相同任务下与调用本地模块的过程一致性，附三份日志对比（v0.21.12），并与其他 CLI 工具对比。

### 3. [#9250 qwen serve 新建文件硬编码 0600 权限，忽略 umask](https://github.com/QwenLM/qwen-code/issues/9250)（新, P3）
- 作者 VorlMaldor；`write_file`、`edit`、`notebook_edit` 新建文件强制 0600，不遵守 daemon umask，且无配置项可覆盖。

### 4. [#9219 /review 预提交重叠检测仅精确匹配单行](https://github.com/QwenLM/qwen-code/issues/9219)（P2）
- 作者 wenshao；多行范围评论与语义重复可通过 `noConflict` 检查，造成重复发现问题。

### 5. [#9218 /review 预提交拒绝 Step 6 findings 产物](https://github.com/QwenLM/qwen-code/issues/9218)（P2）
- 作者 wenshao；`--new-findings` 参数指向的 canonical findings 文件路径与 skill 自身示例冲突，导致预提交被拒。

### 6. [#9198 qwen 长时间运行 OOM](https://github.com/QwenLM/qwen-code/issues/9198)（P2, 需信息）
- 作者 freshui；服务运行一周以上未退出后 OOM（1T 内存服务器），tmux 按键错乱、无法复制粘贴，用户指出同为 kimi code 正常。

### 7. [#7427 Web Shell artifact 面板自动刷新报错](https://github.com/QwenLM/qwen-code/issues/7427)（P2, 需重测）
- 经典 bug：`Load artifacts failed` 错误 toast 在自动刷新（面板挂载、prompt 结束时）频繁弹出；PR #9227 已提交回归测试钉住该行为。

### 8. [#9089 autofix PAT 任务与不可信分支代码共享宿主，需 runner 级隔离](https://github.com/QwenLM/qwen-code/issues/9089)（P1, 安全）
- 作者 wenshao；PR #8961 加固后仍存在无法在 Actions step 内修复的安全类finding：持有 PAT 的任务与不可信分支代码运行在同一 runner 上，需 runner 级隔离。

### 9. [#5966 0.19.3 UI 不定期错误，中文输入法完全无效](https://github.com/QwenLM/qwen-code/issues/5966)（P2）
- 作者 aspnmy；除 UI 闪烁外中文输入法间歇性失效，无法定位问题，只能输入拼音，截止已持续近两个月。

### 10. [#9230 追问侧查询破坏服务端前缀缓存](https://github.com/QwenLM/qwen-code/issues/9230)（P2）
- 作者 yiliang114；主流会话在支持前缀缓存的服务器（如 llama.cpp）上 ~0% 缓存复用（因 LRU 调度），`enableCacheSharing` 默认关闭。

## 重要 PR 进展

以下 10 个 PR 按影响面与相关性筛选：

### 1. [#9227 test(web-shell): 钉住 artifact 静默刷新失败（#7427）](https://github.com/QwenLM/qwen-code/pull/9227)
- 作者 yiliang114；当前 main 上 toast 已消失（`loadArtifacts` 无 notice 分发），此 PR 为 #7427 补充缺失的回归测试，防止回归。

### 2. [#9222 fix(review): 归一化末级门输入并锚定行中片段](https://github.com/QwenLM/qwen-code/pull/9222)
- 作者 wenshao（autofix/takeover）；修复 `/review` 最终门拒绝自身早期阶段产出的输入形态问题，并规范化 findings schema 与长行锚点。

### 3. [#9212 fix(review): 有 ID 的 re-post 豁免预提交重叠删除](https://github.com/QwenLM/qwen-code/pull/9212)
- 作者 yiliang114（autofix/takeover）；`--new-findings` 条目支持携带 ledger ID（`R<round>-<n>`），同位置已有评论且携带该 ID 时放行。

### 4. [#9211 fix(review): worktree 租约升级为并发锁](https://github.com/QwenLM/qwen-code/pull/9211)
- 作者 wenshao（autofix/takeover）；修复并发同 PR 审查竞争同一固定 worktree 路径的问题（#9205），所有破坏性操作前检查租约锁。

### 5. [#9213 fix(review): 修复静默 reverse-audit 退休失败并保留证据](https://github.com/QwenLM/qwen-code/pull/9213)
- 作者 wenshao（autofix/takeover）；修复 dry-receipt 解析器对句子标点的处理及未收敛证据的保留逻辑。

### 6. [#9215 fix(review): 为重复丢弃的 Suggestion 单独设置 compose 状态](https://github.com/QwenLM/qwen-code/pull/9215)
- 作者 wenshao（autofix/takeover)；已确认但未重新发布的 Suggestion（因先前轮次或并发审查者已发布）获得独立状态字段。

### 7. [#9254 fix(web-shell): 启动失败显示后备页而非白屏](https://github.com/QwenLM/qwen-code/pull/9254)
- 作者 wenshao（review/self-reported）；`index.html` 增加无依赖启动看门狗，脚本/样式加载失败即渲染主题感知双语后备页（含错误信息与刷新按钮）。

### 8. [#9252 fix(ci): 停止丢弃 resolve 与 follow-up 工作流中的 agent 设置](https://github.com/QwenLM/qwen-code/pull/9252)
- 作者 wenshao（autofix/takeover）；自动化工作流通过 action 未声明的 input 配置 agent，导致每次运行静默丢失配置。

### 9. [#9255 fix(ci): 审查 runner 死亡时保留后备评论](https://github.com/QwenLM/qwen-code/pull/9255)
- 作者 wenshao（新）；增加 job 启动预检健康探测（验证 runner 用户可写文件）与异常死亡后备评论机制。

### 10. [#9220 fix(ci): 复用审查 runner 上自愈失败的 checkout](https://github.com/QwenLM/qwen-code/pull/9220)
- 作者 wenshao（autofix/takeover）；复用自托管 runner 池上 checkout 失败原为终态，现改为重试清理后自愈。

## 功能需求趋势

从近 24 小时活跃的 Issues 中可提炼出以下社区关注方向：

- **Web Shell 稳定性与体验**：多条目聚焦白屏（#9253、#9254）、滚动与清空会话命名保留（#8977）、HTML 导出重构（#9186）等，且多为 wenshao 与 yiliang114 主动提报并附修复 PR，体现该项目对 Web Shell 体验的持续投入。
- **`/review` 审查管线健壮性**：近 24 小时内出现大量 wenshao 提报的 P2 finding（#9205–#9219），覆盖并发、重叠、输入形态等，且多数伴随 autofix/takeover PR——说明项目正密集自查自修审查基础设施。
- **文件操作与权限**：#9250（0600 权限硬编码）为社区用户提报，反映对 ACP host 文件权限可配置化的需求。
- **安全加固**：#9089 提出 autofix PAT 任务与不可信代码的 runner 隔离问题，是当前 CI 安全的核心关注；#9235 PR 进一步将 skill 正文从 Web Shell 事件面剥离（脱敏）。
- **性能与缓存**：#9230（前缀缓存失效）暴露多会话并发下的缓存调度问题，属性能优化方向。

## 开发者关注点

- **审查工作流摩擦**：多轮 `/review` 在投入数小时后因末级门输入拒绝（#9209）、重叠误删、验证探针污染工作区（#9207）而失败，开发者明确反馈"最后一道门才失败"的挫败感，对输入归一化与并发安全有强烈需求。
- **长时间运行稳定性**：#9198（一周以上 OOM 且 UI 异常）表明核心问题定位尚缺信息，用户对官方响应速度与问题交互准确性有期待。
- **缓存与 Token 成本**：#9230 暴露前缀缓存 ~0% 复用问题，开发者对服务器侧缓存利用效率敏感，serverless/私有部署场景下成本影响显著。
- **CI 失败噪音**：P1 的 E2E CI 自动失败报告（#9237、#9239、#9241 等）在同日高频产生，且多被标记 ready-for-agent/autofix，说明自愈自动化正在吸收这批噪音。
- **中文用户诉求**：#5966（中文输入法失效）长期未解决，为 P2 且 welcome-pr，需社区贡献；#9200 的中文用户对输出一致性质疑亦值得跟进。

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI 社区动态日报 — 2026-08-16

> 数据来源：`github.com/Hmbown/CodeWhale`（关联项目，非 Hmbown/DeepSeek-TUI）

---

## 1. 今日速览

v0.9.8 发布后的主干修复进入密集收尾期：CI 并发取消、双平台红测、凭证与 CodeQL 安全问题集中落地。功能侧推进了**预制第三方模型模板**、**可配置 long-context 读取预算**，以及**“宪法”中文译名**历经三周讨论后定为“宪章”。

---

## 2. 版本发布

过去 24 小时内无新版本发布。

---

## 3. 社区热点 Issues（10 条）

**#4949** — [CLOSED] “Constitution” 中文翻译：“宪法” vs “协作准则” vs 其他？  
作者：SparkofSpike 
链接：https://github.com/Hmbown/CodeWhale/issues/4949  
重要性：三周社区讨论尘埃落定。原中文译者曾将“协作准则”改回“宪法”，引发政治敏感性争议，最终经 17 条评论定稿为“宪章”，并已同步至 TUI 简体中文本地化。

**#5350** — [enhancement] 简化第三方模型配置，增加预制模板  
作者：shadapang 
链接：https://github.com/Hmbown/CodeWhale/issues/5350  
重要性：社区痛点明确。OpenCode Zen、Agnes、美团 Sensenova 等需手动填写 Base URL/模型名/密钥，且保存后常卡在 `not checked` 状态。提案包含预制模板、测试连接按钮、文档内嵌。PR #5406 已跟进实现。

**#5374** — [bug] Agent 书写内容乱码（macOS）  
作者：all-lopezg 
链接：https://github.com/Hmbown/CodeWhale/issues/5374  
重要性：DeepSeek Flash 在 macOS 上流式输出出现 U+FFFD/CJK 乱码。根因是 HTTP/2 DATA 帧切分多字节字符，SSE 逐行解码时出错。PR #5404 已提供“fail closed”修复。

**#5367** — [enhancement] 自托管 long-context 模型可配置 read/tool-result 大小限制  
作者：hxfhd 
链接：https://github.com/Hmbown/CodeWhale/issues/5367  
重要性：DeepSeek V4 长上下文用户受限于 `read` 50 KiB、`read_file` 16 KiB 的硬编码预算，64 KiB 文件需额外约 20 次读取。要求在模型/HarnessProfile 级别暴露可配置项，PR #5405 已实现。

**#5413** — [bug] v0.9.7 回归：sudo 权限失效  
作者：M-Maciej 
链接：https://github.com/Hmbown/CodeWhale/issues/5413  
重要性：v0.8.65 可正常 sudo，v0.9.7 的 Full Access 模式无法执行，macOS wheel 组用户受影响。作为 0.9.x 回归问题，优先级较高。

**#5370** — [bug] P0：Web UI 彻底损坏  
作者：Hmbown 
链接：https://github.com/Hmbown/CodeWhale/issues/5370  
重要性：官方 Web UI（codewhale.net）外观与功能均受损，需对照 harness 参考重建。影响面为公开站点所有用户。

**#5322** — [CLOSED] 回归：宽终端输出区不填满（v0.8.65 正常）  
作者：M-Maciej 
链接：https://github.com/Hmbown/CodeWhale/issues/5322  
重要性：v0.9 将 transcript 输出区限宽，宽屏/tmux 下大量空白浪费。PR #5400 已恢复 v0.8.65 行为。

**#5241** — [needs-info] 定价端点 503，所有会话显示 `unverified_live_pricing`  
作者：alitvak69 
链接：https://github.com/Hmbown/CodeWhale/issues/5241  
重要性：0.8.67→0.9.3 升级后成本显示全面失效，涉及多提供商多路由。PR #5402 已提供“诚实路径”修复——定价不可验证时不再无限停留 `unverified_live_pricing`。

**#5410** — [enhancement] bwrap 沙箱可配置额外挂载根  
作者：redstar 
链接：https://github.com/Hmbown/CodeWhale/issues/5410  
重要性：Zig 开发场景下 bwrap 沙箱导致 `/dev/null` 重定向被禁、系统库链接失败。沙箱策略灵活性需求。

**#5403** — main 双平台四轮构建全红（macOS plugin_e2e / Windows NSIS）  
作者：Lstarsky0 
链接：https://github.com/Hmbown/CodeWhale/issues/5403  
重要性：CI 互杀修复后暴露真实失败面，四个完成运行在双平台全红，属发布阻断级别。

---

## 4. 重要 PR 进展（10 条）

**#5412** — [CLOSED] 修复文档：套件计数、链接及遗留 facts json  
作者：Hmbown 
链接：https://github.com/Hmbown/CodeWhale/pull/5412  
内容：跟进 #5397/#5398，修正 TUI 测试文档（17 套件）、CONTRIBUTING.md PTY 命令及过时 facts 数据。

**#5411** — [OPEN] 重建模型设置功能界面  
作者：mvanhorn 
链接：https://github.com/Hmbown/CodeWhale/pull/5411  
内容：基于 `facts.defaultModel` / `facts.providers` 扩展 `models/page.tsx`，添加只读设置预览、轨道分区与配置操作链接，回应 Web UI 重建诉求。

**#5407** — [OPEN] v0.9.8 收尾落地 main  
作者：Hmbown 
链接：https://github.com/Hmbown/CodeWhale/pull/5407  
内容：将 `codex/v098-final-20260814` 分支的分配收尾合并至 main，含 #5322/#5400 会话 shell 几何修复，但 macOS CI PTY keep-alive 仍挂起（见 #5408）。

**#5406** — [OPEN] feat(tui)：预制提供商模板与测试连接（#5350）  
作者：Hmbown 
链接：https://github.com/Hmbown/CodeWhale/pull/5406  
内容：内置 OpenCode Zen、OpenCode Go、Agnes、SenseNova 模板，用户仅需填密钥；首轮提供商保持现有密钥流程。

**#5402** — [OPEN] 恢复定价不可验证时的会话成本（#5241）  
作者：Hmbown 
链接：https://github.com/Hmbown/CodeWhale/pull/5402  
内容：定价端点 503 时不再永久 `unverified_live_pricing`，转入诚实回退路径。

**#5405** — [OPEN] 可配置 read/tool-result 预算（#5367）  
作者：Hmbown 
链接：https://github.com/Hmbown/CodeWhale/pull/5405  
内容：为 DeepSeek V4 自托管用户开放更大的单结果预算，默认值不变、模型/HarnessProfile 可覆盖。

**#5404** — [OPEN] SSE UTF-8 跨 HTTP/2 DATA 切分时 fail closed（#5374）  
作者：Hmbown 
链接：https://github.com/Hmbown/CodeWhale/pull/5404  
内容：修复 macOS 上 DeepSeek Flash 流式乱码——多字节字符拆分时不再 `from_utf8_lossy` 吞错，改为失败关闭。

**#5401** — [OPEN] 修复 CodeQL High 级告警并准备 GHSA-8hp3 / GHSA-3mgh  
作者：Hmbown 
链接：https://github.com/Hmbown/CodeWhale/pull/5401  
内容：清理 `catalog_models_dev.py` 明文字段记录漏洞，仅触碰 CodeQL/GHSA 面，不动 tag 与发布链路。

**#5400** — [CLOSED] transcript 填满全终端宽度（#5322）  
作者：Hmbown 
链接：https://github.com/Hmbown/CodeWhale/pull/5400  
内容：恢复 v0.8.65 行为，宽终端不再丢失可用列；`session_shell_area` 回归恒等函数。

**#5395** — [CLOSED] CI 停止互杀并发 main 推送  
作者：Hmbown 
链接：https://github.com/Hmbown/CodeWhale/pull/5395  
内容：修复 `cancel-in-progress` 误杀后续 main 推送导致红测不显现的问题——这是 #5403 四连红才暴露的根因。

---

## 5. 功能需求趋势

| 方向 | 相关 Issue/PR | 说明 |
|---|---|---|
| **第三方模型配置体验** | #5350 / #5406 | 预制模板 + 测试连接 + 文档内嵌，目标 1 分钟完成配置 |
| **长上下文模型支持** | #5367 / #5405 | 可配置 read/tool-result 预算，适配 DeepSeek V4 等自托管模型 |
| **沙箱灵活性** | #5410 | bwrap 额外根挂载，适配 Zig 等开发场景系统库需求 |
| **Web UI 重建** | #5370 / #5411 | 官网页面对照 harness 参考全面重建，属于 P0 级 |
| **国际化与术语统一** | #4949 / #5397 | 三周讨论终结定稿“宪章”，同步至 TUI 与 Web 端 |

---

## 6. 开发者关注点

- **CI 可靠性**：#5395 修复取消互杀后，#5403 暴露出 macOS/Windows 双平台全红，plugin_e2e_acceptance 与 NSIS 供给持续失败，CI 绿测可信度是社区核心痛点。
- **回归问题密集**：#5322（宽度）、#5413（sudo）均为 v0.8.65→v0.9.x 功能回退，用户对 0.9 系列稳定性敏感。
- **macOS 特定缺陷**：#5392 对称链接导致 `agy_credentials` 测试全挂，加上 #5374 乱码与 #5408 PTY hang，Apple 平台成为本轮修复焦点。
- **定价/成本透明性**：#5241 要求 503 时降级而非永久 `unverified_live_pricing`，反映用户对成本可视性的高要求。
- **Provider 生态扩展**：#5383/5394 显示 v0.9.8 新增 Google Gemini 后 provider 计数 43→45，社区对新模型接入节奏关注度高。

</details>

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar) 自动生成。*