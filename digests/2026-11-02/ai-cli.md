# AI CLI 工具社区动态日报 2026-11-02

> 生成时间: 2026-11-02 20:22 UTC | 覆盖工具: 9 个

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

# AI CLI 工具生态横向对比报告 · 2026-11-02

> 范围：Claude Code、OpenAI Codex、Gemini CLI、GitHub Copilot CLI、Kimi Code CLI、OpenCode、Pi、Qwen Code、DeepSeek TUI 共 9 个工具。数据仅基于所给各工具日报。

---

## 1. 生态全景

当前 AI CLI 工具生态已从"能跑通"阶段转入**工程化与信任建设**阶段：版本迭代趋于高频（Gemini CLI 夜间版、Copilot CLI 小版本、Qwen Code 正式版+SDK 同日发布），但社区反馈的重心普遍从"缺功能"转向**计费透明度、权限可信度、静默失败与跨平台稳定性**。与此同时，底层架构重构明显加速——Codex 的运行时所有权与存储恢复、Qwen Code 的 Managed Agent 基础设施、Pi 的 durable 执行语义，显示各厂商在为多智能体与长会话场景打地基。今日多数工具无重大功能发布，社区声量集中在缺陷与成本议题，说明**体验欠账正在成为增长瓶颈**。

---

## 2. 各工具活跃度对比

| 工具 | Issue 动态（今日更新/热点） | PR 动态 | Release | 备注 |
|---|---|---|---|---|
| **Claude Code** | 10 条热点 + 补充条目；#97074 达 64 评论/144👍 | 1 条（已关闭，未合入） | 无 | 一批 `cyber` 误报 Issue 集中关闭 |
| **OpenAI Codex** | 10 条热点 + 多条补充；#41220 达 81 评论 | 约 40 条（多为 copyberry 机器人，均 CLOSED） | rust-v0.167.0-alpha.3（仅版本号） | Windows 桌面问题高频 |
| **Gemini CLI** | 50 条 Issue 更新，几乎全在 `area/agent` | 10 条（含 1 条 p1 安全修复） | v0.67.0-nightly | 子代理可靠性为核心矛盾 |
| **GitHub Copilot CLI** | 43 条 Issue 更新 | 1 条（与项目无关） | v1.0.106-3 | 功能+修复小版本 |
| **Kimi Code CLI** | 无活动 | 无 | 无 | 过去 24 小时无活动 |
| **OpenCode** | 10 条热点 + 补充；#59387 达 211 评论 | 10 条（多为 v1 维护分支） | 无 | 缓存退化被两次独立报告 |
| **Pi** | 10 条热点 + 多条补充；#7730 达 23 评论 | 10 条 + 补充 | v1.5.0（含破坏性移除） | 向后兼容争议 |
| **Qwen Code** | 10 条热点 + CI 告警类长期挂起 | 10 条 | v0.26.6 + sdk-typescript v0.1.27 + nightly | 两条 P1（安全/CI） |
| **DeepSeek TUI** | 34 条 Issue 更新；#5316 达 34 评论 | 10 条（含依赖机器人） | 无 | 大量"部分落地、验收未完成" |

**数据点摘要：**
- 今日有 Release 的工具：Codex（alpha）、Gemini CLI（nightly）、Copilot CLI、Qwen Code（3 项）、Pi（v1.5.0）；Claude Code、OpenCode、DeepSeek TUI 无发布；Kimi Code CLI 无任何活动。
- PR 侧最活跃：Codex（约 40 条）、Gemini CLI / OpenCode / Pi / Qwen Code / DeepSeek TUI（各 10 条量级）；Copilot CLI 仅 1 条且无关。

---

## 3. 共同关注的功能方向

| 方向 | 涉及工具与具体诉求 |
|---|---|
| **用量/计费透明度与可信度** | Claude Code（#97074 headless 每 token 约 1.8 倍、#41502 用量上限阻塞、#73770 statusline 暴露各模型周限额）；Codex（#41220 跨报告追踪、#58530 Plus 独立额度、#48010 用量数据被丢弃）；OpenCode（#59387 免费层 211 评论、#51424 订阅有效却报余额不足、#17614 无法查询 pro 限额）；DeepSeek TUI（#6011 token 统计、#6969 prompt caching 经济性为负） |
| **权限/安全判定的准确性与可解释性** | Claude Code（#27899 `2>&1` 误判、#28174 权限理由文本错误、#91495 浏览器站点权限被忽略、#103832 Bypass 仍弹两次审批、`cyber` 误报集中关闭）；Gemini CLI（PR #30095 Windows git diff 权限绕过 p1）；Qwen Code（#16144 频道默认开放与文档不符 p1）；OpenCode（#57456 server 权限被客户端继承）；Copilot CLI（#5335 合法调试被"网络安全风险"拦截） |
| **静默失败与可观测性** | Gemini CLI（#22323 MAX_TURNS 后误报成功、#21409 generalist agent 无限挂起、#22598 子代理轨迹不可见）；Qwen Code（#15799 已完成工具调用被误报失败、#12970 截断误判）；DeepSeek TUI（#6184 引擎静默冻结、无日志无报错）；Claude Code（#22711 后台任务输出不可访问） |
| **上下文/缓存正确性与成本** | OpenCode（#61037 / #61276 输入 token 缓存失效，两次独立报告；#60663 压缩丢失目标）；Pi（#9549 大 transcript 每帧重渲染、#9276 grep 导致 OOM、#11021 上下文窗口上报偏小）；DeepSeek TUI（#7133 自动压缩异常）；Claude Code（#99068 压缩后历史丢失） |
| **多模型/BYOK 与 provider 适配** | Copilot CLI（#3709 BYOK 锁定单模型、#4646/#5145 自定义模型 400）；Pi（OpenRouter/Anthropic/Bedrock 适配器问题、#9134 schema 关键字被裁剪）；Qwen Code（#16165 OpenRouter `:exacto` 上下文窗口、#16066 模型目录刷新开关）；OpenCode（#61077 模型区域托管诉求） |
| **跨平台兼容（Windows/WSL/Wayland/macOS）** | Codex（Windows 桌面簇：#40182 更新器重复下载 501.8 MB、#50779 WSL 启动失败、#56941 Computer Use 卡顿、#58398 Linux 启动超时）；Gemini CLI（#21983 Wayland、PR #30097 WSL2 粘贴）；Copilot CLI（#5304 WSL2 休眠、#4891 Windows 崩溃）；Claude Code（#88430 VS Code 快捷键、#104726 KDE Wayland、#102548 Windows 听写） |
| **自动化行为的人为可控性** | Codex（#29702 关闭"AI 定时自动解决"，44👍 为批次最高）；Claude Code（#41502 希望非阻塞等待用量上限）；Qwen Code（#15894 stop 无法取消 loop_wakeup）；OpenCode（#1242 修改/切换 system prompt） |
| **向后兼容与公共 API 契约** | Pi（v1.5.0 移除 `Type` 导出破坏下游 `@flue/runtime@2.3.0`，PR #11704 要求写入规范）；OpenCode（v1/v2 分叉导致 PR 需写两遍） |

---

## 4. 差异化定位分析

| 工具 | 功能侧重 | 目标用户 | 技术路线特征 |
|---|---|---|---|
| **Claude Code** | 权限模型、headless/CI 自动化、Desktop/IDE 多端集成 | 企业/团队、CI 批处理用户 | 以 SDK/CLI entrypoint 为核心；Issue 工作流本身在用 Claude 模型做 triage/dedupe（#106583 拟由 opus-4-6 切至 sonnet-5-5，但该 PR 已关闭） |
| **OpenAI Codex** | 运行时基础设施（turn 准入、sideband 传输、rollout 存储恢复）、Windows 桌面 | Windows 桌面与 IDE 用户 | Rust 内核（rust-v0.167.0-alpha.3）；PR 显示大量底层重构（#58963 宿主所有权、#58959 备用 rollout 恢复、#58950 WebSocket 恢复） |
| **Gemini CLI** | 子代理体系（generalist/browser/codebase_investigator）、执行模型重构 | agent 编排与自动化研究者 | 高度集中在 `area/agent`；提出 OS 沙箱+ASTR 感知（#19873、#22745）等架构级方向；p1 安全修复独立提交（#30095） |
| **GitHub Copilot CLI** | 会话交互（取消排队）、MCP OAuth、@mentions | GitHub 生态内开发者 | 小步快跑的小版本（v1.0.106-3）；Issue 数多但 PR 极少，反馈→修复节奏偏慢 |
| **Kimi Code CLI** | — | — | 今日无活动，无法评估 |
| **OpenCode** | 免费层/订阅计费、TUI、process-daemon | 个人开发者、成本敏感用户 | v1 进入维护分支、新功能只进 v2，存在明显分叉成本；#59387 免费层总贴 211 评论显示其用户基数与价格敏感度 |
| **Pi** | 扩展生态（pi-packages）、多 provider 适配、durable 执行 | 扩展开发者、自托管/包管理器用户 | TUI + 扩展包体系；明确出现"AI 起草 issue 并披露"的协作规范（#9549、#10954）；兼容性治理成为焦点 |
| **Qwen Code** | Managed Agent（多智能体）基础设施、Web Shell/桌面端 | 元智能体/平台化建设者 | 正式版+SDK+nightly 三线并行；MySQL schema 规范化（38 表 843 列）、共享事件投递循环（#15952）显示平台化投入 |
| **DeepSeek TUI** | TUI Markdown 渲染保真、crate 拆解、成本计量 | 终端重度用户、Rust 工程贡献者 | EPIC 驱动的 crate 化重构（#5316）；大量条目"已修复未验收"，端到端验收流程是短板 |

---

## 5. 社区热度与成熟度

**社区热度（按今日讨论强度）：**
- **最高**：OpenCode（单帖 211 评论）、Codex（追踪帖 81 评论）、Claude Code（单 Issue 144👍 / 64 评论）、Gemini CLI（50 条 Issue 全在 agent 领域，密度最高）。
- **较高**：Pi（23 评论热帖 + 兼容性争议）、Copilot CLI（43 条 Issue 更新，但 PR 仅 1 条）、Qwen Code（两条 P1 + CI 告警长期挂起）。
- **中等**：DeepSeek TUI（34 条更新，多为验收对账）。
- **无活动**：Kimi Code CLI。

**成熟度判断（基于所给数据的行为特征）：**
- **进入重构/平台化阶段的**：Codex（底层运行时所有权、存储、传输恢复）、Qwen Code（Managed Agent + schema 规范化）、Pi（durable 语义、扩展生态治理）、DeepSeek TUI（crate 拆解、dead-code 清理）——特征是 PR 偏基础设施、Issue 偏架构。
- **处于体验欠账集中兑付阶段的**：Claude Code、Gemini CLI、Copilot CLI、OpenCode——特征是高频缺陷反馈集中在权限、计费、跨平台三点。
- **反馈→修复闭环偏弱的**：Copilot CLI（43 Issue 对 1 无关 PR）、Qwen Code（CI 自动告警长期未收敛，#14724 达 155 评论）。
- **破坏性变更引发下游反应的**：Pi v1.5.0 移除 `Type` 导出即打断 `@flue/runtime@2.3.0`，属成熟度治理的典型警示。

---

## 6. 值得关注的趋势信号

1. **"计费可信度"正成为比"模型能力"更敏感的留存变量。** Codex（#41220 / #48010）、OpenCode（#51424 / #59387）、Claude Code（#97074）、DeepSeek TUI（#6969）四个工具同时出现"消耗快于预期""用量数据本身不可用""订阅有效却报欠费"。对开发者的参考：在选型时，**用量数据的可查询性与计量口径一致性**应纳入评估项，CI 场景尤其要验证 headless 与交互模式的计量差异。

2. **静默失败比崩溃更伤信任，且已成为多家共同痛点。** Gemini CLI（#22323 误报成功、#21409 无限挂起）、Qwen Code（#15799 / #12970 误报）、DeepSeek TUI（#6184 无日志冻结）、Pi（#9134 schema 被静默裁剪）。对开发者的参考：接入时应在关键工具调用处**自行校验返回的终止原因与 schema 完整性**，不要依赖工具侧"success"状态。

3. **权限/安全默认值必须与文档一致，误报正在成为安全审计类工作流的实质阻碍。** Claude Code 一批 `cyber` 误报以"session-halted"终止授权工作（#90823–#90828）、Copilot CLI #5335 拦截合法调试、Qwen Code #16144 默认开放与文档矛盾、Gemini CLI PR #30095 修复 git 参数绕过。趋势是**安全校验从"宁严勿松"转向"可解释+可复现"**。

4. **跨平台不是加分项而是准入门槛。** 九个工具中至少七个出现 Windows/WSL/Wayland/macOS 专项缺陷，且 Windows 桌面端在 Codex 中形成独立问题簇（更新器、WSL、Computer Use、附件发送）。对开发者的参考：**Windows 与 WSL 应作为独立验证矩阵**，而非在 Linux 通后顺带验证。

5. **自动化默认行为正遭遇"可控性优先"的反弹。** Codex #29702（关闭定时自动解决）以 44👍 居批次首位、Qwen Code #15894（stop 无法取消 loop_wakeup）、Copilot CLI #1857（无法取消排队消息）。趋势是**用户希望自动化具备可中断、可撤回、可配置的"刹车"**。

6. **底层基础设施竞赛已开始，判断厂商投入看 PR 而非 Release。** Codex 的 turn 准入/宿主所有权、Qwen Code 的 Managed Agent 与 schema、Pi 的 durable 暂停语义，均指向**多智能体与长会话**是下一阶段主战场。对开发者的参考：关注这些重构的 API 稳定性承诺，尤其 Pi 已因破坏性导出引发 #11704 的兼容规范讨论。

7. **AI 参与自身工程流程正在常态化。** Claude Code 的 triage/dedupe 工作流模型调整（#106583）、Pi 中 issue 由本地 agent 起草并经人工核实的披露（#9549、#10954）、Qwen Code 的 AI 合成贡献（#13312）。但同一份数据也显示：**#79523 重复标记不引用原 Issue、Qwen Code CI 自动告警长期未收敛**——AI 参与的流程本身仍需人工验收兜底。

---

*说明：以上对比严格基于用户所给各工具日报；PR 合入状态、修复效果以各仓库最新内容为准。Kimi Code CLI 因过去 24 小时无活动，未纳入对比分析。*

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告
（数据来源：github.com/anthropics/skills，截止 2026-11-02）

> 说明：本次提供的 PR 列表中评论数字段均为 undefined，无法按评论数验证排行。以下“热门 Skills 排行”依据 PR 的更新活跃度与摘要中体现的讨论/修复关联度选取，并如实标注状态。所有 PR 均为 OPEN。

---

## 1. 热门 Skills 排行（基于更新活跃度与讨论关联度）

| # | Skill / PR | 功能 | 讨论热点 | 状态 |
|---|---|---|---|---|
| 1 | [PR #1980 webapp-testing](https://github.com/anthropics/skills/pull/1980) | 修正 `with_server.py` 中 `shell=True` 的服务器启动方式 | 安全性：未净化的用户/Agent 命令字符串进入系统 shell 的命令注入风险；2026-11-01 仍在更新 | OPEN |
| 2 | [PR #1742 mcp-builder](https://github.com/anthropics/skills/pull/1742) | 适配 `mcp>=2.0.0` 的 `streamable_http_client` 重命名与自定义 header 配置 | 官方 MCP SDK 升级导致的兼容性断裂（关联 Issue #1668） | OPEN |
| 3 | [PR #1298 skill-creator](https://github.com/anthropics/skills/pull/1298) | 隔离 trigger 评估、修复 Windows 与运行时失败处理 | Skill 自身评估准确性（false miss、无效评分） | OPEN |
| 4 | [PR #1792 docx](https://github.com/anthropics/skills/pull/1792) | LibreOffice 超时按错误上报，并校验输出 DOCX 无修订标记 | “假成功”问题：超时仍报成功 | OPEN |
| 5 | [PR #1977 algorithmic-art](https://github.com/anthropics/skills/pull/1977) | `wrapAround()` 改用取模，正确包裹负值 | 基础函数逻辑缺陷（Fixes #1897） | OPEN |
| 6 | [PR #1976 webapp-testing](https://github.com/anthropics/skills/pull/1976) | `element_discovery.py` 正确上报 textarea / select | 元素发现准确性（Fixes #1891） | OPEN |
| 7 | [PR #525 pyxel](https://github.com/anthropics/skills/pull/525) | 用 Pyxel 创建、调试、验证 Python 复古游戏 | 新 Skill 提案，2026-11-01 仍有更新 | OPEN（自 2026-03 起长期未合并） |
| 8 | [PR #1681 skill-creator](https://github.com/anthropics/skills/pull/1681) | 支持直接运行 `package_skill.py` 并修正路径 | 打包脚本独立执行报 `ModuleNotFoundError` | OPEN |

---

## 2. 社区需求趋势（来自 Issues）

- **安全与信任边界（最热）**：[Issue #492](https://github.com/anthropics/skills/issues/492)（46 评论）——社区 Skill 以 `anthropic/` 命名空间分发造成仿冒，用户可能对其授予过高权限。
- **组织级 Skill 共享/分发**：[Issue #228](https://github.com/anthropics/skills/issues/228)（17 评论，👍8）——希望 Claude.ai 内建共享 Skill 库，替代手动下载 `.skill` 文件再上传。
- **Skill 评估与触发可靠性**：[Issue #556](https://github.com/anthropics/skills/issues/556)（13 评论，👍7）——`run_eval.py` 中 `claude -p` 触发率为 0%；[Issue #1390](https://github.com/anthropics/skills/issues/1390) mcp-builder 评估对真实 MCP 服务器返回 0/N。
- **上下文预算控制**：[Issue #1487](https://github.com/anthropics/skills/issues/1487)——`claude-api` 单次工具调用注入约 156k tokens 耗尽上下文；[Issue #1329](https://github.com/anthropics/skills/issues/1329) 提出 `compact-memory` 紧凑状态表示。
- **Skill 撰写规范**：[Issue #202](https://github.com/anthropics/skills/issues/202)（CLOSED）与 [Issue #2064](https://github.com/anthropics/skills/issues/2064)——描述应说明“何时使用”，skill-creator 应面向执行而非教学文档。
- **文档处理健壮性**：[Issue #2018](https://github.com/anthropics/skills/issues/2018) docx 合并 run 时写出无效 XML；[Issue #1868](https://github.com/anthropics/skills/issues/1868) 渐变背景插值 off-by-one。
- **Agent 治理/质量门控（提案类）**：[Issue #412](https://github.com/anthropics/skills/issues/412)（CLOSED）agent-governance；[Issue #1385](https://github.com/anthropics/skills/issues/1385) 三段式推理质量门控。

---

## 3. 高潜力待合并 Skills

以下为近期仍有更新、修复范围明确（多附对应 issue）的 PR，短期落地可能性较高：

- [PR #1980](https://github.com/anthropics/skills/pull/1980) webapp-testing 去除 `shell=True`（2026-11-01 更新，安全修复）
- [PR #1792](https://github.com/anthropics/skills/pull/1792) docx 超时上报与输出校验（2026-11-01 更新）
- [PR #1977](https://github.com/anthropics/skills/pull/1977) / [PR #1976](https://github.com/anthropics/skills/pull/1976) / [PR #1975](https://github.com/anthropics/skills/pull/1975) 同一作者的三个小范围 bug 修复，均附 Fixes 链接（2026-10 更新）
- [PR #1997](https://github.com/anthropics/skills/pull/1997) skill-creator YAML frontmatter 解析正确化（2026-10-19 更新）
- [PR #1742](https://github.com/anthropics/skills/pull/1742) mcp-builder 适配 mcp>=2（2026-10-08 更新）
- [PR #1245](https://github.com/anthropics/skills/pull/1245) 新增 notion-spec-to-implementation 与 quantitative-resume-auditor（2026-10-15 更新，新 Skill 提案）

---

## 4. Skills 生态洞察

**一句话总结**：社区当前最集中的诉求是提升 Skills 的可靠性与信任边界——既要求 Skill 脚本正确、安全地执行（不“假成功”、不注入、不丢上下文），也要求分发与调用过程可信（命名空间防仿冒、组织内共享、触发评估可复现），新 Skill 提案反而退居其次。

---

# Claude Code 社区动态日报 · 2026-11-02

> 数据来源：github.com/anthropics/claude-code

## 1. 今日速览

过去 24 小时无新版本发布与新 PR 合入；社区关注焦点集中在 **成本与用量计量**（headless 模式额外消耗 5 小时窗口额度的话题已累积 64 条评论、144 个赞）以及 **权限/安全机制的误报与绕过问题**。此外，一批针对 Claude 自身安全过滤器（kind `cyber`）的误报 Issue 在今日被集中关闭。

## 2. 版本发布

过去 24 小时无 Releases。（其余小节按所给数据如实呈现。）

## 3. 社区热点 Issues（10 条）

1. **#97074 [BUG] Headless `claude -p` 每 token 消耗约为交互式 `cli` 的 1.8 倍**（64 评论 / 👍144）
   Linux、`sdk-cli` entrypoint、带复现。讨论热度全天最高，直接影响 CI/批处理场景的成本评估，值得优先跟进。
   https://github.com/anthropics/claude-code/issues/97074

2. **#28300 [FEATURE] 跨机器多智能体协作（Agent-to-Agent 协议）**（58 评论）
   2026-02 提出、至今仍在活跃讨论的长期增强请求；如果落地，将影响分布式 agent 编排的架构设计。
   https://github.com/anthropics/claude-code/issues/28300

3. **#7490 [FEATURE] 允许配置 Bash 工具使用的 shell，或继承初始 shell**（41 评论 / 👍131）
   macOS、带复现。高赞请求，涉及 Bash 工具在不同 shell 环境下的行为一致性。
   https://github.com/anthropics/claude-code/issues/7490

4. **#91495 [BUG] Desktop 内置浏览器忽略站点权限（"Allow all websites"）**（28 评论 / 👍31）
   横跨 Windows/macOS，涉及 permissions、browser-extension、desktop 三个 area，属权限模型可信度问题。
   https://github.com/anthropics/claude-code/issues/91495

5. **#27899 [BUG] `2>&1` 被判定为可"覆盖任意文件"**（22 评论 / 👍2）
   权限判定误报，属于权限提示（permission prompt）逻辑准确性类问题。
   https://github.com/anthropics/claude-code/issues/27899

6. **#28174 [BUG] Bash 权限提示理由中出现错误的 "ANSI-C quoting" 说明**（20 评论 / 👍1）
   Bedrock API + macOS。与 #27899 同作者（fsc-eriker），指向同一类问题：权限理由文本不准确，会误导用户审批。
   https://github.com/anthropics/claude-code/issues/28174

7. **#22711 [BUG] 后台任务的输出文件不可访问**（20 评论 / 👍3）
   macOS TUI、带复现。影响长时间任务的可观测性。
   https://github.com/anthropics/claude-code/issues/22711

8. **#41502 [增强] 为非交互/远程控制会话增加 `--wait-on-usage-limit` 标志**（18 评论 / 👍5）
   通过 `/remote-control` 运行时，一旦达到用量上限，交互式提示会阻塞本地终端且无法关闭；与 #97074 同属用量计量与自动化场景痛点。
   https://github.com/anthropics/claude-code/issues/41502

9. **#73770 [增强] statusline 暴露按模型（Opus/Sonnet/Fable）的每周速率限制**（10 评论 / 👍28）
   cost + statusline。用户希望自定义状态栏能展示与 `/status` 相同的额度信息。
   https://github.com/anthropics/claude-code/issues/73770

10. **#103832 [BUG] Desktop Bypass 模式下 `start_session` 仍弹两次审批**（8 评论 / 👍13）
     macOS、带复现、涉及 cowork/permissions/desktop。绕过模式（Bypass）行为与预期不符，影响自动化会话。
     https://github.com/anthropics/claude-code/issues/103832

**补充值得留意的条目**
- **#99068** 聊天/Cowork 合并后仅保留最近一次压缩后的转录，历史片段被丢弃（👍6）——上下文持久化相关。
- **#88430** VS Code 扩展 2.1.235+ 新面板抢焦点但输入框未聚焦，吞掉所有 VS Code 快捷键——IDE 集成回归。
- **#79523** Issue 被标记为重复但不引用原 Issue——三分类工作流质量问题。
- **#91447** macOS 报 "Malicious Script Blocked" 并终止 Claude——packaging/security 方向。
- **#104726** Linux/KDE Wayland 焦点跟随鼠标时窗口自我抬升（xdg_activation）。
- **#102548** Windows Desktop 麦克风听写失去实时转录，占位符固定为英文。
- **已关闭：#90823 / #90824 / #90825 / #90828** 同作者提交的 `cyber` 类别安全过滤器误报（flagging model 标注为 Opus 4.8，severity 为 session-halted），今日集中关闭，其中两条标记为 duplicate。

## 4. 重要 PR 进展

过去 24 小时仅 1 条 PR 更新，且已关闭，未提供其余 PR 数据。

1. **#106583 [CLOSED] 将 Issue 分类与去重工作流迁移至 Claude Sonnet 5.5**（作者 bpasero-ant，2026-11-01 创建，2026-11-02 更新）
   按 PR 摘要，涉及三个调用 Claude 的工作流：`claude-issue-triage.yml` 由 `claude-opus-4-6` 改为 `claude-sonnet-5-5`、`claude-dedupe-issues.yml` 同样调整（表格中其余工作流内容在摘要处被截断，未给出）。该 PR 已关闭，未合入。
   https://github.com/anthropics/claude-code/pull/106583

## 5. 功能需求趋势

- **用量与成本的透明度**：#73770 希望 statusline 暴露按模型的每周限额；#41502 希望在遇到用量上限时非阻塞等待；#97074 反映 headless 与交互式模式之间的计量差异——共同指向对额度可观测性、可编程控制的需求。
- **多智能体与跨机协作**：#28300 的 Agent-to-Agent 协议是评论量第二高的增强请求，反映分布式 agent 编排的诉求。
- **工具执行环境可控性**：#7490 要求 Bash 工具可配置或继承 shell，属于对工具执行环境确定性的需求。
- **IDE / Desktop 集成稳定性**：#88430（VS Code 焦点与快捷键）、#103832（Desktop 权限审批）、#102548（Desktop 听写本地化）、#104726（Linux Wayland 窗口行为）共同显示多平台客户端交互质量问题。
- **上下文与转录持久化**：#99068 指向压缩后历史转录丢失。

## 6. 开发者关注点

- **成本计量一致性**：headless 模式每 token 消耗更高（#97074），叠加远程会话被用量上限提示阻塞（#41502），自动化/CI 用户对计量公平性与可编程等待机制最为敏感。
- **权限判定的准确性与可解释性**：`2>&1` 被误判为可覆盖任意文件（#27899）、权限理由文本错误（#28174）、Bypass 模式仍弹审批（#103832）、浏览器站点权限被忽略（#91495）——权限提示的可信度是高频反馈点。
- **多客户端交互回归**：VS Code 快捷键被吞（#88430）、KDE Wayland 窗口抬升（#104726）、macOS 安全拦截（#91447）、Windows 本地化占位符（#102548）。
- **可观测性缺口**：后台任务输出文件不可访问（#22711）、状态栏额度信息不全（#73770）。
- **安全过滤器误报**：多条 `cyber` 类别误报在今日关闭，作者反馈其为"阻止了授权工作（session-halted）"，此类误报对安全审计、日志类工作流影响较大。
- **Issue 管理流程**：重复标记不引用原 Issue（#79523），加之同日 PR #106583 调整 triage/dedupe 工作流所用模型，说明该流程本身正处于演进中。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报（2026-11-02）

## 今日速览
今日社区焦点仍在**用量/配额消耗异常**上：跨报告的追踪 Issue #41220 已积累 81 条评论，另一条 Plus 套餐独立配额诉求获 29 个 👍。同时，过去 24 小时内出现约 40 条 PR 更新（多为 copyberry 机器人提交后即关闭），覆盖运行时所有权、会话存储与传输恢复等底层能力。Windows 桌面端的稳定性问题继续高频出现。

## 版本发布
- **rust-v0.167.0-alpha.3**：Release 说明仅含版本号，无进一步更新内容披露。
  链接: openai/codex Releases

## 社区热点 Issues

1. **#41220 [Meta] 用量/配额异常消耗与计费不一致 — 跨报告追踪**（81 评论，👍 21）
   社区把多条"配额比基线消耗更快"的报告归并为统一追踪项，是当前影响面最大的问题，也是判断官方是否回应的风向标。
   链接: openai/codex Issue #41220

2. **#58530 请保留 ChatGPT 与 Codex 独立用量额度（Plus）**（26 评论，👍 29）
   针对 2026 年 12 月共享额度的反馈，点赞数居前，反映付费用户对额度透明度的强烈诉求。
   链接: openai/codex Issue #58530

3. **#52919 [Windows] Codex Desktop + VS Code 间歇性流断开与重连失败**（17 评论）
   自 10 月 10 日起持续存在，涉及桌面端与 IDE 扩展的连接稳定性，影响日常编码会话。
   链接: openai/codex Issue #52919

4. **#58201 [Windows] 设置显示 Ultra，但 Astra 聊天滑块最高只到 Extra High**（17 评论）
   更新后配置开关不可用，属于 UI 与配置层不一致，影响高级套餐功能的实际可用性。
   链接: openai/codex Issue #58201

5. **#56941 [Windows] Computer Use 后系统级 UI 卡顿，结束 codex-computer-use.exe 即恢复**（16 评论）
   问题定位明确、影响整个桌面环境，是 Computer Use 在 Windows 上最值得优先修复的性能缺陷。
   链接: openai/codex Issue #56941

6. **#29702 增加关闭"AI 提问定时自动解决"的设置**（15 评论，👍 44）
   本批中点赞最高，说明用户希望对自动化行为保留人工控制权。
   链接: openai/codex Issue #29702

7. **#40182 [Windows] 更新器在 EPERM 失败后每小时重复下载 501.8 MB**（14 评论）
   涉及不可重试错误缺少退避策略，既是带宽浪费也是更新流程健壮性问题。
   链接: openai/codex Issue #40182

8. **#50779 [Windows] WSL 模式因启动器传入 `wsl.exe --cd .` 在 bootstrap 前失败**（14 评论）
   WSL 是 Windows 开发者的核心工作流，该问题直接阻断使用。
   链接: openai/codex Issue #50779

9. **#38979 [CLOSED] MCP tools/call 在 content annotations 含非整数 priority（如 0.6）时报 "Unexpected response type"**（8 评论）
   已关闭，属于 MCP 协议兼容性修复，对集成第三方 MCP 服务的开发者有参考价值。
   链接: openai/codex Issue #38979

10. **#48010 [VS Code] 缺少 authenticatedUserId 导致 SSE 用量数据被丢弃（Rate limit: Unavailable）**（7 评论，👍 4）
    用量显示不可用与配额争议相互叠加，加重了用户对计费的疑虑。
    链接: openai/codex Issue #48010

其他值得留意的：#56866（5 小时额度 10 分钟耗尽）、#58432 / #58660（Windows 桌面 XLSX 附件发送卡死）、#58398（VS Code 扩展在 Linux 上因 3,203 个未打包 modulepreload chunk 启动超时）、#58768（macOS 后端退出重连时 Hosted AppServerManager 身份未就绪）。

## 重要 PR 进展

> 说明：以下 PR 均显示为 CLOSED，且由 copyberry[bot] 提交，可能为内部变更的投影记录，合入状态请以仓库为准。

1. **#58963 为 agent 运行时增加 host 持有的 turn 准入控制**
   新增 `AgentRuntimeOwnership::Host` 与 `AgentTurnAdmission`，使宿主可在运行时任务（含根 turn）执行前获取执行容量。
   链接: openai/codex PR #58963

2. **#58953 支持调用方持有的 sideband 通道以接入实时附件**
   新增 `RealtimeSidebandTransport` 与 `Op::RealtimeConversationAttachStream`，允许通过有界 JSON 通道挂接既有实时通话。
   链接: openai/codex PR #58953

3. **#58962 在 review 恢复过程中保留 Guardian 预算策略**
   修复因可选 transcript 条目去重而丢失保留指令或必需工具调用的问题。
   链接: openai/codex PR #58962

4. **#58960 解析祖先时优先使用索引化的 rollout 路径**
   无预取路径时先查询 SQLite，并校验索引路径指向受管存储。
   链接: openai/codex PR #58960

5. **#58959 从备用 rollout 副本恢复继承历史**
   当首选祖先 rollout 被截断或压缩帧不完整时，改用可用归档副本，避免 fork 历史不可读。
   链接: openai/codex PR #58959

6. **#58950 WebSocket 传输在短暂回退 HTTP 后恢复**
   修复一次 WebSocket 失败后整个会话停留在 HTTP 的问题，新增连通性探测。
   链接: openai/codex PR #58950

7. **#58945 修复 provider 配置后的模型选择**
   新线程此前仍使用启动 provider 对应的 models manager，导致默认模型与模型选择器不一致。
   链接: openai/codex PR #58945

8. **#58954 新增带宿主清理能力的 thread-store builder**
   以 `ThreadStoreBuilder` 替换 `thread_store_from_config`，并通过 `codex_core` / `codex_core_api` 导出。
   链接: openai/codex PR #58954

9. **#58964 默认启用并稳定客户端工具输出保留**
   变更默认行为，可能影响工具调用输出的保留策略。
   链接: openai/codex PR #58964

10. **#58940 移除 daemon_auto_start 特性开关**
    符合条件的交互式启动不再检查该开关，始终启动或复用共享 daemon。
    链接: openai/codex PR #58940

## 功能需求趋势
- **配额与计费治理**：独立额度、用量核算一致性、5 小时限额异常，是当前最集中的社区诉求方向（#41220、#58530、#56866、#48010）。
- **Windows 桌面端稳定性**：更新器、WSL 启动、插件同步、附件发送、Computer Use 性能构成一大类问题簇（#40182、#50779、#55794、#58432、#58660、#56941、#45121）。
- **自动化行为的人为可控性**：#29702 以 44 个 👍 高居首位，反映对"自动解决/自动执行"默认行为的抵触。
- **IDE 与 MCP 集成**：VS Code 扩展启动与认证问题、MCP 协议字段兼容性（#58398、#48010、#38979）。
- **会话与运行时基础设施**：从 PR 侧看，官方正在推进 host 所有权、索引化存储、传输回退恢复等底层重构。

## 开发者关注点
1. **配额消耗是否可信**——大量报告集中在"消耗快于预期"，且用量数据本身可能因认证字段缺失而不可用，二者叠加削弱信任。
2. **升级与重试缺乏退避**——每小时重复下载 501.8 MB、不可重试错误反复触发，说明错误分类与重试策略需要收紧。
3. **平台差异造成的行为不一致**——Windows 桌面与 Web、WSL 模式与原生模式之间功能表现不同。
4. **配置与实际能力不同步**——UI 显示与可用选项（如 Ultra / Extra High）不一致，易被误判为套餐降级。
5. **对封闭或隐式行为的抵触**——社区希望禁用定时自动解析、保留 Chat 与 Codex 额度边界，体现对可控性优先于自动化的偏好。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报（2026-11-02）

## 今日速览
今日发布 v0.67.0 夜间版本；过去 24 小时更新的 50 条 Issue 几乎全部集中在 `area/agent` 领域，核心矛盾是子代理与工具的**可靠性**：子代理在达到 MAX_TURNS 后误报成功、generalist agent 无限挂起、browser 子代理在多环境失败。PR 侧则以细节修复为主，其中一条 p1 级 Windows Git 权限绕过安全修复值得关注。

## 版本发布
- **v0.67.0-nightly.20261102.g6814e00d6**：夜间自动构建版本。
  https://github.com/google-gemini/gemini-cli/compare/v0.67.0-nightly.20261101.g6814e00d6...v0.67.0-nightly.20261102.g6814e00d6

## 社区热点 Issues（10 条）

1. **#22323 [p1] 子代理 MAX_TURNS 后误报 GOAL 成功**（13 评论，👍2）
   `codebase_investigator` 未做任何分析就触发最大轮次限制，却返回 `status: "success"`、`Termination Reason: "GOAL"`，掩盖了中断事实。这是子代理可观测性中最危险的一类问题——错误被静默吞掉。
   https://github.com/google-gemini/gemini-cli/issues/22323

2. **#21409 [p1] Generalist agent 永久挂起**（8 评论，👍8）
   每当 CLI 交给 generalist agent 处理（哪怕只是建目录），就会无限挂起，作者最长等待一小时。高热度说明影响面广。
   https://github.com/google-gemini/gemini-cli/issues/21409

3. **#19873 [p2] 零依赖 OS 沙箱 + 执行后意图路由**（9 评论）
   提出利用 Gemini 3 模型原生的 bash 亲和力（`grep`/`sed`/`awk` 链式调用）重构执行模型，属较大型架构提案。
   https://github.com/google-gemini/gemini-cli/issues/19873

4. **#22745 [p2] 评估 AST 感知的读取/搜索/代码库映射**（7 评论）
   EPIC 级调研，目标是用 AST 感知减少工具调用轮次、提升读取精度。与 #22746（调研 tilth/glyph 等工具）配套。
   https://github.com/google-gemini/gemini-cli/issues/22745

5. **#21968 [p2] Gemini 不主动使用 skills 与子代理**（7 评论）
   作者反馈：除非明确指令，模型几乎不会自主调用自定义 skills/子代理，即便任务高度相关。这直接影响子代理体系的产品价值。
   https://github.com/google-gemini/gemini-cli/issues/21968

6. **#21983 [p1] browser 子代理在 Wayland 下失败**（4 评论）
   叠加 #22267（Browser Agent 忽略 settings.json 的 maxTurns 覆盖）与 #22232（浏览器 profile 锁定的 fail-fast 策略），构成 browser agent 的三连问题。
   https://github.com/google-gemini/gemini-cli/issues/21983

7. **#24246 [p2] 工具数超过阈值触发 400 错误**
   标题写 >128，正文写 >400，二者口径不一；但核心诉求明确：按启用范围智能裁剪工具集。
   https://github.com/google-gemini/gemini-cli/issues/24246

8. **#22672 [p2] 代理应阻止破坏性操作**（👍1）
   模型在复杂 git 场景下会使用 `git reset`、`--force` 等命令，而存在更安全的替代方案，涉及数据库等资源时风险更高。
   https://github.com/google-gemini/gemini-cli/issues/22672

9. **#23571 [p2] 模型在随机目录生成临时脚本**
   限制模型仅能通过 shell 执行后，其在各目录散落编辑脚本，显著增加清理与提交成本。与 #22672 同属“行为约束”类问题。
   https://github.com/google-gemini/gemini-cli/issues/23571

10. **#22598 [p3] 希望通过 `/chat share` 查看子代理轨迹**（👍1）
    子代理轨迹已由 chat recording 服务保存但难以访问；这是评估子代理行为的前置能力，与 #22323 的误报问题互补。
    https://github.com/google-gemini/gemini-cli/issues/22598

## 重要 PR 进展（10 条）

1. **#30095 [p1, area/security] 修复 Windows 下 git diff 权限绕过**
   危险的 Git 参数可能被误判为安全只读操作；提取共享的 Git 安全校验到可复用 helper 并统一应用。安全问题被单独修复，独立于同类的修复 PR #29921，因此优先级最高。
   https://github.com/google-gemini/gemini-cli/pull/30095

2. **#30094 [p2] UI 中展示执行中的子代理工具调用**
   修复非根调度器过滤逻辑：无审批需求（读取、搜索）的子代理调用被直接置为 Executing，界面不显示。对应 Issue #22589。
   https://github.com/google-gemini/gemini-cli/pull/30094

3. **#30100 [p2, area/extensions] 扩展下载的流失败处理**
   为 `downloadFile` 增加流失败处理、残留文件清理、SSRF/重定向加固与 socket 超时。
   https://github.com/google-gemini/gemini-cli/pull/30100

4. **#30090 CI 加固：不向 fork 代码暴露 GEMINI_API_KEY**
   `chained_e2e.yml` 在带 secrets 的 base-repo 上下文中检出 fork PR 代码并运行构建/集成测试，属供应链安全风险。
   https://github.com/google-gemini/gemini-cli/pull/30090

5. **#30051 headless 中断时终止 shell 并持久化工具调用**
   修复在 `--yolo` 模式下通过 SIGINT/SIGTERM/SIGHUP 或 Ctrl+C 中断 headless 运行（`gemini -p ... --yolo`）时退出码为 0（而非标准信号码）等问题。
   https://github.com/google-gemini/gemini-cli/pull/30051

6. **#30058 [p2] 防止中断的 Whisper 模型下载被判定为已安装**（已关闭）
   截断/失败的下载会在最终路径留下部分文件，使 `isModelInstalled` 误判。
   https://github.com/google-gemini/gemini-cli/pull/30058

7. **#30097 [p2] 修复 WSL2 下的图片粘贴**
   WSLg 不设置 `XDG_SESSION_TYPE`，仅设 `WAYLAND_DISPLAY=wayland-0`，导致剪贴板工具探测失败；另加 BMP 回退。对应 Issue #22274。
   https://github.com/google-gemini/gemini-cli/pull/30097

8. **#29978 [p2] `read_background_output` 保留超长行与边界行**
   该函数读取日志最后 64KB，窗口不从字节 0 开始时总会丢弃首行，导致略超 64KB 的单行日志被完整读空。
   https://github.com/google-gemini/gemini-cli/pull/29978

9. **#30096 [area/core] 修复 `${VAR:-default}` 在变量为空时的解析**
   变量已设置但为空时应回退默认值（与 Bash 及文档一致），当前解析为空字符串。同类修复另有 #30003。
   https://github.com/google-gemini/gemini-cli/pull/30096

10. **#30104 [p2] `/skills link` 后刷新斜杠命令**
    交互式会话中原有的 `/技能名 任务` 与 `/` 技能列表已可用（#21758），但执行 link 后索引未刷新。
    https://github.com/google-gemini/gemini-cli/pull/30104

## 功能需求趋势

- **子代理体系的可信度与可观测性**：误报成功（#22323）、轨迹不可见（#22598）、不主动调用子代理（#21968）、本地子代理 Sprint 规划（#20195）、仓库内子代理样例（#18283）、codebase investigator 改进（#18282）——围绕同一方向的 Issue 最密集。
- **执行模型重构与上下文效率**：基于模型 bash 亲和力的沙箱化执行（#19873）、AST 感知的文件读取/搜索/映射（#22745、#22746）。
- **Browser Agent 鲁棒性**：Wayland 兼容（#21983）、配置覆盖失效（#22267）、会话接管与锁恢复（#22232）。
- **安全与行为约束**：抑制破坏性 git/资源操作（#22672）、临时脚本散落（#23571）、工具数量上限（#24246）。

## 开发者关注点

- **静默失败比崩溃更伤**：多个高优先级 Issue 的共同特征是程序不报错但结果错误或永久挂起（#22323、#21409、#22465 卡在交互式提示）。
- **配置不生效**：Browser Agent 忽略 `settings.json` 覆盖、`${VAR:-default}` 空值语义错误，均属“写了不生效”类体验损耗。
- **跨环境兼容仍是痛点**：WSL2 剪贴板、Wayland、Windows Git/SSH（TortoiseGitPlink，PR #29921）持续出现针对性修复。
- **平台能力需自证价值**：skills/子代理已具备但不能被模型自发利用，社区希望先解决“用得起来”，再谈“用得更好”。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报（2026-11-02）

## 1. 今日速览

今日发布 `v1.0.106-3`，新增可选会话管理工具与 `@mentions`，并修复 MCP OAuth 凭据复用问题。社区讨论最集中的仍是会话可控性（取消排队消息）与模型切换灵活性（BYOK/本地供应商），两者各获 30+ 点赞。过去 24 小时有 43 条 Issue 更新、仅 1 条 PR 更新，且该 PR 与项目无关。

## 2. 版本发布

**v1.0.106-3**
- **新增**：可选的会话管理工具，以及为已启用的本地会话增加 `@mentions`。
- **改进**：托管账户策略刷新警告现在会附带 Policy Helper 的发现，并在策略解决后自动清除。
- **修复**：匿名连接和初始化时，现在会复用有效的已保存 MCP OAuth 凭据。

## 3. 社区热点 Issues（10 条）

1. **[#1857](https://github.com/github/copilot-cli/issues/1857)**（OPEN，14 评论，👍33）：无法取消通过 `Ctrl+Q`/`Ctrl+Enter` 入队的消息或斜杠命令，代理忙碌或 `/compact` 期间尤其突出。点赞最高，反映交互可控性是核心痛点。
2. **[#3709](https://github.com/github/copilot-cli/issues/3709)**（OPEN，14 评论，👍34）：BYOK 模式下会话被 `COPILOT_MODEL` 锁定单一模型，`/model` 仅列出 GitHub 托管模型，无法在同一会话切换本地供应商模型。点赞最高之一，直指多模型工作流需求。
3. **[#5112](https://github.com/github/copilot-cli/issues/5112)**（OPEN，5 评论，👍11）：请求通过 OSC 7501 向支持的终端上报代理状态。属于终端集成细节，但获一定关注。
4. **[#3015](https://github.com/github/copilot-cli/issues/3015)**（OPEN，2 评论，👍2）：MCP Streamable HTTP + OAuth 2.1/DCR 流程中，`Authorization` 头在 `initialize` 后丢失，导致后续 JSON-RPC 调用鉴权失败。与今日发布中的 MCP OAuth 修复方向相关。
5. **[#5145](https://github.com/github/copilot-cli/issues/5145)**（OPEN，2 评论，👍2）：自定义 OpenAI 兼容供应商（`wireApi: "responses"`）在后台 shell 退出后触发 400，`reasoning_text` 未回传。影响自定义模型稳定性。
6. **[#4646](https://github.com/github/copilot-cli/issues/4646)**（OPEN，2 评论，👍1）：自定义模型下 `/compact` 与自动压缩报 `400 Tool choice must be auto`。压缩功能与自定义模型兼容性问题。
7. **[#5304](https://github.com/github/copilot-cli/issues/5304)**（OPEN，2 评论）：WSL2 中 `/keep-alive` 无法阻止 Windows 主机休眠，因 CLI 按 Linux 处理而调用 `systemd-inhibit`。跨平台场景缺口。
8. **[#5318](https://github.com/github/copilot-cli/issues/5318)**（OPEN，1 评论）：内置 ripgrep 工具的压缩逻辑误将数字文件名后缀或目录名当作字段分隔符，导致文件名、行号错误并合并不同文件。影响工具输出可信度。
9. **[#4891](https://github.com/github/copilot-cli/issues/4891)**（OPEN，1 评论）：`copilot.exe` 在 Windows 硬崩溃（0xc0000005），丢失进行中的回合并破坏终端状态。严重稳定性问题。
10. **[#5335](https://github.com/github/copilot-cli/issues/5335)**（OPEN，1 评论）：本地调试间歇性测试崩溃时被重复以 HTTP 422“网络安全风险”拦截，影响合法调试工作。今日新建，反映安全策略误判。

**其他值得注意**：#5228（`--resume` 无 ID 时落入空会话）与 #3497（终端 resize 后输出被裁剪）已 CLOSED；#5315 提出 GitHub Mobile 远程语音模式；#5250 反映 macOS 上 Entra 保护 MCP 服务器并发登录失败。

## 4. 重要 PR 进展

过去 24 小时内更新的 PR 仅 1 条，且与 Copilot CLI 功能无关，无可评估的实质进展：

- **[#5321](https://github.com/github/copilot-cli/pull/5321)**（OPEN）：新增一个 Windows 桌面应用，让 Android/iPhone 通过本地 Wi-Fi 为 PC 提供摄像头画面，采用 PIN 授权的 WebSocket 信令协商直接 WebRTC 视频连接，无云服务。属无关投稿，建议维护者按仓库范围处理。

## 5. 功能需求趋势

基于全部 43 条 Issue 更新，社区关注方向集中于：

- **会话与交互可控性**：取消/移除入队消息（#1857）、修复 `--resume` 会话选择（#5228）、云中继会话可用性（#5319）、远程语音交互（#5315）。
- **多模型与 BYOK**：单会话内切换多个模型及本地供应商（#3709），自定义模型下压缩与推理字段兼容（#4646、#5145）。
- **MCP 与鉴权可靠性**：OAuth 头丢失（#3015）、User-Agent 自定义头被忽略（#4681）、Entra 并发登录（#5250）。
- **终端与渲染**：OSC 7501 状态上报（#5112）、resize 后输出裁剪（#3497）、快捷键语义澄清（#3245）。
- **跨平台与稳定性**：Windows 崩溃（#4891）、WSL2 电源管理（#5304）。
- **工具输出正确性**：grep 压缩破坏文件名与行号（#5318）、技能重复加载（#4430）。

## 6. 开发者关注点

- **可控性不足**：消息一旦入队便无法撤回，代理忙碌时体验受限，是点赞最高的诉求。
- **模型自由度受限**：BYOK 锁定单模型、`/model` 不列本地模型，阻碍多模型与本地部署工作流。
- **自定义模型兼容性**：压缩、推理字段回传在自定义供应商下频繁报 400。
- **MCP 鉴权链路脆弱**：OAuth 头、User-Agent、并发登录等多处细节缺陷，影响企业级 MCP 接入。
- **平台稳定性与安全误判**：Windows 硬崩溃、WSL2 电源管理缺失，以及安全策略拦截合法调试（#5335），均在削弱开发信任。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 · 2026-11-02

## 1. 今日速览

今日无新版本发布，社区焦点集中在 **计费与额度体系**（免费额度、Go 订阅、区域支付）以及 **v2.2.x 系列的缓存与上下文缺陷**。输入 token 缓存异常在 #61037 与 #61276 两条独立报告中同时出现，值得优先跟进；免费层问题主贴评论已达 211 条，说明该问题仍未收敛。

## 2. 版本发布

过去 24 小时无新 Release。

## 3. 社区热点 Issues

1. **#59387 [OPEN] 免费层问题总贴**
   官方设立的免费层问题汇总入口，覆盖 “Free usage exceeded / 每日免费消息用尽” 等提示。211 条评论、15 个赞，是当前社区声量最高的线程，可作为判断免费层稳定性的晴雨表。
   https://github.com/anomalyco/opencode/issues/59387

2. **#61037 [CLOSED] v2.2.5 后输入 token 缓存失效**
   报告指出自 2.2.5 起，多步工具调用任务中整段对话历史每轮都被当作全新输入重新计算。直接影响成本与延迟，且已被关闭，建议确认修复版本。
   https://github.com/anomalyco/opencode/issues/61037

3. **#61276 [OPEN] 经 Go 调用时几乎每轮都缓存失效**
   今日新建，报告缓存命中率极差、每 1–2 轮即失效，多 subagent 场景下更明显。与 #61037 相互印证，指向缓存层仍存在问题。
   https://github.com/anomalyco/opencode/issues/61276

4. **#51424 [CLOSED] Go 订阅有效、用量 0%，却报“账户资金不足”**
   订阅状态与计费状态不一致的典型样本，含完整的仪表盘数据（滚动/周/月用量均为 0%）。对排查计费链路一致性有参考价值。
   https://github.com/anomalyco/opencode/issues/51424

5. **#52958 [CLOSED] 意大利地区订阅全部支付方式被拒**
   实体卡、Apple Pay、Stripe Link、虚拟 Mastercard 均失败，属于区域性支付可用性问题，影响 EU 用户转化。
   https://github.com/anomalyco/opencode/issues/52958

6. **#57456 [OPEN] 服务器进程权限被客户端继承**
   以管理员身份启动 server 后，普通权限客户端可借服务器进程执行高权限操作。这是安全类问题，虽评论不多但风险等级高。
   https://github.com/anomalyco/opencode/issues/57456

7. **#55225 [OPEN] npm 一次性安装四个 Linux x64 二进制（约 800 MB）**
   已复现：`@opencode/cli-*` 平台包缺少 `libc` 字段，导致 glibc/musl、baseline 变体全部被拉取，每个约 202 MB。安装体积问题对 CI 与容器镜像影响明显。
   https://github.com/anomalyco/opencode/issues/55225

8. **#60663 [CLOSED] v2 自动压缩接受“空任务”摘要，静默丢失当前目标**
   Ollama/Qwen 场景下，压缩摘要替换掉了原本有效的任务描述，导致活动目标丢失。属于上下文管理正确性问题。
   https://github.com/anomalyco/opencode/issues/60663

9. **#61053 [OPEN] TUI 终端面板拖选时视口冻结**
   按住鼠标拖选时滚轮既不滚动也不扩展选区，复制内容被限制在一屏之内。影响日常复制粘贴体验。
   https://github.com/anomalyco/opencode/issues/61053

10. **#43758 [OPEN] 会话级终端 + 可选的终端上下文喂给模型**
    指出 GUI 中每个会话旁的终端并未与会话绑定。属于产品形态层面的功能诉求。
    https://github.com/anomalyco/opencode/issues/43758

（补充参考：#60667 2.2.4 启动报 “Background service failed to start”；#38059 Groq 在空目录下仍超 TPM 限制；#61281 移动端音频 chip 用自身标签文本拼 URL 导致无法播放。）

## 4. 重要 PR 进展

1. **#60039 [OPEN] MCP：支持按服务器配置 TLS 信任**
   为远程 MCP server 增加可选 `tls` 块，便于接入自签名证书的服务端。属新功能，关联 #40111。
   https://github.com/anomalyco/opencode/pull/60039

2. **#54793 [OPEN] 解除 Node 上 undici 的 300 秒超时**
   修复 Node 内置 fetch 对长请求的硬超时限制（Closes #26602），对长耗时推理与流式请求有实际意义。
   https://github.com/anomalyco/opencode/pull/54793

3. **#60701 [OPEN] process-daemon：管道进程输出直接写文件**
   允许 pipe 进程将输出写入文件，便于大输出场景避免经由内存中转。
   https://github.com/anomalyco/opencode/pull/60701

4. **#60697 [CLOSED] process-daemon：Unix 上无需 PTY 运行命令**
   支持以 “pipe” 方式运行任意命令，不分配终端，扩展了 daemon 的执行模型。
   https://github.com/anomalyco/opencode/pull/60697

5. **#61277 [CLOSED] CI：在 macOS 上运行 pipe 测试**
   在 `check-process-daemon.yml` 的 macOS 步骤中加入 `--test pipe`，补齐跨平台验证。
   https://github.com/anomalyco/opencode/pull/61277

6. **#61285 [OPEN] 文档：Console 新增 Pulse Alpha Free**
   补充免费层模型条目，含 endpoint、价格、国家限制说明与隐私例外，并标注为 stealth 模型。
   https://github.com/anomalyco/opencode/pull/61285

7. **#61279 [CLOSED] Console：按原因路由非销售类企业咨询并映射合规模块**
   配合 Console Enterprise 页新联系表单，handler 仍为 `/api/enterprise`。
   https://github.com/anomalyco/opencode/pull/61279

8. **#54580 [CLOSED] core：记录谁长时间持有 sqlite 写锁**
   用于定位数据库写锁争用。作者注明 v1 已进入维护分支，后续将提交 v2 版本。
   https://github.com/anomalyco/opencode/pull/54580

9. **#54503 [CLOSED] 超时的工具调用强制结束**
   Closes #53433，为工具调用增加时间上限，避免任务卡死。同为 v1 维护分支提交。
   https://github.com/anomalyco/opencode/pull/54503

10. **#56280 [CLOSED] TUI：显示并加载长会话中被隐藏的消息**
    Closes #56279，解决长会话下消息不可见的问题。同一作者的 TUI 系列 PR（#56268 粘贴对话框、#56246 ctrl+u 删除范围、#56007 按语言着色文件内容）今日集中关闭，均标注将迁移至 v2。
    https://github.com/anomalyco/opencode/pull/56280

## 5. 功能需求趋势

- **上下文与会话管理**：长会话消息可见性（#56280）、会话历史标签页默认收起（#49652）、会话级终端（#43758）、自动压缩正确性（#60663），显示社区对“长上下文可控性”诉求集中。
- **可定制性**：修改/切换 system prompt（#1242）——希望把 OpenCode 用于编码之外的场景。
- **计费与区域可用性**：免费层额度、Go 订阅计费一致性、EU 支付、模型区域托管（#61077 要求 DeepSeek V4.1 Flash / V4 Pro 由 US/EU 托管而非 Global 区域 opt-in）。
- **TUI 交互细节**：选区、粘贴、快捷键、文件着色等“编辑器级”体验持续被提出。
- **分发与安装体积**：平台包 `libc` 字段缺失导致 800 MB 下载（#55225）。
- **生态扩展**：插件与生态条目持续新增（#58104 Solaris Dev Shop V2 插件、#61041 opencode-loop-recover），MCP 侧开始涉及 TLS 信任配置。

## 6. 开发者关注点

- **成本与缓存**：v2.2.5 起的输入 token 缓存退化被两次独立报告，直接推高多轮工具调用的费用，是当前最影响日常使用的技术问题。
- **计费信任度**：订阅有效却报余额不足、支付被拒、用量限制不透明（#17614 反映无法查询 pro plan 的限制详情），共同削弱付费意愿。
- **v1 与 v2 的分叉成本**：多位贡献者明确表示 v1 已属维护分支、新功能只进 v2，导致 PR 需要写两遍；贡献者迁移节奏值得关注。
- **安全边界**：server 权限继承问题（#57456）提示本地服务的权限模型需要明确设计。
- **安装与 CI 开销**：Linux 二进制重复下载对容器与 CI 环境不友好，属于易修但影响面广的问题。
- **平台稳定性**：启动失败（#60667）、`ECONNRESET` 断连（#60662）、Groq TPM 异常（#38059）等基础可用性反馈仍在持续出现。

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报 · 2026-11-02

## 今日速览

v1.5.0 引入扩展包更新变更日志，但这一次要版本移除 `@earendil-works/pi-ai` 的 `Type` 导出，已破坏下游 `@flue/runtime@2.3.0`，由此引发关于向后兼容规范（PR #11704）的讨论。性能与资源占用问题仍是焦点：macOS 长会话高 CPU（#7730）、大 transcript 每帧重渲染（#9549）、grep 上下文行导致 OOM（#9276）均有进展。多个 OpenRouter、Anthropic 适配器报错被关闭，修复集中在工具 schema 与 thinking block 的往返处理。

## 版本发布

**v1.5.0**
- **扩展更新变更日志**：更新后下次全新启动可查看已安装扩展包的变更内容；包作者可自定义 changelog 路径，`collapseChangelog` 用于精简提示。
- 链接：https://github.com/earendil-works/pi/releases
- 注意：该版本移除了 `Type` 导出，造成下游兼容性断裂（见 PR #11704）。

## 社区热点 Issues

1. **#7730 [OPEN][bug] macOS 长会话 CPU 占用过高**（23 评论，👍11）
   内存 600–800MB，CPU 在 50–110% 间波动，疑似与上下文大小相关。这是社区讨论最热的问题，直接影响长时间使用的可行性。https://github.com/earendil-works/pi/issues/7730

2. **#7885 [CLOSED] npm search 未索引新发布的 pi-packages**（19 评论）
   新包（如 `pi-affix-prompt`）不出现在 npm search，进而无法进入 pi.dev/packages 画廊；画廊被指镜像 npm search。已关闭，但影响扩展生态的发现性。https://github.com/earendil-works/pi/issues/7885

3. **#9549 [OPEN][inprogress][fullscreen] 大 transcript 每帧重渲染**（17 评论）
   Windows Terminal 下每次 resize 重新输出整个 transcript，单核跑满；报告由本地 pi agent 共同起草并标注披露。https://github.com/earendil-works/pi/issues/9549

4. **#8834 [CLOSED][no-action] 可选包命名空间 `pi.namespace`**（15 评论）
   提议让 skills 与 prompt templates 通过统一解析面处理名称键，属于扩展命名冲突治理需求，最终未采纳。https://github.com/earendil-works/pi/issues/8834

5. **#10497 [OPEN][bug, inprogress] OpenRouter 400 错误**（15 评论）
   自定义扩展注入文件内容后偶发 400（端点最大上下文超出）。反映扩展注入与上下文预算之间缺乏协调。https://github.com/earendil-works/pi/issues/10497

6. **#7855 [CLOSED][bug] "Response was truncated before completion."**（8 评论，👍7）
   在多种 OpenAI 兼容 API 上复现，需手动催促续写；高赞说明影响面广。https://github.com/earendil-works/pi/issues/7855

7. **#9134 / #9557 Anthropic 适配器丢弃根级 JSON Schema 关键字（anyOf 等）**（各 7 评论）
   模型侧 `input_schema` 被静默裁剪为 `{type, properties, required}`，导致校验与模型描述不一致；#9557 已关闭。https://github.com/earendil-works/pi/issues/9134 ｜ https://github.com/earendil-works/pi/issues/9557

8. **#10954 [CLOSED][prio:p0] 工具列表变更后重放 thinking block 报 400**（7 评论）
   `block_binding` 仅对 `supportsMidConvoEffort` 发送，涉及 Anthropic messages 协议细节，属高优先级跨端兼容问题。https://github.com/earendil-works/pi/issues/10954

9. **#11021 [OPEN] ChatGPT 登录下 GPT-6.1 Sol 上下文仍报 272K**（6 评论，👍7）
   账户目录实际为 500K，Pi 1.3.0 上报值偏小，直接限制可用上下文。https://github.com/earendil-works/pi/issues/11021

10. **#11527 [OPEN] Bedrock 每次请求新建 BedrockRuntimeClient**（5 评论）
    每次都重建凭证 provider 与 HTTP/2 会话，SSO profile 下开销明显。https://github.com/earendil-works/pi/issues/11527

其他值得跟踪：#9276（grep 上下文导致 OOM）、#11177（Alacritty 中文 IME 多字符提交被当作 bracketed paste，slash/@ 补全不弹出）、#11602（分支摘要重放被自动重试隐藏的助手内容）。

## 重要 PR 进展

1. **#11707 [CLOSED] `pi update` 列出更新包及版本变化**
   `pi update` / `--all` / `--extensions` 目前只打印进度与 "Updated packages"，无法看到哪些扩展、更新到什么版本。https://github.com/earendil-works/pi/pull/11707

2. **#11705 [OPEN] grep 上下文行改由 ripgrep 提供**
   现实现会整文件读取再切行，内存随匹配文件体积增长；修复后内存随输出量而非文件大小增长。https://github.com/earendil-works/pi/pull/11705

3. **#11704 [OPEN] AGENTS.md 要求向后兼容，为重大清理打 shim 标记**
   直指 1.5.0 移除 `Type` 导出破坏 `@flue/runtime@2.3.0` 的事件，要求公共 API 保持兼容。https://github.com/earendil-works/pi/pull/11704

4. **#11679 [CLOSED] GitHub Copilot 新增 Microsoft-Decision-1 分类器**
   增加 `microsoft-decision-1`（文本输入、32768 上下文、$0.042/M 输入）。https://github.com/earendil-works/pi/pull/11679

5. **#11629 [CLOSED] 新增 `PI_SELF_UPDATE_COMMAND` / `selfUpdateCommand`**
   解决由 mise、PNPM_HOME wrapper（nub）、Nix 等包管理器托管时 `pi update` 无法自更新的问题。https://github.com/earendil-works/pi/pull/11629

6. **#9274 [OPEN][inprogress] 修复渲染 diff 丢失缩进**
   edit 工具行内渲染在插入文本时会丢掉被删除行的缩进。https://github.com/earendil-works/pi/pull/9274

7. **#11690 [CLOSED] 直接返回 catalog，避免版本重定向**
   配合 pi.dev 停止将已发布客户端重定向到 `?pi-version=` URL；已发布 CLI 不受影响。https://github.com/earendil-works/pi/pull/11690

8. **#11686 [OPEN] 在 pkg.earendil.com 发布版本 tag 产物**
   发布脚本一次推送 release 提交与 "[Unreleased]" 提交后再推 tag，CI 只构建推送头，导致 tag 对应的 release 提交从未被构建。https://github.com/earendil-works/pi/pull/11686

9. **#11685 [OPEN] Nix 包从 checkout 打包 pi-schema**
   pi-schema 成为 coding agent 运行时依赖后，`nix build .#pi` 因 `import-npm-lock` 缺少 `integrity` 属性而失败。https://github.com/earendil-works/pi/pull/11685

10. **#11672 [CLOSED] durable 模式在等待人工输入时暂停 code mode 截止时间**
    脚本等待外部人工决策时会耗尽墙钟期限；新机制由宿主控制输入等待、暂停实时计时并持久化等待区间。https://github.com/earendil-works/pi/pull/11672

另：#11696 为作者标注 WIP 的存储复制 PR，明确表示暂不评审。

## 功能需求趋势

- **性能与资源控制**：CPU、内存、OOM、重渲染问题密集（#7730、#9549、#9276、#11527），长会话与大数据量场景是主要压力源。
- **扩展生态可发现性与命名治理**：npm search 索引（#7885）、包命名空间（#8834）、扩展更新可见性（#11707、v1.5.0 changelog）共同指向包生态基础设施。
- **多提供商与模型适配**：OpenRouter、Anthropic messages、Bedrock、GitHub Copilot 均有专项问题，根因多为 schema 转换、thinking/tool 状态跨请求往返、模型目录元数据不一致。
- **终端与本地化支持**：Alacritty 中文 IME（#11177）、Windows Terminal 阿拉伯语 RTL（#11579）、fullscreen 模式 UI 残留（#11264），说明 TUI 输入层与双向文本仍需补强。
- **持久化执行（durable）语义**：唤醒睡眠任务（#11683）、暂停截止时间（#11672），反映 durable 作为扩展方向在逐步完善 API。

## 开发者关注点

- **向后兼容契约缺失**：1.5.0 移除导出即打断下游，`AGENTS.md` 甚至曾指示 agent 不保持兼容——社区要求将兼容性写入规范（#11704）。
- **版本与元数据可信度**：模型上下文窗口上报错误（#11021）、npm 索引滞后（#7885）、release 产物未构建（#11686）都会让下游做出错误判断。
- **安装方式碎片化**：多种包管理器托管时自更新失效（#11629），Nix 构建路径脆弱（#11685）。
- **静默裁剪与隐式行为**：Anthropic 适配器丢弃 schema 关键字（#9134、#9557）、`agentLoopContinue` 未隔离调用方数组（#11364）等问题反映"看起来成功但语义改变"的风险。
- **AI 起草 issue 的披露实践**：#9549、#10954、#11376 等明确标注由本地 agent 起草并经人工核实，正在成为社区协作的常见规范。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报（2026-11-02）

## 1. 今日速览

今日发布 v0.26.6 及配套 SDK TypeScript v0.1.27，并新增 Web Shell 侧边栏活动视图。社区焦点集中在元智能体（Managed Agent）基础设施建设与 Web Shell 相关缺陷：两条 P1 安全/CI 问题（#16144 频道权限默认开放、#16065 Web Shell 冒烟测试不稳定）值得优先处理。CI 与依赖审计类自动告警 Issue 仍长期挂起，评论数居高不下。

## 2. 版本发布

- **v0.26.6**：正式版。附带一项特性——为可信工作区会话新增 Web Shell 侧边栏活动视图，可展示审批/输入/错误状态与未读标记等。无已知破坏性变更。发布 PR：#16163
- **sdk-typescript v0.1.27**：TypeScript SDK 发布，捆绑 CLI 版本 0.26.6（发布说明中亦提及与 0.26.4 的捆绑关系）。发布 PR：#16164
- **v0.26.5-nightly.20261101.7b4b353750**：夜间构建，包含 `refactor(managed-agent): Share the session event delivery loop`（#15952）及 CI 分类路由调整。

## 3. 社区热点 Issues（10 条）

1. **[#16144](https://github.com/QwenLM/qwen-code/issues/16144)（P1/安全）Web Shell 创建的 GitHub/GitLab 频道默认对任何人开放，与文档"默认关闭群组访问"不符** — 新报告即引发 4 条讨论，涉及未列出的公开仓库，安全影响面大，应最优先处置。
2. **[#16065](https://github.com/QwenLM/qwen-code/issues/16065)（P1）Web Shell E2E Smoke 通道在套件负载下 settings-exclusions 与 lazy-session-preview 测试失败** — 与 PR 无关的持续失败，削弱主分支质量门禁。
3. **[#15799](https://github.com/QwenLM/qwen-code/issues/15799)（P1）会话异常结束后，已完成工具调用被误报"未记录，视为失败并重试"** — 涉及并行调用与 SIGHUP 场景，直接影响非交互用户可靠性。
4. **[#15165](https://github.com/QwenLM/qwen-code/issues/15165)（P2/性能）Shell 安全解析器在 Node 24.16.0 上触发约 1.6 GiB 瞬时 WASM 编译内存分配** — 内存尖峰问题具体可复现，对资源受限环境影响明显。
5. **[#16147](https://github.com/QwenLM/qwen-code/issues/16147)（P2/性能）Managed Runtime worker 每次 `run_shell_command` 都执行 record_artifact 检查，每沙箱多约 166 MiB** — 与上条同属 shell 内存议题，属新增热点。
6. **[#14288](https://github.com/QwenLM/qwen-code/issues/14288)（P3）长时/挂起会话下僵尸子进程累积，观察到 48 天僵尸进程** — 重度多会话用户的真实困扰，虽为 P3 但影响持久。
7. **[#12970](https://github.com/QwenLM/qwen-code/issues/12970)（P2）`invalid_tool_params` 失败被误判为 max_tokens 截断，多调用轮次中失败调用不执行** — 错误诊断误导模型与用户，属核心工具链问题。
8. **[#15894](https://github.com/QwenLM/qwen-code/issues/15894)（P2）以用户消息发送的 stop 无法取消待处理的 loop_wakeup，`/loop` 会自行恢复** — 已标记 `ready-for-human`，涉及后台自动化可靠性。
9. **[#15750](https://github.com/QwenLM/qwen-code/issues/15750)（P3/测试）Managed Agent Stage F 遗留故障门控单元** — 承接 FG6–FG13 多个跟踪器关闭时未完成的测试项，反映测试债务。
10. **[#6721](https://github.com/QwenLM/qwen-code/issues/6721)（已关闭）避免延迟工具发现使 prompt 缓存前缀失效** — 长期性能议题今日关闭，值得关注其结论。

此外，CI 自动告警类 Issue（#14724 评论 155、#13078 评论 39、#15173 评论 36、#12714 评论 25）持续更新，但多为机器人重复报告，信息价值有限。

## 4. 重要 PR 进展（10 条）

1. **[#16153](https://github.com/QwenLM/qwen-code/pull/16153) feat(managed-agent)：会话创建时支持完整模型配置** — 可信应用可提供协议、模型、API base URL、API key 及校验后的生成参数，属元智能体能力扩展。
2. **[#16143](https://github.com/QwenLM/qwen-code/pull/16143) refactor(managed-agent)：对齐共享 MySQL schema 规范** — 为 38 张表、843 列补英文文档并对齐 MySQL 约定。
3. **[#16165](https://github.com/QwenLM/qwen-code/pull/16165) fix(core)：保留 OpenRouter `:exacto` 变体标签下的模型名** — `qwen/qwen3-coder:exacto` 可正确获得 262,144 上下文窗口而非默认值。
4. **[#15775](https://github.com/QwenLM/qwen-code/pull/15775) fix(permissions)：向运维者暴露格式错误的规则** — 各摄入路径产生可见告警，`/permissions` 界面显示"invalid: not applied"标记。
5. **[#16066](https://github.com/QwenLM/qwen-code/pull/16066) feat(config)：新增运维级模型目录刷新开关** — `model.catalogRefresh` 可停止每日 models.dev 目录下载，免去逐启动环境变量配置。
6. **[#15562](https://github.com/QwenLM/qwen-code/pull/15562) feat(desktop)：跨重启持久化 Web Shell 目录** — 桌面端保存守护进程连接与工作区主机目录，经白名单 IPC 读取。
7. **[#15466](https://github.com/QwenLM/qwen-code/pull/15466) feat(serve)：新增用户级 Skill 启用路由** — 提供 `PUT /skills/:name/activation` 及批量接口（上限 100 个）。
8. **[#16043](https://github.com/QwenLM/qwen-code/pull/16043) fix(cli)：提示模式下非 TTY stdin 超时时向 stderr 告警** — 500 ms 首字节计时器到期时显式提示。
9. **[#13312](https://github.com/QwenLM/qwen-code/pull/13312) fix(mcp)：在 App 读取超时告警中点明被截断的服务器超时值** — 修正误导性错误信息（作者声明为 AI 合成的自主贡献）。
10. **[#15274](https://github.com/QwenLM/qwen-code/pull/15274) / [#15286](https://github.com/QwenLM/qwen-code/pull/15286) fix(ci)：增强 SDK Java Maven 缓存路径** — 缓存写回失败时保留测试套件结果，并隔离解析器簿记与宿主机缓存。

## 5. 功能需求趋势

从 Issues 与 PR 汇总，社区关注方向集中在：

- **Web Shell 与桌面端**：侧边栏活动视图已落地；需求包括基于 Web Shell 的低维护桌面应用（#8092，已关闭）、桌面目录持久化（#15562）、频道权限默认值修正（#16144）。
- **元智能体/多智能体（roadmap/multi-agent）**：模型完整配置、共享事件投递循环、MySQL schema 规范化、Stage F 测试补齐（#15750）。
- **性能与内存**：shell 安全解析器内存尖峰（#15165）、Managed Runtime 每次调用开销（#16147）、prompt 缓存前缀失效（#6721）。
- **会话管理**：僵尸子进程（#14288）、异常结束后的结果误报（#15799）、`/loop` 停止语义（#15894）。
- **权限与安全**：shell 重定向目标绕过 Write 拒绝检查（#13106，已关闭）、畸形权限规则可见性（#15775）。
- **模型接入**：OpenRouter 变体标签支持（#16165）、模型目录刷新控制（#16066）。

## 6. 开发者关注点

- **CI 稳定性是最大噪音源**：主 CI、E2E、依赖 CVE 审计的自动告警长期未收敛（#14724/#15173/#12714/#13078 评论数最高），其中 #15052 指出 pending 运行被替换后缺失独立主分支 E2E 验证结果，建议优先修复门禁本身。
- **错误信息误导**：多处反馈"提示与事实不符"——截断误判（#12970）、工具结果"未记录"误报（#15799）、MCP 超时未点明被截断的数值（#13312），开发者希望错误提示更精确可诊断。
- **资源开销敏感**：shell 相关路径出现 1.6 GiB 内存尖峰与每沙箱约 166 MiB 额外开销，重度/沙箱用户对内存与进程生命周期（僵尸进程）反馈集中。
- **安全默认值须与文档一致**：Web Shell 频道权限默认开放与文档矛盾（#16144），以及历史上 `startsWith('..')` 路径包含类缺陷（#8835），显示安全校验路径仍需系统性审计。
- **测试债务显性化**：大量 Issue 标记 `autofix/needs-human`、`ready-for-human`，需人工介入的修复与测试补齐积压明显。

---

*注：以上内容均基于所提供的 GitHub 数据整理，具体修复效果请以实际合并与发布为准。*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI 社区动态日报（2026-11-02）

> 数据来源：github.com/Hmbown/DeepSeek-TUI（Issue/PR 链接均指向 codewhale-hq/Codewhale）

## 1. 今日速览

今日无新版本发布，但 34 条 Issue 集中更新，核心是 EPIC-005 的 TUI crate 拆解验收（#5316，34 条评论）以及一轮统一的"Release acceptance — November 2, 2026"源码对账，多数条目标注为"部分落地、验收未完成"。PR 侧以 Lstarsky0 提交的一批 TUI Markdown 渲染修复为主，另有若干依赖升级机器人 PR。

## 2. 版本发布

过去 24 小时无新 Release。

## 3. 社区热点 Issues（10 条）

1. **#5316 EPIC-005: CodeWhale TUI Crate Decomposition（Umbrella）** — 评论数最高（34），是当前最活跃的跟踪型 Issue。验收说明指出拆解有实质进展，但历史上的 full50k/10k 目标已被"创始人粗粒度方向"取代，说明项目在目标口径上做了调整。
   https://github.com/codewhale-hq/Codewhale/issues/5316

2. **#7095 [bug, v0.10.3] 对话历史丢失** — 11 条评论。已完成"失败重置保存保留"与 Windows 控制适配器修复，但原始事故仍未关闭，属于影响数据可靠性的高优先级缺陷。
   https://github.com/codewhale-hq/Codewhale/issues/7095

3. **#6184 [bug] 引擎运行中静默冻结** — 9 条评论。用户消息被持久化却无响应，无报错、无日志、无崩溃记录。已落地阶段性 watchdog/超时/持久诊断与排队消息恢复，但长跑事故仍未关闭，是最难定位的可靠性问题之一。
   https://github.com/codewhale-hq/Codewhale/issues/6184

4. **#6011 [enhancement] TUI 用量与工具诊断（token 计费）** — 10 条评论。需求覆盖按组件/按模型 token 统计、缓存命中率、按工具 sink、压缩成本及工具调用错误模式。目前仅有局部指标与持久 worker 回执，全局统计契约尚未实现。
   https://github.com/codewhale-hq/Codewhale/issues/6011

5. **#6728 [bug, performance] CPU 占用回归（v0.9.12→v0.10.0）** — 7 条评论。从空闲退化到重度占用，已修复 macOS 唤醒/CPU 问题并保留三个版本的 Ubuntu 空闲测量，但报告者所在平台问题仍开放。
   https://github.com/codewhale-hq/Codewhale/issues/6728

6. **#6969 [v0.10.3] Deferred-toolbox 淘汰在 prompt caching 下经济性为负** — 6 条评论。指出全前缀重新预填充与写入溢价导致成本上升，且恢复说明会永久过期、预算计算无视线缆字节。线缆控制已落地，经济性验收未完成，对成本敏感用户价值高。
   https://github.com/codewhale-hq/Codewhale/issues/6969

7. **#6970 [bug, windows, v0.10.3] `/undo` 命令严重问题** — 4 条评论。源码与 macOS 路径已修复，Windows 端最终验收未完成，跨平台一致性是当前短板。
   https://github.com/codewhale-hq/Codewhale/issues/6970

8. **#6992 [bug] 0.10.1 ACP 回归：sandbox_mode/ask 被忽略** — 3 条评论。Paseo ACP 会话被强制沙箱化并需审批，全访问参数修复已落地，但真实客户端/平台验收仍开放，影响 IDE/客户端集成体验。
   https://github.com/codewhale-hq/Codewhale/issues/6992

9. **#7085 [enhancement, providers] 内置 Runcrate 作为 provider** — 3 条评论。描述符与公开目录例外已落地，仅待发布确认，是 provider 生态扩展的代表条目。
   https://github.com/codewhale-hq/Codewhale/issues/7085

10. **#5637 [CLOSED, security, mcp] 将 MCP 密钥 provider 作用域限定到所属运行时** — 少数已关闭条目之一，v1 作用域实现已落地，体现安全隔离方向的实际推进。
    https://github.com/codewhale-hq/Codewhale/issues/5637

其他值得扫读：#5586（巨型文件拆解，8 条评论）、#5587（dead-code 清理，9 条评论）、#5860（对话自动技能演化）、#6991（降低 token 消耗的新方案）、#7133（自动压缩上下文异常）。

## 4. 重要 PR 进展（10 条）

1. **#7197 fix(tui): 按内容宽度分配表格列** — 解决所有列均分终端、行号列与正文列等宽导致换行浪费的问题。
   https://github.com/codewhale-hq/Codewhale/pull/7197

2. **#7196 fix(tui): 不再把美元金额当作行内公式** — 行内数学从任意 `$` 开启，会吞掉金额前的 `$`，影响渲染正确性。
   https://github.com/codewhale-hq/Codewhale/pull/7196

3. **#7193 fix(tui): 展开回复与已发送消息中的制表符** — ratatui 丢弃控制字符，导致 Go/Makefile 代码缩进丢失、`a<TAB>b` 显示为 `ab`。
   https://github.com/codewhale-hq/Codewhale/pull/7193

4. **#7192 fix(tui): 解码回复中的 HTML 字符引用** — `&amp;` 等被原样打印，链接目标中 `?q=rust&amp;page=2` 会把参数名变成 `amp;page`。
   https://github.com/codewhale-hq/Codewhale/pull/7192

5. **#7186 fix(tui): 在 `<br>` 处换行** — 表格单元格常用 `<br>` 换行，此前被当作文本打印。
   https://github.com/codewhale-hq/Codewhale/pull/7186

6. **#7182 fix(tui): Markdown 图片渲染为 alt 文本** — 修复 `!` 残留、链接式 badge 图片在 `]` 处被拆断的问题。
   https://github.com/codewhale-hq/Codewhale/pull/7182

7. **#7139 fix(workflow-js): 生成 Windows GNU LLVM 绑定** — 默认构建在 `x86_64-pc-windows-gnullvm` 上引用缺失的 rquickjs-sys 绑定，属构建链路修复。
   https://github.com/codewhale-hq/Codewhale/pull/7139

8. **#7195 docs(harmonyos): 描述当前在 HarmonyOS 上的运行方式** — 将页面从"历史报错记录"改写为可操作的运行说明。
   https://github.com/codewhale-hq/Codewhale/pull/7195

9. **#7161 chore(deps): uuid 1.28.0 → 1.29.0** — Rust 依赖例行升级（dependabot）。
   https://github.com/codewhale-hq/Codewhale/pull/7161

10. **#7187 chore(deps): /web 中 react-dom 与 @types/react-dom 同步升级** — 前端依赖例行升级（dependabot）。
    https://github.com/codewhale-hq/Codewhale/pull/7187

另有 #7191、#7190、#7189、#7188 为已关闭的依赖/工具链升级（nixpkgs、fenix、stripe、@types/node）。

## 5. 功能需求趋势

- **TUI 渲染质量**：今日 PR 高度集中于 Markdown 渲染缺陷（表格、图片、HTML 实体、制表符、行内公式），说明终端渲染保真度是当前最密集的修复方向。
- **可观测性与成本计量**：#6011、#5581、#6969、#6991 共同指向 token 统计、缓存命中、压缩成本与"线缆字节"可见性。
- **上下文与压缩**：#6011、#6991、#7133、#5860 涉及压缩策略、上下文异常与技能演化。
- **Provider 生态**：#7085（Runcrate）、#5848（Ollama 实机目录验证）、#5915（fleet 模型选择）。
- **子代理与工作流可靠性**：#6184（静默冻结）、#6013（goal gates 独立校验）、#5915（workers 视图）。
- **架构清理与可维护性**：#5316、#5586、#5587、#6145 构成 crate 拆解、巨型文件拆分、dead-code 清理、命令契约采纳四件套。
- **安全与多平台**：#5637（MCP 密钥作用域）、#6970 与 #6992 中的 Windows/ACP 验收缺口。

## 6. 开发者关注点

- **"已修复"与"已验收"之间存在明显落差**：大量条目的验收说明采用"部分落地 / 事故仍开放"措辞，反映修复落地快但端到端验收慢，尤其集中在 Windows 平台与真实客户端环境。
- **静默失败最难排查**：#6184 无报错、无日志、无崩溃条目，是用户信任度的核心风险。
- **成本敏感度高**：prompt caching 下的重新预填充与写入溢价、预算计算无视实际线缆字节，是社区对经济性的直接质疑。
- **性能回归**：CPU 占用随版本逐级恶化（#6728），影响停留时长与日常可用性。
- **目标口径频繁调整**：#5316 中历史量化目标被粗粒度方向取代，建议关注后续公开发布的目标定义，避免按旧指标评估进度。

---

*说明：部分 Issue 摘要中的提交哈希与验收细节来自原文摘录，具体以仓库内最新内容为准。*

</details>

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar-personal) 自动生成。*