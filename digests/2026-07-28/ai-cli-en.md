# AI CLI Tools Community Digest 2026-07-28

> Generated: 2026-07-28 03:13 UTC | Tools covered: 9

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
**Date:** 2026-07-28

---

## 1. Ecosystem Overview

The AI CLI tools landscape is undergoing a significant maturation phase, where **reliability and platform parity** are displacing raw feature velocity as the primary competitive battleground. Across seven major tools, Windows stability remains the single largest source of community frustration, with GPU crashes, encoding failures, and authentication loops recurring in every project. **Session persistence and data integrity** have emerged as universal pain points—users increasingly treat AI CLI sessions as production artifacts, not disposable experiments. A notable shift toward **enterprise readiness** is visible: cross-device sync, MCP protocol standardization, and subagent orchestration are being demanded by multi-machine and team-scale users. The ecosystem is also seeing a growing **plugin/hook extension wave**, but implementation fragility (unquoted paths, silent GC drops, stale docs) suggests the tooling layer is still finding its footing.

---

## 2. Activity Comparison

| Tool | Issues Tracked (24h) | PRs Opened (24h) | Release Status (24h) |
|---|---|---|---|
| **Claude Code** | 10 high-activity issues | 5 PRs (4 fixes, 1 feature) | No new release |
| **OpenAI Codex** | 10 high-activity issues | 10 PRs (9 fixes, 1 dependency) | 2 alpha builds (rust-v0.146.0-alpha.12/.13) |
| **Gemini CLI** | 10 high-activity issues | 10 PRs (6 closed, 4 security/CI) | v0.54.0-nightly |
| **GitHub Copilot CLI** | 10 high-activity issues | 10 PRs (4 doc, 2 cleanup, 4 spam) | v1.0.76-0 patch |
| **Kimi Code CLI** | 4 issues | 5 PRs (3 fixes, 1 MCP, 1 config) | No new release |
| **OpenCode** | 10 issues (3 new) | 10 PRs (7 open, 3 closed) | v1.18.7 desktop bugfix |
| **Pi** | 10 issues (4 bugs, 1 feature) | 10 PRs (7 fixes, 2 features, 1 infra) | No new release |
| **Qwen Code** | 10 high-activity issues | 10 PRs (7 open, 3 closed) | 2 manual-POC prereleases |
| **DeepSeek TUI (CodeWhale)** | 10 issues | 10 PRs (6 closed, 4 open) | v0.9.2 RC (82 commits) |

**Key observations:**
- **Codex** is the most active in raw PR throughput (10 automated PRs from `copyberry` bot).
- **Claude Code** has disproportionate community engagement on issues (52👍 for keyboard shortcuts, 43👍 for settings sync) despite lower PR velocity.
- **Copilot CLI** suffers from spam/irrelevant PRs (40% of today's PRs are non-functional), indicating need for better CI triage.
- **Kimi Code** has the smallest surface area but is addressing critical Windows encoding issues.

---

## 3. Shared Feature Directions

### Cross-tool requirements appearing in multiple communities:

| Requirement | Tools Expressing Need | Specific Requests |
|---|---|---|
| **Undo / Rollback for agent actions** | Codex (#9203, 362👍), OpenCode (#29520) | File-level undo after accidental modifications; `/undo` CLI command |
| **Session persistence & recovery** | Claude Code (#68284, #54186), Codex (#24948), Gemini (#26522), Copilot (#4183) | Auto-save on quota exhaustion, history survives restart, compaction without data loss |
| **Cross-device settings sync** | Claude Code (#22648, 43👍), Copilot CLI (#4118) | Account-level sync of `~/.claude/`, default workspace directory |
| **Model switching (planning vs. execution)** | Copilot CLI (#2792, 16👍), Pi (#5263, 10👍) | One model for planning, another for execution; ephemeral session overrides |
| **MCP authentication & token refresh** | Codex (#17265, 54👍), Gemini (#28388), Kimi (#2539) | Persistent OAuth refresh, token scope management, API key fallback |
| **Better session naming & navigation** | Claude Code (#61172, #81813), Copilot (#4233) | Auto-generated name collisions, ACP `usage_update` events |
| **Windows first-class support** | Claude Code (#51143, #78946), Codex (#32149, #32094), Gemini (#28531), Kimi (#2561, #2560), DeepSeek (#4764) | Encoding fixes, GPU crashes, UAC installer failures, CRLF handling |
| **AST-aware code analysis** | Gemini (#22745, #22746), DeepSeek (implicit in editor tooling) | Reduced token waste via file structure awareness |
| **Enterprise/team context integration** | Qwen Code (#7585, #7449), Pi (#6768) | External memory services, Copilot Enterprise compaction |

### Common untapped opportunity:
**None** of the tools expose a satisfactory `rewind` or `undo` mechanism—this is the single highest-voted gap across the entire ecosystem (Codex alone has 362👍). It represents a foundational trust deficit: users fear committing to agent-driven changes.

---

## 4. Differentiation Analysis

| Dimension | Claude Code | Codex | Gemini CLI | Copilot CLI | Kimi | OpenCode | Pi | Qwen Code | DeepSeek TUI |
|---|---|---|---|---|---|---|---|---|---|
| **Core differentiator** | Rich plugin ecosystem & hookify | Rust performance & alpha velocity | Subagent orchestration & A2A server | ACP protocol & GitHub ecosystem | Minimalist, VS Code extension focus | MCP SDK v2 upgrade & community contributions | Multi-provider gateway & extension API | Enterprise daemon/multi-channel | TUI aesthetics & performance |
| **Target user** | Power users, multi-machine devs | Cutting-edge adopters | Google ecosystem users | GitHub Enterprise teams | VS Code-centric devs | Open-source community | Provider-agnostic power users | Enterprise teams | Chinese-language developers |
| **Technical stack** | TypeScript/Node | Rust | TypeScript | Go | Python | TypeScript/Electron | TypeScript (TUI) | TypeScript/Node | Rust (CodeWhale) |
| **Release cadence** | Slower, stable | Alpha daily | Nightly | Patch weekly | Slow | Regular minor releases | Active (multiple PRs/day) | Active (benchmark prereleases) | Release candidate phase |
| **MCP support** | Mature (plugins) | Built-in (with OAuth issues) | Native (with tool scaling limits) | ACP (not plain MCP) | MCP (with schema fixes) | SDK v2 (latest) | Via extensibility | Via daemon channels | Implicit in tool ecosystem |
| **Windows handling** | Poor (blank screen, login loops) | Poor (crashes, installer fails) | Improving (CRLF fix in nightly) | Unknown | Fixing (encoding in 2 PRs) | Untested (clipboard fails over SSH) | Limited | Untested | Fixing (CRLF PR open) |
| **Subagent architecture** | Basic subagent support | Thread-based subagents | Advanced (generalist + specialist) | Basic | None (simple agent) | Agent-based | Coding-agent focus | Daemon-managed loops | Fleet workers |
| **Community contribution** | Low (mostly internal) | Automated (copyberry bot) | Moderate | Mixed (spam issues) | Low | High (active contributors) | High (extension devs) | Moderate (PR activity) | Moderate (v0.9.2 RC) |

**Key insight:** Claude Code and Copilot CLI compete on ecosystem lock-in (Anthropic vs. GitHub), while Codex, Gemini, and Pi compete on **technical differentiation** (Rust performance, subagents, multi-provider). Qwen Code is carving an **enterprise daemon** niche, and DeepSeek TUI targets a **specific language market** with strong TUI polish.

---

## 5. Community Momentum & Maturity

### Most active communities (by engagement quality):

1. **OpenAI Codex** – Highest single-issue vote count (362👍 for undo), 10 PRs/day (automated), strong user voice. Community is loudest about missing features.
2. **Claude Code** – Most nuanced feature requests (settings sync, session naming). Issues show deep multi-workflow thinking. Lower PR contribution suggests more consumption than contribution.
3. **Pi** – Strong extension developer community. Multiple feature-request trends (markdown API, scoped models) show healthy grassroots innovation.
4. **OpenCode** – Robust contributor activity (community PRs for test LLM, TUI fixes, search boundaries). Well-organized PR pipeline.
5. **Qwen Code** – Enterprise-focused conversation with detailed design proposals. Slower community growth but higher signal-to-noise ratio.

### Rapidly iterating tools:

- **Codex** – 2 alpha releases in 24 hours; 10 automated PRs suggest constant integration.
- **Gemini CLI** – Nightly releases with clear security focus (stale auth headers, GHSA patching).
- **Qwen Code** – 2 benchmark-poc prereleases; SWE-bench quarantining shows measurement-driven iteration.
- **DeepSeek TUI** – v0.9.2 RC with 82 commits signals a major stabilization push.

### Slower / stable tools:

- **Claude Code** – No release in 24h; focused on bug fixes rather than new features.
- **Copilot CLI** – Patch release only; community concerns about regressions in plan mode.
- **Kimi Code** – Lowest activity; addressing core stability (hooks, encoding) before feature work.

### Maturity markers:

- **Codex** and **Claude Code** show **enterprise usage signals** (billing disputes, quota exhaustion, compaction limits).
- **Qwen Code** and **Gemini** show **regulatory/security awareness** (GHSA patching, deterministic redaction).
- **Pi** shows **multi-provider maturity** (Z.AI, Bedrock, Anthropic fixes in one day).

---

## 6. Trend Signals

### For developers and technical decision-makers:

**1. Windows support is now mandatory, not optional**
Every tool faces Windows-specific crashes, encoding bugs, or installer failures. Organizations still using Windows as a primary dev environment are effectively locked out of the AI CLI ecosystem. **Action item**: Prioritize Windows testing if targeting enterprise adoption.

**2. The MCP/Authentication gap is becoming a barrier to adoption**
Broken OAuth refresh cycles (Codex #17265, Gemini #28388), token invalidation (Pi #6970), and missing `usage_update` events (Copilot #4233) suggest the MCP ecosystem is **years away from plug-and-play reliability**. Developers should expect to build custom auth middleware if deploying at scale.

**3. Session state is the new "saving your work"**
The convergence of requests for auto-save on quota exhaustion (Claude Code), crash recovery (Codex), and compaction without corruption (Copilot) signals that **users treat AI CLI sessions as production artifacts**. Tools that lose session state lose user trust. This is an architectural design consideration: SQLite-backed persistence (Pi's FTS5, Codex's SQLite home) is emerging as the gold standard.

**4. "Undo" is the killer missing feature**
Across the entire ecosystem, users explicitly request undo/rollback more than any other feature. This reflects a fundamental hesitation: **users want to delegate decisions to AI agents but need a safety net**. The tool that gets undo right (file-level, git-aware, cross-session) will have a significant adoption advantage.

**5. Enterprise requirements are converging on three pillars:**
- **Cross-device sync** (Claude Code #22648, Copilot #4118)
- **External context/memory** (Qwen Code #7585, #7449)
- **Billing transparency** (Claude Code #81703, Codex quota issues, Pi cost audit #4797)

Tools lacking enterprise-grade identity, audit trails, and cost breakdowns will be filtered out of organizational procurement processes.

**6. The "agent orchestration" gap is widening**
Gemini's subagent reliability issues (#22323 false success, #21409 hangs), Qwen's sub-agent question forwarding (#7835), and Codex's thread-spawn graph (#35691) show that **multi-agent coordination is still immature**. The winning approach may be daemon-based orchestration (Qwen's approach) over nested subagent models (Gemini's approach), but no clear winner has emerged.

**7. Developer experience debt is accumulating**
From Claude's unquoted plugin paths to Kimi's GC-dropped hooks to Copilot's 10+ spam PRs, the ecosystem shows signs of **velocity outpacing quality tooling**. The tools themselves need dogfooding on their own extensibility—a meta-requirement that will separate lasting platforms from experimental projects.

---

**Bottom line for decision-makers:** If you need production reliability today, **Pi** or **Claude Code** offer the most mature ecosystems. If you want to shape the future of agent orchestration, monitor **Gemini** and **Qwen Code** for their subagent architecture. If cross-platform support is non-negotiable, **none** of the tools are fully ready—plan for supplementary tooling until Windows maturity improves. The undifferentiated heavy lifting (undo, session persistence, MCP auth) remains the ecosystem's greatest collective opportunity and biggest shared risk.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights

*Data source: github.com/anthropics/skills — analysis as of 2026-07-28*

---

## 1. Top Skills Ranking

The most-discussed Skill PRs (new submissions or significant improvements) based on community comments and activity:

### 📄 Document Typography (#514)
**Functionality:** Prevents orphan words, widow paragraphs, and numbering misalignment in AI-generated documents. Addresses common typographic flaws that users rarely manually fix.
**Discussion highlights:** Community praised the practical value—these issues affect every Claude-generated document. Some debate on whether typography rules should be configurable per output format.
**Status:** Open (created 2026-03-04, last updated 2026-03-13)  
**Link:** https://github.com/anthropics/skills/pull/514

### 📁 OpenDocument (ODT) Skill (#486)
**Functionality:** Creates, fills, reads, and converts ODF files (.odt, .ods) – enables full LibreOffice compatibility and ODT-to-HTML conversion.
**Discussion highlights:** Strong demand from enterprise users who need open‑standard document workflows. Conversations focused on template filling accuracy and ODF schema handling.
**Status:** Open (created 2026-03-01, updated 2026-04-14)  
**Link:** https://github.com/anthropics/skills/pull/486

### 🧪 Testing Patterns (#723)
**Functionality:** Covers the full testing stack – philosophy (Testing Trophy model), unit testing (AAA pattern), React Testing Library, integration, E2E, accessibility, and snapshot testing.
**Discussion highlights:** One of the most requested skill categories. Community debated whether to include mocking strategies vs. leaving them to developer preference. Emphasis on “what NOT to test” was widely appreciated.
**Status:** Open (created 2026-03-22, updated 2026-04-21)  
**Link:** https://github.com/anthropics/skills/pull/723

### 🎮 Pyxel Retro Game Development (#525)
**Functionality:** Integrates with [pyxel-mcp](https://github.com/kitao/pyxel-mcp) for creating pixel‑art/8‑bit games in Python. Covers write → run → capture → inspect → iterate workflow.
**Discussion highlights:** Excitement about creative coding use cases. Some concern about MCP dependency stability. Author (@kitao) is also the creator of Pyxel, giving the skill high credibility.
**Status:** Open (created 2026-03-05, updated 2026-07-15)  
**Link:** https://github.com/anthropics/skills/pull/525

### 🔍 Self-Audit (#1367)
**Functionality:** A universal skill that audits AI output before delivery – mechanical file verification (all claimed files exist and are valid) followed by a four‑dimension reasoning audit ranked by damage severity.
**Discussion highlights:** Rapidly gained attention as a “quality gate” for production outputs. Discussion on balancing thoroughness against token cost. The author proposed an extended pipeline in issue #1385.
**Status:** Open (created 2026-06-28, updated 2026-07-02)  
**Link:** https://github.com/anthropics/skills/pull/1367

### 🧹 Plan File Hygiene (#1479)
**Functionality:** Addresses accumulation of planning artifacts (`.plan.md`, `todo.md`, etc.) by giving Claude a lifecycle policy – create, update, archive, and remove plan files automatically.
**Discussion highlights:** Builds directly on community issue #1417. Naming of the problem (“planning artifacts accumulate with no lifecycle”) resonated strongly. The PR invites collaboration from the original issue author (@halilxibrahim).
**Status:** Open (created 2026-07-25, updated 2026-07-27)  
**Link:** https://github.com/anthropics/skills/pull/1479

### 📊 Skill Quality & Security Analyzers (#83)
**Functionality:** Two meta‑skills that evaluate other skills across five dimensions (structure, documentation, security, reliability, performance) and flag trust boundary risks.
**Discussion highlights:** Anticipated as essential governance tooling for teams adopting Skills at scale. The security analyzer directly ties to the security‑trust debate in issue #492.
**Status:** Open (created 2025-11-06, updated 2026-01-07)  
**Link:** https://github.com/anthropics/skills/pull/83

---

## 2. Community Demand Trends

Analysis of the most active Issues reveals five key demand directions:

| Theme | Representative Issues | Signal Strength |
|-------|----------------------|-----------------|
| **Security & Trust** | #492 (43 comments) – community skills under `anthropic/` namespace create trust boundaries | 🔥 Very High |
| **Org‑wide Sharing** | #228 (16 comments) – request for shared skill libraries or direct sharing links | 🔥 High |
| **Skill Evaluation Tooling** | #556 (12 comments), #1169, #1061 – `run_eval.py` consistently reports 0% recall on Windows and Linux | 🔥 High |
| **New Skill Proposals** | #1329 (compact‑memory), #412 (agent‑governance), #1385 (reasoning quality gate) – users designing skills beyond the existing catalog | 🔥 Moderate |
| **Context Window Management** | #1487 (4 comments but rapidly growing) – `claude‑api` skill injects ~156k tokens; #1175 (SharePoint security & token overhead) | 🔥 Moderate |

**Emerging pattern:** The community is actively *building tooling around Skills* (evaluation, security scanning, lifecycle management) rather than just consuming existing ones. This suggests the ecosystem is maturing toward enterprise‑grade governance.

---

## 3. High‑Potential Pending Skills

The following open PRs have active discussion, recent updates, and are strong candidates for merging soon:

- **Self-Audit Skill** (#1367) – Last updated 2026-07-02. A universal output quality gate. Author recently extended the concept in issue #1385, indicating continued investment.
- **Plan File Hygiene** (#1479) – Last updated 2026-07-27. Directly addresses a widely experienced pain point. Very recent activity suggests imminent merge.
- **Pyxel Skill** (#525) – Last updated 2026-07-15. Strong author reputation and sustained interest from the creative coding community.
- **Document Typography** (#514) – Last updated 2026-03-13, but remains a “must‑have” skill for any document generation workflow. Community waiting for merge.
- **Testing Patterns** (#723) – Last updated 2026-04-21. Although not recently updated, it fills a massive gap in the Skills catalog and has broad support.
- **Skill Quality/Security Analyzers** (#83) – Last updated 2026-01-07. Lower recent activity but considered foundational governance tooling.

---

## 4. Skills Ecosystem Insight

**The community’s most concentrated demand is for meta‑skills that improve the reliability, security, and evaluation of Skills themselves, paired with domain‑specific skills for document formatting and testing patterns – reflecting a shift from experimentation to production‑grade Skill adoption.**

---

# Claude Code Community Digest | 2026-07-28

## Today's Highlights

A billing incident from July 17 has resurfaced in Issue #81703, with users disputing full-day usage charges despite having plan allowances. Three low-level fixes in PRs #81670–#81673—quoting plugin paths, fixing devcontainer firewall setup, and making hookify import-independent—tackle long-standing pain points for hookify users. Meanwhile, the highest-reaction request of the day (#22648, 43 👍) calls for account-level settings sync across devices, reflecting a growing need among multi-machine developers.

## Releases

No new releases in the last 24 hours.

## Hot Issues

1. **#5064 – Ctrl+Enter for newlines conflicts with standard app conventions**  
   *Author: shorn | Comments: 30 | 👍: 52*  
   Top-voted request. Users on Windows want customizable shortcuts because Ctrl+Enter is widely expected to submit a message, not insert a newline. The request has strong support but has been open since August 2025.  
   [GitHub](https://github.com/anthropics/claude-code/issues/5064)

2. **#22648 – Account-level settings sync across devices**  
   *Author: wesleyfolly | Comments: 24 | 👍: 43*  
   Long-standing feature that aggregates multiple earlier requests (#6037, #19634, etc.). Users manually maintain `~/.claude/` across macOS + Linux machines. No official solution yet.  
   [GitHub](https://github.com/anthropics/claude-code/issues/22648)

3. **#51143 – Persistent blank/white screen on Windows**  
   *Author: melnikovyalan | Comments: 18 | 👍: 20*  
   Claude Desktop becomes unusable with a blank white screen; multiple reinstalls have no effect. Coworkers report the same. High frustration among Windows users.  
   [GitHub](https://github.com/anthropics/claude-code/issues/51143)

4. **#54186 – Local session history disappears after VS Code restart**  
   *Author: Harvindar994 | Comments: 13 | 👍: 14*  
   A serious regression for VS Code users: all session history is lost when the editor restarts. Affects productivity heavily.  
   [GitHub](https://github.com/anthropics/claude-code/issues/54186)

5. **#61172 – /clear inherits previous session name, duplicates in /resume**  
   *Author: eliasjamesbermudez | Comments: 8 | 👍: 12*  
   A subtle UX bug. Running `/clear` keeps the old session name, leading to multiple sessions with identical names in the resume list.  
   [GitHub](https://github.com/anthropics/claude-code/issues/61172)

6. **#81703 – July 17 mass billing incident: $704.71 charged incorrectly**  
   *Author: COOLak | Comments: 7 | 👍: 0*  
   Users claim that during Anthropic’s acknowledged July 17 outage, paid usage credits were consumed despite having plan allowance. A dedicated issue for a known incident—no official resolution mentioned.  
   [GitHub](https://github.com/anthropics/claude-code/issues/81703)

7. **#79366 – Worktree sessions reuse an existing worktree directory from a previous session**  
   *Author: sandopolus | Comments: 6 | 👍: 4*  
   When worktree isolation is enabled, new sessions land inside a stale directory from an unrelated earlier session, undermining isolation guarantees.  
   [GitHub](https://github.com/anthropics/claude-code/issues/79366)

8. **#78946 – Loop trying to login on Windows**  
   *Author: HernanBadillaV | Comments: 6 | 👍: 3*  
   Authentication loops indefinitely on Windows. No workaround yet. Another entry in the growing list of Windows-specific auth failures.  
   [GitHub](https://github.com/anthropics/claude-code/issues/78946)

9. **#68284 – Native session recovery after quota/rate-limit exhaustion**  
   *Author: softcane | Comments: 4 | 👍: 1*  
   Requesting automatic session save when API rate limits are hit, so users can resume without losing context. Currently your session is simply killed.  
   [GitHub](https://github.com/anthropics/claude-code/issues/68284)

10. **#81813 – Auto-generated session name matches unrelated project file**  
    *Author: heestore | Comments: 4 | 👍: 0*  
    Two independent sessions in the same directory get the same auto-generated name, which matches an unrelated file. Makes session identification confusing.  
    [GitHub](https://github.com/anthropics/claude-code/issues/81813)

## Key PR Progress

Five pull requests were opened in the last 24 hours. All address infrastructure reliability and packaging:

1. **#81673 – fix(devcontainer): don't abort firewall setup when an optional domain fails to resolve**  
   *Author: ozdemirsarman*  
   Fixes a critical `set -e` failure in `init-firewall.sh` where a single NXDOMAIN (e.g., `statsig.anthropic.com`) halts the entire ipset population, leaving the default DROP policy in place.  
   [GitHub](https://github.com/anthropics/claude-code/pull/81673)

2. **#81672 – fix(hookify): make package import independent of the install directory name**  
   *Author: ozdemirsarman*  
   Previously the hookify plugin relied on its directory being named exactly `hookify`. Marketplace installations break this assumption. The PR adds proper package resolution.  
   [GitHub](https://github.com/anthropics/claude-code/pull/81672)

3. **#81670 – fix(plugins): quote ${CLAUDE_PLUGIN_ROOT} in hook commands, prefix hookify examples**  
   *Author: ozdemirsarman*  
   Two fixes: (1) unquoted `${CLAUDE_PLUGIN_ROOT}` broke hooks when the path contained spaces; (2) hookify example commands now include a prefix to prevent silent misuse.  
   [GitHub](https://github.com/anthropics/claude-code/pull/81670)

4. **#20448 – Add web4-governance plugin for AI governance with R6 workflow**  
   *Author: dp-web4*  
   A new plugin implementing “web4” trust-native governance with T3 trust tensors, entity witnessing, and R6 audit trails. Aimed at verifiable accountability for agent-based workflows.  
   [GitHub](https://github.com/anthropics/claude-code/pull/20448)

5. **#81576 – docs: fix security-guidance plugin entry in plugins/README.md**  
   *Author: Woohyeon-Hong*  
   Corrects three factual errors in the security-guidance plugin documentation: no PreToolUse hook (claimed), 25 patterns not 9, and conflated triggers.  
   [GitHub](https://github.com/anthropics/claude-code/pull/81576)

## Feature Request Trends

The most requested feature directions across recent issues:

- **Customizable keyboard shortcuts** – #5064, #69200 (MCP toggle), #70368 (heading level styling). Users want to remap keybindings to match their OS or terminal conventions.
- **Cross-device settings sync** – #22648 with 43 👍 is the strongest signal, but #81835 (surface on-disk transcripts for continuity) and #81837 (register as Copilot key target) reinforce the multi-device theme.
- **Session persistence & recovery** – #68284 (auto-save on quota hit), #54186 (VS Code history loss), and #81838 (subagent reply ceiling) all point to a desire for reliable session state.
- **Windows first-class support** – #81837 (Copilot key remap), #70200 (suppress console flashes), and #81398 (GPU process crash) show Windows users remain underserved.
- **Better session naming & navigation** – #61172, #81813, and #81833 (auto-memory inconsistency in worktrees) indicate the session lifecycle needs UX polish.

## Developer Pain Points

Recurring bug themes dominating the tracker this week:

- **Windows stability** – Blank screen (#51143), GPU process crashes (#81398, #81836), login loops (#78946), and visible console flashes (#70200) make Claude Desktop and CLI unreliable on Windows.
- **Session data loss** – History disappears after VS Code restart (#54186), assistant text silently dropped from transcripts (#80662), subagent replies truncated (#81838), and auto-session naming collisions (#81813) erode trust.
- **Worktree isolation bugs** – Reusing stale worktrees (#79366) and inconsistent auto-memory loading (#81833) break the core isolation promise.
- **Billing and rate limiting** – The July 17 billing incident (#81703) and lack of graceful quota exhaustion handling (#68284) cause real financial and workflow pain.
- **Plugin/hookify brittleness** – Unquoted paths, import failures, and documentation inaccuracies (#81670–#81673, #81576) frustrate the growing plugin ecosystem.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest – 2026-07-28

## Today’s Highlights

The Codex team shipped two pre-release builds (`rust-v0.146.0-alpha.12` and `.13`) while a flurry of fixes landed via automated PRs from the `copyberry` bot. Community attention remained focused on the missing `/undo` feature (Issue #9203, 362 👍), a persistent MCP OAuth refresh bug (#17265), and a growing number of Windows‑specific crashes related to the embedded browser and sandbox tooling.

## Releases

- **rust-v0.146.0-alpha.13** – Latest alpha release of the Codex Rust client. No changelog details provided.  
- **rust-v0.146.0-alpha.12** – Preceding alpha release.  

Both were published within the last 24 hours. No stable or feature release notes accompany them.

## Hot Issues

1. **#9203 – Please make "/undo" back**  
   _65 comments, 362 👍_  
   Users heavily miss the `/undo` command after accidental file deletions or uncommitted modifications. The community views this as a critical safety net.

2. **#17265 – Codex does not auto-refresh routed MCP OAuth tokens**  
   _27 comments, 54 👍_  
   Even when a `refresh_token` is persisted, Codex fails to automatically refresh expired access tokens, causing MCP tool calls to fail. A high‑priority authentication bug.

3. **#32149 – Windows setup fails before the UAC prompt**  
   _27 comments, 6 👍_  
   The Windows installer is non‑functional on some systems, blocking new users on that platform.

4. **#24948 – Session logs grow to 700MB–2GB from compaction history**  
   _24 comments, 1 👍_  
   Repeated compaction and raw tool output bloat TUI session logs, impacting disk space and performance.

5. **#32094 – Codex app crashes when embedded browser opens WebCodecs/canvas pages**  
   _18 comments, 2 👍_  
   GPU‑related crashes in the embedded browser affect Windows users. Tracked internally as BRWPLAT-293.

6. **#25319 – Scope VS Code chats to the current workspace/project**  
   _18 comments, 48 👍_  
   Request to keep conversation histories isolated per workspace. A popular IDE enhancement.

7. **#30712 – Windows sandbox: `apply_patch` fails, forcing fallback to PowerShell**  
   _15 comments, 13 👍_  
   Writable root injection breaks the safe editing path, making agents bypass the sandbox entirely.

8. **#13852 – Supabase MCP repeatedly requires reauthentication**  
   _14 comments_  
   OAuth token refresh fails during initialization, forcing repeated logins for Supabase MCP users.

9. **#11324 – MCP servers eat up memory when multi-tasking**  
   _14 comments, 5 👍_  
   Long‑running parallel sessions cause MCP server memory to balloon, affecting Business tier users.

10. **#35352 – Codex Desktop exits when embedded browser GPU process crashes**  
    _13 comments_  
    Unsigned SwiftShader fallback is blocked by Windows Code Integrity, leading to an abrupt app exit.

## Key PR Progress

1. **#35695 – Honor the configured SQLite home in the logs client**  
   Fixes a mismatch between `CODEX_HOME` and `sqlite_home` that caused the wrong logs database to be read.

2. **#35693 – Refresh the subagent picker in the background**  
   Eliminates terminal input blocking by rendering the picker asynchronously, reducing UI lag.

3. **#35691 – Include empty-preview threads in relationship listings**  
   Ensures threads without preview text still appear in parent/child queries, improving the spawn graph navigation.

4. **#35689 – Preserve item timestamps in thread history projections**  
   Adds optional start/completion timestamps to history items, fixing missing time data in resumed threads.

5. **#35688 – Point crossterm patch to the OpenAI OSS fork**  
   Moves the terminal backend dependency to OpenAI’s maintained fork, ensuring compatibility with ongoing TUI fixes.

6. **#35685 – Load cloud-managed profiles for `codex sandbox`**  
   Enables the sandbox command to pull permission profiles from cloud configuration when `--include-managed-config` is used.

7. **#35678 – Preserve paginated thread metadata across resumes**  
   Uses SQLite persistence to keep thread previews and titles intact after restart, even with bounded pagination.

8. **#35675 – Prepare MCP and plugin recommendations concurrently**  
   Reduces turn‑preparation latency by running MCP discovery and plugin recommendation fetching in parallel.

9. **#35670 – Raise the Windows exec yield floor to 10 seconds**  
   Clamps minimum command yield time on Windows to 10 seconds, mitigating premature timeouts.

10. **#35649 – Preserve TUI input when terminal focus returns**  
    Caches the palette probe result to avoid keystroke loss when the terminal regains focus.

## Feature Request Trends

- **Undo / rollback for agent actions** (#9203, 362 👍) – the single most‑requested feature, driven by regret over unintentional file changes.
- **Workspace‑scoped conversations** (#25319, 48 👍) – users want VS Code chats tied to the current project instead of a global history.
- **Conversation archiving & export** (#20115, #22875) – ability to save long‑running threads as project artifacts and set a default workspace directory.
- **Automatic retry on model capacity errors** (#22390, #32020) – transient backend capacity errors should be retried with backoff instead of failing.
- **`/undo` for TUI** (repeated in #9203) – also requested in IDE extensions.

## Developer Pain Points

- **Windows stability** – The platform suffers from installer failures (#32149), sandbox editing breaks (#30712), GPU‑related app crashes (#32094, #35352), and state corruption after power loss (#26990). Many issues see multiple votes.
- **MCP authentication & memory** – OAuth refresh is broken (#17265) and MCP server memory leaks under multi‑tasking (#11324). Frustrating for users relying on external tools.
- **Session log bloat** – Compaction history and raw tool output can inflate logs to gigabytes (#24948), degrading performance.
- **Lack of undo/rollback** – Without `/undo`, users feel exposed when agents accidentally modify or delete files outside git tracking.
- **Subagent & threading quirks** – Resumed threads may lose tool availability (#25990) and subagent runtime mismatches (#34700) cause confusion.
- **IDE extension limitations** – Multi‑window agent creation fails (#15807), and workspace scoping is missing (#25319).

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-07-28

## 1. Today's Highlights
The team shipped **v0.54.0-nightly** with two important fixes: CRLF normalization in the A2A server (Windows diff view) and hardened file keychain tag validation. The most active discussions center on **subagent reliability** — issue #22323 reveals that subagents hitting `MAX_TURNS` incorrectly report success, and #21409 reports the generalist agent hanging indefinitely. A new **security PR** (#28546) strips stale `Authorization` headers to fix `401` errors when using `GEMINI_API_KEY`.

## 2. Releases
**v0.54.0-nightly.20260728.gbef611950**  
[View release](https://github.com/google-gemini/gemini-cli/releases/tag/v0.54.0-nightly.20260728.gbef611950)

Two fixes in this nightly:
- **`fix(a2a-server)`**: Normalize CRLF → LF in `getProposedContent` to restore diff highlighting on Windows (PR [#28531](https://github.com/google-gemini/gemini-cli/pull/28531)).
- **`fix(core)`**: Enforce explicit tag length and validation in file-based credential storage (PR [#28523](https://github.com/google-gemini/gemini-cli/pull/28523)).

---

## 3. Hot Issues (10 noteworthy)

| # | Issue | Why it matters |
|---|-------|----------------|
| 1 | [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) – Subagent recovery after MAX_TURNS reported as “GOAL success” | Hides a critical interruption — subagent lies about completion. 12 comments, 2 👍. |
| 2 | [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) – Generalist agent hangs forever | Blocks simple tasks like folder creation. Workaround: disable subagents. 8 comments, 8 👍 (high community agreement). |
| 3 | [#19873](https://github.com/google-gemini/gemini-cli/issues/19873) – Leverage model’s bash affinity via zero-dependency OS sandboxing | Large enhancement to align CLI with Gemini 3’s native bash skills while maintaining security. 8 comments. |
| 4 | [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) – Shell command hangs with “Waiting input” after completion | Blocks workflows; extremely common for simple commands. 4 comments, 3 👍. |
| 5 | [#26522](https://github.com/google-gemini/gemini-cli/issues/26522) – Auto Memory retries low-signal sessions indefinitely | Wastes API quota and compute; memory system churn. 5 comments. |
| 6 | [#26525](https://github.com/google-gemini/gemini-cli/issues/26525) – Add deterministic redaction & reduce Auto Memory logging | Security concern: secrets may be logged before model redaction. 4 comments. |
| 7 | [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) – Browser subagent fails in Wayland | Disrupts Linux users running Wayland compositors. 4 comments, 1 👍. |
| 8 | [#22672](https://github.com/google-gemini/gemini-cli/issues/22672) – Agent should stop/discourage destructive behavior | Model occasionally uses `git reset --force` or unsafe DB commands. 3 comments, 1 👍. |
| 9 | [#24246](https://github.com/google-gemini/gemini-cli/issues/24246) – 400 error with > 128 tools | Scales poorly when many MCP tools are enabled; agent can’t prune. 3 comments. |
| 10 | [#20079](https://github.com/google-gemini/gemini-cli/issues/20079) – Symlinks in `~/.gemini/agents/` not recognized | Breaks reproducibility via symlinked agent configs. 4 comments. |

---

## 4. Key PR Progress (10 important)

| PR | Status | Description |
|----|--------|-------------|
| [#28546](https://github.com/google-gemini/gemini-cli/pull/28546) | **OPEN** | Strips stale `Authorization` header when using `GEMINI_API_KEY`, fixing `401 UNAUTHENTICATED`. Security fix (P1). |
| [#28531](https://github.com/google-gemini/gemini-cli/pull/28531) | **CLOSED** | Normalizes CRLF → LF in A2A server for Windows diff highlighting. |
| [#28523](https://github.com/google-gemini/gemini-cli/pull/28523) | **CLOSED** | Enforces 128-bit tag length & validation in file keychain — security hardening. |
| [#28389](https://github.com/google-gemini/gemini-cli/pull/28389) | **CLOSED** | Adds real-world time budget to prevent infinite-loop event-driven agent state transitions. |
| [#28394](https://github.com/google-gemini/gemini-cli/pull/28394) | **CLOSED** | Removes temp directories leaked by background shell execution (`is_background: true`). |
| [#28397](https://github.com/google-gemini/gemini-cli/pull/28397) | **CLOSED** | Replaces sync filesystem ops (`fs.mkdtempSync`, etc.) with async to fix terminal UI stuttering. |
| [#28388](https://github.com/google-gemini/gemini-cli/pull/28388) | **CLOSED** | Fixes wildcard DENY in `tools.core` that accidentally disabled all MCP tools. |
| [#28386](https://github.com/google-gemini/gemini-cli/pull/28386) | **CLOSED** | Fixes VS Code activation disposal bug (only last registration was tracked). |
| [#28387](https://github.com/google-gemini/gemini-cli/pull/28387) | **CLOSED** | Guards `customDeepMerge` against circular references (crash fix). |
| [#28403](https://github.com/google-gemini/gemini-cli/pull/28403) | **OPEN** | Hardens `$VAR`/`${VAR}` expansion detection for GHSA-wpqr-6v78-jr5g; adds defense-in-depth to CI. |

---

## 5. Feature Request Trends
- **AST-aware code analysis** – Several issues (e.g., [#22745](https://github.com/google-gemini/gemini-cli/issues/22745), [#22746](https://github.com/google-gemini/gemini-cli/issues/22746)) request AST-based file reads, search, and codebase mapping for reduced turns and token waste.
- **Agent self-awareness & observability** – Users want the CLI to know its own flags/hotkeys ([#21432](https://github.com/google-gemini/gemini-cli/issues/21432)) and share subagent trajectories via `/chat share` ([#22598](https://github.com/google-gemini/gemini-cli/issues/22598)).
- **Sandbox & security improvements** – Zero-dependency OS sandboxing for bash affinity ([#19873](https://github.com/google-gemini/gemini-cli/issues/19873)), deterministic redaction in Auto Memory ([#26525](https://github.com/google-gemini/gemini-cli/issues/26525)).
- **Task & resource guardrails** – Requests to discourage destructive git/DB commands ([#22672](https://github.com/google-gemini/gemini-cli/issues/22672)) and improve browser agent resilience ([#22232](https://github.com/google-gemini/gemini-cli/issues/22232)).
- **Component-level evaluations** – A dedicated epic ([#24353](https://github.com/google-gemini/gemini-cli/issues/24353)) to scale behavioral evals from 76 → 100+ tests across 6 models.

---

## 6. Developer Pain Points
- **Subagent unreliability** – Hangs (#21409), false success after MAX_TURNS (#22323), failure in Wayland (#21983), ignoring settings (#22267), running without permission (#22093).
- **Shell execution glitches** – Commands stuck on “Waiting input” (#25166), temp file leaks (#28394), synchronous I/O causing UI stuttering (#28397).
- **Memory system churn** – Auto Memory retries low-signal sessions (#26522), silent skip of invalid patches (#26523), privacy concerns with pre-redaction logging (#26525).
- **Configuration friction** – Symlinks not recognized as agents (#20079), settings.json overrides ignored by browser agent (#22267), circular references crashing settings manager (#28270).
- **Scaling limits** – 128+ tools cause 400 errors (#24246), model creates random temp scripts (#23571), tool denylist accidentally blocks MCP (#28388).
- **Lack of observability** – Bug reports miss subagent context (#21763), subagent trajectories not shareable (#22598).

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-07-28

## Today's Highlights
A new patch release (v1.0.76-0) landed with MCP snapshot caching improvements and a default stay-in-autopilot behavior, alongside a critical fix for an early-warning regression. The community continues to surface two major themes: persistent **plan-mode regressions** and **ACP protocol gaps** that block IDE integrators from showing context-window or credit usage indicators. A striking number of spam/non-English issues and PRs indicate the repo may need better triage automation.

## Releases
**v1.0.76-0** ([release](https://github.com/github/copilot-cli/releases/tag/v1.0.76-0))
- **Improved:** MCP tools now load faster from definition-scoped snapshots; added process-wide and per-server cache opt-outs.
- **Improved:** Autopilot stays selected after `task_complete` by default. Set `stayInAutopilot: false` to return to interactive mode after each task.
- **Fixed:** Restored the early warning that was missing in the previous build.

## Hot Issues (10 selected)

1. **#1730 – `sessionStart` hook does not fire (Windows, PowerShell 7)**  
   *Status: OPEN | Comments: 6 | 👍: 3*  
   A published hook specification (`.github/hooks/*.json`) is silently ignored on startup. This breaks custom plugin workflows, especially for Windows users.  
   [https://github.com/github/copilot-cli/issues/1730](https://github.com/github/copilot-cli/issues/1730)

2. **#4188 – Plan-mode regression: shell commands now blocked**  
   *Status: OPEN | Comments: 6 | 👍: 3*  
   A recent change prevents plan mode from executing shell commands (e.g., `gh cli`), which was previously used to read/create issues during planning. Users call this a regression.  
   [https://github.com/github/copilot-cli/issues/4188](https://github.com/github/copilot-cli/issues/4188)

3. **#2792 – Auto-switch between planning and execution models**  
   *Status: CLOSED | Comments: 5 | 👍: 16*  
   Highly requested feature: one model for planning, another for execution. Closed, likely deferred or declined, but remains the most-upvoted feature request in the dataset.  
   [https://github.com/github/copilot-cli/issues/2792](https://github.com/github/copilot-cli/issues/2792)

4. **#4163 – Zombie process accumulation on Linux (v1.0.71)**  
   *Status: CLOSED | Comments: 5 | 👍: 3*  
   Finished subprocesses leak as zombies under the copilot PID (~2/min). Closed, so a fix may be in the latest release.  
   [https://github.com/github/copilot-cli/issues/4163](https://github.com/github/copilot-cli/issues/4163)

5. **#4183 – Auto-compaction doesn't prevent CAPI 5 MB body limit**  
   *Status: CLOSED | Comments: 4 | 👍: 10*  
   Long tool-heavy sessions hit a hard 5 MB CAPI serialization limit even when context tokens are fine. Users report this as a silent blocker.  
   [https://github.com/github/copilot-cli/issues/4183](https://github.com/github/copilot-cli/issues/4183)

6. **#1381 – "Rewind" requires git repository**  
   *Status: OPEN | Comments: 3 | 👍: 9*  
   Users of alternative VCS (e.g., `jj`) cannot use the essential `rewind` feature. VS Code Copilot doesn't require git.  
   [https://github.com/github/copilot-cli/issues/1381](https://github.com/github/copilot-cli/issues/1381)

7. **#4233 – ACP mode needs `usage_update` events**  
   *Status: OPEN | Comments: 2 | 👍: 2*  
   `copilot --acp` never emits context-window or AI-credit updates, so IDE clients (Zed, etc.) cannot show usage indicators.  
   [https://github.com/github/copilot-cli/issues/4233](https://github.com/github/copilot-cli/issues/4233)

8. **#4161 – `task_complete` unavailable after switching back to autopilot**  
   *Status: OPEN | Comments: 2 | 👍: 3*  
   A regression of a previously fixed issue (#1523). The `task_complete` tool is supposed to be always available in autopilot mode but disappears after a mode switch.  
   [https://github.com/github/copilot-cli/issues/4161](https://github.com/github/copilot-cli/issues/4161)

9. **#4118 – `/app` command does not select current working directory**  
   *Status: OPEN | Comments: 0 | 👍: 35*  
   Despite zero comments, this is the highest-upvoted open issue (👍35). Users find it inconvenient to manually select the working directory each time.  
   [https://github.com/github/copilot-cli/issues/4118](https://github.com/github/copilot-cli/issues/4118)

10. **#4271 – `glob` tool false-negatives on multi-segment patterns**  
    *Status: OPEN | Comments: 0 | 👍: 0*  
    The built-in `glob` tool returns "No files matched" for any pattern with a path separator unless prefixed with `**/`. A subtle bug that breaks project-aware tool usage.  
    [https://github.com/github/copilot-cli/issues/4271](https://github.com/github/copilot-cli/issues/4271)

## Key PR Progress (10 selected)

1. **#1609 – Update PAT permissions instructions**  
   Clarifies that "Copilot Requests" permission is under the Account tab in the PAT UI. Small but valuable documentation fix for first-time setup.  
   [https://github.com/github/copilot-cli/pull/1609](https://github.com/github/copilot-cli/pull/1609)

2. **#1598 – Fix: clean up temp directory on unexpected exit**  
   Adds a trap to `install.sh` to clean up leaked temp directories when the script fails mid-installation. Important for CI reliability.  
   [https://github.com/github/copilot-cli/pull/1598](https://github.com/github/copilot-cli/pull/1598)

3. **#1333 – Fix minor grammar and Markdown formatting**  
   Removes an extra blank line and adds missing article "an". No functional change, but cleanliness matters for a widely used README.  
   [https://github.com/github/copilot-cli/pull/1333](https://github.com/github/copilot-cli/pull/1333)

4. **#1116 – Fix misleading doc: 0x models don't reduce quota**  
   Corrects the README to clarify that 0x-rate models still consume quota. A common point of confusion.  
   [https://github.com/github/copilot-cli/pull/1116](https://github.com/github/copilot-cli/pull/1116)

5. **#988 – Fix missing prefix in brew command**  
   Fixes a typo in `brew install copilot-cli` (should be `brew install github/copilot-cli/copilot-cli`).  
   [https://github.com/github/copilot-cli/pull/988](https://github.com/github/copilot-cli/pull/988)

6. **#4030 – Add GitHub Actions workflow for Jekyll deployment**  
   A workflow to build and deploy a Jekyll site to GitHub Pages with preinstalled dependencies. Likely for documentation hosting.  
   [https://github.com/github/copilot-cli/pull/4030](https://github.com/github/copilot-cli/pull/4030)

7. **#3928 – Add `.gitignore` and settings configuration**  
   New contributor adding missing project-startup files. Basic but necessary for clean dev environments.  
   [https://github.com/github/copilot-cli/pull/3928](https://github.com/github/copilot-cli/pull/3928)

8. **#4057 – "Install" (title only, no content)**  
   Stale PR with no description. Likely a placeholder or misclick.  
   [https://github.com/github/copilot-cli/pull/4057](https://github.com/github/copilot-cli/pull/4057)

9. **#3873 – "1000Add initial console log for greeting"**  
   Unclear contribution, likely a test or spam. No discussion.  
   [https://github.com/github/copilot-cli/pull/3873](https://github.com/github/copilot-cli/pull/3873)

10. **#3880 – "beyond the streets of america"**  
    Contains React component code with no relation to the CLI. Likely spam or an accidental push.  
    [https://github.com/github/copilot-cli/pull/3880](https://github.com/github/copilot-cli/pull/3880)

**Note:** Several PRs (e.g., #3473, #3873, #3880, #2800) appear to be spam or unrelated content. The maintainers may benefit from stricter CI checks.

## Feature Request Trends

- **ACP protocol enrichment** – Multiple issues (#4233, #4174, #4275) ask for `usage_update` events, context tier exposure, and token/credit transparency in the ACP (Agent Communication Protocol) server, enabling IDE integrations (Zed, VS Code, etc.) to show real-time usage.
- **Persistent autopilot mode** – Users want a launch flag or config setting to keep autopilot active across turns without manual re-enable (#3977, addressed in v1.0.76-0, but still requested).
- **Model switching (planning vs. execution)** – The ability to use one model for planning and a different model for execution remains the most-upvoted feature (#2792, closed without resolution).
- **Plugin/hook improvements** – Requests for symlink support in `.copilot` config directories (#3264) and fixing the `sessionStart` hook (#1730) indicate growing demand for plugin extensibility.
- **Non-git rewind** – Support for alternative version control systems (e.g., `jj`) in the `rewind` feature (#1381).

## Developer Pain Points

- **Zombie processes on Linux** – Subprocess leaks (issue #4163) were a critical reliability concern, especially for long-running sessions. Likely fixed in v1.0.76-0.
- **Auto-compaction failures** – Despite automatic context compaction, sessions can still hit a hard 5 MB CAPI body limit (#4183), causing silent breakage.
- **Rewind dependency on git** – Users of non-git VCS are excluded from a core debugging feature (#1381), with no clear workaround.
- **Terminal rendering issues** – Multiple reports of blank screens after prompts on Windows Terminal (#4263, #4159), particularly with split panes, and clipboard issues inside tmux/screen (#4191).
- **AI credit consumption on restart** – `/restart` and `/resume` commands consume a non-trivial, seemingly fixed number of AI credits (~174) each time (#3886), surprising users.
- **Plan-mode regression** – The blocking of shell commands in plan mode (#4188) disrupts workflows that rely on external tools (e.g., `gh`) for planning enrichments.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest – 2026-07-28

## Today’s Highlights
Two critical bugs were fixed today: hooks silently dropping due to garbage collection (PR #2565) and UnicodeEncodeError crashes on Windows terminals (PRs #2561, #2560). The VS Code extension continues to show instability – approval prompts can stall indefinitely (Issue #2563). A long‑standing login connectivity issue (Issue #1070) was also closed after five months.

## Releases
*No new releases in the last 24 hours.*

---

## Hot Issues

All four issues updated in the last 24h are listed below.

1. **[#1070 – Login failed: Network is unreachable](https://github.com/MoonshotAI/kimi-cli/issues/1070)**  
   *Closed* – User reported a persistent connection error to `auth.kimi.com:443` on version 1.9.0. The issue gathered 8 comments and was closed after 5 months. Suggests either a transient infrastructure problem or a stale configuration.

2. **[#2317 – [VSCode Extension] Plan mode file path not clickable in chat webview](https://github.com/MoonshotAI/kimi-cli/issues/2317)**  
   *Open, low activity* – File references shown in plan‑mode responses cannot be clicked to open in the editor. This hurts the interactive workflow. Only 3 comments, but it directly affects VS Code extension usability.

3. **[#2564 – fix(hooks): PostToolUse / PostToolUseFailure tasks collected by GC](https://github.com/MoonshotAI/kimi-cli/issues/2564)**  
   *Open, 0 comments* – Fresh bug report (yesterday). Hooks registered in `config.toml` are silently dropped because `asyncio.create_task` uses a `WeakSet`. Critical for anyone relying on custom tool hooks. Already addressed by PR #2565.

4. **[#2563 – [VSCode Extension] approval prompts never render, causing indefinite stalls](https://github.com/MoonshotAI/kimi-cli/issues/2563)**  
   *Open, 0 comments* – Approval dialogs (ExitPlanMode, tool permissions) sometimes never appear, leading to a 600‑second timeout. Affects version 0.6.4 of the extension on macOS arm64. High impact on user trust in the extension.

---

## Key PR Progress

All five PRs updated in the last 24h are covered.

1. **[#2565 – fix(hooks): keep a strong reference to fire‑and‑forget hook triggers](https://github.com/MoonshotAI/kimi-cli/pull/2565)**  
   *Open* – Fixes hook GC issue (#2564) by storing the task reference and using `add_done_callback` to preserve it until completion. Essential for hook reliability.

2. **[#2539 – fix(mcp): normalize tools for Moonshot API](https://github.com/MoonshotAI/kimi-cli/pull/2539)**  
   *Open* – Ensures MCP tool names are mapped to stable Moonshot‑compatible aliases and fixes missing root `object` type in schemas. Improves interoperability with Moonshot’s API.

3. **[#2562 – fix(llm): allow disabling prompt cache key](https://github.com/MoonshotAI/kimi-cli/pull/2562)**  
   *Open* – Adds a `prompt_cache_key` boolean setting to the `kimi` provider, allowing users to opt out of session‑derived cache keys. Useful for debugging or when prompt caching causes issues.

4. **[#2561 – Fix UnicodeEncodeError on startup when stdio uses a non‑UTF-8 encoding](https://github.com/MoonshotAI/kimi-cli/pull/2561)**  
   *Open* – Wraps the welcome banner output with encoding fallback for terminals using GBK (Windows Chinese locale). Direct fix for Issue #1436.

5. **[#2560 – Fix UnicodeEncodeError in web banner when stdout is non‑UTF-8 (Windows)](https://github.com/MoonshotAI/kimi-cli/pull/2560)**  
   *Open* – Similar fix for the `kimi web` command, preventing crash before HTTP server starts. Addresses Issue #2532.

---

## Feature Request Trends

No new feature requests were surfaced in the last 24h. The current community focus is overwhelmingly on **stability and platform compatibility** – especially Windows (non‑UTF‑8 encoding) and VS Code extension responsiveness. The MCP tool normalization and prompt cache disable toggle are the closest to feature enhancements, and both stem from existing bugs rather than greenfield requests.

---

## Developer Pain Points

- **Windows encoding failures** – Two PRs (#2561, #2560) were needed just to handle GBK/Shift‑JIS terminals; the welcome banner and web startup both crashed on redirected stdout.
- **Hook unpredictability** – PostToolUse hooks silently dropping (Issue #2564) erodes trust in automation workflows.
- **VS Code extension staleness** – Approval prompts that never render (Issue #2563) and non‑clickable file paths (Issue #2317) make the extension feel incomplete.
- **Connectivity brittleness** – Issue #1070 remained open for months; while closed, it hints at fragile login/auth infrastructure.
- **MCP schema mismatches** – PR #2539 had to correct missing schema fields, indicating ongoing friction between Kimi’s internal API and the MCP specification.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-07-28

## Today's Highlights
OpenCode v1.18.7 shipped today with three desktop bugfixes—removing the extra macOS fullscreen titlebar inset, preventing shadowed command palette entries from reappearing, and adding scroll to the project selector dropdown. On the core side, the team landed a major MCP client upgrade to SDK v2 (stateless/legacy negotiation, pagination, subscription support) and a flurry of system prompt refreshes for V2 documentation alignment. Community contributions continue to shape the project, with a fix for TUI background hints (#39242) and a test‑LLM service revival (#39223) leading the day’s PR activity.

## Releases
**v1.18.7** (released 2026-07-28) — three bugfixes:
- Removed extra titlebar inset in fullscreen on macOS.
- Fixed command palette entries reappearing incorrectly when shadowed commands are removed.
- Added scrolling to the project selector dropdown when the list is long.  
Thank you to community contributor **@david1gp**.

[View release details](https://github.com/anomalyco/opencode/releases/tag/v1.18.7)

## Hot Issues
1. **#38830** [OPEN] *AutoScroller plugin depends on Scroller plugin* – A runtime error in the renderer prevents plugin registration. 5 comments, no reactions yet.  
   [Issue](https://github.com/anomalyco/opencode/issues/38830)

2. **#39214** [CLOSED] *OpenCode GO Kimi k3 temperature setting causing failure* – The `temperature` parameter is rejected by Kimi K3 upstream regardless of value. 2 comments, simple fix likely needed on OpenCode’s side.  
   [Issue](https://github.com/anomalyco/opencode/issues/39214)

3. **#29660** [CLOSED] *BUG: should allow "ask" in agents* – Agent config with `bash: "ask"` fails; the `ask` mode is not recognised in the agent schema. 3 comments, highlights a gap in permission/skill handling.  
   [Issue](https://github.com/anomalyco/opencode/issues/29660)

4. **#29034** [CLOSED] *Qwen3.6-plus-free and minimax-m2.5-free models invisible in TUI* – Models present in Zen API but missing from `opencode models`. 7 comments, community wants better model discovery.  
   [Issue](https://github.com/anomalyco/opencode/issues/29034)

5. **#29571** [CLOSED] *Conversation permanently stuck after 'vision is not enabled' error* – GitHub Copilot org policy blocks vision; conversations become unrecoverable. 6 comments, 3 👍 – a critical UX blocker.  
   [Issue](https://github.com/anomalyco/opencode/issues/29571)

6. **#14494** [CLOSED] *Unclear info on how to properly setup Azure and Azure Cognitive Services Provider* – Missing `AZURE_RESOURCE_NAME` env var causes auth failures, lack of documentation. 12 comments, 3 👍 – recurring onboarding pain.  
   [Issue](https://github.com/anomalyco/opencode/issues/14494)

7. **#21793** [CLOSED] *permission.skill pattern rules not fully enforced* – Deny patterns like `"lark-*"` still expose matching skills to the model. 8 comments, security concern.  
   [Issue](https://github.com/anomalyco/opencode/issues/21793)

8. **#16962** [CLOSED] *Clipboard copy not working over SSH (Mac-to-Mac)* – Notification shown but system clipboard unchanged. 6 comments, 2 👍 – long‑standing remote‑work annoyance.  
   [Issue](https://github.com/anomalyco/opencode/issues/16962)

9. **#23722** [CLOSED] *Qwen 3.5 Plus quota problem on Go subscription* – False quota‑exceeded errors despite valid plan. 5 comments, 2 👍 – provider integration friction.  
   [Issue](https://github.com/anomalyco/opencode/issues/23722)

10. **#29200** [CLOSED] *Invalid JSON/C causes "Unexpected server error" on startup* – Any syntax error in `opencode.jsonc` yields unhelpful error messages. 5 comments, 2 👍 – improves developer experience.  
    [Issue](https://github.com/anomalyco/opencode/issues/29200)

## Key PR Progress
1. **#39247** [OPEN] *feat(mcp): upgrade client SDK to v2* – Replaces legacy SDK with `@modelcontextprotocol/client@2.0.0-beta.5`. Negotiates stateless/legacy MCP servers, delegates pagination to SDK, supports modern list‑change subscriptions.  
   [PR](https://github.com/anomalyco/opencode/pull/39247)

2. **#39245** [CLOSED] *fix(core): refresh system prompt references* – Points prompts at V2 docs, updates tool names and codex‑specific guidance.  
   [PR](https://github.com/anomalyco/opencode/pull/39245)

3. **#39240** [CLOSED] *fix(core): align Meta system prompt* – Restores Meta prompt wording, removes obsolete `TodoWrite`, updates V2 tool names.  
   [PR](https://github.com/anomalyco/opencode/pull/39240)

4. **#39242** [OPEN] *fix(tui): hide background hint when all work is already backgrounded* – Prevents `ctrl+b` hint from appearing when `state.metadata.background` is set asynchronously. Fixes #36940.  
   [PR](https://github.com/anomalyco/opencode/pull/39242)

5. **#39234** [CLOSED] *(contributor) docs: forbid type‑position import references* – Adds a style rule to ban `import("...")` in type positions, with alias carve‑out.  
   [PR](https://github.com/anomalyco/opencode/pull/39234)

6. **#39239** [CLOSED] *(contributor) fix(core): keep config root watches alive and ignore vendored trees* – Ensures recreated config files are reloaded; excludes vendored directories from watch.  
   [PR](https://github.com/anomalyco/opencode/pull/39239)

7. **#39241** [OPEN] *fix(app): follow visual tab order* – Derives tab traversal from visible titlebar order, skips hidden tabs, covers reordered/filtered sequences with unit + Playwright tests.  
   [PR](https://github.com/anomalyco/opencode/pull/39241)

8. **#39223** [OPEN] *(contributor) test(core): add scoped test LLM* – Revives `TestLLM` service pattern for V2. Provides reusable response constructors (`stop`, `text`, `tool`) to simplify `session-runner.test.ts`.  
   [PR](https://github.com/anomalyco/opencode/pull/39223)

9. **#39236** [OPEN] *(contributor) fix(core): deduplicate direct instruction reads* – Persists nested `AGENTS.md` content as session instructions while replacing matched read result with a model‑facing receipt.  
   [PR](https://github.com/anomalyco/opencode/pull/39236)

10. **#39238** [OPEN] *(contributor) fix(core): bound search tool execution* – Adds 30‑second deadline to glob/grep tools; returns focused error telling the model to narrow path/pattern. Fixes #39208.  
    [PR](https://github.com/anomalyco/opencode/pull/39238)

## Feature Request Trends
- **Model support expansion** – Multiple requests for additional models (SiliconFlow DeepSeek-V4-Pro #29494, Qwen/minimax visibility #29034, Azure partner deployments #29776) signal strong demand for broader provider compatibility.
- **Persistent session controls** – Users want to disable idle spinners (#21939) and need better data management for stored sessions (#8083).
- **In‑app browser integration** – Idea to capture elements from VSCode’s internal browser (#28657) reflects a desire for tighter development workflow integration.
- **TUI/UX improvements** – Requests include enabling `ask` mode in agents (#29660), respecting `Ctrl+D` in session commands (#29687), and exposing HTTP response headers from remote MCP tools (#29665).

## Developer Pain Points
- **Configuration fragility** – Schema mismatches (#26628), unhelpful JSONC syntax errors (#29200), and missing environment variables (Azure #14494) cause startup failures with poor diagnostics.
- **Provider/model friction** – Model‑specific quirks (Kimi rejecting temperature #39214, Qwen quota errors #23722, vision‑enforcement breaking sessions #29571) create unpredictable failures.
- **Permission enforcement gaps** – `permission.skill` patterns not respected (#21793) and `ask` mode not recognised (#29660) undermine trust in access controls.
- **Remote & multi‑server instability** – SSH clipboard failures (#16962), sidecar crashes on Windows (#29599), multi‑server session loops (#18302), and TUI jitter (#29794) plague power users.
- **Inconsistent command behavior** – `/undo` rolls back conversation but not files (#29520), new sessions ignoring `default_agent` (#29594), and model routing bypassing agent configuration (#28809).

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-07-28

**Data source:** github.com/badlogic/pi-mono (project: `earendil-works/pi`)

---

## Today's Highlights

A major compaction bug blocks Copilot Enterprise users, and a long-standing terminal-scrolling glitch gains renewed attention. On the feature side, extensions inch closer to being first-class UI citizens with a new markdown-manipulation API and session-scoped model exposure. Several provider-specific fixes landed, including OpenCode Go’s display name and Anthropic session-affinity headers, while a new SQLite-based session search opens the door to faster history retrieval.

---

## Releases

No new releases in the last 24 hours.

---

## Hot Issues

### 1. [bug] Compaction using Copilot Enterprise not possible  
**#6768** – *14 comments, 12 thumbs*  
Both OpenAI and Anthropic models fail with “421 Misdirected Request” when compacting context under a Copilot Enterprise license. The error originates from turn-prefix summarization. This blocks a core workflow (context compaction) for enterprise users.  
🔗 https://github.com/earendil-works/pi/issues/6768

### 2. [bug] Terminal scrolls to beginning without reason  
**#5023** – *10 comments*  
A frequent redraw glitch where the terminal jumps to the session start and quickly scrolls back to the end. Occurs randomly during model responses. High frustration, no permanent fix yet.  
🔗 https://github.com/earendil-works/pi/issues/5023

### 3. [feature] Make in-session model and thinking-level changes ephemeral by default  
**#5263** – *10 comments, 10 thumbs*  
Proposes that `/model` and `/thinking` changes should only affect the active session, while a new “Default model” entry in `/settings` acts as the single global surface. Strong community support.  
🔗 https://github.com/earendil-works/pi/issues/5263

### 4. [inprogress] An API for enhancing agent message markdown  
**#6747** – *8 comments, 2 thumbs*  
Requests an extension hook to mutate the rendered markdown of agent messages without altering the LLM payload. Motivated by a best-effort formula renderer. One of the most-wanted extension API improvements.  
🔗 https://github.com/earendil-works/pi/issues/6747

### 5. [bug] OpenCode Go provider displays as "OpenCode Zen Go"  
**#7157** – *5 comments*  
A naming inconsistency: `pi --list-models` shows “OpenCode Zen Go” instead of the expected “OpenCode Go”. Quickly fixed in a PR.  
🔗 https://github.com/earendil-works/pi/issues/7157

### 6. [bug] Token invalidation with GitHub Copilot provider due to plugin integration vs OAuth  
**#6970** – *4 comments, 1 thumb*  
Using pi’s built-in `GitHub Copilot Plugin` token flow (instead of OAuth) can cause tokens to be invalidated when pi runs alongside `copilot-lsp` on two devices. Investigation suggests the plugin flow triggers rate/scope limits.  
🔗 https://github.com/earendil-works/pi/issues/6970

### 7. [bug] anthropic-messages never sends x-client-request-id  
**#7161** – *4 comments*  
Unlike all OpenAI paths, the Anthropic code path omits the `x-client-request-id` header, breaking session affinity for proxies that round-robin between Claude accounts.  
🔗 https://github.com/earendil-works/pi/issues/7161

### 8. [no-action] Z.AI providers send max_completion_tokens, which Z.AI ignores  
**#7143** – *4 comments*  
Z.AI only honors `max_tokens`; pi was sending `max_completion_tokens`, causing unintended output truncation. A PR is already in progress.  
🔗 https://github.com/earendil-works/pi/issues/7143

### 9. [no-action] Add Merge Gateway as a built-in provider  
**#5986** – *3 comments, 1 thumb*  
Requests bundling Merge Gateway (hosted routing gateway) as a standard OpenAI-compatible provider. Closed as no-action, but shows community desire for more gateway integrations.  
🔗 https://github.com/earendil-works/pi/issues/5986

### 10. [bug, no-action] New default PI_* guideline in system prompt over-encourages unnecessary bash calls  
**#7128** – *3 comments*  
A recent system-prompt instruction (“Inspect PI_* environment variables…”) causes agents to run unnecessary `env` inspections. Reported as a bias toward wasteful bash calls.  
🔗 https://github.com/earendil-works/pi/issues/7128

---

## Key PR Progress

### 1. feat: search index sqlite  
**#7163** – Adds `SessionRepo.search()` with a contentless FTS5 virtual-table for SQLite. JSONL/memory backends still scan all sessions, but lays groundwork for efficient history search.  
🔗 https://github.com/earendil-works/pi/pull/7163

### 2. feat(extensions): expose ctx.scopedModels to extensions  
**#7191** – Provides `ctx.scopedModels` (read-only) so extensions can build model pickers or other model-aware UIs without parsing internal state.  
🔗 https://github.com/earendil-works/pi/pull/7191

### 3. feat(ai): support Claude Opus 5 on Bedrock  
**#7081** – Enables adaptive thinking for Opus 5 (required server-side) and improves error-message detail hiding on Bedrock.  
🔗 https://github.com/earendil-works/pi/pull/7081

### 4. fix(ai): strip multimodal media markers from tool results to prevent tokenizer crashes  
**#7184** – Removes orphaned `|image|` markers from tool results before tokenization, preventing `mtmd_tokenize` crashes when no actual image data exists. (Duplicate of #7181, merged.)  
🔗 https://github.com/earendil-works/pi/pull/7184

### 5. fix(ai): rename OpenCode Zen Go to OpenCode Go  
**#7173** – Corrects the display name for `opencode-go` provider. Fixes #7157.  
🔗 https://github.com/earendil-works/pi/pull/7173

### 6. fix(ai): send x-client-request-id on anthropic-messages  
**#7172** – Forwards `options.sessionId` as `x-client-request-id` header on Anthropic API calls, matching OpenAI behavior. Fixes #7161.  
🔗 https://github.com/earendil-works/pi/pull/7172

### 7. fix(coding-agent): dedupe byte-identical context files  
**#7169** – Changes `loadProjectContextFiles` to compare file content (SHA-256) instead of path alone, avoiding redundant context injection when worktrees mirror the repo root’s `CLAUDE.md`.  
🔗 https://github.com/earendil-works/pi/pull/7169

### 8. fix(coding-agent): support concurrent user bash cancellation  
**#7103** – Allows users to cancel multiple concurrently running bash commands. Improves reliability in agent workflows with parallel tool calls.  
🔗 https://github.com/earendil-works/pi/pull/7103

### 9. fix(ai): send max_tokens for Z.AI providers  
**#7174** – Replaces `max_completion_tokens` with `max_tokens` for Z.AI endpoints (zai, zai-coding-cn, etc.) so the output cap is actually honored. Fixes #7143.  
🔗 https://github.com/earendil-works/pi/pull/7174

### 10. fix(ai): use provider-reported cost when responses include it  
**#6881** – When an API response includes a billed cost field, use it directly instead of catalog calculations. Supports Vercel AI Gateway’s upstream cost reporting.  
🔗 https://github.com/earendil-works/pi/pull/6881

---

## Feature Request Trends

- **Extension API expansion**: Multiple requests for new extension hooks — `pre_response`/`before_send_message` gates (#7137), markdown manipulation (#6747), and exposure of session-scoped models (#7192). The community clearly wants extensions to be able to inspect and influence both the UI and the message pipeline.
- **Provider & gateway improvements**: Requests to bundle Merge Gateway (#5986), support `aws credential_process` (#7170), and add a read-only auth preflight command (#7152) indicate growing enterprise / multi-provider usage.
- **Session and search enhancements**: The SQLite search PR (#7163) and the `scopedModels` exposure (#7192) point toward better session management and discoverability.
- **Ephemeral model changes**: The popularity of #5263 (ephemeral overrides) signals a desire for more flexible model switching without polluting global defaults.

---

## Developer Pain Points

- **Compaction failures**: Enterprise Copilot users are blocked by compaction errors (#6768). This is the most upvoted open bug and a critical workflow blocker.
- **Terminal UI glitches**: Random terminal scroll jumps (#5023) and excessive full re-renders when tool cards leave the viewport (#7194) degrade the TUI experience.
- **Provider compatibility**: Issues with Z.AI’s `max_completion_tokens` (#7143), missing Anthropic session headers (#7161), and Bedrock credential resolution (#7170) show that provider-specific quirks still cause headaches.
- **Extension installation and crash resilience**: Failed git extension installs poison the directory (#7189), and a single bad package manifest can crash all sessions (#7187). These highlight the need for more robust error handling in the package manager.
- **Unwanted agent behavior**: The system prompt bias toward unnecessary bash calls (#7128) and the multimodal marker crashes (#7184) show that subtle prompt and tokenization issues still trip up users.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest – 2026-07-28

## Today’s Highlights

The SWE‑bench Verified benchmark was **quarantined** after 376 of 500 tasks resolved (75.2%), prompting a non‑production prerelease (`dsw-manual-poc`) for manual validation. A wave of **E2E test CI failures** (10+ issues in 24h) is being actively triaged, while key feature proposals around **enterprise memory integration** and **external context providers** continue to gather community discussion. On the PR side, work progresses on **daemon session lifecycle hardening**, **Web Shell channel configuration**, and **Dynamic Workflow TUI redesign**.

## Releases

- **[dsw-manual-poc-20260727-1](https://github.com/QwenLM/qwen-code/releases/tag/dsw-manual-poc-20260727-1)** and **[dsw-manual-poc-20260727-2](https://github.com/QwenLM/qwen-code/releases/tag/dsw-manual-poc-20260727-2)** – Non‑production benchmark prereleases for manual SWE‑bench verification. Both reference `v0.20.0-nightly.20260722.b98306b7e`. SWE‑bench Verified is now **QUARANTINED** (376 resolved, 116 unresolved, 1 exec‑only) – see the `<!-- qwen-code-dsw-swe-verified:start -->` block for full details.

## Hot Issues

1. **[#7585 – External Context Provider Profile](https://github.com/QwenLM/qwen-code/issues/7585)**  
   Proposal to add a dedicated extension that lets a CLI process retrieve shared context from an admin‑bound external memory service. High community interest (9 comments).

2. **[#7449 – Enterprise External‑Memory Integration Profile](https://github.com/QwenLM/qwen-code/issues/7449)**  
   Provider‑neutral design for enterprise‑grade external memory, documentation‑first with incremental compatibility tests. 6 comments.

3. **[#6762 – Skill Context Lifecycle Management](https://github.com/QwenLM/qwen-code/issues/6762)**  
   Request for mechanisms to unload, compress, or refresh skill bodies in conversation history – currently loaded forever. 5 comments.

4. **[#7841 – Quota‑Exhausted 429s Silently Retried](https://github.com/QwenLM/qwen-code/issues/7841)**  
   P2 bug: when a 429 signals permanently exhausted quota, the client silently retries instead of surfacing an error. Only status code is checked, not the body. 3 comments.

5. **[#7835 – Sub‑Agent Questions Not Forwarded](https://github.com/QwenLM/qwen-code/issues/7835)**  
   P2 bug: sub‑agents can ask questions but the main agent never collects or forwards them, leaving the sub‑agent waiting forever. 3 comments.

6. **[#7832 – YOLO Mode Socket Close Not Retried](https://github.com/QwenLM/qwen-code/issues/7832)**  
   P1 bug: generating >500 lines in headless `--yolo` mode consistently fails with `UND_ERR_SOCKET` after ~3‑5 minutes. No retry logic for mid‑stream TCP closures. 3 comments.

7. **[#7831 – ECONNRESET on Streaming Beyond 150k Tokens](https://github.com/QwenLM/qwen-code/issues/7831)**  
   P2 bug: repeated `read ECONNRESET` errors when conversation context exceeds ~150k tokens. Impacts long‑session users. 3 comments.

8. **[#7819 – `--safe-mode` Drops ACP‑Supplied mcpServers](https://github.com/QwenLM/qwen-code/issues/7819)**  
   P2 bug: `--safe-mode` unconditionally clears `mcpServers` from ACP session requests, not just local `settings.json`. 3 comments.

9. **[#7757 – Measure Daemon First‑Model‑Output Latency](https://github.com/QwenLM/qwen-code/issues/7757)**  
   P2 enhancement: after cold‑start improvements (#7264), the next frontier is reducing time to first model output for daemon sessions. 2 comments.

10. **[#7167 – Fleet Shepherd Dashboard](https://github.com/QwenLM/qwen-code/issues/7167)**  
    Auto‑maintained CI/infra dashboard tracking PR check status. Currently shows several in‑flight checks. 4 comments.

## Key PR Progress

1. **[#7891 – Expose Loop Tools in Daemon Sessions](https://github.com/QwenLM/qwen-code/pull/7891)**  
   Daemon‑managed channel sessions now expose channel loop tools (create/list/cancel recurring proactive work) via a session‑scoped MCP server.

2. **[#7892 – Redesign Dynamic Workflow Execution Console](https://github.com/QwenLM/qwen-code/pull/7892)**  
   TUI redesign for Dynamic Workflows: separates run header, phase rail, live agent progress, signals, and errors for at‑a‑glance understanding.

3. **[#7894 – Gate Session Writer Lease Behind Opt‑In](https://github.com/QwenLM/qwen-code/pull/7894)**  
   Adds `experimental.sessionWriterLease` (default `false`) for cross‑process write fencing in ACP/daemon mode. Restart‑required opt‑in.

4. **[#7859 – Add Native Live Voice to Web Shell](https://github.com/QwenLM/qwen-code/pull/7859)**  
   macOS‑only: opt‑in Live Voice via Qwen Live Host. Double‑Command to start/resume voice conversations, switch, mute, or dismiss.

5. **[#7812 – Release Managed Session Writer Locks on Shutdown](https://github.com/QwenLM/qwen-code/pull/7812)**  
   Cooperative shutdown for daemon‑managed ACP children: synchronous close of session/turn admission, drain accepted work, retire writer locks, then fire `SessionEnd` hooks.

6. **[#7893 – Add Channel Configuration Flows to Web Shell](https://github.com/QwenLM/qwen-code/pull/7893)**  
   First writable UI for DingTalk, WeCom, and Feishu channels. Supports Pairing/Open access modes, credential‑safe editing, and credential rotation.

7. **[#7792 – Deduplicate E2E Failure Issues](https://github.com/QwenLM/qwen-code/pull/7792)**  
   CI improvement: instead of opening a new issue per failed commit, the workflow checks for existing open issues on the same head commit and comments instead.

8. **[#7731 – Git Branch Picker, Commit Dialog, and Create PR Flow (Web Shell)](https://github.com/QwenLM/qwen-code/pull/7731)**  
   IntelliJ‑style branch picker with search, checkout, new branch, delete; plus commit dialog and PR creation workflow.

9. **[#7821 – Harden Todo Stop Guard Continuations](https://github.com/QwenLM/qwen-code/pull/7821)**  
   Atomic state‑machine change with owner‑scoped claim/release protocol for Todo Stop Guard, migrating daemon, channel, and desktop agent consumers.

10. **[#7888 – Robust Ripgrep](https://github.com/QwenLM/qwen-code/pull/7888)**  
    Improves ripgrep reliability: retries once with `--threads 1` on worker‑thread `EAGAIN`, adds timeout‑based cancellation to distinguish true no‑match from failed searches.

## Feature Request Trends

- **Enterprise & External Context** – Two proposals (#7585, #7449) for pluggable external‑memory and context‑provider profiles, reflecting growing enterprise adoption.
- **Agent & Skill Lifecycle** – #6762 (skill context lifecycle) and #7835 (sub‑agent question forwarding) show demand for better management of long‑running agent sessions.
- **Terminal & Web Shell UX** – Multiple requests for Dynamic Workflow TUI (#7887, #7890), git branch display fixes (#7828), and voice controls (#6972) indicate a focus on user‑facing interfaces.
- **Channel Integration** – Requests for DingTalk image delivery (#7687), GitHub notification dispatch (#7807), and channel configuration flows (#7893) highlight ecosystem expansion.
- **CI & Repository Hygiene** – #7383 (scheduled repo‑hygiene skill) and #7792 (E2E dedup) reflect a desire to automate mundane maintenance and reduce review overhead.

## Developer Pain Points

- **Flaky E2E Tests** – 10+ CI failure issues in the last 24h (e.g., #7755, #7889, #7878) with many auto‑filed and auto‑labeled `status/ready-for-agent`. The team is working on deduplication (#7792) but frequency remains high.
- **Silent Failures** – Quota exhaustion (#7841), sub‑agent deadlocks (#7835), and socket closures in YOLO mode (#7832) all silently degrade the experience without user feedback.
- **Long‑Context Streaming Instability** – Repeated `ECONNRESET` errors once context exceeds ~150k tokens (#7831) make extended sessions unreliable.
- **Configuration Surprises** – `--safe-mode` overriding ACP‑supplied MCP servers (#7819) and stale git branch display (#7828) frustrate power users.
- **Network Resilience** – Mid‑stream TCP disconnections during large code generation (#7832) and abrupt socket closures on streaming endpoints are recurring complaints.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-07-28

A lively day for CodeWhale’s v0.9.2 release candidate: several critical bug fixes landed, the cost system was audited, and contributors stepped up with Windows CRLF editing repairs and a new `thinking_default_expanded` setting. The v0.9.2 integration branch now carries 82 commits, with focused harvest PRs closing issues across billing, onboarding, fleet configuration, and visual polish.

---

## Releases
No new releases in the last 24 hours. The team is consolidating the v0.9.2 release candidate (umbrella PR #4911).

---

## Hot Issues (10)

1. **#4042 – Environment-level tool sandboxing for sub-agents**  
   *Closed.* A broad feature tracking runtime enforcement of tool restrictions across sessions, sub-agents, Fleet workers, and MCP servers. Confirmed that `--disallowed-tools` works; the issue served as the design anchor.  
   [Hmbown/CodeWhale Issue #4042](https://github.com/Hmbown/CodeWhale/issues/4042)

2. **#998 – Chinese text truncated in TUI**  
   *Open.* User reports that some Chinese characters are not fully displayed and requests hover tooltips. The issue has 10 comments and 1 👍, indicating a common UX pain point for zh-Hans users.  
   [Hmbown/CodeWhale Issue #998](https://github.com/Hmbown/CodeWhale/issues/998)

3. **#4526 – Request for dedicated StepFun Plan / OpenCode Go endpoint configurations**  
   *Closed.* A zh-Hans user asks for separate API endpoint URLs for StepFun Plan subscriptions and OpenCode Go. The fix was merged in a related PR.  
   [Hmbown/CodeWhale Issue #4526](https://github.com/Hmbown/CodeWhale/issues/4526)

4. **#3983 – Make current Work state model-visible on parent turns**  
   *Closed.* Core runtime improvement: ensures that the checklist ledger and strategy context are exposed to the model on parent turns, hardening sub-agent forking and `/relay`.  
   [Hmbown/CodeWhale Issue #3983](https://github.com/Hmbown/CodeWhale/issues/3983)

5. **#4764 – `edit_file` tool fails on Windows CRLF files**  
   *Open.* Exact-match searches fail on CRLF line endings. Reproducible by any AI coding agent. The community has posted reproduction steps; a fix PR (#4942) is already open.  
   [Hmbown/CodeWhale Issue #4764](https://github.com/Hmbown/CodeWhale/issues/4764)

6. **#4785 – Dead-code sweep: 464 `#[allow(dead_code)]` attributes across 143 files**  
   *Open.* Author measured that stripping these yields real dead code; proposes a CI ratchet to prevent further drift. Significant technical debt item.  
   [Hmbown/CodeWhale Issue #4785](https://github.com/Hmbown/CodeWhale/issues/4785)

7. **#4797 – Cost surface audit: two pricing systems, unpriced cache writes, and a `/cost` that is one number**  
   *Closed.* Revealed that the TUI maintains 2003 lines of hand-maintained pricing, understates real spend, and duplicates facts. Subsequent issues (#4939) break down remaining work.  
   [Hmbown/CodeWhale Issue #4797](https://github.com/Hmbown/CodeWhale/issues/4797)

8. **#3897 – Streaming re-parses entire growing message every chunk (O(N²))**  
   *Closed.* Performance bug: the markdown renderer re-parses the full message on each chunk. Optimized in the v0.9.2 cycle.  
   [Hmbown/CodeWhale Issue #3897](https://github.com/Hmbown/CodeWhale/issues/3897)

9. **#4941 – Thinking level silently reverts to Auto on restart**  
   *Open.* Persistence works at the settings layer, but an “auto model” discards the persisted `reasoning_effort`. Affects users who set a custom thinking level.  
   [Hmbown/CodeWhale Issue #4941](https://github.com/Hmbown/CodeWhale/issues/4941)

10. **#4936 – `/rc` command missing from runtime**  
    *Open.* The website instructs users to run `/rc` (runner-enrollment), but the actual runtime does not implement the command. Product/docs mismatch.  
    [Hmbown/CodeWhale Issue #4936](https://github.com/Hmbown/CodeWhale/issues/4936)

---

## Key PR Progress (10)

1. **#4942 – fix(tools): preserve CRLF edits**  
   *Open.* Directly addresses #4764. Normalizes searches to LF while mapping back to original byte spans; replaces newlines to match base file style. Contributor: nightt5879.  
   [Hmbown/CodeWhale PR #4942](https://github.com/Hmbown/CodeWhale/pull/4942)

2. **#4940 – feat(media): executable capture harness for v0.9.2 real session**  
   *Closed.* Tooling for the “Show, don’t tell” issue (#4906). Provides everything up to the human judgment call of which take to publish.  
   [Hmbown/CodeWhale PR #4940](https://github.com/Hmbown/CodeWhale/pull/4940)

3. **#4938 – chore: land bounded dead-code slice and add a budget ratchet**  
   *Closed.* First part of #4785: removes a safe subset of dead-code attributes and implements a CI gate that fails if the count grows. The full sweep is deferred to v0.9.3.  
   [Hmbown/CodeWhale PR #4938](https://github.com/Hmbown/CodeWhale/pull/4938)

4. **#4935 – fix(tui): stop the ambient jellyfish reading as a face**  
   *Closed.* The jellyfish skirt frames `(v_v)` and `(v.v)` looked like eyes and a mouth. Changed to avoid unintended anthropomorphism in the ambient TUI ocean.  
   [Hmbown/CodeWhale PR #4935](https://github.com/Hmbown/CodeWhale/pull/4935)

5. **#4937 – fix(tui): finalize stale shell transcript cells**  
   *Open.* Contributor LI-Jialu fixes the UI: finalizes restored running shell cells when the job is gone, renders stale cards with static status, and suppresses fading spinners.  
   [Hmbown/CodeWhale PR #4937](https://github.com/Hmbown/CodeWhale/pull/4937)

6. **#4912 – feat(web): v0.9.2 docs guide/vocabulary, getting-started path, pending media manifest**  
   *Closed.* Major documentation update: new `/docs/guide` and `/docs/vocabulary` routes, homepage getting-started path, a11y improvements, and a media manifest for the upcoming real-session recordings.  
   [Hmbown/CodeWhale PR #4912](https://github.com/Hmbown/CodeWhale/pull/4912)

7. **#4913 – test(preview): provider-free manifest×wire matrix for four exact routes**  
   *Closed.* Adds a test matrix covering GLM-5.2, GLM-5-Turbo, kimi-k2, and DeepSeek v3-0324 with varying reasoning and token controls. Runs against wiremock – no live credentials needed.  
   [Hmbown/CodeWhale PR #4913](https://github.com/Hmbown/CodeWhale/pull/4913)

8. **#4931 – Migrate QA PTY test harness from vt100 to rio-vt**  
   *Open.* Swaps the terminal emulation library for PTY tests. Rio’s engine is actively maintained and resolves parser edge cases that vt100 could not handle.  
   [Hmbown/CodeWhale PR #4931](https://github.com/Hmbown/CodeWhale/pull/4931)

9. **#4929 – fix(acp): preserve numeric JSON-RPC IDs for avante.nvim compatibility**  
   *Closed.* ACP client now keeps numeric IDs as numbers (not strings), fixing Lua table key lookups in avante.nvim. Restores compatibility broken by #1696.  
   [Hmbown/CodeWhale PR #4929](https://github.com/Hmbown/CodeWhale/pull/4929)

10. **#4928 – feat(tui): add thinking_default_expanded setting**  
    *Closed.* When enabled, thinking blocks start expanded. Useful for SSH/tmux users where Space triggers are captured, and for users who always want reasoning visible.  
    [Hmbown/CodeWhale PR #4928](https://github.com/Hmbown/CodeWhale/pull/4928)

---

## Feature Request Trends

- **Better configuration discovery:** Several issues ask for dedicated model provider endpoint configurations (StepFun Plan, OpenCode Go) and clearer documentation around API URLs and subscription tiers.
- **Improved TUI interactivity:** Demands for clickable file previews (#2342), hovering tooltips for truncated text (#998), and always-expanded thinking blocks (#4925) show a desire for richer mouse/keyboard UX.
- **Cost transparency:** Users want `/cost` to decompose spend by route and token class, and to reflect real cache-write pricing (#4797, #4939).
- **Offline/remote mode:** The onboarding PR (#4926) and issues around offline explore and mobile/chat-bridge modes indicate growing interest in headless or remote-first usage.
- **Website theming:** A community member requested website theming (#4934), suggesting visual customization is becoming important alongside the terminal UI.

---

## Developer Pain Points

- **Windows CRLF handling:** `edit_file` fails on Windows due to LF/CRLF mismatches (#4764). A fix is in review (#4942), but the underlying issue highlights poor cross-platform testing.
- **Product/docs mismatch:** The website tells users to run `/rc` but the runtime does not implement it (#4936). Similarly, the thinking level reset (#4941) shows a gap between settings persistence and model selection logic.
- **Streaming performance:** The O(N²) markdown re-parse (#3897) affected real‑time rendering. Fixed in v0.9.2, but it signals that streaming architecture needs ongoing attention.
- **Dead-code debt:** 464 `#[allow(dead_code)]` hints hide real drift (#4785). Developers face a maintenance burden and risk shipping unused code.
- **Terminal compatibility:** The Space key used for toggling thinking blocks is often captured by SSH/tmux layers (#4925). The `thinking_default_expanded` setting mitigates this, but the underlying keyboard routing is fragile.
- **Cost accounting confusion:** Two active pricing systems and unpriced cache writes lead to underreported spend (#4797). Users and developers alike struggle to trust the `/cost` output.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/boom7sss/agents-radar).*