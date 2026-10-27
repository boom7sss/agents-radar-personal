# OpenClaw Ecosystem Digest 2026-07-15

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-07-15 02:55 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [NanoClaw](https://github.com/qwibitai/nanoclaw)
- [NullClaw](https://github.com/nullclaw/nullclaw)
- [IronClaw](https://github.com/nearai/ironclaw)
- [LobsterAI](https://github.com/netease-youdao/LobsterAI)
- [TinyClaw](https://github.com/TinyAGI/tinyagi)
- [Moltis](https://github.com/moltis-org/moltis)
- [CoPaw](https://github.com/agentscope-ai/CoPaw)
- [ZeptoClaw](https://github.com/qhkm/zeptoclaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## OpenClaw Deep Dive

# OpenClaw Project Digest — 2026-07-15

## Today's Overview

OpenClaw continues at a very high activity level, with **500 issues and 500 PRs updated in the last 24 hours**. The open-to-closed ratios are roughly **70% open (354 issues, 356 PRs)**, indicating a large backlog of work-in-progress alongside steady closure rates (146 issues, 144 PRs closed/merged). A cluster of **P0 startup crash-loop bugs** in the newly released **2026.7.1** version has dominated the day's attention, with several critical fixes already merged or in review. The project remains in an intense development cycle, with maintainers visibly addressing the stability regressions that shipped with the latest release.

## Releases

No new releases were published on 2026-07-15. The latest release remains **2026.7.1**, which has been the source of several startup migration bugs reported over the past 48 hours (see Bugs & Stability).

## Project Progress

**144 PRs were merged or closed** in the last 24 hours. The most notable merged fixes include:

- **Gateway crash-loop fixes for 2026.7.1** — P0 startup blockers were resolved, including:
  - **Memory Core embedding_cache conflict** ([#107133](openclaw/openclaw Issue #107133)) — permanently blocked Gateway startup; now closed.
  - **Plugin install metadata conflict for codex/discord** ([#107727](openclaw/openclaw Issue #107727)) — Gateway refused readiness; closed with fix.
  - **Legacy-state migration non-convergence** ([#102749](openclaw/openclaw Issue #102749)) — Gateway refused to start; closed.

- **Large feature PRs progressing:**
  - **System-agent delegation + Gateway narrowing** ([#107903](openclaw/openclaw PR #107903), size XL) — phases 2+3 of a multi-phase architecture where agents self-serve their own sessions and delegate system config to a dedicated OpenClaw system agent, requiring human approval for persistent writes.
  - **Per-request cancellation for Gateway** ([#104195](openclaw/openclaw PR #104195), size XL) — prevents dangerous `node.invoke` dispatch after request timeout/disconnect (P1 security fix).
  - **Unified iOS chat and voice experience** ([#107879](openclaw/openclaw PR #107879), size XL) — merges Chat and Talk destinations into a single conversational input.

- **Smaller fixes landed or proposed:**
  - **llama.cpp JSON Schema compatibility** for `cron` tool ([#107939](openclaw/openclaw PR #107939)) — fixes `pattern: "\S"` rejection.
  - **Diagnostics now include plugin LLM calls** ([#107937](openclaw/openclaw PR #107937)) — closes a gap in token/cost totals.
  - **OOM protections** — bounded reads for `IDENTITY.md` ([#101447](openclaw/openclaw PR #101447)), `BOOT.md` ([#101776](openclaw/openclaw PR #101776)), and `--message-file` ([#101442](openclaw/openclaw PR #101442)).

## Community Hot Topics

| Issue/PR | Type | Comments | Reactions | Summary |
|----------|------|----------|-----------|---------|
| [#75](openclaw/openclaw Issue #75) | Issue | 113 | 81 👍 | **Linux/Windows Clawdbot Apps** — long-standing request to expand desktop support beyond macOS and iOS/Android. |
| [#94518](openclaw/openclaw Issue #94518) | Issue | 9 | 10 👍 | **DeepSeek cache hit rate <10%** after 6.x upgrade — boundary-aware caching broke prefix matching. |
| [#10659](openclaw/openclaw Issue #10659) | Issue | 14 | 4 👍 | **Masked Secrets** — prevent agents from reading raw API keys. |
| [#87744](openclaw/openclaw Issue #87744) | Issue | 14 | 3 👍 | **Codex-backed Telegram timeouts** — turns do work but never reach completion. |
| [#107133](openclaw/openclaw Issue #107133) | Issue | 6 | 3 👍 | **P0: Memory Core conflict on 2026.7.1** — Gateway permanently blocked (now closed). |
| [#107227](openclaw/openclaw Issue #107227) | Issue | 6 | 1 👍 | **P0: 2026.7.1 startup-migration gate fatal** — `openclaw doctor` doesn't resolve the conflict (still open). |

**Underlying needs:** The community is demanding **cross-platform desktop parity** (#75), **reliable LLM provider integration** (#94518, #87744), and **stronger security defaults** (#10659, mask secrets). The acute 2026.7.1 startup failures (#107227) have the highest immediate urgency.

## Bugs & Stability

**Critical (P0) — active crisis:**

- **[#107227](openclaw/openclaw Issue #107227)** — `2026.7.1 startup-migration gate is fatal`; repair path (`openclaw doctor`) does not resolve the conflict. **Still open**, no linked fix PR yet. Gateway crash-loops with no documented remedy.
- **[#107220](openclaw/openclaw Issue #107220)** — `legacy memory sidecar meta/chunks conflicts are fatal` while `files` conflicts auto-resolve. **Still open**, crash-loop.
- **[#101290](openclaw/openclaw Issue #101290)** — `CLI startup preflight corrupts live state DB` while gateway is running; `openclaw.sqlite` corrupted 4 times. **P0, still open.**

**P0 — resolved today:**

- [#107133](openclaw/openclaw Issue #107133) — Memory Core `embedding_cache` conflict block (closed).
- [#107727](openclaw/openclaw Issue #107727) — Plugin install metadata conflict (closed).
- [#102749](openclaw/openclaw Issue #102749) — Legacy-state migration non-convergence (closed).

**High-severity (P1) regressions still open:**

- **[#107449](openclaw/openclaw Issue #107449)** — `cron tool JSON Schema incompatible with llama.cpp` (fix PR [#107939](openclaw/openclaw PR #107939) submitted).
- **[#87744](openclaw/openclaw Issue #87744)** — Codex-backed Telegram turns never reach `turn/completed`.
- **[#102020](openclaw/openclaw Issue #102020)** — Second message in session fails with `"reply session initialization conflicted"`.
- **[#90944](openclaw/openclaw Issue #90944)** — `sessions_yield` resume reply recorded but not delivered; child raw summary delivered instead.
- **[#91456](openclaw/openclaw Issue #91456)** — Telegram DM lane remains guarded after send timeout.
- **[#92769](openclaw/openclaw Issue #92769)** — `reasoning/reasoning_details` dropped for MiniMax M3 via OpenRouter (regression of #65533).

**Stability trend:** The 2026.7.1 release introduced multiple P0 startup blockers. Most have now been patched, but #107227 and #107220 remain unresolved, suggesting a hotfix release (2026.7.2) is likely imminent.

## Feature Requests & Roadmap Signals

**Top user-requested features (by activity):**

| Issue | Request | Priority | Maturity |
|-------|---------|----------|----------|
| [#75](openclaw/openclaw Issue #75) | Linux/Windows Clawdbot Apps | P2 | long-standing (Jan 2026) |
| [#7707](openclaw/openclaw Issue #7707) | Memory Trust Tagging by Source | P2 | — |
| [#10659](openclaw/openclaw Issue #10659) | Masked Secrets (use API keys without seeing them) | P1 | — |
| [#6615](openclaw/openclaw Issue #6615) | Denylist support for exec-approvals | P2 | stable |
| [#48874](openclaw/openclaw Issue #48874) | Multi-Session Architecture (Shared LLM + Isolated Sessions) | P2 | — |
| [#66252](openclaw/openclaw Issue #66252) | Per-Agent TTS/STT Configuration Overrides | P2 | — |
| [#82548](openclaw/openclaw Issue #82548) | AI Safety & Quality Observability Events | P2 | — |

**Likely candidates for next release (2026.7.2 or 2026.8):**

- **Masked Secrets** (#10659) — tagged P1, aligns with the security focus seen in recent PRs (e.g., #107903 system-agent delegation).
- **Per-request cancellation** ([#104195](openclaw/openclaw PR #104195)) — already in PR, addresses a P1 security vulnerability.
- **OOM protections** for identity/boot/message files — multiple small PRs already submitted.
- **llama.cpp tool schema fix** ([#107939](openclaw/openclaw PR #107939)) — urgent for local model users.

Long-term roadmap signals point toward **system-agent based architecture** (PR #107903) and **unified cross-platform client experiences** (PR #107879 for iOS, issue #75 for desktop).

## User Feedback Summary

**Common pain points:**

- **Startup/crash-loop issues on upgrade** — the 2026.7.1 release caused multiple users to be unable to start the gateway, with `openclaw doctor` insufficient to repair. Several users reported needing manual SQLite intervention.
- **Telegram message reliability** — Codex-backed turns timing out (#87744), DM lanes remaining guarded (#91456), and session initialization conflicts (#102020).
- **DeepSeek cache performance regression** — #94518 shows a dramatic drop from expected hit rates, costing users significantly more in API fees.
- **Migration warnings persistent** — (#90213) `openclaw doctor --fix` does not clear legacy state migration warnings.
- **Missing platform support** — Linux/Windows users (#75) continue to lack desktop apps, forcing workarounds.

**Satisfaction signals:**

- Several P0 bugs were closed today with apparent fixes, indicating responsive maintenance.
- Community members actively submitting PRs (14 unique authors in today's top PRs) suggests a healthy contributor base.
- The large-scale system-agent delegation proposal (#107903) is progressing, addressing long-standing security and separation-of-concerns feedback.

## Backlog Watch

**Long-unanswered high-importance issues needing maintainer attention:**

| Issue | Age | Priority | Why Stalled |
|-------|-----|----------|-------------|
| [#75](openclaw/openclaw Issue #75) | Jan 1, 2026 | P2 | Large feature; no assignee; 113 comments. Community strongly invested. |
| [#7707](openclaw/openclaw Issue #7707) | Feb 3, 2026 | P2 | Needs security review and product decision. |
| [#10659](openclaw/openclaw Issue #10659) | Feb 6, 2026 | P1 | High-value security feature; still needs maintainer review + security review. |
| [#6615](openclaw/openclaw Issue #6615) | Feb 1, 2026 | P2 | Needs maintainer review + product decision. |
| [#9986](openclaw/openclaw Issue #9986) | Feb 5, 2026 | P2 | Trigger model fallback on context length exceeded — no linked PR. |
| [#9764](openclaw/openclaw Issue #9764) | Feb 5, 2026 | P2 | Google Chat user OAuth for reactions/media — source repro provided but no movement. |
| [#80040](openclaw/openclaw Issue #80040) | May 10, 2026 | P2 | Cascading failure with OAuth invalidation, empty placeholders, duplicate tool execution — complex but impactful. |
| [#94518](openclaw/openclaw Issue #94518) | Jun 18, 2026 | P1 | DeepSeek cache regression — 10 reactions, concern about API costs, no fix yet. |

The backlog shows a concentration of **enhancement requests from early February** that have not received maintainer review or product decisions. The most impactful open issue for users is likely the DeepSeek cache regression (#94518), as it directly affects operating costs. The oldest and most-voted issue (#75, Linux/Windows apps) remains the community's top request by a wide margin.

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report — AI Agent Open-Source Ecosystem
**Date:** 2026-07-15

## 1. Ecosystem Overview

The personal AI assistant open-source landscape is experiencing a bifurcation between **stabilization** and **architecture modernization**. Major projects like OpenClaw and IronClaw are shipping large refactors (system-agent delegation, extension unification) while simultaneously firefighting release regressions, indicating the field is transitioning from rapid prototyping to production-hardening. A second tier of projects (PicoClaw, Moltis, CoPaw) is converging on common pain points: provider compatibility, cache efficiency, and tool-call reliability. The ecosystem is maturing toward multi-platform, multi-channel deployments, with **security** (secret masking, RBAC, sandboxing) emerging as the dominant cross-cutting concern across all active projects.

## 2. Activity Comparison (Last 24 Hours)

| Project | Issues Updated | PRs Updated | New Release? | Health Score* | Key Signal |
|---------|---------------|-------------|--------------|---------------|------------|
| **OpenClaw** | 500 (146 closed) | 500 (144 merged) | 2026.7.1 exists | 🟡 **Moderate** – P0 crisis ongoing (#107227 unresolved) | Large backlog, startup crash-loop regressions |
| **NanoBot** | 12 (2 open) | 65 (49 merged) | None (0) | 🟢 **Good** – 75% merge rate, fast bug closure | Heartbeat stability regression (#4924) |
| **Hermes Agent** | 50 (33 closed) | 50 (10 merged) | None (0) | 🟢 **Good** – aggressive bug-fix cadence | RBAC demand (#527), Telegram ChatMigrated PR stalled |
| **IronClaw** | 48 (12 closed) | 50 (27 merged) | None (0) | 🟡 **Moderate** – high velocity, many regressions | Extension unification, Slack lifecycle hangs |
| **PicoClaw** | 3 (2 open) | 9 (5 merged) | None (0) | 🟢 **Good** – responsive, critical fixes landed | Vodozemac security upgrade stalled |
| **NanoClaw** | 0 | 28 (7 merged) | None (0) | 🟡 **Moderate** – stabilization phase | Container teardown, multi-runtime issues |
| **ZeroClaw** | 26 (20 open) | 50 (2 merged) | None (0) | 🟡 **Moderate** – high-intent but bottlenecked | SOP broker stack, confused deputy S0 bug |
| **CoPaw** | 50 (34 closed) | 50 (26 merged) | v2.0.0.post2 | 🟢 **Good** – fast patch cycle | Doom loop, DeepSeek compression issues |
| **Moltis** | 3 (2 open) | 12 (8 merged) | 20260714.11 | 🟢 **Good** – steady CI cadence | Local model compatibility improved |
| **LobsterAI** | 4 (all closed stale) | 3 (all merged) | None (0) | 🟢 **Steady** – low activity, targeted patches | Tool-loop fix backported |
| **NullClaw / TinyClaw / ZeptoClaw** | 0 | 0 | None | ⚪ **Dormant** | No activity in 24h |

*Health Score: 🟢 Good (active, few critical blockers) | 🟡 Moderate (velocity high but regressions or bottlenecks present) | 🔴 Stressed (P0 crisis, stalled critical PRs)

## 3. OpenClaw’s Position

**Advantages:**
- **Scale leader** – 500 issues/PRs in 24h, 146 issues closed, 144 PRs merged. No other project operates at this throughput.
- **Architecture forward** – system-agent delegation (#107903) and per-request cancellation (#104195) are design innovations that peers have not yet attempted.
- **Cross-platform push** – unified iOS chat/voice (#107879) and the long-standing Linux/Windows desktop demand (#75) show platform ambition no other project matches.

**Technical Approach Differences:**
- **Gateway-centric** – OpenClaw’s crash-loop crisis stems from a complex gateway/migration architecture. Other projects (NanoBot, PicoClaw) use simpler process models that are less prone to startup failures.
- **Plugin ecosystem scale** – OpenClaw has the largest plugin surface (codex, discord, Telegram) but faces integration debt (plugin metadata conflicts, Telegram timeouts).
- **Memory architecture** – The Memory Core `embedding_cache` conflict (#107133) highlights the complexity of OpenClaw’s memory system compared to simpler approaches in PicoClaw or NanoBot.

**Community Size:**
- OpenClaw commands the largest community by a wide margin (500 issues vs. next highest at 50). 14 unique PR authors in one day vs. typical 2–5 in other projects.
- However, the **open-to-closed ratio (~70% open)** indicates the project may be outrunning its maintainer capacity. IronClaw and CoPaw maintain healthier ratios (~40-50% open).

**Key Weakness:** The 2026.7.1 release crisis with unresolved P0 bugs (#107227) erodes trust, especially when `openclaw doctor` cannot repair. No other project has a comparably severe unresolved startup blocker.

## 4. Shared Technical Focus Areas

The following requirements emerge across at least three projects, indicating ecosystem-wide priorities:

| Requirement | Projects Affected | Specific Manifestation |
|-------------|------------------|----------------------|
| **Secret/credential masking** | OpenClaw (#10659), IronClaw (#6099, false `ok:true`), ZeroClaw (RBAC #5982) | Agents should not expose raw API keys; UI should never lie about connectivity |
| **Provider model compatibility** | OpenClaw (DeepSeek cache #94518), CoPaw (DeepSeek V4 compression #6121), PicoClaw (Bedrock temperature #2982), Moltis (stringified scalars #1136) | Each project independently fixes the same model quirks – ecosystem fragmentation |
| **Tool-call reliability** | OpenClaw (Telegram timeouts), NanoClaw (message truncation #3048), CoPaw (doom loop #6116), IronClaw (ordering #6047) | Tool calls dropped, duplicated, or ordered incorrectly across multiple stacks |
| **Caching / cost optimization** | OpenClaw (DeepSeek cache hit rate #94518), PicoClaw (Bedrock cache points #3163, Anthropic cache_control #3228), ZeroClaw (memory rerank) | Operating cost is a top user concern; dedicated caching features are being built from scratch |
| **Platform parity (Linux/Windows)** | OpenClaw (#75, 113 comments), IronClaw (Windows FS #6098), CoPaw (Galaxy Kylin #6125), ZeroClaw (Landlock Fedora #8973) | Cross-platform desktop support is the most-voted missing feature across the ecosystem |
| **OTel / diagnostics** | ZeroClaw (#8933 conversation correlation), OpenClaw (plugin LLM call diagnostics), PicoClaw (per-turn token usage #3156) | Users demand observability for debugging and cost tracking |

**Emerging pattern:** Projects are independently solving the same **caching** and **model compatibility** problems. An ecosystem-wide shared provider abstraction layer would reduce duplication.

## 5. Differentiation Analysis

| Dimension | OpenClaw | NanoBot | Hermes Agent | IronClaw | ZeroClaw | CoPaw | Moltis |
|-----------|----------|---------|--------------|----------|----------|-------|--------|
| **Primary focus** | Generalist platform | Messenger-first bot | Desktop + TUI agent | Enterprise extension hub | Workflow/SOP automation | Tool-call reliability | Local model compatibility |
| **Target user** | Power users, multi-platform | Bot developers | Developers, researchers | Enterprise teams | Process automation teams | Developers, Chinese market | Small-model enthusiasts |
| **Architecture** | Gateway + plugin system | Channel-based heartbeat | Permission tiers (proposed) | Unified extension model (NEA-25) | SOP state machine + goal controller | Sandbox + tool guard | Lightweight core + MCP |
| **Key differentiator** | Largest plugin ecosystem | 75% merge rate, cleanest CI | RBAC demand (most commented feature) | Enterprise-grade multi-account | Stateful workflow engine | Fastest bug patch cycle (post2 in 2 days) | Monotonic daily releases |
| **Community openness** | High (14 unique authors/day) | Medium (conflict-laden PRs) | Medium (stalled PR #10166) | High (many bug-bash contributors) | High (many RFCs) | High (first-time contributors) | Low (few contributors) |
| **Risk profile** | High – P0 crisis, large backlog | Low – stable but slow feature delivery | Medium – Telegram reliability gap | Medium – integration regressions | High – S0 security bug (#7947) | Medium – v2.0 regressions | Low – limited surface area |

## 6. Community Momentum & Maturity

**Tier 1: Hyper-growth under strain**
- **OpenClaw** – Highest raw activity but struggling with stability. The P0 startup crisis could trigger user migration if unresolved in the next 48h.
- **IronClaw** – Very high velocity with 27 PRs merged; extension unification indicates architectural maturity. Recurring integration regressions (Slack lifecycle) are the main risk.

**Tier 2: Stable iteration with targeted improvements**
- **NanoBot** – 75% merge rate is best-in-class. Heartbeat fixes and WebUI polish suggest a project closing in on v1.0 stability.
- **Hermes Agent** – Rapid bug closure (33 issues/day); RBAC and plugin expansion point to enterprise readiness. Stalled Telegram PR (#10166) is the key bottleneck.
- **CoPaw** – Post2 release within 2 days of major reports shows exceptional responsiveness. DeepSeek compression and doom loop are the next hurdles.
- **ZeroClaw** – High feature velocity (50 PRs) but bottlenecked by maintainer capacity; 6 PRs with `needs-author-action`. The SOP approval broker (#8880) is the most ambitious feature across all projects this day.

**Tier 3: Steady maintenance**
- **PicoClaw** – Moderate activity, critical fixes landed. Vodozemac security upgrade (#3088) needs a champion.
- **Moltis** – Daily releases, steady CI. Not aiming for scale; local-first niche is well-served.
- **LobsterAI** – Targeted patches only. Stale issue closure suggests deprioritization of UI bugs.

**Tier 4: Dormant**
- NullClaw, TinyClaw, ZeptoClaw – No activity in 24h. These projects may be accepting reduced maintenance or awaiting contributions.

## 7. Trend Signals

**1. Security is the #1 cross-cutting demand**
Masked secrets, RBAC, sandboxing, and confused deputy prevention appear across 5+ projects. Users are moving from "make it work" to "make it secure". The ecosystem lacks a shared security model; every project reinvents access control.

**2. Production reliability is breaking trust**
OpenClaw’s P0 startup crash, IronClaw’s Slack lifecycle hangs, CoPaw’s DeepSeek 400 errors, and ZeroClaw’s Landlock sandbox failure all point to the same signal: **agents are not yet production-ready for non-technical users**. The gap between "cool demo" and "daily driver" remains the ecosystem’s biggest challenge.

**3. Cost and caching drive architecture decisions**
DeepSeek cache regressions (#94518 OpenClaw, #6121 CoPaw) and dedicated caching PRs (#3163 PicoClaw, #3228 PicoClaw) show that **operating cost is the primary constraint for real-world deployment**. The winner in this ecosystem may be the project that optimizes API cost most aggressively.

**4. Local model support is fragmenting**
Moltis explicitly targets small models; CoPaw, PicoClaw, and OpenClaw all patch provider quirks independently. A shared adapter standard (similar to LiteLLM) would benefit the entire ecosystem, but no project is leading this effort.

**5. Workflow and SOP automation is the new frontier**
ZeroClaw’s entire architecture (SOP broker, goal controller, approval gates) represents a pivot from chat agents to **autonomous workflow engines**. This is the most differentiated technical direction in the ecosystem this quarter. If successful, it could define a new category.

**6. Cross-platform desktop remains the white whale**
Issue #75 (OpenClaw, 113 comments) and multiple Windows/Linux bugs across projects show strong latent demand. No project has delivered a polished desktop experience beyond macOS. This is a significant market opportunity.

---

**Bottom line for decision-makers:** OpenClaw remains the ecosystem leader by raw metrics but is in crisis management mode. IronClaw and ZeroClaw show the most architectural ambition. CoPaw has the best bug-response velocity. If you need stability today, NanoBot or PicoClaw are safer bets. If you want to invest in the next architectural paradigm, watch ZeroClaw’s SOP broker and IronClaw’s extension unification. The ecosystem is ready for consolidation around shared standards for caching, security, and provider compatibility.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-07-15

## Today's Overview
NanoBot saw a day of intense consolidation: 12 issues were updated (2 still open) and 65 pull requests received updates, of which 49 were merged or closed. No new releases were cut, but the project processed a substantial backlog of bug fixes and enhancements across multiple areas — heartbeat routing, WebUI polish, Telegram message rendering, and testing infrastructure. The high merge rate (75% of PRs) indicates active maintainer engagement, though several long-standing open PRs with conflicts remain unresolved. Community activity is concentrated on heartbeat reliability and model-specific quirks.

## Releases
None. No new versions were published in the last 24 hours.

## Project Progress
**Merged/closed PRs today (49 merged/closed, select highlights):**
- **Bug fixes:** `fix(restart): deliver completion after channel reconnects` (#4931) — ensures restart notices are delivered only after the channel is ready.  
- **WebUI enhancements:** `feat(webui): highlight slash commands and app mentions` (#4933), `feat(webui): add copy action to user messages` (#4930), `fix(webui): validate inferred file paths before preview` (#4935).  
- **CLI improvements:** `fix(cli): point onboarding to the WebUI launcher` (#4938), `fix: standardize --config help text` (#4932).  
- **Test & CI:** `test: speed up CI and harden the suite` (#4936) replaced duplicated OS/Python cross-products with representative targets.  
- **Heartbeat:** `fix(heartbeat): make response evaluation more configurable` (#4915) — allows disabling heartbeat evaluation and strengthens evaluator prompt.  
- **Dependency fix:** `fix(webui): sync package-lock.json for qrcode dependency` (#4927) — fixes broken Docker builds caused by missing lock file.

These changes advance heartbeat configurability, WebUI UX, and project reliability.

## Community Hot Topics
The most active discussions revolve around reliability and integration edge cases:

1. **Heartbeat failure with `unifiedSession: true`** — Issue #4924 (open, 3 comments) describes a crash when no sessions exist but a unified session is active. A companion PR #4928 (open, with conflict label) proposes routing heartbeat delivery to the last known concrete channel. This is a priority P1 item.
2. **Qwen models exposing thinking/reasoning content** — Issue #4934 (open, 0 comments) reports that Qwen models leak internal reasoning in chat responses. No fix PR yet; likely requires server-side filtering or provider-specific handling.
3. **Telegram long message splits (historical)** — Issue #4637 (closed, 3 comments) documented that markdown-rich long messages truncate before the final trunk. Fixed in a prior PR; user satisfaction is implied by closure.
4. **Streaming timeout bypass** — Issue #4795 (closed, 0 comments) identified a resource leak where streaming LLM calls could run indefinitely. The bug was acknowledged and appears to have been addressed.

## Bugs & Stability
**Highest severity (open):**  
- [#4924 (P1) Heartbeat target selection fails with unifiedSession](https://github.com/HKUDS/nanobot/issues/4924) — crashes the gateway when sessions are removed and unified mode is enabled. Fix in PR #4928 (conflict label, needs merge).  
- [#4934 Qwen models leak thinking content](https://github.com/HKUDS/nanobot/issues/4934) — exposes model reasoning in chat output. Potentially a data privacy issue; no fix PR yet.

**Medium severity (open):**  
- Hard context overflow (PR #4925, open) — adds a preflight reprompt mechanism to prevent exceeding `contextWindowTokens`. Merged soon? Not yet.

**Resolved bugs today:**  
- Telegram markdown rendering unreliability (#2568, closed) — user reported intermittent failures; fix likely deployed.  
- Windows ExecTool UTF-16 corruption (#4881, closed) — PowerShell output decoding fixed.  
- Custom provider extraHeaders missing (#2505, closed).  
- WhatsApp Bridge WebSocket binding (#1086, closed) — Docker inter-container communication fixed.

There are no critical regressions introduced in the last 24h.

## Feature Requests & Roadmap Signals
Several features are in active development via open PRs, pointing to the next release’s likely contents:

- **Heartbeat improvements:**  
  - `feat(heartbeat): add heartbeat trigger command` (#4620, open) — new CLI command with dry-run.  
  - `feat(heartbeat): add model_override config` (#4549, open) — route heartbeat checks to cheaper models.

- **Memory and provenance:**  
  - `feat(memory): gate archive facts with provenance context` (#4621, open) — smarter consolidation.

- **Channel architecture:**  
  - `refactor(channels): move setup and instance ownership to channels` (#4908, open) — follow-up to Feishu multi-instance support.

- **OAuth UX:**  
  - `feat(providers): surface OAuth status and expiry warnings` (#4689, open, conflict) — across CLI, WebUI, and runtime.

- **Deployment:**  
  - `feat: add one-click Deploy to Render support` (#4937, open) — new Render Blueprint for easy hosting.

- **WebUI:** Slash command highlighting (#4933) and copy action (#4930) already merged; user feedback likely positive.

If these PRs resolve conflicts soon, the next release will likely include heartbeat model overrides, OAuth state visibility, and enhanced memory provenance.

## User Feedback Summary
- **Positive signals:**  
  Users appreciate the rapid closure of bugs (e.g., long-message splits, UTF-16 corruption, Docker communication). The WebUI enhancements (file path preview, copy action, slash command highlighting) align with requests for richer UX.  
- **Pain points:**  
  - Telegram markdown reliability remains intermittent; while #2568 is closed, some users may still experience issues.  
  - Cron job verbosity (#1445, closed) — users want silent execution when nothing meaningful happens; the fix seems to have been accepted.  
  - Custom provider `extraHeaders` loss (#2505) was a blocker for users with enterprise proxies.  
  - Windows users frequently encounter encoding issues (#4881) and will need a new release to benefit from the fix.

Overall satisfaction is high for fix velocity, but heartbeat stability and model-specific leaks are eroding trust in production deployments.

## Backlog Watch
**Issues needing maintainer response:**  
- None of the open issues are unanswered for more than 24h, but #4924 and #4934 are critical and uncharted.  
- Long-dormant feature requests (e.g., #1411, smart speaker integration) were closed, implying low priority.

**Open PRs with conflict labels (likely blocking merge):**  
- [#4621 (memory archive facts)](https://github.com/HKUDS/nanobot/pull/4621) — open since Jul 1, conflicts with other memory changes.  
- [#4620 (heartbeat trigger)](https://github.com/HKUDS/nanobot/pull/4620) — open since Jul 1, conflicts.  
- [#4549 (heartbeat model override)](https://github.com/HKUDS/nanobot/pull/4549) — open since Jun 26, conflicts.  
- [#4689 (OAuth status)](https://github.com/HKUDS/nanobot/pull/4689) — open since Jul 3, conflicts.  
- [#4446 (DingTalk improvements)](https://github.com/HKUDS/nanobot/pull/4446) — open since Jun 22, conflicts.  
- [#4862 (exec session isolation)](https://github.com/HKUDS/nanobot/pull/4862) — open since Jul 9, conflicts.  
- [#4908 (channel refactor)](https://github.com/HKUDS/nanobot/pull/4908) — open since Jul 13, may conflict with other channel work.  
- [#4928 (heartbeat unified session fix)](https://github.com/HKUDS/nanobot/pull/4928) — open since Jul 14, conflicts; urgently needed to fix #4924.

Maintainer attention is most urgently needed on #4928 to resolve the heartbeat crash, followed by the cluster of older, conflicted PRs that have stalled feature delivery.

---

📊 *Data snapshot: 12 issues, 65 PRs, 0 releases, 49 merges/closes.*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-07-15

## Today's Overview

Hermes Agent saw **very high community activity** over the past 24 hours: 50 issues and 50 pull requests were updated, with 33 issues closed and 10 PRs merged/closed. No new releases were published. The pulse reflects a strong focus on bug fixes (especially desktop, gateway, and Telegram adapter), together with several large feature proposals (RBAC permission tiers, plugin packs, MCP catalog expansion). The project remains in active development, with maintainers responsive to both critical regressions and user‑driven enhancements.

## Releases

No new releases this period.

## Project Progress

**Merged/closed PRs (10)** advanced core stability and feature integration:

- **`fix(tui-gateway): close AIAgent instances`** (#50403) — fixes three resource‑leak sites in the TUI gateway server, companion to `batch_runner.py` fixes.
- **`test: harden flaky gateway and tool suites`** (#46393) — improved test isolation for async/gateway/browser suites.
- **`feat(signal): include bounded recent chat history`** (#46391) — injects recent Signal conversation context for better agent responses.
- **`feat(agent): add global RULES.md support`** (#51490) — introduces `load_rules_md()` following the same pattern as `SOUL.md`, with prompt‑injection guards.

A large batch of high‑priority bugs were resolved (see Bugs section), with fixes on main for cron double‑fire, Telegram re‑generation, stale‑stream Anthropic recovery, sandbox file invisibility, and more.

## Community Hot Topics

| Item | Comments | Reactions | Summary |
|------|----------|-----------|---------|
| [#527 – Gateway Permission Tiers (Feature)](https://github.com/NousResearch/hermes-agent/issues/527) | 12 | 👍8 | Proposes role‑based access control (Owner/Admin/User/Guest) for messenger platforms, replacing the current binary auth model. High demand – suggests strong community interest in secure multi‑user deployments. |
| [#64182 – Plugin Interface Expansion (Tracking)](https://github.com/NousResearch/hermes-agent/issues/64182) | 10 | 0 | Community‑driven tracking issue for plugin interface improvements, distilled from Discord discussions. Aims to unblock long‑queued plugin PRs and deliver stable public interfaces. |
| [#10166 – fix(telegram): handle ChatMigrated error (PR)](https://github.com/NousResearch/hermes-agent/pull/10166) | * (open since Apr 15) | 0 | Critical long‑standing PR for Telegram groups upgraded to supergroups. Unhandled `ChatMigrated` errors cause message failures. Still awaiting review. |

**Underlying needs**: Permissions and plugin extensibility are the two hottest topics, reflecting the project’s maturation toward enterprise and community‑shared use. Telegram reliability remains a recurring pain point.

## Bugs & Stability

### Critical / High Severity (P1–P2, new or still open)

- **#64694 [P1] – Telegram adapter crashes on startup** (`HTTPXRequest` read‑only attribute under python‑telegram‑bot 22.6) – blocks all Telegram usage on current `main`. Marked duplicate; fix likely needed.
- **#64674 [P2] – Telegram adapter fails when `multiplex_profiles: true` and bot token in secondary profile** – breaks multi‑profile setups.
- **#55191 [P3] – Desktop (macOS) renderer crashes at ~128K token compaction** – window freezes; backend stays healthy. No fix PR yet.
- **#60485 [P2] – Cron scripts falsely time out when children keep stdout pipes open** – affects `no_agent`/script cron jobs.
- **#10166 [P2] – Telegram `ChatMigrated` error unhandled** (PR open since April) – still unfixed on main.

### Fixed (closed today)

Many high‑impact bugs were closed with fixes merged to main:

- **#51873** – Desktop never shows sign‑in UI with basic auth.
- **#51853** – Cron from restricted profiles bypasses tool restrictions and delivers via wrong bot.
- **#51844** – Stale‑stream recovery calls OpenAI client for native Anthropic → fails silently.
- **#51820** – `execute_code` sandbox files invisible to host.
- **#51800** – Context compression tail budget ignores `reasoning_content` → near‑no‑op compaction.
- **#51329** – Cron double‑fire due to race between tick dispatch and in‑flight guard.
- **#51278** – Title generation sends main model name to fallback endpoint.
- **#51229** – Z.AI endpoint cache not persisted across restarts.
- **#51903** – Sub‑agents inherit `reasoning_effort` from parent → HTTP 400 on DeepSeek.

**Assessment**: The project is addressing bugs aggressively, with many P2 fixes landing today. Remaining P1/P2 issues are concentrated in the Telegram adapter and desktop renderer.

## Feature Requests & Roadmap Signals

Top new/updated feature requests this period:

- **#527 – Gateway Permission Tiers (RBAC)** – most starred and commented; likely to be prioritised for next minor release.
- **#64182 – Plugin Interface Expansion** – community planning issue; signals upcoming stabilisation of plugin APIs.
- **#64166 – Plugin Packs** – declarative, shareable plugin sets (export/install), part of the July plugin roadmap.
- **#51200 – Sessions export in Markdown/HTML** – human‑readable conversation export.
- **#51814 – Fallback providers for auxiliary model slots** (vision, STT, TTS, etc.) – requested to match main model fallback behaviour.
- **#51430 – Auto‑failover on invalid model selection** – crash recovery when user picks an invalid model.
- **#64463 – Blender MCP catalog entry** (PR open) – expands MCP tool ecosystem.
- **#64456 – Telegram `ignore_human_mentions` config** (PR open) – fine‑grained group chat control.

**Prediction**: Next release (v0.18?) will likely include RBAC for gateways, plugin packs, and auxiliary fallback – these have strong community support and existing PRs in the pipeline.

## User Feedback Summary

- **Pain points**: Telegram configuration and compatibility issues dominate (multiple tickets/PRs). Desktop crashes on large contexts and Windows‑specific problems (spaced Git paths #64713, update failures #51273) also frustrate users. Configuration complexity with profiles and permissions is a recurring theme.
- **Satisfaction**: Positive showcase by a non‑coder (#51718) who built a full community website purely by talking to Hermes – demonstrates low‑barrier agent usability.
- **Use cases**: Multi‑profile/team environments (permission tiers), custom tool integration (MCP, Mem0), and script‑driven cron jobs are high‑demand.

## Backlog Watch

Items needing maintainer attention:

- **PR #10166 (Telegram ChatMigrated)** – open since April, critical for group chat. Awaiting review.
- **PR #6001 (Gateway warn on default config when profiles exist)** – open since April, improves UX for multi‑profile setups.
- **Issue #55191 (Desktop crash on compaction)** – open since June, no fix yet. Blocks macOS users with large conversations.
- **PR #18796 (OpenAI image gen env var)** – open since May, needed for third‑party backends.
- **Issue #527 (Permission tiers)** – high demand but still under discussion; a decision on implementation path would help.
- **PR #43179 (5 bundled skills)** – open since June, adds TypeScript/Next.js skills.

These items represent long‑standing improvements that would significantly reduce user friction and unblock community contributions.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest – 2026-07-15

## 1. Today's Overview
The PicoClaw project shows **moderate activity** with 3 issues and 9 pull requests updated in the last 24 hours. Five PRs were merged or closed, including critical fixes for AWS Bedrock compatibility, streaming tool call handling, and secure config processing. Four open PRs continue to advance prompt caching, Anthropic message support, and backward compatibility. No new releases were published, but the steady merge cadence indicates healthy maintenance and feature development. The community is engaged around security upgrades (issue #3088) and provider-specific caching, while several bugs remain open.

## 2. Releases
*No new releases were published in the last 24 hours.*

## 3. Project Progress
Five PRs were merged or closed today, reflecting both bug fixes and feature enhancements:

- **[PR #2982 (closed)]** – `fix(bedrock): drop temperature for models that deprecate it (Opus 4.8)`  
  Resolves a critical regression where Claude Opus 4.8 on AWS Bedrock failed due to the model rejecting the `temperature` parameter. A pragmatic workaround that silences the error for models that no longer support it.

- **[PR #2957 (closed)]** – `fix(channels): prevent tool_calls from being dropped during streaming`  
  Fixes a bug introduced in #2892 where tool call messages were incorrectly filtered as auxiliary messages during streaming, causing loss of tool interactions.

- **[PR #2270 (closed)]** – `fix(config): handle non-addressable SecureString values in collectSensitive`  
  Resolves a panic when reflection iterates over map values containing `SecureString` – now creates addressable copies safely.

- **[PR #2128 (closed)]** – `fix(tools): ensure tool parameters have valid JSON Schema properties field`  
  Ensures tool schemas from MCP servers always include a `properties` field, preventing validation errors with strict OpenAI-compatible APIs (e.g., LM Studio).

- **[PR #3156 (closed)]** – `feat(pico): emit per-turn LLM token usage on finalized message`  
  Delivers real per-turn token consumption (input/output) over the Pico channel, enabling downstream billing and telemetry.

These merges signal that the project is actively hardening reliability and extending observability.

## 4. Community Hot Topics
- **[Issue #3088 – Use vodozemac instead of libolm](https://github.com/sipeed/picoclaw/issues/3088)**  
  High-priority, help-wanted feature request with 8 comments and 2 👍. The community strongly advocates replacing the unmaintained `libolm` with `vodozemac`, the official Matrix replacement. Underlying need: **long-term security and compliance** – libolm is known to have unpatched vulnerabilities. The proposal includes making libolm optional at compile time.

- **[Issue #3232 – Rate limiting doesn't work without fallback models](https://github.com/sipeed/picoclaw/issues/3232)**  
  A user reports that RPM configuration is ignored when no fallback models are set. Only 1 comment so far, but the bug affects a basic reliability feature – likely to gain traction.

- **[PR #3163 – Leverage Bedrock Converse prompt caching via cache points](https://github.com/sipeed/picoclaw/pull/3163)**  
  Open since June 23, this PR introduces significant cost savings (0.1× read, 1.25× write billing) by using AWS Bedrock’s cache points. Community interest is high among AWS users, as it directly reduces operational costs.

- **[PR #3228 – Send SystemParts as system blocks with cache_control for Anthropic](https://github.com/sipeed/picoclaw/pull/3228)**  
  Another caching-related improvement – enables per-block `cache_control` markers for Anthropic, currently impossible because system messages are flattened. Unlocks prompt caching for heavy multi-context scenarios.

## 5. Bugs & Stability
No new critical regressions were introduced. The following bugs were reported or addressed:

| Bug | Severity | Status | Notes |
|-----|----------|--------|-------|
| **Rate limiting fails without fallback models** (issue #3232) | Medium | Open, no fix PR yet | RPM config ignored; single-model setups are broken. |
| **DingTalk chat preview shows "PicoClaw" instead of message content** (issue #3255) | Low | New, no comments | Cosmetic but confusing for users; full reply content renders correctly inside chat. |
| **Tool calls dropped during streaming** (PR #2957) | High | **Fixed** (merged today) | Core functionality broken since previous release. |
| **Bedrock Opus 4.8 temperature rejection** (PR #2982) | Critical | **Fixed** (merged today) | Blocked all calls to the latest Claude model on Bedrock. |
| **SecureString config panic** (PR #2270) | Medium | **Fixed** | Panic on map-iteration – now mitigated. |
| **MCP tool schema missing properties** (PR #2128) | Medium | **Fixed** | Validation errors with strict APIs resolved. |

All recently fixed bugs have corresponding closed PRs, indicating a strong response velocity.

## 6. Feature Requests & Roadmap Signals
Based on open issues and recently merged features, the next release is likely to include:

- **Vodozemac integration** (issue #3088) – high priority, help wanted; maintainers are seeking contributors but it is clearly a roadmap target.
- **Bedrock prompt caching** (PR #3163) – awaiting review/merge; would be a major cost optimization for AWS users.
- **Anthropic per-block cache control** (PR #3228) – under review; complement to Bedrock caching.
- **Feishu audio/video native message types** (PR #3256) – open, code ready; improves playability of media messages.
- **LLM token usage telemetry** (PR #3156, already merged) – already landed, will appear in next release.
- **Backward compatibility fix** (PR #3233) – open, likely to be merged soon.

User-requested features lean heavily toward **provider-specific caching and security upgrades**, signaling that the user base includes cost-conscious enterprises and security-sensitive teams.

## 7. User Feedback Summary
- **Pain points reported:**
  - Inability to use rate limiting without fallback models (#3232)
  - DingTalk list preview always shows bot name instead of reply content (#3255)
  - Feishu audio/video sent as generic files instead of native playable messages (#3256)
  - Historical confusion over tool call streaming loss (#2957) – now fixed
  - Security concerns over `libolm` (#3088) – strong community push for replacement
- **Satisfaction indicators:**
  - Multiple PRs merged quickly (some within 24 hours of last update)
  - Fixes for critical Bedrock model compatibility (#2982) show responsiveness
  - Token usage emission (#3156) directly addresses a long-requested telemetry gap

Overall, users are actively contributing and reporting issues, and the maintainer team is closing bugs at a healthy pace.

## 8. Backlog Watch
- **[Issue #3088 – Use vodozemac instead of libolm](https://github.com/sipeed/picoclaw/issues/3088)** – Open since 2026-06-09 (over 5 weeks), high priority, help-wanted. No PR linked yet. This is the most important item on the backlog; failure to address could become a security liability. **Needs maintainer assignment or community champion.**

- **[PR #3163 – Bedrock prompt caching](https://github.com/sipeed/picoclaw/pull/3163)** – Open since 2026-06-23 (3 weeks), no comments from maintainers. A significant cost-saving feature that may be stalled due to review bandwidth.

- **[PR #3233 – Fix PR 3222 backward compat](https://github.com/sipeed/picoclaw/pull/3233)** – Marked “stale” after 8 days. If unaddressed, could cause compatibility regressions for users on older config formats.

- **[Issue #3232 – Rate limiting bug](https://github.com/sipeed/picoclaw/issues/3232)** – Only 1 comment, but the bug impacts a core reliability feature. No PR yet; may need prioritization alongside vodozemac.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest – 2026-07-15

## 1. Today's Overview
The project saw a burst of maintenance activity with **28 pull requests updated** in the last 24 hours, of which **7 were merged or closed** and **21 remain open**. No new releases were cut today, and no fresh issues were filed. The activity is heavily skewed toward **bug fixes across critical subsystems** (session lifecycle, container runtime interoperability, polling loop correctness, and security hardening). A notable feature addition – support for **Dial as a messaging channel** – reached closed status and was re‑opened in a refined version. Overall, the project is in a **stabilisation and hardening phase**, with maintainers responding quickly to real‑world integration reports.

## 2. Releases
No new releases were published today.

## 3. Project Progress – Merged / Closed PRs
Seven pull requests were closed in the last 24 hours (all merged):

- **#3043** (`fix(skills): switch Telegram deep-link from t.me to telegram.me`) – fixes broken pairing links on restricted environments.  
- **#3042** (`feat(setup): offer Dial in the channel picker + wizard, installer, skills, docs`) – initial Dial channel support (re‑opened later as #3050 with refinements).  
- **#2730** (`fix: NANOCLAW_* flags set in .env never reach process.env under launchd/systemd`) – critical environment‑loading fix for daemon‑mode users.  
- **#2729** (`docs(add-telegram): match pairing status-block names to the setup step; fix adapter pin`) – documentation correction based on end‑to‑end testing.  
- **#2728** (`fix(telegram): create the wiring row when pairing with a wire-to intent`) – bug fix where a successful Telegram pairing never created the required database row.  
- **#2753** (`fix(hooks): pre-commit fell open when pnpm was missing from PATH`) – developer experience fix for the Git hook runner.  
- (One additional PR closed but not shown in the top‑20 list, bringing the total to 7.)

These merges resolve **six distinct user‑reported or test‑discovered issues**, improving reliability in environment loading, Telegram integration, and the channel‑pairing workflow.

## 4. Community Hot Topics
All PRs in the dataset show **undefined comment counts**, making it impossible to rank by discussion volume. Based on the volume of updates, author activity, and the nature of the changes, the following PRs draw the most attention:

- **#3053** (`fix(agent-runner): stand down cleanly when idle instead of riding to the 30-min SIGTERM`) – addresses a systemic problem where every container lingers until the host’s absolute kill timeout. The issue affects **all users** and is a top priority.  
  *Link:* nanocoai/nanoclaw PR #3053

- **#3052** (`fix(container-runtime): resolve host gateway under Colima/Lima/Rancher Desktop`) – Docker Desktop alternative runtimes are increasingly popular; this fix unblocks users on macOS who are not on Docker Desktop.  
  *Link:* nanocoai/nanoclaw PR #3052

- **#2800** (`fix(security): validate group folders and forbid implicit image pulls`) – a security‑critical PR that has been open since June 17; it validates group folders and prevents Docker from pulling images during spawn, reducing supply‑chain risk.  
  *Link:* nanocoai/nanoclaw PR #2800

- **#2750** (`fix: recover stale outbound.db journals after container kills; classify hot-journal poll races`) – solves two related, multi‑month database file corruption bugs (#2516, #2640). The long review time suggests complexity, but the fix is needed for production reliability.  
  *Link:* nanocoai/nanoclaw PR #2750

**Underlying needs:** Users are asking for **reliable container teardown**, **multi‑runtime compatibility**, **stronger security defaults**, and **database resilience** – all foundational for production deployments.

## 5. Bugs & Stability
Several bug‑fix PRs were active today, ranked by severity:

| Severity | Bug | Fix PR | Status |
|----------|-----|--------|--------|
| **Critical** | Containers never exit, hitting absolute‑kill timeout (exit 143) for every session | #3053 | Open |
| **Critical** | `NANOCLAW_*` env flags ignored under launchd/systemd – breaks security gates like egress lockdown | #2730 | Merged ✅ |
| **High** | `host.docker.internal` unreachable on Colima/Lima/Rancher Desktop – breaks all container‑host communication | #3052 | Open |
| **High** | Telegram pairing does not create `messaging_group_agents` row – leads to silent wiring failures | #2728 | Merged ✅ |
| **High** | Message blocks inside tool‑call turns are not delivered to the polling client | #3049 | Open |
| **Medium** | `<message>` body truncated at a quoted `</message>` inside the content | #3048 | Open |
| **Medium** | `safeParseContent` returns non‑objects for primitive JSON, causing `undefined` reads | #2801 | Open |
| **Medium** | Stale `outbound.db` journal files after container kills / poll races | #2750 | Open |
| **Low** | Pre‑commit hook fails silently if `pnpm` not in `PATH` | #2753 | Merged ✅ |

**Notable:** The environment‑flag fix (#2730) is particularly important for users relying on `NANOCLAW_EGRESS_LOCKDOWN` for network security – it is now resolved.

## 6. Feature Requests & Roadmap Signals
Two PRs today add **Dial** as a new messaging channel (feature skill). The first version (#3042) was merged, then immediately replaced by an improved version (#3050, still open). This signals that **multi‑channel support** is an active roadmap item, likely targeting the next minor release.

No other user‑driven feature requests appear in the dataset; the current focus is squarely on bug fixes and hardening.

**Prediction:** Dial channel support will land in the next release (v0.x). In the same timeframe, improvements to container teardown (#3053) and multi‑runtime host resolution (#3052) are likely to be merged as stability blockers.

## 7. User Feedback Summary
While no separate issue comments or reactions are available, several PR descriptions contain explicit user‑pain messages:

- *Real install walkthrough* (PR #3047) – The Slack skill had credentials ordered incorrectly, causing webhook URL validation to fail. “Based on a real install walkthrough” indicates a user attempted the guided installation and hit the bug.
- *End‑to‑end testing* (PR #2728, #2729) – Telegram pairing was reported to “log success” yet silently fail to create database rows, directly cited by users who could not complete the pairing flow.
- *Documentation mismatches* (PR #2729) – Status block names in docs didn’t match the actual setup step output, causing confusion during pairing.

These items underline that **installation and first‑run experience** are the primary pain points today. Users are willing to attempt new channels (Dial) but expect the core plumbing (Telegram, Slack) to “just work”.

## 8. Backlog Watch
The following important PRs have been open for an extended period and may need maintainer attention:

- **#2800** (security: validate group folders, forbid implicit pulls) – June 17, 28 days open. Touches core security; has accumulated minor merge conflicts (requires rebase).
- **#2801** (router: harden untrusted input with safeParseContent + engage_pattern) – June 17, 28 days open. Addresses a subtle parsing vulnerability.
- **#2750** (stale `outbound.db` journals) – June 12, 33 days open. A complex fix for two long‑standing database corruption bugs; needs careful review.

All three have been updated recently (July 14) but remain unmerged. They share a common theme of **production‑grade robustness** and should be prioritised before the next release.

No lingering issues or unanswered community questions were recorded in the past 24 hours.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest for 2026-07-15

## 1. Today's Overview

The IronClaw project continues at a very high velocity, with **48 issues** and **50 pull requests** updated in the last 24 hours. The community closed 12 issues and merged/closed 27 PRs during this period. Activity is heavily concentrated around **bug-bash triage** (multiple P2/P3 bug reports), **extension runtime unification** (multiple Train B rollup PRs), and **CI reliability improvements** (flaky test quarantine, release gate smoke checks). No new releases were published today, but the release train PR (#5598) remains open without merge, suggesting pending chore. Overall project health is high but under strain from integration regressions, with several critical bugs reported that already have fix PRs in review.

## 2. Releases

**No new releases** were published in the last 24 hours. The last release PR (#5598) proposed version bumps (`ironclaw_common` 0.4.2→0.5.0, `ironclaw` 0.24.0→0.29.1) but remains open since July 3. No migration notes are available.

## 3. Project Progress – Merged/Closed PRs Today

The following major PRs were closed/merged today:

- **#5896** – Fix WebUI memory browse isolation: scoped the memory browse mount to the authenticated caller and added E2E regression test.
- **#6095** – Fix reborn Slack auth-unavailable notice: name the blocked provider, stop misclassifying I/O faults as invalid input.
- **#6089** – Recover resource governor from libSQL contention: classify SQLite/libSQL `BUSY`/`LOCKED` as typed retryable; add PostgreSQL equivalent handling.
- **#6013** – Make agent-loop completion nudge tools-capable and enable for interactive coding.
- **#6065** – Extension-runtime finalize (P7b): lane A package inventory, retire vocabulary, move data to correct locations.
- **#6056** – Extension-runtime P7a: wire state enums, accounts list, deferred legs. Implements ADR 0001 (multiple accounts per vendor).
- **#6012** – Extension-runtime P5: delivery coordinator + Slack/Telegram outbound.
- **#6007** – Extension-runtime P4: generic ingress router + verifier.

Additionally, multiple smaller fixes landed for Windows filesystem support (#6098), per-thread message write serialization (#6096 test fix for #6047), and result-read preview cap tuning (#6097).

## 4. Community Hot Topics

The most discussed issue today is **#5948** ([Issue](https://github.com/nearai/ironclaw/issues/5948)) – *Assistant incorrectly reports GitHub extension as activated when it is only installed* – with 5 comments, closed today. Users are concerned about misleading status reporting that erodes trust in the assistant’s responses.

The most active open PR is **#6093** ([PR](https://github.com/nearai/ironclaw/pull/6093)) – *Self-verification pass for reborn agent loop + benchmark_default profile* – a large XL PR from a core contributor. The community needs better runtime correctness guarantees before shipping to benchmarks.

Other high-traffic items:

- **#6105** ([Issue](https://github.com/nearai/ironclaw/issues/6105)) – *Extension/channel lifecycle state-machine test* – the #1 user-facing bug family of the past two weeks (Slack disconnect/reconnect). No comments yet but broad impact.
- **#5970** ([PR](https://github.com/nearai/ironclaw/pull/5970)) – *MCP registration framework skeleton* – structural, not user-facing, but indicates growing ecosystem interest.
- **#6111** ([PR](https://github.com/nearai/ironclaw/pull/6111)) – *WebChat v2 model selection + per-run usage/cost* – directly responds to user requests for cost transparency.

The underlying need across these threads: **better error fidelity** (no generic failures, no false success signals) and **robust lifecycle handling** for third-party integrations.

## 5. Bugs & Stability

Bugs reported or updated today, ranked by severity:

**Critical / High Severity:**

- **#6099** ([Issue](https://github.com/nearai/ironclaw/issues/6099)) – `POST /llm/test-connection` reports `ok:true` for an unreachable endpoint with invalid key. A security/convenience miss – UI will show green for misconfigured providers. No fix PR yet.
- **#6092** ([Issue](https://github.com/nearai/ironclaw/issues/6092)) – Slack conversation hangs in “thinking” state after reconnecting integration. P2 bug-bash; users are left with no feedback.
- **#6091** ([Issue](https://github.com/nearai/ironclaw/issues/6091)) – Slack extension reports conflicting connection states after disconnect. Different UI parts show different states.
- **#6047** ([Issue](https://github.com/nearai/ironclaw/issues/6047)) – Messages processed and displayed out of chronological order. P2 bug. **Fix PR #6096 is open** and verified.

**Medium Severity:**

- **#6109** ([Issue](https://github.com/nearai/ironclaw/issues/6109)) – OpenAI-compat API: Bedrock silently ignores model override; response label is a blind echo.
- **#6102** ([Issue](https://github.com/nearai/ironclaw/issues/6102)) – FilesystemSessionThreadService may be reconstructed mid-process with in-flight calls. Follow-up from #6047 fix.
- **#6101** ([Issue](https://github.com/nearai/ironclaw/issues/6101)) – Per-thread inbound-message write serialization not extended to assistant/tool-result writes.
- **#6100** ([Issue](https://github.com/nearai/ironclaw/issues/6100)) – One-shot context-window cache can be reseeded with stale snapshot after slow write.
- **#6087** ([Issue](https://github.com/nearai/ironclaw/issues/6087)) – Extension catalog load failures shown as empty state, indistinguishable from genuine empty catalog.
- **#6085** ([Issue](https://github.com/nearai/ironclaw/issues/6085)) – Admin user details expose broken “Create token” action (no backend endpoint).
- **#5884** ([Issue](https://github.com/nearai/ironclaw/issues/5884)) – Routine loses credentials after external token revocation. P2 bug, **fix PR #6095** merged.

**Low Severity / UI Polish:**

- **#6083** ([Issue](https://github.com/nearai/ironclaw/issues/6083)) – Replace native `confirm()` dialogs with Reborn modal.
- **#6039** – Light theme color contrast (closed).
- **#6037** – Chat connection status hidden (closed).
- **#6028** – Stray `$` in MCP heading (closed).

Many of these severity-P2 bugs already have fix PRs in review or merged, indicating a strong fix cadence.

## 6. Feature Requests & Roadmap Signals

Several new enhancement issues and PRs reveal near-term roadmap priorities:

- **Extension Lifecycle Reliability** – `#6105` calls for a full state-machine test (install→connect→disconnect→reconnect→uninstall) plus canary lanes on cron. This addresses the #1 pain point.
- **Error Fidelity Enforcement** – `#6108` proposes a rule that no generic failures, no lying status, enforced by checks. Likely to land as a follow-up to #6099 and #6095.
- **Model-Input Compatibility Corpus** – `#6107` wants CI replay of real tool-call argument shapes to catch over-strict validation. A chronic harness bug class.
- **CI Signal Recovery** – `#6103` demands nextest retries, visible quarantine, and watchdog for dead workflows. High priority because ~70% of July pushes failed due to flaky tests.
- **Release Gate Smokes** – `#6106` requires boot smoke and upgrade-path canary before publish. Directly caused by a crash-looping security fix (#5966).
- **24h Fix SLA** – `#6104` is a process issue to enforce fast turnaround on daily failure taxonomy candidates.

On the implementation side, **PR #6093** (self-verification pass), **PR #6111** (WebChat v2 model selection + cost), and **PR #5970** (MCP registration framework) are likely landing in the next release. The **unified extension model (NEA-25)** is advancing through both Train A and Train B rollups (#6061, #6090).

**Prediction for next release:** The next version will include extension runtime unification (Train A/B merged), MCP registration skeleton (still not user-facing), WebChat v2 model override/cost, self-verification for benchmarks, and a batch of error-fidelity fixes.

## 7. User Feedback Summary

Real user pain points surfaced today include:

- **Integration reliability** is the dominant concern. Slack disconnect/reconnect hangs (#6092, #6091), credential loss after token revocation (#5884), and incorrect activation status (#5948) all erode trust.
- **Message ordering** remains broken in some scenarios (#6047, #5418). Users see reversed conversation flow, which makes debugging impossible.
- **False success signals** confuse users: test-connection returns `ok:true` for invalid endpoints (#6099), runs report success while delivery silently fails (#5944 referenced in #6108), and catalog errors look like empty data (#6087).
- **UI inconsistencies** (light theme colors, native confirm dialogs, hidden connection status, stray `$`) reduce professional polish.
- **Session/cache races** (#6100, #6102) are invisible to users but cause silent data corruption – a trust issue for power users.

Overall user satisfaction is mixed: the project fixes bugs quickly (many closed today), but the recurrence of similar integration regressions week-over-week (Slack lifecycle, message ordering) suggests systemic gaps in test coverage and CI gating.

## 8. Backlog Watch

Few items in the backlog require maintainer attention; most open issues are recent. The following deserve note:

- **#5598** ([PR](https://github.com/nearai/ironclaw/pull/5598)) – *chore: release* – Open since July 3, 11 days stale. Contains breaking changes in `ironclaw_common` and `ironclaw_skills`. Blocking downstream consumers.
- **#5970** ([PR](https://github.com/nearai/ironclaw/pull/5970)) – *MCP registration framework skeleton* – Open since July 10, awaiting review or next step. Important for ecosystem growth.
- **#5977** ([PR](https://github.com/nearai/ironclaw/pull/5977)) – *Advertise Reborn skills as one-line listing* – Open since July 11, size XL, risk low. Could cut token waste significantly.
- **#5884** ([Issue](https://github.com/nearai/ironclaw/issues/5884)) – Routine loses credentials – Open since July 9, P2. While a fix PR (#6095) was merged, the issue is still open – needs closure with notes.
- **#6109** ([Issue](https://github.com/nearai/ironclaw/issues/6109)) – Bedrock model override – Created today, no PR yet, but important for API parity.

No months-old issues are languishing, which speaks to maintainer responsiveness. The release PR #5598 is the largest bottleneck.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest – 2026-07-15

## Today’s Overview

Project activity remained moderate, with no new releases and all open items from previous periods resolved. Four stale issues from early April were closed today, and three pull requests were merged, all focusing on stability improvements and bug fixes. The development team continues to prioritize agent runtime robustness and UI responsiveness. Overall project health appears steady, with a sustained cadence of targeted patches.

---

## Releases

No new releases were published in the last 24 hours.

---

## Project Progress

All three merged PRs address identified regressions or user-reported pain points without introducing breaking changes.

- **PR #2331** – [fix(openclaw): terminate critical tool loops](https://github.com/netease-youdao/LobsterAI/pull/2331)  
  Backports a dual-layer fix from OpenClaw v2026.6.1 to ensure that a critical `tool-loop` veto properly terminates the current agent run while preserving normal plugin behavior and allowing sibling tools in parallel batches to finish cleanly. Includes validation and regression tests.

- **PR #2330** – [fix(openclaw): stop loop after aborted tool run](https://github.com/netease-youdao/LobsterAI/pull/2330)  
  Cherry-picks a fix from upstream OpenClaw core (`7fe287b0d3`) to stop the agent loop at abort boundaries after tool execution and async turn hooks, preventing runaway loops. Adds patch validation and Lobster-specific test coverage.

- **PR #2329** – [fix(cowork): prevent conversation scroll jumps](https://github.com/netease-youdao/LobsterAI/pull/2329)  
  Fixes an issue where the conversation view would jump during streaming when the user was manually scrolling. The patch respects manual scroll state and cancels pending auto-scroll actions, improving the AI cowork experience.

---

## Community Hot Topics

All four issues updated in the last 24 hours were closed as stale and received only 2–3 comments each, indicating low ongoing community discussion today. The most commented issues were:

- **Issue #1389** – [Language selection: English selected but Chinese option shown in English](https://github.com/netease-youdao/LobsterAI/issues/1389)  
  UX inconsistency in language selection – a low-severity but confusing behavior for multilingual users.

- **Issue #1386** – [Share long conversation creates truncated image](https://github.com/netease-youdao/LobsterAI/issues/1386)  
  Functional limitation in the sharing feature; long chat histories result in incomplete screenshots.

These bugs were reported 3.5 months ago and closed without a visible fix PR. They represent unresolved usability gaps that may resurface if users encounter them again.

---

## Bugs & Stability

No new bugs were filed today. The four stale issues closed today cover a mix of UI and configuration bugs:

| Issue | Description | Severity | Fix PR? |
|-------|-------------|----------|---------|
| [#1389](https://github.com/netease-youdao/LobsterAI/issues/1389) | Language selection shows English text for Chinese option | Low | None linked |
| [#1386](https://github.com/netease-youdao/LobsterAI/issues/1386) | Share image truncates long conversations | Medium | None linked |
| [#1388](https://github.com/netease-youdao/LobsterAI/issues/1388) | Email configuration test connectivity hangs indefinitely | High | None linked |
| [#1390](https://github.com/netease-youdao/LobsterAI/issues/1390) | Scheduled task update unresponsive (intermittent) | Medium | None linked |

While none of these issues had a direct fix PR today, the merged PR #2329 resolves a related scroll jump bug that could impact the sharing experience. The email connectivity hang (issue #1388) and scheduled task update unresponsiveness (issue #1390) remain unaddressed and may be potential stability risks for users relying on those features.

---

## Feature Requests & Roadmap Signals

No explicit feature requests were recorded today. The closed issues are all bug reports, not enhancements. The project continues to focus on hardening existing functionality rather than adding new capabilities.

---

## User Feedback Summary

Real user pain points extracted from today’s closed issues include:

- **Language selection confusion**: Bilingual users expect the label to match the selected language; the current behavior breaks that expectation.
- **Share / export limitations**: Long conversations cannot be reliably shared as images – a common workflow for knowledge workers.
- **Email integration unreliability**: Testing SMTP connectivity can hang, leaving users without feedback and possibly crashing the configuration UI.
- **Scheduled task instability**: Editing existing schedules occasionally fails to save changes, frustrating power users who rely on automations.

Satisfaction indicators are mixed: the merged scroll-jump fix shows the team listens to UI complaints, but the lack of fixes for these 3-month-old bugs suggests some pain points are deprioritized.

---

## Backlog Watch

No critical long-unanswered issues remain open today. All stale items from April have been closed. Maintainer attention should be paid to the underlying problems described in issues #1388 (email connectivity) and #1390 (scheduled task update), as these affect core functionality and could cause user churn if not addressed. No PRs are waiting for review.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest – 2026-07-15

## Today’s Overview
Moltis shows **high development activity** in the past 24 hours, with **12 pull requests** updated (8 merged/closed, 4 open) and **3 issues** touched (2 open, 1 closed). A new daily release **20260714.11** was published, reflecting the project’s continuous integration cadence. The merged PRs span important bug fixes, model support, and infrastructure improvements, while open issues and PRs signal ongoing feature work and user-reported pain points.

## Releases
**20260714.11** – No release notes were published with this version. The monotonic versioning scheme (date‑based) suggests a nightly or CI‑triggered build, likely incorporating the day’s merged changes.

## Project Progress
**8 PRs were merged/closed** in the last 24 hours, advancing both stability and features:

- **[PR #1146](https://github.com/moltis-org/moltis/pull/1146)** – **GPT-5.6 model support** (Sol, Terra, Luna) added to OpenAI and Codex fallback catalogs, with documented context windows (1.05M/372K).
- **[PR #1120](https://github.com/moltis-org/moltis/pull/1120)** – Fix for MCP OAuth failures (see *Bugs & Stability*).
- **[PR #1136](https://github.com/moltis-org/moltis/pull/1136)** – Coercion of stringified scalar tool arguments before validation, improving compatibility with smaller local models (e.g., Gemma 4).
- **[PR #1139](https://github.com/moltis-org/moltis/pull/1139)** – Gateway no longer force‑enables `matrix‑sdk` via the `metrics` feature, reducing unnecessary dependencies.
- **[PR #1145](https://github.com/moltis-org/moltis/pull/1145)** – Fix for panic in CalDAV’s `normalise_datetime` on non‑ASCII datetime strings.
- **[PR #1098](https://github.com/moltis-org/moltis/pull/1098)** – Browser tool calls tolerate `null` optional parameters emitted by smaller models.
- **[PR #1089](https://github.com/moltis-org/moltis/pull/1089)** – Persisted tool results are capped before rehydration, preventing oversized payloads.
- **[PR #1141](https://github.com/moltis-org/moltis/pull/1141)** – Dependency bumps (npm_and_yarn group) across UI and docs directories.

## Community Hot Topics
- **[Issue #1102](https://github.com/moltis-org/moltis/issues/1102)** – Feature request to add FunASR/SenseVoice as a local STT engine. A long‑standing request (opened June 4) with a detailed license/clarification note added on July 14. No maintainer response yet, but the growing interest suggests community demand for offline speech‑to‑text.
- **[Issue #1132](https://github.com/moltis-org/moltis/issues/1132)** – Bug: “main” session cannot be deleted/archived. Low comment count but a potentially blocking usability concern for users who manage sessions.
- **[PR #1124](https://github.com/moltis-org/moltis/pull/1124)** – Open PR adding `chat.context_command` (pre‑turn context injection). Received no comments but has been open since June 15, indicating a feature that may need further review.

## Bugs & Stability
**Severity: Medium**

| Issue | Summary | Fix Status |
|-------|---------|------------|
| [#1132](https://github.com/moltis-org/moltis/issues/1132) – OPEN | “main” session cannot be deleted/archived – likely a logic guard to protect the default session. | No fix PR yet; may require design decision. |
| [#1119](https://github.com/moltis-org/moltis/issues/1119) – CLOSED | MCP OAuth fails with `invalid_target` for Notion/Linear servers (due to `resource_metadata` in WWW‑Authenticate). | **Fixed** by [PR #1120](https://github.com/moltis-org/moltis/pull/1120). |
| [#1136](https://github.com/moltis-org/moltis/pull/1136) – merged | Pre‑dispatch string-to-scalar coercion – prevents validation failures with local models. | Merged. |
| [#1145](https://github.com/moltis-org/moltis/pull/1145) – merged | CalDAV datetime panic on non‑ASCII input. | Merged. |
| [#1098](https://github.com/moltis-org/moltis/pull/1098) – merged | Null optional browser parameters tolerated. | Merged. |

All reported bugs from the last 24h have been addressed except the “main” session deletion issue, which remains open.

## Feature Requests & Roadmap Signals
- **Local STT engine** ([#1102](https://github.com/moltis-org/moltis/issues/1102)) – Still under discussion; likely candidate for a future release if maintainers pick it up.
- **Automatic browser screenshots** ([PR #1135](https://github.com/moltis-org/moltis/pull/1135)) – Open PR that captures screenshots after state‑changing actions, enhancing chat client UX.
- **Channel activity log visibility** ([PR #1093](https://github.com/moltis-org/moltis/pull/1093)) – Adds per‑account/channel/user `activity_log` settings. Open and awaiting merge.
- **Context command for chat turns** ([PR #1124](https://github.com/moltis-org/moltis/pull/1124)) – Enables dynamic runtime context injection per turn; still under review.

The merged **GPT-5.6 support** signals proactive model compatibility. The next minor release may include the browser screenshot and context command features if they pass review.

## User Feedback Summary
- **Pain points**: MCP OAuth with Notion/Linear (now fixed); local model incompatibility (null params, stringified scalars) – addressed in recent merges. The “main” session deletion block could frustrate power users.
- **Use cases**: Heavy reliance on **MCP servers** (Notion, Linear) and **local small models** (Gemma 4, oMLX) indicating a diverse user base balancing cloud and local deployments.
- **Satisfaction**: Rapid bug fixes (e.g., OAuth, panic, parameter coercion) demonstrate responsive maintenance.

## Backlog Watch
- **[Issue #1102](https://github.com/moltis-org/moltis/issues/1102)** – Open since June 4, no maintainer comment despite community clarity note. Requires a decision on licensing/integration path.
- **[Issue #1132](https://github.com/moltis-org/moltis/issues/1132)** – Open since June 18; no assignee. A proposed fix or workaround would help users managing sessions.
- **[PR #1093](https://github.com/moltis-org/moltis/pull/1093)** – Open since June 3 with no comments or reviews. Activity log visibility seems well‑specified; maintainer review is overdue.
- **[PR #1124](https://github.com/moltis-org/moltis/pull/1124)** – Open since June 15, no maintainer activity. Context command feature may have unresolved design implications.

These items should be prioritized to avoid community frustration and to unblock merged‑ready features.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest | 2026-07-15

## Today’s Overview

CoPaw (QwenPaw) showed intense activity over the past 24 hours: 50 issues and 50 PRs were updated, with 34 issues closed and 26 PRs merged or closed. A patch release **v2.0.0.post2** was published, addressing several sandbox and tool-guard regressions reported since the v2.0.0 launch. The project remains highly responsive to bug reports, with multiple fix PRs opened on the same day as the related issues. The combination of a large community contributor base and rapid maintainer turnaround indicates a healthy, fast-paced open-source project, though the sheer volume of recent regressions suggests stability is still being hardened.

## Releases

### v2.0.0.post2 (July 14, 2026)
- **Changes:**
  - More sensitive file handling and ability to read global paths (PR #6067)
  - Version bump to 2.0.0.post2
  - Regression tests for runtime/security/install
- **Breaking changes:** None.
- **Migration notes:** This is an in-place upgrade; no configuration changes required.

[Release page](https://github.com/agentscope-ai/QwenPaw/releases/tag/v2.0.0.post2)

## Project Progress

Major merged/closed PRs today that moved development forward:

- **#6091** – Fix MCP driver migration: environment variable references (`${VAR}`) in headers are now properly resolved instead of being sent as literals.
- **#6110** – CI hardening: added concurrency groups to desktop workflows to cancel redundant runs; removed dead `verify` code from early prototypes.
- **#6109** – Governance: `sandbox_enabled` switch is now honored even when `approval_level=OFF`. Stale sandbox state no longer forces a sandbox when disabled.
- **#6112** – Zalo Bot plugin: added as an official channel plugin under the new 2.0 plugin architecture.
- **#5716** – Generic webhook channel (first-time contributor, now closed after design review).

## Community Hot Topics

The most active issues and PRs based on comment count:

- **#2291** (64 comments) – *Help Wanted: Open Tasks — Come Contribute!*  
  A curated list of P0–P2 tasks for community contributors. Still a primary entry point for new contributors.
  [Issue #2291](https://github.com/agentscope-ai/QwenPaw/issues/2291)

- **#5951** (9 comments) – *Windows sandbox recursion + ACE pollution*  
  Detailed root‑cause analysis of pwsh process explosion and file permission corruption. **Closed** in post2 release.
  [Issue #5951](https://github.com/agentscope-ai/QwenPaw/issues/5951)

- **#578** (8 comments) – *OpenClaw‑Inspired Features for Compounding Agent Value*  
  Meta‑issue tracking cumulative value features (daemon, dispatch, context persistence). Community members actively referencing it for design inspiration.
  [Issue #578](https://github.com/agentscope-ai/QwenPaw/issues/578)

- **#6116** (5 comments) – *Doom loop: agent repeatedly triggers same tool call*  
  A critical pattern where the agent loops on identical tool calls, wasting tokens. Multiple upvotes and developer attention.
  [Issue #6116](https://github.com/agentscope-ai/QwenPaw/issues/6116)

- **#4835** (5 comments) – *One invalid job in jobs.json crashes entire workspace*  
  A robustness issue: malformed jobs block startup. **Closed** as designed – validation now reports per‑job errors.
  [Issue #4835](https://github.com/agentscope-ai/QwenPaw/issues/4835)

Underlying needs: Reliability (sandbox, memory search), better error recovery, and community onboarding transparency.

## Bugs & Stability

### Critical (active)

- **#6116** – *Doom loop: repeated tool calls in a single turn.*  
  Agent enters a loop until detected (~6 repetitions). No fix merged yet; developers are examining the gate logic.  
  [Issue #6116](https://github.com/agentscope-ai/QwenPaw/issues/6116)

- **#6121** – *DeepSeek V4 scroll compression breaks message ordering.*  
  After context compression, assistant `tool_calls` are stripped but `tool` response messages remain, causing API 400 errors.  
  **Fix in PR:** #6108 (paired tool results with assistant calls) and #6123 (hard context limits). Both under review.  
  [Issue #6121](https://github.com/agentscope-ai/QwenPaw/issues/6121)

- **#6113** – *Endless memory search loop.*  
  Auto-memory scans synthetic user messages (e.g., loop warnings) and re‑triggers itself.  
  **Fix in PR:** #6120 restricts memory to external user queries only.  
  [Issue #6113](https://github.com/agentscope-ai/QwenPaw/issues/6113)

### High (active)

- **#6100** – *Lost workspace after upgrade 1.1.9 → 2.0.0.post1.*  
  `agent.json` overwritten with empty config, dropping `active_model` and other fields.  
  [Issue #6100](https://github.com/agentscope-ai/QwenPaw/issues/6100)

- **#5964** – *Chat list mapping lost after 2.0.0 upgrade.*  
  Session IDs in `chats` table no longer link to `conversation_history`.  
  [Issue #5964](https://github.com/agentscope-ai/QwenPaw/issues/5964)

### Medium (closed/patched in .post2)

- **#5951** – Windows sandbox recursion (pwsh explosion). Fixed in post2.
- **#5952** – Missing `agentscope.tool._builtin._scripts` causing auto-memory to fail. Fixed in post2.
- **#6023** – Tracking issue for sandbox & tool‑guard overhaul. Closed after post2 release.

### Low (closed)

- **#6077** – Context compression broke DeepSeek message ordering (duplicate of #6089/#6121). Fixed.
- **#6097** – Desktop frozen build missing `_scripts` subpackage. Fixed in post2.

**Overall stability:** The post2 release addresses multiple sandbox and import‑related crashes, but the doom loop and DeepSeek compression issues remain open. Fix PRs are under active review.

## Feature Requests & Roadmap Signals

Highest‑demand requests from the community:

- **Per‑session model overrides** (PR #5992) – allows a single agent to use different LLMs per conversation. Currently under review; likely to land in next minor release.
- **Interrupt/abort agent execution** (issue #4964) – user sends a new message to stop ongoing tool calls. Very popular request. No merged PR yet, but #6087 proposes a real‑time injection mechanism.
- **CIDR whitelist for trusted hosts** (#6048) – enterprise security requirement.
- **Separate tool call display per channel** (#5976) – users want to truncate long results in chat.
- **Support for Galaxy Kylin OS** (#6125) – Chinese government enterprise demand.
- **Generic webhook channel** (PR #5716, now merged) – provides low‑friction integration for external systems.

**Roadmap prediction:** Per‑session overrides and the interrupt feature are most likely to appear in v2.1.0. The webhook and Zalo channels broaden platform support.

## User Feedback Summary

**Common pain points (high frequency):**

- **Sandbox friction:** Approval dialogs still appear on unsandboxed hosts (#5984); Windows sandbox caused system‑wide slowdowns (#5951, #5829).
- **Upgrade pain:** Lost workspace config (#6100), broken chat mapping (#5964), and missing tool configuration (#6105).
- **DeepSeek incompatibility:** Repeated 400 errors after context compression (#6121, #6077, #6070).
- **Agent looping:** Doom loop (#6116) and auto‑memory search storms (#6113) waste API calls.
- **Channel routing:** Approval requests sent to wrong channel (desktop vs. DingTalk) (#6020).

**Positive signals:**
- Users appreciate the rapid bug‑fix cycle (post2 release within days of major reports).
- Community contributors are active: two first‑time contributor PRs merged (#5716 webhook, #6112 Zalo).
- The “Help Wanted” issue (#2291) remains a popular onboarding tool.

**Satisfaction vs. Dissatisfaction:** High engagement indicates strong interest, but the v2.0.0 release introduced regressions that have caused frustration. The project’s fast patching is rebuilding trust.

## Backlog Watch

No critical issues with maintainer silence were identified. All major bugs have at least a response or a fix PR within 24 hours. The following items may deserve prioritization:

- **#4964** (interrupt agent) – closed as duplicate of #6087, but the solution is not yet merged. Long‑requested feature.
- **#6048** (CIDR whitelist) – opened July 13, no maintainer comment yet. Enterprise feature with clear demand.
- **#6125** (Galaxy Kylin support) – opened today; no response yet. Likely low priority but important for government deployments.

The maintainer team appears highly responsive – no stale issues linger beyond a few days. The backlog is effectively zero for critical items.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

## ZeroClaw Project Digest — 2026-07-15

### 1. Today’s Overview

ZeroClaw is in an **intense development cycle** with 26 issues and 50 pull requests updated in the last 24 hours. Activity is concentrated on the **Standard Operating Procedure (SOP) subsystem**, **memory architecture**, **security hardening**, and **observability**. Six bugs were closed—most related to SOP audit and cron trigger gaps—but 20 issues remain open, many with `priority:p1` or `risk:high`. A large batch of stacked feature PRs (approval broker, goal controller, memory rerank) suggests the project is preparing a significant milestone, likely **v0.8.3** (tracked in #7320). No new releases were cut today.

### 2. Releases

**No releases** in the last 24 hours.

### 3. Project Progress

Two pull requests were merged or closed today (details not shown), and **six issues were closed**, indicating that several bug fixes landed:

- **#8678** – `advance_step` bypassed approval gates via `sop_advance` (fixed and closed).  
  [https://github.com/zeroclaw-labs/zeroclaw/issues/8678](https://github.com/zeroclaw-labs/zeroclaw/issues/8678)

- **#8631** – Headless deterministic SOP steps recorded as completed without executing (fixed).  
  [https://github.com/zeroclaw-labs/zeroclaw/issues/8631](https://github.com/zeroclaw-labs/zeroclaw/issues/8631)

- **#8695** – Cron jobs recalled memory even when `uses_memory = false` (fixed).  
  [https://github.com/zeroclaw-labs/zeroclaw/issues/8695](https://github.com/zeroclaw-labs/zeroclaw/issues/8695)

- **#6689** – Production SOP audit silent no-op: documented memory keys never written (fixed).  
  [https://github.com/zeroclaw-labs/zeroclaw/issues/6689](https://github.com/zeroclaw-labs/zeroclaw/issues/6689)

- **#8413** – Channel-filesystem SOP event source (feature, closed).  
  [https://github.com/zeroclaw-labs/zeroclaw/issues/8413](https://github.com/zeroclaw-labs/zeroclaw/issues/8413)

- **#6686** – SOP cron triggers had no production caller (fixed).  
  [https://github.com/zeroclaw-labs/zeroclaw/issues/6686](https://github.com/zeroclaw-labs/zeroclaw/issues/6686)

**Notable feature PRs that remain open** include the goal command admission stack (#8689, #8688, #8687, #8746, #8996), the memory audit trail and rerank PRs (#8893, #8895, #8898), the SOP approval broker (#8880), and the OpenAI-compatible gateway endpoint (#8486). These are large (size:XL) and indicate that significant new capabilities are being integrated.

### 4. Community Hot Topics

The most active discussions (by comment count) reveal deep concerns about security and observability:

1. **#5982 – Per-sender RBAC** (10 comments)  
   *Users want optional role-based access control for multi-tenant deployments. The underlying need is to isolate workspaces, tool sets, and rate limits per user class (customers, operators, developers).*  
   [https://github.com/zeroclaw-labs/zeroclaw/issues/5982](https://github.com/zeroclaw-labs/zeroclaw/issues/5982)

2. **#8973 – Landlock blocks shell access on Fedora** (4 comments)  
   *A sandboxing regression that breaks the shell tool on Fedora. Users are asking for a quick fix; the issue is `priority:p1, risk:high`.*  
   [https://github.com/zeroclaw-labs/zeroclaw/issues/8973](https://github.com/zeroclaw-labs/zeroclaw/issues/8973)

3. **#8933 – Cross-turn conversation correlation in OTel** (3 comments)  
   *An RFC to carry an opaque conversation ID through turn-lifecycle events. The community wants better observability for multi-turn interactions.*  
   [https://github.com/zeroclaw-labs/zeroclaw/issues/8933](https://github.com/zeroclaw-labs/zeroclaw/issues/8933)

4. **#9048 – Separate conversation history from agent-curated long-term memory** (3 comments)  
   *Users report that session history and long-term memory are still mixed in code paths, causing confusion. The RFC proposes a clean separation.*  
   [https://github.com/zeroclaw-labs/zeroclaw/issues/9048](https://github.com/zeroclaw-labs/zeroclaw/issues/9048)

### 5. Bugs & Stability

New or recently updated bugs are ranked by severity:

| ID | Severity | Issue | Status | Fix PR? |
|----|----------|-------|--------|---------|
| #8973 | S2 – degraded behavior | Landlock blocks shell on Fedora (`/dev/null` inaccessible) | **open** | None visible |
| #8675 | S1 – workflow blocked | Malformed tool-call arguments cause provider 400 → empty reply | **open** | None visible |
| #8563 | S1 – workflow blocked | SOPs not available through web dashboard chat | **open** | None visible |
| #7947 | **S0 – data loss / security risk** | `execute_pipeline` bypasses per-agent tool gating (confused deputy) | **in-progress** | PR not yet linked |
| #9052 | S1 – workflow blocked | `channel-line` omitted from `channels-full` and CI coverage | **open** | None visible |
| #9001 | S2 – degraded behavior | Provider turn failures bury cause-specific diagnostics under generic retry | **open** | None visible |
| #9078 | S2 – degraded behavior | Serial transport remains desynchronized after non-matching response ID | **open** (today) | None visible |

The **confused deputy bug** (#7947) is the most critical open security issue. It allows a pipeline to execute sub-tools without respecting the agent’s tool access policy. No fix PR has been identified yet.

### 6. Feature Requests & Roadmap Signals

The following enhancements represent strong user demand and are likely candidates for the **v0.8.3** release (tracked in #7320):

- **Per-sender RBAC** (#5982) – multi-tenant security, already accepted.
- **Pre-hook skip gates for cron/SOP triggers** (#5607) – lightweight precondition scripts, blocked since April.
- **SOP routing: false `when` should fall through to next step** (#8719) – enables multi-phase SOPs.
- **SOP authoring surface** (#8736) – node-graph editor, fan-in, validation engine.
- **Centralized SOP ingress adapters** (#8581) – uniform source-to-event conversion.
- **Cross-turn OTel correlation** (#8933) – RFC accepted.
- **Separate conversation history from long-term memory** (#9048) – RFC just opened.
- **Active runtime context in ZeroCode Dashboard** (#8383) – UX improvement.
- **CI coverage for firmware protocol crate** (#9079) – quality gate request.

**Predictions for next release:** The SOP approval broker (#8880), memory typed-facts (#8900), and goal command admission (#8687–#8689) are large, high-risk features that are likely blocked on reviews rather than design. They could ship in v0.8.3 if merged soon. The RBAC enhancement (#5982) is a long-standing request that may appear in a subsequent minor release.

### 7. User Feedback Summary

**Pain points** expressed through issues and PR comments:

- **Security gaps**: Users are frustrated that `execute_pipeline` bypasses agent-level tool access (#7947) and that SOP approval gates can be circumvented (#8678, now fixed).
- **Sandboxing incompatibility**: The Landlock issue on Fedora (#8973) is blocking real-world deployments on Linux distributions that enable Landlock by default.
- **Diagnostics and observability**: Provider failure envelopes (#9001) and missing conversation correlation (#8933) make debugging multi-turn workflows difficult.
- **Documentation deficits**: Lack of SOP syntax examples (#8587) and SOP connectivity docs (#6685) are repeatedly mentioned.
- **Memory mixing**: Users want session history and curated long-term memory to be distinct (#9048); the current merge causes confusion.
- **CI and coverage gaps**: `channel-line` is missing from CI (#9052), leading to regressions.

**Satisfaction indicators**: The high number of PRs (50) suggests an active and engaged contributor community. The SOP milestone tracker (#8288) shows a structured roadmap, which users appreciate.

### 8. Backlog Watch

Issues and PRs that have been open for a long time without maintainer response or progress:

- **#5982** (per-sender RBAC) – opened Apr 22, 10 comments, no maintainer reply.  
  [https://github.com/zeroclaw-labs/zeroclaw/issues/5982](https://github.com/zeroclaw-labs/zeroclaw/issues/5982)

- **#5607** (pre-hook skip gates) – opened Apr 10, status `blocked`, 2 comments.  
  [https://github.com/zeroclaw-labs/zeroclaw/issues/5607](https://github.com/zeroclaw-labs/zeroclaw/issues/5607)

- **#6685** (SOP HTTP fan-in not wired) – opened May 15, 0 comments, no maintainer action.  
  [https://github.com/zeroclaw-labs/zeroclaw/issues/6685](https://github.com/zeroclaw-labs/zeroclaw/issues/6685)

- **#7947** (confused deputy) – opened Jun 18, status `in-progress` but no linked PR or assignee update.  
  [https://github.com/zeroclaw-labs/zeroclaw/issues/7947](https://github.com/zeroclaw-labs/zeroclaw/issues/7947)

- **PRs with `needs-author-action`** – several large PRs (#8784, #8353, #8324, #8447, #8996, #8486, #8905) have been waiting weeks for author revisions. These are blocking the milestone and need maintainer attention to expedite or close.

- **#9079** (firmware CI coverage) – opened today, but the underlying `firmware/` crate is outside the workspace and likely has been ignored for months.  
  [https://github.com/zeroclaw-labs/zeroclaw/issues/9079](https://github.com/zeroclaw-labs/zeroclaw/issues/9079)

**Overall project health** is strong but under pressure. The project is delivering bug fixes and closing old tickets, but the volume of open security bugs and waiting PRs suggests that the core team may be bottlenecked. The community is contributing high-quality RFCs and large features, which bodes well for future releases if maintainer bandwidth scales accordingly.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/boom7sss/agents-radar).*