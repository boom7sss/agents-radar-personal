# AI CLI 工具社区动态日报 2026-08-02

> 生成时间: 2026-08-02 03:32 UTC | 覆盖工具: 9 个

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

# AI CLI 工具横向对比分析报告（2026-08-02）

## 1. 生态全景

当日 9 款主流 AI CLI 工具合计产生超 200 条 Issue/PR 更新及 5 个版本发布，头部工具集体进入"稳定性攻坚期"：长会话可靠性、MCP 进程管理、平台兼容性是横跨所有工具的通病。社区需求正从"能跑通"转向"可观测、可信、可控"，对模型行为透明性和资源占用治理的诉求显著提升。同时，多模型/多 Provider 支持已从差异化卖点演变为标配能力。开源社区工具（OpenCode、Pi、Qwen Code）在功能迭代速度上正快速追赶商业工具。

## 2. 各工具活跃度对比

| 工具 | Issues | PRs | Releases |
|------|--------|-----|----------|
| Claude Code | 新增 ~10 | 3（均关闭） | 无 |
| OpenAI Codex | 50 更新 | 11 更新 | 无 |
| Gemini CLI | 50 更新 | 50 更新 | v0.55.0-nightly |
| GitHub Copilot CLI | 10 精选（含新增） | 0 | v1.0.78-2 补丁 |
| Kimi Code CLI | 5 更新 | 5 更新 | 无 |
| OpenCode | 10 精选 | 10 精选 | v1.18.11 补丁 |
| Pi (pi-mono) | 10 精选 | 10 精选 | 无 |
| Qwen Code | 10 精选 | 50 更新 | v0.21.3 正式版 + 2 nightly |
| DeepSeek TUI | 10 精选 | 10 精选（含批量 8 项修复） | 无 |

## 3. 共同关注的功能方向

**① 长会话可靠性与上下文压缩（8/9 工具）**
- Claude Code：#73638 会话重命名注入伪轮次，transcript 永久损坏
- Codex：#31033 自动压缩破坏会话；#22004 超大会话 JSONL 崩溃
- Copilot：#4325 events.jsonl 超 V8 上限，session 永久无法恢复
- Gemini：#22323 子代理 MAX_TURNS 中断却误报 GOAL 成功
- Pi：#6879 压缩阈值失效、#7020 压缩后挂起
- DeepSeek：#5064 在压缩摘要中引入"确定性延续契约"作为正向解法
- Qwen：#8279 讨论压缩复用提示缓存以降本

**② MCP 生态与进程资源治理（5/9 工具）**
- Codex：#17574 子代理泄漏 stdio MCP 进程树
- Copilot：#2901 请求 MCP 服务器懒加载（14👍）
- Kimi：#2574 Unity MCP 连接后卡死
- OpenCode：v1.18.11 修复 MCP SSE 无限重连
- Claude：#54394/#82230 嵌入式 ugrep 正则回溯导致 OOM 与宿主冻结

**③ 模型配置灵活性与 BYOK（6/9 工具）**
- Copilot：#3282 多 BYOK 模型切换（19👍）、#2904 agent 级 reasoning effort（16👍）
- Codex：#29156 自定义 provider 桌面端不可用
- OpenCode：#20859 Copilot 子代理模型配置被忽略、计费错乱
- Claude：#82466 settings.json 默认模型不生效
- Pi：新增 Cline API/ClinePass、MiniMax 多 Provider 接入
- Qwen：#8331 为 DeepSeek 默认启用 ToolSearch

**④ 安全护栏、权限与用户控制（5/9 工具）**
- Claude：Fable 5 护栏误报且静默降级（#83233，当日 5 个同类 Issue）
- Copilot：#4318 autopilot 任务完成逻辑覆盖用户显式"仅研究"指令
- Gemini：#22093 用户禁用后 subagent 仍被自动调用
- DeepSeek：#4684 danger-full-access 与工具层 workspace 边界语义不一致
- Gemini：#26525 Auto Memory"先发送、后脱敏"的隐私隐患

**⑤ Agent 可观测性（5/9 工具）**
- Gemini：PR #27310 subagent 轨迹分享基建
- OpenCode：#15223 TUI 子代理视图、#29909 实时 token/TPS 显示
- Codex：#14630 TUI 语音转写（49👍，全场第二高）
- Qwen：#7966 会话产物文件归属追踪
- Claude：#42700 Remote Control TTS 无障碍（22👍）

**⑥ Windows/跨平台兼容性（7/9 工具均有阻断级问题）**
- Codex：OneDrive 断连、MSIX 缺 WSL 二进制、Win10 截图 API 失败
- Claude：WSL2 宿主冻结、MSIX 崩溃致数据丢失
- Copilot：WSL2 下 Ctrl+H 误判
- Gemini：Wayland 下 browser agent 失败
- DeepSeek：Windows npm 全局安装参数拼接错误

## 4. 差异化定位分析

| 工具 | 定位 | 核心差异点 |
|------|------|-----------|
| **Claude Code** | 企业级 Agent 平台 | IDE 集成最深（#24726 获 197👍）、Fable 5 模型 + 安全护栏、Remote Control 远程会话 |
| **OpenAI Codex** | OpenAI 生态桌面 + CLI | Desktop App + ChatGPT 订阅联动、Computer Use 多模态、MCP 生态扩张 |
| **Gemini CLI** | Google 生态 Agent 研究前沿 | 子代理架构 + 系统化行为评估体系（EPIC #24353，76 个评测）、Auto Memory 记忆系统 |
| **Copilot CLI** | GitHub 生态自动化 | Rust 实现、autopilot 非交互模式优先、BYOK/agent 自定义能力强、当前最稳定 |
| **Kimi Code** | Moonshot 生态轻量入口 | 轻量化 + Web UI 预览、OpenAI 兼容多 provider、中文社区 |
| **OpenCode** | 本地优先 + 插件化 | 本地优先与隐私主张、统一插件市场大型重构（PR #40108）、多端覆盖 |
| **Pi (pi-mono)** | 个人 AI 助手基础设施 | Provider 聚合最激进（新增 Cline/ClinePass/MiniMax）、兼容 Claude Code skill 生态 |
| **Qwen Code** | 中文企业 + 云生态 | /review 验证能力深度增强、qwen serve 多工作区生产化、本地模型接入 |
| **DeepSeek TUI** | 开源社区 + 安全沙箱 | Rust 单维护者社区驱动、沙箱与权限语义治理、本地化矩阵（印地语/韩语等） |

## 5. 社区热度与成熟度

- **最活跃（日更新 50 条）**：OpenAI Codex、Gemini CLI、Qwen Code。三者分别处于桌面化扩张、Agent 可靠性攻坚、云原生功能爆发期。
- **社区参与深度最高**：Claude Code——单日 PR 仅 3 条但 #24726 累积 197👍 为全场之最，且 Fable 5 护栏误报单日爆发 5 个同类 Issue，反映大规模企业用户基数。
- **成熟稳定期**：Copilot CLI——仅发补丁版本、无 PR 更新，处于维护模式，但 BYOK 需求高赞（19👍）显示仍有明确演进方向。
- **快速爬坡期**：OpenCode（统一市场架构 PR）、DeepSeek TUI（单维护者批量 8 项修复并整合社区 PR）迭代节奏最激进。
- **小规模但聚焦**：Kimi Code 社区体量最小，讨论集中在工具正确性（StrReplaceFile 计数）与 MCP 集成稳定性。

## 6. 值得关注的趋势信号

1. **上下文压缩成为行业级信任危机**：8/9 工具报告压缩不触发、压缩后挂起、压缩破坏会话等问题。决策者应要求工具提供可验证的压缩日志与恢复机制，而非黑盒自动摘要。

2. **MCP 从"接入便利"走向"生命周期治理"**：进程泄漏、无限重连、启动全量加载说明 MCP 生态亟需标准化连接管理与懒加载规范，这是下一轮稳定性竞争的关键。

3. **安全护栏的"透明度"比"强度"更重要**：Fable 5 静默降级引发强烈反弹——"不知原因的拦截"比错误本身更摧毁信任。护栏必须提供标记理由、申诉路径与显式降级确认。

4. **CLI 工具正从"绑定自家模型"转向"模型中立"**：Copilot BYOK、Pi 聚合 Cline/MiniMax、Qwen 为 DeepSeek 优化，多模型网关兼容性将成为企业选型的核心评估项。

5. **Agent 可观测性从增值功能变为采纳前提**：subagent 轨迹、token/TPS 实时显示、会话产物归属等诉求跨工具出现，预示"可调试的 Agent"将进入企业采购 checklist。

6. **Windows 是共同短板，也是最大增量机会**：Codex、Claude、Copilot 三家在 Windows/WSL2 均有阻断级缺陷，率先解决的企业将赢得 Windows 市场的分化优势。

7. **隐私保护前移**：Gemini"先发送后脱敏"的争议与 OpenCode 隐私文档高赞（58👍）表明，数据最小化原则正从合规要求转化为产品功能，本地优先架构的竞争力在提升。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告  
*数据来源：anthropics/skills 官方仓库 | 截止 2026-08-02*

---

## 1. 热门 Skills 排行

按社区评论/关注度排序，以下为当前最受关注的 5~8 个 Skill PR（均为 Open 状态）。

### ① document-typography（#514）  
- **功能**：为 AI 生成文档添加排版质量控制，修复孤行、寡段、编号错位等高频问题。  
- **讨论热点**：几乎所有 Claude 生成文档都会遇到这些问题，社区普遍认为这是高价值、通用性强的技能。  
- **状态**：Open  
- [GitHub PR #514](https://github.com/anthropics/skills/pull/514)

### ② ODT skill（#486）  
- **功能**：支持 OpenDocument 格式（`.odt`、`.ods`）的创建、模板填充、读取及 ODT→HTML 转换。  
- **讨论热点**：填补官方技能对开源/ISO 标准文档格式的支持空白，尤其受 LibreOffice 用户关注。  
- **状态**：Open  
- [GitHub PR #486](https://github.com/anthropics/skills/pull/486)

### ③ frontend-design 改进（#210）  
- **功能**：重写 frontend-design 技能，提升指令的清晰度、可执行性和内部一致性，确保 Claude 能在单次会话中遵循。  
- **讨论热点**：社区对前端设计类技能的落地质量要求高，讨论集中在“如何让抽象设计原则变为可操作步骤”。  
- **状态**：Open  
- [GitHub PR #210](https://github.com/anthropics/skills/pull/210)

### ④ skill-quality-analyzer 与 skill-security-analyzer（#83）  
- **功能**：两个元技能——质量分析器从结构、文档、示例等五个维度评估 SKILL.md；安全分析器检查潜在安全风险。  
- **讨论热点**：直接回应社区对技能质量和安全性的担忧，被看作官方技能库的可信度基础设施。  
- **状态**：Open  
- [GitHub PR #83](https://github.com/anthropics/skills/pull/83)

### ⑤ self-audit（#1367）  
- **功能**：交付前先做机械文件验证，再按损害严重性进行四维推理审计（v1.3.0）。  
- **讨论热点**：与质量门（quality gate）和 AI 输出可靠性讨论高度契合，提及者强调它适用于任意项目和模型。  
- **状态**：Open  
- [GitHub PR #1367](https://github.com/anthropics/skills/pull/1367)

### ⑥ testing-patterns（#723）  
- **功能**：覆盖测试哲学（Testing Trophy）、单元测试（AAA）、React 组件测试、测试命名等完整测试方法论。  
- **讨论热点**：社区希望 Claude 不再“写一堆无效测试”，而是按模式生成高质量测试代码。  
- **状态**：Open  
- [GitHub PR #723](https://github.com/anthropics/skills/pull/723)

### ⑦ pyxel（#525）  
- **功能**：基于 Pyxel MCP 的复古/像素风游戏开发技能，支持“编写→运行→截图→迭代”工作流。  
- **讨论热点**：作者是 Pyxel 生态核心开发者，MCP 与游戏开发结合引发跨领域关注。  
- **状态**：Open（2026-07-15 最近更新）  
- [GitHub PR #525](https://github.com/anthropics/skills/pull/525)

### ⑧ color-expert（#1302）  
- **功能**：颜色专业知识库，覆盖 ISCC-NBS、Munsell、XKCD 等命名系统，以及 OKLCH/OKLAB/CAM16 等色彩空间选择指南。  
- **讨论热点**：设计类技能的需求持续升温，该技能提供系统化的颜色决策参考。  
- **状态**：Open（2026-07-21 最近更新）  
- [GitHub PR #1302](https://github.com/anthropics/skills/pull/1302)

---

## 2. 社区需求趋势

从 Issues 看，社区最期待的 Skill 方向已非常清晰：

1. **安全与信任治理**  
   - #492 指出社区技能被放入 `anthropic/` 命名空间，形成信任边界滥用风险；  
   - #412 提出 agent-governance 技能（策略执行、威胁检测、信任评分、审计日志）；  
   - #1175 讨论 SharePoint 文档权限逻辑直接写入 SKILL.md 的安全隐患。  
   - 代表 Issue：[#492](https://github.com/anthropics/skills/issues/492)、[#412](https://github.com/anthropics/skills/issues/412)

2. **Agent 输出质量与自我审计**  
   - #1385 提出“预校准→对抗审查→交付验证”三级推理质量门；  
   - #1329 compact-memory 提案，用符号化表示压缩代理持久记忆，减少上下文占用。  
   - 代表 Issue：[#1385](https://github.com/anthropics/skills/issues/1385)、[#1329](https://github.com/anthropics/skills/issues/1329)

3. **Skill 开发者工具链可靠性**  
   - #556、#1169 反复报告 `run_eval.py` 触发率恒为 0%；  
   - #1061 列出 Windows 下 PATHEXT、cp1252、select 管道三大兼容性问题；  
   - #202 要求 skill-creator 从“开发者文档”改为“可执行操作指令”。  
   - 代表 Issue：[#556](https://github.com/anthropics/skills/issues/556)、[#1061](https://github.com/anthropics/skills/issues/1061)

4. **平台互操作与生态扩展**  
   - #16 希望将 Skills 暴露为 MCP；  
   - #228 要求组织级技能共享机制；  
   - #29 询问 AWS Bedrock 支持。  
   - 代表 Issue：[#16](https://github.com/anthropics/skills/issues/16)、[#228](https://github.com/anthropics/skills/issues/228)

---

## 3. 高潜力待合并 Skills

以下 PR 当前均处于 Open 状态，但评论活跃、需求明确，近期合并概率较高：

1. **#1298 fix(skill-creator): run_eval.py 0% recall**  
   - 修复了 #556 及 10+ 独立复现的评估器失效问题，同时解决 Windows 流读取、触发检测和并行 worker 缺陷。  
   - 这是 `run_loop.py` 和 `improve_description.py` 能正常工作的前提，官方合入优先级极高。  
   - [GitHub PR #1298](https://github.com/anthropics/skills/pull/1298)

2. **#538 fix(pdf): 大小写敏感文件引用**  
   - 将 SKILL.md 中 8 处 `REFERENCE.md`/`FORMS.md` 修正为实际的小写文件名。  
   - 改动小、风险低、直接修复大小写敏感系统上的文档类 bug，易合并。  
   - [GitHub PR #538](https://github.com/anthropics/skills/pull/538)

3. **#514 document-typography**  
   - 通用排版质量控制，不依赖特定平台或第三方服务，适合直接加入官方 document-skills。  
   - 社区口碑好，讨论热度高，落地场景广泛。  
   - [GitHub PR #514](https://github.com/anthropics/skills/pull/514)

4. **#83 skill-quality-analyzer & skill-security-analyzer**  
   - 作为“元技能”可用来评估其他技能，正好回应了 #492 的安全顾虑和 #202 的质量不足问题。  
   - 是官方建立技能审核体系的最直接候选方案。  
   - [GitHub PR #83](https://github.com/anthropics/skills/pull/83)

5. **#1367 self-audit**  
   - 提供机械验证+推理审计的质量门，与 #1385 的提案互补。  
   - 这类技能可作为官方推荐的最佳实践范例。  
   - [GitHub PR #1367](https://github.com/anthropics/skills/pull/1367)

---

## 4. Skills 生态洞察

> 社区当前最集中的诉求是完善技能开发与评估工具链（尤其是 `run_eval.py` 的触发检测和 Windows 兼容性），同时强化技能安全审计与输出质量治理——Claude Code Skills 正从“可用”走向“可信”。

---

# Claude Code 社区动态日报

**日期：2026-08-02** | 数据来源：github.com/anthropics/claude-code

---

## 今日速览

今日无新版本发布，但社区活跃度显著上升：当天新增近 10 个 Issue，其中最突出的趋势是 **Fable 5 安全护栏误报**——多名用户报告正常开发工作被拦截甚至静默降级。此外，嵌入式 ugrep 引发的内存爆炸问题（OOM）持续发酵，成为性能类 bug 的头号焦点。

---

## 社区热点 Issues（10 个精选）

### 1. VS Code 扩展：请求增加"禁用自动附加打开文件/选区"的设置
**Issue #24726** | 评论 64 | 👍 197 | 已开启

用户希望 VS Code 扩展允许禁用自动将当前打开文件/选区附加到对话上下文的行为。该 Issue 自 2026-02 创建以来持续活跃，积累了社区最高热度（197 👍），说明 IDE 集成场景下开发者对上下文控制有强烈诉求。

🔗 https://github.com/anthropics/claude-code/issues/24726

### 2. v2.1.117 嵌入式 ugrep 将 grep 进程 OOM 放大为 V8 堆 OOM（8GB 上限），WSL2 主机直接冻结
**Issue #54394** | 评论 19 | 已开启

自 v2.1.117 起 `grep` 被路由到内置 ugrep，正则回溯导致的进程级 OOM 被放大为 Node.js V8 堆 OOM，在 WSL2 上可导致整个宿主冻结。这是目前性能类 bug 中影响最严重的一个。

🔗 https://github.com/anthropics/claude-code/issues/54394

### 3. 2.1.217 回归：按项目分组会话时"Last Activity"过滤器消失
**Issue #80279** | 评论 10 | 👍 13 | 已开启

桌面应用从 2.1.209 自动升级到 2.1.217 后，会话侧栏在"按项目分组"模式下丢失了"最近活动 N 天"过滤器，但其他分组模式（如按日期）下该过滤器仍存在。功能回归影响了项目管理效率。

🔗 https://github.com/anthropics/claude-code/issues/80279

### 4. 服务器工具调用期间重命名会话会注入一条伪用户轮次，永久损坏会话记录
**Issue #73638** | 评论 8 | 已开启

在 `server_tool_use`（如内置 advisor 工具）执行期间修改会话自定义标题，会在 transcript 中注入一条伪造的 `system-reminder`（作为用户轮次），导致后续所有请求均返回 400。这是数据完整性相关的严重 bug。

🔗 https://github.com/anthropics/claude-code/issues/73638

### 5. settings.json 中的默认模型（"claude-fable-5[1m]"）在会话启动时不生效
**Issue #82466** | 评论 6 | 已开启

全局 `settings.json` 配置了 `"model": "claude-fable-5[1m]"`，但会话启动时仍落在其他模型上，且会话内 `/model` 切换也不可靠。涉及新模型配置的正确性问题，影响开发者对新模型的正常使用。

🔗 https://github.com/anthropics/claude-code/issues/82466

### 6. 功能请求：为 Remote Control 会话增加 TTS 朗读与语音模式
**Issue #42700** | 评论 13 | 👍 22 | 已开启

用户希望远程控制会话支持文本转语音（TTS）朗读响应和语音交互模式，提升无障碍体验。该需求获得 22 👍，体现社区对可访问性的关注在上升。

🔗 https://github.com/anthropics/claude-code/issues/42700

### 7. Windows Desktop 崩溃导致 MSIX 包损坏，恢复需手动卸载并丢失本地数据
**Issue #81306** | 评论 4 | 已开启

Windows 上 Claude Desktop 崩溃后 MSIX 包出现"楔死"状态，无法正常修复，用户被迫手动卸载，导致本地应用数据（代码标签组分配、崩溃转储）全部丢失。此问题对生产力的破坏性极高。

🔗 https://github.com/anthropics/claude-code/issues/81306

### 8. 套餐内额度未使用却消耗 usage credits，且开启 extra usage 后 5 小时窗口无法启动
**Issue #80750** | 评论 2 | 👍 2 | 已开启

用户发现会话在套餐含免费用量还剩 ~90% 的情况下，仍从付费 usage credits 中扣费；且一旦开启 extra usage，5 小时计划窗口就停止走表。该报告重新打开了此前被误关闭的 #64949，计费逻辑存在明显缺陷。

🔗 https://github.com/anthropics/claude-code/issues/80750

### 9. 嵌入式 ugrep 编译 `.{0,N}(a|b|c).{0,M}` 正则时分配约 29GB 内存，OOM 杀死宿主机
**Issue #82230** | 评论 1 | 👍 1 | 已开启

与 #54394 同源的严重问题：当正则中交替分支两侧均使用有界量词时，嵌入式 ugrep 在编译阶段即分配约 29GB RSS，直接触发系统 OOM。这一 bug 揭示了内置 grep shim 在复杂正则下的脆弱性。

🔗 https://github.com/anthropics/claude-code/issues/82230

### 10. Fable 5 安全护栏对常规运维工作误报，静默降级到 Opus 5 且无任何提示
**Issue #83233** | 评论 2 | 已开启（当日新增）

Fable 5 的安全护栏将常规的系统管理和桌面自动化操作误判为风险行为，并在没有任何提示的情况下将会话静默切换到 Opus 5。对话框既不显示被标记的内容，也提供不了任何申诉或审查路径——用户对模型选择被"未经同意更改"表示强烈不满。当日同类型 Issue 还有 #83232、#83244、#83245，已形成一类集中反馈。

🔗 https://github.com/anthropics/claude-code/issues/83233

---

## 重要 PR 进展

> 过去 24 小时内共有 3 个 PR 更新（均为关闭状态），以下全部列出。

### 1. fix: 修复 issue 自动化遥测与无效的 days_back 输入
**PR #77442** | 已关闭

修复 issue 自动化工作流中的三个正确性问题：dedupe 工作流中 Statsig 事件时间戳回退到 1970 年（应为实际运行时间），以及 `days_back` 输入参数在部分工作流中定义/使用不一致的问题。

🔗 https://github.com/anthropics/claude-code/pull/77442

### 2. docs(plugins): 同步安全指南列表与 v2.0.0 插件清单
**PR #77439** | 已关闭

security-guidance 插件已在 #62586/#62592 中重写为 v2.0.0，但 `marketplace.json` 等中央清单文件仍描述旧的 v1.0.0（版本号、描述均过期）。此 PR 将文档与插件实际清单对齐。

🔗 https://github.com/anthropics/claude-code/pull/77439

### 3. fix(ralph-wiggum): 使 stop hook 的 jq 错误处理在 set -e 下可到达
**PR #77443** | 已关闭

`plugins/ralph-wiggum/hooks/stop-hook.sh` 脚本在 `set -euo pipefail` 下运行，其中一段解析最后一行 assistant transcript 的 jq 管道写法错误——`$?` 拿到的不是 jq 的退出码，导致错误处理分支永远不可达。此 PR 修复了退出码检查逻辑。

🔗 https://github.com/anthropics/claude-code/pull/77443

---

## 功能需求趋势

从今日全部 Issues 中提炼出以下社区焦点方向：

| 方向 | 热度信号 | 代表 Issue |
|------|---------|-----------|
| **模型选择与护栏透明度** | 今日新增 5 个相关 Issue（#83233、#83232、#83244、#83245、#82466） | 安全护栏误报、默认模型不生效 |
| **性能与资源占用** | 多个高影响 bug（宿主冻结、29GB 内存分配） | #54394、#82230、#75630、#83237 |
| **IDE 集成控制力** | 高赞功能请求，持续活跃 | #24726（197 👍） |
| **无障碍支持** | 22 👍 的 TTS/语音模式请求 | #42700 |
| **计费与配额透明度** | 计费错误 + token 权限不足双问题 | #80750、#81015、#83242 |
| **平台兼容性** | Windows/WSL2/macOS beta 均出现专属问题 | #78858、#81306、#83011 |

值得注意的趋势：**Fable 5 安全护栏误报在今日集中爆发**，至少 4 个新 Issue 在同一主题下出现，且都存在"不知被标记原因、无申诉路径、无自动降级提示"的共性问题，已引起社区对模型行为透明性的质疑。

---

## 开发者关注点

1. **安全护栏误报成为最痛点**：Fable 5/Opus 5 将合法运维/自动化工作标记为违规，且拦截时不给出理由、不提供绕过途径——开发者反馈"未知的模型行为变更比错误本身更可怕"。

2. **性能事故频发**：嵌入式 ugrep 的正则回溯问题已造成至少两起 OOM / 主机冻结事故（#54394、#82230）；空闲会话 CPU 占 100% 数天的问题也有新增报告。

3. **数据完整性信任危机**：会话重命名导致 transcript 永久损坏（#73638）、桌面崩溃导致本地数据被清除（#81306），这类数据丢失问题对开发者信任的打击是长期的。

4. **计费逻辑不透明**：套餐额度尚未用完即消耗付费 credits、5 小时窗口提前结束等异常，暴露出 usage 统计与实际扣费脱节的问题，需要 Anthropic 明确回应。

5. **模型配置不可靠**：settings.json 中的默认模型不生效、`/model` 命令切换失败，在引入新模型（Fable 5）后变得尤为明显，升级路径需要更稳健的验证。

---

*本日报由 AI 自动生成，数据基于 2026-08-02 GitHub 公开仓库 anthropics/claude-code 动态。*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报 — 2026-08-02

## 今日速览

过去 24 小时 Codex 仓库活跃度较高，共 50 条 Issue 更新、11 条 PR 更新。社区反馈集中在三大方向：**Windows 平台稳定性问题**（OneDrive 断连、崩溃、WSL 二进制缺失）、**MCP 进程/内存泄漏**（多个 issue 反复出现）、以及 **TUI/会话管理体验优化**。PR 方面则以 copyberry 机器人提交的 TUI 快捷键、MCP 目录扩展和插件安装优化为主，另有针对 forked agent 历史的 MCP 生命周期事件清理。

## 社区热点 Issues

**1. Codex Desktop 高 CPU：活跃线程元数据与本地历史列表处理无上限** [#24510](https://github.com/openai/codex/issues/24510)
- 评论 27 | 更新 2026-08-02
- 当本地 profile 中存在大量带大段 title/preview/first_user_message 元数据的活跃线程时，app-server 持续占用高 CPU/GPU。这是典型的"数据量增长导致性能退化"问题，影响长期重度用户，社区讨论活跃。

**2. Windows 工作区为 OneDrive 备份且 OneDrive 降级时，Work/Codex 流反复断开** [#35420](https://github.com/openai/codex/issues/35420)
- 评论 23 | 更新 2026-08-02
- 当选中工作区由 OneDrive 支撑且 OneDrive 处于降级状态时，请求反复报 `stream disconnected before completion`。文件同步服务与 Codex 的交互存在兼容性缺陷，Windows 用户受影响面较大。

**3. Windows 10 22H2 上 Computer Use 截图失败：SetIsBorderRequired 调用报错** [#25178](https://github.com/openai/codex/issues/25178)
- 评论 19 | 👍 11 | 更新 2026-08-02
- Computer Use 可列出应用/窗口、激活窗口、读取辅助功能文本和发送键盘输入，但截图功能在 `get_window_state` 时因 `SetIsBorderRequired failed: 不支持此接口 (0x80004002)` 而失败。Windows 10 特定 API 兼容性问题，对自动化场景影响显著。

**4. TUI 语音转写功能请求** [#14630](https://github.com/openai/codex/issues/14630)
- 评论 19 | 👍 49 | 更新 2026-08-02
- 社区希望 Codex CLI 能调用 OpenAI 语音转写模型，替代目前效果较差的听写方案。👍 数在所有展示 issue 中最高，代表较强的用户呼声。

**5. Subagents 在 Codex App 中泄漏 stdio MCP 辅助进程树** [#17574](https://github.com/openai/codex/issues/17574)
- 评论 14 | 更新 2026-08-02
- xcodebuildmcp 和 chrome-devtools-mcp 等进程在 subagent 完成后未回收，持续累积。MCP 进程泄漏已多次被报告，是当前最受关注的稳定性/资源管理问题之一。

**6. Codex Desktop MSIX 版缺少 Linux codex 二进制，WSL 运行功能不可用** [#28103](https://github.com/openai/codex/issues/28103)
- 评论 7 | 👍 23 | 更新 2026-08-02
- Microsoft Store/MSIX 构建的 Codex App 在启用 "Run agent in WSL" 时报 `Unable to locate the Codex CLI binary`。对依赖 WSL 的 Windows 开发者影响严重，👍 数较高说明关注度大。

**7. 主进程崩溃：加载超大会话 JSONL 时触发 V8 字符串长度上限** [#22004](https://github.com/openai/codex/issues/22004)
- 评论 10 | 👍 3 | 更新 2026-08-02
- 加载含图片/长上下文的会话时，rollout JSONL 超过 V8 max string length，导致 `RangeError: Invalid string length` 崩溃。涉及 Windows Store 版多个版本均未修复，属于长期存在的严重稳定性问题。

**8. 侧边聊天关闭后无法重新打开，历史记录不可恢复** [#27716](https://github.com/openai/codex/issues/27716)
- 评论 7 | 👍 11 | 更新 2026-08-02
- Codex Desktop 关闭侧边聊天后没有重新打开的入口，导致侧边聊天历史无法访问。涉及会话管理基础功能缺失，受 Pro 用户关注。

**9. 桌面端自定义模型提供商与已有聊天/模型选择器不兼容** [#29156](https://github.com/openai/codex/issues/29156)
- 评论 5 | 👍 17 | 更新 2026-08-02
- CLI/TUI 可正常使用自定义 model_providers，但 Codex Desktop 无法在已有会话或模型选择器中使用自定义提供商，功能断裂严重。对依赖自定义模型的开发者影响较大。

**10. 上下文被自动压缩导致会话被破坏（严重 bug）** [#31033](https://github.com/openai/codex/issues/31033)
- 评论 9 | 更新 2026-08-02
- 用户报告 Codex 已消耗 2 次重置和约 50% 月额度后，上下文被自动压缩，导致会话无法恢复。涉及额度消耗和上下文管理两大敏感领域，需尽快排查。

## 重要 PR 进展

**1. 支持可移植 Agent Plugins 的安装流程** [#36544](https://github.com/openai/codex/pull/36544)
- copyberry[bot] | 已关闭 | 更新 2026-08-02
- Agent Plugins 使用 schema 声明的 `plugin.json` 根文件，且可能包含不适合 Codex 目录安全版本的带点名称或版本。此 PR 更新打包和安装路径以支持新的可移植布局。

**2. 将 MCP 目录项上限提升至 2,048** [#36534](https://github.com/openai/codex/pull/36534)
- copyberry[bot] | 已关闭 | 更新 2026-08-01
- 将分页 MCP tool/resource/resource-template 发现请求收集的条目上限从 1,024 提高到 2,048，满足大型 MCP 服务器场景。

**3. 从 forked agent 历史中去除父级 MCP 生命周期事件** [#30977](https://github.com/openai/codex/pull/30977)
- chess-oai | 已关闭 | 更新 2026-08-01
- 构建 forked agent 历史时排除继承的 `McpToolCallBegin`/`McpToolCallEnd` 事件，避免遗留历史产生不匹配的工具执行状态。这是核心正确性修复。

**4. 支持 TUI 双键组合快捷键** [#36511](https://github.com/openai/codex/pull/36511)
- copyberry[bot] | 已关闭 | 更新 2026-08-01
- 接受 `ctrl-x ctrl-s` 形式的双键绑定，支持通过活动 TUI 上下文路由组合键、显示挂起/已配置的键提示，并在 `esc` 时取消挂起组合键。

**5. 跨提示保留已尝试的工具元数据** [#36507](https://github.com/openai/codex/pull/36507)
- copyberry[bot] | 已关闭 | 更新 2026-08-01
- 当输出被包含在后续 prompt 时重新附加 `executed_tool_calls` 元数据，限制为 32 KiB（优先最近调用，并在截断元数据中报告省略的调用）。

**6. 提高远程插件包大小限制** [#36485](https://github.com/openai/codex/pull/36485)
- copyberry[bot] | 已关闭 | 更新 2026-08-01
- 远程插件包下载上限从 50 MiB 提至 100 MiB；总解压大小上限从 250 MiB 提至 512 MiB。为大型插件提供空间。

**7. 提取 apps 缓存逻辑至 ConnectorRuntimeManager** [#31471](https://github.com/openai/codex/pull/31471)
- mzeng-openai | 开放 | 更新 2026-08-01
- 将 Codex Apps 工具缓存提取到 `ConnectorRuntimeManager` 和 `ConnectorRuntimeContext` 之后，以不可变工具+刷新时间快照的形式管理，并按账户/ChatGPT 用户/workspace-account 模式/Codex home 做上下文隔离。架构级重构，影响面较大。

**8. 避免每次 TUI 重绘都查询终端尺寸** [#36482](https://github.com/openai/codex/pull/36482)
- copyberry[bot] | 已关闭 | 更新 2026-08-01
- 在 resize 事件上携带尺寸并在普通绘制时复用缓存屏幕大小；resize 稳定后、进程恢复和外部程序执行后刷新终端几何信息。TUI 性能优化。

**9. 在审查会话上存储 guardian transcript 边界** [#15261](https://github.com/openai/codex/pull/15261)
- charley-oai | 开放 | 更新 2026-08-01
- 将父级 transcript checkpoint 存储在 guardian 审查会话上，替代从 rollout 重建或父会话状态获取；后续审查只包含自上次终止性审查以来的 transcript 证据。

**10. 提取 exec-server 请求分发逻辑** [#36440](https://github.com/openai/codex/pull/36440)
- copyberry[bot] | 已关闭 | 更新 2026-08-01
- 将 JSON-RPC 请求、通知、响应、错误和畸形消息处理移至独立的 `RequestDispatcher`，连接循环只负责接收事件和关闭连接。代码结构清理，降低维护复杂度。

## 功能需求趋势

从今日全部 Issues 中可提炼出以下社区关注方向：

1. **性能和资源泄漏修复是当前最高优先级**：多个 issue 涉及 CPU 占用（#24510）、MCP 进程泄漏（#17574、#25015）、崩溃（#22004、#35799、#31989），说明用户在重度使用中频繁遇到稳定性瓶颈。

2. **Windows 平台兼容性短板显著**：涉及 OneDrive 工作区断连（#35420）、Windows 10 截图失败（#25178）、MSIX 缺少 WSL 二进制（#28103）、PowerShell 默认 shell 的 SSH 问题（#22757）、install.ps1 崩溃（#19559）等。Windows 用户体验明显落后于 macOS。

3. **TUI 交互体验增强需求持续**：包括语音转写（#14630）、双键组合键支持（对应 PR #36511）、composer 占位符优化（#13466）、"Compact context and implement plan"选项（#18490）等，社区对 CLI 日常使用体验有持续改进诉求。

4. **模型/提供商配置灵活性**：自定义模型提供商在 Desktop 端的不可用（#29156）以及模型选择器自定义预设（#32665），反映用户对模型层可配置性的需求增长。

## 开发者关注点

- **MCP 泄漏问题反复出现且影响严重**：多个独立 issue（#17574、#25015）报告 subagent 完成后 MCP 子进程树未回收，导致进程数和内存线性增长，Linux 和 macOS 均受影响。社区已多次反馈，需要官方重点修复。

- **会话和上下文数据一致性痛点突出**：自动压缩破坏会话（#31033）、线程 updatedAt 过期（#28870）、分页历史丢弃记录（#35746）、侧边聊天无法重开（#27716）、加载超大会话崩溃（#22004）——会话生命周期管理存在系统性缺陷。

- **Windows 生态是最大的兼容性短板**：OneDrive 集成、WSL 二进制分发、Windows 10 API 兼容、PowerShell 默认 shell 等多个场景均出现阻断性问题，且部分 issue 存在较长时间未修复（如 #25178 创建于 5 月底仍开放）。

- **订阅额度/速率限制透明度不足**：用户报告一周额度在一天内从 0% 烧至 97%（#36528），结合自动压缩问题（#31033），用户对额度消耗的可见性和控制力存在强烈不满。

- **代码执行审批与安全意识需平衡**：Auto-review 将用户显式授权转化为无约束的反复确认循环（#36501），既影响效率也未真正提升安全性；Full Access 会话重启后回退到逐操作审批（#34453）则破坏了长时自动化运行。

---

*数据来源：[github.com/openai/codex](https://github.com/openai/codex) | 日报生成时间：2026-08-02*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报（2026-08-02）

> 数据来源：github.com/google-gemini/gemini-cli  
> 统计范围：过去 24 小时内更新的 Releases / Issues / PRs

## 1. 今日速览

过去 24 小时内，Gemini CLI 社区有 50 个 Issue 和 50 个 PR 被更新或推进，讨论焦点集中在 **Agent 可靠性与稳定性**：子代理在达到 `MAX_TURNS` 后误报成功、generalist 代理挂起、shell 命令完成后仍卡在 “Waiting input” 等 P1 问题持续发酵。PR 侧则以路径解析修复、工具名称规范化、CI 发布流程修复和数据写入保护为主。版本方面发布了最新的 `v0.55.0` nightly。

## 2. 版本发布

**v0.55.0-nightly.20260802.gf47d6c6f7**  
仅包含 nightly 版本迭代，未附带独立变更说明，可查看与上一 nightly 的完整 diff：

- [Full Changelog v0.55.0-nightly.20260801...v0.55.0-nightly.20260802](https://github.com/google-gemini/gemini-cli/compare/v0.55.0-nightly.20260801.gf47d6c6f7...v0.55.0-nightly.20260802.gf47d6c6f7)

## 3. 社区热点 Issues

以下为过去 24 小时内更新最频繁、社区讨论最集中的 10 个 Issue：

- **[#22323] Subagent recovery after MAX_TURNS is reported as GOAL success, hiding interruption**  
  P1 / Agent / 12 条评论 / 👍 2  
  子代理 `codebase_investigator` 实际因 `MAX_TURNS` 中断，却返回 `status: "success"` 和 `Termination Reason: "GOAL"`。这会严重误导用户和自动化流程，令真实失败被隐藏。  
  https://github.com/google-gemini/gemini-cli/issues/22323

- **[#21409] Generalist agent hangs**  
  P1 / Agent / 8 条评论 / 👍 8  
  社区反馈最强烈的问题之一：只要 `gemini-cli` 将任务交给 generalist agent，就可能无限期挂起，连“创建文件夹”这种简单操作也等待超过一小时。有用户通过禁止模型使用 subagent 规避该问题。  
  https://github.com/google-gemini/gemini-cli/issues/21409

- **[#25166] Shell command execution gets stuck with “Waiting input” after command completes**  
  P1 / Core / 4 条评论 / 👍 3  
  简单 CLI 命令执行完成后仍显示 “Awaiting user input”，终端一直卡住。虽不涉及复杂交互命令，但高频触发，直接影响日常使用。  
  https://github.com/google-gemini/gemini-cli/issues/25166

- **[#21983] Browser subagent fails in Wayland**  
  P1 / Agent / 4 条评论 / 👍 1  
  Browser subagent 在 Wayland 环境下终止，且终止原因只显示 `GOAL`，实际是失败。这暴露了浏览器子代理在 Linux 图形栈下的兼容性问题。  
  https://github.com/google-gemini/gemini-cli/issues/21983

- **[#22093] (Sub)agents running without permission since v0.33.0**  
  P2 / Agent / 3 条评论  
  用户在配置中已禁用 agents，但 v0.33.0 之后 subagent 仍会被自动调用。这与用户权限预期严重不符，涉及配置合并或默认策略回归。  
  https://github.com/google-gemini/gemini-cli/issues/22093

- **[#24246] Gemini CLI encounters 400 error with > 128 tools**  
  P2 / Agent / 3 条评论  
  当环境中可用工具超过一定数量后，模型请求直接返回 400。社区期望 CLI 能根据当前任务动态裁剪工具范围，而不是一次性全量注入。  
  https://github.com/google-gemini/gemini-cli/issues/24246

- **[#26522] Stop Auto Memory from retrying low-signal sessions indefinitely**  
  P2 / Agent / 5 条评论  
  Auto Memory 在会话被判定为低信号后，仍会反复出现在后台提取任务中，造成无效重试和资源浪费。需要引入已处理状态标记或跳过逻辑。  
  https://github.com/google-gemini/gemini-cli/issues/26522

- **[#26525] Add deterministic redaction and reduce Auto Memory logging**  
  P2 / Security / 4 条评论  
  当前 Auto Memory 会先把本地 transcript 内容送入模型上下文，之后才在 prompt 中要求 redact secrets；“先发送、后脱敏”存在隐私风险。社区希望有确定性的前置脱敏机制。  
  https://github.com/google-gemini/gemini-cli/issues/26525

- **[#22672] Agent should stop/discourage destructive behavior**  
  P2 / Agent / 3 条评论 / 👍 1  
  Agent 在某些复杂 git 操作、分支管理或数据库维护场景中会倾向使用 `git reset`、`--force` 等高危命令，用户希望模型主动选择更安全的替代方案。  
  https://github.com/google-gemini/gemini-cli/issues/22672

- **[#24353] Robust component level evaluations**  
  P1 / Eval Infra / 7 条评论  
  这是承接现有 behavioral evals 的 EPIC，计划为 6 个 Gemini 模型运行 76 个行为评估测试，并扩展组件级评估体系。该 Issue 代表了项目从“用户报告 bug”到“系统化评估 Agent 行为”的基础设施方向。  
  https://github.com/google-gemini/gemini-cli/issues/24353

## 4. 重要 PR 进展

以下 PR 在过去 24 小时内有更新，按影响面筛选：

- **[#28535] fix: use resolveRipgrepPath in perf test global setup**  
  P1 / Core  
  修复性能测试中引用了已被删除的 `canUseRipgrep()` 的问题，改用新的 `resolveRipgrepPath()` API，避免 perf 测试因 API 变动失败。  
  https://github.com/google-gemini/gemini-cli/pull/28535

- **[#28534] fix(ci): retry staging-tmp dist-tag removal after npm publish**  
  P1 / Non-interactive  
  Nightly 发布流程中，npm/Wombat 对超大 `@google/gemini-cli-core` 包的确认存在异步延迟，导致立即删除 `staging-tmp` dist-tag 失败。PR 增加了重试脚本，提升 nightly 发布稳定性。  
  https://github.com/google-gemini/gemini-cli/pull/28534

- **[#28438] Trim tool names before registry lookup**  
  已关闭  
  在通过脚本工具注册表查找工具名之前去除首尾空白，并补充了回归测试。属于低风险健壮性修复。  
  https://github.com/google-gemini/gemini-cli/pull/28438

- **[#27351] fix(core): serialize conflicting parallel mutator tools**  
  P2 / Agent  
  修复同一轮中多个编辑同一文件的工具调用被 `Promise.all` 并行执行，导致写冲突或状态不一致的问题。改为对冲突型 mutator 工具做串行化调度。  
  https://github.com/google-gemini/gemini-cli/pull/27351

- **[#27350] fix(core): resolve symlinks when normalizing project paths**  
  P3 / Core  
  `path.resolve()` 不解析 symlink，导致同一物理目录通过不同 symlink 路径访问时被识别为不同项目，产生多个 session store。改用 `resolveToRealPath()` 修复。  
  https://github.com/google-gemini/gemini-cli/pull/27350

- **[#27320] fix(core): mitigate data corruption during write_file on massive text blocks**  
  P1 / Core  
  针对超过 6000 字符或包含内嵌 base64 图片的大文本重写场景，`write_file` 可能因 token 输出限制和模型注意力退化导致数据损坏。PR 提供缓解策略。  
  https://github.com/google-gemini/gemini-cli/pull/27320

- **[#27317] fix(core,cli): defensively check for directories in session/checkpoint scans**  
  P1 / Core  
  当扫描 session/checkpoint 时遇到同名目录，会触发 `EISDIR` 错误。PR 增加目录类型防御性检查，避免 CLI 在读取时崩溃。  
  https://github.com/google-gemini/gemini-cli/pull/27317

- **[#27310] feat: subagent trajectory infrastructure (Stage 1)**  
  Agent  
  为完整实现 subagent 轨迹可见性做第一阶段基建：让 `/chat share`、历史导出和 bug report 都能包含 subagent 内部执行轨迹。这是社区高度关注的可观测性方向。  
  https://github.com/google-gemini/gemini-cli/pull/27310

- **[#27070] Optimize virtualized list and scrolling checkpoint**  
  Core / XL  
  针对终端 resize 时的 flicker 和高性能渲染问题，优化 VirtualizedList 与滚动 checkpoint，并修复了 plan-mode 测试和工具权限相关单测。  
  https://github.com/google-gemini/gemini-cli/pull/27070

- **[#27131] fix(core): route personal OAuth users to stable models for auto aliases**  
  P1 / Core  
  个人 OAuth 用户使用 `auto-gemini-3` 类别名时，偶尔会被解析到不可用模型，导致 404/400。PR 根据认证方式将个人用户路由到稳定模型。  
  https://github.com/google-gemini/gemini-cli/pull/27131

## 5. 功能需求趋势

从当前 Issue 和 PR 中可以提炼出以下社区关注方向：

- **Agent 可观测性与评估体系**  
  社区不再满足于“能跑就行”，而是希望看清楚 Agent 内部决策：subagent 轨迹分享、`/chat share` 见踪、bug report 包含子代理上下文、组件级自动评估。

- **安全沙箱与隐私保护**  
  多个 Issue 围绕沙箱细节、rootless 容器、macOS seatbelt profile、OAuth 模型路由、Auto Memory 的日志脱敏展开。安全正在从“可选增强”变成“默认要求”。

- **AST 感知的代码理解**  
  `#22745`、`#22746` 等 EPIC 在探索用 AST-aware 工具改进文件读取、代码搜索和 codebase mapping，目标是减少无效 token、降低多轮误读。

- **Browser agent 韧性**  
  浏览器子代理在 Wayland、持久化 session 锁、`settings.json` 覆盖等方面频出问题。社区希望它能自动接管失效会话、恢复锁，而不是 fail-fast。

- **记忆系统质量与可维护性**  
  Auto Memory 的低信号重试、无效 patch 静默跳过、transcript 内容预脱敏等问题，说明记忆系统已经从“功能有无”进入“质量治理”阶段。

- **防误操作与命令安全**  
  开发者希望 Agent 在 git/数据库等高危操作中主动规避破坏性命令，并自觉清理临时脚本，减少工作区污染。

## 6. 开发者关注点

- **稳定性痛点集中**  
  Generalist agent 挂起、shell 命令卡在 “Waiting input”、子代理达到 `MAX_TURNS` 却报告成功，都是 P1 级且高频触发的问题，严重影响日常信任度。

- **权限与配置失效**  
  多个 Issue 显示 Agent 会在禁用状态下被调用、无视 `settings.json` 覆盖、symlink 配置文件不被识别。配置系统的可预期性需要加强。

- **隐私隐患**  
  Auto Memory 在模型上下文已经接收敏感内容之后才进行脱敏，开发者担心本地 transcript 中的密钥和凭据被后台任务发送到模型服务。

- **大型代码库与超长文件场景**  
  大文件 `write_file` 数据损坏、大量临时脚本散落、工具数量超过 128 个后请求 400，都是用户在真实大规模项目中遇到的扩展性问题。

- **平台兼容性**  
  Wayland 下 browser agent 失败、macOS seatbelt 提示不具体、外部编辑器退出后终端渲染损坏，表明跨平台体验仍然是短板。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报（2026-08-02）

## 今日速览

- 发布补丁版本 `v1.0.78-2`，修复扩展斜杠命令处理器重复执行的问题，并优化分栏关闭确认文案。
- 社区高赞需求集中在 **BYOK 多模型支持**、**自定义 Agent reasoning effort** 与 **MCP 懒加载**；同时 **长会话性能下降** 和 **session 恢复失败** 成为最集中的痛点。
- 新增 Issue 聚焦于 `events.jsonl` 过大导致 session 永久无法恢复、WSL2 下按键误判、autopilot 恢复后未真正启用等问题。

## 版本发布

### v1.0.78-2

- **Improved**：分栏侧边栏的红色关闭确认文案改为 `x again to close`（最后一个会话显示 `x again to exit CLI`），替代原先的 `x close`，让用户明确第二次按键才会真正关闭。
- **Fixed**：扩展斜杠命令在每个调用场景中确保其 handler 只执行一次（原始描述已截断）。

🔗 [Release v1.0.78-2](https://github.com/github/copilot-cli/releases/tag/v1.0.78-2)

## 社区热点 Issues（10 条）

### 1. [#3282] Add multiple BYOK model capability in copilot cli  
- **领域**：models / configuration  
- **反应**：👍 19 | 💬 6  
- **重要性**：目前仅支持通过环境变量配置单个 BYOK 模型，用户希望能在 TUI 内直接切换多个 BYOK 模型，避免每次都要重启会话。社区讨论较热烈，是当前最高赞的开放功能请求之一。  
🔗 https://github.com/github/copilot-cli/issues/3282

### 2. [#2904] Custom Agent YAML Frontmatter Should Support Reasoning Effort  
- **领域**：agents / models  
- **反应**：👍 16 | 💬 3  
- **重要性**：自定义 agent（`.agent.md`）只能全局设置 reasoning effort，无法按 agent 独立指定。对于需要精细控制不同 agent 推理成本的团队，这是一个明确的功能缺口。  
🔗 https://github.com/github/copilot-cli/issues/2904

### 3. [#2901] Lazy-load MCP servers on first tool invocation  
- **领域**：MCP  
- **反应**：👍 14 | 💬 2  
- **重要性**：随着 MCP 服务器数量增加，启动时全部连接导致 CLI 启动变慢。社区希望将 MCP 服务器改为“首次调用工具时懒加载”，以改善启动体验。  
🔗 https://github.com/github/copilot-cli/issues/2901

### 4. [#4325] Session becomes permanently unloadable once events.jsonl exceeds V8's max string length  
- **领域**：sessions  
- **反应**：👍 1 | 💬 2  
- **重要性**：新上报的严重 bug。长生命周期 session 的 `events.jsonl` 超过 V8 最大字符串长度后，该 session 将永久无法恢复，即使文件和数据库记录完好。影响长期会话的可靠性与数据安全。  
🔗 https://github.com/github/copilot-cli/issues/4325

### 5. [#4305] Failed to convert JavaScript value 'Undefined' into rust type 'String'  
- **领域**：核心稳定性  
- **反应**：👍 5 | 💬 5  
- **重要性**：升级到 `1.0.76` 后，用户几乎对所有命令都会遇到 Rust 类型转换错误。该 Issue 虽已关闭，但属于升级回归风险，值得后续版本留意。  
🔗 https://github.com/github/copilot-cli/issues/4305

### 6. [#4306] Subtasks freeze and stop responding  
- **领域**：agents / tools  
- **反应**：👍 1 | 💬 1  
- **重要性**：在 autopilot 模式下运行复杂 agent 链时，子任务会突然冻结且不再响应。这会直接阻塞自动化任务流程，是 agent 稳定性的关键问题。  
🔗 https://github.com/github/copilot-cli/issues/4306

### 7. [#4299] Increasing typing latency over long copilot sessions  
- **领域**：sessions / input-keyboard  
- **反应**：👍 1 | 💬 1  
- **重要性**：长时间运行的 session 中，尤其是存在后台 agent 时，输入延迟会上升到几乎无法使用的程度。社区需要更高效的事件处理或后台任务隔离机制。  
🔗 https://github.com/github/copilot-cli/issues/4299

### 8. [#4318] Autopilot task-completion enforcement can override explicit user instructions  
- **领域**：non-interactive / agents  
- **反应**：👍 0 | 💬 1  
- **重要性**：autopilot 模式下的“任务完成强制执行”会使用户明确要求“仅研究/解释、不要执行操作”的指令被覆盖，agent 继续执行动作。这涉及用户控制权与安全边界，需要重新审视 task-completion 逻辑。  
🔗 https://github.com/github/copilot-cli/issues/4318

### 9. [#4320] Nested custom agent MCP tools depend on undocumented immediate-parent grants starting in CLI 1.0.74  
- **领域**：agents / MCP  
- **反应**：👍 0 | 💬 0  
- **重要性**：从 `1.0.74` 开始，嵌套自定义 agent 的 MCP 工具授权行为发生变化，依赖未文档化的“直接父级授权”才能生效。这不符合文档描述且难以排查，影响复杂 agent 层级设计。  
🔗 https://github.com/github/copilot-cli/issues/4320

### 10. [#4319] Plan review not shown and session hangs after switching sessions during plan mode  
- **领域**：sessions  
- **反应**：👍 0 | 💬 0  
- **重要性**：plan 模式运行时切换 session 再切回，计划评审界面不再渲染，且 session 挂起无法操作。该问题直接阻断 plan 审批流程，需要优先修复。  
🔗 https://github.com/github/copilot-cli/issues/4319

## 重要 PR 进展

**过去 24 小时无公开 PR 更新。**

当前社区仍以 Issue 反馈为主，尚未看到针对上述高优问题的 PR 合并或更新。建议关注 v1.0.78-x 系列的后续补丁。

## 功能需求趋势

- **BYOK 多模型与更灵活配置**：用户希望在一个会话中切换多个 BYOK 模型，而不仅限于单个环境变量（[#3282](https://github.com/github/copilot-cli/issues/3282)）。
- **自定义 Agent 精细控制**：要求支持按 agent 设置 reasoning effort，并修复嵌套 agent 的 MCP 工具授权规则（[#2904](https://github.com/github/copilot-cli/issues/2904)、[#4320](https://github.com/github/copilot-cli/issues/4320)）。
- **MCP 体验优化**：懒加载 MCP 服务器以降低启动延迟，同时允许 `.mcp.json` 中添加注释，避免因 JSON 注释导致所有 MCP 配置被跳过（[#2901](https://github.com/github/copilot-cli/issues/2901)、[#4323](https://github.com/github/copilot-cli/issues/4323)）。
- **会话持久化与状态恢复**：修复大 session 无法恢复、autopilot 状态丢失、fork 后 todo/plan 错乱等问题（[#4325](https://github.com/github/copilot-cli/issues/4325)、[#4329](https://github.com/github/copilot-cli/issues/4329)、[#4324](https://github.com/github/copilot-cli/issues/4324)）。
- **性能与输入体验**：长 session 的输入延迟和子任务冻结问题，显示后台 agent 与事件存储需要进一步优化（[#4299](https://github.com/github/copilot-cli/issues/4299)、[#4306](https://github.com/github/copilot-cli/issues/4306)）。
- **平台与终端兼容性**：WSL2 下 `Ctrl+H` 被误判为删除整词，Windows 下插件安装需要支持 git symlink 文本桩（[#4328](https://github.com/github/copilot-cli/issues/4328)、[#2286](https://github.com/github/copilot-cli/issues/2286)）。
- **安全 / 合规接入**：支持链接 “Trusted Access for Cyber program”，允许在授权后处理安全相关代码审查（[#4322](https://github.com/github/copilot-cli/issues/4322)）。

## 开发者关注点

- **长会话可靠性**：`events.jsonl` 无限增长导致 session 无法恢复，是比 UI 延迟更紧急的数据风险。
- **Autopilot 行为一致性**：用户明确指令被任务完成逻辑覆盖，以及恢复 session 后 autopilot 不真正生效，都让自动化场景难以信任。
- **模型配置灵活性**：BYOK 多模型切换、按 agent 设定推理强度是高频需求，当前只能通过全局参数或环境变量，操作成本高。
- **MCP 配置易碎**：严格 JSON 解析、注释不支持、全量启动加载，使团队 MCP 配置难以维护并拖慢启动。
- **版本安装锁定失效**：尝试安装指定旧版本时总是获得最新版，导致无法在 Docker 等环境快速回退（[#4317](https://github.com/github/copilot-cli/issues/4317)）。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报（2026-08-02）

## 1. 今日速览

过去 24 小时无新版本发布，社区主要围绕**工具调用正确性**与**会话稳定性**展开讨论与修复。5 条活跃 Issue 中，长期 Memory System 需求讨论度最高；PR 侧则集中修复 `StrReplaceFile` 计数、JSON 双编码解析、shell 命令挂起、hook 触发机制和控制台兼容性问题。

## 3. 社区热点 Issues

以下为过去 24 小时更新的全部 5 条 Issue（当前数据不足 10 条）。

### #1283 [enhancement] Feature Request: Memory System - Persistent context across sessions
- 作者：CatKang | 创建：2026-02-27 | 更新：2026-08-02 | 评论：11 | 👍：0
- 链接：https://github.com/MoonshotAI/kimi-cli/issues/1283
- 分析：这是一个长期开放的需求，希望实现自动记忆（AI 管理的笔记）和手动记忆（用户自定义指令），跨会话保留项目上下文和用户偏好。11 条评论显示社区对持久化上下文有较高关注，属于高频需求方向。

### #2526 StrReplaceFile reports too few total replacements for chained edits
- 作者：Sreekant13 | 创建：2026-07-21 | 更新：2026-08-01 | 评论：1 | 👍：0
- 链接：https://github.com/MoonshotAI/kimi-cli/issues/2526
- 分析：`StrReplaceFile` 在连续编辑时，替换总数按原始文件内容计算，导致报告数量不准确。该问题已被 PR #2554 修复，属于工具链正确性类的重要缺陷。

### #2576 docs: document OmniRoute OpenAI-compatible provider setup
- 作者：diegosouwapz | 创建：2026-08-01 | 更新：2026-08-01 | 评论：0 | 👍：0
- 链接：https://github.com/MoonshotAI/kimi-cli/issues/2576
- 分析：用户请求补充 OmniRoute 作为 OpenAI 兼容 provider 的文档，包括 base URL、模型声明和环境变量映射。说明社区对第三方网关配置的文档缺失有明显痛点。

### #2574 [enhancement] Kimi Code Stuck on "Processing" and Doesn't Respond
- 作者：xGrasshopper | 创建：2026-08-01 | 更新：2026-08-01 | 评论：0 | 👍：0
- 链接：https://github.com/MoonshotAI/kimi-cli/issues/2574
- 分析：用户连接 Unity MCP 后，Kimi Code 卡在 "Processing" 状态无响应。该问题与 MCP 集成稳定性相关，是 IDE/游戏引擎工作流中的关键阻塞点。

### #2573 Bug: Web UI "Connecting to session..." infinite spinner when switching sessions
- 作者：belenov-maker | 创建：2026-08-01 | 更新：2026-08-01 | 评论：0 | 👍：0
- 链接：https://github.com/MoonshotAI/kimi-cli/issues/2573
- 分析：在 `kimi web` Web UI 技术预览中切换会话时出现无限 "Connecting to session..."。用户已提供版本信息（kimi-cli 1.48.0、Chrome 150）和复现路径，属于 Web UI 可靠性的明确 bug。

## 4. 重要 PR 进展

以下为过去 24 小时更新的全部 5 条 PR（当前数据不足 10 条）。

### #2577 fix(web,vis): do not crash printing the startup banner on legacy console codecs
- 作者：ayaangazali | 创建：2026-08-01 | 更新：2026-08-01
- 链接：https://github.com/MoonshotAI/kimi-cli/pull/2577
- 说明：修复在 GBK 等旧式控制台编码下，启动横幅中的 U+279C 字符导致崩溃的问题。涉及 `web/app.py` 和 `vis/app.py`，解决 #2532。

### #2572 fix(kosong): recursively unwrap double-encoded JSON in tool-call arguments
- 作者：aalhadxx | 创建：2026-07-31 | 更新：2026-08-01
- 链接：https://github.com/MoonshotAI/kimi-cli/pull/2572
- 说明：修复部分 provider 返回双编码 JSON 导致 `SetTodoList`、`ExitPlanMode`、`StrReplaceFile` 等工具在 Pydantic 校验失败的问题。对工具调用参数做递归解包，提升多 provider 兼容性。

### #2554 fix(tools): count StrReplaceFile replacements against running content
- 作者：ayaangazali | 创建：2026-07-23 | 更新：2026-08-01
- 链接：https://github.com/MoonshotAI/kimi-cli/pull/2554
- 说明：修复 `StrReplaceFile` 连续编辑时替换总数误报的问题；改为基于逐步编辑后的内容计数。与 Issue #2526 直接相关。

### #2530 fix(shell): stop blocking until timeout when a detached child holds the pipes
- 作者：ayaangazali | 创建：2026-07-21 | 更新：2026-08-01
- 链接：https://github.com/MoonshotAI/kimi-cli/pull/2530
- 说明：修复前台 shell 命令中，如 `some_daemon & echo done` 这类后台进程持有 stdout/stderr 管道导致命令超时阻塞的问题。解决 #2468。

### #2575 fix(hooks): fire PostToolUse hooks through fire_and_forget_trigger
- 作者：ayaangazali | 创建：2026-08-01 | 更新：2026-08-01
- 链接：https://github.com/MoonshotAI/kimi-cli/pull/2575
- 说明：修复 `PostToolUse` 和 `PostToolUseFailure` 钩子使用裸 `asyncio.create_task` 导致任务可能被 GC 的问题。改由 `fire_and_forget_trigger` 触发，解决 #2564。

## 5. 功能需求趋势

从当前 Issue 和 PR 中可以提炼出以下社区重点方向：

- **持久化上下文 / Memory System**：#1283 表明用户希望 CLI 能跨会话记忆项目模式、用户偏好与上下文。
- **Provider 兼容性与配置文档**：#2576、#2572 显示社区对 OpenAI-compatible 第三方网关接入有强烈需求，且容易在 base URL、JSON 编码等细节上踩坑。
- **MCP / IDE 集成稳定性**：#2574 暴露 Unity MCP 场景下的卡死问题，说明游戏开发/编辑器集成是重要使用场景，且稳定性有待加强。
- **Web UI 会话管理可靠性**：#2573 的无限 spinner 说明 Web UI 从技术预览走向实用仍需修复会话切换状态问题。
- **工具执行正确性**：#2526、#2554 聚焦 `StrReplaceFile` 计数逻辑；#2572 则关注工具参数解析鲁棒性。这类问题直接影响 Agent 编辑文件的可信度。

## 6. 开发者关注点

高频痛点主要集中在以下四个方面：

- **工具调用结果不准确**：连续编辑时替换数量误报，影响用户对 Agent 执行结果的信任。
- **进程/会话卡死**：MCP 连接后无响应、Web UI 切换会话无限 spinner、shell 后台进程持有管道导致阻塞，是稳定性层面的主要反馈。
- **第三方 Provider 接入门槛**：OmniRoute 等 OpenAI-compatible 服务缺乏可复现配置示例，JSON 双编码问题也导致工具调用失败。
- **低版本控制台兼容性**：启动横幅在 GBK 等旧编码下崩溃，说明仍有一定体量用户使用非 UTF-8 环境，兼容性需要被纳入修复考量。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 — 2026-08-02

## 1. 今日速览

昨日发布补丁版本 **v1.18.11**，修复了 MCP SSE 连接陷入无限重连循环及交错推理字段配置失效两个问题。社区方面，**#40118**（更新后多模型无法响应）与 **#40107**（无法切换 Go 计划）成为最热的新增反馈，暗示近期更新可能引入了回归问题。此外，一个为 OpenCode 添加**统一插件市场**的大型 PR（#40108）正在积极开发中，值得关注。

## 2. 版本发布

### v1.18.11
- **Core 修复**：
  - 阻止 MCP SSE 连接在服务器返回错误后陷入重连循环。
  - 修复使用了交错推理字段（如 `reasoning_text` 或自定义字段名）的提供商模型配置。
- **Desktop 修复**：
  - 外部链接现改为在系统浏览器中打开。

## 3. 社区热点 Issues

1. **[隐私与数据收集澄清]** (#459) — 58 👍 / 16 评论
   用户高度关注本地优先工具的数据收集策略，要求更明确的隐私文档。该问题自 2025 年发起，至今仍被持续关注，说明官方对隐私说明的响应不足。
   https://github.com/anomalyco/opencode/issues/459

2. **[主/子 Agent 随机无限冻结]** (#24342) — 4 👍 / 13 评论
   已成功运行的工作流会随机出现 agent 永久卡在 "thinking" 状态且无任何报错，前端与实际推理状态严重脱节。这是影响日常可用性的严重稳定性问题。
   https://github.com/anomalyco/opencode/issues/24342

3. **[Copilot 提供商忽略子代理模型配置]** (#20859) — 1 👍 / 7 评论
   使用 GitHub Copilot 时，子代理配置的模型被忽略，所有 Premium 请求均错误计入主模型（Claude Opus 4.6）账单。涉及费用归属，影响面广。
   https://github.com/anomalyco/opencode/issues/20859

4. **[`<tool_call>` 标签渲染失败导致对话中断]** (#9674) — 8 👍 / 19 评论
   长对话后 tool_call 标签渲染异常，使会话无法自动继续。与插件集成相关，可能阻塞 Agent 自动化流程。
   https://github.com/anomalyco/opencode/issues/9674

5. **[macOS 系统主题缺失]** (#10661) — 4 👍 / 21 评论
   `/theme` 列表中找不到 system theme。虽然已在 1.1.35 版本后标记关闭，但讨论热度高，说明主题功能是社区常用能力。
   https://github.com/anomalyco/opencode/issues/10661

6. **[thinking block 签名丢失破坏多轮扩展思考]** (#22813) — 10 👍 / 6 评论
   使用 Anthropic 扩展思考时，模型切换导致已读 thinking 块被修改而报错。问题定位在 `parse` 层，对依赖长上下文推理的重度用户非常关键。
   https://github.com/anomalyco/opencode/issues/22813

7. **[/timestamps 命令无效及 /exit 未补全]** (#26625) — 9 评论
   `/timestamps` 切换状态持久化但界面无变化，且 `/exit` 不出现在自动补全中。TUI 体验细节问题，虽小但直接影响使用观感。
   https://github.com/anomalyco/opencode/issues/26625

8. **[TUI 底部实时显示 token 数与 TPS]** (#29909) — 7 👍 / 7 评论
   社区希望像其他 AI IDE 一样在底部栏实时展示输入/输出 token 消耗与滚动 TPS。对成本敏感用户是高频诉求。
   https://github.com/anomalyco/opencode/issues/29909

9. **[TUI 子代理视图]** (#15223) — 10 👍 / 5 评论
   会话生成子代理后，无法在 TUI 中直接看到子代理状态，只能手动跳转 session ID，不切实际。提升多代理工作流可观测性的热门建议。
   https://github.com/anomalyco/opencode/issues/15223

10. **[superpowers 插件技能不显示]** (#21282) — 3 👍 / 7 评论
    下载插件后 `/skills` 命令看不到相应技能，插件系统生态体验受阻，影响用户自定义扩展能力。
    https://github.com/anomalyco/opencode/issues/21282

## 4. 重要 PR 进展

1. **[fix(app): 阻止空输入时 Enter 发送/中断]** (#40110) — 已关闭
   修复 V1/V2 中在空输入框按 Enter 导致误发送或静默中断任务的问题，规范为空操作。
   https://github.com/anomalyco/opencode/pull/40110

2. **[feat(ai): 添加原生 Amazon Bedrock Mantle 支持]** (#40119) — 新开启
   为 Bedrock Mantle Chat 和 Responses 提供原生接入，支持 Bearer 与 SigV4 签名、区域及端点覆盖。
   https://github.com/anomalyco/opencode/pull/40119

3. **[feat(opencode): 统一市场]** (#40108) — 新开启
   实现一个统一包模型，覆盖 Desktop、Web、TUI、CLI 和 API 客户端，取代分散的插件/技能安装方式。大型基础设施改动，值得密切关注。
   https://github.com/anomalyco/opencode/pull/40108

4. **[fix(todo): 并行 todowrite 的 SQLITE_BUSY/LOCKED 重试]** (#40115) — 已关闭
   修复两个子代理并行调用 `todowrite` 时因事务竞争导致 `SQLITE_BUSY` 的问题。
   https://github.com/anomalyco/opencode/pull/40115

5. **[feat(plugin): 包装原生会话 HTTP]** (#40077) — 新开启
   将 `session.request` 替换为完整 `Request -> Response` 的 `session.http` 钩子，支持 Effect 和 Promise 两种插件契约，同时保留原生流式传输。
   https://github.com/anomalyco/opencode/pull/40077

6. **[refactor(ai): 对齐多模态命名]** (#40073) — 已关闭
   将 `LLMError` 改为 `AIError`、`LLM.*` 命名空间迁移至 `AI.*`，为多模态统一架构做准备。
   https://github.com/anomalyco/opencode/pull/40073

7. **[fix(tool): webfetch 按 Content-Type charset 解码]** (#35838) — 新开启
   修复 `webfetch` 一律按 UTF-8 解码的问题，将正确读取 `windows-1252` 等编码页面。
   https://github.com/anomalyco/opencode/pull/35838

8. **[fix(tool): 强制 grep deny 规则]** (#35696) — 已关闭
   修复 grep 权限检查误用搜索正则而非文件路径的问题，使 `**/config.php: "deny"` 这类规则真正生效。
   https://github.com/anomalyco/opencode/pull/35696

9. **[fix(tui): 长会话旧消息消失]** (#26861) — 新开启
   为消息列表添加懒加载滚动，向上滚动时动态加载更早消息，修复长会话历史消息被截断的问题。
   https://github.com/anomalyco/opencode/pull/26861

10. **[feat(opencode): 添加系统提示词调试命令]** (#39905) — 新开启
    新增 `opencode debug prompt` 本地 CLI 命令，方便开发者直接查看最终系统提示词，响应多起相关调试请求。
    https://github.com/anomalyco/opencode/pull/39905

## 5. 功能需求趋势

- **TUI / 会话管理增强**：会话侧边栏（#30489）、子代理视图（#15223）、实时 Token 与 TPS 显示（#29909）、可折叠模型分组（#15026）等，说明用户对终端内可观测性和操作效率要求越来越高。
- **回滚与版本控制**：现有回滚强依赖 Git（#30422），社区希望支持 SVN（#21493）及无 Git 仓库时的回滚能力。
- **多模型与网关兼容性**：新模型/网关接入问题频发（#29545 Cloudflare AI Gateway 的 GPT-5.4、#40107 OpenRouter 计划切换），对长尾模型兼容性诉求强烈。
- **插件生态与可扩展性**：插件技能不可见（#21282）、插件配置自动补全等，反映出自定义扩展机制尚不成熟。
- **跨平台与终端兼容性**：Windows ARM64 安装失败（#33732）、WezTerm/Kitty 键盘协议兼容（#29196）、macOS 高 CPU（#30126）等平台适配问题持续存在。

## 6. 开发者关注点

- **稳定性是头号痛点**：主/子 agent 随机冻结（#24342）、空输入 Enter 误操作（#40110）、桌面端渲染器挂起（#28844）等，说明自动化流程的可靠性仍是当前最主要矛盾。
- **计费与成本可见性**：Copilot 子代理计费错乱（#20859）和 token/TPS 实时显示需求（#29909）都指向用户对 token 消耗的敏感度提升。
- **升级回归风险**：#40118、#40107 两个新 Issue 均指向更新后模型无法响应，开发者对版本升级的稳定性信心可能受到影响。
- **长会话退化问题**：tool_call 渲染失败（#9674）、旧消息消失（#26861）、记忆丢失（#30346），多个问题指向长会话处理能力需要系统性的改进。

---
*本日报由 AI 生成，数据来自 github.com/anomalyco/opencode，统计周期截至 2026-08-02。*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

## 今日速览

- 上下文压缩链路可靠性成为社区焦点：#6879 压缩阈值失效、#7020 压缩后中断，二者均指向长会话稳定性隐患
- PR #7451 为模型目录刷新增加超时与取消逻辑，一次性修复 5 个“刷新永久卡死”类 issue，是本日最重要的韧性改进
- 生态兼容加速：Google 适配器补齐瞬时错误重试（#7471）、兼容 Claude Code Skill frontmatter（#7468）、新增 MiniMax 视频生成（#7467）。过去 24 小时无新版本发布

## 社区热点 Issues

1. **#6879 自动压缩在上下文超过 100% 后仍不触发，直到 API 拒绝请求**
   [github.com/earendil-works/pi/issues/6879](https://github.com/earendil-works/pi/issues/6879)
   开放 · 评论 9 · 👍 7
   gpt-5.6-sol 会话中单轮 agentic 执行超过 2 小时，footer 越过压缩阈值持续增长，直到 373k tokens 被 API 拒绝。社区建议每次 agent 调用后主动检查压缩阈值，而非依赖 provider overflow 兜底。

2. **#7161 anthropic-messages 路径从不发送 x-client-request-id**
   [github.com/earendil-works/pi/issues/7161](https://github.com/earendil-works/pi/issues/7161)
   开放 · 评论 8
   基于该 header 做会话亲和性的网关（如 CliProxyAPI 轮询两个 Claude 账号）无法聚合同一会话请求。已有配套贡献提案 #7438。

3. **#7020 压缩完成后 Pi 有时不继续执行**
   [github.com/earendil-works/pi/issues/7020](https://github.com/earendil-works/pi/issues/7020)
   开放 · 评论 7 · 👍 2
   长跑“协调者”会话在压缩后出现流程停住。与 #6879 共同表明压缩触发、摘要生成、执行恢复的全链路需要系统性加固。

4. **#5931 从 TUI 复制文本引入多余空格和换行**
   [github.com/earendil-works/pi/issues/5931](https://github.com/earendil-works/pi/issues/5931)
   已关闭（no-action）· 评论 7
   行折行处复制内容被污染，影响日常代码/文本复制体验。

5. **#7402 粘贴孟加拉语文本后按空格导致整行重复**
   [github.com/earendil-works/pi/issues/7402](https://github.com/earendil-works/pi/issues/7402)
   已关闭（untriaged）· 评论 6
   差分渲染器对显示宽度多算导致与终端物理光标失步。编辑器状态正确，纯渲染层 bug，复现稳定。

6. **#7010 规范化 OpenAI 兼容 provider 的可选对象 tool schema**
   [github.com/earendil-works/pi/issues/7010](https://github.com/earendil-works/pi/issues/7010)
   开放 · 评论 6
   `required` 字段未规范化导致部分 OpenAI 兼容网关拒绝工具调用，影响 `@earendil-works/pi-ai` 所有下游用户。

7. **#7385 按键输入延迟随对话长度增长，最高达 520ms/字符**
   [github.com/earendil-works/pi/issues/7385](https://github.com/earendil-works/pi/issues/7385)
   已关闭（untriaged）· 评论 3
   约 160 个工具调用的会话中，tool-result-renderer 绕过 Text 组件缓存，每次按键重处理全部工具结果。性能优化方向清晰。

8. **#7321 不支持 bracketed paste 的终端（如 Termux）多行粘贴每次换行触发提交**
   [github.com/earendil-works/pi/issues/7321](https://github.com/earendil-works/pi/issues/7321)
   开放 · 评论 2 · 👍 1
   移动端/终端兼容性缺失，多行内容被逐行拆成多条命令提交。

9. **#7301 卡住的 availability 刷新永久不可恢复**
   [github.com/earendil-works/pi/issues/7301](https://github.com/earendil-works/pi/issues/7301)
   已关闭 · 评论 3
   `forceRefreshAvailability()` 会链到已卡死的 Promise 上，即使根因消失也无法恢复。#7323、#7418、#7443 同属“单次网络故障导致永久卡死”模式。

10. **#7457 5 分钟有效期的 OAuth 令牌每次请求都刷新**
    [github.com/earendil-works/pi/issues/7457](https://github.com/earendil-works/pi/issues/7457)
    已关闭（untriaged）· 评论 1
    默认解析器缓存条件过严，导致可用令牌也被反复刷新。对应修复见 PR #7456。

## 重要 PR 进展

1. **#7471 fix(ai): Google 适配器重试瞬时 provider 错误（429/5xx）**
   [github.com/earendil-works/pi/pull/7471](https://github.com/earendil-works/pi/pull/7471)
   已关闭。Vertex/Gemini 在流首 token 前的限流直接变成终态 error，现在与 Anthropic/OpenAI 路径保持一致的重试行为。

2. **#7468 feat(agent,coding-agent): 接受 Claude Code Skill frontmatter**
   [github.com/earendil-works/pi/pull/7468](https://github.com/earendil-works/pi/pull/7468)
   已关闭。两个 skill loader 兼容 Claude Code SKILL.md frontmatter 规范，Claude Code 技能生态可直接复用。

3. **#7467 feat(ai): 增加 MiniMax 视频生成**
   [github.com/earendil-works/pi/pull/7467](https://github.com/earendil-works/pi/pull/7467)
   已关闭。新增 MiniMax 全球/中国区 video provider，含 v2/v1 端点与创建、查询、下载全链路支持。

4. **#7466 feat(coding-agent): 可选的 pre-dispatch durability barrier**
   [github.com/earendil-works/pi/pull/7466](https://github.com/earendil-works/pi/pull/7466)
   已关闭。新会话在首个 assistant 消息前不落盘，崩溃后无法区分“provider 未调用”与“已计费但输出丢失”。该 PR 为 at-most-once 场景提供持久性屏障。

5. **#7463 fix(coding-agent): SessionManager._persist 不因会话目录缺失而崩溃**
   [github.com/earendil-works/pi/pull/7463](https://github.com/earendil-works/pi/pull/7463)
   已关闭。`appendFileSync` 前未确保父目录存在，工作区重置/外部清理后写入直接 ENOENT。

6. **#7462 feat(coding-agent): 新增 PI_JITI_CACHE 环境变量**
   [github.com/earendil-works/pi/pull/7462](https://github.com/earendil-works/pi/pull/7462)
   已关闭。允许 nix 等只读 store 打包环境将 jiti 转译缓存指向持久目录。

7. **#7451 fix(coding-agent): 给模型目录刷新加上限**
   [github.com/earendil-works/pi/pull/7451](https://github.com/earendil-works/pi/pull/7451)
   开放。修复 #7027、#7113、#7153、#7418、#7443 共 5 个“无超时导致永久卡死”的 issue，涉及请求取消与排队控制。

8. **#7456 fix(auth): 支持短生命周期 OAuth 令牌**
   [github.com/earendil-works/pi/pull/7456](https://github.com/earendil-works/pi/pull/7456)
   已关闭。仅当剩不足 1 分钟时才刷新，覆盖 4 分钟可用令牌场景，避免每请求刷新。

9. **#7441 fix(ai): 容忍非空 openai-completions 流缺失 finish_reason**
   [github.com/earendil-works/pi/pull/7441](https://github.com/earendil-works/pi/pull/7441)
   已关闭。部分网关不合规省略终止 chunk 导致会话中断，现在仅在流为空且无 finish_reason 时抛错。

10. **#7453 feat(ai): 新增 Cline API 与 ClinePass providers**
    [github.com/earendil-works/pi/pull/7453](https://github.com/earendil-works/pi/pull/7453)
    已关闭。基于 OpenAI 兼容 Chat Completions 网关 `api.cline.bot`，分别覆盖按量计费（Cline API）与包月（ClinePass）两种模式。

## 功能需求趋势

- **上下文压缩与长会话可靠性**：多项 issue 指向压缩触发条件、截断恢复、摘要持久化存在系统性短板（#6879、#7020、#7048）
- **网络容错与超时治理**：模型目录刷新、/login、/model 切换均出现“无超时 → 永久卡死”，社区期望全局超时 + 取消 + 重试机制（#7323、#7418、#7443、#7451）
- **Provider 兼容性增强**：新增 Cline/ClinePass、MiniMax 的同时，对 OpenAI 兼容 schema、finish_reason 缺省、x-client-request-id 等细节做规范化（#7010、#7441、#7161）
- **终端体验打磨**：bracketed paste 依赖、渲染性能、滚动锁定、终端标题恢复等交互细节问题频出（#7321、#7385、#4679、#7469）
- **认证与密钥管理**：短生命周期 OAuth 令牌、多 provider 密钥环境变量管理成为持续关注点（#7456、#7457、#7453）

## 开发者关注点

- **压缩链路信任度下降**：多位开发者反馈压缩不触发、压缩后不继续、摘要截断，长会话场景影响最重
- **对瞬时网络故障缺乏韧性**：一次超时或卡住的请求可让整个会话/登录流程永久挂起，要求内置重试、超时与可恢复状态
- **第三方网关适配细节**：Anthropic 会话亲和性、OpenAI 兼容 provider 的 schema 边界、Fireworks 连接超时是当前集成痛点
- **打包与分发环境适配**：npm 11 默认阻止 install scripts 影响扩展更新，nix 只读 store 需要可配置缓存路径（#6600、#7462）
- **性能随会话增长劣化**：长会话下输入延迟显著，渲染缓存与差分渲染器需针对大规模工具结果做专项优化（#7385）

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报（2026-08-02）

## 1. 今日速览

v0.21.3 正式版于今日发布，重点增强了 `/review` 命令的验证能力；社区层面，本地模型工具调用（#176）与提示缓存优化（#8279）成为最热讨论方向。PR 侧，桌面端 Web Shell 封装（#8132）和 DeepSeek 默认启用 ToolSearch（#8331）是值得关注的新动向。

## 2. 版本发布

过去 24 小时共发布 3 个版本：

- **[v0.21.3（正式版）](https://github.com/QwenLM/qwen-code/releases)**：核心亮点为增强 `/review` 命令，加入测试计划校验、失败归因（measured failure attribution）及新的验证视角，提升代码变更分析能力（[#8215](https://github.com/QwenLM/qwen-code/pull/8215)、[#8218](https://github.com/QwenLM/qwen-code/pull/8218)，部分细节被截断）。
- **[v0.21.3-nightly.20260802.184365390](https://github.com/QwenLM/qwen-code/releases)**：完善 TUI 键盘快捷键参考文档（[#8327](https://github.com/QwenLM/qwen-code/pull/8327)）；修复历史记录分页在某些情况下无法翻页的问题（`fix(core): unblock history pagination`）。
- **[v0.21.2-nightly.20260801.bc382c3ff](https://github.com/QwenLM/qwen-code/releases)**：生命周期 hook 的 payload 中新增会话来源信息（[#8155](https://github.com/QwenLM/qwen-code/pull/8155)）；`/review` 增加缓存身份检查。

## 3. 社区热点 Issues

以下为过去 24 小时讨论度较高的 10 个 Issue，覆盖本地模型、资源治理、UI 体验等方向：

### 3.1 本地模型工具调用失效
- **[#176 [已关闭] Tool calling does not work with local model qwen3-30b-a3b](https://github.com/QwenLM/qwen-code/issues/176)** — 社区最高讨论度 Issue（23 评论、7 👍）。用户使用本地 qwen3-30b-a3b 时，模型能生成正确的工具调用格式，但工具实际不会执行且无报错。这一问题反映了本地模型接入的验证缺口，虽已关闭，但后续相关反馈仍持续出现。

### 3.2 外部上下文提供者
- **[#7585 [开放] proposal: Add a direct external context provider profile](https://github.com/QwenLM/qwen-code/issues/7585)** — 11 评论。提议为 Qwen Code 增加"直接外部上下文提供者"配置方案，通过 monorepo 集成让 CLI 进程获取管理员绑定的外部记忆，属于 MCP/扩展生态方向的重要设计讨论。

### 3.3 多工作区守护进程资源治理
- **[#8051 [开放] tracking(serve): Bound multi-workspace daemon resource usage](https://github.com/QwenLM/qwen-code/issues/8051)** — 9 评论。要求 `qwen serve` 多工作区守护进程从"仅限制数量"升级为真正约束字节级资源（请求体、WebSocket 组装等），是生产化部署的关键诉求。

### 3.4 TUI 滚动刷屏
- **[#5971 [已关闭] tui窗口滚动刷屏问题](https://github.com/QwenLM/qwen-code/issues/5971)** — 4 评论。Linux（Anolis OS 8.10）下长对话输出时 TUI 窗口持续从头滚动，严重影响阅读体验。属渲染层高频痛点。

### 3.5 私有 ASR 端点支持
- **[#8286 [开放] feat(voice): support explicitly trusted private ASR base URLs](https://github.com/QwenLM/qwen-code/issues/8286)** — 3 评论。提议允许受信私有化部署将语音识别 baseUrl 指向内网 HTTP 端点，是语音功能落地企业内网的前置需求。

### 3.6 虚拟历史模式无法选中状态栏
- **[#8131 [开放] bug(cli): statusline text cannot be selected in Virtualized History mode](https://github.com/QwenLM/qwen-code/issues/8131)** — 3 评论。Virtualized History 模式下状态栏文本不可选中，影响长会话中复制关键状态信息。

### 3.7 聊天压缩复用提示缓存
- **[#8279 [开放] discussion(core): could chat compression reuse the main prompt-cache prefix via a fork?](https://github.com/QwenLM/qwen-code/issues/8279)** — 3 评论。设计讨论：聊天压缩能否通过 fork 方式复用主会话的 prompt cache，以降低延迟与成本。牵涉缓存架构核心，值得持续关注。

### 3.8 Warp 终端补全快捷键冲突
- **[#8330 [开放] @ completion tab switching is inaccessible in Warp](https://github.com/QwenLM/qwen-code/issues/8330)** — 3 评论。Warp 终端中 Ctrl+Tab 被终端级快捷键抢占，导致 `@` 补全面板无法切换分类。属于终端适配类问题。

### 3.9 会话产物追踪
- **[#7966 [已关闭] 如何获取会话中创建了哪些文件？](https://github.com/QwenLM/qwen-code/issues/7966)** — 6 评论。用户希望区分直接写入与代码间接生成的文件，并识别文件归属会话。会话管理的可观测性需求明确。

### 3.10 AskUserQuestion 流式响应为空
- **[#3804 [已关闭] 0.15.6 AskUserQuestion，容易出现 [API Error: Model stream ended with empty response text.]](https://github.com/QwenLM/qwen-code/issues/3804)** — 5 评论。AskUserQuestion 交互频繁触发空响应错误，影响多轮交互稳定性，社区反馈集中在 0.15.x 版本。

## 4. 重要 PR 进展

过去 24 小时共 50 条 PR 更新，以下 10 个方向性较强：

| PR | 说明 |
| --- | --- |
| [#8343 ci: auto-update ECS runners on stable publish and harden update job](https://github.com/QwenLM/qwen-code/pull/8343) | 在稳定版发布后通过 `repository_dispatch` 自动更新自托管 ECS runner 上的 qwen CLI，防止静默降级，强化 CI 基础设施。 |
| [#8354 fix(sdk-java): accept ERROR terminal in teardown E2E to fix flaky race](https://github.com/QwenLM/qwen-code/pull/8354) | 修复 Java SDK 的 teardown E2E 测试在 CI 负载下偶发失败的问题：允许 session 在删除竞态中返回 `ERROR` 终止态。 |
| [#8348 docs: document compaction and image model selection](https://github.com/QwenLM/qwen-code/pull/8348) | 文档补充聊天压缩与内置图片生成的模型选择方式，记录默认值、回退与可用性。 |
| [#8342 fix(cli): allow pasting sensitive extension settings](https://github.com/QwenLM/qwen-code/pull/8342) | 允许敏感扩展设置项支持多字符粘贴（仍遮显），并丢弃粘贴的控制字符，解决 Windows 下粘贴失效问题。 |
| [#8180 feat(telemetry): Track tool execution outcomes](https://github.com/QwenLM/qwen-code/pull/8180) | 在现有工具调用最终状态之外新增 `executionStatus`，记录 `invoke.execute()` 是否真正进入及是否成功，提升遥测对"已执行但失败"的区分能力。 |
| [#8331 fix(cli): enable ToolSearch by default for DeepSeek](https://github.com/QwenLM/qwen-code/pull/8331) | 为 DeepSeek 模型默认启用 ToolSearch，保留显式 opt-out 和 10% 延迟工具预加载阈值；同时更新设置文案，不再建议为追求前缀缓存稳定而关闭 ToolSearch。 |
| [#8353 fix(cli): let ESC cancel ongoing work before popping queued messages](https://github.com/QwenLM/qwen-code/pull/8353) | 修复 ESC 键行为：当智能体正在响应时，ESC 应优先取消当前请求，而非弹出排队消息。 |
| [#8349 feat(review): drive — readiness polled, completion proven, cleanup guaranteed](https://github.com/QwenLM/qwen-code/pull/8349) | 新增 `qwen review drive` 子命令，通过轮询确认服务就绪、驱动验证、以事实记录结果并保证清理，取代"猜 sleep 时长"的验证方式。 |
| [#8346 feat(review): teach the verifier the falsify-not-verify asymmetry](https://github.com/QwenLM/qwen-code/pull/8346) | 为 Step 4 验证器新增"证伪 ≠ 证伪"规则块，明确"我无法验证"与"证据在我没看的地方"不应作为驳回结论的理由，减少误判。 |
| [#8132 feat(desktop): package Web Shell as a release-ready desktop app](https://github.com/QwenLM/qwen-code/pull/8132) | 将 Tauri PoC 升级为可发布桌面应用：复用现有 Web Shell，同时接管原生生命周期（启动/恢复状态、workspace 管理），避免维护第二套桌面 UI。 |

## 5. 功能需求趋势

从近期 Issue 与 PR 综合看，社区最关注的五个方向：

1. **本地 / 私有化模型接入**：围绕本地模型工具调用（#176）、私有 ASR 端点（#8286）的诉求持续出现，"既要模型私有化，也要工具调用可靠"是核心期望。
2. **提示缓存与上下文性能**：多线程讨论缓存命中率遥测（#8284）、压缩复用缓存（#8279）、MCP 工具列表导致缓存失效（#4777），成本与延迟优化成为高阶用户的核心关切。
3. **资源治理与守护进程生产化**：`qwen serve` 的资源上限（#8051）、子会话并发可配置（#8341）、内存预算汇报（#8245），显示社区正在将 Qwen Code 推向多租户/生产环境。
4. **会话可观测性**：用户越来越关心"文件属于哪个会话"（#7966）、子代理详细决策过程可见（#3758），对 agent 行为的透明性提出更高要求。
5. **终端适配与交互细节**：Warp 快捷键冲突（#8330）、Virtualized History 文本选择（#8131）、TUI 滚动刷屏（#5971），说明不同终端环境下的体验一致性正成为选型因素。

## 6. 开发者关注点

- **本地模型工具调用可靠性**：#176 虽已关闭，但"模型输出正确格式工具调用却不执行"的现象仍是本地部署用户的主要挫败点，希望有更明确的错误暴露或 fallback 机制。
- **TUI 稳定性与体验细节**：Linux 下滚动刷屏（#5971）、设置页闪烁（#938）、历史模式选中困难（#8131）等高频 UI 问题反复出现，建议将 TUI 渲染回归测试纳入 CI 重点场景。
- **模型表现一致性**：多起"降智"反馈（#5029）表明用户对模型更新带来的行为变化敏感，期望有可量化的回归评估与回退手段。
- **Extension / Skill 管理**：从仓库直接安装扩展失败（#2635）、`/skills` 激活逻辑困惑（#2338），现有扩展生态的安装与自动触发机制仍需打磨。
- **API 稳定性**：AskUserQuestion 空响应（#3804）、随机 "User cancelled"（#651）等错误在特定版本/网络环境下频发，社区期待更快的修复节奏与更清晰的状态提示。

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI 社区动态日报 — 2026-08-02

> 数据来源：github.com/Hmbown/CodeWhale（Hmbown/DeepSeek-TUI 相关社区）

## 1. 今日速览

今日 CodeWhale 仓库 PR 活动高度密集：维护者 Hmbown 一次性提交了包含 8 项用户可见修复的批处理 PR（#5063），并围绕配置路径安全（#5075）、通知静音模式（#5066）、任务作用域隔离（#5079）等多个方向持续推进。社区方面，**API key 仅保存在当前仓库而非全局**的 bug 被连续报告（#5045/#5047），成为今日配置体验方面的最热问题；另外两项外部贡献（#4985、#4990）已由维护者整合进主干。

## 2. 版本发布

过去 24 小时无新 Release。

## 3. 社区热点 Issues

**#5007 · YouTuber 未使用 CodeWhale 作为 DeepSeek TUI**（6 评论）
> [链接](https://github.com/Hmbown/CodeWhale/issues/5007)

YouTuber 在评测 DeepSeek-v4-flash 时选择了 Codex 而非 CodeWhale。社区围绕产品定位和开发者心智展开讨论——CodeWhale 并非 DeepSeek 官方 TUI，如何建立实际使用场景的认知仍是短板。

**#4085 · [bug, v0.9.3] macOS Dropbox 文件操作失败**（5 评论）
> [链接](https://github.com/Hmbown/CodeWhale/issues/4085)

读/写/删除 `~/Library/CloudStorage/Dropbox` 下文件全部失败（macOS File Provider）。已确认不是沙箱问题，二进制零权限签名，问题定位到 File Provider 框架兼容性。

**#4785 · [文档] 464 处 `#[allow(dead_code)]` 掩盖代码漂移**（4 评论）
> [链接](https://github.com/Hmbown/CodeWhale/issues/4785)

维护者通过剥离属性后运行 `cargo check` 量化了隐患：大量死代码被静默隐藏，编译器无法报告结构性漂移。这是代码质量降级的前兆。

**#3093 · [本地化] 韩语、西班牙语、巴西葡语站点本地化**（4 评论）
> [链接](https://github.com/Hmbown/CodeWhale/issues/3093)

README 部分已落地（`README.ko-KR.md` / `es-419` / `pt-BR`），网站 locale 待跟进。本地化矩阵持续推进中。

**#4683 · [bug] DeepSeek completions URL 偶发失败**（3 评论）
> [链接](https://github.com/Hmbown/CodeWhale/issues/4683)

用户报告 `https://api.deepseek.com/v1/chat/completions` 请求长期运行后间歇性网络错误。该问题自 v0.9.x 以来多次被提及，社区关注度高。

**#4684 · [bug] danger-full-access 未禁用工具层 workspace 边界检查**（3 评论）
> [链接](https://github.com/Hmbown/CodeWhale/issues/4684)

OS 级沙箱可被 `danger-full-access` 关闭，但工具层（`read_file` / `grep_files` 等）仍强制执行 workspace 边界，导致全局 skill 无法读取外部文件，权限语义不一致。

**#4411 · [设计] 跨 Provider Auto 路由需显式同意流程**（3 评论）
> [链接](https://github.com/Hmbown/CodeWhale/issues/4411)

`/model auto` 使用 DeepSeek flash 路由时可将请求上下文摘要发送给第三方路由器，跨 Provider 选择模型。社区关注数据隐私和用户知情权。

**#4790 · [本地化] 印地语本地化 + 天城文终端渲染探针**（3 评论）
> [链接](https://github.com/Hmbown/CodeWhale/issues/4790)

首个 Devanagari 文案，涉及终端复杂文本渲染（shaping），属技术难度较高的本地化任务，也是 v0.9.2 独立跟踪的原因。

**#4807 · [UI] 水母动画渲染为"绳子上的 blob"**（3 评论）
> [链接](https://github.com/Hmbown/CodeWhale/issues/4807)

Dogfood 反馈：环境水母 `JELLY_BELL = "o*"` + 单触须循环不足以形成水母剪影，需要更完整的视觉设计。

**#5045 · [新] API key 存储必须全局化，而非 repo 作用域**（1 评论）
> [链接](https://github.com/Hmbown/CodeWhale/issues/5045)

今日新开，运营商 dogfood 报告：在 A 仓库配置的 API key，切到 B 仓库后 Provider 显示未配置。直接影响基础使用流程，优先级高。

## 4. 重要 PR 进展

**#5079 · 按 workspace 隔离任务列表（社区整合）**
> [链接](https://github.com/Hmbown/CodeWhale/pull/5079)

将社区 PR #4985（作者 gaord）cherry-pick 到当前主干，保留原作者署名。为 `GET /v1/tasks` 增加可选 `workspace` 过滤，GUI 客户端可按工作区列出任务。

**#5078 · devcontainer 支持 Windows 开发（社区整合）**
> [链接](https://github.com/Hmbown/CodeWhale/pull/5078)

整合 #4990（作者 pingg02），使用专用开发镜像提供 Rust 工具链、pkg-config、DBus 头文件；以命名卷替代 host HOME 挂载，修复 Windows 路径展开问题。

**#5064 · 压缩摘要内置确定性延续契约**
> [链接](https://github.com/Hmbown/CodeWhale/pull/5064)

在 compaction 摘要中新增运行时提取的 Continuation Contract，保存工作契约、活动意图、决策、验证证据和 in-flight 工具调用，独立于总结模型，确定性保留上下文。

**#5068 · DeepSeek Pro effort 映射集中化**
> [链接](https://github.com/Hmbown/CodeWhale/pull/5068)

新建 `client/deepseek_effort.rs` 单一日期标注表，Chat 和 Responses 两套请求路径共用同一 effort 映射，消除双路径漂移风险。

**#5063 · 8 项用户可见修复批次**
> [链接](https://github.com/Hmbown/CodeWhale/pull/5063)

七个 commit，覆盖 Anthropic wire、sandbox、workflow、config scoping、session layer、input、TUI。每个修复都带回归测试，按根因修复而非症状修复。

**#5075 · 凭证持久化路径安全**
> [链接](https://github.com/Hmbown/CodeWhale/pull/5075)

拒绝相对路径的 `CODEWHALE_HOME` / `CODEWHALE_CONFIG_PATH` 及旧版 config 覆盖（避免落入 repo 成为全局状态）；TUI 配置读写统一走 fallible path 权威；禁止自动明文降级。

**#5066 · 通知静音模式与分类开关**
> [链接](https://github.com/Hmbown/CodeWhale/pull/5066)

在共享发送路径上加装通知策略闸门：`[notifications].quiet` 一键静默全部类别；`[notifications].<category>` 可单独关桌面投递和事件音效。

**#5076 · 删除休眠的 Landlock 原型**
> [链接](https://github.com/Hmbown/CodeWhale/pull/5076)

移除 361 行 Landlock 原型代码——无生产调用者且当初 wrapper 原样返回未沙箱化命令。同步更新 sandbox 与架构文档。

**#5065 · web 搜索/抓取检索路径一致性**
> [链接](https://github.com/Hmbown/CodeWhale/pull/5065)

统一 `web_search`、`web.run` 和 guarded fetch 的默认结果数、超时配置、scraper user agent，并替换硬编码 Codewhale 版本号为 `CARGO_PKG_VERSION`。

**#5067 · operate 模式直至完成门控 + 可配置延续上限**
> [链接](https://github.com/Hmbown/CodeWhale/pull/5067)

移除硬编码的 10 次延续终止限制：operate 目标现在持续运行直到验证完成、被阻塞或预算耗尽。新增 `[goal] max_continuations`（默认 100）作为安全背停。

## 5. 功能需求趋势

- **本地化布局加速**：韩语、西班牙语、巴西葡语、印地语、乌克兰语、法语、德语、加泰罗尼亚语集中出现，且 README 已部分落地，说明多语言策略正从"规划"推进到"交付"。
- **凭证与状态全局化**：#5045/#5047/#5075 共同指向一个诉求——API key 和配置必须是用户全局的，不能绑定到某个 repo，也不能明文落入工作区。
- **持续架构重构**：v0.9.3 一系列重构 Issue（#3958/#3953/#4077/#4083/#4174）都针对单文件过大（3,000+ 行）和重复注册表问题，社区对代码可维护性高度关注。
- **沙箱与权限语义统一**：#4684 反映"危险权限模式"与"工具层边界"不一致，用户期望一个权限级别对应一套完整语义。
- **运行时可靠性与可观测性**：#4415（工具预算）、#5064（延续契约）、#5056（测试可靠性）说明社区在向更严格、更可验证的 agent 运行时演进。

## 6. 开发者关注点

- **API key 丢失是最紧迫痛点**：#5045 和 #5047 双重报告——换仓库后 Key“消失”，而残留在 repo 中的明文副本又构成泄露面。社区期望即时全局持久化。
- **Windows 平台体验缺口**：#4564 中 `--model` 与 `--toolsets` 在 npm 全局安装下被拼接为单参数；#5078 补充了 devcontainer 对 Windows 的支持，但仍需在 CLI 层面根治。
- **macOS File Provider 兼容性**：#4085 中 Dropbox 路径的文件操作悉数失败，对依赖云同步目录的用户影响严重。
- **自定义 Provider 启动失败**：#4682 中自定义 provider 名称会导致 Codewhale 无法启动，配置灵活性与稳定性之间需再平衡。
- **DeepSeek 端点网络波动**：#4683 高频出现 "error sending request for url" 报错，用户对超时重试机制提出更高要求。
- **产品功能与实现脱节**：#4936 指出网页端引导用户执行的 `/rc` 命令在运行时尚未实现，API（产品承诺）与 CLI（实际能力）的一致性需要重视。

---
*日报生成时间：2026-08-02 · 数据覆盖窗口：过去 24 小时*

</details>

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar) 自动生成。*