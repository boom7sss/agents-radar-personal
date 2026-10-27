# AI CLI 工具社区动态日报 2026-09-13

> 生成时间: 2026-09-13 12:19 UTC | 覆盖工具: 9 个

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

# AI CLI 工具生态横向对比分析报告（2026-09-13）

> 数据来源：各工具 GitHub 仓库过去 24 小时社区动态。仅基于所提供材料整理，未引入外部信息。

---

## 1. 生态全景

当前 AI CLI 工具已整体进入"能力铺开后的可靠性清算期"：多数工具今日无功能级发布，社区讨论集中在回归修复、沙箱/权限精细化、多 agent 调度与会话状态正确性上。Windows/WSL 成为跨工具缺陷密度最高的平台，多账号/多 provider 接入与计费可见性成为普遍关切。同时，一批项目（Pi、Qwen Code、DeepSeek TUI）正从零散修复转向 agent 运行时可观测性、预算控制与事件契约的系统性建设。分化也在加剧：头部工具靠社区体量驱动排障，新兴工具则靠架构提案争取方向感。

---

## 2. 各工具活跃度对比

| 工具 | Issues（本窗口更新） | PR（本窗口更新） | Release | 备注 |
|---|---|---|---|---|
| **Claude Code** | 10 条（列出） | 6 条（全部） | **v2.1.270**（回归修复） | 热度最高：多账号请求 246 评论 / 375 👍 |
| **OpenAI Codex** | 50 条更新（列 10） | 22 条更新（列 10） | 无 | Issues 更新量最大；PR 多为 Windows 沙箱 |
| **Gemini CLI** | 10 条（列出，多条 p1） | 10 条（列出） | **v0.61.0-nightly**（自动） | 无功能性变更，仅版本号递增 |
| **GitHub Copilot CLI** | 8 条（全部） | 3 条（全部，均 CLOSED） | 无 | 数据量最小；焦点为 1.0.83 回归 |
| **Kimi Code CLI** | 1 条（全部） | 1 条（全部） | 无 | 样本极小，不足以概括趋势 |
| **OpenCode** | 10 条（列出） | 10 条（列出） | 无 | V2/新布局回归 + Zen provider 报错集中 |
| **Pi** | 10 条（列出） | 8 条（列出） | 无 | 当日大批 Issue 快速 CLOSED/untriaged |
| **Qwen Code** | 10 条（列出） | 10 条（列出） | **cua-driver-rs v0.20.6** + **v0.23.3-nightly** | 3 条 P1 同类崩溃（React #185） |
| **DeepSeek TUI** | 30 条更新（列 10） | 9 条（列 10） | 无 | 维护者集中提交运行时能力提案 |

**说明**：Kimi Code CLI 明确标注"本期仅 1 条 Issue 与 1 条 PR"，其余工具为"列出 Top 10"，实际更新量以 Codex（50 Issues / 22 PRs）、DeepSeek TUI（30 Issues）为最多。

---

## 3. 共同关注的功能方向

**① Agent 可靠性与状态可信度（覆盖面最广）**
- Claude Code：#63023 后台 agent 静默死亡、#63875 tool call 解析失败、#90542 规则契约失效
- Gemini CLI：#22323 MAX_TURNS 中断被上报为成功、#21409 通用代理无限挂起、#25166 命令完成后卡在 Waiting input
- Copilot CLI：#2254 后台子代理缺实时进度流
- DeepSeek TUI：#6117 profile 被静默忽略、#5620 上下文压力无主动响应
- **共性诉求**：状态上报真实、失败可诊断、后台任务可恢复。

**② Windows / WSL 平台稳定性**
- Claude Code：桌面端重启、窗口置顶、hook 非 ASCII 静默跳过
- Codex：无法启动（#40700）、WSL 切换后项目创建删除失败（#41290）、沙箱参数超限（#38985）
- OpenCode：WSL 服务器添加失败、ConPTY 退出残留状态、安装升级失败
- Pi：#9546 Copilot OAuth 刷新 403（Windows）、#9549 大 transcript 单核满载（Win11）
- **共性诉求**：Windows 是当前缺陷最集中平台。

**③ 上下文与 Token 成本管理**
- Codex：#39421 暂存泄漏 559 GB、#43045 重连消耗额度、#45094 按内容估算 token
- OpenCode：#45750 Anthropic prompt 缓存失效（命中率恒 0%）
- Copilot CLI：#4829 子代理长工具序列破坏 prompt 缓存、放大 token
- DeepSeek TUI：#6130 status 投影约 5 万 token、#6129 缺按次预算
- **共性诉求**：成本已从"是否可用"升级为独立评价维度。

**④ 多账号 / 多 provider / 订阅制登录**
- Claude Code：#27302 同一 Connector 绑定多账号（375 👍，全生态最高）
- Pi：#9530 Google Antigravity + Cursor Pro OAuth、#9096 Meta Muse 订阅
- OpenCode：Zen 平台 Muse Spark 系列 provider 报错
- DeepSeek TUI：#6113 模型专属 wire API

**⑤ 沙箱 / 权限精细度**
- Claude Code：#93989 bwrap 将整个 /home 绑定、#83406 "始终允许"模式过窄
- Codex：Windows 沙箱令牌校验（#45182）、清理阶段拆分（#45178）
- Qwen Code：#11695 harness 与执行环境解耦、#11711 子 agent 容器化
- Copilot CLI：#4830 缺 `/remove-dir` 回收权限

**⑥ 会话数据生命周期与隐私**
- Qwen Code：#11762 `/delete` 不清理日志（累积全部会话对话）
- Gemini CLI：#26525 脱敏在传输之后执行
- OpenCode：#43277 会话永久卡死且跨重启不可恢复

---

## 4. 差异化定位分析

| 工具 | 功能侧重 | 目标用户 | 技术路线特征 |
|---|---|---|---|
| **Claude Code** | 规则工程（CLAUDE.md）、Connector 生态、权限系统 | 重度规则定制用户、企业团队 | 插件/mods 体系（新增 mods 测试迁移、plugin test） |
| **OpenAI Codex** | Windows 沙箱架构、TUI 体验、指令自演化 | 跨环境（WSL）开发者 | RFC 驱动（#40575 /learn + AGENTS.md 规则代谢） |
| **Gemini CLI** | 子代理编排、Auto Memory、AST 感知工具 | 偏好 Google 模型栈的开发者 | 探索 OS 沙箱 + bash 亲和执行模型（#19873） |
| **GitHub Copilot CLI** | GitHub 生态集成、项目级 MCP 配置 | GitHub 平台既有用户 | 依赖 Dependabot/安全机器人维护，PR 以供应链为主 |
| **Kimi Code CLI** | Web UI 交互、OpenAI 兼容接入 | 小众、文档导向用户 | 节奏平缓，PR/Issue 量极少 |
| **OpenCode** | V2 新布局 UI、Zen 平台、插件扩展 | 桌面端 + 多模型尝鲜用户 | 布局重构中，插件槽位化（home.footer） |
| **Pi** | 性能/启动时延、transcript 语义、多订阅 provider | 嵌入式 SDK 与扩展开发者、性能敏感用户 | 对标 Codex 协议（turn 归属元数据 #9488） |
| **Qwen Code** | 多 agent 稳定性、执行环境解耦、多端分发 | 中文社区、长时会话用户 | 容器化子 agent + PWA/Android 多端演进 |
| **DeepSeek TUI** | Agent 运行时契约、Fleet 调度、可观测性 | Rust 生态、SDK 集成开发者 | 单一来源生成 Rust/TS 事件契约（#6133） |

**路线对比要点**：
- **契约与协议对齐**：Pi 主动对齐 Codex 的 turn 元数据；DeepSeek TUI 追求 Rust/TS 事件契约单一来源——两者都在"与他人互操作/自身可维护"上投入。
- **执行层隔离**：Qwen Code（容器化）与 Codex（MXC 沙箱）走工程化隔离路线；Gemini CLI 停留在提案（#19873）。
- **UI 哲学分歧**：OpenCode 强行推进 V2 新布局遭反弹（垂直标签诉求 31 👍），Others 多为渐进修复。

---

## 5. 社区热度与成熟度

**第一梯队（高活跃 + 高热度反馈）**
- **OpenAI Codex**：Issues 更新 50 条、PR 22 条，当日最高；但"问题—修复"对应关系清晰（#38985 ↔ #45176），维护响应成熟。
- **Claude Code**：单条 Issue 375 👍，社区声量绝对领先；Windows 问题密集但修复节奏及时（v2.1.270 次日即补）。

**第二梯队（活跃但处于问题消化期）**
- **Qwen Code**：3 条独立 P1 崩溃报告指向同一根因（React #185 / Ink 布局），属**结构性技术债**，修复优先级最高。
- **Pi**：当日大批 Issue 快速 CLOSED/untriaged，存在集中分流处理迹象，需观察是否转为正式修复。
- **OpenCode**：V2 回归 + provider 报错叠加，且部分 Issue 被标记 `needs:compliance` 后关闭，**用户缺少明确解释**，存在信任风险。

**第三梯队（平稳/样本不足）**
- **Gemini CLI**：多条 p1 已标 `status/need-retesting`，进入验证阶段，节奏稳健。
- **Copilot CLI**：本期仅 8 Issues / 3 PRs（PR 全为依赖升级），社区参与度明显偏低，回归问题（1.0.83 MCP 不加载）影响直接。
- **DeepSeek TUI**：Issue 更新 30 条，但大量由核心维护者提交，**维护者驱动特征明显**，外部社区参与度待观察。
- **Kimi Code CLI**：本期仅 1 Issue / 1 PR，活跃度最低，不足以判断趋势。

**成熟度判断**：Codex 与 Claude Code 已进入"工程化排障 + 架构演进"的成熟阶段；Qwen Code、OpenCode、Pi 处于"功能铺开—回归暴露"的快速迭代阵痛期；Kimi Code CLI 处于早期或低强度维护状态。

---

## 6. 值得关注的趋势信号

**信号一：可靠性正取代能力，成为差异化主战场**
高频关键词从"支持某模型/某功能"转向"静默失败""状态误报""无法恢复"。Claude Code #90542（700 行规则 4.5 小时逐条违反）、Gemini CLI #22323（中断被报成功）、DeepSeek TUI #6117（profile 静默忽略）都是"不报错但行为错误"。
→ **对开发者的价值**：选型时应优先验证失败可观测性（是否能拿到真实处置状态、是否有显式错误），而非功能清单长度。

**信号二：Token 成本的"工程化"报告正在出现**
Copilot CLI #4829 直接报告 prompt 缓存失效导致 token 叠加，Codex #43045 报告重连循环消耗已购额度，OpenCode #45750 报告缓存命中率恒为 0%。
→ **对开发者的价值**：成本问题已可定位到具体机制（缓存策略、重试逻辑、上下文投影），建议在 CI 或用量监控中纳入这类指标。

**信号三：Agent 运行时开始被当作"有预算、有契约"的对象**
DeepSeek TUI #6129（按次 token 预算）、#6133（单一来源事件契约）；Pi #9488（turn 归属元数据对齐 Codex）；Claude Code #63023（后台 agent 生命周期）。
→ **对开发者的价值**：多 agent 编排的工程规范正在形成，可关注"预算控制 + 事件契约 + 可恢复性"三要素的落地方式。

**信号四：Windows 支持的工程难度被系统性低估**
几乎每个工具都有 Windows/WSL 高热度缺陷（启动、沙箱、OAuth、终端状态残留）。
→ **对开发者的价值**：Windows 仍是最易踩坑的平台，建议在 Windows 环境做独立的回归验证流程。

**信号五：本地数据隐私的"时序"缺陷受到关注**
Gemini CLI #26525（脱敏在传输后执行）、Qwen Code #11762（日志保留全部会话且无开关）、OpenCode #43277（会话不可恢复）。
→ **对开发者的价值**：评估工具时应确认本地数据在何时、以何种形式离开本机，以及清理是否彻底。

**信号六：订阅制 + 浏览器 OAuth 接入成主流期待**
Pi 一次性引入 Google Antigravity、Cursor Pro、Meta Muse；Claude Code 多账号诉求居首。
→ **对开发者的价值**：多身份、无 API key 的接入方式正成为默认预期，工具若只支持单一 API key 模式可能落后。

---

*本报告仅基于 2026-09-13 各工具 GitHub 仓库社区动态整理，未包含外部信息。*

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告

数据来源：github.com/anthropics/skills｜截止 2026-09-13

> 说明：本次提供的 PR 数据中评论数字段缺失（均为 `undefined`），因此「热门 Skills 排行」依据材料中体现的社区关注度信号（关联 Issue 评论量、复现次数、被引用次数）排序，而非 PR 自身评论数。

---

## 1. 热门 Skills 排行

**1. skill-creator 修复系列（run_eval.py 0% recall）**
- 功能：修复 skill-creator 评估链路，`run_eval.py` 对所有 skill 描述一律报告 `recall=0%`，并连带影响 `run_loop.py` 与 `improve_description.py`。
- 热点：直接关联 Issue #556（12 条评论、👍7，10+ 次独立复现），是当前生态中讨论最集中的技术故障。
- 状态：OPEN（PR #1298，2026-06-10 创建，2026-09-13 仍在更新）
- 链接：https://github.com/anthropics/skills/pull/1298

**2. mcp-builder 修复系列（evaluation.py 与 mcp>=2 兼容）**
- 功能：修复 Phase-4 评估框架对真实 MCP server 全部判 0 分（TextContent 不可 JSON 序列化）、以及 `mcp>=2.0.0` 中 `streamable_http_client` 重命名与自定义 header 配置方式变更。
- 热点：关联 Issue #1390（4 条评论），问题严重性在于「每次工具调用都被伪造成错误」。
- 状态：OPEN（PR #1742、#1724、#1602）
- 链接：https://github.com/anthropics/skills/pull/1742 ｜ https://github.com/anthropics/skills/pull/1602

**3. claude-api skill 上下文膨胀**
- 功能：指出 `claude-api` skill 单次工具调用即注入约 156k tokens，直接耗尽上下文窗口；相关 PR 另修复四个已退役模型 ID 的标注。
- 热点：涉及上下文窗口这一核心资源约束，Issues 与 PR 双向讨论。
- 状态：OPEN（PR #1607，关联 Issue #1487）
- 链接：https://github.com/anthropics/skills/pull/1607

**4. document-typography（文档排版质量控制）**
- 功能：防止 AI 生成文档中的孤词换行（1–6 词溢出到下一行）、寡行段落（章节标题滞留页底）、编号错位。
- 热点：面向「每份生成文档都会踩」的通用排版问题，属于跨 skill 的横切能力。
- 状态：OPEN（PR #514，2026-03-04 创建）
- 链接：https://github.com/anthropics/skills/pull/514

**5. Hivemind：零成本多 Agent 编排**
- 功能：Claude Code 保持唯一规划者/审查者/合并者，把机械性工作委派给运行免费模型的 headless opencode worker。
- 热点：直击「昂贵模型做廉价工作」的成本痛点，是社区对编排型 skill 的代表性提案。
- 状态：OPEN（PR #1628）
- 链接：https://github.com/anthropics/skills/pull/1628

**6. ODT skill（OpenDocument 创建/填模板/转 HTML）**
- 功能：创建、填充、读取 OpenDocument 格式（.odt/.ods），并支持 ODT 转 HTML。
- 热点：补齐文档格式覆盖矩阵（已有 docx/pdf），触发词覆盖 ODT/ODS/ODF/LibreOffice。
- 状态：OPEN（PR #486）
- 链接：https://github.com/anthropics/skills/pull/486

**7. scnet-hpc（HPC 集群操作）**
- 功能：通过 profile 化 SSH 与 Slurm 工作流操作 SCNet HPC 集群，含分区、内存、模块、加速器指引与作业提交。
- 热点：垂直领域（科研计算）skill 的代表，扩展了 skill 生态的行业边界。
- 状态：OPEN（PR #1615）
- 链接：https://github.com/anthropics/skills/pull/1615

**8. self-audit（交付前自审）**
- 功能：先做机械性文件校验，再按损害严重度优先级做四维推理质量审计；宣称通用（任意项目/技术栈/模型）。
- 热点：与 Issue #1385「推理质量门流水线」提案同源思路，反映社区对输出质量门禁的兴趣。
- 状态：OPEN（PR #1367，v1.3.0）
- 链接：https://github.com/anthropics/skills/pull/1367

---

## 2. 社区需求趋势

**① 信任边界与安全治理（最强诉求）**
Issue #492（43 条评论，👍2）指出社区 skill 以 `anthropic/` 命名空间分发，冒充官方 skill，用户可能因此授予越权权限——这是当前评论量最高的议题。安全类 skill 提案（如 `agent-governance`，#412，已 CLOSED）与 SharePoint 文档权限处理讨论（#1175，已 CLOSED）同属此脉络。
- 链接：https://github.com/anthropics/skills/issues/492

**② 组织级分发与协作**
Issue #228（16 条评论，👍8）要求 Claude.ai 内支持组织范围 skill 共享，替代当前「下载 .skill → Slack 传文件 → 手动 Settings 上传」的流程。
- 链接：https://github.com/anthropics/skills/issues/228

**③ 质量评估与优化工具链可信度**
Issue #556 与 skill-creator 相关 PR 群（#1298/#1099/#1050）集中暴露评估脚本本身不可用：0% 触发率、Windows 子进程崩溃、编码错误、YAML 特殊字符导致的静默解析失败（#539）。社区诉求是「让度量工具先可信」。
- 链接：https://github.com/anthropics/skills/issues/556

**④ 上下文效率与状态压缩**
`claude-api` 单次注入 156k tokens（#1487）、`compact-memory` 符号化状态表示提案（#1329，9 条评论）、以及 skill-creator 应更精简（#202，已 CLOSED）指向同一诉求：token 预算的精细管理。
- 链接：https://github.com/anthropics/skills/issues/1487 ｜ https://github.com/anthropics/skills/issues/1329

**⑤ 打包与互操作机制**
`document-skills` 与 `example-skills` 插件安装内容重复、污染上下文窗口（#189，👍9）；以及「把 Skills 暴露为 MCP」（#16）与 AWS Bedrock 适配（#29）等平台互操作需求。
- 链接：https://github.com/anthropics/skills/issues/189 ｜ https://github.com/anthropics/skills/issues/16

**⑥ 工具链兼容性**
pnpm ≥10.1 导致 web-artifacts-builder 打包脚本失败（#1362）、mcp>=2 导入路径变更（#1742）、Windows 平台脚本缺陷——跨版本/跨平台兼容是反复出现的主题。
- 链接：https://github.com/anthropics/skills/issues/1362

---

## 3. 高潜力待合并 Skills

以下 PR 讨论活跃、指向明确且修复范围可控，具备近期落地条件：

| PR | 主题 | 潜力判断 | 链接 |
|---|---|---|---|
| #1742 | mcp-builder 兼容 mcp>=2 与自定义 header | 明确 fixes #1668，改动集中于导入与 header 配置 | https://github.com/anthropics/skills/pull/1742 |
| #1724 | mcp-builder 默认模型更新为 claude-sonnet-5 | 一行默认值 + 文档同步，低风险 | https://github.com/anthropics/skills/pull/1724 |
| #1607 | claude-api 标记四个退役模型 ID | 纯文档修正，fixes #1603 | https://github.com/anthropics/skills/pull/1607 |
| #1099 / #1050 | skill-creator Windows 兼容（子进程 + 编码） | 作者称均为 1 行改动，症状明确可复现 | https://github.com/anthropics/skills/pull/1099 |
| #539 | skill-creator 校验未加引号的 YAML 描述 | 预解析校验，防止描述静默截断 | https://github.com/anthropics/skills/pull/539 |
| #538 | pdf skill 大小写引用修正 | 8 处 `REFERENCE.md`/`FORMS.md` → 小写，机械性修正 | https://github.com/anthropics/skills/pull/538 |
| #541 | docx 修复 tracked change 与书签 `w:id` 冲突 | 根因清晰（OOXML 共享 ID 空间），防文档损坏 | https://github.com/anthropics/skills/pull/541 |
| #1602 | 评估序列化、基准指标、编码、脚本稳定性综合修复 | 覆盖面广，需拆分评审 | https://github.com/anthropics/skills/pull/1602 |

此外 #514（document-typography）、#486（ODT）、#1615（scnet-hpc）、#1628（Hivemind）为新增能力型 PR，其中 ODT 与 document-typography 因补齐通用文档能力而落地价值较高。

---

## 4. Skills 生态洞察

**当前社区最集中的诉求是：让 Skills 工具链本身先变得可信、安全且节流——修复失灵的评估/打包脚本、堵住命名空间冒充带来的信任边界漏洞、并控制单次注入的 token 开销，而不是急于新增更多 Skill。**

换言之，生态已从「能力扩张」阶段进入「基础设施加固」阶段：评论量最高的 Issue（#492，43 条）是安全命名空间问题，复现最多的缺陷（#556）是评估脚本 0% 触发率，而新 Skill 提案则集中在文档格式补齐与垂直领域覆盖。

---

# Claude Code 社区动态日报（2026-09-13）

## 今日速览

今日最值得关注的是 v2.1.270 补丁发布，修复了 2.1.269 引入的只读 git 命令反复请求权限的回归问题。多账号 Connector 支持请求（#27302）以 246 条评论、375 个 👍 持续占据社区讨论热度榜首。Windows 平台问题集中爆发，桌面端重启失败、窗口置顶、hook 非 ASCII 跳过等问题密集出现。

## 版本发布

**v2.1.270**

修复了此前版本中的一个回归问题：会话运行一段时间后，Bash 中的只读 git 命令会意外触发权限请求（该问题为 2.1.269 引入）。

> 属于小型回归修复版本，建议停留在 2.1.269 的用户尽快升级。
> 链接：github.com/anthropics/claude-code/releases

## 社区热点 Issues

1. **#27302 [OPEN] 支持同一 Connector 绑定多个账号** — 246 评论 / 375 👍。社区呼声最高的功能请求，远超其他议题，反映多账号工作流在实际使用中的强需求。
   https://github.com/anthropics/claude-code/issues/27302

2. **#42776 [OPEN] Windows 桌面端因孤儿进程文件锁无法重启** — 180 评论 / 88 👍。已标记 invalid 但讨论量极高，Windows 桌面端稳定性痛点。
   https://github.com/anthropics/claude-code/issues/42776

3. **#85891 [OPEN] Claude Desktop（Win11）主窗口强制置顶且无法关闭** — 100 评论 / 239 👍。👍 比例高，属于影响日常使用的体验缺陷。
   https://github.com/anthropics/claude-code/issues/85891

4. **#63875 [CLOSED] "tool call could not be parsed" 反复中断会话** — 76 评论 / 115 👍。已被关闭（标记为 duplicate），但长期干扰正常会话，涉及 model 区域。
   https://github.com/anthropics/claude-code/issues/63875

5. **#69044 [OPEN] 数月日常使用中的反复错误汇总** — 48 评论。用户以德语记录了系统性的错误与失败模式，是难得的一手长期观察材料。
   https://github.com/anthropics/claude-code/issues/69044

6. **#90542 [OPEN] 完整 CLAUDE.md 规则契约完全失效** — 21 评论。700 行规则在一次 4.5 小时会话中被逐条违反，涉及"编造原因""陈旧状态被当作当前状态"等严重问题，值得规则工程用户关注。
   https://github.com/anthropics/claude-code/issues/90542

7. **#63023 [OPEN] 后台 agent 在会话暂停/恢复时静默死亡** — 9 评论 / 4 👍。后台 agent 无完成通知、无法恢复工作，影响长任务工作流。
   https://github.com/anthropics/claude-code/issues/63023

8. **#74708 [CLOSED] WorktreeRemove hook 在会话退出时从不触发** — 9 评论。带复现步骤，文档与实际行为不符，已关闭。
   https://github.com/anthropics/claude-code/issues/74708

9. **#93989 [OPEN] bwrap 沙箱将整个 /home 绑定进沙箱** — 2 评论（今日新建）。安全相关：sandbox 挂载范围过大，导致对非当前用户 home 的写入被拒。
   https://github.com/anthropics/claude-code/issues/93989

10. **#89026 [OPEN] hookify 规则含非 ASCII 字符时在 Windows 上被静默跳过** — 3 评论。open() 未指定 encoding 导致的编码缺陷，影响非英语用户。
    https://github.com/anthropics/claude-code/issues/89026

## 重要 PR 进展

1. **#41621 [CLOSED] 补充缺失的 CLI 构建基础设施与打包配置** — 添加从 TypeScript 源码打包为单一可执行文件的完整构建基础设施及文档。
   https://github.com/anthropics/claude-code/pull/41621

2. **#93951 [OPEN] mods 测试迁移至模块旁** — 将 diff、sec-default、telemetry 三个 mod 的行为测试移至 `mods/<mod>/tests/`，由 `claude plugin test` 运行。
   https://github.com/anthropics/claude-code/pull/93951

3. **#93932 [CLOSED] telemetry 的 types 路径改为 `./` 相对形式** — 修复 manifest schema 拒绝裸相对路径的一行问题。
   https://github.com/anthropics/claude-code/pull/93932

4. **#93452 [CLOSED] mods/diff 对齐内置 /diff 面板** — 统一代码渲染、关闭按钮、行距、空状态及窄终端换行行为。
   https://github.com/anthropics/claude-code/pull/93452

5. **#93912 [CLOSED] diff、sec-default、telemetry 的单元测试** — 测试在 mod 运行环境中执行，按 plugin 声明进行类型化。
   https://github.com/anthropics/claude-code/pull/93912

6. **#61716 [OPEN] 为上下文溢出导致的虚假用量限制补充排查文档** — 记录 `usage limit reached` 误报的真实根因（context overflow 被错误映射）。
   https://github.com/anthropics/claude-code/pull/61716

> 说明：过去 24 小时内更新的 PR 共 6 条，以上为全部条目。

## 功能需求趋势

- **多账号与身份管理**：#27302 支持同一 Connector 绑定多账号，是社区声量最大的功能方向。
- **IDE 与编辑器集成**：#78595 请求 VS Code 扩展的会话列表状态指示与后台完成通知。
- **权限提示优化**：#83406 指出"始终允许"建议模式过窄，导致重复弹窗。
- **会话与远程管理**：#87877 请求归档/清理 claude.ai 上的断连 Remote Control 会话。
- **订阅与计费**：#75063 提出家庭/家庭组套餐（已被关闭，标记 invalid/stale）。
- **平台支持补齐**：Windows 相关需求集中（桌面端窗口行为、进程锁、hooks 编码）。

## 开发者关注点

- **权限与沙箱行为异常**：v2.1.270 修复的 git 只读权限回归，与 #93989 沙箱挂载范围过大、#83406 权限模式过窄共同指向权限系统的精细度问题。
- **模型可靠性**：#63875 工具调用解析失败、#90542 规则契约失效、#69044 长期错误记录，均反映模型在长会话中的稳定性担忧。
- **配置加载语义**：#74023 指出 `.claude/settings.json` 按字面 cwd 而非 git root 解析，子目录启动会静默丢弃项目设置。
- **后台 agent 生命周期**：#63023 后台 agent 在会话暂停后静默终止且无通知，缺失恢复机制。
- **Windows 平台体验**：桌面端重启、窗口置顶、hooks 编码等多类问题叠加，Windows 是当前缺陷最集中的平台。
- **插件/mods 生态**：#79776 无版本号官方插件每次刷新都重复提示更新，插件版本管理机制待完善。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报（2026-09-13）

> 数据来源：github.com/openai/codex。过去 24 小时无新版本发布；Issues 更新 50 条，PR 更新 22 条。


## 一、今日速览

今天社区动态集中在两条主线：一是**Windows/WSL 环境的稳定性问题持续发酵**，多个高热度 Issue（#41290、#40700、#44781）指向桌面端在 WSL 切换、打包路径与队列消息上的失败；二是**Windows 沙箱相关 PR 集中落地**，当日合并/关闭的一批 PR 覆盖了 MXC 沙箱接入、令牌组校验、清理阶段拆分与安装存储抽取。此外，关于 `AGENTS.md` 自演化指令蒸馏的 RFC（#40575）持续获得讨论，是当日最具设计野心的社区提案。


## 二、版本发布

过去 24 小时内无新 Release。


## 三、社区热点 Issues（10 个）

1. **[#41290](https://github.com/openai/codex/issues/41290) Windows/WSL 下切换 Agent Environment 后项目创建与删除失败** — 61 条评论、49 👍，是当日热度最高的 Issue。Windows + WSL 是当前抱怨最集中的组合，说明跨环境项目生命周期管理存在系统性缺陷。

2. **[#40700](https://github.com/openai/codex/issues/40700) Codex Desktop 无法启动：WindowsApps 中打包的 codex.exe 迁移失败** — 48 条评论。用户甚至无法打开 About 对话框获取版本号，属于阻断级启动故障，涉及 MSIX 打包与可执行文件迁移路径。

3. **[#40575](https://github.com/openai/codex/issues/40575) [RFC] 面向自演化 Agent：交互式指令蒸馏（/learn）与 AGENTS.md 规则代谢** — 29 条评论。社区主动提出让 Agent 从交互中提炼并维护 `AGENTS.md` 规则，涉及长期复杂项目的记忆机制，是当日最有分量的设计讨论。

4. **[#44781](https://github.com/openai/codex/issues/44781) 编辑并重发队列消息触发 "App-server queued follow-up no longer exists"** — 18 条评论、20 👍，点赞数为当日最高之一，说明排队消息编辑是高频操作路径，报错影响面广。

5. **[#43045](https://github.com/openai/codex/issues/43045) GPT-6 Astra：WebSocket 重连循环持续消耗已购额度，直到回退 HTTPS** — 涉及计费安全，虽仅 4 条评论但性质严重：连接层重试逻辑可能反复扣费。

6. **[#39421](https://github.com/openai/codex/issues/39421) Marketplace 升级暂存泄漏：41 天 559 GB / 4,972 个孤立目录** — 磁盘泄漏规模刷新此前记录（前高 277 GB，见 #29994），且指出清理机制只覆盖 curated clones 而遗漏 marketplaces。

7. **[#45119](https://github.com/openai/codex/issues/45119) macOS 14.2 沙箱启动失败：TIOCSTI 未绑定变量** — 用户已对照上游 `main` commit 检查，属于可复现的沙箱脚本缺陷，对 macOS 用户是阻断性问题。

8. **[#38985](https://github.com/openai/codex/issues/38985) Windows 沙箱：命令行传入的 setup payload 超出 CreateProcess 限制（os error 206）** — 与当日沙箱 PR 群形成呼应，说明 Windows 沙箱在参数传递设计上存在硬限制。

9. **[#41553](https://github.com/openai/codex/issues/41553) ChatGPT Plus 在重新引入 5 小时限额后仅显示周限额** — 涉及用量可见性，直接关联用户对额度策略的信任。

10. **[#33730](https://github.com/openai/codex/issues/33730) Codex Desktop：在侧边栏固定区域保持活跃任务可见** — 典型的多任务工作流需求，反映重度用户在项目/任务增多后的导航痛点。

其他值得留意的还有 [#34458](https://github.com/openai/codex/issues/34458)（Windows Desktop + WSL 下 Browser/Chrome 控制/Computer Use 全部失效，9 👍）、[#42299](https://github.com/openai/codex/issues/42299)（Alt+P 被全局拦截导致 Unreal Engine 无法播放）、[#42695](https://github.com/openai/codex/issues/42695)（回合内压缩复活过期指令并产生错误执行报告）。


## 四、重要 PR 进展（10 个）

当日 PR 多由 `copyberry[bot]` 提交并标记为 CLOSED，主题高度集中在 Windows 沙箱与 TUI 体验。

1. **[#45176](https://github.com/openai/codex/pull/45176) 将 Windows MXC 沙箱接入命令执行** — 新增显式 MXC 后端选择，并把其身份贯穿 exec-server 进程上报与沙箱违规分类，是当日最核心的架构性变更。

2. **[#45182](https://github.com/openai/codex/pull/45182) 复制 SID 前校验 Windows 沙箱令牌组** — 修复此前遍历令牌组条目与 SID 指针时不检查缓冲区边界的问题，属安全加固。

3. **[#45178](https://github.com/openai/codex/pull/45178) 将 Windows 沙箱清理拆分为准备与完成两阶段** — 通过 `prepare_packaged_windows_sandbox_cleanup` 在返回前禁用沙箱账户并停止其进程。

4. **[#45169](https://github.com/openai/codex/pull/45169) 将 Windows 沙箱 setup 与安装存储抽取进库** — 把 setup helper 实现及测试迁入 `codex-windows-sandbox`，二进制改为委托调用。

5. **[#45180](https://github.com/openai/codex/pull/45180) 抽取共享网络配置与环境策略 helper** — 引入 `PreparedNetworkConfig` 分离代理准备与应用托管网络要求，保留权限失败前的准备顺序。

6. **[#45185](https://github.com/openai/codex/pull/45185) 将直接工具调用元数据绑定到调用输出** — 在 call ID 复用时仍保持调用记录与输出的关联，保证完整性描述准确。

7. **[#45094](https://github.com/openai/codex/pull/45094) 基于内容而非序列化信封估算历史 token** — 避免消息 ID、元数据与 JSON 转义造成的 token 估算虚高。

8. **[#45090](https://github.com/openai/codex/pull/45090) 在 recap 中保留会话上下文并分离后续动作** — 针对 900 字节 recap 提示上限做出的调整，以容纳已完成进度、未决注意事项与近期修正。

9. **[#45135](https://github.com/openai/codex/pull/45135) TUI 中在换行到达前预览流式文本** — 修复未终止文本在换行或流结束前不可见、导致长单行响应"隐身"的问题。

10. **[#45149](https://github.com/openai/codex/pull/45149) musl 构建使用 OpenSSL 3.6.4** — 因最新 `openssl-src` 300.x 仍打包 3.6.3，改为直接构建 3.6.4 安全版本并保留 3.x ABI。

其他较小改动包括 [#45108](https://github.com/openai/codex/pull/45108)（手动重命名后取消待定的线程标题生成）、[#45116](https://github.com/openai/codex/pull/45116)（防止多行 report note 提前提交）、[#45124](https://github.com/openai/codex/pull/45124)（新增默认关闭的 `send_message_to_user_async` 特性开关）。


## 五、功能需求趋势

综合当日 Issues 的标签与内容，社区关注方向可归纳为：

- **跨环境一致性（Windows/WSL 为主）**：`windows-os` 标签在热门 Issue 中占比极高，涉及项目创建删除、启动、沙箱、浏览器控制、Computer Use、快捷键拦截等多个层面。
- **会话与任务生命周期管理**：队列消息编辑重发、线程工作目录在项目重命名后更新（#26836）、活跃任务固定展示（#33730）、压缩导致上下文错误（#42695），均指向长会话与多任务场景的可靠性。
- **Agent 记忆与指令自演化**：#40575 提出的 `/learn` 与 AGENTS.md 规则代谢，代表社区希望 Agent 具备跨周项目的持续学习能力。
- **资源与计费安全**：Marketplace 暂存目录泄漏（#39421）、WebSocket 重连消耗额度（#43045）、限额展示不一致（#41553）。
- **浏览器与凭据集成**：Edge 标签发现失败（#44169）、Cloud Browser 面板不出现（#37539）、in-app browser 支持 Apple Passwords 自动填充（#38004）。


## 六、开发者关注点

- **Windows 桌面端是当前最大痛点来源**：从无法启动、不创建窗口、沙箱参数超限，到 WSL 切换后功能失效，问题横跨安装、启动、沙箱与集成四层，且多条为阻断级。
- **沙箱实现细节被高度关注**：本日 PR 密集修整 Windows 沙箱的令牌校验、清理阶段与参数传递，与 #38985、#45119 等 Issue 形成明确的问题—修复对应关系。
- **计费与额度的可感知风险最敏感**：涉及额度消耗、限额展示与重连扣费的 Issue 虽评论数不高，但一旦成立即影响用户信任。
- **长会话上下文的正确性**：压缩、token 估算、recap 内容与指令复活等问题表明，上下文管理仍是 Agent 可靠性的关键短板。
- **TUI/桌面交互细节待打磨**：流式文本预览、报告表单提交、线程标题自动生成取消等，均为影响日常手感的细粒度体验问题。

---

*本日报仅基于所提供的 GitHub 数据整理，未包含外部信息。*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报（2026-09-13）

## 1. 今日速览

今日发布 v0.61.0-nightly.20260913.g9c1b0a610 夜间版本，无其他功能性变更公告。社区讨论集中在 **agent 可靠性**（子代理挂起、MAX_TURNS 误报成功、浏览器代理失败）与 **Auto Memory 隐私/稳定性** 两大方向，多条 p1 级 Issue 已标记 `status/need-retesting`，进入验证阶段。PR 队列以小型修复为主，覆盖 UI 渲染、hooks 迁移和配置解析等具体缺陷。

## 2. 版本发布

- **v0.61.0-nightly.20260913.g9c1b0a610**：自动化夜间版本，仅包含日常版本号递增，无独立变更说明。
  对应机器人 PR #29300：https://github.com/google-gemini/gemini-cli/pull/29300
  Changelog：https://github.com/google-gemini/gemini-cli/compare/v0.61.0-nightly.20260912.g9c1b0a610...v0.61.0-nightly.20260913.g9c1b0a610

## 3. 社区热点 Issues

1. **#22323 [p1] 子代理 MAX_TURNS 中断被上报为 GOAL 成功**（13 条评论）
   子代理在未做任何分析前触达最大轮次限制，却返回 `status: "success"`，掩盖了中断事实。这属于错误状态上报，会直接影响上层任务的正确性判断，是当前 agent 工作流可信度的核心隐患。
   https://github.com/google-gemini/gemini-cli/issues/22323

2. **#21409 [p1] Generalist agent 无限挂起**（8 条评论，8 个 👍）
   只要 CLI 委托给通用代理就会永久卡死，简单如创建文件夹也如此，用户等待长达一小时。👍 数最高，说明影响面广，用户已找到"禁止委托子代理"的规避方案。
   https://github.com/google-gemini/gemini-cli/issues/21409

3. **#19873 [p2] 通过零依赖 OS 沙箱与执行后意图路由利用模型的 bash 亲和性**（9 条评论）
   提出 Gemini 3 模型本质上是"原生 bash 用户"，可串联 `grep`/`cat`/`sed`/`awk` 探索代码库。这是对 agent 执行架构的方向性提案，可能影响后续工具体系设计。
   https://github.com/google-gemini/gemini-cli/issues/19873

4. **#21968 [p2] Gemini 不使用 skills 和子代理**（6 条评论）
   用户反馈除非显式指令，模型几乎不会主动调用自定义 skills 和子代理，即使任务高度相关。这直接削弱了扩展机制的实用价值。
   https://github.com/google-gemini/gemini-cli/issues/21968

5. **#26525 [p2] 增加确定性脱敏并减少 Auto Memory 日志**（5 条评论）
   Auto Memory 读取本地会话记录并发送给后台抽取模型，脱敏发生在内容已传输之后，属于隐私时序缺陷。与 #26522、#26523 构成同一组问题。
   https://github.com/google-gemini/gemini-cli/issues/26525

6. **#26522 [p2] 阻止 Auto Memory 无限重试低信号会话**（4 条评论）
   仅当抽取代理成功 `read_file` 才标记会话已处理，若代理判定低信号而跳过，该会话会被反复重试，造成资源浪费。
   https://github.com/google-gemini/gemini-cli/issues/26522

7. **#25166 [p1] Shell 命令执行完成后卡在 "Waiting input"**（4 条评论，3 个 👍）
   命令已结束，UI 仍显示 shell 处于活跃并等待用户输入。这是高频交互路径上的阻塞性缺陷。
   https://github.com/google-gemini/gemini-cli/issues/25166

8. **#22745 [p2] 评估 AST 感知的文件读取、搜索与映射**（7 条评论）
   EPIC 级调研：AST 感知工具可精确读取方法边界，减少工具调用轮次。代表社区对"减少 turn 数、提升精度"的工程探索。
   https://github.com/google-gemini/gemini-cli/issues/22745

9. **#22267 [p2] Browser Agent 忽略 settings.json 覆盖（如 maxTurns）**（3 条评论）
   浏览器代理完全忽略全局与项目级配置覆盖，用户无法约束其行为，与 #22232（会话接管与锁恢复）、#21983（Wayland 下失败）共同暴露浏览器代理的成熟度不足。
   https://github.com/google-gemini/gemini-cli/issues/22267

10. **#22672 [p2] 代理应停止/劝阻破坏性行为**（3 条评论，1 个 👍）
    模型在复杂 git 操作中可能使用 `git reset` 或 `--force`，即使存在更安全的替代方案。安全护栏类需求。
    https://github.com/google-gemini/gemini-cli/issues/22672

其他值得留意的条目：#24246（工具数超过约 128/400 时触发 400 错误）、#23571（模型在随机位置生成临时脚本）、#20079（符号链接形式的 agent 文件不被识别）、#29296（截断边界丢失 emoji）。

## 4. 重要 PR 进展

1. **#29303 fix(cli): 保持 ExpandableText 截断边界的代理对完整**
   修复截断索引落在 emoji 高位代理时 Ink 静默丢弃字符的问题，与 Issue #29296 对应。
   https://github.com/google-gemini/gemini-cli/pull/29303

2. **#29222 [p1/p2] fix(config): 阻止重写显式固定的 flash 模型**
   使用 `--model gemini-2.5-flash` 时，模型解析逻辑会在支持 Gemini 3.5 Flash 的后端（如 Vertex AI）静默改写为 `gemini-3.5-flash`，对需要固定模型的环境影响较大。
   https://github.com/google-gemini/gemini-cli/pull/29222

3. **#29163 [p1] fix(cli): 防止在 git 仓库中认证时崩溃**
   修复 macOS Seatbelt 等受限权限环境下，`useGitBranchName` hook 导致的启动崩溃。
   https://github.com/google-gemini/gemini-cli/pull/29163

4. **#29208 [p2] fix(core): agents.json 结构异常时回退为空**
   损坏的 `agents.json`（合法 JSON 但结构错误）会导致 `isAcknowledged`/`acknowledge` 抛出 TypeError 或静默丢数据。
   https://github.com/google-gemini/gemini-cli/pull/29208

5. **#27863 [p1] fix(core): 优先使用结构化显示标题**
   修复工具调用的结构化 display title 未被正确优先展示的问题，Fixes #23018。
   https://github.com/google-gemini/gemini-cli/pull/27863

6. **#27862 [p2] fix(cli): UI 中保留执行中的子代理工具调用**
   修复子代理工具调用在仍活跃时从界面消失的问题，Fixes #22589。
   https://github.com/google-gemini/gemini-cli/pull/27862

7. **#27860 [p2] fix(cli): 冲突重现时重置斜杠命令去重**
   修复已解决的冲突再次出现时不再通知的去重缺陷，Fixes #24333。
   https://github.com/google-gemini/gemini-cli/pull/27860

8. **#27754 [p1] fix(a2a-server): GET /tasks/metadata 返回 501 后补充 return**
   缺失 `return` 导致继续执行后续逻辑并抛出 `ERR_HTTP_HEADERS_SENT`。
   https://github.com/google-gemini/gemini-cli/pull/27754

9. **#29125 / #29124 [p2] hooks 迁移修复（已关闭）**
   前者修正 Claude Code 以秒为单位、Gemini CLI 以毫秒解释的超时换算；后者修正 `SubagentStop` 事件键大小写不匹配。两者均属迁移正确性问题。
   https://github.com/google-gemini/gemini-cli/pull/29125
   https://github.com/google-gemini/gemini-cli/pull/29124

10. **#29126 fix(a2a-server): 在 a2a SDK 路由前挂载 express.json（已关闭）**
   修复 A2A SDK 路由收到 `req.body` 为 undefined、导致 JSON 解析失败的问题，Fixes #29073。
    https://github.com/google-gemini/gemini-cli/pull/29126

## 5. 功能需求趋势

- **Agent 编排与子代理可靠性**：最多条目集中于此——子代理挂起、状态误报、不被主动调用、符号链接识别、浏览器代理配置失效。
- **Auto Memory 治理**：隐私脱敏时序、无效补丁隔离、低信号会话重试，构成一组系统性的内存子系统改进需求（#26525/#26522/#26523）。
- **Auto Memory 与本地数据边界**：社区开始关注本地会话内容传给后台模型前的处理顺序。
- **AST 感知的工具能力**：以 #22745 为代表，探索以更少轮次完成更精确的代码读取与搜索。
- **沙箱与执行模型**：#19873 提出的 OS 沙箱 + bash 亲和路线，指向执行层的架构演进。
- **安全护栏**：限制破坏性命令（#22672）、工具数量上限处理（#24246）。
- **跨环境兼容与配置一致性**：Wayland、macOS Seatbelt、settings.json 覆盖失效。
- **UI/渲染健壮性**：截断边界、执行中状态显示等终端渲染细节。

## 6. 开发者关注点

- **"卡住"体验**：shell 命令完成后仍显示等待输入（#25166）、通用代理无限挂起（#21409）是两个最直接的阻塞性痛点，后者 👍 数最高。
- **状态可信度**：MAX_TURNS 被上报为 GOAL 成功（#22323），使开发者无法信任代理返回的成功信号。
- **扩展机制不被采纳**：自定义 skills 与子代理需要显式指令才生效（#21968），降低了扩展生态的实际收益。
- **配置与模型契约**：显式指定的模型被静默改写（#29222）、浏览器代理忽略 settings.json（#22267），破坏用户对配置的预期。
- **隐私时序**：脱敏在内容传输之后执行（#26525），使本地数据外发路径缺乏确定性保障。
- **环境兼容性**：git 仓库认证崩溃（#29163）、Wayland 浏览器代理失败（#21983）显示特定平台仍不稳定。

---
*本日报仅基于 github.com/google-gemini/gemini-cli 在 2026-09-13 更新周期内提供的 Releases、Issues 与 Pull Requests 数据整理。*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报（2026-09-13）

> 数据来源：github.com/github/copilot-cli ｜ 过去 24 小时 Releases：无

## 一、今日速览

今日无新版本发布。社区动态集中在 **1.0.83 版本的回归问题**：Workspace `.mcp.json` 完全不被加载，以及 ctrl-t 队列提示无法自动执行。同时，围绕子代理（subagent）可观测性与 token 成本的讨论持续升温，长期存在的 Linux 平台内存溢出问题仍在更新。

## 二、版本发布

过去 24 小时内无新 Release。

## 三、社区热点 Issues

> 注：过去 24 小时内更新的 Issue 共 8 条，以下全部列出并逐条说明。

1. **[OPEN] #4832 Workspace .mcp.json 在 CLI 1.0.83 中完全不被加载**
   `copilot mcp list` 不再输出 `Workspace` 分组，仅显示 `User servers:`；仓库根目录的 `.mcp.json` 被忽略。作者强调这不是显示问题，而是配置实际未被读取。当日新建、零评论，属于潜在的版本回归，对依赖项目级 MCP 配置的团队影响直接。
   🔗 github/copilot-cli Issue #4832

2. **[CLOSED] #2147 CAIP 400: input item ID does not belong to this connection**
   执行失败并抛出 `CAPIError: 400 websocket_error`，报错信息为 "input item ID does not belong to this connection"。该 Issue 自 3 月创建、累计 7 条评论，今日关闭，是本期评论数最多的议题。
   🔗 github/copilot-cli Issue #2147

3. **[OPEN] #4825 [area:platform-linux] 频繁出现 JavaScript heap out of memory**
   Linux 平台上 CLI 每隔几分钟即因堆内存耗尽崩溃（日志显示 Mark-Compact 后仍占用约 3.9 GB）。自 9 月 4 日创建以来持续更新，属长期未解的性能类问题，对 Linux 用户可用性影响严重。
   🔗 github/copilot-cli Issue #4725

4. **[OPEN] #4829 [triage] 子代理单轮内长工具调用序列导致 prompt 缓存失效并放大 token 消耗**
   环境为 Copilot CLI v1.0.83 / Windows 11 / Gemini 3.8 Flash。自主子代理通过在单轮内连续执行长工具调用序列，破坏了 prompt 缓存，造成 token 消耗叠加。这是少见的直接指向成本效率的缺陷报告，值得优先关注。
   🔗 github/copilot-cli Issue #4829

5. **[OPEN] #2254 [area:agents] 为后台子代理增加实时进度流**
   面向多阶段编排型代理（如 plan → implement 的功能生命周期）提出更丰富的代理可观测性。自 3 月创建、讨论延续至今日，反映编排场景下"黑盒执行"的普遍痛点。
   🔗 github/copilot-cli Issue #2254

6. **[OPEN] #4824 [triage] ctrl-t 入队提示不生效**
   ctrl-t 可将提示加入队列，但在代理完成前一条提示后不会执行，UI 停留在 'Working' 无限转圈。作者建议自动依次执行队列中的提示。直接影响日常交互流。
   🔗 github/copilot-cli Issue #4824

7. **[OPEN] #4831 [triage] 粘贴一张图片后 claude-opus-5 无法再查看任何图片**
   在 claude-opus-5 会话中粘贴截图后，所有 `view` 调用均返回 "You've reached the maximum number of images you can view (1)"，疑似图像配额被错误计数。涉及新模型的图像处理路径，需尽快定位。
   🔗 github/copilot-cli Issue #4831

8. **[OPEN] #4830 [triage] 建议新增 /remove-dir 命令以回收目录访问权限**
   当前已有 `/add-dir` 和 `/list-dirs`，但缺少移除已授权目录的命令，用户无法在会话中缩小目录访问范围，只能重启会话。属于权限最小化方面的易用性缺口。
   🔗 github/copilot-cli Issue #4830

## 四、重要 PR 进展

> 注：过去 24 小时内更新的 PR 共 3 条，均为依赖与安全类变更，且状态均为 CLOSED。

1. **[CLOSED] #4827 [dependencies, github_actions] 升级 actions/stale 9.1.0 → 11.0.0**
   Dependabot 自动提交，跨两个主版本升级。属仓库自动化维护变更，无功能影响。
   🔗 github/copilot-cli PR #4827

2. **[CLOSED] #4828 [dependencies, github_actions] 升级 actions/github-script 7.1.0 → 9.0.0**
   Dependabot 自动提交。同为 CI 工作流依赖的主版本升级。
   🔗 github/copilot-cli PR #4828

3. **[CLOSED] #4808 将 GitHub Actions 固定到 commit SHA**
   由 github-security-bot 提交，将 `uses:` 引用固定为不可变 commit SHA。变更摘要：文件变更 4 个、扫描文件 3 个、发现引用 3 个、已固定 3 个、跳过 0 个。属供应链安全加固。
   🔗 github/copilot-cli PR #4808

## 五、功能需求趋势

基于本期全部 8 条 Issue 与 3 条 PR，可提炼出以下方向：

- **代理可观测性**：后台子代理缺少实时进度反馈（#2254），编排型多阶段代理尤为明显。
- **成本与性能效率**：prompt 缓存失效导致 token 消耗放大（#4829）、Linux 堆内存溢出（#4725），均指向资源开销问题。
- **配置与集成可靠性**：Workspace `.mcp.json` 不加载（#4832），说明项目级 MCP 集成路径存在回归风险。
- **交互与权限控制**：提示队列不执行（#4824）影响日常交互，缺少 `/remove-dir`（#4830）使权限只能增加不能减少。
- **新模型适配**：claude-opus-5 图像查看配额异常（#4831），反映多模型支持的边界情况仍需打磨。
- **供应链安全**：Actions 固定 SHA（#4808）与依赖升级（#4827、#4828）显示仓库侧自动化维护在持续进行。

## 六、开发者关注点

- **版本回归风险突出**：1.0.83 同时出现 MCP 配置不加载与图像查看配额异常两个问题，建议该版本用户留意。
- **成本敏感度上升**：开发者开始直接报告 token 消耗叠加问题，而不仅是功能是否可用，说明使用成本已成为核心评价维度。
- **长期未解问题在消耗耐心**：Linux 内存溢出（#4725，9 月初创建）、子代理进度流（#2254，3 月创建）均延续至今，社区关注度虽不高但持续时间长。
- **交互细节影响体验**：ctrl-t 队列挂起这类小问题会直接打断工作流，属于高频日常痛点。
- **权限最小化诉求明确**：只能授权、不能回收的目录访问机制，与安全敏感团队的实际需求存在落差。

---

*说明：本期过去 24 小时内无新 Release；Issues 与 PR 数量分别为 8 条和 3 条，均已在报告中完整覆盖。*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报（2026-09-13）

## 今日速览

今日无新版本发布，社区动态集中在一条长期功能需求与一份文档改进上。Issue #2370 提出为 Web UI 队列面板增加 Steer（⚡）按钮，便于在 AI 运行中调整输入，该请求已获 2 个 👍。PR #2641 则针对 OpenAI 兼容 provider 的配置说明做了澄清，降低自定义接入的踩坑概率。需要说明的是，本期数据仅覆盖各 1 条 Issue 与 PR，无法支撑 10 条条目的汇总。

## 版本发布

过去 24 小时内无新 Release。

## 社区热点 Issues

本期仅有 1 条更新 Issue，无法挑选 10 条，以下为全部内容：

1. **#2370 [OPEN] [enhancement] Feature Request: Add Steer (⚡) button to Web UI queue panel**
   - 作者: 2986787982dsx-ui | 创建: 2026-05-26 | 更新: 2026-09-12 | 评论: 1 | 👍: 2
   - 链接: https://github.com/MoonshotAI/kimi-cli/issues/2370
   - 重要性：该需求聚焦 Web UI 的交互控制能力。当前通过 Windows PowerShell 执行 `kimi web` 启动 Kimi Code Web UI 后，当 AI 正在运行时按 `Enter` 的行为未满足用户预期，用户希望在队列面板中加入 Steer（⚡）按钮，以便在任务执行过程中进行干预或调整。
   - 社区反应：Issue 创建于 2026-05-26，至 2026-09-12 仍有更新，说明该需求具有持续性；获得 2 个 👍 和 1 条评论，属于小众但明确的交互改进诉求。由于数据中未提供评论具体内容，此处不作推测。

## 重要 PR 进展

本期仅有 1 条更新 PR，无法挑选 10 条，以下为全部内容：

1. **#2641 [OPEN] docs(providers): clarify OpenAI-compatible configuration**
   - 作者: QIU-Guanzong | 创建: 2026-09-13 | 更新: 2026-09-13
   - 链接: https://github.com/MoonshotAI/kimi-cli/pull/2641
   - 内容：属于文档类改动。摘要指出两点：一是澄清自定义 OpenAI 兼容 provider 需要提供 API-root 形式的 base URL 以及该服务所接受的 model ID；二是说明非空的 `OPENAI_BASE_URL` 与 `OPENAI_API_KEY` 会覆盖 `openai_...` 相关 provider 字段。
   - 价值：帮助使用第三方 OpenAI 兼容服务的开发者正确配置环境变量与 provider 字段，减少因覆盖优先级不明确导致的接入问题。

## 功能需求趋势

基于本期仅有的 Issue #2370 数据，可提炼出的方向为：

- **Web UI 交互控制与任务干预**：用户希望在 AI 运行过程中具备更直接的控制入口（如 Steer ⚡ 按钮），并能通过队列面板管理或调整正在进行的任务。

需要说明：由于本期 Issue 样本仅 1 条，上述趋势仅代表该条需求所反映的方向，不足以概括社区整体功能关注面（如 IDE 集成、性能、新模型支持等方向在本期数据中均无对应条目）。

## 开发者关注点

- **Web UI 运行时输入行为**：Issue #2370 反映 AI 运行中按 `Enter` 的行为与预期不符，开发者关注的是任务执行期间的可控性与操作反馈。
- **OpenAI 兼容 provider 配置清晰度**：PR #2641 表明自定义 provider 的 base URL 形式、model ID 要求以及 `OPENAI_BASE_URL` / `OPENAI_API_KEY` 对 provider 字段的覆盖关系此前存在理解成本，是接入环节的常见痛点。

---

**数据说明**：本期日报基于 github.com/MoonshotAI/kimi-cli 在过去 24 小时内更新的 1 条 Issue 与 1 条 PR 生成。由于样本量有限，第 3、4 部分按实际数据列出全部条目，未凑满 10 条；第 5、6 部分的结论仅适用于本期可见数据，不代表项目整体趋势。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报（2026-09-13）

## 今日速览

今日无新版本发布，社区焦点集中在 **V2/新布局的回归问题** 与 **Zen 平台 Muse Spark 系列的 provider 报错**（`encrypted_content was not issued to this caller`），短时间内出现多条同类 Issue。同时，围绕**顶部标签式 UI 的可用性争议**（垂直标签、侧边栏会话列表、无法切回旧布局）持续升温，成为今日讨论主线。

---

## 社区热点 Issues

1. **#36942 [FEATURE]: Vertical tabs**（👍31，评论17）
   请求将新 UI 强制的水平标签改为垂直标签，理由是水平标签严重影响 diff 查看。这是今日点赞最高的 Issue，说明新 UI 布局是当前社区最大争议点。
   https://github.com/anomalyco/opencode/issues/36942

2. **#43277 Sessions permanently stuck during normal use — survive reboots, cannot be recovered**（评论11）
   多个会话在正常使用中永久卡死、重启后仍无法恢复，属于影响可用性的严重问题。
   https://github.com/anomalyco/opencode/issues/43277

3. **#37815 [Bug] Error from provider (Console Go): Upstream request failed — Kimi K3**（👍9，评论11）
   Kimi K3 在模型列表中可见但选中即报错，且仅该模型异常，指向模型接入层配置问题。
   https://github.com/anomalyco/opencode/issues/37815

4. **#48741 [2.0] Opencode Zen critical errors on Muse Spark family**（评论10）
   使用 Muse Spark 系列时收到 `reasoning encrypted_content was not issued to this caller`，是今日 Zen 平台同类报错的核心讨论帖。
   https://github.com/anomalyco/opencode/issues/48741

5. **#48645 Regression in 1.18.30: every prompt crashes with TypeError in SystemPrompt.environment**（评论2）
   升级到 1.18.30 后所有 prompt 立即失败（1.18.18 正常），属于典型的版本回归，对升级用户影响直接。
   https://github.com/anomalyco/opencode/issues/48645

6. **#45750 Bug: Anthropic prompt caching not applied with custom provider name via proxy**（评论6）
   通过第三方代理走 Anthropic 原生协议时 prompt 缓存命中率恒为 0%，对成本敏感的用户影响显著。
   https://github.com/anomalyco/opencode/issues/45750

7. **#35432 Config `tool_call: false` does not disable tools**（评论4）
   配置项被 prompt 循环忽略，仍无条件下发工具与 `tool_choice: "auto"`，属于配置语义失效问题。
   https://github.com/anomalyco/opencode/issues/35432

8. **#42031 Desktop: new session page has no file tree (button absent) with New layout designs enabled**（👍2，评论4）
   新布局下新建会话页面完全找不到文件树入口，进一步加深对“新布局功能缺失”的反馈。
   https://github.com/anomalyco/opencode/issues/42031

9. **#48762 [2.0] [Windows] Non-git projects get an absolute session.path, hiding those sessions from the TUI session list**（评论3）
   Windows 非 git 项目会话路径写成绝对路径，导致会话在 TUI 列表中不可见，属于数据/路径处理缺陷。
   https://github.com/anomalyco/opencode/issues/48762

10. **#48787 [Bug] First write after an LSP server cold-start returns no diagnostics（评论2）
    LSP 冷启动后首次写入完全不返回 diagnostics，形成“静默假干净”结果，对依赖静态检查的工作流风险较高。
    https://github.com/anomalyco/opencode/issues/48787

*其他值得留意：#44007（TUI `--auto` 卡住后台标签的权限请求）、#39632（v2 输入框 IME 首键失效）、#39835（新用户无法切回旧布局）、#48792/#48773/#48795（Zen 订阅与 Muse Spark 报错）。*

---

## 重要 PR 进展

1. **#48775 [CLOSED] fix(provider): strip reasoning replay for models without interleaved support**
   修复 `cerebras/qwen-3.8-27b` 因 reasoning 片段被重放导致的无限重试循环（Fixes #48774）。
   https://github.com/anomalyco/opencode/pull/48775

2. **#48793 [OPEN] feat(v2): allow disabling Anthropic thinking block binding**
   为 V2 补上 V1 已有的 blockBinding 关闭开关（Fixes #48757），缓解 Claude 模型相关兼容问题。
   https://github.com/anomalyco/opencode/pull/48793

3. **#48782 [CLOSED] fix(tui): force terminal reset on any exit path**
   修复 Windows ConPTY（Alacritty + zellij-windows）下退出后残留 raw mode、备用屏等状态的问题（Fixes #48776）。
   https://github.com/anomalyco/opencode/pull/48782

4. **#48796 [OPEN] fix(desktop): [v2] run WSL commands with `--exec`**
   修复 Windows 桌面 V2 添加 WSL 服务器始终失败（误报“OpenCode not installed”）的问题（Closes #48640）。
   https://github.com/anomalyco/opencode/pull/48796

5. **#48798 [OPEN] feat(tui): add inline home footer slot**
   为 TUI 插件新增类型化的 `home.footer.status` 槽位，对应 Issue #48797，提升插件扩展能力。
   https://github.com/anomalyco/opencode/pull/48798

6. **#48791 [OPEN] fix(app): query worktree inventory without booting locations**
   新增全局 `GET /api/worktree/inventory`，在不获取 Location、不启动插件/MCP 的情况下查询 worktree 清单，改善启动性能。
   https://github.com/anomalyco/opencode/pull/48791

7. **#48788 [OPEN] fix(opencode): show actionable error details when `opencode serve` fails**
   在端口占用、权限不足等场景下输出可操作的错误信息（Closes #48784），降低排障成本。
   https://github.com/anomalyco/opencode/pull/48788

8. **#48368 [OPEN] fix(installation): handle Windows upgrade by scheduling binary replacement**
   通过延迟替换二进制解决 Windows 升级失败问题（Closes #37055）。
   https://github.com/anomalyco/opencode/pull/48368

9. **#48779 [OPEN] fix(client): default SSE Accept headers**
   将生成的 SSE 请求默认设为 `Accept: text/event-stream`（Closes #48771）。
   https://github.com/anomalyco/opencode/pull/48779

10. **#44348 [OPEN] feat(app): add word-level diff highlighting**
    为桌面端新增可选的词级 diff 高亮（Closes #36824），与社区对 diff 可读性的诉求呼应。
    https://github.com/anomalyco/opencode/pull/44348

*生态文档类：#48804（新增 Figranium 插件）、#47625（新增 voice-mcp）、#48509（Docker Agent 状态说明）。*

---

## 功能需求趋势

- **UI 布局重构呼声最高**：垂直标签（#36942）、以侧边栏会话列表替代顶部标签（#48802）、恢复布局切换开关（#39835）、新建会话页找回文件树（#42031）——围绕“新布局”的诉求已从审美偏好升级为对会话丢失与操作效率的实质担忧。
- **插件与扩展性**：TUI 插件期望以增量方式扩展 `home.footer`（#48797），并有生态列表 PR 跟进（#48804、#47625）。
- **模型接入与兼容**：Kimi K3（#37815）、Muse Spark 系列（#48741、#48795、#48773）、Anthropic 缓存与 thinking 绑定（#45750、#48793）——新模型与协议兼容是持续的摩擦来源。
- **配置语义正确性**：`tool_call: false` 被忽略（#35432）反映用户对配置“所见即所得”的期望。
- **性能与启动行为**：worktree 查询避免启动插件/MCP（#48791）呼应减少启动开销的方向。

---

## 开发者关注点

1. **回归风险**：1.18.30 全量 prompt 失败（#48645）、Anthropic 缓存失效（#45750）、LSP 冷启动静默无诊断（#48787）说明升级前的回归验证是当前最痛的环节。
2. **会话可靠性**：会话永久卡死且跨重启不可恢复（#43277）、Windows 非 git 项目会话在列表中消失（#48762）——会话作为核心资产，任何丢失都不可接受。
3. **Provider 层报错体验**：`encrypted_content was not issued to this caller` 在 Zen 多个模型上重复出现（#48741、#48773、#48795、#48792），且部分 Issue 被标记 `needs:compliance` 后关闭，用户缺少明确解释与替代方案。
4. **Windows / 终端环境适配**：WSL 服务器添加失败（#48796）、ConPTY 退出残留状态（#48782）、安装升级失败（#48368）——Windows 平台缺陷密度偏高。
5. **错误信息可用性**：`opencode serve` 失败信息需要可操作化（#48788）、zen 订阅报错“unexpected server error”缺乏指引（#48792），开发者希望报错能直接指向原因与修复动作。

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报（2026-09-13）

## 今日速览

今天没有新版本发布，但 Issues 与 PR 活动非常密集：大批 9-13 当天创建的 Issue 被快速标记为 CLOSED/untriaged，主要集中在 TUI 渲染、启动性能与会话管理。核心维护者 mitsuhiko 提交了 #9548「Mid conversation system messages」，尝试把系统提示词与工具变更纳入 transcript，是架构层面较有分量的改动。性能议题持续升温，#7739 提出为 pi 设定对标 jcode 的启动时延与内存预算。

## 版本发布

过去 24 小时无新 Release。

## 社区热点 Issues

1. **#7739 [OPEN] 设定对标 jcode 的启动时延与内存预算** — 要求以 jcode README 基准为参照，缩小 pi 0.62.0 在交互式 PTY 启动延迟与内存上的差距。性能基准类提案，评论 6 条，是当前讨论度最高的开放 Issue。
   https://github.com/earendil-works/pi/issues/7739

2. **#9474 [OPEN] Codex transport 缺少不可重置的每请求总超时** — 指出 SSE/WebSocket 流只要周期性发事件（心跳）就能绕过 idle timeout，导致请求可能无限挂起。涉及传输层可靠性，评论 3 条。
   https://github.com/earendil-works/pi/issues/9474

3. **#9243 [OPEN] 会话恢复从回声模型名而非 model_change 恢复模型** — 当 provider 回声的模型名与实际路由 id 不一致时会恢复错误模型，指向 `session-manager.ts` 的 `getSessionContextSettings`。有 1 个 👍，属正确性缺陷。
   https://github.com/earendil-works/pi/issues/9243

4. **#9311 [OPEN] 全屏鼠标选区在切换会话后残留** — 全屏 TUI 中选中文本后新建/切换会话，选区仍保留在新会话里。用户可见的交互 bug，评论 6 条。
   https://github.com/earendil-works/pi/issues/9311

5. **#9098 [OPEN] 在 RPC 响应中暴露 prompt 处置状态** — 建议在成功的 RPC `prompt` 响应中加入 `data.disposition: "handled" | "queued" | "started"`，复用现有 preflight 决策。对 SDK/扩展开发者很实用，评论 4 条。
   https://github.com/earendil-works/pi/issues/9098

6. **#9549 [CLOSED] 大 transcript 每帧重渲染、每次 resize 重放全部内容（单核满载）** — 报告者在 Windows 11 / Windows Terminal 用 `pi -ne` 验证复现，并依 CONTRIBUTING.md 披露由本地 pi agent 起草。典型性能回归。
   https://github.com/earendil-works/pi/issues/9549

7. **#9542 [CLOSED] 流式 UI 重复渲染首个 thinking token** — `message_start` 快照与 `assistantMessageEvent` 增量共享可变内容，导致出现「TheThe」「SimpleSimple」这类重复。TUI 流式渲染共性问题。
   https://github.com/earendil-works/pi/issues/9542

8. **#9546 [CLOSED] GitHub Copilot OAuth 刷新在 Node/undici 下返回 403** — Windows 上刷新 Copilot 凭据失败，报错信息显示与 GitHub 反爬策略相关。影响登录可用性。
   https://github.com/earendil-works/pi/issues/9546

9. **#9481 [OPEN] 让 Pi 对齐 Codex 的规范化 turn 归属元数据** — 主张一个 `turn_id` 覆盖一次顶层 agent run 的所有模型请求（含工具结果续接），配套 PR #9488。协议兼容性方向。
   https://github.com/earendil-works/pi/issues/9481

10. **#9530 [CLOSED] 新增 Google Antigravity 与 Cursor Pro OAuth provider** — 两个订阅制、浏览器 OAuth 登录、无需 API key 的 provider，Antigravity 还需新的 stream 实现。新模型/服务接入类需求，并有对应 PR #9529。
    https://github.com/earendil-works/pi/issues/9530

（其他值得留意的关闭项：#9545 批量 edit 的唯一性检查重复做全文件归一化、#9540 扩展加载器在 import 期即加载 jiti 与整个 TUI 依赖图——两者都与启动性能直接相关；#9547 会话选择器跨工作目录错误嵌套、#9537 SDK 嵌入时 `/login` 状态行显示全局 auth.json 路径。）

## 重要 PR 进展

1. **#9548 [OPEN] Mid conversation system messages**（mitsuhiko）— 把系统提示词文本与工具变更写入 transcript，而非静默改写起始条件，使指令变更可记录、可在恢复/新会话时还原。今日最具架构意义的 PR。
   https://github.com/earendil-works/pi/pull/9548

2. **#9488 [OPEN] fix(ai): 增加规范化 Codex turn 归属** — 补上 Codex 的 session/thread/turn/window/request-kind 元数据，使同一用户输入组内的请求在工具续接、重试、steering、压缩恢复后仍可可靠归属。对应 Issue #9481。
   https://github.com/earendil-works/pi/pull/9488

3. **#9096 [OPEN] feat(ai,coding-agent): 新增 Meta provider 及 Muse 订阅 OAuth** — 解决 #7543；注意其 refresh 机制特殊（API token 由 identity token 每日重新签发），流式实现目前较受限。
   https://github.com/earendil-works/pi/pull/9096

4. **#9543 [CLOSED] feat: 面向模型的 Exit 工具调用** — 让模型主动结束当前 chat，主要用于用户输入 `/exit` 或「bye」但不知正确关闭方式的场景。对应 Issue #9544。
   https://github.com/earendil-works/pi/pull/9543

5. **#9541 [CLOSED] fix(tui): 显示可读的模型名称** — 模型选择器此前把原始模型/提供商标识符作为主标签，友好名称被降级到次要行；受治理的 catalog 已提供人类可读名称。
   https://github.com/earendil-works/pi/pull/9541

6. **#9539 [CLOSED] examples: 新增 loop-guard 扩展** — 检测并打断「连续重复同一工具调用（同工具同参数）」这一常见 agent 失败模式，作为示例扩展提供。
   https://github.com/earendil-works/pi/pull/9539

7. **#9531 [CLOSED] feat(tree): 会话树支持永久删除分支** — 实现 `SessionManager.pruneBranch` + `countSubtree`：移除离径条目及其整棵子树，保护活动路径、保留叶子、重新串联标签并重新指向存活的压缩点。
   https://github.com/earendil-works/pi/pull/9531

8. **#9529 [CLOSED] feat(ai): 新增 Google Antigravity 与 Cursor Pro OAuth provider** — 两个订阅制、浏览器 OAuth 流程、无需 API key 的 provider；Antigravity 走 `accounts.google.com`（Cloud Code Assist 客户端）并需本地回调服务器。
   https://github.com/earendil-works/pi/pull/9529

## 功能需求趋势

- **性能与启动开销成为主线**：#7739（启动时延/内存预算）、#9549（每帧重渲染）、#9540（扩展加载器 import 期加载过重）、#9545（批量 edit 重复归一化）共同指向启动时间与 CPU/内存占用。
- **新 provider / 订阅制登录**：#9530（Google Antigravity、Cursor Pro）、#9096（Meta Muse）、#9546（Copilot OAuth 刷新）显示社区对「无 API key、浏览器 OAuth」接入方式的强烈兴趣。
- **会话与 transcript 语义**：#9548、#9243、#9547、#9531 集中在会话恢复正确性、分支/树管理与系统消息可追溯性。
- **TUI 交互质量**：#9311（选区残留）、#9542（thinking token 重复）、#9538（ScrollView 不转发鼠标事件）、#9536（模态提示的作用域可见性覆盖）构成一组密集的终端 UI 修复需求。
- **模型生命周期控制**：#9544/#9543（exit 工具）、#9054（`/new` 保留模型与 effort）、#4538（`/exit` 作为 `/quit` 别名）。
- **协议与元数据兼容**：#9481/#9488 对齐 Codex 的 turn 归属元数据。

## 开发者关注点

- **性能是最集中的痛点**：多个 Issue 直接指向启动耗时、单核满载、重复计算与过早加载依赖图，社区已在用基准（jcode README、交互式 PTY 启动）量化差距。
- **会话状态正确性反复被提及**：模型恢复错误、选区跨会话残留、选择器跨 cwd 错误嵌套、系统消息静默改写，说明会话边界与状态持久化仍有系统性问题。
- **流式渲染的共享可变状态**（#9542）与**传输层超时缺失**（#9474）反映底层抽象在真实 provider 行为（回声模型名、周期性心跳）下暴露出的边界缺陷。
- **认证链路脆弱**：Copilot OAuth 403、SDK 自定义 `agentDir` 下 `/login` 报告错误路径，影响嵌入式与 Windows 场景。
- **扩展生态与 SDK 可观测性需求上升**：#9098 要求 RPC 暴露 prompt 处置状态、#9539 提供 loop-guard 示例、#9540 关注扩展加载性能，表明扩展开发者正成为重要反馈来源。
- 今日大量 Issue 被快速关闭并标注 `untriaged`，说明存在一波集中分流处理；关注后续是否转为正式修复 PR。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报（2026-09-13）

## 1. 今日速览

过去 24 小时，React error #185 导致的 TUI 崩溃成为社区绝对焦点：至少 3 个独立 Issue（#11500、#11732、#11756）报告在同一类多后台 agent 场景下触发 Ink 布局监听器无限 setState 循环，跨 macOS/Linux、stable 0.23.3 与 main 分支均可复现。与此同时，架构层讨论升温：wenshao 提出将 agent harness 与执行环境解耦（#11695），并提交子 agent 容器化执行 PR（#11711）。发布侧更新了 CUA 驱动的预编译二进制与一个 nightly 版本。

## 2. 版本发布

**cua-driver-rs v0.20.6** — Qwen CUA Driver 预编译二进制（vendored 于 `packages/cua-driver`）：macOS 提供签名+公证的 universal binary 及 `QwenCuaDriver.app`；Linux 未签名（x86_64 + arm64，glibc 2.31 下限）；Windows 提供未签名 UIAccess worker 与原生 SDK payload（x86_64 + arm64）。（链接: QwenLM/qwen-code Releases）

**v0.23.3-nightly.20260912.54aa66834b** — nightly 构建：refactor(dingtalk) 移除过时的后台响应聚合（#11570）；`feat(channels)!` 移除了 me 通道（破坏性变更）。

## 3. 社区热点 Issues（10 条）

1. **#11500 [P1][OPEN]** TUI 在多后台 agent 连续完成时静默退出（未捕获 React #185，"Maximum update depth exceeded"），根因指向 Ink `useBoxMetrics` 布局监听器的 setState 循环。12 条评论，是当前讨论最集中的崩溃报告。（链接: QwenLM/qwen-code Issue #11500）

2. **#11732 [P1][OPEN]** 0.23.3 版本同类崩溃，且原生 monitor 任务仍在运行；已在两个独立会话复现。说明问题并非单一环境偶发。（链接: QwenLM/qwen-code Issue #11732）

3. **#11756 [P1][OPEN]** 同一 React #185 循环在"Virtualized History"开启时复现，stable 0.23.3 与 main 均可触发。三条 P1 报告互相印证，指向渲染层结构性缺陷。（链接: QwenLM/qwen-code Issue #11756）

4. **#11695 [P2][need-discussion]** tracking(core)：将 agent harness 与执行环境拆分为可寻址、可分离的运行时组件，涉及 sandbox、multi-agent、security。这是本轮最有分量的架构方向讨论，与 #11711 相互呼应。（链接: QwenLM/qwen-code Issue #11695）

5. **#11762 [P2][OPEN]** `/delete` 不会清理 `~/.qwen/tmp/<hash>/logs.json`，该文件累积某项目**所有会话**的完整对话内容（用户消息、助手回复、工具输出），且没有开关可禁用或限制。隐私风险明确。（链接: QwenLM/qwen-code Issue #11762）

6. **#11590 [P1][CLOSED]** 发往 DashScope OpenAI 兼容端点的请求被注入顶层 `metadata` 对象，经聚合网关转发给非 Qwen 模型（如 GLM-5.3-Flash）后因类型不匹配反序列化失败，一律返回 400，导致第三方模型完全不可用。已关闭，但暴露了接入第三方模型的兼容层问题。（链接: QwenLM/qwen-code Issue #11590）

7. **#11718 [P2][CLOSED]** Desktop AppImage 全局设置 `PYTHONHOME`/`PYTHONPATH` 指向 AppImage 挂载点，被子进程（含 stdio MCP server）继承，导致外部 Python 解释器崩溃。影响 Linux 桌面 + MCP 组合场景。（链接: QwenLM/qwen-code Issue #11718）

8. **#11724 / #11725 [P2]** 高内存占用提示（7.00 GB）导致 CLI 中断且无法续接任务，用户只能重新梳理进度。中文报告，反映长时运行会话的稳定性与恢复能力短板。（链接: QwenLM/qwen-code Issue #11724）

9. **#10065 [P2][CLOSED]** LM Studio 0.4.21 下即使无 MCP server、`tools.core=[]` 仍报 "failed to parse grammar"。本地推理后端兼容性问题，9 条评论。（链接: QwenLM/qwen-code Issue #10065）

10. **#11704 [P3][need-discussion]** 提议官方 Android 伴侣客户端，定位为 `qwen serve` 的瘦客户端（经 ACP），而非在手机上跑完整运行时。反映移动端接入的社区诉求。（链接: QwenLM/qwen-code Issue #11704）

其他值得留意：#11587（PR #11562 的延迟评审发现跟踪）、#10953（委派给子 agent 时 Todo 计划状态冻结 55m44s）、#7771（Desktop 持久化 mcp_config 未在启动时载入主进程 MCP proxy）。

## 4. 重要 PR 进展（10 条）

1. **#11711 feat(core): 为子 agent 增加容器执行** — Unix 主机上，可信操作者可通过 `QWEN_AGENT_EXECUTION_BACKEND=docker|podman` 强制普通子 agent 在容器中执行，agent 定义也可自行声明要求。是 #11695 架构方向的落地实现。（链接: QwenLM/qwen-code PR #11711）

2. **#11769 fix(core): 删除会话时同步清除其日志历史** — `Logger` 新增 `removeSessionMessages(sessionId)`，解决 #11762 指出的隐私残留问题。（链接: QwenLM/qwen-code PR #11769）

3. **#11086 feat(serve): 将扩展作用域限定到 workspace 运行时** — 让全局扩展目录通过各 workspace 选定的运行时可用，把扩展状态同步进活跃 workspace 运行时，并暴露 workspace 限定的 daemon/SDK 访问。（链接: QwenLM/qwen-code PR #11086）

4. **#11722 feat(web-shell): 可安装 PWA 支持** — 为 daemon 提供的 Web Shell 增加 PWA 安装能力，使用 Qwen Code 名称与图标；安装后启动直接打开服务器根路径，不内嵌凭据或会话地址。（链接: QwenLM/qwen-code PR #11722）

5. **#11163 feat(web-shell): 在工作区分支选择器中管理 git remote** — 从左侧栏 git pill 或 composer 分支 chip 打开的面板新增 Manage Remotes，可列出已配置 remote 及其 fetch/push 地址。（链接: QwenLM/qwen-code PR #11163）

6. **#9071 feat(core): 用体验信号门控 auto-skill 评审** — 将 AutoSkill 的纯计数触发替换为两个确定性门控：同一工具完成的 retry arc，或一次被接受的中途用户 steer，可在五次工具调用后安排评审。（链接: QwenLM/qwen-code PR #9071）

7. **#9768 feat(review): 将覆盖率做成封闭、分类的账本** — 让 `/review` 的分块覆盖率携带自身身份、说明每个缺口成因，并把"本次运行读了多少 diff"与"决定发布什么"分开报告。（链接: QwenLM/qwen-code PR #9768）

8. **#10938 feat(web-shell): 让 Session Workflow 依赖可导航并收敛界面** — 闭合 #8583 遗留的导航、形状与文档缺口，对计划 DAG 与 inspector chrome 做设计梳理。（链接: QwenLM/qwen-code PR #10938）

9. **#11752 fix(cli): 当原生光标已定位时抑制重复的软件光标** — 当终端原生光标已在输入插入符单元格上时，输入框不再绘制自身光标。（链接: QwenLM/qwen-code PR #11752）

10. **#11134 fix(ci): macOS E2E 分片瞬时全绿失败重试一次** — 为 macOS E2E 支路加上与 Linux `sandbox:none` 支路相同的、带预算约束的单次重试，减少无关 PR 被误红。（链接: QwenLM/qwen-code PR #11134）

其余修复类：#8646（扩展多 manifest 时优先 Claude manifest）、#10455（输出语言文件不可写时不再崩溃启动）、#11001（交互式 PTY 会话清理时等待结束）、#9305（VP 模式下短内容底部对齐）。

## 5. 功能需求趋势

- **多 agent / 后台 agent 稳定性**：最高优先级方向。三条 P1 崩溃报告全部与后台子 agent 完成时序相关，叠加 #10953（委派时 Todo 计划冻结）、#11711（子 agent 容器执行）、#11695（harness 与执行环境解耦），说明多 agent 是当前功能推进与缺陷暴露最集中的区域。
- **执行环境与安全沙箱**：从把工具执行位置做成可分离、可寻址的运行时组件，到容器化子 agent 执行，社区在推动更强的隔离与可控性。
- **平台与分发**：#11704 提议经 ACP 的 Android 瘦客户端；#11722 推进 Web Shell PWA 可安装化；#11718 暴露 AppImage 打包的环境变量泄漏。桌面/移动/Web 多端分发均在活跃演进。
- **本地与第三方模型兼容**：#10065（LM Studio grammar 解析）与 #11590（非 Qwen 模型 400 错误）共同指向接入第三方/本地推理后端时的协议兼容层需求。
- **会话数据与隐私治理**：#11762（日志残留）与 #11769（清理修复）构成一组，反映用户对本地会话数据生命周期管理的关注。
- **性能与内存**：#11724/#11725 的 7 GB 内存告警及任务不可续接，是长时运行场景的高频痛点。

## 6. 开发者关注点

1. **TUI 渲染层的无限更新循环是当前最紧迫的技术债**。React #185 + Ink 布局监听器 setState 循环在三个独立报告中被同一模式复现，且能击穿 stable 版本，直接导致进程静默退出、用户丢失上下文。修复优先级应高于常规功能开发。
2. **任务中断后不可恢复令人困扰**。内存溢出或崩溃后无法接续进度、只能重新梳理（#11724），配合 Todo 计划状态冻结 55 分钟（#10953），说明会话状态持久化与恢复机制需要加强。
3. **隐私与数据清理是明确的用户诉求**。日志文件保留全部会话完整对话内容且 `/delete` 不清理、无可配置开关，属于设计层面的疏漏，已有对应修复 PR（#11769）跟进。
4. **第三方模型链路需要协议层的健壮性**。自动注入的 `metadata` 字段在聚合网关上击穿非 Qwen 模型（#11590），本地推理后端的 grammar 解析失败（#10065），共同暴露了请求构造层对异构后端的适配不足。
5. **CI 与测试稳定性持续被治理**。多个 PR/Issue 聚焦 E2E 分片超时（#11736）、视觉快照非确定性渲染（#11465）、REST 文档契约守卫的 fail-open 缺口（#11728）、PTY 清理时序（#11001），说明项目在把偶发红转为可诊断问题的方向上投入明显。

---
数据来源: github.com/QwenLM/qwen-code（统计窗口：2026-09-13 前 24 小时）

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI 社区动态日报（2026-09-13）

> 数据来源：github.com/Hmbown/DeepSeek-TUI（仓库内实际指向 Hmbown/Codewhale）

## 1. 今日速览

今日无新版本发布，但 Issue 区活跃度很高：过去 24 小时更新 30 条 Issue，其中大量由核心维护者提交的 C11 / Core 执行计划相关条目（agent 状态、预算控制、MCP 协议、运行时事件契约）集中亮相；同时 9 条 PR 中，文件级回滚、Runtime API 文件搜索、宠物工程等特性推进明显。整体看，社区讨论重心正从零散修复转向 agent 运行时能力与可观测性的系统性建设。

## 2. 版本发布

过去 24 小时无新 Release。

## 3. 社区热点 Issues

1. **[CLOSED] #5620 Context pressure warning 短暂且 agent 不主动响应**（18 评论）
   上下文压力警告仅短暂出现，agent 不会主动做出反应，存在静默的上下文降级风险。评论数最高，是本周讨论最集中的运行时可靠性问题。
   https://github.com/Hmbown/Codewhale/issues/5620

2. **[CLOSED] #5929 并行执行 flaky 测试追踪**（8 评论）
   六个测试在并发负载下失败、单独运行通过，属于典型并发不稳定问题，影响 CI 可信度。
   https://github.com/Hmbown/Codewhale/issues/5929

3. **[OPEN] #6011 TUI 用量与工具诊断：token 计量与工具调用错误模式**（6 评论）
   提出按组件/模型统计 token、缓存命中率、单工具消耗与 compaction 成本，属于可观测性核心需求。
   https://github.com/Hmbown/Codewhale/issues/6011

4. **[CLOSED] #6045 用户输入弹窗裁剪选项、隐藏已输入内容**
   `request_user_input` 对话框在真实终端下内容被裁、不可回退、错误不可逆，直接影响交互可用性。
   https://github.com/Hmbown/Codewhale/issues/6045

5. **[CLOSED] #6095 将 TUI 的 `@file` 模糊搜索暴露给本地 API 客户端**（3 评论）
   客户端目前无法枚举工作区文件，此需求补齐了 Runtime API 的能力缺口，且已由 PR #6120 落地。
   https://github.com/Hmbown/Codewhale/issues/6095

6. **[CLOSED] #6116 Linux 下选中即复制、中键粘贴**（2 评论）
   来自 Linux 用户的终端交互习惯诉求，属于小而实用的 TUI 体验改进。
   https://github.com/Hmbown/Codewhale/issues/6116

7. **[CLOSED] #6117 通过 `agent()` 派生子 agent 时 profile 被静默忽略**（1 评论）
   profile 被忽略并回退到会话默认模型路由，属于会影响多 agent 行为一致性的隐蔽 bug。
   https://github.com/Hmbown/Codewhale/issues/6117

8. **[OPEN] #6130 `agent(action="status")` 紧凑投影返回约 5 万 token**
   文档标称的紧凑路径实际返回大量嵌套 per-agent 数据，与“紧凑”语义严重不符，对上下文成本影响大。
   https://github.com/Hmbown/Codewhale/issues/6130

9. **[OPEN] #6129 `agent()` 缺少按次预算控制**
   无法设定“用到 N token 就返回已有结果”，多 worker 超支时父级只能等待、打断或取消，缺乏中间策略。
   https://github.com/Hmbown/Codewhale/issues/6129

10. **[OPEN] #6133 Runtime SDK：由单一来源生成 Rust 与 TypeScript 事件契约**
    指出 Rust 事件模型与手写 TypeScript 声明存在双份维护问题，是 SDK 长期可维护性的关键议题。
    https://github.com/Hmbown/Codewhale/issues/6133

## 4. 重要 PR 进展

1. **#6134 [OPEN] Computer Use 专业化并新增官方下载页**
   Computer Use 0.3.0 将本地操作路由至已注册的独立 helper，helper 无法启动时输入 fail-closed。
   https://github.com/Hmbown/Codewhale/pull/6134

2. **#6111 [CLOSED] 文件级恢复端点，并限制整树回滚**
   恢复按文件回退能力，同时修复现有整树回滚中的两处缺陷。
   https://github.com/Hmbown/Codewhale/pull/6111

3. **#6120 [CLOSED] Runtime API 暴露工作区文件建议**
   新增 `GET /v1/workspace/files/search?query=...&limit=...`，复用 composer 的发现与排序逻辑，关闭 #6095。
   https://github.com/Hmbown/Codewhale/pull/6120

4. **#6114 [CLOSED] 跟随软链接的用户级上下文文件**
   修复 `~/.codewhale/AGENTS.md` 等软链接被静默丢弃的问题（对应 #6115）。
   https://github.com/Hmbown/Codewhale/pull/6114

5. **#6110 [OPEN] 宠物：持久化世界与工作驱动的点阵形态**
   同一 980 点阵在浏览器、Apple、Android 与 TUI Watch 间共享一个持久视听世界。
   https://github.com/Hmbown/Codewhale/pull/6110

6. **#6096 [OPEN] 会话导出切片采用 capability 形态（FEAT-025）**
   将 `/export`（别名 `/daochu`）改接可移植命令契约，仅为结构性迁移，无用户可见行为变化。
   https://github.com/Hmbown/Codewhale/pull/6096

7. **#6100 [CLOSED] web_search 新增 Serply provider**
   以 `[search]` provider 形式接入 Serply，参照 #2790 中 Sofya 适配器的形态。
   https://github.com/Hmbown/Codewhale/pull/6100

8. **#6104 [OPEN] 依赖升级：encoding_rs 0.8.35 → 0.8.41**
   Dependabot 自动提交。
   https://github.com/Hmbown/Codewhale/pull/6104

9. **#6103 [CLOSED] 依赖升级：dirs 6.0.0 → 7.0.0**
   Dependabot 自动提交，属主版本升级需关注兼容性。
   https://github.com/Hmbown/Codewhale/pull/6103

10. **#6113 [CLOSED] 为 opencode-go 启用模型专属 wire API**
    解决 opencode-go 模型在 `/chat/completions` 之外使用 OpenAI responses 或 Anthropic messages API 的需求。
    https://github.com/Hmbown/Codewhale/issues/6113

## 5. 功能需求趋势

- **Agent 运行时可观测性与成本控制**：#6011（token 计量与工具诊断）、#6130（status 投影过大）、#6129（按次 token 预算）共同指向对 agent 行为的量化与约束需求。
- **多 agent / Fleet 调度治理**：profile 被忽略（#6117）、anti-stall 与只读 shell 语法（#6015）显示 Fleet 配置默认值正成为重点。
- **接口契约统一**：#6133（单一来源生成 Rust/TS 事件契约）、#6131（统一 MCP 协议适配器）、#6135（GitHub App 评审精度）反映对契约一致性和证据可追溯性的诉求。
- **本地 API 能力对齐 TUI**：#6095 / PR #6120 表明客户端希望获得与 TUI 同等的工作区文件能力。
- **平台与终端体验**：Linux 选中复制/中键粘贴（#6116）、Windows pin 阻塞 TUI 线程（#5923）、弹窗布局（#6045）等平台细节持续被反馈。
- **构建与依赖治理**：#6132（Cargo 警告策略在各输出格式下的质量验证）、依赖升级 PR 体现对 CI 严格性的关注。

## 6. 开发者关注点

- **静默失败最令人担忧**：profile 被忽略（#6117）、软链接 AGENTS.md 被降级为 warning 丢弃（#6115）、上下文压力无主动响应（#5620），三处都是“不报错但行为错误”，社区对显式失败和可诊断性有明确期待。
- **上下文预算缺乏精细控制**：status 输出约 5 万 token（#6130）与缺少按次预算（#6129）叠加，使多 agent 场景的上下文成本难以管理。
- **MCP 使用链路不完整**：会话中途完成 OAuth 登录后仍无法接入已配置服务器（#6030），影响实际可用性。
- **测试与 CI 稳定性**：并发 flaky 测试（#5929）及 Cargo 警告策略在不同输出格式下不一致（#6132）削弱了对质量门禁的信任。
- **生态与部署细节**：模型专属 wire API（#6113）、搜索 provider 扩展（#6100）、Computer Use 权限与 helper 部署（#6134）显示集成面正在扩大。

</details>

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar) 自动生成。*