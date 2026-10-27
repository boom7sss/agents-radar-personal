# AI CLI Tools Community Digest 2026-07-27

> Generated: 2026-07-27 03:42 UTC | Tools covered: 9

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

# AI CLI Developer Tools Cross-Tool Comparison Report
**Date:** 2026-07-27 | **Analysis Period:** Last 24 hours

---

## 1. Ecosystem Overview

The AI CLI tool ecosystem is experiencing a phase of **rapid maturation with persistent platform instability**. Seven major tools—Claude Code, OpenAI Codex, Gemini CLI, GitHub Copilot CLI, OpenCode, Pi, and DeepSeek TUI—are competing on agentic autonomy, extensibility, and cross-platform parity, yet all struggle with regressions in billing, tool dispatch, and sandbox isolation. A clear tension exists between feature velocity and reliability: tools shipping nightly releases (Gemini, Qwen) accumulate technical debt, while more conservative projects (Copilot CLI, Kimi) face user frustration over unresolved bugs. **Windows remains a consistent second-class platform** across the board, and **model availability instability** (particularly around newer models like Fable 5 and MiniMax-M3) undermines trust in premium subscriptions. The community's strongest signals point toward demand for session portability, lifecycle hooks, MCP OAuth reliability, and secure defaults—indicating the ecosystem is shifting from "wow factor" to production-readiness expectations.

---

## 2. Activity Comparison

| Tool | Hot Issues Today | Key PRs Today | Release Today | Overall Maturity |
|------|-----------------|---------------|---------------|-----------------|
| **Claude Code** | 10 | 7 | ❌ No | High (v2.1.220; extensive ecosystem) |
| **OpenAI Codex** | 10 | 10 | ❌ No* | High (large user base) |
| **Gemini CLI** | 10 | 10 | ✅ Nightly v0.54.0 | Medium-High (Google-backed, rapid iteration) |
| **GitHub Copilot CLI** | 10 | 0 | ❌ No | Medium (stable but slow to patch) |
| **Kimi Code** | 1 | 0 | ❌ No | Low (quiet day, single issue) |
| **OpenCode** | 10 | 10 | ✅ v1.18.6 | Medium (active dev, recent fork community) |
| **Pi** | 10 | 6 | ❌ No | Medium-High (rapidly growing, 31 issues) |
| **Qwen Code** | 10 | 10 | ✅ Nightly v0.21.0 | Medium (security issues noted) |
| **DeepSeek TUI** | 10 | 10 | ❌ No | Medium (high community engagement) |

*\*Codex had closed PRs but no versioned release.*

**Key Observations:**
- **Gemini CLI, OpenCode, and Qwen Code** are the most actively shipping (nightly releases).
- **Copilot CLI** had zero PR updates—lowest activity among major players.
- **Kimi Code** is notably quiet; its single closed bug suggests a smaller or less communicative community.
- **Pi (pi-mono)** had high issue volume (31) but fewer PRs (6), indicating a community that finds more bugs than it fixes—or a maintainer bottleneck.
- **DeepSeek TUI** had strong PR velocity (10 closed) despite no release, suggesting heavy internal development.

---

## 3. Shared Feature Directions

Several requirements appear **across three or more tool communities**, indicating genuine industry demand:

### a. Session Portability & Context Migration
- **Claude Code (#28791, 108👍)**: Sync conversation history between CLI and Desktop
- **Gemini CLI (#22598)**: Share subagent trajectories in chat
- **Copilot CLI (#4259)**: Resume replay without ghost permission prompts
- **DeepSeek TUI (#2934)**: Persistent sidebar sessions with auto-resume
- **OpenCode (#39028)**: SSE reconnect on mobile tab visibility

**Industry Signal:** Users want to start work on one interface and continue seamlessly on another—without losing agent context or history.

### b. MCP OAuth & Remote Provider Reliability
- **Codex (PR #30294-30416)**: Full OAuth stack rework with transaction serialization
- **Copilot CLI (#4203)**: OAuth refresh token caching (RFC 6749 violation)
- **Qwen Code (#7768, #7769, #7770)**: 3 P1 security issues around MCP proxy authorization
- **Pi (#7049)**: Undici proxy forwarding for HTTP targets
- **Gemini CLI (#28446)**: Native fetch for OAuth to avoid "Premature close"

**Industry Signal:** MCP is becoming the universal plugin protocol, but **OAuth token management and session isolation** are consistently broken across tools. Expect standardization efforts.

### c. Secure Defaults & Sandbox Isolation
- **Claude Code (PR #81421, #81423)**: IPv6 firewall bypass; sandbox fail-closed policy
- **Qwen Code (#7772)**: BrowserWindow sandbox disabled; webSecurity false
- **Gemini CLI (#28403)**: Variable expansion security bypass (GHSA)
- **Pi (#7090)**: brace-expansion CVE-2026-14257
- **Copilot CLI (#30712)**: Split writable roots in sandbox config

**Industry Signal:** Security hardening is a top-of-mind concern, especially around **sandbox escape paths and Electron configuration gaps**. This will become a differentiator.

### d. AST-Aware Tooling & Token Optimization
- **Gemini CLI (#22745)**: AST-aware file reads, search, and mapping
- **Claude Code (#28364)**: Deep-merge config to avoid token waste
- **Pi (#6665)**: Uncached `Intl.Segmenter` causing CPU thrash
- **DeepSeek TUI (#4903)**: O(N²) markdown re-parse fix
- **OpenCode (#23629)**: Grep fails on non-UTF-8 files

**Industry Signal:** As context windows grow, tools must **minimize token noise** through smarter parsing, caching, and navigation.

### e. Extensibility & Hook Lifecycles
- **Claude Code (#68663)**: PreCommand/PostCommand hooks
- **Codex (#21753)**: Full Claude Code hook parity (29+ hooks)
- **Pi (#7137)**: Extension hooks `pre_response` / `before_send_message`
- **Copilot CLI (#4264)**: Extension slash command deduplication
- **OpenCode (#17412)**: Plugins injecting AI-visible messages

**Industry Signal:** Hooks are becoming a **must-have for CI/CD and automation** integration. Users want to instrument, intercept, and extend agent behavior without modifying core.

---

## 4. Differentiation Analysis

| Tool | Core Differentiator | Target User | Technical Approach | Weakness |
|------|--------------------|-------------|--------------------|-----------|
| **Claude Code** | Sandbox-first security; Fable 5 ecosystem | Power users, enterprise | Plugin-based, model-agnostic, strong sandbox | Windows BSOD; billing model opaque |
| **Codex** | Desktop-first with GPU-accelerated browser | Pro/enterprise macOS | Embedded Chromium, Computer Use | Windows & Linux are broken; session bloat |
| **Gemini CLI** | Agent-first architecture; subagent delegation | Google ecosystem users | TypeScript, subagent orchestration | Hangs/MaxTurns misreporting; Wayland issues |
| **Copilot CLI** | Tight GitHub integration; conservative stability | GitHub-centric developers | MCP-first, minimal surface | Regressions (view tool); BYOK friction |
| **Kimi Code** | Minimalist, fast iteration | Asian/Chinese devs | Web/mobile-first | Extremely quiet; no evident differentiation |
| **OpenCode** | Open-source Cursor alternative | Ex-Cursor users, hobbyists | SolidJS, active fork community | Encoding issues; themes accessibility |
| **Pi** | Binary distribution; experimental loadouts | Advanced CLI users | Rust/Go hybrid; compact streaming | CPU compatibility; compaction data loss |
| **Qwen Code** | Strong security disclosures; web-shell | Enterprise, Alibaba ecosystem | Desktop + MCP proxy; Electron | VS Code connectivity flaky; SDK confusion |
| **DeepSeek TUI** | Rich i18n support; community-driven | Global, non-English speakers | Ruby/TUI; heavy localization | Mac/iTerm2 specific issues; no `/dryrun` |

**Key Strategic Insight:**
- **Claude Code and Copilot CLI** compete on the **security-proven** axis—they are the most conservative platforms.
- **Codex** is betting on **desktop immersion** (Computer Use, embedded browser) but alienates non-macOS users.
- **Gemini CLI** is the most **architecturally ambitious** (subagent delegation, workflow tools) but suffers from reliability gaps.
- **Pi** and **DeepSeek TUI** are **community-driven innovators**—faster to address niche pain points but lack enterprise backing.

---

## 5. Community Momentum & Maturity

### High Momentum (Rapid iteration, growing communities)
- **Gemini CLI**: Nightly releases, 10 PRs/day, active security response. The `@google/genai` major version bump (1.30→2.12) signals deep investment.
- **DeepSeek TUI**: 10 PRs closed in 24 hours, i18n expansion, strong feature velocity. Community self-organizing (#4227). Poised for breakout.
- **Pi**: 31 issues/day, experimental loadout PR from maintainer, growing extension ecosystem. The `AI_AGENT` convention (#7132) shows cross-tool alignment.
- **OpenCode**: v1.18.6 patch release, 10 PRs, model-gated auto-approve (#39015) is a novel UX innovation.

### Stable but Slower (Mature, but feature velocity lower)
- **Claude Code**: Highest user base, but no release today. Hot issues (Fable 5 advisor, 88 comments) indicate **scaling pain**. Billing transparency gaps erode trust.
- **Codex**: MCP OAuth rework is significant, but Windows/Linux instability and session bloat (#24948) hold back growth beyond macOS.
- **Copilot CLI**: Zero PR activity today. The zombie process fix (#4163) is a win, but the regression in `view` tool (#4202) and BYOK breakage (#4258) suggest **maintenance mode**, not innovation.

### Low Activity (Needs attention)
- **Kimi Code**: A single closed bug. No releases, no PRs. Likely a very small community or internal-only development.

### Community Size Estimate (by Hot Issue Upvotes & Comments)

| Tool | Top Issue Upvotes | Engagement Pattern |
|------|------------------|-------------------|
| Codex | 852👍 (Linux app) | Single massive demand signal |
| Claude Code | 166👍 (F5 advisor) | Broad distribution of complaints |
| DeepSeek TUI | Not tracked (no 👍) | High comment count but no voting |
| Gemini CLI | 8👍 (agent hang) | Low upvotes but P1 labels |
| Pi | Not tracked | 31 issues suggests active but small |
| OpenCode | 6👍 (multiple) | Niche but loyal |
| Copilot CLI | 3👍 (zombies) | Smallest engaged base |

---

## 6. Trend Signals

### Industry-Wide Signals for Developer Decision-Makers

1. **"Model Availability Instability" is a Trust Crisis**
   - Claude Code's Fable 5 advisor (#73365, 166👍) and Gemini's MaxTurns misreporting (#22323) indicate that **model routing and billing attribution** are not production-ready. Premium users paying for Max plans are hit by usage caps and false termination signals.
   - **Action:** If adopting AI CLI tools for team workflows, verify model uptime SLAs and billing transparency before committing.

2. **Windows is Still Second-Class—But It Must Work**
   - Claude Code: BSOD via Wof.sys (#32870). Codex: GPU crashes (#34133), taskkill storms (#34260). Copilot CLI: exit crash on Windows (#4217). OpenCode: non-Git directory sessions break (#29621).
   - **Action:** For Windows-first teams, demand Windows CI/CD pipeline tests from vendors. Consider Pi or DeepSeek TUI which have fewer Windows complaints.

3. **MCP is the Universal Protocol, but OAuth is the Weakest Link**
   - Every major tool now supports MCP, but **OAuth token refresh, session isolation, and permission persistence** are consistently broken. Codex rebuilt its entire OAuth stack (#30294-30416). Qwen Code found 3 critical MCP security flaws (#7768-7770).
   - **Action:** When evaluating MCP integrations, verify OAuth refresh behavior in CI/headless environments. Avoid tools that force re-auth on every restart.

4. **Hooks and Extensibility Are the Next Battleground**
   - Claude Code (#68663), Codex (#21753), Pi (#7137), and Copilot CLI (#4264) all have active requests for lifecycle hooks. The gap between "chat assistant" and "programmable AI agent" is closing.
   - **Action:** Choose tools that expose pre/post hooks, tool permission overrides, and state serialization. These will determine long-term automation potential.

5. **Session Portability is the Most Requested Feature Across Tools**
   - Claude Code (#28791, 108👍), DeepSeek TUI (#2934), Copilot CLI (#4259), and OpenCode (#39028) all want seamless context migration between CLI, desktop, and mobile.
   - **Action:** If your workflow spans devices, prioritize tools with cloud-synced sessions or at least serializable state.

6. **Billing Transparency is a Flashpoint**
   - Claude Code: "Usage leak" (#80705), "Max X5 instantly 100%" (#80199). Copilot CLI: BYOK billing confusion (#4258). Codex: session bloat costing money (#24948).
   - **Action:** Insist on detailed token accounting, per-project cost breakdowns, and spend caps before expanding usage across a team.

7. **Localization is Growing, Not Just Nice-to-Have**
   - DeepSeek TUI has 8+ locale requests. Claude Code has Russian locale (#69078). OpenCode has Chinese character issues (#23629). Pi handles non-UTF-8 files.
   - **Action:** For global teams, verify encoding support and i18n coverage, especially for CJK and Cyrillic codebases.

### Recommendations by Use Case

| Use Case | Recommended Tool | Rationale |
|----------|-----------------|-----------|
| **Enterprise security-first** | Claude Code | Strongest sandbox, security PRs landing |
| **macOS pro desktop** | Codex | Best desktop experience (if Mac) |
| **Multi-platform CI/CD** | Gemini CLI or Pi | Nightly releases, active bug fixing |
| **GitHub-centric team** | Copilot CLI | Best GitHub integration, stable |
| **Open-source fork flexibility** | OpenCode | Model-gated auto-approve, active patches |
| **Global/localized dev teams** | DeepSeek TUI | Best i18n support, community-driven |
| **Cost-sensitive BYOK** | Pi or Gemini CLI | API-key flexibility, no subscription lock-in |

---

*Report generated 2026-07-27 from community digest data across 9 repositories. All statistics refer to the last 24 hours unless otherwise noted.*

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
*Data as of 2026-07-27 | Source: github.com/anthropics/skills*

---

## 1. Top Skills Ranking

### #1: Skill-Creator Evaluation Pipeline Fix
**PR #1298** — [View](https://github.com/anthropics/skills/pull/1298) — **Status: Open**
- **Functionality:** Fixes `run_eval.py` which consistently reports 0% recall for all skill descriptions, breaking the description-optimization loop (`run_loop.py`, `improve_description.py`). Addresses Windows stream reading, trigger detection, and parallel worker issues.
- **Discussion highlights:** References 10+ independent reproductions of the bug (linked to Issue #556). Community frustration is high—the skill-creator's core feedback loop is effectively broken.
- **Related issues:** #556 (12 comments, 7 👍), #1169 (3 comments), #1061 (3 comments) — Windows compatibility and universal 0% recall problems.

### #2: Document Typography Quality Control
**PR #514** — [View](https://github.com/anthropics/skills/pull/514) — **Status: Open**
- **Functionality:** Prevents orphan word wrap, widow paragraphs, and numbering misalignment in AI-generated documents. Addresses a universal pain point in Claude's output formatting.
- **Discussion highlights:** Recognizes that typographic issues affect *every* document Claude generates, and users rarely request fixes for them explicitly. Strong "silent quality" value proposition.

### #3: PDF Case-Sensitivity Fix
**PR #538** — [View](https://github.com/anthropics/skills/pull/538) — **Status: Open**
- **Functionality:** Corrects 8 case-sensitivity mismatches in `skills/pdf/SKILL.md` where uppercase file references (`REFERENCE.md`, `FORMS.md`) don't match the actual lowercase filenames, causing breakage on case-sensitive filesystems.
- **Discussion highlights:** Minimal change with outsized impact—demonstrates ecosystem maturity as contributors focus on correctness over novelty.

### #4: ODT OpenDocument Skill
**PR #486** — [View](https://github.com/anthropics/skills/pull/486) — **Status: Open**
- **Functionality:** Enables creation, filling, reading, and conversion of OpenDocument Format files (.odt, .ods). Triggers on mentions of ODT, ODS, ODF, LibreOffice, or open-source document formats.
- **Discussion highlights:** Fills a significant compatibility gap for enterprise users who depend on LibreOffice/OpenOffice ecosystems.

### #5: Frontend-Design Skill Clarity Overhaul
**PR #210** — [View](https://github.com/anthropics/skills/pull/210) — **Status: Open**
- **Functionality:** Revises the frontend-design skill to ensure every instruction is actionable within a single conversation and steers Claude's behavior with specific, testable guidance.
- **Discussion highlights:** Exemplifies the community's focus on *skill quality* over *skill quantity*—making existing skills more reliable and deterministic.

### #6: Skill Quality Analyzer & Security Analyzer
**PR #83** — [View](https://github.com/anthropics/skills/pull/83) — **Status: Open**
- **Functionality:** Two meta-skills for evaluating other skills across structure/documentation (20%), completeness, correctness, and security. A self-audit mechanism for the ecosystem itself.
- **Discussion highlights:** Meta-skills represent a maturing ecosystem where the community builds tools to regulate skill quality at scale.

### #7: Self-Audit Reasoning Quality Gate
**PR #1367** — [View](https://github.com/anthropics/skills/pull/1367) — **Status: Open**
- **Functionality:** Two-stage audit: mechanical file verification (do all claimed outputs exist?) followed by a four-dimension reasoning audit in damage-severity priority order. Universal across projects and models.
- **Discussion highlights:** Most recent high-activity PR (June 28-July 2). Proposes a structured quality gate before delivery, aligning with broader community interest in output verification.

---

## 2. Community Demand Trends

### 🔴 Security & Trust Boundary Concerns
**Issue #492** (43 comments, 2 👍) — Community skills distributed under `anthropic/` namespace enable trust boundary abuse. This is the most-discussed issue in the entire repository. Users are concerned that skills hosted in Anthropic's official namespace may impersonate official capabilities and trick users into granting elevated permissions.

### 🔴 Org-Wide Skill Sharing
**Issue #228** (16 comments, 8 👍) — Strong demand for direct skill sharing within organizations. Current workflow (download `.skill` file → Slack/Teams → manual upload) is inefficient. Users want a shared skill library or direct sharing links in Claude.ai.

### 🔴 Skill-Creator Reliability
**Issue #556** (12 comments, 7 👍) / **#1169** (3 comments) / **#1061** (3 comments, 2 👍) — The skill-creator's evaluation pipeline is fundamentally broken on multiple fronts (0% recall, Windows incompatibility, subprocess encoding). This is the ecosystem's critical infrastructure bottleneck—until fixed, skill optimization is optimizing against noise.

### 🟡 Document Format Expansion
Multiple PRs (#486 ODT, #514 typography, #538 PDF fixes) signal demand for broader document format support and output quality controls. The community wants Claude to produce production-ready documents, not drafts.

### 🟡 Meta-Quality & Governance
**Issue #412** (6 comments) and **PR #83** (skill-quality-analyzer) indicate growing interest in skills that audit, govern, or evaluate other skills—a sign of ecosystem maturation.

---

## 3. High-Potential Pending Skills

These active PRs have sustained discussion and are likely to merge soon:

| PR | Skill | Last Activity | Why It's Close |
|---|---|---|---|
| [#1367](https://github.com/anthropics/skills/pull/1367) | Self-Audit Quality Gate | Jul 2 | Strong reasoning structure, universal applicability |
| [#1302](https://github.com/anthropics/skills/pull/1302) | Color-Expert | Jul 21 | Highly specific, well-scoped, from known contributor meodai |
| [#525](https://github.com/anthropics/skills/pull/525) | Pyxel Retro Game Dev | Jul 15 | MCP integration, niche but clear use case |
| [#723](https://github.com/anthropics/skills/pull/723) | Testing Patterns | Apr 21 | Comprehensive testing trophy model coverage |
| [#486](https://github.com/anthropics/skills/pull/486) | ODT OpenDocument | Apr 14 | Enterprise demand, fills format gap |

**Emerging: Compact Memory Skill** (Issue #1329, 9 comments) — Symbolic notation for compact agent state representation to reduce context consumption in long-running agents. Not yet a PR but high community interest.

---

## 4. Skills Ecosystem Insight

**The community's most concentrated demand is for fixing and hardening the skill-creator infrastructure itself—the evaluation pipeline, Windows compatibility, and security boundaries—before the ecosystem can sustainably scale to new skill categories, revealing that the community prioritizes toolchain reliability over skill quantity.**


---

# Claude Code Community Digest — 2026-07-27

## Today's Highlights

No new releases arrived today, but the community remains intensely focused on a critical Fable 5 advisor bug (#73365) that has drawn 88 comments and 166 upvotes—the most active issue in the repo. A newly surfaced macOS desktop tool-dispatch regression (#80002) is also generating significant discussion (63 comments). On the infrastructure side, PRs landed to fix Windows agentic reviewer support (#81426) and close an IPv6 firewall bypass in the devcontainer (#81423).

## Releases

No new versions published in the last 24 hours. The latest stable version remains **v2.1.220** (as referenced in issue #81526).

## Hot Issues

1. **[#73365 – Fable 5 advisor “unavailable” across all sessions](https://github.com/anthropics/claude-code/issues/73365)**  
   *88 comments, 166 👍*  
   The advisor never connects despite a working `--model claude-fable-5` CLI flag. Likely a model-registry or API routing bug. Community frustration is high; many experience the same on Windows.

2. **[#80002 – macOS Desktop never dispatches tools/call to Filesystem extension](https://github.com/anthropics/claude-code/issues/80002)**  
   *63 comments, 27 👍*  
   `tools/list` succeeds but `tools/call` is never logged. Regression in the desktop app prevents file operations. Users are sharing workarounds (reverting to CLI).

3. **[#32870 – claude.exe triggers Windows BSOD via Wof.sys](https://github.com/anthropics/claude-code/issues/32870)**  
   *34 comments*  
   Directory listing using `NtQueryDirectoryFileEx` crashes the OS. A driver-level bug that stalled for months; updated today, suggesting renewed attention.

4. **[#28791 – Sync conversation history between CLI and Desktop app](https://github.com/anthropics/claude-code/issues/28791)**  
   *27 comments, 108 👍*  
   The highest-voted feature request. Users want seamless context migration across interfaces. No official response yet.

5. **[#79824 – Artifact sharing fails: “This version can't be shared publicly”](https://github.com/anthropics/claude-code/issues/79824)**  
   *2 comments, 10 👍*  
   Persists across republish and new artifacts. Blocks any public sharing workflow. Likely a cache or version-pointer bug.

6. **[#73423 – /model picker shows Fable 5 disabled while CLI flag works](https://github.com/anthropics/claude-code/issues/73423)**  
   *4 comments, 2 👍*  
   Same root cause as #73365 but specific to the TUI model picker. User reports it works with `--model` but not via the interactive menu.

7. **[#75956 – Unable to connect to API (ECONNRESET) on macOS](https://github.com/anthropics/claude-code/issues/75956)**  
   *4 comments, 1 👍*  
   Intermittent TLS/dns failures. Possibly related to Bun runtime’s resolver on macOS networking stack.

8. **[#80199 – Max X5 Usage instantly reaches 100% after software update](https://github.com/anthropics/claude-code/issues/80199)**  
   *6 comments*  
   Users on Max plan report immediate spend-cap hit after upgrading. Suspect a billing-credits check regression.

9. **[#80705 – Usage leak: unexpected token consumption](https://github.com/anthropics/claude-code/issues/80705)**  
   *6 comments*  
   “Usage leak” suggests token counting or billing attribution error. User reports charges without corresponding output.

10. **[#68663 – PreCommand / PostCommand hook types for slash command lifecycle](https://github.com/anthropics/claude-code/issues/68663)**  
    *2 comments*  
    Enhancement request for telemetry on custom slash commands. Part of a broader need for deeper hook instrumentation.

## Key PR Progress

All 7 open PRs updated in the last 24h are included:

1. **[#81500 – Fix 404 walkthrough links in AWS gateway example](https://github.com/anthropics/claude-code/pull/81500)**  
   Updates seven broken `code.claude.com` links in docs/examples. Small but blocks new users from following the AWS gateway tutorial.

2. **[#20448 – Add web4-governance plugin for AI governance with R6 workflow](https://github.com/anthropics/claude-code/pull/20448)**  
   Long-standing plugin PR (opened January 2026) with T3 trust tensors and audit trails. Still open; community interest persists.

3. **[#38167 – Use authenticated GitHub API in devcontainer firewall script](https://github.com/anthropics/claude-code/pull/38167)**  
   Respects `GH_TOKEN` to avoid rate-limit failures in shared-IP environments. Important for CI and multi-user setups.

4. **[#81426 – Fix security-guidance agentic reviewer on Windows (venv layout)](https://github.com/anthropics/claude-code/pull/81426)**  
   Windows users could not use the strongest security-review layer because the bootstrap script skipped `win32`. This PR adapts the Python venv detection for Windows.

5. **[#68693 – Fix duplicate label script: add label additively, don't replace](https://github.com/anthropics/claude-code/pull/68693)**  
   `closeIssueAsDuplicate` was overwriting all existing labels (platform/area/priority) with only `[duplicate]`. Now preserves other labels.

6. **[#81423 – Block IPv6 egress in devcontainer firewall](https://github.com/anthropics/claude-code/pull/81423)**  
   The init-firewall script only applied `iptables` rules; `ip6tables` was untouched, leaving a complete IPv6 bypass. This closes that gap.

7. **[#81421 – Make bash-sandbox example fail closed when sandbox unavailable](https://github.com/anthropics/claude-code/pull/81421)**  
   Security best-practice: the example settings should use `"failIfUnavailable": true` so that if the sandbox cannot start, tools are denied rather than falling through to the host.

## Feature Request Trends

The most consistently requested capabilities from today’s issue set are:

- **Session & context portability** – Sync conversation history between CLI and desktop app (#28791, 108👍) and promote/demote subagents to full sessions (#80798). Users want continuity across devices and the ability to inspect long-running orchestrated workflows.
- **UI localization** – Russian (and other languages) for the desktop app (#69078). Non-English speakers increasingly adopt Claude Code.
- **Billing transparency and control** – Multiple requests for clear visibility into which account/org is being billed (#77993) and louder consent when `ANTHROPIC_API_KEY` overrides subscription billing (#78491).
- **Hook lifecycle expansion** – PreCommand/PostCommand hooks (#68663) and better telemetry for tool permissions (#80693). Users want finer-grained control over agent behavior.
- **Sandbox isolation improvements** – Warnings about worktree cleanup data loss (#74386) and sandbox silently deleting git metadata (#81526) point to a need for more careful liveness checks and user prompts.

## Developer Pain Points

Several recurring themes emerge from the high-traffic issues:

- **Model availability instability** – Fable 5 (and Opus 5) intermittently show as disabled or fail mid-session with ”Usage credits required” (#73365, #73423, #78614). This undermines trust in the Max subscription.
- **Spend/billing surprises** – Users on Max plans hitting instant 100% usage after updates (#80199) or unknowingly routing all traffic through API keys (#78491) indicate gaps in the billing attribution model.
- **Windows-specific breakage** – BSOD (#32870), VS Code extension PATH detection with non-ASCII usernames (#80087), Cowork sandbox VM timeout on ARM64 (#78104) – Windows remains a second-class platform.
- **Regression sensitivity** – The `tools/call` desktop bug (#80002) and 100% usage spike (#80199) both follow version updates, suggesting insufficient regression test coverage for billing and tool dispatch.
- **Networking fragility** – DNS resolution failures due to trailing comments in `/etc/resolv.conf` (#78529) and ECONNRESET errors (#75956) point to Bun runtime resolver edge cases that are hard to diagnose.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# Codex Community Digest — 2026-07-27

## Today’s Highlights

This week’s digest is dominated by **Windows stability and sandbox failures**: a taskkill/conhost storm (#34260) and GPU process crashes in the embedded browser (#34133) are making the Windows desktop app nearly unusable for many. On the positive side, a long‑awaited **Linux desktop app** (#11023) has attracted overwhelming community support (852 👍), and the MCP OAuth stack has been largely reworked through a series of closed PRs. No new releases landed today.

## Releases

No new versions were published in the last 24 hours.

---

## Hot Issues

1. **[#11023 – Codex desktop app for Linux](https://github.com/openai/codex/issues/11023)**  
   *187 comments · 852 👍*  
   The most‑upvoted issue by far. Users on macOS face power‑consumption problems (#10432) and want a native Linux app. Community demand is massive, but no official response yet.

2. **[#34260 – Windows Desktop: unbounded taskkill.exe/conhost.exe cleanup storm exhausts WMI](https://github.com/openai/codex/issues/34260)**  
   *32 comments · 10 👍*  
   A severe performance bug where hundreds of `taskkill.exe` processes accumulate, querying WMI until the provider quota is exhausted, rendering the desktop unresponsive. Critical for Windows users.

3. **[#21753 – Full Claude Code Hook Parity (29+)](https://github.com/openai/codex/issues/21753)**  
   *29 comments · 21 👍*  
   Umbrella request to implement 29+ lifecycle hooks matching Claude Code’s automation surface. Community sees hooks as essential for CI/CD and heavy automation.

4. **[#31573 – OAuth authentication fails at issuer validation](https://github.com/openai/codex/issues/31573)**  
   *24 comments · 55 👍*  
   Free‑tier CLI users report authentication broken after a recent update. High engagement because it blocks all usage.

5. **[#34133 – Windows: Page.captureScreenshot crashes GPU process after Code Integrity rejection of vk_swiftshader.dll](https://github.com/openai/codex/issues/34133)**  
   *21 comments · 0 👍*  
   In‑app browser screenshot triggers a GPU crash, often freezing the app. Reproduced across multiple Windows versions. Linked to BRWPLAT‑293.

6. **[#24948 – Codex session logs grow to 700MB–2GB from repeated compaction history](https://github.com/openai/codex/issues/24948)**  
   *23 comments · 1 👍*  
   Recurring issue where session logs balloon due to repeated history compaction and raw tool output. Impacts disk space and startup time.

7. **[#26562 – Computer Use plugin unavailable in Codex Desktop on Windows](https://github.com/openai/codex/issues/26562)**  
   *18 comments · 3 👍*  
   “Computer Use” (agentic desktop control) is simply missing on Windows. Frustrating for Pro subscribers who rely on the feature.

8. **[#30712 – Windows desktop app injects split writable roots, causing apply_patch to fail](https://github.com/openai/codex/issues/30712)**  
   *14 comments · 13 👍*  
   Sandbox misconfiguration forces agents to bypass safe edit paths and fall back to raw PowerShell file writes – a security and reliability concern.

9. **[#32530 – VS Code Codex panel intermittently stuck loading on Linux](https://github.com/openai/codex/issues/32530)**  
   *12 comments · 12 👍*  
   Webview assets fail with `net::ERR_FAILED` on Ubuntu 26.04. Blocks IDE integration for Linux developers.

10. **[#16866 – macOS kernel panic (os_refcnt overflow) with Codex v0.118.0](https://github.com/openai/codex/issues/16866)**  
    *11 comments · 1 👍*  
    Rare but critical: Codex triggers full kernel panics on Apple Silicon. Two crashes in one day reported. Likely related to process lifecycle management.

---

## Key PR Progress

1. **[#35537 – Add managed policy for in-app updates](https://github.com/openai/codex/pull/35537)**  
   *Closed* – Introduces a `features.in_app_updates` policy that administrators can disable via `requirements.toml`. Exposes the policy through `configRequirements/read`.

2. **[#35530 – Track model and personality in world state](https://github.com/openai/codex/pull/35530)**  
   *Closed* – Persists model and personality choices into the world‑state snapshot, enabling correct replay and model‑switch awareness.

3. **[#35525 – Skip inactive TUI threads without pending user interaction](https://github.com/openai/codex/pull/35525)**  
   *Closed* – Performance optimization: only collect buffered requests from threads that have pending input/approval, reducing overhead when switching threads.

4. **[#35524 – Preserve terminal turn errors in replayed history](https://github.com/openai/codex/pull/35524)**  
   *Closed* – Ensures errors embedded in turn completion events (e.g., model‑overload) are visible in TUI traces after restart.

5. **[#35523 – Shut down the in-process outbound router explicitly](https://github.com/openai/codex/pull/35523)**  
   *Closed* – Fixes a shutdown hang where detached processor work kept the outbound router alive.

6. **[#30295 – Serialize MCP OAuth login and logout](https://github.com/openai/codex/pull/30295)**  
   *Closed* – Core of the MCP OAuth rework. Introduces critical‑section serialization to prevent race conditions during login/logout.

7. **[#30296 – Report MCP OAuth Auto store drift](https://github.com/openai/codex/pull/30296)**  
   *Closed* – Adds telemetry to detect when the persisted OAuth store diverges from the runtime state, aiding debugging.

8. **[#30294 – Route MCP OAuth recovery through Codex](https://github.com/openai/codex/pull/30294)**  
   *Closed* – Ensures OAuth recovery flows (e.g., token refresh) go through the Codex service, not the MCP client directly.

9. **[#30416 – Serialize authoritative MCP OAuth refresh transactions](https://github.com/openai/codex/pull/30416)**  
   *Closed* – Last PR in the OAuth stack; uses a distributed lock to serialize refresh transactions, preventing duplicate token requests.

10. **[#30985 – Let idle auto-attached threads unload](https://github.com/openai/codex/pull/30985)**  
    *Open* – Distinguishes implicit observer attachments from explicit subscriptions, allowing core‑created threads to reach the 30‑minute unload lifecycle when no explicit subscribers remain.

---

## Feature Request Trends

- **Cross‑platform parity** – The Linux desktop app (#11023) remains the single most requested feature. Users also want Computer Use and the embedded browser to work fully on Windows (#26562, #34133).
- **Hook automation surface** – Achieving “Claude Code hook parity” (#21753) is a high‑priority umbrella, with calls for a complete set of lifecycle hooks.
- **Session storage efficiency** – Several requests ask for delta‑/DAG‑based session storage (#22593) to avoid massive file duplication and compaction.
- **OAuth and MCP reliability** – The MCP OAuth stack rework (series of PRs) reflects strong user demand for stable, reauth‑free MCP connections (#13852).
- **Admin‑controllable updates** – The managed policy for in‑app updates (#35537) suggests growing enterprise interest in deployment control.

---

## Developer Pain Points

- **Windows instability** – GPU crashes due to Code Integrity rejections (#34133, #27828, #35352), taskkill storms (#34260), sandbox split‑root failures (#30712), and app‑unlaunchable states (#35347) repeatedly frustrate Windows developers.
- **Session bloat** – Logs growing to >1 GB (#24948) and high‑frequency disk writes from per‑SSE SQLite persistence (#35092) make long sessions impractical.
- **macOS kernel panics** – A small but severe subset of users experience full OS crashes (#16866) under Codex CLI 0.118.
- **Rebuilding history** – When sessions are replayed important errors are lost (#35524) and forks duplicate history (#22593), making debugging confusing.
- **Authentication friction** – OAuth issuer validation failures (#31573) and Supabase MCP reauth loops (#13852) hinder productivity for free‑tier and MCP users alike.
- **VS Code integration on Linux** – The webview loading failure (#32530) blocks many Linux developers from using the IDE extension at all.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-07-27

## Today’s Highlights
Agent reliability remains the top concern: a critical bug where subagents falsely report success after hitting turn limits is under active discussion, and the generalist agent hang issue continues to frustrate users. On the positive side, several security and stability fixes landed, including a deep-merge configuration fix, an AbortSignal leak patch, and a major dependency bump for the core `@google/genai` library. The nightly build `v0.54.0-nightly.20260727.g3818efbbf` is now available.

## Releases
- **v0.54.0-nightly.20260727.g3818efbbf** — Latest nightly release.  
  [Full Changelog](https://github.com/google-gemini/gemini-cli/compare/v0.54.0-nightly.20260726.g3818efbbf...v0.54.0-nightly.20260727.g3818efbbf)

## Hot Issues
1. **[#22323](https://github.com/google-gemini/gemini-cli/issues/22323)** — Subagent recovery after `MAX_TURNS` reported as success (P1, 12 comments). A `codebase_investigator` subagent marks a turn-limited run as “GOAL” success, masking the interruption. Community concerned about false positive termination signals.
2. **[#21409](https://github.com/google-gemini/gemini-cli/issues/21409)** — Generalist agent hangs forever (P1, 8 comments, 8 👍). Simple tasks like folder creation stall indefinitely; users work around by disabling subagent delegation.
3. **[#24353](https://github.com/google-gemini/gemini-cli/issues/24353)** — Robust component‑level evaluations (P1, 7 comments). Epic tracking the maturing of behavioral evals – 76 tests exist but coverage gaps remain.
4. **[#22745](https://github.com/google-gemini/gemini-cli/issues/22745)** — Assess AST-aware file reads, search, and mapping (P2, 7 comments). Investigation into reducing token noise and improving navigation accuracy.
5. **[#21968](https://github.com/google-gemini/gemini-cli/issues/21968)** — Gemini does not use skills and sub-agents enough (P2, 6 comments). Anecdotal but repeated: even with custom skills defined, the model rarely invokes them unless explicitly told.
6. **[#26522](https://github.com/google-gemini/gemini-cli/issues/26522)** — Auto Memory retries low‑signal sessions indefinitely (P2, 5 comments). The extraction agent loops over sessions it already chose to skip, wasting tokens.
7. **[#26525](https://github.com/google-gemini/gemini-cli/issues/26525)** — Add deterministic redaction and reduce Auto Memory logging (P2, 4 comments). Security concern: secrets are sent to the model before redaction, and skill logs may leak sensitive data.
8. **[#25166](https://github.com/google-gemini/gemini-cli/issues/25166)** — Shell command gets stuck with “Waiting input” after completion (P1, 4 comments, 3 👍). A frequent frustration – simple CLI commands remain active, blocking the session.
9. **[#22232](https://github.com/google-gemini/gemini-cli/issues/22232)** — Enhance browser_agent resilience: automatic session takeover and lock recovery (P3, 4 comments). Feature request to handle orphaned browser profiles gracefully.
10. **[#21983](https://github.com/google-gemini/gemini-cli/issues/21983)** — Browser subagent fails in Wayland (P1, 4 comments, 1 👍). The browser agent terminates with “GOAL” but offers no usable result on Wayland compositors.

## Key PR Progress
1. **[#28364](https://github.com/google-gemini/gemini-cli/pull/28364)** — `fix(core): deep-merge user model config over defaults`. Resolves a shallow‑spread bug that caused nested config fields to be lost (priority P2, closed).
2. **[#28369](https://github.com/google-gemini/gemini-cli/pull/28369)** — `feat(evals): add local report command and developer documentation`. Adds `npm run eval:report` to aggregate pass rates from Vitest results (closed).
3. **[#28363](https://github.com/google-gemini/gemini-cli/pull/28363)** — `fix(core): prevent AbortSignal listener leak in ShellExecutionService`. Fixes a memory leak in long‑lived CLI sessions (closed).
4. **[#28446](https://github.com/google-gemini/gemini-cli/pull/28446)** — `fix(auth): use native fetch for OAuth token exchange to avoid "Premature close"`. Addresses login failures on headless VPSes (open, P1).
5. **[#28447](https://github.com/google-gemini/gemini-cli/pull/28447)** — `docs(get-started): add Windows PowerShell troubleshooting`. Guides new Windows users (open, P2).
6. **[#28523](https://github.com/google-gemini/gemini-cli/pull/28523)** — `fix(core): enforce explicit tag length and validation in file keychain`. Hardens credential storage against malformed data (open).
7. **[#28403](https://github.com/google-gemini/gemini-cli/pull/28403)** — `fix(core): block $VAR and ${VAR} variable expansion bypass`. Patches a security bypass in shell substitution detection, addressing GHSA‑wpqr‑6v78‑jr5g (open, P1).
8. **[#28386](https://github.com/google-gemini/gemini-cli/pull/28386)** — `fix(vscode): track activation disposables`. Ensures VS Code companion extension properly manages registrations, fixing an activation leak (open, P2).
9. **[#28543](https://github.com/google-gemini/gemini-cli/pull/28543)** — `chore(deps): bump @google/genai from 1.30.0 to 2.12.0`. Major dependency update that may introduce breaking changes; important for compatibility (closed).
10. **[#28442](https://github.com/google-gemini/gemini-cli/pull/28442)** — Large (size XL, P1) PR with a broad “Main” description. Likely a merge of multiple fixes or features; worth monitoring.

## Feature Request Trends
- **AST‑aware tooling** — Several issues explore using abstract syntax trees to improve file reads, search, and codebase mapping (e.g., #22745, #22746). Aim: reduce token waste and improve navigation precision.
- **Memory system enhancements** — Auto Memory retry loops (#26522), patch validation (#26523), and redaction guarantees (#26525) indicate users want a more robust and secure memory subsystem.
- **Browser agent resilience** #22232 and #21983 highlight the need for session lock recovery, better Wayland support, and configuration overrides.
- **Agent self‑awareness and control** #21432, #21968, and #22672 show demand for the agent to better understand its own capabilities, respect user settings, and avoid destructive behavior.

## Developer Pain Points
- **Hangs and silent failures** — The generalist agent hang (#21409) and shell command stuck state (#25166) are the most impactful, causing lost productivity.
- **Misleading success reports** — Subagent termination due to max turns reported as “GOAL” (#22323) erodes trust in the system’s feedback.
- **Security and permission issues** — Variable expansion bypass (#28403), secrets exposed before redaction (#26525), and subagents running without permission (#22093) are recurring concerns.
- **Configuration not honoured** — Settings.json overrides ignored by the browser agent (#22267), symlinks not accepted as agent files (#20079), and deep‑merge bugs (#28364) cause unexpected behavior.
- **Poor diagnostic context** — Bug reports lack subagent traces (#21763) and chat sharing omits subagent trajectories (#22598), making debugging difficult.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest
**Date:** 2026-07-27

---

## Today's Highlights
No new releases landed in the last 24 hours, but the community reported several regressions and platform‑specific crashes. A critical zombie‑process bug (closed) gained traction, while a new Windows exit crash and a TUI hang on NFS/GPFS highlight ongoing reliability concerns. Feature requests continue to centre on MCP flexibility, caching improvements, and standardised `.agents` conventions.

---

## Releases
No new releases were published in the last 24 hours.

---

## Hot Issues
10 noteworthy issues from the past day, ordered by relevance and community engagement.

1. **[#4163](github/copilot-cli Issue #4163) – Child‑process zombies accumulate under copilot PID**  
   *Closed, 3 👍*  
   **Why it matters:** Finished subprocesses leak as zombies at ~2/min, exhausting PIDs and destabilising the host. The fix is now closed; validation by the community is pending. *Reaction:* High thumbs‑up; a clear stability win for Linux users.

2. **[#4053](github/copilot-cli Issue #4053) – TUI hangs at "Loading: N skills" on NFS/GPFS**  
   *Open, triaged*  
   **Why it matters:** The CLI becomes completely unresponsive on shared filesystems (GPFS, NFS). A `SIGCHLD` race during `which gh` subprocess spawning with 30+ concurrent Tokio threads is suspected. *Reaction:* Few comments, but affects enterprise environments.

3. **[#4263](github/copilot-cli Issue #4263) – Responses disappear after submit in Windows Terminal (vertical split)**  
   *Open, triaged*  
   **Why it matters:** Content scrolls out of view in vertical split panes; only the first screen is visible until a new command. *Reaction:* Newly reported; no workarounds yet.

4. **[#4258](github/copilot-cli Issue #4258) – Interactive `-i` prompt ignored with custom/BYOK provider**  
   *Open, triaged*  
   **Why it matters:** Users bringing their own API key lose the ability to auto‑submit a startup prompt, breaking automation. Works with the standard provider. *Reaction:* Isolated but blocking for BYOK workflows.

5. **[#4202](github/copilot-cli Issue #4202) – Built‑in `view` tool reports "Path does not exist" for existing files (1.0.73)**  
   *Open, triaged*  
   **Why it matters:** Regression started in 1.0.72; the `view` tool cannot read local files. Blocks file‑browsing inside Copilot. *Reaction:* Single report but a clear functional regression.

6. **[#4217](github/copilot-cli Issue #4217) – libuv crash on exit (Windows) – `FAST_FAIL_FATAL_APP_EXIT`**  
   *Open, 1 👍*  
   **Why it matters:** Every `copilot.exe` teardown triggers a fatal fail‑fast (`0xc0000409`). Work completes normally, but the crash is jarring and may mask other teardown issues. *Reaction:* Growing concern for Windows‑first devs.

7. **[#4203](github/copilot-cli Issue #4203) – Remote MCP (OAuth) ignores cached refresh tokens**  
   *Open*  
   **Why it matters:** Forces interactive re‑auth even when a valid refresh token exists, breaking headless or CI scenarios. Violates RFC 6749 §6. *Reaction:* Important for MCP adopters with short‑lived access tokens.

8. **[#4259](github/copilot-cli Issue #4259) – `--resume` replays orphaned permission.requested events**  
   *Open*  
   **Why it matters:** Permission prompts from a previous dead session replay on every resume indefinitely. Users cannot clear them without deleting the event log. *Reaction:* Niche but frustrating for long‑running sessions.

9. **[#4260](github/copilot-cli Issue #4260) – Desktop app ignores `askUser: false` from settings.json**  
   *Open*  
   **Why it matters:** The desktop app (separate host) never reads the CLI config; users cannot disable the `ask_user` tool. *Reaction:* Highlights a config‑consistency gap between CLI and desktop.

10. **[#4264](github/copilot-cli Issue #4264) – Extensions slash commands fire multiple times**  
    *Open*  
    **Why it matters:** A single slash command queues 3–5 duplicate instances, causing duplicate tool executions. *Reaction:* Newly reported; impacts extension reliability.

---

## Key PR Progress
No pull requests were updated in the last 24 hours.

---

## Feature Request Trends
Distilling the most‑requested directions from recent issues:

- **MCP flexibility**  
  - *[#4205](#)* – Allow MCP configs to add runtime headers even when a registry policy is active.  
  - *[#4203](#)* – Proper OAuth refresh token grant (no forced re‑auth).

- **Standardised `.agents` conventions**  
  *[#4204](#)* – Extend `.agents` discovery to instructions, agents, and hooks for any opened folder, not just Git repos.

- **Model‑level caching**  
  *[#4256](#)* – Add `cache_control` breakpoints to Anthropic requests to reuse expensive context (system prompt, tool definitions) across turns.

- **Desktop‑CLI setting parity**  
  *[#4260](#)* – Honour `askUser: false` and other CLI settings in the desktop app.

- **Extension lifecycle improvements**  
  *[#4264](#)* – Fix duplicate slash‑command firing and ensure robust cleanup.

---

## Developer Pain Points
Recurring frustrations and high‑frequency requests observed this week:

- **Windows-specific crashes** – Exit crash (`#4217`) and TUI rendering issues in Windows Terminal (`#4263`).
- **Filesystem‑sensitive hangs** – TUI stalls on NFS/GPFS (`#4053`); no workaround for shared home directories.
- **Zombie processes** – Child processes not reaped on Linux (`#4163`, now closed, but confirmation needed).
- **OAuth refresh failures** – Remote MCP servers force interactive login even with cached refresh tokens (`#4203`).
- **Permission‑event replay** – `--resume` on a dead session repeatedly shows unresolved permission prompts (`#4259`).
- **Regression in `view` tool** – Broken file‑reading in 1.0.73 (`#4202`).
- **BYOK provider incompatibility** – Interactive `-i` prompt ignored with custom providers (`#4258`).
- **Extension/command duplication** – Slash commands triggering multiple times (`#4264`).
- **Desktop app config inconsistency** – `askUser: false` not respected (`#4260`).

---

*Digest generated from [github/copilot-cli](https://github.com/github/copilot-cli) data for 2026-07-27.*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-07-27

A quiet day with no new releases or PRs. A single critical bug (#2559) was closed, which disrupted image pasting in the Web UI and caused models to receive only a placeholder string — this fix will restore reliable multimodal input for affected users.

---

## Releases

No new versions were published in the last 24 hours.

---

## Hot Issues

Only one issue was updated in the past day. It is highlighted here as it directly impacts multimodal workflows.

- [#2559] [Bug] Web: pasted images intermittently dropped; model only receives `"[image omitted for provider compatibility]"` placeholder  
  **Author:** nothankyouzzz | **Created:** 2026-07-26 | **Updated:** 2026-07-26 | **Status:** CLOSED  
  **Summary:** In the web client, pasting images into a chat session occasionally fails to include the actual image in the model prompt. Instead the user sees a generic placeholder saying the image was omitted for “provider compatibility.” The bug occurs inconsistently even within the same session.  
  **Why it matters:** Image support is a key feature for code-adjacent tasks (screenshots, architecture diagrams). Intermittent failures break user trust and block visual debugging workflows. The single comment suggests the team triaged quickly, likely linking it to a misconfigured provider adapter or a race condition in the upload pipeline.  
  **Link:** [Issue #2559](https://github.com/MoonshotAI/kimi-cli/issues/2559)

---

## Key PR Progress

No pull requests were updated in the last 24 hours.

---

## Feature Request Trends

Based on the only active issue, the most prominent recurring demand is **robust multimodal input support**. Users expect seamless clipboard image uploads from browsers and desktop apps. The placeholder text (“omitted for provider compatibility”) indicates a deeper desire for transparent provider-agnostic handling — users want images to work regardless of the underlying LLM service, with fallback or conversion guidance clearly communicated when necessary.

---

## Developer Pain Points

- **Unreliable image pasting in Web UI:** Intermittent failures create an unpredictable workflow, forcing developers to manually re-attach images or switch to file-based uploads.
- **Confusing placeholder messages:** The string `[image omitted for provider compatibility; re-read the file to view it or get conversion guidance]` is unhelpful — it does not explain *why* the image was dropped or what the user can do to fix it.
- **Provider compatibility friction:** The very existence of this placeholder hints at recurring integration headaches when switching between different model providers that have varying image‑handling capabilities. Developers want the tool to either normalize image input or fail fast with actionable error messages.

---

*Generated from GitHub data for the MoonshotAI/kimi-cli repository.*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-07-27

## Today’s Highlights
A fresh patch release **v1.18.6** landed today, fixing a branch-specific repository cache bug and improving Desktop client‑API compatibility for directory/project/session/terminal flows. On the issue tracker, a long‑standing terminal‑flooding bug (#26198) and a critical Desktop crash on project reload (#38789) were closed, while a new open issue (#39036) reports that `opencode web` is completely unusable on macOS Golden Gate Beta. Several high‑quality PRs merged today, including a model‑gated auto‑approve mode (#39015) and a fix for the web SSE stream disconnecting on mobile (#39028).

## Releases
**v1.18.6** — [[GitHub Release](https://github.com/anomalyco/opencode/releases/tag/v1.18.6)]  
- **Core**: Fixed branch‑specific repository caches so refreshing one reference no longer moves another branch checkout.  
- **Desktop**: Improved compatibility with the newer client API across directory, project, session, and terminal flows.  
- **Desktop**: Fixed “legacy MCP” issues (not further detailed in the changelog).

## Hot Issues (Top 10 by Community Attention)
1. **[#26198 – Terminal flooded with raw mouse escape sequences](https://github.com/anomalyco/opencode/issues/26198)**  
   *17 comments, 5👍* — The CLI enables mouse tracking but fails to disable it after a command runs or is interrupted, leaving the terminal stuck in raw mouse reporting mode. **Impact**: Affects all terminal‑based usage; a classic UX regression.

2. **[#38789 – Desktop v1.18.5: UnsupportedContentType on project reload](https://github.com/anomalyco/opencode/issues/38789)**  
   *15 comments, 5👍* — After updating to Desktop v1.18.5, the app shows “无法重新加载test UnsupportedContentType”. Root cause traced to the generated client SDK. **Impact**: Blocks users from opening existing projects after the update.

3. **[#18567 – Shared conversation UI confusing](https://github.com/anomalyco/opencode/issues/18567)**  
   *10 comments* — Users landing on the oldest message with no navigation cues; generic labels make it hard to scan. **Impact**: Hinders collaborative debugging and sharing of long conversations.

4. **[#15226 – `tool_choice: 'required'` incompatible with thinking‑enabled models](https://github.com/anomalyco/opencode/issues/15226)**  
   *7 comments, 6👍* — OpenCode unconditionally sets `toolChoice: "required"` for structured output, which reasoning models like Kimi K2.5 reject. **Impact**: Blocks many users who rely on reasoning models with structured output.

5. **[#15774 – Streaming response truncates at backticks](https://github.com/anomalyco/opencode/issues/15774)**  
   *6 comments, 6👍* — When `reasoning_content` is separate from `content` (LM Studio + Qwen3.5), the UI parser stops displaying responses after encountering backticks. **Impact**: Severely degrades the chat experience for local/self‑hosted reasoning models.

6. **[#16043 – `Shift+Return` keybind not working on macOS](https://github.com/anomalyco/opencode/issues/16043)**  
   *6 comments, 4👍* — Newline shortcuts fail in chat input on macOS (Ghostty + tmux). **Impact**: Common UX frustration for users migrating from Cursor.

7. **[#23629 – Grep tool fails with “invalid ripgrep output” for non‑UTF‑8 files](https://github.com/anomalyco/opencode/issues/23629)**  
   *6 comments* — When source files contain GBK/GB2312 characters, the built‑in grep tool always errors out. **Impact**: Blocks projects with non‑UTF‑8 legacy encodings (common in Chinese/Asian codebases).

8. **[#20531 – OpenRouter duplicate tool calls on Qwen3.6](https://github.com/anomalyco/opencode/issues/20531)**  
   *4 comments, 4👍* — Every bash command executes twice because the API response delivers duplicate tool calls. **Impact**: Wastes tokens and can cause destructive side effects (double file writes, etc.).

9. **[#29187 – gpt‑5.5 aborts mid‑stream with unexpected EOF](https://github.com/anomalyco/opencode/issues/29187)**  
   *5 comments, 3👍* — Intermittent crashes when using a custom OpenAI‑compatible provider with `gpt‑5.5` but not with other models. **Impact**: Highlights possible proxy/streaming handling mismatch for the newest OpenAI model.

10. **[#39036 – `opencode web` unusable on macOS Golden Gate Beta](https://github.com/anomalyco/opencode/issues/39036)**  
    *3 comments* — Opening `opencode web` shows “no folders found”; folder search returns no results. **Impact**: Blocks early adopters of the new macOS beta.

## Key PR Progress (Top 10 by Significance)
1. **[#37832 – fix(app): prevent Solid cleanNode crash on session switch](https://github.com/anomalyco/opencode/pull/37832)**  
   *Merged* – Fixes a freeze/crash when switching sessions in the Desktop app caused by a Reactivity `cleanNode` null reference. Closes #37534.

2. **[#38793 – fix(desktop): remove titlebar inset in fullscreen](https://github.com/anomalyco/opencode/pull/38793)**  
   *Open* – Exposes Electron fullscreen transitions to the renderer and removes the macOS traffic‑light titlebar inset while fullscreen. Drops dead Tauri bridge code.

3. **[#39044 – fix(app): preserve shadowed command owners](https://github.com/anomalyco/opencode/pull/39044)**  
   *Open* – Ensures keyed command registrations are retained while their Solid owners are alive, preventing premature deregistration during transitions.

4. **[#39042 – fix(prompt): drop non‑existent `multi_tool_use.parallel` from gpt system prompt](https://github.com/anomalyco/opencode/pull/39042)**  
   *Merged* – Removes a legacy OpenAI pseudo‑tool from the GPT system prompt that was causing compatibility issues. Closes #38332.

5. **[#39015 – feat: add model‑gated auto‑approve mode](https://github.com/anomalyco/opencode/pull/39015)**  
   *Open* – Introduces a third TUI mode (Build → Plan → Auto‑approve) that uses a smart model‑gated approval policy. Closes #37564.

6. **[#38790 – feat(app): add workspace flows to new layout](https://github.com/anomalyco/opencode/pull/38790)**  
   *Open* – Implements workspace selection (Local/New/Existing) for new sessions, a Workspaces settings tab, and persistent draft state.

7. **[#39019 – fix(core): resolve npm edge by package name instead of first entry](https://github.com/anomalyco/opencode/pull/39019)**  
   *Merged* – Fixes npm installs with peer dependencies returning the wrong package path by iterating edges correctly.

8. **[#39020 – fix(core): propagate download failures as Effect errors in skill discovery](https://github.com/anomalyco/opencode/pull/39020)**  
   *Merged* – Uses `Effect.fail` instead of `return` on skill download failures, enabling proper error propagation and cache invalidation.

9. **[#39021 – fix(server): treat undefined origin as non‑CORS, reject empty origin string](https://github.com/anomalyco/opencode/pull/39021)**  
   *Merged* – Hardens CORS checks by only allowing `undefined` origin (absence of header) and rejecting empty `Origin:` strings.

10. **[#39028 – fix(web): reconnect SSE stream when mobile tab becomes visible again](https://github.com/anomalyco/opencode/pull/39028)**  
    *Merged* – Reconnects the Server‑Sent Events stream when a mobile browser tab becomes active again, solving “frozen chat” after switching apps.

## Feature Request Trends
- **Plugin & Tooling Extensibility** – Multiple requests for plugins to inject AI‑visible messages (#17412) and to support JSON‑schema constraints on the `run` command (#9320).  
- **Asynchronous Initialization** – Loading MCP clients asynchronously to avoid blocking startup (#20755) and hot‑reloading certificate trust (#29579) are high‑priority improvements.  
- **UI/UX Modernization** – Embedding VS Code core for in‑app editing (#29507) and adding a system reminder method/UI (#29633) reflect demand for richer desktop experiences.  
- **Model & Provider Parity** – Support for native Oracle OCI Generative AI (#29622) and better handling of reasoning‑model parameters (e.g., `max_completion_tokens`) are frequently mentioned.  
- **Editor Integration** – LSP for files without extensions (Dockerfile, Makefile, CHANGELOG) (#27604) would remove a pain point for DevOps/ops heavy repos.

## Developer Pain Points
- **Terminal Handling** – Mouse escape sequence flooding (#26198) and weird behavior in full‑screen/tmux environments (#16043) cause daily friction.  
- **Streaming & Provider Compatibility** – Truncation at backticks (#15774), duplicate tool calls (#20531), and unexpected EOF errors (#29187) reduce trust in streaming responses.  
- **Windows & macOS Regressions** – Desktop freezes on macOS after closing a project (#38979), non‑Git directories don’t show sessions on Windows (#29621), and the NSIS installer fails for plugin dependencies (#38810).  
- **Grep & Encoding** – Non‑UTF‑8 files break the built‑in grep (#23629), a recurring issue for multi‑locale codebases.  
- **Theme & Accessibility** – Catppuccin Macchiato in light mode is unreadable (#29629), and the shared conversation viewer lacks navigation (#18567).  
- **MCP & Server Startup** – Synchronous loading blocks UI (#20755), and CORS misconfigurations lead to cryptic `UnsupportedContentType` errors (#38789, #39017, #39035).

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest – 2026-07-27

**Project:** [pi-mono (earendil-works/pi)](https://github.com/earendil-works/pi)  
**Date:** 2026-07-27  
**Analysis by:** Technical AI Developer Tools Specialist

---

## Today’s Highlights

No new releases landed in the last 24 hours, but the community was highly active with 31 issues and 6 pull requests updated. A critical TUI performance bug (#6665) causing 100% CPU on one core during streaming dominated discussion, while several MiniMax-M3 integration quirks and a security vulnerability in `brace-expansion` (#7090) prompted rapid closed PRs. On the feature side, a long-standing request for structured JSON output (#1086) resurfaced, and a experimental loadout management PR (#7148) from the project maintainer hints at new extension lifecycle capabilities.

## Releases

*No new releases in the last 24 hours.*

---

## Hot Issues (10 noteworthy)

### [OPEN] #6665 – TUI pins a full core while streaming: uncached Intl.Segmenter + per-chunk Markdown rebuild  
**Comments:** 8 | **Labels:** `inprogress`  
The render timer hot path (`Markdown.render` → `wrap` → `Intl.Segmenter`) is uncached, causing 100% CPU usage on one core during long sessions. Two root causes identified: grapheme segmentation not cached and per-chunk full Markdown rebuild.  
[🔗 Issue #6665](https://github.com/earendil-works/pi/issues/6665)

### [CLOSED] #7090 – Regenerate 0.82.x shrinkwrap with brace-expansion 5.0.8+  
**Comments:** 5 | **Labels:** `no-action`  
CVE-2026-14257 in `brace-expansion@5.0.7` (memory-exhaustion DoS) affected the pinned `minimatch` dependency. The fix was already applied upstream; this issue tracks regenerating the shrinkwrap to pull in 5.0.8.  
[🔗 Issue #7090](https://github.com/earendil-works/pi/issues/7090)

### [OPEN] #7064 – WSL absolute windows paths are mishandled  
**Comments:** 5 | **Labels:** `bug`  
On WSL2, the agent fails to resolve Windows-style absolute paths (e.g., `C:\Users\...`), causing read/write/edit tools to fall back to full file replacements instead of incremental edits. Active discussion on proper path normalization.  
[🔗 Issue #7064](https://github.com/earendil-works/pi/issues/7064)

### [CLOSED] #1086 – Add structured output (JSON schema) support  
**Comments:** 4 | **Labels:** (long-standing)  
A request to expose provider-level JSON schema enforcement in `pi-ai` and CLI flags in `pi-coding-agent`. Currently only validates tool arguments; no path for enforcing schema on assistant text output. Reopened as still unresolved.  
[🔗 Issue #1086](https://github.com/earendil-works/pi/issues/1086)

### [OPEN] #7049 – Upgrade Undici to 8.8.0 for correct plain-HTTP proxy forwarding  
**Comments:** 3 | **Labels:**  
Undici 8.5.0 defaults to `proxyTunnel: true`, which misroutes plain HTTP requests through CONNECT tunnel. The fix requires upgrade and setting `proxyTunnel: false` for HTTP targets.  
[🔗 Issue #7049](https://github.com/earendil-works/pi/issues/7049)

### [CLOSED] #7138 – MiniMax-M3: messy thinking output, compaction breaks reasoning, and the `reasoning_split` parameter  
**Comments:** 3 | **Labels:** `untriaged`  
Using MiniMax M3 via Token Plan with compaction extensions (`pi-ultra-compact`) causes reasoning blocks to leak into the assistant text. The `reasoning_split` parameter could resolve this.  
[🔗 Issue #7138](https://github.com/earendil-works/pi/issues/7138)

### [CLOSED] #7152 – Add a read-only provider/model auth preflight command  
**Comments:** 2 | **Labels:** `untriaged`  
Proposes `pi auth check --provider --model --json --no-refresh` for non-mutating credential validation. Useful for CI and automation.  
[🔗 Issue #7152](https://github.com/earendil-works/pi/issues/7152)

### [CLOSED] #7143 – Z.AI providers send max_completion_tokens, which Z.AI ignores  
**Comments:** 2 | **Labels:** `untriaged`  
`detectCompat()` incorrectly sets `max_completion_tokens` for Z.AI providers, but those APIs only honor `max_tokens`. Leads to silently truncated outputs.  
[🔗 Issue #7143](https://github.com/earendil-works/pi/issues/7143)

### [CLOSED] #7140 – MiniMax-M3: `<think>` tags in content break after compaction, `reasoning_split` would fix this  
**Comments:** 2 | **Labels:** `untriaged`  
Another MiniMax-M3 report: thinking tags (`<think>...</think>`) appear in the final output after compaction is applied. The `reasoning_split` parameter is suggested as the correct fix.  
[🔗 Issue #7140](https://github.com/earendil-works/pi/issues/7140)

### [CLOSED] #7132 – Set AI_AGENT for child process attribution  
**Comments:** 2 | **Labels:** `untriaged`  
Proposes setting `AI_AGENT=pi` alongside existing `PI_CODING_AGENT=true` to align with emerging cross-agent convention (used by Claude Code, GitHub CLI, Vercel).  
[🔗 Issue #7132](https://github.com/earendil-works/pi/issues/7132)

---

## Key PR Progress (6 items)

### [CLOSED] #7156 – fix(ai): rename OpenCode Zen Go to OpenCode Go  
**Author:** aaronjheng  
Fixes a display name typo where the OpenCode Go provider was shown as “OpenCode Zen Go”.  
[🔗 PR #7156](https://github.com/earendil-works/pi/pull/7156)

### [OPEN] #7151 – feat(ai): expose pending stop reason while streaming  
**Author:** lucasmeijer  
Adds an early signal about the predicted final stop reason (e.g., “final_answer” → stopReason: ‘stop’) so consumers can react before the stream ends.  
[🔗 PR #7151](https://github.com/earendil-works/pi/pull/7151)

### [OPEN] #7148 – feat(coding-agent): Experimental loadout management  
**Author:** mitsuhiko  
Introduces `/loadout` command to enable/disable extensions mid-session with persistence. Draft status – not yet for production.  
[🔗 PR #7148](https://github.com/earendil-works/pi/pull/7148)

### [CLOSED] #7145 – Dev (merge)  
**Author:** evan-a-w  
A minor development branch merge. No detailed summary.  
[🔗 PR #7145](https://github.com/earendil-works/pi/pull/7145)

### [CLOSED] #7131 – Set AI_AGENT for child process attribution  
**Author:** renaudhartert-db  
Implements the `AI_AGENT=pi` environment variable for CLI and RPC entry points, matching the proposal in issue #7132.  
[🔗 PR #7131](https://github.com/earendil-works/pi/pull/7131)

### [CLOSED] #7129 – tui: raise visibleWidth cache to 4096 entries, use LRU eviction  
**Author:** jsamuel1  
Fixes `visibleWidth` cache thrashing by increasing from 512 to 4096 entries and switching from FIFO to LRU eviction. Reduces repeated string width calculations for non-ASCII lines.  
[🔗 PR #7129](https://github.com/earendil-works/pi/pull/7129)

---

## Feature Request Trends

The past 24 hours reveal a clear shift toward **extension and session lifecycle management**:

- **Structured output enforcement** (#1086) – Long-awaited JSON schema support for assistant text, not just tool arguments.
- **Read-only auth preflight** (#7152) – Non-mutating credential validation for CI/CD workflows.
- **Extension hooks `pre_response` / `before_send_message`** (#7137) – Ability to intercept, block, or revise assistant draft responses before they reach the user.
- **UI dialog events** (#7147) – Requests for `ui_dialog_start`/`ui_dialog_end` events so extensions can track blocking UI interactions.
- **Mouse-click API for overlays** (#7144) – Terminal mouse tracking to enable clickable extension UIs.
- **Public durable compaction strategy lifecycle** (#7127) – External compaction strategies that survive session reload.
- **Token usage in workflow events** (#7146) – Adding token counts to `agent_result` and `run_complete` events for cost tracking.

These trends indicate growing demand for **extensibility** and **programmatic control** as Pi is used in automated harnesses and CI pipelines.

---

## Developer Pain Points

Several recurring frustrations emerged:

- **TUI performance degradation** (#6665, #7129) – Uncached `Intl.Segmenter` leads to excessive CPU usage; cache eviction issues plague long sessions with non-ASCII content.
- **MiniMax-M3 integration instability** (#7138, #7140, #7155) – Thinking content leaks into assistant responses, compaction breaks reasoning, and `reasoning_split` parameter is missing.
- **Compaction-related data loss** (#7150, #7154) – RPC prompts sent during compaction are silently dropped (`success:true` but no execution), and extension runtime is invalidated after compaction without recovery.
- **WSL path handling** (#7064) – Absolute Windows paths not normalized; blocks efficient edit operations on WSL.
- **Proxy and networking pitfalls** (#7049) – Plain HTTP targets incorrectly tunneled via CONNECT when using `HTTP_PROXY`.
- **CLI argument swallowing** (#7139) – Boolean extension flags placed before the prompt cause the prompt to be silently dropped.
- **Provider compatibility** (#7143) – Z.AI providers ignore `max_completion_tokens`, requiring per-provider workaround.
- **CPU compatibility** (#7149) – Official binary crashes on pre-Haswell CPUs due to BMI2 instructions (`shlx`), while npm package works fine.
- **Keyboard input quirks** (#7130, #7126) – Backspace deletes two characters in Kitty, session rename requires double Enter.

The volume of closed “untriaged” issues suggests a need for better triage automation, but the community is actively contributing fixes (e.g., #7129, #7131, #7156).

---

*End digest for 2026-07-27. Generated from GitHub data for [earendil-works/pi](https://github.com/earendil-works/pi).*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-07-27

## 1. Today’s Highlights
The `v0.21.0-nightly` release ships with a CLI fix for local-time measurement and an ongoing autofix refactor, but the community’s attention is dominated by a series of **P1 security issues** reported around the Desktop MCP proxy and Electron sandbox. Three critical vulnerabilities have been rapidly addressed (closed within 24 hours), while the main branch experiences multiple E2E CI failures, triggering automated triage issues. Meanwhile, the team continues to push performance improvements (cold-start lazy loading, ACP latency benchmarks) and new features (Goal v3 worker tools, web-shell Channel management).

## 2. Releases
- **v0.21.0-nightly.20260727.c003e1718** ([release](https://github.com/QwenLM/qwen-code/releases/tag/v0.21.0-nightly.20260727.c003e1718))  
  - `fix(cli): measure insight days and hours in local time everywhere`  
  - `refactor(autofix): ext` (incomplete note)

## 3. Hot Issues (10 noteworthy)

1. **#7585** — Proposal: Add a direct external context provider profile *(OPEN, 8 comments)*  
   A Qwen extension to retrieve repository-shared context from an external memory/knowledge service without modifying core. ⬤ [Issue](https://github.com/QwenLM/qwen-code/issues/7585)

2. **#7769** — [Security] MCP tool denial bypassed when a new SSE session is created *(CLOSED, P1)*  
   Denying an MCP tool call does not stick – the agent can retry the same tool over a new SSE session. ⬤ [Issue](https://github.com/QwenLM/qwen-code/issues/7769)

3. **#7768** — [Security] Desktop IPC bridge `mcp_client_tool_call` executes MCP tools without enforcing user authorization *(CLOSED, P1)*  
   Exposed via `window.electronAPI`, allows direct tool execution without permission prompts. ⬤ [Issue](https://github.com/QwenLM/qwen-code/issues/7768)

4. **#7772** — [Security Hardening] Qwen Desktop BrowserWindow uses insecure Electron webPreferences *(CLOSED, P3)*  
   `sandbox: false` and `webSecurity: false` weaken the app’s security posture despite `contextIsolation: true`. ⬤ [Issue](https://github.com/QwenLM/qwen-code/issues/7772)

5. **#7770** — [Security] Code interpreter sandbox can write to host machine when MCP proxy is internet-exposed *(OPEN, P2)*  
   The sandbox has outbound internet access; exposing the MCP proxy to it bypasses the intended isolation. ⬤ [Issue](https://github.com/QwenLM/qwen-code/issues/7770)

6. **#7771** — [Bug] Persisted MCP config is not loaded into main-process MCP proxy at startup *(OPEN)*  
   After restarting Qwen Desktop, IPC calls may not work because `mcp_config` is not read from settings. ⬤ [Issue](https://github.com/QwenLM/qwen-code/issues/7771)

7. **#7264** — Cold-start follow-ups: remaining lazy-loading candidates from the ACP eager-closure audit *(CLOSED, P2)*  
   An esbuild-metafile audit found 17.24 MiB / 2420 modules parsed on every cold start. Follow-up work targets reducing that overhead. ⬤ [Issue](https://github.com/QwenLM/qwen-code/issues/7264)

8. **#7697** — Qwen Code VS Code cannot connect to Unity MCP but Claude Code can *(CLOSED, 5 comments)*  
   Integration parity gap – Unity MCP fails specifically in Qwen Code’s VS Code extension. ⬤ [Issue](https://github.com/QwenLM/qwen-code/issues/7697)

9. **#7684** — Command mode statusline multi-line causes input method candidate window to display far from cursor *(CLOSED, P2, macOS)*  
   UI regression: when the statusline wraps, the IME popup appears at a wrong position. ⬤ [Issue](https://github.com/QwenLM/qwen-code/issues/7684)

10. **#7750** — [Question] SDK selection: `qwen-code-sdk` vs `qoder-agent-sdk` *(CLOSED, 6 comments)*  
    Community confusion about the overlap and roadmap of the two SDKs – which is the “official” one and which may be deprecated. ⬤ [Issue](https://github.com/QwenLM/qwen-code/issues/7750)

## 4. Key PR Progress (10 important)

1. **#7751** — `feat(review): script-lint as a deterministic gate` *(OPEN)*  
   Replaces agent-driven lint reporting with a static report reader, removing model variance from findings. ⬤ [PR](https://github.com/QwenLM/qwen-code/pull/7751)

2. **#7762** — `feat(hooks): Add submitted prompt provenance` *(OPEN)*  
   Adds an optional `submitted_prompt` field to `UserPromptSubmit` for hook observers, enabling better traceability. ⬤ [PR](https://github.com/QwenLM/qwen-code/pull/7762)

3. **#7795** — `fix(ci): keep the post-merge E2E signal on main alive` *(OPEN)*  
   Prevents cancellation of in-progress E2E runs when a new commit lands, restoring reliable post-merge CI signal. ⬤ [PR](https://github.com/QwenLM/qwen-code/pull/7795)

4. **#7761** — `test(serve): Add first-output latency benchmark` *(CLOSED)*  
   Opt-in benchmark measuring process spawn → first model output latency across ACP path stages. ⬤ [PR](https://github.com/QwenLM/qwen-code/pull/7761)

5. **#7793** — `feat(web-shell): add Channel management page` *(OPEN)*  
   Workspace-scoped UI to configure DingTalk, WeCom, Feishu channels with runtime state and lifecycle controls. ⬤ [PR](https://github.com/QwenLM/qwen-code/pull/7793)

6. **#7792** — `feat(ci): Deduplicate E2E failure issues by commenting on existing issue` *(OPEN)*  
   Prevents issue spam from repeated CI failures – comments on a single open issue instead of creating new ones. ⬤ [PR](https://github.com/QwenLM/qwen-code/pull/7792)

7. **#7789** — `fix(web-shell): make /copy with a bare index work` *(OPEN)*  
   `/copy 3` now correctly copies a code block instead of reporting “No matching code block found”. ⬤ [PR](https://github.com/QwenLM/qwen-code/pull/7789)

8. **#7729** — `feat(core): add Goal v3 worker tools` *(OPEN)*  
   Implements two tools for reading/updating Goal snapshots with bounded evidence and verifier feedback. ⬤ [PR](https://github.com/QwenLM/qwen-code/pull/7729)

9. **#7731** — `feat(web-shell): add git branch picker, commit dialog, and create PR flow` *(OPEN)*  
   IntelliJ-style branch picker with search, checkout, new branch, tag listing, plus commit dialogs. ⬤ [PR](https://github.com/QwenLM/qwen-code/pull/7731)

10. **#7790** — `fix(core): decline combined sed flags where -i is not last` *(OPEN)*  
    Correctly rejects invalid `sed -Ei` patterns to prevent silent file writes. ⬤ [PR](https://github.com/QwenLM/qwen-code/pull/7790)

## 5. Feature Request Trends
- **External context ingestion** (#7585) – desire to hook Qwen into external knowledge bases without modifying the core.
- **Subagent model grade selection** (#7685) – allow the AI to choose a model grade (small/medium/high/super) for spawned subagents at runtime.
- **Channel enhancements** – DingTalk outbound image delivery (#7687) is a recurring integration request.
- **CI automation** – auto-detect and fix trivial docs/test issues (#7383) to reduce review overhead.
- **Security hardening** – multiple requests (though often reported as bugs) for better MCP authorization, sandbox isolation, and Electron security settings.

## 6. Developer Pain Points
- **VS Code connection flakiness** – multiple issues about “Failed to connect to Qwen agent” remain frequent, especially on Windows and with MCP setups (#6414, #7056, #7697).
- **Security vulnerabilities** – the three P1 reports (#7768, #7769, #7770) highlight gaps in MCP tool authorization, session isolation, and sandbox escape paths.
- **Terminal/UI regressions** – input method cursor placement (#7684), Kitty keyboard flags left active (#7779, #7781), and plan mode content leakage (#6237) degrade the CLI experience.
- **SDK roadmap uncertainty** – #7750 reflects confusion over whether to base projects on `qwen-code-sdk` or `qoder-agent-sdk`, risking future deprecation.
- **CI noise** – repeated E2E failure issues (#7755, #7787, etc.) create alert fatigue, though PR #7792 aims to mitigate that.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-07-27

*Project: [CodeWhale (DeepSeek TUI)](https://github.com/Hmbown/CodeWhale)*

---

## 1. Today's Highlights

No new releases today, but the team landed a strong batch of performance, polish, and infrastructure fixes. Notable changes include a quadratic‑markdown fix that stops re‑parsing the entire message on every chunk, a fix for terminal control bytes leaking into non‑terminal stdout, and the long‑awaited `@git` / `@diff` mention system in the composer. The community also saw active i18n work: a second round of simplified‑Chinese translations and a fix for non‑UTF‑8 page decoding in `fetch_url`.

---

## 2. Releases

No new releases published in the last 24 hours.

---

## 3. Hot Issues (10 selected)

1. **[#3793 – v0.9.2 Setup: build a guided localized constitution creator, not a blank prompt editor](https://github.com/Hmbown/CodeWhale/issues/3793)**  
   *17 comments* – The core issue for the constitution‑based onboarding redesign. Proposes a language‑first, guided flow that keeps constitutional text separate from runtime security controls. Community agrees this is the right direction for v0.9.2.

2. **[#4227 – feat: help JayBeest map the CodeWhale tsunami](https://github.com/Hmbown/CodeWhale/issues/4227)**  
   *13 comments* – A meta‑skill/workflow to help contributors keep up with the project’s high velocity (10+ PRs/day). Shows the community self‑organizing to reduce onboarding friction.

3. **[#2934 – feat: sidebar sessions panel with auto‑resume and session history browsing](https://github.com/Hmbown/CodeWhale/issues/2934)**  
   *10 comments* – Persistent sidebar for session management instead of the current `Ctrl+R` popup. High demand; users report friction remembering shortcut keys.

4. **[#3792 – v0.9.2 Setup: make first-run onboarding feel like starting CodeWhale, not editing config](https://github.com/Hmbown/CodeWhale/issues/3792)**  
   *9 comments* – Companion to #3793. Emphasises making the initial experience feel like running an app, not editing a YAML file. Ties into the broader v0.9.2 setup overhaul.

5. **[#2494 – Mac + iTerm2 user issue summary](https://github.com/Hmbown/CodeWhale/issues/2494)**  
   *6 comments* – A detailed list of Mac‑specific pains: missing macOS shortcuts, newline handling in chat, inability to cancel requests, and session history search. Closed but still gathering feedback.

6. **[#1004 – feat: /dryrun — preview the next chat completion request without sending it](https://github.com/Hmbown/CodeWhale/issues/1004)**  
   *5 comments* – For DeepSeek V4 Pro users, this would avoid costly round‑trips by showing the exact payload before sending. Still open and tagged as needing human input.

7. **[#4022 – v0.9.2: define CLI/TUI parity for subagent and runtime control surfaces](https://github.com/Hmbown/CodeWhale/issues/4022)**  
   *5 comments* – Ensures subagent controls are not trapped in the TUI, enabling future cloud or remote usage. Architectural alignment issue.

8. **[#3983 – v0.9.2 Runtime: make current Work state model-visible on parent turns](https://github.com/Hmbown/CodeWhale/issues/3983)**  
   *4 comments* – Wants the model to see checklist and plan metadata during a parent turn, improving agentic context. Part of the workflow runtime hardening.

9. **[#2974 – v0.9.2 Workflow: wire the model-facing workflow tool and run driver](https://github.com/Hmbown/CodeWhale/issues/2974)**  
   *4 comments* – Critical piece missing from the v0.9.2 workflow story; the TUI still has no model‑facing `workflow` tool. Community tracking this as a blocker for agent workflows.

10. **[#3927 – ux(onboarding): add an explicit provider-independent offline path](https://github.com/Hmbown/CodeWhale/issues/3927)**  
    *4 comments* – Even after provider choice improvements, there is no way to just look around without an API key. Users want an offline tour mode.

---

## 4. Key PR Progress (10 selected)

1. **[#4908 – i18n(zh-Hans): update simplified-Chinese translations to match latest en.json](https://github.com/Hmbown/CodeWhale/pull/4908)**  
   *Open* – A second adversarial review of all 1134 keys, ensuring zh‑Hans parity. Maintains the “translation‑only, no behavioural change” policy.

2. **[#4909 – fix(fetch_url): fix non‑UTF‑8 web page decoding](https://github.com/Hmbown/CodeWhale/pull/4909)**  
   *Open* – Fixes garbled output for GB2312/GBK pages by detecting the encoding from HTTP headers or `<meta charset>`. Shared decoding path benefits both `fetch_url` and `web.run`.

3. **[#4905 – fix(tui): stop writing terminal control bytes to non‑terminals](https://github.com/Hmbown/CodeWhale/pull/4905)**  
   *Closed* – Fixes OSC 9;4 and OSC 0 sequences leaking to stdout unconditionally. Partial fix toward #4847 (the .app bundle attribution remains open).

4. **[#4903 – perf(tui): stop re‑parsing committed markdown while streaming](https://github.com/Hmbown/CodeWhale/pull/4903)**  
   *Closed* – Removes the O(N²) markdown re‑parse on every chunk. Long answers will no longer slow down as they grow.

5. **[#4902 – test(engine): pin the cacheable prefix across unchanged turns](https://github.com/Hmbown/CodeWhale/pull/4902)**  
   *Closed* – Closes #3738 (prompt‑cache hit‑rate regression). Found and fixed a `turn_meta` block that changed every turn, busting the cache prefix.

6. **[#4899 – feat(composer): add @git and @diff mentions](https://github.com/Hmbown/CodeWhale/pull/4899)**  
   *Closed* – Closes #4067. Adds two new `@` mention tokens that inject curated git context (diff, log, blame) without requiring a round‑trip or shell approval.

7. **[#4894 – feat(shell): deliver tracked completions to waiting turns](https://github.com/Hmbown/CodeWhale/pull/4894)**  
   *Closed* – Delivers completed background shell jobs as internal runtime events at the next turn boundary. Part of the background‑job tracking series.

8. **[#4900 – feat(engine): make policy narrowing observable](https://github.com/Hmbown/CodeWhale/pull/4900)**  
   *Closed* – Closes #3947. When runtime policy narrows a turn’s authority, the model now sees a structured policy‑narrowed block instead of only a status line.

9. **[#4896 – feat: move terminal clipboard writes off event loop](https://github.com/Hmbown/CodeWhale/pull/4896)**  
   *Closed* – Fixes #4159. Routes OSC 52 and SSH/tmux clipboard writes to a background worker, preventing stalls on the TUI event path.

10. **[#4893 – feat(provider): ask Kimi Code plan tier during setup](https://github.com/Hmbown/CodeWhale/pull/4893)**  
    *Closed* – Closes #4758. Adds an explicit membership plan choice (262K vs 1M context) for Kimi Code. Persists and displays the selected context window.

---

## 5. Feature Request Trends

The following directions dominate the issue tracker:

- **Localization & Internationalisation** – Requests for Japanese/Vietnamese website parity, plus new locales: Korean, Spanish, Brazilian Portuguese, Russian, French, German, Catalan, and Indonesian. The project is actively shipping README translations and plans corresponding website routes.
- **Onboarding & Setup** – Redesigning first-run to be guided, language‑first, and offline‑capable (e.g., #3793, #3792, #3927). Users want to “start the app” rather than “edit a config file.”
- **Constitution/Policy** – Making the constitution readable in‑app and ensuring custom overrides don’t fail silently (#3928). Also separating runtime security from constitutional text.
- **Agentic Workflows** – Wiring a model‑facing workflow tool, making work state visible to the model, and building a true “Auto” mode as a bounded review‑repair loop (#2974, #3983, #3832).
- **Session & Dashboard Management** – Persistent sidebar, session history browsing, and a multi‑session dashboard with peek approvals (#2934, #4397).
- **Performance** – Fixing O(N²) markdown parsing (#3897, already landed in #4903), and reducing latency through reuse of transcript snapshots (#3904, landed in #4892).

---

## 6. Developer Pain Points

- **Mac / iTerm2 Compatibility** (#2494) – Missing macOS‑specific shortcuts, newline handling breaks multi‑line pastes, Ctrl+C cannot cancel stuck requests, and session history is hard to browse. Several issues remain unresolved or need better platform‑specific docs.
- **Prompt Cache Cost Surprises** (#3738) – A regression caused DeepSeek costs to rise because the `turn_meta` block changed every turn, busting the cacheable prefix. Fixed in #4902, but the incident highlights how fragile cache optimisation is.
- **In‑App Documentation Gaps** – No way to read the constitution from inside the app (#3928); `/context` points to a file that doesn’t exist for installed binaries. Users feel they are flying blind.
- **Onboarding Lock‑ups** (#4763) – Returning users on OAuth routes could get stuck in a non‑escapable loop. Fixed in #4765, but the pattern indicates the onboarding flow needs better fallback and escape paths.
- **Cost of Uncertainty** (#1004) – Without a `/dryrun` command, users cannot preview what will be sent to the API, leading to wasted tokens / money. Still an open feature request.
- **CLI/TUI Asymmetry** (#4022) – Subagent and runtime controls exist only in the TUI, making remote or headless usage impossible. Users want parity to enable CI and cloud workflows.

---

*Generated from GitHub activity on 2026-07-27. All links point to the [CodeWhale repository](https://github.com/Hmbown/CodeWhale).*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/boom7sss/agents-radar).*