# AI CLI Tools Community Digest 2026-08-14

> Generated: 2026-08-14 02:26 UTC | Tools covered: 9

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

# Cross-Tool Comparison Report — AI CLI Developer Tools
**Date:** 2026-08-14 | **Scope:** 9 major AI CLI tools | **Source:** Community digests (issues, PRs, releases, sentiment)

---

## 1. Ecosystem Overview

The AI CLI tool landscape is in a phase of rapid feature expansion coupled with reliability turbulence. Across 9 tools, the last 24 hours produced **12 releases**, **63 active PRs**, and **~90 tracked community issues**, with multi-agent orchestration emerging as the clearest strategic direction (Claude Code's `@`-session mentions, Qwen's `/coordinate`, Codex's thread-queue APIs). Simultaneously, all projects are absorbing a wave of regressions in **MCP reliability, Windows/Desktop behavior, and context-window management** — the operational cost of moving from single-shot assistants to long-running autonomous agents. Community attention is increasingly security-conscious: supply-chain CVEs, unsigned install scripts, and SSRF vectors were reported across multiple projects in a single day. The overall signal: tools are converging on the same architectural frontier (multi-agent, long-session, MCP-integrated) while struggling with the same fragility points, and differentiation is shifting to provider breadth, enterprise guardrails, and UX polish.

---

## 2. Activity Comparison

| Tool | Releases (24h) | Active PRs | Hot Issues Tracked | Release Cadence Signal |
|---|---|---|---|---|
| **Claude Code** | 1 (v2.1.232) | 2 | 10 | Stable release; PR volume unusually low — maintainers absorbed by regression clusters |
| **OpenAI Codex** | 4 (alpha.11→14) | 10 | 10 | Rapid Rust stabilization sprint toward 0.148.0 |
| **Gemini CLI** | 1 (nightly) | 10 | 10 | Nightly pipeline; security PRs prominent (CVE, CI RCE) |
| **GitHub Copilot CLI** | 2 (v1.0.80-0/-1) | 1 | 10 | Patch-level fixes; bug backlog growing (~15 new triage issues) |
| **Kimi CLI** | 0 | 0 | 3 | Dormant window; no code activity |
| **OpenCode** | 0 | 10 | 10 | No release, but heavy V2 performance optimization push |
| **Pi** | 0 | 10 | 10 | No release; TUI/terminal hygiene and provider-compat fixes |
| **Qwen Code** | 3 (stable + nightly + preview) | 10 | 10 | Highest release velocity; multi-agent fleet roadmap advancing |
| **CodeWhale (DeepSeek)** | 1 (v0.9.7) | 10 | 10 | Rebrand formalized; v0.9.8 pipeline already active |

*Note: "Hot Issues Tracked" reflects the digest's curated top issues, not raw tracker totals.*

---

## 3. Shared Feature Directions

Requirements appearing independently across multiple tool communities:

1. **Multi-agent / multi-session orchestration** — The strongest cross-tool signal.
   - **Claude Code:** `@`-mention of other sessions; subagent forking on by default (#24798, 21👍).
   - **Qwen Code:** `/coordinate` command, fleet RFC #8718, staged delivery issues #8840–#8843.
   - **Codex:** Thread queue APIs (#38456), thread revert (#38440), background service monitoring (#2062).
   - **Copilot CLI:** Session listing with id/status, mirroring Claude's `agents --json` (#4470).

2. **MCP reliability & configurability** — Table stakes, but the #1 friction point.
   - **Claude Code:** OAuth redirect-URI fix (v2.1.231).
   - **Codex:** Per-server OAuth callback ports (#38448).
   - **Copilot CLI:** OAuth regression against Atlassian (#4480), concurrent token-refresh cancellation (#4472), no retry on transient 5xx (#4466).
   - **OpenCode:** MCP tools connected but not exposed to agent (#33027).
   - **CodeWhale:** MCP pagination compliance fix (#5336).

3. **Background execution & long-running process management**
   - **Claude Code:** Non-teammate agent spawns background by default.
   - **Codex:** #2062 (monitor background services) remains top enhancement ask.
   - **Qwen Code:** Background agent recovery / `activeWork` tracking (#8586).
   - **Gemini CLI:** Retry/TTL for capacity errors so unattended runs survive (#28790).

4. **Context management & honest token accounting**
   - **Claude Code:** advisor() token double-counting (#53065, #81620).
   - **Codex:** compact 404 regression (#38323); oversized threads after repeated compaction (#38466).
   - **Pi:** Auto-compaction fails before provider rejection at 373k tokens (#6879, 17👍).
   - **OpenCode:** Silent context pruning dropping instruction-bearing content (#42437).
   - **Gemini CLI:** Usage metadata lost on aborted streams (#28718).

5. **Windows/WSL2 parity** — Universal pain, universal backlog.
   - **Claude Code:** 12+ cross-session messaging regressions on Windows Desktop.
   - **Codex:** Repeated VS Code IDE-context failures on Windows/WSL2.
   - **Qwen Code:** Ctrl+V paste regression (#9061), installer Get-FileHash failure (#7118).
   - **Gemini CLI:** WSL2 clipboard image paste PR (#27588).
   - **Copilot CLI:** OAuth socket errors, extension-host process leaks (#4468).

6. **Supply-chain & prompt-integrity security**
   - **Gemini CLI:** simple-git CVE upgrade (#28778), eval-pr supply-chain RCE fix (#28740).
   - **OpenCode:** curl|bash upgrade without checksums (#42434), webfetch SSRF (#42435).
   - **Qwen Code:** Cross-worktree Git mutation guard (#8687).
   - **Claude Code:** Cyber-safeguard false positives blocking legitimate orgs (#84352).

---

## 4. Differentiation Analysis

| Tool | Strategic Position | Target User | Technical Character |
|---|---|---|---|
| **Claude Code** | Enterprise-grade agentic IDE replacement; multi-session orchestration leader | Teams needing safety/approval workflows, CVP compliance | Mature TypeScript codebase; subagent forking; session graph; heavy investment in desktop app |
| **OpenAI Codex** | Fast-moving Rust CLI + desktop; provider-agnostic backend (Bedrock, custom endpoints) | Developers integrating code agents into pipelines; MCP-heavy setups | Rust; rapid alpha cadence; experimental thread-queue/revert APIs; skill-model delegation |
| **Gemini CLI** | Aggregate multi-model frontend (now defining Claude models); Auto Memory as differentiator | Users wanting cross-model flexibility + persistent project memory | Node/TS; nightly pipeline; security hardening as a priority; context-aware retries |
| **GitHub Copilot CLI** | Deep GitHub/VS Code ecosystem integration | GitHub-centric developers; remote MCP server users | Slower cadence; patch releases; per-agent config parity is the top user ask (#2904, 20👍) |
| **Qwen Code** | Fastest feature velocity; native multi-agent fleet (`/coordinate`, read-only teammates) | Developers wanting agent teams; Web Shell/remote workbench users | Very high release cadence; Agent Plugins v1; daemon architecture |
| **OpenCode** | V2 rewrite with performance focus; community-driven TUI design | Power users sensitive to startup latency and layout | Lazy-loading optimization wave; V2 migration friction; strong localization growth (Hebrew) |
| **Pi** | Terminal-first minimalism; provider-quirk absorption (Codex, Gemini, Anthropic) | TUI purists; extension authors | Lower-level terminal hygiene focus; visual-line caching; multi-provider compat fixes |
| **CodeWhale (DeepSeek)** | Rebranded product; local-first model setup (DS4/DwarfStar) | DeepSeek users; CJK-language developers | Rust TUI; architecture refactor (crate decomposition); model-guardian review tier |
| **Kimi CLI** | Least active window; ACP (agent client protocol) integration | ACP-based tooling users | Dormant this cycle; memory-system demand (#1283, 38 comments) unmet |

**Key differentiators:** Claude Code owns *enterprise orchestration*; Qwen owns *agent-fleet velocity*; Codex owns *backend/provider breadth*; Gemini owns *multi-model aggregation + memory*; Pi owns *terminal correctness*; OpenCode owns *performance-first V2 UX*.

---

## 5. Community Momentum & Maturity

**Highest momentum (rapid iteration):**
- **Qwen Code** — 3 releases in 24h (stable + nightly + preview), 10 PRs, staged multi-agent roadmap. Most feature-dense cadence in the ecosystem.
- **OpenAI Codex** — 4 alpha builds in 24h toward a 0.148.0 cut; 10 PRs spanning providers, MCP config, and session lifecycle. Signal: stabilization sprint with high throughput.
- **Gemini CLI** — Nightly pipeline + 10 PRs, with security fixes (CVE, CI RCE) and multi-model expansion (Claude definitions) showing strategic ambition beyond Gemini-only.

**Maturing but regression-constrained:**
- **Claude Code** — Most mature feature set (session orchestration, forking) but PR volume nearly zero (2 docs/CI PRs) as maintainers focus on Windows Desktop regressions and cyber-safeguard false positives. The 94-comment CVP thread (#84352) signals enterprise trust issues needing urgent resolution.
- **Copilot CLI** — Largest fresh bug backlog (~15 triage issues in 24h), lowest PR activity (1). MCP fragility dominates; community is engaged but the project appears resource-constrained.

**Building through refactoring:**
- **OpenCode** — No release but a concentrated 10-PR performance push (lazy-loading MCP SDK, semver, npm config, HTML parser). V2 migration friction (TODO tools missing, schema mutation) is slowing adoption.
- **CodeWhale** — Healthy 10-PR flow post-rebrand; split between feature work (DS4 local setup, model guardian) and architecture (crate decomposition epic #5316).

**Quiet / watchlist:**
- **Kimi CLI** — Zero PRs, zero releases, 3 issues. The 38-comment memory-system thread indicates demand, but no shipped response this cycle. The 88k-token gibberish generation (#2597) is a trust-critical bug with no visible fix.

**Community engagement leaders (by issue reactions):** Claude Code (#84352 at 94 comments, #24798 at 21👍), OpenCode (#11112 at 78 comments/46👍, #37012 at 41👍), Kimi (#1283 at 38 comments), Copilot CLI (#2904 at 20👍).

---

## 6. Trend Signals

1. **Multi-agent orchestration is the next competitive frontier.** Three independent implementations shipped or advanced in one week: Claude's session `@`-mentions + fork-by-default, Qwen's `/coordinate` with read-only teammates, and Codex's thread-queue/revert APIs. Expect this to become a standard feature tier, not a differentiator, within two quarters.

2. **MCP has crossed the chasm — and hit the reliability wall.** OAuth regressions, fd leaks, concurrent-refresh cancellation, and missing retry/backoff appear across nearly every tracker. The winners will be tools that make MCP failure modes observable and self-healing, not just "supported."

3. **Desktop apps are the new weak link.** Claude Windows Desktop cross-session breakage (12+ linked issues), Codex macOS V8 OOM and 100%-CPU reports, OpenCode's 80% startup-provider failure rate — the desktop wrappers are consuming maintainer cycles that would otherwise go to core features.

4. **Security is now a community-driven requirement, not an afterthought.** In a single 24h window: a CRITICAL simple-git CVE, a CI supply-chain RCE, two curl|bash integrity complaints, an SSRF, unauthenticated A2A routes, and cross-worktree Git guardrails. Developers are auditing their AI CLIs like production dependencies — tools without signed releases or SBOMs will face pushback.

5. **Windows/WSL2 remains the weakest platform across the entire ecosystem.** Every single tool has a Windows-specific regression cluster (paste, installer, process leaks, OAuth sockets, IDE context). Cross-platform parity is a recurring, unsatisfied demand — a differentiation opportunity for any tool that gets Windows right.

6. **Silent misbehavior erodes trust faster than missing features.** The recurring pattern — silently ignored model config (Copilot), misleading "Copied!" feedback (OpenCode, Pi), fake subagent success after MAX_TURNS (Gemini), dropped typed input (Claude), phantom "success" artifact records (Qwen) — is the meta-complaint of 2026. Tools that surface honest status, error, and token accounting will win developer confidence.

7. **Multi-model aggregation is becoming table stakes.** Gemini CLI adding Claude model definitions, Codex adding Amazon Bedrock, Pi handling Codex/Gemini/Anthropic quirks, CodeWhale adding local DS4 — the CLI is becoming a *router* to models, not a captive client. Vendor lock-in is fading as a positioning strategy.

8. **Context/compaction fragility is universal and underestimated.** Double-counted advisor tokens, 404s on compact, compaction that never triggers until a 373k-token rejection, silent context pruning, lost usage on aborted streams — long-session reliability is the quiet crisis across all tools. As agentic sessions grow longer, this will become the #1 operational pain point.

---

**Bottom line for decision-makers:** If you need enterprise guardrails and session orchestration today, Claude Code leads but is currently bleeding on Windows Desktop reliability. If you want the fastest-moving feature roadmap and agent-fleet workflows, Qwen Code is shipping weekly. If you need provider breadth and a stable Rust core, Codex is the one to watch through its 0.148.0 stabilization. And before adopting any of these for unattended/CI workflows, verify their context-compaction, MCP retry, and shutdown behavior — that is where the ecosystem is weakest right now.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
**Data source:** github.com/anthropics/skills | **Snapshot:** 2026-08-14

---

## 1. Top Skills Ranking

The following PRs generated the most community discussion, ranked by comment activity. All remain **open** as of the snapshot date.

| # | Skill / PR | Functionality | Discussion Highlights | Status |
|---|---|---|---|---|
| 1 | **[fix(skill-creator): run_eval.py reports 0% recall](https://github.com/anthropics/skills/pull/1298)** | Repairs the skill-creator evaluation loop so `run_eval.py` / `run_loop.py` / `improve_description.py` produce real signal instead of `recall=0%` — installs the eval artifact as a real skill, fixes Windows stream reading, trigger detection, and parallel workers. | The most-discussed PR in the repository. Resolves the #556 bug (10+ independent reproductions) where every skill description was scored as noise, meaning the description-optimization loop was optimizing against garbage. | Open |
| 2 | **[Add document-typography skill](https://github.com/anthropics/skills/pull/514)** | Typographic quality control for AI-generated documents: orphan word wrap, widow paragraphs, and numbering misalignment. | Broad appeal — every document Claude generates is affected. Users rarely ask for good typography, so the skill encodes it as default behavior. | Open |
| 3 | **[fix(pdf): correct case-sensitive file references](https://github.com/anthropics/skills/pull/538)** | Fixes 8 case-sensitivity mismatches in `skills/pdf/SKILL.md` (`REFERENCE.md` → `reference.md`, `FORMS.md` → `forms.md`). | Highlights cross-platform portability pain: broken on case-sensitive filesystems (Linux/macOS). Small but highly visible correctness fix. | Open |
| 4 | **[Add ODT skill](https://github.com/anthropics/skills/pull/486)** | OpenDocument Format support: create, fill, read, and convert `.odt`/`.ods` files; parse ODT to HTML. | Community demand for open-source/ISO-standard document formats beyond DOCX/PDF. | Open |
| 5 | **[Improve frontend-design skill clarity](https://github.com/anthropics/skills/pull/210)** | Revises the frontend-design skill so every instruction is concrete and actionable within a single conversation. | Reflects a broader concern: skills should be operative instructions for Claude, not human-readable documentation (see also Issue #202). | Open |
| 6 | **[Add skill-quality-analyzer & skill-security-analyzer](https://github.com/anthropics/skills/pull/83)** | Two meta-skills: quality analysis across structure/documentation/examples, plus a security analyzer for Skill content. | Early signal (Nov 2025) of the community's drive toward skill verification and governance — a theme that later dominates Issues. | Open |
| 7 | **[fix(docx): prevent tracked change w:id collision](https://github.com/anthropics/skills/pull/541)** | Prevents document corruption when adding tracked changes to DOCX files that already contain bookmarks (shared OOXML `w:id` namespace). | Important reliability fix for the widely-used docx skill; addresses real-world document corruption scenarios. | Open |
| 8 | **[fix(skill-creator): warn on unquoted YAML descriptions](https://github.com/anthropics/skills/pull/539)** | Pre-parse validation in `quick_validate.py` to detect unquoted `description:` fields containing `:` before silent YAML truncation. | Community self-triage: the same author (Lubrsy706) is systematically hardening the skill-creator tooling. | Open |

---

## 2. Community Demand Trends

Distilled from the top Issues discussion:

- **Security & trust boundary enforcement** — [Issue #492 (43 comments)](https://github.com/anthropics/skills/issues/492) is by far the most active: community skills distributed under the `anthropic/` namespace impersonate official skills, enabling elevated-permission abuse. Demand: clear provenance/authentication for skills.
- **Reliable skill-authoring tooling** — [Issue #556 (12 comments)](https://github.com/anthropics/skills/issues/556) and [Issue #1169](https://github.com/anthropics/skills/issues/1169) both document the same critical defect: `run_eval.py` reports a 0% trigger rate for all queries, making the description-optimization loop useless. Demand: a working evaluation harness is the community's #1 blocker.
- **Skill sharing & lifecycle management** — [Issue #228 (16 comments)](https://github.com/anthropics/skills/issues/228) requests org-wide skill sharing in Claude.ai; [Issue #62](https://github.com/anthropics/skills/issues/62) reports disappearing skills; [Issue #189](https://github.com/anthropics/skills/issues/189) flags duplicate skills from overlapping plugins (9 👍). Demand: distribution, deduplication, and persistence.
- **Quality-gate / governance meta-skills** — [Issue #412 (agent-governance)](https://github.com/anthropics/skills/issues/412), [Issue #1385 (Reasoning Quality Gate Pipeline)](https://github.com/anthropics/skills/issues/1385), and [Issue #1329 (compact-memory)](https://github.com/anthropics/skills/issues/1329) show users want skills that audit AI output, not just produce it.
- **Context-window efficiency** — [Issue #1487](https://github.com/anthropics/skills/issues/1487): the `claude-api` skill eagerly injects ~156k tokens in one tool call, exhausting the context window. Demand: size-aware skill design.
- **Platform integration** — [Issue #29](https://github.com/anthropics/skills/issues/29) (AWS Bedrock support) and [Issue #16](https://github.com/anthropics/skills/issues/16) (expose skills as MCPs) remain open since Oct 2025, indicating persistent unmet interest.

---

## 3. High-Potential Pending Skills

Actively-discussed PRs not yet merged — these are the most likely to land next:

- **[document-typography](https://github.com/anthropics/skills/pull/514)** — Typographic quality control (orphans, widows, numbering alignment) for every generated document. Wide applicability.
- **[testing-patterns](https://github.com/anthropics/skills/pull/723)** — Comprehensive testing skill: Testing Trophy model, unit testing (AAA pattern), React Testing Library, and what not to test.
- **[ServiceNow platform skill](https://github.com/anthropics/skills/pull/568)** — Broad ServiceNow assistant covering ITSM, ITOM, ITAM/SAM, FSM, HRSD/CSM, SPM, vulnerability response, and IntegrationHub. Long-running PR (updated as recently as 2026-08-12) — likely under active review.
- **[self-audit](https://github.com/anthropics/skills/pull/1367)** — Mechanical output-file verification plus a four-dimension reasoning quality gate before delivery. Complements the governance demand from Issues.
- **[pyxel (retro game dev)](https://github.com/anthropics/skills/pull/525)** — Integration with the Pyxel retro-game engine via MCP; workflow: write → run_and_capture → inspect → iterate. Niche but concrete and well-scoped.
- **[SAP-RPT-1-OSS predictor](https://github.com/anthropics/skills/pull/181)** — Wraps SAP's open-source tabular foundation model for predictive analytics on business data.
- **[ODT / OpenDocument](https://github.com/anthropics/skills/pull/486)** — Fills the open-format gap alongside the existing pdf/docx skills.
- **[plan-file-hygiene](https://github.com/anthropics/skills/pull/1479)** — Addresses planning-artifact accumulation with a lifecycle approach; explicitly credited to community discussion in #1417.

---

## 4. Skills Ecosystem Insight

**The community's most concentrated demand is not for more Skills, but for trustworthy skill infrastructure — a working evaluation harness (#556/#1298), security/provenance guarantees (#492), and quality-gate meta-skills (#83/#1367/#1385) — reflecting a shift from "what can Skills do?" to "how do we know a Skill is correct, safe, and efficient?"**

---

# Claude Code Community Digest — 2026-08-14

## 1. Today's Highlights

Claude Code **v2.1.232** shipped with two workflow-shaping changes: subagent forking is now on by default (forked subagents inherit the full conversation and prompt cache), and typing `@` in the prompt mentions another Claude session by name — directly answering the long-running demand for multi-session orchestration (#24798). At the same time, the community is wrestling with two fronts: a **cyber-safeguard false-positive storm hitting CVP-approved organizations** (94-comment thread, still unresolved), and a **dense cluster of Windows Desktop cross-session messaging regressions** introduced around bundled runtime 2.1.227 that persist through 2.1.231.

## 2. Releases

**v2.1.232** — https://github.com/anthropics/claude-code/releases/tag/v2.1.232
- Subagent forking is now **on by default**: a `subagent_type: "fork"` subagent inherits the full conversation and prompt cache.
- Non-teammate agent spawns in interactive sessions now run **in the background by default**.
- New `@` prompt syntax to mention and reference another Claude session by name — the first concrete step toward cross-session workflows.

**v2.1.231** — https://github.com/anthropics/claude-code/releases/tag/v2.1.231
- Fixed MCP OAuth sign-in failing with a redirect URI mismatch for servers using a pre-registered OAuth client (e.g., Slack).

## 3. Hot Issues

1. **[#84352 — CVP-approved Claude.ai org still receives cyber safeguard blocks in Claude Code](https://github.com/anthropics/claude-code/issues/84352)** — 94 comments, 14 👍. The top community thread. A previously Cyber Verification Program-approved organization is again blocked by cyber-safeguards, and the Verification Portal now shows the approved application as "Under review." Signals a possible policy/flagging regression affecting legitimate users.

2. **[#24798 — Inter-session communication for multi-Claude workflows](https://github.com/anthropics/claude-code/issues/24798)** — 66 comments, 21 👍. The most-upvoted enhancement request: users want direct project workflows between siloed Claude sessions to sequence higher-level processes with dependencies. Notably, v2.1.232's `@`-mention feature appears to be the first shipped response.

3. **[#85603 — Typed input queued mid-turn is silently dropped at turn end](https://github.com/anthropics/claude-code/issues/85603)** — 22 comments. In the interactive TUI, text typed while a turn is running is silently dropped rather than fed into the next turn. Long-running agent sessions make this hit frequently; users report both "turn-end unfed" and "idle-pane no-turn-starts" symptom shapes.

4. **[#53065 — advisor() tool inflates reported input tokens, triggering premature auto-compaction](https://github.com/anthropics/claude-code/issues/53065)** — 15 comments, 7 👍. The full transcript is forwarded to the advisor model and its usage is summed into the main `usage` block, so context occupancy is double-counted and auto-compaction fires at roughly half the real window.

5. **[#86012 — Cross-session messages leave recipient completely unresponsive until Desktop force-kills it](https://github.com/anthropics/claude-code/issues/86012)** — 15 comments, 3 👍. A Windows Desktop regression: `hadFirstResponse=false, reason=no_response` for 15–20 minutes until the idle-timeout kills the session. Part of the larger post-2.1.227 cross-session breakage cluster.

6. **[#82092 — Apps gateway serves Desktop an OTLP endpoint with no auth headers; every telemetry flush rejected](https://github.com/anthropics/claude-code/issues/82092)** — 10 comments, 5 👍. The gateway hands Claude Desktop an `otlpEndpoint` gated by bearer auth but omits `otlpHeaders`, so every telemetry flush is rejected with `missing_token`. A small config bug with an observable operational fingerprint.

7. **[#86385 — Cross-session send_message never triggers a responding turn; still broken in 2.1.231](https://github.com/anthropics/claude-code/issues/86385)** — 3 comments. Important because the reporter retested after the 2.1.231 update: the session resumes and loads the transcript, but the queued message still never starts a turn. Demonstrates the regression is not yet fixed.

8. **[#81620 — advisor tool doubles reported context size, auto-compacts at ~50% of real window](https://github.com/anthropics/claude-code/issues/81620)** — 3 comments, 3 👍. Independent duplicate of #53065, confirming the advisor token double-count is reproducible and widely felt.

9. **[#86527 — Fable 5 cyber safeguard blocks fire on Claude Code's own generated context, not user input](https://github.com/anthropics/claude-code/issues/86527)** — 1 comment. New report adding detail to #84352: the safeguard appears to flag the model's own generated context in a CVP-approved org, suggesting a classifier-side false-positive rather than user behavior.

10. **[#73107 — Windows desktop app won't launch after upgrade: "Another program is currently using this file" (0x80070020)](https://github.com/anthropics/claude-code/issues/73107)** — 3 comments, 1 👍. Old AppX container silo pinned by an orphaned elevated Claude Code child process. Long-running Windows packaging/update pain (related: #77421, #77379, #86555).

## 4. Key PR Progress

Only **2 pull requests** saw activity in the last 24 hours, so the full list:

- **[#86537 — Fix duplicated word in CHANGELOG.md](https://github.com/anthropics/claude-code/pull/86537)** — Open. Documentation-only typo fix ("to to") in the `CLAUDE_BASH_NO_LOGIN` changelog entry for 1.0.124. Small but keeps release notes clean.

- **[#60280 — chore(ci): SHA-pin remaining actions/checkout and actions/github-script](https://github.com/anthropics/claude-code/pull/60280)** — Closed. Completes the supply-chain hardening from #56784 by SHA-pinning `actions/checkout@v4` (to `34e114...`) and other third-party actions across 6 CI workflows (`auto-close-duplicates`, `backfill-duplicate-comments`, `claude-dedupe-issues`, `claude-issue-triage`, and others).

PR volume is unusually low this cycle — most maintainer attention appears absorbed by the Desktop cross-session regression cluster and the cyber-safeguard reports.

## 5. Feature Request Trends

- **Multi-session orchestration is the dominant feature direction.** Issue #24798 (66 comments, 21 👍) asks for direct project workflow between siloed Claude sessions. The v2.1.232 `@`-mention and default-on subagent forking are clear moves in this direction — expect more surface area here as users build on it.
- **Background execution as a default.** Non-teammate agent spawns now run in the background by default in interactive sessions, matching community expectations that agents shouldn't block the main thread.
- **Forked subagents with full context inheritance.** Making `subagent_type: "fork"` default signals that context-continuity is a first-class workflow concern, not an opt-in experiment.

## 6. Developer Pain Points

- **Windows Desktop cross-session messaging is broadly broken (regression since 2.1.227).** At least 12 open reports form this cluster: #86012, #86138, #86069, #86237, #86298, #86386, #86059, #86385, #86212, #86088, #86398, #86029. Symptoms vary — messages land in the composer but never submit, turns hang at 0 tokens, paused sessions enter permanent phantom turns, watchdog kills after ~980s, or messages are silently dropped after ~5 minutes awaiting an approval the UI never offers. Critically, several reporters confirm the behavior **persists in 2.1.231**.
- **Windows update/file-lock death spiral.** Multiple reports (#73107, #77421, #86555, #77379) describe the MSIX app becoming unlaunchable with "Another program is currently using this file" until reboot, caused by orphaned elevated child processes or stale AppContainer jobs held by `svchost.exe`.
- **advisor() token double-counting wasted context budget.** #53065 and #81620 both document the advisor's forwarded-transcript tokens being summed into the main `usage`, causing premature auto-compaction — a costly surprise on extended-context models.
- **Cyber-safeguard false positives against approved orgs.** #84352 (94 comments) and #86527 indicate legitimate, CVP-approved organizations are being blocked, with the verification portal even showing approved applications as "Under review."
- **Windows GPU process crashes on embedded browser content.** #86265 and #86146 report Chromium GPU crashes (exit 0x060C201E) on login/preview pages — including deadlocking the main process — across multiple app versions and even with `--disable-gpu`.
- **Silent input loss in the interactive TUI.** #85603 shows typed-ahead input being silently discarded at turn boundaries, a frustrating edge case for long-running agent sessions in tmux.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-08-14

## Today's Highlights
A dense 24 hours for Codex: four Rust alpha builds (0.148.0-alpha.11 → alpha.14) shipped, a new Amazon Bedrock Runtime provider landed, and the team advanced MCP configurability plus skill-model delegation. Meanwhile, the issue tracker shows Windows/WSL2 IDE-context breakage as the most persistent pain point, with fresh macOS desktop regressions (V8 OOM, 100% CPU) and a long-running MCP fd-leak bug drawing the most community attention.

## Releases
Four `rust-v0.148.0-alpha` builds were published in the last 24 hours (alpha.11, alpha.12, alpha.13, alpha.14). No detailed changelogs were attached; the rapid cadence signals active stabilization of the Rust CLI toward a 0.148.0 cut. See the [releases page](https://github.com/openai/codex/releases).

## Hot Issues
1. **[#26984 — MCP stdio servers leak pipe fds + orphan child processes → cumulative EMFILE](https://github.com/openai/codex/issues/26984)** (21 comments, 4 👍) — Long-running CLI sessions accumulate pipe descriptors until "Too many open files" (os error 24). Reproduced across 0.12x through 0.137.0; a serious reliability blocker for MCP-heavy workflows.

2. **[#37403 — macOS Desktop cannot resume Remote Control / CLI thread: "already has an active writer"](https://github.com/openai/codex/issues/37403)** (18 comments, 11 👍) — Regression after the Aug 7 desktop update breaks resuming a CLI thread from mobile Remote Control. Highest 👍 count among open bugs.

3. **[#31553 — VS Code extension stopped auto-including IDE context after update](https://github.com/openai/codex/issues/31553)** (17 comments, 12 👍, closed) — Part of a recurring cluster of IDE-context failures (#34920, #35419, #34696, #35333). Closed, but the frequency of regressions in this area is a pattern.

4. **[#2062 — Request: monitor background services](https://github.com/openai/codex/issues/2062)** (9 comments, 10 👍) — The most-reacted enhancement: let long builds/server runs proceed without blocking, and allow the agent to inspect logs on completion. Open since Aug 2025.

5. **[#33551 — Multi-Agent V2 sends OpenAI-specific `agent_message` items to external Responses providers](https://github.com/openai/codex/issues/33551)** (8 comments, 6 👍) — Interop bug: child-agent instructions use OpenAI-only item types that Ollama and other providers can't parse, breaking custom-model multi-agent setups.

6. **[#23454 — `$skill` explicit invocation ignores local explicit-only skills absent from implicit skill list](https://github.com/openai/codex/issues/23454)** (8 comments, 7 👍) — Explicitly invoked skills don't load when hidden from the implicit skill list, impacting teams shipping local skills.

7. **[#38323 — `compact` returns 404 on `/backend-api/codex/responses/compact`](https://github.com/openai/codex/issues/38323)** (4 comments) — New regression in 0.146.0 (macOS, gpt-5.6-sol): context compaction broken against the backend endpoint.

8. **[#38455 — Desktop repeatedly spawns Computer Use workers and crashes with V8 OOM on macOS](https://github.com/openai/codex/issues/38455)** (3 comments) — SIGABRT via node::OOMErrorHandler 98 seconds after launch, 187 computer-use threads; previous version worked.

9. **[#38468 — macOS severe performance regression: 100%+ CPU, 10+ GB RAM, UI hangs](https://github.com/openai/codex/issues/38468)** (2 comments) — New report against 26.810.41047 on Apple Silicon; pairs with #38455 as a worrying desktop-app trend.

10. **[#38472 — VS Code extension renders blank after resuming a paused Goal](https://github.com/openai/codex/issues/38472)** (3 comments) — Windows report: resuming a Goal leaves an unresponsive, blank extension pane. Session-resume reliability remains weak.

## Key PR Progress
1. **[#38470 — Add an Amazon Bedrock Runtime provider](https://github.com/openai/codex/pull/38470)** — New built-in `amazon-bedrock-runtime` provider for regional OpenAI-compatible endpoints, with endpoint-specific SigV4 while preserving bearer-token auth and per-provider AWS profile/region config.

2. **[#38475 — Add bounded skill model delegation instructions](https://github.com/openai/codex/pull/38475)** — Lets skills request Luna while running on Sol/Terra, with validated/bounded model identifiers and skill names — a capability unlock for skill authors.

3. **[#38467 — Parse model annotations from skill frontmatter](https://github.com/openai/codex/pull/38467)** — Adds optional `model` field to skill metadata (e.g. `model: luna`), ignoring unsupported values without breaking skill loading.

4. **[#38448 — Support per-server MCP OAuth callback ports](https://github.com/openai/codex/pull/38448)** — Adds `oauth.callback_port` to MCP server config, plugin declarations, and skill dependency metadata — important for MCP servers behind strict firewalls.

5. **[#38456 — Add experimental thread queue APIs to app server](https://github.com/openai/codex/pull/38456)** — FIFO `thread/queue/add|list|update|delete|reorder|start` for persistent queued submissions, auto-dispatching after completed/failed turns.

6. **[#38440 — App-server support for reverting paginated threads](https://github.com/openai/codex/pull/38440)** — Experimental `thread/revert` replaces durable history with the prefix before `beforeTurnId`, interrupting active turns while preserving the thread ID.

7. **[#38441 — Give Guardian V2 full tool action context](https://github.com/openai/codex/pull/38441)** — Exposes the original pre-hook `ToolPayload` to tool lifecycle contributors so Guardian can assess risk from the actual action and conversation context, not just a tool name.

8. **[#38445 — Retain client developer messages across context compaction](https://github.com/openai/codex/pull/38445)** — Preserves annotated client-authored developer instructions after compaction when `retain_client_developer_messages` is enabled.

9. **[#38447 — Add running-task exit choices to local daemon sessions](https://github.com/openai/codex/pull/38447)** — Ctrl-C with an empty composer now offers: cancel task, exit and leave task running, or stop and exit — fixing a common daemon-mode footgun.

10. **[#38449 — Expose model upgrade retirement times](https://github.com/openai/codex/pull/38449)** — Surfaces nullable `retirementAt` timestamps from `model/list`, parsed from RFC 3339 `retirement_at` metadata — useful for planning model migrations.

## Feature Request Trends
- **Background process monitoring** ([#2062](https://github.com/openai/codex/issues/2062)) remains the top ask: agents should launch long-running builds/servers without blocking and tail logs afterward.
- **Session-lifecycle ergonomics**: auto-updating chat titles ([#24060](https://github.com/openai/codex/issues/24060)), visible task stall/interrupt states ([#32948](https://github.com/openai/codex/issues/32948)), and persistent Recent Tasks for idle/projectless sessions ([#33396](https://github.com/openai/codex/issues/33396)).
- **Approval-flow hardening**: Windows desktop ignoring `approval_policy=never` ([#24934](https://github.com/openai/codex/issues/24934)) and permission upgrades not applying mid-task ([#33114](https://github.com/openai/codex/issues/33114)).
- **MCP ecosystem growth** shows up on the PR side (per-server OAuth callback ports, thread queue APIs), signaling continued investment in MCP server reliability and scale.

## Developer Pain Points
- **Windows/WSL2 remains the most fragile platform.** The IDE-context cluster ([#31553](https://github.com/openai/codex/issues/31553), [#35419](https://github.com/openai/codex/issues/35419), [#34920](https://github.com/openai/codex/issues/34920), [#34696](https://github.com/openai/codex/issues/34696)) shows repeated regressions where VS Code silently stops sending active file/selection; WSL agent mode also suffers bad cwd and missing Chrome/Computer Use ([#30435](https://github.com/openai/codex/issues/30435)).
- **Desktop-app reliability regressions are spiking**: macOS remote-control writer lock ([#37403](https://github.com/openai/codex/issues/37403)), V8 OOM Computer Use crashes ([#38455](https://github.com/openai/codex/issues/38455)), and 100% CPU / 10+ GB RAM usage ([#38468](https://github.com/openai/codex/issues/38468)).
- **Context management is fragile**: the 404-on-compact regression ([#38323](https://github.com/openai/codex/issues/38323)) and oversized threads after repeated compaction ([#38466](https://github.com/openai/codex/issues/38466)) show developers hitting the limits of long-session handling.
- **MCP long-run stability**: fd leaks and orphaned child processes ([#26984](https://github.com/openai/codex/issues/26984)) make MCP stdio servers a liability in long-lived sessions.
- **External-provider interop**: Multi-Agent V2's OpenAI-specific message types ([#33551](https://github.com/openai/codex/issues/33551)) continue to block custom-model/Ollama setups.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-08-14

## 1. Today's Highlights

Nightly release **v0.56.0-nightly.20260814.gc0d192452** landed with context-aware silent retries for capacity errors, directly addressing a critical regression that left unattended CLI runs failing on model exhaustion. Security took center stage in the PR queue: a supply-chain RCE fix for `eval-pr` workflows ([#28740](https://github.com/google-gemini/gemini-cli/pull/28740)) and a critical `simple-git` CVE upgrade ([#28778](https://github.com/google-gemini/gemini-cli/pull/28778)) were both proposed within the last 24 hours. Community heat remains concentrated on input-handling regressions (Enter key dead, stuck "Waiting input") and Gemini-3 model capacity availability.

## 2. Releases

**v0.56.0-nightly.20260814.gc0d192452** — [Release](https://github.com/google-gemini/gemini-cli/releases)

- **test(e2e):** Stabilize `file-system-interactive` test on slow runners by [@DavidAPierce](https://github.com/google-gemini/gemini-cli/pull/28793) — adds prompt synchronization and retry logic for slow virtualized CI environments (Windows E2E runners).
- **fix(core):** Implement context-aware silent retries and availability TTL for capacity errors by [@DavidAPierce](https://github.com/google-gemini/gemini-cli/pull/28790) — closes the capacity-exhaustion retry regression from issue [#28761](https://github.com/google-gemini/gemini-cli/issues/28761); non-interactive runs now back off and retry with up to 2 silent retries, with a TTL to avoid hammering unavailable models.

## 3. Hot Issues

1. **[#23297 — Why pressing Enter does nothing?](https://github.com/google-gemini/gemini-cli/issues/23297)** (P1, 10 👍) — The most-upvoted open bug this week. Users report the interactive prompt becoming completely unresponsive to Enter keypresses, requiring a shell restart. Marked as possible-duplicate with needs-info, but the 10 upvotes signal a recurring input-handling regression.

2. **[#19883 — No capacity available for gemini-3-flash-preview](https://github.com/google-gemini/gemini-cli/issues/19883)** (P2, 8 👍, closed) — Gemini-3 Flash frequently unreachable while Pro/Lite work fine. Community frustration over model capacity has been a persistent theme; now mitigated by the new retry/TTL logic in today's nightly.

3. **[#22323 — Subagent MAX_TURNS reported as GOAL success](https://github.com/google-gemini/gemini-cli/issues/22323)** (P1, maintainer-only) — A `codebase_investigator` subagent hit its turn limit but reported `status: "success"` / `Termination Reason: "GOAL"`, masking an interruption. Misleading subagent status is dangerous for automated pipelines that trust the success signal.

4. **[#25166 — Shell command stuck with "Waiting input" after completion](https://github.com/google-gemini/gemini-cli/issues/25166)** (P1, 3 👍) — After running trivial shell commands, the CLI hangs showing "Awaiting user input" even though the command finished. A core reliability issue impacting day-to-day agentic workflows.

5. **[#18811 — API Error: "Request contains an invalid argument"](https://github.com/google-gemini/gemini-cli/issues/18811)** (16 comments, closed-stale) — Long-running thread where automatic npm updates followed by API errors left users unable to use the CLI. Closed as stale, but the 16 comments show it was a widespread blocker during the 0.27→0.28 transition.

6. **[#21968 — Gemini does not use skills and sub-agents enough](https://github.com/google-gemini/gemini-cli/issues/21968)** (maintainer-only) — Anecdotal but widely relatable: the model ignores custom skills and sub-agents unless explicitly instructed, even for highly relevant tasks (e.g., gradle/git skills). Points at a gap between agent capability and autonomous tool adoption.

7. **[#22093 — Subagents running without permission since v0.33.0](https://github.com/google-gemini/gemini-cli/issues/22093)** — Users report subagents activating despite agents being disabled in all configs. A trust-boundary regression that raises security concerns about permission enforcement.

8. **[#21983 — Browser subagent fails in Wayland](https://github.com/google-gemini/gemini-cli/issues/21983)** (P1, agent/browser) — Browser agent crashes or fails on Wayland sessions, limiting Linux desktop users. Still open with need-retesting status.

9. **[#26522 — Auto Memory retries low-signal sessions indefinitely](https://github.com/google-gemini/gemini-cli/issues/26522)** (maintainer-only) — Background extraction agent only marks sessions as processed on successful `read_file`, so low-signal sessions surface repeatedly. Wasteful and noisy for Auto Memory users.

10. **[#27573 — "You have a LOOOONG way to go before this piece of shit is ready"](https://github.com/google-gemini/gemini-cli/issues/27573)** (2 👍, closed) — A raw sentiment data point. While not constructive, the 2 upvotes on a hostile bug report reflect residual frustration among a subset of users around stability and polish.

## 4. Key PR Progress

1. **[#28803 — Add Claude Sonnet 4.5 and Opus 4.8 model definitions](https://github.com/google-gemini/gemini-cli/pull/28803)** (size/xl, closed) — Adds `claude-sonnet-4-5` / `claude-opus-4-8` constants, alias resolution, and fallback policy chains. A notable expansion of Gemini CLI's multi-model support.

2. **[#28790 — Context-aware silent retries and availability TTL for capacity errors](https://github.com/google-gemini/gemini-cli/pull/28790)** (P1, closed, shipped in today's nightly) — The fix for the critical capacity regression (#28761). Unattended runs get backoff retries; availability TTL prevents repeated hammering of down models.

3. **[#28740 — Prevent supply chain RCE in eval-pr workflows](https://github.com/google-gemini/gemini-cli/pull/28740)** (area/security, size/l, open) — Splits the eval workflow into a secure `pull_request` build step and a trusted `workflow_run` execution step, preventing untrusted fork code from executing in a privileged `pull_request_target` context (#28336). Critical CI/CD hardening.

4. **[#28778 — Upgrade simple-git to 3.32.3 (CVE-2026-28292)](https://github.com/google-gemini/gemini-cli/pull/28778)** (open) — Trivy-scanned **CRITICAL** vulnerability in `simple-git` 3.28.0. The dependency underpins git operations, so this should be a priority merge.

5. **[#28801 — Rollback entire multi-turn request on cancellation/abort](https://github.com/google-gemini/gemini-cli/pull/28801)** (size/m, closed) — Previously, cancelling a multi-turn prompt left chat history with dangling tool-response turns, causing the next "Hello" to fail or behave abnormally. Now rolls back cleanly — likely fixes several "stuck" reports.

6. **[#28699 — Enforce authentication and stop checkpoint path traversal in A2A server](https://github.com/google-gemini/gemini-cli/pull/28699)** (size/l, open) — Custom REST routes (`/tasks`, `/executeCommand`, etc.) bypassed the configured `UserBuilder` entirely, accepting unauthenticated requests; also fixes checkpoint path traversal. Important security boundary fix.

7. **[#28596 — Add `--list-all-sessions` option](https://github.com/google-gemini/gemini-cli/pull/28596)** (size/l, closed) — New CLI flag listing sessions across all registered workspaces, grouped by workspace path. A quality-of-life win for users juggling multiple projects.

8. **[#28597 — Load environment variables before resolving settings placeholders](https://github.com/google-gemini/gemini-cli/pull/28597)** (size/l, closed) — Fixes a load-order race where settings were expanded against `process.env` before local `.env` files were loaded, causing placeholder resolution failures.

9. **[#28718 — Record usage already received when a stream is aborted](https://github.com/google-gemini/gemini-cli/pull/28718)** (size/m, open) — Usage metadata was only flushed on the success path; aborted streams lost billing/token data despite chunks being tracked. Fixes cost accounting for interrupted generations.

10. **[#27588 — Support WSL2 clipboard image paste](https://github.com/google-gemini/gemini-cli/pull/27588)** (size/l, open) — Detects WSL environments and uses PowerShell interop to read the Windows clipboard for image paste. Fixes #22274 and brings WSL feature parity with native Windows.

## 5. Feature Request Trends

- **Auto Memory hardening** — A clear cluster of maintainer-tracked issues around the background memory extraction system: stop retrying low-signal sessions ([#26522](https://github.com/google-gemini/gemini-cli/issues/26522)), quarantine invalid patches instead of silently skipping ([#26523](https://github.com/google-gemini/gemini-cli/issues/26523)), deterministic secret redaction before content hits model context ([#26525](https://github.com/google-gemini/gemini-cli/issues/26525)), and fixing alias-vs-ID confusion in GCP project references ([#27911](https://github.com/google-gemini/gemini-cli/issues/27911)).
- **Browser agent resilience** — Multiple requests for session takeover/lock recovery ([#22232](https://github.com/google-gemini/gemini-cli/issues/22232)), honoring `settings.json` overrides like `maxTurns` ([#22267](https://github.com/google-gemini/gemini-cli/issues/22267)), and Wayland support ([#21983](https://github.com/google-gemini/gemini-cli/issues/21983)).
- **Smarter tool/context management** — Epic-level interest in AST-aware file reads/search/mapping ([#22745](https://github.com/google-gemini/gemini-cli/issues/22745)) to reduce token noise, plus handling of 400 errors when >128 tools are active ([#24246](https://github.com/google-gemini/gemini-cli/issues/24246)).
- **Higher-quality evals infrastructure** — The component-level evaluations epic ([#24353](https://github.com/google-gemini/gemini-cli/issues/24353)) and new behavioral eval coverage for `read_many_files`, internal docs, and MCP resources ([#28804](https://github.com/google-gemini/gemini-cli/pull/28804)) show investment in measurable agent quality.
- **Cross-platform parity** — WSL2 clipboard paste ([#27588](https://github.com/google-gemini/gemini-cli/pull/27588)) and Windows ripgrep EFTYPE fixes ([#25378](https://github.com/google-gemini/gemini-cli/pull/25378)) reflect ongoing demand for first-class Windows/WSL support.
- **Multi-model breadth** — Adding Claude Sonnet 4.5 / Opus 4.8 definitions ([#28803](https://github.com/google-gemini/gemini-cli/pull/28803)) suggests Gemini CLI is positioning as an aggregate agentic frontend, not just a Gemini-only tool.

## 6. Developer Pain Points

- **Model capacity instability** — Gemini-3 Flash unavailability ([#19883](https://github.com/google-gemini/gemini-cli/issues/19883)) has been a recurring blocker; the new retry/TTL logic ([#28790](https://github.com/google-gemini/gemini-cli/pull/28790)) is a direct response, but users still report "keeps thinking" hangs ([#28528](https://github.com/google-gemini/gemini-cli/issues/28528)).
- **Input and terminal staleness** — The dead Enter key ([#23297](https://github.com/google-gemini/gemini-cli/issues/23297)), shell commands stuck on "Waiting input" ([#25166](https://github.com/google-gemini/gemini-cli/issues/25166)), and stale session IDs after `/clear` ([#27280](https://github.com/google-gemini/gemini-cli/issues/27280)) all erode trust in interactive reliability.
- **Subagent trust and control** — Users are uneasy about subagents running without permission ([#22093](https://github.com/google-gemini/gemini-cli/issues/22093)), misreporting success after MAX_TURNS ([#22323](https://github.com/google-gemini/gemini-cli/issues/22323)), and not using configured skills ([#21968](https://github.com/google-gemini/gemini-cli/issues/21968)). The theme: agents need better guardrails and honest status reporting.
- **Destructive command risk** — Requests for the agent to avoid `git reset`/`--force` and dangerous resource mutations ([#22672](https://github.com/google-gemini/gemini-cli/issues/22672)) highlight production-safety concerns as the tool is used beyond toy projects.
- **Security maintenance debt** — Critical CVEs in core dependencies (`simple-git` [#28778](https://github.com/google-gemini/gemini-cli/pull/28778)), EOL Node 20 runtimes ([#28603](https://github.com/google-gemini/gemini-cli/pull/28603)), unauthenticated A2A routes ([#28699](https://github.com/google-gemini/gemini-cli/pull/28699)), and CI supply-chain RCE ([#28740](https://github.com/google-gemini/gemini-cli/pull/28740)) show the project is working through a backlog of security hardening — an encouraging sign, but also evidence the attack surface is growing.
- **Session/memory hygiene** — Race conditions between cleanup and `--list-sessions` ([#27273](https://github.com/google-gemini/gemini-cli/issues/27273)), stale logger session IDs ([#27280](https://github.com/google-gemini/gemini-cli/issues/27280)), and Auto Memory inefficiencies ([#26522](https://github.com/google-gemini/gemini-cli/issues/26522)) indicate that session lifecycle management is a recurring source of subtle bugs.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-08-14

## 1. Today's Highlights

Two patch releases (v1.0.80-0, v1.0.80-1) shipped, adding an `--enable-mcp-server` runtime flag and clearer multi-client session indicators in TUI mode. Community attention remains concentrated on MCP reliability — OAuth regressions, transient-failure handling, and concurrent token refresh — alongside recurring complaints that per-agent model/effort configuration is silently ignored by the CLI. A fresh wave of ~15 triage issues in the last 24h signals a growing bug backlog, particularly around remote MCP servers and session state management.

## 2. Releases

- **v1.0.80-1** — Patch release; general fixes and changes.
- **v1.0.80-0** — Added `--enable-mcp-server` to re-enable MCP servers disabled in settings for the current run. Shared sessions now display a connection count (e.g., "2 clients") when another client attaches, both in `--ahp` mode and the Sessions tab.

## 3. Hot Issues

1. **Custom agent frontmatter lacks reasoning-effort support** — [[#2904](https://github.com/github/copilot-cli/issues/2904)] (20👍, 6 comments) — the most-upvoted open feature request. Users want per-agent `effort` in `.agent.md` files; today only the global `--effort` flag exists.
2. **Atlassian MCP OAuth regression on 1.0.79** — [[#4480](https://github.com/github/copilot-cli/issues/4480)] — OAuth discovery now fails with "Incompatible authorization server (RFC 8414 §3.3)" against `mcp.atlassian.com`; reported as a regression from 1.0.71, breaking remote MCP users.
3. **Concurrent MCP tool calls during token refresh cancel each other** — [[#4472](https://github.com/github/copilot-cli/issues/4472)] — each expired-token call independently spawns a new `rmcp::service` for refresh, causing in-flight calls to die with "transport closed before the tool responded."
4. **Transient 5xx on MCP `initialize` hard-fails the server for the whole session** — [[#4466](https://github.com/github/copilot-cli/issues/4466)] — a single 502 at startup disables the server for the session's lifetime, with no retry/backoff.
5. **Explicit code-review subagent model override is ignored** — [[#4462](https://github.com/github/copilot-cli/issues/4462)] — built-in `code-review` configured for `gpt-5.6-luna` launches with `gpt-5.6-sol`; feeds the broader "model config silently ignored" pattern.
6. **Long-running sessions exhaust remote event storage** — [[#4467](https://github.com/github/copilot-cli/issues/4467)] — sessions appear inactive or cancelled even though CLI processes remain alive and may still be working.
7. **`--server --stdio` leaks extension-host processes on Windows** — [[#4468](https://github.com/github/copilot-cli/issues/4468)] — four child processes per session, never terminated when the session ends, accumulating until the server exits.
8. **Orphaned `permission.requested` event replays on every session resume** — [[#4469](https://github.com/github/copilot-cli/issues/4469)] — a directory-access prompt from a 10-day-old bash command reappears at each startup; approving or denying doesn't dismiss it.
9. **Stop button deletes the entire session and prompt** — [[#4477](https://github.com/github/copilot-cli/issues/4477)] — interrupting agent execution loses the original prompt and any edits, with no recovery path.
10. **claude-haiku-4.5 fails with reasoning effort 'medium'** — [[#4473](https://github.com/github/copilot-cli/issues/4473)] — a recurrence of earlier report [[#4345](https://github.com/github/copilot-cli/issues/4345)], indicating the sub-agent routing bug persists despite the prior issue being closed.

## 4. Key PR Progress

Only one PR was updated in the last 24h. PR activity is otherwise quiet:

- **docs: document proposed custom-agent effort frontmatter (Option A)** — [[#4476](https://github.com/github/copilot-cli/pull/4476)] (CLOSED) — proposes a dedicated `effort` frontmatter field for custom agents, parallel to `model`, addressing #2904. Adds a "Custom Agents" reference section to the README covering existing fields (`name`, `description`, `model`) and the proposed new one. Closed without merge, suggesting maintainers may favor a different design or want more discussion before committing.

## 5. Feature Request Trends

- **Per-agent model/effort configuration parity**: The strongest signal — [[#2904](https://github.com/github/copilot-cli/issues/2904)] and [[#2133](https://github.com/github/copilot-cli/issues/2133)] — users want `.agent.md` frontmatter to support reasoning effort and VS Code-compatible `model` array syntax.
- **Session observability and management**: Requests to list currently running sessions with id/status (like Claude Code's `agents --json`) [[#4470](https://github.com/github/copilot-cli/issues/4470)] and to restore archived chats [[#4474](https://github.com/github/copilot-cli/issues/4474)] show demand for better session lifecycle tooling.
- **MCP resilience**: Repeated asks for retries/backoff on transient failures [[#4466](https://github.com/github/copilot-cli/issues/4466)], correct concurrent token refresh [[#4472](https://github.com/github/copilot-cli/issues/4472)], and case-insensitive server-name collision detection [[#4478](https://github.com/github/copilot-cli/issues/4478)].
- **Permissions UX polish**: Clarify the ambiguous "No copilot-instructions.md found" startup message [[#4475](https://github.com/github/copilot-cli/issues/4475)] and make `allowed_directories` actually suppress path prompts [[#4482](https://github.com/github/copilot-cli/issues/4482)].

## 6. Developer Pain Points

- **Silent config override**: Model/effort settings are ignored or replaced — explore tool hardcodes `gpt-5.4-mini` [[#3954](https://github.com/github/copilot-cli/issues/3954)], code-review override ignored [[#4462](https://github.com/github/copilot-cli/issues/4462)], claude-haiku effort mismatch [[#4473](https://github.com/github/copilot-cli/issues/4473)]. This erodes trust in configuration.
- **MCP integration fragility**: OAuth regressions [[#4480](https://github.com/github/copilot-cli/issues/4480)], Entra refresh scope bugs (AADSTS70011) [[#4464](https://github.com/github/copilot-cli/issues/4464)], Windows socket error 10013 [[#4463](https://github.com/github/copilot-cli/issues/4463)], and no retry for transient failures [[#4466](https://github.com/github/copilot-cli/issues/4466)] — remote MCP remains a high-friction area.
- **Session/state data loss**: Stopping actions drops sessions [[#4477](https://github.com/github/copilot-cli/issues/4477)], archived chats vanish with no restore UI [[#4474](https://github.com/github/copilot-cli/issues/4474)], and orphaned permission events replay indefinitely [[#4469](https://github.com/github/copilot-cli/issues/4469)].
- **Windows-specific bugs**: OAuth socket failures [[#4463](https://github.com/github/copilot-cli/issues/4463)] and extension-host process leaks [[#4468](https://github.com/github/copilot-cli/issues/4468)].
- **False positives in safety filters**: A CAPI 422 flagged ordinary branch creation and revert work as a cybersecurity risk [[#4479](https://github.com/github/copilot-cli/issues/4479)], which can block legitimate workflows.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-08-14

## Today's Highlights
No releases or pull requests landed in the last 24 hours, keeping the focus on three active issues. The long-running Memory System feature request ([#1283](https://github.com/MoonshotAI/kimi-cli/issues/1283)) continues to draw heavy discussion with 38 comments, while two reliability bugs are raising community concern: a silent streaming hang in ACP mode ([#2598](https://github.com/MoonshotAI/kimi-cli/issues/2598)) and a catastrophic runaway generation of 88k gibberish tokens in a single step ([#2597](https://github.com/MoonshotAI/kimi-cli/issues/2597)). The overall signal: the community wants persistent memory, but also demands stricter guardrails and streaming robustness.

## Releases
None. No new versions were published in the last 24 hours.

## Hot Issues
Only 3 issues were active/updated in the window; all are covered below.

1. **[Feature Request: Memory System — Persistent context across sessions (#1283)](https://github.com/MoonshotAI/kimi-cli/issues/1283)** — Open since 2026-02-27, updated 2026-08-13, 38 comments. Requests a comprehensive memory layer with both automatic memory (AI-managed notes) and manual memory (user-defined instructions) for remembering project patterns and preferences across sessions. *Why it matters:* the highest-engagement thread in the window; nearly six months of sustained discussion signals strong, unresolved demand for stateful, context-aware CLI behavior.

2. **[ACP/print streaming response hangs silently (#2598)](https://github.com/MoonshotAI/kimi-cli/issues/2598)** — In `kimi acp` mode (v0.34.0), streaming can hang after all content deltas arrive: terminal frames (`[DONE]`/finish) never come, there is no error, and no idle-timeout config exists, so `session/prompt` waits indefinitely. Sending a new message silently replaces the hung turn, and the already-streamed reply is never written to `wire.jsonl` (no `content.part`, no `usage.record`). The author notes the 0.31.1 fix only covered the Esc scenario. *Why it matters:* silent hangs break automation and ACP-based tooling; the missing wire logs make post-mortem debugging impossible.

3. **[Runaway garbled generation — 88k tokens of gibberish in one LLM step (#2597)](https://github.com/MoonshotAI/kimi-cli/issues/2597)** — During a normal interactive session, a single step ran for ~53 minutes and emitted 88,114 tokens of incoherent output: random multilingual fragments, broken Markdown, and endless repetitions. *Why it matters:* multi-hour runaway generations pose direct cost risk, destroy user trust, and point to missing output guardrails/repetition detection in the request layer.

## Key PR Progress
No pull requests were created or updated in the last 24 hours.

## Feature Request Trends
- **Persistent memory / cross-session context** is the standout request ([#1283](https://github.com/MoonshotAI/kimi-cli/issues/1283)), with sustained engagement across nearly six months — covering both AI-managed notes and explicit user-defined instructions.
- **Streaming lifecycle control**: the ACP hang report ([#2598](https://github.com/MoonshotAI/kimi-cli/issues/2598)) implies demand for idle timeouts, reliable finish-frame handling, and guaranteed wire-format logging for long-lived sessions.
- **Generation guardrails**: the runaway output issue ([#2597](https://github.com/MoonshotAI/kimi-cli/issues/2597)) points toward a need for configurable output caps and runaway/repetition detection at the CLI level.

## Developer Pain Points
- **Silent, unrecoverable hangs**: no idle-timeout option, no error surface, and a hung turn that gets silently replaced by the next message — leaving developers with no signal and no recovery path in ACP/print mode.
- **Lost observability data**: when a hung turn is replaced, streamed content never reaches `wire.jsonl`, breaking audit trails and any tooling that depends on wire logs.
- **Runaway cost and noise**: single steps consuming 53 minutes and 88k tokens of garbage are a direct cost liability and a credibility problem for unattended/CI workflows.
- **Narrow patch coverage**: the 0.31.1 fix referenced in [#2598](https://github.com/MoonshotAI/kimi-cli/issues/2598) only addressed the Esc scenario, leaving other hang paths open — a recurring frustration pattern for users relying on ACP integrations.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-08-14

## Today's Highlights
The last 24 hours brought no new releases, but a concentrated performance push for the V2 branch — a series of lazy-loading and dependency-removal PRs from @kitlangton — alongside three new security reports (curl|bash upgrade, webfetch SSRF, silent context pruning). Community attention remains fixed on the long-running "Preparing write..." stall ([#11112](https://github.com/anomalyco/opencode/issues/11112), 78 comments) and the strongly-supported request to preserve the legacy layout ([#37012](https://github.com/anomalyco/opencode/issues/37012), 41 👍).

## Hot Issues
1. [#11112 — Always stuck at "Preparing write..."](https://github.com/anomalyco/opencode/issues/11112) — The most-engaged open issue (78 comments, 46 👍), unresolved since January. Models repeatedly abort and retry writing plan files, entering an endless retry loop. Growing frustration signals a core reliability problem in the write path.
2. [#37012 — [FEATURE] Keep legacy layout option](https://github.com/anomalyco/opencode/issues/37012) — 37 comments, 41 👍. Users argue the old layout offered one-window access to everything; the new version requires deep navigation. Strong signal that the redesign has power-user pushback.
3. [#41470 — "Copied to clipboard" doesn't work in VSCode Server/Docker](https://github.com/anomalyco/opencode/issues/41470) — UI reports success but nothing reaches the system clipboard in containerized environments. Misleading feedback makes this more than a cosmetic bug.
4. [#33027 — MCP tools connected but not exposed to agent](https://github.com/anomalyco/opencode/issues/33027) — The `pdfrag` MCP server connects and advertises 6 tools via `tools/list`, yet the agent's tool list is empty. MCP visibility remains a recurring blind spot.
5. [#42434 — [SECURITY] `opencode upgrade` pipes remote script to bash with no integrity check](https://github.com/anomalyco/opencode/issues/42434) — Classic curl|bash supply-chain/TOCTOU risk, rated Medium. Expect pressure for checksum verification or a safer install path.
6. [#42421 — [2.0] todowrite/todoread TODO tools missing in V2](https://github.com/anomalyco/opencode/issues/42421) — The native TODO list tools that existed in V1 are absent from the V2 runtime catalog, removing a capability models relied on for task tracking.
7. [#35402 — Zen: byte-identical glm-5.2 requests reroute to cold-cache providers](https://github.com/anomalyco/opencode/issues/35402) — 8 👍 in a short time. Users want `stickyProvider` for multi-sourced Zen models to avoid cold-cache re-billing and slow prefills on identical requests.
8. [#40516 — Desktop app fails to load providers/models/MCP on startup](https://github.com/anomalyco/opencode/issues/40516) — ~80% failure rate across an organization; regression from v1.18.5 through v1.18.13, with v1.18.4 working. Downgrade is the only workaround so far.
9. [#42376 — Startup blocks 10–30s on models.dev/api.json fetch when cache is stale](https://github.com/anomalyco/opencode/issues/42376) — A synchronous ~3.6MB network fetch on boot with a 5-minute TTL turns slow connections into 10–30 second startup stalls.
10. [#42083 — GitHub Copilot provider shows zero models](https://github.com/anomalyco/opencode/issues/42083) — Auth succeeds via CLI, but the provider never appears in the model picker; all models report `model_picker_enabled: false`.

## Key PR Progress
1. [#40427 — Experimental v2 performance improvements (beta)](https://github.com/anomalyco/opencode/pull/40427) — Reduced v2-only perf series: faster session route loading and lower baseline overhead. Rebased to drop dev-era legacy/compat changes.
2. [#42468 — perf(core): load MCP client lazily](https://github.com/anomalyco/opencode/pull/42468) — Keeps the MCP SDK out of startup evaluation when no MCP servers are enabled; configured servers still connect eagerly.
3. [#42469 — refactor(core): defer webfetch HTML parsing](https://github.com/anomalyco/opencode/pull/42469) — `htmlparser2` and `entities` load only when an HTML response needs text/Markdown conversion, shrinking the eager WebFetch registration graph.
4. [#42470 — refactor(cli): load semver lazily for update checks](https://github.com/anomalyco/opencode/pull/42470) — The `semver` import is paid only when a candidate version is actually being compared; local installs and disabled checks skip it entirely.
5. [#42458 — perf(util): load npm config lazily](https://github.com/anomalyco/opencode/pull/42458) — Defers `@npmcli/config` initialization until npm configuration is actually requested, removing it from startup paths.
6. [#42474 — fix(tui): refresh terminal size before resize](https://github.com/anomalyco/opencode/pull/42474) — Fixes stale `process.stdout.columns/rows` on SIGWINCH in affected PTY hosts where Bun can leave dimensions outdated; closes #42225.
7. [#42471 — fix(tui): scope unread updates to focused terminal](https://github.com/anomalyco/opencode/pull/42471) — Prevents a blurred backup TUI from marking sessions unread or clearing unread markers just because it has a different tab selected.
8. [#42456 — fix(tui): isolate tab scroll state](https://github.com/anomalyco/opencode/pull/42456) — Each session tab keeps its own transcript reading position under the `tab_scroll` experiment, fixing cross-tab scroll position leaks.
9. [#42466 — fix(tui): load local TUI plugins via SEA-safe runtime import](https://github.com/anomalyco/opencode/pull/42466) — Resolves `ERR_UNKNOWN_BUILTIN_MODULE` failures that prevented the Node SEA build from loading any local `plugins/tui/` plugin.
10. [#42475 — feat(app): add Hebrew locale](https://github.com/anomalyco/opencode/pull/42475) — Adds complete `he-IL` translations, registers locale detection, enables the existing RTL layout path, and includes plural-form coverage tests.

## Feature Request Trends
- **Preserve familiar UX**: Keep the legacy layout as an option ([#37012](https://github.com/anomalyco/opencode/issues/37012)) and per-tab scroll state ([#42456](https://github.com/anomalyco/opencode/pull/42456)) reflect demand for less disruptive navigation.
- **Localization expansion**: Hebrew support requested ([#42447](https://github.com/anomalyco/opencode/issues/42447)) and landed as a PR ([#42475](https://github.com/anomalyco/opencode/pull/42475)) — a sign of a growing non-English user base.
- **Routing transparency and control**: Sticky routing for multi-sourced Zen models ([#35402](https://github.com/anomalyco/opencode/issues/35402)), preserving the actual response `modelId` ([#42420](https://github.com/anomalyco/opencode/issues/42420)), and exposing LLM response headers to plugins ([#26091](https://github.com/anomalyco/opencode/issues/26091)) all push for more visibility into which model/route actually served a request.
- **V2 feature parity**: Restoring TODO tools in the V2 runtime ([#42421](https://github.com/anomalyco/opencode/issues/42421)) and maintaining coexistence with V1 databases ([#42260](https://github.com/anomalyco/opencode/issues/42260)) are the clearest migration-era asks.

## Developer Pain Points
- **Rate-limit churn**: `FreeUsageLimitError` 429s are the single most recurring complaint ([#42029](https://github.com/anomalyco/opencode/issues/42029), [#42074](https://github.com/anomalyco/opencode/issues/42074), [#42449](https://github.com/anomalyco/opencode/issues/42449), [#42452](https://github.com/anomalyco/opencode/issues/42452)) — free-tier models get rate-limited instantly, on every request, or immediately after cooldown, often with no prior usage.
- **V2 migration friction**: Schema mutation breaking V1 coexistence ([#42260](https://github.com/anomalyco/opencode/issues/42260)), missing TODO tools ([#42421](https://github.com/anomalyco/opencode/issues/42421)), compaction failures past the context window ([#42448](https://github.com/anomalyco/opencode/issues/42448)), and Windows console flashes on subprocess spawn ([#42440](https://github.com/anomalyco/opencode/issues/42440)) are slowing adoption of the 2.0 builds.
- **Slow cold starts and dependency bloat**: The 10–30s blocking startup fetch ([#42376](https://github.com/anomalyco/opencode/issues/42376)) plus eager imports pushed the community (and maintainers) toward lazy-loading everything — MCP SDK, semver, npm config, HTML parser.
- **Security and integrity concerns**: Three reports in one day — unsigned curl|bash upgrade ([#42434](https://github.com/anomalyco/opencode/issues/42434)), webfetch SSRF to loopback/private addresses ([#42435](https://github.com/anomalyco/opencode/issues/42435)), and context pruning silently dropping instruction-bearing content ([#42437](https://github.com/anomalyco/opencode/issues/42437)) — indicate users are now auditing supply-chain and prompt-integrity risks seriously.
- **Packaging and install oddities**: "opencode deletes itself" was filed twice in a single day ([#42411](https://github.com/anomalyco/opencode/issues/42411), [#42441](https://github.com/anomalyco/opencode/issues/42441)) — the globally installed pnpm binary disappears after a day of use, which is both alarming and difficult to diagnose.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-08-14

## Today's Highlights

No releases landed in the last 24 hours, but the project saw meaningful progress on TUI terminal hygiene, extension flag handling, and Gemini provider compatibility. The most urgent open issue remains auto-compaction failing to trigger before a provider rejects oversized contexts ([#6879](https://github.com/earendil-works/pi/issues/6879)). Several terminal-breaking bugs were also addressed by PR [#8082](https://github.com/earendil-works/pi/pull/8082), including large-session resume flooding and SIGINT leaving the terminal in raw mode.

## Releases

None in the last 24 hours.

## Hot Issues

1. **[#6879 — Auto-compaction never triggers after context grows past 100%](https://github.com/earendil-works/pi/issues/6879)**  
   19 comments, 17 👍. A long agentic turn climbed past the compaction threshold and only compacted after the API rejected the request at 373k tokens. Community is asking for compaction checks after every agent turn.

2. **[#8029 — Very slow performance on moving in prompt editor](https://github.com/earendil-works/pi/issues/8029)**  
   7 comments, in progress. With ~7000 lines in the prompt box, a single arrow-up press took 1650ms. PR [#8066](https://github.com/earendil-works/pi/pull/8066) adds visual-line caching to fix this.

3. **[#7829 — Invalid settings.json silently ignored; misleading “bash not found” on Windows](https://github.com/earendil-works/pi/issues/7829)**  
   5 comments. Unescaped backslashes in `shellPath` produce invalid JSON, which is silently ignored and surfaces as a confusing “bash not found” error. Developers want explicit config validation.

4. **[#7791 — Global Undici dispatcher inherits 16 KiB maxHeaderSize](https://github.com/earendil-works/pi/issues/7791)**  
   6 comments, closed. Pi’s global `fetch` rejects valid responses with `UND_ERR_HEADERS_OVERFLOW` because `maxHeaderSize` is not configured. Important for API responses with large headers.

5. **[#7779 — Allow trusted Unix users to share PI_CODING_AGENT_DIR](https://github.com/earendil-works/pi/issues/7779)**  
   5 comments. `auth.json` and `models-store.json` are written with mode `0600`, so multi-user setups cannot share Pi state.

6. **[#7761 — TUI copy shows “Copied!” but clipboard stays empty on VTE terminals](https://github.com/earendil-works/pi/issues/7761)**  
   3 comments. `copySelectionToClipboard()` writes an escape-sequence copy that GNOME Terminal / VTE does not honor, so the “Copied!” indicator is misleading.

7. **[#7689 — Handle end_turn: false for codex](https://github.com/earendil-works/pi/issues/7689)**  
   3 comments, 2 👍. The Codex backend can emit `end_turn: false` on `response.completed`; Pi must respect that signal for correct multi-turn behavior.

8. **[#8017 — Support Anthropic refusal server side fallback](https://github.com/earendil-works/pi/issues/8017)**  
   2 comments. Compaction can fail when Anthropic’s classifier refuses a request; Pi should implement the documented server-side fallback path.

9. **[#8031 — openai-codex mid-stream termination restarts the entire response](https://github.com/earendil-works/pi/issues/8031)**  
   2 comments. When a long Codex response fails after partial output, Pi retries the whole request and duplicates already-streamed text.

10. **[#8079 — Resuming a large session floods the terminal with history replay](https://github.com/earendil-works/pi/issues/8079)**  
   1 comment, fixed by [#8082](https://github.com/earendil-works/pi/pull/8082). A 759 KB session produced 844,716 bytes of output over ~18s on resume. Related SIGINT/raw-mode issue [#8080](https://github.com/earendil-works/pi/issues/8080) was also addressed.

## Key PR Progress

1. **[#8086 — fix(ai): fall back to legacy Gemini tool schema](https://github.com/earendil-works/pi/pull/8086)**  
   Closed. Some generativelanguage endpoints reject `parametersJsonSchema`; this falls back to the legacy `Schema` message.

2. **[#8082 — fix(tui): render only visible viewport; restore terminal on SIGINT](https://github.com/earendil-works/pi/pull/8082)**  
   Closed. Fixes both the large-session resume flood and the broken terminal state after `kill -INT`, restoring echo, cursor, and keyboard protocol.

3. **[#8084 — fix(coding-agent): don’t swallow prompt after boolean extension flags](https://github.com/earendil-works/pi/pull/8084)**  
   Closed. Boolean flags like `--plan` were consuming the next CLI argument as their value, causing `pi -p --plan "prompt"` to start with no messages.

4. **[#8085 — feat(tui): cancel active mouse selection with escape](https://github.com/earendil-works/pi/pull/8085)**  
   Open. Pressing `Escape` before releasing the mouse now clears the selection without copying — standard text-editor behavior.

5. **[#8070 — fix(coding-agent): validate extension flag defaults](https://github.com/earendil-works/pi/pull/8070)**  
   Open. Models `registerFlag()` options as a discriminated union, preventing boolean flags from having truthy string defaults.

6. **[#8066 — fix(tui): add visual lines caching](https://github.com/earendil-works/pi/pull/8066)**  
   Open. Fixes [#8029](https://github.com/earendil-works/pi/issues/8029) by caching visual-line results and recomputing only when width or text changes.

7. **[#7984 — fix(coding-agent): update grok-mermaid to 0.2.3](https://github.com/earendil-works/pi/pull/7984)**  
   Open. Resolves [#7832](https://github.com/earendil-works/pi/issues/7832) and significantly improves mermaid rendering, with class support still pending.

8. **[#6216 — feat: Add Amazon Bedrock Mantle OpenAI Responses provider](https://github.com/earendil-works/pi/pull/6216)**  
   Open. Adds a new Bedrock Mantle provider using OpenAI’s Bedrock provider package; supersedes an earlier PR.

9. **[#8067 — Use APP_NAME in user-facing messages](https://github.com/earendil-works/pi/pull/8067)**  
   Closed. Fixes rebranded Pi builds showing hardcoded names; output is unchanged for Pi itself.

10. **[#8057 — fix(examples): todo renderResult returns undefined on validation errors](https://github.com/earendil-works/pi/pull/8057)**  
    Open. A failed `todo` schema validation previously crashed the TUI because `renderResult` returned `undefined`.

## Feature Request Trends

- **Provider/model ecosystem expansion**: Users want broader provider coverage and correct handling of provider-specific behaviors — Grok 4.6 catalog support ([#8046](https://github.com/earendil-works/pi/issues/8046)), Bedrock Mantle ([#6216](https://github.com/earendil-works/pi/pull/6216)), Kimi cached-token accounting ([#8075](https://github.com/earendil-works/pi/issues/8075)), Anthropic refusal fallback ([#8017](https://github.com/earendil-works/pi/issues/8017)), and Codex `end_turn` handling ([#7689](https://github.com/earendil-works/pi/issues/7689)).
- **TUI and terminal UX hardening**: Better clipboard behavior on VTE terminals ([#7761](https://github.com/earendil-works/pi/issues/7761)), graceful signal restoration ([#8080](https://github.com/earendil-works/pi/issues/8080)), mouse-selection cancellation ([#8085](https://github.com/earendil-works/pi/pull/8085)), and first-class localization/i18n support ([#8077](https://github.com/earendil-works/pi/issues/8077)).
- **Performance and startup budgets**: Requests for jcode-comparable startup time ([#7739](https://github.com/earendil-works/pi/issues/7739)), shared jiti module caching for faster extension loading ([#4254](https://github.com/earendil-works/pi/issues/4254)), and prompt-editor performance fixes ([#8066](https://github.com/earendil-works/pi/pull/8066)).
- **Extension developer ergonomics**: More control and validation for extensions — AbortSignal propagation through package resolution ([#8088](https://github.com/earendil-works/pi/issues/8088)), per-tool opt-out of argument validation ([#7607](https://github.com/earendil-works/pi/issues/7607)), and extension flag default validation ([#8070](https://github.com/earendil-works/pi/pull/8070)).

## Developer Pain Points

- **Context management is fragile**: Auto-compaction can silently fail ([#6879](https://github.com/earendil-works/pi/issues/6879)), mid-stream retries duplicate output ([#8031](https://github.com/earendil-works/pi/issues/8031)), and token usage accounting is incomplete for some providers ([#8075](https://github.com/earendil-works/pi/issues/8075)).
- **Terminal state can be left broken**: SIGINT/exit does not always restore raw mode, keyboard protocol, or window title ([#8080](https://github.com/earendil-works/pi/issues/8080), [#5065](https://github.com/earendil-works/pi/issues/5065)); clipboard feedback is sometimes misleading ([#7761](https://github.com/earendil-works/pi/issues/7761)).
- **Silent/misleading failures**: Invalid config is ignored until a confusing downstream error appears ([#7829](https://github.com/earendil-works/pi/issues/7829)); unknown slash commands are silently sent to the model ([#8081](https://github.com/earendil-works/pi/issues/8081)); extension overrides receive synthetic source metadata ([#8078](https://github.com/earendil-works/pi/issues/8078)).
- **Large-session performance still hurts**: Large prompt buffers cause multi-second keypress latency ([#8029](https://github.com/earendil-works/pi/issues/8029)), resume replays entire histories ([#8079](https://github.com/earendil-works/pi/issues/8079)), and `/resume` progress counts diverge from actual sessions ([#7960](https://github.com/earendil-works/pi/issues/7960)).

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-08-14

## Today's Highlights

Stable release **v0.21.11** landed with Agent Plugins v1 and the new `/coordinate` command for native multi-agent workflows with read-only teammates. Nightly and preview releases add web-shell workspace file uploads plus standalone session target fixes. Community attention is concentrated on Windows CLI regressions, Vertex AI auth/model-config issues, and the rapidly progressing multi-agent fleet roadmap.

## Releases

- **v0.21.11-nightly.20260814.45c2e73080** and **v0.21.12-preview.1**
  - `fix(web-shell): preserve standalone session target` ([#9038](https://github.com/QwenLM/qwen-code/pull/9038))
  - `feat(web-shell): support workspace file uploads`

- **v0.21.11 stable**
  - Added support for **Agent Plugins v1** to extend agent capabilities ([#8834](https://github.com/QwenLM/qwen-code/pull/8834))
  - Enabled native multi-agent workflows with read-only teammates via `/coordinate` ([#8804](https://github.com/QwenLM/qwen-code/pull/8804))
  - SWE-bench Verified E2E validation was marked **QUARANTINED** (`swe-bench/swe-bench-verified@2`, 500/500 completed, 0 resolved)

## Hot Issues

1. **RFC: Native coordination for independent Qwen sessions** ([#8718](https://github.com/QwenLM/qwen-code/issues/8718)) — P2, closed, 9 comments. Central design document for the multi-agent fleet work: leader dispatch, worker observation, structured results. High architectural discussion.

2. **Large session restore timeout loses current session** ([#8678](https://github.com/QwenLM/qwen-code/issues/8678)) — P1, open, 8 comments. Daemon restore timeouts must be safe and observable; PR1 was already merged, showing strong maintainer attention.

3. **Windows standalone installer fails when `Get-FileHash` cannot be resolved** ([#7118](https://github.com/QwenLM/qwen-code/issues/7118)) — P2, closed, 7 comments, 3 👍. Blocks Windows standalone updates; community-upvoted install friction.

4. **Gemini 2.5 models unusable on Vertex AI: `thinkingLevel` always sent** ([#9019](https://github.com/QwenLM/qwen-code/issues/9019)) — P2, open, 5 comments. Every request fails with a 400 before tool calls/streaming; no workaround yet.

5. **Keyless Vertex AI not inferred from the environment** ([#9025](https://github.com/QwenLM/qwen-code/issues/9025)) — P2, open, 5 comments. Headless ADC runs exit at startup because `vertex-ai` auth type is never selected.

6. **Ctrl+V paste unresponsive in CLI on Windows since 0.21.x** ([#9061](https://github.com/QwenLM/qwen-code/issues/9061)) — P1, open, 4 comments. Clipboard paste regression; downgrading to 0.21.0 restores functionality.

7. **Track `activeWork` and background Agent recovery** ([#8586](https://github.com/QwenLM/qwen-code/issues/8586)) — P2, open, 4 comments. Adds deep daemon health for background agents that outlive foreground prompts.

8. **Web Shell: redesign Channel policy, session, and workspace management** ([#8845](https://github.com/QwenLM/qwen-code/issues/8845)) — open, 4 comments. Wants consistent channel access, session isolation, and workspace ownership across adapters.

9. **`record_artifact` succeeds without verifying `workspacePath`** ([#9083](https://github.com/QwenLM/qwen-code/issues/9083)) — P2, open, 3 comments. Artifact cards report `missing` while the file exists on disk, confusing model and user.

10. **`read_file` sends non-image file to model API based only on `.png` extension** ([#9088](https://github.com/QwenLM/qwen-code/issues/9088)) — P2, open, 3 comments. A UTF-8 JSON payload named `.png` causes a raw 400 and aborts the whole turn.

## Key PR Progress

1. **fix(cli): prevent dialog clipping in short terminals** ([#9040](https://github.com/QwenLM/qwen-code/pull/9040)) — Open. Makes `/statusline` and `/skills` dialogs usable under constrained terminal heights.

2. **feat(telemetry): trace main agent invocations** ([#9107](https://github.com/QwenLM/qwen-code/pull/9107)) — Open. Adds tracing for main agent runs, improving observability.

3. **feat: consolidate Local Control into one daemon-owned implementation** ([#9106](https://github.com/QwenLM/qwen-code/pull/9106)) — Open. Removes the duplicated two-language Local Control implementation and unifies security models.

4. **fix(review): harden the pipeline against four live-run failures** ([#9086](https://github.com/QwenLM/qwen-code/pull/9086)) — Open. Fixes four `/review` defects observed against real PRs with qwen3.8-max.

5. **fix(web-shell): surface loop detection turn errors** ([#8853](https://github.com/QwenLM/qwen-code/pull/8853)) — Open. Converts foreground tool-loop stops into structured turn errors while preserving failed tool cards.

6. **feat(cli): add audio bridge for attachments** ([#8332](https://github.com/QwenLM/qwen-code/pull/8332)) — Open. Transcribes audio attachments via batch voice model when the primary model lacks audio support.

7. **feat(serve): share one Chrome bridge across sessions via multi-client `/cdp` tunnel** ([#8740](https://github.com/QwenLM/qwen-code/pull/8740)) — Open. Enables multi-client CDP tunneling so sessions share one Chrome extension bridge.

8. **feat(daemon): guard cross-worktree Git mutations** ([#8687](https://github.com/QwenLM/qwen-code/pull/8687)) — Open. Blocks model-issued Git commands that escape the session’s working tree via `-C`, `--work-tree`, or `--git-dir`.

9. **fix(desktop): open remaining external links through the shell opener** ([#9111](https://github.com/QwenLM/qwen-code/pull/9111)) — Closed. Fixes silently dropped `target="_blank"` requests in the desktop webview.

10. **feat(autofix): escalate a non-converging diff to a maintainer handoff** ([#9104](https://github.com/QwenLM/qwen-code/pull/9104)) — Open. Stops indefinite autofix patching by escalating diffs that keep growing past budget.

## Feature Request Trends

- **Native multi-agent fleet** is the dominant roadmap theme: umbrella RFC in [#8718](https://github.com/QwenLM/qwen-code/issues/8718), with staged delivery across [#8840](https://github.com/QwenLM/qwen-code/issues/8840), [#8841](https://github.com/QwenLM/qwen-code/issues/8841), [#8842](https://github.com/QwenLM/qwen-code/issues/8842), and [#8843](https://github.com/QwenLM/qwen-code/issues/8843). `/coordinate` in v0.21.11 is the first user-visible piece.
- **Omni multimodal experiment** continues as a protected-branch effort: policy pipelines, memory recall, provenance, and GC are tracked in [#8197](https://github.com/QwenLM/qwen-code/issues/8197) with stage issues [#8186](https://github.com/QwenLM/qwen-code/issues/8186)–[#8190](https://github.com/QwenLM/qwen-code/issues/8190).
- **Web Shell / Desktop management** requests are increasing: channel/session/workspace redesign ([#8845](https://github.com/QwenLM/qwen-code/issues/8845)) and reliable external-link/MCP OAuth handling ([#9108](https://github.com/QwenLM/qwen-code/issues/9108)).
- **Memory and daemon lifecycle** are recurring asks: pinned memory protected from `/dream` consolidation ([#6801](https://github.com/QwenLM/qwen-code/issues/6801)) and deep daemon health/recovery for background agents ([#8586](https://github.com/QwenLM/qwen-code/issues/8586)).

## Developer Pain Points

- **Windows-specific regressions** keep surfacing: installer `Get-FileHash` failure ([#7118](https://github.com/QwenLM/qwen-code/issues/7118)), Ctrl+V paste regression ([#9061](https://github.com/QwenLM/qwen-code/issues/9061)), and Desktop opening a visible runtime Terminal ([#9043](https://github.com/QwenLM/qwen-code/issues/9043)).
- **Vertex AI / Gemini 2.5 friction** is blocking users: unsupported `thinkingLevel` ([#9019](https://github.com/QwenLM/qwen-code/issues/9019)) and keyless ADC not inferred from the environment ([#9025](https://github.com/QwenLM/qwen-code/issues/9025)).
- **File/workspace path inconsistencies** cause misleading tool results: `record_artifact` reports success for missing files ([#9083](https://github.com/QwenLM/qwen-code/issues/9083)) and `read_file` trusts extensions over content ([#9088](https://github.com/QwenLM/qwen-code/issues/9088)).
- **Session/daemon reliability** remains a recurring theme: restore timeout safety ([#8678](https://github.com/QwenLM/qwen-code/issues/8678)), background agent recovery ([#8586](https://github.com/QwenLM/qwen-code/issues/8586)), compression side-query context overflow ([#7960](https://github.com/QwenLM/qwen-code/issues/7960)), and autofix/review cancellation loops ([#8888](https://github.com/QwenLM/qwen-code/issues/8888)).

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-08-14

**Note:** The project is now branded **CodeWhale**; issue/PR links point to the `Hmbown/CodeWhale` tracker.

## Today's Highlights

v0.9.7 formalizes the CodeWhale rebrand and deprecates the legacy `deepseek-tui` npm package. The v0.9.8 pipeline is already active: maintainers are pushing first-class DS4 local setup, model-guardian Auto-Review, and agent schema simplification. Community contributions landed MCP pagination compliance, engine stream filtering, and a maintainer-harvested Windows PiP feature.

## Releases

- **[v0.9.7](https://github.com/Hmbown/CodeWhale/releases/tag/v0.9.7)** — CodeWhale is now the public product from Shannon Labs. The `codewhale` command, npm package, and release-asset names are lowercase technical identifiers. The legacy `deepseek-tui` npm package is deprecated and will receive no further releases; users on legacy v0.8.x `deepseek` / `d...` flows should plan migration to `codewhale`.

## Hot Issues

- [#5324 agent tool: simplify the 32-field schema so models stop erroring on it](https://github.com/Hmbown/CodeWhale/issues/5324) — Maintainer-opened reliability issue: one schema with 32 properties, 0 required fields, 8 actions, and alias handling is too brittle for models. This is now driving schema-slice PRs.
- [#1004 feat(commands): /dryrun — preview the next chat completion request without sending it](https://github.com/Hmbown/CodeWhale/issues/1004) — Developers iterating on long DeepSeek V4 Pro turns want to inspect the actual request before spending tokens. Strong demand for transparency in tool/context assembly.
- [#2369 CodeWhale Config Paths Fragmented Across OS and Cygwin (Plus Silent Migration Bug)](https://github.com/Hmbown/CodeWhale/issues/2369) — Config/secret resolution differs on Windows and Cygwin, and a legacy migration can silently misplace state. Configuration trust issue with 7 comments.
- [#1425 执行大文本处理工程后会话中断卡死](https://github.com/Hmbown/CodeWhale/issues/1425) — Analyzing a 3M-character novel spawned 10 subagents, then `agent_wait` timed out and the session hung. Key multi-agent orchestration failure.
- [#1482 nVidia nim not work](https://github.com/Hmbown/CodeWhale/issues/1482) — Calling NVIDIA NIM returns `404 page not found`; doctor output also shows an old 0.8.x path. Provider integration remains a pain point.
- [#998 文案展示不全](https://github.com/Hmbown/CodeWhale/issues/998) — Chinese UI text is truncated; users request hover tooltips for full display. 11 comments, one of the most-discussed localization issues.
- [#5359 Four TUI tests read machine state (~/.codewhale, display probe) and fail deterministically on a dev box while CI stays green](https://github.com/Hmbown/CodeWhale/issues/5359) — Test suite depends on real user state/display; CI is green but local dev is red. Directly violates developer-workflow expectations.
- [#5340 doctor: `first-run` / `update checkpoint` permanently stuck on `needs action` after upgrade](https://github.com/Hmbown/CodeWhale/issues/5340) — After v0.9.4 → v0.9.6 upgrade, the setup checklist can never be marked complete. Setup/doctor reliability regression.
- [#5374 The writing its weird (the agent)](https://github.com/Hmbown/CodeWhale/issues/5374) — New macOS report: agent output text is visibly corrupted while writing. Likely rendering/encoding bug; significant visibility for TUI correctness.
- [#5316 EPIC-005: CodeWhale TUI Crate Decomposition (Umbrella)](https://github.com/Hmbown/CodeWhale/issues/5316) — Architecture epic tracking the TUI crate split, with every sub-EPIC and feature reporting into it. Important for long-term maintainability.

## Key PR Progress

- [#5365 feat(provider): add first-class local DS4 setup](https://github.com/Hmbown/CodeWhale/pull/5365) — Makes DwarfStar a first-class local DeepSeek route: `/setup provider ds4`, provider-picker shortcut, and prefilled keyless loopback preset reusing the OpenAI-compatible transport.
- [#5353 feat(tui): model guardian tier for Auto-Review (v0.9.8)](https://github.com/Hmbown/CodeWhale/pull/5353) — Auto-Review becomes two-layer: deterministic non-bypassable floor plus a one-shot model guardian fallback instead of silent blocking.
- [#5369 fix(tools): degrade Moonshot schemas instead of refusing conditionals](https://github.com/Hmbown/CodeWhale/pull/5369) — Schema-focused slice related to #5324; improves model-facing schema compatibility without mixing in runtime behavior changes.
- [#5368 fix(tui): confine unguarded tests to the isolated state root](https://github.com/Hmbown/CodeWhale/pull/5368) — Fixes #5359 with three independent mechanisms preventing tests from reading real `~/.codewhale` or the display probe.
- [#5339 fix(engine): suppress child-owned shell completions](https://github.com/Hmbown/CodeWhale/pull/5339) — Filters child-owned background shell completion events out of the parent model stream and adds regression coverage. Closes #5325.
- [#5358 feat(engine): auto-review denial rationale + turn circuit breaker](https://github.com/Hmbown/CodeWhale/pull/5358) — First P0 slice of #5352: denial rationale is now model-visible, avoiding repeated rephrasing of the same denied action until the budget runs out.
- [#5336 fix(mcp): omit nextCursor when there are no further pages](https://github.com/Hmbown/CodeWhale/pull/5336) — Fixes #5335; removes invalid `nextCursor: null` responses so strict MCP clients like Claude Code accept the shape.
- [#5333 feat(tui): pin host terminal window as an always-on-top mini window](https://github.com/Hmbown/CodeWhale/pull/5333) — Maintainer harvest of community PR [#5318](https://github.com/Hmbown/CodeWhale/pull/5318); adds Windows `/pin` PiP mode and restores original window size on toggle.
- [#5364 feat(tui): render markdown blockquotes with a quote rail](https://github.com/Hmbown/CodeWhale/pull/5364) — Adds proper blockquote rendering in the TUI transcript instead of showing raw `>` markers; supports nesting, inline formatting, and selection-copy.
- [#5354 chore(ci): refresh the source-structure budget on main](https://github.com/Hmbown/CodeWhale/pull/5354) — Fixes a broken CI Lint gate caused by an unreported budget change, unblocking open contributor PRs.

## Feature Request Trends

- **First-class provider/local onboarding** — Users want DS4/DwarfStar keyless setup, NVIDIA NIM fixes, FreeBSD support, and automatic profile failover on rate limits instead of hand-rolled custom-provider configuration.
- **Richer TUI input and rendering controls** — Multi-line input mode, custom send hotkeys, configurable keymaps, Windows Terminal default launch, hover tooltips for truncated text, and better output/thinking previews recur across issues.
- **Agent transparency and control** — `/dryrun` request preview, `tui_help` for slash commands, universal Cancel/Pause/Resume hooks, simplified agent schemas, and explicit shell/language selection for tool execution.
- **Remote workbench / state portability** — Unified config/secret path handling across OS and Cygwin, a US-first Cloudflare/AWS/Telegram lane, and a more coherent CNB/Lighthouse/Feishu remote-workbench flow.

## Developer Pain Points

- **CJK and text rendering defects** — Truncated Chinese UI text, garbled Chinese output in agent streams, and corrupted agent writing on macOS indicate encoding/rendering issues are still common.
- **Provider API friction** — NVIDIA NIM 404s, custom DS4 setup, and rate-limit throttling make provider switching harder than it should be.
- **Long-running agent instability** — Sessions hang after `agent_wait` timeouts, VS Code can crash under YOLO agent runs, and large report merges are slow with low cache hit rates.
- **Environment/config split-brain** — Divergent config paths, silent migration bugs, doctor checkpoints stuck on “needs action,” and tests that only fail on real dev machines all erode trust in local reproducibility.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/boom7sss/agents-radar).*