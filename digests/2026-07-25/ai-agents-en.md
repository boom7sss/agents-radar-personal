# OpenClaw Ecosystem Digest 2026-07-25

> Issues: 462 | PRs: 500 | Projects covered: 13 | Generated: 2026-07-25 03:20 UTC

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

# OpenClaw Project Digest — 2026-07-25

## 1. Today’s Overview
The project is under heavy development and community activity. In the last 24 hours, **462 issues** were updated (356 open, 106 closed) and **500 pull requests** were updated (206 open, 294 merged/closed). This signals rapid iteration with a substantial number of bug fixes and feature integrations landing. No new releases were published today. The maintainers are actively working through a backlog of stability issues, particularly around session state, recovery, and provider-specific failures, as evidenced by the many “clawsweeper-recovery-stuck” labels.

## 2. Releases
*None today.*

## 3. Project Progress
**294 pull requests were merged or closed** in the past 24 hours. While the most-commented PRs (shown below) remain open, the high merge volume indicates many smaller fixes and improvements were finalised. Notable closed/merged PRs from the top-30 list include:

- **[#113467](https://github.com/openclaw/openclaw/pull/113467)** (closed) – `fix(qa): capture multi-session runtime tools` – improves release validation coverage.
- **[#112863](https://github.com/openclaw/openclaw/pull/112863)** (open, large) – `feat(signal): add chat-based setup and account linking` – significant new feature for the Signal channel, likely nearing merge.
- **[#113473](https://github.com/openclaw/openclaw/pull/113473)** (open) – `fix(sqlite): reject schema data loss during upgrades` – addresses the critical #113306 bug.

Other active PRs advance the web UI, gateway session handling, Mattermost deduplication, k8s deployment safety, and MCP app styling. The project is clearly making progress across channels, SQLite storage, and testing infrastructure.

## 4. Community Hot Topics
The most engaged issues and PRs today reveal deep user pain points around reliability:

- **[#102020](https://github.com/openclaw/openclaw/issues/102020)** (16 comments) – “Second message in a session fails with ‘reply session initialization conflicted’.” A cross-channel, position-dependent bug that bricks conversations after the first turn.
- **[#86996](https://github.com/openclaw/openclaw/issues/86996)** (14 comments) – Active Memory + Codex app-server path causes long response latency, hook timeouts, startup aborts, and gateway event-loop stalls. A diamond-lobster-rated P1 issue affecting many users.
- **[#94228](https://github.com/openclaw/openclaw/issues/94228)** (14 comments) – Native Anthropic path: replaying historical `thinking` blocks permanently bricks long tool-use threads with `Invalid signature in thinking block` 400 errors.
- **[#92043](https://github.com/openclaw/openclaw/issues/92043)** (13 comments) – 180s compaction timeout fails identically every turn when legitimate compaction takes longer; partial-progress reuse is missing.
- **[#107220](https://github.com/openclaw/openclaw/issues/107220)** (10 comments, **closed**) – Fatal gateway crash-loop on 2026.7.1 upgrade due to legacy memory sidecar `meta`/`chunks` conflicts being treated as fatal.

**Underlying needs**: Users are experiencing session bricking, permanent lock-ups, and silent failures that require manual recovery. The community is demanding more resilient session initialization, proper back-pressure on compaction, and transparent fallback behaviour.

## 5. Bugs & Stability
**High-severity bugs (P0/P1) reported or updated today**:

| Issue | Severity | Summary | Fix PR exists? |
|-------|----------|---------|----------------|
| [#113306](https://github.com/openclaw/openclaw/issues/113306) | P1 | SQLite snapshot restore lacks end-to-end crash and identity guarantees (new, 8 comments) | [#113473](https://github.com/openclaw/openclaw/pull/113473) (open) |
| [#102020](https://github.com/openclaw/openclaw/issues/102020) | P1 (bug) | Second message fails with session initialization conflict (16 comments) | No linked PR |
| [#86996](https://github.com/openclaw/openclaw/issues/86996) | P1 | Active Memory + Codex causes long latency and crash loops (14 comments) | No linked PR |
| [#94228](https://github.com/openclaw/openclaw/issues/94228) | P1 | Anthropic thinking block bricks long tool-use threads (14 comments) | No linked PR |
| [#92043](https://github.com/openclaw/openclaw/issues/92043) | P1 | 180s compaction timeout with no partial-progress reuse (13 comments) | No linked PR |
| [#90378](https://github.com/openclaw/openclaw/issues/90378) | P0 | Cron store silently migrated to SQLite on upgrade, default `delivery.mode` causes channel errors (8 comments) | No linked PR |
| [#98528](https://github.com/openclaw/openclaw/issues/98528) | P1 (closed) | Tool output returns empty after first call per turn (regression in 2026.6.11) | Closed as resolved |
| [#107220](https://github.com/openclaw/openclaw/issues/107220) | P0 (closed) | Gateway crash-loop on 2026.7.1 startup due to memory sidecar conflicts | Closed as fixed |

Many of these bugs carry the **“clawsweeper-recovery-stuck”** label, indicating recovery is blocked for some affected users. The regression surfaced in the 2026.7.x upgrade cycle appears particularly disruptive.

## 6. Feature Requests & Roadmap Signals
**Top feature-request issues with high engagement**:

- **[#10687](https://github.com/openclaw/openclaw/issues/10687)** – Fully dynamic model discovery (OpenRouter + beyond) – 10 comments, P2. Essential for fast-moving catalogs.
- **[#110950](https://github.com/openclaw/openclaw/issues/110950)** (closed) – “Everything is a cron” – unify heartbeat, watchers, and scheduled automation. 10 comments, closed as designed/implemented? Possibly merged into roadmap.
- **[#7722](https://github.com/openclaw/openclaw/issues/7722)** – Filesystem sandboxing config – 10 comments, P2, security focus.
- **[#12219](https://github.com/openclaw/openclaw/issues/12219)** – Skill Permission Manifest Standard – 6 comments, P2, security.
- **[#46812](https://github.com/openclaw/openclaw/issues/46812)** – Pinned context panel in Control UI – 6 comments, P2.
- **[#46058](https://github.com/openclaw/openclaw/issues/46058)** – Android chat-first surface – 6 comments, P2 (discussion).
- **[#45758](https://github.com/openclaw/openclaw/issues/45758)** – YAML config file support – 8 comments, P3.

**Predictions for next release**: Dynamic model discovery (especially for OpenRouter) is frequently requested and aligns with the provider-diversity needs seen in bugs. The “Everything is a cron” unification already had a closed/merged PR signal (#110950). Filesystem sandboxing and permission manifests are likely longer-term, but security incidents (as noted in #12219) may bump their priority.

## 7. User Feedback Summary
- **Pain points**: Frequent session bricking, silent fallbacks, compaction failures, and upgrade regressions frustrate power users. Multiple reports of “works once then breaks” patterns across channels (Telegram, Signal, direct chats). The 2026.7.1 release introduced crash-loops for several users, causing trust erosion.
- **Use cases**: Users rely on OpenClaw for long-running tool-use threads, multi-turn conversations with active memory, and cross-channel (Telegram, Discord, Mattermost) operations. They need predictable and recoverable state.
- **Satisfaction**: High engagement in issues and PRs indicates a dedicated user base that values the project’s capabilities but is vocal about reliability gaps. Positive reactions (👍) on many issues show community investment in fixes.

## 8. Backlog Watch
Issues that have been open for **months** with substantial community input and “needs-maintainer-review” labels:

| Issue | Created | Comments | Labels |
|-------|---------|----------|--------|
| [#67419](https://github.com/openclaw/openclaw/issues/67419) | 2026-04-15 | 10 | P2, session-context bloat, diamond lobster |
| [#7722](https://github.com/openclaw/openclaw/issues/7722) | 2026-02-03 | 10 | P2, filesystem sandboxing, security |
| [#10687](https://github.com/openclaw/openclaw/issues/10687) | 2026-02-06 | 10 | P2, dynamic model discovery, platinum hermit |
| [#47975](https://github.com/openclaw/openclaw/issues/47975) | 2026-03-16 | 10 | P1, subagent sessions persist, stale |
| [#45494](https://github.com/openclaw/openclaw/issues/45494) | 2026-03-13 | 9 | P1, cron jobs time out instead of fast-failing, stale |
| [#77298](https://github.com/openclaw/openclaw/issues/77298) | 2026-05-04 | 5 | P2, cron consecutiveErrors increments on gateway restart |

These issues have not seen a maintainer decision or fix PR in weeks to months, despite high impact. The “needs-maintainer-review” or “needs-product-decision” labels suggest they are awaiting triage. Prioritising these could address long-standing user frustrations.

**PRs needing maintainer attention** (marked “needs proof” or “waiting on author”):
- [#113473](https://github.com/openclaw/openclaw/pull/113473) – SQLite upgrade safety (critical for #113306)
- [#112958](https://github.com/openclaw/openclaw/pull/112958) – Live subtitles for session preambles
- [#103148](https://github.com/openclaw/openclaw/pull/103148) – Enforce session ownership (security)
- [#110902](https://github.com/openclaw/openclaw/pull/110902) – Expose Talk activity to plugins

---

*Generated from OpenClaw GitHub activity data for 2026-07-25.*

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report — AI Agent Open-Source Ecosystem
**Date: 2026-07-25** | **Prepared for: Technical Decision-Makers & Developers**

---

## 1. Ecosystem Overview

The personal AI assistant open-source landscape is experiencing a period of **rapid, volatile maturation**. Projects across the board are shipping major releases (v2.0 in CoPaw, v0.8→0.9 in ZeroClaw, imminent v0.3.0 in NanoBot), but this velocity is creating **significant stability debt**—migration regressions, session-bricking bugs, and security gaps are common themes. The ecosystem is fragmenting along architectural lines: **extensible gateway platforms** (OpenClaw, IronClaw, ZeroClaw) versus **turnkey WebUI agents** (NanoBot, LobsterAI, CoPaw). A strong convergence is emerging around MCP (Model Context Protocol) integration, real-time streaming, and multi-channel support (Telegram, Slack, Discord, WeChat). However, **user trust is fragile**—several projects show patterns of "works once, then breaks" behavior, and security vulnerabilities (plaintext API keys, workspace sandbox escapes) are being discovered faster than they can be patched.

---

## 2. Activity Comparison

| Project | Issues Updated (Open/Closed) | PRs Updated (Open/Merged) | Release Today | Health Score* | Notes |
|---------|------------------------------|---------------------------|---------------|---------------|-------|
| **OpenClaw** | 462 (356 open, 106 closed) | 500 (206 open, 294 merged) | ❌ | ⚠️ **Cautious** | High velocity but deep reliability debt; P0/P1 bugs widespread |
| **NanoBot** | 2 (1 open, 1 closed) | 24 (5 open, 19 merged) | ❌ (v0.3.0 imminent) | ✅ **Strong** | Focused sprint; rapid fix turnaround |
| **Hermes Agent** | 50 (42 open, 8 closed) | 50 (47 open, 3 merged) | ❌ | ⚠️ **Moderate** | Balanced bug-fix/feature mix; Windows regression concern |
| **PicoClaw** | 2 (1 open, 1 closed) | 8 (1 open, 7 merged) | ❌ | ✅ **Healthy** | Quick-response culture; security hardening merged |
| **NanoClaw** | 0 | 7 (6 open, 0 merged) | ❌ | ⏸️ **Stalled** | Consolidation phase; no concrete merges today |
| **NullClaw** | 0 | 0 | ❌ | ⏸️ **Inactive** | No activity in 24h |
| **IronClaw** | 32 (25 open, 7 closed) | 50 (30 open, 20 merged) | ❌ | ✅ **Strong (pre-v1)** | High-intensity sprint; bug-bash findings filed |
| **LobsterAI** | 19 (18 open, 1 closed) | 8 (7 open, 1 merged) | ✅ (v2026.7.23) | ⚠️ **At-risk** | Growing stale backlog; security PRs unmerged for 3 months |
| **Moltis** | 0 | 3 (3 open, 0 merged) | ❌ | ⏸️ **Stable baseline** | Refinement phase; no community disruption |
| **CoPaw** | 45 (23 open, 22 closed) | 30 (19 open, 11 merged) | ✅ (v2.0.1) | ⚠️ **Mixed** | New platform launches but regressions emerging |
| **ZeptoClaw** | 2 (1 open, 1 closed) | 2 (1 open, 1 merged) | ❌ | ✅ **Niche healthy** | Small but responsive; security fix under review |
| **ZeroClaw** | 45 (37 open, 8 closed) | 50 (42 open, 8 merged) | ❌ (v0.8.3) | ⚠️ **Intense but risky** | Architectural RFCs + critical S0 bugs (sandbox escape) |

*Health Score: Qualitative assessment based on fix velocity, backlog size, regression frequency, and community trust signals.

---

## 3. OpenClaw's Position

OpenClaw is the **most feature-complete** and **most community-active** project in the ecosystem, but its reliability challenges create a **high-risk, high-reward profile**.

**Advantages vs. Peers:**
- **Scale of adoption**: 462 daily issue updates and 500 PR updates dwarf every other project. This breadth indicates the largest user base and developer community.
- **Multi-channel depth**: Support for Telegram, Signal, Mattermost, Discord, and more—exceeding ZeroClaw (Telegram focus) and IronClaw (Slack/Telegram priority).
- **Extensibility**: The "claw" architecture (Active Memory, Codex, gateway plugins) is more modular than NanoBot's monolithic WebUI approach or CoPaw's v2.0 PawApp SDK.

**Technical Approach Differences:**
- **Session state complexity**: OpenClaw's heavy use of session-based state (with compression, compaction, recovery) creates more failure surfaces than NanoBot's lighter chat-loop model or IronClaw's Reborn stack.
- **SQLite-centric storage**: Unlike ZeroClaw (which uses a more pluggable store) or CoPaw (which uses agentscope's runtime), OpenClaw's deep SQLite dependency introduces migration risks (#113306, #90378).
- **Recovery mechanisms**: The `clawsweeper-recovery-stuck` label (applied to multiple P1 bugs) suggests a fragile fallback system that other projects have not yet needed to build.

**Community Size Comparison:**
- Active daily contributors: **highest** (OpenClaw) > ZeroClaw ≈ IronClaw > CoPaw > Hermes Agent > NanoBot > LobsterAI > Others.
- However, the signal-to-noise ratio is worse: OpenClaw's bug density per active user appears higher than NanoBot or PicoClaw.

**Risk Assessment for Decision-Makers:** OpenClaw is ideal for teams needing broad channel support and maximum flexibility, but production deployments require **dedicated reliability engineering** (monitoring session recovery, managing compaction timeouts).

---

## 4. Shared Technical Focus Areas

These technical requirements emerge concurrently across **multiple projects**, indicating industry-wide pain points:

| Focus Area | Affected Projects | Specific Pain Points |
|------------|------------------|----------------------|
| **Session Stability & Recovery** | OpenClaw, Hermes Agent, CoPaw, NanoBot | `#102020` (OpenClaw): reply initialization conflicts; `#4064` (NanoBot): mid-turn message context loss; `#5980` (CoPaw): SSH Offline 404 after upgrade |
| **Streaming Reliability** | OpenClaw, NanoBot, PicoClaw, ZeptoClaw, ZeroClaw | Telegram streaming gaps; premature-ACK bugs; non-streamed finalization responses dropping |
| **Security — Secrets Management** | OpenClaw, Hermes Agent, LobsterAI, ZeptoClaw, ZeroClaw | Plaintext API keys in config.yaml (`#69449`); subprocess credential leakage (ZeptoClaw #645); Landlock sandbox escape (ZeroClaw #9247) |
| **MCP Integration Friction** | NanoBot, CoPaw, ZeroClaw, IronClaw | Repeated registration causing `CancelledError` (CoPaw #2999); MCP server unavailability not reported (NanoClaw #3124); "Tool not found" errors (CoPaw #6405) |
| **Upgrade Regression Hell** | OpenClaw, CoPaw, Hermes Agent, LobsterAI | `#107220` (OpenClaw): gateway crash-loop on 2026.7.1; `#69179` (Hermes Agent): "can't run on PC" after update; `#5980` (CoPaw): v2.0 missing features |
| **Channel-Specific Parity** | OpenClaw, PicoClaw, ZeroClaw, Moltis | QQ streaming (PicoClaw #3201); Telegram aliases dropped on reload (ZeroClaw #9236); Slack Block Kit missing (Moltis #1165); WeChat tool-use data dropped (NanoBot #4567) |
| **Cron/Scheduled Task Robustness** | OpenClaw, NanoBot, ZeroClaw, CoPaw, Hermes Agent | Timeout failures (OpenClaw #92043); grace windows (NanoBot #3035); history overwritten (CoPaw #6401); consecutiveErrors on restart (OpenClaw #77298) |
| **Active Memory & Context Bloat** | OpenClaw, CoPaw, ZeroClaw | Long latency/crash loops (OpenClaw #86996); per-agent memory isolation broken (CoPaw #6461); execution-tree iteration budget (ZeroClaw #9323) |

**Emerging Pattern:** The **MCP stack** is the most fragile integration point across the ecosystem, while **session recovery** is the most underserved stability mechanism.

---

## 5. Differentiation Analysis

| Dimension | OpenClaw | NanoBot | Hermes Agent | ZeroClaw | CoPaw | LobsterAI |
|-----------|----------|---------|--------------|----------|-------|-----------|
| **Architecture** | Gateway + plugins + SQLite | Monolithic WebUI + agents | Gateway + desktop app | Plugin catalog + CLI + desktop | Agentscope-based + PawApp SDK | Desktop app + OpenClaw engine |
| **Target User** | Power users / devops | End-users / desktop | Developers / Mac users | CLI/API integrators | Enterprise / content creators | Chinese-market consumers |
| **Primary Channel** | Multi-channel (Telegram, Signal, Mattermost) | WebUI (native desktop emerging) | Desktop + Telegram | CLI + Telegram + DingTalk | WebUI + Zalo + Telegram | Desktop + WeChat/IM |
| **Differentiator** | Max extensibility | UX polish / startup ergonomics | Apple ecosystem / Hermes brand | Security-first (Landlock, ACP) | Content creation (PawApp, Kanban, Creator) | AI skin creation; Wind platform |
| **Weakness** | Complexity → reliability debt | Narrow channel support | Windows support gap; Telegram fragility | High learning curve; S0 bugs | v2.0 migration regressions | Stale security backlog |
| **Release Maturity** | Stable (but turbulent) | Pre-v0.3.0 | Stable (v0.18.x) | Pre-v0.9.0 | v2.0.x (fresh) | Stable (v2026.7.x) |
| **i18n Status** | English-primary | English-primary | English + German (PR) | English-primary | Chinese-primary (Zalo, QQ) | Chinese-primary |

**Key Observation:** The ecosystem splits into **platform vs. application** projects. OpenClaw, ZeroClaw, and IronClaw are platforms (extendable, multi-channel, CLI-heavy). NanoBot, CoPaw, and LobsterAI are applications (opinionated, UI-driven, user-friendly). Hermes Agent sits in-between with a strong desktop brand.

---

## 6. Community Momentum & Maturity

**Tier 1 — High-Velocity Iteration (daily merge volume > 10)**
| Project | Maturity Signal | Risk Signal |
|---------|-----------------|-------------|
| **OpenClaw** | Largest contributor base; 294 PRs merged today | Bug count scales linearly with features; recovery mechanisms stall |
| **IronClaw** | v1 launch checklist active; 20 PRs merged today | Bug-bash findings (10 new P1/P2) indicate quality gap before release |
| **CoPaw** | v2.0.1 shipped with PawApp; 11 PRs merged | Migration regressions (SSH Offline, Profiles missing) erode trust |
| **ZeroClaw** | Architectural RFCs (work lanes, plugin catalog) signal planning maturity | S0 sandbox escape (#9247) and WhatsApp policy bypass (#9348) are critical |

**Tier 2 — Steady Progress (daily merge volume 3–10)**
| Project | Maturity Signal | Risk Signal |
|---------|-----------------|-------------|
| **NanoBot** | v0.3.0 iminent; 19 PRs merged; quick fix cycles | Open issue #4064 (context loss) unresolved; PR #1073 (config preserve) stalled |
| **Hermes Agent** | Balanced bug/feat mix; Telegram hang fixed | Windows crash (#69179) user-facing; 40+ open PRs indicate review bottleneck |
| **PicoClaw** | CPU fix merged same day as report; security patches welcome | Locale PR (#3261) pending; QQ streaming request stale |
| **LobsterAI** | New release shipped (2026.7.23) | 3-month stale security PRs (#1831-1833); growing issue backlog |

**Tier 3 — Stalling / Maintenance (daily merge volume < 3)**
| Project | Signal |
|---------|--------|
| **NanoClaw** | No merges today; 6 open PRs with no community comments; consolidation phase |
| **Moltis** | 3 open PRs (all by same author); zero issues; refinement-only activity |
| **ZeptoClaw** | 1 merge today; security fix under review; niche Telegram focus |
| **NullClaw / TinyClaw** | No activity; effectively dormant |

---

## 7. Trend Signals for AI Agent Developers

**1. Streaming is non-negotiable, but implementation quality varies wildly.**
- Telegram users across **five projects** (OpenClaw, NanoBot, PicoClaw, ZeptoClaw, ZeroClaw) report streaming failures (truncated outputs, premature termination, broken markdown). Developers should invest in **progressive delivery with backpressure** and **UTF-16 safe splitting** (as ZeptoClaw #648 demonstrates).

**2. Security posture is fragmented — treat this as a differentiator.**
- Only **ZeroClaw** has a Landlock-based sandbox; **Hermes Agent** fixed plaintext API keys today; **LobsterAI** has three unmerged security PRs from April. For enterprise adoption, this is a **decision-breaking gap**. Projects without secret scrubbing (ZeptoClaw #645), workspace isolation (ZeroClaw #9247), or config encryption (Hermes Agent #69449) should not be deployed in production.

**3. The "MCP bottleneck" is real.**
- Every project integrating MCP (CoPaw, NanoBot, ZeroClaw, IronClaw) reports **registration errors, CancelledError loops, and silent failures**. The ecosystem needs a standardized MCP SDK or at least a shared error contract. Developers building on MCP should budget 2–3x engineering time for integration.

**4. v2.0 migrations are risky — user trust is destroyed by missing features.**
- CoPaw's v2.0.0 shipped without SSH Offline and Profiles support (#5980). OpenClaw's 2026.7.1 caused gateway crash-loops (#107220). **The lesson**: never cut features in a major version without a migration guide and regression test suite covering the top-10 user workflows.

**5. Real-time collaboration and "computer use" capabilities are emerging.**
- IronClaw's Skill Self-Creation (#6641), CoPaw's native desktop GUI automation (#6424), and ZeroClaw's multi-host Cua Driver (#71157) signal a shift toward **agent-as-teammate** patterns. Expect these to dominate roadmap in Q3 2026.

**6. Chinese-market projects (CoPaw, LobsterAI, PicoClaw, NanoClaw) are innovating in channels.**
- Zalo Bot (CoPaw #6118), QQ streaming (PicoClaw #3201), Wind platform (LobsterAI) — these channels are underserved in Western-focused projects, creating **arbitrage opportunities** for developers targeting SEA markets.

**7. The "everything is a plugin" direction is gaining consensus.**
- ZeroClaw's RFC #6489 and OpenClaw's "Everything is a cron" (#110950) both advocate for **unified plugin/catalog models**. Developers should design new agents with pluggable skill catalogs and manifest standards (Hermes Agent's Manifest V3, CoPaw's plugin.json).

**Bottom Line for Developers:**
- **If you need production reliability today**: NanoBot (simple use cases), PicoClaw (small footprint), or Hermes Agent (Mac/Telegram) — but expect to patch MCP integrations yourself.
- **If you need maximum extensibility**: OpenClaw (full ecosystem) or ZeroClaw (security-first) — but allocate engineering time for session recovery and bug tracking.
- **If you target Chinese markets**: CoPaw (enterprise) or LobsterAI (consumer) — but prepare for migration pain and security audits.
- **Avoid for production**: LobsterAI (stale security), NullClaw/TinyClaw (inactive), and NanoClaw (stalled).

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest – 2026-07-25

## 1. Today's Overview
NanoBot is in an intense development sprint, with **24 pull requests updated in the last 24 hours** – 19 of which were merged or closed. Two issues were active, one closed and one still open. The project is clearly preparing for a **v0.3.0 release** (PR #5081), with numerous feature additions, bug fixes, and WebUI refinements merged today. No new releases were published, but the volume of activity signals a release may be imminent. The community is responsive, contributing both code and bug reports, though a few long-standing PRs remain conflicted.

## 2. Releases
**No new releases today.**  
The latest release remains v0.2.2, but the `chore(release): prepare v0.3.0` PR (#5081) was opened and is actively being merged, indicating v0.3.0 is coming very soon.

## 3. Project Progress
Merged/closed PRs today (19 total) advanced the project significantly in several areas:

- **WebUI & UX**  
  - [#5078](https://github.com/HKUDS/nanobot/pull/5078) – Launch first-time setup directly in WebUI (desktop installer) while retaining terminal flow for headless.  
  - [#5077](https://github.com/HKUDS/nanobot/pull/5077) – Model preset switching from the composer (long-press + drag).  
  - [#5076](https://github.com/HKUDS/nanobot/pull/5076) – Honor custom gateway port with Vite dev proxy.  
  - [#5071](https://github.com/HKUDS/nanobot/pull/5071) – Show quoted context after follow-up send.  
  - [#5060](https://github.com/HKUDS/nanobot/pull/5060) – Polish responsive layouts and settings search.  
  - [#5050](https://github.com/HKUDS/nanobot/pull/5050) – Surface hosted X Search (xAI) activity in UI.  
  - [#5031](https://github.com/HKUDS/nanobot/pull/5031) – Fix mobile welcome composer overlap.  
  - [#4963](https://github.com/HKUDS/nanobot/pull/4963) – Unified activity language for agent outputs, Streamdown polish.

- **Agent & Provider**  
  - [#5075](https://github.com/HKUDS/nanobot/pull/5075) – Carry authorized tasks through verification (clear user request = implicit authorization).  
  - [#5074](https://github.com/HKUDS/nanobot/pull/5074) – Inline subagent consultation with `wait` argument.  
  - [#5073](https://github.com/HKUDS/nanobot/pull/5073) – Preserve multimodal tool outputs (text, image, file blocks) when converting OpenAI Responses.  
  - [#5049](https://github.com/HKUDS/nanobot/pull/5049) – Fix non-streamed finalization responses (was skipping final packet).  
  - [#4567](https://github.com/HKUDS/nanobot/pull/4567) – Fix WeChat channel: stream LLM calls + buffer reply to dodge relay bug.

- **Branding & Assets**  
  - [#5080](https://github.com/HKUDS/nanobot/pull/5080) – Migrate README/WebUI assets to SVG.  
  - [#5079](https://github.com/HKUDS/nanobot/pull/5079) – Add SVG logo.

- **Chore & Documentation**  
  - [#5053](https://github.com/HKUDS/nanobot/pull/5053) – Pin migration TODOs to v0.2.4.

## 4. Community Hot Topics
- **Issue #4064** – *Bug: pending mid-turn messages lose sender/channel/chat runtime context*  
  [Link](https://github.com/HKUDS/nanobot/issues/4064)  
  One comment, one 👍. This bug affects message queuing during tool execution, potentially breaking multi-turn conversations. The issue has been open since May and received attention today (updated 2026-07-24). No fix PR is linked yet, so it remains a pain point.

- **Issue #4637** – *Telegram long message splits – trunks prior to the final trunk cannot render*  
  [Link](https://github.com/HKUDS/nanobot/issues/4637)  
  Now closed with 4 comments. The bug caused markdown trunked messages to fail rendering. The closure suggests a fix was deployed (likely via one of today’s merged PRs), but no explicit fix PR is directly linked in the data. This was a significant UX issue for Telegram users.

- **Open PRs with conflict labels**  
  - [#3035](https://github.com/HKUDS/nanobot/pull/3035) – fix(cron): grace window for at tasks (10 min).  
  - [#1073](https://github.com/HKUDS/nanobot/pull/1073) – fix: preserve unknown config keys.  
  Both are marked as having conflicts and have not been merged for weeks/months. They represent community contributions that require maintainer review.

## 5. Bugs & Stability
| Bug | Severity | Status | Fix PR |
|-----|----------|--------|--------|
| Telegram long message splits (#4637) | High – broken rendering for markdown | Closed today | Not directly linked, but likely resolved |
| Pending mid-turn messages lose context (#4064) | High – can break multi-turn agent conversations | Open, updated today | No fix PR yet |
| Non-streamed finalization responses skipped (#5049) | Medium – empty responses in non-stream mode | Fixed today | [#5049](https://github.com/HKUDS/nanobot/pull/5049) |
| WeChat non-stream relay bug (#4567) | Medium – tool_use missing in Anthropic relays | Fixed today | [#4567](https://github.com/HKUDS/nanobot/pull/4567) |
| Mobile welcome composer overlap (#5031) | Low – UI issue on mobile | Fixed today | [#5031](https://github.com/HKUDS/nanobot/pull/5031) |
| Custom Vite port ignored (#5076) | Low – dev UX | Fixed today | [#5076](https://github.com/HKUDS/nanobot/pull/5076) |

## 6. Feature Requests & Roadmap Signals
Several user-facing features merged today point toward the **v0.3.0** vision:

- **First-time setup in WebUI** (#5078) – lowers barrier for new users.
- **Inline subagent consultation** (#5074) – enables agent-to-agent calls with wait.
- **Carry authorized tasks through verification** (#5075) – reduces confirmation friction for coding/producing tasks.
- **Model preset switching from composer** (#5077) – power-user UX improvement.
- **xAI X Search integration** (#5050) – new provider capability.
- **Polished agent output language** (#4963) – better readability of tool activities.

The open PR #4696 (Smooth WebUI streaming Markdown reveal) is a community-driven feature that hasn’t been merged yet – it may land in a subsequent patch or v0.3.x.

## 7. User Feedback Summary
- **Telegram users** experienced broken rendering for long markdown messages – now resolved (#4637 closed).  
- **WeChat users** had tool-use data silently dropped; fix merged (#4567).  
- **Power users** request better config preservation – PR #1073 (open) addresses keys lost on save.  
- **Agent reliability** is a recurring theme: the open issue #4064 (lost context) shows that mid-turn message handling is fragile, especially when tools produce pending messages.

Overall sentiment appears positive given the rapid fix turnaround and feature additions, but the unresolved context-loss bug could cause dissatisfaction in complex multi-step workflows.

## 8. Backlog Watch
- **PR #1073** – *fix: preserve unknown config keys*  
  [Link](https://github.com/HKUDS/nanobot/pull/1073)  
  Opened Feb 23, still conflicted. Affects users with custom provider configurations. Needs maintainer conflict resolution.

- **PR #3035** – *fix(cron): grace window for at tasks*  
  [Link](https://github.com/HKUDS/nanobot/pull/3035)  
  Opened Apr 11, still conflicted. Addresses LLM delay causing scheduled tasks to be skipped. Important for time-sensitive automation.

- **Issue #4064** – *pending mid-turn messages lose context*  
  [Link](https://github.com/HKUDS/nanobot/issues/4064)  
  Open since May 29, no fix PR. This is the highest-priority open bug. If no resolution in v0.3.0, community trust could erode.

- **PR #4696** – *Smooth WebUI streaming Markdown reveal*  
  [Link](https://github.com/HKUDS/nanobot/pull/4696)  
  Open since Jul 4, no conflicts but not yet merged. Adds natural reading-speed streaming – a nice-to-have that could land after release.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-07-25

## 1. Today’s Overview
The project maintained a high level of activity on 25 July 2026 with **50 issues** and **50 pull requests** updated in the last 24 hours. Of the issues, 42 remain open (active) while 8 were closed; among PRs, 47 are open and only 3 were merged or closed. No new releases were published. The repository saw a balanced mix of bug fixes, feature proposals, and community contributions, with several discussions gaining traction around critical stability issues such as Telegram gateway hangs and Windows Desktop crashes after updates. Maintainers merged targeted fixes for custom endpoint configuration and session fork security, indicating ongoing attention to both user‑reported regressions and proactive security hardening.

## 2. Releases
**None.**  
No new versions of Hermes Agent were released today.

## 3. Project Progress (Merged/Closed PRs Today)
Three pull requests were merged or closed on 25 July:

- **#71141** (CLOSED, `fix: custom endpoint keys go to .env, and Save keeps the whole model list`) — Resolves a dual bug where API keys were stored in plaintext in `config.yaml` and the Save action discarded all but one discovered model. Now keys are written to `.env` and the full model list from the Test button is preserved.  
  [NousResearch/hermes-agent PR #71141](https://github.com/NousResearch/hermes-agent/pull/71141)

- **#71144** (CLOSED, `fix(model_switch): don't send a picker prefix as the custom provider model id`) — Rebases and merges a fix ensuring that the model‑switch picker does not accidentally pass a UI prefix as the actual model ID when using custom providers.  
  [NousResearch/hermes-agent PR #71144](https://github.com/NousResearch/hermes-agent/pull/71144)

- **#6480** (CLOSED, `Replace memo-based Apple Notes skill with native osascript workflow`) — Removes the dependency on the third‑party `memo` CLI for Apple Notes skill, replacing it with a native `osascript` workflow that reduces friction on macOS.  
  [NousResearch/hermes-agent PR #6480](https://github.com/NousResearch/hermes-agent/pull/6480)

Additionally, several older PRs (e.g., #26537, #6647, #39947, #68908) remained open but received new reviews or comments today, signalling continued maintainer attention.

## 4. Community Hot Topics
The following issues and pull requests generated the most discussion (comments or reactions) in the past 24 hours:

- **#67498** (CLOSED, P1, `Telegram gateway hangs at 'Connecting to Telegram (attempt 1/8)'` — 6 comments, 1 👍)  
  A long‑standing regression that persisted even after a documented workaround. The closure suggests a fix was applied, but the high severity and community engagement indicate this was a critical pain point for Telegram users.  
  [NousResearch/hermes-agent Issue #67498](https://github.com/NousResearch/hermes-agent/issues/67498)

- **#60144** (CLOSED, P2, `Desktop boot fails when platform adapter import or MCP registration exceeds 15s readiness timeout` — 6 comments)  
  Affected Windows users with many adapters. The closure today implies the timeout or import logic was adjusted.  
  [NousResearch/hermes-agent Issue #60144](https://github.com/NousResearch/hermes-agent/issues/60144)

- **#69449** (CLOSED, P3, `Custom endpoint API key stored in plaintext in config.yaml` — 5 comments)  
  A security concern that was addressed in the same fix as PR #71141. Community welcomed the move to `.env` storage.  
  [NousResearch/hermes-agent Issue #69449](https://github.com/NousResearch/hermes-agent/issues/69449)

- **#71157** (OPEN, P3, `Multi-host computer_use via paired Cua Driver hosts` — 3 comments)  
  A new feature request that already received engagement. The need to drive multiple physical desktops from one Hermes instance points to advanced automation use cases.  
  [NousResearch/hermes-agent Issue #71157](https://github.com/NousResearch/hermes-agent/issues/71157)

- **#53179** (OPEN, P2, `Duplicate message rendering with local llama.cpp server` — 3 comments)  
  A usability bug that continues to attract user reports; no fix PR is yet linked.  
  [NousResearch/hermes-agent Issue #53179](https://github.com/NousResearch/hermes-agent/issues/53179)

Underlying needs: Users are demanding reliable connectivity (especially for Telegram), security of API keys, and advanced remote‑machine orchestration. The most active threads revolve around platform‑specific regressions (Windows, Telegram) and feature parity across adapters.

## 5. Bugs & Stability
Several bugs of note were reported or updated today, ranked by severity:

**P1 (Critical)**  
- **#69179** (OPEN, `"This app can't run on your computer" after update on Windows`) — A severe update regression that bricks the Desktop app entirely on Windows. No fix PR yet, but issue has 1 👍 and a screenshot.  
  [NousResearch/hermes-agent Issue #69179](https://github.com/NousResearch/hermes-agent/issues/69179)

**P2 (High)**  
- **#69230** (OPEN, `Desktop app: Remote gateway reachability check fails despite healthy server`) — Misleading error in the gateway setup UI, requiring more investigation.  
  [NousResearch/hermes-agent Issue #69230](https://github.com/NousResearch/hermes-agent/issues/69230)
- **#42536** (OPEN, `Z.AI/GLM provider endpoint probe order causes Coding Plan users to be charged incorrectly`) — Impacts billing for a subset of users, no fix yet.  
  [NousResearch/hermes-agent Issue #42536](https://github.com/NousResearch/hermes-agent/issues/42536)
- **#70586** (CLOSED, `session with async_delegation_complete messages fails to reopen – TypeError`) — Was fixed in a recent commit; now closed.  
  [NousResearch/hermes-agent Issue #70586](https://github.com/NousResearch/hermes-agent/issues/70586)

**P3 (Moderate)**  
- **#71131** (OPEN, `Real-time TPS display in Desktop app`) — Feature request, but multiple users commented that the lack of speed feedback is a minor stability annoyance.  
  [NousResearch/hermes-agent Issue #71131](https://github.com/NousResearch/hermes-agent/issues/71131)
- **#63871** (OPEN, `TTFB watchdog token estimator reports ~1.9M tokens while API prompt_tokens stays ~90-175K`) — An over‑estimation bug that could cause unnecessary request cancellations.  
  [NousResearch/hermes-agent Issue #63871](https://github.com/NousResearch/hermes-agent/issues/63871)

**Security**  
- **#71163** (OPEN PR, `fix(gateway): stop API session fork from accepting path-traversal session ids`) — A proactive security fix to prevent directory creation via sandbox join; awaiting merge.  
  [NousResearch/hermes-agent PR #71163](https://github.com/NousResearch/hermes-agent/pull/71163)
- **#69449** (CLOSED) — Plaintext key storage fixed today.

Overall stability is mixed: critical Windows regression and Telegram hang were addressed, but fresh P1 issues emerged, and the backlog of P2 platform‑specific bugs remains sizable.

## 6. Feature Requests & Roadmap Signals
Several user‑requested features surfaced or gained momentum today:

- **Multi‑host computer_use** (#71157, PR #71160) — A documented design proposal to allow Hermes to control other machines via Cua Driver, currently blocked on upstream Cua capabilities. Likely to be a candidate for the next major version if the dependency stabilises.
- **Real‑time TPS display** (#71131) — A simple UX enhancement already submitted as a feature request; could be implemented quickly and might appear in a minor patch.
- **Discord voice‑channel participation** (#33683) — Ongoing interest, but no concrete implementation updates. Unlikely for immediate roadmap.
- **German locale** (PR #71161) — Desktop translation into German was contributed and is under review; could land in the next release.
- **Approval bar truncation fix** (#61249) — Several users expressed frustration that multi‑line diffs are invisible in the Desktop approval UI; a candidate for a bugfix release.
- **Per‑session skill auto‑injection** (#26709) — A configuration‑level feature that could reduce friction for power users; low priority but often requested.

**Prediction:** The next minor version (v0.18.3 or v0.19.0) will likely include the custom endpoint security fix (#71141), the model‑picker fix (#71144), the Windows‑update crash fix (#69179) once diagnosed, and possibly the German locale and the session‑fork security hardening.

## 7. User Feedback Summary
Real user pain points and use‑case highlights from today’s data:

- **Pain Points:**
  - **Telegram connectivity** — The hang on `Connecting to Telegram (attempt 1/8)` frustrated many users even after applying a known workaround (#67498). The fix is now closed, so satisfaction should improve.
  - **Windows Desktop update breakage** — App becomes completely unusable (“This app can’t run on your computer”) after an update (#69179). Users report being left without access.
  - **API key security** — Users discovered that custom endpoint keys were saved in plaintext in a YAML file (#69449), raising trust concerns.
  - **Duplicate message rendering** — With local `llama.cpp`, responses are shown twice (#53179), degrading chat UX.
  - **Cron job output loss** — On Windows, emoji in cron output are silently dropped (#42384), a platform‑specific annoyance.

- **Use Cases:**
  - Advanced users driving multiple physical machines from one Hermes instance (#71157).
  - Researchers installing community skills blocked by false‑positive guard rules (#60709).
  - Teams using Mattermost seeking interactive approval buttons – long‑standing PR #26537 still open.

- **Satisfaction:**
  - Community members actively contribute translations (German locale #71161) and UX improvements (Esc back to chat #70808), indicating a healthy contributor base.
  - The prompt closure of the plaintext API key issue (#69449) via PR #71141 within 3 days of report was well received.

## 8. Backlog Watch
A number of issues and PRs have remained idle for extended periods and need maintainer attention:

- **#10878** (OPEN, `memory_tool _read_file does not strip BOM` — created 16 Apr, last updated 25 Jul)  
  A low‑effort fix for a bug that silently corrupts system prompts when MEMORY.md has a UTF‑8 BOM.  
  [NousResearch/hermes-agent Issue #10878](https://github.com/NousResearch/hermes-agent/issues/10878)

- **#18083** (OPEN, `Over-broad DANGEROUS_PATTERNS regex flags every absolute path as 'delete in root path'` — created 30 Apr)  
  A false‑positive in approval logic that blocks legitimate `rm` commands. No PR linked.  
  [NousResearch/hermes-agent Issue #18083](https://github.com/NousResearch/hermes-agent/issues/18083)

- **#26709** (OPEN, `Feature request: support agents.defaults.skills for per-session auto-injection` — created 16 May)  
  Languishes with only one comment. An obvious quality‑of‑life improvement for skill users.  
  [NousResearch/hermes-agent Issue #26709](https://github.com/NousResearch/hermes-agent/issues/26709)

- **#30155** (OPEN, `--replace cross‑kills sibling gateways when multiple profiles share HERMES_HOME` — created 22 May)  
  A critical process management bug that can kill unrelated gateway instances. No movement.  
  [NousResearch/hermes-agent Issue #30155](https://github.com/NousResearch/hermes-agent/issues/30155)

- **#26537** (OPEN, `feat(mattermost): add interactive button support for approvals and prompts` — created 15 May)  
  A large feature PR that brings Mattermost to parity with other adapters. Open for over two months; needs review and decision on approach.  
  [NousResearch/hermes-agent PR #26537](https://github.com/NousResearch/hermes-agent/pull/26537)

- **#6647** (OPEN, `fix: derive delegation api_mode from delegation model, not main model` — created 9 Apr)  
  Important for users mixing Copilot providers with different models. Stalled with no recent activity.  
  [NousResearch/hermes-agent PR #6647](https://github.com/NousResearch/hermes-agent/pull/6647)

These backlog items, if addressed, would significantly improve both stability and developer experience. The disproportionate number of open issues from April–June suggests maintainer bandwidth may be focused on newer regressions rather than long‑standing bugs.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest – 2026-07-25

## 1. Today’s Overview
Project activity remained solid over the past 24 hours, with 8 pull requests updated (7 merged/closed) and 2 issues touched. The community continues to contribute both bug fixes and non-trivial improvements: two security hardening patches from `corporatepiyush` were merged, along with three allocation-reduction refactors. A newly reported CPU spike on the chat input box was fixed on the same day it was opened. No new releases were published, but the steady stream of maintenance and i18n additions (Czech locale merged, zh‑TW translation still open) signals healthy community engagement.

## 2. Releases
**None** – No new versions were published in the last 24 hours.

## 3. Project Progress
Seven pull requests were merged or closed, advancing several areas:

- **Bug fix – chat input box CPU high usage** ([#3293](https://github.com/sipeed/picoclaw/pull/3293)) – Merged. Fixes the issue reported in [#3292](#bug-id-3292) by `Acdfmwaopuio`.
- **Security & robustness hardening** ([#3246](https://github.com/sipeed/picoclaw/pull/3246)) – Merged. Enables MQTT TLS certificate verification by default, adds OAuth timeout configuration, and bounds search reads in memory channels.
- **Performance improvements** – Three PRs from `corporatepiyush` reduce allocations:
  - [`#3245`](https://github.com/sipeed/picoclaw/pull/3245) – Single-pass `escapeXML` in skills loader (replaces three `strings.ReplaceAll` passes).
  - [`#3244`](https://github.com/sipeed/picoclaw/pull/3244) – Replaces five-pass `escapeXML` in seahorse summarization with `strings.NewReplacer`.
  - [`#3243`](https://github.com/sipeed/picoclaw/pull/3243) – Switches seahorse compaction helpers to `strings.Builder`, eliminating O(n²) string concatenation.
- **Discord channel reliability** ([#323](https://github.com/sipeed/picoclaw/pull/323)) – Merged (updated from Feb 2026). Fixes 400 errors caused by message length and improves typing status handling.
- **i18n – Czech locale** ([#3247](https://github.com/sipeed/picoclaw/pull/3247)) – Merged. Adds translations for code wrap options introduced in v0.3.1.

## 4. Community Hot Topics
Only one issue attracted multiple comments:

- **[#3201](https://github.com/sipeed/picoclaw/issues/3201)** – *[Feature] Support streaming output for QQ channel* (4 comments, closed stale). Users expressed a clear desire for real‑time incremental output on QQ, similar to Telegram and WebSocket channels. The issue was auto‑closed after lack of activity but could be revived if maintainers prioritise cross‑platform streaming.

The open PR for Traditional Chinese translations ([#3261](https://github.com/sipeed/picoclaw/pull/3261)) also sees frequent updates (last commit Jul 24) and reflects community interest in broader locale support.

## 5. Bugs & Stability
| Issue | Severity | Status | Fix Available |
|-------|----------|--------|---------------|
| **CPU high when input box focused** ([#3292](https://github.com/sipeed/picoclaw/issues/3292)) | Medium – affects user experience on web interface | Open, reported Jul 24 | **Yes** – PR [#3293](https://github.com/sipeed/picoclaw/pull/3293) merged same day. |
| MQTT TLS insecurity (hardcoded `InsecureSkipVerify: true`) | High – security vulnerability | Fixed via [#3246](https://github.com/sipeed/picoclaw/pull/3246) | Merged |
| Discord 400 errors (message length limit) | Medium – reliability | Fixed via [#323](https://github.com/sipeed/picoclaw/pull/323) | Merged |

No regressions were reported. The quick turnaround on the CPU bug demonstrates strong responsiveness.

## 6. Feature Requests & Roadmap Signals
- **QQ channel streaming** ([#3201](https://github.com/sipeed/picoclaw/issues/3201)) – Requested but closed as stale. Likely to be revisited if QQ adoption grows.
- **Locale additions**: Czech (merged) and Traditional Chinese (still open, [#3261](https://github.com/sipeed/picoclaw/pull/3261)). The project appears to encourage i18n contributions, and the zh‑TW PR is a strong candidate for the next release.
- **Security hardening**: The TLS certificate verification fix suggests a growing emphasis on production‑grade security. Future releases may include more defaults‑to‑secure configurations.

Predictions for next version (v0.3.2): The merged CPU fix, locale additions, and allocation reductions are likely candidates. The zh‑TW PR may be merged if maintainers review it in time.

## 7. User Feedback Summary
- **Performance pain point**: One user reported excessive CPU usage when the chat input box is focused in Firefox ([#3292](https://github.com/sipeed/picoclaw/issues/3292)). This was addressed within hours, indicating that such feedback is acted upon quickly.
- **Feature gap**: A user requested streaming output for the QQ channel ([#3201](https://github.com/sipeed/picoclaw/issues/3201)) – currently only Telegram and WebSocket support this. The absence of comments from maintainers suggests the feature is not yet prioritised.
- **Satisfaction signals**: Several community‑authored PRs (Czech locale, performance refactors) were accepted, implying contributors feel their efforts are valued.

## 8. Backlog Watch
No critical items are languishing. The only open PR is:

- **zh‑TW locale and Traditional Chinese translations** ([#3261](https://github.com/sipeed/picoclaw/pull/3261)) – Open since July 16, last updated July 24, awaiting maintainer review. This is a straightforward new‑feature PR that should not be left stale.

No open issues beyond the newly filed CPU bug (already fixed) appear to require urgent maintainer attention. The project’s triage speed is commendable.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-07-25

## Today’s Overview

Project activity remained moderate over the last 24 hours, with **7 pull requests updated** and **no new issues or releases**. One PR (#3123) was closed—explicitly marked as a mistaken submission (“Wrong PR”)—so no concrete merges occurred. The six open PRs are dominated by bug fixes across the chat, agent-runner, MCP, and template subsystems, along with a single feature addition for per-agent-group timezones. No critical regressions or user-reported bugs surfaced in issues, but the fix pipeline suggests ongoing quality improvements ahead of the next release. Overall, the project appears to be in a consolidation phase, with maintainers addressing technical debt and edge cases rather than pushing major new features.

## Releases

No new releases were published in the last 24 hours. The latest release remains as previously reported.

## Project Progress

Only one pull request was closed today:

- **[PR #3123 – “Pacific changes. Wrong PR.”](nanocoai/nanoclaw PR #3123)** (by iamarunkumark) – Closed without merge. The author acknowledged it was submitted in error. No functional changes were introduced.

No other PRs were merged or closed. The six remaining open PRs represent ongoing work but have not yet been integrated.

## Community Hot Topics

No issues were created or updated in the last 24 hours, and none of the open PRs have received comments or reactions. Interest appears concentrated on the following active fix and feature PRs:

- **[PR #3125 – feat: per-agent-group timezone override](nanocoai/nanoclaw PR #3125)** (by Koshkoshinsk, core-team) – This is the only feature-oriented PR in the queue. It introduces an `--timezone` flag for agent groups, with migration 020 and approval gating for agent callers. The lack of discussion may indicate internal review has not yet started.
- **[PR #3126 – fix(agent-runner): never deliver silence when a nudged chat turn stays bare](nanocoai/nanoclaw PR #3126)** (by glifocat, core-team) – Addresses a silent-response bug in nudged conversations, likely user-facing and important for agent interaction quality.
- **[PR #3122 – fix(opencode): main compatibility, custom-endpoint transport, memory parity](nanocoai/nanoclaw PR #3122)** (by glifocat, core-team) – A multi-faceted compatibility fix for the “opencode” integration, touching transport and memory behavior.

The absence of community comments may reflect that most PRs are driven by the core team and are still in early review stages.

## Bugs & Stability

No new bug reports have been filed via issues. However, the open PRs reveal several stability fixes under active development:

| PR | Description | Severity | Fix Status |
|----|-------------|----------|------------|
| [#3126](nanocoai/nanoclaw PR #3126) | Never deliver silence when a nudged chat turn stays bare | **Medium** – silent responses degrade user trust. Fix PR exists. |
| [#3122](nanocoai/nanoclaw PR #3122) | opencode main compatibility, custom-endpoint transport, memory parity | **Medium** – compatibility break with opencode integration. Fix PR exists. |
| [#3093](nanocoai/nanoclaw PR #3093) | Keep typing active for processing turns | **Low** – UX inconsistency, not a crash. Fix PR exists. |
| [#3124](nanocoai/nanoclaw PR #3124) | Report unavailable MCP servers | **Low-Medium** – missing error feedback on MCP failures. Fix PR exists. |
| [#3090](nanocoai/nanoclaw PR #3090) | Prepend all top-level context Markdown in templates | **Low** – potential template rendering omission. Fix PR exists. |

No regressions or crashes have been identified. The absence of issue reports suggests these fixes are either preemptive or discovered internally.

## Feature Requests & Roadmap Signals

The only new feature in the pipeline is **[PR #3125 – per-agent-group timezone override](nanocoai/nanoclaw PR #3125)**. It adds an optional IANA timezone override stored in `container_configs`, resolved via `resolveGroupTimezone` with fallback to global install timezone. This addresses a clear user need for handling agent groups across different timezones (e.g., scheduling, logging timestamps). Given its core-team authorship and inclusion of a database migration, this feature is likely slated for the next minor release.

No other feature requests were captured in the data. The focus remains on stabilization fixes.

## User Feedback Summary

No direct user feedback (comments, reactions, bug reports) was recorded in the last 24 hours. However, the themes of the open fix PRs hint at common pain points:

- **Silent responses from nudged conversations** (#3126) – Users may experience an unresponsive agent after a nudge, which is disruptive.
- **opencode integration breakage** (#3122) – Users relying on the opencode protocol may have faced compatibility issues.
- **MCP server unavailability not reported** (#3124) – Lack of clear error messages when MCP servers are down, leading to unclear failures.
- **Typing indicator not active** (#3093) – Degraded real-time feedback in chat interfaces.
- **Template context not prepended** (#3090) – Potential missing Markdown context in rendered templates.

These suggest the project is actively listening to operational frustrations, even if formal issue reporting is low.

## Backlog Watch

No long-unanswered issues or PRs require maintainer attention. The oldest open PRs are #3090 and #3093 (both from July 19), which have been updated within the last day, indicating they are still active. No issues exist in the backlog. The project’s issue tracker appears clean, with no forgotten requests.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-07-25

## Today's Overview

The IronClaw project is in a high-activity sprint, with 32 issues and 50 pull requests updated in the last 24 hours. The v1 launch checklist is the dominant theme, with multiple closed launch-blockers (e.g., missing CLI, Slack OAuth redirect, upgrade disabler) and a surge of new bug-bash findings (P1/P2 severity) filed by QA. The release pipeline has not produced a new version today, but internal re-architecting continues via large refactors (process journal kernel, composition extension host). Over 20 PRs were merged or closed, indicating strong forward momentum toward v1.0.0. The project is clearly focused on hardening the Reborn stack and closing the gap between feature-complete and production-ready.

## Releases

No new releases today. The last release was tracked in PR #5598, which is still open and proposes version bumps for `ironclaw_common` (0.4.2 → 0.5.0, breaking) and `ironclaw_skills` (0.3.0 → 0.4.0, breaking). That PR remains unreviewed and unmerged as of this digest.

## Project Progress

20 pull requests were merged or closed today. Key advances:

- **Extension host cleanup** ([PR #6616](https://github.com/nearai/ironclaw/pull/6616), closed) – Moved generic extension-host code out of `ironclaw_reborn_composition` into a dedicated `ironclaw_extension_host`, simplifying the architecture.
- **Default `cargo run` to WebUI serve** ([PR #6663](https://github.com/nearai/ironclaw/pull/6663), closed) – Improves developer experience by launching the Reborn CLI with WebUI out of the box.
- **Capability coverage refinement** ([PR #6664](https://github.com/nearai/ironclaw/pull/6664), closed) – Tightened e2e test counting to avoid false positives from harvested traces.
- **Replay binding by exact tool call** ([PR #6659](https://github.com/nearai/ironclaw/pull/6659), open) – Replaces heuristic result lookup with precise fixture markers, improving test reliability.
- **Capability failure diagnostics** ([PR #6665](https://github.com/nearai/ironclaw/pull/6665), open) – Makes model-visible error messages actionable with a typed `ModelDiagnostic` contract.
- **WebUI improvements** – Three PRs from contributor `italic-jinxin` targeting localization, modal focus trapping, and automation list preservation ([#6625](https://github.com/nearai/ironclaw/pull/6625), [#6624](https://github.com/nearai/ironclaw/pull/6624), [#6626](https://github.com/nearai/ironclaw/pull/6626), all open).

## Community Hot Topics

The most active discussions center on foundational reliability and v1 readiness:

- **[#6284 – Error-recoverability endgame](https://github.com/nearai/ironclaw/issues/6284)** (5 comments) – An epic defining the contract that every mid-run error must be survivable and model-visible. With ongoing input from the team, this is the philosophical core of the Reborn stability push.
- **[#6544 – No UI/CLI for Slack OAuth redirect URI](https://github.com/nearai/ironclaw/issues/6544)** (4 comments, now closed) – Blocked v1 launch until a persistence solution was found.
- **[#6524 – Hermetic capability and journey testing platform](https://github.com/nearai/ironclaw/issues/6524)** (3 comments) – Epic to ensure deterministic coverage for every capability and user journey. Indicates a systemic need for regression confidence.

Both the error-recoverability epic and the testing platform epic are long-term structural investments. The community (mostly core team) is driving these conversations with detailed design analysis, reflecting a mature open-core project.

## Bugs & Stability

Today’s bug-bash session filed 10 new issues, split between P1 and P2 severity:

| Severity | Issue | Description | Fix PR exists? |
|----------|-------|-------------|----------------|
| **P1** | [#6645](https://github.com/nearai/ironclaw/issues/6645) | Slack DM send reports success but never delivers | No |
| **P1** | [#6644](https://github.com/nearai/ironclaw/issues/6644) | Telegram replies delivered to wrong user message | No |
| **P1** | [#6643](https://github.com/nearai/ironclaw/issues/6643) | Telegram messages accepted but never processed after pairing | No |
| **P2** | [#6649](https://github.com/nearai/ironclaw/issues/6649) | Tool activity panel appears after assistant response | No |
| **P2** | [#6648](https://github.com/nearai/ironclaw/issues/6648) | Tool failure messages duplicated and inconsistent | No |
| **P2** | [#6646](https://github.com/nearai/ironclaw/issues/6646) | Agent ignores Google Sheets action | No |
| **P2** | [#6651](https://github.com/nearai/ironclaw/issues/6651) | Agent repeats question text after responding | No |
| **P2** | [#6650](https://github.com/nearai/ironclaw/issues/6650) | Agent fabricates AQI data from mixed/cached sources | No |
| **—** | [#6642](https://github.com/nearai/ironclaw/issues/6642) | `ironclaw models list` shows stale provider after TUI switch | No |
| **—** | [#6635](https://github.com/nearai/ironclaw/issues/6635) | Docker image build missing from CI pipeline | No |

All P1 bugs involve channel integration (Slack, Telegram) and indicate that messaging delivery reliability is a weak spot. No fix PRs are linked yet. The P2 issues mostly affect UI/UX polish and tooling accuracy. The data-fabrication bug ([#6650](https://github.com/nearai/ironclaw/issues/6650)) is particularly concerning as it undermines user trust.

## Feature Requests & Roadmap Signals

Several enhancive epics and design requests surfaced today:

- **[Skill Self-Creation Design Doc](https://github.com/nearai/ironclaw/issues/6641)** – Plans to let the agent distill learned behaviors into reusable skills without human authoring. This is a forward-looking feature for future releases (post-v1).
- **[Pluggable Memory Providers](https://github.com/nearai/ironclaw/issues/6482)** (closed) – Epic to abstract memory storage (native, mem0, etc.). Success criteria include stable capability profiles and fail-closed bindings.
- **[Manifest V3 contract](https://github.com/nearai/ironclaw/issues/6490)** (closed) – Defines the target extension manifest schema and migration path. Already being implemented in active PRs (e.g., #6531 for admin OAuth config).
- **WebUI performance epics** ([#6628](https://github.com/nearai/ironclaw/issues/6628)) – A set of four issues (route splitting, compression/caching, markdown streaming, bundle size) filed by `italic-jinxin` point to a UX polish pass. These are likely candidates for a post-v1.0.0 patch release.

Based on current velocity, skill self-creation and pluggable memory are unlikely to ship in v1.0 but will be part of the next major cycle (Q3 2026).

## User Feedback Summary

Today’s bug-bash exposes real user (QA impersonating users) pain points:

- **Messaging reliability is paramount** – Slack DM undelivered despite success confirmation, Telegram message routing broken. Users lose confidence when the agent claims success but the channel shows otherwise.
- **Data accuracy is suspect** – The AQI fabrication ([#6650](https://github.com/nearai/ironclaw/issues/6650)) demonstrates that the agent can confidently present incorrect data from mixed/cached sources. This is a safety and trust issue.
- **UI confusion** – Duplicate error messages ([#6648](https://github.com/nearai/ironclaw/issues/6648)) and repeated question text ([#6651](https://github.com/nearai/ironclaw/issues/6651)) degrade the conversational experience.
- **Configuration gaps** – CLI not available on staging ([#6521](https://github.com/nearai/ironclaw/issues/6521)) and stale model list after TUI switch ([#6642](https://github.com/nearai/ironclaw/issues/6642)) frustrate power users and developers.

Overall satisfaction is moderate – the project is delivering new features rapidly, but integration quality and polish need improvement before the v1.0.0 tag.

## Backlog Watch

Several important items have been open for an extended period without maintainer response or resolution:

- **[PR #5598](https://github.com/nearai/ironclaw/pull/5598) – chore: release** (open since July 3) – This release PR proposes version bumps including breaking changes in `ironclaw_common` and `ironclaw_skills`. It has not been merged or closed for 22 days. The longer this sits, the harder the merge becomes. Either the team should finalize the release or close it as stale.
- **[#4058](https://github.com/nearai/ironclaw/pull/4058) – KMS fail-closed guard** (open since May 25) – A large signing PR that remains unreviewed for two months. While low-risk, it represents a security hardening that may block custodial-mainnet deployment.
- **[#5563](https://github.com/nearai/ironclaw/pull/5563) – Design system tokens + /playground** (open since July 2) – A new contributor’s PR that has received feedback but no follow-up approval. It introduces a design system for WebUI v2. Left unattended, this could discourage external contributions.
- **[#6524](https://github.com/nearai/ironclaw/issues/6524) – Hermetic testing platform epic** – Opened July 22 with no assignee yet. As an epic, it needs a owner to drive sub-tasks.

These items indicate that while the project is moving fast on v1 launch blockers, some long-running structural improvements and community contributions are at risk of neglect.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

Here is the LobsterAI project digest for July 25, 2026.

---

### LobsterAI Project Digest — 2026-07-25

**Data Snapshot:** 19 open issues, 8 open PRs (1 merged), and a new release. Activity is moderate, with a noticeable backlog of several-month-old "stale" items and no recent issues/PRs resolved today.

### 1. Today's Overview
The project shows a steady state of maintenance and new feature integration. While a new release was published two days ago (2026.7.23) and one PR was merged today, the majority of the 19 active issues and 7 open PRs are marked as `[stale]`, indicating a growing backlog. Community engagement is focused on a few critical bug reports and feature requests, but the overall responsiveness to long-standing items appears to be slowing. The release focused on the AI skin creation flow and collaborative tooling, but a significant number of user reports concerning model connection failures, UI regressions, and security vulnerabilities remain open.

### 2. Releases
- **Latest:** [LobsterAI 2026.7.23](https://github.com/netease-youdao/LobsterAI/releases/tag/2026.7.23)
  - **What's Changed:**
    - `feat(skin)`: Improved the AI skin creation flow.
    - `feat(cowork)`: Added support for multiple browser comment attachments.
    - `feat(build)`: Added explicit channel entry points for the Wind platform.
  - **Impact:** This appears to be a feature-focused release. No breaking changes or migration notes were mentioned in the provided data.

### 3. Project Progress
Only **one PR was merged/closed today:**
- **[PR #2382](https://github.com/netease-youdao/LobsterAI/pull/2382) (Closed):** `fix(cowork): improve model timeout handling`. This fix sets a 330-second server model timeout, distinguishes network failures from response timeouts in Cowork, and shows a local long-wait hint to users, improving the user experience during model latency.

### 4. Community Hot Topics
The most active discussions revolve around fundamental integration and stability issues.

- **[Issue #1813](https://github.com/netease-youdao/LobsterAI/issues/1813) (7 comments): DeepSeek V4 Integration Failure.** Users report that DeepSeek V4 is completely unusable due to a provider rejection error (`LLM request failed: provider rejected the request schema or tool payload`). This is a high-severity issue for users relying on this specific model.
- **[Issue #1849](https://github.com/netease-youdao/LobsterAI/issues/1849) (3 comments): Infinite "NO_REPLY" or Truncated Output.** Users experience a bug where follow-up questions ("追问") result in either an endless "NO_REPLY" loop or output that cuts off mid-sentence. The root cause was traced to the task being prematurely completed by the server while the model is still generating.
- **Deep Analysis Threads by User `woxinsj`:** A single user has opened several detailed, high-effort issues (#2036, #2039, #2040, #2041) offering deep critiques and architectural proposals concerning the OpenClaw engine, memory systems, and security. These are not bug reports but system-level improvement suggestions, generating significant community discussion.

### 5. Bugs & Stability
Several critical and long-standing bugs are impacting users. No new bugs were opened in the last 24 hours, but many old ones remain active.

- **CRITICAL - Security:**
  - **[Issue #1885](https://github.com/netease-youdao/LobsterAI/issues/1885): Email Skill Path Traversal.** A well-documented, high-severity security vulnerability exists in the IMAP/SMTP skill, allowing arbitrary file writes via malicious email attachments.
  - **Unmerged Security PRs:** Three critical security fixes by `kayo5994` (PRs #1831, #1832, #1833) concerning log sanitization, IPC privilege escalation, and URL scheme injection have been open and stale for months.
- **HIGH - Model/Engine Connection:**
  - **[Issue #1993](https://github.com/netease-youdao/LobsterAI/issues/1993): "AI engine connection lost"** on the desktop app, while the IM Bot works. This suggests a client-server communication issue specific to the native client.
  - **[Issue #1988](https://github.com/netease-youdao/LobsterAI/issues/1988): Model Forcing Bug.** The latest update forces `qwen3.6-plus` model calls through NetEase's servers, breaking usage for users with external API keys via Alibaba Cloud. User config overrides are being silently reverted.
- **MEDIUM - UI/UX:**
  - **[Issue #1971](https://github.com/netease-youdao/LobsterAI/issues/1971): Virtual Scrolling Anomaly.** The chat page breaks when scrolling near large elements (like Mermaid diagrams), causing infinite re-renders and locking the scroll position.
  - **[Issue #1920](https://github.com/netease-youdao/LobsterAI/issues/1920): Cowork Initialization Blank Loading.** The Cowork feature shows a static "Loading..." text instead of a skeleton screen, creating a poor user experience.
- **LOW - Reliability:**
  - **[Issue #1796](https://github.com/netease-youdao/LobsterAI/issues/1796): Write/Edit Tools Always Fail.** A user reports that the Write tool has been broken for days, with no resolution after updating the app.

### 6. Feature Requests & Roadmap Signals
- **High Demand:**
  - **[Issue #1797](https://github.com/netease-youdao/LobsterAI/issues/1797): Add Bulk Conversation Deletion** to manage context windows. (👍: 1)
  - **[Issue #1880](https://github.com/netease-youdao/LobsterAI/issues/1880): Integrate Hermes Agent** similar to Open WebUI's agent support.
  - **[Issue #2016](https://github.com/netease-youdao/LobsterAI/issues/2016): Support the `openhuman` engine.**
  - **[Issue #1836](https://github.com/netease-youdao/LobsterAI/issues/1836): Redesign the UI** to be more competitive.
- **Roadmap Signals:**
  - **[PR #2381](https://github.com/netease-youdao/LobsterAI/pull/2381) (Open):** `feat: support kimi k3`. Indicates active work on expanding LLM provider support.
  - **[PR #2193](https://github.com/netease-youdao/LobsterAI/pull/2193) (Open):** `feat: add LiteLLM as AI gateway provider`. A major feature that would allow users to connect to over 100 LLM providers, reducing dependency on specific services.
  - **OpenClaw Engine Improvements:** The detailed proposals from user `woxinsj` on memory systems (#2041) and architecture (#2040) could inform a major architectural overhaul.

### 7. User Feedback Summary
**Pain Points:**
- **Model Compatibility Hell:** Users are frustrated by broken integrations with specific providers like DeepSeek V4 (#1813) and Alibaba Cloud (#1988), forcing workarounds.
- **Unreliable Core Experience:** The "engine connection lost" error (#1993) and "NO_REPLY" loops (#1849) make the application feel unstable for core tasks.
- **Poor UI/UX & Feedback:** Users are unhappy with the "ugly" interface (#1836) and unfinished-feeling loading states (#1920, #1921).
- **Local Development Barriers:** Users struggle with local deployment due to missing build scripts and confusing error messages (#2017).

**Satisfaction Signals:**
- The community is highly engaged, providing deep technical analysis and architectural suggestions (#2040, #2041), indicating a sophisticated user base that values the project's potential.
- The single user who spawned the deep analysis threads is a strong power user, but their focus on fundamental flaws suggests dissatisfaction with the project's current foundation.

### 8. Backlog Watch
The following items are critical, long-unresolved, and require immediate maintainer attention.

- **Three Security Patches from `kayo5994`:** PRs #1831, #1832, #1833 (all opened 2026-04-27) are fundamental security fixes for log leakage, sensitive data access, and code injection. They have been **stale for 3 months**, leaving the application vulnerable.
- **[Issue #1885](https://github.com/netease-youdao/LobsterAI/issues/1885) (Security):** The path traversal vulnerability in the email skill has been open since May 6th with no maintainer response.
- **[Issue #2017](https://github.com/netease-youdao/LobsterAI/issues/2017) (High Severity):** A user reporting inability to use the software locally due to a missing runtime has received no assistance since May 20th.
- **[PR #1879](https://github.com/netease-youdao/LobsterAI/pull/1879) (High Importance):** A fix to prevent silent removal of manually-added plugin paths after config sync has been stale since May 2nd. This is a serious regression for power users managing custom plugins.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest – 2026-07-25

## Today’s Overview
The project shows no new issues or releases in the last 24 hours, indicating a stable baseline. However, development activity is concentrated on three open pull requests, all authored by **penso**, that enhance the Slack integration and tighten documentation governance. The absence of merged PRs or closed issues suggests these changes are still under review. Overall, the project is in a refinement phase, with no reported regressions or community disruption.

## Releases
No new releases have been published. The latest release remains unchanged from previous periods.

## Project Progress
No pull requests were merged or closed today. However, three feature and documentation PRs remain open and are advancing:

- **#1167** – `docs: forbid Claude session URLs in commits and PRs`  
  Extends the `CLAUDE.md` workflow rules to explicitly ban AI-assistant session links (e.g., `Claude-Session:`) from commit messages and PR descriptions. [View PR](https://github.com/moltis-org/moltis/pull/1167)

- **#1166** – `feat(slack): phase reactions, reconnect supervision, Block Kit, and a premature-ack bugfix`  
  A follow-up to #1165 that adds eight Slack integration improvements drawn from a comparison with the `hermes` ecosystem. Includes a bug fix for a premature acknowledgment in `chat.send`. [View PR](https://github.com/moltis-org/moltis/pull/1166)

- **#1165** – `feat(slack): acknowledge messages with reactions and add reaction triggers`  
  Adds Slack reaction-based acknowledgments and inbound reaction triggers, solving the lack of typing indicator feedback. Also fixes a wrong-message bug in threaded replies. [View PR](https://github.com/moltis-org/moltis/pull/1165)

## Community Hot Topics
No issues or PRs have accumulated comments or reactions in the last 24 hours (all comment counts are `undefined`). The three open PRs, all by the same contributor, represent the sole community activity. The underlying need is clear: improving Slack user experience (reaction feedback, non-blocking messaging) and tightening contribution standards around AI tooling traces.

## Bugs & Stability
A medium-severity bug was identified and fixed in **PR #1166**: a *premature-acknowledgment* bug where `chat.send` returns immediately before the agent run completes, causing confused users. The fix is included in the open PR. No other crashes or regressions have been reported today.

## Feature Requests & Roadmap Signals
The open Slack PRs (#1165, #1166) point to a strong focus on Slack integration maturity. Features include:
- Reaction-based message acknowledgment (no typing indicator workaround)
- “Phase reactions” – likely layered emoji feedback as processing progresses
- Reconnection supervision for Slack socket mode resilience
- Block Kit support (interactive UI components)
- Inbound reaction triggers (allowing reactions to start agent actions)

These are likely candidates for the next minor release, assuming review and merge. No user-submitted feature requests were filed today.

## User Feedback Summary
No direct user feedback (comments, reactions) is available in this dataset. The PR descriptions imply that users on Slack would benefit from visible acknowledgment and faster connectivity, but explicit satisfaction or pain points are not recorded.

## Backlog Watch
No issues or PRs have gone unanswered for an extended period. The three open PRs are recent (created within the last two days) and have maintainer attention (authored by **penso**, likely a core contributor). No backlog concerns exist today.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest – 2026-07-25

## 1. Today's Overview

CoPaw (QwenPaw) shows **high activity** with 45 issues and 30 PRs updated in the last 24 hours, and two new releases (v2.0.1 and v2.0.1-beta.3) published. The project is clearly in a **rapid iteration phase** following the major v2.0 release: user feedback reveals **migration pain points** (regressions, added overhead) and **enthusiasm for new capabilities** (PawApp platform, Kanban app, MCP improvements). Nearly half the issues (22) were closed in the last day, while 23 remain open. The PR backlog is growing (19 open), indicating a sustained development push with several feature branches in review. Overall, the community is engaged, but stability and backward-compatibility concerns are surfacing.

## 2. Releases

| Version | Type | Notes |
|---------|------|-------|
| **v2.0.1** | Stable | Ships **PawApp SDK & Kanban App** – a new mini-app platform allowing plugins to build rich interactive UIs on top of QwenPaw. Includes a built-in Kanban board for project management ([#6150](https://github.com/agentscope-ai/QwenPaw/pull/61)). |
| **v2.0.1-beta.3** | Beta | **Performance fix** for chat options memo and SSE re-parsing (PR [#6393](https://github.com/agentscope-ai/QwenPaw/pull/6393)). Version bump and date update. |

- **No breaking changes mentioned** in these releases, but users upgrading from v1.1.x to v2.0.x should note the documented regressions (see Bugs & Stability).
- **Migration note**: The new PawApp platform introduces a `plugin.json` schema – existing plugins may need updates to appear in the Kanban and future mini-app panels.

## 3. Project Progress

In the last 24 hours, **11 PRs were merged or closed**. Key advancements:

| PR | Summary | Status |
|----|---------|--------|
| [#6323](https://github.com/agentscope-ai/QwenPaw/pull/6323) | **Staged compaction & durable task continuity** for Scroll context management. Redesigns the compaction pipeline to keep `history.db` as source of truth. | Merged |
| [#6118](https://github.com/agentscope-ai/QwenPaw/pull/6118) | **Zalo Bot channel** added as a built-in (long-polling, no webhook needed). Closes #5776. | Merged |
| [#5698](https://github.com/agentscope-ai/QwenPaw/pull/5698) | `run_tool_batch` adapted to agentscope 2.0 with control-flow primitives. | Merged |
| [#6397](https://github.com/agentscope-ai/QwenPaw/pull/6397) | **Third-party agent architecture** integrating Codex, Qoder, Skills, and MCP – extensible, backend-neutral. | Open (Under Review) |
| [#6284](https://github.com/agentscope-ai/QwenPaw/pull/6284) | **QwenPaw Creator** app – script-to-video workflow using PawApp pattern. | Open (Under Review) |

Other open PRs showing progress: unified browser backend ([#6276](https://github.com/agentscope-ai/QwenPaw/pull/6276)), channel on-demand installation ([#6387](https://github.com/agentscope-ai/QwenPaw/pull/6387)), visual compact for context ([#6456](https://github.com/agentscope-ai/QwenPaw/pull/6456)), and native desktop GUI automation for Windows/macOS ([#6424](https://github.com/agentscope-ai/QwenPaw/pull/6424)).

## 4. Community Hot Topics

The most active issues (by comment count) reveal three core concerns:

- **v2.0 migration failures** – [#5980](https://github.com/agentscope-ai/QwenPaw/issues/5980) (7 comments): SSH Offline feature and Profiles returning 404 after upgrade. Users report critical workflow breakage.
- **Performance regression in v2.0** – [#6307](https://github.com/agentscope-ai/QwenPaw/issues/6307) (7 comments): ~2s fixed overhead per reply, independent of model latency. Affects all users moving from v1.x.
- **MCP tools broken in v2.0** – [#6405](https://github.com/agentscope-ai/QwenPaw/issues/6405) (3 comments): “Tool not found” despite correct name prefixing. Docker users hit this often.
- **Session history overwritten by cron tasks** – [#6401](https://github.com/agentscope-ai/QwenPaw/issues/6401) (3 comments): Scheduled tasks configured to reuse a user session destroy the session’s chat history.
- **OpenAI max_tokens not working** – [#6258](https://github.com/agentscope-ai/QwenPaw/issues/6258) (3 comments): Model parameter ignored.
- **Repeated MCP registration causing CancelledError** – [#2999](https://github.com/agentscope-ai/QwenPaw/issues/2999) (3 comments): Old issue (April 2026) still impacting users.

**Underlying needs**: Users demand **stable backward compatibility**, **reliable MCP support**, and **predictable performance**. The community is heavily invested in MCP integration and expects zero-regression upgrades.

## 5. Bugs & Stability

| Issue | Severity | Description | Fix PR Exists? |
|-------|----------|-------------|----------------|
| [#6460](https://github.com/agentscope-ai/QwenPaw/issues/6460) | **High** | High CPU on Edge+Wayland with large sessions; suspected rendering/WebSocket push issue. | No |
| [#6461](https://github.com/agentscope-ai/QwenPaw/issues/6461) | **High** | Agent data isolation broken – one agent can read another’s memory and modify settings. Privacy leak. | No |
| [#6458](https://github.com/agentscope-ai/QwenPaw/issues/6458) | **Medium** | Cron tasks: tool safety check defaults OFF; no granular failure notifications. | No |
| [#6457](https://github.com/agentscope-ai/QwenPaw/issues/6457) | **Medium** | Task mode produces excessive dialogue entries in history. | No |
| [#6401](https://github.com/agentscope-ai/QwenPaw/issues/6401) | **Medium** | Cron session reuse overwrites chat history. | No |
| [#6258](https://github.com/agentscope-ai/QwenPaw/issues/6258) | **Medium** | OpenAI max_tokens parameter not applied. | No |
| [#6409](https://github.com/agentscope-ai/QwenPaw/pull/6409) | **Low** | Fix for malformed tool_call JSON from local models (non-object payload). | PR exists (Ready for Merge) |
| [#6410](https://github.com/agentscope-ai/QwenPaw/pull/6410) | **Low** | Gemini schema sanitization – ignore nullable anyOf branches. | PR exists (Ready for Merge) |
| [#6412](https://github.com/agentscope-ai/QwenPaw/pull/6412) | **Low** | PowerShell multiline command preservation in shell execution. | PR exists (Ready for Merge) |

**Cumulative concern**: The v2.0 release introduced several regressions that are not yet patched. The high-severity issues (#6460, #6461) lack any associated fix PR, which could dampen user confidence.

## 6. Feature Requests & Roadmap Signals

Today’s top user-requested features (sorted by likelihood of inclusion in next minor release):

| Feature | Issue/PR | Rationale for Inclusion |
|---------|----------|--------------------------|
| **Built-in RAG (Chat with Documents)** | [#6432](https://github.com/agentscope-ai/QwenPaw/issues/6432) | Described as “single most-requested capability”; aligns with existing memory work. |
| **Multi-model parallel execution** | [#6455](https://github.com/agentscope-ai/QwenPaw/issues/6455) | Expressed by a power user; advanced but could leverage existing sub-agent infrastructure. |
| **Undo/redo last conversation turn** | [#6408](https://github.com/agentscope-ai/QwenPaw/issues/6408) | Quick win; `/undo` command already proposed. |
| **Agent isolation toggle** | [#6461](https://github.com/agentscope-ai/QwenPaw/issues/6461) | Urgent privacy need; may be retrofitted as a config option. |
| **Context menu “Copy” for selected text** | [#6454](https://github.com/agentscope-ai/QwenPaw/issues/6454) | Minor UX improvement that users find painful. |

**Roadmap signals from active PRs**:
- **QwenPaw Creator** (PR [#6284](https://github.com/agentscope-ai/QwenPaw/pull/6284)) – script-to-video, indicates expansion into content creation.
- **Third-party agent architecture** (PR [#6397](https://github.com/agentscope-ai/QwenPaw/pull/6397)) – suggests deeper openness to external AI providers.
- **Native desktop GUI automation** (PR [#6424](https://github.com/agentscope-ai/QwenPaw/pull/6424)) – hints at “computer use” capabilities.

## 7. User Feedback Summary

**Positive signals**:
- Adoption of new v2.0.1 release with PawApp platform received favorably (Kanban app praised).
- Community is actively suggesting and contributing features (multiple enhancement issues and accompanying PRs from first-time contributors).

**Pain points (most voiced)**:
- **Upgrade friction** – Key features (SSH Offline, Profiles) completely missing in v2.0.0 ([#5980](https://github.com/agentscope-ai/QwenPaw/issues/5980)).
- **Performance hit** – ~2s overhead per conversation round in v2.0 ([#6307](https://github.com/agentscope-ai/QwenPaw/issues/6307)).
- **MCP instability** – “Tool not found” errors, repeated registration causing cancelled tasks ([#6405](https://github.com/agentscope-ai/QwenPaw/issues/6405), [#2999](https://github.com/agentscope-ai/QwenPaw/issues/2999)).
- **Privacy concern** – Shared memory across agents when users expect isolation ([#6461](https://github.com/agentscope-ai/QwenPaw/issues/6461)).
- **UI/UX friction** – Chinese filenames garbled in prompts, no right-click copy, overly aggressive “no multimodal” warnings (issues [#6453](https://github.com/agentscope-ai/QwenPaw/issues/6453), [#6454](https://github.com/agentscope-ai/QwenPaw/issues/6454), [#6452](https://github.com/agentscope-ai/QwenPaw/issues/6452)).

Overall satisfaction appears **mixed**: users appreciate the new platform but are frustrated by regressions and unresolved old bugs.

## 8. Backlog Watch

| Issue/PR | Age | Impact | Awaiting |
|----------|-----|--------|----------|
| [#2999](https://github.com/agentscope-ai/QwenPaw/issues/2999) – Repeated MCP registration CancelledError | Opened 2026-04-06 | Affects all users with slow MCP servers; >90 days without fix. | Maintainer triage / reassignment. |
| [#5980](https://github.com/agentscope-ai/QwenPaw/issues/5980) – v2.0 missing SSH Offline & Profiles | Opened 2026-07-12 | Critical regression for v2.0 upgrade path. | Confirmation of planned restore or workaround. |
| [#6307](https://github.com/agentscope-ai/QwenPaw/issues/6307) – Fixed overhead v2.0 | Opened 2026-07-21 | High performance impact; no PR yet. | Root cause analysis; likely backend architectural change. |
| [#5692](https://github.com/agentscope-ai/QwenPaw/pull/5692) – Reranker for memory search (PR) | Opened 2026-07-01 | Important memory UX improvement; stalled in review. | Reviewer bandwidth. |
| [#6405](https://github.com/agentscope-ai/QwenPaw/issues/6405) – MCP “Tool not found” v2.0 | Opened 2026-07-23 | Common docker deployment issue. | Verification of workaround or patch. |

These unresolved items represent **the most urgent gap between user expectations and project responsiveness**. In particular, the 3+ month old #2999 and the 2-week old #5980 should be prioritized to restore trust in the v2.0 migration.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw Project Digest – 2026-07-25

## 1. Today's Overview
ZeptoClaw saw moderate activity over the past 24 hours, with two issues and two pull requests updated. A significant feature for Telegram streaming responses was merged and closed, while a critical runtime security fix (subprocess secret scrubbing and process tree reaping) is still under review. A new high-priority chore issue was opened to restore CI checks (Clippy and cargo-deny) that failed due to upstream toolchain changes. Overall, the project is actively addressing both feature requests and stability/security concerns.

## 2. Releases
No new releases were published in the last 24 hours. The latest release remains unchanged.

## 3. Project Progress
- **Merged (PR #648)** – `feat(telegram): stream gateway responses`  
  Adds real-time, progressively-edited Telegram message streaming for gateway sessions. Reuses existing `StreamEvent` infrastructure, preserves reply/forum-topic routing, UTF-16 safe splitting, and HTML final rendering.  
  *Corresponding issue #647 was also closed.*  
  [PR #648](https://github.com/qhkm/zeptoclaw/pull/648)

- **Under Review (PR #645)** – `fix(runtime): scrub subprocess secrets and reap timed-out process trees`  
  Addresses credential leakage (provider keys passing to model-authored commands) and incomplete process cleanup after timeouts. Docker container reaping included.  
  [PR #645](https://github.com/qhkm/zeptoclaw/pull/645)

## 4. Community Hot Topics
- **Issue #646 [OPEN] – chore(ci): restore Clippy and cargo-deny checks**  
  The most active thread with two comments. Highlights five new Clippy warnings (Rust 1.97.1) and vulnerable dependency versions (`quick-xml 0.39.2`, `lopdf 0.40.0`). These are baseline CI failures that need resolution before other changes can proceed safely.  
  [Issue #646](https://github.com/qhkm/zeptoclaw/issues/646)

Other issues and PRs had zero comments or reactions.

## 5. Bugs & Stability
| Severity | Issue/PR | Description | Status |
|----------|----------|-------------|--------|
| **P1-critical** | [#646](https://github.com/qhkm/zeptoclaw/issues/646) | CI failures: Clippy warnings and vulnerable `quick-xml`/`lopdf` versions. Blocks reliable CI for new changes. | Open, under investigation |
| **High** | [#645](https://github.com/qhkm/zeptoclaw/pull/645) | Security bug: subprocesses inherit full process environment, leaking secrets to model-authored commands. Also timed-out processes not reaped. | Open PR (fix proposed) |

No crash or regression reports were filed today aside from the CI baseline issues.

## 6. Feature Requests & Roadmap Signals
- **Telegram streaming (PR #648, issue #647)** – Now merged, this feature adds progressive message editing for Telegram sessions, fulfilling a request for real-time response streaming in chat interfaces.  
- **CI dependency pinning (issue #646)** – While a chore, the need to address vulnerable dependencies suggests upcoming version bumps or dependency updates, likely in the next patch release.

No new feature requests from users were received today, but the CI chore signals an imminent minor release to fix toolchain compliance.

## 7. User Feedback Summary
No direct user feedback was captured in the last 24 hours. However, the urgency of PR #645 (subprocess secret exposure) and issue #646 (vulnerable deps) indicates underlying pain points around security and reliability. The successful Telegram streaming merge likely satisfies users seeking richer real-time interactions with the agent.

## 8. Backlog Watch
No issues or PRs in the provided data have been unanswered for an extended period. The oldest open item is issue #646 (created 2026-07-23, updated 2026-07-24) and PR #645 (created 2026-07-23, updated 2026-07-24), both receiving maintainer attention within the last day. No stagnant backlog items are present.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-07-25

## Today’s Overview
ZeroClaw remains in an intense development phase with **45 issues** (37 open, 8 closed) and **50 pull requests** (42 open, 8 merged/closed) updated in the last 24 hours. No new release was tagged; the project is currently at **v0.8.3**, with v0.9.0 milestones actively tracked. Activity is driven by architectural RFCs (work lanes, unified plugin catalog, wire protocol), critical security fixes (Landlock sandbox, shell tool boundary bypass), and ongoing infrastructure improvements. Community engagement is high, with several long-running trackers and multi-PR feature stacks (goals, SOP, ACP) nearing completion.

## Releases
*No new releases today. Latest production version remains v0.8.3.*

## Project Progress
The project scored **8 merged/closed PRs** in the last 24 hours, including:

- **Dependency bump** – [#9305](https://github.com/zeroclaw-labs/zeroclaw/pull/9305): Upgrade `anchore/sbom-action` from v0.17.9 to v0.24.0 (CI/security maintenance).
- Several bugs were resolved (see *Bugs & Stability*), notably:
  - [#8834](https://github.com/zeroclaw-labs/zeroclaw/issues/8834) (config aliases outside `providers.*`) – closed with fix.
  - [#6434](https://github.com/zeroclaw-labs/zeroclaw/issues/6434) (shell tool dispatch blocked at full autonomy) – closed.
  - [#9204](https://github.com/zeroclaw-labs/zeroclaw/issues/9204) (Landlock sandbox restricting the daemon itself) – closed.
  - [#9236](https://github.com/zeroclaw-labs/zeroclaw/issues/9236) (Telegram aliases dropped on reload) – closed.
  - [#9240](https://github.com/zeroclaw-labs/zeroclaw/issues/9240) (dot-containing map keys silently lost) – closed.
  - [#7623](https://github.com/zeroclaw-labs/zeroclaw/issues/7623) (delegate tool provider bleed) – closed.

No major feature completions were merged today, but substantial PR stacks for **goal management** (vrurg’s series #8687, #8688, #8689, #8746, #8996) and **ACP resource exchange** (#9195) remain open and actively reviewed.

## Community Hot Topics
The most active discussions (by comment count) reveal deep architectural and governance concerns:

- **[#6808](https://github.com/zeroclaw-labs/zeroclaw/issues/6808) — RFC: Work Lanes, Board Automation, and Label Cleanup** (14 comments). The community is debating how to reduce manual maintainer overhead while keeping routing deterministic. This RFC is shaping the project’s contribution workflow and triage automation for v0.9.

- **[#6489](https://github.com/zeroclaw-labs/zeroclaw/issues/6489) — “Everything is a plugin” unified catalog** (4 comments). A long-term architectural shift to collapse separate integrations and plugin systems into one catalog. Discussions focus on migration path and backward compatibility.

- **[#8396](https://github.com/zeroclaw-labs/zeroclaw/issues/8396) — RFC: Make wire protocol first-class in provider onboarding** (3 comments). Enhances clarity for new integration authors; aims to formalize wire-format contracts across providers.

- **[#9285](https://github.com/zeroclaw-labs/zeroclaw/issues/9285) — nested `set_prop` masks invalid values** (3 comments). A config usability bug with strong user interest (IftekharUddin filed it and is active on the fix).

- **[#9348](https://github.com/zeroclaw-labs/zeroclaw/issues/9348) — WhatsApp Web answers all DMs / groups under `business` mode** (2 comments, filed today). Rated S1–security risk; the `allowed_groups` policy is not enforced, leading to potential data leakage. Rapid community response needed.

The conversation threads indicate a community that is engaged with both **governance** and **concrete security** – a healthy sign of investment in the project’s future.

## Bugs & Stability
Several high-severity bugs were reported or resolved today:

### S0 – Data loss / security risk
- **[#9247](https://github.com/zeroclaw-labs/zeroclaw/issues/9247) – Shell Tool Workspace Boundary Bypass** (open). Symlinks inside workspace allow escape. No fix PR yet; this is the most critical open vulnerability.

### S1 – Workflow blocked / security risk
- **[#9348](https://github.com/zeroclaw-labs/zeroclaw/issues/9348)** – WhatsApp Web policy bypass (filed today, open). 🔴
- **[#9290](https://github.com/zeroclaw-labs/zeroclaw/issues/9290)** – Windows desktop installer fails with `TaskDialogIndirect` missing (open).
- **[#9340](https://github.com/zeroclaw-labs/zeroclaw/issues/9340)** – CLI-created cron jobs hardcode delivery to `None` (open). A fix PR [#9350](https://github.com/zeroclaw-labs/zeroclaw/pull/9350) was opened today.
- **[#9204](https://github.com/zeroclaw-labs/zeroclaw/issues/9204)** – Landlock sandbox restricts daemon (closed). Fix landed in [#9233](https://github.com/zeroclaw-labs/zeroclaw/pull/9233) and [#9114](https://github.com/zeroclaw-labs/zeroclaw/pull/9114) (open).
- **[#9236](https://github.com/zeroclaw-labs/zeroclaw/issues/9236)** – Telegram aliases silently dropped on config reload (closed).
- **[#6434](https://github.com/zeroclaw-labs/zeroclaw/issues/6434)** – Shell tool refused at `autonomy = "full"` (closed).

### S2 – Degraded behavior
- **[#7623](https://github.com/zeroclaw-labs/zeroclaw/issues/7623)** – Delegate tool still forwards coordinator API key (closed).

### S3 – Minor issues
- **[#9285](https://github.com/zeroclaw-labs/zeroclaw/issues/9285)** – Config `set_prop` misreports path errors instead of value errors (open, in-progress).
- **[#9116](https://github.com/zeroclaw-labs/zeroclaw/issues/9116)** – ACP console splits thinking into one-word entries (closed).

The number of S0/S1 bugs indicates the project is prioritizing reliability and security, but the pipeline of fixes (8 merged today) shows good momentum.

## Feature Requests & Roadmap Signals
New features discussed or implemented in the last 24 hours include:

- **[#9335](https://github.com/zeroclaw-labs/zeroclaw/issues/9335)** – Support data-wrapped OpenAI-compatible responses (brokensnow2). Likely to be included in the next provider-compatible update.
- **[#8228](https://github.com/zeroclaw-labs/zeroclaw/issues/8228)** – DingTalk streaming message support (jokewithme110). Still open, awaiting implementation.
- **[#9315](https://github.com/zeroclaw-labs/zeroclaw/issues/9315)** – Classify Telegram file-download failures as permanent/transient (IftekharUddin). Blocked on follow-up.
- **[#9338](https://github.com/zeroclaw-labs/zeroclaw/pull/9338)** – Add Crusoe Managed Inference as first-class provider (chekolyn, PR open).
- **[#9323](https://github.com/zeroclaw-labs/zeroclaw/issues/9323)** – RFC: Define execution-tree iteration budget ownership (IftekharUddin). Architectural discussion about bounding agent loops.
- **[#9246](https://github.com/zeroclaw-labs/zeroclaw/issues/9246)** – Preserve Todo tracker configuration during ZeroCode ownership migration (RFC in-progress).
- **[#9047](https://github.com/zeroclaw-labs/zeroclaw/issues/9047)** – Clarify Code session vs persistent-memory isolation (Audacity88). ZeroCode UX improvement.

The **v0.9.0 tracker** [#7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432) continues to coordinate breaking changes around auth, security, and gateway. Combined with the unified plugin catalog RFC and work lanes RFC, the next major release appears focused on **developer experience, security hardening, and platform scalability**.

## User Feedback Summary
Real user pain points reported in the last 24 hours:

- **WhatsApp policy confusion**: Operator believes they set an allowlist, but agent replies to all inbound messages ([#9348](https://github.com/zeroclaw-labs/zeroclaw/issues/9348)). This is a trust issue for production deployments.
- **Cron output discarded**: Jobs run but output is never delivered ([#9340](https://github.com/zeroclaw-labs/zeroclaw/issues/9340)). A quick fix PR is already up.
- **Shell tool workspace escape**: Users with symlinks in workspace can bypass sandbox ([#9247](https://github.com/zeroclaw-labs/zeroclaw/issues/9247)). This undermines the security model.
- **Windows installer broken**: New users cannot launch the desktop app at all ([#9290](https://github.com/zeroclaw-labs/zeroclaw/issues/9290)).
- **Config usability friction**: Dots in map keys cause silent data loss ([#9240](https://github.com/zeroclaw-labs/zeroclaw/issues/9240), fixed); nested `set_prop` gives misleading errors ([#9285](https://github.com/zeroclaw-labs/zeroclaw/issues/9285)).

Overall satisfaction is tempered by these stability issues, but the rapid response (multiple bugs fixed same day) suggests a responsive team. Community members like `yanchenko`, `AngryPacifist`, and `IftekharUddin` are actively contributing both bug reports and fixes.

## Backlog Watch
Issues and PRs that need maintainer attention or are flagged as blocked:

- **[#8519](https://github.com/zeroclaw-labs/zeroclaw/issues/8519) – Reconcile cargo-audit ignores and remediate wasmtime-wasi CVEs** (open, P1, risk high). In-progress but requires security expertise.
- **[#8288](https://github.com/zeroclaw-labs/zeroclaw/issues/8288) – SOP milestone tracker** (open). Large epic with many subtasks; maintainer oversight needed to unblock.
- **[#7904](https://github.com/zeroclaw-labs/zeroclaw/issues/7904) – always-inject SKILL.md frontmatter broken** (open, P2). Affects skill authors.
- **[#7872](https://github.com/zeroclaw-labs/zeroclaw/issues/7872) – QQ group passive reply tracker** (open). Waiting for follow-up PRs.
- **[#9323](https://github.com/zeroclaw-labs/zeroclaw/issues/9323) – Execution-tree iteration budget RFC** (new, needs maintainer review).
- **[#9328](https://github.com/zeroclaw-labs/zeroclaw/issues/9328) – verifiable-intent credential chain verification bug** (open, P2, risk high). Unaddressed.

Several PRs carry the `needs-author-action` label (e.g., #8687–#8996 by vrurg, #8713 by wangmiao), meaning **maintainers are waiting on contributors** to address review feedback. Maintaining momentum on these large feature stacks is critical for v0.9.0.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/boom7sss/agents-radar).*