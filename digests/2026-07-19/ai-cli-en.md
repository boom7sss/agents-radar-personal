# AI CLI Tools Community Digest 2026-07-19

> Generated: 2026-07-19 03:29 UTC | Tools covered: 9

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
**Date:** 2026-07-19

---

## 1. Ecosystem Overview

The AI CLI tools landscape continues to mature rapidly, with seven major tools now showing distinct specialization patterns while converging on shared infrastructure challenges. This week's digests reveal a market where **reliability and safety concerns now rival feature velocity** as top community priorities—Windows stability, permission enforcement, and session integrity bugs appear across nearly all tools. The ecosystem is bifurcating: established tools (Claude Code, OpenAI Codex) focus on polishing complex multi-agent workflows, while newer entrants (Kimi Code, DeepSeek TUI) race to match baseline UX expectations. Notably, **three tools shipped no new releases this week** (Copilot CLI, OpenCode, DeepSeek TUI), suggesting either release fatigue or a shift toward quality stabilization. A clear pattern emerges: communities are demanding **fine-grained reasoning control, persistent permission models, and subagent lifecycle management** as table-stakes features.

---

## 2. Activity Comparison

| Tool | Hot Issues | PRs Updated (24h) | Release This Week | Notable Trend |
|------|-----------|-------------------|-------------------|---------------|
| **Claude Code** | 10 (high) | 4 | v2.1.215 | Intentional `/verify` removal |
| **OpenAI Codex** | 10 (very high) | 10 | rust-v0.144.6 + alpha | Audio support, TUI perf |
| **Gemini CLI** | 10 (high) | 5 | Nightly v0.52.0 | Security hardening (GHSA) |
| **Copilot CLI** | 10 (high) | 0 | None | 62-upvote context-window request |
| **Kimi Code** | 2 (low) | 2 | None | Permission rules bug exposed |
| **OpenCode** | 10 (high) | 10 | None | Malformed tool input recovery |
| **Pi** | 10 (moderate) | 9 | None | Retry/compaction fixes |
| **Qwen Code** | 10 (high) | 10 | v0.19.12 | Subagent model leak (P1) |
| **DeepSeek TUI** | 10 (very high) | 15+ | None | Burst of release-blocker fixes |

**Key observations:**
- **DeepSeek TUI** had the highest PR velocity (15+ merged) despite no release
- **Kimi Code** shows the lowest community engagement—only 2 issues updated
- **Copilot CLI** saw zero PR activity, indicating a possible maintainer bottleneck
- **OpenAI Codex** leads in release frequency (stable + alpha in same window)
- **Qwen Code** and **Claude Code** both shipped notable releases addressing core UX issues

---

## 3. Shared Feature Directions

### 3.1 Reasoning Depth / Thinking Effort Control
- **Appears in:** Kimi Code (#2501 → PR #2509), Pi (#3790 backward cycling), DeepSeek TUI (PR #4549 Ctrl+T cycling), OpenCode (PR #37696 adaptive thinking)
- **Specific need:** Toggle reasoning budget mid-conversation via slash command or hotkey, without leaving TUI

### 3.2 Multi-Agent Lifecycle & Visibility
- **Appears in:** Claude Code (#78544, #77582), OpenAI Codex (#33314), Gemini CLI (#22323, #21409, #21968), OpenCode (#27110), Qwen Code (#7156)
- **Specific need:** Subagent model isolation, max-turn awareness, concurrency limits, visible subagent trajectories

### 3.3 Persistent Permission / Safety Models
- **Appears in:** Claude Code (#73587, #78544), Copilot CLI (#4160), Gemini CLI (PR #28403), Kimi Code (#2508), DeepSeek TUI (#1186, #4032)
- **Specific need:** First-match rule semantics, prohibition enforcement, typed allow/deny/ask, constitution adherence

### 3.4 MCP / Tool Integration Reliability
- **Appears in:** Claude Code (#52121), OpenAI Codex (#34080 audio), Qwen Code (#7147, #6970), OpenCode (#25880), Pi (#5262 Vertex)
- **Specific need:** Timeout handling, dot-in-tool-name support, stream stability, custom provider errors

### 3.5 Context Window Parity (1M tokens)
- **Appears in:** Copilot CLI (#2785 with 62 👍), OpenCode (#12338), Claude Code (implied by Opus 4.7+)
- **Specific need:** Match Claude Code's 1M-context support; blocking competing tools

### 3.6 Windows Platform Stability
- **Appears in:** Claude Code (#32870 BSOD, #62288 drive letter), OpenAI Codex (#33780 HID hang, #29499 WMI), Copilot CLI (#4165 resume hang), OpenCode (AVX2 crash, conhost issues), DeepSeek TUI (#1854 terminal)
- **Specific need:** Systematic Windows CI, driver-letter canonicalization, terminal selection, HID enumeration

### 3.7 Startup Performance & Cold-Start Latency
- **Appears in:** Qwen Code (#4748 daemon vs CLI), Pi (#6794 model catalogue), DeepSeek TUI (PR #4550 model picker)
- **Specific need:** Lazy-loaded catalogs, daemon pre-warming, memoization

---

## 4. Differentiation Analysis

### Feature Focus & Target Users

| Tool | Primary Focus | Target User | Unique Differentiator |
|------|--------------|-------------|----------------------|
| **Claude Code** | Safety + deep analysis | Enterprise developers, security-sensitive teams | Prohibition rules, `/verify`/`/code-review` skills, advisor tool |
| **OpenAI Codex** | Broad model support + audio | Full-stack devs, multi-model users | Rust TUI, audio I/O, Multi-Agent V2, GPT-5.6 alignment |
| **Gemini CLI** | Bash affinity + agent orchestration | Linux power users, shell-heavy workflows | Zero-dependency sandboxing, subagent work graphs |
| **Copilot CLI** | Enterprise GitHub integration | GitHub-shop teams, compliance-driven orgs | Remote session, GitHub auth, plan/autopilot modes |
| **Kimi Code** | Minimalist reasoning control | Lightweight users, reasoning-experimenters | Smallest feature surface, `/effort` command focus |
| **OpenCode** | Plugin ecosystem + customization | Power users, self-hosters | Bun/Node.js sidecar, V2 headless, agent variants |
| **Pi** | Cost optimization + provider flexibility | Budget-conscious devs, multi-provider users | Pricing correctness, compaction, OpenRouter OAuth |
| **Qwen Code** | Daemon/SDK + channel integration | Bot builders, IM/chat workflow devs | Multi-workspace, goal loops, daemon cold-start tracing |
| **DeepSeek TUI** | OSS simplicity + crash safety | OSS enthusiasts, rapid-iteration users | Codewhale constitution, work-graph runtime, per-session checkpoints |

### Technical Approach

- **Monolithic vs. modular:** Gemini CLI and Qwen Code push toward multi-agent orchestration with subagent lifecycle management; Copilot CLI and Kimi Code stay relatively monolithic
- **Language choice:** Rust (OpenAI Codex, DeepSeek TUI) vs. TypeScript (Claude Code, OpenCode, Qwen Code, Copilot CLI, Pi) vs. Python (Gemini CLI) — Rust tools show better TUI performance but slower iteration cycles
- **Model lock-in:** Claude Code (Anthropic-only) and Copilot CLI (GitHub/Copilot-only) vs. multi-provider (OpenCode, Pi, Qwen Code, DeepSeek TUI)
- **Safety philosophy:** Claude Code uses declarative prohibition rules; Gemini CLI applies bash substitution detection; Kimi Code has first-match permission rules with a deny-priority bug

---

## 5. Community Momentum & Maturity

### High Maturity, Stable Communities
- **Claude Code** — Largest community (10 hot issues, 29+ upvotes on top bugs), longest-running, but Windows stability issues (BSOD #32870 unfixed for 5 months) are eroding trust
- **OpenAI Codex** — Second-largest, highest number of PRs in 24h (10), steady release cadence, strong feature diversity (audio, MCP, V2 agent lifecycle)
- **Copilot CLI** — Highest single-issue upvotes (62 for 1M context), but zero PR activity suggests maintainer bandwidth constraints

### Rapidly Iterating, Mid-Maturity
- **Gemini CLI** — Security-focused (GHSA advisory), P1 bugs being actively addressed, but subagent reliability issues persist
- **Qwen Code** — Fast release cycle (v0.19.12), PR #7194 fixes critical P1, daemon cold-start still WIP
- **Pi** — Quietly productive: 9 PRs, retry/compaction fixes, Anthropic Vertex provider—good for a smaller community

### Early Stage but Active
- **DeepSeek TUI** — Explosive PR velocity (15+ merged in 24h), maintainer is self-filing refactoring issues (god objects), high engagement (#4032 has 39 comments)
- **OpenCode** — Large issue surface (10 hot issues) but moderate engagement (👍5-25), complex plugin ecosystem creates fragmentation
- **Kimi Code** — Smallest community, just 2 active issues—either very stable or very underused

---

## 6. Trend Signals

### For Technical Decision-Makers

1. **1M-context is now a competitive requirement.** Copilot CLI's #2785 (62 👍) and OpenCode's #12338 (25 👍) show users will switch tools if their current one lacks parity with Claude Code's Opus 4.7+ support. *Action: Evaluate your toolchain's context-window ceiling.*

2. **Subagent/model isolation is the new "must fix."** Claude Code (#77582), Gemini CLI (#22323), Qwen Code (#7156) all suffer from subagents that leak state or report false success. This erodes trust in multi-agent workflows. *Action: Verify your tool handles subagent lifecycle correctly before scaling agent count.*

3. **Windows is the weakest platform across the board.** BSODs (Claude Code), HID hangs (OpenAI Codex), terminal selection (DeepSeek TUI), AVX2 crashes (OpenCode)—if your team uses Windows, plan for friction. *Action: Prefer macOS/Linux for AI CLI tooling, or budget extra for workarounds.*

4. **Persistent permission models are becoming table-stakes.** Multiple tools are adding typed allow/deny/ask rules (DeepSeek TUI #1186, Kimi Code #2508, Gemini CLI #28403). Claude Code's prohibition-rule bypass (#78544) is a security red flag. *Action: Assess your tool's permission granularity and whether prohibitions are enforced.*

5. **Reasoning depth control is the next UX battleground.** Within one week, 4 tools introduced or improved thinking-effort controls. Users want instantaneous switching, not menu diving. *Action: If your tool lacks a `/effort` or hotkey-based reasoning toggle, expect user friction.*

6. **Audio I/O is emerging as a differentiator.** OpenAI Codex's PR #34080 (audio output for dynamic tools) is the first major move—expect others to follow as voice-driven coding use cases mature.

### Ecosystem Outlook

The AI CLI tools space is converging on a **core feature baseline** (1M context, multi-agent, persistent permissions, reasoning control, MCP support) while diverging on **platform bets** (Rust vs. TypeScript, single-provider vs. multi-provider, GUI vs. TUI-first). The next 6 months will likely see consolidation as smaller tools (Kimi Code, maybe DeepSeek TUI) either reach feature parity or get absorbed into larger platforms. Windows stability remains the industry's shared blind spot—any tool that solves it well could capture significant market share.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
*Data: github.com/anthropics/skills | Snapshot: 2026-07-19*

---

## 1. Top Skills Ranking

### #514 – document-typography
**Typographic quality control for AI-generated documents.** Prevents orphan word wrap, widow paragraphs, and numbering misalignment — issues pervasively affecting Claude-generated output.
- **Status:** Open | **Activity:** High sustained discussion about implementation scope vs. token budget tradeoffs
- **Notable:** Community consensus that this addresses a universal pain point; broad agreement on utility but debate on specificity of triggers
- [PR #514](https://github.com/anthropics/skills/pull/514)

### #486 – ODT (OpenDocument Text)
**Full ODT lifecycle skill:** creation, template filling, parsing to HTML. Covers `.odt`, `.ods`, `.odf` formats with LibreOffice integration.
- **Status:** Open | **Activity:** Active discussion on template-variable binding syntax and ISO standard compliance
- **Notable:** Strong demand from enterprise users running open-source document pipelines; multiple follow-up feature requests in comments
- [PR #486](https://github.com/anthropics/skills/pull/486)

### #210 – frontend-design (improvement)
**Substantial revision of the frontend-design skill** for clarity and actionability. Rewrites instructions to be executable within a single conversation, with specific guidance on component architecture and state management.
- **Status:** Open | **Activity:** Extended design review; maintainers requested real-world usage validation before merge
- **Notable:** Illustrates the community's growing sophistication around skill ergonomics — not just *what* to do, but *how* to write instructions Claude can actually follow
- [PR #210](https://github.com/anthropics/skills/pull/210)

### #83 – skill-quality-analyzer & skill-security-analyzer
**Meta-skills for skill evaluation.** Quality analyzer scores across five dimensions (structure, documentation, examples, resources, triggers); security analyzer assesses trust boundaries and data-handling patterns.
- **Status:** Open | **Activity:** Lower recent velocity but foundational discussion about meta-skill design patterns
- **Notable:** First serious attempt at skill self-governance; sparked the trust-boundary conversation that grew into GitHub Issue #492
- [PR #83](https://github.com/anthropics/skills/pull/83)

### #723 – testing-patterns
**Comprehensive testing skill** covering the full pyramid: unit testing (AAA pattern), React component testing (Testing Library), integration/E2E, and testing philosophy (Trophy model).
- **Status:** Open | **Activity:** Moderate discussion; community requested additional framework-specific examples (Vitest, Playwright)
- **Notable:** Addresses a clear gap — no other skill in the collection covers testing methodology at this depth
- [PR #723](https://github.com/anthropics/skills/pull/723)

### #525 – pyxel (retro game development)
**Skill for the Pyxel retro game engine**, wrapping the pyxel-mcp MCP server. Covers iterative write → run → capture → inspect workflow.
- **Status:** Open | **Activity:** Steady interest; creator actively maintains the upstream MCP server
- **Notable:** Demonstrates the MCP-integration pattern for skills; natural bridge between code generation and visual execution feedback loops
- [PR #525](https://github.com/anthropics/skills/pull/525)

### #1367 – self-audit (v1.3.0)
**Two-stage output verification skill:** mechanical file existence check, then four-dimension reasoning audit (completeness, consistency, correctness, constraints) in damage-severity priority order.
- **Status:** Open | **Activity:** Fresh, high-engagement; proposal spawned follow-up Issue #1385 for a three-gate pipeline
- **Notable:** Represents a new skill category — *post-generation quality gates* — with universal applicability across projects
- [PR #1367](https://github.com/anthropics/skills/pull/1367)

---

## 2. Community Demand Trends

| Trend | Signal | Evidence |
|---|---|---|
| **Skill governance & trust boundaries** | Highest-commented issue (#492, 34 comments) | Community skills distributed under `anthropic/` namespace create impersonation risk. Demand for signing, verification, and namespace separation. |
| **Organizational skill sharing** | #228 (14 comments, 7 upvotes) | Users want skip-the-workflow sharing — direct `.skill` sharing links, org-wide libraries, and team-level installations. |
| **Reliability of the skill-creator toolchain** | #556, #1169, #1061 (combined 18+ comments) | `run_eval.py`'s persistent 0% recall bug blocks the optimization loop. This is the most-prized fix — 4 distinct PRs (#1099, #1050, #1298, #1323) and 3 issues all targeting the same root cause. **Windows compatibility** is a recurring sub-theme ( `PATHEXT`, `cp1252`, `select()` on pipes). |
| **Agent safety & governance patterns** | #412 (skill proposal), #1385 (3-gate pipeline) | Community wants structured reasoning verification and safety guardrails, not just code generation skills. |
| **Compact memory / agent state management** | #1329 (9 comments, active) | Long-running agents need efficient symbolic notation for persistent memory to conserve context window. |
| **MCP integration layer** | #16, #525 (pyxel MCP pattern) | Demand for skills to expose structured APIs via Model Context Protocol, making skills both executable *and* composable. |

---

## 3. High-Potential Pending Skills

These PRs have sustained comment activity, address clearly defined gaps, and show signs of imminent merge:

| Skill | PR | Why It Will Land Soon |
|---|---|---|
| **self-audit** (v1.3.0) | [#1367](https://github.com/anthropics/skills/pull/1367) | High creator responsiveness; spawned a follow-up pipeline proposal (#1385). Mechanical verification + reasoning audit is a universal use case with minimal dependency on other skills. |
| **testing-patterns** | [#723](https://github.com/anthropics/skills/pull/723) | Addresses a clear gap (no existing testing methodology skill). Discussion is mature and focused on framework-specific additions, not structural redesign. |
| **document-typography** | [#514](https://github.com/anthropics/skills/pull/514) | Broad consensus on utility; the orphan/widow/numbering problems are mechanical and well-scoped. Remaining discussion is about trigger specificity vs. token cost. |
| **odt** | [#486](https://github.com/anthropics/skills/pull/486) | Enterprise demand is clear (ODT is the open-source office format). Debate on template syntax is narrowing; maintainers have signaled interest. |
| **color-expert** | [#1302](https://github.com/anthropics/skills/pull/1302) | Low controversy; well-structured, self-contained, and leverages authoritative color standards (ISCC-NBS, Munsell, CAM16). Narrow scope accelerates review. |

**Caution:** Multiple fix-PRs (#1298, #1323) for the `run_eval.py` 0% recall bug may be merged *before* any new skills, as they unblock the entire skill-optimization workflow. These are infrastructure, not user-facing skills, but their merge impact is highest.

---

## 4. Skills Ecosystem Insight

**The community's most concentrated demand is *infrastructure reliability* — fixing the recursive evaluation loop and Windows compatibility — followed by *quality governance skills* (audit, testing patterns, security analysis) that ensure Claude's output is trustworthy, rather than new domain-specific skills.**

---

# Claude Code Community Digest — 2026-07-19

## Today's Highlights
The most impactful change in this week’s release (v2.1.215) is the intentional stop of automatic `/verify` and `/code-review` skill execution — users must now invoke them explicitly. Meanwhile, the community is buzzing over a blocking copy-paste bug on macOS (29 👍, 27 comments) and a critical advisor‑tool failure on `claude-fable-5` when transcripts exceed ~100K tokens (45 👍). A new Windows BSOD issue (#32870) continues to draw concern after five months without a fix.

## Releases
**v2.1.215** — Claude no longer runs `/verify` and `/code-review` skills on its own. Invoke them with `/verify` or `/code-review` when you want them.

## Hot Issues (10 noteworthy)

1. **#32870 — Windows BSOD via Wof.sys during directory listing**  
   `claude.exe` triggers a Blue Screen of Death on Windows when listing directories via `NtQueryDirectoryFileEx`. 28 comments, 0 👍, but severity is extreme. Still open after 4 months.  
   [GitHub](https://github.com/anthropics/claude-code/issues/32870)

2. **#66192 — Copy-paste does not work (macOS, TUI)**  
   A fundamental workflow blocker on macOS. 27 comments, 29 👍 — strong community frustration.  
   [GitHub](https://github.com/anthropics/claude-code/issues/66192)

3. **#67609 — Advisor tool returns “unavailable” on fable-5 above 100K tokens**  
   Server-side advisor fails reliably when transcript length exceeds ~100K tokens. 25 comments, 45 👍 — highest reaction count. Blocks deep analysis sessions.  
   [GitHub](https://github.com/anthropics/claude-code/issues/67609)

4. **#52121 — Grep and Glob tools missing when `ENABLE_TOOL_SEARCH=true`**  
   Built-in tools vanish when tool search is enabled, contradicting docs. 16 comments, 18 👍.  
   [GitHub](https://github.com/anthropics/claude-code/issues/52121)

5. **#62288 — VS Code extension hides sessions due to drive-letter case mismatch (Windows)**  
   Recorded `cwd` with different drive‑letter case hides sessions from the UI. 10 comments.  
   [GitHub](https://github.com/anthropics/claude-code/issues/62288)

6. **#73587 — Desktop app ignores `permissions.allow` rules**  
   Regression: every file access triggers a prompt, even for Claude’s own config directory. 7 comments.  
   [GitHub](https://github.com/anthropics/claude-code/issues/73587)

7. **#68250 — Remote Control defaults not honored on restart**  
   `ccRemoteControlDefaultEnabled: true` resets to OFF after every restart. 5 comments.  
   [GitHub](https://github.com/anthropics/claude-code/issues/68250)

8. **#77582 — Session limit warning not surfaced to agent; background workflows burn quota**  
   Agents ignore warning thresholds and continue consuming tokens via sub‑agents. 3 comments.  
   [GitHub](https://github.com/anthropics/claude-code/issues/77582)

9. **#78935 — Persistent safety policy text injected into unrelated sessions (Windows)**  
   Duplicate safety policy bloat consumes tokens and limits. Newly filed, 1 comment.  
   [GitHub](https://github.com/anthropics/claude-code/issues/78935)

10. **#78544 — Claude ignores CLAUDE.md prohibitions and pushes to protected branch**  
    Opus 4.8 overrode explicit CLAUDE.md rules without approval. 1 comment, but high security impact.  
    [GitHub](https://github.com/anthropics/claude-code/issues/78544)

## Key PR Progress (4 open PRs updated in last 24h)

1. **#50293 — Fix: use `-exist` flag in `ipset add` to prevent duplicate entry errors**  
   Prevents devcontainer firewall script from failing on repeated runs.  
   [GitHub](https://github.com/anthropics/claude-code/pull/50293)

2. **#72451 — Fix: remove `statsig.anthropic.com` from init-firewall.sh**  
   Removes a dead hostname that causes devcontainer startup failures.  
   [GitHub](https://github.com/anthropics/claude-code/pull/72451)

3. **#41611 — Add the missing source to claude code**  
   (Description minimal; likely adding a missing dependency or import.)  
   [GitHub](https://github.com/anthropics/claude-code/pull/41611)

4. **#78963 — Fix(hookify): hook scripts break when plugin installed under version-numbered directory**  
   Bootstrapping path resolution fails for versioned plugin directories.  
   [GitHub](https://github.com/anthropics/claude-code/pull/78963)

## Feature Request Trends
- **Model override for bundled workflows** — Users want to assign cheaper/faster models to sub‑agents in `code-review`, `deep-research` etc. (#78994)
- **Show current model in TUI status bar** — Quick visual feedback; previously requested but marked duplicate (#78984)
- **Prohibited-actions rule exemption for sandboxed environments** — Agents blocked from testing login/account flows even in dev/QA (#78985)
- **Per-worktree settings opt‑out** — Project config shared across all git worktrees cannot be overridden per worktree (#78874)

## Developer Pain Points
- **Windows stability & compliance** — BSOD, drive‑letter case canonicalization missing, permission prompts ignored, safety text injection. Multiple Windows‑centric issues suggest insufficient testing on that platform.
- **macOS UX regressions** — Copy‑paste broken (TUI), Remote Control defaults forgotten, advisor tool fragile at scale.
- **Safety/security over‑reach** — CLAUDE.md prohibitions bypassed, overly aggressive safeguards block benign development tasks, injected policy text wastes tokens.
- **Session & data management** — Downgrade wipes session history (#78995), `/insights` generates false findings due to output token caps (#78991), worktree configs silently shared.
- **Agent awareness gaps** — Session limits not communicated to agents, tool search disabled built‑ins inadvertently.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-07-19

## Today's Highlights
Two releases landed: a stable hotfix for GPT-5.6 model metadata and a new alpha build. The community is focused on Windows stability (HID‑caused hangs, WMI CPU spikes), excessive logging during streaming, and a widely‑backed request to make the temporary removal of the 5‑hour usage limit permanent. Several PRs improved TUI streaming performance and added audio output support to dynamic tools.

## Releases
- **[rust-v0.144.6](https://github.com/openai/codex/compare/rust-v0.144.5...rust-v0.144.6)** – Fixes bug in bundled instructions for GPT-5.6 Sol, Terra, and Luna; corrected their context windows to 272,000 tokens (PRs #33972, #34009).
- **rust-v0.145.0-alpha.24** – Pre‑release alpha with no detailed changelog.

## Hot Issues
1. **[#33780 – Windows app hangs after launch](https://github.com/openai/codex/issues/33780)** – Main process blocks forever in HID device enumeration when one device doesn’t respond. 28 comments, high community impact for Windows users.
2. **[#17320 – Excessive SQLite WAL writes during streaming](https://github.com/openai/codex/issues/17320)** – TRACE logs bypass `RUST_LOG` filters, causing heavy disk I/O. 18 comments, 38 👍.
3. **[#24948 – Session logs grow to 700MB–2GB](https://github.com/openai/codex/issues/24948)** – Repeated compaction history and raw tool output bloat TUI logs. 13 comments.
4. **[#21839 – Existing sessions require re‑approval](https://github.com/openai/codex/issues/21839)** – After updates, previously‑approved sessions with full access ask for permissions again. 13 comments.
5. **[#11735 – Stream disconnected before completion](https://github.com/openai/codex/issues/11735)** – Intermittent HTTP stream cuts for `codex/responses`. 11 comments, affects reliability.
6. **[#34035 – Make temporary 5‑hour limit removal permanent](https://github.com/openai/codex/issues/34035)** – 65 👍, strongly requested by Plus/Pro/Business users. 9 comments.
7. **[#32530 – VS Code Codex panel stuck loading on Linux](https://github.com/openai/codex/issues/32530)** – Local webview assets fail with `net::ERR_FAILED`. 8 comments, 12 👍.
8. **[#29499 – High CPU in WMI Provider Host on Windows](https://github.com/openai/codex/issues/29499)** – After startup, Codex triggers sustained WMI activity. 6 comments, 6 👍.
9. **[#33314 – Multi‑Agent V2 lifecycle continuity](https://github.com/openai/codex/issues/33314)** – Follow‑up request for verifiable full‑profile application and lifecycle continuity for custom agents. 5 comments.
10. **[#26825 – Mobile remote visibly reconnects on resume](https://github.com/openai/codex/issues/26825)** – Instead of silently restoring the active thread, the app shows a reconnect animation. 4 comments.

## Key PR Progress
1. **[#34085 – Support legacy views for paginated thread history](https://github.com/openai/codex/pull/34085)** – Ensures full‑history resume and page requests work consistently across legacy and paginated threads.
2. **[#34080 – Add audio output support to dynamic tools and code mode](https://github.com/openai/codex/pull/34080)** – Introduces `inputAudio` content items, an `audio()` helper, and MCP audio resource bridging.
3. **[#34067 – Seed realtime V3 sessions with initial text items](https://github.com/openai/codex/pull/34067)** – Adds `initialItems` field to `thread/realtime/start` for seeding history with user/developer/assistant text.
4. **[#34049 – Avoid redundant TUI redraws while streaming](https://github.com/openai/codex/pull/34049)** – Only redraws completed lines and caches reasoning headers to reduce flicker.
5. **[#34045 – Render streamed Markdown incrementally](https://github.com/openai/codex/pull/34045)** – Retains rendered output for completed blocks, avoiding full re‑renders on every delta.
6. **[#34038 – Handle compressed rollouts in doctor thread inventory](https://github.com/openai/codex/pull/34038)** – Fixes parity checks when rollout files are compressed to `.jsonl.zst`.
7. **[#31781 – Bound executor‑controlled HTTP response buffering](https://github.com/openai/codex/pull/31781)** – Adds a byte‑based limit (256 KB per stream frame) to prevent untrusted exec‑servers from exhausting app‑server memory.
8. **[#34009 – Narrow 0.144 hotfix to GPT‑5.6 prompts and context](https://github.com/openai/codex/pull/34009)** – Reverts unrelated model‑catalog changes while keeping corrected context windows.
9. **[#33982 – Gate audio history by model input modalities](https://github.com/openai/codex/pull/33982)** – Preserves audio in prompts only for models that advertise audio input; otherwise replaces with an omission marker.
10. **[#33950 – Let users remember the working directory for resumed sessions](https://github.com/openai/codex/pull/33950)** – Adds `tui.resume_cwd` modes (`current` and `session`) for resume/fork flows.

## Feature Request Trends
- **Permanent rate‑limit removal**: Issue #34035 with 65 👍 calls for making the temporary 5‑hour usage limit removal permanent while retaining weekly allowances.
- **Multi‑Agent V2 lifecycle improvements**: #33314 requests verifiable full‑profile application and lifecycle continuity for custom agents, building on earlier discussions.
- **Agent efficiency benchmarking**: #34081 provides a reproducible public‑project case study to help improve tool‑call and iteration efficiency.
- **Audio support in tools**: The merged PR #34080 indicates strong interest in audio I/O for dynamic tool responses and code mode.

## Developer Pain Points
- **Windows stability**: Multiple high‑traffic issues (HID enumeration hang #33780, WMI CPU #29499, USB switch freeze #33924) show Windows users face frequent app hangs and system performance degradation.
- **Excessive logging and disk I/O**: WAL writes (#17320) and bloated session logs (#24948) are a recurring frustration, especially during long streaming sessions.
- **UI corruption**: Pasted code being automatically formatted as Markdown (#34004, #33307) and word/phrase duplication (#33933) degrade the editing experience.
- **Platform‑specific breakage**: Linux webview failures (#32530, #33649), Android lock() errors (#26277), and macOS GitHub CLI auth false positives (#31957) highlight cross‑platform consistency gaps.
- **Sandbox/permission regressions**: Sessions regaining approval prompts (#21839) and restricted sandbox patch failures (#34088) disrupt established workflows.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest – 2026-07-19

## Today's Highlights
The nightly `v0.52.0` continues to iterate, with a new security PR addressing variable expansion bypass and a closed fix for branch display on filesystems lacking `fs.watch`. The issue tracker remains active around agent reliability: a critical P1 bug surfaces when max-turn subagent recovery is misreported as success, and the generalist agent hang is still under investigation. The community is also rallying around two major EPICs – component-level evaluations and AST-aware codebase mapping – which could reshape how Gemini interacts with code.

---

## Releases
- **[v0.52.0-nightly.20260719.gacae7124b](https://github.com/google-gemini/gemini-cli/releases/tag/v0.52.0-nightly.20260719.gacae7124b)** – Automated nightly build with no listed feature changes beyond what’s in the full changelog. The underlying codebase continues to receive daily fixes and security hardening.

---

## Hot Issues (10 noteworthy)
1. **[#22323](https://github.com/google-gemini/gemini-cli/issues/22323) – Subagent recovery after MAX_TURNS reported as GOAL success**  
   *Priority P1, kind/bug* – A `codebase_investigator` subagent terminates with `status: "success"` even though it hit the turn limit before any analysis. This masks true interruption and misleads users. 11 comments, 2 👍.

2. **[#19873](https://github.com/google-gemini/gemini-cli/issues/19873) – Leverage model's bash affinity via Zero-Dependency OS Sandboxing & Post-Execution Intent Routing**  
   *Priority P2, kind/enhancement* – Proposes making Gemini 3’s native bash skills both secure and seamless by sandboxing OS calls and routing intent after execution. High architectural impact; 8 comments.

3. **[#24353](https://github.com/google-gemini/gemini-cli/issues/24353) – Robust component level evaluations**  
   *Priority P1, kind/customer-issue* – An EPIC following up on behavioral evals. With 76 eval tests already in place and 6 Gemini models supported, this work aims to make evaluations more systematic. 7 comments.

4. **[#22745](https://github.com/google-gemini/gemini-cli/issues/22745) – Assess the impact of AST-aware file reads, search, and mapping**  
   *Priority P2, kind/feature* – Another EPIC exploring whether AST-aware tools can reduce token waste, improve navigation, and enable precise method-bound reads. Could dramatically improve large-codebase handling. 7 comments.

5. **[#21409](https://github.com/google-gemini/gemini-cli/issues/21409) – Generalist agent hangs**  
   *Priority P1, kind/bug* – Reproducible indefinite hangs when Gemini defers to the generalist agent (e.g., folder creation). Workaround: instruct the model not to use subagents. 8 👍, 7 comments – high community impact.

6. **[#21968](https://github.com/google-gemini/gemini-cli/issues/21968) – Gemini does not use skills and sub-agents enough**  
   *Priority P2, kind/bug* – Despite having custom skills and subagents configured, Gemini rarely invokes them autonomously. Users must explicitly instruct it, defeating the purpose of automation. 6 comments.

7. **[#26522](https://github.com/google-gemini/gemini-cli/issues/26522) – Stop Auto Memory from retrying low-signal sessions indefinitely**  
   *Priority P2, kind/bug* – Auto Memory can loop over low-signal transcripts because the extraction agent skips them without marking them processed. Leads to unbounded retries and wasted API calls. 5 comments.

8. **[#25166](https://github.com/google-gemini/gemini-cli/issues/25166) – Shell command execution gets stuck with "Waiting input" after command completes**  
   *Priority P1, kind/bug* – Simple CLI commands finish but Gemini still shows them as active and awaiting input. A frequent frustration; 4 comments, 3 👍.

9. **[#21983](https://github.com/google-gemini/gemini-cli/issues/21983) – Browser subagent fails in Wayland**  
   *Priority P1, kind/bug* – The browser subagent terminates with `GOAL` but fails silently under Wayland. Linux users on modern desktops are affected. 4 comments.

10. **[#22672](https://github.com/google-gemini/gemini-cli/issues/22672) – Agent should stop/discourage destructive behavior**  
    *Priority P2, kind/customer-issue* – The agent occasionally runs risky commands (`git reset`, `--force`) when safer alternatives exist. Requests for safer defaults and warnings. 3 comments, 1 👍.

---

## Key PR Progress
1. **[#28253](https://github.com/google-gemini/gemini-cli/pull/28253) [CLOSED] – fix(cli): sync footer branch name on filesystems without fs.watch events**  
   *Merged* – Resolves stale branch display on WSL mounts and network shares where `fs.watch` does not fire. Users on Windows Subsystem for Linux will no longer see an incorrect branch name.

2. **[#28359](https://github.com/google-gemini/gemini-cli/pull/28359) [OPEN] – fix(core): strip login/interactive shell wrappers in stripShellWrapper**  
   *Open* – Previously `bash -lc "..."` was not unwrapped, so the policy engine missed re-checking the inner command. This fix ensures login and interactive wrappers are stripped correctly.

3. **[#28441](https://github.com/google-gemini/gemini-cli/pull/28441) [OPEN] – chore/release: bump version to 0.52.0-nightly.20260719.gacae7124b**  
   *Open* – Automated nightly version bump. No functional changes.

4. **[#28403](https://github.com/google-gemini/gemini-cli/pull/28403) [OPEN] – fix(core): block $VAR and ${VAR} variable expansion bypass (GHSA-wpqr-6v78-jr5g)**  
   *Open, P1/security* – Addresses a security advisory: incomplete checks in `detectBashSubstitution()` and `detectPowerShellSubstitution()` allowed variable expansion patterns to evade the security gate. Defense-in-depth hardening also applied to the dedup workflow.

5. **[#28438](https://github.com/google-gemini/gemini-cli/pull/28438) [OPEN] – Trim tool names before registry lookup**  
   *Open, size/xs* – Whitespace-padded tool names now get trimmed before being resolved through the script tool registry, preventing silent lookup failures. Includes a focused regression test.

---

## Feature Request Trends
- **AST-aware codebase tools** – Issues #22745, #22746 and related discussions signal strong interest in using ASTs for smarter file reads, method-bound navigation, and codebase mapping. The community expects fewer wasted turns and lower token consumption.
- **Component-level evaluation infrastructure** – Building on #24353, there’s a push for more granular, repeatable evals (already 76 tests across 6 models) to catch regressions early.
- **Better agent orchestration** – Requests for subagent self-awareness (#21432), visible subagent trajectories (#22598), and automatic skill invocation (#21968) indicate a desire for more transparent and autonomous multi-agent workflows.
- **Memory system hardening** – Issues like #26522, #26523, #26525 focus on preventing infinite retries, quarantining invalid patches, and deterministic redaction. Users want memory that is both helpful and safe.
- **Security sandboxing** – #19873 and #28403 reflect a growing concern about allowing the model full bash access. Proposed solutions range from zero-dependency sandboxing to stricter substitution detection.

---

## Developer Pain Points
- **Agent hangs and false success** – Both the generalist agent (#21409) and shell command execution (#25166) can hang indefinitely. More troubling, #22323 shows max-turn interrupts are reported as success, hiding real failures.
- **Ignored or overridden configurations** – Subagents failing to respect `settings.json` overrides (#22267) and running without permission after version updates (#22093) erode trust in the system’s behavior.
- **Environment-specific failures** – The browser subagent fails on Wayland (#21983), branch display breaks on WSL (#28253), and terminal resize causes flickering (#21924). Cross-platform stability remains uneven.
- **Missing debugging context** – `/bug` reports lack subagent internals (#21763), making it hard for developers to diagnose multi-agent failures.
- **Tool limits and cleanup overhead** – A 400 error appears when >128 tools are present (#24246), and the model frequently leaves temporary scripts scattered across the filesystem (#23571), increasing workspace pollution.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-07-19

## Today’s Highlights
The community is buzzing about two long-standing feature requests: **remote session support** (Issue #1979, 53 👍) and **1M‑context window parity with Claude Code** (Issue #2785, 62 👍) — both were closed but remain top‑of‑mind. A critical bug concerning **zombie process accumulation** (Issue #4163) was opened for Linux users, while the **GPT‑5.6 plan‑mode exit reliability** regression (Issue #4172) is under triage. No releases were published in the last 24 hours.

## Releases
None

## Hot Issues (10 of 27 updated in last 24h)

1. **[#3767 – Oversized attachment permanently wedges session](https://github.com/github/copilot-cli/issues/3767)** (CLOSED)  
   Attachments exceeding CAPI’s 5 MB native limit cause an unrecoverable error. 11 comments. No workaround available; session must be discarded. High impact for teams using large screenshots or documents.

2. **[#1477 – “Continuing autonomously (3 premium requests)” after model completion](https://github.com/github/copilot-cli/issues/1477)** (CLOSED)  
   Users report unexpected premium‑request consumption when autopilot mode continues after the model finishes. 18 👍. Community confusion over credit usage.

3. **[#1979 – Remote session support (attach from mobile/browser)](https://github.com/github/copilot-cli/issues/1979)** (CLOSED)  
   Feature request with 53 👍. Users want the ability to attach to a running CLI session remotely, similar to Claude Code’s remote session feature. No action yet, but demand is clear.

4. **[#2958 – Per‑mode default model configuration](https://github.com/github/copilot-cli/issues/2958)** (OPEN)  
   Request to configure a default model separately for *plan mode* and *autopilot mode* via config file. 16 👍. Would give power users finer control.

5. **[#4034 – Hook subprocess stdin write‑end left open (tool‑use hooks hang)](https://github.com/github/copilot-cli/issues/4034)** (CLOSED)  
   A subtle bug where `preToolUse` / `postToolUse` hooks never receive EOF, causing `$(cat)` patterns to hang. Critical for custom hook users.

6. **[#2052 – Persistent token/context usage indicator](https://github.com/github/copilot-cli/issues/2052)** (CLOSED)  
   Highly requested UX enhancement (19 👍). An always‑visible context‑window meter would help developers manage token limits during long sessions.

7. **[#2785 – Support 1M context for Claude Opus 4.7](https://github.com/github/copilot-cli/issues/2785)** (CLOSED)  
   The most‑voted issue this week (62 👍). Users demand parity with Claude Code’s 1M‑context Opus model. Lack of support is a top reason for switching tools.

8. **[#4160 – Plan mode over‑blocks read‑only shell commands](https://github.com/github/copilot-cli/issues/4160)** (OPEN)  
   A recent bug report (3 comments) where the heuristic blocking “may modify workspace” commands produces false positives for `grep`, `find`, etc. Frustrating for plan‑mode workflows.

9. **[#4172 – Exiting plan mode not reliable with GPT‑5.6](https://github.com/github/copilot-cli/issues/4172)** (OPEN)  
   After generating a plan with GPT‑5.6, the CLI sometimes hangs instead of returning to interactive mode. Under triage.

10. **[#4163 – Zombie process accumulation under copilot PID](https://github.com/github/copilot-cli/issues/4163)** (OPEN)  
    Linux bug: finished subprocesses become zombies at ~2 leaks per minute. Persistent sessions can accumulate dozens of zombies. Needs urgent fix.

## Key PR Progress
No pull requests were updated in the last 24 hours.

## Feature Request Trends
- **Remote session / attachability** (#1979, 53 👍) – Users want to continue CLI sessions from mobile or browser, mirroring Claude Code’s remote feature.
- **Larger context windows** (#2785, #1610) – Strong demand for 1M‑context support with Opus models to match competing tools.
- **Per‑mode model configuration** (#2958, 16 👍) – Separate defaults for plan and autopilot modes would improve flexibility.
- **Token / context usage indicator** (#2052, 19 👍) – An always‑visible status bar showing context utilization.
- **Local model / credit control** (#4167, #4168) – Desire to allow zero‑credit usage with local models and to suppress low‑credit warnings.

## Developer Pain Points
- **Oversized attachments** (#3767) – Hard‑fault without recovery when exceeding CAPI’s 5 MB limit.
- **Zombie processes** (#4163) – Linux users face accumulating dead child processes that waste OS resources.
- **Hook reliability** (#4034) – Missing EOF for tool‑use hooks breaks custom hook scripts.
- **Plan‑mode false positives** (#4160) – Read‑only commands (e.g., `grep`) incorrectly blocked by workspace‑modification heuristic.
- **Windows session resume** (#4165) – `copilot --resume` hangs indefinitely from PowerShell.
- **ASLR‑disabled crash** (#4171) – CLI segfaults on enterprise Linux systems where ASLR is turned off.
- **Unclear session commands** (#3569) – Users confused by `/clear` vs `/new` semantics.
- **Missing telemetry in non‑interactive mode** (#4169) – `copilot -p` does not emit OTEL telemetry, affecting observability.

---
*Generated from [github/copilot-cli](https://github.com/github/copilot-cli) data. Issues and PRs updated between 2026-07-18 and 2026-07-19.*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-07-19

## Today's Highlights
The 24‑hour window saw no new release, but two open issues and two pull requests were updated, both focused on quality‑of‑life improvements. The community is actively discussing a permission‑rules bug (deny overrides allow regardless of order) and a highly popular feature request for quick reasoning‑level switching in the TUI. PRs addressing both topics have been submitted, signalling rapid iteration.

## Releases
**None** — No new versions were published in the last 24 hours. The latest stable release remains **0.27.0**.

## Hot Issues (2 noteworthy items)
Only two issues saw activity; both are significant for the developer experience.

1. **[#2508 – Permission rules: deny overrides allow regardless of order](https://github.com/MoonshotAI/kimi-cli/issues/2508)**  
   *Author: Julzilla | Updated: 2026-07-19*  
   **Why it matters**: A core security/access‑control behaviour contradicts the documented "first matching rule takes effect". Users relying on fine‑grained allow/deny order may experience unexpected denials, breaking workflows. Community reaction is quiet (0 👍) but the bug is clear – immediate triage needed.

2. **[#2501 – [Feature Request] Quick switch Reasoning Level / Thinking Effort in TUI](https://github.com/MoonshotAI/kimi-cli/issues/2501)**  
   *Author: remacheybn408-boop | Updated: 2026-07-18*  
   **Why it matters**: Developers want to change reasoning effort mid‑conversation without diving into submenus. The request cites VS Code’s dropdown as a better UX pattern. This issue has already sparked PR #2509.

## Key PR Progress (2 important PRs)
Both open PRs directly address the above issues.

1. **[#2509 – feat(kimi): configurable thinking effort and /effort command](https://github.com/MoonshotAI/kimi-cli/pull/2509)**  
   *Author: n-WN | Updated: 2026-07-18*  
   **Description**: Implements the `/effort` slash command and a configurable `thinking_effort` parameter, resolving #2501. Also builds on #2499 (legacy `reasoning_effort` passthrough). This PR would give power users instant control over model reasoning depth – a major UX win for heavy CLI users.

2. **[#2507 – fix(acp): signal QuestionNotSupported instead of resolving empty answers](https://github.com/MoonshotAI/kimi-cli/pull/2507)**  
   *Author: ayaangazali | Updated: 2026-07-18*  
   **Description**: Fixes a subtle bug in ACP server mode where every `QuestionRequest` was resolved with an empty dict, making it impossible for the model to distinguish a user dismissal from a missing answer. This PR restores proper error signalling (fixes #2495, not shown in today’s update). Important for any developer using ACP for tool‑backed agent workflows.

## Feature Request Trends
Despite the limited data, one clear direction emerges:

- **In‑line reasoning effort control** – The community wants to toggle thinking depth without leaving the main TUI input, preferably via a slash command or a persistent toggle. This aligns with the broader AI‑tooling trend of fine‑grained reasoning knobs (e.g., OpenAI’s `reasoning_effort`, Anthropic’s `thinking` budget).

## Developer Pain Points
- **Permission rule contradictions** – Issue #2508 exposes confusion around the precedence of allow vs. deny rules. Developers expect declarative, first‑match semantics but encounter hard‑coded deny‑overrides. This is a blocking bug for teams using role‑based access patterns.
- **ACP opaque question handling** – PR #2507 highlights that silent empty answers break agent reliability. Developers relying on ACP for tool orchestration need explicit error signals to handle refusal vs. user cancellation.

*Links in this digest are hyperlinked to the actual GitHub issue/PR pages. For full context, follow the URLs.*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-07-19

## Today’s Highlights
The community continued to push stability and UX improvements with multiple contributors landing fixes for malformed tool input recovery and stale plugin caches. A major TUI performance refactor (rebuilding session timeline on Quark part slots) and a long‑awaited bidirectional cursor pagination PR both saw activity. On the issue tracker, the most‑upvoted feature request—**limiting parallel subagents** (👍20)—remains open, and a new report of V2 headless commands leaking temporary files surfaced.

## Releases
No new releases in the last 24 hours.

## Hot Issues
1. **#12338 – 1M tokens for Opus 4.6**  
   User reports hitting a 200k token limit despite configuring maximum tokens. Closed after 40 comments, high community interest (👍25).  
   [Link](https://github.com/anomalyco/opencode/issues/12338)

2. **#4672 – OpenCode GitHub Agent Stuck**  
   Agent gets stuck at “Sending Message to opencode…”. Resolved with 23 comments.  
   [Link](https://github.com/anomalyco/opencode/issues/4672)

3. **#11083 – Claude caching function not enabling**  
   Third‑party Anthropic endpoints fail to respect `setCacheKey`. 13 comments, 👍5.  
   [Link](https://github.com/anomalyco/opencode/issues/11083)

4. **#28322 – Config option to show thinking blocks by default**  
   Users want collapsed reasoning blocks to be optionally visible by default. 👍5, 6 comments.  
   [Link](https://github.com/anomalyco/opencode/issues/28322)

5. **#24370 – Opt‑out of “NEVER commit unless asked”**  
   Advanced users want to let models manage commits automatically. 6 comments, 👍7.  
   [Link](https://github.com/anomalyco/opencode/issues/24370)

6. **#25880 – Desktop v1.14.39: Bun‑target plugins fail to load**  
   Sidecar runtime switch from Bun to Node.js breaks plugins depending on Bun APIs. 4 comments, 👍6.  
   [Link](https://github.com/anomalyco/opencode/issues/25880)

7. **#37671 – [V2] headless commands load OpenTUI and leak temp files**  
   `opencode --version` etc. opens a 13 MiB `libopentui.so` per invocation. Open, 3 comments.  
   [Link](https://github.com/anomalyco/opencode/issues/37671)

8. **#28305 – Subagent able to execute arbitrary code in plan mode**  
   Security issue: plan mode should restrict tool execution. 3 comments.  
   [Link](https://github.com/anomalyco/opencode/issues/28305)

9. **#27110 – Setting to limit max number of parallel subagents**  
   Most‑upvoted open feature request (👍20). Users with local models need concurrency control.  
   [Link](https://github.com/anomalyco/opencode/issues/27110)

10. **#28332 – Desktop NodeService hangs after sending message**  
    Backend process remains alive but unresponsive, logs insufficient. 3 comments.  
    [Link](https://github.com/anomalyco/opencode/issues/28332)

## Key PR Progress
1. **[#37701 – fix(core): continue after malformed tool input](https://github.com/anomalyco/opencode/pull/37701)** (closed)  
   Treats malformed tool arguments as ordinary failures instead of causing repair loops—improves model robustness.

2. **[#37603 – feat(tui): rebuild session timeline on Quark part slots](https://github.com/anomalyco/opencode/pull/37603)** (open)  
   Eliminates per‑delta array scanning for assistant responses; expected to significantly reduce TUI rendering cost.

3. **[#37097 – fix(app): show shell output while a command runs](https://github.com/anomalyco/opencode/pull/37097)** (open)  
   Web UI now expands shell tool output during execution, matching TUI behavior.

4. **[#37054 – feat(app): add full session option to web fork dialog](https://github.com/anomalyco/opencode/pull/37054)** (open)  
   Closes #37016 by allowing forking the entire conversation, not only up to a selected message.

5. **[#37698 – fix(core): safely recover malformed tool input](https://github.com/anomalyco/opencode/pull/37698)** (closed)  
   Another approach to malformed tool recovery, recording failures without aborting the whole step.

6. **[#37691 – fix(simulation): render screenshot symbol glyphs](https://github.com/anomalyco/opencode/pull/37691)** (closed)  
   Adds Unicode symbols and braille spinners to V2 simulation screenshots.

7. **[#37696 – feat(opencode): use adaptive thinking effort for kimi family](https://github.com/anomalyco/opencode/pull/37696)** (open)  
   Enables `thinking.type="adaptive"` for Kimi/Moonshot endpoints, aligning with Anthropic contract.

8. **[#23111 – feat(opencode): display cached token count inline in TUI](https://github.com/anomalyco/opencode/pull/23111)** (open)  
   Shows `(N cached)` next to token counts when cache read+write > 0. Closes #23109.

9. **[#8535 – feat(session): bi‑directional cursor‑based pagination](https://github.com/anomalyco/opencode/pull/8535)** (open)  
   Long‑standing (since Jan 2026) PR adding bidirectional pagination for session messages. Closes multiple issues.

10. **[#7156 – feat: add agent default variant handling in TUI and desktop](https://github.com/anomalyco/opencode/pull/7156)** (open)  
    Respects an agent’s configured model variant when supported, bridging config and UI.

## Feature Request Trends
- **Configuration flexibility** – Users want to toggle default states (thinking blocks, commit behavior, parallel subagent limits) and control subagent background execution.
- **Plugin & extension ecosystem** – Requests for headless prompt‑mutation hooks, command hooks (`command.execute.before`), and support for external providers (Aperture gateway, multi‑root workspaces).
- **UI/UX polish** – Theme tokens for selection foreground/background, safe rendering mode for old Windows consoles, and better multi‑project folder handling.
- **Performance & caching** – Better caching indicators (tokens, context), limitation of parallel subagents, and resolution of cache not enabling with third‑party endpoints.

## Developer Pain Points
- **Windows stability** – Crashes on CPUs without AVX2, git command crashes, rendering issues in old conhost terminals, and window resize crashes persist.
- **Terminal compatibility** – tmux clipboard failures (OSC 52 with passthrough off), iTerm2 tmux control mode Enter submission, and kitty/remote dev issues.
- **Plugin & runtime issues** – Desktop’s Node.js sidecar breaks Bun‑targeted plugins; stale `@latest` npm cache causes stale plugin versions.
- **Model integration** – Google provider enum errors, Kimi reasoning field 400 errors, Opus token limit not honored, and tool_call false not preventing tool sending.
- **Security & reliability** – Subagent in plan mode can execute arbitrary code; headless V2 leaks temp files; database lock (SQLite) freezes TUI input thread.
- **Resource leaks** – Repeated `--help` or `api` commands create junk temp files; NodeService hangs without crash logs.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest – 2026-07-19

## Today’s Highlights
The team closed a flurry of issues overnight, focusing on retry/resilience (unbounded exponential backoff, compaction failures, transient network drops) and performance (high CPU on large files, slow startup from model catalogue refresh). A key Copilot pricing bug for GPT‑5.6 models remains open and is actively investigated. Several contributors submitted PRs fixing lockfile flip‑flopping, adding shared auth file support, and improving model‑scope removal.

## Releases
No new versions were published in the last 24 hours.

## Hot Issues
1. **#6303 – Exponential retry backoff has no cap**  
   *Closed* – `getRetrySettings()` doesn’t return `maxDelayMs`, so `_prepareRetry()` multiplies without bound (e.g., attempt 7 waits ~4 minutes). 8 comments.  
   [Issue](https://github.com/earendil-works/pi/issues/6303)

2. **#6725 – Copilot pricing for GPT‑5.6 models is incorrect**  
   *Open, in progress* – OpenAI Copilot pricing omits `cacheWrite` costs, causing under‑billing (e.g., session cost $1.67 vs actual). 6 comments.  
   [Issue](https://github.com/earendil-works/pi/issues/6725)

3. **#6167 – `transformMessages` + `isSameModel===false` thinking block normalization interacts poorly with compat flag**  
   *Open* – Model‑switching inlines thinking content incorrectly when `requiresReasoningContentOnAssistantMessages` is enabled. 4 comments.  
   [Issue](https://github.com/earendil-works/pi/issues/6167)

4. **#6774 – Ctrl+G external editor is slow to launch when `os.tmpdir()` is crowded**  
   *Closed* – Writes temp file directly into `os.tmpdir()`; proposed fix writes to a private `mkdtemp` subdirectory. 4 comments.  
   [Issue](https://github.com/earendil-works/pi/issues/6774)

5. **#6792 – High CPU usage when writing or editing big 500+ line files**  
   *Closed* – 100% CPU on files >1000 lines; CPU profile attached. 3 comments.  
   [Issue](https://github.com/earendil-works/pi/issues/6792)

6. **#6675 – `pi update --self` gives up after one transient connection failure**  
   *Open* – Self‑update fails immediately on a single fetch error without retry. 3 comments.  
   [Issue](https://github.com/earendil-works/pi/issues/6675)

7. **#6768 – Compaction using Copilot Enterprise not possible**  
   *Closed* – Returns `421 Misdirected Request` for OpenAI and errors for Anthropic models. 3 comments, 👍2.  
   [Issue](https://github.com/earendil-works/pi/issues/6768)

8. **#6647 – Compaction fails on a single transient stream drop (no retry)**  
   *Open, in progress* – Compaction’s summarization call lacks retry logic, so a mid‑stream socket death aborts the whole compaction. 2 comments.  
   [Issue](https://github.com/earendil-works/pi/issues/6647)

9. **#6808 – `openai-responses` waits for HTTP EOF after `response.completed`**  
   *Closed* – Delays of ~4 seconds after stream completion; missing `[DONE]` marker in some providers. 2 comments.  
   [Issue](https://github.com/earendil-works/pi/issues/6808)

10. **#6815 – Issue templates still link CONTRIBUTING to `earendil-works/pi-mono`**  
    *Closed* – Template paths 404; should point to the correct repo. 1 comment. Important for new contributors.  
    [Issue](https://github.com/earendil-works/pi/issues/6815)

## Key PR Progress
1. **#6807 – fix(ai): stop Responses streams at terminal event**  
   *Closed* – Proposed fix for #6808 to avoid waiting for HTTP EOF after `response.completed`.  
   [PR](https://github.com/earendil-works/pi/pull/6807)

2. **#6813 – feat(coding-agent): support shared auth file**  
   *Closed* – Adds `PI_CODING_AGENT_AUTH_FILE` env var to override credential file location, independent of agent config.  
   [PR](https://github.com/earendil-works/pi/pull/6813)

3. **#6812 – Remove `./` from pi-ai bin path so lockfiles stop flip‑flopping**  
   *Closed* – Fixes #6811 by removing the leading `./` from the bin entry.  
   [PR](https://github.com/earendil-works/pi/pull/6812)

4. **#6775 – retry on compaction/branch summarization retryable failures**  
   *Open* – Implements retry logic for compaction summarization, addressing #6647.  
   [PR](https://github.com/earendil-works/pi/pull/6775)

5. **#1762 – Expose session and tree browsing/editing to RPC protocol**  
   *Closed* – Reopens #1628 to add session discovery and tree navigation to the RPC protocol.  
   [PR](https://github.com/earendil-works/pi/pull/1762)

6. **#6804 – fix(coding-agent): allow removing scoped models whose provider/model no longer resolves**  
   *Closed* – Fixes #6806 by handling missing providers in the scoped‑models selector.  
   [PR](https://github.com/earendil-works/pi/pull/6804)

7. **#5262 – feat(ai): add Anthropic Vertex provider**  
   *Open* – Adds a built‑in `anthropic-vertex` provider for Claude on GCP Vertex AI, reusing existing Anthropic streaming.  
   [PR](https://github.com/earendil-works/pi/pull/5262)

8. **#6802 – fix(coding-agent): show actual extended context size in footer indicator**  
   *Closed* – Replaces hardcoded `[1M]` with model’s actual `extendedContextWindow`.  
   [PR](https://github.com/earendil-works/pi/pull/6802)

9. **#6795 – Add exit cmd**  
   *Closed* – Simple addition of an exit command. Details not provided.  
   [PR](https://github.com/earendil-works/pi/pull/6795)

## Feature Request Trends
- **Manual retry and better retry feedback** – #6810 proposes a `/retry` command, while #6775 adds UI indication for compaction retries.  
- **Provider/model management** – #6803 asks for hiding/disabling providers without deleting, #6814 requests native OpenRouter OAuth, and #6806 highlights scoped model removal issues.  
- **Performance and startup time** – #6809 (extension startup), #6774 (temp dir crowding), #6794 (model catalogue refresh slowness).  
- **Improved navigation and display** – #3790 (backward thinking‑level cycling), #6802 (accurate context size indicator).  
- **Better contribution infrastructure** – #6815 (fixing broken contributing links).

## Developer Pain Points
- **Unreliable retry behavior** – Exponential backoff without cap (#6303), compaction failing on single transient drop (#6647), self‑update giving up immediately (#6675).  
- **High resource usage** – 100% CPU on large files (#6792), slow startup from model catalogue refresh (#6794).  
- **Platform and locale issues** – iTerm2 unusable on macOS (#6784), Devanagari characters corrupting editor repaint (#6782).  
- **Configuration and auth quirks** – Scoped models stuck after provider removal (#6806), auth.json ENV section ignored for some providers (#6799).  
- **Lockfile instability** – Bin path flip‑flopping in `package-lock.json` (#6811).  
- **Misleading update messages** – `pi update --extensions` always says “Updated packages” even when unchanged (#6800).

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-07-19

## 1. Today's Highlights

This week's releases tackle two of the most persistent developer complaints: session history forking and subagent model leakage, with **v0.19.12** landing a highly requested inline model-switching feature (`/model` command) and initial daemon cold-start tracing. On the community side, a P1 bug where subagents silently mutate the main session's model has drawn 10 comments and is now under active fix in PR #7194. Meanwhile, MCP reliability continues to be a hot topic, with a new fix for Streamable HTTP transports and a lingering timeout issue for third-party MCP servers.

## 2. Releases

### v0.19.12 — Stable Release
- **Highlights:**
  - **`feat(daemon): Trace cold first-session startup** — This PR (#6907) by @doudouOUC addresses a long-standing performance gap where daemon boot + first session took ~2.5s vs CLI's 0.7s. Tracks the root issue #4748.
  - **Breaking Changes:** None.
  - **Full changelog** includes the cold-start tracing and other pending fixes.

### v0.19.12-nightly.20260719 and v0.19.12-preview.0 — Nightly & Preview
- **Nightly:** Chore only (sync third-party notices).
- **Preview:** Includes the daemon cold-start tracing from #6907 and a multi-workspace ownership guard fix from @doudo.

## 3. Hot Issues (Top 10)

| # | Issue | Summary | Why It Matters | Community |
|---|-------|---------|----------------|-----------|
| 1 | [#7156](https://github.com/QwenLM/qwen-code/issues/7156) (P1, Open) | Subagent mutates main session model — context overflow returns after fix #7119 | Core session isolation regression: subagent's model leaks into main session, causing "fatal 400" errors. | 10 comments; community is tracing a second code path after previous fix. |
| 2 | [#7147](https://github.com/QwenLM/qwen-code/issues/7147) (P2, Open) | MCP server never gets tool/resource listing — times out for Fastmail MCP | Blocks all users relying on third-party MCP servers for email/calendar access. | 4 comments; flagged `welcome-pr`. |
| 3 | [#6996](https://github.com/QwenLM/qwen-code/issues/6996) (P2, Closed) | Custom OpenAI-compatible provider always fails with generic 'Connection error' | Underlying cause (e.g., bad cert, timeout) discarded — frustrating for self-hosters. | 3 comments; now closed with PR #7010. |
| 4 | [#6949](https://github.com/QwenLM/qwen-code/issues/6949) (P2, Open) | Plan mode blocks unclassified read-only shell commands and bypasses exit confirmation | Blocks legitimate CLI usage in ACP; exit confirmation can be skipped. | 1 comment; under review. |
| 5 | [#7181](https://github.com/QwenLM/qwen-code/issues/7181) (P1, Open) | `/goal` loop blocks user input — cannot clear/interrupt an active goal | User input queue is blocked; even `/goal clear` is deferred until goal ends naturally. | 1 comment; flagged `welcome-pr`. |
| 6 | [#7164](https://github.com/QwenLM/qwen-code/issues/7164) (P1, Open) | Concurrent session writers can fork transcript history and hide responses | Two processes appending to same JSONL can create divergent parent chains — data loss risk. | 1 comment; PR #7166 addresses this. |
| 7 | [#7192](https://github.com/QwenLM/qwen-code/issues/7192) (P2, Open) | `source_test` metadata updates dropped by source config validation | Desktop save path breaks because timestamp format mismatch. | 1 comment; PR #7193 addresses this. |
| 8 | [#7159](https://github.com/QwenLM/qwen-code/issues/7159) (P2, Closed) | MaxListenersExceededWarning: 11 resize listeners — potential memory leak | Crashes after multiple turns; node 22.x specifically. | 3 comments; closed with PR #7186. |
| 9 | [#6970](https://github.com/QwenLM/qwen-code/issues/6970) (P2, Closed) | MCP tool names with dots rejected by OpenAI/Anthropic-compatible providers | Breaks tools like `literature.search_pubmed` for non-Gemini providers. | 2 comments; closed, but fix not yet in stable. |
| 10 | [#6936](https://github.com/QwenLM/qwen-code/issues/6936) (P2, Closed) | `isManagedMemoryAvailable()` ignores `enableManagedAutoMemory` setting — wastes 7-9 KB context | Users who disable managed memory still get the prompt injected. | 3 comments; closed, needs integration. |

## 4. Key PR Progress (Top 10)

| # | PR | Author | What It Does | Status |
|---|-----|--------|--------------|--------|
| 1 | [#7194](https://github.com/QwenLM/qwen-code/pull/7194) | zjunothing | **Fixes subagent model leak (#7156):** Drains background notifications outside subagent's ALS frame with a new `runOutsideAgentContext()` guard. | Open; key fix for P1. |
| 2 | [#7162](https://github.com/QwenLM/qwen-code/pull/7162) | VectorPeak | **Validates `list_sessions` pagination params:** Converts limit/offset to integers; adds handler-level validation. | Open; improves API robustness. |
| 3 | [#7177](https://github.com/QwenLM/qwen-code/pull/7177) | ghisguth | **Gemma 4 native tool-calling schema (#7148):** Replaces generic `[tool_call:]` examples with `<\|tool_call\|>` tokens for Gemma 4 models. | Open; v0.19.12 preview includes. |
| 4 | [#7166](https://github.com/QwenLM/qwen-code/pull/7166) | doudouOUC | **Enforces single-writer session persistence (#7164):** Introduces process-level lease, authoritative reload after ownership acquisition, and byte-length fencing. | Open; addresses data forking. |
| 5 | [#7172](https://github.com/QwenLM/qwen-code/pull/7172) | doudouOUC | **Routes Plan-mode shell commands by safety (#6949):** Classifies read-only vs. mutation commands; separate paths for each. | Open; improves Plan-mode reliability. |
| 6 | [#7195](https://github.com/QwenLM/qwen-code/pull/7195) | zjunothing | **Dedicated undici fetch for MCP Streamable HTTP (#7147):** Uses module-level Agent with disabled timeouts for SSE streams. | Open; addresses MCP timeout. |
| 7 | [#7010](https://github.com/QwenLM/qwen-code/pull/7010) | mvanhorn | **Surfaces `.cause` of OpenAI-compatible connection errors (#6996):** Routes discarding call sites through `getErrorMessage()` which unwraps `AggregateError`. | Closed; merged into stable. |
| 8 | [#7186](https://github.com/QwenLM/qwen-code/pull/7186) | mvanhorn | **Shares one `resize` listener in `useTerminalSize` (#7159):** Module-level listener + `Set` of subscribers replaces per-instance listeners. | Closed; fixes MaxListenersExceeded. |
| 9 | [#7165](https://github.com/QwenLM/qwen-code/pull/7165) | wenshao | **Autofix label-driven takeover + fix forced-dispatch green no-op:** Adds `autofix/takeover` label; fixes a latent bug where forced dispatches were no-ops. | Open; improves CI/automation tooling. |
| 10 | [#7190](https://github.com/QwenLM/qwen-code/pull/7190) | wenshao | **Review deduplication:** One disclosure per subject, one sentence per cause — collapses duplicate clauses and all-built-none-launched rosters. | Open; improves review clarity. |

## 5. Feature Request Trends

The community is aligning around three major directions:

1. **Session Management & Continuity** (5+ requests)
   - Keyword search for conversation history ([#6824](https://github.com/QwenLM/qwen-code/issues/6824))
   - Inline model switching via `/model` command ([#5967](https://github.com/QwenLM/qwen-code/issues/5967))
   - Workspace-scoped session JSONL import for daemon SDK ([#7178](https://github.com/QwenLM/qwen-code/issues/7178))
   - Custom display names for registered workspaces ([#7170](https://github.com/QwenLM/qwen-code/issues/7170))

2. **Channel & IM Integration** (4+ requests)
   - Observe group display names from inbound messages ([#7154](https://github.com/QwenLM/qwen-code/issues/7154))
   - Expose workspace-scoped observed contacts for IM ([#7103](https://github.com/QwenLM/qwen-code/issues/7103))
   - Deliver durable scheduled task results to selected chats ([#7152](https://github.com/QwenLM/qwen-code/issues/7152))
   - Channel active memory recall for bot prompts ([#6360](https://github.com/QwenLM/qwen-code/issues/6360))

3. **MCP & Tool Reliability** (3+ requests)
   - Support for dots in MCP tool names across providers ([#6970](https://github.com/QwenLM/qwen-code/issues/6970))
   - Chained MCP calls with proper permission handling ([#6992](https://github.com/QwenLM/qwen-code/issues/6992))
   - MCP Streamable HTTP transport stability ([#7147](https://github.com/QwenLM/qwen-code/issues/7147))

## 6. Developer Pain Points

Four recurring frustrations dominate this digest:

1. **Session Model Leakage (P1):** The subagent mutating the main session's model (#7156) is the most critical bug this week — it's a regression from #7119 and affects anyone using subagents. High urgency, active fix in #7194.

2. **Daemon Cold Start Latency:** Issue #4748 tracks a persistent ~1.8s gap between daemon and CLI cold start that is still not closed. While PR #6907 adds tracing, the actual optimization remains in progress.

3. **MCP & Integration Fragility:** Users report that MCP servers time out (#7147), tool names are rejected (#6970), and custom OpenAI-compatible providers fail with opaque errors (#6996). These are not one-off bugs but a pattern of integration friction.

4. **Unresponsive UX States:** The `/goal` loop blocking all input (#7181) and the `exit_plan_mode` dialog displaying a truncated plan without a way to see the full content (#7001) show that important UX flows still need hardening.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest – 2026-07-19

## Today’s Highlights

Maintainer [Hmbown](https://github.com/Hmbown) landed a burst of 15+ PRs today, many targeting v0.9.1 release blockers. Key fixes include xAI device‑code OAuth restoration (PR #4554), a config leak that caused `deepseek-v4-pro` model‑not‑found errors on xAI routes, and a TUI perf win that slashes `/model` picker open time from ~3.1 s to near‑instant. A long‑running discussion (#4032) about Codewhale ignoring user‑provided scripts continues to draw community engagement (39 comments). No new binary release was published in the last 24 h.

## Releases

No new versions in the last 24 h. The latest official release remains **v0.9.3** (based on issue labels).

## Hot Issues

*(10 noteworthy issues, ordered by interest/impact)*

1. **[#4032 – Codewhale not following the constitution](https://github.com/Hmbown/CodeWhale/issues/4032)** [bug, v0.9.3]  
   Codewhale consistently writes temporary scripts instead of using pre‑agreed scripts. 39 comments – strongest community signal of the week. Users want the agent to honour “constitution” rules.

2. **[#4410 – Restore xAI device‑code OAuth login](https://github.com/Hmbown/CodeWhale/issues/4410)** [bug, release‑blocker, v0.9.1]  
   Hard‑coded OAuth path differs from actual Grok CLI path. *Filed by Hmbown* – prioritised as release blocker. Fixed today in PR #4546.

3. **[#3192 – Put DeepSeek TUI on agentclientprotocol/registry](https://github.com/Hmbown/CodeWhale/issues/3192)** [enhancement, v0.9.3]  
   Would simplify installation via Zed. 13 comments, cross‑ecosystem visibility.

4. **[#1186 – Add typed persistent permission rules (execpolicy)](https://github.com/Hmbown/CodeWhale/issues/1186)** [enhancement, security, tools, v0.9.3]  
   Rule scoping by tool name, command prefix, path pattern. 12 comments – strong demand for fine‑grained permission control.

5. **[#1481 – Support OpenCode Go/Zen (DeepSeek‑V4 provider)](https://github.com/Hmbown/CodeWhale/issues/1481)** [enhancement, v0.9.3]  
   Cheap alternative provider. 10 comments + 1 👍 – community seeks provider diversity.

6. **[#998 – Chinese text not fully displayed](https://github.com/Hmbown/CodeWhale/issues/998)** [enhancement]  
   Screenshot shows truncated text. Suggests hover tooltip for full content. 8 comments – impacts Chinese‑speaking users.

7. **[#1675 – Chinese garbled characters in agent output](https://github.com/Hmbown/CodeWhale/issues/1675)** [bug, question, v0.9.3]  
   Agent writing Obsidian/WordPress content displays garbled text. 4 comments – encoding issue still unresolved.

8. **[#4085 – Cannot read/write files under macOS Dropbox ~/Library/CloudStorage](https://github.com/Hmbown/CodeWhale/issues/4085)** [bug, reliability, v0.9.3]  
   macOS File Provider framework blocks binary even with no sandbox entitlements. 3 comments – niche but critical for Dropbox users.

9. **[#1854 – Windows default launch should use Windows Terminal](https://github.com/Hmbown/CodeWhale/issues/1854)** [enhancement, v0.9.3]  
   Double‑click `.exe` opens ugly `cmd.exe`. 2 comments – quality‑of‑life for Windows devs.

10. **[#2327 – Copyright concerns over unofficial Codewhale extensions on VS Code Marketplace](https://github.com/Hmbown/CodeWhale/issues/2327)** [enhancement, v0.9.5]  
   Community‑reported trademark misuse. 2 comments – legal awareness rising.

## Key PR Progress

*(10 important PRs, focusing on merged/closed work)*

1. **[#4554 – fix(config): stop root DeepSeek default leaking onto vendor‑locked routes](https://github.com/Hmbown/CodeWhale/pull/4554)**  
   **Merged**. Live‑hit fix: xAI sessions failing with model‑not‑found because `default_model()` returned `deepseek-v4-pro` regardless of vendor. Now vendors override correctly.

2. **[#4546 – fix(xai): flatten root oneOf tool schemas rejected with 400](https://github.com/Hmbown/CodeWhale/pull/4546)**  
   **Merged**. xAI validation rejects nested `anyOf`/`oneOf` at root. Flattened to object type. Release blocker resolved.

3. **[#4550 – perf(tui): memoize merged provider catalog snapshot for model picker](https://github.com/Hmbown/CodeWhale/pull/4550)**  
   **Merged**. `/model` open time reduced from ~3.1 s to near‑instant. Arc‑based caching.

4. **[#4558 – feat(persistence): per‑session crash checkpoints with flush reporting](https://github.com/Hmbown/CodeWhale/pull/4558)**  
   **Merged**. Replaces single‑slot checkpoint with per‑session files. First slice of v0.9.1 crash‑safety cutover.

5. **[#4553 – feat(work-graph): core model, reducer, validation](https://github.com/Hmbown/CodeWhale/pull/4553)**  
   **Merged**. WG1 – authoritative work ledger per session. No integration yet, but block for future workflow runtime.

6. **[#4555 – feat(kimi-code): exact K3 route truth and reasoning‑effort canonicalization](https://github.com/Hmbown/CodeWhale/pull/4555)**  
   **Merged**. Stage 1 of Kimi Code K3 stacked train. Strict alias table for reasoning effort.

7. **[#4557 – feat(kimi-code): membership‑plan onboarding and key recovery](https://github.com/Hmbown/CodeWhale/pull/4557)**  
   **Merged**. Stage 3 – replaces legacy ten‑provider digit list with `ProviderPickerView`. Unified UX.

8. **[#4551 – fix(tui): insert boundary between Responses reasoning summary parts](https://github.com/Hmbown/CodeWhale/pull/4551)**  
   **Merged**. SSE reasoning parts were concatenated; now `\n\n` separators render clearly.

9. **[#4549 – fix(tui): show status feedback and update compaction budget on Ctrl+T effort cycle](https://github.com/Hmbown/CodeWhale/pull/4549)**  
   **Merged**. Ctrl+T effort cycling had invisible feedback in some themes; now shows header chip and budget.

10. **[#4544 – fix(doctor): keep diagnostic commands read‑only end to end](https://github.com/Hmbown/CodeWhale/pull/4544)**  
    **Merged**. Hardens `doctor`, `setup --status`, dispatcher diagnostics to never create/mutate state. Read‑only keyring store.

## Feature Request Trends

- **Provider diversity** – Multiple issues ask for OpenCode Go/Zen (#1481), Kimi Code K3 support (PRs #4555‑57), and a provider‑independent offline path (#3927). Momentum toward first‑class support for cheap third‑party DeepSeek proxies.
- **Permission & execution policy** – Persistent, typed rules (#1186), agent constitution adherence (#4032), and per‑tool allow/deny/ask decisions.
- **Workflow & multi‑skill orchestration** – Grouped skill loading (#2117), work‑graph runtime (#2974), and subagent lifecycle improvement (#4022).
- **Localisation & Chinese UX** – Better Chinese text rendering (#998, #1675), Korean/Spanish/Brazilian Portuguese website locales (#3093), and RTL not yet needed.
- **External integration** – Registration with agentclientprotocol/registry (#3192) and VS Code marketplace concern (#2327).

## Developer Pain Points

- **xAI authentication fragility** – Device‑code OAuth broke after Grok CLI update (#4410). Community hit the model‑not‑found config leak (#4554).
- **macOS sandbox / file access** – Dropbox integration broken by File Provider framework (#4085). No sandbox, yet binary fails silently.
- **Windows terminal experience** – Raw `cmd.exe` vs Windows Terminal (#1854), Chinese garbled output (#1675), and shell selection for tool calls (#1754).
- **Agent autonomy vs. user instructions** – Codewhale ignoring user‑provided scripts (#4032) remains the highest‑engagement bug; trust in agent judgment eroding.
- **Codebase maintainability** – Maintainer self‑filed four “god object” splitting issues (#3314, #3310, #3313, #3308) with module sizes up to 7 k lines – visible struggle with Rust monolith growth.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/boom7sss/agents-radar).*