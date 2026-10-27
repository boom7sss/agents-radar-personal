# AI CLI 工具社区动态日报 2026-08-12

> 生成时间: 2026-08-12 02:25 UTC | 覆盖工具: 9 个

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

# AI CLI 工具横向对比分析报告（2026-08-12）

## 1. 生态全景

AI CLI 工具正从“能用”加速迈向“生产级”，所有主流工具均进入高频迭代与社区反馈驱动的密集修复期。稳定性问题（回归、资源失控、平台兼容）取代功能缺失成为社区首要痛点，MCP 生态、多智能体协作与成本透明化是跨工具共同攻坚的方向。Windows 平台已成主战场，各家常因文件句柄、路径解析、权限模型等问题被集中吐槽，抢占了大量维护资源。与此同时，模型行为可控性与外部工具链互操作（ACP、MCP、Skills）的竞争已经开始，生态兼容逐渐取代单点功能成为选型关键。

## 2. 各工具活跃度对比

| 工具 | Release 数 | 热点 Issues | 重要 PR | 迭代节奏 | 社区活跃度 |
|---|---|---|---|---|---|
| Claude Code | 1（v2.1.228 补丁） | 10 | 9 | 稳定补丁 + 长尾问题 | ★★★★★ |
| OpenAI Codex | 3（连续 alpha） | 10 | 10 | 快速迭代（每日多版） | ★★★★★ |
| Gemini CLI | 4（正式 + 预览 + 2 nightly） | 10 | 10 | 高频发布，安全响应快 | ★★★★☆ |
| Copilot CLI | 0 | 10 | 3 | 进入稳定性消化期 | ★★★★☆ |
| Qwen Code | 5（稳定 + preview + nightly 等） | 10 | 10 | 多通道发布，节奏稳 | ★★★★☆ |
| OpenCode | 0 | 10 | 10 | V2 重构期，提交密集 | ★★★★☆ |
| Pi | 0 | 10（50 条更新） | 10（50 条更新） | 合并活跃，版本静默 | ★★★☆☆ |
| Kimi Code | 0 | 3 | 8 | 低频维护，PR 长尾 | ★★☆☆☆ |
| DeepSeek TUI | 0 | 10 | 6 | 社区小，回归问题集中 | ★★☆☆☆ |

*注：Issues/PR 数为摘要中列出的“精选/热点”数量，非当日全量。*

## 3. 共同关注的功能方向

**① Windows 平台稳定性** — 波及所有工具
- Claude Code：Ctrl+C 静默清空输入、Git 检测失败
- Codex：插件“更新即损坏”集群（#20214/#21670/#30270 等）
- Copilot CLI：插件安装/更新 `Access is denied`（#4151/#4095）
- Qwen Code：盘符冒号被 URL 编码致文件链接失效
- OpenCode：CRLF 行尾被破坏；Kimi：PowerShell 7 路径错误

**② MCP 生态走向生产级**
- 多账户/多租户：Claude Code #36024（77👍 全场最高）
- 协议兼容性：Copilot CLI 的 BigInt 序列化崩溃（#4211）、GitLab OAuth issuer mismatch（#4439）
- 审批与授权持久化：Codex PR #38081（ReviewDecision + 跨会话持久化）
- 调用可靠性：Claude Desktop 零 `tools/call` 回归（#79986）

**③ 会话恢复与上下文管理**
- 大会话恢复性能：Copilot CLI OOM 回归（#4251）、Codex Resume 渲染全量历史（#34663）
- 恢复超时：Qwen Code #8678（P1，已出修复）
- 无限压缩循环：OpenCode #27924
- 跨会话协调缺失：Claude Code #76727

**④ 资源失控与成本治理**
- 内存/OOM：Claude Code ugrep 放大至宿主机冻结（#54394）、Qwen daemon 内存配额（#8182）、Pi 长会话 CPU 50–110%
- 成本透明度：Claude Code 计费争议（$604.71/$995.67）、OpenCode /usage 及用量 API（137👍）、Pi pricing 端点 503（#5241）
- 无限重试：OpenCode RETRY_MAX_DELAY 达 24 天（#41848）

**⑤ Agent 行为可控性与可观测性**
- 隐式策略注入：Claude Code `heron_brook` prompt 片段（#80988）
- 子代理状态失真：Gemini MAX_TURNS 中断报 success（#22323）、DeepSeek 后台事件泄漏至父流（#5325）
- 技能/命令利用率低：Gemini 自定义 skills 不被调用（#21968）、Copilot skill 重复加载（#4451）

**⑥ 供应链与依赖安全**
- Gemini：shell-quote（CRITICAL）与 simple-git（CRITICAL）CVE 当日合入
- Copilot CLI：内置 adm-zip 0.5.17 存在 CVE-2026-39244，阻断企业镜像构建
- Qwen Code：sharp 升级修复 GHSA-f88m-g3jw-g9cj

## 4. 差异化定位分析

| 工具 | 核心定位 | 目标用户 | 技术路线 | 当前最大短板 |
|---|---|---|---|---|
| **Claude Code** | 全功能 AI 编码代理，最早建立生态规范 | 重度开发者、团队协作 | TS/Node、hooks/skills 体系、MCP 深度集成 | Cowork 等新功能长期故障，计费信任危机 |
| **OpenAI Codex** | Rust 高性能 CLI，桌面端强绑定 | 高端个人开发者、Windows 用户 | Rust、沙箱/ACL 精细化控制、TUI 性能优化 | 桌面端插件生命周期管理混乱 |
| **Gemini CLI** | 多后端 AI CLI（Vertex、OpenAI 兼容） | Google Cloud 生态、企业 | Node/TS，多 provider 抽象，组件级评估体系 | 429 限流体验差，shell 挂起频发 |
| **Copilot CLI** | GitHub 生态原生 CLI | GitHub 深度用户、企业组织 | 与 Copilot 订阅/模型策略绑定 | 模型策略不透明，Windows 安装硬阻断 |
| **Qwen Code** | 阿里系 AI 编码工具，多端覆盖 | 中文开发者、DashScope 用户 | TS，daemon/ACP/Web Shell，CUA 驱动 | tmux/iTerm 闪屏等终端渲染回归 |
| **OpenCode** | 开源开放平台，多模型网关 | 追求高度可定制者、社区用户 | TypeScript，V2 重构（Durable Object 架构） | 2.0 beta 稳定性不足，迁移路径脆弱 |
| **Pi** | 轻量级多 provider TUI | 性能敏感型用户、多模型切换者 | Rust，JSON/RPC 协议、复制/剪贴板精细化 | 长会话资源占用，认证流程不稳定 |
| **Kimi Code** | 轻量 Python CLI | Kimi 生态用户、入门开发者 | Python，ACP 支持 | 社区规模小，记忆系统长期缺失 |
| **DeepSeek TUI** | DeepSeek 终端客户端 | DeepSeek API 用户、极简主义者 | Rust/Ratatui，schema 驱动 | 回归频繁（v0.9.5），品牌定位模糊 |

## 5. 社区热度与成熟度

**第一梯队：生态成熟、社区规模大，但维护压力集中**
- **Claude Code** 社区讨论深度最高，问题影响面大（Cowork 拖了 6 个月、计费争议消耗信任），但生态规范（hooks/skills/MCP）仍居领导地位。
- **OpenAI Codex** 迭代最激进（一天 3 个 alpha），Windows 插件问题集群（5+ 同族 Issue）说明用户基数大但桌面端工程化不足。
- **Copilot CLI** 从快速扩张进入稳定性消化期，无新 Release 但回归问题集中（OOM、配置清空），企业模型策略链路亟待理清。

**第二梯队：迭代活跃、社区快速增长**
- **Gemini CLI** 发布时间频率最高（4 个版本/日），CVE 修复做到当日合入，安全响应值得肯定，但限流与 shell 挂起伤害体验。
- **Qwen Code** 发布节奏稳（稳定+预览多通道），CUA 驱动和多会话通信等前瞻特性积极，终端渲染回归是当前主要扣分项。
- **OpenCode** 处于 V2 重构阵痛期：功能提案旺盛（Claude Code 风格斜杠命令 8 连发）、PR 合入活跃，但 ALSA、无限重试等基础稳定性问题拉低口碑。

**第三梯队：小众或早期阶段**
- **Pi** 社区体量小但 Issue 质量高（50 条更新中涌现大量协议级、性能级反馈），Rust TUI 路线有差异化空间。
- **Kimi Code** 活跃度偏低，但 34 评论的记忆系统需求说明有真实用户基础，需加快核心能力建设。
- **DeepSeek TUI** 社区最小，Auto-Review 高危回归 + 工具 schema 过度复杂暴露工程化短板，品牌身份争议进一步制约发展。

## 6. 值得关注的趋势信号

**① MCP 正从“协议玩具”变为“企业网关”**
- 多账户、OAuth/CIMD、审批持久化、BigInt 等企业级数据类型兼容被集中提出。谁的 MCP 层能最快补齐多租户与审批治理，谁就能抢到企业市场门票。

**② 多智能体协作开始“自下而上”涌现**
- 社区已不满足单会话：Claude Code 跨会话协调、Qwen 跨会话消息通信、Codex 多线程 MCP 审批、DeepSeek 事件隔离——都是用户在现有架构上“拼凑”协作能力。官方原语缺失是共同瓶颈，**跨会话/跨 Agent 的标准协议**将是下一个竞争高地。

**③ “模型不可控”成为信任杀手**
- 从 Claude Code 的隐式 prompt 注入，到 Gemini 子代理误报成功，再到 Copilot `model:` 覆盖会话模型——开发者的核心诉求已从“能力上限”转向 **“行为可解释、策略可配置、状态可观测”**。工具的透明度将直接影响其长期品牌信任。

**④ 成本治理是刚需，且正在工具化**
- 计费争议（$604/$995）、/usage 命令批量提案、成本 API 端点需求（137👍）表明：用户不仅需要省钱，更需要 **可编程的用量监控与预警**。成本数据接入 CI/CD 管道成为新场景。

**⑤ Windows 是“大后方”也是“大泥潭”**
- 几乎每份日报都有 Windows 专属问题：文件句柄占用、路径编码、权限模型、原生消息主机注册。**跨平台一致性已成为 CLI 工具的基础门槛**，现在投入 Windows 工程化，是明年差异化竞争的关键筹码。

**⑥ 供应链安全开始直接阻塞用户部署**
- 多个工具的 CVE 影响 Docker 镜像构建与企业安全扫描通过。**依赖审计与自动升级已从“最佳实践”变成“合规硬要求”**，工具链的供应链透明度将进入选型评估维度。

**给开发者的参考：**
- 多工具并行是常态，优先选择 **MCP 生态开放、会话可控、成本可见** 的工具作为主力；
- 关注各家的 **Windows 与沙箱路线图**，不要以 macOS/Linux 体验替代评估；
- 新工具评估时，**回归修复速度比功能数量更能反映工程健康度**（参考 Gemini CVE 当日修复 vs Claude Cowork 6 个月未修）。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告

**数据范围**：anthropics/skills 官方仓库 | **截止日期**：2026-08-12

---

## 1. 热门 Skills 排行

以下按社区关注度/讨论热度排序（排名越高代表讨论越集中）。

### ① skill-creator 评估链路修复（#1298）
- **功能**：修复 `run_eval.py` 始终报告 `recall=0%` 的严重缺陷，涉及 eval artifact 安装、Windows 流读取、触发检测与并行 worker 逻辑。该问题直接导致技能描述优化循环"对着噪声调参"。
- **讨论焦点**：引用 Issue #556（12 条评论）及 10+ 次独立复现，是当前社区痛点最集中的 PR；配套修复 #1099、#1050、#1323、#539 均聚焦同一脚本的 Windows 兼容与 YAML 解析问题。
- **状态**：🟡 OPEN
- 🔗 [PR #1298](https://github.com/anthropics/skills/pull/1298)

### ② document-typography 文档排版技能（#514）
- **功能**：对 AI 生成文档做排版质量控制，防止孤字换行、寡段（标题滞留页底）、编号错位三类高频问题。
- **讨论焦点**：定位精准（"每个 Claude 生成的文档都会受影响"），解决用户不会主动提出、但明显影响观感的隐性质量问题。
- **状态**：🟡 OPEN
- 🔗 [PR #514](https://github.com/anthropics/skills/pull/514)

### ③ ODT 文档处理技能（#486）
- **功能**：创建/填充/读取 OpenDocument 格式（.odt/.ods），并支持 ODT → HTML 转换，补全文档技能链中缺失的开源格式环节。
- **讨论焦点**：与 DOCX 技能互补，面向 LibreOffice 与 ISO 标准格式用户群。
- **状态**：🟡 OPEN
- 🔗 [PR #486](https://github.com/anthropics/skills/pull/486)

### ④ testing-patterns 测试模式技能（#723）
- **功能**：覆盖完整测试栈——Testing Trophy 模型、单元测试 AAA 模式、React Testing Library、测试命名与边界用例。
- **讨论焦点**：社区对"生成高质量测试"的标准化诉求，试图将测试哲学固化为可执行指令。
- **状态**：🟡 OPEN
- 🔗 [PR #723](https://github.com/anthropics/skills/pull/723)

### ⑤ self-audit 输出自审计技能（#1367）
- **功能**：交付前先做机械式文件验证，再按损害严重度执行四维推理审计；与 Issue #1385（推理质量门流水线）形成完整提案体系。
- **讨论焦点**：将"AI 输出质量检查"从流程建议升级为可复用的 Skill 资产。
- **状态**：🟡 OPEN
- 🔗 [PR #1367](https://github.com/anthropics/skills/pull/1367)

### ⑥ pyxel 复古游戏开发技能（#525）
- **功能**：基于 pyxel-mcp 的复古/像素/8-bit 游戏开发工作流（write → run_and_capture → inspect → iterate）。
- **讨论焦点**：社区对垂直领域（创意编码）技能的兴趣，作者为 Pyxel 引擎原作者，生态背书强。
- **状态**：🟡 OPEN
- 🔗 [PR #525](https://github.com/anthropics/skills/pull/525)

### ⑦ color-expert 颜色专家技能（#1302）
- **功能**：涵盖 ISCC-NBS、Munsell、RAL 等命名体系，以及 OKLCH/OKLAB/CAM16 等色彩空间的选型对照表。
- **讨论焦点**：自包含、即插即用的领域知识型技能，适合设计/可视化场景。
- **状态**：🟡 OPEN
- 🔗 [PR #1302](https://github.com/anthropics/skills/pull/1302)

### ⑧ skill-quality-analyzer / skill-security-analyzer 元技能（#83）
- **功能**：为 Skills 自身提供质量评估（结构/文档/示例等五维评分）与安全分析。
- **讨论焦点**：与 #492（命名空间安全）呼应——社区在探索"如何质检/审计 Skill 本身"。
- **状态**：🟡 OPEN
- 🔗 [PR #83](https://github.com/anthropics/skills/pull/83)

---

## 2. 社区需求趋势

### 🔒 安全与信任边界（最高关注）
- **#492**（43 条评论）：社区技能在 `anthropic/` 命名空间分发，冒充官方技能，形成信任边界漏洞。这是目前评论量最高的 Issue，直接驱动了对 Skill 来源验证与安全审计的需求。
- 🔗 [Issue #492](https://github.com/anthropics/skills/issues/492)

### 🏢 组织级协作与分发
- **#228**（16 条评论，8 👍）：希望 Skill 在组织内直接共享，而非手动下载文件、经 Slack/Teams 传输、再手动上传安装。
- 🔗 [Issue #228](https://github.com/anthropics/skills/issues/228)

### 🔧 官方工具链可靠性
- **#556**（12 条评论，7 👍）：`run_eval.py` 对所有查询均报 0% 触发率，使 skill-creator 的优化循环完全失效。与之相关的 #1169、#202 形成了一条"skill-creator 亟需重写"的明确诉求线。
- 🔗 [Issue #556](https://github.com/anthropics/skills/issues/556)

### 🧠 上下文窗口效率与去重
- **#1487**：`claude-api` 技能单次调用注入约 156k tokens，直接撑爆上下文窗口。
- **#189**（9 👍）：`document-skills` 与 `example-skills` 插件安装后产生重复技能，浪费上下文。
- 🔗 [Issue #1487](https://github.com/anthropics/skills/issues/1487) | [Issue #189](https://github.com/anthropics/skills/issues/189)

### 🛡️ 代理治理与生命周期管理
- **#412**：提出 agent-governance 技能方向（策略执行、威胁检测、信任评分、审计追踪）。
- **#1329** / **#1479**：分别提出 compact-memory（符号化代理状态）与 plan-file-hygiene（规划工件生命周期清理），反映社区对"长时运行 Agent 状态治理"的关注。

---

## 3. 高潜力待合并 Skills

以下 PR 均处于 OPEN 状态但讨论完整、实现成熟，可能近期落地：

| Skill | 价值点 | 落地概率信号 |
|-------|--------|-------------|
| [document-typography #514](https://github.com/anthropics/skills/pull/514) | 解决所有 AI 生成文档的共性排版问题 | 问题普适、PR 描述清晰，维护者合入门槛低 |
| [ODT 技能 #486](https://github.com/anthropics/skills/pull/486) | 补齐 LibreOffice/ISO 格式空白，与 DOCX 联动 | 市场定位明确，触发词定义完整 |
| [testing-patterns #723](https://github.com/anthropics/skills/pull/723) | 社区对测试生成标准化的刚需 | 覆盖面广、内容体系化 |
| [self-audit #1367](https://github.com/anthropics/skills/pull/1367) | 质量门流水线的可执行落地 | 与 #1385 提案形成呼应，有后续迭代计划 |
| [pyxel #525](https://github.com/anthropics/skills/pull/525) | 垂直创意领域标杆案例 | 作者为 Pyxel 原作者、生态影响力强 |

---

## 4. Skills 生态洞察

> **当前社区最集中的诉求是"让 Skills 生态变得更可信、更可靠"——一手抓官方工具链（skill-creator）的评估可靠性修复，一手抓分发安全与信任治理（命名空间冒充、权限边界）。** 这是生态从"野蛮生长"走向"规范化"的典型信号：社区不只在贡献新 Skill，更在要求官方回答"如何保证一个 Skill 是安全的、好用的、可维护的"。

---

# 2026-08-12 Claude Code 社区动态日报

## 今日速览

今日发布补丁版 v2.1.228，修复交互式会话渲染中断与 Windows Git 检测问题。社区热度集中在 Cowork 虚拟机长期故障（#27801，72 评论）、ugrep 引发的 WSL2 冻结（#54394）以及账单自动充值争议（#81703）三大议题；功能需求端，MCP 多账户支持（77👍）与跨会话协调（#76727）呼声最高。

---

## 版本发布

### v2.1.228
- **修复**：罕见的内部布局错误导致交互式会话停止重绘（进程仍在运行）的问题
- **修复**：从 Git 安装目录的父文件夹启动 Claude Code 时，Windows 无法找到 git / Git Bash 的问题
- **修复**：`/tui` 回退逻辑相关修复

---

## 社区热点 Issues（Top 10）

### 1. Cowork: "Failed to start Claude's workspace" — VM 服务无法运行，重启后依旧
**链接**: [Issue #27801](https://github.com/anthropics/claude-code/issues/27801)

**作者**: stevenut63 | **创建**: 2026-02-23 | **更新**: 2026-08-12 | **评论**: 72 | 👍 41

**关注点**：Cowork 是 Anthropic 主推的协作功能，但 VM 服务长期无法启动的问题从 2 月拖到 8 月仍未解决，72 条评论表明受影响用户非常多且修复进展缓慢。社区已出现对 Anthropic 响应速度的质疑。

---

### 2. [BUG] v2.1.117 内嵌 ugrep 包装器将 grep 进程 OOM 放大为 V8 堆 OOM（8GB 上限）— WSL2 主机冻结
**链接**: [Issue #54394](https://github.com/anthropics/claude-code/issues/54394)

**作者**: dowdys | **创建**: 2026-04-28 | **更新**: 2026-08-12 | **评论**: 27 | 👍 4

**关注点**：v2.1.117 将 `Glob`/`Grep` 工具替换为内嵌 `bfs`/`ugrep`，但所有 grep 调用都经由 shell-snapshot 包装器转发，导致正则回溯从普通进程 OOM 升级为 V8 堆 OOM，直接冻结宿主机。这是典型的性能回归，涉及内存安全与工具链集成方式。

---

### 3. [enhancement] MCP 集成支持多个 Gmail 账户
**链接**: [Issue #36024](https://github.com/anthropics/claude-code/issues/36024)

**作者**: ale-ayestaran-ai | **创建**: 2026-03-19 | **更新**: 2026-08-12 | **评论**: 25 | 👍 77（全榜最高赞）

**关注点**：当前 Gmail MCP 只能连接一个账户，个人+工作双账户用户无法同时使用。77 个 👍 是本期最高，反映 MCP 生态从“能用”走向“够用”的强烈需求——多租户/多账户支持是 MCP 集成迈向生产级的必经之路。

---

### 4. [BUG] v2.1.219 `heron_brook` prompt 片段仅对 Opus 5 注入“不要调用 AgentTool”指令，静默覆盖用户委托策略且无退出选项
**链接**: [Issue #80988](https://github.com/anthropics/claude-code/issues/80988)

**作者**: elaye-canopy | **创建**: 2026-07-24 | **更新**: 2026-08-12 | **评论**: 21 | 👍 48

**关注点**：系统 prompt 内部注册的 `heron_brook` 片段会针对 Opus 5 模型注入限制性指令，绕过用户配置的代理委托策略，且无法关闭。48 个 👍 表明开发者对“模型行为被隐式改写”高度敏感——这触碰了用户对 AI 工具可控性的底线。

---

### 5. [FEATURE] GUI 中设置文件夹时应加入最近列表以便删除
**链接**: [Issue #33502](https://github.com/anthropics/claude-code/issues/33502)

**作者**: bhpark01 | **创建**: 2026-03-12 | **更新**: 2026-08-12 | **评论**: 21 | 👍 37

**关注点**：桌面 GUI 的文件夹管理缺少“最近使用”列表，用户无法快速清理或重新定位项目。虽是小需求，但 37 个 👍 显示桌面端体验已成为社区重点关切，基础元数据管理功能亟待补全。

---

### 6. [BUG] Claude Desktop：外部 stdio MCP 工具已宣告但从未被调用（零 tools/call）— 全平台、全安装方式
**链接**: [Issue #79986](https://github.com/anthropics/claude-code/issues/79986)

**作者**: DFNR2026 | **创建**: 2026-07-22 | **更新**: 2026-08-12 | **评论**: 15 | 👍 8

**关注点**：MCP 服务器完成握手后，应用从不发送 `tools/call` 消息。该问题影响 Windows/macOS/Linux 所有安装方式，且为 1.24012.1 更新后引入的回归——说明桌面端 MCP 调度的核心链路存在跨平台缺陷。

---

### 7. [BUG] Windows 上 Ctrl+C 和 Ctrl+Shift+C 静默清空提示输入，无确认且无法恢复
**链接**: [Issue #59408](https://github.com/anthropics/claude-code/issues/59408)

**作者**: pmg23 | **创建**: 2026-05-15 | **更新**: 2026-08-12 | **评论**: 14 | 👍 10

**关注点**：终端用户最常用的中断组合键在 Windows 上会直接清空当前输入内容，且没有撤销机制。这是高频操作路径上的严重 UX 缺陷，直接影响日常使用效率，长期未修复已引发用户不满。

---

### 8. [enhancement] 独立启动的多个 Claude Code 会话缺乏跨会话协调机制
**链接**: [Issue #76727](https://github.com/anthropics/claude-code/issues/76727)

**作者**: wshallwshall | **创建**: 2026-07-11 | **更新**: 2026-08-12 | **评论**: 14 | 👍 0

**关注点**：重度用户在同一仓库、同一工作树运行多个独立会话时，唯一的协调原语是自建 PreToolUse `deny` hook，且该方案存在静默漏洞。这是高阶用户对“多智能体协作”的第一性需求——官方至今没有提供第一方协调能力。

---

### 9. [BUG] 7月17日大规模计费事件：订阅额度被扣为付费额度；$604.71 自动充值争议
**链接**: [Issue #81703](https://github.com/anthropics/claude-code/issues/81703)

**作者**: COOLak | **创建**: 2026-07-27 | **更新**: 2026-08-12 | **评论**: 12 | 👍 0

**关注点**：Anthropic 已承认的 7 月 17 日事件中，订阅用户的 included 用量被错误路由到付费额度并触发自动充值，单笔争议金额高达 $604.71。类似问题在同用户 #83062 中再次出现（8月1日，$995.67），计费可靠性正成为社区信任度的重要减分项。

---

### 10. [Regression] 桌面应用：会话时间范围筛选器仅在“按状态分组”时显示
**链接**: [Issue #78775](https://github.com/anthropics/claude-code/issues/78775)

**作者**: bakulaibuji | **创建**: 2026-07-18 | **更新**: 2026-08-12 | **评论**: 8 | 👍 28

**关注点**：桌面端会话管理 UI 的回归——时间筛选器在默认视图下消失，用户必须切换到特定分组模式才能使用。28 个 👍 说明大量用户依赖会话历史功能，UI 回归直接影响工作流效率。

---

## 重要 PR 进展

### 1. [CLOSED] fix(commit-commands): 使用 `git branch -vv` 检测 `[gone]` 分支
**链接**: [PR #70173](https://github.com/anthropics/claude-code/pull/70173) | **作者**: AndrewDongminYoo | **状态**: 已关闭

修复 `/clean_gone` 命令从不删除任何分支的问题。原实现使用 `git branch -v` 配合 `grep '[gone]'`，由于 `-v` 不显示 upstream 状态，匹配永远失败。改为 `git branch -vv` 后功能恢复。

---

### 2. [CLOSED] 将 `child_process_exec` 规则限定到 JS/TS 文件（修复 Python 误报）
**链接**: [PR #57888](https://github.com/anthropics/claude-code/pull/57888) | **作者**: emora-hash | **状态**: 已关闭

`security_reminder_hook.py` 中 `child_process_exec` 规则用子串 `"exec("` 匹配调用，导致 Python 的 `asyncio.create_subprocess_exec(` 被误报。该 PR 将规则限定为 JS/TS 文件，消除安全扫描的误报噪音。

---

### 3. [OPEN] fix(hookify): 从祖先 `.claude` 目录加载规则，防止静默绕过
**链接**: [PR #85716](https://github.com/anthropics/claude-code/pull/85716) | **作者**: alifakbxr | **状态**: 开放

修复 #85613。hookify 插件原先只读取当前目录的 `.claude` 配置，导致安全规则在子目录中被绕过。此 PR 让 `config_loader.py` 递归查找祖先目录配置，堵住了一个静默权限提升漏洞。

---

### 4. [OPEN] fix(skills): 使用符合规范的名称 — 涉及 8 个内置 skills
**链接**: [PR #85243](https://github.com/anthropics/claude-code/pull/85243) | **作者**: bechor25 | **状态**: 开放

`plugin-dev` 和 `hookify` 等 8 个内置 skill 声明了包含空格且首字母大写的 `name` 字段，不符合 skills 规范。该 PR 统一修正为 spec 兼容的命名，涉及 `writing-rules`、`agent-development` 等多个 skill 文件。

---

### 5. [OPEN] fix(security-guidance): 跳过文档中的 XSS 警告
**链接**: [PR #85806](https://github.com/anthropics/claude-code/pull/85806) | **作者**: yxlphobe-pixel | **状态**: 开放

复用现有 `_DOC_EXTS` 路径过滤器，对四个 XSS 家族子串规则在文档/说明场景下抑制警告，同时保留可执行源码中的原有告警与规则 ID，并补充了文档场景的回归测试。

---

### 6. [OPEN] examples: 新增 MEP（Meat Puppet Elimination Protocol）— 多机 AI 会话异步状态中继
**链接**: [PR #42996](https://github.com/anthropics/claude-code/pull/42996) | **作者**: CRMinarian | **状态**: 开放（4月创建，8月12日仍活跃）

一个自执行的模式示例，解决切换机器或恢复会话时的上下文丢失问题：零新增基础设施、仅三个文件，通过异步状态中继实现跨设备会话连续性。对多机工作流的开发者有参考价值。

---

### 7. [OPEN] 修复 HackerOne Bug Bounty Program 访问问题
**链接**: [PR #85834](https://github.com/anthropics/claude-code/pull/85834) | **作者**: JoTalbot | **状态**: 开放

调整 `devcontainer.json` 参数以正确安装 hookify 插件，从而打通 HackerOne 漏洞赏金项目的访问链路。适用于参与安全研究的开发者环境。

---

### 8. [OPEN] docs: 修复插件与示例中的过期文档链接和 README 漂移
**链接**: [PR #85822](https://github.com/anthropics/claude-code/pull/85822) | **作者**: AliAltivate | **状态**: 开放

纯文档清理：将 `docs.anthropic.com` 的 hooks 旧链接替换为 `code.claude.com/docs/en/hooks`，修正 `plugins/README.md` 中的文档指向，所有变更均验证了重定向和引用文件的有效性。

---

### 9. [OPEN] docs: 将剩余过期文档链接指向 code.claude.com
**链接**: [PR #85925](https://github.com/anthropics/claude-code/pull/85925) | **作者**: AliAltivate | **状态**: 开放

承接上一个 PR 的清理工作，零文件重叠。将插件、插件 skills/agents/commands 及 issue 模板联系方式中残留的旧域名链接全部切换到 canonical 的 `code.claude.com` 目标。

---

## 功能需求趋势

- **MCP 生态走向生产级**：多账户支持（#36024）、MCP 工具调度可靠性（#79986）并列成为焦点。社区不再满足于“能连上”，开始要求多租户、高可用和跨平台一致性。
- **桌面端体验密集补课**：最近文件夹列表（#33502）、会话筛选器回归（#78775）、长 prompt 显示控制（#61675）——桌面 GUI 的基础信息架构仍需大量完善。
- **跨会话与多智能体协作**：#76727 的跨会话协调、#42996 的 MEP 状态中继、#67636 的并行 agent 资源失控，显示用户正在探索“多会话/多 agent 协同”场景，但官方原语缺失，只能自建方案。
- **模型行为可干预性**：#80988 的系统 prompt 隐式注入、#85677 的指令被忽略、#85982 的 Auto 模式分类器信任继承不稳定——开发者不希望模型行为被静默改写，要求“可解释、可配置、可关闭”。
- **计费透明与配额可信度**：#81703 与 #83062 两起账单事件，暴露了订阅额度与付费额度的边界管理问题，正在消耗用户信任。

---

## 开发者关注点

- **Windows 平台问题密集**：Ctrl+C 静默清空（#59408）、MSIX 写入重定向误判（#84841）、VS Code 扩展历史会话无法加载模型（#85977）——Windows 已成为 bug 高发平台，且多个问题长期未修复。
- **资源失控是高风险痛点**：ugrep 放大 OOM 至宿主机冻结（#54394）、并行 agent 消耗数百万 token 后崩溃（#67636）——开发者对“AI 工具失控烧钱”的容忍度极低。
- **沙箱/安全机制误伤正常使用**：macOS Seatbelt 因 ARG_MAX 完全不可用（#73468）、MSIX 写入被当作 junction 攻击（#84841）、安全指导规则产生源码误报——安全机制需要更精细的上下文感知。
- **指令遵循与记忆冲突**：#85677 项目中 CLAUDE.md 和持久记忆被“读取、确认、然后忽略”的现象，多位用户反馈子代理不遵守 - 明确指示，记忆文件冲突时由不确定的“赢家”胜出，这直接动摇了用户对长期项目自动化信任。
- **网络/API 稳定性**：SSE 流式连接重置与 10 次重试（#84404）、macOS 读图导致会话永久中毒（#85884）、v2.1.228 后仍存在的持久 ECONNRESET（#85979）——稳定性问题正在消耗开发者的耐心。
- **计费争议成为新兴吐槽点**：两起大额自动充值争议（$604.71 / $995.67）均来自同一位用户，且涉及“额度重置后仍计费”的机制性问题，社区期待 Anthropic 给出系统级修复而非个案退费。

---

*本日报数据来自 [anthropics/claude-code](https://github.com/anthropics/claude-code) 公开 GitHub 仓库，统计窗口为 2026-08-11 至 2026-08-12。*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报 — 2026-08-12

## 今日速览

今日 Codex 仓库共更新 3 个 Rust 预发布版本（v0.148.0-alpha.7/8/9），暂无详细变更说明；Issue 区热度集中在 **Windows 桌面端插件（Browser / Computer Use / Chrome）持续不可用、更新后丢失**等问题，其中 #20214（Windows 下高频卡顿）评论已近 100 条。PR 方面则密集推进 **Windows 沙箱权限、MCP 审批与 OAuth、TUI 历史渲染性能**等改进，社区关注度较高。

---

## 版本发布

- **[rust-v0.148.0-alpha.9](https://github.com/openai/codex/releases/tag/rust-v0.148.0-alpha.9)**：发布 `0.148.0-alpha.9`，暂无额外说明。
- **[rust-v0.148.0-alpha.8](https://github.com/openai/codex/releases/tag/rust-v0.148.0-alpha.8)**：发布 `0.148.0-alpha.8`，暂无额外说明。
- **[rust-v0.148.0-alpha.7](https://github.com/openai/codex/releases/tag/rust-v0.148.0-alpha.7)**：发布 `0.148.0-alpha.7`，暂无额外说明。

> 连续发布 3 个 alpha 版本，推测是在为下一轮稳定版做快速迭代，但官方尚未在 Release 中补充变更内容，开发者可关注后续更新。

---

## 社区热点 Issues

以下为过去 24 小时内更新最活跃、最值得关注的 10 个 Issue：

1. **[#20214 Codex App frequently freezes/stutters on Windows 11 Pro despite sufficient system resources](https://github.com/openai/codex/issues/20214)**  
   评论 96 · 👍 81 · 标签：bug, windows-os, app, performance  
   目前最热的性能问题：Windows 11 Pro + AMD Ryzen 5 5600 + 32GB 内存下，App 依然频繁卡顿。大量用户表示或与该问题相关，社区反应强烈。

2. **[#17320 Excessive SQLite WAL writes during streaming due to TRACE logs ignoring RUST_LOG](https://github.com/openai/codex/issues/17320)**  
   评论 31 · 👍 39 · 标签：bug, agent  
   流式输出时产生大量 SQLite WAL 写入，根因是 TRACE 日志未遵循 `RUST_LOG` 配置。该问题会显著增加磁盘 I/O，被社区视为“静默拖慢系统”的隐患。

3. **[#37403 [macOS][regression] Desktop cannot resume Remote Control / CLI thread: `already has an active writer`](https://github.com/openai/codex/issues/37403)**  
   评论 10 · 👍 9 · 标签：bug, app, app-server, remote  
   8 月 7 日 macOS 桌面端更新后，无法恢复远程控制或 CLI 线程，报错 “already has an active writer”，影响远程办公场景，属于较新的回归问题。

4. **[#21252 Adding CLI Option to hide tool activity](https://github.com/openai/codex/issues/21252)**  
   评论 9 · 👍 17 · 标签：enhancement, TUI  
   功能需求：希望 CLI/TUI 提供选项隐藏工具调用过程，避免长会话中输出被大量 tool-call 刷屏，只保留推理摘要和最终答案。社区支持度较高。

5. **[#34663 [CLI/TUI] Resume renders the full thread history instead of bootstrapping the latest turn](https://github.com/openai/codex/issues/34663)**  
   评论 8 · 👍 5 · 标签：enhancement, windows-os, TUI, CLI, session, performance  
   Resume 会话时渲染整个历史线程，导致卡顿并难聚焦当前回合。用户希望只加载最近一轮上下文，提升大会话恢复性能。

6. **[#25391 Windows Computer Use plugin fails to bootstrap: native pipe path is unavailable](https://github.com/openai/codex/issues/25391)**  
   评论 23 · 👍 2 · 标签：bug, windows-os, app, computer-use  
   Windows 上 Computer Use 插件无法启动，原因是 native pipe 路径不可用。多位 Pro 用户反馈，影响浏览器/电脑自动化操作。

7. **[#21670 Windows Codex Desktop: Chrome plugin setup hang; plugin uninstall fails with os error 5](https://github.com/openai/codex/issues/21670)**  
   评论 15 · 👍 7 · 标签：bug, windows-os, app, skills, app-server, browser  
   Windows 桌面端 Chrome 插件与 Browser Use 设置挂起，且卸载时报 “os error 5”。严重阻碍浏览器自动化功能的使用。

8. **[#30270 Bundled Browser/Chrome/Computer Use plugins disappear after Windows app updates due to stale bundled marketplace path](https://github.com/openai/codex/issues/30270)**  
   评论 12 · 👍 0 · 标签：bug, windows-os, app, skills, computer-use, browser, Papercuts 2026  
   每次 Windows 应用更新后，内置插件可能全部消失，原因是 bundled marketplace 路径未正确迁移，社区已将其标记为 Papercuts 候选，是更新稳定性的高频痛点。

9. **[#28950 Windows: Chrome plugin install fails to create com.openai.codexextension Native Messaging Host](https://github.com/openai/codex/issues/28950)**  
   评论 11 · 👍 0 · 标签：bug, windows-os, app, skills, browser  
   Chrome 插件已安装，但 Codex 桌面端安装流程未创建 Native Messaging Host，导致连接失败，是 Windows 端浏览器集成的典型问题。

10. **[#22114 Windows Codex Desktop corrupts chrome@openai-bundled cache on startup when Chrome native host locks extension-host.exe](https://github.com/openai/codex/issues/22114)**  
    评论 12 · 👍 0 · 标签：bug, windows-os, app, skills  
    Windows 下 Chrome 原生主机锁定 `extension-host.exe`，导致 Codex 启动时损坏内置 Chrome 插件缓存，插件重启后不可用。与上述插件问题形成“同族”反馈。

---

## 重要 PR 进展

过去 24 小时内有大量由 `copyberry[bot]` 提交并合并的 PR，以下 10 个在功能和修复上最具代表性：

1. **[#38080 Allow nested Git repositories in the Windows sandbox](https://github.com/openai/codex/pull/38080)**  
   修复 Windows 沙箱中嵌套 Git 仓库无法识别的问题，同时信任 worktree 根目录和 `/*` 通配路径，解除沙箱用户下 Git 仓库访问限制。

2. **[#38064 Grant Windows sandbox access to the Codex app root](https://github.com/openai/codex/pull/38064)**  
   为 Windows 沙箱增加对 Codex 应用根目录的读/执行 ACL，确保沙箱内可继承访问，同时继续单独管理 runtime 缓存。

3. **[#38061 Preserve proxy settings for Windows sandbox debug sessions](https://github.com/openai/codex/pull/38061)**  
   修复 `codex sandbox` 调试命令会覆盖已有代理设置的问题，保留其他沙箱启动时配置的持久代理设置。

4. **[#38103 Avoid cloning MCP invocations in TUI history](https://github.com/openai/codex/pull/38103)**  
   优化 TUI 历史单元格渲染，对 MCP 调用及其 server/tool 名称改为借用而非克隆，减少长会话中的内存拷贝。

5. **[#38089 Add CIMD support to MCP OAuth registration](https://github.com/openai/codex/pull/38089)**  
   为 MCP OAuth 注册增加 Client ID Metadata Documents（CIMD）支持，当授权服务器支持 public clients 时自动优先使用 CIMD，使本地回调流程更规范。

6. **[#38081 Use `ReviewDecision` for MCP tool approvals](https://github.com/openai/codex/pull/38081)**  
   将 MCP 工具审批响应统一收敛到 `ReviewDecision` 类型，并新增跨会话持久化的 `ApprovedMcpPolicyAmendment`，利于长期授权与拒绝原因管理。

7. **[#38087 Route gRPC code-mode sessions through the shared HTTP client](https://github.com/openai/codex/pull/38087)**  
   让 gRPC code-mode 连接也走公共 HTTP 客户端工厂，支持外网代理和自定义 CA，同时拒绝不支持的协议端点。

8. **[#38086 Support execution-host context when resolving cloud config](https://github.com/openai/codex/pull/38086)**  
   支持在解析云配置时显式指定 home directory，如此 `~` 路径可以按照执行主机上下文来解析，保持原有基础目录行为不变。

9. **[#38084 Allow empty input to start a turn](https://github.com/openai/codex/pull/38084)**  
   允许无内容的用户输入直接开始新回合，依赖生成的环境上下文推进；但持久化提交仍要求非空输入。

10. **[#38078 Reduce cloning in world-state patch handling](https://github.com/openai/codex/pull/38078)**  
    重构世界状态补丁处理：从借用 JSON 直接反序列化，并在原快照上合并补丁，大幅减少大快照的克隆与转换开销，是性能向优化。

---

## 功能需求趋势

结合今日 50 条活跃 Issue，社区功能诉求主要集中在以下方向：

- **Windows 桌面端插件可靠性**：Browser / Chrome / Computer Use 插件在更新后消失、安装失败、原生管道不可用等，已形成一套“Windows 插件管理”问题集群，用户希望官方提供一键修复或稳定的更新迁移机制。
- **CLI/TUI 会话体验**：要求隐藏工具调用详情、优化 resume 时只加载当前轮次、降低历史渲染开销，属于高频体验改善类需求。
- **MCP 与外部工具链集成**：多线程 MCP 审批、OAuth/CIMD 注册、云端配置解析等，表明社区正把 Codex 作为网关接入更多企业级 MCP 服务。
- **性能与资源占用**：SQLite WAL 写入、TUI 内存克隆、启动卡顿等被反复提及，性能优化成为功能之外的重要关注点。
- **沙箱与权限模型**：Windows 沙箱对 Git 仓库、应用根目录、代理设置的访问控制，说明沙箱模式正在快速补位，用于更复杂的本地开发场景。

---

## 开发者关注点

- **插件 “更新即损坏”**：多个 Issue 指向 Windows 应用升级后插件状态残留、路径失效，开发者被迫反复重装，严重影响自动化工作流。
- **Native Messaging Host 注册不完整**：Chrome 扩展已安装但 Codex 侧不创建 Windows 注册表项，导致浏览器工具始终不可用，排查成本高。
- **远程控制/CLI 恢复回归**：macOS 更新后 `already has an active writer` 错误，使远程接续本地 CLI 线程失败，对办公场景影响直接。
- **日志与磁盘写入失控**：TRACE 日志绕过 `RUST_LOG` 造成大量 SQLite WAL 写入，属于“隐藏的地雷”，开发者在诊断性能问题时容易忽略。
- **TUI 长会话卡顿**：Resume 渲染整个历史线程、工具调用单元格刷屏，说明默认渲染策略尚未针对超大会话做充分优化。

> 总体来看，社区对 Codex 的功能丰富度认可度提升，但 **Windows 端稳定性和插件生命周期管理**已成为最迫切的问题。建议官方将 Windows 插件迁移/修复流程列为近期优先项。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报 — 2026-08-12

## 1. 今日速览

今日发布了 4 个版本（含 1 个正式版 v0.55.1、1 个预览版和 2 个 nightly），核心修复聚焦于**模型容量误报**与**配额映射错误**。安全方面有多项关键 CVE 修复 PR 在推进（shell-quote、simple-git），同时社区对 **429 限流、子代理误报成功、Shell 命令挂起**等稳定性问题讨论热度最高。

---

## 2. 版本发布

### v0.55.1（正式版）
- **修复 CI 发布验证**：解决 `npm ci` 忽略脚本导致的验证失败问题（[#28116](https://github.com/google-gemini/gemini-cli/pull/28116)）
- **修复工作区二进制遮蔽**：避免发布验证阶段本地二进制干扰（[#28132](https://github.com/google-gemini/gemini-cli/pull/28132)）
- 引入 **Tool Registry** 功能基础

### v0.56.0-preview.1（预览版）
- 变更日志与版本号同步更新，为 v0.56 系列预览做铺垫

### v0.56.0-nightly.20260812.g5024443c7（夜间版）
- **修复虚假的模型容量耗尽误报**：解决核心包中配额查询模型映射错误（[#28730](https://github.com/google-gemini/gemini-cli/pull/28730)）
- **Evals 新增本地报告命令**：支持开发者本地聚合评估数据（[#28369](https://github.com/google-gemini/gemini-cli/pull/28369)）

### v0.55.0-preview.3（预览版补丁）
- 将修复提交 cherry-pick 至 v0.55.0-preview.2 分支，同步解决模型容量误报问题

---

## 3. 社区热点 Issues（10 个）

### 3.1 429 限流频繁触发，会话被长时间阻塞
[#26911](https://github.com/google-gemini/gemini-cli/issues/26911)（关闭，12 评论）  
用户反馈新配额会话仅使用不到 10% 即遭遇 429，CLI 进入最长 1 小时的假性"思考"状态。这是影响实际体验的高频痛点，虽已关闭但社区关注度较高。

### 3.2 子代理因 MAX_TURNS 中断却被报告为成功
[#22323](https://github.com/google-gemini/gemini-cli/issues/22323)（打开，P1，12 评论）  
`codebase_investigator` 子代理实际上在分析前就已达到最大执行轮次，但返回结果却是 `status: "success"`，严重误导开发者对代理执行情况的判断。

### 3.3 回车键无响应
[#23297](https://github.com/google-gemini/gemini-cli/issues/23297)（打开，P1，11 评论，10 👍）  
开发者反馈 Shell 重启后按回车无任何反应，是目前获得最多 👍 的 UI 类 Bug。

### 3.4 组件级评估体系建设（EPIC）
[#24353](https://github.com/google-gemini/gemini-cli/issues/24353)（打开，P1，7 评论）  
追踪 76 个行为评估测试的质量与覆盖，为 6 个支持模型建立粒度更细的组件评估机制。

### 3.5 AST 感知文件读取与代码库映射研究（EPIC）
[#22745](https://github.com/google-gemini/gemini-cli/issues/22745)（打开，P2，7 评论）  
评估引入 AST 感知工具能否提升方法边界读取精度、减少 token 消耗，并改善导航效率。

### 3.6 Gemini 对自定义 Skills 与子代理利用率不足
[#21968](https://github.com/google-gemini/gemini-cli/issues/21968)（打开，P2，6 评论）  
用户反馈即使提供了 `gradle`、`git` 等技能描述，模型在相关场景下仍几乎不会主动调用自定义技能与子代理。

### 3.7 自动记忆对低信号会话无限重试
[#26522](https://github.com/google-gemini/gemini-cli/issues/26522)（打开，P2，5 评论）  
当提取代理认为会话低信号而不读取时，该会话不会被标记为已处理，导致同一个低价值会话被反复作为候选处理。

### 3.8 Sandbox 不转发 GOOGLE_GENAI_API_VERSION
[#24828](https://github.com/google-gemini/gemini-cli/issues/24828)（打开，P2，5 评论）  
沙箱环境只转发硬编码的环境变量列表，导致用户自定义的 `GOOGLE_GENAI_API_VERSION` 无法传入容器，造成 Vertex 兼容 API 返回 404。

### 3.9 Shell 命令执行卡在"等待输入"
[#25166](https://github.com/google-gemini/gemini-cli/issues/25166)（打开，P1，4 评论，3 👍）  
简单命令执行完毕后，CLI 仍显示命令处于活动状态并等待输入。与 #24707 同属 Shell 交互挂起类问题，社区反馈多次出现。

### 3.10 工具数量超过 128 个触发 400 错误
[#24246](https://github.com/google-gemini/gemini-cli/issues/24246)（打开，P2，3 评论）  
当启用工具超过 128 个时请求会报 400 错误，开发者期望能根据启用范围智能裁剪工具列表。

---

## 4. 重要 PR 进展（10 个）

### 4.1 [已合入] 修复模型容量误报与配额映射
[#28730](https://github.com/google-gemini/gemini-cli/pull/28730)  
在 CLI 与核心包两侧修正模型配额查找映射，同时保留 UI 中"Keep trying"选项以应对瞬时容量高峰。已进入 v0.56 系列版本。

### 4.2 拦截 `$VAR` 变量扩展绕过安全门
[#28691](https://github.com/google-gemini/gemini-cli/pull/28691)（P1，大改动）  
修复 `detectBashSubstitution()` 与 `detectPowerShellSubstitution()` 中未覆盖的变量扩展模式，加固 GHSA-wpqr-6v78-jr5g 安全边界。

### 4.3 支持 SGLang 与本地 OpenAI 兼容端点
[#28681](https://github.com/google-gemini/gemini-cli/pull/28681)（P1，超大改动）  
为 CLI 增加 SGLang 和本地 OpenAI 兼容服务接入能力，扩展非 Google 模型的使用场景。

### 4.4 修复 web-fetch 的 SSRF 漏洞
[#28557](https://github.com/google-gemini/gemini-cli/pull/28557)（已关闭）  
使用异步 DNS 解析替代同步 `isPrivateIp()` 检查，防止域名解析到内网地址（如 `169.254.169.254`）绕过校验。

### 4.5 升级 shell-quote 至 1.8.4（CVE-2026-9277）
[#28780](https://github.com/google-gemini/gemini-cli/pull/28780)  
修复 shell-quote 的 **CRITICAL** 级漏洞，由 trivy 扫描发现并自动升级依赖。

### 4.6 升级 simple-git 至 3.32.3（CVE-2026-28292）
[#28778](https://github.com/google-gemini/gemini-cli/pull/28778)  
同样由 trivy 发现的 **CRITICAL** 级漏洞，将 simple-git 从 3.28.0 升级至 3.32.3。

### 4.7 验证期间拒绝 A2A OpenID Connect 认证
[#28680](https://github.com/google-gemini/gemini-cli/pull/28680)  
修复 A2A 远程代理 OpenID Connect 配置可通过验证、运行时却失败的问题，将其在配置校验阶段直接拦截。

### 4.8 改进 Vertex AI 401 错误提示
[#28679](https://github.com/google-gemini/gemini-cli/pull/28679)（P2）  
当用户配置 vertex-ai 认证但仅提供标准 Gemini API Key 时，给出明确可操作的错误指引，改善开发者体验。

### 4.9 修复 OAuth 回调超时泄漏
[#28678](https://github.com/google-gemini/gemini-cli/pull/28678)  
集中管理 OAuth 回调服务器资源，防止超时回调残留和内存泄漏。

### 4.10 修复 IDE 连接中的目录不匹配问题
[#28729](https://github.com/google-gemini/gemini-cli/pull/28729)  
解决 Cider 或 VS Code Fork/远程工作区中，因虚拟目录或 FUSE 路径差异导致 IDE Companion 连接失败的问题。

---

## 5. 功能需求趋势

从当前 Issues 中提炼出社区最关注的功能方向：

| 方向 | 代表 Issue | 关注度 |
|------|-----------|--------|
| **Agent 行为可靠性** | 子代理误报成功（#22323）、技能利用率不足（#21968）、破坏性命令约束（#22672） | 高 |
| **Shell 执行稳定性** | 命令挂起（#25166）、交互命令超时（#24707）、回车无响应（#23297） | 高 |
| **浏览器代理增强** | Wayland 兼容（#21983）、锁恢复与自动接管（#22232）、settings.json 覆盖（#22267） | 中 |
| **自动记忆系统** | 低信号无限重试（#26522）、无效 Patch 隔离（#26523）、确定性脱敏（#26525） | 中 |
| **本地模型 / 多后端** | SGLang 与 OpenAI 兼容端点（#28681）、SearchText `git grep` 回退修复（#27503） | 中 |
| **安全加固** | SSRF 修复（#28557）、变量注入（#28691）、CVE 批量升级（#28780/#28778） | 高（PR 侧） |
| **规模与配额** | 429 限流（#26911）、超过 128 个工具 400 错误（#24246） | 高 |
| **AST 感知代码分析** | 文件读取/代码库映射研究（#22745/#22746） | 低（探索中） |

---

## 6. 开发者关注点

- **429 限流体验差**：新配额会话早期即触发限流，且 CLI 会进入长达 1 小时的假性"思考"，应显著缩短等待时长或提供更明确的错误提示。
- **Shell 挂起频发**：多条 Issue 指向命令执行完毕但 UI 仍显示"等待输入"，开发者对此类卡顿容忍度最低。
- **子代理状态可信度不足**：MAX_TURNS 中断被报为成功、子代理未经权限允许即运行（#22093），反映出状态报告与权限控制需要改进。
- **安全漏洞响应及时**：社区持续关注依赖安全（shell-quote、simple-git 均为 CRITICAL 级 CVE），团队快速响应值得肯定。
- **配置覆盖失效问题**：Sandbox 环境变量未透传（#24828）、浏览器代理忽略 settings.json 覆盖（#22267），这类"配置不生效"问题消耗开发者大量排查时间。
- **自动记忆系统资源浪费**：低信号会话被无限重试、无效内存 Patch 被静默跳过，社区希望增加可见性和人工介入手段。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报（2026-08-12）

## 今日速览

今日无新版本 Release，社区讨论集中在 1.0.74 / 1.0.79 的回归问题与生态兼容性上：Windows 插件安装更新持续报 `Access is denied`，大会话恢复出现 OOM 回归，MCP 与 Skills 互操作问题密集暴露。安全方面有 `adm-zip` CVE 报告；PR 侧仅 3 个，聚焦 CI 安全与开发容器配置。

## 版本发布

过去 24 小时无新版本发布。当前社区提交主要基于 v1.0.74 和 v1.0.79 展开。

## 社区热点 Issues

1. **[#4251 大会话恢复在 1.0.74 出现 OOM / CPU 占用回归](https://github.com/github/copilot-cli/issues/4251)**  
   长期使用大会话的用户无法正常 `resume`；作者通过同机、同会话 A/B 测试将回归锁定到 1.0.74，峰值内存约为 1.0.73 的 3–4 倍。属核心会话功能的性能回归，社区关注度高。

2. **[#4095 Windows 插件更新因 VS Code 占用文件句柄失败](https://github.com/github/copilot-cli/issues/4095)**  
   `copilot plugin update` 报 `Access is denied (os error 5)`，根因指向 VS Code Copilot 扩展的 watcher 锁住 `installed-plugins`。该 Issue 有 14 个 👍，是本批社区反应最强烈的 Windows 问题。

3. **[#4151 Windows 上插件安装对所有来源 100% 失败](https://github.com/github/copilot-cli/issues/4151)**  
   marketplace、GitHub repo、本地目录三种来源均报 `Access is denied`。相比 #4095，安装阶段即失败，对新用户接入插件生态是硬阻断。

4. **[#4211 MCP 结构化响应中的 BigInt 导致任务中止](https://github.com/github/copilot-cli/issues/4211)**  
   MCP server 返回大数时 CLI 报 `Do not know how to serialize a BigInt`，所有进行中任务直接终止。第三方 MCP 服务使用大整数 ID 或时间戳时容易触发。

5. **[#4422 企业账号下所有 Claude 模型被禁用](https://github.com/github/copilot-cli/issues/4422)**  
   用户在 Copilot 设置中能看到 Claude 系列模型，但 CLI 模型选择时不可用；回退 CLI 版本也无法解决。3 个 👍，对企业模型策略下发链路有较大影响。

6. **[#4431 v1.0.79 `/config model` 会清空全部 settings.json](https://github.com/github/copilot-cli/issues/4431)**  
   设置用户级模型时直接覆盖整个配置文件，属于破坏性配置 Bug。该 Issue 已关闭，但使用 `/config model` 的用户仍可能遇到配置丢失风险。

7. **[#4439 GitLab Self-Managed MCP OAuth 元数据被 RFC 8414 issuer mismatch 拒绝](https://github.com/github/copilot-cli/issues/4439)**  
   CLI 在 OAuth 2.0 Dynamic Client Registration 流程中无法兼容 GitLab 的 issuer 元数据，阻碍企业自建 MCP 服务器接入。新出现的互操作问题。

8. **[#4437 `.claude/agents/*/AGENT.md` 的 `model:` 覆盖会话模型，破坏 BYOK 子代理](https://github.com/github/copilot-cli/issues/4437)**  
   Claude Code 的 Agent 定义被 Copilot 自定义 Agent 继承后，`model:` 字段覆盖会话级模型，导致 BYOK provider 上 subagent spawn 失败。刚进入 triage，但跨工具兼容性风险较高。

9. **[#4451 显式调用 slash skill 后被模型侧 `skill()` 重复加载并报 "Skill not found"](https://github.com/github/copilot-cli/issues/4451)**  
   交互式 skill 已展开到会话，助手仍尝试通过模型侧 skill 工具二次加载，对 `disable-model-invocation` 的 skill 产生冗余失败。新增 triage，有 2 个 👍。

10. **[#4442 CLI 二进制内置 `adm-zip` 0.5.17，存在 CVE-2026-39244](https://github.com/github/copilot-cli/issues/4442)**  
    组织级安全扫描会阻止基于 Copilot CLI 的 Docker 镜像构建。虽然属于依赖漏洞，但对企业供应链合规是硬阻断，安全优先级高。

## 重要 PR 进展

今日仅 3 个 PR，全部列出：

1. **[#4452 Revert 5 copilot/fix with copilot（已关闭）](https://github.com/github/copilot-cli/pull/4452)**  
   标题显示这是一次对 Copilot 自动生成 fix 的回滚请求，创建于 2026-08-12 并同日关闭，尚未合并。

2. **[#4449 将 PR 自动化从 `pull_request_target` 迁移（Draft）](https://github.com/github/copilot-cli/pull/4449)**  
   为避免高权限的 `pull_request_target` 执行不受信任 PR 输入，改为低权限 `pull_request` workflow，并将需要仓库写权限的操作拆到独立安全流程。属于 CI 供应链安全加固。

3. **[#4428 添加初始 devcontainer 配置](https://github.com/github/copilot-cli/pull/4428)**  
   为仓库新增 Dev Container 配置，降低贡献者本地环境搭建成本。目前处于 Open 状态。

## 功能需求趋势

- **模型选择与 Agent 策略可配置性**：社区希望 `auto` 模式跳过不可用模型（[#4445](https://github.com/github/copilot-cli/issues/4445)）、用户级默认模型真正贯穿新会话（[#4434](https://github.com/github/copilot-cli/issues/4434)）、子代理不擅自覆盖模型（[#4437](https://github.com/github/copilot-cli/issues/4437)、[#4432](https://github.com/github/copilot-cli/issues/4432)），以及 rubber-duck 保持跨模型族评审（[#4380](https://github.com/github/copilot-cli/issues/4380)）。

- **Skills 与 Claude Code 生态互操作**：社区希望兼容 `.claude/rules`（[#4440](https://github.com/github/copilot-cli/issues/4440)），修复 `disable-model-invocation` 后 skill 完全不可达（[#4438](https://github.com/github/copilot-cli/issues/4438)），并解决重复加载和重名覆盖问题（[#4430](https://github.com/github/copilot-cli/issues/4430)、[#4451](https://github.com/github/copilot-cli/issues/4451)）。

- **MCP 生态兼容性**：BigInt 序列化崩溃（[#4211](https://github.com/github/copilot-cli/issues/4211)）和 OAuth metadata 严格校验（[#4439](https://github.com/github/copilot-cli/issues/4439)）表明第三方 MCP server 接入仍需要放宽兼容边界。

- **会话持久化与上下文管理**：大会话恢复 OOM（[#4251](https://github.com/github/copilot-cli/issues/4251)）、反复 compaction 导致早期上下文丢失（[#4441](https://github.com/github/copilot-cli/issues/4441)）、新会话不继承默认模型（[#4434](https://github.com/github/copilot-cli/issues/4434)）都被频繁提及。

- **权限与安全合规**：权限提示应区分只读/写操作（[#4443](https://github.com/github/copilot-cli/issues/4443)），企业策略应能集中管理 sandbox 配置（[#4446](https://github.com/github/copilot-cli/issues/4446)），依赖漏洞与 CI 供应链安全也进入关注视野（[#4442](https://github.com/github/copilot-cli/issues/4442)、[#4449](https://github.com/github/copilot-cli/pull/4449)）。

## 开发者关注点

- **Windows 插件生命周期是最明显痛点**：安装与更新阶段均出现 `Access is denied`（[#4151](https://github.com/github/copilot-cli/issues/4151)、[#4095](https://github.com/github/copilot-cli/issues/4095)），且与 VS Code 文件占用相关，Windows 用户无法稳定使用插件功能。

- **模型状态管理混乱**：企业账号 Claude 不可用（[#4422](https://github.com/github/copilot-cli/issues/4422)）、Free 用户 Codespaces 报 No model available（[#4405](https://github.com/github/copilot-cli/issues/4405)）、auto 模式选到不可用模型（[#4445](https://github.com/github/copilot-cli/issues/4445)）、`/config model` 清空配置（[#4431](https://github.com/github/copilot-cli/issues/4431)）都指向模型选择与配置链路不够稳定。

- **Skill 调用一致性不足**：显式 slash skill 重复加载并报未找到（[#4451](https://github.com/github/copilot-cli/issues/4451)）、`disable-model-invocation` 让 skill 完全不可达（[#4438](https://github.com/github/copilot-cli/issues/4438)）、项目 skill 与插件 skill 重复（[#4430](https://github.com/github/copilot-cli/issues/4430)）导致调用失败与 prompt 空间浪费。

- **性能与资源占用回归**：大会话 resume OOM（[#4251](https://github.com/github/copilot-cli/issues/4251)）、tgrep 索引器 OOM-kill 主机（[#3976](https://github.com/github/copilot-cli/issues/3976)）、搜索卡住不结束（[#4448](https://github.com/github/copilot-cli/issues/4448)）对 monorepo 和长会话用户影响显著。

- **MCP 互操作仍不成熟**：BigInt 崩溃和 GitLab OAuth 失败说明，非 GitHub 生态的 MCP server 接入仍会遇到协议级兼容问题，且失败时会中断整个任务流程。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报

**日期：2026-08-12** | 数据来源：github.com/MoonshotAI/kimi-cli

---

## 今日速览

Kimi Code CLI 社区昨日（8月11日）整体热度平稳，无新版本发布。值得关注的是，社区对跨会话**记忆系统（Memory System）**的长期需求（Issue #1283）持续发酵，已积累34条讨论；同时，一批由开发者 hobostay 提交的**稳定性修复 PR**（含 TOCTOU 竞态条件修复、assert 替换等）于昨日集中刷新状态，表明代码健壮性正在成为社区关注焦点。此外，Windows 平台存在环境兼容性 bug 反馈。

---

## 版本发布

过去 24 小时内无新版本发布。

---

## 社区热点 Issues（共 3 条）

### 1. ⭐ 长期高热度需求：跨会话记忆系统
- **作者**: CatKang | **创建**: 2026-02-27 | **更新**: 2026-08-11
- **状态**: 开放 | **评论**: 34
- **链接**: [Issue #1283](https://github.com/MoonshotAI/kimi-cli/issues/1283)
- **摘要**: 请求实现综合性的 **Memory System**，使 Kimi Code CLI 在跨会话间记住项目上下文、代码模式及用户偏好，涵盖 AI 管理的自动记忆与用户自定义的手动指令。
- **点评**: 这是目前社区讨论量最高的 Issue（虽然 👍 为 0，但 34 条约 6 个月的持续评论表明真实需求强劲）。此功能直接关系到 AI 编程助手的实用性上限，属于长期路线图中的关键能力。

### 2. 功能请求：Kimi Web 端支持"引用并回复"
- **作者**: topit | **创建**: 2026-08-11 | **更新**: 2026-08-11
- **状态**: 开放 | **评论**: 0
- **链接**: [Issue #2601](https://github.com/MoonshotAI/kimi-cli/issues/2601)
- **摘要**: 希望在 Kimi Web 的 AI 回复中支持**精准引用**：用户可选中回复中的任意文本片段（段落、代码块、计划步骤、diff 解释等），并附带评论或追问，使 Agent 基于该选择继续工作。
- **点评**: 这是一个交互体验层面的精细打磨，类似 GitHub 的代码评论功能。若实现，将显著提升用户在长回复场景中的反馈效率。同时这也与 Claude 等工具的"代码引用"交互趋势一致。

### 3. Bug：Windows PowerShell 7 默认 D 盘启动时路径错误
- **作者**: RooKichenn | **创建**: 2026-08-11 | **更新**: 2026-08-11
- **状态**: 开放 | **评论**: 0
- **版本影响**: v0.33 | **模型**: kimi-for-coding
- **链接**: [Issue #2600](https://github.com/MoonshotAI/kimi-cli/issues/2600)
- **摘要**: Windows 用户将 PowerShell 7 默认启动目录设为 D 盘时，从 D: 打开 kimi code 会找不到路径。
- **点评**: 又是一个 Windows 路径处理类问题。考虑到 kimi-cli 在 Windows 开发者中的使用比例，这一类环境兼容性 bug 建议优先排查。

---

## 重要 PR 进展（共 8 条）

### 🔥 重点观察

#### [OPEN] 可配置思考努力度 + `/effort` 命令
- **作者**: n-WN | **创建**: 2026-07-18 | **更新**: 2026-08-11
- **链接**: [PR #2509](https://github.com/MoonshotAI/kimi-cli/pull/2509)
- **功能**: 新增可配置的 thinking effort（思考努力度）及 `/effort` 命令，解决 Issue #2501；基于已有的 `reasoning_effort` 透传机制（#318、#2499）之上构建。
- **点评**: 这是目前唯一处于「开放」状态的 PR，也是最值得关注的功能增强。允许用户动态控制模型推理深度，对平衡响应质量与 Tokens 成本很有价值。

### 已关闭/合并的修复类 PR

昨日有多条由 hobostay 提交的稳定性修复 PR 更新状态，虽为几个月前创建，但集中刷新可能与最新版本的回归测试或审查推进有关：

#### PR #2057：ACP 会话中用 RuntimeError 替换 assert
- **作者**: hobostay | **创建**: 2026-04-24 | **更新**: 2026-08-11 | **状态**: CLOSED
- **链接**: https://github.com/MoonshotAI/kimi-cli/pull/2057
- **修复**: `acp/session.py` 中 5 个 `assert` 语句替换为 `RuntimeError`，避免 Python `-O` 模式下断言被剥离导致的关键校验失效。

#### PR #2056：消除 WireFile.append_record 中的 TOCTOU 竞态条件
- **作者**: hobostay | **创建**: 2026-04-24 | **更新**: 2026-08-11 | **状态**: CLOSED
- **链接**: https://github.com/MoonshotAI/kimi-cli/pull/2056
- **修复**: `WireFile.append_record` 中原存在 `path.exists()` 检查与 `path.stat()` 调用之间的竞态窗口，文件可能被并发删除导致异常。此 PR 修复了该类竞态条件。

#### PR #2055：AgentSpec 用 AgentSpecError 替换 assert
- **作者**: hobostay | **创建**: 2026-04-24 | **更新**: 2026-08-11 | **状态**: CLOSED
- **链接**: https://github.com/MoonshotAI/kimi-cli/pull/2055
- **修复**: `agentspec.py` 中将 `assert agent_spec.extend is None` 替换为 `AgentSpecError`，避免 `-O` 模式下安全检查被静默移除。

#### PR #1328：修复文件工具的小 bug 和 UI 反馈问题
- **作者**: hobostay | **创建**: 2026-03-03 | **更新**: 2026-08-11 | **状态**: CLOSED
- **链接**: https://github.com/MoonshotAI/kimi-cli/pull/1328
- **修复**: 修复 `StrReplaceFile` 中多次编辑时替换计数计算错误（未考虑累计偏移）等问题，共修复 3 个细微 bug。

#### PR #1082：PyInstaller 过滤不存在的 dateparser 缓存文件
- **作者**: hobostay | **创建**: 2026-02-10 | **更新**: 2026-08-11 | **状态**: CLOSED
- **链接**: https://github.com/MoonshotAI/kimi-cli/pull/1082
- **修复**: `dateparser` 时区缓存文件（`dateparser_tz_cache.pkl`）为懒生成，在全新环境或 CI 中可能不存在，导致 PyInstaller 打包收集时报错。此 PR 加以过滤。

#### PR #1077：移除 WriteFile 工具中冗余的 mode 验证
- **作者**: hobostay | **创建**: 2026-02-10 | **更新**: 2026-08-11 | **状态**: CLOSED
- **链接**: https://github.com/MoonshotAI/kimi-cli/pull/1077
- **修复**: `src/kimi_cli/tools/file/write.py` 中删除了对 `mode` 参数（"overwrite"/"append"）的多余运行时校验代码（84-91 行）。

#### PR #1393：修复 ACP Shell 命令通过终端参数路由
- **作者**: hanhan3344 | **创建**: 2026-03-10 | **更新**: 2026-08-11 | **状态**: CLOSED
- **链接**: https://github.com/MoonshotAI/kimi-cli/pull/1393
- **修复**: 修复 ACP Shell 终端执行时 shell 可执行文件与调用参数的路由方式，并适配当前 ACP SDK 通过 `terminal_id` 的响应结构；新增 Bash 与 PowerShell 命令/参数路由的回归测试。

---

## 功能需求趋势

从当前 Issue 与 PR 中可提炼出以下社区关注方向：

1. **🧠 长期记忆与持久上下文**（#1283）：跨会话记忆用户偏好和项目模式，是社区持续关注的功能方向。
2. **⚙️ 推理能力控制**（PR #2509）：支持可调节的思考深度（thinking effort），表明用户对「质量/成本平衡」有精细化控制需求。
3. **💬 交互体验精细度**（#2601）：AI 回复中支持片段级引用与评论，提升复杂任务（如代码审查、方案讨论）中的交互效率。
4. **🪟 Windows 环境兼容性**（#2600）：路径处理、默认 shell 兼容性等问题持续出现，提示需要加强 Windows 平台适配测试。

---

## 开发者关注点

1. **Python 运行时安全性**：多位贡献者集中修复 `assert` 在生产代码中的误用（PR #2057、#2055），反映出社区对「`-O` 模式下的代码可靠性」有较强意识。这背后是对 CLI 工具在 CI/CD 及自动化场景中稳定性的要求。
2. **并发/竞态条件**：PR #2056 对 WireFile 追加记录时的 TOCTOU 竞态修复，暗示本地文件 I/O 在并发访问下已有实际遇到问题的场景。
3. **Windows 路径与 Shell 问题**：Issue #2600 再次暴露 Windows 环境下路径解析和默认 shell（PowerShell）配置的兼容性问题；同时 PR #1393 也涉及 PowerShell 的终端命令路由修复，可见开发者中 Windows 用户占比不容忽视。
4. **打包与分发稳定性**：PR #1082 修复 PyInstaller 打包时懒加载缓存的缺失问题，反映出打包构建环境（如 CI）与本地环境的差异对发布流程的干扰。

---
*本日报由 AI 自动生成，数据抓取时间截至 2026-08-12 00:00 UTC。*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

## OpenCode 社区动态日报 — 2026-08-12

---

### 1. 今日速览

今日社区核心聚焦 **V2（2.0 beta）稳定性问题**：ALSA 音频错误刷屏、无限重试/压缩循环、V1→V2 迁移失败等多项 Bug 被集中反馈；与此同时，社区开始大量提出**类 Claude Code 风格的斜杠命令功能需求**（/usage、/verify、/security-review 等），预示交互范式可能迎来一波扩充。PR 侧则呈现高活跃度修复状态，TUI 体验细节与桌面端身份对齐成为主要改进方向。

---

### 2. 版本发布

过去 24 小时无新版本 Release。

---

### 3. 社区热点 Issues（10 条精选）

#### #16017 [已关闭] 请求新增 Go 套餐用量/余额 API 端点
- **作者**: StephanMeijer | 创建: 2026-03-04 | 更新: 2026-08-12 | 评论: 34 | 👍: 137
- **链接**: https://github.com/anomalyco/opencode/issues/16017
- **重要性**: 本期热度最高议题。用户希望将 Go 套餐订阅用量数据（Dashboard 已展示）通过公开 API 端点暴露，支持滚动/周/月三种时间窗口。137 个 👍 和 34 条评论说明开发者对用量透明化和自动化监控有强需求，可能是付费用户做成本治理的核心诉求。

#### #27924 [开启] 会话无限压缩循环：压缩无法缩减上下文时死循环
- **作者**: ranxianglei | 创建: 2026-05-16 | 更新: 2026-08-12 | 评论: 8
- **链接**: https://github.com/anomalyco/opencode/issues/27924
- **重要性**: 直接卡死会话的严重 Bug。`prompt.ts` 中的循环逻辑在压缩状态丢失或压缩后仍超限时，会陷入 `溢出→压缩→仍溢出→再压缩` 的无限循环。长时间运行的复杂会话极易触发，属于 2.0 稳定性关键问题。

#### #41763 [开启] [2.0] ALSA 错误刷屏并破坏 TUI 终端显示
- **作者**: tsah | 创建: 2026-08-11 | 更新: 2026-08-12 | 评论: 5
- **链接**: https://github.com/anomalyco/opencode/issues/41763
- **重要性**: V2 在无声卡 Linux 主机上反复初始化 ALSA，滚动命令选择器时诊断信息直接打印到 TUI 上、破坏界面。同类问题 #41890 也在同一天被报告（Ubuntu 22 + mosh 会话），说明这是 V2 在 Linux 环境下的高频共性问题。

#### #39831 [开启] Zen 模型 gpt-5.6-luna / gpt-5.6-terra 持续报错
- **作者**: geminaldiol2333-commits | 创建: 2026-07-31 | 更新: 2026-08-11 | 评论: 5
- **链接**: https://github.com/anomalyco/opencode/issues/39831
- **重要性**: 通过 Zen 使用 gpt-5.6-luna / terra 时稳定返回 HTTP 403 "Upstream request failed"，而同系列的 gpt-5.4-nano 正常。新模型兼容性问题直接阻断用户升级路径，涉及 Zen 提供方与模型路由配置的协同。

#### #38193 [开启] 桌面端"添加服务器"对话框三个字段无法编辑
- **作者**: sergiofspedro | 创建: 2026-07-21 | 更新: 2026-08-12 | 评论: 4
- **链接**: https://github.com/anomalyco/opencode/issues/38193
- **重要性**: v1.18.4 桌面版中 Server name / Username / Password 三个可选项均卡在 placeholder 无法输入，仅有 Server address 可编辑。功能性 UI 缺陷，影响自建服务器用户配置体验，已持续三周未修复。

#### #41848 [开启] LLM 重试无上限：流错误导致无限重试、UI 永久卡在 "Thinking…"
- **作者**: teran-netizen | 创建: 2026-08-11 | 更新: 2026-08-12 | 评论: 2
- **链接**: https://github.com/anomalyco/opencode/issues/41848
- **重要性**: RETRY_MAX_DELAY 被设为 2147483647ms（约 24 天），DeepSeek 等提供方流错误时重试永不终止，用户无任何错误反馈。已有 5 个进程因此死亡。重试策略缺少"最大次数"封顶是严重的健壮性缺陷。

#### #41806 [开启] Linux 实例引导永久挂起：git 子进程成僵尸
- **作者**: oren-kk | 创建: 2026-08-11 | 更新: 2026-08-12 | 评论: 2
- **链接**: https://github.com/anomalyco/opencode/issues/41806
- **重要性**: TUI 正常渲染、可输入，但初始化时 spawn 的 git 子进程退出后未被 reap（保持 `<defunct>`），bootstrap await 永不 settle，Enter 无法启动会话。进程管理缺陷，表现为间歇性永久挂起，定位成本高。

#### #41777 [已关闭] [2.0] v2 中 webfetch 在 Code Mode 下返回 null（回归）
- **作者**: wangdabaoqq | 创建: 2026-08-11 | 更新: 2026-08-12 | 评论: 3
- **链接**: https://github.com/anomalyco/opencode/issues/41777
- **重要性**: 回归窗口精确锁定在 `next-202606301613` 与 `next-16365` 之间：webfetch 报告成功但内容为 null，且从模型顶层工具列表中消失。工具注册表行为变更导致的能力丢失，已确认关闭。

#### #37090 [开启] apply_patch 在 Windows 下破坏 CRLF 行尾
- **作者**: Stefan-Bachmann | 创建: 2026-07-15 | 更新: 2026-08-11 | 评论: 3
- **链接**: https://github.com/anomalyco/opencode/issues/37090
- **重要性**: Windows 项目默认 CRLF，但 apply_patch/write 工具强制写入 LF，导致 git diff 全文件级噪音。跨平台文件编码处理是 Windows 用户长期痛点，已近一个月未解决。

#### #41915 [开启] 功能请求：/usage 命令 — 会话 Token 与成本报告
- **作者**: afonsoft | 创建: 2026-08-12 | 更新: 2026-08-12 | 评论: 1
- **链接**: https://github.com/anomalyco/opencode/issues/41915
- **重要性**: 今日 afonsoft 连续提交 8 个受 Claude Code 启发的斜杠命令需求（/usage、/security-review、/verify、/simplify、/btw、/approve、/context、/cost 别名）。本轮批量提案集中反映了社区对"内置、可复用的命令工作流"的期待，/usage 尤其契合此前 #16017 的成本透明化诉求。

---

### 4. 重要 PR 进展（10 条精选）

#### #41918 [开启] feat(server): workerd 运行时配置 + SDK workerd 入口
- **作者**: kitlangton | 创建/更新: 2026-08-12
- **链接**: https://github.com/anomalyco/opencode/pull/41918
- **内容**: 新增 workerd 运行时配置，使 OpenCode server 可启动于 Cloudflare Durable Object 内部，并附带 SDK 入口与 CI 集成验证。核心场景是"每个线程一个 Durable Object 托管一个完整 server"的 Slack Bot 架构。将 OpenCode 带入边缘计算/SaaS 多租户领域。

#### #41904 [开启] feat(opencode): 新增 Claude Code ACP 运行时
- **作者**: stocky789 | 创建/更新: 2026-08-12
- **链接**: https://github.com/anomalyco/opencode/pull/41904
- **内容**: 基于 `@agentclientprotocol/c...` 实现 Claude Code ACP（Agent Client Protocol）运行时，目标是在 OpenCode 内运行 Claude Code。回应 #5182、#20002、#24038 三个历史诉求，打通两大 AI 编码工具生态。

#### #41770 [开启] fix(tui): 停止对不可用音频设备的无限重试
- **作者**: muyiyr | 创建: 2026-08-11 | 更新: 2026-08-12
- **链接**: https://github.com/anomalyco/opencode/pull/41770
- **内容**: 直接关闭 #41763。播放设备不可用时 dispose 失败的 native 引擎、清除缓存声音，不再反复初始化 ALSA。预计将显著缓解无声卡 Linux 环境下 TUI 终端被污染的问题。

#### #41884 [已关闭] fix(core): 将工具快照延迟到初始 MCP 注册完成后
- **作者**: kitlangton | 创建/更新: 2026-08-12
- **链接**: https://github.com/anomalyco/opencode/pull/41884
- **内容**: 修复"启动恢复会话"与 MCP 工具注册的竞态条件——此前模型会收到一份缺失 MCP 工具的权威快照，并在后续被错误地要求"以新目录为准"。对多 MCP 工具用户是重要的一致性修复。

#### #41883 [已关闭] fix(tui): 显示 write 工具完成后的文件内容
- **作者**: kitlangton | 创建/更新: 2026-08-12
- **链接**: https://github.com/anomalyco/opencode/pull/41883
- **内容**: V2 的 write 工具完成后现在显示语法高亮的文件内容。该修复是从 #41352 cherry-pick 到 v2 分支（原补丁误合并进过期的 `v2-migration` 分支），是 v2 分支补课动作的一部分。

#### #41899 [已关闭] feat(session): 记录目录位置切换
- **作者**: thdxr | 创建/更新: 2026-08-12
- **链接**: https://github.com/anomalyco/opencode/pull/41899
- **内容**: 项目 durable session 的目录切换现在以 `location-switched` timeline 消息记录，当前/先前位置均保留；目录变更传入后续模型上下文并可在压缩后存活；V2 TUI 渲染位置切换且移除旧的重复合成消息。解决多目录开发时的上下文丢失问题。

#### #41790 [已关闭] fix(core): 容忍更旧的迁移 schema 版本
- **作者**: kitlangton | 创建: 2026-08-11 | 更新: 2026-08-12
- **链接**: https://github.com/anomalyco/opencode/pull/41790
- **内容**: 兼容 launch 前 old channel 数据库中缺少 `commands`、`fork_boundary` 等 nullable 字段的表结构，旧库导入不再丢项目/会话/消息数据。配合 #41869（V1 迁移撇号 SQL 注入错误）一起，V1→V2 迁移路径正被系统性加固。

#### #41891 [已关闭] fix(tui): 截断外部插件 import specifier 中的小数 mtime
- **作者**: kitlangton | 创建/更新: 2026-08-12
- **链接**: https://github.com/anomalyco/opencode/pull/41891
- **内容**: 修复外部 TUI 插件使用 JSX 或依赖 solid-js 时在编译后的 opencode2 二进制中加载失败的问题——根因是 `freshSpecifier` 将原始 `stat.mtimeMs` 小数直接拼进 import specifier，仅一字符之差。对第三方 TUI 插件生态是关键的可用性修复。

#### #41793 [已关闭] fix(client): 暴露受管服务启动 stderr 细节
- **作者**: kitlangton | 创建: 2026-08-11 | 更新: 2026-08-12
- **链接**: https://github.com/anomalyco/opencode/pull/41793
- **内容**: 后台服务竞争启动失败时，输出可操作的 stderr 信息（如端口冲突指引）而非仅退出码。关闭 #41696，改善 `opencode2 service start` 的排障体验。

#### #41729 [开启] fix(desktop): 桌面窗口标题跟随活动标签
- **作者**: maxipesfix | 创建: 2026-08-11 | 更新: 2026-08-12
- **链接**: https://github.com/anomalyco/opencode/pull/41729
- **内容**: macOS 窗口菜单中按活动标签区分桌面窗口标题，关闭 #40490。多会话管理场景下的体验细节改进。

---

### 5. 功能需求趋势

从今日 Issues 中可以提炼出四个方向：

1. **Claude Code 风格斜杠命令全家桶**（最强信号）
   afonsoft 一次提交 8 个请求：`/usage`、`/security-review`、`/verify`、`/simplify`、`/btw`（临时提问不污染上下文）、`/approve`（运行时切换审批模式）、`/context`（Token 明细）、`/cost`。社区正在系统性地要求将 Claude Code 已被验证的命令工作流平移到 OpenCode。

2. **用量与成本透明化**
   #16017（Go 套餐 API 端点，137 👍）与 #41915（/usage）、#41908（/context）形成呼应。付费用户对 Token/费用监控有强烈诉求，且希望能在自动化管道中消费这些数据。

3. **桌面端体验与 IDE 集成**
   #18134 要求关闭按钮最小化到系统托盘；#39936 要求 VS Code 通知（代理完成/需要关注）；#41729 桌面窗口按标签命名。桌面与编辑器场景的"存在感"和通知机制正在成为关注点。

4. **2.0 平台化与运行时扩展**
   #41918（workerd/Durable Object 运行时）与 #41904（Claude Code ACP 运行时）说明社区有意将 OpenCode 嵌入到更多宿主环境中——从边缘计算到外部代理协议。

---

### 6. 开发者关注点（高频痛点总结）

- **ALSA/音频子系统缺陷（V2）**：`#41763`、`#41890` 两条同日上报；TUI 在无声卡 Linux 环境下被反复的 ALSA 诊断刷屏，终端被直接污染。高频复现、影响面广，属 V2 当前最扎眼的稳定性问题。

- **无限循环类缺陷**：`#27924`（无限压缩）、`#41848`（无限 LLM 重试）。两者都会让 UI 永久卡在"Thinking…"且无错误反馈，开发者对此容忍度极低。

- **Windows 平台文件处理**：`#37090` 的 CRLF 破坏问题长期未修复；`#37602` 请求 GBK 等编码参数支持。Windows 用户在文件编码上持续"受罪"。

- **迁移与升级路径脆弱**：`#41869`（V1 迁移遇撇号 SQL 报错）、`#41790`（旧 schema 兼容）。V1→V2 的数据迁移对老用户至关重要，任何语法级错误都会阻断启动。

- **进程管理可靠性**：`#41806` 的 git 僵尸进程导致 bootstrap 永久挂起；`#41848` 的 5 个进程因重试死循环死亡。开发者对"为什么挂住、为什么不给我错误"的反馈机制要求越来越高。

- **工具行为不一致（回归高发）**：`#41777` webfetch 返回 null、`#41875` apply_patch `add` 可覆盖已有文件、`#41751` git 仓库下恰好 2 个 skill 被静默丢弃。工具层回归频繁，说明 V2 重构期测试覆盖仍需加强。

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报 — 2026-08-12

## 今日速览

过去 24 小时 Pi 无新版本发布，社区讨论焦点集中于两项质量回归：Mac OS 长会话 CPU 占用飙升至 100% 以上（[#7730](https://github.com/earendil-works/pi/issues/7730)）与 GitHub Copilot 登录在高模型数组织下触发 429 限流（[#7850](https://github.com/earendil-works/pi/issues/7850)）。PR 方面，[#7982](https://github.com/earendil-works/pi/pull/7982) 修复了流式事件中 usage 字段丢失的协议问题，[#7989](https://github.com/earendil-works/pi/pull/7989) 为 Qwen Token Plan 中国区新增内置 provider；另有多个 TUI 与编辑工具修复陆续合并。整体呈现“性能修复 + 生态扩展”并行态势。

## 社区热点 Issues

以下是从过去 24 小时更新的 50 条 Issue 中挑选的 10 条最值得关注的：

### 1. [CLOSED] GitHub Copilot 登录 429 限流：组织模型数过多触发
**#7850** | 👍 7 | 💬 7  
作者：tuunit | 2026-08-09 创建  
GitHub 设备授权成功后，Pi 在 Copilot 登录阶段返回 `429 Too Many Requests`。问题指向组织账号下激活/可用模型数量过多（20+）时触发限流。同类问题在 [#7428](https://github.com/earendil-works/pi/issues/7428) 中也有报告，属于认证流程中的高频痛点。  
[查看 Issue](https://github.com/earendil-works/pi/issues/7850)

### 2. [OPEN] Mac OS 长会话高 CPU 占用（50–110% 波动）
**#7730** | 👍 8 | 💬 10  
作者：gterzian | 2026-08-06 创建  
用户观察到 Pi 在长时间运行后 CPU 在 50–110% 间摆动，内存 600–800MB，疑似与会话长度/上下文大小相关。这是当前 OPEN 状态中关注度最高的性能 Issue，直接影响重负载用户的日常使用。  
[查看 Issue](https://github.com/earendil-works/pi/issues/7730)

### 3. [CLOSED] WSL 环境下 Pi 登录挂起：浏览器授权完成但客户端无感知
**#6187** | 💬 25  
作者：makoit | 2026-06-30 创建  
WSL 中安装成功且 GitHub Copilot 设备授权在浏览器侧已完成，但 WSL 终端内的 Pi 客户端检测不到授权结果并一直挂起。评论数高居近期之首，暴露了 WSL 环境下进程间通信/端口转发的不兼容问题。  
[查看 Issue](https://github.com/earendil-works/pi/issues/6187)

### 4. [CLOSED] bun 运行时无法启动 0.84.0/0.84.1：zlib.createZstdDecompress 报错
**#7846** | 💬 10  
作者：and1truong | 2026-08-09 创建  
在 bun 运行时下，Pi 0.84.0 与 0.84.1 均崩溃，错误指向 `zlib.createZstdDecompress is not a function`，原因是 undici 依赖了 bun 尚未实现的 zstd API。对 bun 用户而言，这两个版本完全不可用，兼容性回归明显。  
[查看 Issue](https://github.com/earendil-works/pi/issues/7846)

### 5. [OPEN] Compaction 应有独立的思考级别/模型配置
**#7553** | 💬 8  
作者：Saolence | 2026-08-03 创建  
当前 compaction（自动/手动摘要）无条件复用会话的思考级别，导致在推理模型上运行时，摘要的 thinking budget 无法与正常对话分离。用户希望为 compaction 单独配置思考级别，属于配置灵活性的典型需求。  
[查看 Issue](https://github.com/earendil-works/pi/issues/7553)

### 6. [CLOSED] WebSocket 重试仅覆盖两种错误码，其他 transient 错误直接中断会话
**#7444** | 💬 8  
作者：lkraider | 2026-08-01 创建  
`openai-codex-responses.js` 中的 WebSocket 重试逻辑只处理 `previous_response_not_found` 与 `websocket_connection_limit_reached`；其他 `response.failed` 或 `error` 帧会直接抛出异常终止整个 turn。网络不稳定时缺乏自愈能力。  
[查看 Issue](https://github.com/earendil-works/pi/issues/7444)

### 7. [OPEN] 编辑模糊匹配：空白差异导致匹配失败
**#7836** | 👍 1 | 💬 6  
作者：robjgray | 2026-08-08 创建  
`normalizeForFuzzyMatch` 不会折叠连续空白或去除行首空格，导致 `oldText` 的空白不精确时，即使内容完全一致也会匹配失败。作者指出小模型在编辑场景下尤其容易受此影响，是编辑工具链中的实际痛点。  
[查看 Issue](https://github.com/earendil-works/pi/issues/7836)

### 8. [OPEN] 0.84.0 的 delta-only message_update 丢掉了 usage 字段
**#7911** | 💬 2  
作者：underactive | 2026-08-10 创建  
修复 #7290 时移除了 `message_update` 事件中的累积 `message` 字段，但 `usage` 也一并被删除，导致 JSON/RPC 协议在 `message_end` 之前完全拿不到 usage 数据。已对应 PR [#7982](https://github.com/earendil-works/pi/pull/7982) 修复。  
[查看 Issue](https://github.com/earendil-works/pi/issues/7911)

### 9. [CLOSED] --thinking 命令行参数无效果
**#7966** | 💬 3  
作者：felixendres | 2026-08-11 创建  
`pi --thinking off "some prompt"` 未按预期禁用思考，而是沿用了上一次的思考模式；反向亦然。该问题指向 CLI 参数与会话级状态之间的优先级缺陷。  
[查看 Issue](https://github.com/earendil-works/pi/issues/7966)

### 10. [OPEN] 启动时间预算：对标 jcode 的延迟与内存
**#7739** | 💬 2  
作者：1am2syman | 2026-08-06 创建  
以 jcode 基准测试记录的数据（PTY 场景下启动延迟与内存差距）为参照，要求为 Pi 设立启动时间预算。代表社区对“轻量级启动”的性能期望正在上升。  
[查看 Issue](https://github.com/earendil-works/pi/issues/7739)

## 重要 PR 进展

挑选过去 24 小时内更新的重要 PR（共 50 条）中的 10 个：

### 1. [OPEN] fix(coding-agent): 在流式事件中保留 usage 数据
**PR #7982** | 作者：christianklotz  
在 JSON/RPC 的 `message_update` 事件中保留累计 provider usage，同时保持消息快照省略使流大小线性；补充文档与回归测试。直接关闭 [#7911](https://github.com/earendil-works/pi/issues/7911)。  
[查看 PR](https://github.com/earendil-works/pi/pull/7982)

### 2. [OPEN] fix(ai): 为所有 provider 映射 models.dev 成本层级
**PR #7981** | 作者：bilby91  
`getModelsDevCost` 已将 models.dev 的 `cost.tiers` 映射到 `inputTokensAbove`，但此前仅 github-copilot 一处调用；本 PR 让所有 provider 复用该逻辑，修复成本计算不一致问题（#7912）。  
[查看 PR](https://github.com/earendil-works/pi/pull/7981)

### 3. [OPEN] feat(ai): 新增 Qwen Token Plan Individual CN provider
**PR #7989** | 作者：bigoldcat123  
在中国区 Token Plan 端点（cn-beijing）上新增 `qwen-token-plan-individual-cn` 内置 provider，复用 `QWEN_TOKEN_PLAN_CN_API_KEY`，镜像 #7659 能力并关闭 #7847。同主题的 #7988 已被关闭（可能为重复提交）。  
[查看 PR](https://github.com/earendil-works/pi/pull/7989)

### 4. [CLOSED] fix(tui): 将选区复制路由至宿主剪贴板
**PR #7972** | 作者：Panoplos  
原 `copySelectionToClipboard()` 直接发送 OSC 52 序列并无条件显示“Copied!”；在 macOS Terminal、VTE 终端及未开启 OSC 52 的 tmux 中并不生效。本 PR 改为通过宿主 clipboard API 路由，确保提示真实可信。  
[查看 PR](https://github.com/earendil-works/pi/pull/7972)

### 5. [OPEN] feat(coding-agent): 全屏转录模式显示滚动指示
**PR #7970** | 作者：pablasso  
当转录回滚未跟随底部时，状态栏显示 `↓` 标记；滚动回底部即清除。改善长输出场景下的位置感知，附动图验证交互效果。  
[查看 PR](https://github.com/earendil-works/pi/pull/7970)

### 6. [OPEN] feat(coding-agent): HTML 导出中渲染 Mermaid 图
**PR #7956** | 作者：aliou  
复用 TUI 中的 ANSI-to-HTML 转换逻辑，让 HTML 导出也能展示 Mermaid 图（默认折叠、页头可切换）。弥补导出与 TUI 显示之间的能力差。  
[查看 PR](https://github.com/earendil-works/pi/pull/7956)

### 7. [OPEN] fix(coding-agent): 更新 grok-mermaid 至 0.2.3
**PR #7984** | 作者：xl0  
解决 [#7832](https://github.com/earendil-works/pi/issues/7832) 中 Mermaid 渲染对 class 定义处理不当的问题，前后对比截图显示图表输出明显收敛。  
[查看 PR](https://github.com/earendil-works/pi/pull/7984)

### 8. [CLOSED] fix(config): 精炼 pnpm 检测逻辑
**PR #7905** | 作者：re2zero  
`detectInstallMethod()` 只要路径含 `/pnpm/` 就判定为 pnpm 安装，导致 `$PNPM_HOME` 下非 pnpm 管理的全局包被误判；同时更新指令前会先验证 managed install，安装管理提示准确性明显提升。  
[查看 PR](https://github.com/earendil-works/pi/pull/7905)

### 9. [CLOSED] fix(coding-agent): 子代理继承当前会话配置
**PR #7897** | 作者：virtuald  
此前子代理跟随“任意会话”最后设置的模型/思考级别，多会话场景下行为不可预期；改为继承发起方会话的模型与思考配置，提升协作一致性。  
[查看 PR](https://github.com/earendil-works/pi/pull/7897)

### 10. [CLOSED] feat(coding-agent): notify 示例支持 VS Code 通知
**PR #7967** | 作者：CatBraaain  
`notify` 示例扩展此前无法在 VS Code 集成终端内送达通知；本 PR 利用 VS Code 的 OSC 99 序列支持实现了桌面通知，标志示例扩展对主流 IDE 的覆盖又进一步。  
[查看 PR](https://github.com/earendil-works/pi/pull/7967)

## 功能需求趋势

从全部 50 条 Issue 中可提炼出以下社区重点关注方向：

1. **性能与资源占用**：Mac OS 高 CPU（#7730）、启动时间预算（#7739）、Windows CMD 内存泄漏（#7947）等表明，轻量级与长会话稳定性是当前最强烈的性能诉求。
2. **终端/IDE 兼容性**：WSL（#6187）、VS Code 集成终端（#7923）、tmux（#7936）、Windows CMD（#7947）均有报告；跨终端环境的渲染与剪贴板行为正在成为 TUI 质量的瓶颈。
3. **新模型与提供商支持**：Qwen Token Plan CN（#7989）、Anthropic via OpenRouter（#7938）、DeepSeek 模型（#7947）等需求密集，社区对多模型接入的期望持续增长。
4. **配置灵活性**：compaction 独立思考级别（#7553）、主题覆盖（#7722）、键位绑定可配置（#7939）——用户越来越希望按自己的工作流定制 Pi 行为。
5. **协议与数据完整性**：usage 字段丢失（#7911）、WebSocket 重试覆盖不足（#7444）反映出工具链对接方（IDE 插件、CLI 包装层）对稳定遥测的依赖。

## 开发者关注点

- **认证流程稳定性**：GitHub Copilot 登录 429 限流（#7850、#7428）在组织账号场景下反复出现，且 WSL 登录挂起（#6187）评论数居首——认证是影响上手体验的首要环节。
- **跨运行时兼容**：0.84.0/0.84.1 在 bun 下崩溃（#7846）让部分用户无法升级；Windows CMD 上的异常输出（#7947）影响日常使用。
- **编辑工具的容错性**：模糊匹配空白差异（#7836）与单对象 edits 参数被拒（#7904/#7978）表明，小模型/非标准模型在结构化调用上的容错仍需加强。
- **TUI 细节体验**：LaTeX 渲染（#7760）、中文输入显示为空白（#7923）、全屏模式超链接不可点击（#7930）、选区复制提示失真（#7972）等反馈，说明 TUI 的打磨已进入“像素级”阶段。
- **长会话资源消耗**：内存 600–800MB、CPU 波动至 110%（#7730）——用户对长时间运行的资源边界越来越敏感，这将是后续性能优化的重点方向。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报（2026-08-12）

## 今日速览

今日发布 v0.21.10 稳定版，重点新增 ACP 会话中 `reasoning effort` 配置能力，并改进 Web Shell 图片预览体验。社区侧，tmux/iTerm 闪屏问题、会话恢复超时、daemon 内存配额等 Issue 讨论最集中；跨会话消息通信、CUA 驱动替换等 PR 正在活跃推进。

## 版本发布

- **v0.21.10（稳定版）**：新增 ACP 会话配置中 reasoning effort 级别（Default 至 Max）支持（[#8526](https://github.com/QwenLM/qwen-code/pull/8526)）；Web Shell 中点击上传/粘贴的图片会在 artifact 中打开预览。
- **v0.21.11-preview.0**：修复 Web Shell 会话导航的 prompt 安全问题；增加 serve 会话续接许可日志。
- **v0.21.10-nightly.20260812.a64d1291d2**：包含与 v0.21.11-preview.0 相同的 Web Shell 导航修复和会话日志改进。
- **live-host-v0.1.1**：修复 CLI 在选择沙箱运行时前的探测逻辑；修复 autofix 的 scan-and-pick 序列化问题。
- **dsw-eas-smoke-20260812**：非生产基础设施 smoke，不发布 SWE 分数。

查看全部 Releases：[GitHub Releases](https://github.com/QwenLM/qwen-code/releases)

## 社区热点 Issues

1. **[#8678] 大会话恢复超时导致当前会话丢失（P1/daemon）**  
   已有 7 条评论。首个 PR（[#8691](https://github.com/QwenLM/qwen-code/pull/8691)）已合入，实现超时契约、迟到请求安全与可观测性，是当前最高优先级修复方向。  
   [GitHub Issue](https://github.com/QwenLM/qwen-code/issues/8678)

2. **[#8562] tmux 内闪屏：iTerm2 + SSH + Ubuntu 场景**  
   6 条评论。用户使用 Qwen 3.8 Max 排查后指向 Qwen Code 版本问题，且与 #8901、#8962 形成同类反馈，说明终端渲染回归影响面较大。  
   [GitHub Issue](https://github.com/QwenLM/qwen-code/issues/8562)

3. **[#8901] macOS iTerm 使用 Qwen Code 0.21.8 持续闪屏**  
   4 条评论。每次选择命令选项并回车后触发，复现路径清晰，是终端 UX 类的热门 bug。  
   [GitHub Issue](https://github.com/QwenLM/qwen-code/issues/8901)

4. **[#8897] `--approval-mode` 和 `--auth-type` 未出现在 `qwen --help` 中**  
   4 条评论。参数实际被注册和校验，但帮助信息缺失，影响 CLI 可发现性和自动化脚本编写。  
   [GitHub Issue](https://github.com/QwenLM/qwen-code/issues/8897)

5. **[#8920] headless 模式下 OpenAI API 报错仍输出 success 并 exit 0（stream-json）**  
   4 条评论。API 错误被当作成功结果返回，会导致 CI/自动化流程误判，属于高风险的正确性问题。  
   [GitHub Issue](https://github.com/QwenLM/qwen-code/issues/8920)

6. **[#8644] Windows 下点击聊天中的文件链接失败：盘符冒号被 URL 编码**  
   4 条评论。VS Code 无法打开 `file:///d%3A/...` 路径，影响 Windows 用户 IDE 集成体验。  
   [GitHub Issue](https://github.com/QwenLM/qwen-code/issues/8644)

7. **[#8182] daemon 给每个 ACP 子进程分配宿主 50% 内存，未按子进程数拆分**  
   4 条评论。`getAcpMemoryArgs()` 只计算一次并缓存，多个子进程会共享过高 V8 内存上限，存在 OOM 风险。  
   [GitHub Issue](https://github.com/QwenLM/qwen-code/issues/8182)

8. **[#8959] 主分支 CI 失败：E2E Tests on a64d1291d2f6**  
   4 条评论。由 bot 自动跟踪，测试结果未上报即失败，需尽快排查基础设施或测试脚本问题。  
   [GitHub Issue](https://github.com/QwenLM/qwen-code/issues/8959)

9. **[#8963] 长任务无法自动执行，用户反馈卡住**  
   3 条评论。用户尝试 yolo/auto 模式运行 Python 脚本或删除命令时卡住，并直言与 Kimi Code 对比体验落后。  
   [GitHub Issue](https://github.com/QwenLM/qwen-code/issues/8963)

10. **[#8957] 自 0.21.2 起读取图片即崩溃（Regression）**  
    3 条评论。0.21.1 为最后一个正常版本，属于高影响回归，需要优先验证图片加载链路。  
    [GitHub Issue](https://github.com/QwenLM/qwen-code/issues/8957)

## 重要 PR 进展

1. **[#8736] fix(core): 清理被杀死会话遗留的 peer socket 文件**  
   修复真实会话测试中发现的遗留 socket 文件问题，属于后台清理可靠性改进。  
   [GitHub PR](https://github.com/QwenLM/qwen-code/pull/8736)

2. **[#8733] feat(core): 通过名称向其他会话发送消息并列出 agents**  
   实现 `list_agents` 展示本机其他 Qwen Code 会话，并允许 `send_message` 按名称触达，是多会话协作的关键能力。  
   [GitHub PR](https://github.com/QwenLM/qwen-code/pull/8733)

3. **[#8730] feat(core): 跨会话消息通过入站门控接收**  
   同机会话之间可安全通信，所有消息在模型处理前经过门控校验，为多代理协作打基础。  
   [GitHub PR](https://github.com/QwenLM/qwen-code/pull/8730)

4. **[#8732] feat(cli): ACP 会话采用 Goal v3 运行时**  
   用标准 Goal v3 状态机替换 Web Shell 旧版 Stop-hook，支持 create/status/edit/pause/resume/replace/clear，并发布状态同步事件。  
   [GitHub PR](https://github.com/QwenLM/qwen-code/pull/8732)

5. **[#8568] feat(computer-use): 默认使用 Qwen CUA 驱动**  
   内置 Computer Use 后端切换为 vendored Qwen CUA 驱动 0.17.0，替换外部 trycua，并开放 54-tool 契约。  
   [GitHub PR](https://github.com/QwenLM/qwen-code/pull/8568)

6. **[#8872] feat(web-shell): 改进思考过程与工具进度展示**  
   Compact 模式下 Ctrl+O 隐藏思考行，并合并普通工具组，优化 Web Shell 信息密度与可读性。  
   [GitHub PR](https://github.com/QwenLM/qwen-code/pull/8872)

7. **[#8714] feat(core): 新增原生 DashScope 集成**  
   将 DashScope 作为一等 auth 类型，直接使用 ModelStudio 原生生成 API，不再绕行 OpenAI 兼容端点。  
   [GitHub PR](https://github.com/QwenLM/qwen-code/pull/8714)

8. **[#8675] feat(web-shell): 增加模型特定推理控制**  
   内置模型推理控制注册表，串联 Core、ACP、daemon、SDK 与 WebShell，首个注册模型为 qwen3 系列。  
   [GitHub PR](https://github.com/QwenLM/qwen-code/pull/8675)

9. **[#8529] feat(core): 从 API 元数据解析模型模态**  
   通过 models.dev 快照补齐缺失的输入模态信息，带磁盘缓存和后台刷新，避免冷启动等待。  
   [GitHub PR](https://github.com/QwenLM/qwen-code/pull/8529)

10. **[#8952] chore(deps): 升级 sharp 至 ^0.35.0 修复 GHSA-f88m-g3jw-g9cj**  
    通过升级 `sharp` 依赖修复安全漏洞，并重新生成 lockfile，属于安全性必要更新。  
    [GitHub PR](https://github.com/QwenLM/qwen-code/pull/8952)

## 功能需求趋势

从过去 24 小时更新的 46 条 Issues 中，社区关注方向集中在：

- **终端渲染与交互稳定性**：tmux/iTerm 闪屏、远程场景卡顿、Ctrl+S 展开异常等高频出现（[#8562](https://github.com/QwenLM/qwen-code/issues/8562)、[#8901](https://github.com/QwenLM/qwen-code/issues/8901)、[#8962](https://github.com/QwenLM/qwen-code/issues/8962)、[#8608](https://github.com/QwenLM/qwen-code/issues/8608)）。
- **会话与 daemon 可靠性**：会话恢复超时、内存配额、多 workspace 存储上下文、ACP 定时任务恢复等（[#8678](https://github.com/QwenLM/qwen-code/issues/8678)、[#8182](https://github.com/QwenLM/qwen-code/issues/8182)、[#8909](https://github.com/QwenLM/qwen-code/issues/8909)、[#8837](https://github.com/QwenLM/qwen-code/issues/8837)）。
- **无头/非交互模式正确性**：API 报错返回 success、CLI 参数帮助缺失，影响自动化与 CI 集成（[#8920](https://github.com/QwenLM/qwen-code/issues/8920)、[#8897](https://github.com/QwenLM/qwen-code/issues/8897)）。
- **Provider 与模型配置体验**：内置 provider 更新提示误导、自定义模型保留后重复提示、reasoning effort 暴露（[#8504](https://github.com/QwenLM/qwen-code/issues/8504)、[#8948](https://github.com/QwenLM/qwen-code/issues/8948)、[#8514](https://github.com/QwenLM/qwen-code/issues/8514)）。
- **跨平台 IDE 集成**：Windows 文件链接失效、VS Code/ACP 场景下的路径处理仍需加固（[#8644](https://github.com/QwenLM/qwen-code/issues/8644)）。
- **安全与依赖治理**：npm update 后出现 high severity 漏洞，社区对依赖安全敏感度上升（[#8944](https://github.com/QwenLM/qwen-code/issues/8944)）。

## 开发者关注点

- **终端闪烁/卡顿是最集中的痛点**，尤其是 tmux、iTerm、SSH 远程场景，多位用户明确表示影响基本可用性。
- **会话恢复与 daemon 资源管理**是另一大高频问题，包括超时恢复、子进程内存分配、定时任务恢复遗漏。
- **headless 模式下的错误处理不够严谨**，API 出错仍返回成功会让 CI 误判，需要尽快修复。
- **CLI 帮助信息与真实参数不一致**，`--help` 缺失关键参数，降低了工具的可发现性。
- **长任务自动执行容易卡住**，有用户对比竞品表达不满，需要重点验证工具执行循环和审批模式。
- **图片加载回归（0.21.2+ 崩溃）** 被认为是非常严重的稳定性问题，社区期待快速修复。

以上为 2026-08-12 Qwen Code 社区动态日报。

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI 社区动态日报 — 2026-08-12

## 1. 今日速览

过去 24 小时无新 Release，但有多个直接影响日常使用的回归被集中报告：v0.9.5 中 Auto-Review 模式静默拦截 Bash/写入调用（#5323），以及复制消息时携带 UI 装饰字符（#5314，已有修复 PR #5319）。开发侧焦点集中在 agent 工具 schema 过度复杂（32 字段）与后台 shell 事件被错误上报至父模型流（#5324、#5325），这两项均指向模型工具调用的可靠性与运行时隔离问题。

---

## 2. 版本发布

**无新版本发布**。上一版本仍为 v0.9.5，社区正围绕该版本的回归问题展开集中反馈。

---

## 3. 社区热点 Issues

以下 10 个 Issue 按关注度和影响面排序：

### #5323 — [严重] v0.9.5 回归：Auto-Review 模式静默阻止所有 Bash 调用与写入操作
- **作者**: USTHzhanglu | **创建**: 2026-08-12 | **评论**: 2
- **链接**: https://github.com/Hmbown/CodeWhale/issues/5323
- 升级到 v0.9.5 后，Auto-Review 模式从"自动批准所有工具调用"变为"静默拦截写入/Bash"并提示 `destructive action requires explicit review`。这直接破坏了自动化工作流，属于高危回归，建议优先修复。

### #5325 — [Runtime] 子代理的后台 shell 完成事件不应投递给父模型流
- **作者**: Hmbown | **创建**: 2026-08-12 | **评论**: 0
- **链接**: https://github.com/Hmbown/CodeWhale/issues/5325
- 父模型的 turn stream 会收到所有 tracked 后台 shell 的 `background_shell_completion` 事件，包括子代理产生的。该事件已由子运行时自行处理，重复传递给父流会造成上下文污染。这是 runtime 事件隔离的明显缺陷。

### #5324 — [Agent Tool] 32 字段 schema 导致模型频繁报错
- **作者**: Hmbown | **创建**: 2026-08-12 | **评论**: 0
- **链接**: https://github.com/Hmbown/CodeWhale/issues/5324
- 当前 `agent` 工具携带 32 个属性的 JSON schema、零必填字段，同时服务 8 个动作（start/status/peek 等），运行时解析器还接受别名。过大的 schema 让模型在调用时极易出错，社区期待拆分或简化定义。

### #4959 — [功能] 建议增加 `stop` 命令及运行时 STOP 词拦截
- **作者**: ronohara | **创建**: 2026-07-29 | **评论**: 8
- **链接**: https://github.com/Hmbown/CodeWhale/issues/4959
- 当模型处于 YOLO 模式或深度自主工作流时，`+ stop` 等文本命令会被忽略，模型会继续执行。希望提供 `/stop` 命令和运行时 STOP 词拦截，作为机械性的工具调用终止信号。该需求已有 8 条讨论，社区呼声较高。

### #5314 — [UI] 从右键菜单"复制消息"会带上顶栏符号和换行 rail 装饰
- **作者**: maimik | **创建**: 2026-08-09 | **评论**: 2
- **链接**: https://github.com/Hmbown/CodeWhale/issues/5314
- v0.9.5 中通过右键菜单复制的消息会包含角色图标 `●` 和续行前缀 `▏`，而使用选区复制则是干净的。这影响用户将对话粘贴到其它工具时的体验。对应修复 PR #5319 已提交。

### #5097 — [已关闭] YouTube 博主称 CodeWhale 并非 DeepSeek 官方编码代理
- **作者**: aboimpinto | **创建**: 2026-08-02 | **评论**: 5
- **链接**: https://github.com/Hmbown/CodeWhale/issues/5097
- 有 YouTuber 表示 DeepSeek 官方编码代理为 Reasonix，并在其页面引用了该项目。该讨论触及项目身份认同与官方认可问题，社区对品牌定位较为敏感。

### #4683 — [Bug] DeepSeek completions 地址间歇性报错
- **作者**: demian-welt | **创建**: 2026-07-22 | **评论**: 3
- **链接**: https://github.com/Hmbown/CodeWhale/issues/4683
- 长时间使用后频繁出现 `Warn Network error: Request failed ... (https://api.deepseek.com/v1/chat/completions)`。该问题与用户地理位置、网络链路或 API 端点稳定性有关，已影响多日，需要关注。

### #4568 — [性能] 新版斜杠指令响应迟缓，较上一版本明显回退
- **作者**: whp233 | **创建**: 2026-07-19 | **评论**: 1
- **链接**: https://github.com/Hmbown/CodeWhale/issues/4568
- 中文用户反馈：新版本输入 `/xxx` 斜杠指令后有明显延迟，而旧版本几乎即时响应。怀疑是性能优化回退，建议对指令解析链路做剖析。

### #1261 — [功能] 窗格缩放支持（Pane Zooming）
- **作者**: mrkissinger | **创建**: 2026-05-09 | **评论**: 1
- **链接**: https://github.com/Hmbown/CodeWhale/issues/1261
- Plan/Todos/Tasks 等面板内容在屏幕宽度不足时会被截断，用户希望支持窗格放大/缩小或屏幕适配。这是一个长期请求，说明终端布局灵活性是用户核心诉求。

### #5241 — [Bug] Pricing 端点返回 503，所有会话显示 unverified_live_pricing
- **作者**: alitvak69 | **创建**: 2026-08-04 | **评论**: 1
- **链接**: https://github.com/Hmbown/CodeWhale/issues/5241
- 从 0.8.67 升级到 0.9.3 后，成本显示停止工作，所有 provider 的会话都被标记为 `unverified_live_pricing`。费用可视化是用户管理预算的重要依赖，需要尽快恢复。

---

## 4. 重要 PR 进展

过去 24 小时共 6 个 PR 有更新，全部列出：

### #5326 — [Web] 审计修复：i18n 对齐、文案/间距、测试修正
- **作者**: Hmbown | **创建/更新**: 2026-08-12 | **状态**: OPEN
- **链接**: https://github.com/Hmbown/CodeWhale/pull/5326
- 对社区网站 `web/` 做了一轮一致性审计，修复 3 处明确问题，其余内容核验通过。属于维护性清理。

### #5319 — [TUI] 复制消息时不携带视觉 rail 装饰
- **作者**: XhesicaFrost | **创建/更新**: 2026-08-11 | **状态**: OPEN
- **链接**: https://github.com/Hmbown/CodeWhale/pull/5319
- 针对 Issue #5314，将 User/Assistant 单元格的复制内容改为 canonical 源文本（而非渲染后的 Ratatui 行），Tool/Thinking 等复杂单元格仍走完整转录路径，并补充了回归测试。这个修复能直接改善日常复制体验。

### #5320 — [会话] 将快照读取与崩溃恢复逻辑分离
- **作者**: h3c-hexin | **创建/更新**: 2026-08-11 | **状态**: OPEN
- **链接**: https://github.com/Hmbown/CodeWhale/pull/5320
- 新增 `load_session_snapshot` 用于无副作用的读取，避免工具调用仍在运行时就触发恢复；`recover_session_for_resume` 则返回修复统计，供宿主在明确的进程/引擎重启后调用，并持有自己的转录锁。这个拆分提升了并发安全性。

### #5321 — [Provider] 将 OrcaRouter 注册为命名 provider
- **作者**: XiaoHuo888-hue | **创建/更新**: 2026-08-11 | **状态**: OPEN
- **链接**: https://github.com/Hmbown/CodeWhale/pull/5321
- 将 [OrcaRouter](https://www.orcarouter.ai) 以与 OpenRouter 相同的方式接入：新增 `ORCAROUTER_API_KEY`（`sk-orca-` 前缀），模型选择器、配置参考和文档保持一致。对多网关用户更友好。

### #5318 — [TUI] Windows 下支持将宿主终端窗口固定为始终置顶迷你窗
- **作者**: SparkofSpike | **创建/更新**: 2026-08-11 | **状态**: OPEN
- **链接**: https://github.com/Hmbown/CodeWhale/pull/5318
- 为 Windows 宿主终端增加 PiP（画中画）能力：通过右键菜单或 `/pin` 命令将窗口缩至 640x400 并置顶，再次触发可恢复原尺寸和最大化状态。适合多任务场景。

### #5225 — [已关闭] ACP 服务器暴露 file/search/git/patch/shell 工具
- **作者**: rafaelcavalheri | **创建**: 2026-08-03 | **更新**: 2026-08-11 | **状态**: CLOSED
- **链接**: https://github.com/Hmbown/CodeWhale/pull/5225
- 此前 `session/prompt` 只流式传输模型文本，不会执行模型请求的工具调用，导致 Zed 等外部编辑器通过 ACP 接入时只能对话、不能真正编辑代码。该 PR 打通了 ACP 通道的完整工具执行链路，是重要能力补齐。

---

## 5. 功能需求趋势

从近期 Issues 中可以提炼出以下方向：

- **工具调用控制与安全**：社区需要更可靠的"停止/中断"手段（#4959），同时对 Auto-Review 模式的权限变化非常敏感（#5323）。模型工具 schema 的复杂性也在阻碍调用成功率（#5324），简单、可预测的工具定义是当前主要诉求。
- **终端 UI/UX 细节**：复制内容纯净性（#5314）、窗格缩放（#1261）、宽屏适配（#5322）等问题频发，说明用户已不满足于"能用"，而是追求贴近现代 IDE 的终端体验。PiP 等桌面级窗口能力（PR #5318）也带来了新的交互想象。
- **多 Provider/网关与稳定性**：Pricing 端点 503（#5241）、DeepSeek API 间歇性失败（#4683）、WSL2 网络问题（#4956）成为高频痛点；同时社区积极提交新网关接入（PR #5321），希望扩大模型选择面。
- **会话与事件模型**：子代理后台事件泄漏到父流（#5325）、快照读/恢复写分离（PR #5320）等讨论，表明运行时隔离与并发安全正成为高阶开发者关注的架构主题。
- **跨平台一致性**：Windows 下的参数解析（#4564）和性能回退（#4568）显示多平台支持仍存在细节短板。

---

## 6. 开发者关注点

- **v0.9.5 回归风险**：Auto-Review 静默拦截写入操作是当前最紧急的问题，它会让自动化流程在无人盯守时失效。开发者升级需谨慎，建议现场环境先做工具级回归验证。
- **模型工具 schema 的"减肥"呼声**：32 字段的 agent schema 已经超出多数模型的准确调用能力，开发者希望将 schema 拆分为按动作区分的多个窄接口，而不是让模型在一个巨型 schema 里猜。
- **复制内容的纯净性**：看似小事，但对日常"复制对话到 PR/文档"的工作流影响很大，社区对这类 UI 细节的容忍度正在降低。
- **网络层错误需要可见性**：多个网络类 Issue 已存在数周，社区希望客户端能提供更清晰的错误分类（端点不可达、限流、认证失败），而不是笼统的 `Network error`。
- **品牌/官方身份的困惑**：CodeWhale 与 DeepSeek 官方之间的关系被第三方视频质疑后引发讨论，部分贡献者希望项目 README 或文档能更明确地说明项目定位与官方背书情况。

</details>

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar) 自动生成。*