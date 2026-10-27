# AI CLI Tools Community Digest 2026-08-13

> Generated: 2026-08-13 02:27 UTC | Tools covered: 9

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

# Cross-Tool Comparison Report: AI CLI Developer Tools
**Date: 2026-08-13** · Sources: community digests for 9 major AI CLI tools

---

## 1. Ecosystem Overview

The AI CLI ecosystem is transitioning from single-session chat assistants into durable, multi-agent development platforms. The dominant themes this window are session/context reliability, MCP integration quality, and desktop-shell convergence — every major vendor is investing in Web/desktop surfaces alongside terminal CLIs. Windows stability remains a systemic weakness across nearly all tools, while enterprise demands for usage transparency, permission governance, and model-selection control are becoming table stakes. Community engagement has shifted from feature novelty to operational trust: users are far more vocal about data loss, false-success reports, and cost visibility than raw model capability.

---

## 2. Activity Comparison

| Tool | Hot Issues (24h) | PRs (24h) | Releases (24h) |
|---|---|---|---|
| Claude Code | 10+ (top-30 triage) | 3 (docs-only, all closed) | v2.1.229 |
| OpenAI Codex | 11 | 10 | none |
| Gemini CLI | 10 | 10 | v0.56.0-nightly |
| GitHub Copilot CLI | 10 | 2 | none |
| Kimi Code CLI | 1 | 2 | none |
| OpenCode | 10 | 10 | v1.18.17, v1.18.18 |
| Pi | 10 | 10 | none |
| Qwen Code | 10 | 10 | desktop-v0.2.0, v0.2.1 |
| CodeWhale | 10 | 10 | v0.9.6 |

*Notes: "Hot Issues" = issues active/updated in the 24h window, not totals. Codex shows the highest top-issue engagement (392 👍 on #25719); Kimi has the least community surface.*

---

## 3. Shared Feature Directions

**Session & memory durability** — the strongest cross-tool signal:
- **Kimi** — persistent memory system across sessions (#1283, 36 comments)
- **Qwen** — RFC for reliable auto-memory recall with telemetry (#7040); session-restore timeout handling (#8678)
- **Pi** — transactional session persistence (#8052); auto-compaction never triggering before provider overflow (#6879)
- **Claude Code** — conversations vanish in VSCode (#24172); prompt-cache invalidation on background updates (#86244)
- **Codex** — crash-unsafe local state after power loss (#26990)
- **CodeWhale** — interrupted assistant output absent from durable session (#5000)

**MCP lifecycle & auth hardening** — friction in every tool:
- **Copilot** — CIMD OAuth for remote MCP servers (#1305, 35 👍); no retry/backoff on transient 5xx (#4466)
- **OpenCode** — MCP tools connected but never exposed to agent (#33027); local-server spawn races
- **Codex** — `structuredContent` results silently dropped (#38287)
- **Claude Code** — stale plugin cache after `/plugin update` (#14061); MCP servers killed/respawned mid-session (#86040)
- **Gemini** — corrupt MCP enablement config causes fail-open data-loss risk (#28794)
- **CodeWhale** — `"nextCursor": null` violates MCP spec, breaks strict clients (#5335)

**Multi-agent orchestration reliability**:
- **Claude Code** — 12-bug post-mortem catalog from one autonomous overnight cycle (#54393)
- **Gemini** — subagents report `GOAL` success after `MAX_TURNS` with no real work (#22323) — silent false success
- **Qwen** — background Explore agents duplicate work and complete prematurely mid-flight (#8097)
- **Copilot** — model-emitted `model` argument silently overrides intended subagent strategy (#4432)

**Usage & cost observability**:
- **Codex** — per-thread credit/dollar estimates across `/status`, TUI status lines, and backend client (PRs #38282, #38281, #38270)
- **Claude Code** — advisor turns double-count usage (#84738); cost spikes from cache invalidation (#86244)
- **Pi** — cumulative provider usage lost in delta-only streaming events (#7911, fixed in #7982)

**Permission & safety precision**:
- **Claude Code** — false-positive cyber-safeguard blocks hitting CVP-approved orgs (#84352); "Fable 5" flags on legitimate tasks (#86197)
- **OpenCode** — `.env` files leak through grep/glob because deny rules match search patterns, not file paths (#17073); wildcard/globstar semantics fixed in #28689
- **CodeWhale** — Auto-Review silently blocks every Bash/write call in v0.9.5 (#5323)
- **Gemini** — `$VAR`/`${VAR}` expansion bypass closed (GHSA-wpqr-6v78-jr5g, PR #28691)

**Windows desktop reliability** — a systemic gap:
- **Claude Code** — GPU-process crash kills entire app and all sessions (exit 101457950, #81698)
- **Codex** — unbounded `taskkill.exe`/`conhost.exe` storm exhausts WMI (#34260); `powershell.exe` polling every second (#25453)
- **Pi** — Unix-socket test failures on Windows (#8047)
- **OpenCode** — clipboard broken in VSCode Server/Docker (#41470)

---

## 4. Differentiation Analysis

**Claude Code** remains the enterprise-safety-focused incumbent: CVP org approvals, self-hosted runner hooks, remote-control session resumption, and a mature plugin/subagent model. Its PR cadence is maintenance-phase (docs-only), and its pain points cluster around false-positive safety filters and multi-agent coordination at scale.

**OpenAI Codex** shows the strongest backend-engineering rigor: durable thread reverts via immutable rollouts, gRPC session providers, typed world-state schemas, and bounded proxy port allocation. Its community is the most vocal about resource exhaustion (macOS daemon runaway, Windows polling storms) and billing trust (wasted rate-limit resets). Target: enterprise workspaces with metering needs.

**Gemini CLI** is security-hardening-first: auth bypasses, A2A server credential enforcement, trust-rule precedence — alongside an eval-driven development pipeline. The Antigravity migration is creating measurable community hesitation (token efficiency, lost developer features), a migration-execution warning for other vendors.

**GitHub Copilot CLI** is the most GitHub-ecosystem-locked: org model policy, Actions token flows, hooks lifecycle, ACP extension protocol. Lowest PR velocity (2) suggests process-heavy triage; its value prop is enterprise governance, not raw iteration speed.

**OpenCode** is the community-driven open-source speedster: two patch releases in 24h, 10 PRs, contributor-submitted TUI polish and permission-semantics fixes. Strong UX instincts (config-reload-without-restart at 88 👍, shell-syntax highlighting, Mermaid rendering). Its billing desync issues ("Free usage exceeded" after purchase) are the sharpest pain point.

**Pi** has the most ambitious extension architecture for an independent tool: component-level mouse events, HTML-export parity (Mermaid/LaTeX), async durable custom-message hooks, and a dependency-free Ollama local-model proxy. Community PRs are actively harvested by maintainers. Target: power users and extension developers.

**Qwen Code** is betting on Web Shell as the primary platform: tmux-backed interactive terminals, dynamic workflow-run visualization, file uploads, multi-client CDP tunnel sharing, and an Electron→Tauri migration. Session-state consistency (MAX_TOKENS resume duplication, transcript/history disagreement) is its reliability bottleneck.

**CodeWhale** (Rust/TUI, ex-DeepSeek-TUI) is niche but disciplined: security fixes (RUSTSEC-2026-0253), spec compliance (MCP `nextCursor`), and a maintainer-harvest model that rewrites community PRs into production-grade patches. The rename introduces migration overhead but a clearer brand.

---

## 5. Community Momentum & Maturity

**Highest engagement:** Codex dominates raw community energy (#25719: 392 👍, 83 comments — 5× any other top issue). OpenCode's config-reload request (88 👍) shows strong latent demand for developer ergonomics. Claude Code's #84352 (82 comments) indicates enterprise trust is actively being tested by safety-filter regressions.

**Rapidly iterating:** OpenCode (2 releases/day), Qwen (2 desktop releases + 10 PRs), and CodeWhale (release + 10 PRs) are the fastest movers. Codex has exceptional PR throughput (10) without a tagged release — infra work ahead of user-facing features. Gemini ships nightlies with 10 substantive PRs spanning security, retries, and evals.

**Mature/stable:** Claude Code (docs-only PRs — a classic maintenance-phase signal) and Copilot (2 PRs, heavy triage) are consolidating rather than expanding. Kimi's near-silent window (1 issue, 2 PRs) suggests either low community size or a deliberate slowdown.

**Maturity warning signs:** Windows reliability gaps span 7 of 9 tools; model-quality regression reports (Claude Opus 5 in Claude Code, Gemini 3 Pro `thoughtSignature` across both Gemini CLI and OpenCode, Azure hangs in OpenCode, DeepSeek token-field issues in Pi) indicate that provider-side changes ripple outward faster than clients can adapt.

---

## 6. Trend Signals

1. **Session durability is the #1 trust issue.** Every tool has at least one data-loss-adjacent bug (vanishing conversations, non-transactional persistence, interrupted output lost on resume, MAX_TOKENS duplication). Tools that ship transactional persistence and crash-safe snapshots first will win unattended/automation workloads.

2. **MCP is standard, but integration quality is the differentiator.** Spec violations (`nextCursor: null`), silent content drops (`structuredContent`), auth gaps (CIMD, 5xx retries), and lifecycle leaks are universal. Expect a wave of MCP hardening — not new MCP features — across all vendors.

3. **False success is more dangerous than failure.** Gemini subagents reporting `GOAL` after `MAX_TURNS`, CodeWhale's fake edit success, Codex's wasted rate-limit resets — each erodes the trust that autonomous-agent workflows require. "Honest status" is becoming a feature category.

4. **Multi-agent orchestration is the next frontier.** Claude Code's 12-bug post-mortem and Qwen's background-agent duplication reports show the industry is still at the "coordinating subagents is unreliable" stage. Demand is shifting toward durable workflow replay, cross-thread primitives, and visible agent state.

5. **Windows is the industry's weak flank.** GPU crashes, WMI exhaustion, polling storms, and socket failures recur across 7+ tools. Any vendor that delivers a stable Windows desktop experience gains a meaningful enterprise advantage.

6. **Cost observability is enterprise table stakes.** Codex's per-thread usage PRs are the leading indicator; Claude Code's double-counting complaints confirm demand. Expect per-session, per-thread, and per-tool cost surfaces to become standard CLI features.

7. **Local and alternative model support is rising.** Pi's Ollama proxy, CodeWhale's OrcaRouter provider, and OpenCode's custom-provider aliasing point to a multi-model, BYOK future where lock-in is a liability.

8. **Safety systems need surgical precision.** False-positive blocks (Claude Code Fable 5, CodeWhale Auto-Review) generate more community anger than misses. The pattern: coarse safety checks applied at the wrong layer (whole-org approval regressions, search-index matching) break legitimate workflows and force urgent remediation.

9. **Desktop/Web shells are converging with CLIs.** Qwen's Web Shell investment, Codex/Claude Desktop evolution, and OpenCode's VSCode/Docker pain points all signal that the terminal is no longer the only surface — but cross-environment consistency (clipboard, working directory, sessions) lags behind.

10. **Rust is an emerging trust signal.** Claude Code's Rust-reimplementation request, CodeWhale's Rust-based architecture with RUSTSEC fixes, and Pi's ratatui ecosystem work all point to performance/security-conscious users gravitating toward compiled CLIs.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report

**Source:** github.com/anthropics/skills | **Data as of:** 2026-08-13
**Note:** PR comment counts were not exposed in the source dataset; rankings follow the repository's comment-sorted order. All top PRs are currently **open**.

---

## 1. Top Skills Ranking

**#1 — skill-creator eval loop reliability fix (#1298)** — [PR #1298](https://github.com/anthropics/skills/pull/1298)
The most-commented PR in the repository. Fixes `run_eval.py` (and downstream `run_loop.py` / `improve_description.py`) permanently reporting `recall=0%`, rendering the skill-description optimization loop useless. Also addresses Windows subprocess stream reading, trigger detection, and parallel workers. Discussion ties directly to [Issue #556](https://github.com/anthropics/skills/issues/556) (12 comments, 7 👍), the most-reproduced bug in the repo. **Status: Open.**

**#2 — ServiceNow platform skill (#568)** — [PR #568](https://github.com/anthropics/skills/pull/568)
A broad ServiceNow platform assistant covering ITSM, ITOM, ITAM/SAM Pro, FSM, HRSD/CSM, SPM/PPM, Vulnerability Response, and Security Incident Response. One of the longest-lived active discussions, updated as recently as 2026-08-12, indicating sustained reviewer/community interest. **Status: Open.**

**#3 — self-audit skill (#1367)** — [PR #1367](https://github.com/anthropics/skills/pull/1367)
A universal pre-delivery audit skill: mechanical file verification first, then a four-dimension reasoning quality gate in damage-severity order (v1.3.0). Works with any project/model. Related to the [Reasoning Quality Gate Pipeline proposal (#1385)](https://github.com/anthropics/skills/issues/1385). **Status: Open.**

**#4 — testing-patterns skill (#723)** — [PR #723](https://github.com/anthropics/skills/pull/723)
A comprehensive testing skill: Testing Trophy philosophy, unit-testing patterns (AAA, naming, pure functions), React component testing with Testing Library, and guidance on what *not* to test. Directly addresses a frequently requested skill category. **Status: Open.**

**#5 — document-typography skill (#514)** — [PR #514](https://github.com/anthropics/skills/pull/514)
Typographic quality control for AI-generated documents: orphan word wrap, widow paragraphs/stranded headers, and numbering misalignment. Positioned as fixing issues that affect "every document Claude generates." **Status: Open.**

**#6 — ODT skill (#486)** — [PR #486](https://github.com/anthropics/skills/pull/486)
OpenDocument Format support (`.odt`/`.ods`): creation, template filling, and ODT-to-HTML conversion, with triggers for "ODT", "ODS", "ODF", "LibreOffice", and ISO-standard document requests. **Status: Open.**

**#7 — pyxel retro game development skill (#525)** — [PR #525](https://github.com/anthropics/skills/pull/525)
Skill wrapping `pyxel-mcp`, an MCP server for the Pyxel retro/pixel-art game engine. Covers the write → run_and_capture → inspect → iterate workflow for 8-bit Python games. Updated 2026-07-15, showing continued activity. **Status: Open.**

**#8 — skill-quality-analyzer & skill-security-analyzer (#83)** — [PR #83](https://github.com/anthropics/skills/pull/83)
Two meta-skills for the `example-skills` marketplace: a quality analyzer scoring Structure & Documentation, and a security analyzer. Notable because it precedes — and partially anticipates — the trust-boundary concerns raised in [Issue #492](https://github.com/anthropics/skills/issues/492). **Status: Open.**

---

## 2. Community Demand Trends (from Issues)

**🔒 Security & trust boundary (highest engagement)**
[Issue #492](https://github.com/anthropics/skills/issues/492) (43 comments, 2 👍) is the single most-discussed item in the repo: community skills distributed under the `anthropic/` namespace impersonate official Anthropic skills, creating a trust-boundary vulnerability where users may grant elevated permissions. Related demand: [agent-governance skill proposal (#412)](https://github.com/anthropics/skills/issues/412) and [SharePoint Online security concerns (#1175)](https://github.com/anthropics/skills/issues/1175).

**🧰 Skill lifecycle management & distribution**
Strong demand for infrastructure rather than individual skills: [org-wide skill sharing in Claude.ai (#228)](https://github.com/anthropics/skills/issues/228) (16 comments, 8 👍 — highest 👍 count), [duplicate skills from overlapping plugins (#189)](https://github.com/anthropics/skills/issues/189) (9 👍), and [mysterious skill disappearance (#62)](https://github.com/anthropics/skills/issues/62).

**⚙️ Skill-authoring toolchain reliability**
[Issue #556](https://github.com/anthropics/skills/issues/556) (12 comments, 7 👍) — `run_eval.py` never triggers skills (0% trigger rate) — plus [the follow-up recall=0% report (#1169)](https://github.com/anthropics/skills/issues/1169) and [skill-creator best-practice critique (#202)](https://github.com/anthropics/skills/issues/202). The community's #1 pain point is that the official evaluator is broken, not that skills are hard to write.

**🧠 Agent memory & context efficiency**
[compact-memory skill proposal (#1329)](https://github.com/anthropics/skills/issues/1329) — symbolic notation for compact agent state in long-running sessions — and [claude-api skill injecting ~156k tokens (#1487)](https://github.com/anthropics/skills/issues/1487) show concern with context-window economics.

**✅ Quality gates**
[Reasoning Quality Gate Pipeline (#1385)](https://github.com/anthropics/skills/issues/1385) and the agent-governance proposal (#412) indicate appetite for explicit verification/safety stages before delivery.

---

## 3. High-Potential Pending Skills

These open PRs combine active discussion, recent updates, and clear community value — candidates to land soon:

| Skill | PR | Last Activity | Why It Stands Out |
|---|---|---|---|
| **ServiceNow platform** | [#568](https://github.com/anthropics/skills/pull/568) | 2026-08-12 | Most recently touched; broad enterprise coverage |
| **self-audit** | [#1367](https://github.com/anthropics/skills/pull/1367) | 2026-07-02 | v1.3.0 already; complements #1385 proposal |
| **plan-file-hygiene** | [#1479](https://github.com/anthropics/skills/pull/1479) | 2026-07-27 | Addresses #1417 (planning artifacts lifecycle gap); explicit community credit |
| **pyxel game dev** | [#525](https://github.com/anthropics/skills/pull/525) | 2026-07-15 | Author maintains the wrapped MCP; niche but concrete |
| **testing-patterns** | [#723](https://github.com/anthropics/skills/pull/723) | 2026-04-21 | Fills an obvious gap; high request frequency |
| **ODT** | [#486](https://github.com/anthropics/skills/pull/486) | 2026-04-14 | Complements existing docx/pdf skills; ISO-format niche |
| **document-typography** | [#514](https://github.com/anthropics/skills/pull/514) | 2026-03-13 | Universally applicable quality fix for all generated docs |

---

## 4. Skills Ecosystem Insight

The community's most concentrated demand is not for any single new domain skill, but for a **trustworthy and reliable skill development lifecycle** — working evaluation tooling, security/provenance controls on distributed skills, and org-level sharing infrastructure — i.e., the "skill supply chain" itself.

---

# Claude Code Community Digest — 2026-08-13

## Today's Highlights
Claude Code shipped v2.1.229 with support for `claude remote-control --continue`, server-supplied hooks for self-hosted runners, and SSE keepalive pings. Community attention is concentrated on false-positive safety blocks affecting approved organizations, Windows desktop crashes, and multi-agent coordination reliability. PR activity is light: only docs-focused pull requests were updated in the last 24 hours.

## Releases
- [v2.1.229](https://github.com/anthropics/claude-code/releases/tag/v2.1.229)
  - Documented `claude remote-control --continue` for resuming the most recent Remote Control session.
  - Added server-supplied Claude Code hook support for self-hosted runner sessions, matching managed-environment behavior.
  - Added SSE keepalive pings to gateway streaming responses.

## Hot Issues
Most active items from the top-30 issue set:

- [#84352](https://github.com/anthropics/claude-code/issues/84352) — CVP-approved Claude.ai organization still receives cyber safeguard blocks in Claude Code. 82 comments, 12 👍. Safety approval appears to have regressed to “Under review,” causing false-positive blocks for approved users.
- [#54393](https://github.com/anthropics/claude-code/issues/54393) — Post-mortem catalog of 12 multi-agent coordination bugs from a single autonomous overnight cycle. 27 comments. Relevant to anyone relying on long-running background agents.
- [#81698](https://github.com/anthropics/claude-code/issues/81698) — Windows desktop app GPU process crash (exit code 101457950) kills the entire app and all running sessions. 25 comments. Severe stability issue with session-loss implications.
- [#14061](https://github.com/anthropics/claude-code/issues/14061) — `/plugin update` does not invalidate the plugin cache. 25 comments, 31 👍. Community strongly affected by stale plugin behavior after updates.
- [#75899](https://github.com/anthropics/claude-code/issues/75899) — Left arrow accidentally navigates to the agents screen, is not rebindable, and breaks the main session view on return. 15 comments, 19 👍. TUI navigation regression with significant UX impact.
- [#24172](https://github.com/anthropics/claude-code/issues/24172) — Conversations disappear when closing VSCode or navigating away. 12 comments, 25 👍. Labeled high-priority; loss of chat history is unrecoverable.
- [#79366](https://github.com/anthropics/claude-code/issues/79366) — Worktree sessions reuse an existing worktree directory from a previous session instead of creating a fresh one. 11 comments. Isolation is broken, risking cross-session contamination.
- [#82162](https://github.com/anthropics/claude-code/issues/82162) — Opus 5.0 quality regression reports: poor output, failed delivery after retries. 9 comments. Related report [#82326](https://github.com/anthropics/claude-code/issues/82326) describes hallucinated responses not seen in previous versions.
- [#64158](https://github.com/anthropics/claude-code/issues/64158) — Advisor tool call crashes Claude Code with `Unsupported content type: server_tool_use`. 8 comments, 13 👍. Impacts VSCode/Linux users and halts sessions abruptly.
- [#61268](https://github.com/anthropics/claude-code/issues/61268) — `permissions.deny` rules not working on macOS. 5 comments. Security-relevant issue: deny rules are silently ineffective.

## Key PR Progress
Only 3 PRs were updated in the last 24 hours, so all are listed here:

- [#85925](https://github.com/anthropics/claude-code/pull/85925) — Docs: point remaining stale doc links at `code.claude.com`. Closed. Cleanup of old redirecting doc domains.
- [#85822](https://github.com/anthropics/claude-code/pull/85822) — Docs: fix stale doc links and README drift in plugins and examples. Closed. Verified all redirects and referenced files.
- [#41611](https://github.com/anthropics/claude-code/pull/41611) — “add the missing source to claude code.” Open since March 31; scope is unclear from title and no active discussion is visible.

## Feature Request Trends
- **Agent session lifecycle controls**: Users want to mark background agents as completed/dismiss them ([#66202](https://github.com/anthropics/claude-code/issues/66202)) and see clearer “needs input / sleeping” states ([#86082](https://github.com/anthropics/claude-code/issues/86082)).
- **Performance and terminal UX**: Reimplementing Claude Code in Rust was explicitly requested to reduce CPU spikes and terminal flickering ([#84192](https://github.com/anthropics/claude-code/issues/84192)).
- **Better desktop UI affordances**: Easier collapsing of thinking blocks and preserved scroll position ([#83418](https://github.com/anthropics/claude-code/issues/83418)).
- **Multi-agent coordination improvements**: The 12-bug post-mortem ([#54393](https://github.com/anthropics/claude-code/issues/54393)) points to demand for more robust autonomous-agent orchestration.

## Developer Pain Points
- **Windows desktop reliability**: Multiple crash and “Repair required” reports ([#81698](https://github.com/anthropics/claude-code/issues/81698), [#85199](https://github.com/anthropics/claude-code/issues/85199), [#84951](https://github.com/anthropics/claude-code/issues/84951)).
- **Session and conversation loss**: Conversations vanish in VSCode ([#24172](https://github.com/anthropics/claude-code/issues/24172)), worktrees are reused incorrectly ([#79366](https://github.com/anthropics/claude-code/issues/79366)), and cross-session messages render but never reach the runtime queue ([#86237](https://github.com/anthropics/claude-code/issues/86237)).
- **Prompt cache invalidation and cost spikes**: Background auto-updates invalidate session caches ([#86244](https://github.com/anthropics/claude-code/issues/86244)), `git status` changes force full re-caching ([#78720](https://github.com/anthropics/claude-code/issues/78720)), and advisor turns double-count usage ([#84738](https://github.com/anthropics/claude-code/issues/84738)).
- **Safety-filter false positives**: Legitimate coding tasks are increasingly flagged by “Fable 5” safeguards ([#86197](https://github.com/anthropics/claude-code/issues/86197), [#86241](https://github.com/anthropics/claude-code/issues/86241)), along with the CVP-approved org blocks ([#84352](https://github.com/anthropics/claude-code/issues/84352)).
- **Model quality regressions**: Opus 5 is perceived as less reliable, with reports of hallucinated or vague output ([#82162](https://github.com/anthropics/claude-code/issues/82162), [#82326](https://github.com/anthropics/claude-code/issues/82326), [#86205](https://github.com/anthropics/claude-code/issues/86205)).
- **Plugin/MCP ecosystem friction**: Stale plugin caches ([#14061](https://github.com/anthropics/claude-code/issues/14061)), unsupported MCP outputSchema dialects ([#86142](https://github.com/anthropics/claude-code/issues/86142)), and MCP servers killed/respawned mid-session ([#86040](https://github.com/anthropics/claude-code/issues/86040)).

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-08-13

## 1. Today's Highlights

The Codex repository saw no new tagged release in the past 24 hours, but a large batch of infrastructure-focused PRs landed around thread usage visibility, plugin metric collection, and app-server protocol improvements. Community attention remains concentrated on desktop performance issues — especially macOS `syspolicyd`/`trustd` CPU runaway and Windows process-polling storms — plus a rate-limit reset bug that is wasting users' paid resets.

## 2. Releases

No new versions published in the last 24 hours.

## 3. Hot Issues

- [Issue #25719](https://github.com/openai/codex/issues/25719) — **macOS Desktop triggers `syspolicyd`/`trustd` CPU and memory runaway**  
  The highest-engagement open issue, with 392 👍 and 83 comments. Codex Desktop on Apple Silicon can drive macOS security/trust daemons into a CPU/memory loop, making the machine unusable.

- [Issue #28969](https://github.com/openai/codex/issues/28969) — **Add setting to disable the 60-second auto-resolve for questions**  
  70 comments and 194 👍. Users want configurable control over how long permission prompts wait before resolving automatically, especially during long-running CLI tasks.

- [Issue #31606](https://github.com/openai/codex/issues/31606) — **Rate-limit reset failed, did not apply, and 1 reset was wasted**  
  56 comments, 65 👍. A costly billing/entitlement bug: users report spending a reset that never takes effect, which is understandably drawing strong frustration from Pro subscribers.

- [Issue #34260](https://github.com/openai/codex/issues/34260) — **Windows Desktop: unbounded `taskkill.exe`/`conhost.exe` cleanup storm exhausts WMI**  
  34 comments. Codex Desktop can enter an uncontrolled process-cleanup loop, leaving hundreds of `taskkill`/`conhost` processes alive and exhausting the WMI provider quota.

- [Issue #37002](https://github.com/openai/codex/issues/37002) — **Unable to install after clicking Update in the Codex app**  
  Closed with 28 comments. Several users hit a broken update flow, underscoring the risk of shipping forced updates without robust self-healing installers.

- [Issue #25453](https://github.com/openai/codex/issues/25453) — **Windows Codex Desktop spawns `powershell.exe` every second for process polling**  
  25 comments. Recurring high-CPU issue caused by repeated full-process polling; consistent with the broader Windows performance complaints.

- [Issue #25178](https://github.com/openai/codex/issues/25178) — **Windows Computer Use screenshot fails on Windows 10 via `SetIsBorderRequired`**  
  25 comments, 13 👍. Computer Use can control windows and read accessibility text, but any screenshot request fails with `0x80004002`, breaking visual grounding on Windows 10.

- [Issue #26990](https://github.com/openai/codex/issues/26990) — **Windows Desktop local state is not crash-safe after power loss**  
  14 comments. Pins, projects, and config can regress after a power loss, and timestamps can move into the future — a serious state-durability gap.

- [Issue #37487](https://github.com/openai/codex/issues/37487) — **Codex CLI sends empty tool descriptions to Azure Responses API**  
  7 comments. CLI 0.147.0 breaks tool-calling compatibility on Azure when tool descriptions are omitted, which can degrade model behavior in enterprise deployments.

- [Issue #38287](https://github.com/openai/codex/issues/38287) — **MCP tool results lose content when `structuredContent` is present**  
  2 comments but a sharp recent regression: MCP results are empty in Codex App 26.803.x, and the issue disappears on older builds. Important for anyone relying on MCP tool fidelity.

## 4. Key PR Progress

- [PR #38292](https://github.com/openai/codex/pull/38292) — **Add durable reverts for paginated threads**  
  Retains history before a selected turn by creating a new immutable rollout and atomically switching the thread's stored rollout path, preserving thread ID and session metadata across reverts.

- [PR #38288](https://github.com/openai/codex/pull/38288) — **Support gRPC code-mode hosts in app server**  
  Accepts root `http://`/`https://` URLs for `--code-mode-host` via the shared gRPC session provider, while keeping `ws://`/`wss://` on the existing WebSocket transport.

- [PR #38283](https://github.com/openai/codex/pull/38283) — **Collect plugin metrics from remote executors**  
  Resolves manifest-declared metric operations against the executor filesystem for remote plugin commands and creates measurement sidecars in executor-native, owner-private temp directories.

- [PR #38282](https://github.com/openai/codex/pull/38282) — **Add thread usage to TUI status surfaces**  
  Adds `thread-credits` and `estimated-thread-cost` to the configurable status line and terminal title for Enterprise workspaces.

- [PR #38281](https://github.com/openai/codex/pull/38281) — **Show estimated thread usage in `/status`**  
  Extends `account/usage/read` with optional `threadId` and returns a backward-compatible `threadUsage` object with credit, USD, model, reasoning, speed, and token breakdowns.

- [PR #38275](https://github.com/openai/codex/pull/38275) — **Unify turn input submission and routing**  
  Adds typed submission results for atomically starting a turn, steering an active turn, or declining input, exposed as `start_or_steer_turn`, `start_turn_if_idle`, and `steer_turn`.

- [PR #38274](https://github.com/openai/codex/pull/38274) — **Represent persisted world state as JSON objects**  
  Tightens world-state snapshots and merge patches so the persisted `state` field can only contain valid world-state shapes instead of arbitrary JSON values.

- [PR #38272](https://github.com/openai/codex/pull/38272) — **Stamp conversation history items with creation times**  
  Adds fractional Unix creation timestamps to locally authored user, developer, agent, and tool-output items when they enter durable conversation history.

- [PR #38270](https://github.com/openai/codex/pull/38270) — **Add per-thread usage queries to the backend client**  
  Adds `Client::get_thread_usage` for authoritative estimated credit and dollar usage per thread, including model/effort/token breakdowns across supported backend paths.

- [PR #38265](https://github.com/openai/codex/pull/38265) — **Use bounded fallback ports for Windows managed proxies**  
  Tries the configured HTTP/SOCKS5 proxy port first, then scans a preferred port range; HTTP and SOCKS5 listeners are reserved independently to avoid collision-driven failures.

## 5. Feature Request Trends

- **User interaction control**: Repeat requests to disable or lengthen auto-resolution of permission prompts, plus a request for configurable audible alerts on pending approvals.
- **Thread/workflow orchestration**: Demand for explicit cross-thread primitives, durable reverts, pagination-friendly thread operations, and more robust subagent/session recovery.
- **Usage and cost observability**: Strong push for per-thread credit/dollar estimates surfaced in both `/status` and TUI status lines.
- **Browser/Computer Use capability gaps**: File upload support in the in-app browser and reliable Windows Computer Use are recurring asks.
- **MCP and third-party model compatibility**: Preserving tool result content and supporting non-OpenAI endpoints remain important integration requirements.

## 6. Developer Pain Points

- **Desktop resource exhaustion**: macOS `syspolicyd`/`trustd` runaway and Windows `powershell.exe`/`taskkill.exe` polling loops make machines unusable in normal coding sessions.
- **Windows-specific instability**: Computer Use screenshot failures, `EPERM` after permission grant, WMI exhaustion, and non-crash-safe local state after power loss create a broad Windows reliability gap.
- **State, update, and billing bugs**: Update install failures, wasted rate-limit resets, and local config regressions erode user trust in paid workflows.
- **Context and process management**: Auto-compaction can miss large tool outputs and cause unrecoverable overflow; orphaned `rg` search processes can run indefinitely on network filesystems; `thread/resume` can drop turns on heavily compacted threads.
- **MCP integration regressions**: `structuredContent` results being dropped and namespace-wrapped MCP tools being ignored by non-OpenAI endpoints are the current sharpest MCP pain points.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-08-13

## Today's Highlights

A new `v0.56.0-nightly` release landed with eval tooling improvements, while the PR queue shows strong focus on security hardening and capacity-error retry behavior. Community attention remains on reliability issues: hangs, PTY crashes, and misleading subagent success states are the most common pain points. There is also growing pushback on the Antigravity migration, especially around token efficiency and lost developer features.

## Releases

### v0.56.0-nightly.20260813.g1ac337739

- [Feat/eval validate — PR #28344](https://github.com/google-gemini/gemini-cli/pull/28344)
- [feat(evals): add tool call formatter and integrate failure summaries — PR #28305](https://github.com/google-gemini/gemini-cli/pull/28305)
- [Changelog for v0.55.1 — PR #28779](https://github.com/google-gemini/gemini-cli/pull/28779)

No stable release was published in the last 24 hours; this is a nightly-only update.

## Hot Issues

1. [#26126 — Stuck at thinking](https://github.com/google-gemini/gemini-cli/issues/26126)  
   `p1`, `area/agent` · 18 comments · 11 👍  
   The CLI intermittently hangs forever on the “Thinking” state without output, error, or timeout. This is one of the most visible agent-reliability bugs right now.

2. [#22323 — Subagent recovery after MAX_TURNS is reported as GOAL success](https://github.com/google-gemini/gemini-cli/issues/22323)  
   `p1`, `area/agent` · 12 comments · 2 👍  
   A subagent can hit `MAX_TURNS`, do no real analysis, and still report `status: "success"` / `Termination Reason: "GOAL"`. This silently hides incomplete work and is a serious trust issue for subagent-based workflows.

3. [#27858 — Antigravity CLI is a massive downgrade from Gemini CLI](https://github.com/google-gemini/gemini-cli/issues/27858)  
   `p2`, `area/agent` · 4 comments · 13 👍  
   Developers complain that the Antigravity transition removes lightweight developer features like intelligent auto-edit and model routing. The high reaction count suggests broad community agreement.

4. [#25166 — Shell command stuck with “Waiting input” after command completes](https://github.com/google-gemini/gemini-cli/issues/25166)  
   `p1`, `area/core` · 4 comments · 3 👍  
   Even simple shell commands hang after completion, with the CLI still showing the command as active. This breaks automation and unattended runs.

5. [#27533 — Crash with `ioctl(2) failed, EBADF` in node-pty during `resizePty`](https://github.com/google-gemini/gemini-cli/issues/27533)  
   `p1`, `area/core` · 7 comments  
   Terminal resize in SSH environments crashes the CLI. Related reports like #27541 show the same `EBADF` failure also appears during `mkdir` and session interruption.

6. [#28575 — CLI crashes when `GEMINI_API_KEY` contains special characters](https://github.com/google-gemini/gemini-cli/issues/28575)  
   `p2`, `area/security` · 5 comments  
   Keys containing `=` or `+` trigger a parse error at startup. This is a surprising auth-handling failure that blocks entirely valid API keys.

7. [#27312 — Non-English characters appearing in CLI output](https://github.com/google-gemini/gemini-cli/issues/27312)  
   `p2`, `area/agent` · 6 comments · 1 👍  
   Users with English-language settings occasionally receive Chinese characters embedded in model output. The language switching appears non-deterministic.

8. [#21968 — Gemini does not use skills and sub-agents enough](https://github.com/google-gemini/gemini-cli/issues/21968)  
   `p2`, `area/agent` · 6 comments  
   Custom skills and subagents are almost never used autonomously unless explicitly requested. This weakens the value of user-configured agent tooling.

9. [#21983 — Browser subagent fails on Wayland](https://github.com/google-gemini/gemini-cli/issues/21983)  
   `p1`, `area/agent` · 4 comments · 1 👍  
   The browser subagent terminates immediately on Wayland sessions, making browser automation unusable for many Linux users.

10. [#24246 — 400 error with too many tools enabled](https://github.com/google-gemini/gemini-cli/issues/24246)  
    `p2`, `area/agent` · 3 comments  
    Enabling a large number of tools causes a model API 400 error. Users expect the agent to scope tools dynamically instead of sending everything.

## Key PR Progress

1. [#28790 — Context-aware silent retries and availability TTL for capacity errors](https://github.com/google-gemini/gemini-cli/pull/28790)  
   Addresses the critical capacity-exhaustion retry regression in #28761. Adds backoff and silent retries for unattended/non-interactive runs.

2. [#28691 — Block `$VAR` and `${VAR}` variable expansion bypass](https://github.com/google-gemini/gemini-cli/pull/28691)  
   Security hardening for GHSA-wpqr-6v78-jr5g. Closes an incomplete check that allowed `bash`/PowerShell variable expansion to bypass the command-substitution security gate.

3. [#28699 — A2A server: enforce authentication and stop checkpoint path traversal](https://github.com/google-gemini/gemini-cli/pull/28699)  
   Custom A2A REST routes were registered without auth and allowed checkpoint path traversal. This fixes both credential enforcement and filesystem isolation.

4. [#28586 — Preserve `thoughtSignature` in functionCall parts](https://github.com/google-gemini/gemini-cli/pull/28586)  
   Fixes a 400 Bad Request regression introduced in v0.53.0 during parallel tool calls. The fix restores the stripped `thoughtSignature` field.

5. [#28581 — Skip diff hunk markers during `@` processing](https://github.com/google-gemini/gemini-cli/pull/28581)  
   Prevents unified/combined diff hunk markers like `@@ ... @@` from being treated as `@file` references. This removes expensive workspace-wide glob searches and avoids heap growth on large diff prompts.

6. [#28794 — Prevent fail-open and data loss on corrupt MCP enablement config](https://github.com/google-gemini/gemini-cli/pull/28794)  
   Fixes #28786. Invalid JSON in `mcp-server-enablement.json` was previously treated as empty, re-enabling all MCP servers and risking destructive config rewrites.

7. [#28787 — Don't treat corrupt MCP enablement config as empty](https://github.com/google-gemini/gemini-cli/pull/28787)  
   Companion fix to #28794. Ensures JSON parse failures are not conflated with “file does not exist,” preventing default-enable behavior.

8. [#28789 — Fix vscode-ide-companion `stop()` hang and keep-alive threshold](https://github.com/google-gemini/gemini-cli/pull/28789)  
   Fixes an indefinite hang when streaming MCP sessions are open during shutdown and corrects the keep-alive failure threshold for ping loops.

9. [#28788 — Behavioral evals for skills activation and web fetch](https://github.com/google-gemini/gemini-cli/pull/28788)  
   Adds behavioral evaluation coverage for `activate_skill` and `web_fetch`, plus Windows compatibility improvements for the local eval environment.

10. [#28701 — Fix `TRUST_PARENT` rule precedence in folder-trust resolution](https://github.com/google-gemini/gemini-cli/pull/28701)  
    Ensures the most specific configured trust rule wins via “longest match,” fixing precedence edge cases in `LoadedTrustedFolders.isPathTrusted()`.

## Feature Request Trends

- **More AST-aware code access**  
  Users want AST-aware file reads, search, and codebase mapping to reduce token noise and improve navigation precision.  
  → [#22745](https://github.com/google-gemini/gemini-cli/issues/22745)

- **Surgical, token-efficient execution**  
  VPS and power users are requesting lower token consumption and fewer scattered temporary scripts.  
  → [#27567](https://github.com/google-gemini/gemini-cli/issues/27567), [#23571](https://github.com/google-gemini/gemini-cli/issues/23571)

- **Better autonomous use of skills/subagents**  
  Users expect the CLI to invoke custom skills and subagents proactively, not only when explicitly told to do so.  
  → [#21968](https://github.com/google-gemini/gemini-cli/issues/21968)

- **Safer agent behavior**  
  Requests include preventing destructive git/database operations and respecting permission/config overrides.  
  → [#22672](https://github.com/google-gemini/gemini-cli/issues/22672), [#22093](https://github.com/google-gemini/gemini-cli/issues/22093), [#22267](https://github.com/google-gemini/gemini-cli/issues/22267)

- **Resilient browser automation**  
  Browser agent needs automatic session takeover, lock recovery, Wayland support, and proper `settings.json` handling.  
  → [#22232](https://github.com/google-gemini/gemini-cli/issues/22232), [#21983](https://github.com/google-gemini/gemini-cli/issues/21983)

- **Stronger eval infrastructure**  
  Continued demand for component-level and behavioral evals to catch regressions before release.  
  → [#24353](https://github.com/google-gemini/gemini-cli/issues/24353)

## Developer Pain Points

- **Intermittent hangs and no timeouts**  
  The CLI frequently gets stuck on “Thinking,” waits for shell input, or hangs during shutdown.  
  → [#26126](https://github.com/google-gemini/gemini-cli/issues/26126), [#25166](https://github.com/google-gemini/gemini-cli/issues/25166), [#22186](https://github.com/google-gemini/gemini-cli/issues/22186)

- **Terminal/PTY instability**  
  `EBADF`, `ioctl` failures, and stack-overflow crashes are common in SSH, resize, and terminal-glitch scenarios.  
  → [#27533](https://github.com/google-gemini/gemini-cli/issues/27533), [#27541](https://github.com/google-gemini/gemini-cli/issues/27541), [#27539](https://github.com/google-gemini/gemini-cli/issues/27539)

- **False success and silent failures**  
  Subagents report `GOAL` success even after hitting limits, and browser agents fail without useful diagnostics.  
  → [#22323](https://github.com/google-gemini/gemini-cli/issues/22323), [#21983](https://github.com/google-gemini/gemini-cli/issues/21983)

- **Permission/config surprises**  
  Subagents running despite being disabled, browser agent ignoring `settings.json`, and MCP config corruption causing fail-open behavior are recurring trust-breaking bugs.  
  → [#22093](https://github.com/google-gemini/gemini-cli/issues/22093), [#22267](https://github.com/google-gemini/gemini-cli/issues/22267), [#28794](https://github.com/google-gemini/gemini-cli/pull/28794)

- **Regression anxiety around Antigravity migration**  
  Users report higher token consumption and lost developer-focused behaviors after the transition, creating hesitation about upgrading.  
  → [#27858](https://github.com/google-gemini/gemini-cli/issues/27858), [#27567](https://github.com/google-gemini/gemini-cli/issues/27567)

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

## GitHub Copilot CLI Community Digest — 2026-08-13

### Today’s Highlights
No new CLI releases landed in the past 24 hours, but issue activity was heavy, especially around MCP lifecycle/auth reliability and model-selection overrides. The most community-supported open thread remains **#1305** (CIMD support for remote OAuth MCP servers, 👍35), while several newly triaged issues document resource leaks and auth failures that are likely to draw maintainer attention soon.

### Releases
No new releases in the last 24 hours.

### Hot Issues
1. **#1305 — [area:authentication, area:mcp] Support CIMD for Remote OAuth MCP Servers**  
   https://github.com/github/copilot-cli/issues/1305  
   Long-running feature request asking for Client-Initiated Backchannel Authentication (CIMD) support for OAuth-protected remote MCP servers. With 35 👍 and ongoing discussion, this is one of the most requested MCP/auth enhancements.

2. **#1730 — [area:plugins] sessionStart hook in .github/hooks/ does not fire in Copilot CLI (v0.0.420)**  
   https://github.com/github/copilot-cli/issues/1730  
   Open since February; hooks configured via `.github/hooks/*.json` never execute at session start. High comment count (8) suggests several users may be affected by plugin/hook lifecycle inconsistencies.

3. **#4390 — Enabled organization models missing from catalogue (Claude Sonnet 5/Opus 5 and Kimi K3)**  
   https://github.com/github/copilot-cli/issues/4390  
   Models explicitly enabled by Copilot Business admins are absent from CLI’s model catalogue, with Anthropic models reported as “disabled.” Important for enterprise users relying on org-level model policy.

4. **#4328 — [area:input-keyboard, area:platform-windows] Ctrl+H misinterpreted as Ctrl+Backspace under WSL2**  
   https://github.com/github/copilot-cli/issues/4328  
   WSL2 input handling regression caused by WT_SESSION leaking from Windows Terminal. This affects core editing behavior and has drawn multiple confirmations in comments.

5. **#2109 — ACP: support an ask_user / ask_question style extension method**  
   https://github.com/github/copilot-cli/issues/2109  
   Developers want ACP extensions to ask users clarifying questions and return structured answers. Currently only `session/request_permission` exists, which is insufficient for richer agent–user interactions.

6. **#3976 — [area:tools] native `tgrep` indexer OOM-kills the host on large monorepos**  
   https://github.com/github/copilot-cli/issues/3976  
   The native `tgrep` trigram indexer can exhaust memory when indexing large monorepos, with no upper bound or memory cap. Critical for teams using the `copilot_cli_tgrep` experiment.

7. **#4432 — [triage] rubber-duck: model-emitted `model` argument silently overrides the complementary strategy and the user's /subagents setting**  
   https://github.com/github/copilot-cli/issues/4432  
   The cross-family review subagent can have its model selection bypassed by a `model` argument emitted through the `task` tool, undermining the intended complementary-model behavior.

8. **#4346 — [area:authentication, area:non-interactive, area:mcp] MCP registry policy fetch returns 403 for Actions GITHUB_TOKEN**  
   https://github.com/github/copilot-cli/issues/4346  
   Closed, but significant for CI users: the documented PAT-less GitHub Actions setup cannot fetch MCP registry policy, blocking all non-default MCP servers in workflows.

9. **#4468 — [triage] `--server --stdio` never releases a session’s extension-host processes; they accumulate at 4 per session until the server exits**  
   https://github.com/github/copilot-cli/issues/4468  
   A clear resource leak in long-lived server mode: every session spawns four extension-host processes that are never terminated, causing unbounded growth.

10. **#4466 — [triage] Remote MCP: transient 5xx (e.g. 502) on `initialize` marks server failed for the whole session with no retry/backoff**  
    https://github.com/github/copilot-cli/issues/4466  
    A single transient 502 during MCP initialization permanently disables the server for the session. No retry or backoff means otherwise flaky infrastructure breaks the whole workflow.

### Key PR Progress
Only 2 PRs were updated in the last 24 hours, so this section is limited to those:

1. **#4449 [OPEN] — Migrate pull request automation away from pull_request_target**  
   https://github.com/github/copilot-cli/pull/4449  
   Moves invalid-label automation off `pull_request_target`, keeping issue/PR closure behavior intact. Uses issue-scoped write tokens for invalid issues and a no-permission `pull_request` signal for mergeable-PR handling.

2. **#4453 [CLOSED] — Julesdemangeot ship it patch 1**  
   https://github.com/github/copilot-cli/pull/4453  
   No description provided; the PR was opened and closed within the update window, likely an automated or placeholder patch.

### Feature Request Trends
- **MCP lifecycle and auth hardening:** Remote MCP servers need better OAuth support (CIMD, silent refresh fixes), retry/backoff on transient failures, and deterministic cleanup of spawned processes/containers.
- **Transparent model selection:** Users want full visibility and control over model choices — including BYOK `/models` browsing, respecting subagent model overrides, and preventing silent downgrades or strategy bypasses.
- **Richer ACP extension methods:** There is continued demand for interactive extension capabilities such as `ask_user`/`ask_question`, beyond the current permission-request primitive.
- **Durable long-session context:** Repeated compactions lose early context, prompting requests to preserve durable decisions across compactions and avoid session/event-store exhaustion in long-running agent sessions.

### Developer Pain Points
- **Silent config overrides:** Subagent model settings are frequently ignored, downgraded, or overridden (e.g., code-review model, `rubber-duck` complementary strategy, task-tool multiplier guard). This erodes trust in configuration.
- **MCP auth/network flakiness:** Entra refresh-token scope bugs, Windows socket error 10013, and hard-failure on transient 5xx responses make remote MCP servers unreliable in production.
- **Resource leaks:** Extension-host processes accumulate in server mode, Docker-based MCP containers stay alive after session close, and `tgrep` can OOM hosts. These are high-impact for long-lived or monorepo-heavy workflows.
- **Terminal/input regressions:** Ctrl+H mishandling under WSL2, blank transcript on `/resume`, and stuck queued messages point to ongoing interactivity and rendering pains.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-08-13

## Today's Highlights

Kimi Code CLI saw no new releases in the last 24 hours. The strongest signal is renewed activity on issue #1283, a long-running feature request for a persistent memory system with 36 comments and an update today. In parallel, two bug-fix PRs from Ricardo-M-L are in review, targeting newline handling in string shortening and BrokenPipeError resilience in the web session runner.

## Releases

No new releases were published in the last 24 hours.

## Hot Issues

Only one issue was updated in the last 24 hours, so it is the clear focus of community attention.

- **[#1283 [enhancement] Memory System — Persistent context across sessions](https://github.com/MoonshotAI/kimi-cli/issues/1283)**  
  Open, created 2026-02-27, updated 2026-08-13, 36 comments.  
  This issue requests a comprehensive memory system so Kimi Code CLI can retain project context, patterns, and user preferences across sessions. It distinguishes between automatic memory (AI-managed notes) and manual memory (user-defined instructions). The long comment thread and recent update suggest active community demand for durable context handling, though it currently has no 👍 reactions.

## Key PR Progress

Two PRs were updated in the last 24 hours; both are still open.

- **[#2449 fix(string): strip newlines in shorten_middle before the length check](https://github.com/MoonshotAI/kimi-cli/pull/2449)**  
  Open, updated 2026-08-12.  
  Fixes an early-return bug in `shorten_middle` where short input could skip newline removal, causing `extract_key_argument` to render multiline summaries where a single-line result is expected. This is a small but user-visible correctness fix for tool-call output formatting.

- **[#2324 fix(web): handle BrokenPipeError in SessionProcess.send_message](https://github.com/MoonshotAI/kimi-cli/pull/2324)**  
  Open, updated 2026-08-12.  
  Guards against subprocess exit between `start()` and writing to `stdin` in `src/kimi_cli/web/runner/process.py`. This addresses a real reliability issue in the web runner, where a dead process could cause an unhandled `BrokenPipeError` during message sending.

No other PRs were updated in this window.

## Feature Request Trends

With only one issue updated in the last 24 hours, the dominant feature direction is clear: **persistent memory and cross-session context**. Developers want Kimi Code CLI to remember project patterns, user preferences, and relevant context automatically or via user-defined instructions. The active discussion around issue #1283 suggests this is a high-priority gap in the current CLI experience.

## Developer Pain Points

Recurring frustrations visible in the current data:

- **Loss of context across sessions** — the central pain point behind the memory system request.
- **Multiline arguments rendered as single-line summaries** — newlines are not consistently stripped before length checks in tool-call display.
- **Web session process instability** — subprocess lifecycle races can cause `BrokenPipeError` when sending messages, indicating the web runner needs stronger error handling around stdin writes.

These indicators point toward a need for more resilient process management and better state preservation between sessions.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-08-13

## Today’s Highlights

OpenCode shipped two patch releases (**v1.18.17** and **v1.18.18**) with focused fixes for Kimi/Moonshot system-prompt selection, xAI high reasoning effort, session compaction, MERGE gateway variants, and retry backoff/jitter. Community attention remains concentrated on Gemini 3 Pro function-calling failures, MCP tool visibility, and the strongly requested “reload configuration without restart” command. Contributor PRs also landed to improve TUI polish, MCP local-server retries, SSE memory handling, and permission wildcard semantics.

## Releases

### [v1.18.18](https://github.com/anomalyco/opencode/releases/tag/v1.18.18)
- Correctly select the Kimi system prompt for official Moonshot and Kimi providers.
- Fix `xhigh` reasoning effort for xAI models.

### [v1.18.17](https://github.com/anomalyco/opencode/releases/tag/v1.18.17)
- Session compaction now keeps complete recent turns and produces clearer summaries for smaller models.
- Added MERGE Gateway reasoning variants so those model options work correctly.
- Capped automatic session retries and added jitter to avoid repeated retry storms.

## Hot Issues

- [Issue #4832](https://github.com/anomalyco/opencode/issues/4832) — **Gemini 3 Pro function calling fails: missing `thoughtSignature` support**  
  Long-running, now-closed issue with 35 comments and 14 👍. Any Gemini 3 Pro tool-use request could fail outright; high community visibility.

- [Issue #41470](https://github.com/anomalyco/opencode/issues/41470) — **“Copied to clipboard” doesn’t work**  
  In VSCode Server/Docker environments, copy actions report success but the system clipboard never changes. Important for remote development workflows.

- [Issue #3366](https://github.com/anomalyco/opencode/issues/3366) — **Mermaid rendering in chat**  
  A closed discussion with 26 👍 and 10 comments. Users want Mermaid diagrams rendered inline in the chat UI.

- [Issue #6815](https://github.com/anomalyco/opencode/issues/6815) — **Add command palette action to reload configuration without restart**  
  One of the strongest signals this week: 88 👍. Editing `opencode.json` or `AGENTS.md` currently requires a manual restart.

- [Issue #33027](https://github.com/anomalyco/opencode/issues/33027) — **MCP tools connected but not exposed to agent**  
  An MCP server connects and lists tools, but the agent never sees them. Critical for MCP ecosystem trust and debugging.

- [Issue #32571](https://github.com/anomalyco/opencode/issues/32571) — **Error: Unexpected error “disk I/O error”**  
  Users hitting opaque disk I/O failures during `opencode --log-level DEBUG debug config`; needs better error reporting.

- [Issue #17073](https://github.com/anomalyco/opencode/issues/17073) — **Protect `.env` files in grep/glob results, not just direct read**  
  Permission rules match the search pattern rather than the matched file path, so `.env` files can leak through `grep`/`glob`.

- [Issue #42147](https://github.com/anomalyco/opencode/issues/42147) — **Azure OpenAI large models hang in OpenCode**  
  `gpt-5.6-luna`, `gpt-5.6-sol`, `gpt-5.4`, and `o3` hang indefinitely on the Responses API, while smaller models work.

- [Issue #42043](https://github.com/anomalyco/opencode/issues/42043) — **Can’t compact or use subagents with free models**  
  Free-model sessions work, but compaction or subagent triggers “Free usage exceeded, subscribe to Go” even in a valid session.

- [Issue #42216](https://github.com/anomalyco/opencode/issues/42216) — **Cyclic symlinks in global skills cause blank TUI and unbounded memory growth**  
  A recursion bug in skill discovery caused ~7.3 GB memory growth on macOS. Serious reliability/security edge case.

## Key PR Progress

- [PR #42223](https://github.com/anomalyco/opencode/pull/42223) — **fix(tui): correct working directory when continuing session in a new directory**  
  Fixes `opencode -c` resuming an old directory when no prior session exists in the current directory.

- [PR #38314](https://github.com/anomalyco/opencode/pull/38314) — **fix(core): reject invalid UTF-8 directory paths in serve**  
  Prevents sessions with malformed replacement-character paths from corrupting `opencode serve`.

- [PR #42020](https://github.com/anomalyco/opencode/pull/42020) — **fix(mcp): retry local server connection on transient spawn failures**  
  Addresses race conditions when MCP servers spawn in parallel; retries transient startup failures.

- [PR #42218](https://github.com/anomalyco/opencode/pull/42218) — **fix(core): refresh fallback file search**  
  Invalidates the ripgrep fallback index when the project filesystem changes, so newly created files appear without a daemon restart.

- [PR #42214](https://github.com/anomalyco/opencode/pull/42214) — **feat(tui): highlight shell tool commands**  
  Adds Bash syntax highlighting to the shell-tool command input and expanded output, using the active TUI syntax theme.

- [PR #42209](https://github.com/anomalyco/opencode/pull/42209) — **fix(client): cancel SSE readers after handshake**  
  Reduces native memory growth when long-lived Promise SSE subscriptions reconnect or are cancelled.

- [PR #42158](https://github.com/anomalyco/opencode/pull/42158) — **fix(opencode): bridge question tool to ACP elicitation**  
  Fixes the `question` tool blocking indefinitely in ACP mode by correctly passing the QuestionV2 request ID to reply/reject.

- [PR #42185](https://github.com/anomalyco/opencode/pull/42185) — **fix(client): prevent stale service replacement**  
  Old CLI/Desktop clients can no longer replace a newer managed background service after an update.

- [PR #42206](https://github.com/anomalyco/opencode/pull/42206) — **fix(tui): omit implicit cd autocomplete prefix**  
  Cleans up `/cd` autocomplete entries by removing unnecessary `./` prefixes while preserving explicit `../`, `~/`, and absolute paths.

- [PR #28689](https://github.com/anomalyco/opencode/pull/28689) — **fix(permission): make `*` not match `/` in wildcard patterns, add `**` globstar support**  
  Critical permission fix: deny rules like `"*.env"` now actually block paths such as `src/.env` instead of being bypassed.

## Feature Request Trends

- **Configuration reload & developer ergonomics**  
  Users strongly want to reload configuration without restarting the CLI/desktop app ([#6815](https://github.com/anomalyco/opencode/issues/6815)).

- **Richer chat/TUI rendering**  
  Mermaid diagram rendering in chat ([#3366](https://github.com/anomalyco/opencode/issues/3366)) and shell-syntax highlighting in tool output are both high-visibility UI directions.

- **Security and permission granularity**  
  Requests focus on protecting secrets in search results ([#17073](https://github.com/anomalyco/opencode/issues/17073)), proper wildcard/globstar semantics ([#28689](https://github.com/anomalyco/opencode/pull/28689)), and per-MCP-server trust/TLS configuration ([#40111](https://github.com/anomalyco/opencode/issues/40111)).

- **Provider and model flexibility**  
  Users want custom providers to alias official Models.dev definitions ([#30519](https://github.com/anomalyco/opencode/issues/30519)), plus correct provider-specific prompts for MiniMax ([#41031](https://github.com/anomalyco/opencode/issues/41031)).

- **Voice/desktop interaction**  
  Desktop voice input and optional voice summaries remain a requested UX enhancement ([#41364](https://github.com/anomalyco/opencode/issues/41364)).

## Developer Pain Points

- **Subscription/billing desync**  
  Multiple reports of “Free usage exceeded” after purchasing OpenCode Go, plus regional model restrictions and insufficient-balance errors ([#42132](https://github.com/anomalyco/opencode/issues/42132), [#42140](https://github.com/anomalyco/opencode/issues/42140), [#42154](https://github.com/anomalyco/opencode/issues/42154), [#42114](https://github.com/anomalyco/opencode/issues/42114)).

- **Provider streaming and multi-turn fragility**  
  Azure large models hang ([#42147](https://github.com/anomalyco/opencode/issues/42147)), Deepseek v4 multi-turn fails through the Go endpoint ([#42135](https://github.com/anomalyco/opencode/issues/42135)), and Gemini 3 Pro function calling requires `thoughtSignature` support ([#4832](https://github.com/anomalyco/opencode/issues/4832)).

- **MCP integration friction**  
  Tools that connect but never reach the agent ([#33027](https://github.com/anomalyco/opencode/issues/33027)), local-server spawn races ([#42020](https://github.com/anomalyco/opencode/pull/42020)), and missing per-server trust controls ([#40111](https://github.com/anomalyco/opencode/issues/40111)).

- **Environment-specific CLI/TUI bugs**  
  Clipboard failures in Docker/VSCode Server ([#41470](https://github.com/anomalyco/opencode/issues/41470)), wrong working directory with `opencode -c` ([#42221](https://github.com/anomalyco/opencode/issues/42221)), and project-folder ambiguity ([#42040](https://github.com/anomalyco/opencode/issues/42040)).

- **Resource and edge-case failures**  
  Cyclic symlinks causing blank TUI and 7.3 GB memory growth ([#42216](https://github.com/anomalyco/opencode/issues/42216)), opaque disk I/O errors ([#32571](https://github.com/anomalyco/opencode/issues/32571)), and SSE-level native memory growth ([#42209](https://github.com/anomalyco/opencode/pull/42209)).

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

## Pi Community Digest — 2026-08-13

### Today's Highlights

The Pi repo saw no new releases in the last 24 hours, but development activity remained high around context reliability, TUI/terminal polish, and local model integrations. The most-discussed issue continues to be auto-compaction not triggering until the provider overflows (#6879), while new PRs landed for transactional session persistence (#8052), preserving usage in streaming events (#7982), and local Ollama model support (#8049). Multiple TUI-related PRs also progressed, including mouse event dispatch to components and “scrolled up” transcript indicators.

### Releases

No releases in the last 24 hours.

### Hot Issues

- [#6879 — [bug] auto-compaction never triggers after context grows past 100% until provider overflow](https://github.com/earendil-works/pi/issues/6879)  
  A long agentic run exceeded 100% context and only compacted after the API rejected the request at 373k tokens. High engagement: 18 comments, 17 👍. The community is pushing for post-agent-turn compaction checks.

- [#7730 — [bug] High CPU usage on Mac OS with long session](https://github.com/earendil-works/pi/issues/7730)  
  Users report 50–110% CPU and 600–800MB memory in long Pi sessions, apparently correlated with context/session length. 11 comments, 8 👍.

- [#7836 — [inprogress] Edit fuzzy match misses lines with differences in whitespace length](https://github.com/earendil-works/pi/issues/7836)  
  `normalizeForFuzzyMatch` doesn’t collapse whitespace, causing edit failures despite identical content. This is especially painful for small models. 10 comments.

- [#8000 — @ file autocomplete: direct children lose to deep nested matches on basename ties](https://github.com/earendil-works/pi/issues/8000)  
  Scoped `@` autocomplete ranks deep nested files above direct children with matching basenames, making the obvious choice hard to reach.

- [#8055 — tui: Ambiguous-width chars counted as 1 col, break table alignment on CJK terminals](https://github.com/earendil-works/pi/issues/8055)  
  Characters like `① ± … €` render 2 columns on CJK terminals but are counted as 1, misaligning TUI tables. Important for East Asian users.

- [#8018 — DeepSeek provider: max_completion_tokens silently ignored; max_tokens should be used](https://github.com/earendil-works/pi/issues/8018)  
  Pi sends `max_completion_tokens` to DeepSeek, which only documents `max_tokens`, so output length limits are never enforced.

- [#7805 — [inprogress] Root .md documentation files in settings-configured skill directories are loaded as skills](https://github.com/earendil-works/pi/issues/7805)  
  `README.md`, `AGENTS.md`, and `CLAUDE.md` at skill directory roots get misidentified as skills and produce validation warnings.

- [#8047 — Pi Server tests fail to bind Unix sockets on Windows](https://github.com/earendil-works/pi/issues/8047)  
  Windows 11 fails 31 tests because Unix transport tests try to bind filesystem sockets with `listen EACCES`.

- [#7724 — Cold restore replays an overflow assistant removed by live recovery](https://github.com/earendil-works/pi/issues/7724)  
  After context overflow recovery, reopening the session re-adds the failed/truncated assistant response to model history, corrupting the transcript.

- [#8041 — coding-agent: Render mermaid and LaTex in HTML exports to match TUI](https://github.com/earendil-works/pi/issues/8041)  
  HTML exports skip TUI-style Mermaid/LaTeX rendering, leaving diagrams as raw source. Follow-up to earlier export work in #7956.

### Key PR Progress

- [#8052 — fix(coding-agent): make session persistence transactional](https://github.com/earendil-works/pi/pull/8052)  
  Prevents broken session graphs when JSONL append fails, e.g. on `ENOSPC`. Important reliability fix.

- [#7982 — fix(coding-agent): preserve usage in streaming events](https://github.com/earendil-works/pi/pull/7982)  
  Restores cumulative provider usage on `message_update` events without regrowing the stream payload. Closes #7911.

- [#8049 — feat: use local Ollama models in pi via a local model proxy](https://github.com/earendil-works/pi/pull/8049)  
  Adds dependency-free Node.js scripts to proxy local Ollama models into Pi on Ubuntu, macOS, and Windows.

- [#8044 — fix(bedrock): expose safe stream failure diagnostics](https://github.com/earendil-works/pi/pull/8044)  
  Improves Bedrock failure classification and keeps tool-call metadata intact through `streamProxy`.

- [#8042 — feat(ai): add Grok 4.6](https://github.com/earendil-works/pi/pull/8042)  
  Adds Grok 4.6 to xAI Responses models with `low`/`medium`/`high`/`xhigh` reasoning-effort support.

- [#8037 — feat(tui): dispatch mouse events to components via onMouse](https://github.com/earendil-works/pi/pull/8037)  
  Implements the `Component.onMouse` hook proposed in #7683 so extension widgets can handle mouse input in fullscreen TUI.

- [#8022 — fix: triggerTurn: false should not start turn](https://github.com/earendil-works/pi/pull/8022)  
  Fixes custom display messages from `agent_end` unintentionally starting a new assistant turn. Addresses #7783.

- [#8012 — fix: dont load root mds as skills in settings](https://github.com/earendil-works/pi/pull/8012)  
  Prevents root-level markdown files in skill directories from being treated as malformed skills. Addresses #7805.

- [#5262 — feat(ai): add Anthropic Vertex provider](https://github.com/earendil-works/pi/pull/5262)  
  Adds built-in `anthropic-vertex` support for Claude on Google Cloud Vertex AI, reusing the existing Anthropic streaming path.

- [#7956 — feat(coding-agent): render Mermaid diagrams in HTML exports](https://github.com/earendil-works/pi/pull/7956)  
  Reuses ANSI-to-HTML rendering so Mermaid diagrams appear rendered in exports, with a header toggle.

### Feature Request Trends

- **Local/alternative model support**: Ollama proxy (#8049, #8050), showing all llama.cpp models (#8051), and Scaleway as an EU-hosted provider (#6165).
- **TUI/terminal extensibility**: Component-level mouse events (#7683), configurable scroll step (#7765), and better rendering for ambiguous-width chars (#8055).
- **HTML export parity**: Render Mermaid and LaTeX in exports to match the TUI (#8041, #7956).
- **Extension API growth**: Hooks to withhold/replace displayed assistant messages (#8035) and async durable custom-message publication (#8023).
- **Provider compatibility**: DeepSeek token-field handling (#8018), xAI/Grok model additions (#8042), and Anthropic Vertex (#5262).

### Developer Pain Points

- **Context overflow handling is fragile**: Compaction doesn’t trigger early enough (#6879), and cold restore can replay removed failed turns (#7724).
- **Edit tool matching is too strict**: Whitespace differences break fuzzy matches, causing avoidable tool failures (#7836, #7835).
- **Cross-platform inconsistencies**: Windows Unix socket test failures (#8047), WSL file URI issues (#8054), and high CPU usage on macOS (#7730).
- **Provider API quirks**: DeepSeek silently ignoring `max_completion_tokens` (#8018) and proxies rejecting OpenAI SDK metadata headers (#3207) require extra compatibility layers.
- **Session/wire regressions**: Delta-only streaming updates dropped usage data (#7911, fixed in #7982), and non-transactional persistence can corrupt session graphs (#8052).
- **Configuration/skill discovery friction**: Root markdown files becoming “skills” (#7805) and settings.json losing its final newline (#8009) create avoidable user-visible noise.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-08-13

## Today's Highlights

Qwen Code shipped two desktop releases: `desktop-v0.2.0` and `desktop-v0.2.1`, focused on Web Shell stability, session-sharing improvements, and workspace-scoped memory defaults. On the development side, Web Shell continues to expand with dynamic workflow visualization, file uploads, and a tmux-backed interactive terminal, while core fixes target session-restore reliability, tool-output truncation, and headless/auth regressions.

## Releases

### desktop-v0.2.1
- `refactor(serve): default project memory to workspace scope` — [PR #8856](https://github.com/QwenLM/qwen-code/pull/8856)
- `feat(telemetry): align session lifecycle` — session telemetry now follows lifecycle boundaries more consistently.

### desktop-v0.2.0
- `fix(web-shell): stabilize transcript history pagination` — [PR #8914](https://github.com/QwenLM/qwen-code/pull/8914)
- `feat(web-shell): Share session catalog sc...` — session catalog sharing support for Web Shell deployments.

## Hot Issues

- [Issue #7040 — RFC: Reliable auto-memory recall — timing, quality, and telemetry](https://github.com/QwenLM/qwen-code/issues/7040)  
  The highest-discussion issue today (10 comments). It tracks phased delivery of deterministic memory recall, with recall-delivery telemetry already merged and precision/multilingual evaluation still under review.

- [Issue #8963 — Cannot automatically run long tasks](https://github.com/QwenLM/qwen-code/issues/8963)  
  Users report that Python and shell commands hang indefinitely in auto/yolo modes. The reporter explicitly compares Kimi Code favorably, signaling that long-running task support is a competitive pain point.

- [Issue #8957 — [Regression] Qwen code crashes on image load since 0.21.2](https://github.com/QwenLM/qwen-code/issues/8957)  
  A reported regression where reading images crashes Qwen Code after 0.21.1. This is a blocker for image-input workflows.

- [Issue #8678 — fix(serve): Preserve the current session when a large restore times out](https://github.com/QwenLM/qwen-code/issues/8678)  
  A P1 session-management issue. A merged PR (#8691) introduced a configurable restore timeout contract; follow-up work is still needed to fully preserve session state.

- [Issue #8097 — Background agent coordination gap: duplicate work, premature completion, and non-interactive send_message](https://github.com/QwenLM/qwen-code/issues/8097)  
  Community-reported multi-agent bug where background Explore agents duplicate work and complete prematurely when `send_message` is used mid-flight.

- [Issue #9005 — The Anthropic wire is missing stream-safety protections the OpenAI wire already has](https://github.com/QwenLM/qwen-code/issues/9005)  
  P1 core reliability gap. The Anthropic content generator lacks stream-safety safeguards and is tied to an old pinned SDK version.

- [Issue #9016 / Issue #9025 — Vertex AI authentication failures with ADC and keyless environments](https://github.com/QwenLM/qwen-code/issues/9016)  
  Application Default Credentials cannot be used; an API key is required, and supplying one breaks ADC. A related issue (#9025) confirms keyless Vertex AI is not inferred from the environment, breaking headless runs.

- [Issue #9026 — NO_TOOL_RESULT_PROGRESS hard-fails headless runs](https://github.com/QwenLM/qwen-code/issues/9026)  
  Headless executions abort with `Model stream ended after a tool result without visible progress.` This is a reliability blocker for non-interactive automation.

- [Issue #8979 — MAX_TOKENS output recovery leaves durable transcript disagreeing with history](https://github.com/QwenLM/qwen-code/issues/8979)  
  After MAX_TOKENS recovery, the JSONL transcript stores split turns while live history shows one coalesced turn. `--resume` then rehydrates duplicated turns.

- [Issue #8897 — `--approval-mode` and `--auth-type` accepted but missing from `qwen --help`](https://github.com/QwenLM/qwen-code/issues/8897)  
  CLI flags are validated but undocumented in help output, causing discoverability and configuration confusion.

## Key PR Progress

- [PR #8890 — refactor(cli): Generalize the Conversations runtime foundation](https://github.com/QwenLM/qwen-code/pull/8890)  
  Lays groundwork for a generalized conversation runtime, likely enabling future session and channel features.

- [PR #8848 — feat(web-shell): redesign Channel policy and workspace management](https://github.com/QwenLM/qwen-code/pull/8848)  
  Adds shared direct-message, group-access, session-routing, and workspace-ownership controls for every manageable adapter.

- [PR #8950 — feat(web-shell): visualize and manage dynamic workflow runs](https://github.com/QwenLM/qwen-code/pull/8950)  
  Workflow runs become first-class background tasks with live execution graphs, phase lanes, dependency edges, token usage, approvals, and retry/rerun controls.

- [PR #8974 — feat(web-shell): configure Qwen 3.8 reasoning](https://github.com/QwenLM/qwen-code/pull/8974)  
  Adds `qwen3.8-max` Thinking and effort controls (`low`, `medium`, `xhigh`) to the live Web Shell session.

- [PR #8735 — fix(workflows): make replay journal durable](https://github.com/QwenLM/qwen-code/pull/8735)  
  Converts workflow replay state into a durable, versioned checkpoint contract with per-run write serialization and recovery validation.

- [PR #9007 — fix(serve): Bound ACP HTTP pre-attach buffers by bytes](https://github.com/QwenLM/qwen-code/pull/9007)  
  Hardens daemon resource protection by bounding ACP pre-attach buffers, addressing memory-exhaustion risk.

- [PR #9014 — fix(core): honor Shell truncation threshold setting](https://github.com/QwenLM/qwen-code/pull/9014)  
  Fixes [Issue #8922](https://github.com/QwenLM/qwen-code/issues/8922). Shell now respects `tools.truncateToolOutputThreshold`; the 30,000-character default remains when unset.

- [PR #8613 — feat(web-shell): tmux-backed interactive terminal sub-agent](https://github.com/QwenLM/qwen-code/pull/8613)  
  Lets agents drive interactive CLIs, REPLs, and TUI apps inside tmux as first-class background tasks with a live Web Shell terminal view.

- [PR #8874 — feat(web-shell): support workspace file uploads](https://github.com/QwenLM/qwen-code/pull/8874)  
  Adds direct file uploads to the composer with progress, cancellation, automatic conflict renaming, and inline file preview links.

- [PR #8740 — feat(serve): share one Chrome bridge across sessions via multi-client /cdp tunnel](https://github.com/QwenLM/qwen-code/pull/8740)  
  Makes the daemon `/cdp` tunnel multi-client so sessions can share a single Chrome extension bridge instead of reconnecting independently.

## Feature Request Trends

- **Session and memory durability**  
  Issues like [auto-memory recall #7040](https://github.com/QwenLM/qwen-code/issues/7040), [session restore timeouts #8678](https://github.com/QwenLM/qwen-code/issues/8678), and [AGENTS.md hierarchical discovery #6101](https://github.com/QwenLM/qwen-code/issues/6101) show strong demand for reliable long-lived context.

- **Web Shell and desktop as the primary platform**  
  Web Shell is receiving heavy investment: dynamic workflow visualization, file uploads, tmux terminals, channel policy management, and [deprecating Electron in favor of Tauri #8596](https://github.com/QwenLM/qwen-code/issues/8596).

- **Background automation and multi-agent orchestration**  
  Requests for better background agent coordination, durable workflow replay, and cross-session messaging are recurring, such as [Issue #8097](https://github.com/QwenLM/qwen-code/issues/8097) and PR #8735.

- **Provider/auth compatibility**  
  Developers want smoother Vertex AI ADC/keyless support, SDK/CLI permission-mode parity, and Anthropic model alias/token-limit handling — see #9016, #9002, and #8584.

## Developer Pain Points

- **Headless and long-running tasks are fragile**  
  Auto-run hangs (#8963), `NO_TOOL_RESULT_PROGRESS` failures (#9026), and session restore timeouts (#8678) make unattended automation unreliable.

- **Authentication and configuration friction**  
  Vertex AI ADC/keyless issues (#9016/#9025), SDK rejection of `permission_mode="auto"` (#9002), and hidden CLI flags (#8897) all create avoidable setup friction.

- **Regression and UI stability concerns**  
  Image-load crashes (#8957), tmux flashing (#8562), desktop scrollbar jitter (#8985), and a failing main CI E2E run (#9015) point to stability pressure in recent releases.

- **Transcript and session-state inconsistency**  
  Issues like MAX_TOKENS resume duplication (#8979), Web Shell session naming after `/clear` (#8977), and silent `ask_user_question` declines (#9011) undermine trust in session persistence.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

## CodeWhale (formerly DeepSeek-TUI) Community Digest — 2026-08-13

CodeWhale continues to evolve quickly after the v0.9.5 train. The v0.9.6 release clarifies the public “Codewhale” naming and deprecates the legacy `deepseek-tui` npm package, while maintainers are actively harvesting community PRs that pass review but fail CI only from base drift. Two v0.9.5 regressions — Auto-Review blocking writes and the output area no longer filling wide terminals — are currently the most discussed issues.

---

## Releases

### [v0.9.6](https://github.com/Hmbown/CodeWhale/releases/tag/v0.9.6)
- Codewhale is now the public product from Shannon Labs; the `codewhale` command, npm package, and release-asset names remain lowercase technical identifiers.
- The legacy `deepseek-tui` npm package is deprecated and receives no further releases.
- Users migrating from v0.8.x legacy `deepseek` / `deepseek-tui` versions need to adopt the `codewhale` package name.

---

## Hot Issues

1. **[#5323 — Regression in v0.9.5: Auto-Review silently blocks every Bash call and write operation](https://github.com/Hmbown/CodeWhale/issues/5323)**  
   Auto-Review changed from auto-approving tool calls to silently blocking them with “destructive action requires explicit review.” This breaks agentic workflows for users upgrading from v0.8.x. 3 comments.

2. **[#5335 — serve --mcp returns "nextCursor": null, breaking strict MCP clients](https://github.com/Hmbown/CodeWhale/issues/5335)**  
   `tools/list` and `resources/list` return `"nextCursor": null`, which violates the MCP spec and causes clients like Claude Code to reject the response. A fix PR already exists. 1 comment.

3. **[#5322 — Regression: output area doesn't fill wide terminals](https://github.com/Hmbown/CodeWhale/issues/5322)**  
   In v0.9 the transcript area is capped at a max width, leaving unused whitespace on wide displays; v0.8.65 expanded correctly. Shrinking works, but expanding does not. 2 comments.

4. **[#5314 — Copy message includes rail decorations](https://github.com/Hmbown/CodeWhale/issues/5314)**  
   Right-click “Copy message” copies role glyphs and rail characters (`●`, `▏`), unlike selection copy. Two community PRs fix this via rail-clean copying. 2 comments.

5. **[#5250 — Only one API key can be saved](https://github.com/Hmbown/CodeWhale/issues/5250)**  
   Users switching between providers such as DeepSeek and GLM must re-enter API keys because the current config overwrites the previous provider’s key. Requesting per-provider key storage. 3 comments.

6. **[#5209 — File(action=edit) silently accepts wrong parameter names and reports fake success](https://github.com/Hmbown/CodeWhale/issues/5209)**  
   Using `new_str` instead of `replace` returns “Replaced successfully” without actually editing, forcing 3–5x re-edits per location. This is a high-impact reliability bug. 4 comments.

7. **[#5267 — Turn-stop honesty: status that says ending must end](https://github.com/Hmbown/CodeWhale/issues/5267)**  
   Users lose trust when the footer says “ending” or “stopping” but the model keeps talking. The proposal removes false guards across four resume paths. 3 comments.

8. **[#5272 — Prompt-scoped file recovery](https://github.com/Hmbown/CodeWhale/issues/5272)**  
   Restore workspace files from a prior prompt using session snapshots, not just transcript scrollback, while cooperating with git and confirming destructive restores. 3 comments.

9. **[#5000 — Interrupted assistant output should be a durable session item](https://github.com/Hmbown/CodeWhale/issues/5000)**  
   Text emitted before `MessageComplete` is visible in the TUI but absent from the authoritative session, so interrupted turns can be lost on resume. 3 comments.

10. **[#4949 — How should “Constitution” be translated into Chinese?](https://github.com/Hmbown/CodeWhale/issues/4949)**  
   Community debate on whether to use “宪法” or “协作准则.” PR #4908 changed it back to “宪法,” sparking concern about political sensitivity and accuracy. 9 comments.

---

## Key PR Progress

1. **[#5328 — FEAT-014: Command contract crate boundary](https://github.com/Hmbown/CodeWhale/pull/5328)**  
   Prototype migration shapes for TUI command decomposition as part of EPIC-005/EPIC-006. No production rewiring yet.

2. **[#5339 — fix(engine): suppress child-owned shell completions](https://github.com/Hmbown/CodeWhale/pull/5339)**  
   Filters child-owned background shell completion events out of the parent model stream while preserving unowned parent completions. Closes #5325.

3. **[#5338 — feat(web): move docs guide page onto the dictionary spine](https://github.com/Hmbown/CodeWhale/pull/5338)**  
   First slice of #5337; removes `isZh` ternaries from the docs guide page using a reusable per-page dictionary pattern.

4. **[#5333 — feat(tui): pin host terminal as an always-on-top mini window](https://github.com/Hmbown/CodeWhale/pull/5333)**  
   Harvest of community PR #5318. Adds a PiP-style `/pin` command that shrinks and pins the Windows host terminal window.

5. **[#5330 — fix(session): separate snapshot reads from crash recovery](https://github.com/Hmbown/CodeWhale/pull/5330)**  
   Maintainer harvest of community PR #5320. Adds side-effect-free `load_session_snapshot` and a separate `recover_session_for_resume` path.

6. **[#5336 — fix(mcp): omit nextCursor when there are no further pages](https://github.com/Hmbown/CodeWhale/pull/5336)**  
   Fixes #5335 by making `nextCursor` absent instead of `null` in `tools/list` and `resources/list`, restoring strict MCP client compatibility.

7. **[#5329 — fix(tui): move lru to 0.18 and unpin ratatui-core](https://github.com/Hmbown/CodeWhale/pull/5329)**  
   Fixes RUSTSEC-2026-0253: `lru` 0.16.4 has a panic-unsafe `LruCache::pop()`; 0.18.2 contains the upstream fix.

8. **[#5327 — feat(tui): add interactive extensions manager](https://github.com/Hmbown/CodeWhale/pull/5327)**  
   Adds localized `/plugin` and `/plugins` commands with a digest-bound bundle controller, while retaining legacy executable tools as read-only inventory.

9. **[#5332 — feat(config): register OrcaRouter as a named provider](https://github.com/Hmbown/CodeWhale/pull/5332)**  
   Maintainer harvest of community PR #5321. Integrates OrcaRouter as an OpenAI-compatible provider, consistent with the existing OpenRouter wiring.

10. **[#5331 — fix(tui): copy messages without visual rails](https://github.com/Hmbown/CodeWhale/pull/5331)**  
    Maintainer harvest of community PR #5319. Copies canonical source content for user/assistant cells instead of rendered Ratatui lines, keeping complex cells on the full-transcript path.

---

## Feature Request Trends

- **Per-provider API key management**  
  Several issues ask for durable, per-provider secret storage instead of a single overwritten key or repo-local plaintext config: #5250, #5047, #5034.

- **Session durability and workspace recovery**  
  Users want interrupted output preserved, prompt-scoped file restoration from snapshots, and persistent agent state for long-running tasks: #5000, #5272, #2904, #5089.

- **Honest, unified task visibility**  
  There is strong demand for one operator-facing list of running background shells, subagents, workers, and workflow runs, plus status indicators that actually match behavior: #5270, #5267, #5052.

- **i18n and locale consistency**  
  The Chinese “Constitution” translation and the web dictionary spine work show active community investment in removing locale branching and partial-pack exceptions: #4949, #5337, #5334.

- **Architectural decomposition and extensibility**  
  EPIC-005/006 crate decomposition, the command contract boundary, and the interactive extensions manager point toward a more modular CodeWhale: #5316, #5328, #5327.

---

## Developer Pain Points

- **Silent false success in file edits**  
  Issue #5209: wrong parameter names return “success” without editing, forcing repeated work and eroding trust in the File tool.

- **v0.9.5 regressions**  
  Auto-Review blocks every Bash/write call (#5323), and the output area no longer expands to wide terminals (#5322) — both were working in v0.8.x.

- **Provider/model state confusion**  
  Switching providers can retain an unrelated default model (#5034), and saving one API key overwrites another provider’s key (#5250).

- **API keys persisted in the repo**  
  Keys can silently land in `<cwd>/.codewhale/config.toml` instead of durable global secret storage, creating leakage risk and cross-project breakage (#5047).

- **UI copy and transcript artifacts**  
  Copied messages include visual rail decorations (#5314), and interrupted assistant output disappears from the session record (#5000).

- **MCP compatibility friction**  
  Returning `"nextCursor": null` breaks strict MCP clients, forcing a spec-compliance fix (#5335).

- **Stale prompt and contract overhead**  
  Prompts still describe outdated tool behavior (#5215), and small subagents are burdened with heavy output-contract ceremony (#5189).

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/boom7sss/agents-radar).*