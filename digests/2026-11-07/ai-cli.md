# AI CLI 工具社区动态日报 2026-11-07

> 生成时间: 2026-11-07 16:28 UTC | 覆盖工具: 9 个

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

# AI CLI 工具生态横向对比分析 · 2026-11-07

## 1. 生态全景

当前 AI CLI 工具已进入"可靠性竞赛"阶段：新功能竞争让位于稳定性、安全边界与跨端一致性的打磨。九个工具中有五个今日有 Release 或 PR 动作，但社区最热的讨论几乎全部集中在**静默失败、结果误报、配额异常和平台回归**等信任类问题上。安全侧动作明显升温——Gemini CLI、Qwen Code、OpenCode 同日出现凭据泄露防护、CI 隔离、命令识别加固等修复。Windows 平台问题在 Codex、OpenCode、Qwen Code、Copilot CLI 中同时爆发，成为跨工具的系统性短板。

---

## 2. 各工具活跃度对比

| 工具 | Release | 热点 Issues | PR 动态 | 今日特征 |
|---|---|---|---|---|
| Claude Code | v2.1.319（auto 模式权限收紧） | 10 条（最高 👍431） | 0 | 无代码提交，社区议题主导 |
| OpenAI Codex | rust-v0.169.0-alpha.2（无说明） | 10 条（最高 👍118） | 10+ 条 CLOSED（bot 批量） | 认证重构 PR 主导工程主线 |
| Gemini CLI | 无 | 10 条（多条 P1） | 10+ 条（安全修复密集） | 子代理可靠性 + 安全护栏 |
| GitHub Copilot CLI | v1.0.108-0/1、v1.0.107 | 10 条 | 0 | 版本迭代快，回归问题集中 |
| Kimi Code CLI | 无 | 无 | 无 | 完全静默 |
| OpenCode | v2.2.6（含 Windows 回归） | 10 条（单帖 324 评论） | 10 条（多领域活跃） | 免费层计量问题最突出 |
| Pi | 无 | 10 条 | 10 条（集中关闭） | 缺陷修复密集 |
| Qwen Code | nightly（说明截断） | 10 条（含 P1 安全项） | 10 条（CI 隔离为核心） | CI 安全基建最活跃 |
| DeepSeek TUI | 无 | 10 条（多为验收收尾） | 12 条（10 条为 Dependabot） | 发布验收阶段，外部贡献少 |

**读数说明**：Claude Code 与 Copilot CLI 今日 PR 为零，但两者社区议题热度（431、118 赞）高于多数有 PR 的工具，说明其规模已大到以"议题驱动"而非"提交驱动"运转。

---

## 3. 共同关注的功能方向

| 方向 | 涉及工具 | 具体诉求 |
|---|---|---|
| **跨端/跨产品上下文互通** | Claude Code、Codex、OpenCode | Claude Code ↔ Claude.ai Projects ↔ Desktop 会话共享（#2511 获 431 赞）；Codex 多账号隐私隔离（#20500）；OpenCode 桌面 vs Web 工具一致性（#48224） |
| **可信度与静默失败** | Claude Code、Gemini、Pi、DeepSeek TUI | "测试通过"来自陈旧输出（#104504）；子代理 MAX_TURNS 误报成功（#22323）；codemode 丢弃嵌套 Error（#10650）；引擎无日志卡死（#6184）——四家指向同一信任缺口 |
| **安全默认值** | Gemini、Qwen、Codex、Claude Code | 危险命令识别、always-allow 规则收紧、粘贴内容密钥防护（Gemini 四条同日 PR）；外部 PR CI 隔离（Qwen #16514）；运行时认证统一（Codex） |
| **Windows 平台健壮性** | Codex、OpenCode、Qwen、Copilot、DeepSeek TUI | 进程清理风暴（#34260）、shell 路径含空格回归（#62606）、PowerShell 审批粒度（#5379）、`/undo` 与 ChatGPT 认证（#6970、#7203） |
| **配额与成本可预期性** | Claude Code、OpenCode、Codex | 配额加速消耗（#105621）；Zen 免费层零用量误判（#62348）；关闭用量警告配置（#47740） |
| **子代理/多代理资源管理** | Gemini、Codex、Qwen、Claude Code | 已完成子代理占用线程（#22779）；子代理超时耗尽（#30170）；headless 记忆权限失效（#15597） |

**关键信号**：**跨端上下文互通**（Claude Code）与**免费层计量**（OpenCode）是各自社区绝对痛点，但均未形成跨工具共识，属于厂商独占体验优势的争夺点；而**可信度、安全默认值、Windows** 三类是真正的行业共性欠债。

---

## 4. 差异化定位分析

| 工具 | 功能侧重 | 目标用户 | 技术路线特征 |
|---|---|---|---|
| **Claude Code** | 与 Anthropic 产品生态深度绑定，auto 模式安全分级 | 既有 Claude 订阅用户、企业 | 服务端校验优先，权限判定上收云端 |
| **OpenAI Codex** | 桌面端 + Computer Use + 云端会话，多账号企业场景 | 企业/多身份开发者 | 运行时认证重构，bot 驱动大规模 PR |
| **Gemini CLI** | 子代理体系、AST 工具链、零依赖沙箱提案 | 追求 agent 自动化的开发者 | 沙箱 + 意图路由，安全护栏先行 |
| **Copilot CLI** | IDE 集成（`/code` 开 VS Code）、沙箱文件系统策略、企业 Entra | GitHub 生态、企业合规团队 | 与 IDE/GitHub 账号体系联动 |
| **OpenCode** | 免费模型层、MCP 连接池、GUI 插件、多端 TUI | 成本敏感、多项目用户 | 连接共享降本，插件化扩展 |
| **Pi** | SDK 级可定制（preamble、OAuth 回调、provider） | 平台集成方、二次开发 | SDK 优先，局部覆盖不替换默认 |
| **Qwen Code** | CI/CD 安全隔离、Web Shell、托管代理、渠道扩展 | 团队协作、自动化部署 | 一次性 runner 安全基建、渠道化 |
| **DeepSeek TUI** | 会话连续性、可靠性审计、网络环境适配 | 国内/代理环境用户 | Rust 实现，系统性审计驱动 |
| **Kimi Code CLI** | 无信号 | — | — |

**分层**：Claude Code / Codex / Copilot 走**平台生态绑定**路线；Gemini / Qwen / OpenCode / DeepSeek 走**工程基建与安全优先**路线；Pi 走**SDK 可定制**路线，是唯一明确以"被集成"为定位的工具。

---

## 5. 社区热度与成熟度

**热度梯队（今日信号）**
- **第一梯队（议题规模大）**：Claude Code（431 赞、57 评论）、OpenCode（单帖 324 评论）、Copilot CLI（版本迭代 + 回归讨论）
- **第二梯队（安全/基建活跃）**：Gemini CLI、Qwen Code、Codex（PR 密集）、Pi（PR 集中关闭）
- **第三梯队（收尾期）**：DeepSeek TUI（验收阶段，10/12 PR 为依赖升级）
- **静默**：Kimi Code CLI

**成熟度判断**
- **成熟期**：Claude Code、Copilot CLI——议题转向体验优化与跨产品协同，而非基础可用性
- **快速迭代期**：OpenCode（v2.2.6 即引入回归）、Codex（alpha 版本 + bot 批量 PR）、Copilot CLI（107→108 连续发版且带回归）
- **安全收敛期**：Gemini、Qwen——同日多条安全 PR，说明进入"补默认不安全行为"的集中治理阶段
- **平台迁移风险期**：Qwen 的 CI 隔离、Codex 的认证重构、Gemini 的沙箱提案，都是架构级变更，短期可能带来新回归

**信号**：**版本发布频率与回归率正相关**。Copilot CLI（#5379）、OpenCode（#62606）均在最新版本引入用户可感知回归，快速发版的信任成本开始显现。

---

## 6. 值得关注的趋势信号

1. **"可验证性"成为新的产品竞争力**。四家工具同时出现"误报成功/静默失败/无日志卡死"类反馈。对开发者的参考：在选型时，**能否复现 agent 的结论**（测试结果、改动记录、终止原因）比功能列表更重要。

2. **安全默认值从"可选"变为"必答题"**。Gemini、Qwen、Codex 同日以 PR 修正粘贴内容、命令识别、认证路径的默认不安全行为。这表明**监管与企业采购压力正传导到 CLI 层**，凭据泄露路径是审计重点。

3. **Windows 是跨工具的系统性欠债，而非个别缺陷**。五家工具同日出现 Windows 专属问题，覆盖进程、shell、认证、UI。对开发者的参考：Windows 场景建议延后跟随新版本升级，优先验证进程清理与 shell 调用路径。

4. **免费层计量成为获客与留存的临界点**。OpenCode 单帖 324 条评论、零用量误判反复出现，说明**免费额度的计量一致性直接决定用户信任**；其"仅免费模型过滤器"PR 也印证厂商在尝试用配置化缓解计量纠纷。

5. **Agent 架构进入"子代理治理"阶段**。线程配额释放、超时预算、钩子执行顺序、权限继承成为多家共同议题。对开发者：多代理工作流的**资源上限与权限语义**将比单代理能力更影响实际产出。

6. **批量 stale 关闭与 bot 驱动的信号噪音值得警惕**。Claude Code 多条旧痛点以 stale 收尾、Qwen 机器人维护的 CI 失败帖占评论榜前列、DeepSeek TUI 80% 以上 PR 为依赖升级。对决策者：**社区热度榜需剔除自动化噪音后再判断**，否则会高估或低估真实痛点及社区健康度。

7. **工程流程自律开始产生积压**。Qwen 多条 Issue 引用"约 5 轮评审后只落地 Critical 项"规则，Claude Code 与 Codex 出现大规模关闭潮——**评审与清理机制在控质的同时，也让非 Critical 议题失去可见度**，需关注后续积压清理节奏。

---
*数据说明：以上内容严格依据所提供的 2026-11-07 各工具社区摘要整理；Kimi Code CLI 无活动数据，未作推断；Qwen Code nightly 发布说明、Gemini #24246 工具数口径、OpenCode v2.2.6 插件细节均因原文截断或口径不一而未展开。*

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告（数据截止 2026-11-07）

> 说明：本次数据中所有 PR 的评论数字段均为 `undefined`、点赞均为 0，因此无法按实际评论数对 PR 排序。以下"热门 Skills 排行"依据其被 Issue 引用/关联的讨论密度、更新频次与涉及模块的社区反馈热度综合判断，并已注明数据局限。

## 1. 热门 Skills 排行

1. **mcp-builder（修复 PR #1742）** — 适配 `mcp>=2.0.0` 中 `streamablehttp_client` → `streamable_http_client` 的重命名及自定义 header 配置方式。关联 Issue #1390 指出该 skill 的 `evaluation.py` 对所有真实 MCP server 评分 0/N（TextContent 无法 JSON 序列化），使 mcp-builder 成为质量争议最集中的模块之一。状态：OPEN。
   https://github.com/anthropics/skills/pull/1742
2. **skill-creator（多维度修复）** — 同时存在 #1298（触发评测误报、Windows 兼容、运行时失败被当作未触发）、#1681（`package_skill.py` 独立运行报 ModuleNotFoundError）、#1997（YAML frontmatter 解析不一致），并有 Issue #1394（eval-viewer 属性安全 XSS）与 #202（文档化语气消耗 token）。状态：OPEN。
   https://github.com/anthropics/skills/pull/1298 ・ https://github.com/anthropics/skills/pull/1997
3. **webapp-testing（#1980 / #1976）** — 前者移除 `with_server.py` 中 `shell=True` 的命令注入风险，后者修正 `element_discovery.py` 对 textarea/select 的误判。安全性问题使其关注度突出。状态：OPEN。
   https://github.com/anthropics/skills/pull/1980
4. **docx（#1792 / #1734 / 相关 Issue #2018）** — LibreOffice 超时被误报为成功、孤儿评论检测、`merge_runs.py` 写出非法 XML（未绑定命名空间前缀）。文档类 skill 的可靠性问题密集。状态：OPEN。
   https://github.com/anthropics/skills/pull/1792
5. **claude-api（#1730 / Issue #1487）** — #1730 修复死链；Issue #1487 报告该 skill 单次工具调用即注入约 156k tokens 耗尽上下文。状态：OPEN。
   https://github.com/anthropics/skills/pull/1730
6. **xlsx（#2019）** — 修复 `external_links_at_risk` 未解析工作表作用域 defined names 导致的漏报（Fixes #2013）。状态：OPEN。
   https://github.com/anthropics/skills/pull/2019
7. **algorithmic-art / pptx（#1977 / #1975）** — `wrapAround()` 对负值处理错误；`thumbnail.py` 的 `--cols` 未提前校验。均为小范围确定性 bug 修复。状态：OPEN。
   https://github.com/anthropics/skills/pull/1977
8. **新增类 Skill 提案** — notion-spec-to-implementation、md2video-audio、pyxel、proofcore-contract-auditor、scnet-hpc、document-typography 等，覆盖产品规格转任务、Markdown 转视频、复古游戏、智能合约审计、HPC 运维、排版质检。状态：均 OPEN。
   https://github.com/anthropics/skills/pull/525

## 2. 社区需求趋势

- **信任与安全边界（最高讨论量）**：Issue #492（46 评论）指出社区 skill 以 `anthropic/` 命名空间分发，构成冒充官方的信任边界漏洞。
   https://github.com/anthropics/skills/issues/492
- **组织级共享与分发**：Issue #228 期望 Claude.ai 内直接共享 skill 库，替代"下载 .skill → Slack 发送 → 手动上传"；Issue #189 指出 document-skills 与 example-skills 安装内容重复、挤占上下文。
   https://github.com/anthropics/skills/issues/228
- **评测与质量门禁**：Issue #556 报告 `run_eval.py` 对所有查询触发率为 0%；Issue #1385 提议"预任务校准 → 对抗评审 → 交付验证"三道质量门。
   https://github.com/anthropics/skills/issues/556
- **上下文预算管理**：Issue #1329 提出 compact-memory（符号化压缩 agent 状态）；Issue #1487 反映 skill 加载体积失控。
   https://github.com/anthropics/skills/issues/1329
- **Agent 治理与安全模式**：Issue #412 提议 agent-governance（策略执行、威胁检测、信任评分、审计链）。
   https://github.com/anthropics/skills/issues/412
- **文档/办公自动化细节质量**：docx XML 合法性、前端 description 未说明"何时使用"（Issue #2064）、文档排版控制（PR #514）。
   https://github.com/anthropics/skills/issues/2064

## 3. 高潜力待合并 Skills

以下 PR 均在数据窗口内（2026-10 至 11 月初）有更新，接口明确、改动局部，落地概率较高：

- **#1980 webapp-testing 移除 shell=True** — 安全修复，更新至 2026-11-01。
  https://github.com/anthropics/skills/pull/1980
- **#1792 docx 超时误报修复** — 更新至 2026-11-01。
  https://github.com/anthropics/skills/pull/1792
- **#2019 xlsx 定义名解析修复** — 已关联 Issue #2013，更新至 2026-11-03。
  https://github.com/anthropics/skills/pull/2019
- **#525 pyxel 复古游戏 skill** — 自 2026-03-05 起长期开放，更新至 2026-11-01，作者为 Pyxel 项目作者 kitao。
  https://github.com/anthropics/skills/pull/525
- **#1245 notion-spec-to-implementation + quantitative-resume-auditor** — 更新至 2026-10-15，属需求缺口较大的工作流类。
  https://github.com/anthropics/skills/pull/1245
- **#1681 / #1997 skill-creator 可用性与解析修复** — 更新至 2026-10-24 / 2026-10-19。
  https://github.com/anthropics/skills/pull/1681

## 4. Skills 生态洞察

社区最集中的诉求是：**优先修复现有官方 Skill 的可靠性与安全性缺陷（命令注入、静默假成功、评测失真、上下文膨胀、命名空间冒充），而不是扩充新 Skill 数量。**

---

# Claude Code 社区动态日报 · 2026-11-07

## 1. 今日速览

今天只有一个小版本 v2.1.319，重点是收紧 auto 模式的权限判定：在遥测或功能开关关闭（包括 LLM 网关场景）时，无法被服务端校验的调用会改为询问或拒绝，不再回退到内置分类器，并提供了 `CLAUDE_CODE_AUTO_MODE_SERVER=0` 作为显式回退开关。社区侧最热的话题长期集中在“Claude Code 与 Claude.ai/Destop 之间的上下文互通”（#2511 获 431 个赞、57 条评论），同时 tmux 终端渲染错乱（#29937）持续发酵。过去 24 小时内没有新的 PR。

## 2. 版本发布

**v2.1.319**
- 变更 auto 模式行为：当遥测或功能开关关闭（包括位于 LLM 网关之后）时，服务端无法检查的调用会被询问或拒绝，不再回退到内置分类器。
- 可用 `CLAUDE_CODE_AUTO_MODE_SERVER=0` 保持原有行为。
- 发布说明指出 Bedrock、Vertex 和 Foundry 不受此变更影响（原文在“uncha...”处截断）。

链接：https://github.com/anthropics/claude-code/releases

## 3. 社区热点 Issues

1. **#2511 [OPEN] 将 Claude Code 连接到 Claude Projects 知识库**（👍431，评论 57）
   社区呼声最高的功能需求，希望复用 Claude.ai Projects 中的项目文档。高赞说明“跨产品上下文”是当前最大的体验缺口。
   https://github.com/anthropics/claude-code/issues/2511

2. **#29937 [OPEN] tmux 下终端渲染错乱、文本重叠覆盖**（👍57，评论 30）
   Ubuntu + tmux + alacritty 环境下 TUI 输出互相覆盖，属于高频日常开发场景的阻断性问题，讨论持续升温。
   https://github.com/anthropics/claude-code/issues/29937

3. **#13843 [OPEN] 从 Claude.ai 向 Claude Code 共享对话上下文**（👍130，评论 30）
   与 #2511 同属“上下文互通”主线，用户希望把已有对话直接带入 CLI。
   https://github.com/anthropics/claude-code/issues/13843

4. **#15881 [OPEN] Claude Code 与 Claude Desktop 无缝会话共享**（👍63，评论 12）
   同一主线的桌面端诉求，说明该需求覆盖 CLI、Desktop、Projects 多个入口。
   https://github.com/anthropics/claude-code/issues/15881

5. **#105621 [OPEN] 10 月中旬起用量配额下降明显加快（Max / Windows 桌面端）**（评论 8）
   工作流未变但配额消耗显著加速，涉及成本与配额公平性，已被标记为 duplicate，反映并非个例。
   https://github.com/anthropics/claude-code/issues/105621

6. **#104504 [OPEN] “测试通过”来自陈旧或被管道化的运行结果（跨 150 个会话测量）**（评论 4）
   直指模型/ Bash 工具对执行结果的误报，属于影响可信度的核心问题，且附有量化观察。
   https://github.com/anthropics/claude-code/issues/104504

7. **#97926 [OPEN] 同一账号下 Cowork 会话缺少 list_repos / add_repo 工具**（评论 4）
   GitHub App 在另一账号可用，说明集成存在账号级配置或授权不一致问题。
   https://github.com/anthropics/claude-code/issues/97926

8. **#92370 [OPEN] Claude in Chrome：所有站点被站点权限拦截，重装无效**（评论 3）
   浏览器工具对任意域名（含 example.com）均报“被站点权限阻止”，浏览器集成可用性受质疑。
   https://github.com/anthropics/claude-code/issues/92370

9. **#105868 [OPEN] Windows：新建会话缺少 `mcp__claude-in-chrome__file_upload` 工具**（👍4，评论 4）
   同一 Chrome 集成下其他工具存在、唯独文件上传缺失，被标记为 invalid，值得观察后续判定。
   https://github.com/anthropics/claude-code/issues/105868

10. **#74388 [CLOSED] 计费/路由不一致：选择 Opus 4.8 却按 Fable 5 计费，副模型 100% 限额中断 56 小时会话**（评论 4）
    暴露模型选择与实际计费路由脱节、以及副模型限额阻断长会话的问题，虽已关闭但机制风险仍在。
    https://github.com/anthropics/claude-code/issues/74388

> 另注：今日有多条 8 月提交的旧 Issue 被批量标记为 `stale` 并关闭（如 #84078 安全词误触发、#84070 注入系统提示覆盖 CLAUDE.md、#81209 `--channels` 未启动 MCP 进程、#84094 声称成功但未应用改动）。这些关闭更像是清理，而非问题已解决，相关痛点仍值得跟踪。

## 4. 重要 PR 进展

过去 24 小时内更新的 Pull Request 为 0 条，本日无 PR 动态可汇总。

## 5. 功能需求趋势

- **跨产品上下文互通（最热）**：Claude Code ↔ Claude.ai Projects ↔ Claude Desktop 的知识库与会话共享（#2511、#13843、#15881），是点赞与评论最集中的方向。
- **终端 / TUI 稳定性**：tmux 等复用型终端下的渲染正确性（#29937），属于 Linux 开发者高频场景。
- **成本与配额可预期性**：配额异常消耗（#105621）、模型选择与计费路由不一致（#74388）。
- **结果可信度**：测试结果误报、声称已改但未改（#104504、#84094），社区要求更可靠的状态报告。
- **浏览器与 GitHub 集成一致性**：Claude in Chrome 工具缺失/被拦截（#92370、#105868）、Cowork 的 GitHub 工具按账号不一致（#97926）。
- **安全策略与用户指令优先级**：安全词误触发、注入提示覆盖用户 CLAUDE.md（#84078、#84070），虽已按 stale 关闭，但属长期争议点。

## 6. 开发者关注点

- **上下文割裂是最强痛点**：多个高赞 Issue 反复指向同一诉求——不想在各 Claude 入口间手动搬运上下文。
- **安全策略的“误伤”体验**：正常的安全、网络类词汇触发降级或拦截，以及会话注入提示压过用户自定义指令，削弱了可控性。
- **可信度与可验证性**：开发者希望“测试通过”“已应用改动”这类结论能被真实复现，而不是来自陈旧输出。
- **账号/机器间行为不一致**：同一账号在不同机器上 GitHub 连接器、Cowork 工具表现不同，排查成本高。
- **配额与账单透明度**：配额加速消耗与计费路由偏差直接影响团队采用意愿。
- **批量 stale 关闭**：大量旧 Issue 以 stale 收尾，可能使仍存在的痛点失去可见度，建议开发者对关键问题重新提交或在讨论区跟进。

---
*说明：以上内容均基于所提供数据，发布说明在“uncha...”处截断，未作推测补全。*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报（2026-11-07）

## 1. 今日速览

今日社区动态以**Windows 桌面端稳定性问题**为绝对焦点：进程清理风暴、本地项目丢失、启动挂起、云端会话恢复失败等多条高热度 Issue 集中更新，反映出 Windows 客户端在更新与多账号场景下的可靠性短板。PR 侧则由 `copyberry[bot]` 批量提交的运行时认证（runtime authentication）重构主导，覆盖 Analytics、远程控制、Guardian Decisions 等模块。此外，一条关于**多命名账号支持**的功能请求以 118 👍 成为社区呼声最高的需求。

---

## 2. 版本发布

- **rust-v0.169.0-alpha.2**：本次 Release 说明仅标注版本号，未提供具体变更内容，暂无进一步可分析信息。

---

## 3. 社区热点 Issues（10 条）

1. **[#34260] Windows 桌面端无界 taskkill/conhost 清理风暴耗尽 WMI**（36 评论，11 👍）
   数百个 `taskkill.exe` 及其 `conhost.exe` 残留进程反复查询 WMI，属性能与系统资源级问题。评论数最高，是今日最受关注的缺陷。
   https://github.com/openai/codex/issues/34260

2. **[#20500] 功能请求：每个 app/connector 支持多个命名账号**（32 评论，**118 👍**）
   要求支持同一连接器的多账号授权、显式选择与硬性隐私边界。点赞数远超其他条目，是社区最强烈的功能诉求。
   https://github.com/openai/codex/issues/20500

3. **[#56645] Work 设置中本地浏览器使用被禁用**（32 评论，4 👍）
   Windows 端浏览器功能不可用，涉及核心工作流，评论活跃。
   https://github.com/openai/codex/issues/56645

4. **[#32396] macOS 上「锁定使用」已启用但自动解锁失败**（20 评论，10 👍）
   涉及 computer-use 安全与可用性的矛盾，影响 macOS 用户日常操作。
   https://github.com/openai/codex/issues/32396

5. **[#58447] macOS：dot 原生线程读取返回 DesktopThreadReadUnavailableError**（18 评论）
   即使桌面已连接并授权，文档化的 `cloud_threads.read` 路由仍失败，属 API 与桌面端集成缺陷。
   https://github.com/openai/codex/issues/58447

6. **[#59895] Windows：应用更新并切回个人账号后本地项目消失**（17 评论，6 👍）
   新近创建（2026-11-06）但迅速升温，涉及用户数据可见性，风险等级高。
   https://github.com/openai/codex/issues/59895

7. **[#22779] 已完成的子代理仍占用线程限制**（16 评论）
   CLI 子代理资源未释放，影响多代理工作流的可用规模。
   https://github.com/openai/codex/issues/22779

8. **[#47740] 请求增加关闭 CLI 用量上限警告的设置**（10 评论，27 👍）
   希望在 `config.toml` 中关闭主动用量警告。点赞数较高，属配置灵活性诉求。
   https://github.com/openai/codex/issues/47740

9. **[#52969] Windows Computer Use 无法初始化：写入内核资源失败（os error 3）**（10 评论）
   捆绑 CLI `0.162.0-alpha.17.2` 下 Computer Use 完全不可用。
   https://github.com/openai/codex/issues/52969

10. **[#41269] Rollout 对每条命令 stdout 重复保存 3 次，占会话字节 60%**（5 评论）
    指出 `stdout/aggregated_output/formatted_output` 冗余存储，`thread_history` 还存第 4 份，是明确的存储性能问题，值得开发者关注。
    https://github.com/openai/codex/issues/41269

> 其他值得留意：**[#59300]** Windows CLI 的 Chrome 访问失效（Desktop 正常）https://github.com/openai/codex/issues/59300 ；**[#59855]** Windows 恢复云管理会话报 `AbsolutePathBuf` 错误 https://github.com/openai/codex/issues/59855 ；**[#11744]** npm 全局安装在 Windows 上失效（已关闭）https://github.com/openai/codex/issues/11744 。

---

## 4. 重要 PR 进展（10 条）

> 注：以下 PR 均为 `copyberry[bot]` 提交、状态为 **CLOSED**，且评论数未提供。

1. **[#60122] 在 rollout trace 中保留 code mode 调度错误**
   修复 code mode 请求在 `CodeCellStarted` 事件前失败时、调度记录被抑制导致调用方错误丢失的问题。
   https://github.com/openai/codex/pull/60122

2. **[#60118] 在 rollout trace 回放时缓冲 payload JSON 读取**
   优化 trace 回放阶段的 JSON 读取行为。
   https://github.com/openai/codex/pull/60118

3. **[#60101] Analytics 请求使用运行时认证**
   让 Analytics 计划发现与报表请求遵循 `RuntimeAgentInstances` 及配置的运行时认证模式，并共享安装 ID 解析。
   https://github.com/openai/codex/pull/60101

4. **[#60096] 停止重试终态的运行时认证拒绝**
   对无效断言、暂停/吊销的运行时实例不再重试；永久性 refresh-token 失败予以保留。
   https://github.com/openai/codex/pull/60096

5. **[#60082] 通过 app-server 获取账号安全提醒**
   使用 app-server 的活动认证与 HTTP 运行时，并将结果绑定到触发登录。
   https://github.com/openai/codex/pull/60082

6. **[#60080] 支持异步模型请求预算检查**
   将 `budget_exhausted` 改为返回 `ExtensionFuture`，在 HTTP 与 WebSocket 生成前 await 预算检查。
   https://github.com/openai/codex/pull/60080

7. **[#60075] 支持异步 host service-tier 读取与确认**
   `AgentServiceTier` 读取异步化，更新返回本地确认回执，并在根启动与设置更新中 await。
   https://github.com/openai/codex/pull/60075

8. **[#60073] 远程控制请求使用运行时认证**
   修复远程控制注册、刷新与客户端管理请求绕过运行时认证模式、直接使用 ChatGPT bearer 的问题。
   https://github.com/openai/codex/pull/60073

9. **[#60055] 复用 WebSocket 访问前重新认证运行时请求**
   防止运行时被暂停后仍可通过已打开的 WebSocket 提交工作，需重新握手校验。
   https://github.com/openai/codex/pull/60055

10. **[#60061] 支持 Cloud 图片消息与可编辑草稿交接**
    此前 Cloud 消息仅支持纯文本；现支持图片，并在草稿切换到 Cloud 时处理编辑器输入。
    https://github.com/openai/codex/pull/60061

> 另有与协议/模型相关者：**[#60049]** 启动子代理时保留模型目录（避免丢失 `tool_search` 等远程能力）https://github.com/openai/codex/pull/60049 ；**[#60048]** 插件 `defaultPrompt` 上限从 128 提升至 512 字符（最多 3 条）https://github.com/openai/codex/pull/60048 ；**[#60046]** 派生 MCP 网络策略并保留已保存的拒绝项 https://github.com/openai/codex/pull/60046 。

---

## 5. 功能需求趋势

- **多账号与隐私隔离**：`#20500`（118 👍）呼声最高，反映多身份工作流与企业/个人隔离需求。
- **配置可控性**：`#47740` 希望关闭用量警告，体现用户对 CLI 噪音与提示的精细控制诉求。
- **Computer Use / 浏览器能力**：`#56645`、`#52969`、`#59300` 三条均指向本地浏览器与 computer-use 在 Windows 上不可用或初始化失败，是跨 CLI 与桌面端的功能一致性缺口。
- **子代理与多代理资源管理**：`#22779` 关注线程配额释放。
- **存储与性能**：`#41269` 指出会话输出冗余存储，属数据层性能优化方向。

---

## 6. 开发者关注点（痛点与高频需求）

- **Windows 桌面端可靠性是最大痛点**：进程清理失控（#34260）、更新后本地项目丢失（#59895）、启动挂起（#49721）、云会话恢复失败（#59855）、后台 PowerShell 探针抢焦点（#23892）集中出现，覆盖性能、会话与数据安全多个层面。
- **更新与多账号切换的副作用**：多条 Issue 与「应用更新」「切回个人账号」相关，提示状态迁移与账号上下文管理存在系统性问题。
- **功能在各入口间不一致**：同一台机器上 Desktop 可用而 CLI 不可用（#59300）、Work 设置禁用本地浏览器（#56645），开发者期望跨端行为统一。
- **认证与运行时重构是今日工程主线**：大量 PR 将各模块统一到运行时认证（Analytics、远程控制、Guardian Decisions、WebSocket），并明确停止对终态拒绝的重试——显示团队正系统性地收紧认证路径与会话安全边界。

---
*数据来源：github.com/openai/codex，时间窗口为 2026-11-07 过去 24 小时更新。*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报（2026-11-07）

数据来源：github.com/google-gemini/gemini-cli

## 1. 今日速览

过去 24 小时无新版本发布，但社区活跃度集中在**子代理（subagent）可靠性**与**安全边界**两条主线：多个 P1 级 Issue 指向子代理超时、挂起与错误上报成功的问题，同时一批同日提交的 PR 集中修复凭据泄露、危险命令识别与配置文件隔离等安全缺口。工具调用一致性与临时文件管理也是本轮高频修复主题。

## 2. 版本发布

过去 24 小时内无新 Release。

## 3. 社区热点 Issues

1. **#22323 子代理 MAX_TURNS 中断被误报为 GOAL 成功**（P1，13 评论，👍2）
   `codebase_investigator` 在未做任何分析前就触及最大轮次限制，却上报 `status: "success"` / `Termination Reason: "GOAL"`，会掩盖真实中断，影响自动化流程的可信度。
   https://github.com/google-gemini/gemini-cli/issues/22323

2. **#21409 Generalist agent 无限挂起**（P1，8 评论，👍8）
   一旦 CLI 交给 generalist agent，简单操作（如建文件夹）也会挂起至一小时以上。高点赞说明影响面广，是当前最受用户抱怨的稳定性问题。
   https://github.com/google-gemini/gemini-cli/issues/21409

3. **#19873 零依赖 OS 沙箱 + 执行后意图路由**（P2，9 评论）
   提案利用 Gemini 3 模型对 bash/POSIX 工具链的原生亲和性，通过沙箱与意图路由释放其原生能力，属于架构层面的重要设想。
   https://github.com/google-gemini/gemini-cli/issues/19873

4. **#22745 AST 感知文件读取、搜索与映射的影响评估**（P2，7 评论）
   EPIC 级调研：AST 工具能否用单次调用精确读取方法边界、减少轮次，关系到 agent 效率的下一阶段优化。
   https://github.com/google-gemini/gemini-cli/issues/22745

5. **#21968 Gemini 不主动使用 skills 与子代理**（P2，7 评论）
   用户反馈必须显式指令才会调用自定义 skills/子代理，暴露了模型自主调用能力的短板。
   https://github.com/google-gemini/gemini-cli/issues/21968

6. **#24246 工具数超过 128 个时触发 400 错误**（P2，3 评论；摘要正文写作 400 个工具，数据本身存在口径不一致）
   https://github.com/google-gemini/gemini-cli/issues/24246

7. **#22672 Agent 应抑制破坏性操作**（P2，3 评论，👍1）
   模型在复杂 git 操作中可能使用 `git reset`、`--force` 等命令，虽有更安全替代方案。属于安全护栏方向的关键需求。
   https://github.com/google-gemini/gemini-cli/issues/22672

8. **#22267 Browser Agent 忽略 settings.json 覆盖项**（P2，5 评论）
   全局/项目级 `settings.json` 中的 `maxTurns` 等配置对 Browser Agent 无效，反映 AgentRegistry 与配置系统脱节。
   https://github.com/google-gemini/gemini-cli/issues/22267

9. **#21983 browser 子代理在 Wayland 下失败**（P1，4 评论，👍1）
   Linux Wayland 环境兼容性问题，涉及桌面 Linux 用户的可用性。
   https://github.com/google-gemini/gemini-cli/issues/21983

10. **#22598 子代理轨迹应可通过 `/chat share` 查看**（P3，2 评论，👍1）
    轨迹已由聊天记录服务保存但难以访问，开放查看有助于调试与评测子代理行为。
    https://github.com/google-gemini/gemini-cli/issues/22598

## 4. 重要 PR 进展

1. **#30169 阻止粘贴的 @ 文本与模糊匹配附加密钥**（P1，security）
   修复粘贴的 shell 记录可能在未询问的情况下把 SSH 私钥附加到模型请求的问题；粘贴文本默认惰性处理。（Fixes #26730）
   https://github.com/google-gemini/gemini-cli/pull/30169

2. **#30171 无论参数位置如何都标记递归/强制 `rm`**（P1，agent）
   `rm -r -f`、`rm -Rf`、`rm --recursive --force` 等变体此前未被识别为危险命令，此为安全识别加固。（Part of #26767）
   https://github.com/google-gemini/gemini-cli/pull/30171

3. **#30196 阻止为受污染 shell 命令保存 always-allow 规则**（security）
   此前对含不可信参数的命令选择“始终允许”会保存到命令根（如所有 `npm ...`），此 PR 收紧该行为。
   https://github.com/google-gemini/gemini-cli/pull/30196

4. **#30170 避免本地子代理在模型调用停滞时耗尽超时**（P1，agent）
   为单次模型调用增加可选超时，避免 `cli_help` 等待整整 3 分钟再额外 60 秒恢复。（Fixes #29257）
   https://github.com/google-gemini/gemini-cli/pull/30170

5. **#30175 为所有模型应用本地子代理的 generateContentConfig**（agent）
   使 `auto`、`flash`、`pro` 及自定义模型均能下发 temperature、topP、topK、thinkingConfig。（Fixes #30168）
   https://github.com/google-gemini/gemini-cli/pull/30175

6. **#30172 每个工具调用 ID 仅保留一个结果**（P2，agent）
   修复会话保存与发往模型的请求中出现重复工具结果的问题。（Fixes #28004；读取侧已由 #29618 修复）
   https://github.com/google-gemini/gemini-cli/pull/30172

7. **#30020 重试时丢弃失败尝试流出的工具调用**（agent）
   `GeminiChat` 中途重试时，前端会同时收集两次尝试的 `ToolCallRequest` 事件。（Fixes #28004 相关流式一致性问题）
   https://github.com/google-gemini/gemini-cli/pull/30020

8. **#30088 将错误报告移出共享临时目录**（P2，security，help wanted）
   含完整聊天历史的 `gemini-client-error-*.json` 此前写入 `os.tmpdir()` 且权限默认；改至 `~/.gemini/tmp/error-reports/` 并限制为本人可读。
   https://github.com/google-gemini/gemini-cli/pull/30088

9. **#30173 在不受信任目录中加载 `~/.gemini/.env`**（security）
   修复工作区账号用户在受信任目录外陷入无限登录循环的问题。（Fixes #27114）
   https://github.com/google-gemini/gemini-cli/pull/30173

10. **#30194 `gemini models` 漏列 `gemini-3.8-flash`**（P2，core，v0.67.0）
    该模型在 `/model manage` 中可用却未出现在 `gemini models` 输出，PR 附带了失败/通过测试验证。（Fixes #30193）
    https://github.com/google-gemini/gemini-cli/pull/30194

## 5. 功能需求趋势

- **子代理体系成熟化**：轨迹可见性（#22598）、示例代理库（#18283）、codebase investigator 改进（#18282）、Sprint 规划（#20195）等议题密集出现，表明社区正从“能用”走向“可观测、可复用”。
- **AST 感知工具链**：EPIC #22745 与 #22746 探索用 AST 工具提升代码读取/搜索精度，并点名 tilth、glyph 作为候选。
- **Agent 安全护栏**：破坏性命令抑制（#22672）、危险命令识别（#30171）、always-allow 规则收紧（#30196）、密钥附加防护（#30169）构成清晰的安全方向。
- **平台兼容性**：Wayland（#21983）等桌面 Linux 环境适配需求浮现。
- **配置与工具规模治理**：settings.json 覆盖失效（#22267）、工具数量上限导致 400 错误（#24246），指向配置系统与工具注册的可扩展性问题。

## 6. 开发者关注点

- **稳定性优先于新功能**：P1 级挂起、误报成功、超时耗尽等问题占据评论榜前列，说明当前最大痛点是“任务能否可靠完成并可被信任”。
- **模型自主性不足**：开发者希望模型主动调用 skills/子代理（#21968），而非依赖显式指令。
- **安全默认值**：多条 PR 同日修复“默认不安全”的行为（临时目录权限、粘贴内容、allow 规则），开发者对凭据泄露路径敏感。
- **工作区卫生**：模型在随机目录生成临时脚本（#23571）增加清理与干净提交的负担；交互式提示导致卡死（#22465、#22186）也被多次提及。
- **配置一致性**：同一份 `settings.json` 在不同组件（如 Browser Agent）行为不一致，是配置管理层面的共性抱怨。

说明：Issue #24246 的标题写“> 128 工具”，摘要正文写“超过 400 个工具”，原文口径不一致，本报告如实保留；PR 条目下方评论数在数据中缺失（显示为 undefined），故未列出评论数。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报（2026-11-07）

## 今日速览
今日发布 v1.0.108-0/1 与 v1.0.107，重点集中在沙箱文件系统策略、托管共享 tgrep 索引、`/index` 与 `/code` 新命令、VS Code 集成和统一 `/settings` 面板。Issue 侧最突出的是企业身份认证（Entra broker 在 Windows/macOS 上的 MCP 登录问题）以及 1.0.107 引入的 PowerShell 审批与发行说明质量问题。

## 版本发布
- **v1.0.108-1**：Grok 4.7 / 4.6 的 PDF 附件改为回退为文件引用而非中断会话；沙箱开启时，`/cd` 后自动重启本地 MCP 服务器以遵循新目录的受限路径。
- **v1.0.108-0**：新增 `sandbox.userPolicy.filesystem.enumeratePaths`（Windows 仅枚举目录授权）；新增 `/index` 命令并对符合条件的仓库默认启用托管共享 tgrep 索引。同时改进了对 Copilot CLI 自身行为的问答能力。
- **v1.0.107（2026-11-06）**：Rex 终端支持 Kitty direct placement 内联图片；新增 `/code` 在 VS Code 打开当前会话；`copilot config` 新增 Fusion 层级设置；`/settings` 对所有用户开放统一面板并支持跨设置与本地资源的全局搜索。

## 社区热点 Issues
1. **[#5379](https://github.com/github/copilot-cli/issues/5379)** PowerShell 审批解析器在 1.0.107 中要求对简单 Git 命令做整脚本审查，已获授权仍频繁弹窗 —— 直接影响日常开发流畅度，属新版本回归。
2. **[#5377](https://github.com/github/copilot-cli/issues/5377)** 1.0.106 与 1.0.107 的发行说明除日期外完全相同，`changelog.md` 对应章节亦不一致 —— 影响用户判断升级价值。
3. **[#5370](https://github.com/github/copilot-cli/issues/5370)** Fusion/Auto 模式下长时后台 shell 命令导致 agent 输出被扣留到下一轮用户输入，用户观感为“卡死”。
4. **[#5236](https://github.com/github/copilot-cli/issues/5236)** Windows 上 Entra broker 的 MCP 登录令牌缓存始终为 0 字节，每个新进程重复弹出账号选择。
5. **[#5250](https://github.com/github/copilot-cli/issues/5250)** macOS 上并发 Entra 登录被拒（"sign-in is already in progress"），且被拒的缓存令牌无法恢复，多个远程 MCP 服务器启动即失败。
6. **[#5376](https://github.com/github/copilot-cli/issues/5376)** `copilot --acp` 模式完全不产生 OpenTelemetry traces/metrics，企业可观测性缺口。
7. **[#5371](https://github.com/github/copilot-cli/issues/5371)** 通过 `COPILOT_PROVIDERS_CONFIG` / `COPILOT_PROVIDER_*` 配置的自定义 BYOK 模型在 `--host-environment` 与 `--server` 模式下被忽略。
8. **[#5375](https://github.com/github/copilot-cli/issues/5375)** 请求支持禁用内置斜杠命令，避免自定义 review skill 与内置 `/review` 冲突。
9. **[#5378](https://github.com/github/copilot-cli/issues/5378)** 请求为聊天时间线与输入编辑器提供完整键盘导航，当前仅限局部区域。
10. **[#4995](https://github.com/github/copilot-cli/issues/4995)** 建议改进对话回滚体验：高亮请求/最终回复轮次并支持折叠中间过程，缓解日志冗长难以回溯的问题。

此外，**[#5112](https://github.com/github/copilot-cli/issues/5112)**（OSC 7501 程序状态协议，👍20）已关闭，是本期社区呼声最高的终端渲染需求之一。

## 重要 PR 进展
过去 24 小时内无 Pull Request 更新。

## 功能需求趋势
- **终端与渲染体验**：OSC 7501 状态上报、Rex 内联图片、Markdown 表格换行、对话可折叠/高亮。
- **企业认证与可观测性**：Entra broker 令牌缓存、并发登录处理、ACP 模式 OTel 导出、sandbox 企业策略文档。
- **沙箱与权限模型**：Windows 枚举路径授权、`failIfUnavailable` 探测失败、`gh api` 路径误判、PowerShell 审批粒度。
- **IDE 与编辑器集成**：`/code` 打开 VS Code、`$EDITOR` 快捷键回归、键盘导航。
- **扩展性**：可禁用内置斜杠命令、插件安装对 Git LFS 仓库的兼容、非交互模式下自定义模型提供商。

## 开发者关注点
- **回归问题集中爆发**：1.0.107 在权限审批（#5379）与发行说明（#5377）上引发不满，升级信任度受影响。
- **企业场景摩擦**：Windows/macOS 上的 Entra MCP 登录问题长期未解（创建于 10 月），跨平台一致性不足。
- **非交互/服务器模式功能缺口**：OTel 与自定义模型提供商在 ACP、`--server` 模式下失效，阻碍自动化与 CI 集成。
- **交互体验细节**：输出扣留、批量权限提示、终端滚动回溯源，是高频反馈体验痛点。
- **配置可控性**：社区希望更细粒度地控制内置命令、沙箱授权与模型来源。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 · 2026-11-07

## 1. 今日速览

v2.2.6 发布，引入 MCP 连接池共享与 GUI 插件主题/新插槽能力，同时带来一处 Windows shell 路径含空格的回归。社区热度集中在免费额度（Zen free tier）相关的大量误判与配额异常，以及高上下文场景下 opencode-go/deepseek-v4.1-flash 的严重延迟问题。此外，GLM 5.x 默认推理等级不兼容、Windows 进程/转义类缺陷成为今日多条 Issue 的共同主题。

## 2. 版本发布

**v2.2.6**（PR #61185 等）
- **共享 MCP 连接**：为 MCP server 开启连接池后，相同配置的多个项目可共享同一连接，减少进程数量并加快启动。
- **GUI 插件主题与新插槽**：GUI 插件支持主题定制并新增可用插槽（发布说明在此处截断，其余细节未给出）。
- ⚠️ 回归风险：Issue #62606 报告升级到 v2.2.6 后，Windows 上 shell 可执行文件路径含空格（用户名含空格、Store 版 PowerShell 7 别名）会导致所有 shell 工具调用失败。
- 链接：https://github.com/anomalyco/opencode/pull/61185

## 3. 社区热点 Issues（10 条）

1. **#59387 [OPEN] Zen 免费层问题主帖** — 324 条评论、24 👍，是免费额度报错（"Free usage exceeded" / "limit reached"）的官方汇总帖，社区反馈量最大，说明免费层稳定性仍是当前最突出的体验问题。
   https://github.com/anomalyco/opencode/issues/59387

2. **#57849 [OPEN] deepseek-v4.1-flash 高上下文预响应头停顿** — 在 241k–607k 上下文、97.97%–99.97% 缓存命中下，响应头延迟达 21.7–178.2 秒（V2 2.0.32，含请求级追踪），直接影响长会话可用性。
   https://github.com/anomalyco/opencode/issues/57849

3. **#58175 [CLOSED] 提示缓存"崩塌"实为本地插件所致** — 作者更正：是本地插件在系统提示中注入随会话大小变化的提醒，导致每轮提示词变化；对插件作者排查缓存问题有参考价值。
   https://github.com/anomalyco/opencode/issues/58175

4. **#62592 [OPEN] GLM 5.x 默认推理等级 medium 被拒** — GLM 5 API 仅接受 low/high/max，默认 medium 使所有相关请求失败（InvalidRequest），属新模型适配缺陷。
   https://github.com/anomalyco/opencode/issues/62592

5. **#62348 [CLOSED] 全新账号零用量即触发免费消息上限** — 新账号仪表盘显示 0 请求 / 0 token / $0.00，却提示额度用尽，印证免费层计量异常。
   https://github.com/anomalyco/opencode/issues/62348

6. **#62355 [CLOSED] 配额 Bug（Zen）** — 用户称每日未使用任何 token 仍被告知配额耗尽，与 #59387 属同一问题簇。
   https://github.com/anomalyco/opencode/issues/62355

7. **#62606 [CLOSED] v2.2.6 Windows shell 含空格路径导致全部 shell 调用失败** — 新版本直接回归，影响 Windows 用户名含空格或 Store 版 PowerShell 用户，优先级高。
   https://github.com/anomalyco/opencode/issues/62606

8. **#62346 [CLOSED] 子代理权限不遵守 last-match-wins** — 子代理会话拒绝 frontmatter 明确允许的 edit/write，deny-all 位于路径级 allow 之前时行为与文档不符，涉及代理权限模型正确性。
   https://github.com/anomalyco/opencode/issues/62346

9. **#56748 [OPEN] [reproduced] TUI 已投递图片消息的排队卡片残留** — Windows v2 TUI 上卡片在轮次结束后仍悬于输入框上方，已复现，属 UI 状态清理缺陷。
   https://github.com/anomalyco/opencode/issues/56748

10. **#39773 [CLOSED] 空 Git 仓库共用 "global" 项目 ID 导致会话跨目录泄漏** — 无提交无远端的仓库全部落到同一 global project_id，session.list 返回无关目录会话，涉及数据隔离。
    https://github.com/anomalyco/opencode/issues/39773

（另值得留意：#62524 `prefill_cap_refused` 容量拒绝、#52958 意大利支付被拒、#56771 Windows shell 特殊字符未转义、#61672 侧边栏会话缺失。）

## 4. 重要 PR 进展（10 条）

1. **#59477 [OPEN] 浏览器工具改为经客户端 MCP 由桌面端提供** — 草稿，参照 client MCP 方案（#57502–#57506），桌面端托管名为 `browser` 的 MCP server 走 `/api/experimental/client-mcp`，有望解决 #48224 中 Web 会话暴露桌面专属浏览器工具的问题。
   https://github.com/anomalyco/opencode/pull/59477

2. **#62608 [OPEN] Web 应用加载允许的插件 GUI** — 关联 #60976，目前 GUI 插件仅在桌面端加载，此 PR 将其扩展到 Web（待设计批准）。
   https://github.com/anomalyco/opencode/pull/62608

3. **#62602 [OPEN] Windows 子进程改用 Job Object** — 解决超时/中断/移除后子进程残留、opencode 崩溃后整棵进程树存活并占用输出句柄的问题。
   https://github.com/anomalyco/opencode/pull/62602

4. **#62609 [OPEN] 大型模型设置目录窗口化** — 关闭 #62583，避免打开 Models 设置时一次性挂载全部模型行，改善大目录性能。
   https://github.com/anomalyco/opencode/pull/62609

5. **#62597 [OPEN] 修复 flaky CI 测试及其背后的应用竞态** — 基于近 300 次 `check-test` 运行逐一定位根因，未使用超时/重试/跳过等手段，对 CI 稳定性有直接价值。
   https://github.com/anomalyco/opencode/pull/62597

6. **#60392 [OPEN] 新增仅免费模型过滤器** — 引入 `OPENCODE_ONLY_FREE_MODELS` 环境变量（关联 #60383），方便用户与团队限制模型选择范围。
   https://github.com/anomalyco/opencode/pull/60392

7. **#58519 [OPEN] TUI 在工作区目录加载完成后重试提示** — 针对 #52171 的 v2.1.4 静默提交复现，旧版换行插入症状未复现，聚焦加载时序问题。
   https://github.com/anomalyco/opencode/pull/58519

8. **#62552 [OPEN] 补齐 zh / zht 本地化缺失键** — app 与 ui 字典落后于 `en.ts`，导致中文界面中英混杂，此 PR 补齐键值。
   https://github.com/anomalyco/opencode/pull/62552

9. **#62584 [OPEN] 不再把不兼容服务器标为 OpenCode 1** — 修复 #53375（#62582 重复报告），纠正服务器版本识别标签。
   https://github.com/anomalyco/opencode/pull/62584

10. **#61684 [CLOSED] 会话固定到侧边栏标签条顶部** — 桌面/Web 会话标签菜单新增 Pin/Unpin，固定状态可跨刷新保留，与 #61647（Home 会话列表固定）互补。
    https://github.com/anomalyco/opencode/pull/61684

（其他：#57869 会话时间线提示导航栏、#62610 README 与落地页同步、#60957 nix hashes 自动更新。）

## 5. 功能需求趋势

- **免费层与配额管理**：免费额度计量、配额重置、仅免费模型过滤（#60392）等，围绕 Zen free tier 的需求与缺陷最密集。
- **代理/子代理权限模型**：权限规则 last-match-wins 语义、子代理继承与校验（#62346）。
- **长上下文性能**：大上下文下的首字节延迟与提示缓存行为（#57849、#58175），插件对系统提示的干扰值得关注。
- **新模型适配**：GLM 5.x 推理等级映射（#62592），新模型参数默认值需与上游 API 对齐。
- **跨端能力一致性**：浏览器工具在桌面 vs Web 的可用性（#48224、#59477），GUI 插件从桌面扩展到 Web（#62608）。
- **交互体验**：撤销发送并恢复输入（#52537）、会话固定（#61684）、长会话导航（#57869）。
- **Windows 平台健壮性**：进程树治理（#62602）、shell 转义与路径处理（#56771、#62606）。

## 6. 开发者关注点

- **免费层误判是最大痛点**：#59387 单帖 324 条评论，叠加 #62348（零用量触限）、#62355（每日配额误报）、#59532（升级 v2 后短暂恢复又复发），指向计量/配额系统的一致性问题。
- **Windows 支持质量**：v2.2.6 引入含空格路径回归（#62606），加之特殊字符未转义（#56771）、子进程残留（#62602）、TUI 卡片残留（#56748），Windows 用户占比高但回归频繁。
- **长会话可用性**：高上下文下 20 秒至近 3 分钟的响应头延迟（#57849）会显著影响实际使用，缓存命中率高并不等于低延迟。
- **文档与配置语义不一致**：权限 last-match-wins（#62346）、API key 过期提示缺乏操作指引（#58032）等，反映文档需与实现同步。
- **支付与订阅**：#52958 中意大利用户所有支付方式被拒（虽已关闭），提示订阅链路仍需按地区排查。
- **本地化与 CI 健康度**：中文字典缺失键（#62552）与 flaky 测试根因治理（#62597）显示工程侧正在补基础质量。

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报（2026-11-07）

## 1. 今日速览

今日无新版本发布，社区活动集中在缺陷修复与 SDK 定制能力上。Issue 侧最受关注的是 OpenAI 登录下 GPT-6.1 Sol 上下文窗口仍显示 272K（#11021），以及强制 system prompt 与工具集协调顺序错乱（#9932）；PR 侧则有一批围绕编码/行尾、图片 worker 竞态、tool-call 解析的修复集中关闭。

## 2. 版本发布

过去 24 小时无新版本发布。

## 3. 社区热点 Issues（10 条）

1. **#11021 [OPEN] ChatGPT 登录下 GPT-6.1 Sol 仍使用 272K 上下文** — 8 条评论、7 个赞。同一账号的实时模型目录显示 500K 默认值，与 Pi 1.3.0 报告不一致，直接影响可用上下文预算，是今日讨论度最高的条目。
   https://github.com/earendil-works/pi/issues/11021

2. **#9932 [OPEN] before_agent_start 强制 system prompt 保留已被 setActiveTools 移除的工具** — 7 条评论。强制提示在工具集协调之前被捕获，导致同一调用链中已移除的工具仍残留，属于 agent 钩子执行顺序的语义问题。
   https://github.com/earendil-works/pi/issues/9932

3. **#5372 [OPEN] 允许自定义 OAuth 回调页面渲染** — 6 条评论。希望调用方能注入自己的 `oauthSuccessHtml()` / `oauthErrorHtml()` 实现，是集成方常见的可定制性诉求。
   https://github.com/earendil-works/pi/issues/5372

4. **#8829 [OPEN] wrapUIPromptContext 展开复制丢失 ui 原型方法** — 6 条评论。类实例 UI 在展开拷贝后会丢失原型方法，影响自定义 UI 实现。
   https://github.com/earendil-works/pi/issues/8829

5. **#11026 [OPEN] pi-durable：永久删除会话** — 5 条评论、4 个赞。建议新增 `harness.deleteConversation(id, ctx)`，并在运行中拒绝或先中止，涉及存储层的数据生命周期管理。
   https://github.com/earendil-works/pi/issues/11026

6. **#11317 [OPEN] SDK 用户定制身份 preamble 而不替换默认 prompt 段落** — 5 条评论。希望通过 `systemPromptOptions.sections.preamble` 只替换开场身份文本，保留默认工具、规则与文档段落，与同作者 PR #11904 呼应。
   https://github.com/earendil-works/pi/issues/11317

7. **#10585 [OPEN] bash 临时文件流错误仍导致进程崩溃（1.0.4，ENOSPC/EACCES）** — 4 条评论。`/tmp` 写满时以未捕获异常终止运行，属于稳定性问题。
   https://github.com/earendil-works/pi/issues/10585

8. **#10650 [OPEN] codemode：在 allSettled 输出与返回值中保留嵌套 Error 信息** — 4 条评论。序列化丢弃 Error 的非枚举 name/message，使模型看到的信息失真。
   https://github.com/earendil-works/pi/issues/10650

9. **#11843 [CLOSED] openai-completions 在存在工具历史时发送 `tools: []`，LiteLLM/vLLM 返回 400** — 3 条评论。影响自建网关用户，已有对应修复 PR。
   https://github.com/earendil-works/pi/issues/11843

10. **#11876 [CLOSED] `edit`/`read` 工具被 shell 命令绕过** — 3 条评论。报告在 Windows 11 + pi 1.5.0 下，模型改用 `sed` 替代内置工具，反映工具使用引导的实际偏差。
    https://github.com/earendil-works/pi/issues/11876

其他值得留意：#8019（TUI 选区复制保留硬换行，已关闭，7 赞）、#11901（codemode `console.log` 将 NaN/Infinity 打印为 null，已关闭）、#11903（新增 Wally 内置 provider，已关闭）。

## 4. 重要 PR 进展（10 条）

1. **#11891 [CLOSED] fix(ai): openai-completions 在工具历史时省略空 tools 数组** — 修复 vLLM 0.20+ 拒绝 `"tools": []` 的问题，直接对应 #11843。
   https://github.com/earendil-works/pi/pull/11891

2. **#11751 [CLOSED] fix(coding-agent): edit 保留未修改行的行尾，仅围绕改动做 diff** — 修复混合 CRLF/LF 文件被整体改写，并降低大文件 diff 的内存风险，对应 #8544。
   https://github.com/earendil-works/pi/pull/11751

3. **#11896 [CLOSED] fix(coding-agent): 等待图片缩放 worker 终止** — 修复顺序读图时 worker 未 await 终止导致进程中止（macOS / Node 24），对应 #10695。
   https://github.com/earendil-works/pi/pull/11896

4. **#11890 [CLOSED] fix(tui): 全屏下在所有终端于图像覆盖行之后再绘制 Kitty 图片** — 修复 Orca 全屏仅显示首行的问题，关闭 #11835。
   https://github.com/earendil-works/pi/pull/11890

5. **#11904 [CLOSED] Feat：自定义 system prompt preamble** — 允许 SDK 用户设定 agent 身份/人格，同时保留默认工具描述、规则与文档，对应 #11317。
   https://github.com/earendil-works/pi/pull/11904

6. **#11888 [CLOSED] fix(coding-agent): 每次提示前在当前分支记录实时 thinking level** — 修复树导航后 resume 还原陈旧思考等级，关闭 #11451。
   https://github.com/earendil-works/pi/pull/11888

7. **#11906 [CLOSED] fix(coding-agent): 本地文件/会话读取中止时避免未捕获 AbortError** — 处理 `read` 打开或 stat 文件期间被中止的场景。
   https://github.com/earendil-works/pi/pull/11906

8. **#11894 [OPEN] fix(coding-agent): edit 拒绝非合法 UTF-8 文件** — 当前会把无法解码的字节替换为 U+FFFD 并仍报成功，影响 UTF-16 与遗留编码文件。
   https://github.com/earendil-works/pi/pull/11894

9. **#11895 [CLOSED] fix(coding-agent): grep 的 glob 相对于 path 匹配** — 修复 glob 从启动目录而非 `path` 匹配，导致带目录的 glob 匹配不到。
   https://github.com/earendil-works/pi/pull/11895

10. **#11893 [CLOSED] fix(ai): 让 sampling 的 reasoning_effort 走 thinkingLevelMap 转换** — 配置级字面量此前绕过映射直达线路参数。
    https://github.com/earendil-works/pi/pull/11893

另：#10810（CompactionStatusIndicator 支持覆盖 colorFn）、#11900（修正 CONTRIBUTING.md 中 RFC 链接 404）已关闭。

## 5. 功能需求趋势

- **SDK 与提示词可定制性**：preamble 定制（#11317 / #11904）、OAuth 回调页面自定义（#5372）、UI 上下文对象兼容性（#8829），显示集成方希望在不替换默认行为的前提下做局部覆盖。
- **Provider 与模型适配**：新增内置 provider（Wally，#11903）、OpenAI 登录下的上下文目录同步（#11021）、`openai-completions` 与 vLLM/LiteLLM 的兼容（#11843、#11908）、思考等级与采样参数映射（#11893）。
- **Agent 钩子语义与工具集控制**：`before_agent_start` 的执行顺序（#9932）、模型偏向 shell 命令而非内置工具（#11876）。
- **存储与会话生命周期**：pi-durable 的会话删除（#11026）与任务卡在 waiting/completing（#11892）。
- **稳定性与健壮性**：临时文件写满导致崩溃（#10585）、worker 竞态（#10695）、编码与行尾保真（#8544、#11894）。
- **TUI 交互细节**：选区复制保留换行语义（#8019）、终端图片渲染（#11835）。

## 6. 开发者关注点

- **上下文与模型元数据不一致**：登录态下报告值与实时目录不符，直接影响成本敏感的长上下文使用（#11021，7 赞）。
- **静默失败与错误信息丢失**：codemode 丢弃嵌套 Error、`console.log` 输出 null 替代 NaN/Infinity、编辑非 UTF-8 文件仍报成功——模型会基于错误信息推理，危害大于普通缺陷（#10650、#11901、#11894）。
- **文件保真度**：行尾与非 UTF-8 编码被改写是反复出现的主题（#8544、#11751、#11894）。
- **进程级崩溃**：磁盘写满、图片 worker 竞态、读取中止都会以未捕获异常终止整个会话（#10585、#10695、#11906）。
- **生态兼容**：自建网关（LiteLLM + vLLM）对空 tools 数组、复用 tool-call index 的严格校验带来额外适配负担（#11843、#11908）。
- **可控的默认行为**：希望只覆盖身份/preamble 而保留 Pi 默认工具与规则，避免维护整份自定义 prompt（#11317、#11904）。

说明：以上内容均依据所提供的 GitHub 数据整理；PR 条目未提供评论数，故未作社区反应判断。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报（2026-11-07）

## 1. 今日速览

今天最值得关注的是 CI 与安全隔离方向的集中动作：外部 PR 的 CI 隔离被同时以 P1 Issue（#16514）和配套 PR（#16551）推进，直接路由到一次性 ARM64 运行池。同时，一个 P1 级 headless 模式缺陷（#15597）浮出水面——非交互模式下自动记忆代理的写入权限被默认拒绝，导致记忆功能实际完全失效。Web Shell 相关修复继续密集落地，涉及侧栏轮询、会话重载与未读标记持久化。

---

## 2. 版本发布

**v0.26.9-nightly.20261106.80fd7c3353**（nightly）

- 主要变更集中在交互式 TUI 测试：改为轮询前台 shell 的帧而非对其做快照（PR #16455）。
- 与 Issue #16046 中前台 shell 生命周期测试失败高度相关，属于该测试不稳定问题的修复尝试。
- 注意：本条 release notes 在数据源中被截断，仅能确认上述一项变更，其余内容无法核实。

---

## 3. 社区热点 Issues（10 个）

**① #16514 [OPEN] [P1] 用一次性 runner 隔离外部 PR 的 CI** — 评论 10
安全相关。外部 PR 可运行贡献者控制的 CI 脚本，复用自托管 runner 会泄露宿主机凭证或残留文件/进程。今日新建即达 P1，且配套 PR #16551 当天提交，是优先处理的最高项。
→ https://github.com/QwenLM/qwen-code/issues/16514

**② #15597 [OPEN] [P1] Headless `-p` 模式下自动记忆永远无法保存** — 评论 9
核心功能缺陷。默认/Auto 审批模式下，隐式的 edit/write_file 拒绝规则覆盖了记忆代理的 scoped allow，导致每条提示后运行的自动记忆全部写入失败。对非交互/自动化使用场景影响严重。
→ https://github.com/QwenLM/qwen-code/issues/15597

**③ #14724 [OPEN] Main CI 失败：Managed Agent gate 无测试可识别** — 评论 223
评论数全站最高，但由机器人维护且标记 `autofix/skip`，已持续近三周。高频评论更可能反映自动化追踪而非真实社区讨论，建议作为 CI 噪音信号观察。
→ https://github.com/QwenLM/qwen-code/issues/14724

**④ #13078 [OPEN] 每日依赖 CVE 审计失败** — 评论 44
自 9 月底持续至今的调度任务失败，可能涉及新的高危漏洞。安全供应链问题，需人工确认是工具故障还是真实漏洞。
→ https://github.com/QwenLM/qwen-code/issues/13078

**⑤ #12856 [OPEN] [P2] 辅助模型选择器持久化 NUL 分隔的 baseUrl 并原样输出** — 评论 5
安全/凭证类问题。五个 settings 键以 `authType:<id>\0<baseUrl>` 形式持久化，当 baseUrl 内嵌 userinfo 时，所有公开面都会原样输出，存在凭证泄露风险。
→ https://github.com/QwenLM/qwen-code/issues/12856

**⑥ #16355 [OPEN] [P1] web-shell：sidebar=false 时在空闲欢迎页每 5 秒轮询所有受信工作区** — 评论 4
性能问题。无侧栏的 Web Shell 在完全空闲时仍对所有受信工作区轮询 `sessions/live-state`，属于可感知的资源浪费，已有对应修复 PR #16356。
→ https://github.com/QwenLM/qwen-code/issues/16355

**⑦ #16091 [OPEN] Main CI 失败：bun-pty 字节精确性测试** — 评论 5
`'node': 300 no-gap toggles during a 5000-line flood stay byte-exact` 等终端字节流测试在 macOS 上失败，涉及 PTY 底层输出的正确性，对终端体验有直接影响。
→ https://github.com/QwenLM/qwen-code/issues/16091

**⑧ #12886 [OPEN] [P3] 32K 上下文预算下的自定义 provider 配置指引** — 评论 7
用户希望有文档化方式缩减初始工具/系统负载以适配 32,768 token 预算，或在工具集放不下时给出预检提示。反映小上下文模型接入的实际痛点，标记 `need-discussion`。
→ https://github.com/QwenLM/qwen-code/issues/12886

**⑨ #15630 [OPEN] [P3] 通过 per-session mid-turn 队列把注入消息送达运行中的 turn** — 评论 4
渠道部署场景的明确需求：模型工作到一半时用户插话，应能立即被模型看到，而非等 turn 结束。已标记 `ready-for-human`。
→ https://github.com/QwenLM/qwen-code/issues/15630

**⑩ #15445 [CLOSED] Web Shell 在非英文/中文浏览器中无法加载** — 评论 3
自 0.26.0 起，浏览器 UI 语言非中英文时 `desktopRelay` i18n 查找无回退，直接抛 TypeError 致整页报错。影响面广（国际用户），现已关闭，值得验证修复效果。
→ https://github.com/QwenLM/qwen-code/issues/15445

*其他已关闭项：#15675（sed 模拟与真实 sed 不一致，已关闭）、#15280（MCP 工具卡片展开显示完整参数，已关闭）、#10984（`--config-dir` 进程级配置目录，已关闭）。*

---

## 4. 重要 PR 进展（10 个）

**① #16551 [OPEN] fix(ci): 将外部 PR CI 直接路由到一次性 runner**
把不可信外部 PR 的 build、Linux 单测、lint 与 no-key 集成任务直接送入正式 ARM64 一次性池，移除专用变量开关与独立 smoke 工作流。与 Issue #16514 配套，是今日最重要的安全基建变更。
→ https://github.com/QwenLM/qwen-code/pull/16551

**② #16356 [OPEN] fix(web-shell): 将无侧栏轮询限定到活跃会话**
仅轮询拥有其连接会话或挂载分屏的受信工作区；两者皆无时，欢迎页不再发起 live-state 轮询。直接解决 #16355。
→ https://github.com/QwenLM/qwen-code/pull/16356

**③ #16548 [OPEN] fix(core): 以描述性文案呈现 agent 停止原因**
记忆代理原先直接 `new Error(result.terminateReason)`，用户会看到 `Failed to process /dream: MAX_TURNS` 这类原始枚举 token。改为友好文案，改善可读性。
→ https://github.com/QwenLM/qwen-code/pull/16548

**④ #16540 [OPEN] fix(core): 按 bash 规则解码 ANSI-C 词与 wrapper payload**
从 #16075 拆分出的词法层：正确解码 `-c` 选项终止符，而非匹配其源码拼写。与已关闭的 #15675（sed 模拟漂移）同属 shell 工具语义准确性改进。
→ https://github.com/QwenLM/qwen-code/pull/16540

**⑤ #16543 [OPEN] refactor(serve): 与进程内调用方共享 prompt 准入**
daemon PR 状态转换设计（§4 Mechanism）的 PR A 的一部分，前置为 #16523、#16530。PR 状态 watch 将在进程内准入其 prompt。
→ https://github.com/QwenLM/qwen-code/pull/16543

**⑥ #16315 [OPEN] feat(sdk): 支持仅会话级模型选择**
在两层带类型的 daemon SDK 中加入能力门控的 session-only 模型选择，调用方可传 `persistDefault: false`，同时保留用户/工作区模型与认证默认值。
→ https://github.com/QwenLM/qwen-code/pull/16315

**⑦ #16500 [OPEN] feat(managed-agent): 增加 Skills 与 MCP 自助服务**
托管代理侧让用户自助管理 Skills 与 MCP 配置，是新创建（今日）的功能类 PR。
→ https://github.com/QwenLM/qwen-code/pull/16500

**⑧ #16488 [OPEN] feat(managed-agent): 增加由 Holo 支撑的可选个人记忆**
托管代理服务的 opt-in 个人记忆能力，与当前 #15597 揭示的记忆写入权限问题属同一功能域，可对照评估。
→ https://github.com/QwenLM/qwen-code/pull/16488

**⑨ #15620 [OPEN] feat(channels): 新增 Microsoft Teams 渠道扩展与宿主 ingree**
支持个人会话、显式群组 @ 提及、频道线程隔离与有序最终文本回复，可独立运行或搭配应用宿主。渠道集成方向的重要外部贡献（自 10-26 持续更新）。
→ https://github.com/QwenLM/qwen-code/pull/15620

**⑩ #15659 [OPEN] feat(acp): 展示 teammate 活动而不影响 leader 输出**
Stack 链（#15657 → #15658 → #15659）的第 C 步，属团队协作 #13902 系列，涉及多 agent 协作时的 UI 信息呈现边界。
→ https://github.com/QwenLM/qwen-code/pull/15659

*其他值得扫一眼：#12384（按会话来源类型路由 Web Shell 独立重载）、#15286（sdk-java Maven 簿记与宿主缓存隔离，autofix/needs-human）。*

---

## 5. 功能需求趋势

从今日 Issues 提炼，社区关注集中在以下方向：

1. **CI/CD 安全与可靠性**：外部 PR 隔离执行（#16514/#16551）、CVE 审计持续失败（#13078）、失败报告精修（#16319）、Java resolver 缓存隔离（#15286）。这是当前投入最集中的方向，由安全驱动。
2. **Web Shell 稳定性与性能**：空闲轮询（#16355/#16356）、非英文 i18n 崩溃（#15445）、会话重载路由（#12384）、未读标记持久化（#12672）、MCP 工具卡片展开（#15280）。
3. **非交互/headless 与自动化**：自动记忆失效（#15597）、stacked-skill 提示输出与 replay 契约（#16441）。`-p` 模式的可靠性正在成为焦点。
4. **小上下文与配置灵活性**：32K 预算下的自定义 provider 指引（#12886）、进程级 `--config-dir`（#10984，已关闭）。
5. **渠道与团队协作**：mid-turn 消息注入（#15630）、Teams 渠道（#15620）、teammate 活动展示（#15659）。
6. **托管代理自助化**：Skills/MCP 自助（#16500）、个人记忆（#16488）。

---

## 6. 开发者关注点

- **凭证与宿主安全**是当前第一痛点：外部 PR CI 可触达宿主凭证（#16514），辅助模型 baseUrl 会原样泄露内嵌 userinfo（#12856）。两者均需优先处理。
- **权限模型与功能互相冲突**：默认 edit/write_file 拒绝规则覆盖 scoped allow，使自动记忆在 headless 下形同虚设（#15597），反映审批策略与代理能力的耦合需要重新梳理。
- **CI 噪音偏高**：机器人维护的 CI 失败 Issue 占据评论榜前列（#14724 达 223 条），且多为 `autofix/skip` 或需人工确认的调度失败（#13078），维护者负担与信号质量问题明显。
- **shell 工具语义一致性**受关注：sed 模拟（#15675，已关闭）与 ANSI-C 解码（#16540）先后被修，说明 shell 工具"模拟 vs 真实执行"的保真度是持续性的正确性来源。
- **Web Shell 是外部贡献热点**：今日 15 个高评论 PR 中 Web Shell 相关占多数，但多为长期挂起（自 9 月创建仍 OPEN），评审周期偏长的迹象值得留意。
- **评审流程负担可见**：多个 Issue（#16441、#16471、#15973）均明确引用 AGENTS.md 的"约 5 轮评审后只落地 Critical 项、其余转 follow-up"规则，说明流程自律正在产生大量延后项，需关注积压清理。

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI 社区动态日报 — 2026-11-07

> 数据来源：github.com/Hmbown/DeepSeek-TUI。数据中链接均指向 `codewhale-hq/Codewhale`（仓库原始标注），下方链接按数据原样引用。

## 1. 今日速览

今日无新版本发布，社区仍处于 v0.10.3 的"发布验收"收尾阶段：多条 v0.10.3 release-blocker 审计类 Issue 已关闭，但对应验收备注普遍标注"源码修复已落地，安装/客户端验收仍未完成"。同时 12 条 PR 更新中 10 条为 Dependabot 依赖升级，仅 2 条为外部贡献者的功能/修复型 PR。

## 2. 版本发布

过去 24 小时无新 Release。

## 3. 社区热点 Issues

1. **#7095 [OPEN][bug] 会话历史丢失** — 评论最多（12 条），是本周期讨论热度最高的问题。验收备注称失败重置保存已修复，但"原始事故仍开放"。https://github.com/codewhale-hq/Codewhale/issues/7095
2. **#6184 [OPEN][bug, reliability] 引擎运行中途静默卡死** — 用户消息已持久化但无回复、无错误、无日志、无崩溃记录（10 条评论）。子代理可靠性的核心痛点；watchdog/超时已落地，长任务事故仍开放。https://github.com/codewhale-hq/Codewhale/issues/6184
3. **#6970 [OPEN][bug, os:windows] `/undo` 命令在 Windows 上出现严重问题** — 源码与 macOS 路径已修复，Windows 最终验收未完成。https://github.com/codewhale-hq/Codewhale/issues/6970
4. **#6992 [OPEN][bug] 0.10.1 ACP 回归：sandbox_mode/ask 配置被忽略** — 影响自定义客户端接入的权限姿态，属于配置语义回归。https://github.com/codewhale-hq/Codewhale/issues/6992
5. **#6721 [OPEN][enhancement, compaction] 紧急压缩对 `save session` 的影响** — 上下文压缩与会话持久化的连续性边界问题。https://github.com/codewhale-hq/Codewhale/issues/6721
6. **#7203 [OPEN][needs-info] `auth chatgpt` 浏览器登录成功后令牌校验失败（0.10.2, Windows）** — 阻断 OpenAI/Codex 提供方使用的认证问题。https://github.com/codewhale-hq/Codewhale/issues/7203
7. **#6554 [CLOSED][security, audit] 读取/响应/缓冲区无字节上限** — 验收备注显示 15 项已修复、2 项部分、5 项确认仍开放，安全类审计的典型"部分关闭"状态。https://github.com/codewhale-hq/Codewhale/issues/6554
8. **#6553 [CLOSED][performance, audit] 同步/阻塞工作在异步 Tokio 运行时内联执行** — 3 项已修、2 项部分、4 项仍内联，直接影响 TUI 响应性。https://github.com/codewhale-hq/Codewhale/issues/6553
9. **#7091 [OPEN][enhancement, install] 让卸载在各安装方式下完整且可验证** — 覆盖 archive/npm/NSIS/WinGet/mac 等分发通道的生命周期覆盖，发行门禁仍未开放。https://github.com/codewhale-hq/Codewhale/issues/7091
10. **#7238 [OPEN] 完成原生 DSH 宿主对齐与 Web 插件 UI** — 新提出的多区域大型需求（tui/sandbox/core/state/mobile），首个原生 DSH 宿主切片已落地。https://github.com/codewhale-hq/Codewhale/issues/7238

其他值得一提：#7221（剪贴板图片按会话分组与清理命令，新提出）、#6695（Tsubasa 提供方描述符，0 评论但已关闭）、#7203 已标记 needs-info。

## 4. 重要 PR 进展

1. **#7230 [OPEN][feat] 可应答的人工等待时暂停任务墙钟** — 与上游轮次预算语义对齐（人类应答时间不计入 agent 预算），外部贡献者提交，仍待评审。https://github.com/codewhale-hq/Codewhale/pull/7230
2. **#7220 [CLOSED][feat] 有界 HTTP 速率限制恢复** — 为 HTTP 429 提供独立的重试策略（共 20 次尝试），避免临时限流直接中断请求。https://github.com/codewhale-hq/Codewhale/pull/7220
3. **#7231 [CLOSED][fix] 本地代理消失时直连** — 解决 reqwest 在会话构建时快照 `HTTP_PROXY/HTTPS_PROXY/ALL_PROXY` 导致本地代理（Clash、v2rayN、sing-box）关闭后请求失败的问题。https://github.com/codewhale-hq/Codewhale/pull/7231
4. **#7234 [CLOSED][fix] 切断携带工作区漂移通知的已保存历史** — 标注为引擎侧历史信封边界问题的第五例。https://github.com/codewhale-hq/Codewhale/pull/7234
5. **#7214 相关内容（Issue，已关闭）与 #7245 rusqlite 0.40.2→0.41.1** — 状态存储依赖升级。https://github.com/codewhale-hq/Codewhale/pull/7245
6. **#7244 rmcp 3.7.0→3.8.0** — MCP Rust SDK 升级。https://github.com/codewhale-hq/Codewhale/pull/7244
7. **#7242 actions/setup-java 4.7.1→6.1.0（跨大版本）** — CI 工作流升级。https://github.com/codewhale-hq/Codewhale/pull/7242
8. **#7241 webpki-roots 1.0.10→1.0.11** — TLS 根证书包更新。https://github.com/codewhale-hq/Codewhale/pull/7241
9. **#7246 similar 3.2.0→3.2.1** — 文本 diff 库补丁升级。https://github.com/codewhale-hq/Codewhale/pull/7246
10. **#7239 / #7240 自身仓库与 publish 脚本引脚从 b92540d 升至 b0b2b9a** — 与原生 DSH 首片对齐的 CI 引用更新。https://github.com/codewhale-hq/Codewhale/pull/7239

（另有 #7243 unicode-normalization 0.1.25→0.1.26 补丁升级。）

## 5. 功能需求趋势

- **上下文/会话连续性**：历史丢失（#7095）、消息窗口中途重根（#7142）、自动压缩异常与超时（#7133、#7153）、紧急压缩对保存会话的影响（#6721）、fork 历史裁剪（#7234）反复出现，是本期最密集的主题。
- **提供方与模型选择**：Ollama 目录校验（#5848）、Ollama 默认解析到 embedding 模型（#7116）、模型 ID 大小写保留（#7214）、Tsubasa 预设描述符（#6695）、ChatGPT 认证（#7203）。
- **可靠性审计**：崩溃原子写（#6555）、无界读取（#6554）、副作用幂等键（#6556）、同步阻塞内联（#6553）构成一组系统性可靠性收敛工作。
- **安装/卸载生命周期**：多安装方式的可验证卸载（#7091）。
- **TUI 细节体验**：剪贴板图片按会话分组与清理（#7221）、人工等待不计入任务预算（#7230）。
- **原生 DSH 宿主与 Web 插件 UI**（#7238）。

## 6. 开发者关注点

- **"修复已落地"≠"用户可用"**：大量验收备注强调安装包/客户端侧验收未完成，说明发布阻塞集中在分发与客户端验证，而非源码修复。
- **Windows 平台问题集中**：`/undo`（#6970）、ChatGPT 认证（#7203）均标注 os:windows。
- **静默失败难诊断**：引擎卡死"无错误、无日志、无崩溃记录"（#6184）是可靠性反馈中最尖锐的一条，durable diagnostics 的落地值得跟踪。
- **网络环境适配**：本地代理消失后的直连（#7231）与 429 有界恢复（#7220）反映国内/代理环境下对网络健壮性的真实需求。
- **安全问题仍需收敛**：#6554 仍有 5 项确认开放，字节上限未全面覆盖。

</details>

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar-personal) 自动生成。*