# AI CLI 工具社区动态日报 2026-10-29

> 生成时间: 2026-10-29 16:56 UTC | 覆盖工具: 9 个

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

# AI CLI 工具生态横向对比分析 · 2026-10-29

## 1. 生态全景

今日 10 个工具**均无正式重大版本发布**（Qwen Code 的 v0.26.4、OpenCode 的 v2.2.1 为当日增量版本，Codex 仅有 Rust alpha 标签），社区能量几乎全部倾注在**稳定性、会话可靠性与成本可预测性**上。一个清晰的共性信号是：工具已越过"能不能用"阶段，竞争焦点转向"结果是否可信、成本是否可控、跨平台是否一致"。与此同时，平台层问题（Windows 尤为突出）与认证/计费链路成为多个仓库的高频痛点。

## 2. 各工具活跃度对比

| 工具 | 热点 Issues（报告列出） | Issues 总况 | PR 数 | Release 情况 | 当日最热信号 |
|---|---|---|---|---|---|
| Claude Code | 10 | 密集，含 #69044（116 评论） | 2 | 无 | 长期用户系统化错误汇总贴，👍 最高为 `/delete`（101） |
| OpenAI Codex | 10 | Windows 问题集中 | 10（均 copyberry[bot]，CLOSED） | 2 个 Rust alpha | VS Code 扩展 UI 无法启动（#56655，👍48） |
| Gemini CLI | 10 | 多个 P1 级 | 10 | 无 | 子代理 MAX_TURNS 误报 success（#22323，13 评论） |
| GitHub Copilot CLI | 10 | 认证/内存类密集 | **0** | 无 | 企业 403 无法列模型（#552，31 评论，2025-11 创建） |
| Kimi Code CLI | **0** | 无更新 | **1** | 无 | 仅 1 条 HOL Guard 安全钩子 PR（#2648） |
| OpenCode | 10 | 50 条更新，过半为免费额度 | 10 | v2.2.1 + process-daemon v0.3.3 | 免费层主追踪帖（#59387，101 评论） |
| Pi | 10 | 缺陷与缓存问题为主 | 10 | 无 | Windows 元讨论（#7547，91 评论） |
| Qwen Code | 10 | CI/审计类占多数 | 10 | v0.26.4 + Desktop v0.26.4 + SDK v0.1.26 | 主 CI 失败（#14724，83 评论） |
| DeepSeek TUI | 10 | 会话/本地化 | 10 | 无 | 长任务会话历史丢失（#7095，10 评论） |

> 注：Claude Code PR 仅 2 条、Kimi 仅 1 条为当日实际数据；Codex 全部 PR 状态为 CLOSED；Copilot CLI 与 Kimi 的 PR 侧当日基本静默。

## 3. 共同关注的功能方向

| 方向 | 涉及工具 | 具体诉求 |
|---|---|---|
| **会话状态一致性 / 连续性** | Claude Code（#103005 更新重启丢会话、#26904 `/delete`）、DeepSeek TUI（#7095 历史丢失、#6970 `/undo` 状态脱节）、OpenCode（#60124 配额计时漂移）、Codex（#54989、#13138 重启才恢复） | 展示状态 = 持久化状态；远程/移动端可接回 |
| **成本与配额可观测性** | OpenCode（#59387 免费层主帖、PR #60284/#57897）、Pi（#10024/#11529 prompt cache 击穿重计费）、DeepSeek TUI（#6969/#6991 工具淘汰成本盲）、Copilot CLI（#4802 配额被清空）、Codex（#25561 剩余用量） | "何时重置、为何不重置、我用了多少" |
| **执行安全与审批可控** | Gemini CLI（#22672 破坏性操作、PR #30029 命令替换开关）、OpenCode（#60282 审批表单渲染）、Kimi（#2648 PreToolUse 放行）、Codex（Guardian 系列 PR）、Claude Code（#95122 沙箱误拒） | 安全默认 + 显式可退出；拦截不能误伤合法操作 |
| **MCP / 协议生态兼容** | Claude Code（#89904 Artifacts 无法调本地 stdio MCP、#95558 serverInfo.icons）、Copilot CLI（#4613 schema 多注入 354K tokens、#4916 blob 为空、多条 OAuth）、Pi（#11529 MCP 中途连接击穿缓存） | 能力模型迁移带来断裂；集成层易碎 |
| **静默失败 / 结果可信** | Gemini CLI（#22323 子代理误报 success、#21409 永久挂起）、Claude Code（Edit 未命中仍继续 #32755、`advisor_tool_result` 不渲染）、OpenCode（#47259 输出截断、#60290 provider 静默消失） | 错误必须显性化，而非"看起来成功" |
| **Windows / 跨平台一致性** | Codex（多数高评论 Issue 带 windows-os）、Pi（#7547/#9549/#9656）、Claude Code（#100742 WSL 功能缺失、#105975 登录阻断）、Gemini CLI（#21983 Wayland、PR #30006 Windows 检测）、Qwen Code（#15855）、DeepSeek TUI（中文输入法 #2323） | 非 macOS 环境是稳定性短板 |
| **提示词缓存稳定性** | Pi（主线 #10024/#11529/#11545）、DeepSeek TUI（#6969） | 工具顺序/前缀稳定，避免隐性重复计费 |

## 4. 差异化定位分析

- **Claude Code**：面向重度/企业开发者的成熟产品，社区讨论已从功能转向**规范合规与企业集成**（OAuth RFC 8252、Azure DevOps 支持）。技术路线强调能力模型演进（MCP 注入、Artifacts），但演进的代价是兼容回归。成熟度高、稳定性诉求也最高。
- **OpenAI Codex**：**Rust 内核 + Guardian 审批/证据留存**的技术投入方向明确，PR 侧几乎全为内部自动化。用户面集中在 IDE 扩展与 Windows，当前处于"多组件（桌面/CLI/浏览器工具）版本耦合"的磨合期（#57641）。
- **Gemini CLI**：围绕**子代理体系成熟化**构建差异化，议题覆盖结果语义、自发调用率、轨迹可观测。安全侧采取"默认关闭 + 显式开启"的折中，架构探索（AST 感知、原生 bash 沙箱 #19873）更具前瞻性。
- **GitHub Copilot CLI**：定位**企业/多平台集成**，痛点集中在认证链（Linux/macOS/Windows keychain 全覆盖）与 ACP 生态完备性，反映其作为 IDE 生态延伸的角色。
- **OpenCode**：走**免费层 + 插件/TUI 定制**路线，当前最大矛盾是免费配额与 V2 迁移信任成本。企业向信号（mutual TLS #60289）正在萌生。
- **Pi**：**扩展生态 + 多 provider 兼容**为立身之本，因此对 prompt cache 经济学、OpenAI 兼容层、SDK 契约最为敏感，技术讨论深度（成本建模、服务端消息线程）在同类中领先。
- **Qwen Code**：**工程流水线投入最重**（ECS runner、build/publish 拆分），Managed Agent 架构拆分是其独有方向；社区噪音主要来自自身 CI。
- **DeepSeek TUI**：**本地化（zh-Hans）与成本感知**为特色，发版验收条目显式可追踪，工程纪律性强但体量较小。
- **Kimi Code CLI**：当日几乎静默，仅安全钩子示例，生态早期。

## 5. 社区热度与成熟度

- **讨论热度最高**：Pi（#7547 达 91 评论）、OpenCode（#59387 达 101 评论）、Claude Code（#69044 达 116 评论）——均体现"长期议题"的黏性，说明已形成稳定重度用户群。
- **快速迭代 / 磨合期**：OpenCode（V2 迁移 + 免费层争议）、Codex（多组件版本耦合）、Qwen Code（CI/发布链路密集施工）、Gemini CLI（子代理 P1 集中）——功能推进快，但回归与体验债同步累积。
- **成熟但压力显性化**：Claude Code、Copilot CLI——问题多集中于合规、企业授权、跨平台认证等"深水区"。
- **低活跃 / 早期**：Kimi Code CLI（Issues 0、PR 1）、DeepSeek TUI（体量小但纪律性好）。
- **维护者行为信号**：OpenCode 批量清理 `pending close, triaging`；Codex PR 几乎全为机器人提交；Qwen Code CI 失败追踪长期堆积（#14724）——需警惕真实缺陷被快速关闭。

## 6. 值得关注的趋势信号

1. **"静默失败"成为头号信任杀手**：误报 success、输出截断、编辑未命中仍继续、provider 静默消失——这些最伤用户信任的问题在多个仓库同时出现。**对开发者**：评估工具时应重点测试失败路径，而非只看成功路径。
2. **成本从"功能"变为"契约"**：prompt cache 击穿、配额计时漂移、工具淘汰触发重计费、token 用量解析不一致，说明**上下文预算的可预测性**正成为选型硬指标。OpenCode、Pi、DeepSeek TUI、Copilot CLI 均在此发力。
3. **安全默认 + 显式可退出**逐渐成为共识（Gemini PR #30029 的 `allowCommandSubstitution` 默认 false 是范式）。**对决策者**：可据此评估工具的沙箱策略是否既安全又不误伤自动化。
4. **MCP/协议层成为新的脆弱面**：能力模型迁移（Claude Code #89904）、schema 注入开销（Copilot CLI #4613）、中途连接击穿缓存（Pi #11529）——协议生态的快速演进正制造新的兼容账单，需关注各仓库的回归覆盖。
5. **Windows 与非 macOS 平台是系统性短板**：Codex、Pi、Claude Code、Gemini CLI 的问题高度重合。**对开发者**：跨平台团队应在选型阶段就验证目标平台的终端/输入法/进程检测链路。
6. **可观测性需求上升**：子代理轨迹分享（Gemini #22598）、终端状态上报（Gemini PR #29918）、终端 OSC 标记（Pi #11565）——用户开始要求"看得见 agent 在干什么"，多会话管理是下一个体验战场。
7. **企业化门槛在抬升**：OAuth 规范合规、Azure DevOps、mutual TLS、企业授权模型可见性——AI CLI 正从个人开发者工具向企业基础设施迁移，安全与合规校验将成采购决策关键。

---
*说明：以上分析严格基于各工具 2026-10-29 社区动态摘要，未补充摘要外信息；表格中 Issues/PR 数为报告实际列出的热点条目数，非仓库全量。*

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告（数据截止 2026-10-29）

> 说明：本次数据中 PR 的评论数字段均为 `undefined`，无法据此排序，因此“热门”依据 PR 更新时间、被后续 Issue 引用讨论及涉及核心 skill 的活跃度综合判断。所有状态均为 OPEN、未合并。

## 1. 热门 Skills 排行（PR）

1. **mcp-builder 修复（#1742）** — 适配 `mcp>=2` 的 `streamable_http_client` 重命名与自定义 HTTP headers 配置。关联 Issue #1668；社区同时有 #1390 反映 mcp-builder 的 `evaluation.py` 对真实 MCP server 全部评 0 分，说明 MCP 构建链路的可用性是焦点。状态：OPEN。
   https://github.com/anthropics/skills/pull/1742

2. **skill-creator 修复（#1298 / #1681 / #1997）** — 多个独立 PR 集中在 skill-creator：触发评测误判与 Windows 兼容（#1298）、`package_skill.py` 直接执行失败（#1681）、YAML frontmatter 标量解析不正确（#1997）。另有 Issue #202（已关闭）批评 skill-creator 文档化语气过重、Issue #1394 指出 eval-viewer 的 XSS 风险。状态：均 OPEN。
   https://github.com/anthropics/skills/pull/1298 ｜ https://github.com/anthropics/skills/pull/1997

3. **webapp-testing 修复（#1980 / #1976）** — #1980 移除 `with_server.py` 中的 `shell=True` 以消除命令注入风险；#1976 修正 `element_discovery.py` 对 textarea/select 的标签识别。状态：均 OPEN。
   https://github.com/anthropics/skills/pull/1980

4. **新增 pyxel 复古游戏 Skill（#525）** — 面向 Python 复古游戏开发，覆盖实现、无头输入驱动运行、帧级检查与状态校验。创建于 2026-03，更新至 2026-10，属长期在审的社区贡献。状态：OPEN。
   https://github.com/anthropics/skills/pull/525

5. **document-typography 排版质控 Skill（#514）** — 解决 AI 生成文档中的孤词换行、标题孤行、编号错位等排版问题。状态：OPEN。
   https://github.com/anthropics/skills/pull/514

6. **notion-spec-to-implementation + quantitative-resume-auditor（#1245）** — 将产品/技术规格转化为可由 Claude Code 执行的 Notion 任务（含验收标准）。状态：OPEN。
   https://github.com/anthropics/skills/pull/1245

7. **md2video-audio（#1703）** — 将 Markdown 编译为带拟真人声配音的 MP4，宣称零成本。状态：OPEN。
   https://github.com/anthropics/skills/pull/1703

8. **docx 系列修复（#1792 / #1734）** — LibreOffice 超时被误报成功、孤立批注检测。配套 Issue #2018 还指出 `merge_runs.py` 会写出无效 XML。状态：OPEN。
   https://github.com/anthropics/skills/pull/1792

## 2. 社区需求趋势（来自 Issues）

- **安全与信任边界**：Issue #492（46 条评论）是讨论最集中的议题——社区 skill 以 `anthropic/` 命名空间分发、冒充官方，构成权限授予层面的信任风险。
  https://github.com/anthropics/skills/issues/492
- **组织级 skill 共享与分发**：Issue #228（17 评论、👍8）要求 Claude.ai 支持组织内 skill 库共享；Issue #189（👍9）指出两个插件包内容重复导致上下文重复加载。方向：分发/依赖管理。
  https://github.com/anthropics/skills/issues/228
- **Skill 评测与触发可靠性**：#556（13 评论、👍7）报告 `run_eval.py` 在所有查询上触发率为 0%，与 #1298 的触发评测问题互为印证。
  https://github.com/anthropics/skills/issues/556
- **上下文效率**：#1329 提出 compact-memory（符号化压缩 agent 状态）；#1487 批评 `claude-api` skill 单次工具调用注入约 156k tokens。方向：可控的上下文加载。
  https://github.com/anthropics/skills/issues/1487
- **质量门禁类工作流**：#1385 提议“预任务校准 → 对抗式评审 → 交付验证”三段式质量门；#412（已关闭）提议 agent-governance 治理类 skill。方向：AI 输出质量控制与治理。
  https://github.com/anthropics/skills/issues/1385
- **文档处理仍是主战场**：docx/pdf/pptx 相关的边界 bug 与新增 ODT 格式支持持续出现，说明办公文档是社区最高频的实际使用场景。

## 3. 高潜力待合并 Skills

综合“活跃度 + 被 Issue 交叉引用 + 修复成本低”，以下 PR 落地概率较高：

| PR | 内容 | 判断依据 |
|---|---|---|
| #1997 / #1681 / #1298 | skill-creator 三处修复 | 针对核心工具链，均有明确复现与修复描述，且被 #202、#1394 等 Issue 持续推动 |
| #1742 | mcp-builder 适配 mcp>=2 | 有对应 Issue #1668，属 API 变更后的必要跟进 |
| #1980 / #1976 / #1975 | webapp-testing、pptx 的改动范围小、便于评审的修复 | 均标注 Fixes #xxxx，作者同一人（gerardrecinto）集中提交 |
| #1792 | docx 超时误报成功 | 修复“假成功”类缺陷，评审阻力低 |
| #1730 | claude-api 修复失效链接 | 纯文档修复，风险最低 |

需要注意：#525、#514、#538 等创建于 2026 年 3 月的 PR 至今仍 OPEN，部分已数月未更新，存在被搁置的迹象。

## 4. Skills 生态洞察

**社区当前最集中的诉求是“治理与可靠性”：既要求官方仓库厘清命名空间与权限的信任边界，也要求 skill-creator、mcp-builder、webapp-testing 等核心工具链在评测触发、跨平台执行和安全默认值上真正可用。**

---

# Claude Code 社区动态日报 · 2026-10-29

## 1. 今日速览

过去 24 小时无新版本发布，社区讨论集中在长期未解决的稳定性与平台一致性问题。最受关注的是使用数月积累的 #69044 系统化错误反馈帖，评论数达 116 条。与此同时，OAuth 规范合规、工作树沙箱误拒 Bash、桌面端自动更新丢会话等问题持续发酵，Windows / WSL / VS Code 集成相关的 bug 尤其密集。

## 2. 版本发布

无。

## 3. 社区热点 Issues（10 条）

1. **[#69044](https://github.com/anthropics/claude-code/issues/69044) [OPEN] 长期日常使用中的重复性错误汇总**（116 评论）
   作者以德文记录了数月来可复现的失败模式。这是今日评论数最高的 Issue，说明长期重度用户对系统性问题有较强的集体共鸣，值得产品与工程团队逐条核对。

2. **[#26904](https://github.com/anthropics/claude-code/issues/26904) [OPEN] 新增 `/delete` 命令删除当前会话**（25 评论，👍101）
   今日点赞最高。会话管理是高频操作，反映社区对隐私与上下文清理的明确需求。

3. **[#42765](https://github.com/anthropics/claude-code/issues/42765) [OPEN] OAuth `redirect_uri` 使用 localhost 而非 127.0.0.1，违反 RFC 8252 §7.3**（18 评论，👍41）
   带复现的 Linux 认证 / MCP 缺陷。属于规范合规问题，会影响采用严格 OAuth 校验的企业与第三方集成方。

4. **[#88502](https://github.com/anthropics/claude-code/issues/88502) [OPEN] 桌面端支持同时启用多语言拼写检查**（16 评论，👍17）
   Issue 中给出了通过 `Preferences` 中 `spellcheck.dictionaries` 绕行的具体方法，体现双语/多语开发者的真实场景。

5. **[#54054](https://github.com/anthropics/claude-code/issues/54054) [OPEN] Web 端云会话支持 Azure DevOps 仓库**（7 评论，👍61）
   今日第二高赞。企业用户希望云会话不只绑定 GitHub，代码托管生态的覆盖度成为核心诉求。

6. **[#95122](https://github.com/anthropics/claude-code/issues/95122) [OPEN] 2.1.272/2.1.273 工作树隔离误拒纯 Bash 调用**（6 评论）
   号称 3 天内 75 次拒绝，涉及字面量变量、`$(…)`、循环、`&&` 后 heredoc 等合法写法。沙箱过度拦截直接损害自动化流程，是高风险回归。

7. **[#89904](https://github.com/anthropics/claude-code/issues/89904) [OPEN] Artifacts 无法再调用本地 stdio MCP server**（5 评论）
   Artifact 运行时迁移到 `claude.use('mcp')` 能力模型后，`host:` 形式被拒并报 `capabilities.mcp: unavailable`。这是能力模型演进带来的生态兼容回归。

8. **[#103005](https://github.com/anthropics/claude-code/issues/103005) [OPEN] 桌面端自动更新重启后 Remote Control 会话被归档且不恢复**（5 评论）
   影响 Windows / macOS 双平台，手机端无法再接回会话。属于数据/会话连续性问题，对远程协作场景影响明显。

9. **[#87590](https://github.com/anthropics/claude-code/issues/87590) [OPEN] `--setting-sources project` 仍加载用户级 memory**（4 评论）
   与 CLI 文档及 v2.1.223 changelog 描述不符，会破坏项目隔离预期，对多项目、多租户场景有实际风险。

10. **[#101957](https://github.com/anthropics/claude-code/issues/101957) [OPEN] 云会话支持向 GitHub Issue/PR 上传截图**（4 评论）
    需求指向 `gh --attach` / user-attachments，补齐云会话在缺陷复现与评审环节的可视化闭环。

## 4. 重要 PR 进展

过去 24 小时仅 2 条 PR 有更新，以下为全部内容：

1. **[#32751](https://github.com/anthropics/claude-code/pull/32751) [OPEN] fix(hookify): 修复 stop/prompt 事件字段映射**
   修复 #32153：`config_loader.py` 将 `event: stop` / `event: prompt` 简单 `pattern` 规则映射为 `field='content'`，导致 `rule_engine._extract_field()` 无法解析，规则永不触发。属于 hookify 可用性修复。

2. **[#32755](https://github.com/anthropics/claude-code/pull/32755) [OPEN] feat(plugins): 新增 edit-verifier 后置校验插件**
   针对 #32658：Claude 使用 Edit 工具后默认假定成功，若目标文本未匹配（空白差异、代码已被修改），编辑会静默失败并继续执行。该插件在编辑后做校验，直击“静默失败”这一开发者高频痛点。

> 说明：本次数据中 PR 数量不足 10 条，以上为全部，未作填充。

## 5. 功能需求趋势

- **会话与上下文管理**：`/delete` 删除会话（#26904，👍101）呼声最高，体现对上下文清理与隐私控制的诉求。
- **IDE / 编辑器集成体验**：VS Code 扩展的复制失效（#104033）、`advisor_tool_result` 渲染不支持（#90471）、扩展宿主崩溃后会话残留（#102009）；桌面端请求 `@agent` 子代理调用（#100707）、响应内联批注（#95237）。
- **云会话与代码托管生态**：Azure DevOps 仓库支持（#54054，👍61）、向 GitHub Issue/PR 上传截图（#101957）。
- **MCP 生态完善**：在工具列表与权限弹窗渲染 `serverInfo.icons`（#95558），体现 MCP 协议新特性跟进；同时 #89904 显示能力模型迁移带来兼容断裂。
- **桌面端与跨平台一致性**：Windows + WSL 新会话界面不加载 Skills、不显示 Files/Git 面板（#100742）；多语言拼写检查（#88502）。
- **认证与规范合规**：OAuth 回环地址合规（#42765）；Windows 登录因浏览器无法验证被阻断（#105975，今日新建）。

## 6. 开发者关注点

- **静默失败最伤人**：Edit 工具未命中目标文本仍继续执行（#32755 / #32658）、`advisor_tool_result` 无法渲染（#90471）、图片以空白卡片呈现（#83021），都让开发者难以察觉问题已经发生。
- **沙箱与隔离过度拦截**：工作树隔离拒绝合法且不含 git 的 Bash（#95122），以及 `--setting-sources project` 仍加载用户 memory（#87590），都与“隔离/限定范围”的承诺相冲突。
- **会话连续性**：自动更新重启导致 Remote Control 会话被归档且不恢复（#103005），远程与移动端协作链路脆弱。
- **跨平台细节缺失**：Windows/WSL 桌面端功能不对齐（#100742）、多语言拼写检查需手工改配置绕行（#88502）。
- **文档与实现不一致**：多处问题引用 changelog 或 CLI 文档作为依据，社区对“承诺即行为”的期望很高。
- **企业集成门槛**：OAuth 规范合规（#42765）与 Azure DevOps 支持（#54054）共同反映企业在安全校验与代码托管多样性上的硬性要求。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报 · 2026-10-29

## 1. 今日速览

今日 Codex 仓库无正式版本发布，仅有两个 Rust 预发布 alpha 标签。社区讨论高度集中在 **Windows 平台**：VS Code 扩展无法启动 UI、桌面端进程残留、浏览器工具状态异常等多个高评论 Issue 同日活跃。PR 侧以内部自动化提交（copyberry[bot]）为主，重点围绕 **Guardian 审批/审查机制** 与工具调用证据留存展开。

---

## 2. 版本发布

过去 24 小时仅有两个 Rust alpha 标签，更新说明均为版本号本身，无可解析的功能变更：

- `rust-v0.166.0-alpha.6` — Release 0.166.0-alpha.6
- `rust-v0.166.0-alpha.5.1` — Release 0.166.0-alpha.5.1

无正式 release，暂不建议据此评估功能影响。

---

## 3. 社区热点 Issues（10 条）

**① #56691 VS Code 1.143.1（Windows）扩展无法启动 UI** — 评论 41，👍 39
扩展版本 26.1021.22027，Windows + VS Code 1.143.1 环境。今日评论量最高的 Issue，说明该版本组合下的启动故障仍在持续发酵。
https://github.com/openai/codex/issues/56691

**② #56655 VS Code 扩展 26.51021.22027 UI 不启动** — 评论 37，👍 48
与 #56691 高度相似，但 👍 数为今日最高，用户共鸣最强。桌面 IDE 扩展的启动可靠性已成为当前最突出的体验问题。
https://github.com/openai/codex/issues/56655

**③ #25770 Windows Store 版因旧 MSIX 包被锁定而反复更新失败** — 评论 22
创建于 6 月、持续更新至今，属于长期未解的分发层问题，影响 Windows 用户升级路径。
https://github.com/openai/codex/issues/25770

**④ #51867 Windows Cloud Computer Use 启动 codex app-server 失败（program not found）** — 评论 20
涉及 computer-use 插件与 app-server 的集成，属于较新的能力面，故障点明确。
https://github.com/openai/codex/issues/51867

**⑤ #36454 iOS 远程项目列表与 Codex Desktop 不同步** — 评论 18
指出 iOS 端未以 Desktop 为项目数据源，属于远程/多端架构一致性问题，影响跨设备工作流。
https://github.com/openai/codex/issues/36454

**⑥ #29079 Windows 桌面端遗留 Node/MCP 辅助进程导致内存压力** — 评论 16
疑似与 subagent 负载相关，最终导致整机卡顿，是性能类问题中影响面最大的一条。
https://github.com/openai/codex/issues/29079

**⑦ #54989 Windows 浏览器工具报告已禁用，但开关实际为开** — 评论 16
状态不一致需重启恢复，与 #57721 同日出现，指向浏览器能力的初始化时序问题。
https://github.com/openai/codex/issues/54989

**⑧ #57641 CLI `@Browser` 报 "browser access host is unavailable"** — 评论 12
桌面端升级到 26.1023.6123.0 后，CLI 0.164.0 的浏览器访问失效，体现桌面端与 CLI 版本耦合带来的回归风险。
https://github.com/openai/codex/issues/57641

**⑨ #56660 macOS Intel 上 VS Code 扩展报 renderer_ready_timeout** — 评论 10
明确给出可回滚对照：26.1021.22027 失败、26.1007.21434 可用，对定位回归极有价值。
https://github.com/openai/codex/issues/56660

**⑩ #39793 请求支持从桌面端与 Linux 应用进行 Codex Remote 控制** — 评论 8，👍 11
今日 enhancement 中呼声较高的一条，用例明确（Steam Deck 作为控制面），反映远程控制能力缺口。
https://github.com/openai/codex/issues/39793

> 其他值得留意：#53898（云沙箱初始化只读文件系统错误）、#13138（macOS 浏览器 MCP 传输断连需重启）、#57988（Windows Work 模式侧边聊天快捷键失效）。

---

## 4. 重要 PR 进展（10 条）

> 说明：以下 PR 均为 copyberry[bot] 于今日提交且状态为 CLOSED，评论数未提供。

**① #58045 受管命令检查点要求全新人工审批**
支持独立于自动审查、hook 放行和已保存审批的人类决策，是命令执行安全策略的重要补充。
https://github.com/openai/codex/pull/58045

**② #58119 为注入的线程命令增加实验性 Guardian 审查**
暴露 `thread/guardianReview`，可在不执行命令的前提下审查闲置线程最终注入的 `exec_command`，返回调用 ID 与 Guardian 评估。
https://github.com/openai/codex/pull/58119

**③ #58028 对已记录的 exec 调用进行直接 Guardian 审查**
新增 `CodexThread::guardian_review`，基于已记录历史评估最终注入的 `exec_command`。
https://github.com/openai/codex/pull/58028

**④ #58040 在 Guardian 审查中保留原生工具调用证据**
避免因调用已不在活跃历史中而丢失函数调用元数据，提升审查准确性。
https://github.com/openai/codex/pull/58040

**⑤ #58075 使用 serving assessments 进行自适应 Guardian 审查**
将最终 serving assessment 与响应、输出项匹配，并在等待期间随工具调用与代码单元保留。
https://github.com/openai/codex/pull/58075

**⑥ #58123 为 Guardian 增加经校验的弹性分区预算配置**
导出 `ElasticBudgetConfig`、`ElasticSection` 分组与 `ElasticSectionLimits`，支持为可选证据按组设定最小 token 预算。
https://github.com/openai/codex/pull/58023

**⑦ #58091 更新记忆抽取与整合的默认模型**
记忆抽取改用 `gpt-6-luna`，记忆整合改用 `gpt-6.1-terra`（当 provider 不要求后端专用模型 ID 时）。
https://github.com/openai/codex/pull/58091

**⑧ #58122 新增增量式 exec 工具特性开关**
注册 `incremental_exec_tools` 为开发中特性，默认关闭，并纳入配置 schema。
https://github.com/openai/codex/pull/58122

**⑨ #58034 增加关闭成功 SSE delta 日志的选项**
新增 `otel.log_sse_deltas`（默认开启），设为 false 可抑制成功事件日志，同时保留错误、完成等日志。
https://github.com/openai/codex/pull/58034

**⑩ #58110 忽略 Windows 专用 libz-sys 依赖的 RUSTSEC-2026-0418**
该依赖仅经 `curl-sys`/`curl` 在 Windows 上引入且跳过受影响探测，属安全审计噪音清理。
https://github.com/openai/codex/pull/58110

---

## 5. 功能需求趋势

- **IDE 扩展集成稳定性**：#56691、#56655、#56660、#26131 集中于 VS Code 扩展的 UI 启动与加载问题，横跨 Windows 与 macOS Intel。
- **远程 / 多端协同**：#36454、#39793、#57721 指向 Remote 与跨设备项目同步、浏览器状态一致性的能力缺口。
- **性能与资源管理**：#29079 的进程残留与内存压力，属于长时使用场景的稳定性议题。
- **使用量与限额可见性**：#25561 请求在桌面端常驻剩余用量指示。
- **Windows 分发与更新机制**：#25770 反映 MSIX 包管理的长期痛点。
- **安全与审批可解释性**：PR 侧大量 Guardian 相关改动，反映命令审查、人工审批与证据留存正成为重点投入方向。

---

## 6. 开发者关注点

- **Windows 是当前问题最集中的平台**：高评论 Issue 中多数带 `windows-os` 标签，覆盖扩展、桌面应用、CLI、商店分发多个层。
- **"重启可恢复"类问题反复出现**：#54989、#13138 均表现为状态异常需重启应用，指向初始化与状态同步缺陷而非单点崩溃。
- **版本升级引入回归**：#57641、#56660、#57988 均明确给出"旧版本可用 / 新版本失效"的对照，建议关注发布前的跨组件兼容验证。
- **CLI 与桌面端耦合**：桌面应用更新影响 CLI 的浏览器访问能力（#57641），是版本协同风险的具体案例。
- **反馈质量较高**：多条 Issue 附有明确版本号、平台与回滚对照，便于复现定位。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报 · 2026-10-29

> 数据来源：github.com/google-gemini/gemini-cli

## 1. 今日速览

今日无新版本发布。过去 24 小时内，社区动态集中在 **Agent / 子代理（subagent）稳定性** 上：P1 级 bug 包括"子代理达到 MAX_TURNS 后误报为 GOAL success""通用型 agent 永久挂起"，以及 Wayland 下的浏览器子代理失败。PR 侧则以 CLI/TUI 修复与安全边界调整为主（主题配置、命令替换开关、临时路径信任判断等）。

## 2. 版本发布

过去 24 小时无新 Release，本节省略。

## 3. 社区热点 Issues（10 条）

1. **#22323 [P1] 子代理 MAX_TURNS 恢复被误报为 GOAL success** — 13 条评论，今日评论数最高。`codebase_investigator` 在未做任何分析前即触达轮次上限，却上报 `success` / `Termination Reason: GOAL`，掩盖了中断。这是 Agent 结果可信度问题，影响依赖子代理输出的自动化流程。
   https://github.com/google-gemini/gemini-cli/issues/22323

2. **#21409 [P1] 通用型 agent 挂起** — 8 条评论、8 个 👍，是情绪最集中的 issue。只要 CLI 转交 generalist agent 就永久卡住（简单如建目录也会），用户等待长达一小时。高赞说明影响面广。
   https://github.com/google-gemini/gemini-cli/issues/21409

3. **#19873 [P2] 零依赖 OS 沙箱 + 执行后意图路由，释放模型的 bash 亲和力** — 9 条评论。提案认为 Gemini 3 模型天生习惯链式调用 `grep`/`cat`/`sed`/`awk`，希望通过沙箱让模型安全地使用原生 bash 工作流。属于架构级方向讨论。
   https://github.com/google-gemini/gemini-cli/issues/19873

4. **#21968 [P2] Gemini 不会主动使用 skills 与子代理** — 7 条评论。作者反馈除非显式指示，模型几乎不会自发调用自定义 skill 或子代理。若成立，会削弱整套 Agent 扩展机制的实际价值。
   https://github.com/google-gemini/gemini-cli/issues/21968

5. **#22745 [P2] 评估 AST 感知的文件读取、搜索与代码库映射** — 7 条评论。EPIC 类议题，探索用 AST 精确定位方法边界以减少轮次消耗；配套议题 #22746 建议以 tilth 或 glyph 作为起点。
   https://github.com/google-gemini/gemini-cli/issues/22745

6. **#22267 [P2] Browser Agent 忽略 settings.json 覆盖（如 maxTurns）** — 4 条评论。`AgentRegistry` 有配置但浏览器代理完全不生效，属于配置契约失效。
   https://github.com/google-gemini/gemini-cli/issues/22267

7. **#21983 [P1] 浏览器子代理在 Wayland 下失败** — 4 条评论。Linux 桌面环境兼容性问题，影响 Wayland 用户使用浏览器代理。
   https://github.com/google-gemini/gemini-cli/issues/21983

8. **#22232 [P3] 浏览器代理韧性：自动会话接管与锁恢复** — 4 条评论。当前 `BrowserManager.ts` 对锁定的浏览器 profile 采取 fail-fast 策略，建议改为自动接管。与 #22267、#21983 共同构成浏览器代理的稳定性议题群。
   https://github.com/google-gemini/gemini-cli/issues/22232

9. **#24246 [P2] 工具数超过 128 时触发 400 错误** — 3 条评论。摘要中同时出现"128"与"400"两种表述，需要维护者澄清；核心诉求是 agent 应更聪明地按启用范围裁剪工具。该问题直接限制大型工具集/扩展生态的使用。
   https://github.com/google-gemini/gemini-cli/issues/24246

10. **#22672 [P2] Agent 应停止/劝阻破坏性操作** — 3 条评论。模型在复杂 git 操作中会使用 `git reset` 或 `--force`，存在更安全替代方案时仍如此；同时涉及数据库等资源维护。属于安全与可控性高频关注点。
    https://github.com/google-gemini/gemini-cli/issues/22672

其他值得留意的条目：#23571（模型在随机目录生成临时脚本，污染工作区）、#22186 [P1]（get-shit-done 输出钩子在打印摘要时导致崩溃）、#20079（`~/.gemini/agents/` 下符号链接不被识别为 agent）、#22598（子代理轨迹应可通过 `/chat share` 分享）。

## 4. 重要 PR 进展（10 条）

1. **#30031 [P2] 将后台日志流初始化绑定到执行生命周期** — 修复 `ShellExecutionService.background()` 中后台日志资源（`fs.WriteStream` 等）的初始化时机。后台 shell 执行的资源管理问题。
   https://github.com/google-gemini/gemini-cli/pull/30031

2. **#29977 [P2] 让 `read_background_output` 尊重取消信号** — 此前设置 `delay_ms` 时，已取消的调用仍会睡满整个延迟再读日志。直接影响交互式取消体验。
   https://github.com/google-gemini/gemini-cli/pull/29977

3. **#29978 [P2] 保留 `read_background_output` 中的超长行与边界行** — 修复读取最后 64KB 时丢弃窗口首行导致"单行超 64KB 的日志返回空内容"的问题。
   https://github.com/google-gemini/gemini-cli/pull/29978

4. **#30020 重试时丢弃失败尝试已流式输出的工具调用** — 流中途重试时，前端会同时收到失败与成功两次尝试的 `ToolCallRequest`，造成重复工具调用。
   https://github.com/google-gemini/gemini-cli/pull/30020

5. **#30019 工具输出脱敏时保留会话历史** — 保证恢复被脱敏工具输出的会话时，用户首条 prompt 不丢失。
   https://github.com/google-gemini/gemini-cli/pull/30019

6. **#30029 让命令替换阻止策略可配置** — 新增 `security.allowCommandSubstitution`（默认 `false`），替换当前对 `$()`、反引号、`<()/ >()` 的硬编码无条件阻止。安全默认不变，但给予有需求的用户显式开关。
   https://github.com/google-gemini/gemini-cli/pull/30029

7. **#30026 在不可信参数检查中将项目临时路径视为本地** — 修复 `~/.gemini/tmp/<project>/...` 下 CLI 自身辅助脚本被误判为不可信 shell 参数的问题。
   https://github.com/google-gemini/gemini-cli/pull/30026

8. **#29918 [P3] 向终端上报 working / blocked / idle 状态（OSC 7501）** — 多标签多会话场景下，终端可感知会话状态。对重度多会话用户有价值。
   https://github.com/google-gemini/gemini-cli/pull/29918

9. **#30027 [P1] 支持独立的自定义主题配置** — 与 #30032 相关，补齐自定义主题的独立配置能力。
   https://github.com/google-gemini/gemini-cli/pull/30027

10. **#30023 [P2] 在 PR CI 中运行 SDK 测试并修复 `session.test.ts` 中的 AgentLoopContext mock** — 重新启用 6 个被跳过的 `GeminiCliSession.sendStream()` 单测，并把 `@google/gemini-cli-sdk` 纳入 CI。改善 SDK 质量门禁。
    https://github.com/google-gemini/gemini-cli/pull/30023

其他值得关注：#30032（补全 `CustomTheme` 的 `ui.active` / `ui.focus` schema）、#30013（`.git` 后缀去除锚定到 URL 末尾，修正仓库名解析）、#29965（ExpandableText 在 UTF-16 代理对边界截断 emoji）、#30006（Windows IDE 进程检测改用 PowerShell CIM 兜底）；#30024 为 dependabot 的 undici 升级（7.10.0 → 7.30.1），已关闭。

## 5. 功能需求趋势

- **子代理（subagent）体系成熟化**：议题密集覆盖结果语义正确性（#22323）、自发调用率（#21968）、轨迹可观测与分享（#22598）、Sprint 规划（#20195）、示例与沉淀（#18283），以及 `~/.gemini/agents/` 符号链接识别（#20079）。
- **浏览器代理稳定性**：配置覆盖失效（#22267）、Wayland 兼容（#21983）、profile 锁恢复（#22232）三条并行，显示 browser agent 正被真实场景加压。
- **工具与上下文效率**：AST 感知读取/搜索/映射（#22745、#22746）以减少轮次；工具数上限与按范围裁剪（#24246）；任务追踪器改用原生文件工具（#21000）。
- **执行安全与可控性**：阻止破坏性命令（#22672）、命令替换开关（PR #30029）、临时路径信任判定（PR #30026）、命令替换与用户定制主题（PR #30029 / #30027）。
- **终端与 IDE 交互体验**：OSC 7501 状态上报（PR #29918）、Windows IDE 进程检测（PR #30006）、TUI 渲染与主题（PR #29918 / #30032 / #29965）。

## 6. 开发者关注点

- **可靠性优先于新功能**：今日评论最集中的 Issue 全部是"静默错误/挂起"类问题——子代理误报成功、generalist agent 永久卡住、流式重试产生重复工具调用。用户最在意的是"结果可信、可取消、不卡死"。
- **配置契约必须被遵守**：`settings.json` 对 Browser Agent 不生效（#22267）、符号链接 agent 不被识别（#20079），这类"配置写了没用"的问题对高级用户伤害最大。
- **安全默认要安全，但需可退出**：命令替换、破坏性 git 操作、不可信 shell 参数三类议题同时活跃；PR #30029 的"默认关闭 + 显式开启"是社区较认可的折中。
- **工作区整洁与清理成本**：模型在随机位置生成临时脚本（#23571）直接增加提交前清理负担，属于高频低烈度痛点。
- **可观测性需求上升**：子代理轨迹不可见、需经 `/chat share` 分享（#22598），以及终端状态上报（PR #29918），说明用户开始需要"看得见 agent 在干什么"。
- **多平台兼容边界**：Wayland（#21983）与 Windows（PR #30006）问题持续出现，非 macOS 环境仍是稳定性短板。
- **CI/SDK 质量门禁**：PR #30023 重新启用被跳过的 SDK 单测，反映社区对 SDK 层测试覆盖的关注。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报（2026-10-29）

## 1. 今日速览

过去 24 小时无新版本发布、无 PR 更新，社区讨论完全集中在 Issue 区。最受关注的是 Issue #552（企业权限导致模型列表 403，31 条评论），且多条高严重度的会话/内存与 MCP 相关缺陷在今日更新状态：部分已关闭（如 #4613、#4710、#4851），部分仍在排查（如 #5254、#4555）。ACP（Agent Client Protocol）相关能力缺口持续被提出（#4275、#2109、#4555）。

## 2. 版本发布

无新版本发布。

## 3. 社区热点 Issues（10 条）

1. **[#552](github/copilot-cli Issue #552) 企业启用后仍报 `403 unauthorized`，无法列出模型**（OPEN，31 评论，👍4，2025-11-13 创建）
   持续近一年的老问题，评论数最高，反映企业/组织授权与模型可见性之间的配置断层，影响面大，值得优先跟进。

2. **[#4802](github/copilot-cli Issue #4802) PRU 配额被清空，疑与开启 Assisted Permissions 相关**（OPEN，triage，8 评论）
   涉及计费配额被异常消耗，对 Pro 年度/传统 PRU 用户风险高，属于用户敏感的财务类问题。

3. **[#4275](github/copilot-cli Issue #4275) ACP 未暴露 `contextTier` 会话配置项**（OPEN，7 评论，👍4）
   交互式 `/model` 可切换上下文档位，但 ACP 服务端无法设置，影响第三方 ACP 客户端的对齐能力。

4. **[#4851](github/copilot-cli Issue #4851) Azure MCP server 发送 HTTP 请求失败**（CLOSED，6 评论，👍10）
   已关闭，“一夜之间失效”的 Rust runtime BrokenPipe 问题影响使用 Azure API Center MCP registry 的团队，点赞最高之一，闭环值得关注。

5. **[#2165](github/copilot-cli Issue #2165) Ubuntu keychain 支持损坏**（OPEN，more-info-needed，5 评论，👍22）
   本批 Issue 中点赞最高（22），同时指出官方排障文档有误，Linux 用户认证体验痛点明显。

6. **[#2109](github/copilot-cli Issue #2109) ACP 需要 `ask_user` / `ask_question` 扩展方法**（OPEN，4 评论，👍8）
   让自定义 ACP 客户端能向用户追问并回传结构化答案，是 ACP 生态可用性的关键缺口。

7. **[#4555](github/copilot-cli Issue #4555) ACP `session/prompt` 无条件中止会话，取消后台子代理**（OPEN，3 评论）
   同一操作在交互式 TUI 中行为正常，属于 ACP 模式下的行为不一致缺陷，影响多子代理工作流。

8. **[#4710](github/copilot-cli Issue #4710) 空闲会话中 `copilot-file-search` 线程失控占 CPU 与磁盘**（CLOSED，3 评论）
   在 `--yolo` 模式下状态显示 idle 却持续写盘，已关闭，属于资源泄漏类问题，值得回归验证。

9. **[#4613](github/copilot-cli Issue #4613) 1.0.80+ MCP schema 被提前注入，启动多出 354K tokens**（CLOSED，3 评论）
   标注为高严重度回归，直接影响首轮请求成本与延迟，已关闭但值得确认修复范围。

10. **[#5254](github/copilot-cli Issue #5254) 1.0.103 主进程膨胀至 37 GiB，133M 次 malloc 分配**（OPEN，2 评论）
    长时间并行 agent 会话在 32 GiB Mac 上超出物理内存并卡顿，属严重稳定性问题，尚在排查中。

> 其他值得留意的同类缺陷：#5236（Windows Entra broker token 缓存 0 字节，每次新进程重新提示）、#4273（macOS 签名主体不同导致每次启动弹出 keychain）、#5205（上下文 rollover 因缺少 checkpoint.md 失败）、#4916（MCP `text/plain` `resource.blob` 到达模型时为空）、#4576（`includeCoAuthoredBy: false` 不被 task 子代理继承）。

## 4. 重要 PR 进展

过去 24 小时内无 PR 更新，本节无内容。

## 5. 功能需求趋势

- **ACP 生态完备性**：`contextTier` 会话配置（#4275）、`ask_user` 扩展方法（#2109）、`session/prompt` 中止行为一致性（#4555）——社区希望 ACP 与交互式 TUI 能力对齐。
- **MCP 集成健壮性**：远程 MCP 的 OAuth/token 问题（#4851、#5058、#5061、#5236）、schema 注入开销（#4613）、资源 blob 解析（#4916）。
- **会话与内存管理**：长时间/并行 agent 会话的内存膨胀（#5254）、上下文 rollover（#5205）、压缩触发阈值（#4571）。
- **跨平台认证**：Ubuntu keychain（#2165）、macOS keychain 分区（#4273）、Windows Entra 缓存（#5236）。
- **企业授权与模型可见性**：#552 反映组织级启用与模型列表不匹配。

## 6. 开发者关注点

- **认证与凭证是最大痛点**：Linux/macOS/Windows 三平台均有 keychain 或 token 缓存问题，且部分文档表述有误。
- **资源消耗与稳定性**：内存膨胀、空闲线程占 CPU/磁盘、启动 token 膨胀，都会实质影响日常使用成本。
- **计费透明度**：配额异常清空（#4802）需要明确归因。
- **子代理行为一致性**：设置项（如 `includeCoAuthoredBy`）与插件 agent 在交互模式与子代理/非交互模式间表现不一致（#4576、#4592）。
- **集成层易碎**：MCP/OAuth、Azure 依赖“隔夜失效”，开发者期望更强的容错与回归覆盖。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报（2026-10-29）

## 1. 今日速览

过去 24 小时内，MoonshotAI/kimi-cli 无新版本发布，也无 Issues 更新；社区动态集中在唯一一条 PR 更新上：#2648 为 `PreToolUse` 钩子新增了一个 HOL Guard 安全校验示例，在 Shell 命令执行前先行分类判定。整体活跃度较低，当日关注点仅为单一安全类示例贡献。

## 2. 版本发布

无新版本发布，本部分省略。

## 3. 社区热点 Issues

过去 24 小时内无 Issues 更新（共 0 条），无法列出条目。

## 4. 重要 PR 进展

过去 24 小时内仅 1 条 PR 更新，未达 10 条，现按实际数量列出：

- **[#2648] examples: add HOL Guard PreToolUse gate**（OPEN，作者 kantorcodes，创建于 2026-09-16，更新于 2026-10-28）
  该 PR 新增一个聚焦的 `PreToolUse` 示例：将 Kimi CLI 的 `Shell` 命令在真正执行前交给 HOL Guard 校验。钩子逻辑为调用 `hol-guard command test <command> --json`，仅在 `classification.explicitly_benign` 为真时放行（摘要在此处截断）。
  意义：展示了通过 `PreToolUse` 钩子对 Shell 命令实施“先判定、后执行”的安全管控模式，对需要在自动化场景中限制命令执行的用户具有参考价值。
  链接: https://github.com/MoonshotAI/kimi-cli/pull/2648

## 5. 功能需求趋势

过去 24 小时内无 Issues 数据，无法从社区反馈中提炼功能方向。当日唯一可见信号来自 PR #2648，指向**命令执行安全与钩子（hook）扩展机制**这一实践方向，但样本仅一条，不构成趋势结论。

## 6. 开发者关注点

基于当日有限数据：

- **命令执行前安全校验**：PR #2648 表明部分开发者希望借助 `PreToolUse` 钩子在 Shell 命令执行前引入外部策略判定（如按 `classification.explicitly_benign` 决定是否放行），以实现白名单式放行。
- 该 PR 自 2026-09-16 创建、至 2026-10-28 仍在更新且保持 OPEN 状态，显示其在评审/迭代中；除此之外，当日无其他开发者反馈可供归纳。

---

*说明：受数据所限，本日报仅覆盖 1 条 PR 更新；Issues 与 Releases 部分因过去 24 小时无数据而空缺，未作推断或补充。*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 · 2026-10-29

## 1. 今日速览

今日 v2.2.1 带来 **`/goal` 目标持续运行机制**，同时 process-daemon 发布 v0.3.3（PTY 协议 7）。社区端几乎被**免费额度问题**淹没：50 条更新 Issue 中过半数与 Zen 免费层配额耗尽、重置时间不准、桌面端不支持免费模型相关，主追踪 Issue #59387 已有 101 条评论。维护者也提交了多个针对 Go 用量限额的修复 PR，说明计费/限流链路是当前重点战场。

## 2. 版本发布

**v2.2.1**
- **Keep Working Toward a Goal**：在 TUI 或 Desktop 中运行 `/goal <objective>`，会话将持续推进直至 reviewer 确认目标达成；支持 `/goal pause`、`/goal resume`、`/goal clear` 控制。（PR #59437）
- 该机制与 #60000、#60001 两个 PR 相关，后者为 goal 插件添加自定义图标与 pill 重新设计。

**process-daemon v0.3.3**
- `@opencode/pty@0.3.3`（protocol 7），从 `packages/process-daemon` 发布至 npm。
- 对应 PR #60276（[contributor] chore(core)）已将持久 PTY daemon 依赖切换到 `@opencode/pty@0.3.3`。

## 3. 社区热点 Issues

1. **#59387 [OPEN] Free tier issues 主追踪帖** — 101 评论、9 👍。官方指定的免费层问题汇总入口，覆盖 “Free usage exceeded”、“Free usage limit reached” 等报错。是理解当前免费层争议的总入口。[链接](https://github.com/anomalyco/opencode/issues/59387)
2. **#60124 [CLOSED] 免费额度重置时间在无使用情况下持续后移（Oct 29 → Oct 30）** — DeepSeek V4 Flash Free / Build 模式，用户昨日被告知 10/29 1:30 AM 重置，但时间再次推后。直接指向配额计时逻辑缺陷。[链接](https://github.com/anomalyco/opencode/issues/60124)
3. **#60279 [CLOSED] Zen 限流未按宣传重置 + Desktop v2.2.1 缺少自定义 Provider 选项** — Windows 11 上的双问题报告，把限流与桌面端配置能力缺失合并呈现。[链接](https://github.com/anomalyco/opencode/issues/60279)
4. **#59958 [CLOSED] 桌面端提示“不再支持免费模型”** — 即使用户已升级到最新版仍报错，提示前往 opencode.ai/download 更新，疑似版本检测/分发问题。[链接](https://github.com/anomalyco/opencode/issues/59958)
5. **#60149 [CLOSED] 免费配额重置后仍被阻塞** — v2.2.1 / Windows / CLI-TUI，影响 `opencode/big-pickle` 等 `opencode/*-free` 模型，重置时间显示为 30/10 06:12。[链接](https://github.com/anomalyco/opencode/issues/60149)
6. **#60092 [CLOSED] 升级到 V2 后免费额度变少** — 中文用户反馈升级后额度收紧，代表本次 V2 迁移中的普遍情绪。[链接](https://github.com/anomalyco/opencode/issues/60092)
7. **#47697 [OPEN] cli(v2): node 构建不列出任何模型** — `opencode2-node` 插件解析全部失败，`resolveModule`（`packages/util/src/runtime/import.node.ts`）抛出 `TypeError: (intermediate value).resolve is not a function`，导致插件重载中断、模型目录为空。长期未修的 V2 阻塞项。[链接](https://github.com/anomalyco/opencode/issues/47697)
8. **#60290 [CLOSED] 仅覆盖 `limit.output` 的模型会导致整个 provider 消失** — `normalize.migrateProviders` 解码 legacy provider 时崩溃，连带同 provider 下所有模型消失，属于配置迁移的高危回归。[链接](https://github.com/anomalyco/opencode/issues/60290)
9. **#47259 [CLOSED] qwen3.7-plus 在 opencode-go 通道输出被静默截断** — `finish_reason=stop`、token 用量与残存文本一致，但首段丢失。属于难以察觉的数据损坏类 bug。[链接](https://github.com/anomalyco/opencode/issues/47259)
10. **#60282 [OPEN] MCP elicitation 审批表单丢失换行** — Desktop 将换行渲染为空格，结构化审批提示被压成单段，影响审批可读性与安全性。[链接](https://github.com/anomalyco/opencode/issues/60282)

其他值得留意的：#53375（SSH 服务器版本不匹配显示 “running OpenCode 1”）、#59955（删除账号后因 Stripe UPI 支付无法重建）、#59957（TUI 本地化/俄语需求）、#47345（将插件管理器暴露为 `/plugins` 斜杠命令）。

## 4. 重要 PR 进展

1. **#60284 [OPEN] 显示 Go 用量限额的重置时间、Go 页面链接与 composer 托盘** — 由 thdxr 提交，基于 kitlangton 的 #57897/#58008 重做并精简托盘。[链接](https://github.com/anomalyco/opencode/pull/60284)
2. **#57897 [CLOSED] 为 Go 与 ChatGPT 用量限额定型** — 修复 v2 中 Go 订阅者触限后报红并丢失 prompt、ChatGPT 限额弹窗从不打开的问题。与 #58694/#58731 同系列。[链接](https://github.com/anomalyco/opencode/pull/57897)
3. **#60291 [CLOSED] 接受 legacy provider 配置中的部分模型限额** — 修复 #60290，解决仅设置 `limit.output` 导致整个 provider 被丢弃。[链接](https://github.com/anomalyco/opencode/pull/60291)
4. **#53129 [OPEN] 保留部分模型限额** — 允许单独设置 legacy 模型限额字段并保留其余字段，是 #60291 之外的并行方案。[链接](https://github.com/anomalyco/opencode/pull/53129)
5. **#60289 [OPEN] 为 mutual TLS 提供客户端证书** — 基于 #60259（adamdotdevin）的 4 个提交，追加一处修复，面向企业内网/自托管场景。[链接](https://github.com/anomalyco/opencode/pull/60289)
6. **#59121 [OPEN] 保留以换行分隔的文件名** — `glob` 与 `find` 此前按换行切分 `rg --files` 输出，含换行的文件名被错误拆开。修复 #59120。[链接](https://github.com/anomalyco/opencode/pull/59121)
7. **#60276 [CLOSED] 核心切换到 `@opencode/pty` 0.3.3** — 与今日 process-daemon 发布配套。[链接](https://github.com/anomalyco/opencode/pull/60276)
8. **#60287 [OPEN] 修复窄宽度下 `truncateMiddle` 溢出** — 窄对话框与 prompt 中的中间截断文本不再越界，修复 #59912，作者为免费层主帖作者 neriousy。[链接](https://github.com/anomalyco/opencode/pull/60287)
9. **#60249 [OPEN] toast 通知遮挡处隐藏终端光标** — 修复 #60215，避免宿主光标在 toast 覆盖格上闪烁。[链接](https://github.com/anomalyco/opencode/pull/60249)
10. **#59770 [OPEN] 用数字键盘 Home/End 浏览会话记录** — 关闭 #55533（#57113 已作为重复关闭），补足 TUI 键位支持。[链接](https://github.com/anomalyco/opencode/pull/59770)

其他：**#60066**（CLI 增加 shell 相关设置）、**#60063**（TUI `/settings` 增加 Shell 条目）为同一贡献者的配套改动；**#60000/#60001** 围绕 goal pill 的图标与视觉重设计；**#60296** 为文档新增托管方案链接。

## 5. 功能需求趋势

- **配额与计费可观测性**：社区最强烈的诉求不是新功能，而是“限额何时重置、为何不重置、我用了多少”的透明度。多个 PR 正把限额定型化并展示重置时间，方向明确。
- **插件系统可发现性**：TUI 插件管理器已存在但不可达，用户要求以 `/plugins` 斜杠命令暴露（#47345）；同时插件希望获得更多 UI 扩展点（composer pill 自定义图标 #60000）。
- **TUI 本地化**：出现明确的多语言请求（#59957，俄语），此前 TUI 无内置 i18n。
- **终端 UX 细节**：窄宽度截断、光标遮挡、键位映射、shell 集成设置等一批“小而痛”的终端体验修复集中出现。
- **企业/自托管能力**：mutual TLS 客户端证书（#60289）显示内网与合规部署需求在增长。
- **桌面端配置自由度**：v2.2.1 缺少自定义 Provider 选项被点名为阻塞工作流的问题（#60279）。

## 6. 开发者关注点

- **V2 迁移的信任成本**：免费额度收紧（#60092）、桌面端称“不再支持免费模型”（#59958）、配额重置后仍被阻塞（#60149），三条线索叠加，用户对升级的抵触情绪明显。官方以 #59387 集中收口是正确做法，但需要尽快给出时间线。
- **配置迁移的破坏性**：`limit` 部分覆盖导致整个 provider 消失（#60290）属于“静默丢数据”级别，这类回归比 UI bug 更伤信任。
- **Node 运行时仍是 V2 短板**：`opencode2-node` 的 `resolveModule` 崩溃（#47697）自 9 月挂到今天，插件与模型目录双双失效，影响面大。
- **Claude/GPT 之外的模型通道稳定性**：qwen3.7-plus 输出截断（#47259）这类 `finish_reason=stop` 的静默损坏，最难被用户归因。
- **付费链路**：Stripe UPI 支付失败导致账号无法重建（#59955），属于会直接流失新用户的问题。
- **大量 Issue 处于 `pending close, triaging`**：今日列表中绝大多数 CLOSED 条目带此标签，说明维护者正在批量清理重复报告，但也意味着部分真实缺陷可能被快速关闭，需要关注后续跟进。

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报（2026-10-29）

> 数据来源：github.com/badlogic/pi-mono。说明：Issue/PR 摘要中的链接原文写法为 `earendil-works/pi`，本报告链接均按数据原文保留，未做改写（可能是镜像或关联仓库）。

## 1. 今日速览

今日无新版本发布，社区活动集中在缺陷修复与缓存相关问题：Windows 使用体验的元讨论（#7547）持续发酵、评论数达 91；全屏模式下大 transcript 逐帧重渲染导致单核满载（#9549）和提示词缓存被意外击穿（#10024、#11529）是开发者最关心的性能痛点。PR 侧以机器人提交的小型修复为主，同时出现 TUI 阿拉伯语 RTL 渲染、Anthropic 服务端消息线程等方向性提案。

## 2. 版本发布

过去 24 小时内无新 Release。

## 3. 社区热点 Issues（10 个）

1. **#7547 [Windows] Pi 在 Windows 上如何使用、遇到哪些问题（91 评论）**
   元讨论帖，征集 Windows 运行方式与问题，用于决定修复、文档与投入的优先级。是社区参与度最高的话题，说明 Windows 支持面广但碎片化严重。
   https://github.com/earendil-works/pi/issues/7547

2. **#9549 全屏模式下大 transcript 每帧重渲染，每次 resize 重发整个 transcript（单核饱和）（17 评论）**
   在 Windows 11 / Windows Terminal 上可稳定复现，报告由本地 pi agent 协助整理并经作者验证。属于影响长会话可用性的核心性能缺陷。
   https://github.com/earendil-works/pi/issues/9549

3. **#11157 [prio:p0] 扩展在 `session_start` 调用 `sendMessage` 会让每个会话变成 legacy transcript（3 评论）**
   被标为 P0：`getInitialSystemMessage` 依赖 `messages[0]`，pi-memory、pi-session-search 等扩展会把自定义消息插到系统消息之前，影响所有使用此类扩展的会话。
   https://github.com/earendil-works/pi/issues/11157

4. **#10024 运行中切换工具集会移动 system prompt 头部并导致整段对话重新计费（5 评论）**
   与缓存计费直接相关，涉及真实成本，开发者复现路径明确。
   https://github.com/earendil-works/pi/issues/10024

5. **#11529 工具顺序取决于注册顺序，同一组工具也可能击穿 prompt cache（3 评论）**
   `getCurrentTools()` 按插入顺序返回，工具移除后重新加入会排到末尾；MCP 服务在会话中途连接时尤其容易触发。
   https://github.com/earendil-works/pi/issues/11529

6. **#9508 [bug] pi-ai 向 OpenAI 兼容供应商发送 OpenAI 专有字段/角色/鉴权，导致 400/422（9 评论）**
   影响所有第三方 OpenAI 兼容 provider 的可用性，是互操作性的高频痛点。
   https://github.com/earendil-works/pi/issues/9508

7. **#11570 [CLOSED] 长会话 V8 OOM（SIGABRT），5 份生产崩溃报告（3 评论）**
   2 天以上、约 8MB 会话文件在 macOS 上崩溃，两天内采集到 5 份签名一致的崩溃报告；虽已关闭，但长会话稳定性值得持续跟踪。
   https://github.com/earendil-works/pi/issues/11570

8. **#10497 [bug, inprogress] OpenRouter 返回 400（13 评论）**
   扩展在请求中注入文件内容后偶发 400（endpoint 最大上下文相关），评论数较高，说明受影响的扩展开发者较多。
   https://github.com/earendil-works/pi/issues/10497

9. **#9656 [bug] Windows + Zellij 下滚轮滚动的是提示历史而非对话记录（12 评论，👍5）**
   多层终端（Windows → Alacritty → Zellij → Pi）组合下的输入路由问题，👍 数为本期最高之一，反映终端环境兼容性是真实需求。
   https://github.com/earendil-works/pi/issues/9656

10. **#10367 [CLOSED] OpenAI 兼容流式 usage 中 reasoning_tokens 与 completion_tokens 不相交（LiteLLM + GLM/DeepSeek）（4 评论）**
    影响用量统计与 Fusion；`parseChunkUsage()` 无条件将 `completion_tokens` 映射为 output。对依赖用量的团队有直接影响。
    https://github.com/earendil-works/pi/issues/10367

（其他值得留意：#11527 Bedrock 每次请求新建 `BedrockRuntimeClient`，SSO 下每调用都重建凭据与 HTTP/2 会话；#10988 `max_tokens` 被 4 字符/token 启发式压到极小值，导致约 48% 上下文即截断；#11534 上下文用量计数回退为全量估算。）

## 4. 重要 PR 进展（10 个）

1. **#11577 fix(coding-agent)：图片缩放时在 PNG 与 JPEG 中取较小者（已关闭）**
   此前因 PNG 优先，只要未超 `maxBytes` 就始终用 PNG，即使 JPEG 更小。
   https://github.com/earendil-works/pi/pull/11577

2. **#11572 fix(ai)：不再重试智谱用量上限错误（code 1308）（已关闭）**
   `isRetryableAssistantError()` 因裸 429 将数小时后才重置的配额错误判为可重试。
   https://github.com/earendil-works/pi/pull/11572

3. **#11565 fix(tui)：常规模式停止写入 OSC 133 提示符标记（已关闭）**
   Rex、iTerm2 3.7.5+ 会把 `133;A` 当作新 shell 提示符，与 #11519 状态栏消失问题相关。
   https://github.com/earendil-works/pi/pull/11565

4. **#11566 fix(coding-agent)：技能诊断统一标注为 `[Skill warnings]`（已关闭）**
   此前所有技能诊断（含仍可加载的校验警告）都挂在 `[Skill conflicts]` 下，误导用户。
   https://github.com/earendil-works/pi/pull/11566

5. **#11571 fix(coding-agent)：npm 包更新后版本未变化时给出警告（已关闭）**
   `npm view` 与 `npm install` 读取不同 registry 时出现静默不更新。
   https://github.com/earendil-works/pi/pull/11571

6. **#11556 fix(coding-agent)：让 SDK 流为摘要请求解析鉴权（已关闭）**
   此前 `_getSummarizationRequestAuth` 解析 OAuth 后把 access token 当 `options.apiKey` 传入，影响 compaction、分支摘要和 bug-report 摘要。
   https://github.com/earendil-works/pi/pull/11556

7. **#11562 fix(coding-agent)：新会话从 cwd 的默认目录开始（OPEN）**
   修复从其他项目 cwd 打开会话后新会话被当作自定义 `--session-dir` 的问题。
   https://github.com/earendil-works/pi/pull/11562

8. **#11546 fix(coding-agent)：`pi.exec` 输出上限 256 MiB（已关闭）**
   通过 `ExecOptions.maxBuffer` 限制 stdout/stderr 合并输出，超限终止命令并报错，关闭 #11360。
   https://github.com/earendil-works/pi/pull/11546

9. **#11545 Anthropic 消息线程（OPEN）**
   设置 session id 后利用 Anthropic 服务端 message threads beta，只发送新消息而非每轮全量历史，可能显著降低 token 成本。
   https://github.com/earendil-works/pi/pull/11545

10. **#11580 为 TUI 增加阿拉伯语 RTL 渲染（双向文本，Windows Terminal）（已关闭）**
    针对 Windows Terminal 不实现 UAX #9 的问题，在终端层补足逻辑序到视觉序的映射，修复 #11579，属国际化方向。
    https://github.com/earendil-works/pi/pull/11580

（另：#11578 调整 npm audit 中 zod 不可修复告警的接受策略并清理过期 node-forge 条目；#11544 修复 Unix daemon 终止时残留命令；#11582 使 Gondolin 示例可打包。）

## 5. 功能需求趋势

- **Prompt 缓存稳定性与成本控制**：#10024、#11529、#10022（OpenRouter compaction 请求丢失 `x-session-id`）、#11545（服务端消息线程）共同指向“减少重复计费”这一主线。
- **上下文与用量计量准确性**：#10367、#10988、#11534 涉及 usage 解析、`max_tokens` 估算和上下文计数回退。
- **OpenAI 兼容层互操作性**：#9508、#10497，以及 #8706（Z.AI 强制思考模型的 reasoning 泄漏）反映多 provider 适配仍是摩擦点。
- **Windows / 多层终端体验**：#7547、#9549、#9656、#11519 集中在 Windows Terminal、Zellij 等组合环境。
- **长会话稳定性**：#11570（V8 OOM）、#9549（单核饱和）指向大 transcript 场景的资源管理。
- **扩展生态与 SDK 正确性**：#11157（会话启动期消息顺序）、#11556（摘要鉴权）、#11573（codemode 注释使小模型把 `tools.` 写进工具名）、#11576（第三方扩展问题需在扩展仓库跟踪）。
- **国际化与可访问性**：#11580 阿拉伯语 RTL 渲染。

## 6. 开发者关注点

- **缓存击穿带来的隐性成本**：工具集顺序、system prompt 头部变动都会触发重计费，开发者希望系统对工具顺序做稳定排序、避免运行中变更影响 prompt 前缀。
- **推理 token 计费语义不统一**：LiteLLM + GLM/DeepSeek 流式 usage 中 reasoning 与 completion 不相交，直接破坏用量统计。
- **Windows 是最大的体验洼地**：终端组合多、渲染与输入路由问题集中，社区希望明确优先级与官方文档。
- **大会话的性能与内存**：逐帧重渲染与 V8 OOM 说明长会话（数天、数 MB）是真实使用场景。
- **多 provider 兼容细节**：OpenAI 专有字段、429 与配额错误的可重试性判定、Bedrock 客户端复用等，需要 provider 层更精细的处理。
- **扩展作者需要稳定契约**：会话启动期消息顺序、`pi.exec` 输出上限、SDK 鉴权解析等细节直接影响扩展正确性；同时社区也在推动把第三方扩展问题留在扩展自身仓库跟踪（#11576）。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报 · 2026-10-29

## 1. 今日速览

今日发布 v0.26.4 正式版与 Desktop v0.26.4，TypeScript SDK 同步至 v0.1.26，核心变更为生成式 UI 视图跟随宿主主题。CI/CD 稳定性仍是社区最大噪音源：主 CI 失败、CVE 审计失败、Web Shell 冒烟测试超时等自动化 Issue 占据了高评论榜多数席位。同时，发布流水线提速与 Managed Agent 架构拆分成为 PR 侧的主线工作。

## 2. 版本发布

- **v0.26.4**：Release 说明中无已知破坏性变更，变更清单主要包含 `feat(generated-ui): follow the host theme in generated views`（#15798）。
- **desktop-v0.26.4**：随版本携带 `fix(config): report controls that were silently dropped`（#15794）等修复。
- **sdk-typescript-v0.1.26**：绑定 CLI 0.26.4（由源码构建）。
- **v0.26.3-nightly.20261028.ca204559a7**：夜间构建，同样包含 #15794 配置修复。
- 另有一项配置修复 `fix(config)`（#15794，@yiliang114）同时出现在 Desktop 与 nightly 发布说明中。

## 3. 社区热点 Issues（精选 10 条）

1. **[#14724](https://github.com/QwenLM/qwen-code/issues/14724)（OPEN，83 评论）** Managed Agent gate 主 CI 失败，提示无测试被识别。评论量全站最高，反映 CI 失败追踪机制的长期堆积。
2. **[#13078](https://github.com/QwenLM/qwen-code/issues/13078)（OPEN，35 评论）** 每日依赖 CVE 审计任务失败，可能涉及新的高危漏洞，安全面需关注。
3. **[#15052](https://github.com/QwenLM/qwen-code/issues/15052)（OPEN，14 评论）** 主分支 E2E 的 ref 级并发会替换正在等待的运行，导致中间提交缺乏独立验证结果，属比较隐蔽的 CI 可信度问题。
4. **[#15861](https://github.com/QwenLM/qwen-code/issues/15861)（OPEN，P1）** Web Shell 宿主目录选择器冒烟测试在无关 PR 上确定性超时，每个 PR 都要付出重新归因的成本。
5. **[#15855](https://github.com/QwenLM/qwen-code/issues/15855)（OPEN，P1）** 用户配置的 `contextWindowSize`（128k）被自动移除，直接影响自定义/本地 OpenAI 兼容端点的使用，属配置可靠性回归。
6. **[#15461](https://github.com/QwenLM/qwen-code/issues/15461)（OPEN，P2，8 评论）** 提议为发布流程预留 ECS runner 槽位并拆分 build/publish，`publish` 是最后一个仍争抢 GitHub 托管容量的发布任务。
7. **[#15465](https://github.com/QwenLM/qwen-code/issues/15465)（OPEN，P2）** 发布后扇出在 GitHub 托管 runner 上仍要等 37–50 分钟；v0.26.1 本身发布正常，但后续流程延迟。
8. **[#15783](https://github.com/QwenLM/qwen-code/issues/15783)（OPEN，P3）** 提议把常规 macOS/Darwin CI（含 Managed Agent）移到亚洲/上海时区的夜间运行，PR 与主分支仍保留即时 Linux 验证。
9. **[#12059](https://github.com/QwenLM/qwen-code/issues/12059)（OPEN，P3，5 评论）** vscode-ide-companion 远程 webview 失败模式（转发端口 Host 门控、IPv6 CSP、Remote-SSH/WSL）的后续覆盖，IDE 集成方向的关键遗留项。
10. **[#11665](https://github.com/QwenLM/qwen-code/issues/11665)（CLOSED，P2）** Responses 清理会破坏 reasoning item 与 function_call 的相邻性约束，已关闭，属核心请求管线正确性修复。

其他值得扫一眼的关闭项：#13175（Web Shell 会话总览/分屏快捷键）、#11878（无工作区会话在总览表缺失）、#13782（会话从磁盘恢复后分支按钮消失）、#14620（审批卡片双滚动条）、#13391（ru 语种 Goal 卡片本地化）。

## 4. 重要 PR 进展（精选 10 条）

1. **[#15832](https://github.com/QwenLM/qwen-code/pull/15832)** `fix(release)`：将发布构建及合规的下游任务路由到 ECS 上带标签的 runner 进程，直接针对托管 runner 排队延迟，直指 main。
2. **[#15854](https://github.com/QwenLM/qwen-code/pull/15854)** `perf(release)`：当影响原生音频二进制的全部输入一致时，复用此前成功官方发布的预构建产物，避免每次重建五个目标。
3. **[#15871](https://github.com/QwenLM/qwen-code/pull/15871)** `refactor(managed-agent)`：将 Managed Agent Server 拆为六个生产 Maven 模块加一个不发布的验证模块，统一构建与版本管理。
4. **[#15870](https://github.com/QwenLM/qwen-code/pull/15870)** `refactor(managed)`：移除持久化的公开消息快照。
5. **[#15684](https://github.com/QwenLM/qwen-code/pull/15684)** `feat(managed-agent)`：提供仅运维可用的方式，把已注册的外部存储别名物化为可发现、带显式委派 owner 的 Workspace，仅写元数据与幂等回执。
6. **[#15881](https://github.com/QwenLM/qwen-code/pull/15881)** `test(managed-agent)`：把 B3a 恢复矩阵行打包为 `hosted-failover-e2e` 的故障臂，覆盖“完成后、提交前”崩溃窗口。
7. **[#15880](https://github.com/QwenLM/qwen-code/pull/15880)** `feat(review)`：PR 审查无 Critical 发现且已认证阅读范围时，自动在同一工作区启动深度验证会话。
8. **[#11486](https://github.com/QwenLM/qwen-code/pull/11486)** `feat(cli)`：新增 `qwen update --target-version <version>`，显式指定版本跳过 npm 发现，走既有下载与校验流程。
9. **[#11854](https://github.com/QwenLM/qwen-code/pull/11854)** `feat`：新增对齐 Codex 的 `tools.mode` 枚举（`direct`/`code_mode`/`code_mode_only`），`code_mode` 下普通工具仍可直接调用，同时暴露隔离的 `exec` JavaScript 工具。
10. **[#15634](https://github.com/QwenLM/qwen-code/pull/15634)** `feat(channels)`：新增第四种 `dispatchMode: inject`，Agent 工作中到达的消息进入当前轮次的 mid-turn 队列，在下一个工具批次被读取。

其他：#15274（Maven 缓存写回失败时保留测试结果）、#15060（web-shell 共享会话视图重置状态）、#15843（CLI 行预算接线与多选项布局测试覆盖）、#15825（解除 Managed runtime 0.26.3 回填阻塞，已关闭）、#15878（Managed Agent 升级阶段 SIGKILL 残留文档，已关闭）。

## 5. 功能需求趋势

- **IDE 集成**：vscode-ide-companion 的远程 webview（Remote-SSH/WSL、IPv6 CSP、转发端口）是 roadmap/ide-integration 下的持续缺口（#12059）。
- **Web Shell / Desktop 体验**：会话总览与分屏快捷键、无工作区会话展示、磁盘恢复后的分支可用性、多语种本地化（#13175、#11878、#13782、#13391），以及 Desktop 在 macOS 上派生的 daemon shell PATH 扩展（#12690）。
- **发布与 CI 基础设施**：ECS runner 预留、build/publish 拆分、夜间 macOS 验证、发布后扇出提速（#15461、#15465、#15783），是当前最集中的工程投入方向。
- **工具调用模式**：hybrid code mode 与 channel 消息注入（#11854、#15634）显示对更灵活的多轮 Agent 交互形态的探索。
- **本地/自定义模型配置**：`contextWindowSize` 被移除（#15855）表明自定义 OpenAI 兼容端点的配置可靠性仍需打磨。

## 6. 开发者关注点

- **CI 噪音与归因成本**：主 CI 失败、无测试识别、无关 PR 上的确定性冒烟超时反复出现，开发者明确抱怨“每个 PR 都要付出重新归因的代价”（#15861、#14724、#14796、#15739）。
- **发布链路时延**：托管 runner 排队与发布后处理耗时是高频痛点，PR 与 Issue 形成合力在推进（#15832、#15854、#15461、#15465）。
- **安全审计**：依赖 CVE 审计任务连续失败，需要人工确认是否存在新高危漏洞（#13078）。
- **配置被静默丢弃**：`contextWindowSize` 自动消失与“报告被静默丢弃的配置项”修复（#15855、#15794）指向同一类信任问题。
- **跨平台验证节奏**：macOS/Darwin 验证是否收紧为夜间运行仍在讨论（need-discussion，#15783）。

---

*今日所有条目的发布日期均为 2026-10-29。根据提供的数据，Release 说明大多不包含具体作者信息，此处仅列出可以确认的作者。*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI 社区动态日报 — 2026-10-29

> 数据来源：github.com/Hmbown/DeepSeek-TUI（Issue/PR 链接指向 codewhale-hq/Codewhale 仓库）

## 1. 今日速览

今日无新版本发布，社区焦点集中在 **v0.10.3 的稳定性与本地化收尾**：会话历史丢失（#7095）、自动压缩阈值误触发（#7133）、中文输入法适配（#2323）等会话层问题热度最高。PR 侧以 TUI 细节修复为主，包括 vim 模式按键、推理流式渲染溢出、远程控制失败诊断保留等，另有多条讨论围绕 token 成本与 provider 配置策略展开。

## 2. 版本发布

过去 24 小时无新 Release。

## 3. 社区热点 Issues

1. **[#7095](https://github.com/codewhale-hq/Codewhale/issues/7095) 长任务执行中会话历史丢失**（bug · 10 条评论）
   今日评论最多的 Issue。长任务执行时输入区出现异常错位内容，随后对话历史丢失。直接影响核心会话可靠性，应优先排查。

2. **[#5587](https://github.com/codewhale-hq/Codewhale/issues/5587) 清理 crates/tui 中的 25 处模块级 blanket allow 与剩余 `allow(dead_code)`**（cleanup · 9 条评论）
   长期推进的代码卫生任务，附带 0.10.3 状态跟踪，已推进到新提交。反映维护者在发版前收紧死代码与告警的策略。

3. **[#6969](https://github.com/codewhale-hq/Codewhale/issues/6969) 延迟工具集淘汰在 provider 提示缓存下经济上净负收益**（6 条评论）
   指出 `ToolActivationCache`（8 个名称 / 16 KiB）"成本盲"，淘汰会触发全前缀重预填充与写入溢价，并留下永久过期的恢复说明。属于深度成本建模讨论，对重度用户 token 开销影响显著。

4. **[#2323](https://github.com/codewhale-hq/Codewhale/issues/2323) 未适配中文输入法**（bug · localization · windows · 5 条评论 · 👍1）
   拼音输入时不隐藏提示文字，且在配置/危险操作确认界面存在输入异常。是本地化方向呼声最高的老 Issue（5 月创建至今仍未关闭）。

5. **[#1097](https://github.com/codewhale-hq/Codewhale/issues/1097) FreeBSD 支持（npm 二进制 / pkg）**（packaging · 4 条评论）
   用户报告 `npm install -g deepseek-tui` 在 FreeBSD 上失败。平台覆盖缺口，属长尾但有明确复现路径的打包需求。

6. **[#6991](https://github.com/codewhale-hq/Codewhale/issues/6991) 显著降低 token 消耗的新思路**（enhancement · 4 条评论）
   与 #6969 同作者，聚焦上下文开销削减。与成本类讨论形成一组，说明 token 经济性是当前社区的核心关切之一。

7. **[#6970](https://github.com/codewhale-hq/Codewhale/issues/6970) `/undo` 命令的严重 bug**（bug · windows · 4 条评论）
   TUI 提示文件已回滚，但对话状态未同步回滚。数据一致性类缺陷，易造成用户误判文件状态。

8. **[#7071](https://github.com/codewhale-hq/Codewhale/issues/7071) zh-Hans 及所有非英文 locale 存在硬编码英文串**（localization · 3 条评论）
   点名 `/undo` 提示、`/diff` 标题、审批与 plan-handoff 界面、`/color` 提示等。首个本地化切片已合入 main，属可跟踪的逐项清理清单。

9. **[#5133→#7133](https://github.com/codewhale-hq/Codewhale/issues/7133) 自动压缩上下文异常**（bug · needs-triage · 2 条评论）
   阈值设为 80%，实际约 40% 就触发压缩。影响长会话可用性与成本预期，且为 10-28 新提交，需尽快定性。

10. **[#7085](https://github.com/codewhale-hq/Codewhale/issues/7085) 将 Runcrate 加为内置 provider**（providers · 2 条评论）
    请求接入托管开源模型的聚合服务（列举 DeepSeek V4.1 Flash、GLM-5.3、Qwen3.8 Flash 等）。体现社区对"多 provider 内置化"的持续诉求。

> 另注：今日关闭的 #7123（思维链显示溢出）与 #7118（任务与 CLI 任务跟踪器不同步）、#7120（`/rc` 失败原因仅存于 12 秒提示）均已有对应 PR，见下节。

## 4. 重要 PR 进展

1. **[#7143](https://github.com/codewhale-hq/Codewhale/pull/7143) fix(tui)：删除附件或在 vim 中删除时解除已召回历史的绑定**（OPEN）
   修复 Up 召回历史后编辑未"脱离"，导致下一次 Up/Down 静默丢弃编辑内容的问题。

2. **[#7141](https://github.com/codewhale-hq/Codewhale/pull/7141) docs(i18n)：翻译 review-bot 表格行并刷新 README 标记**（CLOSED）
   补齐 README 中 `codewhale review --pr N` 一行改动后遗留的 18 个翻译文件缺口。

3. **[#7121](https://github.com/codewhale-hq/Codewhale/pull/7121) fix(commands)：本地化 `/undo` 反馈**（CLOSED）
   将 `/undo` 结果消息接入 presentation 层，覆盖 15 种语言，推进 #7071 的剩余面。

4. **[#7140](https://github.com/codewhale-hq/Codewhale/pull/7140) fix(lsp)：以 `typescriptreact` 语言 ID 打开 TSX 文档**（CLOSED）
   保留现有 TypeScript server 传输与缓存，仅修正 `didOpen` 的语言 ID。

5. **[#7127](https://github.com/codewhale-hq/Codewhale/pull/7127) fix(tui)：保留远程控制启动失败诊断**（CLOSED，对应 #7120）
   修复同步 `/rc` 拒绝后 controller 停留在 `Off`、失败原因随 toast 消失的问题；异步失败也纳入 TUI 日志。

6. **[#7130](https://github.com/codewhale-hq/Codewhale/pull/7130) fix(tui)：vim Normal 模式接收 `G` 等 Shift 组合键**（CLOSED）
   crossterm 以 SHIFT 上报大写字母，此前 `G` 被键入草稿而非跳到末尾。

7. **[#7126](https://github.com/codewhale-hq/Codewhale/pull/7126) fix(tui)：持键交给 vim Normal 模式而非直接输入**（CLOSED）
   覆盖 Windows 终端及 `TERM_PROGRAM` 未识别、无法可靠送达 bracketed paste 的场景。

8. **[#7139](https://github.com/codewhale-hq/Codewhale/pull/7139) fix(workflow-js)：生成 Windows GNU LLVM 绑定**（OPEN）
   修复 `x86_64-pc-windows-gnullvm` 目标缺失 rquickjs-sys 绑定、导致默认 workflow-js 构建失败。

9. **[#7138](https://github.com/codewhale-hq/Codewhale/pull/7138) feat(tui)：观测后台引擎运行完成**（OPEN）
   为两个引擎 spawn 工厂提供 cancel-safe 的完成观测，服务于 embedder 与现有 exec 消费方。

10. **[#7137](https://github.com/codewhale-hq/Codewhale/pull/7137) / [#7134](https://github.com/codewhale-hq/Codewhale/pull/7134) fix(tui)：将流式推理增量路由到推理卡片**（CLOSED，修复 #7123）
    修复折叠态推理文本溢出卡片、展开态单句被拆成"卡片内半句 + 卡片外普通正文"的渲染错位。

> 另：#7135 将 `<turn_meta>` 块排除出 `/tree` 与 `/export`；#7122 在信号退出前刷新队列中的会话持久化；#7132 修正 vim `$` 停在行尾后一字符；#7128 为 `runtime_api.rs` 补充注释，说明社区 VS Code 扩展（`HengQuWorld/CodeWhale-VSCode`）依赖该 API。

## 5. 功能需求趋势

- **本地化与输入法适配**：#2323（中文输入法）、#7071（硬编码英文串）、#7121（`/undo` 本地化）构成一条明确主线，zh-Hans 是首要目标，并已建立"逐界面切片合入"的推进方式。
- **Token 成本与上下文经济性**：#6969（工具集淘汰成本建模）、#6991（降低 token 消耗）、#7133（压缩阈值误触发）指向同一诉求——让上下文预算可预测、可配置。
- **Provider 抽象与多源接入**：#7085（内置 Runcrate）、#5092（Responses API 行为按 provider 配置而非硬编码）、#5093（将 Responses 方言策略抽到语言中立的合规测试框架后），显示从"加 provider"转向"去硬编码、做 provider profile"。
- **打包与平台覆盖**：#1097（FreeBSD）、#7091（0.10.3 卸载完整且可验证，被列为发版验收项）、#7139（Windows GNU LLVM 绑定）说明跨平台安装/卸载链路正在被系统性补齐。
- **Skills 可控性**：#7073（环境索引描述截断 400 字符且无配置开关、对模型无信号）、#7066（内置 skills 安装控制、按 skill 禁用、explicit-only）体现对 skills 从"能用"到"可治理"的需求。
- **可观测性与 IDE 集成**：#7120（失败原因需留存）、#7118（任务与 CLI tracker 同步）、#7128（Runtime API 是 VS Code 扩展唯一入口）表明 TUI 与外部工具链的状态一致性正成为关注点。

## 6. 开发者关注点

- **会话状态一致性是最大痛点**：#7095 历史丢失、#6970 `/undo` 提示与对话状态脱节、#7118 任务与 tracker 不同步、#7122 信号退出时持久化未 flush——四条独立线索指向同一类问题：TUI 展示的状态与实际持久化状态不同步。
- **成本模型需要"感知价格"**：延迟工具集淘汰在提示缓存下反而更贵，且"全前缀重预填充 + 写入溢价"未被预算逻辑考虑；压缩阈值 80% 却在 40% 触发，进一步削弱用户对成本的可控感。
- **非英文用户在基础交互层受阻**：输入法候选与提示文字冲突、多个核心界面仍为英文，属于上手即可感知的体验缺口。
- **发版验收条目被显式追踪**：0.10.3 的 dead-code sweep、卸载完整性、本地化切片均以状态注释形式挂在 Issue 中，说明维护者在为发版建立可核对清单。
- **Windows 与终端差异是缺陷高发区**：vim 模式按键（#7130、#7126、#7132）、`/undo`（#6970）、中文输入法（#2323）、Windows GNU LLVM 绑定（#7139）均与平台/终端按键上报差异相关。
- **贡献门槛与规范**：多数 PR 带 `contribution-gate` 标签，且有专门的 README review-bot 文档同步工作（#7141），新贡献者需注意翻译文件与文档联动要求。

</details>

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar-personal) 自动生成。*