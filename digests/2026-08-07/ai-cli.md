# AI CLI 工具社区动态日报 2026-08-07

> 生成时间: 2026-08-07 02:55 UTC | 覆盖工具: 9 个

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

# AI CLI 工具横向对比分析报告（2026-08-07）

## 1. 生态全景

当前 AI CLI 工具已从“能用”迈入“好用”的深度打磨期，社区反馈重心由功能堆叠转向终端交互体验、会话持久化、MCP 成熟度与跨平台稳定性。头部工具（Claude Code、OpenAI Codex、Gemini CLI）版本迭代频繁，新兴力量（Pi、Qwen Code、OpenCode）则在多代理编排与安全边界上加速追赶。与此同时，权限模型失效、数据损坏、会话状态串扰等底层问题集中暴露，成为用户建立信任的关键卡点。整体呈现“功能趋同、体验分化、可靠性决定竞争力”的态势。

## 2. 各工具活跃度对比

> 统计口径：日报摘录的“社区热点 Issues / 重要 PR 动态”，非全量数据。

| 工具 | 热点 Issues | PR 动态 | Release 情况 |
|---|---|---|---|
| Claude Code | 10 | 3 | 无新版本 |
| OpenAI Codex | 10 | 10 | rust-v0.147.0 |
| Gemini CLI | 10 | 10 | v0.55.0-preview.2 + nightly |
| GitHub Copilot CLI | 10 | 0 | v1.0.79-6 补丁版 |
| Kimi Code CLI | 8 | 3 | 无新版本 |
| OpenCode | 10 | 10 | 无新版本 |
| Pi | 10 | 10 | v0.84.0 |
| Qwen Code | 10 | 10 | v0.21.7 + Qwen Live Host v0.1.0 |
| DeepSeek TUI | 10 | 10 | v0.9.4 发布列车合入 |

从活跃度看，OpenAI Codex、OpenCode、Qwen Code 处于高输出状态；Claude Code 与 Copilot CLI 更偏向稳定修补；Kimi Code CLI 社区规模相对较小。

## 3. 共同关注的功能方向

### 3.1 终端交互与输出质量

- **代表工具与诉求**：Claude Code（复制带 2 空格缩进、80 列硬换行，#13378/#37796）；OpenAI Codex（多行状态栏 #21653、Markdown 导出 #2880）；Copilot CLI（对话历史滚动 #4313）；Pi（复制换行 #7721、双击路径选择 #7746）；Qwen Code（窗口缩小内容重印 #8557）；Gemini CLI（Backspace 删词 #25867）。
- **核心**：复制粘贴纯净性、滚动/多行支持、鼠标与快捷键适配，已成为 CLI“日常舒适度”的通用瓶颈。

### 3.2 会话生命周期与上下文管理

- **代表工具与诉求**：Gemini CLI（意外关机丢会话 #27180、跨工作区列会话 #28596）；Copilot CLI（大型会话恢复 OOM #4251）；Claude Code（本地用量低却额度 100% #54750）；OpenCode（上下文用量面板 #6152、跨项目 session 选择器 #31932）；Pi（压缩失效直至 API 拒绝 #6879）；Kimi（跨会话记忆 #1283）；DeepSeek TUI（子代理 checkpoint 续跑 #5242）。
- **核心**：会话持久化可靠性、大上下文性能、跨会话记忆与用量透明化，是长任务工作流能否落地的前提。

### 3.3 MCP 生态生产级化

- **代表工具与诉求**：OpenAI Codex（MCP 进程池 #20883、OAuth 恢复 #37337）；Copilot CLI（注册表 403 #4346、stdio 子进程残留 #4392、token 信息暴露 #4174）；Gemini CLI（Client Sampling #10704）；OpenCode（MCP 会话隔离 #40979）；Kimi（schema 懒加载 #2147）；Pi（/reload 后渲染失效 #7740）；DeepSeek TUI（MCP Registry 优先 #5238）。
- **核心**：MCP 已从“能连”进入“生产级打磨”阶段，生命周期管理、认证恢复、资源隔离成为标准需求。

### 3.4 跨平台兼容性（Windows/Linux）

- **代表工具与诉求**：Claude Code（WSL2 ugrep 内存放大 #54394）；OpenAI Codex（Windows taskkill 风暴 #33776、Linux 桌面支持 #11023）；Gemini CLI（PowerShell 5.1 `&&` 解析错误 #20773）；Copilot CLI（NixOS bash 无法启动 #3392）；Qwen Code（Windows 桌面版 EISDIR 崩溃 #8615、文件链接 URL 编码 #8644）；OpenCode（Windows 启动失败 #40957、Debian TUI 白屏 #35494）；Pi（Windows 支持专项 #7547）。
- **核心**：Windows 与特定 Linux 发行版仍是主要短板，跨平台一致性和 shell 适配直接影响采用率。

### 3.5 权限与安全模型可信度

- **代表工具与诉求**：Claude Code（`ask list` 随 Bash allow 失效 #6527）；Copilot CLI（auto→interactive 切换失效 #4388）；Qwen Code（DO_NOT_TRUST 被祖先覆盖 #8627、`.env` 从不信任目录加载 #8643）；Gemini CLI（数据批量删除 #26856）；OpenCode（权限 edit 规则按 worktree 相对路径匹配 fail-open #40945）；DeepSeek TUI（嵌套 subagent 递归预算越权 #5253）。
- **核心**：权限规则必须可靠、可解释，且对破坏性操作有强护栏；安全漏洞一旦暴露即引发信任危机。

### 3.6 用量与计费透明度

- **代表工具与诉求**：Claude Code（会话额度虚高 #54750）；OpenAI Codex（子代理一夜耗尽周配额 #35463）；Gemini CLI（流中断 usage 未记录 #28718）；OpenCode（Go 订阅 401 故障 #38257、订阅状态未生效 #40234）；Qwen Code（OAuth 免费层政策调整 #3203）。
- **核心**：配额统计准确、订阅状态同步、计费可审计，是商业化工具建立长期信任的底座。

## 4. 差异化定位分析

| 工具 | 功能侧重 | 目标用户 | 技术路线特征 |
|---|---|---|---|
| Claude Code | 终端体验、权限精细化、多代理隔离 | 企业级 / 重度工作流 | TUI 渲染成熟，权限系统复杂，worktree 隔离机制 |
| OpenAI Codex | 桌面应用、TUI 导出、MCP 生命周期 | 跨平台开发者、设计团队 | Rust 重写，桌面 + CLI 双端，MCP 深度集成 |
| Gemini CLI | 会话持久化、Windows 兼容、认证稳定 | Google 生态 / IDE 集成者 | Node.js，与 Gemini 模型深度绑定，preview 迭代 |
| GitHub Copilot CLI | GitHub 生态、会话恢复、MCP 稳定性 | GitHub 重度用户、CI/CD 场景 | 与 Copilot 服务/ACP 协议深度耦合 |
| Kimi Code CLI | 跨会话记忆、VSCode 插件、文件安全 | 国内开发者、VSCode 用户 | 轻量，聚焦 Moonshot 模型，IDE 联动为主 |
| OpenCode | 开源开放、订阅制、TUI 交互、隐私透明 | 开源社区、自托管用户 | 多 provider 网关，代理层服务，社区驱动 |
| Pi | 全屏 TUI、多 Provider、性能优化 | 终端效率追求者、自定义玩家 | Bun 生态，全屏模式，SQLite 查询下推 |
| Qwen Code | 全栈形态（CLI/桌面/Live Host）、安全信任、长任务 | 阿里云生态、多模态开发者 | 多产物发布，OAuth 与 folder trust，Goals 长任务 |
| DeepSeek TUI | 深度定制 DeepSeek、多 Provider、子代理恢复 | DeepSeek / 第三方网关用户 | Rust 实现，命令边界重构，checkpoint 机制 |

差异化趋势：Claude Code 与 Copilot CLI 走“企业级稳定”路线；Codex、Qwen、Pi 强调“多形态 + 快速迭代”；OpenCode 和 DeepSeek TUI 以开放社区和可塑性强见长；Kimi 则深耕 IDE 集成场景。

## 5. 社区热度与成熟度

- **第一梯队（高度活跃）**：OpenAI Codex（Linux 支持 933 👍、203 评论）、OpenCode（401 故障累计超百条评论，功能需求 129 👍）、Claude Code（复制问题合计 120+ 👍）。反馈量大且能快速转化为 PR。
- **第二梯队（快速迭代）**：Gemini CLI、Qwen Code、Pi。发布频率高，但伴随 P1 回归；Pi 的 v0.84.0 引发新 TUI 功能集中反馈，属成长期。
- **第三梯队（小而精）**：Kimi Code CLI、DeepSeek TUI。社区规模较小，但议题聚焦度高，如 DeepSeek 的命令边界重构 EPIC、Kimi 的文件数据安全修复。

成熟度判断：Claude Code 和 Copilot CLI 处于稳定修补期（PR 少或补丁版）；Codex、Qwen、Pi、OpenCode 处于功能扩张期；Gemini CLI 仍需要通过 preview 版本解决稳定性欠账。

## 6. 值得关注的趋势信号

1. **终端交互体验成为新的竞技场**  
   复制粘贴污染、滚动缺失、状态栏截断等高频细节问题，正从“小毛病”升级为流失用户的决定性因素。对开发者而言，优先投资 TUI/CLI 的文本输出纯净性和输入灵活性，是性价比最高的体验改进。

2. **会话数据资产化**  
   跨会话记忆、持久化恢复、上下文压缩、用量可视化被多个工具同时提出。未来 CLI 的竞争力将部分取决于“会话能否像代码一样被搜索、备份和复用”。

3. **MCP 从协议变成基础设施**  
   进程池、OAuth 恢复、schema 懒加载、隔离性成为通用需求。MCP 的稳定性将直接影响 agent 生态的集成深度，建议开发者关注自身工具的 MCP 生命周期治理。

4. **多代理并发安全边界待定义**  
   全局 worktree 状态串扰（Claude Code）、子代理“假成功”（Gemini）、递归预算越权（DeepSeek）等问题，说明多 agent 协作仍缺成熟的设计模式。这将是下一阶段核心安全议题。

5. **跨平台支持决定市场份额**  
   Windows/Linux 的兼容性抱怨集中在 shell 差异、路径处理和桌面端崩溃。任何计划扩展企业用户的工具，都必须系统性解决 Windows 和主流 Linux 发行版的适配。

6. **成本可见性是商业信任的基石**  
   配额虚高、幽灵消耗、订阅状态不同步等故障频繁出现。用户已开始将“用量统计准确”视为付费底线，而非附加功能。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告（数据截至 2026-08-07）

以下分析基于 anthropics/skills 仓库的 PR 与 Issues 数据。所有提及 PR 均为 Open 状态。

## 1. 热门 Skills 排行

按仓库当前排序（该列表本身按评论数排序），关注度最高的 Skills/PR 如下：

### 1. skill-creator：run_eval.py 评估器修复
- **PR**: [#1298](https://github.com/anthropics/skills/pull/1298)
- **功能**: 修复 run_eval.py 始终报告 `recall=0%` 的核心问题，同时覆盖 Windows 流读取、触发检测和并行 worker 等缺陷。
- **社区热点**: 对应 issue [#556](https://github.com/anthropics/skills/issues/556)、[#1169](https://github.com/anthropics/skills/issues/1169) 的 10+ 独立复现。社区普遍认为当前的 skill 描述优化循环“正在对噪声进行优化”。
- **状态**: Open

### 2. document-typography：生成文档排版质量控制
- **PR**: [#514](https://github.com/anthropics/skills/pull/514)
- **功能**: 解决 AI 生成文档中的孤字、寡行、段落标题页尾悬置、编号对齐等问题。
- **社区热点**: 覆盖所有 Claude 生成文档的通用痛点，讨论集中在“这不是个别格式偏好，而是系统性问题”。
- **状态**: Open

### 3. self-audit：交付前推理质量门禁
- **PR**: [#1367](https://github.com/anthropics/skills/pull/1367)
- **功能**: 先做机械式文件完整性校验，再按损害严重度执行四维推理审计。通用性强，支持任意项目与模型。
- **社区热点**: 与 [#1385](https://github.com/anthropics/skills/issues/1385) 的质量门禁流水线提案形成呼应，社区对“可验证的交付质量”需求强烈。
- **状态**: Open（v1.3.0）

### 4. plan-file-hygiene：规划文件生命周期管理
- **PR**: [#1479](https://github.com/anthropics/skills/pull/1479)
- **功能**: 治理 planning artifacts 不断累积、无生命周期的问题。
- **社区热点**: 源于 issue [#1417](https://github.com/anthropics/skills/issues/1417)；社区将其定义为“生命周期缺口”，而非简单的文档整理。
- **状态**: Open

### 5. color-expert：色彩专业知识库
- **PR**: [#1302](https://github.com/anthropics/skills/pull/1302)
- **功能**: 覆盖 ISCC-NBS、Munsell、OKLCH、CAM16 等色彩体系与色彩空间选择策略。
- **社区热点**: 自包含性强，适合任何需要色彩知识的生成场景。
- **状态**: Open

### 6. testing-patterns：全栈测试模式
- **PR**: [#723](https://github.com/anthropics/skills/pull/723)
- **功能**: 涵盖测试哲学、单元测试、React 组件测试等完整测试栈。
- **社区热点**: 讨论聚焦于“什么该测、什么不该测”的决策框架，而非单纯测试代码生成。
- **状态**: Open

### 7. ODT：OpenDocument 文件处理
- **PR**: [#486](https://github.com/anthropics/skills/pull/486)
- **功能**: 创建、填写、读取 ODT/ODS/ODF，并支持 ODT 转 HTML。
- **社区热点**: 承接由 PDF/DOCX 技能带起的办公文档生态补全需求。
- **状态**: Open

### 8. pyxel：复古游戏开发
- **PR**: [#525](https://github.com/anthropics/skills/pull/525)
- **功能**: 面向 Pyxel 复古像素风游戏引擎的 MCP 工作流 skill。
- **社区热点**: 最近更新至 2026-07-15，社区关注“写代码 → 运行截图 → 迭代”的开发闭环。
- **状态**: Open

---

## 2. 社区需求趋势

从 Issues 评论热度看，社区最集中的四类需求：

### 安全与信任边界
- [#492](https://github.com/anthropics/skills/issues/492)（43 评论）指出社区 skill 被分发在 `anthropic/` 命名空间下，形成“信任边界滥用”。用户可能误以为是官方 skill 而授予过高权限。
- [#1487](https://github.com/anthropics/skills/issues/1487) 则聚焦 `claude-api` skill 单次注入约 156k tokens，直接耗尽上下文窗口。
- 趋势：**安全不是附加功能，而是分发机制必须解决的问题。**

### 企业级共享与管理
- [#228](https://github.com/anthropics/skills/issues/228)（16 评论）要求 org-wide skill 共享，替代手动下载、Slack/Teams 传文件、再上传的流程。
- [#189](https://github.com/anthropics/skills/issues/189）指出 `document-skills` 与 `example-skills` 安装后包含相同内容，造成重复 skill 与上下文浪费。
- 趋势：**Skills 需要可分发、可共享、可去重的工程化机制。**

### 工具链可靠性
- [#556](https://github.com/anthropics/skills/issues/556)、[#1169](https://github.com/anthropics/skills/issues/1169) 反复暴露 `run_eval.py` / `run_loop.py` 在描述评估与优化时 `recall=0%`。
- [#202](https://github.com/anthropics/skills/issues/202) 则批评 skill-creator 自身不符合最佳实践，教育腔过重、token 效率低。
- 趋势：**社区急需一个可信的 skill 自动评估与优化闭环。**

### 新 Skill 方向
- [#1329](https://github.com/anthropics/skills/issues/1329)：compact-memory —— 用符号化表示压缩长期 agent 状态。
- [#412](https://github.com/anthropics/skills/issues/412)：agent-governance —— 策略执行、威胁检测、信任评分、审计追踪。
- [#1385](https://github.com/anthropics/skills/issues/1385)：质量门禁流水线 —— 前置校准 → 对抗审查 → 交付验证。
- 趋势：**从“单点任务 skill”走向“Agent 生命周期治理”类 skill。**

---

## 3. 高潜力待合并 Skills

以下 PR 尚未合并，但讨论集中、问题明确，近期落地可能性较高：

### 修复类（与 #556 问题强相关）
- [#1298](https://github.com/anthropics/skills/pull/1298)：修复 run_eval.py 0% recall，被多人独立复现。
- [#1323](https://github.com/anthropics/skills/pull/1323)：修复触发检测无法识别 skill 名称的问题。
- [#1261](https://github.com/anthropics/skills/pull/1261)：隔离触发评估文件，避免污染用户真实项目 `.claude/commands/`。
- [#1099](https://github.com/anthropics/skills/pull/1099) / [#1050](https://github.com/anthropics/skills/pull/1050)：Windows 子进程与编码兼容修复。
- [#538](https://github.com/anthropics/skills/pull/538) / [#541](https://github.com/anthropics/skills/pull/541) / [#539](https://github.com/anthropics/skills/pull/539)：PDF/DOCX/skill-creator 的细粒度 bug 修复。

### 新 Skill 类
- [#1367](https://github.com/anthropics/skills/pull/1367)：self-audit，已在 issue [#1385](https://github.com/anthropics/skills/issues/1385) 中被引用为质量门禁的一部分。
- [#514](https://github.com/anthropics/skills/pull/514)：document-typography，普适性强，易于验证效果。
- [#1479](https://github.com/anthropics/skills/pull/1479)：plan-file-hygiene，直接回应已有 issue，社区已给出明确框架。
- [#723](https://github.com/anthropics/skills/pull/723)：testing-patterns，覆盖主流测试需求，容易产生直接价值。

---

## 4. Skills 生态洞察

**社区最集中的诉求是：让 Skills 从“定义文件”进化为“可安全分发、可评估、可维护”的工程化能力；其中 skill-creator 的自动化质量闭环是最紧迫的工具链缺口。**

---

# Claude Code 社区动态日报（2026-08-07）

## 1. 今日速览

过去 24 小时无新版本发布。社区讨论热度集中在三块：WSL2 下 `ugrep` 导致内存放大和宿主冻结、权限系统中 `ask list` 失效问题，以及终端复制结果被 2 空格缩进污染的长期痛点。此外，今天新出现一个值得关注的多代理并发 bug：`EnterWorktree` / isolation 状态在子代理之间是全局共享且“后写覆盖”的，可能导致并发子代理相互串改工作目录。

## 3. 社区热点 Issues（10 个）

1. **[BUG] 2-space indent and hard wrap at 80 breaks copy-paste**  
   https://github.com/anthropics/claude-code/issues/13378  
   当前社区最高赞 issue（👍72，16 评论）。TUI 渲染带来的 2 空格缩进和 80 列硬换行严重破坏复制粘贴体验，尤其影响代码块和文档输出。

2. **[BUG] Copied text includes 2-space leading indentation from rendered output**  
   https://github.com/anthropics/claude-code/issues/37796  
   与 #13378 同根问题，但更聚焦复制行为本身（👍49，13 评论）。用户每次粘贴都需要手工清理缩进，属于高频日常痛点。

3. **[enhancement] Claude Desktop (Windows): disable the bundled Cowork background service**  
   https://github.com/anthropics/claude-code/issues/57371  
   用户希望为不适用 Cowork 的 Windows 用户提供关闭 `CoworkVMService` 的选项（👍42，18 评论）。涉及后台资源占用和隐私控制，社区诉求强烈。

4. **[BUG] ask list is ignored when "Bash" is in allow list**  
   https://github.com/anthropics/claude-code/issues/6527  
   权限配置失效问题：只要 Bash 在 allow list 中，`ask` 列表就不再生效。这直接影响权限模型的可信度，评论数达 23 条。

5. **[BUG] v2.1.117 embedded ugrep wrapper amplifies regex backtracking into V8-heap-OOM**  
   https://github.com/anthropics/claude-code/issues/54394  
   WSL2 下 `grep` 被包装到 `ugrep` 后，正则回溯可以把一次 `grep` OOM 放大成 V8 堆 OOM，最终造成宿主冻结。24 条评论，属于内存安全级别的高影响 bug。

6. **[BUG] Claude Code current session limit reaches 100% despite low visible local session usage**  
   https://github.com/anthropics/claude-code/issues/54750  
   本地可见用量很低，但会话额度显示 100% 并阻止继续使用。对“按量计费”工作流影响大，评论 16 条。

7. **[BUG] Cloud/Cowork sessions: git proxy now blocks all pushes**  
   https://github.com/anthropics/claude-code/issues/76248  
   Git 代理阻止向“未授权仓库集合”推送，连用户自带 PAT 也被拦。影响远程协作和 Cloud/Cowork 工作流，评论 14 条。

8. **[Regression] Desktop app: session time-range filter only appears when Group by is set to State**  
   https://github.com/anthropics/claude-code/issues/78775  
   桌面端回归问题：时间范围筛选器只有在分组方式为 State 时才显示（👍23）。影响会话管理效率。

9. **[Feature Request] System notifications when Claude needs attention or completes tasks**  
   https://github.com/anthropics/claude-code/issues/26581  
   社区长期想要的通知能力：任务完成或需要人工介入时发送系统通知（👍32）。这类需求与多任务并行开发场景强相关。

10. **[BUG] Multi-agent: EnterWorktree/isolation state is session-global — concurrent subagents hijack each other**  
    https://github.com/anthropics/claude-code/issues/84685  
    今日新提交的严重并发 bug：worktree 隔离状态不是 per-subagent，而是全局的 last-writer-wins。并发子代理可能互相改变 cwd 和隔离身份，易引发安全问题。

## 4. 重要 PR 进展

过去 24 小时内仅 3 个 PR 更新，均与插件开发工具链相关，没有核心运行时的大功能合入。

1. **Enable frontend-design plugin at project scope**  
   https://github.com/anthropics/claude-code/pull/84600  
   在仓库中注册官方 marketplace，并通过 `.claude/settings.json` 启用 `frontend-design` skill，让所有打开该仓库的 Claude Code 用户自动加载前端设计技能。

2. **fix(plugin-dev): prevent validate-agent.sh exiting on first warning**  
   https://github.com/anthropics/claude-code/pull/84427  
   修复 `validate-agent.sh` 在 `set -e` 下遇到第一个 warning 就退出的问题。原因为 `((warning_count++))` 这类 Bash 算术表达式在计数为 0 时返回非零退出码。

3. **fix(plugin-dev): handle wrapped hook schemas and optional matchers in validate-hook-schema.sh**  
   https://github.com/anthropics/claude-code/pull/84381  
   增强 `validate-hook-schema.sh`：支持顶层的 `"hooks"` 包装对象，以及可选 matcher 字段，使 hooks.json 校验更加准确。

## 5. 功能需求趋势

从近期 Issues 中可以提炼出以下社区关注方向：

- **权限系统精细化**：用户希望 `ask` / `allow` 列表语义更可靠，复合命令不要重复弹窗，并希望 hooks 提供 `handled` 决策来区分“成功处理”和“阻止”。
- **终端体验修复**：复制粘贴缩进、TUI 渲染换行、鼠标禁用后无法选择文本、终端 tab 标题显示代理状态等，是高频需求。
- **远程协作与多代理隔离**：Cowork/Cloud 会话中的 git 代理授权、保留路径冲突、Web Remote Control 渲染、并发子代理隔离状态，正成为后续迭代重点。
- **资源占用与稳定性**：WSL2 内存冻结、流式 API ECONNRESET、SSE 断线重试、Windows MSIX 自毁等问题，集中反映底层网络和打包器稳定性需要加强。
- **用量与计费透明度**：会话额度虚高、Fable 用量“幽灵消耗”、升级计费失败等，说明用户对成本可见性越来越敏感。
- **安全与合规**：CVP 已通过组织仍被 cyber safeguard 拦截、bug bounty 研究者被误判、PAT 透传失效等，是安全侧的热点反馈。

## 6. 开发者关注点

- **复制粘贴问题是最强共识痛点**：#13378 和 #37796 合计获得 120+ 👍，说明“终端输出无法直接复用”已经严重影响日常开发效率。
- **权限系统在真实工作流中“要么太松要么太吵”**：`ask list` 失效是安全漏洞；而复合命令每次都要确认则让批量/fan-out 工作流产生数百次人工确认。
- **网络连接稳定性被反复提及**：多个 issue 指向流式 API 在 Windows 和部分网络环境下频繁断连，且状态难以恢复。
- **成本/配额显示可信度不足**：有用户“不到 24 小时”消耗 17% 周配额，且找不到任何 Fable 调用路径；也有人本地用量很低却被判定 100% 满额。
- **多代理并发安全值得警惕**：#84685 显示 worktree 隔离状态是全局共享的，可能造成并发子代理互相“劫持”运行环境，需要 Anthropic 尽快确认是否是设计缺陷。

整体来看，社区对 Claude Code 的功能广度认可度较高，但开始集中要求：**更可靠的权限模型、更干净的终端输出、更透明的用量统计，以及更稳健的并发与网络底层。**

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报 — 2026-08-07

## 今日速览

Codex 发布 `rust-v0.147.0`，引入便携式 Agent 插件安装与跨目录搜索、以及会话手动排序与长会话增量浏览能力。社区侧最受关注的是 Linux 桌面应用支持（933 👍，203 评论）持续高热度，同时 Windows 平台的进程/Taskkill 风暴与内存泄漏类 Bug 报告激增。PR 方面，官方已提交 Markdown 对话导出、MCP 服务器 OAuth 恢复、子代理 MCP 状态修复等多项改进，部分直接回应了社区长期诉求。

## 版本发布

**rust-v0.147.0**
- 新特性：支持安装便携式 Agent 插件，并可在本地、个人、工作区及远程插件目录中搜索插件（#36544, #36409, #36919, #36796）。
- 新特性：支持将对话组织为持久化、手动排序的分区，并可增量浏览长记录（#35722, #36007, #36380, #36948）。

## 社区热点 Issues

1. [**Codex 桌面应用 Linux 支持**](https://github.com/openai/codex/issues/11023)（👍 933，评论 203，开放中）  
   超高人气的 Linux 版本请求；用户因 macOS 上耗电问题而无法稳定使用桌面应用，希望在 Linux 桌面使用。

2. [**Windows 桌面版 ChatGPT.exe 产生数百个 taskkill/conhost 进程**](https://github.com/openai/codex/issues/33776)（👍 27，评论 32，开放中）  
   严重性能 Bug：288+ 残留进程导致 WMI 风暴和 DWM 降级，Windows 用户受影响明显，热度持续上升。

3. [**TUI 复制/导出消息为 Markdown**](https://github.com/openai/codex/issues/2880)（👍 78，评论 28，已关闭）  
   社区长期功能请求，方便将对话内容用于外部文档或 GitHub Issue。今日已有对应 PR（#37358）合入，属重大进展。

4. [**桌面端线程工具间歇性丢失 handler（No handler registered）**](https://github.com/openai/codex/issues/28080)（👍 2，评论 23，开放中）  
   Windows 桌面上活动会话内工具调用随机失败，影响多步骤 Agent 任务的稳定性。

5. [**Codex Desktop 应使用项目级作用域的 MCP 进程池**](https://github.com/openai/codex/issues/20883)（👍 4，评论 17，开放中）  
   当前每个会话/聊天单独启动 stdio MCP 服务器，造成资源浪费；社区建议按项目/工作区共享 MCP 进程。

6. [**支持在 config.toml 中配置出站 HTTP 代理**](https://github.com/openai/codex/issues/6060)（👍 68，评论 15，开放中）  
   企业/学术环境强需求：通过 Zscaler 等代理访问外网的用户无法正常使用 Codex，期待原生 `http_proxy` 支持。

7. [**CLI 无法获取 Chrome 扩展后端，而应用 UI 正常**](https://github.com/openai/codex/issues/26820)（👍 9，评论 12，开放中）  
   同一环境下 Chrome 扩展在桌面应用可用，但终端版 CLI 无法连接，疑似原生主机/配置问题，影响插件开发流。

8. [**TUI 支持多行状态栏**](https://github.com/openai/codex/issues/21653)（👍 58，评论 12，开放中）  
   statusline 配置过长时被截断，社区期待换行支持，属于高频 UI 细节需求。

9. [**Windows: 允许配置默认会话 shell**](https://github.com/openai/codex/issues/16579)（👍 32，评论 4，开放中）  
   目前默认 PowerShell；Git Bash 等用户希望能在 `config.toml` 中指定默认 shell，减少每次手动切换成本。

10. [**Codex 子代理一夜耗尽整周配额——使用量计算异常**](https://github.com/openai/codex/issues/35463)（评论 4，开放中）  
   子代理在夜间空转消耗大量额度，疑似用量统计/限制逻辑 Bug，对 Pro 订阅用户影响严重。

## 重要 PR 进展

1. [**为 TUI 添加 Markdown 对话导出**](https://github.com/openai/codex/pull/37358)  
   新增 `/export` 命令支持剪贴板/文件导出，完整保留对话历史为结构化 Markdown。直接回应 #2880 等社区诉求。

2. [**将短 wait_agent 超时限制到配置最小值**](https://github.com/openai/codex/pull/37357)  
   低于 `min_wait_timeout_ms` 的超时不再被拒绝，而是自动钳制并在结果中提示；更新了工具输出 schema。

3. [**支持代理身份端点覆盖**](https://github.com/openai/codex/pull/37356)  
   新增 `CODEX_AGENT_IDENTITY_AUTHAPI_BASE_URL` / `JWKS_BASE_URL` 环境变量，便于自托管/私有化部署。

4. [**全文件系统 Bubblewrap 沙箱中挂载最小 /dev**](https://github.com/openai/codex/pull/37349)  
   修复绑定宿主机设备树的安全风险，改用 Bubblewrap 最小设备文件系统；对开启全文件系统沙箱的用户是重要加固。

5. [**向 Codex 后端发送模型路由提示**](https://github.com/openai/codex/pull/37345)  
   新增 `x-codex-routing-hint` 头，在 HTTP 请求、远程压缩、WebSocket（含预热连接）中携带模型/服务层信息，提升路由质量。

6. [**修复子代理 MCP 启动状态卡住**](https://github.com/openai/codex/pull/37344)  
   清除活跃子代理的 MCP 启动预期，避免 TUI 中 MCP 一直显示“启动中”。

7. [**OAuth 重新认证后恢复 MCP 服务器**](https://github.com/openai/codex/pull/37337)  
   OAuth 凭据刷新后，失败的 Streamable HTTP MCP 服务器无需重启客户端即可自动恢复。

8. [**配置 code-mode exec 默认让超时时间**](https://github.com/openai/codex/pull/37352)  
   新增 `features.code_mode.default_exec_yield_time_ms`（默认 30s），并在工具描述中可见；移除旧缓冲区配置。

9. [**允许 ThreadManager 自定义线程 ID 生成**](https://github.com/openai/codex/pull/37350)  
   新增 `with_thread_id_generator` 支持根/子/分支线程自定义 ID 分配策略，默认保持 UUIDv7。

10. [**添加滚动迁移工具与后台迁移**](https://github.com/openai/codex/pull/37348)  
   新增 `codex migrate-rollouts`（默认 dry-run，`--apply` 显式应用），支持按线程过滤、I/O 节流、JSON/详细报告。

## 功能需求趋势

- **Linux 桌面应用成为第一呼声**：`#11023` 以 933 👍 远超其他议题，且评论数高达 203 条，是社区最关注的方向。
- **MCP 基础设施完善**：多个 Issue/PR 围绕 MCP 进程生命周期——进程池复用（#20883）、工具顺序确定性（#37351）、OAuth 恢复（#37337）、子代理状态修复（#37344）——说明 MCP 已进入生产环境深度打磨阶段。
- **TUI 体验优化集中爆发**：多行状态栏（#21653）、复制粘贴改进（#24685）、Markdown 导出（#2880 → PR #37358）、输入框占位符统一（PR #37360），反映 CLI 用户在“日常使用舒适度”上的高频诉求。
- **企业/代理网络支持**：`http_proxy` 配置（#6060）和企业级出网需求持续被提及，是商业化落地的重要阻塞项。
- **Windows 平台稳定性告急**：taskkill 风暴（#33776）、MCP 内存膨胀（#33531）、UAC 弹窗（#31556）、会话 shell 配置（#16579）等多个严重 Bug，Windows 用户群体增长明显但体验未跟上。

## 开发者关注点

- **进程与资源泄漏**：Windows 上 `taskkill.exe`/`conhost.exe` 残留（#33776）、macOS 僵尸进程（#37247）、子代理 MCP 内存膨胀至 10.9GB（#33531）是当前最严重的稳定性问题，直接影响长时使用。
- **认证与配额异常**：OAuth 切换网络后静默 fallback 到硬编码 dummy key 导致 401（#37192）、子代理夜间耗尽周配额（#35463）、周配额重置后仍被错误限流（#37250）——认证/配额链路需要更透明的反馈和重试机制。
- **沙箱与权限 UX**：“Allow once” 权限对话框不响应（#36115）、Windows 沙箱触发频繁 UAC（#31556），在交互频率高的桌面端尤其刺眼。
- **CLI 复制粘贴仍是老大难**：多行代码复制体验差（#24685），属于高频痛点且长期未解决，社区情绪可见于标题中的“PLEASE”。
- **测试与稳定性改进信号积极**：多个内部 PR 专注于测试二进制 staging（#37343, #37354）和后台迁移工具（#37348），说明团队正在主动加固发布管道。

> 日报数据来源：[github.com/openai/codex](https://github.com/openai/codex) | 生成时间：2026-08-07

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报 — 2026-08-07

## 今日速览
今日发布 v0.55.0-preview.2 补丁版及最新 nightly 构建，主要修复了 preview.1 的回归问题。社区方面，数据/会话丢失类问题（#26856、#27180）讨论热度最高，Windows 平台兼容性 Bug 持续成为焦点。PR 侧则有多项“含金量”较高的修复：容量耗尽不再无限重试、认证死循环修复、中止流时 usage 丢失等。

## 版本发布
**v0.55.0-preview.2** — 针对 v0.55.0-preview.1 的 hotfix 版本（cherry-pick 2139b12），属于紧急补丁性质。完整变更见：https://github.com/google-gemini/gemini-cli/pull/28719

**v0.56.0-nightly.20260807.gd5c9a97dc** — 常规 nightly 构建，主要包含 chagelog 同步和版本号更新，无重大功能变更。

## 社区热点 Issues
挑选过去 24 小时更新最活跃、对开发者影响最大的 10 个 Issue：

**1. 用户数据被大量删除，要求退款** [#26856](https://github.com/google-gemini/gemini-cli/issues/26856)
`P1 / kind/bug / 47 评论`
用户反馈 Gemini CLI 在操作 Obsidian 库时删除了上万文件且无法恢复，造成约 300 美元工作损失。情绪激烈，评论区已有 47 条讨论。这是当前社区最受关注的数据安全事件，说明 CLI 在破坏性文件操作上仍缺护栏。

**2. Windows PowerShell 5.1 下 `&&` 报 ParserError** [#20773](https://github.com/google-gemini/gemini-cli/issues/20773)
`P1 / kind/bug / 已关闭 / 17 评论`
CLI 在 PowerShell 5.1 中执行 `git status && git branch` 触发解析错误，因为 `&&` 在旧版 PowerShell 中不受支持。今日被 bot 标记为 stale 并关闭，但该问题反映了 Windows 默认 shell 兼容性仍然粗糙。

**3. Subagent MAX_TURNS 被误报为 GOAL 成功** [#22323](https://github.com/google-gemini/gemini-cli/issues/22323)
`P1 / kind/bug / 12 评论`
`codebase_investigator` 子代理明明因打满 MAX_TURNS 中断，却在结果里自我报告 `status: "success"` 和 `Termination Reason: "GOAL"`，从根上掩盖了真实的中断原因。对依赖子代理结果做决策的上层 Agent 是致命误导。

**4. MCP Feature Request: 支持 Client Sampling** [#10704](https://github.com/google-gemini/gemini-cli/issues/10704)
`P2 / kind/enhancement / 已关闭 / 13 评论`
请求按 MCP 规范实现 Client Sampling，让 MCP Server 能回调 Gemini CLI 调用大模型。虽已关闭（可能已入 roadmap），但获得了 9 个 👍，是 MCP 生态重度用户持续关注的能力。

**5. VS Code 扩展 UI 卡死，globalState 阻塞主线程** [#27132](https://github.com/google-gemini/gemini-cli/issues/27132)
`P2 / kind/bug / 7 评论`
长时间会话或重载窗口后，VS Code 扩展会锁 UI，Windows 报“无响应”。根因指向 `globalState` 存储同步阻塞主线程。IDE 集成性能问题直接被归因为存储层设计，扩展用户受影响明显。

**6. 高内存使用** [#28698](https://github.com/google-gemini/gemini-cli/issues/28698)
`P2 / kind=buf / 5 评论`
v0.53.1 用户反馈在工具执行间隙循环空转，内存占用持续攀升。官方已要求附 chat history JSON 做进一步定位。此类问题通常是流式 Token 缓冲或工具结果未释放导致，建议遭遇内存泄漏的开发者去 issue 补充信息。

**7. 系统意外关机后会话丢失** [#27180](https://github.com/google-gemini/gemini-cli/issues/27180)
`P2 / kind=buf / 5 评论`
意外关机后 `gemini --resume` 回不到最新会话，用户翻遍 `.gemini/tmp` 也找不到记录文件。会话持久化仍存在窗口期数据丢失，对日常高频使用 CLI 的开发者影响很大。

**8. Linux 上 execvp Permission denied** [#25933](https://github.com/google-gemini/gemini-cli/issues/25933)
`P2 / kind=buf / 7 评论`
RHEL8/9 下所有外部命令执行报 `execvp(3) failed.: Permission denied`，用户排查了 NFS home 目录和本地安装均无效。由于 RHEL 是大量企业开发环境，该问题若未修复会影响 Linux 采用率。

**9. PowerShell 命令替换阻塞 /setup-github** [#26318](https://github.com/google-gemini/gemini-cli/issues/26318)
`P2 / kind=buf / 5 评论`
`detectCommandSubstitution` 的安全检测在 PowerShell 上误伤 `/setup-github` —— 生成的 shell 命令因带未加引号的 `(...)` 子 shell 被拦截，同时还指出转义不完整有命令注入风险。安全和可用性在 PowerShell 上的冲突很典型。

**10. Backspace 在 Windows 上删词而非删字符** [#25867](https://github.com/google-gemini/gemini-cli/issues/25867)
`P2 / kind=buf / 10 评论`
Windows 终端下 Backspace 行为异常，按一下删一个单词。虽然今天被标 stale 关闭，但该问题配合 #20773 共同构成了 Windows 终端交互层的“体验洼地”。

## 重要 PR 进展

**1. 容量耗尽（Capacity Exhaustion）重新归类为终止性错误** [#28716](https://github.com/google-gemini/gemini-cli/pull/28716)
`size/m / 已合并`
将 capacity exhaustion 和余额不足从“可重试”改为“终止性错误”，触发后立即走 fallback 模型。避免了长时间无效重试浪费用户时间，值得关注的模型调度行为修正。

**2. 修复无限认证循环** [#28519](https://github.com/google-gemini/gemini-cli/pull/28519)
`P1 / size=s / 已合并`
修复 #28430 —— `oauth_creds.json` 写入未 await 就继续流程，导致认证状态不一致、反复弹登录。属于基础设施级修复，所有 IDE 集成用户都能感受到。

**3. 设置占位符解析前先加载环境变量** [#28597](https://github.com/google-gemini/gemini-cli/pull/28597)
`size=l / 待合并`
修复 settings 加载时序问题：本地 `.env` 尚未加载时就开始展开 `process.env` 占位符，导致配置被错误解析。大型 monorepo 环境相当关键。

**4. Docker 基础镜像升级到 node:24-slim** [#28602](https://github.com/google-gemini/gemini-cli/pull/28602)
`size=s / 待合并`
将 Docker 构建镜像从 node:20-slim 升级至 node:24-slim，并修复 runtime 阶段未从 builder 拷贝 CLI 包的问题。node:20 已于 2026-04-30 EOL，安全必需。

**5. 沙箱 Dockerfile 升级至 Node 22** [#28603](https://github.com/google-gemini/gemini-cli/pull/28603)
`P1 / size=xs / 待合并`
与 #28602 同源，将沙箱运行环境从 node:20-slim 升级至 Node 22。由于沙箱执行的是模型指令，EOL 运行时是真实安全缺口。

**6. 新增 `--list-all-sessions` 跨工作区列会话** [#28596](https://github.com/google-gemini/gemini-cli/pull/28596)
`P3 / size=l / 待合并`
用户在多目录频繁创建 session 后难以找回，该 PR 可按 workspace 分组列出全部会话。纯社区驱动的新功能，明显补上了“会话管理”的短板。

**7. 自动模型在无 Preview 权限时保持可选** [#28592](https://github.com/google-gemini/gemini-cli/pull/28592)
`P2 / size=s / 待合并`
`/model` 菜单里 Auto 选项会因动态模型配置的 preview 元数据被隐藏，但 Auto 实际可 fallback 到稳定模型——保留它才能让无 preview 权限的用户正常使用。

**8. 流被中止时记录已收到的 usage** [#28718](https://github.com/google-gemini/gemini-cli/pull/28718)
`area/agent / size=m / 待合并`
`generateContentStream` 只在成功路径 flush usageMetadata，中断/异常时已消耗的 token 数没有记录，导致用量统计偏低、成本核算失真。查账单发现对不上的开发者会需要这个修复。

**9. 修复窄终端下幽灵文本无限循环** [#28641](https://github.com/google-gemini/gemini-cli/pull/28641)
`P2 / size=s / 待合并`
当输入框宽度窄于单个宽字符（CJK/emoji）时，`getGhostTextLines` 永远无法推进 splitIndex，直接卡死。修复后强制前进并补了回归测试。中文/日文用户可能遇到过的极端卡死问题。

**10. 修复 `formatTruncatedToolOutput` 对 maxChars<=0 的处理** [#28639](https://github.com/google-gemini/gemini-cli/pull/28639)
`P1 / size=s / 待合并`
`maxChars <= 0` 时会触发 `String.prototype.slice` 的负索引倒采，导致截断输出反而膨胀 2 倍。直接影响工具输出过长时的降级路径，P1 优先级合理。

## 功能需求趋势

从今日 Issue/PR 中提炼出以下社区关注方向：

- **会话持久化与恢复仍是最大痛点**：意外关机丢会话（#27180）、resume 找不到历史、`--list-all-sessions` 的需求（PR #28596）都指向会话管理能力不足。
- **Windows 平台兼容性亟待系统性改进**：PowerShell 5.1 的 ParserError（#20773）、命令替换误拦截（#26318）、Backspace 行为异常（#25867）三连发，说明 CLI 的 shell 交互层没有针对不同 shell 做差异化适配。
- **可靠性护栏呼声渐高**：数据大规模删除（#26856）和破坏性命令保护（#22672）表明用户要求 CLI 在 destructive 操作上加更强制确认或 sandbox。
- **MCP 生态扩展需求持续**：Client Sampling（#10704）虽关闭但讨论热度高，说明社区希望 Gemini CLI 不只是 MCP 客户端，也能成为 MCP Server 的 LLM 后端。
- **资源占用和性能回归被密切关注**：高内存泄漏（#28698）、长会话后 UI 卡死（#27132）这些 performance issue 在近期出现频率上升，cluster 和大型项目用户尤其敏感。

## 开发者关注点

- **数据安全是底线问题**：#26856 的极端案例虽然是个例，但评论区大量用户表示“后怕”——开发者希望在文件删除/大量覆盖前有更严格的默认确认策略。
- **错误信息不可信比错误本身更可怕**：#22323 中 subagent 把 MAX_TURNS 中断报成 GOAL 成功，这种“假成功”会让上层 Agent 做出错误决策，开发者对日志可信度的信任被动摇。
- **认证和凭据保存不可靠**：无限认证循环（PR #28519）、NFS 下 execvp 权限异常（#25933），说明 Ceritificate 和 Permissions 链路在灰度/企业环境仍有不少雷。
- **Token/成本透明化诉求**：流中断时 usage 不计入（PR #28718）、上下文溢出后无引导（PR #19638），开发者希望 CLI 能更透明地展示花了多少钱、为什么上下文不够用。
- **Terminal 交互细节影响日常效率**：Backspace 删词、幽灵文本卡死、命令串里混入换行/空格——这些“小问题”高频出现且直接消耗开发者的耐心。

---
*数据来源：[google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli) Issues/PRs（更新于 2026-08-07）*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报 — 2026-08-07

## 今日速览

昨日发布补丁版本 v1.0.79-6，修复了会话历史加载失败导致时间线永久空白的问题。社区焦点集中在权限模式切换失效（#4388/#4389）、大型会话恢复 OOM 回归（#4251）以及 MCP 生态的多个稳定性问题上。过去 24 小时无新的 PR 合并或更新。

---

## 版本发布

### v1.0.79-6（最新）
> 链接：https://github.com/github/copilot-cli/releases

- 修复：罕见的内部延迟不再在交互式 UI 上打印诊断警告。
- 修复：会话历史加载失败时，不再静默丢弃错误导致整个会话时间线保持空白；现在会正确记录失败日志并恢复可用状态。

---

## 社区热点 Issues（10 个）

### 1. `/app` 命令不默认选择当前工作目录
- **编号**：[#4118](https://github.com/github/copilot-cli/issues/4118)（CLOSED）
- **热度**：👍 35，为本周最高赞 Issue
- **说明**：用户在使用 `/app` 打开 GitHub Copilot 桌面应用时，无法自动选中当前工作目录，需手动选择，影响日常使用效率。虽已关闭，但社区需求呼声很高。

### 2. Bash 工具在 NixOS 上从 v1.0.49 起无法启动
- **编号**：[#3392](https://github.com/github/copilot-cli/issues/3392)（OPEN）
- **热度**：👍 7，评论 3
- **说明**：NixOS 环境下 agent 执行命令时统一报错 `Failed to start bash process`。该问题已持续数月，影响所有使用 NixOS 的开发者，修复优先级应提升。

### 3. 权限切换回交互模式后仍保持 auto 模式
- **编号**：[#4388](https://github.com/github/copilot-cli/issues/4388)（OPEN）
- **热度**：新提交，评论 0
- **说明**：用户从 auto 权限切回 interactive 后，agent 仍继续执行代码修改而不再请求权限，且多种模型上均可复现。其影响是用户会失去对敏感操作的控制，属于安全性回归，同内容的重复报告为 #4389。

### 4. 恢复大型会话导致 OOM / 单核满载约 70 分钟
- **编号**：[#4251](https://github.com/github/copilot-cli/issues/4251)（OPEN）
- **热度**：评论 2，👍 1
- **说明**：v1.0.74 版本引入回归，恢复同一会话时内存峰值较 v1.0.73 增加约 3–4 倍，且单核 CPU 被占满近 70 分钟。受影响用户包括长期维护大型会话的日常重度使用者。

### 5. MCP 注册表策略在 GitHub Actions 中返回 403
- **编号**：[#4346](https://github.com/github/copilot-cli/issues/4346)（OPEN）
- **热度**：评论 1，👍 1
- **说明**：使用内置 `GITHUB_TOKEN`（PAT-less 模式）进行认证时，MCP 注册表策略请求返回 403，导致 CI 中所有非默认 MCP 服务器被阻断，直接破坏官方推荐的 Actions 集成方式。

### 6. 支持在对话历史中滚动浏览
- **编号**：[#4313](https://github.com/github/copilot-cli/issues/4313)（OPEN）
- **热度**：评论 4，为当日评论数最高之一
- **说明**：用户希望使用鼠标滚轮或 PageUp/PageDown 在交互界面中滚动当前对话历史，这是终端交互体验的重要改进方向，社区讨论活跃。

### 7. ACP 服务器不暴露 token/上下文使用信息
- **编号**：[#4174](https://github.com/github/copilot-cli/issues/4174)（CLOSED）
- **热度**：评论 3，👍 2
- **说明**：`copilot --acp` 协议中没有任何消息包含 token 使用量、上下文消耗或成本信息，对基于 ACP 构建上层工具的开发者影响较大。该 Issue 已关闭，但关闭原因未在本次数据中公开。

### 8. `/mcp search` 在 Azure DevOps 远程仓库中报 400
- **编号**：[#4374](https://github.com/github/copilot-cli/issues/4374)（OPEN）
- **热度**：👍 4，评论 0
- **说明**：当 git remote 指向 Azure DevOps 时，交互式 MCP 注册表浏览器 `/mcp search` 一律返回 `400 Bad Request`。企业用户（尤其使用 Azure DevOps 的团队）会受此影响，且该问题较新、关注度上升。

### 9. 交互式 transcript 渲染为空白行
- **编号**：[#4311](https://github.com/github/copilot-cli/issues/4311)（OPEN）
- **热度**：评论 2
- **说明**：交互模式下 transcript 底部区域随机变为空白，内容仍存在（滚动可见），但除非提交新消息否则无法重绘。Issue 指向缓存失效机制缺陷（`WCr` / ScrollBox），属于核心渲染链路问题。

### 10. 启动时 MCP 客户端重建导致 stdio 子进程残留
- **编号**：[#4392](https://github.com/github/copilot-cli/issues/4392)（OPEN）
- **热度**：新提交，评论 1
- **说明**：CLI 启动时会先启动所有 MCP 服务器，完成 GitHub 认证后再重建整个 MCP 客户端并重新启动所有服务器，但第一代 stdio 子进程未被 kill 或回收，造成系统资源泄漏。长时间使用会产生大量僵尸进程。

---

## 重要 PR 进展

**过去 24 小时内无 PR 更新。** 目前官方正处于补丁修复阶段，未合并新的功能分支。

---

## 功能需求趋势

从近期 Issues 中可提炼出社区最关注的五个方向：

1. **会话管理体验升级**
   - 需求包括：对话历史滚动（#4313）、修复消息排队卡死（#4373）、解决连续 steering 消息顺序错乱（#4372）、以及大型会话恢复性能（#4251）。
   - 趋势判断：会话功能已成为交互核心，用户正从“能用”转向“好用”，对长时间、大上下文会话的可靠性要求显著提升。

2. **MCP 生态成熟化**
   - 涉及：token/成本信息暴露（#4174）、BigInt 序列化失败（#4211）、注册表认证 403（#4346）、非 GitHub 远程仓库兼容（#4374）、孤儿进程残留（#4392）。
   - 趋势判断：MCP 已从“新功能”进入“平台期”，社区开始要求其具备生产级稳定性、可观测性和企业级认证兼容。

3. **终端兼容性与渲染稳定性**
   - 涉及：tmux 下深色主题不可读（#4212）、Windows 936 代码页复制清屏（#4391）、终端标题被改为 “Windows PowerShell”（#4384）、transcript 空白渲染（#4311）。
   - 趋势判断：多终端、多平台（尤其是 Windows）的渲染兼容性正在成为高频痛点，用户期待跨平台一致的交互体验。

4. **权限控制的精细化与可解释性**
   - 涉及：权限切换失效回归（#4388/#4389）、权限提示需展示触发审批的具体规则（#4386）。
   - 趋势判断：权限系统是 agent 安全的核心，社区不仅要求功能可用，还要求“可解释”，即用户能清楚知道**为什么**某个命令被拦截。

5. **模型选择的灵活性与独立性**
   - 涉及：Rubber Duck 评审应独立于主模型的模型族（#4380）、BYOM 模型发现与切换（#4376）、组织模型目录缺失（#4390）、推理 effort 选择错误（#3053）。
   - 趋势判断：用户对模型层面的控制权要求逐步提高，特别是 BYOM（自带模型）场景下，能够灵活切换而无需重启成为强烈诉求。

---

## 开发者关注点

### 高频痛点 TOP 3

1. **权限模式失效（严重的安全回归隐患）**
   - 从 auto 切回 interactive 后，agent 不请求权限直接改代码（#4388/#4389），这直接削弱了用户对 agent 行为的控制。多个模型复现说明问题出在权限状态机而非单模型逻辑。

2. **大型会话恢复的性能退化**
   - v1.0.74 开始，同一会话恢复耗时/内存暴增数倍（#4251），对长生命周期会话用户是“升级即倒退”的体验，且问题持续已近两周未修复。

3. **MCP 稳定性碎片化**
   - 从 BigInt 到 Azure DevOps 仓库再到 Actions 的 GITHUB_TOKEN 403，MCP 子系统的边界情况偏多，且集中在企业/CI 场景，阻碍了 MCP 在严肃生产环境中的落地。

### 值得注意的细节

- 所有新 Issue 中约 30% 为 Windows 相关（#4384、#4387、#4391），Windows 终端适配仍有明显缺口。
- 后台任务完成检测（#4385）被抱怨为“模型等待永不结束”，开发者表示 shell 进程已退出但 agent 感知不到，直接影响自动化流程可靠性。
- `/mcp search` 的 400 错误在非 GitHub 远程仓库中普遍出现（#4374），提示 MCP 注册表策略获取逻辑对 git remote 来源存在隐式耦合。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报（2026-08-07）

## 今日速览

过去 24 小时，`StrReplaceFile` 工具因非 UTF-8 字节损坏问题（#2591）成为社区焦点，一天内出现两份竞争性修复 PR（#2594、#2595），但修复策略尚未统一。同时，跨会话内存系统需求（#1283）延续高热度，VSCode 插件相关的体验反馈（#2317、#2593）也在持续增多。

## 版本发布

过去 24 小时内无新 Release。

## 社区热点 Issues

（过去 24 小时共 8 条活跃 Issue，全部列出）

### #1283 [Feature] 内存系统：跨会话持久上下文
- 作者：CatKang | 创建：2026-02-27 | 更新：2026-08-06 | 评论：20
- 链接：https://github.com/MoonshotAI/kimi-cli/issues/1283
- 为什么重要：社区呼声最高的长期需求。用户希望实现自动记忆（AI 管理笔记）与手动记忆（用户定义指令），让 CLI 在跨会话中记住项目模式、偏好和上下文。20 条评论说明背后有大量真实场景支撑。
- 社区反应：讨论活跃，尚未有官方排期确认。

### #2591 [Bug] StrReplaceFile 损坏编辑区域外的不可解码字节
- 作者：shoemoney | 创建：2026-08-05 | 更新：2026-08-07 | 评论：3
- 链接：https://github.com/MoonshotAI/kimi-cli/issues/2591
- 为什么重要：数据完整性级别的严重缺陷。`StrReplaceFile` 使用 `errors="replace"` 解码整个文件，导致任何非 UTF-8 字节（即使远离编辑区域）被替换为 `U+FFFD` 并写回磁盘，造成文件永久性损坏。
- 社区反应：问题被快速响应，直接催生了 #2594 和 #2595 两个修复 PR。

### #2474 [Bug] CLI 界面持续抖动、莫名重新渲染整个对话
- 作者：yudichimiantiao | 创建：2026-06-25 | 更新：2026-08-06 | 评论：2 | 👍：2
- 链接：https://github.com/MoonshotAI/kimi-cli/issues/2474
- 为什么重要：终端 UI 稳定性问题，在 Linux + K2.7 Code thinking 模型下复现，界面反复抖动并从头重新渲染，严重破坏开发流。
- 社区反应：获得 2 个 👍，说明不是个例，但维护者尚未回复。

### #2317 [Bug] VSCode 扩展：Plan 模式文件路径在聊天 Webview 中不可点击
- 作者：vlad-at-work | 创建：2026-05-17 | 更新：2026-08-06 | 评论：4 | 👍：1
- 链接：https://github.com/MoonshotAI/kimi-cli/issues/2317
- 为什么重要：VSCode 扩展（0.5.10）Plan 模式中展示的文件路径无法点击跳转，影响"审阅计划→打开文件→修改"的核心工作流效率。
- 社区反应：4 条评论，开发者持续跟进中。

### #2593 [Enhancement] VSCode 插件面板提供快捷切换 auto/yolo/manual 模式
- 作者：xuchengpu | 创建：2026-08-06 | 更新：2026-08-06 | 评论：0
- 链接：https://github.com/MoonshotAI/kimi-cli/issues/2593
- 为什么重要：用户希望把 CLI 的 auto/yolo/manual 模式切换直接放进 VSCode 插件面板，并通过状态栏查看剩余额度（如 5 小时）。这是"IDE 深度集成"需求的典型信号。
- 社区反应：新提交的 issue，暂无回复。

### #2147 [Feature] 延迟加载 MCP 工具 schema，按需注入上下文
- 作者：Evan-Kim2028 | 创建：2026-05-02 | 更新：2026-08-06 | 评论：1 | 👍：1
- 链接：https://github.com/MoonshotAI/kimi-cli/issues/2147
- 为什么重要：配置多个 MCP 服务器时，所有工具 schema 会在会话开始时全部注入 LLM 上下文，消耗数千 tokens。按需懒加载对使用复杂 MCP 配置的用户至关重要。
- 社区反应：获得 1 个 👍，处于需求收集阶段。

### #621 [Bug] 第一个 WriteFile 总是报错 Invalid path，需改用绝对路径
- 作者：footerzch | 创建：2026-01-15 | 更新：2026-08-06 | 评论：2
- 链接：https://github.com/MoonshotAI/kimi-cli/issues/621
- 为什么重要：相对路径处理的历史 bug——第一次 WriteFile 失败，第二次用绝对路径才能成功。8 月 6 日仍被更新，说明对某些工作流仍有影响。
- 社区反应：已关闭，但仍有后续动作。

### #821 [Security] 缺少授权检查且依赖需更新
- 作者：devatsecure | 创建：2026-01-31 | 更新：2026-08-06 | 评论：0
- 链接：https://github.com/MoonshotAI/kimi-cli/issues/821
- 为什么重要：安全审计发现 2 个 Web API 漏洞（IDOR/缺少授权）和 5 个依赖 CVE（CVSS 7.0-8.0），属于高风险问题。虽已关闭，但 8 月 6 日的更新表明社区仍在跟踪。
- 社区反应：无活跃讨论，但安全可见性值得关注。

## 重要 PR 进展

（过去 24 小时共 3 条活跃 PR，全部列出）

### #2594 [修复] StrReplaceFile 编辑中保留非 UTF-8 字节
- 作者：686f6c61 | 创建：2026-08-06 | 更新：2026-08-06
- 链接：https://github.com/MoonshotAI/kimi-cli/pull/2594
- 内容：将 `old`/`new` 作为 UTF-8 字节子串直接作用于原始缓冲区，避免先整体解码再回写。编辑区域外的非 UTF-8 字节不会被动过，从源头解决 #2591。
- 意义：采用"保留数据"的修复哲学，适合希望在非 UTF-8 文件中仍能局部编辑的场景。

### #2595 [修复] 拒绝编辑非有效 UTF-8 文件
- 作者：shoemoney | 创建：2026-08-06 | 更新：2026-08-06
- 链接：https://github.com/MoonshotAI/kimi-cli/pull/2595
- 内容：检测到文件不是有效 UTF-8 时直接拒绝执行编辑，宁可报错也不冒损坏风险。与 #2594 形成差异化的保守策略。
- 意义：更简单直接，但也更严格，可能阻断少数需要在非 UTF-8 文件中进行局部编辑的合法工作流。需维护者权衡产品预期。

### #2255 [功能] Shell 支持 Shift+Enter 插入换行
- 作者：donbeave | 创建：2026-05-13 | 更新：2026-08-06 | 状态：已关闭
- 链接：https://github.com/MoonshotAI/kimi-cli/pull/2255
- 内容：在交互式提示符中增加 `Shift+Enter` 换行快捷键，作为 `Ctrl-J` 和 `Alt-Enter` 的补充。关联 issue：#2254、#2010、#2121、#1585、#1574。
- 意义：`Shift+Enter` 是多数终端用户期望的多行输入习惯，该改动对交互体验有明显正向价值。PR 状态为已关闭，具体原因需查看维护者后续说明。

## 功能需求趋势

1. **跨会话记忆 / 上下文持久化（#1283）**：热度最高的长期需求，社区期待自动记忆 + 手动指令的双轨机制。
2. **VSCode 插件深度集成（#2593、#2317）**：从模式快捷切换到文件路径可点击，用户希望更多能力"搬进" IDE，减少上下文切换。
3. **上下文窗口优化（#2147）**：MCP 工具 schema 的按需加载，反映高级用户对 token 预算的精细化管理需求。
4. **终端交互现代化（#2255）**：Shift+Enter 换行等细节，体现了对现代终端交互习惯的顺应。

## 开发者关注点

1. **文件写入数据安全**：`StrReplaceFile` 的 UTF-8 损坏问题（#2591）是当前最尖锐的痛点；#621 的 Invalid path 老问题也仍有开发者回帖。文件操作类工具的可逆性和健壮性是底层信任基础。
2. **终端渲染稳定性**：#2474 的抖动 / 全量重渲染问题，说明 TUI 在对异常输出和模型流式响应时的容错性仍需加强。
3. **VSCode 扩展的信息可达性与操作效率**：路径不可点击（#2317）、模式切换缺失（#2593），都指向"查看结果→切换模式→继续编辑"闭环的流畅度不足。
4. **安全遗留问题的透明度**：#821 关闭后仍有跟踪，建议在 Release Notes 中显式披露安全修复，避免社区产生"已修复"的误解。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 — 2026-08-07

## 今日速览

OpenCode Go 订阅用户在 24 小时内遭遇大面积 `401 Request blocked by upstream provider` 故障，相关 Issue 累计评论超百条，且波及 Zen 模式，成为社区最紧迫的痛点。功能需求方面，会话上下文面板（[#6152](https://github.com/anomalyco/opencode/issues/6152)）与可点击链接（[#1168](https://github.com/anomalyco/opencode/issues/1168)）两大高赞诉求持续获得关注。PR 侧则涌现子代理会话续跑、TUI 消息队列等多项新特性，开发节奏活跃。

---

## 社区热点 Issues

### 1. OpenCode Go 订阅模型全部返回 401 [Bug]
[#38257](https://github.com/anomalyco/opencode/issues/38257) — 44 评论 · 👍 11

自 7 月 22 日起，OpenCode Go 订阅下所有模型调用 `chat/completions` 均返回 `401 Request blocked by upstream provider`，但 `/v1/models` 正常工作。用户指向服务端问题，涉及面极广，是当前社区最热门的故障帖。

### 2. Go 订阅跨设备复现相同 401 错误 [Bug]
[#38195](https://github.com/anomalyco/opencode/issues/38195) — 24 评论 · 👍 17

用户在 Windows 和 macOS 多台设备、双客户端（Desktop 与 Hermes）上复现同一错误。免费模型正常，付费模型全部失败，基本排除本地配置因素，社区呼声很高，要求官方尽快排查上游网关。

### 3. Zen 模式同样遭遇 "Request blocked" [Bug]
[#39827](https://github.com/anomalyco/opencode/issues/39827) — 9 评论 · 👍 4

不仅是 Go 订阅，Zen 模式下所有模型（含免费）都返回相同 401。用户强调直接使用 DeepSeek、Anthropic 官方 API Key 时一切正常，进一步佐证是 OpenCode 代理层的问题而非用户端。

### 4. 订阅 Go 后套餐状态未生效 [Bug]
[#40234](https://github.com/anomalyco/opencode/issues/40234) — 13 评论

用户反映收到订阅成功邮件但页面仍显示"请订阅"，调用时报错 `No payment method`。该问题与 401 故障共同暴露出订阅计费体系的状态同步缺陷，影响了新用户转化。

### 5. Session 上下文用量面板 [Feature]
[#6152](https://github.com/anomalyco/opencode/issues/6152) — 22 评论 · 👍 129

请求实现类似 Claude `/context` 的 TUI 对话框，展示当前会话上下文窗口的组成与占用明细。129 个 👍 是近期最高赞功能需求之一，说明开发者对上下文可观测性有强烈需求。

### 6. 链接可点击（Ctrl+左键打开） [Feature]
[#1168](https://github.com/anomalyco/opencode/issues/1168) — 11 评论 · 👍 119

希望终端里的 URL 支持 Ctrl+点击直接唤起默认浏览器。该请求自 2025 年提出以来持续获得关注，是提升 TUI 日常使用效率的高频呼声。

### 7. 运行中提示的队列 vs 引导模式 [Feature]
[#32157](https://github.com/anomalyco/opencode/issues/32157) — 5 评论 · 👍 67

为运行中的会话新增 `queue`、`steer`、`break` 三种用户提示模式，并支持压缩感知（compaction-aware）的 steer 语义。涉及 2.0 核心交互模型，体现了社区对"中途干预"能力的深度思考。

### 8. 移除 Go 隐私措辞与供应商归属引发争议 [Feature/Concern]
[#39875](https://github.com/anomalyco/opencode/issues/39875) — 6 评论 · 👍 44

用户指出最近两个 commit 悄悄移除了 Go 订阅中的隐私声明和供应商归属文字，要求恢复并补充 telemetry 与数据保留政策。44 👍 显示社区对透明度和隐私合规的敏感性较高。

### 9. Amazon Bedrock Opus 4.6 压缩失败 [Bug]
[#14332](https://github.com/anomalyco/opencode/issues/14332) — 13 评论 · 👍 8

压缩（compaction）时报错：`thinking or redacted_thinking blocks cannot be modified`。属于模型特定兼容性问题，影响使用 Bedrock 部署的团队，社区期待在压缩流程中保留原始 thinking 块。

### 10. 跨项目 Session 列表 / 选择器 [Feature]
[#31932](https://github.com/anomalyco/opencode/issues/31932) — 15 评论 · 👍 6

请求在 TUI 中提供跨项目的 `/sessions` 选择器，解决同时维护多个仓库时无法从全局视角找回历史会话的问题。与 #6152、#38973 共同指向会话管理能力的系统化升级。

---

## 重要 PR 进展

### 1. 支持继续子代理会话 [feat(core)]
[#40931](https://github.com/anomalyco/opencode/pull/40931) — opencode-agent[bot]

为子代理新增可选 `sessionID` 参数，可继续已有前台子代理会话，同时校验父会话归属和代理身份。前后台完成信封中也会暴露可复用的 `sessionID`，对长任务拆分会很有帮助。

### 2. TUI 支持 Option+Enter 队列提示 [feat(tui)]
[#40922](https://github.com/anomalyco/opencode/pull/40922) — opencode-agent[bot]

Enter 明确引导当前响应，Option+Enter / Alt+Enter 将新提示加入队列；队列以紧凑 dock 形式附在 composer 上，并显示 `<count> queued · <first prompt>` 摘要。这是对 #32157 功能诉求的直接落地。

### 3. 会话摘要不再存储完整 Patch 文本 [fix(opencode)]
[#40861](https://github.com/anomalyco/opencode/pull/40861) — KirillDeviatka

`SessionSummary.summarize()` 原先会存储完整 `Snapshot.diffFull()` 结果（含全部 patch），严重膨胀会话数据。该 PR 修复了 #32005，缩减磁盘占用并改善长会话的加载性能。

### 4. 限制工具输出大小 [feat(core)]
[#40929](https://github.com/anomalyco/opencode/pull/40929) — rekram1-node

按 `tool_output` 的行数和字节限制截断本地工具输出；完整截断文本保留在托管文件中并定期清理（超过 7 天）。可有效防止工具输出无限膨胀导致的上下文污染。

### 5. 兼容无 finish reason 的流式响应 [fix(ai)]
[#40965](https://github.com/anomalyco/opencode/pull/40965) — rekram1-node

新增 `compatibility.requireFinishReason` 选项：默认保持严格模式；设为 `false` 时在非空 EOF 后合成 `unknown` 终止符，解决部分 OpenAI 兼容端点不返回 `finish_reason` 导致流中断的问题。

### 6. 隔离会话级 MCP 工具 [fix(acp)]
[#40979](https://github.com/anomalyco/opencode/pull/40979) — vanzue

修复 ACP 会话中动态注册的 MCP 服务器名被其他会话误用的问题，在 prompt 和 slash command 执行前校验工具归属（Closes #40978）。对多会话并行开发的正确性很重要。

### 7. 中文 locale 使用"词元"替代"令牌" [fix(i18n)]
[#40977](https://github.com/anomalyco/opencode/pull/40977) — Speechlessmanbilibili

修复 zh locale 中 token 被误译为"令牌"（API 凭证含义）的问题，7 处替换为 LLM 语境下的"词元"（Closes #40976）。虽是小改动，但对中文用户体验改善明显。

### 8. 自定义模型透传 agent temperature [fix(provider)]
[#40973](https://github.com/anomalyco/opencode/pull/40973) — SeashoreShi

配置自定义模型（`provider.<id>.models`）时 `temperature` 默认被置为 `false`，导致 agent 级温度设置被静默丢弃。该 PR 修复了自定义 OpenAI 兼容 provider 与内置模型在温度参数上的不一致行为。

### 9. V2 API 强制要求 session 选择 [fix(api)]
[#40964](https://github.com/anomalyco/opencode/pull/40964) — opencode-agent[bot]

创建 session 时强制要求 `agent` 和 `model` 字段，通过生成的 Promise/Effect 客户端透传；`opencode run` 也会在创建新会话前解析显式 agent/model。有助于避免因默认值缺省导致的意外行为。

### 10. 关闭过期的权限提示 [fix(tui)]
[#40960](https://github.com/anomalyco/opencode/pull/40960) — kitlangton

当服务端报告请求已不存在时，TUI 不再显示陈旧的权限弹窗。手动和自动权限回复统一走数据层，成功后或返回 `PermissionNotFoundError` 时即从本地状态移除，减少界面卡顿与误操作。

---

## 功能需求趋势

- **会话管理成为第一优先级**：`Session context usage`（#6152）、跨项目 session picker（#31932）、会话内容全文搜索（#38973）三个方向共同指向"会话资产化"——用户希望像管理代码一样管理历史会话。
- **TUI 交互精细化**：链接可点击（#1168）、session 统计命令（#37760）、运行中提示的队列/引导模式（#32157）均要求终端界面具备更接近 IDE 的交互能力。
- **订阅/计费的透明度与可靠性**：围绕 Go/Zen 的 401 故障与套餐生效问题说明开发者对"付费-到账-可用"的链路稳定性有极大诉求。
- **隐私与合规关注升温**：#39875 提出的隐私措辞移除、telemetry 与保留政策需求，反映了开发者对开源工具信任度的高度敏感。
- **第三方集成扩展**：Todo Sidebar 与 Linear 集成（#38081）、Home Assistant 支持（#40242）显示社区希望 OpenCode 成为更广泛工作流的中枢。
- **模型元数据精细化**：DeepSeek V4 Flash Free 的上下文长度被错误限制为 200K（原生 1M）（#40958），表明社区对模型能力准确映射的要求越来越严格。

---

## 开发者关注点

- **Go 订阅 401 故障是绝对热点**：多帖累积超 100 条评论，免费模型正常、付费模型全挂，跨 Windows/macOS 复现，开发者普遍怀疑上游对 OpenCode 代理 IP 或账号体系进行了封禁，急需官方明确原因与恢复时间。
- **订阅状态不同步**：#40234 显示付费成功后 UI 与账户系统状态不一致，报错 `No payment method`，削弱了用户对新订阅体系的信任。
- **桌面端稳定性问题集中**：Linux 上最新版卡死（#40871）、Debian 13/XFCE 下 TUI 白屏只能 `kill -9`（#35494）、Windows 10 + Node 26.7 无法启动（#40957）、PowerShell 退出后鼠标滚动乱码（#11748）——跨平台终端兼容性仍是重灾区。
- **Web 界面实时性不足**：新消息不会自动刷新（#40502），从 Codespace 打开时无法识别已有项目（#39522），说明 Web 端在会话同步与项目发现方面还有明显短板。
- **权限规则存在静默失效风险**：#40945 指出 `permission.edit` 规则按 worktree 相对路径匹配，绝对路径与 `~` 模式永远不会命中，对 `deny` 规则是 fail-open 的安全隐患，值得优先修复。

---
*数据来源：github.com/anomalyco/opencode | 统计周期：2026-08-06 ~ 2026-08-07*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报 — 2026-08-07

## 1. 今日速览
今日社区焦点集中在 **v0.84.0 新增的全屏 TUI 模式**，但该新功能也引发了关于复制行为、文本选择与超宽行崩溃的多项反馈。与此同时，**上下文压缩（compaction）触发机制**与 **Windows 平台支持**成为讨论热度最高的两大主题。在 PR 方面，Gemini 思考签名修复、Agent.reset() 安全性加固、以及 SQLite 查询优化均已合入。

## 2. 版本发布
**v0.84.0**（2026-08-07 发布）

核心新增：
- **Fullscreen TUI mode**：支持在普通与全屏模式间运行时切换；提供独立滚动的事件记录、可拖拽滚动条、以及固定编辑器与底部栏。详见 [UI & Display 文档](https://github.com/earendil-works/pi/blob/v0.84.0/packages/coding-agent/docs/settin)。

## 3. 社区热点 Issues（精选 10 条）

1. **Windows 支持问题收集** — [#7547](https://github.com/earendil-works/pi/issues/7547)（评论 22，👍 1）
   社区对 Windows 运行方式碎片化表达关注，维护者正借此确定核心支持范围与文档优先级。

2. **上下文压缩失效直至 API 溢出** — [#6879](https://github.com/earendil-works/pi/issues/6879)（评论 12，👍 15）
   用户在高强度 agentic 任务中，上下文使用率超过 100% 后压缩仍未触发，最终 API 拒绝请求（373k tokens）。社区支持率最高，要求每次 agent 回合后检查阈值。

3. **默认提示词过度鼓励 bash 调用** — [#7128](https://github.com/earendil-works/pi/issues/7128)（评论 10，👍 5）
   系统提示中新增的 “Inspect PI_* environment variables” 指引导致模型频繁执行不必要的环境检查命令，影响效率与 token 消耗。

4. **全屏 TUI 的双击选择行为缺陷** — [#7725](https://github.com/earendil-works/pi/issues/7725)（评论 3）
   用户期望双击选中完整单词，但目前光标位置影响选区；且拖拽应自动扩展至相邻单词。已关联 PR #7733 修复。

5. **全屏 TUI 双击拆分路径与连字符** — [#7746](https://github.com/earendil-works/pi/issues/7746)（评论 1）
   `Intl.Segmenter` 将 `/` 与 `-` 视为边界，导致双击选择路径时仅选中单个片段，影响开发效率。

6. **超宽行导致 TUI 崩溃而非截断** — [#7737](https://github.com/earendil-works/pi/issues/7737)（评论 2）
   macOS 115 列终端下，渲染行宽超过终端宽度即抛出 fatal exception，破坏整次会话。

7. **DeepSeek 模型多轮对话必现 400** — [#7702](https://github.com/earendil-works/pi/issues/7702)（评论 4）
   经 opencode zen gateway 调用 DeepSeek 时，`reasoning_content` 未回传导致 400；`detectCompat()` 根因已定位。

8. **Copilot 企业版压缩失败：unknown stamp** — [#7413](https://github.com/earendil-works/pi/issues/7413)（评论 7）
   GHE.com 账户执行 `/compact` 报 `unknown stamp "prod-cus-01"`，普通对话不受影响，已修复关闭。

9. **X11 连接泄漏致 X server 客户端表满** — [#7600](https://github.com/earendil-works/pi/issues/7600)（评论 3）
   长时间运行的 pi 进程 8 天泄漏 182 个 X11 连接，最终导致新 X 客户端无法启动。

10. **/reload 后自定义工具渲染失效** — [#7740](https://github.com/earendil-works/pi/issues/7740)（评论 1）
   注册于 `session_start` 的 MCP 工具在 `/reload` 后不再遵循 `renderCall`/`renderResult`，影响自定义渲染。

## 4. 重要 PR 进展（精选 10 条）

1. **保留 Gemini 思考签名** — [#7745](https://github.com/earendil-works/pi/pull/7745)（已合并）
   在 OpenAI-compatible 流式工具调用中捕获并回放 Gemini `extra_content.*.thought_signature`，保持既有 OpenRouter 路径不变。

2. **Ollama Cloud 支持** — [#7742](https://github.com/earendil-works/pi/pull/7742)（开放中）
   新增 Ollama Cloud provider，支持 `OLLAMA_API_KEY`；混合本地/云连接仍可手动或经 `ollama launch pi` 完成。

3. **Qwen Token Plan Individual provider** — [#7659](https://github.com/earendil-works/pi/pull/7659)（已合并）
   新增面向国际用户 Individual 订阅的 `qwen-token-plan-individual`，暴露 8 个模型并强化配额校验。

4. **Agent.reset() 运行中拒绝复位** — [#7717](https://github.com/earendil-works/pi/pull/7717)（已合并）
   修复活动运行期间 reset 导致“仅助手消息”转录的问题；新逻辑保留状态直至 inflight 响应稳定。

5. **被阻止工具调用可附加 terminate 提示** — [#7715](https://github.com/earendil-works/pi/pull/7715)（已合并）
   为 `beforeToolCall` 与 `tool_call` 扩展新增可选 `terminate` 提示，便于主动结束当前回合。

6. **全屏 TUI 复制不再产生多余换行** — [#7721](https://github.com/earendil-works/pi/pull/7721)（已合并）
   按视觉行复制改为按逻辑行跟踪，消除长行换行复制时插入的额外 `\n`。

7. **SQLite 会话查询优化** — [#7727](https://github.com/earendil-works/pi/pull/7727)（开放中）
   分支查询、`stopAtType` 与成员关系查询全部下推到 SQL 层，减少不必要的加载。

8. **编译二进制禁用 bunfig 自动加载** — [#7685](https://github.com/earendil-works/pi/pull/7685)（已合并）
   避免 cwd 下损坏的 `bunfig.toml` preload 导致 `pi --version` 启动崩溃。

9. **AGENTS.override.md 支持** — [#7681](https://github.com/earendil-works/pi/pull/7681)（已合并）
   引入每目录最高优先级上下文文件；同目录存在时仅加载 override，其他目录上下文照常分层。

10. **工具提示词与定义同位置管理** — [#7671](https://github.com/earendil-works/pi/pull/7671)（已合并）
    将内置工具的系统提示词片段与实现定义聚合至同一处，并提供回归测试保障。

## 5. 功能需求趋势
- **TUI/UX 精细化**：围绕新全屏模式的文本选择（双击、拖拽、路径识别）、复制换行处理、翻页键、主题覆盖等改进最为密集，表明 TUI 正在成为核心交互入口。
- **模型与 Provider 扩展**：Ollama Cloud、Qwen Token Plan Individual、Amazon Bedrock Mantle 等新 provider 持续接入；对兼容层（OpenAI-compatible、DeepSeek 推理内容）的修复需求同步上升。
- **会话与上下文管理**：自动压缩阈值检查、reset 语义安全、SessionManager 重载、Harness v2 恢复能力是 agent 稳定性方向的重点。
- **性能与资源治理**：SQLite 查询下推、工具调用流式解析 O(n²) 优化、X11 连接泄漏修复，反映社区对长期运行资源消耗的敏感。

## 6. 开发者关注点
- **Windows 支持碎片化**：多运行方式并存导致排障困难，维护者正征集具体问题以聚焦投入。
- **新 TUI 打磨阵痛**：复制行为意外（自动换行、首选先选即复制）、超宽行崩溃、双击路径拆分，是 v0.84.0 最集中的反馈点。
- **上下文压缩不可靠**：压缩不及时直至 API 拒绝，直接影响长任务稳定性，是点赞数最高的问题。
- **模型列表与 API 实际可用性脱节**：Qwen Token Plan 与 DeepSeek 系列多个模型 ID 在 Pi 中列出但实际不可用，引发配置困惑。
- **特定环境兼容性**：Copilot 企业版压缩失败、Termux 无括贴支持导致多行粘贴失效、SSH 登录重定向至 localhost 等环境相关问题频现。

---
以上为 2026-08-07 Pi 社区日报，供技术开发者快速了解社区动态。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报（2026-08-07）

## 今日速览

- **v0.21.7 正式版发布**：移除 Goals 的 50 轮限制，并支持在 CLI 中内联渲染终端图像。
- **两个 P1 级问题浮现**：0.21.6 hooks 系统回归（[#8622](https://github.com/QwenLM/qwen-code/issues/8622)）与 Windows 桌面版 0.1.0 启动崩溃（[#8615](https://github.com/QwenLM/qwen-code/issues/8615)）。
- **安全漏洞被披露**：两项文件夹信任（folder trust）绕过漏洞（[#8627](https://github.com/QwenLM/qwen-code/issues/8627)、[#8643](https://github.com/QwenLM/qwen-code/issues/8643)），可能导致 `.env` 泄露或 token 注入。

## 版本发布

### v0.21.7 正式版
- **移除 Goals 的 50 轮限制**：任务可跨边界恢复并继续执行（[#8421](https://github.com/QwenLM/qwen-code/pull/8421)）。
- **CLI 内联终端图像渲染**：模型输出的图片可在交互式 CLI 中直接渲染（支持 Kitty 等终端）。

### v0.21.7-nightly.20260807
- 修复 CI 中 blocked autofix takeover 准入状态的展示问题（[#8410](https://github.com/QwenLM/qwen-code/pull/8410)）。

### Qwen Live Host v0.1.0
- 发布 Qwen Live Host 首个正式版本，同步更新 stable 安装流（live-host-latest），并改进 Windows 合并队列测试 CI 基础设施。

## 社区热点 Issues

1. **[P1] 0.21.6 回归：PreToolUse/PostToolUse 等 hooks 不再触发**（[#8622](https://github.com/QwenLM/qwen-code/issues/8622)）  
   仅 `UserPromptSubmit` 和 `Stop` 能触发，工具调用门控、会话启动等 hooks 全部失效。自动化依赖方受影响严重。

2. **[P1] Windows 桌面版 0.1.0 启动崩溃：EISDIR lstat 'C:'**（[#8615](https://github.com/QwenLM/qwen-code/issues/8615)）  
   打开工作区即崩溃，问题指向 bundled runtime 对 Windows 盘符路径的处理缺陷。

3. **[安全] 显式 DO_NOT_TRUST 被祖先 TRUST_FOLDER 覆盖**（[#8627](https://github.com/QwenLM/qwen-code/issues/8627)）  
   信任规则先命中则短路，导致显式不信任的目录仍被信任，存在 `qwen serve` token 被注入风险。

4. **[安全] `.env` 从不受信任的祖先目录被加载**（[#8643](https://github.com/QwenLM/qwen-code/issues/8643)）  
   `findEnvFilesFastPath` 仅对起始目录评估一次信任，向上遍历时误用该结果，威胁凭据安全。

5. **Qwen OAuth 免费层政策调整讨论**（[#3203](https://github.com/QwenLM/qwen-code/issues/3203)）  
   提议将每日免费配额从 1000 降至 100 并最终关闭免费入口。虽已关闭，但 150 条评论显示社区高度关注。

6. **缩小终端窗口后历史 transcript 重复打印**（[#8557](https://github.com/QwenLM/qwen-code/issues/8557)）  
   macOS + Warp 下，窗口变窄时已输出的内容重复堆叠到 scrollback，影响阅读。

7. **iTerm2 + SSH + tmux 环境闪屏**（[#8562](https://github.com/QwenLM/qwen-code/issues/8562))  
   对话发消息时仅在 tmux 分屏内闪烁，社区排查指向 Qwen Code 版本更新引入。

8. **Anthropic 模型 ID 解析不接受点分次版本别名**（[#8584](https://github.com/QwenLM/qwen-code/issues/8584)）  
   如 `claude-opus-4.8` 等 proxy 常见写法被拒绝，且缺少 Opus 5 的 token 上限数据。

9. **Windows 下点击聊天文件链接失败**（[#8644](https://github.com/QwenLM/qwen-code/issues/8644)）  
   盘符冒号被 URL 编码为 `%3A`，导致 VS Code 无法打开 `file:///d%3A/...` 路径。

10. **VP 模式下 Ctrl+S “显示更多行”不生效**（[#8634](https://github.com/QwenLM/qwen-code/issues/8634)）  
    在虚拟终端历史（VP）模式中，按下 Ctrl+S 后提示消失，但长输出仍被截断。

## 重要 PR 进展

1. **[WSL] 跳过终端重绘优化器，修复流式输出逐字重复**（[#7897](https://github.com/QwenLM/qwen-code/pull/7897)）  
   在 WSL/ConPTY 下禁用 batched cursor-up 序列优化，从根因修复 #7634 的内容重复渲染问题。

2. **[Desktop] 去除 Windows 工作区路径的 verbatim 前缀**（[#8619](https://github.com/QwenLM/qwen-code/pull/8619)）  
   用 `dunce::canonicalize` 替换 `std::fs::canonicalize`，修复桌面版启动时 `EISDIR` 崩溃。

3. **[Review] 将远程仓库匹配移动到 CLI**（[#8658](https://github.com/QwenLM/qwen-code/pull/8658)）  
   新增 `qwen review match-remote` 子命令，以确定性逻辑替代模型撰写的远程解析，降低 `/review` 编排开销。

4. **[Live Host] 下载优先走 OSS 镜像**（[#8637](https://github.com/QwenLM/qwen-code/pull/8637)）  
   macOS Live Host 安装改为优先 OSS 镜像，GitHub 稳定源作为后备，支持 60 分钟慢网下载与文件校验。

5. **[Core] 为长时运行 Goal 增加证据检查点**（[#8465](https://github.com/QwenLM/qwen-code/pull/8465)）  
   在证据目录达到硬限制前暂停自动续跑，由独立验证器压缩为有界摘要，避免长任务上下文丢失。

6. **[Memory] 内存写入后刷新活动系统指令**（[#8640](https://github.com/QwenLM/qwen-code/pull/8640)）  
   让 bare-mode `/remember` 与工具完成路径在持久化后立即反映到当前会话。

7. **[CLI] 窄终端下保留斜杠命令名称**（[#8657](https://github.com/QwenLM/qwen-code/pull/8657)）  
   补全菜单空间不足时只对参数提示换行，命令名保持完整。

8. **[Web Shell] 右侧工件面板支持全屏视图**（[#8614](https://github.com/QwenLM/qwen-code/pull/8614)）  
   面板头部新增展开/收起按钮，方便查看 artifacts、子代理、review changes 等长内容。

9. **[Workflows] 动态工作流支持协作暂停与恢复**（[#8320](https://github.com/QwenLM/qwen-code/pull/8320)）  
   暂停时停止派发新 agent 任务，在途任务收敛后统一在门控处等待，恢复后继续执行。

10. **[Core] 修复 Qwen 3.8 推理预算冲突**（[#8525](https://github.com/QwenLM/qwen-code/pull/8525)）  
    避免 DashScope 请求同时携带 `reasoning_effort` 与 `thinking_budget`，按 `extra_body` → sampling → `reasoning` 优先级合并。

## 功能需求趋势

- **终端渲染与交互体验**：WSL/ConPTY 文本重复、tmux 闪屏、窗口 resize 内容重印、中文拼音模糊、窄终端命令遮挡等报告频发，跨平台终端适配仍是最高频方向。
- **安全与信任边界**：folder trust 的评估遗漏、DO_NOT_TRUST 被覆盖等引发关注，社区对密钥与 `.env` 防护非常敏感。
- **Agent 自主性与任务持久化**：Goals 长任务、后台 Agent 恢复、工作流协作暂停/恢复、证据检查点等，显示长周期可中断自动化任务需求上升。
- **桌面版与 IDE 集成**：Windows Desktop 0.1.0 稳定性、UI 语言切换失效、VS Code 插件遮挡等问题，桌面端体验仍在打磨。
- **多模态与生态扩展**：qwen-audio-agent 语音前端提议、Omni 多模态接入实验、终端内联图像渲染等，开始探索语音/多模态与 coding agent 的结合。

## 开发者关注点

- **hooks 回归直接影响自动化链路**，开发者对这类破坏性回归容忍度低。
- **终端渲染问题在 WSL、tmux、macOS 等平台反复出现**，期待统一稳定的渲染兼容层。
- **Windows 平台问题集中**：桌面版崩溃、中文拼音显示、文件链接 URL 编码、路径 verbatim 前缀等，反馈活跃，官方已有多项对应修复。
- **信任目录逻辑存在安全风险**，开发者希望采用更严格的信任评估模型。
- **多模型与 proxy 场景兼容性**：Anthropic 模型 ID、Qwen 3.8 推理预算冲突等，说明异构模型配置是常见需求。

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI 社区动态日报 · 2026-08-07

## 今日速览

v0.9.4 发布列车（#5135）完成合入，命令边界重构进入最后验证阶段（#5255）；TUI 鼠标滚轮错位缺陷已由 PR #5234 修复合入。社区当前最集中的两类诉求是：多 Provider API Key 独立存储（#5250）与未知模型 ID 静默回退 128K 上下文（#5244）。

## 版本发布

过去 24 小时无新的 Release。v0.9.4 集成 PR（#5135）已于昨日关闭，共 77 个提交，包含 Workflow 状态栏迁移、release-blocker 修复等。

## 社区热点 Issues

1. **#5244 未知模型 ID 静默降级到 128K 上下文窗口** — 维护者 Hmbown 自己提交，直指 `context_window_for_model` 对未知模型 ID 无提示回退 `LEGACY_DEEPSEEK_CONTEXT_WINDOW_TOKENS`（128K），1M 上下文模型会在用户不知情下被压缩。0.9.4 已有缓解，社区认为仍需"大声说出来"而非静默兜底。
   https://github.com/Hmbown/CodeWhale/issues/5244

2. **#5250 只能保存一个 API Key，多 Provider 切换困难** — 用户 ffyuhf 反馈在 DeepSeek 和 GLM 之间切换时每次都要重新获取 Key，希望按 Provider 分开存储而不是互相覆盖。2 条评论，击中了多模型工作流的真实痛点。
   https://github.com/Hmbown/CodeWhale/issues/5250

3. **#4978 Anthropic API 400 invalid_request_error 高频复现** — 通过 `providers.openmodel` 使用 Anthropic Messages API 兼容层时反复收到 `'type' must be in ["enabled", "disabled", "auto"]`，重试可过但无固定规律。6 条评论反应了网关类接入方的共性困扰。
   https://github.com/Hmbown/CodeWhale/issues/4978

4. **#5253 嵌套 subagent 的显式 max_depth 会扩大根会话递归预算** — 新的潜在越权：后代 subagent 通过指定 `max_depth` 绕过根会话更小的上限。PR #3931 虽加了全局 MAX_SPAWN_DEPTH_CEILING 8，但 host 侧配置更小上限时仍可被撑大，触及 Fleet 边界安全。
   https://github.com/Hmbown/CodeWhale/issues/5253

5. **#5223 TUI 长内容溢出时鼠标滚轮作用在输入历史而非内容区** — macOS + iTerm2 环境下触控板滚轮被错误路由到 composer 历史切换。PR #5234 已修复并关闭，但暴露了 TUI 事件路由的焦点判定问题。
   https://github.com/Hmbown/CodeWhale/issues/5223

6. **#4828 macOS underwater shell 导致 open/osascript/launchctl 全部 exit -54** — v0.9.0 将 underwater 交互系统设为默认 shell 后，macOS 系统命令全部 operation not permitted，降级到 0.8.67 可恢复。已关闭，但属于典型的升级回归事故。
   https://github.com/Hmbown/CodeWhale/issues/4828

7. **#4681 重开会话后 `<turn_meta>` 内部块被展示** — 新会话中正常隐藏，关闭重开后暴露在每条用户消息之下，属于会话恢复时的渲染状态泄漏。已关闭，但提示了持久化层过滤条件的脆弱性。
   https://github.com/Hmbown/CodeWhale/issues/4681

8. **#5035 v0.9.4 release-blocker：Workflow 编写失败与 Agent 选项不一致** — dogfood 中发现 `task(...)` 拒绝直接 Agent 派发所接受的选项，且修正后的并行 fan-out 会把失败槽位当作 `null` 并返回"成功"。这是编排层最危险的假成功模式。已关闭。
   https://github.com/Hmbown/CodeWhale/issues/5035

9. **#2870 EPIC：命令边界重构（command-boundary refactor）关闭** — 20 条评论的长期跟踪 Issue，拆分 #2791 为可合并的小层。随着 Layer 5.3（#5255）落地，该 EPIC 于今日关闭，标志着命令边界重构主链路完成。
   https://github.com/Hmbown/CodeWhale/issues/2870

10. **#5246 构建：将发布 profile 与本地 release gate 拆分** — 当前 workspace 为发布调优的 `lto = true`、`codegen-units = 1` 被用于每次 pre-push 构建，贡献者和 CI agent 都在为 fat LTO 买单。属于开发体验类高频痛点。已关闭。
    https://github.com/Hmbown/CodeWhale/issues/5246

## 重要 PR 进展

1. **#5255 Layer 5.3：命令面板、补全与发现过滤整合验证** — 命令边界重构的最后一层，验证用户命令在 palette 与 slash-completion 中的表现。今日新开，承接 Layer 5.1 的上游实现。
   https://github.com/Hmbown/CodeWhale/pull/5255

2. **#5234 修复 TUI 鼠标滚轮事件路由（#5223）** — 根因是 `recover_terminal_modes()` 同时启用了 `EnableMouseCapture` 与 xterm alternate-scroll（DECSET），导致滚轮被 composer 吃掉。已合入。
   https://github.com/Hmbown/CodeWhale/pull/5234

3. **#5242 支持从 checkpoint 恢复中断的子代理** — `agents/followup` 对 `interrupted_continuable` 子代理不再是死信：检查点保留、`continuation_handle` 真正可续跑，长文档审查等多步任务无需重新派发。已合入。
   https://github.com/Hmbown/CodeWhale/pull/5242

4. **#5240 Bash wait/delta 工具向模型暴露真实耗时** — 此前 `duration_ms` 只存在于 tool metadata 中模型不可见，导致 wait 结果无法区分"刚启动"还是"已跑几分钟"，模型只能盲目 busy-poll。已合入。
   https://github.com/Hmbown/CodeWhale/pull/5240

5. **#5238 MCP Registry 发现与 Registry-first 工具选择** — 模型在调用 `exec_shell` 或手写实现前，先查询公共 MCP Registry 匹配零环境 stdio 服务器；新增 `registry_sync` 拉取可用条目。已合入，是工具调用策略的一次重要转向。
   https://github.com/Hmbown/CodeWhale/pull/5238

6. **#5225 ACP server 的 session/prompt 开始执行工具调用** — 修复了 ACP 桥接（Zed、`acp-deepseek-adapter` 等）只能拿到文本流、无法执行模型请求的工具调用的问题，将 chat-only 升级为真正的 agent。已合入。
   https://github.com/Hmbown/CodeWhale/pull/5225

7. **#5077 渐进式披露新鲜上下文** — `AGENTS.md`/`CLAUDE.md` 保持 eager，ambient skills 块上限 2400 字符并改为惰性加载，技能通过首轮 `load_skill name="list"` 保持可发现。已合入，优化长会话上下文占用。
   https://github.com/Hmbown/CodeWhale/pull/5077

8. **#5254 FreeBSD 构建修复** — rquickjs 在 FreeBSD 无预编译绑定，编译直接失败。PR 改用 bindgen feature 作为后备方案，打开 FreeBSD 平台支持。今日更新中。
   https://github.com/Hmbown/CodeWhale/pull/5254

9. **#5252 subagent 运行时状态根隔离** — 为嵌入宿主新增可选 `EngineConfig::subagent_state_root`，子代理工作台账与完整转录工件可存到会话级独立目录，默认可沿用 legacy workspace 路径。今日新开。
   https://github.com/Hmbown/CodeWhale/pull/5252

10. **#5135 v0.9.4 release train 合入** — 77 个提交，包含 2026-08-01 以来所有候选源、release-blocker 修复与 Workflow 状态优化，已关闭。
    https://github.com/Hmbown/CodeWhale/pull/5135

## 功能需求趋势

- **多 Provider/多模型支持成为第一诉求**：API Key 分离存储（#5250）、Anthropic 兼容层稳定性（#4978）、未知模型 ID 的显式化（#5244）都指向同一方向——把 TUI 作为统一入口接入多家后端，不再是 DeepSeek 单栈。
- **Runtime API 生命周期化**：Copilot 连续提交 #5129–#5133，为 skill（安装/更新/卸载/信任/审计）、MCP server（增删改）、memory（检查与生命周期控制）、goal 状态、verifier receipts 增加管理端点。托管客户端（桌面/Web）正在获得完整的远程控制能力。
- **子代理/Fleet 编排的可观测性与安全边界**：checkpoint 续跑（#5242）、递归深度上限（#5253）、verifier 凭证透明化（#5132）、Workflow 错误一致性（#5035）——编排层从"能跑"走向"可信"。
- **构建与贡献体验优化**：#5246 拆分 dist profile、#5245 解耦 HEAD sha 与编译、#5254 支持 FreeBSD，加上 #5229 中文 Windows 新手指南，社区贡献门槛在被主动降低。
- **TUI 交互细节打磨**：滚轮路由（#5223）、`<turn_meta>` 隐藏（#4681）、Workflow 状态移入顶部状态栏（#5040）——长会话与工作流场景下 UI 状态管理持续演进。

## 开发者关注点

- **静默失败是最大敌人**：开发者对"未知模型 ID 静默回退 128K""Workflow 并行空成功""digest post 假 ok:true"这类假成功模式反应强烈，要求系统对"我不知道/我没做"显式告警。
- **macOS 升级回归**：underwater shell 破坏 `open`/`osascript`/`launchctl`（#4828）影响系统级命令调用，用户对默认 shell 的替换策略更为敏感。
- **多 Key 管理是刚需**：单 Key 存储设计已不符合多供应商工作流，用户被迫在每次切换时手动替换凭证。
- **Anthropic 兼容层可信度不足**：400 错误无规律复现（#4978、#5002），重试机制不稳定，影响使用第三方网关的用户信心。
- **子代理中断恢复是长期痛点**：checkpoint 能存不能续（#5242）的问题终于被修复，说明长时间运行任务（文档审查、多步搜索）对断点续跑有强烈需求。
- **构建链路成本**：fat LTO + 每次 commit 全量重建（#5245/#5246）成为贡献者与 CI agent 的主要摩擦点，社区期待更快的 pre-push 反馈闭环。

</details>

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar) 自动生成。*