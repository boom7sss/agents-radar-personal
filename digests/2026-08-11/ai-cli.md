# AI CLI 工具社区动态日报 2026-08-11

> 生成时间: 2026-08-11 02:08 UTC | 覆盖工具: 9 个

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

# AI CLI 工具横向对比分析报告（2026-08-11）

## 1. 生态全景

当前 AI CLI 工具正处于"功能竞速"与"可靠性补课"并行的阶段。头部工具以近乎日更的节奏持续发版（Claude Code v2.1.227、Codex 双 alpha、Gemini nightly、Qwen v0.21.9），且不约而同将资源投向多 Agent 编排、MCP 生态与企业级安全。然而子代理挂起/误报成功、Windows 端稳定性、计费权益误判等问题在多个仓库中同步积压，说明功能扩张速度已明显快于质量收敛。与此同时，OpenCode、Pi 等开源新势力通过 V2 重写与全屏 TUI 创新聚集社区声量，Kimi 与 DeepSeek 则分别在记忆系统和架构模块化上寻求差异化。整体而言，生态已从"单会话代码助手"进入"可编排、可治理、跨平台"的平台化竞争阶段。

## 2. 各工具活跃度对比

| 工具 | 24h 活跃议题 | 24h PR 更新 | 版本发布 | 迭代节奏 |
|---|---|---|---|---|
| Claude Code | 10 个热点（#79337 单议题 72 评论） | 2（1 个合并） | v2.1.227 | 正式版高频，修复发布 |
| OpenAI Codex | 10 个热点（#20214 单议题 93 评论） | 10（多数已合入） | rust-v0.148.0-alpha.6 / v0.147.0-alpha.6.6 | 日更 alpha，稳定性待验证 |
| Gemini CLI | 50 条议题更新（P1×5） | 15 | v0.56.0-nightly | 日更 nightly，工程节奏最密 |
| GitHub Copilot CLI | 10 个热点（#1595 累计 29 评论） | 0 | v1.0.79 | 正式版；讨论与修复失衡 |
| Kimi Code CLI | 3 个活跃 | 0 | 无 | 平静期，无外部贡献 |
| OpenCode | 10 个热点（/goal 获 128👍） | 10（多个针对项目选择器） | v1.18.16 | 周更正式版，V2 beta 推进中 |
| Pi | 10 个热点（#6187 21 评论） | 10（全屏 TUI 功能密集） | 无（0.84.x 线上） | 活跃但无新发版 |
| Qwen Code | 10 个热点 | 10 | v0.21.9 + nightly | 正式版 + nightly 双轨 |
| DeepSeek TUI（CodeWhale） | 3 个活跃 | 4（3 个已关闭） | 无（v0.9.6 发布 PR 已备） | 架构重构期，减法发布 |

> 注：Gemini CLI 的议题数为 24 小时全量更新；其余仓库按各自日报跟踪的热点议题数统计。

## 3. 共同关注的功能方向

| 方向 | 涉及工具 | 具体诉求 | 典型证据 |
|---|---|---|---|
| **子代理 / 多 Agent 可靠性** | Gemini、Claude Code、Copilot、Codex、Qwen | 子代理挂起、max turns 误报成功、并行调用响应错乱、Agent 路由协议不透明 | Gemini #22323/#21409；Claude #71723；Copilot #4420；Codex #34700；Qwen #8718 |
| **会话生命周期与恢复** | Claude Code、Qwen、Copilot、OpenCode | `--continue` 链路断裂、大会话恢复超时丢会话、`/compact` 自救失效、草稿随会话丢失 | Claude #82536；Qwen #8678/#8885；Copilot #4424/#4325；OpenCode #36203 |
| **计费 / 权益可见性** | Claude Code、Copilot、Codex | 模型被静默降级、组织策略误判、限流显示与重置不一致 | Claude #79337/#82797；Copilot #4422/#4390；Codex #32791 |
| **安全与合规判定** | Gemini、Claude、Qwen、Pi、Copilot | SSRF 绕过、CVP 获批仍被拦截、路径包含校验缺陷、非法工具参数毒化会话、临时策略竞态 | Gemini #28557；Claude #84352/#74636；Qwen #8835/#8687；Pi #7782；Copilot #4419 |
| **MCP / 插件生态稳定性** | Gemini、Copilot、Qwen | OAuth token 刷新丢失 client ID、initialize 超时无重试、ACP 参数解析失败 | Gemini #28481；Copilot #4421；Qwen #8871 |
| **桌面与终端体验** | Codex、Copilot、Claude、Qwen、Pi | Windows 冻结、扩展资源加载失败、插件更新权限、终端 resize 伪影、全屏 TUI 增强 | Codex #20214/#37458；Copilot #4095；Claude #83744；Qwen #8557；Pi #7913 |
| **上下文管理与压缩** | Claude、Copilot、OpenCode、Gemini | 压缩后行为不可预测（意外 git push）、压缩抖动、模型上下文元数据错误 | Claude #85668/#85138；Copilot #4424；OpenCode #40958；Gemini #22745 |

## 4. 差异化定位分析

| 工具 | 定位 | 核心差异化 | 当前最大短板 |
|---|---|---|---|
| **Claude Code** | 企业级安全合规型 | 深度绑定 Anthropic 模型权益体系、CVP 验证、teammate/agent 双协议 | 权益误判与合规误封三周未决，企业信任受损 |
| **OpenAI Codex** | 桌面应用优先型 | Windows/macOS 桌面 App + VS Code 扩展 + 跨设备远程控制 | Windows 高配机照样卡顿，扩展"资源加载失败"阻塞 IDE 工作流 |
| **Gemini CLI** | 工程严谨型 | 日更 nightly、SSRF/OAuth 等深层安全修复、行为评估 + `eval:validate` 工具链 | 子代理稳定性 P1 集中（挂起、误报、Wayland 失败） |
| **GitHub Copilot CLI** | 企业策略聚合型 | 多模型聚合（Claude / OpenAI / Kimi）、企业级策略强管控 | 模型目录与组织策略同步严重滞后，CLI 端无 PR 可自救 |
| **Qwen Code** | 服务化多 Agent 型 | serve/daemon 模式、Fleet 多会话编排、WebShell 运维控制台 | ACP 集成不稳定、Provider 更新静默覆盖自定义配置 |
| **OpenCode** | 开源中立型 | V2 架构重写、社区投票式需求驱动（/goal 128👍）、多 provider | Web 项目选择器冷启动故障，基础体验仍有缺口 |
| **Pi** | 终端体验探索型 | 全屏 TUI（搜索/固定顶栏/焦点优化）、provider 无关（Bedrock/Cloudflare） | Copilot 登录兼容性问题长期未解，无新版本发布 |
| **Kimi Code CLI** | 记忆优先型 | 社区对跨会话记忆系统的诉求高度一致 | 社区规模小、无活跃外部 PR，功能补齐速度慢 |
| **DeepSeek TUI（CodeWhale）** | 架构重构型 | Rust 模块化、核心/TUI 职责分离、明确"减法发布"策略 | 处于重构早期，功能迭代让位于工程治理 |

## 5. 社区热度与成熟度

**第一梯队：高活跃 + 快速迭代**
Gemini CLI（50 议题 / 15 PR / nightly）、Qwen Code（10 议题 / 10 PR / 双版本）、OpenAI Codex（10 议题 / 10 PR / 双 alpha）是当前迭代最密集的三家。Codex 的 #20214（93 评论）显示用户基盘庞大但 Windows 体验怨气最重；Gemini 的安全修复密度最高，工程文化最接近"严肃基础设施"。

**第二梯队：高热讨论但修复滞后**
Claude Code 议题评论量极大（#79337 达 72 条，CVP #84352 达 33 条），但 24h 内仅 2 个 PR，头部问题和"三周未决"的组合说明其发布流程更保守、回归成本更高。Copilot CLI 出现"10 议题 / 0 PR"的失衡，多个问题根因在服务端（模型目录、组织策略），CLI 团队难以独立修复。

**第三梯队：社区驱动上升期**
OpenCode 与 Pi 均呈现"议题/PR 双十"的健康度，且社区创新意愿强（/goal 获 128👍、全屏 TUI 多项功能 PR 并行）。但 OpenCode 的项目选择器故障、Pi 的长期无发版都是成熟度不足的信号。

**第四梯队：早期或重构期**
Kimi（3 议题 / 0 PR）与 DeepSeek TUI（3 议题 / 4 PR）社区声量有限，但需求指向明确——前者是记忆系统，后者是架构模块化。DeepSeek 通过 v0.9.6"减法发布"主动收敛功能范围，属于典型的重构期策略。

## 6. 值得关注的趋势信号

1. **多 Agent 编排已成标配，可靠性是共同瓶颈**。Gemini 误报成功、Copilot 并行响应错乱、Claude Agent 协议分叉、Qwen 的 Fleet RFC——各家的子代理能力都在"能用但不可信"阶段。开发者在选型时应重点考察子代理的超时控制、状态上报与可观测性，而非仅看是否支持多 Agent。

2. **Windows / 桌面端成为头部工具的阿喀琉斯之踵**。Codex 高配机冻结、Copilot 插件更新权限、Claude GPU 进程崩溃、Qwen 在 Warp 下渲染重复——Windows 用户的差评密度最高。这既是头部工具的短板，也是 OpenCode、Pi 等轻量开源工具抢占桌面用户的机会窗口。

3. **安全合规从"加分项"变为"准入门槛"**。Gemini 修复 SSRF、Qwen 收紧路径包含校验、Claude 的 CVP 误封引发企业用户信任危机、Pi 处理非法工具参数毒化——安全能力的深度正在成为企业采购 AI CLI 的分水岭。企业团队应要求工具提供可追溯、可申诉的拦截机制。

4. **计费与权益透明度直接影响用户信任**。Claude 的 Fable 5 静默降级、Copilot 的"昨天能用今天被禁"、Codex 的限流显示缺失，本质都是"权益判定不可观测"。工具方需要把 entitlement 判定做成显式、可诊断的一等数据，否则用户流失风险将持续累积。

5. **上下文管理是下一个主战场，且压缩行为蕴含真实风险**。Claude 的压缩后 skill 重放导致意外 `git push`、Copilot 的 5MB 上限后 `/compact` 失效、OpenCode 的元数据错误把 1M 上下文截断为 200K——自动上下文策略必须有手动兜底通道，任何"全自动压缩"都应默认保守。

6. **架构工程化进入深水区**。DeepSeek 的 crate 分解、OpenCode 的 V2 重写、Qwen 的 serve/daemon 服务化、Codex 的线程级配置——头部项目正从"堆功能"转向"建质量"，评估体系（Gemini eval 工具化、Qwen capture-tui 截图断言）也开始成为 CI 的一部分。技术决策者评估工具时，应把架构可扩展性与测试基建纳入评分，而非只对比功能清单。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告
*数据截止 2026-08-11 | 来源: github.com/anthropics/skills*

---

## 1. 热门 Skills 排行

按社区讨论热度 TOP 8(全部为 Open 状态):

**① skill-creator 评测链路修复** — [PR #1298](https://github.com/anthropics/skills/pull/1298)
- 功能: 修复 `run_eval.py` 恒报 `recall=0%` 的严重缺陷,涉及 eval artifact 安装、Windows 流读取、触发检测与并行 worker 四个层面。
- 讨论热点: 该 PR 直指 skill 描述自动优化循环"在噪声上做优化"的根因,关联 Issue [#556](https://github.com/anthropics/skills/issues/556)(12 评论、7 👍),社区已有 10+ 独立复现,是当前最热的工具链修复。

**② document-typography 文档排版技能** — [PR #514](https://github.com/anthropics/skills/pull/514)
- 功能: 对 AI 生成文档做排版质量控制,修复孤词换行、段落孤立于页尾、编号错位三类高频问题。
- 讨论热点: 直击"每个 Claude 生成的文档都会受影响"的普适痛点,社区认可其覆盖面与实用性。

**③ pdf 技能大小写引用修复** — [PR #538](https://github.com/anthropics/skills/pull/538)
- 功能: 修复 `skills/pdf/SKILL.md` 中 8 处大小写不匹配的文件引用(`REFERENCE.md`→`reference.md`),避免在大小写敏感文件系统上失效。
- 讨论热点: 反映社区对官方文档类技能跨平台一致性(尤其 Linux/macOS)的要求。

**④ ODT 文档技能** — [PR #486](https://github.com/anthropics/skills/pull/486)
- 功能: 新增 OpenDocument 格式(.odt/.ods)的创建、模板填充与 ODT→HTML 转换。
- 讨论热点: 补全官方文档技能矩阵中缺失的开源 ISO 标准格式,LibreOffice 用户呼声明确。

**⑤ frontend-design 技能改进** — [PR #210](https://github.com/anthropics/skills/pull/210)
- 功能: 修订 frontend-design 技能,提升指令清晰度与可执行性,确保每条指引可在单次对话内落地。
- 讨论热点: 讨论聚焦技能描述应"操作化"而非"教育化",与 Issue #202 对 skill-creator 的批评同源。

**⑥ 技能质量/安全分析器** — [PR #83](https://github.com/anthropics/skills/pull/83)
- 功能: 新增 skill-quality-analyzer(结构/文档/示例等五维评分)与 skill-security-analyzer 两个元技能,用于审视技能本身的质量与安全性。
- 讨论热点: 社区对"评价技能的工具"兴趣浓厚,与 #492 安全议题形成需求闭环。

**⑦ docx 修订模式 w:id 冲突修复** — [PR #541](https://github.com/anthropics/skills/pull/541)
- 功能: 修复 DOCX 技能向含书签文档添加修订时,因硬编码 `w:id` 导致文档损坏的问题。
- 讨论热点: OOXML 共享 ID 空间的隐蔽 bug,触及文档完整性,质量敏感度高。

**⑧ testing-patterns 测试模式技能** — [PR #723](https://github.com/anthropics/skills/pull/723)
- 功能: 覆盖完整测试栈:测试哲学(Testing Trophy)、单元测试(AAA 模式)、React 组件测试、边界条件与"不要测什么"。
- 讨论热点: 结构化测试生成与测试取舍指导是开发类用户的高频需求。

---

## 2. 社区需求趋势

从 Issues 提炼出五个主要方向:

| 趋势 | 代表 Issue | 热度 |
|---|---|---|
| **安全与信任边界** | [#492](https://github.com/anthropics/skills/issues/492) 社区技能冒用 `anthropic/` 命名空间、造成权限信任漏洞 | 43 评论(全站最高) |
| **企业级共享与协作** | [#228](https://github.com/anthropics/skills/issues/228) 组织内直接共享/分发 skill,替代下载上传的繁琐流程 | 16 评论、8 👍 |
| **Skill 创作工具链可靠性** | [#556](https://github.com/anthropics/skills/issues/556)、[#1169](https://github.com/anthropics/skills/issues/1169) 评测循环 0% recall;[#202](https://github.com/anthropics/skills/issues/202) skill-creator 过于说教化、需按最佳实践重写 | 合计 20+ 评论 |
| **上下文窗口与性能效率** | [#1487](https://github.com/anthropics/skills/issues/1487) claude-api 单次注入 ~156k tokens 耗尽上下文;[#189](https://github.com/anthropics/skills/issues/189) 两个插件安装相同技能导致重复占用 | 9 👍(重复技能问题) |
| **新方向提案** | [#1329](https://github.com/anthropics/skills/issues/1329) 紧凑记忆符号表示(compact-memory)、[#1385](https://github.com/anthropics/skills/issues/1385) 推理质量门控流水线、[#16](https://github.com/anthropics/skills/issues/16) 技能 MCP 化、[#29](https://github.com/anthropics/skills/issues/29) Bedrock 支持 | 持续讨论中 |

---

## 3. 高潜力待合并 Skills

以下 PR 讨论活跃、功能定位清晰,预计近期有望落地:

- **[document-typography #514](https://github.com/anthropics/skills/pull/514)** — 解决 AI 文档排版通病,实用性强,3 月提交后讨论热度一直靠前。
- **[testing-patterns #723](https://github.com/anthropics/skills/pull/723)** — 测试知识体系完整,开发类用户受益面大。
- **[ODT skill #486](https://github.com/anthropics/skills/pull/486)** — 补齐文档格式空白,与官方 document-skills 天然互补。
- **[color-expert #1302](https://github.com/anthropics/skills/pull/1302)** — 自包含色彩专业知识(ISCC-NBS、Munsell、OKLCH/OKLAB 选型表),作者持续迭代至 7 月。
- **[self-audit #1367](https://github.com/anthropics/skills/pull/1367)** — 机械验证 + 四维推理审计,与 #1385 质量门控提案形成体系,已迭代至 v1.3.0。
- **[plan-file-hygiene #1479](https://github.com/anthropics/skills/pull/1479)** — 针对规划产物无生命周期的治理技能,7 月新提交,时效性强。
- **[pyxel 复古游戏开发 #525](https://github.com/anthropics/skills/pull/525)** — pyxel-mcp 作者提交,垂直场景明确,7 月仍在更新。

---

## 4. Skills 生态洞察

> 社区最集中的诉求是:修复 Skill 创作与评测工具链的可靠性(0% recall、Windows 兼容),同时建立生态扩张所需的安全信任与上下文效率治理——让 Skills 既能被高效地造出来,也能被安全、轻量地用起来。

---

# Claude Code 社区动态日报 — 2026-08-11

> 数据来源：anthropics/claude-code（GitHub）

## 今日速览

- **v2.1.227 发布**：修复了过期登录令牌导致的功能标志误判（Max 用户被错误要求为 Fable 开启 usage credits），以及 `claude-code-action` 环境下 Bash 命令全部失败的问题。
- **Fable 5 计费/访问争议持续发酵**：Issue #79337 已积累 72 条评论，Max 计划用户反复报告 Fable 5 被静默降级到 Opus 4.8 并要求购买用量；今日又新增 Team Premium 席位被阻止的同类报告（#82797）。
- **CVP（Cyber Verification Program）误封问题未解**：已获 CVP 批准的 org 在 Claude Code 中仍被 cyber-safeguard 拦截（#84352，33 条评论），今日再有新报告称"Tool Use Blocked Without Context"（#85680），影响严重。

## 版本发布

### v2.1.227
- **修复**：会话以过期登录令牌启动时，feature flags 未结合用户订阅层级进行评估，导致 Max 计划用户被错误提示为 Fable 启用 usage credits。
- **修复**：`claude-code-action` 环境下所有 Bash 命令因 `allowed_no` 相关原因失败的问题。

---

## 社区热点 Issues（10 个）

### 1. Fable 5 在 Max 计划上被提示"requires usage credits"（#79337）
- 72 评论 / 23 👍，7月20日创建，今日仍活跃。
- Fable 5 成为 Max 标准权益当天起，Claude Code 拒绝运行并将其静默降级到 Opus 4.8，提示需购买 usage credits。这是当前社区最集中的付费/权益类反馈。
- 链接：https://github.com/anthropics/claude-code/issues/79337

### 2. CVP 获批组织仍收到 cyber safeguard 拦截（#84352）
- 33 评论，8月6日创建，今日持续更新。
- 已通过网络验证计划（CVP）的组织在 Claude Code 中仍遭遇安全拦截，验证门户显示 "Under review" 与批准邮件矛盾。企业用户受影响严重。
- 链接：https://github.com/anthropics/claude-code/issues/84352

### 3. Agent 工具的 `name` 参数静默切换为 teammate 协议（#71723）
- 11 评论，6月27日创建，今日仍被跟进。
- 只要 session 存在过 team 配置，Agent 工具带 `name` 调用时就会走 teammate 路径而非后台 agent 路径，导致调用方永远收不到 agent 结果。协议切换无任何提示。
- 链接：https://github.com/anthropics/claude-code/issues/71723

### 4. `--continue` 找不到 `-p` 创建的会话（#82536）
- 10 评论，7月30日创建。
- 非交互模式（`-p`）创建的会话无法被 `--continue` 恢复，交互式恢复通道断裂，影响自动化与人工交接工作流。
- 链接：https://github.com/anthropics/claude-code/issues/82536

### 5. Opus 5 产生此前版本不存在的幻觉输出（#82326）
- 8 评论，7月29日创建。
- 用户报告 Opus 5（2.1.220）开始编造 4.8 不会犯的答案，且反馈 ID 显示错误列表为空，难以诊断。
- 链接：https://github.com/anthropics/claude-code/issues/82326

### 6. 频繁自动压缩 + 无限循环 + 提示冻结（#41984）
- 7 评论，4月1日创建，今日被再次更新（CLOSED 但仍有讨论）。
- Opus 4.6 在 1M 上下文下出现反复自动压缩、死循环、提示卡死的组合问题，至今仍被引用。
- 链接：https://github.com/anthropics/claude-code/issues/41984

### 7. Claude Desktop Windows GPU 进程崩溃导致整个应用退出（#83744）
- 6 评论，8月4日创建。
- GPU 进程以 exitCode 101457950 崩溃后拖垮整个桌面应用，Windows 用户高频复现。
- 链接：https://github.com/anthropics/claude-code/issues/83744

### 8. 发布的 Code Artifacts 不在移动端 App 显示（#78792）
- 5 评论 / 20 👍，7月18日创建。
- Claude Code 发布的 artifact 在 Web 和桌面端正常，但移动 App 完全不显示。虽然评论不多，却是社区高赞问题之一。
- 链接：https://github.com/anthropics/claude-code/issues/78792

### 9. 伪造的 "file was modified" system-reminder（#74636）
- 5 评论，7月6日创建。
- 在 Claude 自己的 Write/Edit 工具调用后，工具结果流中出现伪造的 system-reminder，提示"文件已被修改、不要告诉用户"。涉及 prompt injection 类安全风险，值得高度关注。
- 链接：https://github.com/anthropics/claude-code/issues/74636

### 10. 参数替换损坏字面 `$N` 文本（#78759）
- 4 评论，7月18日创建。
- slash-command / skill 的参数替换会把代码块、表格中的 `$0.01`、`$2` 等字面量当作位置参数改写，且无法关闭。影响价格数据、awk 脚本等场景。
- 链接：https://github.com/anthropics/claude-code/issues/78759

---

## 重要 PR 进展

过去 24 小时仅有 2 个 PR 有更新，其中 1 个已关闭。整体 PR 活跃度偏低。

### 1. /code-review 增加 GitHub/GitLab 自动检测与 GitLab 支持（#34951，OPEN）
- 8月10日更新，3月16日创建，长期开放中。
- 为 `/code-review` 命令增加平台自动检测，支持 GitHub 与 GitLab（含自托管）。解决 Issue #26932，减少重复逻辑。
- 这是目前社区最需要的功能型 PR 之一，覆盖 GitLab 用户的核心诉求。
- 链接：https://github.com/anthropics/claude-code/pull/34951

### 2. plugins: entroly-context 预算感知上下文管理插件（#85464，CLOSED）
- 8月10日创建当日关闭。
- 提交了一个基于 Entroly 的社区插件，用于代码库超出上下文窗口时执行 budget-aware context 选择。已关闭，未合并。
- 链接：https://github.com/anthropics/claude-code/pull/85464

> 提示：PR 数量较少。如果你的团队正在为 Claude Code 开发插件或修复，可以关注仓库的 contribution 指南。

---

## 功能需求趋势

从近期 Issue 和 PR 中提炼社区最关注的方向：

### 1. 新模型（如 Fable 5）的权益与计费可见性
- Fable 5 在 Max / Team Premium 下均出现 entitlement 判断错误（#79337、#82797）。核心诉求：权益判定应基于账号订阅层级，而非本地登录状态；失败时应有明确原因。

### 2. 多 Agent / 跨会话消息机制的透明度
- 今日新增多个相关 Issue：#85679（跨会话消息过期后接收方无感知）、#85678（经审批后放行的消息到达后无任何标记）、#87677（指令被读取但被忽略）。社区期待更完善的消息状态机与审批追踪。

### 3. Context 管理与压缩可靠性
- #41984、#85668（autocompact thrashing：压缩后 3 轮对话即再次触顶）、#85138（压缩后 skill 重放导致意外 `git push`）。用户需要更可预测的上下文管理策略，以及压缩后行为的 opt-out 能力。

### 4. CVP / 安全合规判定的准确性
- #84352、#85680：合规批准与实际执行策略不一致。企业用户希望安全拦截具备可追溯、可申诉的机制，而不是无上下文的 "blocked"。

### 5. TUI 与桌面端交互细节
- #74655（Enter 换行、Mod+Enter 发送的可选按键方案）、#85013（Enter 创建换行而非发送）、#85654（折叠粘贴文本中的斜杠命令不触发）、#85674（保留 /btw 消息日志）。键盘交互成为桌面与 CLI 用户的共同高频诉求。

---

## 开发者关注点

- **Fable 5 计费混乱是当前最大痛点**：Max 计划用户在 7 月 20 日 Fable 5 成为标准权益当天即遭遇"requires usage credits"误判，问题持续三周仍未完全解决，今日仍有新报告。
- **CVP 误封正在影响真实业务**：已获批组织被持续拦截，涉及"数月的集成工作被无上下文阻断"，且验证门户状态与批准记录矛盾，企业用户信任受损。
- **Agent 工具存在隐性协议分叉**：`name` 参数会让调用静默走向 teammate 路径并丢失结果（#71723），属于高危 API 设计问题。
- **Compaction 后行为不可预测**：skill 重放可能拿着过期的 `$ARGUMENTS` 执行真实操作（#85138 中的意外 git push），开发者呼吁"压缩后不要自动重放技能"或提供 frontmatter opt-out。
- **沙箱/远程环境的边界问题**：#76558（WSL2 沙箱把 `.git/config.worktree` 伪装成设备节点导致 git 不可用）、#78493（Synology 远程环境因 internal-sftp 虚拟根目录与 shell 解析的 $HOME 不一致导致二进制上传失败）——反映沙箱适配长尾环境的成本。
- **会话管理命令行为不一致**：`-p` 创建的会话无法 `--continue`（#82536）；`--resume` 列出 bg 会话但 `--continue` 拒绝恢复（#85657）。自动化链路的会话生命周期还需收敛。
- **Issue 维护负担在增加**：今日新增的 #85675（"FBI 阻止我使用"）属于无效报告，反映高热度 issue tracker 中的噪音问题。

---

*本日报由 AI 技术分析师整理，数据截至 2026-08-11。*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报 — 2026-08-11

## 今日速览

过去 24 小时内发布了 `rust-v0.148.0-alpha.6` 和 `rust-v0.147.0-alpha.6.6` 两个 alpha 版本。社区讨论焦点集中在 Windows 应用稳定性与 VS Code 扩展资源加载失败两大问题上。PR 方面则有多个涉及配置刷新、构建系统与执行正确性的修复合入。

## 版本发布

| 版本 | 说明 |
|---|---|
| [rust-v0.148.0-alpha.6](https://github.com/openai/codex/releases) | 继 0.147 线之后的又一个 alpha 迭代，原始发布说明中未包含详细变更，建议关注 release notes 获取后续说明。 |
| [rust-v0.147.0-alpha.6.6](https://github.com/openai/codex/releases) | 0.147 alpha 系列的修正版本，原始发布说明未提供细节。 |

> 注：两个版本均为 alpha 预发布，实际使用需评估稳定性。

## 社区热点 Issues（Top 10）

挑选标准：评论数、👍 数以及主题代表性综合排序。

1. **[#20214] Codex App 在 Windows 11 Pro 上频繁冻结/卡顿（尽管系统资源充足）**
   - 标签：`bug` `windows-os` `app` `performance`
   - 评论 93 | 👍 81
   - 重要性：长期高热 Issue，Plus 用户反馈在 AMD Ryzen 5 + 32GB 内存环境下仍出现明显卡顿，直接影响核心使用体验。
   - [GitHub 链接](https://github.com/openai/codex/issues/20214)

2. **[#37458] VS Code 扩展无法启动：“The extension couldn't load its resources”**
   - 标签：`bug` `windows-os` `extension`
   - 评论 32 | 👍 1
   - 重要性：Windows 用户打开 Codex 面板即报资源加载失败，阻塞 IDE 内全部 Codex 功能，属于当前最严重的扩展回归之一。
   - [GitHub 链接](https://github.com/openai/codex/issues/37458)

3. **[#28919] Windows Codex App 缺少 “Control other devices” 标签**
   - 标签：`bug` `windows-os` `app` `remote`
   - 评论 28 | 👍 31
   - 重要性：远程控制功能在 Windows 端入口缺失，Pro 用户无法跨设备管理 Codex，功能完整性被质疑。
   - [GitHub 链接](https://github.com/openai/codex/issues/28919)

4. **[#37013] Windows Computer Use 跨 JS 调用复用陈旧的 node_repl 执行上下文**
   - 标签：`bug` `windows-os` `tool-calls` `app` `computer-use`
   - 评论 18 | 👍 4
   - 重要性：自动浏览器操作在多次执行后出现 `@oai/sky` 传输失效，影响以 Computer Use 为核心的自动化流程。
   - [GitHub 链接](https://github.com/openai/codex/issues/37013)

5. **[#20951] 功能请求：VS Code 扩展支持将 Codex 会话作为完整编辑器标签页打开**
   - 标签：`enhancement` `extension`
   - 评论 15 | 👍 38
   - 重要性：社区期望的 IDE 集成方向，希望获得类似 Claude Code 的全标签页交互体验。
   - [GitHub 链接](https://github.com/openai/codex/issues/20951)

6. **[#34700] Codex App/CLI 在 multi_agent_v2 下拒绝 `gpt-5.6-luna` 子代理**
   - 标签：`bug` `windows-os` `app` `subagent`
   - 评论 13 | 👍 35
   - 重要性：新模型与多代理模式之间的兼容性问题，直接影响最新模型能力的落地。
   - [GitHub 链接](https://github.com/openai/codex/issues/34700)

7. **[#37380] 0.147.0 回归：Azure Responses 拒绝空的 functions namespace 描述**
   - 标签：`bug` `azure` `CLI` `custom-model` `tool-calls`
   - 评论 12 | 👍 27
   - 重要性：企业用户通过 Azure API Management 接入时请求被拒，属于 0.147.0 的破坏性回归。
   - [GitHub 链接](https://github.com/openai/codex/issues/37380)

8. **[#36176] Windows 桌面版仍存在全进程 PowerShell/WMI 轮询，导致系统输入延迟**
   - 标签：`bug` `windows-os` `app` `performance`
   - 评论 11 | 👍 3
   - 重要性：后台轮询机制一直未按社区要求移除或降频，影响系统整体响应速度。
   - [GitHub 链接](https://github.com/openai/codex/issues/36176)

9. **[#32791] Plus 账户的“五小时 Codex 使用限制”消失，仅显示每周限制**
   - 标签：`bug` `rate-limits` `app`
   - 评论 11 | 👍 3
   - 重要性：订阅用户无法看到 5 小时窗口，影响使用规划，判断与限流面板的显示逻辑有关。
   - [GitHub 链接](https://github.com/openai/codex/issues/32791)

10. **[#37403] macOS 桌面无法恢复远程控制/CLI 线程：“already has an active writer”**
    - 标签：`bug` `app` `app-server` `remote`
    - 评论 5 | 👍 4
    - 重要性：移动端远程控制与桌面 CLI 线程联动在多端切换时失败，影响混合工作流。
    - [GitHub 链接](https://github.com/openai/codex/issues/37403)

## 重要 PR 进展（Top 10）

以下 PR 均在最近 24 小时内更新，其中大部分已合入（CLOSED）。

1. **[#37908] Apply refreshed cloud config bundles to later sessions**
   - 修复：后台刷新配置后，新会话仍使用启动快照的问题；现在改为从共享 bundle 加载最新配置。
   - [GitHub 链接](https://github.com/openai/codex/pull/37908)

2. **[#37906] Make gRPC code-mode notifications fire-and-forget**
   - 修复：通知发送不再等待客户端 ack，避免未确认通知阻塞 cell 完成，降低执行延迟。
   - [GitHub 链接](https://github.com/openai/codex/pull/37906)

3. **[#37902] Defer `view_image` processing to history insertion**
   - 重构：将图片解码/缩放统一推迟到 history 插入路径，简化调用链；无效图片走既有占位逻辑。
   - [GitHub 链接](https://github.com/openai/codex/pull/37902)

4. **[#37896] Add hermetic Windows SDK and MSVC runtime repositories**
   - 构建：为 Windows SDK 和 MSVC 运行时添加固定版本仓库，要求显式接受 EULA，提升 Windows 构建可复现性。
   - [GitHub 链接](https://github.com/openai/codex/pull/37896)

5. **[#37895] Add configurable Responses API request metadata**
   - 新增：支持通过 `responses_api_metadata` 携带自定义键值元数据（上限 16 条、ASCII 标识符、≤64 字符），方便企业审计/链路追踪。
   - [GitHub 链接](https://github.com/openai/codex/pull/37895)

6. **[#37891] Use thread configuration for `app/read`**
   - 改进：`app/read` 新增可选 `threadId` 参数，读取前加载该线程的有效配置（feature gating、工作区策略、插件归属）。
   - [GitHub 链接](https://github.com/openai/codex/pull/37891)

7. **[#37889] Ignore Unix socket proxy settings on Windows**
   - 修复：Unix socket 代理权限在 Windows 上本不应生效，但旧逻辑会误伤代理监听并产生告警；本次已在 Windows 运行时排除该配置。
   - [GitHub 链接](https://github.com/openai/codex/pull/37889)

8. **[#37882] Read safety buffering from response metadata**
   - 改进：从 `response.metadata` 中解析 safety-buffering 信息；保留顶层字段兼容旧逻辑。
   - [GitHub 链接](https://github.com/openai/codex/pull/37882)

9. **[#37878] Add configurable goal token budget limits**
   - 新增：允许配置 `goals.max_goal_token_budget`，作为新目标的默认预算，并拒绝超出上限的创建/更新请求。
   - [GitHub 链接](https://github.com/openai/codex/pull/37878)

10. **[#37867] Reject duplicate resolved paths in apply_patch**
    - 修复：拒绝同一文件在补丁中出现多次（如 `duplicate.txt` 与 `./duplicate.txt`）的情况，避免应用结果产生歧义。
    - [GitHub 链接](https://github.com/openai/codex/pull/37867)

## 功能需求趋势

从当前 Issues 中可提炼出以下社区最关注的功能方向：

- **IDE 集成体验**：VS Code 扩展是主要阵地，但“资源加载失败”问题在多个环境（Windows、Remote-SSH、旧版 macOS）反复出现；用户同时期望更深的编辑器集成（如完整标签页、配置项 `.codex` 的读取）。
- **Windows 平台稳定性优化**：冻结、卡顿、输入延迟、远程控制选项缺失，已成为 Windows 用户反馈密度最高的方向。
- **远程控制与跨设备会话**：开发者希望移动端、桌面端、CLI 之间的会话可以无缝切换，但现有的配对失败、线程锁冲突说明远程架构仍不够健壮。
- **最新模型与多代理支持**：`gpt-5.6-luna`、`multi_agent_v2` 的使用越来越广，但兼容性 bug 多发，暗示模型线路迭代与 CLI 发布节奏需要更好同步。
- **企业自定义端点与合规**：Azure Responses 回归、MCP OAuth 授权、可配置的元数据/token 预算，都指向企业级接入与治理需求在增长。
- **速率限制透明度**：用户希望看到精确的 5 小时窗口、重置时间以及消耗明细，而不是只显示笼统的每周总额。

## 开发者关注点

- **高优先级痛点**：Windows App 长期存在“高配机器也会卡顿”问题（#20214），且有用户反馈卡顿甚至导致 Pro 订阅额度在 24 小时内耗尽（#35606），对生产可用性影响极大。
- **扩展回归**：VS Code 扩展多项“资源加载失败”报告集中于 `26.803.41515` 版本，且远程/沙箱环境下更易触发，开发者希望修复后能对远程场景做兼容处理。
- **远程与移动控制**：跨设备恢复任务时出现“already has an active writer”“Pairing failed”错误，已经阻断部分用户的“白天桌面 + 夜间移动”工作流。
- **限流显示不一致**：Plus 用户看不到 5 小时限制，另一些用户未收到 7 月 29 日的限流重置（#36170），需要后端与客户端同步修复。
- **执行层细节正确性**：Computer Use 上下文复用、hooks 缺少 workdir、apply_patch 重复路径等边界问题被持续反馈，说明社区对工具执行的可预期性和安全校验有较高要求。

---

> 本日报由 GitHub 数据自动整理，仅供参考。所有链接均可点击跳转至对应 Issue / PR 页面。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报 — 2026-08-11

> 数据来源：GitHub `google-gemini/gemini-cli`（每日更新）

## 今日速览

今日发布 v0.56.0-nightly 版本，重点修复 MCP OAuth token 刷新时 client ID 丢失的问题（由新贡献者 @ParthivNaresh 提交）。社区对 Agent 子代理稳定性的讨论热度持续，`MAX_TURNS` 被误报为 GOAL 成功（#22323）和 Generalist agent 挂起（#21409）成为焦点。安全层面有多项 PR 同步推进，包括 SSRF 漏洞修复（#28557）和 OAuth 相关修复（#28688）。

## 版本发布

**v0.56.0-nightly.20260811.geef19f25c** | [Changelog](https://github.com/google-gemini/gemini-cli/releases)

- **修复**：MCP OAuth token 刷新时改用存储的 client ID（[PR #28481](https://github.com/google-gemini/gemini-cli/pull/28481)）
- **新贡献者**：@ParthivNaresh 首次合入

## 社区热点 Issues

过去的 24 小时内共有 50 条 Issue 更新，以下为最值得关注的 10 条：

| # | Issue | 重要性 | 社区反应 |
|---|-------|--------|----------|
| 1 | [Subagent recovery after MAX_TURNS reported as GOAL success](https://github.com/google-gemini/gemini-cli/issues/22323) | **P1 Bug**：`codebase_investigator` 子代理达到 max turns 后仍上报 `status: "success"`，掩盖真实中断原因 | 🔥 12 条评论 · 2 👍 |
| 2 | [Generalist agent hangs](https://github.com/google-gemini/gemini-cli/issues/21409) | **P1 Bug**：委托给 generalist agent 后无限挂起，连创建文件夹都会卡住，用户等待超 1 小时 | 🔥 8 条评论 · 8 👍 |
| 3 | [Shell command stuck with "Waiting input"](https://github.com/google-gemini/gemini-cli/issues/25166) | **P1 Bug**：简单 CLI 命令执行完成后界面仍卡在 "Awaiting user input" | 4 条评论 · 3 👍 |
| 4 | [Add deterministic redaction and reduce Auto Memory logging](https://github.com/google-gemini/gemini-cli/issues/26525) | **P2 Security**：Auto Memory 在内容进入模型上下文后才提示红action secret，且可能记录技能内容 | 4 条评论 |
| 5 | [Stop Auto Memory from retrying low-signal sessions indefinitely](https://github.com/google-gemini/gemini-cli/issues/26522) | **P2 Bug**：低信号会话未标记为已处理，被后台提取代理反复拉起重试 | 5 条评论 |
| 6 | [Assess impact of AST-aware file reads, search, mapping](https://github.com/google-gemini/gemini-cli/issues/22745) | **P2 Feature**：评估 AST 感知工具能否精确读取方法边界、减少 token 噪声和误读轮次 | 7 条评论 |
| 7 | [Gemini does not use skills and sub-agents enough](https://github.com/google-gemini/gemini-cli/issues/21968) | **P2 Bug**：Gemini 基本不会自主调用自定义 skills 和 sub-agents，需要显式指令才执行 | 6 条评论 |
| 8 | [Robust component level evaluations](https://github.com/google-gemini/gemini-cli/issues/24353) | **P1 Epic**：在已有 76 个行为评估测试基础上，为 6 个 Gemini 模型建立组件级评估体系 | 7 条评论 |
| 9 | [Zero-Dependency OS Sandboxing & Post-Execution Intent Routing](https://github.com/google-gemini/gemini-cli/issues/19873) | **P2 Enhancement**：让模型以原生 bash 用户方式操作，同时通过零依赖沙箱保障安全 | 8 条评论 |
| 10 | [Browser subagent fails in Wayland](https://github.com/google-gemini/gemini-cli/issues/21983) | **P1 Bug**：浏览器子代理在 Wayland 环境下失败，终止原因显示为 GOAL 但实际未完成 | 4 条评论 · 1 👍 |

## 重要 PR 进展

过去 24 小时内有 15 个 PR 更新，以下为值得关注的内容：

| PR | 说明 |
|----|------|
| [fix(core): refresh MCP OAuth tokens with stored client ID](https://github.com/google-gemini/gemini-cli/pull/28481) | **已合入本次 Release**（P1/Security）。此前 OAuth 动态注册的 MCP server 在 token 刷新时本地校验失败并删除凭据，本修复保证刷新流程使用正确的 client ID |
| [fix(vscode-ide-companion): track all activate() Disposables](https://github.com/google-gemini/gemini-cli/pull/28764) | VS Code Companion 插件中 `context.subscriptions.push()` 的多余括号把注册变成了逗号表达式，导致部分 Disposable 未被追踪，命令无法正确释放 |
| [fix(core): dynamically resolve Cloud Workstations proxy redirect URI](https://github.com/google-gemini/gemini-cli/pull/28688) | 修复 OAuth 在 Cloud Workstations VM 中因静态 `localhost` 回调而失败的问题，改为动态解析代理 redirect URI |
| [fix(core): resolve swallowed directory mismatch in IDE connections](https://github.com/google-gemini/gemini-cli/pull/28729) | 解决 Cider 及 VS Code 远程/FUSE workspace 场景下 IDE connection 目录不匹配被静默吞掉，导致连接失败的问题 |
| [fix(core,cli): resolve false model capacity exhaustion and fix quota lookup](https://github.com/google-gemini/gemini-cli/pull/28730) | 修复 CLI 中错误的模型容量耗尽错误提示，并修正 core 包中模型配额查找的映射关系，保留 "Keep trying" 选项 |
| [fix: resolve SSRF vulnerability in web-fetch.ts using async DNS resolution](https://github.com/google-gemini/gemini-cli/pull/28557) | **安全修复**：`isBlockedHost` 原仅检查字面 IP，域名可绕过限制解析到内网地址；改用异步 DNS 解析后彻底封堵 SSRF 路径 |
| [fix(core): handle EACCES in resolveToRealPath to prevent sandbox crash](https://github.com/google-gemini/gemini-cli/pull/28734) | 修复 macOS Seatbelt 沙盒启用且 CWD 位于 Git 仓库内时，`fs.realpathSync` 抛出 EACCES 导致 CLI 启动崩溃 |
| [feat(evals): add tool call formatter and integrate failure summaries](https://github.com/google-gemini/gemini-cli/pull/28305) | 行为评估失败时自动输出带编号的工具调用时间线，包含参数、状态和错误详情，便于快速定位失败原因 |
| [Feat/eval validate](https://github.com/google-gemini/gemini-cli/pull/28344) | 新增 `eval:validate` 静态分析命令，按 9 条规则校验 eval 源文件，支持 `--json` 输出，适合作为 CI 门禁 |
| [fix(core): prevent boolean thought parts leaking as [Thought: true] text](https://github.com/google-gemini/gemini-cli/pull/28624) | 防止内部 thought parts 中的布尔字段泄漏到模型 thought 文本展示中，消除 `[Thought: true]` 噪音 |

## 功能需求趋势

从近期 Issues 中可以提炼出以下社区关注方向：

- **Agent 可靠性与可观测性**：子代理恢复语义、执行轨迹可视化、浏览器代理自动接管等话题大量出现，社区对 Agent 行为的透明度和可诊断性要求明显提升。
- **安全纵深**：SSRF、MCP OAuth 凭据管理、Auto Memory 数据去标识化/红action 是当前硬需求，安全与功能迭代并行推进。
- **评估体系工具化**：从行为评估到组件级评估，再到 `eval:validate` 静态校验，项目在持续构建系统化的质量保障能力。
- **AST 感知代码操作**：多个 Issue 探讨用 AST 替代纯文本读取/搜索/映射，以降低 token 消耗、减少工具调用轮次。
- **终端与 IDE 体验打磨**：终端 resize 性能、外部编辑器退出后的全屏刷新、VS Code Companion 插件资源管理，体现对开发者日常体验的重视。

## 开发者关注点

开发者反馈中出现的高频痛点：

- **子代理稳定性是首要问题**：挂起（#21409）、误报成功（#22323）、Wayland 下浏览器代理失败（#21983）均被标记为 P1。
- **权限边界不清晰**：有用户反映 v0.33.0 后子代理在配置为 disabled 的情况下仍被自动启用（#22093），以及需要机制阻止模型执行 `git reset --force` 类破坏性命令（#22672）。
- **Shell 执行体验待修复**：命令完成但 UI 卡在 "Waiting input"（#25166）；模型在任意目录乱建临时脚本，增加清理负担（#23571）。
- **配置覆盖失效**：浏览器代理忽略 `settings.json` 中的 `maxTurns` 等覆盖项（#22267）；`~/.gemini/agents/` 下的 symlink 文件无法被识别为 agent（#20079）。
- **Auto Memory 存在数据风险**：低信号会话无限重试浪费资源（#26522），且敏感内容在模型上下文落盘后才做红action处理（#26525）。

---
*本日报由 AI 自动生成，基于 GitHub 公开数据整理，供技术社区参考。*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报（2026-08-11）

## 今日速览

- **v1.0.79 发布**，带来企业级沙箱策略改进与 allow-auto-only 策略支持。
- **Claude 模型不可用问题集中爆发**：#4422 与 #4390 均指向企业账号模型目录异常，影响面较大。
- **MCP 与并行工具调用可靠性成为新焦点**：多个新 Issue 报告初始化超时、策略竞态与响应顺序错乱问题。

## 版本发布

### v1.0.79（2026-08-10）
- `/sandbox` 配置对话框现在显示沙箱设置在 `settings.json` 中的存储位置。
- 新增对 **enterprise allow-auto-only 策略**的支持：允许 `/allow-all auto` 正常工作，同时完整 allow-all 仍可被阻止。
- 企业托管的沙箱策略可强制代理 URL，同时保留凭据处理流程。

## 社区热点 Issues

### 1. 所有 Claude 模型在 CLI 模型选择中被禁用
**#4422** · 2026-08-09 创建 · 开放 · 评论 1 · 👍 2  
个人企业账号用户反馈：昨天还能正常使用 Claude 系列模型，今天全部提示 "This model is disabled by your organization"。回滚 CLI 版本无效，问题疑似在服务端策略侧。与 #4390 高度疑似同源。  
🔗 https://github.com/github/copilot-cli/issues/4422

### 2. 组织已启用的模型从目录中缺失
**#4390** · 2026-08-06 创建 · 开放 · 评论 2 · 👍 3  
组织已在 Copilot Business 中启用 Claude Sonnet 5 / Opus 5 与 Kimi K3，但 CLI 的模型目录中找不到，选择时仍提示 "disabled"。企业功能开启与 CLI 模型同步存在严重延迟或不一致。  
🔗 https://github.com/github/copilot-cli/issues/4390

### 3. Windows 下插件更新失败（VS Code 运行时）
**#4095** · 2026-07-11 创建 · 开放 · 评论 1 · 👍 13  
`copilot plugin update` 在 Windows 上持续报 `Access is denied (os error 5)`。即使 marketplace 克隆成功，安装阶段也会因 VS Code 扩展持有的 watcher 句柄而失败。该 Issue 获得 13 个 👍，是当前 Windows 用户最痛点的问题之一。  
🔗 https://github.com/github/copilot-cli/issues/4095

### 4. 自定义 Agent 不支持按级配置 Reasoning Effort
**#2904** · 2026-04-22 创建 · 开放 · 评论 4 · 👍 19  
`.agent.md` 自定义智能体支持 `model` frontmatter，但 **无法设置 reasoning effort**。目前只能通过全局 `--effort=LEVEL` 指定，无法针对会话型/探索型 agent 分别精细化控制。获 19 👍，是社区高票功能需求。  
🔗 https://github.com/github/copilot-cli/issues/2904

### 5. 企业策略偶发阻止模型列表检索
**#1595** · 2026-02-21 创建 · 开放 · 评论 29 · 👍 11  
用户账号有约 40% 剩余 premium 请求额度，但 `/models` 命令直接被拒，报 `access denied by Copilot policy`。29 条评论表明该问题在企业环境中并非个例，且长期未根除。  
🔗 https://github.com/github/copilot-cli/issues/1595

### 6. 并行工具调用响应顺序错乱
**#4420** · 2026-08-09 创建 · 开放 · 评论 0  
并行工具调用时，harness 无法可靠关联请求与响应，可能出现响应早于请求返回、或返回未请求的并行结果。这会导致 agent 状态混乱，是核心可靠性的严重缺陷。  
🔗 https://github.com/github/copilot-cli/issues/4420

### 7. 并行 explore subagent 触发 per-model 429 限流
**#4416** · 2026-08-09 创建 · 开放 · 评论 0  
所有 `explore` agent 默认使用同一轻量模型（目前为 `claude-haiku-4.5`），并行 fan-out 后全部请求集中在单一模型配额桶上。该模型突发限制更严格，且无退避、无自动切换，即使模型支持 `eligibleForAutoSwitch` 也无效。  
🔗 https://github.com/github/copilot-cli/issues/4416

### 8. MCP initialize 握手固定 60 秒预算且无重试
**#4421** · 2026-08-09 创建 · 开放 · 评论 0  
MCP `initialize` 超时时间硬编码为 60 秒，超时后只会记录 `Recorded failure for server <name>`，**整个会话内不再重新拉起该服务器**。npx 启动的 stdio 服务器约 29% 的会话因此失败，且无法恢复。无重试、无退避、无配置项。  
🔗 https://github.com/github/copilot-cli/issues/4421

### 9. 会话达到 5 MB 限制后 `/compact` 无法恢复
**#4424** · 2026-08-10 创建 · 开放 · 评论 0  
当 CAPI Responses payload 达到 5 MB 上限后，普通提示失败是预期行为，但 `/compact` 同样失败，导致用户无法精简上下文、无法自救。此前 #4325 已报告超大 `events.jsonl` 会导致会话永久不可加载，这类问题是**长会话管理的核心缺口**。  
🔗 https://github.com/github/copilot-cli/issues/4424

### 10. 托管设置解析期间临时“拒绝一切”策略丢弃用户 MCP 服务器
**#4419** · 2026-08-09 创建 · 开放 · 评论 0  
CLI 在解析托管设置时，会先安装临时 MCP 策略 `managedAllowedMcpServerLists: [[]]`——即一个空列表、拒绝任何 MCP 服务器注册。用户在此窗口内注册的自定义服务器会被永久拒绝，即使账号本身没有任何托管策略。这对企业+MCP 组合用户构成隐性数据丢失。  
🔗 https://github.com/github/copilot-cli/issues/4419

## 重要 PR 进展

过去 24 小时内无 PR 更新。

## 功能需求趋势

- **模型选择与控制能力**：社区强烈要求更细粒度的模型配置，包括 `.agent.md` 中的 reasoning effort（#2904）、修复 explore 工具硬编码模型（#3954）、以及企业模型目录同步（#4390/#4422）。
- **MCP 生态稳定性**：多个新 Issue 集中在 MCP 初始化超时（#4421）、临时策略竞态（#4419）、死连接复用（#3257），说明 MCP 已成为社区重度使用场景，但基础设施仍不够健壮。
- **并行执行可靠性**：#4420 响应顺序错乱与 #4416 并行 429 限流，反映出 CLI 对 agent 并行调用场景的工程化仍有不足，缺少响应关联、退避和自动容错机制。
- **长会话生命周期管理**：#4325、#4424、#4423 共同指向一个问题：会话一旦膨胀或异常，缺乏可靠恢复路径。
- **Windows 平台体验**：插件更新权限（#4095）、终端渲染回归（#4222）、路径引号处理（#4426）等 Windows 专属问题频发，平台适配仍有大量改进空间。

## 开发者关注点

- **服务端策略问题成为最大焦虑源**：#4422/#4390 让开发者对“昨天能用、今天被禁”感到困惑，且 CLI 端无有效报错归因。
- **MCP 配置易碎**：初始化超时不可调、临时拒绝策略永久丢弃用户配置、空闲连接被 NAT 切断后无法重连——开发者期望更强的容错与可观测性。
- **并行工具调用缺少安全网**：429 无退避、响应关联丢失，这在高并发 agent 场景下容易产生微妙且难以复现的 bug。
- **会话自救能力不足**：5 MB 限制后 `/compact` 失效、超大 `events.jsonl` 导致不可恢复，开发者需要可靠的上下文压缩和归档机制。
- **Windows 用户体验受损**：插件更新失败与终端渲染回归反复出现，Windows 用户希望获得与 macOS/Linux 同等的稳定性。

---
*数据来源：GitHub [github/copilot-cli](https://github.com/github/copilot-cli) Issues 与 Releases，统计时间截至 2026-08-11。*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报（2026-08-11）

> 数据源：[MoonshotAI/kimi-cli](https://github.com/MoonshotAI/kimi-cli)  
> 数据窗口：过去 24 小时（截至 2026-08-11）

## 今日速览

- **记忆系统成社区核心议题**：#1283 与 #1478 两个“跨会话记忆/记忆层”Issue 在过去 24 小时持续活跃，开发者对大项目场景下的上下文持久化缺失表达集中诉求。
- **新 Bug 引发文案安全讨论**：#2599 反馈规划任务中 Todo 列表出现“验尸”（Autopsy）一词，直接影响使用情绪，暴露生成文案的审校缺口。
- **整体动态较平静**：过去 24 小时无新 Release、无新 PR，社区主要声音集中在上述 3 个 Issue（1 个长期高热度、1 个今日更新、1 个新提交）。

## 版本发布

本次周期内无新版本发布。

## 社区热点 Issues

本次周期内活跃 Issue 共 3 条，为“过去 24 小时更新”的全部内容，以下全量展开分析：

### 1. #1283 —— 记忆系统：跨会话持久上下文（长期热议）  
- **标签**：enhancement | 开放  
- **作者/时间**：CatKang，创建于 2026-02-27，更新于 2026-08-10  
- **讨论热度**：31 条评论，持续近半年仍有新互动  
- **核心诉求**：实现 **自动记忆 + 手动记忆** 双重体系——自动记忆由 AI 管理笔记，手动记忆由用户自定义指令，从而跨会话保留项目背景、模式与偏好。  
- **关注点**：这是社区关于“记忆系统”最完整、最早的提案之一，长期未被满足，缺口明确。  
- [GitHub Issue #1283](https://github.com/MoonshotAI/kimi-cli/issues/1283)

### 2. #1478 —— 记忆层优化 + 参考文档补全（今日更新）  
- **标签**：enhancement | 开放  
- **作者/时间**：hahy36，创建于 2026-03-17，更新于 2026-08-11  
- **讨论热度**：今日被重新关注（1 条评论）  
- **核心诉求**：  
  - 优化记忆层，作者直言“搞大项目的时候很痛苦”；  
  - 参考文档中只找到 `agent.md`，没有任何记忆机制说明；  
  - 给出借鉴结构：`~/.openclaw/workspace/` 下的 `MEMORY.md`、`memory/*.md` 等分层记忆设计。  
- **关注点**：与 #1283 相互印证，并额外揭示“文档缺失”和“大项目场景”两个关键短板。  
- [GitHub Issue #1478](https://github.com/MoonshotAI/kimi-cli/issues/1478)

### 3. #2599 —— 规划任务时 Todo 出现“验尸”（Autopsy）字样  
- **标签**：bug | 开放  
- **作者/时间**：KING0177，创建于 2026-08-11，更新于 2026-08-11  
- **环境信息**：CLI v0.34.0 / allegro 平台 / kimi k3 模型 / macOS 2018 款 Intel 机型  
- **现象**：任务规划中 Todo 列表出现“验尸”一词，用户反馈“好吓人”。  
- **关注点**：新反馈且具有代表性——生成文案中的用词偏差影响信任感，建议核查规划任务 Prompt 及输出过滤机制。  
- [GitHub Issue #2599](https://github.com/MoonshotAI/kimi-cli/issues/2599)

## 重要 PR 进展

过去 24 小时无 PR 创建或更新，暂无外部贡献的功能合并或修复需要跟踪。社区当前活跃力量集中在 Issue 讨论层。

## 功能需求趋势

从过去 24 小时活跃的 3 个 Issue 中，可提炼以下需求方向：

| 方向 | 具体需求 | 证据 |
|---|---|---|
| **跨会话记忆系统** | 自动记忆（AI 笔记）+ 手动记忆（用户指令） | #1283、#1478 |
| **大项目（Big Project）支持** | 记忆层在大型代码库中稳定工作，减少重复上下文说明 | #1478 |
| **文档完备性** | 参考文档补充记忆机制说明，而不只有 `agent.md` | #1478 |
| **输出文案安全** | 规划任务中避免“验尸”等误导/惊吓性词汇 | #2599 |

## 开发者关注点

- **最大痛点：记忆层缺失**。多位开发者用“痛苦”描述大项目体验，当前 CLI 在长时间、多文件、多轮复杂任务中的上下文保持能力明显不足。
- **文档可见性差**：用户只找到 `agent.md`，对记忆功能无从配置，即便功能存在也未被有效感知。
- **术语/翻译风险**：`Autopsy` 这类词出现在 Todo 规划中，既非预期也不专业，推测生成侧混入了不当训练语料，需要敏感词过滤或文案约束。
- **老设备稳定性**：macOS 2018 Intel 机型在 v0.34.0 上已出现体验问题，建议后续发布加强低配环境回归测试。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 — 2026-08-11

## 今日速览

v1.18.16 发布，修复了配置解析与 Home 项目注册问题；Web 项目选择器“No folders found”是当前社区最集中的痛点，已有多个 PR 并行修复；V2 beta 桌面构建流程启动，核心服务重构（config/skill 服务化）持续推进。

---

## 版本发布

### v1.18.16
- **Core 修复**：忽略未知顶层配置字段，不再因配置解析失败而中断
- **Core 修复**：注册从 Home 打开的项目，使其在整个应用中可用
- **Desktop 改进**：在 Home 中右键即可打开项目菜单
- **Desktop 修复**：回退到列表展示（文件/目录加载失败时不再白屏）

🔗 https://github.com/anomalyco/opencode/releases

---

## 社区热点 Issues（10 个）

### 1. [FEATURE] 原生会话目标 /goal — 社区呼声最高
- **#27167** · 作者: jorgitin02 · 👍 128 · 💬 70
- 自定义斜杠命令已有，但缺少原生、持久的会话目标/生命周期。该功能若落地将影响会话管理的使用范式。
- 🔗 https://github.com/anomalyco/opencode/issues/27167

### 2. 中止的 provider 流被记录为干净停止 — 数据完整性风险
- **#37852** · 作者: fernanDOTdo · 👍 55 · 💬 15
- 流中途终止时无 finish reason、无 usage，系统仍以 `finish=unknown` 记录为正常结束，子代理静默返回空结果且无任何错误提示。
- 🔗 https://github.com/anomalyco/opencode/issues/37852

### 3. "Open project" 对话框一直显示 "No folders found"
- **#39434** · 作者: andrianm28 · 💬 4
- 目录选择器因 `GET /file` 缺少 `path` 参数而始终返回空列表，导致 Web 端新用户无法添加第一个项目。
- 🔗 https://github.com/anomalyco/opencode/issues/39434

### 4. Web 项目选择器在无搜索词时为空
- **#37611** · 作者: ndj888 · 👍 2 · 💬 3
- 空 query 发送到 `/find/file` 返回空列表，输入路径后才显示文件夹，项目选择不可发现。
- 🔗 https://github.com/anomalyco/opencode/issues/37611

### 5. DeepSeek V4 Flash Free 上下文被 metadata 错误限制为 200K
- **#40958** · 作者: abhisheksharma611 · 💬 4
- models.dev 元数据将原生 1M 上下文截断为 200K，非硬件限制，属于配置问题，影响长上下文编码任务。
- 🔗 https://github.com/anomalyco/opencode/issues/40958

### 6. 工具调用完成后进入死循环
- **#26220** · 作者: Dvalin21 · 👍 4 · 💬 8
- 工具调用完成后进程存活但无响应，无法退出或继续，影响 Big Pickle 等版本稳定性。
- 🔗 https://github.com/anomalyco/opencode/issues/26220

### 7. 配置 `tool_call: false` 不生效
- **#35432** · 作者: tobwen · 💬 3
- 模型配置禁用工具调用被忽略，prompt loop 仍无条件发送 SessionTools，导致无工具能力的 provider（如 morphllm）异常。
- 🔗 https://github.com/anomalyco/opencode/issues/35432

### 8. [V2] Agent/Mode 切换对模型不可见
- **#40474** · 作者: gnh1996 · 👍 1 · 💬 2
- V2 中 Build/Plan 切换时，`agent-switched` 消息在转 LLM 上下文时被静默丢弃，模型无法感知当前模式，缺少 system prompt。
- 🔗 https://github.com/anomalyco/opencode/issues/40474

### 9. 切换会话后输入框内容被清空
- **#36203** · 作者: liqunn · 💬 2
- 未提交的长消息在切换会话后丢失，与 #41614 正相反（#41614 要求草稿应随会话持久化，而此 issue 报告的是被意外清空）。
- 🔗 https://github.com/anomalyco/opencode/issues/36203

### 10. `chunkTimeout` 对 AWS Bedrock 等 EventStream 协议无效
- **#26487** · 作者: gkkkd8 · 💬 3
- 超时保护仅覆盖 SSE，不适用于 Bedrock 的 EventStream，流式传输可能无限挂起。
- 🔗 https://github.com/anomalyco/opencode/issues/26487

---

## 重要 PR 进展（10 个）

### 1. V2 beta 桌面构建发布
- **#41626** · 作者: Hona · 状态: OPEN
- 跳过 V1 CLI 构建，在 beta 桌面包中捆绑 npm next CLI，发布 beta 桌面版而不发布 npm beta 包。
- 🔗 https://github.com/anomalyco/opencode/pull/41626

### 2. Beta 分支从 v2 构建
- **#41627** · 作者: Hona · 状态: OPEN
- 生成的 beta 分支改为基于 v2 构建，仅纳入目标是 v2 的 beta 标签 PR，依赖 #41626。
- 🔗 https://github.com/anomalyco/opencode/pull/41627

### 3. 项目选择器：从 Home 填充目录
- **#41158** · 作者: Brendonovich · 状态: CLOSED
- 保留有索引的目录结果，索引空时回退到 Home 目录列表，并对查询做本地模糊匹配。持续跟进 #37611/#39434。
- 🔗 https://github.com/anomalyco/opencode/pull/41158

### 4. 空搜索时列出基础目录
- **#41153** · 作者: Cordtus · 状态: OPEN
- 修复 `query=` 空列表问题，空查询时列出基础目录子项，关闭 #37611。
- 🔗 https://github.com/anomalyco/opencode/pull/41153

### 5. 无项目打开时支持 New Session 与项目选择器
- **#39732** · 作者: lilxckd-cloud · 状态: OPEN
- 两行级修复让 `opencode web` 在全新浏览器配置下也能创建会话，关闭 #37606 / #37611。
- 🔗 https://github.com/anomalyco/opencode/pull/39732

### 6. 每用户工作区目录（V2 会话隔离）
- **#41639** · 作者: xingyun0812 · 状态: CLOSED
- 新增 `OPENCODE_DATA_ROOT` 环境变量的 `DataRootConfig`，V1/V2 路由均接入，支持基于用户的会话隔离。
- 🔗 https://github.com/anomalyco/opencode/pull/41639

### 7. TUI：折叠 execute 子项详情
- **#41624** · 作者: kitlangton · 状态: CLOSED
- Code Mode 的 `execute` 子项默认一行展示，点击展开完整输入/错误信息，避免长命令换行刷屏。
- 🔗 https://github.com/anomalyco/opencode/pull/41624

### 8. TUI：附件路径进入模型上下文
- **#41455** · 作者: cakeni · 状态: OPEN
- 在二进制图片前插入附件 `source.path` 文本部分，解决部分 provider 无法识别图片来源的问题。
- 🔗 https://github.com/anomalyco/opencode/pull/41455

### 9. 恢复孤儿推理流部分
- **#41630** · 作者: bvolpato · 状态: OPEN
- AI SDK 报告缺失 reasoning/text 起点后仍继续流式传输，此前 OpenCode 会将其升级为错误，现在改为恢复零散推理流。
- 🔗 https://github.com/anomalyco/opencode/pull/41630

### 10. Anthropic prompt 缓存命中率改进
- **#14743** · 作者: bhagirathsinh-vaghela · 状态: OPEN
- 通过 system split 与 tool 稳定性修复跨仓库/跨会话缓存 miss，同会话内已有缓存正常工作。关闭 #5416/#5224。
- 🔗 https://github.com/anomalyco/opencode/pull/14743

---

## 功能需求趋势

### 1. 原生会话生命周期管理
- `/goal` 持久会话目标（#27167, 128👍）是当前最高票需求；另有 worktree 工作区切换（#36048）、草稿按会话持久化（#41614）等，说明社区期待从“对话工具”走向“会话管理平台”。

### 2. Web/Desktop UI 可用性补全
- 项目选择器故障（#39434/#37611/#37005）、退出 splash 可配置（#38010）、“复制为 Markdown”（#14041/#41609）——桌面与 Web 端的基础体验仍有明显缺口。

### 3. 流式传输可靠性
- SSE 中断（#38458）、chunkTimeout 不覆盖 EventStream（#26487）、中止流被记录为干净停止（#37852）——流式稳定性是影响可信度的关键问题。

### 4. V2 架构升级
- Agent/Mode 对模型可见性（#40474）、每用户数据目录（#41639）、V2 beta 构建（#41626/#41627）——V2 已从“实验性”进入 beta 流程，但 v1 parity 仍有差距。

### 5. 模型/Provider 兼容性与元数据准确性
- DeepSeek 1M 上下文被 cap（#40958）、MiMo 视频输入无效（#40642）、Copilot 多轮 404（#37389）——社区对模型能力被错误配置“降级”非常敏感。

---

## 开发者关注点

### 高频痛点：
1. **项目选择器故障**（#39434/#37611/#37961/#37005）——影响 Web 端新用户冷启动，多个 PR 并行修复中
2. **流式中断被静默处理**（#37852/#38458）——无错误提示的数据丢失比显式报错更危险
3. **配置项不生效**（#35432 tool_call、#26487 chunkTimeout）——配置声明与执行路径不一致
4. **会话切换状态丢失**（#36203/#41614）——草稿和输入框内容与 session 绑定关系混乱
5. **Windows 安装/路径问题**（#1945/#14074）——npm 权限、PATH 识别不稳定

### 社区情绪：功能需求票（/goal）获得 128 👍 说明用户开始将 OpenCode 作为日常主力工具，对会话状态持久性、流式正确性、模型能力准确性的要求随之提高；V2 beta 构建与核心服务重构表明项目正为更大的架构调整做准备。

---

*本日报数据来源于 GitHub `anomalyco/opencode` 仓库，统计截至 2026-08-11。*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报 — 2026-08-11

## 今日速览

过去 24 小时 Pi 仓库无新版本发布，社区重点转向 **Bug 修复与 TUI 全屏体验增强**。GitHub Copilot 登录相关问题（WSL 挂起、429 限流）仍是用户关注焦点；同时 Cloudflare AI Gateway 传输、全屏转录搜索、子代理配置继承等 PR 正积极推进。多起 Issue 被标记为 `no-action` 关闭，反映出维护者在快速分流社区反馈。

## 社区热点 Issues

### 1. WSL 下 Copilot 登录挂起 — 高热度
**#6187** [OPEN] | 评论 21
浏览器设备授权已完成，但 WSL 终端中的 Pi 客户端检测不到授权状态，一直卡在登录中。
[GitHub](https://github.com/earendil-works/pi/issues/6187)
> 社区最活跃的 Issue 之一，WSL 环境兼容性问题持续影响大量开发者。

### 2. Copilot 登录触发 429 限流
**#7850** [CLOSED] | 评论 4 | 👍 3
GitHub 设备授权成功后，Pi 向 Copilot 登录时返回 `429 Too Many Requests`，在启用了 20+ 可用模型的 Copilot 组织中必现。
[GitHub](https://github.com/earendil-works/pi/issues/7850)
> 企业/组织用户受影响面大，已有 3 个 👍 票。

### 3. Bedrock 非法工具调用“毒化”会话
**#7782** [CLOSED] | 评论 4
Pi 接受了 Bedrock 生成的包含空属性名 `("": "")` 的非法工具调用，并将其持久化后每次重放，导致 Bedrock 持续拒绝请求、会话永久卡死。
[GitHub](https://github.com/earendil-works/pi/issues/7782)
> 属高危数据完整性问题，官方已通过 PR #7882 修复。

### 4. DeepSeek 自定义 baseUrl 大小写导致 maxTokens 失效
**#7886** [CLOSED] | 评论 4
同一 hostname 使用 `https://api.deepseek.com` 正常，但换用 `https://API.DeepSeek.COM` 后 `maxTokens: 16` 不再生效，说明 hostname 规范化存在缺陷。
[GitHub](https://github.com/earendil-works/pi/issues/7886)

### 5. Alt+Enter 被 10ms 超时拆包导致任务中止
**#7876** [CLOSED] | 评论 4
无 Kitty 协议环境下（tmux/SSH），Alt+Enter 以 `ESC`+`CR` 发送；若两字节间隔超过 10ms，`StdinBuffer` 会单独释放 `ESC`，被误判为 interrupt 而中止运行中任务。
[GitHub](https://github.com/earendil-works/pi/issues/7876)
> 已由 PR #7899 修复（超时窗口放宽至 100ms）。

### 6. Edit 工具模糊匹配对空白差异过于敏感
**#7836** [OPEN] | 评论 3 | 👍 1
`normalizeForFuzzyMatch` 不折叠连续空白或去除行首缩进，导致内容相同但空白格式不同的 `oldText` 无法通过模糊匹配，小模型尤易踩坑。
[GitHub](https://github.com/earendil-works/pi/issues/7836)

### 7. Bun 运行时下 0.84.0/0.84.1 无法启动
**#7846** [OPEN] | 评论 2 | 👍 1
Bun 环境下 `zlib.createZstdDecompress is not a function` 异常，undici 内部依赖缺失导致 Pi 持续崩溃。
[GitHub](https://github.com/earendil-works/pi/issues/7846)

### 8. 全局 Undici dispatcher 继承 16KiB 头大小限制
**#7791** [OPEN] | 评论 2
Pi 安装 `EnvHttpProxyAgent` 为全局 dispatcher 时未设置 `maxHeaderSize`，导致合法的大响应头被 Node 默认 16KiB 限制拒绝（`UND_ERR_HEADERS_OVERFLOW`）。
[GitHub](https://github.com/earendil-works/pi/issues/7791)

### 9. cloudflare-ai-gateway 缺少 strict:false
**#7896** [OPEN] | 评论 2
Pi 0.84.1 中 `cloudflare-ai-gateway/gpt-5.6-sol` 序列化工具时省略 `strict:false`，使可选字段被误判为必填；同模型走 `openai/` 前缀则正常。
[GitHub](https://github.com/earendil-works/pi/issues/7896)

### 10. TUI 全屏模式在 Orca 终端中渲染损坏
**#7917** [CLOSED] | 评论 2
`tuiMode: "fullscreen"` 下，Pi 在 Orca 内嵌终端中显示渲染错乱，严重时整个 Orca 应用冻结、GPU 飙升。
[GitHub](https://github.com/earendil-works/pi/issues/7917)

---

## 重要 PR 进展

### 1. 修复 plan-mode 进度追踪不可靠
**#7918** [CLOSED]
`getTextContent` 现在也会读取 `thinking` 内容；增强对 `[DONE:n]` 标记的容错解析。解决 plan-mode 示例中步骤永不勾选的问题。
[GitHub](https://github.com/earendil-works/pi/pull/7918)

### 2. TUI 全屏模式新增转录搜索
**#7913** [OPEN]
为全屏模式实现基础搜索功能，快捷键 `Ctrl+Shift+f`（mitsuhiko 提交）。
[GitHub](https://github.com/earendil-works/pi/pull/7913)

### 3. 清理 Bedrock 空工具参数键
**#7882** [CLOSED]
仅在重放工具参数给 Bedrock 时递归移除空属性名，保留流式工具参数的原始会话数据不变。修复 #7782。
[GitHub](https://github.com/earendil-works/pi/pull/7882)

### 4. 全屏固定顶栏
**#7906** [CLOSED]
全屏模式下在转录滚动区上方新增固定顶栏：左侧显示缩写 cwd 与 git 分支，右侧显示上下文用量与自动压缩状态。
[GitHub](https://github.com/earendil-works/pi/pull/7906)

### 5. 修复 Alt+Enter 拆分中断
**#7899** [OPEN]
将转义序列超时从 10ms 放宽到 100ms，确保 `ESC`+`CR` 不会因 stdin 字节间隔被拆分为 interrupt。
[GitHub](https://github.com/earendil-works/pi/pull/7899)

### 6. Cloudflare AI 绑定上的 Gateway 传输
**#7901** [OPEN]
新增通过 `env.AI.run()` 走 Cloudflare Workers AI Gateway 的传输支持，对应 issue #7838。
[GitHub](https://github.com/earendil-works/pi/pull/7901)

### 7. 子代理继承当前会话配置
**#7897** [OPEN]
子代理不再固定模型/思考级别，改为跟随当前活动会话的配置，避免多个会话互相覆盖，影响更直观。
[GitHub](https://github.com/earendil-works/pi/pull/7897)

### 8. 全屏会话失焦时避免无效重绘
**#7892** [OPEN]
全屏模式启用焦点上报后，失焦不再触发重绘请求，消除 iTerm2 中的虚假“新输出”活动指示；同时保留失焦取消鼠标交互行为。
[GitHub](https://github.com/earendil-works/pi/pull/7892)

### 9. Edit 工具参数单对象 → 数组归一化
**#7904** [CLOSED]
`edits` 传单对象或单对象 JSON 字符串时自动包装为数组，兼容部分模型输出格式。
[GitHub](https://github.com/earendil-works/pi/pull/7904)

### 10. 系统提示词末尾追加换行
**#7887** [CLOSED]
当前工作目录后无换行符，导致首个用户消息直接贴着路径拼接，现在补齐尾随换行。
[GitHub](https://github.com/earendil-works/pi/pull/7887)

---

## 功能需求趋势

- **TUI 全屏模式成为主战场**：搜索、固定顶栏、单行滚动、失焦重绘优化等多项 PR/Issue 集中出现，表明全屏 UI 正从小众实验走向生产级体验。
- **AI 网关与多运行时支持**：Cloudflare AI Gateway 传输、Amazon Bedrock Mantle OpenAI Responses Provider（#6216）、Muse Code 作为 subagent 运行时（#7877），社区对“模型不可知”接入的需求持续上升。
- **子代理与会话配置继承**：多个 Issue/PR 关注子代理会话隔离与配置跟随（#7897），用户在管理多会话时希望获得更直观的层级行为。
- **文档与 CLI 完善**：新增 man page（#7888）这一提议得到推进，npm 搜索索引问题（#7885）也说明包生态的可发现性开始被关注。

## 开发者关注点

- **Copilot 登录仍是最大痛点**：WSL 挂起（#6187）与 429 限流（#7850）跨多种环境存在，对依赖 Copilot 的企业组织用户尤甚。
- **工具调用健壮性不容乐观**：Bedrock 空键“毒化会话”（#7782）、响应截断（#7855）、AI21 API 退役（#7869）等多起事件说明 provider 适配层仍需加强校验与隔离。
- **编辑模糊匹配过于严格**：空白宽度差异即可导致 Edit 失败（#7836），小模型在工具参数上更容易踩坑，建议在归一化中折叠空白、忽略前导缩进。
- **运行时兼容性隐患**：Bun 下 zstd 缺失（#7846）、Undici 16KiB 头限制（#7791）、并发 RPC 会话替换竞态（#7862），对安装路径和运行时的测试覆盖提出更高要求。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报（2026-08-11）

## 今日速览

Qwen Code 正式发布 **v0.21.9**，核心亮点是原生支持从目录、压缩包、Git 仓库、URL 和 npm 包安装 Qoder 插件，并启用 Local Control 二维码配对。社区讨论热度集中在 **多会话 Fleet 架构**、**WebShell 功能重构** 以及 **会话恢复/终端渲染稳定性** 上；多个 P1/P2 Bug 修复和 CI 改进也在快速推进。

## 版本发布

### v0.21.9（正式版）
- **新增**：支持从目录、归档、Git 仓库、URL 和 npm 包安装 Qoder 插件，并自动加载系统提示词。([#8661](https://github.com/QwenLM/qwen-code/pull/8661))
- **新增**：Local Control 可通过二维码配对使用。

### v0.21.9-nightly.20260811.8c90697ace
- **测试**：覆盖上下文刷新标记跨轮次保留的测试用例。([#8809](https://github.com/QwenLM/qwen-code/pull/8809))

## 社区热点 Issues

以下是过去 24 小时更新最活跃或影响较大的 10 个 Issue：

1. **[#8871] ACP 子进程在 `qwen serve` 模式报 “Unknown argument: acp”**  
   [https://github.com/QwenLM/qwen-code/issues/8871](https://github.com/QwenLM/qwen-code/issues/8871)  
   `qwen serve --http-bridge=true` 启动的 ACP 子进程无法解析 `--acp` 参数，导致 token 认证失败（401）。该问题直接阻断 serve 模式下的 ACP 功能，社区已报告复现步骤。

2. **[#8863] 内置 Provider 更新静默覆盖 `model.name` 和 `model.baseUrl`（已关闭）**  
   [https://github.com/QwenLM/qwen-code/issues/8863](https://github.com/QwenLM/qwen-code/issues/8863)  
   P1 回归问题：当用户当前模型属于自建代理或第三方 Provider 时，选择 “Update all” 会把模型选择悄悄改为内置列表第一个模型并清空 baseUrl。该 Issue 已关闭，但仍提醒关注配置安全。

3. **[#8860] OpenAI API 日志无限增长，两月可达 95GB/34 万文件**  
   [https://github.com/QwenLM/qwen-code/issues/8860](https://github.com/QwenLM/qwen-code/issues/8860)  
   开启 `enableOpenAILogging` 后，每次 API 调用都会写入独立 JSON 文件，且无轮转/保留策略，磁盘空间极易被耗尽。社区呼吁尽快加入日志轮转与配额管理。

4. **[#8885] 会话 rewind 索引与自动 user-role 历史条目错位（P1）**  
   [https://github.com/QwenLM/qwen-code/issues/8885](https://github.com/QwenLM/qwen-code/issues/8885)  
   PR #8838 暴露的既有问题：Cron 提示、后台通知、停止续写等自动 user-role 条目未被 ChatRecordingService 的 turn 边界正确映射，导致 rewind 后内容错位。

5. **[#8678] 大会话恢复超时时应保留当前会话（P1）**  
   [https://github.com/QwenLM/qwen-code/issues/8678](https://github.com/QwenLM/qwen-code/issues/8678)  
   `qwen serve` 在恢复大型会话超时后可能丢失当前会话。PR1（#8691）已合并部分修复，但问题尚未完全关闭，仍需关注。

6. **[#8718] RFC：独立 Qwen 会话的原生协调机制**  
   [https://github.com/QwenLM/qwen-code/issues/8718](https://github.com/QwenLM/qwen-code/issues/8718)  
   社区讨论最热烈的方向之一：希望 Leader 能派发多个 worker 会话并保持交互、统一收集结果。该 RFC 已衍生出多个 Fleet stage Issue，是未来多智能体功能的基础。

7. **[#8877] macOS 上语音听写权限警告每次启动都出现**  
   [https://github.com/QwenLM/qwen-code/issues/8877](https://github.com/QwenLM/qwen-code/issues/8877)  
   用户未主动使用语音听写时，启动后聊天历史中也会自动出现麦克风权限警告，有时甚至出现两次，严重打扰正常使用。

8. **[#8845] WebShell：重构 Channel 策略、会话与工作区管理**  
   [https://github.com/QwenLM/qwen-code/issues/8845](https://github.com/QwenLM/qwen-code/issues/8845)  
   希望为每个内置 adapter 暴露共享 Channel 访问、会话隔离和工作区所有权控制，并重构 Channel 管理器使其连接状态与常见操作更直观。对应 PR #8848 已提交。

9. **[#8835] 仓库卫生扫描：2026-W33 报告 8 个安全问题（仅报告）**  
   [https://github.com/QwenLM/qwen-code/issues/8835](https://github.com/QwenLM/qwen-code/issues/8835)  
   自动化扫描发现 ACP 会话 cwd / allowed-roots 包含性判断、worktree sidecar 包含等存在 `startsWith('..')` 类校验缺陷，属于安全敏感路径，建议人工优先复核。

10. **[#8557] 终端窗口缩小时，scrollback 中重复打印 transcript 内容**  
    [https://github.com/QwenLM/qwen-code/issues/8557](https://github.com/QwenLM/qwen-code/issues/8557)  
    macOS + Warp 环境下，缩小终端宽度会触发历史 transcript 块在 scrollback 中重复堆叠。该问题与 #8849、#8124 同类，PR #8831 正在系统性修复。

## 重要 PR 进展

以下 10 个 PR 在过去 24 小时内有更新，且功能或修复意义较大：

1. **[#8677] OpenTUI 渲染后端（React track）：无闪烁、原生鼠标支持**  
   [https://github.com/QwenLM/qwen-code/pull/8677](https://github.com/QwenLM/qwen-code/pull/8677)  
   新的 OpenTUI 后端将重写整个终端 UI 渲染层，目标是解决 resize 闪烁、鼠标支持以及多面板一致性，属于重大架构升级。

2. **[#8817] 支持从任意对话节点 Fork 出新会话**  
   [https://github.com/QwenLM/qwen-code/pull/8817](https://github.com/QwenLM/qwen-code/pull/8817)  
   此前只能基于最新会话状态分支，无法可靠定位较早的 Assistant 响应。该 PR 让用户可以从任意可见消息创建分支会话。

3. **[#8848] WebShell：重构 Channel 策略和工作区管理**  
   [https://github.com/QwenLM/qwen-code/pull/8848](https://github.com/QwenLM/qwen-code/pull/8848)  
   提供共享直连消息、组访问、会话路由、工作区所有权控制，并支持选择所有 sender/group 策略及管理 allowlist。

4. **[#8874] WebShell：工作区文件上传**  
   [https://github.com/QwenLM/qwen-code/pull/8874](https://github.com/QwenLM/qwen-code/pull/8874)  
   支持拖拽上传文件到工作区，包含进度、取消、自动重命名冲突、内联文件卡片等能力。

5. **[#8675] WebShell：模型专属推理控制（Thinking/Effort）**  
   [https://github.com/QwenLM/qwen-code/pull/8675](https://github.com/QwenLM/qwen-code/pull/8675)  
   在 Core、ACP、daemon、SDK 和 WebShell 全链路支持按模型声明 Thinking/Effort 可选控制及档位，首个注册模型为 qwen3 系列。

6. **[#8831] 修复 resize/唤醒时的 Banner 重复与拖拽闪烁**  
   [https://github.com/QwenLM/qwen-code/pull/8831](https://github.com/QwenLM/qwen-code/pull/8831)  
   定位到 #8557 等渲染问题根因：宽度缩小后使用旧宽度计算的行数清屏，导致 banner 残留并不断叠加。该 PR 系统性消除终端无关的 resize/wake 伪影。

7. **[#8687] daemon：跨 worktree Git 操作守卫**  
   [https://github.com/QwenLM/qwen-code/pull/8687](https://github.com/QwenLM/qwen-code/pull/8687)  
   在 `qwen serve` 中拦截模型发起的 `run_shell_command`，识别 `-C`、`--work-tree`、`--git-dir` 等逃逸操作，阻止越权修改会话外 Git 仓库。

8. **[#8894] review：`capture-tui` 子命令——用截图验证渲染类问题**  
   [https://github.com/QwenLM/qwen-code/pull/8894](https://github.com/QwenLM/qwen-code/pull/8894)  
   回顾流程中新增终端截图验证能力：在私有 tmux server 中运行被测代码，精确截取面板像素，让 “面板在 80 列被截断” 这类断言有据可查。

9. **[#8895] CI：流式输出 autofix agent 进度**  
   [https://github.com/QwenLM/qwen-code/pull/8895](https://github.com/QwenLM/qwen-code/pull/8895)  
   让 headless Qwen 进程输出流式部分进度，空闲看门狗可区分活跃工具工作和无输出沙箱，并补充了回归测试。

10. **[#8896] 桌面版：关闭 0.1.1 回归缺口**  
    [https://github.com/QwenLM/qwen-code/pull/8896](https://github.com/QwenLM/qwen-code/pull/8896)  
    修复按住录音手势在 React 状态未提交时无法停止录制、正常 SSE 流结束被误报为断线，以及 macOS release 构建签名再生成等问题。

## 功能需求趋势

从近期 Issues 和 PR 中可以提炼出以下社区最关注的功能方向：

- **多智能体 / Fleet 协作**：以 #8718 为 umbrella，出现 #8840（Stage 1A 合约）、#8841（Stage 1B MVP）、#8842（Stage 2 持久化）、#8843（Stage 3 终端 attach）等系列规划，社区对“由 leader 调度多个独立 worker 会话”的诉求非常明确。
- **WebShell 成为一级交互入口**：Channel 策略重构、文件上传、推理控制、思维链与工具进度展示、会话目录共享调度等 PR 密集落地，WebShell 正在从简单聊天界面走向完整运维控制台。
- **终端渲染质量与一致性**：多个终端 resize / 闪烁 / scrollback 重复 Issue 推动 OpenTUI 后端重写与渲染修复，开发者对终端体验的细节要求很高。
- **会话状态持久化和恢复健壮性**：rewind 索引、scheduled prompt 恢复、大会话 restore 超时、session load timeout 重试等，表明长会话场景在日常使用中占比提升，恢复链路需要更稳定。
- **安全与信任边界**：围绕 `startsWith('..')` 路径包含、跨 worktree Git 操作、`.env` 加载信任、daemon 文件读写权限对齐的修复/审计持续出现，安全团队在收紧 serve 模式的攻击面。

## 开发者关注点

社区反馈中的高频痛点与诉求包括：

- **终端操作反馈异常**：缩小窗口导致内容重复、Banner 缺失/闪烁、输入框抖动，影响日常沉浸式编码。
- **会话恢复与多会话管理**：大会话恢复超时且可能丢失当前会话、ACP 自动任务提示在恢复后缺失、rewind 方向索引错位，开发者希望“恢复”像普通文件打开一样可靠。
- **Provider 更新破坏自定义配置**：多次出现内置 Provider 更新后用户自定义模型、baseUrl 被静默覆盖，社区对配置变更的可预测性要求强烈。
- **serve/daemon 模式下的 ACP 集成不稳定**：包括 `--acp` 参数无法解析、认证 401、权限流与实际写入不一致等，直接影响 ACP/HTTP bridge 的用户。
- **磁盘与日志管理**：OpenAI API 日志无限制增长到 95GB 的案例引发共鸣，开发者普遍需要日志轮转、采样、按调用量配额等机制。
- **误报与重复警告**：“Repetitive tool calls detected” 被频繁误判、macOS 麦克风权限每次启动弹出，提示需要更智能的检测触发时机和更克制的系统提示。

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI 社区动态日报（2026-08-11）

> 数据来源：Hmbown/CodeWhale（原 DeepSeek-TUI 仓库）

## 1. 今日速览

过去 24 小时没有新的 GitHub Release，但代码库出现多项关键动作：子代理递归预算越权 bug 被修复（#5317），`codewhale-core` 开始接管主要请求准备逻辑（#5300），EPIC-005 板条箱分解正式立项（#5316）。整体趋势显示：社区正在收紧子代理边界校验，并将核心能力从 TUI 层向下沉淀。

## 2. 版本发布

过去 24 小时内未检测到新的 Release 版本。

> 注：PR #5315 已关闭并标记为 v0.9.6 发布，该版本为“减法发布”，具体内容见下文 PR 列表。

## 3. 社区热点 Issues

### 过去 24 小时内更新的全部 3 个 Issue

#### #2870 [CLOSED] EPIC: staged command-boundary refactor for #2791  
- **链接**：https://github.com/Hmbown/CodeWhale/issues/2870  
- **重要性**：这是命令边界重构的追踪 EPIC，将大目标拆解为多个可独立合并的 PR，直接影响后续命令解析、快捷键体系与插件机制。  
- **社区反应**：共 20 条评论，讨论度较高，说明这是一次迭代式重构，而非一次性大改。

#### #5253 [CLOSED] bug(subagents): nested max_depth can widen the root session depth budget  
- **链接**：https://github.com/Hmbown/CodeWhale/issues/5253  
- **重要性**：一个安全与配置一致性方向的关键缺陷。后代子代理可通过显式 `max_depth` 扩大根会话的递归预算，导致“配置的深度上限”形同虚设。  
- **社区反应**：评论数较少，但仅隔 1 天即被 PR #5317 修复，属于高优先级问题。

#### #5316 [OPEN] EPIC-005: CodeWhale TUI Crate Decomposition (Umbrella)  
- **链接**：https://github.com/Hmbown/CodeWhale/issues/5316  
- **重要性**：TUI 板条箱分解的伞式 EPIC，后续所有相关子 EPIC 与 FEAT 都将在该 Issue 下汇合，标志着社区希望把单体 crate 拆成更易测试、更易维护的模块集合。  
- **社区反应**：刚创建，暂无评论，但预计会成为近期高活跃的跟踪问题。

## 4. 重要 PR 进展

### 过去 24 小时内更新的全部 4 个 PR

#### #5277 [OPEN] build(deps): bump docker/login-action from 4.5.2 to 4.6.0  
- **链接**：https://github.com/Hmbown/CodeWhale/pull/5277  
- **说明**：Dependabot 自动提交的依赖升级，将 CI 流程中的 Docker 登录 Action 从 4.5.2 升级到 4.6.0。属于日常维护，无预期破坏性变更。

#### #5317 [CLOSED] fix(subagents): cap nested max_depth by inherited budget  
- **链接**：https://github.com/Hmbown/CodeWhale/pull/5317  
- **说明**：修复 #5253。在显式 `max_depth` 分支中改用 `inherited.min(..)`，确保嵌套子代理的递归深度被严格限制在根/会话预算之内，并与 profile-hint 分支的行为保持一致。

#### #5300 [CLOSED] refactor(core): own primary request preparation  
- **链接**：https://github.com/Hmbown/CodeWhale/pull/5300  
- **说明**：将原属于 TUI crate 的生产级 `MessageRequest` DTO 家族迁入 `codewhale-core`，并新增纯构造函数 `prepare_primary_turn_request`。该 PR 推动核心层真正负责请求准备，TUI 不再拼凑业务细节。

#### #5315 [CLOSED] chore(release): ship v0.9.6  
- **链接**：https://github.com/Hmbown/CodeWhale/pull/5315  
- **说明**：v0.9.6 发布准备 PR。标题明确这是“减法发布”：更少的运行时守卫、更稳定的基础提示词、更真实的 provider 结束状态、更小的压缩路径。整体更强调确定性和稳定性。

## 5. 功能需求趋势

基于当前更新的 Issue 与 PR，社区的主要关注方向包括：

- **架构模块化**：#5316 的板条箱分解与 #2870 的命令边界重构表明，社区希望 TUI 不再是单一大块，而是一个可插拔、可独立测试的模块集。
- **子代理深度控制**：#5253 的修复显示，用户对递归预算等安全边界有强烈诉求——即使配置了上限，也不允许被子代理的嵌套参数“越权”覆盖。
- **核心/TUI 职责分离**：#5300 将请求准备下沉到 `codewhale-core`，预示未来核心层将承载更稳定的业务逻辑，TUI 只保留表现层职责。
- **交付稳定性**：v0.9.6 的减法发布说明社区开始追求“少而可靠”的交互行为，而非持续堆叠新功能。

## 6. 开发者关注点

- **边界执行一致性**：递归深度预算被绕过（#5253）是当前最典型的痛点。开发者希望配置一旦生效，便不可被嵌套调用破坏。
- **重构节奏与复杂度**：EPIC #2870 与 #5316 并行推进，社区在表达重构意愿的同时，也面临大量合并层带来的协作压力。
- **核心能力的可复用性**：#5300 显示社区认为请求准备不应属于 UI 层；它需要被测试、被复用，甚至可能成为未来 SDK 的雏形。
- **发布过程透明性**：#5315 使用私有 ledger 跟踪 release 状态，而非公开 Issue。对社区成员来说，发布细节的可见性有所降低，但也减少了公开噪音。

</details>

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar) 自动生成。*