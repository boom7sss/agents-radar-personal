# AI CLI 工具社区动态日报 2026-09-14

> 生成时间: 2026-09-14 14:24 UTC | 覆盖工具: 9 个

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

# AI CLI 工具生态横向对比分析报告

**数据日期：2026-09-14** | 覆盖工具：Claude Code、OpenAI Codex、Gemini CLI、GitHub Copilot CLI、Kimi Code CLI、OpenCode、Pi、Qwen Code、DeepSeek TUI

---

## 1. 生态全景

当前 AI CLI 工具生态已进入"**功能收敛、可靠性分化**"的成熟化拐点：各工具的竞争焦点从"能不能用"转向"稳不稳、账目清不清、权限边界准不准"。**稳定性与状态一致性**成为跨工具的第一痛点——会话恢复后上下文损坏、后台任务静默崩溃、配置写入不生效等问题在几乎所有工具中反复出现。**成本可观测性**（token 分账、缓存命中率、配额计量）从"锦上添花"升级为付费用户的信任底线。**权限与沙箱模型**成为安全侧共同攻坚方向，多个工具同时出现规则绕过或语义不明确的漏洞报告。与此同时，**平台一致性**（尤其 Windows）与**国际化路径/输入法**仍是全行业长期欠账。

---

## 2. 各工具活跃度对比

| 工具 | Issues（今日更新） | PR（今日更新） | Release | 当日焦点 |
|---|---|---|---|---|
| **Claude Code** | 50（展示 20 条，全部 CLOSED） | 5（3 OPEN） | 无 | 历史积压集中清理；沙箱/glob/hookify 修复 |
| **OpenAI Codex** | 多条（含 Meta 追踪器） | 10（9 CLOSED） | rust-v0.155.0-alpha.4 | Windows 平台问题集中爆发；Guardian 子系统重构 |
| **Gemini CLI** | 10+（P1 密集） | 10 | v0.61.0 nightly | 子代理可靠性 + Auto Memory 安全 |
| **GitHub Copilot CLI** | 6 新增（#4833–#4838） | 0 | 无 | 多模型接入健壮性 + 插件/技能启用链路失效 |
| **Kimi Code CLI** | 3（含 1 CLOSED） | 0 | 无 | CJK 输入法回车误发送；会话内批注需求 |
| **OpenCode** | 10+（高赞集中） | 10 | 无 | V2 布局强制推行引发大规模反弹；v1.18.30 回归崩溃 |
| **Pi** | 10+ | 10 | 无 | 会话状态一致性；错误分类与可恢复性 |
| **Qwen Code** | 10 | 10 | cua-driver v0.20.7 + 0.23.3 nightly | 后台 subagent 触发 TUI 静默崩溃；权限规则绕过 |
| **DeepSeek TUI** | 10+ | 6 | v0.9.13（验证中） | v0.9.14 里程碑落地；CodeWhale 品牌化 |

> 说明：上表仅统计各来源摘要中明确披露的条目，"+"表示摘要以"等/其他值得留意"形式提及未完全列出的条目。

---

## 3. 共同关注的功能方向

### 3.1 会话状态一致性（覆盖最广）
- **Pi**：#9306 悬空 toolCall 导致会话被拒、#9391 过期 thinking 块重放、#9590 base64 图片损坏、#8720 空白输出致 HTTP 400
- **OpenAI Codex**：#44781 队列消息编辑报错、#24100 远程压缩失败致线程不可用
- **Copilot CLI**：#4505 恢复会话后 item ID 失效致全部 prompt 失败
- **Qwen Code**：#5540 恢复已完成后台 subagent

### 3.2 成本/用量可观测性（付费信任核心）
- **OpenAI Codex**：#41220 用量配额 Meta 追踪器、#41369 76 turn 重处理 1010 万 token 复现、#13222 token 细分
- **DeepSeek TUI**：#6011 token 分账（按组件/模型 + 缓存命中率）
- **OpenCode**：#48967 MCP 工具 schema 占上下文 82%、#48513 effort 切换保留 prompt cache
- **Gemini CLI**：#24246 工具数超限、WriteToDo 持久化替代提案

### 3.3 权限与沙箱模型正确性
- **Qwen Code**：#11851 Bash 规则可被 `\r/\v/\f` 绕过、#11795 权限队列跨会话阻塞
- **Claude Code**：#77688 MCP 工具 allow 规则失效、#71627 沙箱提示批准域名会话范围
- **Gemini CLI**：#22672 劝阻 `git reset`/`--force`、MCP OAuth RFC 9207 校验
- **Claude Code**：#66125 Chrome 扩展全局"始终允许"开关争议

### 3.4 多模型/多厂商兼容
- **Copilot CLI**：#4836 Grok 4.5 工具数上限无前置校验、#4835 Gemini Flash 单点 schema 污染
- **Qwen Code**：#11590 非 Qwen 模型因 metadata 字段 400
- **Pi**：#9211 Vercel Gateway 路由失效、#9298 Grok 403 误标为 OpenAI 错误
- **Kimi Code**：#1383 多 Agent 并发权益边界

### 3.5 配置"写了不生效"（文档与实现脱节）
- **Claude Code**：#87079 glob `**` 与文档承诺不符、#79148 hookify 示例缺前缀
- **Pi**：#8684 `PI_OFFLINE` 超出文档范围、#9354 模板 frontmatter 静默丢弃
- **Gemini CLI**：#22267 settings.json 覆盖被忽略
- **Copilot CLI**：#4837 策略插件持久化为 `enabled: false`、#4556 静默丢弃配置

### 3.6 Windows / 平台一致性
- **OpenAI Codex**：#13993 独立安装包（👍193）、#25220 EFS 致插件失效、#33356 沙箱句柄泄漏
- **Pi**：#9129 超时未杀管道进程、#8474 减少打包文件改善 Windows 启动
- **Claude Code**：#77625 Windows 11 Bun 构建崩溃
- **Copilot CLI**：#4549 每条 shell 命令弹窗闪烁

### 3.7 国际化与本地化
- **Claude Code**：#40946 非 ASCII 路径有损编码
- **Kimi Code**：#2643 CJK 输入法回车误发送
- **OpenCode**：#48731 TUI i18n、中文用户偏好旧 UI

---

## 4. 差异化定位分析

| 工具 | 功能侧重 | 目标用户 | 技术路线特征 |
|---|---|---|---|
| **Claude Code** | 权限模型精细度、IDE 集成、hookify 插件体系 | 企业团队、重度自动化用户 | 插件化测试（`mods/<mod>/tests/`）、mod 目录组织 |
| **OpenAI Codex** | 平台交付、Guardian 审查子系统、配额计量 | 跨平台（Windows 痛点突出）开发者 | Rust 重构（crate 拆分、`sampler/execution.rs`）、MCP 深度集成 |
| **Gemini CLI** | 子代理体系、Auto Memory、AST 感知 | 探索自主编排的开发者 | nightly 持续交付、bash 亲和性架构提案（#19873） |
| **Copilot CLI** | 企业策略分发、MCP 生态、多模型网关 | 企业（MDM/组织级配置）、CI 用户 | 策略驱动插件、headless 模式、GitHub 生态绑定 |
| **Kimi Code CLI** | 中文场景体验、会话审阅闭环 | 中文用户、CJK 输入场景 | 简洁路线，聚焦 Web 端与人机协作 |
| **OpenCode** | TUI 交互、多工作树、上下文成本优化 | 重度多会话/多项目用户 | Effect 框架（layer 装配）、Web+TUI 双端 |
| **Pi** | 会话状态管理、provider 适配广度 | 技术向个人开发者、多 provider 用户 | 扩展系统、transcript 保真、性能预算导向 |
| **Qwen Code** | daemon 会话管理、渠道集成、CUA | 国内渠道集成、Web Shell 用户 | pnpm 收敛、monorepo、桌面端与 CLI 同版发布 |
| **DeepSeek TUI** | 可观测性、Crate 解耦、目标验证语义 | Rust 生态开发者 | 大型 Rust 工程治理、CodeWhale 品牌重定位 |

**关键分化点：**
- **企业级 vs 个人向**：Copilot CLI / Claude Code 主打企业策略分发与权限治理；Pi / OpenCode 更偏个人重度用户的可配置性。
- **平台策略**：Codex 正面迎战 Windows 交付短板；Copilot CLI Windows 体验问题同样突出；Gemini/Qwen 在 Linux 侧（Wayland/Remote-SSH）有明确缺口。
- **技术栈取向**：Rust 重构（Codex、DeepSeek TUI）追求性能与可维护性；Effect 框架（OpenCode）带来装配复杂度代价（#48803）。

---

## 5. 社区热度与成熟度

**第一梯队（高热度 + 高争议）：**
- **OpenCode**：单议题最高互动（#37012 44 评论 / 👍59），V2 布局强制推行引发**产品决策层冲突**，属于"有活跃用户群但产品方向受质疑"的典型。
- **OpenAI Codex**：#13993 独立安装包 👍193，需求侧民意规模最大；#41220 Meta 追踪器显示**付费信任问题已规模化**。

**第二梯队（技术深度 + 稳定迭代）：**
- **Claude Code**：50 条 Issue 全 CLOSED + 大量 duplicate/stale 标签，反映**维护者主动治理**，社区提交前需先检索。
- **Gemini CLI**：P1 密集（#22323、#21409、#25166），**自主编排能力受质疑**，处于可靠性验证期。
- **Qwen Code**：P1 集中（崩溃、权限绕过、核心链路回归），**稳定版 0.23.3 同样存在静默崩溃**，迭代速度快但质量波动。

**第三梯队（特定场景 / 早期）：**
- **Copilot CLI**：单日 6 条新 Issue 全 triage，**企业链路问题成体系**。
- **DeepSeek TUI**：v0.9.14 里程碑集中落地，**大型 Rust 工程治理期**。
- **Pi**：会话一致性问题密集，**扩展系统成熟度待验证**。
- **Kimi Code CLI**：单日 3 条 Issue，**社区基数相对小**，聚焦中文场景。

**成熟度判据：** 以"当日 Issue 全关闭率"看，Claude Code 最高（清理导向）；以"P1 未决率"看，Gemini CLI / Qwen Code 压力最大；以"用户规模信号"看，Codex / OpenCode 点赞绝对量领先。

---

## 6. 值得关注的趋势信号

**趋势一：静默失败成为最消耗调试成本的问题模式**
Claude Code（配置不生效）、Copilot CLI（持久化 `enabled: false`）、Pi（模板 frontmatter 静默丢弃）、DeepSeek TUI（审批静默死亡）四家同现此模式。**对开发者意味着**：选择工具时应优先评估其日志与告警能力，而非功能列表；企业部署前需准备配置生效性校验手段。

**趋势二：配额计量正从"功能"升级为"信任契约"**
Codex 开发者已能提供 token 级量化复现（98% 缓存仍重处理 1010 万 token），但缺少官方计量解释。**对决策者意味着**：在团队规模化采购前，应要求供应商提供可核对的用量账本，否则易在续费阶段暴露信任危机（参考 OpenCode #45278 支付被拒）。

**趋势三：多模型接入缺少前置约束**
Copilot CLI（Grok/Gemini 400）、Qwen Code（metadata 兼容）、Pi（provider 路由失效）显示：**工具正从"单模型客户端"变为"多模型网关"，但约束校验仍停留在服务端**。开发者需关注各工具是否提供按模型区分的限制说明与客户端拦截。

**趋势四：权限模型的字符级精度成为安全焦点**
Qwen Code #11851（`\r/\v/\f` 绕过 Bash 允许规则）是典型样本——**权限规则解析器的边界字符处理可能成为逃逸入口**。对安全敏感团队而言，应关注权限解析实现是否经过模糊测试。

**趋势五：产品决策权与社区期望的张力公开化**
OpenCode V2 布局强制推行（#37012、#48953）与 Kimi 多 Agent 权益争议（#1383）共同显示：**UI 强制变更与权益承诺偏差是引发社区反弹的两大触发器**。对开发者而言，选择工具时应评估其变更策略（是否保留 legacy 开关）。

**趋势六：Windows 与国际化是行业性欠账**
Windows 问题在 Codex / Pi / Copilot CLI / Claude Code 四家同时密集出现；CJK 输入法（Kimi #2643）与非 ASCII 路径（Claude Code #40946）问题长期未解。**对中文/非英语团队而言**：正式采用前应针对本平台与本语言场景做专项验证。

**趋势七：CI/测试基础设施的"单次有界重试"契约化**
Qwen Code 系统性为各流水线补齐重试契约（#11859、#11134、#11777），OpenCode / Pi 亦有测试迁移与稳定性 PR。**对工程团队意味着**：AI CLI 项目的 CI 抖动是普遍现象，评估其发布纪律（如 DeepSeek "CI 绿才算数"）比看版本号更有参考价值。

---

> 本报告严格基于 2026-09-14 各工具社区动态摘要整理，未对未披露的发布日期、指标或链接做任何补充推断。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告

> 数据来源：github.com/anthropics/skills，截止 2026-09-14。说明：PR 列表中评论数字段缺失（显示 undefined），因此 PR 部分按更新活跃度与信息完整度筛选，Issues 部分按实际评论数排序。

## 1. 热门 Skills 排行（按 PR 关注度/活跃度）

| Skill (PR) | 功能 | 讨论热点 | 状态 |
|---|---|---|---|
| **skill-creator 修复** #1298 | 修复 `run_eval.py` 恒报 0% recall 的核心 bug，并修 Windows 流读取、触发检测、并行 worker | 对应 Issue #556 的 10+ 次独立复现，是整条 skill-creator 评估链路（run_loop、improve_description）的信号源 | OPEN |
| **mcp-builder 修复** #1742 | 适配 `mcp>=2.0.0` 的 `streamable_http_client` 重命名及自定义 header 配置 | 修复 #1668，MCP 版本升级导致的导入断裂 | OPEN |
| **document-typography** #514 | 生成文档的排版质检：孤词换行、孤行段落、编号错位 | 面向所有 AI 生成文档的通用排版问题 | OPEN |
| **pyxel** #525 | Pyxel 复古/像素风游戏开发 Skill（配套 pyxel-mcp MCP server） | 垂直领域游戏开发与 MCP 集成 | OPEN |
| **Hivemind** #1628 | 零成本多智能体编排：Claude Code 作为唯一规划/评审/合并者，把机械工作委派给 headless opencode worker | 成本优化导向的编排模式 | OPEN |
| **md2video-audio** #1703 | 将 Markdown 直接编译为带拟真配音的口播 MP4 视频，零成本 | 内容生产自动化 | OPEN |
| **scnet-hpc** #1615 | 基于 profile 的 SSH + Slurm 工作流操作 SCNet HPC 集群 | 科研/HPC 场景垂直 Skill | OPEN |
| **self-audit** #1367 | 交付前审计：先机械文件验证，再按损害严重度做四维推理质量门（v1.3.0） | 输出质量门控，与 Issue #1385 提案呼应 | OPEN |

链接：
- https://github.com/anthropics/skills/pull/1298
- https://github.com/anthropics/skills/pull/1742
- https://github.com/anthropics/skills/pull/514
- https://github.com/anthropics/skills/pull/525
- https://github.com/anthropics/skills/pull/1628
- https://github.com/anthropics/skills/pull/1703
- https://github.com/anthropics/skills/pull/1615
- https://github.com/anthropics/skills/pull/1367

## 2. 社区需求趋势（来自 Issues）

- **安全与信任边界**（#492，43 评论，最高热度）：社区 Skill 以 `anthropic/` 命名空间分发造成官方身份冒用，用户可能误授高权限。伴随 #1175 对 SharePoint 文档访问控制与上下文窗口的担忧。
  https://github.com/anthropics/skills/issues/492
- **企业级分发与共享**（#228，16 评论，👍8）：希望组织内直接共享 Skill 库，免去下载 .skill 文件后经 Slack/Teams 手动上传。
  https://github.com/anthropics/skills/issues/228
- **评估工具链可靠性**（#556，12 评论；#1390）：`run_eval.py` 触发率为 0，`mcp-builder` 的 `evaluation.py` 对真实 MCP server 打分 0/N（TextContent 不可 JSON 序列化并被吞成伪造的工具错误）。这是当前最实质的功能性缺口。
  https://github.com/anthropics/skills/issues/556
  https://github.com/anthropics/skills/issues/1390
- **上下文窗口治理**（#1487）：`claude-api` 单次工具调用急切注入约 156k token，耗尽上下文窗口；#189 指出 document-skills 与 example-skills 插件内容重复造成重复 Skill。
  https://github.com/anthropics/skills/issues/1487
  https://github.com/anthropics/skills/issues/189
- **治理/推理质量类新 Skill 提案**：#412 agent-governance（策略执行、威胁检测、信任评分、审计追踪）、#1385 三阶段推理质量门、#1329 compact-memory（用符号化记法压缩长时 agent 状态）。
  https://github.com/anthropics/skills/issues/412
  https://github.com/anthropics/skills/issues/1385
  https://github.com/anthropics/skills/issues/1329
- **协议与集成形态**：#16 建议将 Skills 以 MCP 形式暴露 API；#29 询问 AWS Bedrock 下的可用性。
  https://github.com/anthropics/skills/issues/16
  https://github.com/anthropics/skills/issues/29

## 3. 高潜力待合并 Skills

以下 PR 均已 OPEN 且近期仍在更新，落地可能性较高：

- **#525 pyxel**（更新 2026-09-13）：游戏开发垂直 Skill，作者为 Pyxel 上游作者 kitao，配套 MCP server 明确。
  https://github.com/anthropics/skills/pull/525
- **#1703 md2video-audio**（更新 2026-09-14）：内容生产类，零成本视频生成。
  https://github.com/anthropics/skills/pull/1703
- **#1742 mcp-builder 修复**（更新 2026-09-13）：直接修复 MCP 2.x 兼容性断裂，属高优先级修补。
  https://github.com/anthropics/skills/pull/1742
- **#1298 skill-creator 修复**（更新 2026-09-14）：修复评估信号源，影响面最广，是多个下游脚本的前置依赖。
  https://github.com/anthropics/skills/pull/1298
- **#1628 Hivemind**（更新 2026-08-24）与 **#1615 scnet-hpc**（更新 2026-08-24）：分别覆盖多智能体编排与 HPC 垂直场景。
  https://github.com/anthropics/skills/pull/1628
  https://github.com/anthropics/skills/pull/1615
- **存量修复类**：#538（pdf SKILL.md 大小写引用不一致）、#541（docx 跟踪修订与书签 w:id 冲突导致文档损坏）、#539（未加引号的 YAML description 校验），均为小而明确的缺陷修复。
  https://github.com/anthropics/skills/pull/538
  https://github.com/anthropics/skills/pull/541
  https://github.com/anthropics/skills/pull/539

## 4. Skills 生态洞察

当前社区最集中的诉求是**先补齐官方工具链的可靠性与安全信任边界（评估恒报 0%、命名空间冒用、上下文膨胀），再谈新 Skill 扩张**——垂直新 Skill 提案活跃，但底层评估与分发机制的可信度才是决定它们能否被采纳的前提。

---

# Claude Code 社区动态日报（2026-09-14）

## 1. 今日速览

今日无新版本发布。过去 24 小时内社区仓库共 50 条 Issue 更新，其中展示的 20 条**全部为 CLOSED 状态**，且多数带有 `duplicate`、`stale` 或 `invalid` 标签，主要反映维护者在集中清理历史积压。相比之下 5 条 PR 中仍有 3 条处于 OPEN，涉及沙箱文档、glob 模式修复与 hookify 示例修正。

## 2. 版本发布

无。

## 3. 社区热点 Issues

1. **[#40946](https://github.com/anthropics/claude-code/issues/40946) 非 ASCII 项目路径编码导致目录冲突并破坏 `--resume`（已关闭）**
   评论 10、👍 3，是今日讨论度最高的 Issue。核心问题是非 ASCII 字符被逐个替换为 `-`，形成不可逆的有损映射，不同项目路径可能碰撞。对中文等非英文用户的可用性影响直接，值得关注官方最终定论。

2. **[#61782](https://github.com/anthropics/claude-code/issues/61782) 桌面端 Code 标签页信任对话框不出现，阻塞全部会话（duplicate）**
   👍 5，是今日点赞最高的问题。WorkspaceTrustError 导致所有会话无法启动，属于完全阻断型故障，被标记为重复说明已有同源报告。

3. **[#58276](https://github.com/anthropics/claude-code/issues/58276) plan mode 流式输出期间 100% CPU / UI 冻结（regression, perf:cpu, stale）**
   带 `regression` 与 `perf:cpu` 标签，指向 auto-mode + fast-mode 在响应式状态中的热循环。性能类回归直接影响长任务体验。

4. **[#60045](https://github.com/anthropics/claude-code/issues/60045) VSCode 首次打开标签页时配置探测子进程必然 60s 超时（macOS/Bedrock）**
   涉及 `spawnConfigProbe()`，首次使用体验被 60 秒卡顿拖累，且与 Bedrock 组合相关，影响企业侧接入。

5. **[#66657](https://github.com/anthropics/claude-code/issues/66657) Fable 5 安全分类器对一句 `hello` 触发 `model_refusal_fallback`**
   报告指出触发源是静态请求前导文本而非用户消息，属于误报型安全拦截，影响正常交互的可靠性。

6. **[#66595](https://github.com/anthropics/claude-code/issues/66595) Fable 5 安全分类器在授权安全测试中会话中途切回 Opus**
   与 #66657 构成同一模型的两类安全行为问题：一是误报拦截，二是意外降级/切换模型，打断已授权工作流。

7. **[#72601](https://github.com/anthropics/claude-code/issues/72601) VSCode 扩展中回车选择斜杠命令会直接发送消息（duplicate）**
   自动补全选中与提交动作叠加，属于高频交互路径上的体验缺陷，社区 👍 2。

8. **[#77688](https://github.com/anthropics/claude-code/issues/77688) `permissions.allow` 中的 MCP 工具规则无法在 auto 模式下抑制审批提示（duplicate）**
   权限配置不生效会削弱自动化模式的实用性，是权限体系类问题的代表。

9. **[#77625](https://github.com/anthropics/claude-code/issues/77625) Windows 11 上使用 Bun 构建版本时崩溃（0xC0000005，v2.1.112+）**
   明确的平台特定崩溃，且指出了起始版本号，便于受影响用户判断自身环境。

10. **[#77294](https://github.com/anthropics/claude-code/issues/77294) 请求在更新时自动清理旧版本 Claude（duplicate）**
    长期存在的磁盘占用诉求，被标记为重复说明社区已有同类呼声。

## 4. 重要 PR 进展

1. **[#94184](https://github.com/anthropics/claude-code/pull/94184)（已关闭）mods/diff：固定表头、正文滚动、内置列表与基础快捷键、滚轮路由、DiffDialog 退出全屏**
   目标是让停靠面板与内置 `/diff` 面板逐帧对齐：表头、基准行与 8 行文件列表固定，滚轮按 3 行滚动 hunk，指针位于溢出列表上时按每格一个文件滚动。

2. **[#93951](https://github.com/anthropics/claude-code/pull/93951)（已关闭）mods：diff、sec-default 与 telemetry 测试迁移到对应 mod 目录旁**
   三个 mod 的行为测试从主仓库移至 `mods/<mod>/tests/`，按 `hooks/` 下的单元逐一对应，由 `claude plugin test` 运行，推动插件化测试组织。

3. **[#71627](https://github.com/anthropics/claude-code/pull/71627)（OPEN）docs(sandbox)：说明提示批准的 host 仅在会话内生效**
   在 `examples/settings/README.md` 的 Tips 部分新增一条说明。`settings-bash-sandbox.json` 已有 `sandbox.network.allowedDomains`，但文档未区分提示批准域名与配置域名的差异。

4. **[#87079](https://github.com/anthropics/claude-code/pull/87079)（OPEN）fix(security-guidance)：让 `**` glob 匹配零深度路径**
   `_glob_match` 委托给 fnmatch 后，裸 `*` 已能跨越 `/`，导致 `**/*.ts` 要求字面 `/`，静默排除顶层文件，与文档承诺的 “`**` 匹配任意深度” 不符。

5. **[#79148](https://github.com/anthropics/claude-code/pull/79148)（OPEN）fix：为示例规则文件名补上必需的 `hookify.` 前缀**
   hookify 加载器只识别 `.claude/hookify.*.local.md`（`core/config_loader.py:210`），且 writing-rules skill 已将 `hookify.` 前缀记为必需，但四个随包示例均缺少该前缀。

> 说明：过去 24 小时内更新的 PR 共 5 条，以上为全部条目。

## 5. 功能需求趋势

- **IDE / 编辑器集成**：VSCode 扩展问题密集（#60045 配置探测超时、#72601 斜杠命令误发送、#77532 `server_tool_use` 占位符反复出现），编辑器侧体验是当前最集中的问题域。
- **权限与沙箱治理**：#77688（MCP 工具 allow 规则失效）、#66125（Chrome 扩展请求全局“始终允许”开关）、#71627（沙箱提示批准域名的会话范围说明）共同指向权限模型的可控性与文档清晰度。
- **模型安全分类器行为**：#66657 与 #66595 从误报与中途切模型两个方向提出对 Fable 5 安全分类器的质疑。
- **性能与资源**：#58276（CPU 热循环）、#77702（token 使用过高、增量响应不完整）、#77294（旧版本自动清理）覆盖运行时开销与磁盘占用。
- **会话与输入管理**：#77537 请求“steering 队列”一等公民 UI，可查看、删除、逐条注入排队消息，反映长任务场景下的队列不可见痛点。
- **插件与扩展能力**：#66633 请求为 Slack 插件增加 `slack_trigger_workflow` 工具，配合 PR #93951 的 mod 测试迁移，显示插件生态仍在扩张。

## 6. 开发者关注点

- **完整性阻塞优先**：信任对话框不出现（#61782）、Windows 崩溃（#77625）、配置探测 60s 超时（#60045）这类“无法开始工作”的问题获得最高关注度。
- **配置写了不生效**：MCP 工具 allow 规则不抑制审批（#77688）、glob `**` 与文档承诺不一致（#87079）、hookify 示例缺前缀（#79148），三处均属文档与实现脱节。
- **国际化路径处理**：非 ASCII 路径的有损编码（#40946）对中文等用户是长期隐患。
- **会话与配额体验**：#77725（重置后仍提示已达会话上限）、#77702（token 消耗偏高）反映用量反馈与实际状态不一致。
- **长任务可控性**：排队消息不可见不可删（#77537）、工具拒绝信号导致 AskUserQuestion 答案丢失（#77570），指向多轮长任务中的状态保真需求。
- **梳理信号**：今日 20 条 Issue 全部关闭且大量标记 duplicate/stale，提示大量问题已被合并追踪或超期归档，开发者提交前宜先检索既有同源报告。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报（2026-09-14）

## 1. 今日速览

今天最突出的信号是 **Windows 平台体验问题集中爆发**：独立安装包需求（#13993）已积累 85 条评论和 193 个 👍，同时多个 Windows 安装失败、EFS 加密导致插件不可用、沙箱句柄泄漏等问题同步活跃。其次是 **用量与配额核算争议**持续发酵，#41220 已作为跨报告追踪器汇集大量"配额异常消耗"案例，并有开发者给出 76 个 exec turn 重处理 1010 万输入 token 的具体复现。代码侧，Guardian 审查子系统在今日被大量重构 PR 拆分模块，属于内部架构整理。

## 2. 版本发布

**rust-v0.155.0-alpha.4**（0.155.0-alpha.4）

发布说明仅标注版本号，无进一步 changelog 内容，不额外推测变更范围。

## 3. 社区热点 Issues（10 条）

1. **#13993 [OPEN] 支持独立 Windows 安装程序（`codex-setup.exe`）** — 👍193 / 评论 85
   呼吁度最高的需求。大量 Windows 用户受 Microsoft Store 限制（企业策略、离线环境）无法安装，因此希望提供独立安装包。
   https://github.com/openai/codex/issues/13993

2. **#41220 [OPEN] [Meta] Codex 用量/配额异常消耗与计量不一致 — 跨报告追踪器**
   👍14 / 评论 42。将多份同类报告归纳为"用户可见症状族"，是当前订阅计费争议的聚合入口，值得作为单一跟踪点关注。
   https://github.com/openai/codex/issues/41220

3. **#36040 [OPEN] iOS Remote 回归：仅列出有近期会话的项目**
   👍2 / 评论 45。iOS 端 Remote Control 与 macOS 桌面主机配对场景下的回归问题，影响移动端远程控制可用性。
   https://github.com/openai/codex/issues/36040

4. **#25220 [OPEN] [Windows] 内置插件（Computer Use、Browser、Chrome、LaTeX）不可用 — EFS 加密 WindowsApps 文件导致 copyfile 失败**
   👍4 / 评论 37。Windows 11 中国区 + Store 安装环境下，加密文件系统导致插件复制失败，牵连多个内置能力。
   https://github.com/openai/codex/issues/25220

5. **#44781 [OPEN] [Codex Desktop] 编辑并重发排队消息触发 "App-server queued follow-up no longer exists"**
   👍33 / 评论 27。Codex Desktop Windows 包上的 app-server 队列一致性问题，👍 数较高，说明影响面不小。
   https://github.com/openai/codex/issues/44781

6. **#34349 [OPEN] 功能请求：允许完全禁用 Pets 并移除"Show Pet"菜单项**
   👍51 / 评论 12。社区对可选 UI 元素"能关掉"的诉求明确，点赞数远高于评论数，反映沉默的多数意见。
   https://github.com/openai/codex/issues/34349

7. **#33356 [OPEN] [Windows] 沙箱 exec 每次命令执行泄漏 3–5 个 lsass 句柄，长会话下拖垮整个操作系统**
   👍1 / 评论 12。codex-cli 0.144.4 + gpt-5.6 环境下的资源泄漏，属长期会话稳定性隐患。
   https://github.com/openai/codex/issues/33356

8. **#41369 [OPEN] 单个 Terra Medium 任务在 76 个 exec turn 中重处理 1010 万输入 token（98% 命中缓存），消耗 5 小时配额的 33%**
   👍0 / 评论 11。给出了配额异常的具体量化复现，与 #41220 元追踪器互为佐证，是排查计量问题的关键样本。
   https://github.com/openai/codex/issues/41369

9. **#44851 [OPEN] GPT-6 Astra 在账户级容量限流后输出质量减半（相同 prompt、effort 与 client core）**
   👍3 / 评论 7。模型行为 + 限流交叉问题，若属实则涉及限流策略对输出质量的影响，需官方澄清。
   https://github.com/openai/codex/issues/44851

10. **#13222 [CLOSED] [enhancement] Token 用量细分**
    👍25 / 评论 7。请求在 `/status` 中按来源展示上下文 token 绝对值与占比，已关闭，是提升用量透明度的方向性需求。
    https://github.com/openai/codex/issues/13222

## 4. 重要 PR 进展（10 条）

1. **#45428 [CLOSED] 避免克隆 MCP server 状态快照数据** — 构建 MCP server 状态响应时改为移动所有权而非克隆 server 元数据、工具、资源与鉴权状态。
   https://github.com/openai/codex/pull/45428

2. **#45420 [CLOSED] 将 Guardian sampler 执行抽取为独立模块** — 把请求执行从 `LunaSampler` 移入 `sampler/execution.rs` 的 `SamplingExecution`。
   https://github.com/openai/codex/pull/45420

3. **#45418 [CLOSED] 将 Guardian 会话簿记抽取到 reviewer crate** — 新增 `ConversationState` 与 `ConversationCheckpoint`，用于跟踪 transcript 游标与完成状态。
   https://github.com/openai/codex/pull/45418

4. **#45417 [CLOSED] 将 guardian transcript 选择抽取到 `guardian-context`** — 统一 full/delta transcript 选择为 `TranscriptMode::select` API。
   https://github.com/openai/codex/pull/45417

5. **#45413 [CLOSED] 父历史重置后使 Guardian 审查会话失效** — 修复无摘要的父上下文重置后复用审查会话、携带重置前 rationale 的问题。
   https://github.com/openai/codex/pull/45413

6. **#45409 [CLOSED] 在 MCP 请求元数据中加入 session 与来源窗口 ID** — 在 `threadId`、可选 `itemId` 之外补充 `sessionId` 与来源 `windowId`。
   https://github.com/openai/codex/pull/45409

7. **#45399 [CLOSED] 清除或单元格完成时取消 code mode 定时器任务** — 修复每个 `setTimeout` 在 `clearTimeout` 或单元格完成后仍保留休眠线程的问题。
   https://github.com/openai/codex/pull/45399

8. **#45345 [CLOSED] 随 Rust 发布一同发布可选的 provisioned macOS 包** — 当 `CODEX_PROVISIONED_MACOS_CANDIDATE` 为 `true` 时，要求该 job 成功并上传验证后的包作为 release 资产。
   https://github.com/openai/codex/pull/45345

9. **#45312 [CLOSED] 将 Windows 沙箱配置准备抽取为 helper** — 导出 `prepare_windows_sandbox_config` 与 `PreparedWindowsSandboxConfig`，在配置加载阶段使用。
   https://github.com/openai/codex/pull/45312

10. **#31334 [OPEN] [codex] 对齐 skill creator 路径与受支持位置** — 文档化 skill 保存位置：仓库/项目/工作区 skill 指向 `.agents/skills`，用户 skill 指向 `$HOME/.agents/skills`，管理员 skill 指向 `/etc/codex/sk...`。
    https://github.com/openai/codex/pull/31334

## 5. 功能需求趋势

- **Windows 交付与安装链路**：独立安装包（#13993）、安装失败（#45003、#33967）、Store/EFS 引发的插件失效（#25220、#32589）共同指向 Windows 分发与初始化是当前最大短板。
- **远程控制（Remote Control）**：iOS Remote 列表回归（#36040）、Android/GrapheneOS 注册被阻（#38128）、remote control 不可用（#40167）、聊天切换导致草稿下划线转义（#39844），跨平台远程链路问题密集。
- **用量透明与配额计量**：元追踪器（#41220）、token 重处理复现（#41369）、TUI 中 token 构成细分（#13222），社区要求可解释的配额账本。
- **上下文与长会话可用性**：远程压缩失败导致线程不可用（#24100）等请求，指向长会话的恢复与交接能力。
- **UI/功能可配置性**：禁用 Pets（#34349）代表用户希望可选元素能被彻底关闭。
- **session/线程一致性**：VS Code 扩展线程所有权残留（#37856）、旧会话在侧窗打开（#36462）、队列消息编辑报错（#44781）。

## 6. 开发者关注点

- **Windows 是当前痛感最集中的平台**：从安装、UAC 前 helper 失败，到沙箱句柄泄漏拖慢整机，问题覆盖安装期与运行期。
- **配额不可信感强烈**：开发者已能给出 token 级量化证据（98% 缓存仍重处理 1010 万输入 token），但缺少官方计量解释，容易升级为付费信任问题。
- **长时间/长上下文会话的稳定性**：压缩失败、历史重置、线程所有权残留，都会让进行中的工作不可恢复，开发者需要明确的恢复与交接路径。
- **资源与性能细节**：MCP 状态克隆、code mode 定时器线程、TUI 滚动历史丢失等 PR 表明内部存在可观测的资源浪费与终端兼容性问题。
- **跨端一致性**：移动端（iOS/Android）、桌面、VS Code 扩展与 CLI 之间的会话与远程状态同步仍不稳定。

---
*以上内容均基于所提供的 GitHub 数据整理，未对未列出的变更、链接或指标做任何补充推断。*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报（2026-09-14）

## 1. 今日速览

今日 Gemini CLI 发布 v0.61.0 nightly 版本，社区焦点集中在**子代理（subagent）可靠性**与**Auto Memory 安全性**两条主线：多个 P1 级 Issue（子代理挂起、MAX_TURNS 被误报为成功、shell 执行卡死）持续更新，同时围绕 Auto Memory 的敏感信息脱敏、无效补丁处理仍有系列问题待解。PR 侧以稳定性修复为主，包括 `.gitignore` 嵌套模式匹配、CRLF 换行导致的 diff 异常、Settings 编辑器数值校验等。

## 2. 版本发布

**v0.61.0-nightly.20260914.g9c1b0a610**（nightly 自动构建）

- 由 `gemini-cli-robot` 同步提交版本号变更 PR #29321
- 完整变更日志：https://github.com/google-gemini/gemini-cli/compare/v0.61.0-nightly.20260913.g9c1b0a610...v0.61.0-nightly.20260914.g9c1b0a610

## 3. 社区热点 Issues

1. **#22323 子代理 MAX_TURNS 被误报为 GOAL 成功**（P1, 13 评论）
   触及核心信任问题：`codebase_investigator` 在未完成分析即触及轮次上限时，仍返回 `success` / `Termination Reason: GOAL`，导致中断被隐藏。评论数居首，说明这是高优先级可观测性缺陷。
   https://github.com/google-gemini/gemini-cli/issues/22323

2. **#21409 Generalist agent 无限挂起**（P1, 8 评论, 8 👍）
   社区点赞最高，用户反馈只要委派给 generalist agent 便会永久挂起（最长等待一小时）。高共鸣度表明影响面广。
   https://github.com/google-gemini/gemini-cli/issues/21409

3. **#19873 利用模型 bash 亲和性做零依赖 OS 沙箱**（P2, 9 评论）
   提出让 Gemini 3 以原生 bash 用户方式链式调用 POSIX 工具，并配合执行后意图路由。是较有分量的架构级增强提案。
   https://github.com/google-gemini/gemini-cli/issues/19873

4. **#21968 Gemini 不主动使用 skills 与子代理**（P2, 6 评论）
   反映模型自主编排能力不足，与 #22323、#21409 共同构成"子代理生态是否真的可用"的关键质疑。
   https://github.com/google-gemini/gemini-cli/issues/21968

5. **#26525 Auto Memory 增加确定性脱敏**（P2, 5 评论, area/security）
   指出现有脱敏发生在内容已发送给后台抽取代理之后，属数据外泄风险。安全类问题值得持续关注。
   https://github.com/google-gemini/gemini-cli/issues/26525

6. **#25166 shell 命令执行完仍卡在 "Waiting input"**（P1, 4 评论, 3 👍）
   极简命令执行后仍显示"等待输入"，基础交互体验受损。
   https://github.com/google-gemini/gemini-cli/issues/25166

7. **#22745 AST 感知的文件读取、搜索与映射影响评估**（P2, 7 评论）
   EPIC 级调研，目标是减少工具调用轮次、更精确地读取方法边界，可能影响未来核心工具设计。
   https://github.com/google-gemini/gemini-cli/issues/22745

8. **#24246 工具数超限触发 400 错误**（P2, 3 评论）
   标题为 >128 工具，摘要描述为超过 400 个工具时报错。工具规模膨胀下的上下文管理问题。
   https://github.com/google-gemini/gemini-cli/issues/24246

9. **#21983 Wayland 下 browser subagent 失败**（P1, 4 评论, agent/browser）
   Linux（Wayland）环境浏览器子代理不可用，影响跨平台可用性。
   https://github.com/google-gemini/gemini-cli/issues/21983

10. **#22672 代理应停止/劝阻破坏性操作**（P2, 3 评论, kind/customer-issue）
    模型偶尔在复杂 git 操作中使用 `git reset` / `--force`，安全护栏需求明确。
    https://github.com/google-gemini/gemini-cli/issues/22672

（同批值得留意的还有：#26522 Auto Memory 无限重试低信噪比会话、#26523 无效 Auto Memory 补丁的隔离、#20079 符号链接代理未被识别。）

## 4. 重要 PR 进展

1. **#29287 `--yolo` 映射为 allowedTools 通配符策略**（CLOSED, size/xl）
   将 `--yolo` 原生映射为 `allowedTools: ["*"]`，移除 `ApprovalMode.YOLO` 独立状态，实现 #11303。
   https://github.com/google-gemini/gemini-cli/pull/29287

2. **#29323 修复嵌套 `.gitignore` 尾斜杠模式处理**（OPEN, P2, area/core）
   修正 `build/`、`node_modules/` 等模式在嵌套 `.gitignore` 中被错误锚定的问题，Fixes #29290。
   https://github.com/google-gemini/gemini-cli/pull/29323

3. **#29324 嵌套 `.gitignore` 尾斜杠不锚定的最小化修复**（OPEN, P2）
   与 #29323 针对同一 issue 的替代实现，只统计最后一个字符之前的斜杠。
   https://github.com/google-gemini/gemini-cli/pull/29324

4. **#29117 MCP OAuth 流程实现 RFC 9207 签发者校验**（CLOSED, size/m+l）
   扩展 OAuth 相关逻辑，确保响应来源一致，防止令牌被路由到非预期方。
   https://github.com/google-gemini/gemini-cli/pull/29117

5. **#29229 Settings 编辑器拒绝非有限数值**（OPEN, P2, area/core）
   修复 `1e309` 解析为 `Infinity` 后被 JSON 序列化成 `null`、静默损坏配置的问题，Fixes #29226。
   https://github.com/google-gemini/gemini-cli/pull/29229

6. **#29134 保护当前会话不被删除**（CLOSED, P2, area/core）
   在 `--list-sessions` / `--delete-session` 路径中传递活动会话 ID，并按短 ID 后缀精确匹配以避免误删，Fixes #29133。
   https://github.com/google-gemini/gemini-cli/pull/29134

7. **#29132 规范化 diff 上下文片段中的换行符**（CLOSED, area/core）
   计算 diff 前统一 CRLF/CR，并补充回归测试，Fixes #29130。
   https://github.com/google-gemini/gemini-cli/pull/29132

8. **#29131 修复 CRLF 导致的全文件 diff**（CLOSED）
   解决 Windows 或 CRLF 文件下 `getDiffContextSnippet` 输出 100% 全文件 diff 的问题，与 #29132 同源修复。
   https://github.com/google-gemini/gemini-cli/pull/29131

9. **#29321 nightly 版本号自动变更**（OPEN, size/s）
   由 `gemini-cli-robot` 提交的 0.61.0-nightly.20260914 版本 bump。
   https://github.com/google-gemini/gemini-cli/pull/29321

10. **#29230 / #29231 文档修复**（OPEN）
    #29230 修正 7 个文档页面中失效的页内/跨文件锚点；#29231 修正已不存在的 JSDoc 参数名。属低风险文档清理。
    https://github.com/google-gemini/gemini-cli/pull/29230
    https://github.com/google-gemini/gemini-cli/pull/29231

## 5. 功能需求趋势

从本批 Issues 标签与内容看，社区关注集中在以下方向：

- **子代理（Subagent）体系成熟度**：数量最多的议题群，涵盖挂起（#21409）、结果误报（#22323）、调用意愿不足（#21968）、配置覆盖失效（#22267）、浏览器代理（#21983 / #22232）、本地子代理规划（#20195）。
- **Auto Memory 的数据安全与健壮性**：脱敏时机（#26525）、无效补丁处理（#26523）、低信噪比会话重试（#26522）构成一组连续问题。
- **上下文与工具规模管理**：工具数超限报错（#24246）、将 WriteToDo 替换为持久化文件任务跟踪（#18836）、原生文件工具维护任务追踪（#21000），反映对"上下文腐化"和高 token 成本的担忧。
- **AST 感知能力**：以 #22745 EPIC 为代表，探索用 AST 提升读写与代码库映射的精度。
- **执行环境能力**：原生 bash 沙箱与意图路由（#19873）、Wayland 兼容（#21983）。
- **安全护栏**：避免破坏性命令（#22672）、MCP OAuth 签发者校验（PR #29117）。

## 6. 开发者关注点

- **可靠性与信任**：多个 P1 问题指向同一类体验——代理"假装成功"或"静默挂起"（#22323、#21409、#25166），开发者需要可信的终止原因与状态反馈，而非隐藏中断。
- **自主编排不足**：模型不主动使用 skills 与子代理（#21968），削弱了子代理架构的实际价值。
- **默认安全**：Auto Memory 在内容已传出后才做脱敏（#26525），以及模型可能执行 `git reset` / `--force`（#22672），是开发者明确要求加强的护栏点。
- **跨平台一致性**：Wayland 浏览器子代理失败（#21983）、CRLF 换行导致的 diff 异常（PR #29131 / #29132）显示 Windows 与 Linux 桌面环境仍有明显短板。
- **配置可信度**：`settings.json` 覆盖被忽略（#22267）与 Settings 编辑器静默存储 `null`（PR #29229）共同指向"配置生效与校验"这一高频痛点。
- **符号链接等边缘场景**：`~/.gemini/agents/` 下符号链接不被识别为代理（#20079），反映用户自定义代理工作流的兼容性诉求。

---
*本日报仅基于 2026-09-14 提供的 GitHub 数据整理，未包含数据源之外的信息。*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报（2026-09-14）

## 1. 今日速览

过去 24 小时内 Copilot CLI 无新版本发布、无 PR 更新，但 Issue 区活跃度显著上升：单日新增 6 条 Issue（#4833–#4838），其中 5 条集中在今天被标记为 `triage`。当日问题呈现出两个明显主线——**多模型接入的健壮性缺陷**（Grok 4.5 工具数超限、Gemini Flash 的 MCP schema 容错）与**插件/技能启用链路失效**（策略驱动插件持久化为 `enabled: false`、headless 模式 skill 解析间歇失败）。

---

## 2. 版本发布

过去 24 小时内无新 Release。需要留意的是，当日多条 Issue 指向同一版本区间：`1.0.83`（#4837）与 `1.0.84-5`（#4835、#4836），可作为后续修复版本的对照基线。

---

## 3. 社区热点 Issues

以下按影响力与讨论热度挑选 10 条：

1. **#4505 恢复会话后连接项 ID 失效，所有 prompt 均失败（OPEN）**
   错误信息明确：`Execution failed: CAPIError: 400 input item ID does not belong to this connection`。恢复既有会话即导致会话完全不可用，属阻断级缺陷。从 8 月 16 日创建至今仍未关闭，累计 4 条评论、3 个 👍，是本批中社区认同度最高的问题之一。
   https://github.com/github/copilot-cli/issues/4505

2. **#4549 Windows 下每条 shell 命令弹出可见 PowerShell 窗口（OPEN）**
   agent 每个任务会执行大量命令，导致控制台窗口近乎持续闪烁，严重干扰桌面使用并可能中断用户操作。Windows 平台体验类问题，2 条评论、1 个 👍。
   https://github.com/github/copilot-cli/issues/4549

3. **#4837 策略驱动 enabledPlugins 安装成功却持久化为 `enabled: false`（OPEN，triage）**
   插件被写入磁盘但配置记录为未启用，技能永不激活，且状态不能自愈。作者注明可通过设备/MDM 与仓库级设置复现，直接影响企业批量分发场景。当日新建，已获 1 条评论。
   https://github.com/github/copilot-cli/issues/4837

4. **#4838 headless `-p` 模式下 skill 工具间歇失败（OPEN，triage）**
   报错 "No model-invocable skills available"，而同一请求的 `<available_skills>` 系统提示中却完整列出了该技能的名称与描述——典型的状态不一致。对 CI/自动化脚本影响大。当日新建。
   https://github.com/github/copilot-cli/issues/4838

5. **#4836 Grok 4.5：工具数达 351 时返回 HTTP 400 而非提示 350 上限（OPEN，triage）**
   CLI 既未在超限前拦截，也未给出可读错误。环境为 Windows 11 x64 + `grok-4.5` + CLI `1.0.84-5`，说明新模型接入仍缺少按模型区分的工具数约束。
   https://github.com/github/copilot-cli/issues/4836

6. **#4835 Gemini Flash：单个畸形 MCP array enum 导致全部请求 400（OPEN，triage）**
   只要一个 MCP 工具的 schema 在 array 属性上直接带整数 `enum`，发往 `gemini-3.7-flash` 的所有请求即失败。属于单点污染全局的容错问题，暴露 MCP schema 缺乏校验。
   https://github.com/github/copilot-cli/issues/4835

7. **#3572 组织级自定义 agent 在非 Git 仓库目录下不可见（OPEN）**
   定义于组织 `.github-private` 仓库 `agents/` 目录的 agent，只有从含 git 仓库的目录启动 CLI 才会通过 `/agent` 出现。该问题自 5 月 29 日提出，历时近四个月仍未解决，3 个 👍 显示企事业用户关注度较高。
   https://github.com/github/copilot-cli/issues/3572

8. **#4556 服务端下发的 extraKnownMarketplaces 被静默丢弃（OPEN）**
   配置能成功拉取并解析，但从未合并进插件/市场代码路径，marketplace 永不注册；插件路径存在静默的鉴权提前退出。属"配置生效但无人消费"的隐蔽缺陷。
   https://github.com/github/copilot-cli/issues/4556

9. **#4834 请求支持 MCP 2026-07-28 多轮往返请求（input_required）（OPEN，triage）**
   当前不支持该协议版本，导致不支持 2025 期回退逻辑的服务端在进行 URL elicitation 的 MRTR 时失败。反映了 MCP 协议演进带来的兼容性诉求。
   https://github.com/github/copilot-cli/issues/4834

10. **#4833 语音模式在 Linux 上因 ONNX Runtime 断言崩溃（OPEN）**
    启用语音输入后 CLI 以信号 6（`SIGABRT`）中止并转储核心，崩溃发生在本地 Nemotron 语音模型处理音频期间。昨日创建，是语音功能稳定性的首个明确崩溃报告。
    https://github.com/github/copilot-cli/issues/4833

> 补充：**#1029**（工具调用被拒绝后应触发其余调用重新规划）已于今日关闭，此前停留在 `0.0.387` 版本，1 月提出、9 月关闭，反映长尾需求的处理周期。
> https://github.com/github/copilot-cli/issues/1029

---

## 4. 重要 PR 进展

过去 24 小时内无 PR 更新，本部分无内容可汇报。

---

## 5. 功能需求趋势

从今日及近期 Issue 可以提炼出以下方向：

- **插件、市场与技能的分发闭环**：#4837、#4556、#4838 三条问题分别覆盖插件的"安装—启用—激活"与技能的"声明—解析"链路，说明服务端/策略驱动的分发能力已具备，但落地环节存在多处断点。这是当前最集中、最成体系的一类问题。
- **多模型适配与错误可读性**：#4836（Grok 4.5 工具数上限）、#4835（Gemini Flash schema 容错）显示不同模型/供应商的约束未被 CLI 前置校验，失败以 HTTP 400 形式暴露给用户，缺少按模型区分的限制说明与拦截。
- **MCP 生态兼容与演进**：#4834 明确提出跟进 MCP 2026-07-28 的 MRTR（input_required）支持，schema 校验（#4835）亦属 MCP 工具接入的配套能力。
- **企业级与环境依赖解耦**：#3572 的根因是 agent 可见性依赖当前目录是否为 git 仓库，配置有效性不应与工作目录形态强绑定。
- **无头/自动化场景的稳定性**：#4838 与 #4549 分别对应 CI 无头模式与 Windows 本地自动化，两者的失败模式都会中断批量任务。
- **语音等新增交互形态的稳定性**：#4833 是该方向的首个崩溃类报告。

---

## 6. 开发者关注点

- **阻断式故障优先级最高**：会话恢复后全部 prompt 失败（#4505）与语音模式 SIGABRT（#4833）会让功能彻底不可用，相比之下体验类问题的容忍度更高，但 #4505 已悬置近一个月。
- **"配置成功但功能不生效"的静默失败最耗调试时间**：#4837（持久化 `enabled: false`）、#4556（静默鉴权退出）、#4838（技能已列出却报不可用）都属于同一模式——缺乏日志与告警，用户难以定位是配置、鉴权还是代码路径的问题。
- **平台差异带来的持续摩擦**：Windows 侧的窗口闪烁（#4549）与 Linux 侧的 ONNX 崩溃（#4833）表明跨平台验证仍不充分，且两端的失败表征完全不同。
- **新模型接入缺少前置约束**：工具数量上限、schema 合法性等本可在客户端校验的条件被推迟到服务端报错，且错误信息缺少"该怎么办"的指引（#4835、#4836）。
- **企业级配置的可靠性诉求**：组织级 agent 可见性依赖工作目录（#3572）、MDM/设备策略分发链路失效（#4837）会直接影响规模化部署，相关 Issue 的 👍 数也相对更高。
- **无头模式的确定性**：`copilot -p` 被广泛用于自动化，其"间歇性"失败（#4838）比稳定失败更难排查，也更影响流水线可信度。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报（2026-09-14）

## 1. 今日速览

今日仓库无新版本发布，也无 Pull Request 更新，社区动态集中在 Issue 区。过去 24 小时内共有 3 条 Issue 更新，其中 2 条为当日新建：`kimi web` 的 CJK 输入法回车误发送 bug（#2643），以及 Kimi Work 会话内可视化批注与审阅反馈的功能需求（#2642）。另有一条历史多 Agent 并发限制问题（#1383）在当日被关闭。

## 2. 版本发布

今日无新 Release。

## 3. 社区热点 Issues

> 说明：过去 24 小时内更新的 Issue 仅 3 条，以下为全部条目，未凑满 10 条。

1. **[#1383 [CLOSED] [bug] 会员权益声称支持多 Agent，但两个「小龙虾」同时思考即触发限制**
   https://github.com/MoonshotAI/kimi-cli/issues/1383
   - 状态：已于 2026-09-14 关闭｜作者：asecret｜创建：2026-03-10｜评论 6｜👍 0
   - 环境信息：kimi 1.15.0，订阅档位 Allegretto，模型未填写。
   - 重要性：围绕「多 Agent 并发」的权益与限流一致性争议，是订阅用户对产品承诺与实际行为落差的直接反馈。经过数月讨论后当日关闭，值得关注其对并发限制策略的最终处理结论。

2. **[#2643 [OPEN] [kimi web] 输入法组词状态下按回车被误判为「发送消息」**
   https://github.com/MoonshotAI/kimi-cli/issues/2643
   - 状态：新提交，待处理｜作者：wangjin1982｜创建/更新：2026-09-14｜评论 0｜👍 0
   - 重要性：影响所有中日韩输入法用户的日常输入体验——在 `kimi web` 输入框中组词未完成时按回车（本意是候选词上屏）会直接发送未完成内容。属于高优先级、低修复成本的输入交互缺陷，直接影响中文用户的主力使用场景。

3. **[#2642 [OPEN] 功能需求：Kimi Work 会话内支持对 Agent 回复的可视化批注与审阅反馈**
   https://github.com/MoonshotAI/kimi-cli/issues/2642
   - 状态：新提交，待处理｜作者：Zhywleo｜创建/更新：2026-09-14｜评论 0｜👍 0
   - 重要性：提出对 Agent 长回复（计划、报告、方案类）进行逐段可视化批注与审阅反馈，指向人机协作中的「审阅闭环」能力。该需求附带明确的提交对象与渠道（Kimi Work / Kimi Code 团队、code@moonshot.ai、GitHub Issues），显示出较强的产品化诉求。

## 4. 重要 PR 进展

过去 24 小时内无 Pull Request 更新。

## 5. 功能需求趋势

基于本次提供的 Issue 数据，可观察到的方向有：

- **人机协作审阅能力**：#2642 提出对 Agent 回复的逐段批注与审阅反馈，反映出用户不再满足于「一次性生成」，而是希望在长文档/计划类输出上获得可评论、可回溯的交互方式。
- **多 Agent 并发与权益边界**：#1383 关注多 Agent 同时运行时的限制问题，涉及订阅权益与实际能力的一致性。
- **Web 端输入体验与本地化**：#2643 聚焦 `kimi web` 与 CJK 输入法的兼容性，属国际化和基础交互质量问题。
- **IDE / 新模型 / 性能等方向**：本次数据中无相关 Issue，暂不做推断。

## 6. 开发者关注点

- **输入法兼容性是高频痛点**：CJK 用户在使用 `kimi web` 时，IME 组词回车与「发送消息」的按键语义冲突，会导致未完成内容被误发，需要修复组词状态下的回车处理逻辑。
- **产品承诺与实际限制需对齐**：多 Agent 权益说明与并发限制行为不一致，容易引发订阅用户的困惑与不满，建议在文档与限制提示上更明确。
- **长回复的可审阅性不足**：用户希望对 Agent 的计划、报告类输出进行逐段批注与反馈，说明当前会话缺少结构化的审阅与反馈回路。
- **社区反馈渠道明确**：Issue #2642 中列出了客户端反馈入口、code@moonshot.ai 与 GitHub Issues 等多条渠道，反映用户对官方响应路径有明确期待。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报（2026-09-14）

## 1. 今日速览

今日社区最大的焦点是新版布局（V2 UI）的强制推行引发大规模反弹：旧布局被移除、且新布局不支持多工作树/垂直标签，多个高赞 Issue 集中表达不满，其中 #37012 已累积 44 条评论、59 个赞。与此同时，v1.18.30 引入的 `SystemPrompt.environment` TypeError 崩溃被多个独立用户复现，成为当前最严重的技术回归。另有若干针对 TUI、LLM 兼容性与性能的修复 PR 在今日推进。

---

## 2. 版本发布

过去 24 小时内无新 Release。

---

## 3. 社区热点 Issues

1. **[#37012](https://github.com/anomalyco/opencode/issues/37012) [FEATURE] keep legacy layout option**（OPEN，44 评论，👍59）
   社区呼声最高的议题，请求保留旧布局，理由是旧版可从主窗口快速访问几乎所有功能。评论数与点赞数均为今日最高，代表社区对布局变更的集中诉求。

2. **[#48953](https://github.com/anomalyco/opencode/issues/48953) Why do we have to use the new layout?**（CLOSED，7 评论，👍11）
   用户指出设置中无法在旧/新布局间切换。情绪强烈但已被关闭，反映官方对布局切换请求的当前处理态度。

3. **[#36942](https://github.com/anomalyco/opencode/issues/36942) [FEATURE]: Vertical tabs**（OPEN，19 评论，👍34）
   新 UI 强制横向标签，在多标签场景下难以使用，请求支持垂直标签。跨两个月的长期高赞需求。

4. **[#48835](https://github.com/anomalyco/opencode/issues/48835) 旧布局被强制移除，但新布局不支持多工作树**（OPEN，5 评论，👍9）
   中英双语反馈：9 月 14 日凌晨 Desktop 突然切换新布局，且新布局缺失多工作树能力，属于功能倒退而非单纯观感问题。

5. **[#48837](https://github.com/anomalyco/opencode/issues/48837) 强制 V2 界面破坏多项目/多代理工作流（20+ 会话）**（OPEN，3 评论，👍11）
   面向重度用户（20+ 会话）的生产力反馈，点赞数较高，说明高负载工作流受影响明显。

6. **[#48645](https://github.com/anomalyco/opencode/issues/48645) v1.18.30 回归：每次提示触发 SystemPrompt.environment TypeError**（OPEN，5 评论，👍6）
   升级至 1.18.30 后所有提示立即失败，1.18.18 正常，属明确的版本回归。

7. **[#48803](https://github.com/anomalyco/opencode/issues/48803) v1.18.30 同一 TypeError（Effect layer 装配问题）**（OPEN，4 评论，👍5）
   与 #48645 同源，指出是 Effect layer 装配中未定义的节点，1.18.20 经 A/B 验证可用，进一步锁定问题范围。

8. **[#48372](https://github.com/anomalyco/opencode/issues/48372) SystemPrompt.environment 崩溃（TUI 与 run 均受影响）**（OPEN，4 评论，👍15）
   同样问题的最早记录之一（9 月 10 日创建），获得 15 个赞，说明该崩溃影响面广、持续多日。

9. **[#45278](https://github.com/anomalyco/opencode/issues/45278) 订阅续费支付被拒（卡与银行均无异常）**（OPEN，17 评论，👍5）
   已正常付款约三个月后突然被拒，影响付费用户续订，需关注是否存在计费系统问题。

10. **[#48800](https://github.com/anomalyco/opencode/issues/48800) invalid_request_error（免费 Muse Spark 1.2 模型）**（CLOSED，6 评论）
    使用免费 Muse Spark 1.2 时上游请求失败；结合 #48962、#48964，模型侧请求错误在今日集中出现。

---

## 4. 重要 PR 进展

1. **[#48952](https://github.com/anomalyco/opencode/pull/48952) fix(tui): 跨标签保留表单草稿**（OPEN，Closes #48950）
   修复 V2 TUI 中切换会话时未完成的表单答案丢失问题，直接改善新 UI 的日常体验。

2. **[#48990](https://github.com/anomalyco/opencode/pull/48990) fix(tui): 配置未变更时 SIGUSR2 重载跳过实例销毁**（OPEN，Closes #42621）
   修复 TUI 将 SIGUSR2 转发给 worker reload RPC 导致的不必要实例失效。

3. **[#48985](https://github.com/anomalyco/opencode/pull/48985) fix(llm): 保留兼容的工具签名**（OPEN，Closes #8321）
   处理 OpenAI 兼容提供方附加的、由提供方持有的续写数据，避免工具签名在转发中丢失。

4. **[#48638](https://github.com/anomalyco/opencode/pull/48638) fix(core): 消除 turn diff 引起的持久化事件写放大**（OPEN，Closes #48641）
   指出 `SessionSummary.summarize` 将完整 git patch 文本附加到事件上，造成写放大，属性能优化类修复。

5. **[#48967](https://github.com/anomalyco/opencode/pull/48967) feat(session): 将 MCP 工具 schema 延迟到 Anthropic tool search 之后**（CLOSED）
   实测六台 MCP 服务器的工具定义占 184k token 初始上下文的 82%，该改动旨在显著削减 prompt 前缀开销，方向价值高（已关闭）。

6. **[#48513](https://github.com/anomalyco/opencode/pull/48513) feat: 在 effort 切换间保留 prompt cache**（CLOSED）
   会话中途切换模型变体（effort）会改变 prompt 前缀导致缓存失效，此改动尝试保持缓存命中。

7. **[#48524](https://github.com/anomalyco/opencode/pull/48524) feat(app): Web UI 新增 /thinking 命令切换推理显示**（OPEN）
   在 Web 会话命令面板中加入 `/thinking` 以显示/隐藏模型推理摘要，对齐 TUI 已有能力，并补充各语言 i18n 键。

8. **[#43238](https://github.com/anomalyco/opencode/pull/43238) feat(tui): 新增 /cd 目录切换命令与 change_directory 工具**（OPEN，Closes #43223）
   允许用户与 agent 在不重启会话的情况下切换工作目录。

9. **[#43455](https://github.com/anomalyco/opencode/pull/43455) fix(snapshot): 增加重试、熔断与瞬态错误检测**（OPEN，Closes #43445）
   针对 Windows 虚拟内存不足时 git 进程报 "paging file too small" 导致快照失败的问题。

10. **[#48978](https://github.com/anomalyco/opencode/pull/48978) fix(tui): 守卫模型解析并处理变体选择**（OPEN，Closes #48957）
    对 `util/model.ts` 中的 `parse` 增加非字符串/undefined 防护，属稳定性修复。

---

## 5. 功能需求趋势

- **界面布局与可配置性（今日绝对主导）**：保留旧布局 / 旧布局切换开关（#37012、#38230、#48953）、垂直标签（#36942）、恢复左侧边栏与可禁用顶部导航会话（#48972）、多工作树支持（#48835）、多项目/多代理工作流（#48837）、中文用户对旧 UI 的偏好（#48951）、新布局可用性（#48958、#48960）。
- **会话与会话标识**：自定义 session ID（如 `--session my-project`，#17344）。
- **状态可视化**：在侧栏展示活跃 session skills，并让模型在会话中保持感知（#48355）。
- **后台与目录能力**：后台 agent（#15994）、`/cd` 目录切换（#43238）。
- **推理与缓存控制**：Web UI 推理显示切换（#48524）、effort 切换保留 prompt cache（#48513）。
- **上下文/成本优化**：MCP 工具 schema 延迟加载（#48967）。
- **国际化**：TUI i18n（#48731）。

---

## 6. 开发者关注点

- **v1.18.30 严重回归**：`SystemPrompt.environment` 抛出 `TypeError: undefined is not an object (evaluating 'a.name')`，在全新会话的首个提示即失败；#48645、#48803、#48372 三处独立复现，且 1.18.18/1.18.20 正常，属可定位的版本回归，应优先处理。
- **新布局的强制推行与功能倒退**：社区反馈集中在"无法切换回旧布局"且新布局缺失多工作树、快速切换项目等既有能力，被形容为生产力受损而非单纯审美问题。
- **模型请求错误集中出现**：`invalid_request_error`（#48800）、reasoning `encrypted_content` 未签发给调用方（#48964）、muse-spark-1.3 上游错误（#48962），提示模型侧请求/推理续写数据链路存在一致性问题。
- **性能与成本**：turn diff 写放大（#48638）、MCP 工具定义占上下文 82%（#48967）、prompt cache 因 effort 切换失效（#48513），均指向上下文体积与 I/O 效率。
- **平台稳定性**：Windows GPU/Renderer 进程崩溃（exitCode -2147483645，AMD Radeon，#48747）与 Windows 低内存下快照失败（#43455）。
- **计费与账号**：续费支付被拒（#45278）影响付费用户，需关注计费链路是否异常。

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报 · 2026-09-14

数据来源：github.com/badlogic/pi-mono（earendil-works/pi）

## 1. 今日速览

今日无新版本发布，社区活动集中在**会话状态一致性**与**错误处理**两类问题上：多个 Issue 指出中断/恢复会话时会产生不匹配的 toolCall、损坏的 base64 图片、以及被反复重放的过期 thinking 块，直接导致 provider 返回 400 或丢弃内容。同时，Windows 平台行为、TUI 渲染细节与扩展/模板机制的静默失败成为开发者反馈密集区。PR 侧则有 Node 运行时打包、Windows shell 解析统一化等基础设施改动落地。

## 2. 版本发布

过去 24 小时内无新 Releases。

## 3. 社区热点 Issues

1. **#8684 `PI_OFFLINE` 静默禁用全部 provider 模型发现**（OPEN，8 评论）
   文档称该变量仅关闭启动期网络维护操作，实际却禁用了所有 provider 模型目录的网络请求，属于文档与行为矛盾的隐蔽 bug，讨论热度最高。
   https://github.com/earendil-works/pi/issues/8684

2. **#7739 为启动时间设定预算，对标 jcode 的延迟与内存**（OPEN，8 评论）
   引用 jcode README 基准（10 次交互式 PTY 启动的中位数），要求缩小与 pi 0.62.0 的性能差距，反映社区对启动性能的持续关注。
   https://github.com/earendil-works/pi/issues/7739

3. **#9298 Grok 403 被错误标记为 "OpenAI API error"**（CLOSED，7 评论）
   openai-responses 格式化器把 Grok 的余额/订阅报错显示为 OpenAI 计费错误，误导排查方向；已关闭。
   https://github.com/earendil-works/pi/issues/9298

4. **#8720 工具返回纯空白输出导致会话永久损坏（HTTP 400）**（OPEN，6 评论）
   Windows 上 bash 输出 `\r\n` 时，工具结果被原样发送，OpenAI 兼容 provider 拒绝空/纯空白内容，会话无法继续。影响面广且难以自行恢复。
   https://github.com/earendil-works/pi/issues/8720

5. **#9391 压缩后过期签名 thinking 块每轮重放，Anthropic 全部丢弃**（OPEN，3 评论，👍1）
   手动压缩后每轮都打印 `prefix_binding_mismatch` 并丢弃 15 个 thinking 块，涉及长会话的成本与上下文正确性。
   https://github.com/earendil-works/pi/issues/9391

6. **#9306 中断/出错轮次遗留未匹配 toolCall，下一次 runAgentLoopContinue 被拒**（OPEN，inprogress，4 评论）
   当 assistant 消息已流出 toolCall 但轮次以 error/aborted 结束时，上下文中的悬空 toolCall 会被 provider 拒绝。
   https://github.com/earendil-works/pi/issues/9306

7. **#9590 恢复多张多 MB 图片的会话时 base64 损坏（长度非法），后续请求全部 400**（CLOSED，2 评论）
   今日新报并已关闭，属于会话序列化的严重正确性问题。
   https://github.com/earendil-works/pi/issues/9590

8. **#9129 Windows 上 bash 超时未能杀死管道进程**（OPEN，4 评论）
   `killProcessTree` 使用 `taskkill /F /T`，在 Git for Windows（MSYS2）bash 下会遗留孤儿进程。
   https://github.com/earendil-works/pi/issues/9129

9. **#8913 fullscreen 模式强制启用鼠标追踪（含 1003 any-event），无法关闭**（OPEN，5 评论）
   渲染器内部已有 `mouse` 选项但未暴露为设置/环境变量/CLI 参数，属于典型的"能力已存在但不可配置"问题。
   https://github.com/earendil-works/pi/issues/8913

10. **#9585 "fail to touch upstream" 未被识别为可重试错误**（CLOSED，2 评论）
    Pi 在使用工具的任务中偶发中断，核心重试分类器对该消息返回 false（0.85.1 及当前 main 均如此），影响自动化稳定性。
    https://github.com/earendil-works/pi/issues/9585

其他值得留意：#9354（prompt 模板 frontmatter 解析失败被静默丢弃，与 skills 的告警行为不一致）、#9211（`vercelGatewayRouting` 在 vercel-ai-gateway provider 上实际失效）、#9071（扩展注册同名工具无法覆盖内置工具）、#9054（`/new` 不保留会话内临时选择的模型与 effort，已关闭）、#1391（同一 provider 支持多 OAuth 登录，已关闭）。

## 4. 重要 PR 进展

1. **#8474 feat(coding-agent): 打包 Node 运行时**（CLOSED，mitsuhiko）
   改变 `pi-coding-agent` 的打包方式以显著减少文件数量，针对慢 IO 机器（尤其 Windows Defender 拖慢的 Windows）改善启动问题。
   https://github.com/earendil-works/pi/pull/8474

2. **#9581 fix(coding-agent): prompt 模板 frontmatter 解析失败时给出警告**（CLOSED，gvkhosla）
   修复 #9354，复用 skills 对 malformed `SKILL.md` 的诊断路径，避免 YAML 笔误导致 `/foo` 无声消失。
   https://github.com/earendil-works/pi/pull/9581

3. **#9584 fix(coding-agent): 从其他模型切换时选中唯一作用域模型**（CLOSED，mgabor3141）
   修复 #9580：作用域内只有一个且与当前不同的模型时，`Ctrl+P` 误报 "Only one model in scope"。取代被强制推送误关的 #9582。
   https://github.com/earendil-works/pi/pull/9584

4. **#9589 fix(ai): 为 Responses API 的用户输入项补上类型**（CLOSED，Clmzz-gra）
   修复严格 Responses 端点因 input item 缺少必需 `type` 而返回 400 的两个相关 bug。
   https://github.com/earendil-works/pi/pull/9589

5. **#9548 Mid conversation system messages**（OPEN，mitsuhiko）
   把系统提示文本与工具变更纳入 transcript，而非静默改写起始条件，使指令变更/工具可用性在恢复或压缩后可还原。
   https://github.com/earendil-works/pi/pull/9548

6. **#6534 feat(ai): 新增 developer 消息角色**（OPEN，mitsuhiko）
   实验性 PR，为 AI 层增加 developer role，细节见 RFC 54。
   https://github.com/earendil-works/pi/pull/6534

7. **#9434 feat(coding-agent): 允许扩展追加会话系统提示**（OPEN，wutongyuonce）
   让 `session_start` 处理器返回仅追加的 `systemPromptAppend` 贡献，按扩展/处理器顺序收集并带来源元数据与错误隔离，关闭 #9432。
   https://github.com/earendil-works/pi/pull/9434

8. **#9501 / #9504 fix(coding-agent): 统一 Windows shell 解析并接受 Store 别名**（OPEN，petrroll）
   前者统一此前分散的 Windows 二进制查找逻辑并补充文档；后者改用 `accessSync(F_OK)` 校验，避免 `existsSync` 因 EACCES 误判可运行的 Store 别名。
   https://github.com/earendil-works/pi/pull/9501 · https://github.com/earendil-works/pi/pull/9504

9. **#9274 fix(coding-agent): 渲染 diff 时保留缩进**（OPEN，dannote）
   修复 edit 工具行内渲染器在插入文本前丢弃被删行缩进的问题。
   https://github.com/earendil-works/pi/pull/9274

10. **#4318 将 changelog 确认状态从 settings.json 移入 state.json**（CLOSED，solodov）
    新增 StateManager 管理 `~/.pi/agent/state.json`（加锁持久化、写入排队），让 settings.json 保持用户可管理、可经 dotfiles 分享。
    https://github.com/earendil-works/pi/pull/4318

其他：**#9351**（远程编辑预览闪红报错）、**#9329**（将 Orca 终端识别为支持 Kitty 图像）、**#9591**（导出 `detectSupportedImageMimeType` 工具函数）。

## 5. 功能需求趋势

- **会话与上下文状态管理**：#9306、#9391、#9590、#9548、#8720 共同指向中断、恢复、压缩后的上下文一致性问题，是当前最集中的技术方向。
- **性能与启动开销**：#7739（启动延迟/内存预算）、#8474（减少打包文件数以改善 Windows 启动），显示性能优化从"运行时"延伸到"分发与冷启动"。
- **Provider 兼容与路由**：#9298、#9589、#9211 涉及 OpenAI Responses、Grok、Vercel AI Gateway 的适配差异与路由配置失效。
- **扩展与资源机制**：#9071（同名工具覆盖）、#9434（扩展追加系统提示）、#9354（模板解析诊断），扩展系统的可预测性与可观测性需求上升。
- **跨平台（尤其 Windows）**：#9129、#9501、#9504、#8474 反映出 Windows 路径查找、进程管理与启动体验是长期欠账。
- **终端/UI 可配置性**：#8913（鼠标追踪）、#8827（LaTeX 传统字号命令触发整块回退）、#9256（恢复会话时图片全尺寸内联）、#9329（Orca 终端图像支持）。

## 6. 开发者关注点

- **静默失败难以排查**：`PI_OFFLINE` 超出文档范围（#8684）、模板 frontmatter 解析失败无告警（#9354）等，开发者希望配置项与资源加载的行为与文档一致，并在失败时显式提示。
- **错误分类与可恢复性**：`fail to touch upstream` 不被视作可重试（#9585）、Grok 403 被误标为 OpenAI 计费错误（#9298）、悬空 toolCall 使会话被拒（#9306、#8720），说明错误归因与自动重试策略仍需细化。
- **一次错误即导致会话不可用**：#8720、#9590、#9306 都属于"单次异常后整条会话报废"，开发者期望更健壮的降级与自愈路径。
- **文档与实现脱节**：#9211（路由配置仅在一个 adapter 生效）、#8684 引用 `docs/models.md` 与实际行为不符，文档准确性被反复提及。
- **平台一致性**：Windows 下进程清理、shell 查找与启动性能问题反复出现，缺少统一抽象与文档。
- **已有能力未暴露**：#8913 指出渲染器内部已有 `mouse` 选项却无对外开关，属于低成本高收益的改进诉求。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报（2026-09-14）

数据来源：github.com/QwenLM/qwen-code

---

## 1. 今日速览

今日社区最集中的问题是**后台 subagent / shell 完成时 TUI 静默崩溃**（React #185 布局监听 setState 死循环），#11500 与 #11849 指向同一根因，已成为 P1 级稳定性焦点。安全与权限侧同时出现两条值得关注的问题：Bash 允许规则可被 `\r/\v/\f` 等字符绕过（#11851），以及 daemon 上权限队列按 ACP 连接串行化导致空闲会话长期阻塞其他会话（#11795）。发布侧新增 `cua-driver-rs v0.20.7` 预编译二进制与 `v0.23.3-nightly.20260913` 夜间版。

---

## 2. 版本发布

**cua-driver-rs v0.20.7** — Qwen CUA Driver 预编译二进制，vendored 于 `packages/cua-driver`。
- macOS：已签名 + 公证的 universal binary，含 `QwenCuaDriver.app`
- Linux：未签名（x86_64 + arm64，glibc 2.31 下限）
- Windows：未签名 UIAccess worker + 原生 SDK payload（x86_64 + arm64）

**v0.23.3-nightly.20260913.faa395885e** — 夜间构建。
- `refactor(dingtalk)`：移除过期的后台响应聚合逻辑（@qqqys，PR #11570）
- `feat(channels)!`：移除相关能力（破坏性变更）

---

## 3. 社区热点 Issues（10 条）

1. **[#11500](https://github.com/QwenLM/qwen-code/issues/11500) [OPEN, P1] TUI 在多个后台 agent 完成时静默退出（未捕获 React #185）** — 13 条评论，今日热度最高。Ink `useBoxMetrics` 布局监听触发 setState 循环（"Maximum update depth exceeded"），进程直接掉回 shell 且无错误提示。影响所有使用多后台子代理的用户，是当前最严重的交互层缺陷。

2. **[#11590](https://github.com/QwenLM/qwen-code/issues/11590) [CLOSED, P1] 非 Qwen 厂商模型 400 报错：自动插入的 metadata 不兼容** — 8 条评论。请求发往 DashScope OpenAI 兼容端点时会在顶层塞入 `metadata` 对象，聚合网关将其转发给非 Qwen 后端（如 `ZHIPU/GLM-5.3-Flash`），对端 `metadata` 为 string 类型导致反序列化失败，模型完全不可用。涉及多模型生态兼容性，影响面广。

3. **[#4615](https://github.com/QwenLM/qwen-code/issues/4615) [CLOSED] 项目级 `.mcp.json` 支持 + 待批准语义** — 7 条评论。要求工作区内的 MCP 服务器配置在启动/连接前必须经过显式批准，属于凭据与供应链安全的重要设计。

4. **[#9693](https://github.com/QwenLM/qwen-code/issues/9693) [CLOSED, P2] Windows 上 MCP `-32000 Connection closed`** — 7 条评论。STDIO 传输在 Windows 下即使用户未启用 MCP 也会报错，官方 filesystem / sequential-thinking server 均复现。

5. **[#11556](https://github.com/QwenLM/qwen-code/issues/11556) [OPEN, P1] vscode-ide-companion 0.23.1 在 Remote-SSH 下 webview 卡在加载** — 6 条评论。客户端 1.133.0 (linux-x64) + 服务端 1.137.0 (linux-arm64) 组合复现，直接影响 IDE 集成路线图。

6. **[#11834](https://github.com/QwenLM/qwen-code/issues/11834) [OPEN, P1] `400 invalid params, function parameters is empty (2013)`** — 5 条评论。最基础的「你好」对话即失败，且 `/update` 提示已是最新 0.23.3，属于核心链路阻断型回归。

7. **[#11777](https://github.com/QwenLM/qwen-code/issues/11777) [CLOSED, P3] CI 必需 Test job 间歇性被 SIGTERM** — 5 条评论。所有 vitest 套件全绿后 `npm run test:ci` 在工作区→test:scripts 交接处被外部杀死，属基础设施可靠性问题。

8. **[#11795](https://github.com/QwenLM/qwen-code/issues/11795) [OPEN, P1] 权限队列按 ACP 连接键控，一个空闲会话的未答提示可无限期静默阻塞全部会话** — 5 条评论。daemon 场景下的严重会话隔离缺陷，作者指出序列化范围的修复已在 PR #11802 中实现，本 issue 保留其余修复项。

9. **[#11849](https://github.com/QwenLM/qwen-code/issues/11849) [OPEN, P1] 0.23.3 间歇性静默崩溃，疑似后台 shell/subagent 完成触发** — 4 条评论。报告者明确指其与 #11500 高度相关，说明该崩溃在稳定版上同样存在。

10. **[#11851](https://github.com/QwenLM/qwen-code/issues/11851) [OPEN, P1] 安全：`isAsyncOperator` 把 `\r/\v/\f/\u00a0` 当作 bash 词分隔符，Bash 允许规则可覆盖第二条命令** — 3 条评论。`packages/core/src/permissions/rule-parser.ts` 中的后向扫描使用 JS `\s` 类，可能造成权限规则逃逸，属权限模型正确性问题。

---

## 4. 重要 PR 进展（10 条）

1. **[#11864](https://github.com/QwenLM/qwen-code/pull/11864) [OPEN] `fix(core)!: let bash expand project directory variables in command hooks`** — 让 bash 按配置原样接收 hook 命令字符串，并从环境中读取 `$QWEN_PROJECT_DIR`、`$CLAUDE_PROJECT_DIR`、`$GEMINI_PROJECT_DIR`。破坏性变更，影响 hooks 行为。

2. **[#11163](https://github.com/QwenLM/qwen-code/pull/11163) [OPEN] `feat(web-shell): manage git remotes from the workspace branch picker`** — Web Shell 的 workspace git 弹层新增 **Manage Remotes** 面板，可列出 remote 及其 fetch/push 配置，提升 Web 端仓库管理能力。

3. **[#11859](https://github.com/QwenLM/qwen-code/pull/11859) [OPEN] `ci(pnpm): install dependencies with pnpm in CI and release`** — CI 与发布流程改用锁定版本的 pnpm 安装依赖，确保 CI 测试的依赖图与发布产物一致，属 #10444 的 Stage 2。

4. **[#11865](https://github.com/QwenLM/qwen-code/pull/11865) [OPEN] `fix(core): treat only space/tab/newline as word separators in isAsyncOperator`** — 针对 #11851 的安全修复，收窄词分隔符判定，关闭权限规则逃逸路径。

5. **[#11575](https://github.com/QwenLM/qwen-code/pull/11575) [OPEN] `ci(desktop): publish the desktop app when the CLI releases`** — 让桌面端跟随 CLI 稳定版发布，与 VS Code companion 的做法对齐，同版本号发布。当前合入后保持惰性（inert）。

6. **[#11857](https://github.com/QwenLM/qwen-code/pull/11857) [OPEN] `ci(review): skip re-reviewing a push whose diff is unchanged`** — 当 push 相对 base 的 diff 与已审阅过的 head 逐字节相同时跳过自动复审（典型场景为 "Update branch"），降低 CI 与审阅成本。

7. **[#11863](https://github.com/QwenLM/qwen-code/pull/11863) [OPEN] `docs(hooks): complete the event catalog and correct stale claims`** — 补全 hooks 用户指南，使事件表、matcher 表与逐事件详情覆盖全部 22 个 hook 事件，并修正与代码不符的表述。

8. **[#8927](https://github.com/QwenLM/qwen-code/pull/8927) [OPEN] `feat(channels): bound session lifetime with sessionRotation`** — 新增 per-channel `sessionRotation` 选项，限制同一路由复用会话的时长，超限后下一条消息开启新会话。

9. **[#10455](https://github.com/QwenLM/qwen-code/pull/10455) [OPEN, autofix/needs-human] `fix(cli): don't crash startup when the output-language file is unwritable`** — 修复只读 home 目录或 root 遗留文件导致 CLI 启动崩溃的问题（#10453）。

10. **[#11134](https://github.com/QwenLM/qwen-code/pull/11134) [OPEN, autofix/needs-human] `fix(ci): retry the transient all-green macOS E2E shard death once`** — 为 macOS E2E 腿加上与 Linux `sandbox:none` 腿一致的单次预算受限重试，缓解全绿却失败的抖动。

其他值得留意：**[#9305](https://github.com/QwenLM/qwen-code/pull/9305)** VP 模式下短内容顶部对齐修正、**[#11845](https://github.com/QwenLM/qwen-code/pull/11845)** 恢复因 squash merge 丢失的 pnpm 范围键说明提交、**[#11853](https://github.com/QwenLM/qwen-code/pull/11853)** 记录 Windows inode 门禁所掩盖的真实失败。

---

## 5. 功能需求趋势

从本次 Issues 列表可提炼出以下社区关注方向：

- **IDE 集成与远程开发**：VS Code companion 在 Remote-SSH 下不可用（#11556），叠加 `roadmap/ide-integration` 标签，说明远程开发场景是明确的路线图缺口。
- **多模型 / 多厂商兼容**：非 Qwen 模型因 metadata 字段导致 400（#11590），社区希望 Qwen Code 能作为通用客户端对接非 Qwen 后端。
- **MCP 生态与安全**：项目级 `.mcp.json` 与待批准语义（#4615）、Windows STDIO 传输失败（#9693），反映 MCP 已成为主要集成面，且需要安全边界。
- **后台任务与会话管理**：恢复已完成的后台 subagent（#5540）、会话轮换（#8927）、权限队列跨会话隔离（#11795），围绕 daemon 与长时任务的会话生命周期管理需求集中出现。
- **交互与可访问性**：交互式提示的语音输入模式（#5431）、VP 模式布局修正（#9305）。
- **渠道集成体验**：钉钉渠道的交互式卡片（#6443）与渠道会话轮换（#8927）。
- **开发工作流优化**：worktree 的 `node_modules` 按依赖变化条件软链（#5790）、setup-worktree 的 Corepack→npx 回退健壮性（#10524）。

---

## 6. 开发者关注点

- **稳定性是当前第一痛点**：后台 subagent / shell 完成引发的 TUI 静默崩溃在夜间版与稳定版 0.23.3 上均有报告（#11500、#11849），且无任何错误提示，严重影响可诊断性。相关的 `useBoxMetrics` 循环守卫新测试在 Windows 与高负载 CI 下确定性失败（#11817），说明修复本身尚未稳定。
- **核心链路回归**：最基础的问候即返回 `400 invalid params, function parameters is empty (2013)`（#11834），与 `/update` 显示已是最新形成矛盾体验。
- **安全与权限模型精度**：Bash 允许规则可被非常规空白字符绕过（#11851），权限队列缺乏可见性与 TTL（#11795），社区对权限边界的正确性要求明显提高。
- **CI / 测试基础设施噪声**：多份 issue 与 PR 集中在间歇性 SIGTERM（#11777）、macOS E2E 全绿死亡（#11134）、E2E checkout 无重试（#11297）、视觉快照非确定性（#11465）——维护者正系统性地为各条流水线补齐「单次有界重试」契约。
- **依赖与构建一致性**：pnpm 切换（#11859、#11845）与发布流程统一，反映团队在收敛发行链路的一致性。
- **文档滞后于代码**：hooks 事件目录不完整且存在过时描述（#11863），属于长期被 defer 的技术债。

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI 社区动态日报 — 2026-09-14

> 数据来源：github.com/Hmbown/DeepSeek-TUI（仓库现以 CodeWhale 为公开产品名，Issue/PR 链接指向 Hmbown/CodeWhale）

## 1. 今日速览

今日最核心的动态是 v0.9.14 里程碑进入集中落地阶段：PR #6161 打包了 console-freeze、审批静默死亡、压缩与会话保留等修复，Issue #6094 则说明 v0.9.13 处于最终验证、`main` 为活跃开发线。同时，CodeWhale 品牌化与遗留包弃用（`deepseek-tui` npm 包停止发布）继续推进，社区侧的高热度讨论集中在 TUI 稳定性、可观测性（token/工具诊断）与架构解耦。

## 2. 版本发布

**v0.9.13**

- 发布说明要点：**Codewhale** 是 Shannon Labs 的公开产品；`codewhale` 命令、npm 包与 release 资产名保持小写技术标识。
- **遗留 npm 包 `deepseek-tui` 已弃用，不再发布新版本**，来自 v0.8.x 遗留 `deepseek` 的用户需要迁移。
- 状态（据 Issue #6094）：`0.9.13` 处于最终验证中，CI 在确切 head 上变绿前不会打 tag；`main` 为实时开发线，v0.9.14 里程碑已开放跟踪。

链接：https://github.com/Hmbown/Codewhale/releases （Issue #6094: https://github.com/Hmbown/Codewhale/issues/6094）

## 3. 社区热点 Issues

1. **#5316 [OPEN] EPIC-005: CodeWhale TUI Crate Decomposition（伞形 Issue）** — 评论 25，为今日热度最高。承载 Core 执行计划 C03–C10 的归属、依赖顺序与完成证据，是理解本轮重构节奏的总入口。链接：https://github.com/Hmbown/Codewhale/issues/5316

2. **#6011 [OPEN] 用量与工具诊断：token 账目（按组件/按模型 + 缓存命中率、按工具 sink、压缩成本）与工具调用错误模式** — 评论 7。对应 Core C11，直击用户对"钱花在哪、哪个工具在报错"的可观测性需求。链接：https://github.com/Hmbown/Codewhale/issues/6011

3. **#5586 [OPEN] 拆分超大文件：lib.rs (18.7k)、config.rs (12.3k)、client.rs (11.1k)、runtime_threads.rs (9.3k)** — 评论 7，对应 Core C09。巨型文件是编译时间与合并冲突的根源，属于长期可维护性关键项。链接：https://github.com/Hmbown/Codewhale/issues/5586

4. **#6018 [CLOSED] Google Gemini 在"从零安装"场景下的问题** — 评论 6，对应 Core C22，已关闭。新用户首次接入 Gemini 即失败，是转化路径上的高危缺陷，修复关闭值得确认。链接：https://github.com/Hmbown/Codewhale/issues/6018

5. **#6015 [OPEN] fleet：自适应防卡死 + 更宽的安全只读 shell 语法（默认生效，非逐用户配置）** — 评论 5，归入 Core C05/C06。默认值层面的稳定性改进，影响所有用户的交互可靠性。链接：https://github.com/Hmbown/Codewhale/issues/6015

6. **#5587 [OPEN] 死代码清扫第 2–4 阶段：75 处 test-only 标记、约 242 处过期 allow、blanket-allow 转换** — 评论 5。基于对 `crates/tui/src` 中全部 379 处 `allow(dead_code)` 的审计，是代码健康的系统性治理。链接：https://github.com/Hmbown/Codewhale/issues/5587

7. **#6009 [CLOSED] `/models` 只返回部分模型列表 — 缺少分页支持** — 评论 4，已关闭。`GET /v1/models` 未处理 OpenAI 风格 `has_more`/`after` 游标分页，导致模型选择不完整。链接：https://github.com/Hmbown/Codewhale/issues/6009

8. **#5856 [OPEN] 计算机使用插件：live-install receipt + 首个 look-act 循环** — 评论 4，标签含 release-blocker。围绕"内置 bundle 是否无需单独安装仪式"的验收标准讨论，涉及 release 阻断。链接：https://github.com/Hmbown/Codewhale/issues/5856

9. **#6058 [OPEN] 2026-09-11 安全扫描** — 评论 2。指出 CodeQL 告警因 `GITHUB_CODEWHALE_SECURITY_PAT` 未配置而无法列出，安全可见性本身存在缺口。链接：https://github.com/Hmbown/Codewhale/issues/6058

10. **#6050 [OPEN] 可插拔的 agent memory：通用后端接缝，causal-memory / mem0 作为参考实现** — 评论 2。当前 `MemoryBackend` 仅有 `Native`/`Off` 两个变体，硬编码限制了第三方记忆后端接入。链接：https://github.com/Hmbown/Codewhale/issues/6050

其他值得留意：#6147（引擎内两个无界 channel 改为有界，已关闭）、#6040（MCP OAuth 登出复用远端授权导致无法切换工作区，已关闭）、#4173（去硬编码：81 个模型、31 个 provider、约 52 个工具）。

## 4. 重要 PR 进展

1. **#6161 [OPEN] v0.9.14：console-freeze、approval-death、压缩与会话保留修复** — 今日新建，汇集本轮可验证的里程碑工作：运行中执行 `/mcp` 导致的控制台冻结、无人值守审批因 idle-timeout 取消而静默死亡等两个已诊断缺陷。链接：https://github.com/Hmbown/Codewhale/pull/6161

2. **#6171 [OPEN] feat(providers): 新增 AICraft OpenAI 兼容 provider 模板** — 沿用 SenseNova、Baseten、Groq、Cerebras、Command Code 相同的 descriptor-row 模式，`AICRAFT_TEMPLATE_ID = "aicraft"`。链接：https://github.com/Hmbown/Codewhale/pull/6171

3. **#6170 [OPEN] fix(weixin-bridge): 让微信桥可用并简化 Quick Start** — 原 README 指向不存在的 `/opt/codewhale/weixin-bot-bridge` 路径、缺少启动命令、引用了无人读取的 env 文件。链接：https://github.com/Hmbown/Codewhale/pull/6170

4. **#6105 [OPEN] chore(deps): rustls 0.23.43 → 0.23.44** — 依赖维护性升级。链接：https://github.com/Hmbown/Codewhale/pull/6105

5. **#6154 [CLOSED] feat(tui): `/pet` 模式** — 裸 `/pet` 切换；`/pet on` 将内容视口整体交给宠物栖息地，并在每个被接受的回合中通过既有通道展示真实助手回答或错误。链接：https://github.com/Hmbown/Codewhale/pull/6154

6. **#6110 [CLOSED] feat(pet): 持久化世界与工作驱动的点阵形态** — 同一套 980 个点阵在浏览器、Apple、Android 与 TUI Watch 间共享一个持久音视频世界。链接：https://github.com/Hmbown/Codewhale/pull/6110

> 注：过去 24 小时内更新的 PR 共 6 条，以上为全部；其余 PR 未见新增。

## 5. 功能需求趋势

- **可观测性与成本控制**：token 分账（按组件、按模型、缓存命中率）、按工具 sink、压缩成本，以及工具调用错误模式统计（#6011）。
- **稳定性与默认值加固**：自适应防卡死、只读 shell 语法扩展、审批提示超时（到期默认拒绝，#6101 已关闭）、引擎内无界 channel 收紧（#6147）。
- **架构解耦与去硬编码**：TUI crate 拆分（#5316）、巨型文件分解（#5586）、模型/provider/工具注册表去硬编码（#4173）。
- **子代理与 fleet 编排**：agents 底部视图（实时列表、状态/耗时/token、focus/message/stop/历史，C01 #5479）、fleet 模型 shortlist 流程 provider → model → shortlist → role（#5915）。
- **目标与验证语义**：goal gates — 对 complete/blocked、needs_input/deferred/stalled 的独立验证、post-verify 阶段（#6013）。
- **可插拔扩展**：agent memory 后端接缝（#6050）、OpenAI 兼容 provider 模板持续扩充（#6171）。
- **TUI 交互体验**：Session Picker 隐藏空自动会话、高亮当前会话、翻页与加宽面板（#6014）。
- **计算机使用能力**：内置 bundle 的 look-act 循环与安装凭证（#5856）。

## 6. 开发者关注点

- **静默失败最伤体验**：工作流在脚本求值阶段失败却无 toast、无状态行、无面板条目（#5528，已关闭）；审批流程在 idle-timeout 下静默死亡（#6161）。"出问题必须可见"是反复出现的诉求。
- **首次安装即失败**：Gemini 从零安装问题（#6018）、`/models` 分页缺失导致模型列表不全（#6009）、微信桥文档与路径不可用（#6170）——新用户与集成路径的摩擦集中。
- **授权与凭证语义混乱**：MCP OAuth 登出后重新登录仍复用远端 grant，导致无法切换工作区（#6040）；安全扫描因 PAT 未配置而无法列出 CodeQL 告警（#6058）。
- **大型 Rust 代码库的维护负担**：单文件上万行与 379 处 `allow(dead_code)` 的审计需求，反映出编译、审查与合并冲突的持续成本（#5586、#5587）。
- **配置默认值之争**：多项需求（防卡死、只读 shell 语法、goal gates）明确要求以默认行为生效而非逐用户配置，显示用户对"开箱即稳"的偏好（#6015、#6013）。
- **发布节奏关切**：0.9.13 未打 tag 前保持"CI 绿才算数"的纪律，同时遗留 npm 包弃用需迁移指引，开发者需关注迁移路径（#6094、v0.9.13 发布说明）。

</details>

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar) 自动生成。*