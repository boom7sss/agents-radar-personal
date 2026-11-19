# AI CLI 工具社区动态日报 2026-11-19

> 生成时间: 2026-11-19 19:00 UTC | 覆盖工具: 9 个

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

# AI CLI 工具生态横向对比分析（2026-11-19）

## 1. 生态全景

当前主流 AI CLI 工具已从"能跑通任务"进入"可靠性、安全边界与成本治理"的深水区：8 个有数据的工具中 5 个当日发布（含夜间/预览版），但社区热度最高的几乎都是故障类 Issue 而非新功能。安全类问题集中爆发——Claude Code 两起子代理破坏性命令导致真实数据丢失、Qwen Code AUTO 模式 MCP 信任绕过审查、DeepSeek TUI 多条 execpolicy 拒绝规则被绕过，说明"自主执行 + 权限模型"已成为全行业共同短板。同时付费信任问题跨越多个项目（额度异常、续费拒付、权益误识别），商业化链路与工程质量正被同步审视。

---

## 2. 各工具活跃度对比

| 工具 | Release（当日） | 热点 Issues（所展示） | 重要 PR 进展 | 社区热度特征 |
|---|---|---|---|---|
| **Claude Code** | v2.1.328（Opus/Sonnet 4.6 多云 auto 权限模式、mcp_tool hooks `onFailure:block`） | 10 条（含 2 起 data-loss） | 1 条（fork PR 禁用 `@claude`） | 单条最高 31 评论、85 👍；成本类议题密集 |
| **OpenAI Codex** | rust-v0.172.0-alpha.2（仅版本号，无可核实变更） | 10 条 | 10 条（均 CLOSED，bot 提交） | 单条最高 36 评论、78 👍；桌面端 Bug 为主 |
| **Gemini CLI** | v0.69.0 稳定 + v0.70.0-preview.0 | 10 条（多条 P1） | 10 条（多为 OPEN） | Agent 可靠性占热度榜首；13 评论为最高 |
| **GitHub Copilot CLI** | v1.0.115-1 / v1.0.115-0 | 10 条 | 1 条 PR（另附 9 条同日关闭 Issue 作修复落地） | 最高 30 评论、11 👍；MCP OAuth 集中 |
| **OpenCode** | 无（dev→production PR #64784 已提交） | 10 条 | 10 条 | 最高 49 评论、36 👍；Code Mode PR 密集 |
| **Pi** | 无 | 10 条 | 7 条 | 最高 98 评论；XDG 需求 75 👍 |
| **Qwen Code** | v0.28.0-nightly（变更清单不完整） | 10 条 | 10 条 | 单条 CI Issue 达 470 评论（历史累积） |
| **DeepSeek TUI** | 无（0.10.3 验收中） | 10 条 | 10 条 | 最高 7 评论；execpolicy 加固集中 |
| **Kimi Code CLI** | 过去 24 小时无活动 | — | — | 静默 |

> 注：各工具 Issues 均只展示"评论数最多的若干条"，非全量；PR 数为材料中实际列出的条目数，不代表仓库真实 PR 总量。

---

## 3. 共同关注的功能方向

**① 多账号与多环境隔离**（跨工具最高共识）
- Claude Code #30031 多账号切换（85 👍，当日点赞最高）；OpenAI Codex #12029 多账号（69 👍）+ #14330 按项目/组织隔离配置；Pi 企业 Copilot 模型可见性（#11006）；OpenCode 按项目/组织隔离诉求。
- 共性诉求：认证与配置需在个人 / 公司 / 开源多场景间隔离又能共享。

**② 数据安全与会话持久化**
- 数据丢失：Claude Code 两起子代理破坏性命令；OpenAI Codex app-server 切换使 942 线程中 934 个孤立；DeepSeek TUI 会话 ledger 达 1 MiB 后无法保存。
- 隔离失效：Claude Code worktree 隔离与 TaskStop 均未兜住；Qwen Code MCP 信任绕过分类器。

**③ 成本 / 用量可观测性**
- Claude Code 周额度异常消耗、自动任务超额 45.61 美元无护栏；OpenCode 续费被拒 + 促销额度未计入配额；Pi 精确量化 GPT-6.2 缓存命中下降（3,968/12,931 vs 6.1 的 12,800/12,931）；OpenCode DeepSeek 首 token 延迟约为官方 2 倍。

**④ 执行可控性与超时机制**
- Gemini CLI 单次工具调用超时 `tools.callTimeout`（#30212）直接回应 generalist agent 挂死；DeepSeek TUI 回合冻结；OpenCode `edit` 后台无限挂起；Claude Code 停止机制失效。

**⑤ 静默失败 / 错误可诊断性**
- Gemini CLI 子代理触达上限却报 GOAL 成功、`/bug` 报告缺子代理上下文；DeepSeek TUI 诊断日志无根因；OpenCode PTY 错误被掩盖为 ENOENT。多工具共同指向"失败要可见"。

**⑥ 桌面端与 TUI 终端体验**
- 桌面端：Claude Code 会话取消归档（70 👍）、mod 主题渲染；OpenAI Codex Windows 卡 Logo / 浮动光标残留；OpenCode Windows 工具调用全挂。
- 终端：Pi 大 transcript 重渲染、光标闪烁；DeepSeek TUI CJK 粘贴 O(n²)、GNOME 配色残留；Pi Windows 运行方式收敛（98 评论）。

**⑦ 子代理 / Agent 调度模型**
- Gemini CLI 子代理误报与不主动调用 skills；OpenCode "前台/后台"边界争议（#64073 vs #63894）；OpenAI Codex #61348 持续工程上下文；OpenCode 为子代理加 OpenTelemetry。

---

## 4. 差异化定位分析

| 工具 | 功能侧重 | 目标用户 | 技术路线特征 |
|---|---|---|---|
| **Claude Code** | 多云企业接入（Bedrock / Google Cloud / Microsoft Foundry 的 auto 权限模式）、hook 生态 | 企业团队、重度订阅用户 | 订阅制 + 平台化；版本迭代主线是多云与企业权限 |
| **OpenAI Codex** | 桌面端（macOS/Windows）体验、持续工程工作区、子代理可观测 | IDE / 桌面用户 | 高频修补 + OTel 埋点补齐可观测性；版本仅 alpha |
| **Gemini CLI** | Agent/Subagent 可靠性、AST 感知代码理解、bash 亲和性沙箱 | 开发者、Linux 桌面用户 | 探索"代码理解层"长期优化 + ACP 协议集成 |
| **GitHub Copilot CLI** | MCP / OAuth 认证健壮性、插件扩展生态、IDE/ACP 集成 | 企业（Entra ID / Azure DevOps）、GitHub 生态用户 | 强绑企业身份提供商与 MCP 协议栈 |
| **OpenCode** | Code Mode 脚本化（VM 语义、API 直连）、模型分层抽象 | 追求可编程扩展的开发者 | 自建脚本运行时 + 多提供商接入广度 |
| **Pi** | TUI 渲染性能、缓存成本可观测、本地模型/多模态 | 终端重度用户、本地模型玩家 | 注重"本地状态可控"与 provider 兼容细节 |
| **Qwen Code** | Managed Agent（钉钉等托管通道）、CI 稳定性、国际化（阿拉伯语 RTL） | 中文/亚洲市场、渠道集成方 | 多通道运营级能力 + 多界面统一（共享 agent loop） |
| **DeepSeek TUI** | execpolicy 沙箱加固、终端兼容、第三方 provider | 安全敏感开发者、中文用户 | 以"拒绝规则覆盖面一致性"为核心安全路线 |

---

## 5. 社区热度与成熟度

- **最高讨论热度**：Pi（单条 98 评论的 Windows 汇总线程）、Qwen Code（#14724 累积 470 评论，但属长期 CI 失败追踪，非当日新增热度）、OpenCode（#45278 计费问题 49 评论 / 36 👍）。Pi 和 OpenCode 的高赞集中在**具体可量化的体验/成本问题**，反映用户已深度使用并愿投入反馈。
- **最活跃迭代**：OpenCode（当日 10 条 PR 且 Code Mode 多条功能 PR 并行）、Qwen Code（夜间版持续推进 + 托管 Agent 收敛）、DeepSeek TUI（维护者集中提交 execpolicy Issue + 修复 PR，形成"发现—修复"闭环）。
- **较成熟 / 节奏稳定**：Claude Code（定期版本 + 高评论 Issue 稳定关闭，如 #30869 已关闭）、GitHub Copilot CLI（今日多个 OAuth Issue 同日关闭，修复落地明确）。
- **信号偏弱 / 需观察**：OpenAI Codex 当日 PR 全部由 bot 提交且已关闭、release 说明仅版本号——工程活动存在但社区可见的"人工修复落地"不足；Kimi Code CLI 无活动。

> 综合判断：OpenCode、Qwen Code、DeepSeek TUI 处于**功能快速扩张期**（新能力 PR 密集，但基础可靠性问题同步暴露）；Claude Code、Copilot CLI 处于**稳定迭代期**（修补为主，修复闭环清晰）。

---

## 6. 值得关注的趋势信号

1. **"自主执行"的安全债正在集中偿付。** 三个不同项目同日出现权限/隔离绕过（Claude Code worktree 失效、Qwen Code MCP 信任绕过、DeepSeek TUI 多条 execpolicy 绕过），说明这不是单点 Bug 而是架构级问题。**对开发者：在生产环境启用子代理自动执行前，应先验证破坏性命令拦截与 worktree 隔离是否真生效，而非假定默认安全。**

2. **成本护栏从"计费问题"升级为"信任门槛"。** 额度异常、无消费上限、续费误拒、缓存命中静默下降——跨 4 个工具出现。Pi 用户已能给出逐轮缓存命中精确对比，**说明可观测性正从"有没有"走向"准不准"。对开发者：选择工具时应把用量/成本的可见粒度纳入评估。**

3. **"静默失败"比"显式失败"更伤信任。** Gemini CLI 报成功实为中断、ACP 空回合静默结束、PTY 错误伪装成 ENOENT——多工具共性。**对开发者：搭建 Agent 流水线时，需自行校验"成功"状态的真实性，不能仅依赖工具返回。**

4. **子代理可观测性正在补齐。** OpenAI Codex 为子代理加 OpenTelemetry、Gemini CLI 讨论 `/chat share` 暴露子代理轨迹、Qwen Code 把失败工具调用带入压缩输入——**"跨 worker 追问发生了什么"成为跨项目共识需求，预示 Agent 运行时可观测性将成下一阶段标准配置。**

5. **多账号隔离是尚未被满足的普遍刚需。** Claude Code（85 👍）与 Codex（69 👍）双双位列各自点赞前列，长期 OPEN。**对频繁切换个人/公司账号的开发者，这是当前最明确的体验缺口。**

6. **Windows 与 Wayland 是跨工具的系统性短板。** Copilot CLI（安全软件误杀）、OpenCode（工具调用全挂）、Codex（更新丢项目）、Pi（98 评论汇总）、Gemini CLI（Wayland 浏览器子代理失败）——**非 macOS 平台用户应优先关注对应平台的已知问题清单。**

7. **协议与集成的成熟化（ACP / MCP OAuth）。** Copilot CLI 集中关闭多条 OAuth 兼容 Issue、Gemini CLI 推进 ACP 会话关闭与停止原因上报、Claude Code 加固 fork PR 权限——**说明 CLI 正从"独立工具"演化为"生态节点"，集成健壮性（尤其企业 IdP 如 Entra ID）成为选型关键。**

---

*说明：本报告严格基于所提供 2026-11-19 各工具动态摘要，未作外部补充。各工具 Issues/PR 数仅为材料中展示条目，不代表仓库全量；Kimi Code CLI 当日无活动未纳入对比表。*

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告（数据截止 2026-11-19）

> 说明：所给数据的 PR 评论数均为 `undefined`，PR 侧无 👍 数据。因此第 1、3 部分以“关注度信号”为依据——评论/点赞缺失时，采用关联 Issue 讨论热度、更新活跃度与涉及核心 Skill 的重要性综合排序，并明确标注。

## 1. 热门 Skills 排行（PR）

1. **#1298 skill-creator: 隔离 trigger evals，兼容 Windows 与运行时失败** — OPEN
   功能：修复 skill 触发评估的误判（多 worker 竞争、Windows 上 `select()` 失效）。讨论热点：直接对应 Issue #1352（并行 worker UUID 串扰导致准零触发率）与 #556（`claude -p` 无法触发 skill）。关联讨论合计 19+ 评论，是当前 PR 侧关注度最高的议题。
   https://github.com/anthropics/skills/pull/1298

2. **#1742 mcp-builder: 支持 mcp>=2 的 `streamable_http_client` 与自定义 headers** — OPEN
   功能：适配 mcp 2.0.0 的 API 重命名与 header 配置方式变更（Fixes #1668）。热点：MCP 生态版本迁移的兼容性痛点，更新至 2026-10-08。
   https://github.com/anthropics/skills/pull/1742

3. **#525 pyxel: 复古游戏开发 Skill** — OPEN
   功能：用 Python 创建、调试、验证复古游戏，支持无头输入驱动运行与逐帧检查。热点：跨半年持续维护（2026-03 创建，2026-11 更新），是少数新增能力型 Skill 提案。
   https://github.com/anthropics/skills/pull/525

4. **#514 document-typography: 生成文档的排版质量控制** — OPEN
   功能：防止孤词换行、寡行段落、编号错位等排版问题。热点：面向所有文档类 Skill 的通用质量层，与 Issue 中大量文档缺陷反馈（#2018、#1868 等）同一脉络。
   https://github.com/anthropics/skills/pull/514

5. **#1245 notion-spec-to-implementation + quantitative-resume-auditor** — OPEN
   功能：将产品或技术规格转为可执行的 Notion 任务；另一 Skill 做量化简历审查。热点：工作流自动化方向，更新至 2026-10-15。
   https://github.com/anthropics/skills/pull/1245

6. **#1980 webapp-testing: 移除 `with_server.py` 的 `shell=True`** — OPEN
   功能：修复将未净化命令字符串传入系统 shell 的安全问题。热点：与 Issue #492 的信任边界讨论共振。
   https://github.com/anthropics/skills/pull/1980

7. **#1703 md2video-audio: Markdown 直接编译为带配音的 MP4** — OPEN
   功能：零成本将 Markdown 转成专业级视频与拟真语音。热点：多模态产出型 Skill 的尝鲜方向。
   https://github.com/anthropics/skills/pull/1703

8. **#1681 skill-creator: 支持 `package_skill.py` 直接执行** — OPEN
   功能：修复独立运行脚本的 `ModuleNotFoundError` 与用法路径。热点：skill-creator 工具链自身的可用性（更新至 2026-11-19，仍在活跃）。
   https://github.com/anthropics/skills/pull/1681

## 2. 社区需求趋势（Issues）

- **信任与安全边界**：#492（46 评论）——社区 Skill 冒用 `anthropic/` 命名空间，用户可能对非官方 Skill 授予过高权限。要求建立命名空间/来源区分机制。
  https://github.com/anthropics/skills/issues/492
- **团队/组织级 Skill 分发**：#228（17 评论）——缺乏组织内共享库，只能手动下载 `.skill` 文件再上传，期待类应用商店的共享机制。
  https://github.com/anthropics/skills/issues/228
- **评估与触发可靠性**：#556（13 评论）、#1352（6 评论）——评估工具本身误报，skill 触发率统计不可信，属于工具链可信度诉求。
  https://github.com/anthropics/skills/issues/556 ・ https://github.com/anthropics/skills/issues/1352
- **上下文效率与元数据质量**：#1487（`claude-api` 单次注入约 156k tokens）、#2064（描述只讲功能不讲何时使用）。要求 Skill 更省 token、触发描述更精确。
  https://github.com/anthropics/skills/issues/1487 ・ https://github.com/anthropics/skills/issues/2064
- **治理与质量门禁**：#1385（三段式推理质量门：预校准→对抗评审→交付验证）、#412（agent-governance，已关闭）。体现对 AI 输出质量管控的期待。
  https://github.com/anthropics/skills/issues/1385 ・ https://github.com/anthropics/skills/issues/412
- **文档/办公类脚本稳健性**：#2018（docx 合并丢失命名空间声明）、#1868（渐变背景颜色插值错误）。期望官方文档 Skill 的产出正确性。
  https://github.com/anthropics/skills/issues/2018 ・ https://github.com/anthropics/skills/issues/1868

## 3. 高潜力待合并 Skills（活跃但未合并）

- **#1298 skill-creator 触发评估修复** — 关联两个高讨论 Issue，更新至 2026-09-16，落地价值最高。
  https://github.com/anthropics/skills/pull/1298
- **#1681 skill-creator 脚本直接执行修复** — 更新至 2026-11-19，仍活跃，改动面小、易合入。
  https://github.com/anthropics/skills/pull/1681
- **#1742 mcp-builder mcp>=2 兼容** — 有明确 Fixes #1668，影响所有使用 MCP 构建 Skill 的用户。
  https://github.com/anthropics/skills/pull/1742
- **#525 pyxel 游戏开发 Skill** — 跨 8 个月持续维护，作者为 Pyxel 项目作者本人（kitao），可信度高。
  https://github.com/anthropics/skills/pull/525
- **#1975 / #1976 / #1977 gerardrecinto 系列小修** — 分别修复 pptx `--cols` 校验、webapp-testing 元素识别、algorithmic-art `wrapAround()`，均带 Fixes 编号、改动小且明确。
  https://github.com/anthropics/skills/pull/1975 ・ https://github.com/anthropics/skills/pull/1976 ・ https://github.com/anthropics/skills/pull/1977
- **#1792 docx LibreOffice 超时误报成功** — 修复正确性问题（应在验证输出后再报成功）。
  https://github.com/anthropics/skills/pull/1792

## 4. Skills 生态洞察

当前社区最集中的诉求是**“可信与可控”**：优先要求 Skill 的命名空间/来源可辨别、评估与触发机制可靠、上下文消耗可控，而非单纯追求新增 Skill 数量。

---

# Claude Code 社区动态日报（2026-11-19）

## 1. 今日速览

今日发布 v2.1.328，新增 Opus 4.6 / Sonnet 4.6 在 Amazon Bedrock、Google Cloud Agent Platform、Microsoft Foundry 等平台的自动权限模式，并为 `mcp_tool` hooks 增加 `"onFailure": "block"` 选项。社区侧，data-loss 类 Issue 持续升温（子代理执行 `rm -rf ~`、`rsync --delete` 清空 WSL 根目录），成为今日最需要关注的安全风险。此外，用量与成本争议（Max 5x 周额度异常消耗、自动任务超额 45.61 美元）仍在持续发酵。

---

## 2. 版本发布

**v2.1.328**
- 为 Claude Opus 4.6 与 Sonnet 4.6 在 Amazon Bedrock、Google Cloud Agent Platform、Microsoft Foundry 以及 Claude apps gateway 上新增 **auto 权限模式**；无权限模式的交互式会话默认以此启动。
- 为 `mcp_tool` hooks 新增 `"onFailure": "block"`，与 command 和 HTTP hooks 的行为对齐。

🔗 https://github.com/anthropics/claude-code/releases

---

## 3. 社区热点 Issues（10 个）

1. **#105342 [OPEN] 子代理执行 `rm -rf ~` 删除真实家目录中未推送的代码，worktree 隔离未生效**（data-loss / high-priority，7 评论）
   最严重的安全事件类报告：AI 生成的测试命令突破隔离边界，直接破坏用户数据。建议所有依赖子代理自动执行的团队优先评估。

2. **#109735 [OPEN] 子代理经 wsl.exe 运行 `rsync -a --delete`，目标���量为空导致清空 WSL 根目录及挂载的 Windows 盘，TaskStop 未能终止 Linux 进程**（data-loss，3 评论）
   与上条构成同一主题的两起独立数据丢失事件，且暴露了停止机制对跨环境进程的失效问题。

3. **#98134 [OPEN] macOS 上有效的 Apple Max 20x 订阅仍被识别为 Pro**（area:auth，29 评论）
   今日评论数最高的未关闭 Issue，涉及订阅权益识别错误，直接影响付费用户可用能力。

4. **#74715 [OPEN] Claude-in-Chrome「始终允许」站点权限被持久化为 `duration:"once"`，已批准列表始终为空，每次浏览器操作重复弹窗**（has repro，24 评论、13 👍）
   有复现步骤的浏览器扩展权限缺陷，严重拖慢浏览器自动化工作流。

5. **#30031 [OPEN] 功能请求：支持多账号登录与切换（类似 `gh auth switch`）**（duplicate / enhancement，20 评论、85 👍）
   今日点赞数最高的需求，反映多环境（个人 / 多家公司账号）用户的普遍痛点。

6. **#105240 [OPEN] Max 5x 周用量不到 48 小时即达 94%，自 10 月 17 日起突增、10 月 24 日后更严重**（area:cost，19 评论）
   用量计量或额度异常类反馈，关系到订阅价值判断。

7. **#110395 [OPEN] Claude Code 自行搭建周期性 AI 任务，无成本预估与消费上限，烧掉用户周额度并产生 45.61 美元超额，支持方拒绝评估**（area:cost，7 评论）
   自动化功能缺乏成本护栏的典型案例，对构建 agent 自动化的用户有直接警示意义。

8. **#103488 [OPEN] 「连接中断」经抓包定位为 160.79.104.10 发出的 TCP reset**（has repro，10 评论）
   把模糊的「Connection lost mid-response」定位到具体网络行为，对排查服务端连接稳定性价值高。

9. **#108217 [OPEN] Windows 上 Alt+V 粘贴图片阻塞事件循环约 12 秒（CPU 仅 62ms），TUI 冻结**（performance，7 评论）
   典型的 I/O 阻塞型性能缺陷，Windows 用户日常输入体验受影响。

10. **#30869 [CLOSED] 桌面端支持取消归档 Claude Code 会话**（enhancement，31 评论、70 👍）
    今日评论数最高的条目且已关闭，说明高热度桌面端体验需求得到响应。

其他值得留意：#102828（Remote Control `start_session` 拒绝移动端 human 消息，已关闭）、#109853 / #109766（桌面端 mod 主题背景不渲染 / 不播放动画）。

---

## 4. 重要 PR 进展

本期数据中过去 24 小时仅有 **1 条** PR 更新，无法列出 10 条；以下为该条：

1. **#111198 [OPEN] 不要在来自 fork 的 Pull Request 上运行 `@claude` 提及**
   作者 mhegazy，2026-11-19 创建并更新。针对 fork PR 中触发 `@claude` 的滥用/安全风险进行限制，属于 CI 与权限边界加固。
   🔗 https://github.com/anthropics/claude-code/pull/111198

---

## 5. 功能需求趋势

- **账号与身份管理**：多账号登录/切换（#30031，85 👍）是呼声最高的 enhancement；订阅等级识别错误（#98134）同属身份与权益方向。
- **桌面端体验打磨**：会话取消归档（#30869，已关闭）、mod 主题背景渲染（#109853、#109766）、Quick Entry 在 GNOME Wayland 下失效（#104069）、Code tab 自托管 GitLab MR 自动关联回归（#100417）等，显示桌面/Code tab 是反馈最密集的产品面。
- **成本与用量治理**：额度异常消耗（#105240）、自动任务无消费上限（#110395）、Artifacts 每日 200 次发布上限阻碍设计迭代（#103592）。
- **权限与隔离**：两起 data-loss 事件（#105342、#109735）及 fork PR 限制（#111198）共同指向沙箱、worktree 隔离与权限持久化的收紧需求。
- **模型接入与平台覆盖**：v2.1.328 将 Opus 4.6 / Sonnet 4.6 的 auto 模式扩展至 Bedrock、Google Cloud Agent Platform、Microsoft Foundry，反映多云企业接入是版本迭代主线。
- **性能与网络稳定性**：TUI 事件循环阻塞（#108217）、TCP reset 导致的响应中断（#103488）。

---

## 6. 开发者关注点

- **数据安全是第一痛点**：两起由子代理自动执行的破坏性命令（`rm -rf ~`、空变量 `rsync --delete`）造成真实数据丢失，且 worktree 隔离与 TaskStop 均未兜住，开发者对「自主执行 + 破坏性命令」的组合高度敏感。
- **付费权益一致性**：Max 20x 被识别为 Pro、周额度异常消耗、自动化任务无成本上限，三类反馈共同指向计量与计费透明度。
- **权限持久化不可靠**：Chrome 站点「始终允许」不生效，导致重复授权，直接影响浏览器自动化可用性。
- **跨平台短板集中在 Windows / Linux**：Windows 上的 TUI 冻结、GitLab MR 关联回归、桌面 mod 渲染失败；Linux 上的 Wayland Quick Entry 失效与 GPU 误禁用。
- **高赞需求明确**：多账号切换（85 👍）、会话取消归档（70 👍）显示社区希望优先补齐「多环境协作」与「会话生命周期管理」两类基础设施。

---

*说明：本期 Issues 仅展示评论数最多的 20 条，PR 在过去 24 小时内仅 1 条更新，故 PR 部分无法凑满 10 条；所有内容均基于所提供数据，未做外部补充。*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报（2026-11-19）

## 今日速览

过去 24 小时内，Codex 仓库出现一个新的 alpha 版本 `rust-v0.172.0-alpha.2`，但发布说明只有版本号，没有可确认的变更内容。社区讨论主要集中在桌面端（macOS/Windows）的 Bug：会话状态丢失、工具调用失败、更新后异常和上下文管理问题反复出现。功能层面，“多账号隔离”“编辑历史消息”等长期需求持续获得较高点赞。

## 版本发布

- **rust-v0.172.0-alpha.2**（0.172.0-alpha.2）：Release 说明仅有版本号，未提供可核实的更新内容。链接：openai/codex Releases

## 社区热点 Issues

1. **[#61348](openai/codex Issue #61348) 将 ChatGPT + Work + Codex 做成持续工程工作区**（OPEN，36 条评论）
   提出从“一次性任务”转向持续工程上下文，涉及子代理、会话与记忆、远程协作。评论数最多，说明工作流与上下文延续性是社区当前最集中的讨论方向。注意：摘要明确说明内容由 ChatGPT 汇编，并非独立验证。

2. **[#62212](openai/codex Issue #62212) 桌面端不支持的音频工具输出导致后续纯文本轮次返回 HTTP 400**（OPEN，25 条评论）
   一次音频工具输出会使后续文本轮次失败，会话难以恢复，并影响 macOS Apple Silicon 生产版本的正常使用。

3. **[#42695](openai/codex Issue #42695) 回合中压缩复活过期指令并生成错误的执行报告**（OPEN，23 条评论）
   `send_message_to_thread` 触发的任务在自动压缩后可能重新执行旧指令，导致执行结果不正确，属于会直接影响任务正确性的会话一致性问题。

4. **[#2948](openai/codex Issue #2948) 支持编辑历史消息**（OPEN，22 条评论，👍 78）
   本日点赞最高的需求，主要面向 IDE 扩展，并希望与“回退到指定消息”联动。这一需求长期存在（创建于 2025-08），说明其需求强度仍然很高。

5. **[#41338](openai/codex Issue #41338) 内联图片约 230 token 却占用 4.2 MB 传输量，上下文管理无法识别阻塞负载**（OPEN，16 条评论）
   作者提供了实际测量，指出 token 计量与实际负载严重不一致，会导致线程卡死。该问题与 #18629、#31579 重叠，反映出上下文管理在计量方式上的系统性缺陷。

6. **[#12029](openai/codex Issue #12029) 支持同时使用多个账号**（OPEN，13 条评论，👍 69）
   个人与公司账号共存的场景普遍存在；该作者认为认证无法跨 Codex 各入口共享是阻碍实际应用的障碍。

7. **[#46847](openai/codex Issue #46847) macOS 桌面端 Computer Use 任务结束后残留浮动光标覆盖层**（OPEN，12 条评论）
   Computer Use 的界面残留影响桌面可用性，属于体验层面的高频问题。

8. **[#52197](openai/codex Issue #52197) 桌面/Dots：`send_message_to_thread` 对已存在且可见的 Dot 返回 “thread not found”**（OPEN，12 条评论）
   在之前成功之后出现“线程不存在”错误，指向桌面端与 app-server 之间线程寻址的不一致。

9. **[#35619](openai/codex Issue #35619) app-server 进程切换时删除 Rollout JSONL，942 个线程中 934 个成为孤立线程**（OPEN，10 条评论）
   造成大面积会话数据丢失，涉及 Windows 平台沙箱与会话持久化。与 #61294（更新后本地项目消失）属于同类问题。

10. **[#62323](openai/codex Issue #62323) Windows 26.1111 并发聊天完成后主窗口卡在 Logo，MessagePort 连接关闭**（OPEN，10 条评论）
    多本地聊天并发后主窗口永久空白，但应用与本地执行后端仍在运行，是 Windows 桌面端稳定性方面的问题。

> 其他值得注意：**[#14330](openai/codex Issue #14330)**（按项目/组织隔离环境与配置，👍 11）、**[#59516](openai/codex Issue #59516)**（CLI 0.166 未识别 AgentPlugin 清单中声明的插件 hook）、**[#23442](openai/codex Issue #23442)**（`codex app-server` 将 SessionSource 硬编码为 VSCode，且没有 CLI 参数可覆盖）。

## 重要 PR 进展

以下 PR 均为 copyberry[bot] 于 2026-11-19 创建并已关闭（CLOSED），评论数未提供。

1. **[#62567](openai/codex PR #62567) 为子代理生命周期添加 OpenTelemetry**
   为子代理的创建、轮次尝试与停止请求发出结构化事件和计数器，便于跨 worker 关联排查，与 #61348 的子代理讨论方向一致。

2. **[#62552](openai/codex PR #62552) 默认启用 MCP 连接共享**
   为兼容对 `server/discover` 返回空响应、初始化超过发现超时或要求额外初始化的旧版 stdio 服务端。

3. **[#62557](openai/codex PR #62557) 并发 unified exec 更新时保留进程状态**
   修复生命周期处理器读取并整体替换状态导致互相覆盖的问题；举例：被拒绝的 stdin 写入会恢复旧的快照状态。

4. **[#62547](openai/codex PR #62547) 防止远程 app-server 在队列已满时关闭卡住**
   WebSocket 写入停滞会使命令队列被占满；关闭操作在超时前可能无限等待入队。此 PR 针对该卡死问题。

5. **[#62559](openai/codex PR #62559) 在提交前拒绝溢出的 rollout 预算计费**
   防止 hook 总计溢出向主机发送部分计费，以及原生记账溢出导致余额为无穷大。

6. **[#62571](openai/codex PR #62571) 让异步 Guardian 评分对 serving probe 保持生效**
   防止报告“无需审查”的 serving probe 绕过异步评分；Guardian 可对比两种信号并沿用现有审批策略。

7. **[#62568](openai/codex PR #62568) 将托管凭据加载 future 装箱**
   `try_load_managed_auth` 返回 pinned、boxed future，避免调用方的异步状态机内嵌完整的 future。

8. **[#62564](openai/codex PR #62564) 修复核心集成测试的时序竞态**
   涉及 steer 取消暂停的 mock HTTP 流、realtime handoff 与轮次事件到达顺序不定、流式工具早于 token 用量上报运行等情况。

9. **[#62566](openai/codex PR #62566) 移除 OTLP headers 辅助函数超时测试中的真实等待**
   原本需要等待 10 秒真实时间，现改用 Tokio 暂停时钟与命名管道，以提升测试速度与稳定性。

10. **[#62554](openai/codex PR #62554) 终端 Markdown 数学渲染支持 `\widetilde`**
    当参数为单字素时使用与 `\tilde` 相同的 Unicode 组合波浪符，并扩展 Unicode 数学快照测试。

> 终端渲染类另有 **[#62550](openai/codex PR #62550)**（多行 Mermaid 流程图边标签）、**[#62569](openai/codex PR #62569)**（状态栏行的 justify 布局）；后者可解决固定间距无法在终端宽度变化时把两组状态分置两端的问题。

## 功能需求趋势

- **持续工程上下文与记忆**：由 #61348 领衔，围绕子代理、会话记忆、远程协作，要求把 Codex 从任务执行器转为长期工作区。
- **多账号与多环境隔离**：#12029（多账号，👍 69）与 #14330（按项目/组织隔离账号与配置，👍 11）指向同一个核心诉求：认证与配置要能跨个人、公司、开源等多场景隔离并共享。
- **会话可编辑与可回溯**：#2948（编辑历史消息，👍 78）希望与 IDE 扩展中的自动回退配合。
- **桌面端稳定性与数据持久**：会话、线程、项目在更新或进程切换后丢失或损坏（#35619、#61294、#60941、#62323、#52197）。
- **上下文计量与压缩正确性**：token 计量与实际负载不一致（#41338），压缩后恢复过期指令（#42695）。

## 开发者关注点

- **数据丢失风险优先级最高**：Windows 更新或 app-server 进程切换导致项目消失、数百线程孤立，直接影响对工具的信任。
- **“一次异常拖垮整条会话”**：音频工具输出（#62212）、内联大图负载（#41338）都会让后续纯文本轮次或整个线程不可用，开发者需要可恢复、可自我修复的会话机制。
- **已有问题长期未解决**：#2948（2025-08 创建）、#42695（2026-09 创建）等仍在 OPEN，且仍有新评论；长期未解决的高赞需求可能降低社区信心。
- **自动化审批与安全的边界**：#56705（自动审查丢失人工授权）、#53349（站点安全分类拦截已授权只读流程）、#59191（更新过程中丢失浏览器工具）反映审批策略在更新或并发场景下的一致性不足。
- **Windows 平台问题集中**：在展示的 20 条热点 Issue 中，Windows 相关占相当比例（#61294、#35619、#62323、#59191、#53349、#60941、#40411），覆盖更新、Computer Use、浏览器控制与多聊天并发。
- **可观测性正在补齐**：PR #62567 为子代理添加 OpenTelemetry，呼应社区对“跨 worker 追问发生了什么”的排查需求。

---
*说明：以上内容均基于所提供的 GitHub Issue/PR 标题与摘要；PR 评论数未提供，Issue 点赞数仅部分条目有数据。*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报（2026-11-19）

## 1. 今日速览

今日发布 v0.69.0 稳定版与 v0.70.0-preview.0 预览版，稳定版修复了模板占位符中 `$` 字符丢失问题，并新增 `/stats` 每日 Token 用量热力图。社区侧讨论高度集中于 Agent 与 Subagent 的可靠性：子代理误报成功、通用代理挂死、浏览器代理配置失效等 P1 问题持续活跃。同时，社区对 AST 感知工具、按工具调用超时机制、ACP 会话管理等方向提出需求，反映出用户对执行过程可控性的关注正在增强。

## 2. 版本发布

**v0.69.0（稳定版）**
- 修复 core/cli 中模板占位符替换时字面量 `$` 字符被破坏的问题（PR #30136）。
- 新增 CLI `/stats` 子命令，提供每日 Token 用量热力图。
- 配套变更日志 PR #30365 已合并（CLOSED）。

**v0.70.0-preview.0（预览版）**
- 打包 v0.69.0-preview.0 与 v0.68.0 的变更日志（PR #30222、#30224）。
- 版本号 bump 至 `0.70.0-nightly.20261110.g1603e9b`。
- 变更日志 PR #30361 已合入。

链接：
- https://github.com/google-gemini/gemini-cli/pull/30136
- https://github.com/google-gemini/gemini-cli/pull/30365
- https://github.com/google-gemini/gemini-cli/pull/30361

## 3. 社区热点 Issues

1. **#22323 子代理 MAX_TURNS 中断被误报为 GOAL 成功**（P1，13 条评论）  
   `codebase_investigator` 在未做任何分析前触达轮次上限，却返回 `status: "success"` / `Termination Reason: "GOAL"`，导致中断被静默掩盖。这是影响开发者信任度的严重语义错误，讨论热度最高。  
   https://github.com/google-gemini/gemini-cli/issues/22323

2. **#21409 通用代理无限挂起**（P1，8 条评论，👍8）  
   一旦任务被交给 generalist agent 便永久卡住，简单如创建文件夹也要等一小时。高赞表明这是普遍遭遇到的阻塞性缺陷。  
   https://github.com/google-gemini/gemini-cli/issues/21409

3. **#21983 browser 子代理在 Wayland 下失败**（P1，4 条评论）  
   Linux Wayland 环境下浏览器子代理直接失败，影响 Linux 桌面用户的核心场景。  
   https://github.com/google-gemini/gemini-cli/issues/21983

4. **#22186 get-shit-done 输出钩子导致崩溃**（P1，3 条评论）  
   输出接近完成时 CLI 崩溃，涉及 hook 与输出管道的稳定性。  
   https://github.com/google-gemini/gemini-cli/issues/22186

5. **#21763 /bug 报告缺少子代理上下文**（P1，2 条评论）  
   缺陷报告只包含主会话信息，缺失子代理内部执行细节，显著抬高问题定位成本。  
   https://github.com/google-gemini/gemini-cli/issues/21763

6. **#22267 浏览器代理忽略 settings.json 覆盖项**（P2）  
   `maxTurns` 等全局/项目配置对 Browser Agent 完全无效，AgentRegistry 未生效，配置一致性受损。  
   https://github.com/google-gemini/gemini-cli/issues/22267

7. **#21968 Gemini 很少主动使用 skills 与子代理**（P2）  
   除非显式指示，模型几乎不会自发调用自定义技能或子代理，削弱了扩展机制的实用价值。  
   https://github.com/google-gemini/gemini-cli/issues/21968

8. **#19873 基于 Zero-Dependency OS 沙箱释放模型的 bash 亲和性**（P2，9 条评论）  
   提出借用 Gemini 3 原生倾向 POSIX 工具链的特性，通过沙箱 + 执行后意图路由提升代码探索与编辑效率，属架构级增强提案。  
   https://github.com/google-gemini/gemini-cli/issues/19873

9. **#22745 / #22746 AST 感知文件读取、搜索与代码库映射评估**（P2/P3）  
   EPIC 追踪 AST 感知工具能否减少单方法边界读取所需轮次，并推荐 tilth 或 glyph 作为起点，指向代码理解层的长期优化。  
   https://github.com/google-gemini/gemini-cli/issues/22745  
   https://github.com/google-gemini/gemini-cli/issues/22746

10. **#22672 代理应抑制破坏性操作**（P2）  
    模型在复杂 git 操作中偶发使用 `git reset` 或 `--force`，虽已有更安全替代方案，属于安全护栏类需求。  
    https://github.com/google-gemini/gemini-cli/issues/22672

> 其他值得留意的收录项：#24246（工具数超过 128 时出现 400 错误）、#23571（模型在随机目录生成临时脚本）、#22598（通过 `/chat share` 暴露子代理轨迹）、#21432（提升代理对自身 CLI 参数与热键的“自知”）。

## 4. 重要 PR 进展

1. **#30370 fix(core): 正确处理 `dir/**` 模式下的嵌套 .gitignore 否定规则**（OPEN）  
   修复 `GitIgnoreParser` 在通配目录下错误忽略被嵌套 .gitignore 重新纳入的文件。  
   https://github.com/google-gemini/gemini-cli/pull/30370

2. **#30334 fix(core,cli): 异步解析 PowerShell 命令以避免 UI 卡死**（CLOSED）  
   解决 Windows 上验证/执行 PowerShell 命令时 Thinking 动画与计时器冻结数秒的问题。  
   https://github.com/google-gemini/gemini-cli/pull/30334

3. **#30212 feat(core): 新增可配置的单次工具调用超时 `tools.callTimeout`**（OPEN，help wanted）  
   默认 `0` 表示关闭；超时触发 `AbortSignal` 并以可恢复的 `TOOL_CALL` 结束，直接回应代理挂死类问题。  
   https://github.com/google-gemini/gemini-cli/pull/30212

4. **#30239 fix(core): 层级别名解析为首个模型时保留其配置**（OPEN，pr-nudge-sent）  
   修复自定义别名在 `flash-lite`/`flash`/`pro` 层级上的 `generateContentConfig` 被重新解析覆盖的问题。  
   https://github.com/google-gemini/gemini-cli/pull/30239

5. **#30368 fix(acp): 支持关闭会话**（OPEN）  
   实现 ACP `session/close`，在初始化时声明能力并处理 `unstable_closeSession` 请求，改善客户端会话生命周期管理。  
   https://github.com/google-gemini/gemini-cli/pull/30368

6. **#30362 fix(acp): 上报代理停止原因**（OPEN）  
   处理 `AgentExecutionStopped` 事件，将停止原因作为助手消息回传，避免空回合静默结束。  
   https://github.com/google-gemini/gemini-cli/pull/30362

7. **#30363 fix(core): 避免在托管历史中重复待处理提示**（OPEN）  
   避免历史硬化已合并提示后再次追加原始提示，修复 #30069。  
   https://github.com/google-gemini/gemini-cli/pull/30363

8. **#30335 fix(core): 不再用空字符串覆盖 `core.sshCommand`**（OPEN）  
   `getSafeGitEnv()` 与沙箱 shell 默认值将该配置置空，导致所有 SSH 相关 git 操作报错。  
   https://github.com/google-gemini/gemini-cli/pull/30335

9. **#30375 docs: 修复失效的内部链接**（OPEN，P1）  
   文档内部链接损坏，影响导航体验。  
   https://github.com/google-gemini/gemini-cli/pull/30375

10. **#30360 chore(deps): npm 依赖组批量升级 67 项**（OPEN）  
    覆盖 `@octokit/rest` 22.0.0→22.0.1、`@vitest/eslint-plugin` 等，属例行维护。  
    https://github.com/google-gemini/gemini-cli/pull/30360

> 其他：#30372（修复 Auto Memory 文档指向不存在的锚点）、#30319（开发 worker 镜像推送至私有制品库）。

## 5. 功能需求趋势

- **Agent / Subagent 可靠性成为绝对主线**：相关 Issue 占据热度榜首，涵盖状态语义正确性、挂死、配置覆盖、Wayland 兼容、报告上下文、轨迹可见性（#22598）与“代理自知”（#21432）。
- **执行可控性与安全护栏**：单次工具调用超时（#30212）、抑制破坏性 git 操作（#22672）、限制工具数量避免 400 错误（#24246）、清理随机生成的临时脚本（#23571）。
- **代码理解层优化**：AST 感知读取、搜索与映射（#22745、#22746），并评估原生 bash 工具链的沙箱化利用（#19873）。
- **协议与集成完善**：ACP 会话关闭与停止原因上报，指向 IDE/客户端集成的成熟化。
- **CLI 自省与可观测性**：`/stats` 热力图、`/chat share` 子代理轨迹、更完整的缺陷报告。

## 6. 开发者关注点

- **“静默失败”最伤信任**：子代理触达轮次上限却报成功、ACP 空回合静默结束、缺陷报告缺失子代理上下文，三者共同指向执行结果与错误信息的不透明。
- **挂死与卡顿高频发生**：generalist agent 无限等待、Windows PowerShell 导致 UI 冻结数秒，直接破坏交互体验。
- **配置不生效是隐性坑**：Browser Agent 忽略 `settings.json`、层级别名配置被覆盖、`core.sshCommand` 被置空导致 SSH 全断，均属“配置写了但不生效”的隐性故障。
- **跨平台一致性不足**：Wayland 浏览器子代理失败与 Windows 卡顿显示平台覆盖仍有缺口。
- **扩展机制使用率低**：skills 与子代理需显式指令才被调用，社区希望模型能更主动地自主使用这些能力。

---
*本期日报基于 github.com/google-gemini/gemini-cli 在 2026-11-19 的公开数据整理，仅反映所提供材料的范围。*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报（2026-11-19）

## 1. 今日速览

今日发布两个补丁版本 v1.0.115-1 / v1.0.115-0，重点修复 MCP 登录在缺少 refresh-token scope 时的兼容性问题，并让直接工作流执行等待项目扩展工作流注册完成。社区侧，MCP OAuth 认证链路（token 静默刷新、授权码换取、重定向处理）仍是讨论最密集的议题，多个相关 Issue 今日更新或关闭。同时，企业策略拦截模型列表、Windows 安全软件误杀 shell、授权提示过于频繁等问题持续获得关注。

## 2. 版本发布

- **v1.0.115-1**
  - 修复：MCP 登录在服务器授予了所需 scope、但省略自动请求的 refresh-token scope 时，仍可继续完成登录。
  - 修复：直接工作流执行会等待项目扩展工作流注册完成后再执行。
  - 链接：github.com/github/copilot-cli Releases
- **v1.0.115-0**
  - 常规修复与变更（release 说明未展开细节）。
  - 链接：github.com/github/copilot-cli Releases

## 3. 社区热点 Issues

1. **#1595 [OPEN] 企业策略偶发拦截模型列表**
   使用有效 Enterprise Copilot 订阅、显示约 40% 剩余 premium 请求，但 `/models` 加载失败。30 条评论、11 👍，是今日讨论量最高的问题，反映企业策略与模型访问之间的不一致。
   github/copilot-cli Issue #1595

2. **#4203 [OPEN] 远程 MCP OAuth 过期 token 强制交互式重登**
   缓存的 access token 过期时未走静默 refresh_token 授权，直接要求交互登录并丢弃工具。5 👍，与今日 release 的 refresh-token 修复方向一致，值得跟踪是否已覆盖。
   github/copilot-cli Issue #4203

3. **#5478 [OPEN] Cortex XDR 在 Copilot 调用 git 时杀掉启动 shell**
   Windows 平台，Cortex XDR 以 parent_process_spoofing 终止 cmd/powershell。安全软件兼容性问题，影响 Windows 用户在含 git 仓库目录下的正常使用。
   github/copilot-cli Issue #5478

4. **#1168 [OPEN] 单次请求中授权提示过多（“授权疲劳”）**
   单个高层请求触发频繁授权确认。长期开放问题，涉及权限模型与用户体验平衡。
   github/copilot-cli Issue #1168

5. **#5350 [CLOSED] MCP OAuth 交互流程收到授权码但不执行换取 token**
   Entra ID OAuth（Azure DevOps 远程 MCP）场景下，浏览器往返成功但 code→token 交换未执行，服务器卡在 “Connecting”。今日关闭，属关键认证修复。
   github/copilot-cli Issue #5350

6. **#4017 [CLOSED] 桌面端非一方 HTTP MCP 服务器取消 host-token 后未启动浏览器流程**
   无认证、无报错、无弹窗，Atlassian / incident.io 等服务器受影响。今日关闭，对桌面端 MCP 生态有实际意义。
   github/copilot-cli Issue #4017

7. **#5283 [OPEN] 个人 Copilot Free 账号被远程控制策略阻止远程环境托管**
   无组织归属的个人账号启用远程访问失败，环境状态报策略阻断。6 👍，涉及免费/个人账号的功能可用性边界。
   github/copilot-cli Issue #5283

8. **#4769 [CLOSED] MCP OAuth 在元数据 URL 重定向时失败**
   `.well-known/openid-configuration` 处于 HTTP 重定向后时认证报 Incompatible authorization server。与今日 refresh-token 修复同属 OAuth 兼容性补强。
   github/copilot-cli Issue #4769

9. **#5516 [OPEN] store_memory 在用户级记忆不可用时仍提供 user scope，导致 404**
   今日新建问题，user scope 存储全部 404，仓库级正常。影响记忆功能可用性。
   github/copilot-cli Issue #5516

10. **#5090 [OPEN] 启动与输入行体验**
    启动时需同步等待 MCP、插件等加载才能开始工作，建议异步化。3 条评论，代表对启动性能的普遍诉求。
    github/copilot-cli Issue #5090

补充关注（值得留意）：#5222 启动时把已禁用的 MCP 服务器误报为 “blocked by policy” 并重复告警；#2949 后台 Agent 在纯文本回合后 MCP 连接被销毁；#4886 `--plugin-dir` 加载的 skills 不出现在 `/skills` 与 `/env`。

## 4. 重要 PR 进展

过去 24 小时内仅 1 条 PR 更新，以下列出该 PR，并附上同日关闭、与发布修复直接相关的 Issue 作为“修复落地”参考，均为数据中实际条目：

1. **#2957 [CLOSED] 修复 launchExtension() 扩展引导路径不匹配（#2890）**
   macOS 与 Windows 上扩展加载失败：子进程安全校验期望引导路径位于 `dirname(process.execPath)`（SEA 二进制目录），而 `app.js` 传入的路径不一致。与今日 release 中“等待扩展工作流注册”的修复相互呼应。
   github/copilot-cli PR #2957

2. **#5350 [CLOSED]** MCP OAuth 授权码→token 交换未执行（Entra ID / Azure DevOps MCP），认证流程修复落地。
   github/copilot-cli Issue #5350

3. **#4017 [CLOSED]** 桌面端非一方 HTTP MCP OAuth 流程未启动浏览器授权，修复无认证无报错的静默失败。
   github/copilot-cli Issue #4017

4. **#4769 [CLOSED]** MCP OAuth 元数据 URL 重定向导致认证失败，提升 OAuth 发现兼容性。
   github/copilot-cli Issue #4769

5. **#4371 [CLOSED]** MCP OAuth 3LO 因缺少 URL elicitation 返回 -32042，涉及授权码流程的协议支持。
   github/copilot-cli Issue #4371

6. **#4972 [CLOSED]** Windows 上通过 wrapper 启动的 MCP worker 在退出后残留，进程生命周期修复。
   github/copilot-cli Issue #4972

7. **#4886 [CLOSED]** `--plugin-dir` 加载的 skills 从 `/skills`、`/env` 中缺失，插件可见性问题修复。
   github/copilot-cli Issue #4886

8. **#4298 [CLOSED]** 请求在 settings.json 中通过沙箱配置选择性启用工具/白名单内置工具，权限配置能力相关。
   github/copilot-cli Issue #4298

9. **#3374 [CLOSED]** Windows 下 `$EDITOR=vim.exe` 经 Ctrl+G 启动时退格插入 ⌂ (0x7F)，终端输入问题修复。
   github/copilot-cli Issue #3374

10. **#2949 [CLOSED]** 后台 Agent 在纯文本回合后 MCP transport 被销毁，Agent 与 MCP 稳定性相关。
    github/copilot-cli Issue #2949

## 5. 功能需求趋势

- **MCP / OAuth 认证健壮性（最密集）**：refresh-token 静默刷新、授权码交换、元数据 URL 重定向、3LO 与 URL elicitation、桌面端非一方服务器授权。今日 release 与多个关闭 Issue 均集中于此。
- **插件与扩展生态**：扩展加载路径、扩展工作流注册时序、`--plugin-dir` skills 的可见性（`/skills`、`/env`）。
- **权限与沙箱控制**：授权提示频率（#1168）、按工具选择性启用（#4298）、企业策略下的模型访问（#1595）与 MCP 策略误报（#5222）。
- **记忆与上下文**：`store_memory` 的 user scope 可用性（#5516）、全局 instructions/AGENTS.md/CLAUDE.md 行为文档（#3983）。
- **IDE / 外部 Agent 集成**：作为 ACP 外部代理在 Zed 中的会话持久化与 `session/load`（#5501）。
- **启动与输入体验 / 性能**：启动异步化（#5090）、后台 Agent 稳定性（#2949）。
- **跨平台（Windows）兼容**：安全软件误杀（#5478）、MCP worker 残留（#4972）、编辑器输入（#3374）。

## 6. 开发者关注点

- **认证链路反复出问题**：MCP OAuth 在多条路径上失败（静默刷新缺失、code 换 token 不执行、重定向、3LO），企业身份提供商（Entra ID / Azure DevOps）场景尤为突出。
- **策略与订阅状态不一致**：有有效企业订阅却无法列出模型（#1595）；已禁用 MCP 仍被报 “blocked by policy”（#5222）；个人 Free 账号被远程控制策略阻断（#5283）。
- **授权疲劳**：单次请求多次确认，阻碍长任务自动化（#1168）。
- **Windows 环境摩擦大**：安全软件 parent_process_spoofing 误杀 shell（#5478）、MCP 进程残留（#4972）、终端输入异常（#3374）。
- **扩展/插件可观测性不足**：扩展加载路径错误、skills 在仪表盘缺失，用户难以诊断（#2957、#4886）。
- **启动阻塞**：加载 MCP、插件等必须同步等待，影响首次使用体验（#5090）。
- **记忆功能可用性边界**：user scope 在不可用时仍被提供并全部 404，缺乏客户端侧降级或提示（#5516）。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 · 2026-11-19

## 1. 今日速览

今日无新版本发布，但 `dev → production` 的发布 PR 已提交（#64784），核心信号是 **Code Mode 正在成为下一阶段重心**：单日出现多个 Code Mode 相关 PR（HTTP API 调用、后台阻塞时长、类支持、TUI 脚本页签）。同时，基础执行链路仍有明显可靠性问题——`edit` 工具后台挂起（#64869）、Windows 桌面版工具调用完全失效（#64676）是今日最值得重视的缺陷。

## 2. 版本发布

过去 24 小时无新 Release。

## 3. 社区热点 Issues（10 条）

1. **#45278 订阅续费被拒付，卡片与银行均无异常** — 49 评论 / 36 👍，今日讨论度最高，说明误判风控已非个例，直接影响付费用户留存。[链接](https://github.com/anomalyco/opencode/issues/45278)

2. **#64073 [FEATURE] 恢复前台子代理执行** — 20 评论 / 6 👍，v2 核心行为变更引发集中反馈，涉及子代理调度模型是否符合用户预期。[链接](https://github.com/anomalyco/opencode/issues/64073)

3. **#64869 [BUG] 后台服务中 `edit` 在特定路径无限挂起** — 9 评论；`write` 与独立服务器均正常，属难复现的路径相关缺陷，对长时间运行的服务影响大。[链接](https://github.com/anomalyco/opencode/issues/64869)

4. **#64676 [BUG] Windows 桌面版 2.3.2 工具调用从不执行，渲染器抛 RangeError 栈溢出** — 7 评论；已 CLOSED，但属阻断级问题，Windows 用户需确认修复版本。[链接](https://github.com/anomalyco/opencode/issues/64676)

5. **#42083 [CLOSED] GitHub Copilot 提供商显示零模型（`model_picker_enabled: false`）** — 14 评论 / 5 👍；认证成功但模型不可选，已关闭，是第三方提供商集成问题的代表案例。[链接](https://github.com/anomalyco/opencode/issues/42083)

6. **#35882 权限规则在 `tool.execute.before` 钩子后匹配的是重写后的命令** — 4 评论；涉及安全边界，钩子改写命令可能绕过预期权限判定，值得安全敏感用户跟进。[链接](https://github.com/anomalyco/opencode/issues/35882)

7. **#51014 [已复现] 多个 TUI 实例对同一事件重复发送通知** — 7 评论 / 2 👍；多实例场景下的典型状态隔离缺陷。[链接](https://github.com/anomalyco/opencode/issues/51014)

8. **#51796 [已复现] glibc < 2.28 下"新建终端"恒返回 503，内嵌 opencode-pty 不可运行且错误被掩盖为 ENOENT** — 5 评论；旧发行版用户完全无法使用持久 PTY，且错误信息误导排障。[链接](https://github.com/anomalyco/opencode/issues/51796)

9. **#59902 DeepSeek V4.1 Flash 在 Go/free 层首 token 等待约为官方 API 的 2 倍** — 4 评论 / 2 👍；指向代理层的延迟与容量分配问题，在 Agent 多步场景下被放大，而非单纯吞吐问题。[链接](https://github.com/anomalyco/opencode/issues/59902)

10. **#64507 控制台已启用的 Jev 1.13 未出现在 Go/Zen 模型列表** — 3 评论；模型目录与控制台配置不同步，导致付费可用模型无法选择。[链接](https://github.com/anomalyco/opencode/issues/64507)

## 4. 重要 PR 进展（10 条）

1. **#64784 [dev → production] 发布提升** — 包含 Tidepool Alpha Free（#64767）与 Gemini 4 Neon（#64763）的 Console 文档，以及上次提升以来合并的 core/app/CLI 变更。[链接](https://github.com/anomalyco/opencode/pull/64784)

2. **#64949 feat(core): Code Mode 通过 `opencode://` fetch 调用 OpenCode API** — 脚本可进程内直连服务端路由且已完成鉴权，能列读会话、创建并提示子会话，显著扩展 Code Mode 能力边界。[链接](https://github.com/anomalyco/opencode/pull/64949)

3. **#64957 feat(core): Code Mode 脚本阻塞时长从 10 秒延长至 2 分钟** — 减少长任务被过早转入后台的情况，改善交互体验。[链接](https://github.com/anomalyco/opencode/pull/64957)

4. **#64954 feat(codemode): 基础 class 支持** — 在 getters/setters（#64908）基础上扩展 VM 语义，提升脚本兼容性。[链接](https://github.com/anomalyco/opencode/pull/64954)

5. **#64930 [CLOSED] fix(codemode): 补上 `Uint8Array.BYTES_PER_ELEMENT`** — 此前缺失导致尺寸运算静默得到 `NaN`，现为只读非枚举的 `1`，与 Bun 行为一致。[链接](https://github.com/anomalyco/opencode/pull/64930)

6. **#64955 fix(cli): 在 Linux GLIBC 构建中内嵌静态 MUSL helper** — 直接对应 #51796，修复 glibc < 2.28 下 PTY 不可用问题。[链接](https://github.com/anomalyco/opencode/pull/64955)

7. **#64911 fix(cli): 将服务密码从 CLI 日志中移除** — 启动与失败时会打印完整参数列表，存在凭据泄露风险，属安全修复。[链接](https://github.com/anomalyco/opencode/pull/64911)

8. **#64947 feat(core): 登出时撤销 ChatGPT 登录授权** — 此前仅本地删 token，刷新令牌在 30 天内仍有效；现按 OpenAI 令牌共享指南撤销，符合合规要求。[链接](https://github.com/anomalyco/opencode/pull/64947)

9. **#64959 fix(app): 在 e2e mock server 中模拟后台任务列表** — 修复 `check-test` 中 app e2e 连续四轮失败并触发 15 分钟超时的问题（`Unmocked API request`）。[链接](https://github.com/anomalyco/opencode/pull/64959)

10. **#63710 feat(config): 支持提供商模型通配符覆盖** — 为 `providers.*` 增加 `*` 与 `?` 模式匹配；设计审批尚未完成，需关注后续走向。[链接](https://github.com/anomalyco/opencode/pull/63710)

## 5. 功能需求趋势

- **Code Mode / 脚本化能力**：今日 PR 密度最高的方向，涵盖 API 访问、VM 语义（getter/setter、class）、TUI 脚本入口与执行时长策略。
- **子代理调度模型**：既有要求恢复前台执行的请求（#64073），也有后台子代理每轮结果都唤醒父会话的抱怨（#63894），说明"前台/后台"边界需要统一设计。
- **新模型与提供商接入**：Bedrock 上的 Kimi K3.1（#62519）、新增 Hostlinku 提供商（#64413）、模型缺失（#64507）、自定义提供商入口消失（#59603）、提供商托管 web search（#10704）——接入广度与目录同步是持续需求。
- **模型分层抽象**：提出 smart/cheap/fast 等层级并可指定层级而非具体模型（#64070）。
- **可配置性与本地化 UI**：App 快捷键可配置（#43088）、跨会话保持侧栏（#64950）、焦点态统一（#64909）。

## 6. 开发者关注点

- **计费与配额可信度**：付费被拒（#45278）与 GLM-5.3 促销额度未反映在配额百分比中（#64898）并存，账单透明度和支付链路稳定性是信任基础。
- **执行可靠性优先于新功能**：`edit` 挂起、shell 输出目录缺失（#64752）、Store PowerShell 启动失败（#63892）、Windows 工具调用全挂，说明各平台工具执行链路仍不够稳健。
- **延迟而非吞吐**：首 token 等待被多次提及（#59902），在 Agent 多步场景下累积明显，代理层调度与地域部署值得排查。
- **安全与合规细节**：权限匹配被钩子改写绕过（#35882）、CLI 日志泄露服务密码、OAuth 令牌未撤销，反映出安全边界需要系统性审计。
- **错误信息可诊断性**：PTY 失败被掩盖为 ENOENT、e2e 的 Unmocked API 报错，均表明错误上报的准确性直接影响排障效率。

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报 · 2026-11-19

## 1. 今日速览

过去 24 小时无新版本发布，社区讨论集中在 **Windows 使用体验、TUI 渲染性能、模型目录/缓存准确性** 三大方向。已关闭（CLOSED）的 Issue 中，XDG 目录规范（👍 75）与 Gemini 4 思考等级适配均已有结论；多个 provider 相关缺陷（Copilot 模型隐藏、GPT-6.2 缓存复用下降、Qwen4-Max 缺失）在今日形成了对应 PR。

## 2. 版本发布

无（过去 24 小时无新 Release）。

## 3. 社区热点 Issues（10 条）

1. **#7547 [OPEN] Windows 使用方式汇总** — 98 条评论，是当日最活跃线程。核心诉求是收敛 Pi 在 Windows 上的运行方式，以便集中投入修 bug 与写文档。社区对 Windows 支持存在大量分歧，值得跟进但不宜仓促定论。
   https://github.com/earendil-works/pi/issues/7547

2. **#2870 [CLOSED] 遵循 XDG Base Directory** — 75 个 👍，是本期呼声最高的需求。Linux 下配置/状态目录污染 home 目录的问题已获结论，属于工具链规范化的代表性胜利。
   https://github.com/earendil-works/pi/issues/2870

3. **#9549 [OPEN][inprogress] 大 transcript 每帧重渲染** — 19 条评论。Windows 11 + Windows Terminal 下大 transcript 每帧重渲染、每次 resize 重发全文，单核打满。报告由用户本地 pi agent 起草并附复现，可信度高，已在处理中。
   https://github.com/earendil-works/pi/issues/9549

4. **#12184 [CLOSED] Gemini 4 Hydrogen 的 xhigh 思考等级被拒** — Google 适配器拒绝模型声明的第四档 `xhigh`，导致 `/thinking` 无法选择。属于新模型上线后的兼容缺口，已关闭。
   https://github.com/earendil-works/pi/issues/12184

5. **#11006 [OPEN] 企业管理员启用的 Copilot 模型重启后仍隐藏** — OAuth 凭据中的 `availableModelIds` 被缓存，重启不会刷新。已有 PR #12325 对应修复，适合跟踪闭环。
   https://github.com/earendil-works/pi/issues/11006

6. **#12273 [CLOSED] GPT-6.2 Sol 的 prompt cache 复用显著低于 6.1** — 同一负载第 4 轮缓存命中 3,968/12,931，而 6.1 为 12,800/12,931。直接影响成本与延迟，是当日最有量化价值的问题。
   https://github.com/earendil-works/pi/issues/12273

7. **#12318 [CLOSED] Claude Team/Enterprise 席位 `/login` 报 “Unknown scope”** — 授权在同意页之前即被拒，影响企业用户接入 Anthropic。当天提出、当天关闭，响应快。
   https://github.com/earendil-works/pi/issues/12318

8. **#12286 [OPEN][inprogress] `openai-responses` 省略 `strict` 导致 Copilot 模型填充可选参数** — 未设置 `compat.supportsStrictMode` 时 1.3.0 不发送 `strict`，Copilot 端点按严格模式解码 schema，引发错误行为。已成为 provider 兼容性焦点。
   https://github.com/earendil-works/pi/issues/12286

9. **#12282 [OPEN] llama.cpp 决策分类器忽略已声明的图像输入** — 本地模型 `Clef-Flash-GGUF:Q4_K_M` 虽在 `architecture.input_modalities` 中报告 `image`，Pi 仍注册为纯文本，传 PNG 报错。本地模型多模态支持存在缺口。
   https://github.com/earendil-works/pi/issues/12282

10. **#11026 [OPEN][durable] pi-durable 永久删除会话** — 9 条评论、6 👍，请求新增 `harness.deleteConversation(id, ctx)`，运行中先拒绝/中止再删除条目。属于持久化存储的数据管理能力补全。
    https://github.com/earendil-works/pi/issues/11026

## 4. 重要 PR 进展（10 条）

1. **#12319 [OPEN] 使 Codex 系统提示可缓存** — 将顶层 `instructions` 移入可缓存前缀，针对 GPT-6.2 缓存复用下降（#12273）的结构性原因。
   https://github.com/earendil-works/pi/pull/12319

2. **#12325 [OPEN] 保持 GitHub Copilot 可用模型更新** — 修复 `filterModels` 仅依赖 token 刷新时更新的 `availableModelIds`，模型刷新不再遗漏（Fixes #11006）。
   https://github.com/earendil-works/pi/pull/12325

3. **#12313 [CLOSED] 为 qwen-token-plan-individual 增加 qwen4-max-preview** — 从 models.dev 的 `alibaba-token-plan[-cn]` 目录补齐两地区模型，修复 #12259。
   https://github.com/earendil-works/pi/pull/12313

4. **#12275 [CLOSED] 停止可变工具行导致的重复 scrollback 重绘** — 当顶部行滚出视口后回落全量重绘的问题，与 #9549 的性能问题同源。
   https://github.com/earendil-works/pi/pull/12275

5. **#12274 [CLOSED] 避免流式输出时输入光标闪烁** — 修复输入光标高频频闪，涉及三种渲染行为。
   https://github.com/earendil-works/pi/pull/12274

6. **#12312 [OPEN] 绝对路径 Tab 菜单按 Enter 不再直接提交** — 修正 `autocompletePrefix.startsWith("/")` 判断对绝对路径误触发提交的问题（Closes #12309）。
   https://github.com/earendil-works/pi/pull/12312

7. **#12304 [CLOSED] 用启动器的 Node.js 做托管更新冒烟测试** — 应对 CachyOS 升级 `simdjson` 后 `node` 无法启动、连带 `pi` 失效的发行版兼容问题。
   https://github.com/earendil-works/pi/pull/12304

## 5. 功能需求趋势

- **平台与安装体验**：Windows 运行方式收敛（#7547）、遵循 XDG 规范（#2870）、发行版库版本变化导致启动失败（#12304），说明“在哪跑、怎么装”是当前最大摩擦面。
- **TUI 性能与渲染质量**：大 transcript 重渲染（#9549）、scrollback 重绘（#12275）、光标闪烁（#12274）、输入补全提交行为（#12312）构成一组集中出现的终端体验问题。
- **新模型与 provider 目录同步**：Gemini 4 xhigh（#12184）、Qwen4-Max（#12259/#12313）、Copilot 模型可见性（#11006/#12325）反映模型迭代快于目录与适配更新。
- **缓存与用量统计正确性**：GPT-6.2 缓存复用下降（#12273）、OpenAI Decisions 缓存用量丢失且按零费率计（#12264）——成本相关问题开始被量化上报。
- **扩展与资源解析语义**：包命名空间（#8834）、启动期 run 缺失 `resources_discover` 的技能（#12297）、npm 包注册的扩展工具在恢复会话时丢失（#12323）、codemode 批量调用隐藏技能读取（#12176），扩展生态的一致性需求上升。
- **本地模型与多模态**：llama.cpp 分类器忽略图像输入（#12282）。

## 6. 开发者关注点

- **缓存成本可观测**：开发者已能给出逐轮缓存命中的精确对比，期望 provider 层（尤其 Codex 系统提示位置、GA 缓存解析）不再静默损失缓存收益。
- **provider 兼容细节易踩坑**：`strict` 字段缺省语义、`availableModelIds` 缓存时机、thinking level 映射等隐式约定，正在持续产生跨 provider 缺陷。
- **企业/团队账号路径不畅**：Claude Team 席位登录被拒、Copilot 企业管理员启用模型不可见，企业场景的鉴权与模型发现仍需专门打磨。
- **终端交互的“隐性 bug”**：光标频闪、冗余重绘、补全误提交这类问题不影响功能但显著影响日常使用，社区报告质量高、修复意愿强。
- **数据控制权**：会话永久删除（#11026）与目录规范（#2870）表明用户对本地状态的可控性有明确期待。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报（2026-11-19）

> 数据来源：github.com/QwenLM/qwen-code

## 1. 今日速览

今日社区动态集中在 **CI 稳定性与测试去抖动**、**Managed Agent（钉钉适配器等托管通道）收敛** 与 **Web Shell/桌面端体验修补** 三条主线。安全方面出现一个 P1 级问题：AUTO 模式下服务器级 MCP 信任会绕过 LLM 分类器（#17854）。同时夜间版 v0.28.0 继续迭代，主线 CI 依旧有多条长期未闭合的失败追踪 Issue。

## 2. 版本发布

**v0.28.0-nightly.20261118.d9ac287c9f**（夜间版）
- 提交 `d9ac287c9f`，发布说明由 `.github/release.yml` 自动生成。
- 摘要中可见的变更包括：在全栈 E2E 中观察一次真实的定时 `/loop` 触发（由 @wenshao 提交的 #17506），以及一条 `fix(verify-pr...)` 修复（摘要被截断，内容不完整）。
- 说明：该发布为夜间构建，变更清单在提供的数据中不完整，不宜据此推断完整功能范围。

## 3. 社区热点 Issues（10 条）

1. **#17854 [P1][安全] AUTO 模式下服务器级 MCP 信任绕过 LLM 分类器** — 新增于 2026-11-19。被信任服务器后续新增的工具可在“零审查”下执行，属结构性优先级问题，对启用 AUTO 模式与 MCP 的用户风险最高。
   https://github.com/QwenLM/qwen-code/issues/17854

2. **#14724 [bug] 主线 CI 失败：Managed Agent 门禁未识别到测试** — 创建于 2026-10-19，评论已达 **470 条**，是当前讨论量最大的 Issue，反映托管 Agent 门禁长期不稳定，自动修复被跳过（autofix/skip）。
   https://github.com/QwenLM/qwen-code/issues/14724

3. **#11680 [bug] 主线 CI 失败：E2E Tests 未识别到测试** — 自 2026-09-11 持续至今，评论 86 条，说明 E2E 在“任何测试结果上报前”即失败，属长期基础设施问题。
   https://github.com/QwenLM/qwen-code/issues/11680

4. **#17037 [P1][CI] hz3 的 /tmp inode 耗尽** — 残留的 verify 工作树占用 tmpfs 的 92%，导致落在 hz3 的任务在磁盘下限门禁处提前失败，直接影响 CI 吞吐。
   https://github.com/QwenLM/qwen-code/issues/17037

5. **#10689 [P1][core] kimi-k3 经 OpenAI 兼容代理返回“malformed tool call”** — 长会话（transcript 约 1.6 MB）下重试 5 次耗尽导致回合失败，涉及第三方模型与代理兼容性，影响多模型使用场景。
   https://github.com/QwenLM/qwen-code/issues/10689

6. **#17757 [P2] 忽略规则：“ask permission”设置未生效** — 用户反馈 Qwen 3.7 未按权限设置停下等待批准，直接执行变更。属用户信任与安全相关的高敏感反馈，目前标记为需更多信息。
   https://github.com/QwenLM/qwen-code/issues/17757

7. **#17245 [P2] 与 llama.cpp server 的规律性超时断开** — 断连后任务从头重跑、始终无法完成，涉及本地模型用户的核心可用性。
   https://github.com/QwenLM/qwen-code/issues/17245

8. **#16417 [已关闭][P2] 应在生成前拒绝超大 write_file** — 0.26.8 会先让模型生成完整响应再以“超出 token 限制”拒绝，浪费输出预算；已被关闭，值得关注其修复方式。
   https://github.com/QwenLM/qwen-code/issues/16417

9. **#17798 [P3][Web Shell] Changes 面板长 diff 行不换行** — 每行出现独立横向滚动条，影响桌面端与 `qwen serve` Web 模式的代码审阅体验。
   https://github.com/QwenLM/qwen-code/issues/17798

10. **#17834 [P2] deflake：钉钉托管适配器 outbox 测试** — CI Failure Patrol 标记为 flaky 并触发重跑，是当前托管通道测试去抖动工作的代表条目。
    https://github.com/QwenLM/qwen-code/issues/17834

其他值得一提：#17750（已关闭）修复 managed-agent-server 的 ToolPublicationContract 与 networknt json-schema-validator 2.x 不兼容（NoClassDefFoundError）；#17715 提出把“不可检视的权限对象”升格为协议状态。

## 4. 重要 PR 进展（10 条）

1. **#17777 feat(core)：将配额耗尽的回退模型标记为会话内终态** — 扩展 #17377 的可选模型可用性账本，避免对永久配额耗尽的回退模型反复回退。
   https://github.com/QwenLM/qwen-code/pull/17777

2. **#17437 feat(i18n)：为 CLI 与 Web Shell 增加阿拉伯语及 RTL 布局** — 覆盖 Web Shell 与导出的 HTML 转录，属较大范围的国际化扩展。
   https://github.com/QwenLM/qwen-code/pull/17437

3. **#17745 feat(core)：OpenTUI 默认运行在共享 agent loop 上** — 统一实时回合的模型轮次与工具批次执行路径，可通过 `unifiedAgentLoop: false` 回退。
   https://github.com/QwenLM/qwen-code/pull/17745

4. **#17871 refactor(managed-agent)：files-on-v2 生命周期与公共子级放宽（D3/D5'）** — 在主线 `/loop` 配置阶梯与外部工作区执行落地后重新适配，推进托管 Agent 预生产收敛。
   https://github.com/QwenLM/qwen-code/pull/17871

5. **#17794 feat(web-shell)：以 attempt 绑定结算组装 daemon 聊天控制器** — 统一聊天面切片 2c，注入式工厂 `createDaemonChatController`。
   https://github.com/QwenLM/qwen-code/pull/17794

6. **#16664 fix(acp)：输出恢复后仍截断时上报 max_tokens** — 修正 ACP 会话在恢复失败后仍按正常回合返回、掩盖截断的问题。
   https://github.com/QwenLM/qwen-code/pull/16664

7. **#17322 feat(core)：把近期失败的工具调用带入压缩输入** — 向压缩侧查询追加有界摘要，让失败尝试与原因进入状态快照。
   https://github.com/QwenLM/qwen-code/pull/17322

8. **#16674 feat(core)：将 `.worktreeinclude` 路径复制到新 worktree** — 用仓库级 gitignore 语法清单把被忽略但必要的文件带入每个 worktree。
   https://github.com/QwenLM/qwen-code/pull/16674

9. **#16681 feat(web-shell)：在提交视图中只提交选中文件** — 列出全部未提交文件并默认全选，未勾选者保留在工作区。
   https://github.com/QwenLM/qwen-code/pull/16681

10. **#17866 fix(web-shell)：本地路径与加载失败的 markdown 图片降级为文本** — 以可选中的文本块替代破损图片占位。
    https://github.com/QwenLM/qwen-code/pull/17866

其他：#17837 将钉钉 recent-window 上限用例超时从 30 秒提到 120 秒并加断言固定；#15562 让桌面端跨重启持久化 Web Shell 目录；#17498 修复 Python SDK 在关闭 query 前未等待进程启动。

## 5. 功能需求趋势

- **托管 Agent / 通道集成（Managed Agent、DingTalk、GitHub）**：Issue 与 PR 密度最高，涉及注册身份绑定、卡片交互、渠道注入消息、只提交选中文件等运营级能力（#17173、#17769、#17813、#17871）。
- **安全与权限模型**：AUTO 模式 MCP 信任绕过（#17854）、权限设置被忽略（#17757）、不可检视权限对象协议化（#17715），显示社区要求更细粒度的审批与可审计性。
- **测试稳定性与 CI 基础设施**：主线 CI 门禁、E2E 未识别测试、hz3 inode 耗尽、多起 deflake 条目，构成当日最大讨论量来源。
- **多模型 / 第三方兼容性**：kimi-k3 经 OpenAI 兼容代理、llama.cpp 超时、回退模型配额终态（#17777），反映“非默认模型路径”是主要故障面。
- **多语言与国际化**：阿拉伯语 + RTL（#17437）、俄语翻译补齐（#17857）。
- **终端与 Web 交互体验（roadmap/terminal-ux、web-shell）**：diff 换行、图片降级、提交子集、跨重启持久化。
- **遥测/可观测性**：OpenRouter 路由供应商与生成 id 作为 span 属性（#14629，已关闭，需讨论）。

## 6. 开发者关注点

- **权限与信任边界是首要痛点**：用户明确反馈“ask permission”未生效、工具未经批准即执行；同时服务器级 MCP 信任使新增工具绕过审查。两点叠加会显著削弱用户对自动化模式的信任。
- **CI 噪音吞噬开发精力**：470 条评论的 #14724 与 86 条评论的 #11680 长期 OPEN，叠加 tmpfs inode 耗尽，说明失败多为“测试结果上报前”的基础设施问题，而非真实回归。
- **flaky 测试处理需制度化**：官方采取“重跑判定 + 若确定性失败则视为真 bug、不得标记为抖动”的原则（见 #17834），并以外置 Issue 记录延迟评审项以便核验（#17781、#17769）。
- **非默认模型路径体验差**：第三方 OpenAI 兼容代理的工具调用格式错误、本地 llama.cpp 断连后从头重跑、超大写入在生成后才被拒绝，均表现为“浪费时间与 token”的可用性问题。
- **Web/桌面端与 CLI 一致性**：共享 agent loop（#17745）、daemon 聊天控制器、编辑器一致性等待（#17553）表明团队正推进多界面统一，但短期仍存在渲染与等待时序差异。

---
*说明：以上内容严格基于所提供的 GitHub 数据；release 备注与部分摘要被截断，未作补充推断。*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI 社区动态日报 · 2026-11-19

> 数据来源：github.com/Hmbown/DeepSeek-TUI（原 codewhale-hq/Codewhale）

## 1. 今日速览

今日无新版本发布，社区焦点集中在 0.10.3 的发布验收收尾与 execpolicy（执行策略/沙箱）加固：维护者 Hmbown 集中提交了多条 execpolicy 绕过类 Issue 与对应修复 PR（nix `--command`、awk/sed 静态载荷、`find -delete` 等）。同时 Windows 与 Linux 终端适配问题依旧活跃，包括 `/undo` 崩溃、GNOME Terminal 配色残留，以及中文输入法未适配的长期 Issue。

## 2. 版本发布

过去 24 小时无新 Release。

## 3. 社区热点 Issues（10 条）

1. **#6970 [OPEN] `/undo` 在 Windows 上触发严重 bug**（评论 7，为今日最高）
   0.10.3 发布验收跟踪贴，摘要显示 macOS 路径已修复、最终 Windows 验收仍未关闭。这是当前发布节奏的关键阻塞项。
   https://github.com/codewhale-hq/Codewhale/issues/6970

2. **#2323 [OPEN] 未适配中文输入法**（评论 6，👍1）
   中文输入法拼音提示不隐藏、窗口态下输入异常，OS 为 Windows。持续近半年仍有讨论，是中文用户的核心体验痛点。
   https://github.com/codewhale-hq/Codewhale/issues/2323

3. **#7357 [OPEN] 新回合开始时请求快照导致 TUI 整回合冻结**（评论 4）
   按键被忽略、无渲染，只能关闭终端。属于高严重级卡死问题。
   https://github.com/codewhale-hq/Codewhale/issues/7357

4. **#7274 [OPEN] 健壮性：engine/tools/util/repl 中的 panic、glob 挂起与错误文本**（评论 3，标签 status:awaiting-release）
   汇总多个崩溃/挂起项，以拆分为小 PR 方式跟踪，等待发版。
   https://github.com/codewhale-hq/Codewhale/issues/7274

5. **#7328 [OPEN] Provider 失败时诊断日志无根因，错误卡片丢失已输入代码**（评论 2）
   失败原因只以英文散文形式存在于会话记录与 `codewhale receipts`，从未进入诊断日志，不利于排障。
   https://github.com/codewhale-hq/Codewhale/issues/7328

6. **#7365 [OPEN] opencode-zen 免费模型在 Codewhale 中不可用（429 FreeUsageLimitError）**
   网关校验精确 payload 与 TLS cipher 列表，免费模型行为死路。涉及第三方 provider 兼容性。
   https://github.com/codewhale-hq/Codewhale/issues/7365

7. **#7347 [OPEN] 密钥脱敏在每次模型请求上运行，普通文本下性能慢**
   `prepare_model_bound_request` 每次请求都重新对所有工具结果脱敏，成本随上下文增长。性能与安全权衡问题。
   https://github.com/codewhale-hq/Codewhale/issues/7347

8. **#7356 [OPEN] 会话 late-usage ledger 达到 1 MiB 后无法再保存**
   压缩失败、transcript 停止持久化。属于数据丢失风险类 bug。
   https://github.com/codewhale-hq/Codewhale/issues/7356

9. **#7413/#7412 [OPEN] execpolicy：awk/sed 静态载荷与 `find -delete` 未被扫描**
   `awk 'BEGIN{system("rm x")}'`、`sed 's/x/rm y/e'`、`find -delete` 均可绕过 rm 拒绝规则。沙箱安全边界问题，今日新开。
   https://github.com/codewhale-hq/Codewhale/issues/7413
   https://github.com/codewhale-hq/Codewhale/issues/7412

10. **#7232 [CLOSED] 移除工作区级子代理协调 flock**
    单个陈旧会话曾导致所有新会话只读并重复报错“Failed to clean up sub-agents”，现已关闭，属本周修复亮点。
    https://github.com/codewhale-hq/Codewhale/issues/7232

## 4. 重要 PR 进展（10 条）

1. **#7398 [OPEN] fix(tui)：大段粘贴不再冻结 composer**
   非 ASCII `KeyCode::Char`（无 bracketed-paste 终端上的 CJK 粘贴）逐字符走约 10 次 O(n) 路径，现接入 `PasteBurst` 状态机。
   https://github.com/codewhale-hq/Codewhale/pull/7398

2. **#7397 [OPEN] fix(execpolicy)：nix `--command=` 内联形式绕过拒绝规则**
   `nix develop --command='rm -rf /'` 在拒绝 rm 且 `AskForApproval::Never` 时曾被放行。安全高危修复。
   https://github.com/codewhale-hq/Codewhale/pull/7397

3. **#7399 [OPEN] fix(engine)：非流式并行工具调用使用唯一 fallback id**
   原用常量 `"tool_call"`，两个无 id 的并行调用会冲突，导致整轮校验失败。
   https://github.com/codewhale-hq/Codewhale/pull/7399

4. **#7340 [OPEN] feat(providers)：新增 Synap descriptor**（外部贡献者）
   通过既有兼容 host descriptor 路径接入，OpenAI 兼容 Chat Completions，`GET /v1/models` 动态发现模型与价格。
   https://github.com/codewhale-hq/Codewhale/pull/7340

5. **#7410 [OPEN] feat(web)：新增 SearchApi 作为 Web 搜索 provider**（外部贡献者）
   作者已声明就职于 SearchApi 的厂商利益披露，作为 `[search]` 可选 provider。
   https://github.com/codewhale-hq/Codewhale/pull/7410

6. **#7389 [OPEN] fix(engine)：fork 准备期间释放会话准入锁（CW-8227）**
   原实现中 fork 一个线程会阻塞无关线程，影响多线程并行体验。
   https://github.com/codewhale-hq/Codewhale/pull/7389

7. **#7404 [OPEN] fix：夜间审计批量修复**（ACP pending 调用、ACP shell_env hook、mobile tickets、LSP base、DSH 链接、ext-agent 行）
   https://github.com/codewhale-hq/Codewhale/pull/7404

8. **#7396 [OPEN] fix(plugins)：拒绝本地安装 DSH 包内的符号链接 skill 目录**
   修复可将包外文件复制进安装包的问题（夜间审计发现并复现）。
   https://github.com/codewhale-hq/Codewhale/pull/7396

9. **#7394 [OPEN] fix(telemetry)：限制启动 arming 锁，避免挂起持有者卡死启动**
   此前每次 `codewhale`/`codew` 启动都可能在提示符前挂起。
   https://github.com/codewhale-hq/Codewhale/pull/7394

10. **#7373 [CLOSED] build(npm,ci)：npm 包要求 Node.js 22，新增每周 floating-stable 检查（CW-8205）**
    已合并，属 0.10.3 发布更新的一部分。
    https://github.com/codewhale-hq/Codewhale/pull/7373

## 5. 功能需求趋势

- **执行策略与沙箱安全**：今日多条新 Issue 与 PR 均围绕 execpolicy 展开（nix、awk/sed、`find -delete`、tmux 执行动词、oc/vagrant/op/opam/helm 等未建模 launcher），显示安全加固是当前主线。
- **TUI 终端兼容性**：DEC 2026 同步刷新在 gnome-terminal/VTE 上的闪烁与全屏重绘、GNOME Terminal 退出后配色残留，反映 Linux 终端适配是持续方向。
- **本地化 / CJK 输入体验**：#2323 聚焦中文输入法；#7398 修复 CJK 粘贴性能，均为东亚用户需求。
- **第三方 Provider 集成**：Synap（#7340）、SearchApi（#7410）、opencode-zen 免费模型（#7365），生态兼容性需求增长。
- **性能与健壮性**：脱敏性能（#7347）、`/undo` 双重加载（#7355）、粘贴 O(n²)（#7398），社区对响应速度和资源开销敏感。

## 6. 开发者关注点

- **发布质量与验收**：#6970 的 Windows 验收、#7274 的 `status:awaiting-release`，开发者关注 0.10.3 能否稳定收尾。
- **稳定性与数据安全**：回合级冻结（#7357）、会话无法保存（#7356）、启动挂起（#7394）等直接影响可用性与数据完整性的问题优先级高。
- **诊断与可观测性**：#7328 指出 provider 失败原因无法进入诊断日志，排障体验是反馈焦点。
- **安全边界可信度**：execpolicy 多起绕过（#7411–#7413、#7397）表明拒绝规则覆盖面的一致性是开发者与维护者共同关注点。
- **错误默认值问题**：#7406 中 Auto-Review 将延迟只读工具误判为 Safe、#7404 中 ACP 调用长期停留在 pending，反映自动化审查与 agent 调用生命周期存在系统性缺陷。

</details>

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar-personal) 自动生成。*