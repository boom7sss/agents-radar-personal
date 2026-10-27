# AI CLI Tools Community Digest 2026-07-11

> Generated: 2026-07-11 03:20 UTC | Tools covered: 9

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

## Cross-Tool Comparison

好的，作为AI开发者工具生态系统的高级技术分析师，我已审阅了2026年7月11日所有主流AI CLI工具的社区摘要。以下是根据您要求的格式生成的跨工具对比报告。

---

### AI CLI工具生态系统对比报告 (2026-07-11)

#### 1. 生态系统概述

当前AI CLI工具开发者生态展现出高度活跃与快速迭代的态势，各工具在功能上趋于“趋同进化”，均以Agent、MCP（模型上下文协议）、多模型支持为核心能力。然而，社区反馈的核心矛盾也从“功能缺失”转向了“成本控制”和“可靠性”：Agent递归导致的无底洞式token消耗、子Agent运行时的不确定性、以及Windows平台的体验短板，成为困扰所有工具的普遍性痛点。开源与社区驱动的特性（如OpenCode、Pi）带来了更快的功能迭代，但也伴随着更显著的稳定性挑战。

#### 2. 活动对比

| 工具名称 | 今日问题 (Hot Issues) | 今日PR进展 | 发布状态 | 备注 |
| :--- | :--- | :--- | :--- | :--- |
| **Claude Code** | 10 | 6 | 已发布 (v2.1.207) | 社区讨论热度最高，Bug严重性突出 |
| **OpenAI Codex** | 10 | 10 | 已发布 (v0.145.0-alpha.3 & .4) | 讨论集中在模型级Bug，PR合并活跃 |
| **Gemini CLI** | 10 | 10 | 无新版本 | 安全问题（PR）与Agent挂起（Issue）是关注焦点 |
| **GitHub Copilot CLI** | 10 | 1 | 已发布 (v1.0.71-0) | 功能开发放缓，社区集中于Bug报告 |
| **Kimi Code CLI** | 0 | 4 | 无新版本 | 社区相对平静，专注于Web UI打磨 |
| **OpenCode** | 10 | 10 | 无新版本 | 功能开发活跃，Provider兼容性问题突出 |
| **Pi** | 10 | 10 | 无新版本 | 特性开发（如Ultra推理）与Bug修复并行 |
| **Qwen Code** | 10 | 10 | 已发布 (v0.19.9 & nightly) | 功能迭代快，社区活跃于新特性讨论 |
| **DeepSeek TUI** | 10 | 10 | 无新版本 | v0.8.68版本正在密集测试与修复中 |

**分析**:
- **社区活跃度**: Claude Code、OpenAI Codex 和 Gemini CLI 的Bug讨论热度最高，问题触及核心功能与成本。
- **开发速度**: Qwen Code 和 OpenCode 在功能和PR上表现最为活跃，迭代迅速。DeepSeek TUI 虽无发布，但PR合并密集，处于发布前冲刺阶段。
- **稳定性风险**: Claude Code 的多个关键Bug（如无限递归、磁盘写满）影响严重，需高度关注。

#### 3. 共享功能方向

以下需求跨工具出现，反映出开发者社区的普遍诉求：

- **模型路由与切换**: 所有工具都有要求支持在单个会话内切换模型，或为子Agent指定不同模型的强烈呼声（Claude Code #69238, OpenAI Codex #14039, Copilot CLI #3709, DeepSeek TUI #3969）。
- **Agent成本控制与中断**: 核心痛点。多个社区用户报告Agent递归导致token爆炸（Claude Code #68110, OpenAI Codex #31814），并要求提供任务Kill开关、资源上限和后台任务管理（Claude Code #75314, Gemini CLI #28316）。
- **Windows支持**: 几乎所有工具在Windows上都有重大体验问题，如控制台闪烁、Shell挂起、TUI渲染错误（Claude Code #14828, OpenAI Codex #20214, Copilot CLI #4069, Pi #6300, OpenCode #36350）。
- **子Agent行为可靠性**: 子Agent在执行成功判断、工具调用循环、模型继承等方面存在普遍性问题（Gemini CLI #22323, Qwen Code #5970, Kimi CLI #2489, Pi #6520）。
- **MCP与OAuth集成**: 多个社区提到MCP服务器认证、OAuth流程不可靠（Copilot CLI #4089, Qwen Code #6639, OpenAI Codex #31359）。

#### 4. 差异化分析

尽管功能趋同，各工具在定位和实现上存在显著差异：

| 维度 | Claude Code | OpenAI Codex / Copilot CLI | Gemini CLI | OpenCode / Qwen Code | Pi / Kimi Code |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **核心焦点** | 大型、复杂、多步骤工作流，自动化（Auto mode） | 与自身模型生态深度绑定，强调IDE集成 | 安全（A2A协议）、高度可观测性、工程化 | 开源、多提供商兼容性、Web UI现代化 | 插件化、定制化、特定模型特性支持 |
| **目标用户** | 需要强大自动化能力的高级开发者 | OpenAI/GitHub生态用户，注重开箱即用 | 企业级、对安全合规有高要求的团队 | 社区驱动、寻求最大灵活性的用户 | 追求最新模型能力、喜欢DIY的发烧友 |
| **技术方法** | 软性、基于LLM的功能（如Advisor） | 硬编码模型特性（如推理token剪裁） | 强类型、基于Rust系统编程、严格测试 | TypeScript/前端技术驱动，活跃的社区PR | 快速跟进上游模型API变更、注重扩展性 |

**关键差异点**:
- **模型集成度**: OpenAI Codex 和 Copilot CLI 与自家模型深度集成，但也因此受制于模型层的Bug（如推理token剪裁）。Claude Code 和 Qwen Code 则在多模型/提供商支持上更灵活。
- **安全性**: Gemini CLI 在PR层面显示出对安全（如路径穿越、prompt注入）的最高重视，而其他工具目前仍主要专注于功能实现。
- **社区驱动性**: OpenCode 和 Pi 的活跃社区通过大量PR直接影响了产品方向，体现了开源的力量。Kimi Code 则显示出相对更“自上而下”的开发模式。

#### 5. 社区动量与成熟度

- **高动量、快速迭代**: **Qwen Code** 和 **OpenCode** 表现出极高的开发活性，几乎每天都有新功能和重要修复。**DeepSeek TUI** 和 **Pi** 也处于高度活跃期，版本发布前冲刺。
- **高社区热度、问题积累**: **Claude Code** 的社区参与度极高，但大量高赞Bug（如无限递归、插件失效）长期未解，表明其开发资源可能跟不上社区增长，**成熟度受到质疑**。
- **稳定但面临挑战**: **OpenAI Codex / GitHub Copilot CLI** 作为成熟商业产品，拥有稳定的用户群和发布节奏，但近期Windows性能和模型级Bug（特别是推理token剪裁）导致了不小的负面影响。
- **企业级稳健**: **Gemini CLI** 的社区讨论更侧重于工程化和安全性，Bug报告质量较高，开发团队响应积极，显示出企业级产品的稳健性。
- **小清新但专注**: **Kimi Code** 社区最小，但关注的Bug解决得很快（如会话列表和soul层Bug），显示出其开发团队对有限问题的快速响应能力。

#### 6. 趋势信号

从社区反馈中，可以洞察以下行业趋势，对开发者具有参考价值：

1.  **从“单次对话”到“长期Agent”的转向失败**: 尽管工具们都推出了多步骤Agent功能，但“Agent无法停止”、“无限递归”、“状态丢失”等高频问题表明，将Agent从一次性对话任务扩展到可管理的长期运行实体，是当前生态系统中最重大且未解决的根本性挑战。**开发者应谨慎在关键生产流程中部署多步骤自动化Agent**，并优先寻找具备强制资源限制和中断功能的工具。

2.  **模型能力成为双刃剑**: 推理能力更强的模型（如GPT-5.6 Sol）带来了新的Bug（如推理token剪裁、子Agent继承模型错误），表明模型层的快速迭代正给工具层带来持续的适配压力。**技术选型不应只看模型API的速度，更要看工具对其异常行为的处理能力**。

3.  **从“代理工具”到“开发基础设施”的演进**: 对MCP、OAuth、LSP支持、多工作区、会话持久化、安全审计的需求，表明AI CLI工具已不再只是“聊天机器人”，而是正在演变为开发流程的核心基础设施。**这意味着它们的稳定性、安全性和可观测性将直接影响开发效率**。

4.  **Windows支持是大众化普及的最后一道坎**: 几乎所有高端用户都在Linux/macOS，但工具要接入更广泛的企业开发环境，Windows支持是不可或缺的。当前普遍存在的Windows兼容性问题，是这些工具从“极客玩物”迈向“企业标配”的关键阻碍。

5.  **“成本感知”成为功能特性**: 多个社区明确提出需要“成本控制”、“Token使用预算”和“Kill开关”等功能。这表明开发者已从追求模型效果，转向在效果与成本之间寻求平衡。**将成本感知作为一等设计原则，将是AI开发工具下一个竞争前沿**。

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
*Data snapshot: 2026-07-11 | Source: github.com/anthropics/skills*

---

## 1. Top Skills Ranking

### 1.1 Document Typography Skill (PR #514)
**Functionality:** Prevents orphan word wrap, widow paragraphs, and numbering misalignment in AI-generated documents. Targets typographic defects that occur universally across Claude's document output.

**Discussion highlights:** The community recognized a high-frequency pain point — typographic polish is rarely requested explicitly but consistently degrades output quality. Discussion centered on whether the skill should be default-enabled for all document generation tasks.

**Status:** Open | [View PR](https://github.com/anthropics/skills/pull/514)

---

### 1.2 Self-Audit Skill (PR #1367)
**Functionality:** A two-stage quality gate: mechanical file verification (every claimed output exists) followed by a four-dimension reasoning audit prioritized by damage severity. Designed as universal — works across any project, stack, or model.

**Discussion highlights:** The most recent high-activity PR. Community debate focused on whether the four-dimension audit introduces unacceptable latency for real-time coding sessions. The author defended the prioritization model as necessary for production safety.

**Status:** Open (updated 2026-07-02) | [View PR](https://github.com/anthropics/skills/pull/1367)

---

### 1.3 Testing Patterns Skill (PR #723)
**Functionality:** Comprehensive testing coverage across the full stack — unit testing (AAA pattern), React component testing (Testing Library), integration testing, E2E testing, and testing philosophy (Trophy model vs. pyramid).

**Discussion highlights:** Strong interest in the Trophy model framing. Reviewers requested additional coverage for mocking strategies and snapshot testing trade-offs.

**Status:** Open (updated 2026-04-21) | [View PR](https://github.com/anthropics/skills/pull/723)

---

### 1.4 ODT Skill (PR #486)
**Functionality:** Creates, fills, reads, and converts OpenDocument Format files (.odt, .ods). Includes template filling and ODT-to-HTML conversion. Trigger keywords: ODT, ODS, ODF, OpenDocument, LibreOffice.

**Discussion highlights:** Community interest from organizations using LibreOffice in enterprise environments. Some concern about ODF specification complexity and whether the skill handles embedded images and styles correctly.

**Status:** Open (updated 2026-04-14) | [View PR](https://github.com/anthropics/skills/pull/486)

---

### 1.5 Quality & Security Analyzer Meta-Skills (PR #83)
**Functionality:** Two meta-skills: `skill-quality-analyzer` (evaluates Structure & Documentation, Triggering Accuracy, Instruction Clarity, Robustness, Example Quality — five dimensions at 20% each) and `skill-security-analyzer` (detects prompt injection, data exfiltration, sandbox escape patterns, permission overreach, dependency risks).

**Discussion highlights:** The highest-earliest traction PR. Community feedback requested clearer scoring thresholds for the quality analyzer and expanded injection pattern coverage for the security analyzer. Both address a clear meta-need: evaluating the skills ecosystem itself.

**Status:** Open (updated 2026-01-07) | [View PR](https://github.com/anthropics/skills/pull/83)

---

### 1.6 SAP-RPT-1-OSS Predictor Skill (PR #181)
**Functionality:** Integrates SAP's open source tabular foundation model for predictive analytics on SAP business data. Targets the enterprise analytics use case.

**Discussion highlights:** Specialized enterprise interest. Discussion focused on skill size constraints given the model integration instructions and whether the skill should defer to external APIs instead of embedding guidance.

**Status:** Open (updated 2026-03-16) | [View PR](https://github.com/anthropics/skills/pull/181)

---

### 1.7 Color Expert Skill (PR #1302)
**Functionality:** Self-contained color expertise covering naming systems (ISCC-NBS, Munsell, XKCD, RAL, Ridgway, CSS), color space selection tables (OKLCH for scales, OKLAB for gradients, CAM16 for perception), and accessibility guidance.

**Discussion highlights:** Well-received for its compact, decision-table approach. Minimal controversy — the skill's narrow scope and clear reference format were praised as a model for future single-domain skills.

**Status:** Open (updated 2026-06-12) | [View PR](https://github.com/anthropics/skills/pull/1302)

---

## 2. Community Demand Trends

### 2.1 Skill-Creator Tooling Reliability (Dominant Trend)
The single most-discussed topic across both PRs and Issues is **skill-creator infrastructure** — specifically, the `run_eval.py` trigger detection system. Issue #556 ("claude -p never triggers skills/commands") has 12 comments and 7 upvotes, with 10+ independent reproductions. Stacked PRs (#1298, #1099, #1050, #1323, #1261, #362, #361, #539) all target various aspects of this pipeline: Windows compatibility, UTF-8 handling, YAML parsing, and file isolation. The community is effectively blocked from optimizing skill descriptions until this pipeline is reliable.

### 2.2 Security & Trust Boundary Governance
Issue #492 (34 comments, the most-commented issue) reveals deep concern about community skills distributed under the `anthropic/` namespace. The community wants **namespace integrity verification** and permission-scope transparency. This is the most emotionally charged topic — directly about trust in the ecosystem.

### 2.3 Enterprise Sharing & Distribution
Issue #228 (14 comments, 7 upvotes) requests org-wide skill sharing in Claude.ai without manual file transfer. This maps to a broader demand for **skill distribution infrastructure** — skills as shareable, versioned artifacts rather than local files.

### 2.4 Multi-Platform Compatibility
Issues #29 (Bedrock), #1061 (Windows native), and #1175 (SharePoint security) indicate the community wants skills to work across **Claude Code, Claude.ai, AWS Bedrock, and enterprise SaaS integrations**. The Windows-specific subprocess and encoding bugs in the skill-creator toolchain (Issue #1061, 3 comments) remain a blocker for a significant user segment.

### 2.5 Conceptual / Meta Skills
Issues #412 (agent governance), #1329 (compact symbolic notation for agent memory), and #1385 (reasoning quality gate pipeline) show demand for **agent behavior governance skills** — not just task-specific instructions, but patterns for how Claude should manage its own reasoning, memory, and safety constraints. This is an emerging category distinct from technical or document skills.

---

## 3. High-Potential Pending Skills

These open PRs have active discussion and are likely to merge in the near term:

| PR | Skill | Key Merit | Barrier to Merge |
|---|---|---|---|
| [#1367](https://github.com/anthropics/skills/pull/1367) | Self-Audit | Universal quality gate; solves a real delivery-risk problem | Latency trade-off debate; integration with existing review workflows |
| [#723](https://github.com/anthropics/skills/pull/723) | Testing Patterns | Comprehensive stack coverage; fills a clear gap | Needs additional mocking strategies and snapshot guidance |
| [#514](https://github.com/anthropics/skills/pull/514) | Document Typography | Solves a universal, silent quality defect | Should it be default-on? Trigger scope definition |
| [#1298](https://github.com/anthropics/skills/pull/1298) | skill-creator fix (run_eval) | Critical bugfix — unblocks all description optimization | Multiple overlapping fix PRs need consolidation |
| [#1261](https://github.com/anthropics/skills/pull/1261) | skill-creator fix (file isolation) | Prevents parallel eval sessions from corrupting live projects | Testing across concurrent worker scenarios |
| [#1302](https://github.com/anthropics/skills/pull/1302) | Color Expert | Clean, single-domain design | Low risk — likely to merge next |
| [#1323](https://github.com/anthropics/skills/pull/1323) | skill-creator fix (trigger detection) | Fixes false-negative trigger recognition | Overlaps with #1298; needs coordination |

The **skill-creator fix PRs** (#1298, #1261, #1323, #1099, #1050) form an interdependent cluster — they collectively fix the same broken pipeline (run_eval trigger detection on Windows, file isolation, subprocess pipe handling). The community and maintainers would benefit from merging these as a coordinated set or consolidating into a single PR.

---

## 4. Skills Ecosystem Insight

**The community's most concentrated demand is for reliable skill-development infrastructure — specifically, fixing the skill-creator evaluation pipeline so that description optimization actually works — followed by trust-boundary governance to prevent namespace impersonation, and enterprise-grade sharing mechanisms to make skills distributable assets rather than local files.**

---

# Claude Code Community Digest — 2026-07-11

## Today’s Highlights
A new patch (v2.1.207) broadens Auto mode to Bedrock, Vertex AI, and Foundry without the opt‑in flag while fixing a long‑standing terminal freeze during streaming of dense output. The community remains acutely focused on agent‑related cost blowouts (recursive sub‑agents, stuck background tasks) and persistent Windows compatibility gaps, with the top three bugs alone accumulating over 130 comments and 109 reactions.

## Releases

### [v2.1.207](https://github.com/anthropics/claude-code/releases/tag/v2.1.207)
- **Auto mode** is now available on Bedrock, Vertex AI, and Foundry **without** the `CLAUDE_CODE_ENABLE_AUTO_MODE` environment variable. Users who prefer to disable it can set `disableAutoMode` in their settings.
- **Fixed**: terminal freezing and keystroke lag when streaming responses containing very long lists, tables, or paragraphs.

## Hot Issues (10 noteworthy)

1. **[#69238 – No response from API when Advisor is triggered](https://github.com/anthropics/claude-code/issues/69238)**  
   Using Sonnet as the base model, the Advisor (Opus 4.8) fails with a “No response from API” error, forcing a 2m25s retry loop. 47 comments, 76 👍 — the highest engagement on the board.  
   *Why it matters*: The Advisor is a core feature for model routing; this bug effectively breaks multi‑model workflows for many users.

2. **[#74649 – Cowork not working on Windows 11 Pro (missing HCS services: vfpext)](https://github.com/anthropics/claude-code/issues/74649)**  
   Cowork fails entirely on Windows 11 Pro due to missing Hyper‑V Container Services. 43 comments, 0 👍 (early report).  
   *Why it matters*: Windows users cannot use Cowork, a flagship collaborative feature, without a workaround for the missing HCS component.

3. **[#14828 – Console window flashing when executing tools on Windows](https://github.com/anthropics/claude-code/issues/14828)**  
   A long‑standing (Dec 2025) visual glitch where a console window flashes briefly on every tool execution. 40 comments, 33 👍.  
   *Why it matters*: Polished DX is essential for Windows adoption; this detracts from an otherwise smooth experience.

4. **[#6305 – Pre/PostToolUse hooks not executing](https://github.com/anthropics/claude-code/issues/6305)**  
   Hooks defined in `settings.local.json` are silently ignored on macOS. 34 comments, 16 👍.  
   *Why it matters*: The hook system is a critical extension point for security‑guidance, custom validators, and CI integration. Silent failures erode trust.

5. **[#10065 – Long multi‑step tasks dropped/reverted without warning](https://github.com/anthropics/claude-code/issues/10065)**  
   Claude Desktop spontaneously discards multi‑step task progress on Windows. 23 comments, 10 👍.  
   *Why it matters*: Loss of work during a long session is a productivity disaster; users demand reliable state management.

6. **[#68110 – Sub‑agents recursively spawn unbounded child agents, causing exponential token burn](https://github.com/anthropics/claude-code/issues/68110)**  
   A `general‑purpose` sub‑agent can itself use the `Agent` tool, leading to an unbounded recursion tree and massive token consumption. 10 comments, 8 👍.  
   *Why it matters*: Direct cost impact — users report thousands of dollars in unexpected token usage before manual intervention.

7. **[#41737 – Task output files grow unboundedly, filling entire disk (278 GB in minutes)](https://github.com/anthropics/claude-code/issues/41737)**  
   Intermittent bug where `/private/tmp/claude...` files balloon until disk exhaustion. 7 comments, 1 👍.  
   *Why it matters*: Severity: Critical. Can bring a developer machine to a halt with no warning.

8. **[#66269 – CJK text mojibake when copying terminal output with no‑flicker/fullscreen renderer](https://github.com/anthropics/claude-code/issues/66269)**  
   Copying CJK (Chinese) text to the clipboard produces garbled characters even though rendering is correct. Defaulting to `"tui": "default"` avoids the issue. 6 comments.  
   *Why it matters*: Blocks international users from using the recommended fullscreen renderer.

9. **[#66005 – `--resume` drops the session’s `--effort` level, invalidating prompt cache](https://github.com/anthropics/claude-code/issues/66005)**  
   Resuming a session loses the effort parameter, causing a full cache miss and extra cost. 6 comments, 1 👍.  
   *Why it matters*: Breaks prompt caching economics for users who rely on `--resume` in long editing sessions.

10. **[#75314 – 10 background Agent tasks stuck running for 34+ hours, no way to cancel, burned ~1M tokens](https://github.com/anthropics/claude-code/issues/75314)**  
    Background tasks never terminate and cannot be cancelled, consuming tokens indefinitely. 5 comments.  
    *Why it matters*: Direct cost and resource waste; users need ability to kill runaway agents – currently absent.

## Key PR Progress (6 PRs in last 24h)

1. **[#41447 – feat: open source claude code ✨](https://github.com/anthropics/claude-code/pull/41447)**  
   Community PR that attempts to open‑source the Claude Code codebase (closes several longstanding issues). Still open after months; indicates strong community desire for transparency.

2. **[#76475 – Flag innerHTML/outerHTML += append sink in security‑guidance](https://github.com/anthropics/claude-code/pull/76475)**  
   Fixes a regex in `security‑guidance` that missed `innerHTML +=` patterns – a common XSS sink. Improves detection coverage for client‑side injection.

3. **[#76394 – Add Claude Code Launcher – Windows CLI Application](https://github.com/anthropics/claude-code/pull/76394)**  
   A full‑featured PowerShell launcher with 14 interactive options, aimed at simplifying Windows onboarding. Community‑driven effort to improve Windows parity.

4. **[#76298 – docs: document Remote Control background‑task panel (#75884)](https://github.com/anthropics/claude-code/pull/76298)**  
   Updates documentation for the web/mobile background‑task panel and sync behavior introduced in v2.1.205. Relevant to users of Remote Control.

5. **[#76289 – examples/hooks: demonstrate compound‑command pre‑flight with deny‑and‑steer](https://github.com/anthropics/claude-code/pull/76289)**  
   Extends the Bash validator example to detect command chaining (`;`, `&&`, `||`), pipelines, and active command substitution – a practical security improvement.

6. **[#76274 – security‑guidance: resolve review paths against repo root and harden findings array contract](https://github.com/anthropics/claude-code/pull/76274)**  
   Fixes path resolution in security‑guidance reviewers so that relative, root‑anchored, and foreign paths are correctly normalized before analysis.

## Feature Request Trends

- **MCP Tasks (SEP‑1686)**: [#76571](https://github.com/anthropics/claude-code/issues/76571) requests implementing long‑running tool calls in the MCP client to avoid 60‑second timeouts – a clear signal that MCP is becoming a production bottleneck.
- **Trace Context Propagation**: [#76391](https://github.com/anthropics/claude-code/issues/76391) asks for session/prompt.id propagation into MCP tool calls (SEP‑414) to enable observability chains.
- **Auto Mode Documentation**: Multiple docs issues ([#76564](https://github.com/anthropics/claude-code/issues/76564), [#76567](https://github.com/anthropics/claude-code/issues/76567)) highlight outdated or unsafe configuration guidance, especially for third‑party providers.
- **Plugin & OAuth Lifecycle**: Requests for better plugin root resolution ([#68936](https://github.com/anthropics/claude-code/issues/68936)) and on‑demand OAuth refresh ([#76544](https://github.com/anthropics/claude-code/issues/76544)) reveal friction in the plugin ecosystem.
- **Disk & Resource Guards**: The unbounded task output ([#41737](https://github.com/anthropics/claude-code/issues/41737)) and unresponsive background agents ([#75314](https://github.com/anthropics/claude-code/issues/75314)) have spawned calls for automatic resource limits and kill swithces.

## Developer Pain Points (recurring themes)

1. **Uncontrolled agent recursion & token burn** – issues #68110, #75314, and #76249 all describe agents that cannot be stopped or that spawn infinitely. Cost management is the #1 concern.
2. **Hooks & extensions silently failing** – #6305 and #69970 report Pre/PostToolUse hooks not executing; #68936 shows plugin metadata ignored. Developers lose confidence in the extension system.
3. **Windows parity gaps** – Console flashing (#14828), missing Cowork services (#74649), and the new launcher PR (#76394) underscore that Windows still feels second‑class.
4. **State loss and session corruption** – Session drops (#10065), disk‑filling output (#41737), and resume breaking cache (#66005) waste user time and money.
5. **Internationalisation bugs** – CJK mojibake (#66269) affects a large user base; the fix (“use default renderer”) is a workaround, not a solution.
6. **Documentation lagging behind code** – At least four docs issues were filed today alone (#76564, #76567, #76566, #76569). Auto‑mode, OAuth, and Bedrock authentication are poorly documented, leading to configuration errors.

---

*Generated from GitHub issues & PRs with activity in the last 24 hours.*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-07-11

## Today’s Highlights

The community is focused on two high-impact threads: a suspected reasoning‑token clustering bug in GPT‑5.5 Codex (#30364, 284 👍) that may silently degrade complex tasks, and a new GPT‑5.6 Sol subagent model‑selection bug (#31814) where all spawned agents inherit Sol settings regardless of user configuration. Meanwhile, two CLI alpha releases (v0.145.0‑alpha.3 and v0.145.0‑alpha.4) landed, and the team merged a series of automated fixes including safer rollout file handling and improved blob upload diagnostics.

## Releases

Two alpha versions of the Rust‑based CLI were published in the last 24 hours:

- **[rust‑v0.145.0‑alpha.4](https://github.com/openai/codex/releases/tag/rust-v0.145.0-alpha.4)** — Release 0.145.0‑alpha.4
- **[rust‑v0.145.0‑alpha.3](https://github.com/openai/codex/releases/tag/rust-v0.145.0-alpha.3)** — Release 0.145.0‑alpha.3

No detailed changelogs were provided with the tags.

## Hot Issues

1. **[#30364 – GPT‑5.5 Codex reasoning‑token clustering at 516/1034/1552 may degrade complex tasks](https://github.com/openai/codex/issues/30364)**  
   *183 comments, 284 👍*  
   A pattern of responses landing exactly at `reasoning_output_tokens = 516` (and multiples) suggests a model‑specific token‑clipping bug. Community members report lower reasoning quality on large tasks. This is the most upvoted issue this week.

2. **[#31814 – GPT‑5.6 Sol forces all subagents to also be Sol instances](https://github.com/openai/codex/issues/31814)**  
   *35 comments, 85 👍*  
   MultiAgent V2 ignores `features.multi_agent_v2` and forces subagents to the same model. Users cannot override via `hide_spawn_agent_metadata`. Affects anyone using Sol for orchestration.

3. **[#20214 – Codex App freezes/stutters on Windows 11 Pro despite sufficient resources](https://github.com/openai/codex/issues/20214)**  
   *33 comments, 45 👍*  
   Longstanding performance issue on Windows 11; users report UI freezes even with 32GB RAM. No fix yet.

4. **[#28982 – Windows sandbox setup fails with “The specified module could not be found”](https://github.com/openai/codex/issues/28982)**  
   *33 comments, 12 👍*  
   Native sandbox setup helper broken in app version 26.616.3309.0. Affects all Windows sandbox users.

5. **[#24814 – Windows app: Browser Use blocked by enterprise policy even for example.com](https://github.com/openai/codex/issues/24814)**  
   *19 comments, 2 👍*  
   In‑app browser pane triggers enterprise network policy restrictions; no whitelist override available.

6. **[#23915 – Remote Control setup authenticates but shows no devices (macOS)](https://github.com/openai/codex/issues/23915)**  
   *11 comments, 3 👍*  
   After updating macOS app, Remote Control can no longer see paired devices; regression from previous version.

7. **[#14039 – [Enhancement] Allow per‑subagent model/provider/profile selection](https://github.com/openai/codex/issues/14039)**  
   *10 comments, 15 👍*  
   Feature request: parent session should route subagents to different models or providers. Already referenced in #31814 discussion.

8. **[#26869 – Codex Desktop app‑server leaks child processes after crash/restart (macOS)](https://github.com/openai/codex/issues/26869)**  
   *10 comments, 3 👍*  
   Crash leads to runaway child processes and massive disk I/O. Reproducible across multiple macOS versions.

9. **[#24069 – Regression: CLI 0.133.0 breaks native subagent spawning with local Ollama provider](https://github.com/openai/codex/issues/24069)**  
   *8 comments, 6 👍*  
   Users on Ollama (e.g., `qwen3.6:35b`) experience subagent launch failures after upgrading; 0.132.0 works fine.

10. **[#32016 – Text flickering/overlapping when scrolling long conversations (Windows)](https://github.com/openai/codex/issues/32016)**  
    *8 comments, 3 👍*  
    Latest Windows app (26.707.31428) renders chat scrolling incorrectly; likely a rendering layer issue.

## Key PR Progress

1. **[#32316 – Stop falling back to older model availability announcements](https://github.com/openai/codex/pull/32316)**  
   Prevents UI from showing a lower‑priority model announcement after a newer one has reached its display limit.

2. **[#32312 – Require prefixes for outbound response item IDs](https://github.com/openai/codex/pull/32312)**  
   Adds a `ResponseItemId` type with UUIDv7 + prefix; keeps deserialisation backwards‑compatible.

3. **[#32305 – Improve file blob upload diagnostics](https://github.com/openai/codex/pull/32305)**  
   Adds a unique `x-ms-client-request-id` header and better error reporting for blob upload failures.

4. **[#32302 – Prefer Codex home socket for Unix IDE context](https://github.com/openai/codex/pull/32302)**  
   Simplifies IPC socket discovery by looking in `CODEX_HOME/ipc/ipc.sock` first, falling back to legacy paths.

5. **[#32301 – Trust hooks from materialized workspace plugins](https://github.com/openai/codex/pull/32301)**  
   Records hook hashes for workspace plugins after a successful remote refresh, enabling automatic trust.

6. **[#32290 – Respect model support for reasoning summaries](https://github.com/openai/codex/pull/32290)**  
   Adds `supports_reasoning_summary_parameter` metadata flag; omits `reasoning.summary` for models that don’t support it.

7. **[#32289 – Persist paginated items in the local thread store](https://github.com/openai/codex/pull/32289)**  
   Allows paginated threads to be created and stored locally while keeping them unsupported in the app‑server API.

8. **[#32288 – Make GPT‑5.6 Sol the default Bedrock model](https://github.com/openai/codex/pull/32288)**  
   Prioritises Sol, Terra, and Luna variants ahead of GPT‑5.5/5.4 in the Bedrock catalog; includes bundled descriptions and default reasoning level.

9. **[#30463 – Fix autocomplete targeting between mentions](https://github.com/openai/codex/pull/30463)**  
   Corrects popup target selection when cursor sits between an unbound skill mention and an already‑bound mention.

10. **[#30887 – Speed up reverse history search](https://github.com/openai/codex/pull/30887)**  
    Batch‑fetches historical entries instead of locking and scanning `history.jsonl` one at a time, significantly improving responsiveness.

## Feature Request Trends

The community increasingly demands **multi‑agent configuration flexibility**. The most requested direction is **per‑subagent model/provider/profile selection** (#14039, #17598, related to #31814). Users want to spawn child agents that use local (Ollama) or third‑party providers while the parent runs on OpenAI models. A second trend is **improved hooks and interrupt handling** (#20783, #26259, #26452) – developers need `Interrupt` hooks, `repo`‑level hook dispatch for `codex exec`, and reliable stop‑hook continuation. Finally, **Windows reliability** remains a top ask: sandbox setup, remote control, and in‑app browser improvements are frequently requested enhancements.

## Developer Pain Points

- **Windows‑specific crashes and stalls** dominate the bug tracker: sandbox helper failures, UI freezes (even on high‑spec machines), text flickering, and broken remote control pairing are recurring frustrations.
- **Subagent model forcing** (#31814, #24069) creates a hard blocker for anyone running multi‑agent workflows with custom or local models. The regression in CLI 0.133.0 for Ollama users (#24069) is especially painful.
- **Reasoning‑token clustering** (#30364) is silently affecting output quality; users cannot work around it because the clipping appears to be server‑side.
- **Rate‑limit and quota bugs** (#32311, #30401) – usage resets that consume credits but don’t restore quota, and persistent timeout errors, waste developer time and degrade trust.
- **MCP server unavailability** (#31359) causes new task creation to hang indefinitely, a critical usability issue for those relying on MCP integrations.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest – 2026-07-11

## Today's Highlights
No new releases landed today, but the community remains active with 50 open issues and 12 pull requests updated in the last 24 hours. The most critical bug on the radar concerns subagents falsely reporting success after hitting `MAX_TURNS` (#22323), while the team pushes forward with a security-focused PR that enforces path trust checks in the A2A server (#28319). Agent hang and recovery reliability continue to dominate developer pain points.

## Releases
*No new versions were published in the last 24 hours.*

## Hot Issues
10 noteworthy issues updated today, selected by priority, comment count, and community impact:

1. **[#22323 – Subagent recovery after MAX_TURNS is reported as GOAL success, hiding interruption](https://github.com/google-gemini/gemini-cli/issues/22323)**  
   *Priority P1, kind/bug* – The `codebase_investigator` subagent reports `status: "success"` even after hitting its turn limit. This misleads users into thinking work was done when it wasn’t. 10 comments, 2 👍.

2. **[#19873 – Leverage model's bash affinity via Zero-Dependency OS Sandboxing & Post-Execution Intent Routing](https://github.com/google-gemini/gemini-cli/issues/19873)**  
   *Priority P2, kind/enhancement* – Proposes full sandboxing for shell commands to safely use Gemini’s native bash abilities. 8 comments, 1 👍.

3. **[#24353 – Robust component level evaluations](https://github.com/google-gemini/gemini-cli/issues/24353)**  
   *Priority P1, aiq/eval_infra* – An epic tracking behavioral evals; currently 76 tests across 6 models. Essential for quality assurance. 7 comments.

4. **[#22745 – Assess the impact of AST-aware file reads, search, and mapping](https://github.com/google-gemini/gemini-cli/issues/22745)**  
   *Priority P2, kind/feature* – Exploring AST-based tools to reduce token waste and improve codebase navigation. 7 comments, 1 👍.

5. **[#21409 – Generalist agent hangs](https://github.com/google-gemini/gemini-cli/issues/21409)**  
   *Priority P1, kind/bug* – The generalist agent hangs indefinitely on simple tasks; users must disable subagents to work around it. 7 comments, 8 👍 (most liked issue).

6. **[#21968 – Gemini does not use skills and sub-agents enough](https://github.com/google-gemini/gemini-cli/issues/21968)**  
   *Priority P2, kind/bug* – Custom skills are rarely invoked autonomously, making them effectively useless. 6 comments.

7. **[#26522 – Stop Auto Memory from retrying low-signal sessions indefinitely](https://github.com/google-gemini/gemini-cli/issues/26522)**  
   *Priority P2, kind/bug* – Auto Memory keeps resurfacing sessions that were skipped as low-value, wasting model calls. 5 comments.

8. **[#25166 – Shell command execution gets stuck with "Waiting input" after command completes](https://github.com/google-gemini/gemini-cli/issues/25166)**  
   *Priority P1, area/core* – Simple commands hang the CLI with a phantom “awaiting input” state. 4 comments, 3 👍.

9. **[#21983 – Browser subagent fails in Wayland](https://github.com/google-gemini/gemini-cli/issues/21983)**  
   *Priority P1, agent/browser* – The browser agent terminates with “GOAL” but actually fails under Wayland compositors. 4 comments, 1 👍.

10. **[#21000 – Experiment with using native file tools for creating and maintaining the task tracker](https://github.com/google-gemini/gemini-cli/issues/21000)**  
    *Priority P3, kind/customer-issue* – Suggests replacing heavy tooling with native POSIX operations for simpler task tracking. 4 comments.

## Key PR Progress
10 most important pull requests updated in the last 24 hours:

1. **[#28319 – refactor(a2a-server): enforce path trust check prior to environment loading and isolate task environment](https://github.com/google-gemini/gemini-cli/pull/28319)**  
   *Open, size m/l/xl* – Adds workspace trust checks before loading `env` files and uses `AsyncLocalStorage` for per-task isolation. Critical for security.

2. **[#28164 – fix(core): limit recursive reasoning turns per single user request](https://github.com/google-gemini/gemini-cli/pull/28164)**  
   *Closed, size/m* – Caps recursive reasoning at 15 turns per request to prevent infinite loops. Customizable via `maxSessionTurns`. Delivered and merged.

3. **[#28248 – docs: explain MCP env expansion](https://github.com/google-gemini/gemini-cli/pull/28248)**  
   *Open, size/s* – Documents `$VAR`, `${VAR:-fallback}`, and Windows `%VAR%` syntax for MCP server configurations, plus known unsupported patterns.

4. **[#28247 – fix(core): match ls ignore globs by relative path](https://github.com/google-gemini/gemini-cli/pull/28247)**  
   *Open, size/m* – Fixes `ls` ignore patterns to respect workspace-relative paths (e.g., `**/node_modules`). Addresses #28207.

5. **[#28316 – fix(a2a-server): ensure task cancellation aborts execution loop](https://github.com/google-gemini/gemini-cli/pull/28316)**  
   *Open, size m/l* – Prevents “ghost executions” when tasks are cancelled; also fixes race conditions and memory leaks in A2A server.

6. **[#28353 – fix(a2a-server): prevent path traversal in restore command (defense-in-depth)](https://github.com/google-gemini/gemini-cli/pull/28353)**  
   *Open, size/s* – Sanitizes user-supplied paths in the `restore` command to block directory traversal attacks like `../../../etc/passwd`.

7. **[#28352 – fix(caretaker): sanitize and wrap issue title in untrusted_context](https://github.com/google-gemini/gemini-cli/pull/28352)**  
   *Open, size/s* – Escapes `</untrusted_context>` tags in issue titles to prevent prompt injection in the caretaker agent.

8. **[#28345 – feat(caretaker-triage): implement LLM triage orchestrator and container build](https://github.com/google-gemini/gemini-cli/pull/28345)**  
   *Open, size/l* – Introduces an LLM-based triage system for issues using Antigravity SDK, with GCS logging and Cloud Run container definition.

9. **[#28304 – fix(privacy): show a clear message when the account has no Code Assist tier](https://github.com/google-gemini/gemini-cli/pull/28304)**  
   *Closed, size m/l* – Replaces raw backend errors (`User does not have a current tier`) with a user-friendly explanation for enterprise/Workspace accounts.

10. **[#28330 – fix(ide-companion): set token file mode atomically to close TOCTOU window](https://github.com/google-gemini/gemini-cli/pull/28330)**  
    *Open, size s/m* – Writes auth-token port file with `0o600` permissions atomically, closing a race condition (TOCTOU) that briefly exposed secrets world-readable.

## Feature Request Trends
The community’s most desired directions from today’s issues:

- **Subagent reliability & visibility** – Users want subagents to accurately report failures (#22323), stop surreptitiously executing (#22093), and expose their trajectories for debugging (#22598, #21763).
- **AST-aware tooling** – Multiple epics (#22745, #22746) call for AST-based file reads and codebase mapping to reduce token waste and turn count.
- **Auto Memory & background agent improvements** – Requests to stop retrying low-signal sessions (#26522), surface invalid memory patches (#26523), and add deterministic secret redaction (#26525).
- **Security hardening** – Sandboxing shell commands (#19873), preventing destructive git/DB operations (#22672), and protecting against prompt injection (#28352) are top-of-mind.
- **Self-awareness & usability** – The agent should know its own hotkeys, flags, and capabilities (#21432) and respect configuration overrides (#22267).

## Developer Pain Points
Recurring frustrations highlighted today:

- **Agent hangs & execution stalls** – The generalist agent hangs indefinitely (#21409), shell commands get stuck on “awaiting input” after finishing (#25166), and the browser agent fails silently under Wayland (#21983).
- **Subagent misbehavior** – Subagents run without permission after updates (#22093), ignore `settings.json` (#22267), and rarely use custom skills autonomously (#21968).
- **Terminal & UI regressions** – High-performance resize issues cause flickering (#21924) and corruption after exiting external editors (#24935).
- **Memory system waste** – Auto Memory retries low-signal sessions endlessly (#26522) and logs sensitive content before redaction (#26525).
- **Tool/configuration limits** – Encounters 400 errors with >128 tools (#24246), and symlinked agent files go unrecognized (#20079).

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-07-11

## Today's Highlights
A new release **v1.0.71-0** landed, introducing a pinned prompts setting and repository-scoped tabs in the `/settings` dashboard, along with lighter install guidance. However, the community is grappling with several critical bugs: Voice mode remains broken for all bundled ASR models (Issue #4024), the TUI can irrecoverably wedge mid-turn on WSL2 (Issue #4069), and MCP OAuth flows are failing across multiple servers (Issues #4084–#4086). Meanwhile, developers keep voicing strong demand for multi-model switching within a session (#3709) and auto-updating plugins (#3331).

## Releases
**v1.0.71-0** (latest, 2026-07-11)
- **Added**:
  - Pinned prompts setting in `/settings` to control prompt pinning.
  - Repo and Repo (local) scope tabs in the `/settings` dashboard.
- **Improved**:
  - Use targeted validation commands and lighter install guidance by default.
  - New shortcuts: `ctrl+x → x` to close a session, `ctrl+x → h` to hide the session panel.

[Release details](github/copilot-cli Releases v1.0.71-0)

## Hot Issues (10 noteworthy)
1. **#4024** — Voice mode: all bundled ASR models fail silently. Microphone works but transcriptions are empty. High impact for voice users.  
   [github/copilot-cli Issue #4024](github/copilot-cli Issue #4024)

2. **#4069** — TUI wedges mid-turn (screen clears, input dead, Ctrl+C ignored) on WSL2 + Windows Terminal. 8 👍, 7 comments.  
   [github/copilot-cli Issue #4069](github/copilot-cli Issue #4069)

3. **#2739** (CLOSED) — `xhigh` reasoning was removed for `gpt-5.4` and `gpt-5.3-codex`. 12 angry 👍, community strongly opposes removal.  
   [github/copilot-cli Issue #2739](github/copilot-cli Issue #2739)

4. **#3331** — Feature request: auto-update plugins on CLI startup via marketplace flag. 4 👍; users want seamless plugin updates.  
   [github/copilot-cli Issue #3331](github/copilot-cli Issue #3331)

5. **#3399** — Allow custom HTTP headers for BYOK (e.g., `X-Tenant-ID`). 6 👍; enterprise use case.  
   [github/copilot-cli Issue #3399](github/copilot-cli Issue #3399)

6. **#2533** — Blocking shell/tool call freezes agent until the shell unblocks. No workaround.  
   [github/copilot-cli Issue #2533](github/copilot-cli Issue #2533)

7. **#3709** — Request to switch between multiple models (including BYOK/local) in one session. 17 👍 — top community ask.  
   [github/copilot-cli Issue #3709](github/copilot-cli Issue #3709)

8. **#4089** — Atlassian MCP server: OAuth succeeds but zero tools exposed. Affects multiple HTTP MCP servers.  
   [github/copilot-cli Issue #4089](github/copilot-cli Issue #4089)

9. **#4077** — TUI black-screen hang mid-turn on Windows Terminal (1.0.70-0); recoverable via `--resume`. 3 👍.  
   [github/copilot-cli Issue #4077](github/copilot-cli Issue #4077)

10. **#4091** (CLOSED) — Standalone binary removed from all `linuxmusl-x64` release tarballs. Breaking change for Alpine users.  
    [github/copilot-cli Issue #4091](github/copilot-cli Issue #4091)

## Key PR Progress
Only one pull request was updated in the last 24 hours:

- **#2565** (OPEN) — **install: guard against duplicate PATH entries on reinstall**  
  Author: `marcelsafin`  
  Running the installer twice without restarting the shell appends the PATH line again. The fix checks for an existing entry before adding. Important for users who reinstall frequently.  
  [github/copilot-cli PR #2565](github/copilot-cli PR #2565)

No other PRs were updated in this period.

## Feature Request Trends
- **Multi-model switching in one session** (#3709, 17👍) — Users want to toggle between GitHub-hosted and BYOK models mid-conversation.
- **Auto-update plugins** (#3331, 4👍) — Teams need guaranteed plugin freshness without manual `copilot plugin update`.
- **Custom BYOK headers** (#3399, 6👍) — Enterprise LLM servers often require tenant/organization headers.
- **Voice mode enhancements** — Auto-submit on spacebar release (#4090), mute system audio during capture (#4092), better error handling for ASR (#4024).
- **MCP OAuth flow reliability** — Multiple issues (#4084, #4085, #4086) report OAuth servers failing to expose tools.
- **Dynamic context in Skills** — `!` command placeholder in `SKILL.md` (#4088) for pipeline integration.
- **Cross-app session sync** (#4082) — Sync sessions between CLI and desktop app.

## Developer Pain Points
- **Voice mode is non-functional** for all models (#4024) — users cannot rely on speech input.
- **TUI stability on Windows** — Screen freezes (#4077), terminal wedging (#4069) make the tool unusable mid-turn.
- **Blocking commands freeze the agent** (#2533) — no timeout or user override.
- **MCP OAuth frustration** — Multiple reports of servers connecting but not delivering tools (#4084–#4089).
- **Scheduled prompts break the task queue** (#4078, #4079) — queued items are dropped when a scheduled prompt fires.
- **Session picker regression** (#4071) — only current session shown (flight `copilot_cli_remove_cwd_listing`).
- **Removal of xhigh reasoning** (#2739) — model capabilities silently removed, upsetting power users.
- **Alpine Linux binary removal** (#4091) — breaking change for Docker-based workflows.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-07-11

## Today’s Highlights
No new releases or issues were created in the last 24 hours, but the community closed two long‑standing PRs (layout spacing and Safari IME handling) and opened two important bug fixes. The team continues to polish the web UI and address subtle runtime issues in the soul/agent tool‑binding layer.

## Releases
No new releases in the last 24 hours.

## Hot Issues
*No issues were updated or created in the last 24 hours.* The repository currently has no open or recently touched issues to highlight.  
*(All community discussion this period is captured in the PRs below.)*

## Key PR Progress

### #2353 — [CLOSED] fix(web): tighten app layout spacing  
**Author:** anxndsgn  
**URL:** https://github.com/MoonshotAI/kimi-cli/pull/2353  
**Summary:** Removes the app‑level outer gutter while maintaining safe‑area insets. Also refines sidebar list spacing and search input display for a more compact, consistent layout.  
**Impact:** Improves visual polish for the web client — a direct response to UI feedback.

### #2489 — [OPEN] fix(soul): restore plan‑mode tool bindings after `/init` creates throwaway soul  
**Author:** nankingjing  
**URL:** https://github.com/MoonshotAI/kimi-cli/pull/2489  
**Summary:** Fixes #2478. When `/init` runs, a throwaway `KimiSoul` is created that shares the live soul’s agent and tool instances. The throwaway’s `__init__` calls `_bind_plan_mode_tools()`, accidentally rebinding the shared `ExitPlanMode`, `EnterPlanMode`, and `Write` tools. This PR ensures tool bindings remain stable.  
**Impact:** Critical for users relying on plan‑mode workflows — prevents stale tool references after re‑initialisation.

### #2488 — [OPEN] fix(soul): make `LLMNotSet` error message actionable for fresh installs  
**Author:** nankingjing  
**URL:** https://github.com/MoonshotAI/kimi-cli/pull/2488  
**Summary:** Closes #2456. Fresh Homebrew installs (`brew install kimi-cli`) gave a cryptic `LLM not set` on first command. This PR changes the default message to something like “LLM not set — run `kimi login` first” (exact text in PR).  
**Impact:** Major UX improvement first‑time users — reduces confusion on setup.

### #1815 — [CLOSED] fix(web): prevent Enter from sending message during IME composition on Safari  
**Author:** qianqiuqiu  
**URL:** https://github.com/MoonshotAI/kimi-cli/pull/1815  
**Summary:** Fixes a Safari‑only bug where pressing Enter while a native Chinese IME candidate window is active immediately sends the message instead of committing the text.  
**Impact:** Essential for users on macOS with CJK input methods — a long‑standing annoyance finally addressed.

## Feature Request Trends
Based on the issues referenced in recent PRs and the nature of open work, the community continues to prioritise:
- **Smoother cross‑platform web UI** (IMEs, layout consistency)  
- **Better error handling for first‑time setup** (actionable messages, guided login flow)  
- **Stability of plan‑mode and soul lifecycle** (tool binding, state isolation)

The absence of new feature‑request issues this period suggests users are currently more focused on polish and bug fixes than net‑new features.

## Developer Pain Points
- **Japanese/Chinese IME on Safari:** The Enter key behaviour caused accidental message sending – now fixed in #1815.  
- **Fresh‑install confusion:** `LLM not set` gave no hint → PR #2488 aims to fix this.  
- **Plan‑mode tool corruption after `/init`:** Subtle shared‑state bug forced many restarts for heavy plan‑mode users → addressed by #2489.  
- **Web layout tightness:** Users with narrower viewports reported wasted space → closed #2353.

Overall, the past day shows a healthy focus on suring up the developer experience without introducing breaking changes.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-07-11

## Today's Highlights
Performance concerns remain top of mind: the long‑standing high-CPU issue (#30086) continues to see discussion, while a batch of shell‑related bugs and provider integration fixes dominate today’s activity. On the feature side, the long‑awaited mobile version request (#10288) remains the most upvoted item, and the community is buzzing about a new PR that ports GitHub Copilot OAuth (#36336). Several CodeMode sandbox improvements (Promise chaining, `Promise.any`) have also been merged, signalling progress on the v2 runtime.

## Releases
No new versions were published in the last 24 hours.

## Hot Issues
*(Selected 10 of the most active or significant issues updated in the last 24h)*

1. **#30086 – High CPU usage in newer versions**  
   Open since May 31, with 21 comments and 12 reactions. Users report that 3 sessions now saturate the CPU where 10 were possible before, causing system-wide lag.  
   [anomalyco/opencode#30086](https://github.com/anomalyco/opencode/issues/30086)

2. **#25824 – Desktop plugin loaded but custom agents not visible in GUI**  
   A closed bug where oh‑my‑openagent agents appeared in TUI but not the Desktop GUI after upgrading to v1.14.35.  
   [anomalyco/opencode#25824](https://github.com/anomalyco/opencode/issues/25824)

3. **#10288 – Mobile version (Android/iOS/Web UI)**  
   The most upvoted feature request overall (89 👍), with 15 comments. Developers want a mobile-friendly way to review code and run simple tasks on the go.  
   [anomalyco/opencode#10288](https://github.com/anomalyco/opencode/issues/10288)

4. **#1302 – Dynamic API keys via apiKeyHelper**  
   A high‑impact feature (55 👍) requesting a helper script to rotate JWT tokens or API keys automatically, now closed.  
   [anomalyco/opencode#1302](https://github.com/anomalyco/opencode/issues/1302)

5. **#36140 – GPT-5.6 Luna returns “model not found” with ChatGPT OAuth**  
   Recent and heavily engaged (50 👍, 12 comments). The built‑in OpenAI provider fails on `gpt-5.6-luna` while other models work. A fix PR (#36143) is already open.  
   [anomalyco/opencode#36140](https://github.com/anomalyco/opencode/issues/36140)

6. **#14795 – Zen API 500 error for free models**  
   Closed bug where external OpenAI‑compatible clients hitting Zen API get `Cannot read properties of undefined (reading 'prompt_tokens')` for several free models.  
   [anomalyco/opencode#14795](https://github.com/anomalyco/opencode/issues/14795)

7. **#7488 – Mistral models fail with “Unexpected role 'user' after role 'tool'”**  
   Seven comments, 10 👍. A tool‑message ordering issue when using Mistral/Devstral with vLLM or similar backends.  
   [anomalyco/opencode#7488](https://github.com/anomalyco/opencode/issues/7488)

8. **#28289 – kotlin-ls initialization timeout on large Android projects**  
   Open, 6 comments. The built‑in LSP fails to start on large Gradle projects because it requires a full project sync, which exceeds the timeout. User override of the command seems ineffective.  
   [anomalyco/opencode#28289](https://github.com/anomalyco/opencode/issues/28289)

9. **#26870 – Read tool rejects arguments with SchemaError (offset as string)**  
   A recurring pain point where the `read` tool receives a string for `offset` (e.g. `"2490"`) instead of a number, breaking file reads.  
   [anomalyco/opencode#26870](https://github.com/anomalyco/opencode/issues/26870)

10. **#36350 – OpenCode violates Terminal Shell parameter**  
    Reported today (3 comments). Despite setting CMD as the shell, OpenCode occasionally spawns PowerShell, causing “No output” errors.  
    [anomalyco/opencode#36350](https://github.com/anomalyco/opencode/issues/36350)

## Key PR Progress
*(Selected 10 important pull requests updated in the last 24h)*

1. **#35440 – fix: session title generation retry**  
   Handles silent failures in `ensureTitle()` so sessions don’t remain untitled after auto‑naming fails.  
   [anomalyco/opencode#35440](https://github.com/anomalyco/opencode/pull/35440)

2. **#36353 – fix(core): unblock shell tool when a descendant keeps the stdio pipe**  
   On Windows, background processes (e.g. `Start-Process`) can leak pipe handles, causing the shell tool to hang. This PR closes the pipe properly.  
   [anomalyco/opencode#36353](https://github.com/anomalyco/opencode/pull/36353)

3. **#36352 – feat(tui): add semantic file path truncation**  
   Introduces a reusable `FilePath` component that intelligently truncates paths while preserving the filename, nearest parent segments, and extension. Migrates Modified Files and other dialogs.  
   [anomalyco/opencode#36352](https://github.com/anomalyco/opencode/pull/36352)

4. **#36346 – test(tui): add shortcut screenshot harness**  
   Adds a deterministic screenshot test for TUI shortcuts using `opencode-drive` at a fixed viewport, enabling visual regression checks.  
   [anomalyco/opencode#36346](https://github.com/anomalyco/opencode/pull/36346)

5. **#36339 – feat(codemode): support Promise.any and new Promise construction**  
   Fills out the CodeMode sandbox with `Promise.any` (De Morgan dual of `Promise.all`) and the `new Promise(executor)` form.  
   [anomalyco/opencode#36339](https://github.com/anomalyco/opencode/pull/36339)

6. **#36341 – feat(tui): show pending command resolution**  
   Adds a visual indicator when MCP‑backed slash commands are resolving, preventing the “idle” look after the composer clears.  
   [anomalyco/opencode#36341](https://github.com/anomalyco/opencode/pull/36341)

7. **#36338 – fix(tui): fork messages with agent attachments**  
   Fixes `DataCloneError` when forking a message that contains Solid store‑backed agent attachments.  
   [anomalyco/opencode#36338](https://github.com/anomalyco/opencode/pull/36338)

8. **#36337 – fix(tui): make composer close action discoverable**  
   Shows a clickable `esc` hint in the composer header to make the close action more obvious.  
   [anomalyco/opencode#36337](https://github.com/anomalyco/opencode/pull/36337)

9. **#36143 – fix(opencode): support GPT-5.6 Responses Lite**  
   Closes #36140 by routing Luna through the correct API endpoint when using ChatGPT OAuth.  
   [anomalyco/opencode#36143](https://github.com/anomalyco/opencode/pull/36143)

10. **#36336 – feat(core): port GitHub Copilot OAuth**  
    A significant addition that ports GitHub Copilot device OAuth (both GitHub.com and Enterprise) to the V2 integration registry, including credential‑aware request headers and remote model syncing.  
    [anomalyco/opencode#36336](https://github.com/anomalyco/opencode/pull/36336)

## Feature Request Trends
From the issues updated in the last 24 hours, several recurring themes stand out:

- **Mobile & Web Access** – #10288 (89 👍) remains the single most requested feature. Developers want a lightweight web UI or native app for reviewing code, starting simple tasks, and checking session status from a phone.
- **Provider Extensibility** – Requests to add new built‑in providers (Featherless.ai #26838), dynamic API keys (#1302), and a `--model free` random‑picker (#34794) show the community wants easier access to the growing LLM ecosystem.
- **Session & Context Management** – Features like double‑ESC cancellation (#26748), `/handoff` command (#26757), and auto‑loading of user‑defined skills from `~/.config/opencode/skills/` (#26891) aim to reduce friction during long‑running sessions and improve workflow continuity.
- **LSP & IDE Integration** – The kotlin‑ls timeout (#28289) and the misnamed kotlin-ls (#35797) indicate growing pain with LSP support for large projects and non‑standard setups.

## Developer Pain Points
Recurring frustrations evident from the issue tracker:

- **Performance degradation** – High CPU usage (#30086) is the most severe, but also the shell tool hanging on Windows (#36353) and the `read` tool schema error (#26870) cause daily workflow breaks.
- **Shell & Terminal Mismatches** – The terminal/shell parameter being ignored (#36350) and PowerShell output parsing failures are persistent headaches for Windows users.
- **Model/Provider Incompatibility** – From “model not found” for new GPT‑5.6 Luna (#36140) to Mistral tool‑role ordering (#7488) and Zen API 500 errors (#14795), users frequently encounter provider‑specific quirks that halt their work.
- **LSP & Language‑Server Hassles** – The kotlin‑ls initialization timeout (#28289) and the discovery that the binary name differs across platforms (#35797) highlight how LSP setup remains a support‑heavy area.
- **Stream Parsing & Data Errors** – The stream parsing error “text part `<uuid>` not found” (#25487) and the TUI not live‑rendering externally posted prompts (#26671) point to gaps in the real‑time communication layer.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-07-11

## Today's Highlights

GPT-5.6 model support (Sol, Terra, Luna) is rolling out across multiple providers: GitHub Copilot (#6475), OpenAI Codex (#6465), and Fable-5 (#6490). A critical regression in v0.80.4–v0.80.6 broke `httpIdleTimeoutMs` for self‑hosted OpenAI‑compatible providers (#6476, fixed by bun bump #6503). Community activity also focused on a new `ultra` thinking level (#6489) and fixes for compaction session ID handling (#6477). No releases were published in the last 24 hours.

## Hot Issues

1. **#6475** — [inprogress] *Add GPT‑5.6 (Sol/Terra/Luna) to GitHub Copilot provider*  
   🔥 7 👍, 8 comments  
   GitHub Copilot rolled out the new models; Pi needs to add them to its catalog. High community demand.  
   [Issue](https://github.com/earendil-works/pi/issues/6475)

2. **#6206** — [bug] *Clamping to context window prevents artificial context limits*  
   8 comments – The fix for #5595 clamps `max_tokens` to the reported context window, breaking users who want to set explicit artificial limits for cost control.  
   [Issue](https://github.com/earendil-works/pi/issues/6206)

3. **#6366** — [bug] *Support session IDs for OpenRouter*  
   7 comments – OpenRouter expects `x-session-id` header or `session_id` in body; Pi only sends wrong keys, breaking prompt caching. Addressed by PR #6496.  
   [Issue](https://github.com/earendil-works/pi/issues/6366)

4. **#6476** — [bug, inprogress] *Regression: httpIdleTimeoutMs no longer respected for self‑hosted OpenAI‑compatible*  
   5 comments – Requests now time out after a few minutes despite explicit settings. Downgrade to v0.80.3 works. Bunny bump #6503 resolves it.  
   [Issue](https://github.com/earendil-works/pi/issues/6476)

5. **#6300** — [bug] *Windows: input line redrawn on every keystroke*  
   5 comments – Each character appears on a new line, making TUI unusable on cmd.exe and Windows Terminal. Affects Windows 10 22H2.  
   [Issue](https://github.com/earendil-works/pi/issues/6300)

6. **#6303** — [inprogress] *Exponential retry backoff has no cap*  
   4 comments – `maxDelayMs` is not passed from settings, so retries can wait many minutes (attempt 7 = ~4 min).  
   [Issue](https://github.com/earendil-works/pi/issues/6303)

7. **#6510** — [bug, untriaged] *Copilot model `mai-code-1-flash-picker` fails due to wrong API chosen*  
   3 comments – Model is not accessible via `/chat/completions`; needs different API endpoint.  
   [Issue](https://github.com/earendil-works/pi/issues/6510)

8. **#6472** — [bug] *compaction.enabled=false bypassed by overflow recovery path*  
   2 comments – Setting to disable auto‑compaction is ignored when overflow recovery triggers compaction anyway.  
   [Issue](https://github.com/earendil-works/pi/issues/6472)

9. **#6477** — [bug] *Compaction summary requests omit session ID, breaking compaction on new OpenAI‑Codex models*  
   2 comments – With GPT‑5.6 Luna, compaction fails because requests lack session ID.  
   [Issue](https://github.com/earendil-works/pi/issues/6477)

10. **#6097** — *Add support for 'max' thinking level*  
    🔥 17 👍 (highest upvoted), 2 comments – OpenAI’s GPT‑5.6 Sol introduces a sixth thinking level. Pi currently only goes to “high”.  
    [Issue](https://github.com/earendil-works/pi/issues/6097)

## Key PR Progress

1. **#6520** — *fix(coding‑agent): include file context in edit tool not‑found error*  
   Closed – When `oldText` is not found, the error now shows nearby file content for debugging.  
   [PR](https://github.com/earendil-works/pi/pull/6520)

2. **#6518** — *feat(coding‑agent): expose scoped models to extensions*  
   Closed – Adds `pi.getScopedModels()` so extensions can delegate work with the same model cycle as the session.  
   [PR](https://github.com/earendil-works/pi/pull/6518)

3. **#6111** — *fix(coding‑agent): report settings write failures in install/remove*  
   Closed – Fixes silent “Installed” success when `settings.json` is read‑only, preventing broken extensions.  
   [PR](https://github.com/earendil-works/pi/pull/6111)

4. **#6514** — *fix: erase entire turn on abort/error, not just the assistant message*  
   Closed – Prevents two consecutive user messages when an assistant response is aborted.  
   [PR](https://github.com/earendil-works/pi/pull/6514)

5. **#6341** — [to-discuss] *feat(ai): support constrained sampling*  
   Open – Opt‑in config for provider‑side tool argument constraints (JSON‑schema strict, regex, enums).  
   [PR](https://github.com/earendil-works/pi/pull/6341)

6. **#6474** — *feat(ai): support message‑anchored tool loading*  
   Closed – Allows tools to be introduced mid‑conversation (e.g., Anthropic tool‑reference) instead of all upfront.  
   [PR](https://github.com/earendil-works/pi/pull/6474)

7. **#6506** — *feat: add configurable auto‑update on new session*  
   Closed – New setting `autoUpdateOnNewSession` (disabled by default) for power users who want latest tools at session start.  
   [PR](https://github.com/earendil-works/pi/pull/6506)

8. **#6505** — — *feat(coding‑agent): add goal extension example for multi‑turn autonomous task execution*  
   Closed – Adds `/goal` example showing sub‑agent with pause/resume/cancel lifecycle.  
   [PR](https://github.com/earendil-works/pi/pull/6505)

9. **#6503** — *bump bun to 1.3.14*  
   Closed – Bun’s built‑in 5‑min HTTP idle timeout can now be overridden via `BUN_CONFIG_HTTP_IDLE_TIMEOUT`, fixing #6476.  
   [PR](https://github.com/earendil-works/pi/pull/6503)

10. **#6489** — *feat(ai): add ultra thinking level*  
    Closed – Introduces `ultra` as a first‑class thinking level across all surfaces; advertises Ultra for GPT‑5.6 Sol/Terra.  
    [PR](https://github.com/earendil-works/pi/pull/6489)

## Feature Request Trends

- **Thinking Levels**: Multiple issues request additional thinking levels: “max” (#6097, 17 👍), “ultra” (now implemented in #6489). Community wants parity with latest model releases (GPT‑5.6, DeepSeek V4).  
- **Multi‑Agent & Foreground Switching**: Proposals for minimal core seams so extensions can host multiple live sessions and switch foreground (#6480). RPC improvements for opaque attachments (#6493) and extension input events.  
- **Constrained Sampling**: Tools should be able to request provider‑side constraints (JSON‑schema, regex) to improve reliability (#6341).  
- **Extension API Expansion**: Repeated requests for exposing scoped models (#6518), `ctx.ui.setUsage` for cost display (#6509), and read‑only model cycle list.  
- **Autonomous Goals**: The `/goal` extension example (#6505) reflects growing interest in multi‑turn sub‑agent patterns.

## Developer Pain Points

- **Embedded Library Hosting**: Theme initialization and extension runtime poisoning across sessions (#6101, #6102, #6501) make embedding Pi as a library unreliable.  
- **Compaction Bypass**: Setting `compaction.enabled=false` is ignored during overflow recovery (#6472), and compaction requests are broken on new Codex models due to missing session IDs (#6477).  
- **HTTP Timeout Regression**: `httpIdleTimeoutMs` not respected since v0.80.4 (#6476) forced many self‑hosters to downgrade.  
- **Windows TUI Problems**: Input redrawing on every keystroke (#6300) makes Pi unusable on Windows terminals.  
- **Retry Without Cap**: Exponential backoff grows unbounded (#6303) because `maxDelayMs` is not applied.  
- **`/reload` Inconsistencies**: Custom keybindings not applied until reload (#6459); reload fails to pick up changes to imported `.mjs`/`.cjs` files (#6000).  
- **Model Catalog Discrepancies**: Reasoning levels differ across providers (#6374); `mai-code-1-flash-picker` uses wrong API endpoint (#6510).

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-07-11

## Today's Highlights
The team shipped **v0.19.9** with a critical fix that stops repeated subagent tool-call loops, and also published a nightly v0.19.8 build. Community discussion remains hottest around **multi-workspace daemon support** (RFC #6378, 20 comments), while a cluster of new Web Shell feature PRs signals growing investment in the browser-based UI. Several release workflow failures on v0.19.9 prompted rapid re-runs and patches.

## Releases
**v0.19.8-nightly.20260711**:
- `fix(core): keep YOLO mode when the model calls enter_plan_mode` — addresses regression where YOLO sessions were improperly switching modes.
- `feat(cli): forward ask_user` — enables interactive approval forwarding in CLI subagent flows.

**v0.19.9** (stable):
- `Stop repeated subagent tool-call loops` (PR #6543) — fixes an infinite‑loop bug where agents would re‑invoke the same tool call.
- `fix(session): detect and mark broken history chains instead of silently truncating` — improves session reliability by flagging corruption early.
· Note: multiple release runs failed on the `integration_docker` job; these were resolved before final publication.

## Hot Issues
1. **#6378 – RFC: Support multiple workspaces in one `qwen serve` daemon**  
   20 comments. The most discussed topic this week. Community is debating single-daemon vs. per-workspace architectures, with follow‑up issues (e.g., #6646) already filed for write‑side session organization.  
   [Link](https://github.com/QwenLM/qwen-code/issues/6378)

2. **#5975 – [API Error: No stream activity for 120000ms after 19 chunks]**  
   10 comments, 1 👍. A high‑visibility streaming timeout regression since v0.19.3. Users report the model appears to stall after generating thought tokens. The team is investigating upstream model‑side changes.  
   [Link](https://github.com/QwenLM/qwen-code/issues/5975)

3. **#5970 – Auto enter Plan mode from Yolo mode is back in latest version?**  
   5 comments. Reported as a regression where `qwen -y` sessions auto‑switch to Plan mode. Fixed in the nightly v0.19.8 build above, but the issue remains closed pending retesting.  
   [Link](https://github.com/QwenLM/qwen-code/issues/5970)

4. **#6384 – Hard limit: 0 when env‑configured model reserves its full default context window for output**  
   5 comments. A configuration edge case causing sessions to fail before any request is sent. Users affected by custom model configs (e.g., Qwen3.7‑max).  
   [Link](https://github.com/QwenLM/qwen-code/issues/6384)

5. **#6590 – Ctrl+V paste image broken on macOS standalone**  
   4 comments. Root cause identified: missing `@teddyzhu/clipboard` native module in standalone distribution. Community appreciates the detailed debugging in the report.  
   [Link](https://github.com/QwenLM/qwen-code/issues/6590)

6. **#6629 – Cron parser drops step in single‑value expressions**  
   4 comments. Parsing edge case (`5/15` treated as bare `5`). Closed quickly with an autofix; users noted it blocks scheduled tasks at non‑zero minutes.  
   [Link](https://github.com/QwenLM/qwen-code/issues/6629)

7. **#6595 – qwen3.7‑max leaks `<analysis>/<summary>` tags in main assistant responses**  
   3 comments. A model‑side bug where internal protocol tags leak into normal output, breaking downstream tool‑use flows. Multiple PRs (e.g., #6683) now address recovery logic.  
   [Link](https://github.com/QwenLM/qwen-code/issues/6595)

8. **#6654 – API Error: tool_use blocks missing corresponding tool_result in messages array**  
   4 comments from bot. Reports a strict API compliance failure where tools are invoked but their results are not appended in order. The team is investigating session‑state races.  
   [Link](https://github.com/QwenLM/qwen-code/issues/6654)

9. **#6639 – MCP servers with HTTP transport show as offline when gateway returns 401**  
   3 comments. OAuth recovery is not triggered for MCP servers behind authenticated gateways. Users with corporate HTTP‑based MCP setups are blocked.  
   [Link](https://github.com/QwenLM/qwen-code/issues/6639)

10. **#6700, #6699, #6701, #6702 – Series of Web Shell composer toolbar feature requests**  
    A coordinated set from pomelo‑nwu requesting workspace selector, execution‑context selector, git‑branch display, and a redesigned toolbar. High community engagement with multiple thumbs‑up across the set.  
   [#6700](https://github.com/QwenLM/qwen-code/issues/6700) | [#6699](https://github.com/QwenLM/qwen-code/issues/6699)

## Key PR Progress
1. **#6621 – Workspace‑qualified ACP transport (daemon multi‑workspace phase 4)** (Merged)  
   Exposes `GET /workspaces/:workspace/acp` in multi‑workspace daemon, enabling per‑workspace ACP clients. Core infrastructure for #6378.  
   [Link](https://github.com/QwenLM/qwen-code/pull/6621)

2. **#6683 – Retry leaked protocol turns in recovery paths**  
   Extends the guard from #6603 to cover cases where leaked `<analysis>` tags appear alongside tool calls. Prevents silent session corruption.  
   [Link](https://github.com/QwenLM/qwen-code/pull/6683)

3. **#6678 – Show full reasoning content when expanding thinking blocks during streaming**  
   Restores pre‑collapsible behavior for Alt+T expansion during streaming; uses MarkdownDisplay instead of a hardcoded 4‑line preview.  
   [Link](https://github.com/QwenLM/qwen-code/pull/6678)

4. **#6580 – Improve subagent observability**  
   Three improvements: untruncated in‑progress commands in agent detail view, transcript‑path disclosure, and approval‑context exposure. High impact for debugging complex multi‑agent runs.  
   [Link](https://github.com/QwenLM/qwen-code/pull/6580)

5. **#6681 – Make goal evaluation lifecycle‑safe**  
   Prevents goal evaluation races by waiting while background agents/shell jobs are active. Separates judge verdicts from evaluator failures.  
   [Link](https://github.com/QwenLM/qwen-code/pull/6681)

6. **#6638 – Extension management v2 for `qwen serve`**  
   Adds additive `extension_management_v2` capability with per‑workspace activation policy (global default + optional exact workspace override).  
   [Link](https://github.com/QwenLM/qwen-code/pull/6638)

7. **#6579 – Keep model switches session‑scoped**  
   Changes `/model` to only update the active session by default; explicit `--default` flag required for persistent changes. Prevents accidental global model changes.  
   [Link](https://github.com/QwenLM/qwen-code/pull/6579)

8. **#6497 – Refresh instructions after /remember**  
   Automatically updates live memory instructions after managed‑memory writes, so new `/remember` data is observable without restart.  
   [Link](https://github.com/QwenLM/qwen-code/pull/6497)

9. **#6518 – Add Approve button to `/mcp` server detail for pending/rejected servers**  
   Solves a UX dead end where users who missed startup MCP approval had no way to approve servers later.  
   [Link](https://github.com/QwenLM/qwen-code/pull/6518)

10. **#6697 / #6680 – Session recovery after restart (Web Shell & channels)**  
    Two linked PRs: #6697 resumes stopped Web Shell sessions on load; #6680 preserves daemon channel conversations across worker/daemon restarts.  
   [#6697](https://github.com/QwenLM/qwen-code/pull/6697) | [#6680](https://github.com/QwenLM/qwen-code/pull/6680)

## Feature Request Trends
- **Multi‑workspace daemon (#6378, #6646, #6700, #6699, #6701, #6702):** The strongest trend. Community wants a single daemon managing multiple workspaces with per‑workspace ACP, session listing, and toolbar selectors in Web Shell.
- **Web Shell UI modernization (#6699, #6700, #6701, #6702, #6530):** A coordinated push to bring the browser UI on par with the desktop client — workspace picker, git branch display, execution‑context selector, and interactive table cells.
- **MCP & extension management improvements (#6639, #6518, #6638):** Growing demand for better MCP lifecycle handling — OAuth recovery, server approval UX, and formal extension management API.
- **Subagent & channel tooling (#6580, #6647, #6694):** Requests for deeper visibility into subagent execution, SDK support for interactive tool calls, and sanitized channel output (suppress intermediate report paths).
- **Session lifecycle automation (#6646, #6695, #6697):** Users want automated session continuation after restarts, and write‑side session organization (pinning, grouping) for non‑primary workspaces.

## Developer Pain Points
- **Streaming timeout / model stalls (#5975):** Persistent issue since v0.19.3 where long‑running model turns hang without activity, forcing manual retries. High impact on workflow reliability.
- **Context‑window configuration confusion (#6384):** Hard‑limit=0 errors caused by model configs reserving full context for output. Users with custom model settings are blindsided.
- **OOM under heavy file‑system operations (#6614):** The `glob` tool can exhaust heap on large repositories (e.g., scanning `**` in a full checkout). Community suggests output truncation is insufficient without pre‑scan memory bounds.
- **Missing native modules in standalone macOS (#6590):** Clipboard paste for images silently fails because `@teddyzhu/clipboard` is not bundled. A packaging oversight that blocks users on macOS.
- **Multi‑language UI inconsistency (#6582):** Approval‑mode switching shows mixed Chinese/English text in the status bar. Small but frequent irritation for users with `language: zh-CN`.
- **Release pipeline flakiness (#6684, #6687, #6690):** Three failed `integration_docker` jobs during the v0.19.9 rollout delayed the release and caused duplicate automation issues.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-07-11

*Repository: [github.com/Hmbown/DeepSeek-TUI](https://github.com/Hmbown/DeepSeek-TUI) (activity reflected in companion CodeWhale repo)*

---

## Today’s Highlights

The v0.8.68 stopship batch lands with three merged pull requests that fix TUI state correctness, enable durable workflow dispatch without a root model, and align documentation with the new Plan / Act / Operate contract. Meanwhile, a cluster of new bugs around provider identity, offline pricing, and empty configuration headers signals hardening efforts ahead of the release. No new tags were published in the last 24 hours.

## Releases

No new releases in the past 24 hours.

## Hot Issues (10 Noteworthy)

1. **[#4092 – v0.8.68 execution board: lane order, dependencies, and agent protocol (canonical packet)](https://github.com/Hmbown/CodeWhale/issues/4092)**  
   *Closed.* 60 comments. The single source-of-truth for any agent working on v0.8.68. Replaces the July 7 triage packet and enforces that every milestone issue carries exactly one `lane-*` label. High community engagement as the orchestration model solidifies.

2. **[#4032 – Codewhale not following the constitution](https://github.com/Hmbown/CodeWhale/issues/4032)**  
   *Open.* 33 comments. User reports that the agent consistently writes temporary scripts instead of using provided scripts, despite explicit constitutional rules. Sparks debate on agent obedience and documentation clarity.

3. **[#4178 – v0.8.68: Stopship workflow as fleet-backed lane](https://github.com/Hmbown/CodeWhale/issues/4178)**  
   *Open.* 10 comments. End-to-end dogfood of the Fleet/Workflow/Lane/Runtime model against active stopship issues. References concrete invocation examples.

4. **[#4175 – v0.8.68 architecture: Fleet / Workflow / Lane / Runtime product model (canonical tracker)](https://github.com/Hmbown/CodeWhale/issues/4175)**  
   *Open.* 9 comments. The approved vocabulary and separation of concerns, linking implementation phases to prevent concept collapse. Key reference for new contributors.

5. **[#4095 – v0.8.68 UX: default TUI presentation is too busy; compact mode should be standard](https://github.com/Hmbown/CodeWhale/issues/4095)**  
   *Closed.* 9 comments. Treats the chaotic default TUI as a bug rather than a feature request. Compact mode is now the baseline for v0.8.68.

6. **[#4038 – v0.8.68 Workflow: product-readiness tracker](https://github.com/Hmbown/CodeWhale/issues/4038)**  
   *Closed.* 7 comments. Umbrella issue for making Workflow product‑ready: stable tool, normal run path, compact view, high-fan-out resource story. Foundational for the release.

7. **[#2934 – feat: sidebar sessions panel with auto-resume and session history browsing](https://github.com/Hmbown/CodeWhale/issues/2934)**  
   *Open.* 5 comments. Long-standing feature request for persistent session sidebar. Continues to gather support as a usability gap.

8. **[#4329 – Anthropic API error: tool_use IDs without tool_result blocks](https://github.com/Hmbown/CodeWhale/issues/4329)**  
   *Open.* 2 comments. HTTP 400 with specific `tool_use` identity mismatches. Indicates subagent tool‑use protocol issue on Anthropic routes. Immediate triage likely.

9. **[#4326 – Perf: explain and bound RSS after cancelling a 32-worker storm](https://github.com/Hmbown/CodeWhale/issues/4326)**  
   *Open.* 1 comment. New high fan‑out benchmark reveals RSS does not settle after cancellation. Allocator retention vs. true leak – needs investigation.

10. **[#4333 – Configured picker treats empty provider headers as configured](https://github.com/Hmbown/CodeWhale/issues/4333)**  
    *Open.* 0 comments. An empty `[providers.anthropic.http_headers]` table makes the TUI "configured" view incorrectly list Anthropic as ready. Release‑blocker for v0.8.68.

## Key PR Progress (10 Important)

1. **[#4337 – fix(release): integrate v0.8.68 TUI and Android QA](https://github.com/Hmbown/CodeWhale/pull/4337)**  
   *Merged.* Lands final v0.8.68 cancelled‑shell transcript state, PTY regression coverage, and authenticated Android image updates for Termux. Core release integration.

2. **[#4336 – feat(workflow): dispatch durable lanes without root model](https://github.com/Hmbown/CodeWhale/pull/4336)**  
   *Merged.* Enables `codewhale workflow run` directly through the Workflow tool without an operator model turn. Preserves all profile, approval, sandbox, MCP, and keyring precedence.

3. **[#4332 – fix: make v0.8.68 TUI state and routing truthful](https://github.com/Hmbown/CodeWhale/pull/4332)**  
   *Merged.* Stopship repair: blank provider maps and malformed auth no longer populate the configured view, and session‑restore provider identity is preserved accurately.

4. **[#4331 – docs(release): align v0.8.68 mode FAQ and workflow commands](https://github.com/Hmbown/CodeWhale/pull/4331)**  
   *Merged.* Updates English/Chinese FAQ and README examples to use `lane status` / `lane logs` instead of nonexistent `workflow status` commands. Adds `--fleet` argument.

5. **[#3969 – Add per-sub-agent provider routing](https://github.com/Hmbown/CodeWhale/pull/3969)**  
   *Merged.* Held for v0.8.68 fleet lane. Allows sub‑agents to use a different provider/model per profile. Rebases and re‑routes through fleet profile fields.

6. **[#4330 – fix: update cargo-deny advisory ignore list](https://github.com/Hmbown/CodeWhale/pull/4330)**  
   *Merged.* Removes fixed advisory (lopdf), adds ignores for two transitive unmaintained crates (`derivative`, `fxhash`) via Starlark.

7. **[#4328 – fix: upgrade dependencies to resolve cargo-audit vulnerabilities](https://github.com/Hmbown/CodeWhale/pull/4328)**  
   *Merged.* Upgrades `crossbeam-epoch`, `pdf-extract`/`lopdf`, and `ttf-parser` to fix stack overflow and pointer dereference vulnerabilities.

8. **[#4272 – ci: add RustSec security audit and cargo-deny checks](https://github.com/Hmbown/CodeWhale/pull/4272)**  
   *Merged.* Introduces `cargo-audit` (non‑blocking) and `cargo-deny` (full advisory, license, ban checks) to CI. Strengthens supply‑chain security.

9. **[#4342 – chore(deps): bump rmcp from 1.8.0 to 2.2.0](https://github.com/Hmbown/CodeWhale/pull/4342)**  
   *Open.* Major version bump of the Model Context Protocol Rust SDK. Includes new features (e.g., pop-up hints, `Inspector.run`). Requires careful review for API breakage.

10. **[#4339 – chore(deps): bump jsonschema from 0.46.4 to 0.47.0](https://github.com/Hmbown/CodeWhale/pull/4339)**  
    *Open.* Python-side schema validation bump. Notable for dependency hygiene but not yet merged.

## Feature Request Trends

- **TUI customisation & session management** – #2934 (sidebar sessions), #4095 (compact mode), and #3211 (permission profiles) show strong desire for a less cluttered, more organised interface with persistent session browsing and non‑blocking defaults.
- **Improved model routing & provider handling** – #2984 (OAuth verification), #4334 (custom provider identity preserve), and #4175 (Fleet/Workflow/Lane model) point to demand for precise, user‑defined provider selection and authentication transparency.
- **Memory & context per project** – #3976 (seed project‑scoped recall) highlights a lack of lightweight, persistent per‑project context before the full external-memory backend lands.
- **Agent behaviour compliance** – #4032 (constitution not followed) and #4038 (workflow product‑readiness) indicate users expect strict adherence to user‑defined rules and scripts, not improvisation.

## Developer Pain Points

- **TUI visual chaos** – Repeated complaints that the default TUI mode is “too busy” and “chaotic”, especially when many sub‑agents are active (see #4095, #4326). Compact mode is now the fix.
- **Configuration surprises** – Empty provider headers being treated as configured (#4333) and custom provider identity being lost on session restore (#4334) erode trust in the setup flow.
- **API protocol mismatches** – The Anthropic `tool_use` / `tool_result` error (#4329) reveals a fragile subagent tool‑use contract that can break with certain provider versions.
- **Performance regressions** – High fan‑out (32 workers) leaves lingering RSS growth even after cancellation (#4326), making resource accounting harder.
- **Documentation drift** – #4331 had to fix outdated README commands; #4032 shows that users still find the agent’s behaviour inconsistent with the “constitution”. Clearer docs and stricter enforcement are needed.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/boom7sss/agents-radar).*