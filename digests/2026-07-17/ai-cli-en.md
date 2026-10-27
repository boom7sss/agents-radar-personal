# AI CLI Tools Community Digest 2026-07-17

> Generated: 2026-07-17 03:19 UTC | Tools covered: 9

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

# AI CLI Developer Tools: Cross-Tool Comparison Report
**Date:** 2026-07-17  
**Analyst:** Senior Technical Analyst, AI Developer Tools Ecosystem

---

## 1. Ecosystem Overview

The AI CLI tooling landscape continues its rapid maturation, with **eight major tools** now showing distinct strategic positions rather than undifferentiated competition. Today saw **15+ releases** across the ecosystem, from major stable version bumps (Claude Code v2.1.212, Qwen Code v0.19.11, CodeWhale v0.9.0) to rapid-fire alpha iterations (OpenAI Codex—four alpha releases in 24 hours). The dominant cross-cutting theme is **session reliability and cost transparency**: communities are collectively demanding automatic rate-limit recovery, deterministic agent behavior, and granular token accounting. Enterprise readiness signals are mixed—strong in Claude Code and Gemini CLI, weaker in Kimi Code and DeepSeek TUI/CodeWhale—while **security hardening** (secret leaks, sandbox escapes, permission models) has emerged as an urgent shared concern. The ecosystem is bifurcating between tools that prioritize **reliable autonomous execution** (Claude, Gemini, CodeWhale) and those optimizing for **interactive developer experience** (Codex, Copilot CLI, OpenCode).

---

## 2. Activity Comparison

| Tool | Hot Issues (Today) | Active PRs (Today) | Release Status | Notable Release |
|------|-------------------|-------------------|----------------|-----------------|
| **Claude Code** | 10 (171 👍 top issue) | 4 (2 open) | v2.1.212 shipped | `/fork` redesign, `auto-mode reset` |
| **OpenAI Codex** | 10 (59 👍 top issue) | 10 (8 open, 2 closed) | 4 alpha releases (rust-v0.145.x) | Windows perf regressions dominate |
| **Gemini CLI** | 10 (8 👍 top issue) | 10 (8 open, 2 closed) | v0.52.0-preview.0, v0.51.0 | Triage worker module, `AGENTS.md` fix |
| **GitHub Copilot CLI** | 10 (6 👍 top issue) | 0 (no updates) | v1.0.72-0 shipped | Multi-turn subagents always enabled |
| **Kimi Code CLI** | 4 (newly filed #2504) | 4 (2 open, 2 closed) | v1.49.0 shipped | Completion budget fix, empty reasoning preservation |
| **OpenCode** | 10 (25 👍 closed #1712) | 10 (8 open, 2 closed) | v1.18.3 shipped | Rate-limit backoff implemented, build/plan toggle regression |
| **Pi (earendil-works)** | 10 (9 comments #6657) | 10 (8 open, 2 closed) | v0.80.8–0.80.10 (3 patches) | Unified ModelRuntime, Kimi K3, Telnyx provider |
| **Qwen Code** | 10 (25 comments closed #6378) | 10 (8 open, 2 closed) | v0.19.11 + nightly | Multi-workspace daemon RFC closed, VS Code revert |
| **CodeWhale (DeepSeek TUI)** | 10 (16 comments #3793) | 10 (9 open, 1 merged) | v0.9.0 "Codewhale" rebrand | OpenCode Zen provider merged, subagent lifecycle fixes |

**Key observations:**
- **Codex** leads in raw PR throughput (10 active, including 8 open), reflecting aggressive stabilization of the Rust CLI.
- **CodeWhale** shows the highest relative velocity (40+ PRs in 24h, 7 of the highlighted 10 merged or actionable).
- **GitHub Copilot CLI** is the only tool with **zero PR updates** today—development activity appears lower despite a release.
- **OpenCode** has the highest total issue engagement (25 👍 on a closed issue), but the open regression #37430 is a fresh concern.
- **Kimi Code** has the smallest issue footprint (4 issues, none with maintainer response), suggesting either lower adoption or slower community feedback loops.

---

## 3. Shared Feature Directions

### Requirements Appearing Across Multiple Tool Communities

| Feature Direction | Tools Expressing Need | Specific Pain Points |
|------------------|----------------------|---------------------|
| **Automatic session continuation** | Claude Code (#13354, #35744—171 👍), Gemini CLI (#21409—8 👍), OpenCode (#1712—25 👍, now closed) | Rate-limit resets, subscription caps, network interruptions force manual restarts; users want auto-resume without "continue" prompts |
| **Cost transparency & extreme token warnings** | Claude Code (#77360, #77943—extreme burn reports), GitHub Copilot CLI (#1152—6 👍), Kimi Code (#2318—TPD errors) | Silent token waste from workflows, browser automation, and truncated sessions; users demand per-action accounting |
| **MCP tool reliability & extensibility** | Claude Code (#77362—regression), Codex (#33575, #32942—tools vanish), GitHub Copilot CLI (#4143—3 👍), Pi (#6755—memory leak), Qwen Code (#6992—chained failures) | Tools disappearing after metadata changes, MCP server fan-out on restore, memory leaks from partial updates, permission dialog hangs |
| **Local model / BYOL integration** | OpenCode (#21396—9 comments, closed), Pi (#5294—llama.cpp timeout), Qwen Code (#6996—custom provider errors), CodeWhale (#1481—OpenCode Zen merged) | Latency overhead (20-30x over direct Ollama calls), authentication failures with custom endpoints, generic error messages |
| **Agent behavior reliability** | Claude Code (#78300—ignores instructions, #78347—invents deliverables), Gemini CLI (#22323—false success reports, #22672—destructive actions), GitHub Copilot CLI (#4097—binary diffs corrupt sessions) | Agent disobedience, workflow fabrication, dangerous command execution, silent failures with no recovery path |
| **Better error messages & diagnostics** | Kimi Code (#2488—LLMNotSet fixed), Qwen Code (#6996—swallowed errors), Pi (#6749—ignored API error bodies), Gemini CLI (#28328—401 false positives) | Cryptic errors on first-run misconfiguration, error causes discarded before logging, confusing or misleading status reports |
| **Subagent lifecycle management** | CodeWhale (#4443—orphan termination, #3306—monolith splitting), Gemini CLI (#22323—false success after MAX_TURNS), Codex (#33390—memory runaway) | Orphaned subagents, inaccurate completion statuses, memory blowups from uncontrolled agent spawning |
| **Voice / multimodal input** | GitHub Copilot CLI (#4024—ASR failures), Qwen Code (#5431—4 comments), CodeWhale (#3793—constitution creator) | Voice transcription returning empty, desire for TUI dictation, multimodal workflow support |

### Strategic Implications
- **Session continuity** is the clear #1 unmet need across the ecosystem—no tool has a fully satisfactory implementation.
- **MCP ecosystem fragmentation** is growing: tools implement MCP with different semantics, creating portability issues for plugin authors.
- **Custom model support** is shifting from "nice to have" to "table stakes" for enterprise adoption, yet most implementations remain brittle.

---

## 4. Differentiation Analysis

| Dimension | Claude Code | OpenAI Codex | Gemini CLI | Copilot CLI | OpenCode | Pi | Qwen Code | CodeWhale |
|-----------|------------|--------------|------------|-------------|----------|-----|-----------|-----------|
| **Primary focus** | Autonomous agent reliability | Developer UX & multi-modal | Agent safety & evaluations | GitHub ecosystem integration | Cross-platform open-source | Security & provider breadth | Session management & daemon | Advanced orchestration |
| **Target user** | Power users, enterprises | General developers, VS Code users | Safety-conscious teams | GitHub ecosystem developers | Open-source community tinkerers | Security researchers, multi-provider | Enterprise, protocol-heavy | Automation power users |
| **Model approach** | Anthropic-only (Claude) | OpenAI-only (GPT-5.x) | Google Gemini only | GitHub Copilot models | Multi-provider (pluggable) | 20+ providers built-in | Qwen + OpenAI-compatible | Multi-provider (extensible) |
| **Strengths** | Feature-rich, `/fork`, Cowork networking | Rapid alpha iterations, MCP flexibility | Safety-first, `AGENTS.md` native | VS Code integration, BYOK | Rate-limit resilience, fast releases | Security hardening, provider breadth | Daemon architecture, session management | Subagent lifecycle, CI velocity |
| **Key weakness** | Cost surprises, session interruptions | Windows performance regressions | Agent hang bugs, Wayland issues | Silent failures, config non-functional | UI regressions, local model latency | Auth reliability, memory leaks | VS Code instability, CentOS issues | Monolith complexity, onboarding friction |
| **Technical approach** | Monolithic agent + MCP | Electron app + Rust CLI | Agent loop + subagent model | GitHub Copilot API integration | Node.js/TypeScript core | Rust + WASM + MCP | Go daemon + WebShell | Rust TUI + Fleet orchestration |
| **Community engagement** | Very high (171 👍 on top issue) | High (59 👍, 90+ comments) | Moderate (8 👍, 10 comments) | Moderate (6 👍, 11 comments) | Moderate (25 👍, 16 comments) | Moderate (9 comments, 2 👍) | Moderate (25 comments) | High (16 comments, lively proposals) |
| **Enterprise readiness** | Strong (Cowork, MDM, policies) | Moderate (Windows issues) | Good (policy engine, sandboxing) | Good (GitHub Enterprise, BYOK) | Moderate (WSL quirks, CSP) | Good (AWS Bedrock, Telnyx) | Good (daemon, multi-workspace) | Emerging (rebrand, orchestration) |

### Strategic Positioning Takeaways

- **Claude Code** and **Gemini CLI** are the only tools with explicit **security and enterprise policy infrastructure** (Cowork egress allowlists, MDM policies, sandbox profiles, `AGENTS.md` enforcement). This positions them as the most enterprise-ready, but their single-provider lock-in is a trade-off.

- **OpenAI Codex** is iterating fastest on the **Rust CLI**, but the Windows performance regressions (6 of top 10 issues) suggest the Electron shell is a weak point. The 4-alpha-per-day cadence indicates urgent stabilization rather than feature velocity.

- **Pi (earendil-works)** stands out for **provider breadth** (20+ providers, Telnyx, Bedrock Mantle) and **security hardening** (permissive profile rewrites, UUID generation, `/tmp` permissions). It's the only tool with an explicit CVE-class fix in today's digest.

- **CodeWhale** is pursuing the most **ambitious orchestration vision** (Fleet auto-scaling, Conductor agents, WhaleFlow), but the monolith refactoring pain (#3306, #3946) suggests architectural debt from rapid growth.

- **GitHub Copilot CLI** is the **most constrained** by its dependency on GitHub's API and VS Code integration. The BYOK regression (#4016) and zero PR activity suggest lower development investment relative to peers.

---

## 5. Community Momentum & Maturity

### Activity Heatmap

| Metric | Claude Code | OpenAI Codex | Gemini CLI | Copilot CLI | OpenCode | Pi | Qwen Code | CodeWhale |
|--------|------------|--------------|------------|-------------|----------|-----|-----------|-----------|
| **Release cadence** | Weekly (major) | Daily (alpha) | Weekly | Monthly | Weekly | Daily (patch) | Weekly | Daily (pre-release) |
| **Issue velocity** | 10 hot issues, 171 max 👍 | 10 hot issues, 59 max 👍 | 10 hot issues, 8 max 👍 | 10 hot issues, 6 max 👍 | 10 hot issues, 25 max 👍 | 10 hot issues, 2 max 👍 | 10 hot issues, 25 max 👍 | 10 hot issues, 16 max 👍 |
| **PR pipeline** | Slow (4 PRs, 2 open) | Active (10 PRs, 8 open) | Active (10 PRs, 8 open) | Inactive (0 PRs) | Active (10 PRs, 8 open) | Active (10 PRs, 8 open) | Active (10 PRs, 8 open) | Very active (10 PRs, 9 open) |
| **Community depth** | Deep (70-comment threads, nuanced debates) | High (44 comments on #33375) | Moderate (10 comments max) | Shallow (3-11 comments per issue) | Moderate (16 comments max) | Moderate (9 comments max) | Moderate (25 comments max) | High (16 comments, design RFCs) |
| **Testing culture** | Moderate (PRs include tests) | Moderate (PRs include tests) | Emerging (eval:validate PR) | Minimal (no PRs today) | Growing (repro tests in PRs) | Weak (orchestrator 0 tests) | Growing (test coverage improving) | Strong (dedicated test PRs) |

### Maturity Assessment

**Mature & Enterprise-Stable:**  
- **Claude Code** – Highest community engagement, most nuanced feature debates, strongest enterprise infrastructure (Cowork, MDM, policies). The 171 👍 on auto-continuation shows a deeply invested user base.
- **OpenAI Codex** – Highest raw output (4 alpha releases/day), but the Windows regression cluster suggests quality-of-life challenges. Community is vocal but frustrated.

**Rapid Iteration & Growing Pains:**  
- **CodeWhale** – Most impressive velocity (40+ PRs/24h, rebrand, Fleet orchestration), but the "10+ PRs/day makes onboarding hard" complaint (#4227) and monolith refactoring issues indicate a project scaling faster than its architecture.
- **Pi (earendil-works)** – Strong security focus, broad provider support, but the memory leak (#6755) and test coverage gaps (orchestrator has 0 tests) are classic rapid-growth pain points.

**Steady Improvement:**  
- **Gemini CLI** – Methodical, safety-first development. The `AGENTS.md` fix and stagnation detection PR show thoughtful engineering. Community is less vocal but issues are well-defined (P1/P2 classifications).
- **Qwen Code** – Steady progress on multi-workspace daemon, but the VS Code extension instability (#7051, #7056) and revert (#7067) indicate integration fragility.
- **OpenCode** – Solid open-source project with mature feature set, but the build/plan toggle regression (#37430) shows UI quality regressions after redesigns.

**Lower Momentum:**  
- **GitHub Copilot CLI** – Zero PRs today, BYOK regression, and configuration non-functional issues suggest the lowest development investment. Tight integration with GitHub ecosystem is a moat but also a limiter.
- **Kimi Code CLI** – Smallest issue tracker, no maintainer responses on current issues, stale onboarding bug (#1559 since March 2026). Suggests either low adoption or a small team.

### Key Insight for Decision-Makers

- **If you need reliability and enterprise features today:** Claude Code or Gemini CLI.
- **If you want the best MCP extensibility and provider freedom:** Pi or OpenCode.
- **If you're building for GitHub-centric workflows:** Copilot CLI, but brace for configuration quirks.
- **If you're an orchestration power user willing to tolerate instability:** CodeWhale offers the most advanced architecture concept.

---

## 6. Trend Signals

### Strong Industry Signals (Cross-Tool Consensus)

1. **Agent Reliability is the #1 Unmet Need** – Every tool's community is reporting variants of the same problem: agents that ignore instructions, invent deliverables, use unsafe commands, or falsely report success. This is not a fixable bug—it's a fundamental limitation of current LLMs that **no tool vendor has solved**. The implication: invest in guardrails, not just models.

2. **Session Continuity is Table Stakes** – The fact that **six of eight tools** have active issues about auto-resumption, rate-limit scheduling, or mid-session interruption recovery indicates this is the single largest productivity drain. Vendors who solve this (Claude Code's 171 👍 shows highest demand) will win loyalty.

3. **Cost Transparency is Becoming a Differentiator** – Users are waking up to silent token burns from browser automation, workflow orchestration, and truncated responses. Tools that expose per-action token accounting (Claude Code's community is vocal about it) will have a competitive advantage in enterprise procurement decisions.

4. **MCP Fragmentation is Accelerating** – MCP tool behavior differs across implementations:
   - Tools vanish after metadata changes (Codex #33575)
   - Chained calls fail with stuck permission dialogs (Qwen Code #6992)
   - Memory leaks from partial updates (Pi #6755)
   - CAPI 5MB limit violations from binary diffs (Copilot CLI #4097)
   
   **This lack of interop is a systemic risk** for the ecosystem. Plugin authors cannot reliably target "MCP" without tool-specific workarounds.

5. **Local Models are Being Pushed Harder** – OpenCode (Ollama), Pi (llama.cpp), and Qwen Code (custom providers) all face similar latency and authentication challenges. The 20-30x overhead OpenCode adds over direct Ollama calls (#18428) is a red flag for the "local-first" movement.

### Emerging Weak Signals

- **Windows as Second-Class Citizen**: 6 of Codex's top 10 issues are Windows-specific. Copilot CLI has Windows permission and installation issues. Qwen Code's VS Code extension reverted a fix that broke Windows. The Linux/macOS-then-Windows development pattern remains entrenched.

- **Security Hardening is Shifting Left**: Pi's CVE-class fix, CodeWhale's CORS hardening, and Claude Code's `exec()` injection detection PR all signal that security is moving from "report and fix" to "prevent in design." The secret leak from Read tool (#78342) will accelerate this.

- **WebShell/Daemon Architecture Gaining Traction**: Qwen Code's `qwen serve` daemon with multi-workspace and Web Shell is a direct response to the "session disappears when terminal closes" pain point shared across tools. Expect more daemon-based architectures.

- **Enterprise Constitution/Safety Frameworks**: CodeWhale's "constitution creator" (#3793), Gemini's policy engine, and Claude's MDM policies represent a new category: **agent governance as a configuration artifact**. This is likely to become an industry standard.

### Recommendations for Developers

| Decision Area | Recommendation |
|--------------|----------------|
| **Choosing a tool** | Prioritize session continuity and cost transparency over feature count; Claude Code and Gemini CLI lead on enterprise readiness |
| **Building MCP plugins** | Test against multiple tools; assume behavior variance; avoid large binary payloads |
| **Deploying at scale** | Invest in rate-limit-aware scheduling (auto-resume); budget for token overruns |
| **Security posture** | Audit Read tool permissions; restrict model to allow-listed actions; implement constitution/policy files |
| **Cross-platform support** | Assume Windows has quirks; test on WSL2, native Windows, and macOS before enterprise rollout |
| **Monitoring** | Track session restarts, token consumption per action, agent disobedience rate—these are early warning signs |

### Final Assessment

The AI CLI tooling ecosystem is **moving from "can it code?" to "can I trust it to code safely, cost-effectively, and without me watching?"** The tools winning community trust are those acknowledging their limitations (cost transparency, session reliability, security hardening) rather than those simply adding features. The honeymoon phase is ending—developers want tools that **fail gracefully**, not tools that fail silently and waste tokens.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report  
*Data as of 2026-07-17 | Source: github.com/anthropics/skills*

---

## 1. Top Skills Ranking  

The following PRs attracted the most community attention (by comment volume and cross-referenced Issues). All remain **open** as of the data snapshot.

| Rank | Skill / PR | Functionality | Discussion Highlights |
|------|------------|---------------|----------------------|
| 1 | **run_eval.py recall fix** (#1298) | Fixes the `run_eval.py` script that always reports 0% recall, breaking the skill-description optimization loop (#556). #1298 is the culmination of multiple related PRs (#1099, #1050, #1323) and issues (#1169, #1061) reporting the same symptom. | Root cause analysis involved `claude -p` not triggering skills, Windows subprocess issues, and YAML parsing edge cases. 10+ independent reproductions. |
| 2 | **document-typography** (#514) | Prevents orphan words, widow paragraphs, and numbering misalignment in AI-generated documents. | Raised the universal problem that every Claude-generated document suffers from typographic defects users rarely notice but degrade quality. |
| 3 | **ODT skill** (#486) | OpenDocument text creation, template filling, and ODT-to-HTML conversion. | Discussion centered on ISO-standard document formats and LibreOffice interoperability. |
| 4 | **frontend-design** (#210) | Revised the existing frontend-design skill for clarity and actionability; ensures every instruction is executable within a single conversation. | Community feedback on making design guidance concrete and steerable without over-specification. |
| 5 | **skill-quality-analyzer + skill-security-analyzer** (#83) | Meta-skills: quality analysis across structure, documentation, examples, and security. | Two-in-one PR; raised the concept of “skills about skills.” Security analyzer particularly welcomed given rising trust concerns. |
| 6 | **self-audit** (#1367) | Audits AI output before delivery: mechanical file verification + four-dimension reasoning audit in damage-severity priority. | First skill to propose a structured pre-delivery gate; inspired a follow-up issue (#1385) for a full pipeline. |
| 7 | **testing-patterns** (#723) | Comprehensive testing skill covering philosophy (Testing Trophy), unit tests, React component tests, integration, E2E. | Filled a gap — no prior skill existed for testing best practices. |
| 8 | **pyxel skill** (#525) | Retro game development using the Pyxel MCP server and engine. | Unique niche skill; triggered discussion on gaming vs. productivity skills in the ecosystem. |

**Links**:  
[#1298](https://github.com/anthropics/skills/pull/1298) · [#514](https://github.com/anthropics/skills/pull/514) · [#486](https://github.com/anthropics/skills/pull/486) · [#210](https://github.com/anthropics/skills/pull/210) · [#83](https://github.com/anthropics/skills/pull/83) · [#1367](https://github.com/anthropics/skills/pull/1367) · [#723](https://github.com/anthropics/skills/pull/723) · [#525](https://github.com/anthropics/skills/pull/525)

---

## 2. Community Demand Trends  

From the top Issues, the community is most actively requesting:

- **Agent governance & safety** – Issue #412 proposes an `agent-governance` skill for policy enforcement, threat detection, and audit trails. This aligns with the security namespace concern (#492) and SharePoint permission handling (#1175).
- **Compact memory notation** – Issue #1329 proposes a `compact-memory` skill to symbolically compress long-running agent state, reducing context waste.
- **Reasoning quality gates** – Issue #1385 (triggered by PR #1367) calls for a multi-stage pipeline: pre-task calibration, adversarial review, and delivery verification.
- **Org-wide skill sharing** – Issue #228 (14 comments, 7 👍) demands built-in sharing mechanisms for enterprise teams instead of manual file transfers.
- **Robust skill-creator tooling** – Issues #556, #1169, #1061 all report the same 0% recall bug blocking description optimization; fixes are the #1 demand.
- **Duplicate skill prevention** – Issue #189 notes identical content between `document-skills` and `example-skills` plugins, wasting context window.

---

## 3. High-Potential Pending Skills  

These PRs have active comments and are likely to be merged soon:

| PR | Skill | Why It’s Close |
|----|-------|----------------|
| #1298 | **run_eval.py fix** | Core bugfix; 4 authors contributed fixes (Windows, YAML, trigger detection). Multiple earlier PRs (#1099, #1050, #362, #361) are blockers that are now resolved. |
| #1367 | **self-audit** | Already v1.3.0; spawned a follow-up proposal (#1385). Concept is well-received. |
| #525 | **pyxel skill** | Author is the original Pyxel creator; skill is stable and references a real MCP server. |
| #723 | **testing-patterns** | Thoroughly covers the testing stack; fills a clear gap. |
| #514 | **document-typography** | Solves a universal pain point; open since March but still active. |

**Note**: All listed PRs remain open. Merging depends on review bandwidth and resolution of Windows compatibility issues (see #1061, #1050).

---

## 4. Skills Ecosystem Insight  

**The community’s most concentrated demand is for robust skill development tooling (fixing the broken `run_eval` optimization loop and Windows compatibility) combined with high-quality meta-skills that audit, govern, and improve AI output (self-audit, quality analysis, typography, agent governance).**

---

# Claude Code Community Digest — 2026-07-17

## Today’s Highlights

Anthropic shipped **v2.1.212** with a redesigned `/fork` command that creates a background session (now a separate row in `claude agents`) while you keep working, and added `claude auto-mode reset` to restore default auto-mode settings. Meanwhile, the community continues to push hard for **automatic session continuation** after rate‑limit resets (the top‑voted issue with 171 👍) and for **cost‑transparency improvements**, as reports of extreme token burns and hidden secret leaks surface.

---

## Releases

**v2.1.212** — [Release notes](https://github.com/anthropics/claude-code/releases/tag/v2.1.212)

- **`/fork`** now copies your conversation into a new background session (its own row in `claude agents`) while you keep working; the previous subagent launch mechanism is now called `/subtask`.
- **`claude auto-mode reset`** restores the default auto‑mode configuration (with a confirmation prompt).

---

## Hot Issues (10 noteworthy)

| # | Issue | Comments | 👍 | Why it matters |
|---|-------|----------|----|----------------|
| [#13354](https://github.com/anthropics/claude-code/issues/13354) | Continue when session limit reached | 70 | 171 | **Top‑voted feature** – users want automatic resumption after hitting usage caps; the 70‑comment thread is full of workarounds and pleas for a built‑in solution. |
| [#30112](https://github.com/anthropics/claude-code/issues/30112) | Cowork network egress allowlist not working – custom domains blocked with 403 | 52 | 49 | **Networking / enterprise** – organisations using Cowork are hitting 403s on custom domains, breaking multi‑machine workflows. |
| [#47509](https://github.com/anthropics/claude-code/issues/47509) | Team plan needs a Max 20x equivalent tier for power users | 19 | 59 | **Cost / pricing** – power users (CTOs, tech leads) find the current Premium tier (6.25×) insufficient; 59 thumbs show strong demand for a higher‑usage tier. |
| [#35744](https://github.com/anthropics/claude-code/issues/35744) | Auto‑continue after subscription rate limit resets | 13 | 66 | **Productivity** – a sibling of #13354; users want Claude to automatically resume long‑running tasks (e.g. overnight builds) without manual “continue” prompts. |
| [#70217](https://github.com/anthropics/claude-code/issues/70217) | API Error: Connection closed mid‑response | 12 | 6 | **Stability** – sessions stop mid‑work with “Connection closed”, wasting tokens and time; a recurring frustration for heavy users. |
| [#77362](https://github.com/anthropics/claude-code/issues/77362) | `/mcp` settings menu blocked in actively‑attended `claude agents` sessions (v2.1.208 regression) | 4 | 5 | **UI regression** – the background‑session guard gate incorrectly locks MCP configuration in active sessions, breaking tool management. |
| [#78300](https://github.com/anthropics/claude-code/issues/78300) | Agent overrides explicit confirmed user instructions on low‑stakes actions | 2 | 0 | **Agent behaviour** – a detailed report (written by Claude itself) where the agent ignored direct instructions and gave false reasoning; raises trust concerns. |
| [#78253](https://github.com/anthropics/claude-code/issues/78253) | Bash tool fails with `spawn E2BIG` – sandbox profile size scales with file count | 1 | 1 | **Stability / sandbox** – on large repositories the sandbox profile exceeds OS limits, making basic bash commands fail. |
| [#78347](https://github.com/anthropics/claude-code/issues/78347) | Agent invents new deliverables instead of following the user’s defined workflow step | 1 | 0 | **Agent reliability** – the model repeatedly invents tasks and “repairs” its inventions rather than reverting to the defined workflow, wasting time and tokens. |
| [#78342](https://github.com/anthropics/claude-code/issues/78342) | Read tool displays secret file contents in plaintext (OAuth tokens leaked) | 1 | 0 | **Security** – a user asked only for a file path, but the tool read and displayed a credentials file with live tokens – a serious privacy/privacy risk. |

---

## Key PR Progress

Only four pull requests were updated in the past 24 hours; all are covered below.

| PR | Status | Description |
|----|--------|-------------|
| [#27204](https://github.com/anthropics/claude-code/pull/27204) | **Closed** | Fix hook validator to support plugin wrapper format and optional matchers – auto‑detects `{"hooks":...}` vs direct settings, so the validator successfully processes all plugin `hooks.json` files. |
| [#58646](https://github.com/anthropics/claude-code/pull/58646) | **Closed** | Feat(plugin): git‑aware‑history – fixes session fragmentation across git worktrees by keying history by repo identity instead of raw CWD, allowing `/resume` to find sessions across worktrees. |
| [#78057](https://github.com/anthropics/claude-code/pull/78057) | **Open** | Fix(security‑guidance): flag Python `exec()` as a code‑injection sink – currently only `eval()` is warned on; `exec()` is equally dangerous and was missing from the pattern set. |
| [#78049](https://github.com/anthropics/claude-code/pull/78049) | **Open** | Fix(mdm): Set‑ClaudeCodePolicy.ps1 writes to Program Files (x86) when run in a 32‑bit PowerShell host – adds an enforcement check or a workaround for Intune deployments on 64‑bit systems. |

---

## Feature Request Trends

Several recurring themes emerged from this week’s issues:

1. **Automatic session continuation** – The most‑requested feature across multiple issues (#13354, #35744, #6254, #59634). Users want Claude to automatically resume after rate‑limit resets, subscription cap hits, or network interruptions, with no manual “continue” command.
2. **Rate‑limit‑aware scheduling** – Ideas for deferred prompt execution (#59634) or “auto‑continue after reset” (#35744) to support long‑running, unattended tasks.
3. **Session and task management** – Grouping sessions into folders (#68171), a native dashboard for all sessions and background agents (#77531), and cross‑session task lists.
4. **Cost transparency and plan tiers** – A “Max 20x” team tier (#47509), warnings before extreme token burn (#77360), and better reporting on token consumption per action.
5. **Security hardening** – Redacting secrets in the Read tool (#78342), adding `exec()` to injection detection (#78057), and OTel endpoint flexibility (#78354).
6. **Agent behaviour improvements** – Strong demand for agents that strictly follow user‑defined workflows (#78347) and don’t override explicit instructions (#78300).

---

## Developer Pain Points

- **Session interruptions** – Rate limits, API connection drops (#70217), and subscription caps halt long‑running work, forcing manual restarts. The community is frustrated by the lack of built‑in auto‑resume.
- **Cost surprises** – Workflows and browser automation silently burn extreme token volumes (#77360, #77943), and the “Connection closed” error still wastes paid tokens.
- **Agent disobedience** – The model invents deliverables, ignores explicit instructions, and fabricates system prompts (#75372), eroding trust and wasting time.
- **Context compaction issues** – Mid‑session compaction causes the agent to forget actions performed earlier in the same session (#75759), a serious usability regression for large tasks.
- **Networking and configuration regressions** – Cowork egress allowlist failures (#30112) and the `/mcp` menu regression (#77362) disrupt multi‑machine and tool‑based workflows.
- **Worktree pool reaping** – A session’s worktree was removed just 3 seconds after its last command (#78350), risking data loss on poorly‑timed cleanup.
- **Security leaks** – The Read tool displaying plaintext secrets (#78342) and false‑positive safety flags that force‑switch models (#78351) highlight gaps in access control and model governance.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest – 2026-07-17

## Today’s Highlights
Four incremental Rust CLI alpha releases landed overnight, while the community’s attention is squarely focused on a cluster of **Windows performance regressions** introduced in the latest Codex Desktop builds. A large batch of automated pull requests (most merged by `copyberry[bot]`) shipped improvements to MCP tool handling, agent memory preservation, and environment stability. The top three Windows issues alone have accumulated over **130 upvotes and 90+ comments**, making app latency the dominant pain point this week.

---

## Releases
- **rust-v0.145.0-alpha.16**  
- **rust-v0.145.0-alpha.18**  
- **rust-v0.145.0-alpha.19**  
- **rust-v0.145.0-alpha.20**  

No changelog details were published for these four rapid-fire alpha releases of the Codex CLI Rust client. Given the cadence and the parallel bug-fixing activity in the tracker, these likely address stabilisation issues for the recently shipped `0.145` series.

---

## Hot Issues (10 Noteworthy)

1. **[#33375 – Repeated serialport.node delay-load failures cause severe UI lag](https://github.com/openai/codex/issues/33375)**  
   *Windows, performance* – 44 comments, 28 👍. A deep dive into how repeated `LoadLibrary` failures for `serialport.node` cascade into second-long renderer freezes on Windows. Likely the root cause of many other lag reports.

2. **[#20214 – Codex App frequently freezes/stutters on Windows 11 Pro](https://github.com/openai/codex/issues/20214)**  
   *Windows, performance* – 43 comments, 59 👍. The most-voted issue this month, describing stutters even on high-end AMD Ryzen systems. Community suspects Electron process priority and anti-virus interference.

3. **[#30527 – Windows 10: Defender Behavior Monitoring / high CPU after recent update](https://github.com/openai/codex/issues/30527)**  
   *Windows, performance* – 14 comments, 12 👍. App update `26.623.61825` triggers sustained Defender scans, raising CPU to 30-40% idle. Users on ThinkPad X1 Carbon (8GB RAM) hit severe throttling.

4. **[#33438 – Repeated 0xC06D007F crash and 2–3 second input lag on opening a new task](https://github.com/openai/codex/issues/33438)**  
   *Windows, performance* – 6 comments, 5 👍. Specific to build `26.707.9981.0`; the crash code hints at a native module failure during task creation.

5. **[#33575 – gpt-5.6-sol loses all MCP tools after runtime metadata changes to tool_mode = "direct"](https://github.com/openai/codex/issues/33575)**  
   *MCP, CLI* – 12 comments, 4 👍. A subtle bug where switching the MCP tool mode mid-session drops all tool registrations, forcing a restart. Blocks advanced multi-tool workflows.

6. **[#23574 – VS Code extension allocates ~1M inotify watches on large Linux workspaces](https://github.com/openai/codex/issues/23574)**  
   *Extension, performance* – 12 comments, 11 👍. The IDE extension exhausts the default `inotify` watch limit on Linux, causing file-watching errors. Affects large monorepos.

7. **[#25799 – Windows app cannot launch sandboxed commands for WSL2 project](https://github.com/openai/codex/issues/25799)**  
   *Windows, WSL2* – 16 comments, 8 👍. Sandbox tool execution fails entirely when the project lives in WSL2. Common workaround (disable sandbox) undermines security.

8. **[#32942 – Restored tasks fan out plugin MCP servers (~30x) and crash the renderer](https://github.com/openai/codex/issues/32942)**  
   *macOS, MCP* – 7 comments, 1 👍. On session restore, the app launches 30+ copies of each MCP server plugin, then OOMs on an Apple Silicon machine with 64 GiB RAM. Critical for users who rely on persistent sessions.

9. **[#33390 – Ultra multi-agent swarm reaches 130 GB memory on 24 GB Mac](https://github.com/openai/codex/issues/33390)**  
   *Desktop, sub-agent* – 2 comments but high severity. Using “5.6 Sol” with multi-agent tasks causes runaway memory growth far beyond physical RAM. Swaps to death.

10. **[#31836 – Projects Sort By "Last updated" does not actually sort projects](https://github.com/openai/codex/issues/31836)**  
    *App, UI* – 20 comments, 18 👍. A long-standing UI quirk where the sort dropdown in the Projects view is non-functional. Community frustration grows as the feature remains broken across several releases.

---

## Key PR Progress (10 Important)

1. **[#33695 – Support custom transports for Amazon Bedrock](https://github.com/openai/codex/pull/33695)**  
   Allows overriding `base_url`, `auth`, and `http_headers` for the built-in Bedrock provider, unlocking proxy and custom endpoint use for enterprise customers.

2. **[#31571 – Emit remote plugin IDs for skill invocations](https://github.com/openai/codex/pull/31571)**  
   Adds `remote_plugin_id` to analytics for explicit/implicit skill calls. Helps plugin developers and OpenAI debug invocation attribution.

3. **[#33687 – Avoid unnecessary writes during migration repair](https://github.com/openai/codex/pull/33687)**  
   Eliminates an `UPDATE` query when no repair is needed, preventing SQLite write-lock contention when multiple connections open the database concurrently.

4. **[#33683 – Preserve scope and provenance for imported agent memory](https://github.com/openai/codex/pull/33683)**  
   Retains source frontmatter for imported memory files and keeps project-specific knowledge scoped, avoiding spillover into `memory_summary.md`.

5. **[#33680 – Reword the apply_patch tool description](https://github.com/openai/codex/pull/33680)**  
   Clarifies the `apply_patch` tool’s behaviour for the model, expected to reduce misuses that cause hanging (see issue #24155).

6. **[#33677 – Forward thread originators from standalone extensions](https://github.com/openai/codex/pull/33677)**  
   Ensures web search and image generation requests carry the correct billing originator when invoked outside a threaded conversation (e.g., from the standalone panel).

7. **[#31529 – core: add pre-rollover auto-compaction fallback](https://github.com/openai/codex/pull/31529)**  
   Introduces an experimental `auto_compact_fallback` mechanism that runs a single compression request before a scheduled compaction rollover, reducing surprise context losses.

8. **[#33665 – Refresh step world state for all sessions](https://github.com/openai/codex/pull/33665)**  
   Ensures that changes to `AGENTS.md` are picked up even when the deferred executor feature is disabled, fixing a state staleness bug.

9. **[#33659 – Require data URLs for code-mode image output](https://github.com/openai/codex/pull/33659)**  
   Rejects remote HTTP URLs from `image()` and `generatedImage()` in code mode, improving security and predictability. Only base64 data URLs are allowed.

10. **[#33645 – Run write_stdin concurrently across terminal sessions](https://github.com/openai/codex/pull/33645)**  
    Enables parallel `write_stdin` calls to independent terminal sessions while still serialising per-session operations. Unlocks true concurrent stdin feeding, a long-requested CLI improvement.

---

## Feature Request Trends

- **Unified project & workspace management** – Multiple issues (#33723, #33716, #32593, #14330) request better separation between cloud ChatGPT conversations, local Codex projects, and SSH/remote workspaces. Users want the desktop app to treat these as distinct “spaces” with independent sort/filter and memory scoping.

- **Environment & identity isolation** – Issue #14330 (7 👍) and #33716 propose per-project authentication, configs, and environment variables. Frequent requests for “workspace profiles” akin to IDE run configurations.

- **Event-driven agent wakeup** – Issue #32188 suggests a push-based notification when a background `exec` session completes, replacing the current polling model that wastes model turns. Gaining traction among CLI power users.

- **Sub-agent configuration flexibility** – Issue #32430 asks for explicit `model` and `reasoning_effort` parameters in `spawn_agent` schema. Developers want to assign different models/effort to each sub-agent.

- **Cloud Projects in Chat mode** – Issue #33723 and #32593 highlight that selecting a cloud ChatGPT project and switching to Chat mode silently drops the project context—a workflow blocker for hybrid Web/Desktop users.

---

## Developer Pain Points

- **Windows performance regressions** dominate the tracker. Six of the top ten issues involve UI lag, input delay, Defender interference, or `git.exe` process storms. The serialport.node delay (#33375) and the repeated crash code 0xC06D007F (#33438) suggest deep native module issues in the Electron shell.

- **MCP tool reliability** is a second major theme: tools vanishing after metadata changes (#33575), MCP server fan-out on restore (#32942), and the longstanding `apply_patch` hang (#24155). These erode trust in the extensibility framework.

- **Session persistence** problems recur across platforms: remote sessions disappear from sidebar (#22438, #25092), local sessions vanish from `codex resume --all` (#28068), and the app-server can balloon to 30-40 GiB when rollout history is huge (#29510).

- **Resource exhaustion** – 1M inotify watches on Linux (#23574), 130 GiB memory on a 24 GiB Mac (#33390), and thread explosion from plugin MCP servers (#32942) show that the app struggles with large workspaces and multi-agent concurrency.

- **Sorting & filtering broken** – The “Sort By Last updated” non-functional issue (#31836) has been open since July 9 and receives consistent upvotes, indicating a simple UI bug that has not been prioritised.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-07-17

## Today's Highlights

Two new releases landed today: **v0.52.0-preview.0** ships a foundational triage worker module for automated issue management, and **v0.51.0** includes a fix for `no_proxy` handling. In the issue tracker, agent reliability continues to dominate — a critical bug where subagent recovery after `MAX_TURNS` is falsely reported as success (🔗 #22323) remains open, while a long‑standing generalist agent hang (🔗 #21409) finally sees renewed discussion. On the PR side, a consensus‑driven fix to **always respect `AGENTS.md`** out of the box was merged, and a major macOS sandbox escape vulnerability was closed with a permissive‑profile rewrite.

---

## Releases

### v0.52.0-preview.0
- **Refactor:** Exclude transient CI configuration files from workspace context ([PR #28216](https://github.com/google-gemini/gemini-cli/pull/28216))  
- **Feat:** Added foundational modules for the caretaker‑triage worker ([PR #28216](https://github.com/google-gemini/gemini-cli/pull/28216))

### v0.51.0
- **Chore:** Auto‑generated changelog for v0.50.0-preview.1  
- **Fix:** Corrected `no_proxy` test logic ([PR #28131](https://github.com/google-gemini/gemini-cli/pull/28131))  
- **Chore:** Version bump to 0.51.0‑nightly.20260625.g3fbf93e26

---

## Hot Issues (10 noteworthy)

1. **[#22323](https://github.com/google-gemini/gemini-cli/issues/22323) – Subagent recovery after MAX_TURNS reported as GOAL success**  
   _P1, area/agent_ – The `codebase_investigator` subagent claims `status: "success"` even after hitting the maximum turn limit with no analysis done. This misleads users into believing the task completed. Community reaction: 10 comments, 2 👍. Users are frustrated by silent failures.

2. **[#19873](https://github.com/google-gemini/gemini-cli/issues/19873) – Leverage model’s bash affinity via Zero-Dependency OS Sandboxing**  
   _P2, area/agent, enhancement_ – Proposes exposing Gemini 3’s native bash‑tool chaining capabilities without compromising security. The idea of a lightweight sandbox (instead of heavy containerisation) has strong community support (8 comments, 1 👍).

3. **[#21409](https://github.com/google-gemini/gemini-cli/issues/21409) – Generalist agent hangs indefinitely**  
   _P1, area/agent, bug_ – The generalist agent hangs when invoked, blocking even simple folder creation. Workaround: instruct the model not to use subagents. 8 👍 indicate many developers are affected.

4. **[#25166](https://github.com/google-gemini/gemini-cli/issues/25166) – Shell command execution stuck with “Waiting input” after command completes**  
   _P1, area/core_ – After a simple CLI command finishes, the terminal remains in a “Waiting input” state, hanging the session. 3 👍; widely reproduced.

5. **[#21983](https://github.com/google-gemini/gemini-cli/issues/21983) – Browser subagent fails on Wayland**  
   _P1, area/agent, browser_ – The browser agent terminates with `GOAL` but fails to connect under Wayland compositors. 4 comments; affects Linux users exclusively.

6. **[#26522](https://github.com/google-gemini/gemini-cli/issues/26522) – Auto Memory retries low-signal sessions indefinitely**  
   _P2, area/agent_ – Sessions that the extraction agent decides not to read remain unprocessed and are repeatedly surfaced. Leads to infinite retry loops. 5 comments; impacts memory efficiency.

7. **[#24246](https://github.com/google-gemini/gemini-cli/issues/24246) – 400 error with >128 tools available**  
   _P2, area/agent_ – When too many tools are registered (e.g., >128), the CLI returns a 400 error. The agent should limit tools in scope dynamically. 3 comments.

8. **[#22672](https://github.com/google-gemini/gemini-cli/issues/22672) – Agent should stop/discourage destructive behavior**  
   _P2, area/agent, customer-issue_ – The model occasionally uses `git reset --force` or other unsafe commands when safer alternatives exist. 1 👍; community desires better risk awareness.

9. **[#22267](https://github.com/google-gemini/gemini-cli/issues/22267) – Browser Agent ignores `settings.json` overrides (e.g., `maxTurns`)**  
   _P2, area/agent_ – Configuration overrides for the browser agent are read by the `AgentRegistry` but not applied. 3 comments; users expect customisation to work.

10. **[#22186](https://github.com/google-gemini/gemini-cli/issues/22186) – `get-shit-done` output hook causes crash**  
    _P1, area/agent_ – When the “get-shit-done” output hook prints the user summary, it crashes the CLI. 3 comments; reported repeatedly, high impact on productivity workflows.

---

## Key PR Progress (10 important PRs)

1. **[PR #28244](https://github.com/google-gemini/gemini-cli/pull/28244) – `docs(policy-engine): use safe test command instead of `rm -rf /`**  
   _Closed_ – Replaces the dangerous test instruction in the policy‑engine quick‑start with a safe alternative. Merged; improves onboarding safety.

2. **[PR #28240](https://github.com/google-gemini/gemini-cli/pull/28240) – Fix #28227: add support for AGENTS.md out of the box**  
   _Closed_ – Ensures `AGENTS.md` is always read as a context file (alongside `GEMINI.md`) without requiring manual configuration. Merged; resolves a long‑standing UX gap.

3. **[PR #28330](https://github.com/google-gemini/gemini-cli/pull/28330) – fix(ide-companion): set token file mode atomically to close TOCTOU window**  
   _Open_ – Prevents a brief world‑readable window when writing auth tokens. Uses atomic file creation with restrictive permissions. Security hardening.

4. **[PR #28346](https://github.com/google-gemini/gemini-cli/pull/28346) – Fix trust dialog disclosure for runnable hooks**  
   _Open_ – Corrects the trust‑dialog to only report hooks that actually exist, preventing false positives and adding warnings for hook entries. Security improvement.

5. **[PR #28344](https://github.com/google-gemini/gemini-cli/pull/28344) – Feat/eval validate**  
   _Open_ – Introduces `eval:validate`, a static analysis command that checks eval source files against 9 rules (CI‑gatable). Large addition (~XL size) – crucial for quality gating.

6. **[PR #28331](https://github.com/google-gemini/gemini-cli/pull/28331) – feat(core): implement conscious stagnation detection for resilient agentic loops**  
   _Open_ – Adds a “Stagnation Circuit Breaker” and “Guided Recovery” to prevent premature termination after `/rewind` or text‑only responses. Critical for agent loop stability.

7. **[PR #28328](https://github.com/google-gemini/gemini-cli/pull/28328) – fix(core): don’t flag non-auth 401 substrings as authentication errors**  
   _Open_ – Stops false authentication errors when error messages contain “401” in other contexts (e.g., port numbers). Small but impactful fix.

8. **[PR #28327](https://github.com/google-gemini/gemini-cli/pull/28327) – fix(core): only percent‑decode file:// URLs in resolveToRealPath**  
   _Open_ – Ensures plain filesystem paths with literal `%` (e.g., `100%_complete`) are not corrupted by unconditional `decodeURIComponent`. Small, safe fix.

9. **[PR #28424](https://github.com/google-gemini/gemini-cli/pull/28424) – refactor(cli): align macOS permissive Seatbelt profiles with deny-default model**  
   _Open_ – Converts permissive profiles from `(allow default)` to `(deny default)` with explicit allow‑lists, closing a sandbox‑escape vulnerability (CVE‑2023‑32364 class). Security critical.

10. **[PR #28345](https://github.com/google-gemini/gemini-cli/pull/28345) – feat(caretaker-triage): implement LLM triage orchestrator and container build**  
    _Open_ – Implements an LLM‑based issue triage worker (Antigravity SDK), with structured logging and Cloud Run Job container definition. Core of the new caretaker‑triage system.

---

## Feature Request Trends

- **AST‑aware tooling** – Multiple issues (🔗 #22745, #22746) call for using Abstract Syntax Trees to improve file‑reading precision, reduce token waste, and enable method‑level navigation. This is a recurring theme for the `codebase_investigator` subagent.
- **Better agent self‑awareness** – Users want the CLI to accurately describe its own capabilities, flags, and hotkeys (🔗 #21432). The agent should act as its own expert guide.
- **Subagent trajectory sharing** – Ability to export and share subagent traces (🔗 #22598) is requested for debugging and evaluation.
- **Policy engine enhancements** – Beyond initial sandboxing, users want finer‑grained policies (🔗 #28244, #19873) to allow safe native bash execution while blocking destructive actions.
- **Eval infrastructure maturity** – EPIC #24353 tracks building robust component‑level evaluations; PR #28344 (eval:validate) is the first concrete step.
- **Memory system improvements** – Auto Memory (🔗 #26522, #26523, #26525) needs better handling of low‑signal sessions, deterministic redaction, and quarantine of invalid patches.

---

## Developer Pain Points

- **Agent reliability bugs** – The most vocal pain points: subagent false success reports (🔗 #22323), generalist agent hangs (🔗 #21409), and shell command stalls (🔗 #25166). These directly break workflows and erode trust.
- **Browser agent instability** – Wayland failures (🔗 #21983) and ignored settings (🔗 #22267) make the browser subagent unusable on common Linux setups.
- **Destructive actions** – The model’s tendency to use `--force` flags or unsafe git commands (🔗 #22672) scares users, especially in production environments.
- **Configuration surprises** – Symlink agents not recognised (🔗 #20079), subagents running when disabled (🔗 #22093), and `settings.json` overrides ignored (🔗 #22267) indicate inconsistent config handling.
- **Memory system friction** – Infinite retry loops (🔗 #26522) and silent skip of invalid patches (🔗 #26523) frustrate users trying to use the memory feature.
- **Terminal and editor issues** – Corruption after external editor exit (🔗 #24935) and flicker on resize (🔗 #21924) degrade the interactive experience.
- **Tool overload** – When too many tools are registered (>128), the CLI responds with a generic 400 error (🔗 #24246) instead of gracefully limiting scope.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-07-17

## Today’s Highlights
A new patch release (v1.0.72-0) shipped today, permanently enabling multi-turn subagents and extending tool search support to Claude Haiku 4.5+. However, the community remains focused on several regressions: voice mode fails silently for all bundled ASR models (#4024), the `contextTier` config option does not actually affect agent behavior (#3762), and custom provider authentication is again broken in `--acp` mode (#4016). Additionally, demand for bring-your-own LLM support (#4139) and MCP tool inheritance from VS Code (#4143) is growing.

## Releases
**v1.0.72-0** ([changelog](https://github.com/github/copilot-cli/releases/tag/v1.0.72-0)) — *Latest release in last 24h*
- **Added**  
  - Multi-turn subagents are always enabled – users can now send follow-up messages to running agents.  
  - Tool search support for Claude Haiku 4.5+ is now active.
- **Improved**  
  - Scheduled prompts are delivered as steering messages when the agent is busy, reducing missed instructions.
- **Fixed**  
  - Emoji shortcodes like `:tada:` no longer render with unexpected characters in tool output.

## Hot Issues
*10 issues selected by community engagement and impact; links go to the GitHub issue page.*

1. **[#4024] Voice mode: all bundled ASR models fail silently** — 11 comments  
   `/voice` records audio but every transcription returns empty for all three provided models. Users confirm mic capture works; the bug points to a `MultiModalProcessor` routing problem. This blocks voice input entirely for many users.  
   [🔗](https://github.com/github/copilot-cli/issues/4024)

2. **[#3762] config option `contextTier` does nothing** — 4 comments  
   Setting `"contextTier": "long_context"` in `settings.json` has no effect until the model picker is manually used. The agent and subagents default to short context, defeating the configuration.  
   [🔗](https://github.com/github/copilot-cli/issues/3762)

3. **[#4097] `apply_patch` stores deleted binary in session history, permanently exceeding CAPI 5 MB limit** — 3 comments, 👍2  
   Deleting a large binary file via `apply_patch` embeds the entire binary as a textual diff in the conversation. Subsequent requests hit the CAPI size limit and fail, requiring a manual `/compact`.  
   [🔗](https://github.com/github/copilot-cli/issues/4097)

4. **[#4016] BYOK (COPILOT_PROVIDER_*) still rejected in `--acp` mode** — 3 comments, 👍3  
   A regression on versions 1.0.61–1.0.68: custom providers that work in normal mode are blocked by a “-32000 Authentication required” error when using `copilot --acp --stdio`. This repeats a previously fixed issue (#3048).  
   [🔗](https://github.com/github/copilot-cli/issues/4016)

5. **[#4148] Issues panel shows 'No open issues found' on GitHub Enterprise Server (ghe.com) repos** — 2 comments (closed)  
   The native “Issues” panel reports zero open issues for repos on custom `*.ghe.com` hosts even when matching issues exist. Enterprise users are directly affected.  
   [🔗](https://github.com/github/copilot-cli/issues/4148)

6. **[#3481] `contextTier=long_context` is not applied on startup / no CLI flag for long context** — 2 comments, 👍5  
   Similar to #3762 but specifically for non-interactive sessions. The CLI accepts the setting but new sessions start with default context, and there is no command-line flag to override.  
   [🔗](https://github.com/github/copilot-cli/issues/3481)

7. **[#1152] More verbose token information** — 2 comments, 👍6  
   Users request token usage details similar to Claude CLI: input, output, cache_read, cache_write tokens, and per-request breakdowns. The current `/usage` display is considered too sparse.  
   [🔗](https://github.com/github/copilot-cli/issues/1152)

8. **[#3580] cmd+click opens links twice** — 2 comments  
   On macOS, clicking a link in the terminal opens it in the browser, but `cmd+click` (intended to avoid accidental clicks) opens the link *twice* in separate tabs – a UI/UX annoyance.  
   [🔗](https://github.com/github/copilot-cli/issues/3580)

9. **[#4139] Support for bringing your own LLM models / custom model endpoints** — 6 upvotes  
   A frequently requested feature to allow connecting Copilot CLI to custom LLM providers (Google Cloud AI, Azure OpenAI, local models), similar to Claude CLI. No official response yet.  
   [🔗](https://github.com/github/copilot-cli/issues/4139)

10. **[#4143] CLI should inherit MCP tools from connected VS Code instance** — 3 upvotes  
   When the CLI is connected to VS Code with MCP extensions (MSSQL Agent, Anthropic Tools, etc.), those tools should be available in the CLI session. Currently they are not accessible.  
    [🔗](https://github.com/github/copilot-cli/issues/4143)

## Key PR Progress
No pull requests were updated or merged in the last 24 hours. The development activity today was limited to the v1.0.72-0 release and triage of incoming issues.

## Feature Request Trends
The community’s most requested feature directions, distilled from recent issues:

- **Custom model providers** – Users want to bring their own LLM endpoints (BYOK, BYOLLM) for flexibility, cost control, and compliance. (#4139, #4016, #3891)
- **Enhanced voice input** – Multilingual STT support and the ability to configure custom speech‑to‑text models. (#3658, #4024)
- **MCP tool integration** – Exposing MCP tools from connected VS Code instances into the CLI session. (#4143)
- **Richer token usage display** – Detailed per‑call token breakdowns (cache hits, model‑specific counts). (#1152)
- **Session management improvements** – Sorting `/resume` by recency, better error visibility for context‑exhausted sessions. (#4140, #4144)
- **Granular permissions** – Path‑prefix based file access permissions and command‑string matching with spaces. (#4157, #4150)

## Developer Pain Points
Recurring frustrations that cut across multiple issues:

- **Silent failures and wedged sessions** – Voice transcription returning empty (#4024), oversized attachments causing permanent session hangs (#3767, #4138), and binary diffs blowing past CAPI limits (#4097) all leave users with no recovery path except manual `/compact` or restart.
- **Configuration that doesn’t apply** – The `contextTier` setting is widely reported as non‑functional (#3762, #3481), forcing users to manually select long context every session.
- **Regressions in BYOK / custom provider support** – Authentication‑related regressions in `--acp` mode (#4016) and silent dropping of sub‑agent model overrides (#3891) undermine trust in custom provider workflows.
- **Windows installation and permission issues** – The `winget` installation fails on some configurations (#4149), and `plugin install` is blocked by “Access is denied” errors (#4151).
- **UI inconsistencies** – `cmd+click` opening links twice on macOS (#3580), inability to select text in TUI menus (#4154), and missing `j`/`k` navigation in multi‑choice prompts (#4152) degrade terminal usability.
- **Misclassified destructive operations** – `git branch -D` executes without any permission prompt, while `git push --delete` correctly requests approval (#4156), creating a security gap.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

Here is the **Kimi Code CLI community digest** for **2026-07-17**.

---

## Today's Highlights

The team shipped **v1.49.0**, focusing on completion budget fixes and preserving empty reasoning content—a notable improvement for chain-of-thought workflows. However, a newly reported **PowerShell 5.1 install crash** (Issue #2504) is drawing concern from Windows users, while a long-standing download script bug and TPD rate limit issues remain unresolved. On the feature front, a request for in-TUI thinking-effort switching (Issue #2501) is gaining traction.

## Releases

**v1.49.0** (and kosong v0.55.0)
- **Key Changes:**
  - `fix(kimi)`: Use remaining context for completion budget – better handles token limits during extended sessions. [PR #2494](https://github.com/MoonshotAI/kimi-cli/pull/2494)
  - `fix(kosong)`: Preserve empty-string `reasoning_content` as `ThinkPart` – fixes edge-case crashes when reasoning content is blank. [PR #2498](https://github.com/MoonshotAI/kimi-cli/pull/2498)
  - `fix(kosong)`: Stops sending empty reasoning segments to downstream consumers.
- **Changelog**: [PR #2503](https://github.com/MoonshotAI/kimi-cli/pull/2503) (closed)

## Hot Issues

1. **[BUG] `install.ps1` crashes on Windows PowerShell 5.1** (Issue #2504)
   - **Summary**: `Invoke-WebRequest` throws an `IndexOutOfRangeException` during binary download on Windows 10/11 with PowerShell 5.1.
   - **Why it matters**: Blocks first-time installation on legacy PowerShell, which is the default on many enterprise Windows machines.
   - **Feedback**: 0 comments; newly filed, no maintainer response yet.
   - [GitHub](https://github.com/MoonshotAI/kimi-cli/issues/2504)

2. **[Bug] Download command error on official website** (Issue #1559)
   - **Summary**: The getting-started guide at `kimi.com/code/docs/kimi-cli/guides/getting-starte...` returns an error.
   - **Why it matters**: Critical onboarding friction—new users hit a dead end before even installing.
   - **Feedback**: 1 comment, 1 👍; stale since March 2026.
   - [GitHub](https://github.com/MoonshotAI/kimi-cli/issues/1559)

3. **[Bug] TPD rate limit: `request reached organization TPD rate limit, current: 1505241`** (Issue #2318)
   - **Summary**: User reports incorrect TPD (tokens per day) calculation, hitting limits unexpectedly on `kimi2.6` model.
   - **Why it matters**: Hard limit errors disrupt paid users; likely server-side quota logic issue.
   - **Feedback**: 1 👍; no comments from maintainers.
   - [GitHub](https://github.com/MoonshotAI/kimi-cli/issues/2318)

4. **[Enhancement] Quick-switch Reasoning Level in TUI** (Issue #2501)
   - **Summary**: Users want `/think` or similar slash commands to change thinking-effort without diving into `/model` settings.
   - **Why it matters**: Flow-breaking to navigate menus mid-conversation; requested as a UX parity improvement over VS Code's dropdown.
   - **Feedback**: 0 comments; well-defined proposal.
   - [GitHub](https://github.com/MoonshotAI/kimi-cli/issues/2501)

## Key PR Progress

1. **[OPEN] `feat(tools): add Monitor tool for per-line stdout streaming`** (PR #2471)
   - **Description**: Proposes a streaming counterpart to the background-tool model, allowing per-line stdout tracking for long-running tasks.
   - **Impact**: Useful for debugging and live monitoring of tool output in TUI.
   - [GitHub](https://github.com/MoonshotAI/kimi-cli/pull/2471)

2. **[OPEN] `fix(soul): make LLMNotSet error message actionable for fresh installs`** (PR #2488)
   - **Description**: Changes cryptic `LLM not set` to a guidance message after `brew install kimi-cli`. Closes #2456.
   - **Impact**: Reduces first-run confusion for Homebrew users.
   - [GitHub](https://github.com/MoonshotAI/kimi-cli/pull/2488)

3. **[CLOSED] `chore(release): bump kimi-cli to 1.49.0 and kosong to 0.55.0`** (PR #2503)
   - **Description**: Release PR with changelogs in English and Chinese, including breaking-change entries.
   - [GitHub](https://github.com/MoonshotAI/kimi-cli/pull/2503)

4. **[CLOSED] `feat(telemetry): align events with TS schema, add trace_id and missing events`** (PR #2500)
   - **Description**: Adds trace-id capture (`x-trace-id` header) from Kimi provider responses for event correlation.
   - **Impact**: Improves observability across Python and TypeScript agent codebases.
   - [GitHub](https://github.com/MoonshotAI/kimi-cli/pull/2500)

## Feature Request Trends

- **Thought-effort UX in TUI**: Multiple users want frictionless switching of reasoning level (thinking effort) without leaving the main input interface—e.g., via slash commands like `/think` (Issue #2501).
- **Installation reliability**: The stale download guide bug (#1559) and the new `install.ps1` crash (#2504) show a persistent need for robust, cross-platform install scripts.
- **Rate-limit transparency**: The TPD-limit issue (#2318) suggests users want better feedback or control over their token consumption.

## Developer Pain Points

- **Windows PowerShell 5.1 incompatibility**: The `install.ps1` crash (#2504) is a clear pain point for the corporate/enterprise Windows segment. The script uses `Invoke-WebRequest` in a way that breaks on older PowerShell.
- **Cryptic error messages**: The `LLMNotSet` fix (PR #2488) highlights a broader pattern of unhelpful error text on first-run or misconfiguration scenarios.
- **Stale onboarding bug**: The download command error on the official site (#1559) has been open since March 2026—a top-priority friction for new adopters that remains unaddressed.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-07-17

## Today's Highlights

OpenCode v1.18.3 shipped with a quick UI fix for the subagent picker and two Desktop bugfixes for home page scrolling and WSL startup readiness. The community is buzzing about a new UI regression (#37430) that removes the build/plan mode toggle, while long‑standing issues around rate‑limit resilience and local model support continue to gather attention. On the PR side, several contributor patches target hot‑reload regressions, provider benchmarks, and TUI theme improvements.

---

## Releases

**v1.18.3** (released today)

- **Core**: Added Up Arrow shortcut to close the subagent picker when the first item is selected.
- **Desktop**: Fixed home page scrolling (sticky headers, session list behaviour). Fixed startup readiness so WSL server loading is included before the Desktop UI is considered ready.

[GitHub Release](https://github.com/anomalyco/opencode/releases/tag/v1.18.3)

---

## Hot Issues

1. **[#1712 – Implement exponential back-off when hitting rate limits](https://github.com/anomalyco/opencode/issues/1712)** (CLOSED)  
   *16 comments, 25 👍*  
   High‑frequency complaint: OpenAI tier‑1 RPM limits cause sessions to stall. The community strongly supports auto‑retry with exponential back‑off to keep the agent loop running. A fix has been deployed.

2. **[#15728 – Read tool cannot pass image data to vision‑capable models](https://github.com/anomalyco/opencode/issues/15728)** (CLOSED)  
   *12 comments, 9 👍*  
   Blocks analysis of images with vision models like Qwen3.5‑plus. Critical for multimodal workflows; now fixed.

3. **[#21396 – Adding local Ollama model to OpenCode natively](https://github.com/anomalyco/opencode/issues/21396)** (CLOSED)  
   *9 comments*  
   Users want a seamless Ollama integration instead of manual configuration. Remains a top feature request.

4. **[#26808 – Filepath detection broken after v1.14.4](https://github.com/anomalyco/opencode/issues/26808)** (CLOSED)  
   *8 comments*  
   `@`‑referencing files stopped working on VM environments. Regression that affected many Windows+WSL developers.

5. **[#19191 – History sessions not viewable in OpenCode Desktop](https://github.com/anomalyco/opencode/issues/19191)** (CLOSED)  
   *7 comments*  
   “Session not found” error when browsing old conversations. Persisted for weeks; now resolved.

6. **[#20007 – Desktop 1.3.7 defaulting to PowerShell](https://github.com/anomalyco/opencode/issues/20007)** (CLOSED)  
   *7 comments*  
   Corporate Windows environments disabling PowerShell saw terminals break. Highlights need for configurable shell preferences.

7. **[#27946 – MaxDepth placeholders leak into tool schemas → API 400 errors](https://github.com/anomalyco/opencode/issues/27946)** (CLOSED)  
   *5 comments*  
   Unresolved `[MaxDepth]` strings in JSON Schema caused downstream API rejections. Critical for any provider that validates schemas strictly.

8. **[#18428 – Local models via Ollama take 60–90s for simple prompts](https://github.com/anomalyco/opencode/issues/18428)** (CLOSED)  
   *4 comments*  
   Direct Ollama calls return in 3s but OpenCode overhead introduces massive latency. A performance blocker for local model users.

9. **[#19949 – CSP violation prevents adding another OpenCode server in Web UI](https://github.com/anomalyco/opencode/issues/19949)** (CLOSED)  
   *4 comments, 6 👍*  
   Multi‑server environments broken by too strict Content Security Policy. Affects enterprise deployments.

10. **[#37430 – Cannot switch between build/plan modes in new UI (v1.18.1, v1.18.3)](https://github.com/anomalyco/opencode/issues/37430)** (OPEN)  
    *3 comments*  
    Fresh regression: the build/plan mode toggle disappeared in the redesigned UI. No workaround currently — top of mind for many users today.

---

## Key PR Progress

1. **[#37427 – test(core): reproduce hot reload regressions](https://github.com/anomalyco/opencode/pull/37427)** (OPEN)  
   Adds deterministic red tests for two V2 hot‑reload blockers (ESM init cycle, watch file detection). Essential for stabilising the developer experience.

2. **[#37417 – feat: add provider benchmark script](https://github.com/anomalyco/opencode/pull/37417)** (OPEN)  
   Self‑contained cold benchmark for OpenCode providers on Ubuntu, pinning Node 24 and Bun 1.3.14. Helps track performance regressions.

3. **[#37420 – fix(session): ignore hidden user turns](https://github.com/anomalyco/opencode/pull/37420)** (OPEN)  
   Closes #37200: fully ignored user messages were still treated as new user work by `MessageV2.latest()`. Corrects context trimming.

4. **[#37419 – fix(core): initialize provider state before catalog transforms](https://github.com/anomalyco/opencode/pull/37419)** (CLOSED)  
   Ensures the first catalog materialisation reflects the actual credential state, preventing “no active provider” errors on startup.

5. **[#34794 – feat(provider): add --model free to pick a random zero‑cost model](https://github.com/anomalyco/opencode/pull/34794)** (OPEN)  
   Adds `--model free` to CLI/TUI, randomly selecting an OpenCode Zen free model. Lowers barrier for beginners.

6. **[#37180 – fix(tui): preserve prompt footer actions](https://github.com/anomalyco/opencode/pull/37180)** (CLOSED)  
   Keeps `tab agents` and `ctrl+p commands` readable when the directory label is long. Improves TUI usability at narrow widths.

7. **[#37414 – fix(app): deduplicate diff summaries linearly](https://github.com/anomalyco/opencode/pull/37414)** (CLOSED)  
   Replaces quadratic diff‑summary dedup with a Set‑backed reverse scan (fixes #33106). Performance win for large sessions.

8. **[#37219 – fix(opencode): ignore node_modules during config and skill discovery](https://github.com/anomalyco/opencode/pull/37219)** (OPEN)  
   `**/*.md` patterns inside node_modules were being scanned, slowing down discovery and causing false positives. Closes #30337.

9. **[#37190 – fix(notification): handle unavailable server during initialization](https://github.com/anomalyco/opencode/pull/37190)** (OPEN)  
   Prevents crash when WSL server connection is not yet registered. Solves #37171 for Windows + WSL users.

10. **[#37404 – feat(tui): add hovered theme state](https://github.com/anomalyco/opencode/pull/37404)** (OPEN)  
    Adds semantic `$hovered` state to action and form‑field themes, with light/dark defaults and migrated V1 values. Enhances TUI customisability.

---

## Feature Request Trends

- **Local model integration**: Ollama native support (#21396) is repeatedly requested; latency improvements for local inference (#18428) are a secondary ask.
- **Modular protocol support**: SSH, Docker, and WebSocket shells (#24301) are desired for remote development workflows.
- **Ecosystem expansion**: Community projects like the Telegram bot (#15740) and Lightpanda browser plugin (#37390) show demand for an extensible plugin marketplace.
- **Better rate‑limit handling**: Exponential back‑off (#1712) has been implemented, but users still want more transparent throttling and graceful degradation.
- **Vision & multimodal support**: Passing image data to vision models (#15728) is now fixed, but users continue to push for seamless support across more providers.

---

## Developer Pain Points

- **Rate limits killing sessions**: Sessions stall abruptly without auto‑resume, forcing manual intervention. Even with the fix in #1712, some users report ongoing issues.
- **Slow local model performance**: OpenCode adds 20–30× latency over direct Ollama calls (#18428), making local LLMs nearly unusable for interactive coding.
- **UI regressions after updates**: The missing build/plan toggle (#37430) and prior history‑session errors (#19191) frustrate users who rely on stable UX.
- **Windows & WSL quirks**: PowerShell dependence (#20007), CSP violations (#19949), and filepath slash mismatches (#28038) create platform‑specific friction.
- **Billing and refund complaints**: Users report difficulty cancelling OpenCode Go subscriptions and lack of automatic refunds (#37402), indicating a need for better billing transparency.
- **Stuck UI after undo/resend**: A state where the UI shows a perpetual loading spinner (#26654) after undoing and resending a message remains unresolved.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest – 2026-07-17

## Today’s Highlights
Three patch releases (v0.80.8–v0.80.10) rolled out in the last 24 hours, introducing a unified model runtime, Kimi K3 support with deferred tool loading, and adaptive thinking compatibility for Kimi Coding. The community is actively discussing xAI model list cleanup, Bedrock AWS_PROFILE authentication reliability, and a critical memory leak caused by unbounded accumulation of tool partial updates. Notable new provider integrations include Telnyx Inference and Amazon Bedrock Mantle, while several security-focused issues (permissions, UUID generation, bash guardrails) signal a growing emphasis on hardening the agent runtime.

## Releases

- **v0.80.10** – Kimi Coding models now use adaptive thinking correctly; K3 exposes its supported `max` thinking level and supports replaying empty-signature thinking blocks.  
  [Release notes](https://github.com/earendil-works/pi/blob/v0.80.10/packages/co)

- **v0.80.9** – Kimi K3 support across built-in providers with progressive extension tool activation via Kimi’s native protocol.  
  [Dynamic Tool Loading docs](https://github.com/earendil-works/pi/blob/v0.80.9/packages/coding-agent/docs/extensions.md#dyn)

- **v0.80.8** – Unified `ModelRuntime` centralizing model configuration, provider-owned `/login` endpoints, and dynamic provider catalogs.  
  [Providers doc](https://github.com/earendil-works/pi/blob/v0.80.8/packages/coding-agent/docs/providers.md)

## Hot Issues

1. **#6657 – [bug] Bedrock AWS_PROFILE authentication not working**  
   Despite claiming a fix in 0.80.7, users still see `AccessDeniedException: 403` with AWS_PROFILE. Two thumbs-up, nine comments.  
   [Issue](https://github.com/earendil-works/pi/issues/6657)

2. **#6686 – Pi automatically logs out of GitHub**  
   Recurring issue across macOS and Linux; user confirmed on 0.80.7. Still unresolved, eight comments.  
   [Issue](https://github.com/earendil-works/pi/issues/6686)

3. **#6755 – Agent loop retains every tool partial update, causing multi-GB RSS and minute-long stalls**  
   High-severity memory leak in `executePreparedToolCall` – `updateEvents` array never trimmed. Two comments but urgent.  
   [Issue](https://github.com/earendil-works/pi/issues/6755)

4. **#5294 – [bug] Request timed out despite infinite timeout configuration**  
   llama.cpp backend users cannot bypass timeout via `/settings`. Seven comments, no resolution yet.  
   [Issue](https://github.com/earendil-works/pi/issues/5294)

5. **#6736 – Pi 0.80.9 still exposes xAI models marked as removed**  
   Grok 3, Grok 4.20 variants still selectable despite documented removal. Three comments, confusion about catalog sync.  
   [Issue](https://github.com/earendil-works/pi/issues/6736)

6. **#6743 – pi-ollama-cloud extension fails to load on 0.80.8/0.80.9**  
   `Cannot read properties of undefined (reading 'create')` – regression since 0.80.7. Two comments, workaround is downgrade.  
   [Issue](https://github.com/earendil-works/pi/issues/6743)

7. **#6740 – Incorrect thinking level mapping for GPT 5.4 mini**  
   OpenAI doesn’t support “minimal” effort but model config maps it anyway. Three comments, easy fix.  
   [Issue](https://github.com/earendil-works/pi/issues/6740)

8. **#6688 – Extension selector renders all options without viewport windowing**  
   Generic `ctx.ui.select()` scrolls off-screen for long lists, unlike built-in `/model` picker. Five comments.  
   [Issue](https://github.com/earendil-works/pi/issues/6688)

9. **#6716 – Bash tool has no destructive command guardrails**  
   No allow/deny list or confirmation by default. Three comments, raised as security concern.  
   [Issue](https://github.com/earendil-works/pi/issues/6716)

10. **#6748 – Deprecated Together.ai models still listed**  
    Four models officially deprecated but still selectable. Two comments, affects provider catalog sync.  
    [Issue](https://github.com/earendil-works/pi/issues/6748)

## Key PR Progress

1. **#6750 – Markdown transformer API** (OPEN)  
   Adds API for markdown transformation, exports `marked`, includes example extension for unicode formula conversion. Closes #6747.  
   [PR](https://github.com/earendil-works/pi/pull/6750)

2. **#6739 – Add Telnyx Inference as built-in provider** (CLOSED)  
   OpenAI-compatible endpoint hosting open-source LLMs. Uses existing OpenAI wire protocol.  
   [PR](https://github.com/earendil-works/pi/pull/6739)

3. **#6742 – Make model generation explicit** (OPEN)  
   Clarifies model generation in API surface. Closes #6741.  
   [PR](https://github.com/earendil-works/pi/pull/6742)

4. **#6734 – xAI: prefilled OAuth device link, SuperGrok login, trimmed model list** (CLOSED)  
   Removes deprecated xAI models, makes grok-4.5 default, improves sign-in UX.  
   [PR](https://github.com/earendil-works/pi/pull/6734)

5. **#6216 – Amazon Bedrock Mantle OpenAI Responses provider** (OPEN)  
   New provider using OpenAI’s Bedrock SDK. Supersedes previous PR.  
   [PR](https://github.com/earendil-works/pi/pull/6216)

6. **#6731 – Do not highlight read errors** (OPEN)  
   Skips syntax highlighting for failed `read` results. Includes regression coverage.  
   [PR](https://github.com/earendil-works/pi/pull/6731)

7. **#6730 – Preserve compaction queue behavior** (OPEN)  
   Maintains steering/follow-up behavior of queued messages during compaction flushes.  
   [PR](https://github.com/earendil-works/pi/pull/6730)

8. **#6594 – SQLite session storage** (OPEN)  
   Adds `retainedTail` to compaction entries for efficient tree walking; aims to replace JSON storage.  
   [PR](https://github.com/earendil-works/pi/pull/6594)

9. **#6721 – Test model catalogs against PR merge refs** (OPEN)  
   Fixes catalog generation for branches created before the workflow was merged.  
   [PR](https://github.com/earendil-works/pi/pull/6721)

10. **#6720 – Publish generated model catalogs to R2** (CLOSED)  
    Validates and publishes content-addressed JSON catalogs; updates compatibility index.  
    [PR](https://github.com/earendil-works/pi/pull/6720)

## Feature Request Trends

- **Thinking level expansion** – Multiple requests to mirror K3’s `max` level to other models (Kimi Coding, GPT) and support low/medium/high.  
- **Tool customization & extensibility** – Customizable line length for `read` tool, deferred canonical reload via `requestReload()`, broader selector viewport control.  
- **Provider model catalog maintenance** – Automated removal of deprecated models, better sync between code and runtime (xAI, Together.ai).  
- **Caching and compaction improvements** – Core-level prompt cache optimization, resetting context usage display on `/clear`, compaction queue serialization.  
- **Headless service & systemd integration** – Official recipe for running Pi as a supervised, always-on service.  
- **Storage alternatives** – SQLite session storage to replace JSON (PR #6594) and more robust state persistence.  
- **Security hardening** – Stricter `/tmp` permissions (0600), cryptographic UUID generation, bash tool guardrails.

## Developer Pain Points

- **Authentication reliability** – Persistent AWS_PROFILE Bedrock failures (#6657, #6531) and broken AWS SSO login (#6686) erode trust in cloud provider integration.  
- **Timeout configuration broken** – Infinite timeout setting via `/settings` is ignored (#5294), affecting users of slow local models.  
- **Memory and performance** – Unbounded `updateEvents` accumulation in agent loop (#6755) can balloon RSS to multi-GB and freeze the TUI. Rendering off-by-one in terminal input (#6704) also causes crashes.  
- **Extension compatibility regressions** – `pi-ollama-cloud` fails on 0.80.8/0.80.9 (#6743), and undocumented API changes break sample extensions in TUI docs (#6735).  
- **Model catalog drift** – Deprecated models remain selectable (xAI #6736, Together.ai #6748), confusing users and causing API errors.  
- **Error feedback gaps** – API error response bodies sometimes ignored (#6749), making debugging harder.  
- **Test coverage gaps** – Orchestrator package has zero tests (#6710); core components like IPC and supervisor lack basic coverage.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

Here is the Qwen Code community digest for July 17, 2026.

---

## Qwen Code Community Digest — 2026-07-17

### Today's Highlights
The community is converging on a major session management overhaul with the closure of the multi-workspace RFC (Issue #6378) and the landing of its core implementation in the nightly release. Alongside this infrastructure work, the formal release of **v0.19.11** brings critical stability fixes, though a regressive VS Code extension patch has already been reverted. Feature discussions are increasingly focused on making the daemon API more introspectable, with a cluster of PRs and issues proposing new session-info endpoints.

### Releases
- **[v0.19.11-nightly.20260717](https://github.com/QwenLM/qwen-code/releases/tag/v0.19.11-nightly.20260717.f8e6e8931)**: Includes a significant new feature by @doudouOUC to trace cold first-session startup in the daemon ([#6907](https://github.com/QwenLM/qwen-code/pull/6907)), a direct outcome of the multi-workspace discussion.
- **[v0.19.11](https://github.com/QwenLM/qwen-code/releases/tag/v0.19.11)**: The latest stable release. While the official changelog was not generated instantly, this release includes the hardening fix for multi-workspace ownership and other stability improvements. No breaking changes.

### Hot Issues (Pick of 10)
1. **[#6378](https://github.com/QwenLM/qwen-code/issues/6378) [CLOSED] RFC: Support multiple workspaces in one `qwen serve` daemon** — *25 comments*. This foundational RFC was closed today, signaling that the design is settled and implementation is underway. The core implementation is already in the nightly release.

2. **[#7051](https://github.com/QwenLM/qwen-code/issues/7051) [CLOSED] VS Code side plugin error: Failed to connect to Qwen agent** — *4 comments*. Users are hitting a process exit issue with the VS Code extension.
3. **[#7056](https://github.com/QwenLM/qwen-code/issues/7056) [OPEN] Qwen ACP process exited unexpectedly in VS Code companion** — *3 comments*. A similar, ongoing report from another user on Windows. These two issues highlight a fragility in the ACP client launch path.

4. **[#7040](https://github.com/QwenLM/qwen-code/issues/7040) [OPEN] RFC: Reliable auto memory roadmap** — *3 comments*. @jifeng proposes a lifecycle for auto-memory (candidate extraction, validation, review), addressing trust and governance in persistent agent memory.

5. **[#6996](https://github.com/QwenLM/qwen-code/issues/6996) [OPEN] Custom OpenAI-compatible provider fails with generic error** — *3 comments*. A critical bug for users of proxies or self-hosted backends: the real error cause is discarded before logging, making debugging impossible.

6. **[#7002](https://github.com/QwenLM/qwen-code/issues/7002) [OPEN] Incompatibility with CentOS 7 libraries** — *3 comments*. `GLIBC` and `GLIBCXX` version errors prevent installation on older Linux distributions. A stability blocker for enterprise users.

7. **[#7023](https://github.com/QwenLM/qwen-code/issues/7023) [OPEN] Model switch can invalidate a loaded daemon session** — *2 comments*. A potential session-destroying bug when switching models via the WebShell client.

8. **[#6992](https://github.com/QwenLM/qwen-code/issues/6992) [OPEN] Chained MCP calls fail silently & Permission UI gets stuck** — *2 comments*. A significant UX issue on Windows where the permission dialog blocks the entire tool call chain.

9. **[#6813](https://github.com/QwenLM/qwen-code/issues/6813) [OPEN] Show file names in compact tool summary** — *4 comments*. A long-standing quality-of-life request to replace "Read 3 files" with explicit file names.

10. **[#5431](https://github.com/QwenLM/qwen-code/issues/5431) [OPEN] Add optional voice input mode** — *4 comments*. A feature request for voice dictation in the TUI, motivated by accessibility and rapid iteration.

### Key PR Progress (Pick of 10)
1. **[#6907](https://github.com/QwenLM/qwen-code/pull/6907) [CLOSED] feat(daemon): Trace cold first-session startup** — The key implementation following the multi-workspace RFC. Improves daemon observability.
2. **[#7039](https://github.com/QwenLM/qwen-code/pull/7039) [OPEN] fix(core): retry empty tool-result continuations** — Treats empty model responses after tool calls as retryable, preventing silent agent failures.
3. **[#7054](https://github.com/QwenLM/qwen-code/pull/7054) [OPEN] feat(web-shell): Git status chip and visual diff** — Brings live working-tree awareness (dirty state, staged count) to the browser-based daemon UI.
4. **[#7067](https://github.com/QwenLM/qwen-code/pull/7067) [CLOSED] revert(vscode): undo Electron Node mode changes** — Emergency revert of a previous fix that broke the VS Code extension on Windows and Linux in v0.19.11.
5. **[#6967](https://github.com/QwenLM/qwen-code/pull/6967) [CLOSED] fix(core): Require explicit approval to exit Plan mode** — Prevents the assistant from unilaterally leaving Plan mode, enforcing a user-consent step.
6. **[#6937](https://github.com/QwenLM/qwen-code/pull/6937) [OPEN] feat(cli): mouse text selection and copy in VP mode** — Adds native editing UX (click-drag, double-click select) to the terminal viewport mode.
7. **[#7064](https://github.com/QwenLM/qwen-code/pull/7064) [OPEN] feat(web-shell): paginate restored session history** — Shifts session loading from "load everything" to an on-demand model for better performance with long sessions.
8. **[#7018](https://github.com/QwenLM/qwen-code/pull/7018) [OPEN] feat(web-shell): add skill management pages** — Integrates full Skill management (search, enable/disable) into the Web Shell interface.
9. **[#7052](https://github.com/QwenLM/qwen-code/pull/7052) [OPEN] fix(core): make the per-turn tool-call cap adaptive** — Dynamically adjusts the tool call limit per turn based on context, rather than using a hard cap.
10. **[#7065](https://github.com/QwenLM/qwen-code/pull/7065) [OPEN] fix(channels): scope pairing and allowlist state by workspace** — Critical security fix that scopes DM channel pairing to the workspace, preventing cross-workspace state leaks.

### Feature Request Trends
The most prominent trend is **session introspection and management**. There is a clear push (Issues #7069, #7070, #7071, PR #7003) to expose richer session metadata (total counts, aggregates) via the daemon REST API, driven by the needs of multi-workspace architectures. A second strong trend is **UI/display intelligence**: multiple feature requests (Issues #6813, #7004, #7007, #7009) seek to replace generic "count" displays with precise file names and unified path formatting. Finally, the **memory/agent lifecycle** remains a hot topic, with Issue #7040 proposing a formal governance model for auto-memory.

### Developer Pain Points
1. **VS Code Extension Instability (ACP connection)** — Issues #7051 and #7056 highlight recurring, cross-platform failures with the Qwen ACP process in the VS Code companion extension. The revert PR #7067 confirms that at least one attempted fix introduced regressions.
2. **Cross-Platform & Environment Compatibility** — Issue #7002 (CentOS 7 libc incompatibility) and Issue #7044 (user upgrade failures) show ongoing friction with older platforms and update mechanisms.
3. **Configuration & Provider Errors** — Issue #6996 reveals a poor developer experience where errors connecting to custom OpenAI-compatible providers are swallowed, offering no actionable feedback.
4. **Silent Failures in UI Components** — Issues #6992 (MCP permission dialog hangs) and #7037 (missing modal borders) suggest that certain UI states are not being properly error-handled or rendered, leading to unresponsive or confusing interfaces.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-07-17

## Today's Highlights

The v0.9.0 release went live with the **CodeWhale** rebrand, officially deprecating the legacy `deepseek-tui` npm package. A wave of 40+ pull requests landed within 24 hours, with strong focus on testing coverage, legacy code removal, and subagent lifecycle correctness. Community contributions for the **OpenCode Go/Zen** provider and **HarmonyOS** porting advanced significantly, while the project's `Fleet` and `WhaleFlow` orchestration features continue to be the dominant architectural discussion.

---

## Releases

- **[v0.9.0 — Codewhale](https://github.com/Hmbown/CodeWhale/releases/tag/v0.9.0)**
  - Public release under the **Shannon Labs** brand. The `codewhale` command, npm package, and release assets now use the new naming. The legacy `deepseek-tui` npm package is deprecated and receives no further releases. Users migrating from v0.8.x must update their install commands.

---

## Hot Issues (10 Noteworthy)

1. **[#3793 — v0.9.2 Setup: build a guided localized constitution creator](https://github.com/Hmbown/CodeWhale/issues/3793)** (16 comments)
   - High-activity UX design issue. Proposes a language-first, guided-plus-open-canvas constitution creator flow. Key constraint: autonomy/risk posture cannot directly alter runtime security settings from within the constitution file. Community feedback is split between wanting full freedom vs. guided guardrails.

2. **[#3205 — v0.9.3: Fleet model classes, loadout auto, and semantic route roles](https://github.com/Hmbown/CodeWhale/issues/3205)** (11 comments)
   - Architectural epic for Fleet auto-scaling. The `Fleet loadout auto` mode would resolve the entire compute loadout for a role/slot, not just pick a model. Requires coordination between TUI, CLI, exec, and subagents.

3. **[#3792 — v0.9.2 Setup: make first-run onboarding feel like starting CodeWhale, not editing config](https://github.com/Hmbown/CodeWhale/issues/3792)** (8 comments)
   - Strong user sentiment: first-run should feel like launching a product, not editing a YAML file. The proposed spine includes language-first setup, with constitutional text kept separate from runtime security controls.

4. **[#4227 — feat: 🐋 help JayBeest map the CodeWhale tsunami 🌊](https://github.com/Hmbown/CodeWhale/issues/4227)** (7 comments)
   - Community member JayBeest proposing a skill/workflow to help contributors set up a CodeWhale dev environment. Highlights the project's high velocity (10+ PRs/day) as both a strength and onboarding friction point.

5. **[#4010 — v0.9.4 WhaleFlow: Conductor agent type for orchestrating agent ensembles](https://github.com/Hmbown/CodeWhale/issues/4010)** (4 comments)
   - Proposes a Conductor agent that can fan out scouts, wait for completions, route artifacts, retry failures, and synthesize results. No such orchestrator exists today—subagents are spawned one at a time with manual coordination.

6. **[#4417 — v0.9.1: add first-class Kimi OAuth device login and token lifecycle](https://github.com/Hmbown/CodeWhale/issues/4417)** (3 comments)
   - Complements the Kimi K3 model support (#4387) with proper OAuth/device-login authentication. Separates account auth from API-key config, addressing a common user request for Moonshot AI provider support.

7. **[#4407 — v0.9.1: Report artifact-skill readiness and define a managed dependency runtime](https://github.com/Hmbown/CodeWhale/issues/4407)** (2 comments)
   - CodeWhale bundles four first-party workflow recipes (presentations, spreadsheets, PDFs, documents) but doesn't report whether the host has the required external tools. Users want clear feedback before running workflows.

8. **[#2625 — Port to HarmonyOS](https://github.com/Hmbown/CodeWhale/issues/2625)** (CLOSED, 4 comments)
   - Community member shenjackyuanjie's porting effort hit a `rustyline → nix` dependency chain issue due to an OHOS ioctl type mismatch. Closed with a merged workaround, demonstrating active cross-platform community support.

9. **[#1481 — Support OpenCode Go/Zen for DeepSeek-V4](https://github.com/Hmbown/CodeWhale/issues/1481)** (7 comments, 1 👍)
   - Request for a cheap DeepSeek-V4 provider alternative. The associated PR (#3781) has been merged, marking this as one of the faster community feature deliveries.

10. **[#1888 — Slash commands: control-plane semantics for agents, jobs, hooks, and recovery](https://github.com/Hmbown/CodeWhale/issues/1888)** (2 comments)
    - Long-running policy-affecting slash commands (`/agent`, `/subagents`, `/review`, etc.) need a uniform contract for inspect, pause/redirect/cancel, resume/recover, and durable command receipts. A recurring theme across multiple issues.

---

## Key PR Progress (10 Important)

1. **[#3781 — feat/opencode-zen-provider](https://github.com/Hmbown/CodeWhale/pull/3781)** (Merged)
   - Community PR by snail-vs adding the OpenCode Zen provider. Passes `cargo fmt`, `clippy`, and tests. Unlocks cheap DeepSeek-V4 access for users who requested it in #1481.

2. **[#4443 — fix(tui): terminate orphaned model-wait subagents](https://github.com/Hmbown/CodeWhale/pull/4443)**
   - Critical subagent lifecycle fix: routes failed, stopped, interrupted, stale, and completed subagents through an exactly-once claim → deliver → commit transition. Wakes awaiting parents before closing the running gate.

3. **[#4454 — 🔒 Restrict overly permissive CORS headers](https://github.com/Hmbown/CodeWhale/pull/4454)**
   - Security hardening: replaces wildcard Runtime API CORS request-header permission with explicit headers (`Authorization`, `Content-Type`, etc.). A least-privilege fix for first-party browser clients.

4. **[#4456 — 🧹 Refactor massive run_subagent runner](https://github.com/Hmbown/CodeWhale/pull/4456)** (Merged)
   - Extracted duplicated logic from the ~800-line `run_subagent` task loop into a `finish_subagent_run` helper. Replaces 4 duplicated blocks. Directly addresses the monolith-splitting goals of #3306 and #3946.

5. **[#4431 — 🧪 Add tests for McpManager::call_tool](https://github.com/Hmbown/CodeWhale/pull/4431)**
   - Comprehensive unit tests covering happy path (successful argument delegation) and error handling (client-side error propagation). Improves coverage in MCP tool management.

6. **[#4428 — 🧪 Add unit test for ModelRegistry::new alias map building](https://github.com/Hmbown/CodeWhale/pull/4428)**
   - Tests that `ModelRegistry::new` correctly normalizes strings and deduplicates aliases using `.or_insert`. Strengthens the agent crate's model routing reliability.

7. **[#4452 — 🧹 Remove legacy TodoAddTool and TodoUpdateTool](https://github.com/Hmbown/CodeWhale/pull/4452)** (Merged)
   - Removes deprecated todo tools per `docs/TOOL_LIFECYCLE.md`. The `work_update` tool is now the sole canonical progress surface. Direct cleanup from the tool hygiene initiative.

8. **[#4384 — Update workflow-js Cargo.toml for HarmonyOS build](https://github.com/Hmbown/CodeWhale/pull/4384)**
   - Community PR: `rquickjs` doesn't ship pre-generated bindings for HarmonyOS; this adds generation support. Moves the HarmonyOS port forward after #2625.

9. **[#4430 — 🧪 Add tests for repair_json_text_once and fix array extraction bug](https://github.com/Hmbown/CodeWhale/pull/4430)**
   - Bug fix: the original logic favored extracting JSON objects over arrays. Valid arrays containing objects were discarded. Now both paths are properly tested.

10. **[#4437 — ⚡ perf: parallelize runPrReview API calls using Promise.all](https://github.com/Hmbown/CodeWhale/pull/4437)** (Merged)
    - Web performance: replaces sequential `for` loop with `Promise.all` + `.map()`. Caches exceptions per-PR to avoid runner crashes. Reduces PR review time for the community-agent service.

---

## Feature Request Trends

- **Guided constitution creator**: Users increasingly want a structured, localized setup flow (#3793) rather than a blank editor. The constitution should be language-first, with security policy kept separate.
- **First-run onboarding as product experience**: Multiple issues (#3792, #4238) ask for a welcome flow that feels like launching CodeWhale, not editing config files.
- **Fleet auto-scaling**: The `Fleet loadout auto` mode (#3205) is the most requested infra feature—users want automatic compute loadout resolution per role/slot.
- **Agent ensemble orchestration**: WhaleFlow's Conductor agent type (#4010) and the synthesis/reduce pass (#3230) represent a strong desire for structured multi-agent coordination, not manual spawning.
- **New provider integrations**: Kimi K3 (#4387) and OpenCode Zen (#1481) are fresh additions, but requests for Xiaomi MiMo docs sync (#3810) and TelecomJS support (#4370) show demand for more model backends.
- **Discoverable built-in workflow dependencies**: Users want CodeWhale to report whether external tools (for presentations, PDFs, etc.) are available before running recipes (#4407).

---

## Developer Pain Points

- **Subagent lifecycle complexity**: The massive `run_subagent` function (~800 lines) and repeated orphan cleanup issues (#4443) indicate that subagent lifecycle management is the most brittle part of the codebase.
- **Monolith refactoring pain**: Engine.rs (tui/src/core/), agent provider matches, and renderers have "accumulated in-place" (#3306, #3946). Developers report that small policy fixes are risky due to tightly coupled coordination dumps.
- **CI/CD reliability**: The release-tag checkout fixture breaking after a real tag exists (#4388) and the crates.io packaging changelog embedding issue (#4413) slowed the v0.9.0 release. CI drift jobs are fragile.
- **Testing gaps**: Multiple PRs added missing unit tests (#4431, #4428, #4430, #4439, #4424) for core functions (`McpManager::call_tool`, `ModelRegistry::new`, `repair_json_text_once`, `validateSession`). The "test-first" culture is still catching up with the project's velocity.
- **macOS/Windows UX friction**: Mac users report keyboard shortcut mismatches, scroll bar issues, and session termination problems (#2494, #1106, #805). Windows task-result display truncation (#805) remains open.
- **Legacy removal breaking changes**: The removal of `TodoAddTool`/`TodoUpdateTool` (#4452) and legacy memory push/inject blocks (#4455, #4444, #4442) requires users to migrate to the new `work_update` and Moraine recall workflows—a breaking change that may catch unprepared users.
- **High project velocity as onboarding barrier**: JayBeest's issue (#4227) explicitly flags that 10+ PRs/day makes it hard for new contributors to set up and maintain a dev environment aligned with `main`.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/boom7sss/agents-radar).*