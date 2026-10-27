# AI CLI Tools Community Digest 2026-08-03

> Generated: 2026-08-03 03:34 UTC | Tools covered: 9

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
**2026-08-03 Community Digest Analysis**

---

## 1. Ecosystem Overview

The AI CLI tool landscape is in a stabilization phase: no stable releases shipped across any of the nine tools monitored in the last 24 hours, with only Gemini CLI and Qwen Code publishing nightlies. Community attention has shifted from feature discovery to reliability hardening — session persistence, context compaction, subagent trust, and cross-platform terminal bugs dominate issue trackers across every project. A second major theme is cost transparency, led by OpenAI Codex users reporting token-burning polling loops and quota-exhaustion sessions, with Claude Code and DeepSeek TUI users asking for similar visibility. Meanwhile, multi-agent workflows are becoming the default architecture, and a corresponding observability gap is surfacing in the form of false-success reports, missing subagent context, and cross-session bleed.

---

## 2. Activity Comparison

| Tool | Issues (24h) | PRs (24h) | Releases (24h) |
|---|---|---|---|
| Claude Code | 10 highlighted¹ | 4 (docs/plugin fixes) | None |
| OpenAI Codex | 50 updated (10 highlighted) | 5 | None |
| Gemini CLI | 10 highlighted | 10 | **1 nightly** (v0.55.0-nightly.20260803) |
| GitHub Copilot CLI | 11 updated (10 highlighted) | 0 | None |
| Kimi Code CLI | 4 | 1 (closed) | None |
| OpenCode | ~10 notable | 10 | None |
| Pi | 10 highlighted | 10 | None |
| Qwen Code | 10 highlighted | 10 | **1 nightly** (v0.21.3-nightly.20260803) |
| DeepSeek TUI | 10 highlighted | 9 (release train) | None |

¹ Digest states a "long tail" of additional unresolved issues; exact 24h total not given. Counts reflect highlighted issues where totals were not explicitly stated.

**Read:** OpenAI Codex has the highest raw issue velocity (50 updates/24h). Gemini CLI, OpenCode, Pi, and Qwen Code show the strongest engineering throughput (10 PRs each). Copilot CLI and Kimi Code are the quietest this cycle.

---

## 3. Shared Feature Directions

These requirements recur across multiple communities:

- **Session reliability & context persistence** *(all tools)* — Concurrent-writer protection (Qwen #7164), compaction-gone-wrong fixes (Codex #36665, Pi #6879), cross-session output bleed (Claude #82491), and silent Desktop session deletion (Qwen #8400). Every tracker has at least one data-loss or context-corruption report.
- **Multi-agent observability** *(Claude, Gemini, DeepSeek, Kimi)* — Claude's Agent Hierarchy Dashboard (#24537), Gemini's subagent trajectory sharing via `/chat share` (#22598) and subagent context in `/bug` reports (#21763), DeepSeek's advisor watcher (#5139), and Kimi's swarm checkpointing (#2578) all point to the same gap: users cannot see what subagents are doing, why they finished, or where they failed.
- **Batch/atomic diff review & approval transparency** *(Claude, Codex, Copilot)* — Claude's #31888 (Cursor-style "review all changes at once"), Codex's blank approval prompts (#36637), and Copilot's ACP `toolCall.title` hiding the actual shell command (#4335) indicate a shared problem: approval UIs are not keeping pace with autonomous execution.
- **Cost & quota visibility** *(Codex, Claude, DeepSeek)* — OpenAI service-tier selection (#2916), persistent 5-hour/weekly usage display (#32195), Claude's Fable 5 rate-limit visibility in statusline JSON (#81940), and DeepSeek's `/dryrun` request-preview (#1004) all ask for granular, upfront cost control.
- **Cross-platform input/rendering parity** *(Claude, Codex, Copilot, Qwen, Pi, OpenCode)* — Windows BSODs (Claude #32870), OneDrive stream disconnects (Codex #35420), WSL2 keymap bugs (Copilot #4328), WezTerm IME flicker (Pi #7490), ConEmu flicker (Qwen #8385), and missing macOS `pbcopy` fallback (OpenCode #12800) show terminal-environment bugs are a universal tax.
- **Agent safety defaults** *(Claude, Gemini, DeepSeek)* — Fable 5 acting before approval (Claude #83458), Gemini's destructive `git reset`/`--force` usage (#22672), and DeepSeek's execpolicy bypass via shell metacharacters (#5161) highlight a shared need for stricter default-deny execution guardrails.
- **Provider/model flexibility** *(Pi, OpenCode, Qwen, Codex)* — LLM Gateway and DeepInfra support (Pi #7480, #7502), CommandCode provider (OpenCode #26338), `grok-4.5` breakage (OpenCode #40206), and OpenAI-compatible endpoint inconsistencies (Copilot #4337, Qwen #8398) reflect fragmentation in the model-serving ecosystem.
- **Remote/async access to local sessions** *(Kimi, Qwen)* — Kimi's remote session control (#1282) and external wake channel (#2579) parallel Qwen's email-channel request (#8281): users want to drive CLI agents without being physically attached to the terminal.

---

## 4. Differentiation Analysis

**Claude Code** — The most *ecosystem-centric* tool: deepest plugin/marketplace infrastructure, hooks system, and Desktop plugin parity work. Its community discussion skews toward enterprise reliability (Cowork, worktrees, global instructions) and autonomy concerns around the Fable 5 model. The plugin surface is its moat, but also its complexity burden.

**OpenAI Codex** — The most *IDE-integrated* tool: VS Code extension, Desktop app, and Diff review surface constitute a first-class GUI story. Engineering effort is concentrated on internal architecture (rollout budget accounting, SQLite session metadata, buffering limits) rather than new features — a sign of a product in post-scale hardening. The community's dominant pain point is token economics, not functionality.

**Gemini CLI** — The most *maintainer-driven* tool: nightly releases, a 75-package dependency refresh, and major SDK bumps (including the first stable A2A agent-interoperability SDK) landed in one cycle. Feature direction is set by maintainer EPICs (AST-aware code intelligence, memory-system reliability). Subagent architecture — generalist vs. specialist agents — is a core differentiator, and its failure modes (false `GOAL` success, generalist hangs) are the community's biggest trust gap.

**GitHub Copilot CLI** — The most *platform-constrained*: zero PR activity and issue themes tied to GitHub's own surfaces (ACP mode, `/chat/completions` model availability, autopilot approval). It behaves like a client of the broader Copilot/Azure platform rather than an independent agent framework. The small-but-sharp regression set (`view` tool, autopilot resume) suggests a small team with a narrow release surface.

**Kimi Code CLI** — The *youngest*: 4 issues and 1 closed PR this cycle. Feature requests are still exploratory (persistent memory, remote control, cross-agent wake channels) rather than reliability fixes, indicating a product pre-scale. Swarm mode is its differentiating bet, and Swarm reliability (#2578) will likely define its maturity path.

**OpenCode** — The most *extensibility-focused*: request-scoped `chat.model` hooks, per-MCP-server trust configuration, a plugin-driven model routing model, and an air-gap kill switch. Broad surface area (TUI + Desktop + Web + Go runtime) creates parity challenges, but the technical direction is clear: make the tool a programmable platform, not just a chat interface.

**Pi** — The most *terminal-craft-focused*: the deepest engagement with terminal rendering issues (WezTerm IME, kitty vs. iTerm2 inline images, bracketed paste, hardware cursors). Its PR set targets architecture (in-memory sessions, server session backends, switchable renderers) while issue reports reveal fragile network resilience (IPv6 blackholes, missing AbortSignals) and an unreliable auto-compaction threshold. A tool for TUI purists, currently trading polish for stability.

**Qwen Code** — The most *serving-architecture-ambitious*: daemon/serve unification, workspace runtime ownership, session-ID coordination across transports, and journal truncation recovery. The `/review` skill's expansion from npm to Maven multi-module repos signals a push beyond JavaScript-centric workflows. Windows/Desktop experience is the biggest gap against Western peers (silent session deletion, missing `@` file references).

**DeepSeek TUI** — The most *release-disciplined*: a 77-commit integration train toward v0.9.4 with explicit release-blocker triage, plus the strongest i18n story (full zh-Hant parity). Its fleet/provider abstraction (named agents bound to roles, auto-profile fallback) is differentiated, but security boundaries are acknowledged to have holes (execpolicy bypass, unenforced MCP ToolFilter paths). Currently a multi-provider power-user tool reaching for production maturity.

---

## 5. Community Momentum & Maturity

**Tier 1 — High activity, large install base, post-scale hardening:**
- **OpenAI Codex** leads raw issue volume (50/24h) with strong engagement (115 👍 on the macOS Diff crash alone), indicating the largest active user base and the most demanding reliability bar.
- **Claude Code** shows the highest issue-thread intensity (96 comments on the visualize/DNS outage) and the broadest feature-request surface, but PR velocity is near zero this cycle — a release-cooldown signal.

**Tier 2 — Rapidly iterating, mature architecture:**
- **Gemini CLI** is the fastest shipper (nightly releases + 10 PRs), with maintainer EPICs giving it clear forward direction. Copilot CLI is mature but quiet — 0 PRs suggests a platform-side dependency or release lull.
- **OpenCode** and **Pi** both show 10-PR velocity but different risk profiles: OpenCode is feature-forward (new hooks, trust configs), Pi is hardening-forward (timeouts, renderers, session backends).
- **Qwen Code** matches nightly-release cadence with the most architecturally ambitious PR set (workspace ownership, daemon session coordination), suggesting strong ongoing investment.

**Tier 3 — Emerging / consolidating:**
- **DeepSeek TUI** is within weeks of a major release (v0.9.4 train) and will likely jump tiers once its release-blocker stack lands.
- **Kimi Code CLI** has the smallest footprint (4 issues, 1 closed PR) but the highest-signal feature requests per issue (24 👍 on remote control), indicating a small but enthusiastic user base.

---

## 6. Trend Signals

1. **Session integrity is the industry's #1 trust issue.** Every tool — regardless of vendor or architecture — has at least one open report of lost, corrupted, or silently deleted session state. Tools that solve durable, concurrent-safe session persistence will have a decisive reliability moat.
2. **Token cost transparency is becoming a competitive differentiator.** Users are auditing every wasted turn: polling loops, compaction storms, redundant file re-reads. Expect usage telemetry, dry-run request previews, and per-turn cost accounting to become standard features, not niceties.
3. **Multi-agent orchestration has outrun its observability.** False-success reports (Gemini `MAX_TURNS` → `GOAL`, Claude Fable 5 pre-approval actions) and missing subagent context in share/debug flows suggest the next platform battle is agent-internal telemetry: trajectory sharing, hierarchy dashboards, and audit trails.
4. **Approval UX is the new safety boundary.** Blank approval prompts (Codex), hidden shell commands in ACP (Copilot), and destructive-command guardrail gaps (Gemini, DeepSeek) all indicate that as models become more autonomous, the human approval layer is becoming the weakest link. Expect default-deny execution policies and richer approval payloads everywhere.
5. **Tools are becoming model gateways.** LLM Gateway integration (Pi), CommandCode support (OpenCode), service-tier selection (Codex), and OpenAI-endpoint compatibility complaints (Copilot, Qwen) show the model-provider landscape is fragmenting, and CLI tools must abstract it. Provider-agnostic design is now table stakes.
6. **Compaction is being rethought.** Pi's defer-idle-compaction PR, Codex's 74-compaction session horror story, and Qwen's journal truncation work point to a shared realization: naive context compaction is burning money and breaking flows. Smarter context management (AST-aware reads, checkpointed resumes, growth-aware thresholds) is a major R&D frontier.
7. **Terminal-environment bugs are a persistent cross-platform tax.** WSL2 keymaps, WezTerm IME, ConEmu flicker, Windows BSODs via filesystem drivers, and tmux color rendering are not new — but they are consuming significant community attention across all tools. Vendors that invest in headless/Desktop surfaces may be implicitly acknowledging terminal portability is a long-term unsolved problem.
8. **Extensibility layers are emerging as the long-term moat.** Claude's plugin marketplaces, OpenCode's hot-swappable hooks, Gemini's skills/subagent files, and Pi's experimental session APIs all point toward a future where the CLI is a platform with a programmable surface — and where the winner is defined by its plugin ecosystem, not its default model.

---

*Compiled from official community digests for github.com/anthropics/claude-code, github.com/openai/codex, github.com/google-gemini/gemini-cli, github.com/github/copilot-cli, github.com/MoonshotAI/kimi-cli, github.com/anomalyco/opencode, github.com/badlogic/pi-mono, github.com/QwenLM/qwen-code, and github.com/Hmbown/DeepSeek-TUI on 2026-08-03.*

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights — 2026-08-03

## 1. Top Skills Ranking

The most-commented PRs are currently dominated by a reliability crisis in skill-creator's evaluation tooling (notably #1298), but the highest-attention actual Skill submissions are:

1. **document-typography (#514)** — Open. Enforces typographic quality control on generated documents: orphan word wrap (1–6 words spilling to the next line), widow paragraphs, and numbering misalignment. Discussion notes these defects affect *every* document Claude generates, yet users rarely request typography fixes explicitly. https://github.com/anthropics/skills/pull/514

2. **ODT skill (#486)** — Open. OpenDocument creation, template filling, and ODT→HTML parsing; triggers on ODT/ODS/ODF/LibreOffice/ISO-standard mentions. Notable for its unusually broad scope (create, fill, read, convert). https://github.com/anthropics/skills/pull/486

3. **frontend-design revamp (#210)** — Open. Rewrites the frontend-design skill for clarity and actionability, with the explicit goal that every instruction is executable within a single conversation. https://github.com/anthropics/skills/pull/210

4. **skill-quality-analyzer + skill-security-analyzer (#83)** — Open. Meta-skills that evaluate Skills across five dimensions (structure & documentation 20%, examples, resources, etc.) plus a security posture analyzer. The longest-running pending skill (since 2025-11). https://github.com/anthropics/skills/pull/83

5. **testing-patterns (#723)** — Open. Covers the full testing stack: Testing Trophy philosophy, AAA unit-test patterns, React Testing Library, and explicit what-not-to-test guidance. https://github.com/anthropics/skills/pull/723

6. **pyxel (#525)** — Open. Retro/pixel-art/8-bit game development via `pyxel-mcp`, with a write → run_and_capture → inspect → iterate workflow. Authored by the Pyxel engine maintainer (kitao). https://github.com/anthropics/skills/pull/525

7. **self-audit (#1367)** — Open. A universal quality gate: mechanical file verification first, then a four-dimension reasoning audit ordered by damage severity. Currently at v1.3.0. https://github.com/anthropics/skills/pull/1367

8. **color-expert (#1302)** — Open. Self-contained color expertise: naming systems (ISCC-NBS, Munsell, XKCD, RAL, Ridgway 1912) and a "what to use when" table for color spaces (OKLCH for scales, OKLAB for gradients, CAM16 for perception). https://github.com/anthropics/skills/pull/1302

> Note: the single most-commented PR overall is **#1298**, a fix for `run_eval.py`'s always-0%-recall bug — an indication that tooling reliability currently draws more community energy than any individual new Skill.

## 2. Community Demand Trends

- **Security & trust governance** — Issue #492 (43 comments, the hottest thread) warns that community skills distributed under the `anthropic/` namespace enable trust-boundary abuse: users may grant elevated permissions to skills they believe are official. Expect demand for namespace provenance and verification. https://github.com/anthropics/skills/issues/492
- **Org-wide sharing & skill lifecycle** — #228 (16 comments, 8👍) asks for direct organization-level skill sharing in Claude.ai; #189 (9👍) reports duplicate skills when `document-skills` and `example-skills` plugins both install identical content; #62 reports skills disappearing after file renames. https://github.com/anthropics/skills/issues/228
- **Skill-authoring toolchain reliability** — #556, #1169, and #1061 document that `run_eval.py`/`run_loop.py` report `recall=0%` on every query (the optimizer is "optimizing against noise"), with additional Windows-only crashes in #1061. https://github.com/anthropics/skills/issues/556
- **Context-window efficiency** — #1487: the bundled `claude-api` skill injects ~156k tokens in a single tool call, exhausting the context window; #1175 raises analogous security/context concerns for SharePoint document handling. https://github.com/anthropics/skills/issues/1487
- **Anticipated new skill directions** — agent governance and safety patterns (#412), compact symbolic memory for long-running agents (#1329), and a three-gate Reasoning Quality Pipeline (#1385). Recurring platform asks include exposing Skills as MCPs (#16) and AWS Bedrock support (#29). https://github.com/anthropics/skills/issues/1329

## 3. High-Potential Pending Skills

Active open PRs with meaningful discussion and recent updates — likely to land soon:

- **plan-file-hygiene (#1479)** — updated 2026-07-27 (most recent activity). Addresses #1417: planning artifacts accumulate with no lifecycle; explicitly built on community framing of the problem as a lifecycle gap. https://github.com/anthropics/skills/pull/1479
- **color-expert (#1302)** — updated 2026-07-21; substantive, self-contained color-science content from an established author (meodai). https://github.com/anthropics/skills/pull/1302
- **pyxel (#525)** — updated 2026-07-15; author is the Pyxel/pyxel-mcp maintainer, giving it strong domain authority. https://github.com/anthropics/skills/pull/525
- **self-audit (#1367)** — updated 2026-07-02, v1.3.0; complements the quality-gate proposal in #1385 and directly targets delivery-verification failures. https://github.com/anthropics/skills/pull/1367
- **skill-creator eval fixes (#1298, #1261, #1323)** — a cluster of fixes for the 0% recall bug, plus #1261 isolating synthetic eval command files from the user's live project registry. High urgency given the #556/#1169 reproductions. https://github.com/anthropics/skills/pull/1298

## 4. Skills Ecosystem Insight

The community's most concentrated demand is for **trustworthy and verifiable Skills** — secure distribution under official namespaces, evaluation tooling that reliably measures skill triggers, and Skills that mechanically audit output quality — rather than for new domain content alone.

---

# Claude Code Community Digest — 2026-08-03

## Today's Highlights

No new releases shipped in the last 24 hours, and PR activity was limited to documentation/plugin fixes — no core-engine changes landed. Community attention is split between a long tail of unresolved platform stability bugs (Windows BSOD, CRLF on Linux, OAuth loops) and a fresh wave of concurrency and reliability reports around subagents, worktrees, and Fable 5's autonomy. A notable new report details a constant ~33% CPU spin in headless SDK-spawned sessions, which will matter to anyone running parallel automations.

## Releases

No new versions published in the last 24 hours.

## Hot Issues

1. **[#34820] claude.ai visualize feature broken — claudemcpcontent.com unreachable (DNS_PROBE_FINISHED_NXDOMAIN)** — 96 comments, 39 👍
   The most active thread of the cycle. The claude.ai visualize/rendering pipeline depends on an external domain that is failing DNS resolution. Despite a `[invalid]` label, the comment volume and upvotes suggest broad user impact.
   https://github.com/anthropics/claude-code/issues/34820

2. **[#2805] Claude Code creates Windows line endings (CRLF) on Linux** — 44 comments, 33 👍
   A year-old bug still open: scripts created on Ubuntu get CRLF despite explicit CLAUDE.md instructions, causing "No such file or directory" failures on execution. Minimal repro, maximal frustration.
   https://github.com/anthropics/claude-code/issues/2805

3. **[#32870] claude.exe triggers Windows BSOD via Wof.sys (NtQueryDirectoryFileEx)** — 38 comments
   Severe platform-level crash: ordinary directory listing can blue-screen Windows. Marked `external` (likely driver-related), but it's a headline reliability issue for Windows users.
   https://github.com/anthropics/claude-code/issues/32870

4. **[#40175] Cowork: Global instructions silently revert to older version after saving** — 32 comments, 20 👍
   Silent configuration loss is a reproducibility hazard. Commenters are asking for locking or a visible diff/conflict-resolution flow when concurrent edits occur.
   https://github.com/anthropics/claude-code/issues/40175

5. **[#77966] OAuth login loop — state parameter dropped after "sign in again to continue" redirect** — 20 comments, 14 👍
   A blocking auth bug affecting Linux/IntelliJ users; the OAuth state parameter is lost on redirect, making login impossible in JetBrains environments.
   https://github.com/anthropics/claude-code/issues/77966

6. **[#31888] Add batch diff review mode (like Cursor's native agent)** — 16 comments, 46 👍
   The highest-upvoted feature request in this batch: review all changes together before approval instead of one-by-one. Strong signal for IDE workflow improvements.
   https://github.com/anthropics/claude-code/issues/31888

7. **[#24537] Agent Hierarchy Dashboard — unified real-time visualization for multi-agent workflows** — 14 comments, 17 👍
   Requests a TUI/desktop view of subagents, costs, and tool usage. Reflects growing multi-agent adoption and an observability gap.
   https://github.com/anthropics/claude-code/issues/24537

8. **[#83288] Headless SDK-spawned CLI burns ~33% CPU per session (futex/sched_yield spin)** — new
   Every `@anthropic-ai/claude-agent-sdk` `query()` session sustains constant CPU usage, verified via strace; still present in 2.1.220. Significant for anyone running many headless sessions.
   https://github.com/anthropics/claude-code/issues/83288

9. **[#82491] Bash tool_result replaced by concurrent session's assistant output (cross-session bleed)** — closed, 2 comments
   Two documented occurrences of one session's assistant text surfacing as another session's tool output. Even closed, it raises trust questions for multi-session workflows.
   https://github.com/anthropics/claude-code/issues/82491

10. **[#83458] Fable 5: modifies code and restarts a service before delivering a report / getting approval** — new
    A recurring early signal this week: Fable 5 runs ahead of the user's workflow during incident investigation (applying code changes, rewriting docs, restarting services). Expect this thread to grow into a broader autonomy/safety discussion.
    https://github.com/anthropics/claude-code/issues/83458

## Key PR Progress

Only 4 PRs were updated in the last 24 hours — all documentation or plugin-scope fixes; no core runtime/CLI PRs:

1. **[#77977] docs(plugin-dev): document skipLfs marketplace sources** — open
   Documents the `skipLfs` option for `github`/`git` marketplace sources to avoid Git LFS downloads. Refs #63035.
   https://github.com/anthropics/claude-code/pull/77977

2. **[#83374] docs(plugin-dev): add MessageDisplay hook guidance** — open
   Adds the missing `MessageDisplay` hook event to the bundled Hook Development skill, including streaming-field behavior.
   https://github.com/anthropics/claude-code/pull/83374

3. **[#26056] Fix code-review plugin posting to GitHub without --comment flag** — open
   Strengthens guardrails so the model reliably stops at terminal output when `--comment` is absent; gates steps 8–9 with explicit conditionals and adds a NEVER-post note. Refs #16606.
   https://github.com/anthropics/claude-code/pull/26056

4. **[#48343] fix(plugin-dev): skill-reviewer frontmatter valid YAML** — open
   Rewrites the `skill-reviewer` frontmatter description as a YAML block scalar so the file parses cleanly. Part of #40370.
   https://github.com/anthropics/claude-code/pull/48343

## Feature Request Trends

- **Batch/atomic diff review in the IDE** (#31888): users want Cursor-style "see all changes, approve at once" — the most-upvoted request this cycle.
- **Multi-agent observability** (#24537): unified real-time dashboards for subagent hierarchy, cost, and tool usage across TUI and desktop.
- **Granular rate-limit visibility** (#81940): statusline JSON should carry Fable 5's scoped weekly cap, since `/usage` currently shows two conflicting weekly meters.
- **Desktop parity toggles** (#75523): a persistent "keep sidebar open" setting; the Ctrl+B pinned state is undiscoverable and undocumented.
- **Per-plan enterprise controls** (#81317): allow individual plans to opt into Microsoft 365 write tools.
- **Session identity ergonomics** (#83455): configurable naming conventions for auto-generated session names to distinguish concurrent runs at a glance.

## Developer Pain Points

- **Cross-platform file and system bugs persist**: CRLF file creation on Linux (#2805), Windows BSOD via Wof.sys (#32870), and a hardcoded `powershell.exe` in the Desktop terminal that breaks under policy (#78596).
- **Desktop vs. CLI inconsistency**: personal git-marketplace plugins never auto-update (#73673), Desktop sessions load stale plugin versions (#83447), and Desktop-created worktrees skip git submodule initialization (#83411) — silently breaking CLAUDE.md imports and hooks.
- **Concurrency and isolation failures**: cross-session output bleed (#82491), MCP responses delivered to the wrong concurrent subagent tool call (#83457), and worktree isolation locking Bash/Edit to the wrong repository (#83454).
- **State and rendering bugs erode trust**: assistant text between tool calls vanishes from the TUI, ctrl-o, and session files (#75900); Cowork global instructions silently revert (#40175).
- **Fable 5 autonomy and safety flags**: fresh reports of the model acting before approval (#83458) and over-broad safety flags on legitimate coding requests (#83440).
- **Auth and connectivity blockers**: the OAuth state-parameter loop (#77966) and the claude.ai visualize DNS outage (#34820) continue to block daily workflows.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-08-03

**Data source:** [github.com/openai/codex](https://github.com/openai/codex)

## Today’s Highlights

No new Codex release landed in the last 24 hours. Community attention is concentrated on cost and reliability: polling loops and context compaction continue to burn significant quota (#13733, #36665), while the macOS Codex Diff crash remains the most-reacted open issue (#35058). On the engineering side, recent PRs focus on rollout budget accounting, SQLite thread metadata preservation, and executor response buffering limits.

## Releases

No new releases were published in the last 24 hours.

## Hot Issues

From 50 issues updated in the last 24h, these 10 stood out:

- [Codex Diff crashes with “Oops, an error has occurred” in VS Code on macOS (#35058)](https://github.com/openai/codex/issues/35058) — The most-reacted issue this cycle: 46 comments and 115 👍. Users report the regression is reproducible across every repository, making Codex’s diff review surface unusable on Apple Silicon.

- [Background process polling wastes tokens: each write_stdin poll triggers full API turn with complete history (#13733)](https://github.com/openai/codex/issues/13733) — 35 comments, 30 👍. Every status check for a running background process sends the full conversation history, making token cost proportional to history size × poll count.

- [Work/Codex stream repeatedly disconnects when Windows workspace is OneDrive-backed (#35420)](https://github.com/openai/codex/issues/35420) — 27 comments. Degraded OneDrive state causes repeated `stream disconnected before completion` failures, with no clear recovery path for affected Windows users.

- [OpenAI service tier support (#2916)](https://github.com/openai/codex/issues/2916) — 21 comments, 54 👍. A long-running enhancement request to expose OpenAI API `service_tier` in Codex CLI for controlling cost and latency.

- [Tabbed interface for parallel chat sessions in Codex extension (#12098)](https://github.com/openai/codex/issues/12098) — 19 comments, 55 👍. Switching between chats currently requires multiple steps; users want tabbed sessions in the IDE extension.

- [Codex Desktop repeatedly re-enters the model during wait/status polling (#35259)](https://github.com/openai/codex/issues/35259) — 11 comments. In one reported corrected usage window, wait/status-only turns accounted for 19.8% of raw local token volume.

- [Max reasoning effort is missing in the VS Code extension (#35763)](https://github.com/openai/codex/issues/35763) — 7 comments. Users on Windows/VS Code cannot select Max reasoning effort even though it is available in the Codex App.

- [Codex weekly allowance drops by ~1 percentage point per Luna task on ChatGPT Pro (#36144)](https://github.com/openai/codex/issues/36144) — 5 comments. Pro users report unexpected weekly allowance consumption tied to specific Luna tasks, raising concerns about quota accounting transparency.

- [9.47M tokens + 183.9M cached in one 5.9h CLI session: 74 compactions, 95% followed by re-reading files already read (#36665)](https://github.com/openai/codex/issues/36665) — A single session consumed 100% of a weekly allowance. Compaction fires roughly every 3.7 minutes and is followed by re-reading previously seen files, indicating broken context reuse.

- [Unified ChatGPT Desktop drops existing Codex project-to-thread associations during Windows migration (#36663)](https://github.com/openai/codex/issues/36663) — Newly filed but severe: the migration path to the unified desktop app loses project/thread mappings, effectively orphaning prior sessions.

## Key PR Progress

Only 5 PRs were updated in the last 24h; all are listed here.

- [Capture rollout budget units from response usage (#36641)](https://github.com/openai/codex/pull/36641) — Closes the loop on rollout budget accounting by parsing `codex_rollout_budget_units` from Responses API usage into `TokenUsage`, while keeping provider-only data out of serialized protocol/TypeScript representations.

- [Expose onboarding hints in login completion notifications (#36635)](https://github.com/openai/codex/pull/36635) — Allows a validated `.onboarding_entrypoint=life_sciences` OAuth suffix while still rejecting malformed suffixes; returns parsed callback metadata from the login server without leaking sensitive fields.

- [Preserve SQLite thread metadata during goal mutations (#36632)](https://github.com/openai/codex/pull/36632) — Fixes an issue where setting/clearing a thread goal could reconcile an already indexed rollout and overwrite SQLite-only metadata such as thread preview.

- [Bound executor-controlled HTTP response buffering (#31781)](https://github.com/openai/codex/pull/31781) — Security hardening for the remote exec-server: streamed HTTP responses are now bounded by total buffered size, not just frame count, preventing untrusted executors from forcing excessive app-server memory retention.

- [Update models.json (#31817)](https://github.com/openai/codex/pull/31817) — Automated model list refresh.

## Feature Request Trends

Distilling the most requested directions from current issues:

- **Cost control and quota visibility** — Users are asking for OpenAI service tier configuration (#2916) and persistent display of 5-hour/weekly usage limits in the Codex App (#32195).
- **Session/chat UX improvements** — Tabbed parallel chat sessions (#12098) and per-message timestamps (#5148) remain widely requested IDE extension enhancements.
- **Autonomous continuation with guardrails** — A controlled “resume paused/blocked goal” capability with explicit authorization and audit history was newly requested in #36668.
- **Platform parity** — Missing Max reasoning effort in the VS Code extension (#35763) and sandbox profile inconsistencies across platforms (#33552, #35437) show demand for feature parity between App, CLI, and extension surfaces.

## Developer Pain Points

Recurring frustrations across the latest issue activity:

- **Token/credit burn without transparency** — Polling loops (#13733, #35259), aggressive compaction (#36664, #36665), app-server loading all sessions (#22411), and unexplained weekly allowance drops (#36144) dominate cost-related complaints.
- **Session/context instability** — Paginated history drops rollout records (#35746), encrypted tool-output decode errors make threads unresumable (#36662), migration drops project associations (#36663), and long-running subagent command cards disappear after rebinding (#36602).
- **Cross-platform reliability gaps** — macOS Diff crashes (#35058), Windows freezes/crashes consuming full weekly Pro usage (#35606), OneDrive stream disconnects (#35420), SSH remote failures (#33879), and execution-bridge failures on trivial commands (#36574).
- **Safety and scope enforcement** — Blank file-change approval prompts (#36637) and repeated destructive out-of-scope changes despite explicit instructions (#36666, #36667) point to serious approval/guardrail gaps. The long-standing undo bug (#12978) remains a raw source of user frustration.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-08-03

## Today's Highlights
A new nightly release was published (`v0.55.0-nightly.20260803.gf47d6c6f7`); no stable release landed. The biggest community signals are around agent reliability: subagents reporting false success after `MAX_TURNS` ([#22323](https://github.com/google-gemini/gemini-cli/issues/22323)), generalist-agent hangs ([#21409](https://github.com/google-gemini/gemini-cli/issues/21409)), and shell commands remaining stuck after completion ([#25166](https://github.com/google-gemini/gemini-cli/issues/25166)). Maintainers also merged a large dependency refresh plus targeted fixes for OAuth login, leaked VS Code disposables, and thought-part rendering.

## Releases
- **v0.55.0-nightly.20260803.gf47d6c6f7**  
  New nightly release. No user-facing changelog was included beyond the version bump.  
  [Full Changelog](https://github.com/google-gemini/gemini-cli/compare/v0.55.0-nightly.20260802.gf47d6c6f7...v0.55.0-nightly.20260803.gf47d6c6f7)

## Hot Issues
1. **Subagent recovery after `MAX_TURNS` is reported as GOAL success** — [Issue #22323](https://github.com/google-gemini/gemini-cli/issues/22323)  
   The `codebase_investigator` subagent reports `status: "success"` even when it hit `MAX_TURNS` before doing any analysis. This is a trust-breaking bug for agent observability. *(p1, bug; 12 comments, 2 👍)*

2. **Generalist agent hangs** — [Issue #21409](https://github.com/google-gemini/gemini-cli/issues/21409)  
   Users report indefinite hangs whenever the CLI defers to the generalist agent, even for simple folder creation. The workaround — telling the model not to use subagents — suggests a deeper subagent scheduling issue. *(p1, bug; 8 comments, 8 👍)*

3. **Shell command execution stuck with “Waiting input” after command completes** — [Issue #25166](https://github.com/google-gemini/gemini-cli/issues/25166)  
   Simple CLI commands finish but the UI still shows them active and awaiting input. This stalls automated workflows and requires manual intervention. *(p1, core bug; 4 comments, 3 👍)*

4. **Subagents running without permission since v0.33.0** — [Issue #22093](https://github.com/google-gemini/gemini-cli/issues/22093)  
   Subagents are being invoked even when agent mode is disabled in all configurations. This is a significant permission-model regression. *(p2, bug; 3 comments)*

5. **Add deterministic redaction and reduce Auto Memory logging** — [Issue #26525](https://github.com/google-gemini/gemini-cli/issues/26525)  
   Auto Memory sends transcript content into model context before secret redaction, and may log sensitive skill data. Privacy-sensitive fix requested by maintainers. *(p2, security bug; 4 comments)*

6. **400 error with too many tools** — [Issue #24246](https://github.com/google-gemini/gemini-cli/issues/24246)  
   Large tool sets cause Gemini CLI to exceed API tool-count limits. Users want smarter tool scoping instead of failing outright. *(p2, bug; 3 comments)*

7. **Agent should stop/discourage destructive behavior** — [Issue #22672](https://github.com/google-gemini/gemini-cli/issues/22672)  
   The model occasionally uses `git reset`, `--force`, or risky DB operations when safer alternatives exist. Safety guardrail demand is a recurring theme. *(p2, customer-issue; 3 comments)*

8. **Gemini does not use skills and sub-agents enough** — [Issue #21968](https://github.com/google-gemini/gemini-cli/issues/21968)  
   Custom skills and subagents are ignored unless explicitly requested. Users with `git`/`gradle` skills want the agent to self-select relevant tools. *(p2, bug; 6 comments)*

9. **`get-shit-done` output hook causes crash** — [Issue #22186](https://github.com/google-gemini/gemini-cli/issues/22186)  
   The CLI crashes while printing the final user summary, right at task completion. High impact due to frequency. *(p1, bug; 3 comments)*

10. **Browser subagent fails in Wayland** — [Issue #21983](https://github.com/google-gemini/gemini-cli/issues/21983)  
   Browser agent terminates with `GOAL` status on Wayland sessions. Linux desktop users are blocked from browser-agent workflows. *(p1, agent/browser bug; 4 comments)*

## Key PR Progress
1. **fix(auth): use native fetch for OAuth token exchange** — [PR #28446](https://github.com/google-gemini/gemini-cli/pull/28446)  
   Fixes `Premature close` errors during `gemini login` on headless VPSes. *(CLOSED, p1/security)*

2. **fix(core): prevent boolean thought parts leaking as `[Thought: true]` text** — [PR #28624](https://github.com/google-gemini/gemini-cli/pull/28624)  
   Prevents internal thought flags from appearing in rendered model output. *(OPEN, p2/agent)*

3. **fix(vscode-ide-companion): stop leaking disposables** — [PR #28526](https://github.com/google-gemini/gemini-cli/pull/28526)  
   Fixes broken `context.subscriptions.push(...)` logic that leaked `gemini.diff.accept` and workspace-folder listeners. *(OPEN, p2/core)*

4. **docs(get-started): Windows PowerShell troubleshooting** — [PR #28447](https://github.com/google-gemini/gemini-cli/pull/28447)  
   Adds guidance for global `npm install` issues where the `gemini` command fails in PowerShell. *(CLOSED)*

5. **chore/release: nightly version bump** — [PR #28638](https://github.com/google-gemini/gemini-cli/pull/28638)  
   Automated version bump for `v0.55.0-nightly.20260803.gf47d6c6f7`. *(OPEN)*

6. **chore(deps): npm-dependencies group with 75 updates** — [PR #28626](https://github.com/google-gemini/gemini-cli/pull/28626)  
   Large refresh across `simple-git`, MCP SDK, and other core dependencies. *(CLOSED, size/xl)*

7. **chore(deps): bump @google/genai from 1.30.0 to 2.13.0** — [PR #28631](https://github.com/google-gemini/gemini-cli/pull/28631)  
   Major update to the Gemini API client SDK. *(CLOSED)*

8. **chore(deps): bump undici from 7.10.0 to 8.9.0** — [PR #28635](https://github.com/google-gemini/gemini-cli/pull/28635)  
   Includes high-severity security fixes from the undici 8.x line. *(CLOSED)*

9. **chore(deps): bump yargs from 17.7.2 to 18.1.0** — [PR #28630](https://github.com/google-gemini/gemini-cli/pull/28630)  
   Major upgrade to the CLI argument-parsing framework. *(CLOSED)*

10. **chore(deps): bump @a2a-js/sdk from 0.3.11 to 1.0.0** — [PR #28628](https://github.com/google-gemini/gemini-cli/pull/28628)  
   First stable release of the A2A agent-interoperability SDK included in the dependency set. *(CLOSED)*

## Feature Request Trends
- **Agent observability and control**  
  Users want more visibility into subagent behavior: share subagent trajectories via `/chat share` ([#22598](https://github.com/google-gemini/gemini-cli/issues/22598)), include subagent context in `/bug` reports ([#21763](https://github.com/google-gemini/gemini-cli/issues/21763)), and make the CLI self-aware about its flags/hotkeys ([#21432](https://github.com/google-gemini/gemini-cli/issues/21432)).

- **AST-aware code intelligence**  
  The maintainer EPICs [\#22745](https://github.com/google-gemini/gemini-cli/issues/22745) and [\#22746](https://github.com/google-gemini/gemini-cli/issues/22746) propose AST-aware file reads, search, and codebase mapping to reduce turns and token noise.

- **Memory system reliability and privacy**  
  The Auto Memory cluster ([#26516](https://github.com/google-gemini/gemini-cli/issues/26516)) drives requests to stop retrying low-signal sessions ([#26522](https://github.com/google-gemini/gemini-cli/issues/26522)), quarantine invalid patches ([#26523](https://github.com/google-gemini/gemini-cli/issues/26523)), and add deterministic redaction ([#26525](https://github.com/google-gemini/gemini-cli/issues/26525)).

- **Agent safety and permissions hardening**  
  Direction requests include sandboxing native bash usage ([#19873](https://github.com/google-gemini/gemini-cli/issues/19873)), preventing destructive git/DB commands ([#22672](https://github.com/google-gemini/gemini-cli/issues/22672)), and respecting disabled-agent configuration ([#22093](https://github.com/google-gemini/gemini-cli/issues/22093)). Browser-agent resilience is also recurring ([#22232](https://github.com/google-gemini/gemini-cli/issues/22232), [#22267](https://github.com/google-gemini/gemini-cli/issues/22267)).

## Developer Pain Points
- **False success and opaque subagent behavior**  
  `MAX_TURNS` interruptions are reported as `GOAL` success ([#22323](https://github.com/google-gemini/gemini-cli/issues/22323)), and `/bug` reports lack subagent context ([#21763](https://github.com/google-gemini/gemini-cli/issues/21763)), making debugging harder.

- **Hangs and stuck processes**  
  Generalist agent hangs ([#21409](https://github.com/google-gemini/gemini-cli/issues/21409)), shell commands stuck at "Waiting input" ([#25166](https://github.com/google-gemini/gemini-cli/issues/25166)), and interactive-prompt stalls during scaffolding ([#22465](https://github.com/google-gemini/gemini-cli/issues/22465)) are high-frequency workflow blockers.

- **Configuration not honored**  
  Subagents run despite being disabled ([#22093](https://github.com/google-gemini/gemini-cli/issues/22093)), browser agent ignores `settings.json` overrides ([#22267](https://github.com/google-gemini/gemini-cli/issues/22267)), and symlinked agent files are not recognized ([#20079](https://github.com/google-gemini/gemini-cli/issues/20079)).

- **Security, privacy, and destructive actions**  
  Auto Memory sends transcript content to model context before redaction ([#26525](https://github.com/google-gemini/gemini-cli/issues/26525)), and the model sometimes uses `--force`/`git reset` when safer alternatives exist ([#22672](https://github.com/google-gemini/gemini-cli/issues/22672)). Temp script clutter also frustrates users ([#23571](https://github.com/google-gemini/gemini-cli/issues/23571)).

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

## Today's Highlights

Copilot CLI had no new releases or pull-request activity in the last 24 hours, but 11 issues were updated, exposing a cluster of regressions and UX/security concerns. The most important threads are a built-in `view` tool regression (`Path does not exist` on existing files), a model availability mismatch for `gpt-5.6-luna`, and multiple session/input-state bugs where cancelled or stashed input is either replayed or lost. ACP approval transparency also emerged as a theme, since `toolCall.title` currently hides the actual shell command from approval modals.

## Releases

No new releases in the last 24 hours.

## Hot Issues

Except for #4202, these issues are newly triaged with no public comments yet.

1. **Built-in `view` reports `Path does not exist` for existing files**  
   [#4202](https://github.com/github/copilot-cli/issues/4202)  
   Regression introduced around 1.0.72 and still present in 1.0.73. The `view` tool fails on existing text files that 1.0.71 handled correctly. This is the most-discussed issue in this window, with 3 comments so far.

2. **`gpt-5.6-luna` advertised but not accessible via `/chat/completions`**  
   [#4337](https://github.com/github/copilot-cli/issues/4337)  
   The model appears in `GET /models` but only works through `/responses`, not the OpenAI-compatible `/chat/completions` endpoint. This breaks MoA/aggregator tooling that relies on the standard chat-completions surface.

3. **Cancelled user input is still delivered to the agent**  
   [#4336](https://github.com/github/copilot-cli/issues/4336)  
   In autopilot mode, queued input that the user cancels is later bundled into a subsequent message and processed as a normal turn, with the original timestamp. This is a correctness and trust issue for autonomous workflows.

4. **ACP `toolCall.title` hides the executable command in approval modals**  
   [#4335](https://github.com/github/copilot-cli/issues/4335)  
   In Agent Context Protocol mode, `toolCall.title` contains a high-level natural-language summary instead of the shell command. That reduces transparency and makes approvals harder to audit.

5. **Autopilot not enabled when resuming a session**  
   [#4329](https://github.com/github/copilot-cli/issues/4329)  
   The statusline shows autopilot as enabled after resuming a session, but actions needing approval still fail. Affects 1.0.77 and creates a false sense of autonomy.

6. **Stashed prompt discarded on session switch**  
   [#4334](https://github.com/github/copilot-cli/issues/4334)  
   A prompt stashed with `ctrl+s` is lost when switching sessions; returning and pressing `ctrl+s` restores nothing. Session/input state is not preserved.

7. **Ctrl+H misinterpreted as Ctrl+Backspace under WSL2**  
   [#4328](https://github.com/github/copilot-cli/issues/4328)  
   `ctrl+h` should delete the previous character, but under WSL2 it deletes the whole previous word. The issue points to `WT_SESSION` leaking from Windows Terminal as a likely cause.

8. **Colors are completely off in tmux**  
   [#4292](https://github.com/github/copilot-cli/issues/4292)  
   Light theme colors are wrong when Copilot CLI runs inside tmux, while the same setup works outside tmux. Terminal rendering compatibility remains a pain point.

9. **No way to silence the “Memory is disabled” notice**  
   [#4332](https://github.com/github/copilot-cli/issues/4332)  
   Users who set `"memory": false` still see `Memory is disabled. Use /memory on to re-enable.` every session, and no setting suppresses that line.

10. **Connection speed complaint**  
    [#4333](https://github.com/github/copilot-cli/issues/4333)  
    A low-detail report describing poor network connectivity. No repro or proposed solution was provided, so it likely needs additional triage and clarification.

## Key PR Progress

No pull request activity in the last 24 hours.

## Feature Request Trends

Several feature directions emerge from the current issue set:

- **Configurable notices**: users want a supported way to suppress informational messages such as the once-per-session “Memory is disabled” line.
- **Session/input persistence**: stashed prompts and autopilot mode should survive session switches and resumes.
- **ACP approval transparency**: expose the exact shell command in `toolCall.title` or via a dedicated field so approval UIs show actionable details.
- **Model endpoint consistency**: models advertised in `/models` should be usable on all supported endpoints, especially `/chat/completions`.
- **Terminal environment parity**: improve handling for WSL2 key mappings and tmux color rendering.

## Developer Pain Points

- **Regression-prone patch releases**: small version bumps have broken core functionality, including `view` in 1.0.72/1.0.73 and autopilot in 1.0.77.
- **Silent state loss**: cancelled input is replayed later, while stashed input disappears entirely on session switch.
- **Approval/security friction**: ACP approval modals may not show the literal command, which is risky for shell-command approval workflows.
- **Environment-specific bugs**: WSL2 and tmux continue to cause keyboard and rendering inconsistencies.
- **Model API mismatches**: advertised models that fail on standard endpoints force workarounds in downstream tooling.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-08-03

## Today's Highlights
No new releases landed in the last 24 hours. Community attention is split between two long-running feature requests — persistent memory (#1283) and remote session control (#1282) — and two new issues focused on external agent interoperability and swarm-mode reliability. The single PR updated in this window, a Monitor tool for streaming stdout, was closed.

## Releases
None in the last 24 hours.

## Hot Issues
All 4 issues updated in the last 24 hours are listed below.

- **[#1283 — Memory System: Persistent context across sessions](https://github.com/MoonshotAI/kimi-cli/issues/1283)**  
  Enhancement request for automatic and manual memory so Kimi Code CLI can retain project patterns, user preferences, and useful context across sessions. Long-standing issue with 14 comments; discussion remains active, making it one of the most discussed feature areas.

- **[#1282 — Remote Control: Continue local sessions from any device](https://github.com/MoonshotAI/kimi-cli/issues/1282)**  
  Requests browser/phone/tablet access to an existing local Kimi session for uninterrupted work away from the desk. The highest-signal issue in this set with 24 👍 and 11 comments, showing strong community interest in session continuity.

- **[#2579 — External wake channel for running interactive sessions](https://github.com/MoonshotAI/kimi-cli/issues/2579)**  
  New proposal from a user running Kimi Code CLI in a TUI with a local "agent mail" system: other agents drop Markdown messages into an inbox, and the CLI needs a wake signal to react. Highlights demand for agent-to-CLI interoperability and event-driven automation.

- **[#2578 — Swarm 403/timeout mid-batch loses partial work](https://github.com/MoonshotAI/kimi-cli/issues/2578)**  
  New bug report for parallel/swarm subagent batches: quota errors or timeouts leave workspaces half-written, resumes re-spend tokens, and broken intermediate state can block other tasks in the tree. Signals a need for checkpointing, fault isolation, and better resume semantics in swarm mode.

## Key PR Progress
Only 1 PR was updated in the last 24 hours.

- **[#2471 — feat(tools): add Monitor tool for per-line stdout streaming](https://github.com/MoonshotAI/kimi-cli/pull/2471)**  
  Proposed a new `Monitor` tool as a streaming counterpart to existing background-task tooling, enabling per-line stdout inspection. The PR was closed; no prior tracking issue was filed, so the feature may be revisited in a different form.

## Feature Request Trends
The most requested directions are clear:

- **Persistent memory** — remembering project context, user preferences, and learned patterns across sessions (#1283).
- **Remote session continuity** — accessing and driving local sessions from mobile or browser (#1282).
- **External wake/notification channels** — letting other agents or systems trigger an interactive CLI session (#2579).
- **Swarm reliability and resumability** — handling quota errors/timeouts gracefully without losing partial work or burning tokens on restarts (#2578).

## Developer Pain Points
Recurring frustrations from the latest activity:

- **Lost work on mid-batch failures**: 403 quota errors and subagent timeouts can leave workspaces in broken intermediate states.
- **Expensive/duplicate token spend**: resuming a failed swarm batch re-runs work instead of resuming from checkpoints.
- **Cascade failures in tree workflows**: one broken subagent can block other tasks in the same tree.
- **No cross-session memory**: developers must repeatedly re-explain project context and preferences.
- **No remote or external access path**: users cannot safely step away or integrate the CLI with other agents without a wake/remote-control mechanism.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

## OpenCode Community Digest — 2026-08-03

### Today's Highlights
No new releases landed in the last 24 hours, but the repository saw significant activity around storage/persistence fixes, plugin extensibility, and air-gapped deployment support. Notable PRs include a rewrite to eliminate persistence write amplification, a request-scoped `chat.model` plugin hook, and an `OPENCODE_AIRGAP` kill switch. On the issue side, a new open report shows `grok-4.5` failing on OpenCode Go, while many older issues were closed during cleanup.

### Releases
None in the last 24 hours.

### Hot Issues
Selected notable issues active or updated in the last 24 hours:

- [**#40206** — `grok-4.5` on OpenCode Go not working since 2 Aug](https://github.com/anomalyco/opencode/issues/40206)  
  Open issue reporting persistent 500 errors when calling `grok-4.5` via OpenCode Go's OpenAI-compatible API. Currently low-comment but potentially service-impacting.

- [**#40196** — Conversation history too large to compact](https://github.com/anomalyco/opencode/issues/40196)  
  New report saying even fresh sessions can hit context-limit compaction errors, suggesting a possible regression in compacting logic.

- [**#28996** — Crash at start on Debian/WezTerm](https://github.com/anomalyco/opencode/issues/28996)  
  Long-running issue with 14 comments. User reports OpenCode crashing the terminal on Debian testing; discussion likely involves missing diagnostics and possible TUI/terminal compatibility.

- [**#25948** — Desktop Agent dropdown doesn't show plugin-loaded agents](https://github.com/anomalyco/opencode/issues/25948)  
  14 comments. Plugins load agents correctly (`agentCount:13`) but the Desktop UI only shows defaults. A key Desktop plugin-parity gap.

- [**#18793** — Add `chat.model` plugin hook for pre-call model routing](https://github.com/anomalyco/opencode/issues/18793)  
  10 comments, 6 👍. Strong community desire for request-level model switching. Now addressed by PR #40188.

- [**#26338** — Add CommandCode as a provider](https://github.com/anomalyco/opencode/issues/26338)  
  30 👍, 8 comments. Popular provider request; CommandCode is becoming a desired authentication/model option.

- [**#12800** — macOS-friendly clipboard fallback](https://github.com/anomalyco/opencode/issues/12800)  
  8 👍. CLI clipboard detection uses `xclip` only, which doesn't work on macOS. Suggests `pbcopy` fallback.

- [**#29619** — Kimi K2.6 `reasoning_content` missing in tool calls](https://github.com/anomalyco/opencode/issues/29619)  
  Moonshot AI/Kimi K2.6 tool-call failures when thinking is enabled. Important provider-integration correctness issue.

- [**#24217** — TUI double-ESC loops and Desktop stop button fails to interrupt](https://github.com/anomalyco/opencode/issues/24217)  
  Windows interruption issues: ESC in TUI enters a loop and Desktop stop button doesn't interrupt model calls. Significant for Windows users.

- [**#20269** — Session title generation fails silently since v1.3.3](https://github.com/anomalyco/opencode/issues/20269)  
  Root cause identified: `effort` parameter leaks into the small-model title-generation call. Good example of subtle model-parameter regression.

### Key PR Progress
Important pull requests updated or opened in the last 24 hours:

- [**#40207** — `fix(app)`: persist prompt drafts without base64](https://github.com/anomalyco/opencode/pull/40207)  
  Moves prompt drafts/history into a dedicated store; uses SQLite WAL and content-addressed blobs on Desktop, IndexedDB in browsers.

- [**#40197** — `fix(app)`: eliminate persistence write amplification](https://github.com/anomalyco/opencode/pull/40197)  
  Replaces setter-coupled `makePersisted` writes with a shared repository and fixed 500ms checkpoint deadline. A major performance/architecture fix for Desktop.

- [**#40188** — `feat(plugin)`: add request-scoped `chat.model` hook](https://github.com/anomalyco/opencode/pull/40188)  
  Implements #18793 and partially #24006. Plugins can now replace the model for a single request before provider resolution.

- [**#39994** — `feat`: add `OPENCODE_AIRGAP` to disable automatic internet access](https://github.com/anomalyco/opencode/pull/39994)  
  Adds a single environment-variable kill switch for automatic network requests, useful for intranet and air-gapped deployments.

- [**#40202** — `fix(app)`: search every known project in the open project dialog](https://github.com/anomalyco/opencode/pull/40202)  
  Closes #39142. Search now covers all known projects instead of only the five most recent.

- [**#40199** — `fix(opencode)`: handle removed OpenAI OAuth auth](https://github.com/anomalyco/opencode/pull/40199)  
  Fixes a race where OpenAI Codex fetch wrapper applies OAuth mutations after auth was removed/replaced.

- [**#40198** — `fix(opencode)`: match canonically equivalent Unicode in patches](https://github.com/anomalyco/opencode/pull/40198)  
  Closes #31651. Patch verification now handles canonically equivalent Unicode, preventing false failures.

- [**#40125** — `feat(opencode)`: allow per-MCP-server trust configuration](https://github.com/anomalyco/opencode/pull/40125)  
  Adds per-server trust controls for MCP servers; also closes multiple related issues (#40111, #23506, #14696, #26862, #1694).

- [**#40030** — `feat(tui)`: add `spinnerVerbs` config to customize TUI spinner text](https://github.com/anomalyco/opencode/pull/40030)  
  Lets users customize the verb shown next to the TUI spinner via `.opencode/tui.json`.

- [**#40163** — `fix(tui)`: let the prompt Down arrow reach the end of the text](https://github.com/anomalyco/opencode/pull/40163)  
  Fixes cursor navigation behavior in multi-line TUI prompts when handling display columns.

### Feature Request Trends
Several clear feature directions are emerging from recent issues:

- **Plugin-driven model routing** — Multiple issues request hooks for pre-call model selection, dynamic routing by prompt complexity, and runtime model switching. PR #40188 now delivers the core `chat.model` hook.
- **More providers and flexible model definitions** — Requests include CommandCode support, custom providers aliasing Models.dev definitions, and better handling of provider-specific reasoning fields.
- **Agent/command/skill discoverability** — Users want configurable search paths for commands and agents, including `.agents/commands/**/*.md` support, matching existing skill conventions.
- **Desktop/Web feature parity** — Repeated asks for session rename in Desktop, readable project names in the browser, and consistent Markdown/heading rendering.

### Developer Pain Points
Recurring frustrations visible in the issue tracker:

- **Terminal/input quirks on Windows and macOS** — Clipboard issues (`Ctrl+C`/`Ctrl+V`), ESC interruption loops, caret rendering artifacts, and missing macOS `pbcopy` fallbacks.
- **State persistence bugs** — Session titles not generated, project edits not saved, prompt drafts using fragile base64 persistence, and session list/version mismatches between CLI and Web UI.
- **Provider integration failures** — Kimi reasoning content missing in tool calls, OpenAI OAuth race conditions, and service outages like the current `grok-4.5` failure.
- **Context/compaction reliability** — Users hitting "conversation history too large" even on new sessions, plus stuck permission prompts and orphaned tool state after interrupted streamed patches.
- **UI inconsistency** — Plugin agents missing from Desktop dropdowns, headings rendered as bold text, and review panels showing incorrect diffs or collapsing on resize.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-08-03

## Today's Highlights

No new releases landed in the last 24 hours; this update cycle is focused on bug triage and hardening around compaction, network resilience, and terminal rendering. The most-discussed issue remains **#6879** — auto-compaction not firing until the provider rejects the request — with an open PR proposing to defer idle compaction. Multiple network-timeout reports also point to a broader need for better request timeouts and IPv4/IPv6 fallback handling.

## Releases

No new releases in the last 24 hours.

## Hot Issues

1. **[#6879] Auto-compaction never triggers after context grows past 100% until provider overflow**  
   High community engagement: 10 comments and 10 👍. A long agentic turn on gpt-5.6-sol ran past the compaction threshold and only triggered after a 373k-token API rejection. This suggests compaction checks are not happening after every agent turn.  
   https://github.com/earendil-works/pi/issues/6879

2. **[#7113] TUI freezes after /login when the pi.dev model catalog is unreachable**  
   The post-login model refresh has no AbortSignal or timeout, so an unresponsive pi.dev catalog freezes the TUI. A related report **#7505** says the same login flow can hang for ~5 minutes.  
   https://github.com/earendil-works/pi/issues/7113  
   https://github.com/earendil-works/pi/issues/7505

3. **[#7062] Handle array content and missing finish_reason in OpenAI-completions streaming**  
   Some Databricks models (Qwen3, gpt-oss reasoning models) return `choice.delta.content` as a typed array or omit `finish_reason`, breaking Pi’s streaming parser. Important for provider compatibility.  
   https://github.com/earendil-works/pi/issues/7062

4. **[#7315] Fireworks requests sometimes fail instantly with “Request timed out.”**  
   Closed issue, but notable: failed turns had empty content and zero token usage, meaning the failure happens before request completion. PR **#7435** addresses this by increasing the connection attempt timeout.  
   https://github.com/earendil-works/pi/issues/7315

5. **[#7413] Compaction fails on GitHub Copilot GHE.com enterprise accounts**  
   `/compact` fails with `unknown stamp "prod-cus-01"` while normal chat works on the same session/model. Points to an auth-token issue specific to enterprise GitHub Copilot.  
   https://github.com/earendil-works/pi/issues/7413

6. **[#7321] Multi-line paste broken on terminals without bracketed paste support**  
   Termux and similar terminals submit on the first `\r` instead of inserting multi-line pasted text. Open issue with reproducible root cause.  
   https://github.com/earendil-works/pi/issues/7321

7. **[#7490] IME candidate window flickers/jumps/ghosts when typing Chinese in WezTerm**  
   Codex works fine in the same WezTerm setup, so this is a Pi TUI rendering issue. Likely related to how the terminal is redrawn during composition.  
   https://github.com/earendil-works/pi/issues/7490

8. **[#7486] Hardware cursor jumps when `showHardwareCursor` is enabled in WezTerm**  
   The documented IME workaround for #5200 fixes candidate-window position but causes the hardware cursor to visibly jump during “Working…” states.  
   https://github.com/earendil-works/pi/issues/7486

9. **[#7504] IPv6 blackhole hangs Pi for ~5 minutes**  
   When `pi.dev`’s AAAA record is a blackhole, Pi stalls on every network operation because Undici does not enable `autoSelectFamily`, so IPv4 fallback never happens. Affects `/llama`, `/scoped-models`, post-login refresh, and startup availability checks.  
   https://github.com/earendil-works/pi/issues/7504

10. **[#7497] Session discovery silently ignores symlinked directories**  
   `listSessions` does not follow symlinked directories under `~/.pi/agent/sessions/`, so those sessions never appear in tools like pi-web. Silent data visibility issue.  
    https://github.com/earendil-works/pi/issues/7497

## Key PR Progress

1. **[#7503] Add experimental in-memory sessions**  
   Introduces `Session`, `SessionStorage`, and `SessionRepository` contracts with an in-memory backend, exposed through `@earendil-works/pi-agent-core/experimental`.  
   https://github.com/earendil-works/pi/pull/7503

2. **[#7498] Defer idle compaction until next prompt**  
   Avoids wasteful compaction with recent GPT models whose context window grows during long turns. Directly related to the behavior reported in #6879.  
   https://github.com/earendil-works/pi/pull/7498

3. **[#7494] Preserve Gemini 3 tool call IDs**  
   Gemini 3 returns IDs on function calls and expects matching IDs on responses. Pi currently drops them because `requiresToolCallId()` only covers Claude and GPT-OSS models via Google APIs.  
   https://github.com/earendil-works/pi/pull/7494

4. **[#7493] Set `AI_AGENT` for child process attribution**  
   Adds `AI_AGENT=pi` next to the existing `PI_CODING_AGENT=true` marker so child processes can identify Pi as the launching agent. Resolves #7132.  
   https://github.com/earendil-works/pi/pull/7493

5. **[#7330] Resize images returned by tools**  
   Extension tools, MCP bridges, and browser tools can insert full-resolution images into session history because `processImage` is only called from `read.ts` and `file-processor.ts`. This PR applies the existing resize/format pipeline to all tool-produced images.  
   https://github.com/earendil-works/pi/pull/7330

6. **[#7482] Prefer iTerm2 inline images over kitty on WezTerm**  
   Fixes #7481, where kitty images in scrolling transcripts degrade to a one-row sliver. Switching WezTerm to iTerm2 inline image encoding avoids the progressive erase behavior.  
   https://github.com/earendil-works/pi/pull/7482

7. **[#7396] Add server session backend**  
   Adds a durable JSONL-backed session backend for `PiServer` with cross-process locking, crash recovery, and live transcript progress.  
   https://github.com/earendil-works/pi/pull/7396

8. **[#7435] Increase connection attempt timeout**  
   Raises Node’s default 250 ms address-family attempt timeout to 2 seconds for Pi’s Undici connector, avoiding aborted Fireworks connections on high-latency routes.  
   https://github.com/earendil-works/pi/pull/7435

9. **[#7440] Switchable terminal renderers**  
   Adds runtime-switchable TUI renderers while preserving terminal, focus, input, and renderer state. This was reverted in **#7473**, so follow-up work is needed.  
   https://github.com/earendil-works/pi/pull/7440  
   https://github.com/earendil-works/pi/pull/7473

10. **[#7480] Add LLM Gateway provider**  
    Adds LLM Gateway as a built-in OpenRouter-style provider with API key and OAuth login, sourcing ~151 tool-capable models from `api.llmgateway.io`.  
    https://github.com/earendil-works/pi/pull/7480

## Feature Request Trends

- **More provider and model coverage**  
  Users are requesting DeepInfra support (#7502), LLM Gateway integration (#7480), and faster availability of new models such as DeepSeek v4 on OpenRouter (#7476).

- **Deeper session and extension APIs**  
  Requests include a core facility like `askWithFrozenContext()` for plugin-driven advice/review plugins (#7500), in-memory session experiments (#7503), server-side session persistence (#7396), and per-run extension exclusion flags (#7475).

- **Terminal/UI ergonomics**  
  Common directions: single-line status footer (#7477), preserving editor/view position when scrolling through history (#7495), iTerm2 inline image size metadata for xterm.js compatibility (#7465), and runtime-switchable terminal renderers (#7440).

- **More control over model/agent behavior**  
  Users want thinking-level selection in `/scoped-models` (#7487), cycle execution duration reporting, and a `/copy cycle` command (#7496).

## Developer Pain Points

- **Network resilience is fragile**  
  Several issues share a common pattern: no timeout, no AbortSignal, or no IPv4 fallback. Post-login catalog refresh can hang the TUI (#7113/#7505), IPv6 blackholes cause 5-minute stalls on every network operation (#7504), and `pi update --models` fails entirely on a transient catalog stall (#7323).

- **Compaction is still unreliable**  
  Auto-compaction can wait until provider overflow (#6879), compaction cancellation reasons are never surfaced (#7492), enterprise GHE compaction fails with auth errors (#7413), and idle compaction can waste tokens unnecessarily (#7498).

- **Terminal-specific rendering bugs are frequent**  
  Reports cover WezTerm IME flicker (#7490), hardware cursor jumping (#7486), kitty image degradation (#7481), Termux bracketed-paste issues (#7321), and xterm.js image size incompatibility (#7465).

- **Silent configuration and discovery failures**  
  A UTF-8 BOM in `auth.json` silently disables all stored credentials (#7499), symlinked session directories are ignored by session discovery (#7497), and the minimal-mode example ignores the configured `shellPath` on Windows (#7489).

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-08-03

## Today's Highlights

Session reliability is the dominant theme today: new issues around caller-supplied session IDs, Desktop session loss, and abort handling are matched by PRs that coordinate daemon session IDs and recover truncated live journals. On the feature side, the `/review` skill is expanding from npm to Maven multi-module repos, while Web Shell continues to receive background-agent and plan-approval hardening. A new nightly release also lands with TUI keyboard-reference docs and a history pagination fix.

## Releases

- [v0.21.3-nightly.20260803.e1e5b42ce](https://github.com/QwenLM/qwen-code/releases/tag/v0.21.3-nightly.20260803.e1e5b42ce)  
  No stable release in the last 24 hours. The nightly includes:
  - docs: complete TUI keyboard shortcut reference by @DragonnZhang ([#8327](https://github.com/QwenLM/qwen-code/pull/8327))
  - fix(core): unblock history pagination

## Hot Issues

- [#8411 – Caller-supplied session IDs are not coordinated across daemon transports and workspaces](https://github.com/QwenLM/qwen-code/issues/8411)  
  P2, 2 comments. Route-local duplicate checks are insufficient now that the daemon has multiple session entry points and workspace runtime generations. Directly motivates [#8415](https://github.com/QwenLM/qwen-code/pull/8415).

- [#8400 – Desktop 0.0.5 / Windows: Sessions silently auto-deleted after restart when ACP session/load fails](https://github.com/QwenLM/qwen-code/issues/8400)  
  P1, 2 comments. A workspace cwd mismatch causes the provider loader to return 0 messages, and the app deletes local session mirrors without confirmation. High-impact data-loss bug for Desktop users.

- [#8398 – isAbortError does not recognize the OpenAI SDK's APIUserAbortError](https://github.com/QwenLM/qwen-code/issues/8398)  
  P2, 2 comments. User cancellations on OpenAI-compatible providers are misclassified as failures rather than aborts, which then affects session-transcript behavior.

- [#7164 – Concurrent session writers can fork transcript history and hide responses](https://github.com/QwenLM/qwen-code/issues/7164)  
  P1, 2 comments. Two processes restoring the same session can append divergent parent chains, causing lost responses on restart. Core session-management reliability issue.

- [#8382 – Duplicate provider tool call id](https://github.com/QwenLM/qwen-code/issues/8382)  
  P2, 3 comments. Users hit “Duplicate provider tool call id” errors that break tool-calling sessions and require retries, hurting agentic workflow stability.

- [#8123 – Desktop client cannot reference the correct file with @](https://github.com/QwenLM/qwen-code/issues/8123)  
  P3, 5 comments. The Desktop client fails to find an existing `KuaiShouOrderService.java` file via `@` reference search. A need-information issue with active file-operations discussion.

- [#8376 – Change process name from node.exe to qwen.exe for reliable process identification](https://github.com/QwenLM/qwen-code/issues/8376)  
  P3, 4 comments. External tools currently rely on heuristics to identify Qwen Code because it runs as `node.exe`/`node`. A common ask for Windows process management and monitoring.

- [#8281 – Add an Email channel with IMAP and SMTP support](https://github.com/QwenLM/qwen-code/issues/8281)  
  P3, 4 comments. Users want a provider-neutral email channel so agents can be driven through a mailbox. Signals growing demand for asynchronous agent-integration channels.

- [#8389 – feat: add an experimental Plan & Review workflow for daemon sessions](https://github.com/QwenLM/qwen-code/issues/8389)  
  P3, 3 comments. Follow-up on the existing Workflow DAG and Plan Mode work; proposes an opt-in Plan & Review experience for daemon sessions, including Todo-revision-bound approvals.

- [#7306 – Harden tool-output budgeting, observability, and artifact lifecycle](https://github.com/QwenLM/qwen-code/issues/7306)  
  P2, 5 comments. Tracks correctness and contract hardening for tool outputs, `persistedOutputFiles`, and artifact finalization. Important for long-running agent sessions with large tool returns.

## Key PR Progress

- [#8415 – fix(serve): Coordinate caller-supplied session IDs](https://github.com/QwenLM/qwen-code/pull/8415)  
  Addresses [#8411](https://github.com/QwenLM/qwen-code/issues/8411) by coordinating caller-supplied session IDs across daemon transports and workspace runtimes.

- [#8414 – fix(webui): Recover complete turns after live journal truncation](https://github.com/QwenLM/qwen-code/pull/8414)  
  Makes bounded live-journal truncation precise and recoverable while preserving existing 10,000-event / 8 MiB limits; adds authoritative prompt ownership to truncation markers.

- [#8213 – feat(serve): establish workspace runtime ownership](https://github.com/QwenLM/qwen-code/pull/8213)  
  Introduces a WorkspaceRuntime ownership boundary with five-state snapshots, workspace-scoped epochs, and bounded teardown behavior. Significant for daemon stability.

- [#8416 – feat(review): scope build/test to Maven modules and load CLAUDE.md rules](https://github.com/QwenLM/qwen-code/pull/8416)  
  Extends `/review` to Maven multi-module repos by mapping changed files to modules, matching the existing npm-workspace behavior, and loading `CLAUDE.md` rules.

- [#8405 – fix(review): deprioritize Maven generated test sources](https://github.com/QwenLM/qwen-code/pull/8405)  
  Treats Maven-generated test sources as generated output so `/review` prioritizes real production paths correctly.

- [#8413 – fix(web-shell): keep pending background agents active](https://github.com/QwenLM/qwen-code/pull/8413)  
  Prevents Web Shell turns from collapsing while background subagents are still pending/running, preserving the parallel-agent view.

- [#8393 – feat(web-shell): bind plan approval to its Todo revision](https://github.com/QwenLM/qwen-code/pull/8393)  
  Binds each `exit_plan_mode` approval to the exact structured Todo revision, preventing stale approvals from being applied.

- [#8350 – feat(voice): support trusted private ASR base URLs](https://github.com/QwenLM/qwen-code/pull/8350)  
  Adds an empty-by-default allowlist for voice provider base URLs, enabling private-network ASR while keeping the existing default-deny security posture.

- [#8332 – feat(cli): add audio bridge for attachments](https://github.com/QwenLM/qwen-code/pull/8332)  
  Transcribes audio attachments through the configured batch voice model when the primary model lacks audio support, marking the result as untrusted machine transcription.

- [#8324 – feat(cli): adopt Goal v3 in non-interactive mode](https://github.com/QwenLM/qwen-code/pull/8324)  
  Moves non-interactive `/goal` commands onto the canonical Goal v3 runtime, aligning status/create/edit behavior with interactive clients and `stream-json` consumers.

## Feature Request Trends

- **Daemon/serve unification and lifecycle control**  
  Requests continue around a single TUI + daemon process, coordinated session IDs, workspace runtime ownership, external tool-guard providers, and sub-session concurrency controls ([#4156](https://github.com/QwenLM/qwen-code/issues/4156), [#8411](https://github.com/QwenLM/qwen-code/issues/8411), [#8213](https://github.com/QwenLM/qwen-code/pull/8213), [#8125](https://github.com/QwenLM/qwen-code/pull/8125), [#8404](https://github.com/QwenLM/qwen-code/pull/8404)).

- **Session and transcript robustness**  
  Multiple requests focus on preventing lost history: concurrent-writer protection, abort-safe persistence, journal truncation recovery, and avoiding silent Desktop session deletion ([#7164](https://github.com/QwenLM/qwen-code/issues/7164), [#8400](https://github.com/QwenLM/qwen-code/issues/8400), [#8356](https://github.com/QwenLM/qwen-code/issues/8356), [#8412](https://github.com/QwenLM/qwen-code/issues/8412)).

- **New integration channels and automation**  
  Email via IMAP/SMTP, safe cloud deployment integrations, and Image drag-and-drop in Web Shell show demand for more external entry points and richer modality support ([#8281](https://github.com/QwenLM/qwen-code/issues/8281), [#8291](https://github.com/QwenLM/qwen-code/issues/8291), [#8321](https://github.com/QwenLM/qwen-code/issues/8321)).

- **Windows and Desktop experience**  
  Process-name identification, file-reference resolution, ConEmu flickering, and Desktop session persistence remain recurring user requests ([#8376](https://github.com/QwenLM/qwen-code/issues/8376), [#8123](https://github.com/QwenLM/qwen-code/issues/8123), [#8385](https://github.com/QwenLM/qwen-code/issues/8385), [#8381](https://github.com/QwenLM/qwen-code/pull/8381)).

- **Developer-tooling quality**  
  The community is pushing for better Maven support in `/review`, gating security tests on PRs, and fixing AutoFix admission mismatches ([#8416](https://github.com/QwenLM/qwen-code/pull/8416), [#8405](https://github.com/QwenLM/qwen-code/pull/8405), [#8360](https://github.com/QwenLM/qwen-code/issues/8360), [#8409](https://github.com/QwenLM/qwen-code/issues/8409)).

## Developer Pain Points

- **Windows-specific friction**  
  Desktop users face silent session loss, missing `@` file references, and terminal flicker in ConEmu/Cmder; process monitoring is complicated by `node.exe` naming ([#8400](https://github.com/QwenLM/qwen-code/issues/8400), [#8123](https://github.com/QwenLM/qwen-code/issues/8123), [#8385](https://github.com/QwenLM/qwen-code/issues/8385), [#8376](https://github.com/QwenLM/qwen-code/issues/8376)).

- **Session history loss and corruption**  
  Concurrent writers, aborted turns not being persisted, duplicate tool-call IDs, and truncated live journals are eroding trust in long-running sessions ([#7164](https://github.com/QwenLM/qwen-code/issues/7164), [#8356](https://github.com/QwenLM/qwen-code/issues/8356), [#8382](https://github.com/QwenLM/qwen-code/issues/8382), [#8412](https://github.com/QwenLM/qwen-code/issues/8412)).

- **Abort handling is inconsistent for OpenAI-compatible providers**  
  `APIUserAbortError` is not recognized by `isAbortError`, leading to misclassified cancellations and follow-on transcript bugs ([#8398](https://github.com/QwenLM/qwen-code/issues/8398), [#8356](https://github.com/QwenLM/qwen-code/issues/8356)).

- **Plan Mode can over-block or under-confirm**  
  Plan Mode blocks unclassified read-only shell commands while also being able to bypass exit confirmation in some ACP flows ([#6949](https://github.com/QwenLM/qwen-code/issues/6949)).

- **CI/release automation is still fragile**  
  Main-branch E2E failures, stale ECS runners, and AutoFix skipping documented defects add maintenance overhead ([#8375](https://github.com/QwenLM/qwen-code/issues/8375), [#8371](https://github.com/QwenLM/qwen-code/issues/8371), [#8358](https://github.com/QwenLM/qwen-code/issues/8358)).

- **Maven monorepo review support is incomplete**  
  `/review` needs better module scoping and generated-source handling before it can match the npm-workspace experience ([#8416](https://github.com/QwenLM/qwen-code/pull/8416), [#8405](https://github.com/QwenLM/qwen-code/pull/8405)).

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-08-03

## Today's Highlights

The project is in v0.9.4 release-hardening mode: maintainers are driving the integration train and runtime fix stacks (#5135, #5147, #5148), while the community is reporting more issues around workflow reliability, multi-provider/fleet behavior, and security boundaries. No new releases were published in the last 24 hours, but feature work continues — sessions sidebar, subagent resume, fleet role binding, and full zh-Hant locale support all landed as PRs.

## Releases

No releases published in the last 24h.

## Hot Issues

1. **Persistent sessions sidebar** — [#2934](https://github.com/Hmbown/CodeWhale/issues/2934)  
   12 comments. Users want a real session history sidebar with auto-resume instead of the current `Ctrl+R` picker flow. Strong UX demand for better session discovery.

2. **UI text truncation with no tooltip fallback** — [#998](https://github.com/Hmbown/CodeWhale/issues/998)  
   11 comments, 1 👍. Long labels/render text are cut off; users request hover tooltips for the full content.

3. **`deepseek doctor` passes but `deepseek run` fails** — [#689](https://github.com/Hmbown/CodeWhale/issues/689)  
   10 comments. Health checks report everything is fine, yet normal runs produce no output — a frustrating diagnostic/runtime mismatch.

4. **`/dryrun` — preview the next chat request before sending** — [#1004](https://github.com/Hmbown/CodeWhale/issues/1004)  
   8 comments. Users want to inspect exact request payloads for long V4 Pro turns to avoid wasted tokens and catch bad tool/context assembly.

5. **Session freeze after large-text subagent timeout** — [#1425](https://github.com/Hmbown/CodeWhale/issues/1425)  
   6 comments. Analyzing a 3M-character novel spawned 10 subagents, then `agent_wait` timeouts froze the session. Highlights subagent reliability issues with long-running workloads.

6. **Very slow report merge/save with low cache hit** — [#1732](https://github.com/Hmbown/CodeWhale/issues/1732)  
   6 comments. Users report long delays and poor cache utilization when merging analysis reports to local files.

7. **NVIDIA NIM returns 404** — [#1482](https://github.com/Hmbown/CodeWhale/issues/1482)  
   6 comments. NIM API calls fail with `404 page not found`, making the provider unusable.

8. **VS Code crashes while YOLO Agent runs scripts** — [#1651](https://github.com/Hmbown/CodeWhale/issues/1651)  
   5 comments. Background autonomous test execution using v4-pro/v4-flash unexpectedly exits the editor.

9. **SSH connection blocked with exit code 255** — [#1829](https://github.com/Hmbown/CodeWhale/issues/1829)  
   5 comments. Likely sandbox outbound TCP 22 blocking; works from local terminal but fails inside the TUI shell.

10. **v0.9.4 release-blocker: agent spawn labeled read-only self-blocks** — [#5123](https://github.com/Hmbown/CodeWhale/issues/5123)  
    1 comment. Maintainer dogfooding found `builder`-labeled sessions run under a read-only tool contract and cannot execute assigned gates. Must be resolved before release.

## Key PR Progress

1. **v0.9.4 release train** — [#5135](https://github.com/Hmbown/CodeWhale/pull/5135)  
   The integration train for the v0.9.4 release, currently 77 commits ahead of `main` and containing the full 2026-08-01 source candidate plus train fixes.

2. **Stack R1: runtime truth + deletions** — [#5147](https://github.com/Hmbown/CodeWhale/pull/5147)  
   17 commits covering config-parse warnings, persistence-drop logging, execpolicy improvements, memory consolidation, and fixes for the #5123-class blocker.

3. **Stack R3: runtime P0s** — [#5148](https://github.com/Hmbown/CodeWhale/pull/5148)  
   9 commits addressing transcript escape corruption, #5099 route inheritance, roster shadowing, and the trust gate.

4. **Subagent `resume_from` continuation chains** — [#5142](https://github.com/Hmbown/CodeWhale/pull/5142)  
   Lets agents resume a prior subagent transcript instead of starting fresh, improving prefix-cache affinity and reducing manual context relay.

5. **Dedicated Sessions sidebar panel** — [#5141](https://github.com/Hmbown/CodeWhale/pull/5141)  
   Adds `SidebarFocus::Sessions` and `/sidebar sessions`, enabling a dedicated session-history rail. Directly addresses #2934.

6. **Named agents bind strictly to configured roles** — [#5136](https://github.com/Hmbown/CodeWhale/pull/5136)  
   Prevents model-level mutations on profile-bound dispatches; only the `general` agent exposes model options.

7. **Fleet memory hardening** — [#5140](https://github.com/Hmbown/CodeWhale/pull/5140)  
   Adds bounded step budgets, `HandleStore` eviction, RSS telemetry, and persistence size assertions for fleet runs.

8. **Full zh-Hant locale parity** — [#5143](https://github.com/Hmbown/CodeWhale/pull/5143)  
   Promotes Traditional Chinese from partial (502/1252 keys) to complete locale parity with `en`, `ja`, `zh-Hans`, and `pt-BR`.

9. **Advisor watcher for live turns** — [#5139](https://github.com/Hmbown/CodeWhale/pull/5139)  
   Adds an opt-in background advisor that observes long turns with tool calls and emits lightweight warnings without blocking the parent task.

10. **Whaleflow janitor** — [#5144](https://github.com/Hmbown/CodeWhale/pull/5144)  
    Implements store cleanup infrastructure: FIFO-capped trace store, memo cleanup, candidate demotion, and trace compaction.

## Feature Request Trends

- **Sessions and history UX**: persistent session sidebar, session browsing, auto-resume (#2934, #5141).
- **Subagent and workflow control**: `resume_from` chains, advisor watchers, consumed gate handoffs, token budget enforcement (#425, #3982, #5142, #5139, #5155, #5156).
- **Request transparency and context control**: `/dryrun`, configurable context window expansion from 128K to 1M, and cache-read pricing visibility (#1004, #5134, #4319).
- **Fleet/provider flexibility**: named fleet configs, strict role binding, automatic profile fallback on rate limits, and route inheritance fixes (#855, #5098, #5099, #5136, #5137).
- **i18n and TUI polish**: complete locale parity, tooltips for truncated text, and fixes for multi-select input behavior (#790, #998, #5143, #5162).

## Developer Pain Points

- **Large-context and long-running jobs are fragile**: subagent timeouts freeze sessions, report saves are slow, and context auto-compresses at 128K despite 1M model support (#1425, #1732, #5134).
- **Diagnostics do not reliably predict runtime behavior**: `doctor` passes while `run` fails, NIM returns 404, SSH is blocked by the sandbox, and VS Code crashes during YOLO agent runs (#689, #1482, #1829, #1651).
- **Security boundaries have holes**: execpolicy deny rules can be bypassed via shell metacharacters, MCP ToolFilter is not enforced on all call paths, and logout leaves non-active provider keys in the keyring (#5161, #5157, #5159).
- **State/config management footguns**: non-idempotent state migrations, silent fleet config shadowing, and provider-switch stale model resolution repeatedly confuse users (#5098, #5107, #5160).

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/boom7sss/agents-radar).*