# AI CLI Tools Community Digest 2026-08-01

> Generated: 2026-08-01 03:32 UTC | Tools covered: 9

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
**Period:** 2026-08-01 community digest cycle

---

## 1. Ecosystem Overview

The AI CLI tools space has shifted from "chat in a terminal" to full agentic development platforms, with every major vendor shipping background agents, sandboxed execution, MCP/plugin systems, and desktop/IDE companions. The competitive battleground is no longer model quality alone — it is session durability (resume, branching, cross-device sync), safety guardrails (sandboxing, approval flows, destructive-command prevention), and cost efficiency (prompt caching, delta streaming, context deduplication). Incumbent tools (Claude Code, Codex, Copilot CLI) are managing large communities and regression risk on mature codebases, while challengers (Pi, OpenCode, Qwen Code, CodeWhale) are iterating aggressively on architecture and ergonomics. Notably, Windows/WSL reliability and subagent behavior transparency emerged as the two most consistent failure clusters across all nine tools. No vendor has solved the cross-surface session continuity problem yet — it is the clearest white-space opportunity.

---

## 2. Activity Comparison

| Tool | Hot Issues | PRs Active/Updated | Releases (24h) | Release Cadence Signal |
|---|---|---|---|---|
| **Claude Code** | 10 | 6 | 0 | No release; large issue backlog, high-severity safety/entitlement defects |
| **OpenAI Codex** | 10 | 10 | 3 (rust-v0.147.0 alphas) | Fast-moving alpha stream; protocol-level changes landing daily |
| **Gemini CLI** | 10 | 10 | 3 (nightly + preview + stable) | 3-track train; hotfixes cherry-picked across all tracks |
| **Copilot CLI** | 10 | 2 (non-core) | 1 (v1.0.78-0) | Shipping but PR volume low; regression-heavy community reports |
| **Kimi Code CLI** | 4 | 1 | 0 | Low activity; long-running feature requests dominate |
| **OpenCode** | 10 | 10 | 0 | High PR velocity, no formal release; feature-focused |
| **Pi** | 10 | 10 | 0 | High PR velocity on reliability/architecture; no release |
| **Qwen Code** | 10 | 10 | 1 (v0.21.2) | Steady shipping; RFC-driven daemon/session work |
| **CodeWhale (DeepSeek TUI)** | 8 | 10 | 1 (v0.9.3) | Rebrand + release train; smaller but active community |

> **Note:** PR counts reflect the digest's "Key PR Progress" sections, not full repository-wide totals. Issue counts likewise are curated "hot" lists, not raw totals.

---

## 3. Shared Feature Directions

Requirements appearing across multiple communities:

| Direction | Tools | Specific Needs |
|---|---|---|
| **Cross-surface session continuity** | Claude Code (#28791), Kimi (#1282), Codex (WSL remote #31786), OpenCode (desktop parity) | Start in CLI, resume on desktop/mobile/browser without context loss; remote control of local sessions; conversation-history sync |
| **Persistent memory & project context** | Claude Code (#80751, #82056), Gemini (#26522, #26525), Kimi (#1283), Qwen (auto-skill curator #7846) | Automatic user-defined memory, visibility into memory load state, privacy-safe redaction, low-signal retry avoidance |
| **Session branching & lifecycle controls** | Qwen (#8271, #8274, #6579), Copilot CLI (resume fragility #4251, #3183), Codex (thread sections #36380) | Fork from any checkpoint, optional Git worktree isolation, session-scoped model switches, robust resume |
| **Destructive-command safety / sandboxing** | Claude Code (#82165 `rm -rf /*`), Gemini (#19873), CodeWhale (#5005), Copilot CLI (`allowDevToolCaches`) | Path allowlists for external outputs, sandboxed native shell, kill-switch for autonomous destructive commands |
| **Tool-call & provider protocol robustness** | Kimi (#2572), Qwen (#8207, #8039), OpenCode (#18131, #29142), Gemini (thought_signature #28607), CodeWhale (#5002) | Normalize double-encoded JSON, recover from schema-drift tool calls, preserve Gemini thought signatures, better tool-registration diagnostics |
| **Prompt-cache stability & token efficiency** | OpenCode (#23595, #16848), Qwen (#6721), Pi (#7290, #7394), Codex (#28316) | Stable system-prefix placement, don't invalidate cache on deferred tool resolution, delta-only JSON streaming, avoid re-sending base64 payloads |
| **Agent transparency & control** | Gemini (#22323, #22598), Claude Code (#74113), Qwen (#7835), Copilot CLI (#4318) | Subagent trajectory visibility, honest completion signals, deadlock-free subagent questions, autopilot must respect narrowed user scope |
| **Configurable approval/auto-resolve behavior** | Codex (#28969, PR #36410), Copilot CLI (/permissions, ask_user #2109) | Disable/tune 60-second auto-resolve, expose explicit blocking vs. non-blocking user input, structured clarification questions |
| **Enterprise/org governance** | Copilot CLI (#3909), Codex (#35006) | Server-managed config pushdown, MCP OAuth lifecycle reliability, SSO reauthentication |

---

## 4. Differentiation Analysis

| Tool | Distinct Focus | Target User | Technical Approach |
|---|---|---|---|
| **Claude Code** | Model entitlement & desktop/CLI parity; safety incident scrutiny (autonomous `rm -rf`) | Enterprise Claude Max subscribers; multi-surface users | Python/Node CLI + VS Code + desktop; subscription entitlement-gated models (Fable 5); background agents |
| **OpenAI Codex** | Fast protocol evolution; remote control (WSL→Android); sandboxed V8; MCP elicitation review | Cutting-edge adopters tolerant of alpha churn | Rust rewrite, `rust-v0.147.0` alphas; explicit `isBlocking` protocol semantics; `--approve-for-me`; thread-section APIs |
| **Gemini CLI** | Reliability engineering on a 3-track release train; subagent trust; memory privacy | Google-ecosystem developers; long-session power users | Nightly/preview/stable branches with cherry-picks; capacity-exhaustion treated as terminal; AST-aware navigation EPICs; macOS seatbelt sandbox |
| **Copilot CLI** | GitHub-native automation; ACP protocol; sandbox/build-cache ergonomics | GitHub-centric teams; enterprise orgs needing central policy | `/permissions` approval modes; `closeSession` in ACP; `allowDevToolCaches`; server-managed config gap |
| **Kimi Code CLI** | Minimal-surface, focused CLI; long-tail feature requests | Moonshot/Kimi users | Small team; feature-request-driven (#1282 remote, #1283 memory); provider-compat fixes (JSON unwrapping) |
| **OpenCode** | Agent-loop ergonomics; plugin/TUI extensibility; air-gap support | OSS/self-hosted users; TUI enthusiasts | `OPENCODE_AIRGAP` kill switch; background shell jobs; `file_unchanged` dedup stubs; shared TSX plugin runtime; prompt-cache stabilization flags |
| **Pi** | Server/session architecture; compaction reliability; performance linearity | Tinkerers and CLI purists; long-agent-session users | SQLite linearization, per-session queues, durable server sessions, delta-only JSON streaming, baseline x64 CPU retargeting |
| **Qwen Code** | Daemon multi-tenancy; session branching; skills lifecycle; Web Shell/desktop | Qwen users; multi-tenant serve deployments; Chinese + global devs | RFC-driven (`qwen serve` workspaces); memory-budget tracking, per-child ACP limits; auto-skill curator; fork-from-any-response |
| **CodeWhale** | Rebrand momentum; DeepSeek V4 Flash; TUI polish (math rendering, Windows input) | DeepSeek users; TUI aesthetic enthusiasts | 72-commit release train; canonical tools; LaTeX rendering; NSIS/PATH fixes; sandbox path allowlists |

---

## 5. Community Momentum & Maturity

**High momentum / fast iteration:**
- **OpenAI Codex** — 3 alpha releases in 24 hours and 10 PRs, including protocol-level changes (`isBlocking`, `delegationAckFiller`, `--approve-for-me`). Highest single-issue engagement this cycle (186 👍 on auto-resolve config).
- **Gemini CLI** — The only tool shipping on three tracks simultaneously (nightly/preview/stable), with disciplined cherry-picking. Reliability fixes are reaching stable within 24 hours — a mature release process.
- **Pi** — 10 PRs and a sweeping session-storage refactor with no release yet. Community is deeply technical; issues read like engineering specs (O(n²) analysis, `Intl.Segmenter` root-causing).
- **Qwen Code** — 10 PRs + v0.21.2 + RFC closure (31 comments). Clear architectural direction (daemon workspaces, session branching, skills).
- **OpenCode** — 10 PRs, feature-dense (airgap, background jobs, cache stabilization), but no release cadence signal.
- **CodeWhale** — Rebrand and v0.9.3 in one cycle; 10 PRs; issues are small in count but high-signal.

**Mature but issue-heavy:**
- **Claude Code** — No release, massive issue traffic (51 comments on the Fable 5 entitlement defect, 111 👍 on sync feature). Community is large and vocal; severity skews toward entitlement/billing and safety incidents.
- **Copilot CLI** — Shipping v1.0.78-0, but only 2 non-core PRs and a notable regression pattern (plan mode, autopilot `task_complete`, OOM on resume). Signals a stabilization phase rather than feature velocity.

**Lower activity / slower cadence:**
- **Kimi Code CLI** — 4 issues, 1 PR. Community is small; the two marquee feature requests (remote control, memory) mirror what larger tools already have, suggesting a follower position.

---

## 6. Trend Signals

1. **Reliability is the new feature.** Across Gemini, Pi, Copilot CLI, and Claude Code, the top-pain issues are not missing features but broken fundamentals: hangs on capacity exhaustion, compaction stalling, session-resume OOM, silent entitlement blocks, and false success reports from subagents. Decision-makers should weight stability and rollback speed heavily in tool selection.

2. **Cross-surface continuity is the next battleground.** CLI ↔ desktop ↔ mobile sync is the top feature request at Claude Code (111 👍) and Kimi; Codex and Qwen are building the underlying session/thread infrastructure. No tool ships a complete solution yet — this is the clearest near-term differentiator.

3. **Safety is becoming a measurable engineering discipline.** The Claude Code `rm -rf /*` incident (#82165) is a watershed: an autonomous agent ran a catastrophic command, and the safety classifier blocked attempts to kill it. Expect stricter sandbox defaults, path allowlists, and explicit approval controls (`--approve-for-me`, `/permissions`, `isBlocking`) to become table stakes.

4. **Windows/WSL remains the universal weak spot.** GPU-process crashes (Claude Code, Codex), WSL Git misdetection (Codex), ConPTY duplication (Qwen), MSIX install corruption (Claude Code), and PATH truncation (CodeWhale) all surfaced this cycle. Teams with significant Windows-WSL populations should demand explicit Windows CI/test coverage.

5. **Token economics are driving architecture.** Prompt-cache stability (OpenCode, Qwen), delta-only JSON streaming (Pi), avoiding base64 re-sends (Codex), and `file_unchanged` stubs (OpenCode) all attack the same cost problem from different angles. Long-session performance — not raw token price — is becoming the cost metric users care about.

6. **Agent transparency is a trust crisis.** Subagents reporting GOAL success after max-turns interruptions (Gemini #22323), background agents going idle without final reports (Claude Code #74113), and autopilot overriding explicit user constraints (Copilot CLI #4318) all erode confidence in autonomous completion signals. Tools that make agent trajectories auditable and completion signals honest will win long-session and production workloads.

7. **Protocol compatibility is the hidden tax.** Every major tool is paying it: double-encoded JSON (Kimi), XML/JSON tool-call drift (Qwen), missing `thought_signature` (Gemini), Rust/JS type conversion crashes (Copilot CLI), and tool-schema validation failures (OpenCode). Expect model-provider diversity to keep generating these issues, making adapter robustness and schema normalization (as Pi's #7419 does) a durable engineering investment.

---

*Report compiled from community digest data dated 2026-08-01. Issue/PR counts are curated highlights, not exhaustive repository metrics.*

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills — Community Highlights Report

*Data snapshot: 2026-08-01 | Source: github.com/anthropics/skills*

---

## 1. Top Skills Ranking

The five most-discussed PRs span new skill proposals and critical maintenance work on the `skill-creator` toolchain.

**1. skill-creator eval pipeline fix (PR #1298)** — *[github.com/anthropics/skills/pull/1298](https://github.com/anthropics/skills/pull/1298)*
The most-commented PR in the repository attacks the highest-severity bug in the ecosystem: `run_eval.py` reporting `recall=0%` for every skill description, meaning the description-optimization loop optimizes against pure noise. The fix installs the eval artifact as a real skill, and addresses Windows stream reading, trigger detection, and parallel workers. **Status:** Open. This PR is the direct convergence point of at least four other PRs (#1099, #1050, #1323, #1261) and issues #556, #1169, #1061 — making it the community's single most urgent bottleneck.

**2. document-typography skill (PR #514)** — *[github.com/anthropics/skills/pull/514](https://github.com/anthropics/skills/pull/514)*
A pragmatic quality-control skill preventing typographic defects in AI-generated documents: orphan word wrap (1–6 words spilling to the next line), widow paragraph headers stranded at page bottom, and numbering misalignment. Discussion centers on the universality of the problem ("these issues affect every document Claude generates") and the low cost of a mechanical rule set. **Status:** Open.

**3. PDF skill case-sensitivity fix (PR #538)** — *[github.com/anthropics/skills/pull/538](https://github.com/anthropics/skills/pull/538)*
Fixes 8 case-mismatched file references (`REFERENCE.md` → `reference.md`, `FORMS.md` → `forms.md`) in `skills/pdf/SKILL.md`. A small change with large practical impact — broken references on case-sensitive filesystems silently degrade the bundled PDF skill. Authored by Lubrsy706, who also contributes the docx `w:id` fix (#541) and YAML validation warning (#539). **Status:** Open.

**4. ODT skill (PR #486)** — *[github.com/anthropics/skills/pull/486](https://github.com/anthropics/skills/pull/486)*
Adds full OpenDocument support: create/fill `.odt`/`.ods` files, template filling, and ODT→HTML conversion, triggered by any mention of ODT/ODS/ODF/OpenDocument/LibreOffice. Addresses an office-format gap left by the existing docx/pdf skills. **Status:** Open, with a long discussion tail (last activity 2026-04-14).

**5. frontend-design skill revision (PR #210)** — *[github.com/anthropics/skills/pull/210](https://github.com/anthropics/skills/pull/210)*
A user-driven revision of the existing frontend-design skill aiming for clarity and actionability — ensuring every instruction is something Claude can actually execute in a single conversation, and that guidance is specific enough to steer behavior. Representative of a broader demand for skill-quality standards rather than new capabilities. **Status:** Open.

**6. Meta-analyzers for the marketplace (PR #83)** — *[github.com/anthropics/skills/pull/83](https://github.com/anthropics/skills/pull/83)*
Proposes two meta-skills: `skill-quality-analyzer` (evaluates structure, documentation, examples, and resources across five weighted dimensions) and `skill-security-analyzer`. Early signal of the community self-regulating skill quality — the oldest PR in the top tier (created 2025-11-06) and still active. **Status:** Open.

---

## 2. Community Demand Trends

Distilled from the most-discussed Issues:

**Security & trust boundaries (Issue #492, 43 comments)** — *[github.com/anthropics/skills/issues/492](https://github.com/anthropics/skills/issues/492)*
The dominant concern: community skills distributed under the `anthropic/` namespace enable trust-boundary abuse, luring users into granting elevated permissions to non-official skills. This is the single most-commented issue in the repo and reflects a systemic anxiety as the skill ecosystem scales past what Anthropic can personally review.

**Reliability of the skill-development toolchain (Issues #556, #1169, #1061)** — *[github.com/anthropics/skills/issues/556](https://github.com/anthropics/skills/issues/556), [github.com/anthropics/skills/issues/1169](https://github.com/anthropics/skills/issues/1169), [github.com/anthropics/skills/issues/1061](https://github.com/anthropics/skills/issues/1061)*
A cluster of bugs — `claude -p` never triggering skills in eval, `recall=0%` on every iteration, Windows subprocess/encoding failures — all pointing at `skill-creator`'s eval loop being unreliable, especially on Windows. This is the ecosystem's critical path: creators cannot iterate on descriptions until the evaluator is trustworthy.

**Org-wide sharing & distribution (Issue #228, 16 comments, 👍8)** — *[github.com/anthropics/skills/issues/228](https://github.com/anthropics/skills/issues/228)*
The most-upvoted open feature request: skills should be shareable within organizations directly (shared library or share link) instead of manual `.skill` file downloads via Slack/Teams.

**Context-window efficiency of bundled skills (Issue #1487)** — *[github.com/anthropics/skills/issues/1487](https://github.com/anthropics/skills/issues/1487)*
The `claude-api` skill eagerly injects ~156k tokens in a single tool call, exhausting the context window. Indicates growing community scrutiny of skill size/token budget as a first-class quality metric.

**Quality-gate and governance meta-skills (Issues #412, #1385)** — *[github.com/anthropics/skills/issues/412](https://github.com/anthropics/skills/issues/412), [github.com/anthropics/skills/issues/1385](https://github.com/anthropics/skills/issues/1385)*
Proposals for agent-governance safety patterns (policy enforcement, threat detection, trust scoring, audit trails) and a three-gate reasoning quality pipeline (pre-task calibration → adversarial review → delivery verification). Corroborates the security/quality theme: the community wants skills that police AI output, not just produce it.

**Duplicate-content problem (Issue #189, 👍9)** — *[github.com/anthropics/skills/issues/189](https://github.com/anthropics/skills/issues/189)*
Installing both `document-skills` and `example-skills` plugins installs identical skills, wasting context window. A packaging/publishing hygiene issue gaining traction.

---

## 3. High-Potential Pending Skills

Active PRs not yet merged that are likely to land and meaningfully expand the ecosystem:

- **document-typography (PR #514)** — *[github.com/anthropics/skills/pull/514](https://github.com/anthropics/skills/pull/514)* — Office-document polish; one of the most-commented new-skill PRs.
- **ODT skill (PR #486)** — *[github.com/anthropics/skills/pull/486](https://github.com/anthropics/skills/pull/486)* — Completes the office-format triad (pdf/docx/odt).
- **testing-patterns skill (PR #723)** — *[github.com/anthropics/skills/pull/723](https://github.com/anthropics/skills/pull/723)* — Full-stack testing coverage: Testing Trophy model, AAA unit tests, React Testing Library, plus what *not* to test.
- **self-audit skill (PR #1367)** — *[github.com/anthropics/skills/pull/1367](https://github.com/anthropics/skills/pull/1367)* — Mechanical file-verification first, then a four-dimension reasoning audit ordered by damage severity; universal across projects and models.
- **plan-file-hygiene skill (PR #1479)** — *[github.com/anthropics/skills/pull/1479](https://github.com/anthropics/skills/pull/1479)* — Solves the accumulation of planning artifacts with no lifecycle; newest high-traffic proposal (created 2026-07-25).
- **color-expert skill (PR #1302)** — *[github.com/anthropics/skills/pull/1302](https://github.com/anthropics/skills/pull/1302)* — Deep color-science reference: ISCC-NBS/Munsell/XKCD/RAL naming systems and a "what to use when" color-space table.
- **pyxel retro-game skill (PR #525)** — *[github.com/anthropics/skills/pull/525](https://github.com/anthropics/skills/pull/525)* — Wraps the pyxel-mcp server for retro/pixel-art/8-bit game development; notable as the only MCP-integrated skill in the top tier.
- **skill-quality-analyzer + skill-security-analyzer (PR #83)** — *[github.com/anthropics/skills/pull/83](https://github.com/anthropics/skills/pull/83)* — The ecosystem's self-regulatory layer; long open, still relevant.

---

## 4. Skills Ecosystem Insight

The community's most concentrated demand is not new skill capabilities but **trustworthy, high-quality skill infrastructure** — fixing the broken evaluation loop, securing the trust boundary around community contributions, and enforcing quality/context-window standards — before net-new skills can be reliably built and distributed.

---

# Claude Code Community Digest — 2026-08-01

## Today’s Highlights

No new Claude Code release landed in the last 24 hours, so community attention centered on existing issues. The hottest thread remains the Fable 5 “usage credits required” failure on Max plans ([#79337](https://github.com/anthropics/claude-code/issues/79337), 51 comments), which is now confirmed in the VS Code extension as well ([#79441](https://github.com/anthropics/claude-code/issues/79441)). Separately, Windows desktop GPU crashes in the browser pane continue to generate multiple reports, while the most-upvoted feature request asks for CLI ↔ desktop conversation-history sync ([#28791](https://github.com/anthropics/claude-code/issues/28791), 111 👍).

## Releases

No new releases in the last 24 hours.

---

## Hot Issues

1. **Fable 5 blocked on Max plan with “usage credits required”**  
   [#79337](https://github.com/anthropics/claude-code/issues/79337) — Since Fable 5 became standard on Max, Claude Code refuses to run it and silently downgrades sessions to Opus 4.8. 51 comments and 20 👍 show this is a widespread entitlement/billing defect, not an isolated account issue.

2. **VS Code extension hits the same Fable 5 credit block**  
   [#79441](https://github.com/anthropics/claude-code/issues/79441) — A Max user is blocked from Fable 5 even with 20% of the weekly Fable allowance remaining. This confirms the problem is not limited to the terminal CLI.

3. **CLI and Claude Code desktop app cannot sync conversation history**  
   [#28791](https://github.com/anthropics/claude-code/issues/28791) — The most-upvoted feature request this cycle. Developers want to start a session in one surface and continue it in another without losing context.

4. **Claude Code Web cannot run `gh` CLI commands**  
   [#11139](https://github.com/anthropics/claude-code/issues/11139) — Permission-denied errors when using GitHub CLI commands in Claude Code Web. 28 comments and 31 👍 signal strong demand for full GitHub workflow support in the web environment.

5. **GPU process crash kills Claude Desktop and corrupts MSIX package**  
   [#81159](https://github.com/anthropics/claude-code/issues/81159) — Opus 5 performing an in-page browser action caused exit code `101457950` and corrupted the Windows MSIX install. High severity because recovery requires reinstalling the app.

6. **Browser pane crash reproduces on all Windows rendering paths**  
   [#81275](https://github.com/anthropics/claude-code/issues/81275) — Opening the in-app Browser pane crashes Claude Desktop with the same GPU exit code on Intel, NVIDIA, and WARP software rendering. That consistency makes it look systemic rather than driver-specific.

7. **Background agents idle without delivering their final report**  
   [#74113](https://github.com/anthropics/claude-code/issues/74113) — Agents frequently go idle before sending the final `SendMessage` report; a re-ping recovers it. This undermines trust in background agent completion signals.

8. **Session transcripts auto-delete after 30 days and are outside backup coverage**  
   [#83019](https://github.com/anthropics/claude-code/issues/83019) — Project history is stored in a default location not covered by typical backups, then silently removed. Developers are rightly concerned about permanent loss of session context.

9. **Default model in `settings.json` is not honored**  
   [#82466](https://github.com/anthropics/claude-code/issues/82466) — Even with `"model": "claude-fable-5[1m]"` set globally, sessions launch on a different model and `/model` does not reliably fix it.

10. **Catastrophic data loss: agent-built command expanded to `rm -rf /*`**  
    [#82165](https://github.com/anthropics/claude-code/issues/82165) — An autonomous Fable 5 session in WSL2 constructed a cache-clearing command that expanded to `rm -rf /*`, ran detached, and the safety classifier then blocked attempts to kill it. Severe safety incident worth close review.

---

## Key PR Progress

Only 6 PRs were updated in the last 24 hours. All are listed below.

1. **[#81540](https://github.com/anthropics/claude-code/pull/81540)** — *Closed.* Automated fix for the “Usage leak” bug reported in [#80705](https://github.com/anthropics/claude-code/issues/80705). Contributed by an Atlas automation with a stated $200 reward.

2. **[#17776](https://github.com/anthropics/claude-code/pull/17776)** — *Closed.* Adds a README for the `security-guidance` plugin, documenting all 9 security patterns it covers.

3. **[#82987](https://github.com/anthropics/claude-code/pull/82987)** — *Open.* Fixes CI cron failures, excludes PRs from scheduled jobs, and proposes an architectural fix for TUI input latency under high agent workloads ([#82984](https://github.com/anthropics/claude-code/issues/82984)).

4. **[#82981](https://github.com/anthropics/claude-code/pull/82981)** — *Open.* Automation-related PR titled “Claude/automatizar inventario insumos w4n98s”; no detailed description provided.

5. **[#82794](https://github.com/anthropics/claude-code/pull/82794)** — *Open.* Implements confidence scoring and a `--threshold` flag for the `code-review` plugin, reconciling documented behavior that was never implemented.

6. **[#39872](https://github.com/anthropics/claude-code/pull/39872)** — *Open.* Upgrades Node.js from version 20 to 24 in preparation for the upcoming LTS change.

---

## Feature Request Trends

- **Cross-surface session continuity**  
  The strongest signal is the request to sync conversation history between CLI and desktop ([#28791](https://github.com/anthropics/claude-code/issues/28791)). Developers increasingly use multiple surfaces and expect seamless handoff.

- **Smarter context and memory management**  
  Users want a pluggable context manager with intelligent retrieval ([#80751](https://github.com/anthropics/claude-code/issues/80751)) and visibility into whether auto-memory indexes loaded fully, partially, or not at all ([#82056](https://github.com/anthropics/claude-code/issues/82056)).

- **Cost-aware interaction improvements**  
  A recurring theme is reducing token cost and latency: surfacing Claude’s just-authored text for approval without a second model pass ([#77134](https://github.com/anthropics/claude-code/issues/77134)) was explicitly framed around mobile/remote workflows.

- **Toolchain correctness**  
  The Bash tool should run under `bash`, not the user’s login shell (`zsh`), to match the semantics of generated shell snippets ([#74746](https://github.com/anthropics/claude-code/issues/74746)).

---

## Developer Pain Points

- **Fable 5 entitlement failures on Max plans**  
  Multiple reports describe incorrect “usage credits required” blocks, silent fallback to Opus 4.8, and missed user-notification promises ([#79337](https://github.com/anthropics/claude-code/issues/79337), [#79441](https://github.com/anthropics/claude-code/issues/79441), [#82319](https://github.com/anthropics/claude-code/issues/82319), [#82466](https://github.com/anthropics/claude-code/issues/82466)).

- **Windows desktop instability around the browser feature**  
  Recurring GPU-process crashes with exit code `101457950`, including silent app termination, MSIX corruption, and crash-dump-free failures ([#81159](https://github.com/anthropics/claude-code/issues/81159), [#81275](https://github.com/anthropics/claude-code/issues/81275), [#77768](https://github.com/anthropics/claude-code/issues/77768), [#82962](https://github.com/anthropics/claude-code/issues/82962)).

- **Destructive command safety gaps**  
  Several issues involve `rm -rf` execution without permission, bypassed auto-mode removal guards, or safety classifiers blocking recovery from a catastrophic command ([#75794](https://github.com/anthropics/claude-code/issues/75794), [#80830](https://github.com/anthropics/claude-code/issues/80830), [#81273](https://github.com/anthropics/claude-code/issues/81273), [#82165](https://github.com/anthropics/claude-code/issues/82165)).

- **Silent failures and misleading diagnostics**  
  Developers report commands exiting with no output in bash mode ([#83046](https://github.com/anthropics/claude-code/issues/83046)), session-limit messages that appear disproportionate to usage ([#83042](https://github.com/anthropics/claude-code/issues/83042)), misleading `gh` auth errors ([#79599](https://github.com/anthropics/claude-code/issues/79599)), and an env var that arms the refusal-fallback path instead of disabling it ([#83043](https://github.com/anthropics/claude-code/issues/83043)).

- **Silent data loss from session transcript expiry**  
  Transcripts stored outside backup coverage and auto-deleted after 30 days ([#83019](https://github.com/anthropics/claude-code/issues/83019)) are a quiet but serious risk for long-running projects.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-08-01

## Today’s Highlights

Codex shipped three new `rust-v0.147.0-alpha` releases in the last 24 hours, continuing the fast-moving alpha cadence. The community is especially focused on Windows/WSL reliability, rate-limit accounting, and context-efficiency issues — while the most-upvoted issue asking for a configurable auto-resolve timeout reached 186 👍. On the engineering side, PRs landed around explicit user-input blocking, realtime delegation controls, remote plugin search, sandboxed V8 for code mode, and a new `--approve-for-me` CLI flag.

## Releases

Three alpha releases were published under the `rust-v0.147.0` stream. No changelog details beyond version identifiers were provided in the data.

- [rust-v0.147.0-alpha.1.1](https://github.com/openai/codex/releases/tag/rust-v0.147.0-alpha.1.1)
- [rust-v0.147.0-alpha.3](https://github.com/openai/codex/releases/tag/rust-v0.147.0-alpha.3)
- [rust-v0.147.0-alpha.4](https://github.com/openai/codex/releases/tag/rust-v0.147.0-alpha.4)

---

## Hot Issues

Selected 10 notable issues from the last 24 hours of activity.

1. **[#28969 – Add setting to disable the auto-resolve in 60 seconds for questions](https://github.com/openai/codex/issues/28969)**  
   Users want control over Codex auto-resolving questions after 60 seconds, particularly for plan/config workflows.  
   **Reaction:** 64 comments, 186 👍 — the highest engagement in this cycle.

2. **[#35058 – Codex Diff crashes with “Oops, an error has occurred” in VS Code on macOS](https://github.com/openai/codex/issues/35058)**  
   Codex Diff is unusable after code edits, affecting review workflows across repositories.  
   **Reaction:** 42 comments, 109 👍.

3. **[#34133 – Windows: Page.captureScreenshot crashes GPU process after Code Integrity rejects vk_swiftshader.dll](https://github.com/openai/codex/issues/34133)**  
   In-app browser screenshots on Windows 10 can freeze or crash the desktop app due to a bundled DLL being rejected.  
   **Reaction:** 30 comments.

4. **[#35420 – Work/Codex stream disconnects when workspace is OneDrive-backed and OneDrive is degraded](https://github.com/openai/codex/issues/35420)**  
   Windows users with OneDrive-synced workspaces get repeated `stream disconnected before completion` failures.  
   **Reaction:** 20 comments.

5. **[#31786 – Remote control Windows WSL to Android not working at all](https://github.com/openai/codex/issues/31786)**  
   Pairing completes, but the phone stays stuck on “connecting,” blocking remote workflows.  
   **Reaction:** 17 comments.

6. **[#32323 – Codex PR integration fails in WSL with gh: Expected VAR_SIGN, actual: COLON](https://github.com/openai/codex/issues/32323)**  
   PR workflows via `gh` break in WSL, preventing Codex from reviewing or interacting with pull requests.  
   **Reaction:** 12 comments, 14 👍.

7. **[#35119 – Windows/WSL: App 26.721.3404 marks valid WSL repos as non-Git and reports “Git is unavailable”](https://github.com/openai/codex/issues/35119)**  
   A recent app-server update breaks Git detection for repositories on WSL ext4 filesystems.  
   **Reaction:** 11 comments, 11 👍.

8. **[#29645 – Codex App built-in image_gen times out after ~240s for ordinary card-art prompts](https://github.com/openai/codex/issues/29645)**  
   Long-running image generation requests fail while simple prompts succeed, hurting creative/design use cases.  
   **Reaction:** 10 comments.

9. **[#28316 – Codex should not resend large base64 image tool outputs in subsequent context](https://github.com/openai/codex/issues/28316)**  
   Large image payloads are persisted and re-sent in later requests, causing unbounded context growth and token waste.  
   **Reaction:** 10 comments.

10. **[#35871 – Windows sandbox: CreateProcessAsUserW fails with error 5 when resolved shell is MSIX pwsh](https://github.com/openai/codex/issues/35871)**  
   The sandbox cannot launch the Microsoft Store build of PowerShell 7 under a restricted token.  
    **Reaction:** 9 comments.

---

## Key PR Progress

Selected 10 important PRs updated in the last 24 hours.

1. **[#36413 – Add a realtime delegation acknowledgement control](https://github.com/openai/codex/pull/36413)**  
   Adds an optional `delegationAckFiller` field to `thread/realtime/start`, with explicit forwarding for realtime delegation acknowledgements.  
   **Status:** Closed.

2. **[#36410 – Make user input blocking behavior explicit](https://github.com/openai/codex/pull/36410)**  
   Adds a required `isBlocking` field to `request_user_input`, separating blocking behavior from `autoResolutionMs`. Directly related to issue #28969.  
   **Status:** Closed.

3. **[#36409 – Implement remote plugin search](https://github.com/openai/codex/pull/36409)**  
   Implements `plugin/search` by querying the remote plugin service, supporting scopes, pagination cursors, and feature gates.  
   **Status:** Closed.

4. **[#36389 – Enforce single-writer ownership for all thread histories](https://github.com/openai/codex/pull/36389)**  
   Extends the cross-process writer ownership guard to legacy thread histories, preventing concurrent write conflicts.  
   **Status:** Closed.

5. **[#36385 – Add acknowledged user message submission to core](https://github.com/openai/codex/pull/36385)**  
   Adds `submit_user_input_and_wait_for_admission`, exposing `UserMessageAdmission` through the core API for better message-steering control.  
   **Status:** Closed.

6. **[#36380 – Add thread section management APIs](https://github.com/openai/codex/pull/36380)**  
   Adds `threadSection/create`, `threadSection/update`, and `threadSection/delete` app-server methods with SQLite-backed persistence.  
   **Status:** Closed.

7. **[#36374 – Enable sandboxed V8 for code mode](https://github.com/openai/codex/pull/36374)**  
   Enables the `v8_enable_sandbox` feature for code mode, fixing Windows MSVC and package build artifact issues.  
   **Status:** Closed.

8. **[#36373 – Add an `--approve-for-me` CLI flag](https://github.com/openai/codex/pull/36373)**  
   Adds `--approve-for-me` to interactive and exec commands, routing approval requests through automatic review with the `workspace-write` sandbox.  
   **Status:** Closed.

9. **[#36365 – Add strict automatic review for MCP elicitations](https://github.com/openai/codex/pull/36365)**  
   Routes marked MCP approval requests through the configured automatic reviewer and fails closed without a canonical approval.  
   **Status:** Closed.

10. **[#31471 – (1/4) Extract apps cache logic into ConnectorRuntimeManager](https://github.com/openai/codex/pull/31471)**  
    Architectural refactor for faster connectors, scoping runtime context by account/user and caching tools per workspace.  
    **Status:** Open.

---

## Feature Request Trends

- **Configurable auto-resolve / approval behavior** — [#28969](https://github.com/openai/codex/issues/28969) is the clearest signal: users want to disable or tune Codex’s 60-second auto-resolution for questions. The related PR [#36410](https://github.com/openai/codex/pull/36410) suggests maintainers are already addressing the underlying protocol behavior.

- **Composable AGENTS.md files** — [#17401](https://github.com/openai/codex/issues/17401) requests an `@path/to/file.md` include directive so teams can build modular, maintainable instruction files.

- **Per-thread Auto mode routing** — [#34278](https://github.com/openai/codex/issues/34278) asks for a per-thread Auto mode that controls both model selection and reasoning effort atomically.

- **Enterprise MCP OAuth reliability** — [#35006](https://github.com/openai/codex/issues/35006) tracks the full MCP OAuth lifecycle, with a focus on enterprise SSO reauthentication and credential reliability.

---

## Developer Pain Points

- **Windows/WSL reliability remains the top recurring frustration.**  
  Users report WSL repos being misdetected as non-Git ([#35119](https://github.com/openai/codex/issues/35119)), broken PR integration in WSL ([#32323](https://github.com/openai/codex/issues/32323)), sandbox failures when using MSIX PowerShell ([#35871](https://github.com/openai/codex/issues/35871)), and broken WSL-to-Android remote control ([#31786](https://github.com/openai/codex/issues/31786)).

- **Rate-limit and quota accounting is a common source of confusion.**  
  Multiple users report incorrectly exhausted weekly quotas ([#36353](https://github.com/openai/codex/issues/36353), [#36369](https://github.com/openai/codex/issues/36369)), stuck usage meters ([#33216](https://github.com/openai/codex/issues/33216)), and heavy credit consumption during wait/status polling ([#35259](https://github.com/openai/codex/issues/35259)).

- **Context and token efficiency keep surfacing as pain points.**  
  Large base64 image outputs are re-sent in later context ([#28316](https://github.com/openai/codex/issues/28316)), and polling loops re-enter the model and consume credits ([#35259](https://github.com/openai/codex/issues/35259)).

- **Connectivity/stream stability needs attention.**  
  Users continue to hit WebSocket fallback and stream disconnects, especially on Windows/OneDrive setups ([#15014](https://github.com/openai/codex/issues/15014), [#35420](https://github.com/openai/codex/issues/35420)).

- **IDE/extension reliability gaps.**  
  The Codex Diff crash in VS Code ([#35058](https://github.com/openai/codex/issues/35058)) and dropped steer messages in the latest extension ([#36418](https://github.com/openai/codex/issues/36418)) are actively disrupting developer workflows.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-08-01

## Today's Highlights
Reliability is the dominant theme: the latest nightly build classifies capacity exhaustion as terminal to prevent retry hangs, and the InvalidStreamError fix is being cherry-picked into both preview and stable releases. Community attention remains focused on subagent trust issues—false GOAL-success reports, hangs, ignored configuration, and memory-system privacy.

## Releases
- [v0.55.0-nightly.20260801.gf47d6c6f7](https://github.com/google-gemini/gemini-cli/releases/tag/v0.55.0-nightly.20260801.gf47d6c6f7) — Fixes capacity exhaustion being treated as retryable, which caused hangs; also propagates `InvalidStreamError` details to the UI for better empty-response guidance.
- [v0.54.0-preview.1](https://github.com/google-gemini/gemini-cli/releases/tag/v0.54.0-preview.1) — Cherry-picks the InvalidStreamError fix into the preview release.
- [v0.53.1](https://github.com/google-gemini/gemini-cli/releases/tag/v0.53.1) — Cherry-picks the same fix into stable; the cherry-pick required conflict resolution.

## Hot Issues
- [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) — Subagent recovery after `MAX_TURNS` is reported as GOAL success, hiding interruptions. 12 comments, 2 👍. Critical because it makes agent failures look like successes and undermines trust in subagent reporting.
- [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) — Generalist agent hangs forever on simple tasks. 8 comments, 8 👍. One of the most-upvoted active issues; workaround is instructing the model not to use subagents.
- [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) — Shell command execution gets stuck with “Waiting input” after the command completes. 4 comments, 3 👍. Affects even trivial commands and interrupts normal workflows.
- [#26522](https://github.com/google-gemini/gemini-cli/issues/26522) — Auto Memory retries low-signal sessions indefinitely. 5 comments. Wasteful background extraction and a growing issue for memory-system reliability.
- [#26525](https://github.com/google-gemini/gemini-cli/issues/26525) — Add deterministic redaction and reduce Auto Memory logging. 4 comments. Privacy/security concern: transcript content reaches model context before redaction, and extractor logs can leak skill content.
- [#19873](https://github.com/google-gemini/gemini-cli/issues/19873) — Leverage model bash affinity via zero-dependency OS sandboxing and post-execution intent routing. 8 comments, 1 👍. A major architectural proposal that could reshape safety and capability trade-offs.
- [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) — Assess impact of AST-aware file reads, search, and mapping. 7 comments, 1 👍. Could reduce token noise and improve multi-file reasoning; spawning several related EPICs.
- [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) — Gemini does not use skills and sub-agents enough on its own. 6 comments. Community-reported gap between available custom skills and autonomous usage.
- [#24246](https://github.com/google-gemini/gemini-cli/issues/24246) — Gemini CLI encounters 400 error with more than 128 tools. 3 comments. Tool-scaling limitation that becomes more likely as MCP and custom tools grow.
- [#22598](https://github.com/google-gemini/gemini-cli/issues/22598) — Subagent trajectory should be visible via `/chat share`. 2 comments, 1 👍. Needed for better debugging, review, and evaluation of subagent behavior.

## Key PR Progress
- [#28613](https://github.com/google-gemini/gemini-cli/pull/28613) — Replace `console.error` with `debugLogger` in the SDK session. Small but aligns logging with project standards.
- [#28607](https://github.com/google-gemini/gemini-cli/pull/28607) — Preserve `functionCall thoughtSignature` when stripping thought parts. Fixes a v0.53.0 regression causing `API Error 400: Function call is missing a thought_signature`.
- [#28526](https://github.com/google-gemini/gemini-cli/pull/28526) — Stop leaking `gemini.diff.accept` and `onDidChangeWorkspaceFolders` disposables in the VS Code IDE companion. Fixes #27790 and improves extension lifecycle hygiene.
- [#28551](https://github.com/google-gemini/gemini-cli/pull/28551) — Fall back to embedded macOS seatbelt profiles when static `.sb` files are missing. Resolves a critical startup crash in `-s` sandbox mode on macOS.
- [#28566](https://github.com/google-gemini/gemini-cli/pull/28566) — Propagate `InvalidStreamError` details to CLI UI hooks, enabling actionable suggestions like `/compress`. This is the core fix now being cherry-picked to preview and stable.
- [#28608](https://github.com/google-gemini/gemini-cli/pull/28608) — Fall back to stable models when a preview model 404s with Gemini API key auth. Fixes #28600 and improves resilience for keys without preview access.
- [#28609](https://github.com/google-gemini/gemini-cli/pull/28609) — Automated cherry-pick of the InvalidStreamError fix into the `v0.54.0-preview` branch. Closed and released as `v0.54.0-preview.1`.
- [#28610](https://github.com/google-gemini/gemini-cli/pull/28610) — Cherry-pick of the same fix into stable `v0.53.0`. Had merge conflicts but produced `v0.53.1`.
- [#28481](https://github.com/google-gemini/gemini-cli/pull/28481) — Refresh MCP OAuth tokens using the stored client ID. Fixes repeated re-auth for OAuth-discovered MCP servers.
- [#28612](https://github.com/google-gemini/gemini-cli/pull/28612) — Automated version bump for the nightly release.

## Feature Request Trends
- **AST-aware code navigation** — Requests to use AST-aware file reads, searches, and codebase mapping are recurring, with related EPICs for better `codebase_investigator` behavior ([#22745](https://github.com/google-gemini/gemini-cli/issues/22745), [#22746](https://github.com/google-gemini/gemini-cli/issues/22746)).
- **Subagent transparency and control** — Users want visible subagent trajectories, subagent context in bug reports, accurate CLI self-awareness, and reliable settings overrides for agents ([#22598](https://github.com/google-gemini/gemini-cli/issues/22598), [#21763](https://github.com/google-gemini/gemini-cli/issues/21763), [#21432](https://github.com/google-gemini/gemini-cli/issues/21432), [#22267](https://github.com/google-gemini/gemini-cli/issues/22267)).
- **Memory-system reliability and privacy** — A cluster of issues demands deterministic redaction, better handling of low-signal sessions, quarantine of invalid patches, and reduced logging ([#26525](https://github.com/google-gemini/gemini-cli/issues/26525), [#26522](https://github.com/google-gemini/gemini-cli/issues/26522), [#26523](https://github.com/google-gemini/gemini-cli/issues/26523)).
- **Safer and smarter execution** — Users are pushing for sandboxed native shell usage and stronger guardrails against destructive git/database commands ([#19873](https://github.com/google-gemini/gemini-cli/issues/19873), [#22672](https://github.com/google-gemini/gemini-cli/issues/22672)).
- **Component-level evaluation infrastructure** — Requests for robust behavioral evals and better agent trajectory tooling continue to grow ([#24353](https://github.com/google-gemini/gemini-cli/issues/24353)).

## Developer Pain Points
- **Hangs and false success states** — The generalist agent hanging, shell commands stuck on “Waiting input,” and subagents reporting GOAL success after max-turns interruptions are the most visible frustrations ([#21409](https://github.com/google-gemini/gemini-cli/issues/21409), [#25166](https://github.com/google-gemini/gemini-cli/issues/25166), [#22323](https://github.com/google-gemini/gemini-cli/issues/22323)).
- **Subagent permission and configuration surprises** — Subagents running when disabled, ignoring `settings.json` overrides, and failing under Wayland add configuration-management pain ([#22093](https://github.com/google-gemini/gemini-cli/issues/22093), [#22267](https://github.com/google-gemini/gemini-cli/issues/22267), [#21983](https://github.com/google-gemini/gemini-cli/issues/21983)).
- **Memory-system overhead** — Auto Memory retrying low-signal sessions, silently skipping invalid patches, and logging sensitive content creates both reliability and privacy concerns ([#26522](https://github.com/google-gemini/gemini-cli/issues/26522), [#26523](https://github.com/google-gemini/gemini-cli/issues/26523), [#26525](https://github.com/google-gemini/gemini-cli/issues/26525)).
- **Tool scaling and workspace cleanup** — More than 128 tools triggers 400 errors, and the model frequently scatters temporary scripts across directories, making clean commits harder ([#24246](https://github.com/google-gemini/gemini-cli/issues/24246), [#23571](https://github.com/google-gemini/gemini-cli/issues/23571)).

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

## GitHub Copilot CLI Community Digest — 2026-08-01

### Today’s Highlights

Copilot CLI shipped **v1.0.78-0** with a new `/permissions` command for switching approval modes, ACP support for closing sessions via `closeSession`, and a new `allowDevToolCaches` sandbox setting. Community attention is still concentrated on regressions: plan mode blocking shell commands, `task_complete` disappearing in autopilot, and large-session resume failures causing OOM/CPU spikes. Several new triage issues also highlight MCP config brittleness and session-state edge cases.

### Releases

- **[v1.0.78-0](https://github.com/github/copilot-cli/releases)**  
  - Added `/permissions` to switch between approval modes.  
  - ACP mode now supports closing sessions with the `closeSession` request.  
  - New sandbox setting `allowDevToolCaches` (on by default): grants sandboxed builds access to toolchain caches, registries, and installs.

### Hot Issues

- **[Issue #4188 — Regression on plan-mode](https://github.com/github/copilot-cli/issues/4188)**  
  Plan mode now blocks shell commands like `gh`, which were previously used to enrich plans. Closed, but 7 comments and 3 👍 show it was a notable workflow regression.

- **[Issue #4305 — “Failed to convert JavaScript value 'Undefined' into rust type 'String'”](https://github.com/github/copilot-cli/issues/4305)**  
  Started appearing in v1.0.76 across many commands. 4 👍 and 4 comments; high impact because it breaks normal sessions after a routine upgrade.

- **[Issue #4161 — `task_complete` tool unavailable after switching back to autopilot](https://github.com/github/copilot-cli/issues/4161)**  
  Regression of previously fixed issue #1523. Maintainers had said `task_complete` should always be available in autopilot; 4 👍 and 4 comments show strong user agreement.

- **[Issue #4251 — Resume of large session OOMs / grinds one CPU core for ~70 min](https://github.com/github/copilot-cli/issues/4251)**  
  A/B testing isolated the regression to v1.0.74, with ~3–4× memory use. Especially painful for long-lived sessions that previously resumed fine.

- **[Issue #4078 — Scheduled prompts kill the existing prompt queue](https://github.com/github/copilot-cli/issues/4078)**  
  `/every` and `/after` prompts interrupt the queue and never pop the next item. 4 comments; a serious automation reliability issue.

- **[Issue #3183 — SDK: orphan `tool_use` after hard kill + resume causes persistent 400](https://github.com/github/copilot-cli/issues/3183)**  
  State corruption after a hard kill leads to `messages.N: tool_use ids were found without tool_result blocks`. 4 comments; relevant for SDK and session persistence.

- **[Issue #3909 — Enterprise/org server-managed settings for local Copilot CLI](https://github.com/github/copilot-cli/issues/3909)**  
  Org admins cannot centrally push config or environment variables to local CLI installs. 4 comments; clear enterprise feature gap.

- **[Issue #2109 — ACP: support `ask_user` / `ask_question` extension method](https://github.com/github/copilot-cli/issues/2109)**  
  Most-reacted feature request in this window with 6 👍. ACP clients cannot surface structured clarifying questions to users.

- **[Issue #1352 — `sessionStart` hook stdout is not displayed](https://github.com/github/copilot-cli/issues/1352)**  
  Hook output is silently discarded, blocking use cases like reminders and environment banners. 3 👍 and 3 comments.

- **[Issue #4318 — Autopilot task-completion enforcement can override explicit user instructions](https://github.com/github/copilot-cli/issues/4318)**  
  Autopilot can keep acting even after the user narrowed the task to research/explanation only. New triage issue, but important for agent control safety.

### Key PR Progress

Only **2 PRs** were updated in the last 24 hours, and neither is a core CLI code change.

- **[PR #3163 — ViewSonic monitor](https://github.com/github/copilot-cli/pull/3163)**  
  Appears unrelated to CLI functionality; mentions monitoring for several issues and GitHub Action runners. Needs maintainer triage.

- **[PR #4316 — Create devcontainer.json](https://github.com/github/copilot-cli/pull/4316)**  
  No description provided. Likely a DX/tooling contribution, but not yet reviewable as a feature or fix.

### Feature Request Trends

- **ACP extensibility**  
  Users want richer ACP methods: `ask_user` / `ask_question` ([#2109](https://github.com/github/copilot-cli/issues/2109)) and token/context/cost usage exposure ([#4174](https://github.com/github/copilot-cli/issues/4174)).

- **Enterprise/org management**  
  Central server-managed configuration and env variable pushdown for local CLIs is a recurring ask ([#3909](https://github.com/github/copilot-cli/issues/3909)).

- **Terminal UX improvements**  
  Requests include scrolling through conversation history ([#4313](https://github.com/github/copilot-cli/issues/4313)), pinned sessions in dedicated sections ([#4321](https://github.com/github/copilot-cli/issues/4321)), and sidebar keyboard navigation ([#4304](https://github.com/github/copilot-cli/issues/4304)).

- **MCP/config ergonomics**  
  Users want comments supported in `.mcp.json` ([#4323](https://github.com/github/copilot-cli/issues/4323)) and better interactive help for MCP environment variables ([#1478](https://github.com/github/copilot-cli/issues/1478)).

### Developer Pain Points

- **Release regressions**  
  Repeated regressions around plan-mode permissions ([#4188](https://github.com/github/copilot-cli/issues/4188)), autopilot tools ([#4161](https://github.com/github/copilot-cli/issues/4161)), large-session resume ([#4251](https://github.com/github/copilot-cli/issues/4251)), and terminal rendering ([#4311](https://github.com/github/copilot-cli/issues/4311)).

- **Session-state and queue fragility**  
  Session resume can fail due to orphaned `tool_use` blocks ([#3183](https://github.com/github/copilot-cli/issues/3183)), `events.jsonl` exceeding V8 max string length ([#4325](https://github.com/github/copilot-cli/issues/4325)), or scheduled prompts disrupting the queue ([#4078](https://github.com/github/copilot-cli/issues/4078)).

- **Model/tool compatibility errors**  
  Third-party and new models hit protocol-level errors, e.g., DeepSeek-V4 tool-call failures ([#3215](https://github.com/github/copilot-cli/issues/3215)) and the Rust/JS type conversion crash in v1.0.76 ([#4305](https://github.com/github/copilot-cli/issues/4305)).

- **MCP configuration brittleness**  
  Strict JSON parsing without comments causes entire workspace MCP configs to be skipped ([#4323](https://github.com/github/copilot-cli/issues/4323)), and nested custom-agent MCP tool grants depend on undocumented parent-level behavior ([#4320](https://github.com/github/copilot-cli/issues/4320)).

- **Automation control gaps**  
  Autopilot can override explicit user constraints ([#4318](https://github.com/github/copilot-cli/issues/4318)), and plan-mode UI can hang after switching sessions ([#4319](https://github.com/github/copilot-cli/issues/4319)).

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-08-01

## Today’s Highlights
No new releases were published in the last 24 hours. The most visible community activity centers on two long-running feature requests: cross-device remote control (#1282) and a persistent memory system (#1283). A new PR also addresses a provider compatibility bug where double-encoded JSON in tool-call arguments breaks Pydantic validation (#2572).

## Releases
No releases in the last 24 hours.

## Hot Issues
Only 4 issues were updated or active in the last 24h. All are listed below.

- [#1282 [enhancement] Feature Request: Remote Control - Continue local sessions from any device](https://github.com/MoonshotAI/kimi-cli/issues/1282)  
  Users want to leave a local Kimi Code CLI session and resume it from a phone, tablet, or browser without losing context. This has strong community support: 9 comments and 23 👍.

- [#1283 [enhancement] Feature Request: Memory System - Persistent context across sessions](https://github.com/MoonshotAI/kimi-cli/issues/1283)  
  Proposes both automatic memory and user-defined persistent instructions so project patterns and preferences survive across sessions. An important direction for long-lived coding workflows; 8 comments.

- [#2422 [bug] 对话完成后滚动查看输出内容会自动调到底部 / Auto-scroll after conversation completion](https://github.com/MoonshotAI/kimi-cli/issues/2422)  
  On Linux, after a conversation finishes, scrolling through output snaps back to the bottom. A UX/terminal behavior bug that makes post-session review difficult. Reported on v1.46.0.

- [#796 [closed] error: the message at position 1 with role](https://github.com/MoonshotAI/kimi-cli/issues/796)  
  An older closed issue about a provider-side 400 error related to message roles. It was touched again in this window, making it a useful reference for role-validation or API compatibility regressions.

## Key PR Progress
Only 1 PR was updated in the last 24h.

- [#2572 fix(kosong): recursively unwrap double-encoded JSON in tool-call arguments](https://github.com/MoonshotAI/kimi-cli/pull/2572)  
  Fixes Pydantic validation errors when tool calls include array/object parameters such as `SetTodoList`, `ExitPlanMode`, or `StrReplaceFile`. Some providers double-encode nested values as JSON strings inside `function.arguments`, so this PR adds recursive unwrapping for broader provider compatibility.

## Feature Request Trends
Across the current issue set, the clear feature request themes are:

- **Cross-device session continuity** — continuing local CLI sessions from mobile or browser (#1282).
- **Persistent memory and project context** — automatic AI-managed notes plus user-defined instructions that persist across sessions (#1283).

No additional feature-request directions appeared in this 24h window.

## Developer Pain Points
- **Terminal output review friction**: auto-scrolling after conversation completion makes it hard to inspect long output (#2422).
- **Provider interoperability issues**: tool-call arguments with differently encoded JSON cause validation failures, highlighting the need for robust handling of provider-specific formats (#2572).
- **API/error normalization concerns**: old issues like #796 show that provider errors around message roles can still surface and need clearer diagnostics.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

## Today's Highlights

OpenCode’s development pace is focused on agent-loop ergonomics: background shell execution, concise failure output, and debugging-loop hints landed alongside an `OPENCODE_AIRGAP` kill switch for air-gapped deployments. Plugin developers also gain cross-root TUI plugin discovery and shared runtimes for external TSX plugins. On the community side, the main unresolved questions are DeepSeek V4 Flash availability on Zen/Go (#39823) and prompt-cache stability (#23595).

## Releases

No new releases were published in the last 24 hours.

## Hot Issues

- [#39823 DeepSeek V4 Flash formal version (0731) — is it already live on OpenCode Go/Zen?](https://github.com/anomalyco/opencode/issues/39823) — Open question with 23 comments and 20 👍. Developers want immediate confirmation of DeepSeek V4 Flash availability on OpenCode’s hosted Zen/Go endpoints after yesterday’s model announcement.

- [#16331 Permissions ignored](https://github.com/anomalyco/opencode/issues/16331) — Closed but still a 41-comment thread. Users report `permission.read` rules such as `*.env` and `appsettings.json` being ignored, raising secret-safety concerns.

- [#23595 `<system-reminder>` keeps moving, causing unnecessary prompt processing in llama.cpp](https://github.com/anomalyco/opencode/issues/23595) — Open with 11 👍. Moving the system reminder breaks prompt caching and adds large latency for llama.cpp users.

- [#18131 Write tool called with invalid parameters](https://github.com/anomalyco/opencode/issues/18131) — Closed. Qwen 3.5 through LM Studio intermittently triggers write-tool schema errors, disrupting local-model workflows.

- [#28480 OpenCode Windows 11 not starting anymore](https://github.com/anomalyco/opencode/issues/28480) — Closed. A silent startup crash on Windows with no error or crash report made the app unusable for affected users.

- [#7769 Support the desktop version of git submodules](https://github.com/anomalyco/opencode/issues/7769) — Closed feature request with 13 👍. Desktop cannot properly manage sessions for Git submodules; a long-standing parity gap.

- [#20527 New PowerShell tool confuses agents](https://github.com/anomalyco/opencode/issues/20527) — Closed. Even after PR #16069, agents still reach for `tail` instead of the PowerShell-native tool on Windows.

- [#14848 Significant Billing Sync Lag and TUI Session Loss](https://github.com/anomalyco/opencode/issues/14848) — Closed. Zen credits and limit updates did not sync to the TUI, and sessions were lost after billing changes.

- [#20573 Remove nushell from shell blacklist and add bash tool invocation support](https://github.com/anomalyco/opencode/issues/20573) — Closed. Nushell users are blocked from using the `bash` tool due to a blacklist added months earlier.

- [#29142 OpenAI-compatible models can call write/edit with invalid schema arguments](https://github.com/anomalyco/opencode/issues/29142) — Closed with 5 👍. Intermittent invalid arguments to built-in tools cause repeated failed calls instead of automatic recovery.

## Key PR Progress

- [#39994 feat: add `OPENCODE_AIRGAP` to disable automatic internet access](https://github.com/anomalyco/opencode/pull/39994) — Adds a single kill switch for air-gapped/intranet deployments, disabling all automatic network access.

- [#39978 feat(background): run long-running shell commands without blocking the conversation](https://github.com/anomalyco/opencode/pull/39978) — Lets builds, tests, and daemons run in the background with job listing/cancel APIs and a TUI badge.

- [#39997 feat(opencode): dedup unchanged file reads with a `file_unchanged` stub](https://github.com/anomalyco/opencode/pull/39997) — Avoids re-reading files already in context, reducing token usage and context churn.

- [#39985 feat(app): add configurable send key](https://github.com/anomalyco/opencode/pull/39985) — Adds Enter, Shift+Enter, and Ctrl/Cmd+Enter send modes for chat input.

- [#39988 fix(tui): discover plugins across config roots](https://github.com/anomalyco/opencode/pull/39988) — Client-local TUI plugins are now discovered from global config and all ancestor `.opencode/plugins/tui` directories.

- [#39983 fix(tui): share runtime with external TSX plugins](https://github.com/anomalyco/opencode/pull/39983) — External V2 TSX plugins now use the host OpenTUI/Solid runtimes, fixing frozen reactive JSX after first frame.

- [#39982 feat(tool): concise error output for failed shell commands](https://github.com/anomalyco/opencode/pull/39982) — Failed shell commands return summarized errors instead of dumping full verbose output.

- [#39990 feat(session): inject debugging-loop hint when the same shell command keeps failing](https://github.com/anomalyco/opencode/pull/39990) — Detects repeated identical shell failures and nudges the model to change strategy.

- [#14743 fix(cache): improve Anthropic prompt cache hit rate with system split and tool stability](https://github.com/anomalyco/opencode/pull/14743) — Long-running fix to improve cross-session prompt cache hits on Anthropic.

- [#27378 fix(cache): stabilize system prefix behind `OPENCODE_EXPERIMENTAL_CACHE_STABILIZATION`](https://github.com/anomalyco/opencode/pull/27378) — Part of the stacked prompt-caching fix set; stabilizes system-prefix ordering to enable cache hits.

## Feature Request Trends

- **Prompt-cache control**: Users want stable system-reminder placement, provider `prompt_cache_ttl` options, and cache observability flags ([#23595](https://github.com/anomalyco/opencode/issues/23595), [#16848](https://github.com/anomalyco/opencode/issues/16848)).

- **Windows and cross-platform shell parity**: Native PowerShell tool behavior, nushell unblocking, WSL connectivity, and Termux support remain recurring asks ([#20527](https://github.com/anomalyco/opencode/issues/20527), [#20573](https://github.com/anomalyco/opencode/issues/20573), [#30230](https://github.com/anomalyco/opencode/issues/30230), [#30248](https://github.com/anomalyco/opencode/issues/30248)).

- **Desktop app parity**: Git submodule handling, missing “Open Terminal/VSCode” buttons, symlink project paths, and same-prefix project display are frequent desktop complaints ([#7769](https://github.com/anomalyco/opencode/issues/7769), [#29867](https://github.com/anomalyco/opencode/issues/29867), [#30260](https://github.com/anomalyco/opencode/issues/30260), [#30223](https://github.com/anomalyco/opencode/issues/30223)).

- **Plugin system extensibility**: Developers want side-effect slash commands with no AI prompt, per-ref model inheritance for sub-agents, and more reliable plugin dependency installation ([#30268](https://github.com/anomalyco/opencode/issues/30268), [#30289](https://github.com/anomalyco/opencode/issues/30289), [#30197](https://github.com/anomalyco/opencode/issues/30197)).

## Developer Pain Points

- **Tool-call schema errors**: Local and OpenAI-compatible models frequently produce invalid `write`/`edit` arguments, causing repeated failures with no automatic recovery ([#18131](https://github.com/anomalyco/opencode/issues/18131), [#24604](https://github.com/anomalyco/opencode/issues/24604), [#29142](https://github.com/anomalyco/opencode/issues/29142)).

- **Prompt-cache instability**: Moving `<system-reminder>` blocks invalidate caches, causing expensive reprocessing and higher latency, especially on llama.cpp and Anthropic ([#23595](https://github.com/anomalyco/opencode/issues/23595), [#16848](https://github.com/anomalyco/opencode/issues/16848)).

- **Windows reliability gaps**: Silent startup crashes, shell blacklist issues, and agent confusion around PowerShell break core workflows ([#28480](https://github.com/anomalyco/opencode/issues/28480), [#20573](https://github.com/anomalyco/opencode/issues/20573), [#20527](https://github.com/anomalyco/opencode/issues/20527)).

- **Session/API regressions**: `GET /session/status` no longer aggregates child directories, session pagination breaks with directory filters, and billing sync can cause session loss ([#30094](https://github.com/anomalyco/opencode/issues/30094), [#30109](https://github.com/anomalyco/opencode/issues/30109), [#14848](https://github.com/anomalyco/opencode/issues/14848)).

- **Shell command UX**: Long-running commands block the conversation, failed commands produce verbose output, and complex scripts are not reliably written or modified ([#39978](https://github.com/anomalyco/opencode/pull/39978), [#39982](https://github.com/anomalyco/opencode/pull/39982), [#24620](https://github.com/anomalyco/opencode/issues/24620)).

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-08-01

## Today's Highlights
Reliability fixes landed for several long-standing failure modes: compaction now fails loudly instead of silently persisting truncated summaries (#7420), model availability refreshes recover from stalled promises (#7421), and optional-object tool schemas are normalized before being sent to strict OpenAI-compatible endpoints (#7419). In parallel, a sweeping session-storage refactor from christianklotz (SQLite linearization, per-session queues, server session backend) advanced Pi's server architecture. Performance complaints continue to dominate issue traffic, with TUI core-pinning and O(n²) JSON output both seeing fixes in the PR queue.

## Releases
No new releases in the last 24 hours.

## Hot Issues

1. **[#6187 — Pi login hangs in WSL after GitHub Copilot device authorization](https://github.com/earendil-works/pi/issues/6187)** (19 comments)
   Highest-activity issue this cycle. Browser-based device authorization completes and the device shows registered, but the WSL client never detects it and hangs waiting. Significant for the large WSL developer population; no fix merged yet.

2. **[#6665 — TUI pins a full core while streaming](https://github.com/earendil-works/pi/issues/6665)** (11 comments)
   Long sessions peg one core at 100%. Root cause: uncached `Intl.Segmenter` grapheme segmentation plus per-chunk Markdown re-render on every frame. Reproduces with `pi -ne`, confirming it's core TUI behavior, not an extension.

3. **[#6879 — Auto-compaction never triggers after context grows past 100%](https://github.com/earendil-works/pi/issues/6879)** (7 comments, 5 👍)
   A 2-hour agentic turn blew past the compaction threshold and only stopped when the API rejected a 373k-token request. Community strongly agrees compaction should be checked after every agent step, not just on the next user turn.

4. **[#7020 — Pi doesn't continue after compaction](https://github.com/earendil-works/pi/issues/7020)** (7 comments, 2 👍)
   Long-running "coordinator" sessions intermittently stall after compaction. Compaction warts remain a top reliability concern for power users.

5. **[#7161 — anthropic-messages never sends x-client-request-id](https://github.com/earendil-works/pi/issues/7161)** (6 comments)
   Unlike all OpenAI paths, the Anthropic path omits `x-client-request-id`, breaking session affinity for gateways that round-robin across accounts (e.g., CliProxyAPI with two Claude accounts).

6. **[#7053 — Parallel tool batches lose results when a sibling stalls](https://github.com/earendil-works/pi/issues/7053)** (3 comments)
   Follow-up to #3503: UI events were decoupled, but persisted `toolResult` messages still wait on `Promise.all` over the whole batch. One stalled tool orphans the completed siblings' results ("No result provided").

7. **[#6996 — Gemini 3.x fails during tool use: missing thought_signature](https://github.com/earendil-works/pi/issues/6996)** (4 comments)
   Submitting tool results back to Gemini 3.x models errors because history lacks `thought_signature`. A related fix (#7356) was closed for dropping thought signatures riding empty blocks.

8. **[#7301 — Stalled availability refresh is permanently unrecoverable](https://github.com/earendil-works/pi/issues/7301)** (3 comments)
   `forceRefreshAvailability()` chains onto a stuck promise, so `getAvailable()`/`refresh()` never settle again even after the root cause clears. Fixed by PR #7421 this cycle.

9. **[#7290 — `--mode json` emits O(n²) stdout](https://github.com/earendil-works/pi/issues/7290)** (2 comments)
   Every `message_update` carries the full cumulative assistant message; one agent burned 17 minutes writing a 64 KB HTML file and produced nothing. PR #7394 addresses it with delta-only updates.

10. **[#7149 — Standalone linux-x64 binary SIGILL on pre-Haswell CPUs](https://github.com/earendil-works/pi/issues/7149)** (2 comments)
    Official release binary crashes with SIGILL on Sandy Bridge (no BMI2/AVX2); the npm package works fine on the same machine. PR #7390 retargets the baseline x64 CPU.

## Key PR Progress

1. **[#7421 — Recover model availability after a stalled refresh](https://github.com/earendil-works/pi/pull/7421)** — Closes #7301. Rebuilds no longer chain onto a never-settling promise; forced refresh now starts a fresh rebuild.

2. **[#7420 — Fail compaction when summary is truncated at token cap](https://github.com/earendil-works/pi/pull/7420)** — Closes #7048. Previously only `stopReason: "error"` failed compaction; `stopReason: "length"` silently persisted a partial summary. Now treated as a failure.

3. **[#7419 — Normalize optional object tool schemas for OpenAI-compatible providers](https://github.com/earendil-works/pi/pull/7419)** — Closes #7010. TypeBox omits `required` for all-optional object schemas; strict OpenAI endpoints rejected with `null is not of type "array"`. Now normalized before transmission.

4. **[#7422 — Support direct image URLs in ImageContent](https://github.com/earendil-works/pi/pull/7422)** — Closes #6151. Callers can pass image URLs through to providers that natively accept them instead of forcing base64 fetches.

5. **[#7394 — Make JSON streaming output linear](https://github.com/earendil-works/pi/pull/7394)** — Emits delta-only `message_update` records in JSON/RPC modes with stdout backpressure, fixing the O(n²) blowup from #7290. Includes a breaking wire-protocol migration note.

6. **[#7390 — Target baseline x64 CPUs](https://github.com/earendil-works/pi/pull/7390)** — Fixes #7149. Removes BMI2-dependent instructions (`shlx`) from the standalone linux-x64 build.

7. **[#7396 — Add server session backend](https://github.com/earendil-works/pi/pull/7396)** — Durable JSONL-backed `PiServer` sessions with exclusive cross-process locking, crash recovery, and live transcript projection.

8. **[#7410 — Make SQLite session operations linear](https://github.com/earendil-works/pi/pull/7410)** — Stages connection cache/projection state until append transactions succeed; eliminates complete entry-cache cloning per append and `unshift`-heavy branch paths.

9. **[#7398 — Add per-session store queues](https://github.com/earendil-works/pi/pull/7398)** — Serializes memory/JSONL operations per session while allowing unrelated sessions to progress concurrently; bounds JSONL filesystem concurrency to four operations.

10. **[#7404 — Add Baseten provider](https://github.com/earendil-works/pi/pull/7404)** — New built-in OpenAI-compatible provider via `BASETEN_API_KEY`, mirroring the existing Together AI integration.

Also notable: **#7409** (remote session client coordination), **#7408** (storage-owned session readers), and **#6216** (Amazon Bedrock Mantle OpenAI Responses provider, still open).

## Feature Request Trends
- **New model providers are the most frequent feature ask**: Kimi K3 on Fireworks (#7199), Baseten (#7404), Amazon Bedrock Mantle (#6216), and Z.AI model reference updates (#7401).
- **Server/remote session architecture is a major push**: experimental CLI option parser (#7411), durable server session backend (#7396), remote client coordination (#7409), and session reader abstractions (#7408) all advanced this week.
- **Provider-agnostic correctness**: normalizing optional schemas (#7419), array content handling (#7062), direct image URLs (#7422), and retry classification for HTTP/2 stream errors (#7392) reflect demand for robust behavior across heterogeneous OpenAI-compatible gateways.
- **Terminal/platform breadth**: Wayland clipboard support (#7248), Orca Kitty-image detection (#7357), and pre-Haswell CPU support (#7390) show users pushing for wider environment compatibility.

## Developer Pain Points
- **Compaction is the most fragile subsystem**: at least four distinct failure modes surfaced — never triggering (#6879), stalling after completion (#7020), double-triggering (#7253), and silently persisting truncated summaries (#7420). Enterprise Copilot compaction also fails on GHE.com with an "unknown stamp" error (#7413).
- **Long-session performance degrades nonlinearly**: TUI core pinning (#6665), keystroke lag scaling with tool-call count (#7385), and O(n²) JSON output (#7290) all punish users on long-running or agent-heavy sessions.
- **Silent data loss / dropped work is a recurring theme**: RPC prompts ACKed but dropped during compaction (#7150), parallel tool results orphaned by stalled siblings (#7053), and concurrent `settings.json` first-writes losing updates (#7384).
- **Provider API inconsistencies keep biting**: missing request IDs on Anthropic paths (#7161), missing Gemini `thought_signature` (#6996), no refresh-on-401 for kimi-coding (#7319), and unrecovered HTTP/2 stream errors (#7392).

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-08-01

## Today's Highlights

Qwen Code v0.21.2 shipped, accompanied by autofix behavior changes: lower-severity suggestions are deferred after five rounds, and visible notices are posted when round limits stop further action. Meanwhile, community attention is concentrated on making `qwen serve` scalable beyond a single workspace — the multi-workspace RFC ([#6378](https://github.com/QwenLM/qwen-code/issues/6378)) closed with 31 comments, and follow-ups are now pushing for real memory bounds ([#8051](https://github.com/QwenLM/qwen-code/issues/8051), [#8182](https://github.com/QwenLM/qwen-code/issues/8182)) — while session branching is advancing through new PRs like [#8274](https://github.com/QwenLM/qwen-code/pull/8274).

## Releases

- **v0.21.2** — The only release in the last 24 hours. The provided snapshot does not include structured release notes, but the digest Highlights call out autofix changes: lower-severity suggestions are deferred after five rounds, and explicit notices are shown when the round limit prevents further processing.

## Hot Issues

1. **RFC: Support multiple workspaces in one `qwen serve` daemon** ([#6378](https://github.com/QwenLM/qwen-code/issues/6378)) — Closed with 31 comments. The current `1 daemon = 1 workspace` model is the main blocker for multi-tenant serve deployments; this thread shaped most of the week’s daemon discussions.

2. **Tracking: Bound multi-workspace daemon resource usage** ([#8051](https://github.com/QwenLM/qwen-code/issues/8051)) — Open, 9 comments. Follow-up to the multi-workspace RFC. Count-only limits do not bound bytes held by request bodies, WebSocket assembly, or other memory. Production users are watching this closely.

3. **Minified React error #185 on Windows** ([#5199](https://github.com/QwenLM/qwen-code/issues/5199)) — Open, 9 comments. UI crash during startup from a global Cherry Studio install path on Windows. Long-standing Windows packaging/repro issue.

4. **Keep deferred tool discovery from invalidating prompt cache prefixes** ([#6721](https://github.com/QwenLM/qwen-code/issues/6721)) — Open, 7 comments. `tool_search` resolving hidden deferred tools triggers `setTools()`, which invalidates prefix caches and hurts long-session performance.

5. **Anthropic 4.6+ assistant-prefill 400 + `thinking.display` silently defaults to `'omitted'`** ([#8039](https://github.com/QwenLM/qwen-code/issues/8039)) — Closed, 6 comments. Verified bug affecting Claude Opus/Sonnet 4.6+ and 5.x families; significant Anthropic compatibility issue now fixed.

6. **Daemon gives every ACP child 50% of host memory** ([#8182](https://github.com/QwenLM/qwen-code/issues/8182)) — Open, 3 comments. `getAcpMemoryArgs()` caches one value per host and never divides it by child count. Serious overcommit risk for multi-child servers.

7. **JSON-style tool call arguments leak as plain text when model drops function-calling format** ([#8207](https://github.com/QwenLM/qwen-code/issues/8207)) — Open, 3 comments. In a production DataAgent session, serialized tool arguments appeared as plain text instead of a structured `tool_call`, breaking parallel subagent dispatch.

8. **Windows validated `@`-file reads lose O_NOFOLLOW and may have vacuous dev/ino identity checks** ([#8227](https://github.com/QwenLM/qwen-code/issues/8227)) — Open, 3 comments. Follow-up to the `@`-file hardening work; Windows protection is materially weaker and untested against symlink/TOCTOU attacks.

9. **Add session branching with optional Git worktree isolation** ([#8271](https://github.com/QwenLM/qwen-code/issues/8271)) — Open, 2 comments. New feature request to branch any session from its latest state or a completed Assistant response, with optional worktree isolation.

10. **SGR mouse escape sequences leak into input box at startup** ([#8267](https://github.com/QwenLM/qwen-code/issues/8267)) — Open, 2 comments. Reported against v0.21.2: raw Extended Mouse Mode sequences are injected into the input buffer, making the TUI unusable in affected terminals.

## Key PR Progress

1. **feat: fork from any conversation** ([#8274](https://github.com/QwenLM/qwen-code/pull/8274)) — Implements session branching from arbitrary Assistant responses, handling tool calls, cancellations, metadata, and transcript pagination safely.

2. **feat(desktop): package Web Shell as a release-ready desktop app** ([#8132](https://github.com/QwenLM/qwen-code/pull/8132)) — Moves the Tauri proof of concept into a real desktop shell around the shared Web Shell, with native startup/recovery states.

3. **feat(skills): add auto-skill curator** ([#7846](https://github.com/QwenLM/qwen-code/pull/7846)) — Records successful skill usage, marks inactive generated skills stale after 30 days, and moves completed packages out of active rotation.

4. **refactor(cli): remove ACP private serve dependencies** ([#8141](https://github.com/QwenLM/qwen-code/pull/8141)) — Moves lifecycle-free ACP/daemon contracts out of `packages/cli/src/serve/**` into `runtime/**`, reducing private coupling.

5. **fix(cli): skip terminal redraw optimizer on WSL/ConPTY and enable sync output on Windows Terminal** ([#7897](https://github.com/QwenLM/qwen-code/pull/7897)) — Directly targets the WSL + Windows Terminal streaming duplication bug.

6. **feat(serve): resolve and report the daemon memory budget** ([#8245](https://github.com/QwenLM/qwen-code/pull/8245)) — Gives the daemon a notion of its memory budget so RSS/heap sampling and ACP child limits can be expressed against a real ceiling.

7. **fix(cli): keep model switches session-scoped** ([#6579](https://github.com/QwenLM/qwen-code/pull/6579)) — `/model <id>` now only changes the active session; persisting a default requires explicit `/model --default`.

8. **fix(webui): make long tool output collapsible** ([#8251](https://github.com/QwenLM/qwen-code/pull/8251)) — Replaces the 500-character truncation for Bash/Execute output and `think` content with an expandable full-output view.

9. **feat(workflows): bubble workflow agent approvals** ([#8240](https://github.com/QwenLM/qwen-code/pull/8240)) — Pending Shell/edit/MCP approvals from Workflow agents are surfaced through the parent TUI, ACP host, or stream-json control channel.

10. **fix(web-shell): isolate automatic recap by session** ([#8262](https://github.com/QwenLM/qwen-code/pull/8262)) — Prevents a recap requested in one session from being inserted into the transcript after the user switches to another session.

## Feature Request Trends

- **Daemon multi-tenancy and resource governance** — Multiple workspaces per `qwen serve` daemon ([#6378](https://github.com/QwenLM/qwen-code/issues/6378)), bounded memory usage ([#8051](https://github.com/QwenLM/qwen-code/issues/8051)), and per-child memory limits ([#8182](https://github.com/QwenLM/qwen-code/issues/8182)).
- **Session branching and lifecycle controls** — Branch from conversation checkpoints with optional Git worktree isolation ([#8271](https://github.com/QwenLM/qwen-code/issues/8271)), fork from any response ([#8274](https://github.com/QwenLM/qwen-code/pull/8274)), and session-scoped model switches ([#6579](https://github.com/QwenLM/qwen-code/pull/6579)).
- **Skills lifecycle management** — A single switch to disable all bundled skills ([#8054](https://github.com/QwenLM/qwen-code/issues/8054)), automatic skill curation ([#7846](https://github.com/QwenLM/qwen-code/pull/7846)), and hot-reload for skills created through the Web Shell ([#8221](https://github.com/QwenLM/qwen-code/issues/8221)).
- **Cross-platform terminal and desktop polish** — WSL/ConPTY rendering fixes ([#7897](https://github.com/QwenLM/qwen-code/pull/7897)), SGR escape leak repair ([#8267](https://github.com/QwenLM/qwen-code/issues/8267)), and a release-ready desktop Web Shell ([#8132](https://github.com/QwenLM/qwen-code/pull/8132)).
- **Tool-call and model-protocol robustness** — Structured tool calls lost as XML/JSON plain text ([#8003](https://github.com/QwenLM/qwen-code/issues/8003), [#8207](https://github.com/QwenLM/qwen-code/issues/8207)), Anthropic converter edge cases ([#8039](https://github.com/QwenLM/qwen-code/issues/8039), [#8159](https://github.com/QwenLM/qwen-code/issues/8159), [#8160](https://github.com/QwenLM/qwen-code/issues/8160), [#8161](https://github.com/QwenLM/qwen-code/issues/8161)), and deferred tools invalidating caches ([#6721](https://github.com/QwenLM/qwen-code/issues/6721)).

## Developer Pain Points

- **Flaky E2E / CI suite** — Multiple auto-filed failures around ACP cron jobs and SDK MCP async handlers ([#8237](https://github.com/QwenLM/qwen-code/issues/8237), [#8076](https://github.com/QwenLM/qwen-code/issues/8076), [#8256](https://github.com/QwenLM/qwen-code/issues/8256), [#8244](https://github.com/QwenLM/qwen-code/issues/8244), [#8222](https://github.com/QwenLM/qwen-code/issues/8222)). The community is pressing for deterministic test seams like `QWEN_CODE_TEST_CRON_FAST` ([#8243](https://github.com/QwenLM/qwen-code/pull/8243)).
- **Daemon memory overcommit** — ACP children each receive 50% of host memory regardless of child count ([#8182](https://github.com/QwenLM/qwen-code/issues/8182)); count-only limits miss the real bytes held by the daemon ([#8051](https://github.com/QwenLM/qwen-code/issues/8051)).
- **Tool-call format drift** — Models occasionally emit XML/JSON tool calls as plain text in long sessions, breaking structured dispatch ([#8003](https://github.com/QwenLM/qwen-code/issues/8003), [#8207](https://github.com/QwenLM/qwen-code/issues/8207)). Anthropic converter issues add another layer of protocol friction.
- **Windows-specific bugs** — SGR mouse escape leak ([#8267](https://github.com/QwenLM/qwen-code/issues/8267)), ConPTY streaming duplication ([#7897](https://github.com/QwenLM/qwen-code/pull/7897)), React packaging crash ([#5199](https://github.com/QwenLM/qwen-code/issues/5199)), and weaker `@`-file symlink protection ([#8227](https://github.com/QwenLM/qwen-code/issues/8227)).
- **Subagent question deadlock** — Sub-agents can ask the user questions, but the main agent does not forward them, leaving the subagent waiting forever ([#7835](https://github.com/QwenLM/qwen-code/issues/7835)).

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-08-01

**Note:** The project has officially rebranded as **CodeWhale**; the legacy `deepseek-tui` npm package is now deprecated.

## Today's Highlights

- **v0.9.3 shipped** with DeepSeek V4 Flash Responses and the “canonical tools” release surface, while the project officially moved to the **CodeWhale** identity and deprecated the legacy npm package.
- Community attention concentrated on **File edit reliability**, **sandbox path flexibility**, and **durable interrupted output** — three issues that could meaningfully shape the next development cycle.
- Windows-specific fixes are moving: AltGr `"/"` no longer triggers the help overlay, and the NSIS installer will stop clobbering long user PATH entries.

## Releases

### v0.9.3 — Codewhale public release, DeepSeek V4 Flash support
- Codewhale is now the public product name from Shannon Labs; `codewhale` remains the lowercase technical identifier for the command, npm package, and release assets.
- The legacy npm package `deepseek-tui` is **deprecated** and will receive no further releases.
- The release train includes 72 single-concern commits, with **DeepSeek V4 Flash direct responses** and canonical tool definitions as the headline surface.

**Links:** [Release PR #4993](https://github.com/Hmbown/CodeWhale/pull/4993) · [v0.9.3 rustdoc gate fix #5004](https://github.com/Hmbown/CodeWhale/pull/5004)

## Hot Issues

All 8 issues updated in the last 24h are listed here.

- [#5007 — Youtuber doesn't use the CodeWhale as TUI for DeepSeek](https://github.com/Hmbown/CodeWhale/issues/5007)  
  Community/positioning discussion: a popular YouTuber used Codex instead of CodeWhale while reviewing “the final version of DeepSeek-v4-flash.” 5 comments; no feature request, but reflects adoption visibility concerns.

- [#4949 — Discussion: The Chinese translation of "Constitution" — "宪法", "协作准则", or Something Else?](https://github.com/Hmbown/CodeWhale/issues/4949)  
  Language/terminology debate opened by the author of PR #4908. The term “宪法” is more authoritative but politically sensitive in Chinese contexts; “协作准则” is safer but less precise. 5 comments, actively engaging native speakers.

- [#5009 — Spam: "Increase Your Ophthalmology Revenue by 10–15% with Expert Billing"](https://github.com/Hmbown/CodeWhale/issues/5009)  
  Unrelated promotional spam. 2 comments. Maintainers are likely to close as spam; worth noting as repo-noise.

- [#5003 — [bug] File write tool severe repetition for medium-length text](https://github.com/Hmbown/CodeWhale/issues/5003)  
  High-signal bug report: `File` edit/patch replacement of large blocks repeatedly failed on a ~700-line C file with Chinese comments and CRLF endings. Result: 15+ failed attempts, 3 full `git checkout` rollbacks, and an eventual Python-script workaround.

- [#5005 — [enhancement] Sandbox filesystem path whitelist/allowlist](https://github.com/Hmbown/CodeWhale/issues/5005)  
  Xcode users cannot access `~/Library/Developer/Xcode/DerivedData` logs and build artifacts under `sandbox_mode = "workspace-write"`. Requests a configurable path allowlist for external build outputs.

- [#5000 — Engine: make interrupted assistant output a durable first-class session item](https://github.com/Hmbown/CodeWhale/issues/5000)  
  When a turn is interrupted before `MessageComplete`, emitted assistant text is visible in the TUI but missing from the authoritative session. Could cause context loss in subsequent model turns.

- [#5002 — [bug] Tool 'task' is not available + Anthropic API error HTTP 400](https://github.com/Hmbown/CodeWhale/issues/5002)  
  Runtime failure where the `task` tool cannot be located, followed by an unhelpful Anthropic API 400. Points to missing tool-registration diagnostics.

- [#4382 — [bug, tui, v0.9.3] Remove unmaintained ttf-parser PDF dependency chain](https://github.com/Hmbown/CodeWhale/issues/4382)  
  Closed maintenance issue: `cargo audit` emits allowed RUSTSEC-2026-0192 via `ttf-parser → lopdf → pdf-extract → codewhale-tui`. Not a vulnerability, but an unmaintained transitive dependency worth removing.

## Key PR Progress

- [#4981 — feat(tui): LaTeX environments, text, and command support for math rendering](https://github.com/Hmbown/CodeWhale/pull/4981)  
  Extends math rendering with environment-block dispatch, inline commands, accents, command-aware sub/superscripts, and case-insensitive environment matching.

- [#4985 — feat(runtime-api): scope task listing by workspace](https://github.com/Hmbown/CodeWhale/pull/4985)  
  Adds optional `workspace` filter to `GET /v1/tasks` and includes the workspace path in `TaskSummary`, enabling better GUI client scoping.

- [#4992 — Layer 5.2: User command dispatch precedence, shadowing, and error semantics](https://github.com/Hmbown/CodeWhale/pull/4992)  
  Adds Gherkin acceptance coverage for user-command shadowing of built-ins/aliases, fallback behavior, and invalid command errors.

- [#4977 — fix(tui): let AltGr-typed "/" reach the composer instead of opening help](https://github.com/Hmbown/CodeWhale/pull/4977)  
  Fixes Windows ABNT2 layouts where AltGr is reported as Ctrl+Alt; previously every attempted `/` opened the help overlay.

- [#5008 — fix(tui): actionable File edit diagnostics and stale-line-number tolerance](https://github.com/Hmbown/CodeWhale/pull/5008)  
  Direct fix for #5003: improves failure diagnostics for large replacements and tolerates stale line numbers, reducing repeated failed `File` tool calls.

- [#5001 — fix(tui): measure circled digits and keycaps as 2 columns everywhere](https://github.com/Hmbown/CodeWhale/pull/5001)  
  Fixes intermittent rendering glitches for ①②❶ and keycap sequences on CJK terminals by measuring them as 2 columns.

- [#5006 — fix(installer): preserve long Windows user PATH](https://github.com/Hmbown/CodeWhale/pull/5006)  
  Prevents NSIS installer from overwriting long existing user PATH values when `ReadRegStr` exceeds its fixed buffer and returns empty.

- [#4910 — docs: sanity check — is there a deterministic verification surface…](https://github.com/Hmbown/CodeWhale/pull/4910)  
  Draft documentation discussion/question PR; explicitly “a question, not a contribution.” Related to onboarding/verification workflows.

- [#5004 — fix(docs): restore the v0.9.3 rustdoc gate](https://github.com/Hmbown/CodeWhale/pull/5004)  
  Restores workflow-dispatch docs gate for v0.9.3 and fixes a test-only helper rendered as an intra-doc link.

- [#4993 — Release v0.9.3: DeepSeek V4 Flash Responses and canonical tools](https://github.com/Hmbown/CodeWhale/pull/4993)  
  The official v0.9.3 integration and release train: 72 single-concern commits, fast-forward only, candidate SHA `80c66ddd`.

## Feature Request Trends

- **Sandbox path allowlists** — Users need controlled access to files outside the workspace, especially for build artifacts and logs (#5005).
- **Session durability for partial output** — Interrupted assistant responses should be saved in the authoritative session, not just shown in the TUI (#5000).
- **More robust File editing** — Large replacements in CRLF/non-ASCII files need better diagnostics and tolerance for stale line numbers (#5003, with fix PR #5008).
- **Localization terminology review** — Chinese translation choices for core concepts (“Constitution”) need a culturally neutral but authoritative standard (#4949).
- **Dependency cleanup** — Continued pressure to remove unmaintained transitive dependencies and keep `cargo audit` clean (#4382).

## Developer Pain Points

- **File edit loop failures**: Models burn 15+ attempts and require full git rollbacks when replacing large blocks; diagnostics are not actionable (#5003).
- **Sandbox blocks legitimate external outputs**: `workspace-write` prevents access to Xcode DerivedData and similar external build products (#5005).
- **Interrupted sessions lose context**: Partial assistant output is not persisted, so interruption can desynchronize the TUI and the engine state (#5000).
- **Tool resolution errors are opaque**: `Tool 'task' is not available` followed by HTTP 400 from Anthropic gives users little to act on (#5002).
- **Windows-specific friction**: AltGr key chords conflict with global shortcuts, and the NSIS installer can truncate long PATH values (#4977, #5006).
- **Maintenance burden**: Unmaintained transitive dependencies and spam issues add noise to an otherwise active project (#4382, #5009).

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/boom7sss/agents-radar).*