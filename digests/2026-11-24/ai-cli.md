# AI CLI 工具社区动态日报 2026-11-24

> 生成时间: 2026-11-24 09:55 UTC | 覆盖工具: 9 个

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

# AI CLI 工具生态横向对比分析 · 2026-11-24

## 1. 生态全景

当前 AI CLI 工具已越过"能用"阶段，竞争焦点从模型接入转向**会话可靠性、权限与安全边界、以及自动化场景的确定性**。今日 9 个有活动的工具中，6 个发布了版本或补丁，但社区讨论的高热条目几乎全是缺陷而非新功能——尤其集中在桌面端更新后的回归、静默失败与权限语义不一致。与此同时，多个工具在同一天推进组织级安全加固（Claude Code 的 OIDC 分组、Gemini CLI 的 A2A bearer token、Copilot CLI 的连接令牌），说明**企业托管与可治理性**正成为新的分水岭。子代理/多 agent 与上下文压缩效率则是各社区共同的下一战场。

## 2. 各工具活跃度对比

> 数据均取自各日报所列条目；Issue/PR 计数为日报中呈现的条目数，非仓库全量。

| 工具 | Release | Issues（列示） | PR（列示） | 今日热度最高条目 | 备注 |
|---|---|---|---|---|---|
| **Claude Code** | v2.1.331（Code Mode 多云） | 10 | 2（均已关闭，无合入） | #107757 User-Agent 泄露邮箱（124 评论/811👍） | PR 通道近乎静默 |
| **OpenAI Codex** | rust-v0.172.0 + 4 个 alpha | 10 | 10（9 关闭，1 OPEN） | #58530 订阅额度分离（38 评论/62👍） | PR 多为 bot 提交 |
| **Gemini CLI** | 4 个（v0.71.0/0.71.1/0.72.0-preview.0/nightly） | 10（+2 补充） | 10 | #22323 子代理误报成功（P1，14 评论） | 发布节奏最密 |
| **GitHub Copilot CLI** | v1.0.115-8 | 10（+4 补充） | 1（CLOSED） | #2243 worktree 默认关闭（21👍） | PR 极少 |
| **Kimi Code CLI** | 无 | 0 | 0 | — | 过去 24h 无活动 |
| **OpenCode** | v2.4.1 | 10（+2 关闭） | 10 | #8689 从 AI 消息分叉（16 评论/26👍） | 滚动体验 PR 密集 |
| **Pi** | 无 | 10 | 10（8 关闭） | #10956 缓存预热失效（16 评论） | 修复型活动为主 |
| **Qwen Code** | 无（nightly 失败记录） | 10（+4 补充） | 10 | #17045 1.0 内核合入（24 评论） | 架构重构期 |
| **DeepSeek TUI** | v0.10.4 hotfix | 10（合并多条审计单） | 10 | #6970 `/undo` 严重 bug（OPEN） | 审计驱动清理 |

**关键对比**：Gemini CLI 与 OpenAI Codex 处于"高发布频率 + 高缺陷并发"状态；Claude Code 与 Copilot CLI 的 PR 通道明显收窄（分别 2 条 0 合入、1 条关闭），社区补位意愿存在但合入路径受限。

## 3. 共同关注的功能方向

| 方向 | 涉及工具 | 具体诉求 |
|---|---|---|
| **会话生命周期与可恢复性** | Claude Code、Copilot CLI、OpenCode、Qwen Code、Pi | 会话交接/连续性（CC #11455）、崩溃后锁文件残留致无法打开（Copilot #4805）、超大会话无法索引（Qwen #13113）、永久删除会话（Pi #11026） |
| **上下文压缩与长会话成本** | Pi、Qwen Code、OpenCode | 压缩摘要膨胀至 164k 字符（Pi #12242）、压缩重复计数多算 20K（Qwen #15486）、TTFT 随 prompt 增长（OpenCode #65966） |
| **子代理可观测性与可信度** | Gemini CLI、OpenCode、Qwen Code、Copilot CLI | 触达 MAX_TURNS 仍报成功（Gemini #22323）、子代理实际模型不可见（OpenCode #58809）、用量按 agent 归因（Copilot 发布项） |
| **安全边界与静默外泄** | Claude Code、Gemini CLI、Qwen Code、OpenCode | UA 头泄露邮箱（CC #107757）、API key 明文落盘（Qwen #18165）、OTLP 默认采集 prompt（CC #100240）、重定向绕过 shell 权限检查（OpenCode #66060） |
| **挂起与缺失超时** | Gemini CLI、Copilot CLI、Pi、OpenCode | web 搜索/MCP OAuth 无超时（Gemini #30415/#30443）、非交互模式权限请求永久挂起（Copilot #5381）、MCP SSE 性能退化（Pi #12224） |
| **Windows / WSL 跨平台质量** | Claude Code、OpenAI Codex、Copilot CLI、DeepSeek TUI、Pi | hook 进程卡死（CC #77078）、MSIX 更新死循环（Codex #38843）、锁文件权限阻塞（Copilot #5255）、WSL 误用 Windows 安装（Pi #12457）、Ctrl+V 双粘贴（DeepSeek #7487） |
| **订阅/额度策略** | OpenAI Codex、OpenCode | 额度分离争议（Codex #58530，62👍）、订阅共享额度误报（OpenCode #62529） |

## 4. 差异化定位分析

- **Claude Code —— 企业托管优先**：v2.1.331 同时覆盖 Bedrock、Google Cloud Agent Platform、Microsoft Foundry 与 AWS，并新增 `oidc.groups_jsonpath`，技术路线明确指向多云企业网关；但隐私默认值争议（811👍）显示其在"个人可控"上承压。
- **OpenAI Codex —— 桌面端 + 远程控制**：围绕 iOS/macOS/Windows 客户端、Remote Control 与 Scheduled tasks 构建跨设备协作；问题是回归高度绑定版本号，桌面更新链路稳定性成为短板。
- **Gemini CLI —— 子代理与协议深度**：发布节奏最密（含 nightly），A2A 服务端认证与 AST 感知工具 EPIC 显示其走"协议标准化 + 代码理解深度"路线，但子代理成熟度仍是主要拖累。
- **GitHub Copilot CLI —— 自动化与 CI 场景**：`-p` 非交互模式、subagent 用量归因、Assisted Permissions 容错，目标用户偏向流水线集成；MCP 认证与锁文件问题最集中。
- **OpenCode —— 桌面 IDE 化**：项目树/worktree/Git 历史诉求（#65977）与大量滚动/时间线修复 PR，显示其从 TUI 向完整 IDE 演进，`opencode-go` 亦暴露自建推理路由。
- **Qwen Code —— 内核重构 + 自托管服务**：1.0 Preview 事件驱动内核（24 评论）与 `qwen serve`/Web Shell 可扩展性并行推进，Managed Agent 的 Action parking 是独特方向。
- **Pi —— SDK/嵌入式基础设施**：RPC、错误元数据契约（#11071）、provider 目录维护（新增六家）与嵌入式 auth 路径问题，使用者更多把它当库而非终端工具。
- **DeepSeek TUI —— 审计驱动的稳健性路线**：R1–R19 系统性缺陷清理 + 回归测试为核心工作量，附带第三方 gateway descriptor 生态，Windows 测试是发布闸门。
- **Kimi Code CLI —— 今日静默**，无法从数据判断定位。

## 5. 社区热度与成熟度

- **热度最高**：Claude Code（单条 Issue 811👍，量级远超其他）与 OpenAI Codex（订阅议题 62👍）。二者用户基数最大，但热度集中在隐私与商业政策，而非功能协作。
- **迭代最快**：Gemini CLI（一日 4 个版本）、OpenCode（发版当日即有升级失败反馈）、DeepSeek TUI（hotfix + 大批审计 PR 流转）。属于功能扩张与技术债并行阶段。
- **修复收敛型**：Pi 与 DeepSeek TUI 今日 PR 以关闭态为主，反映"先清账再发版"的节奏，成熟度信号偏正面。
- **社区协作通道受限**：Claude Code 的插件 PR #11713 未合入、Copilot CLI 仅 1 条 PR、Codex PR 多为 bot 提交——三者外部贡献路径均不清晰。
- **成熟度隐忧**：多个"已关闭"条目实为自动关闭或 no-action（Pi #4530/#4851、Claude Code 6k+ `has repro` 自动关闭争议），关闭率不等于修复率，需谨慎解读。

## 6. 值得关注的趋势信号

1. **"静默失败"正在取代"功能缺失"成为首要投诉**：缓存预热不触发、MCP 工具无声消失、key 命令失败仍显示绿色已配置、子代理误报成功——多个社区独立提出同一诉求：**失败必须可见且带原因**。对开发者的含义是，评估工具时应优先测试错误路径而非成功路径。
2. **权限语义一致性成为信任基石**：Full access UI 消失但会话仍受限、Browser Use 策略无法验证、永久权限不持久化、自动化限制与文档冲突。企业采购决策中，"权限是否如 UI 所示生效"已与模型能力同等重要。
3. **超时与中止机制是系统性缺口**：Gemini 的 web 搜索/MCP OAuth、Copilot 的非交互权限、Pi 的大事件解析，指向同一工程缺陷——异步调用普遍缺乏 signal 传递。这是评估工具 CI 可用性的高性价比检查点。
4. **上下文成本进入可量化阶段**：压缩摘要从 17k 膨胀到 164k、TTFT 随 prompt 线性增长、缓存预热失效 507 次决策事件——长会话的经济性正从"感觉慢"变成可度量的数字，值得在选型时纳入基准。
5. **子代理从"能跑"转向"可审计"**：轨迹可视化、`/bug` 上下文、按 agent 归因用量、实际生效模型可见性，四家社区同步提出。多 agent 编排的价值兑现取决于可观测性，而非数量。
6. **企业治理能力成为新分层线**：OIDC 分组、A2A bearer token、扩展内容安装确认、连接令牌、沙箱策略下发，同日多点推进。个人开发者可关注这些能力是否向下开放，企业则应把"策略可下发、内容可脱敏"列为硬性评估项。
7. **平台质量不均持续存在**：Windows/WSL 在五个工具中集中爆发且多为 `has repro`，说明修复成本明确但排期不明。跨平台团队的选型应要求目标平台的专项测试证据，而非"支持 Windows"的声明。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告（数据截止 2026-11-24）

> 数据说明：PR 列表的评论数字段均为 `undefined`，无法据此排序。以下"排行"以 Issues 中的实际评论数、PR 更新活跃度与修复重要性为依据，不虚构评论数。

---

## 1. 热门 Skills 排行（关注度最高的 PR/Skill 相关条目）

**① skill-creator 系列修复（多 PR 并行）**
- PR #1298（OPEN）：隔离 trigger 评测，修复 Windows 下 subprocess 管道失败与运行时错误被误判为"未触发"。作者 MartinCajiao，更新至 2026-09-16。
- PR #1997（OPEN）：`parse_skill_md` 错误解析 YAML frontmatter 标量，导致评测与描述优化拿到与 SKILL.md 不一致的元数据。作者 BichengWang。
- PR #1681（OPEN）：`package_skill.py` 无法作为独立脚本直接运行（ModuleNotFoundError）。
- 功能：Skill 创建/打包/评测工具链。讨论热点：**trigger 评测可靠性**，与 Issue #556、#1352 直接呼应。
- 链接：anthropics/skills PR #1298 / #1997 / #1681

**② mcp-builder：适配 mcp>=2**
- PR #1742（OPEN）：`streamablehttp_client` 更名为 `streamable_http_client`，自定义 headers 需经 `create_mcp_http_client` / `http_client` 配置，而非直接 kwarg。Fixes #1668。作者 Kuldeeep18。
- 链接：anthropics/skills PR #1742

**③ document-typography（新增 Skill）**
- PR #514（OPEN）：对生成文档做排版质控——孤立词换行、标题滞留页底（widow）、编号错位。作者 PGTBoos，创建于 2026-03-04。
- 链接：anthropics/skills PR #514

**④ pyxel（复古游戏开发 Skill）**
- PR #525（OPEN）：指导创建、调试、验证 Python 复古游戏，含 headless 输入驱动运行与逐帧检查。作者 kitao，更新至 2026-11-01，生命周期长、持续维护。
- 链接：anthropics/skills PR #525

**⑤ md2video-audio（新增 Skill）**
- PR #1703（OPEN）：把 Markdown 编译为带拟真人配音的 MP4，宣称零成本。作者 70v-Yoyo。
- 链接：anthropics/skills PR #1703

**⑥ notion-spec-to-implementation + quantitative-resume-auditor（双 Skill 打包）**
- PR #1245（OPEN）：将产品/技术 spec 拆解为 Notion 可执行任务（含验收标准）。作者 mrdesouzaphd-cmyk，更新至 2026-10-15。
- 链接：anthropics/skills PR #1245

**⑦ docx / xlsx / pptx 文档工具修复群**
- PR #1792（docx）：LibreOffice 超时须报错而非报成功，并校验输出无 `w:ins`/`w:del` 修订标记。
- PR #1734（docx）：检测孤立评论。
- PR #2019（xlsx）：解析工作表级 defined names 与别名，修复 `external_links_at_risk` 漏报（Fixes #2013）。
- PR #1975（pptx）：`--cols` < 1 时在 argparse 阶段报错。
- 链接：anthropics/skills PR #1792 / #1734 / #2019 / #1975

**⑧ webapp-testing 健壮性修复**
- PR #1980（OPEN）：移除 `with_server.py` 中的 `shell=True`，消除命令注入面。作者 Pcmhacker-piro。
- PR #1976（OPEN）：`element_discovery.py` 中 textarea/select 被误归类为 text。作者 gerardrecinto。
- 链接：anthropics/skills PR #1980 / #1976

---

## 2. 社区需求趋势（来自 Issues）

| 方向 | 代表 Issue | 说明 |
|---|---|---|
| **信任边界与安全** | #492（46 评论，OPEN） | 社区 Skill 以 `anthropic/` 命名空间分发，冒充官方，构成提权风险。讨论量最高。 |
| **评测工具正确性** | #556（13 评论）、#1352（6 评论） | `run_eval.py` 的 `claude -p` 触发率为 0%；并行 worker 交叉匹配 skill UUID 导致假阴性。属工具自身缺陷而非新 Skill 需求。 |
| **组织级共享与分发** | #228（17 评论，👍8） | 期望 Claude.ai 内组织级 Skill 库，替代手动下载 `.skill` 文件经 Slack 传递再上传。 |
| **上下文开销控制** | #1487（5 评论） | `claude-api` 单次工具调用注入约 156k tokens，耗尽上下文窗口。 |
| **Skill 描述质量** | #2064（5 评论） | `theme-factory` 描述只讲"做什么"不讲"何时用"，影响触发。与 skill-creator 最佳实践讨论（#202，已关闭）同源。 |
| **状态/记忆管理** | #1329（10 评论） | 提议 `compact-memory`，用符号化记法压缩长时 agent 的状态。 |
| **质量门禁与治理** | #1385（7 评论）、#412（已关闭） | 提议三段式推理质量门禁（预校准→对抗审查→交付验证）及 agent 治理模式（策略执行、威胁检测、审计）。 |
| **文档工具正确性** | #2018、#1868 | docx 合并 run 时丢失命名空间声明写出非法 XML；渐变背景插值比错误永不出 `bottom_color`。 |

其他：Issue #1143（账户改邮箱防工作区数据丢失，👍20）与 Issue #62（Skill 消失）属平台层问题，非 Skill 生态本身，但关注度高。

---

## 3. 高潜力待合并 Skills

以下均处于 **OPEN**，更新活跃、指向明确缺陷修复，落地可能性较高：

1. **PR #1997** — skill-creator YAML 解析修正（更新 2026-10-19）
2. **PR #1681** — skill-creator 脚本独立可执行（更新 2026-11-19，最新）
3. **PR #1742** — mcp-builder 适配 mcp>=2（更新 2026-10-08，对应已存在的 #1668）
4. **PR #2019** — xlsx 外部链接风险漏报（更新 2026-11-03，Fixes #2013）
5. **PR #1950** — claude-api Python `pause_turn` 文档过时，SDK 1.1.0 已支持自动恢复（更新 2026-11-10）
6. **PR #1980** — webapp-testing 去除 `shell=True`（安全类，更新 2026-11-01）
7. **PR #2108** — 文档 Skills 快照状态与同步关系说明（更新 2026-11-03，纯文档）

注意：PR #514、#525 创建于 2026-03，仍为 OPEN，属长期未合但仍获维护的新 Skill，落地时间不确定。

---

## 4. Skills 生态洞察

**社区当前最集中的诉求不是"要更多 Skill"，而是"要 Skill 工具链本身可信"——触发评测要准、分发要可验证、上下文开销要可控；其次才是安全边界与组织级共享的建制化。**

---

*补充风险提示：Issues #492 与 #1487 分别指向信任边界与上下文耗尽，二者对生态可信度影响最大，建议优先跟踪。*

---

# Claude Code 社区动态日报 · 2026-11-24

> 数据来源：github.com/anthropics/claude-code（过去 24 小时更新）

---

## 1. 今日速览

今日发布 **v2.1.331**，将 Code Mode 扩展到 Amazon Bedrock、Google Cloud Agent Platform、Microsoft Foundry 与 AWS 上的 Claude Platform，并为 Claude apps gateway 新增 OIDC 分组读取能力。社区侧最受关注的是 **User-Agent 泄露用户邮箱的隐私问题**（#107757，124 条评论、811 👍），以及"6k+ 带 `has repro` 标签的 Issue 自 2026-03 起被自动关闭"的流程争议（#87647）。此外，两条 PR 均被关闭，其中插件类 PR #11713 未能合入。

---

## 2. 版本发布

**v2.1.331**
- 终端会话新增 **Code Mode** 支持，覆盖 Amazon Bedrock、Google Cloud 的 Agent Platform、Microsoft Foundry，以及 AWS 上的 Claude Platform。
- Claude apps gateway 新增 `oidc.groups_jsonpath`，用于从对象列表的匹配条目中读取用户组（原文描述在此处截断，仅能确认该字段用于组信息提取）。
- 链接：anthropics/claude-code Releases v2.1.331

---

## 3. 社区热点 Issues（10 条）

1. **#107757 · User-Agent 头泄露隐私（OPEN，124 评论 / 811 👍）**
   用户称 Claude Code 在未经许可执行网页搜索时，通过 `User-Agent` 请求头把邮箱泄露给第三方，导致收到大量诈骗邮件。**今日热度最高**，涉及 `area:security`，评论量与点赞数远超其他条目，说明隐私边界问题是当前社区最尖锐的诉求。
   https://github.com/anthropics/claude-code/issues/107757

2. **#87647 · 6k+ `has repro` Issue 被自动关闭（OPEN，23 评论 / 156 👍）**
   指控自 2026 年 3 月起大量带复现标签的缺陷被流水线自动关闭。触及**Issue 治理与信任**，与 #96323 中"生命周期自动化关闭后要求重开"的情况互为印证。
   https://github.com/anthropics/claude-code/issues/87647

3. **#11455 · 会话交接 / 连续性支持（OPEN，46 评论 / 27 👍）**
   2025-11 提出、至今仍在活跃讨论的长期功能请求，面向 CLI。反映多会话工作流下**上下文延续**是结构性缺口。
   https://github.com/anthropics/claude-code/issues/11455

4. **#49282 · macOS 每次更新都重新注册应用权限（OPEN，22 评论 / 48 👍）**
   根因是版本化安装路径而非代码签名，导致每次升级都要重授隐私与安全权限。**安装体验**类高频摩擦。
   https://github.com/anthropics/claude-code/issues/49282

5. **#56978 · 会话中途触达用量上限的优雅处理（OPEN，18 评论）**
   Max 套餐 + 1M 上下文模型下，触限后会话被 429 直接锁死。属 `area:cost` 核心痛点，影响长任务可用性。
   https://github.com/anthropics/claude-code/issues/56978

6. **#61172 · `/clear` 继承旧会话名导致 `/resume` 重名（OPEN，18 评论 / 35 👍）**
   已标记 `has repro` 与 `reproduced`，属可复现的 CLI 行为缺陷，直接影响会话检索。
   https://github.com/anthropics/claude-code/issues/61172

7. **#94251 · 2.1.270 起 transcript JSONL 丢失工具调用前的助手文本（OPEN，标注 regression）**
   终端显示正常但落盘缺失，威胁**审计、回放与下游工具链**。回归标签使其优先级更高。
   https://github.com/anthropics/claude-code/issues/94251

8. **#77078 · Windows 上 hook 进程处于 SUSPENDED 状态，卡住回合 30–60 分钟（OPEN，`has repro`）**
   Python hook + 短 timeout 场景可复现，是 `area:hooks` 上影响面较大的稳定性问题。
   https://github.com/anthropics/claude-code/issues/77078

9. **#100650 · 连接 Remote Control 时自动续跑不生效（OPEN，`has repro`）**
   `autoContinueAtUsageLimit: true` 在 Remote Control 场景下从不触发，与 #56978 同属用量上限处理链路。
   https://github.com/anthropics/claude-code/issues/100650

10. **#100240 · Cowork OpenTelemetry 的组织级内容采集策略（OPEN，9 👍）**
    指出 OTLP 导出默认携带 prompt、模型响应与工具参数，唯一开关是设备级 MDM key，无法作为组织策略。**企业合规**方向的重要缺口。
    https://github.com/anthropics/claude-code/issues/100240

---

## 4. 重要 PR 进展（仅 2 条，均已关闭）

> 过去 24 小时内更新的 PR 共 2 条，**无新合入**。以下如实列出，避免夸大。

1. **#45553 · resolve duplicate IPs（CLOSED，johnkohler00）**
   无 PR 描述内容，创建于 2026-04-09，于 2026-11-24 关闭。
   https://github.com/anthropics/claude-code/pull/45553

2. **#11713 · feat: Add developer-utilities plugin（CLOSED，adamkwhite）**
   新增 `developer-utilities` 插件，提供 5 个命令以补足社区需求的原生缺失能力；PR 说明中明确标注会话管理类命令（`/list-sessions`、`/label-session` 等）为另一部分内容。创建于 2025-11-15，最后更新 2026-11-23，状态为关闭。
   https://github.com/anthropics/claude-code/pull/11713

> 说明：数据中仅提供 2 条 PR，无法凑足 10 条，此处不做补充。

---

## 5. 功能需求趋势

- **会话生命周期管理**：#11455（交接/连续性）、#61172（`/clear` 命名）、#86736（重命名不同步至跨会话注册表）、#102329（side 会话不再归属父会话）、#96323（会话跟随项目目录迁移）——**最密集的方向**，核心是会话身份与可检索性。
- **用量与成本控制**：#56978、#100650，均指向触达限额时的会话不可用。
- **隐私与安全边界**：#107757（User-Agent 泄露）、#100240（OTLP 内容采集策略）、#104216（`sec-default` 跳过提示无法静音）——从个人隐私延伸到企业策略可控性。
- **企业 / 托管网关能力**：v2.1.331 的 Code Mode 多云落地与 `oidc.groups_jsonpath`，与 #100240 的组织级治理诉求同向。
- **IDE 与桌面端一致性**：#90471（VS Code webview 无法渲染 `advisor_tool_result`）、#92051（Desktop WSL 缺少 `ccd_session` 宿主 MCP）、#103436（Code 标签页缺少颜色区分）。
- **Windows / WSL 稳定性**：#77078（hook 挂起）、#69234（Alt+V 图片粘贴整会话失效）、#111182（agent view 会话中 Esc/Ctrl+C 失效）、#92051——跨平台问题在 Issue 列表中占比显著。

---

## 6. 开发者关注点

- **未经同意的数据外泄不可接受**：#107757 的高赞说明开发者对"默认开启、无法关闭"的行为容忍度极低，安全默认值需要显式可选。
- **Issue 流程的可信度**：自动关闭带复现标签的缺陷（#87647）与"重开新 Issue"的处理方式（#96323）正在消耗贡献者意愿。
- **多会话并行的原生支持不足**：命名、归属、颜色、跨会话注册表、目录迁移等零散缺陷，实为同一底层需求的不同表现。
- **限额中断 = 工作中断**：429 锁死会话被反复提及，期望的是可恢复、可续跑的降级路径而非硬失败。
- **跨平台质量不均**：Windows/WSL 下 hook、快捷键、粘贴、会话挂载等问题集中，且多为 `has repro`，修复成本明确但排期不明。
- **社区补位意愿存在但合入通道有限**：插件类 PR #11713 携带明确社区需求清单却未合入，提示外部贡献路径需要更清晰的分诊反馈。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报（2026-11-24）

## 今日速览

今日主要动态集中在版本发布与回归问题修复：`rust-v0.172.0` 带来终端对话链接跳转、斜杠命令 Tab 补全等体验改进，同时多个 alpha 版本发布。社区侧，关于 Plus 订阅 ChatGPT High 与 Codex/Work 额度分离的议题持续升温（38 条评论、62 赞），iOS、macOS 与 Windows 桌面端出现多起会话列表、权限与更新相关的回归问题。

## 版本发布

- **rust-v0.172.0**：新增从搜索结果与转录中跟随线程链接，在终端打开已保存对话与嵌套代理的功能（#62332）；支持按 `Tab` 补全受支持的斜杠命令参数，例如 `/mcp lo` 补全为 `/mcp login`（#62343）；支持在任务组之间跳转。
- **rust-v0.174.0-alpha.1 / v0.173.0-alpha.5 / v0.172.0-alpha.2.1 / v0.171.0-alpha.13.2**：均为预发布版本，Release 说明较简略。

## 社区热点 Issues

1. **[#58530](https://github.com/openai/codex/issues/58530) 请保留 Plus 下独立的 ChatGPT High 与 Codex/Work 额度**（OPEN，增强，38 评论，62 赞）：作者称 OpenAI 已确认将于 12 月实施相关变更，讨论热度最高，反映用户对订阅权益调整的强烈关注。
2. **[#60778](https://github.com/openai/codex/issues/60778) iOS Codex 显示“No tasks yet”，但已有对话仍可通过搜索访问**（OPEN，Bug，33 评论）：会话列表为空而搜索可见，属于明显的状态同步缺陷。
3. **[#58677](https://github.com/openai/codex/issues/58677) macOS 桌面版创建对话后“Full access”控制消失，实际会话仍受限**（OPEN，Bug，32 评论）：权限 UI 与生效权限不一致，涉及安全预期。
4. **[#59546](https://github.com/openai/codex/issues/59546) 桌面版内置自动化限制阻止对外部 Web 系统的监控任务，与 Scheduled tasks 文档冲突**（OPEN，Bug，29 评论，28 赞）：文档与行为不一致，影响自动化使用场景。
5. **[#37967](https://github.com/openai/codex/issues/37967) Remote Control 无法连接工作站上正在运行的 CLI 会话**（已关闭，增强，28 评论，38 赞）：已完成线程可用、进行中线程失败；该问题已关闭，值得关注。
6. **[#62918](https://github.com/openai/codex/issues/62918) Windows 新 Work 对话中发送按钮被禁用，重启后报“Connection for host ID local not found”**（OPEN，Bug，21 评论）：影响新会话创建的核心流程。
7. **[#38843](https://github.com/openai/codex/issues/38843) Windows MSIX 自动更新无限循环，应用可能启动为永久挂起进程**（OPEN，Bug，11 评论）：更新机制层面的阻断性问题。
8. **[#62700](https://github.com/openai/codex/issues/62700) macOS 26.1117.31558 回归：已启用的本地 skills 从斜杠菜单消失**（已关闭，Bug，11 评论，10 赞）：版本回归且已被关闭处理。
9. **[#42466](https://github.com/openai/codex/issues/42466) Browser Use 在所有网站失败：无法验证管理员强制策略**（OPEN，Bug，14 评论）：非单一域名问题，影响浏览器操作能力整体可用性。
10. **[#62832](https://github.com/openai/codex/issues/62832) macOS 26.1117.31558 将内置浏览器切换至 v11，丢失已有密码与 Cookie**（OPEN，Bug，5 评论）：原地更新导致登录状态与扩展失效。

## 重要 PR 进展

1. **[#63594](https://github.com/openai/codex/pull/63594)**（已关闭）：在 code mode 中新增可选的延迟图像生成，通过 `features.defer_image_generation` 使图像生成工具可被发现而不进入初始模型请求。
2. **[#63589](https://github.com/openai/codex/pull/63589)**（已关闭）：将 `resume --approve-for-me` 限定在初始对话，避免已加载对话忽略权限覆盖。
3. **[#63553](https://github.com/openai/codex/pull/63553)**（已关闭）：TUI 模型选择器改用当前活动线程的 provider，避免恢复的线程显示错误 provider 的模型。
4. **[#63544](https://github.com/openai/codex/pull/63544)**（已关闭）：在无显示环境的 headless Linux 上避免触发 keyring 解锁提示。
5. **[#63540](https://github.com/openai/codex/pull/63540)**（已关闭）：去重 Code Mode 输出中的 MCP 文本回退，避免同一数据重复展示。
6. **[#63537](https://github.com/openai/codex/pull/63537)**（已关闭）：空闲本地 code-mode 宿主在 5 秒后被回收。
7. **[#63533](https://github.com/openai/codex/pull/63533)**（已关闭）：通过 Responses WebSocket 握手刷新模型目录，解决服务端仅在握手中通告新 `x-models-etag` 时目录陈旧的问题。
8. **[#63532](https://github.com/openai/codex/pull/63532)**（已关闭）：允许扩展为 MCP 服务器提供按请求的认证，支持凭据刷新而无需重启会话。
9. **[#63528](https://github.com/openai/codex/pull/63528)**（已关闭）：使用作用域签名密钥校验 eval 插件归档，修复此前忽略 `eval_keys` 的问题。
10. **[#22866](https://github.com/openai/codex/pull/22866)**（OPEN）：持久化沙箱安全事件，保留线程、轮次与工具调用上下文，并写入本地 SQLite 供近期检查；作为长期开放的 PR 值得跟踪。

## 功能需求趋势

- **订阅与额度策略**：社区最关注 ChatGPT High 与 Codex/Work 额度是否独立保留（#58530）。
- **多代理与并发写入隔离**：希望自动隔离并协调多个对话/代理对同一本地项目的文件写入（#37226）。
- **远程与跨设备协作**：工作站 CLI 会话与 iOS Remote Control 的衔接（#37967），以及 Linux 端配对入口缺失（#52641）。
- **自动化与浏览器操作**：计划任务与 Browser Use 的策略一致性与可验证性（#59546、#42466、#58511）。
- **桌面端稳定性与更新体验**：Windows MSIX 更新循环（#38843）、macOS 内置浏览器升级丢失凭据（#62832）、Composer Predictions 消失（#62685）。

## 开发者关注点

- **平台回归问题集中在桌面客户端更新后**：Windows 与 macOS 多起问题（发送按钮禁用、更新循环、skills 消失、浏览器凭据丢失）均与具体版本号绑定，说明回归测试与灰度发布仍需加强。
- **权限与安全语义不一致**：Full access 控制消失、Browser Use 策略无法验证、自动化限制与文档冲突，均涉及用户对权限边界的信任。
- **会话状态同步**：iOS 任务列表为空但搜索可访问、Windows 新会话无法发送，指向本地与远端状态同步的薄弱环节。
- **订阅权益变化的沟通**：额度分离议题以高赞高评论居首，属于产品政策层面而非缺陷，但对开发者选择工具影响显著。

*注：本期数据的 PR 多由 copyberry[bot] 提交且已关闭，评论数为空，以上按合并意图与影响面筛选。*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报（2026-11-24）

## 今日速览

今日发布 4 个版本，其中 v0.71.0 正式版与 v0.71.1 补丁版落地，v0.72.0-preview.0 进入预览通道。安全方向有明显推进：A2A 服务端的 bearer token 认证与请求校验 PR 已合并，并体现在当日 nightly 版本中。社区侧，子代理（subagent）相关缺陷持续占据讨论热度，涉及 MAX_TURNS 误报成功、通用代理挂起、浏览器代理配置失效等。

## 版本发布

- **v0.72.0-preview.0**（预览）：包含 v0.70.0 变更日志、core 模块修复 `dir/**` 模式下嵌套 `.gitignore` 否定规则、CLI 的 Windows 相关修复。
  https://github.com/google-gemini/gemini-cli/releases
- **v0.71.1**（补丁）：通过 cherry-pick aafdfdf 生成的补丁版本。
  https://github.com/google-gemini/gemini-cli/releases
- **v0.71.0**（正式）：版本号从 nightly 提升为 0.71.0，并附带变更日志。
  https://github.com/google-gemini/gemini-cli/releases
- **v0.71.0-nightly.20261124**：核心变更 —— `fix(a2a-server): enforce bearer token authentication and request input validation`（PR #30420）。
  https://github.com/google-gemini/gemini-cli/releases

## 社区热点 Issues

1. **#22323 子代理 MAX_TURNS 后恢复被报告为 GOAL 成功**（P1，14 条评论）
   子代理已触及轮次上限，却返回 `status: "success"` 和 `Termination Reason: "GOAL"`，掩盖了实际中断。这类误报会影响自动化流程对结果的信任，是当前讨论最集中的缺陷。
   https://github.com/google-gemini/gemini-cli/issues/22323

2. **#21409 通用代理挂起**（P1，8 条评论，8 👍）
   一旦 CLI 转交给 generalist agent 便永久挂起，简单如创建文件夹的操作也会卡死，最长等待一小时。高赞说明影响面广，直接阻塞日常使用。
   https://github.com/google-gemini/gemini-cli/issues/21409

3. **#19873 利用模型的 bash 亲和性：零依赖 OS 沙箱与执行后意图路由**（P2，9 条评论）
   提案认为 Gemini 3 系列模型原生擅长链式调用 POSIX 工具（grep/cat/sed/awk），建议围绕这一特性重建执行环境。属于架构层面的方向性讨论。
   https://github.com/google-gemini/gemini-cli/issues/19873

4. **#21968 Gemini 不主动使用 skills 和子代理**（P2，7 条评论）
   作者反馈模型几乎不会自主调用自定义 skills 和子代理，仅在显式指令下才会触发。这直接关系到子代理体系的实际价值。
   https://github.com/google-gemini/gemini-cli/issues/21968

5. **#22745 评估 AST 感知的文件读取、搜索与代码映射**（P2 EPIC，7 条评论）
   探讨 AST 感知工具能否以单次调用精确定位方法边界、减少轮次消耗。与 #22746 联动，指向代码理解能力的系统性升级。
   https://github.com/google-gemini/gemini-cli/issues/22745

6. **#22267 浏览器代理忽略 settings.json 覆盖项**（P2，5 条评论）
   Browser Agent 完全无视全局或项目级 `settings.json` 中的 `maxTurns` 等配置，与 AgentRegistry 行为不一致，配置体系存在割裂。
   https://github.com/google-gemini/gemini-cli/issues/22267

7. **#21983 浏览器子代理在 Wayland 下失败**（P1，4 条评论）
   Linux Wayland 环境下 browser subagent 运行失败，属平台兼容性缺口。
   https://github.com/google-gemini/gemini-cli/issues/21983

8. **#24246 工具数超过 128 个时触发 400 错误**（P2，3 条评论）
   可用工具超过阈值后请求报错，期望代理能更智能地裁剪工具范围。随着 MCP 与扩展生态扩张，此问题会愈发突出。
   https://github.com/google-gemini/gemini-cli/issues/24246

9. **#22672 代理应停止或劝阻破坏性行为**（P2，3 条评论）
   模型在复杂 git 操作中可能使用 `git reset` 或 `--force`，而存在更安全的替代方案。安全护栏类需求，值得优先关注。
   https://github.com/google-gemini/gemini-cli/issues/22672

10. **#23571 模型在任意位置生成临时脚本**（P2，3 条评论）
    受限为 shell 执行后，模型倾向于在多个目录散布临时编辑脚本，给清理和提交带来额外开销。
    https://github.com/google-gemini/gemini-cli/issues/23571

（补充关注：#21763 `/bug` 报告不含子代理上下文；#22598 建议通过 `/chat share` 暴露子代理轨迹，二者共同反映子代理可观测性不足。）

## 重要 PR 进展

1. **#30420 A2A 服务端强制 Bearer Token 认证与输入校验**（已关闭/已合并，size/xl）
   从环境变量配置认证，并对 HTTP 层、任务创建及 `restore` 命令统一实施输入校验。已进入当日 nightly，是今日最重要的安全加固。
   https://github.com/google-gemini/gemini-cli/pull/30420

2. **#30415 为 web 搜索增加时限并在中止时停止重试**（P1，size/l，开放）
   针对 #29594 的挂起问题：`google_web_search` 无超时地等待模型请求，服务端持续返回可重试错误时代理会卡在该工具调用上。
   https://github.com/google-gemini/gemini-cli/pull/30415

3. **#30443 为 MCP OAuth 发现请求增加单请求超时**（size/m，开放）
   修复 #30412：`fetchProtectedResourceMetadata` 等调用未传 signal，接受连接但不响应的主机会导致请求无限挂起。
   https://github.com/google-gemini/gemini-cli/pull/30443

4. **#30441 扩展安装与更新确认覆盖全部内容**（size/xl，开放）
   安装/更新确认不再只描述 manifest 字段，而是描述扩展添加的所有内容，并在更新时对比新旧目录差异后请求确认。供应链安全相关。
   https://github.com/google-gemini/gemini-cli/pull/30441

5. **#29822 限制 total_max_matches 并澄清上下文溢出提示**（P2，size/m，help wanted）
   宽泛的 `SearchText`（grep/ripgrep）查询会撑爆上下文窗口（#17448）；在现有 100 条匹配上限、单行 2000 字符截断等防护之上进一步收紧并改善错误提示。
   https://github.com/google-gemini/gemini-cli/pull/29822

6. **#30440 v0.71.1 变更日志**（机器人生成，size/xs）
   自动生成的发布说明，对应 #18505。
   https://github.com/google-gemini/gemini-cli/pull/30440

7. **#30423 npm 依赖组批量升级（69 项）**（P1，size/xl）
   含 simple-git 4.0.2→4.1.0、@octokit/rest 等，属大规模依赖维护。
   https://github.com/google-gemini/gemini-cli/pull/30423

8. **#30433 zod 3.25.76→4.6.6**（P2，已关闭）
   主版本跨越大版本升级，需关注兼容性影响。
   https://github.com/google-gemini/gemini-cli/pull/30433

9. **#30431 扩展示例 mcp-server 的 zod 3.22.4→4.6.6**（P2，已关闭）
   与上条呼应的示例工程依赖同步。
   https://github.com/google-gemini/gemini-cli/pull/30431

10. **#30436 vitest 及 @vitest/mocker、@vitest/coverage-v8 升级**（size/xl，已关闭）
    测试工具链整体升级至 5.1.1 系。
    https://github.com/google-gemini/gemini-cli/pull/30436

## 功能需求趋势

- **子代理体系成熟化**：从 Sprint 规划（#20195）、仓库内示例代理整理（#18283），到轨迹可视化（#22598）与 `/bug` 上下文补全（#21763），社区在推动子代理从可用走向可观测、可评估。
- **代码理解的 AST 化**：EPIC #22745 与 #22746 构成一条清晰路线——用 AST 感知的读取、搜索、映射工具减少轮次、提升精度，并可能以 tilth 或 glyph 作为起点。
- **原生 bash 工作流与沙箱**：#19873 主张顺应模型对 POSIX 工具链的偏好，配套零依赖 OS 沙箱，而非与之对抗。
- **安全性加固**：A2A bearer token（#30420）、扩展内容确认（#30441）、破坏性命令劝阻（#22672）、MCP OAuth 超时（#30443）共同构成多层面的安全诉求。
- **平台兼容与配置一致性**：Wayland 支持（#21983）、`settings.json` 覆盖生效（#22267）、Windows 路径相关修复（v0.72.0-preview.0）。
- **工具规模治理**：工具数超限报 400（#24246）与搜索结果上限（#29822）反映了扩展生态膨胀带来的上下文压力。

## 开发者关注点

- **挂起类缺陷是首要痛点**：通用代理无限挂起（#21409）、web 搜索无超时（#30415）、MCP OAuth 无超时（#30443）、vite 交互提示卡死（#22465）反复出现，说明缺失超时与中止机制是系统性问题。
- **状态与诊断不可信**：子代理触达轮次上限仍报告成功（#22323）、`/bug` 缺失子代理上下文（#21763），让开发者难以定位真实失败原因。
- **模型行为偏离预期**：不主动调用 skills/子代理（#21968）、在随机位置生成临时脚本（#23571）、在可安全替代时使用 `git reset`/`--force`（#22672），共同指向代理决策策略需要更明确的约束与引导。
- **配置与行为不一致**：Browser Agent 忽略 `settings.json`（#22267）与其锁冲突 fail-fast 策略（#22232）并存，配置层与运行时的契约需要统一。

---
以上内容均基于所提供 GitHub 数据整理，未补充外部信息。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报（2026-11-24）

## 1. 今日速览

今日发布 v1.0.115-8，重点改进 subagent 用量归因与 Assisted Permissions 的容错（首个评审模型失败可切换备用模型）。社区侧，MCP 相关的认证、会话与 Windows 权限问题持续占据议题中心，多个长期 OPEN 的会话可靠性缺陷（锁文件残留、MCP 连接被丢弃）仍在等待修复。同时有多条 CLOSED Issue 更新，涵盖非交互模式、插件缓存与权限持久化。

## 2. 版本发布

**v1.0.115-8**
- `--usage-output-file` 现按配置的 subagent 名称而非调用 ID 归组用量，并报告每个 subagent 的启动次数，便于统计多 agent 调用成本。
- Assisted Permissions 在首个评审模型卡住或失败时可切换到另一个评审模型，减少不必要的审批提示。

## 3. 社区热点 Issues（10 条）

1. **#2243 [OPEN] Worktrees 应默认关闭** — 👍21，为今日点赞最高。用户反馈会话被交给 CLI 后产生了数千行"有用但无法合并"的代码，主张 worktree 仅应由人工显式启用。
   https://github.com/github/copilot-cli/issues/2243

2. **#4203 [OPEN] 远程 MCP OAuth 令牌过期后强制交互登录** — 👍6。缓存 access token 过期时未使用 refresh_token 静默续期，而是丢弃该服务器工具并要求重新交互登录，影响自动化场景。
   https://github.com/github/copilot-cli/issues/4203

3. **#4805 [OPEN] 崩溃主机遗留 `inuse.<pid>.lock` 导致会话无法恢复** — 会话数据本身完好，仅因陈旧锁文件从未被回收而永久无法打开，属高影响可靠性问题。
   https://github.com/github/copilot-cli/issues/4805

4. **#4920 [OPEN] 启动时 session-ID 切换导致本地 stdio MCP 服务器被静默丢弃** — `--resume` 与 `/new` 均可复现，配置的 MCP 工具会无声消失。
   https://github.com/github/copilot-cli/issues/4920

5. **#5559 [OPEN] macOS 上 TLS 1.3 自 1.0.93-0 预发布起损坏** — 影响连接 Jenkins MCP Server 等 HTTPS 端点，属近期引入的网络回归，需优先关注。
   https://github.com/github/copilot-cli/issues/5559

6. **#5381 [OPEN] 非交互模式下扩展工具的权限请求永久挂起** — `copilot -p` 中扩展注册的工具触发无人应答的权限请求，且 `--allow-tool` 无法指定扩展工具，直接阻塞 CI 自动化。
   https://github.com/github/copilot-cli/issues/5381

7. **#5255 [OPEN] Windows 管理员会话创建的 `.mcp-writer.lock` 阻塞普通会话** — 提权会话先创建锁文件后，所有非提权会话的 MCP 服务器启动失败（os_error=5）。
   https://github.com/github/copilot-cli/issues/5255

8. **#1573 [CLOSED] 屏幕阅读器用户在 CLI 中编辑文本存在问题** — 盲人用户配合 NVDA 反馈编辑体验缺陷，涉及无障碍，值得跟进修复方式。
   https://github.com/github/copilot-cli/issues/1573

9. **#3253 [CLOSED] 永久允许的 URL 权限不跨会话持久化** — 标记为"永久"的权限重启后失效，反复打断工作流。
   https://github.com/github/copilot-cli/issues/3253

10. **#5171 [CLOSED] Windows 关闭 NumLock 时小键盘导航与 Delete 被忽略** — 键盘输入回归，已关闭，可参考修复版本。
    https://github.com/github/copilot-cli/issues/5171

其余值得留意：**#5100**（120s host-ack 超时后会话事件投递永久失败，已关闭）、**#2482**（`task_complete` 未写入输出导致结果丢失，已关闭）、**#4513**（插件市场缓存忽略 `ref`，多项目共享缓存冲突，已关闭）、**#5059**（`subagentStart` 钩子未暴露 agentId，已关闭）。

## 4. 重要 PR 进展

过去 24 小时内仓库仅更新 **1 条** PR，无法凑足 10 条，据实列出：

1. **#5554 [CLOSED] 为 CLI 容器增加可选的连接令牌生成** — 本地 SDK 客户端在会话尚未具备 GitHub 凭据时也需要共享密钥才能连接 headless CLI。该改动允许通过 `COPILOT_CONNECTION_TOKEN_GE...` 环境变量生成令牌，使开发者无需先在主机上手动创建密钥即可试用服务，降低 headless/容器化接入门槛。
   https://github.com/github/copilot-cli/pull/5554

## 5. 功能需求趋势

- **MCP 生态健壮性**：认证续期、连接生命周期、跨平台锁文件与协议能力声明（#5555 声明 Tasks 扩展却拒绝 CreateTaskResult）构成最集中的问题簇。
- **会话可靠性**：崩溃恢复、锁回收、事件投递与中断语义（#4863 SIGINT 后模型工作仍在继续）是高频方向。
- **自动化/非交互模式**：`copilot -p` 的权限处理、输出完整性与扩展工具支持是 CI 场景的主要缺口。
- **可观测性与成本归因**：subagent 用量统计（本次发布）与 OTel 上报准确性受到关注。
- **企业治理与默认安全**：沙箱策略下发（#4446）、worktree 默认关闭、权限持久化体现对可控性的诉求。
- **无障碍与平台一致性**：屏幕阅读器、Windows 键盘与终端渲染问题持续出现。

## 6. 开发者关注点

- **"静默失败"最伤信任**：MCP 工具无声消失、会话无法重开、权限挂起无提示，均缺乏明确错误反馈。
- **跨平台差异明显**：Windows（锁文件权限、NumLock、终端噪音）与 macOS（TLS 1.3 回归）问题集中，需平台专项测试。
- **自动化的确定性**：非交互模式中断后仍继续执行、结果丢失、无法预先授权扩展工具，直接影响无人值守流程。
- **默认行为争议**：worktree 自动创建的副作用（点赞最高）反映开发者希望危险或侵入性操作默认关闭、由人显式开启。
- **状态持久化缺口**：永久权限与插件缓存 `ref` 处理不一致，导致跨会话、跨项目行为不可预期。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 · 2026-11-24

## 今日速览

v2.4.1 发布，修复了 macOS 12 上因旧版 SQLite 导致的助手消息无法保存问题，并让仅通过配置启用的 Provider 正确展示其模型。升级链路出现新问题：Ubuntu 26.04 上 v2.3.2 → v2.4.1 的安装器执行失败，成为今日评论最多的新 Issue。桌面端时间线/滚动体验成为 PR 密集修复区，社区贡献者 Hona 一日内提交多个与阅读位置保持相关的修复。

## 版本发布

**v2.4.1**
- **macOS 12 会话修复**：OpenCode 在 macOS 12 自带的旧版 SQLite 上重新可以保存助手消息（[#65771](https://github.com/anomalyco/opencode/pull/65771)）。
- **仅配置的 Provider 显示模型**：仅在配置中设置、未走常规流程的 Provider（如 Oll…）现在能正确列出其可用模型。

## 社区热点 Issues

1. **[#8689](https://github.com/anomalyco/opencode/issues/8689) 支持从 AI 消息回退/分叉（OPEN，16 评论，👍26）** — 目前只能从用户消息创建分支，社区希望扩展到助手消息。今日讨论度最高、点赞最多的功能请求，反映对对话树编辑能力的强烈需求。

2. **[#62529](https://github.com/anomalyco/opencode/issues/62529) ChatGPT 订阅共享额度误报（OPEN，13 评论，👍7）** — 2.2.5 在额度充足时仍返回 `subscription_sharing_usage_limit_exceeded`，简单的 “Hello” 也被拒绝。影响付费用户可用性，属高优先级账户/计费类问题。

3. **[#65978](https://github.com/anomalyco/opencode/issues/65978) Ubuntu 26.04 升级安装器失败（OPEN，9 评论）** — v2.3.2 → v2.4.1 期间 curl 安装流程报错。恰逢今日发版，属发布质量问题，需尽快跟进。

4. **[#65993](https://github.com/anomalyco/opencode/issues/65993) TUI 已删除队列消息仍渲染、`session_inbox` 不排空（OPEN，6 评论）** — 队列条目仅存于客户端，服务端无法清理，须重启才能消除。TUI 状态一致性缺陷。

5. **[#65932](https://github.com/anomalyco/opencode/issues/65932) `run --standalone` 约 10% 会话未注册 MCP 服务（OPEN，6 评论）** — 无头运行下整个会话的 MCP 工具均不可用，对 CI/自动化场景影响显著。

6. **[#35341](https://github.com/anomalyco/opencode/issues/35341) 从 Claude Code 兼容 skills 自动注册 `/` 命令（OPEN，6 评论，👍11）** — 降低跨工具迁移成本，社区点赞较高，指向与 Claude Code 生态的互操作。

7. **[#65977](https://github.com/anomalyco/opencode/issues/65977) 桌面端 IDE 级项目树 / worktree 管理 / Git 历史（OPEN，4 评论）** — 对标 IntelliJ Community，把三个诉求合并为一个目标。体现桌面端向完整 IDE 演进的诉求。

8. **[#65966](https://github.com/anomalyco/opencode/issues/65966) `opencode-go` TTFT 随 prompt 长度增长（CLOSED，4 评论）** — 18k 提示约 6 秒、90k 冷启 19 秒，流量被路由至 remote-IAD。推理性能与路由策略问题，已关闭待观察。

9. **[#58809](https://github.com/anomalyco/opencode/issues/58809) 子代理显示实际模型与推理强度（OPEN，3 评论）** — 多子代理委派时缺少可观测性，用户难以判断实际生效配置。

10. **[#58141](https://github.com/anomalyco/opencode/issues/58141) 后台服务为单用户单例，首启动环境变量污染所有 profile（OPEN，3 评论，👍2）** — `OPENCODE_CONFIG_DIR` / `XDG_DATA_HOME` 隔离失效，影响多配置目录用户。

> 另注：#32708（自定义项目图标保存无效）与 #62628（plan 代理自动压缩后无限循环）今日已关闭。

## 重要 PR 进展

1. **[#66060](https://github.com/anomalyco/opencode/pull/66060) 修复：重定向的目录切换命令仍纳入 shell 权限检查** — 防止 `cd`/`pushd`/`Set-Location` 搭配重定向绕过权限，属安全相关修复（Closes #66053）。

2. **[#66059](https://github.com/anomalyco/opencode/pull/66059) 修复：限定 Home 全局会话过滤器范围** — 选择非 Git 项目时不再混入其他会话（Refs #65362）。

3. **[#63097](https://github.com/anomalyco/opencode/pull/63097) 修复 ACP：命令流式输出保留至执行器返回** — 对应 #53914，解决 Zed 等 ACP 客户端长命令后续执行周期被提前截断。

4. **[#66025](https://github.com/anomalyco/opencode/pull/66025) 修复：回合恢复工作时已完成的回复不再位移** — 解决回复下移 28px（新时间线 31px）的抖动。

5. **[#66054](https://github.com/anomalyco/opencode/pull/66054) 修复：行延迟渲染或重新换行时保持阅读位置** — 处理 diff、Markdown、图表等晚到内容造成的跳动。

6. **[#66014](https://github.com/anomalyco/opencode/pull/66014) 修复：加载更早历史时新时间线行保持稳定** — 消除上方插入历史导致的 16/20/32px 位移。

7. **[#66017](https://github.com/anomalyco/opencode/pull/66017) 修复：时间线导航落在会话头与输入框之间** — 修正分页、查找、消息链接定位偏移。

8. **[#66033](https://github.com/anomalyco/opencode/pull/66033) 修复：在读者到达顶部前预加载更早历史** — 分页 150–300ms 延迟导致滚动卡顿，改为提前加载。

9. **[#66056](https://github.com/anomalyco/opencode/pull/66056) 修复：展开家目录相对权限规则中的 `~\`（已关闭）** — 修正 `expandHome` 对 Windows 风格路径的处理（Closes #63535，与 #63536 重复）。

10. **[#58705](https://github.com/anomalyco/opencode/pull/58705) 文档：生态新增 opencode-sesh、opencode-ghost、opencode-quill** — 插件生态表格扩充；另有 [#66049](https://github.com/anomalyco/opencode/pull/66049) 新增 Novada 插件条目。

## 功能需求趋势

- **对话可编辑性**：从 AI 消息回退/分叉（#8689，👍26）是今日最强单一诉求，指向对话树与分支管理。
- **桌面端向 IDE 靠拢**：项目树、worktree 管理、Git 历史（#65977）、子代理可观测性（#58809）、面板宽度持久化（#65924）。
- **阅读与滚动体验**：会话打开定位（#54572）、会话选择器显示上下文大小（#61070）——与今日大量滚动修复 PR 相互印证。
- **跨工具兼容**：Claude Code skills 自动注册 `/` 命令（#35341），降低迁移门槛。
- **推理性能与可观测**：TTFT 随上下文增长（#65966）、子代理实际生效模型可见性。

## 开发者关注点

- **发布质量**：v2.4.1 发布当日即出现 Ubuntu 26.04 升级失败（#65978），安装/升级链路稳定性需加强回归覆盖。
- **付费与额度判定**：ChatGPT 订阅共享额度误报（#62529）与免费额度异常（#65928）频现，账户配额逻辑是高频痛点。
- **多环境隔离**：后台服务单例导致 profile/配置目录互相污染（#58141），对多项目开发者影响明显。
- **无头/自动化可靠性**：MCP 服务约 10% 概率未注册（#65932）、ACP 流式截断（#53914）直接损害 CI 与编辑器集成场景。
- **TUI/UI 状态一致性**：队列消息残留（#65993）、浅色主题缺失（#50523）等界面缺陷持续累积，今日 PR 侧大量滚动修复说明前端体验是投入重点。

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报（2026-11-24）

> 数据来源：github.com/badlogic/pi-mono（earendil-works/pi）。以下条目均来自过去 24 小时内的 Issue/PR 更新数据。

## 1. 今日速览

今日无新版本发布，社区活动集中在稳定性修复与模型目录维护：一大批与 `finish_reason: "error"` 重试、临时文件写入崩溃、WSL/凭据识别相关的修复 PR 进入合并流程（多为 CLOSED）。与此同时，缓存预热失效、压缩摘要膨胀、虚拟模型阈值误触发等影响长会话体验的问题仍在讨论中。

## 2. 版本发布

过去 24 小时内无新 Release。

## 3. 社区热点 Issues（10 条）

1. **#10956 cacheWarming "idle" 静默失效**（OPEN，16 评论，👍4）
   当扩展处理 `turn_end` 且上下文含自定义/压缩消息时，空闲缓存预热从不触发，9 月以来 507 条决策事件全部落在 `continuationProbability: 1`。评论最多，说明缓存策略正确性受广泛关注。
   https://github.com/earendil-works/pi/issues/10956

2. **#11026 pi-durable：永久删除会话**（OPEN，10 评论，👍7）
   请求提供 `harness.deleteConversation(id, ctx)`，运行中拒绝或先中止再删除。👍数较高，反映持久化存储的数据管理需求。
   https://github.com/earendil-works/pi/issues/11026

3. **#12184 Gemini 4 Hydrogen 的 xhigh 思考档位被拒**（OPEN，bug，prio:p0，7 评论）
   models.dev 已暴露 low/medium/high/xhigh，但 Google 适配器拒绝 `xhigh`。P0 级新模型支持缺口。
   https://github.com/earendil-works/pi/issues/12184

4. **#12242 压缩摘要每次更新膨胀（九次压缩从 17k 涨到 164k 字符）**（OPEN，bug，4 评论）
   第九次压缩耗时 588 秒、75k 输出 token。直接影响长会话成本与延迟。
   https://github.com/earendil-works/pi/issues/12242

5. **#12035 虚拟模型下阈值压缩过早触发**（OPEN，4 评论）
   `_modelForMessage()` 对虚拟模型返回 undefined，`_checkCompaction` 仍执行阈值检查，导致远低于窗口即压缩。
   https://github.com/earendil-works/pi/issues/12035

6. **#11071 在 AssistantMessage 中保留结构化 provider 失败元数据**（OPEN，4 评论）
   希望为 HTTP 状态、provider 错误码与重试性提供共享类型契约。属于 SDK 层面的可观测性诉求。
   https://github.com/earendil-works/pi/issues/11071

7. **#12196 RPC：bootstrap 结算触发压缩时延迟 prompt 无响应**（OPEN，3 评论）
   由嵌入 pi 的 AI agent 提交的可复现报告，影响 RPC 宿主集成。
   https://github.com/earendil-works/pi/issues/12196

8. **#12224 MCP SSE 反复拼接并重扫不完整大事件**（OPEN，inprogress，3 评论）
   `consumeSseStream()` 在单个字符串上 `+=` 并反复 slice，大事件分块到达时性能退化。已有对应 PR #12451。
   https://github.com/earendil-works/pi/issues/12224

9. **#9537 SDK 嵌入时 /login 状态行显示全局 auth.json 路径**（OPEN，5 评论）
   使用自定义 `agentDir` 时状态行仍报全局凭据路径，影响嵌入式集成体验。
   https://github.com/earendil-works/pi/issues/9537

10. **#4530 / #4851 `pi install git:` 支持 monorepo 子目录（均已关闭）**
    两个同主题 Issue 在 2026-11-24 被关闭（标记 `closed-because-refactor` / `no-action`），社区对按子包安装的需求明确但未落地。
    https://github.com/earendil-works/pi/issues/4530 ｜ https://github.com/earendil-works/pi/issues/4851

## 4. 重要 PR 进展（10 条）

1. **#12470 处理 OpenRouter `native_finish_reason`**（OPEN，pkg:ai）
   避免上游失败（如 `MALFORMED_FUNCTION_CALL`）被误判为正常结束；对应 Issue #11931。
   https://github.com/earendil-works/pi/pull/12470

2. **#12455 在重试分类器中处理 `finish_reason: "error"`**（CLOSED）
   关闭 #12206，让 Copilot/OpenRouter/Mistral 的瞬时失败可自动重试。
   https://github.com/earendil-works/pi/pull/12455

3. **#12452 临时文件写入失败不再崩溃 pi**（CLOSED）
   修复 #10585：`WriteStream` 缺少 error 监听导致 ENOSPC/EACCES 变成未捕获异常。
   https://github.com/earendil-works/pi/pull/12452

4. **#12461 修正未保存 bash 输出文件的回退逻辑**（CLOSED）
   #12452 的后续，修正 codemode 回退中恒加省略标记与 `truncated: true` 的问题。
   https://github.com/earendil-works/pi/pull/12461

5. **#12451 流式大行/大事件线性时间读取**（OPEN，跨 mcp/ai/agent/coding-agent/tui）
   关闭 #12224，以保存偏移替代全量重扫。
   https://github.com/earendil-works/pi/pull/12451

6. **#12454 未解析的已存储凭据报告为未配置**（CLOSED）
   修复 #12164：`!command` 类型的 key 命令失败时不再显示绿色已配置。
   https://github.com/earendil-works/pi/pull/12454

7. **#12459 显示未解析的存储 key 并重跑命令 key**（CLOSED）
   #12454 的后续，改善 `/login` 与 `/logout` 的提示一致性。
   https://github.com/earendil-works/pi/pull/12459

8. **#12457 拒绝从 WSL 执行 Windows 安装的 pi update**（CLOSED）
   修复 #12172：WSL 通过 /mnt/c PATH 互操作误用 Windows 安装。
   https://github.com/earendil-works/pi/pull/12457

9. **#12449 / #12453 / #12450 清理模型目录中的下线模型**（均 CLOSED）
   移除已停用的 Mistral、Groq 模型与 `gpt-5-chat-latest`，修复 CI 中 catalog 重建失败与 `/model` 列出失效模型的问题。
   https://github.com/earendil-works/pi/pull/12449 ｜ https://github.com/earendil-works/pi/pull/12453 ｜ https://github.com/earendil-works/pi/pull/12450

10. **#11370 新增六家推理 provider**（OPEN）
    新增 DeepInfra、Nebius、Ollama Cloud、Scaleway、SiliconFlow、StepFun，依据 models.dev 贡献活跃度与 issue 请求筛选。
    https://github.com/earendil-works/pi/pull/11370

## 5. 功能需求趋势

- **新模型与 provider 支持**：#12184（Gemini 4 Hydrogen xhigh）、#11370（六家推理 provider）、#12325（GitHub Copilot 新启用模型不显示），模型目录持续维护是主线。
- **上下文与压缩效率**：#12242（压缩摘要膨胀）、#12035（虚拟模型阈值误触发）、#10956（缓存预热），长会话成本是核心议题。
- **流式与错误处理健壮性**：#12206、#11931、#11071、#12224——结构化失败元数据与线性时间解析成为共性需求。
- **安装与平台互操作**：monorepo 子目录安装（#4530/#4851）、WSL/Windows 冲突（#12172）、Ubuntu 同名 `pi` 包冲突（#12166）。
- **TUI 细节**：Mermaid 超宽图无解释回退（#12324）、Wayland 下 `wl-copy` MIME 推断导致静默复制失败（#12374）。

## 6. 开发者关注点

- **静默失败最伤体验**：缓存预热不触发、复制无声失败、超宽图回退无说明、key 命令失败仍显示已配置——开发者反复强调“失败必须可见且有原因”。
- **进程稳定性**：ENOSPC/EACCES 等外部环境异常不应杀死整个进程（#10585 及其修复链）。
- **嵌入式/SDK 集成细节**：#9537（auth 路径）、#12196（RPC 无响应）、#11071（错误元数据），说明以 SDK/RPC 方式把 pi 当作基础设施使用的用户群在扩大。
- **模型目录新鲜度**：下线模型仍出现在 `/model`、新启用模型不出现（#12325），反映对自动同步的强依赖。
- **自动重试的可预期性**：`finish_reason: "error"` 是否重试直接决定长任务成败，需要统一分类而非在各 provider 分支中各自处理。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报 — 2026-11-24

## 1. 今日速览

今天没有新版本发布，社区讨论集中在 **1.0 Preview 事件驱动内核合入 main**（#17045，24 条评论）以及 Managed Agent 的 **Action parking 分阶段落地**（#18149 及其子 PR）。同时，**会话日志明文记录 API key**（#18165）和 **超大 transcript 导致会话无法打开**（#13113）两类安全与稳定性问题持续受到关注。

## 2. 版本发布

过去 24 小时无新 Release。另有一条已于 11-24 关闭的 nightly 发布失败记录（#17201，v0.27.2-nightly.20261113，`integration_none` / `integration_docker` 两个 job 失败），可与今日依赖 CVE 审计失败（#18148）一并视为 CI 健康度信号。

## 3. 社区热点 Issues（Top 10）

1. **#17045 [OPEN] 将 1.0 Preview loop kernel 分片合入 main** — 讨论度最高（24 条评论）。该内核把 agent loop 重构为单一 `query()` 入口的事件驱动内核，按 slice 逐步开放。这决定后续所有核心功能的落点，是观察项目架构走向的首要线索。
   https://github.com/QwenLM/qwen-code/issues/17045

2. **#13113 [OPEN] 会话无法打开："Transcript snapshot is too large to index"** — `file_history_snapshot` 呈二次增长，且 256 MiB 索引上限写死；超限后会话完全打不开。长期会话用户直接不可用，P1 且标记 ready-for-human。
   https://github.com/QwenLM/qwen-code/issues/13113

3. **#15486 [OPEN] 自动压缩后请求体积估算重复计数 + 多算 20K** — 压缩在某条 tool result 未完成时触发，导致下一轮被停止或以 `max_tokens: 1` 发出。属于上下文管理的关键正确性问题。
   https://github.com/QwenLM/qwen-code/issues/15486

4. **#18165 [OPEN] 会话日志明文记录 API key** — 工具输出中的完整 key 被写入 `~/.qwen/projects/.../chats/*.jsonl`，且同一内容在多个字段重复落盘。安全风险明确，建议优先处理。
   https://github.com/QwenLM/qwen-code/issues/18165

5. **#18149 [OPEN] 扩展 Action parking 范围（无状态 Harness Phase 4 后续）** — 首个增量只 park 冷恢复已接受的等待，多数真实 Session 仍需常驻；这是 Managed Agent 可扩展性的核心提案，已有多个配套 PR。
   https://github.com/QwenLM/qwen-code/issues/18149

6. **#18159 [OPEN] Web Shell 支持可选自定义面板** — 用户希望在不 fork/重建 Web Shell 的前提下扩展官方页面。对集成方与自托管用户价值较高。
   https://github.com/QwenLM/qwen-code/issues/18159

7. **#18030 [OPEN] 项目 auto-memory 在工作区与 Git worktree 间共享** — 自 #6462 起每个 worktree 拥有独立 memory 目录，导致跨 worktree 学习成果割裂。
   https://github.com/QwenLM/qwen-code/issues/18030

8. **#17316 [OPEN] MCP 客户端支持 elicitation 能力** — 服务端可在交互中按 JSON Schema 请求结构化输入，而当前客户端栈不支持，限制了交互式 MCP 工具。
   https://github.com/QwenLM/qwen-code/issues/17316

9. **#18197 [OPEN] 工具调用序列化层间歇性丢失必填 JSON 参数** — 报错 `params must have required property ...`，严重时可经不可恢复的重试循环拖垮整个会话。影响面大、复现偶发。
   https://github.com/QwenLM/qwen-code/issues/18197

10. **#18202 [OPEN] Ctrl+X 外接编辑器退出后 TUI 花屏** — micro/nano/vim 等全屏编辑器返回后界面残留乱码。属于高频交互路径的体验缺陷。
    https://github.com/QwenLM/qwen-code/issues/18202

其他可留意：#16437（压缩后让模型指向 transcript 以便查细节，已关闭）、#18127（Managed Agent 取消因前序 turn 未完成 cleanup 而卡住，已关闭）、#18178（qwen serve 每 turn 不可变资源版本）、#17143（TUI 界面 i18n，目前仅影响模型输出语言，已关闭）。

## 4. 重要 PR 进展（Top 10）

1. **#18111 [OPEN] 支撑超大 session transcript 的 daemon 加载与回放** — 加固会话恢复、transcript 索引、artifact 库加载、批量回放分帧与 Web Shell 错误处理，直接对应 #13113 的痛点。
   https://github.com/QwenLM/qwen-code/pull/18111

2. **#18224 [CLOSED] Managed Agent：允许子 Session 的审批等待被 park** — #18149 的 Stage 3，子 Session 在等待工具审批或提问时也可挂起并由冷恢复续跑，此前子 Session 必须常驻。
   https://github.com/QwenLM/qwen-code/pull/18224

3. **#18179 [OPEN] qwen serve：按 turn 固定 Skills 与扩展，下一 prompt 再刷新** — 保证单次 prompt 内工具调用与审批期间 Skill/扩展版本稳定，并按需更新。
   https://github.com/QwenLM/qwen-code/pull/18179

4. **#18052 [OPEN] 主机负载过高时拒绝新建会话** — 基于每核负载均值、事件循环 p99 延迟与观测间隔保护，连续三次采样后对需新建 ACP 子进程的 daemon 操作做准入控制。
   https://github.com/QwenLM/qwen-code/pull/18052

5. **#18075 [OPEN] 清理高危与严重级生产依赖审计问题** — 升级 simple-git 3→4.1、shell-quote、sharp、markdown-it 等直接依赖，解除 nightly 安全检查阻塞（与 #18148 审计失败相关）。
   https://github.com/QwenLM/qwen-code/pull/18075

6. **#18212 [CLOSED] 修复 Managed Agent 未准入取消未结算的问题** — 让带有待偿 cleanup 的取消请求正确结算（对应 #18127）。
   https://github.com/QwenLM/qwen-code/pull/18212

7. **#18120 [OPEN] 跨设备共享工作区输入历史** — 将 Web Shell 输入历史持久化到本地 daemon 的 per-workspace 存储，桌面与移动端共享 prompt 历史和 shell 模式命令历史。
   https://github.com/QwenLM/qwen-code/pull/18120

8. **#18099 [OPEN] 外部 Workspace 创建会话时接纳 skills** — 解除 `creationPin` 对携带 skills 请求的拒绝，使 DataAgent 可在托管实例上预装默认 skills（此前用户看不到 slash 命令）。
   https://github.com/QwenLM/qwen-code/pull/18099

9. **#18215 [OPEN] 恢复持久化会话中分离后台 shell 的存活状态** — 当会话不属于当前连接的 daemon（如 daemon 重启后），Web Shell 此前无法判断后台 shell 是否仍在运行。
   https://github.com/QwenLM/qwen-code/pull/18215

10. **#18232 [OPEN] `qwen serve` 支持从嵌套 workspace worktree 分支** — 允许从已注册 workspace 下托管任务 worktree 分支，源 checkout 需通过 Git 仓库、会话快照、sidecar 与归属校验。
    https://github.com/QwenLM/qwen-code/pull/18232

另有文档与小修类：#18218（S5 Hooks parking 设计）、#18233（测试等待会话释放）、#17827（`/loop` skill 停止时取消待触发 wakeup）、#16891（统一 `serverRevision` 上限）、#18010（loop 分类器决策改为可执行纯函数）。

## 5. 功能需求趋势

- **上下文与会话生命周期管理**：压缩正确性（#15486）、超大会话索引（#13113）、压缩后 transcript 回查（#16437）、跨 worktree memory 共享（#18030）——围绕“长会话可用性”形成密集需求带。
- **Managed Agent / 无状态 Harness**：Action parking 分片推进（#18149 / #18224 / #18218），指向托管场景下的资源占用与恢复能力。
- **qwen serve 与 Web Shell 的可扩展性**：自定义面板（#18159）、每 turn 不可变资源版本（#18178）、Skills/扩展按 turn 固定（#18179）、跨设备输入历史（#18120）。
- **MCP 生态深度集成**：elicitation 能力（#17316）等协议特性的客户端补齐。
- **本地化与 UI 完善**：TUI 界面 i18n（#17143）、移动/平板端 Web Shell 渲染问题（#17933、#17963）；另见模型能力表遗漏（#18200，GPT-6 系列 ID 缺失于 `getGptReasoningCapabilities()`）。

## 6. 开发者关注点

- **安全与隐私落盘**：API key 经工具输出进入会话日志且未脱敏、多字段重复存储（#18165）；依赖层高危及严重 CVE 需持续清理（#18075），且每日审计已失败（#18148）。
- **长期运行会

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI 社区动态日报 · 2026-11-24

> 数据来源：github.com/Hmbown/DeepSeek-TUI（仓库内实际条目多以 Codewhale 命名）

## 1. 今日速览

v0.10.4 热修复版发布，重点解决 Windows Terminal 下 Ctrl+V 双重粘贴（连带影响 `/provider` 粘贴 API Key）。同时，基于基线 `bc58781ba` 的 R1–R19 多轮代码审计缺陷单大量流转，多数已关闭并有修复 PR 跟进。0.10.5 的收尾工作（如 Windows 测试绿、`/undo` 严重 bug）仍是当前发布闸门。

## 2. 版本发布

**v0.10.4（Codewhale v0.10.4，hotfix）**
- 修复 Windows Terminal 中 Ctrl+V 文本粘贴两次的问题（此前会导致粘贴进 `/provider` 的 API Key 被重复），已在真实 Windows Terminal 上验证。
- `codewhale update` 不再因无关的 `cargo` 原因拒绝 release 二进制（摘要在此截断）。
- 定位为 0.10.3 后立即暴露问题的“小修复版”，不引入新工作，其余改动进入 0.10.5。
- 链接：codewhale-hq/Codewhale Issue #7487（CLOSED）

## 3. 社区热点 Issues（10 条）

1. **#6970 [OPEN] `/undo` 严重 bug** — 涉及 Windows 的撤销/回滚行为，自 10-13 持续跟进、10 条评论，是当前 release acceptance 的最后 Windows 关卡之一。重要度最高。
   https://github.com/codewhale-hq/Codewhale/issues/6970
2. **#7281 [OPEN] 0.10.3 Windows 测试套件全绿（tracking）** — Windows x64 作为启动闸门 OS，需在确切 release SHA 上通过 native x64 runner 的 green Test 与脚本旅程零失败。
   https://github.com/codewhale-hq/Codewhale/issues/7281
3. **#7282 [CLOSED] 终端与后台任务归属其会话** — 删除会话即结束其终端会话与后台任务，避免任务“无处汇报”地残留；已落地 main。
   https://github.com/codewhale-hq/Codewhale/issues/7282
4. **#7474 [OPEN] TUI app/setup/approval/ambient/pet 12 个已核实缺陷（R18）** — 大规模审计单中目前仍 OPEN 的一条，标注 good first issue，适合新贡献者切入。
   https://github.com/codewhale-hq/Codewhale/issues/7474
5. **#7344 [OPEN] GNOME Terminal 退出后仍保留 Nord 配色** — Linux TUI 安装体验问题，退出未还原原 profile（背景 `#ECEFF4`/前景 `#2E3440`），5 条评论。
   https://github.com/codewhale-hq/Codewhale/issues/7344
6. **#7485 [CLOSED] 输入 API Key 报“provider did not accept this key”** — 影响 opencode go 与 DeepSeek 官方 API 的 provider 配置，已关闭，与 0.10.4 粘贴修复相关。
   https://github.com/codewhale-hq/Codewhale/issues/7485
7. **#7454 [CLOSED] 实时 reasoning card 在工具卡上方持续增长** — TUI 渲染层级/索引问题，间歇复现，已随 0.10.4 处理。
   https://github.com/codewhale-hq/Codewhale/issues/7454
8. **#6801 [OPEN] 为可选 API Route provider 请求维护者 sign-off** — 第三方维护者希望内置 OpenAI 兼容端点入口，反映扩展 provider 生态的诉求。
   https://github.com/codewhale-hq/Codewhale/issues/6801
9. **#7505 [OPEN] health digest 2026-11-23（bot）** — 汇总 7 个贡献者 CI 审批（最早 #7340 已开 9 天）、高频 CI 失败与 flaky 分类，是观察项目健康度的窗口。
   https://github.com/codewhale-hq/Codewhale/issues/7505
10. **#7463 / #7457 / #7466 / #7458 / #7471 / #7465 / #7467 / #7459 [CLOSED] R7/R1/R10/R2/R15/R9/R11/R3 审计缺陷单** — 覆盖 app-server、engine core、fleet/work_graph/hooks、subagent、config、authority、extension_host、client/llm_client/receipts，均已关闭，体现集中式缺陷清理节奏。
    https://github.com/codewhale-hq/Codewhale/issues/7463

## 4. 重要 PR 进展（10 条）

1. **#7531 [OPEN] 本地多 whale 运行时与 Whale 卡片** — 由维护者 Hmbown 提交，Runtime API 新增 `/v1/whales`、`/v1/whales/{id}` 及非破坏性 `/whales/{id}/rec…`，同时修复 main 的 credit 与阻塞调用检查。
   https://github.com/codewhale-hq/Codewhale/pull/7531
2. **#7532 [OPEN] 限制 external_agent 详情截断 + 零分配邮件清洗（R4）** — 处理 #7460 剩余 R4 审计缺陷并补回归测试。
   https://github.com/codewhale-hq/Codewhale/pull/7532
3. **#7526 [OPEN] 修复 sandbox/secrets/skill-install/plugins 剩余 R6 缺陷** — 附带缺失覆盖的回归测试。
   https://github.com/codewhale-hq/Codewhale/pull/7526
4. **#7530 [OPEN] cli/release/snapshot/skills 的 R19 剩余缺陷** — 针对 10 项发现的回归测试。
   https://github.com/codewhale-hq/Codewhale/pull/7530
5. **#7529 [OPEN] runtime/cloud-facts/dependencies R16 缺陷 + 统一 cloud-facts 刷新** — 含 stall_report 相关修复。
   https://github.com/codewhale-hq/Codewhale/pull/7529
6. **#7506 [OPEN] 新增 AtmoRouter 为内置 descriptor 行** — 与 WorldRouter(#7488)、LLMTR(#7450) 同形，OpenAI 兼容网关 `https://atmorouter.dev/v1`。
   https://github.com/codewhale-hq/Codewhale/pull/7506
7. **#7525 [CLOSED] 新增 onomeo 内置 descriptor** — 同形 gateway，支持 Claude、GPT、Gemini 与 DeepSeek 模型。
   https://github.com/codewhale-hq/Codewhale/pull/7525
8. **#7340 [OPEN] 新增 Synap descriptor** — OpenAI 兼容 Chat Completions `https://synap402.com/v1`，以 `GET /v1/models` 实时发现为准；已开 9 天，是 CI 审批待处理项。
   https://github.com/codewhale-hq/Codewhale/pull/7340
9. **#7446 / #7522 [CLOSED] 引擎索引性能优化** — 跨进程缓存 item index；索引时只读 owner 字段，避免反序列化整条 `TurnItemRecord`。
   https://github.com/codewhale-hq/Codewhale/pull/7446
10. **#7451 [CLOSED] 会话切换可接管已有历史的 Runtime store** — 修正 `apply_loaded_session_with_goal` 对非空 `threads/` 的拒绝逻辑；另 **#7500** 加固 hooks 生命周期 outbox 锁、撕裂尾部恢复与 fsync。
    https://github.com/codewhale-hq/Codewhale/pull/7451

## 5. 功能需求趋势

- **Provider 扩展生态**：多张第三方 gateway descriptor PR（AtmoRouter、onomeo、Synap、API Route），社区希望更方便地发现与内置 OpenAI 兼容端点。
- **跨平台终端兼容**：Windows Terminal 粘贴、GNOME Terminal 配色还原等，跨平台安装/退出体验成为重点。
- **多 agent / specialist 运行时**：维护者推进本地多 whale 运行时与 Whale 卡片。
- **代码审计与稳定性**：R1–R19 系统性缺陷清理 + 回归测试是当前最大工作量方向。
- **性能**：索引缓存、减少反序列化（见 #7446、#7522）。
- **本地化**：`zh_hans` 文档翻译（#7521）等本地化贡献持续进入。

## 6. 开发者关注点

- **Windows 发布闸门**：0.10.3/0.10.4 的验收高度依赖 Windows native x64 测试全绿，`/undo`（#6970）是最后未闭环项。
- **粘贴/API Key 流程易错**：Ctrl+V 重复粘贴直接导致 provider 鉴权失败（#7485），是升级后最先被踩到的坑。
- **审计缺陷量大、需回归测试**：贡献者集中提交 R 系列修复，维护者关注带行为回归测试的 PR。
- **CI 审批积压与 flaky**：bot 健康摘要提示 7 个贡献者 CI 审批待处理（最早开 9 天），并建议将高频失败与 flaky 分开 triage。
- **会话资源生命周期**：终端/后台任务应随会话结束，避免残留——已有关闭实现，后续需持续验证。

</details>

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar-personal) 自动生成。*