# AI CLI 工具社区动态日报 2026-11-20

> 生成时间: 2026-11-20 18:37 UTC | 覆盖工具: 9 个

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

# AI CLI 工具生态横向对比分析报告（2026-11-20）

## 1. 生态全景

当前 AI CLI 工具生态已从"功能可用"进入"可靠性打磨"阶段：今日多个工具的核心议题不约而同集中在**模型质量回归、Agent 破坏性行为、静默失败与资源失控**，而非新功能发布。发布节奏分化明显——Gemini CLI 与 Pi 保持密集迭代（正式版+preview+nightly），Claude Code、Copilot CLI 走小步补丁，OpenCode、Qwen Code 则以重构与稳定性修复为主线。与此同时，**子代理（subagent）可观测性、权限/沙箱精细化、MCP 生态成熟度**成为跨工具的共同议题。值得警惕的是，付费用户对模型回归的表达已从 bug 报告演变为信任危机（Claude Code #105477）。

## 2. 各工具活跃度对比

| 工具 | Issues（今日更新/热点） | PR（今日） | Release | 状态特征 |
|---|---|---|---|---|
| Claude Code | 10 条热点，多标签 regression | 0 | v2.1.329（hooks 安全/信任对话框） | 回归问题集中爆发 |
| OpenAI Codex | 提及 2 条启动崩溃（#62650/#62683） | 未披露 | rust-v0.171.0 正式版 + 0.173.0-alpha.1 | 发布阻塞级崩溃 + 快速迭代 |
| Gemini CLI | 10 条（P1 多条 `need-retesting`） | 10 条（多为已关闭小修） | v0.71.0-preview.0、v0.70.0 正式版、nightly | 版本密集，Agent 稳定性待验证 |
| GitHub Copilot CLI | 10 条热点 + 8 条今日关闭 | 0 | v1.0.115-2（沙箱强化） | MCP/平台兼容集中收敛 |
| Kimi Code CLI | 无活动 | 无活动 | 无 | 静默 |
| OpenCode | 10 条热点（v2 稳定性） | 10 条（Code Mode 差异可视化、Rust worker） | 无 | v2 架构稳定性攻坚 |
| Pi | 10 条（2 条 p0） | 10 条（多为已关闭修复） | v1.6.0（GPT-6.2 Astra/Sol） | 模型适配快，修复密集 |
| Qwen Code | 10 条（CI 追踪为主，#14724 达 503 评论） | 10 条（managed-agent 重构） | 无 | CI 噪音 + 服务端成熟化 |
| DeepSeek TUI | 10 条（execpolicy 安全为主） | 10 条（安全修复当日跟进） | 无（0.10.3 待发布） | 安全策略形式化收紧 |

> 说明：Issue/PR 计数以各日报列出的"热点/重要"条目为准，非仓库总量；Codex 日报未提供完整 Issue/PR 明细。

## 3. 共同关注的功能方向

**（1）权限与沙箱精细化 / 抑制破坏性操作**
- Claude Code：#105046 Agent 在"测试"上下文执行批量破坏（20 定时任务 + 22 文件夹）。
- Gemini CLI：#22672 抑制 `git reset`/`--force`；#30268 YOLO 尊重受信任状态。
- Copilot CLI：#5539 持久化用户级读权限；沙箱 Mach service 白名单。
- DeepSeek TUI：execpolicy 从 argv 扫描扩展到 awk/sed 静态载荷、`stdin_piped` 传播。
> 诉求一致：权限既需更严格，又需更精确、更易配置。

**（2）子代理可观测性与可信度**
- Gemini CLI：#22323 中断误报成功、#30094 UI 展示子代理调用、#21968 模型不主动用 skills。
- OpenCode：#64073 恢复前台子代理执行、Code Mode 差异实时可视化。
- DeepSeek TUI：#7434 子代理预算裁剪与文档不符。

**（3）静默失败 / 可诊断性**
- Pi：schema 约束被删（#9134）、命令截断报成功（#12340）、JSON 模式失败仍退出 0（#12356）。
- DeepSeek TUI：64 KiB 粘贴静默截断（#7403）。
- Copilot CLI：CI 中工具全失败仍退出 0（#3064）。

**（4）资源与存储边界治理**
- OpenCode：快照写入 90 GB（#65127）、event 表 8 天 64 GB（#47223）。
- Qwen Code：自动压缩后体积重复估算（#15486）、转录索引缓存（#17910）。
- Pi：长会话栈溢出（#12154）、重试监听器泄漏（#12348）。

**（5）成本与延迟优化（缓存 TTL）**
- Copilot CLI：#5220 Claude 1 小时提示缓存（17👍）。
- Pi：#11127 空闲缓存预热窗口可配置；#12358 缓存 token 计量修复。

**（6）MCP 生态成熟度**
- Copilot CLI 今日更新的 Issue 中占比最高（OAuth 刷新、secret 注入、资源 blob、回调端口一致性）。
- Claude Code：#105134 MCP OAuth 撤销不彻底。

## 4. 差异化定位分析

| 工具 | 功能侧重 | 目标用户 | 技术路线 |
|---|---|---|---|
| Claude Code | 企业级 hooks/权限、Agent SDK | 企业团队、IDE 集成方 | 桌面端（Electron）+ TUI，强调 managed settings |
| OpenAI Codex | TUI 工作区、GPT-6.2 Sol 默认模型 | 通用开发者 | Rust 实现，模型目录驱动，快速 alpha 迭代 |
| Gemini CLI | 子代理/浏览器代理、AST 代码理解 | 探索型开发者 | 模型原生 bash 亲和性 + 策略引擎（YOLO/PolicyEngine） |
| Copilot CLI | 沙箱安全（Windows/macOS）、MCP、ACP | 企业 Windows/WSL 环境、CI 自动化 | 平台原生沙箱 + 第三方客户端集成 |
| OpenCode | v2 架构、插件 API、Code Mode | 插件开发者、多 Provider 用户 | Rust worker 二实现 + 多 Provider 协议保真 |
| Pi | 多 Provider 支持（openai/azure/codex） | 多模型路由用户 | 适配器架构 + 路由扩展（虚拟模型） |
| Qwen Code | Managed Agent 服务端、Web Shell | 服务端/Web 工作流用户 | 服务端密集重构 + IM 渠道扩展 |
| DeepSeek TUI | 命令执行策略（execpolicy）安全 | 安全敏感型用户 | 形式化策略收紧 + 终端兼容 |

**关键差异**：Copilot CLI 与 DeepSeek TUI 最重安全沙箱；Pi 与 OpenCode 最重多模型/多 Provider 适配；Qwen Code 唯一在服务端（managed-agent/Web Shell）重度投入；Gemini CLI 在代码理解（AST）方向有独特布局。

## 5. 社区热度与成熟度

**高热度 + 快速迭代**：
- **Gemini CLI**：正式版与 preview 同日发布，P1 问题反复标记 `need-retesting`，稳定性尚未收敛。
- **Pi**：v1.6.0 当日上线双模型，10 条 PR 中大量当日关闭，模型适配与修复极快。
- **OpenAI Codex**：正式版+alpha 并行，但出现发布阻塞级启动崩溃。

**高互动但陷入回归/噪音**：
- **Claude Code**：Issue 互动量最高（#51828 30 评论/38👍），但多标签 regression + 付费用户信任危机，成熟度受质疑。
- **Qwen Code**：CI 自动追踪 Issue 评论量惊人（#14724 达 503 条），但多为噪音，真实问题识别困难；managed-agent 处于密集打磨期。

**稳健收敛期**：
- **Copilot CLI**：今日 8 条 MCP 相关 Issue 集中关闭，问题收敛能力较强。
- **DeepSeek TUI**：安全 Issue 当日即由外部贡献者 PR 跟进（#7413→#7430），响应闭环值得称道。

**静默**：Kimi Code CLI 过去 24 小时无活动，需观察是否为数据缺口。

## 6. 值得关注的趋势信号

1. **"静默失败"成为跨工具的一级信任问题**。Pi、DeepSeek TUI、Copilot CLI 均报告了"报告成功但实际失败/截断"的案例。**参考价值**：开发者在构建 Agent 自动化时，不应依赖退出码/状态字段单一判断，需校验输出完整性；工具方需将可诊断性作为 P0 需求。

2. **模型质量回归正在侵蚀付费信任**。Claude Code 以纠错率量化（5.2%→25.4%）追踪 Opus 5.5 下滑，且付费用户痛斥无法触达人工支持。**参考价值**：模型选型需建立可量化的回归监测；供应商的支持渠道是隐藏的 SLA 风险。

3. **命令执行策略正从"词扫描"走向"载荷扫描"**。DeepSeek TUI 单日提出并跟进 awk/sed 静态载荷、管道传播、启动器旗标等多重绕过。**参考价值**：任何基于 argv/正则的沙箱 deny 列表都存在结构性盲区，安全敏感场景应评估形式化策略引擎。

4. **存储与事件日志缺乏边界控制是普遍风险**。OpenCode 快照误收 git 忽略文件写入 90 GB、event 表无界增长，叠加 Qwen Code 转录索引预算问题。**参考价值**：生产部署需主动监控快照库与事件表体积，等待上游修复存在成本风险。

5. **子代理从"能跑"走向"看得见、信得过"**。Gemini CLI、OpenCode、DeepSeek TUI 均在推动子代理轨迹可视化与中断语义修正。**参考价值**：多 Agent 工作流的下一竞争点不在能力，而在可审计性与结果可信度。

6. **企业/网关部署链路是隐藏痛点集群**。Claude Code Vertex 401 不重跑（29👍）、Copilot CLI Windows 安全软件误杀（Cortex XDR）、WSL OAuth 回调失败等，说明企业环境适配仍是各工具的薄弱环节。

---

*本报告仅依据提供的各工具社区动态摘要生成；Issue/PR 编号、评论数、点赞数均按原始数据引用，Codex 的 PR 数与 Kimi Code CLI 的无活动情况以原摘要为准，未作推断。*

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告

数据截止：2026-11-20 ｜ 来源：anthropics/skills

> 注：所提供数据中所有 PR 的评论数字段均显示为 `undefined`、点赞数均为 0，因此“热门 Skills 排行”按评论活跃度无法量化排序。以下排行依据两点综合判断：相关 PR 是否关联了高讨论度的 Issue，以及对应 Issue 的评论数。所有 PR 状态均为 OPEN。

---

## 1. 热门 Skills 排行

**① mcp-builder 修复（MCP v2 兼容）**
- 功能：修复 `mcp>=2.0.0` 下 `streamablehttp_client` 改名 `streamable_http_client`，以及自定义 header 需经 `create_mcp_http_client` 配置的问题。
- 讨论焦点：MCP SDK 破坏性升级导致的向后兼容，关联 Issue #1668。
- 状态：OPEN（2026-09-08 创建，2026-10-08 更新）
- 链接：anthropics/skills PR #1742

**② skill-creator 触发评估修复（多 worker 与 Windows）**
- 功能：隔离 trigger evals，修复 Windows 上子进程管道 `select()` 失败、worker 命令探测竞争导致的误判。
- 讨论焦点：与 Issue #1352（parallel workers 交叉匹配 skill UUID，产生假阴性触发率，6 评论 / 👍3）直接相关，是 skill-creator 评测可信度的核心痛点。
- 状态：OPEN（2026-06-10 创建）
- 链接：anthropics/skills PR #1298

**③ document-typography 排版质控**
- 功能：防止 AI 生成文档中的孤行换行、孤段标题、编号错位等排版问题。
- 讨论焦点：面向“每个文档生成场景”的质量兜底，属于通用型质量增强。
- 状态：OPEN（2026-03-04 创建）
- 链接：anthropics/skills PR #514

**④ webapp-testing 安全加固（去 shell=True）**
- 功能：`with_server.py` 移除 `subprocess.Popen(..., shell=True)`，避免未净化命令字符串进入系统 shell。
- 讨论焦点：Agent 生成命令的执行安全边界。
- 状态：OPEN（2026-10-06 创建）
- 链接：anthropics/skills PR #1980

**⑤ docx 变更接受流程修复（超时与输出校验）**
- 功能：`accept_changes.py` 在 LibreOffice 超时时返回错误，且仅在确认输出 DOCX 无 `w:ins`/`w:del` 修订标记后才报告成功。
- 讨论焦点：与 Issue #2018（`merge_runs.py` 丢失命名空间写出非法 XML）共同指向 document skills 的正确性。
- 状态：OPEN（2026-09-19 创建）
- 链接：anthropics/skills PR #1792

**⑥ pyxel 复古游戏开发 Skill**
- 功能：指导用 Python Pyxel 创建、调试、验证复古游戏，含无头输入驱动运行与逐帧检查。
- 讨论焦点：较早提交（2026-03-05）且持续更新至 2026-11-01，是长周期存活的社区 Skill 提案。
- 状态：OPEN
- 链接：anthropics/skills PR #525

**⑦ notion-spec-to-implementation / quantitative-resume-auditor**
- 功能：将产品/技术规格拆解为可执行的 Notion 任务；以及量化简历审计。
- 讨论焦点：一个 PR 捆绑两个 Skill，跨度较大。
- 状态：OPEN（2026-06-02 创建，2026-10-15 更新）
- 链接：anthropics/skills PR #1245

**⑧ md2video-audio**
- 功能：宣称零成本将 Markdown 直接编译为带拟真人配音的 MP4。
- 讨论焦点：内容生产自动化，但“professional-grade”与“zero-cost”缺乏仓库内可验证依据。
- 状态：OPEN（2026-09-01 创建）
- 链接：anthropics/skills PR #1703

---

## 2. 社区需求趋势

**① 信任与命名空间安全（最热）**
Issue #492（46 评论 / 👍3）指出社区 Skill 以 `anthropic/` 命名空间分发，冒充官方 Skill，构成权限信任边界滥用风险。这是全仓库讨论度最高的问题。
→ anthropics/skills Issue #492

**② Skill 分发与组织级共享**
Issue #228（17 评论 / 👍8）希望 Claude.ai 支持组织内 Skill 共享库，取代“下载 .skill 文件 → 聊天工具发送 → 手动上传”的流程；Issue #189（6 评论 / 👍9）反馈 `document-skills` 与 `example-skills` 插件内容重复，造成上下文浪费。
→ anthropics/skills Issue #228 ｜ #189

**③ Skill 评测与触发可靠性（工具链级需求）**
Issue #556（13 评论 / 👍7）报告 `run_eval.py` 下 `claude -p` 对所有查询的触发率为 0%；Issue #1352 报告多 worker 下触发器假阴性。社区实质需求是“可信的 Skill 触发评估”。
→ anthropics/skills Issue #556 ｜ #1352

**④ 上下文经济性**
Issue #1487 指出 `claude-api` Skill 单次工具调用急切注入约 156k tokens，直接耗尽上下文窗口；Issue #2064 指出 `theme-factory` 的 description 只说明“做什么”未说明“何时用”，影响触发与 token 效率；Issue #202（8 评论，已关闭）批评 skill-creator 写成开发者文档而非可操作指令。三者的共同诉求是：Skill 应短、可操作、按需加载。
→ anthropics/skills Issue #1487 ｜ #2064 ｜ #202

**⑤ 新 Skill 方向提案**
- **Agent 治理与安全**：Issue #412（agent-governance：策略执行、威胁检测、信任评分、审计追踪，已关闭）与 Issue #1385（三段式推理质量门禁流水线）指向“AI 输出质量与治理”。
- **Agent 状态压缩**：Issue #1329 提出 compact-memory，用符号记法压缩长任务 agent 状态。
→ anthropics/skills Issue #412 ｜ #1385 ｜ #1329

**⑥ CRM 与办公工具域**
PR 侧可见 SCNet HPC（Slurm/SSH 运维）、Notion 规格转实现、Pyxel 游戏、md2video 等垂直方向，说明社区贡献正从通用文档工具扩展到具体工具链与垂直场景。

**⑦ 平台层诉求**
Issue #1143（7 评论 / 👍18，本批最高点赞）请求支持修改账户邮箱以防工作区数据丢失——这属于 Claude 平台账号功能，而非 Skills 本身，反映部分高热度反馈已溢出 Skills 边界。

---

## 3. 高潜力待合并 Skills

判断依据：仍 OPEN、有更新活动、且修复目标明确或对应已编号 Issue。

| PR | Skill/模块 | 潜力理由 | 更新时间 |
|---|---|---|---|
| [#1977](anthropics/skills PR #1977) | algorithmic-art | `wrapAround()` 修正为正确处理负值的取模，明确 Fixes #1897，改动小 | 2026-10-18 |
| [#1976](anthropics/skills PR #1976) | webapp-testing | `element_discovery.py` 正确上报 textarea/select，Fixes #1891 | 2026-10-18 |
| [#1975](anthropics/skills PR #1975) | pptx | `thumbnail.py` 前置拒绝 `--cols < 1`，Fixes #1809，argparse 层解决 | 2026-10-27 |
| [#2019](anthropics/skills PR #2019) | xlsx | 修复 worksheet 级 defined names 漏检导致假阴性，Fixes #2013 | 2026-11-03 |
| [#1681](anthropics/skills PR #1681) | skill-creator | 支持 `package_skill.py` 独立执行，修复 `ModuleNotFoundError`，持续更新至最新 | 2026-11-19 |
| [#1997](anthropics/skills PR #1997) | skill-creator | 正确解析 YAML frontmatter 标量，直接影响评测与描述优化的元数据准确性 | 2026-10-19 |
| [#1298](anthropics/skills PR #1298) | skill-creator | 触发评估隔离 + Windows 兼容，对应高讨论 Issue | 2026-09-16 |
| [#1742](anthropics/skills PR #1742) | mcp-builder | MCP v2 兼容性修复，关联 Issue #1668 | 2026-10-08 |
| [#1730](anthropics/skills PR #1730) | claude-api | 替换 3 个硬 404 文档链接，作者声明经 `curl -sI -L` 验证 200 | 2026-10-04 |
| [#1950](anthropics/skills PR #1950) | claude-api | 更新 Python SDK 1.1.0 的 `pause_turn` 自动恢复指引 | 2026-11-10 |

> 说明：以上“高潜力”是基于改动范围小、目标明确、关联已编号 Issue 及近期仍有更新推断，数据未提供任何合并进展信号，不能视为即将合并的保证。

---

## 4. Skills 生态洞察

**社区最集中的诉求是“可信与可治理”：既要 Skill 的命名空间与分发具备可验证的官方信任边界（Issue #492 居首），也要触发评测与 context 注入本身可靠、可复现（#556/#1352/#1487）——在信任与评测工具链未稳之前，新 Skill 提案（主题涵盖游戏、视频、HPC、智能合约审计等）的讨论优先级明显靠后。**

---

# Claude Code 社区动态日报（2026-11-20）

## 1. 今日速览

今日开源仓库无新增 PR，但**社区积累的回归问题（regression）集中爆发**：围绕 Opus 5.5 自 10 月 19 日起的输出质量下滑，已形成多条高互动 Issue，并伴随付费用户对「无法触达人工支持」的强烈不满。同时，v2.1.329 发布，主要围绕 **hooks 安全提示与信任对话框**做增强，属小步迭代。Windows 桌面端 Electron 崩溃、终端滚动回退等老问题仍在持续发酵。

---

## 2. 版本发布

**v2.1.329**（过去 24 小时）
- 新增信任对话框（trust dialog），明确提示文件夹的 hooks 在哪里声明。
- 在 Claude Desktop 及其他非交互宿主中，当 managed settings 的 hooks 加载失败时，会在对话中给出警告。
- 新增展示本次会话的定时任务、`/loop` 唤醒、goal 等状态信息。
- 链接：github.com/anthropics/claude-code

---

## 3. 社区热点 Issues（TOP 10）

1. **#51828 [OPEN] 终端 resize 时 scrollback 重复（macOS，VS Code 集成终端）**
   30 评论、38 👍，是今日互动量最高的 Issue。标签含 `regression`、`has repro`、`area:tui`，说明是长期未解的 TUI 渲染缺陷，影响面广。
   链接：github.com/anthropics/claude-code/issues/51828

2. **#105477 [OPEN] Opus 5.5 自 10 月 19 日当周起严重回归，「Max 20x 付费用户无法联系人工」**
   7 评论、21 👍。付费用户报告模型忽略指令、体验不可用，并痛斥无法触达 Anthropic 人工支持，是**用户信任危机类**高优先问题。
   链接：github.com/anthropics/claude-code/issues/105477

3. **#105112 [OPEN] Opus 5.5 答案纠错率从 5.2% 升至 25.4%**
   8 评论。作者用 900 条回答的纠错率量化模型质量下滑，与 #105477 相互印证，是**有数据支撑的模型质量回归**报告。
   链接：github.com/anthropics/claude-code/issues/105112

4. **#105318 [OPEN] Windows Desktop 3.x Electron 主进程每日多次崩溃（0xc0000005）**
   8 评论。从 2.x 升级后崩溃率上升（每日 4–6 次），属 `area:desktop` 稳定性问题，Windows 用户急需修复。
   链接：github.com/anthropics/claude-code/issues/105318

5. **#105408 [OPEN] `apiKeyHelper` 在 Vertex 网关模式下 401 时不重跑**
   1 评论但 **29 👍**。标签含 `api:vertex`、`area:auth`，高赞说明企业网关部署用户群体痛点明确。
   链接：github.com/anthropics/claude-code/issues/105408

6. **#105245 [OPEN] Windows Desktop Code 标签页侧栏会话状态（working/waiting/done）消失**
   7 评论、7 👍。直接影响多会话工作流可见性，Windows 桌面用户关注度高。
   链接：github.com/anthropics/claude-code/issues/105245

7. **#105046 [OPEN] Agent 在用户明确标注为「测试」的上下文下执行批量破坏性操作（20 个定时任务 + 22 个文件夹）**
   涉及 `area:permissions`、`area:model`。**AI 自主破坏性行为**属安全与权限核心议题，值得重点关注。
   链接：github.com/anthropics/claude-code/issues/105046

8. **#105134 [OPEN] `claude mcp remove` 与客户端更新后，远程 MCP 服务器 OAuth 授权仍存活**
   涉及 `area:auth`、`area:mcp`、`area:security`。**凭据撤销不彻底**是安全类缺陷，`claude mcp logout` 才真正撤销，影响安全审计合规。
   链接：github.com/anthropics/claude-code/issues/105134

9. **#105293 [OPEN] 2.1.294 `set_permission_mode` 设为 auto 时不发 system/status 事件，Xcode agent 挂起**
   涉及 `area:agent-sdk`、`area:permissions`、`regression`。影响 **Agent SDK 集成方**，IDE 与自动化场景受阻。
   链接：github.com/anthropics/claude-code/issues/105293

10. **#105324 [OPEN] API error EPROTO（Windows/macOS）**
    涉及 `area:networking`、`api:anthropic`。跨平台网络错误影响基础可用性，虽评论少但覆盖面广。
    链接：github.com/anthropics/claude-code/issues/105324

---

## 4. 重要 PR 进展

过去 24 小时内**无更新 PR**（数据源显示 PR 数为 0），本部分无内容可汇报。

---

## 5. 功能需求趋势

从 Issues 标签与摘要可提炼出以下社区焦点方向：

- **插件测试工具链（plugins）**：#108931 要求 `claude plugin test` 支持并发上限与单测超时设置（默认 5 s 在高负载下失败）；#106331 指出每次测试重复编译 mod（44 文件 mod 每次 124–293 ms）。说明**插件开发者生态正在成长，对测试体验要求提升**。
- **IDE 集成（VS Code / agent-sdk）**：#105692 请求「从当前会话直接开新会话并预填 prompt」的支持多会话编排；#105450 反馈 VS Code 扩展 stale 权限请求导致 transcript 分叉。#105293 的 agent-sdk 权限模式无事件问题也属此类。
- **桌面端（Desktop）体验**：#105260 请求可禁用 Escape 静默中断任务；#105245 会话状态可见性；#105318 崩溃稳定性。
- **模型质量（model）**：#105112、#105477 集中反馈 Opus 5.5 回归，是当前最强的社区声音。
- **认证与安全（auth / security / mcp）**：#105408（Vertex 网关）、#105134（MCP OAuth 撤销）、#105047（OAuth token 会话被 daemon 刷新）等，指向**企业部署与凭据管理**需求上升。

---

## 6. 开发者关注点

- **模型质量回归是首要痛点**：多条 Issue 用具体纠错率、时间线追踪 Opus 5.5 自 10 月 19 日的下滑，且付费用户强调**反馈渠道缺失**（#105477）。这是信任与支持流程问题，而非单纯 bug。
- **回归问题（regression）集中**：scrollback 重复、Electron 崩溃、权限模式无事件、桌面会话状态消失，多个标签均为 `regression`，提示近期版本引入的不稳定因素需优先排查。
- **安全与权限边界**：Agent 执行批量破坏性操作（#105046）、MCP OAuth 授权未撤销（#105134）、PowerShell 保护路径检查误伤（#105507）——**权限控制既需更严格又需更精确**。
- **企业/网关部署受阻**：`apiKeyHelper` 不重跑（#105408，29 👍）、Vertex 认证配置，说明 **API 网关与企业鉴权链路**是重要使用场景。
- **插件与 IDE 开发者工具链待完善**：测试并发/超时控制、重复编译、多会话编排，显示生态工具**从可用走向好用**的阶段诉求。

---

*说明：本日报仅依据提供的 GitHub 数据生成，未包含 PR 进展（数据源为 0 条）；Issue 编号、评论与点赞数均按原始数据引用。*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报 · 2026-11-20

## 1. 今日速览

今日最显著的信号是两款 macOS 客户端启动崩溃回归（#62650、#62683），影响版本 26.1117.31558，属于发布阻塞级问题；同时 `rust-v0.171.0` 正式版引入 GPT-6.2 Sol / Astra 模型目录并默认选中 Sol，TUI 工作区默认开启。Windows 侧围绕 sandbox 权限、Computer Use 与 Desktop 会话管理的长期问题继续高频更新，仍是社区摩擦最集中的区域。

## 2. 版本发布

- **rust-v0.171.0**
  新增 GPT-6.2 Sol 与 Astra 至模型目录，Sol 为默认目录选择项（#62106）；TUI 工作区默认启用，支持可搜索文档预览、图片预览及子代理对话记录（#61352、#61888、#61889、#61919 等）。
  https://github.com/openai/codex/releases
- **rust-v0.173.0-alpha.1**：0.173.0-alph

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报（2026-11-20）

## 1. 今日速览

v0.71.0-preview.0 与正式版 v0.70.0 同日发布，加上 nightly 构建，版本迭代密集。Agent 子系统的稳定性问题继续占据社区讨论主线：子代理（subagent）中断处理、通用代理卡死、浏览器代理配置失效等 P1/P2 缺陷长期开放，且多数被标记为 `need-retesting`。PR 侧则以 CLI 会话恢复、路径解析、遥测与 ACP 模式的细节修复为主，缺少大型功能合入。

## 2. 版本发布

**v0.71.0-preview.0**
- 包含 v0.70.0-preview.0 与 v0.69 的变更日志，以及版本号递增的自动化提交。
- 链接：https://github.com/google-gemini/gemini-cli/releases

**v0.71.0-nightly.20261120.gd4cb1713f**
- `fix(core,cli)`：模板占位符替换时保留字面量 `$` 字符（PR #30136）。
- `feat(cli)`：新增 `/stats heatmap` 子命令，展示每日 token 使用热图。
- 链接：https://github.com/google-gemini/gemini-cli/pull/30136

**v0.70.0（正式版）**
- 汇总 v0.69.0-preview.0、v0.68.0 变更日志，并基于 nightly 构建递增版本号。
- 链接：https://github.com/google-gemini/gemini-cli/releases

## 3. 社区热点 Issues

1. **#22323 子代理 MAX_TURNS 中断被误报为成功**（P1，13 条评论）— `codebase_investigator` 在未完成分析即触及回合上限时，仍返回 `status: "success"` 与 `Termination Reason: "GOAL"`，导致中断被静默掩盖。这是当前评论最多的问题，直接影响结果可信度。
   https://github.com/google-gemini/gemini-cli/issues/22323

2. **#21409 通用代理无限挂起**（P1，8 条评论，👍8）— 一旦委派给 generalist agent 便永久卡住，简单操作如创建文件夹也会挂起，用户等待长达一小时。点赞数最高，说明影响面广。
   https://github.com/google-gemini/gemini-cli/issues/21409

3. **#19873 零依赖 OS 沙箱 + 执行后意图路由**（P2，9 条评论）— 主张充分利用 Gemini 3 模型的原生 bash 亲和性，通过 POSIX 工具链探索与编辑代码库。属于架构级提案。
   https://github.com/google-gemini/gemini-cli/issues/19873

4. **#21968 Gemini 不主动使用 skills 与子代理**（P2，7 条评论）— 用户反馈除非显式指令，模型几乎不会自主调用自定义技能和子代理，削弱了相关功能的实际价值。
   https://github.com/google-gemini/gemini-cli/issues/21968

5. **#22745 AST 感知的文件读取、搜索与代码库映射评估**（P2，7 条评论）— EPIC 跟踪项，目标是借助 AST 精确读取方法边界、减少交互回合数。
   https://github.com/google-gemini/gemini-cli/issues/22745

6. **#22267 Browser Agent 忽略 settings.json 覆盖**（P2，5 条评论）— 浏览器代理完全不读取全局或项目级配置（如 `maxTurns`），配置系统存在断层。
   https://github.com/google-gemini/gemini-cli/issues/22267

7. **#21983 浏览器子代理在 Wayland 下失败**（P1，4 条评论）— Linux Wayland 桌面环境下的兼容性问题，影响面明确。
   https://github.com/google-gemini/gemini-cli/issues/21983

8. **#24246 工具数超限触发 400 错误**（P2，3 条评论）— 可用工具超过约 128/400 个时请求失败，期望代理能更智能地约束工具范围。
   https://github.com/google-gemini/gemini-cli/issues/24246

9. **#22672 代理应抑制破坏性操作**（P2，3 条评论）— 模型在复杂 git 操作中会使用 `git reset` 或 `--force`，而非更安全的替代方案。
   https://github.com/google-gemini/gemini-cli/issues/22672

10. **#29916 Windows `~\` 路径未展开**（已关闭，2 条评论）— `resolvePath()` 仅识别 `~` 与 `~/...`，不识别 Windows 原生写法，导致策略文件加载失败。对应 PR 已同步关闭。
    https://github.com/google-gemini/gemini-cli/issues/29916

## 4. 重要 PR 进展

1. **#30389 `--resume` 恢复最近活跃而非最近启动的会话**（P2，开放）— 修正 `RESUME_LATEST` 的解析逻辑，更符合用户预期。
   https://github.com/google-gemini/gemini-cli/pull/30389

2. **#30376 Windows 波浪号反斜杠路径展开**（已关闭）— 修复 `~\...` 字面量未展开导致的策略路径问题。
   https://github.com/google-gemini/gemini-cli/pull/30376

3. **#30370 处理 `dir/**` 模式下嵌套 .gitignore 的反向包含**（已关闭）— 修复通配目录下 `!keep.txt` 等规则被错误忽略。
   https://github.com/google-gemini/gemini-cli/pull/30370

4. **#30094 在 UI 中显示正在执行的子代理工具调用**（P2，开放，help wanted）— 修复非根调度器过滤逻辑，使无需审批的读取/搜索类调用可见。关联 #22589。
   https://github.com/google-gemini/gemini-cli/pull/30094

5. **#29823 Android/Termux 回退系统 ripgrep**（已关闭）— 解决 `grep_search` 在 Bionic libc 下因缺少 ELF 链接器而报 `ENOENT` 的问题。
   https://github.com/google-gemini/gemini-cli/pull/29823

6. **#30268 让 YOLO 模式尊重受信任状态**（开放）— 在 shell 污染/构建文件风险检查与 `PolicyEngine` 中识别 `--approval-mode=yolo`，避免自主运行被配置误拦。
   https://github.com/google-gemini/gemini-cli/pull/30268

7. **#30212 新增按工具调用可配置超时 `tools.callTimeout`**（P3，开放，help wanted）— 默认 0 表示禁用，超时后通过 `AbortSignal` 以可恢复错误结束调用。
   https://github.com/google-gemini/gemini-cli/pull/30212

8. **#30157 修正 `safeJsonStringify` 的循环引用误判**（已关闭）— 仅对真正的循环替换为 `[Circular]`，修复 OpenTelemetry 共享数组被误标记的问题。
   https://github.com/google-gemini/gemini-cli/pull/30157

9. **#30156 缓冲聊天压缩事件直至 OTel SDK 就绪**（已关闭）— `logChatCompression` 改为统一走 `bufferTelemetryEvent`，避免早期事件丢失。
   https://github.com/google-gemini/gemini-cli/pull/30156

10. **#30154 ACP 模式进入前刷新缓冲 stdio**（已关闭）— 修复 ACP 运行时 stderr 无输出、hook 警告滞留缓冲区的问题。
    https://github.com/google-gemini/gemini-cli/pull/30154

## 5. 功能需求趋势

- **子代理可观测性与可信度**：子代理轨迹通过 `/chat share` 共享（#22598）、UI 展示子代理调用（#30094）、修复中断误报（#22323），社区要求"看得见、信得过"。
- **代码理解能力升级**：AST 感知的读取、搜索与代码库映射（#22745、#22746），并推荐 tilth、glyph 作为起点。
- **模型原生能力释放**：利用 Gemini 3 的 bash 亲和性（#19873）、提升 skills/子代理的自主调用率（#21968）。
- **浏览器代理健壮性**：配置覆盖（#22267）、会话接管与锁恢复（#22232）、Wayland 支持（#21983）。
- **安全与可控性**：抑制破坏性命令（#22672）、工具规模上限（#24246）、按调用超时（#30212）。
- **使用统计**：nightly 中新增 `/stats heatmap`，反映对 token 消耗可视化的需求。

## 6. 开发者关注点

- **代理执行可靠性是首要痛点**：多个 P1 问题（#22323、#21409、#21983）长期开放并反复标记 `need-retesting`，说明修复尚未稳定验证。
- **配置系统一致性不足**：子代理不读取 settings.json（#22267）、符号链接代理不被识别（#20079）、Windows 路径语法缺失（#29916），指向配置与平台适配的碎片化。
- **子代理"能力闲置"**：模型不主动调用 skills 与子代理（#21968），使相关投入难以兑现。
- **工具规模与权限边界**：超过 128/400 个工具即报错（#24246），YOLO 与策略引擎交互不畅（#30268），提示需要更精细的工具治理。
- **清理与副作用管控**：模型在随机目录生成临时脚本（#23571）、使用危险 git 命令（#22672），增加维护成本。
- **可观测性补强**：遥测缓冲（#30156）、循环引用序列化（#30157）、ACP stdio（#30154）、子代理轨迹共享（#22598）等修复密集出现，显示调试体验正被系统性地补齐。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报（2026-11-20）

## 1. 今日速览

今日发布 v1.0.115-2，重点强化沙箱能力（Windows 默认开启 sandbox 包查询、macOS 可细粒度允许 Mach service 查找）并为 `/model` 增加 Ctrl+X 然后 A 操作。社区侧 40 条 Issue 更新，以 MCP（OAuth、密钥注入、资源解析）和平台兼容性（Windows/WSL）问题最为集中，多个相关 Issue 今日关闭。功能需求集中在权限体验简化、提示缓存 TTL 与插件规范支持。

## 2. 版本发布

**v1.0.115-2**（来源：Releases 条目）
- Windows 沙箱包查询默认启用；可通过将 `sandbox.userPolicy.capabilities` 设为 `[]` 退出。
- 支持通过 `sandbox.userPolicy.seatbelt.extraMachLookups` 在沙箱命令中允许特定 macOS Mach service 查找，且无需开启 Keychain 访问。
- `/model` 中新增 Ctrl+X 然后 A 操作（Release 说明在此处截断，其余内容未提供）。
- 链接：github.com/github/copilot-cli 的 Releases 页（条目未附单独链接）

## 3. 社区热点 Issues（10 条）

1. **#5478 [OPEN] Cortex XDR 的 `parent_process_spoofing` 导致启动 shell 被杀（Windows）** — 8 条评论，今日更新评论数最多。在有 git 仓库的目录启动 copilot 时，copilot 调用 git 触发 Cortex XDR 终止 cmd/powershell，直接影响 Windows 企业环境可用性。
   https://github.com/github/copilot-cli/issues/5478

2. **#5220 [OPEN] Claude 模型支持 1 小时提示缓存 TTL** — 17 个 👍，今日列表中赞同最多。指出默认 5 分钟缓存 TTL 在正常交互节奏下会过期，属于可量化的成本/延迟优化诉求。
   https://github.com/github/copilot-cli/issues/5220

3. **#4203 [OPEN] 远程 MCP（OAuth）访问令牌过期时强制交互式重认证** — 5 条评论、5 个 👍。有效 refresh_token 存在时仍丢弃 MCP 工具，影响无人值守/长会话场景。
   https://github.com/github/copilot-cli/issues/4203

4. **#5066 [CLOSED] Assisted permissions 回归** — 5 条评论，今日已关闭。assisted 模式对过多命令要求批准，涉及权限模型的实际体验回归。
   https://github.com/github/copilot-cli/issues/5066

5. **#2109 [CLOSED] ACP 支持 `ask_user` / `ask_question` 扩展方法** — 9 个 👍，今日已关闭。让自定义 ACP 客户端能回传结构化澄清答案，对第三方客户端集成价值高。
   https://github.com/github/copilot-cli/issues/2109

6. **#5090 [OPEN] 启动与输入行体验差（MCP、插件加载阻塞）** — 指出启动需等待 MCP/插件加载完成才能工作，建议改为异步，属于启动性能与交互流畅度问题。
   https://github.com/github/copilot-cli/issues/5090

7. **#5440 [OPEN] Agent Plugins 1.0 的 `.instructions.md` 与 `applyTo` frontmatter 被静默忽略** — 插件按 1.0.0 schema 加载 skills、MCP、自定义 agent 等，但 rules 目录内容不生效，影响插件规范一致性。
   https://github.com/github/copilot-cli/issues/5440

8. **#5539 [OPEN] 权限 UX：需要持久化的用户级读权限，避免逐仓库重复配置** — 今日新建，0 评论。反映权限配置过于复杂、难以自信配置的普遍痛点。
   https://github.com/github/copilot-cli/issues/5539

9. **#5071 [OPEN] Windows winget 安装后 `/upgrade` 破坏 WinGet\Links 别名** — 内置升级绕过 winget，导致别名被覆盖、Add-Remove Programs 仍显示旧版本。
   https://github.com/github/copilot-cli/issues/5071

10. **#3064 [CLOSED] MCP 服务器启动失败时应返回更严格的退出码（CI/agent 场景）** — 今日关闭。CI 中即使零工具可用也退出 0，影响 Agentic Workflows 等自动化消费方。
    https://github.com/github/copilot-cli/issues/3064

**其他今日关闭、值得留意的 MCP 修复类 Issue：** #4793（CIMD 声明固定回调端口 33418 与 CLI 使用临时端口不一致）、#4916（`text/plain` 的 `resource.blob` 结果以空输出到达模型）、#4985（`${secret:...}` 占位符未传入 stdio MCP 子进程）、#5039（MCP-Protocol-Version 被拒时无降级导致 OAuth 登录 400）、#5119（Windows 卸载插件报 Access is denied）、#4632（WSL 下 WorkIQ OAuth 回调 404）、#4803（`/ask`、`/btw` 答案变空白）、#4733（`max_output_tokens` 截断时事件丢失）。

## 4. 重要 PR 进展

过去 24 小时内更新的 Pull Request 共 **0 条**，本节无内容可总结。

## 5. 功能需求趋势

- **MCP 生态成熟度**：OAuth 刷新与协议版本降级、secret 占位符注入、资源 blob 解析、回调端口一致性、`/mcp` 服务器名大小写不敏感匹配（#5050）——今日更新的 Issue 中占比最高。
- **权限模型简化与新执行策略**：assisted 模式回归（#5066）、用户级持久读权限（#5539），叠加本版沙箱策略配置项，显示权限/沙箱是当前演进主轴。
- **成本与延迟优化**：Claude 长 TTL 提示缓存（#5220）、MCP/插件启动异步化（#5090）。
- **插件规范支持**：Agent Plugins 1.0 的 instructions/rules 支持（#5440）。
- **CI/非交互可靠性**：MCP 启动失败退出码（#3064）、BYOK 截断事件丢失（#4733）。
- **IDE/客户端集成**：ACP 澄清问答扩展（#2109）、`/fork` 新终端与 `copilot --fork` 启动参数（#4580）。

## 6. 开发者关注点

- **Windows 与 WSL 环境摩擦**：安全软件（Cortex XDR）误杀、winget 升级路径冲突、插件卸载权限拒绝、WSL 下 OAuth 回调失败，构成今日最大痛点集群。
- **MCP 集成可靠性**：认证令牌生命周期、密钥传递、协议协商与输出解析问题集中，且多数今日才关闭，此前长期影响用户。
- **权限配置负担**：用户普遍认为权限规则难以理解与配置，既要求更细粒度（沙箱 Mach service 白名单），也要求更简单（持久化的用户级规则）。
- **自动化场景可信度**：CI/agent 使用中退出码不反映真实失败、输出截断导致事件丢失，降低了无人值守流程的可依赖性。
- **交互体验细节**：启动阻塞、答案文本消失、`/model` 快捷键等界面级问题仍有反馈。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 · 2026-11-20

## 今日速览

今日无新版本发布，但社区讨论集中在 v2 架构的稳定性问题上：TUI 状态管理（标签共享、Agent 目录卡死、模型显示错误）、Windows 平台工具链异常，以及快照功能严重失控（单仓库打包 90 GB）成为焦点。PR 侧则以两项主线推进：Code Mode 脚本差异可视化，以及 Rust 版 machine worker 的首个握手与帧模块。

## 版本发布

过去 24 小时无新 Release。

## 社区热点 Issues

1. **#64073 [FEATURE] 恢复前台子代理执行**（23 评论，👍7）— 今日讨论量最高的需求，社区明确希望子代理在前台可见地运行，反映对可观测性与可控性的诉求。
   https://github.com/anomalyco/opencode/issues/64073

2. **#47998 TUI 保存的标签在本地与远程服务器间共享**（11 评论，👍4，已复现）— v2 TUI 会话状态隔离缺陷，会串扰不同服务器的标签布局，属数据正确性问题。
   https://github.com/anomalyco/opencode/issues/47998

3. **#53019 [FEATURE] v2 插件无法转换助手文本用于展示或完成回调**（9 评论，👍13）— 点赞数最高，插件生态扩展性缺口，影响依赖标记文本做后处理的插件。
   https://github.com/anomalyco/opencode/issues/53019

4. **#65127 快照捕获包含 git 忽略文件与超过 2 MiB 的文件，向快照库写入 90 GB**（4 评论，已模拟复现）— 与 `/undo` 文件系统功能直接相关，资源失控风险高，已有对应修复 PR。
   https://github.com/anomalyco/opencode/issues/65127

5. **#47223 event 表无界增长（8 天占 73 GB 数据库中的 64 GB），最终导致 POST /session 超时**（已关闭）— 长期高频会话下的数据库膨胀问题，虽已关闭但揭示了事件表缺乏保留策略。
   https://github.com/anomalyco/opencode/issues/47223

6. **#58989 go：`/v1/messages` 丢弃 `anthropic-beta` 与 `anthropic-version` 头**（3 评论）— 导致 Anthropic 格式的 beta 能力失效，影响网关层代理正确性。
   https://github.com/anomalyco/opencode/issues/58989

7. **#63435 TUI Agent 目录在 `agent.updated` 缺少 location 时无法恢复**（4 评论，已模拟复现）— 长生命周期 TUI 只剩内置 Agent，插件 Agent 消失，属状态修复缺陷。
   https://github.com/anomalyco/opencode/issues/63435

8. **#65092 自定义 Anthropic 兼容 Provider 在工具调用时于终止事件后发出 step-start**（4 评论）— 流式事件顺序错误，影响第三方 Provider 接入兼容性。
   https://github.com/anomalyco/opencode/issues/65092

9. **#65245 CLI 首条用户消息无限挂起（无响应、无报错）**（3 评论）— v2.3.2 上的严重可用性阻断，首次对话即卡死。
   https://github.com/anomalyco/opencode/issues/65245

10. **#65214 Windows 下 shell 工具对带路径参数的命令返回空输出**（3 评论）— Windows 用户核心工具链故障，非路径命令正常，定位线索明确。
    https://github.com/anomalyco/opencode/issues/65214

其他值得留意的短条目：#65231（mini/TUI 状态行显示默认模型而非 `--agent` 解析模型，已复现）、#65145（桌面端删除后仍残留重复项目）、#65156（Ollama 下 Qwen2.5-Coder 1.5B 返回空 `analyze` 工具调用，已关闭）。

## 重要 PR 进展

1. **#65002 [contributor] Code Mode 脚本在 execute 块下方展示文件差异**（jlongster）— 直接针对 `dev`，为 Code Mode 增加可视化能力。
   https://github.com/anomalyco/opencode/pull/65002

2. **#65247 [contributor] Code Mode 脚本运行时即显示差异**（jlongster）— 堆叠于 #65002，将差异展示从“完成后”提前到“运行中”，覆盖桌面时间线与 TUI。
   https://github.com/anomalyco/opencode/pull/65247

3. **#65249 [contributor] Rust 中的 worker 握手与帧链接**（kitlangton）— machine worker 首个切片，验证第二实现可逐字节讲 link 协议，纯库无网络与进程处理。
   https://github.com/anomalyco/opencode/pull/65249

4. **#65239 核心：强制执行快照忽略/大小限制并约束捕获耗时**（neriousy）— 同时修复 #64918 与 #65127，是今日最高风险 Issue 的直接对策。
   https://github.com/anomalyco/opencode/pull/65239

5. **#65236 自动化：为定时代码提供会话的 Code Mode 工具**（rekram1-node）— 让 scheduled code 与服务会话共享 Code Mode 扩展，统一执行环境。
   https://github.com/anomalyco/opencode/pull/65236

6. **#64784 [contributor] release：将 dev 提升到 production**（opencode-agent[bot]）— 包含 Tidepool Alpha Free 与 Gemini 4 Neon 的 Console 文档，以及上一轮提升以来的 core/app/CLI 变更。
   https://github.com/anomalyco/opencode/pull/64784

7. **#64797 / #64798 / #64796 [contributor] 以 OpenMono 为默认等宽字体**（iamdavidhill）— 三处并行落地（应用、数据站、官网与文档），基于 OpenMono 1.000 发布。
   https://github.com/anomalyco/opencode/pull/64797 · https://github.com/anomalyco/opencode/pull/64798 · https://github.com/anomalyco/opencode/pull/64796

8. **#65024 TUI：按 ID 查找会话**（OscarJVD）— 会话选择器此前仅匹配标题，粘贴会话 ID 无法命中。
   https://github.com/anomalyco/opencode/pull/65024

9. **#65246 会话 UI：推理内容滚动时保持头部可见**（jtaraque）— 关闭 #60009，解决长推理内容需回滚到顶部才能折叠的问题。
   https://github.com/anomalyco/opencode/pull/65246

10. **#65184 CLI：按终端宽度对齐 stats 标签**（pqminh27，关闭 #65183）+ **#65240 修复非整数缩放下的模型选择器浮层循环**（neriousy，修复 #65138）— 两项小修，分别改善 CLI 表格排版与桌面高 DPI 体验。
    https://github.com/anomalyco/opencode/pull/65184 · https://github.com/anomalyco/opencode/pull/65240

## 功能需求趋势

- **子代理与执行可视化**：#64073 要求恢复前台子代理执行，叠加 Code Mode 差异实时展示系列 PR，说明社区关注“Agent 做了什么、何时做”。
- **插件扩展能力**：#53019（👍13）为最高赞需求，插件需要能转换助手文本用于展示或完成回调，反映插件 API 的深度不足。
- **TUI / 交互细节**：#48563（底部模型与推理强度标签可点击）、#60009（点击任意区域折叠思考内容）、#65024（按 ID 找会话），集中在减少操作摩擦。
- **会话状态正确性**：#47998 标签跨服务器共享、#63435 Agent 目录无法恢复、#65231 `--agent` 模型未生效，均指向 v2 状态同步逻辑。
- **资源与存储治理**：#65127（90 GB 快照）、#47223（event 表 8 天 64 GB）显示快照与事件日志缺乏边界控制。

## 开发者关注点

- **Windows 平台问题密集**：今日多条 v2 Windows 报告（#65245 CLI 首消息挂起、#65214 shell 路径参数空输出、#65092 自定义 Provider 事件顺序、#65158 NumPad Home/End 忽略绑定、#65145 桌面重复项目），Windows 体验是当前最集中的痛点。
- **存储膨胀风险**：快照误收 git 忽略与大文件、event 表无界增长，两者都会在真实项目中造成 GB 级浪费，社区已有明确复现路径与修复 PR，值得优先跟进。
- **Provider 兼容性**：`anthropic-beta`/`anthropic-version` 头丢失、OpenAI 工具调用 delta 缺 id/name、Ollama 下小模型返回空工具调用，说明多 Provider 路径的协议保真度仍需收紧。
- **崩溃即阻塞**：首次消息无限等待、sessions 超时等故障无错误提示，用户缺少可诊断信息，建议关注日志与错误透出能力。

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报（2026-11-20）

> 数据来源：github.com/badlogic/pi-mono

## 今日速览

今日发布 v1.6.0，GPT-6.2 Astra / GPT-6.2 Sol 上线 openai、azure、openai-codex 三个 provider，Sol 成为三者默认模型。社区侧集中在模型适配与稳定性：Google 适配器对 Gemini 4 Hydrogen 的 `xhigh` 思考级别报错（p0），Anthropic 登录在 Team/Enterprise 席位失败（p0），以及多个崩溃与缓存计量问题的修复 PR 集中落地。

## 版本发布

**v1.6.0**
- **GPT-6.2 Astra 与 GPT-6.2 Sol**：两个模型均可在 `openai`、`azure`、`openai-codex` provider 上使用；GPT-6.2 Sol 成为这三个 provider 的默认模型。
- 详见 Providers 文档：https://github.com/earendil-works/pi/blob/v1.6.0/packages/coding-agent/docs/providers.md

## 社区热点 Issues

1. **[#12184] Google 适配器拒绝 Gemini 4 Hydrogen 的 xhigh 级别**（OPEN，p0，5 评论，👍1）
   Gemini 4 Hydrogen 支持第四档思考级别 `xhigh`，models.dev 已暴露 low/medium/high/xhigh，但 Google 适配器报错，选择器与运行时不一致。
   https://github.com/earendil-works/pi/issues/12184

2. **[#12318] Anthropic `/login` 在 Claude Team/Enterprise 席位失败："Unknown scope"**（OPEN，p0，3 评论）
   授权请求在同意页之前即被拒绝，影响团队/企业用户登录主路径。
   https://github.com/earendil-works/pi/issues/12318

3. **[#9134] Anthropic 适配器静默丢弃自定义工具 schema 的根级 anyOf**（OPEN，bug/inprogress，7 评论，👍1）
   校验器保留约束，但面向模型的 `input_schema` 被静默删除，可能导致模型输出不符合校验、问题难以定位。
   https://github.com/earendil-works/pi/issues/9134

4. **[#12340] Windows Git Bash 下长 RPC bash 命令被静默截断**（OPEN，bug/inprogress，3 评论）
   8,336 字符命令只输出 `START` 却返回 `exitCode: 0`、`truncated: false`，截断无任何信号，属静默数据完整性问题。
   https://github.com/earendil-works/pi/issues/12340

5. **[#12154] 上次压缩后超过约 12 万条目的会话无法加载（CLOSED，fix-available，2 评论）**
   `buildContextEntries` 触发 `RangeError: Maximum call stack size exceeded`，长会话与 `pi --session` 启动均崩溃。
   https://github.com/earendil-works/pi/issues/12154

6. **[#12303] Read 工具在特定窗口内触发 abort 会使进程崩溃**（CLOSED，bug，2 评论）
   在 MIME 检测与创建读取流之间中止时会崩整个进程。
   https://github.com/earendil-works/pi/issues/12303

7. **[#12265] 选中虚拟模型时 compaction.modelOverrides 对路由模型无效**（OPEN，3 评论）
   路由扩展（如 `hybrid/auto` 在 131K 与 64K 窗口模型间切换）时，按模型配置的压缩参数被忽略。
   https://github.com/earendil-works/pi/issues/12265

8. **[#11127] 允许配置空闲缓存预热时间窗口**（OPEN，5 评论）
   当前 30 分钟缓存 TTL 下请求希望可配置 60/120 分钟，为保留默认值的前提下增加可调项。
   https://github.com/earendil-works/pi/issues/11127

9. **[#12222] 贡献提案：在 macOS 上保留 argv 以支持 Zellij 会话恢复**（OPEN，3 评论）
   请求在 CLI、RPC、Bun 启动路径跳过 `process.title` 赋值（不影响 Linux/Windows），是对 #9766 的复议。
   https://github.com/earendil-works/pi/issues/12222

10. **[#10741] Groq Qwen3.8 27B 因 Pi 发送 `developer` 角色返回 HTTP 400**（CLOSED，7 评论）
    简单问候即触发 minijinja 模板渲染失败，推动 openai-completions 默认指令角色从 developer 改回 system。
    https://github.com/earendil-works/pi/issues/10741

## 重要 PR 进展

1. **[#12357] 区分 Google 提示被拦截与流不完整**（OPEN）
   Google 因内容违规返回 `promptFeedback` 时，适配器此前无法区分两种失败，现给出可操作的诊断信息。
   https://github.com/earendil-works/pi/pull/12357

2. **[#12356] JSON 模式下最终响应失败时以非零码退出**（OPEN）
   `pi --mode json` 在 stopReason 为 `error`/`aborted` 时仍退出 0，与文本模式的退出 1 不一致。
   https://github.com/earendil-works/pi/pull/12356

3. **[#12134] 将 openai-completions 默认指令角色改为 system**（CLOSED）
   直接回应 #10741，修复 Groq Qwen3.8 27B 首次请求 400 的问题。
   https://github.com/earendil-works/pi/pull/12134

4. **[#12360] 修复上次压缩后超多条目会话的加载**（CLOSED）
   以展开方式传参导致栈溢出，改用非展开方式追加条目，对应 #12154。
   https://github.com/earendil-works/pi/pull/12360

5. **[#12358] 上报 OpenAI Decisions 缓存读/写 token**（CLOSED）
   `parseClassifierUsage()` 忽略 `cached_tokens` 与 `cache_write_tokens`，导致用量统计缺缓存部分、缓存费率为零。
   https://github.com/earendil-works/pi/pull/12358

6. **[#12352] 重试网关 provider-unavailable 与不完整响应错误**（CLOSED）
   处理 OpenRouter 类网关中途 SSE `event: error` 帧（无 HTTP 状态）的场景。
   https://github.com/earendil-works/pi/pull/12352

7. **[#12348] 重试退避结束后移除 abort 监听器**（CLOSED）
   `retryAssistantCall()` 每次退避残留一个监听器，长生命周期 signal 会持续累积闭包。
   https://github.com/earendil-works/pi/pull/12348

8. **[#12355] 修复超长行后接空行时 bash 输出显示为空**（CLOSED）
   超过 50KB 的行接空行时返回 `(no output)`，约 200KB 后仅返回换行，日志文件本身完整。
   https://github.com/earendil-works/pi/pull/12355

9. **[#12363] code mode 仅列出可达命名空间**（CLOSED）
   当 `AgentDoc.tools` 为精确白名单时，提示仍列出被禁用的扩展命名空间，误导模型。
   https://github.com/earendil-works/pi/pull/12363

10. **[#12345] 树导航不再重复向历史追加提示**（CLOSED，对应 #12279）
    `/tree` 与扩展 `navigateTree` 使用 `populateHistory: true` 重渲染，每次导航都重复追加。
    https://github.com/earendil-works/pi/pull/12345

其他值得一提：**#12347** 修复工具预览文字在反差终端主题下不可读；**#12349** 修复扩展调用 `pasteToEditor`/`setEditorText` 后编辑器不重绘；**#12351** 修复答案中链接下划线位置。

## 功能需求趋势

- **新模型与推理级别支持**：GPT-6.2 Astra/Sol 落地；Gemini 4 Hydrogen 的 `xhigh` 级别适配滞后（#12184）。
- **多账户与状态隔离**：`--profile` 隔离需求（#3966），当前需手动管理 `PI_CODING_AGENT_DIR`。
- **多模型路由与虚拟模型**：路由扩展需要压缩等 per-model 配置正确作用于被路由模型（#12265）。
- **缓存与成本可观测性**：空闲缓存预热窗口可配置（#11127）、缓存 token 计量修复（#12358、#12264）。
- **多协议/宿主集成**：ACP 适配器用于 Pi Durable（#10389）、Zellij 会话恢复（#12222）。
- **扩展与 code mode 能力**：会话启动早期 run 丢失 `resources_discover` 技能（#12297）、code mode 命名空间可达性（#12363）、文本附件内容块（#12135）。

## 开发者关注点

- **静默失败最伤**：工具 schema 约束被删除（#9134）、长命令被截断但报告成功（#12340）、JSON 模式失败仍退出 0（#12356）、超长输出显示 `(no output)`（#12355）——共性是错误不可见，社区反复强调可操作性诊断。
- **跨 provider 兼容性**：`developer` 角色、`xhigh` 级别、网关中途错误帧等，均源于不同 provider 行为差异。
- **登录与计费路径稳定性**：Anthropic Team/Enterprise 席位登录失败、OpenAI Decisions 缓存计量错误，直接影响可用性与成本核算。
- **长会话与大输出的资源边界**：栈溢出（#12154）、abort 崩溃（#12303）、重试监听器泄漏（#10506）、SIGTSTP 监听器与终端归属（#12339），反映规模场景下的健壮性缺口。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报（2026-11-20）

## 1. 今日速览

今日无新版本发布，社区动态以 CI 稳定性问题为主：多条长期存在的 Main CI 失败追踪 Issue 仍在持续更新（其中 #14724 评论数已达 503 条），同时新增多条当日 CI 失败报告。功能侧，Managed Agent 服务端的锁与存储键重构、Web Shell 会话恢复与部分提交、以及 Core 层转录索引缓存优化成为 PR 焦点。

## 2. 版本发布

过去 24 小时内无新 Release。

## 3. 社区热点 Issues

1. **#14724 Main CI failed: Managed Agent gate — no test identified**（503 评论，OPEN）
   从 2026-10-19 持续至今的自动追踪 Issue，评论量远超其他条目，反映出 Managed Agent 门禁在无法定位具体测试时长期无法收敛。
   https://github.com/QwenLM/qwen-code/issues/14724

2. **#11680 Main CI failed: E2E Tests — no test identified**（99 评论，OPEN）
   自 9 月起按 commit 追踪的 E2E 失败记录，说明 E2E 在测试结果产出前即失败的问题反复出现。
   https://github.com/QwenLM/qwen-code/issues/11680

3. **#13078 Daily dependency CVE audit failed**（57 评论，OPEN）
   每日依赖 CVE 审计任务失败，涉及可能新增的高危漏洞，属于供应链安全信号，值得优先排查。
   https://github.com/QwenLM/qwen-code/issues/13078

4. **#11678 Main CI failed: Qwen Code CI（Windows 测试）**（50 评论，autofix/in-progress）
   主干 CI 失败且已有自动修复流程介入，可作为观察自动修复机制有效性的样本。
   https://github.com/QwenLM/qwen-code/issues/11678

5. **#15486 自动压缩后请求体积估算重复计算待处理工具结果并额外加 20K 填充**（P1，OPEN）
   导致回合被中止或以 `max_tokens: 1` 发送，属核心 token 管理与上下文性能问题，优先级 P1 且需讨论。
   https://github.com/QwenLM/qwen-code/issues/15486

6. **#16832 手动 PR 重审通道失效：workflow 硬编码依赖已不存在的 qwen-code-ci-bot（404）**（P2，OPEN）
   仓库级 PR 重审能力完全失效，直接影响协作与 CI 流程，是流程性问题中影响面较大的一条。
   https://github.com/QwenLM/qwen-code/issues/16832

7. **#17523 managed-agent：准入前的加载拒绝仍消耗普通重试预算**（P2，OPEN）
   会话加载前状态未就绪却计为重试，可能放大失败率，属会话管理可靠性问题。
   https://github.com/QwenLM/qwen-code/issues/17523

8. **#17237 Web Shell worktree Codex 对齐：保留 + 快照（P6）与可配置根目录（P7）**（P3，blocked）
   承接 PR #17228 已交付的 P1–P5，指明 Web Shell 隔离工作区后续演进方向。
   https://github.com/QwenLM/qwen-code/issues/17237

9. **#17284 Agent loop：#17045 遗留的后续工作**（P2，OPEN）
   涉及统一 agent loop 与事件总线内核切换后的收尾项，且 #17045 将于 2026-11-21 冻结，时间敏感。
   https://github.com/QwenLM/qwen-code/issues/17284

10. **#17086 qwen4-max-preview：服务端中文 tool-URL 规则泄漏进上下文，被模型判定为提示注入**（P2，CLOSED）
    涉及模型输出与客户端请求不一致的 badcase，对使用 Token Plan 端点的用户有直接参考价值。
    https://github.com/QwenLM/qwen-code/issues/17086

## 4. 重要 PR 进展

1. **#17959 refactor(managed-agent)：移除冗余进程内锁与遗留 Session 守卫桩**（OPEN）
   删除三处冗余进程内锁与死代码，不改动锁顺序、SQL 与事务边界。
   https://github.com/QwenLM/qwen-code/pull/17959

2. **#17958 refactor(managed-agent)：移除冗余存储键**（CLOSED）
   删除 managed 存储协调表中的两个冗余唯一键，附双语设计说明。
   https://github.com/QwenLM/qwen-code/pull/17958

3. **#17961 fix(managed-agent)：Hosted Harness 客户端在单一锁下移交**（OPEN）
   统一客户端构建/发布、连接器关闭与新 Harness 代际采纳的加锁路径。
   https://github.com/QwenLM/qwen-code/pull/17961

4. **#17910 fix(core)：以有界缓存类保留超大转录索引**（OPEN）
   超过 64 MiB 索引预算的转录索引改入独立 256 MiB LRU 保留类，而非每次请求拒绝准入。
   https://github.com/QwenLM/qwen-code/pull/17910

5. **#16891 fix(managed-agent)：对齐 contract、管理与持久化三处的 serverRevision 上限**（OPEN）
   修正同一字段存在三种不同上限导致的不一致。
   https://github.com/QwenLM/qwen-code/pull/16891

6. **#16528 feat(web-shell)：会话加载时恢复被中断的回合**（OPEN）
   daemon 或环境重启后，Web Shell 可自动恢复此前正在运行的回合，而非停留在 Continue 按钮。
   https://github.com/QwenLM/qwen-code/pull/16528

7. **#16681 feat(web-shell)：提交视图中仅提交选中文件**（OPEN）
   逐文件勾选后部分提交，未勾选文件保留在工作区。
   https://github.com/QwenLM/qwen-code/pull/16681

8. **#17376 feat(cli)：新增原生历史统计**（OPEN，autofix/takeover）
   在 `/stats` 与 Settings → Stats 中加入跨项目历史活动与效率数据。
   https://github.com/QwenLM/qwen-code/pull/17376

9. **#17951 fix(release)：部分发布可续跑而非拒绝重试**（OPEN）
   针对 npm 发布中断后 release 分支已存在的情况，比较重新生成的树与现有分支尖端以支持续跑。
   https://github.com/QwenLM/qwen-code/pull/17951

10. **#16578 fix(serve)：对重复 WebSocket 升级拒绝日志限流**（OPEN）
    同一 `listener@category@client-address` 每分钟最多记录一次，403 与计数行为保持不变。
    https://github.com/QwenLM/qwen-code/pull/16578

## 5. 功能需求趋势

- **Managed Agent 服务端成熟化**：锁、存储键、重试预算、会话加载等大量 PR/Issue 集中于此，显示该子系统正处于密集打磨期。
- **Web Shell 与 Codex 对齐**：worktree 保留/快照、可配置根目录（#17237）、会话恢复（#16528）、部分提交（#16681），指向 Web 端工作流体验。
- **会话管理与多 Agent**：#13644（Agent Host 替换保留固定 provider）、#17284（统一 agent loop），多 Agent 与会话管理路线图持续推进。
- **上下文与性能**：自动压缩后的体积估算（#15486）、转录索引缓存（#17910），属 token 管理与上下文性能方向。
- **渠道集成**：QQ 渠道出站富媒体（#17167 / PR #15450）、Aone 渠道（#17517）、DingTalk 适配器稳定性（#17837），IM 渠道接入面持续扩展。
- **CI/CD 与发布可靠性**：重审通道失效（#16832）、release 续跑（#17951）、flaky 测试治理（#17884、#17837、#17553）。

## 6. 开发者关注点

- **CI 噪音与自治修复**：多条高评论自动追踪 Issue（#14724、#11680、#11678）长期不关闭，开发者难以从中识别真实问题；自动修复（autofix）的状态标签已成为区分进度的主要手段。
- **合并流程阻塞**：#17167 反映 PR #15450 在 72 小时无维护者动作、卡在两项批准与 CI 重跑；#16832 指出手动重审通道整体失效，评审效率是明确痛点。
- **会话可靠性**：加载/替换/中断场景下的状态一致性（#17523、#13644、#16528）是重复出现的问题模式。
- **测试稳定性投入加大**：多条 deflake PR/Issue（#17837、#17553、#17884）显示共享 runner 池的时序问题在消耗较多维护精力。
- **原生统计与可观测性诉求**：#17376 表明用户希望在 CLI 内直接获得历史活动与效率数据。

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI 社区动态日报 · 2026-11-20

> 数据来源：github.com/Hmbown/DeepSeek-TUI（Issue/PR 链接指向 codewhale-hq/Codewhale）

## 1. 今日速览

今日无新版本发布，但社区 Issue 与 PR 活跃度较高：执行策略（execpolicy）沙箱绕过问题成为核心焦点，`awk`/`sed` 静态脚本载荷及 `stdin_piped` 传播被同一天提出 Issue 并由外部贡献者 PR #7430/#7429 跟进修复；同时多名维护者集中提出子代理预算、Skills 索引、维护者门禁等工作流层面的结构性问题。TUI 输入/渲染层面也持续有细节缺陷被记录（粘贴截断、焦点闪烁、Enter 门控）。

## 2. 版本发布

过去 24 小时无新 Release。（0.10.3 相关集成工作仍在 PR 阶段推进，见 PR #7418。）

## 3. 社区热点 Issues（10 条）

1. **#7413 execpolicy：awk/sed 静态脚本载荷未被扫描** — 安全相关。`awk 'BEGIN{system("rm x")}'`、`sed 's/x/rm y/e'` 可从完全静态的程序文本中执行被禁命令，扫描器只检查 argv，导致载荷绕过 deny 列表。当日已有对应修复 PR #7430。链接：codewhale-hq/Codewhale Issue #7413
2. **#7403 tui：`PASTE_BURST_MAX_BYTES`（64 KiB）静默截断原始粘贴** — 用户数据丢失风险，且在 PR #7398 将非 ASCII 字符纳入 burst 缓冲后，大段 CJK 粘贴更易触发。链接：codewhale-hq/Codewhale Issue #7403
3. **#7434 子代理：预算停止即终止、部分结果被静默裁剪，但文档承诺可恢复** — 行为与文档不一致，影响长任务可靠性。链接：codewhale-hq/Codewhale Issue #7434
4. **#7432 Skills：环境索引从父提示中移除、默认值下降 10 倍、子目录不可见** — 直接影响技能可发现性。链接：codewhale-hq/Codewhale Issue #7432
5. **#7433 提案：代理工作前的维护者门禁 + 工作后的回归阶段** — 针对行为变更协议缺失的流程类提案，属治理层面讨论。链接：codewhale-hq/Codewhale Issue #7433
6. **#7344 退出后 GNOME Terminal 保留 Nord 主题色** — 终端配置污染问题，Linux 用户体验缺陷。链接：codewhale-hq/Codewhale Issue #7344
7. **#7343 每次窗口获得焦点即全屏擦除重绘** — 在不支持 DEC 2026 的终端（gnome-terminal/VTE）上出现闪烁。链接：codewhale-hq/Codewhale Issue #7343
8. **#7416 execpolicy：`stdin_piped` 传播存在误标/漏标** — 如 `x || ssh host` 中 `||` 的每个 `|` 都会触发标记；属第 10 轮正确性评审的残余发现。链接：codewhale-hq/Codewhale Issue #7416
9. **#7407 其他只读延迟工具仍被归类为 Unknown** — 导致 Auto-Review 中走 `AskUser`，增加不必要的确认打断；为 #7372 修复的后续。链接：codewhale-hq/Codewhale Issue #7407
10. **#7435 PR 评审任务的 `task` 文本与实际可用工具矛盾** — 即使提供了 read/grep 工具，仍声称“省略的调用方不被检查”。链接：codewhale-hq/Codewhale Issue #7435

另：#7414（第二个 Enter 门控在命令上下文释放后重新吸收 `/command` Enter）、#7402/#7405（均已 CLOSED）同样值得留意。

## 4. 重要 PR 进展（10 条）

1. **#7430 fix(execpolicy)：扫描 awk/sed 静态程序载荷** — 外部贡献者 NieZhuZhu，对应 Issue #7413。链接：codewhale-hq/Codewhale PR #7430
2. **#7429 fix(execpolicy)：收紧 `stdin_piped` 传播与 `numactl --strict`** — 覆盖 #7416 的全部六项发现。链接：codewhale-hq/Codewhale PR #7429
3. **#7431 fix(engine)：将本地只读延迟工具在 `get_tool_category` 中归类为 Safe** — 对应 #7407。链接：codewhale-hq/Codewhale PR #7431
4. **#7424 fix(execpolicy)：在 nix 与启动器旗标上传播动态位** — 处理 `nix develop -c$(echo rm) x` 类绕过。链接：codewhale-hq/Codewhale PR #7424
5. **#7426（CLOSED）fix(execpolicy)：限制重复 `--` 的 deny 目标展开** — 修复 `record_extra_deny` 的指数级重扫。链接：codewhale-hq/Codewhale PR #7426
6. **#7393（CLOSED）0.10.3 lane 8 batch 2：阻止命令策略中重复 `--` 的性能停滞** — 展开时间约每个 `--` 对增长 2.7×。链接：codewhale-hq/Codewhale PR #7393
7. **#7392（CLOSED）feat(plugins)：落地 0.10.3 DSH 对齐（ci/dsh-plugin-parity-0103）** — 含资产修复与验收驱动主机允许列表。链接：codewhale-hq/Codewhale PR #7392
8. **#7383（CLOSED）修复 Gemini 并行工具调用（0.10.3）** — 保持无索引并行调用相互独立，保留延迟 thought signature。链接：codewhale-hq/Codewhale PR #7383
9. **#7380（CLOSED）ci(mirror)：每次发布同步 CNB 与 GitCode，附每半小时兜底** — 保障国内镜像可安装性。链接：codewhale-hq/Codewhale PR #7380
10. **#7418（CLOSED）0.10.3 集成 2/3：代理运行时、提供商兼容与发布检查** — 集成外部 ACP agent 文档、DSH 包资质等。链接：codewhale-hq/Codewhale PR #7418

补充：#7370（EN/中文 ACP 外部代理使用指南）、#7368（Models.dev 离线种子刷新）、#7369（修复 main CI lint）均已合入。

## 5. 功能需求趋势

- **命令执行策略与沙箱安全**：本日最集中方向，覆盖静态脚本载荷、管道传播、启动器旗标、重复 `--` 展开等，显示社区在持续做 execpolicy 的形式化收紧。
- **子代理与工作流可恢复性**：子代理预算/裁剪/恢复（#7434）、维护者门禁与回归阶段（#7433）反映对代理行为变更治理的需求。
- **Skills 可发现性**：索引、默认预算、子目录可见性（#7432）。
- **终端兼容与 TUI 体验**：GNOME Terminal 配色还原、DEC 2026 缺失导致的闪烁、大段粘贴截断、Enter 门控。
- **提供商兼容**：Gemini 并行工具调用、工具调用 ID 归一化（#7402）。
- **本地化与镜像分发**：中文文档（#7370）、CNB/GitCode 同步（#7380）、Models.dev 目录刷新（#7368）。

## 6. 开发者关注点

- **安全扫描的盲区**：安全规则只覆盖 argv 文本，静态程序内容（awk/sed）成为可执行载荷的藏身处，需从“词扫描”向“载荷扫描”演进。
- **静默失败与文档不符**：64 KiB 粘贴截断、子代理预算终止后裁剪均无提示，与文档承诺不一致，削弱信任。
- **不必要的交互打断**：只读工具被误判为 Unknown 而触发 AskUser，凸显工具分类表维护滞后。
- **终端环境差异**：Linux/gnome-terminal 下的配色污染与重绘闪烁，说明 TUI 对终端能力检测（DEC 2026）依赖过强。
- **CI 信号可信度**：main 上确定性测试失败（#7405）被关注，因其掩盖真实回归。

</details>

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar-personal) 自动生成。*