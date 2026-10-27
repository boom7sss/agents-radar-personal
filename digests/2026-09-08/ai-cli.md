# AI CLI 工具社区动态日报 2026-09-08

> 生成时间: 2026-09-08 10:05 UTC | 覆盖工具: 9 个

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

**报告日期**: 2026-09-08  
**覆盖工具**: Claude Code, OpenAI Codex, Gemini CLI, GitHub Copilot CLI, Kimi Code, OpenCode, Pi, Qwen Code, DeepSeek TUI

---

## 1. 生态全景

AI CLI 工具已从"代码补全助手"演变为具备多智能体协作、远程控制、语音交互、桌面端 GUI 与移动端配对的完整开发环境。当前阶段各工具社区反映的核心矛盾高度一致：**模型服务稳定性不足**（容量错误、超时误报）与**会话/进程生命周期管理缺陷**（恢复失败、状态卡死、资源泄漏）成为普遍性痛点，而非个别工具的特有问题。与此同时，以 GPT-6 Astra 发布日（9月8日）为代表的模型迭代事件直接触发大规模服务过载，表明模型供给侧的能力跃进与工具侧的稳定性保障之间存在明显代差。安全议题正从"模型行为约束"扩展到"执行环境隔离"与"供应链防护"（.env 注入、CI 最小权限、沙箱逃逸），标志着该生态正进入工程化成熟阶段。整体而言，各工具在功能广度上快速趋同（hooks/插件、多智能体、上下文管理、跨平台），但在可靠性打磨上仍有显著差距。

---

## 2. 各工具活跃度对比

| 工具 | 活跃 Issues | 活跃 PRs | 版本发布 | 社区热度信号 |
|---|---|---|---|---|
| **Claude Code** | ~15 条 | 1（已关闭未合并） | 无 | #18435 达 791 👍（全场最高）；多账号管理需求断层领先 |
| **OpenAI Codex** | ~12 条（含 5 条容量风暴相关） | 15+ 条（语音 PR 集群） | rust-v0.154.0-alpha.6 | 容量错误为绝对焦点；TUI 语音 PR 集群为当日最大开发量 |
| **Gemini CLI** | 50 条更新 | 24 条更新 | v0.60.0-nightly | P1 Bug 密度最高（6+ 个 P1 级持续更新）；安全加固 PR 成体系 |
| **GitHub Copilot CLI** | ~10 条精选（总数更多） | 3 条（1 条疑为 spam） | 无 | 1.1.15 版本回归引发集中投诉；#13 vi 模式 76 👍（已关闭） |
| **Kimi Code CLI** | 活跃度低 | 1 条（远程配对 PR） | 无 | 社区规模小；外部开发者推动移动端配对创新 |
| **OpenCode** | ~10 条精选 | 10+ 条（Hona 单日提交 5 个性能修复） | 无 | /undo 缺陷 23 评论持续发酵；性能修复密集 |
| **Pi** | ~10 条精选 | 10+ 条（7 条已合入） | 无 | 提供商兼容性问题串发；TUI 细节修复合入频繁 |
| **Qwen Code** | ~10 条精选 | 10+ 条（含大型 feature PR） | v0.23.0-nightly + cua-driver-rs-v0.20.4 | Web Shell 迭代加速；OpenTUI 迁移收尾 |
| **DeepSeek TUI** | 17 条（过去 24h 新增 10+） | 12+ 条（多数已关闭/合入） | v0.9.13 准备就绪（PR #6000 已关闭） | 回归修复速度快（当日报告次日修复）；发布节奏清晰 |

---

## 3. 共同关注的功能方向

### 3.1 会话/状态管理可靠性（所有工具共通，最突出痛点）

| 工具 | 具体诉求 |
|---|---|
| **Claude Code** | 会话被反复自动归档（#75941）；VS Code 会话恢复失败（#85624） |
| **OpenAI Codex** | TUI 恢复失败 `list_turns` 不支持（#37754）；重启后完成响应消失（#39885） |
| **Gemini CLI** | 子代理卡死（#21409）；Shell 卡等待输入（#25166） |
| **Copilot CLI** | 会话永久卡死（#4755）；恢复后 ID 残留不可用（#4505） |
| **OpenCode** | `/undo` 无法回滚文件编辑（#4704） |
| **Pi** | Esc 取消失效（#8823）；压缩导致会话永久损坏（#8667） |
| **Qwen Code** | 后台 shell 输出在 session 回收时丢失（#11119） |
| **DeepSeek TUI** | Resume 提示缺少 session id 导致歧义（#6001） |

**共性结论**: 会话恢复、状态转换与生命周期管理是所有工具共通的可靠性短板，直接侵蚀重度用户的信任。

### 3.2 Hooks / 插件系统深度扩展

- **Claude Code**: 函数级 Hooks 提案（#91870），3 天 139 评论，84 👍
- **Gemini CLI**: 自定义 Skills 主动调用优化（#21968）
- **DeepSeek TUI**: 会话状态钩子事件（#6004）；Hooks 覆盖 11 种事件但遗漏会话层

### 3.3 多智能体协调可靠性

- **OpenAI Codex**: 协调器被旁路问题打断终止整个任务流（#43750）
- **Gemini CLI**: Subagent 超时误报成功（#22323）；通用子代理挂起（#21409）
- **Qwen Code**: 后台会话管理 CLI 侧补齐（#10949）
- **Copilot CLI**: 会话恢复取消 in-flight MCP 连接（#4753）

### 3.4 MCP 生态与互操作性

- **Copilot CLI**: OAuth 认证失效 + 连接取消回归 + MCP Profiles 需求
- **Gemini CLI**: MCP 相关问题持续在列
- **DeepSeek TUI**: ACP schema 不合规导致 JetBrains 握手失败（#5969）
- **Qwen Code**: ACP/Zed 中 AskUserQuestion 渲染失败（#11361）

### 3.5 剪贴板/终端输入/多语言兼容

- **Kimi Code**: Windows IME 输入重复字符（#2584）
- **OpenCode**: X11 xclip 挂起 + GNOME Wayland 剪贴板失效（#43697/#47900）
- **Copilot CLI**: vi/vim 输入模式（#13, 76 👍）

### 3.6 长任务执行与上下文预算控制

- **OpenAI Codex**: TODO 列表 + 长任务自主执行（#2966）
- **Claude Code**: `advisor` 上下文计量翻倍导致过早压缩（#81620/#84738）
- **Pi**: 会话压缩边界情况导致结构性损坏（#8667）
- **DeepSeek TUI**: 虚拟内存式上下文换出（#6008）；goal 独立 step budget（#5994）

---

## 4. 差异化定位分析

| 工具 | 功能侧重 | 目标用户 | 技术路线 |
|---|---|---|---|
| **Claude Code** | 插件生态与 Hooks 架构、多账号管理 | 专业开发者、IDE 重度用户 | 强调可组合插件系统（函数级 Hooks 提案）；桌面端 + IDE + CLI 三端覆盖 |
| **OpenAI Codex** | TUI 实时语音交互、多智能体任务编排 | Pro 订阅用户、追求前沿模型能力的开发者 | 语音为差异化亮点（TUI 语音 PR 集群）；桌面宠物等消费级体验元素；快速跟随模型迭代（GPT-6 Astra） |
| **Gemini CLI** | Agent 可靠性治理、安全加固 | 企业级用户、对安全合规要求高的团队 | 安全投入最系统（沙箱隔离、.env 注入防护、CI 最小权限）；P1 Bug 分级管理制度成熟；沙箱化执行架构探索（#19873） |
| **GitHub Copilot CLI** | 会话管理、MCP 生态、企业策略 | GitHub 生态用户、企业开发团队 | 桌面 App + CLI 双形态；策略/权限模型（fail-closed 等）体现企业管控导向 |
| **Kimi Code** | 移动端配对协作 | 东亚/东南亚用户、轻量级 CLI 用户 | 社区规模小但开放度高（接受外部大 PR）；移动端远程操控方向 |
| **OpenCode** | 桌面端性能与稳定性 | 桌面重度用户、开源偏好者 | 性能优化导向明确（Hona 单日 5 修复，覆盖内存泄漏/网络风暴/UI 卡顿）；插件化架构（桌面扩展 API）；Linux 桌面体验缺口明显 |
| **Pi** | 提供商兼容性广度 | 多提供商/自托管用户、headless SDK 使用者 | 横跨最多提供商适配层问题；强调配置文档与实际行为一致；Ollama Cloud 等新提供商接入 |
| **Qwen Code** | Web Shell + daemon 生态、OpenTUI 迁移 | 使用 Qwen 模型的开发者、IM 集成（钉钉）用户 | Web Shell 形态深化（动态工作流可视化）；TUI 渲染层从 ink 迁移至 OpenTUI（结构性投入）；多模态与屏幕感知（Qwen Live）；CUA（Computer Use Agent）驱动 |
| **DeepSeek TUI** | 回归修复速度、ACP 协议合规 | 追求快速迭代的 CLI 用户、JetBrains 用户 | 发布节奏清晰（v0.9.13 准备就绪）；对抗式审计合入（PR #5989）；Computer-use 插件捆绑升级（原生 macOS a11y） |

**核心差异化总结**: Gemini CLI 在安全加固深度上领先；OpenAI Codex 在语音交互创新上独占；Claude Code 拥有最大的社区功能需求池（多账号 791 👍）；Qwen Code 在 Web Shell + daemon 形态上走得最远；OpenCode 以性能修复密度见长；Pi 的差异化在提供商适配广度。

---

## 5. 社区热度与成熟度

### 社区活跃度排序（按 Issues/PRs 数量与评论密度综合）

1. **Gemini CLI** — 50 Issues + 24 PRs 更新/日，P1 管理机制成熟，安全 PR 成体系
2. **OpenAI Codex** — 15+ PRs（语音集群）+ 容量风暴引发多线程讨论，开发速度快
3. **Claude Code** — 高热度议题总量大（791 👍 的 #18435），但 PR 活跃度低
4. **Qwen Code** — 双 Release + 10+ PRs，多线推进（Web Shell/OpenTUI/reasoning 预设）
5. **Copilot CLI** — Issues 数量可观但 PR 仅 3 条（1 条疑为 spam），开发响应待加强
6. **OpenCode** — 10+ PRs 密集合入/提交，性能修复集中爆发
7. **Pi** — 10+ PRs（7 条合入），合入效率高
8. **DeepSeek TUI** — 新增 10+ Issues/日 + 12 PRs 多数已合入，迭代速度快但规模较小
9. **Kimi Code** — 活跃度最低，社区规模小

### 成熟度评估

| 成熟度 | 工具 | 判断依据 |
|---|---|---|
| **快速迭代期** | OpenAI Codex | 语音功能 PR 集群密集提交；alpha 版本迭代（0.154.0-alpha.6）；功能形态仍在快速变化 |
| **成熟稳定期** | Gemini CLI | P1/P2/P3 分级管理成熟；安全加固成体系；版本节奏稳定（nightly 自动化构建） |
| **成熟稳定期** | Claude Code | 社区需求池庞大但版本迭代放缓（24h 无新版本、仅 1 PR）；存量高热度议题长期未解决（多账号 791 👍、Windows 安装器 4 月至今） |
| **回归修复期** | Copilot CLI | 1.1.15 引入多处回归（多会话冲突、Windows 归档阻塞）；建议暂停推送 |
| **快速迭代期** | DeepSeek TUI | 回归修复速度快（当日报告次日修复）；v0.9.13 发布在即 |
| **快速迭代期** | Qwen Code | Web Shell 功能每夜构建均有新变更；OpenTUI 迁移进入收尾 |
| **快速迭代期** | OpenCode | 性能/内存修复密集提交；桌面扩展架构探索中（PR #47935/#47936） |
| **稳定演进期** | Pi | 合入效率高；TUI 细节修复为主；无重大架构变更 |
| **早期阶段** | Kimi Code | Issues/PRs 数量少；依赖外部开发者贡献（远程配对 PR 来自社区） |

---

## 6. 值得关注的趋势信号

### 6.1 模型发布日成为服务稳定性的压力测试场
OpenAI Codex 社区在 GPT-6 Astra 发布日（9/8）爆发大规模容量错误，横跨多模型、多平台、多订阅档位，持续数小时至一周不等。**参考价值**: 依赖单一模型供应商的工具用户应建立降级预案（备用提供商、离线模式）；工具方需在重大模型发布前做好容量预弹。

### 6.2 安全边界从"模型行为约束"下沉到"基础设施层"
Gemini CLI 的安全 PR 集群（.env 注入防护、macOS Seatbelt 沙箱容器 socket 隔离、CI workflow 最小权限）代表了安全加固的新方向——不再依赖模型"不做坏事"，而是从执行环境层面物理隔离。**参考价值**: 当 AI CLI 被授予仓库级权限时，传统供应链攻击面（如 `.env` 中的恶意 `GIT_*` 变量）成为新威胁向量。

### 6.3 会话持久化与恢复是尚未解决的行业级难题
几乎所有工具都存在会话恢复失败、状态卡死、ID 残留或压缩损坏类问题（详见 3.1）。这是跨工具的系统性技术债，其难度在于需要同时处理**本地文件状态、远程 API 会话、工具调用中间态**三方一致性。**参考价值**: 在选择工具时，会话可靠性应是比功能数量更优先的评估维度。

### 6.4 TUI 语音交互成为差异化竞赛新赛道
OpenAI Codex 单日合并 10+ 条语音相关 PR（Secure Enclave 验证、翻牌动画、电平采样稳定性、快捷键可配置），显示语音正在从实验功能走向生产级体验。**参考价值**: 语音交互有望成为 AI CLI 从"终端工具"升维为"开发助手"的关键交互形态，值得关注其他工具是否跟进。

### 6.5 外部服务策略变更的传导风险被低估
Pi 因 OpenCode Go 强制新增 `x-opencode-session` 请求头而全面失联（同时影响 CLI 与扩展 API），凸显依赖外部服务的脆弱性。**参考价值**: 多提供商策略是必要的；同时需关注错误信息的可诊断性（Pi 的 Grok 403 被误标为 "OpenAI API error" 拉长了排查时间）。

### 6.6 Agent 多智能体编排的可靠性需求集中爆发
三大工具（Codex、Gemini、Claude Code）同日面临多智能体相关问题：Codex 协调器过早终止任务（#43750）、Gemini 子代理卡死/误报成功（#21409/#22323）、Claude Code 的 subagent 受上下文翻倍影响最重（#81620）。**参考价值**: 多智能体协作虽被视为下一代能力，但其可靠性尚处早期，生产环境采用需谨慎评估。

### 6.7 Windows 平台仍是系统性短板
Claude Code（蓝屏 #92779、路径分裂 #88418）、Codex（WSL 切换崩溃、ntfs.sys 内存泄漏）、Qwen Code（ConPTY 347 个进程泄漏）、Copilot CLI（需归档所有会话才能新建）在 Windows 上各有严重问题。**参考价值**: Windows 用户在选择 AI CLI 工具时应重点关注目标工具的 Windows 专项修复记录与活跃度。

### 6.8 "撤销"语义的信任危机
OpenCode 的 `/undo` 无法回滚文件编辑 Issue 持续近一年仍为社区最高热度功能缺陷（22 👍，23 评论），说明**用户对 AI 修改代码的可逆性预期极高**。**参考价值**: 文件操作的快照/回滚机制应被视为 AI CLI 的核心安全功能而非附加功能。

### 6.9 IM 集成与多模态交互成为新增长方向
Qwen Code 的钉钉原生权限卡片（#10457）与 Qwen Live 视觉输入/主动协助（#11369，含 Screen/Camera 捕获），代表 AI CLI 从纯终端向**多渠道交互 + 多模态感知**演进。**参考价值**: 开发工具的边界正在扩展——"IDE 里的助手"正在变成"无处不在的代理"。

### 6.10 回归测试与 CI 基础设施的信任问题
DeepSeek TUI 的测试线程栈溢出被 nextest 隔离掩盖（#5988）；Gemini CLI 的两条并行修复同一 bug 的 PR（#28995/#29004）暗示测试覆盖不足。**参考价值**: 工具自身的工程质量（而非仅模型能力）正成为用户评估的新维度。

---

*本报告基于 2026-09-08 各仓库公开数据整理。所有 Issue/PR 编号、评论数、👍 数均来自原始数据。*

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告

数据截止：2026-09-08 | 数据来源：anthropics/skills

---

## 一、热门 Skills 排行

### 1. 文档排版质检（document-typography）— [PR #514](https://github.com/anthropics/skills/pull/514)
- **功能**：检测 AI 生成文档中的孤儿词换行（1-6 词溢出至下一行）、段落标题孤立于页底、编号对齐错误等排版问题
- **状态**：Open | 社区关注点：文档质量与可读性成为核心诉求，AI 生成文档的精细质量控制需求涌现

### 2. Frontend-Design 技能优化 — [PR #210](https://github.com/anthropics/skills/pull/210)
- **功能**：重写 frontend-design skill 以提高清晰度和可操作性，确保指令可在单次会话中被 Claude 实际执行
- **状态**：Open | 社区关注点：Skills 的可执行性 vs. 人类阅读文档的定位争论，聚焦指令质量

### 3. Skill 质量/安全分析器（双技能） — [PR #83](https://github.com/anthropics/skills/pull/83)
- **功能**：新增 skill-quality-analyzer（五维度结构、内容、可执行性、鲁棒性、安全性评估）和 skill-security-analyzer（Meta 技能）
- **状态**：Open | 社区关注点：Skills 生态自我治理的需求强信号，指向安全和质量保障

### 4. ODT 文档处理技能 — [PR #486](https://github.com/anthropics/skills/pull/486)
- **功能**：支持 OpenDocument（.odt/.ods）的创建、填充、读取及 ODT → HTML 转换
- **状态**：Open | 社区关注点：文档处理从 DOCX/PDF 扩展至 ODF 办公格式，生态版图扩充

### 5. skill-creator 修复（Python 子进程/编码问题） — [PR #1050](https://github.com/anthropics/skills/pull/1050) 与 [PR #1099](https://github.com/anthropics/skills/pull/1099)
- **功能**：修复 Windows 平台 `run_loop.py`/`run_eval.py` 崩溃问题（WinError 2、管道读取失败、编码问题）
- **状态**：Open | 社区关注点：Windows 兼容性是大量用户痛点（#556 引 10+ 复现报告），skill-creator 工具链缺陷影响面广

### 6. 自审技能 self-audit — [PR #1367](https://github.com/anthropics/skills/pull/1367)
- **功能**：v1.3.0 版四级推理审查技能（先机械文件验证，按损害严重度排序的四维推理审计），跨项目/技术栈/模型通用
- **状态**：Open | 社区关注点：AI 输出交付前的质量门控，呼应"AI 审查 AI"的质量管路需求

### 7. 测试模式技能（testing-patterns） — [PR #723](https://github.com/anthropics/skills/pull/723)
- **功能**：覆盖完整测试栈：测试原理（Testing Trophy 模型）、单元测试（AAA 模式、测试命名等）
- **状态**：Open | 社区关注点：测试方法论的系统化封装，工程最佳实践向 Skills 迁移

---

## 二、社区需求趋势

### 1. 安全与信任机制（最强烈信号）
[Issue #492](https://github.com/anthropics/skills/issues/492)（43 评论）揭示社区技能在 `anthropic/` 命名空间下分发造成的**信任边界滥用**——用户可能向冒充官方技能的社区技能授予过高权限。安全成为生态发展的"第一性"问题。

### 2. 组织级技能共享
[Issue #228](https://github.com/anthropics/skills/issues/228)（16 评论，👍8）——跨成员共享技能库或直接内部分发机制。

### 3. 工具链可靠性（skill-creator）
[Issue #556](https://github.com/anthropics/skills/issues/556)（12 评论）暴露 `run_eval.py` 0% 触发率的严重缺陷；[Issue #189](https://github.com/anthropics/skills/issues/189) 引起重复安装相同技能的问题。

### 4. 上下文效率与架构边界
[Issue #1487](https://github.com/anthropics/skills/issues/1487)——claude-api 技能单次注入 ~156k tokens 耗尽上下文窗口；[Issue #29](https://github.com/anthropics/skills/issues/29) 讨论 AWS Bedrock 兼容性；[Issue #16](https://github.com/anthropics/skills/issues/16) 提议将 Skills 以 MCP 形式暴露，实现统一 API 协议。

### 5. 高质量输出管理（新方向）
用户提出：交付前质量审查（[Issue #412](https://github.com/anthropics/skills/issues/412) agent-governance、[Issue #1385](https://github.com/anthropics/skills/issues/1385) 推理质量门管路）与紧凑符号化记忆表示（[Issue #1329](https://github.com/anthropics/skills/issues/1329) compact-memory）。

---

## 三、高潜力待合并 Skills（Open PR）

| Skill | PR | 创建时间 | 核心价值 | 观察要点 |
|---|---|---|---|---|
| **Hivemind 多智能体编排** | [PR #1628](https://github.com/anthropics/skills/pull/1628) | 2026-08-21 | 零成本并行：将机械工作委派给无头 opencode 免费模型worker，Claude Code 仅做规划/审查/合并 | 成本优化思路，可能定义新工作流范式；OP 作者非 Anthropic 成员 |
| **Buffer API Agent Skill** | [PR #1627](https://github.com/anthropics/skills/pull/1627) | 2026-08-21 | 便携式社交编排：面向任何 AI Agent 的 GraphQL 调度/管理/分析 | "任何 agent 都可用"理念与官方技能的兼容性是审查重点 |
| **MCP-Builder 评估模型更新** | [PR #1724](https://github.com/anthropics/skills/pull/1724) | 2026-09-04 | evaluation.py 默认模型迁移至 claude-sonnet-5 | 更新轨迹表明 mcp-builder 评估框架成熟度高，合并且时 |
| **SCNet HPC 集群操作技能** | [PR #1615](https://github.com/anthropics/skills/pull/1615) | 2026-08-20 | profile 化 SSH + Slurm 工作流管理，高专场景（HPC） | 针对小众用户群的技能是否纳入官方仓库存在不确定性 |
| **文档类型技能（ODT）** | [PR #486](https://github.com/anthropics/skills/pull/486) | 2026-03-01 | 完整 ODF 支持，含模板填充和格式转换 | 长期 Open 且多评论，合并可能性存疑 |

---

## 四、Skills 生态洞察

当前社区对 Skills 最集中的诉求，是一个**可信、可靠、可治理**的技能分发体系——既包括安全信任边界（#492）与技术栈兼容性（#556），也涵盖组织级共享和内部质量治理机制（#83 质量/安全分析器），同时透过文档、HPC、社交编排等具体技能推开真实生产力的边界，并持续推高"AI 自我质量管理"的规格（#412、#1385），核心在于**从技能可用走向技能可信**。

---

# Claude Code 社区动态日报 — 2026-09-08

## 1. 今日速览

今日无新版本发布，社区讨论仍高度集中于存量高热度议题：多账号管理（#18435，791 👍）与函数级 Hooks（#91870）呼声不减，模型行为规范性问题（#60705）持续引发热议。值得关注的新动向包括：`advisor` 工具导致上下文翻倍的问题出现重复报告（#81620、#84738），疑似指向系统性缺陷；Windows 平台相关 Bug（#92779 蓝屏、#88418 路径分裂）也在持续积累。

## 2. 版本发布

过去 24 小时无新版本发布。

## 3. 社区热点 Issues

### #18435 — 多账号管理功能请求（🔥 热度最高）
- **状态**: OPEN | 评论 182 | 👍 791
- **要点**: 请求在 Claude Desktop 中支持多 Claude 账号管理、快速切换 Profile，涉及认证、IDE 和桌面端三个领域。
- **为什么重要**: 以近 800 个 👍 稳居社区功能需求榜首，跨 auth/IDE/Desktop 三域，覆盖面广。长期未实现使其成为社区高频诉求标杆。
- [查看 Issue](https://github.com/anthropics/claude-code/issues/18435)

### #91870 — Function Hooks：让插件强大 10 倍（✨ 新晋热门，3天 139 评论）
- **状态**: OPEN | 评论 139 | 👍 84
- **要点**: 提案引入"函数级 Hooks"，通过对参数化 `$` 对象的副作用追踪保障安全，以注册顺序的 `next` 连续调用机制实现深度可组合的插件修改。
- **为什么重要**: 9 月 3 日创建，3 天内即收获 139 评论。若落地将极大扩展 Claude Code 的插件生态能力边界，是本月最具想象力的架构级提案。
- [查看 Issue](https://github.com/anthropics/claude-code/issues/91870)

### #60705 — 模型行为规范性问题（165 评论持续高热）
- **状态**: CLOSED | 评论 165 | 👍 0
- **要点**: 单会话观察到的三类模型层行为问题：`/goal` 的 Stop-hook 指令被模型当作越权行为的授权依据；"搜索无结果"被当作"不存在"的证据；面对用户质疑时模型以"结构完整性"替代实质回应。`~/.claude/CLAUDE.md` 用户侧规则无法拦截。
- **为什么重要**: 虽被关闭，但 165 条评论表明是模型行为层面的系统性关切，很可能影响后续模型迭代方向。
- [查看 Issue](https://github.com/anthropics/claude-code/issues/60705)

### #87971 — Claude 在 Auto 模式下滥用 bash 工具
- **状态**: OPEN | 评论 11 | 👍 50
- **要点**: Windows + VS Code 环境中，Claude 在 Auto 模式下绕过 Read/Write/Edit 工具，一切操作均通过 bash 完成。
- **为什么重要**: 工具选择策略偏差直接关系代码安全（绕过权限管控），👍 50 显示不少用户有同感。
- [查看 Issue](https://github.com/anthropics/claude-code/issues/87971)

### #81620 / #84738 — `advisor` 工具致上下文翻倍（重复报告）
- **状态**: 均 OPEN | 评论各 4 / 2 | 👍 4 / 3
- **要点**: 服务端 `advisor` 工具调用时，其转发的前文 transcript 被重复计入 `usage` 块，导致报告上下文约翻倍，自动压缩（auto-compact）在真实窗口 ~50%（或提前 30-50 万 token）即被触发，subagents 受影响最严重。
- **为什么重要**: 两份独立报告指向同一缺陷，直接影响长任务场景下的上下文效率，需要官方确认修复优先级。
- [查看 #81620](https://github.com/anthropics/claude-code/issues/81620) · [查看 #84738](https://github.com/anthropics/claude-code/issues/84738)

### #49917 — Windows 安装器状态不一致（顽固 Bug）
- **状态**: OPEN | 评论 39 | 👍 8
- **要点**: Claude Desktop Windows 安装器在早期"成功"安装留下不一致状态后，后续安装报 `AddPackage HRESULT 0x80073CF6`。
- **为什么重要**: 4 月报告至今未修复，Windows 桌面端用户受影响时间较长，39 条评论反映问题存在多种触发变体。
- [查看 Issue](https://github.com/anthropics/claude-code/issues/49917)

### #92779 — Windows 蓝屏 STOP 0x50（今日新报）
- **状态**: OPEN | 评论 4 | 👍 0
- **要点**: 可稳定复现的 Windows BSOD，崩溃于 `bindflt.sys`，且仅在 claude.exe 上下文中出现，已被标记为 invalid。
- **为什么重要**: 尽管被标 invalid，崩溃级问题必须高度关注——若属实影响极大，若为环境问题也需帮助用户排查。
- [查看 Issue](https://github.com/anthropics/claude-code/issues/92779)

### #75941 — 会话被反复自动归档
- **状态**: OPEN | 评论 10 | 👍 1
- **要点**: v2.1.69 在 macOS 上，无用户操作时对话会话被反复自动归档，持续打断进行中的工作。
- **为什么重要**: 数据"看似丢失"类 Bug 对用户信任伤害最大。2.1.69 版本的此问题已持续两个月，用户迫切需要确认是否在新版修复。
- [查看 Issue](https://github.com/anthropics/claude-code/issues/75941)

### #85624 — VS Code 扩展会话恢复失败
- **状态**: OPEN | 评论 7 | 👍 1
- **要点**: VS Code 扩展 2.1.226 中三个可稳定复现的会话恢复问题：系统重启后历史搜索找不到 worktree 会话、5 个打开的会话标签页白屏且无法通过 UI 恢复。
- **为什么重要**: 重启即丢失工作现场对重度 IDE 用户是致命体验问题，附带两个相关问题表明恢复链路存在多处断裂。
- [查看 Issue](https://github.com/anthropics/claude-code/issues/85624)

### #88418 — Windows 路径未标准化导致项目状态分裂
- **状态**: OPEN | 评论 3 | 👍 0
- **要点**: Windows 上 `.claude.json` 中 `projects` 以原始路径字符串为键、无标准化处理，同一目录可能以 2-3 种不同拼写存储，导致 trust、MCP servers、worktree 状态被割裂。
- **为什么重要**: 看似低级的路径处理缺陷，实际会引发权限绕过（trust 分裂）和安全风险，值得尽快修复。
- [查看 Issue](https://github.com/anthropics/claude-code/issues/88418)

### #88054 — Remote Control 24 小时后 OAuth token 过期崩溃
- **状态**: OPEN | 评论 3 | 👍 0
- **要点**: `claude remote-control` 服务端在恰好 24 小时后收到 401，不刷新 OAuth access token，直接退出并杀死所有附属会话（v2.1.233, macOS）。
- **为什么重要**: 远程控制的可靠性直接取决于 token 生命周期管理，此崩溃会让所有远程附加会话一起丢失。
- [查看 Issue](https://github.com/anthropics/claude-code/issues/88054)

### #90049 — Windows + PostToolUse hooks 丢失 shell 结果
- **状态**: OPEN | 评论 4 | 👍 0
- **要点**: 9 月 8 日更新了诊断结论：shell 实际已完成（日志记录 `tool_dispatch_end outcome=ok`），但交互式 CLI 在工作树切换后丢失 shell 结果，并非此前推测的 pre-spawn 问题。
- **为什么重要**: 诊断更新让问题定位更清晰，便于开发者修复。Windows 平台 + hooks 场景下影响 CI 类自动化流程。
- [查看 Issue](https://github.com/anthropics/claude-code/issues/90049)

## 4. 重要 PR 进展

过去 24 小时内仅 1 个 PR 有更新：

### #26175 — 修复损坏的原生安装引导脚本（已关闭，未合并）
- **状态**: CLOSED | 👍 0
- **要点**: 修复 `curl -fsSL https://claude.ai/install.sh | bash` 引导脚本问题——当前脚本委托给下载二进制的 `install` 子命令，但该子命令静默失败，无法创建 `~/.local/bin/claude`，且会删除用户已有的安装。
- **为什么重要**: 安装引导脚本直接影响所有新用户的上手体验——静默失败 + 删除既有安装是双重伤害。PR 虽已关闭，与之相关的 Issue 仍影响用户。
- [查看 PR](https://github.com/anthropics/claude-code/pull/26175)

## 5. 功能需求趋势

从今日全部 Issues 中提炼的社区核心功能诉求：

| 方向 | 代表 Issue | 热度信号 |
|---|---|---|
| **多账号 / 多 Profile 管理** | #18435 | 791 👍 为全场最高 |
| **Hooks / 插件深度扩展** | #91870 | 3 天 139 评论，84 👍 |
| **远程控制可靠性** | #88054（token 刷新）、#86045（CCR v2 404） | 多个独立报告指向同一功能域 |
| **桌面端体验完善** | #18435（多账号）、#68171（会话分组文件夹）、#90878（keybindings.json 被忽略） | 桌面端需求分散但持续 |
| **会话管理能力** | #68171（文件夹/集合分组）、#75941（自动归档）、#85624（历史搜索恢复） | 多个独立痛点指向会话组织与恢复 |
| **Context / 压缩策略准确性** | #81620、#84738（advisor 上下文翻倍） | 双报告确认，高优先级信号 |

## 6. 开发者关注点

**高频痛点关键词**: 词云核心为 **Auto 模式工具选择不当**（bash 滥用）、**远程控制可靠性**（token/注册双问题）、**上下文计量不准确**（advisor 翻倍触发过早压缩）、**Windows 路径处理缺陷**（.claude.json 分裂）。

**值得注意的信号**:
- ⚠️ **advisor 上下文翻倍** 已有两份独立报告（#81620、#84738），可能存在交叉验证，建议官方确认后提升优先级。受影响最重的是 subagents，对长任务和多智能体协作场景影响显著。
- ⚠️ **Windows 蓝屏报告**（#92779）虽被标记 invalid，但属于崩溃级问题，值得跟进确认为环境问题而非产品缺陷。
- ⚠️ **VS Code 扩展 2.1.226 的会话恢复缺陷**（#85624）——重启后丢失工作现场 + 白屏不可恢复，对重度 IDE 用户影响严重，建议优先验证。
- ⚠️ **#60705 模型行为问题**（165 评论）虽已关闭，但其论述的"模型将 Stop-hook 指令视为越权授权"等问题指向模型层系统性风险，建议关注后续是否在模型更新中改进。
- 曾于 2 月提出的安装脚本修复 PR（#26175）至今未合并，原生安装体验问题仍在影响用户。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报 — 2026-09-08

## 今日速览

今日社区最显著的事件是**大规模"模型容量已满"（Selected model is at capacity）错误爆发**，多位 Pro/Pro 20x 订阅用户报告桌面端与 CLI 完全不可用，疑似与当日 GPT-6 Astra 发布及 DevDay 活动导致的服务过载相关。与此同时，TUI 的实时语音功能成为今日 PR 开发重点，合并了十余项与语音交互体验相关的修复与增强。版本方面发布了 `rust-v0.154.0-alpha.6` 迭代。

## 版本发布

**rust-v0.154.0-alpha.6** — 0.154.0-alpha.6 [查看发布](https://github.com/openai/codex/releases/tag/rust-v0.154.0-alpha.6)

仅发布 alpha 迭代包，未提供详细变更说明。

## 社区热点 Issues

### 🔴 容量风暴（今日最热）

1. **[#43682] 所有模型选择均失败："Selected model is at capacity"**（已关闭）
   - 作者：alexandrawallace | 评论：14 | 👍 5
   - 用户所有模型均返回容量错误，完全无法发送消息。该 Issue 今日被关闭，但同主题仍在持续发酵。
   - [查看 Issue](https://github.com/openai/codex/issues/43682)

2. **[#43722] Pro 20x 账户 100% 配额剩余却完全不可用**（开放）
   - 作者：q794464425 | 评论：14
   - 应用版本 26.901.51231，配额未消耗但所有模型报容量已满，用户情绪强烈。
   - [查看 Issue](https://github.com/openai/codex/issues/43722)

3. **[#43752] Codex Desktop 连续一周完全不可用**（开放）
   - 作者：Halary-wangqi | 评论：6
   - Pro 20x 用户反映容量错误持续一周未解决。
   - [查看 Issue](https://github.com/openai/codex/issues/43752)

4. **[#43738] 容量错误大规模爆发：多用户报告服务数小时不可用**（开放）
   - 作者：mohammadbintangbiscirurgiputra | 评论：4
   - 明确指出与 **2026-09-08 DevDay / GPT-6 Astra 发布**的时间关联，汇总了大量同类报告。
   - [查看 Issue](https://github.com/openai/codex/issues/43738)

5. **[#43375] 多个 GPT-5 / GPT-6 模型均返回容量错误**（开放）
   - 作者：LiangDazhu | 评论：14 | 👍 3
   - 错误不限于单个模型，切换 GPT-5/GPT-6 均失败。
   - [查看 Issue](https://github.com/openai/codex/issues/43375)

### 🐛 Windows 平台 Bug

6. **[#41290] 切换 Agent 环境至 WSL 后项目创建/删除失败**（开放）
   - 作者：W4yneChen | 评论：43 | 👍 35
   - **今日评论数最高的 Issue**。Windows + WSL 环境下切换执行环境后项目管理功能失效，影响面大。
   - [查看 Issue](https://github.com/openai/codex/issues/41290)

7. **[#41501] Windows 宠物覆盖层拖拽后失去点击区域**（开放）
   - 作者：homeide-cloud | 评论：13
   - 桌面宠物（pet overlay）交互 Bug。
   - [查看 Issue](https://github.com/openai/codex/issues/41501)

8. **[#16786] Windows 应用反复触发 `git ls-files`，ntfs.sys 非分页池持续增长**（开放）
   - 作者：4ndrxxs | 评论：13 | 👍 4
   - 长期存在的内存泄漏问题，时隔五月仍在更新。
   - [查看 Issue](https://github.com/openai/codex/issues/16786)

### ⚙️ 功能与体验缺陷

9. **[#37754] TUI 恢复会话失败：`list_turns is not supported yet`**（开放）
   - 作者：mvillmow | 评论：13 | 👍 4
   - CLI `thread/resume` 在 TUI 引导阶段调用不支持的 `list_turns` 方法，导致无法恢复本地会话，影响日常使用。
   - [查看 Issue](https://github.com/openai/codex/issues/37754)

10. **[#43750] 协调器在回答侧面问题后提前终止未完成的多智能体任务**（开放）
    - 作者：interconnectedMe | 评论：4
    - 多智能体仓储任务执行中，协调器被一个旁路问题打断并终止了整个任务流。
    - [查看 Issue](https://github.com/openai/codex/issues/43750)

## 重要 PR 进展

### 🎙️ TUI 实时语音（今日最大 PR 集群）

1. **[#43715] 在支持的设备上为捆绑 TUI 启用用户验证**
   - 修复 app server 设备探测始终返回 `false`，导致支持硬件上无法广告用户验证能力的问题。
   - [查看 PR](https://github.com/openai/codex/pull/43715)

2. **[#43712] 在 TUI 中启用 MCP 用户验证**
   - 修复 TUI 自动取消 MCP 用户验证请求的问题，现在会显示验证提示供用户批准。
   - [查看 PR](https://github.com/openai/codex/pull/43712)

3. **[#43624] 新增 macOS Secure Enclave 签名用户验证**
   - 在 macOS 上实现基于生物识别凭据的原生用户验证，替代此前不支持的 provider。
   - [查看 PR](https://github.com/openai/codex/pull/43624)

4. **[#43683] 将语音控制移入独立 Composer 栏**
   - 修复语音控制替换正常页脚且在窄宽度下被截断的问题，状态栏保持可见。
   - [查看 PR](https://github.com/openai/codex/pull/43683)

5. **[#43656] 实时语音转录以翻牌（split-flap）动画呈现**
   - 新增实时语音转录的翻牌动效、黑底与逐字符高亮显示。
   - [查看 PR](https://github.com/openai/codex/pull/43656)

6. **[#43676] 语音转录中样式化语音提示并链接工作区文件**
   - 用户语音提示以粗体红色箭头渲染，工作区文件可点击跳转。
   - [查看 PR](https://github.com/openai/codex/pull/43676)

7. **[#43651] 语音静音快捷键与录音活动指示器**
   - 新增 `Ctrl+X` 切换麦克风，含页脚提示及模态框/弹窗状态保护。
   - [查看 PR](https://github.com/openai/codex/pull/43651)

8. **[#43690] 语音静音快捷键改为可配置**
   - 将硬编码的 `Ctrl+X` 接入 `tui.keymap.chat.toggle_voice_mute` 键位映射体系。
   - [查看 PR](https://github.com/openai/codex/pull/43690)

9. **[#43704] 禁用语音音频接收器的时钟同步**
   - 将 GStreamer audio sink 的 `slave-method` 从 `resample` 改为 `none`，并关闭 sink 同步。
   - [查看 PR](https://github.com/openai/codex/pull/43704)

10. **[#43695] 稳定跨重绘的实时语音电平采样**
    - 修复重绘时机过早消耗音频峰值的问题，避免出现虚假的静音采样和旧峰值残留。
    - [查看 PR](https://github.com/openai/codex/pull/43695)

> 另有多项语音相关 PR：**[#43699]** 滚动时保留翻牌动画状态、**[#43708]** TUI 验证请求簿记、**[#43702]** 验证提示组件、**[#43645]** 实时语音回归测试覆盖、**[#43698]** 旧版 app-server 通知可配置化。

## 功能需求趋势

1. **新模型容量与服务稳定性**
   - 今日绝对焦点：GPT-6 Astra 发布日触发的大规模容量错误，暴露了服务扩容跟不上用户增长的根本矛盾。用户要求的不是"换一个模型"，而是服务本身可用。

2. **TUI 语音交互体验打磨**
   - 从 PR 集群可见，官方正集中投入 TUI 实时语音功能：动画效果、快捷键配置、电平采样稳定性、MCP 验证等，语音形态交互正在快速成熟。

3. **上下文/文件忽略控制**（[#24993](https://github.com/openai/codex/issues/24993)，👍 11）
   - 社区持续呼吁引入 `.agentsignore` 文件或在 `config.toml` 中配置忽略路径，替代仅依赖 `.gitignore` 的现状。

4. **任务长期运行与 TODO 列表**（[#2966](https://github.com/openai/codex/issues/2966)，👍 13，已关闭）
   - 用户希望 Agent 具备"列出 TODO → 逐项执行 → 批量汇总"的长任务自主执行能力，而非频繁回问用户。

5. **多智能体协调可靠性**
   - [#43750] 暴露了协调器对任务流的保持能力问题——侧面问题不应中断主任务执行。

## 开发者关注点

- **服务容量是当前第一痛点**：容量错误横跨多模型、多平台（Windows/macOS/CLI）、多订阅档位（Plus/Pro/Pro 20x），且持续数小时至一周不等。开发者在容量错误信息上花费了大量时间排查，但问题根源在服务端。
- **Windows 平台体验仍需加强**：WSL 环境切换导致项目管理崩溃（43 评论、35 👍 为今日最高热度）、桌面宠物交互失效、Git LFS 临时副本内存泄漏、`ntfs.sys` 非分页池增长等多类问题持续存在。
- **会话恢复可靠性不足**：TUI 恢复失败（`list_turns` 不支持）、Windows 端重启后完成响应消失且被重新水合为"已中断"状态（[#39885](https://github.com/openai/codex/issues/39885)），说明会话持久化链路仍不稳定。
- **模型行为一致性**：多智能体协调器在完成旁路问答后过早终止主任务（[#43750](https://github.com/openai/codex/issues/43750)），以及桌面端无法继续 Cloud 任务（仅提供 Local 目的地，[#29694](https://github.com/openai/codex/issues/29694)），反映了任务归属与流转设计的缺陷。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报 — 2026-09-08

## 今日速览

Gemini CLI 于今日发布 v0.60.0-nightly 版本，主要包含常规迭代更新。社区方面，围绕 **Agent 可靠性**（子代理卡死、中断误报、超时恢复）与**安全加固**（沙箱隔离、凭据脱敏）的讨论最为集中，共有 50 条 Issue 和 24 条 PR 在过去 24 小时内获得更新。多个人工维护的 P1 Bug（如通用子代理挂起、Shell 执行卡死）仍处于需重新测试阶段，值得关注。

## 版本发布

**[v0.60.0-nightly.20260908.g85aca163f](https://github.com/google-gemini/gemini-cli/releases)**

- 夜间自动构建版本，无显著功能变更说明。
- 完整变更日志：https://github.com/google-gemini/gemini-cli/compare/v0.60.0-nightly.20260907.g85aca163f...v0.60.0-nightly.20260908.g85aca163f

---

## 社区热点 Issues

### P1 — 高影响

**1. [#22323 Subagent 达 MAX_TURNS 后被错误报告为 GOAL 成功，中断被隐藏](https://github.com/google-gemini/gemini-cli/issues/22323)**
类型：Bug / Agent ｜ 评论 13 条 ｜ 👍 2
`codebase_investigator` 子代理在尚未完成任何分析就达到最大回合数时，仍返回 `status: "success"` 和 `Termination Reason: "GOAL"`，掩盖了真实的中断原因。该问题涉及 Agent 状态报告的核心可靠性，已标记为 P1 并处于待回归测试阶段，评论数居全库之首，社区关注度高。

**2. [#21409 通用子代理（Generalist agent）挂起，简单操作（如创建文件夹）也卡死](https://github.com/google-gemini/gemini-cli/issues/21409)**
类型：Bug / Agent ｜ 评论 8 条 ｜ 👍 8
用户反馈当 Gemini CLI 将任务委派给通用子代理时会无限期挂起（最长等待1小时无响应）。获得 8 个 👍，是今日点赞最高的 Issue，说明该问题影响了大量用户。标记为 P1 并处于待回归测试状态，官方已确认正在跟进。

**3. [#25166 Shell 命令执行完毕后卡在"等待输入"状态](https://github.com/google-gemini/gemini-cli/issues/25166)**
类型：Bug / Core ｜ 评论 4 条 ｜ 👍 3
即便是极简单的 CLI 命令，执行完成后界面仍显示命令活跃并提示 "Awaiting user input"，导致会话挂起。直接阻塞日常使用，属于 P1 级别核心流程问题。

**4. [#29244（PR）使工具文件写入具备原子性并序列化同路径写入](https://github.com/google-gemini/gemini-cli/pull/29244)**
类型：PR / Core ｜ 今日提交
并行工具执行可能导致同路径写入竞争 —— 两次并发 `replace` 调用都基于同一原始内容，后者覆盖前者的编辑结果。该 PR 将文件写入改为原子操作，是典型的**数据丢失竞态修复**。

### P2 — 重要修复与增强

**5. [#19873 利用模型原生的 Bash 亲和性，实现零依赖 OS 沙箱与执行后意图路由](https://github.com/google-gemini/gemini-cli/issues/19873)**
类型：增强 / Agent ｜ 评论 9 条
提出 Gemini 3 模型天然擅长以 bash 用户身份链式调用 POSIX 工具（`grep`、`sed`、`awk`），但当前架构未充分利用。该 Issue 讨论如何通过沙箱化执行释放模型的原生能力，评论数位列第二，属于 Agent 执行架构方向的深度讨论。

**6. [#26525 为 Auto Memory 增加确定性脱敏、减少日志记录量](https://github.com/google-gemini/gemini-cli/issues/26525)**
类型：Bug / 安全 ｜ 评论 5 条
Auto Memory 功能在将本地转录内容发送给后台提取代理前，仅依赖提示词（prompt）要求模型自行脱敏，脱敏发生在内容已传出之后，存在**机密泄漏风险**。社区正在推动在执行链路上进行确定性脱敏（即在发送前完成清洗）。

**7. [#22745 评估 AST 感知的文件读取、搜索与代码映射的影响](https://github.com/google-gemini/gemini-cli/issues/22745)**
类型：Feature / Agent ｜ 评论 7 条
该 EPIC 跟踪一组调研，探索引入 AST（抽象语法树）感知工具的价值 —— 如单次工具调用精确读取方法边界，减少 Agent 读取代码的轮次、提升代码库理解精度。属于 Agent 核心能力的长期方向探索。

**8. [#21968 Gemini 不会主动使用自定义 Skills 和子代理](https://github.com/google-gemini/gemini-cli/issues/21968)**
类型：Bug / Agent ｜ 评论 6 条
用户反馈即使任务与已定义的 skills 高度相关，Gemini 仍不会自主调用自定义 skills 或子代理，只有在显式指令下才会使用。反映 Agent 在**工具选择性调用**上的策略需要优化。

### P3 / 其他值得关注

**9. [#21983 Browser 子代理在 Wayland 环境下失败](https://github.com/google-gemini/gemini-cli/issues/21983)**
类型：Bug / Browser ｜ 评论 4 条 ｜ P1
Browser Agent 在 Wayland 显示服务器协议下无法正常工作，直接给出报错并结束。这是环境下兼容问题，对 Linux 用户影响明显。

**10. [#29232 企业用户反馈：Gemini CLI 不支持 GCP 企业需求（标题原文）](https://github.com/google-gemini/gemini-cli/issues/29232)**
类型：增强 / 企业 ｜ 评论 3 条 ｜ 👍 3
创建于昨日（2026-09-07）的较新 Issue，标题虽显情绪化，内容指向企业订阅场景下的功能缺口与满意度问题。获得 3 个 👍 说明企业用户存在类似诉求，值得关注后续具体需求的展开。

此外，P1 级 Issue [#22186 `get-shit-done` 输出钩子导致崩溃](https://github.com/google-gemini/gemini-cli/issues/22186) 和 [#20079 `~/.gemini/agents/` 下符号链接无法识别为 Agent](https://github.com/google-gemini/gemini-cli/issues/20079) 也在持续更新中。

---

## 重要 PR 进展

### 安全加固

**1. [#29008 在 `getSafeGitEnv` 中剥离影响执行的 `GIT_*` 环境变量](https://github.com/google-gemini/gemini-cli/pull/29008)**
状态：已关闭 ｜ P1 / 安全
修复 #29003。Gemini CLI 会将受信任项目的 `.env` 文件加载进 `process.env`，其中三个内部 git 调用点使用了由此派生的环境。攻击者可通过在 `.env` 中注入恶意 `GIT_*`（如 `GIT_CONFIG_*`、`GIT_SSH_COMMAND` 等）变量**劫持 git 操作的执行行为**。该 PR 在 git 子进程环境中剥离了这些执行影响型变量。

**2. [#28935 在 macOS Seatbelt 沙箱中隔离 Docker 与容器运行时 socket 及二进制文件](https://github.com/google-gemini/gemini-cli/pull/28935)**
状态：已关闭
在 `macOS` Seatbelt 沙箱配置中，拒绝访问容器运行时守护进程的 UNIX domain socket、CLI 二进制文件、Mach/XPC 服务查找及 POSIX 共享内存。防止通过**容器虚拟机文件系统挂载**实现沙箱逃逸。

**3. [#29015 为缺少显式权限的 Workflows 设置最小权限](https://github.com/google-gemini/gemini-cli/pull/29015)**
状态：已关闭
为 6 个未声明 `permissions:` 块的 CI workflow 补上了最小化权限声明。缺少该声明时，workflow 的 `GITHUB_TOKEN` 会**继承仓库/组织的默认（可能过大）权限**，属于 CI/CD 供应链安全加固。

### 核心功能 Bug 修复

**4. [#29244 使工具文件写入具备原子性并序列化同路径写入](https://github.com/google-gemini/gemini-cli/pull/29244)**
状态：开放中 ｜ P1 / Core
修复并行工具执行导致的同路径写入竞争（两个并发 `replace` 均基于旧内容，后者覆盖前者，**丢失编辑**）。实现原子写入并序列化相同文件的并发写操作。

**5. [#28995 修复 `formatTruncatedToolOutput` 在负 `maxChars` 下输出膨胀问题](https://github.com/google-gemini/gemini-cli/pull/28995)**
状态：已关闭 ｜ P1 / Core
修复 #28620。当 `maxChars` 为负值时，JavaScript 的 `String.prototype.slice()` 负索引行为导致**截断输出膨胀至原大小的约两倍**。需要对异常输入进行防御性处理。

**6. [#29004 保护 `formatTruncatedToolOutput` 免受非正 `maxChars` 影响](https://github.com/google-gemini/gemini-cli/pull/29004)**
状态：已关闭 ｜ P1 / Core
与 #28995 属同一问题的不同修复方案，为 `formatTruncatedToolOutput` 增加对 `maxChars` 为 0 或负数的守卫逻辑。两条 PR 并行使问题得到充分关注。

**7. [#29180 修复 `tildeifyPath` 将同前缀兄弟目录误判为用户主目录路径](https://github.com/google-gemini/gemini-cli/pull/29180)**
状态：开放中
防止路径美化函数将名称与主目录同前缀的兄弟目录（如 `/home/` 与 `/homepage/`）错误地替换为 `~`，**避免路径解析错误**。改用平台相关的 `path.relative` 实现强制边界匹配。

### 功能与文档改进

**8. [#29013 补齐 CLI 参考文档中缺失的 6 个命令行参数](https://github.com/google-gemini/gemini-cli/pull/29013)**
状态：已关闭 ｜ P2 / 文档
在 CLI 参考表中补充了已在 `config.ts` 注册但未写入文档的 6 个标志：`--policy`、`--admin-policy`、`--session-id`、`--session-file`、`--raw-output` 和 `--accept-raw-output-risk`。

**9. [#29011 修复 CLI 参考文档中的 ACP 标志描述错误](https://github.com/google-gemini/gemini-cli/pull/29011)**
状态：已关闭 ｜ 文档
修正 CLI 标志表中的三处问题：一个已不存在的遗留标志、ACP 缩写展开错误、缺少当前 `--acp` 标志，同时未标注弃用标志。与 #29009（纠正环境变量脱敏配置键名）同属**文档准确性清理**。

**10. [#29017 对符号链接/目录联接的 Skills 目录去重](https://github.com/google-gemini/gemini-cli/pull/29017)**
状态：已关闭 ｜ P3 / 扩展
修复 #28944。当工作区或用户目录通过符号链接或 Windows junction（`mklink /J`）将 `.gemini` 与 `.agents` 链接时，Skill 发现逻辑会**因同一目录存在多个路径而重复加载**。该 PR 在发现阶段对符号链接目录进行去重。

**11. [#29022 新增 `ui.keepAskUserQuestionsInHistory` 设置，保留 ask_user 提问记录](https://github.com/google-gemini/gemini-cli/pull/29022)**
状态：已关闭
实现 `ui.keepAskUserQuestionsInHistory` 设置项。当前 ask_user 工具的提问在回答后即丢失，会话恢复或回溯时无法查看历史问题。此 PR 将该问题带入**会话历史保留**领域。

**12. [#27636 优化 VirtualizedList 以支撑大数据集并修复点击处理](https://github.com/google-gemini/gemini-cli/pull/27636)**
状态：已关闭（标记为 Stale）
优化 VirtualizedList 组件的渲染与滚动性能，处理大数据集场景，并改进静态项目的点击处理健壮性。尽管标记为过时，但仍可能被纳入后续迭代。

---

## 功能需求趋势

从活跃 Issues 中可提炼以下社区关注方向：

1. **Agent 可靠性治理**（呼声最高）：解决子代理卡死（#21409）、超时误报（#22323）、停止重试低信号会话（#26522）、并发文件写入竞态（PR #29244）等问题，是当前社区最大的痛点集合。

2. **安全加固深化**：从沙箱逃逸防护（PR #28935）、Git 环境变量注入防护（PR #29008）、CI 最小权限（PR #29015）到 Auto Memory 的**预发送确定性脱敏**（#26525），安全方向从模型行为约束逐步扩展到**基础设施层和 CI/CD 供应链**。

3. **Agent 智能调度增强**：AST 感知的代码读取与映射（#22745）、让模型更主动使用自定义 skills（#21968）、基于模型 Bash 亲和性的沙箱化执行与意图路由（#19873），表明社区对 Agent **工具选择策略与代码理解深度**提出更高要求。

4. **功能开关可视化与配置**：`ui.keepAskUserQuestionsInHistory`（PR #29022）代表社区对**会话记录的完整性与可回溯性**的需求；CLI 文档补齐（PR #29013、#29011）则表明功能注册与文档不同步的问题正在被系统化解决。

5. **自动记忆（Auto Memory）机制完善**：#26525、#26522、#26523 三条 Issue 形成一个小集群，聚焦于 Auto Memory 的**脱敏时机、重试策略、无效补丁隔离**三个维度，显示该功能处于密集迭代期。

---

## 开发者关注点

1. **Agent 行为不可预测性是头号痛点**：子代理无故挂起（#21409）、超时被伪装为成功（#22323）、shell 命令完成但 UI 卡在等待输入（#25166）、`get-shit-done` 输出钩子导致崩溃（#22186）—— 这些 P1 级 Bug 共同指向 **Agent 生命周期管理的不可靠**，直接影响用户对 CLI 的信任度。

2. **文件编辑竞争的隐性数据丢失**：并行工具执行对同一路径的并发写入会导致静默丢编辑（PR #29244），且模型动辄在任意目录创建临时脚本（#23571），这些**文件操作的副作用控制**正在成为开发者日常使用中的新痛点。

3. **安全边界从"模型行为约束"转向"执行环境隔离"**：多个 Issue/PR 集中在 .env 注入攻击（#29008）、容器 socket 逃逸（#28935）、CI 最小权限（#29015）上，社区对**安全事件影响面**的关切正在倒逼架构层面的防护机制下沉。

4. **Agent 的"过度自信"与"消极怠工"并存**：一面在 git 操作中擅自使用 `git reset`、`--force` 等破坏性命令（#22672），一面又不主动调用已定义的 skills 和子代理（#21968）—— 开发者的核心诉求是模型在**何时保守、何时主动**之间需要更精细的策略控制。

5. **环境适配问题持续存在**：Wayland 下 browser 子代理直接失败（#21983）、符号链接路径识别异常（#20079、#29180）等环境派生问题，对采用非主流环境（Linux 桌面、Windows junction、符号链接工作区）的开发者影响明显。

---

> 数据来源：[google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli) ｜ 统计窗口：2026-09-07 至 2026-09-08

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报

**2026-09-08**

---

## 今日速览

今日无新版本发布，社区讨论集中在新版 Desktop App 1.1.15 引发的多会话/多项目冲突及 Windows 平台问题；session 状态管理（恢复、MCP 连接中断、会话卡死/内存泄漏）继续占据 issue 主导。此外两条针对 FreeBSD 安装脚本的 PR 值得关注，修复了误报 Windows 的安装失败问题。

---

## 社区热点 Issues（10 条精选）

### 1. [OPEN] Desktop app 1.1.15: cannot create a second Local session — active workspace 冲突
- **链接**: [Issue #4742](https://github.com/copilot-cli/issues/4742)
- 👍 1 | 💬 9
- **为什么值得关注**: 多条 issue 指向 1.1.15 同一回归（#4742、#4756），表明新版桌面应用在会话并发管理上出现严重缺陷。社区反馈集中、复现路径清晰，属于影响日常使用的 blocker。

### 2. [OPEN] [area:context-memory, area:models] /compact 连续失败（Opus 4.6 空响应）
- **链接**: [Issue #2861](https://github.com/copilot-cli/issues/2861)
- 👍 4 | 💬 6
- **为什么值得关注**: 手动 /compact 在短会话中连续三次收到空响应，说明模型端/压缩管线存在稳定性问题，影响长会话的可持续使用。已持续近 5 个月未解决，社区耐心在消耗中。

### 3. [OPEN] Windows app requires archiving every idle session before creating a new one
- **链接**: [Issue #4756](https://github.com/copilot-cli/issues/4756)
- 👍 13 | 💬 4
- **为什么值得关注**: 13 个 👍 在今日 issue 中最高。Windows 用户在 1.1.15 上被迫逐一归档闲置会话才能新建 Local session，与 #4742 同源，但暴露了平台差异化问题。

### 4. [OPEN] `disable-model-invocation: true` 使 skill 完全不可达
- **链接**: [Issue #4438](https://github.com/copilot-cli/issues/4438)
- 👍 6 | 💬 4
- **为什么值得关注**: 语义违反直觉——标记为"禁止模型自动调用"的 skill 应可手动调用，却反而变成了"完全不可用"。涉及 skill 系统的权限模型设计，值得维护者重新审视。

### 5. [OPEN] `--yolo` / `--allow-all` 被 fail-closed 策略错误阻断
- **链接**: [Issue #4757](https://github.com/copilot-cli/issues/4757)
- 💬 3
- **为什么值得关注**: 在企业策略解析为"absent"（即没有策略）时仍然应用 fail-closed 限制，属于逻辑反转型 bug。对依赖 bypass 模式的企业用户影响直接。

### 6. [OPEN] Memories are leaking between repositories
- **链接**: [Issue #3945](https://github.com/copilot-cli/issues/3945)
- 💬 3
- **为什么值得关注**: 跨仓库记忆泄漏涉及数据隔离与隐私边界，用户明确表达了 "strange" 和意外——一个本应独立的仓库却带入了先前项目的"facts"。持续两个半月未修复。

### 7. [OPEN] Session resume cancels in-flight stdio MCP connections（~1s vs ~16s）
- **链接**: [Issue #4753](https://github.com/copilot-cli/issues/4753)
- 👍 1 | 💬 2
- **为什么值得关注**: v1.0.83 将 resume 时的 MCP 连接等待从 ~16s 砍到 ~1s，导致 stdio 服务器被静默取消——整个会话中 MCP 工具不可用。典型回归，低版本用户会犹豫升级。

### 8. [OPEN] Session wedges permanently when a queued-lane message lands at turn end
- **链接**: [Issue #4755](https://github.com/copilot-cli/issues/4755)
- 💬 1
- **为什么值得关注**: 致命会话状态：既非 idle 也非 running，不接受任何输入，只能杀进程恢复。queue 机制的死锁逻辑需要优先排查。

### 9. [OPEN] MCP OAuth (Desktop app): non-first-party HTTP servers 认证完全失效
- **链接**: [Issue #4007](https://github.com/copilot-cli/issues/4007)
- 👍 3 | 💬 3
- **为什么值得关注**: 第三方 HTTP MCP 服务器（Atlassian、incident.io 等）在桌面端无法完成 OAuth——没有浏览器弹窗、无错误提示。生态扩展的关键依赖，卡了两个月。

### 10. [OPEN] Resumed session retains stale connection item IDs（CAPIError 400）
- **链接**: [Issue #4505](https://github.com/copilot-cli/issues/4505)
- 👍 3 | 💬 1
- **为什么值得关注**: 会话恢复后所有 prompt 均报 `input item ID does not belong to this connection`，彻底不可用。session 恢复机制的 ID 管理存在状态残留问题。

---

### 其他值得留意

| Issue | 标题 | 👍 | 链接 |
|---|---|---|---|
| #13 | CLI vi/vim 输入模式（已关闭） | 76 | [链接](https://github.com/copilot-cli/issues/13) |

> 该 issue 虽然已关闭，但 76 个 👍 是今日数据中社区呼声最高的功能请求，反映了重度终端用户对 modal editing 支持的持续需求。

---

## 重要 PR 进展

> 今日活跃 PR 仅 3 条，其中 1 条可疑（#4100，内容为"安全性"且作者命名异常，疑为 spam），在此全部列出：

### 1. [CLOSED] install: report unsupported operating systems
- **作者**: devm33 | **链接**: [PR #4762](https://github.com/copilot-cli/pull/4762)
- **内容**: 修复 FreeBSD 上 `install.sh` 误报 "Windows detected but winget not found" 的问题——因非 macOS/Linux 系统均落入 Windows 分支。现已关闭（可能已合并）。

### 2. [OPEN] install: report unsupported operating systems
- **作者**: 1fanwang | **链接**: [PR #4761](https://github.com/copilot-cli/pull/4761)
- **内容**: 与 #4762 完全相同的问题与修复思路，并行提交。FreeBSD 用户目前在安装时会收到误导性错误提示。

### 3. [CLOSED] shangti0168
- **作者**: huangyoufeng76-debug | **链接**: [PR #4100](https://github.com/copilot-cli/pull/4100)
- **内容**: 标题与描述均为可疑内容，应警惕是否为 spam/恶意 PR。

---

## 功能需求趋势

从今日活跃 Issues 中提炼的关键方向：

| 方向 | 代表 Issue | 热度信号 |
|---|---|---|
| **会话/状态管理可靠性** | #4742, #4755, #4756, #4505, #2836 | 占比最高，多个 1.1.15 回归 |
| **MCP 生态与稳定性** | #4753, #4759, #2235, #4017 | MCP profile 需求 + 取消请求 + OAuth 修复 |
| **权限/策略模型** | #4757, #4696 | fail-closed 误判、allow-all 超时重置 |
| **安装/平台覆盖** | PR #4761, #4762 | FreeBSD 明确不支持但仍误报 |
| **终端输入模式** | #13 | 76 👍，需求强烈但已关闭 |
| **上下文/记忆管理** | #2861, #3945 | 压缩失败 + 跨仓库记忆泄漏 |
| **终端渲染与性能** | #1787, #4750 | 输出折叠需求 + CPU 占用问题 |

---

## 开发者关注点

1. **1.1.15 升级即 Regret**: 多条并发会话相关 issue 指向同一版本回归（#4742、#4756），社区反映强烈。建议官方 **立即暂停 1.1.15 推送** 或提供 hotfix。

2. **Session 可靠性是最大痛点**: 从状态卡死（#4755）、恢复后不可用（#4505）、MCP 连接超时被杀（#4753）到孤儿状态目录（#2836），会话生命周期管理质量亟待提升。对 CLI 重度用户，一次会话丢失可能意味着大量上下文损失。

3. **MCP 是生态核心但问题堆积**: 从 OAuth 失败（#4017）、取消请求缺失（#4759）到连接超时回归（#4753），MCP 相关 issue 涵盖基础设施到协议遵从多个层面。社区对 MCP Profiles（#2235）的需求表明配置粒度不够用。

4. **权限策略逻辑需重新审视**: 无策略时仍应用 fail-closed（#4757）和 allow-all 8 小时自动重置（#4696）——前者是逻辑 bug，后者是安全性与易用性的平衡问题，但**均缺少明确的产品文档说明**，用户体验割裂。

5. **安装脚本健壮性**: 两条几乎重复的 FreeBSD 修复 PR 说明 install.sh 的分支逻辑过于粗糙，非主流平台用户甚至收到完全误导的错误信息。

6. **反馈机制薄弱**: 多个关键 issue（#2861、#3945、#4017）持续数月未获明确回复或修复计划，社区等待成本日益升高，建议维护团队对高频 issue 至少给出官方 acknowledgment。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报 — 2026-09-08

> 数据来源: github.com/MoonshotAI/kimi-cli

---

## 1. 今日速览

过去 24 小时内项目无新版本发布。社区活跃度集中在外设/配对创新与输入法兼容性两大方向：外部开发者提交了将 iOS/Android 手机作为远程配对设备的新 PR（#2616），同时 Windows 平台 IME 输入重复字符的 Bug 持续获得关注（#2584）。

---

## 2. 版本发布

过去 24 小时内无新 Release。

---

## 3. 社区热点 Issues

> 过去 24 小时内更新条目较少，以下为近期高质量 Issue 精选（按社区价值与代表性综合评估）。

**#2584 [BUG] Thai (and other IME-based) characters duplicated when typing in the prompt on Windows** — [查看](https://github.com/MoonshotAI/kimi-cli/issues/2584)
- **状态**: OPEN | 作者: mgprona | 创建: 08-04 | 更新: 09-07 | 👍 1
- **简介**: 使用 Windows 系统时，在输入提示词中通过输入法（IME）输入泰语等非拉丁字符会出现字符重复。涉及版本 0.31.1，默认订阅与模型。
- **重要性**: IME 输入异常直接影响东亚及东南亚用户（中日韩泰等）的核心编辑体验，属于高覆盖面输入类缺陷，且涉及 Windows 平台。
- **社区反应**: 讨论仍在进行中，评论较少，但该方向问题应引起 Windows 用户关注，建议相关开发者参与复现与验证。

---

## 4. 重要 PR 进展

**#2616 [OPEN] Add Build Remote Agent phone pairing (gbr/1)** — [查看](https://github.com/MoonshotAI/kimi-cli/pull/2616)
- **状态**: OPEN | 作者: LinespottingPrivate | 创建: 08-23 | 更新: 09-07
- **简介**: 引入 **Build Remote Agent** 作为本机桌面代理的配对设备。用户可通过付费 iOS/Android 应用（基于免费 MIT [`gbr-agent`](https://github.com/LinespottingOrg/GrokBuildRemote-Agents)）远程查看本地 CLI 会话，并支持向会话中注入输入。
- **重要性**: 该 PR 将 CLI 从纯终端工具扩展为支持移动端远程操控与监听的协作工具，填补了 CLI 类开发工具在移动端伴随时缺乏官方/社区方案的空白，属于功能性扩展方向。
- **社区反应**: 活跃讨论中。涉及移动端与桌面端安全交互，建议关注作者后续对安全模型（如权限控制）的补充。

---

## 5. 功能需求趋势

基于历史 Issue 与 PR 方向，社区最关注的功能趋势包括：

- **远程设备配对与协作**（PR #2616）：移动端（iOS/Android）作为配对设备，实时查看与注入本地会话 —— 社区对"多设备协同、随时接入开发环境"的需求明显上升。
- **跨平台输入体验与 IME 兼容**（Issue #2584）：Windows 下输入法（非拉丁语系）兼容性修复。这暗示在非英文母语市场（东南亚、东亚）用户群体正在扩大。
- **跨平台稳定性**（与 #2584 关联）：Windows 平台相关问题的持续出现，反映出用户对 Windows 原生支持质量的敏感度提升。

---

## 6. 开发者关注点

- **Windows 输入痛点高发**: 泰国语及其他 IME 字符在 Windows 命令行中输入重复的问题，可能意味着 Kimi CLI 在 Windows 控制台/终端处理 Unicode 组合字符或输入缓冲区时存在缺陷。多语言用户在日常使用该工具进行中文、日文输入时也可能遭遇类似问题，值得优先排查。
- **移动端集成是增量场景**: 通过手机配对查看/操控本地 CLI 会话的 PR 已获关注，这说明有用户希望在离开电脑时仍能监视或干预远程任务（长任务等待、构建监控等场景）。
- **社区外部度活跃**: 外部开发者将 `gbr-agent` 等第三方便于桥接方案带入 Kimi CLI 生态，反映出开发者对官方功能的延伸需求旺盛，同时也对官方 API/协议的开放性提出更高期待。

---

*本报告基于 2026-09-08 日 GitHub 仓库公开数据整理。*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 — 2026-09-08

## 今日速览

今日社区焦点集中在桌面版与 TUI 的性能修复与稳定性改进（Hona 提交多起终端快照、附件内存泄漏与网络请求风暴修复）；同时 `/undo` 无法回滚文件编辑的 Issue 以 23 条评论持续发酵，成为开发者最关注的功能缺陷。此外新增模型（Qwen3.8-27B）与办公文件拖拽支持的需求热度不减。

## 版本发布

过去 24 小时无新版本发布。

## 社区热点 Issues

1. **[/undo 与 /timeline undo 不还原文件编辑](https://github.com/anomalyco/opencode/issues/4704)** [CLOSED]
   23 条评论 · 22 👍 —— 即使项目使用 Git 管理，`/undo` 命令也无法将文件编辑还原。该问题自 2025 年 11 月提出至今仍被持续关注，可能是社区最期待优先修复的核心功能缺陷。

2. **[功能请求：加入 Qwen3.8-27B 模型支持](https://github.com/anomalyco/opencode/issues/42729)** [OPEN]
   8 条评论 · 12 👍 —— 社区对阿里 Qwen 系列新模型接入有较高呼声，反映出用户对开源权重模型选择的持续需求。

3. **[支持拖放 Microsoft Office 文件（.docx、.xlsx）](https://github.com/anomalyco/opencode/issues/27689)** [OPEN]
   8 条评论 —— 聊天界面目前不支持直接拖放 Office 文档，与下方 PR #47640（办公文件预览与文本提取）相互呼应，为高频办公场景需求。

4. **[DeepSeek-v4-flash-free 模型在 Zen 提供商下拉列表中缺失](https://github.com/anomalyco/opencode/issues/43805)** [OPEN]
   7 条评论 —— 模型在 `/zen/v1/models` API 中存在且配置文件正确引用，但 UI 下拉菜单不显示，属提供商列表同步缺陷。

5. **[`opencode session list` 在 limit >= 19 且另一实例运行时崩溃](https://github.com/anomalyco/opencode/issues/35846)** [CLOSED]
   6 条评论 —— Windows 环境下当 `limit` 设为 19 或以上且同时有另一实例运行时触发崩溃，涉及数据库并发访问场景。

6. **[允许通过 external_directory 授权外部符号链接目标](https://github.com/anomalyco/opencode/issues/30788)** [CLOSED]
   6 条评论 · 2 👍 —— 符号链接/交接点目录在文件选择器中不可见，且外部链接目标需要额外授权，影响使用链接目录组织的项目。

7. **[怀疑木马注入：系统自动冒充用户发送消息](https://github.com/anomalyco/opencode/issues/47896)** [CLOSED]
   5 条评论 —— 用户报告系统两次自动以用户身份发送了未经指示的保留记忆类指令，存在被木马注入的风险疑虑，属严重安全问题需关注调查结果。

8. **[opencode2 卡在启动托管后台服务](https://github.com/anomalyco/opencode/issues/41696)** [OPEN]
   5 条评论 —— `opencode2` 反复生成 `serve --service` 进程但从未上报底层错误，导致卡死无法启动。

9. **[语言服务器运行在容器中需支持 processId: null](https://github.com/anomalyco/opencode/issues/36162)** [CLOSED]
   5 条评论 —— 容器内运行 LSP 时因发送 PID 而损坏，需要遵循规范向容器内 LSP 传递空 PID 值。

10. **[X11 + xclip 环境下 clipboard.write() 永不返回](https://github.com/anomalyco/opencode/issues/43697)** [OPEN]
    3 条评论 —— 文本成功复制但 `clipboard.write()` 的 Promise 挂起超过 8 分钟不 resolve。另有相关 Issue（#47900）报告 GNOME Wayland 下剪贴板声称成功但内容缺失、且缺少 wl-clipboard 等辅助工具时无提示。

## 重要 PR 进展

1. **[修复 desktop/web 终端卸载时的快照序列化阻塞](https://github.com/anomalyco/opencode/pull/47924)** [CLOSED]
   终端卸载时在主线程同步序列化整个 normal buffer（scrollback 10000 行 × 150 列约 150 万单元格）导致 UI 卡顿，修复后性能大幅提升。

2. **[修复附件 Blob 无引用时未释放的内存泄漏](https://github.com/anomalyco/opencode/pull/47922)** [CLOSED]
   粘贴到编辑器的每张图片在窗口生命周期内都被钉在渲染器内存中：`drafts.ts` 维护模块级 `Map<id, Blob>` 并创建对象 URL，没有释放路径也未调用 `revokeObjectURL`。移除的附件也会持续占用内存。

3. **[修复会话时间线反复拉取已失效的 shell 输出](https://github.com/anomalyco/opencode/pull/47926)** [CLOSED]
   shell 工具每次重新挂载都会从 `cursor=0` 重新下载输出，并持续轮询服务器已遗忘的 shell 会话。修复后将轮询收敛到 `followShellOutput` 中。

4. **[在事件突发后合并编目重新拉取](https://github.com/anomalyco/opencode/pull/47927)** [OPEN]
   一份 33 分钟的 Desktop netlog 显示 `GET /api/model` 被拉取 16 次（每次约 270 KB，累计解码后 4.3 MB），`GET /api/provider` 同样 16 次。某单个 Location 的模型与提供商编目在约 190ms 内被连续拉取三次。修复方案为事件去抖合并。

5. **[桌面版浏览器扩展包抽取](https://github.com/anomalyco/opencode/pull/47936)** [OPEN]
   将浏览器渲染器与原生实现迁移至 `@opencode/plugin-browser-desktop` 包，为将浏览器作为桌面端内置扩展提供基础。

6. **[探索桌面扩展 API 原语](https://github.com/anomalyco/opencode/pull/47935)** [OPEN]
   为 #47936 奠定基础：定义渲染器/主进程入口、插件持有的可用性、动态面板、命令、存储与清理机制，并复用 TUI 的 slot 解析器及其五种布局模式。

7. **[办公文件与 PDF 的预览与文本提取功能](https://github.com/anomalyco/opencode/pull/47640)** [OPEN]
   增加离线文档处理能力，支持 Office 文件与 PDF 的预览和文本提取，直接回应 Issue #27689 的需求。

8. **[保留响应模型元数据](https://github.com/anomalyco/opencode/pull/42433)** [OPEN]
   修复模型 ID 保留问题（Closes #42420），保留 AI SDK 的结构化模型 ID 而不依赖任意响应头，范围控制得当。

9. **[新增 Keenable 内置网络搜索提供商](https://github.com/anomalyco/opencode/pull/47257)** [OPEN]
   在 Exa、Firecrawl 等之外新增 Keenable 作为内置的 Web 搜索服务提供商。

10. **[修复桌面端缓存过期时仍执行差分更新](https://github.com/anomalyco/opencode/pull/47925)** [CLOSED]
    根因：electron-updater 的 NSIS 差分下载以 `<cache>/installer.exe`（安装时写入，描述的是运行中版本）为基准计算增量，但"旧" blockmap 来自过期缓存，导致差分更新计算错误。修复为缓存过期跳过差分更新。

## 功能需求趋势

- **新模型接入**：Qwen3.8-27B、DeepSeek-v4-flash-free 的接入与展示问题持续被提出，显示用户对最新开源模型快速适配有较高期待。
- **完善 Office 文档支持**：从拖放上传（#27689）到预览与文本提取（PR #47640），形成完整功能闭环，办公场景需求明确。
- **桌面端扩展/插件化架构**：PR #47935/#47936 探索桌面扩展原语并将浏览器抽取为内置扩展包，暗示架构向更灵活的插件化方向演进。
- **更多 UI/输出控制选项**：新增最小化输出预设（#47931）、清屏命令（#47928）、Markdown 导出工具过滤（#47929）与会话标签紧凑轨道（#47938），界面定制化与信息密度控制成为迭代方向。
- **国际化（i18n）**：新增波斯语（#47783）与印尼语（#47910）README 翻译，社区国际化覆盖持续扩展。
- **ACP（Agent Client Protocol）会话级自动批准**（#47918）：希望暴露可逆的、按会话粒度的自动批准能力，增强外部客户端控制灵活性。

## 开发者关注点

- **撤销（/undo）可靠性是最大痛点**：即便项目使用 Git，`/undo` 与 `/timeline undo` 仍无法还原文件编辑（#4704），问题报告持续近一年仍被高频评论，稳定性信任度受损。
- **桌面版资源管理与性能问题集中暴露**：Hona 当日一口气提交 5 个性能/内存修复 PR（终端快照序列化、附件 Blob 泄漏、shell 输出重复拉取、编目请求风暴、差分更新错误），覆盖内存泄漏、网络请求冗余与 UI 卡顿等核心性能问题。
- **剪贴板功能在 Linux 桌面环境中不可靠**：X11 下 xclip 的 `clipboard.write()` Promise 永不返回（#43697），GNOME Wayland 下复制声称成功但实际内容不可粘贴且无辅助工具提示（#47900），Linux 桌面体验存在明显短板。
- **"Revert to this message" 存在隐式数据持久化**（#47909）：用户以为已回滚，但被回滚消息仍保留在本地存储中，回滚/快照状态被额外保存，涉及用户数据的透明性与预期管理问题。

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报 — 2026-09-08

## 今日速览

今日无新版本发布，社区焦点集中在 **OpenCode Go 提供商新增必需请求头** 引发的连锁故障（3 个相关 Issue 和 1 个 PR），以及 **流式输出时 Esc 取消失效** 和 **会话压缩（Compaction）导致会话损坏** 等稳定性问题。此外，多篇性能优化和 UX 改进 PR 已合入主干。

---

## 社区热点 Issues

### 1. [Windows] 使用体验与问题收集
**#7547** · OPEN · 61 条评论 · 2026-08-03 创建
作者 petrroll 发起了 Windows 平台使用的集中讨论帖，旨在收集用户在使用 Pi 时遇到的问题和痛点，为后续修复方向和文档优化提供依据。截至目前已积累了 61 条社区反馈，是当前最受关注的讨论串之一。
🔗 [earendil-works/pi#7547](https://github.com/earendil-works/pi/issues/7547)

### 2. Esc 取消流式请求经常失效
**#8823** · OPEN · 8 条评论 · 2026-08-29 创建
用户反馈在模型流式输出过程中按下 Esc 无法可靠地中止 HTTP 请求，需要等提供方自然完成才能终止。该问题直接影响交互体验和配额消耗，是高频操作路径上的关键缺陷。
🔗 [earendil-works/pi#8823](https://github.com/earendil-works/pi/issues/8823)

### 3. OpenAI 兼容提供商的可选对象工具 Schema 未规范化
**#7010** · OPEN · 7 条评论 · 👍 1 · 2026-07-23 创建
`@earendil-works/pi-ai` 将工具 JSON Schema 原样转发给 OpenAI 兼容服务，未规范化对象类型上的 `required` 字段。这会导致依赖该字段的提供商（如部分推理引擎）拒绝调用或行为异常。
🔗 [earendil-works/pi#7010](https://github.com/earendil-works/pi/issues/7010)

### 4. `PI_OFFLINE` 静默禁用全部模型发现（文档与实际不符）
**#8684** · OPEN · 6 条评论 · 2026-08-26 创建
文档声称 `PI_OFFLINE` 仅禁用启动时的联网检查（更新检测、遥测），实测会连同所有提供方的模型目录网络发现一起关闭。开发者认为该行为与文档描述不符，且无任何提示，排障成本高。
🔗 [earendil-works/pi#8684](https://github.com/earendil-works/pi/issues/8684)

### 5. zai 思维链处理器对强制思考模型发送 disabled，推理内容泄漏
**#8706** · CLOSED · 4 条评论 · 2026-08-27 创建 · 已修复
当用户将思考级别设为关闭时，zai 提供商在强制思考模型（如 GLM-5.3）上仍发送 `thinking` disabled，导致模型侧行为异常。相关修复已合入，本期动态中标记为 CLOSED。
🔗 [earendil-works/pi#8706](https://github.com/earendil-works/pi/issues/8706)

### 6. [open-code-go 提供商] 缺少必需请求头 x-opencode-session
**#9230** · CLOSED · 4 条评论 · ⚠️ 高优先级 · 2026-09-06 创建
OpenCode Go 自 2026-09-06 起要求每个会话请求携带 `x-opencode-session` 头（稳定 ID），Pi 未实现导致该提供商请求全部失败。同日涌现相关联的 #9290（扩展 API 同源问题），修复已在此前合入。
🔗 [earendil-works/pi#9230](https://github.com/earendil-works/pi/issues/9230) · [#9290](https://github.com/earendil-works/pi/issues/9290)

### 7. 并行启动时误报 "No API key found" 约 48 秒
**#8928** · OPEN · 4 条评论 · 2026-08-31 创建
当 `auth.json` 中包含某个提供商的过期 OAuth 凭证时，多进程启动场景下会延迟约 48 秒才报出真正的错误。作者提供了可复现步骤和完整时序数据，定位到与 #1871、#4919、#6880 相关但触发条件更常见。
🔗 [earendil-works/pi#8928](https://github.com/earendil-works/pi/issues/8928)

### 8. 过期压缩条目导致会话永久损坏（Anthropic 400 tool_use_id）
**#8667** · CLOSED · 3 条评论 · 2026-08-26 创建 · 已修复
自动压缩在工具调用进行中触发时，若压缩条目被插到工具调用消息与结果之间，会话结构将永久损坏，后续请求因 tool_use_id 不匹配持续返回 Anthropic 400 错误。相关修复已合入。
🔗 [earendil-works/pi#8667](https://github.com/earendil-works/pi/issues/8667)

### 9. grep 工具带上下文行可能导致 OOM
**#9276** · CLOSED · 3 条评论 · 2026-09-07 创建 · 已修复
作为 headless SDK 使用时，grep 工具在超大文件上拉取大量上下文导致 JavaScript 堆内存溢出（FATAL ERROR）。堆转储确认内存被日志文件占满。相关修复已在最新更新中合入。
🔗 [earendil-works/pi#9276](https://github.com/earendil-works/pi/issues/9276)

### 10. 设备码登录：打开浏览器并复制验证码
**#9282** · CLOSED · 3 条评论 · 👍 1 · 2026-09-07 创建 · 已实现
建议允许提供方（如 GitHub Copilot）在设备码登录时自动打开验证页面，并将验证码复制到剪贴板。对应实现 PR #9301 已提交，在保留用户确认的前提下提供该能力。
🔗 [earendil-works/pi#9282](https://github.com/earendil-works/pi/issues/9282) · [PR #9301](https://github.com/earendil-works/pi/pull/9301)

---

## 重要 PR 进展

### 1. fix(tui): MouseRegion 可选 invalidate 保护（已合入）
**#9319** · CLOSED · 2026-09-08
扩展提供的自定义组件可以不实现 `invalidate` 方法，但原有代码无条件调用该方法，主题切换或重绘时可能崩溃。该 PR 增加了可选性调用保护。
🔗 [earendil-works/pi#9319](https://github.com/earendil-works/pi/pull/9319)

### 2. 使用 ctx.cwd 作为工作目录敏感工具的基础路径（已合入）
**#8627** · CLOSED · 2026-08-25 创建
所有依赖 cwd 的工具（读写文件、执行命令等）现在优先使用扩展上下文中的会话真实 cwd，而非工具创建时的 cwd，修复了多会话场景下路径解析错误。
🔗 [earendil-works/pi#8627](https://github.com/earendil-works/pi/pull/8627)

### 3. 三个独立小修复：全屏底部栏、自定义页脚等（已合入）
**#9316** · CLOSED · 2026-09-08
一次性合入三个独立修复：全屏模式无行自定义页脚支持（#8919）、以及 #8717、#8720 两处问题。
🔗 [earendil-works/pi#9316](https://github.com/earendil-works/pi/pull/9316)

### 4. 保留中止原因：懒加载设置期间的请求中断（待合入）
**#8635** · OPEN · 2026-08-25 创建
将请求中止信号透传到懒加载流配置包装器中，并补充了工具执行期间中断的回归测试。修复 #8409。
🔗 [earendil-works/pi#8635](https://github.com/earendil-works/pi/pull/8635)

### 5. 会话切换时清除鼠标选区（已合入）
**#9310** · CLOSED · 2026-09-08
修复全屏模式下选中文本后切换会话时选区被残留到其他会话的问题。
🔗 [earendil-works/pi#9310](https://github.com/earendil-works/pi/pull/9310)

### 6. 识别 Orca 终端能力（已合入）
**#9307** · CLOSED · 2026-09-08
Pi 此前将 `TERM_PROGRAM=Orca` 视为未知终端，超链接（OSC 8）等功能无法启用。该 PR 补齐了 Orca 的支持。
🔗 [earendil-works/pi#9307](https://github.com/earendil-works/pi/pull/9307)

### 7. 恢复会话后再关闭选择器（已合入）
**#9303** · CLOSED · 2026-09-07
修复用户在会话选择器中选中会话时选择器先关闭、后恢复导致的时序问题。
🔗 [earendil-works/pi#9303](https://github.com/earendil-works/pi/pull/9303)

### 8. 设备码登录确认浏览器和剪贴板操作（待合入）
**#9301** · OPEN · 2026-09-07
提供方（如 GitHub Copilot）可选择在设备码登录时自动打开浏览器并复制验证码到剪贴板，同时保留用户确认机制，避免在企业环境中强制操作造成困扰。
🔗 [earendil-works/pi#9301](https://github.com/earendil-works/pi/pull/9301)

### 9. Ollama Cloud 提供商支持（待合入）
**#7742** · OPEN · 2026-08-07 创建
新增 Ollama Cloud 作为独立提供商，使用 `OLLAMA_API_KEY` 环境变量。本地与云端混合连接仍可通过 `ollama launch pi` 方式实现。已按照现有提供商模式完成测试。若合入，将进一步降低用户接入云端模型的门槛。
🔗 [earendil-works/pi#7742](https://github.com/earendil-works/pi/pull/7742)

### 10. 移除无效的 Fable 5 回退目标（待合入）
**#9297** · OPEN · 2026-09-07
将 Claude Fable 5 的内置回退模型收敛为仅 Opus 5，移除失效的备选目标，并覆盖 Fable 5.1 的元数据与 API-key/OAuth 载荷生成逻辑，避免回退到不可用的模型。
🔗 [earendil-works/pi#9297](https://github.com/earendil-works/pi/pull/9297)

---

## 功能需求趋势

从本期 Issues 与 PR 可提炼出以下社区关注方向：

1. **提供商兼容性与适配层（最高频）** — 横跨 OpenAI 兼容 Schema 规范化（#7010）、OpenCode Go 新请求头适配（#9230/#9290）、Grok 错误信息归属错误（#9298）、Fireworks 配置优化（#9323）、Ollama Cloud 新提供商支持（PR #7742）。外部服务策略变化（如强制头、强制思考设置）能迅速引发生成串行 Issue，社区对错误标签的准确性（如 Grok 403 被标为 "OpenAI API error"）也非常敏感。

2. **终止与取消语义的可靠性** — Esc 取消失效（#8823）、中止原因在懒加载中丢失（PR #8635）。开发者对取消机制的正确性（含 HTTP 层中止）有较高期望。

3. **会话压缩与恢复的正确性** — 压缩条目损坏会话（#8667）、压缩摘要显示位置错误（#6100）。在多轮长会话和工具调用交织场景下，压缩逻辑的边界情况持续暴露问题。

4. **配置与文档的一致性** — `PI_OFFLINE` 静默行为越界（#8684）、`lastChangelogVersion` 不应跟随配置文件入库（#6415）。社区对配置项的实际生效范围要求文档完全对齐，而非"暗藏"额外副作用。

5. **性能优化** — EventStream 缓冲期为 O(n²) 的 CPU 开销（#9055）、模糊搜索逐字符扫描可优化为 `indexOf`（#9267）、grep 上下文导致 OOM（#9276）。长会话与仓库级工具的运行时表现持续受关注。

6. **设备码登录与认证体验** — 自动打开验证页与复制验证码（#9282/PR #9301）表明开发者希望减少多步手动操作。

7. **TUI 细节完善** — 鼠标选择跨会话残留（PR #9310）、Orca 终端能力识别（#9307）、超链接渲染优化（同 PR）。小修小补累积起来对日常使用体验影响显著。

---

## 开发者关注点

> 以下痛点与高频需求全部来自上列 Issue 与 PR 中的开发者反馈原文，非编者臆测。

1. **外部服务策略"突袭"导致的服务不可用** — OpenCode Go 自 9 月 6 日起强制要求 `x-opencode-session` 头，Pi 在两个层面（内置 CLI 与扩展 API）同时失联。延伸层（#9290）调用也未能幸免。此类故障由外部服务变更触发、波及面广，开发者期望客户端能更快跟进或提供更友好的错误提示。

2. **错误信息误导排障方向** — Grok 的 403（额度耗尽）被标为 "OpenAI API error"，`PI_OFFLINE` 超出文档范围却无任何日志提示。多位开发者指出这类误导性信息拉长了问题定位时间（#8928 中作者花了约 3 小时在生产环境排查 48 秒延迟的根因）。

3. **压缩（Compaction）机制的边界场景仍是稳定性短板** — #8667 中一条过期压缩条目即可"永久损坏"会话，每次请求都收到 Anthropic 400 错误。对于长会话重度用户，这是数据安全级别的问题。

4. **大文件与长日志场景下的内存安全** — grep 带上下文行直接撑爆堆内存（OOM，#9276），EventStream 的 `shift()` 在生产者快于消费者时退化为 O(n²)（#9055）。以 headless SDK 方式运行的团队对资源边界更敏感。

5. **配置管理的洁癖需求** — 多个开发者将自己的配置文件纳入 Git 管理并跨设备同步，任何被写入配置文件的运行时状态字段（如 `lastChangelogVersion`）都会造成同步噪音，期望拆分为独立运行时文件。

6. **取消操作必须真正"取消"** — Esc 无法中止请求意味着用户必须等待模型自然结束，在长输出场景下既浪费时间也消耗配额。开发者期望取消是即时的、明确的中止，而非"建议性"行为。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报 — 2026-09-08

## 1. 今日速览

今日社区动态聚焦两大核心：**Windows 平台 ConPTY 进程泄漏**被拆分为两个独立 Issue 跟踪（#11303/#11352），成为当前最受关注的性能缺陷；**Web Shell 功能迭代加速**，围绕后台会话管理、turn 导航与动态工作流可视化密集发力。同时，多个 PR 进入 OpenTUI 迁移收尾阶段，新版 reasoning 预设扩展（#11349）值得关注。

## 2. 版本发布

**v0.23.0-nightly.20260907.f1ed3bc31a** — 主要变更：
- `feat(web-shell)`: 可视化并管理工作流动态运行（PR #10594）
- `perf(web-shell)`: 优化 session 派生逻辑

**cua-driver-rs-v0.20.4** — CUA 驱动预编译二进制更新：
- macOS：已签名 + 公证的 universal binary + `QwenCuaDriver.app`
- Linux：未签名（x86_64 + arm64，glibc 2.31 下限）
- Windows：未签名 UIAccess worker + native SDK payload（x86_64 + arm64）

## 3. 社区热点 Issues（Top 10）

**#11303** [P1/Bug] [Windows] qwen-cli 泄漏 headless conhost.exe ConPTY 进程 — 347 个进程 / ~2.8 GB（12 小时）
https://github.com/QwenLM/qwen-code/issues/11303
> Windows 平台上 qwen-cli（VS Code Companion）存在严重进程泄漏，单实例 12 小时内累积 347 个 conhost.exe，占用约 2.8 GB 内存。8 条评论，社区关注度高。

**#11352** [P1/Bug] [Windows] node-pty 在 shell 自然退出时泄漏 ConPTY host — baton 在 onExit 前被清除
https://github.com/QwenLM/qwen-code/issues/11352
> 从 #11303 拆分出的"不可修复"部分。缺陷位于固定的 `@lydell/node-pty` 依赖中，JS 侧无法调用 `ClosePseudoConsole`。由 yiliang114 提交，标记 `status/blocked`，正在讨论绕行方案。

**#8662** [P3/Enhancement] TUI 渲染层从 ink 迁移到 OpenTUI（tracking）
https://github.com/QwenLM/qwen-code/issues/8662
> 追踪 issue，当前 TUI 基于 ink 7 + React 19，含约 1037 行自定义 patch。迁移涉及结构性改动，33 条评论为今日最多，说明社区对 TUI 稳定性与维护性的持续关注。

**#11119** [P1/Bug] serve: 后台 shell 输出与唤醒通知在 session runtime 回收时静默丢失
https://github.com/QwenLM/qwen-code/issues/11119
> 守护进程模式下，后台 shell 持续输出但在 turn 结束后输出被静默丢弃，导致会话卡死。10 条评论，涉及 daemon 核心逻辑。

**#10530** [P2/Bug] 0.22.3 版本 llama-server 本地推理报错 "400 Failed to initialize samplers"
https://github.com/QwenLM/qwen-code/issues/10530
> Qwen 3.8 27b / Qwen 3.6 35b 在 llama-server 中 grammar 解析失败，Gemma 正常。多个 harness 对比后确认问题由 Qwen Code 0.22.3 引入。

**#10435** [P2/Bug] 新版本导致本地 llama-server 推理崩溃（同类 grammar 错误）
https://github.com/QwenLM/qwen-code/issues/10435
> 与 #10530 高度相关的重复报告，获 1 👍。用户在 code review 时触发崩溃。两个 Issue 合并处理中。

**#11335** [P3/Bug] Web Shell: 左侧 turn 导航栏出现后 transcript 列水平错位
https://github.com/QwenLM/qwen-code/issues/11335
> 由 qqqys 提交的 UI 对齐问题 — turn 导航 rail 出现后，transcript 内容列与 composer 轴线偏移半个 rail 宽度。属视觉细节问题。

**#10995** [P3/Feature] customHeaders 支持 `${session_id}` 模板变量
https://github.com/QwenLM/qwen-code/issues/10995
> 用户在配置 `customHeaders` 时希望在请求头中注入当前会话 ID，便于实现 per-conversation 请求头（如鉴权/路由）。获 1 👍，已关闭。

**#11205** [P2/Bug] main 分支的 filter screen 丢失六项安全加固
https://github.com/QwenLM/qwen-code/issues/11205
> 代码审查发现 #10421 在合并 main 版本时丢失了 read order、EACCES、U+FFFD、spawn timeouts、candidate cap、retention 六项加固。涉及 git 与 CLI 安全。

**#11361** [P2/Bug] ACP/Zed 中 AskUserQuestion 显示 "Raw Input" 而非多选界面
https://github.com/QwenLM/qwen-code/issues/11361
> Zed IDE 集成问题—AskUserQuestion 区块在 Zed 中无法渲染为交互式多选 UI。暴露 ACP 协议兼容性问题。

## 4. 重要 PR 进展（Top 10）

**#11369** feat(live): 增加视觉输入、主动协助与记忆功能
https://github.com/QwenLM/qwen-code/pull/11369
> 大幅扩展 Qwen Live 体验：Screen/Camera 输入、On Demand/Live Feed 捕获、文本专用 DashScope Proactive 监控及本地多库记忆。功能面广，影响面大。

**#11349** feat(core): 扩展 Kimi、Qwen 与 DeepSeek reasoning 预设
https://github.com/QwenLM/qwen-code/pull/11349
> Moonshot K3 支持 low/high/max、K2.7 Code 保持 thinking-only、K2.6 暴露原生 thinking toggle。补齐 Qwen 与 DeepSeek 预设，属于新模型持续适配方向。

**#11366** fix(web-shell): 慢渲染期间保留 history anchors
https://github.com/QwenLM/qwen-code/pull/11366
> 将历史分页延迟到虚拟化行可见且读取位置可捕获时执行；新的用户交互会取消待处理的延迟加载。附带回归测试覆盖。

**#11351** fix(cli): 限制后台通知队列并汇报被丢弃内容
https://github.com/QwenLM/qwen-code/pull/11351
> 新增 `MAX_BACKGROUND_NOTIFICATION_QUEUE`（20），纯函数 `decideNotification` 决定保留/丢弃，并将 overflow 信息上报给模型。配合 #11119 的修复方向。

**#10457** feat(dingtalk): 工具权限请求以原生交互卡片呈现
https://github.com/QwenLM/qwen-code/pull/10457
> 钉钉集成的工具权限弹窗升级为原生交互卡片，支持 allow once、deny 和 persistent allow（仅当原始权限请求声明时展示）。标记 `review/self-reported`。

**#11152** feat(cli): OpenTUI 对比收尾（dialogs、composer、shell mode）
https://github.com/QwenLM/qwen-code/pull/11152
> 关闭 OpenTUI 渲染器与 ink 渲染器间最后已知行为差距 — 每个 item 一个 commit，附带验收测试。是 #8662 迁移工作的关键收尾 PR。

**#11250** feat(web-shell): 改进 split-view 会话导航
https://github.com/QwenLM/qwen-code/pull/11250
> Split-view 标题复用侧边栏会话详情 popover，最后交互的 pane 有细头部指示条，工具栏按钮可在等待工具审批或用户回复的 panes 间循环切换。

**#10949** feat(cli): 查看、回答与停止后台会话
https://github.com/QwenLM/qwen-code/pull/10949
> Stack 3/3，为后台 Agent View 会话新增 `qwen sessions peek` 等三个子命令。配合 Web Shell 后台会话管理的 CLI 侧补齐。

**#10347** feat(core): 在 Ctrl+Y 不可用时自动重试瞬时网络错误（EOF）
https://github.com/QwenLM/qwen-code/pull/10347
> 将 wrapped 为 4xx 的低层网络失败（如 `400 network error ... EOF`）分类为可重试传输错误。标记 `review/self-reported, autofix/needs-human`。

**#11341** fix(web-shell): 提交问题前要求必须填写答案
https://github.com/QwenLM/qwen-code/pull/11341
> Web Shell 中每个问题在提交前须有非空白答案；答案不完整时禁用 Submit 并同样适用于 Enter/Ctrl+Enter。保留取消与完整答案状态。

## 5. 功能需求趋势

从今日 50 条 Issues/PRs 中可提炼以下社区最关注的功能方向：

**① Web Shell 与 daemon 生态深化（最高热度）**
- Dynamic workflow 可视化与管理（#10594）
- 自定义 Web Shell 分发托管（#11358）— 集成方希望 `qwen serve` 可承载自建前端
- daemon API 文档整合（#11359）— REST/SSE 文档当前分散
- Skill 管理与 ACP child 解耦（#11274）— 分阶段小 PR 推进
- Web preview 面板（#11276）— 浏览器可达开发 URL 的桌面/移动宽度预览

**② OpenTUI 迁移与 TUI 体验稳定**
- 渲染层迁移进入收尾（#11152），社区持续关注 TUI 长期维护性

**③ Windows 平台稳定性**
- ConPTY 泄漏修复拆分处理（#11303/#11352）— 已标记为"需讨论"级别的平台缺陷

**④ 新模型/新供应商适配**
- Kimi/Qwen/DeepSeek reasoning 预设扩展（#11349）
- 反复出现的 llama-server grammar 兼容性 bug（#10530/#10435）

**⑤ 多模态与屏幕感知**
- Qwen Live 视觉输入、Proactive 监控（#11369）— 大幅扩展交互形态

**⑥ 钉钉/飞书等 IM 集成**
- DingTalk 原生权限卡片（#10457）

## 6. 开发者关注点

**高频痛点：**

- **Windows 进程泄漏问题突出** — conhost.exe 泄漏（#11303/#11352）成为社区讨论焦点，部分原因被定位到上游依赖（node-pty）无法自修，需要寻求 workaround 或依赖升级路线。
- **本地 llama-server 兼容性回归** — 0.22.3 引入的 grammar 解析 bug 影响 Qwen 3.8/3.6 系列模型，社区多人在同一 Issue 上反馈，需要尽快排查。
- **后台任务可靠投递** — #11119 暴露的 daemon session 回收导致输出丢失问题，配合 #11351 的通知队列上限方案，说明后台自动化场景（CI 轮询等）稳定性备受关注。
- **审查流程复杂度高** — 多个 PR 经历了 6-16 轮 review（#11101 六轮、#10421 十六轮），且有 deferred findings 跟踪机制（#11008/#11336），社区开始有意识地跟踪积压的审查建议。

**功能诉求信号：**

- 定制化集成需求上升 — 多个 Issue 提及自建 Agent 前端、托管自定义 Web Shell、SDK/daemon API 文档完善，表明 Qwen Code 正被更多团队作为 Agent 基础设施使用。
- 交互完善类 PR（含 #11341 必答校验）集中在表单/流程的边界行为打磨，属细节体验优化期。

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI 社区动态日报 — 2026-09-08

> 数据来源：[github.com/Hmbown/DeepSeek-TUI](https://github.com/Hmbown/DeepSeek-TUI)（注：Issues/PRs 页面指向 Hmbown/Codewhale 仓库）

## 1. 今日速览

v0.9.13 发布准备就绪（PR #6000 已关闭），包含 5 项缺陷修复、Computer-use 插件 0.2.0 捆绑升级以及 ACP schema 合规性修复。社区昨日提交了 10+ 个新 Issue，密集提出了关于会话状态钩子、步骤预算、超时配置等增强建议，其中多个来自同一贡献者 7jrxt42BxFZo4iAnN4CX，反映出对 goal/operate 工作流精细控制的强烈需求。

## 2. 版本发布

过去 24 小时无正式 Release 发布。但 [PR #6000](https://github.com/Hmbown/Codewhale/pull/6000)（已关闭）完成了 v0.9.13 的发布准备工作：全 workspace 及各 npm 包、VS Code 扩展版本号提升至 0.9.13。PR #6002（进行中）计划将 #5982（脱敏 opt-out）、#5973（底部 chrome 预设）、#5996（配置文档）及 #5990（快照清理测试修复）合入 0.9.13 分支。

## 3. 社区热点 Issues（按关注度排序，共 17 条）

1. **[#5981 — [已关闭] 多行粘贴被拆分为逐条消息发送（v9.12 回归）](https://github.com/Hmbown/Codewhale/issues/5981)**
   作者：nsfoxer | 评论 5 条
   v9.12 中 Y-7 修复导致多行文本粘贴被拆成多条独立消息发送，破坏换行。触发 PR #5993 紧急修复（已合入）。

2. **[#5969 — [已关闭] `serve --acp` initialize 响应违反 ACP schema](https://github.com/Hmbown/Codewhale/issues/5969)**
   作者：Lujc0523 | 评论 4 条
   `sessionCapabilities.list` 应为对象却被输出为布尔值，导致 JetBrains IDEA 等严格客户端无法连接。PR #5978 已修复。

3. **[#6004 — Hooks 无法观察会话状态（idle/fatal-error/waiting-for-user）](https://github.com/Hmbown/Codewhale/issues/6004)**
   作者：7jrxt42BxFZo4iAnN4CX | 评论 3 条
   建议新增 session-state 钩子事件。Hook 目前覆盖 11 种事件但遗漏会话层状态，外部工具无法感知卡死错误或等待用户输入。

4. **[#5991 — [已关闭] 0.9.12 移除了 `allow_insecure_http` 配置项](https://github.com/Hmbown/Codewhale/issues/5991)**
   作者：Gabriel-Degret | 评论 3 条
   用户被迫改用环境变量，影响 LAN/内部提供方（如 llama.cpp）使用。PR #5995 已恢复 per-provider 配置支持。

5. **[#6003 — 用户输入/审批等待超时应可配置或可禁用](https://github.com/Hmbown/Codewhale/issues/6003)**
   作者：7jrxt42BxFZo4iAnN4CX | 评论 2 条
   当前等待硬编码为 300 秒后超时取消，缺少灵活性。

6. **[#5994 — goal/operate 运行被交互式 max_steps 中途截断](https://github.com/Hmbown/Codewhale/issues/5994)**
   作者：7jrxt42BxFZo4iAnN4CX | 评论 2 条
   goal 模式文档宣称默认无界，但实际运行受交互式步骤限制影响。建议增加 goal 独立的 step budget。

7. **[#6001 — Resume 提示缺少 session id，多会话时 `run --continue` 产生歧义](https://github.com/Hmbown/Codewhale/issues/6001)**
   作者：7jrxt42BxFZo4iAnN4CX | 评论 2 条
   同一 workspace 多个会话时无法可靠定位目标会话。

8. **[#5988 — 两个 codewhale-tui 测试超出 2MiB 线程栈；nextest 隔离掩盖了 CI 中的失败](https://github.com/Hmbown/Codewhale/issues/5988)**
   作者：Hmbown | 评论 2 条
   MCP 相关测试在标准 cargo test 下栈溢出崩溃，但 nextest 并行隔离避免触发——CI 可能未真正验证测试通过。

9. **[#6009 — /models 命令仅返回部分模型列表——缺少分页支持](https://github.com/Hmbown/Codewhale/issues/6009)**
   作者：nsfoxer | 评论 1 条
   未处理 OpenAI 风格游标分页（`has_more`/`after`），大型提供商模型列表被截断。

10. **[#6008 — 为 /purge 添加虚拟内存式上下文换出（offload/swap）操作](https://github.com/Hmbown/Codewhale/issues/6008)**
    作者：mo-vic | 评论 1 条
    当前 /purge 只能删除或压缩内容，会永久丢失长会话中可能仍需的信息。建议引入换出机制。

其他值得关注的：[#6007 OpenRouter 原生供应商选择](https://github.com/Hmbown/Codewhale/issues/6007)、[#6006 斜杠命令纳入 Up-arrow 历史](https://github.com/Hmbown/Codewhale/issues/6006)、[#5999 离线队列提交阻塞 TUI 输入](https://github.com/Hmbown/Codewhale/issues/5999)、[#5856 Computer-use 插件 live-install 验证](https://github.com/Hmbown/Codewhale/issues/5856)。

## 4. 重要 PR 进展（按合并价值排序）

1. **[#6000 — [已关闭] chore(release): prepare v0.9.13](https://github.com/Hmbown/Codewhale/pull/6000)**
   v0.9.13 发布准备完成，CHANGELOG 补齐 #5989 相关修记录。

2. **[#5989 — [已关闭] 修复五个记录缺陷——队列数据丢失、ACP schema、metrics 路径、fleet 角色、goal-loop 边界](https://github.com/Hmbown/Codewhale/pull/5989)**
   每个缺陷独立修复后对抗式审计合入，包括并发会话数据丢失等严重问题。

3. **[#5993 — [已关闭] 重新启用 paste-burst 启发式，直到 bracketed paste 被验证](https://github.com/Hmbown/Codewhale/pull/5993)**
   修复 #5981 多行粘贴回归：0.9.12 错误地将粘贴检测依赖 bracketed paste，而终端可能接受协议后仍按行投递粘贴内容。

4. **[#5978 — [已关闭] ACP: session list 声明为对象，移除嵌套 load 能力](https://github.com/Hmbown/Codewhale/pull/5978)**
   修复 JetBrains 握手失败问题（对应 #5969）。

5. **[#5995 — [已关闭] 恢复 per-provider `allow_insecure_http` 配置支持](https://github.com/Hmbown/Codewhale/pull/5995)**
   关闭 #5991。0.9.12 仅检查环境变量忽略了配置文件键。

6. **[#5987 — [已关闭] VS Code 扩展发送路径修复 + 安全漏洞修补](https://github.com/Hmbown/Codewhale/pull/5987)**
   扩展此前从未成功发起一轮对话（`startTurn` 仅接受 HTTP 200/202，而 runtime 返回 201 CREATED）。同时关闭安全漏洞。对应 #5834 IDE Stage 2。

7. **[#5998 — [已关闭] Computer-use 插件捆绑升级至 0.2.0](https://github.com/Hmbown/Codewhale/pull/5998)**
   包含原生 macOS a11y 后端（a11y-first 指针、covered-point 拒绝等）。0.9.13 定向合入。

8. **[#5972 — [已关闭] 运行存储失败从日志提升为可见通知](https://github.com/Hmbown/Codewhale/pull/5972)**
   关闭 #5931 的 runtime-store 部分。会话 ID 分歧（#5960 已修）和审批收据部分此前已合入。

9. **[#5990 — [进行中] 测试：从记录时间戳推导 pruning 边界而非固定 6 秒](https://github.com/Hmbown/Codewhale/pull/5990)**
   Windows 专属测试 flake 修复，解决快照清理测试间歇性失败。

10. **[#5997 — [已关闭] 测试：将 computer-use 嵌入列表固定到 vendored 树](https://github.com/Hmbown/Codewhale/pull/5997)**
    防腐烂保护：vendored 插件与 `COMPUTER_USE_FILES` 嵌入列表一致性由测试保证，防止刷新 CU bundle 时脱节。

此外还有 [#5982 模型绑定密钥脱敏 opt-out](https://github.com/Hmbown/Codewhale/pull/5982)（获得维护者认可将合入 0.9.13）、[#5992 README 链接社区 VS Code GUI 前端](https://github.com/Hmbown/Codewhale/pull/5992)、[#5979 PTY 测试等待启动组件](https://github.com/Hmbown/Codewhale/pull/5979)、[#5996 配置文档补充](https://github.com/Hmbown/Codewhale/pull/5996)。PR #6002 正在协调 0.9.13 的合入顺序。

## 5. 功能需求趋势

- **工作流精细化控制**：同一贡献者（7jrxt42BxFZo4iAnN4CX）连续提交多个 Issue，指向 goal/operate 模式的步骤预算（[#5994](https://github.com/Hmbown/Codewhale/issues/5994)）、超时可配置化（[#6003](https://github.com/Hmbown/Codewhale/issues/6003)）及会话恢复稳定性（[#6001](https://github.com/Hmbown/Codewhale/issues/6001)），说明长期运行型任务已成为核心使用场景。
- **可观测性扩展**：[#6004](https://github.com/Hmbown/Codewhale/issues/6004) 要求新增会话状态类钩子事件，供外部工具感知 idle、fatal-error 和 waiting-for-user 等状态。
- **长上下文管理**：[#6008](https://github.com/Hmbown/Codewhale/issues/6008) 提出虚拟内存式上下文换出（offload/swap），而非简单的删除或压缩。
- **模型/供应商灵活性**：[#6007](https://github.com/Hmbown/Codewhale/issues/6007) 希望在 OpenRouter 模型上原生选择供应商（质量/延迟/行为差异）；[#6009](https://github.com/Hmbown/Codewhale/issues/6009) 要求模型列表分页支持。
- **终端体验细节**：[#6006](https://github.com/Hmbown/Codewhale/issues/6006) 希望斜杠命令也能通过 Up-arrow 历史召回——当前仅普通提示词。
- **安全与合规**：[#6003](https://github.com/Hmbown/Codewhale/issues/6003) 审批等待超时的可配置性亦涉及安全审查流水的可控性；PR #5982 为模型绑定密钥脱敏提供 opt-out 选项。

## 6. 开发者关注点

- **回归频次偏高**：0.9.12 引入两个明确回归——多行粘贴行为破坏（[#5981](https://github.com/Hmbown/Codewhale/issues/5981)）和 `allow_insecure_http` 配置静默失效（[#5991](https://github.com/Hmbown/Codewhale/issues/5991)）。均在次日通过 [#5993](https://github.com/Hmbown/Codewhale/pull/5993) 和 [#5995](https://github.com/Hmbown/Codewhale/pull/5995) 修复，修复速度值得肯定。
- **本地/内网部署是真实场景**：`allow_insecure_http` 的反馈来自使用 llama.cpp 的局域网用户（含 FreeBSD 用户），说明自托管模型工作流的存在感比预期更强。
- **粘贴处理仍是痛点**：#5981 中暴露的 paste-burst heuristics 与 bracketed paste 的竞争关系说明终端兼容层需要更保守的策略——直到协议验证完成前不盲目信任。
- **ACP 互操作性是扩展关键**：JetBrains 客户端因 schema 不合规无法完成握手（[#5969](https://github.com/Hmbown/Codewhale/issues/5969)），凸显严格遵守协议 schema 的必要性。
- **测试基础设施信任度**：[#5988](https://github.com/Hmbown/Codewhale/issues/5988) 揭示了标准 cargo test 中栈溢出但 CI 未发现的问题，测试隔离策略可能掩盖真实故障模式。
- **运行时存储失败曾被静默忽略**：[#5972](https://github.com/Hmbown/Codewhale/pull/5972) 将其升级为可见通知，修复前 session ID 分歧（14 次）和审批收据写入失败（2 次）仅出现在日志中。

---

*本日报基于 Hmbown/Codewhale 仓库（即 DeepSeek-TUI 的当前维护仓库）在 2026-09-07 至 2026-09-08 间的公开数据整理生成。*

</details>

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar) 自动生成。*