# OpenClaw Ecosystem Digest 2026-07-13

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-07-13 03:35 UTC

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

# OpenClaw Project Digest — 2026-07-13

## 1. Today's Overview

OpenClaw is in a period of extremely high activity, with **500 issues and 500 PRs updated in the last 24 hours** — signaling a major push across core reliability, security hardening, and release readiness. The team shipped **v2026.7.1-beta.6** today, introducing Featherless, Claude Sonnet 5, Mythos 5, Meta Muse Spark 1.1, and the new ClawRouter, while making GPT-5.6 the new-setup default. Activity skews heavily toward critical bug fixes (P0/P1 memory leaks, database corruption, message-loss regressions) and long-standing feature requests nearing product decisions. The project appears to be in a stabilization sprint ahead of a stable release, with maintainers actively reviewing high-severity issues and merging refactoring PRs at pace.

## 2. Releases

### v2026.7.1-beta.6 (released today)

**Highlights:**
- **New providers & models:** Featherless, Claude Sonnet 5, Mythos 5, Meta Muse Spark 1.1, and ClawRouter added
- **Default model change:** GPT-5.6 is now the new-setup default
- **Thinking modes:** `/think ultra` enabled for Sol and Terra; `max` for Luna
- **Z.AI integration:** Honors `max` thinking mode
- **OAuth model refresh:** Model availability is now refreshed after OAuth flows

**Migration Notes:**
- Users on earlier beta channels should update their model configs if they wish to use the new GPT-5.6 default.
- Existing setups are not automatically migrated; `openclaw setup` on fresh installs will pick the new defaults.
- No breaking changes or config-incompatibility warnings are noted in the release.

## 3. Project Progress

**Merged/Closed PRs today (230 total):** Highlights include:

- **[CLOSED]** `#105906` — `refactor(ui): fold sidebar More section into a popup menu` — UX improvement to streamline sidebar navigation, reducing visual clutter.
- **[CLOSED]** `#105808` — `refactor(config): retire flat and scalar streaming keys from matrix, feishu, and qqbot` — Cleans up legacy streaming configuration after `#105709`, improving plugin schema consistency.
- **Key active PRs (not yet merged but represent in-progress work):**
  - `#105953` — `fix(config): preserve nested defaults across deep merges` (author: steipete) — Prevents nested provider retry defaults from being discarded by narrow overrides. Closes `#105932`.
  - `#105947` — `refactor: use native abort signal composition` — Drops private abort-signal combinators now that Node 22.19+ provides `AbortSignal.any`, reducing maintenance surface across Discord, Signal, and Slack channels.
  - `#105919` — `fix(ci): repair TypeScript LOC baseline drift` — Addresses CI baseline misalignment affecting concurrent PRs.
  - `#105948` — `fix(release): avoid full revalidation after changelog-only cuts` — Saves maintainer time on small release updates.
  - `#103984` — `fix(compaction): count CJK text in token estimates` — Critical fix for CJK sessions where compaction retains far more text than intended. Closes `#103930`. Ready for maintainer review.
  - `#104893` — `fix(discord): retry stale preview cleanup after final delivery` — Prevents stale previews persisting after partial streaming. Ready for maintainer review.
  - `#105901` — `fix(discord): hydrate missing reply references` — Fixes Discord reply context loss when REST responses omit nested `referenced_message`. Closes `#105862`.
  - `#105903` — `fix(cron): batch pending-media snapshot in session reaper to avoid O(S×T) loop` — Eliminates a CPU bottleneck in cron session reaper. Closes `#105694`.
  - `#105944` — `refactor: use semver package for version ordering` — Standardizes version comparison across update and plugin-install workflows. Closes `#105938`.
  - `#105868` — `fix(reply): strip newline/whitespace-separated leading NO_REPLY sentinel` — Ensures `NO_REPLY` followed by actual content no longer prevents reply. Closes `#103735`.

## 4. Community Hot Topics

### Most Active Issues (by comment count)

| Issue | Title | Comments | 👎/👍 | Tags |
|-------|-------|----------|------|------|
| [#75](https://github.com/openclaw/openclaw/issues/75) | Linux/Windows Clawdbot Apps | **110** | 👍81 | P2, enhancement, help wanted |
| [#99241](https://github.com/openclaw/openclaw/issues/99241) | Tool outputs render as image attachments → unreadable to agent | 22 | 👍2 | P1, message-loss |
| [#91588](https://github.com/openclaw/openclaw/issues/91588) | Critical: Gateway Memory Leak (350MB → 15.5GB) | 19 | 👍1 | **P0**, crash-loop |
| [#7707](https://github.com/openclaw/openclaw/issues/7707) | Memory Trust Tagging by Source | 17 | 👍0 | P2, security |
| [#65161](https://github.com/openclaw/openclaw/issues/65161) | Heartbeat isolated mode regressions | 16 (closed) | 👍1 | P2, stale |
| [#10659](https://github.com/openclaw/openclaw/issues/10659) | Masked Secrets — prevent agent from accessing raw API keys | 14 | 👍4 | P1, security |
| [#104721](https://github.com/openclaw/openclaw/issues/104721) | *All* tool results return "(see attached image)" literal string | 12 | 👍1 | **P0**, message-loss, UX release-blocker |

**Analysis of underlying needs:**

1. **Desktop platform parity (Issue #75, 110 comments, 81 👍):** The most enthusiastically supported community request. Users want Linux and Windows GUI apps mirroring macOS. This is clearly a top adoption barrier for non-macOS users.

2. **Tool output visibility (Issues #99241, #104721):** A systemic problem where tool results collapse into image placeholders, making the agent blind to its own outputs. Multiple P1/P0 issues with "message-loss" and "UX release-blocker" tags suggest this is one of the most urgent reliability regressions. The community is frustrated because this renders tool-heavy workflows unusable.

3. **Security hardening (Issues #7707, #10659):** Users are increasingly concerned about memory poisoning and credential leakage. The "Masked Secrets" feature (#10659) has strong support (4 👍), indicating real-world fear of prompt injection extracting API keys.

4. **Gateway stability (Issue #91588, P0):** A critical memory leak causing OOM kills every 2-3 days is a showstopper for production deployments. The 19 comments suggest multiple users are hitting this.

### Most Active PRs

| PR | Title | Status | Tags |
|----|-------|--------|------|
| [#105953](https://github.com/openclaw/openclaw/pull/105953) | fix(config): preserve nested defaults across deep merges | Open | steipete, closes #105932 |
| [#103984](https://github.com/openclaw/openclaw/pull/103984) | fix(compaction): count CJK text in token estimates | Open | P2, ready for maintainer |
| [#104893](https://github.com/openclaw/openclaw/pull/104893) | fix(discord): retry stale preview cleanup after final delivery | Open | P2, ready for maintainer |
| [#105901](https://github.com/openclaw/openclaw/pull/105901) | fix(discord): hydrate missing reply references | Open | P1, needs proof |

## 5. Bugs & Stability

### Critical (P0) Issues

| Issue | Summary | Status | Fix PR? |
|-------|---------|--------|---------|
| [#91588](https://github.com/openclaw/openclaw/issues/91588) | **Gateway Memory Leak** — RSS grows 350MB→15.5GB over days, causing repeated OOM crashes and `launchd-handoff` restart cycles. | Open · "platinum hermit" rating | No linked fix PR |
| [#101290](https://github.com/openclaw/openclaw/issues/101290) | **CLI startup preflight corrupts live state DB** — `openclaw.sqlite` corrupted 4 times in 5 days while gateway running; health-check commands cause "database disk image is malformed". | Open · "platinum hermit" | No linked fix PR |
| [#104721](https://github.com/openclaw/openclaw/issues/104721) | **All tool results return "(see attached image)" literal string** — Not just display bug; actual data is replaced. Completely breaks file reads and tool workflows. | Open · "platinum hermit" · UX release-blocker | No linked fix PR |

### High Severity (P1) Issues

| Issue | Summary | Status |
|-------|---------|--------|
| [#99241](https://github.com/openclaw/openclaw/issues/99241) | Tool outputs sometimes render as image attachments → agent cannot read original stdout/stderr. "platinum hermit" | Open · needs product decision |
| [#87744](https://github.com/openclaw/openclaw/issues/87744) | Codex-backed Telegram turns repeatedly timeout waiting for turn/completed. Sessions fail before delivering answer. | Open · needs live repro |
| [#91009](https://github.com/openclaw/openclaw/issues/91009) | Codex PreToolUse hook relay spawns CPU-bound `openclaw-hooks` processes, stalling gateway RPC. | Open · source repro + linked PR |
| [#102020](https://github.com/openclaw/openclaw/issues/102020) | Second message in session fails with "reply session initialization conflicted" (cross-channel, position-dependent). | Open |
| [#53408](https://github.com/openclaw/openclaw/issues/53408) | Write/exec tool parameters silently dropped after long conversations (empty arguments object). | Open · needs product decision |
| [#78562](https://github.com/openclaw/openclaw/issues/78562) | Repeated tool-loop context overflows cause successive auto-compactions after successful compaction. | Open · needs product decision |
| [#102400](https://github.com/openclaw/openclaw/issues/102400) | Reply-session init conflict silently dropped on Slack/webchat/heartbeat; Telegram treats as retryable. | Open · needs product decision |

### Regressions & Stability Notes

- Multiple "tool outputs as image" bugs (#99241, #104721) suggest a root-cause regression in how ANSI/tool output is handled in long-running sessions.
- The database corruption issue (#101290) is particularly concerning — vanilla SQLite control does not reproduce, indicating OpenClaw-specific interaction causing corruption.
- Heartbeat mode (#65161, now closed as stale) may have deeper unresolved issues given related reply-session init conflicts (#102400).

## 6. Feature Requests & Roadmap Signals

### Top User-Requested Features (by engagement)

| Issue | Title | Comments/Reactions | Likelihood for Next Version |
|-------|-------|--------------------|----------------------------|
| [#75](https://github.com/openclaw/openclaw/issues/75) | Linux/Windows Clawdbot Apps | 110 comments, 81 👍 | Medium — high community demand but requires significant UI/porting work |
| [#7707](https://github.com/openclaw/openclaw/issues/7707) | Memory Trust Tagging by Source | 17 comments, 0 👍 | Low — no linked PR, needs product decision |
| [#10659](https://github.com/openclaw/openclaw/issues/10659) | Masked Secrets — prevent agent from accessing raw API keys | 14 comments, 4 👍 | Medium — security-critical, multiple linked security-review tags |
| [#7722](https://github.com/openclaw/openclaw/issues/7722) | Filesystem Sandboxing Config (tools.fileAccess) | 10 comments, 4 👍 | Low — needs product decision |
| [#14785](https://github.com/openclaw/openclaw/issues/14785) | Reduce tool schema token overhead (~3,500 tok/session) | 9 comments, 0 👍 | Medium — token efficiency gains matter for cost |
| [#16670](https://github.com/openclaw/openclaw/issues/16670) | Onboarding Wizard should include Memory/Embedding setup | 9 comments, 1 👍 | **High** — fix-shape-clear, easy UX win, needs maintainer review |
| [#6615](https://github.com/openclaw/openclaw/issues/6615) | Add denylist support for exec-approvals | 7 comments, 7 👍 | **High** — strong 👍 ratio, clear security use case |
| [#10118](https://github.com/openclaw/openclaw/issues/10118) | TUI: Support Shift+Enter for newline | 6 comments, 4 👍 | Medium — small UI change, community pain point |
| [#14438](https://github.com/openclaw/openclaw/issues/14438) | Plugin hot-reload without container restart | 5 comments, 4 👍 | Low — P3, requires jiti cache invalidation work |

### Predictions for Next Version

- **Likely included in v2026.7 stable:** Memory/Embedding onboarding step (#16670), exec-approval denylist (#6615), CJK compaction fix (#103984), and Discord reply hydration (#105901) — all have ready-for-review PRs or are "fix-shape-clear."
- **Possible but less certain:** Workspaces Living Answers + action forms (#101899, already in PR), masked secrets (#10659 — high security value but still needs product decision), and TUI Shift+Enter (#10118 — small but already triaged).
- **Unlikely:** Linux/Windows desktop apps (#75), full memory trust tagging (#7707) — both require substantial architectural work and remain in "needs product decision."

## 7. User Feedback Summary

### Pain Points

1. **Tool output invisibility is the #1 user-facing bug:** Multiple reports of tools returning "(see attached image)" instead of real content (#99241, #104721). Users describe it as "completely broken" — the agent cannot see its own tool results, making advanced workflows impossible. This is a P0 UX release-blocker.

2. **Session reliability degradation over time:** Users report tool parameters silently dropping after ~15+ turns (#53408), context overflow loops after compaction (#78562), and reply-session initialization conflicts on second messages (#102020, #102400). The pattern suggests cumulative state management problems in long sessions.

3. **Gateway stability concerns:** The 350MB→15.5GB memory leak (#91588) and database corruption (#101290) make production deployments fragile. Users on single-host macOS installs are especially affected.

4. **Security anxiety:** Users explicitly ask for mechanisms to prevent prompt injection from accessing API keys (#10659) and to tag memory by trust level (#7707). The fear of credential theft via web pages or third-party skills is real.

### Satisfaction Signals

- The community is highly engaged — 110 comments on the desktop app request show strong enthusiasm.
- Quick turnaround on PRs: `steipete` and other maintainers are actively merging and reviewing, suggesting responsive maintainership.
- New release today with model/provider additions indicates the project continues to expand capabilities even during stabilization.

### Dissatisfaction Signals

- Several P1/P0 bugs have "needs product decision" or "needs live repro" tags, meaning they've been reported for days to weeks without resolution (e.g., #53408 since March 24).
- Issue #65161 (heartbeat regressions) was closed as stale despite 16 comments, suggesting the resolution may not have fully satisfied all reporters.

## 8. Backlog Watch

### Stale but Important Issues (no activity in 30+ days, still open)

| Issue | Title | Last Updated | Tags | Risk |
|-------|-------|--------------|------|------|
| [#75](https://github.com/openclaw/openclaw/issues/75) | Linux/Windows Clawdbot Apps | 2026-07-13 (updated today) | P2, help wanted | High community disappointment if ignored |
| [#7707](https://github.com/openclaw/openclaw/issues/7707) | Memory Trust Tagging by Source | 2026-07-13 (updated today) | P2, needs product decision | Security |
| [#7722](https://github.com/openclaw/openclaw/issues/7722) | Filesystem Sandboxing Config | 2026-07-13 (updated today) | P2, needs product decision | Security |
| [#6615](https://github.com/openclaw/openclaw/issues/6615) | Add denylist support for exec-approvals | 2026-07-13 (updated today) | P2, needs product decision | Security |
| [#12855](https://github.com/openclaw/openclaw/issues/12855) | Built-in auto-update with configuration | 2026-07-13 (updated today) | P2, needs product decision | Operations gap |

**Note:** Many P2 issues are being updated regularly (even daily) with the `clawsweeper` workflow tags, suggesting automated triage is keeping them visible — but actual product decisions are blocked.

### Issues Needing Maintainer Decision

| Issue | Blocked On | Impact |
|-------|-----------|--------|
| [#99241](https://github.com/openclaw/openclaw/issues/99241) (P1 tool output as image) | needs-product-decision, needs-live-repro | Message loss |
| [#53408](https://github.com/openclaw/openclaw/issues/53408) (P1 dropped parameters) | needs-product-decision, needs-live-repro | Message loss |
| [#78562](https://github.com/openclaw/openclaw/issues/78562) (P1 compaction loops) | needs-product-decision | Session reliability |
| [#102400](https://github.com/openclaw/openclaw/issues/102400) (P1 reply-session conflicts) | needs-product-decision | Message loss |
| [#39476](https://github.com/openclaw/openclaw/issues/39476) (A2A duplicate messages) | needs-live-repro | Cross-agent reliability |

### PRs Needing Maintainer Review

| PR | Title | Waiting Since | Status |
|----|-------|---------------|--------|
| [#103984](https://github.com/openclaw/openclaw/pull/103984) | fix(compaction): count CJK text | 2026-07-10 | 👀 ready for maintainer look |
| [#104893](https://github.com/openclaw/openclaw/pull/104893) | fix(discord): retry stale preview cleanup | 2026-07-12 | 👀 ready for maintainer look |
| [#99004](https://github.com/openclaw/openclaw/pull/99004) | docs(irc): document missing fields | 2026-07-02 | 👀 ready for maintainer look |
| [#99005](https://github.com/openclaw/openclaw/pull/99005) | docs(line): document missing fields | 2026-07-02 | 👀 ready for maintainer look |
| [#105491](https://github.com/openclaw/openclaw/pull/105491) | fix(i18n): Chinese translations for agents | 2026-07-12 | 👀 ready for maintainer look |

---

*Digest generated from data collected on 2026-07-13. Activity figures reflect the 24-hour window ending at approximately 2026-07-13T23:59:59Z.*

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: AI Agent Open-Source Ecosystem
**Date:** 2026-07-13 | **Analyst:** Senior Ecosystem Analyst

---

## 1. Ecosystem Overview

The personal AI assistant and agent open-source ecosystem is experiencing a **divergent maturation phase**: established reference implementations (OpenClaw, Hermes Agent) are pushing toward stable releases through aggressive stabilization sprints, while newer entrants (CoPaw, ZeroClaw) are grappling with post-major-release regressions that threaten user trust. A clear **platform gap** exists between macOS-first projects and the growing demand for Windows/Linux parity, and **security hardening** (masked secrets, credential pools, sandboxing) has emerged as a cross-cutting requirement rather than a niche concern. The ecosystem is **fragmented by channel support**—Discord, Slack, Telegram, Matrix, and proprietary enterprise platforms each have dedicated but incomplete integrations—yet there is no dominant universal messaging abstraction. Most critically, **tool output visibility** (the agent's ability to read its own tool results) has become the single largest reliability failure mode, affecting four of the seven actively developed projects simultaneously.

---

## 2. Activity Comparison (Last 24 Hours)

| Project | Issues Updated | PRs Updated | Release Today | Health Score | Primary Phase |
|---------|---------------|-------------|---------------|--------------|---------------|
| **OpenClaw** | 500 | 500 | ✅ v2026.7.1-beta.6 | 🟡 **Stable** (P0 bugs active) | Stabilization sprint |
| **Hermes Agent** | 50 | 50 | ❌ | 🟢 **Healthy** | Rapid maintenance |
| **ZeroClaw** | 12 | 50 | ❌ | 🟡 **Robust** (high backlog) | Active development |
| **CoPaw** | 32 | 16 | ❌ | 🔴 **Critical** (v2.0 regression crisis) | Firefighting |
| **LobsterAI** | 1 | 14 | ❌ | 🟢 **Healthy** | Feature refinement |
| **NullClaw** | 0 | 4 | ❌ | 🟢 **Healthy** | Stabilization |
| **NanoBot** | 4 | 10 | ❌ | 🟡 **Stable** | Active maintenance |
| **PicoClaw** | 5 | 2 | ❌ | 🟡 **Stable** | Moderate maintenance |
| **NanoClaw** | 3 | 14 | ❌ | 🟡 **Stable** | Feature development |
| **IronClaw** | 10 | 50 | ❌ | 🟡 **Stable** (CI fragility) | Feature train |
| **TinyClaw** | 0 | 0 | ❌ | ⚪ **Dormant** | No activity |
| **Moltis** | 0 | 0 | ❌ | ⚪ **Dormant** | No activity |
| **ZeptoClaw** | 0 | 0 | ❌ | ⚪ **Dormant** | No activity |

**Health Score Definitions:**
- 🟢 **Healthy:** Few critical bugs, active merges, responsive maintainers
- 🟡 **Stable/Robust:** Active development with some P0/P1 bugs or CI fragility
- 🔴 **Critical:** Post-release regressions blocking core workflows, community frustration high
- ⚪ **Dormant:** No observable activity in reporting window

---

## 3. OpenClaw's Position in the Ecosystem

### Advantages Over Peers

1. **Scale of Community Engagement:** OpenClaw's 500 issues and 500 PRs updated in 24 hours is an order of magnitude larger than any peer (next closest: Hermes Agent at 50). The [#75 desktop apps request](https://github.com/openclaw/openclaw/issues/75) alone has 110 comments and 81 upvotes—more engagement than some entire projects.

2. **Model & Provider Breadth:** OpenClaw shipped 5 new providers/models (Featherless, Claude Sonnet 5, Mythos 5, Meta Muse Spark 1.1, ClawRouter) in a single beta release. It is the only project with a dedicated routing layer (ClawRouter), positioning it as the most **interoperable** reference implementation.

3. **Release Cadence & Maturity:** v2026.7.1-beta.6 is a structured beta with migration notes. No other project shipped a release today. OpenClaw is the farthest along the path to a stable, production-grade release.

4. **Security-First Architecture:** OpenClaw has dedicated issue tracks for masked secrets (#10659, 14 comments, 4👍), memory trust tagging (#7707), and filesystem sandboxing (#7722)—all with active maintainer triage. This is more structured than ad-hoc security fixes seen in other projects.

### Technical Approach Differences

- **Event-Driven Architecture:** OpenClaw's ClawRouter suggests a message-bus approach to multi-channel delivery, whereas ZeroClaw and Hermes tend toward per-channel gateway processes. This may give OpenClaw better cross-channel consistency but adds routing complexity.
- **Heavy Refactoring In-Flight:** OpenClaw is actively retiring legacy streaming keys, migrating to native `AbortSignal.any`, and standardizing version ordering with semver—indicating a sustained codebase hygiene investment.
- **MacOS-Centric with Growing Demand:** The #75 issue reveals a platform gap: OpenClaw's GUI is macOS-only, and the community is loudly requesting Windows/Linux. This is a strategic vulnerability compared to NullClaw, which appears platform-agnostic.

### Community Size Comparison

| Metric | OpenClaw | Next Closest (Hermes/ZeroClaw) |
|--------|----------|--------------------------------|
| Daily PR churn | ~500 | ~50 |
| Daily issue churn | ~500 | ~50 |
| Top issue engagement | 110 comments, 81👍 | ~12 comments, 6👍 |
| Maintainer responsiveness | Minutes to hours | Hours to days |
| Community contributors | Multiple active (steipete, etc.) | Fewer external contributors |

OpenClaw's community is **roughly 10x larger** than any other project in the ecosystem by activity metrics.

---

## 4. Shared Technical Focus Areas (Cross-Project Requirements)

The following requirements emerged across **three or more** projects in today's data:

| Requirement | Affected Projects | Specific Needs |
|-------------|-------------------|----------------|
| **Tool Output Visibility** | OpenClaw, CoPaw, ZeroClaw, Hermes Agent | Agent cannot read own tool results (image attachments, literal strings, orphan messages). **Systemic reliability failure.** |
| **Security Hardening** | OpenClaw, ZeroClaw, Hermes Agent, CoPaw | Masked secrets, credential pools, trust tagging, sandbox approval whitelists. Cross-cutting concern. |
| **Cross-Platform Parity** | OpenClaw (#75), PicoClaw (#3182 Android), CoPaw (#5951 Windows) | macOS-first projects facing Windows/Linux/Android gaps. Dual desktop and mobile demand. |
| **Session State Stability** | OpenClaw, ZeroClaw, Hermes Agent, CoPaw, NullClaw | Memory leaks, context budget overflow, database corruption, orphan tool calls, reply conflicts. |
| **Channel-Specific Reliability** | OpenClaw (Discord), NullClaw (Discord, Teams), Hermes (macOS gateway), PicoClaw (Matrix) | Channel-specific bugs: reconnection logic, authentication, message hydration. |
| **Token/Context Optimization** | OpenClaw (CJK compaction), ZeroClaw (default budget overflow), Hermes (prompt cache collapse) | Agent performance degrades over long sessions; token estimation is inconsistent across languages. |

---

## 5. Differentiation Analysis

| Dimension | OpenClaw | Hermes Agent | ZeroClaw | CoPaw | LobsterAI | NullClaw | NanoBot |
|-----------|----------|--------------|----------|-------|-----------|----------|---------|
| **Target User** | Power users, home lab, multi-model | Developers, enterprise | Developers, automation | Chinese-language enterprise | General desktop users | Lightweight/embedded | Hobbyists, small scale |
| **Primary Channel** | Multiple (Discord, Slack, Telegram) | Multiple | Slack, web dashboard | Feishu (Lark), Console | Desktop GUI | Discord, Teams, Telegram | Discord, WebUI |
| **Architecture** | Router-based (ClawRouter) | Gateway per-channel | Plugin agent loop | Container sandbox | Desktop app + background | Zig-based, lightweight | Python, modular |
| **Distinguishing Feature** | Widest model support + routing | Fastest bug fix cycle | OTel observability | Enterprise sandbox | UI polish, Cowork | Minimal dependencies | Ease of setup |
| **Current Pain Point** | Tool output invisibility | Credential pool drops | Context budget overflow | v2.0 regressions | Multi-agent data isolation | Use-after-free cron | Ollama caching |
| **Language** | TypeScript/Node | TypeScript/Node | TypeScript/Node | Python | TypeScript/Electron | Zig | Python |

### Key Architectural Differences

- **OpenClaw vs. Hermes:** Both TypeScript/Node, but OpenClaw's ClawRouter abstracts channel delivery while Hermes uses per-channel gateway processes. OpenClaw's approach reduces channel duplication but adds routing complexity.
- **ZeroClaw vs. Others:** ZeroClaw's heavy investment in OTel (OpenTelemetry) and dashboard/operator UIs positions it as the most **observability-aware** project—a differentiator for enterprise deployments.
- **CoPaw vs. OpenClaw:** CoPaw's focus on Chinese-language users (Feishu, Qwen models) and container-based sandboxing targets a different regulatory and cultural environment. Its v2.0 crisis highlights the risk of aggressive releases.
- **NullClaw's Zig Architecture:** The only project using Zig—likely smaller binary, lower memory footprint, better for embedded/edge deployments. Its low issue count may reflect a smaller user base rather than maturity.
- **LobsterAI's Desktop Focus:** The only project centered on a native desktop GUI experience. Its "Cowork" feature (multi-agent collaboration) is unique.

---

## 6. Community Momentum & Maturity

### Activity Tiers

**Tier 1: High Velocity (≥50 daily interactions)**
- **OpenClaw** — In stabilization sprint; high community engagement, structured releases, P0 bugs actively tracked. Most mature.
- **Hermes Agent** — Steady firefighting; 50 issues + 50 PRs daily, rapid fix merges, strong maintainer response. Second most active.
- **ZeroClaw** — Heavy feature development (50 PRs) but with high `needs-author-action` blocking (11 of 20 visible PRs). Momentum is strong but bottlenecked.

**Tier 2: Moderate (5-50 daily interactions)**
- **CoPaw** — High emotional engagement (32 issues) but in crisis mode; regression response is reactive rather than planned.
- **IronClaw** — Feature train (extension-runtime) with structural CI fragility slowing progress.
- **LobsterAI** — Steady UI/UX refinement; low bug count suggests maturity, but low issue activity may indicate smaller user base.
- **NanoClaw** — Active development (14 PRs) with clear roadmap signals (guard seam, operator CLI).

**Tier 3: Low (1-5 daily interactions)**
- **NullClaw** — Methodical stabilization; 4 merged PRs with no new bugs. Small but focused.
- **NanoBot** — Moderate (10 PRs, 4 issues); responsive maintainers but limited feature scope.
- **PicoClaw** — Stable with moderate bug reports; Matrix/Android gaps suggest niche adoption.

**Tier 4: Dormant (0 daily interactions)**
- **TinyClaw, Moltis, ZeptoClaw** — No observable activity. May be dead or on long hiatus.

### Iteration vs. Stabilization

| Phase | Projects | Characteristics |
|-------|----------|-----------------|
| **Stabilization** | OpenClaw, NullClaw, Hermes Agent | Merging bug fixes, releasing betas, retiring legacy code. |
| **Feature Development** | ZeroClaw, IronClaw, NanoClaw | Large PRs (extension-runtime, Inkbox, guard seam), high feature churn. |
| **Post-Release Crisis** | CoPaw | Major regressions from v2.0; firefighting, low user trust. |
| **Sustained Maintenance** | NanoBot, PicoClaw, LobsterAI | Regular small fixes, incremental improvements, no major architectural changes. |

---

## 7. Trend Signals for AI Agent Developers

### 1. Tool Output Visibility is the #1 Reliability Gap
Four projects (OpenClaw, CoPaw, ZeroClaw, Hermes) all have bugs where agents cannot see their own tool results. This suggests a **shared architectural blind spot**: the tool→assistant message pipeline is fragile when tool results are large, rendered as images, or processed asynchronously. **Any new agent framework must treat tool output round-tripping as a first-class correctness concern.**

### 2. Security is No Longer Optional
Three projects have active issue tracks for credential masking, trust tagging, and sandboxing. The fear of prompt injection extracting API keys is real and driving feature requests (OpenClaw #10659 with 4👍, ZeroClaw #8984 memory scanning). **Security must be designed into the agent loop, not bolted on.**

### 3. Cross-Platform is a Competitive Moat
OpenClaw's #75 (110 comments, 81👍) and CoPaw's Windows sandbox bug (#5951) prove that **macOS-only is a hard ceiling for adoption**. Projects that deliver Windows/Linux parity (NullClaw's Zig might be naturally cross-platform) will capture users frustrated by the current state.

### 4. Local Model Performance is a Pain Point
NanoBot's Ollama caching issue (#4867, "totally unusable") and ZeroClaw's context budget overflow (#5808) highlight that **local model execution still underperforms** relative to cloud APIs. Agent developers should design for graceful degradation on limited hardware.

### 5. Observability is Emerging as a Differentiator
ZeroClaw's OTel trace correlation (#6641) and IronClaw's token usage and cost tracking (#5976) signal a shift toward **production-grade monitoring**. As agents move from hobby projects to business tools, observability will become table stakes.

### 6. The "Multi-Agent" Pattern is Inevitable
CoPaw's cross-channel session handoff (#5999), LobsterAI's Cowork feature, and Hermes' single-daemon multi-agent (#9514) all point to **multi-agent architectures** as the next frontier. The challenge is data isolation and cross-agent communication.

### 7. Channel Fragmentation Demands Abstraction
No project supports all major channels (Discord, Slack, Telegram, Matrix, Teams, WhatsApp, Web) consistently. **The ecosystem needs a universal channel abstraction layer**—OpenClaw's ClawRouter is the closest attempt, but it's not yet stable.

---

## Summary Recommendations for Technical Decision-Makers

1. **For production deployments today:** OpenClaw (v2026.7.1-beta.6) offers the widest model support and most active bug fixing, but be aware of P0 tool-output-invisibility bugs. Hermes Agent is the fastest-moving alternative with strong credential management.

2. **For Windows/Linux users:** No project has a mature desktop GUI outside macOS. NullClaw (Zig) may offer the smoothest cross-platform experience for CLI-centric use. Monitor OpenClaw #75 for desktop app progress.

3. **For security-conscious teams:** OpenClaw has the most structured security roadmap (masked secrets, sandboxing, memory tagging). ZeroClaw's memory content scanning (#8984) is also worth tracking.

4. **For enterprise deployments:** ZeroClaw's OTel observability and operator dashboard make it the strongest candidate, but its context budget overflow (#5808) is a major blocker. IronClaw's extension-runtime and per-user MCP store signal enterprise readiness.

5. **For Chinese-language users:** CoPaw (Feishu) is the only option, but wait for post-v2.0 stabilization. LobsterAI's desktop experience may also fit.

6. **For hobbyists/small scale:** NanoBot and PicoClaw have lower complexity and are good starting points, but be prepared for channel-specific quirks (Discord in NanoBot, Matrix in PicoClaw).

---

*This report synthesizes data from 13 open-source projects on 2026-07-13. Metrics reflect a 24-hour window and may not represent long-term trends.*

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-07-13

## 1. Today's Overview
Development remains highly active, with **10 pull requests** and **4 issues** updated in the last 24 hours. Three PRs were merged/closed, including a fix for WebUI remote workspace access and a duplicate feature request. Community feedback highlights two critical pain points: a **Discord bot integration bug** that prevents message delivery, and a **caching performance issue with Ollama** that adds ~60 seconds per turn. Several targeted fixes are already in flight, indicating the maintainers are responsive to user-reported blockers.

---

## 2. Releases
*No new releases were published in the last 24 hours.*

---

## 3. Project Progress
Three PRs were merged or closed today:

- **[[CLOSED] feat(long_task): gate sustained-goal behind opt-in flag](https://github.com/HKUDS/nanobot/pull/4879)** (#4879) – Marked as duplicate but the underlying feature (sustained-goal background task flag) was likely incorporated elsewhere.
- **[[CLOSED] merge](https://github.com/HKUDS/nanobot/pull/4898)** (#4898) – A pure merge commit; no functional changes visible.
- **[[CLOSED] fix(webui): allow remote workspace access reduction](https://github.com/HKUDS/nanobot/pull/4892)** (#4892) – Strengthens security by allowing remote WebUI sessions to reduce their access level without changing the workspace scope.

Other notable features still open (but progressing):
- **[feat(agent): bind model presets to sessions](https://github.com/HKUDS/nanobot/pull/4866)** (#4866) – Persists per-session model selection, making `/model` session-scoped.
- **[feat(webui): add guided setup flows](https://github.com/HKUDS/nanobot/pull/4855)** (#4855) – Adds productised channel setup with validation and QR handoff.

---

## 4. Community Hot Topics
The most discussed issue this period is:

- **[#4867 – Preserve exact prompt prefix to enable caching](https://github.com/HKUDS/nanobot/issues/4867)** (4 comments, closed) – User reports that Ollama adds ~60 seconds per turn due to missing prompt prefix caching. This is a **high-impact performance blocker** for local models, especially on 32 GB VRAM setups. The issue is closed but the underlying enhancement (#2463) remains open.

The second-hot topic is the Discord bug:

- **[#4897 – Issue with Discord bot integration](https://github.com/HKUDS/nanobot/issues/4897)** (2 comments, open) – User reports bot appears online but never sends/receives messages. A fix PR (#4899) is already submitted.

Underlying need: users are demanding **real-time, low-latency chat experiences** with both local and cloud backends. Performance regressions (e.g., heartbeat prompt rewrite in #4896) show that infrastructure changes can inadvertently degrade responsiveness.

---

## 5. Bugs & Stability
Three bugs were reported today, ranked by estimated severity:

| Severity | Issue | Description | Fix PR Exists? |
|----------|-------|-------------|----------------|
| **High** | [#4897 – Discord bot not receiving messages](https://github.com/HKUDS/nanobot/issues/4897) | Bot shows online but fails to respond to DMs/guild messages. Blocks core messaging use case. | Yes – [#4899](https://github.com/HKUDS/nanobot/pull/4899) (routes unauthorized DMs to pairing) |
| **Medium** | [#4894 – `prune_dream_sessions()` fails on base64 filenames](https://github.com/HKUDS/nanobot/issues/4894) | After filename encoding change, pruning glob misses new files, leaving old files untouched. | Yes – [#4900](https://github.com/HKUDS/nanobot/pull/4900) (decode before pruning) |
| **Medium** | [#4893 – `/dream-log` and `/dream-restore` show non-Dream commits](https://github.com/HKUDS/nanobot/issues/4893) | Commands pollute output with unrelated git commits from shared workspace. | No PR yet |

Additional ongoing fixes:
- **[#4896 – Heartbeat prompt rewrite](https://github.com/HKUDS/nanobot/pull/4896)** – Regression from `v0.2.1` where heartbeat became a cron job but prompt wasn't updated, causing agents to only listen instead of executing tasks.
- **[#4895 – Transcription API key env placeholder resolution](https://github.com/HKUDS/nanobot/pull/4895)** – Fixes an issue where `${ENV_VAR}` placeholders were not resolved for selected transcription providers.

---

## 6. Feature Requests & Roadmap Signals
The most user-driven feature request is:

- **[#4867 – Prompt prefix caching for Ollama](https://github.com/HKUDS/nanobot/issues/4867)** – User explicitly calls the current behavior “totally unusable.” This is likely to be prioritised for the next minor release, given the number of follow-up references.

Other signals:
- **Model presets per session** (#4866) – strong candidate for v0.3.x, already under active development.
- **Guided WebUI setup flows** (#4855) – signals a move toward a more polished onboarding experience.
- **Sustained-goal gating** (#4879) – indicates growing adoption of long-running agent tasks, but also user demand for manual control.

Prediction: The **next release** will likely include the Discord fix (#4899), Dream session pruning fix (#4900), heartbeat rewrite (#4896), and the model-presets feature (#4866). The caching enhancement may follow as a dedicated PR.

---

## 7. User Feedback Summary
- **Pain Points:**
  - 60-second latency per turn with Ollama (driver: caching issue)
  - Discord bot completely non-functional (driver: routing/side effects)
  - Dream session management broken after filename encoding change
  - Heartbeat agents “only listen, never do” (driver: prompt regression from refactor)
- **Use Cases:**
  - Local model deployment on high-VRAM machines (32 GB)
  - Discord-based personal assistant
  - Long-running background tasks with sustained goals
- **Satisfaction:**
  - Users are actively reporting issues and contributing fixes (10 PRs in 24h), indicating an engaged community.
  - Frustration with performance regressions is high, but the maintainers’ rapid response suggests a healthy feedback loop.

---

## 8. Backlog Watch
The following item has been open for over six weeks without recent maintainer engagement:

- **[#4145 – Weather Skill fix](https://github.com/HKUDS/nanobot/pull/4145)** (created 2026-06-01, last updated 2026-07-12) – A combined multi-file PR that adds weather skill documentation and tests. Despite being assigned and receiving updates, it remains unmerged. This could delay the planned skill ecosystem and may need maintainer attention to either merge or close with reasoning.

No other critical backlog items were identified in the latest activity.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest – 2026-07-13

## 1. Today's Overview
The Hermes Agent project shows **very high activity** on 2026-07-13: **50 issues updated** (41 closed, 9 open) and **50 pull requests updated** (11 merged/closed, 39 open). No new releases were published. The bulk of the activity is downstream from a large wave of bug fixes merged onto `main` in the past 24 hours, covering everything from gateway stability to platform-specific regressions. While no new features shipped, the number of closed items and fresh PRs signals a **healthy, rapid maintenance cycle** with strong community contribution inflow.

## 2. Releases
*None in the last 24 hours.*

## 3. Project Progress – Merged/Closed Pull Requests Today
Several notable fixes landed today (11 PRs merged/closed). Key merges include:

- **[PR #57746](https://github.com/NousResearch/hermes-agent/pull/57746)** – `fix(gateway): prevent macOS gateway restart loop on unexpected SIGTERM` – Fixes an infinite launchd restart loop caused by a hardcoded `--replace` flag and missing cleanup of lock files on macOS.
- **[PR #22208](https://github.com/NousResearch/hermes-agent/pull/22208)** – `fix(cli): explicitly guard against None when checking subprocess exit code` – Closes a logic gap where `code` could remain `None`, leading to incorrect status evaluation.
- **[PR #55120](https://github.com/NousResearch/hermes-agent/pull/55120)** – `fix(desktop): stop tool-result summary from counting empty fields as "N more fields"` – Desktop UI no longer appends a bogus tail count for empty fields.
- **[PR #22950](https://github.com/NousResearch/hermes-agent/pull/22950)** – `fix(agent): mark turn as completed when iteration-limit summary succeeds` – Ensures the agent’s `completed` flag is set to `True` after a max-iteration summary, preventing subsequent incomplete state.

Many issues closed with label `sweeper:implemented-on-main` also indicate merges – examples include fixes for kanban stale claim locks ([#22926](https://github.com/NousResearch/hermes-agent/issues/22926)), fallback chain duplication ([#24039](https://github.com/NousResearch/hermes-agent/issues/24039)), plugins CLI filtering ([#23802](https://github.com/NousResearch/hermes-agent/issues/23802)), and Nvidia base URL recognition ([#23158](https://github.com/NousResearch/hermes-agent/issues/23158)). The sustained rate of repository merges points to a diligent triage process.

## 4. Community Hot Topics
The most engaged discussions (by comment count and reactions) are:

### Issues
- **[#9514](https://github.com/NousResearch/hermes-agent/issues/9514)** – *Feature: Single-Daemon Multi-Agent with Per-Topic Workspace & Memory Isolation* – 12 comments, 6 👍. Still open since April. Users want to run multiple agents from one gateway without separate processes. This is the **most upvoted open feature request** and continues to attract discussion.
- **[#22791](https://github.com/NousResearch/hermes-agent/issues/22791)** – *Add Infisical as an External Vault backend* – 7 comments, 13 👍. Closed today after being merged onto `main`. The community strongly wanted Infisical support (13 upvotes), and it now ships in the next release.
- **[#24039](https://github.com/NousResearch/hermes-agent/issues/24039)** – *Auxiliary fallback chain should reuse fallback_providers* – 5 comments. Closed with a merge. Users flagged a design inconsistency between two parallel fallback systems.
- **[#22926](https://github.com/NousResearch/hermes-agent/issues/22926)** – *Kanban stale claim locks from dead workers* – 5 comments. Closed with fix. Popular among automation users.

### Pull Requests
- **[#63535](https://github.com/NousResearch/hermes-agent/pull/63535)** – `fix(gateway): prevent macOS gateway restart loop` – Opened today, fast-tracked by a re-spin of the same fix (previous PR #57746 was merged earlier).
- **[#63537](https://github.com/NousResearch/hermes-agent/pull/63537)** – `fix(computer_use): normalize cua 0.7.1 windows` – Addresses `0x0` capture after reconnect, a critical issue for desktop automation users.
- **[#63536](https://github.com/NousResearch/hermes-agent/pull/63536)** – `fix(moa): add timeout to future.result() in reference model collection` – Prevents indefinite blocking when a reference provider hangs.

**Underlying need:** Users are consistently asking for *better isolation* (per-agent workspaces, credential pools, vault backends) and *reliability* (stale locks, gateway crashes, timeouts). The number of retry/failover/hang-related bugs suggests that scaling to more advanced multi-tool/multi-provider workflows is stressing current infrastructure.

## 5. Bugs & Stability – Reported Today (2026-07-13)
Several new bugs surfaced, with fix PRs already opened for most:

| Severity | Issue | Description | Fix PR |
|----------|-------|-------------|--------|
| **P1** | [#63425](https://github.com/NousResearch/hermes-agent/issues/63425) | **Provider auto-detection discards credential pools**, leaving agent without rotation or failover. | [PR #63533](https://github.com/NousResearch/hermes-agent/pull/63533) (opened today) |
| **P2** | (referenced in PR #63535) | macOS gateway restart loop (SIGTERM) – fixed in parallel PRs. | [PR #63535](https://github.com/NousResearch/hermes-agent/pull/63535) |
| **P2** | (referenced in PR #63528) | Continuable cron replies lost across gateway session resets. | [PR #63528](https://github.com/NousResearch/hermes-agent/pull/63528) |
| **P2** | (referenced in PR #63532) | Windows manifest paths broken inside WSL for computer-use tool. | [PR #63532](https://github.com/NousResearch/hermes-agent/pull/63532) |
| **P2** | (referenced in PR #63536) | MoA reference model collection can hang indefinitely on unresponsive provider. | [PR #63536](https://github.com/NousResearch/hermes-agent/pull/63536) |
| **P2** | (referenced in PR #63537) | Computer-use tool returns `0x0` window after reconnect. | [PR #63537](https://github.com/NousResearch/hermes-agent/pull/63537) |
| **P3** | (referenced in PR #63505) | Telegram local GIFs sent as photos instead of animations. | [PR #63505](https://github.com/NousResearch/hermes-agent/pull/63505) |
| **P3** | (referenced in PR #63534) | z.ai GLM requests blocked by content filter due to agent identity phrasing. | [PR #63534](https://github.com/NousResearch/hermes-agent/pull/63534) |

The **P1 credential pool bug** is the most alarming today – it silently disables failover across OAuth keys. The team responded quickly with a same-day fix PR.

## 6. Feature Requests & Roadmap Signals
Strong demand persists for:

- **Single-daemon multi-agent isolation** ([#9514](https://github.com/NousResearch/hermes-agent/issues/9514)) – 12 comments, 6 👍. Likely targeted for v0.14 or later given its complexity.
- **Infisical vault backend** ([#22791](https://github.com/NousResearch/hermes-agent/issues/22791)) – **already merged**. Will ship in the next release.
- **Persistent specialized subagents** ([#21303](https://github.com/NousResearch/hermes-agent/issues/21303)) – Closed today with a merge onto `main` (private skill lifecycle). This paves the way for more modular agent architecture.
- **Memvid memory backend** ([#23874](https://github.com/NousResearch/hermes-agent/issues/23874)) – Closed as `sweeper:not-planned`, but the community (2 👍) expressed interest. May be revisited.
- **Discord ops webhook routing** ([PR #21616](https://github.com/NousResearch/hermes-agent/pull/21616)) – Open since May, adds operational webhook primitives. Likely to be merged soon.
- **Dashboard UI contrast improvements** ([#23267](https://github.com/NousResearch/hermes-agent/issues/23267)) – Closed as duplicate but acknowledged. Expect small UI polish in near-term releases.

*Prediction:* The next minor release (v0.13.1 or v0.14.0) will likely include Infisical vault, the fallback chain unification, credential pool fixes, and the Kansas of merged kanban/hindsight stability patches. The multi-agent feature remains the headliner for a bigger release.

## 7. User Feedback Summary
Real-world pain points surfaced today:

- **"No Image found in Clipboard" spam** ([#23984](https://github.com/NousResearch/hermes-agent/issues/23984), 2 👍) – New v0.13.0 users report constant persistent clipboard polling, especially on Ghostty terminal. No fix yet (marked `cannot-reproduce` by sweeper).
- **macOS gateway restart loop** ([PR #63535](https://github.com/NousResearch/hermes-agent/pull/63535)) – Multiple users reported service disruption. Fix now merged.
- **Credential pool being silently dropped** ([#63425](https://github.com/NousResearch/hermes-agent/issues/63425)) – User working with multiple OAuth keys lost failover. Fix PR open.
- **Nvidia base URL not recognized** ([#23158](https://github.com/NousResearch/hermes-agent/issues/23158)) – Chinese-language report; fixed and merged.

Overall satisfaction appears high given the rapid rate of fix merges. The project’s ability to close 41 issues and merge 11 PRs in a single day demonstrates a responsive maintainer team. However, the volume of regressions (especially around macOS and credential management) suggests a need for more thorough pre-release CI coverage.

## 8. Backlog Watch
Items that have received community attention but lack maintainer action or closure:

- **[#9514](https://github.com/NousResearch/hermes-agent/issues/9514)** – *Single-Daemon Multi-Agent* – Open since April 14, 12 comments, 6 👍. No assignee, no milestone. This is the **highest-impact open feature request** without a timeline.
- **[#9345](https://github.com/NousResearch/hermes-agent/pull/9345)** – *fix(gateway): recover progress coalescing after edit failures* – Open since April 14, no comments from maintainer. Marked with `sweeper:risk-message-delivery` and other risk labels. Needs review.
- **[#9341](https://github.com/NousResearch/hermes-agent/pull/9341)** – *fix(gateway): honor background_process_notifications=off for watch reinjection* – Same author, same duration, same lack of review.
- **[#20995](https://github.com/NousResearch/hermes-agent/pull/20995)** – *fix(usage): pass active credential pool key to usage API fetchers* – Open since May 7. Needed for credential pool users – 0 comments from maintainers.
- **[#15475](https://github.com/NousResearch/hermes-agent/pull/15475)** – *fix(cli): make setup and gateway guidance profile-aware* – Open since April 25. A small but important UX fix for profile-based installations.
- **[#24104](https://github.com/NousResearch/hermes-agent/pull/24104)** – *fix(tools): log unknown toolsets in quiet mode* – Open since May 12, no maintainer discussion.

These long-stalled PRs, especially #9345, #9341, and #20995, risk accumulating merge conflicts and losing community momentum. Given the current high activity, a dedicated triage pass on older contributions would improve contributor satisfaction.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-07-13

## 1. Today's Overview
Project activity remains moderate, with 5 issues updated and 2 pull requests touched in the last 24 hours. Three open bugs and one open feature request signal active community testing, while one merged PR advanced i18n completeness. No new releases were published, but a fix for Anthropic prompt cache metrics (PR #3251) and a newly reported model‑ID parsing bug indicate ongoing refinement of provider and channel logic. The overall health is stable, though several long‑standing issues (Matrix reconnection, Android launch) still lack maintainer resolution.

## 2. Releases
*None.* No new releases were created in the reporting period.

## 3. Project Progress
**Merged/Closed PRs (1):**
- **#3190** ([PR](https://github.com/sipeed/picoclaw/pull/3190)) — *sync missing locale keys from en.json to bn-in and cs translations*  
  Closed (merged) after being stale since June 27. Adds `chat.dropImagesActive` to `bn-in.json` and `chat.disableCodeWrap`, `chat.enableCodeWrap`, `chat.dropImagesActive` to `cs.json`. Improves internationalisation coverage for Bengali and Czech users.

**Closed Feature Request (1):**
- **#3250** ([Issue](https://github.com/sipeed/picoclaw/issues/3250)) — *add Docker Compose support for armhf devices*  
  Closed without code merge, likely indicating the idea was accepted or deferred. Signals potential future support for ARMv7 low‑power boards (e.g. OneCloud, Raspberry Pi Zero).

## 4. Community Hot Topics
The most engaged items, ranked by comments/reactions:

- **#3182** ([Issue](https://github.com/sipeed/picoclaw/issues/3182)) — *[BUG] Android version* (3 comments, 0 👍)  
  User reports inability to launch the service on Android despite full permissions and config path being unchangeable. Screenshots attached. Underlying need: reliable Android client setup and configuration UI.

- **#3194** ([Issue](https://github.com/sipeed/picoclaw/issues/3194)) — *[BUG] Received encrypted message but crypto is not enabled* (2 comments, 0 👍)  
  Closed stale; user encountered encrypted Matrix messages without crypto enabled. Highlights missing documentation or automatic fallback for Matrix encryption.

- **#3203** ([Issue](https://github.com/sipeed/picoclaw/issues/3203)) — *[BUG] Matrix sync loop has no reconnection logic* (2 comments, 1 👍)  
  Describes silent death of `/sync` long‑polling after network or homeserver disruption. Community upvoted – indicates strong need for resilient Matrix channel behaviour.

## 5. Bugs & Stability
**New bugs reported today (2026-07-12/13):**

| Issue | Severity | Summary | Fix PR exists? |
|-------|----------|---------|----------------|
| [#3203](https://github.com/sipeed/picoclaw/issues/3203) | **High** | Matrix sync loop dies permanently without reconnection; systemd cannot restart it because main process stays alive. | No |
| [#3252](https://github.com/sipeed/picoclaw/issues/3252) | **Medium** | `splitKnownProviderModel` strips provider prefix when model ID contains a known provider alias, causing incorrect config parsing. | No |
| [#3182](https://github.com/sipeed/picoclaw/issues/3182) | **Medium** | Android: service cannot launch; path setting UI broken. Stale (since June 26) but still open. | No |

**Closed bug (no longer active):**
- [#3194](https://github.com/sipeed/picoclaw/issues/3194) — Encrypted message without crypto (closed stale).

**Fix‑related PR:** [#3251](https://github.com/sipeed/picoclaw/pull/3251) (open) captures prompt cache token usage in Anthropic providers – addresses observability but not the critical Matrix bug.

## 6. Feature Requests & Roadmap Signals
- **#3250** (closed) – *Docker Compose for armhf devices*  
  Suggests upcoming support for ARMv7 single‑board computers (PlayCloud, Pi Zero). No code merged yet, but closure indicates maintainer awareness.

- **#3190** (merged) – *i18n sync* – low effort translation completion, likely included in next patch release.

- **#3251** (open) – *Capture Anthropic prompt cache tokens* – enhances provider observability. May land in v0.3.0 or next minor release.

No major new feature requests were filed today. The community’s focus remains on bug fixes and platform parity (Android, ARM).

## 7. User Feedback Summary
**Pain points:**
- Android setup is broken or incomplete (launch failure, settings not working).
- Matrix channel unreliability – no automatic reconnection leads to silent failure.
- Encrypted messages confuse users when crypto is not enabled.
- Model ID parsing can silently misconfigure providers (alias stripping).

**Use cases expressed:**
- Home‑lab deployment on low‑power ARM devices (OneCloud, Pi).
- Mobile usage via Android (likely as personal assistant gateway).
- Matrix bridging for encrypted group chats.

**Satisfaction:** Mixed – contributors actively report bugs and submit fixes, but critical issues (Matrix reconnection, Android) remain open for weeks, suggesting developer bandwidth may be constrained.

## 8. Backlog Watch
The following issues are open, important, and have not received maintainer responses or fixes:

| Issue | Age | Comments | Why it needs attention |
|-------|-----|----------|------------------------|
| [#3182](https://github.com/sipeed/picoclaw/issues/3182) | 17 days | 3 | Android launch failure blocks mobile use case entirely. |
| [#3203](https://github.com/sipeed/picoclaw/issues/3203) | 11 days | 2 (+1👍) | Matrix reliability is critical for any integration; no reconnection logic makes the channel unusable after network hiccups. |
| [#3252](https://github.com/sipeed/picoclaw/issues/3252) | <1 day | 0 | Fresh bug affecting provider config parsing – may cause silent failures for users with specific model IDs. |

No PRs directly address these items. Maintainer response is advised for #3203 and #3182 to restore user trust in mobile and Matrix support.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-07-13

## Today’s Overview
The project is in an active development and stabilization phase, with **14 pull requests** updated in the last 24 hours and **3 new open issues**. Three PRs were merged or closed today, addressing critical output-token limits and channel formatting. No new release was cut, but multiple core-team features (guard seam, operator approval CLI, audit skill) are progressing through review. The community is reporting a handful of regressions and configuration gaps, with fix PRs already in flight for the most severe bugs.

## Releases
*None.* No new releases were published in the reported period.

## Project Progress
Three pull requests were merged or closed today:

- **#3024 (closed)** — `fix(container): raise the agent SDK's 32000 output-token cap to the model's real ceiling`  
  Resolves the silent 32k token limit that was killing long Claude responses (e.g., OpenSCAD generation). The fix removes the default SDK cap, allowing agents to use the model’s full output window.

- **#3030 (closed)** — `fix(deshi-line): Markdown を LINE 向けプレーンテキストに変換して配信`  
  Adds `formatLine()` to strip Markdown syntax for LINE text messages, solving the display of raw formatting characters to users.

- **#2952 (closed)** — `Skill/add opencode stack`  
  Introduces a new operational/container skill (opencode stack) for deployment.

Additionally, two high-visibility features advanced:

- **Guard seam (#2986)** — still open, updated; introduces a single decision function (`guard()`) for every privileged action crossing container/channel boundaries.
- **ncl operator approval verbs (#3029)** — new open PR adding `approve`, `reject`, `reject-with-reason` subcommands to the CLI.

## Community Hot Topics
No individual issue or PR accumulated high comment counts (all show 0–1 comments). However, the following items have drawn repeated updates and represent active discussion threads:

- **#3016** – [Every `rate_limit_event` logged as a quota error, even when status is “allowed”](https://github.com/nanocoai/nanoclaw/issues/3016)  
  Reported by glifocat. The polling loop logs 82 false-positive rate-limit errors per week, creating operational noise. Underlying need: distinguish transient “allowed” rate events from true quota violations.

- **#3023** – [Every Claude agent is silently capped at 32000 output tokens](https://github.com/nanocoai/nanoclaw/issues/3023)  
  Reported by javexed. Affects CAD project agents generating long files. The fix (#3024) was already merged today.

- **#2986** – [Guard seam](https://github.com/nanocoai/nanoclaw/pull/2986) (PR) and **#2987** – [Audit skill](https://github.com/nanocoai/nanoclaw/pull/2987) (PR)  
  Both are large core-team efforts with sustained revision activity. They represent the community’s demand for robust access control and local audit trails.

## Bugs & Stability
Three bugs were reported today, ranked by severity:

| Issue | Severity | Description | Fix Status |
|-------|----------|-------------|------------|
| **#3023** – Silent token cap | **Critical** | Long Claude turns die with API error; all agents capped at 32k tokens | ✅ Fixed in #3024 (merged) |
| **#3016** – Rate-limit false alarm | **Medium** | Poll loop logs quota error on every turn; 82 noisy entries/week | No fix PR yet |
| **#3026** – Duplicate replies after `send_message` | **Medium** | Re-wrap nudge reruns model and duplicates replies | 🔧 Fix PR #3028 open |
| **#3027** – TMPDIR poisoning (container) | **High** | `EISDIR` error when `/tmp` is root-owned; containers fail to spawn | 🔧 Fix PR #3027 open |

Additional stability concerns addressed in open PRs:
- **#3020** – Rescues undelivered unwrapped replies after re-wrap nudge, addressing silent message drops.
- **#2982** – Reconciles Claude tool allowlist with pinned CLI, adding drift guard.

## Feature Requests & Roadmap Signals
The following open PRs indicate likely upcoming features:

- **#3029** – Operator approval-resolution verbs (`approve`, `reject`, `reject-with-reason`) for the `ncl` CLI.  
  *Likely next version: fills a gap in the approval workflow for local/CLI approvers.*

- **#2987** – `/add-audit` skill: opt-in local audit log for the `ncl` surface.  
  *High demand from compliance-conscious teams; nearing final review.*

- **#2983** – Per-group harness capability toggles to disable built-in cron/scheduling in favor of NanoClaw’s own scheduler.  
  *Cleaner defaults for new groups; existing groups grandfathered.*

- **#3022** – Scheduled tasks in templates (cron + prompt defined in `tasks/*.md`).  
  *Eliminates manual recreation of recurring tasks after agent group creation.*

- **#3021** – Warn users before connecting a shared WhatsApp number to prevent account suspension.  
  *Safety improvement for multi-tenant deployments.*

## User Feedback Summary
Real user pain points and satisfaction signals:

- **Configuration defaults causing silent failures** – Several users (javexed, glifocat, fjnoyp) reported issues where default settings (output token cap, polling loop behavior, unwrapped reply handling) led to unexpected agent failures or noise. The community appreciates the rapid fix for token caps (#3024) but expects similar attention to the polling log noise (#3016) and duplicate replies (#3026).

- **Multi-channel formatting incompleteness** – The LINE channel fix (#3030) addresses a user complaint about raw Markdown literals. Satisfaction will increase once WhatsApp and other channels are similarly covered.

- **Demand for operator tooling** – The `ncl approvals` PR (#3029) and audit skill (#2987) respond to explicit requests for CLI-based approval resolution and activity logs, indicating a desire for local/offline operational control without cloud dependency.

## Backlog Watch
The following items have been open for several days without merging or a clear maintainer response:

- **#2982** – `fix(agent-runner): reconcile Claude tool allowlist with pinned CLI`  
  Updated 2026-07-12, but no maintainer merge yet. Drift between the allowlist and actual CLI tools could cause tool execution failures.

- **#3020** – `fix(agent-runner): rescue undelivered unwrapped replies`  
  Updated 2026-07-12, addresses issues #2369 and #2393 which have been open for weeks. Would benefit from a final review and merge.

- **#2986** and **#2987** – Both are large core-team PRs under active iteration; no maintainer sign-off yet. These are strategic enough that they likely require additional internal design alignment before merging.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest — 2026-07-13

## Today’s Overview
The NullClaw project saw no new releases and no new issues opened today, but maintainers merged 4 pull requests and advanced 5 more toward completion. Overall activity is moderate, with a strong focus on stability fixes across cron scheduling, messaging channels, and configuration. The team appears to be methodically addressing known bugs (use‑after‑free, socket recovery, authentication claims) without introducing new features, suggesting a **stabilisation phase**.

## Releases
No releases were published on 2026‑07‑13. The latest release remains the previous tag (not specified in this data).

## Project Progress
Four pull requests were merged/closed today, each addressing a concrete bug or configuration gap:

- **#951** – `fix(agent_runner): suppress stderr initialization logs on agent failure`  
  Prevents initialisation logs (memory plan, MCP server registration) from being posted to channels when the agent child process exits non‑zero.  
  [PR #951](https://github.com/nullclaw/nullclaw/pull/951)

- **#950** – `fix(gateway): move port probe before allocations to prevent test leak`  
  Moves the `AddressInUse` port probe earlier in `gateway.run()` so that expensive allocations (Config, SessionManager, tools) are not performed before failure, preventing resource leaks in test environments.  
  [PR #950](https://github.com/nullclaw/nullclaw/pull/950)

- **#949** – `fix: make queue_mode configurable from config.json`  
  Adds `agent.default_queue_mode` to `config.json`, moves the `QueueMode` enum to `config_types.zig`, and provides fallback logic. This is a **feature addition** (new user‑configurable setting) delivered as a fix.  
  [PR #949](https://github.com/nullclaw/nullclaw/pull/949)

- **#948** – `fix cron agent delivery attribution`  
  Ensures that one‑shot cron agent output is attributed to the correct delivery channel/account by passing origin metadata into subprocesses and preserving routing flags in storage and API payloads.  
  [PR #948](https://github.com/nullclaw/nullclaw/pull/948)

Collectively these changes improve message attribution, configuration flexibility, test reliability, and output cleanliness.

## Community Hot Topics
None of the open or closed pull requests received any comments or reactions on 2026‑07‑13. The five open PRs (all created between June 12 and June 16) remain uncommented. This may indicate:

- The community is small or primarily consists of core contributors.
- The PRs are well‑structured and uncontroversial.
- Reviewers are working through them without public discussion.

## Bugs & Stability
No new bug reports were filed today. However, the five open pull requests target known stability problems, all with active fix PRs:

- **High severity: Use‑after‑free in cron one‑shot jobs**  
  PR #954 addresses a **use‑after‑free** bug (`OutboundMessage.channel` pointer) that causes scheduled one‑shot jobs to silently fail without delivering messages.  
  [PR #954](https://github.com/nullclaw/nullclaw/pull/954)

- **High severity: Discord gateway socket recovery**  
  PR #953 fixes a scenario where the Discord gateway socket is not properly closed before reconnection, leading to stalled connections and missed messages.  
  [PR #953](https://github.com/nullclaw/nullclaw/pull/953)

- **High severity: Teams Bot Framework authentication failure**  
  PR #958 resolves a 403 error caused by a mismatch in JWT claim casing (`serviceUrl` vs `serviceurl`).  
  [PR #958](https://github.com/nullclaw/nullclaw/pull/958)

- **Medium severity: Missing persistent token for cron scheduler**  
  PR #959 adds persistence of the paired bearer token so that cron‑scheduled tool calls continue to work after a `/pair` handshake.  
  [PR #959](https://github.com/nullclaw/nullclaw/pull/959)

All five bugs have corresponding fix PRs, which are under review or awaiting merge.

## Feature Requests & Roadmap Signals
No explicit user feature requests were recorded today. However, the merged PR #949 (configurable `queue_mode`) and the open PR #959 (token persistence for cron) suggest the team is actively improving the **scheduling and queue management** subsystem. A plausible next‑version focus includes:

- Robust one‑shot and recurring cron jobs with guaranteed delivery.
- Better multi‑channel reliability (Discord, Teams, Telegram).
- Finer control over session queuing behaviour.

No breaking changes were observed.

## User Feedback Summary
No direct user comments or polls were captured. However, the bug‑fix PRs paint a picture of real‑world pain points:

- **Silent message failures** (PR #954) – users scheduled “once” cron jobs but received no output.
- **403 errors on Teams** (PR #958) – teams integration was unusable for some deployments.
- **Discord message loss** (PR #953) – bot disconnected without recovery, losing messages.
- **Incorrect error messages** (PR #951) – agent failure flooded channels with internal logs instead of a clean error.

User satisfaction is likely mixed: the project is actively resolving these issues, but users currently experience the bugs. The merged fixes today will improve the experience once a new release ships.

## Backlog Watch
No issues or PRs in the backlog are flagged as long‑unanswered. The oldest open PR (#953, June 12) is still active and has been updated today. All open work is receiving maintainer attention. The project appears to have a healthy triage cadence.

---

*Data source: GitHub API snapshot of `nullclaw/nullclaw` on 2026‑07‑13.*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-07-13

## 1. Today's Overview

IronClaw shows very high development activity today: 50 pull requests were updated in the last 24 hours (28 open, 22 merged/closed) alongside 10 issues (7 open, 3 closed). The project is in the middle of a major "extension-runtime" feature train (PRs #6025, #6012), while simultaneously addressing a **structural CI fragility** that has been turning ~70% of main branch pushes red due to flaky and non-hermetic tests. The team is actively merging fixes for these stability issues (e.g., PR #6023 kills the `build_runtime_input` flake) and hardening CI with static pre-push checks (PR #6022). No new releases were published in this window.

---

## 2. Releases

*No new releases in the last 24 hours.*

---

## 3. Project Progress – Merged/Closed PRs & Feature Advances

The following significant work was merged or closed today (among 22 closed/merged PRs):

- **Dependency updates** – PR [#5926](https://github.com/nearai/ironclaw/pull/5926) bumped 20 crates (including agent-client-protocol 0.10.4→1.2.0) was merged.
- **Secrets scope alignment** – PR [#5934](https://github.com/nearai/ironclaw/pull/5934) (admin secrets with default runtime scope) was validated and shipped.
- **CI flake fix** – PR [#6023](https://github.com/nearai/ironclaw/pull/6023) fixes the `build_runtime_input` test isolation defect (#6015), a major contributor to CI redness.
- **Extension-runtime P5** – PR [#6012](https://github.com/nearai/ironclaw/pull/6012) (delivery coordinator + Slack/Telegram outbound) is open but represents a major forward step for the extension runtime workstream.
- **Token usage tracking** – PR [#5976](https://github.com/nearai/ironclaw/pull/5976) (per-run token usage + USD cost on OpenAI-compatible API) is open and nearing completion.

Closed issues include:
- [#5704](https://github.com/nearai/ironclaw/issues/5704) (image preview transparency bug) – fixed.
- [#6010](https://github.com/nearai/ironclaw/issues/6010) (GLM-5.2 hangs on opencode) – closed as likely related to inference provider.
- [#6009](https://github.com/nearai/ironclaw/issues/6009) (GLM-5.2 missing from model list) – closed, workaround documented.

---

## 4. Community Hot Topics

The most active item remains the **long-standing feature request** [#2601](https://github.com/nearai/ironclaw/issues/2601) (CLI/TUI for managing secrets, 2 comments, created April 18). Although low in comment count, it represents unmet user needs for authentication/secret management documentation.

The **daily failure taxonomy** [#6011](https://github.com/nearai/ironclaw/issues/6011) is a structured analysis of CI failures, reflecting intense internal focus on reliability.

Among PRs, the **Reborn loop resilience PR** [#5959](https://github.com/nearai/ironclaw/issues/5959) (XL, low risk) is a stack base for several other PRs and addresses the biggest performance gap (30% vs 65% benchmark success rate). It garners attention because of its cross-cutting impact on agent loop stability.

---

## 5. Bugs & Stability

| # | Issue | Severity | Status | Fix PR |
|---|-------|----------|--------|--------|
| 1 | **CI fragility** – ~70% of main pushes red due to flaky non-hermetic tests ([#6014](https://github.com/nearai/ironclaw/issues/6014)) | **Critical** | Open | Multiple: #6022 (static checks), #6020 (Slack journeys), #6023 (build_runtime_input flake) |
| 2 | **Test isolation defect** – `build_runtime_input_production_*` flaky in all-features coverage ([#6015](https://github.com/nearai/ironclaw/issues/6015)) | **High** | Open | PR #6023 (merged) |
| 3 | **Slack trigger e2e flaky** – timeouts/missed triggers ([#6016](https://github.com/nearai/ironclaw/issues/6016)) | **High** | Open | PR #6020 (in review) |
| 4 | **DB concurrency flaky** – postgres delete/recreate race, libSQL concurrent writers ([#6017](https://github.com/nearai/ironclaw/issues/6017)) | **Medium** | Open | No fix PR yet |
| 5 | **GLM-5.2 hangs** – NEAR AI inference unresponsive during opencode usage ([#6010](https://github.com/nearai/ironclaw/issues/6010)) | **High** | Closed (workaround?) | N/A |
| 6 | **Prompt-cache collapse** – KV-cache hit rate drops from 82% to 29% after ~400 calls ([#5975](https://github.com/nearai/ironclaw/issues/5975)) | **Medium** | Addressed by PR #5975 | In review |

The CI fragility (#6014) is the single most damaging issue, causing 70% of July push runs to fail. The team is actively applying structural fixes (static checks, hermetic test guards).

---

## 6. Feature Requests & Roadmap Signals

- **CLI/TUI for secrets management** ([#2601](https://github.com/nearai/ironclaw/issues/2601)) – user-requested, still open after 3 months. Likely to be prioritised given the documented authentication pain.
- **CI hardening** – internal request for static pre-push checks ([#6018](https://github.com/nearai/ironclaw/issues/6018)) is being implemented as PR #6022.
- **Per-user MCP registration store** – PR [#5970](https://github.com/nearai/ironclaw/pull/5970) (T1) is nearing completion, enabling user-scoped tool registration.
- **Extension runtime** – P5 and P6 PRs (#6012, #6025) are the final pieces of the extension system, suggesting a major release soon.
- **Prompt-cache break detection** ([#5975](https://github.com/nearai/ironclaw/issues/5975)) – a performance-focused feature that could significantly reduce agentic turn costs.
- **Skill listing optimisation** – PR [#5977](https://github.com/nearai/ironclaw/pull/5977) moves from full skill body injection to one-line listings, saving ~7K tokens per call.

**Prediction for next version:** Token usage/cost API, extension-runtime MVP, per-user MCP store, and the suite of agent loop resilience improvements (read-before-edit, post-edit diagnostics, prompt-cache break detection).

---

## 7. User Feedback Summary

Only one direct user feedback item visible:

- **Secrets management friction** ([#2601](https://github.com/nearai/ironclaw/issues/2601)) – user reports that authentication patterns are not well documented, leading to struggles getting started. They request a CLI/TUI and clearer documentation.
- **Inference reliability complaints** ([#6010](https://github.com/nearai/ironclaw/issues/6010), [#6009](https://github.com/nearai/ironclaw/issues/6009)) – reports that GLM-5.2 hangs during opencode usage and is not available in the default model list. These were closed, indicating either a fix or acknowledged limitation.

No positive user feedback or satisfaction indicators are present in today’s data.

---

## 8. Backlog Watch

| Item | Age | Status | Reason for Concern |
|------|-----|--------|-------------------|
| [#2601](https://github.com/nearai/ironclaw/issues/2601) – CLI/TUI for secrets | 87 days | Open, 2 comments | Unanswered user request; no maintainer response visible. This blocks new user onboarding. |
| [#5916](https://github.com/nearai/ironclaw/pull/5916) – Per-user MCP store (superseded) | 3 days | Closed (superseded by #5970) | Not a concern; replacement is active. |
| [#6017](https://github.com/nearai/ironclaw/issues/6017) – DB concurrency flaky test | 1 day | Open, no fix PR | Newly filed; needs a fix to reduce CI noise. |

The most critical backlog item remains the secrets management request (#2601), which has received no official response from maintainers despite being open for three months. For a project aiming to lower the barrier for new users, addressing this gap should be a priority.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

Based on the provided GitHub data for **LobsterAI** on **2026-07-13**, here is the project digest:

---

## LobsterAI Project Digest (2026-07-13)

### 1. Today's Overview

The LobsterAI project shows **high activity**, with **14 Pull Requests updated** in the last 24 hours, evenly split between 7 merged/closed and 7 new/open proposals. This indicates a strong focus on closing out existing work while rapidly introducing new features. A single new issue was reported, highlighting a potential regression affecting multi-agent setups. The development effort is concentrated on the **Cowork** feature (follow-up routing, queuing, attachments), **UI/UX polishing** (Windows title bar, file cards), and **build system improvements** (Windows web installer, macOS update fixes).

### 2. Releases

**None.**

No new releases were tagged in this period.

### 3. Project Progress (Merged/Closed PRs Today)

Seven PRs were closed or merged today, focusing on stability and feature refinement:

- **Cowork Stability & Routing:** A series of fixes from contributor `liuzhq1986` stabilized the steer follow-up routing system. PR [#2315](https://github.com/netease-youdao/LobsterAI/pull/2315) ensures queued follow-ups are processed even when the app is minimized. PR [#2292](https://github.com/netease-youdao/LobsterAI/pull/2292) refines the routing logic to prevent stale input states. PR [#2300](https://github.com/netease-youdao/LobsterAI/pull/2300) adds support for file attachments in the follow-up queue.
- **Context Maintenance:** A critical fix in PR [#2289](https://github.com/netease-youdao/LobsterAI/pull/2289) resolves a bug where stalled compaction retries were not cleared, preventing potential data corruption in the long-term memory system.
- **UI Polish (Windows):** PR [#2302](https://github.com/netease-youdao/LobsterAI/pull/2302) introduces a branded title bar for Windows, moving collapsed-sidebar actions into the title bar for a cleaner look. PR [#2316](https://github.com/netease-youdao/LobsterAI/pull/2316) fixes a bug where the logo was compressed when the sidebar was collapsed with an update badge visible.

### 4. Community Hot Topics

The most active discussion is centered around a potential data management bug:

- **Issue #2293: "Multiple agent USER.md overwritten/replaced after restart"** [[Link](https://github.com/netease-youdao/LobsterAI/issues/2293)]
  - **Activity:** The sole new issue, with **4 comments** and high user engagement.
  - **Underlying Need:** The user has established multiple distinct agents and expects them to maintain independent personas and memories (via `USER.md` files). The core requirement is **robust data isolation between agents**. The user reports that any change to one agent's settings overwrites the files of all other agents, especially after a restart. This suggests a regression in the agent file-loading logic, possibly related to how the main agent's files are prioritized or how the workspace directory is selected.

### 5. Bugs & Stability

**Severity: High**

- **Issue #2293: Multi-Agent Configuration Overwrite** [[Link](https://github.com/netease-youdao/LobsterAI/issues/2293)]
  - **Description:** A regression where modifying one agent's persona or `USER.md` file overwrites the same files for all other agents, particularly after a restart. This is a **critical data integrity issue** for users with multiple agents.
  - **Status:** Open; no fix PR exists yet. It was reported 6 days ago and remains unassigned.
  - **Related Fix:** PR [#2065](https://github.com/netease-youdao/LobsterAI/pull/2065) (closed) aimed to fix a similar issue by using a short UUID for Agent IDs instead of name-derived IDs to prevent data resurrection. While this was merged, the current bug suggests the root cause (correct file isolation on load) may not have been fully addressed.

**Severity: Medium**

- **PR #2321: "mac update hdiutil failed"** (Open) [[Link](https://github.com/netease-youdao/LobsterAI/pull/2321)]
  - **Description:** A fix is being prepared for a macOS update failure related to `hdiutil`, an OS tool for mounting disk images. This affects the auto-update mechanism on macOS.
  - **Status:** A fix PR is already open, suggesting the development team is actively addressing it.

### 6. Feature Requests & Roadmap Signals

While no explicit user feature requests were made, the open PRs act as strong signals for the immediate roadmap:

- **Enhanced Desktop Integration:** PR [#2318](https://github.com/netease-youdao/LobsterAI/pull/2318) proposes upgrading desktop notifications to show "waiting" status for permission requests and questions, moving towards a more proactive desktop assistant.
- **Refined Onboarding/User Journey:** PR [#2319](https://github.com/netease-youdao/LobsterAI/pull/2319) revamps the homepage quick-action scenarios, replacing a generic "Education" category with a more practical "Document Writing" category. This signals a focus on improving first-time user experience and highlighting concrete use cases.
- **Cross-Platform Parity:** The addition of a Windows web installer (PR [#2323](https://github.com/netease-youdao/LobsterAI/pull/2323)) and the continued work on the Windows title bar (PR [#2302](https://github.com/netease-youdao/LobsterAI/pull/2302)) indicate a strong push for Windows feature parity and a smoother distribution experience.

### 7. User Feedback Summary

The primary user feedback point is **dissatisfaction with data management**, specifically:

- **Pain Point:** A user explicitly reports frustration with the inability to maintain distinct, independent agents. Their workflow of creating multiple AI personas with separate instructions and memory has been broken by a recent update.
- **Use Case:** The user's goal is to use the application for different, context-specific tasks (e.g., a "coding agent" vs. a "writing agent"). The current behavior merges all these contexts into one, defeating the purpose of the multi-agent feature.
- **Satisfaction:** The user seems technically savvy (manually modifying workspace files) but expresses clear disappointment, stating the bug "destroys the ability to set different requirements for different agents." This is a strong signal that multi-agent functionality is a core expected feature that is currently unreliable.

### 8. Backlog Watch

- **PR #1325: "feat(ui): Add hover tooltip for new conversation button"** [[Link](https://github.com/netease-youdao/LobsterAI/pull/1325)]
  - **Status:** Open, marked as `[stale]`.
  - **Age:** Created over 3 months ago (Apr 2, 2026), last updated 1 day ago.
  - **Urgency:** Low; this is a minor usability enhancement. The "stale" label suggests the maintainers have not prioritized it. It may need a rebase or decision to close.

- **Issue #2293: "Multiple agent USER.md overwritten/replaced after restart"** [[Link](https://github.com/netease-youdao/LobsterAI/issues/2293)]
  - **Status:** Open.
  - **Urgency:** **High**. This is a critical regression for a core feature. Despite being open for 6 days, it has not been assigned or labeled. It requires urgent maintainer attention to diagnose and confirm the fix path, possibly linking back to the recent Agent ID changes from PR [#2065](https://github.com/netease-youdao/LobsterAI/pull/2065).

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

Based on the provided GitHub data for CoPaw (CoPaw, a.k.a. QwenPaw / AgentScope), here is the project digest for **2026-07-13**.

---

## CoPaw Project Digest: 2026-07-13

**Project Status:** Active but in a high-severity stabilization phase following the v2.0.0 release.

### 1. Today's Overview

The project is experiencing a high volume of activity at a critical moment. With 32 open issues and 16 open pull requests updated in the last 24 hours, it is clear that the recent v2.0.0 launch has introduced significant regressions. The community is actively reporting critical bugs related to core features like context compression, sandboxing, and session management, while maintainers are responding with a flurry of targeted fix PRs. The overall health is **tense**; the team is in a "firefighting" mode to restore stability and address the wave of user-reported regressions, particularly on Windows and for session continuity. No new releases were cut, indicating a focus on patching the existing version.

### 2. Releases

- **None.** No new releases were published today.

### 3. Project Progress

Despite the bug influx, several key fixes were merged, addressing regressions and long-standing issues. Four pull requests were closed/merged today.

- **Version Bump:** PR [#6007](https://github.com/agentscope-ai/QwenPaw/pull/6007) was merged to bump the version to `2.0.0.post1`, signaling readiness for a hotfix release.
- **Legacy Compatibility (Merged):** PR [#5991](https://github.com/agentscope-ai/QwenPaw/pull/5991) was merged, fixing a critical issue where legacy v1.x `file` content blocks failed to load in v2.0, causing session restore failures. A duplicate PR ([#5990](https://github.com/agentscope-ai/QwenPaw/pull/5990)) was also closed in favor of this.
- **Agent Stability (Merged):** PR [#5530](https://github.com/agentscope-ai/QwenPaw/pull/5530) was closed/merged, introducing a cap on the `auto-continue` feature per turn to prevent agents from entering degenerate loops when they only produce text replies (e.g., single emojis).

### 4. Community Hot Topics

The community is highly engaged, primarily around critical regressions and feature gaps.

- **[Most Critical: #5951] Windows Sandbox Recursion Explosion:** This issue (8 comments) is the most active and severe. The user reports that the new v2.0 sandbox causes `pwsh` windows to spawn infinitely, leading to memory exhaustion and making the tool unusable on Windows. The discussion reveals a deep investigation into root causes like NTFS ACL contamination and missing `CREATE_NO_WINDOW` flags. [Issue Link](https://github.com/agentscope-ai/QwenPaw/issues/5951)
- **[Core API Regression: #5996] `MODEL_EXECUTION_ERROR` due to Orphan Tool Messages:** This issue (7 comments) describes a common pattern where the background offload feature creates `tool` role messages without preceding `tool_calls` in the assistant message, causing a 400 error from OpenAI-compatible APIs. This has been a root cause for many users. [Issue Link](https://github.com/agentscope-ai/QwenPaw/issues/5996)
- **[User Workflow Blocked: #5961] Agent Stuck in Write/Delete Loop:** User reports that agents using `qwen3.7-plus` get stuck in a repetitive loop of writing and deleting files. This points to a potential issue with agent planning or tool execution logic in the v2 version. [Issue Link](https://github.com/agentscope-ai/QwenPaw/issues/5961)

### 5. Bugs & Stability

The project is facing a stability crisis, primarily driven by regressions in the new v2.0 release. The bugs are ranked by severity based on user impact.

- **Critical:**
    - **Windows Sandbox Failure ([#5951](https://github.com/agentscope-ai/QwenPaw/issues/5951)):** Totally blocks usage on the Windows platform. A PR ([#5931](https://github.com/agentscope-ai/QwenPaw/pull/5931)) is open to add a restricted token-based sandbox fix.
    - **Context Compression Breaks Tool Calls ([#5986](https://github.com/agentscope-ai/QwenPaw/issues/5986), [#5960](https://github.com/agentscope-ai/QwenPaw/issues/5960), [#6009](https://github.com/agentscope-ai/QwenPaw/issues/6009)):** This is a systemic flaw where the context compression logic splits the `tool_call` and its corresponding `tool_result` into separate compressed/reserved contexts, leading to a 400 error from the LLM API. A fix is proposed in PR [#5989](https://github.com/agentscope-ai/QwenPaw/pull/5989).
    - **Orphan Tool Messages ([#5996](https://github.com/agentscope-ai/QwenPaw/issues/5996), [#5985](https://github.com/agentscope-ai/QwenPaw/issues/5985)):** A core API regression. A fix has been merged in PR [#6004](https://github.com/agentscope-ai/QwenPaw/pull/6004).
    - **User Message Drop on Busy Session ([#5995](https://github.com/agentscope-ai/QwenPaw/issues/5995)):** New messages are silently dropped when the agent is busy, causing the user to think the bot is broken.
- **High:**
    - **Auto-Memory Failure on Desktop ([#5952](https://github.com/agentscope-ai/QwenPaw/issues/5952), [#5965](https://github.com/agentscope-ai/QwenPaw/issues/5965)):** The desktop PyInstaller bundle is missing necessary scripts modules, breaking the `Glob` tool and auto-memory. A fix is proposed in PR [#5997](https://github.com/agentscope-ai/QwenPaw/pull/5997).
    - **V1 to V2 Data Migration ([#5964](https://github.com/agentscope-ai/QwenPaw/issues/5964), [#5967](https://github.com/agentscope-ai/QwenPaw/issues/5967)):** Users upgrading from v1 find their chat history and configurations are lost or corrupted.

### 6. Feature Requests & Roadmap Signals

While bug fixes dominate, two significant feature requests indicate user needs for a more mature platform.

- **Cross-Channel Session Handoff ([#5999](https://github.com/agentscope-ai/QwenPaw/issues/5999)):** This is a sophisticated request for enterprise users. The user wants to continue a session from the Console to Feishu (Lark) and back. It signals a need for a **unified session management layer** that is channel-agnostic. This is likely to be a roadmap item for v2.1 or v2.2.
- **Improved UI/UX & Tool Governance ([#5955](https://github.com/agentscope-ai/QwenPaw/issues/5955)):** Users are unhappy with the new governance (approval) model for tools, finding it too intrusive. They specifically request a "whitelist" mode for tools, suggesting a move towards a more user-friendly permissions system.

### 7. User Feedback Summary

User sentiment is currently **negative**, reflecting the severity of the v2.0 regressions.

- **Key Pain Points:**
    - **"Almost Unusable" on Windows:** The sandbox recursion issue is a total blocker.
    - **"Endless Approval Prompts":** The new governance model is described as "非常浪费时间" (extremely time-wasting), even for simple `read` operations ([#5994](https://github.com/agentscope-ai/QwenPaw/issues/5994)).
    - **"Lost My History":** The data migration issues are causing a loss of trust and confidence in the upgrade path.
    - **"Why can't I find new skills?":** A community member shares detailed steps showing that newly added skills are not recognized by the system even after a restart ([#6001](https://github.com/agentscope-ai/QwenPaw/issues/6001)), pointing to a core discovery and registration bug.
- **Underlying Need:** The community wants the stability and reliability of v1.x with the new features of v2.0. The current release feels rushed, sacrificing core stability for new functionality.

### 8. Backlog Watch

- **Long-Standing PR: Windows GUI Automation ([#5187](https://github.com/agentscope-ai/QwenPaw/pull/5187)):** This feature PR for `computer_use` on Windows has been open since June 14. It is a critical feature for parity with other agents but remains unmerged. Its long open status may be a concern for Windows users.
- **Unanswered Critical Bug: `qwenpaw doctor` Fails ([#5983](https://github.com/agentscope-ai/QwenPaw/issues/5983)):** A simple but important tooling issue where the built-in diagnostic tool `qwenpaw doctor` itself fails. While a minor code fix, its existence creates a bad user experience for troubleshooting.
- **Persistent Module Error: `No module named 'agentscope.tool._builtin._scripts'`:** This bug appears in multiple issues ([#5952](https://github.com/agentscope-ai/QwenPaw/issues/5952), [#5965](https://github.com/agentscope-ai/QwenPaw/issues/5965)). While PR [#5997](https://github.com/agentscope-ai/QwenPaw/pull/5997) attempts a fix, the need to patch a PyInstaller bundle suggests a systemic problem in the build process that requires a more thorough review.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-07-13

## Today’s Overview

The project is in an **active development phase** with high contributor engagement. Over the past 24 hours, 12 issues were updated (11 open, 1 closed) and **50 pull requests** saw activity (48 open, 2 merged/closed). No new releases were cut. The majority of activity centres on **bug fixes for high‑severity workflow blockers** (context budget overflow, unbounded memory growth, provider‑specific failures) and **large feature additions** (Inkbox channel, memory content scanning, webhook verification). Several PRs are blocked waiting on author responses (`needs‑author‑action`), which may slow momentum. Overall project health is robust but strained by several P1 bugs that remain unmerged.

## Releases

No new releases were published today.

## Project Progress

- **Closed issue:** [#8653](https://github.com/zeroclaw-labs/zeroclaw/issues/8653) — *Auto‑resume the most recent Code session on pane entry* was closed. This enhancement (priority P3) now lets ZeroCode’s Code pane restore the last usable session by default, reducing manual resume steps.
- **Two PRs were merged or closed** (exact titles not shown in the top‑20 list). The remaining 48 open PRs indicate ongoing review and revision, with many tagged `needs‑author‑action`.

No major features were fully merged today. Notable PRs still in flight include a **native Inkbox channel** (#8384, size XL), **in‑app upgrade with auto‑restart** (#8173, size L), and a **split‑history loop refactor** (#8784, size L) that rewires the agent’s mutable history contract.

## Community Hot Topics

| Issue / PR | Discussion | Underlying Need |
|------------|-----------|-----------------|
| [#5808](https://github.com/zeroclaw-labs/zeroclaw/issues/5808) — Default 32k context budget exceeded by system prompt + tool definitions on iteration 1 | 8 comments, risk high | Users cannot run default config without immediate context trimming; workflow is blocked on first turn. |
| [#6055](https://github.com/zeroclaw-labs/zeroclaw/issues/6055) — Slack: hydrate thread context from `conversations.replies` on first mention | 6 comments, risk medium | Slack users want full thread history without re‑@mentioning the bot; improves conversational continuity. |
| [#6641](https://github.com/zeroclaw-labs/zeroclaw/issues/6641) — Turn‑level OTel trace correlation | 5 comments, risk medium | Developers need end‑to‑end traceability for debugging multi‑turn agent runs; currently spans are scattered. |
| [#8642](https://github.com/zeroclaw-labs/zeroclaw/issues/8642) — MCP/tool‑schema cloning drives unbounded RSS growth in agent loop | 2 comments, risk high | Memory leak in the agent loop causes OOM on long‑running sessions; split from #5542. |

The most active threads reveal **two core pain points**: (1) runtime/memory constraints that block out‑of‑the‑box usage, and (2) desire for richer contextual awareness in Slack and telemetry observability.

## Bugs & Stability

### S1 – Workflow Blocked (highest severity)

| Bug | Description | Fix PR Exists? |
|-----|-------------|----------------|
| [#5808](https://github.com/zeroclaw-labs/zeroclaw/issues/5808) | Default 32k context budget exceeded ~3.3× on first turn → perpetual preemptive trim | No. PR [#8784](https://github.com/zeroclaw-labs/zeroclaw/pull/8784) refactors history loop contract but does not directly address budget sizing. |
| [#8642](https://github.com/zeroclaw-labs/zeroclaw/issues/8642) | MCP/tool‑schema cloning causes unbounded RSS growth | No direct fix PR yet. Daemon heartbeat worker fix [#8866](https://github.com/zeroclaw-labs/zeroclaw/pull/8866) shares MCP registry but does not resolve cloning. |
| [#9016](https://github.com/zeroclaw-labs/zeroclaw/issues/9016) | OpenAI tool turns fail when Chat Completions rejects reasoning effort (e.g., `gpt-5.6-sol`) | No. |
| [#9019](https://github.com/zeroclaw-labs/zeroclaw/issues/9019) | OpenAI Responses provider hardcodes `vision = false`, rejecting image input | No. |

### S2 – Degraded Behavior

| Bug | Description | Fix PR Exists? |
|-----|-------------|----------------|
| [#9017](https://github.com/zeroclaw-labs/zeroclaw/issues/9017) | `--config-dir` flag ignored during CLI locale detection; help text translated before flag is parsed | No. |

### Other Bugs with Active Fix PRs

| Bug | Description | Fix PR |
|-----|-------------|--------|
| [#9016](https://github.com/zeroclaw-labs/zeroclaw/issues/9016) (S1) – also see above | – | No PR yet. |
| [#8801](https://github.com/zeroclaw-labs/zeroclaw/issues/8801?) (not in list) | – | PR [#8931](https://github.com/zeroclaw-labs/zeroclaw/pull/8931) sanitizes outbound tool‑call arguments to prevent 400 errors on OpenRouter‑routed upstreams. |
| Gemini thought signature loss | – | PR [#8935](https://github.com/zeroclaw-labs/zeroclaw/pull/8935) preserves `ToolCall.extra_content` for Gemini multi‑turn workflows. |
| Anthropic timeout hardcoded to 120s | – | PR [#8947](https://github.com/zeroclaw-labs/zeroclaw/pull/8947) wires `provider_timeout_secs` config. |

## Feature Requests & Roadmap Signals

- **Slack Events API mode** ([#9022](https://github.com/zeroclaw-labs/zeroclaw/issues/9022)) – Request for an HTTP Request URL receive path alongside existing polling and Socket Mode. Likely to be considered for v0.8.4 or v0.9.0 given growing Slack‑centric usage.
- **Session rewind and fork‑from‑message workflows** ([#9020](https://github.com/zeroclaw-labs/zeroclaw/issues/9020)) – ZeroCode enhancement to recover from turn‑level failures without starting a new conversation. High priority (P2, risk high) and filed with “zerocode” tag, suggesting imminent implementation.
- **Operator UX Onboarding, Pairing & Self‑Service** ([#9009](https://github.com/zeroclaw-labs/zeroclaw/issues/9009)) – A roadmap epic tracker for the Operator UX milestone. Indicates near‑term focus on making the web dashboard more self‑service for operators.
- **OTel turn‑level trace correlation** ([#6641](https://github.com/zeroclaw-labs/zeroclaw/issues/6641)) – Status “in‑progress”; likely to land in v0.8.4.
- **Memory content scanning at write/recall** ([#8984](https://github.com/zeroclaw-labs/zeroclaw/pull/8984)) – Large PR that adds a content‑screening layer, enforcing security policies uniformly across all memory backends. A strong signal for enterprise‑grade safety features.

**Prediction for next release (v0.8.3 / v0.8.4):** The OTel correlation feature (#6641) and Slack thread hydration (#6055) are strong candidates. The ZeroCode session‑rewind (#9020) may also slip in if progress continues.

## User Feedback Summary

- **Pain points:**
  - **Default configuration is unusable** – #5808 shows the 32k context budget is too small for any real conversation, leading to constant trimming and degraded quality.
  - **Memory growth crashes** – #8642 reports OOMs in WSL2 and long‑running agent sessions due to tool‑schema cloning.
  - **Provider incompatibility** – OpenAI Responses (#9019) and tool‑call arguments (#9016, #8931) cause unexplained 400 errors, frustrating users who rely on OpenAI‑compatible backends.
  - **Slack integration gaps** – #6055 highlights that thread history is not automatically hydrated, forcing manual re‑@mentions.
  - **CLI configuration confusion** – #9017 shows that locale detection ignores the `--config-dir` flag, causing translated help to use the wrong config path.

- **Use cases driving new features:**
  - Scale‑to‑zero deployments needing Slack Events API over HTTP (#9022).
  - Operators wanting full dashboard‑based upgrade/restart (#8173).
  - Telemetry‑aware debugging with OTel (#6641).

- **Satisfaction indicators:** Most bugs are quickly triaged with `status:accepted` and labelled with severity. The project has a healthy number of external contributors (e.g., JordanTheJet, Audacity88, wangmiao0668000666), suggesting a welcoming community. However, the high number of `needs‑author‑action` PRs (11 out of top 20 visible) indicates that review responses are a bottleneck.

## Backlog Watch

**Issues needing maintainer attention:**

| Issue | Age | Risk | Status | Why it matters |
|-------|-----|------|--------|----------------|
| [#5808](https://github.com/zeroclaw-labs/zeroclaw/issues/5808) – Context budget exceeded | ~3 months (Apr 16) | High | Accepted, in‑progress | Fundamental usability blocker. No fix PR yet. |
| [#8642](https://github.com/zeroclaw-labs/zeroclaw/issues/8642) – MCP cloning memory leak | 10 days (Jul 3) | High | Accepted | OOM crashes; split from long‑standing #5542. No assigned PR. |
| [#9016](https://github.com/zeroclaw-labs/zeroclaw/issues/9016) – OpenAI reasoning effort rejection | 1 day | High | Accepted | New S1 bug, no fix PR yet. |

**PRs needing maintainer review or author response:**

| PR | Age | Risk | Notes |
|----|-----|------|-------|
| [#8353](https://github.com/zeroclaw-labs/zeroclaw/pull/8353) – Improve error messages | 17 days (Jun 26) | Low | Stale candidate; `needs‑author‑action` since June 26. |
| [#8784](https://github.com/zeroclaw-labs/zeroclaw/pull/8784) – Split‑history loop refactor | 6 days (Jul 7) | High | Core architecture change; awaits author action. |
| [#8866](https://github.com/zeroclaw-labs/zeroclaw/pull/8866) – Share MCP registry across heartbeat ticks | 5 days (Jul 8) | High | Directly addresses daemon‑side MCP startup storm (#5903). Needs‑author‑action. |
| [#8949](https://github.com/zeroclaw-labs/zeroclaw/pull/8949) – Webhook GET + challenge‑echo for plugin verification | 3 days (Jul 10) | High | Large change (XL); depends on #8862. Needs‑author‑action. |
| [#8984](https://github.com/zeroclaw-labs/zeroclaw/pull/8984) – Memory content scanning | 2 days (Jul 11) | High | XL PR with security implications; needs‑author‑action. |

The backlog is concentrated on **runtime stability** (#5808, #8642) and **large architecture PRs** that require close maintainer guidance to merge. The `stale‑candidate` label on #8353 suggests a lower‑priority item may be left behind.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/boom7sss/agents-radar).*