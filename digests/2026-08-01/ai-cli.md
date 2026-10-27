# AI CLI 工具社区动态日报 2026-08-01

> 生成时间: 2026-08-01 03:32 UTC | 覆盖工具: 9 个

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

# AI CLI 工具横向对比分析报告（2026-08-01）

## 1. 生态全景

当前 AI CLI 工具赛道已进入**从"可用"到"可信"的成熟化阵痛期**。九大主流工具（Claude Code、OpenAI Codex、Gemini CLI、Copilot CLI、Kimi Code CLI、OpenCode、Pi、Qwen Code、DeepSeek TUI/CodeWhale）在同一 24 小时内均出现与**计费/用量核算、静默降级、会话恢复、Windows/WSL 兼容性**相关的负面反馈，说明行业共性瓶颈已超越单点功能竞争。头部工具（Codex、Gemini、Qwen）保持高强度发版节奏，而社区贡献重心正从"加功能"转向"修可靠性"——回归 bug、数据安全、上下文压缩（compaction）成为高频关键词。跨工具层面，"AI 自主性边界"（何时该等用户、何时该继续执行）正在取代功能丰富度，成为用户最关心的问题。

## 2. 各工具活跃度对比

| 工具 | 24h Release | 活跃 Issues（精选） | 社区互动强度 | PR 动态 | 迭代节奏 |
|---|---|---|---|---|---|
| **Claude Code** | 0 | 10 个，最高 51 评论 / 111 👍 | 高：计费争议 issue 达 60+ 评论，跨 3 issue | 6 个（4 open / 2 closed），含 TUI 延迟架构级修复 | 平稳期，无新版本 |
| **OpenAI Codex** | 3 个 alpha（rust-v0.147.0 系列） | 10 个，最高 186 👍 / 64 评论 | 极高：43 个 PR 合并 | 43 个 merged（10 个精选），实时委托/插件搜索为主题 | 极速迭代 |
| **Gemini CLI** | 3 个（nightly + preview + stable） | 10 个，多个 P1 Agent 稳定性问题 | 中高：P1 标签密度高 | 10 个，含 v0.53.0 回归修复（#28607） | 快；多分支同步 backport |
| **GitHub Copilot CLI** | 1 个（v1.0.78-0） | 10 个，回归类占 3 条 | 中：最高 7 评论 / 6 👍 | 仅 2 个，均为低质量/垃圾 PR | 版本迭代快，社区贡献弱 |
| **Kimi Code CLI** | 0 | 4 个（全部列出） | 低：最高 23 👍（远程控制） | 1 个（工具参数双重编码修复） | 早期阶段，社区规模小 |
| **OpenCode** | 0 | 10 个，最高 23 评论 / 20 👍 | 中高：缓存/性能讨论集中 | 10 个，文件去重、AIRGAP、后台任务等 | 快速迭代，社区活跃 |
| **Pi (pi-mono)** | 0 | 10 个，最高 19 评论 | 中：compaction 相关 5+ issue | 10 个（4 已合入），x64 基线、JSON 线性输出 | 社区提交密集，维护者响应快 |
| **Qwen Code** | 1 个（v0.21.2） | 10 个，最高 31 评论（daemon RFC） | 中高：Anthropic 兼容性讨论密集 | 10 个，覆盖 daemon 内存治理、会话 fork、桌面端 | 快；daemon 多工作区为主线 |
| **DeepSeek TUI (CodeWhale)** | 1 个（v0.9.3） | 8 个（全部列出） | 低：最高 5 评论 | 17 个（10 人工 + 7 依赖升级） | 活跃但有明确边界（个人项目） |

> 注：Issue/PR 数为各日报精选数量，非仓库全量；互动强度依据评论数与 👍 数综合判断。

## 3. 共同关注的功能方向

| 方向 | 涉及工具 | 具体诉求 |
|---|---|---|
| **用量/计费透明度** | Claude Code、Codex、Gemini、Pi、Copilot（ACP 不暴露用量） | Claude Code 的 Fable 5 误报扣费、Codex 的 GPT-5.6 Sol 额度异常、Pi 的 auto-compaction 触发滞后——"额度去哪了"已成为跨生态的信任危机 |
| **Windows/WSL 兼容性** | Claude Code、Codex、Copilot、Pi、Qwen、OpenCode | GPU 进程崩溃（Claude Code/Codex）、WSL Git 误判（Codex）、登录挂起（Pi）、终端重绘异常（Qwen）、沙箱权限缺口——每个工具都有 Windows 专属回归 |
| **新模型接入链路** | Claude Code、Codex、Gemini、OpenCode、Pi、DeepSeek TUI | Fable 5、GPT-5.6、DeepSeek V4 Flash、Kimi K3 上线引发的模型不可选、静默降级、404 回退问题，模型发布与 CLI 适配存在系统性时滞 |
| **会话生命周期与上下文压缩** | Claude Code、Codex、Copilot、Gemini、Kimi、Pi、Qwen、DeepSeek | 跨端历史同步、会话恢复 OOM、events.jsonl 超限、Auto Memory 死循环、compaction 后挂起——长会话可靠性是全行业短板 |
| **AI 可控性与执行边界** | Codex、Copilot、Gemini、Claude Code | Codex #28969（禁用自动 resolve，186 👍）、Copilot #4318（任务完成逻辑覆盖用户指令）、Gemini 子代理绕过权限、Claude Code 静默降级——用户要求"显式阻塞/放行"控制权 |
| **缓存与 token 成本优化** | OpenCode、Qwen、Pi、Claude Code | system-reminder 位置破坏 KV cache（OpenCode #23595）、工具发现使 prompt 缓存失效（Qwen #6721）、base64 图片重复发送（Codex #28316） |
| **扩展生态（MCP/插件/ACP）** | Codex、Gemini、Copilot、Claude Code、OpenCode、Pi | 插件远程搜索、MCP OAuth 刷新、ACP ask_user、TUI 插件发现、Extension API 文档契约——扩展点是机遇也是稳定性风险 |

## 4. 差异化定位分析

| 工具 | 定位与目标用户 | 技术路线 | 当前核心矛盾 |
|---|---|---|---|
| **Claude Code** | Anthropic 生态旗舰，面向专业开发者/团队 | 深度绑定 Claude 模型，桌面端 + CLI 双端 | 新模型（Fable 5）配套计费/降级逻辑未跟上，社区信任受挫 |
| **OpenAI Codex** | OpenAI 生态，重 execution/autonomy | Rust 实现，实时委托、线程管理 API、沙箱 V8 | 功能推进极快（43 PR/日）但 Windows/WSL 回归与用量争议同步爆发 |
| **Gemini CLI** | Google 生态，面向 Agent 重度用户 | 子代理架构 + Auto Memory，nightly/preview/stable 三级发版 | 子代理可靠性（挂起、误报成功）为第一优先级 |
| **Copilot CLI** | GitHub 企业用户 | ACP 协议 + GitHub 深度集成，权限审批模式 | 回归频发（计划模式、task_complete、OOM），社区代码贡献不足 |
| **Kimi Code CLI** | Moonshot 生态，国内开发者 | 轻量级 CLI，跟随 Kimi 模型迭代 | 社区尚小，需求聚焦跨设备/跨会话连续性 |
| **OpenCode** | 多模型中立，性能敏感用户 | Go 实现，models.dev 驱动，TUI 插件体系 | 静态模型快照滞后、权限配置被忽略、缓存命中率优化 |
| **Pi (pi-mono)** | 独立开发者/黑客，多 provider | TypeScript，compaction 机制为特色，server 架构演进中 | Compaction 可靠性 + 协议合规（x-client-request-id、thought_signature） |
| **Qwen Code** | 阿里 Qwen 生态 + 企业 | daemon/多工作区服务架构，Anthropic wire 兼容层 | daemon 资源治理、工具调用格式漂移、Anthropic 接入"填坑期" |
| **DeepSeek TUI (CodeWhale)** | DeepSeek 用户/极客，CJK 开发者 | Rust + TUI，单一维护者主导 | File 编辑工具在真实项目（CRLF/中文注释）中的可靠性，品牌转型期 |

## 5. 社区热度与成熟度

- **第一梯队（高热度、高成熟度）**：**Claude Code**（issue 讨论深度最高，但发版节奏放缓）、**OpenAI Codex**（互动量与 PR 量均断层领先，处于"功能狂奔、稳定性落后"阶段）、**Codex 与 Claude Code** 是仅有的出现 100+ 👍 级社区诉求的工具。
- **第二梯队（快速迭代、社区共建中）**：**Gemini CLI**（P1 治理规范、三级发版纪律值得借鉴，但社区互动绝对值偏低）、**Qwen Code**（RFC 驱动的 daemon 架构演进思路清晰，生态处于上升期）、**OpenCode**（社区贡献密集，缓存/性能方向专精）。
- **第三梯队（小而活跃）**：**Copilot CLI**（用户基数大但开源社区贡献弱，PR 质量低）、**Pi**（个人项目但提交密度惊人、维护者响应快，compaction 方向的讨论深度值得关注）。
- **早期阶段**：**Kimi Code CLI**（仅有 4 个活跃 issue，需求尚在验证期）、**DeepSeek TUI**（依赖单一维护者，但 Dependabot 与社区 PR 说明已建立基本贡献生态）。

## 6. 值得关注的趋势信号

1. **计费/用量透明度将成为留存的胜负手**：Claude Code、Codex、Gemini 三个头部工具同时因"额度显示与实际不符、静默降级"引发信任危机，而信任一旦受损比功能缺失更难修复。开发者应关注各工具用量仪表盘的数据口径统一进度。

2. **"AI 自主性边界"正在从技术问题变为产品问题**：Codex 的 186 👍 诉求（禁用 60 秒自动 resolve）、Copilot 的"任务完成逻辑覆盖用户指令"、Claude Code 的"silent fallback"——用户普遍要求更明确的阻塞/放行控制。优先提供"显式确认"机制的工具将获得差异化优势。

3. **Windows/WSL 是 2026 年最大的平台红利与口碑风险**：几乎每个工具的日报都出现 Windows 专属崩溃或 WSL 集成故障，且呈"新版本修复旧问题、引入新问题"的循环。对开发者而言，在 Windows 生产环境采用 AI CLI 前应建立版本回退预案。

4. **长会话可靠性是下一个技术分水岭**：从 Copilot 的 events.jsonl 超 V8 上限、Pi 的 compaction 挂起、到 Claude Code 的 30 天会话自动删除——会话数据的增长已突破各工具的架构预期。"压缩/恢复/迁移"能力将决定工具能否承载真正的日常工作负载。

5. **模型接入链路的"兼容税"在持续累积**：Anthropic wire 格式（Qwen）、OpenAI 兼容 schema（Pi/OpenCode）、models.dev 静态快照滞后（OpenCode）、preview 模型 404（Gemini）——多模型/多 provider 工具的兼容层维护成本被严重低估。选择中立工具时，应评估其 provider 适配的响应速度。

6. **成本优化（缓存/token 压缩）成为社区主动贡献的热点**：OpenCode、Pi、Qwen 均有针对 prompt cache 命中率和上下文体积的 PR/Issue，说明开发者已开始将 token 视为第一成本要素。开源工具在此方向获得社区贡献的效率远高于闭源工具。

7. **安全防护从"防注入"升级为"防误伤"**：Claude Code 的 rm -rf 灾难、Copilot 的安全审查误判、Gemini 的权限绕过、Qwen 的 Windows O_NOFOLLOW 缺口——安全机制本身（静默拦截、过度拦截、跨平台失效）正在成为新的故障源。

---

**给技术决策者的建议**：若追求稳定性与生态成熟度，Claude Code 与 Codex 仍是首选，但需等待 Fable 5 计费问题与 WSL 回归修复窗口；若重视成本与可控性，OpenCode 与 Qwen Code 的缓存优化和 daemon 资源治理路线值得持续跟踪；若以 Agent 自动化为主，Gemini CLI 的 P1 治理体系最健全，但其子代理可靠性问题尚未解决。所有工具都应建立"版本锁定 + 回归测试"的采用策略，避免跟随自动更新踩坑。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告

*数据截止：2026-08-01 | 来源：github.com/anthropics/skills*

---

## 1. 热门 Skills 排行

### ① PR #1298 — skill-creator 核心评估链路修复 ⭐ 最热
**链接**: https://github.com/anthropics/skills/pull/1298
**功能**: 修复 `run_eval.py` 恒定报告 `recall=0%` 的严重缺陷（引用 #556 及 10+ 独立复现），使描述优化循环真正有效；同时修复 Windows 管道读取、触发检测与并行 worker 问题。
**讨论热点**: 该 bug 让整个 description-optimization 循环在"对噪音做优化"，是 skill-creator 工具链中最致命的可靠性问题，社区讨论度断层第一。
**状态**: OPEN

### ② PR #514 — document-typography 文档排版质量检查
**链接**: https://github.com/anthropics/skills/pull/514
**功能**: 检查 AI 生成文档的典型排版缺陷：孤字回行（1–6 个单词溢出至下一行）、孤行标题（section header 滞留页底）、编号错位。
**讨论热点**: 社区共识是"这些问题影响 Claude 生成的每一份文档，但用户几乎从不主动要求排版质量"——该技能补足了文档输出的隐性质量短板。
**状态**: OPEN

### ③ PR #1367 — self-audit 输出审计技能
**链接**: https://github.com/anthropics/skills/pull/1367
**功能**: 交付前审计流水线：Step 0 机械验证所有声明输出文件是否存在 → 按损害严重度优先级的四维度推理审计。声称通用适配任何项目/技术栈/模型。
**讨论热点**: 与 Issue #1385（Reasoning Quality Gate Pipeline）形成提案联动，反映社区对 AI 输出可靠性"门禁"的强烈需求。
**状态**: OPEN

### ④ PR #723 — testing-patterns 测试模式技能
**链接**: https://github.com/anthropics/skills/pull/723
**功能**: 覆盖完整测试栈：Testing Trophy 模型、单元测试 AAA 模式、React 组件测试（Testing Library）、mock 策略、边界用例等。
**讨论热点**: 社区对"该测什么 vs 不该测什么"的测试哲学部分讨论最热，被视为对现有 skill-creator 最佳实践的重要互补。
**状态**: OPEN

### ⑤ PR #486 — ODT 文档技能
**链接**: https://github.com/anthropics/skills/pull/486
**功能**: OpenDocument 格式（.odt/.ods）的创建、模板填充、读取，以及 ODT 转 HTML。
**讨论热点**: 补齐官方文档技能矩阵（pdf/docx/xlsx）中的开源 ISO 标准格式缺口，与 LibreOffice 生态联动。
**状态**: OPEN

### ⑥ PR #83 — 元技能：skill-quality-analyzer + skill-security-analyzer
**链接**: https://github.com/anthropics/skills/pull/83
**功能**: 新增两个元技能：质量分析器从结构/文档（20%）、示例、资源等五维评估 Skill 质量；安全分析器审查技能行为风险。
**讨论热点**: 直接呼应 Issue #492 的信任边界安全隐患，社区对技能安全审查的需求开始显性化。
**状态**: OPEN

### ⑦ PR #1302 — color-expert 色彩专家技能
**链接**: https://github.com/anthropics/skills/pull/1302
**功能**: 自包含色彩知识库：命名系统（ISCC-NBS、Munsell、XKCD、RAL、Ridgway 1912、CSS）、色彩空间选型表（OKLCH 用于色阶、OKLAB 用于渐变、CAM16 等）。
**讨论热点**: 被 frontend-design 等技能依赖的基础设施型设计技能，作者持续更新至 7 月中旬。
**状态**: OPEN

### ⑧ PR #525 — pyxel 复古游戏开发技能
**链接**: https://github.com/anthropics/skills/pull/525
**功能**: 接入 [pyxel-mcp](https://github.com/kitao/pyxel-mcp) 服务，支持 Python 复古/像素/8-bit 游戏开发工作流（写 → 运行截图 → 检查 → 迭代）。
**讨论热点**: 由 Pyxel 引擎作者亲自主笔，是"Skill + MCP 双协议融合"驱动创意开发的示范案例。
**状态**: OPEN

---

## 2. 社区需求趋势

| 需求方向 | 代表 Issue | 热度信号 | 说明 |
|---------|-----------|---------|------|
| **安全与信任边界** | [#492](https://github.com/anthropics/skills/issues/492) | 43 评论 | 社区技能在 `anthropic/` 命名空间下分发，构成信任边界滥用风险，需官方治理 |
| **企业级技能共享** | [#228](https://github.com/anthropics/skills/issues/228) | 16 评论 / 8👍 | 组织内直接共享技能库或分享链接，摆脱 Slack/Teams 手动传文件再逐人导入的低效流程 |
| **工具链可靠性** | [#556](https://github.com/anthropics/skills/issues/556) / [#1169](https://github.com/anthropics/skills/issues/1169) / [#1061](https://github.com/anthropics/skills/issues/1061) | 12+ / 3 / 3 评论 | skill-creator 评估循环 0% 触发率 + Windows 兼容三连击，元工具稳定性成最大痛点 |
| **技能去重/上下文膨胀** | [#189](https://github.com/anthropics/skills/issues/189) / [#1487](https://github.com/anthropics/skills/issues/1487) | 9👍 / 4 评论 | 插件间重复技能耗尽上下文窗口；claude-api 技能单次注入 ~156k tokens |
| **上下文压缩管理** | [#1329](https://github.com/anthropics/skills/issues/1329) | 9 评论 | compact-memory 提案：用符号化表示压缩长时运行代理的持久记忆 |
| **MCP 协议融合** | [#16](https://github.com/anthropics/skills/issues/16) | 4 评论 | 将 Skills 暴露为 MCP 接口，统一 AI 软件 API 协议 |
| **多平台接入** | [#29](https://github.com/anthropics/skills/issues/29) | 4 评论 | AWS Bedrock 等非 Claude.ai 平台的技能使用需求 |

---

## 3. 高潜力待合并 Skills

以下 PR 均为评论活跃、持续更新且尚未合并的新增技能，落地可能性高：

| Skill | PR | 亮点与潜力 |
|-------|----|-----------|
| **document-typography** | [#514](https://github.com/anthropics/skills/pull/514) | 解决'每份文档都受影响'的排版通病，与文档类技能天然互补 |
| **self-audit** | [#1367](https://github.com/anthropics/skills/pull/1367) | 6 月底提交后 7 月初仍更新，与 #1385 提案联动，可能形成质量门禁系列 |
| **testing-patterns** | [#723](https://github.com/anthropics/skills/pull/723) | 测试栈全覆盖，官方仓库目前缺乏体系化测试技能 |
| **ODT** | [#486](https://github.com/anthropics/skills/pull/486) | 补齐文档格式矩阵的 ISO 开源标准缺口 |
| **pyxel** | [#525](https://github.com/anthropics/skills/pull/525) | 引擎作者提交，MCP 集成范式价值高，7 月中旬仍在更新 |
| **color-expert** | [#1302](https://github.com/anthropics/skills/pull/1302) | 设计类技能的基础设施，持续更新至 7 月 |
| **plan-file-hygiene** | [#1479](https://github.com/anthropics/skills/pull/1479) | 7/25 新提交，解决规划产物无生命周期的累积问题（#1417），响应速度快 |

---

## 4. Skills 生态洞察

**一句话总结**：社区当前最集中的诉求是 **skill-creator 工具链可靠性**——0% recall 评估缺陷与 Windows 兼容问题同时霸占 PR 榜与 Issue 榜，已成为生态发展的最大瓶颈；其次是 **文档生成质量与格式覆盖**（排版质检、ODT、PDF/DOCX 修复），反映真实办公场景是技能落地的核心战场——前者决定了"技能能否被高效开发"，后者决定了"技能能否被日常使用"。

---

# Claude Code 社区动态日报 — 2026-08-01

## 今日速览

过去 24 小时无新版本发布，社区焦点集中在 **Fable 5 模型在 Max 计划中被误报"需 usage credits"并静默降级** 的系列问题上（累计已获 60+ 评论，至少 3 个独立 issue）。此外，Windows 桌面端 **GPU 进程崩溃**的同类报告继续累积，数据安全类 issue（rm -rf 灾难性操作）也在持续发酵。

---

## 社区热点 Issues

### 🔥 1. Fable 5 在 Max 计划中被误报 "usage credits required"（最高热度）
[#79337](https://github.com/anthropics/claude-code/issues/79337) · 评论 51 · 👍 20
自 7 月 20 日 Fable 5 成为 Max 计划标准模型第二天起，Mac 端 Claude Code 拒绝运行 Fable 5，静默降级至 Opus 4.8 并误报需要 usage credits。同主题的衍生 issue 包括 [#79441](https://github.com/anthropics/claude-code/issues/79441)（VS Code 扩展，账户仍有 20% 周额度仍被拦截）和 [#82319](https://github.com/anthropics/claude-code/issues/82319)（静默降级未履行用户通知承诺）。这是当前社区影响面最大的计费/授权故障。

### 🔥 2. CLI 与桌面端对话历史同步（高赞需求）
[#28791](https://github.com/anthropics/claude-code/issues/28791) · 评论 30 · 👍 111
创建于 2 月的老 issue 今日仍有更新。用户要求 CLI 与 Claude Code desktop app 之间同步会话历史。111 个 👍 是本期列表中社区呼声最高的功能需求。

### 3. Claude Code Web 无法使用 gh CLI
[#11139](https://github.com/anthropics/claude-code/issues/11139) · 评论 28 · 👍 31
Web 端运行 `gh` CLI 命令时遭遇 Permission Denied，影响 CI 监控、PR 操作等依赖 GitHub CLI 的工作流。

### 4. Windows 桌面端 GPU 崩溃（多 case 持续累积）
多个独立 issue 报告同一现象：打开内置浏览器/执行网页操作时 GPU 进程崩溃（exit code 101457950），导致整个 Claude Desktop 连同 MSIX 包一起损坏。
- [#81159](https://github.com/anthropics/claude-code/issues/81159) · 评论 9 · Opus 5 执行页面操作时触发
- [#81275](https://github.com/anthropics/claude-code/issues/81275) · 评论 7 · 仅打开 Browser pane 即崩溃，Intel/NVIDIA/WARP 软渲染均复现
- [#77768](https://github.com/anthropics/claude-code/issues/77768) · 评论 5 · 每天崩溃 4-5 次，无恢复机制、无 dump

### 5. 灾难性数据丢失：命令展开为 rm -rf /* 后安全分类器阻止了 kill 尝试
[#82165](https://github.com/anthropics/claude-code/issues/82165) · 评论 1
Fable 5 在 WSL2 中以自治模式构建清缓存命令时，命令被展开为破坏性操作并脱离终端运行；安全分类器反而阻止了后续的中断尝试。同类安全问题还有 [#81273](https://github.com/anthropics/claude-code/issues/81273)（反引号命令替换绕过 rm -rf 防护）与 [#80830](https://github.com/anthropics/claude-code/issues/80830)（未经确认删除已存在的目录）。

### 6. 会话限制计算异常
[#83042](https://github.com/anthropics/claude-code/issues/83042) · 创建于 8/1
用户反馈仅 1 个请求就耗尽 5 小时会话窗口，平台 macOS，版本 2.1.220。反馈 ID 已提供，等待官方排查。

### 7. 会话记录默认存储位置不受备份覆盖，30 天后自动删除
[#83019](https://github.com/anthropics/claude-code/issues/83019) · 评论 2
会话 transcript 默认存放在常规备份范围之外，且 30 天自动清除，导致项目历史永久丢失。开发者留存数据的需求值得关注。

### 8. settings.json 中的默认模型设置不被生效
[#82466](https://github.com/anthropics/claude-code/issues/82466) · 评论 1
`"model": "claude-fable-5[1m]"` 已在全局配置中设置多日，但会话启动时模型不被采用，`/model` 手动切换也不可靠。同样与 Fable 5 相关。

### 9. 后台 agent 频繁空闲且不投递最终报告
[#74113](https://github.com/anthropics/claude-code/issues/74113) · 评论 5 · 👍 5
后台 agents 经常进入 idle 状态，最终 SendMessage 报告丢失，需要重新 ping 才能恢复。影响自动化流程的可靠性。

### 10. 自动内存索引加载状态不透明
[#82056](https://github.com/anthropics/claude-code/issues/82056) · 评论 1
会话无法判断 auto-memory 索引是完整加载、截断加载还是完全未加载。开发者要求暴露加载状态，以便排查上下文缺失问题。

---

## 重要 PR 进展

| PR | 状态 | 说明 |
|---|---|---|
| [#82987](https://github.com/anthropics/claude-code/pull/82987) | OPEN | **修复 CI cron 失败**、排除 PR 干扰，并针对高 agent 负载下的 TUI 输入延迟提出架构级修复方案（对应 #82984） |
| [#82794](https://github.com/anthropics/claude-code/pull/82794) | OPEN | **code-review 插件实现置信度评分**与 `--threshold` 标志，弥补 README 与实现之间的 drift |
| [#39872](https://github.com/anthropics/claude-code/pull/39872) | OPEN | **Node.js 20 → 24 升级**，为即将到来的 LTS 变更做准备 |
| [#81540](https://github.com/anthropics/claude-code/pull/81540) | CLOSED | Atlas 2 自动化提交，修复 Usage 泄漏问题（#80705），标注奖励 $200；未合并 |
| [#17776](https://github.com/anthropics/claude-code/pull/17776) | CLOSED | 为 `security-guidance` 插件补充 README 文档，覆盖 9 个安全模式 |
| [#82981](https://github.com/anthropics/claude-code/pull/82981) | OPEN | 西班牙语标题、无描述，疑似低质量/测试 PR |

---

## 功能需求趋势

1. **Fable 5 模型适配**（最紧迫）：计费判定错误、默认模型配置不生效、静默降级不通知，三个环节均存在问题，说明新模型上线的配套逻辑尚未完善。
2. **跨端体验一致性**：CLI ↔ Desktop 历史同步（#28791，👍 111）；Web 端权限与桌面端对齐（#11139）。
3. **数据安全与确认机制**：多个 issue 报告自动模式下的破坏性文件操作缺乏兜底确认，社区对安全防护的关注度明显上升。
4. **Windows 平台稳定性**：GPU 进程崩溃导致整个应用不可用，已成为 Windows 用户的最大痛点。
5. **上下文管理可观测性**：自动内存加载状态、后台 agent 报告缺失、会话记录留存策略——开发者希望获得更多可观测性与控制权。

---

## 开发者关注点

- **误报和静默行为最令用户愤怒**：Fable 5 明明在 Max 计划内却被要求付费、被静默降级且不通知——"silent fallback" 成为高频关键词。
- **数据安全是底线问题**：rm -rf 灾难性删除、防护绕过、kill 被安全分类器阻塞——此类问题一旦发生即不可逆，社区反馈强烈。
- **Windows GPU 崩溃影响严重**：无错误提示、无恢复机制、需卸载重装才能修复。
- **会话与历史数据缺乏保障**：30 天自动删除且不被备份覆盖，对依赖长期上下文的开发者构成实际损失。
- **配置可信度下降**：settings.json 中的模型设置不被遵守，单次请求烧掉整个会话窗口——用户对配置和额度计算机制产生信任危机。

> 数据获取时间：2026-08-01 · 来源：[anthropics/claude-code](https://github.com/anthropics/claude-code) · 汇总范围：24h 内更新内容

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报 — 2026-08-01

## 今日速览

昨日 Codex 仓库异常活跃：连续发布 rust-v0.147.0-alpha.1.1 / alpha.3 / alpha.4 三个预发布版本，并合并了 43 个 Pull Request（多为 bot 驱动的内部功能提交）。社区讨论的焦点集中在两个方向——一是对 CLI 自动等待/自动解析行为的不满（#28969 已获 186 👍），二是 Windows/WSL 环境下层出不穷的兼容性故障，占到了近 24 小时活跃 Issue 的 1/3。

## 版本发布

过去 24 小时发布了 3 个 Rust alpha 版本：

- **[rust-v0.147.0-alpha.4](https://github.com/openai/codex/releases/tag/rust-v0.147.0-alpha.4)** — 最新 alpha
- **[rust-v0.147.0-alpha.3](https://github.com/openai/codex/releases/tag/rust-v0.147.0-alpha.3)**
- **[rust-v0.147.0-alpha.1.1](https://github.com/openai/codex/releases/tag/rust-v0.147.0-alpha.1.1)**

三个版本均未附带详细变更说明。结合同期合并的 PR 动向，0.147 系列可能正在打磨实时委托（realtime delegation）、线程管理 API、以及插件远程搜索等新能力。

## 社区热点 Issues

以下为过去 24 小时内讨论最热烈或最具信号意义的 10 个 Issue：

### 1. 请求添加设置，禁用 60 秒自动解析等待 — [#28969](https://github.com/openai/codex/issues/28969)
- 作者：antoyo ｜ 评论：64 ｜ 👍：186
- 概况：用户希望增加配置项，关闭 Codex CLI 在提问后 60 秒自动 resolve 的行为，以便保留人工确认的等待时间。
- 为什么重要：这是过去一天社区呼声最高、赞数最多的 Issue。186 个 👍 说明大量用户在日常工作流中遇到了"AI 自作主张继续执行"的挫败感，直接关系到对 Agent 可控性的核心诉求。

### 2. Codex Diff 在 VS Code (macOS) 上崩溃 — [#35058](https://github.com/openai/codex/issues/35058)
- 作者：Furgon ｜ 评论：42 ｜ 👍：109
- 概况：打开 "Codex Diff" 标签页即报 "Oops, an error has occurred"，所有仓库都能复现。
- 为什么重要：VS Code 扩展是最常用的 IDE 入口之一，Diff 查看功能崩溃直接影响代码审查效率。109 👍 说明受影响用户面很广。

### 3. Windows 截图功能导致 GPU 进程崩溃（Code Integrity 拒绝 vk_swiftshader.dll）— [#34133](https://github.com/openai/codex/issues/34133)
- 作者：xiaosai72825 ｜ 评论：30 ｜ 👍：0
- 概况：内置浏览器截图时，Windows 10 上 Code Integrity 拒绝加载 vk_swiftshader.dll，导致 GPU 进程崩溃、应用卡死甚至无法重新打开。

### 4. OneDrive 损坏导致 Codex 流式响应反复断开 — [#35420](https://github.com/openai/codex/issues/35420)
- 作者：hiroki-tamba-research ｜ 评论：20
- 概况：工作区位于 OneDrive 并处于 degraded 状态时，请求反复报 "stream disconnected before completion"。

### 5. Windows 上远程控制 WSL→Android 完全不可用 — [#31786](https://github.com/openai/codex/issues/31786)
- 作者：kendonB ｜ 评论：17
- 概况：App 配对通过，但手机端一直停留在 "connecting" 状态，无法建立远程连接。

### 6. WSL 环境下 PR 集成失败（gh 解析错误）— [#32323](https://github.com/openai/codex/issues/32323)
- 作者：sugymt ｜ 评论：12 ｜ 👍：14
- 概况：在 WSL 中使用 Codex App 的 PR 审查功能时，gh CLI 报 "Expected VAR_SIGN, actual: COLON"，集成流程完全不可用。

### 7. 新版本将合法 WSL Git 仓库误判为非 Git — [#35119](https://github.com/openai/codex/issues/35119)
- 作者：Ted151951 ｜ 评论：11 ｜ 👍：11
- 概况：App 26.721.3404 将 WSL ext4 文件系统上的有效仓库报告为 "Git is unavailable"，回退到旧版本即恢复正常。

### 8. 建议为 AGENTS.md 增加 `@include` 指令 — [#17401](https://github.com/openai/codex/issues/17401)
- 作者：ylluminate ｜ 评论：9 ｜ 👍：15
- 概况：希望支持 `@path/to/file.md` 形式的组合式指令，在指令组装阶段内联引用其他文件内容。
- 为什么重要：规则文件模块化是大型团队落地 Codex/AGENTS.md 的刚需，属于长期存在的高赞功能请求。

### 9. Codex 不应在后续上下文中重发大型 base64 图片 — [#28316](https://github.com/openai/codex/issues/28316)
- 作者：wang1970 ｜ 评论：10 ｜ 👍：3
- 概况：图片在一次对话轮次后被持久化在工具历史中，后续每次请求都会携带完整 base64 数据，导致上下文无限膨胀、token 消耗激增。

### 10. GPT-5.6 Sol Medium 快速耗尽 Pro 5 小时用量 — [#32250](https://github.com/openai/codex/issues/32250)
- 作者：Oguz-Yueksel ｜ 评论：4 ｜ 👍：8
- 概况：Pro 用户反馈 GPT-5.6 Sol（Medium 推理档位）在短时间内耗尽 5 小时配额，引发对计费/用量核算准确性的质疑。同类 Issue 还包括 [#36353](https://github.com/openai/codex/issues/36353)、[#36369](https://github.com/openai/codex/issues/36369)、[#33216](https://github.com/openai/codex/issues/33216)，说明用量统计争议正在集中爆发。

## 重要 PR 进展

以下 10 个 PR 最能反映 Codex 近期的演进方向：

**1. [#36413 Add a realtime delegation acknowledgement control](https://github.com/openai/codex/pull/36413)**
为 `thread/realtime/start` 增加可选的 `delegationAckFiller` 字段，显式控制实时委托的确认行为。

**2. [#36410 Make user input blocking behavior explicit](https://github.com/openai/codex/pull/36410)**
新增必填的 `isBlocking` 字段，将"是否必须等待用户响应"从 `autoResolutionMs` 超时策略中解耦——正是对 #28969 等社区诉求的基础设施回应。

**3. [#36409 Implement remote plugin search](https://github.com/openai/codex/pull/36409)**
实现远程插件搜索能力，支持全局/工作区/个人三级作用域，并绕过 catalog 缓存直查服务。

**4. [#36411 Use Git repositories as pre-tool hook test markers](https://github.com/openai/codex/pull/36411)**
将 pre-tool hook 测试改为以 `git init` 创建的仓库作为标记，工程化改进，提升测试隔离性。

**5. [#31471 (1/4) Extract apps cache logic into ConnectorRuntimeManager](https://github.com/openai/codex/pull/31471)**
将 Codex Apps 工具缓存重构为 `ConnectorRuntimeManager`，按账号/用户/工作区模式隔离运行时上下文——这是一系列大规模连接器重构的第一步。

**6. [#36408 Allow custom Codex instructions for realtime transitions](https://github.com/openai/codex/pull/36408)**
支持为进入/退出实时模式自定义指令，在保留默认行为的同时允许用户注入额外上下文。

**7. [#36393 Avoid redundant filesystem probes](https://github.com/openai/codex/pull/36393)**
合并 `environments.toml` 读取与默认 daemon socket 连接检测，减少冗余文件系统探针，属性能优化。

**8. [#36389 Enforce single-writer ownership for all thread histories](https://github.com/openai/codex/pull/36389)**
为 legacy 和 paginated 两种线程历史统一加跨进程写锁，解决多进程并发写入的竞争问题。

**9. [#36402 / #36409 插件搜索 API 全栈落地](https://github.com/openai/codex/pull/36402)**
先声明实验性 `plugin/search` 协议，随后立刻实现了服务端查询逻辑，插件生态基础设施在快速推进。

**10. [#36374 Enable sandboxed V8 for code mode](https://github.com/openai/codex/pull/36374)**
为 code mode 启用 `v8_enable_sandbox` 特性，修复 Windows MSVC 构建使用非沙箱 V8 预编译包的问题。

其他值得留意的合并还包括：[#36385](https://github.com/openai/codex/pull/36385) 为 core 增加带确认的用户消息提交 API；[#36384](https://github.com/openai/codex/pull/36384) 用分页查询合并加载 turn 摘要，减少 N+1 查询；[#36365](https://github.com/openai/codex/pull/36365) 为 MCP elicitation 增加严格自动审查路由。

## 功能需求趋势

从全部活跃 Issue 中提炼出 5 个最受关注的方向：

1. **用量配额可见性与核算准确性（爆发式增长）**
   - 典型代表：#36353（Plus 每周额度一天耗尽）、#33216（Spark 限额卡在 100%）、#36369（显示 58% 却提示已超限）、#28331（App 限额回滚）。
   - 信号：用户对"到底还剩多少额度、消耗到哪里去了"的信任正在下降，官方需要尽快统一用量仪表盘的数据口径。

2. **Windows/WSL 兼容性支持**
   - 典型代表：#34133（GPU 崩溃）、#35119（WSL Git 误判）、#32323（gh 解析失败）、#31786（远程控制不可用）、#35871（MSIX PowerShell 沙箱权限）、#35420（OneDrive 断连）、#32706（Edge 插件更新损坏）。
   - 信号：Windows 已成为问题重灾区，尤其是 WSL 与沙箱的组合；每个小版本都可能引入新的 Windows 专属回归。

3. **Agent 可控性与执行透明度**
   - 典型代表：#28969（禁止自动 resolve）、#36418（steer 消息被丢弃）、#35613（Code mode 在嵌套会话存活时误报完成）。
   - 信号：用户希望拥有更明确的"阻塞/放行"控制权，而不是让 AI 在无监督时自行继续。

4. **上下文与内存效率优化**
   - 典型代表：#28316（base64 图片重复发送）、#29645（image_gen 超时）、#17401（AGENTS.md 模块化）。
   - 信号：大型输入（图片、长上下文）的 token 成本管理是影响真实使用时长的关键瓶颈。

5. **模型路由与配额策略**
   - 典型代表：#32250（Sol Medium 快速耗尽额度）、#33592（gpt-5.6-sol 下插件不可用）、#34278（自动模式同时路由模型与推理强度）。
   - 信号：用户对"为什么这个模型耗这么多"非常敏感，同时希望根据任务自动匹配最佳模型档位。

## 开发者关注点

基于社区高频反馈，以下痛点值得 Codex 团队优先跟进：

- **反复出现的用量核算问题正在消耗用户信任。** 多条 Issue 互相印证：使用量显示与实际限制不一致、跨设备不同步、"新一周重置前先被扣光"等，这比功能缺失更容易导致用户降级或流失。

- **WSL 是双刃剑：Git 检测、gh 集成、沙箱权限在本周内出现了 3 起以上独立报告。** 许多用户明确表示"旧版本正常、新版本损坏"，说明相关回归测试覆盖不足，建议加强对 Windows/WSL 管道的 CI 回归矩阵。

- **静默丢消息（steer messages）非常危险。** [#36418](https://github.com/openai/codex/issues/36418) 中用户描述的"新版本悄悄忽略我给出的 steer 指令、而旧版本不会"，属于 AI 行为一致性问题，可能引发对模型判断的信任危机。

- **进程与资源失控类 Bug 造成实质性经济损失。** 从 [#36345](https://github.com/openai/codex/issues/36345)（ffmpeg 重复子进程占用 900% CPU 达 7.5 小时）到 [#35259](https://github.com/openai/codex/issues/35259)（轮询重入模型消耗 19.8% 本地 token），用户已经注意到后台行为正在消耗配额或计算资源，官方应尽快补上资源滥用防护。

- **社区对 MCP、插件生态持积极态度，但对稳定性的耐心有限。** 多个 MCP/插件相关 Issue 围绕 OAuth 失效、插件加载与模型绑定（#33592、#32706、#35006）展开——功能可以实验，但反复失效会让团队不敢依赖这些扩展点。

---

*数据来源：github.com/openai/codex 公开 Issue / PR / Release 元数据，统计窗口为 2026-07-31 至 2026-08-01。*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报 — 2026-08-01

## 今日速览
今日 Gemini CLI 发布了三个版本（v0.55.0-nightly、v0.54.0-preview.1、v0.53.1），核心修复聚焦于**容量耗尽误判导致的重试挂起**与**InvalidStreamError 错误信息透传**。社区侧，子代理（Subagent）相关的 bug 与功能讨论持续升温，多个 P1 级 Agent 稳定性问题（如挂起、成功误报）正等待回归测试。PR 侧，一个修复 v0.53.0 回归导致 400 错误的 PR（#28607）值得重点关注。

---

## 版本发布

三个版本均围绕同一核心修复链展开：将 f47d6c6 提交（capacity exhaustion 处理与 InvalidStreamError 传播）回移植到预览版与稳定版。

### v0.55.0-nightly.20260801.gf47d6c6f7
- **fix(core)**：将容量耗尽（capacity exhaustion）分类为终止状态，防止重试挂起
- **fix(core,cli)**：将 InvalidStreamError 详细信息传播至 UI，提供空响应场景的明确处理指引

### v0.54.0-preview.1
- 通过 cherry-pick f47d6c6 将上述修复合入预览分支，v0.54.0-preview.1

### v0.53.1
- 将同一修复合入稳定版分支，但在 cherry-pick 过程中**发生合并冲突**，需要手动解决后方可合入

**Full Changelog**: [v0.53.0...v0.53.1](https://github.com/google-gemini/gemini-cli/compare/v0.53.0...v0.53.1)

---

## 社区热点 Issues

以下从今日更新的 30 条高评论 Issue 中精选 10 条值得开发者关注的条目：

### 1. #22323 Subagent 在 MAX_TURNS 后恢复被误报为 GOAL 成功
- **标签**: P1 / Agent（等待重测）
- **摘要**: `codebase_investigator` 子代理在达到最大轮次限制后，仍报告 `status: "success"` 和 `Termination Reason: "GOAL"`，实际并未执行任何分析。中断被隐藏，影响用户对结果的判断。
- **为什么重要**: 所有子代理的可靠性基石，虚假成功会导致用户对最终结果产生系统性误判。
- [Issue #22323](https://github.com/google-gemini/gemini-cli/issues/22323)

### 2. #21409 通用代理（Generalist agent）无限挂起
- **标签**: P1 / Agent（等待重测）
- **摘要**: 委派给通用代理的任务会无限期挂起（等待长达一小时），连简单的文件夹创建都会卡住。模型被指示不使用子代理后问题消失，疑似子代理调度死锁。
- **社区反应**: 👍 8，是今日最受关注的 bug。
- [Issue #21409](https://github.com/google-gemini/gemini-cli/issues/21409)

### 3. #25166 Shell 命令完成后卡在 "Waiting input"
- **标签**: P1 / Core
- **摘要**: 简单的 CLI 命令执行完毕后，Gemini CLI 仍显示命令为活动状态并等待输入。高频复现，严重影响自动化流程。
- [Issue #25166](https://github.com/google-gemini/gemini-cli/issues/25166)

### 4. #22186 get-shit-done 输出 hook 导致崩溃
- **标签**: P1 / Agent
- **摘要**: 当 get-shit-done 输出接近完成（打印用户摘要）时反复崩溃，复现率高。
- [Issue #22186](https://github.com/google-gemini/gemini-cli/issues/22186)

### 5. #21983 浏览器子代理在 Wayland 下失败
- **标签**: P1 / Agent / Browser
- **摘要**: 浏览器子代理在 Wayland 环境（Fedora 常见配置）下直接失败，终止原因为 GOAL，但未完成目标任务。Linux 桌面用户受影响面较大。
- [Issue #21983](https://github.com/google-gemini/gemini-cli/issues/21983)

### 6. #19873 利用模型原生的 bash 能力：零依赖 OS 沙箱与执行后意图路由
- **标签**: P2 / Enhancement / Large Effort
- **摘要**: Gemini 3 模型天然擅长通过标准 POSIX 工具链探索代码库。建议构建零依赖的 OS 沙箱，既保留模型这一原生能力，又不牺牲安全性和 UX。
- **为什么重要**: 方向性 feature request，代表社区对模型能力释放与安全边界平衡的诉求。
- [Issue #19873](https://github.com/google-gemini/gemini-cli/issues/19873)

### 7. #24353 健壮的组件级评测体系（EPIC）
- **标签**: P1 / Agent / Eval Infra
- **摘要**: 目标是跟进 #15300 引入的行为评测体系，目前已积累 76 个评测测试并覆盖 6 个 Gemini 模型版本。EPIC 致力于进一步提升评测的鲁棒性。
- [Issue #24353](https://github.com/google-gemini/gemini-cli/issues/24353)

### 8. #22093 v0.33.0 起子代理绕过权限设置自动运行
- **标签**: P2 / Agent / Bug（等待重测）
- **摘要**: 升级到 v0.33.0 后，用户已将 Agents 模式设为 disabled，子代理（如 generalist）仍被自动调用。涉及权限模型变化，属于安全敏感问题。
- [Issue #22093](https://github.com/google-gemini/gemini-cli/issues/22093)

### 9. #26522 Auto Memory 无限重试低信号会话
- **标签**: P2 / Agent
- **摘要**: 后台提取代理判定会话为低信号后不读文件，该会话就一直停留在未处理状态，导致死循环重试。影响 Auto Memory 功能的稳定性。
- [Issue #26522](https://github.com/google-gemini/gemini-cli/issues/26522)

### 10. #26525 Auto Memory 的确定性脱敏与日志减噪
- **标签**: P2 / Security
- **摘要**: Auto Memory 将本地会话内容发送给后台提取模型，但脱敏发生在内容进入模型上下文之后。建议在发送前进行确定性脱敏，并减少服务日志对技能内容的记录。
- [Issue #26525](https://github.com/google-gemini/gemini-cli/issues/26525)

---

## 重要 PR 进展

今日值得关注的 PR 共 11 条，精选其中 10 条：

### 1. #28613 fix: 将 console.error 替换为 debugLogger（SDK 会话）
- **size/xs**，新增
- 将 packages/sdk/src/session.ts 中的 console.error 统一为项目标准的 debugLogger，同时清理了不再需要的 ESLint 禁用指令。代码规范收尾类 PR。
- [PR #28613](https://github.com/google-gemini/gemini-cli/pull/28613)

### 2. #28607 修复 v0.53.0 回归：functionCall 缺失 thought_signature 导致 400 错误
- **area/agent, size/m**，新增
- 修复 #28604。根因是 #28509 在 context 管理时调用的 `stripThoughts()` 把 functionCall 的 thoughtSignature 一并剥除了，导致 Gemini API 返回 400。属于高影响回归修复。
- [PR #28607](https://github.com/google-gemini/gemini-cli/pull/28607)

### 3. #28526 修复 VSCode IDE 插件的 Disposable 泄漏
- **area/core, size/s**，已等待跟进
- 修复 #27790。`activate()` 中的括号错误导致 `gemini.diff.accept` 命令和 `onDidChangeWorkspaceFolders` 监听器的注册被折叠成逗号表达式，只保住了最后一个操作数，造成资源泄漏。
- [PR #28526](https://github.com/google-gemini/gemini-cli/pull/28526)

### 4. #28551 修复 macOS 沙箱模式下 Seatbelt 配置缺失导致的启动崩溃
- **size/l**，等待关联 Issue
- 在 macOS/gMac 环境以 `-s` 沙箱模式运行时，若 runfiles/bundle 中找不到静态 `.sb` seatbelt 配置文件会直接崩溃。此 PR 让 CLI 回退到内置 profile，解决关键启动崩溃问题。
- [PR #28551](https://github.com/google-gemini/gemini-cli/pull/28551)

### 5. #28566 将 InvalidStreamError 详细信息透传到 CLI UI
- **P1, area/core, size/m/l/xl**，已关闭
- 让 CLI 在遇到空响应时给出具体可操作的提示（如建议使用 `/compress` 降低上下文占用）。该修复今日已合入三个版本。
- [PR #28566](https://github.com/google-gemini/gemini-cli/pull/28566)

### 6. #28608 Preview 模型 404 时回退到稳定模型（Gemini API Key 鉴权场景）
- **P2, area/agent, size/m**，新增
- 修复 #28600。使用 Gemini API Key 鉴权时，`Config.initialize()` 假定所有 key 都有 preview 模型访问权限，但部分项目的 key 发送 `gemini-3.1-pro-preview` 会得到 404。此 PR 修复了该场景下的模型回退链。
- [PR #28608](https://github.com/google-gemini/gemini-cli/pull/28608)

### 7. #28481 用存储的 client ID 刷新 MCP OAuth Token
- **P1, area/security, size/m**
- 修复 MCP OAuth 动态客户端注册场景下的 token 刷新问题：刷新失败会在发起网络请求之前就发生，且失败后会把已存储凭据删除，导致每次都要重新授权。
- [PR #28481](https://github.com/google-gemini/gemini-cli/pull/28481)

### 8. #28612 版本号自动提升：0.55.0-nightly.20260801.gf47d6c6f7
- **size/s**，机器人自动 PR
- 日常 nightly 版本号维护。
- [PR #28612](https://github.com/google-gemini/gemini-cli/pull/28612)

### 9. #28609 / #28610 将修复 backport 到 v0.54.0-preview 与 v0.53.x
- **size/xl**，均已关闭
- 机器人自动 cherry-pick f47d6c6（capacity exhaustion + InvalidStreamError 修复）到 preview 与 stable 分支。**v0.53.1 的 cherry-pick 出现冲突，需人工介入处理**。
- [PR #28609](https://github.com/google-gemini/gemini-cli/pull/28609) / [PR #28610](https://github.com/google-gemini/gemini-cli/pull/28610)

### 10. #28606 "Setapart"（标题模糊的 PR）
- **P1, size/l**，等待关联 Issue
- 标题与描述缺乏实质信息，暂无明确详情，建议社区成员谨慎审阅。
- [PR #28606](https://github.com/google-gemini/gemini-cli/pull/28606)

---

## 功能需求趋势

从今日更新的 50 条 Issue 中，可以提炼出以下社区核心诉求方向：

1. **子代理调度与恢复机制（Agent 可靠性）**
   最多的高频标签组合。MAX_TURNS 成功误报、通用代理挂起、权限（permission bypass）、浏览器代理在 Wayland 下失败、以及子代理行为无法通过 settings.json 覆盖等，构成了 Agent 可靠性的全面挑战。

2. **Auto Memory 记忆系统的健壮性与安全**
   多项 issue 围绕 Auto Memory 展开：低信号会话无限重试（#26522）、无效 patch 静默跳过（#26523）、记忆抽取前缺少确定性脱敏（#26525）。记忆功能是当前迭代中最活跃的领域之一。

3. **AST 感知的代码理解**
   通过 AST 感知的工具链（读取、搜索、代码库映射）减少 token 消耗、精确定位方法边界。社区正在评估 tilth / glyph 等工具作为 `codebase_investigator` 的潜在改进方向（#22745、#22746）。

4. **浏览器代理的配置灵活性与故障恢复**
   用户希望浏览器代理支持 session takeover、锁恢复、并且尊重 settings.json 中的覆盖配置（如 maxTurns）。整体诉求是"更可控、更健壮"。

5. **零依赖 OS 沙箱 + bash 原生能力释放**
   社区希望让 Gemini 3 模型天然擅长的 POSIX 工具链能力在安全沙箱内发挥出来，而不是被限制掉（#19873）。

6. **行为评测体系化**
   EPIC #24353 表明官方正在系统化推进组件级评测。对于社区而言，"可复现、可量化的行为评测"意味着 gemini-cli 的功能预期将更清晰。

---

## 开发者关注点

以下是来自 Issue 讨论与 PR 的开发者高频痛点总结：

- **Capability exhaustion 处理不当导致挂死**：今日多个版本同时修复 capacity exhaustion 误判问题，结合 #21409（通用代理挂起）和 #25166（shell 等待输入）等高频问题，**"挂死"类 bug 是当前影响面最大的稳定性痛点**。
- **错误信息不透明**：InvalidStreamError 等流错误此前无法透传到 UI，开发者面对空响应只能猜测原因。今日修复后建议用户升级验证。
- **子代理权限边界**：v0.33.0 起子代理有绕过 disabled 配置的行为（#22093），加上 v0.53.0 引入的 400 回归（#28607），说明**子代理区域的权限与回归控制是当前社区信任度的关键瓶颈**。
- **配置覆盖失效**：settings.json 对浏览器代理等组件的覆盖不生效（#22267），代理的本地自定义能力亟待增强。
- **代码整洁度与资源管理**：社区也开始关注间接的内存/资源泄漏问题（如 #28526 的 Disposable 泄漏），说明项目成熟度提升后，工程规范化受到了更多重视。
- **安全脱敏前置**：Auto Memory 将本地会话内容发送到模型上下文中去脱敏（而非发送前脱敏），已引起对敏感信息（API key、密钥）可能泄露到远端模型上下文的担忧。**安全敏感用户建议在功能完善前谨慎启用 Auto Memory**。

---

*本日报由 GitHub 数据自动整理生成，基于 2026-08-01 的 Release、Issue 与 PR 动态。*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报
**2026-08-01** | 数据源：[github.com/github/copilot-cli](https://github.com/github/copilot-cli)

## 1. 今日速览

v1.0.78-0 于昨日发布，新增 `/permissions` 审批模式切换与 ACP `closeSession` 支持，并默认开启 `allowDevToolCaches` 以改善沙箱构建体验。社区方面，多条回归（计划模式 shell 命令被阻断、task_complete 工具缺失、大会话恢复 OOM）成为讨论焦点，其中计划模式回归收获了高达 7 条评论；此外，一个新提交的 issue 揭示了 `events.jsonl` 超过 V8 字符串长度上限后会话将永久无法加载的严重边界问题。功能需求方面，ACP 扩展方法（`ask_user`）以 6 👍 高居热度榜首，企业级配置管理需求持续发酵。

## 2. 版本发布

**[v1.0.78-0](https://github.com/github/copilot-cli/releases)（过去 24 小时内发布）**

**Added**
- 新增 `/permissions` 命令，用于切换审批模式（approval modes）。
- ACP 模式新增支持通过 `closeSession` 请求关闭会话。

**Improved**
- 新增沙箱设置 `allowDevToolCaches`（默认开启）：为沙箱化构建授予工具链缓存、注册表和安装包的访问权限，以保证构建在沙箱内正常工作（描述截断）。

这是继 1.0.76、1.0.77 之后的又一轮迭代，重点在权限控制与 ACP 协议完善。

## 3. 社区热点 Issues（10 个最值得关注）

### 🚨 回归 Bug（3 条）

**#4188 [已关闭] 计划模式回归：shell 命令被阻断**
[github/copilot-cli Issue #4188](https://github.com/github/copilot-cli/issues/4188) | 7 条评论 | 3 👍
最新版本中，计划模式开始阻止 shell 命令，导致 `gh cli` 等原本用于在计划阶段读取/创建 issue 的工具不可用。用户明确标注为回归——过去计划模式依赖这些命令来丰富计划内容。评论区热度最高，说明该问题影响面较大。

**#4161 [已关闭] 切回自动模式后 task_complete 工具不可用**
[github/copilot-cli Issue #4161](https://github.com/github/copilot-cli/issues/4161) | 4 条评论 | 4 👍
该问题针对 #1523 的回归。早在 v1.0.4 时维护者已确认 `task_complete` 工具始终可用，但在当前版本中，从其他模式切回自动模式后该工具再次消失，导致代理无法完成任务闭环。4 个 👍 表明不少用户同样受困。

**#4251 [开放] 大会话恢复 OOM/CPU 打满（1.0.74 回归）**
[github/copilot-cli Issue #4251](https://github.com/github/copilot-cli/issues/4251) | 1 条评论 | 1 👍
同一台机器、同一个会话，仅更换 CLI 版本：1.0.73 可正常恢复，1.0.74 起峰值内存飙升至 3–4 倍，出现 OOM 或单核 100% 持续约 70 分钟。该 issue 在 8 月 1 日仍持续更新，是当前最受关注的稳定性回归之一。

### 🐛 严重故障与边界问题（3 条）

**#4305 [已关闭] 升级到 1.0.76 后所有命令报 "Undefined → String" 类型转换错误**
[github/copilot-cli Issue #4305](https://github.com/github/copilot-cli/issues/4305) | 4 条评论 | 4 👍
用户升级到 1.0.76 后几乎立即在任意命令上收到 `Failed to convert JavaScript value 'Undefined' into rust type 'String'`。问题在预发布版 1.0.76-2 中即已出现，影响覆盖面广，社区关注度高。

**#4325 [开放] `events.jsonl` 超过 V8 最大字符串长度后会话永久无法加载**
[github/copilot-cli Issue #4325](https://github.com/github/copilot-cli/issues/4325) | 0 条评论 | 今天新建
长期会话的 `events.jsonl` 增长到超过 V8 引擎字符串长度上限后，CLI 彻底无法恢复该会话。会话仍显示在 `/resume` 列表中，`session-store.db` 记录完好，文件本身可读，但加载逻辑直接在 V8 层失败。这是数据规模触及平台上限的典型案例，今日刚提交，需保持关注。

**#4078 [开放] 定时提示（`/every`、`/after`）杀死现有提示队列**
[github/copilot-cli Issue #4078](https://github.com/github/copilot-cli/issues/4078) | 4 条评论
当定时提示触发时，代理会处理该定时任务，但不会继续弹出原队列中剩余的 N 个任务，队列被永久卡住。对于依赖定时自动化的工作流影响明显。

### 💡 高热度功能需求（2 条）

**#2109 [开放] ACP 支持 `ask_user` / `ask_question` 扩展方法**
[github/copilot-cli Issue #2109](https://github.com/github/copilot-cli/issues/2109) | 2 条评论 | 6 👍
社区希望 ACP 增加向用户提出澄清问题并返回结构化答案的扩展方法。目前只有 `session/request_permission`，无法表达"提问—回答"式交互。6 个 👍 使其成为近期 ACP 方向呼声最高的需求。

**#3909 [开放] 企业/组织级服务器管理设置（含 env）下放到本地 CLI**
[github/copilot-cli Issue #3909](https://github.com/github/copilot-cli/issues/3909) | 4 条评论
组织管理员目前无法向开发者**本地** Copilot CLI 集中推送配置（尤其是环境变量）。现有 Agents/Codespaces secrets 仅覆盖 GitHub 托管的云端环境。企业用户对本地 CLI 的集中管控需求强烈。

### 🖥 终端渲染与自主控制（2 条）

**#4311 [开放] 交互式转录渲染为空白行，直到 children 或终端宽度变化**
[github/copilot-cli Issue #4311](https://github.com/github/copilot-cli/issues/4311) | 1 条评论
交互模式下转录区域（尤其底部）渲染为空白，内容实际存在（向上滚动可见），但不会重绘。发送新消息可临时恢复，`/resume` 无效。指向终端渲染组件（WCr/ScrollBox）的测量缓存失效问题。

**#4318 [开放] 自动模式 task-completion 强制行为覆盖用户明确指令**
[github/copilot-cli Issue #4318](https://github.com/github/copilot-cli/issues/4318) | 1 条评论
用户明确将任务缩小为“仅研究/解释，不做其他操作”，但自动模式的任务完成强制逻辑仍驱动代理继续执行操作。自主模式的控制权边界是安全关键问题，用户指令优先级应高于任务完成逻辑。

## 4. 重要 PR 进展

过去 24 小时内共有 **2 个 PR** 更新，但均为非功能性/低质量提交，无实质性代码改动：

**[PR #3163](https://github.com/github/copilot-cli/pull/3163) - ViewSonic monitor（开放）**
作者：tijuks | 更新：2026-07-31 | 0 👍
描述引用 #2591、#3561、#3559 并提及 “initiate [GitHub action] //runners”，从标题和内容判断疑似误提交或垃圾 PR，不涉及 CLI 核心代码。

**[PR #4316](https://github.com/github/copilot-cli/pull/4316) - Create devcontainer.json（开放）**
作者：Pjrich1313 | 更新：2026-07-31 | 0 👍
无描述，仅新增一个 `devcontainer.json` 开发容器配置文件，属于辅助性质改动。

**说明**：本期没有值得深入分析的功能性或修复性 PR，社区的代码贡献集中在 issue 讨论与官方版本发布。建议关注后续版本发布日志以获取实质代码变更。

## 5. 功能需求趋势

从全部 issues 中提炼出 5 个社区最关注的功能方向：

### ① 终端渲染与交互体验优化
典型 issue：#4311（转录渲染空白）、#4313（滚动浏览当前对话历史）、#1352（`sessionStart` hook 的 stdout 被静默丢弃）、#4304（sidebar 无法用方向键导航）
**趋势解读**：TUI 层的渲染正确性与键盘可导航性正在成为高频痛点，用户在长时间使用后对终端 UI 的完整度要求明显提高。

### ② ACP（Agent Client Protocol）扩展生态建设
典型 issue：#2109（ask_user 扩展方法，6 👍）、#4174（ACP 不暴露 token/context 用量）
**趋势解读**：配合本次版本新增 `closeSession` 支持，ACP 正从"可用"走向"好用"。自定义客户端对交互能力（提问、权限）和可观测性（token 消耗）的需求成为主要缺口。

### ③ 会话生命周期与长期可靠性
典型 issue：#4251（大会话恢复 OOM）、#4325（events.jsonl 超 V8 上限永久不可加载）、#4078（定时提示杀死队列）
**趋势解读**：会话恢复、事件日志增长、定时任务与队列的相互作用，指向同一核心问题——大型/长期会话场景下的稳定性与资源管理仍明显不足。

### ④ 企业级配置管理与治理
典型 issue：#3909（组织级设置下放本地 CLI）、#4315（组织启用新模型后 `/model` 列表不刷新）
**趋势解读**：企业用户不再满足于云端托管环境的 secret 管理，需要把策略、环境变量、模型白名单集中下放到本地 CLI，这已成为企业版功能最重要的诉求之一。

### ⑤ MCP 配置灵活性与权限继承
典型 issue：#4323（`.mcp.json` 不支持注释导致整个文件被拒）、#4320（嵌套自定义 agent 的 MCP 工具依赖未文档化的父级授权）
**趋势解读**：MCP 服务器的配置解析和权限继承模型仍然不够透明，尤其是注释支持这类"小问题"会直接阻断共享仓库的 MCP 使用，说明 MCP 配置需要更宽容的解析策略和更清晰的文档。相关需求还包括 #1478（MCP 交互式向导缺少环境变量格式帮助）。

## 6. 开发者关注点

### 1️⃣ 回归问题频发，版本信任度承压
24 小时内出现至少 3 条标注/疑似回归的 issue：计划模式 shell 阻断（#4188）、task_complete 工具缺失（#4161）、大会话恢复 OOM（#4251）。开发者多次在评论中使用 "regression" 表述，版本快速迭代中回归控制已成为社区情绪的核心关注点。

### 2️⃣ 自主模式的权利边界
#4318（task-completion 覆盖用户指令）与 #4306（子任务冻结）共同指向自动模式下的行为失控风险。开发者期望的是：用户指令 > 任务完成逻辑；同时子任务失败不应导致整个会话卡死。

### 3️⃣ 长期/大规模会话的可靠性
从 1.0.74 的 OOM 到 V8 字符串限制再到队列卡死，长期高频用户开始遭遇此前未见的边界问题。会话数据量的增长速度已超过 CLI 的优化预期，恢复机制和日志膨胀控制成为刚需。

### 4️⃣ 配置链路的基础体验问题
- **安装版本失效**：#4317 指出"指定安装某版本时总是装成最新版"，导致用户无法回退到稳定版本；
- **模型列表不刷新**：#4315 中组织启用的新模型不出现在本地 `/model` 列表中；
- **MCP 注释致命**：#4323 中一行 `//` 注释让所有工作区 MCP 服务器失效。
这些"小而痛"的问题直接影响新版本的采用和日常体验。

### 5️⃣ 沙箱与平台兼容性
#3712 提出 Windows 下 ReFS/Dev Drive 本地沙箱的已知限制及文档需求；#4322 则报告了非安全补丁审查被误判为网络风险（CAPIError 422）并触发安全审查程序。沙箱方案的平台兼容性与安全策略误判是实际使用中的两侧盲区。

---

*本日报基于 GitHub 公开数据自动整理，仅供技术参考。反馈与建议请联系维护团队。*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报（2026-08-01）

> 数据来源：github.com/MoonshotAI/kimi-cli（更新于 2026-07-31）  
> 说明：截至统计时点，过去 24 小时无新版本 Release；Issue 与 PR 仅覆盖仓库中最新更新的条目。以下基于可获得数据整理。

## 今日速览

昨日社区讨论集中在两大功能需求上：**远程控制**（从任意设备接续本地会话）与**记忆系统**（跨会话持久化上下文），其中远程控制以 23 个 👍 成为本周最受关注提案。代码方面，一个新提交的 PR 修复了工具调用参数因双重 JSON 编码导致的 Pydantic 验证错误，有助于提升对部分 API 的兼容性。暂无新版本发布。

## 社区热点 Issues

数据源仅包含 4 个过去 24 小时内更新的 Issue，全部列出如下：

1. **【Feature】远程控制：从任意设备接续本地会话**  
   - 作者：CatKang｜评论 9｜👍 23｜更新: 2026-07-31  
   - 要求支持通过手机、平板或浏览器远程接续本地 CLI 会话，保持完整上下文与工作流连续。  
   - 这是当前社区关注度最高的问题，表明用户跨设备办公需求强烈。  
   - [Issue #1282](https://github.com/MoonshotAI/kimi-cli/issues/1282)

2. **【Feature】记忆系统：跨会话持久化上下文**  
   - 作者：CatKang｜评论 8｜👍 0｜更新: 2026-07-31  
   - 期望实现自动记忆（AI 管理的笔记）和手动记忆（用户自定义指令），以跨会话记住项目模式与偏好。  
   - 与远程控制同属工作流连续性方向，讨论热度较高。  
   - [Issue #1283](https://github.com/MoonshotAI/kimi-cli/issues/1283)

3. **【Bug】对话完成后滚动查看输出会自动跳到底部**  
   - 作者：venus0707｜评论 2｜👍 1｜更新: 2026-07-31  
   - 发生在 v1.46.0 / kimi2.6 / Linux 环境，终端 UI 滚动行为异常，影响长输出回顾。  
   - 属于交互体验类 bug，用户反馈明确。  
   - [Issue #2422](https://github.com/MoonshotAI/kimi-cli/issues/2422)

4. **【Bug，已关闭】error: the message at position 1 with role...**  
   - 作者：bravery｜评论 1｜👍 0｜更新: 2026-07-31  
   - 早期版本（KimiCLI/1.3）在 macOS 上遇到 LLM provider 返回 400 错误，涉及消息角色格式问题。  
   - 虽已关闭，但可作为一种历史兼容性参考。  
   - [Issue #796](https://github.com/MoonshotAI/kimi-cli/issues/796)

## 重要 PR 进展

仅有 1 个 PR 在过去 24 小时内更新：

1. **修复：kosong 模式下工具调用参数双重编码问题**  
   - 作者：aalhadxx｜评论：无｜👍 0｜更新: 2026-07-31  
   - 针对 Moonshot API 等提供方对数组/对象参数进行双重 JSON 编码的情况，添加递归解包逻辑，修复 `SetTodoList`、`ExitPlanMode`、`StrReplaceFile` 等工具调用时的 Pydantic 验证错误。  
   - 该修复对提高不同 provider 间的兼容性有直接作用。  
   - [PR #2572](https://github.com/MoonshotAI/kimi-cli/pull/2572)

## 功能需求趋势

从当前更新的 Issue 中可以提炼出两个显著方向：

- **无缝工作流连续性**：远程控制 + 记忆系统都旨在让用户跨设备、跨会话保持完整上下文，减少重复操作，代表了 CLI 从单次执行向“持久工作台”演进的趋势。
- **终端交互体验优化**：滚动查看 bug 虽小，但反映了用户对终端内大量输出浏览体验的重视，未来可能在分页、搜索、固定行等交互能力上有更多需求。

## 开发者关注点

- 跨设备会话接续成为高频诉求，#1282 的 23 个 👍 说明不少用户已在使用 CLI 参与复杂任务，希望不被座位束缚。
- 记忆系统被多次讨论，用户希望 AI 能记住项目模式与个人偏好，减少每次会话的重复提示。
- 终端 UI 的稳定性直接影响使用体验，类似“自动跳到底部”的行为会打断审查长文本的流程。
- 兼容性问题仍是重要关注点，尤其是不同 API 提供商对工具调用参数格式的处理差异，需要持续适配。

---
如有遗漏，请以仓库实时数据为准。  
订阅本日报以持续跟踪 Kimi Code CLI 社区动态。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 — 2026-08-01

## 今日速览

今日 OpenCode 社区活跃度显著上升，核心焦点集中在三方面：一是围绕 DeepSeek V4 Flash 正式版在 Zen 平台的上线状态引发热议；二是多个缓存与性能优化 PR 集中提交，意图解决跨会话 prompt cache 命中率问题；三是 TUI 插件体系和桌面端体验修复迎来密集更新，涌现多位社区贡献者的代码提交。

## 社区热点 Issues

1. **[#39823] DeepSeek V4 Flash 正式版 (0731) 是否已在 OpenCode Go/Zen 上线？**
   评论 23 | 👍 20 | 状态: OPEN
   DeepSeek 于 7 月 31 日发布 V4-Flash 正式版（新增 Terminal Bench 82.7、Cybergym 76.7 等能力），社区最高赞 Issue，用户急切想知道 OpenCode 代理网关何时接入。当前 OpenCode 依赖 models.dev 快照，存在新模型上线滞后问题。
   https://github.com/anomalyco/opencode/issues/39823

2. **[#16331] 权限配置被忽略**
   评论 41 | 👍 11 | 状态: CLOSED
   用户配置 `external_directory: "ask"` 以及 `*.env` 等拒绝读取规则后，模型仍可能违规读取敏感文件。41 条评论深入讨论了权限系统的边界，涉及通配符匹配与全局规则优先级问题。
   https://github.com/anomalyco/opencode/issues/16331

3. **[#7769] [功能] 桌面版应支持 git submodules**
   评论 9 | 👍 13 | 状态: CLOSED
   桌面版无法正确管理包含 git submodule 的会话，开发者请求支持 submodule 的会话管理能力，属于 IDE/桌面集成方向的高赞需求。
   https://github.com/anomalyco/opencode/issues/7769

4. **[#23595] system-reminder 位置移动导致 llama.cpp 不必要的 prompt 处理**
   评论 5 | 👍 11 | 状态: OPEN
   OpenCode 会在不同位置移动 `<system-reminder>` 标记，导致 prompt 历史变化、llama.cpp 的 KV cache 完全失效，浪费大量处理时间。该问题直指本地推理场景的性能痛点。
   https://github.com/anomalyco/opencode/issues/23595

5. **[#20573] [Windows] 将 nushell 从 shell 黑名单移除并支持 bash 工具调用**
   评论 5 | 👍 3 | 状态: CLOSED
   声称 nushell 被硬编码进黑名单（2025 年 12 月 PR #5455 引入），导致 Windows 上偏好 nushell 的用户无法将其设为默认 shell。社区认为该黑名单已过时。
   https://github.com/anomalyco/opencode/issues/20573

6. **[#29142] OpenAI 兼容模型的 write/edit 工具调用参数不符合 schema**
   评论 2 | 👍 5 | 状态: CLOSED
   使用 OpenAI 兼容接口时，内置 write/edit 工具存在参数形状不合法的问题，UI 直接报 schema 错误而非自动恢复。该问题在 #18131、#24604 中也有报告，是模型兼容性类高频 bug。
   https://github.com/anomalyco/opencode/issues/29142

7. **[#30285] [功能] Requesty 模型改为运行时动态发现**
   评论 2 | 👍 4 | 状态: CLOSED
   Requesty 提供商目前只展示 models.dev 静态快照中的模型，但该快照对 Requesty 存在延迟和准确性问题。社区请求支持运行时拉取 /models 接口。
   https://github.com/anomalyco/opencode/issues/30285

8. **[#30109] 按目录筛选时会话列表"加载更多"分页失效**
   评论 2 | 👍 3 | 状态: CLOSED
   两个关联 bug：`GET /session` 在指定 directory 时忽略 offset；且 limit 递增逻辑也异常。影响会话较多用户的 API 分页场景。
   https://github.com/anomalyco/opencode/issues/30109

9. **[#29950] 同一技能可经由多个发现根触达时，枚举结果不确定**
   评论 4 | 👍 0 | 状态: CLOSED
   OpenCode 从 `~/.claude/skills/` 和 `~/.agents/skills/` 等六个默认位置自动发现技能。当同一技能名通过符号链接同时挂在多个根下时，枚举顺序不确定，生成行为不可预期。
   https://github.com/anomalyco/opencode/issues/29950

10. **[#30252] provider.options.timeout 配置对 API 请求不生效**
    评论 2 | 👍 0 | 状态: CLOSED
    文档宣称可通过环境变量配置 timeout，但 Go 服务端实际未应用该配置，所有请求固定 300 秒超时。该 issue 为 HTTP API 层面的配置断连问题。
    https://github.com/anomalyco/opencode/issues/30252

## 重要 PR 进展

1. **[#39997] 文件读取去重：file_unchanged 桩替代未变更文件**
   `read` 工具调用时，若文件内容完整存在于上下文且磁盘未变化，则返回 stub 而非重新读取。属于跨会话文件读取去重（#39772）的一部分，可显著减少 token 消耗。
   https://github.com/anomalyco/opencode/pull/39997

2. **[#39994] 新增 OPENCODE_AIRGAP 环境变量开关**
   为内网/隔离部署提供单一切断开关，设置后禁用所有自动互联网访问，回应 #18233 与 #37888 中的企业级需求。
   https://github.com/anomalyco/opencode/pull/39994

3. **[#39978] 后台运行长耗时 shell 命令**
   构建、测试等长命令不再阻塞对话，新增后台任务列表 HTTP API 与取消能力，TUI 会显示后台任务徽标。这是 #39769 的落地实现。
   https://github.com/anomalyco/opencode/pull/39978

4. **[#39990] 同一 shell 命令反复失败时注入调试循环提示**
   当同一条 shell 命令多次非零退出时，判定模型陷入低层假设循环，自动注入提示引导其切换调试策略。Part of #39772。
   https://github.com/anomalyco/opencode/pull/39990

5. **[#39988] TUI 插件跨配置根自动发现**
   从全局配置目录及各层 `.opencode/plugins/tui` 目录发现插件，且支持 TUI 启动后动态新建的目录，取代了 #39981 较窄的实现。
   https://github.com/anomalyco/opencode/pull/39988

6. **[#39982] 失败 shell 命令的简洁错误输出**
   #39771 系列第 3 部分：此前命令失败会输出大段完整日志，本次改造为仅展示退出码、错误摘要与定向提示，降低噪音、减少 token 消耗。
   https://github.com/anomalyco/opencode/pull/39982

7. **[#14743] Anthropic prompt cache 命中率优化：system 拆分与工具稳定性**
   经典 PR（2 月创建，持续更新中）：通过稳定 system prompt 前缀和工具定义顺序，修复跨会话、跨仓库缓存 miss 的问题。关联 #5416、#5224、#14065 等一长串缓存 issue。
   https://github.com/anomalyco/opencode/pull/14743

8. **[#39985] 可配置发送键：Enter / Shift+Enter / Ctrl+Enter**
   设置页新增发送键三档选择，缓解误触 Enter 直接发送的痛点，提升长时间会话输入体验。
   https://github.com/anomalyco/opencode/pull/39985

9. **[#5657] 透明背景开关**
   延续近 8 个月的长期 PR：为 TUI 主题引入 tri-state 透明策略（auto/on/off），通过命令面板 `/transparency` 切换并持久化到配置。
   https://github.com/anomalyco/opencode/pull/5657

10. **[#39941] TUI 会话标签状态稳定性加固**
    三处修复：标签持久化写失败不再静默吞掉、`closeSession` 状态清理、避免幽灵标签残留，解决重启后标签丢失或错乱问题。
    https://github.com/anomalyco/opencode/pull/39941

## 功能需求趋势

- **缓存与性能优化成为主线**：从 #23595（system-reminder 位置稳定）、#16848（OpenRouter prompt_cache_ttl）、到 PR #27378/#14743（缓存稳定化）和 #39997（文件读取去重），社区对降低 token 消耗、提升本地推理缓存命中率的需求集中爆发。
- **模型服务快速接入**：DeepSeek V4 Flash 上线咨询（#39823）与 Requesty 运行时模型发现（#30285）表明，用户对 models.dev 静态快照的滞后性不满，期待 OpenCode 打通新模型即时可用链路。
- **TUI 插件体系扩展**：#39988、#39983、#30268 等围绕插件发现、运行时共享、纯副作用命令展开，插件生态正成为社区关注的新焦点。
- **离线/内网部署支持**：OPENCODE_AIRGAP（#39994）直接回应政企用户对数据不出域的需求。

## 开发者关注点

- **Windows 兼容性痛点集中**：#28480（Windows 11 无法启动）、#20527（PowerShell 工具仍诱导 agent 用 tail）、#30230（桌面版无法连接 WSL）——Windows 用户的工具链割裂感依然是高频反馈。
- **工具调用参数校验弹错过于生硬**：write/edit 工具多次被模型以非法参数调用（#18131、#24604、#29142），UI 直接展示 schema 错误且无自愈机制，社区认为应引导模型重新生成。
- **API/桌面端行为一致性**：#30094（session/status 不再递归聚合子目录）、#30109（分页 bug）、#30260（符号链接路径导致会话丢失）——多种会话管理回归问题令 API 调用方和桌面用户都感到困扰。
- **模型配置"文档与实现脱节"**：#30252（timeout 不生效）等表明配置项存在"写了文档但代码未接入"的问题，开发者希望配置链路具备更高的验证透明度。

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报（2026-08-01）

## 今日速览
过去 24 小时无新版本发布，但社区提交与合入非常密集：一批由 `a-yeyang` 提交的 PR 集中合入，修复了模型可用性刷新卡死、compaction 摘要截断、工具 Schema 校验失败等关键问题。此外，**compaction（上下文压缩）可靠性**成为本周最集中的痛点，已有 5 个相关 Issue 被反复讨论；`christianklotz` 的会话存储/服务端架构重构系列 PR 也在持续推进。

## 社区热点 Issues

1. **[#6187 Pi 在 WSL 中登录挂起](https://earendil-works/pi Issue #6187)** — 19 条评论
   GitHub Copilot 设备授权在浏览器中完成、设备已注册，但 WSL 终端内客户端检测不到授权完成而一直挂起。WSL 用户的核心登录链路受阻，是当前评论数最高的 Issue。

2. **[#6665 TUI 流式输出时单核占满 100%](https://earendil-works/pi Issue #6665)** — 11 条评论
   长会话流式输出时 `pi -ne` 单核打满。热点路径为 `Markdown.render` → `Intl.Segmenter`，发现 grapheme 分词未缓存且每个 chunk 都全量重建 Markdown。直接影响长会话使用体验。

3. **[#7267 自定义 Provider 文档与实现存在严重出入](https://earendil-works/pi Issue #7267)** — 8 条评论
   `docs/custom-provider.md` 与 `pi-coding-agent` 中 `registerProvider` 的 Extension API 实现不一致，导致开发者按文档接入自定义模型时失败。属于文档/API 契约问题。

4. **[#7020 compaction 之后 Pi 有时不继续生成](https://earendil-works/pi Issue #7020)** — 7 条评论 / 2 👍
   长期运行的"协调型"会话在 compaction 后偶发停滞。用户描述为 compaction 流程中的"隐藏问题"，影响长时任务。

5. **[#6879 auto-compaction 在上下文超过 100% 后才触发](https://earendil-works/pi Issue #6879)** — 7 条评论 / 5 👍
   单次 agentic turn 运行 2 小时，footer 超过压缩阈值后仍持续增长，直到 API 在 373k tokens 处拒绝请求才被迫压缩。用户建议每个 agent 步骤后都检查上下文用量。获 5 个 👍，社区诉求强烈。

6. **[#7161 anthropic-messages 路径从不发送 x-client-request-id](https://earendil-works/pi Issue #7161)** — 6 条评论
   OpenAI 各路径均发送该头，但 Anthropic 路径缺失，导致依赖该头做会话亲和性的网关（如双 Claude 账号 round-robin）无法分组会话。

7. **[#7199 支持 Fireworks 上的 Kimi K3](https://earendil-works/pi Issue #7199)** — 6 条评论
   K3 已上 models.dev，但 pi 0.82.1 的 Fireworks provider 无法选择；同时生成器将所有 Fireworks 模型映射方式也有问题。新模型跟进需求。

8. **[#7319 kimi-coding OAuth 401 直接中断回合](https://earendil-works/pi Issue #7319)** — 5 条评论
   内置 Kimi Code 订阅 OAuth 间歇性返回 `401 authentication_error`，但代码既不刷新 token，401 也被排除在两个重试分类器之外，导致整个回合失败。

9. **[#6996 Gemini 3.x 工具调用因缺失 thought_signature 失败](https://earendil-works/pi Issue #6996)** — 4 条评论
   使用 Gemini 3.5/3.6 系列时，触发工具调用并回传结果后订阅会话即失败——历史中缺少 `thought_signature` 字段。影响生产级 agent 使用。

10. **[#7301 模型可用性刷新卡死后永久不可恢复](https://earendil-works/pi Issue #7301)** — 3 条评论
    `forceRefreshAvailability()` 会链到卡死的旧 promise 上，即使底层原因已消失，`getAvailable()`/`refresh()` 也永远无法恢复。今日已被 PR #7421 修复。

## 重要 PR 进展

1. **[#7421 修复模型可用性刷新卡死](https://earendil-works/pi PR #7421)** — `a-yeyang`，已合入
   关闭 #7301。不再在卡死的 promise 上链式 `.then()`，改为独立启动重建，恢复 `getAvailable()` 的可用性。

2. **[#7420 compaction 摘要超 token 上限时判定失败](https://earendil-works/pi PR #7420)** — `a-yeyang`，已合入
   关闭 #7048。此前 `stopReason: "length"` 的截断摘要会被当作成功持久化，现在会正确失败，避免污染上下文。

3. **[#7419 规范化 OpenAI 兼容提供商的可选对象工具 Schema](https://earendil-works/pi PR #7419)** — `a-yeyang`，已合入
   关闭 #7010。TypeBox 在纯可选属性的对象上省略 `required`，严格网关会报 `null is not of type "array"`，此 PR 自动补全。

4. **[#7422 支持 ImageContent 直接传图片 URL](https://earendil-works/pi PR #7422)** — `a-yeyang`，已合入
   关闭 #6151。此前所有图片都会被转成 base64 data URI，现在可透传 URL 给原生支持的模型。

5. **[#7394 JSON 流式输出改为增量、线性复杂度](https://earendil-works/pi PR #7394)** — `christianklotz`，开放中
   关闭 #7290 的性能问题。`message_update` 改为仅发 delta，避免每次携带整个累计消息；同时为 JSON 输出增加 stdout 背压。注意属破坏性 wire-protocol 变更。

6. **[#7390 将 x64 基线降到 pre-Haswell CPU](https://earendil-works/pi PR #7390)** — `davidbrai`，开放中
   关闭 #7149。官方 `pi-linux-x64` 二进制因使用了 BMI2 指令（`shlx`），在 Sandy Bridge 等旧 CPU 上直接 SIGILL。此 PR 调整编译目标基线。

7. **[#7404 新增 Baseten 内置 Provider](https://earendil-works/pi PR #7404)** — `AlexKer`，已合入
   基于 OpenAI-compatible API 接入，用户设置 `BASETEN_API_KEY` 即可使用 Baseten 托管的模型。

8. **[#7381 统一模型刷新状态机](https://earendil-works/pi PR #7381)** — `xz-dev`，开放中
   解决 `/model`、登录/登出、API key 变更、扩展注册等多入口同时触发刷新时的竞态问题，建立一致的发布边界。

9. **[#7396 新增服务端会话后端](https://earendil-works/pi PR #7396)** — `christianklotz`，开放中
   为 `PiServer` 增加持久化 JSONL 后端，支持跨进程排他锁、崩溃恢复，并把会话事件映射为协议快照和实时转写。

10. **[#6216 新增 Amazon Bedrock Mantle OpenAI Responses Provider](https://earendil-works/pi PR #6216)** — `unexge`，开放中
    基于 OpenAI Node SDK 的 Bedrock Provider 实现，让 pi 可直接使用 Bedrock Mantle 的 OpenAI Responses API。更新于昨日，仍在评审中。

## 功能需求趋势

- **新模型/新 Provider 支持**：Kimi K3 on Fireworks（#7199）、Baseten（PR #7404）、Amazon Bedrock Mantle（PR #6216）——社区对快速接入新模型的诉求持续旺盛，且要求生成器映射逻辑更通用。
- **Compaction 可靠性**：auto-compaction 触发策略（#6879）、压缩后恢复（#7020）、手动/自动重复触发（#7253）、GHE.com 企业账号压缩失败（#7413）、摘要截断处理（PR #7420）——共 5+ 条相关讨论，是最集中的功能方向。
- **长会话/大上下文性能**：TUI 渲染优化（#6665）、JSON 模式线性输出（#7290/PR #7394）、输入延迟优化（#7385）——长会话场景下的 CPU 占用与交互流畅度是重点。
- **终端/平台兼容性**：Wayland 剪贴板失效（#7248）、Orca 终端 Kitty 图像能力识别（#7357）、WSL 登录挂起（#6187）、旧 x64 CPU 支持（#7149/PR #7390）。
- **协议与 API 网关兼容**：`x-client-request-id` 头缺失（#7161）、Anthropic 流解析丢首块（#7283）、OpenAI 兼容的数组 content（#7062）——说明越来越多用户通过网关/代理使用 pi，协议合规性需求上升。

## 开发者关注点

- **Compaction 是最大的痛点**：从触发策略、执行流程到失败恢复，多个环节存在问题，直接影响长会话可用性。用户希望在每个 agent 步骤后都检查上下文用量，而不是等到 API 拒绝。
- **长会话性能退化**：流式输出单核 100%（#6665）、输入延迟随工具调用数线性增长（#7385）、JSON 模式 O(n²) 累积输出（#7290）——"会话越长越卡"是高频抱怨。
- **认证与会话恢复问题**：WSL 下 Copilot 授权检测不到（#6187）、kimi-coding OAuth 401 不刷新不重试（#7319）、Gemini 历史缺 `thought_signature`（#6996）——认证失败/状态不一致会直接中断生产任务。
- **稳定性细节**：并发写 `settings.json` 丢配置（#7384）、RPC 消息在 compaction 期间被静默丢弃（#7150）、并行工具批处理丢已完成结果（#7053）——这些"低频率但高破坏性"的数据丢失类 bug 受到关注。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报（2026-08-01）

## 1. 今日速览

- 发布 v0.21.2，改进了 Autofix 的轮次限制与通知机制。
- `qwen serve` daemon 多工作区方向进入密集开发期：RFC 讨论（#6378，31 条评论）、资源上限跟踪（#8051）、内存预算实现（#8245）同步推进。
- 社区焦点集中在 Anthropic 转换器兼容性、工具调用格式可靠性，以及 Windows/WSL 平台体验问题。

---

## 2. 版本发布

### v0.21.2（过去 24 小时内发布）

- **Autofix 轮次治理**：经过五轮后，Autofix 将推迟低严重性建议；因轮次限制拒绝继续时，会发布可见通知告知用户。
- 更多变更内容详见 [Release v0.21.2](https://github.com/QwenLM/qwen-code/releases)。

---

## 3. 社区热点 Issues

### 1. RFC: 单个 `qwen serve` daemon 支持多工作区（#6378）
- **热度**：31 条评论（本日最高）
- **概述**：提出 1 daemon = N workspaces × N sessions 的模型，同时保持现有客户端单工作区行为兼容。
- **意义**：多工作区方向的奠基性讨论，直接驱动 #8051、#8182、#8245 等后续工作。
- [查看 Issue](https://github.com/QwenLM/qwen-code/issues/6378)

### 2. Minified React error #185 —— CherryStudio 集成崩溃（#5199）
- **热度**：9 条评论，6 月 16 日创建至今未解决
- **概述**：Windows 用户在 CherryStudio 全局安装的 Qwen Code 中触发 React 运行时崩溃，错误指向 `@qwen-code` 相关组件。
- **意义**：影响第三方 IDE 集成场景，社区持续等待修复。
- [查看 Issue](https://github.com/QwenLM/qwen-code/issues/5199)

### 3. 跟踪：限制多工作区 daemon 资源使用（#8051）
- **热度**：9 条评论
- **概述**：指出仅靠工作区/会话数量限制无法约束请求体、WebSocket 组装、session 状态等字节占用，需要字节级资源上限。
- **意义**：#6378 的后续跟踪 issue，为 daemon 生产环境落地划定了资源边界。
- [查看 Issue](https://github.com/QwenLM/qwen-code/issues/8051)

### 4. 延迟工具发现使 prompt 缓存前缀失效（#6721）
- **热度**：7 条评论
- **概述**：`tool_search` 发现隐藏工具后，Qwen Code 解析真实 schema 并调用 `setTools()`，导致已缓存的 prompt 前缀失效，长会话成本上升。
- **意义**：直接影响长会话性能与缓存命中率，属高频成本痛点。
- [查看 Issue](https://github.com/QwenLM/qwen-code/issues/6721)

### 5. Anthropic 4.6+ assistant-prefill 400 错误（#8039）
- **热度**：6 条评论，P1 优先级
- **概述**：影响所有 Claude Opus/Sonnet 4.6+ 及 5.x 系列；当 Gemini 格式历史以模型回合结束时，Anthropic 转换层产生 prefill 400，且 `thinking.display` 静默降级为 "omitted"。
- **意义**：P1 且波及面广，Anthropic 用户接入的核心阻塞问题。
- [查看 Issue](https://github.com/QwenLM/qwen-code/issues/8039)

### 6. daemon 给每个 ACP 子进程分配 50% 主机内存（#8182）
- **热度**：3 条评论
- **概述**：`getAcpMemoryArgs()` 基于宿主机内存计算 V8 old-space 上限，且按进程缓存同一个值——子进程数越多，OOM 风险越高。
- **意义**：多 ACP 场景下的内存失控隐患，与 #8051 资源治理直接相关。
- [查看 Issue](https://github.com/QwenLM/qwen-code/issues/8182)

### 7. JSON 风格工具调用参数泄漏为纯文本（#8207）
- **热度**：3 条评论
- **概述**：生产 DataAgent 会话中（qwen-code 0.21.0-preview.2），模型将工具参数序列化为纯文本而非结构化 `tool_call`，导致下游无法解析。
- **意义**：与 #8003 同属「模型丢弃 function-calling 格式」一类稳定性问题，社区反馈活跃。
- [查看 Issue](https://github.com/QwenLM/qwen-code/issues/8207)

### 8. Windows 上 @-file 读取失去 O_NOFOLLOW 保护（#8227）
- **热度**：3 条评论
- **概述**：Windows 无 `O_NOFOLLOW`，且 dev/ino 身份校验在 Windows 上可能失效，导致 #7206 的符号链接/TOCTOU 防护在 Windows 上被架空。
- **意义**：安全加固的跨平台缺口，欢迎 PR 贡献。
- [查看 Issue](https://github.com/QwenLM/qwen-code/issues/8227)

### 9. 子代理提问但用户无法回答（#7835）
- **热度**：3 条评论
- **概述**：子代理向用户提问后，主代理不收集也不转发，子代理无限等待。
- **意义**：子代理/多代理协作的基础交互缺陷，涉及会话管理与输入转发机制。
- [查看 Issue](https://github.com/QwenLM/qwen-code/issues/7835)

### 10. v0.21.2 启动时 SGR 鼠标转义序列泄漏到输入框（#8267）
- **热度**：2 条评论（新注册）
- **概述**：启动后终端出现大量 `ESC [ < button;x;y M` 原始鼠标事件序列，本应被 TUI 消费却注入输入缓冲区，无法正常输入。
- **意义**：v0.21.2 新引入的回归 bug，影响 TUI 基础可用性。
- [查看 Issue](https://github.com/QwenLM/qwen-code/issues/8267)

---

## 4. 重要 PR 进展

### 1. fix(webui): 长工具输出可折叠（#8251）
- 将 Bash/Execute 成功输出和长 `think` 内容的 500 字符硬截断改为默认折叠、可展开的视图，完整文本保留。
- [查看 PR](https://github.com/QwenLM/qwen-code/pull/8251)

### 2. feat(serve): 解析并报告 daemon 内存预算（#8245）
- 为 daemon 增加内存预算感知：读取 cgroup 限制、堆大小上限，并在诊断中报告，为 #8051 提供数据基础。
- [查看 PR](https://github.com/QwenLM/qwen-code/pull/8245)

### 3. refactor(cli): 移除 ACP 私有 serve 依赖（#8141）
- 将生命周期无关的 ACP/daemon 契约从 `serve/**` 迁至 `runtime/**`，解耦架构，便于独立演进。
- [查看 PR](https://github.com/QwenLM/qwen-code/pull/8141)

### 4. fix(cli): WSL/ConPTY 下跳过终端重绘优化（#7897）
- 修复 WSL + Windows Terminal 流式输出字符重复渲染（#7634），优化器生成的批量光标上移序列在 ConPTY 下处理异常。
- [查看 PR](https://github.com/QwenLM/qwen-code/pull/7897)

### 5. feat: 从任意会话分支（fork）（#8274）
- 会话分支不再局限于最新状态，支持从任意历史 Assistant 响应分叉；处理工具调用、取消、元数据记录等边界情况。
- [查看 PR](https://github.com/QwenLM/qwen-code/pull/8274)

### 6. fix(cli): 模型切换保持会话级作用域（#6579）
- 普通 `/model` 只更新当前会话，`/model --default` 显式持久化默认模型，避免意外污染全局配置。
- [查看 PR](https://github.com/QwenLM/qwen-code/pull/6579)

### 7. feat(skills): 自动技能策展器（#7846）
- 为自动生成的 Skills 增加确定性生命周期：记录使用情况、30 天未使用标记过期、完整包移出活动集。
- [查看 PR](https://github.com/QwenLM/qwen-code/pull/7846)

### 8. feat(desktop): 打包 Web Shell 为桌面应用（#8132）
- 将 Tauri 概念验证升级为可发布桌面壳，复用 Web Shell UI，补齐启动/恢复状态与工作区生命周期。
- [查看 PR](https://github.com/QwenLM/qwen-code/pull/8132)

### 9. fix(anthropic): 级联剥离孤立 tool_use 的 thinking 兄弟块（#8166）
- 当最后一个 `tool_use` 被当作 orphan 剥离时，同步清理同一回合的 `thinking`/`redacted_thinking` 残留块。
- [查看 PR](https://github.com/QwenLM/qwen-code/pull/8166)

### 10. feat(workflows): 冒泡工作流代理审批（#8240）
- Workflow 代理遇到 Shell/编辑/MCP/信息请求时，审批请求冒泡至父 TUI、ACP host 或 stream-json 控制通道，补全前台动态工作流权限路径。
- [查看 PR](https://github.com/QwenLM/qwen-code/pull/8240)

---

## 5. 功能需求趋势

从过去 24 小时活跃的 Issues/PRs 看，社区关注的功能方向集中在：

- **serve/daemon 资源治理**：多工作区支持（#6378）、字节级资源上限（#8051）、ACP 子进程内存分割（#8182）、内存预算报告（#8245）、serve 模块结构标准化（#5576）。
- **会话管理增强**：任意会话分支与 Git worktree 隔离（#8271/#8274）、子代理提问转发（#7835）、Web 端 skills 热重载（#8221）。
- **Anthropic 兼容性补齐**：prefill 400（#8039）、tool_use ID 字符集消毒（#8160）、tool_result 排序（#8161）、孤立 tool_use/thinking 清理（#8159/#8166）、thoughtSignature 保留（#8258）——一批针对 Anthropic wire 格式的修复集中涌现。
- **工具调用可靠性**：长会话中模型输出 XML/JSON 纯文本而非结构化 `tool_calls`（#8003/#8207）、工具发现导致 prompt 缓存失效（#6721）。
- **Windows/WSL 体验**：React UI 崩溃（#5199）、`O_NOFOLLOW` 安全缺口（#8227）、WSL 终端重绘（#7897）、SGR 序列泄漏（#8267）。
- **Web Shell 与桌面端**：长输出折叠（#8251）、权限选项去重（#8250）、自动 recap 会话隔离（#8262）、桌面应用打包（#8132）。
- **Skills 体系演进**：一键禁用内置技能（#8054）、自动技能策展（#7846）。

---

## 6. 开发者关注点

- **工具调用格式漂移**：模型在长会话（200+ 轮 / 180K+ 上下文）中偶尔丢弃 function-calling 格式，输出 XML/JSON 纯文本，导致下游解析失败——这是本日最集中的稳定性抱怨（#8003、#8207）。
- **Anthropic 接入成本**：多个 wire 级 bug（prefill 400、ID 未消毒、tool_result 顺序、thinking 残留）说明 Anthropic 模型接入仍处「填坑」期，5.x 新模型用户受影响明显（#8039 等）。
- **daemon/ACP 内存失控风险**：每个 ACP 子进程获得 50% 宿主机内存且不按子进程数分割，多客户端场景下 OOM 风险突出（#8182）。
- **Windows 平台被「降级」对待**：安全加固（O_NOFOLLOW）、TUI 渲染、文件校验在 Windows 上均出现缺口，Windows 用户反馈频率较高（#5199、#8227、#8267）。
- **子代理交互死锁**：子代理提问无人应答，暴露多代理编排中用户输入回传链路的缺失（#7835）。
- **CI E2E 稳定性**：多条 main 分支 E2E 失败集中在 ACP cron 与 SDK MCP server 测试（#8237、#8256、#8244、#8222、#8076），其中 ACP cron 测试已通过新增 `QWEN_CODE_TEST_CRON_FAST` 测试缝修复（#8243）。

---

**总结**：v0.21.2 的 Autofix 轮次治理是今日唯一正式发布；daemon 多工作区是当前最清晰的技术主线，内存与资源管理为第一优先级。Anthropic 兼容性和工具调用可靠性在快速修复中，但模型侧行为带来的不确定性仍需长期关注。Windows 平台体验是社区反馈最集中的短板。

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI（CodeWhale）社区动态日报 · 2026-08-01

> 数据来源：`Hmbown/DeepSeek-TUI`（Issue/PR 链接已指向迁移后的 `Hmbown/CodeWhale` 仓库）

## 1. 今日速览

v0.9.3 正式发布，重点支持 DeepSeek V4 Flash 并确立 **CodeWhale** 为公开产品名，legacy `deepseek-tui` npm 包正式弃用。社区焦点集中在 File 编辑工具对中长文本/中文注释/CRLF 文件的替换失败（#5003），修复 PR 已经跟上；同时“CodeWhale 未被 YouTuber 使用”“Constitution 中文译名”等讨论反映了产品定位与本地化上的关注。

## 2. 版本发布

### v0.9.3（CodeWhale）

- **最新发布**：v0.9.3 为当前 release，内置 **DeepSeek V4 Flash** 响应支持，并落地 canonical tools。
- **品牌切换**：`codewhale` 命令、npm 包、release 资产统一为小写 `codewhale`；legacy npm 包 `deepseek-tui` 已弃用，不再继续发布。
- **版本说明**：v0.9.3 由 72 个单职责 commit 组成，基于 `main` fast-forward 推进。
- 相关链接：[Release PR #4993](https://github.com/Hmbown/CodeWhale/pull/4993)

## 3. 社区热点 Issues

过去 24 小时更新共 8 条 issue，全部值得关注：

- [#5007 YouTuber 没有把 CodeWhale 用作 DeepSeek 的 TUI](https://github.com/Hmbown/CodeWhale/issues/5007)  
  `aboimpinto` · 5 条评论  
  > 作者关注的 YouTuber 在测试 DeepSeek V4 Flash 时选择了 Codex 而不是 CodeWhale。项目方也承认并非 DeepSeek 官方 TUI。这是产品心智与开发者采用率的讨论，对社区定位有参考价值。

- [#4949 Discussion: “Constitution” 中文翻译——“宪法”还是“协作准则”？](https://github.com/Hmbown/CodeWhale/issues/4949)  
  `SparkofSpike` · 5 条评论  
  > 由 PR #4908 引发的中文术语争议。讨论集中在“宪法”是否贴切，以及是否在中文语境下有过强政治色彩。影响文档和 UI 文案的本地化方向。

- [#5009 眼科计费广告（疑似垃圾 Issue）](https://github.com/Hmbown/CodeWhale/issues/5009)  
  `medicalbilling-usa` · 2 条评论  
  > 内容与项目完全无关，属于外部推广。提示维护者需要加强 issue 模板或反垃圾流程。

- [#5003 [bug] 中长文本 write 功能出现严重反复](https://github.com/Hmbown/CodeWhale/issues/5003)  
  `DracheTek` · 2 条评论  
  > File 工具 `action=edit` / `action=patch` 在约 700 行、含中文注释、CRLF 行尾的 C 文件上反复失败，导致模型 15+ 次失败尝试、3 次 `git checkout` 回滚。是当前最严重的真实开发痛点。

- [#5005 [enhancement] sandbox 支持文件系统路径白名单](https://github.com/Hmbown/CodeWhale/issues/5005)  
  `WillHouMoe` · 1 条评论  
  > Xcode 构建产物和日志位于 `~/Library/Developer/Xcode/DerivedData`，但 `workspace-write` 沙箱限制了访问。开发者希望增加外部路径白名单，是 macOS/iOS 开发场景的刚需。

- [#5000 Engine：让被中断的模型输出成为一等 session 条目](https://github.com/Hmbown/CodeWhale/issues/5000)  
  `cacdcaecawae` · 1 条评论  
  > 当前中断前已经展示给用户的文本只存在于 TUI 本地，没有进入权威 session，下一次请求会丢失。这是引擎层会话一致性问题。

- [#5002 [bug] 使用时报错：Tool ‘task’ is not available](https://github.com/Hmbown/CodeWhale/issues/5002)  
  `zhizhuo0325` · 1 条评论  
  > 报错信息显示 `Failed to locate tool: Tool 'task' is not available`，同时出现 Anthropic API HTTP 400。可能涉及工具注册或 API 配置问题，但当前缺少上下文。

- [#4382 [closed] 移除未维护的 ttf-parser PDF 依赖链](https://github.com/Hmbown/CodeWhale/issues/4382)  
  `Hmbown` · 0 条评论  
  > `cargo audit` 报告 RUSTSEC-2026-0192：`ttf-parser` → `lopdf` → `pdf-extract` → `codewhale-tui`。该 issue 已关闭，说明 v0.9.3 前已完成处理或纳入发布管理。

## 4. 重要 PR 进展

过去 24 小时共 17 条 PR，其中 10 条为人工 PR，7 条为 Dependabot 自动依赖升级。下面列出 10 条人工 PR：

- [#4993 [closed] Release v0.9.3：DeepSeek V4 Flash 与 canonical tools](https://github.com/Hmbown/CodeWhale/pull/4993)  
  v0.9.3 发布 PR，72 个单职责 commit，重点支持 DeepSeek V4 Flash，完成品牌与工具链收敛。

- [#5008 [open] fix(tui)：改善 File 编辑诊断信息并容忍陈旧行号](https://github.com/Hmbown/CodeWhale/pull/5008)  
  直接修复 #5003。为 File 工具增加可操作诊断、支持 stale-line-number 容错，降低大段替换反复失败的概率。

- [#5001 [open] fix(tui)：将圈号数字/Keycap 按 2 列宽度渲染](https://github.com/Hmbown/CodeWhale/pull/5001)  
  修复带圈数字 `①②`、Dingbat `❶❷`、Keycap `1️⃣` 在 CJK 终端下宽度计算错误导致的渲染抖动。

- [#4977 [closed] fix(tui)：让 AltGr+‘/’ 进入输入框而不是打开帮助](https://github.com/Hmbown/CodeWhale/pull/4977)  
  修复 Windows/ABNT2 键盘布局下 `AltGr+Q` 被识别为 `Ctrl+/` 帮助快捷键的问题。

- [#4981 [closed] feat(tui)：LaTeX 数学渲染支持环境块与常见命令](https://github.com/Hmbown/CodeWhale/pull/4981)  
  扩展 LaTeX 渲染，支持环境块、行内命令、重音、上下标以及大小写不敏感匹配。适合数学/学术场景。

- [#4985 [open] feat(runtime-api)：按 workspace 过滤 task 列表](https://github.com/Hmbown/CodeWhale/pull/4985)  
  为 `GET /v1/tasks` 增加可选 `workspace` 过滤，并在 `TaskSummary` 中返回工作区路径，方便 GUI 客户端分组展示。

- [#4992 [open] Layer 5.2：用户命令分发优先级、shadowing 与错误语义](https://github.com/Hmbown/CodeWhale/pull/4992)  
  补充 Gherkin 验收测试，覆盖用户命令覆盖内置命令/别名、缺失回退、非法命令等行为。

- [#5006 [open] fix(installer)：保留 Windows 超长用户 PATH](https://github.com/Hmbown/CodeWhale/pull/5006)  
  修复 NSIS 安装器因 `ReadRegStr` 缓冲限制，把超长 PATH 当作空值并覆盖的问题。

- [#5004 [closed] fix(docs)：恢复 v0.9.3 rustdoc 门禁](https://github.com/Hmbown/CodeWhale/pull/5004)  
  将 test-only synthetic-catalog helper 改作代码展示而非 intra-doc link，恢复 v0.9.3 文档构建质量门禁。

- [#4910 [open] docs：确定性验证表面的 sanity check（Draft）](https://github.com/Hmbown/CodeWhale/pull/4910)  
  作者明确表示这是“问题，不是贡献”的 Draft PR，讨论验证表面设计。可作为文档/测试策略输入。

另外，Dependabot 自动更新了 `libc`、`futures-util`、`clap_complete`、`ratatui`、`globset`、`docker/login-action`、`actions/stale` 等依赖。

## 5. 功能需求趋势

从当前 Issue 看，社区最关注的方向包括：

- **新模型快速跟进**：v0.9.3 已支持 DeepSeek V4 Flash；#5007 反映出社区希望 CodeWhale 更多出现在 DeepSeek 相关生态讨论中。
- **沙箱与外部文件访问**：#5005 要求支持外部日志/构建产物的路径白名单。
- **会话状态持久化**：#5000 希望中断输出成为 durable session item，避免文本丢失。
- **File 编辑工具的稳定性与可诊断性**：#5003 是最大痛点，直接影响模型在真实项目中的自主写代码能力。
- **本地化与语义准确性**：#4949 关于 “Constitution” 中文翻译，说明项目开始认真对待中文用户与文档语气。
- **供应链安全**：#4382 显示社区持续关注 Rust 依赖链中的 unmaintained 告警。

## 6. 开发者关注点

- **大文件编辑不可靠**：在含中文注释、CRLF 行尾的 700 行文件中，File 工具多次失败且无有效诊断信息（#5003）。
- **模型空转与回滚成本高**：由于缺少 actionable 错误，模型进行了 15+ 次失败尝试和 3 次 `git checkout` 全量回滚（#5003）。
- **沙箱阻碍真实开发**：Xcode DerivedData 等外部路径无法访问，导致构建调试工作流断裂（#5005）。
- **中断上下文丢失**：用户中断后的已有输出没有进入 session，影响后续模型理解上下文（#5000）。
- **工具注册与 API 报错**：`Tool 'task' is not available` 以及 Anthropic HTTP 400 缺少足够堆栈信息（#5002）。
- **产品认知焦虑**：社区在乎 CodeWhale 是否能在 DeepSeek 生态中成为常用 TUI，而不是被 Codex 等替代（#5007）。
- **中文社区参与度高**：从 Constitution 翻译讨论可见，中文母语用户愿意参与术语设计，但也对敏感词汇有顾虑（#4949）。

</details>

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar) 自动生成。*