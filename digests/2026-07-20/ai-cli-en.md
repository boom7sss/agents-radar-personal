# AI CLI Tools Community Digest 2026-07-20

> Generated: 2026-07-20 03:42 UTC | Tools covered: 9

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

# AI CLI Developer Tools: Cross-Tool Comparison Report
**Date:** 2026-07-20 | **Scope:** 7 major tools

---

## 1. Ecosystem Overview

The AI CLI tools landscape on July 20, 2026 shows a maturing but fractured ecosystem where reliability and security concerns are outpacing feature velocity. No major releases landed across most tools in the past 24 hours, but the community is highly active with 50+ open issues on Claude Code alone and 40 PRs on DeepSeek TUI. A clear pattern emerges: model hallucination, context management failures, and cross-platform stability issues are universal pain points, while each tool pursues differentiated strengths—Claude Code in plugin extensibility, Codex in TUI performance, Qwen Code in built-in web search, and DeepSeek in token-cost optimization. The market is consolidating around standard protocols (ACP, MCP, SSE), but implementation quality varies significantly by platform.

---

## 2. Activity Comparison

| Activity Metric | Claude Code | OpenAI Codex | Gemini CLI | Copilot CLI | Kimi Code CLI | OpenCode | Pi | Qwen Code | DeepSeek TUI |
|---|---|---|---|---|---|---|---|---|---|
| **Repo** | anthropics/claude-code | openai/codex | google-gemini/gemini-cli | github/copilot-cli | MoonshotAI/kimi-cli | anomalyco/opencode | earendil-works/pi | QwenLM/qwen-code | Hmbown/CodeWhale |
| **Open/Updated Issues (24h)** | 50+ | ~10 hot issues | 10 hot issues | 10 hot issues | 4 hot issues | 10 hot issues | 10 hot issues | 10 hot issues | 8 hot issues |
| **PRs (24h)** | 15 | 10 merged | 10 updated | 1 (inactive) | 8 merged/opened | 10 updated | 10 updated | 10 updated | 40 merged/opened |
| **Releases (24h)** | None | None | v0.52.0-nightly | None | None | None | None | v0.20.1-preview.7215 | None |
| **Top Issue Upvotes** | 128 (context visibility) | 261 (macOS syspolicyd) | 9 (quota exhaustion) | 24 (cancel queued msgs) | 13 (remote control) | 20 (Open WebUI provider) | — | — | — |

**Key observations:**
- **DeepSeek TUI** leads in raw PR throughput (40), indicating rapid iteration
- **Claude Code** has the largest issue volume (50+), reflecting both a large user base and unresolved pain points
- **OpenAI Codex** has the highest individual issue engagement (261 👍), signaling a critical macOS bug affecting many users
- **Copilot CLI** shows minimal PR activity—only 1 stale PR from 2023—suggesting development is stalled or focused elsewhere
- **Qwen Code** is the only tool with a full release (v0.20.0) plus a patch in the same day

---

## 3. Shared Feature Directions

### 3.1 Context & Usage Visibility
- **Claude Code** (#18456, 128 👍): Display context usage in VSCode extension
- **Copilot CLI** (#4174, #4189): Expose token/context usage in ACP protocol
- **Pi** (#6819): Handle undefined usage data from providers
- **Qwen Code** (#6569): Improve subagent observability

### 3.2 MCP/Protocol Improvements
- **Claude Code** (#68605): Per-project MCP exclusions
- **Gemini CLI** (#2015): Accept MCP servers without `instructions` field
- **OpenCode** (#28364): Native MCP `mcpServers` config support
- **Qwen Code** (#7147): MCP server tool listing failures
- **Copilot CLI** (#4189): Accurate MCP tool footprint reporting

### 3.3 Platform Parity (Windows)
- **Claude Code** (#79297): MCP ssh.exe failure on Windows
- **OpenAI Codex** (#20214, #25453, #33776): Multiple Windows performance bugs
- **Gemini CLI** (#20929): Shift+Tab cycling on Windows
- **Kimi Code CLI** (#2521): Arrow keys broken in `herdr`
- **Pi** (#6817): `find` tool fails with path separators
- **Qwen Code** (#7139): Docker sandbox invalid cwd on Windows
- **DeepSeek TUI** (#4564): Flag parsing bug on Windows

### 3.4 Subagent/Multi-Agent Isolation
- **Claude Code** (#79269): Prompt injection in subagent context
- **Gemini CLI** (#21052): Sub-agents hang on interactive prompts
- **Qwen Code** (#7156): Subagent mutates main session model
- **DeepSeek TUI** (#4600): Auto-fork read-only sub-agents to reuse cache
- **Pi** (#6832): Orphan tool results from compaction

### 3.5 Security & Permission Controls
- **Claude Code** (#79269): Safety classifier unavailable during injection
- **Gemini CLI** (#19997): API key redaction missing in proxy URLs
- **OpenCode** (#16075, #28467): Permission bypass through env vars and plan mode
- **OpenAI Codex**: Safety-check false positives blocking defensive operations
- **DeepSeek TUI** (#4595/#4596): Full Access false positives on feature-branch pushes

---

## 4. Differentiation Analysis

| Dimension | Claude Code | OpenAI Codex | Gemini CLI | Copilot CLI | Qwen Code | DeepSeek TUI |
|---|---|---|---|---|---|---|
| **Primary Focus** | Plugin/system extensibility | TUI rendering performance | Config reliability & eval tooling | Plan mode & voice features | Built-in search & channel mgmt | Token-cost optimization |
| **Target Users** | Power users, plugin developers | Desktop/macOS developers | Enterprise, Google ecosystem | GitHub workflow developers | Chinese market, cross-platform | Cost-sensitive, Windows-heavy |
| **Model Support** | Claude models (Opus, Fable) | GPT-4/5, proprietary | Gemini models | GPT-5.6 + Claude via subagents | Qwen models, Moonshot | Multiple providers via auto-fork |
| **Unique Strength** | Hookify rules, plugin system | High-performance Rust TUI | Deep Google ecosystem integration | GitHub Actions integration | First-class web search | 18% prompt compression, auto-fork |
| **Key Weakness** | Hallucination spirals (#77402) | macOS syspolicyd runaway | Account quota confusion (#22493) | Low dev activity | Subagent model corruption | Sidebar scroll bugs |
| **Development Pace** | Moderate (15 PRs/day) | High (10 PRs/day, merged) | Moderate (10 PRs/day) | Stalled (1 PR in 24h) | Rapid (8 PRs/day) | Very rapid (40 PRs/day) |

**Notable differences:**
- **Claude Code** is the only tool with a dedicated plugin system (hookify, rule engine) and the only one facing prompt-injection incidents in subagent workflows
- **OpenAI Codex** leads in TUI engineering (10 rendering-related PRs in 24h) but struggles with macOS system daemon conflicts
- **Gemini CLI** is investing heavily in evaluation infrastructure (#28369), positioning for enterprise customers who need auditability
- **Copilot CLI** appears to be in maintenance mode with minimal code changes, though issue triage is active
- **Qwen Code** is the only tool with a built-in `web_search` tool (PR #7215), differentiating from MCP-based approaches
- **DeepSeek TUI** uniquely focuses on token-cost reduction (auto-fork, prompt compression) as a primary value proposition

---

## 5. Community Momentum & Maturity

| Tool | Community Health | Issue Response Quality | Feature Velocity | Risk Level |
|---|---|---|---|---|
| **Claude Code** | ★★★★☆ High engagement | Mixed (long-standing issues unaddressed) | Moderate | Medium—hallucination & injection risks |
| **OpenAI Codex** | ★★★★☆ Strong macOS/Windows userbase | Good (PRs merged same day) | High | Medium—TUI fixes outpacing systemic bugs |
| **Gemini CLI** | ★★★☆☆ Growing enterprise interest | Moderate | Moderate | Low-Medium—quota & auth friction |
| **Copilot CLI** | ★★☆☆☆ Declining | Low (1 stale PR) | Very Low | High—voice & plan mode regressions unfixed |
| **Kimi Code CLI** | ★★★☆☆ Small but dedicated | Good (quick PRs for reported bugs) | High | Low—focused on fixing session state bugs |
| **OpenCode** | ★★★☆☆ Moderate | Good (provider fixes fast) | Moderate | Medium—memory leak critical |
| **Pi** | ★★☆☆☆ Small | Excellent (bugs closed same day) | High | Low—responsive maintainers |
| **Qwen Code** | ★★★★☆ Strong Asian developer base | Good | Very High | Medium—subagent corruption risk |
| **DeepSeek TUI** | ★★★☆☆ Rapidly growing | Excellent (40 PRs/day) | Very High | Low—aggressive bug fixing |

**Maturity assessment:**
- **Established but struggling**: Claude Code and OpenAI Codex have the largest user bases but face escalating reliability concerns
- **Rapid iteration phase**: Qwen Code, DeepSeek TUI, and Kimi Code CLI are shipping fixes and features at high velocity
- **Enterprise maturation**: Gemini CLI is building evaluation and compliance infrastructure for enterprise adoption
- **At risk**: Copilot CLI shows signs of abandonment (1 stale PR, no active development)
- **Niche but healthy**: Pi and OpenCode serve smaller communities but maintain excellent issue-to-fix cycles

---

## 6. Trend Signals

### 6.1 Reliability Over Features
The top issues across *all* tools are not missing features but **systemic failures**—hallucination spirals (Claude Code), memory leaks (OpenCode, Pi), SSE connection leaks (Qwen Code, Gemini CLI), and platform-specific crashes (Codex, Gemini). This signals a market shift from "what can it do" to "can I trust it to work."

### 6.2 Multi-Agent Architecture Fragility
Every tool with subagent support reports **model corruption, context leakage, and resource starvation** (Claude Code #79269, Gemini CLI #21052, Qwen Code #7156, DeepSeek TUI #4600). The industry has not solved safe parallel agent execution at scale.

### 6.3 Token Economics Driving Design
DeepSeek TUI’s prompt compression (−18%) and auto-fork cache reuse, Claude Code’s context visibility requests, and OpenCode’s model-hinting features all point to **token cost optimization** as a primary UX concern. Developers are acutely aware of per-token pricing.

### 6.4 Platform Parity Is a Competitive Moat
Windows issues appear in every tool’s top complaints. Qwen Code and Pi are addressing this more aggressively than Claude Code or Gemini CLI. **Cross-platform reliability** is becoming a key differentiator.

### 6.5 Security Is Underserved
Prompt injection (Claude Code #79269), API key exposure (Gemini CLI #19997), permission bypass (OpenCode), and safety classifier unavailability are **not isolated incidents**. The industry lacks standardized security boundaries for AI CLI agents.

### 6.6 For Developer Decision-Makers
- **If reliability is critical**: Qwen Code and DeepSeek TUI have the highest fix velocity for reported bugs
- **If ecosystem integration matters**: Claude Code (plugin system) and Gemini CLI (Google Cloud) offer the most mature extensibility
- **If cost efficiency is paramount**: DeepSeek TUI’s token optimization features are unique in the market
- **If you need Windows support**: Avoid Claude Code and Gemini CLI for advanced workflows; Qwen Code and Pi have more proactive fixes
- **If you’re evaluating Copilot CLI**: Consider migrating—development activity has effectively stalled

---

*Report generated from 2026-07-20 community digest data across 7 AI CLI tool projects.*

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
**Data snapshot: 2026-07-20 | Source: github.com/anthropics/skills**

---

## 1. Top Skills Ranking

The following pull requests received the highest community discussion volume. All remain **open** at the time of this report.

| Rank | PR | Skill | Key Discussion Focus |
|------|-----|-------|---------------------|
| 1 | [#1298](https://github.com/anthropics/skills/pull/1298) | `fix(skill-creator)`: run_eval.py reports 0% recall | Root-cause analysis of the optimizer noise bug (#556, 10+ reproductions). Proposes installing eval artifact as a real skill, fixing Windows stream reading, trigger detection, and parallel workers. **Status: Open** |
| 2 | [#514](https://github.com/anthropics/skills/pull/514) | `document-typography`: typographic quality control | Prevents orphan words, widow paragraphs, and numbering misalignment in AI-generated documents. Targets a universal pain point in Claude output formatting. **Status: Open** |
| 3 | [#538](https://github.com/anthropics/skills/pull/538) | `fix(pdf)`: case-sensitive file references | Fixes 8 case-sensitivity mismatches in `skills/pdf/SKILL.md` that break on case-sensitive filesystems. **Status: Open** |
| 4 | [#486](https://github.com/anthropics/skills/pull/486) | `odt`: OpenDocument text creation and template filling | Comprehensive skill for `.odt` / `.ods` / `.odf` files—creation, fill, read, and HTML conversion. Targets LibreOffice users and ISO standard document workflows. **Status: Open** |
| 5 | [#210](https://github.com/anthropics/skills/pull/210) | `frontend-design`: clarity and actionability revision | Overhauls the frontend-design skill to ensure every instruction is actionable within a single conversation, with specific behavioral guidance for Claude. **Status: Open** |
| 6 | [#83](https://github.com/anthropics/skills/pull/83) | `skill-quality-analyzer` + `skill-security-analyzer` | Two meta-skills for evaluating Skills across quality dimensions (structure, documentation, edge cases, security, efficiency). Pioneers community quality standards. **Status: Open** |
| 7 | [#541](https://github.com/anthropics/skills/pull/541) | `fix(docx)`: tracked change `w:id` collision with bookmarks | Fixes document corruption when adding tracked changes to documents with existing bookmarks, caused by shared OOXML ID space collisions. **Status: Open** |
| 8 | [#1367](https://github.com/anthropics/skills/pull/1367) | `self-audit`: mechanical verification + reasoning quality gate | A universal audit skill that verifies output file existence mechanically, then runs a four-dimension reasoning audit in damage-severity priority order. Works with any project and model. **Status: Open** |

**Observation**: The skill-creator toolchain itself dominates the top of the ranking (#1298, #538, #541, #539), indicating the community's primary pain point is the *reliability of the development tooling* rather than individual skill content.

---

## 2. Community Demand Trends

From the Issues tracker (50 total issues, 15 most-commented shown), the community's most-anticipated directions cluster into five themes:

### 2.1 Security & Trust Boundaries
- **Issue #492** (39 comments, 2 👍) — "Security: Community skills distributed under anthropic/ namespace enable trust boundary abuse." This is the most-commented issue in the repository. Community members are concerned that the `anthropic/` namespace grants implied authority to community skills, creating a permission escalation risk.
- **Issue #1175** (4 comments) — Security concerns with SharePoint Online (SPO) document handling via skills, specifically embedding access control logic in SKILL.md files.

### 2.2 Organizational Sharing & Distribution
- **Issue #228** (14 comments, 7 👍) — "Enable org-wide skill sharing in Claude.ai." Currently requires manual `.skill` file transfer via Slack/Teams; community wants a shared skill library or direct sharing links.

### 2.3 Toolchain Reliability (skill-creator)
- **Issue #556** (12 comments, 7 👍) — "run_eval.py: claude -p never triggers skills/commands (0% trigger rate across all queries)." Multiple independent reproductions confirm the optimization loop is optimizing against noise.
- **Issue #1169** (3 comments) — Same symptom reported for the description-optimization loop specifically.
- **Issue #1061** (3 comments, 2 👍) — Windows compatibility: subprocess PATHEXT, cp1252 encoding, select on pipes.
- **Issue #202** (8 comments, closed) — "skill-creator should be updated to best practice" — reading like developer documentation rather than an operational skill.

### 2.4 Governance & Safety Patterns
- **Issue #412** (6 comments) — Proposal for `agent-governance`: safety patterns for AI agent systems—policy enforcement, threat detection, trust scoring, and audit trails.
- **Issue #1385** (3 comments) — "Reasoning Quality Gate Pipeline: Pre-task Calibration → Adversarial Review → Delivery Verification." Proposes a three-gate pipeline covering the full session lifecycle.

### 2.5 Memory & Context Efficiency
- **Issue #1329** (9 comments) — Proposal for `compact-memory`: symbolic notation for compact agent state, reducing context consumption from long-running agents' notes and persistent memory.

### 2.6 Duplicate Plugins & Ecosystem Management
- **Issue #189** (6 comments, 9 👍) — "document-skills and example-skills plugins install identical content, causing duplicate skills." High upvote ratio suggests strong community interest in a clean, deduplicated plugin architecture.

---

## 3. High-Potential Pending Skills

These open PRs have active discussion and may land soon based on community momentum:

| PR | Skill | Why It's Ready | Last Updated |
|-----|-------|----------------|--------------|
| [#1298](https://github.com/anthropics/skills/pull/1298) | `fix(skill-creator)` run_eval.py 0% recall | Addresses #556 (12 comments, 7 👍)—the single most impactful bug. Author has deep analysis of the root cause. | 2026-06-23 |
| [#1099](https://github.com/anthropics/skills/pull/1099) | `fix(skill-creator)` Windows subprocess pipe crash | Complements #1050; fixes ``[WinError 10038]`` on Windows. Multiple users reporting this on the issue tracker. | 2026-05-24 |
| [#1050](https://github.com/anthropics/skills/pull/1050) | `fix(skill-creator)` Windows subprocess + encoding | Two one-line fixes for `PATHEXT` and encoding. Low risk, high impact for Windows users. | 2026-05-24 |
| [#1367](https://github.com/anthropics/skills/pull/1367) | `self-audit` reasoning quality gate | Universal, no-tech-stack dependency. Author also filed #1385 proposing expanded pipeline. | 2026-07-02 |
| [#723](https://github.com/anthropics/skills/pull/723) | `testing-patterns` full testing stack | Covers testing trophy model, unit testing (AAA), React Testing Library, and mocking. Comprehensive. | 2026-04-21 |
| [#525](https://github.com/anthropics/skills/pull/525) | `pyxel` retro game development | Integrates with pyxel-mcp MCP server. Niche but has sustained updates. | 2026-07-15 |
| [#1323](https://github.com/anthropics/skills/pull/1323) | `fix(skill-creator)` trigger detection misses real skill name | Third fix for the run_eval trigger detection family (after #1298). Community is converging on this problem space. | 2026-06-25 |

**Note**: The cluster of skill-creator fixes (#1298, #1099, #1050, #1323, plus #362, #361) represents the community's coordinated effort to stabilize the development toolchain. Any of these could merge quickly.

---

## 4. Skills Ecosystem Insight

**The community's most concentrated demand is reliability of the skill development toolchain itself—specifically, fixing `run_eval.py`'s 0% recall bug and achieving cross-platform (Windows) compatibility—rather than new skill content, as evidenced by 5+ independent reproductions of the same root cause across as many PRs and issues, all converging on the same `run_single_query` trigger detection failure.**

---

# Claude Code Community Digest — 2026-07-20

## Today’s Highlights
No new releases landed in the past 24 hours, but the community remains highly active with 50 open/updated issues and 15 PRs. A long-running account‑restriction appeal loop (#62503) continues to frustrate users, while a critical Opus 4.8 hallucination spiral (#77402) and a prompt‑injection incident in subagent workflows (#79269) signal growing reliability and security concerns. On the PR side, Codeturion contributed a batch of documentation and script fixes across the plugin system, and a new mobile‑triage report organises 96 open mobile issues.

## Releases
No releases in the last 24 hours.

## Hot Issues
1. **[#62503 – Appeal Form Redirect Loop After Account Restriction](https://github.com/anthropics/claude-code/issues/62503)**  
   *38 comments, 5 👍*  
   Users whose accounts are restricted report being stuck in a redirect loop when trying to submit an appeal form. No resolution in two months; the high comment count shows this is a top community pain point.

2. **[#18456 – VSCode Extension: Display context usage percentage in UI](https://github.com/anthropics/claude-code/issues/18456)**  
   *14 comments, 128 👍*  
   The most upvoted open feature request. Developers want context consumption visible in the VSCode extension, mirroring the CLI’s custom status line. High demand for better visibility into Claude’s context budget.

3. **[#77402 – Opus 4.8 systemic failure – hallucination spiral, context dropping, tool output loss](https://github.com/anthropics/claude-code/issues/77402)**  
   *2 comments*  
   A detailed report of sustained hallucination cascades where Opus 4.8 produces fabricated tool outputs and loses context mid‑session. Model reliability remains a top concern.

4. **[#79269 – Prompt injection appeared in subagent context; safety classifier unavailable](https://github.com/anthropics/claude-code/issues/79269)**  
   *1 comment*  
   A parallel subagent returned output containing an injected instruction framework not present in any input, coinciding with the safety classifier being unavailable. Raises serious security questions about agent isolation.

5. **[#79295 – Opus 4.6: Evidence-before-action violations and circular spec-fix regression](https://github.com/anthropics/claude-code/issues/79295)**  
   *New today*  
   Reports that Opus 4.6 ignored its own governing instructions during a specification review, requiring five rounds of circular fixes. Model adherence to system instructions is inconsistent.

6. **[#79292 – Subagent SSE streams stall silently at scale; connections stay ESTABLISHED with zero bytes](https://github.com/anthropics/claude-code/issues/79292)**  
   *New today*  
   On Windows with Claude Code 2.1.214, subagent SSE connections freeze while the TCP connection remains open. Affects dynamic workflows with many parallel agents.

7. **[#79297 – Windows: stdio MCP server spawning ssh.exe never connects](https://github.com/anthropics/claude-code/issues/79297)**  
   *New today*  
   stdio MCP servers that use Windows’ ssh.exe fail to connect, while the same server works on macOS, Codex CLI, or direct pipe. Platform parity issue for Windows power users.

8. **[#79293 – Model continues past end of turn, fabricates user turn and system reminder](https://github.com/anthropics/claude-code/issues/79293)**  
   *New today*  
   A disturbing hallucination where the model emits a fabricated user turn and system reminder inside its own assistant message. Points to possible systemic failures in turn‑boundary handling.

9. **[#79287 – VS Code editor focus/group behavior changed after 2.1.215 update](https://github.com/anthropics/claude-code/issues/79287)**  
   *New today*  
   Post‑update, clicking files from Explorer opens them in unexpected editor groups, breaking Claude Code’s ability to work in the correct panel. Regression affecting daily workflows.

10. **[#79272 – Model downgrade from Fable to Opus during security implementation tasks](https://github.com/anthropics/claude-code/issues/79272)**  
    *New today*  
    Multiple reports that the model drops from Claude Fable to Opus when tasks involve cybersecurity, even for simple home‑service apps. Users feel penalised for writing secure code.

## Key PR Progress
1. **[#79237 – Fix: add `_is_isolated_worktree` guard to prevent spawn from mutating parent repo](https://github.com/anthropics/claude-code/pull/79237)**  
   Prevents `spawn_task` from running `git checkout` on the parent repository by adding a reusable isolation check. Important for safe parallel task execution.

2. **[#79224 – Mobile app issue triage: ranked report for July 12–19](https://github.com/anthropics/claude-code/pull/79224)**  
   Organises 96 open mobile issues into a ranked triage report (iOS/Android apps, Remote Control, Dispatch). A step toward better mobile‑ticket management.

3. **[#79211 – Fix: remove stray `re` syntax error and close `_extract_field` method in rule_engine.py](https://github.com/anthropics/claude-code/pull/79211)**  
   Fixes a broken `_extract_field` method that caused rule‑engine crashes and incorrect hook flags. Essential for the hookify rules system.

4. **[#79210 – Fix: strip ANSI escape fragments from model value before persisting to settings.json](https://github.com/anthropics/claude-code/pull/79210)**  
   The `/model` picker was saving ANSI bold escape codes (`[1m`) instead of the raw model ID. This fix clears the corruption in settings files.

5. **[#79152 – fix: only log the Statsig duplicate‑comment metric when a duplicate comment was posted](https://github.com/anthropics/claude-code/pull/79152)**  
   Removes an unconditional `always()` emission of a duplicate‑comment metric, which was inflating stats. Improves telemetry accuracy.

6. **[#79151 – fix: honor thumbs‑down from any user when skipping duplicate auto‑close](https://github.com/anthropics/claude-code/pull/79151)**  
   Previously only the issue author’s thumbs‑down was respected; this PR extends the check to any user, aligning with the dedupe bot’s own instructions.

7. **[#79150 – docs: align code‑review README with the current validation‑based command](https://github.com/anthropics/claude-code/pull/79150)**  
   The README described an outdated pipeline (git blame agent, confidence scoring) that no longer exists. Critical for new contributors.

8. **[#79148 – fix: add mandatory `hookify.` prefix to example rule filenames](https://github.com/anthropics/claude-code/pull/79148)**  
   All four shipped example rules lacked the required `hookify.` prefix, making them silently ignored. Fixes discoverability of the hookify skill.

9. **[#79140 – fix: use `disable-model-invocation` to hide ralph‑wiggum commands from model invocation](https://github.com/anthropics/claude-code/pull/79140)**  
   The `/ralph-loop` command used a non‑functional `hide-from-slash-command-tool` flag, allowing the model to self‑invoke an endless loop. Now properly hidden.

10. **[#54094 – fix: quote `$CLAUDE_PLUGIN_ROOT` in plugin hook commands](https://github.com/anthropics/claude-code/pull/54094)**  
    Five in‑tree plugins broke when `CLAUDE_PLUGIN_ROOT` contained spaces. This long‑standing PR (open since April) finally seems to be gaining traction.

## Feature Request Trends
- **Context visibility in IDEs** – The top request (#18456, 128 👍) calls for context‑usage display in VSCode, echoing CLI status lines. Users want to know when context limits are approaching.
- **Per‑project MCP exclusions** – The ability to disable global/user‑scoped MCP servers for specific projects (#68605) would give teams finer control over tooling.
- **Agent‑view improvements** – A new feature request (#79281) asks for marking the main session and using colour to distinguish parallel agent outputs in the CLI terminal.
- **Official Linux distribution support** – Community wants Arch Linux / EndeavourOS support for Claude Desktop (#79296), reflecting a significant developer audience on rolling‑release distributions.
- **Group by PR status in desktop app** – The removal of a “Group by PR status” option (#78115) has been met with a feature request to restore it.

## Developer Pain Points
- **Account restrictions and appeal loops** – Issues #62503 and #51670 highlight a broken appeal process where restricted users cannot submit or follow up on appeals, sometimes waiting weeks with no response.
- **Model reliability and hallucination** – Multiple reports (#77402, #79295, #79293, #79272) describe Opus and Fable models hallucinating output, ignoring instructions, dropping context, or fabricating user turns. Security‑related tasks trigger model downgrades, which frustrates developers.
- **Prompt injection risks in subagents** – #79269 and related discussions show that parallel agent fan‑out can expose sensitive contexts to injection, while the safety classifier can be unavailable at the same time.
- **Windows platform bugs** – Subprocess hangs (#79289), MCP SSH connection failures (#79297), and persistent SSE stalls (#79292) make Windows a second‑class citizen for advanced workflows.
- **MCP documentation and configuration** – Incorrect `.mcp.json` examples (#63694), undocumented reserved server names (#56154), and silent shadowing of local settings by remote org settings (#79290) create confusion for developers setting up MCP servers.
- **Plugin and hook fragility** – Scripts fail on older bash, unquoted paths break with spaces, and hookify rules are silently ignored. The flurry of PRs from Codeturion shows the community is actively fixing these papercuts.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-07-20

## Today’s Highlights
Performance regressions on both macOS and Windows continue to dominate community discussion, with two longstanding issues (macOS `syspolicyd` runaway and Windows app freezes) each accumulating over 50 comments. Meanwhile, the engineering team merged a large batch of PRs (16 closed in the last 24 hours) that focus squarely on reducing memory churn and streamlining rendering in the terminal UI (TUI), signalling a prioritisation of stability for CLI and desktop tooling. No new releases were published today.

---

## Releases
No new versions were released in the last 24 hours.

---

## Hot Issues

1. **[#25719] Codex Desktop for macOS repeatedly triggers `syspolicyd` / `trustd` CPU and memory runaway**  
   - Comments: 68 | 👍: 261  
   - A critical macOS bug where the desktop app causes system security daemons to spin out of control, impacting overall machine responsiveness. The high upvote count (261) reflects widespread frustration.  
   [OpenAI/Codex Issue #25719](https://github.com/openai/codex/issues/25719)

2. **[#20214] Codex App frequently freezes/stutters on Windows 11 Pro despite sufficient resources**  
   - Comments: 55 | 👍: 68  
   - A long-standing Windows performance complaint with no clear resolution yet. Users report stutter even on high-end hardware (Ryzen 5, 32 GB RAM).  
   [OpenAI/Codex Issue #20214](https://github.com/openai/codex/issues/20214)

3. **[#8197] [CLOSED] VS Code extension panel becomes grey after running a long time**  
   - Comments: 51 | 👍: 18  
   - Although closed, the issue’s high engagement indicates that many users hit UI degradation in long sessions. The fix appears to have been backported.  
   [OpenAI/Codex Issue #8197](https://github.com/openai/codex/issues/8197)

4. **[#29532] macOS: Persistent SQLite TRACE log churn remains after `rust-v0.142.0`**  
   - Comments: 43 | 👍: 8  
   - Even after a partial fix, SQLite logging continues to bloat user directories on macOS. The issue points to incomplete suppression of `codex_api::endpoint::responses_websocket`.  
   [OpenAI/Codex Issue #29532](https://github.com/openai/codex/issues/29532)

5. **[#28969] [Enhancement] Add setting to disable the auto-resolve in 60 seconds for questions**  
   - Comments: 42 | 👍: 139  
   - A highly requested feature (139 👍) to allow users to opt out of the automatic 60-second resolution timeout in Codex CLI. The community wants more control over pacing.  
   [OpenAI/Codex Issue #28969](https://github.com/openai/codex/issues/28969)

6. **[#30009] `apply_patch` fails with Windows sandbox related error**  
   - Comments: 24 | 👍: 7  
   - Windows Pro users encounter patch application failures due to sandbox restrictions. This blocks file-editing workflows on the platform.  
   [OpenAI/Codex Issue #30009](https://github.com/openai/codex/issues/30009)

7. **[#25319] [Enhancement] Scope Codex VS Code chats to the current workspace/project**  
   - Comments: 15 | 👍: 47  
   - A long-standing feature request to thread chat history per project rather than globally. Developers working on multiple repos find the current design disruptive.  
   [OpenAI/Codex Issue #25319](https://github.com/openai/codex/issues/25319)

8. **[#25453] Windows: Codex Desktop spawns `powershell.exe` every second for process polling**  
   - Comments: 12 | 👍: 2  
   - A significant resource drain where the desktop app repeatedly launches short-lived PowerShell processes, causing high CPU usage even when idle.  
   [OpenAI/Codex Issue #25453](https://github.com/openai/codex/issues/25453)

9. **[#18629] Desktop threads can be poisoned by inline base64 tool images**  
   - Comments: 10 | 👍: 1  
   - An architectural concern: tool output containing large `data:image/...;base64` blobs is persisted into session history, eventually causing `Bad Request` errors and inflated token usage.  
   [OpenAI/Codex Issue #18629](https://github.com/openai/codex/issues/18629)

10. **[#33776] Windows: `ChatGPT.exe` spawns hundreds of `taskkill.exe` / `conhost.exe` processes**  
    - Comments: 10 | 👍: 9  
    - A new severe performance bug where process spawning cascades into WMI storms and DWM degradation, causing system-wide stutter.  
    [OpenAI/Codex Issue #33776](https://github.com/openai/codex/issues/33776)

---

## Key PR Progress

1. **[#34234] Avoid redundant TUI subagent metadata requests**  
   - Skips background loading for fresh/forked threads to reduce unnecessary API calls.  
   [PR #34234](https://github.com/openai/codex/pull/34234)

2. **[#34232] Remeasure dynamic cells in the transcript overlay**  
   - Fixes clipping of cells that change size after insertion (e.g., visualizations).  
   [PR #34232](https://github.com/openai/codex/pull/34232)

3. **[#34229] Persist names for paginated threads**  
   - Adds a `name` column to thread metadata for better user-facing differentiation of paginated threads.  
   [PR #34229](https://github.com/openai/codex/pull/34229)

4. **[#34226] Backfill completion items only for the active exec turn**  
   - Avoids unnecessary `thread/read` requests when multi-agent sessions produce unrelated completion events.  
   [PR #34226](https://github.com/openai/codex/pull/34226)

5. **[#34224] Avoid cloning file changes in TUI diff rendering**  
   - Reduces memory pressure by consuming `DiffSummary` entries directly rather than cloning them.  
   [PR #34224](https://github.com/openai/codex/pull/34224)

6. **[#34223] Cache finalized Markdown history rendering**  
   - Reuses previously rendered lines for finalized agent messages, cutting down repeated layout calculations at the same width.  
   [PR #34223](https://github.com/openai/codex/pull/34223)

7. **[#34222] Avoid buffering replay-irrelevant thread notifications**  
   - Drops large payloads (raw response items, real-time audio) from the replay buffer, preventing memory eviction of useful events.  
   [PR #34222](https://github.com/openai/codex/pull/34222)

8. **[#34218] Track TUI command completion separately from output**  
   - Prevents premature marking of a command as inactive by separating output arrival from completion detection.  
   [PR #34218](https://github.com/openai/codex/pull/34218)

9. **[#34217] Keep incremental rendering with visualization context**  
   - Preserves the stable rendered prefix when no visualization directives exist, avoiding full re-render on each Markdown update.  
   [PR #34217](https://github.com/openai/codex/pull/34217)

10. **[#34216] Speed up TUI Markdown layout**  
    - Bulk allocation of table widths, reuse of styled-line data, and span-aware URL detection reduce layout overhead.  
    [PR #34216](https://github.com/openai/codex/pull/34216)

---

## Feature Request Trends

- **Disable auto-resolve timeout** ([#28969](https://github.com/openai/codex/issues/28969)) – Strong community desire (139 👍) to control the 60-second automatic resolution in CLI.
- **Workspace-scoped chats** ([#25319](https://github.com/openai/codex/issues/25319)) – Developers want per-project conversation history in the VS Code extension.
- **Full editor tab support** ([#20951](https://github.com/openai/codex/issues/20951)) – Request to open Codex sessions as normal VS Code editor tabs, mirroring how Claude Code integrates.
- **MCP tool‑only servers** ([#14242](https://github.com/openai/codex/issues/14242)) – Users need Codex to discover MCP servers that expose only tools (no resources) without blocking at `list_mcp_resources`.

---

## Developer Pain Points

- **Cross-platform performance instability** – Both macOS and Windows users report runaway system processes (`syspolicyd`, `powershell.exe`, `taskkill.exe`) that degrade overall machine performance.
- **Persistent log churn** – SQLite TRACE logging continues on macOS even after setting `RUST_LOG=warn`, filling disk space and CPU time.
- **Sandbox/patch failures on Windows** – `apply_patch` routinely fails due to sandbox restrictions, and the sandbox configuration forces an undesirable trade-off between process creation and split-root operations.
- **Session poisoning via inline media** – Base64 image blobs persisted into thread history cause `Bad Request` errors and balloon token usage.
- **UI freezes and model selector disappearance** – The desktop app and VS Code extension both suffer from intermittent hangs, blank panels, and missing model selectors after switching chats.
- **Safety‑check false positives** – Cybersecurity guards in CLI block legitimate defensive operations, frustrating security researchers.
- **MCP resource discovery stalls** – Codex fails to list tool-only MCP servers, effectively halting integration with services like Context7.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest – 2026-07-20

## Today's Highlights

Nightly release v0.52.0-nightly was published, and a major dependency refresh swept through the repository (TypeScript 7.0.2, Vitest 4.1.10, ESLint 10.7.0). The community continues to report critical hangs, authentication regressions, and security concerns, while maintainers are actively working on config reliability, evaluation tooling, and platform parity. A looming transition to the “Antigravity CLI” has sparked high‑interest questions about open‑source continuity.

## Releases

- **v0.52.0-nightly.20260720** – Automated nightly build; no changelog details.  
  [Full diff →](https://github.com/google-gemini/gemini-cli/compare/v0.52.0-nightly.20260719.gacae7124b...v0.52.0-nightly.20260720.gacae7124b)

## Hot Issues

*(10 noteworthy items, ordered by comment activity)*

1. **#22493 – Account reaches limit without use**  
   *Open · P2 · enterprise · 12 comments · 9 👍*  
   User reports sudden quota exhaustion without active usage; suspects bug, policy change, or compromise. High community engagement.  
   [Issue →](https://github.com/google-gemini/gemini-cli/issues/22493)

2. **#19997 – API key redaction missing in proxy URLs**  
   *Open · P1 · security · 10 comments*  
   Credentials embedded in proxy URLs are logged in telemetry without redaction. A test exists but implementation is missing.  
   [Issue →](https://github.com/google-gemini/gemini-cli/issues/19997)

3. **#20005 – Silent .env omission in untrusted workspaces**  
   *Open · P2 · core · 9 comments*  
   When `GEMINI_API_KEY` is in `.env` but the workspace is untrusted, the CLI silently fails to load it, producing a misleading auth error.  
   [Issue →](https://github.com/google-gemini/gemini-cli/issues/20005)

4. **#22241 – CLI hangs indefinitely with Google One AI Ultra (OAuth)**  
   *Open · P1 · enterprise · 7 comments · 1 👍*  
   All API calls hang when authenticated via Google One AI Ultra subscription; regression from mid‑March.  
   [Issue →](https://github.com/google-gemini/gemini-cli/issues/22241)

5. **#2015 – MCP without instructions rejected**  
   *Open · P2 · agent · 6 comments · 5 👍*  
   `instructions` field is optional per MCP spec, but Gemini CLI refuses to connect if missing.  
   [Issue →](https://github.com/google-gemini/gemini-cli/issues/2015)

6. **#20929 – Shift+Tab not cycling approval mode on Windows**  
   *Open · P2 · platform · 6 comments*  
   Keyboard shortcut for toggling approval mode fails in PowerShell and Command Prompt.  
   [Issue →](https://github.com/google-gemini/gemini-cli/issues/20929)

7. **#21052 – Sub‑agents hang on interactive prompts (v0.32.0 regression)**  
   *Open · P1 · agent · 3 comments · 4 👍*  
   Commands like `npm install` that require user interaction cause sub‑agents to hang silently. Reverting to v0.31.0 works.  
   [Issue →](https://github.com/google-gemini/gemini-cli/issues/21052)

8. **#19590 – Chat context compression failure causes heap crash**  
   *Open · P1 · agent · 4 comments*  
   When conversation history exceeds the compression threshold, a fatal JavaScript heap allocation error shuts down the application.  
   [Issue →](https://github.com/google-gemini/gemini-cli/issues/19590)

9. **#26522 – Auto Memory retrying low‑signal sessions indefinitely**  
   *Open · P2 · agent · 5 comments*  
   Sessions that the extraction agent skips are never marked processed, causing repeated re‑processing and wasted cost.  
   [Issue →](https://github.com/google-gemini/gemini-cli/issues/26522)

10. **#20767 – Skipped test actually passes**  
    *Open · P3 · core · 9 comments*  
    A test `'will not attempt to compress context after a failure'` is marked `it.skip` but passes when enabled; should be re‑enabled.  
    [Issue →](https://github.com/google-gemini/gemini-cli/issues/20767)

## Key PR Progress

*(Top 10 impactful pull requests updated in the last 24h)*

1. **#28364 – Deep‑merge user model config over defaults**  
   *Open · P2 · core*  
   Fixes shallow spread issue where nested `aliases`/`overrides` were not properly merged, causing configuration loss.  
   [PR →](https://github.com/google-gemini/gemini-cli/pull/28364)

2. **#28363 – Prevent AbortSignal listener leak in ShellExecutionService**  
   *Open · P2 · core*  
   Ensures event listeners are cleaned up after process completion, preventing memory leaks in long‑lived sessions. Closes #28280.  
   [PR →](https://github.com/google-gemini/gemini-cli/pull/28363)

3. **#28369 – Add local eval report command and developer documentation**  
   *Open · size/l*  
   New `npm run eval:report` aggregates Vitest pass rates by model and maps to inventory policies. Supports duplicate test handling.  
   [PR →](https://github.com/google-gemini/gemini-cli/pull/28369)

4. **#28256 – Add /nix/store to trusted system paths**  
   *Closed · P2 · documentation*  
   Fixes rejection of binaries like `rg` on NixOS/darwin by including `/nix/store` in the trusted path allowlist.  
   [PR →](https://github.com/google-gemini/gemini-cli/pull/28256)

5. **#28268 – Clean up profile selector logic and remove legacy config**  
   *Closed · P3 · core*  
   Removes legacy profile selector code (ref #28259), simplifying CLI configuration handling.  
   [PR →](https://github.com/google-gemini/gemini-cli/pull/28268)

6. **#28262 – Optimize slash command resolution with pre‑computed WeakMap**  
   *Closed · P3 · core*  
   Replaces linear lookup with O(1) WeakMap for slash command parsing. Closes #28257.  
   [PR →](https://github.com/google-gemini/gemini-cli/pull/28262)

7. **#28459 – Bump `@google/genai` from 1.30.0 to 2.11.0**  
   *Closed · javascript*  
   Major version jump for the GenAI SDK; brings new features and potentially breaking changes.  
   [PR →](https://github.com/google-gemini/gemini-cli/pull/28459)

8. **#28461 – Bump TypeScript from 5.8.3 to 7.0.2**  
   *Closed · javascript*  
   Significant version leap; may require codebase adjustments but unlocks latest TS features.  
   [PR →](https://github.com/google-gemini/gemini-cli/pull/28461)

9. **#28458 – Bump Vitest from 3.1.1 to 4.1.10**  
   *Closed · javascript*  
   Moves test runner to the latest major version with improved performance and new options.  
   [PR →](https://github.com/google-gemini/gemini-cli/pull/28458)

10. **#28457 – Bump `marked` from 15.0.12 to 18.0.6**  
    *Closed · javascript*  
    Major update for the markdown parser; critical for any markdown rendering in the CLI.  
    [PR →](https://github.com/google-gemini/gemini-cli/pull/28457)

## Feature Request Trends

- **AST‑aware file operations** – Epic #22745 investigates using AST parsing for more precise file reads, search, and codebase mapping to reduce token waste and incorrect selections. Community interest is high.
- **Robust evaluation infrastructure** – Epic #24353 calls for component‑level behavioral evals beyond the current 76 tests, automated pass‑rate reporting, and support for six Gemini models.
- **MCP spec compliance** – Multiple issues (#2015, #22179) highlight the CLI’s strict requirement for the optional `instructions` field, causing friction with MCP server developers. Users request lenient default handling.
- **Windows parity** – Keyboard shortcuts (#20929) and headless OAuth (#27300) remain pain points; users want first‑class Windows support.
- **Security hardening** – Requests for deterministic API key redaction (#19997, #26525) and privacy opt‑in persistence (#21851) reflect growing enterprise security demands.
- **Auto Memory improvements** – Issues #26522, #26523, #26525 propose better handling of low‑signal sessions, quarantine of invalid patches, and reduction of secret exposure in logs.

## Developer Pain Points

- **Silent failures** – `.env` omission (#20005) and account limits (#22493) produce confusing error messages, eroding trust.
- **Hanging/regression cycles** – OAuth hangs (#22241), sub‑agent interactive prompts (#21052), and shell execution deadlocks (#25166) are recurring regressions that block workflows.
- **Memory & reliability** – Context compression crashes (#19590) and AbortSignal leaks (#28363) threaten long‑running sessions. Community frustration is compounded by the skipped‑test oversight (#20767).
- **Authentication friction** – Headless OAuth (#27300) and unexplained quota exhaustion (#22493) are top concerns for enterprise and remote users.
- **Antigravity transition uncertainty** – Issues #27299 and #27304 (35 👍) question whether the new Antigravity CLI will remain open‑source and how it differs from Gemini CLI. Users invested in the open‑source ecosystem are seeking clarity.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

## GitHub Copilot CLI Community Digest — 2026-07-20

### Today’s Highlights
A significant regression in **plan mode** is blocking shell commands, breaking workflows that relied on tools like `gh` for enrichment. Voice transcription remains broken for all bundled ASR models due to a routing bug. Meanwhile, a long-standing request to **cancel enqueued messages** (24 👍) continues to gather community support, and several new triage-labelled issues highlight friction in the TUI and desktop app.

### Releases
None – no new releases in the last 24 hours.

### Hot Issues (10 noteworthy)

1. **[#4024] Voice mode: all bundled ASR models fail silently**  
   *MultiModalProcessor routing bug for `nemotron_speech`.*  
   Every `/voice` transcription comes back empty for all three offered models. 13 comments, high attention.  
   → [Issue #4024](https://github.com/github/copilot-cli/issues/4024)

2. **[#1857] Allow users to cancel or remove enqueued messages before execution**  
   *24 👍, 8 comments.*  
   Users cannot cancel a queued message (`Ctrl+Q`/`Ctrl+Enter`) while the agent is busy. A top-requested UX improvement.  
   → [Issue #1857](https://github.com/github/copilot-cli/issues/1857)

3. **[#4188] Regression on plan-mode: shell commands blocked**  
   *New triage.*  
   Plan mode now blocks shell commands (e.g., `gh`), which were previously used to enrich plans. A regression that breaks common automation patterns.  
   → [Issue #4188](https://github.com/github/copilot-cli/issues/4188)

4. **[#4185] `--add-dir` causes Claude sub-agent dispatch to fail (400)**  
   *Cache_control block limit.*  
   Launching Copilot CLI with `--add-dir` hits the Anthropic API’s 4-block cache_control limit, breaking every sub-agent dispatch.  
   → [Issue #4185](https://github.com/github/copilot-cli/issues/4185)

5. **[#4183] Auto-compaction does not prevent CAPI 5 MB body limit failure**  
   *Tool-heavy sessions can become permanently stuck.*  
   Long sessions hit the independent 5 MB serialized request limit even when within token budgets. Auto-compaction is insufficient.  
   → [Issue #4183](https://github.com/github/copilot-cli/issues/4183)

6. **[#4180] Interactive TUI ignores all keyboard input written to its PTY**  
   *Only Ctrl+C responds.*  
   Breaks automation/orchestration tooling (tmux, expect, pty.fork()). Critical for programmatic users.  
   → [Issue #4180](https://github.com/github/copilot-cli/issues/4180)

7. **[#4172] Exiting plan mode unreliable with new GPT-5.6 models**  
   *Plan saved but no prompt to continue.*  
   After creating a plan, the interaction ends abruptly without the expected user prompt.  
   → [Issue #4172](https://github.com/github/copilot-cli/issues/4172)

8. **[#4177] Desktop app routes public github.com issue links to enterprise host**  
   *Inline tab fails; logs show request sent to enterprise API.*  
   Breaks cross-instance issue linking for users with both public and enterprise GitHub accounts.  
   → [Issue #4177](https://github.com/github/copilot-cli/issues/4177)

9. **[#3725] Add skill-level spans to OpenTelemetry traces**  
   *Feature request, 1 comment.*  
   Tool calls (bash, glob) are emitted as flat children without attribution to the skill that invoked them. Needed for observability of agent workflows.  
   → [Issue #3725](https://github.com/github/copilot-cli/issues/3725)

10. **[#4189] `/context` "MCP Tools" reports un-deferred tool-schema footprint**  
    *Misleading metric when deferral is active.*  
    The `/context` line shows the full MCP tool schema size, not the actual (deferred) cost sent to the model.  
    → [Issue #4189](https://github.com/github/copilot-cli/issues/4189)

### Key PR Progress
Only one pull request was updated in the last 24 hours, and it is a **closed PR from 2023** ([#1 – Create ownership.yaml](https://github.com/github/copilot-cli/pull/1)). No active development work is visible from PRs in this window. Most community activity is happening in issues and triage.

### Feature Request Trends
- **Granular control of the execution queue** – cancelling, editing, or reordering enqueued messages (#1857, #4179, #4182).
- **Better visibility of model usage and costs** – exposing effective model in background-agent views (#4178), token/context usage in the ACP protocol (#4174), and accurate MCP tool footprint (#4189).
- **Enhanced TUI interactions** – pasting images into `/btw` discussions (#4181), clicking to edit enqueued entries (#4179), and mouse support improvements.
- **Observability improvements** – OpenTelemetry skill-level spans (#3725), hook decision diff views (#4135).

### Developer Pain Points
- **Plan mode regressions** – blocking shell commands (#4188) and unreliable exit with GPT-5.6 (#4172) are breaking established workflows.
- **Voice/ASR unreliability** – all bundled models fail silently (#4024) with no progress in weeks.
- **Desktop app startup slowness** – Windows desktop app takes 1–2 minutes due to multiple CLI process launches (#4176).
- **Permission gate leaks** – child writing tasks retaining stale plan-mode write gates after exit (#4173).
- **Automation/orchestration friction** – TUI ignoring PTY input (#4180) blocks scripting; cloud sessions starting without an active repo checkout (#4175) waste effort.
- **Context/permission size limits** – 5 MB CAPI body limit not mitigated by compaction (#4183), and `--add-dir` hitting Anthropic’s 4-block cache_control limit (#4185).

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-07-20

## Today’s Highlights

No new releases today, but the community saw a burst of high‑quality pull requests (8 in 24h) targeting several long‑standing bugs—session truncation on fork/undo, web‑ui uploads being resent after restart, and stale system prompts on resume. A new streaming hook (MessageDisplay) also landed for real‑time reply consumers. Meanwhile, the most popular open feature request (Remote Control, 13 👍) continues to gather interest.

---

## Releases

No new releases in the last 24 hours.

---

## Hot Issues

1. **[#1282 – Feature Request: Remote Control – Continue local sessions from any device](https://github.com/MoonshotAI/kimi-cli/issues/1282)**  
   *CatKang* – Opened Feb 27, updated Jul 19 • 5 comments, 13 👍  
   Proposes letting users continue a local Kimi CLI session from phones, tablets, or browsers. Remains the most upvoted open issue, reflecting strong demand for cross‑device workflow continuity.

2. **[#2521 – Windows: Arrow keys not working in `herdr` for selection](https://github.com/MoonshotAI/kimi-cli/issues/2521)**  
   *RambleRainbow* – Opened Jul 20 • 0 comments, 0 👍  
   On Windows version 0.27.0, the `herdr` command’s prompt does not respond to arrow‑key navigation. Fresh report with no workaround yet; highlights an ongoing Windows UX gap.

3. **[#2517 – `/undo` and `/fork` truncate context.jsonl at wrong turn in compacted/steered sessions](https://github.com/MoonshotAI/kimi-cli/issues/2517)**  
   *Nas01010101* – Opened Jul 19 • 0 comments, 0 👍  
   Detailed bug in session‑file handling: undo/fork cut turns incorrectly when the session has wire‑only slash commands or steering. Root cause of several earlier reports (#1974, #2049). A PR (#2520) is already open to resolve it.

4. **[#2511 – Feat: Mid‑turn streaming hook (MessageDisplay) for live reply consumers](https://github.com/MoonshotAI/kimi-cli/issues/2511)**  
   *yanchenko* – Opened Jul 19 • 0 comments, 0 👍  
   Requests a hook event that fires during assistant reply streaming, enabling live TTS, incremental logging, or progress UI. Already implemented in PR #2512, following a similar pattern from Qwen Code.

---

## Key PR Progress

1. **[#2520 – fix(session): align fork/undo context truncation to wire turns](https://github.com/MoonshotAI/kimi-cli/pull/2520)**  
   *Nas01010101* – Opened Jul 19, updated Jul 20  
   Resolves #2517 (and #1974, #2049). Properly maps wire turns to context turns for slash commands, preventing incorrect history truncation after fork/undo.

2. **[#2515 – perf(kosong): buffer stream merges and avoid deep-copying every delta](https://github.com/MoonshotAI/kimi-cli/pull/2515)**  
   *parthgupta9999* – Opened Jul 19  
   Optimises the streaming merge path in `kosong` by replacing quadratic `str +=` with buffered concatenation and eliminating unnecessary `model_copy(deep=True)` calls. Improves performance on long responses.

3. **[#2516 – Create kimi-cli (spam / closed)](https://github.com/MoonshotAI/kimi-cli/pull/2516)**  
   *owndaboubi1993-cyber* – Opened & closed Jul 19  
   Empty/spam PR titled “skills n plugins”. No substantive changes; closed without merge.

4. **[#2518 – fix(web): persist uploads .sent marker so restarts do not re-send files](https://github.com/MoonshotAI/kimi-cli/pull/2518)**  
   *Nas01010101* – Opened Jul 19  
   Fixes #2413 – after a server restart, `kimi web` was re‑sending every previously uploaded file (including images) with the next prompt. Adds a persistent `.sent` marker to prevent pollution.

5. **[#2519 – fix(app): refresh stale frozen system prompt on session resume](https://github.com/MoonshotAI/kimi-cli/pull/2519)**  
   *Nas01010101* – Opened Jul 19  
   Resolves #2420 – when resuming a session, the system prompt was frozen from `context.jsonl`, so new skills added to `~/.kimi/skills/` or changes in `AGENTS.md` were never applied. Now refreshes the prompt on resume.

6. **[#2513 – fix(kosong): recursively decode double-encoded tool-call arguments](https://github.com/MoonshotAI/kimi-cli/pull/2513)**  
   *nitishagar* – Opened Jul 19  
   Moonshot API sometimes returns `function.arguments` as JSON strings (double‑encoded). A single `json.loads` left inner objects as strings, causing Pydantic validation failures. Adds recursive decoding.

7. **[#2514 – fix(skill): ignore stray markdown in plugins container during skill discovery](https://github.com/MoonshotAI/kimi-cli/pull/2514)**  
   *nitishagar* – Opened Jul 19  
   Prevents `.md` files placed inside `plugins/` from being mistakenly treated as flat‑skill definitions, which broke skill discovery. Enforces the documented expectation that each plugin is an independent subdirectory with `plugin.json`.

8. **[#2512 – feat(hooks): add MessageDisplay hook for mid‑turn streaming](https://github.com/MoonshotAI/kimi-cli/pull/2512)**  
   *yanchenko* – Opened Jul 19  
   Closes #2511. Implements a fire‑and‑forget `MessageDisplay` hook event that fires repeatedly as the assistant reply streams, before the `Stop` event. Useful for live TTS, progressive UI, and incremental logging.

---

## Feature Request Trends

- **Remote Control / Cross‑device Continuity** – Issue #1282 remains the most upvoted feature (13 👍). Users want to pause a local CLI session on desktop and continue it from a phone or browser.
- **Streaming Hooks** – Issue #2511 sparked immediate PR #2512. The desire to observe assistant replies in real‑time (for TTS, logging, progress) is strong.
- **Skill & Plugin Lifecycle** – PRs #2514 and #2519 highlight requests for better skill/plugin discovery and dynamic system prompt updates. Users expect changes to skills and `AGENTS.md` to take effect without restarting sessions.

---

## Developer Pain Points

- **Windows Input Handling** – Issue #2521 shows arrow‑key navigation is broken in `herdr` on Windows. This is a recurring theme (earlier reports about keyboard shortcuts).
- **Session State Corruption** – Multiple issues (#2517, #2413, #2420) revolve around session files (`context.jsonl`) being incorrectly truncated, stale, or polluted after undo/fork/restart. The volume of related PRs confirms this as a top‑priority area.
- **API Quirks (Double‑encoded arguments)** – PR #2513 addresses a provider‑side bug where tool‑call arguments are double‑encoded. Developers dealing with non‑Moonshot providers may face similar friction.
- **Plugin/Skill Discovery Confusion** – PR #2514 fixes a case where stray markdown files in the plugins directory caused skill parsing failures. Documentation vs. implementation mismatches continue to frustrate plugin authors.
- **Performance of Long Streaming Responses** – PR #2515 optimises a quadratic string concatenation path. Developers running long or heavily‑instrumented sessions will benefit from the fix.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

Here is the **OpenCode Community Digest** for **2026-07-20**.

---

## 1. Today’s Highlights

The community is actively addressing a surge in performance and provider-compatibility issues. Key discussions focus on the need for v2 event-stream scoping to prevent TUI overload, a critical memory leak consuming over 30GB, and multiple fixes for provider error handling and context-window limits. Several PRs landed today to improve resilience against malformed streaming data and database corruption.

## 2. Releases

**None** in the last 24 hours.

## 3. Hot Issues (Top 10)

1.  **#4845 (CLOSED) – “prompt is too long unrecoverable”**  
    *Author: benceferdinandy-signifyd | Comments: 31 | 👍 19*  
    A persistent pain point: users hitting context limits with Opus 4.5 cannot recover without rolling back the session. The community is asking for a soft recovery path instead of a hard failure.  
    [🔗 View Issue](https://github.com/anomalyco/opencode/issues/4845)

2.  **#13537 (CLOSED) – “FEATURE: Add Open WebUI as a provider”**  
    *Author: PapeThePope | Comments: 15 | 👍 20*  
    High demand for native integration with the self-hosted Open WebUI interface. Strong positive reaction from the community.  
    [🔗 View Issue](https://github.com/anomalyco/opencode/issues/13537)

3.  **#37849 (OPEN) – “太卡了，基本无法使用”**  
    *Author: my420840806 | Comments: 5*  
    A Chinese-language report of severe lag making the tool unusable. Likely triggers investigation into recent performance regressions.  
    [🔗 View Issue](https://github.com/anomalyco/opencode/issues/37849)

4.  **#27989 (CLOSED) – “HUGE memory consumption more than 30 GigaBytes !!!!”**  
    *Author: Consulting4J | Comments: 5*  
    Critical memory leak after 5 minutes of use. Highlights a severe stability bottleneck requiring immediate core investigation.  
    [🔗 View Issue](https://github.com/anomalyco/opencode/issues/27989)

5.  **#36441 (OPEN) – “[2.0]: Scope event streams and bound event payloads”**  
    *Author: kitlangton | Comments: 4*  
    A deep architectural proposal for v2: preventing `N` TUIs from independently decoding every global event. Highly relevant for large-scale users.  
    [🔗 View Issue](https://github.com/anomalyco/opencode/issues/36441)

6.  **#23798 (CLOSED) – “fix: false MaxListenersExceededWarning on GlobalBus”**  
    *Author: Brukkil | Comments: 5 | 👍 4*  
    A Node.js internals bug causing spurious warnings when many plugins subscribe to events. Fixed but noted for future plugin developers.  
    [🔗 View Issue](https://github.com/anomalyco/opencode/issues/23798)

7.  **#25899 (CLOSED) – “ACP prompt() returns stopReason: end_turn + zero usage on user cancel”**  
    *Author: truenorth-lj | Comments: 4 | 👍 1*  
    A protocol-level bug: cancelling a prompt wrongly reports `end_turn` instead of `cancelled`. Important for ACP client compatibility.  
    [🔗 View Issue](https://github.com/anomalyco/opencode/issues/25899)

8.  **#28353 (CLOSED) – “FEATURE: ToolBuild hook”**  
    *Author: qdrddr | Comments: 6*  
    Request for runtime hooks to manipulate the tool list before execution. Points to a desire for more plugin-like extensibility.  
    [🔗 View Issue](https://github.com/anomalyco/opencode/issues/28353)

9.  **#16082 (CLOSED) – “FEATURE: allow skills to request for small/medium/large model hint”**  
    *Author: championswimmer | Comments: 3 | 👍 3*  
    A popular quality-of-life feature: letting skills hint at required model capability, reducing unnecessary cost/computation.  
    [🔗 View Issue](https://github.com/anomalyco/opencode/issues/16082)

10. **#37841 (CLOSED) – “[2.0] Tool call streaming fails with 'missing id or name'”**  
    *Author: Garfier | Comments: 2*  
    APIs like DashScope send empty strings for `id` and `name` in streaming deltas. Fixed today, but highlights fragility in third-party provider parsing.  
    [🔗 View Issue](https://github.com/anomalyco/opencode/issues/37841)

## 4. Key PR Progress (Top 10)

1.  **#37696 (OPEN) – “feat(opencode): use adaptive thinking effort for kimi family on anthropic…”**  
    *Author: chouqin*  
    Adds support for Kimi/Moonshot’s adaptive thinking contract, improving compatibility with Anthropic-compatible endpoints.  
    [🔗 View PR](https://github.com/anomalyco/opencode/pull/37696)

2.  **#37848 (CLOSED) – “fix(ai): expand context overflow patterns”**  
    *Author: opencode-agent[bot]*  
    Broader detection of provider context-window errors (e.g., `maximum-input-length`, `model-context-length`). Reduces false positives from rate-limit messages.  
    [🔗 View PR](https://github.com/anomalyco/opencode/pull/37848)

3.  **#37842 (CLOSED) – “fix(ai): tolerate empty-string tool call id/name in streaming deltas”**  
    *Author: Garfier*  
    Fixes the `missing id or name` streaming error by ignoring empty deltas from third-party APIs.  
    [🔗 View PR](https://github.com/anomalyco/opencode/pull/37842)

4.  **#37822 (OPEN) – “fix(core): auto-recover corrupted sqlite database on startup”**  
    *Author: leecoder*  
    Implements automatic recovery for malformed SQLite databases, preventing startup crashes.  
    [🔗 View PR](https://github.com/anomalyco/opencode/pull/37822)

5.  **#37843 (OPEN) – “fix(core): fail empty provider output”**  
    *Author: H-TTTTT*  
    Prevents silent success when a provider returns no text and no tool calls. Downstream clients now receive a failure instead of a blank response.  
    [🔗 View PR](https://github.com/anomalyco/opencode/pull/37843)

6.  **#37839 (OPEN) – “fix(core): authorize relative external paths”**  
    *Author: H-TTTTT*  
    Fixes permission evaluation for relative edit paths that escape the project root (e.g., `../sibling/file`).  
    [🔗 View PR](https://github.com/anomalyco/opencode/pull/37839)

7.  **#37830 (OPEN) – “fix(app): register open project and new worktree shortcuts in new layout”**  
    *Author: ProdigyRahul*  
    Restores keyboard shortcuts (`cmd+o` etc.) that were missing after the layout refactor.  
    [🔗 View PR](https://github.com/anomalyco/opencode/pull/37830)

8.  **#37054 (OPEN) – “feat(app): add full session option to web fork dialog”**  
    *Author: HopelessLoop*  
    Adds the ability to fork an entire conversation (not just up to a selected message) in the Web UI.  
    [🔗 View PR](https://github.com/anomalyco/opencode/pull/37054)

9.  **#37775 (CLOSED) – “fix(codemode): align string, array, and Date behavior”**  
    *Author: rekram1-node*  
    Fixes four JavaScript parity gaps in code mode, including `replace`/`replaceAll` callback coercion and array hole preservation.  
    [🔗 View PR](https://github.com/anomalyco/opencode/pull/37775)

10. **#37833 (OPEN) – “fix(provider): add NVIDIA NIM DeepSeek request compatibility”**  
    *Author: fuselayer*  
    DeepSeek V4 models on NVIDIA NIM were hanging – this adds the necessary request format fix.  
    [🔗 View PR](https://github.com/anomalyco/opencode/pull/37833)

## 5. Feature Request Trends

- **Provider Extensibility & Compatibility:** The most active area. Requests include Open WebUI integration (#13537), native MCP `mcpServers` config support (#28364), and common JSON formats for multiple providers.
- **Context Window Management:** Users are asking for better handling of long sessions—such as session export/import (#28327), graceful context overflow recovery (#4845), and hints for model sizing (#16082).
- **UI/UX Polish:** Growing interest in Web UI improvements: full-session forking, workspace icons (#28550), task list visibility (#28499), and improved tool output display during execution.
- **Plugin & Hook System:** Requests for a ToolBuild hook (#28353), skill discovery depth control (#28485), and fine-grained permission rules indicate a desire for a more modular, extensible architecture.

## 6. Developer Pain Points

- **Memory & Stability Regressions:** The 30GB memory leak (#27989) and reports of the tool becoming completely unresponsive (#37849) are top concerns. These overshadow feature work and are likely holding back version adoption.
- **Context Window Hard Failures:** The “prompt is too long, unrecoverable” error (#4845) frustrates users mid-session, especially because there’s no automatic context compaction or session recovery mechanism.
- **Permission Bypass & Security:** Inline env var prefixes bypassing bash permission rules (#16075) and plan mode executing write commands (#28467) highlight gaps in the permission model.
- **Cross-Platform Inconsistencies:** Issues with Windows installer directory ignoring environment variables (#28437), clipboard failure in Codespaces (#17483), and ANSI escape codes with piped stdin (#28538) suggest multiple platform-specific bugs.
- **Provider-Specific Gotchas:** Developers face recurring friction with non-standard streaming formats (empty-string deltas), region-locked sessions for Vertex AI (#28524), and incorrect context-window size reporting for models like Claude Opus 4.7 (#28543).

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest – 2026-07-20

## Today’s Highlights
The Pi project saw intense activity as maintainers closed a flurry of bugs and merged several feature PRs. A critical memory leak in long-running sessions (#6841) was resolved, along with a regression that caused unrecoverable 400 errors due to orphan tool results (#6832). On the feature side, Upstage (Solar LLMs) was added as a built-in provider (#6824), and support for OpenCode Go’s Grok 4.5 model via the OpenAI Responses API landed (#6828). The long‑awaited ACP (Agent Client Protocol) mode for editor integration also appears to have been finalized (#836).

## Releases
No new versions were published in the last 24 hours.

## Hot Issues
1. **#[6841] Long-running sessions: unbounded memory growth**  
   Opened and closed today. Sessions kept 2‑3 weeks could grow to 650 MB RSS, causing swap thrashing on a 15 GB server. The fix likely involves offloading session history.  
   [Link](https://github.com/earendil-works/pi/issues/6841)

2. **#[6832] Orphan toolResult survives compaction → unrecoverable 400**  
   Regression of #4570. A long session becomes permanently stuck with “No tool call found for function call output” after hook‑triggered compaction.  
   [Link](https://github.com/earendil-works/pi/issues/6832)

3. **#[6819] `assistant.usage` is undefined when provider doesn't return usage**  
   DeepSeek V4 streaming sometimes omits usage data, crashing `calculateContextTokens` and bricking the session. Fix merged via PR #6818.  
   [Link](https://github.com/earendil-works/pi/issues/6819)

4. **#[6817] `find` returns no results for patterns with path separators on Windows**  
   Patterns like `src/**/*.ts` silently return “No files found” on Windows due to a flawed path check in `find.ts`.  
   [Link](https://github.com/earendil-works/pi/issues/6817)

5. **#[6825] System prompt change through `--system-prompt` flag not taking effect**  
   Flag appears to be ignored—both response and exported HTML show the default prompt.  
   [Link](https://github.com/earendil-works/pi/issues/6825)

6. **#[6675] `pi update --self` gives up after one transient failure**  
   A single network glitch prevents self‑update; community requests retry logic.  
   [Link](https://github.com/earendil-works/pi/issues/6675)

7. **#[6792] High CPU when writing/editing big 500+ line files**  
   100% CPU on a 1000‑line markdown file. Closed today, but no fix details yet.  
   [Link](https://github.com/earendil-works/pi/issues/6792)

8. **#[6820] Queued message dropped after threshold auto-compaction**  
   Typing while compaction runs loses the message with “Agent is already processing” – user must retype.  
   [Link](https://github.com/earendil-works/pi/issues/6820)

9. **#[5593] Tab‑completing slash command inserts trailing space, preventing argument autocomplete**  
   Long‑standing UX issue (still open, labelled `inprogress`).  
   [Link](https://github.com/earendil-works/pi/issues/5593)

10. **#[6210] `/scoped-models` cannot select model ids containing brackets**  
    Issue remains open. Model IDs with `[` or `]` cause false “No models match” warnings.  
    [Link](https://github.com/earendil-works/pi/issues/6210)

## Key PR Progress
1. **#6843 – fix(coding-agent): render deep session exports iteratively**  
   Replaces recursive traversal with explicit stacks to avoid stack overflow on huge sessions.  
   [Link](https://github.com/earendil-works/pi/pull/6843)

2. **#6828 – fix(ai): support OpenCode Go Responses models**  
   Registers OpenAI Responses API for OpenCode Zen Go (Grok 4.5). Enables modern streaming for that provider.  
   [Link](https://github.com/earendil-works/pi/pull/6828)

3. **#6818 – fix: guard against undefined assistant.usage in context token calculations**  
   Adds null checks to prevent session crashes when providers omit usage data.  
   [Link](https://github.com/earendil-works/pi/pull/6818)

4. **#6834 – fix(ai,agent,coding-agent): share UUIDv7 and use for Codex**  
   Centralizes UUIDv7 generation and applies it to OpenAI Codex provider requests.  
   [Link](https://github.com/earendil-works/pi/pull/6834)

5. **#6837 – fix(ai): align GPT-5.6 Codex context with official client**  
   Drops GPT-5.6 Sol/Terra/Luna context from 372K to 272K to match official metadata.  
   [Link](https://github.com/earendil-works/pi/pull/6837)

6. **#6824 – feat(ai): add Upstage (Solar LLMs) as built-in provider**  
   Four Solar models (mini, pro2 with reasoning, etc.) added as a first‑party provider.  
   [Link](https://github.com/earendil-works/pi/pull/6824)

7. **#836 – feat(coding-agent): add ACP mode for editor integration**  
   Merged after months of development. Adds `--mode acp` for integration with Zed/JetBrains via Agent Client Protocol.  
   [Link](https://github.com/earendil-works/pi/pull/836)

8. **#6775 – retry on compaction/branch summarization retryable failures**  
   (Open) Adds retry logic for compaction failures; discussion ongoing on UI feedback for retries.  
   [Link](https://github.com/earendil-works/pi/pull/6775)

9. **#6840 – feat(ai): add shared contentText utility**  
   Small utility extracted from common text‑handling code.  
   [Link](https://github.com/earendil-works/pi/pull/6840)

10. **#6823 – feat(ai): add Upstage (Solar LLMs) as built-in provider**  
    Duplicate of #6824, closed in favour of the other.  
    [Link](https://github.com/earendil-works/pi/pull/6823)

## Feature Request Trends
- **Extension lifecycle hooks** – Multiple requests for hooks into raw response streams (#3605), observable retry lifecycle (#6836), forwarding `willRetry` to extensions (#6827), batch tool‑call judgement (#6816), and custom message rendering (#6821) show strong demand for richer extension APIs.
- **Resilience & retry** – Users want configurable retries (`/retry` command #6810), retry on transient update failures (#6675), and smarter compaction failure recovery (#6775).
- **Provider expansions** – Adding new providers (Upstage, OpenCode Go) and aligning context windows with official clients (#6837) is a clear priority.
- **Memory & performance** – Large file handling (#6792), long‑session memory growth (#6841), and slow `tmpdir` writes (#6774) drive requests for better resource management.
- **Cross‑platform parity** – Windows path handling bugs (#6817) and lock‑contention issues (#1871) indicate the need for more robust OS‑specific fixes.

## Developer Pain Points
- **Unrecoverable session crashes** – Orphan tool results (#6832) and undefined `usage` (#6819) can permanently brick sessions, forcing users to restart entirely.
- **Transient failure fragility** – Self‑update (#6675) and compaction (#6775) give up too easily; no manual retry command exists.
- **Memory exhaustion in long sessions** – Processes can grow to GBs of RSS with swap thrashing, especially on servers with limited RAM (#6841).
- **Frustrating UX regressions** – Tab‑completion conflicts with autocomplete (#5593), queued messages lost during compaction (#6820), and misleading auth errors during parallel startup (#1871) erode confidence.
- **Windows‐specific breakage** – The `find` tool is unusable with directory patterns (#6817); contributors on Windows face additional friction.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest – 2026-07-20

## Today’s Highlights

The community welcomed **v0.20.0**, a major release with daemon log rotation, new CLI features, and no breaking changes. A patch release **v0.20.1-preview.7215** landed with a label-driven autofix improvement. Meanwhile, a long-awaited built-in `web_search` tool (PR #7215) entered review, and critical fixes for SSE subscriber leaks, subagent model corruption, and plan-mode entry boundaries are advancing through review.

## Releases

- **[v0.20.1-preview.7215](https://github.com/QwenLM/qwen-code/releases/tag/v0.20.1-preview.7215)** – Patch release containing one change: `feat(autofix): label-driven takeover and release; fix forced-dispatch green no-op`.
- **[v0.20.0](https://github.com/QwenLM/qwen-code/releases/tag/v0.20.0)** – Major release featuring bounded daemon log rotation (PR #6969) and other improvements. No known breaking changes.

## Hot Issues

1. **[#4748 – Optimize daemon cold start and qwen serve fast-path latency](https://github.com/QwenLM/qwen-code/issues/4748)** (CLOSED, 11 comments)  
   The original cold-start gap (2.5s vs 0.7s) has been largely resolved. This issue tracked the remaining optimization work; now closed as the baseline is met, but follow-up work continues in #7264.

2. **[#7156 – Subagent mutates main session model – context overflow after #7119](https://github.com/QwenLM/qwen-code/issues/7156)** (OPEN, 11 comments)  
   A critical regression where the main session’s model silently switches to the subagent’s model, causing 400 errors. Community reports it as a blocker for multi-agent workflows. Awaiting a fix.

3. **[#4801 – Add a dedicated web_search tool](https://github.com/QwenLM/qwen-code/issues/4801)** (CLOSED, 5 comments)  
   Long-standing feature request for actual web search (not just `web_fetch`). This issue was closed as the feature is now in review via PR #7215.

4. **[#7147 – MCP server never successfully gets tool/resource listing](https://github.com/QwenLM/qwen-code/issues/7147)** (OPEN, 5 comments)  
   Users integrating with external MCP servers (e.g., Fastmail) report timeouts when listing tools. Workaround discussion ongoing; root cause being investigated.

5. **[#6569 – Improve subagent observability – real-time visibility & manual intervention](https://github.com/QwenLM/qwen-code/issues/6569)** (OPEN, 3 comments)  
   Subagent execution is too condensed; users want to see progress, full traces, and ability to intervene. Received multiple upvotes and is on the roadmap.

6. **[#6949 – Plan mode blocks unclassified read-only shell commands and can bypass exit confirmation](https://github.com/QwenLM/qwen-code/issues/6949)** (OPEN, 2 comments)  
   ACP plan mode fails to classify safe read-only commands, blocking valid operations. Also allows bypassing exit confirmation. Under review.

7. **[#7139 – Windows: qwen serve Docker sandbox passes invalid cwd](https://github.com/QwenLM/qwen-code/issues/7139)** (OPEN, 2 comments)  
   Docker sandbox works on Windows but every shell tool call fails with `chdir(2) failed`. Likely path translation issue. Needs Windows maintainer attention.

8. **[#7264 – Cold-start follow-ups: remaining lazy-loading candidates](https://github.com/QwenLM/qwen-code/issues/7264)** (OPEN, 1 comment)  
   After #4748, an audit revealed 17.24 MiB / 2420 modules still eagerly loaded on cold start. This issue tracks incremental lazy-loading to further reduce startup latency.

9. **[#7254 – Main agent keeps thinking while waiting for sub-agent, occupying resources](https://github.com/QwenLM/qwen-code/issues/7254)** (OPEN, 1 comment)  
   When concurrency is limited to 1, the main agent continues thinking (consuming resources) instead of yielding to the sub-agent. Community reports slow sub-agent progress.

10. **[#7181 – /goal loop blocks user input – cannot clear or interrupt](https://github.com/QwenLM/qwen-code/issues/7181)** (CLOSED, 2 comments)  
    Running `/goal` with a blocking stop hook queues all user input indefinitely. Fixed in the latest preview? Marked ready-for-agent and closed.

## Key PR Progress

1. **[#7266 – feat(channels): add GitHub/GitLab/Gitea polling adapters](https://github.com/QwenLM/qwen-code/pull/7266)** (OPEN)  
    Introduces three new channel adapters for polling notifications/todos, plus a cursor fix and documentation. Broadens the channel ecosystem.

2. **[#7215 – feat(core): add opt-in built-in web_search backed by DashScope Responses API](https://github.com/QwenLM/qwen-code/pull/7215)** (OPEN)  
    Fulfills the most requested feature: a native `web_search` tool using existing Bailian API keys. Opt-in, off by default. Under review.

3. **[#7268 – feat(serve): Hot-reload workspace trust changes](https://github.com/QwenLM/qwen-code/pull/7268)** (OPEN)  
    Allows trust policy changes to apply without daemon restart, using semantic snapshots and reconciliation. Improves live configuration usability.

4. **[#7237 – fix(core): Fence concurrent ACP session writers](https://github.com/QwenLM/qwen-code/pull/7237)** (OPEN)  
    Prevents data corruption by ensuring only one writer per session via atomic hard-link leases. Extracted from a larger incident fix.

5. **[#7248 – fix(core): Enforce Plan mode entry boundary](https://github.com/QwenLM/qwen-code/pull/7248)** (OPEN)  
    Makes `enter_plan_mode` an execution boundary: same-batch siblings are denied, model must observe new mode before continuing. Addresses plan-mode misuse.

6. **[#7257 + #7269 – fix(sdk): abort SSE request on iterator exit](https://github.com/QwenLM/qwen-code/pull/7257) & [close SSE requests](https://github.com/QwenLM/qwen-code/pull/7269)** (OPEN)  
    Two PRs tackling the same root cause: SSE subscribers leak connections, eventually causing HTTP 429. Both ensure proper cleanup on iterator exit.

7. **[#7265 – fix(cli): repaint the TUI after OS sleep/wake or SIGCONT](https://github.com/QwenLM/qwen-code/pull/7265)** (OPEN)  
    Adds a hook to force full terminal repaint after system resume. Fixes garbled TUI after laptop lid close or Ctrl+Z.

8. **[#7221 – feat(web-shell): worktree-isolated sessions for parallel tasks](https://github.com/QwenLM/qwen-code/pull/7221)** (CLOSED, merged)  
    Allows creating sessions in isolated git worktrees from Web Shell, enabling parallel tasks without polluting the main directory.

9. **[#7258 – fix(cli): yield to single-slot background agents](https://github.com/QwenLM/qwen-code/pull/7258)** (OPEN)  
    When only one background slot is available, the main agent now saves the tool result and waits for sub-agent completion. Prevents resource starvation.

10. **[#7262 – feat(daemon): restore worktree isolation on session load/resume](https://github.com/QwenLM/qwen-code/pull/7262)** (OPEN)  
    Fixes a restart-persistence gap: worktree sessions disappeared after daemon restart. Compares project hash with workspace path for correct restoration.

## Feature Request Trends

- **Built-in web search** – The most upvoted feature (#4801, #3841) is now in review via PR #7215. Community excited to replace MCP-based search hacks.
- **Subagent observability & control** – Real-time visibility, execution traces, and manual intervention (#6569) are repeatedly requested, especially for complex multi-agent workflows.
- **Configuration & model flexibility** – Requests to add `qwen3.8-max-preview` to built-in model list (#7198), make ACP initialize timeout configurable (#7244), and support `token-plan.ap-southeast-1` (#7252).
- **Channel management** – Full Channel management UI with QR auth (#7209) and multilingual evaluation baseline for memory recall (#7216) indicate growing interest in collaborative/background automation.
- **Improved sandbox support** – Windows Docker sandbox fixes (#7139) and MCP server compatibility (#7147) are high-priority for cross-platform users.

## Developer Pain Points

- **Subagent model corruption** – Issue #7156 shows that subagent execution can silently overwrite the main session’s model, causing context overflow. Despite a previous fix, a different code path still triggers the same bug.
- **SSE subscriber leaks** – Issues #7238, #7222, and related PRs (#7257, #7269) highlight a common pattern: SSE connections not properly closed on iterator exit, leading to daemon-wide HTTP 429 errors.
- **Plan mode UI/behavior bugs** – Content leakage (#6237), blocking of read-only commands (#6949), and input blocking during `/goal` loops (#7181) frustrate interactive users.
- **Performance on cold start** – Even after improvements, eager loading of 2420 modules (#7264) still adds ~500ms to startup. Developers want incremental lazy-loading.
- **Windows sandbox incompatibility** – Issue #7139 shows a clear path translation problem in Docker sandbox on Windows, blocking Windows users from using `qwen serve` with sandbox.
- **Token tracking gaps** – Thinking tokens not shown in stats with llama.cpp server (#7236) and plan-mode content being leaked into subsequent responses (#6237) indicate integration and state management issues.

---

*Generated from [QwenLM/qwen-code](https://github.com/QwenLM/qwen-code) data for 2026-07-20.*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest – 2026-07-20

## Today’s Highlights
The project (repository `Hmbown/CodeWhale`) saw a burst of activity with **40 pull requests** merged or opened in the last 24 hours, primarily targeting token-cost optimization, prompt compression, and localization of the UI. Key highlights include an **auto-fork mechanism** to reuse cached prefixes across sub-agents (PR #4600) and an **18% reduction** in the Agent mode system prompt (PR #4597). On the issue tracker, a critical **scroll bug** in the sidebar and a **Full Access false positive** for feature-branch pushes were reported and quickly addressed.

## Releases
No new releases in the last 24 hours.

## Hot Issues
All 8 issues updated in the last 24 hours are listed below, reflecting a mix of feature proposals, bugs, and documentation needs.

1. **#4042 – [CLOSED] Environment-level tool sandboxing for sub-agents**  
   *Author: JayBeest*  
   A comprehensive feature to enforce `tool_restrictions` across different execution contexts (sessions, sub-agents, Fleet workers, MCP servers). Confirms that `--disallowed-tools` already works; the issue served as a tracking and discussion hub (16 comments).  
   🔗 [GitHub Issue #4042](https://github.com/Hmbown/CodeWhale/issues/4042)

2. **#1425 – [OPEN] Session freezes after large text processing**  
   *Author: AiurArtanis*  
   User reports a 3-million-character novel analysis triggers 10 sub-agents, but `agent_wait` timeouts cause session hanging. Community discussion suggests the session is actually interrupted, not fully frozen. The issue remains open with 3 comments.  
   🔗 [GitHub Issue #1425](https://github.com/Hmbown/CodeWhale/issues/1425)

3. **#4594 – [OPEN] Top bar / sidebar list does not scroll to the bottom**  
   *Author: Hmbown*  
   A v0.9.1 UI bug where a 10-item To-do list cannot be fully scrolled. Likely a viewport calculation issue. 1 comment.  
   🔗 [GitHub Issue #4594](https://github.com/Hmbown/CodeWhale/issues/4594)

4. **#4568 – [OPEN] Slash command (`/xxx`) response lag in new version**  
   *Author: whp233*  
   Performance regression on Windows 10: slash commands that were instant in the previous version now exhibit noticeable delay. Suspected regression in the input handling pipeline.  
   🔗 [GitHub Issue #4568](https://github.com/Hmbown/CodeWhale/issues/4568)

5. **#4564 – [OPEN] `codewhale exec --auto` flag parsing bug on Windows**  
   *Author: alozano978-spec*  
   Flags like `--model` and `--toolsets` placed before `exec` are concatenated into a single arg when using npm global install on Windows. Proposed workaround: use `CODWHALE_MODEL` / `CODWHALE_TOOLSETS` env vars.  
   🔗 [GitHub Issue #4564](https://github.com/Hmbown/CodeWhale/issues/4564)

6. **#4595 – [CLOSED] Full Access prompts on feature-branch pushes**  
   *Author: Hmbown*  
   Under Full Access posture, `git push origin <feature-branch>` incorrectly triggers an approval prompt because the classification logic treated every push as publish-like. Root cause: ref-awareness missing. Closed by PR #4596.  
   🔗 [GitHub Issue #4595](https://github.com/Hmbown/CodeWhale/issues/4595)

7. **#4599 – [OPEN] Single source of truth for per-model facts**  
   *Author: Hmbown*  
   Model facts (context window, max output tokens, capabilities) are scattered across constants, literals, and test files. Proposal to unify into a single canonical source to avoid drift.  
   🔗 [GitHub Issue #4599](https://github.com/Hmbown/CodeWhale/issues/4599)

8. **#4598 – [OPEN] Operate mode under-delegates**  
   *Author: Hmbown*  
   In Operate mode, the parent agent tends to process tasks sequentially instead of aggressively delegating to sub-agents, contrary to user expectations. Root cause identified in mode-design policy text.  
   🔗 [GitHub Issue #4598](https://github.com/Hmbown/CodeWhale/issues/4598)

## Key PR Progress
From 40 PRs updated in the last 24 hours, these 10 stand out for their impact on performance, correctness, and UX.

1. **#4600 – feat(tui): auto-fork read-only same-route children onto the parent’s cached prefix**  
   Token-cost driver #1: every sub-agent previously cold-started, re-prefilling ~100K tokens. This PR lets children reuse the parent’s cached prefix via the existing fork mechanism.  
   🔗 [GitHub PR #4600](https://github.com/Hmbown/CodeWhale/pull/4600)

2. **#4602 – chore(tui): `CODEWHALE_*` precedence and product-identity cleanup**  
   Establishes `CODEWHALE_*` env vars as primary with `DEEPSEEK_*` fallback, preserving backward compatibility. Part of v0.9.1 queue.  
   🔗 [GitHub PR #4602](https://github.com/Hmbown/CodeWhale/pull/4602)

3. **#4601 – feat(tui): composer real-editor contract**  
   Builds a durable layer on existing composer selection/undo state, verifying behaviors like `Shift+←/→` rather than duplicating them.  
   🔗 [GitHub PR #4601](https://github.com/Hmbown/CodeWhale/pull/4601)

4. **#4597 – feat(tui): compress the Agent mode prompt without losing tested invariants**  
   Reduces Agent system prompt from 661 to 542 words (−18%), making every cold start and cache write cheaper (token-cost driver #3).  
   🔗 [GitHub PR #4597](https://github.com/Hmbown/CodeWhale/pull/4597)

5. **#4593 – fix(tui): harden PowerShell invocation for safe Windows execution**  
   Adds `-NoLogo -NoProfile -NonInteractive` flags and captures `$LASTEXITCODE` for reliable Windows PowerShell execution.  
   🔗 [GitHub PR #4593](https://github.com/Hmbown/CodeWhale/pull/4593)

6. **#4596 – fix(tui): make Full Access truly full access for publish-like shell**  
   Fixes #4595 by classifying `git push` based on ref type (force/delete/tags/mirror) so routine feature-branch pushes no longer prompt.  
   🔗 [GitHub PR #4596](https://github.com/Hmbown/CodeWhale/pull/4596)

7. **#4592 – fix(tui): align every K3 route with its verified per-route contract**  
   Corrects K3 (Kimi) model contracts: open-platform vs. membership routes have different pricing/capabilities; facts now match Moonshot’s `api.json`.  
   🔗 [GitHub PR #4592](https://github.com/Hmbown/CodeWhale/pull/4592)

8. **#4591 – fix(tui): advertise Alt+V for details, never bare v**  
   Removes confusing `v` keybind hints; details are always `Alt+V` (⌥V on macOS) via platform-aware shell chord.  
   🔗 [GitHub PR #4591](https://github.com/Hmbown/CodeWhale/pull/4591)

9. **#4590 – feat(tui): localize session and route picker surfaces**  
   Completes localization of session picker, model picker, and provider list UI strings, fulfilling the Blue Stage identity-middle localization slice.  
   🔗 [GitHub PR #4590](https://github.com/Hmbown/CodeWhale/pull/4590)

10. **#4589 – feat(tui): add quiet behavioral guidance**  
    Adds five action-triggered tips (planning, background receipts, MCP recovery) with lifetime caps of one per session and two impressions per tip.  
    🔗 [GitHub PR #4589](https://github.com/Hmbown/CodeWhale/pull/4589)

## Feature Request Trends
The most requested feature directions from recent issues and PRs include:

- **Environment‑aware tool isolation** – A closed issue (#4042) pushed for granular tool restrictions per execution context; the concept may reappear in future sandboxing.
- **Unified model facts registry** – Issue #4599 calls for a single source of truth for per-model metadata to eliminate scattered constants and hardcoded literals.
- **Smarter sub‑agent delegation policies** – Issue #4598 flags that Operate mode should default to aggressive delegation; users expect parallelizable tasks to be offloaded.
- **Enhanced sub‑agent resource reuse** – PR #4600 directly addresses the token‑cost overhead of cold‑starting sub‑agents, indicating strong community desire for efficient multi‑agent workflows.

## Developer Pain Points
Recurring frustrations and high‑frequency requests emerging from the data:

- **Large‑text processing hangs** – Issue #1425 (300‑page novel analysis) causes session freezes due to sub‑agent timeout; no workaround currently documented.
- **Performance regression in slash commands** – User reports (#4568) that new versions introduced noticeable lag for `/xxx` commands, suggesting a need for a dedicated performance bisect.
- **Windows flag parsing issues** – Multiple issues (#4564, #4593) highlight that Windows CLI flags are mishandled, especially with npm global installs and PowerShell invocations.
- **Scrollbar / viewport rendering bugs** – Issue #4594 shows that sidebar lists with more items than visible space cannot be fully scrolled, a UI regression in v0.9.1.
- **False positives in Full Access approval** – Issue #4595 (fixed in #4596) illustrates that routine pushes triggered unnecessary prompts, undermining the “full access” trust model.
- **Scattered model configuration** – Developers and maintainers alike find it hard to keep model facts in sync across constants, match arms, and tests (issue #4599).

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/boom7sss/agents-radar).*