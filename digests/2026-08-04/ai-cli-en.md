# AI CLI Tools Community Digest 2026-08-04

> Generated: 2026-08-04 15:28 UTC | Tools covered: 9

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
**Date:** 2026-08-04 | **Scope:** 9 major AI CLI tools

---

## 1. Ecosystem Overview

The AI CLI tool ecosystem is consolidating around three battles: **cost transparency, agent trustworthiness, and protocol interoperability**. Usage-accounting bugs are the single loudest complaint across Claude Code and OpenAI Codex, while false-success reporting (Gemini's GOAL misreport, DeepSeek's fake file-edit success, OpenCode's empty responses) is eroding trust in autonomous workflows across nearly every tool. At the architecture level, ACP (Agent Client Protocol) and MCP are converging as the two interop standards, with Kimi, OpenCode, Qwen, and DeepSeek all building protocol-level features in parallel. Release velocity is high — 11 releases across 5 tools in 24 hours — while Gemini, Pi, and DeepSeek TUI are in heavier architectural phases with no shipped releases. Windows/terminal compatibility remains the weakest platform link across the entire ecosystem, recurring in every tool's issue tracker.

---

## 2. Activity Comparison

*Counts reflect items surfaced in each digest (hot issues, key PRs), not exhaustive repository totals.*

| Tool | Digest-Covered Issues | Digest-Covered PRs | Releases (last 24h) |
|---|---|---|---|
| **Claude Code** | 10 hot issues | 2 PRs | **v2.1.221** shipped (Focus view, Linux sandbox `mask`) |
| **OpenAI Codex** | 10 hot issues | 10 PRs | **4 alpha releases** (rust-v0.147.0-alpha.x) |
| **Gemini CLI** | 10 hot issues | 10 PRs | None (maintainers retesting P1s) |
| **Copilot CLI** | 10 hot issues | 1 PR | **v1.0.78 + v1.0.78-3** shipped |
| **Kimi Code** | 5 hot issues | 3 PRs | None |
| **OpenCode** | 10 hot issues | 10 PRs | **v1.18.13 + v1.18.12** shipped |
| **Pi** | 12 (10 hot + 2 notable) | 14 (10 key + 4 active) | None (Harness v2 in flight) |
| **Qwen Code** | 10 hot issues | 10 PRs | **v0.21.5 + nightly** shipped |
| **DeepSeek TUI** | 5 hot issues | 36 PRs updated (9 key) | None (v0.9.4 train open, 77 commits ahead) |

**Signal:** The two most commercially scaled tools (Claude Code, Codex) have the hottest unresolved threads; the fastest movers on PRs are Codex, Gemini, and DeepSeek TUI.

---

## 3. Shared Feature Directions

Requirements appearing across multiple tool communities:

| Direction | Tools (specific needs) |
|---|---|
| **Usage & cost transparency** | **Claude Code** (Max-session accounting bugs, zero-token limit consumption — #16157, 1,484 comments), **Codex** (deterministic weekly reset, status line with token usage — #9508, #17827), **Copilot** (ACP token/context reporting — #4174), **OpenCode** (Go usage endpoint — #16513), **Pi** (live model catalog, freshness diagnostics) |
| **ACP protocol maturity** | **Kimi** (model discovery, mid-session model switching, permission-mode switching — #2583, #2364), **OpenCode** (subagent event surfacing, cache-write token accounting — #40438, #40450), **Qwen** (ACP memory accounting, usage events — #8182, #8513), **DeepSeek TUI** (file/search/git/patch tools over ACP — #5225), **Copilot** (ACP cost-data gap — #4174) |
| **Session lifecycle & forking** | **Copilot** (session forking, `/new-worktree` — #1697, v1.0.78-3), **Claude Code** (cross-session coordination for shared worktrees — #76727), **Qwen** (transcript persistence after abort — #8356), **Gemini** (`/compress` reload fixes — #28672) |
| **Local/third-party model support** | **Gemini** (SGLang + local OpenAI-compatible endpoints — #28681), **Codex** (flatten MCP namespaces for Ollama/LM Studio/OpenRouter/Bedrock — #26234), **Copilot** (bring-your-own-model — #4139), **Pi** (llama.cpp/vLLM sampling passthrough — #7568), **OpenCode** (DeepSeek V4 Flash on go endpoint — #39829) |
| **Emergency stop & cancellation safety** | **DeepSeek TUI** (`/stop` command + STOP-word interception — #4959), **Qwen** (cancelled file tools must not mutate files — #8493), **Gemini** (SIGTERM forwarding, shell "Waiting input" hangs — #28676, #25166) |
| **False-success / trust safeguards** | **Gemini** (subagent MAX_TURNS reported as GOAL success, P1 — #22323), **DeepSeek TUI** (File edit accepts wrong params, fake success — #5209), **Copilot** (web_search fabrications — #4093), **OpenCode** (empty provider output → fail after bounded retries — #40437), **Pi** (process parks on silent stdin pipe — #7592) |
| **Persistent memory** | **Kimi** (#1283 memory system, most-discussed issue), **Gemini** (Auto Memory retry storms — #26522), **Claude Code** (model overriding user memory — #52477), **Qwen** (Goal evidence checkpoints — #8465) |
| **Sandbox/permission friction** | **DeepSeek TUI** (zero-sandbox request — #4955), **Claude Code** (Linux `mask` mode, permission prompt confusion), **Copilot** (fail-closed enterprise MCP policy — #4349), **Gemini** (subagents running despite being disabled — #22093) |

---

## 4. Differentiation Analysis

- **Claude Code** — Enterprise-grade IDE integration (VS Code Focus view, sandbox credential masking) and the largest, most vocal community. Its Achilles heel is usage accounting at scale: the 1,484-comment Max-plan thread is a commercial trust risk.
- **OpenAI Codex** — Fastest release cadence (4 alphas/day) with deep MCP-negotiation and secret-redaction engineering. Community is polarized around token burn in the IDE extension (#14593, 628 comments). Multi-agent v2 model handling is a technical differentiator.
- **Gemini CLI** — The most reliability-focused architecture: maintainer-led P1 triage on agent hangs and false termination reasons, plus expansion into local inference (SGLang) and eval-driven regression prevention (76 tests, 6 model variants). Memory and skills are treated as first-class systems.
- **Copilot CLI** — GitHub ecosystem integration and plugin lifecycle are the moat. Struggling with enterprise fail-closed MCP configs and terminal-detection fragility (WSL2, zellij). The `/new-worktree` command is a unique session-lifecycle feature.
- **Kimi Code** — ACP-first strategy: model discovery, permission-mode switching, and `AI_AGENT` env standardization position it as an integration-friendly tool. Memory system (#1283) is the top community demand. Notable for surfacing Windows IME input issues relevant to non-Latin-language users.
- **OpenCode** — Provider-gateway model: `opencode-go` is its own risk surface (DeepSeek V4 Flash failures dominate the tracker). Strong on skill-system correctness (deterministic discovery, preserving user request text) and RTL/Desktop polish. Codex/Claude-skill compatibility is a deliberate adoption play.
- **Pi** — The most architecture-driven tool this cycle: Harness v2 storage backends (in-memory, SQLite lanes, JSON), RPC-over-socket expansion, and LLM Gateway provider support. Targets TUI power users and proxy/extension developers; Copilot Enterprise compaction bug (#6768) is its top community wound.
- **Qwen Code** — Daemon-centered design (`qwen serve`) distinguishes it: resource-governance issues (per-child ACP memory, byte-level limits) are production concerns few other tools discuss. Strong CI/review automation features (worktree cleanup, context manifests). Bilingual community (Chinese + English).
- **DeepSeek TUI** — Security-conservative positioning: Seatbelt sandbox, proposed `/stop` emergency kill switch, and registry-first MCP discovery. The v0.9.4 release train (77 commits ahead) shows an aggressive runtime-API expansion (goal, memory, skill, MCP endpoints) aimed at managed clients and editors.

**Target users:** Claude Code/Copilot/Pi target professional devs and enterprises; Codex spans IDE and TUI; Gemini is strongest for Google-ecosystem and local-model users; OpenCode, Kimi, Qwen, and DeepSeek position as open/protocol-neutral alternatives with stronger multi-provider or China-market relevance.

---

## 5. Community Momentum & Maturity

- **Highest engagement:** Claude Code (#16157: 1,484 comments, 691 👍) and OpenAI Codex (#14593: 628 comments, 283 👍) have threads an order of magnitude larger than any other tool's — a reflection of paid-plan scale and unresolved pain.
- **Rapidly iterating:** OpenAI Codex (4 alphas/24h), Copilot CLI (2 releases with new features), OpenCode (2 patches addressing real bugs), Qwen Code (2 releases incl. nightly). These ships are feature-bearing, not just version bumps.
- **Architecture-phase:** Pi (no release but 14 PRs, Harness v2 foundation) and DeepSeek TUI (36 PRs updated, release train 77 commits ahead) are investing in foundations — expect feature-rich releases shortly.
- **Maintainer responsiveness:** Gemini maintainers actively retesting P1 agent bugs signals strong ownership. Claude Code's unresolved 1.5k-comment accounting thread is the clearest risk signal; Codex's alpha cadence without changelogs limits community trust.
- **Emerging communities:** Kimi Code and DeepSeek TUI show smaller issue volumes but high intent; OpenCode's 22👍 on a single feature request in one day indicates fast-growing traction.
- **Maturity ranking (by ecosystem depth):** Claude Code > Codex ≈ Copilot > Gemini ≈ Pi > OpenCode > Qwen > DeepSeek TUI ≈ Kimi.

---

## 6. Trend Signals

1. **Usage metering is the #1 trust battleground.** Every tool with paid plans (Claude, Codex, Copilot) has open threads demanding deterministic, auditable session accounting. Tools that ship transparent token/limit telemetry first will gain a decisive trust advantage.
2. **ACP is becoming the cross-tool interop standard** — independently of MCP. Model discovery, permission-mode switching, usage events, and tool execution over ACP are being added in parallel by Kimi, OpenCode, Qwen, DeepSeek, and Copilot. Protocol clients (Zed, Happy Coder) are the forcing function.
3. **False-success failures are the most dangerous reliability class.** Silent empty responses, misreported GOAL terminations, and fake edit successes all break the human-agent trust loop. Expect "fail loud with bounded retries" and verifier patterns (OpenCode #40437, Qwen #8465) to spread.
4. **Local/self-hosted model support is table stakes.** Gemini's SGLang support, Codex's MCP flattening for Ollama/LM Studio, Pi's llama.cpp/vLLM passthrough, and OpenCode's DeepSeek saga all point to a multi-provider future — vendor lock-in is no longer acceptable to developers.
5. **Windows is the ecosystem's weakest link.** IME duplicate input, WSL path bugs, Store-only installers, native crashes, and focus-stealing recur across all nine tools. Cross-platform maturity is a differentiator, not an assumption.
6. **Emergency control is becoming a safety feature buyers look for.** `/stop` interception (DeepSeek), cancellation-safe tool execution (Qwen), and terminal-signal forwarding (Gemini) address the same fear: autonomous loops you can't interrupt.
7. **Persistent memory is the next differentiator.** Kimi, Gemini, and Claude are all actively contested here — in both directions (memory reliability vs. memory privacy). Tools that make memory deterministic, inspectable, and redactable will win the long game.
8. **Sandboxing is polarizing.** Users want permission systems that are predictable and explainable (Claude's `mask` mode, Qwen's deterministic tool boundaries) — not just stricter. The DeepSeek no-sandbox escape-hatch request shows that overly aggressive sandboxing creates its own rebellion.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights — 2026-08-04

*Note: The source data sorted PRs by comment count but did not expose numeric comment values. Ranking below follows that source order.*

## 1. Top Skills Ranking

### #1298 — fix(skill-creator): run_eval.py always reports 0% recall  
[anthropics/skills PR #1298](https://github.com/anthropics/skills/pull/1298)  
**Status:** Open  
**Functionality:** Fixes `run_eval.py`, and downstream `run_loop.py` / `improve_description.py`, so skill descriptions are actually evaluated instead of returning `recall=0%` for every query.  
**Discussion highlights:** Addresses a widely reproduced failure (#556, 10+ independent reports) caused by the eval artifact not being installed as a real skill. Also fixes Windows stream reading, trigger detection, and parallel worker behavior.

---

### #514 — Add document-typography skill  
[anthropics/skills PR #514](https://github.com/anthropics/skills/pull/514)  
**Status:** Open  
**Functionality:** Adds a typographic quality-control skill for AI-generated documents: orphan word wrap, widow paragraphs, and numbering misalignment.  
**Discussion highlights:** Highlights a class of document-quality problems that affects essentially every Claude-generated deliverable and is rarely caught by existing document skills.

---

### #538 — fix(pdf): correct case-sensitive file references in SKILL.md  
[anthropics/skills PR #538](https://github.com/anthropics/skills/pull/538)  
**Status:** Open  
**Functionality:** Fixes 8 case-sensitivity mismatches in `skills/pdf/SKILL.md` (`REFERENCE.md` → `reference.md`, `FORMS.md` → `forms.md`).  
**Discussion highlights:** Important for users on case-sensitive filesystems where the PDF skill’s documentation links currently break.

---

### #486 — Add ODT skill  
[anthropics/skills PR #486](https://github.com/anthropics/skills/pull/486)  
**Status:** Open  
**Functionality:** Adds an ODT/ODS/ODF skill for creating, filling, reading, and converting OpenDocument text files, including ODT → HTML conversion.  
**Discussion highlights:** Expands the document-skills ecosystem beyond Office formats, targeting LibreOffice and open-standard document workflows.

---

### #210 — Improve frontend-design skill clarity and actionability  
[anthropics/skills PR #210](https://github.com/anthropics/skills/pull/210)  
**Status:** Open  
**Functionality:** Revises the `frontend-design` skill so every instruction is actionable within a single conversation and specific enough to steer Claude’s behavior.  
**Discussion highlights:** Reflects community demand for Skills that are more operational and less descriptive — a recurring theme across the repo.

---

### #83 — Add skill-quality-analyzer and skill-security-analyzer  
[anthropics/skills PR #83](https://github.com/anthropics/skills/pull/83)  
**Status:** Open  
**Functionality:** Adds two meta-skills to the example marketplace: a quality analyzer evaluating Skills across structure, docs, examples, and resources; and a security analyzer for trust-boundary issues.  
**Discussion highlights:** Directly connected to security concerns raised in issues like #492, where community Skills under the `anthropic/` namespace create trust risks.

---

### #541 — fix(docx): prevent tracked change w:id collision  
[anthropics/skills PR #541](https://github.com/anthropics/skills/pull/541)  
**Status:** Open  
**Functionality:** Fixes DOCX corruption when the DOCX skill adds tracked changes to documents that already contain bookmarks.  
**Discussion highlights:** Root cause is OOXML `w:id` collisions between bookmarks, tracked changes, comments, and move ranges — a subtle but destructive document-generation bug.

---

### #539 — fix(skill-creator): warn on unquoted YAML description  
[anthropics/skills PR #539](https://github.com/anthropics/skills/pull/539)  
**Status:** Open  
**Functionality:** Adds pre-parse validation in `quick_validate.py` to catch unquoted `description:` fields containing `:` before YAML silently truncates them.  
**Discussion highlights:** Prevents a class of silent skill-description corruption — especially relevant to the skill-creator tooling that the community relies on heavily.

---

## 2. Community Demand Trends

- **Security and trust-boundary enforcement**  
  The most commented issue, [#492 – Security: Community skills distributed under anthropic/ namespace](https://github.com/anthropics/skills/issues/492), shows strong demand for official-identity safeguards, skill signing/verification, and security analyzers. Related enterprise concerns appear in [#1175 – SharePoint Online security/context-window concerns](https://github.com/anthropics/skills/issues/1175).

- **Org-wide skill sharing and distribution**  
  [#228 – Enable org-wide skill sharing in Claude.ai](https://github.com/anthropics/skills/issues/228) is the second-most-commented issue. The community wants shared skill libraries, direct sharing links, and easier enterprise distribution instead of manual `.skill` file transfers.

- **Skill-creator / eval reliability**  
  The cluster around `run_eval.py`, Windows compatibility, and false 0% trigger rates is a major pain point:  
  [#556 – run_eval.py never triggers skills](https://github.com/anthropics/skills/issues/556),  
  [#1061 – Windows compatibility: subprocess PATHEXT, cp1252, select on pipes](https://github.com/anthropics/skills/issues/1061),  
  [#1169 – recall=0% on every iteration](https://github.com/anthropics/skills/issues/1169).  
  This is not a new Skill direction, but it is blocking effective Skill description optimization.

- **Agent memory, governance, and output verification**  
  Several high-interest proposals target agent lifecycle quality:  
  [#1329 – compact-memory](https://github.com/anthropics/skills/issues/1329),  
  [#412 – agent-governance](https://github.com/anthropics/skills/issues/412),  
  [#1385 – Reasoning Quality Gate Pipeline](https://github.com/anthropics/skills/issues/1385).  
  These indicate demand for Skills that manage agent state, enforce safety patterns, and audit output before delivery.

- **Specialized expert skills**  
  The community is also actively requesting deep, single-domain expertise Skills: document typography (#514), ODT / OpenDocument (#486), retro game development (#525), color science (#1302), and comprehensive testing patterns (#723).

---

## 3. High-Potential Pending Skills

These open PRs have active recent activity and may land soon:

- **[#525 – Add pyxel skill for retro game development](https://github.com/anthropics/skills/pull/525)**  
  Status: Open · Updated 2026-07-15  
  A workflow-oriented Skill for building retro/pixel-art/8-bit games with Pyxel via `pyxel-mcp`, covering write → run-and-capture → inspect → iterate.

- **[#1302 – Add color-expert skill](https://github.com/anthropics/skills/pull/1302)**  
  Status: Open · Updated 2026-07-21  
  Self-contained color expertise: ISCC-NBS/Munsell/RAL/CSS naming, color spaces, and “what to use when” guidance for OKLCH, OKLAB, CAM16, etc.

- **[#1479 – Add plan-file-hygiene skill](https://github.com/anthropics/skills/pull/1479)**  
  Status: Open · Updated 2026-07-27  
  Addresses planning-artifact lifecycle: prevents accumulation of stale plans and introduces lifecycle management for planning files.

- **[#1367 – Add self-audit skill](https://github.com/anthropics/skills/pull/1367)**  
  Status: Open · Updated 2026-07-02  
  Universal output audit: mechanical file verification first, then a four-dimension reasoning quality gate before delivery.

- **[#723 – Add testing-patterns skill](https://github.com/anthropics/skills/pull/723)**  
  Status: Open · Updated 2026-04-21  
  Broad testing-stack Skill covering testing philosophy, unit testing, React component testing, and what *not* to test.

---

## 4. Skills Ecosystem Insight

The community’s most concentrated demand at the Skills level is for **making Skills themselves trustworthy, reliable, and resource-efficient** — secure distribution and trust boundaries, dependable skill-creation/eval tooling, context-window discipline, and output verification — with a parallel surge of interest in deep specialist Skills for documents, color, games, and testing.

---

# Claude Code Community Digest — 2026-08-04

## Today's Highlights
- Claude Code v2.1.221 shipped a VS Code **Focus view** for decluttering tool activity, plus a new Linux sandbox `mode: "mask"` for credential files.
- The community tracker remains dominated by **usage-limit accounting bugs**, especially on Max/Pro plans, with a 1.5k+ comment thread still unresolved.
- A serious security issue was filed around **Claude for Chrome OAuth grants persisting after global logout**, drawing attention from reviewers.

## Releases
- **v2.1.221** ([changelog](https://github.com/anthropics/claude-code/releases))
  - VS Code: Added **Focus view** — a chat-menu toggle that hides tool activity behind an expandable per-turn summary with a live running-tool indicator. Toggle with `Ctrl+Alt+F` or the "Claude Code: Toggle Focus view" command.
  - Added `mode: "mask"` for sandbox credential files on Linux.

## Hot Issues
1. **[BUG] Instantly hitting usage limits with Max subscription** — [#16157](https://github.com/anthropics/claude-code/issues/16157)  
   The single hottest thread in the repo: 1,484 comments and 691 👍. Users on Max report usage limits consumed almost immediately, with ongoing billing/accounting concerns.

2. **Usage limit reached repeatedly without active use — Pro plan (Windows)** — [#61012](https://github.com/anthropics/claude-code/issues/61012)  
   Recurring theme on Windows: limits are hit while idle, with no clear local usage explanation. Still open with 16 comments.

3. **[BUG] Possible Claude Max usage bug: session limit consumed without using** — [#82506](https://github.com/anthropics/claude-code/issues/82506)  
   Recent report (July 30) with 15 comments; Max session limits appear to be consumed without corresponding activity.

4. **[SECURITY] Claude for Chrome OAuth grant remains authenticated after global logout** — [#82074](https://github.com/anthropics/claude-code/issues/82074)  
   Security-flagged bug: an OAuth grant survives account-wide logout and is invisible to session controls. 13 comments; serious privacy implications.

5. **Current session limit reaches 100% despite low visible local session usage** — [#54750](https://github.com/anthropics/claude-code/issues/54750)  
   macOS-specific report with 13 comments. Local usage displays low or zero, yet the remote limit blocks work.

6. **Cross-session coordination for independently-launched Claude Code sessions** — [#76727](https://github.com/anthropics/claude-code/issues/76727)  
   Enhancement request for multi-session users sharing one working tree. Existing PreToolUse `deny` hooks are described as a fragile DIY solution. 10 comments.

7. **[MODEL] Claude overrode explicit pronouns in user memory and defaulted to male bias** — [#52477](https://github.com/anthropics/claude-code/issues/52477)  
   Model behavior issue: explicit user memory was ignored in favor of biased defaults. 10 comments, 2 👍.

8. **Session usage shows "100% used" with $0.0000 cost and 0 tokens consumed** — [#81116](https://github.com/anthropics/claude-code/issues/81116)  
   Clear evidence that usage accounting is producing inconsistent states. 7 comments; useful repro signal for maintainers.

9. **Weekly + Fable quota jumped 0% -> 50%/100% with account idle** — [#83579](https://github.com/anthropics/claude-code/issues/83579)  
   Max 20x user saw quotas increase while completely idle after the Jul 31 reset. 6 comments; likely tied to the same accounting bug family.

10. **Persistent 5-hour reset loop / 100% usage exhaustion with zero activity** — [#72680](https://github.com/anthropics/claude-code/issues/72680)  
   Windows report, labeled duplicate but still significant: the 5-hour reset loop never returns quota despite total inactivity. 5 comments, 1 👍.

## Key PR Progress
Only two PRs were active in the last 24h; no merged PRs were listed in the provided data.

- **[docs(plugin-dev): document MessageDisplay streaming semantics](https://github.com/anthropics/claude-code/pull/83374)**  
  Adds `MessageDisplay` to the bundled plugin-development guidance — trigger description, event guidance, and quick-reference table — since it was previously omitted despite being a supported hook event.

- **[Fix/83484 symlink path expansion](https://github.com/anthropics/claude-code/pull/83738)**  
  Fixes issue #83484 where `claude install` on some Linux setups created a broken `~/.local/bin/claude` symlink pointing to a literal `%h` placeholder instead of the expanded home directory path.

## Feature Request Trends
- **Usage metering transparency**: The strongest signal across issues is demand for clearer, accurate usage accounting — users want to see what consumes session limits, especially on Max plans ([#16157](https://github.com/anthropics/claude-code/issues/16157), [#81116](https://github.com/anthropics/claude-code/issues/81116), [#83579](https://github.com/anthropics/claude-code/issues/83579)).
- **Cross-session and agent coordination**: Request for first-party primitives to coordinate multiple Claude Code sessions sharing one repo/worktree ([#76727](https://github.com/anthropics/claude-code/issues/76727)).
- **IDE parity**: Users continue pushing for feature parity between CLI and IDE surfaces, e.g. exposing `/buddy` in the VS Code native extension ([#45087](https://github.com/anthropics/claude-code/issues/45087)) and broader theme support ([#42214](https://github.com/anthropics/claude-code/issues/42214)).
- **Security/session controls**: Growing interest in making authenticated grants visible and revocable at the account level ([#82074](https://github.com/anthropics/claude-code/issues/82074)).

## Developer Pain Points
- **Usage-limit bugs dominate**: Recurring reports of limits being consumed with zero local activity, zero tokens, or after a reset — across macOS, Windows, and Linux ([#16157](https://github.com/anthropics/claude-code/issues/16157), [#61012](https://github.com/anthropics/claude-code/issues/61012), [#72680](https://github.com/anthropics/claude-code/issues/72680)).
- **Windows-specific instability**: Multiple open issues point to Windows-specific session/env/reply routing problems, especially with concurrent sessions and subagents ([#77599](https://github.com/anthropics/claude-code/issues/77599), [#54689](https://github.com/anthropics/claude-code/issues/54689)).
- **Model behavior unpredictability**: Developers report model regressions like overriding user memory, overestimating task duration, and false-positive classifier switches ([#52477](https://github.com/anthropics/claude-code/issues/52477), [#55576](https://github.com/anthropics/claude-code/issues/55576), [#67441](https://github.com/anthropics/claude-code/issues/67441)).
- **Subagent isolation issues**: Trust issues are emerging around subagent output streams, including fabricated `<system-reminder>` blocks and replies delivered to the wrong session ([#75372](https://github.com/anthropics/claude-code/issues/75372), [#77599](https://github.com/anthropics/claude-code/issues/77599)).
- **Permission and sandbox friction**: Users continue to hit confusing permission prompts, allowlist bypasses, and sandbox initialization failures, especially on macOS/Linux ([#55542](https://github.com/anthropics/claude-code/issues/55542), [#55849](https://github.com/anthropics/claude-code/issues/55849), [#56117](https://github.com/anthropics/claude-code/issues/56117)).

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-08-04

## Today's Highlights

OpenAI Codex published a fresh batch of `rust-v0.147.0` alpha releases, though no detailed changelogs accompanied the version bumps. The community is most engaged with token burn and rate-limit unpredictability, led by #14593 with 628 comments, while maintainers landed a large set of PRs focused on MCP negotiation, secret redaction, and multi-agent v2 model handling. Windows-specific bugs and third-party model/MCP compatibility continue to be recurring themes.

## Releases

Four new Rust distribution alpha releases were published in the last 24 hours:

- rust-v0.147.0-alpha.7
- rust-v0.147.0-alpha.6.1
- rust-v0.147.0-alpha.6
- rust-v0.147.0-alpha.1.2

All release notes simply say “Release 0.147.0-alpha.x”; no user-facing changelog details were included.

## Hot Issues

1. **Burning tokens very fast** — [#14593](https://github.com/openai/codex/issues/14593)  
   The most active issue this cycle: users report extremely rapid token consumption in the IDE extension. With 628 comments and 283 👍, this is the clearest community pain point right now.

2. **Customizable status line** — [#17827](https://github.com/openai/codex/issues/17827)  
   Users continue asking for a Claude Code-style TUI status line showing token usage, model, rate limits, git branch, etc. 143 👍 makes it one of the most requested enhancements.

3. **Flatten MCP namespace tools for non-OpenAI Responses API providers** — [#26234](https://github.com/openai/codex/issues/26234)  
   MCP tools exposed as namespaces are not callable through Ollama, LM Studio, OpenRouter, or AWS Bedrock. This blocks MCP usage for a large chunk of the custom-model community.

4. **Make Weekly Limit Reset Deterministic** — [#9508](https://github.com/openai/codex/issues/9508)  
   Developers want predictable rate-limit reset timing instead of ambiguous weekly cycles. 48 comments and 32 👍 show sustained interest in rate-limit transparency.

5. **gpt-5.6-luna is marked as MultiAgent V1, so V2 spawn_agent rejects it** — [#35097](https://github.com/openai/codex/issues/35097)  
   Model metadata and multi-agent versioning are out of sync, causing valid models to be rejected in V2 agent flows. 39 👍 from users tracking model compatibility.

6. **Windows Codex app should provide a non-Microsoft Store installer** — [#21538](https://github.com/openai/codex/issues/21538)  
   Enterprise-managed Windows machines without Store access cannot install the Codex desktop app. This request has 23 👍 and reflects real enterprise deployment friction.

7. **Codex CLI 0.124.0 misreports `gh auth status` as invalid** — [#19262](https://github.com/openai/codex/issues/19262)  
   A tool-call correctness regression: valid GitHub auth is reported as invalid inside a Codex session, breaking automation workflows that depend on `gh`.

8. **Custom pets fail to load in WSL environments due to path normalization** — [#20730](https://github.com/openai/codex/issues/20730)  
   Windows/WSL path handling breaks custom pet loading. 24 👍 indicates meaningful interest even for a cosmetic feature.

9. **Pasting code snippets (especially diffs) now converts it to markdown** — [#34004](https://github.com/openai/codex/issues/34004)  
   Users report that pasting diffs into the app is transformed into markdown, damaging code-review workflows. This is a regression in a common editing path.

10. **Allow opt-in full 1.05M context and configurable compaction for GPT-5.6 Sol** — [#33306](https://github.com/openai/codex/issues/33306)  
   Power users want access to the full GPT-5.6 Sol context window and manual control over compaction, rather than the current automatic default.

## Key PR Progress

1. **Negotiate MCP extensions per app-server session** — [#36910](https://github.com/openai/codex/pull/36910)  
   Adds an `extensions` map to the MCP initialize call so app-server clients can advertise structured MCP extension settings and supported MIME types.

2. **Improve bearer token secret redaction** — [#36908](https://github.com/openai/codex/pull/36908)  
   Strengthens redaction for bearer tokens containing URL-safe characters or starting with other recognized key prefixes, reducing secret leakage risk.

3. **Preserve model providers when reloading v2 agents** — [#36906](https://github.com/openai/codex/pull/36906)  
   Fixes a multi-agent v2 bug where reloading an unloaded agent could inherit the wrong model provider from the triggering agent.

4. **Support leaf models in multi-agent v2** — [#36892](https://github.com/openai/codex/pull/36892)  
   Allows V2 parents to spawn any visible model that has not explicitly disabled multi-agent support; legacy models become leaf workers.

5. **Limit RMCP logs persisted to SQLite** — [#36904](https://github.com/openai/codex/pull/36904)  
   Restricts `rmcp` and `codex_rmcp_client` event persistence to INFO level and above, reducing SQLite log noise.

6. **Redact secrets from app-server command execution items** — [#36893](https://github.com/openai/codex/pull/36893)  
   Secrets in rendered commands and parsed command actions are now redacted in live, completed, and historical execution items.

7. **Handle late MCP startup results after lag timeout** — [#36895](https://github.com/openai/codex/pull/36895)  
   Prevents misleading interruption warnings when MCP startup status arrives late; terminal results are no longer hidden by timeout handling.

8. **Propagate updated permissions to review threads** — [#36901](https://github.com/openai/codex/pull/36901)  
   Review threads now inherit the parent turn’s full permission settings and approval reviewer when per-turn configuration is rebuilt.

9. **Register app tools independently of the connector list** — [#36900](https://github.com/openai/codex/pull/36900)  
   Gates Codex Apps MCP tool registration on whether apps are enabled, rather than requiring each tool’s connector to appear in the accessible list.

10. **Preserve complete MCP namespace descriptions** — [#36882](https://github.com/openai/codex/pull/36882)  
   Raises the namespace tool-spec description limit from 1,000 bytes to 512 KiB and keeps full descriptions in tool-search metadata.

## Feature Request Trends

- **TUI and CLI configurability**: Status-line customization, opt-in automatic CLI updates, and configurable context/compaction are recurring asks.
- **Rate-limit transparency**: Users want deterministic weekly reset behavior, clearer usage telemetry, and easier mapping of token metrics to pricing.
- **Broader MCP compatibility**: There is strong demand for MCP tools to work with non-OpenAI providers such as Ollama, LM Studio, OpenRouter, and Bedrock.
- **Enterprise deployment flexibility**: Non-Microsoft-Store Windows installers and better WSL path handling are key enterprise-focused requests.

## Developer Pain Points

- **Token and rate-limit anxiety**: The #14593 thread shows that many users feel token consumption is opaque and too fast, making Codex expensive to use unpredictably.
- **Windows ecosystem friction**: WSL path issues, Store-only installation, PowerShell/conhost focus stealing, and crash-unsafe local state continue to hurt Windows users.
- **MCP/tool interop failures**: Namespace serialization, late startup results, and provider mismatches make MCP + custom-model setups fragile.
- **Workflow regressions**: Markdown-on-paste, disappearing mobile messages, lost tool handlers, and false `gh auth status` failures are disrupting real developer workflows.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-08-04

## Today’s Highlights

No release landed in the last 24 hours; activity centered on subagent reliability, memory-system robustness, and auth/security hardening. Maintainers are retesting several P1 agent bugs — including false “GOAL” success reports and generalist-agent hangs — while new PRs address context corruption, OAuth/A2A security, signal handling, and local model endpoint support. Community attention remains focused on agent trustworthiness, tool-context bloat, and clearer failure reporting.

## Releases

No new releases in the last 24 hours.

## Hot Issues

1. **Subagent MAX_TURNS reported as GOAL success** — [#22323](https://github.com/google-gemini/gemini-cli/issues/22323)  
   P1. A subagent can report `status: success` / `Termination Reason: GOAL` even when it hit its turn limit before doing useful work. Dangerous for automation that trusts termination reasons. 12 comments, 2 👍.

2. **Generalist agent hangs indefinitely** — [#21409](https://github.com/google-gemini/gemini-cli/issues/21409)  
   P1. Simple delegated work, such as folder creation, hangs forever. Users report that instructing the model to avoid subagents is the only reliable workaround. 8 comments, 8 👍.

3. **Robust component-level evaluations** — [#24353](https://github.com/google-gemini/gemini-cli/issues/24353)  
   Epic tracking the expansion of behavioral eval coverage: 76 tests now run across 6 supported Gemini model variants. Directly relevant to preventing regressions like the P1 hangs above.

4. **AST-aware file reads, search, and mapping** — [#22745](https://github.com/google-gemini/gemini-cli/issues/22745)  
   Epic investigating whether AST-aware tools can reduce token noise, avoid misaligned file reads, and improve codebase navigation.

5. **Gemini does not proactively use skills and sub-agents** — [#21968](https://github.com/google-gemini/gemini-cli/issues/21968)  
   Users report that custom skills and sub-agents are ignored unless explicitly requested. A recurring adoption problem for custom agent workflows. 6 comments.

6. **Auto Memory retries low-signal sessions forever** — [#26522](https://github.com/google-gemini/gemini-cli/issues/26522)  
   Low-signal sessions remain “unprocessed,” so the background extraction agent keeps seeing them and wasting retries/tokens. 5 comments.

7. **Shell command hangs with “Waiting input” after completion** — [#25166](https://github.com/google-gemini/gemini-cli/issues/25166)  
   P1. Simple CLI commands stay stuck in an active/awaiting state even after finishing. 4 comments, 3 👍.

8. **Browser subagent fails on Wayland** — [#21983](https://github.com/google-gemini/gemini-cli/issues/21983)  
   P1. Browser agent reports GOAL termination but actually fails under Wayland, making debugging confusing. 4 comments, 1 👍.

9. **Subagents running without permission since v0.33.0** — [#22093](https://github.com/google-gemini/gemini-cli/issues/22093)  
   Users with sub-agents disabled report they are still invoked after updating to v0.33.0. A serious regression for permission-conscious workflows.

10. **400 error with more than 128 tools** — [#24246](https://github.com/google-gemini/gemini-cli/issues/24246)  
    Tool loading can exceed model API limits. Users want smarter tool scoping rather than an unfiltered tool explosion.

## Key PR Progress

1. **SGLang and local OpenAI-compatible endpoint support** — [#28681](https://github.com/google-gemini/gemini-cli/pull/28681)  
   Adds core/CLI support for SGLang and local OpenAI-compatible endpoints, opening up self-hosted and on-prem deployments.

2. **Context corruption and quota-fallback hardening** — [#28671](https://github.com/google-gemini/gemini-cli/pull/28671)  
   Defends history when tool executions are interrupted or altered, preventing model “autocomplete” prefix-continuation bugs after quota errors or ESC queries.

3. **Fix `/compress` reload and quota-fallback tool response loss** — [#28672](https://github.com/google-gemini/gemini-cli/pull/28672)  
   Addresses two bugs: `/compress` failing to reload resumed session data, and tool responses being lost when hitting quota limits.

4. **Full MCP server config shown in consent prompts** — [#28664](https://github.com/google-gemini/gemini-cli/pull/28664)  
   Consent now reflects `env`, `cwd`, and `headers`, not just command/args/httpUrl. Also hardens stdio environment handling.

5. **Reject A2A OpenID Connect auth during validation** — [#28680](https://github.com/google-gemini/gemini-cli/pull/28680)  
   Prevents configurations that pass validation but fail at request time when connecting to remote A2A agents. Fixes [#28651](https://github.com/google-gemini/gemini-cli/issues/28651).

6. **OAuth callback timeout leak fix** — [#28678](https://github.com/google-gemini/gemini-cli/pull/28678)  
   Centralizes OAuth callback settlement and resource cleanup to prevent stale timeout callbacks and memory leaks.

7. **IdeClient process traversal timeout** — [#28677](https://github.com/google-gemini/gemini-cli/pull/28677)  
   `getIdeProcessInfo()` now races against a 3-second timeout, preventing the TUI from hanging on “Initializing…” in bare terminals.

8. **Forward termination signals to relaunched child process** — [#28676](https://github.com/google-gemini/gemini-cli/pull/28676)  
   SIGTERM/SIGHUP/SIGINT/SIGQUIT are forwarded to the child, avoiding orphaned processes when the bootstrap parent is killed.

9. **Clearer Vertex AI 401 errors** — [#28679](https://github.com/google-gemini/gemini-cli/pull/28679)  
   Improves the error message when a standard Gemini API key is mistakenly used with Vertex AI auth configuration.

10. **Gemini 3.6 Flash and 3.5 Flash-Lite model configs** — [#28673](https://github.com/google-gemini/gemini-cli/pull/28673)  
    Adds model definitions, capabilities, aliases, and Code Execution support for newer Flash model tiers.

## Feature Request Trends

- **Agent observability and self-awareness**  
  Users want subagent trajectories visible/shareable via `/chat share` ([#22598](https://github.com/google-gemini/gemini-cli/issues/22598)), subagent context included in `/bug` reports ([#21763](https://github.com/google-gemini/gemini-cli/issues/21763)), and accurate CLI self-knowledge about flags and hotkeys ([#21432](https://github.com/google-gemini/gemini-cli/issues/21432)).

- **Smarter context and tool selection**  
  AST-aware file reads/search/codebase mapping ([#22745](https://github.com/google-gemini/gemini-cli/issues/22745), [#22746](https://github.com/google-gemini/gemini-cli/issues/22746)), dynamic tool scoping when too many tools are loaded ([#24246](https://github.com/google-gemini/gemini-cli/issues/24246)), and native file tools for task tracking ([#21000](https://github.com/google-gemini/gemini-cli/issues/21000)).

- **Memory lifecycle and privacy**  
  Stop reprocessing low-signal sessions ([#26522](https://github.com/google-gemini/gemini-cli/issues/26522)), redact secrets before sending transcripts to model context ([#26525](https://github.com/google-gemini/gemini-cli/issues/26525)), and quarantine invalid Auto Memory inbox patches ([#26523](https://github.com/google-gemini/gemini-cli/issues/26523)).

- **Safety and resilience guardrails**  
  Discourage destructive git/DB commands ([#22672](https://github.com/google-gemini/gemini-cli/issues/22672)) and improve browser agent recovery from locked profiles ([#22232](https://github.com/google-gemini/gemini-cli/issues/22232)).

## Developer Pain Points

- **False success and missing subagent context**  
  Termination reasons like “GOAL” hide real failures from max-turn interruptions ([#22323](https://github.com/google-gemini/gemini-cli/issues/22323), [#21983](https://github.com/google-gemini/gemini-cli/issues/21983)). `/bug` reports also lack subagent internals, making diagnosis harder ([#21763](https://github.com/google-gemini/gemini-cli/issues/21763)).

- **Indefinite hangs**  
  Generalist agent hangs ([#21409](https://github.com/google-gemini/gemini-cli/issues/21409)), shell commands stuck on “Waiting input” ([#25166](https://github.com/google-gemini/gemini-cli/issues/25166)), and interactive prompts such as Vite app creation getting stuck ([#22465](https://github.com/google-gemini/gemini-cli/issues/22465)).

- **Permissions and configuration regressions**  
  Subagents running despite being disabled ([#22093](https://github.com/google-gemini/gemini-cli/issues/22093)), browser agent ignoring `settings.json` overrides ([#22267](https://github.com/google-gemini/gemini-cli/issues/22267)), and symlinked agent files not recognized ([#20079](https://github.com/google-gemini/gemini-cli/issues/20079)).

- **Context bloat and workspace cleanup**  
  More than 128 tools causes 400 errors ([#24246](https://github.com/google-gemini/gemini-cli/issues/24246)), models scatter temporary scripts around the workspace ([#23571](https://github.com/google-gemini/gemini-cli/issues/23571)), and Auto Memory keeps low-signal sessions alive unnecessarily ([#26522](https://github.com/google-gemini/gemini-cli/issues/26522)).

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

## GitHub Copilot CLI Community Digest — 2026-08-04

### Today’s Highlights
Copilot CLI shipped two releases in the past 24 hours: v1.0.78 adds live tool-call timing and first-party plugin auto-updates, while v1.0.78-3 introduces an experimental `/new-worktree` command and improves desktop login behavior. Community attention is focused on terminal/platform quirks, enterprise MCP fail-closed issues, and long-standing feature requests around themes, session lifecycle, and plugin management.

### Releases
- [v1.0.78](https://github.com/github/copilot-cli/releases/tag/v1.0.78) — Timeline headers now show tool call durations, right-aligned and ticking live for calls over 5 seconds. On by default; disable via `/settings showToolDurations`. First-party plugins also auto-update at session start.
- [v1.0.78-3](https://github.com/github/copilot-cli/releases/tag/v1.0.78-3) — Adds the experimental `/new-worktree` command to create a worktree and start a fresh conversation in it. The interactive shell shortcut now launches on Enter with an inline hint when `$` is armed. Copilot login now defaults to the browser flow for local desktop.

### Hot Issues
1. [Auto-updating plugins (#1709)](https://github.com/github/copilot-cli/issues/1709) — Closed but highly requested with 29 👍. Users want an automated mechanism for updating plugins instead of manual per-plugin updates.
2. [Session forking — branch into parallel sessions with shared context (#1697)](https://github.com/github/copilot-cli/issues/1697) — Open, 25 👍. Strong demand for branching conversations without losing current context.
3. [Custom theme support (#1504)](https://github.com/github/copilot-cli/issues/1504) — Open, 23 👍. Users are asking for shareable JSON-based themes beyond the current `auto`/`dark`/`light` modes.
4. [Ctrl+H misinterpreted as Ctrl+Backspace under WSL2 (#4328)](https://github.com/github/copilot-cli/issues/4328) — Open. A `WT_SESSION` leak causes incorrect deletion behavior, a focused platform-specific bug affecting WSL2 users.
5. [Input box pre-filled with DA1 escape reply under zellij (#4267)](https://github.com/github/copilot-cli/issues/4267) — Open. Terminal escape sequences leak into the prompt, highlighting broader terminal-detection fragility.
6. [Managed settings policy fails closed on valid enum value (#4349)](https://github.com/github/copilot-cli/issues/4349) — Open. Enterprise policy with `permissions.disableBypassPermissionsMode: "enable"` fails validation and blocks all local/custom MCP servers.
7. [Plugin skill slash commands regression (#4361)](https://github.com/github/copilot-cli/issues/4361) — Open. The desktop client now fires a `session.commands.invoke` RPC instead of rewriting to natural language, breaking plugin-provided slash commands.
8. [web_search tool returns fabricated answers (#4093)](https://github.com/github/copilot-cli/issues/4093) — Open. The built-in `web_search` tool can present confident, hallucinated answers with no grounding — a significant trust issue.
9. [ACP server does not expose token/context usage (#4174)](https://github.com/github/copilot-cli/issues/4174) — Closed. ACP integrations need protocol-level observability for token and context consumption.
10. [Repeated native-runtime crashes on Windows (#4026)](https://github.com/github/copilot-cli/issues/4026) — Open. Unresolved since May 2026 across multiple versions, causing significant stability pain for Windows users.

### Key PR Progress
Only one pull request was updated in the last 24 hours:

- [PR #4355 “Merge”](https://github.com/github/copilot-cli/pull/4355) — Open, no description or comments available. No substantial PR details were included in this update window.

### Feature Request Trends
- **Custom theming & accessibility** — Requests for user-defined color themes, shareable JSON themes, and fixes for contrast issues driven by OSC 11 background handling.  
  See [#1504](https://github.com/github/copilot-cli/issues/1504), [#2830](https://github.com/github/copilot-cli/issues/2830), [#3898](https://github.com/github/copilot-cli/issues/3898)
- **Session lifecycle management** — Cloud-synced sessions, session forking, deletion commands, and now a `/new-worktree` command in v1.0.78-3.  
  See [#1947](https://github.com/github/copilot-cli/issues/1947), [#1697](https://github.com/github/copilot-cli/issues/1697), [#2019](https://github.com/github/copilot-cli/issues/2019)
- **Plugin lifecycle controls** — Auto-update, enable/disable toggles, and better repo-level plugin skill visibility.  
  See [#1709](https://github.com/github/copilot-cli/issues/1709), [#2714](https://github.com/github/copilot-cli/issues/2714), [#4048](https://github.com/github/copilot-cli/issues/4048)
- **Observability & cost data** — ACP token/context/cost reporting and a persistent context bar.  
  See [#4174](https://github.com/github/copilot-cli/issues/4174), [#4363](https://github.com/github/copilot-cli/issues/4363), [#2532](https://github.com/github/copilot-cli/issues/2532)
- **Model & tool configurability** — Bring-your-own-model endpoints and selective sandbox tool enablement.  
  See [#4139](https://github.com/github/copilot-cli/issues/4139), [#4298](https://github.com/github/copilot-cli/issues/4298)

### Developer Pain Points
- **Terminal escape-sequence leaks and compatibility bugs** — WSL2 keybinding confusion, zellij DA1 prefill, focus-reporting leaks, and no opt-out for OSC 9;4 progress sequences.  
  See [#4328](https://github.com/github/copilot-cli/issues/4328), [#4267](https://github.com/github/copilot-cli/issues/4267), [#4362](https://github.com/github/copilot-cli/issues/4362), [#4352](https://github.com/github/copilot-cli/issues/4352)
- **Fail-closed enterprise/MCP configurations** — Managed settings schema validation and private-CA certificate issues block all MCP usage in enterprise environments.  
  See [#4349](https://github.com/github/copilot-cli/issues/4349), [#4364](https://github.com/github/copilot-cli/issues/4364), [#2692](https://github.com/github/copilot-cli/issues/2692)
- **Trust & correctness** — `web_search` hallucinations remain a serious concern for users who rely on grounded answers.
- **Windows stability** — Native-runtime crashes continue unresolved across multiple releases.
- **Protocol/API gaps** — Missing ACP cost data and models advertised via `/models` but unusable through `/chat/completions` create friction for aggregator tooling.  
  See [#4174](https://github.com/github/copilot-cli/issues/4174), [#4363](https://github.com/github/copilot-cli/issues/4363), [#4337](https://github.com/github/copilot-cli/issues/4337)

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

## Today's Highlights

No new Kimi Code CLI release landed in the last 24h, but the project saw meaningful movement on protocol-level features and stability. Two ACP-related items (`#2583`, `#2364`) target model discovery and permission-mode switching, while fresh issues report Windows IME duplicate input (`#2584`) and CLI stream hangs (`#2582`). The long-running memory-system request (`#1283`) remains the most actively discussed issue with 17 comments.

## Releases

None in the last 24h.

## Hot Issues

All 5 open issues touched in the last 24h are listed below.

- **[#1283] Feature Request: Memory System – Persistent context across sessions**  
  The most-discussed open issue, with 17 comments. Requests automatic memory (AI-managed notes) and manual memory (user-defined instructions) to preserve project patterns and preferences across sessions. The extended update window suggests sustained user interest in long-term context continuity.  
  [View Issue](https://github.com/MoonshotAI/kimi-cli/issues/1283)

- **[#2573] Bug: Web UI “Connecting to session...” infinite spinner when switching sessions**  
  Reported on `kimi-cli 1.48.0` (Homebrew, macOS) in the `kimi web` technical preview. Session switching in the Web UI becomes stuck on an infinite spinner, blocking normal use. Only 1 comment so far, but this affects the usability of the newer Web UI surface.  
  [View Issue](https://github.com/MoonshotAI/kimi-cli/issues/2573)

- **[#2584] Bug: Thai (and other IME-based) characters duplicated when typing in the prompt on Windows**  
  Windows 11, CLI `0.31.1`, default model. IME input produces duplicated characters in the prompt, making non-Latin text entry unreliable. No comments yet; likely relevant to users across multiple IME-based languages.  
  [View Issue](https://github.com/MoonshotAI/kimi-cli/issues/2584)

- **[#2583] feat(acp): advertise available models and support mid-session model switching**  
  Requests ACP protocol support for model discovery: `session/new` currently does not advertise a model list, and there is no `current_model_update` event for switching models mid-session. This blocks ACP clients such as Happy Coder mobile app and Zed from exposing model controls.  
  [View Issue](https://github.com/MoonshotAI/kimi-cli/issues/2583)

- **[#2582] Bug: CLI stream hangs indefinitely during generation, session becomes unusable**  
  Windows 10, Moonshot Platform API, `kimi-k2.7-code`, CLI `0.31.1`. Generation starts but the stream hangs forever, and the session cannot be recovered. This is a critical reliability issue for API-based users on Windows.  
  [View Issue](https://github.com/MoonshotAI/kimi-cli/issues/2582)

## Key PR Progress

3 PRs received updates in the last 24h.

- **[#2200] fix(shell): adapt timeouts for long commands**  
  Automatically extends shell timeouts for command patterns known to be slow (`git submodule cleanup`, `git clone/fetch`, package installs, builds), while keeping the normal 60s default for other commands and preserving explicit user-supplied timeouts. A pragmatic fix for flaky long-running tool calls.  
  [View PR](https://github.com/MoonshotAI/kimi-cli/pull/2200)

- **[#2585] feat(cli): set AI_AGENT for subprocesses**  
  Exposes `AI_AGENT=kimi` to subprocesses launched from pip/uv and standalone binary entrypoints, while preserving explicit non-blank values from wrappers/orchestrators. This standardizes agent identity for downstream tools.  
  [View PR](https://github.com/MoonshotAI/kimi-cli/pull/2585)

- **[#2364] feat(acp): support permission mode switching**  
  Adds protocol-level ACP permission-mode switching for Kimi sessions and advertises the default permission mode. Stacks on `#2363` and resolves `#1414`. Useful for ACP clients that need to request or adjust permission levels during a session.  
  [View PR](https://github.com/MoonshotAI/kimi-cli/pull/2364)

## Feature Request Trends

- **Persistent memory/context**: `#1283` continues to be the most requested direction — users want the CLI to remember project context, user preferences, and past decisions across sessions.
- **ACP protocol maturity**: Multiple items push for richer ACP support: model advertising and mid-session model switching (`#2583`), permission-mode switching (`#2364`), and standardized agent environment markers (`#2585`).
- **Input and UI polish**: Requests/issue reports around Web UI session switching (`#2573`) and IME input handling on Windows (`#2584`) indicate growing attention to non-Latin input and Web UI reliability.

## Developer Pain Points

- **Generation hangs and session lockups**: `#2582` describes stream hangs that leave the session unusable — a critical blocker on Windows with Moonshot Platform API.
- **Web UI session-switching reliability**: `#2573` shows the Web UI preview still has rough edges when switching between sessions.
- **IME/Windows input handling**: `#2584` highlights duplicated characters for Thai and other IME-based input, affecting a broad set of non-English users.
- **Missing ACP capabilities**: `#2583` shows clients cannot discover models or switch models mid-session, limiting integration scenarios with mobile and editor clients.
- **Version fragmentation**: Two Windows CLI bugs report `0.31.1`, while the Web UI issue references `1.48.0`; this version skew may complicate reproducible bug reports and debugging.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-08-04

## Today's Highlights
OpenCode released two patch versions focused on bug fixes: v1.18.13 improves TUI context for GitHub PR reviews and fixes multiple right-to-left layout issues in Desktop, while v1.18.12 fixes Azure GPT-5.5+ reasoning failures and Desktop composer lag. Community attention remains heavily concentrated on DeepSeek V4 Flash failures through OpenCode Go, with multiple reports of blank responses, HTTP 403/500 errors, and “stuck thinking” states.

## Releases

### v1.18.13
- **TUI:** GitHub pull request reviews now include the pull request number and URL in context.
- **Desktop:** Fixed several right-to-left layout issues across tabs, drawers, resizing, and titlebar interactions.
- **Desktop:** Fixed shared right-to-left UI behavior such as directional icons.

### v1.18.12
- **Core:** Fixed Azure GPT-5.5+ completion requests failing when reasoning is enabled.
- **Desktop:** Reduced composer lag when drafts include large pasted images or attachments.
- **Desktop:** Project search can now match any known recent project instead of only the first five.

---

## Hot Issues

- [#40471 — OpenCode Agents not replying](https://github.com/anomalyco/opencode/issues/40471)  
  A fresh, high-traffic report of agents stuck in “thinking” with no response. 11 comments in one day make it the most active issue today; it matches a wave of similar compliance-labeled reports.

- [#39829 — Support Responses API for deepseek-v4-flash on opencode-go](https://github.com/anomalyco/opencode/issues/39829)  
  The most upvoted feature request today with 22 👍. Users want native OpenAI Responses API support for DeepSeek’s `deepseek-v4-flash-0731` checkpoint through OpenCode Go.

- [#4232 — OpenCode displays models which aren't configured & don't exist in LM Studio](https://github.com/anomalyco/opencode/issues/4232)  
  A long-standing provider-catalog confusion issue with 10 👍. Users continue to expect strict filtering of models to only those explicitly configured for custom providers.

- [#40480 — OpenCode Go deepseek-v4-flash returns HTTP 500 while mimo-v2.5 works](https://github.com/anomalyco/opencode/issues/40480)  
  Narrows the DeepSeek V4 Flash failure to the OpenCode Go endpoint. Direct API requests eventually return HTTP 500, while the same key works fine with `mimo-v2.5`.

- [#40465 — deepseek-v4-flash on opencode-go drops connection before response](https://github.com/anomalyco/opencode/issues/40465)  
  Reports the upstream TCP connection being closed before any HTTP response, causing every request to hang until OpenCode’s 30s timeout. 4 👍 indicates community consensus that this is not a client-side config issue.

- [#40483 — DeepSeek v4 Flash Free blank response in Desktop App on Windows 11](https://github.com/anomalyco/opencode/issues/40483)  
  The app plays the completion sound and shows the “thinking” animation, but the response area stays blank. Another instance of the silent empty-output class of bugs.

- [#34087 — OpenCode not returning responses](https://github.com/anomalyco/opencode/issues/34087)  
  A longer-running issue where Desktop stops responding after “Input → Thinking → No response.” 7 comments show the problem affects both Go and Zen models.

- [#32366 — UI stuck on 'thinking' indefinitely after stream error](https://github.com/anomalyco/opencode/issues/32366)  
  Provides a root-cause analysis: after a stream error, the Desktop UI never recovers, displays no error, and leaves the session unusable until restart.

- [#40006 — opencode-go package usage anomaly](https://github.com/anomalyco/opencode/issues/40006)  
  Users on Windows see many `opencode-go` models in the picker, but invocation fails — including a `403 This model is not available in your region.` This raises model availability and visibility concerns.

- [#29950 — Skill enumeration is non-deterministic when the same skill is reachable through multiple discovery roots](https://github.com/anomalyco/opencode/issues/29950)  
  A subtle correctness issue for Claude Code users: symlinked skill directories under `~/.claude/skills/` and `~/.agents/skills/` produce non-deterministic skill resolution.

---

## Key PR Progress

- [#40487 — fix(core): omit legacy provider aliases](https://github.com/anomalyco/opencode/pull/40487)  
  Removes Azure Cognitive Services and standalone Vertex Anthropic from the models.dev catalog. Adds regression tests to ensure canonical providers are preferred.

- [#40477 — fix(app): fall back to directory listing in project picker](https://github.com/anomalyco/opencode/pull/40477)  
  Fixes the web app’s “Open Project” dialog becoming completely blocked for first-time users or when starting from `$HOME`/root.

- [#40432 — fix(session): order messages across ID rollover](https://github.com/anomalyco/opencode/pull/40432)  
  Orders session messages by persisted creation time instead of relying on message ID alone, preventing ordering bugs around the 48-bit timestamp rollover boundary.

- [#40472 — fix(opencode): preserve user request for skill slash commands](https://github.com/anomalyco/opencode/pull/40472)  
  Fixes skill slash commands losing the user’s original request text. Closes #40463 and several related prior reports.

- [#40458 — fix(opencode): define OPENCODE_VERSION in the node server build](https://github.com/anomalyco/opencode/pull/40458)  
  Adds the missing `OPENCODE_VERSION` compile-time define in the Node server build, fixing installation-version reporting across multiple related issues.

- [#40437 — fix(core): fail steps with empty provider output after bounded retries](https://github.com/anomalyco/opencode/pull/40437)  
  Directly targets the blank-response failure mode: a provider that streams a successful step finish with no visible text and no tool call will now fail after bounded retries instead of succeeding with an empty result.

- [#40438 — fix(acp): surface subagent activity](https://github.com/anomalyco/opencode/pull/40438)  
  ACP previously discarded events whose session ID differed from the current session. This restores missing subagent transcripts.

- [#40450 — fix(opencode): include cache writes in ACP usage](https://github.com/anomalyco/opencode/pull/40450)  
  Aligns context-token accounting across ACP service paths by including cache-write tokens, with regression coverage.

- [#16513 — feat(console): add go usage endpoint](https://github.com/anomalyco/opencode/pull/16513)  
  Adds a `/zen/go/v1/usage` endpoint to expose OpenCode Go usage data. A long-running feature request that would improve usage transparency.

- [#40371 — feat(vcs): publish branch updates](https://github.com/anomalyco/opencode/pull/40371)  
  Watches Git `HEAD` and Mercurial branch changes and publishes `vcs.branch` updates from existing filesystem events, enabling better branch-aware automation.

---

## Feature Request Trends

- **Native Responses API support for DeepSeek models**  
  #39829 shows strong demand for DeepSeek V4 Flash through the OpenAI Responses API, especially on OpenCode Go.

- **Usage transparency and quota management**  
  The OpenCode Go usage endpoint PR (#16513), plus free-tier confusion (#40078) and regional availability issues (#40006), point to a need for clearer usage, limits, and model-access reporting.

- **Model catalog and provider hygiene**  
  Users want OpenCode to show only configured and actually available models. This appears in LM Studio issues (#4232) and Zen model-list mismatches (#38089), with cleanups like #40487 helping on the catalog side.

- **Graceful handling of stream failures**  
  Multiple requests ask for visible errors and state recovery instead of “thinking…” forever (#32366, #40483, #40470).

- **Deterministic skill discovery and invocation**  
  Issues around duplicate skill roots (#29950) and preserving user requests for skill slash commands (#40472) highlight a broader need for more predictable skill behavior.

---

## Developer Pain Points

- **DeepSeek V4 Flash / OpenCode Go is the dominant reliability issue.**  
  Reports range from TCP connection drops (#40465) and HTTP 500s (#40480) to blank responses and “thinking” loops (#40471, #40460, #40483).

- **Silent, unrecoverable UI states.**  
  Users are frequently forced to restart OpenCode when stream errors leave the session stuck on “thinking” with no error surfaced.

- **Provider/model mismatch confusion.**  
  Showing models that are not configured, not available in the region, or not listed in the actual plan creates trust issues in both custom providers and OpenCode Go.

- **Empty responses after reasoning.**  
  The interleaved `reasoning_content` in DeepSeek-style streaming appears to be dropped in some tool-call paths, causing silent session exits (#35689).

- **Windows-specific desktop/TUI breakage.**  
  Blank TUI screens and hidden migration errors (#40470) plus RTL layout bugs show Desktop still needs hardening on Windows.

- **Skill/plugin ecosystem edge cases.**  
  Non-deterministic skill enumeration (#29950), loss of user request text (#40472), and empty LSP results for Rust workspaces (#40413) are slowing down users relying on advanced skill and tooling workflows.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-08-04

## Today's Highlights

No new release shipped in the last 24 hours, but the Harness v2 architecture moved fast with new in-memory, SQLite-lane, and JSON-backend PRs, plus a stack of external contributor fixes. Compaction failures on Copilot Enterprise remain the loudest issue thread — the root cause (summarization dropping the resolved baseUrl) was pinned in [#7579](https://github.com/earendil-works/pi/issues/7579) — and two separate ~5-minute session freezes drew sharp criticism. Community PRs also landed for OAuth error-message hygiene, Anthropic schema fidelity, and a fix for processes parking forever on silent stdin pipes.

## Hot Issues

1. **[#6768 — [bug] Compaction using Copilot Enterprise not possible](https://github.com/earendil-works/pi/issues/6768)** — 19 comments, 18 👍
   The top issue this cycle. Compaction fails with `421 Misdirected Request` on Copilot Enterprise seats for both OpenAI and Anthropic paths. Follow-up [#7579](https://github.com/earendil-works/pi/issues/7579) found the root cause: summarization drops the resolved baseUrl that normal turns receive via `ModelRuntime.prepareRequest()`.

2. **[#7161 — anthropic-messages never sends x-client-request-id](https://github.com/earendil-works/pi/issues/7161)** — 10 comments
   The Anthropic path omits `x-client-request-id`, which all OpenAI paths send, breaking session-affinity routing in gateways that round-robin between accounts. Proxy authors are directly impacted.

3. **[#7547 — [Windows] How do you use Pi on Windows?](https://github.com/earendil-works/pi/issues/7547)** — 8 comments
   Maintainer @petrroll opened a sink-thread to survey Windows usage modes. Too many run methods exist, making it unclear where to focus bug fixes and docs — a signal that Windows support is being prioritized.

4. **[#7153 — /scoped-models appears to do nothing for ~5 minutes](https://github.com/earendil-works/pi/issues/7153)** — 7 comments, 4 👍
   The model selector blocks the REPL while synchronously awaiting a stalled model-catalog refresh, with no loading state or warning. Community wants async rendering with progress feedback.

5. **[#7553 — Configurable thinking level/model for compaction](https://github.com/earendil-works/pi/issues/7553)** — 6 comments
   Auto-compaction reuses the session's current thinking level, making summarization on reasoning models expensive and inseparable from normal turns. Already addressed by PR [#7602](https://github.com/earendil-works/pi/pull/7602).

6. **[#7128 — New default PI_* guideline over-encourages unnecessary bash calls](https://github.com/earendil-works/pi/issues/7128)** — 6 comments
   A system-prompt guideline telling the agent to "Inspect PI_* environment variables" biases it toward needless env-inspection bash commands, adding latency and token cost. Closed as no-action, but sparked discussion on prompt design.

7. **[#7508 — Copilot/Codex OAuth refresh has no request timeout](https://github.com/earendil-works/pi/issues/7508)** — 5 comments
   A stalled mid-session token refresh holds the serialized cross-process credential-store lock and freezes the session for ~5 minutes — a critical reliability issue on flaky networks and corporate proxies.

8. **[#7465 — Add payload size to iTerm2 inline images](https://github.com/earendil-works/pi/issues/7465)** — 5 comments
   `encodeITerm2()` omits the `size` parameter, so stable `@xterm/addon-image@0.9.0` silently rejects Pi's images. Fix PR [#7612](https://github.com/earendil-works/pi/pull/7612) is already open.

9. **[#7594 — node:sqlite missing in release binary causing plugin breakage](https://github.com/earendil-works/pi/issues/7594)** — 4 comments
   Extensions like `pi-total-recall` fail to load with `No such built-in module: node:sqlite` in the release build — a tooling-chain compatibility issue affecting the extension ecosystem.

10. **[#7395 — JSON mode serializes cumulative assistant state on every delta](https://github.com/earendil-works/pi/issues/7395)** — 3 comments
    In `--mode json`, each `message_update` embeds the entire accumulated assistant message, causing quadratic payload growth and slow stdout drains on long generations.

Also notable: [#7560](https://github.com/earendil-works/pi/issues/7560) Grok 4.5 missing from Copilot Business model list; [#7603](https://github.com/earendil-works/pi/issues/7603) `unknown role: developer` error on Deepseek.

## Key PR Progress

1. **[#7602 — feat(coding-agent): configurable summarization models](https://github.com/earendil-works/pi/pull/7602)** (open)
   Adds configurable models and thinking levels for compaction and branch summaries, with provider-error handling for context-window limits. Closes [#7553](https://github.com/earendil-works/pi/issues/7553).

2. **[#7611 — DRAFT: harness v2/json backend](https://github.com/earendil-works/pi/pull/7611)** (draft)
   @davidbrai opens the JSON backend for the v2 harness — opened for convenience, not yet ready for review.

3. **[#7503 — feat(agent): implement harness v2 for in-memory storage](https://github.com/earendil-works/pi/pull/7503)** (closed)
   Foundational Harness v2 session work: backend-neutral `SessionStorage`/`SessionRepo`/`Session` APIs plus the first in-memory backend supporting entries and lanes.

4. **[#7591 — refactor: update sqlite for lanes](https://github.com/earendil-works/pi/pull/7591)** (closed)
   Lane-aware SQLite session storage for v2: records, lane moves, global facts, and branch-cache support split across `branch_entries`/`branch_tips` tables.

5. **[#7610 — feat(ai): add LLM Gateway and LLM Gateway DevPass providers](https://github.com/earendil-works/pi/pull/7610)** (closed)
   Adds the LLM Gateway OpenRouter-style router as built-in `openai-completions` providers, contributed on behalf of LLM Gateway. Replaces auto-closed [#7480](https://github.com/earendil-works/pi/pull/7480).

6. **[#7605 — fix(ai): keep response bodies out of OAuth error messages](https://github.com/earendil-works/pi/pull/7605)** (closed)
   Token-endpoint response bodies — which may contain access/refresh tokens or echoed secrets — were leaking into logs, telemetry, and user-facing dialogs. Now redacted.

7. **[#7604 — fix(ai): keep $defs in non-strict Anthropic tool schemas](https://github.com/earendil-works/pi/pull/7604)** (closed)
   The non-strict schema projection rebuilt tools from only `type`/`properties`/`required`, dropping `$defs` and sending Anthropic dangling `$ref` schemas for zod-derived tools.

8. **[#7606 — fix(ai): let explicit chatgpt-account-id header override JWT extraction for Codex](https://github.com/earendil-works/pi/pull/7606)** (closed)
   Fixes Codex requests for accounts whose tokens omit the `chatgpt_account_id` claim by preferring the account id stored during the OAuth login exchange.

9. **[#7599 — rpc over sockets](https://github.com/earendil-works/pi/pull/7599)** (closed)
   First contribution adding `--listen` for RPC over Unix socket/TCP and a `connectAddress` option to `RpcClient` — extends Pi's RPC capability beyond stdio.

10. **[#7592 — fix(coding-agent): stop parking forever on a silent open stdin pipe](https://github.com/earendil-works/pi/pull/7592)** (closed)
    Fixes a "2078 family" bug where background invocations inheriting an open-but-silent pipe park the whole process forever waiting for EOF on stdin.

Also active: [#7612](https://github.com/earendil-works/pi/pull/7612) iTerm2 `size` payload for xterm.js, [#7597](https://github.com/earendil-works/pi/pull/7597) scrollable extension-selector diffs in fullscreen, [#7568](https://github.com/earendil-works/pi/pull/7568) generic sampling params for llama.cpp/vLLM, [#6216](https://github.com/earendil-works/pi/pull/6216) Amazon Bedrock Mantle OpenAI Responses provider, and further Harness v2 refactors ([#7558](https://github.com/earendil-works/pi/pull/7558), [#7587](https://github.com/earendil-works/pi/pull/7587)).

## Feature Request Trends

- **Compaction/summarization control** — Configurable thinking level and model for compaction ([#7553](https://github.com/earendil-works/pi/issues/7553)) is the clear front-runner and already spawned PR [#7602](https://github.com/earendil-works/pi/pull/7602).
- **RPC expansion** — Developers want provider auth flows exposed over the typed RPC protocol ([#7590](https://github.com/earendil-works/pi/issues/7590)) and socket-based RPC transport ([#7599](https://github.com/earendil-works/pi/pull/7599)).
- **Context window selection** — Users still want a first-class context-window size option mirroring Copilot CLI ([#5064](https://github.com/earendil-works/pi/issues/5064)).
- **TUI ergonomics** — Virtualized chat rendering ([#7573](https://github.com/earendil-works/pi/issues/7573)), fullscreen keybinding fixes ([#7574](https://github.com/earendil-works/pi/issues/7574)), and scrollable diffs ([#7597](https://github.com/earendil-works/pi/pull/7597)) show a push for long-session and fullscreen usability.
- **Model catalog freshness & diagnostics** — Stale snapshots ([#7363](https://github.com/earendil-works/pi/issues/7363)) and missing models ([#7560](https://github.com/earendil-works/pi/issues/7560)) drive requests for live model lists; `version` should report the running runtime (bun/node/deno) for better triage ([#7244](https://github.com/earendil-works/pi/issues/7244)).
- **Generic inference-engine sampling params** — A generic passthrough in `models.json` for llama.cpp/vLLM params like `dry_multiplier` and `xtc_probability` is on the way via [#7568](https://github.com/earendil-works/pi/pull/7568).

## Developer Pain Points

- **Compaction unreliability on Copilot Enterprise** — The 421 Misdirected Request failures ([#6768](https://github.com/earendil-works/pi/issues/6768), [#7579](https://github.com/earendil-works/pi/issues/7579)) are the top frustration; normal turns work, but summarization drops the resolved baseUrl.
- **Multi-minute stalls with no feedback** — Two separate ~5-minute freezes surfaced this cycle: OAuth refresh holding the credential-store lock ([#7508](https://github.com/earendil-works/pi/issues/7508)) and `/scoped-models` awaiting a stalled catalog refresh ([#7153](https://github.com/earendil-works/pi/issues/7153)). Both lack timeouts and user-visible progress.
- **TUI rendering bugs** — Crashes on wide custom-dialog lines ([#7528](https://github.com/earendil-works/pi/issues/7528)), a progress indicator that never clears ([#7565](https://github.com/earendil-works/pi/issues/7565)), and duplicate `[compaction]` blocks ([#7608](https://github.com/earendil-works/pi/issues/7608)) erode trust in the terminal UI.
- **Config merge surprises** — Project-level `retry.provider` silently replaces global settings instead of deep-merging ([#7572](https://github.com/earendil-works/pi/issues/7572)).
- **Compatibility friction** — Node 20 crashes on `undici`'s CacheStorage ([#7601](https://github.com/earendil-works/pi/issues/7601)), missing `node:sqlite` in release binaries ([#7594](https://github.com/earendil-works/pi/issues/7594)), and xterm.js rejecting iTerm2 images without `size` ([#7465](https://github.com/earendil-works/pi/issues/7465)).
- **Provider-specific breakages** — Deepseek's `unknown role: developer` ([#7603](https://github.com/earendil-works/pi/issues/7603)), Grok 4.5 missing from Copilot Business ([#7560](https://github.com/earendil-works/pi/issues/7560)), and stale `opencode-go` model snapshots ([#7363](https://github.com/earendil-works/pi/issues/7363)) keep provider maintenance top-of-mind.
- **Process/resource leaks** — A long-running `pi-coding-agent` leaked 182 X11 connections over 8 days, exhausting the X server client table ([#7600](https://github.com/earendil-works/pi/issues/7600)).

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-08-04

## Today's Highlights

v0.21.5 shipped with an opt-in macOS migration bridge from the Electron desktop app to the new Tauri shell, plus more detailed tool-call outcome tracking. Meanwhile, community discussion is concentrated on cancellation/abort correctness, daemon resource governance, and reliable session persistence. PR activity focuses on review-pipeline cost control, ACP hardening, and the omni media experiment.

## Releases

- **v0.21.5** — Includes an opt-in one-time update bridge for macOS users migrating from the Electron desktop app to the new Tauri shell ([#8392](https://github.com/QwenLM/qwen-code/pull/8392)). Also introduces detailed execution-specific outcome tracking for tool calls.
- **v0.21.4-nightly.20260804.d6f55a1c9** — Ships the desktop Electron→Tauri update bridge ([#8392](https://github.com/QwenLM/qwen-code/pull/8392)) and a web-shell table dialog fix.

## Hot Issues

- [#8102 — proposal(core): deterministic tool-execution boundaries for a trustworthy agent runtime](https://github.com/QwenLM/qwen-code/issues/8102)  
  A highly-discussed design proposal (17 comments) to keep the LLM outside the trust boundary and constrain/authorize/observe tool actions deterministically. Signals strong community interest in auditable agent behavior.

- [#8519 — qwen code在tmux中闪屏严重](https://github.com/QwenLM/qwen-code/issues/8519)  
  Severe screen flicker inside tmux, reported roughly every second. 11 comments and a closed status; terminal UX bugs like this generate high-urgency feedback from Linux users.

- [#8051 — tracking(serve): Bound multi-workspace daemon resource usage](https://github.com/QwenLM/qwen-code/issues/8051)  
  Notes that count-only workspace/session limits do not bound bytes held by request bodies, WebSocket assembly, or other memory. 9 comments, reflecting production deployment concerns.

- [#8136 — Provider warning sanitizer truncates messages containing a port, and leaks a password containing `@`](https://github.com/QwenLM/qwen-code/issues/8136)  
  A security-relevant sanitizer bug: malformed URL parsing can truncate warnings or leak credentials into `/status` payloads. 6 comments.

- [#8356 — after APIUserAbortError, subsequent turns are not written to the local session transcript](https://github.com/QwenLM/qwen-code/issues/8356)  
  Cancelling a request via the OpenAI-compatible path breaks transcript persistence for later turns. 5 comments; important for session reliability on relay/gateway setups.

- [#8493 — bug(core): cancelled file tools can still mutate files](https://github.com/QwenLM/qwen-code/issues/8493)  
  `write_file` and `edit` can proceed to filesystem writes even after cancellation because async preparation is not fully abort-aware. 5 comments; a safety-boundary issue.

- [#8533 — Foundational problem: Content[]/Part[] cannot safely encode per-provider reasoning-replay contracts](https://github.com/QwenLM/qwen-code/issues/8533)  
  Raises a core data-model limitation around provider-specific reasoning replay. 4 comments; likely to influence future provider abstraction design.

- [#8527 — Wrapped timeout errors drop the original error code → never auto-retried](https://github.com/QwenLM/qwen-code/issues/8527)  
  Timeout errors surface as generic “Request timeout after Ns” instead of hitting the transport-retry path. 3 comments; affects OpenAI-compatible streaming with thinking enabled.

- [#8182 — bug(serve): daemon authorises each ACP child 50% of host memory, never divided by child count](https://github.com/QwenLM/qwen-code/issues/8182)  
  `getAcpMemoryArgs()` computes one V8 old-space ceiling per child based on host memory, so multiple ACP children can collectively overcommit. 3 comments; a serious daemon memory bug.

- [#8504 — Provider update prompt repeats when custom models are preserved](https://github.com/QwenLM/qwen-code/issues/8504)  
  The “Built-in Provider Update” prompt reappears after a successful update if user-added custom models exist. 3 comments; an annoying configuration-loop bug.

## Key PR Progress

- [#8392 — feat(desktop): bridge Electron users to Tauri updates](https://github.com/QwenLM/qwen-code/pull/8392)  
  Adds the opt-in one-time migration bridge for macOS Electron desktop users to move to the Tauri shell. Already included in v0.21.5 and the latest nightly.

- [#8465 — feat(core): checkpoint long-running Goal evidence](https://github.com/QwenLM/qwen-code/pull/8465)  
  Introduces durable evidence checkpoints for long-running Goals, compressing cumulative evidence with a tool-free verifier before the evidence catalog limit is hit.

- [#8469 — feat(acp): Protect against repeated tool execution failures](https://github.com/QwenLM/qwen-code/pull/8469)  
  Adds a conservative, prompt-local guard that counts terminal typed-tool execution failures on the interactive ACP session, following the outcome-tracking contract from #8176/#8180.

- [#8464 — perf(core): clear tool results to a low watermark to preserve prompt cache](https://github.com/QwenLM/qwen-code/pull/8464)  
  Instead of stopping compaction right below the threshold, the client clears oldest tool results down to half the threshold, improving prompt-cache reuse.

- [#8442 — fix: add onCompromised handlers to proper-lockfile calls to prevent daemon crash](https://github.com/QwenLM/qwen-code/pull/8442)  
  Prevents daemon crashes when locks are lost by adding warning-only `onCompromised` handlers to four `proper-lockfile` call sites.

- [#8512 — feat(omni): S2 input expansion — image/audio/URL sources and token-dimension transport guard](https://github.com/QwenLM/qwen-code/pull/8512)  
  Extends omni S1 video-only uploads to the full input surface, including images, audio, URL media, tool-result media, and token estimation/transport guards.

- [#8445 — fix(web-shell): allow session refresh with daemon auth](https://github.com/QwenLM/qwen-code/pull/8445)  
  Allows exact Web Shell document navigation to load the public HTML shell before bearer auth, while keeping session API subpaths protected.

- [#8401 — feat(review): add declarative repository-context manifest](https://github.com/QwenLM/qwen-code/pull/8401)  
  Makes the review pipeline repository-aware via a versioned `.qwen/review-context.json` contract without hard-coding repository knowledge.

- [#8436 — fix(triage): finalize the status comment on cancellation too](https://github.com/QwenLM/qwen-code/pull/8436)  
  Fixes triage automation so the status comment is finalized even when the workflow is cancelled, not only on success/failure.

- [#8474 — fix(ci): clean review worktrees after cancellation](https://github.com/QwenLM/qwen-code/pull/8474)  
  Adds always-run cleanup for review worktrees and stale Git worktree registrations on reused self-hosted runners, reducing CI pollution after cancelled reviews.

## Feature Request Trends

- **Trustworthy agent runtime** — Strong demand for deterministic tool-execution boundaries, cancellation-safe filesystem operations, and observable action outcomes ([#8102](https://github.com/QwenLM/qwen-code/issues/8102), [#8493](https://github.com/QwenLM/qwen-code/issues/8493), [#8491](https://github.com/QwenLM/qwen-code/issues/8491)).
- **Daemon/resource governance** — Requests for real memory/byte limits in `qwen serve`, per-child ACP memory accounting, and better workspace isolation ([#8051](https://github.com/QwenLM/qwen-code/issues/8051), [#8182](https://github.com/QwenLM/qwen-code/issues/8182), [#8494](https://github.com/QwenLM/qwen-code/issues/8494)).
- **ACP/IDE integration parity** — Expose reasoning-effort tiers, emit `usage_update` session updates for JetBrains, and advertise DingTalk `interactiveCards` through the daemon API ([#8514](https://github.com/QwenLM/qwen-code/issues/8514), [#8513](https://github.com/QwenLM/qwen-code/issues/8513), [#8515](https://github.com/QwenLM/qwen-code/issues/8515)).
- **Richer session persistence and terminal media** — Persist assistant inline images and manage inline Kitty image lifecycle across resize/scroll ([#8521](https://github.com/QwenLM/qwen-code/issues/8521), [#8520](https://github.com/QwenLM/qwen-code/issues/8520)).
- **CI/review automation** — Users want deeper automated CI-fix workflows and maintainable review infrastructure, including repository context manifests and robust cleanup ([#4362](https://github.com/QwenLM/qwen-code/issues/4362), [#8401](https://github.com/QwenLM/qwen-code/pull/8401), [#8474](https://github.com/QwenLM/qwen-code/pull/8474)).

## Developer Pain Points

- **Abort/cancellation leaves inconsistent state** — Transcripts stop being written after `APIUserAbortError` ([#8356](https://github.com/QwenLM/qwen-code/issues/8356)), cancelled file tools still mutate the filesystem ([#8493](https://github.com/QwenLM/qwen-code/issues/8493)), stream-json interrupts abort session controls ([#8495](https://github.com/QwenLM/qwen-code/issues/8495)), and signal-terminated shell commands can report success ([#8491](https://github.com/QwenLM/qwen-code/issues/8491)).
- **Daemon memory misconfiguration** — Each ACP child can be authorised for 50% of host memory regardless of child count ([#8182](https://github.com/QwenLM/qwen-code/issues/8182)); daemon-wide resource limits are too coarse ([#8051](https://github.com/QwenLM/qwen-code/issues/8051)).
- **Terminal/UI regressions** — tmux flicker ([#8519](https://github.com/QwenLM/qwen-code/issues/8519)), broken `Ctrl+Shift+C` copy ([#8317](https://github.com/QwenLM/qwen-code/issues/8317)), truncated long model names on mobile ([#8470](https://github.com/QwenLM/qwen-code/issues/8470)), and a Desktop copy-response button that does nothing ([#8538](https://github.com/QwenLM/qwen-code/issues/8538)).
- **Security-sensitive provider warning handling** — Sanitization can truncate port-containing messages or leak passwords with `@` into status payloads ([#8136](https://github.com/QwenLM/qwen-code/issues/8136)).
- **CI noise and release failures** — Mocked disk-full test errors look like real runner ENOSPC failures ([#8532](https://github.com/QwenLM/qwen-code/issues/8532)), and multiple release workflow failures were filed for v0.21.5 ([#8476](https://github.com/QwenLM/qwen-code/issues/8476), [#8483](https://github.com/QwenLM/qwen-code/issues/8483)).
- **Configuration prompt loops** — The built-in provider update prompt repeats when custom models are preserved ([#8504](https://github.com/QwenLM/qwen-code/issues/8504)).

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-08-04

*Data source: github.com/Hmbown/DeepSeek-TUI (issue/PR URLs point to Hmbown/CodeWhale)*

## Today's Highlights

No release shipped in the last 24 hours. The most active community discussions are a proposed `/stop` command for regaining control from autonomous model loops ([#4959](https://github.com/Hmbown/CodeWhale/issues/4959)) and an intermittent Anthropic-compatible API error ([#4978](https://github.com/Hmbown/CodeWhale/issues/4978)). On the code side, the v0.9.4 release train ([#5135](https://github.com/Hmbown/CodeWhale/pull/5135)) is 77 commits ahead of `main`, and the runtime API is being significantly expanded with goal, memory, MCP, skill, and verifier endpoints.

## Releases

None in the last 24 hours. The v0.9.4 release train is still open and not yet tagged.

## Hot Issues

Only five issues were updated in the last 24 hours; all are included.

- **#4959 — [enhancement] proposed `stop` command**  
  [Issue #4959](https://github.com/Hmbown/CodeWhale/issues/4959) · 7 comments  
  Wants a `/stop` command plus runtime STOP-word interception so the model cannot ignore user halt attempts during YOLO mode or deep autonomous workflows. The comment count suggests strong interest in an emergency kill switch.

- **#4978 — [bug] Anthropic API error: `'type' must be in ["enabled", "disabled", "auto"]`**  
  [Issue #4978](https://github.com/Hmbown/CodeWhale/issues/4978) · 6 comments  
  Using `providers.openmodel` with an Anthropic-compatible API intermittently returns HTTP 400 `invalid_request_error`. Retries sometimes succeed, but the failure is not deterministic, pointing to an unstable request-shaping path.

- **#4955 — [enhancement] zero-sandbox / `--no-sandbox` mode for local dev**  
  [Issue #4955](https://github.com/Hmbown/CodeWhale/issues/4955) · 4 comments · 👍 1  
  Requests the ability to disable both sandbox layers entirely. The kernel-level Seatbelt sandbox is breaking basic shell commands daily, and the author reports exhausting workarounds.

- **#5209 — [bug] `File` edit silently accepts wrong parameter names and reports fake success**  
  [Issue #5209](https://github.com/Hmbown/CodeWhale/issues/5209) · 3 comments  
  `action=edit` accepts invalid parameters such as `new_str` instead of `replace`, returns a success result, and leaves the file unchanged. This forces 3–5x re-edits and destroys trust in tool feedback.

- **#5239 — [bug, question] 1M context model triggers compression at 128K**  
  [Issue #5239](https://github.com/Hmbown/CodeWhale/issues/5239) · 1 comment  
  The model supports 1M context, but context compression is triggered at 128K. The user asks whether this threshold can be configured or aligned with the model’s actual context window.

## Key PR Progress

36 PRs were updated in the last 24 hours. Key selections:

- **#5135 — release: Codewhale v0.9.4 release train** · OPEN  
  [PR #5135](https://github.com/Hmbown/CodeWhale/pull/5135)  
  The integration train for v0.9.4, 77 commits ahead of `main` and superseding #5044. Contains the full 2026-08-01 source candidate.

- **#5225 — feat(acp): expose file/search/git/patch/shell tools over session/prompt** · OPEN  
  [PR #5225](https://github.com/Hmbown/CodeWhale/pull/5225)  
  Previously the ACP server only streamed model text; now it can execute tool calls. This enables editors like Zed and third-party ACP bridges to drive real code-editing workflows.

- **#5133 — feat(runtime-api): expose persistent goal-loop state and completion controls** · OPEN  
  [PR #5133](https://github.com/Hmbown/CodeWhale/pull/5133)  
  Adds goal endpoints under `/v1/threads/{id}/goal`, letting managed clients read active-goal state and drive lifecycle transitions through the runtime boundary.

- **#5131 — feat: Runtime API memory endpoints** · OPEN  
  [PR #5131](https://github.com/Hmbown/CodeWhale/pull/5131)  
  Adds `/v1/memory` routes for bounded inspection of active memory, provenance, and lifecycle controls.

- **#5130 — feat(runtime-api): bounded MCP server configuration and lifecycle management** · OPEN  
  [PR #5130](https://github.com/Hmbown/CodeWhale/pull/5130)  
  Enables creating, updating, and removing MCP servers through the runtime API instead of requiring direct TOML/JSON edits.

- **#5129 — feat(runtime-api): add skill lifecycle endpoints** · OPEN  
  [PR #5129](https://github.com/Hmbown/CodeWhale/pull/5129)  
  Adds HTTP routes for skill install, update, uninstall, trust, and audit, covering the full lifecycle previously only available in the TUI.

- **#5238 — feat(mcp): MCP Registry discovery with Registry-first tool selection** · OPEN  
  [PR #5238](https://github.com/Hmbown/CodeWhale/pull/5238)  
  Introduces `registry_sync` and a registry-first policy: consult public MCP registries for zero-environment stdio servers before falling back to `exec_shell` or custom implementations.

- **#5240 — feat(tui/shell): surface real wait elapsed time in tool content** · OPEN  
  [PR #5240](https://github.com/Hmbown/CodeWhale/pull/5240)  
  The Bash `wait` result now exposes `duration_ms` to the model instead of hiding it in metadata, reducing busy-polling and misjudged long stalls.

- **#5234 — fix(tui): keep alternate scroll off while mouse capture is active** · OPEN  
  [PR #5234](https://github.com/Hmbown/CodeWhale/pull/5234)  
  Fixes mouse-wheel/trackpad scroll toggling the composer history instead of moving the transcript, caused by `recover_terminal_modes()` arming `EnableMouseCapture` and xterm alternate-scroll mode together.

- **#5192 — fix(tui): pin ratatui to 0.30.0** · OPEN  
  [PR #5192](https://github.com/Hmbown/CodeWhale/pull/5192)  
  Prevents a blocking cursor position report query racing the TUI event loop on startup, caused by `ratatui-core` 0.1.1+.

## Feature Request Trends

- **Reliable emergency stop**: The `/stop` command plus STOP-word interception ([#4959](https://github.com/Hmbown/CodeWhale/issues/4959)) is the clearest feature demand for autonomous-workflow safety.
- **Local dev liberty**: Zero-sandbox / `--no-sandbox` mode ([#4955](https://github.com/Hmbown/CodeWhale/issues/4955)) reflects users who want full control on their own machines.
- **Context-window alignment**: Users want the compression threshold to match the model’s advertised 1M context ([#5239](https://github.com/Hmbown/CodeWhale/issues/5239)).
- **MCP-first integration**: Although introduced via PRs rather than issues, the MCP Registry-first selection work ([#5238](https://github.com/Hmbown/CodeWhale/pull/5238)) signals a strong direction toward ecosystem discovery over ad-hoc shell execution.

## Developer Pain Points

- **Autonomy without a kill switch**: Models in YOLO/autonomous mode ignore `stop`/`+ stop` commands, making users feel locked out ([#4959](https://github.com/Hmbown/CodeWhale/issues/4959)).
- **Sandbox overreach**: The Seatbelt sandbox breaks routine shell commands, forcing users to request a no-sandbox escape hatch ([#4955](https://github.com/Hmbown/CodeWhale/issues/4955)).
- **API compatibility friction**: Anthropic-compatible providers produce intermittent 400 errors with no clear trigger or retry guarantee ([#4978](https://github.com/Hmbown/CodeWhale/issues/4978)).
- **Silent tool false-success**: The `File` edit tool accepts bad parameters and reports success while changing nothing, causing repeated manual re-edits ([#5209](https://github.com/Hmbown/CodeWhale/issues/5209)).
- **Context compression mismatch**: Compression firing at 128K despite a 1M context model creates unnecessary work and confusion ([#5239](https://github.com/Hmbown/CodeWhale/issues/5239)).

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/boom7sss/agents-radar).*