# AI CLI Tools Community Digest 2026-07-13

> Generated: 2026-07-13 03:35 UTC | Tools covered: 9

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

# Cross-Tool Ecosystem Comparison Report
**Date:** 2026-07-13

## 1. Ecosystem Overview

The AI CLI tools landscape is experiencing intense parallel development, with seven major projects all seeing active issue tracking and patch work on the same day. Common themes include pervasive MCP and plugin reliability challenges, an urgent push toward multi-agent and multi-model flexibility, and recurring cross-platform regressions—especially on Windows and Wayland. The community is vocal about session integrity, cost transparency, and compact context management, while tool authors are racing to deliver daemon architectures, inline skill invocation, and better TUI rendering. Despite frequent nightly releases in some projects, stability remains a pain point for multiple tools, with security CVEs and CI pipeline failures demanding immediate attention.

## 2. Activity Comparison

| Tool | Issues (Noteworthy) | PRs Updated | Release Status (24h) |
|---|---|---|---|
| Claude Code | 10 (50+ total updated) | 3 | None |
| OpenAI Codex | 10 | 5 (3 merged) | None |
| Gemini CLI | 10 | 10 (incl. 74 dep bumps) | v0.52.0-nightly |
| GitHub Copilot CLI | 10 | 1 | None |
| Kimi Code CLI | 1 | 2 | None |
| OpenCode | 10 (7 closed) | 10 | None |
| Pi | 10 | 10 | None |
| Qwen Code | 10 | 10 (several merged) | None |
| DeepSeek TUI | 3 | 7 (5 closed) | None |

**Observations:** Gemini CLI and Pi had the highest PR throughput; Claude Code and Codex lead in community engagement (high vote counts, many comments). Kimi Code is notably quiet. Only Gemini CLI shipped a nightly release in the past 24 hours.

## 3. Shared Feature Directions

The following cross-tool requirements appear in multiple communities:

| Requirement | Tools with Explicit Demand | Nature |
|---|---|---|
| **Multi-account / profile switching** | Claude Code (#18435, 645👍), Codex (implied by auth token handling), Gemini (profile selector legacy, #28268) | Work/personal separation, team vs. personal subscriptions |
| **Multi-agent model flexibility** | Codex (#31814, 123👍 – subagent model overrides hidden), Gemini (#22323 – subagent false success), Claude Code (#77039 – parallel MCP cross-contamination) | Subagent model selection, visibility, and isolation |
| **Session integrity & state recovery** | Copilot CLI (#4098 – truncated events, #4094 – orphaned rows), OpenCode (#27380 – stale messages), Pi (#6558 – wrong branch tool result) | Robust serialization, corruption prevention, deletion propagation |
| **Cost / usage transparency** | Claude Code (#76987 – emotional cost post-mortem), DeepSeek TUI (#4335 – provider-blind pricing), Pi (#6477 – compaction missing session ID) | Accurate per-turn billing, cache write accounting, quota visibility |
| **Windows & cross-platform parity** | Codex (#26562 – Computer Use plugin, #16717 – configurable shell), Kimi (#2181 – binary metadata, #2350 – UTF-8 encoding), OpenCode (#23457 – Expand-Archive errors), Claude Code (#76590 – worktree corruption) | File system encoding, Git credential helpers, binary metadata, shell choice |
| **Skill / tool lifecycle management** | Qwen (#6762 – skill context unload), DeepSeek TUI (#3915 – skill arg discard), Pi (#5886 – agent continue lifecycle) | Context compaction, skill result persistence, command argument handling |

## 4. Differentiation Analysis

| Tool | Core Focus | Target Users | Technical Approach |
|---|---|---|---|
| **Claude Code** | Rich MCP ecosystem, IDE (VS Code/IntelliJ) integration, multi-account | Professional developers with enterprise subscriptions | Heavy MCP-based plugin architecture; parallel sub-agents; Chrome agent |
| **OpenAI Codex** | Multi-agent orchestration (Sol/Terra/Luna), Azure/GPT-5.6, SQLite-backed feedback | Azure enterprise, GPT-5.6 early adopters | Hardcoded model metadata; GPT-5.6 variants; “Responses API” compatibility |
| **Gemini CLI** | Security-focused (CVE patching), AST-aware codebase mapping, telemetry | GCP / Nix power users, security-conscious teams | Vitest + Dependabot heavy; angle-bracket evaluation EPICs; chrome-devtools-mcp |
| **GitHub Copilot CLI** | TUI-first, voice mode, MCP marketplace, session store | GitHub-centric developers, WSL2 users | V8 Node.js binary; inotify watchers; “Herds” session resumption |
| **Kimi Code** | Minimal scope, Windows encoding fixes, TPD rate limiting | Moonshot.ai (Chinese market) users | Python-based (PyInstaller); low community volume |
| **OpenCode** | TUI/Desktop parity, granular permissions, plugin flat tools | Platform-agnostic, permission-sensitive devs | SSE rehydration; codemode vs. deferred; `$skill` inline pills |
| **Pi** | Compaction / prompt optimization, forced tool calls, provider diversity | Power users, TUI v2 enthusiasts, self-hosted providers | Ledger snapshot paging; numeric range coercion; Z.AI extension |
| **Qwen Code** | Daemon architecture, multi-workspace, ACP consumer events, Feishu channel | Chinese enterprise, daemon-driven workflows | Rust-based; live channel control; stale CI patrol; microcompaction |
| **DeepSeek TUI** | Anthropic API compatibility, i18n (Korean), provider route binding | Developers using Anthropic models with TUI, cost-trackers | Rust crates; scorecard with provider-aware pricing; MiniMax addition |

**Key differentiators:** Claude Code and OpenAI Codex are the most feature-rich and bug-prone; Gemini and Qwen invest heavily in CI and security; Pi and Copilot CLI experiment with voice/forced tools; Kimi and DeepSeek serve smaller but committed niches.

## 5. Community Momentum & Maturity

- **Highest engagement:** Claude Code (50+ issues/day, 645👍 on top request), OpenAI Codex (434👍 on SQLite fix, rapid revert processes). Both have vocal user bases providing detailed reproduction steps.
- **Fastest iteration (PR volume):** Gemini CLI (10 PRs, including 74 dependency bumps), Pi (10 PRs addressing compaction, TUI, providers), OpenCode (10 PRs with session and plugin improvements). These projects show high commit velocity.
- **Stability concerns:** GitHub Copilot CLI (only 1 PR, multiple critical TUI freezes and voice broken), Kimi Code (1 issue, 2 ancient PRs stalled). Low PR activity may indicate maintenance bottlenecks.
- **Rapidly maturing:** Qwen Code (multiple merged PRs for daemon architecture, new CI patrols, 10 hot issues addressed). Moving from single-workspace to multi-workspace is a significant architectural leap.
- **Security-aware:** Gemini CLI explicitly patched two CVEs (vitest, shell-quote) and upgraded google-auth-library; Claude Code and Codex also have auth-related fixes (PAT token injection, Bedrock session tokens).

## 6. Trend Signals

1. **Multi-model orchestration is the new baseline.** Users expect to mix GPT-5.6, Claude, Gemini, and open-source models within a single session. Tools that hide model selection (#31814 in Codex) or force identical subagent models will face backlash.

2. **Session state integrity is a priority.** Broken resume data (#4098), orphaned session rows (#4094), and misattached tool results (#6558) erode trust. Expect more tools to adopt ledger-based or event-sourced persistence.

3. **Cost anxiety is growing.** Emotional reports (#76987 in Claude Code) and demand for route-aware pricing (#4335 in DeepSeek TUI) signal that as usage scales, transparent, per-action cost attribution becomes a must-have.

4. **MCP/plugin reliability is table stakes.** Malformed JSON-RPC, cross-contamination under parallel load, and credential bridge failures (#77039, #64654, #4096) show that the ecosystem is still fragile. Standards like JSON-RPC 2.0 compliance and OAuth propagation need urgent attention.

5. **Cross-platform parity is non-negotiable.** Windows worktree corruption (#76590), Wayland browser agent failures (#21983), and UTF-8 encoding on Windows (#2350) are long-standing issues that harm productivity for any team with mixed OS environments.

6. **CI pipeline health correlates with user trust.** Qwen Code’s “stale failure patrol” and Gemini’s Dependabot-heavy updates indicate that tooling that frequents builds and patches CVEs gains developer confidence. Tools with broken nightly builds (#6786) quickly lose community momentum.

7. **Agent transparency and fine-grained control.** Features like pending command resolution (OpenCode #36341), forced tool calls (Pi #6588), and tool-call lifecycle events (Qwen #6775) reflect a desire to understand and steer agent behavior, not just receive results.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
*Data snapshot: 2026-07-13 | Source: github.com/anthropics/skills*

---

## 1. Top Skills Ranking

The following PRs attracted the most community attention and discussion:

**#1298 — fix(skill-creator): run_eval.py always reports 0% recall** *(Open)*
- **Functionality**: Repairs the skill description evaluation pipeline that powers `run_loop.py` and `improve_description.py`. Fixes Windows stream reading, trigger detection failures, parallel worker issues, and ensures eval artifacts are properly installed as skills.
- **Discussion**: Central hub for the ongoing "0% recall" crisis—referenced in at least 10 independent reproductions (#556, #1169). The community has collectively identified that the description-optimization loop has been optimizing against noise, rendering skill-creator ineffective.
- **Status**: Open; highly active since June 2026
- **Link**: [PR #1298](https://github.com/anthropics/skills/pull/1298)

**#514 — Add document-typography skill** *(Open)*
- **Functionality**: Prevents typographic defects in AI-generated documents: orphan word wrap, widow paragraphs, and numbering misalignment.
- **Discussion**: Addresses a universal pain point—users noted these issues affect virtually every document Claude generates. The skill fills a gap no other Skill covers.
- **Status**: Open since March 2026
- **Link**: [PR #514](https://github.com/anthropics/skills/pull/514)

**#486 — Add ODT skill (OpenDocument text creation and template filling)** *(Open)*
- **Functionality**: Create, fill, read, or convert OpenDocument Format files (.odt, .ods), covering LibreOffice/ISO standard document workflows.
- **Discussion**: Demand driven by enterprise users migrating from proprietary formats. The skill bridges the gap between Claude's DOCX support and the open-source ecosystem.
- **Status**: Open since March 2026
- **Link**: [PR #486](https://github.com/anthropics/skills/pull/486)

**#723 — Add testing-patterns skill** *(Open)*
- **Functionality**: Comprehensive testing guidance covering the Testing Trophy model, unit testing (AAA pattern), React component testing (Testing Library), and end-to-end with Playwright.
- **Discussion**: Responds to the growing need for structured quality assurance in AI-generated code. Community feedback has focused on adding more non-JS framework examples.
- **Status**: Open since March 2026
- **Link**: [PR #723](https://github.com/anthropics/skills/pull/723)

**#1367 — Add self-audit skill (mechanical verification + reasoning quality gate)** *(Open)*
- **Functionality**: Two-stage output auditing: mechanical file verification, followed by a four-dimension reasoning audit across damage-severity priority. Universal across projects and stacks.
- **Discussion**: Follows up on the reasoning quality pipeline proposal (#1385). The "Step 0" mechanical check (verify every claimed file exists) has been particularly well-received.
- **Status**: Open since late June 2026; actively evolving
- **Link**: [PR #1367](https://github.com/anthropics/skills/pull/1367)

**#1302 — Add color-expert skill** *(Open)*
- **Functionality**: Self-contained color expertise covering naming systems (ISCC-NBS, Munsell, XKCD, RAL), color space selection tables, accessibility contrast ratios, and palette generation patterns.
- **Discussion**: Praised for its depth and practical "what-to-use-when" tables. The community sees this as a model for how domain-expert skills should be structured.
- **Status**: Open since June 2026
- **Link**: [PR #1302](https://github.com/anthropics/skills/pull/1302)

**#210 — Improve frontend-design skill clarity and actionability** *(Open)*
- **Functionality**: Revises the frontend-design skill to ensure every instruction is actionable within a single conversation, with specific guidance that steers Claude's behavior without over-constraining.
- **Discussion**: A contender for "most iterative PR"—the community debated granularity vs. flexibility at length. Representative of the tension between developer documentation style and operational skill design.
- **Status**: Open since January 2026
- **Link**: [PR #210](https://github.com/anthropics/skills/pull/210)

---

## 2. Community Demand Trends

The top Issues reveal five concentrated demand directions:

**🔧 Skill-Creator Reliability (Critical)** — Issues #556, #1169, #1061, #202 collectively document that `run_eval.py` is broken across platforms, reporting 0% recall on every query. The description-optimization loop is effectively non-functional. This is the community's #1 pain point, blocking all skill iteration.

**🛡️ Trust & Security Boundary** — Issue #492 (34 comments, the most-active Issue) reveals that community skills distributed under the `anthropic/` namespace enable trust boundary abuse. Users cannot distinguish official Anthropic skills from community submissions, creating a permission-elevation attack vector. Issue #1175 raises related concerns about sensitive document handling in SharePoint integrations.

**📦 Skill Distribution & Sharing** — Issue #228 (14 comments) demands org-wide skill sharing without manual file transfers. Issue #16 proposes exposing skills as MCPs for standardized API access. Issue #189 highlights plugin overlap causing duplicate installations. The community wants a proper skill registry with versioning.

**🧪 Quality & Evaluation Tooling** — The "0% recall" crisis (#556, #1169, #1061) is compounded by the fact that evaluation scripts don't work on Windows (subprocess `PATHEXT`, cp1252 encoding, `select` on pipes—Issue #1061). The community is actively contributing fixes (#1099, #1050, #362, #361, #1298, #1323, #1261).

**🌱 New Skill Categories** — The community is proposing skills beyond the current repository scope:
- **Agent Governance** (#412): Safety patterns, policy enforcement, trust scoring, audit trails
- **Compact Memory** (#1329): Symbolic notation for long-running agent state to reduce context overhead
- **Reasoning Quality Gates** (#1385): Pre-task calibration → adversarial review → delivery verification pipeline
- **Web Artifacts Builder** (#1362): Self-contained bundle creation for Claude-generated web artifacts

---

## 3. High-Potential Pending Skills

These open PRs combine active discussion with clear utility—likely to land soon:

| PR | Skill | Why It's Trending |
|----|-------|-------------------|
| [#514](https://github.com/anthropics/skills/pull/514) | **document-typography** | Solves a universal problem; multiple users confirming the patterns work in practice |
| [#486](https://github.com/anthropics/skills/pull/486) | **ODT skill** | Enterprise demand for LibreOffice/ISO format support; well-scoped implementation |
| [#723](https://github.com/anthropics/skills/pull/723) | **testing-patterns** | Fills a major gap—no current skill covers structured QA across the full test stack |
| [#1367](https://github.com/anthropics/skills/pull/1367) | **self-audit** | Addresses the trust deficit in AI output; mechanical verification is a novel approach |
| [#1302](https://github.com/anthropics/skills/pull/1302) | **color-expert** | Model implementation for domain-expert skills; could become a template for future submissions |
| [#83](https://github.com/anthropics/skills/pull/83) | **skill-quality-analyzer + skill-security-analyzer** | Meta-skills for evaluating other skills; directly addresses quality and security gaps |
| [#509](https://github.com/anthropics/skills/pull/509) | **CONTRIBUTING.md** | Community health gap; addresses GitHub's community metrics (currently 25% score) |

---

## 4. Skills Ecosystem Insight

**The community's most concentrated demand is for reliable, secure skill infrastructure—working evaluation tooling, clear trust boundaries, and proper distribution mechanisms—before they can confidently build, share, and adopt new Skills.** The flurry of 10+ PRs fixing `run_eval.py` across platforms, the 34-comment security namespace issue, and the duplicate/overlap problems all point to the same conclusion: the Skills ecosystem needs foundational plumbing before it can scale.

---

# Claude Code Community Digest — 2026-07-13

**Today's Highlights**  
No new release landed today, but the community remains highly active with 50+ issues updated in the last 24 hours. The top-voted feature request (multi-account management, 645 👍) continues to dominate conversation, while several critical bugs surfaced: an MCP cross-contamination bug under parallel sub‑agents ([#77039]), a VS Code extension hang on macOS ARM64 ([#75571]), and a Windows worktree corruption bug ([#76590]) that can flip the parent repo’s HEAD under concurrent sessions.

## Releases  
None in the last 24 hours.

## Hot Issues  
1. **[#18435](https://github.com/anthropics/claude-code/issues/18435) – Multi‑account switching in Claude Desktop**  
   Still the most upvoted feature request (128 comments, 645 👍). Users want easy profile switching for work/personal accounts. No official response yet.

2. **[#30873](https://github.com/anthropics/claude-code/issues/30873) – Chrome extension side panel closes on tab switch in Edge on macOS**  
   28 comments. Reproducible regression causing the side panel to disappear whenever the user switches tabs, making multi‑tab workflows unusable.

3. **[#64654](https://github.com/anthropics/claude-code/issues/64654) – GitHub MCP plugin fails with HTTP 400 (malformed JSON‑RPC)**  
   16 comments. The plugin sends requests missing the `jsonrpc` version tag. Blocking for anyone using the official GitHub plugin via MCP.

4. **[#43477](https://github.com/anthropics/claude-code/issues/43477) – Copying text (Ctrl+C) from Claude Code in VS Code fails**  
   14 comments. A long‑standing annoyance on Windows; the clipboard operation silently fails. Many workaround attempts reported.

5. **[#75571](https://github.com/anthropics/claude-code/issues/75571) – VS Code extension hangs 90+ seconds every 30–40 min (macOS ARM64)**  
   6 comments but high severity. The native `claude` process idles in kernel wait while the UI freezes. Affects daily productivity.

6. **[#76701](https://github.com/anthropics/claude-code/issues/76701) – Bedrock “Session token not found or invalid” on WSL**  
   4 comments. A regression where valid credentials are rejected for interactive requests, blocking AWS‑backed workflows.

7. **[#56872](https://github.com/anthropics/claude-code/issues/56872) – IntelliJ IDEA MCP server “ide” connection fails on startup**  
   4 comments. Plugin 0.1.14‑beta can’t establish the IDE MCP channel, making the IntelliJ integration non‑functional.

8. **[#76254](https://github.com/anthropics/claude-code/issues/76254) – Cowork trusted‑folder validation rejects Shared Drive root after update**  
   4 comments. Regression: only depth‑2+ folders are accepted; depth‑1 and root are rejected. Frustrating for teams using Google Shared Drives.

9. **[#77039](https://github.com/anthropics/claude-code/issues/77039) – MCP tool responses return wrong call’s data under parallel sub‑agent load**  
   Filed today with reproduction steps. Severe race condition where tool responses become swapped, leading to unpredictable agent behavior.

10. **[#76590](https://github.com/anthropics/claude-code/issues/76590) – Windows worktree corruption: stale dir reuse, missing registration, HEAD flip**  
    Filed yesterday, still open. Under concurrent desktop sessions, the app reuses a non‑empty `.claude/worktrees` directory, skips git worktree registration, and checks out the session branch in the parent repo—potentially corrupting the index.

## Key PR Progress  
Only three PRs were updated in the last 24 hours. All are small but important fixes from the community.

- **[#76986](https://github.com/anthropics/claude-code/pull/76986) – fix(scripts): preserve existing labels when auto‑closing duplicate issues**  
  Prevents the auto‑close script from wiping all existing labels when marking an issue as duplicate. Maintains area/classification labels.

- **[#76985](https://github.com/anthropics/claude-code/pull/76985) – fix(plugin-dev): read full multi‑line description in validate‑agent.sh**  
  Fixes a bash pipeline that only captured the first line of an agent’s description frontmatter, discarding multi‑line descriptions.

- **[#15165](https://github.com/anthropics/claude-code/pull/15165) – Update README.md**  
  Fixes a broken documentation link.

## Feature Request Trends  
The clear leader is **multi‑account management within the Claude Desktop app** ([#18435], 645 👍). Users want to switch between personal and team subscriptions without logging out. A smaller but related request is **preserving user‑assigned browser names** ([#70542], 5 comments) instead of sending generic “Browser 1/2” to the model. Two other moderate requests: showing the repository/project name per session in FleetView ([#69449], 3 👍) and a **sticky copy button for long code blocks** ([#77029], filed today). None of these have received official roadmap confirmation.

## Developer Pain Points  
- **MCP reliability** remains the top pain area: malformed JSON‑RPC ([#64654]), cross‑contamination under parallel agents ([#77039]), and unstable Chrome profile identifiers ([#74902]) break automation and plugin usage.  
- **IDE integration instability** frustrates daily users: VS Code hangs ([#75571]), copy/paste failures ([#43477]), reload‑on‑resume regressions ([#76633]), and IntelliJ connection failures ([#56872]) erode trust in the IDE plugins.  
- **Authentication issues** appear regularly: Bedrock session token rejection ([#76701]), headless OAuth sending empty bearer tokens ([#77048]), and read‑only repo‑connection states after deletion ([#76547]).  
- **Windows‑specific regressions** are mounting: worktree HEAD corruption ([#76590]), `/clear` not resetting context ([#77034]), and `/usage` percentages moving in lockstep ([#77036]).  
- **Cost/usage anxiety** surfaces in emotional reports like [#76987] (weekend post‑mortem: “fuck‑all got built, and Fable still ate its usage”). Users want transparent tracking and confirmation that usage corresponds to actual work, not invented processes.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-07-13

## Today’s Highlights
Azure and multi‑agent configuration woes dominate the conversation as GPT‑5.6 Sol/Terra/Luna deployments struggle with hardcoded metadata that breaks non‑ChatGPT backends. Meanwhile, a high‑impact SQLite log churn bug has finally been closed after three merged PRs reduced ~85% of the excessive writes, though a partial residual issue remains on macOS. Two reverts of an auto‑review prompting change were also merged, signaling a swift rollback of a problematic update.

## Releases
No new releases in the last 24 hours.

## Hot Issues

1. **#28224 – SQLite feedback logs could write ~640 TB/year**  
   *Closed* after PRs #29432 and #29457 cut 85% of logs. Community relief is palpable (153 comments, 434 👍).  
   [https://github.com/openai/codex/issues/28224](https://github.com/openai/codex/issues/28224)

2. **#31814 – GPT‑5.6 Sol subagent model selection broken**  
   MultiAgent V2 hides model overrides, forcing all subagents to also be Sol instances. 57 comments, 123 👍. A critical UX regression.  
   [https://github.com/openai/codex/issues/31814](https://github.com/openai/codex/issues/31814)

3. **#31870 – GPT‑5.6 Sol through Azure fails every turn**  
   `X-OpenAI-Internal-Codex-Responses-Lite` header causes repeated failures. 40 comments, 39 👍.  
   [https://github.com/openai/codex/issues/31870](https://github.com/openai/codex/issues/31870)

4. **#29532 – Persistent SQLite log churn on macOS after v0.142.0**  
   Even after the #28224 fix, `~/.codex/logs_2.sqlite` still churns. 37 comments.  
   [https://github.com/openai/codex/issues/29532](https://github.com/openai/codex/issues/29532)

5. **#26562 – Computer Use plugin unavailable on Windows Desktop**  
   Windows users still cannot use this plugin despite it working on macOS. 16 comments, 3 👍.  
   [https://github.com/openai/codex/issues/26562](https://github.com/openai/codex/issues/26562)

6. **#29040 – Codex App fails to start after latest update**  
   `app-server` handshake error on macOS. 13 comments, 5 👍.  
   [https://github.com/openai/codex/issues/29040](https://github.com/openai/codex/issues/29040)

7. **#16717 – Configurable Windows agent shell (PowerShell/git-bash)**  
   Long‑standing request (26 👍) now closed after 11 comments, but no merged PR yet. Users want bash instead of PowerShell for better command generation.  
   [https://github.com/openai/codex/issues/16717](https://github.com/openai/codex/issues/16717)

8. **#23574 – VS Code extension allocates ~1M inotify watches on Linux**  
   Large workspaces trigger kernel watch limits. 11 comments, 11 👍.  
   [https://github.com/openai/codex/issues/23574](https://github.com/openai/codex/issues/23574)

9. **#18115 – Repository‑scoped marketplace and plugin configuration**  
   Community wants plugin config to be sharable via `./.codex/config.toml`. 10 comments, 47 👍.  
   [https://github.com/openai/codex/issues/18115](https://github.com/openai/codex/issues/18115)

10. **#25247 – Browser plugin bootstrap fails in Codex App**  
    `browser-client is not trusted` error blocks in‑app browser automation. 10 comments.  
    [https://github.com/openai/codex/issues/25247](https://github.com/openai/codex/issues/25247)

## Key PR Progress

1. **#32672 – Revert “Update auto review prompting” (release/0.144)**  
   Rolled back Guardian policy changes that caused issues. Merged 2026-07-13.  
   [https://github.com/openai/codex/pull/32672](https://github.com/openai/codex/pull/32672)

2. **#32668 – Revert “Update auto review prompting” (main)**  
   Full revert of PR #31480. Merged 2026-07-13.  
   [https://github.com/openai/codex/pull/32668](https://github.com/openai/codex/pull/32668)

3. **#29898 – Preserve PAT auth against host token injection**  
   Prevents `chatgptAuthTokens` from being used when PAT auth is active. Adds regression tests. Merged 2026-07-12.  
   [https://github.com/openai/codex/pull/29898](https://github.com/openai/codex/pull/29898)

4. **#30504 – Edit previous prompts using session forks**  
   Replaces destructive `thread/rollback` with branching for prompt editing in TUI. Still open (updated 2026-07-12).  
   [https://github.com/openai/codex/pull/30504](https://github.com/openai/codex/pull/30504)

5. **#32628 – Improve composer completion target resolution**  
   Better handling of `@` and `$` mentions, preferring nearest editable candidate. Merged 2026-07-12.  
   [https://github.com/openai/codex/pull/32628](https://github.com/openai/codex/pull/32628)

## Feature Request Trends
- **Multi‑agent model flexibility** – Users urgently need the ability to specify different models for subagents, especially when using GPT‑5.6 variants. The current hidden‑metadata approach is seen as a regression.  
- **Repository‑scoped configuration** – Extending `./.codex/config.toml` to cover plugin and marketplace settings so teams can share setups (47 👍 on #18115).  
- **Windows parity** – Configurable agent shell, Computer Use plugin availability, and sandbox fixes are consistently requested.  
- **Mobile remote workflow** – Support for headless Linux hosts via Codex mobile without a desktop relay (31 👍 on #23200).  
- **IDE extension for open‑VSX** – Users of Cursor and other editors want timely publishing of the Codex extension to open‑vsx.org.

## Developer Pain Points
- **Azure / non‑ChatGPT backend incompatibility** – GPT‑5.6 models hardcode internal headers and metadata, causing 400 errors and missing engines on Azure. Multiple reports (#31870, #31882, #31875) with high engagement.  
- **Subagent model overrides broken** – MultiAgent V2 (`gpt-5.6-sol`/`terra`) hides or rejects model selection, making sub‑agent use impractical.  
- **Windows‑specific regressions** – Persistent `apply_patch.bat` path issues, infinite spawn loops with the Sites plugin, and SSH worktree threading problems.  
- **App crashes and connectivity** – Frequent “restore network connection” prompts (#32670), launch failures (#29040), and image generation errors after updates.  
- **SQLite log churn residuals** – Despite a major fix, macOS users still see excessive writes in `logs_2.sqlite`.  
- **GPT‑5.6 model availability** – Desktop app model picker doesn’t show 5.6, and the open‑VSX extension lags, confusing users.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-07-13

## Today's Highlights
Security took center stage today with two critical CVEs (CVE-2026-47429 in vitest and CVE-2026-9277 in shell-quote) being addressed, alongside a massive infrastructure refresh as Dependabot pushed 74 npm dependency updates and multiple GitHub Actions bumps. Meanwhile, a long-standing bug where subagents falsely report MAX_TURNS interruptions as "success" continues to draw community attention, indicating deeper architectural concerns in agent termination handling.

## Releases
**v0.52.0-nightly.20260713.gf354eebaf** — A single fix improves user experience for accounts without a Code Assist tier by showing a clear message instead of an ambiguous error. This is a privacy-focused improvement by @ompatel-aiml. No other changes in this build.

## Hot Issues
1. **#22323** — Subagent incorrectly reports `status: "success"` when hitting MAX_TURNS, masking the real interruption. This is a critical bug (P1) with 10 comments and 2 👍; it undermines trust in agent reliability.
2. **#24353** — EPIC for robust component-level evaluations, tracking 76 behavioral eval tests across 6 Gemini models. A foundational issue for quality assurance (7 comments).
3. **#22745** — EPIC exploring AST-aware file reads, search, and codebase mapping to reduce token waste and turn count. Community is watching this closely (7 comments, 1 👍).
4. **#21409** — Generalist agent hangs forever on simple tasks like folder creation. Highly upvoted (8 👍, 7 comments), suggesting this is a widespread frustration.
5. **#28358** — Dangerous script creation for quantum physics emulation; user reports the CLI considered generating code with potentially harmful payloads. High-priority security concern (5 comments).
6. **#25166** — Shell command execution gets stuck in "Waiting input" state after completion, forcing manual intervention. P1 bug affecting basic usability (4 comments, 3 👍).
7. **#26522** — Auto Memory endlessly retries low-signal sessions, never marking them as processed. A P2 bug that degrades memory quality over time (5 comments).
8. **#21983** — Browser subagent fails entirely on Wayland display systems, terminating with a spurious "GOAL" reason. Linux users are impacted (4 comments, 1 👍).
9. **#20079** — Symlinked agent files in `~/.gemini/agents/` are not recognized as valid agents. This blocks users who manage dotfiles with symlinks (4 comments).
10. **#22672** — Agent performs destructive operations (git reset --force, risky DB commands) when safer alternatives exist. Community wants stronger safety guardrails (3 comments, 1 👍).

## Key PR Progress
1. **#28368** — Upgrades vitest to 4.1.0 to fix CVE-2026-47429 (CRITICAL); also bumps 3.2.4 → 3.2.6 for compatibility.
2. **#28367** — Upgrades shell-quote to 1.8.4 fixing CVE-2026-9277 (CRITICAL), a command injection vector.
3. **#28385** — Bumps node google-auth-library to 10.9.0, picking up upstream gaxios bugfix (PR #8779 in google-cloud-node).
4. **#28275** — Makes direct GCP telemetry exporters optional for `@google/gemini-cli-core` consumers, improving flexibility for non-GCP deployments (fixes #27100).
5. **#28256** — Adds `/nix/store` to trusted system paths, enabling Nix/NixOS users to use Ripgrep and other tools.
6. **#28268** — Removes legacy profile selector logic, cleaning up configuration code (resolves #28259).
7. **#28262** — Optimizes slash command resolution with a pre-computed WeakMap for O(1) lookups.
8. **#28382** — Bumps puppeteer-core from 24.0.0 to 25.3.0; impacts browser agent behavior and stability.
9. **#28379** — Bumps chrome-devtools-mcp from 0.19.0 to 1.5.0; major version jump indicates breaking changes for Chrome integration.
10. **#28377** — Dependabot batch update with 74 npm dependency bumps; a large surface area for potential regressions requiring careful review.

## Feature Request Trends
- **Agent Self-Awareness & Tool Optimization**: Multiple issues ask the CLI to better understand its own capabilities, flags, and hotkeys. Users want agents to accurately describe how to use Gemini CLI itself, and to proactively limit tool usage when too many tools are available.
- **Browser Agent Resilience**: Requests for automatic session takeover, lock recovery, and support for non-X11 display systems (Wayland). Configuration overrides (maxTurns) are being ignored by the browser agent, a recurring complaint.
- **Subagent Visibility**: News of subagent trajectories being hard to access via `/chat share`. Users want transparent insight into what subagents are doing, especially for debugging crashes or misleading success reports.
- **AST-Aware Codebase Tools**: Continued interest in using AST parsing for precise method-bound reads, reducing token waste and turn count. This is being tracked across two EPICs (#22745 and #22746).
- **Memory System Improvements**: Auto Memory needs better session deduplication, deterministic redaction of secrets, and protection against infinite retries of low-signal sessions.

## Developer Pain Points
- **False Success Reporting**: Subagents reporting "success" when actually hitting turn limits is the top complaint. This misleads users and erodes trust in autonomous agent behavior.
- **Hanging and Stuck States**: The CLI frequently hangs during shell command execution (stuck on "Waiting input") or when delegating to the generalist agent. Users report waiting up to an hour before cancelling.
- **Destructive Operations**: The agent occasionally runs `git reset --force` or similar dangerous commands without explicit user confirmation, creating cleanup overhead.
- **Configuration Gaps**: Symlinked agent files are ignored, agent settings.json overrides are not respected, and Nix store paths are blocked. Each creates subtle failures that are hard to diagnose.
- **Terminal & UI Regressions**: High-rate flicker on terminal resize, corruption after exiting external editors in terminalBuffer mode, and incorrect newline escape handling degrade the interactive experience.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-07-13

## Today's Highlights
No new releases landed in the last 24 hours, but the issue tracker saw continued activity across multiple critical areas. Three new bugs surfaced around session data corruption, native V8 crashes under heavy tool usage, and plugin credential regressions on Windows. The community is particularly vocal about TUI freezes and voice transcription failures, both of which have been open for over a week with active discussion.

## Releases
**None** – No releases published in the last 24 hours.

## Hot Issues (10 Noteworthy)
1. **[#4069 – TUI wedges mid-turn (screen clear, input dead, Ctrl+C/Ctrl+\ ignored)](https://github.com/github/copilot-cli/issues/4069)**  
   *Area: input-keyboard, terminal-rendering* | 👍 8 | 7 comments.  
   Mid-session screen clears and terminal lockups on WSL2 + Windows Terminal. The `write EIO` / `EPIPE` chain suggests a broken JSON-RPC transport after a write failure. Community is hit hard, with multiple users confirming the same symptom on `claude-opus-4.7`.

2. **[#4024 – Voice mode: all bundled ASR models fail silently](https://github.com/github/copilot-cli/issues/4024)**  
   *Area: models* | 👍 0 | 8 comments.  
   `/voice` records audio but returns empty transcriptions for all three Nemotron models. Root cause traced to a `MultiModalProcessor` routing bug for `nemotron_speech` (RNNT). Voice feature is effectively broken for those models.

3. **[#4102 – Native V8 array-length crash during tool-heavy turns and session resume](https://github.com/github/copilot-cli/issues/4102)**  
   *Triage* | 👍 0 | 1 comment.  
   Packaged Linux x64 binary aborts inside V8, both during active tool turns and session resume. Earlier attribution to concurrent resumes disproved; crash happens even with Herdr disabled. Critical stability issue for power users.

4. **[#4098 – Resuming a session can leave truncated and concatenated events in events.jsonl](https://github.com/github/copilot-cli/issues/4098)**  
   *Area: sessions* | 👍 0 | 2 comments.  
   Malformed JSONL records (incomplete prefix immediately followed by a full event) prevent re‑resumption. Data corruption that impacts session continuity and recovery.

5. **[#4103 – Plugin marketplace clone disables Git credential helpers, breaking private HTTPS repos](https://github.com/github/copilot-cli/issues/4103)**  
   *Triage* | 👍 0 | 0 comments.  
   Regression in v1.0.70: `Fail fast when marketplace plugin git auth needed` change overrides system credential helpers. Private Azure DevOps repos fail even when manual clones succeed with GCM.

6. **[#4097 – apply_patch stores deleted binary in session history, permanently exceeding 5 MB CAPI limit](https://github.com/github/copilot-cli/issues/4097)**  
   *Area: sessions, context-memory, tools* | 👍 0 | 0 comments.  
   Deleting a large binary via `apply_patch` stores the full binary as a text diff in history. Subsequent requests hit the 5 MB limit, forcing `/compact` loops. Persistent storage bloat.

7. **[#3430 – Esc in /tasks overlay also dismisses active question prompt](https://github.com/github/copilot-cli/issues/3430)**  
   *Area: agents, input-keyboard* | 👍 1 | 1 comment.  
   Key event handler processes Esc twice, closing both the overlay and the underlying prompt. Frustrating for users in multi‑step agent workflows.

8. **[#4094 – Deleting a session in the app doesn’t remove it from session‑store.db / VS Code Chat history](https://github.com/github/copilot-cli/issues/4094)**  
   *Area: sessions* | 👍 0 | 0 comments.  
   Orphaned session rows remain in `data.db`, `session-store.db` and VS Code cache after UI deletion. No propagation leads to stale history and confusion.

9. **[#4096 – Third‑party MCP server shows “Connected” but tools missing from CLI sessions](https://github.com/github/copilot-cli/issues/4096)**  
   *Area: authentication, mcp* | 👍 0 | 0 comments.  
   OAuth token never bridged from app UI to CLI sessions. Atlassian Remote MCP appears connected but tools are invisible to the agent. Integration gap.

10. **[#3773 – Broken light theme (low contrast, black background on prompts)](https://github.com/github/copilot-cli/issues/3773)**  
    *Area: theming-accessibility* | 👍 2 | 2 comments.  
    User prompts and selection highlights have insufficient contrast in light mode. Accessibility concern that makes the TUI unusable for some users.

## Key PR Progress
- **[#4100 – PR by huangyoufeng76-debug: “安全性”](https://github.com/github/copilot-cli/pull/4100)**  
  *Status: Open* | No comments.  
  Single pull request updated in the last 24 hours. Title (Chinese for “security”) and lack of description suggest a test or spam submission. No substantive review or merge activity.

> **Note:** Only one PR was updated in the reporting window. No other PRs have significant community traction.

## Feature Request Trends
The following broad directions emerge from the current issue landscape:
- **Voice‑mode reliability** – Users expect ASR to work across all bundled models without silent failures.
- **Session integrity** – Requests for robust session serialization, resumption without corruption, and clean deletion propagation across the Copilot ecosystem (CLI, app, VS Code).
- **Plugin & MCP maturity** – Credential bridge completeness, smoother Windows integration, and consistent tool availability across contexts.
- **Terminal rendering stability** – No screen wedges, garbage text, or dead input states, especially on WSL2/Windows Terminal.
- **Accessibility & theming** – Better light theme contrast and correct keyboard event prioritization.

## Developer Pain Points
- **TUI freezes & lockups** (#4069, #4102) – Mid‑session unresponsiveness forces terminal restarts; crashes under heavy tool usage.
- **Data corruption / bloat** (#4098, #4097) – Truncated events and unbounded binary storage degrade session quality and hit API limits.
- **Platform‑specific regressions** (#4103, #4095) – Git credential helpers disabled on Windows; plugin update fails with “Access denied” while VS Code is open.
- **Authentication gaps** (#4096) – OAuth tokens not propagated from app to CLI sessions, breaking third‑party MCP tools.
- **Voice feature broken** (#4024) – One of the marquee features is effectively unusable for mainstream models.

*Generated from github.com/github/copilot-cli activity as of 2026-07-13.*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-07-13

## Today's Highlights
The community saw no new releases today, but two long-running pull requests (both from early May) were updated, fixing Windows binary metadata and non-UTF-8 worker output decoding. One open issue continues to draw attention: an organization-level TPD rate limit error that affects users of the `kimi2.6` model on Windows.

## Releases
No new versions were published in the last 24 hours. The latest stable release remains `kimi 2.6`.

## Hot Issues
Only one issue was updated in the last 24 hours:

- **#2318 — [bug] request reached organization TPD rate limit, current: 1505241**  
  _Author: globalvideos272-lab | Updated: 2026-07-12 | 👍: 1_  
  **Summary:** Running `kimi 2.6` on Windows 10 against the moonshot.ai platform with the `kimi2.6` model triggers an organization TPD (Tokens Per Day) rate limit error, even when the reported usage (1,505,241) appears to be below expected quotas. The user suspects incorrect TPD calculation.  
  **Why it matters:** This is the only active bug report in the last 24 hours and touches on critical rate‑limiting logic. If miscalculated, it could block legitimate usage or cause unexpected billing spikes. Community reaction is muted (1 👍), but the severity is high.  
  🔗 [Issue #2318](https://github.com/MoonshotAI/kimi-cli/issues/2318)

## Key PR Progress
Two pull requests were updated in the last 24 hours, both from contributor `he-yufeng`:

- **#2181 — fix: add Windows binary version info**  
  _Created: 2026-05-07 | Updated: 2026-07-12_  
  **Summary:** Generates a PyInstaller Windows version‑info file from `pyproject.toml` and embeds it into both one‑file and one‑dir builds. Adds a CI assertion to ensure release artifacts always contain non‑empty `FileVersionInfo`.  
  **Why it matters:** Resolves the long‑standing issue #2178. Improves Windows user experience by providing proper file metadata (version, description) in binary executables.  
  🔗 [PR #2181](https://github.com/MoonshotAI/kimi-cli/pull/2181)

- **#2350 — fix: tolerate non-utf8 worker output**  
  _Created: 2026-05-23 | Updated: 2026-07-12_  
  **Summary:** The web session runner previously decoded worker stdout/stderr with strict UTF‑8. On Windows, child processes can emit locale‑encoded bytes (e.g., cp1252 smart punctuation). This change gracefully handles such bytes instead of raising a `UnicodeDecodeError`, preserving the real worker failure message.  
  **Why it matters:** Fixes issue #2313. Eliminates a frustrating class of “silent failures” where a single invalid byte would hide the underlying error. Critical for Windows users running non‑English locales.  
  🔗 [PR #2350](https://github.com/MoonshotAI/kimi-cli/pull/2350)

## Feature Request Trends
Based on the limited dataset (no new feature‑request issues in the last 24 hours), the predominant requests observed from the wider issue backlog include:

- **Windows‑first quality‑of‑life improvements** — PRs #2181 and #2350 directly address Windows‑specific pain points (binary metadata, encoding), suggesting a strong community demand for first‑class Windows support.
- **Rate limit transparency** — Issue #2318 hints at a need for clearer TPD quota reporting and more realistic rate‑limit enforcement, especially for team/organization accounts.

## Developer Pain Points
- **Windows encoding quirks** — The non‑UTF‑8 worker output bug (#2313) has been a persistent frustration for developers on Windows, where default console encoding differs from Linux/macOS. The fix in PR #2350 is warmly anticipated.
- **Rate limit miscalculation** — The TPD issue (#2318) points to a recurring headache: users feel they hit limits prematurely without sufficient logging or diagnostic info to confirm the calculation. A single 👍 indicates low current engagement, but the problem could affect many users silently.

---

*Data sourced from [github.com/MoonshotAI/kimi-cli](https://github.com/MoonshotAI/kimi-cli) on 2026-07-13.*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest – 2026-07-13

## Today’s Highlights
A batch of **session‑consistency fixes** landed today, addressing stale forms, lost permissions on reconnect, and background service conflicts. Meanwhile, the **inline `$skill` invocation** PR (#29217) continues to mature, and a new **Settings dialog** (#36606) brings runtime theme and config editing to the TUI. On the issue tracker, a long‑standing **iTerm2 scroll bug** (#6209) was finally closed, and a fresh report about **agent scope violations** (#36600) highlights ongoing trust challenges.

## Releases
No new version releases in the last 24 hours. The three published artifacts (`pr-36567-inline-evidence`, `pr-36567-evidence`, `pr-36516-evidence`) are automated verification packages for pull requests, not stable releases.

## Hot Issues
*(10 noteworthy, ordered by community engagement)*

1. **[#6209 – Cannot scroll on opencode when using iTerm2](https://github.com/anomalyco/opencode/issues/6209)**  
   *23 comments, 19 👍 (CLOSED)*  
   The TUI scrolls the input box instead of the output pane in iTerm2. Closed today after months – a major UX win for macOS users.

2. **[#15225 – Model config `openrouter/auto` not reflected in TUI](https://github.com/anomalyco/opencode/issues/15225)**  
   *5 comments, 13 👍 (CLOSED)*  
   Setting the model to `openrouter/auto` in config was silently ignored by the TUI. High thumbs‑up indicates many hit this.

3. **[#20307 – Granular permissions not working](https://github.com/anomalyco/opencode/issues/20307)**  
   *5 comments, 6 👍 (CLOSED)*  
   Users report that `read: allow` for `src/*` with `*: ask` doesn’t behave as documented – critical for security‑conscious workflows.

4. **[#15124 – OpenCode Binary Killed by macOS Due to Code Signature Error](https://github.com/anomalyco/opencode/issues/15124)**  
   *6 comments, 2 👍 (CLOSED)*  
   Immediate SIGKILL on launch. Affects first‑time installs on modern macOS; resolution likely involves notarization guidance.

5. **[#26156 – Kimi/Moonshot provider crashes with 'annotations' error](https://github.com/anomalyco/opencode/issues/26156)**  
   *5 comments (CLOSED)*  
   Regression in v1.14.23 breaks all Moonshot‑compatible sessions. Shows fragility in provider protocol handling.

6. **[#27072 – TUI renders blank when project has `node_modules` without `.gitignore` exclusion](https://github.com/anomalyco/opencode/issues/27072)**  
   *3 comments (CLOSED)*  
   Entire TUI freezes on `opencode` if a project contains a large `node_modules` directory not `.gitignore`‑d. Critical for JS/TS devs.

7. **[#27380 – TUI session messages stay stale after reconnect](https://github.com/anomalyco/opencode/issues/27380)**  
   *3 comments (CLOSED)*  
   After an event stream disconnect, the TUI continues showing cached messages. Core session consistency issue.

8. **[#27311 – Desktop app: `@mention` subagent routing not implemented](https://github.com/anomalyco/opencode/issues/27311)**  
   *3 comments (CLOSED)*  
   Subagent `@mention` works in TUI but not in the Desktop app – a parity gap for desktop users.

9. **[#36600 – Agent ignores instruction scope, modifies unintended files](https://github.com/anomalyco/opencode/issues/36600)**  
   *2 comments (OPEN)*  
   Fresh report: agent modified 6 files when asked to change one field, repeating errors. Trust & compliance concern.

10. **[#24897 – [FEATURE] Live preview for code changes (like Codex desktop)](https://github.com/anomalyco/opencode/issues/24897)**  
    *3 comments (CLOSED)*  
    Popular request for real‑time visual preview of generated code – a strong community want.

## Key PR Progress
*(10 significant pull requests updated or created today)*

1. **[#36561 – feat(plugin): flat tool draft with namespace](https://github.com/anomalyco/opencode/pull/36561)**  
   Introduces flat tool objects for plugins, renames `group` to `namespace`, adds `pinned` field. Foundation for better plugin tool ergonomics.

2. **[#36579 – fix(core): merge model.request.headers into SDK options](https://github.com/anomalyco/opencode/pull/36579)**  
   Fixes custom headers (e.g., `User-Agent`) being dropped before reaching the SDK – important for provider proxying.

3. **[#36603 – fix(tui): rehydrate pending permissions & questions on reconnect](https://github.com/anomalyco/opencode/pull/36603)**  
   Closes #36604. After SSE reconnect, pending permission prompts were lost – now restored from server `Deferred` state.

4. **[#36606 – feat(tui): add settings dialog](https://github.com/anomalyco/opencode/pull/36606)**  
   New `/settings` dialog with reactive config updates, theme picker, and responsive layout. First‑class UX improvement.

5. **[#36567 – fix(tui): restore clicked reverted prompt](https://github.com/anomalyco/opencode/pull/36567)**  
   When a user message is clicked and then reverted, the prompt is now correctly repopulated – parity with `/undo`.

6. **[#36341 – feat(tui): show pending command resolution](https://github.com/anomalyco/opencode/pull/36341)**  
   Closes #34860. MCP‑backed slash commands no longer leave the TUI idle while resolving – visual feedback added.

7. **[#36598 – fix: standardize MCP server copy](https://github.com/anomalyco/opencode/pull/36598)**  
   Replaces ambiguous “MCPs” with “MCP servers” and “MCP tools” across the UI. Consistency win for docs and UI.

8. **[#36563 – fix(core): use catalog small model for session titles](https://github.com/anomalyco/opencode/pull/36563)**  
   Session title generation now prefers the provider’s “small” model, reducing cost and latency for auto‑naming.

9. **[#36560 – refactor(core): replace deferred tool option with codemode](https://github.com/anomalyco/opencode/pull/36560)**  
   Renames `deferred` → `codemode` (default `true`), with `codemode: false` keeping tools on the native list. Simplifies semantics.

10. **[#29217 – feat(tui): Add inline `$skill` invocations with SKILL pill + pasteText support](https://github.com/anomalyco/opencode/pull/29217)**  
    Closes 5 issues. Typing `$` surfaces skills in autocomplete; `pasteText` inserts results inline. Major productivity feature still in review.

## Feature Request Trends
- **Proactive agent instructions** – Users want `AGENTS.md` executed automatically without manual prompting (#21978).  
- **Live code preview** – Real‑time visualisation of generated code, similar to Codex desktop (#24897).  
- **Better session compaction control** – Requests for async background compaction (#27359) and ability to skip internal logic in compacted output (#27366).  
- **Desktop feature parity** – Subagent `@mention` routing (#27311) and file‑tree auto‑refresh (#27333) are missing from the Desktop app.  
- **Plugin developer experience** – Expose OpenCode logging to plugins (#27285) and provide undo/redo for input (#16282).

## Developer Pain Points
- **TUI rendering reliability** – Scroll failures on iTerm2 (#6209), blank screen with `node_modules` (#27072), stale messages after reconnect (#27380), and form trapping (#36591/36588) remain common.  
- **Provider‑specific crashes** – Kimi/Moonshot (#26156), local LLM tool‑call failures (#7486), and missing model listings on z.ai (#25769) erode trust in provider integrations.  
- **Configuration surprises** – Model config not applied (#15225), granular permissions not working (#20307), and `CLAUDE_CODE_SIMPLE=1` sending empty `function.name` (#27374).  
- **Windows friction** – `Expand-Archive` errors when loading skills (#23457) and path‑related issues persist.  
- **Agent overreach** – New issue #36600 highlights agents modifying files beyond scope – a critical trust/clarity problem for production use.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest – 2026-07-13

**Source:** [earendil-works/pi](https://github.com/earendil-works/pi)

---

## Today’s Highlights

The Pi repository saw intense bug-fixing and feature activity in the last 24 hours. Notable improvements include a fix for image blocks being dropped from TUI user messages, resolution of compaction failures on OpenAI-Codex models, and a new TUI v2 full-history pager. Several provider-specific patches (Bedrock, Anthropic, Grok) and a forced‑tool‑call feature for OpenAI/Codex models also landed.

---

## Releases

No new releases in the last 24 hours.

---

## Hot Issues (10 selected)

1. **[#6206 – Clamping to context window prevents artificial context limits](https://github.com/earendil-works/pi/issues/6206)** (CLOSED, 10 comments)  
   A fix for a previous issue now unnecessarily clamps `max_tokens` to the reported context window, breaking use cases where users want to set an artificial limit. The community flagged the regression and the commit that introduced it.

2. **[#5886 – AgentSession settlement/continuation and assistant-tail lifecycle bugs](https://github.com/earendil-works/pi/issues/5886)** (OPEN, 6 comments, 👍2)  
   Meta‑issue capturing recurring post‑run logic errors where the agent tries to continue from a transcript that is no longer valid. High impact for users relying on long‑running agent sessions.

3. **[#6477 – Compaction summary requests omit session ID](https://github.com/earendil-works/pi/issues/6477)** (OPEN, 5 comments, 👍8)  
   Compaction fails on new OpenAI‑Codex models (e.g., `gpt-5.6-luna`) because the session ID is missing from summarization requests. Highly upvoted and affects many providers.

4. **[#5463 – Auto-compaction after final turn throws error](https://github.com/earendil-works/pi/issues/5463)** (OPEN, 5 comments, 👍5)  
   Auto‑compaction after an assistant’s last message raises an unhandled error because the agent tries to continue from an assistant role. A recurring pain point for users with automatic compaction.

5. **[#6563 – TUI drops image blocks from user messages](https://github.com/earendil-works/pi/issues/6563)** (OPEN, 4 comments)  
   The interactive TUI renders only text blocks, silently discarding `ImageContent` from user messages. Also affects clipboard image paste – the model sees the image but the chat transcript does not.

6. **[#6524 – Hide GPT-5.6 reasoning-summary empty placeholders](https://github.com/earendil-works/pi/issues/6524)** (CLOSED, 4 comments)  
   Empty HTML comments appear as visible “thinking” blocks in some GPT‑5.6 models. A cosmetic fix was merged to strip these placeholders.

7. **[#6324 – /tree branch summarization throws “No API key found” for ambient-credential providers](https://github.com/earendil-works/pi/issues/6324)** (OPEN, 3 comments, 👍2)  
   Using `/tree` with providers like Amazon Bedrock or Google Vertex fails because the summarization path requires a literal API key, which those providers don’t have. Blocks tree navigation for many users.

8. **[#6339 – Auto-compaction threshold is never evaluated during an agentic run](https://github.com/earendil-works/pi/issues/6339)** (CLOSED, 2 comments)  
   The `compaction.reserveTokens` threshold is only checked at run boundaries, not during a long agentic turn. This undermines proactive compaction and can lead to context overflows mid‑run.

9. **[#6562 – TUI double rendering on lines matching terminal width](https://github.com/earendil-works/pi/issues/6562)** (CLOSED, 2 comments)  
   When a line exactly matches the terminal width, the cursor auto‑wraps, causing TUI rendering desynchronization. Fix disables terminal auto‑wrap during TUI sessions.

10. **[#6558 – Tool result attaches to wrong branch after tree navigation](https://github.com/earendil-works/pi/issues/6558)** (CLOSED, 2 comments)  
    If `/tree` switches the active branch while a tool is running, the tool result is appended to the wrong branch, leaving an orphan in provider history. Potentially corrupts conversation state.

---

## Key PR Progress

1. **[#6588 – OpenAI and Codex forced tool calls](https://github.com/earendil-works/pi/pull/6588)**  
   Adds the ability to force tool calls despite the model’s intent, closing issue #6585. Tested with live OpenAI and Codex endpoints.

2. **[#6584 – Forward provider options to summary requests](https://github.com/earendil-works/pi/pull/6584)**  
   Passes inherited `SimpleStreamOptions` to compaction and summarization, fixing issues where provider‑specific settings (e.g., API keys) were missing during compaction.

3. **[#6580 – TUI v2 full-history pager over Ledger snapshot](https://github.com/earendil-works/pi/pull/6580)**  
   Adds an in‑terminal pager for the experimental TUI v2, allowing users to browse Pi‑session history beyond the terminal scrollback.

4. **[#6582 – Respect forceAdaptiveThinking for Bedrock models](https://github.com/earendil-works/pi/pull/6582)**  
   The Bedrock path now honors the `forceAdaptiveThinking` compatibility flag, closing issue #6212. Previously it relied on a hardcoded model list.

5. **[#6577 – Coerce numeric read ranges](https://github.com/earendil-works/pi/pull/6577)**  
   Fixes display of `read` tool ranges when tool arguments are passed as numeric strings (`offset: "380"`). Range formatting now works in tool cards, session tree, and HTML exports.

6. **[#6572 – Render image blocks in interactive user messages](https://github.com/earendil-works/pi/pull/6572)**  
   Addresses issue #6563: images in user messages are now rendered in the TUI, and clipboard images are attached to the next user message instead of dropped as temp files.

7. **[#6565 – Z.AI extension with quota, resilience, and cache benchmark](https://github.com/earendil-works/pi/pull/6565)**  
   Introduces a new `pi-zai` package providing Z.AI Platform provider, cache metrics, compaction policy, and slash commands like `/zai-usage`.

8. **[#6561 – Fix TUI double rendering / disable terminal auto-wrap](https://github.com/earendil-works/pi/pull/6561)**  
   Disables DECAWM during TUI sessions to prevent cursor desynchronization and double‑wrapping on lines matching terminal width.

9. **[#5859 – Send responses prompts as instructions](https://github.com/earendil-works/pi/pull/5859)**  
   Aligns with OpenAI Responses API spec by sending system prompts in the top‑level `instructions` field rather than as replayed `input` messages.

10. *(Minor/Noise)* **#6570** was a mistaken PR ([closed, do-not-merge](https://github.com/earendil-works/pi/pull/6570)) – worth noting that the repository remains clean from accidental contributions.

---

## Feature Request Trends

- **Extension API enhancements:** Several requests ask for safe session replacement APIs (`pi.newSession`, `pi.requestReload`), a canonical reload method, and making the agent’s idle/waiting state observable for host integrations (issues #5952, #6552, #5329).
- **Provider and model breadth:** New providers (Scaleway, Z.AI) are being added, and support for ambient‑credential providers (Bedrock, Vertex) continues to be refined. Forced tool calls and custom base URL handling for OpenAI‑Codex are also in demand.
- **Compaction transparency:** Users want compaction to work reliably during agent runs, with proper session IDs and provider options forwarded. Atomic compaction/dispatch coordination is being proposed (issue #6578).
- **TUI improvements:** Beyond image rendering and double‑line fixes, the community is requesting a dedicated history pager and better handling of clipboard images – these are now being delivered.
- **Error visibility:** Request to make provider errors visible to the LLM via user‑role advisories (issue #6542) so the model can self‑correct.

---

## Developer Pain Points

- **Compaction flakiness:** Multiple issues (#6477, #6339, #5463) highlight that compaction often fails or is not triggered at the expected time, especially with ambient‑credential providers and OpenAI‑Codex models.
- **Provider‑specific compatibility:** Numerous bugs crop up only with specific providers – Grok schema validation (issue #6587), Bedrock `forceAdaptiveThinking` (issue #6212, fixed in #6582), Codex model 404 (issue #6569), and Anthropic `x-should-retry` header (issue #6586).
- **TUI rendering glitches:** Cursor/terminal synchronization problems (issues #6562, #6563) degrade the interactive experience, especially on Windows.
- **Agent lifecycle bugs:** The `agent.continue()` flow has recurring edge cases when the last message is from the assistant, or when tree navigation mid‑tool‑call corrupts the conversation branch (issues #5886, #6558).
- **Extension loading issues:** Subpath imports from `pi-ai` are broken under the extension loader (issue #6573), and the `reload-runtime.ts` example is non‑functional (issue #6574).
- **Timeout and hang problems:** Local model calls inherit a 300‑second timeout; RPC mode can hang indefinitely when a provider accepts but never responds (issues #2257, #6581).

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

Here is the **Qwen Code Community Digest** for **2026-07-13**.

---

## Qwen Code Community Digest
**Date:** 2026-07-13

### 1. Today's Highlights

Today's activity is heavily focused on the **daemon architecture** and **multi-workspace** support. The RFC for supporting multiple workspaces in a single `qwen serve` daemon (#6378) is under active discussion, with related PRs adding runtime channel control (#6741) and workspace removal (#6745) landing. A new "Stale Failure Patrol" CI workflow (#6766) and a fix for oversized desktop release notes (#6792) highlight a push for CI reliability, while several critical bugs, including a terminal garbling issue on Ctrl-C (#6776) and a CI failure for the nightly build (#6786), require immediate attention.

### 2. Releases
No new releases were published in the last 24 hours.

### 3. Hot Issues

- **#6378 [RFC: Support multiple workspaces in one `qwen serve` daemon](https://github.com/QwenLM/qwen-code/issues/6378)** - A high-impact RFC proposing a fundamental shift from a `1 daemon = 1 workspace` model. It proposes leaving current behavior for existing clients while offering a multi-workspace capability for new ones. The community is engaged with 20 comments, but the 0 👍 suggest it's still in early discussion.
- **#6721 [Keep deferred tool discovery from invalidating prompt cache prefixes](https://github.com/QwenLM/qwen-code/issues/6721)** - A performance bug where discovering a "deferred tool" replaces the tool schema mid-session, which breaks prompt caching. This is a significant concern for heavy users of tool-based interactions who rely on cache hits for speed.
- **#6762 [Feature Request: Skill Context Lifecycle Management](https://github.com/QwenLM/qwen-code/issues/6762)** - A frequently requested feature. Users want the ability to unload, compress, or mark SKILL.md contents as "done" to manage context windows, as currently, skill bodies are loaded forever, wasting tokens.
- **#6776 [When using Ctrl-C to exit can end up with garbled terminal](https://github.com/QwenLM/qwen-code/issues/6776)** - A disruptive bug where exiting `qwen` with Ctrl-C can corrupt terminal settings, causing unexpected character sequences (e.g., `9;5u`) on subsequent keypresses. This is a high-priority P2 issue affecting daily workflow.
- **#6781 [Main CI failed: E2E Tests](https://github.com/QwenLM/qwen-code/issues/6781)** - A critical P1 failure on the main branch's E2E test suite. This blocks all new merges and requires immediate investigation. The bot has tagged it as "ready-for-agent."
- **#6786 [Release Failed for v0.19.9-nightly.20260713...](https://github.com/QwenLM/qwen-code/issues/6786)** - The nightly release pipeline is broken, failing on the "quality" job. This prevents the community from testing the latest changes.
- **#6755 [Devlog + Living Spec: background agents for cross-session project persistence](https://github.com/QwenLM/qwen-code/issues/6755)** - An ambitious feature request proposing background agents that automatically maintain a "devlog" (what happened) and "living spec" (current project state) for long-running projects, addressing a key pain point in project continuity.
- **#6791 [auto模式对三方api兼容异常](https://github.com/QwenLM/qwen-code/issues/6791)** - A bug report from a Chinese-speaking user (auto mode compatibility issues with third-party APIs). It highlights that `tool-choice` handling is broken for models proxied through services like `newapi` and `minimax`, causing the agent to either time out or return plain text.
- **#6775 [Expose tool-call preparation events before arguments are complete](https://github.com/QwenLM/qwen-code/issues/6775)** - A feature request for a new lifecycle event for tool calls. Developers of ACP consumers want a `pending` state for tool calls so they can show a loading state or start resource allocation before the model finishes generating the full arguments.
- **#6779 [bug(channels): Feishu worker reports ready with invalid credentials](https://github.com/QwenLM/qwen-code/issues/6779)** - A critical bug for users of the Feishu (Lark) channel. The worker can erroneously report as "ready" even with invalid credentials, leading to a false sense of security and a "dead" channel.

### 4. Key PR Progress

- **#6741 [feat(cli): Add runtime daemon channel control](https://github.com/QwenLM/qwen-code/pull/6741)** - Merged. This is a major step for the daemon, allowing users to enable, replace, query, reload, and stop channel workers at runtime without restarting the daemon. This is foundational for multi-workspace support.
- **#6506 [fix(cli): optimize large paste performance and add progress indicator](https://github.com/QwenLM/qwen-code/pull/6506)** - Open. Addresses a major UX issue where pasting large amounts of code (e.g., 260k chars) blocks the terminal for seconds. The fix intercepts raw paste data to bypass readline's per-character event loop.
- **#6745 [feat(serve): support runtime workspace removal](https://github.com/QwenLM/qwen-code/pull/6745)** - Open. Complements #6741 by adding the ability to remove workspaces from a running daemon, a necessary component for the dynamic workspace management vision.
- **#6792 [fix(ci): avoid oversized desktop release notes](https://github.com/QwenLM/qwen-code/pull/6792)** - Merged. Fixes a CI issue where desktop release notes became too large, likely causing build failures. The fix uses a short changelog link instead of full generation.
- **#6766 [feat(ci): add stale failure patrol](https://github.com/QwenLM/qwen-code/pull/6766)** - Open. Proposes a new CI workflow to automatically handle "stale" CI failures on PRs targeting `main`, running every 10 minutes. This is a proactive move to keep the CI pipeline healthy.
- **#6777 [fix(core): track thinking tags across streamed deltas](https://github.com/QwenLM/qwen-code/pull/6777)** - Open. A follow-up fix for the thinking/reasoning content rendering. It ensures malformed `<think>` tags are handled correctly across streamed chunks, preventing UI glitches during model thinking.
- **#6788 [fix(core): include skill results in microcompaction](https://github.com/QwenLM/qwen-code/pull/6788)** - Open. Directly addresses the "Skill Context Lifecycle Management" request (#6762) by making old skill tool results eligible for the existing context compaction policy.
- **#6780 [fix(feishu): validate credentials before WebSocket startup](https://github.com/QwenLM/qwen-code/pull/6780)** - Merged. Fixes the dangerous bug (#6779) where the Feishu channel could report ready with bad credentials, preventing silent failures.
- **#6771 [feat(review): capture untracked files, resolve anchors from snippets, and gate posting in code](https://github.com/QwenLM/qwen-code/pull/6771)** - Open. A major improvement to the `/review` skill, fixing a critical bug where the skill reviewed files it had not read. This increases trust in the automated code review process.
- **#6787 [fix(core): reorder LruCache entries on get() for falsy values](https://github.com/QwenLM/qwen-code/pull/6787)** - Open. A subtle but important bug fix where `LruCache.get()` failed to promote entries to the "most recently used" position if the cached value was `0`, `false`, or `null`. This affected cache eviction performance.

### 5. Feature Request Trends

The most prominent trend is the evolution of the **daemon architecture**. A cluster of feature requests and PRs (#6378, #6312, #5976, #6741, #6745) aims to move from a single-workspace daemon to a multi-workspace, daemon-aware server with runtime lifecycle management. This is the clear "next big thing" for the project.

A secondary trend is **context management for skills**. Requests like #6762 and the related PR #6788 show a strong desire for users to control how skill bodies and their results persist in the context, moving from a "loaded forever" model to a managed one.

Finally, there is a growing interest in **background agents** (#6755) for project-level persistence and **better tool lifecycle** (#6775) for improved UX and performance.

### 6. Developer Pain Points

- **CI Instability:** Multiple CI failures (#6781, #6786, #6749, #6773, #6778) and a dedicated "Stale Failure Patrol" PR (#6766) indicate that the CI pipeline is a significant source of friction for developers.
- **Terminal and Input Garbling:** The Ctrl-C exit issue (#6776) and the large paste performance problem (#6506) show that terminal state management and input handling are recurring pain points.
- **Third-Party API Compatibility:** The auto-mode issues with third-party APIs (#6791) highlight the complexity and fragility of the tool-choice mechanism when dealing with non-standard model providers.
- **Context Bloat / Token Management:** Issues like #6666 (thinking tags in content), #6721 (tool discovery invalidating cache), and #6762 (skill context lifecycle) all point to a broader developer pain point: the ongoing challenge of managing the model's context window efficiently for complex, long-running sessions.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-07-13

## Today’s Highlights
Anthropic API compatibility issues continue to dominate the bug tracker, with a fix for `tool_use`/`tool_result` mismatches now closed and a broader schema sanitization PR merged. Community contributions added Korean (ko) locale support and enabled builds on NetBSD, while a new MiniMax provider route is under review. Two open issues highlight lingering UX problems with skill invocation and a need for provider-aware cost tracking.

## Releases
**None** – No new version was published in the past 24 hours.

## Hot Issues (3 total, all noteworthy)
- **#4329 [CLOSED] – Anthropic API error**  
  *Reporter: lixin34*  
  The Anthropic adapter rejects requests when `tool_use` IDs appear without corresponding `tool_result` blocks – a protocol violation that breaks multi-turn tool flows. Issue closed after a related PR (#4346) landed.  
  [GitHub](Hmbown/CodeWhale Issue #4329)

- **#3915 [OPEN] – Skill invocation silently discards task text**  
  *Reporter: Hmbown*  
  Commands like `$debug why does auth fail` activate the skill but throw away the explicit task. Users must retype their request in the next message. `/skill <name> <args>` is even worse – args become part of the skill name. Marked as UX bug and enhancement.  
  [GitHub](Hmbown/CodeWhale Issue #3915)

- **#4335 [OPEN] – Offline scorecard pricing is provider-blind**  
  *Reporter: Hmbown*  
  The scorecard uses a single pricing lookup per model, ignoring the actual provider route (e.g., Codex OAuth, local, gateway). This can assign incorrect API pricing to turns that went through non-standard routes. A fix is in PR #4351.  
  [GitHub](Hmbown/CodeWhale Issue #4335)

## Key PR Progress (7 updates, all listed)
- **#4351 [OPEN] – fix(scorecard): bind costs to provider routes**  
  *Author: nightt5879*  
  Carries effective provider and model info into `turn_end` records, enabling route-specific pricing. Fails closed for unknown/unpriced routes.  
  [GitHub](Hmbown/CodeWhale PR #4351)

- **#4353 [CLOSED] – docs: Cursor Cloud dev-environment notes added to AGENTS.md**  
  *Author: Hmbown*  
  No product code changes; documents non-obvious cloud-VM caveats for Cursor Cloud agents.  
  [GitHub](Hmbown/CodeWhale PR #4353)

- **#4347 [CLOSED] – i18n: Korean (ko) locale support**  
  *Author: moduvoice*  
  Adds `crates/tui/locales/ko.json` with all 752 leaf keys translated. Improves accessibility for Korean-speaking users.  
  [GitHub](Hmbown/CodeWhale PR #4347)

- **#4346 [CLOSED] – fix: sanitize tool input_schema for Anthropic adapter**  
  *Author: qinlinwang*  
  Fixes HTTP 400 errors when a tool schema contains top-level `oneOf`/`anyOf`/`allOf`, which Anthropic rejects. Directly addresses #4329.  
  [GitHub](Hmbown/CodeWhale PR #4346)

- **#4349 [CLOSED] – Update Cargo.toml to allow build under NetBSD**  
  *Author: ci4ic4*  
  Generates rquickjs bindings for NetBSD (also applies to FreeBSD/OpenBSD/DragonFly).  
  [GitHub](Hmbown/CodeWhale PR #4349)

- **#4348 [CLOSED] – fix(tui): bill Anthropic cache-write tokens at published rates**  
  *Author: knqiufan*  
  Correctly separates `cache_creation_input_tokens` into a distinct `cache_write_tokens` field and adds per-million write pricing for Anthropic/Qwen.  
  [GitHub](Hmbown/CodeWhale PR #4348)

- **#4352 [OPEN] – feat: add MiniMax Messages-compatible route**  
  *Author: octo-patch*  
  Registers MiniMax-M3 and MiniMax-M2.7 as first-class providers with capabilities, context metadata, and CLI/TUI support.  
  [GitHub](Hmbown/CodeWhale PR #4352)

## Feature Request Trends
- **Localization expansion** – Korean locale (#4347) is now in, suggesting demand for broader multilingual support.
- **Provider diversity** – MiniMax route (#4352) indicates interest in expanding beyond Anthropic/Qwen/OpenAI.
- **Accurate cost tracking** – Provider-aware pricing (#4335, #4348) and cache write billing show users care about precise cost attribution.
- **Better skill UX** – Issue #3915 calls for fixing `$skill <task>` and `/<skill> <task>` to not discard arguments.

## Developer Pain Points
- **Anthropic adapter fragility** – Schema validation (oneOf/anyOf issues) and tool-use block ordering cause hard failures; two recent fixes still leave room for edge cases.
- **Skill invocation ambiguity** – Users lose work when commands are silently misinterpreted, forcing retyping.
- **Pricing inconsistencies across routes** – The same model can show different costs depending on how it was accessed, confusing budgeting and debugging.
- **Build portability** – NetBSD support required manual binding generation, hinting at broader lack of pre-built platform support.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/boom7sss/agents-radar).*