# AI CLI 工具社区动态日报 2026-10-30

> 生成时间: 2026-10-30 16:43 UTC | 覆盖工具: 9 个

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

# AI CLI 工具生态横向对比报告 · 2026-10-30

> 数据范围：9 个工具仓库在过去 24 小时的 Releases / Issues / PRs 摘要。部分数量为摘要明确给出的值，未给出者标注为"未披露"。

---

## 1. 生态全景

当前 AI CLI 工具已从"能不能用"进入"能不能稳定托付工作"的阶段：各社区讨论重心普遍从功能新增转向**回归缺陷、结果可信度、成本可见性与跨端/跨平台一致性**。今日至少 5 个工具存在发布，但伴随的是多起版本回归（Copilot CLI 的 WSL2 CPU 占用、OpenCode 的连接重置、Codex 的 VS Code 扩展超时）。与此同时，**多工具开始互相复用登录与 hook 生态**（OpenCode 复用 Claude Code 登录、Gemini CLI 迁移 Claude `SubagentStop` hook），工具边界正在松动。工程质量问题（CI 红灯、主干不可编译）在 Qwen Code 与 DeepSeek TUI 上已成为阻塞级公共瓶颈。

---

## 2. 各工具活跃度对比

| 工具 | Issues（摘要披露） | PR（摘要披露） | Release | 今日焦点 |
|---|---|---|---|---|
| Claude Code | 10 条热点 + 补充 6 条 | 仅 1 条（已关闭，文档类） | v2.1.314 | 桌面端 UI 改版争议、Remote Control、token 成本 |
| OpenAI Codex | 24h 内 50 条更新（热点列 10） | 10 条（均 CLOSED，copyberry[bot]） | rust-v0.166.0 | Windows/macOS 回归、认证链路健壮性 |
| Gemini CLI | 10 条热点 + 补充 4 条 | 10 条（+ 已关闭 3 条） | v0.67.0 nightly | 子代理可靠性（P1）、底层小修复批量合入 |
| GitHub Copilot CLI | 24h 内 31 条更新（热点列 10） | 0 | 无 | 回归问题、Fusion 文档与实现脱节 |
| Kimi Code CLI | 无活动 | 无活动 | 无 | — |
| OpenCode | 10 条热点 + 多条同类 | 10 条（+ 小型修复 3 条） | v2.2.3、v2.2.2、process-daemon v0.4.0 | Zen 免费额度、区域网络、Automations |
| Pi | 10 条热点 | 10 条 | 无 | Windows 终端兼容、OpenAI 登录/配额 |
| Qwen Code | 10 条热点 + 补充 6 条 | 10 条（+ 补充 6 条） | cua-driver-rs v0.27.0、v0.26.4 nightly | CI 稳定性集中爆发 |
| DeepSeek TUI | 14 条更新（热点列 10） | 12 条更新（热点列 10） | 无 | main 不可编译、压缩路径异常 |

说明：各仓库 Issue/PR 总量与"热点条数"口径不同，表格分别标注以避免混用。

---

## 3. 共同关注的功能方向

**（1）代理行为的可信度与安全边界**
- Gemini CLI：#22323 子代理 MAX_TURNS 后仍上报 `GOAL` 成功、#22672 破坏性 git 命令。
- OpenCode：#53955/#60250 Plan 模式仍执行破坏性编辑（已复现）。
- Pi：#11608 权限门禁分词匹配（修正 `rm -fr` 漏检）。
- 共性诉求：**"成功"必须真实、"只读"必须只读、"危险命令"必须拦截**。

**（2）成本与 token/额度可控性**
- Claude Code：#105981 后台 agent 每 30 秒重发完整对话、#105621 额度消耗加快。
- OpenCode：#59387 免费额度主追踪（140 评论）、压缩预算与按目录价估算（#60647/#60658/#59864）。
- Qwen Code：#14215、#15493 前缀不可变以复用缓存。
- Copilot CLI：#5302 重试带来的隐性工具调用成本。

**（3）平台与终端兼容性**
- Windows 是共同重灾区：Claude Code #102126、Codex #56697/#50812、Copilot CLI #3700/#5299、Pi #10256/#11588、Qwen Code #15310（cmd.exe 假设）。
- 终端渲染细节：Pi 的 OSC/ANSI 转义泄漏、Gemini CLI 终端宽度重渲染。

**（4）认证与凭证治理**
- Codex 今日 10 条 PR 中至少 3 条（#58343/#58324/#58355）专注 token 刷新与认证超时。
- Claude Code #100584（OAuth 永不过期、不可见）；Copilot CLI #4994（OAuth 反复弹窗）；Pi #8928/#9884/#10605（登录与配额状态不一致）。
- 共性：**凭证体系正从"能用"转向"可审计、可恢复、并发安全"**。

**（5）MCP / 插件生态与资源治理**
- Claude Code #105924（MCP 连接静默断开）；Codex #55141（MCP 运行时累积）、#58378/#58341（注册范围与适配器）；Copilot CLI #1996/#4969（市场 schema 全量否决）；Gemini CLI #24246（工具超 128/400 报 400）。

**（6）长任务上下文连续性**
- Codex #26227（side chat 持久化，👍44 今日最高）；DeepSeek TUI #7095/#7142（历史丢失、会话重新定根）；OpenCode codemode REPL 状态存储（#60656）。

**（7）CI / 工程质量**
- Qwen Code（#15898/#15861/#15052，P1，且确认与 PR 无关）、DeepSeek TUI（#7148/#7154，主干不可编译）形成同一主题：**测试门禁的不确定性正在直接阻塞贡献**。

---

## 4. 差异化定位分析

| 工具 | 功能侧重 | 目标用户 | 技术路线特征 |
|---|---|---|---|
| Claude Code | 企业管控 + 桌面/远程控制 | 企业团队、多端协同 | 权限开关细化（工作目录外写入拦截、IdP 分组路由）；桌面/iOS 多端扩展带来一致性负担 |
| OpenAI Codex | 终端体验 + 认证健壮性 | 桌面 + IDE 开发者 | Rust 终端（键盘驱动转录选择）；今日 PR 高度集中于认证/凭证层 |
| Gemini CLI | Agent 子系统 + 工具生态 | 通用开发者 | 强调子代理/skills、AST 感知（中期）、沙箱与 bash 意图路由；小修复由社区批量提交 |
| GitHub Copilot CLI | 企业集成 + 模型可配置 | 企业/GitHub 生态 | Fusion 模型分级、GHE 沙盒、仓库级权限诉求；插件市场严格校验成为痛点 |
| OpenCode | Provider 开放 + 自动化 | 多模型/多 provider 用户 | 复用 Claude Code 登录、默认图像生成、schedules→Automations |
| Pi | 扩展生态 + 协议兼容 | 扩展开发者、多模型用户 | 延迟扩展重载、thinking block 协议兼容、计费成本优先采用 provider 上报 |
| Qwen Code | 多 Agent/daemon + 集成 | 自托管、企业集成 | A2A、Skill 激活路由、QQ 机器人；CI 与上下文缓存是当前主线 |
| DeepSeek TUI | 本地模型 + 多后端统一入口 | 本地推理用户、中文用户 | vLLM 档位适配、Ollama 无密钥、HarmonyOS 原生、zh-Hans 本地化 |
| Kimi Code CLI | — | — | 今日无活动，无法评估 |

**可观察的路线分野**：Codex/Claude Code 走"平台化 + 企业管控"；OpenCode/Pi/DeepSeek TUI 走"开放 provider 聚合"；Gemini CLI/Qwen Code 在 Agent 编排与多代理协议上投入最重。

---

## 5. 社区热度与成熟度

**高热度**
- **OpenCode**：Zen 额度主帖 140 评论，是今日单一议题互动量最高者，但情绪集中于付费链路。
- **Qwen Code**：CI 归因帖 99 评论，热度源于工程阻塞而非功能讨论。
- **Pi**：Windows 汇总帖 91 评论，长期路线讨论。
- **Copilot CLI**：24h 31 条 Issue 更新，但零 PR，反馈多、响应少。
- **Codex**：24h 50 条 Issue 更新 + 10 条 PR 关闭，双向活跃。

**快速迭代中**
- **OpenCode**（日内双版本 + process-daemon）、**Gemini CLI**（nightly + 10 条社区小修复）、**Qwen Code**（双发布 + 大量测试类 PR）——变更频率高，但回归风险同步上升。
- **Claude Code**：发布稳定（v2.1.314），但 PR 侧近乎停滞（1 条文档 PR），社区反馈堆积在 Issue。

**成熟度信号（负向）**
- 多条高评论 Issue 持续数周至数月未解：Codex #39897/#43158（近两个月）、Claude Code 桌面 UI 系列。
- 主干级阻塞：DeepSeek TUI main 不可编译、Qwen Code 门禁红灯。
- Kimi Code CLI 当日零活动，活跃度无法评估。

---

## 6. 值得关注的趋势信号

1. **"可信结果"比"更多能力"更紧迫。** Gemini CLI 将误报成功列为 P1、OpenCode 的 Plan 越权已复现——开发者已把 agent 的**结果真实性**当作采购与采用的前置条件。对决策者的含义：评估工具时应把"失败是否显式报错"纳入验收标准。

2. **静默失败是最贵的缺陷。** Copilot CLI #4600（图片静默丢弃）、Pi #11015（读图返回空串）、Qwen Code #15310（shell 假设导致每轮失败）——共同点是**无错误提示**。可观测性与显式诊断正在成为差异化能力。

3. **跨工具凭证复用开始出现。** OpenCode 复用 Claude Code 登录（v2.2.3）、Gemini CLI 迁移 Claude hook（#30055）。提示：**登录与 hook 契约可能成为新的生态锁定点**，多工具并用团队需关注凭证归属与审计。

4. **平台质量集中于 Windows。** 五个工具的今日热点均包含 Windows 条目，且多为近期版本回归（Copilot 1.0.60、Pi 0.99.x、Codex 26.1021.22027）。Windows 团队应优先验证最新版本，并保留可回滚版本（Codex #56660 已给出可用回滚号 26.1007.21434）。

5. **成本管理正从"看账单"走向"写配置"。** 压缩缓冲按比例（OpenCode #60647）、前缀稳定复用缓存（Qwen Code #15493）、provider 上报成本优先采用（Pi #6881）——**缓存友好性与预算配置正在成为选型指标**，尤其对自托管与低吞吐推理环境。

6. **CI 成为开源协作的隐形瓶颈。** Qwen Code 与 DeepSeek TUI 同日出现"与 PR 无关的红灯"，DeepSeek TUI 甚至主干不可编译。对贡献者的实务建议：提交前先确认门禁基线状态，避免误归因。

7. **本地化与区域可达性进入议题。** DeepSeek TUI #7071（非英文硬编码）、#7150（zh-Hans 术语统一）；OpenCode #60422/#60535（区域 ECONNRESET 与访问受限）。对面向中文或特定区域用户的团队，这是被低估的采用障碍。

---

*备注：本报告仅基于所提供摘要。Claude Code 的 Release 摘要为截断文本、Codex rust-v0.166.0 说明在"Added GPT"处截断、Kimi Code CLI 无活动数据，相关部分未作推测。*

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告（数据截止 2026-10-30）

> 数据说明：本报告仅基于所提供的 anthropics/skills 仓库 PR 与 Issue 数据。所有 PR 的评论数字段均为 `undefined`、点赞均为 0，因此“关注度”只能以 Issues 的评论数/点赞数、PR 的更新活跃度与讨论内容为依据，无法给出 PR 评论排行。

## 1. 热门 Skills 排行（PR 维度）

说明：由于 PR 的评论数未提供，以下按“是否附带关联 Issue 讨论、更新活跃度、功能波及面”排序，并标注真实状态（全部为 OPEN，均未合并）。

| 排名 | Skill / PR | 功能 | 讨论热点 | 状态 |
|---|---|---|---|---|
| 1 | [mcp-builder #1742](https://github.com/anthropics/skills/pull/1742) | 修复 mcp-builder 对 mcp>=2 的适配：`streamablehttp_client` → `streamable_http_client`，自定义 header 改用 `create_mcp_http_client` / `http_client` | 修复 [#1668](https://github.com/anthropics/skills/issues/1668)；与 Issue #1390（mcp-builder 评估脚本对真实 MCP server 全部判 0/N）同属该 Skill 的可用性问题 | OPEN（创建 2026-09-08，更新 2026-10-08） |
| 2 | [skill-creator #1298](https://github.com/anthropics/skills/pull/1298) | 隔离触发评估；处理 Windows 下 `select()` 对子进程管道失败、执行命令探测相互竞争、运行时失败被误判为非触发 | 直接关系到 Issue #556 中“0% 触发率”的评估可信度问题 | OPEN（更新 2026-09-16） |
| 3 | [skill-creator #1997](https://github.com/anthropics/skills/pull/1997) | 修正 `parse_skill_md` 对 YAML frontmatter 标量的解析（手工剥离引号、拼接续行导致元数据与 SKILL.md 不一致） | 影响评估与描述优化命令的准确性 | OPEN（2026-10-10） |
| 4 | [webapp-testing #1980](https://github.com/anthropics/skills/pull/1980) | 在 `with_server.py` 中移除 `shell=True`，消除未净化命令字符串进入系统 shell 的风险 | 安全问题；与 #1976 同属 webapp-testing 改进 | OPEN（更新 2026-10-25） |
| 5 | [docx #1792](https://github.com/anthropics/skills/pull/1792) | LibreOffice 超时改为报错而非报成功；仅在确认输出 DOCX 已无修订标记后才声明成功 | 与 Issue #2018（merge_runs.py 写出非法 XML）共同指向 docx 脚本“静默成功”的可靠性问题 | OPEN（更新 2026-09-25） |
| 6 | [algorithmic-art #1977](https://github.com/anthropics/skills/pull/1977) | `wrapAround()` 改为对负数也正确的取模，结果落在 [0, max) | 修复 [#1897](https://github.com/anthropics/skills/issues/1897) | OPEN（更新 2026-10-18） |
| 7 | [pptx #1975](https://github.com/anthropics/skills/pull/1975) | `thumbnail.py` 在 `--cols < 1` 时由 argparse 提前报错，而非渲染后抛出无关 ValueError | 修复 [#1809](https://github.com/anthropics/skills/issues/1809) | OPEN（更新 2026-10-27） |
| 8 | [pyxel #525](https://github.com/anthropics/skills/pull/525) | 新增 Pyxel 复古游戏开发 Skill：实现、无头输入驱动运行、逐帧检查、状态校验 | 新增 Skill 提案中讨论周期最长的之一（2026-03-05 创建，持续更新至 2026-10-23） | OPEN |

## 2. 社区需求趋势（基于 Issues）

- **生态治理与信任边界**：Issue [#492](https://github.com/anthropics/skills/issues/492)（46 评论）是讨论最热的议题——社区 Skill 以 `anthropic/` 命名空间分发、冒充官方 Skill，导致用户可能向非官方 Skill 授予更高权限；Issue [#189](https://github.com/anthropics/skills/issues/189)（6 评论、9 赞）反映 `document-skills` 与 `example-skills` 安装相同内容造成重复 Skill 占用上下文。诉求指向**命名空间与分发治理**。
- **Skill 的组织内分发与协作**：Issue [#228](https://github.com/anthropics/skills/issues/228)（17 评论、8 赞）要求 Claude.ai 支持组织级 Skill 共享，替代“下载 .skill 文件→聊天工具转发→手动上传”的流程。
- **Skill 质量评估与自检**：Issue [#556](https://github.com/anthropics/skills/issues/556)（13 评论、7 赞）报告 `run_eval.py` 在所有查询上触发率为 0%；[#202](https://github.com/anthropics/skills/issues/202)（已关闭）指出 skill-creator 更像开发者文档而非可执行指令。
- **上下文效率与状态管理**：Issue [#1329](https://github.com/anthropics/skills/issues/1329) 提议 `compact-memory`（符号化记法压缩长任务状态）；Issue [#1487](https://github.com/anthropics/skills/issues/1487) 报告 `claude-api` Skill 一次工具调用即注入约 156k tokens、耗尽上下文。
- **AI 输出质量与治理流程**：Issue [#1385](https://github.com/anthropics/skills/issues/1385) 提议“预任务校准→对抗式审查→交付验证”三闸门流水线；[#412](https://github.com/anthropics/skills/issues/412)（已关闭）提议 `agent-governance`（策略执行、威胁检测、信任评分、审计轨迹）。
- **Skill 描述的可触发性**：Issue [#2064](https://github.com/anthropics/skills/issues/2064) 指出 theme-factory 的描述只说明“做什么”而不说明“何时使用”，影响触发判断。
- **安全与脚本正确性（显示性趋势）**：Issue [#1394](https://github.com/anthropics/skills/issues/1394)（eval-viewer 显示路径 XSS）、[#1390](https://github.com/anthropics/skills/issues/1390)（mcp-builder 评估脚本伪造工具错误）、[#2018](https://github.com/anthropics/skills/issues/2018)（docx 写出非法 XML）、[#1868](https://github.com/anthropics/skills/issues/1868)（渐变背景插值 off-by-one）。

> 注：关于“工作流自动化、代码审查、测试生成”等方向，提供的 Issue 数据中并无明确对应的新 Skill 需求条目，故不在此列。可对应的具体提案为 notion-spec-to-implementation（PR #1245，规格转实现任务）、scnet-hpc（PR #1615，HPC/Slurm 作业运维）、proofcore-contract-auditor（PR #1771，智能合约静态审计）。

## 3. 高潜力待合并 Skills（活跃 OPEN PR）

| PR | 内容 | 活跃信号 |
|---|---|---|
| [#1245](https://github.com/anthropics/skills/pull/1245) | 新增 `notion-spec-to-implementation`（规格文档转为 Notion 可执行任务，含验收标准）与 `quantitative-resume-auditor` | 创建 2026-06-02，更新至 2026-10-15，跨越 4 个月仍在维护 |
| [#1703](https://github.com/anthropics/skills/pull/1703) | 新增 `md2video-audio`：Markdown 直接编译为带拟真人配音的 MP4 | 2026-09-01 创建，2026-09-15 更新 |
| [#1771](https://github.com/anthropics/skills/pull/1771) | 新增 `proofcore-contract-auditor`：Solidity/Rust 静态分析，并将审计证明锚定到 TON 链 | 2026-09-15 创建，次日更新 |
| [#1615](https://github.com/anthropics/skills/pull/1615) | 新增 `scnet-hpc`：基于 profile 的 SSH 与 Slurm 工作流操作 SCNet 集群 | 2026-08-20 创建，2026-08-24 更新 |
| [#525](https://github.com/anthropics/skills/pull/525) | 新增 `pyxel` 复古游戏开发 Skill | 2026-03 创建，2026-10-23 仍在更新，属“超长待合并” |
| [#486](https://github.com/anthropics/skills/pull/486) | 新增 `odt`：ODT/ODS 创建、模板填充、转换为 HTML | 2026-03-01 创建，2026-04-14 更新 |
| [#514](https://github.com/anthropics/skills/pull/514) | 新增 `document-typography`：治理孤行（orphan）、寡段（widow）、编号错位 | 2026-03-04 创建，2026-03-13 更新 |

修复类高潜力 PR：#1742（mcp-builder，随 mcp 2.x 普及而提级）、#1298 + #1997（skill-creator 评估可信度）、#1980（webapp-testing 安全）、#1792（docx 超时处理）。

## 4. Skills 生态洞察

**社区最集中的诉求是“让 Skill 可信、可验证、可分发”——即为 Skill 建立清晰的官方命名空间与共享机制，并修复评估与脚本的静默失败，使一个 Skill 是否真正生效、是否安全、是否来自官方都成为可检验的事实，而非默认假设。**

---

# Claude Code 社区动态日报 · 2026-10-30

> 数据来源：github.com/anthropics/claude-code（过去 24 小时 Releases / Issues / PRs）

---

## 1. 今日速览

今日发布 **v2.1.314**，新增"工作目录外写入拦截"权限开关与企业网关 IdP 分组路由，安全与组织管控继续加码。社区讨论集中在**发布后遗留的桌面端 UI 改版乱象**、**Remote Control 体验缺口**，以及与 **token 消耗异常**相关的成本类问题（其中一条已被标记为重复）。

---

## 2. 版本发布

**v2.1.314**（摘要所列内容）
- 新增 `permissions.blockWritesOutsideWorkingDirectories`：在所有权限模式下，Write、Edit、NotebookEdit 均拒绝工作目录之外的路径。
- Claude apps gateway 上游支持可选的 `groups` 列表：只有所列 IdP 分组内的开发者才会被路由到对应上游。
- 链接：anthropics/claude-code Releases（v2.1.314）※ 摘要中未提供独立链接

---

## 3. 社区热点 Issues（10 条）

1. **#95364** [bug, macOS, desktop] Desktop“静默更新”在用户离开时退出并重启应用，导致所有 Remote Control 会话中断  
   评论 13 / 👍 14，为今日讨论量最高。直接影响依赖远程控制的日常使用，属高影响可用性问题。  
   https://github.com/anthropics/claude-code/issues/95364

2. **#99217** [bug, plugins] Mod 的 `ui.render`（AbovePrompt/Pane）在 Remote Control 的桌面端与 iOS 端不渲染  
   评论 11 / 👍 12。说明插件 UI 在不同客户端间表现不一致，影响插件生态的跨端一致性。  
   https://github.com/anthropics/claude-code/issues/99217

3. **#102126** [bug, Windows, desktop] 桌面端侧边栏顺序反转、状态点失效、侧边栏无法关闭、设置项消失  
   评论 3 / 👍 10。用户情绪激烈，反对在无开关的情况下大幅重设计 UI，反映桌面端改版的兼容与可回退问题。  
   https://github.com/anthropics/claude-code/issues/102126

4. **#105159** [enhancement, Windows, desktop] Code 标签页侧边栏：请求回退闪烁动画、旧状态色、移除代码图标（或改为可选）  
   评论 4 / 👍 9。与 #102126 同属对桌面端 UI 改版的集中反馈。  
   https://github.com/anthropics/claude-code/issues/105159

5. **#105621** [bug, duplicate, Windows, cost] 自 2026 年 10 月中旬起，在流程不变的情况下用量额度消耗显著加快（Max，Windows 桌面端）  
   评论 3 / 👍 3，已标记 duplicate。成本敏感度持续升高。  
   https://github.com/anthropics/claude-code/issues/105621

6. **#105981** [duplicate, Linux, cost, agents] `agent_summary` 约每 30 秒重发每个后台 agent 的完整对话记录，且无法关闭  
   评论 3 / 👍 3。用户以实测计量反馈，属可量化的 token 浪费路径。  
   https://github.com/anthropics/claude-code/issues/105981

7. **#105607** [bug, macOS, IDE, VS Code] VS Code 扩展：`[1m]` 模型选择（自 2.1.311 起为 `opus[1m]`）缺少 Effort 与 Ultracode 控件  
   评论 5 / 👍 2。新版模型选择与 IDE 控件未同步，属版本回归类问题。  
   https://github.com/anthropics/claude-code/issues/105607

8. **#105924** [bug, has repro, Windows, MCP, desktop] Desktop Code 标签页：新会话首轮建立的 MCP 连接在该轮结束时被静默断开  
   评论 3。MCP 连接生命周期问题，影响工具链稳定性。  
   https://github.com/anthropics/claude-code/issues/105924

9. **#100584** [bug, macOS, auth, security] OAuth 授权永不过期且按次登录累积；非 Code 授权在设置中不可见；列表 API 上限 1000  
   评论 2 / 👍 1。涉及凭据治理与安全审计可见性。  
   https://github.com/anthropics/claude-code/issues/100584

10. **#106167** [bug, macOS, model] [URGENT] 服务端下发的 "games" 指令阻塞持证专业开发工作  
    评论 2 / 👍 3，由创建到更新均在今日。属新近出现的模型行为阻断问题。  
    https://github.com/anthropics/claude-code/issues/106167

**其他值得留意（补充）**
- #70610 / #95190 / #82683：围绕 `spawn_task` 背景任务 chip 的模型与 effort 选择、模型继承逻辑，形成一组连贯诉求。  
  https://github.com/anthropics/claude-code/issues/70610 ｜ https://github.com/anthropics/claude-code/issues/95190 ｜ https://github.com/anthropics/claude-code/issues/82683
- #97410（移动端 Remote Control 不显示提示建议）、#92102（VS Code 扩展进程应在 Extension Host 关闭后存活）、#105189（Chat 标签页缺运行/未读状态）。  
  https://github.com/anthropics/claude-code/issues/97410 ｜ https://github.com/anthropics/claude-code/issues/92102 ｜ https://github.com/anthropics/claude-code/issues/105189

---

## 4. 重要 PR 进展

过去 24 小时内更新的 PR 仅 **1 条**，无法按 10 条规模筛选：

- **#57333** [CLOSED] Update README.md（作者 M-Mikran-Sandhu，创建于 2026-05-08，更新于 2026-10-29，👍 0）  
  为文档类修改，已关闭；摘要中未提供具体改动内容。  
  https://github.com/anthropics/claude-code/pull/57333

> 注：本周期内 PR 活动极少，暂无更多可报告内容。

---

## 5. 功能需求趋势

从本期 Issues 中可归纳出以下方向：

- **桌面端 UI 稳定性与可配置性**：大量反馈要求回退或提供开关（#102126、#105159、#105189），核心诉求是不打断既有工作流。
- **Remote Control 与跨端一致性**：桌面、iOS、移动端在会话、插件 UI、提示建议上的表现不一致（#95364、#99217、#97410）。
- **成本与 token 效率**：额度消耗、后台 agent 摘要重发、按任务选择模型/effort（#105621、#105981、#95190、#70610、#82683）。
- **IDE 集成（VS Code）**：控件与新版模型选择同步、扩展进程生命周期（#105607、#92102）。
- **MCP 与 Channels**：连接生命周期、常驻/设置级 channel 订阅（#105924、#92815）。
- **安全与权限治理**：工作目录外写入拦截（v2.1.314）、OAuth 授权生命周期与可见性（#100584）。

---

## 6. 开发者关注点

- **更新与重启打断工作**：自动更新在无人值守时重启应用，直接损失远程会话（#95364）。
- **UI 改版缺少回退/开关**：状态点、侧边栏、动画等改动被视为降低可读性与效率，社区反馈情绪强烈（#102126、#105159）。
- **成本可见性不足**：用量骤增与后台 agent 静默重发 transcript 并存，缺少关闭手段与可解释性（#105621、#105981）。
- **跨端与 IDE 行为不一致**：插件渲染、模型相关控件在终端与桌面/iOS/VS Code 间不统一（#99217、#105607）。
- **MCP 连接可靠性**：会话首轮建立的连接被静默断开，影响长任务（#105924）。
- **凭据与安全治理**：OAuth 授权累积、不可见、API 上限导致的审计缺口（#100584）。
- **模型行为可控性**：服务端指令干扰专业工作、背景任务模型继承不符合预期（#106167、#82683）。

---

*说明：本期数据中 Releases 摘要为截断文本，PR 仅 1 条，故相应部分按实际可用信息呈现，未作补充推测。*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报（2026-10-30）

## 1. 今日速览

今天发布 rust-v0.166.0，核心是终端体验升级：键盘驱动的转录选择（按词/行/页移动、集成搜索、可配置快捷键），以及异步问答、选项、回答和转录回复中 Markdown 渲染的一致性修复。社区侧，过去 24 小时内有 50 条 Issue 更新，桌面端问题仍最集中：Windows 快捷键失效、终端 @Browser 连接失败、VS Code 扩展启动失败；值得注意的是，多条高评论 Issue 已持续数周至数月，说明部分跨平台问题尚未根治。

## 2. 版本发布

**rust-v0.166.0**
- 新增键盘驱动的转录选择：支持按词、行、页移动，集成搜索，可配置快捷键（#57221、#57222、#57223、#57224）
- 在异步问题、选项、回答和转录回复中统一渲染 Markdown（#57259、#57292）
- 更新说明在“Added GPT”处被截断，具体模型/能力内容无法从所提供材料确认

## 3. 社区热点 Issues（10 条）

1. **#39897 [macOS] 已删除的 ChatGPT 会话仍留在侧边栏且无法移除**（26 评论，👍4）
   桌面端会话管理的基础缺陷，长期未解决，互动量最高。
   https://github.com/openai/codex/issues/39897

2. **#26227 [TUI] 将 side chat 持久化为附加在主线程上的子线程**（21 评论，👍44）
   今日点赞最高，社区明确希望保留长任务中的 side chat 上下文。
   https://github.com/openai/codex/issues/26227

3. **#56697 [Windows] Ctrl+Tab 不再切换会话，最近会话轮换未绑定且不可配置**（17 评论，👍10）
   直接影响日常多会话工作流，属高优先级可用性回归。
   https://github.com/openai/codex/issues/56697

4. **#57641 [Windows/CLI] 桌面端更新后终端 CLI @Browser 报“browser access host is unavailable”**（16 评论，👍5）
   浏览器访问能力在更新后中断，影响依赖浏览器的任务。
   https://github.com/openai/codex/issues/57641

5. **#57032 [VS Code/Linux] 扩展 26.1021.22027 无法启动 UI**（14 评论，👍9）
   IDE 集成在 Linux 上的启动阻断问题。
   https://github.com/openai/codex/issues/57032

6. **#56660 [macOS Intel/VS Code] 26.1021.22027 报 renderer_ready_timeout，回滚 26.1007.21434 可恢复**（12 评论，👍5）
   明确的新版本回归，已给出可用回滚版本，便于定位。
   https://github.com/openai/codex/issues/56660

7. **#50812 [Windows 桌面] 读取超时后占用全部 8 个 host RPC 槽位，Send/Retry 失效直至重启**（10 评论）
   资源泄漏导致会话不可用，涉及 app-server 稳定性。
   https://github.com/openai/codex/issues/50812

8. **#43158 [macOS] Workspace diff 被 SIGKILL 后残留临时 Git 对象，反复耗尽磁盘**（9 评论，👍3）
   已持续近两个月的数据/磁盘风险问题。
   https://github.com/openai/codex/issues/43158

9. **#55141 [macOS] 每线程工具服务器累积、重启后内存压力上升**（9 评论）
   MCP/插件场景下的性能退化，与 #38247（Linux 上已完成 v2 子代理保留完整 stdio MCP 运行时）呼应。
   https://github.com/openai/codex/issues/55141

10. **#49917 [IDE 扩展] 空闲时聊天反复重挂载，闪烁并打断中文输入法组合**（8 评论）
    影响中文用户输入体验的 IDE 集成问题。
    https://github.com/openai/codex/issues/49917

## 4. 重要 PR 进展（10 条）

以下 PR 均于 2026-10-30 更新且状态为 CLOSED，由 copyberry[bot] 提交。

1. **#58385 测试 V8 inline typed array 存储限制** — 抽取内联存储判定为测试辅助函数，增加禁用内联存储的覆盖。
   https://github.com/openai/codex/pull/58385

2. **#58381 修复工作区切换后未完成刷新检测** — 切换工作区会重写 `get_token_data()` 返回的 claims，导致未完成的 ChatGPT 刷新未被识别。
   https://github.com/openai/codex/pull/58381

3. **#58380 向已连接客户端广播线程分区变更** — 在其他客户端移动线程后，广播 `thread/section/changed` 以刷新分区成员与顺序。
   https://github.com/openai/codex/pull/58380

4. **#58378 将 agent MCP 元数据限定到 host 选定的插件注册** — 新增 `AgentMcpMetadataRecipient` 线程扩展，决定哪个 MCP 插件注册接收 `x-codex-root-turn-id` 等头。
   https://github.com/openai/codex/pull/58378

5. **#58368 在直接 Guardian 审查策略检查前应用 PreToolUse 钩子** — 修复审批决策可能遗漏钩子改写或拒绝的问题。
   https://github.com/openai/codex/pull/58368

6. **#58361 在运行时解析中保留模型元数据来源** — 查找返回 `CatalogModel`，保留 Bundled/Provider/ExplicitConfig/Synthetic 来源信息。
   https://github.com/openai/codex/pull/58361

7. **#58355 修复远程执行器认证超时恢复** — 凭据解析阶段的超时不再被误判为传输超时，从而允许安全重试。
   https://github.com/openai/codex/pull/58355

8. **#58352 允许在初始工具清单完成前发现 Apps 目录** — 插件与技能目录读取不再等待 Apps 服务器初始 `tools/list`。
   https://github.com/openai/codex/pull/58352

9. **#58343 / #58324 凭证刷新健壮性** — 前者在 keyring 不可读时保留回退令牌刷新；后者将 `auth.json` 不可读/损坏视为瞬时故障，避免永久失败。
   https://github.com/openai/codex/pull/58343
   https://github.com/openai/codex/pull/58324

10. **#58341 为留言板工具新增 MCP 适配器** — 新增 `codex-message-board-mcp`，通过 `rmcp::ServerHandler` 暴露留言板工具。
    https://github.com/openai/codex/pull/58341

## 5. 功能需求趋势

- **持久化与上下文连续性**：#26227 要求将 side chat 持久化为子线程；#48339 提出跨账号团队项目的共享 agent 上下文与交接。
- **多客户端/远程协同**：#58380（跨客户端广播线程分区变更）、#53264/#42315/#25202（Windows Remote、iOS Remote 的功能缺失）显示远程与多端场景需求上升。
- **IDE 与桌面集成稳定性**：多条 VS Code 扩展与桌面端 Issue 集中在启动、快捷键、UI 重挂载。
- **MCP/插件生态与资源治理**：#55141、#38247、#58341、#58378 涉及 MCP 运行时的累积、注册范围与适配器。
- **自动化与代理能力**：Workspace Agents（#42267）、Computer Use（#52993）、Guardian 审查钩子（#58368）。
- **连接器与配额管理**：Gmail 连接器 403 RATE_LIMIT_EXCEEDED（#52110）。

## 6. 开发者关注点

- **Windows 与 macOS 平台回归反复出现**：快捷键失效（#56697）、RPC 槽位耗尽（#50812）、扩展启动超时（#56660）、浏览器能力失效（#57641），多与特定版本绑定，并有用户已记录回滚可用的旧版本。
- **资源泄漏与性能压力**：MCP 运行时累积、内存上升、磁盘被临时 Git 对象耗尽，是跨 Issue 的高频主题。
- **凭据与认证链路的健壮性**：今日 PR 大量集中于 token 刷新、认证超时、keyring/auth.json 异常处理，反映认证层曾被当作永久失败处理。
- **输入与交互细节**：中文输入法被打断（#49917）、侧边栏残留会话（#39897）等“小事”长期占用高评论量，显示日常可用性对开发者体验影响显著。
- **长任务的上下文管理**：围绕 side chat 持久化与子线程的高点赞，说明开发者希望减少长期任务的上下文丢失。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报 · 2026-10-30

## 1. 今日速览

今日发布 v0.67.0 nightly 版本，README 文档明确了项目范围与工具定位，并修复了终端宽度变化后内联历史重渲染的边界问题。社区侧，agent 子系统的可靠性仍是绝对焦点：子代理误报成功、通用代理挂起、模型不使用技能与子代理等 P1/P2 问题持续活跃。同时，社区贡献者集中提交了一批底层小修复（路径折叠、.gitignore 解析、环境变量展开、后台 PID 解析等），对应多个长期未关的小型 bug。

---

## 2. 版本发布

**v0.67.0-nightly.20261030.gb633c0703**
https://github.com/google-gemini/gemini-cli/pull/30045

- `docs(readme)`：明确 Gemini CLI 的范围、局限性与工具生态定位（#29995）。
- `fix(cli)`：终端宽度变化后，为内联历史重渲染加上边界限制。

> 配套自动版本号 PR #30045 由 gemini-cli-robot 提交。

---

## 3. 社区热点 Issues（10 项）

1. **#22323 [P1] 子代理达到 MAX_TURNS 后恢复，却被上报为 GOAL 成功**（13 条评论）
   子代理在未做任何分析前就撞上轮次上限，却仍返回 `status: "success"` / `Termination Reason: "GOAL"`，掩盖了中断事实。这是今日讨论量最高的 Issue，直接影响任务结果的可信度。
   https://github.com/google-gemini/gemini-cli/issues/22323

2. **#21409 [P1] 通用代理挂起**（8 条评论，👍 8）
   一旦任务被转交给 generalist agent 就无限挂起，简单如建目录也会卡住，用户等待长达一小时。高赞说明影响面广，属于阻塞级体验问题。
   https://github.com/google-gemini/gemini-cli/issues/21409

3. **#19873 [P2] 利用模型的 bash 亲和性：零依赖 OS 沙箱 + 执行后意图路由**（9 条评论）
   主张 Gemini 3 原生擅长链式调用 POSIX 工具，应以此为基础设计沙箱与命令路由，是架构方向性提案。
   https://github.com/google-gemini/gemini-cli/issues/19873

4. **#21968 [P2] Gemini 几乎不会主动使用 skills 和子代理**（7 条评论）
   用户反馈必须显式指令才会触发自定义技能/子代理，与当前大力投入的 agent 能力形成落差。
   https://github.com/google-gemini/gemini-cli/issues/21968

5. **#22745 [P2] EPIC：评估 AST 感知的文件读取、搜索与代码映射**（7 条评论）
   探索用 AST 精确定位方法边界、减少工具调用轮次，是提升 agent 效率的中期方向。
   https://github.com/google-gemini/gemini-cli/issues/22745

6. **#21983 [P1] browser 子代理在 Wayland 下失败**（4 条评论）
   与 #22267（Browser Agent 忽略 settings.json 覆盖）共同暴露浏览器子代理的配置与平台兼容短板。
   https://github.com/google-gemini/gemini-cli/issues/21983

7. **#22267 [P2] Browser Agent 完全忽略 settings.json 中的 maxTurns 等覆盖**
   AgentRegistry 有配置，但浏览器代理不读取，导致用户无法约束其行为。
   https://github.com/google-gemini/gemini-cli/issues/22267

8. **#24246 [P2] 工具数超过 128/400 时出现 400 错误**
   期望 agent 能更智能地裁剪启用的工具范围，与工具生态扩张直接相关。
   https://github.com/google-gemini/gemini-cli/issues/24246

9. **#22672 [P2] Agent 应停止/劝阻破坏性行为**（👍 1）
   在复杂 git 操作中模型会使用 `git reset`、`--force` 等高风险命令，涉及安全边界设计。
   https://github.com/google-gemini/gemini-cli/issues/22672

10. **#29175 [P2] tildeifyPath 缺少路径分隔符边界，兄弟家目录被误判为当前 home**
    例如 home 为 `/Users/al` 时 `/Users/albert/proj` 被显示为 `~bert/proj`。今日已有对应修复 PR #30054。
    https://github.com/google-gemini/gemini-cli/issues/29175

其他值得留意：#23571（模型在随机位置生成临时脚本）、#22186 [P1]（输出 hook 导致崩溃）、#20079（符号链接形式的 agent 文件不被识别）、#20195（本地子代理 Sprint 1 追踪）。

---

## 4. 重要 PR 进展（10 项）

1. **#30054 `fix(core)`：仅在 home 目录边界做路径折叠** — 修复上述 #29175，按完整路径段匹配后再替换为 `~`。
   https://github.com/google-gemini/gemini-cli/pull/30054

2. **#30052 `fix(core)`：遵守 `dir/**` 下的嵌套 .gitignore 反向包含** — 修复 #29826，`logs/**` + `logs/.gitignore` 中的 `!keep.txt` 不再被误判忽略。
   https://github.com/google-gemini/gemini-cli/pull/30052

3. **#30055 `fix(cli)`：Claude `SubagentStop` hook 迁移映射为 AfterAgent** — 修复 #29123，`EVENT_MAPPING` 键名由 `SubAgentStop` 更正。
   https://github.com/google-gemini/gemini-cli/pull/30055

4. **#30053 `fix(core)`：解析后台 PID 时跳过非数字行** — 修复 #29042），避免出现 `Background PIDs: NaN` 的干扰。
   https://github.com/google-gemini/gemini-cli/pull/30053

5. **#30056 `fix(core)`：expandEnvVars 忽略内部目标键** — 修复 #29270，防止 `__GCLI_EXPAND_TARGET__` 环境值覆盖展开输入。
   https://github.com/google-gemini/gemini-cli/pull/30056

6. **#30044 `fix(core)`：处理 Windows libuv 零设备 stat 报告** — 针对 Node 22.12–22.16.x（libuv 1.49.x–1.50.0）下 `readSecureFileBuffer` 的 stat 异常。
   https://github.com/google-gemini/gemini-cli/pull/30044

7. **#30050 `fix(core)`：流 EOF 时冲刷待处理 SSE 事件缓冲** — 避免无尾部空行时最后一条 SSE 被静默丢弃。
   https://github.com/google-gemini/gemini-cli/pull/30050

8. **#30034 `fix(core)`：shadow repo 遵守 `.git/info/exclude` 与 `core.excludesFile`** — 防止 `/restore` 误删或回滚本应被忽略的文件。
   https://github.com/google-gemini/gemini-cli/pull/30034

9. **#30051 `fix(cli)`：headless 中断时终止活动 shell 并持久化工具调用** — 修复 `gemini -p --yolo` 被 SIGINT/SIGTERM/SIGHUP 中断时错误以退出码 0 退出的问题。
   https://github.com/google-gemini/gemini-cli/pull/30051

10. **#29978 `fix(core)`：read_background_output 保留超长行与边界行**（标记 help wanted）— 日志恰超过 64KB 时不再返回空输出。
    https://github.com/google-gemini/gemini-cli/pull/29978

已关闭：#29765（文件凭据存储写入原子化与串行化，#29765）、#29762（切换认证时保留磁盘上的设置编辑）、#29771（仅对真正空的续写自动 nudge）。

---

## 5. 功能需求趋势

- **子代理/Agent 可靠性体系化**：围绕 MAX_TURNS、通用代理挂起、Browser Agent 配置与平台兼容（Wayland）、本地子代理 Sprint（#20195），形成完整的 agent 工作流加固线。
- **工具调用智能裁剪**：工具数量增长带来的 400 错误（#24246），指向动态工具选择与范围控制。
- **AST 感知的代码理解**（#22745）：以更少轮次完成精确定位，是效率方向的中期探索。
- **沙箱与执行安全**：零依赖 OS 沙箱 + bash 意图路由（#19873）、抑制破坏性命令（#22672）。
- **Hook 与迁移生态兼容**：Claude Code hook 迁移（#29123 / #30055）表明用户存在跨工具迁移需求。
- **跨平台正确性**：Windows libuv stat、Wayland 浏览器、路径分隔符与符号链接（#20079）。
- **流式传输与持久化健壮性**：SSE 收尾（#30050）、headless 中断持久化（#30051）、凭据与设置写入一致性。

---

## 6. 开发者关注点

- **结果可信度优先**：agent 误报“成功”、挂起不退，比功能缺失更伤信任，是 P1 集中区。
- **配置应被尊重**：settings.json 覆盖在 Browser Agent 中完全失效，属于预期落空型缺陷。
- **小型正确性 bug 高频**：路径边界、NaN 解析、环境变量键冲突、ignore 规则层级——多为 `effort/small`，社区贡献者已批量提交修复，是本仓库活跃的低门槛入口。
- **被动行为调优**：模型不主动调用 skills/子代理、在随机位置生成临时脚本，反映对“默认行为更符合工程习惯”的期待。
- **安全与可恢复性**：破坏性 git 命令、`/restore` 误删、并发凭据丢失，共同指向“出错可回退、写入不丢失”的底线要求。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报（2026-10-30）

## 1. 今日速览

今日无新版本发布，也无 PR 更新；社区活跃度集中在 Issue 侧，过去 24 小时更新了 31 条。最值得关注的是多条**回归类问题**：WSL2 空闲高 CPU 占用（#3700）、MCP OAuth 授权页反复弹出（#4994），以及 `--model fusion` 因缺少未文档化环境变量而失败（#5298）。另有多个插件市场 schema 校验相关问题被关闭，但插件安装健壮性仍是痛点。

## 2. 版本发布

过去 24 小时无新 Release。

## 3. 社区热点 Issues（10 条）

1. **[#3700](https://github.com/github/copilot-cli/issues/3700) [High] 1.0.60 WSL2 回归：主线程空闲时约 215% CPU，TUI 输出冻结**
   严重级别高，每次新会话都能复现（属于 #2208 的回归），TUI 几乎不可用。6 条评论、2 个赞，用户影响面大但社区情绪偏理性，主要在等待修复。

2. **[#4994](https://github.com/github/copilot-cli/issues/4994) 回归（1.0.88 → 1.0.89）：每个 ACP 会话都会弹出 MCP OAuth 授权页**
   持有有效、未过期的 token 仍被返回 401，破坏非交互式自动化场景。**8 个赞为今日最高**，说明 ACP/无头模式的用户群体关注度较高。

3. **[#5298](https://github.com/github/copilot-cli/issues/5298) `--model fusion` 在 1.0.105 失败，需未文档化的 DYNAMIC_AUTO_TIERS 标志**
   文档称 Fusion 已 GA，实际需要隐藏开关才能使用，文档与实现不一致。新提交即进入 triage，值得跟进。

4. **[#5290](https://github.com/github/copilot-cli/issues/5290) 缺少 `--fusion-tier` 参数**
   与 #5298 同属 Fusion 相关，说明 Fusion 模型的可配置性存在缺口：文档提到 `fusionTier`，但 CLI 未暴露对应参数。

5. **[#5301](https://github.com/github/copilot-cli/issues/5301) `web_search` 约 120 秒后返回 HTTP 504（远程 GitHub MCP 网关超时）**
   近 9 天内超过一半的调用失败，内置搜索工具可靠性堪忧，直接影响需要联网检索的工作流。

6. **[#5302](https://github.com/github/copilot-cli/issues/5302) Windows 上 Agent 反复生成无法解析的 PowerShell 命令**
   作者基于 3 周、2,164 条会话日志总结出失败规律；每次重试都会多出一次工具调用和一轮模型推理，是典型的“隐性成本”问题。

7. **[#4600](https://github.com/github/copilot-cli/issues/4600) BYOK 提供商下 MCP 工具返回的图片被静默丢弃**
   工具执行成功但图片未送达模型，BYOK 用户的调试成本高（无报错），属于数据静默丢失类缺陷。

8. **[#5286](https://github.com/github/copilot-cli/issues/5286) 企业环境中沙盒模式无法使用 gh**
   沙盒代理无法将 token 转发给 `*.ghe.com` 上的 `gh`，企业用户采用沙盒的主要障碍之一。

9. **[#5297](https://github.com/github/copilot-cli/issues/5297) 功能请求：仓库级、受版本控制的命令权限（allow / ask / deny）**
   希望把权限策略随仓库一起提交，便于团队和教学工作坊共享配置，与已有的 instructions / skills / agents 机制对齐。属于有代表性的协作场景需求。

10. **[#5299](https://github.com/github/copilot-cli/issues/5299) Windows：用户目录路径含空格时，每条消息都弹出 OpenWith 对话框**
    路径仅解析到第一个空格（如 `C:\Users\First Last`），属于基础可用性缺陷，影响面可能被低估。

> 其他已关闭但值得一提的：#1996（claude-plugins-official 市场因 `plugins.56.source` 校验失败）、#4969（单个插件描述超过 1024 字符导致整个市场被拒绝）、#5205（rollover 因 `checkpoint.md` 缺失导致长会话崩溃）、#5108（ACP `session/list` 每页全量扫描，数千会话需数分钟）。

## 4. 重要 PR 进展

过去 24 小时无 PR 更新，本节略。

## 5. 功能需求趋势

- **插件生态健壮性**：#1996、#4969 指向同一问题——`marketplace.json` 的严格 Zod 校验会因单条数据问题否决整个市场。社区期望**宽容解析 + 逐条报告**，而非全量失败。
- **模型可配置性**：#5290、#5298、#2990 显示 Fusion、reasoning effort 等模型能力存在**文档与实现脱节**、**隐式准入限制（tier gating）未提示**的问题，用户需要明确的能力说明与显式参数。
- **非交互 / ACP 场景**：#4994（OAuth 反复授权）、#5108（会话列表性能）、#3811（删除的会话仍出现在 chronicle insights）共同指向自动化与可观测性场景下的一致性问题。
- **Windows 平台质量**：#3700、#5302、#5299、#2612、#3760 集中反映 Windows + WSL2 在渲染、键盘绑定、路径解析上的短板。
- **企业可控性**：#5286（沙盒 + GHE）、#5297（仓库级权限）体现企业落地时对网络代理与权限治理的需求。
- **上下文与记忆**：#5205（rollover 崩溃）、#3060（非 github.com 源的仓库 `store_memory` 失败）显示长会话与非 GitHub 托管仓库的支持仍有缺口。

## 6. 开发者关注点

- **回归问题信任成本高**：多条 issue 明确标注为回归（#3700、#4994），且在较新版本中仍复现，开发者开始附上版本区间与复现日志，期望更小的版本变更引发破坏。
- **静默失败最难排查**：#4600 图片丢失、#2990 选项被隐藏、#5301 网关超时，共同点是缺少明确错误提示或原因说明。
- **性能与资源占用**：空闲 CPU 215%（#3700）与 ACP 会话列举需数分钟（#5108）是两个量级不同但都影响日常使用的性能问题。
- **文档与 CLI 行为不一致**：#5290、#5298 引用官方文档与实际行为对照，这类“文档可验证”的反馈通常更容易被快速定位。
- **跨平台一致性**：Windows 相关条目在今日更新中占比显著（渲染、键盘、路径、PowerShell 生成），
  建议 Windows 用户优先关注 #3700 的修复进展。

> 说明：以上内容均基于所提供数据，未对未展示的字段（如 issue 完整正文、版本号细节）做补充推断。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 · 2026-10-30

## 1. 今日速览

今天发布 v2.2.3 与 v2.2.2 两个版本，分别带来 **Claude Code 登录复用**（Claude Agent provider）与**默认开启图像生成**能力，另有 process-daemon v0.4.0 发布。社区侧，**Zen 免费额度问题**仍是最大热点（主追踪 Issue 评论达 140 条），同时出现多起 **ECONNRESET 连接中断**报告（含区域网络差异现象）。PR 侧围绕**上下文压缩预算、TUI 自动化（Automations）、REPL codemode** 等方向推进活跃。

---

## 2. 版本发布

- **v2.2.3**：支持用 Claude Code 登录使用 OpenCode——安装 Claude Code 并执行 `claude auth login` 后，在 `/connect` 中选择 **Claude Agent** 即可使用自己的 Claude Code 登录与模型（PR #58782）。另含桌面端长会话流式改进。
- **v2.2.2**：**默认启用图像生成**——当所连 provider 支持图像模型时，agent 可直接使用 `experimental_image_generate`，无需额外配置，并可通过 `experimental.image_generate.model` 指定偏好模型（PR #60258）。
- **process-daemon v0.4.0**：`opencode-pty 0.4.0`（协议 7），以 `@opencode/pty@0.4.0` 发布至 npm。

---

## 3. 社区热点 Issues

1. **#59387 [OPEN] Zen 免费额度问题主追踪帖**（140 评论 / 👍10）— 汇总 "Free usage exceeded / 免费额度已用完" 等报告，是当前社区情绪最集中的入口。 https://github.com/anomalyco/opencode/issues/59387
2. **#50201 [CLOSED] 迁移后付费 Go 工作区丢失**（11 评论 / 👍4）— 用户 Console 迁移后订阅、用量和发票不可见，涉及付费资产可用性，已关闭。 https://github.com/anomalyco/opencode/issues/50201
3. **#53955 [OPEN][已复现] Plan 模式仍执行破坏性编辑**（11 评论）— 多模型下均出现，属于 agent 安全边界问题，优先级高。 https://github.com/anomalyco/opencode/issues/53955
4. **#60250 [CLOSED] v2.2.1 Plan 模式约束失效**（9 评论）— 切到 Plan agent 后仍直接提议实施修改，与上条同属计划模式退化。 https://github.com/anomalyco/opencode/issues/60250
5. **#52054 [CLOSED][已复现] 设置 HTTP 代理但无 no_proxy 时事件流死循环**（9 评论）— TUI 将本地 127.0.0.1 流量走代理，导致 "Restarting service…"，影响代理环境用户。 https://github.com/anomalyco/opencode/issues/52054
6. **#50979 [OPEN][已复现] 会话移入空 git 仓库会改写 global 项目 worktree**（7 评论）— 会话移动 API 的行为正确性问题。 https://github.com/anomalyco/opencode/issues/50979
7. **#60422 [OPEN] 内置 Zen provider 出现 ECONNRESET，VPN 下正常**（6 评论 / 👍3）— 同一网络与配置下仅换出口 IP 即可恢复，疑似区域网络问题。 https://github.com/anomalyco/opencode/issues/60422
8. **#60535 [OPEN] 俄罗斯地区 OpenCode v2 客户端与官网无法访问**（5 评论）— 与上条区域连接问题叠加，值得关注可用性。 https://github.com/anomalyco/opencode/issues/60535
9. **#60279 [CLOSED] Zen 限流未按说明重置 + 桌面端缺少自定义 provider 选项**（4 评论）— Windows 11 / 桌面 v2.2.1 下两个影响工作流的问题。 https://github.com/anomalyco/opencode/issues/60279
10. **#60273 [CLOSED][FEATURE] 文档自动化自组织转移后失效，2.x 发布不写 release notes**（3 评论）— 直接关系到用户获取变更信息的能力。 https://github.com/anomalyco/opencode/issues/60273

> 另有多条同类免费额度反馈（#60280、#60266、#60240 等）已被关闭或待关闭，说明官方正通过主帖集中收敛。

---

## 4. 重要 PR 进展

1. **#60647 [OPEN] compaction.buffer 支持百分比**（contributor）— 现有配置仅接受 token 数，无法适配不同上下文窗口的模型；改为按窗口比例更通用。 https://github.com/anomalyco/opencode/pull/60647
2. **#60658 [OPEN] 按上下文窗口约束压缩摘要长度** — 修复 #60648 的摘要预算 bug（自动压缩策略不变）。 https://github.com/anomalyco/opencode/pull/60658
3. **#60392 [OPEN][needs:compliance] 仅显示免费模型的过滤器** — 新增 `OPENCODE_ONLY_FREE_MODELS=1`，作为 `OPENCODE_DISABLE_FREE_MODELS` 的反向开关，作用于 opencode / opencode-go 目录。 https://github.com/anomalyco/opencode/pull/60392
4. **#60650 [OPEN] 将实验性 schedules 全链路重命名为 Automations**（contributor）— 覆盖 schema、数据库、工具、斜杠命令、HTTP API 与生成客户端，已有 SQLite 记录原地迁移。 https://github.com/anomalyco/opencode/pull/60650
5. **#60627 [OPEN] TUI 新增 Automations 弹窗** — 在 `/automations` 中查看、暂停、恢复、删除定时提示与零 token watcher（基于 #60650）。 https://github.com/anomalyco/opencode/pull/60627
6. **#60628 [OPEN] 桌面端 Automations 侧边栏视图** — 跨项目管理定时 prompt、cron 与零 token watcher。 https://github.com/anomalyco/opencode/pull/60628
7. **#60656 [OPEN] codemode 增加可选 REPL 模式与宿主状态存储**（contributor）— 解决每次 `execute` 从零开始、无法跨调用保留状态的问题。 https://github.com/anomalyco/opencode/pull/60656
8. **#58782 [CLOSED] Claude Agent provider 合并**（contributor / needs:compliance）— 通过 Claude Agent SDK 复用用户自己的 Claude Code 登录，已随 v2.2.3 发布。 https://github.com/anomalyco/opencode/pull/58782
9. **#60082 [OPEN] 通过简单缓存共享 provider 发现结果**（contributor）— 修掉多 Location 下重复拉取（如 30 个 Location 时 GitHub Copilot `/models` 被请求 30+ 次）。 https://github.com/anomalyco/opencode/pull/60082
10. **#59864 [OPEN] provider 报告 $0 时按目录价估算会话花费** — 新增可选 `experimental.cost-estimate` 实验项（Closes #59861）。 https://github.com/anomalyco/opencode/pull/59864

> 其他小型修复：#60655 将旧式 `^H` 视为 ctrl+backspace；#60512 修复原始文件路径中字面字符被误当 URL 处理；#60652 修正"最近关闭"菜单搜索框顶部内边距。

---

## 5. 功能需求趋势

- **代理 / 网络环境适配**：HTTP(S)_PROXY 与 no_proxy 组合下的 TUI 事件流、v2 代理支持（#51247、#52054），以及 ECONNRESET 与区域可达性问题（#60422、#60535、#60620、#60636）集中出现。
- **免费额度与模型可见性**：大量免费额度提示相关反馈，以及"免费模型不可用/误判旧版本"（#60280），驱动了仅显示免费模型的 PR（#60392）。
- **计划模式（Plan）执行边界**：Plan agent 越权修改代码（#53955、#60250）成为重复出现的安全诉求。
- **长上下文与成本可控**：压缩缓冲按比例配置、摘要长度受限、按目录价估算花费（#60647、#60658、#59864）。
- **自动化 / 定时任务**：schedules 重命名为 Automations 并同步落地 TUI 与桌面端 UI（#60650、#60627、#60628）。
- **TUI 易用性细节**：鼠标捕获控制（#43676）、Linux 剪贴板粘贴（#32370、#60257）、主题与边框可见性修复（#50523）。
- **文档与发布说明自动化**（#60273）。

---

## 6. 开发者关注点

- **付费与额度链路可信度**：迁移后工作区/订阅不可见（#50201）、限流未按说明重置（#60279）、免费额度提示误报（#60240），是影响付费用户信任的高频痛点。
- **网络与代理是最大的环境类摩擦**：代理配置缺失导致服务反复重启、区域网络下连接被重置且难以自查（无 rate-limit JSON），开发者希望获得更明确的诊断信息。
- **Agent 行为可预测性**：Plan 模式必须严格"只读不改"，这是安全与流程合规的底线诉求。
- **多 Location / 多项目下的性能**：重复的 provider 发现请求（#60082）说明资源开销随打开项目数线性增长。
- **变更可发现性**：2.x 发布说明缺失（#60273）让开发者难以判断升级风险，与本次两个版本只给出摘要的现状相互印证。

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报 · 2026-10-30

## 1. 今日速览

今日无新版本发布。社区焦点集中在 **Windows 终端兼容性**（mintty/ConPTY 转义序列泄漏、路径大小写）与 **OpenAI/ChatGPT 登录与配额识别**两类问题上，多条相关 Issue 在今日集中关闭并伴随修复 PR 落地。同时，`ctx.requestReload()` 延迟扩展重载、TUI 性能虚拟化、Code Mode 图像读取等改动进入关闭状态。

## 2. 版本发布

无（过去 24 小时内无新 Release）。

## 3. 社区热点 Issues

1. **#7547 [CLOSED] Windows 使用方式与问题汇总（91 评论）** — 今日讨论量最高，聚焦「在 Windows 上应该优先修复 bug、完善文档还是优化安装方式」，是 Windows 体验路线的总入口。
   https://github.com/earendil-works/pi/issues/7547

2. **#6665 [OPEN] TUI streaming 时占满一个 CPU 核（15 评论，👍7）** — 定位到 `Markdown.render` → `Intl.Segmenter` 未缓存及逐块重建，长会话下性能明显劣化，是当前最受认同的性能问题。
   https://github.com/earendil-works/pi/issues/6665

3. **#10256 [OPEN] 终端颜色查询回包泄漏进输入框（14 评论，👍4）** — Windows mintty/ConPTY 下 OSC 颜色应答被当成用户输入，甚至触发 BEL 打开外部编辑器；0.99.x 受影响，0.87.1 正常，属回归。
   https://github.com/earendil-works/pi/issues/10256

4. **#10480 [CLOSED] 直连 OpenAI 时不识别手动配额重置（20 评论，👍3）** — ChatGPT Pro 已用掉 banked reset 但 Pi 仍报限额；workaround 是登出后改用 openai-codex 登录。
   https://github.com/earendil-works/pi/issues/10480

5. **#10605 [OPEN] ChatGPT/OpenAI OAuth 403** — Plus 用户登出重登后仍遇 `not eligible for subscription sharing`，订阅类登录路径仍不稳定。
   https://github.com/earendil-works/pi/issues/10605

6. **#10954 [OPEN] [prio:p0] Claude 重放 thinking block 返回 400** — 工具列表变化后重放思考块被拒，`block_binding` 仅在 `supportsMidConvoEffort` 时发送；高优先级协议兼容问题。
   https://github.com/earendil-works/pi/issues/10954

7. **#11376 [OPEN] [prio:p0] 会话中途移除工具导致后续请求全部失败** — 扩展重载后停止注册部分工具，触发 `tool_reference_unresolved`，影响扩展开发者的可靠性。
   https://github.com/earendil-works/pi/issues/11376

8. **#8928 [CLOSED] 并行启动时报「No API key found」约 48 秒** — 当 `auth.json` 含其他 provider 的过期 OAuth 凭证时出现，作者提供了确定性复现与时序数据，解释了多进程场景高发原因。
   https://github.com/earendil-works/pi/issues/8928

9. **#9884 [CLOSED] 启动时默认模型被 fallback 替换** — 扩展在运行时发现的 provider 模型，在 20 次启动中有 4 次被替换为 `deepseek/deepseek-v4-pro`，涉及扩展与配置的启动顺序。
   https://github.com/earendil-works/pi/issues/9884

10. **#11015 [CLOSED] [fix-available] pi-durable Code Mode 读取图像丢失内容** — `tools.read` 对图片返回空字符串，`image()` 抛 TypeError；已有对应修复 PR。
    https://github.com/earendil-works/pi/issues/11015

## 4. 重要 PR 进展

1. **#11609 fix(tui): 消费 DA1 之后 mintty 的无前缀调色板应答** — 直接对应 #10256，处理 OSC 4 回复缺少 `ESC ] 4` 引导符的情况。
   https://github.com/earendil-works/pi/pull/11609

2. **#11589 fix(coding-agent): 对无需信任资源的项目沿用已保存的信任状态** — 修复 `trust.json` 中的 `false` 被自动信任逻辑覆盖（Fixes #10947）。
   https://github.com/earendil-works/pi/pull/11589

3. **#11588 fix(coding-agent): Windows 路径大小写不敏感比较** — 修复 `c:\Users\me` 与 `C:\Users\me` 被判为不同路径（Fixes #10488）。
   https://github.com/earendil-works/pi/pull/11588

4. **#7948 feat(coding-agent): 延迟扩展运行时重载** — 以 `ctx.requestReload()` 替代阻塞式 `ctx.reload()`，合并重载请求并在安全点执行，对应 #6552。
   https://github.com/earendil-works/pi/pull/7948

5. **#11598 perf(tui): 虚拟化 transcript 并延迟调整全屏布局** — 解决每帧渲染整棵消息树导致的滚动/输入卡顿（对应 issue #9549）。
   https://github.com/earendil-works/pi/pull/11598

6. **#11606 fix(durable): Code Mode 脚本中的 read 返回图像块** — 通过补充 `structuredOutputSchema` 修复图像读取返回空串。
   https://github.com/earendil-works/pi/pull/11606

7. **#11608 fix(coding-agent): 权限门禁命令检查改为分词匹配** — 修正 `rm -fr /x` 漏检与 `echo "do not run rm -rf /"` 误报两类问题。
   https://github.com/earendil-works/pi/pull/11608

8. **#11607 fix(chord): 完整移除工具输出中的 ANSI 转义序列** — 此前只删除 ESC 字节，导致彩色输出残留控制码。
   https://github.com/earendil-works/pi/pull/11607

9. **#6881 feat(ai): 响应携带计费成本时优先采用** — provider 返回 `usage.cost` 时用作 `usage.cost.total`，否则回退 `calculateCost`。
   https://github.com/earendil-works/pi/pull/6881

10. **#11587 fix(coding-agent): 会话目录 0700、会话文件 0600** — 避免在常见 umask 0022 下被本机其他用户读取，属安全加固。
    https://github.com/earendil-works/pi/pull/11587

## 5. 功能需求趋势

- **跨平台与终端兼容**：Windows（mintty、ConPTY、Windows Terminal）、WSL 路径、Orca 终端图像能力，占据今日最多条目。
- **TUI 性能与渲染正确性**：streaming 时的 CPU 占用、transcript 虚拟化、Markdown/ANSI 换行与样式边界处理。
- **认证与配额体系**：OpenAI OAuth/ChatGPT Business/Plus 登录、手动配额重置识别、并行启动时的凭证加载竞态，以及扩展持久化 API-key 的需求（#7658）。
- **扩展生态能力**：延迟重载、启动时模型选择顺序、工具注册生命周期、临时 npm 扩展自动更新（#11590）。
- **协议层兼容性**：Anthropic thinking block / tool_reference、Alibaba 推理模型的 developer role 400 错误。
- **安全与成本可见性**：权限门禁匹配精度、会话文件权限、provider 上报的实际计费成本。

## 6. 开发者关注点

- **Windows 体验仍是最大痛点**：输入泄漏、路径处理、启动行为等多条问题由同一批用户在持续跟进，且多为 0.99.x 后的回归。
- **登录与配额状态不一致**：用户难以判断「限额已到」是账户侧还是 Pi 侧判断问题，绕行方案（改用 codex 登录、反复 logout/login）被反复提及。
- **扩展生命周期缺乏可靠语义**：重载时机会打断工具注册，导致整段会话后续请求失败，开发者希望有官方可控的重载/注册契约。
- **性能可量化**：社区以 spindump 和基准数据（如 #7739 的启动时延与内存对比）提出诉求，而非主观反馈，便于维护者排序。
- **默认配置的确定性**：默认模型被 fallback、临时扩展不更新、信任状态被忽略，这类「静默偏离配置」的问题对生产用户影响大。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报 — 2026-10-30

## 1. 今日速览
今日最突出的动态是 **CI 稳定性问题集中爆发**：Managed Agent 门禁、web-shell smoke 及 E2E 测试在多条主分支运行中反复失败，且被确认与具体 PR 无关（#15898、#15861、#15052），已成为拖慢所有 PR 的公共瓶颈。与此同时，社区围绕 **上下文/缓存性能**（自托管模型的上下文不可变性、记忆提取窗口）持续提出性能诉求。功能侧，daemon 的 Skill 用户级激活路由、QQ 机器人消息转发等集成能力在 PR 层面推进中。

## 2. 版本发布
当日有两个发布：

- **cua-driver-rs v0.27.0**：Qwen CUA Driver 预编译二进制（vendor 于 `packages/cua-driver`）。macOS 提供带签名与公证的 universal binary + `QwenCuaDriver.app`；Linux（x86_64 + arm64，glibc 2.31 下限）与 Windows（UIAccess worker + 原生 SDK payload，x86_64 + arm64）均为未签名构建。
- **v0.26.4-nightly.20261029.70be140e14**：nightly 版本，含 managed 模块新增有界 SQL 历史查询（#15839）、generated-ui 持续聊天等功能变更。
- 链接：github.com/QwenLM/qwen-code/releases

## 3. 社区热点 Issues（10 个）

1. **#14724 [OPEN] Main CI failed: Managed Agent gate — no test identified**（99 评论）
   机器人反复报告主分支 CI 失败却无法归因到具体测试，评论量极高，说明自动归因机制本身存在缺陷，需人工介入。
   链接：QwenLM/qwen-code Issue #14724

2. **#15898 [OPEN][P1] Managed Agent gate 在 main 上红灯：postFailureLoads 每次运行波动**
   明确指出该门禁对所有触发完整 tier 的 PR 都是红的，且非单一 PR 引起——直接影响全仓库 PR 合并节奏，优先级 P1。
   链接：QwenLM/qwen-code Issue #15898

3. **#13078 [OPEN] Daily dependency CVE audit failed**（36 评论）
   定时依赖 CVE 审计失败，可能涉及新的高危漏洞，安全层面值得关注。
   链接：QwenLM/qwen-code Issue #13078

4. **#15052 [OPEN][P2] ci: 保留独立的 main E2E 验证**
   ref-scoped 并发会替换较早的 pending 运行，导致中间主分支提交缺乏独立验证结果，是 CI 可信度问题。
   链接：QwenLM/qwen-code Issue #15052

5. **#15861 [OPEN][P1] web-shell 目录选择器 smoke 在 Add Workspace 对话框确定性超时**
   与 PR 无关的确定性失败，导致每个 PR 都要承担一次错误归因，属 P1。
   链接：QwenLM/qwen-code Issue #15861

6. **#8432 [OPEN][P2] auth: 百炼 Personal Token Plan 模型列表不同步、图像/视频生成失败**（👍1）
   影响使用阿里 ModelStudio Token Plan 的用户，`/auth` 内置模型列表与实际服务不一致。
   链接：QwenLM/qwen-code Issue #8432

7. **#14215 [OPEN][P2] 自托管模型的上下文不可变性**（👍1）
   针对 prompt 处理速度低的自托管机器，希望上下文保持不可变以利用缓存——反映本地部署用户的性能痛点。
   链接：QwenLM/qwen-code Issue #14215

8. **#15493 [OPEN][P2] 记忆提取代理使用滑动 40 条窗口，前缀在会话开始后必须不可变**
   指出滑动窗口导致请求前缀每次变动，破坏缓存复用，属 roadmap/context-performance 方向。
   链接：QwenLM/qwen-code Issue #15493

9. **#15310 [OPEN][P3] 应告知模型当前使用的 shell，而非让其假设 bash**
   Windows 上实际走 cmd.exe，但系统提示未说明，模型写出 POSIX 命令导致每轮失败，是真实体验问题。
   链接：QwenLM/qwen-code Issue #15310

10. **#13649 [OPEN][P2] A2A 无 contextId 的消息各自创建不可区分、无上限的会话**
    默认请求形态下每条消息建一个会话，存在资源泄漏隐患，属 multi-agent 方向。
    链接：QwenLM/qwen-code Issue #13649

（另：#14791 SDK Java 托管 Hook 故障门禁失败、#15712/#15814 E2E TUI 前景 shell 测试失败，同属 CI 稳定性线；#14751 LSP `Config.shutdown()` 未停止语言服务器、#14625 测试预算 clamp 问题均已 CLOSED。）

## 4. 重要 PR 进展（10 个）

1. **#15922 feat(autofix-pr): 修复红灯前先合并过期 base**
   教会 PR watch 识别“过期 base 可解释的 CI 失败”，先合并 base 再修复，有助于减少误报。
   链接：QwenLM/qwen-code PR #15922

2. **#15927 test(managed-agent): 补齐拆分后验证缺口**
   覆盖调用方取消探测、早期 handler I/O 失败与 executor 关闭。
   链接：QwenLM/qwen-code PR #15927

3. **#15881 test(managed-agent): 对 B3a “commit 前已完成”崩溃窗口加门禁**
   将恢复矩阵行打包进 `hosted-failover-e2e` 作业作为故障注入分支。
   链接：QwenLM/qwen-code PR #15881

4. **#15924 feat(memory): opt-in 稳定提取窗口以复用前缀**
   针对 #15493，内部默认关闭的实验，用稳定窗口替代滑动 40 条，提升前缀缓存复用。
   链接：QwenLM/qwen-code PR #15924

5. **#15466 feat(serve): 增加用户级 Skill 激活路由**
   新增 `PUT /skills/:name/activation` 与批量 `PUT /skills/activation`（最多 100 个名称），作用于所有 workspace 合并的用户设置。
   链接：QwenLM/qwen-code PR #15466

6. **#15904 feat(qqbot): 可选转发机器人消息**
   新增 per-channel `forwardBotMessages`（默认 false），开启后其他机器人消息带 `[bot]` 前缀送达代理。
   链接：QwenLM/qwen-code PR #15904

7. **#15473 fix(desktop): 安装更新前停止捆绑运行时**
   Windows 上应用内更新先关闭捆绑运行时，避免 daemon 占用 Node 二进制。
   链接：QwenLM/qwen-code PR #15473

8. **#14313 fix(core): web 终端背压改用待处理输入判定**
   修正将输出误当作输入已确认的问题，避免静默消费输入时的错误准入。
   链接：QwenLM/qwen-code PR #14313

9. **#15730 fix(release): 发布 checkout 使用 job token**
   降低对 bot PAT 的依赖，PAT 仅保留在推送分支与创建 release 两步。
   链接：QwenLM/qwen-code PR #15730

10. **#13256 fix(web-shell): 长 diff 行自动换行**
    解决工具卡 diff 每行独立横向滚动条问题，保留缩进、行号与行可达性。
    链接：QwenLM/qwen-code PR #13256

（另：#14653 修复 `/mcp` 分组重排后选错服务器、#15060 统一 session view 重置状态、#15274/#15286 加固 SDK Java Maven 缓存路径、#14362 修复 cron 未尝试文本丢失。）

## 5. 功能需求趋势

- **上下文与缓存性能**：最集中的需求方向（#14215、#15493，roadmap/context-performance）。核心诉求是请求前缀稳定以复用缓存，尤其面向自托管低 prompt 处理速度场景。
- **多 Agent / A2A 与会话管理**：#13649（无 contextId 会话爆炸）、#13645（共享 mention 语法、类型化 executing-status），multi-agent 路线仍在打磨。
- **认证与模型支持**：#8432 反映内置模型列表与百炼 Token Plan 不同步，涉及模型切换与图像/视频生成。
- **Daemon 与 Skill 生命周期**：#15622、#15466 围绕用户级 Skill 激活与相关审查建议。
- **跨平台 shell 适配**：#15310 关注 Windows cmd.exe 下的提示准确性。
- **集成能力**：QQ 机器人消息转发（#15904）、出站媒体（#15869 相关 PR）等即时通讯集成在推进。

## 6. 开发者关注点

- **CI 基础设施是首要痛点**：多条主分支失败被确认与 PR 无关（#15898、#15861、#15052），自动归因失效（#14724 达 99 评论）导致每个 PR 承担额外重归因成本。开发者明确呼吁保留独立 E2E 验证、修复故障门禁稳定性。
- **测试门禁的确定性**：`postFailureLoads` 每次运行波动、web-shell smoke 确定性超时，说明测试隔离与故障注入设计需改进。
- **缓存/性能层面的请求稳定性**：滑动窗口、上下文可变性破坏缓存，是性能类反馈的高频主题。
- **真实环境适配**：Windows shell 假设、桌面更新时运行时占用等，反映跨平台与桌面场景的细节体验问题。
- **协作流程**：#15869 提及 PR 三天无维护者活动，反映审阅积压与响应时效诉求。

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI 社区动态日报（2026-10-30）

> 数据来源：github.com/Hmbown/DeepSeek-TUI。过去 24 小时无新版本发布；14 条 Issue、12 条 PR 有更新。

## 1. 今日速览

今天最突出的问题是 **main 分支无法编译、且所有 PR 的必需检查持续失败**（#7148、#7154），外部贡献被堵住。同时 v0.10.3 相关 bug 持续修复：压缩上下文异常/超时（#7133、#7153）、本地模型推理档位（#7124）等。已有多条修复在主干合入但未发布（MCP 故障提示 #6866、skills 控制 #7066/#7073）。

## 2. 版本发布

过去 24 小时无新 Release。

## 3. 社区热点 Issues（10 条）

1. **[#7148] main 无法编译：`PersistRequest::ClearCheckpoint` 成为死代码**
   https://codewhale-hq/Codewhale/issues/7148
   工作区自身 lint 策略下主干编译失败，导致每个 PR 的必需检查都卡在同一错误上，外部贡献无法合入。影响面最大，应优先修复。

2. **[#7154] 三个测试在每个 PR 的 `Test (ubuntu-latest)` 上失败**
   https://codewhale-hq/Codewhale/issues/7154
   陈旧 providers golden 文件与半安装的上下文窗口 fixture 导致与 PR 改动无关的持续失败，是 CI 噪音的源头。今日已有对应修复 PR #7155。

3. **[#7133] 自动压缩上下文异常**
   https://codewhale-hq/Codewhale/issues/7133
   v0.10.3 bug，摘要提到第六个候选测试构建被有意中断、无结果，问题仍待查。压缩路径稳定性核心问题之一。

4. **[#7153] 压缩耗时超出预期（>3 分钟）**
   https://codewhale-hq/Codewhale/issues/7153
   自动压缩触发后进程超过 3 分钟，与 #7133 同作者、同日提交，说明压缩模块是当前最突出的性能/可靠性痛点。

5. **[#7095] 会话历史丢失**
   https://codewhale-hq/Codewhale/issues/7095
   评论 11 条，为今日讨论最热的 Issue。已有 reset-save 检查点保留修复推送（`c4a4f42e9c`），但 issue 仍开放。

6. **[#7142] 实时消息窗口会话中途可重新定根，早期轮次不可达**
   https://codewhale-hq/Codewhale/issues/7142
   缺少接缝摘要与生命周期事件，涉及长会话可用性。已推送自动关闭绕过问题的修复（`7b54e7f572`）。

7. **[#7071] 非英文 locale 下常见 TUI 字符串硬编码为英文**
   https://codewhale-hq/Codewhale/issues/7071
   由维护者 Hmbown 提出，覆盖 zh-Hans 等所有非英文语言；已推送 15 语言目录相关提交（`896e781fbb`），中文本地化用户直接受益。

8. **[#7124] vLLM 推理档位需遵循本地模型模板**
   https://codewhale-hq/Codewhale/issues/7124
   在 Qwen3.8-27B-NVFP4 上复现了档位归一化失败，关系到本地模型适配正确性。对应 PR #7125。

9. **[#7115] exec 与 doctor 忽略 TUI 的无密钥 Ollama 采纳**
   https://codewhale-hq/Codewhale/issues/7115
   CLI 子命令与 TUI 行为不一致，强制要求 DeepSeek key；已推送只读 doctor 修复（`14a5723b75`）。

10. **[#6842] 限制 usage replay 标识符与保留 journal 归档增长**
    https://codewhale-hq/Codewhale/issues/6842
    10 月 4 日创建、仍在推进的可靠性/性能问题，涉及归档无限增长，长期运行用户会关注。

**另值得留意**：#7085（内置 Runcrate provider，已落地描述符，作者披露了利益关系）、#7066/#7073（skills 控制，均已 CLOSED）、#6866（MCP 启动失败告知模型，已 CLOSED，主干 `0dd3f0472f`）。

## 4. 重要 PR 进展（10 条）

1. **[#7155] 修复 main 上由目录与上下文窗口变更破坏的三个测试**
   https://codewhale-hq/Codewhale/pull/7155
   关闭 #7154，仅改 fixture 与 golden 文件，不动生产代码，直接解除 CI 阻塞。

2. **[#7125] 遵循本地模型推理阶梯**
   https://codewhale-hq/Codewhale/pull/7125
   vLLM Chat 适配器统一发送 low/medium/high，但 Qwen3.8 模板接受 low/medium/xhigh，新增按版本区分的档位映射。

3. **[#7147] 按会话历史而非存储形态 fork 会话**
   https://codewhale-hq/Codewhale/pull/7147
   修复用户报告的 `/undo` 拒绝（"Cannot identify an exact saved-history boundary"）。

4. **[#7156] 将 `~~~` 围栏渲染为代码块**
   https://codewhale-hq/Codewhale/pull/7156
   markdown 渲染器此前只识别反引号围栏，`~~~` 被当正文渲染；代码库其他部分已视为围栏。

5. **[#7150] 统一 zh-Hans 人称与 provider/token 术语**
   https://codewhale-hq/Codewhale/pull/7150
   统一「你/您」等不一致用法，中文化质量改进。

6. **[#7152] 去掉 fleet roster 刷新后的引擎状态回复**
   https://codewhale-hq/Codewhale/pull/7152
   每次 fleet 变更都会插入一条冗余状态消息，变更本身已有回执。

7. **[#7151] 原生 HarmonyOS：修复文档化构建并发布签名 arm64 版本**
   https://codewhale-hq/Codewhale/pull/7151
   让 HarmonyOS 成为可文档化、可发布的目标平台，平台扩展方向值得关注。

8. **[#7146] 保留嵌套在列表项中段落的缩进**
   https://codewhale-hq/Codewhale/pull/7146
   换行包装丢弃行首空格导致缩进丢失，模型常写此类结构。

9. **[#7149] 移除 fleet alerts 与 pet worker 中的全文件 `dead_code` allow**
   https://codewhale-hq/Codewhale/pull/7149
   #5587 死代码清理的一小片，让 `-D warnings` 决定死代码。

10. **[#6393] 无索引源码导航回显与受限 fork 前缀继承**
    https://codewhale-hq/Codewhale/pull/6393
    9 月 21 日起持续更新的长期 PR，保留原贡献者提交与署名，无索引守护进程。

**已关闭**：#7143（移除附件/vim 删除时分离召回的历史）、#7144（blockquote 折行保留引用竖线）。

## 5. 功能需求趋势

- **本地模型/多 provider 适配**：vLLM 推理档位（#7124）、Ollama 无密钥采纳（#7115）、内置 Runcrate（#7085）——社区在推动 TUI 成为多后端统一入口。
- **上下文与长会话可靠性**：压缩异常/超时（#7133、#7153）、会话重新定根（#7142）、历史丢失（#7095）、归档增长（#6842）密集出现。
- **国际化与本地化**：硬编码英文字符串（#7071）+ zh-Hans 术语统一（#7150），中文本地化是明确诉求。
- **Skills 体系可控性**：bundled 安装控制、逐 skill 禁用、显式启用、索引描述上限可配（#7066、#7073）。
- **MCP 与可观测性**：MCP 启动失败/恢复需告知模型（#6866）。
- **CI 与工程质量**：编译/测试阻塞（#7148、#7154）成为社区关注焦点。

## 6. 开发者关注点

- **主干阻塞**：`main` 不编译 + 三个测试在所有 PR 上失败，导致外部贡献无法合入，是目前最紧迫的工程痛点。
- **压缩路径**：异常与超 3 分钟耗时并存，影响长会话实际可用性。
- **行为一致性**：CLI 子命令（exec/doctor）与 TUI 在 provider 采纳上不一致，易造成困惑。
- **长期运行稳定性**：journal 归档与 usage replay 标识符无上限增长。
- **本地化细节**：非英文界面字符串硬编码、术语与称谓不统一。
- **渲染细节**：`~~~` 围栏、列表嵌套段落缩进、blockquote 折行等 markdown 渲染问题被逐项修复。

</details>

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar-personal) 自动生成。*