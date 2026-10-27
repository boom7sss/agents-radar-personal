# AI CLI Tools Community Digest 2026-07-24

> Generated: 2026-07-24 03:21 UTC | Tools covered: 9

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

# AI CLI Tools Cross-Tool Comparison Report
**Date:** 2026-07-24
**Analyst Perspective:** Senior Technical Analyst, AI Developer Tools Ecosystem

---

## 1. Ecosystem Overview

The AI CLI developer tools landscape is simultaneously maturing and fragmenting. Across seven major tools—Claude Code, OpenAI Codex, Gemini CLI, GitHub Copilot CLI, Kimi Code CLI, OpenCode, Pi, Qwen Code, and DeepSeek TUI (CodeWhale)—we observe a shared set of core frustrations: network reliability, platform-specific regressions (especially Windows), and billing/entitlement confusion. However, each tool is carving distinct technical identities: Claude Code leads on enterprise plan management and TUI depth, Codex dominates Windows desktop MCP infrastructure, Gemini CLI pushes agentic reliability and security hardening, Copilot CLI drives MCP ecosystem composability, and OpenCode/Pi/Qwen address diverse regional and open-source communities. A unifying trend is the rapid acceleration of MCP (Model Context Protocol) as the de facto integration standard, with all tools struggling with protocol gaps in session management, tool collision, and timeout handling. Security is emerging as a first-class concern, with three of the seven tools patching credential race conditions or sandbox bypasses this week alone.

---

## 2. Activity Comparison (2026-07-24)

| Tool | Hot Issues (Notable) | Key PRs (Merged/Open) | Release? | Dominant Activity Type |
|---|---|---|---|---|
| **Claude Code** | 10 (incl. 2 critical billing regressions) | 4 (2 merged, 2 open) | No release | Bug reporting + feature requests |
| **OpenAI Codex** | 10 (Windows perf dominates) | 10 (all merged; significant infrastructure) | **2 alpha releases** | Infrastructure PRs + Windows regression tracking |
| **Gemini CLI** | 10 (agent reliability focus) | 10 (7 merged, 3 open; security & CI) | No release | Hardening PRs + agent loop fixes |
| **Copilot CLI** | 10 (session size, MCP composability) | 2 (1 open, 1 closed; low day) | **2 patch releases (v1.0.74)** | Patch release + composability requests |
| **Kimi Code CLI** | 6 (plugin crashes, font rendering) | 10 (all bug-fix, nearly all merged) | No release | Cross-platform bug-fix wave |
| **OpenCode** | 10 (subscription provider block) | 10 (active V2 migration series) | No release | V2 migration PRs + provider bug tracking |
| **Pi** | 10 (clipboard, model reload, grammar) | 10 (7 merged, 3 open; tool grammar landed) | No release | Tool grammar + stability fixes |
| **Qwen Code** | 10 (CI stability, npm 12 compat) | 10 (diverse: CI, channels, perf) | **1 nightly release** | CI fixes + enterprise feature proposals |
| **DeepSeek TUI (CodeWhale)** | 10 (security gate, concurrency bugs) | 6 (2 open, 1 merged; pre-release gate) | No release (v0.9.1 gate) | Pre-release security triage |

**Observation:** OpenAI Codex had the most impactful day with 10 merged PRs and 2 alpha releases. Gemini CLI and Claude Code have the highest-community-engagement issues (50+ comments). Kimi Code CLI and CodeWhale are in active bug-fix cycles with no new features this week.

---

## 3. Shared Feature Directions

The following requirements appear across **multiple** tool communities:

### 3.1 MCP Session & Tool Management
- **Session identifiers for MCP servers** → Claude Code (#41836), Copilot CLI (#4143 wants tool inheritance)
- **MCP tool name collision / sanitization** → CodeWhale (#4729), Pi (#7002 Anthropic ID collisions)
- **Mid-turn tool-list updates** → Copilot CLI (#3125, #3073)
- **Project-scoped MCP process sharing** → Codex (#20883)

### 3.2 Remote Session & Multi-Device Continuity
- **Remote session management** → Claude Code (#29006, 114👍), Kimi Code (#1282, 16👍)
- **Session resume across devices** → All mobile/desktop users

### 3.3 Cost Visibility & Optimization
- **Token waste detection** → Claude Code (#80449 PDF reading), Qwen Code (#5736 reprocessing)
- **Usage dashboard discrepancies** → OpenCode (#38255), Claude Code (Fable 5 billing)
- **Configurable auto-resolve timeouts** → Codex (#28969, 154👍)

### 3.4 IDE / Editor Transparency
- **Active model/thinking mode indicators** → Claude Code (#28986, 61👍)
- **Token usage visible in editor** → Claude Code, Pi (token header PR #4610)

### 3.5 Sandbox Security Hardening
- **Permission prompt reliability** → Kimi Code (#2543), Claude Code (#80736)
- **Deny-list bypasses** → CodeWhale (#4740 denied-prefix flags, #4730 write-tool allowlist)
- **Managed settings bypass prevention** → OpenCode (#22292)

### 3.6 Cross-Platform Reliability (especially Windows)
- **ECONNRESET / connection drops** → Claude Code (#5674 macOS, #69415 WSL)
- **Process spawning storms** → Codex (#34260 taskkill.exe, #25453 powershell.exe)
- **UTF-8 encoding** → Kimi Code (#2547), CodeWhale (Windows keyboard #4723)
- **Line endings** → Codex (#4003)

---

## 4. Differentiation Analysis

| Dimension | Claude Code | OpenAI Codex | Gemini CLI | Copilot CLI | Kimi Code | OpenCode | Pi / Qwen / CodeWhale |
|---|---|---|---|---|---|---|---|
| **Primary User** | Enterprise plan power users | Windows/macOS desktop devs | Linux/agent-reliability focused | VS Code + enterprise orgs | Chinese market + plugin ecosystem | Open-source multi-provider | Open-source + regional (Qwen CN) |
| **Core Strength** | TUI depth, plan management, MCP | Windows MCP infra, WebSocket routing | Agentic loop reliability, security | MCP composability, IDE integration | Plugin ecosystem (Asia) | V2 architecture, provider agnostic | Grammar/constraints, local-first |
| **Weakness** | Network reliability (macOS) | Windows process management | Agent hangs, subagent trust | Session size wedges, memory leaks | Plugin concurrency, font rendering | Subscription provider availability | Regressions, platform testing |
| **Technical Approach** | Monolithic CLI + Desktop app | Rust-based alpha / WebSocket proxy | Multi-subagent orchestration | Open Plugin Spec v1, ACP protocol | Plugin worker pool, MCP client reuse | V2 migration, managed service | Constrained sampling, strict tools (Pi) |
| **Release Cadence** | Medium (no release today) | **Rapid alpha** (2 releases today) | Steady (7 PRs merged today) | **2 patch releases** | Slow (bug-fix wave, no release) | Medium (V2 migration series) | Pi steady, Qwen rapid nightly |
| **Community Language** | English (global) | English (global) | English | English | **Chinese-heavy** | English | English + Chinese (Qwen) |

**Key differentiator:** Copilot CLI landed Open Plugin Spec v1 today, making it the first to standardize on a cross-editor plugin manifest. Codex's Rust alpha and WebSocket routing signal a fundamental architecture shift. Gemini CLI's stagnation detection and circuit breaker mechanisms are unique in the ecosystem.

---

## 5. Community Momentum & Maturity

### Most Active Communities
1. **Claude Code** – Highest raw engagement (47👍 on #5674, 114👍 on #29006). Community is vocal but frustrated—multiple critical regressions (billing, networking) have been open for weeks.
2. **OpenAI Codex** – Highest PR throughput (10 merged in 24h). Strongest infrastructure investment (Rust alpha, WebSocket, proxy compliance). Community pain is concentrated on Windows.
3. **Gemini CLI** – Most architectural discussions (agentic loops, security). PRs demonstrate systematic hardening (TOCTOU, stagnation detection, credential safety).
4. **Copilot CLI** – Smallest but most targeted community. Session size wedges (#4097) and MCP composability (#4143) show focused enterprise pain.

### Rapidly Iterating
- **OpenCode** – V2 migration is a massive refactor (multiple PRs across core, app, session UI). High velocity.
- **Qwen Code** – Nightly releases, CI fixes, and new features (video input, goal verification). Fastest release cadence.
- **CodeWhale** – Pre-release security gate + 15+ new bugs in 24h = project in rapid triage mode.

### Maturing / Stabilizing
- **Pi** – Tool grammar/constrained sampling (#6341) is a significant capability milestone. Fewer new features, more stability fixes.
- **Kimi Code** – Bug-fix wave suggests tool is past initial feature growth and entering hardening phase.

---

## 6. Trend Signals

### Critical Industry Signals from 2026-07-24 Data

| Signal | Evidence | Implication |
|---|---|---|
| **Fable 5 billing confusion** | 7+ issues in Claude Code; OpenCode subscription block (#38218) | The model/plan abstraction is breaking. Users cannot trust plan-communication. Expect more entitlement audits. |
| **Network reliability is the #1 blocker** | ECONNRESET (macOS), WSL connection drops, Codex taskkill.exe storms | AI CLI adoption will plateau if basic connectivity isn't solved. Tooling needs built-in retry, fallback, and offline resilience. |
| **MCP is becoming the universal glue—but it's leaky** | Session IDs, tool collisions, timeout handling, BigInt crashes | MCP is winning as the integration standard, but protocol gaps are blocking production deployments. Watch for MCP v2 or community forks. |
| **Windows is the weakest link** | 6/9 tools have Windows-specific bugs this week (process storms, UTF-8, line endings, keyboard layouts) | Cross-platform parity is not achieved. Vendors may need to prioritize macOS/Linux first, or invest in Windows CI. |
| **Security is moving from "nice-to-have" to "must-have"** | Gemini (TOCTOU), OpenCode (env bypass), CodeWhale (deny-list bypass, write-tool drift) | Three tools patched credential/file security issues this week. Expect regulation pressure and enterprise audit requirements. |
| **Agentic loops need guardrails** | Gemini false success on MAX_TURNS, Copilot Ctrl+C regression, Claude Code subagent work discard | The "agent runs until success" model is insufficient. Expect circuit breakers, stagnation detection, and subagent-timeout recovery to become standard. |
| **Cost observability demand is exploding** | Claude Code (#80449), Codex (#28969), OpenCode (#38255), Pi token header | Users are treating token/credit usage as a first-class UX concern. Tools that don't expose real-time cost data will be replaced. |

### Actionable Recommendations for Technical Decision-Makers

1. **Evaluate MCP compatibility aggressively** – MCP is the ecosystem's Rosetta Stone, but protocol gaps (session identity, tool collision, timeout semantics) vary wildly. Test with your actual MCP server stack.
2. **Prioritize tools with cross-platform CI** – Codex (Rust alpha) and Copilot (patch releases) show the most Windows attention. Claude Code and Gemini CLI have persistent macOS/Linux-only bugs.
3. **Monitor billing/entitlement transparency** – The Fable 5 incident (Claude Code) and OpenCode provider block are warnings: read the *actual* plan terms, not the marketing. Tools that conflate "included" with "free" are risk vectors.
4. **Adopt tools with agentic safety features** – Gemini CLI's stagnation circuit breaker, Pi's constrained sampling, and Copilot's plugin attribution tracking represent emerging best practices.
5. **Watch for consolidation around Open Plugin Spec** – Copilot's v1 support signals that cross-editor plugin manifests may become the standard. If you're building MCP servers, target OPS v1.

---

*Report generated from 9 major AI CLI tool community digest data (2026-07-24). Data sources: GitHub issue trackers, PR activity, and community commentary.*

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report  
*Data as of 2026-07-24 | Source: github.com/anthropics/skills*

---

## 1. Top Skills Ranking (Most-Discussed Pull Requests)

The following PRs attracted the highest community engagement (by comment volume and cross-references). All remain **open** pending review or further iteration.

| Rank | PR | Skill / Fix | Description | Discussion Highlights |
|------|----|-------------|-------------|----------------------|
| 1 | [#1298](https://github.com/anthropics/skills/pull/1298) | `fix(skill-creator): run_eval.py always reports 0% recall` | Fixes the evaluation pipeline that powers the description-optimisation loop. Detected as a blocker for all Skill improvements. | Covers root cause (#556, 10+ independent reproductions), Windows stream reading, trigger detection, and parallel worker fixes. |
| 2 | [#514](https://github.com/anthropics/skills/pull/514) | `Add document-typography skill` | Provides typographic quality control (orphan words, widow paragraphs, numbering misalignment) for AI-generated documents. | Users noted these issues affect every Claude document; high demand for a simple drop-in fix. |
| 3 | [#486](https://github.com/anthropics/skills/pull/486) | `Add ODT skill — OpenDocument text creation and template filling` | Supports `.odt`, `.ods` creation, filling, and conversion to HTML. Trigger includes LibreOffice mentions. | Attracted attention from enterprise users needing open‑standard document workflows. |
| 4 | [#1367](https://github.com/anthropics/skills/pull/1367) | `feat: add self-audit — mechanical verification + 4-dimension reasoning quality gate` | A meta-skill that audits AI output before delivery: file existence check followed by reasoning audit in damage priority order. | Community praised the universal design; discussion around integration with existing quality tools. |
| 5 | [#723](https://github.com/anthropics/skills/pull/723) | `feat: add testing-patterns skill` | Comprehensive testing skill covering unit, React, integration, E2E, property‑based, and mutation testing with philosophy (Trophy model). | Strong interest in a one‑stop skill for testing guidance; feedback on React-specific examples. |
| 6 | [#210](https://github.com/anthropics/skills/pull/210) | `Improve frontend-design skill clarity and actionability` | Revises the existing frontend‑design skill to make instructions more concrete and single‑conversation executable. | Lengthy debate about balancing specificity vs. generality; led to several follow‑up refinement PRs. |
| 7 | [#525](https://github.com/anthropics/skills/pull/525) | `Add pyxel skill for retro game development` | Integrates with `pyxel-mcp` to create retro/pixel‑art/8‑bit games in Python with an iterative capture loop. | Niche but passionate community; author is original Pyxel maintainer. |
| 8 | [#1302](https://github.com/anthropics/skills/pull/1302) | `Add color-expert skill` | Self‑contained color expertise covering naming systems (ISCC‑NBS, Munsell, RAL), color spaces (OKLCH, CAM16), and palette generation. | Broad appeal for designers and data visualisation; discussion on tying into existing document skills. |

---

## 2. Community Demand Trends (from Issues)

The most‑anticipated new Skill directions, distilled from the top 15 most‑commented issues:

| Demand Area | Key Issues | Signal |
|-------------|------------|--------|
| **Evaluation & Optimisation Infrastructure** | [#556](https://github.com/anthropics/skills/issues/556) (12 comments), [#1169](https://github.com/anthropics/skills/issues/1169) (3 comments) | The `run_eval.py` recall‑0% bug is the #1 blocker for the entire Skill ecosystem. Multiple PRs attack it separately. |
| **Skill Sharing & Organisational Deployment** | [#228](https://github.com/anthropics/skills/issues/228) (14 comments, 👍7) | Users want org‑wide libraries, direct share links, and avoid manual `.skill` file distribution. |
| **Security & Trust Boundaries** | [#492](https://github.com/anthropics/skills/issues/492) (43 comments, 👍2) | Fierce debate over community skills distributed under the `anthropic/` namespace creating a trust‑abuse vector. Proposal to require explicit provenance markers. |
| **Skill Creation Best Practices** | [#202](https://github.com/anthropics/skills/issues/202) (8 comments) | The `skill‑creator` skill reads like developer docs; needs to be rewritten as an actionable, token‑efficient instruction set. |
| **Cross‑Platform Compatibility (Windows)** | [#1061](https://github.com/anthropics/skills/issues/1061) (3 comments, 👍2) | Unix‑first subprocess assumptions block Windows users from running the optimisation loop. Repeatedly reported. |
| **New Skill Proposals (High Interest)** | [#1329](https://github.com/anthropics/skills/issues/1329) (compact‑memory), [#412](https://github.com/anthropics/skills/issues/412) (agent‑governance), [#1385](https://github.com/anthropics/skills/issues/1385) (reasoning quality gate) | Community is actively pitching meta‑skills for agent state management, safety patterns, and output validation. |

---

## 3. High‑Potential Pending Skills (Not Yet Merged, Active Comments)

These PRs are still open but have generated sustained discussion and appear close to landing:

| PR | Skill | Why It May Land Soon |
|----|-------|----------------------|
| [#1298](https://github.com/anthropics/skills/pull/1298) | `fix(skill-creator): run_eval.py` | Addresses the top‑blocking bug; collects multiple sub‑fixes from earlier PRs (#1099, #1050, #1323). Consolidation likely. |
| [#1367](https://github.com/anthropics/skills/pull/1367) | `self-audit` skill | Author actively engaging with reviewers; universal design reduces friction. |
| [#723](https://github.com/anthropics/skills/pull/723) | `testing-patterns` skill | No major objections; fills a clear gap in the test‑tooling space. |
| [#514](https://github.com/anthropics/skills/pull/514) | `document-typography` | Small, focused, and immediately useful; low risk of merge conflicts. |
| [#525](https://github.com/anthropics/skills/pull/525) | `pyxel` skill | Maintainer‑authored; likely fast‑tracked after basic validation. |
| [#1302](https://github.com/anthropics/skills/pull/1302) | `color-expert` | Mature content with clear scoping; minimal external dependencies. |

---

## 4. Skills Ecosystem Insight

**The community’s most concentrated demand is for reliable Skill evaluation infrastructure** — fixing the broken `run_eval.py` recall‑0% pipeline is the single bottleneck that blocks both new Skill creation and existing Skill optimization, and it dominates both Pull Request and Issue discussions.

---

# Claude Code Community Digest — 2026-07-24

## Today’s Highlights
The past 24 hours mark a significant escalation of **Fable 5 billing confusion** on Max plans, with multiple reports (Issues #79337, #79341, #79412, #80749) showing the model being wrongly gated behind usage credits despite being included in the plan. Meanwhile, the long-standing **ECONNRESET and connection-closed** bugs on macOS and WSL continue to draw heavy community attention, and a **task-list tools regression** (#80015) has broken automated task management in recent updates.

## Releases
No new versions were published in the last 24 hours.

## Hot Issues (10 Notable)
1. [#5674 – Persistent ECONNRESET Errors on macOS](https://github.com/anthropics/claude-code/issues/5674)  
   **50 comments / 47 👍**  
   A long-running networking bug causing connection drops and task interruptions exclusively on macOS. Users report the same network works fine on Windows/Linux. High frustration, no fix yet.

2. [#79337 – Fable 5 prompts "usage credits required" on Max plan](https://github.com/anthropics/claude-code/issues/79337)  
   **40 comments / 12 👍**  
   Since Fable 5 became standard on Max plans (July 20), sessions are silently downgraded to Opus 4.8 with a false credit-gating message. The most active billing bug this week.

3. [#29006 – Enable Remote Control for Claude Code sessions in Desktop App](https://github.com/anthropics/claude-code/issues/29006)  
   **35 comments / 114 👍**  
   Top feature request: users want to manage headless Claude Code sessions from the Claude Desktop app. Strong community support.

4. [#69415 – Connection closed mid-response on VSCode/WSL](https://github.com/anthropics/claude-code/issues/69415)  
   **33 comments / 65 👍**  
   "Frequent enough to make Claude Code unusable" — network errors on WSL break long tasks. Similar symptoms to #5674 but on a different platform.

5. [#41836 – No session/conversation ID sent to MCP servers](https://github.com/anthropics/claude-code/issues/41836)  
   **14 comments / 24 👍**  
   MCP servers cannot distinguish concurrent sessions, making per-conversation state management impossible. A fundamental MCP protocol gap.

6. [#28986 – Show active model and thinking mode indicators in VS Code](https://github.com/anthropics/claude-code/issues/28986)  
   **13 comments / 61 👍**  
   Developers want at-a-glance visibility into which model and thinking mode is active inside the VS Code panel.

7. [#64961 – Opus 4.7/4.8 token usage regression 2–3x; frequent disconnects](https://github.com/anthropics/claude-code/issues/64961)  
   **10 comments / 5 👍**  
   Users report dramatically higher token consumption after an update, plus increased disconnections on Opus models.

8. [#59408 – Ctrl+C/Ctrl+Shift+C silently clear prompt input on Windows](https://github.com/anthropics/claude-code/issues/59408)  
   **8 comments / 7 👍**  
   TUI bug: accidental keypresses wipe the prompt buffer with no undo or confirmation.

9. [#80015 – Task-list tools no longer exposed to model](https://github.com/anthropics/claude-code/issues/80015)  
   **6 comments / 4 👍**  
   Critical regression: `TaskCreate`/`TaskUpdate`/etc. have vanished from the tool set, breaking any workflow relying on programmatic task management.

10. [#80449 – PDF reading sends both text and images, wasting tokens](https://github.com/anthropics/claude-code/issues/80449)  
    **1 comment / 0 👍**  
    A cost-efficiency request: the Read tool renders PDF pages as images even when text is available, inflating token usage unnecessarily.

## Key PR Progress (All 4 Open/Recent PRs)
1. [#41611 – add the missing source to claude code](https://github.com/anthropics/claude-code/pull/41611)  
   Still open since March. Unknown scope, likely a documentation or metadata fix.

2. [#42604 – Remove "retro-futuristic" recommendation from Frontend Design Skill](https://github.com/anthropics/claude-code/pull/42604)  
   **CLOSED** – A lighthearted PR removing an outdated design suggestion. Merged.

3. [#80508 – fix(scripts): paginate comments and reactions in auto-close-duplicates](https://github.com/anthropics/claude-code/pull/80508)  
   **OPEN** – Fixes a pagination bug in the auto-close script for duplicate issues. Only issues were paginated; comments and reactions were limited to the first page (30). Important for community management at scale.

4. [#80495 – fix(ralph-wiggum): stop parsing /ralph-loop prompt text as shell code](https://github.com/anthropics/claude-code/pull/80495)  
   **OPEN** – Prevents shell injection in the `/ralph-loop` skill by substituting `$ARGUMENTS` into the executed shell line. A security fix for a developer tool.

## Feature Request Trends
The most requested feature directions are:

- **Remote session management** – Managing Claude Code sessions from the Desktop app or cloud dashboard (Issue #29006, 114 👍). Users want to spawn, monitor, and attach to headless sessions.
- **IDE transparency** – Displaying active model, thinking mode, and token usage in the VS Code panel (Issue #28986, 61 👍; Issue #64968 on syntax highlighting, 21 👍). Developers want real-time feedback without leaving the editor.
- **MCP improvements** – Session identifiers for MCP servers (Issue #41836) and better tool aggregation limits (Issue #77704). The MCP ecosystem is growing, and protocol gaps are becoming blocking.
- **Cost visibility & optimization** – PDF reading token waste (Issue #80449), better cost breakdowns in `/usage`. Users are increasingly cost-conscious as models like Fable 5 introduce plan-based allowances.
- **Workflow robustness** – Fallback to raw text upon structured output retry exhaustion (Issue #75086). Subagent work should not be discarded wholesale.

## Developer Pain Points
Recurring frustrations from the last 24 hours:

1. **Network instability** – ECONNRESET on macOS (#5674) and "connection closed mid-response" on WSL/Linux (#69415, #69336). The most upvoted bug category, making Claude Code unreliable for long-running tasks.
2. **Billing/plan confusion with Fable 5** – Multiple reports (7+ issues) of Max plan users being incorrectly charged credits or downgraded. The `/model` picker and `/usage` stats disagree, eroding trust.
3. **Permissions/sandbox gotchas** – Files silently denied without clear rules (#80736), AutoMode classification bypass (#73739), and Chrome extension blocking navigation (#74696). Developers need predictable, explainable sandboxing.
4. **TUI regressions** – Windows keyboard traps (#59408), conversation rendering duplication (#49985), and missing question text in dialogs (#77242). The TUI experience is degrading for power users.
5. **Updater inefficiency** – No cross-session lock causes every running session to download a 265 MB binary independently (#79942), wasting bandwidth and disk I/O on multi-session workflows.
6. **MCP tool cap at 256** – Custom remote MCP connectors hit a hard tool limit, causing intermittent tool loss (#77704). A scalability bottleneck for organizations using many MCP servers.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# Codex Community Digest — 2026-07-24

## Today’s Highlights
Two new Rust alpha releases landed (0.146.0-alpha.5 and 0.146.0-alpha.3.1), while the community continues to report persistent Windows performance regressions, including CPU-spiking `taskkill.exe` storms and `powershell.exe` polling. The most upvoted request this week is a configuration option to disable the 60-second auto-resolve for CLI questions (154 👍). Several significant PRs merged to improve WebSocket routing, proxy compliance, and tool namespace management.

---

## Releases
- **[rust-v0.146.0-alpha.5](https://github.com/openai/codex/releases/tag/rust-v0.146.0-alpha.5)** — Incremental alpha release.
- **[rust-v0.146.0-alpha.3.1](https://github.com/openai/codex/releases/tag/rust-v0.146.0-alpha.3.1)** — Incremental alpha release.

No detailed changelogs were provided in the latest 24h data.

---

## Hot Issues
1. **[#20214 – Codex App freezes/stutters on Windows 11 Pro despite sufficient resources](https://github.com/openai/codex/issues/20214)**  
   *75 comments, 72 👍*  
   A long-standing issue (April 2026) that remains unresolved. Users report stuttering even on high-end AMD Ryzen systems with 32 GB RAM.

2. **[#28969 – Add setting to disable auto-resolve in 60 seconds for questions](https://github.com/openai/codex/issues/28969)**  
   *56 comments, 154 👍*  
   The most upvoted recent request. Community strongly desires control over automatic question resolution in the CLI, which interrupts long-running tasks.

3. **[#3355 – Error after MacBook sleeps](https://github.com/openai/codex/issues/3355)**  
   *41 comments, 23 👍*  
   Connectivity breakage when resuming from sleep; affects users relying on long-running agent sessions.

4. **[#4003 – Patched files have mixed line endings on Windows](https://github.com/openai/codex/issues/4003)**  
   *28 comments, 71 👍*  
   `apply_patch` does not preserve original file line endings, causing conflicts in Windows repositories.

5. **[#34260 – Unbounded `taskkill.exe`/`conhost.exe` cleanup storm exhausts WMI on Windows](https://github.com/openai/codex/issues/34260)**  
   *28 comments, 9 👍*  
   A critical regression from July 20 that can render the desktop app unusable. Hundreds of orphaned processes accumulate.

6. **[#25453 – Windows Codex Desktop spawns `powershell.exe` every second for process polling](https://github.com/openai/codex/issues/25453)**  
   *15 comments, 3 👍*  
   Persistent high CPU usage due to aggressive process enumeration.

7. **[#20883 – MCP servers should be project-scoped per process pool, not per session](https://github.com/openai/codex/issues/20883)**  
   *15 comments, 4 👍*  
   Feature request to reduce resource waste by sharing stdio MCP servers across chats in the same workspace.

8. **[#26250 – RTL/LTR text rendering broken for mixed Arabic/English](https://github.com/openai/codex/issues/26250)**  
   *13 comments, 0 👍*  
   Bidirectional text issues in the macOS app, affecting users of right-to-left scripts.

9. **[#35032 – Auto-compaction leaves thread ~80% full after compaction, causing repeat cycles](https://github.com/openai/codex/issues/35032)**  
   *13 comments, 0 👍*  
   Long-running tool-heavy sessions report compaction success but then immediately trigger another compaction, wasting tokens.

10. **[#30712 – Split writable roots cause `apply_patch` to fail on Windows, forcing sandbox bypass](https://github.com/openai/codex/issues/30712)**  
    *12 comments, 12 👍*  
    A sandbox bug that forces agents to fall back to PowerShell file writes, bypassing safe edit paths.

---

## Key PR Progress
1. **[#35078 – Add WebSocket transport to the code-mode host](https://github.com/openai/codex/pull/35078)**  
   Merged. Introduces `--listen ws://IP:PORT` as an alternative to stdio, enabling remote code-mode connections.

2. **[#35067 – Fix Bazel test configuration for platform-specific data](https://github.com/openai/codex/pull/35067)**  
   Merged. Resolves test failures on Windows by properly including CLI snapshot files and restricting sandbox tests to Windows.

3. **[#35065 – Avoid duplicating deferred sources in tool search](https://github.com/openai/codex/pull/35065)**  
   Merged. Reduces context redundancy when deferred tool world state is active.

4. **[#35063 – Track deferred tool namespaces in world state](https://github.com/openai/codex/pull/35063)**  
   Merged. Adds a `deferred_tool_world_state` feature to expose tool namespaces to the model.

5. **[#35059 – Decouple exec-server HTTP from reqwest types](https://github.com/openai/codex/pull/35059)**  
   Merged. Refactors HTTP handling to use Codex’s route-aware transport, improving proxy compliance.

6. **[#35056 – Route exec-server WebSockets through configured proxies](https://github.com/openai/codex/pull/35056)**  
   Merged. Remote environment WebSocket connections now respect outbound proxy settings.

7. **[#35054 – Allow disabling the `update_plan` tool](https://github.com/openai/codex/pull/35054)**  
   Merged. Adds a `tools.update_plan.enabled` configuration option (default on) to opt out.

8. **[#35049 – Register the Guardian V2 feature flag](https://github.com/openai/codex/pull/35049)**  
   Merged. Exposes `features.guardianv2` for automatic approval reviews, disabled by default.

9. **[#35036 – Preserve Windows sandbox proxy settings in guardian sessions](https://github.com/openai/codex/pull/35036)**  
   Merged. Fixes a bug where guardian review commands could lose the parent session’s proxy configuration.

10. **[#35029 – Preserve plugin attribution across command approvals](https://github.com/openai/codex/pull/35029)**  
    Merged. Propagates `plugin_id` and `script_path` through execution approval and guardian assessment events.

---

## Feature Request Trends
- **Control over auto-resolve behavior** – The top-voted issue (#28969) demands a configurable timeout or disable option for automatic question resolution.
- **Project-scoped MCP process pooling** – Users want a single MCP server per workspace instead of per chat to reduce resource consumption (#20883).
- **Multi-chat UI** – A long-standing request for side-by-side or tiled chat sessions in the desktop app (#13036).
- **Sidebar customization** – Disable automatic expansion on hover (#31538) and fix keyboard shortcut conflicts (#33977).
- **Standalone web search for custom providers** – A new PR (#35024) enables opt-in standalone web search for non-OpenAI providers.

---

## Developer Pain Points
- **Windows desktop performance regressions** – Multiple high-comment issues report unbounded process spawning (`taskkill.exe`, `powershell.exe`), CPU saturation, WMI exhaustion, and `apply_patch` hangs. These are actively degrading the experience for Windows Pro/Enterprise users.
- **Sandbox reliability** – The split writable root bug (#30712) and intermittent `apply_patch` hangs (#34290) force agents to bypass the sandbox, defeating security guarantees.
- **Connectivity after sleep** – MacBook users face persistent WebSocket failures after wake (#3355), with workarounds requiring manual configuration.
- **Windows file handling** – Mixed line endings (#4003) and clipboard image spinning after temp file deletion (#32699) remain unfixed after many months.
- **Lack of configuration ergonomics** – Users repeatedly request simple toggles for auto-resolve, sidebar behavior, and tool registration, indicating a need for more discoverable settings.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest – July 24, 2026

## Today's Highlights
No new releases were published in the last 24 hours. The community’s focus remains on agent reliability and security hardening, with a batch of seven PRs merged addressing credential race conditions, trust dialog disclosures, and stagnation detection in agentic loops. A notable influx of infrastructure PRs for the new “Caretaker” triage agent and the SSR Code Generation Pipeline signals ongoing large-scale development behind the scenes.

## Releases
No new releases in the last 24 hours.

---

## Hot Issues

1. **[#22323 – Subagent recovery after MAX_TURNS reported as GOAL success](https://github.com/google-gemini/gemini-cli/issues/22323)**  
   `codebase_investigator` reports `status: "success"` even after hitting the turn limit without doing any analysis. This masks real failures and misleads users. With 12 comments it’s the most discussed issue today.

2. **[#21409 – Generalist agent hangs](https://github.com/google-gemini/gemini-cli/issues/21409)**  
   The agent hangs indefinitely when delegating to the generalist subagent. Instructing the model not to use sub‑agents works around the problem. 8 comments, 8 upvotes – a top pain point.

3. **[#25166 – Shell command gets stuck "Waiting input" after completion](https://github.com/google-gemini/gemini-cli/issues/25166)**  
   Simple CLI commands finish but the tool remains in an “awaiting user input” state. 3 upvotes and 4 comments show this is a frequent frustration.

4. **[#21983 – Browser subagent fails on Wayland](https://github.com/google-gemini/gemini-cli/issues/21983)**  
   The browser agent terminates with `GOAL` but never actually accomplishes the task under Wayland compositors. Linux desktop users are impacted.

5. **[#22093 – Subagents running without permission since v0.33.0](https://github.com/google-gemini/gemini-cli/issues/22093)**  
   Users who explicitly disabled sub‑agents see them activated after the update. Raises trust and control concerns.

6. **[#26522 – Auto Memory retrying low‑signal sessions indefinitely](https://github.com/google-gemini/gemini-cli/issues/26522)**  
   Sessions that the extraction agent chooses to skip remain unprocessed and are re‑surfaced repeatedly, wasting model context and API costs.

7. **[#20079 – Symlinked agent files not recognized](https://github.com/google-gemini/gemini-cli/issues/20079)**  
   Placing a symlink in `~/.gemini/agents/` prevents the CLI from detecting it as a subagent. A simple but disruptive limitation for advanced setups.

8. **[#22267 – Browser Agent ignores settings.json overrides](https://github.com/google-gemini/gemini-cli/issues/22267)**  
   Settings such as `maxTurns` are correctly merged by the registry but never passed to the browser agent’s runtime. Configurations become ineffective.

9. **[#22232 – Enhance browser_agent resilience with session takeover and lock recovery](https://github.com/google-gemini/gemini-cli/issues/22232)**  
   The current “fail‑fast” strategy on locked browser profiles prevents any retry or graceful recovery. A feature request with clear technical implications.

10. **[#22672 – Agent should stop/discourage destructive behavior](https://github.com/google-gemini/gemini-cli/issues/22672)**  
    The model occasionally uses `git reset --force` or other destructive commands when safer alternatives exist. Community calls for built‑in guardrails.

---

## Key PR Progress

1. **[#28346 – Fix trust dialog disclosure for runnable hooks](https://github.com/google-gemini/gemini-cli/pull/28346)**  
   Merged. Stops reporting invalid hook entries as runnable commands and adds a warning when project settings contain command hooks. Improves security UX.

2. **[#28330 – Fix token file mode atomicity (TOCTOU)](https://github.com/google-gemini/gemini-cli/pull/28330)**  
   Merged. Writes the auth‑token port file with `0o600` in one atomic step, closing a race window where the file was briefly world‑readable.

3. **[#28331 / #28333 – Conscious stagnation detection for agentic loops](https://github.com/google-gemini/gemini-cli/pull/28331)**  
   Merged. Introduces a “Guided Recovery” mechanism and a “Stagnation Circuit Breaker” to prevent premature termination after `/rewind` or text‑only responses. Critical for agent reliability.

4. **[#28344 – `eval:validate` static analysis command](https://github.com/google-gemini/gemini-cli/pull/28344)**  
   Merged. Adds CI‑gated validation of eval source files against 9 rules, including per‑file error reporting and JSON output.

5. **[#28328 – Don't flag non‑auth 401 substrings as authentication errors](https://github.com/google-gemini/gemini-cli/pull/28328)**  
   Merged. Fixes a bug where connection errors containing “401” (e.g., port `4012`) triggered unnecessary OAuth fallback.

6. **[#28327 – Only percent‑decode `file://` URLs in resolveToRealPath](https://github.com/google-gemini/gemini-cli/pull/28327)**  
   Merged. Plain filesystem paths with `%` characters (e.g., `report%202026.txt`) are no longer corrupted. Fixes a subtle input‑handling bug.

7. **[#28525 – GCP deployment script for Caretaker agent services](https://github.com/google-gemini/gemini-cli/pull/28525)**  
   Open. Adds Cloud Run deployment scripts for Ingestion, Triage Worker, and Egress services – part of the automated issue‑triage pipeline.

8. **[#28519 – Prevent infinite auth loop by awaiting credential save](https://github.com/google-gemini/gemini-cli/pull/28519)**  
   Open. Fixes #28430 where an un‑awaited write to `oauth_creds.json` caused repeated re‑authentication.

9. **[#28523 – Enforce explicit tag length and validation in file keychain](https://github.com/google-gemini/gemini-cli/pull/28523)**  
   Open. Hardens the file‑based credential store by enforcing 128‑bit authentication tag lengths across Node.js runtimes.

10. **[#28411 – Post comment before auto‑closing issues](https://github.com/google-gemini/gemini-cli/pull/28411)**  
    Merged. The triage worker now leaves an explanatory comment before attaching the `auto-close` label, giving users insight into why their issue was closed.

---

## Feature Request Trends

- **AST‑aware code intelligence** – Several issues ([#22745](https://github.com/google-gemini/gemini-cli/issues/22745), [#22746](https://github.com/google-gemini/gemini-cli/issues/22746)) propose using Abstract Syntax Trees for precise file reads, search, and method boundary detection to reduce token waste and improve agent accuracy.

- **Subagent trajectory visibility** – Users want to inspect and share subagent execution traces (e.g., via `/chat share`) for debugging and evaluation ([#22598](https://github.com/google-gemini/gemini-cli/issues/22598)).

- **Memory system hardening** – Multiple requests ask for deterministic redaction of secrets before sending transcripts to the model, better handling of invalid/inbox patches, and preventing infinite retries of low‑signal sessions ([#26525](https://github.com/google-gemini/gemini-cli/issues/26525), [#26523](https://github.com/google-gemini/gemini-cli/issues/26523), [#26522](https://github.com/google-gemini/gemini-cli/issues/26522)).

- **Agent self‑awareness** – The CLI should understand its own CLI flags, hotkeys, and configuration to act as an expert guide for users ([#21432](https://github.com/google-gemini/gemini-cli/issues/21432)).

- **Native bash sandboxing** – Proposal to leverage Gemini 3’s bash affinity via a zero‑dependency OS sandbox with intent routing, improving safety without sacrificing the model’s native shell capabilities ([#19873](https://github.com/google-gemini/gemini-cli/issues/19873)).

- **Browser agent resilience** – Requests for automatic session takeover, lock recovery, and proper configuration propagation to the browser agent ([#22232](https://github.com/google-gemini/gemini-cli/issues/22232), [#22267](https://github.com/google-gemini/gemini-cli/issues/22267)).

- **Destructive operation guardrails** – Community wants the agent to prefer safe alternatives and issue warnings before running irreversible commands like forced git operations or database modifications ([#22672](https://github.com/google-gemini/gemini-cli/issues/22672)).

---

## Developer Pain Points

- **Agent unreliability** – Hangs, false success reports, and unexpected subagent activation erode trust. Issues like [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) (generalist agent hangs) and [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) (MAX_TURNS false success) are the highest‑commented.

- **Shell interaction problems** – Commands that complete but remain in “waiting input” state ([#25166](https://github.com/google-gemini/gemini-cli/issues/25166)) and getting stuck at interactive prompts (e.g., vite app creation, [#22465](https://github.com/google-gemini/gemini-cli/issues/22465)).

- **Security edge cases** – Auth token file TOCTOU, credential store tag validation, and trust dialog inconsistencies have all been patched this week, indicating ongoing security hardening is needed.

- **Memory system bugs** – Auto Memory retrying low‑signal sessions, invalid patches being silently skipped, and secrets leaking into model context before redaction ([#26522](https://github.com/google-gemini/gemini-cli/issues/26522), [#26523](https://github.com/google-gemini/gemini-cli/issues/26523), [#26525](https://github.com/google-gemini/gemini-cli/issues/26525)).

- **Configuration and settings not honored** – Browser agent ignores `maxTurns`; settings overrides are read but not applied at runtime ([#22267](https://github.com/google-gemini/gemini-cli/issues/22267)). Symlinks in the agents folder are also ignored ([#20079](https://github.com/google-gemini/gemini-cli/issues/20079)).

- **Terminal and UI glitches** – Screen corruption after exiting external editors ([#24935](https://github.com/google-gemini/gemini-cli/issues/24935)), flicker on terminal resize ([#21924](https://github.com/google-gemini/gemini-cli/issues/21924)), and crashes in the “get‑shit‑done” output hook ([#22186](https://github.com/google-gemini/gemini-cli/issues/22186)).

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-07-24

## Today’s Highlights
Two patch releases (v1.0.74 / v1.0.74-4) landed yesterday, bringing Open Plugin Spec v1 support and more reliable IDE reconnection after MCP server reloads. On the issue tracker, a critical session‑size wedge (deleted binaries permanently bloating history) gained 5 upvotes and is driving calls for a `/compact` recovery flow, while a new Ctrl+C regression (agent runs no longer interrupt) has already drawn early community attention.

---

## Releases
**v1.0.74** (2026-07-23)  
**v1.0.74-4** (2026-07-23)  

Both releases contain identical core changes:  
- **Added** – Support for Open Plugin Spec v1 manifests and `mcp.json` configuration.  
- **Improved** – Subagent timelines now identify whether prompts originated from the main agent or another subagent.  
- **Fixed** – IDE integration reconnects reliably when the CLI reloads MCP servers or changes directory.  
- **Fixed** – Typing `?` while the `/search` bar is open no longer enters the character instead of opening quick help.

---

## Hot Issues (10 Noteworthy)

### 1. [OPEN] #4097 – `apply_patch` stores deleted binary in session history, permanently exceeding 5 MB limit  
**Why it matters:** Deleting a large binary file bloats conversation history beyond CAPI’s limit; the session becomes unusable. Community upvoted (👍5) and wants a `/compact` or recovery mechanism.  
🔗 [github/copilot-cli Issue #4097](https://github.com/github/copilot-cli/issues/4097)

### 2. [CLOSED] #3767 – Oversized attachment permanently wedges session (CAPI 5MB native limit, no recovery)  
**Why it matters:** A clear size‑limit violation that offers no recovery path, blocking the entire session. Closed, but the underlying design issue remains hot.  
🔗 [github/copilot-cli Issue #3767](https://github.com/github/copilot-cli/issues/3767)

### 3. [OPEN] #4143 – CLI should inherit MCP tools from connected VS Code instance  
**Why it matters:** VS Code users with MCP extensions (e.g., MSSQL Agent) expect the CLI to share those tools. Upvoted (👍5) and triaged – high demand for cross‑editor MCP composability.  
🔗 [github/copilot-cli Issue #4143](https://github.com/github/copilot-cli/issues/4143)

### 4. [OPEN] #4206 – Environment footer stuck on “Loading:” forever when built‑in GitHub MCP handshake stalls under org MCP policy  
**Why it matters:** Enterprise users hit a dead state with no error, making the CLI appear broken. Triaged with 2 upvotes.  
🔗 [github/copilot-cli Issue #4206](https://github.com/github/copilot-cli/issues/4206)

### 5. [OPEN] #4165 – `copilot --resume` hangs at “Resuming session” on cold start in Windows  
**Why it matters:** Windows users cannot resume sessions directly from PowerShell – a core workflow breaks. 3 comments, 1 upvote.  
🔗 [github/copilot-cli Issue #4165](https://github.com/github/copilot-cli/issues/4165)

### 6. [CLOSED] #4122 – Subagents resolve relative markdown links against cwd instead of the agent file’s directory  
**Why it matters:** Custom agent docs that use relative paths (`../prompts/...`) fail to load, breaking agent guidance. Closed, but the fix is highly relevant for agent authors.  
🔗 [github/copilot-cli Issue #4122](https://github.com/github/copilot-cli/issues/4122)

### 7. [OPEN] #4235 – Ctrl+C no longer cancels/interrupts an active agent run (regression)  
**Why it matters:** A core keyboard shortcut stops working – users lose control over long‑running agents. Filed yesterday and quickly gaining traction.  
🔗 [github/copilot-cli Issue #4235](https://github.com/github/copilot-cli/issues/4235)

### 8. [OPEN] #4238 – Failed GitHub MCP tool details render the server label one character per line  
**Why it matters:** Poor rendering makes error details nearly unreadable. A small but irritating UI regression.  
🔗 [github/copilot-cli Issue #4238](https://github.com/github/copilot-cli/issues/4238)

### 9. [OPEN] #4211 – Copilot CLI cannot handle BigInt in structured MCP response  
**Why it matters:** MCP servers returning large integers (e.g., IDs) crash the CLI entirely (`TypeError: Do not know how to serialize a BigInt`). Blocks any server with `BigInt` fields.  
🔗 [github/copilot-cli Issue #4211](https://github.com/github/copilot-cli/issues/4211)

### 10. [OPEN] #4199 – Stale sessions keep running an old (deleted) binary after in‑CLI update; idle sessions never trim heap (~460 MB held for hours)  
**Why it matters:** Multi‑tab users silently run an old binary with a massive memory leak. Both a security concern (old binary) and a resource hog.  
🔗 [github/copilot-cli Issue #4199](https://github.com/github/copilot-cli/issues/4199)

---

## Key PR Progress
Only two PRs were updated in the last 24 hours:

- [#3163](https://github.com/github/copilot-cli/pull/3163) – [OPEN] “ViewSonic monitor” – appears to be an unrelated or test PR; no community discussion.  
- [#4228](https://github.com/github/copilot-cli/pull/4228) – [CLOSED] “Withdrawn: incorrect scope for #3534” – closed by author as it targeted documentation instead of the private clipboard runtime implementation.

No significant feature or bug‑fix PRs were merged or updated in this window.

---

## Feature Request Trends
1. **MCP Ecosystem Expansion** – Inherit tools from connected VS Code instances (#4143), support `resources/subscribe` and mid‑turn tool‑list updates (#3125, #3073).  
2. **Session & History Resilience** – Recovery flows for size‑limit wedges (`/compact`, auto‑trim of binary diffs), better handling of oversized attachments (#4097, #3767).  
3. **Cross‑Platform & Rendering** – Wayland PRIMARY clipboard support (#4236), Windows session resume (#4165), Alpine/musl auto‑update fix (#3696).  
4. **Plugin & Agent Enhancements** – Open Plugin Spec v1 (already landed), plugin‑loaded MCP servers getting the correct working directory (#4234), `userPromptSubmitted` hook with prompt modification (#3713).  
5. **ACP Protocol Parity** – Emit `usage_update` in `--acp` mode so third‑party clients (Zed, Xcode) can show context‑window and AI‑credit usage (#4233).

---

## Developer Pain Points
- **Session size dead‑ends** – Once a binary deletion or oversized attachment pushes history past 5 MB, there is no recovery. Users are forced to start a new session.  
- **Stale process memory leaks** – After an in‑CLI update, other terminal tabs run an old binary indefinitely, consuming ~460 MB of heap.  
- **Keyboard interrupt regression** – Ctrl+C no longer stops an active agent run; users lose the ability to cancel mid‑turn.  
- **UI rendering glitches** – MCP error details rendered one character per line, infinite React render loops, and stuck “Loading:” footers under enterprise MCP policies.  
- **MCP compatibility gaps** – Atlassian MCP server returns zero tools after OAuth, BigInt crashes the CLI, and mid‑turn tool changes are invisible to the model.  
- **Authentication hurdles** – Enterprise users (GHE) cannot use ACP clients; OAuth flows sometimes stall or produce no tools.

---

*Digest generated from [github.com/github/copilot-cli](https://github.com/github/copilot-cli) data on 2026-07-24.*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest – 2026-07-24

## Today's Highlights
A major bug-fix wave landed today: **15 pull requests** were opened, nearly all focused on stability and cross-platform correctness (Windows UTF-8, process trees, MCP client reuse, plugin crashes). The community also saw a thought-provoking discussion on applying Kimi’s Agent design to financial trading (#2555). No new releases were published in the last 24 hours.

## Releases
No releases in the last 24 hours.

## Hot Issues
Six issues were updated in the last 24 hours; all are listed below.

**#2555 – Discussion: A-share quantification + AI Agent practice**  
*Author: yupeng012 | Created: 2026-07-24 | Comments: 0 | 👍: 0*  
A detailed exploration of using Kimi’s Agent ideas in a financial trading context (Hermes Agent framework). Core findings include needing real PnL feedback loops, parameter-driven over hardcoded logic, and Bayesian optimisation.  
[MoonshotAI/kimi-cli Issue #2555](https://github.com/MoonshotAI/kimi-cli/issues/2555)

**#2553 – `/plugins` crashes with TypeError when 2+ plugins installed (v0.29.0, Windows)**  
*Author: tovipy-png | Created: 2026-07-23 | Comments: 0 | 👍: 0*  
A reproducible crash in the plugin management UI when more than one plugin is present. Affects the single-file binary on Windows.  
[MoonshotAI/kimi-cli Issue #2553](https://github.com/MoonshotAI/kimi-cli/issues/2553)

**#2552 – Poor font kerning for Cyrillic text in Kimi Desktop chat markdown**  
*Author: Serg2000Mr | Created: 2026-07-23 | Comments: 0 | 👍: 0*  
Cyrillic letters are rendered with broken letter spacing in markdown blocks on Windows, making text hard to read.  
[MoonshotAI/kimi-cli Issue #2552](https://github.com/MoonshotAI/kimi-cli/issues/2552)

**#2545 – Synchronize queued prompts to backend for phone users**  
*Author: vilicvane | Created: 2026-07-23 | Comments: 0 | 👍: 0*  
When the browser (or app) moves to background, queued prompts are lost. Suggests buffering and syncing to backend so phone users don’t lose progress.  
[MoonshotAI/kimi-cli Issue #2545](https://github.com/MoonshotAI/kimi-cli/issues/2545)

**#2538 – `kimi-datasource` plugin worker pool blocks all sessions on timeout**  
*Author: cloxichjc | Created: 2026-07-23 | Comments: 0 | 👍: 0*  
When using the Yahoo Finance data plugin, a single session’s slow API calls can block all other concurrent sessions. Indicates a shared worker pool with no per-session isolation.  
[MoonshotAI/kimi-cli Issue #2538](https://github.com/MoonshotAI/kimi-cli/issues/2538)

**#1282 – Feature Request: Remote Control – continue local sessions from any device**  
*Author: CatKang | Updated: 2026-07-23 | Comments: 6 | 👍: 16*  
Long-standing popular request (16 👍) to allow resuming a local CLI session from phone/tablet/browser. Continues to receive updates.  
[MoonshotAI/kimi-cli Issue #1282](https://github.com/MoonshotAI/kimi-cli/issues/1282)

## Key PR Progress
10 significant pull requests were opened today, all by lihailong00 except one.

**#2554 – fix(tools): count StrReplaceFile replacements against running content**  
*Author: ayaangazali*  
Corrects the success message for `StrReplaceFile` to count actual replacements against the running (modified) content rather than the original. Small but important correctness fix.  
[PR #2554](https://github.com/MoonshotAI/kimi-cli/pull/2554)

**#2548 – fix(mcp): reuse initialized client sessions**  
*Author: lihailong00*  
Prevents repeated `initialize` handshakes with MCP servers by keeping each initialized client session open for the toolset lifetime. Uses `AsyncExitStack` for clean teardown.  
[PR #2548](https://github.com/MoonshotAI/kimi-cli/pull/2548)

**#2551 – fix(shell): search past file completion limit**  
*Author: lihailong00*  
Extends `@` file completion beyond the first 1000 filesystem entries for non-Git queries, with bounded result/scan budgets (1000/10000).  
[PR #2551](https://github.com/MoonshotAI/kimi-cli/pull/2551)

**#2550 – fix(kosong): propagate message serialization options**  
*Author: lihailong00*  
Ensures Pydantic serialization options (e.g., `exclude_none=True`) are properly propagated through `Message.content`, fixing null `id` fields in nested media for some providers.  
[PR #2550](https://github.com/MoonshotAI/kimi-cli/pull/2550)

**#2549 – fix(shell): index tracked vendor files**  
*Author: lihailong00*  
Allows Git-tracked files under `vendor/` to appear in `@` completion, while still excluding `node_modules` and untracked vendor trees.  
[PR #2549](https://github.com/MoonshotAI/kimi-cli/pull/2549)

**#2547 – fix(windows): configure stdio as utf-8**  
*Author: lihailong00*  
Sets UTF-8 encoding on Windows stdout/stderr at CLI startup, fixing garbled output on cp936 streams. Leaves non‑reconfigureable streams untouched.  
[PR #2547](https://github.com/MoonshotAI/kimi-cli/pull/2547)

**#2546 – fix(print): escape markup in echoed stdin prompts**  
*Author: lihailong00*  
Stops Rich markup interpretation of user input (e.g., `[/login]`) when echoing stdin prompts – now renders literally. Model input unchanged.  
[PR #2546](https://github.com/MoonshotAI/kimi-cli/pull/2546)

**#2543 – fix(hooks): notify on permission prompts**  
*Author: lihailong00*  
Emits the documented `permission_prompt` hook notification when manual approval is required, except for auto‑approved paths (yolo/AFK/cached). Fixes a regression.  
[PR #2543](https://github.com/MoonshotAI/kimi-cli/pull/2543)

**#2541 – fix(mcp): continue after deferred startup failure**  
*Author: lihailong00*  
Prevents a background MCP startup failure from aborting the interactive turn – only catches `MCPRuntimeError` at the deferred wait boundary.  
[PR #2541](https://github.com/MoonshotAI/kimi-cli/pull/2541)

**#2542 – fix(logging): isolate Windows process log files**  
*Author: lihailong00*  
Uses `kimi.<pid>.log` on Windows to avoid log file rotation conflicts between concurrent processes. Non‑Windows retains `kimi.log`.  
[PR #2542](https://github.com/MoonshotAI/kimi-cli/pull/2542)

## Feature Request Trends
- **Remote Session Continuity** (#1282, #2545): Users repeatedly ask for the ability to pause and resume CLI sessions across devices, especially from mobile phones. The 16 👍 on #1282 indicates strong interest.
- **Plugin Ecosystem & Stability** (#2553, #2538): As plugins grow in popularity, issues around plugin management UI crashes and shared resource contention (worker pools) become more prominent.
- **Cross‑Platform Consistency** (#2552, #2545, #2538): Windows-specific rendering bugs (Cyrillic kerning, plugin crashes) and phone UX gaps suggest a need for better platform testing.

## Developer Pain Points
- **Plugin Concurrency Deadlocks**: The `kimi-datasource` worker pool blocking all sessions (#2538) points to a lack of per-session isolation in plugin infrastructure – a common pain when scaling from single‑user to multi‑session usage.
- **Windows Encoding & Rendering**: Multiple fixes this week (UTF-8 stdio, log file isolation, numeric keypad support) show that Windows users still face basic UI/encoding issues that break core workflows.
- **MCP Session Management**: Several PRs (#2548, #2541, #2539) address MCP client session reuse, startup failures, and tool name aliasing – indicating that the MCP integration layer is still maturing and requires careful edge‑case handling.
- **Permission Prompt Reliability**: The regression in hooks (#2543) suggests that the permission notification system for tool calls may be fragile when switching between approval modes (manual/yolo/AFK).

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-07-24

## Today's Highlights
The community remains focused on a critical subscription provider issue where all models under `opencode-go` return `Request blocked by upstream provider` (#38218, #38216). Meanwhile, the V2 migration effort dominates pull requests, with a series of PRs from **Brendonovich** adapting the web app, session UI, and PTY transport to the new protocol. A long‑standing bug causing empty session changes panels (#32852) is finally addressed in PR #38592.

## Releases
No new releases in the last 24 hours.

## Hot Issues
1. **[#38218 – All subscription models return "Request blocked by upstream provider"](https://github.com/anomalyco/opencode/issues/38218)**  
   *Open, 25 comments, 9 👍*  
   Every model under `opencode-go` fails with the same upstream block. Users report that free tier models work fine. The issue is actively discussed with no clear resolution yet.

2. **[#38216 – "Request blocked by upstream provider"](https://github.com/anomalyco/opencode/issues/38216)**  
   *Open, 9 comments, 5 👍*  
   Similar report from a Go‑plan user; all Go‑tier models fail while free models work. Points to a systematic subscription authentication or routing problem.

3. **[#38255 – Discrepancy between different usage dashboards](https://github.com/anomalyco/opencode/issues/38255)**  
   *Open, 5 comments*  
   Monthly limit dashboard shows 100% usage, but granular dashboard shows only ~$10 of credit used. Users are confused and blocked from using paid models.

4. **[#21032 – oh-my-openagent works on 1.3.13 but registers nothing on 1.3.14](https://github.com/anomalyco/opencode/issues/21032)**  
   *Closed, 26 comments, 7 👍*  
   Regression in plugin loading: the plugin enters the loading flow but ends up registering no tools. Rolling back fixes it. Important for plugin ecosystem stability.

5. **[#22292 – Managed settings bypass via OPENCODE_PERMISSION env var](https://github.com/anomalyco/opencode/issues/22292)**  
   *Closed, 11 comments, 1 👍*  
   Security vulnerability: admin‑enforced `managed` settings can be overridden by `OPENCODE_PERMISSION` env var and additive object merging. Follow‑up to previous fixes.

6. **[#6536 – Mobile App](https://github.com/anomalyco/opencode/issues/6536)**  
   *Closed, 16 comments, 48 👍*  
   Long‑standing feature request for a native mobile app. High community demand.

7. **[#37326 – Math equations not rendered](https://github.com/anomalyco/opencode/issues/37326)**  
   *Open, 7 comments, 1 👍*  
   Models that output LaTeX/math are not rendered correctly in OpenCode Desktop v1.18.2. Affects scientific and technical users.

8. **[#25570 – Support Multiple Skills in a Single Prompt](https://github.com/anomalyco/opencode/issues/25570)**  
   *Open, 4 comments, 16 👍*  
   Users want the ability to specify multiple skills (e.g., “use engineer and architect”) in one prompt. Critical for complex multi‑framework workflows.

9. **[#26371 – Require double Ctrl+C to exit CLI](https://github.com/anomalyco/opencode/issues/26371)**  
   *Closed, 5 comments, 4 👍*  
   Proposal to adopt a two‑press pattern similar to Claude Code: first press interrupts, second exits. Prevents accidental session termination.

10. **[#36285 – 2.0: managed-service restart causes reconnect herd and resource spikes](https://github.com/anomalyco/opencode/issues/36285)**  
    *Closed, 5 comments*  
    Opening a V2 TUI during an auto‑update causes massive resource spikes and delayed readiness. Important for production deployments of the V2 architecture.

## Key PR Progress
1. **[#38603 – fix(app): use current default model](https://github.com/anomalyco/opencode/pull/38603)**  
   Preserves the V2 `/api/model/default` result in the provider catalog and uses it for web app model selection. Essential for correct model fallback.

2. **[#38602 – refactor(core): simplify session runner loop and pending input scopes](https://github.com/anomalyco/opencode/pull/38602)**  
   Readability refactor of V2 session runner. The hierarchy now reads `drain → runSteps → runStep → callModel`. Reduces cognitive overhead for core contributors.

3. **[#38600 – feat(core): add Kimi Code OAuth](https://github.com/anomalyco/opencode/pull/38600)**  
   Adds RFC 8628 device OAuth flow for Kimi Code integration, including persistent device identity and official `X-Msh-*` headers. Expands provider ecosystem.

4. **[#38596 – fix(core): share one tool snapshot per request](https://github.com/anomalyco/opencode/pull/38596)**  
   Captures a single `ToolRegistry.ToolSet` per request and uses it across all model‑facing tool surfaces. Prevents inconsistent tool views during a single turn.

5. **[#38433 – feat(opencode): add roll-call command](https://github.com/anomalyco/opencode/pull/38433)**  
   New CLI command to test text models for connectivity and latency. Closes #13711. Useful for diagnosing provider issues.

6. **[#38463 – feat(app): support current pty transport](https://github.com/anomalyco/opencode/pull/38463)**  
   Migrates PTY lifecycle and shell discovery to the compatible API. Part of the ongoing V2 migration.

7. **[#38460 – feat(app): support current review data](https://github.com/anomalyco/opencode/pull/38460)**  
   Accepts current file‑diff records in app and session UI, migrating VCS review requests to the new response envelopes.

8. **[#38459 – feat(app): project current server state](https://github.com/anomalyco/opencode/pull/38459)**  
   Normalizes sessions, messages, providers, and MCP data for V2. Closes as part of the migration series.

9. **[#35311 – fix(core): Multiple clones of same repo are different projects](https://github.com/anomalyco/opencode/pull/35311)**  
   Changes project identity logic so that multiple clones of the same repository are treated as a single project. Closes 14 related issues. Long‑awaited fix.

10. **[#38592 – fix: session changes panel always empty](https://github.com/anomalyco/opencode/pull/38592)**  
    Fixes a bug where the “Session Changes” panel in TUI and Desktop never showed modified files. Root cause: `Session.diff()` stub and `SessionSummary.diff()` fallback missing.

## Feature Request Trends
- **Mobile & Android support** (#6536, #28229): persistent high‑demand, with 48 👍 on the mobile app request. No official roadmap yet.
- **Multi‑skill & multi‑agent workflows** (#25570, #14043): users want to combine skills in a single prompt and navigate sub‑agents intuitively.
- **Improved UX controls** (#26371 double Ctrl+C, #28035 sticky prompt line, #23842 desktop notifications, #24404 task state color convention): feedback on preventing accidental exits, keeping context visible, and better session visibility.
- **Provider & key management** (#29085 round‑robin API keys, #25570 skills, #38594 reasoning/token limits): growing need for advanced provider configuration and load balancing.

## Developer Pain Points
- **Subscription model availability** (#38218, #38216, #38255): multiple users report paid models returning “Request blocked by upstream provider” while free models work. Usage dashboards also show contradictory data.
- **Plugin & tool registration regressions** (#21032, #29118): plugin compatibility breaks across minor version bumps (e.g., `oh-my-openagent` on 1.3.14, `todowrite` not registered).
- **Managed settings bypass** (#22292): security holes where managed configurations can be overridden by environment variables or additive merging.
- **Windows‑specific bugs** (#29859 @ file reference failure, #36743 file tree not expanding): Windows users face persistent issues with file navigation and auto‑completion.
- **Rendering & display issues** (#37326 math equations, #28854 workspace delete deletes branch, #29088 bracket/brace mismatch): users report data loss and visual glitches that disrupt workflow.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-07-24

## Today’s Highlights
A flurry of bug fixes landed addressing clipboard reliability, model hot-reload, and hardcoded token limits, while the long-running discussion on constrained/strict tool grammar appears to be reaching closure with a merged PR. Users are also calling for new provider integrations (SiliconFlow) and better Qwen reasoning control, and several sandbox‑/sandbox‑adjacent defects remain active.

## Releases
No new versions published in the last 24 hours.

## Hot Issues (10)

1. **[#6306 – Support Strict Tools / Grammar](https://github.com/earendil-works/pi/issues/6306)** (22 comments, CLOSED)  
   A community‑driven feature request for “free form” or strict tools – i.e. grammar‑aware probing from the LLM side. The discussion has been active for three weeks and is now resolved in master.

2. **[#7024 – Security docs missing](https://github.com/earendil-works/pi/issues/7024)** (3 comments, CLOSED)  
   A trivial but critical documentation gap: the `/docs/latest/security` page returns 404. Quickly fixed after filing.

3. **[#6951 – Qwen reasoning effort mismatch](https://github.com/earendil-works/pi/issues/6951)** (3 comments, OPEN, 👍1)  
   Pi currently maps reasoning levels (minimal/low/medium/high) but Qwen’s API expects low/medium/xhigh. Affects users of `qwen3.8-max-preview`. Community up‑voted, but no update yet.

4. **[#6999 – models.json hot‑reload regression](https://github.com/earendil-works/pi/issues/6999)** (3 comments, OPEN)  
   After `0.80.8`, editing `~/.pi/agent/models.json` during a session no longer triggers a reload when opening `/model`. A clear regression for power users who hot‑edit provider configs.

5. **[#6994 – Llama provider hardcoded maxTokens](https://github.com/earendil-works/pi/issues/6994)** (3 comments, CLOSED)  
   The llama.cpp provider capped output at 16,384 tokens unconditionally. Fix PR #7034 now merged.

6. **[#6948 – Race condition: default model not applied at startup](https://github.com/earendil-works/pi/issues/6948)** (3 comments, OPEN)  
   When `settings.json` specifies a default provider/model for llama.cpp, the session sometimes starts with the wrong model due to an async race. Still under investigation.

7. **[#6872 – `/copy` falsely reports success when `wl-copy` fails](https://github.com/earendil-works/pi/issues/6872)** (3 comments, OPEN)  
   Running Pi inside a sandbox (bwrap) causes `wl-copy` to fail, but the exit code is never checked, so Pi claims clipboard success and skips fallbacks (xclip, OSC 52). Duplicate of PR #7012 which provides a fix.

8. **[#7002 – Anthropic tool‑call ID collision](https://github.com/earendil-works/pi/issues/7002)** (3 comments, CLOSED)  
   Normalizing long foreign tool‑call IDs for Anthropic could create collisions, breaking cross‑provider sessions. Noted for future auditing.

9. **[#6970 – GitHub Copilot token invalidation](https://github.com/earendil-works/pi/issues/6970)** (2 comments, OPEN, 👍1)  
   Pi uses the “GitHub Copilot Plugin” OAuth flow instead of the device‑code flow, causing tokens to be invalidated when used alongside other Copilot clients (e.g., neovim). A known upstream debate.

10. **[#6968 – Skills scope collapse after extension install](https://github.com/earendil-works/pi/issues/6968)** (2 comments, OPEN)  
    Once an extension registers a `resource_discover` handler, all resolved package skills lose their correct scope metadata (source tag collapses to `[t]`). Breaks autocomplete context for skills.

## Key PR Progress (10)

1. **[#7042 – feat(coding-agent): add get_sessions RPC command](https://github.com/earendil-works/pi/pull/7042)** (MERGED)  
   Exposes session discovery over RPC, allowing clients to list sessions by directory or globally before using `switch_session`. Useful for IDE integrations.

2. **[#7036 – fix(coding-agent): reload model config in picker](https://github.com/earendil-works/pi/pull/7036)** (MERGED)  
   Restores hot‑reload of `models.json` when opening `/model`, directly addressing #6999.

3. **[#7034 – fix(coding-agent): use llama context for output limit](https://github.com/earendil-works/pi/pull/7034)** (MERGED)  
   Derives the max output token limit from each loaded model’s context window, removing the previous 16,384 cap. Closes #6994.

4. **[#7031 – fix(coding-agent): keep model registry tests offline](https://github.com/earendil-works/pi/pull/7031)** (OPEN)  
   CI was failing due to network timeouts when fetching the remote model catalogue. This PR makes the test suite fully offline.

5. **[#7023 – fix: target intended users in lgtm approvals](https://github.com/earendil-works/pi/pull/7023)** (MERGED)  
   The `lgtm` tool was confusing authors and PR participants. Now it properly restricts approval targets to the intended users.

6. **[#7032 – fix(coding-agent): expose unavailable scoped models](https://github.com/earendil-works/pi/pull/7032)** (OPEN)  
   Adds structured diagnostics for configured models that are no longer available, and allows users to clean them up via `/scoped-models`.

7. **[#7017 – feat(tui): experimental limited repainting](https://github.com/earendil-works/pi/pull/7017)** (MERGED)  
   A new setting to avoid repainting the entire transcript for very long sessions – aimed at improving performance during streaming.

8. **[#7028 – fix(coding-agent): keep /resume unfiltered after a resume](https://github.com/earendil-works/pi/pull/7028)** (MERGED)  
   Fixes a nested self‑reference bug: running `/resume` inside a resumed session previously collapsed the picker to a single self‑result.

9. **[#7018 – feat(types): add hiddenThinkingLabel field to AssistantMessage](https://github.com/earendil-works/pi/pull/7018)** (MERGED)  
   Enables per‑message thinking labels (e.g., “Thought for 3s”) so users can distinguish thinking vs. stuck states.

10. **[#6341 – feat(ai): support constrained sampling](https://github.com/earendil-works/pi/pull/6341)** (CLOSED – merged)  
    Adds an opt‑in `constrainedSampling` config for tools, allowing providers to enforce JSON‑schema or grammar‑based constraints on tool arguments. This is the implementation behind the Strict Tools/Grammar request (#6306).

## Feature Request Trends
- **Strict/Constrained Tool Grammar** – Now technically delivered via #6341, but further provider‑side refinements are expected.
- **New Provider Integrations** – Strong interest in SiliconFlow (#4742, #7013), improved Qwen reasoning efforts (#6951), and Anthropic server‑side fallback (#6886).
- **Session & Workflow Isolation** – Requests for per‑branch workflow state (#7039), per‑provider scoped model refresh (#7040), and argument‑hint frontmatter for skills (#5799).

## Developer Pain Points
- **Clipboard Reliability** – Multiple reports (##6872, #7012) of `/copy` reporting success even when `wl-copy` fails in sandboxed environments. Fix #7009 landed today.
- **Model Config Hot‑Reload** – The accidental removal of mid‑session `models.json` reload (#6999) was a clear regression; fixed in #7036.
- **Startup Race Conditions** – Default model/provider not consistently applied (#6948) remains open.
- **Hardcoded Limits** – The llama.cpp 16k token cap (#6994) was a surprise to power users; now resolved.
- **API Error Handling** – Errors from OpenAI‑compatible endpoints sometimes silently discarding bodies (#6749).
- **Internationalization & Display** – CJK text causing cursor misalignment (#7021) and home‑path corruption for sibling directories (#7006) are lingering UX maladies.
- **Extension System Fragility** – Skills scope collapse (#6968) and package manifest crash‑loops (#7033) highlight brittle parts of the extension loader.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

Here is the **Qwen Code Community Digest** for 2026-07-24, based on the provided GitHub data.

---

## Qwen Code Community Digest — 2026-07-24

### 1. Today's Highlights
The community is buzzing over a flurry of CI stability issues and npm 12 compatibility fixes, with two "Main CI failed" reports and three separate "registry error" bugs closed today. On the feature side, several high-quality proposals for enterprise external-memory integration and MCP provider profiles are gaining traction. The development team is also making progress on performance, addressing cold-start latency in ACP child processes through compile-cache propagation and lazy-loading audits.

### 2. Releases
- **v0.20.1-nightly.20260724.7d17c44a3**: This nightly release includes a fix for telemetry daemon metrics init ordering and a general performance improvement (`perf`).
  - [Release Link](https://github.com/QwenLM/qwen-code/releases/tag/v0.20.1-nightly.20260724.7d17c44a3)

### 3. Hot Issues (Top 10)
1.  **#7147 — MCP server timeout on tool/resource listing** ([Issue](https://github.com/QwenLM/qwen-code/issues/7147))
    - *Why it matters:* Authentication works, but the server never responds. A blocker for Fastmail and other MCP integrations. **Status:** CLOSED.
2.  **#7599 — Workspace artifacts created via `record_artifact` have no `managedId`** ([Issue](https://github.com/QwenLM/qwen-code/issues/7599))
    - *Impact:* Breaking the `sse.artifact_changed` event contract for internally stored artifacts. **Status:** CLOSED.
3.  **#7559 — Main CI failed: E2E Tests** ([Issue](https://github.com/QwenLM/qwen-code/issues/7559))
    - *Impact:* A main-branch CI pipeline failed, labeled for quick triage. Represents a recurring stability concern. **Status:** CLOSED.
4.  **#7543 — `getNpmCliPath` returns mise bash wrapper instead of `npm-cli.js`** ([Issue](https://github.com/QwenLM/qwen-code/issues/7543))
    - *Pain point:* The update check and `/update` command fail silently when using `mise` as a runtime manager. **Status:** CLOSED.
5.  **#7520 — npm 12 compatibility: update check fails** ([Issue](https://github.com/QwenLM/qwen-code/issues/7520))
    - *Broad impact:* Affects users on Node.js 26 with npm 12; returns an array instead of an object, breaking `fetchGlobalNpmUpdateInfo()`. **Status:** CLOSED.
6.  **#7485 — TUI: Large blank area after `qwen resume`** ([Issue](https://github.com/QwenLM/qwen-code/issues/7485))
    - *UX issue:* A frustrating visual glitch where the terminal renders a blank gap between the last message and the input prompt. **Status:** OPEN, labeled `welcome-pr`.
7.  **#7449 — Proposal: Enterprise external-memory integration profile** ([Issue](https://github.com/QwenLM/qwen-code/issues/7449))
    - *Feature ambition:* A provider-neutral approach to hook into enterprise memory systems (e.g., vector stores). High community interest with 5 comments. **Status:** OPEN.
8.  **#7264 — Cold-start follow-ups: remaining lazy-loading candidates** ([Issue](https://github.com/QwenLM/qwen-code/issues/7264))
    - *Performance deep-dive:* The ACP child process has a 17.24 MiB static import closure. This issue tracks reducing that overhead. **Status:** OPEN.
9.  **#5736 — More frequent full prompt reprocessing in recent update** ([Issue](https://github.com/QwenLM/qwen-code/issues/5736))
    - *User frustration:* Context caching seems broken for some local LLMs, forcing expensive re-processing on every turn. **Status:** CLOSED.
10. **#7616 — Do we really need this many E2E tests?** ([Issue](https://github.com/QwenLM/qwen-code/issues/7616))
    - *Developer reflection:* A critical discussion about the value and flakiness of E2E tests that rely on non-deterministic model outputs. **Status:** OPEN.

### 4. Key PR Progress (Top 10)
1.  **#7642 — CI(autofix): Add cross-package contract verification** ([PR](https://github.com/QwenLM/qwen-code/pull/7642))
    - *Infrastructure:* Adds a trusted verification gate to the autofix process, checking i18n and tool-name drift before merging.
2.  **#7641 — Feat(channels): Run loops in daemon workers** ([PR](https://github.com/QwenLM/qwen-code/pull/7641))
    - *Architecture:* Daemon-managed channels now support loop scheduling and persist them across worker restarts.
3.  **#7632 — Feat(channels): GitHub polling adapter with notification-as-wakeup architecture** ([PR](https://github.com/QwenLM/qwen-code/pull/7632))
    - *Integration:* A new GitHub channel that polls notifications and responds to @mentions on Issues/PRs, using a modern wake-up pattern.
4.  **#7594 — Perf(cli): Propagate compile cache to ACP children** ([PR](https://github.com/QwenLM/qwen-code/pull/7594))
    - *Performance:* Shares Node's module compile cache with spawned ACP child processes, accelerating cold starts (follow-up to #7264).
5.  **#7639 — Feat(core): Add bounded Goal evidence verification** ([PR](https://github.com/QwenLM/qwen-code/pull/7639))
    - *Core:* A new verification layer for Goal v3 that classifies transcript records by provenance and lineage.
6.  **#7471 — Feat(web-shell): Add git mode selector for new session creation** ([PR](https://github.com/QwenLM/qwen-code/pull/7471))
    - *UX:* Allows users to choose between "Current branch", "New branch", and "Detached HEAD" when starting a Web Shell session.
7.  **#7497 — Feat(cli): Support native video input in `/learn`** ([PR](https://github.com/QwenLM/qwen-code/pull/7497))
    - *Feature:* Enables `/learn` to process local video files (MP4, WebM, MOV) and HTTP video URLs, gated by the model's video modality.
8.  **#7542 — Feat(cli): Add version upgrade notices** ([PR](https://github.com/QwenLM/qwen-code/pull/7542))
    - *UX:* A "What's New" notice at startup that highlights curated release changes, shown only once per version.
9.  **#7633 — Fix(cli): Align all TUI icon columns to a uniform 2-col width** ([PR](https://github.com/QwenLM/qwen-code/pull/7633))
    - *Polish:* Fixes visual misalignment of tool status icons (`✓`, `✗`) relative to assistant message prefixes (`◆`) in the TUI.
10. **#7539 — Fix(cli): Clean orphaned managed npm update artifacts** ([PR](https://github.com/QwenLM/qwen-code/pull/7539))
    - *Reliability:* Adds a cleanup pass before npm update to remove stale staging directories left by terminated update workers.

### 5. Feature Request Trends
- **Enterprise & External Memory Integration:** The community is pushing hard for official mechanisms to connect Qwen Code to external knowledge stores. Issue #7449 proposes an "enterprise external-memory integration profile," while #7585 proposes a "Direct External Context Provider Profile." This is the dominant feature theme.
- **Advanced CLI/Shell Integration:** Users want Qwen Code to respect the host terminal more deeply. Requests include using the VS Code integrated terminal directly (#7578) and restoring cancelled prompts to the input box for editing (#7138).
- **Video & Rich Media Support:** The `/learn` command is being extended beyond text to support native video input (#7497), signaling demand for multimodal agent capabilities.

### 6. Developer Pain Points
- **Update & Registry Errors:** The most frequent complaint this cycle is the broken update check. Three separate issues (#7520, #7543, #7515) were closed today, all reporting "registry error" failures. The root causes range from npm 12 compatibility (array vs. object response) to path resolution issues with runtime managers like `mise`.
- **CI/CD Flakiness:** There is growing frustration with the E2E test suite. Two "Main CI failed" issues (#7559, #7605) were filed in the last 24 hours, and a dedicated discussion (#7616) questions the cost of these tests when they often fail for non-deterministic reasons.
- **TUI/CLI Rendering Issues:** Persistent visual bugs remain, including blank areas after resume (#7485), flickering in xterm/tmux (#6137), status line percentage not updating after compress (#6806), and icon misalignment (#7633). These degrade the core user experience for TUI users.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest – 2026-07-24

**Data source:** [github.com/Hmbown/CodeWhale](https://github.com/Hmbown/CodeWhale)  
*Note: The project formerly known as DeepSeek TUI has been renamed to **CodeWhale**; the TUI component continues under this repository.*

## Today’s Highlights

The community is seeing a surge in **reliability and security-focused bug reports** as v0.9.1 approaches its release gate. A **v0.9.1 security gate issue** (#4713) has been opened by maintainer **Hmbown** to perform a full dependency scan and disposition of 17 Dependabot alerts. Meanwhile, over a dozen new issues filed in the last 24 hours expose critical flaws in concurrent file writes, SQLite configuration, MCP tool execution, and policy enforcement. The maintainers and community are actively triaging these **“stop-ship”** items, with several quick-fix PRs already in review.

## Releases

No new releases in the last 24 hours. The last tagged version is **v0.9.1** (candidate `0.9.1 (0dfe9170a10e)`), which is currently undergoing a security gate review (#4713).

---

## Hot Issues (10 Noteworthy)

1. **[#4713 – v0.9.1 security gate: deep scan and dependency alert disposition](https://github.com/Hmbown/CodeWhale/issues/4713)**  
   *Open | Author: Hmbown* – Blocks the v0.9.1 release. 17 open Dependabot alerts (7 high, 10 moderate) in npm dependencies (axios, etc.). Community comments request clear disposition for each alert.

2. **[#4716 – TUI exits immediately on launch (“[Process completed]”)](https://github.com/Hmbown/CodeWhale/issues/4716)**  
   *Open, tagged `stop-ship`* – On macOS Terminal.app, `codew` returns instantly. Affects the v0.9.1 candidate. Known-good facts listed but root cause elusive. Critical for users.

3. **[#4741 – JsonlHookSink has no write synchronization – concurrent tool calls corrupt JSONL log](https://github.com/Hmbown/CodeWhale/issues/4741)**  
   *Closed (fixed quickly)* – Each `emit()` call opens a fresh handle and writes unsynchronized. Community flagged this as a data-loss risk; maintainer closed after a patch was merged.

4. **[#4727 – codewhale mcp-server never spawns configured MCP servers – returns stub responses](https://github.com/Hmbown/CodeWhale/issues/4727)**  
   *Open* – The documented MCP server subcommand loads definitions but never actually spawns them; always returns fabricated stubs. A serious reliability gap for users relying on MCP.

5. **[#4733 – Malformed project config.toml silently treated as “no project config”](https://github.com/Hmbown/CodeWhale/issues/4733)**  
   *Open, tagged security/reliability* – Parse errors in `.codewhale/config.toml` are swallowed, returning `None`. Users may unknowingly run with default config, causing unexpected behavior.

6. **[#4738 – In-flight stdio thread/turn cannot be cancelled, not even by shutdown](https://github.com/Hmbown/CodeWhale/issues/4738)**  
   *Open* – The `run_stdio` JSON-RPC loop is strictly sequential and unresponsive to cancellation. A stuck request blocks the entire server until completion.

7. **[#4734 – SQLite connection has no busy_timeout/WAL – concurrent processes fail hard](https://github.com/Hmbown/CodeWhale/issues/4734)**  
   *Open* – `StateStore::open` only sets `foreign_keys = ON`. Without `busy_timeout` or WAL mode, concurrent CodeWhale instances crash on database locks.

8. **[#4730 – Workflow elevation risk assessor’s write-tool allowlist is missing "Edit"](https://github.com/Hmbown/CodeWhale/issues/4730)**  
   *Open, tagged security* – Two independent allowlists have drifted; `is_write_tool` lacks `"Edit"` but `"edit_file"` is present. Could allow unintended denied actions.

9. **[#4729 – MCP sanitized qualified tool names can collide across differently-named servers](https://github.com/Hmbown/CodeWhale/issues/4729)**  
   *Open* – `sanitize_component` lowercases and collapses all non-alphanumeric characters to `_`, causing servers like `my_server` and `my-server` to produce identical tool names. Security hazard.

10. **[#4740 – Denied-prefix rules bypassed by inserting a flag before the subcommand](https://github.com/Hmbown/CodeWhale/issues/4740)**  
    *Open, tagged security/reliability* – Deny-list check uses plain string match; `denied_prefixes = ["git push"]` is bypassed by `git --verbose push` because flags aren’t stripped.

---

## Key PR Progress (All 6 Open/Updated in 24h)

1. **[#4743 – fix: stop applying the 45s SSE open timeout to non-streaming chat requests](https://github.com/Hmbown/CodeWhale/pull/4743)**  
   *Open by vibecoding-skills* – `codewhale exec` fails with a misleading 45s timeout error on long non-streaming requests. Patch replaces the global timeout with one that respects streaming/non-streaming mode.

2. **[#4742 – fix(workflow): preserve hashes in fleet strings](https://github.com/Hmbown/CodeWhale/pull/4742)**  
   *Open by nightt5879* – Direct fix for issue #4732: naive `split('#')` in the minimal TOML parser now respects quoting. Tests cover commented hashes, role values, and literal strings.

3. **[#4724 – fix(tui): archive completed background shell output](https://github.com/Hmbown/CodeWhale/pull/4724)**  
   *Open by qinlinwang* – Freezes live output into the originating ExecCell when a background shell job reaches a terminal state, preventing output loss.

4. **[#4346 – fix: sanitize tool input_schema for Anthropic adapter](https://github.com/Hmbown/CodeWhale/pull/4346)**  
   *Closed (merged)* – Prevents HTTP 400 errors from Anthropic when a tool’s `input_schema` contains `oneOf`/`anyOf`/`allOf`. Community tested and confirmed fix.

5. **[#4722 – fix(tui): show complete edit previews in details](https://github.com/Hmbown/CodeWhale/pull/4722)**  
   *Open by nightt5879* – Keeps the compact `edit_file` approval card bounded and renders full `-/+` diff preview lazily in the Alt+V details pager.

6. **[#4610 – [v0.9.2] feat(tui): add configurable session token header](https://github.com/Hmbown/CodeWhale/pull/4610)**  
   *Open by XhesicaFrost* – Adds an opt-in `header_items = ["tokens"]` config to show cumulative token counts in the TUI header. Ref #4520.

---

## Feature Request Trends

- **Environment-level tool sandboxing** (exemplified by closed issue #4042) – users want per-context (session, sub-agent, Fleet) tool restrictions enforced at runtime, not just documented.
- **Session token visibility** – demand for a configurable token counter in the TUI header (PR #4610) shows growing interest in consumption tracking.
- **Better provider/model auto-switching clarity** – issue #4720 calls for deliberate, user-visible explanations when the runtime switches providers or models mid-session.
- **MCP server reliability** – requests for real spawning (vs. stubs) and collision-free tool name qualification are high.
- **Background job output persistence** – the archived shell output PR (#4724) responds to users losing background job results after terminal state changes.

---

## Developer Pain Points

- **Silent failures** – Several issues highlight that errors (malformed config, parse failures, stale lock files) are swallowed or produce misleading messages, leading to hard-to-diagnose behavior.
- **Concurrency and synchronization** – Multiple bugs in hooks, session-index compaction, SQLite, and stdio loops reveal a systemic lack of thread safety and coordination. This is the most recurring frustration.
- **Security policy bypasses** – The execpolicy engine has at least four separate bypass vectors (denied-prefix flags, path case sensitivity, MCP name collisions, missing write-tool entries). Developers are alarmed at how easily restrictions can be sidestepped.
- **Windows keyboard layout incompatibility** – Issue #4723 (AltGr+Q on Brazilian ABNT2) is a classic platform-specific pain point that affects non-US users.
- **Lack of cancellation / graceful shutdown** – The stdio loop and MCP tool calls that cannot be cancelled or restarted are a significant usability and reliability concern for long-running agents.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/boom7sss/agents-radar).*