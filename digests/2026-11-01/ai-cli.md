# AI CLI 工具社区动态日报 2026-11-01

> 生成时间: 2026-11-01 16:49 UTC | 覆盖工具: 9 个

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

# AI CLI 工具生态横向对比分析（2026-11-01）

## 1. 生态全景

当前 AI CLI 工具已越过"能否用"阶段，进入**稳定性、可控性与成本经济性**的深水区：今日 9 个活跃工具中仅 4 个有版本发布，且全部为修补级或 nightly，社区讨论重心明显从功能扩张转向回归修复、跨平台兼容与配额可见性。Windows 平台与 IDE 扩展成为最集中的故障面（Codex、Pi、Claude Code、OpenCode 均有相关高热度 Issue），而"子代理不可预测"（Gemini CLI）与"持久化状态丢失"（OpenCode、Codewhale、Pi）构成两类系统性信任问题。与此同时，BYOK/本地模型接入与配额额度独立性在各社区持续高赞，反映用户对"供应商锁定"和"计费不透明"的敏感度上升。CI/发布基础设施的脆弱性也在多处显现（Qwen Code 门禁长期红灯、Codex 因 BuildBuddy 撤权降级 Bazel），说明工程化能力正成为工具竞争力的隐性分水岭。

## 2. 各工具活跃度对比

> 说明：下表"Issues 数/PR 数"为各日报"热点 Issues"与"重要 PR"章节所涵盖的条目数（通常为 Top 10），非当日全量数据；Release 为 24 小时内情况。Kimi Code CLI 无活动。

| 工具 | 热点 Issues（条） | 重要 PR（条） | Release | 最热议题（评论/赞） | 备注 |
|---|---|---|---|---|---|
| Claude Code | 10（+1 补充） | 10 | 无 | #25045 会话重命名（134👍）/ #19649 Bash 误用（47 评论,123👍） | 8 条 PR 为 CLOSED/文档 |
| OpenAI Codex | 10 | 10（全 CLOSED） | 无 | #51524 Windows Computer Use（57 评论） | PR 均由 bot 提交；CI 降级 |
| Gemini CLI | 10 | 10（含 1 条待确认） | v0.67.0-nightly | #22323 子代理误报成功（13 评论）/ #21409 挂起（8👍） | 高度集中于 area/agent |
| GitHub Copilot CLI | 10（+4 补充） | 0 | v1.0.106-1/-2 | #3709 BYOK 切换（13 评论,34👍）/ #1857 队列取消（33👍） | 两个修补版 |
| OpenCode | 10（+3 补充） | 10 | 无 | #59387 免费层主帖（186 评论） | 评论量全场最高 |
| Pi | 10（+3 补充，总 29 条更新） | 7（全列出） | 无 | #10480 额度重置（21 评论）/ #10256 颜色泄漏（20 评论） | Windows 问题密集 |
| Qwen Code | 10（+3 补充） | 10 | v0.26.5 | #14724 CI 失败（138 评论） | CI 议题占比极高 |
| DeepSeek TUI (Codewhale) | 10 | 10 | 无 | #5316 crate 拆分（34 评论） | main 无法编译阻塞贡献 |
| Kimi Code CLI | — | — | — | — | 过去 24 小时无活动 |

**关键观察**：OpenCode（#59387，186 评论）与 Qwen Code（#14724，138 评论）的单议题讨论量远超其他工具，但前者是产品信任问题、后者是 CI 基础设施问题，性质截然不同。

## 3. 共同关注的功能方向

1. **成本与配额可见性 / 计费语义**
   - Claude Code：#13585 剩余配额查询（129👍）、#66115 缓存过期重算成本。
   - Codex：#58530 要求保留 ChatGPT/Codex 独立额度（14👍）。
   - OpenCode：#59387 免费层判定与重置逻辑（186 评论）、#60792 usage 重复累加。
   - Pi：#10480 手动重置未被识别、#10287 上下文用量高估（42k→330k）。
   - Copilot CLI：#3709 BYOK 模型受 `COPILOT_MODEL` 锁定。

2. **上下文管理与 token 经济性**
   - Claude Code：#66115 空闲自动 compact、#90708 上下文余量指示器。
   - Pi：#10885 llama.cpp 溢出未识别、#11557 "交接笔记"替代压缩。
   - Codewhale：#6969 工具淘汰在 prompt 缓存下净亏损、#7172 重发 goal 快照。
   - Gemini CLI：#22745/#22746 AST 感知读取以减少轮次。

3. **终端 TUI 可定制与可读性**
   - Claude Code：#44763 时间戳、#37951 隐藏内联 diff。
   - OpenCode：#61053 拖动选择视口冻结、#42498 分类型时间戳。
   - Codewhale：#7181–#7185 表格/行内代码/图片渲染保真度系列。
   - Gemini CLI / Copilot CLI：OSC 7501 终端状态上报（#29918 / #5112）。

4. **Windows 与跨终端兼容性**
   - Codex：Computer Use URL 识别（#51524、#54532）、沙箱锁（#50520）、附件上传（#58313）。
   - Pi：mintty/ConPTY 颜色回复泄漏（#10256）、glob 分隔符（#9262）、`git clean` 失败（#11597）。
   - OpenCode：Ollama Windows 配置（#60891）、证书签名失败（#60271）。
   - Claude Code：#90708、#14920 涉及 Windows/macOS 平台。

5. **子代理/多模型编排的可靠性**
   - Gemini CLI：#22323 误报成功、#21409 挂起、#21968 不主动启用、#22267 配置覆盖被忽略。
   - Claude Code：#33323 任务队列、#25045 程序化会话管理。
   - Copilot CLI：ACP 断言（#4537 权限自动批准、#4880 模型列表缺失）。

6. **静默失败与可观测性**
   - Pi：#9262 find 返回空、#10885 压缩不触发、#11650 错误被吞。
   - Qwen Code：#12505 剪贴板粘贴无反馈、#14918 托管请求失败无请求 ID。
   - Claude Code：#32755 edit-verifier 应对编辑静默失败。

## 4. 差异化定位分析

| 工具 | 功能侧重 | 目标用户 | 技术路线/生态策略 |
|---|---|---|---|
| **Claude Code** | TUI 精细化控制、插件/skill 生态、hooks 自动化 | 重度终端开发者、需要脚本化 agent 工作流的团队 | 以 skill/hooks/插件扩展为核心，社区 PR 侧以文档与小修复为主，官方主导功能性变更（如 #106583 迁移至 Sonnet 5.5） |
| **OpenAI Codex** | IDE 扩展、Computer Use 浏览器自动化、跨端 Remote | 企业 IDE 用户、需要图形化/远程协作的团队 | 强 IDE 与移动端布局；构建体系依赖 Bazel+Cargo（当前因 BuildBuddy 撤权处于应急状态） |
| **Gemini CLI** | 子代理（subagent）体系、沙箱与执行安全 | 探索 agent 架构的高级用户与研究型开发者 | 走"多代理 + 意图路由 + 沙箱"路线，AST 感知工具体现对模型能力的深度利用 |
| **GitHub Copilot CLI** | ACP 协议集成、屏幕阅读器/无障碍、Remote Control | GitHub 生态内开发者、CI 自动化集成方 | 以 ACP 为对外集成标准，修补级高频发版（v1.0.106-1/-2），走"小步快跑" |
| **OpenCode** | 多 provider 接入、V2 会话、桌面端 | 自托管/本地模型用户、追求供应商中立者 | 中立聚合层路线，Claude Agent 回退语义是当前最大技术债区 |
| **Pi (pi-mono)** | 扩展 API、codemode、pi-durable 持久运行时 | 扩展开发者、边缘运行时（Cloudflare DO）用户 | 强调可编程性与 API 稳定性，Windows 兼容是当前主攻方向 |
| **Qwen Code** | 托管/企业模式、SQL 历史查询、LSP | 企业部署、中文/阿里云生态用户 | 托管 Agent 与隐私合规并重（models.dev 退出、端点白名单） |
| **Codewhale (DeepSeek TUI)** | TUI Markdown 渲染、crate 拆分工程化 | Rust 生态贡献者、DeepSeek 模型用户 | 0.10.3 版本聚焦结构重构（crate ≤1 万行），工程纪律优先 |

**核心分歧点**：Claude Code / Gemini CLI 押注"agent 编排深度"（多代理、任务队列）；OpenCode / Copilot CLI 押注"中立集成层"（多 provider、ACP 协议）；Qwen Code 走"企业托管 + 合规"差异化；Pi / Codewhale 则更接近"可编程运行时/开发者工具链"。

## 5. 社区热度与成熟度

**热度梯队**（综合评论量、点赞数与议题集中度）：

- **第一梯队（高热度、高成熟度压力）**：OpenCode（单帖 186 评论）、Qwen Code（138 评论）。二者热度极高但成因偏向"信任/基础设施"问题——OpenCode 免费层机制已成最大信任负担，Qwen Code 的 CI 门禁长期红灯阻塞合并，均属成熟度短板而非功能吸引力。
- **第二梯队（高参与、迭代活跃）**：Claude Code（多议题 100+ 赞，诉求集群清晰）、Codex（Windows/IDE 问题密集，回滚方案明确）、Gemini CLI（agent 议题高度集中，p1 问题多）。这些社区讨论质量高、需求结构化程度好，反映较成熟的用户基础。
- **第三梯队（快速迭代/修补期）**：Copilot CLI（今日仅修补版，PR 为 0，靠 release 推进）、Pi（Windows 回归密集，扩展 API 需求明确但规模较小）、Codewhale（main 无法编译是贡献瓶颈，处于版本重构期）。

**成熟度判断**：
- 最成熟（流程规范、响应及时）：Claude Code、Copilot CLI——后者以高频小版本 + 无障碍细节修复体现工程成熟度。
- 快速迭代但稳定性欠账：OpenCode、Gemini CLI——功能推进快，但持久化/子代理语义未收敛。
- 工程流程待补：Codewhale（必需检查全红）、Qwen Code（CI runner 环境缺陷占比过高）。

## 6. 值得关注的趋势信号

1. **"配额经济学"成为一等公民**：免费层/额度重置/用量统计在 OpenCode、Pi、Copilot CLI、Codex 同时高热度。**对开发者的参考价值**：选型时应优先评估工具的配额判定透明度与可编程查询能力（如 Claude Code #13585 的诉求），而非仅看模型能力。

2. **静默失败被视为比崩溃更危险**：Pi 的 find 空返回、Qwen Code 的粘贴无反馈、Gemini CLI 的 MAX_TURNS 误报成功、Claude Code 的 Edit 静默失败，共同指向"错误被掩盖会使上层自动化与评测失真"。**参考价值**：构建 agent 流水线时，应以退出状态/结构化事件为判据，并对关键步骤加验证器（Claude Code #32755 模式）。

3. **TUI 回归显示"老牌终端协议仍是雷区"**：OSC 颜色查询、DA1 回复、Shift+Enter、ConPTY、WSL2/Wayland 在 Pi、Gemini CLI、Copilot CLI、Claude Code 同时出现。**参考价值**：跨终端兼容测试应纳入 CI，尤其 mintty、ConPTY、tmux/screen、Wayland 组合。

4. **供应商回退语义复杂化带来隐性成本**：OpenCode 今日 3 个 PR 聚焦 Anthropic 服务器端回退与非流式回退（usage 重复、工具步骤中断）。**参考价值**：多 provider 聚合层需显式建模"重试/回退"对计费与状态机的影响，避免把供应商行为视为黑盒。

5. **子代理从"能力展示"转向"可信度工程"**：Gemini CLI 的挂起/误报成功/不主动启用三问题并存，说明行业正从"能跑多代理"过渡到"能预测多代理"。**参考价值**：agent 架构设计应把状态语义（成功/中断/部分完成）与轨迹可见性作为核心 API，而非事后补丁。

6. **CI/发布基础设施成为隐性护城河**：Qwen Code 的门禁红灯、Codex 的 BuildBuddy 撤权、Codewhale 的 main 不编译，均是"非代码问题阻塞代码贡献"。**参考价值**：评估工具社区健康度时，应关注其 CI 稳定性与外部贡献可合并性，这直接决定生态扩张速度。

7. **上下文压缩策略出现分化**：从"自动 compact"（Claude Code）到"交接笔记 + 新上下文续跑"（Pi #11557），再到"AST 感知减少轮次"（Gemini CLI），社区在探索压缩之外的替代路径。**参考价值**：长任务场景可考虑"结构化交接"而非单纯截断，以兼顾成本与连续性。

---

*注：本报告所有数据均引自上述各工具社区动态摘要；"热点 Issues/PR"计数为各日报所列条目数，非当日全量；Kimi Code CLI 因无活动未纳入对比。DeepSeek TUI 的仓库标识在原始材料中存在 github.com/Hmbown/DeepSeek-TUI 与 codewhale-hq/Codewhale 的不一致，本报告按材料原文保留，未作推断。*

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告（数据截止 2026-11-01）

> 说明：PR 列表的评论数字段均为 `undefined`，无法据此排序。以下“热门 Skills 排行”依据 PR 更新活跃度、关联 Issue 讨论热度和对核心 Skills 的影响面综合判断，并已标注推测性质。所有条目均为 **OPEN**，未提供任何 merged 记录。

---

## 1. 热门 Skills 排行（评论/关注度最高的 PR）

1. **skill-creator 修复系列** — 多作者（MartinCajiao / Kuldeeep18 / BichengWang）
   功能：修复官方元技能 skill-creator 的触发器评测、Windows 兼容、脚本独立执行与 YAML frontmatter 解析。
   热点：skill-creator 是生产新 Skill 的核心工具，其评测误报（false miss）、Windows 下 `select()` 失败、`parse_skill_md` 元数据失真等问题直接影响 Skill 质量判定，属高影响面基础修复。
   状态：OPEN（#1298、#1681、#1997）
   https://github.com/anthropics/skills/pull/1298 ｜ /pull/1681 ｜ /pull/1997

2. **mcp-builder 兼容性修复** — Kuldeeep18
   功能：适配 `mcp>=2.0.0` 中 `streamablehttp_client` → `streamable_http_client` 改名，及自定义 HTTP headers 的新配置方式。
   热点：关联 Issue #1390（evaluation.py 对所有真实 MCP server 打 0/N 并伪造工具错误），指向 mcp-builder 工具链在真实 MCP 场景下的可靠性。
   状态：OPEN（#1742）
   https://github.com/anthropics/skills/pull/1742

3. **webapp-testing 修复系列** — Pcmhacker-piro / gerardrecinto
   功能：移除 `with_server.py` 的 `shell=True`（命令注入风险）；修正 `element_discovery.py` 对 textarea/select 的误报。
   热点：同时触及安全与测试准确性，且为多 PR 集中修补的活跃模块。
   状态：OPEN（#1980、#1976）
   https://github.com/anthropics/skills/pull/1980 ｜ /pull/1976

4. **docx 修复系列** — TINGyu123644 / rohitjain25 / BichengWang
   功能：LibreOffice 超时误报成功、输出未校验；orphaned comments 检测；`merge_runs.py` 丢失命名空间导致非法 XML。
   热点：文档类 Skill 的“静默成功”问题集中暴露，对应 Issue #2018 等讨论。
   状态：OPEN（#1792、#1734；Issue #2018）
   https://github.com/anthropics/skills/pull/1792 ｜ /pull/1734 ｜ /issues/2018

5. **pyxel（复古游戏开发）** — kitao
   功能：在 Python 中创建、调试、验证复古游戏，支持无头输入驱动运行与逐帧检查。
   热点：创建最早（2026-03-05）且更新至 2026-11-01，长期保持活跃，是社区长尾创意类 Skill 的代表。
   状态：OPEN（#525）
   https://github.com/anthropics/skills/pull/525

6. **algorithmic-art / pptx 小修** — gerardrecinto
   功能：`wrapAround()` 负数取模修正（Fixes #1897）；`thumbnail.py` 对 `--cols < 1` 提前报错（Fixes #1809）。
   热点：小缺陷但均有明确 Issue 关联，修复路径清晰。
   状态：OPEN（#1977、#1975）
   https://github.com/anthropics/skills/pull/1977 ｜ /pull/1975

7. **md2video-audio** — 70v-Yoyo
   功能：将 Markdown 直接编译为带拟真配音的 MP4 视频，宣称零成本。
   热点：跨模态内容生产类新 Skill，契合社区对“文档→多媒体”流水线的兴趣。
   状态：OPEN（#1703）
   https://github.com/anthropics/skills/pull/1703

8. **proofcore-contract-auditor** — ProofCore-Protocol
   功能：对 Solidity/Rust 智能合约做静态分析，并将审计证明锚定至 TON 区块链。
   热点：Web3 垂直领域 Agent Skill，带外部链上依赖，属高争议/高门槛提案。
   状态：OPEN（#1771）
   https://github.com/anthropics/skills/pull/1771

---

## 2. 社区需求趋势（源自 Issues）

- **安全与信任边界（最集中）**：Issue #492 指出社区 Skill 以 `anthropic/` 命名空间分发，冒充官方、滥用信任边界；46 条评论、最高讨论量，是当前最强诉求。
  https://github.com/anthropics/skills/issues/492
- **组织级技能共享/分发**：Issue #228 希望 Claude.ai 内支持 org-wide skill 共享，免除“.skill 文件 + Slack 手动上传”流程（17 评论、👍8）。
  https://github.com/anthropics/skills/issues/228
- **Skill 评测与触发可靠性**：Issue #556 报告 `run_eval.py` 在所有查询下触发率为 0%（13 评论、👍7），直指评测基础设施失效。
  https://github.com/anthropics/skills/issues/556
- **上下文效率与压缩记忆**：Issue #1329 提出 compact-memory（符号化压缩 Agent 状态）；Issue #1487 报告 `claude-api` 单次注入约 156k tokens 耗尽上下文。
  https://github.com/anthropics/skills/issues/1329 ｜ /issues/1487
- **输出质量治理**：Issue #1385 提出“预任务校准 → 对抗性评审 → 交付验证”三闸门流水线；Issue #412 提出 agent-governance 安全治理模式。
  https://github.com/anthropics/skills/issues/1385 ｜ /issues/412
- **Skill 编写最佳实践**：Issue #202 批评 skill-creator 像写给人看的开发文档，损害 token 效率（已 CLOSED）。
  https://github.com/anthropics/skills/issues/202
- **插件去重与元数据质量**：Issue #189（document-skills 与 example-skills 内容重复；👍9）、Issue #2064（description 只说做什么、不说何时用）。
  https://github.com/anthropics/skills/issues/189 ｜ /issues/2064

---

## 3. 高潜力待合并 Skills（活跃但尚未合并）

| PR | 内容 | 活跃信号 |
|---|---|---|
| #1980 | webapp-testing 移除 `shell=True`，修复命令注入 | 2026-11-01 仍在更新，安全问题优先级高 |
| #1792 | docx 将 LibreOffice 超时上报为错误并校验输出 | 2026-11-01 更新，属“静默成功”类关键缺陷 |
| #1997 | skill-creator 正确解析 YAML frontmatter 标量 | 作者同时提交了 docx 相关 Issue #2018，修复链路完整 |
| #1742 | mcp-builder 适配 mcp>=2 | 对应 Issue #1390，为真实 MCP 场景可用性所必需 |
| #525 | pyxel 复古游戏 Skill | 创建于 2026-03 仍更新至 11-01，社区长期关注 |
| #1977 / #1976 / #1975 | gerardrecinto 的小修三连 | 均带明确 “Fixes #xxxx”，合并阻力最低 |

链接：#1980、#1792、#1997、#1742、#525、#1977、#1976、#1975 均位于 `https://github.com/anthropics/skills/pull/<编号>`
其中 #1975：https://github.com/anthropics/skills/pull/1975

---

## 4. Skills 生态洞察

**社区最集中的诉求是“可信与可用”：一方面要求建立命名空间和分发层面的信任边界（#492、#228），另一方面要求修复官方核心 Skills 的评测、兼容与静默失败问题（#556、#1390、#1487），让 Skill 真正可被信任地触发和执行。**

---

# Claude Code 社区动态日报（2026-11-01）

## 今日速览

今日没有版本发布，社区讨论集中于 CLI/TUI 的可用性细节与成本控制：模型过度使用 Bash 工具（#19649，47 条评论、123 赞）仍是讨论热度最高的问题；同时，会话时间戳、隐藏内联 diff、提示词缓存过期导致的重算成本等需求持续活跃。PR 侧以文档与小修复的关闭为主，一个新的 PR 将 Issue 分诊与去重工作流迁移到 Claude Sonnet 5.5（#106583），值得关注。

## 版本发布

过去 24 小时没有新的 Releases。

## 社区热点 Issues

1. **#19649 [MODEL] 模型在应使用 Read/Grep 等内置工具时频繁调用 Bash（sed/grep）**
   讨论热度最高，47 条评论、123 赞，且标记为 has repro；这个问题涉及模型工具选择策略，直接影响工具权限与执行安全。
   https://github.com/anthropics/claude-code/issues/19649

2. **#13585 CLI 增加剩余配额信息访问**
   30 条评论、129 赞，是今日点赞数最高的需求。成本可见性也是开发者长期关注的核心需求。
   https://github.com/anthropics/claude-code/issues/13585

3. **#44763 在会话消息上显示时间戳（TUI）**
   41 条评论、97 赞。在监控长时间运行的后台 agent（如按 cron 轮询）时，无法定位消息时间是很实际的问题。
   https://github.com/anthropics/claude-code/issues/44763

4. **#37951 支持隐藏 Edit/Write 工具的内联 diff**
   35 条评论、112 赞。当对话流中 diff 输出过多时，可读性会明显下降，因此这是 TUI 交互优化的高赞诉求。
   https://github.com/anthropics/claude-code/issues/37951

5. **#14920 支持单独禁用单个插件 skill**
   20 条评论、100 赞，涉及 macOS；社区希望按技能粒度控制，而不是整体开关。
   https://github.com/anthropics/claude-code/issues/14920

6. **#66115 空闲超时后自动 compact，避免缓存过期成本**
   25 条评论。长时间运行测试后回到会话，提示词缓存已过期，会导致全量上下文重新计算，是明确的成本痛点。
   https://github.com/anthropics/claude-code/issues/66115

7. **#25045 允许 skill 以编程方式重命名会话**
   14 条评论、134 赞，是今日点赞数最高的 Issue；与 #33165、#40346（hooks/工具重命名）形成同一诉求集群，表明自动化工作流对会话标识管理的需求较强。
   https://github.com/anthropics/claude-code/issues/25045

8. **#33323 任务队列：排队多个 prompt 并顺序或并行执行**
   33 条评论，已被标记为 duplicate，说明这一需求已有其他追踪项，但社区关注度仍然很高。
   https://github.com/anthropics/claude-code/issues/33323

9. **#90708 桌面端恢复上下文用量指示器或使页脚组件可配置**
   18 条评论，涉及 Windows 平台。长时间 agent 会话中，上下文余量比 5 小时限额环更有决策价值。
   https://github.com/anthropics/claude-code/issues/90708

10. **#23384 提供禁用自动 Plan 工具调用的选项**
    11 条评论、40 赞。在不需要规划模式时，自动触发会增加额外步骤与成本。
    https://github.com/anthropics/claude-code/issues/23384

补充值得留意：**#36105 建议使用 `Assisted-by` 而非 `Co-authored-by` 作为 git commit trailer**（52 赞），涉及 AI 参与提交署名的社区规范。
https://github.com/anthropics/claude-code/issues/36105

## 重要 PR 进展

今日更新的 10 条 PR 中，8 条为 CLOSED 或文档类改动，1 条为 OPEN 的新变更；以下按重要性列出：

1. **#106583 [OPEN] 将 Issue 分诊与去重工作流迁移到 Claude Sonnet 5.5**
   三个工作流模型统一升级：`claude-issue-triage.yml`（`claude-opus-4-6` → `claude-sonnet-5-5`）、`claude-dedupe-issues.yml` 等。这是今日唯一的开放功能性变更。
   https://github.com/anthropics/claude-code/pull/106583

2. **#19867 [CLOSED] 修复 code-review 插件在新提交推送后不再复查**
   增加逻辑以判断自上次评论以来是否有新提交，并记录 `--force` 绕过方式。
   https://github.com/anthropics/claude-code/pull/19867

3. **#19866 [CLOSED] 修复 `/ralph-loop` 无参数时因 `set -u` 崩溃**
   对数组展开加默认空串，解决 `PROMPT_PARTS[*]: unbound variable`。
   https://github.com/anthropics/claude-code/pull/19866

4. **#32755 [CLOSED] 新增 edit-verifier 插件，在编辑后验证**
   针对 Edit 工具静默失败（空白不匹配或代码已被修改）后仍继续执行的问题。
   https://github.com/anthropics/claude-code/pull/32755

5. **#32756 [CLOSED] 新增 `/pattern-sweep` 命令，批量修复同类模式 bug**
   针对一次修复后搜索代码库中相似模式，避免逐个发现。
   https://github.com/anthropics/claude-code/pull/32756

6. **#32751 [CLOSED] 修复 hookify 中 stop/prompt 事件的字段映射**
   修正 `config_loader.py` 将事件映射到 `field='content'` 导致规则不触发的问题。
   https://github.com/anthropics/claude-code/pull/32751

7. **#40822 [CLOSED] 文档：新增 VS Code 扩展 “Not responding” 状态栏说明**
   解释正常 spinner 进度与无后端响应的告警状态。
   https://github.com/anthropics/claude-code/pull/40822

8. **#24360 [CLOSED] 文档：README 增加配置文件参考**
   说明配置层级与作用域优先级，以及 `~/.claude.json` 作为应用状态文件的定位。
   https://github.com/anthropics/claude-code/pull/24360

9. **#50672 [CLOSED] 文档：修正 CHANGELOG 2.1.111 条目中的 skill 名**
   `/less-permission-prompts` → `/fewer-permission-prompts`。
   https://github.com/anthropics/claude-code/pull/50672

10. **#44071 [CLOSED] 文档：README 标题 “Get started” 改为 “Get Started”**
    统一标题大小写规范。
    https://github.com/anthropics/claude-code/pull/44071

## 功能需求趋势

- **终端交互（TUI）可定制化**：时间戳（#44763、#30745）、隐藏内联 diff（#37951）、可配置完成动词（#52420）、LaTeX 渲染（#44479）——社区希望对 CLI 展示层拥有更细致、更细粒度的控制。
- **成本与配额可见性**：配额查询（#13585）、空闲自动 compact 防止缓存过期（#66115），成本控制从“事后抱怨”转向“事前可见、自动优化”。
- **会话生命周期自动化**：多条目（#25045、#33165、#40346、#15762、#58588）共同指向一个方向：由 skill、hooks、API 进行程序化重命名，而不是依赖手动 `/rename`，这体现出 agent 工作流对会话管理的自动化需求。
- **任务编排**：任务队列（#33323）与可编程 compact（#19877）表明用户希望在单会话内编排多步任务。
- **插件与 skill 粒度控制**：单独禁用 skill（#14920），反映插件生态扩张后对精细控制的需求。
- **模型行为与工具选择**：#19649 与 #23384 显示用户希望约束模型何时使用 Bash、何时自动触发 Plan。
- **桌面端与 IDE 集成**：桌面应用上下文和用量指示器（#90708、#80261）、VS Code 会话命名（#33165）。

## 开发者关注点

- **模型工具选择不够精准**：有复现步骤的 #19649 表明，模型在已有专用工具时仍走 Bash 路径，可能带来权限、审计与安全问题，且社区讨论最为激烈。
- **长时间运行会话的上下文管理**：缓存过期导致的全量重算、上下文余量不可见，是成本与效率的双重痛点。
- **输出可读性**：内联 diff 杂乱、缺少时间戳、难以追踪长任务进展，是高频反馈。
- **自动化工作流缺少程序化控制点**：会话重命名、prompt 排队、compact 触发均只能手动操作，难以嵌入 CI 或脚本。
- **静默失败风险**：edit-verifier 与 pattern-sweep 这两个 PR 从侧面反映，“编辑未生效却继续执行”和“同类 bug 未一次修完”是开发者担心的失败模式。
- **文档补全需求**：配置文件层级、VS Code 状态说明等文档类 PR 集中关闭，说明配置与排障文档仍存在缺口。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报 · 2026-11-01

## 今日速览

过去24小时无新版本发布。社区焦点集中在 **Windows 平台稳定性**与 **Computer Use（浏览器自动化）的 URL 识别失败**——两条相关 Issue 合计获得 73 条评论。同时，CI 侧因 BuildBuddy 凭证失效，连续多个 PR 将 Bazel 检查降级为“建议性”并暂停 Bazel 发布产物，改为仅发布 Cargo 产物，这可能会影响近期的构建与发布节奏。

---

## 版本发布

过去24小时内无新 Release，本部分省略。

---

## 社区热点 Issues（10 条）

1. **#51524 [Windows] Computer Use 卡在 get_window_state：无法确定当前浏览器 URL（Chrome / Edge）**
   创建 2026-10-07，评论 57。自 10 月 6 日起，原本可用的 Windows Computer Use 无法解析浏览器窗口状态，`sky.get_window_state` 会直接终止本轮。这是当日讨论热度最高的 Issue，反映 Computer Use 在 Windows 上出现了明显的回归。
   https://github.com/openai/codex/issues/51524

2. **#9634 [CLOSED] refresh token 已被使用，访问令牌无法刷新**
  评论 47。报告环境为 v0.88.0 / Pro / gpt-5.2-codex，已关闭但仍在持续更新，说明登录态刷新链路问题影响面较广，值得跟踪是否有后续回归。
   https://github.com/openai/codex/issues/9634

3. **#54532 [Windows][Computer Use] zh-CN 下 @oai/sky 0.7.8 的 document-role URL 识别失败**
   评论 16。中文 Windows 环境下，通过窄范围修正可恢复 Chrome / Edge，与 #51524 属于同一类故障，说明 URL 识别存在与语言/角色相关的分支问题。
   https://github.com/openai/codex/issues/54532

4. **#56660 [macOS Intel][VS Code] 26.1021.22027 报 renderer_ready_timeout**
   评论 15。同一扩展版本在 Intel Mac 上失败，回滚到 26.1007.21434 后正常。该问题与 #57026、#57422 同属 26.1021.22027 版本的问题簇，是当前最值得警惕的版本回归。
   https://github.com/openai/codex/issues/56660

5. **#57026 [IDE/Remote-SSH] 30s renderer_ready_timeout：二次方预加载扫描 + 3,203 个急切资源**
   评论 8。作者给出了量化根因与缓解后的测量结果，属于高质量的性能类 triage 报告，对修复 IDE 扩展启动超时直接有用。
   https://github.com/openai/codex/issues/57026

6. **#57422 [VS Code / code-server] 26.1021.22027 冻结整个 code-server 编辑器**
   评论 7。问题不止影响 Codex 视图，还会拖垮整个编辑器；稳定版与预发布版表现一致，旧版 26.908.40401 正常。
   https://github.com/openai/codex/issues/57422

7. **#58530 [enhancement][rate-limits] 请在 Plus 上保留 ChatGPT 与 Codex 独立用量额度**
   评论 7，👍 14（当日点赞最高）。社区对“合并限额”措辞表达担忧，属于产品策略层面的高关注反馈。
   https://github.com/openai/codex/issues/58530

8. **#58313 [Windows] Codex 无法将 xlsx / pptx 作为附件读取**
   评论 7。10 月 30 日更新后，附件发送持续转圈；日志显示 113 秒内对 `/backend-api/pages/creation-capabilities` 发起 322 次 GET，全部返回 200，但未见后续文件上传 POST，定位线索清晰。
   https://github.com/openai/codex/issues/58313

9. **#41708 [Android Remote] 主机轮次结束后消息队列卡死，恢复可能丢消息**
   评论 14。移动端队列可显示但未投递，且 Stop 控件一直显示为活动态，属于 Remote 跨端一致性的典型故障。
   https://github.com/openai/codex/issues/41708

10. **#50520 [Windows sandbox] `.sandbox-bin` 权限恢复为 Modify 后反复出现 helper_sandbox_lock_failed**
    评论 14。沙箱在命令执行前即失败，手动授予 SYSTEM/Administrators 完全控制可临时绕过，是 Windows 沙箱可用性的关键阻塞点。
    https://github.com/openai/codex/issues/50520

---

## 重要 PR 进展（10 条，均为 CLOSED，作者 copyberry[bot]）

1. **#58717 将 Bazel 检查降级为建议性，并暂停 Bazel 发布产物**
   原因：BuildBuddy key 被吊销。Bazel 相关检查不再阻塞 CI，发布仅保留 Cargo 产物，是当日对构建体系影响最大的一条。
   https://github.com/openai/codex/pull/58717

2. **#58727 语音发布构建改用本地 Bazel**
   将 Linux / macOS / Windows 语音发布步骤中的 `BUILDBUDDY_API_KEY` 置空，以绕过凭证不可用的问题。
   https://github.com/openai/codex/pull/58727

3. **#58719 将原生语音依赖接入完整 Rust CI**
   用 Bazel 构建 Linux GNU、macOS、Windows 的 x64/ARM64 原生语音 SDK 与运行时，再让 Cargo 任务消费产物；musl 构建另行处理。
   https://github.com/openai/codex/pull/58719

4. **#58722 为 TUI 后端会话增加命名与导航辅助**
   新增 `BackendSessions` 辅助方法：显示当前监听后端、查找首个监听后端、按注册顺序轮转。
   https://github.com/openai/codex/pull/58722

5. **#58720 在子代理选择器中优先展示待审批项**
   `/subagents` 将需要审批的线程置顶并标注 `(needs approval)`，默认选中第一个等待项，并在变化时刷新。
   https://github.com/openai/codex/pull/58720

6. **#58718 支持在 inset 区域内渲染 TUI 对话**
   将对话渲染拆分为准备、绘制、绘制后三步，并按给定边界处理转录换行、composer 布局与建议区。
   https://github.com/openai/codex/pull/58718

7. **#58716 支持 GNU screen 下的 OSC 52 剪贴板转发**
   当 `TMUX` 不存在时通过 `STY` 识别 GNU screen，用 DCS passthrough 包装 OSC 52，并按 252 字节分块。
   https://github.com/openai/codex/pull/58716

8. **#58714 代理中心任务在状态分组内按最近更新排序**
   未固定任务在各状态组内按更新时间倒序排列，清空搜索或状态筛选时也会重新排序。
   https://github.com/openai/codex/pull/58714

9. **#58713 从 TUI 会话启动中抽取“新会话采纳”逻辑**
   以 `PreparedFreshSession` 打包线程、配置与本地设置，并将激活逻辑移入 `adopt_fresh_session`。
   https://github.com/openai/codex/pull/58713

10. **#58727 / #58717 的关联影响**
    两者共同构成“BuildBuddy 撤权”后的应急路径：检查不阻塞、产物只发 Cargo。对下游依赖 Bazel 产物的使用者需留意。
    https://github.com/openai/codex/pull/58727

---

## 功能需求趋势

- **Computer Use / 浏览器自动化**：Windows 上 URL 识别失败（#51524、#54532）、浏览器宿主不可用（#56928）、macOS helper 进程泄漏（#29157）。这是当日最集中的故障主题。
- **IDE 扩展与 Remote 稳定性**：26.1021.22027 版本在 macOS Intel、Remote-SSH、code-server 三处同时出现 `renderer_ready_timeout` 或整体冻结（#56660、#57026、#57422）。
- **跨端 Remote（Android / iOS）**：消息队列卡死（#41708）、Stop 状态不一致（#55831）、自定义分区缺失项目（#42315）、VS Code 线程 writer 占用（#40973）。
- **Windows 桌面与沙箱**：沙箱锁失败（#50520）、设置项显示/开关不一致（#58201）、Office 附件发送转圈（#58258、#58313）。
- **用量与计费策略**：希望保留 ChatGPT 与 Codex 独立额度（#58530，👍 14）。
- **上下文与记忆**：实验性上下文管理中 notes/history 返回 404，`new_context` 可能丢弃任务状态（#43194）。

---

## 开发者关注点

- **平台回归集中在 Windows 与 IDE 扩展**：Computer Use、沙箱、附件、设置界面多条 Issue 都指向 Windows 桌面端；IDE 扩展则集中在单一版本 26.1021.22027，回滚是当前有效的临时方案。
- **认证与网络链路**：refresh token 重复使用（#9634）、capabilities 接口高频轮询但无后续上传（#58313），说明登录态刷新与能力查询链路需要收敛。
- **性能量化报告价值高**：#57026 给出二次方预加载扫描与 3,203 个急切资源的实测数据，是可直接驱动修复的 triage 样本。
- **CI/发布基础设施变动需关注**：BuildBuddy 凭证失效导致 Bazel 检查降级与产物暂停，短期构建行为可能变化。
- **产品预期管理**：#58530 的高点赞表明社区对“ChatGPT/Codex 是否合并限额”高度敏感，措辞层面的模糊也会引发讨论。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报 · 2026-11-01

## 1. 今日速览

今日发布一个 nightly 版本（v0.67.0-nightly.20261101），更新内容仅为版本号递增，无功能变更记录。社区讨论高度集中在 `area/agent` 领域：子代理（subagent）的可靠性问题——包括 MAX_TURNS 被误报为成功、通用代理挂起、Wayland 下浏览器子代理失败——构成今日最突出的议题群。PR 侧则见多项修复因长时间未响应而被 CLOSED，同时围绕超时配置、MCP 安全传输与终端状态上报出现新提案。

## 2. 版本发布

- **v0.67.0-nightly.20261101.g6814e00d6**：nightly 自动构建版本，数据中仅包含与前一 nightly 的 Full Changelog 链接，未列出具体变更条目。
  链接: https://github.com/google-gemini/gemini-cli/compare/v0.67.0-nightly.20261031.g6814e00d6...v0.67.0-nightly.20261101.g6814e00d6

## 3. 社区热点 Issues（10 条）

1. **#22323 [p1] Subagent 在 MAX_TURNS 后的恢复被报告为 GOAL 成功**（13 条评论，👍2）
   `codebase_investigator` 子代理在尚未完成任何分析前触达最大轮次限制，却返回 `status: "success"` 与 `Termination Reason: "GOAL"`。这属于错误状态掩盖中断，直接影响代理行为的可信度与评测准确性，是今日评论数最高的 Issue。
   链接: https://github.com/google-gemini/gemini-cli/issues/22323

2. **#21409 [p1] Generalist agent 挂起**（8 条评论，👍8）
   一旦 CLI 委派给通用代理便无限期挂起，简单操作如创建文件夹也会卡住，用户等待一小时后被迫取消。👍 数为本批最高，说明影响面广。
   链接: https://github.com/google-gemini/gemini-cli/issues/21409

3. **#19873 [p2] 零依赖 OS 沙箱 + 执行后意图路由，释放模型的 bash 偏好**（9 条评论）
   提案指出 Gemini 3 模型本质上是原生 bash 用户，倾向串联 `grep`/`cat`/`sed`/`awk`。该 Issue 试图把这一模型特性转化为可安全利用的架构方向，属于较大的设计级讨论。
   链接: https://github.com/google-gemini/gemini-cli/issues/19873

4. **#22745 [p2] 评估 AST 感知的文件读取、搜索与代码映射**（7 条评论）
   EPIC 级议题，探索 AST 感知工具能否用单次调用更精确地读取方法边界、减少轮次消耗。相关姊妹议题 #22746（平台方向）同日活跃。
   链接: https://github.com/google-gemini/gemini-cli/issues/22745

5. **#21968 [p2] Gemini 不主动使用 skills 与子代理**（7 条评论）
   用户反馈：除非显式指示，模型几乎不会在相关场景自行调用自定义 skills 或子代理。这关系到子代理体系的投资回报。
   链接: https://github.com/google-gemini/gemini-cli/issues/21968

6. **#22267 [p2] Browser Agent 忽略 settings.json 覆盖项（如 maxTurns）**（5 条评论）
   `AgentRegistry` 之外的 Browser Agent 完全无视全局/项目级配置覆盖，导致代理行为无法按项目约束。
   链接: https://github.com/google-gemini/gemini-cli/issues/22267

7. **#21983 [p1] browser 子代理在 Wayland 下失败**（4 条评论，👍1）
   Linux Wayland 环境下的浏览器子代理不可用。与 #22232（浏览器 profile 锁定恢复）同日活跃，浏览器代理在不同环境下的健壮性已成集中问题。
   链接: https://github.com/google-gemini/gemini-cli/issues/21983

8. **#22672 [p2] 代理应停止/抑制破坏性行为**（3 条评论，👍1）
   模型在复杂 git 操作中会使用 `git reset` 或 `--force`，而存在更安全的替代方案；数据库等资源维护同样存在风险。安全边界类议题，值得优先关注。
   链接: https://github.com/google-gemini/gemini-cli/issues/22672

9. **#24246 [p2] 工具数超过 128 时出现 400 错误**（3 条评论）
   当可用工具超过阈值时 CLI 直接报 400，期望代理能更智能地按已启用工具裁剪作用域。对重度用户与 MCP 多工具场景影响明显。
   链接: https://github.com/google-gemini/gemini-cli/issues/24246

10. **#22186 [p1] get-shit-done 输出 hook 导致崩溃**（3 条评论）
    在输出即将打印用户摘要时崩溃。p1 级别、可复现的崩溃问题，与 #22465（vite 创建卡在交互式提示）同属交互流程稳定性问题。
    链接: https://github.com/google-gemini/gemini-cli/issues/22186

## 4. 重要 PR 进展（10 条）

1. **#30082 [OPEN] feat(core): 新增 `model.requestTimeoutMs` 设置**（今日新建）
   允许上调 60 秒的 API 响应头超时；当前仅能通过 `DEFAULT_REQUEST_TIMEOUT` 实验标志修改，而在 Vertex AI / API key 认证路径下该标志从不被拉取。
   链接: https://github.com/google-gemini/gemini-cli/pull/30082

2. **#30071 [OPEN] 将 MCP OAuth 请求路由至安全 dispatcher**
   MCP OAuth 端点仅在检查时校验一次，元数据与注册请求随后走全局 dispatcher，存在 DNS rebinding 式校验缺口。
   链接: https://github.com/google-gemini/gemini-cli/pull/30071

3. **#30020 [OPEN] fix(core): 重试时丢弃失败尝试已流出的工具调用**
   流中重试时 `GeminiChat` 已产出失败分片，但只有成功尝试写入历史，导致前端收集到两次尝试的 `ToolCallRequest`。
   链接: https://github.com/google-gemini/gemini-cli/pull/30020

4. **#29918 [OPEN, p3] feat(cli): 向终端上报 working/blocked/idle 状态（OSC 7501）**
   在多标签会话场景下，支持该协议的终端可显示 CLI 所处状态（工作、阻塞于权限/提问/认证、完成或错误、空闲）。
   链接: https://github.com/google-gemini/gemini-cli/pull/29918

5. **#29919 [OPEN, p3] feat(cli): `--append-system-prompt` 追加而非替换系统提示**
   提供 `--append-system-prompt`、`--append-system-prompt-file` 及 `GEMINI_APPEND_SYSTEM_MD`，与现有替换式的 `GEMINI_SYSTEM_MD` 互补。
   链接: https://github.com/google-gemini/gemini-cli/pull/29919

6. **#29912 [OPEN] fix(core): 清理 web_fetch URL 的尾随标点与不配对括号**
   `parsePrompt()` 按空白切分后直接传入 `new URL()`，导致逗号分隔的 URL 列表被污染。
   链接: https://github.com/google-gemini/gemini-cli/pull/29912

7. **#29801 [CLOSED] fix(mcp): 让代理 fetch 与 Undici dispatcher 配套**
   修复 Node 26 下默认 fetch 路径提供 Undici 代理 dispatcher 时 HTTP MCP 连接无法初始化的问题。
   链接: https://github.com/google-gemini/gemini-cli/pull/29801

8. **#29800 [CLOSED] fix(core): 仅在 Auto 配额耗尽时跨模型层级回退**
   Auto 选中模型配额耗尽时立即尝试策略链中的下一模型，而非等待一小时重置提示。
   链接: https://github.com/google-gemini/gemini-cli/pull/29800

9. **#29762 [CLOSED, p1] fix(settings): 切换认证方式时保留磁盘上的设置修改**
   保存设置时仅将目标属性应用到当前磁盘内容，而不再用启动快照覆盖，避免丢失用户运行期间的编辑。
   链接: https://github.com/google-gemini/gemini-cli/pull/29762

10. **#29806 [CLOSED] fix(cli): 支持 WSL2 剪贴板显示服务器回退与非 PNG 图片格式**
    修复 `XDG_SESSION_TYPE` 未设置、剪贴板仅提供 `image/bmp` 环境下 `Alt+V` 粘贴图片失败的问题。
    链接: https://github.com/google-gemini/gemini-cli/pull/29806

> 备注：PR #29914 标题为 "Merge pull request #1 from google-gemini/main"，描述缺失，数据中无法确认其实际内容。

## 5. 功能需求趋势

- **子代理体系成熟度**：今日活跃 Issue 几乎全部带 `area/agent` 标签，议题覆盖子代理状态语义、是否被主动调用、配置覆盖、轨迹可见性（#22598 `/chat share` 展示子代理轨迹）、示例代理策展（#18283）与 Sprint 规划（#20195）。
- **工具调用与上下文效率**：AST 感知的文件读取/搜索/代码映射（#22745、#22746）旨在用更少轮次换取更高精度；同时 #24246 关注工具数量上限引发的失败。
- **沙箱与执行安全**：零依赖 OS 沙箱 + 意图路由（#19873）、抑制破坏性命令（#22672）、MCP OAuth 传输安全（#30071）共同构成一条安全主线。
- **模型感知的 CLI 能力**：`--append-system-prompt`、可配置请求超时、Auto 配额回退等提案反映出对"可调可控的模型接入层"的持续需求。
- **终端与跨环境适配**：OSC 7501 状态上报、WSL2 剪贴板、Wayland 浏览器代理等，表明多环境兼容是持续投入点。

## 6. 开发者关注点

- **最大痛点是子代理的"不可预测"**：挂起（#21409）、误报成功（#22323）、不主动启用（#21968）三类问题并存，开发者既无法信任其输出状态，也难以稳定触发其能力。
- **错误被静默或掩盖**：MAX_TURNS 被判为 GOAL 成功，将使任何基于退出状态的上层自动化与评测失真。
- **配置与控制权缺失**：settings.json 覆盖被浏览器代理忽略（#22267），超时仅能通过从不被拉取的实验标志调整（#30082 所述现状）。
- **破坏性操作与工具膨胀**：`git reset`/`--force` 的使用，以及工具数超限后的 400 错误，是两类高危边界。
- **交互流程卡死**：vite 创建卡在交互式提示（#22465）、hook 输出崩溃（#22186），属于"一次卡住即打断整个任务"的体验问题。

> 数据说明：以上内容仅基于提供的 GitHub 元数据与摘要，未对未给出细节的 Issue/PR 作补充推断。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报（2026-11-01）

## 1. 今日速览

今日发布两个修补版本（v1.0.106-1 / v1.0.106-2），集中在屏幕阅读器错误提示前缀、`/resume` 重复显示、混合换行符文件的 `apply_patch` 处理以及 `COPILOT_PROVIDER_GHES_HOST` 接受浏览器地址等细节修复。社区侧最热的仍是 BYOK/本地模型无法通过 `/model` 切换（#3709）与消息队列无法取消（#1857），两者同获 13 条评论、30+ 点赞。此外围绕 Remote Control（GitHub Mobile 远程会话）集中出现多条新 Issue，上下文窗口 rollover 失败（#5312）被重新提报，值得跟进。

## 2. 版本发布

**v1.0.106-2**
- `--screen-reader` 模式下，失败/被拒绝的工具调用、未知命令等错误与警告现在以 "Error:" 或 "Warning:" 开头，不再与普通消息混读，提升无障碍体验。
- `/resume <session-id>` 对已在后台运行的会话改为前置显示，不再重复展示。

**v1.0.106-1**
- `apply_patch` 在 LF/CRLF 混合换行文件中，保持未修改行的原有换行符，不再将整个文件重写为首行的换行风格。
- `COPILOT_PROVIDER_GHES_HOST` 现可接受实例的浏览器地址（如 `https://ghes.example...`）。

## 3. 社区热点 Issues（10 条）

1. **#3709 [OPEN] 允许 `/model` 在单会话内切换多模型（含 BYOK/本地提供商）** — 13 评论 / 34 👍。BYOK 模式被 `COPILOT_MODEL` 锁定单模型，`/model` 仅列出 GitHub 托管模型，无法选择本地服务模型。社区呼声最高。 [链接](github/copilot-cli Issue #3709)
2. **#1857 [OPEN] 允许取消或删除已入队消息** — 13 评论 / 33 👍。通过 `Ctrl+Q`/`Ctrl+Enter` 入队的消息在 agent 忙碌或 `/compact` 期间无法撤回，是高频交互痛点。 [链接](github/copilot-cli Issue #1857)
3. **#5312 [OPEN] 上下文窗口 rollover 仍失败：checkpoint.md 缺失在 1.0.105 复发** — 3 评论。原 #5205 以 completed 关闭但无关闭说明、无关联 PR/提交，作者以 1.0.105 复现后重新提报，涉及 issue 关闭流程的可追溯性问题。 [链接](github/copilot-cli Issue #5312)
4. **#4994 [CLOSED] 回归（1.0.88→1.0.89）：每个 ACP 会话都弹出 MCP OAuth 授权页** — 6 评论 / 8 👍。`~/.copilot/mcp-oauth-config` 中有效 token 仍被 401 拒绝，影响 ACP 自动化场景。 [链接](github/copilot-cli Issue #4994)
5. **#4537 [CLOSED] ACP 模式再次自动批准工具调用** — 3 评论 / 2 👍。自 1.0.81-1 起不再发送 `session/request_permission`，Shell 命令与文件增删无人值守执行，属 #845 的回归，安全敏感。 [链接](github/copilot-cli Issue #4537)
6. **#4560 [CLOSED] 模型 "auto" 始终以关闭 reasoning effort 运行** — 4 评论。`reasoningEffort` 恒为 null 且拒绝配置，影响推理质量预期。 [链接](github/copilot-cli Issue #4560)
7. **#4880 [CLOSED] ACP：将模型列表暴露为 `category:model` 配置项** — 3 评论 / 1 👍。`--acp` 下客户端无法列出或选择账号可用模型，`session/new` 仅返回 mode 与 allow_all。 [链接](github/copilot-cli Issue #4880)
8. **#2044 [CLOSED] ACP：`session/new` 返回错误的 currentModelId** — 3 评论。响应中的 `models.currentModelId` 与实际推理模型不符，恒报 claude-sonnet-4.6，影响客户端显示与选择。 [链接](github/copilot-cli Issue #2044)
9. **#2776 [OPEN] Shift+Enter 提交而非插入换行** — 8 评论 / 3 👍。输入体验的基础预期问题，讨论较久仍未定性为 bug 还是预期行为。 [链接](github/copilot-cli Issue #2776)
10. **#5313 [OPEN] GitHub Mobile（iOS）远程会话卡在 "Working"** — 0 评论（新提报）。与 #5316、#5315 同批出现，共同指向 Remote Control 在移动端的可用性短板。 [链接](github/copilot-cli Issue #5313)

其他值得留意：#738（跨产品工具名不一致，CLOSED）、#5112（终端 OSC 7501 程序状态支持）、#5314（armv7l/Termux 支持）、#5311（对已批准仓库根内绝对路径仍请求授权）、#5278（Windows/Edge Computer Use 因无法验证 URL 而 fail-closed）、#5274（区分内置命令与 skill）。

## 4. 重要 PR 进展

过去 24 小时内更新的 Pull Request 为 **0 条**，今日无 PR 可总结。上述 Issue 的修复目前仅能通过 v1.0.106 系列 release 观察，尚无公开 PR 关联信息可引用。

## 5. 功能需求趋势

- **模型与提供商灵活性**：`/model` 会话内切换、BYOK/本地提供商接入、ACP 模型列表暴露、auto 模型 reasoning effort 配置——多条高热度 Issue 指向同一方向。
- **ACP / 非交互集成**：授权静默解析、权限请求、模型信息正确性，构成一组集中的集成稳定性诉求。
- **Remote Control 与移动端**：GitHub Mobile 远程会话的嵌套会话展示、语音模式、iOS 卡死问题，是今日新增 Issue 最密集的方向。
- **交互与输入键盘**：消息队列取消、Shift+Enter 换行、内置命令与 skill 的视觉区分。
- **终端与无障碍**：OSC 7501 程序状态、屏幕阅读器提示（已在今日版本部分落地）。
- **平台覆盖与权限**：armv7l/Termux 支持、路径授权冗余、Windows/Edge Computer Use 的可访问性验证。

## 6. 开发者关注点

- **回归问题反复出现**：ACP 权限自动批准（#4537）、MCP OAuth 弹窗（#4994）均为旧问题回归，开发者对回归检测与关闭说明（#5312 指出 #5205 无关闭评论/关联提交）的透明度要求上升。
- **BYOK 与本地模型被边缘化**：单模型锁定与 `/model` 列表缺失，是当前点赞与讨论最集中的诉求。
- **交互可控性**：入队消息不可撤回、Shift+Enter 行为，直接影响日常使用节奏。
- **无障碍与文本保真度等细节质量**：今日两个 release 均属此类，说明此类修复正在被持续采纳。
- **移动端远程体验尚不成熟**：#5313 的卡死与 #5315/#5316 的功能请求同时出现，Remote Control 是当前体验短板所在。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 · 2026-11-01

## 1. 今日速览

今天过去 24 小时内没有发布新版本；社区讨论的核心问题仍是免费额度问题，主 Issue #59387 已经积累了 186 条评论。此外，多个与 Claude Agent 回退机制相关的问题在本日集中修复：服务器端拒绝回退导致 usage 重复计数、非流式回退导致工具步骤中断；CLI 在企业级 DPI 网络下因 TLS ClientHello 分片被丢弃而挂起，也是一个值得注意的高优先级问题。部分 V2 会话相关的缺陷（会话标题不生成、重启后历史丢失）已经关闭。

## 2. 版本发布

过去 24 小时内没有新的 Release。

## 3. 社区热点 Issues（10 条）

1. **#59387 免费层问题汇总主帖**（OPEN，186 评论，👍13）
   官方指定的免费层问题集中反馈帖，汇总了“Free usage exceeded”“Free usage limit reached”等提示信息。由于评论量极高，它说明免费额度的判定和重置逻辑仍是用户最主要的困扰来源。
   https://github.com/anomalyco/opencode/issues/59387

2. **#60399 CLI 在丢弃分片 TLS ClientHello 的网络上挂起**（OPEN，21 评论，👍3，已复现）
   当 ISP 的 DPI 丢弃或重置分片的 TLS ClientHello（后量子密钥共享）时，opencode 会在发送请求前挂起 120 秒以上，而同一网络下用 curl 请求则正常。该问题影响受限网络环境，并且已经复现，优先级较高。
   https://github.com/anomalyco/opencode/issues/60399

3. **#60792 Anthropic 服务器端回退导致 usage 重复累加**（CLOSED，已复现）
   启用 `server-side-fallback-2026-07-01` 后，每一次尝试都会产生一条 `usage.iterations`，导致下一步看到的 prompt 体量约为真实值的两倍。这直接影响上下文预算和费用统计。
   https://github.com/anomalyco/opencode/issues/60792

4. **#58176 V2 会话标题不再生成**（CLOSED，已复现）
   v2.1.3 新会话的 `title` 始终为 NULL，而同样配置的 v1.18.x 会自动生成标题；摘要指出，问题关联“没有自动触发”和“免费层拒绝”两个因素。该问题已关闭，值得关注修复是否覆盖免费层路径。
   https://github.com/anomalyco/opencode/issues/58176

5. **#60251 服务重启后既有会话丢失重启前历史**（CLOSED）
   会话仍出现在 `opencode session list` 中，但更早的历史不再可见。持久化可靠性是 V2 用户的信任基础。
   https://github.com/anomalyco/opencode/issues/60251

6. **#48588 托管 serve 滞留在客户端 cgroup 引发 OOM 杀循环**（OPEN，[2.0]）
   `serve --service` 以 `detached: true` 启动，但并未脱离客户端 cgroup；当客户端处于受限的 cgroup 内时，共享服务器会因为内存限制被反复 watchdog 终止。这是 Linux 部署场景下的架构级隐患。
   https://github.com/anomalyco/opencode/issues/48588

7. **#60243 压缩后请求携带无数据的 image parts**（CLOSED）
   历史中包含多张工具结果图片时，请求声明了 3 个 image_url 部分，但没有携带数据，严格的 OpenAI 兼容后端会直接拒绝。这影响自托管视觉模型用户。
   https://github.com/anomalyco/opencode/issues/60243

8. **#60912 scoop 安装下 `opencode update` 失败**（CLOSED）
   scoop 未被识别为安装方式，命令在检查“是否已是最新”之前就报错。这是 Windows 包管理体验中的常见问题。
   https://github.com/anomalyco/opencode/issues/60912

9. **#61053 TUI 终端面板在选择拖动时视口冻结**（OPEN，2026-11-01 新建）
   按住鼠标拖动选择时，滚轮既不滚动也不扩展选区，导致复制范围永远不超过一屏。这是 TUI 终端交互的可用性缺陷。
   https://github.com/anomalyco/opencode/issues/61053

10. **#39853 桌面宠物：自定义 AI 伴侣**（OPEN，9 评论）
    一个长期开放的功能请求，持续获得更新和讨论，反映社区对桌面端个性化和陪伴体验的兴趣。
    https://github.com/anomalyco/opencode/issues/39853

其他值得留意：**#56147**（主题列表在导航或过滤时即时切换主题，无法预览）、**#60891**（Ollama + Windows 下报“could not read OpenCode configuration”）、**#60271**（Windows Desktop 持续报 CERT_SIGNATURE_FAILURE）。

## 4. 重要 PR 进展（10 条）

1. **#60073 修复：运行中的终端不再被回收**（OPEN，Closes #48691）
   接替因自动清理而被关闭的 #48730，避免活跃终端被驱逐。
   https://github.com/anomalyco/opencode/pull/60073

2. **#61074 修复：复用 Console skill 下载并在下载失败时保留旧技能**（OPEN）
   此前每次配置变更或每个项目都会重复下载 Console skills，且下载失败会替换掉可用版本。这是 #60401 的后续改进。
   https://github.com/anomalyco/opencode/pull/61074

3. **#61073 修复：将 Claude Agent 请求标记为 opencode**（OPEN，Closes #61072）
   Agent SDK 会在 `claude` 上设置 `CLAUDE_CODE_ENTRYPOINT=sdk-ts`，该 PR 修正请求标识，便于统计与归因。
   https://github.com/anomalyco/opencode/pull/61073

4. **#61069 修复：关闭 Claude Agents 的拒绝回退**（CLOSED，Closes #60586）
   安全分类器在 Opus 5.5／Sonnet 5.5 等模型上标记请求时，会触发不需要的回退行为。
   https://github.com/anomalyco/opencode/pull/61069

5. **#61067 修复：关闭 Claude Agents 的非流式回退**（CLOSED，Closes #60975）
   流式响应中途失败时，Claude Code 会重试为非流式请求，导致行为不可预期。
   https://github.com/anomalyco/opencode/pull/61067

6. **#60978 修复：Claude 非流式回退时正确结束工具步骤**（CLOSED，Closes #60975）
   与 #61067 同源，解决回退时 `tool_use` 步骤未正常收尾的问题。
   https://github.com/anomalyco/opencode/pull/60978

7. **#61059 修复：限制 edit 行对齐的内存与耗时**（OPEN，Closes #60305）
   `alignLines` 构建 `(before+1)×(after+1)` 的 LCS 表，12,000 行匹配时约分配 576 MB，属于典型的性能与 OOM 风险修复。
   https://github.com/anomalyco/opencode/pull/61059

8. **#60788 修复：恢复未完成的会话执行意图**（OPEN，Closes #60596）
   `Session.prompt` 先写入持久 inbox，后续环节中断会丢失执行意图；该 PR 增加了恢复逻辑。
   https://github.com/anomalyco/opencode/pull/60788

9. **#61068 修复：服务重启后恢复聊天读取**（OPEN）
   受管服务重启会中断聊天元数据或 transcript 的 GET 请求，使 timeline 资源永久进入失败状态，聊天与草稿会隐藏，直到重开 Desktop。该 PR 保留 timeline 资源并重试。
   https://github.com/anomalyco/opencode/pull/61068

10. **#60879 功能：在步骤元数据中上报 Claude Agent 套餐用量**（CLOSED，Closes #60877）
    插件展示 Claude 订阅用量时，不再需要轮询 Anthropic，可直接从步骤元数据读取。
    https://github.com/anomalyco/opencode/pull/60879

其他提及：**#53156**（TUI v2 按步骤和轮次展示成本，已关闭）、**#53031**（支持带注释的 cli.jsonc 配置与热重载）、**#58292**（图片预览画廊导航，草稿待设计评审）。

## 5. 功能需求趋势

- **会话可观测性**：`#42498` 要求为 thinking、tool call、tool output 分别显示时间戳；`#61070` 要求在会话选择器中显示上下文大小，以区分标题相似的会话；`#53156` 已在 token 用量视图中加入按步骤和轮次的成本。
- **终端与 IDE 集成**：`#43758` 提出会话级终端，并把终端上下文可选地提供给模型；`#60073`、`#61053` 围绕终端生命周期和交互修复。
- **配置与自动化体验**：`#51844` 希望增加 todo 面板自动打开选项或键位；`#53031` 希望改用支持注释和热重载的 cli.jsonc。
- **桌面端个性化**：`#39853` 桌面宠物，长期开放并持续讨论。
- **本地模型接入**：`#60891` 反映 Ollama 在 Windows 上接入配置失败。

## 6. 开发者关注点

- **免费层机制是当前最大的信任负担**：主帖 #59387 有 186 条评论，并且 #60902 显示额度重置后免费模型仍被封锁，#58176 中免费层拒绝也会影响 V2 标题生成。配额判定、重置时序与错误提示需要统一。
- **V2 持久化与恢复可靠性**：会话历史重启丢失（#60251）、执行意图未恢复（#60788）、服务重启后聊天资源永久失败（#61068）指向同一类架构问题。
- **受限网络与企业环境**：TLS ClientHello 分片问题（#60399）与 Windows 证书签名失败（#60271）让这类用户无法使用产品。
- **模型供应商回退语义复杂**：Anthropic 的服务器端回退和非流式回退带来了 usage 计数错误和工具步骤中断；今日有 3 个 PR 集中在同一区。
- **性能与资源边界**：#61059 的 LCS 内存爆炸、#48588 的 cgroup 内存约束导致共享服务被反复终止，表明在大文件和受限容器下仍需加固。
- **安装与更新路径的覆盖**：scoop（#60912）、x86 AppImage 下载缺失（#60274）等分发细节频繁引发低级阻断。

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报 · 2026-11-01

> 数据来源：github.com/badlogic/pi（earendil-works/pi）。过去 24 小时无新 Releases；Issues 更新 29 条，本文取评论数最多的 20 条；PR 更新 7 条。

## 1. 今日速览

今日无新版本发布。社区焦点集中在 Windows 终端兼容性问题（OSC 颜色查询回复泄漏、pwsh/ConPTY 渲染错位、`git clean` 失败）、上下文用量统计失真与自动压缩失效，以及 pi-durable 的会话手递与删除能力。多条 Windows 相关 Issue 已有修复 PR 提交，其中 #10256 的修复 PR #11642 仍处于 Open 状态。

## 2. 版本发布

过去 24 小时无新 Release。

## 3. 社区热点 Issues（10 条）

1. **#10480 [已关闭] 直连 OpenAI 未识别手动 usage limit 重置**（21 评论 👍3）
   用户为 ChatGPT Pro 100 使用 banked reset 后，Pi 仍显示额度耗尽；临时方案是登出后用 openai-codex 重新登录。评论数最高，涉及计费与限额语义，影响面大。
   https://github.com/earendil-works/pi/issues/10480

2. **#10256 [开放，处理中] 终端颜色查询回复泄漏进提示词并触发外部编辑器**（20 评论 👍4）
   Windows mintty/ConPTY 下，启动时 OSC 颜色查询回复被写入提示输入框，并因 BEL 打开外部编辑器；0.99.x 受影响，0.87.1 正常。已标记 inprogress，社区讨论量仅次于 #10480。
   https://github.com/earendil-works/pi/issues/10256

3. **#10287 [开放] 可重试网络错误后 `getContextUsage()` 严重高估上下文**（6 评论 👍1）
   Pi 0.99.2 上一次可重试网络错误使统计从约 42k tokens 跳到 330,081。该失真会误导压缩决策，属核心运行时问题。
   https://github.com/earendil-works/pi/issues/10287

4. **#10885 [开放] 未识别 llama.cpp “Context size has been exceeded.”，自动压缩不触发**（6 评论 👍1）
   环境为 pi-coding-agent 1.2.0 + `openai-completions` 对接 llama-server（b11342），contextWindow 262144。影响本地推理用户，且错误未被识别时无法自愈。
   https://github.com/earendil-works/pi/issues/10885

5. **#8829 [开放] `wrapUIPromptContext` 用展开复制丢失 UI 原型方法**（5 评论）
   展开仅复制自有可枚举属性，Pi 自带 TUI/RPC UI 恰好是普通对象所以正常，类实例则失效。对扩展开发者有直接参考价值。
   https://github.com/earendil-works/pi/issues/8829

6. **#10971 [已关闭] codemode 语法高亮缓存复用提案**（5 评论）
   提议不再每次工具行变动都重高亮整段脚本，不涉及对外 API。属纯性能优化，已被关闭。
   https://github.com/earendil-works/pi/issues/10971

7. **#9262 [开放] find 工具对 Windows 分隔符 glob（`src\**\*.ts`）静默返回空**（5 评论）
   Agent 复制原生 Windows 路径模式时无报错也无结果，容易让模型误判文件不存在。
   https://github.com/earendil-works/pi/issues/9262

8. **#11527 [开放] Bedrock 每次请求都新建 `BedrockRuntimeClient`**（4 评论）
   `bedrock-converse-stream.ts` 在 `stream()` 内实例化客户端，导致每次调用新建凭据提供者与 HTTP/2 会话；SSO 配置下每次调用都要走认证，性能开销明显。
   https://github.com/earendil-works/pi/issues/11527

9. **#11557 [开放] pi-durable：在上下文上限处交接并继续运行**（3 评论）
   用户在 Cloudflare Durable Object 中运行 pi-durable 1.4.0，希望用满上下文而不压缩：临近上限时模型写交接笔记，在新上下文中续跑。代表一种替代自动压缩的工作流诉求。
   https://github.com/earendil-works/pi/issues/11557

10. **#11026 [开放] pi-durable：从存储中永久删除会话**（4 评论 👍4）
    提议 `harness.deleteConversation(id, ctx)`，运行中拒绝或先中止再删除条目。点赞数在 Issues 中并列最高，反映数据治理需求。
    https://github.com/earendil-works/pi/issues/11026

> 其他值得留意：#11597（Windows 上 `pi update` 的 `git clean -fdx` 失败，已关闭，修复 PR 已提交）、#11660（复制换行代码块粘贴为断裂命令，已关闭）、#11584（overlay 无法遮盖终端图片）。

## 4. 重要 PR 进展（7 条全部列出）

1. **#11642 [开放] fix(tui)：将迟到与无 header 的颜色回复挡在提示词之外**
   修复 #10256，并覆盖 #10362、#10742、#10717、#10970 以及 #10250/#10679 中的 DA1 后回复部分。与今日最热 Issue 直接对应，值得跟踪。
   https://github.com/earendil-works/pi/pull/11642

2. **#11648 [已关闭] fix(coding-agent)：git clean 失败时仍继续更新 git 包**
   关闭 #11597。Windows 上另一 Pi 会话占用扩展的原生模块时，`git clean -fdx` 返回 1 导致更新中止，此 PR 改为不中断流程。
   https://github.com/earendil-works/pi/pull/11648

3. **#10789 [已关闭] feat(session)：合并 session-JSONL 写入系统调用**
   SessionManager 初始创建与重写时把全部缓冲条目合并为一次写入（原先每条一次），追加仍保持同步。属于 I/O 性能优化。
   https://github.com/earendil-works/pi/pull/10789

4. **#11656 [已关闭] 启动时协调已变更的 pinned git SHA**
   修复 #10758：此前启动仅检查 checkout 目录是否存在，直接在 settings 中修改 SHA 后旧 checkout 仍被加载，直到执行 `pi update`。
   https://github.com/earendil-works/pi/pull/11656

5. **#11659 [已关闭] feat(ai)：向 qwen-token-plan-individual 添加 glm-5.3**
   将 `glm-5.3` 加入 Individual Token Plan 白名单，并覆盖 models.dev 上 team、CN、individual 的 low/high/max effort 档位；此前 team/CN 已获得该模型。
   https://github.com/earendil-works/pi/pull/11659

6. **#4037 [已关闭] fix：在旧式终端中处理 Shift+Enter**
   在已知终端中将旧式 SS3 M 视为 Shift+Enter，使其插入换行而非提交；附带编辑器/按键回归测试与终端配置文档。这是一个较早期的 PR（2026-04-30 创建），今日更新后被关闭。
   https://github.com/earendil-works/pi/pull/4037

7. **#11647 [已关闭] docs(coding-agent)：将外部限制列为已知问题并给出补救方案**
   把 tmux 与 Windows 指南中的外部限制重构为“Known issues”：`tmux.md` 的 tmux 3.6 颜色回复章节改为表格（问题、受影响版本、补救），`windows.md` 同样处理。
   https://github.com/earendil-works/pi/pull/11647

## 5. 功能需求趋势

- **Windows / 跨终端兼容性**：颜色查询回复泄漏（#10256）、glob 分隔符（#9262）、`git clean` 失败（#11597）、pwsh/ConPTY 加载行错位（#9583）、overlay 与终端图片（#11584）。这是本周期最集中的方向。
- **上下文管理**：用量统计失真（#10287）、llama.cpp 溢出未识别（#10885）、以及 pi-durable 的“交接而非压缩”方案（#11557），显示社区在探索自动压缩之外的策略。
- **pi-durable 能力扩展**：会话删除（#11026）、上下文交接（#11557）、MCP 扩展以向 Harness 注册 MCP 工具（#10837，已标记 no-action）。
- **扩展 API 与 codemode**：`user_bash` 记录命令文本（#11665）、codemode 顶层变量 `tools` 冲突（#11226）、语法高亮缓存（#10971）。
- **模型与 provider 支持**：glm-5.3 进入 Individual 套餐白名单（#11659）；Bedrock 客户端复用（#11527）。

## 6. 开发者关注点

- **Windows 体验仍是最大痛点**：多条高评论 Issue 集中于 mintty、ConPTY、pwsh，且部分问题在 0.99.x 引入、0.87.1 正常，存在回归风险。
- **静默失败难排查**：`find` 无结果（#9262）、自动压缩不触发（#10885）、`Models.refresh()` 在所有 provider 失败时仍返回空 errors（#11650），均缺少明确错误反馈。
- **同步/启动路径的健壮性**：pinned SHA 变更未被感知（#11656）、`git clean` 失败中断更新（#11597）、Bedrock 每请求新建客户端（#11527）。
- **TUI 细节影响实际工作**：复制换行代码块（#11660）、overlay 遮不住图片（#11584）、Rex 中运行状态不显示（#11519，已修复可用），直接影响日常使用。
- **扩展作者的可编程性需求**：希望控制会话中记录的命令文本（#11665）、期望类实例 UI 不被展开复制破坏（#8829）。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报 — 2026-11-01

## 1. 今日速览

今日发布 v0.26.5，核心变更为 Managed 模式新增带上限的 SQL 历史查询（本地 H2 与托管 MySQL），支持分页拉取近期消息与日志事务。CI 稳定性成为最突出议题：主分支 Managed Agent 门禁与 E2E 测试持续失败，且多个故障源于 runner 环境（缺 Node.js、磁盘耗尽）而非代码缺陷。社区侧则集中在托管/企业场景的配置可控性与安全边界问题。

## 2. 版本发布

**v0.26.5**（含 Qwen Code Desktop v0.26.5）
- feat(managed): 新增带上限的 SQL 历史查询，支持分页读取近期消息与日志事务（#15839）
- feat(generated-ui): 支持在卡片内继续对话
- 无已知破坏性变更

链接: https://github.com/QwenLM/qwen-code/pull/15839

## 3. 社区热点 Issues

1. **#14724 Main CI 失败：Managed Agent 门禁无匹配测试** — 138 条评论，自 10-19 持续至今，是当前评论量最高的议题，说明主分支门禁长期红灯已影响所有触发完整层级的 PR。链接: https://github.com/QwenLM/qwen-code/issues/14724
2. **#15173 Main CI 失败：E2E Tests（Linux sandbox:docker shard 1/1）** — 35 条评论，autofix/in-progress，E2E 基础设施稳定性问题。链接: https://github.com/QwenLM/qwen-code/issues/15173
3. **#15898 Managed Agent 托管进程故障门禁在 main 上不稳定** — P1，`postFailureLoads` 多次运行结果不一致，属"非单一 PR 引入"的间歇性失败，已 CLOSED。链接: https://github.com/QwenLM/qwen-code/issues/15898
4. **#9005 Anthropic 通道缺少 OpenAI 通道已有的流式安全保护** — P1，`anthropicContentGenerator` 组件问题，长期未解决（自 8 月），涉及内容生成核心链路。链接: https://github.com/QwenLM/qwen-code/issues/9005
5. **#13570 Auto mode 误拦截仅"提及" amend 字样的惰性文本** — P2 安全类，拦截规则误伤且无逃逸通道，影响正常 git 工作流。链接: https://github.com/QwenLM/qwen-code/issues/13570
6. **#12514 会话提交登记未覆盖所有可产生 commit 的路径与写法** — P2，导致误报"非本会话代理提交"，与 #12514/#12460 系列相关联，CLOSED。链接: https://github.com/QwenLM/qwen-code/issues/12514
7. **#13566 web-shell 审批卡未清理模型提供的旁支文本** — P2 安全类（模型输出 XSS 面），从 #13549 遗留的评审线程问题。链接: https://github.com/QwenLM/qwen-code/issues/13566
8. **#16005 CI 主机 ecs-qwen-hz6-18 缺少 Node.js** — 导致必检项 Lint & Static 无故变红，环境类缺陷的典型样本。链接: https://github.com/QwenLM/qwen-code/issues/16005
9. **#16003 CI runner 磁盘耗尽，RocketMQ broker 拒写、Java lane 无法创建临时目录** — 跨多个 runner 池复现，非代码缺陷。链接: https://github.com/QwenLM/qwen-code/issues/16003
10. **#16006 允许托管安装从设置中关闭 models.dev 目录刷新并遵循隐私退出** — P2，企业/隐私场景的明确诉求。链接: https://github.com/QwenLM/qwen-code/issues/16006

补充值得留意：**#14918** 托管请求失败后以裸红文本渲染、无请求 ID（可观测性）；**#15933** Windows 桌面从旧版本升级仍因 runtime-stop 修复前的旧二进制而失败（升级路径缺陷）；**#12505** 剪贴板图片粘贴在三条路径下静默失败。

## 4. 重要 PR 进展

1. **#16060 feat(desktop): 构建并发布 RPM 安装包** — 为 Desktop 发布流程加入 Fedora 44 与 RHEL 10 x64 RPM，并扩展 Linux 安装冒烟测试校验发行版自带 WebKitGTK。链接: https://github.com/QwenLM/qwen-code/pull/16060
2. **#16087 fix(channels): 允许请求发起人应答一次性工具权限** — 频道用户在直接与群聊中可对自己挂起的工具请求执行 `/approve` / `/deny`，审批绑定发送者。链接: https://github.com/QwenLM/qwen-code/pull/16087
3. **#14613 feat(cli): 通过用户级设置与环境变量启用 LSP** — 无需命令行 flag 即可开启实验性 LSP 代码智能服务，仅从 user/system/system-defaults 层读取。链接: https://github.com/QwenLM/qwen-code/pull/14613
4. **#15178 feat(agents): 默认后台执行可配置** — 新增 `agents.defaultBackground`（默认 true），设为 false 后顶层常规子代理内联返回结果。链接: https://github.com/QwenLM/qwen-code/pull/15178
5. **#15466 feat(serve): 新增用户级 Skill 激活路由** — `PUT /skills/:name/activation` 与批量接口（最多 100 个），作用于全工作区合并的 user 设置层。链接: https://github.com/QwenLM/qwen-code/pull/15466
6. **#14231 feat(models): 托管模型端点白名单与内置 auth-type 模型列表** — 新增 `model.allowedBaseUrls`，设置后模型注册表仅注册白名单内端点。链接: https://github.com/QwenLM/qwen-code/pull/14231
7. **#16073 fix(core): 松散拼写的 amend 提交使用 amend 增量** — 使 amend 范围识别器与另两个已支持松散 shell 写法的识别器对齐（控制流关键字、绝对 git 路径、`time` 前缀）。链接: https://github.com/QwenLM/qwen-code/pull/16073
8. **#14952 fix(core): 文件爬虫改用随包附带的 ripgrep** — 修复 `@` 文件检索依赖 PATH 上裸 `rg` 的问题。链接: https://github.com/QwenLM/qwen-code/pull/14952
9. **#16084 refactor(managed-agent): 抽离运行时执行分发器** — Managed Agent 运行时分发逻辑重构。链接: https://github.com/QwenLM/qwen-code/pull/16084
10. **#16043 fix(cli): 非 TTY stdin 超时时向 stderr 告警** — 为 `readStdin()` 增加 `warnOnTimeout`，在 `--prompt` / `-p` 两条非交互路径启用。链接: https://github.com/QwenLM/qwen-code/pull/16043

另：**#16054** 触摸设备抑制自动聚焦、**#15559**（已合入/CLOSED）将循环提醒投递结算移至模型接受边界。

## 5. 功能需求趋势

- **托管/企业可控性**：模型端点白名单（#14231）、关闭 models.dev 目录刷新并尊重隐私退出（#16006）、用户级 Skill 激活（#15466）——托管安装的配置与合规边界是当前最集中的功能方向。
- **会话与工作区管理**：per-session 工作目录共享同一工作区（#15316）、Agent 后台执行默认值可配（#15178）。
- **上下文与记忆性能**：`roadmap/context-performance` 标签下，自动召回 hook 上下文与本地记忆去重（#14089）。
- **IDE/工具链集成**：实验性 LSP 通过设置启用（#14613）是 IDE 方向集成的先声。
- **可观测性与错误呈现**：托管请求失败的可读错误与请求 ID（#14918）、CI 失败报告的可诊断性。

## 6. 开发者关注点

- **CI 基础设施稳定性是第一痛点**：门禁反复红灯、故障跨运行不稳定、runner 缺 Node.js、磁盘耗尽——大量维护精力消耗在非代码问题上，并直接阻塞 PR 合并。
- **安全策略误伤与逃逸通道缺失**：Auto mode 对惰性文本的拦截（#13570）、审批预览与模型文本的清理边界（#13566）显示安全规则在覆盖面上仍需精细打磨。
- **静默失败缺乏反馈**：剪贴板图片粘贴（#12505）、stdin 超时（#16043）等场景长期只在"无任何反馈"中失败。
- **升级与跨平台路径**：Windows 桌面从旧构建升级失败（#15933）、RPM 安装包补齐（#16060）反映跨平台发布与升级链路的成熟度需求。
- **长周期未修复的 P1**：#9005（Anthropic 流式安全）自 8 月悬挂，值得优先关注。

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI（Codewhale）社区动态日报 · 2026-11-01

## 1. 今日速览
今日无新版本发布，社区焦点集中在 0.10.3 的发布准备上。最严重的问题是 `main` 分支在自身 lint 策略下无法编译，导致所有 PR 的必需检查失败，外部贡献无法合并。与此同时，TUI 渲染（表格、行内代码、图片）、会话历史持久化与上下文 token 开销是讨论最密集的方向。

## 2. 版本发布
无。

## 3. 社区热点 Issues（10 条）

1. **#7148 main 无法编译，所有 PR 必需检查失败** — `PersistRequest::ClearCheckpoint` 被判为死代码，导致每次 PR 的必需检查在同一个错误上失败，外部贡献完全无法合并。这是当前最需优先处理的阻碍。
   https://github.com/codewhale-hq/Codewhale/issues/7148

2. **#5316 EPIC-005：TUI crate 拆分总任务**（34 条评论，全部 Issue 中最高）— 0.10.3 要求单个 crate 不超过 5 万行业务代码、目标约 1 万行；W2a 截止于 `995f2a88f9`。这是版本范围的核心结构性工作。
   https://github.com/codewhale-hq/Codewhale/issues/5316

3. **#7095 会话历史丢失**（11 条评论）— 报告者称 reset 保存检查点已落地（engine main `c4a4f42e9c`），reset 现在会先排队一次“保存后清除”的提交。数据丢失问题影响信任度，值得持续跟踪。
   https://github.com/codewhale-hq/Codewhale/issues/7095

4. **#7178 一次发送被回答两次** — 同一条用户消息以裸文本和带 `<turn_meta>` 两种形态各持久化一次，导致每次保存都会分叉出新的对话分支。与 #7095、PR #7180 同源，是持久化层的系统性问题。
   https://github.com/codewhale-hq/Codewhale/issues/7178

5. **#6969 延迟工具箱淘汰在 prompt 缓存下经济上净亏损** — 淘汰 `ToolActivationCache` 条目会触发全前缀重新预填充与写入溢价，还会留下永久过期的恢复说明，预算也不感知网络字节。对长会话成本影响直接。
   https://github.com/codewhale-hq/Codewhale/issues/6969

6. **#7172 每次续跑都重发完整 goal 快照** — 每次自动 goal continuation 都会把整份 `GoalSnapshot` 以格式化 JSON 作为新用户消息追加，长任务下上下文开销很大；同时呼吁向模型提供真实的上下文数字。与 #6991 方向一致。
   https://github.com/codewhale-hq/Codewhale/issues/7172

7. **#7179 自定义 openai-compatible 提供方的输出预算被目录上限截断** — qwen3.8-27b 被限制在 32K，而服务端接受 262K，推理模型因此返回空终止。新提交、仅 1 条评论，但影响自建端点用户。
   https://github.com/codewhale-hq/Codewhale/issues/7179

8. **#7142 实时消息窗口可在会话中途重新设置根节点** — 早期轮次变得无法访问，既没有衔接摘要也没有生命周期事件；报告称自动关闭的绕过逻辑已在 `7b54e7f5` 修复。
   https://github.com/codewhale-hq/Codewhale/issues/7142

9. **#6970 Windows 下 `/undo` 严重 bug** — TUI 提示文件改动已回退，但对话内容未同步回退。平台相关缺陷，涉及用户对撤销操作的基本信任。
   https://github.com/codewhale-hq/Codewhale/issues/6970

10. **#5587 死代码清理：移除 25 处模块级 blanket allow**（9 条评论）— 属于 0.10.3 清理验收项，与 #5316 的拆分工作并行推进。
    https://github.com/codewhale-hq/Codewhale/issues/5587

## 4. 重要 PR 进展（10 条）

1. **#7180 fix(session)：turn 元数据不同时仍保持历史匹配**（已关闭）— 针对同一消息两种持久化形态造成的历史不匹配，#7178 的对应修复。
   https://github.com/codewhale-hq/Codewhale/pull/7180

2. **#7181 fix(tui)：先解析表格单元格标记再换行**（已关闭）— 此前单元格按原始 markdown 换行，跨行断开的代码段、粗体或链接会丢失配对，反引号和星号直接显示出来。
   https://github.com/codewhale-hq/Codewhale/pull/7181

3. **#7184 fix(tui)：保留表格单元格行内代码中的空格**（已关闭）— #7181 之后单元格统一走段落包装，行首行尾空格被丢弃。
   https://github.com/codewhale-hq/Codewhale/pull/7184

4. **#7185 fix(tui)：在等长反引号序列处闭合行内代码**（开放）— 渲染器此前在下一个单个反引号处闭合，导致成对反引号的行内代码丢失内容。
   https://github.com/codewhale-hq/Codewhale/pull/7185

5. **#7182 fix(tui)：markdown 图片渲染为 alt 文本**（开放）— 图片走入链接分支时残留 `!`，带链接的徽章图片会在图片自身的 `]` 处被切断。
   https://github.com/codewhale-hq/Codewhale/pull/7182

6. **#7183 fix(catalog)：为不带厂商前缀的 `deepseek-v4.1-flash` 单独建行**（已关闭）— 自定义 openai-compatible 端点常按裸模型名配置，此前目录只有带前缀的行。
   https://github.com/codewhale-hq/Codewhale/pull/7183

7. **#7166 chore(deps)：toml 1.1.4 → 1.1.6**（已关闭，bot）
   https://github.com/codewhale-hq/Codewhale/pull/7166

8. **#7165 chore(deps)：htmd 0.5.5 → 0.5.6**（已关闭，bot）
   https://github.com/codewhale-hq/Codewhale/pull/7165

9. **#7160 chore(deps)：jsonwebtoken 10.4.0 → 11.1.0**（已关闭，bot，跨大版本）
   https://github.com/codewhale-hq/Codewhale/pull/7160

10. **#7161 chore(deps)：uuid 1.28.0 → 1.29.0**（开放，bot）
    https://github.com/codewhale-hq/Codewhale/pull/7161

## 5. 功能需求趋势

- **上下文与 token 经济性**：#6991 提出显著降低上下文开销的新方案，#6969 指出工具淘汰在缓存计费下反而更贵，#7172 要求停止重发完整 goal 快照——成本优化已成为主线议题。
- **提供方与模型目录支持**：#7085 请求内置 Runcrate 提供方，#7179 涉及自定义 openai-compatible 的输出预算，#7116 涉及 Ollama 模型目录解析，#7183 补充裸模型名行——多后端适配是持续需求。
- **TUI Markdown 渲染质量**：表格、行内代码、图片、链接的一组 PR（#7181–#7185）表明渲染保真度是当前密集打磨区。
- **发布与打包可靠性**：#7091 要求卸载在所有受支持安装方式下完整且可验证，属 0.10.3 必需验收项。
- **ACP 集成**：#6992 指出 `sandbox_mode`/`ask` 配置被忽略，ACP 全访问参数已在 `135319aa1a` 落地。

## 6. 开发者关注点

- **贡献流程阻塞**：`main` 的死代码 lint 错误让所有外部 PR 的必需检查都失败（#7148），这是社区参与度的直接瓶颈。
- **数据与状态可靠性**：会话历史丢失（#7095）、一次发送两次回复（#7178）、`/undo` 后对话不同步（#6970）、消息窗口重设根节点（#7142）共同指向持久化与状态机是缺陷高发区。
- **测试夹具的环境耦合**：#7174 指出 prompt 一致性测试在装有可选宿主工具的主机上必然失败，`host_probed_tools.golden.json` 需要处理。
- **行尾与文件写入细节**：#7070 反映 `write` 在明确要求 LF 时仍静默恢复 CRLF；报告称已在 `19d3178ee7` 加入 preserve/LF/CRLF 校验选项。
- **桌面端模型选择体验**：#7116 中 Ollama 的 “Default” 解析到 embedding 模型（nomic-embed-text），已安装的对话模型不列出。

*说明：数据来源标注为 github.com/Hmbown/DeepSeek-TUI，但材料中的链接与仓库标识均为 codewhale-hq/Codewhale，以上链接按材料原文保留。*

</details>

---
*本日报由 [agents-radar](https://github.com/boom7sss/agents-radar-personal) 自动生成。*