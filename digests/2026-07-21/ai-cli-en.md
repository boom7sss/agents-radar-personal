# AI CLI Tools Community Digest 2026-07-21

> Generated: 2026-07-21 03:22 UTC | Tools covered: 9

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

# AI CLI Tools Cross-Tool Comparison Report — 2026-07-21

## Ecosystem Overview

The AI CLI developer tools landscape is experiencing convergent maturation: all seven major tools now support sub-agent architectures, MCP/plugin ecosystems, and sandboxed execution, but each is grappling with the reliability challenges these capabilities introduce. Community attention has shifted from basic feature requests to systemic concerns—agent autonomy failures, context window management, permission model coherence, and cross-platform stability—indicating a market that has moved past early adoption into production hardening. A notable divergence is emerging between tools that prioritize ecosystem extensibility (Claude Code, OpenCode, Pi) versus those focusing on foundational reliability and sandboxing (Codex, Gemini CLI, DeepSeek TUI). The most active communities are coalescing around three shared pain points: sub-agent explosion/recursion, MCP tool integration fragility, and Windows platform parity.

## Activity Comparison

| Tool | Active Issues (24h) | PRs Updated (24h) | Releases (24h) | Notable Signal |
|---|---|---|---|---|
| **Claude Code** | 50 active, 10 hot | 9 | v2.1.216 | Highest community engagement (353 comments on #826) |
| **OpenAI Codex** | 10 hot issues | 10 | rust-v0.145.0-alpha.25/.27/.28 | 3 alpha releases in 24h; rapid iteration |
| **Gemini CLI** | 10 hot issues | 10+ (including SSR pipeline) | v0.52.0-nightly | Large SSR code generation pipeline PR series |
| **Copilot CLI** | 10 noteworthy | 0 | v1.0.72, v1.0.73 | 2 point releases; PR pipeline silent |
| **Kimi Code** | 5 hot issues | 3 critical fixes | None | Low activity relative to others |
| **OpenCode** | 10 hot issues | 10 | v1.18.4 | Healthy release + PR cadence |
| **Pi (p-mono)** | 10 hot issues | 10 | None | Burst of community-driven fixes |
| **Qwen Code** | 10 hot issues | 10 | v0.20.0-nightly | Autofix pipeline investment |
| **DeepSeek TUI** | 10 noteworthy | 10 | None | 17 issues closed; pre-v0.9.1 push |

## Shared Feature Directions

| Theme | Tools | Specific Needs |
|---|---|---|
| **Sub-agent reasoning granularity** | Claude Code (#43083), Qwen Code (#7315), Gemini CLI (#22323) | Configurable thinking effort per sub-agent; depth/count limits to prevent recursion |
| **Permission mode consolidation** | Claude Code (#39523), DeepSeek TUI (#4412, #3934), Copilot CLI | Collapse Ask/Auto-Review/Full Access into single contract; fix broken bypass modes |
| **MCP stability & discovery** | Claude Code (#78172, #75567), OpenCode (#28579), Qwen Code (#7147), Codex (#12491) | Tool listing timeouts, orphaned processes, non-persistent approval, invisible prompts |
| **Context compaction hooks** | OpenCode (#28611), Copilot CLI (#1688), Qwen Code (#7040) | Post-compaction prompt injection; configurable thresholds |
| **Session state persistence** | Kimi Code (#2522), OpenCode (#16116), Pi (#6652), Qwen Code (#7301) | Global session registry; migration across versions; crash log path respect |
| **Windows platform parity** | Claude Code (#61021, #73365), Codex (#20214, #34025), Kimi Code (#2522), DeepSeek TUI (#4489) | Terminal text selection, process leaks, ARM64 support, setup wizard persistence |
| **Built-in web search** | Qwen Code (PR #7215), Pi (authored fixes) | Opt-in, no MCP required, server-side search API |
| **TTS/accessibility** | Claude Code (PR #79620), Gemini CLI (emerging) | Hands-free workflows; Piper/say/PowerShell hooks |

## Differentiation Analysis

**Claude Code** leads in community scale and feature breadth but is constrained by unresolved meta-bugs (9-month `bypassPermissions` failure, 353-comment scrolling issue). Its sandbox granularity (`sandbox.filesystem.disabled`) and skill-chaining capabilities are the most mature, yet reliability of core permission modes remains its biggest risk.

**OpenAI Codex** is iterating fastest (3 alpha releases/day) with aggressive MCP and sandbox improvements, but Windows performance degradation (#20214, #34025) and the 7-month conversation-context bug (#8648) signal architectural debt. Its Rust CLI rewrite indicates a long-term platform bet.

**Gemini CLI** is methodically fixing foundational issues (infinite loops, shell hangs, MCP discovery timeouts) while investing in a large SSR code generation pipeline. Its community focus on model behavior evaluation (#24353) and AST-aware tools (#22745) suggests a research-driven approach.

**Copilot CLI** is reactive—two point releases with specific fixes, but zero PR activity signals a smaller internal team. Its pain points (context-limit shoot-outs, BYOK streaming errors, TUI PTY ignoring) reflect a tool being stretched beyond its original design scope.

**Kimi Code** has the smallest community footprint but is actively patching critical bugs (StrReplaceFile chained edits, frozen system prompts). The 48+ hour `429 engine_overloaded` outage (#2209) is a serious reliability concern for remote deployments.

**OpenCode** shows strong cross-platform health with v1.18.4 and 10 active PRs. Its per-tool timeout PR (#36869) addresses a universal pain point no other tool has tackled systematically. The community's focus on plugin skill discovery and persistent state centralization signals growing maturity.

**Pi (p-mono)** has a diverse contributor base (mitsuhiko authored a PR) and is rapidly fixing auth.json env handling, cache persistence, and model-switching bugs. Its extension API expansion (custom UI chrome, lifecycle triggers) positions it as a platform play.

**Qwen Code** is investing most heavily in automation infrastructure: autofix PRs dominate its pipeline, with managed PR dashboards, review-thread auto-resolution, and verification-gate crash handling. This suggests an enterprise automation focus.

**DeepSeek TUI** is in a pre-release crunch (17 issues closed, role/permission model redesign). Its planned canonical "Planner/Worker/Reviewer/Verifier" role system (#3934) is the most ambitious architectural change among all tools this week.

## Community Momentum & Maturity

**Highest community engagement:** Claude Code (353 comments on #826, 689 👍) and Codex (#8648 with 82 comments, #28058 with 99 👍) have the most vocal user bases, but both suffer from high-profile bugs unresolved for 7-9 months, eroding trust.

**Fastest iteration:** Codex (3 alpha releases/day) and Qwen Code (nightly releases + autofix pipeline) show the highest release velocity. Codex's velocity, however, correlates with unresolved regressions.

**Most stable toolchain:** OpenCode and Pi demonstrate healthy balance of releases, fixes, and community-driven PRs without the volume of unresolved meta-bugs plaguing Claude Code and Codex.

**Pre-release momentum:** DeepSeek TUI is the only tool in a clear pre-release phase (v0.9.1), closing issues rapidly but with architectural changes that may introduce new instability.

**Ecosystem maturity ranking (subjective):**
1. Claude Code (most features, largest community, but reliability gaps)
2. OpenCode (balanced, cross-platform, plugin-first)
3. Pi (extensibility-focused, strong contributor diversity)
4. Gemini CLI (methodical, research-driven)
5. Codex (fast-moving but Windows debt)
6. Copilot CLI (stable but small surface area)
7. Qwen Code (autofix-focused, limited community breadth)
8. DeepSeek TUI (pre-release, promising architecture)
9. Kimi Code (smallest, reliability concerns on remote)

## Trend Signals

1. **The "agent autonomy certification" problem is industry-wide.** Every tool reports sub-agents reporting `success` when actually hitting limits (Gemini CLI #22323), infinite loops (OpenCode #19267, Copilot CLI #3747), or failing to use skills autonomously (Gemini CLI #21968). The industry lacks a standard for verifying autonomous agent completion. This is the #1 blocker for production deployment of multi-agent workflows.

2. **Context window management is the new memory management.** Five tools have open issues about compaction hooks, configurable threshold, or token budget control. As models support larger contexts, the bottleneck is shifting from model capacity to tool-level context hygiene—what to keep, what to summarize, and when to compact. Expect this to become a core differentiator.

3. **MCP/plugin interoperability is fragmenting.** While MCP is becoming the standard, each tool implements it differently—leading to invisible prompts (OpenCode #28579), 10-minute discovery timeouts (Gemini CLI #28410), orphaned processes (Codex #12491, Claude Code #78551), and authentication gaps (Qwen Code #7147). The ecosystem needs a conformance test suite or shared runtime.

4. **Windows is the common pain point.** Every tool with a Windows user base reports freezing (#20214, #61021), process leaks (#4489, #12491), path corruption (#28094), or setup persistence issues (#4604). No tool has achieved Windows parity; this is a significant market opportunity.

5. **Built-in tools vs. MCP plugins: a strategic divide is forming.** Qwen Code is investing in built-in web search (PR #7215) and autofix tooling, while Claude Code and Pi push toward third-party MCP extensibility. The winning approach may be a hybrid—core tools built-in, custom capabilities via plugins—but the market hasn't settled.

6. **Observability over output is an emerging requirement.** Issues about encrypted audit trails (Codex #28058), sub-agent trajectory sharing (Gemini CLI #22598), and tool-output telemetry (Qwen Code #7306) all point to a need for transparent, inspectable agent behavior—especially for enterprise compliance and debugging trust.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
**Data Snapshot:** 2026-07-21 | **Repository:** github.com/anthropics/skills

---

## 1. Top Skills Ranking

The five most-discussed Skill submissions, ranked by community engagement and cross-referencing:

### #1 PR #1298 — Fix `run_eval.py` Recall Calculation (open)
**Functionality:** Repairs the core evaluation infrastructure that the skill-creation loop depends on. Fixes Windows stream reading, trigger detection, parallel worker execution, and ensures the eval artifact is installed as a real skill. Without this fix, `run_eval.py` reports 0% recall for every description, making the optimization loop optimize against noise.
**Discussion Highlights:** The most critical infrastructure PR in the queue. Directly addresses Issue #556 (10+ independent reproductions) and Issue #1169. Multiple contributors have submitted overlapping Windows fixes (PRs #1099, #1050, #1323), indicating this is the community's primary pain point.
**Status:** Open | [View PR](https://github.com/anthropics/skills/pull/1298)

### #2 PR #514 — Add document-typography Skill (open)
**Functionality:** Prevents orphan word wrap, widow paragraphs, and numbering misalignment in AI-generated documents. Catches common typographic flaws that users rarely explicitly request but that degrade document quality.
**Discussion Highlights:** Well-received as addressing a universal pain point. Commenters noted the skill fills a gap between "ask Claude to write" and "get publication-ready output." Discussion centered on edge cases for different document formats (PDF vs DOCX vs HTML).
**Status:** Open | [View PR](https://github.com/anthropics/skills/pull/514)

### #3 PR #486 — Add ODT Skill (open)
**Functionality:** Enables creation, filling, reading, and conversion of OpenDocument Format files (.odt, .ods). Covers LibreOffice document workflows, template filling, and ODT-to-HTML conversion. Triggered by mentions of "ODT," "ODS," "ODF," or "OpenDocument."
**Discussion Highlights:** Strong demand for LibreOffice/ODF support in enterprise and open-source environments. Discussion revolved around cross-format compatibility and whether ODT should be merged with the existing DOCX skill.
**Status:** Open | [View PR](https://github.com/anthropics/skills/pull/486)

### #4 PR #210 — Improve frontend-design Skill (open)
**Functionality:** Comprehensive rewrite of the frontend-design skill to improve clarity and actionability. Ensures every instruction is executable within a single conversation, with specific enough guidance to steer Claude's behavior without being overly prescriptive.
**Discussion Highlights:** The skill quality improvement angle drew significant feedback. Commenters debated the trade-off between actionable specificity and flexibility for different tech stacks. Representative of the community's broader interest in skill-quality standards.
**Status:** Open | [View PR](https://github.com/anthropics/skills/pull/210)

### #5 PR #83 — Add skill-quality-analyzer and skill-security-analyzer (open)
**Functionality:** Two meta-skills that evaluate other skills across five dimensions (structure, documentation, security, best practices). The security analyzer specifically checks for common vulnerabilities in skill implementations.
**Discussion Highlights:** These meta-skills directly address security concerns raised in Issue #492 (namespace trust abuse) and quality concerns from Issue #202. The self-referential nature of "skills about skills" generated thoughtful discussion about meta-evaluation.
**Status:** Open | [View PR](https://github.com/anthropics/skills/pull/83)

### #6 PR #1367 — Add self-audit Skill (v1.3.0) (open)
**Functionality:** A universal reasoning quality gate that audits AI output before delivery. Performs mechanical file verification first, then a four-dimension reasoning audit in damage-severity priority order. Designed to work with any project, tech stack, or model.
**Discussion Highlights:** The most ambitious quality-control skill proposal. Commenters noted the "Step 0 mechanical verification" approach addresses hallucinations about file creation. Related proposal Issue #1385 extends the pipeline concept to three gates.
**Status:** Open | [View PR](https://github.com/anthropics/skills/pull/1367)

### #7 PR #525 — Add Pyxel Skill for Retro Game Development (open)
**Functionality:** Integrates with the pyxel-mcp server for the Pyxel retro game engine. Covers the full workflow: write code, run and capture output, inspect, and iterate. Targeted at retro/pixel-art/8-bit game creation with Python.
**Discussion Highlights:** The only creative/entertainment skill in the top discussion tier. Illustrates the community's interest in MCP-server integration as a skill pattern, beyond pure text-based prompting.
**Status:** Open | [View PR](https://github.com/anthropics/skills/pull/525)

---

## 2. Community Demand Trends

From the most active Issues, four dominant demand directions emerge:

### 🔒 Security & Trust (Issue #492 — 43 comments)
The #1 community concern is the **trust boundary vulnerability** created by distributing community skills under the `anthropic/` namespace. Commenters extensively debated namespace governance, signing mechanisms, and permission scoping. This is the single most-engaged issue in the repository.

### 🛠️ Skill-Creator Infrastructure (Issues #556, #202, #1169 — 23 combined comments)
The community needs a **reliable skill development pipeline** on all platforms. The 0% recall bug (Issue #556) and Windows compatibility failures (Issue #1061) are blocking active skill developers. Multiple contributors have independently reproduced and submitted fixes, indicating this is a systemic barrier.

### 🏢 Enterprise Sharing (Issue #228 — 14 comments)
Request for **org-wide skill distribution** without manual file transfers. Users want shared skill libraries, direct sharing links, and team-based permission management. The 7 upvotes (highest raw count) signal strong enterprise demand.

### 🧠 Agent Governance & Safety (Issues #412, #1175, #1385 — 13 combined comments)
Growing interest in **structured safety patterns for AI agents**: policy enforcement, threat detection, trust scoring, audit trails, and multi-gate quality pipelines. The self-audit skill (PR #1367) and the reasoning gate proposal (Issue #1385) are concrete manifestations of this trend.

---

## 3. High-Potential Pending Skills

These open PRs have active discussion and address clear community needs — likely to merge soon:

| PR | Skill | Why It's Close |
|---|---|---|
| [#538](https://github.com/anthropics/skills/pull/538) | PDF case-sensitivity fix | Straightforward bugfix, 8 file-reference corrections in SKILL.md |
| [#541](https://github.com/anthropics/skills/pull/541) | DOCX tracked-change collision fix | Prevents document corruption — root cause clearly identified |
| [#539](https://github.com/anthropics/skills/pull/539) | YAML unquoted description validator | Prevents silent parsing failures — clear, well-scoped fix |
| [#1099](https://github.com/anthropics/skills/pull/1099) | Windows subprocess crash fix | Directly unblocks Windows skill development |
| [#1050](https://github.com/anthropics/skills/pull/1050) | Windows subprocess + encoding fix | Complementary to #1099, two one-line fixes |
| [#1323](https://github.com/anthropics/skills/pull/1323) | Trigger detection fix | Third independent fix for the same root cause as #1298 |
| [#723](https://github.com/anthropics/skills/pull/723) | testing-patterns skill | Comprehensive testing coverage, well-structured proposal |
| [#509](https://github.com/anthropics/skills/pull/509) | CONTRIBUTING.md | Community health gap — scores 25% on GitHub metrics without it |
| [#1302](https://github.com/anthropics/skills/pull/1302) | color-expert skill | Self-contained, domain-specific expertise with broad applicability |

---

## 4. Skills Ecosystem Insight

The Claude Code Skills community's most concentrated demand is for **reliable, cross-platform skill-creation tooling** — the 0% recall bug and Windows compatibility failures are the single greatest barrier to community contribution, overshadowing even the content of individual skills, and until this infrastructure is stabilized, the ecosystem cannot scale.

---

# Claude Code Community Digest — 2026-07-21

## Today’s Highlights
Anthropic shipped **Claude Code v2.1.216** last night, adding a `sandbox.filesystem.disabled` setting for selective sandbox control and fixing a quadratic slowdown that caused multi-second stalls in long sessions. Meanwhile, the oldest active issue — console scrolling on macOS (#826) — crossed 353 comments and 689 👍, and a long‑standing meta-bug around bypass permissions (#39523) remains unresolved after 9 months. A community‑authored PR for a built‑in TTS accessibility hook (#79620) also landed, signaling growing interest in hands‑free workflows.

## Releases
**v2.1.216** (released in the last 24h)
- **Sandbox granularity:** Added `sandbox.filesystem.disabled` setting — allows skipping filesystem isolation while retaining network egress control.
- **Performance fix:** Fixed a quadratic‑cost slowdown in message normalization that caused multi‑second stalls and slow resumes in long sessions.
- *Note:* The release notes were truncated; additional changes may be present.

## Hot Issues (10 selected out of 50 active)

1. **[#826] Console scrolling to top on macOS**  
   *Platform:macOS, 353 comments, 689 👍*  
   Once the session reaches a certain length, Claude Code’s output scrolls the terminal window to the top, making continuous reading impossible. This is the most‑upvoted bug overall and has been open since April 2025.  
   https://github.com/anthropics/claude-code/issues/826

2. **[#18435] Multi‑account/profile switching in Claude Desktop**  
   *Enhancement, 149 comments, 668 👍*  
   Users want to manage multiple Claude accounts (e.g., personal + work) and switch between profiles without re‑logging. Very high demand for a feature that touches auth and IDE integration.  
   https://github.com/anthropics/claude-code/issues/18435

3. **[#73365] Advisor always “unavailable” with Fable 5 (Opus 4.8 main)**  
   *Platform:Windows, 85 comments, 159 👍*  
   The advisor tool fails to start on Windows when the model is set to Fable 5. Duplicates piling up; users see “Advisor unavailable” across all sessions.  
   https://github.com/anthropics/claude-code/issues/73365

4. **[#39523] Meta: BypassPermissions mode fundamentally broken**  
   *9‑month trail, 12+ duplicates, 32 comments*  
   The `bypassPermissions` setting does not actually bypass permissions — still prompts the user. Marked as meta; multiple duplicate issues have been auto‑closed without resolution, frustrating the community.  
   https://github.com/anthropics/claude-code/issues/39523

5. **[#43083] Configurable reasoning effort for subagents**  
   *Enhancement, 19 comments, 42 👍*  
   When dispatching subagents via the `Agent` tool, users can choose a model but cannot configure low/medium/high reasoning effort. Feature request to allow fine‑grained control over sub‑agent thinking depth.  
   https://github.com/anthropics/claude-code/issues/43083

6. **[#68110] Recursive sub‑agent explosion (exponential fan‑out)**  
   *Bug, 12 comments, 10 👍*  
   General‑purpose sub‑agents can spawn child agents, which themselves spawn further agents — creating an unbounded tree that burns tokens rapidly. No depth or count limit exists.  
   https://github.com/anthropics/claude-code/issues/68110

7. **[#61021] Cannot select text in VSCode terminal**  
   *Platform:Windows + VSCode, 12 comments, 8 👍*  
   Recent Claude Code update broke text selection in VSCode’s integrated terminal — users can no longer highlight and copy text with Ctrl+C.  
   https://github.com/anthropics/claude-code/issues/61021

8. **[#64592] Cowork VM service not starting on Windows 11**  
   *Bug, 12 comments*  
   “Failed to start Claude’s workspace — VM service not running” error persists across restarts. Workaround: manually enable Virtual Machine Platform.  
   https://github.com/anthropics/claude-code/issues/64592

9. **[#60523] Advisor regression: parentUuid tree mismatch breaks sessions post‑compaction**  
   *Bug, 6 comments*  
   The advisor tool still breaks after session compaction due to mismatched parent‑UUID trees. Root cause identified (incorrect tree walking); multiple duplicates auto‑closed with no fix.  
   https://github.com/anthropics/claude-code/issues/60523

10. **[#79023] Skill‑based code‑review invocation broken since v2.1.215**  
    *Bug, 6 comments, 10 👍*  
    Custom skills that chain into the built‑in `/code-review` skill now fail — the sub‑agent refuses the invocation, breaking automated PR workflows.  
    https://github.com/anthropics/claude-code/issues/79023

## Key PR Progress (9 PRs updated in the last 24h)

1. **[#79620] feat: Add text‑to‑speech read‑aloud hook**  
   Implements a production‑ready TTS hook for accessibility (Piper on Linux, `say` on macOS, PowerShell on Windows). Includes markdown stripping and code‑skip heuristic.  
   https://github.com/anthropics/claude-code/pull/79620

2. **[#79636] fix(hookify): add `hookify.` prefix to example rule filenames**  
   Example rule files lacked the required `hookify.` prefix, causing silent failures in the rule loader.  
   https://github.com/anthropics/claude-code/pull/79636

3. **[#79635] docs(pr-review-toolkit): point Contributing section to in-repo agents**  
   Fixes broken documentation that directed contributors to a private repository; the actual review agents live in this repository’s `plugins/pr-review-toolkit/agents/`.  
   https://github.com/anthropics/claude-code/pull/79635

4. **[#79387] fix: add error message when `edit-issue-labels.sh` called without label args**  
   The script exited silently with code 1 when no `--add-label` or `--remove-label` arguments were given. Now outputs a clear error to stderr.  
   https://github.com/anthropics/claude-code/pull/79387

5. **[#66650] fix(pr-review-toolkit): use full author name in plugin manifest**  
   Consistent author naming across bundled plugins (“Daisy Hollman” instead of just “Daisy”). Closed.  
   https://github.com/anthropics/claude-code/pull/66650

6. **[#1] Create SECURITY.md**  
   The very first PR to the repo (Feb 2025) — still open. Adds security policy documentation.  
   https://github.com/anthropics/claude-code/pull/1

7. **[#74722] feat(commit-commands): support Conventional Branch naming in `/commit-push-pr`**  
   Adds an optional `conventional` argument that creates the branch per the Conventional Branch spec, inferring type (feature, bugfix, etc.) from the diff.  
   https://github.com/anthropics/claude-code/pull/74722

8. **[#79385] fix: honor any user’s thumbs‑down, not just the issue author’s**  
   The auto‑close‑duplicates bot previously ignored thumbs‑down reactions from non‑authors, contradicting its promise. Now any user’s 👎 prevents auto‑closure.  
   https://github.com/anthropics/claude-code/pull/79385

9. **[#78532] gateway/gcp: optional internal ALB in Terraform example + PG16 fix**  
   Fixes Cloud SQL creation failure on PG16 due to API defaults; adds an optional internal Application Load Balancer to the GCP Terraform example.  
   https://github.com/anthropics/claude-code/pull/78532

## Feature Request Trends

- **Account & profile management** – Multiple requests for switching between multiple Claude accounts in the Desktop app (#18435) and elsewhere.
- **Agent reasoning granularity** – Users want to control sub‑agent thinking effort (low/medium/high) beyond model selection (#43083) and set depth/count limits to prevent runaway recursion (#68110).
- **Accessibility** – A community‑built TTS hook (#79542 → PR #79620) signals demand for built‑in read‑aloud features, especially for hands‑free coding.
- **Remote control & proxies** – The restriction on non‑Anthropic base URLs blocks localhost proxies; request for a loopback exception (#76653).
- **Conventional Commits integration** – PR #74722 proposes conventional branch naming in `commit-push-pr`, reflecting broader interest in standardized git workflows.
- **Skill/MCP composition** – Chainable skills and sub‑agents that can reliably invoke each other’s tools (e.g., code‑review from custom skills #79023, MCP tools in background agents #79621).

## Developer Pain Points

- **Core permissions broken for 9+ months** – `bypassPermissions` is completely non‑functional (#39523) and keeps generating duplicates, yet remains unfixed.
- **Advisor instability** – Advisor fails after session compaction (#60523) and is unavailable on Windows with Fable 5 (#73365). Multiple duplicates auto‑closed without resolution, eroding trust in the bug triage process.
- **Sub‑agent reliability crises** – Recursive unbounded agent spawning (#68110), nested sub‑agent messaging stalls (#77950), and background task completion never resuming sub‑agents (#78782) make multi‑agent workflows unpredictable.
- **UX regressions in the terminal** – Console scrolling (#826), broken text selection in VSCode (#61021), and silent no‑op checkboxes (#79358) degrade daily use on both macOS and Windows.
- **MCP tool ecosystem friction** – Locally configured MCP servers connect but never surface tools (#78172), MCP approval doesn’t persist (#75567), orphaned browser processes accumulate (#78551), and remote MCP sessions leak across concurrent conversations (#79241).
- **Sandbox & filesystem isolation constraints** – The new `sandbox.filesystem.disabled` setting (#79622) isn’t documented, and symlink paths don’t match permission patterns (#67072). Privacy prompts for Desktop/Documents on macOS (#61233) remain unexplained.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# Codex Community Digest — 2026-07-21

## Today's Highlights

The Codex team shipped three Rust alpha releases (v0.145.0-alpha.25 through .28) and merged over a dozen PRs targeting sandboxing, MCP stability, and proxy architecture. The community remains vocal about Windows performance degradation and a persistent multi-turn conversation bug, while the most upvoted issue of the day reflects strong demand for encrypted audit trail regression fixes.

## Releases

- **rust-v0.145.0-alpha.28**, **rust-v0.145.0-alpha.27**, **rust-v0.145.0-alpha.25** — three alpha releases of the Rust-based CLI landed within 24 hours, iterating on the 0.145.x line. No per-release changelogs were published beyond the version bump, but the high release cadence suggests active work on CI or infrastructure changes.

## Hot Issues

1. **[#8648 — Codex replies to earlier messages instead of latest one in conversations](https://github.com/openai/codex/issues/8648)**  
   82 comments, 58 👍. A long-standing conversation-context bug (filed January 2026) where the assistant loses track of the latest user message and responds to an earlier turn. Still open after seven months, indicating a deep architectural challenge in the conversation state machine.

2. **[#20214 — Codex App frequently freezes/stutters on Windows 11 Pro](https://github.com/openai/codex/issues/20214)**  
   60 comments, 68 👍. Users with ample RAM (32 GB) and modern CPUs report persistent freezes. The high upvote count makes this the most impactful Windows stability issue today. Multiple threads point to rendering / Electron-level bottlenecks.

3. **[#28058 — Regression: encrypted MultiAgentV2 messages remove readable task audit trail](https://github.com/openai/codex/issues/28058)**  
   26 comments, 99 👍. **Highest community consensus of any open issue.** The encryption added in #26210 broke observability of subagent task histories. Users cannot inspect what their agents did, which is a dealbreaker for trust and debugging.

4. **[#12491 — MCP child processes not reaped after task completion — 1300+ zombies, 37 GB memory leak](https://github.com/openai/codex/issues/12491)**  
   26 comments, 4 👍. An extreme resource leak in the GUI: unreaped MCP processes accumulate to thousands of zombie entries. The low upvote count may reflect that few users run long enough sessions to trigger this, but memory impact is severe.

5. **[#12862 — CLI: add --worktree and --tmux flags for one-command isolated sessions](https://github.com/openai/codex/issues/12862)**  
   20 comments, 97 👍. Strong community demand for a first-class isolated-session workflow. Users currently script this manually; the traction suggests a power-user cohort that values reproducibility and tmux integration.

6. **[#21753 — Full Claude Code Hook Parity (29+)](https://github.com/openai/codex/issues/21753)**  
   28 comments, 21 👍. An umbrella tracking issue calling for 29 hook lifecycle events to match Claude Code’s automation surface. Shows Codex power users are actively evaluating Codex against Anthropic’s tool and want equivalent extensibility.

7. **[#31836 — Projects Sort By "Last updated" only sorts tasks within project groups, not projects](https://github.com/openai/codex/issues/31836)**  
   24 comments, 26 👍. A UX regression in the desktop app’s project view: the sort dropdown appears to work but silently sorts only nested items, not the parent project list. Misleading for anyone managing many projects.

8. **[#28094 — Windows/WSL: Codex Desktop rewrites /home paths as C:\home, loses project associations](https://github.com/openai/codex/issues/28094)**  
   21 comments, 2 👍. Path rewriting bugs on Windows + WSL continue to frustrate users with hybrid environments. A regression introduced around June 12 update that breaks existing project-to-chat mappings.

9. **[#34025 — Windows cold launch spawns 300+ taskkill.exe/conhost.exe, freezes whole PC](https://github.com/openai/codex/issues/34025)**  
   4 comments, 0 👍. Newly filed but alarming: the unified ChatGPT/Codex app on Windows spawns hundreds of processes on cold start, causing system-wide lag that only resolves after killing the app.

10. **[#34453 — Full Access session reverts to per-action approval after restart, breaks autonomous runs](https://github.com/openai/codex/issues/34453)**  
    2 comments, 0 👍. A fresh bug filed today on macOS: the "Full Access" permission mode silently downgrades after app restart, breaking long-running autonomous agent workflows. Likely to gain traction quickly.

## Key PR Progress

1. **[#34441 — Add buffered code-mode exec yields](https://github.com/openai/codex/pull/34441)**  
   Introduces an experimental `code_mode_buffered_exec` feature that extends default `exec` yield time from 10s to 30s. Aims to reduce unnecessary yield interrupts during long-running code execution blocks.

2. **[#34423 — Support Windows sandboxing in the exec server](https://github.com/openai/codex/pull/34423)**  
   Adds a native process launcher that selects the Windows sandbox session backend. Critical for bringing sandboxed execution parity to Windows users, addressing a long-standing gap.

3. **[#34436 — Honor managed permission profiles in network proxy resolution](https://github.com/openai/codex/pull/34436)**  
   Merges permission profiles (defined in `requirements.toml`) into the network proxy resolution path. Ensures that profile-level network configuration is actually applied, not silently ignored.

4. **[#34435 — Resolve outbound proxy routes explicitly](https://github.com/openai/codex/pull/34435)**  
   Replaces implicit system-proxy fallback with explicit resolution, preventing repeated discovery and inconsistent proxy behavior. A reliability improvement for enterprise/restricted-network users.

5. **[#34449 — Make external session detection limits configurable](https://github.com/openai/codex/pull/34449)**  
   Adds `maxSessionAgeDays` and `maxSessions` to the external-agent config detection request. Gives users control over how many external sessions (e.g., from Claude Code or Copilot) Codex discovers.

6. **[#34451 — Attribute external agent imports by provider](https://github.com/openai/codex/pull/34451)**  
   Adds an optional `providerId` to import events for analytics attribution. Supports the import-flow UI while keeping migration source selection separate.

7. **[#31463 — Support pathless hosted thread managers](https://github.com/openai/codex/pull/31463)**  
   Makes installation IDs optional throughout thread/session metadata and adds a `LocalRuntimePaths` capability. Enables hosted (remote) thread managers that don't rely on local filesystem paths.

8. **[#30949 — Refresh derived thread titles over time](https://github.com/openai/codex/pull/30949)**  
   Auto-updates thread titles based on later non-empty user messages while preserving user-set names. A quality-of-life improvement for long-running conversations whose initial title no longer fits.

9. **[#34431 — Optimize remote compaction history handling](https://github.com/openai/codex/pull/34431)**  
   Reduces CPU/memory overhead during remote context compaction by estimating token counts once and avoiding redundant full-history replacements. Helps users with long context windows.

10. **[#34413 — Remove CSV-backed agent jobs](https://github.com/openai/codex/pull/34413)**  
    Drops the legacy `spawn_agents_on_csv` and `report_agent_job_result` tools, along with the `agent_jobs` and `agent_job_items` database tables. Cleanup of an older fan-out pattern that apparently never reached production stability.

## Feature Request Trends

The community is coalescing around three distinct areas:

- **Automation and Hooks Parity (Tracked in #21753):** Users want Codex to expose every lifecycle event as a configurable hook — pre-exec, post-exec, pre-edit, pre-approval, tool begin/end, etc. The reference implementation is Claude Code.
- **Power-user CLI Workflows (#12862, #34455):** Demand for `--worktree` + `--tmux` flags, configurable timeout behavior, and composable CLI invocation patterns suggests a growing cohort using Codex in headless, CI, or tmux-integrated environments.
- **Cross-Session Context Mobility (#32519):** A new request for bidirectional task handoff between ChatGPT mobile and Codex desktop — users want to start a discussion on mobile and seamlessly continue in Codex. This is early but signals ecosystem integration expectations.

## Developer Pain Points

Three pain points dominate this week's signal:

- **Windows performance and stability** — multiple issues report freezing (#20214), process spawning storms (#34025), zombie MCP processes (#12491), and WSL path corruption (#28094). Windows users experience the platform as second-class despite "sufficient" hardware.
- **MCP and sandbox complexity** — the plugin MCP system is brittle: enabling plugins without MCP servers disables legitimate MCP channels (#34110), deferred tool calls drop interactive card metadata (#33717), and every Windows update re-injects unrequested MCP servers (#28935).
- **Model behavior and state management** — GPT-5.x models occasionally enter infinite loops (#34395, #34033), encrypted agent messages destroy audit transparency (#28058), and the conversation context can drift to earlier turns (#8648). These issues erode trust in autonomous agent runs.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

Here is the Gemini CLI community digest for 2026-07-21.

---

## Gemini CLI Community Digest — 2026-07-21

**1. Today’s Highlights**

The core stability and agent reliability fronts remain the busiest areas today. Several high-priority pull requests are under review, targeting critical bugs like agent infinite-loops, MCP discovery freezes, and shell command hangs. On the issue tracker, the team continues to wrestle with the agent’s autonomy—threads about subagents ignoring its own turn limits and failing to use skills are trending. Meanwhile, a large series of PRs from the “SSR Pipeline” project indicates active work on automated code generation infrastructure.

**2. Releases**

- **[v0.52.0-nightly.20260721.gacae7124b](https://github.com/google-gemini/gemini-cli/compare/v0.52.0-nightly.20260720.gacae7124b...v0.52.0-nightly.20260721.gacae7124b)**
  A standard nightly release with no user-facing changes beyond the usual automated version bump.

**3. Hot Issues**

1.  **[#22323](https://github.com/google-gemini/gemini-cli/issues/22323): Subagent recovery after MAX_TURNS is reported as GOAL success.**
    A critical bug where a subagent fails silently. It hits the turn limit, finishes no analysis, yet reports `status: "success"`. This undermines trust in autonomous agent completions.
2.  **[#19873](https://github.com/google-gemini/gemini-cli/issues/19873): Leverage model's bash affinity via zero-dependency OS sandboxing.**
    A popular enhancement request to exploit the model’s native bash behavior while maintaining security. Suggests running tools in a sandboxed environment rather than blocking them.
3.  **[#24353](https://github.com/google-gemini/gemini-cli/issues/24353): Robust component level evaluations.**
    A workstream EPIC for creating and running behavioral eval tests to systematically validate agent performance across 6 supported models. 76 tests exist so far.
4.  **[#22745](https://github.com/google-gemini/gemini-cli/issues/22745): Assess the impact of AST-aware file reads.**
    An investigation into whether Abstract Syntax Tree-aware tools can reduce token use and misaligned reads, potentially improving agent efficiency on codebases.
5.  **[#21409](https://github.com/google-gemini/gemini-cli/issues/21409): Generalist agent hangs.**
    A high-severity bug with 8 👍. The CLI hangs forever when deferring to the generalist agent for simple tasks like folder creation. Users report that instructing the model to avoid sub-agents is the only workaround.
6.  **[#21968](https://github.com/google-gemini/gemini-cli/issues/21968): Gemini does not use skills and sub-agents enough.**
    A persistent complaint: the agent rarely invokes custom skills or sub-agents autonomously, even when the task description matches. The community wants a more proactive discovery mechanism.
7.  **[#25166](https://github.com/google-gemini/gemini-cli/issues/25166): Shell command execution gets stuck with "Waiting input".**
    A common frustration (3 👍). After a simple CLI command finishes, the shell tool reports it is still active and awaiting input, causing the agent to hang indefinitely.
8.  **[#26522](https://github.com/google-gemini/gemini-cli/issues/26522): Stop Auto Memory from retrying low-signal sessions.**
    A bug where the Auto Memory system wastes cycles. If an extraction agent skips a low-signal session, it remains “unprocessed” and is re-surfaced repeatedly.
9.  **[#22232](https://github.com/google-gemini/gemini-cli/issues/22232): Enhance browser_agent resilience: Automatic session takeover.**
    A feature request to replace the browser agent’s “fail-fast” strategy with a more robust lock-recovery mechanism for persistent sessions, a pain point for users of long-running browser tasks.
10. **[#22186](https://github.com/google-gemini/gemini-cli/issues/22186): get-shit-done output hook causes crash.**
    A P1 bug. When the “get-shit-done” agent finishes its summary, it triggers a crash. This suggests a critical edge case in how output streams are finalized.

**4. Key PR Progress**

1.  **[#28389](https://github.com/google-gemini/gemini-cli/pull/28389): Add real-world time budget to prevent infinite-loop agent state transitions.**
    A *size/s* fix for a P1 bug. This prevents the event-driven agent from getting stuck in infinite loops by adding a shared hard deadline. Directly addresses hang scenarios.
2.  **[#28397](https://github.com/google-gemini/gemini-cli/pull/28397): Remove synchronous I/O from shell tool critical path.**
    A performance fix for the React Ink UI. Replaces blocking `fs.existsSync` etc. with async alternatives, aiming to fix terminal stuttering and frame drops during shell execution.
3.  **[#28394](https://github.com/google-gemini/gemini-cli/pull/28394): Remove temp files on background process exit.**
    Fixes a resource leak where background shell commands left temporary directories behind permanently.
4.  **[#28470](https://github.com/google-gemini/gemini-cli/pull/28470): Enforce workspace trust and task isolation in a2a-server.**
    A critical security fix (RCE prevention). Refactors server startup to ensure path trust checks happen before environment loading, and introduces `AsyncLocalStorage` for task isolation.
5.  **[#28388](https://github.com/google-gemini/gemini-cli/pull/28388): Scope tools.core wildcard deny to built-in tools.**
    Fixes a bug where setting `tools.core` to any value accidentally disabled all MCP tools. Adds a `builtinOnly` flag to policy rules to distinguish between built-in and MCP tools.
6.  **[#28386](https://github.com/google-gemini/gemini-cli/pull/28386): Fix VS Code activation disposables.**
    A minor but important fix for the VS Code companion extension. Previous code used comma expressions, meaning some disposables were not properly tracked, leading to potential resource leaks.
7.  **[#28469](https://github.com/google-gemini/gemini-cli/pull/28469): Rotate session ID on model fallback.**
    Fixes an API error when the client falls back to `gemini-2.5-flash`. The old session ID was being reused, causing a blocking error. Now a new session ID is generated on fallback.
8.  **[#28387](https://github.com/google-gemini/gemini-cli/pull/28387): Guard customDeepMerge against circular references.**
    Prevents a `RangeError` crash in the settings manager when a user's config file contains a circular reference (e.g., `obj.self = obj`).
9.  **[#28410](https://github.com/google-gemini/gemini-cli/pull/28410): Shorten MCP tools/list discovery timeout.**
    Addresses a startup freeze. MCP servers that don't reply to `tools/list` could block the CLI for 10 minutes. This PR adds a fast-fail timeout.
10. **[#28435](https://github.com/google-gemini/gemini-cli/pull/28435) + [#28433](https://github.com/google-gemini/gemini-cli/pull/28433) + [#28434](https://github.com/google-gemini/gemini-cli/pull/28434): SSR Code Generation Pipeline.**
    A series of large PRs introducing a new automated pipeline for generating PRs from issues. This adds infrastructure, orchestration, agent prompt templates, and database locking—a significant new feature area.

**5. Feature Request Trends**

- **Agent Autonomy & Usage:** The community consistently requests better sub-agent discovery and utilization. The agent often fails to autonomously invoke custom skills or sub-agents, even when tasks are highly relevant.
- **Performance & Resource Optimization:** There is strong interest in AST-aware tools for codebase mapping, robust component-level evaluation (behavioral evals), and deterministic, zero-dependency sandboxing (e.g., bash affinity).
- **Security & Control:** Requests continue for safer shell execution, including automatic prevention of destructive commands (`git reset`, `--force`) and improved sandboxing for sub-agent tool execution.
- **Debugging & Observability:** Users are asking for better transparency into sub-agent behavior, such as sharing sub-agent trajectories via `/chat share` and including sub-agent context in `/bug` reports.

**6. Developer Pain Points**

- **Agent Hangs & Freezes:** The #1 pain point. The generalist agent hangs (#21409), shell commands get stuck in “Waiting input” (#25166), and the model can get stuck in infinite state transitions.
- **Silent Failures & Deceptive Reporting:** Subagents reporting “success” when actually hitting limits (#22323) erodes user trust. Auto Memory re-processing low-signal sessions is another form of wasted effort (#26522).
- **Resource Leaks & Cleanup:** Temporary files from background shell execution are not cleaned up (#28394), and the model often litters workspaces with temporary scripts (#23571).
- **Configuration & Setup Friction:** Symlinked agent files are not recognized (#20079), `settings.json` overrides are ignored by the browser agent (#22267), and circular references in settings crash the CLI (#28387).
- **Lack of Observability:** Debugging is difficult. Bug reports lack sub-agent context (#21763), and there is no easy way to share sub-agent trajectories for debugging or evaluation (#22598).

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest
**Date:** 2026-07-21  
**Data source:** [github.com/github/copilot-cli](https://github.com/github/copilot-cli)

---

## Today’s Highlights

Two point releases dropped yesterday (v1.0.72 and v1.0.73) addressing sub-agent behavior with multiple directories, relative link resolution, and an `agentStop` hook deadlock fix. Meanwhile, the issue tracker saw a surge in reports around context-limit failures, keyboard/TUI regressions, and a new class of BYK streaming errors – signaling growing friction as users push the CLI’s agent orchestration and multi-model capabilities.

---

## Releases

**v1.0.73** (2026-07-20)  
- Anthropic subagents now continue working when additional directories are configured.  
- Resolve relative links in custom agent instructions from the agent file location.  

**v1.0.72** (2026-07-20)  
- Fixed `agentStop` hook that loops indefinitely: CLI ends turn after 8 consecutive blocks; hooks now receive a `stop_hook_active` flag for self-limiting.  
- Added opt-in Git and GitHub authentication inside the O (sandboxed) environment.  

*No other releases in the last 24 hours.*

---

## Hot Issues (10 Noteworthy)

1. **[#1481 – SHIFT + ENTER should spawn line break, executes prompt instead](https://github.com/github/copilot-cli/issues/1481)**  
   **CLOSED** – A standard UX expectation (Shift+Enter = newline) was broken; the CLI uses Ctrl+Enter instead. Received 17 👍 and 27 comments, indicating widespread annoyance. Now fixed.

2. **[#3622 – Copy to clipboard silently fails on Windows](https://github.com/github/copilot-cli/issues/3622)**  
   **OPEN** – Regression since v1.0.48: clipboard copy appears successful but paste yields old contents. Affects the 17% Windows userbase. 4 comments, 4 👍.

3. **[#2181 – Regression: COPILOT_CUSTOM_INSTRUCTIONS_DIR not loading all instructions](https://github.com/github/copilot-cli/issues/2181)**  
   **OPEN** – v1.0.9 broke loading instructions from multiple directories specified via env var. Critical for teams relying on per-directory custom instructions. 2 comments, 1 👍.

4. **[#1688 – Add configurable auto-compaction threshold](https://github.com/github/copilot-cli/issues/1688)**  
   **OPEN** – High-capacity models like Claude Opus 4.6 suffer context bloat before built-in compaction triggers. Community wants a user‑configurable threshold. 5 👍, 2 comments.

5. **[#3747 – Unrecoverable timeouts when WAITFOR DELAY occurs anywhere](https://github.com/github/copilot-cli/issues/3747)**  
   **OPEN** – Simply mentioning “WAITFOR DELAY” (or reading a file containing it) causes the CLI to enter a faulted state with any model. A pure poison pill. 1 👍.

6. **[#4188 – Regression on plan-mode blocking shell commands](https://github.com/github/copilot-cli/issues/4188)**  
   **OPEN** – Plan mode in the latest version now blocks `gh` and other shell commands that were used to enrich plans (e.g., reading GitHub issues). Considered a regression. 1 👍.

7. **[#4183 – Auto-compaction does not prevent CAPI 5 MB failure from accumulated tool history](https://github.com/github/copilot-cli/issues/4183)**  
   **OPEN** – Even with auto-compaction, serialized Requests can hit the independent 5 MB body limit, making sessions permanently stuck. 2 👍. A systemic design gap.

8. **[#4185 – `--add-dir` causes Claude sub-agent dispatch to fail with 400 cache_control limit](https://github.com/github/copilot-cli/issues/4185)**  
   **OPEN** – Adding directories via `--add-dir` pushes the total cache_control blocks to 5, exceeding Anthropic’s 4‑block limit. Blocks Claude sub-agents entirely. 0 comments but high impact.

9. **[#4196 – BYOK completions wire API fails with reasoning_content in streaming deltas](https://github.com/github/copilot-cli/issues/4196)**  
   **OPEN** – Users with BYOK providers that emit `reasoning_content` see “transient API error” and 5 retries before failing. Interoperability issue for self‑hosted models. 0 comments.

10. **[#4180 – Interactive TUI ignores all keyboard input written to its PTY](https://github.com/github/copilot-cli/issues/4180)**  
    **OPEN** – When running inside programmatic PTYs (automation, tmux send‑keys, expect), the TUI behaves like a dead terminal—only Ctrl+C works. Breaks orchestration tooling. 0 comments.

---

## Key PR Progress

No pull requests were updated in the last 24 hours.

---

## Feature Request Trends

Based on the last 24h report, the community is pushing for:

- **Better context and session management** – Configurable auto‑compaction thresholds ([#1688](https://github.com/github/copilot-cli/issues/1688)), protection against the 5 MB CAPI body limit ([#4183](https://github.com/github/copilot-cli/issues/4183)), and the ability to create new sessions directly from `/btw` answers ([#4182](https://github.com/github/copilot-cli/issues/4182)).
- **Richer TUI interactions** – Click‑to‑edit enqueued messages ([#4179](https://github.com/github/copilot-cli/issues/4179)), pasting images into `/btw` discussions ([#4181](https://github.com/github/copilot-cli/issues/4181)), and rapid model/effort switching with keyboard shortcuts ([#4190](https://github.com/github/copilot-cli/issues/4190)).
- **Sandboxed agent permissions** – Allow sandboxed sessions to write their own `plan.md` without granting broad file access ([#4193](https://github.com/github/copilot-cli/issues/4193)).
- **Desktop app model selection** – Users want to choose custom BYOK models for background agents ([#4192](https://github.com/github/copilot-cli/issues/4192)).

---

## Developer Pain Points

Several recurring frustrations stand out:

- **Regressions** – Plan‑mode blocking shell commands ([#4188](https://github.com/github/copilot-cli/issues/4188)) and custom instructions not loading ([#2181](https://github.com/github/copilot-cli/issues/2181)) erode trust in stable workflows.
- **Clipboard fragility** – Windows ([#3622](https://github.com/github/copilot-cli/issues/3622)), WSL+tmux ([#4191](https://github.com/github/copilot-cli/issues/4191)), and mis‑copying project paths ([#4184](https://github.com/github/copilot-cli/issues/4184)) all indicate clipboard handling is inconsistent.
- **Context‑limit shoot‑outs** – The WAITFOR DELAY poison pill ([#3747](https://github.com/github/copilot-cli/issues/3747)) and the 5‑MB CAPI limit ([#4183](https://github.com/github/copilot-cli/issues/4183)) show that long‑running agents hit hard walls without clear recovery.
- **Agent dispatch failures** – The `--add-dir` + Claude cache_control error ([#4185](https://github.com/github/copilot-cli/issues/4185)) and code‑review agents mutating worktrees ([#4195](https://github.com/github/copilot-cli/issues/4195)) highlight missing guardrails in multi‑agent setups.
- **Input method regressions** – SHIFT+ENTER mapping complaint was fixed, but the TUI ignoring PTY input ([#4180](https://github.com/github/copilot-cli/issues/4180)) and keyboard shortcuts for image paste remain problematic.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

Based on the GitHub data for `MoonshotAI/kimi-cli`, here is the technical community digest for 2026-07-21.

---

### Kimi Code CLI Community Digest — 2026-07-21

**1. Today’s Highlights**
A critical `StrReplaceFile` bug (underreporting replacements in chained edits) was identified and promptly patched via a new PR. A separate fix addresses a long-standing issue where frozen system prompts prevent resumed sessions from recognizing new skills or `AGENTS.md` changes. Developers are also reporting persistent server-side rate limiting (`429 engine_overloaded`) on remote deployments, causing service outages lasting over 48 hours.

**2. Releases**
No new releases in the last 24 hours.

**3. Hot Issues**

1.  **#2209**: [bug] 在云端服务器部署的kimiclaw 无回复 CLI 持续 429 engine_overloaded 超过 48 小时
    - **Author**: yuermodi | **Reactions**: 3 👍
    - **Summary**: A remote server user has been experiencing continuous `429 engine_overloaded` errors for over 48 hours. The issue persists across versions (v1.24.0 → v1.41.0) and models (`k2.5` → `k2.6`). A diagnostic file has been exported.
    - **Why it matters**: This indicates a significant backend throttling or resource allocation problem affecting non-local deployments, leading to complete service unavailability for extended periods.
    - [Link](https://github.com/MoonshotAI/kimi-cli/issues/2209)

2.  **#2526**: StrReplaceFile reports too few total replacements for chained edits
    - **Author**: Sreekant13 | **Reactions**: 0 👍
    - **Summary**: When using `StrReplaceFile` for sequential edits, the tool counts replacements against the *original* file content. This means that if an edit's `old` string is produced by a previous edit, it will not be found or counted correctly.
    - **Why it matters**: This is a subtle but critical logic error that corrupts multi-step file modifications, leading to silent failures and incorrect results in scripted editing workflows.
    - [Link](https://github.com/MoonshotAI/kimi-cli/issues/2526)

3.  **#2525**: Goal mode: no-op continuation turns fire indefinitely while waiting on external conditions
    - **Author**: zedi2000 | **Reactions**: 0 👍
    - **Summary**: In goal mode, when the agent is blocked (e.g., waiting for a long-running job), it continuously re-injects the full goal file and context every few seconds. This wastes tokens, inflates context, and can violate tool-use limits.
    - **Why it matters**: This is a critical UX and cost issue for complex automation tasks, causing unnecessary API consumption and potential context window overflows.
    - [Link](https://github.com/MoonshotAI/kimi-cli/issues/2525)

4.  **#2523**: Context compaction bug — Kimi Code reopens an already completed and deleted task
    - **Author**: Frogzter | **Reactions**: 0 👍
    - **Summary**: After context compaction, the client incorrectly re-opens a task that was previously completed and deleted.
    - **Why it matters**: This disrupts workflow integrity and task history management, forcing users to re-handle old work.
    - [Link](https://github.com/MoonshotAI/kimi-cli/issues/2523)

5.  **#2522**: Windows: old kimi-code sessions not migrated to .kimi after upgrade; kimi migrate command missing
    - **Author**: sunnywang666 | **Reactions**: 0 👍
    - **Summary**: On Windows, upgrading from the old `kimi-code` client to the new `kimi` v1.49.0 does not migrate session data from `.kimi-code` to `.kimi`.  The expected `kimi migrate` command does not exist.
    - **Why it matters**: This is a major breaking change for Windows users, resulting in data loss of all previous session history after a routine upgrade.
    - [Link](https://github.com/MoonshotAI/kimi-cli/issues/2522)

**4. Key PR Progress**

1.  **#2524**: fix(tools): count StrReplaceFile replacements against the running content
    - **Author**: Sreekant13 | **Status**: Open
    - **Description**: Directly fix for #2526. Changes the replacement counting logic in `StrReplaceFile` to count against the progressively edited file content rather than the original.
    - **Why it matters**: Prevents silent corruption of multi-step file edits.
    - [Link](https://github.com/MoonshotAI/kimi-cli/pull/2524)

2.  **#2520**: fix(session): align fork/undo context truncation to wire turns
    - **Author**: Nas01010101 | **Status**: Open
    - **Description**: Resolves #2517. Fixes the undo cut point to align with wire turns instead of context turns. Also includes regression tests for wire-only slash turns and likely resolves related history mismatch issues.
    - **Why it matters**: Improves core session history and fork/undo reliability, a foundational feature for productive use.
    - [Link](https://github.com/MoonshotAI/kimi-cli/pull/2520)

3.  **#2519**: fix(app): refresh stale frozen system prompt on session resume
    - **Author**: Nas01010101 | **Status**: Open
    - **Description**: Resolves #2420. Fixes a bug where resuming a session uses a frozen `_system_prompt` from the initial session creation. This prevents skills from `~/.kimi/skills/` and changes in `AGENTS.md` from being loaded.
    - **Why it matters**: Essential for maintaining a configurable and extensible development environment across sessions.
    - [Link](https://github.com/MoonshotAI/kimi-cli/pull/2519)

**5. Feature Request Trends**
- **Chain-of-Edits Integrity**: A clear call for smarter file manipulation tools that can handle sequential and chained modifications without corruption.
- **Session Semantics**: A strong demand for more robust session lifecycle management, including proper handling of session resume, system prompt refresh, and task/context compaction.
- **Resource-Aware Execution**: Users are requesting better agent behavior when waiting on external conditions, specifically to avoid token waste and context pollution during idle periods.

**6. Developer Pain Points**
- **Server-Side Throttling**: The `429 engine_overloaded` error (#2209) is a recurring and severe issue, especially for users on non-local deployments.
- **Session Migration Instability**: Upgrades, particularly on Windows, are causing silent data loss of session history (#2522).
- **Context & History Corruption**: Multiple issues (#2523, #2525) point to fundamental problems with how the CLI manages context, history, and task state, leading to unexpected behavior and wasted resources.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-07-21

## Today's Highlights

A new v1.18.4 release lands with adaptive thinking controls for Kimi models and fixes for provider timeouts. Five-month-old issues on Windows ARM64 and the Kimi‑for‑coding 429 bug are finally seeing community traction, while a new PR series introduces per‑tool execution timeouts and CORS preflight fixes for authenticated servers.

## Releases

**v1.18.4** (released today)  
**Core**
- **Improvement**: Adaptive thinking controls for Kimi models on Anthropic‑compatible providers, with summarized reasoning output by default (@chouqin).
- **Bugfixes**: Reduced OpenAI provider header timeouts during slow connection setup; respect provider‑defined reasoning options.

*No other releases in the last 24 hours.*

## Hot Issues

*Top 10 issues (by comment count) updated in the last 24h, with context and community sentiment.*

1. **#19130 – Windows ARM64 native: OpenTUI fails to initialize with bun:ffi dlopen TinyCC error**  
   *Author: Carliquiss | Comments: 11 | 👍 8*  
   The native ARM64 binary works for CLI commands but the TUI crashes on Windows 11 ARM64. Long‑running (since March) with steady upvotes; a blocking issue for ARM64 users.  
   [GitHub](https://github.com/anomalyco/opencode/issues/19130)

2. **#28611 – [FEATURE]: Way for user to have custom prompt for AFTER compaction**  
   *Author: yookoala | Comments: 10 | 👍 0*  
   Context compaction currently discards important instructions; the user wants a hook to inject a custom post‑compaction prompt.  
   [GitHub](https://github.com/anomalyco/opencode/issues/28611)

3. **#27902 – fix: kimi-for-coding provider gets 429 engine overloaded due to missing User-Agent header**  
   *Author: bzqzheng | Comments: 10 | 👍 9*  
   The built‑in Kimi provider sends `Anthropic/JS` as User‑Agent, triggering 429 errors on Kimi’s gateway even with valid API keys. Widely upvoted and now closed with a fix.  
   [GitHub](https://github.com/anomalyco/opencode/issues/27902)

4. **#14894 – [BUG] Web UI: No response was displayed after the input message was sent**  
   *Author: JonasGao | Comments: 9 | 👍 1*  
   Messages show in the TUI but not in the Web UI; the issue dates back to v1.2.10 and still garners attention.  
   [GitHub](https://github.com/anomalyco/opencode/issues/14894)

5. **#19267 – Agent stuck in an infinite loop [Minimax-2.7, any mode]**  
   *Author: GregoireBellon | Comments: 8 | 👍 0*  
   Session gets infinitely compacted when using Minimax models; affects v1.3.x and later.  
   [GitHub](https://github.com/anomalyco/opencode/issues/19267)

6. **#28568 – [Serious regression] LLM long‑term work ability basically gone in v1.14‑15**  
   *Author: joshuachendyb | Comments: 5 | 👍 0*  
   Chinese report: models stop mid‑task, completion drops to ~40%, task drift worse than older versions.  
   [GitHub](https://github.com/anomalyco/opencode/issues/28568)

7. **#28579 – Regression: MCP prompts are no longer listed after connecting MCP server**  
   *Author: mustafagoksever | Comments: 5 | 👍 0*  
   MCP tools may still work but prompts are invisible; broke between versions.  
   [GitHub](https://github.com/anomalyco/opencode/issues/28579)

8. **#16116 – [FEATURE]: Sessions should be able to be listed globally**  
   *Author: mahyarmirrashed | Comments: 5 | 👍 0*  
   Moving a project loses access to its sessions; users want a global session registry.  
   [GitHub](https://github.com/anomalyco/opencode/issues/16116)

9. **#20940 – Plugin config() hook mutations to skills.paths invisible to skill discovery**  
   *Author: sjawhar | Comments: 5 | 👍 1*  
   Plugins that add skill directories via `config()` are not discovered by `Skill.all()`.  
   [GitHub](https://github.com/anomalyco/opencode/issues/20940)

10. **#28600 – [FEATURE]: centralize persistent state and document all config/cache paths**  
    *Author: Aesthermortis | Comments: 5 | 👍 0*  
    OpenCode scatters state across multiple locations; request for a single, documented state directory.  
    [GitHub](https://github.com/anomalyco/opencode/issues/28600)

## Key PR Progress

*10 important pull requests updated in the last 24h.*

1. **#36869 – feat(opencode): per‑tool execution timeout with abort + session recovery**  
   *Author: FahadBinHussain | Open*  
   Tools (built‑in and MCP) can hang the agent loop indefinitely. This PR adds per‑tool timeouts and abort logic, plus session recovery after timeout. Related to multiple issues (#20096, #34888, etc.).  
   [GitHub](https://github.com/anomalyco/opencode/pull/36869)

2. **#38026 – fix(server): allow authenticated CORS preflight**  
   *Author: Brendonovich | Open*  
   Applies shared CORS policy before authentication so browser preflight requests reach password‑protected servers.  
   [GitHub](https://github.com/anomalyco/opencode/pull/38026)

3. **#38014 – fix(core): resolve npm plugin entry point as file URL on Windows**  
   *Author: touful | Open*  
   `import.meta.resolve()` returns raw paths on Windows; now converts to `file://` URL before loading. Closes #38021.  
   [GitHub](https://github.com/anomalyco/opencode/pull/38014)

4. **#38019 – fix(opencode): bound shell output after exit**  
   *Author: opencode-agent[bot] | Open*  
   Ensures child process stdout is fully read after process exit, with a 500 ms deadline and fallback for Windows.  
   [GitHub](https://github.com/anomalyco/opencode/pull/38019)

5. **#37647 – feat(nix): build opencode2 (TUI) alongside opencode**  
   *Author: ReStranger | Open*  
   Adds the TUI binary `opencode2` to the Nix package. Closes #37646.  
   [GitHub](https://github.com/anomalyco/opencode/pull/37647)

6. **#37219 – fix(opencode): ignore node_modules during config and skill discovery**  
   *Author: ulises-jeremias | Open*  
   Glob scans now skip `node_modules` to prevent performance issues and false positives. Closes #30337.  
   [GitHub](https://github.com/anomalyco/opencode/pull/37219)

7. **#38016 – fix(core): improve patch errors**  
   *Author: rekram1-node | Open*  
   Makes patch parser errors more descriptive: distinguishes missing boundaries, reports invalid hunk headers, and preserves filesystem failure details.  
   [GitHub](https://github.com/anomalyco/opencode/pull/38016)

8. **#38006 – feat(codemode): support JSON callbacks**  
   *Author: rekram1-node | Open*  
   Adds `JSON.parse`/`stringify` callback support inside CodeMode, including revivers, replacers, and array replacer filtering.  
   [GitHub](https://github.com/anomalyco/opencode/pull/38006)

9. **#35688 – fix(app): guard missing notification server state**  
   *Author: jones | Closed*  
   Prevents renderer crash when notification state is requested for an uninitialized server key. Closes #35686.  
   [GitHub](https://github.com/anomalyco/opencode/pull/35688)

10. **#33134 – fix(core): tolerate orphan part projection from cascade‑delete race**  
    *Author: randomvariable | Closed*  
    Prevents app crash when session event projection into SQLite hits a race condition during cascade delete. Closes #31990.  
    [GitHub](https://github.com/anomalyco/opencode/pull/33134)

## Feature Request Trends

Several recurring themes emerge from the issues requesting new features:

- **Persistent state centralization** (#28600, #16116): Users want a single, documented state directory and the ability to list/restore sessions globally, even after moving projects.
- **Custom compaction hooks** (#28611): The ability to inject a prompt after context compaction to retain critical instructions.
- **Hash‑anchored file editing** (#24511): Surgical patching using content hashes rather than sending entire files, reducing token cost and improving precision.
- **Sidebar and UI persistence** (#23896, #28653): Preventing the sidebar from collapsing during window resize and fixing topbar disappearance in the web UI.
- **Better config validation and documentation** (#28733, #28600): Users request silent failure elimination and clear documentation of all config paths/fields.
- **Global session management** (#16116): Sessions should follow the project, not the absolute path.

## Developer Pain Points

Recurring frustrations surfaced in the top issues:

- **Regression churn**: The long‑term work capability regressed noticeably in v1.14‑15 (#28568, #19267), and MCP prompts stopped working (#28579). Users note that older versions were more reliable for complex multi‑file tasks.
- **Platform‑specific blockers**: Windows ARM64 TUI failure (#19130) and Windows local server disconnects (#28091) remain unresolved for months.
- **SSE / connection reliability**: Session state goes stale after sleep/resume (#17769), SSE streams silently drop (#28729), and CORS issues block LAN access (#28340).
- **Provider integration issues**: Kimi hit 429 due to missing User‑Agent (#27902), GitHub Copilot returns forbidden (#26344), and Minimax models cause infinite loops (#19267).
- **Logging and debugging**: `--log-level DEBUG` silently fails after 10 log files (#17846), and config loading fails with no error output (#28733).
- **Plugin ecosystem friction**: Plugin‑added skill directories are invisible (#20940) and MCP prompts are no longer listed (#28579), hampering extensibility.
- **Agent configuration fragility**: Agent‑level model validation can silently fall back to wrong providers (#28726), and combining `.md` agents with `opencode.json` can wipe all session diffs (#28692).

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-07-21

## Today's Highlights

A significant HTTP timeout regression in the self-hosted OpenAI-compatible provider is drawing heavy community scrutiny, with 11 comments on issue #6476. Meanwhile, the project saw a burst of community-driven fixes across the stack, including critical patches for auth.json environment variable handling (#6799) and paste registry corruption (#6844). On the provider front, p-mono added Qwen Token Plan as a built-in provider and received a substantial PR for Amazon Bedrock Mantle support.

## Releases

No new releases in the last 24 hours.

## Hot Issues

1. **[#6476 — Regression: httpIdleTimeoutMs no longer respected for self-hosted OpenAI-compatible provider](https://github.com/earendil-works/pi/issues/6476)** — 11 comments, high impact. Users on v0.80.6 report timeouts after a few minutes despite explicit timeout settings, working fine in v0.80.3. Marked `inprogress`, suggesting active investigation. Community tone is frustrated but constructive.

2. **[#5263 — Make in-session model and thinking-level changes ephemeral by default](https://github.com/earendil-works/pi/issues/5263)** — 8 comments, 8 👍. Strong community desire for session-scoped model switches with a dedicated "Default model" settings entry. No activity in over a month despite high approval.

3. **[#3200 — Support video/audio content in prompt command](https://github.com/earendil-works/pi/issues/5263)** — 6 comments, 4 👍. Users want `prompt` RPC to accept video/audio alongside images for multimodal models like Gemma 4 and GPT-4o. Open since April, one of the longer-running feature requests.

4. **[#6509 — Extension-reported usage in footer cost display](https://github.com/earendil-works/pi/issues/6509)** — 5 comments. Community requests `ctx.ui.setUsage()` so extensions running subprocesses or external LLM calls can report cost. Closed with PR #6671.

5. **[#6621 — Prevent accidental cache invalidation due to dynamic system prompt](https://github.com/earendil-works/pi/issues/6621)** — 5 comments, 1 👍. Important for local LLM users with slow prefill speeds. Dynamic prompt changes invalidate prompt caches unnecessarily. Closed.

6. **[#6652 — pi-tui crash log hardcodes ~/.pi/agent/pi-crash.log](https://github.com/earendil-works/pi/issues/6652)** — 4 comments. Ignores `PI_CODING_AGENT_DIR` environment variable when writing crash logs. Actively discussed with `inprogress` label.

7. **[#6794 — Pi startup super slow due to model catalogue refresh](https://github.com/earendil-works/pi/issues/6794)** — 3 comments, 1 👍. Users hitting multi-minute startup delays. Likely related to network calls for provider model lists. Closed.

8. **[#6819 — assistant.usage is undefined when provider doesn't return usage](https://github.com/earendil-works/pi/issues/6819)** — 3 comments. DeepSeek V4 and other providers occasionally omit usage data, causing crashes in multiple functions. Marked `no-action` suggesting a fix already merged.

9. **[#6891 — Build fails: missing openrouter/tencent/hy3:free](https://github.com/earendil-works/pi/issues/6891)** — 1 comment. OpenRouter removed the model on July 21, breaking `npm run build`. Quick fix expected.

10. **[#6893 — ZWJ emoji breaks differential rendering on Apple Terminal](https://github.com/earendil-works/pi/issues/6893)** — 1 comment. ZWJ emoji like 🧍‍♂️ cause line duplication and rendering corruption. Freshly reported, marked `untriaged`.

## Key PR Progress

1. **[#6892 — Fix: persist jiti cache in agent dir](https://github.com/earendil-works/pi/pull/6892)** — Freshly merged. Prevents cold start recompilation of TypeScript extensions when macOS temp directory cache is pruned. Directly addresses a frequent developer pain point.

2. **[#6216 — Feat: Add Amazon Bedrock Mantle OpenAI Responses provider](https://github.com/earendil-works/pi/pull/6216)** — Open, supersedes earlier attempt. Brings AWS Bedrock Mantle support via OpenAI's Bedrock provider. Significant for enterprise users.

3. **[#6881 — Feat(ai): use provider-reported cost when responses include it](https://github.com/earendil-works/pi/pull/6881)** — Open. Reads `usage.cost` from Vercel AI Gateway and other providers that return actual billed amounts, falling back to calculated cost.

4. **[#6671 — Add usage info to branch summary, compaction and tool result entries](https://github.com/earendil-works/pi/pull/6671)** — Merged. Adds usage metadata to compaction and tool result entries. Enables #6509's extension usage reporting.

5. **[#6765 — Feat(ai): separate generated model data](https://github.com/earendil-works/pi/pull/6765)** — Merged. Moves generated model values into separate JSON files to reduce repo churn from provider updates. By mitsuhiko.

6. **[#6775 — Retry on compaction/branch summarization retryable failures](https://github.com/earendil-works/pi/pull/6775)** — Open. Fixes #6647. Adds retry logic for transient failures during compaction, matching existing retry behavior in assistant turns.

7. **[#6786 — Fix(ai): expose Kimi Coding K3 effort levels](https://github.com/earendil-works/pi/pull/6786)** — Merged. Adds `low`, `high`, `max` thinking levels for Kimi K3, matching documentation.

8. **[#6864 — Fix: env section ignored in auth.json](https://github.com/earendil-works/pi/pull/6864)** — Merged. Fixes #6799 where provider-scoped env values in `auth.json` were dropped on the stored-key code path. Critical for Azure users.

9. **[#6858 — Feat(ai): add Qwen Token Plan as built-in provider](https://github.com/earendil-works/pi/pull/6858)** — Merged. Adds both international and China-region Token Plan providers, following existing Xiaomi structure.

10. **[#6854 — Fix: tool_call_id error when switching models](https://github.com/earendil-works/pi/pull/6854)** — Merged. Addresses #6796. Normalizes tool call IDs when switching between OpenAI Responses and completions models, fixing replay corruption.

## Feature Request Trends

The community is increasingly focused on **extensibility and lifecycle management**. Dominant themes include:

- **Ephemeral session state**: Users want model and thinking-level changes to be session-scoped by default (#5263). This reflects a desire for safer experimentation without polluting global config.
- **Extension API expansion**: Multiple requests target richer extension capabilities — custom UI chrome (#6876), session file rewriting before load (#6863), and lifecycle trigger metadata (#6884). The platform is clearly maturing as an extension ecosystem.
- **Multimodal support**: The long-standing #3200 for video/audio in prompt reflects growing use of multimodal models.
- **RPC protocol improvements**: Requests for `reload_config` (#6890) and `get_available_thinking_levels` (#6865) show headless/AI-driven clients desire programmatic control beyond the TUI.

## Developer Pain Points

Several pain points recur across issues:

- **Timeout and retry reliability**: The httpIdleTimeoutMs regression (#6476) and compaction failure without retry (#6647, #6820) highlight fragility in network-dependent operations. Users running local models are particularly affected.
- **Cache invalidation**: Dynamic system prompts invalidating prompt caches (#6621) and jiti cache being purged by OS temp cleanup (#6892) cause significant cold-start delays. Developers of local LLM workflows feel this acutely.
- **Build fragility from external providers**: The OpenRouter `tencent/hy3:free` removal breaking builds (#6891) is a reminder of tight coupling with provider APIs. Several closed issues deal with provider data format changes.
- **Environment variable handling**: The auth.json env block being silently ignored (#6799) frustrated users who assumed documented behavior worked. This was fixed today but represents a class of silent configuration bugs.
- **Undefined/null guard gaps**: `assistant.usage` being undefined (#6819) caused cascading crashes across multiple modules. Users want defensive programming against non-standard provider responses.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态 — 2026-07-21

## 1. 今日亮点

今日社区焦点集中在 **Thinking-only 模型兼容性修复** 上：多个 P1/P2 级 Issue 报告了 `enable_thinking=false` 被强制附加到内部操作（上下文压缩、目标判据、权限分类器）的请求中，导致 `qwen3.8-max-preview` 等模型直接返回 400 错误。这批问题已通过 PR #7333 和 #7303 得到修复。同时，**autofix 机器人** 的管理流程获得了显著增强，包括自动解决已实现的审查线程、区分验证门崩溃与拒绝、以及完整的托管 PR 可视化管理面板，标志着自动运维体系的成熟。

## 2. 版本发布

- **v0.20.0-nightly.20260721.cda0e0348**：夜间版本，主要包含 `feat(autofix): label-driven takeover and release` 与 `fix(autofix)` 两项改动，继续完善自动修复机器人对标签驱动接管和发布流程的支持。([查看发布](https://github.com/QwenLM/qwen-code/releases/tag/v0.20.0-nightly.20260721.cda0e0348))

## 3. 热点 Issue（10 项）

1. **[RFC: Reliable auto-memory recall — timing, quality, and telemetry](https://github.com/QwenLM/qwen-code/issues/7040)**  
   P2 级功能请求，评论 7 条。讨论核心记忆系统的自动召回路径改进，重点在于延迟、缓存行为和选择结果的可观测性。维护者已主动将范围缩小到“惠及每位用户的核心路径”，避免演变为企业级治理平台。

2. **[MCP server never successfully get tool and resource listing](https://github.com/QwenLM/qwen-code/issues/7147)**  
   P2 级 bug，评论 6 条。Fastmail 的 MCP 服务器在 Qwen Code 中认证通过后获取工具列表超时。标注 `welcome-pr`，社区贡献者有机会解决这一严重影响第三方 MCP 生态集成的问题。

3. **[OpenAI 对 toolCall 的特殊反应导致 subAgent 完全无法使用](https://github.com/QwenLM/qwen-code/issues/7316)**  
   P2 级 bug，影响严重。当使用 OpenAI 兼容模型时，`working_dir` 和 `isolation` 参数会在 tool call 中同时出现，违反 schema 互斥约束。与 #7315 高度相关，社区反馈已有工作进展。

4. **[Bug: token-plan.ap-southeast-1 is not selectable on /auth](https://github.com/QwenLM/qwen-code/issues/7252)**  
   P2 级功能请求。新加坡区域 Token Plan 端点无法在认证页面选择，影响了亚太用户的付款套餐配置。标注 `welcome-pr`。

5. **[bug(core): side-query forces enable_thinking=false, breaking TokenPlan endpoints](https://github.com/QwenLM/qwen-code/issues/7284)**  
   P1 级核心 bug。`runSideQuery` 在 `web_fetch`、分类器等场景始终发送 `enable_thinking: false`，与今天多个高优先级 Issue 共根。该问题直接导致内部操作对 thinking-only 模型崩溃。

6. **[BadRequestError: enable_thinking=false sent to thinking-only models](https://github.com/QwenLM/qwen-code/issues/7332)**  
   P1 级核心 bug。与 #7284 同类但更聚焦于 `qwen3.8-max-preview` 模型，影响上下文压缩、目标判据等内部流程。已通过 PR #7333 修复。

7. **[Web Shell loses bearer token on page refresh when daemon started with --token](https://github.com/QwenLM/qwen-code/issues/7301)**  
   P2 级 bug，影响 Web Shell 用户体验。页面刷新后无法保持 `Authorization: Bearer xxx` 头部，必须重新认证。标注 `welcome-pr`。

8. **[Agent tool schema forces mutually exclusive working_dir and isolation parameters](https://github.com/QwenLM/qwen-code/issues/7315)**  
   P1 级核心 bug。Agent 工具 schema 生成时强制要求所有可选参数（`working_dir` 和 `isolation`），导致 sub-agent 启动验证失败。与 #7316 共根。

9. **[Harden tool-output budgeting, observability, and artifact lifecycle](https://github.com/QwenLM/qwen-code/issues/7306)**  
   P2 级增强提案，评论 2 条。工具输出经过多个独立的截断路径（Shell 截断、调度器截断、批处理卸载），缺乏统一的可观测性和预算控制。

10. **[Add content-safe runtime telemetry for channel memory recall](https://github.com/QwenLM/qwen-code/issues/7335)**  
    P2 级功能请求，跟随 #7040 的 RFC 方向，为频道记忆召回添加不包含用户内容的运行时遥测，便于运维人员监控延迟和缓存命中率。

## 4. 关键 PR 进展（10 项）

1. **[fix(core): skip enable_thinking=false for thinking-only models](https://github.com/QwenLM/qwen-code/pull/7333)**  
   已合并，修复 #7332。内部操作不再对 thinking-only 模型强制设置 `includeThoughts: false`，默认自动推断是否需要 thinking。

2. **[fix(core): support qwen3.8 side queries on DashScope](https://github.com/QwenLM/qwen-code/pull/7303)**  
   开放中，作者 yiliang114。将 `qwen3.8-max-preview` 标记为强制 thinking 模型，侧查询不再覆盖此设置。

3. **[feat(autofix): resolve the review threads whose findings it implemented](https://github.com/QwenLM/qwen-code/pull/7364)**  
   开放中，自动修复机器人现在会实际解决它已实现的审查线程，减少人工审查者的重复阅读负担。

4. **[fix(autofix): retry a verification-gate crash instead of burying the agent's fix](https://github.com/QwenLM/qwen-code/pull/7351)**  
   开放中，区分验证门的**拒绝**（outcome）与**崩溃**（crash），崩溃时重试而非废弃修复工作，提高自动修复可靠性。

5. **[feat(autofix): render the managed fleet into the scan's run summary](https://github.com/QwenLM/qwen-code/pull/7355)**  
   开放中，每次扫描现在会在运行摘要中生成托管 PR 的状态表，运维人员可以一目了然查看整个托管资源池的健康状况。

6. **[fix(web-shell): restore scheduled task reference interactions](https://github.com/QwenLM/qwen-code/pull/7313)**  
   开放中，修复 Web Shell 中计划任务的提示引用交互，包括扩展/MCP 选择器的滚动、光标样式和颜色修复。

7. **[feat(core): add opt-in built-in web_search backed by the DashScope Responses API](https://github.com/QwenLM/qwen-code/pull/7215)**  
   开放中，作者 tanzhenxin。添加原生 `web_search` 工具，基于 DashScope 服务端搜索 API，默认关闭，无需额外 MCP 或提供者配置。

8. **[feat(auth): add Singapore Token Plan region](https://github.com/QwenLM/qwen-code/pull/7280)**  
   开放中，为 `/auth` 添加新加坡区域 Token Plan 选择，同时更新 VS Code 伴侣订阅计划定义。

9. **[fix(autofix): retry a model API error instead of stranding the PR](https://github.com/QwenLM/qwen-code/pull/7247)**  
   开放中，当 autofix agent 遇到模型 API 错误（403/429/5xx）时不再直接终止，而是重试，避免 PR 被“卡住”。

10. **[fix(core): Sanitize internal daemon secrets from shell subprocess environments](https://github.com/QwenLM/qwen-code/pull/6606)**  
    开放中，已运行 12 天。清理 shell 子进程环境中的内部守护进程密钥，属于安全增强。

## 5. 功能请求趋势

从今日所有 Issue 中可提炼出四大功能方向：

- **自动修复与运维可观测性**（autofix）：包括标签驱动接管、审查线程自动解决、托管 PR 状态仪表盘、验证门失败重试。社区和核心团队正在投入大量精力完善自动运维体系。
- **可观测性与遥测**（Telemetry/Observability）：RFC #7040 和 #7335 共同推动在记忆召回和工具输出预算上建立运行时遥测，强调“不记录用户内容”的安全原则。
- **区域与模型兼容性适配**：新加坡 Token Plan 区域选择（#7252）、DashScope 和 Token Plan API 对 thinking-only 模型的支持是社区热切期望的改进。
- **Web Shell UI 定制化**：PR #7379 和 #7380 展示了按品牌化、导航栏、会话操作和页脚注入自定义内容的 API 需求，社区对嵌入定制化的兴趣持续增长。

## 6. 开发者痛点

以下 3 点问题在多个高影响力 Issue 中反复出现：

- **模型 API 兼容性——Thinking 参数冲突**：这是今日最严重的痛点。`enable_thinking=false` 被硬编码到内部操作（context compaction、goal judge、permission classifier、web_fetch），导致所有 thinking-only 模型用户无法正常使用内部功能和工具。涉及 #7284、#7332、#7359、#7366 共 4 个独立 Issue，均为 P1/P2 级。
- **MCP 工具集成稳定性**：#7147 和 #7314 暴露了 MCP 工具列表获取超时和可选参数被静默丢弃的问题，影响第三方 MCP 生态的可靠性。
- **会话状态管理问题**：模型切换导致守护进程会话失效（#7023）、页面刷新丢失令牌（#7301）、会话中工具调用参数丢失（#7377）——这些 Issue 共同指向会话状态一致性和持久性仍是未完全解决的挑战。

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-07-21

**Repository:** [github.com/Hmbown/DeepSeek-TUI](https://github.com/Hmbown/DeepSeek-TUI)  
*Note: the project is branded internally as CodeWhale; all links below refer to the same codebase.*

---

## Today's Highlights

Development velocity remains high as the team pushes toward the **v0.9.1** release. No new tags were cut, but 17 issues were closed in the last 24 hours and several key pull requests landed, focusing on **sub‑agent isolation**, **permission posture simplification**, and **UI responsiveness**. Two long‑standing performance bugs—Enter‑key send lag and truncated long output—now have dedicated fixes in review.

---

## Releases

No new releases in the last 24 hours.

---

## Hot Issues (10 Noteworthy)

1. **[#4032](https://github.com/Hmbown/CodeWhale/issues/4032) — Codewhale not following the constitution**  
   *40 comments | bug, release‑blocker*  
   The agent consistently writes temporary scripts instead of using user‑authored scripts, then justifies its behaviour. This undermines trust and is flagged as a release blocker.

2. **[#4489](https://github.com/Hmbown/CodeWhale/issues/4489) — Hooks process leak (Windows)**  
   *6 comments | bug, reliability*  
   Hook commands on Windows leave orphaned `node.exe` processes because only the intermediate shell is killed. Community members confirm the issue persists across versions.

3. **[#4605](https://github.com/Hmbown/CodeWhale/issues/4605) — Enter key send lag (UI freeze ~200–1200 ms)**  
   *2 comments | bug, performance, P1*  
   Affects all versions from 0.6.x to 0.9.0. High‑frequency touchpoint; the UI appears frozen before the composer clears. A fix is now in PR #4654.

4. **[#4603](https://github.com/Hmbown/CodeWhale/issues/4603) — Long output content cannot scroll**  
   *2 comments | bug, UX, P2*  
   Large diffs or multi‑turn conversations are truncated without a way to review older content. A PTY‑driven fix is proposed in PR #4653.

5. **[#4604](https://github.com/Hmbown/CodeWhale/issues/4604) — Setup wizard forced on every restart**  
   *2 comments | bug, P1*  
   The first‑run flag is not persisted, so the onboarding flow reappears after every restart on Windows. Already closed by PR #4616.

6. **[#3934](https://github.com/Hmbown/CodeWhale/issues/3934) — Collapse Fleet and agent roles to Planner / Worker / Reviewer / Verifier**  
   *2 comments | enhancement, release‑blocker*  
   A proposed canonical role system to simplify permission, capability, and lifecycle state. Community agreement is strong.

7. **[#4412](https://github.com/Hmbown/CodeWhale/issues/4412) — Resolve Ask, Auto‑Review, and Full Access through one permission contract**  
   *1 comment | security, release‑blocker*  
   Unifies three permission modes into a single typed decision before every tool call. Core to the v0.9.1 security model.

8. **[#4598](https://github.com/Hmbown/CodeWhale/issues/4598) — Make Operate delegate bounded leaves by default**  
   *1 comment | enhancement, distributed‑prompting*  
   Shifts the parent’s role to decomposition and cross‑cutting, letting children operate independently. Keeps the design prompt‑policy based (no new scheduler).

9. **[#4626](https://github.com/Hmbown/CodeWhale/issues/4626) — Make Auto‑Review resolve tool permission without approval modals**  
   *1 comment | UX, release‑blocker*  
   Auto‑Review should be non‑modal: the agent decides automatically and either executes or returns a policy decision. Closed today.

10. **[#4648](https://github.com/Hmbown/CodeWhale/issues/4648) — Declare child write scopes and contain contention**  
    *1 comment | release‑blocker*  
    Adds `writable_paths` and resource‑claim ordering to prevent conflicting writes from concurrent sub‑agents. Closed with PR #4648.

---

## Key PR Progress (10 Important)

1. **[#4657](https://github.com/Hmbown/CodeWhale/pull/4657) — fix(streaming): report progress on idle timeouts**  
   Distinguishes prefill stalls from partial output stalls in SSE idle‑timeout errors, adding byte and timing telemetry.

2. **[#4656](https://github.com/Hmbown/CodeWhale/pull/4656) — fix(route): honor explicit limits for unknown local models**  
   Fixes #4655 by allowing concrete route output limits to override the generic 4K fallback for self‑hosted models.

3. **[#4654](https://github.com/Hmbown/CodeWhale/pull/4654) — fix(tui): acknowledge Enter before slow send prep**  
   Separates UI acknowledgment from send preparation, dramatically reducing perceived freeze time (fixes #4605).

4. **[#4653](https://github.com/Hmbown/CodeWhale/pull/4653) — test(tui): lock long‑output transcript scrolling with a PTY scenario**  
   End‑to‑end test using a sealed loopback reply spanning three viewports, ensuring content is never truncated (fixes #4603).

5. **[#4652](https://github.com/Hmbown/CodeWhale/pull/4652) — feat(cli): add public `--no-project-config` for reproducible headless exec**  
   New flag that disables workspace‑specific config overlays, enabling deterministic headless runs (refs #4641).

6. **[#4618](https://github.com/Hmbown/CodeWhale/pull/4618) — fix(tui): keep long‑running tools live**  
   Restores liveness heartbeats around tool execution, preventing the 10‑minute TUI stall watchdog from killing healthy operations.

7. **[#4617](https://github.com/Hmbown/CodeWhale/pull/4617) — fix(kimi): enforce exact K3 and MFJS contracts**  
   Aligns Moonshot and Kimi endpoint handling with official specs; recursively normalises parameter schemas and fails closed on unsupported compositions.

8. **[#4616](https://github.com/Hmbown/CodeWhale/pull/4616) — fix(tui): make onboarding completion durable**  
   Persists the first‑run flag through the state‑root contract, solving the repeated setup wizard issue (#4604).

9. **[#4615](https://github.com/Hmbown/CodeWhale/pull/4615) — fix(tui): present built‑in Fleet as ready**  
   Replaces the misleading “Fleet setup” label with accurate copy when Fleet is configured, keeping setup options accessible.

10. **[#4566](https://github.com/Hmbown/CodeWhale/pull/4566) — [v0.9.2] update tui Cargo.toml for HarmonyOS build**  
    Enables native TUI builds on HarmonyOS PC by moving `portable-pty` to Unix‑only and upgrading dependencies.

---

## Feature Request Trends

The community is rallying around **three major directions**:

- **Sub‑agent isolation & durability** – Issues like #4648 (write scopes), #4627 (isolated environments), #4646 (bounded handoffs) show strong demand for safe concurrent execution and reliable state preservation across child turns.
- **Unified permission & role model** – Requests to collapse Ask / Auto‑Review / Full Access into one contract (#4412) and standardise agent roles to Planner / Worker / Reviewer / Verifier (#3934) reflect a desire for clarity and predictability.
- **Provider‑neutral routing** – Removing DeepSeek‑specific fallbacks (#4644), enforcing exact route offerings (#185), and adding provider‑specific support (TelecomJS #4370, Moonshot/Kimi #4613) indicate the community expects a pluggable multi‑provider experience.

---

## Developer Pain Points

1. **UI performance regressions** – The Enter‑key lag (#4605) and missing scroll for long output (#4603) have been unfixed across multiple versions, hurting daily workflow.
2. **Windows‑specific reliability** – Process leaks from hooks (#4489), setup wizard persistence (#4604), and keycap rendering corruption (#4479 / PR #4510) remain recurring pain points.
3. **Permission modal fatigue** – Users report too many approval modals; the community strongly supports making Auto‑Review genuinely non‑modal (#4626) without sacrificing security.
4. **Setup & configuration friction** – First‑run wizard reappearing, missing `--no-project-config` for CI, and provider URL rendering not clickable (#4643) add unnecessary overhead.
5. **Cross‑compile and platform gaps** – HarmonyOS build requires manual patches (#4566), and Moonshot’s MFJS schema compatibility creates tool‑call failures (#4613).

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/boom7sss/agents-radar).*