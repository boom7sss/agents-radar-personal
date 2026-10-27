# AI CLI Tools Community Digest 2026-07-30

> Generated: 2026-07-30 02:49 UTC | Tools covered: 9

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

# Cross-Tool Comparison Report: AI CLI Developer Tools Ecosystem
**Date:** 2026-07-30

---

## 1. Ecosystem Overview

The AI CLI developer tools landscape shows a bifurcated ecosystem: mature, widely-adopted tools (Claude Code, Copilot CLI) facing scaling pains around session reliability and memory management, while rapidly-iterating challengers (Codex, Pi, Qwen Code) race to close feature gaps. **Session state corruption, data loss, and platform-specific instability** are the dominant cross-cutting concerns, suggesting the entire category has hit an inflection point where architectural debt around persistence and concurrency is becoming costly. Meanwhile, the emergence of **MCP (Model Context Protocol)** as a universal plugin interface and **XDG/XDG-like filesystem compliance** as a baseline expectation signals growing professionalization of the tooling. Linux desktop support remains the single largest unaddressed community demand across tools, while enterprise features (self-hosted gateways, audit trails, role-based access) are increasingly requested as organizations move beyond individual experimentation.

---

## 2. Activity Comparison

| Tool | Hot Issues Tracked | Active PRs | Release Status | Community Engagement Signal |
|------|-------------------|------------|----------------|----------------------------|
| Claude Code | 10 (406👍 top issue) | 4 | No new release | High volume, sustained frustration |
| OpenAI Codex | 10 (874👍 top issue) | 10 | 4 alpha Rust releases | Very high engagement, rapid iteration |
| Gemini CLI | 10 (5👍 top issue) | 10 | v0.55.0-nightly | Moderate, maintainer-driven |
| GitHub Copilot CLI | 10 (3👍 top issue) | 1 | v1.0.76 stable | High, enterprise user base |
| Kimi Code CLI | 1 | 4 | No new release | Low, emerging community |
| OpenCode | 10 (168👍 top issue) | 10 | No new release | Growing, strong feature requests |
| Pi | 10 (8 comments top issue) | 10 | v0.83.0 released | Very high, rapid PR churn |
| Qwen Code | 10 (P1 bugs) | 10 | v0.21.1-nightly | High, CI-focused development |
| DeepSeek TUI | 10 | 10 | v0.9.2 pipeline | Moderate, localization-positive |

**Key observations:**
- **Codex** leads in community engagement (874👍 for Linux desktop) and release velocity (4 alpha releases)
- **Pi** has the highest PR activity density (22 PRs updated in 24h)
- **Claude Code** has the most severe data-corruption issues relative to its maturity
- **Kimi Code** is the quietest but signals emerging enterprise demand for K3 self-hosting
- **Qwen Code** shows the most systematic CI/test automation (bot-triggered autofix workflows)

---

## 3. Shared Feature Directions

### A. Linux Desktop & XDG Compliance
- **Claude Code** (#1455, 406👍): XDG Base Directory compliance
- **Codex** (#11023, 874👍): Native Linux desktop app
- **Qwen Code**: Windows cross-platform fixes (PR #8050)
- **Pi**: Wayland clipboard support (PR #7261)
- **DeepSeek TUI**: Indonesian/Chinese locale shipping

**Signal:** Linux parity is the #1 unaddressed feature across mature tools. XDG compliance is a baseline that most tools still fail to meet.

### B. Lifecycle Hooks & Plugin Automation
- **Codex** (#21753, 22👍): Full Claude Code hook parity (29+ hooks)
- **Copilot CLI** (#4204): `.agents` discovery for custom agents
- **Gemini CLI** (#21968): Better skill/sub-agent invocation
- **Kimi Code** (PR #2176): `UserPromptSubmit` hook fixes
- **DeepSeek TUI**: Typed persistent permission rules

**Signal:** Users want programmable automation surfaces to integrate AI CLI into CI/CD pipelines. "Hooks" are becoming the standard interface.

### C. Session State Management & Resilience
- **Claude Code**: Session rename corruption (#73638), transcript loss (#77730), text drops (#74260)
- **Codex**: Unbounded session bloat (#25779), monster JSONL files (#35458, #34863)
- **Gemini CLI**: Auto memory indefinite retries (#26522), subagent false success (#22323)
- **OpenCode**: Auto-compaction loops (#30680), "exiting loop" crashes (#38801)
- **Pi**: Provider omission of usage data crashes (#6819)
- **Copilot CLI**: Zombie processes (#4163), typing latency (#4299)

**Signal:** This is the category's **most urgent cross-cutting crisis**. Persistent state management was not architected for the scale and longevity of real-world sessions. Expect a wave of architectural rewrites in H2 2026.

### D. Enterprise/Self-Hosted Gateways
- **Kimi Code** (#2568): Custom API Base URL for K3 gateways
- **Pi**: Fireworks provider support for K3 (#7199)
- **Codex**: Cloud-managed MCP servers (PR #36031)
- **Qwen Code**: Role-based model routing (#8021)

**Signal:** As models are self-hosted (K3, Llama variants), the CLI must support configurable routing, failover, and audit.

### E. Permission System Hardening
- **Claude Code**: Hook override regression (#82451), per-action approval (#78315)
- **OpenCode**: "Auto mode" classifier (#37564), nested subagent permission hangs (#13715)
- **DeepSeek TUI**: Typed persistent permission rules (#1186)
- **Copilot CLI**: Authorization fatigue (#1168)

**Signal:** Users want granular, predictable, automatable permission systems. The hook > permission.ask > default hierarchy is the emerging model.

---

## 4. Differentiation Analysis

| Dimension | Claude Code | Codex | Copilot CLI | Gemini | Kimi | OpenCode | Pi | Qwen | DeepSeek |
|-----------|-------------|-------|-------------|--------|------|----------|----|------|----------|
| **Core Focus** | Desktop UX + MCP | Multi-platform Rust CLI | Enterprise GitHub integration | Google ecosystem | K3 gateway | Community-driven features | Minimalist efficiency | Automated CI/GitHub | TUX + localization |
| **Target User** | Pro devs (Mac/Win) | Cross-platform OSS devs | Enterprise GitHub shops | Google Cloud devs | K3 self-hosters | Early adopters | Power users, tinkerers | CI/CD pipeline devs | Ubuntu/macOS users |
| **Maturity** | Mature, stable | Rapid alpha | Mature, enterprise | Moderate | Early | Young | Young, high churn | Early, CI-focused | Moderate |
| **Trust in Sessions** | **Low** (data loss) | **Low** (bloat/corruption) | **Medium** (zombie issues) | **Medium** (auto-memory issues) | N/A (low usage) | **Low** (compaction loops) | **Medium** (crashes) | **Medium** (CI failures) | **Medium** (cold FS issues) |
| **Differentiator** | MCP ecosystem | Hook parity ambition | Enterprise integration | Google models | K3 self-hosting | Community innovation | Performance | Automated CI | Locale support |
| **Key Weakness** | Session corruption | Memory/size bloat | Auth fatigue | API errors | Low community | TUI instability | Provider fragility | Windows regressions | KB layout bugs |

---

## 5. Community Momentum & Maturity

### Tier 1: High Maturity, Large Communities
- **GitHub Copilot CLI** — Most stable release cadence (v1.0.76), enterprise user base, but zombie process issue shows maturity doesn't guarantee reliability
- **Claude Code** — Largest raw community (406👍 on single issue), but trust erosion from session corruption could trigger user migration

### Tier 2: Rapid Iteration, Growing Communities
- **OpenAI Codex** — Highest engagement (874👍 on Linux request), fastest release velocity (4 alpha releases/day), strong PR pipeline (10 merged/updated)
- **Pi** — Highest PR churn (22 PRs in 24h), responsive maintainers, v0.83.0 feature-rich: this is the most agile project
- **Qwen Code** — Most automated development process (bot-triggered autofix, CI dashboards), systematic about test coverage
- **DeepSeek TUI** — Strong localization focus, 11 closed PRs in 24h, v0.9.2 nearing release

### Tier 3: Emerging/Focused
- **Gemini CLI** — Moderate activity, maintainer-driven (issues bot-triaged), but P1 bugs stale for months
- **OpenCode** — Growing feature requests (/btw command at 168👍), but stalled on auto-compaction reliability
- **Kimi Code** — Quietest, but K3 self-hosting demand could trigger rapid growth

### Release Velocity Rankings
1. Codex (4 alpha builds)
2. Pi (v0.83.0)
3. Copilot CLI (v1.0.76)
4. Qwen Code (nightly)
5. Gemini CLI (nightly)
6. DeepSeek TUI (v0.9.2 pipeline)
7. Claude Code (none)
8. OpenCode (none)
9. Kimi Code (none)

---

## 6. Trend Signals

### 1. Session State Management is the Category's Defining Crisis
The most alarming pattern: **every mature tool** has reported data loss, corruption, or unbounded bloat. Claude Code's text drops, Codex's 165GiB session folders, Gemini's infinite retry loops, OpenCode's compaction loops — this is not an isolated bug but an architectural failure. The persistence layer was designed for brief interactive sessions, not the hours-long, multi-agent, checkpoint-resume workflows users demand. **Developers evaluating these tools should prioritize session export/import robustness and understand compaction behavior before committing.**

### 2. Linux Desktop Support is the "Unserved 10x"
Codex's 874👍 and Claude Code's 406👍 on XDG compliance tell the same story: roughly 30-40% of developers use Linux as their primary OS, and most AI CLI tools treat it as a second-class citizen. While terminal-based CLIs work on Linux, the lack of native desktop apps (Codex, Claude Desktop) and XDG compliance forces workarounds. **Any new entrant that ships Linux-first could capture significant market share.**

### 3. Hooks are Becoming the Standard Integration Surface
Claude Code's hook system is now the reference implementation. Codex explicitly requests "full Claude Code hook parity" (29 hooks). Copilot CLI added plugin lifecycle controls (enable/disable). Kimi Code fixes UserPromptSubmit. DeepSeek TUI adds typed permission hooks. The message: **AI CLIs are becoming programmable middleware, not just chat interfaces.** The tool with the richest hook system will win the CI/CD integration use case.

### 4. MCP Maturation is Uneven
MCP is the universal plugin protocol, but integration quality varies wildly:
- **Codex** is investing heavily (cloud-managed servers, OAuth token refresh, pagination limits)
- **Pi** is building an extension API (command queuing, tab control)
- **Gemini CLI** fixed 10-minute `tools/list` timeouts
- **Claude Code** has a security fix for bearer token leaks (PR #82358)
- **Copilot CLI** added denied-path enforcement

The gap between "MCP servers work" and "MCP servers are enterprise-secure" is still wide. **Developers should audit MCP server credential handling before production deployment.**

### 5. The "Self-Hosted Model" Shift is Real
Kimi K3 (2.8T parameters) being open-sourced, combined with Qwen Code's role-based routing and Pi's Fireworks provider support, points to a future where enterprises run their own model gateways. The CLI must support:
- Custom API Base URLs
- Failover/retry logic
- Per-model routing
- Audit trails

**The tools that abstract away provider differences (Pi, Codex, OpenCode) are best positioned for this shift.**

### 6. Windows is Still the Problem Child
Across all tools, Windows-specific bugs dominate the pain points:
- Claude Code: GPU crashes corrupting MSIX packages
- Codex: `taskkill.exe` spawning 300+ processes, DWM handle leaks
- Qwen Code: scrolling broken, AltGr conflicts
- DeepSeek TUI: Brazilian keyboard layout conflicts
- Copilot CLI: silent exit on non-default log levels

**Windows developers are the most underserved segment.** The cross-platform tooling gap is wider than Linux (where terminal CLIs mostly work) because Windows has unique terminal, credential, and process management quirks.

### 7. "Enterprise Readiness" is Evolving Beyond Auth
Last year, enterprise readiness meant SSO and API keys. Now it means:
- Audit trails (session logs, permission decisions)
- Role-based model routing (cheap vs. expensive models per task)
- Managed plugin distribution (org-level enabled plugins)
- Quota/billing transparency (Kimi's `/usage` absolute datetime, Claude Code's billing banner fix)
- Data isolation (Qwen Code's session-private file tracking)

**The enterprise CLI is becoming an internal platform, not just a developer tool.**

---

## Summary for Decision-Makers

| If you need... | Best-fit tool | Caveat |
|----------------|---------------|--------|
| Most mature MCP ecosystem | **Claude Code** | Session corruption risk; avoid for long-lived sessions |
| Fastest iteration, cross-platform | **Codex** | Memory bloat; need to monitor session sizes |
| Enterprise GitHub integration | **Copilot CLI** | Auth fatigue; zombie processes on Linux |
| Google Cloud ecosystem | **Gemini CLI** | API "invalid argument" errors unresolved |
| K3 self-hosting | **Kimi Code** | Very early community; wait for API gateway support |
| Community innovation | **OpenCode** | TUI instability; compaction loops |
| Performance, minimalism | **Pi** | Provider crashes from missing usage data |
| Automated CI/CD workflows | **Qwen Code** | Windows regressions in new releases |
| Non-English first experience | **DeepSeek TUI** | Keyboard layout bugs on non-US layouts |

**The takeaway:** No tool is production-ready for long-running, multi-agent, enterprise workflows. The ecosystem is in a "growing pains" phase where session reliability, memory management, and cross-platform parity are being retrofitted onto architectures that prioritized rapid feature delivery. **Invest in session export/backup tooling, test compaction behavior, and budget for workarounds.** The leaders (Claude Code, Copilot CLI) have the most to fix; the challengers (Codex, Pi, Qwen Code) have the most to gain.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report  
**Data snapshot:** github.com/anthropics/skills — 2026-07-30  

---

## 1. Top Skills Ranking

The following Pull Requests have attracted the highest community discussion activity. Each represents a significant contribution — a new skill, a major fix, or a substantial improvement.

| Rank | PR | Skill / Focus | Functionality | Discussion Highlights | Status |
|------|----|---------------|---------------|----------------------|--------|
| 1 | [#1298](https://github.com/anthropics/skills/pull/1298) | `skill-creator` fix — `run_eval.py` reliability | Fixes 0% recall bug by installing eval artifact as a real skill; resolves Windows stream reading, trigger detection, and parallel worker issues. | Core bug that makes the description‑optimization loop optimize against noise. Multiple reproductions (linked issue #556). Author provides root‑cause analysis and a comprehensive rewrite. | **Open** |
| 2 | [#514](https://github.com/anthropics/skills/pull/514) | `document-typography` | Prevents orphan word wrap, widow paragraphs, and numbering misalignment in generated documents. | Identifies a universal pain point in AI‑generated output. Simple, actionable guidance with high impact. | **Open** |
| 3 | [#486](https://github.com/anthropics/skills/pull/486) | `odt` — OpenDocument creation & template filling | Creates, reads, and converts `.odt`/`.ods` files; supports LibreOffice/ISO‑standard formats. | Bridges a gap for open‑source document workflows. Discussion centred on LibreOffice compatibility and template handling. | **Open** |
| 4 | [#210](https://github.com/anthropics/skills/pull/210) | `frontend-design` improvement | Revises existing skill for clarity and actionability; ensures every instruction is executable within a single conversation. | Community feedback highlighted verbosity and lack of concrete directives. Author re‑structured to be more procedural. | **Open** |
| 5 | [#83](https://github.com/anthropics/skills/pull/83) | `skill-quality-analyzer` + `skill-security-analyzer` | Meta‑skills that evaluate skills across dimensions (structure, documentation, security). | Debate over whether meta‑skills belong in the official collection vs. example‑skills. Quality dimension scoring sparked discussion. | **Open** |
| 6 | [#525](https://github.com/anthropics/skills/pull/525) | `pyxel` — retro game development | Skill for the Pyxel retro‑game engine; covers write → run → iterate workflow. | Author is the Pyxel creator (kitao). Interest in integrating MCP server for real‑time preview. | **Open** |
| 7 | [#723](https://github.com/anthropics/skills/pull/723) | `testing-patterns` | Covers testing philosophy (Trophy model), unit tests, React component tests, integration and E2E patterns. | Highly anticipated skill — testing is a top community request. Discussion on balancing generality vs. framework‑specific advice. | **Open** |
| 8 | [#1367](https://github.com/anthropics/skills/pull/1367) | `self-audit` — reasoning quality gate | Mechanical file verification followed by four‑dimension reasoning audit in damage‑severity order. | Novel approach: pre‑delivery quality gate. Commenters asked about model‑agnaticity and integration with existing skills. | **Open** |

---

## 2. Community Demand Trends

The Issues board reveals clear, recurring themes that signal where the community wants new skills:

| Theme | Key Issues | Community Sentiment |
|-------|------------|--------------------|
| **Security & trust boundary** | [#492](https://github.com/anthropics/skills/issues/492) (43 comments) — community skills under `anthropic/` namespace impersonate official skills. | High urgency: users demand namespace verification or a separate community directory. |
| **Organisational skill sharing** | [#228](https://github.com/anthropics/skills/issues/228) (16 comments) — manual download/upload workflow is broken for teams. | Strong demand for a shared library or direct‑link sharing. |
| **Skill‑creator tooling reliability** | [#556](https://github.com/anthropics/skills/issues/556) (12 comments), [#202](https://github.com/anthropics/skills/issues/202) (8 comments), [#1169](https://github.com/anthropics/skills/issues/1169) (3 comments) — `run_eval.py` 0% recall, Windows incompatibility, skill‑creator is too verbose. | The core development loop is broken for many users. Fixing the skill‑creator is the #1 tooling priority. |
| **AI agent governance** | [#412](https://github.com/anthropics/skills/issues/412) (6 comments) — policy enforcement, threat detection, audit trails. | Growing interest in safe multi‑agent patterns. |
| **Memory & state management** | [#1329](https://github.com/anthropics/skills/issues/1329) (9 comments) — `compact-memory` symbolic notation for long‑running agents. | Prose memory is wasteful; users want compact, machine‑parseable state. |
| **Reasoning quality gates** | [#1385](https://github.com/anthropics/skills/issues/1385) (3 comments) — pre‑task calibration, adversarial review, delivery verification. | Emerging pattern: ensure output quality before delivery. Complements the `self-audit` PR. |

**Most‑anticipated new skill directions:**  
- Security & governance (namespace, agent safety)  
- Organisational sharing (team skill libraries)  
- Memory compaction (symbolic agent state)  
- Reasoning quality gates (pre‑delivery verification)  
- Windows compatibility improvements (tooling, not a skill per se, but blocking adoption)

---

## 3. High‑Potential Pending Skills

These open PRs have active discussion and are likely to merge soon:

| PR | Skill | Why it’s close | Risk Factors |
|----|-------|----------------|--------------|
| [#525](https://github.com/anthropics/skills/pull/525) | `pyxel` — retro game development | Authoritatve author (kitao), well‑defined scope. | Needs MCP integration testing. |
| [#723](https://github.com/anthropics/skills/pull/723) | `testing-patterns` | Addresses a massive gap; community eager. | May require splitting into multiple skills (unit, React, E2E). |
| [#1302](https://github.com/anthropics/skills/pull/1302) | `color-expert` | Self‑contained, high‑quality reference tables. | Low discussion volume — may need more reviewer attention. |
| [#1479](https://github.com/anthropics/skills/pull/1479) | `plan-file-hygiene` | Solves planning‑artifact accumulation (#1417). | Still in early review; contributor offered to hand over. |
| [#1367](https://github.com/anthropics/skills/pull/1367) | `self-audit` | Pioneers a new category (reasoning gate). | Some concerns about token cost and integration with existing skills. |

---

## 4. Skills Ecosystem Insight

**The community’s most concentrated demand is for reliable, secure, and cross‑platform tooling (fixing the `skill-creator` pipeline) combined with domain‑specific skills in document quality, testing, governance, and memory management — reflecting a shift from “how do I write a skill” to “how do I create production‑grade AI outputs that the whole team can trust.”**

---

# Claude Code Community Digest — 2026-07-30

**Data source:** [github.com/anthropics/claude-code](https://github.com/anthropics/claude-code)

---

## 1. Today's Highlights

The community’s loudest call this week is for **XDG Base Directory compliance on Linux** — Issue #1455 has 406 thumbs-up and remains at the top of the backlog after 14 months. Meanwhile, a spate of **data-corruption reports** (silent text drops, session rename corruption, background agent transcript loss) is eroding trust in session persistence. On the desktop side, **GPU-process crashes** on Windows (two separate issues in 24h) and a **regression in PreToolUse hook permissions** are raising urgent stability and security concerns.

---

## 2. Releases

No new releases in the last 24 hours.

---

## 3. Hot Issues (10 noteworthy)

1. **[#1455 – XDG Base Directory compliance](https://github.com/anthropics/claude-code/issues/1455)**  
   *64 comments · 406 👍* – Claude Code still writes config/cache to `~/.claude` instead of following the Freedesktop spec. The highest-reacted open issue; community considers it a basic Linux integration requirement.

2. **[#74260 – Assistant text blocks silently dropped](https://github.com/anthropics/claude-code/issues/74260)**  
   *20 comments · 13 👍* – A `text` block followed by more “thinking” in the same turn is never rendered and missing from the JSONL transcript. Reproduced on `claude-fable-5` with adaptive thinking; a reproducible data-loss bug.

3. **[#44657 – Subagent Write tool rejects certain filenames](https://github.com/anthropics/claude-code/issues/44657)**  
   *8 comments · 13 👍* – Subagents cannot write `.md` files named “report”, “summary”, “findings”, or “analysis”. No opt-out exists. Frustrates users who need structured markdown output from multi-agent workflows.

4. **[#81159 – GPU process crash kills Claude Desktop](https://github.com/anthropics/claude-code/issues/81159)**  
   *6 comments* – Opus 5 performing an in-page browser action on Windows 11 triggers a GPU crash (exit code 101457950) that corrupts the MSIX package. App becomes unlaunchable until repair.

5. **[#77730 – Background agent transcripts unresumable](https://github.com/anthropics/claude-code/issues/77730)**  
   *6 comments* – Background agent transcripts become unresumable (“No transcript found”), forcing full-context respawns that burn tokens. A Claude Max subscriber reports workflow disruption.

6. **[#73638 – Session rename mid-tool-call corrupts transcript](https://github.com/anthropics/claude-code/issues/73638)**  
   *6 comments* – Renaming a session while a server tool call is in flight injects a synthetic turn, causing a permanent 400 error on every future prompt. Severe data integrity issue.

7. **[#78315 – Browser tool per-action approval ignores allowed-sites list](https://github.com/anthropics/claude-code/issues/78315)**  
   *6 comments · 3 👍 (Closed as invalid)* – Navigation to an allowed domain works, but read/interact actions still prompt. User expects the “Allowed sites” setting to cover all actions.

8. **[#80444 – Windows desktop GPU crash leaves MSIX unlaunchable](https://github.com/anthropics/claude-code/issues/80444)**  
   *5 comments* – A second, separate GPU crash (0x060C201E) via the in-app Browser tab. Same symptom: appxState=2, repair required. Recurring pattern suggests Electron/Chromium GPU process instability.

9. **[#74784 – Extra-usage billing banner misleading](https://github.com/anthropics/claude-code/issues/74784)**  
   *2 comments* – Team plan users hit “unlimited” in `/usage-credits` despite a configured monthly org cap. Crossover banner omits API-rate billing; users unknowingly incur costs.

10. **[#82451 – PreToolUse hook `permissionDecision: allow` overridden by `permissions.ask`](https://github.com/anthropics/claude-code/issues/82451)**  
    *0 comments (just filed)* – A documented regression: hooks returning `allow` no longer take precedence over matching permission globs. Breaks automation where hooks are meant to bypass prompts.

---

## 4. Key PR Progress

Only four pull requests were updated in the last 24 hours. All are described below:

1. **[#48272 – Enrich release titles with changelog summary](https://github.com/anthropics/claude-code/pull/48272)**  
   *CLOSED* – Long-running PR to auto-generate changelog summaries in release notes. Upstream now ships a `feed.xml` using the exact format from this PR. Closed after successful adoption.

2. **[#82358 – MCP Guard plugin: security hardening for MCP configurations](https://github.com/anthropics/claude-code/pull/82358)**  
   *OPEN* – Responds to the disclosure that MCP servers can leak bearer tokens into session transcripts (#82351). Implements a guard plugin to sanitize sensitive values before they enter the transcript. Community security fix.

3. **[#82335 – Fix GCP gateway setup.sh silent exit when `gcloud` missing](https://github.com/anthropics/claude-code/pull/82335)**  
   *OPEN* – Under `set -euo pipefail`, a missing `gcloud` binary causes an unhandled exit 127. Redirects stderr and adds a clear error message.

4. **[#82320 – Fix AWS gateway setup.sh aborting on macOS bash 3.2](https://github.com/anthropics/claude-code/pull/82320)**  
   *OPEN* – Uses `${DIST_SHA256,,}` (bash 4+ expansion) which fails on macOS default bash 3.2. Replaces with a portable alternative to avoid silent abort.

---

## 5. Feature Request Trends

The following directions surface repeatedly across recent issues and comments:

- **Filesystem compliance & portability**  
  XDG Base Directory support (#1455) is the #1 request. Users also want session transcripts and scratch files to be project-portable while keeping local-only data separate (#81946).

- **Session resiliency & safe state management**  
  Requests for semantic marks on assistant-message boundaries (#82146), collapse of superseded drafts, and better handling of concurrent session actions (renaming, tool calls) to prevent corruption (#73638).

- **Permission system reliability**  
  Users want a predictable hierarchy: hooks → permissions.ask → defaults. Recent regressions (#82451, #75235) have eroded trust. Also: per-action approval should respect the global allowed-sites list (#78315).

- **Transparency in billing and system status**  
  Clearer disclosure of API-rate billing when extra usage kicks in (#74784), and ability to dismiss or clear stale auto-update failures (#82408).

- **Plugin and extension interoperability**  
  MCP Python SDK 2.0.0 broke existing extensions (#82453). Managed-settings suppression of same-named plugins (#82450) blocks org-distributed plugins like Cowork.

---

## 6. Developer Pain Points

- **Data loss and corruption** – Text blocks dropped mid-turn (#74260), transcripts corrupted by session rename (#73638), background agent transcripts lost (#77730). These erode confidence in the tool’s persistence layer.
- **Desktop instability on Windows** – Multiple GPU-process crashes (#81159, #80444) that corrupt the MSIX package and require full repair. Users on Windows 11 with NVIDIA GPUs are hit hardest.
- **Subagent restrictions without opt-out** – The Write tool’s filename blacklist (#44657) prevents legitimate use cases (generating reports, summaries). No configuration escape hatch exists.
- **Permission overrides breaking** – A documented “hook allow wins” rule silently stopped working (#82451), breaking automation scripts that depend on it. Regressions in user-facing security logic are especially frustrating.
- **Cross-platform script gaps** – Example setup scripts fail on macOS due to bash version assumptions (#82320) or missing tool checks (#82335). Small but recurring friction for developers onboarding gateway examples.
- **Billing hidden costs** – Team plan users discover unexpected API-rate charges only after hitting the monthly cap, because the crossover banner and `/usage-credits` endpoint are misleading (#74784).

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-07-30

## Today's Highlights
Four alpha releases of the Rust client landed today, signaling rapid iteration on the CLI. The community’s loudest demand remains a native Linux desktop app (#11023, 874 👍), while critical Windows bugs around runaway process spawning and session bloat are generating strong reactions. On the PR side, MCP tool hint exposure and security hardening around network policy and pagination limits dominated the commit log.

## Releases
- **rust-v0.147.0-alpha.2** · **rust-v0.147.0-alpha.1** · **rust-v0.146.0-alpha.9.2** · **rust-v0.146.0-alpha.9.1** — All four are tag-only releases with no changelog details. The rapid alpha cycle suggests ongoing backend refinements for the Codex CLI on Rust.

## Hot Issues (Top 10 by Impact & Community Engagement)

1. **[#11023] Codex desktop app for Linux** — 874 👍, 192 comments. The most‑requested feature. Users need a native Linux build to avoid macOS workarounds.  
   [openai/codex Issue #11023](https://github.com/openai/codex/issues/11023)

2. **[#21753] Full Claude Code Hook Parity (29+)** — 22 👍, 29 comments. Umbrella request for lifecycle hooks (pre/post, on_step, etc.) to match Claude Code’s automation surface.  
   [openai/codex Issue #21753](https://github.com/openai/codex/issues/21753)

3. **[#33776] Windows: taskkill.exe / conhost.exe spawning hundreds of processes** — 23 👍, 25 comments. Severe DWM degradation and WMI storms reported on Windows Desktop build 26.707.12708.0.  
   [openai/codex Issue #33776](https://github.com/openai/codex/issues/33776)

4. **[#10561] Plan Mode: “Copy Plan” and “Clear Context & Start Coding”** — 37 👍, 19 comments. A workflow gap between planning and execution that many users want bridged.  
   [openai/codex Issue #10561](https://github.com/openai/codex/issues/10561)

5. **[#27458] CLI timeout while waiting for user input** — 49 👍, 12 comments. Affects `codex exec` on WSL/PowerShell; sandbox waits forever if no input is detected.  
   [openai/codex Issue #27458](https://github.com/openai/codex/issues/27458)

6. **[#25779] Meta-bug: unbounded session/turn state causes freezes & context bloat** — 8 👍, 12 comments. Accumulated conversation state leads to frozen app and lost turn control.  
   [openai/codex Issue #25779](https://github.com/openai/codex/issues/25779)

7. **[#35420] Work/Codex stream disconnect with OneDrive-backed workspaces** — 0 👍, 13 comments. Reproducible `stream disconnected before completion` when OneDrive storage is degraded.  
   [openai/codex Issue #35420](https://github.com/openai/codex/issues/35420)

8. **[#25015] MCP process stack leaks for subagents** — 1 👍, 5 comments. `app-server` retains MCP child processes after subagent completion, causing linear memory growth.  
   [openai/codex Issue #25015](https://github.com/openai/codex/issues/25015)

9. **[#35458] Session folder reaches ~165 GiB from repeated PNG screenshots** — 0 👍, 4 comments. Compaction re‑persists base64 images, bloating `~/.codex/sessions` on macOS.  
   [openai/codex Issue #35458](https://github.com/openai/codex/issues/35458)

10. **[#34863] app-server hits 27 GB resident + 36 GB swap after single rollout JSONL grows to 10.2 GB** — 0 👍, 3 comments. Image‑heavy threads produce enormous compacted records, exhausting memory.  
    [openai/codex Issue #34863](https://github.com/openai/codex/issues/34863)

## Key PR Progress (Top 10 by Engineering Impact)

1. **[#36055] Expose MCP read-only hints in tool call items** — Propagates `readOnlyHint` annotations from MCP tools through events and history.  
   [openai/codex PR #36055](https://github.com/openai/codex/pull/36055)

2. **[#36037] Deny network access when allow amendment fails** — Security fix: a failed network policy amendment no longer grants access to the requested host.  
   [openai/codex PR #36037](https://github.com/openai/codex/pull/36037)

3. **[#36039] Limit MCP catalog pagination** — Caps catalog discovery at 100 pages and 1,024 items to prevent runaway scans.  
   [openai/codex PR #36039](https://github.com/openai/codex/pull/36039)

4. **[#36036] Allow naming forked chats from the TUI** — `/fork` now accepts an optional thread name, making session management easier.  
   [openai/codex PR #36036](https://github.com/openai/codex/pull/36036)

5. **[#36035] Exit the stdio app-server when its connection closes** — Fixes a hang when stdin is closed but a remote client remains connected.  
   [openai/codex PR #36035](https://github.com/openai/codex/pull/36035)

6. **[#36045] Distinguish unknown MCP authentication status** — OAuth discovery failures now report `unknown` instead of `unsupported`, enabling better diagnostics.  
   [openai/codex PR #36045](https://github.com/openai/codex/pull/36045)

7. **[#36054] Remove legacy `--full-auto` from `codex exec`** — Drops deprecated flag; callers must use `--sandbox workspace-write` explicitly.  
   [openai/codex PR #36054](https://github.com/openai/codex/pull/36054)

8. **[#36051] Avoid overwriting symlinked migration targets** — Prevents external‑agent migrations from writing outside the repository through symlinks.  
   [openai/codex PR #36051](https://github.com/openai/codex/pull/36051)

9. **[#36031] Load cloud-managed servers in MCP CLI commands** — Enterprise users can now resolve managed MCP servers via `codex mcp list/get/login/logout`.  
   [openai/codex PR #36031](https://github.com/openai/codex/pull/36031)

10. **[#36049] Keep tool-call metrics out of Statsig exports** — Runtime‑only metrics are no longer sent to Statsig, while OTLP exports remain unchanged.  
    [openai/codex PR #36049](https://github.com/openai/codex/pull/36049)

## Feature Request Trends

- **Cross‑Platform Desktop Parity** — The Linux desktop app (#11023) remains the single most‑upvoted request. Combined with frequent Windows‑specific bug reports, users clearly want equal stability and features across macOS, Windows, and Linux.
- **Advanced Automation Hooks** — Requests for Claude‑Code‑style hooks (pre/post compact, on_step, agent lifecycle) are growing (#21753, #17148). Users want full lifecycle automation for CI/CD and custom workflows.
- **Plan Mode Workflow Enhancements** — “Copy Plan” and “Clear Context & Start Coding” buttons (#10561) reflect a desire for clearer hand‑off between planning and execution phases.
- **Session Syncing & Continuity** — Multiple issues ask to sync CLI and app‑server sessions (#14722) and to keep remote‑controlled sessions in sync when resuming from another device.
- **MCP Tool Improvements** — Read‑only hints, cloud‑managed servers, and pagination limits all point to maturing MCP integration for production use.

## Developer Pain Points

- **Windows‑Specific Instability** — The top three bugs by comment count involve Windows: runaway `taskkill.exe`/`conhost.exe` processes (#33776), OneDrive‑related stream disconnects (#35420), and DWM handle accumulation (#33192). Duplicate `Path`/`PATH` environment variables (#27334) further break PowerShell tool execution.
- **Memory & Disk Bloat** — Unbounded session state causes context bloat (#25779), MCP process leaks (#25015), and monster JSONL files from inline base64 images (#35458, #34863). These issues severely impact long‑running sessions.
- **Context Compaction Bugs** — Several reports (#35935, #27894, #34863) note that compaction can lose task state, repeat completed work, or fail to restore active turns, wasting usage quotas and developer time.
- **Authentication & Access Confusion** — Some Windows users see “You don’t have access to Codex yet” (#35113) even with a valid Plus subscription, and in‑app browser crashes can trigger startup loops (#35311).
- **Timeout & Input Handling** — The CLI sandbox can hang indefinitely while waiting for user input (#27458), and streams disconnect when a workspace is backed by degraded cloud storage (#35420).

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest – 2026-07-30

**Today’s Highlights**  
Two changelog PRs for v0.53.0 and v0.54.0-preview.0 were merged, while a new nightly v0.55.0-nightly.20260730 rolled out automated version bumps. The community is still grappling with persistent API “invalid argument” errors and model capacity issues for `gemini-3-flash-preview`. On the fix front, a critical PTY memory leak PR was closed, and a new auto‑compress feature for context overflow is under review.

---

## Releases

- **[v0.55.0-nightly.20260730](https://github.com/google-gemini/gemini-cli/releases/tag/v0.55.0-nightly.20260730.gdc859e8e4)** – Automated nightly release. Includes changelogs for v0.53.0 and v0.54.0-preview.0 (merged earlier this week).
- **Changelogs merged today**:  
  - [v0.53.0 changelog PR #28568](https://github.com/google-gemini/gemini-cli/pull/28568)  
  - [v0.54.0-preview.0 changelog PR #28567](https://github.com/google-gemini/gemini-cli/pull/28567)

---

## Hot Issues (10 selected)

1. **[#18811 – API Error: Failed to generate content – invalid argument](https://github.com/google-gemini/gemini-cli/issues/18811)**  
   *15 comments, 5 👍* | P2, core, stale, bot‑triaged.  
   A long‑standing bug affecting automatic npm updates and subsequent API calls. Community still reporting it months later; root cause unclear.

2. **[#19883 – No capacity for gemini-3-flash-preview](https://github.com/google-gemini/gemini-cli/issues/19883)**  
   *13 comments, 8 👍* | P2, platform, stale, need‑retesting.  
   Users report `gemini-3-flash` unreachable while lite/pro models work. Leads to frustration when trying to use the latest flash model.

3. **[#22323 – Subagent recovery after MAX_TURNS reported as GOAL success](https://github.com/google-gemini/gemini-cli/issues/22323)**  
   *12 comments* | P1, agent, maintainer only.  
   Subagents report `status: "success"` even when hitting turn limits – masks real failures. Maintainers are investigating (workstream‑rollup).

4. **[#18834 – Sandbox image missing or could not be pulled](https://github.com/google-gemini/gemini-cli/issues/18834)**  
   *11 comments* | P1, core, stale, has proposed fix.  
   Sandbox startup failure even when images are pullable. A low‑effort fix was suggested by a community member but not yet merged.

5. **[#18961 – VS Code companion extension not detected](https://github.com/google-gemini/gemini-cli/issues/18961)**  
   *8 comments* | P2, extensions, stale.  
   CLI fails to detect the installed VS‑Code extension, breaking file access and diff display. Several users chimed in with similar experiences.

6. **[#22745 – AST‑aware file reads, search, and codebase mapping (EPIC)](https://github.com/google-gemini/gemini-cli/issues/22745)**  
   *7 comments* | P2, agent, maintainer only.  
   Tracks investigations into using AST tools (tilth/glyph) to reduce token noise and improve method‑level navigation. High potential for agent efficiency.

7. **[#21968 – Gemini does not use skills and sub‑agents enough](https://github.com/google-gemini/gemini-cli/issues/21968)**  
   *6 comments* | P2, agent, maintainer only.  
   Anecdotal reports that custom skills and sub‑agents are rarely invoked unless explicitly instructed. Limits the value of user‑defined workflows.

8. **[#26522 – Auto Memory retrying low‑signal sessions indefinitely](https://github.com/google-gemini/gemini-cli/issues/26522)**  
   *5 comments* | P2, agent, maintainer only.  
   Auto Memory marks sessions as processed only after reading; low‑signal sessions stay unprocessed and get retried forever, wasting model calls.

9. **[#27578 – Gemini keeps thinking with only “hello”, failure rate 100%](https://github.com/google-gemini/gemini-cli/issues/27578)**  
   *4 comments* | P1, agent, stale, possible duplicate.  
   A seemingly trivial greeting triggers an infinite thinking loop. User attached chat history; maintainers flagged for manual triage.

10. **[#25166 – Shell command execution stuck with “Waiting input” after completion](https://github.com/google-gemini/gemini-cli/issues/25166)**  
    *4 comments, 3 👍* | P1, core, maintainer only.  
    After simple shell commands, the CLI hangs indicating “Awaiting user input” despite the command having finished. Affects automation workflows.

---

## Key PR Progress (10 selected)

1. **[#28581 – fix(cli): skip diff hunk markers during @ processing](https://github.com/google-gemini/gemini-cli/pull/28581)**  
   ✅ Open | size/m, area/core.  
   Prevents unified/combined diff hunk markers from being parsed as `@file` references, avoiding recursive glob searches that cause heap growth on large diffs.

2. **[#28410 – fix(core): shorten MCP tools/list discovery timeout](https://github.com/google-gemini/gemini-cli/pull/28410)**  
   ✅ Closed | P1, agent.  
   Stops the CLI from freezing for up to 10 minutes when an MCP server doesn’t respond to `tools/list`. A critical quality‑of‑life fix.

3. **[#28406 – fix(availability): apply modelIdResolutions to tool sub‑agent model configs](https://github.com/google-gemini/gemini-cli/pull/28406)**  
   ✅ Closed | P1, agent.  
   Ensures `gemini-3-flash-preview` references in tool configs go through `modelIdResolutions`, fixing `INVALID_MODEL` errors for users without preview access.

4. **[#28485 – fix(cli): add gemini-3.5-flash to model selector](https://github.com/google-gemini/gemini-cli/pull/28485)**  
   ✅ Open | P2, core.  
   Exposes `gemini-3.5-flash` and `gemini-3.6-flash` in the UI model picker. Addresses a regression where only `gemini-2.5-flash` was offered.

5. **[#28481 – fix(core): refresh MCP OAuth tokens with stored client ID](https://github.com/google-gemini/gemini-cli/pull/28481)**  
   ✅ Open | P1, security.  
   Fixes OAuth token refresh for dynamically registered MCP servers; previously the refresh deleted stored credentials, forcing re‑auth on every run.

6. **[#28586 – fix(core): preserve thoughtSignature in functionCall parts](https://github.com/google-gemini/gemini-cli/pull/28586)**  
   ✅ Open | P2, agent.  
   Resolves a 400 error during parallel tool calls caused by a regression in v0.53.0 that stripped `thoughtSignature` from function call parts.

7. **[#28488 – feat(cli): auto‑compress chat history on context overflow](https://github.com/google-gemini/gemini-cli/pull/28488)**  
   ✅ Open | size/m.  
   Adds a `model.autoCompressOnOverflow` setting that automatically compresses history instead of showing a warning. Helps users avoid manual `/compress`.

8. **[#28566 – fix(core,cli): propagate InvalidStreamError details to UI](https://github.com/google-gemini/gemini-cli/pull/28566)**  
   ✅ Open | P1, core.  
   Passes error type and message from backend to the UI hooks, enabling actionable suggestions (e.g., “use /compress”) when empty responses occur.

9. **[#28551 – fix(cli): fall back to embedded macOS seatbelt profiles](https://github.com/google-gemini/gemini-cli/pull/28551)**  
   ✅ Open | size/l.  
   Prevents startup crash on macOS/gMac when static `.sb` seatbelt profiles are missing from runfiles or bundle folder. Essential for sandbox mode on macOS.

10. **[#27154 – fix(core): prevent PTY memory leak](https://github.com/google-gemini/gemini-cli/pull/27154)**  
    ✅ Closed | P2, core.  
    Eliminates a memory and file descriptor leak where PTY entries were never garbage collected because `activePtys.delete()` was inside an unresolved promise `.then()`.

---

## Feature Request Trends

- **AST‑Aware Code Understanding** (#22745, #22746) – Users and maintainers are investigating whether Abstract Syntax Tree tools can improve file reads, search, and codebase mapping, reducing token waste and turn counts.
- **Better Agent Autonomy** (#21968, #22672) – Demands for agents to use custom skills and sub‑agents proactively, and to avoid destructive actions (e.g., `git reset --force`) without permission.
- **Resilient Memory System** (#26522, #26523, #26516) – Multiple EPICs focus on making Auto Memory more reliable: stop indefinite retries, quarantine invalid patches, and improve redaction logging.
- **Browser Agent Hardening** (#22232, #21983) – Enhance browser sub‑agent to handle locked profiles, dead sessions, and Wayland display issues without crashing.
- **Context Window Overflow Handling** (#28488 PR) – Automatic compression when the context window is about to overflow, rather than blocking the user.

---

## Developer Pain Points

- **Persistent API “invalid argument” errors** – Multiple high‑comment issues (#18811, #18903) remain open for months, often without clear root cause.
- **Model capacity & availability** – Users frequently hit “No capacity” for `gemini-3-flash-preview` (#19883), rendering the model unusable.
- **Subagent false success reporting** – #22323 shows that hitting `MAX_TURNS` is reported as “GOAL success”, misleading users and evaluators.
- **Sandbox environment flakiness** – Issues like #18834 (missing sandbox images) and #28551 (missing seatbelt profiles on macOS) cause startup crashes for sandbox users.
- **VS Code extension integration failures** – #18961 highlights that the CLI often cannot detect the companion extension, losing editor integration.
- **Shell execution hangs** – #25166 describes commands finishing but CLI never returning, stuck on “Waiting input”.
- **Memory leaks** – #27154 (PTY leak, now fixed) and general resource leaks under sustained usage affect long‑running sessions.
- **MCP OAuth token refresh breakage** – #28481 (PR still open) shows that OAuth‑configured MCP servers force re‑auth every session due to token deletion on refresh failure.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-07-30

---

## 1. Today's Highlights

The team shipped **v1.0.76** with major plugin lifecycle controls and **grok-4.5** support, while a new **Sessions sidebar** and **Queue Manager** landed in pre-release builds. On the bug front, persistent zombie-process accumulation (#4163) and a new typing-latency regression (#4299) have drawn community attention. A flurry of triage issues around session resume, color rendering in tmux, and silent crashes on non-default log levels suggest polish gaps in the latest release train.

---

## 2. Releases

Several versions were published in the last 24 hours, culminating in **v1.0.76** (2026-07-29).

**v1.0.76** (stable)  
- Added enable/disable controls in `/plugins` for plugins, instructions, agents, LSP servers, and hooks  
- Added support for the **grok-4.5** model  
- Sandbox denied paths now enforced for relative and symlinked entries on macOS and Linux (Windows excluded)  
- Unsent prompt text now persists across sessions  

**v1.0.76-5** (pre-release)  
- Same plugin controls and grok-4.5 support  

**v1.0.76-4** (pre-release)  
- Fixed sandbox denied-path enforcement for relative/symlinks  

**v1.0.76-3** (pre-release)  
- Auto-update notification now suggests `/restart` and drops warning color  
- `/diff` performance improvements for large multi-file diffs  
- Split-view sidebar: `hover-to-focus` now off by default (opt in with `sidebar.hoverFocus`)  

**v1.0.76-2** (pre-release)  
- **Directable Queue Manager** (staff-only) — reorder, edit, remove, repeat, and immediately send queued messages  
- **Sessions sidebar** (experimental, `/expe`) — manage multiple concurrent sessions, switch, spawn, see status  

---

## 3. Hot Issues (10 selected)

| # | Issue | Why It Matters | Community Reaction |
|---|-------|----------------|-------------------|
| **#4163** | [CLOSED] Zombie child processes on Linux — copilot doesn't reap subprocesses | Core reliability; each session leaks ~2 zombies/minute. Closed but see #4290. | 3 👍, 6 comments; flagged as high impact for long-running sessions |
| **#4290** | [OPEN] #4163 is **not fixed** on AlmaLinux 8.10 | Reopen of a critical stability bug; suggests incomplete platform-specific fix. | 0 comments yet; will likely escalate quickly |
| **#4202** | `view` tool reports "Path does not exist" for existing files (1.0.73+) | Regression in the built-in file-reading tool — blocks core workflows. | 3 comments, no 👍 yet; reproducible across versions |
| **#1168** | Excessive authorization prompts ("authorization fatigue") during single request | A single high-level prompt can trigger **>12 auth requests**; UX blocking for power users. | 2 👍, 3 comments; long-standing (Jan 2026) |
| **#4293** | Sub-agents with full tool access return empty/no error; restricted-tool agents work | Silent failure in agent delegation — hard to diagnose. | 2 comments; reported today |
| **#4299** | [NEW] Increasing typing latency over long sessions with background agents | Makes the CLI unusable after extended use; urgent for power users. | Reported today, 0 comments yet |
| **#4285** | [OPEN] Silent exit code 1 on any non-default log level (Windows + Linux) | Blocks debugging; affects all users who need logging. | 2 👍, 1 comment; triage-labeled |
| **#4286** | Streaming `input_json_delta` buffered until complete — multi-minute silences on large tool args | Kills responsiveness for tools with large arguments (edits, file writes). | Reported yesterday; no comments yet |
| **#4287** | `general-purpose` subagent uses `gpt-5.4-mini` even when configured to inherit model | Model selection bug — undermines control over which model runs sub-tasks. | Reported yesterday; subagent architecture impact |
| **#4294** | Resumed session injects `COLORTERM=truecolor`, changing prompt highlight | Terminal config leak; affects reproducibility of terminal appearance. | Reported today; cosmetic but confusing |

---

## 4. Key PR Progress

**Only one open PR was updated in the last 24 hours:**

- **#4100** — `shangti0168` (author: huangyoufeng76-debug)  
  Summary: “安全性” (Chinese: security)  
  *Status:* OPEN, created 2026-07-12, last updated 2026-07-29  
  *Notes:* The PR description is minimal and appears to be a non-standard contribution (no linked issue, no code diff context). It does not represent active feature work from the core team. The digest this week is dominated by the rapid release cycle rather than substantial PR activity.

---

## 5. Feature Request Trends

The following patterns emerge from recent and long-standing issues:

1. **Session Management & Workflow Hygiene**  
   - Sort `/resume` by recency (#4140 — 0 👍, but UX pain)  
   - Git worktree lifecycle management (#1613 — **36 👍**, 3 comments; strong community demand)  
   - ACP `session/close` support (#4113 — 1 👍, blocks integration with ACP clients)

2. **Plugin & Agent Customization**  
   - `.agents` discovery for instructions, agents, hooks in any folder (#4204)  
   - Server-managed `enabledPlugins` that actually persists enablement (#4283)  
   - Bearer token support for BYO-K auth (#4300 — corporate compliance need)

3. **Sandbox & Tooling Controls**  
   - Selective enable/disable of sandbox tools (#4298 — new, feature request)  
   - AI credits near-limit warning in CLI (#4295 — parity with VS 2026 IDE)

4. **Model & Agent Behavior**  
   - Subagent model inheritance fixes (#4287)  
   - Streaming partial tool argument rendering (#4286 — performance concern)

---

## 6. Developer Pain Points

Recurring frustrations visible in the past 24 hours:

- **Process Management Bugs:** Zombie accumulation (#4163, #4290) is a systemic reliability issue on Linux, and the fix is not universal.  
- **Silent Failures:** Sub-agents returning empty with no error (#4293) and silent exit on log-level changes (#4285) make debugging nearly impossible.  
- **Perf Degradation:** Typing latency over long sessions (#4299) and streaming buffering (#4286) erode trust in the tool for production use.  
- **View Tool Regression:** A critical built-in file-reading tool broke in 1.0.72+ (#4202), forcing rollbacks.  
- **Terminal Interop:** iTerm2 paste not working (#4296), tmux color corruption (#4292), and `COLORTERM` injection (#4294) show terminal-level friction on macOS/Linux.  
- **Auth Fatigue:** Being asked to authorize a dozen times per request (#1168) remains unresolved and is a top UX complaint.

---

*Generated from github.com/github/copilot-cli data, snapshot 2026-07-30.*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-07-30

**Data Source:** [github.com/MoonshotAI/kimi-cli](https://github.com/MoonshotAI/kimi-cli)

---

## 1. Today’s Highlights

No new releases were published in the last 24 hours, but the community continued to show strong interest in **enterprise-grade API gateway support** for the newly open-sourced Kimi K3 model (2.8T parameters). A prominent feature request (#2568) calls for custom API Base URL to enable self-hosted K3 gateways, addressing concurrency, latency, and security pain points. Meanwhile, two long-standing pull requests—one fixing `StrReplaceFile` chaining behavior and another resolving empty prompt values in the `UserPromptSubmit` hook—received renewed attention after periods of inactivity.

---

## 2. Releases

No new releases in the last 24 hours.

---

## 3. Hot Issues

> *Only 1 issue was updated in the reporting window. The following analysis reflects the singular but significant community discussion.*

### #2568 [OPEN] Feature Request: Support custom API Base URL to access enterprise-level K3 gateway
- **Author:** kwu18-png
- **Created:** 2026-07-29 | **Updated:** 2026-07-29 | **Comments:** 0 | 👍: 0
- **GitHub:** [MoonshotAI/kimi-cli Issue #2568](https://github.com/MoonshotAI/kimi-cli/issues/2568)

**Why it matters:** This is the strongest signal yet that the community is actively preparing for **production-grade, self-hosted deployments** of K3. The request lists concrete enterprise pain points:
- API rate limiting for team collaboration
- Cross-region latency from single-region official endpoints
- Lack of automatic failover mechanisms
- Scattered API key management and audit difficulties

**Community reaction:** Though comments are zero (likely filed very recently), the lack of negative discussion suggests broad alignment. Expect this to become a high-traffic thread once the K3 deployment wave accelerates. No upvotes yet, likely due to recency.

---

## 4. Key PR Progress

> *Four PRs were updated. The following two are most impactful.*

### #2569 [OPEN] fix(tools): count chained StrReplaceFile edits against intermediate content
- **Author:** aalhadxx
- **Created:** 2026-07-29 | **Updated:** 2026-07-29 | **Comments:** undefined
- **GitHub:** [MoonshotAI/kimi-cli PR #2569](https://github.com/MoonshotAI/kimi-cli/pull/2569)

**Description:** Fixes a subtle correctness bug in the `StrReplaceFile` tool. Previously, each string replacement was measured against the *original* file text. When a later edit depended on text inserted by an earlier one (e.g., chaining), the count reported zero replacements despite successful application. This PR ensures intermediate content is tracked so chained replacements are accurately counted.

**Why it matters:** This bug could silently mislead developers into thinking their edit requests failed, wasting debugging time. The fix improves diagnostic reliability for any multi-step file manipulation workflow.

### #2176 [OPEN] fix(hooks): extract text from ContentPart for UserPromptSubmit hook
- **Author:** tears-mysthrala
- **Created:** 2026-05-07 | **Updated:** 2026-07-29 | **Comments:** undefined
- **GitHub:** [MoonshotAI/kimi-cli PR #2176](https://github.com/MoonshotAI/kimi-cli/pull/2176)

**Description:** Resolves #2148. The `UserPromptSubmit` hook received an empty `prompt` and `matcher_value` when `user_input` was `list[ContentPart]` (the default for all messages). The code only handled `str` inputs, falling back to `""` for everything else. This PR extracts text from `ContentPart` objects, enabling regex matchers to work correctly with the default message format.

**Why it matters:** This is a **long-standing bug** (filed May 7) that silently broke any hook-based filtering or matching logic for most users. Its revival after nearly three months signals that maintainers may be preparing to merge it.

### #1790 [CLOSED] feat(windows): prefer pwsh over powershell.exe for Shell tool
- **Author:** scwf
- **Created:** 2026-04-08 | **Updated:** 2026-07-29 | **Comments:** undefined
- **GitHub:** [MoonshotAI/kimi-cli PR #1790](https://github.com/MoonshotAI/kimi-cli/pull/1790)

**Description:** Improves Windows shell detection logic: first checks `pwsh` via PATH, then default install under `Program Files\PowerShell\7`, then Windows PowerShell. The `shell_name` remains `Windows PowerShell` to maintain compatibility with `-command` flag usage. Tests added for all three paths.

**Why it matters:** PowerShell 7 (pwsh) offers cross-platform consistency, better performance, and modern scripting features. This PR makes Kimi CLI feel more native on Windows, reducing friction for the growing Windows developer base.

### #2567 [CLOSED] feat(usage): show absolute reset datetime in /usage panel
- **Author:** versun
- **Created:** 2026-07-28 | **Updated:** 2026-07-29 | **Comments:** undefined
- **GitHub:** [MoonshotAI/kimi-cli PR #2567](https://github.com/MoonshotAI/kimi-cli/pull/2567)

**Description:** The `/usage` panel previously displayed quota reset times as fuzzy relative durations (e.g., `resets in 4d`). This PR adds the **absolute local reset datetime** while keeping the relative duration as a superscript annotation.

**Why it matters:** Relative times are ambiguous across time zones and session lifetimes. Absolute datetimes clarify exactly when quotas refresh, especially important for enterprise teams coordinating around usage limits.

---

## 5. Feature Request Trends

Based on the data snapshot, the most-requested feature direction is:

### Enterprise K3 Gateway Integration
- **Signal strength:** High (single but detailed request #2568)
- **Drivers:**
  - Kimi K3 (2.8T parameters) was open-sourced in July 2026, triggering enterprise adoption interest
  - Official API endpoints are not designed for high-concurrency team use, cross-region deployments, or failure resilience
  - Enterprise security policies require API key centralization and audit trails
- **Implicit related asks:**
  - CLI support for HTTP/S proxy
  - Retry and fallback logic for API calls
  - Usage reporting per API key or team

### Developer Experience Improvements
- **Signal strength:** Medium (evident from PRs #2567, #2569)
- **Drivers:**
  - Better visibility into quota/reset dates (absolute vs. relative)
  - Accurate feedback on tool execution (e.g., correct edit counts)
- **Implicit trends:** Users want the CLI to be more transparent about what it’s doing internally, reducing ambiguity and surprises.

---

## 6. Developer Pain Points

| Pain Point | Evidence | Severity |
|---|---|---|
| **Missing enterprise-grade API configuration** | Issue #2568 explicitly lists concurrency limits, latency, failover, and audit issues | High |
| **Unreliable hook behavior** | PR #2176 (open since May 2026) shows that the `UserPromptSubmit` hook silently fails for default input formats | Medium-High |
| **Inaccurate tool feedback** | PR #2569 reveals chained file edits may be reported as zero replacements despite success | Medium (affects debugging) |
| **Windows shell inconsistency** | PR #1790 (closed after 3 months) indicates long-standing friction for Windows users who prefer modern PowerShell | Low (resolved) |
| **Ambiguous usage information** | PR #2567 improves `/usage` panel readability, suggesting users found relative reset times confusing | Low-Medium |

### Key Takeaway
The dominant pain point is **the gap between official API usage and production scenarios for K3.** As more teams self-host the model, they need CLI tools that can route through their own gateways with enterprise reliability. The community is signaling that without this feature, Kimi CLI may become a bottleneck in K3 adoption for organizations.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest – 2026-07-30

## Today’s Highlights
No releases landed in the last 24 hours, but the issue tracker is buzzing: the long‑awaited `/btw` command (#16992) has 168 👍 and renewed conversation, while a wave of compliance‑related pull requests targets `oa‑compat` cost chunks, frontmatter sanitization, and path helpers. On the bug front, a critical Windows SchemaError (#39600) and a persistent auto‑compaction loop (#30680) are drawing developer attention.

---

## Releases
No new versions published in the last 24 hours.

---

## Hot Issues (10)

1. **[FEATURE] add /btw command (#16992)**
   Inspired by Anthropic’s Claude Code, this command lets developers interject “by the way” context mid‑session. 168 upvotes and 20 comments show strong community demand.  
   → [Issue #16992](https://github.com/anomalyco/opencode/issues/16992)

2. **Auto‑compaction loop stops responses (#30680)**
   Even in a fresh empty folder, OpenCode enters an infinite compaction loop, consuming tokens and refusing to generate. Closed but likely reopened – a major reliability blocker.  
   → [Issue #30680](https://github.com/anomalyco/opencode/issues/30680)

3. **“exiting loop” message ruins TUI (#38801)**
   Users report seeing the dreaded “exiting loop” repeatedly, forcing session restarts. The workaround (`step=80`) only delays the inevitable.  
   → [Issue #38801](https://github.com/anomalyco/opencode/issues/38801)

4. **Agent stops after tool execution with OpenAI‑compatible providers (#14972)**
   Gemini, LiteLLM, etc. send `finish_reason: "stop"` after tool calls, breaking the agent loop. Critical for multi‑provider setups.  
   → [Issue #14972](https://github.com/anomalyco/opencode/issues/14972)

5. **Nested subagent permission requests hang silently (#13715)**
   When a subagent spawns another subagent that requires bash permission, the prompt is never rendered and the session freezes. 22 upvotes reflect widespread pain.  
   → [Issue #13715](https://github.com/anomalyco/opencode/issues/13715)

6. **Windows ARM64 native TUI fails to initialize (#19130)**
   Native ARM64 binary works for CLI commands but the TUI crashes due to a `bun:ffi` TinyCC error. Platform support gap.  
   → [Issue #19130](https://github.com/anomalyco/opencode/issues/19130)

7. **[FEATURE] “Auto mode” LLM model classifier auto‑approval (#37564)**
   Related to #33585, this requests that permission prompts be automatically approved when the LLM is confident about a low‑risk action.  
   → [Issue #37564](https://github.com/anomalyco/opencode/issues/37564)

8. **[FEATURE] Configurable mid‑run prompt delivery: queue vs steer (#32157)**
   Users want to decide whether a prompt submitted while the agent is busy should be queued, used to steer the current run, or break the loop. 8 upvotes.  
   → [Issue #32157](https://github.com/anomalyco/opencode/issues/32157)

9. **`opencode export | jq` produces truncated JSON (#29330)**
   Large session exports silently drop data past 64 KiB when piped. Exit code stays 0, misleading users.  
   → [Issue #29330](https://github.com/anomalyco/opencode/issues/29330)

10. **All multi‑parameter tools fail with SchemaError on Windows (#39600)**
    Version 1.18.9 on Windows breaks `bash`, `write`, `glob` – any tool with more than one parameter. Single‑parameter `read` works occasionally.  
    → [Issue #39600](https://github.com/anomalyco/opencode/issues/39600)

---

## Key PR Progress (10)

1. **fix(console): emit valid cost chunks (#39607)**
   Zen’s `oa‑compat` cost events now include required OpenAI fields (`id`, `object`, `created`, `model`) so strict clients can deserialize them. Fixes #39061.  
   → [PR #39607](https://github.com/anomalyco/opencode/pull/39607)

2. **feat(core): parse shell permission commands (#39567)**
   Uses tree‑sitter to pre‑parse Bash/PowerShell commands before presenting permissions. Splits compound input and derives reusable command‑prefix approvals.  
   → [PR #39567](https://github.com/anomalyco/opencode/pull/39567)

3. **fix(core): sanitize frontmatter keys containing hyphens and dots (#39604)**
   Keys like `allowed-tools` now survive sanitization instead of causing parse crashes. Fixes #39603.  
   → [PR #39604](https://github.com/anomalyco/opencode/pull/39604)

4. **feat(tui): prefetch open session tabs after connect (#39589)**
   Eliminates the blank‑screen delay when first switching to an open tab by warming session data in the background.  
   → [PR #39589](https://github.com/anomalyco/opencode/pull/39589)

5. **feat(tui): make session tab switching fast for long transcripts (#39568)**
   Tab switches are now roughly constant‑time by rendering a fixed‑size tail of the transcript, regardless of total size.  
   → [PR #39568](https://github.com/anomalyco/opencode/pull/39568)

6. **fix(tui): resolve filetype case‑insensitively (#39602)**
   Uppercase extensions (`main.PY`) and bare names (`Makefile`) now get syntax highlighting. Fixes #39601.  
   → [PR #39602](https://github.com/anomalyco/opencode/pull/39602)

7. **fix(core): correct path helpers for delimiter‑less input (#39599)**
   `getDirectory()` no longer invents a `"/"` parent for root‑level files. Fixes #39598.  
   → [PR #39599](https://github.com/anomalyco/opencode/pull/39599)

8. **fix(core): retry lazy initializer after it throws (#39597)**
   Prevents a transient failure from permanently caching `undefined` by only memoizing after successful initialization. Fixes #39596.  
   → [PR #39597](https://github.com/anomalyco/opencode/pull/39597)

9. **feat(plugin): add ui.tabs API for session tab control (#39591)**
   Exposes `ui.tabs` in the TUI plugin context, enabling plugins to observe and control open/closed/focused tabs.  
   → [PR #39591](https://github.com/anomalyco/opencode/pull/39591)

10. **fix(opencode): await stdout drain so piped output is not truncated (#39577)**
    Ensures `export`, `db`, and `session list` commands flush fully before exiting, preventing data loss beyond 64 KiB. Closes #29330.  
    → [PR #39577](https://github.com/anomalyco/opencode/pull/39577)

---

## Feature Request Trends

- **Mid‑session interaction commands** – The `/btw` command (#16992) is the most upvoted feature, signaling a desire to inject context without interrupting the agent.
- **Permission automation** – “Auto mode” classification (#37564) and configurable queue/steer/break semantics (#32157) reflect a push to reduce manual approvals while retaining safety.
- **Internationalization & accessibility** – RTL language support (Farsi, Urdu, Pashto – #34697), Hebrew PR (#39423), and cursor style configuration (#39608) show growing global adoption.
- **TUI polish** – Scrollbars (#10570), comments tab before confirm (#39410), and improved tab switching (#39568, #39589) are frequent improvement areas.

---

## Developer Pain Points

1. **TUI instability** – The auto‑compaction loop (#30680) and recurring “exiting loop” message (#38801) make sessions unreliable after moderate use.
2. **Platform fragmentation** – Windows native ARM64 crashes (#19130), GNU Screen compatibility (#32985), and PowerShell‑specific bugs (#10570) hamper non‑Linux users.
3. **Provider compatibility** – OpenAI‑compatible providers breaking the agent loop (#14972) and custom provider authentication failures (#39538, #39552) are recurring friction points.
4. **Permission handling** – Silent hangs for nested subagent permissions (#13715) and lack of auto‑approval for low‑risk commands (#37564) impede workflow.
5. **Data export / piping** – Truncated JSON when piped (#29330) and missing compliance fields in cost chunks (#39606) cause trust issues in automation pipelines.
6. **Memory and style bugs** – TreeSitter client destruction memory leak (#36454) and incorrect context‑usage display (#39595) degrade the developer experience over time.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-07-30

**Data source: [github.com/badlogic/pi-mono](https://github.com/badlogic/pi-mono)**  
*Issues and PRs are from the [earendil-works/pi](https://github.com/earendil-works/pi) repository.*

---

## 1. Today's Highlights

- **v0.83.0 released** — introduces credential export (`pi auth print-api-key`, `pi auth print-bearer-token`) for external clients and a headless OpenRouter sign‑in workflow via SSH.  
- **High community activity** — 50 issues and 22 PRs updated in the last 24 hours, with a strong focus on TUI quirks, provider compatibility, and tool output configurability.  
- **Critical bugs addressed** — fixes for `undefined usage` crashes (DeepSeek), misleading startup error messages, and Kitty keyboard protocol leaks are among the most commented items.

---

## 2. Releases

### v0.83.0

- **`pi auth print-api-key` / `pi auth print-bearer-token`** — exports configured credentials with automatic OAuth refresh and minimum‑validity enforcement, enabling external clients (e.g., CI, custom scripts) to use Pi’s authentication.  
- **Headless OpenRouter sign‑in** — completes the `/login` flow over SSH by pasting a redirect URL, removing the need for a browser in headless or remote environments.

---

## 3. Hot Issues (Top 10 by Community Attention)

| # | Issue | Why It Matters | Community Reaction |
|---|-------|----------------|-------------------|
| [#6951](https://github.com/earendil-works/pi/issues/6951) | Qwen reasoning effort mismatch | Qwen’s official tiers differ from Pi’s defaults (low/medium/high vs. minimal/low/medium/high). Closed, but forces model‑specific configuration. | 8 comments, 👍1 |
| [#1871](https://github.com/earendil-works/pi/issues/1871) | Misleading “No API key” during parallel startup | Lock contention between concurrent `pi` processes produces a confusing auth error. Closed with fix. | 7 comments, high user frustration |
| [#3432](https://github.com/earendil-works/pi/issues/3432) | Customizable line length & bytes for `read` tool | Hard‑coded limits waste context and break local models. Closed, feature added in v0.83.0. | 6 comments, 👍1 |
| [#7199](https://github.com/earendil-works/pi/issues/7199) | Kimi K3 support on Fireworks | New model on models.dev but missing from Pi’s Fireworks provider. Open, in‑progress. | 5 comments, awaiting merge |
| [#6819](https://github.com/earendil-works/pi/issues/6819) | `assistant.usage` undefined crashes session | DeepSeek V4 often omits usage in streaming → permanent session crash. Closed with guard fix. | 4 comments, blocker for DeepSeek users |
| [#7035](https://github.com/earendil-works/pi/issues/7035) | Large `grep` operations cause instant crash | Solved – was a terminal‑specific bug (suckless st). Marked as `no-action`. | 4 comments, relieved users |
| [#7153](https://github.com/earendil-works/pi/issues/7153) | `/scoped-models` stalls 5 minutes | Awaiting catalog refresh before rendering UI → no feedback. Open, awaiting UX fix. | 4 comments, 👍1 |
| [#7160](https://github.com/earendil-works/pi/issues/7160) | Empty `custom: {}` discards function arguments | OpenAI‑compatible providers with empty custom payloads lose valid tool calls. Closed, fix merged. | 3 comments, clean resolution |
| [#7130](https://github.com/earendil-works/pi/issues/7130) | Backspace deletes 2 chars in Kitty terminal | Kitty protocol release events not filtered, causing double deletion. Open. | 3 comments, affects Kitty users |
| [#7252](https://github.com/earendil-works/pi/issues/7252) | Markdown renderer corrupts raw LaTeX math | Backslashes consumed in display‑only rendering; the underlying session data is intact. Closed. | 3 comments, cosmetic but annoying |

---

## 4. Key PR Progress (Top 10)

| PR | Description | Status |
|----|-------------|--------|
| [#7293](https://github.com/earendil-works/pi/pull/7293) | Queue extension commands after agent runs — explicit `pi.queueCommand()` scheduling, prevents race conditions with streaming responses. | Merged |
| [#7289](https://github.com/earendil-works/pi/pull/7289) | Comparative eval harness — seeded multi‑harness comparisons with score lift, token/cost deltas, and session snapshots. | Open |
| [#7288](https://github.com/earendil-works/pi/pull/7288) | Preserve function arguments when `custom` is empty — prevents `{ "input": "" }` replacement for OpenAI‑compatible providers. | Merged |
| [#7122](https://github.com/earendil-works/pi/pull/7122) | Fix UTF‑8 byte count in write tool, false limit warning in find, surrogate pair splitting in truncateLine. | Merged |
| [#7272](https://github.com/earendil-works/pi/pull/7272) | Preserve raw stop reasons — adds `AssistantMessage.rawStopReason` and fixes Google Vertex error mapping. | Merged |
| [#7231](https://github.com/earendil-works/pi/pull/7231) | Markdown API — new extensible Markdown rendering pipeline (closes #6747). | Open |
| [#7266](https://github.com/earendil-works/pi/pull/7266) | Show system prompt files in startup context — `SYSTEM.md` and `APPEND_SYSTEM.md` appear in the interactive [Context] section. | Merged |
| [#7163](https://github.com/earendil-works/pi/pull/7163) | Full‑text search index for SQLite — adds `SessionRepo.search()` with FTS5 migration. | Open |
| [#7245](https://github.com/earendil-works/pi/pull/7245) | Inline images under tmux via sixel — overrides the blanket tmux disable while respecting user `images` settings. | Merged |
| [#7261](https://github.com/earendil-works/pi/pull/7261) | Clipboard read support for Wayland (wl‑paste) and X11 (xclip/xsel) — fixes Ctrl+V paste in non‑X11 environments. | Merged |

---

## 5. Feature Request Trends

- **Provider & model‑specific configuration** — Users request per‑model reasoning effort maps (Qwen, DeepSeek), expanded provider support (Kimi K3, Amazon Bedrock Mantle), and better handling of custom / OpenAI‑compatible endpoints.
- **Terminal and UI ergonomics** — LaTeX math rendering (`$$...$$`), inline images under tmux, customisable truncation limits, smarter `/scoped-models` loading, and persistent autocomplete settings are top requests.
- **Extension API improvements** — Exposing `navigateTree`, session flush control, command queuing, and status indicators for waiting states to extend Pi’s integration surface.
- **Performance & resilience** — Configurable tool output limits, graceful handling of missing usage data, and avoidance of O(n²) output in JSON mode.

---

## 6. Developer Pain Points

- **Keyboard protocol leakage** – Kitty terminal release events leak over SSH on exit; backspace double‑delete in Kitty (issue #7130, #7294) remains unresolved.
- **Misleading errors during startup** – Lock contention and missing API key messages confuse users running parallel processes (issue #1871).
- **Undefined data crashes** – Providers omitting usage or finishReason leads to permanent session failures (issue #6819, #7255).
- **Stalled or silent operations** – `/scoped-models` stalls for minutes without feedback; `/compact` triggers twice when context is low (issue #7153, #7253).
- **Hard‑coded limits** – Tool output truncation, byte counting for non‑ASCII, and autocomplete max values not persisting across restarts.
- **OOM with large outputs** – JSON mode emits whole assistant messages per update, causing agent memory exhaustion for large file writes (issue #7290).
- **Wayland clipboard** – Clipboard paste silently fails on Wayland until the fix in PR #7261.
- **Deprecated API usage** – SDK examples still pointing to deprecated `getModel` from `@earendil-works/pi-ai/compat` cause confusion (PR #7268).

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区摘要 — 2026-07-30

## 今日亮点

今天 (2026-07-30) 的核心焦点是 **稳定性和核心集成修复**。一方面，多个由机器人自动报告的 **Main CI 失败** 问题（特别是围绕 `setModel` 动态切换、子代理任务委托以及 cron 任务流）正在被积极修复，`autofix/in-progress` 标签密集出现。另一方面，社区反馈的两个 **严重集成 bug** 引起了广泛关注：**Anthropic 4.6+ 模型的助手预填充 (prefill) 失败** 以及 `send_message` 工具的 `oneOf` 模式在 Anthropic 上完全失效。此外，`v0.21.1` 版本引入的 **Windows 终端内容滚动问题** 和 **鼠标滚轮/选取失效** 问题在社区中引发了大量讨论，表明 UI/UX 的回归测试需要加强。

## 最新发布

*   **v0.21.1-nightly.20260730.1643a6c9a**: 此 Nightly 版本主要包含 CI 流程修复（为容器任务添加默认 bash shell）以及 `web-shell` 的预发布修复。

## 热门问题 (Top 10)

1.  **[#8039] [P1/Bug] fix(core): Anthropic 4.6+ assistant-prefill 400 + thinking.display silently defaults to 'omitted'** ([链接](https://github.com/QwenLM/qwen-code/issues/8039))
    *   **为何重要**: 这是一个影响所有 Claude Opus/Sonnet 4.6+ 及 5.x 系模型的核心集成问题。报告了两个相关 bug：当Gemini格式历史结束时，助手预填充会导致400错误且无回退机制；以及 `thinking.display` 参数被静默设置为 `omitted`。这会直接导致用户体验断裂和模型输出行为不符合预期。社区反馈积极，表明该问题确认度高。

2.  **[#8012] [P2/功能请求] feat(github-channel): close delivery, batching, and review-event gaps** ([链接](https://github.com/QwenLM/qwen-code/issues/8012))
    *   **为何重要**: 这是 GitHub 频道后台自动化路线图的关键下一步。继 #7826 解决了语义路由缺口后，此请求旨在填补交付、批处理和 PR 审查事件方面的空白，以完善 GitHub 的完全自动化工作流。

3.  **[#7167] [自动维护] Fleet Shepherd Dashboard** ([链接](https://github.com/QwenLM/qwen-code/issues/7167))
    *   **为何重要**: 由“Fleet Shepherd”工作流自动维护的仪表盘问题，用于监控 PR 状态。它显示了当前队列中的多个 PR 处于“checks in flight”状态，为项目健康度和 CI 拥堵情况提供了快照。

4.  **[#8017] [P3/Bug] fix(github-channel): detect self-account configurations that cannot receive operator triggers** ([链接](https://github.com/QwenLM/qwen-code/issues/8017))
    *   **为何重要**: 发现了一个配置陷阱：当 GitHub 频道的 PAT 与操作账户属于同一账号时，该账号无法触发频道响应。这是一个典型的“静默失败”问题，对自托管用户配置造成了困惑。

5.  **[#7964] [P2/Bug] window 终端中升级到0.21.1后内容无法滚动** ([链接](https://github.com/QwenLM/qwen-code/issues/7964))
    *   **为何重要**: `v0.21.1` 版本引入的严重 UI 回归，直接影响了 Windows 用户的核心操作，导致大量反馈。该问题已被修复并关闭。

6.  **[#8070] [Bug] Main CI failed: E2E Tests — sdk-typescript/subagents.test.ts** ([链接](https://github.com/QwenLM/qwen-code/issues/8070))
    *   **为何重要**: 主分支 CI 失败，影响子代理功能的核心 E2E 测试。机器人已标记为 `autofix/in-progress`，表明项目在持续监控和自动修复 CI 稳定性。

7.  **[#8076] [Bug] Main CI failed: E2E Tests — cli/acp-cron.test.ts** ([链接](https://github.com/QwenLM/qwen-code/issues/8076))
    *   **为何重要**: 另一个主分支 CI 失败，这次涉及 CLI 中的 cron 集成功能。持续的 CI 不稳定是开发者社区的主要痛点，此问题已被自动跟踪。

8.  **[#8072] [P2/Bug] Main CI failed: E2E Tests — sdk-typescript/system-control.test.ts** ([链接](https://github.com/QwenLM/qwen-code/issues/8072))
    *   **为何重要**: 核心 SDK 功能 `setModel` 动态切换模型的 E2E 测试失败。这是 API 的关键路径，其不稳定性可能意味着流式响应处理或模型状态管理存在深层次问题。

9.  **[#7961] [P3/Bug] Main-turn output-token clamp can under-count CJK-heavy new content** ([链接](https://github.com/QwenLM/qwen-code/issues/7961))
    *   **为何重要**: 一个针对自托管后端的精准 bug 报告：在处理 CJK 字符时，输出 token 的估计算法由于字符/Token比例问题导致上下文窗口溢出。这对中文用户尤其重要，体现了对特定工作负载的深入优化。

10. **[#7832] [P1/Bug] YOLO mode: mid-stream socket close is not retried, making large code generation impossible** ([链接](https://github.com/QwenLM/qwen-code/issues/7832))
    *   **为何重要**: 一个影响头模式生成大文件的高优先级 bug。DashScope 网关在流式传输几分钟后会关闭 TCP 连接，而缺少重试机制使得生成长代码完全不可用。目前已关闭，说明已有修复。

## 关键 PR 进展 (Top 10)

1.  **[#8074] fix(cli): add Ctrl+Tab alternative for @ completion tab switching** ([链接](https://github.com/QwenLM/qwen-code/pull/8074))
    *   **关键内容**: 直接解决了社区反馈的 #8069 问题。由于 `Ctrl+←/→` 被大多数终端模拟器截获，该 PR 引入了 `Ctrl+Tab` 作为在 `@` 补全弹窗中切换标签页的替代方案。

2.  **[#8078] fix(web-shell): improve artifact previews** ([链接](https://github.com/QwenLM/qwen-code/pull/8078))
    *   **关键内容**: 修复了 Web Shell 中 HTML 工件和图片工件的预览问题。通过沙箱化 iframe 运行 HTML 脚本，并通过二进制字节终结点读取图片，避免了文本文件接口的限制并增加了读取边界。

3.  **[#7975] fix(serve): Isolate daemon session maintenance writers** ([链接](https://github.com/QwenLM/qwen-code/pull/7975))
    *   **关键内容**: 解决了 P0 问题 #7752。通过将守护进程的转录维护与现有的写入者锁协议隔离，防止了会话写入者锁在被替换后仍被持有的问题，从而避免了“此会话在另一个 Qwen 进程中已打开”的错误。

4.  **[#8075] fix(test): resolve turn completion on result messages in setModel E2E test** ([链接](https://github.com/QwenLM/qwen-code/pull/8075))
    *   **关键内容**: 修复了 `setModel` E2E 测试的不稳定性。原测试因一个对话轮次可能产生多条助手消息（如思考块）而导致误判，新逻辑通过等待特定 API 调用来更准确地判断轮次结束。

5.  **[#7923] fix(web-shell): quiet background task polling failures** ([链接](https://github.com/QwenLM/qwen-code/pull/7923))
    *   **关键内容**: 为 Web Shell 的后台任务轮询器增加了静默模式。将网络超时、中止等瞬态失败从用户告警降级为静默处理，同时保留非重试性严重错误的通知，提升了用户体验。

6.  **[#7944] fix(test): accept tool call OR file content in file-system-interactive** ([链接](https://github.com/QwenLM/qwen-code/pull/7944))
    *   **关键内容**: 修复了一个因模型输出“正确文件内容”而非工具调用而导致的 CI 测试失败。该 PR 使测试断言更加灵活，允许工具调用或文件内容两种正确结果，提高了测试的鲁棒性。

7.  **[#8061] feat(github-channel): add transient working reaction** ([链接](https://github.com/QwenLM/qwen-code/pull/8061))
    *   **关键内容**: 为 GitHub 频道增加了“👀”反应交互。当代理开始处理问题时，它会自动给出一个 `eyes` 反应，处理完成或失败后自动移除，为用户提供了清晰的视觉反馈。

8.  **[#8002] feat(serve): page large text files by byte cursor** ([链接](https://github.com/QwenLM/qwen-code/pull/8002))
    *   **关键内容**: 为所有工作区服务器接口（HTTP、ACP、SDK等）增加了字节游标分页功能。现在读取大文本文件时，会返回 `hasMore` 和 `nextCursor`，避免了一次性加载整个文件，是文件操作性能的重大提升。

9.  **[#8020] feat(review): statement-level mutation probes in test-efficacy** ([链接](https://github.com/QwenLM/qwen-code/pull/8020))
    *   **关键内容**: 在 `qwen review test-efficacy` 工具中引入了新的“语句级变异探针”。它能对 diff 中的新增安全语句进行确定性单行删除突变，以更精准地评估测试用例的有效性，属于代码审查能力的深刻增强。

10. **[#8050] fix: make the test suite portable on Windows** ([链接](https://github.com/QwenLM/qwen-code/pull/8050))
    *   **关键内容**: 一个全面解决 Windows 平台上测试兼容性的 PR。它处理了 POSIX 特有的语义差异，并重用现有的 Windows 验证工作流，展示了项目对跨平台支持的持续承诺。

## 功能请求趋势

1.  **背景自动化与 GitHub 深度集成**: 多个 feature request 集中于此。`#8012` 希望填补 GitHub 频道的交付和审查事件缺口，`#8013` 要求安全的输出契约和审计追踪，`#8061` 添加了 `eyes` 反应反馈。这表明社区强烈希望将 Qwen Code 打造成一个全自动的 GitHub 代码审查与协作代理。

2.  **面向角色的模型路由**: `#8021` 提出了一个关键功能：允许将不同模型（如廉价快速模型 vs 强推理模型）绑定到不同意图（如探索、实现、审查）上。这反映了高级用户对精细化成本控制和性能优化的需求。

3.  **增强的 `@` 补全交互**: 除了 `#8074` 修复的快捷键冲突外，社区还频繁对弹出菜单的功能提出改进。核心需求是弹出菜单不应遮挡阅读区域 (`#8025`)，并且其行为应更智能，以支持更高效的上下文切换 (`#8069` 相关讨论)。

## 开发者痛点

1.  **`v0.21.1` 版本 UI 回归**: 这是本周最集中的痛点。升级后 Windows 终端无法滚动 (`#7964`)、鼠标滚轮和内容选取功能失效 (`#8036`)、以及交互问卷弹窗遮挡输出 (`#8025`)，表明该版本在 Windows 和常规交互体验上测试不足。

2.  **Ctrl+C 快捷键冲突**: `#8006` 反映了在原生模式下，`Ctrl+C` 被 Qwen Code 截获用于清空/退出，导致无法在终端内进行复制操作。用户期望在选中文字时，Ctrl+C 应优先遵循终端复制功能。

3.  **频繁的 CI 失败与不稳定测试**: 大量由机器人自动报告的 Main CI 失败问题 (`#8070`, `#8072`, `#8076` 等) 是最大的开发者痛点之一。尽管自动修复流程运行中，但频繁的失败会打断协作流程、延迟发布，并降低对主分支稳定性的信心。

4.  **Anthropic/OpenAI 兼容性问题**: `#8039` (Anthropic prefill 失败) 和 `#7984` (`send_message` 的 oneOf 模式在 Anthropic 上失效) 暴露了与非 OpenAI 原生 API 集成时存在的深层兼容性问题，给依赖这些模型的自托管用户和高级用户带来了显著障碍。

5.  **对会话文件创建管理的困惑**: `#7966` 提出了一个概念性问题：用户无法清晰区分工作区中的文件是由哪个会话创建的，或是由代码运行间接生成的。这表明缺乏对会话生命周期的文件追踪和隔离机制。

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-07-30

## Today’s Highlights
The community wrapped up a busy 24‑hour cycle with **eleven closed PRs** addressing TUI stability, localization, and long‑standing bugs. A new “stop” command proposal (#4959) and a Chinese translation debate (#4949) sparked active discussion. The v0.9.2 release preparations are nearly complete, with the Skills Manager timeout (#4976) and LaTeX math rendering (#4957) both fixed.

---

## Releases
*No new releases in the last 24 hours.*  
The previous release was v0.9.2 (shipped ~29 Jul); a stabilization release v0.8.59 tracker (#3063) was recently closed.

---

## Hot Issues (10 selected)

1. **#1186 – Typed persistent permission rules (CLOSED)**  
   *[enhancement, security, tools, reliability]*  
   Implements typed `allow`/`deny`/`ask` rules scoped by tool name, command prefix, and workspace path. Community discussed edge cases for 13 comments.  
   [GitHub](https://github.com/Hmbown/CodeWhale/issues/1186)

2. **#3063 – v0.8.59 & v0.9.x release tracker (CLOSED)**  
   *[bug, documentation, release-blocker]*  
   Tracked mouse-report leaks on macOS, safety improvements, and the outstanding issue/PR queue. Closed after 11 comments as part of the v0.9.2 pipeline.  
   [GitHub](https://github.com/Hmbown/CodeWhale/issues/3063)

3. **#4959 – Proposed “stop” command (OPEN)**  
   *[enhancement]*  
   Users want a `/stop` and runtime “STOP” intercept to halt autonomous tool calls when the model is in “YOLO mode”. Received 3 comments and positive reception.  
   [GitHub](https://github.com/Hmbown/CodeWhale/issues/4959)

4. **#4949 – Chinese translation of “Constitution”: 宪法 vs 协作准则 (OPEN)**  
   *[discussion, localization]*  
   Sparked a cultural and legal debate about the best Chinese term for the project’s “Constitution”. Community members from China are weighing in.  
   [GitHub](https://github.com/Hmbown/CodeWhale/issues/4949)

5. **#4723 – Windows AltGr+Q opens help on Brazilian ABNT2 layout (OPEN)**  
   *[bug, documentation]*  
   `AltGr+Q` (typed as `Ctrl+Alt+Q` by Windows) conflicts with the `Ctrl-/` help shortcut, making `/` impossible to type. Contributor @yyyCode has opened a fix PR (#4977).  
   [GitHub](https://github.com/Hmbown/CodeWhale/issues/4723)

6. **#4957 – LaTeX math expressions not rendered (CLOSED)**  
   *[enhancement, tui, ux]*  
   Raw `$...$` source displayed instead of mathematical notation. Fixed by #4973/#4974 with Unicode substitution.  
   [GitHub](https://github.com/Hmbown/CodeWhale/issues/4957)

7. **#4941 – Thinking level silently reverts to Auto (CLOSED)**  
   *[bug]*  
   Persisted `reasoning_effort` setting was discarded by the “auto” model selection. Maintainer identified a logic gap in `apply_picker_effort_choice`.  
   [GitHub](https://github.com/Hmbown/CodeWhale/issues/4941)

8. **#4978 – Frequent Anthropic API error (400 Bad Request) (NEW, OPEN)**  
   *[bug, providers]*  
   “`type` must be in enabled/disabled/auto” appears randomly when using an Anthropic‑compatible provider. User @w1w218 reports no fixed pattern – error occurs on repeated retry.  
   [GitHub](https://github.com/Hmbown/CodeWhale/issues/4978)

9. **#4976 – Skills Manager toggle times out on cold Linux filesystems (CLOSED)**  
   *[bug, release-blocker]*  
   The owned‑to‑compatible scan triggered a full re‑audit, exceeding the 15‑second acceptance budget on cold filesystems. Fixed by reusing owned inventory (#4975).  
   [GitHub](https://github.com/Hmbown/CodeWhale/issues/4976)

10. **#4547 – Transcript keeps spinners/Stop controls for stale shell jobs (CLOSED)**  
    *[bug, tui, reliability]*  
    Background jobs that are stale or missing in `/jobs` still show animated spinners and stop controls. Fixed as part of v0.9.2 reliability pass.  
    [GitHub](https://github.com/Hmbown/CodeWhale/issues/4547)

---

## Key PR Progress (10 selected)

1. **#4942 – fix(tools): preserve CRLF edits** (@nightt5879, CLOSED)  
   Ensures `edit_file` works correctly on Windows CRLF files by normalizing search to LF and mapping results back to original byte offsets.  
   [GitHub](https://github.com/Hmbown/CodeWhale/pull/4942)

2. **#4977 – fix(tui): let AltGr-typed “/” reach the composer** (@yyyCode, OPEN)  
   Directly addresses the Brazilian keyboard layout bug (#4723) by excluding `Ctrl+Alt` when the modifier comes from AltGr on Windows.  
   [GitHub](https://github.com/Hmbown/CodeWhale/pull/4977)

3. **#4973 / #4974 – LaTeX math rendering via Unicode substitution** (@SparkofSpike @Hmbown, CLOSED)  
   Converts `$...$` delimiters into Unicode math symbols. #4974 supersedes #4973 with maintainer hardening (fixed `\\mathbb` and prevented markdown corruption).  
   [GitHub](https://github.com/Hmbown/CodeWhale/pull/4973) | [Maintainer integration](https://github.com/Hmbown/CodeWhale/pull/4974)

4. **#4896 – Move terminal clipboard writes off event loop** (@nightt5879, CLOSED)  
   Routes OSC 52 and SSH clipboard transport through a background worker, preventing clipboard backlog and event‑loop blocking. Fixes #4159.  
   [GitHub](https://github.com/Hmbown/CodeWhale/pull/4896)

5. **#4856 – Expose every shipped locale in settings** (@nightt5879, CLOSED)  
   Adds `ko`, `vi`, and `zh‑Hant` to the settings schema and locale chooser, ensuring all shipped locales are selectable. Fixes #4786.  
   [GitHub](https://github.com/Hmbown/CodeWhale/pull/4856)

6. **#4852 – Align root model fallback with TUI** (@nightt5879, CLOSED)  
   Resolves a discrepancy where the config‑level default model was not resolved against the effective provider route as the TUI does.  
   [GitHub](https://github.com/Hmbown/CodeWhale/pull/4852)

7. **#4722 – Show complete edit previews in details** (@nightt5879, CLOSED)  
   Builds a full `-/+` search/replace preview lazily in the Alt+V details pager, keeping the approval card compact.  
   [GitHub](https://github.com/Hmbown/CodeWhale/pull/4722)

8. **#4471 – Preserve Solarized Light background** (@nightt5879, CLOSED)  
   Restores the canonical `#fdf6e3` shell background and keeps ambient fish/bubble life. Theme now reports effective treatment accurately in `/theme`.  
   [GitHub](https://github.com/Hmbown/CodeWhale/pull/4471)

9. **#4519 – Initialize plugins for every launch path** (@nightt5879, CLOSED)  
   Ensures plugin registry is initialized before `resume`, `fork`, `exec`, and `serve` launches, and loads workspace `.env` only after plugin discovery (security fix).  
   [GitHub](https://github.com/Hmbown/CodeWhale/pull/4519)

10. **#4972 – Indonesian website locale & #4962 – Indonesian docs** (@atmosuwiryo, CLOSED)  
    Adds complete Bahasa Indonesia website dictionary (`chrome.ts`, `home.ts`) and documentation suite (`README.id.md`, etc.), closing #4789.  
    [Website PR](https://github.com/Hmbown/CodeWhale/pull/4972) | [Docs PR](https://github.com/Hmbown/CodeWhale/pull/4962)

---

## Feature Request Trends
- **Interrupt/stop mechanism** – Users want a reliable `/stop` command and runtime intercept to halt autonomous tool execution without waiting for the model to finish (#4959).  
- **Security & permissions** – Persistent typed permission rules (#1186) are now closed, indicating strong interest in granular execution control.  
- **Localization expansion** – Indonesian (`id`) has been fully shipped; Chinese (`zh‑Hans`/`zh‑Hant`) and Korean (`ko`) are gaining traction (#4789, #4949, #4856).  
- **Reasoning effort persistence** – The “auto” revert bug (#4941) shows users want deterministic control over thinking levels across sessions.  
- **Keyboard layout compatibility** – The Brazilian ABNT2 conflict (#4723) highlights demand for better non‑US keyboard support in the TUI.

---

## Developer Pain Points
- **Windows keyboard layout quirks** – `AltGr+Q` conflicting with help shortcuts is a recurring frustration for non‑US users; fix is incoming (#4977).  
- **Anthropic API compatibility** – Random 400 errors with OpenModel providers (#4978) cause churn; no root cause identified yet.  
- **Stale UI state** – Background job spinners that persist after the job disappears (#4547) hurt trust in the TUI’s real‑time status.  
- **Cold filesystem performance** – Skills Manager scans time out on slow disks (#4976) – resolved by incremental scanning (#4975).  
- **Reasoning level auto‑reset** – The “thinking level” silently reverting to Auto (#4941) was a subtle persistence bug that took multiple users to report.  
- **Cultural/legal sensitivity** – The “Constitution” translation debate (#4949) shows the challenge of naming core concepts in multilingual contexts.

---

*Data compiled on 2026-07-30 from the DeepSeek TUI repository (github.com/Hmbown/DeepSeek-TUI). Items link to the corresponding GitHub issue/PR.*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/boom7sss/agents-radar).*