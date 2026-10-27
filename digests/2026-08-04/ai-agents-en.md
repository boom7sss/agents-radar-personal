# OpenClaw Ecosystem Digest 2026-08-04

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-08-04 15:28 UTC

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

# OpenClaw Project Digest — 2026-08-04

## 1. Today's Overview

OpenClaw saw very high activity on 2026-08-04: **500 issues and 500 PRs were updated in the last 24h**, with **63 issues closed** and **99 PRs merged/closed**. Two patch releases shipped (`2026.7.1-1`, `2026.7.1-2`), continuing a fast release cadence. The project is clearly moving quickly, but the update window also contains a **new P0 data-loss bug** ([#119090](https://github.com/openclaw/openclaw/issues/119090)) and multiple P1 session-state, livelock, and crash-loop reports. Overall project health is **busy but stability-sensitive**: strong maintainer throughput, but core reliability remains the main community pressure point.

## 2. Releases

Two releases were published in the last 24h:

- **v2026.7.1-2** ([releases](https://github.com/openclaw/openclaw/releases))
  - **Fixes**
    - **npm plugin updates:** accept singleton-array metadata from newer npm clients so tracked official plugins can install and update to correction releases. ([#108336](https://github.com/openclaw/openclaw/issues/108336))

- **v2026.7.1-1**
  - **Fixes**
    - **Codex progress replies:** keep app-server turns running after delivered progress messages so GPT/Codex reaches its authoritative terminal response instead of stopping mid-turn. ([#106961](https://github.com/openclaw/openclaw/issues/106961), [#108487](https://github.com/openclaw/openclaw/issues/108487), thanks @joshavant)
    - **Memory Core startup repair:** recover derived legacy-index and ca… *(release note truncated in source data)*

No breaking changes or migration notes were included in the available release notes.

## 3. Project Progress

Individual merged PRs were not enumerated in the top-30 sample, but **99 PRs moved to merged/closed in the aggregate 24h window**, plus **63 issues closed**. Observed closed issues in the sample:

- [#115476](https://github.com/openclaw/openclaw/issues/115476) — [P1] Context refresh after compaction replays old inbound `message_id` for Telegram; missing gateway-level dedup.
- [#80040](https://github.com/openclaw/openclaw/issues/80040) — [P2] Cascading OAuth invalidation, duplicate tool execution, and cold-cache context loss.
- [#43549](https://github.com/openclaw/openclaw/issues/43549) — [P2] Telegram channel wedged by bad persisted session JSON.
- [#112314](https://github.com/openclaw/openclaw/issues/112314) — [P1] WebChat conversation history disappears when assistant starts generating a text response.

Several notable open PRs advanced in the last 24h and are now in review or waiting-on-author states:

- [#111252](https://github.com/openclaw/openclaw/pull/111252) — fix(anthropic): reject altered local session cursors. *Ready for maintainer look.*
- [#117400](https://github.com/openclaw/openclaw/pull/117400) — fix(compaction): use canonical session context projection for post-turn estimator. *Ready for maintainer look.*
- [#119245](https://github.com/openclaw/openclaw/pull/119245) — fix(tui): keep whitespace-prefixed bang input in chat. *Ready for maintainer look.*
- [#111251](https://github.com/openclaw/openclaw/pull/111251) — fix(gateway): reject altered approval history cursors. *Ready for maintainer look.*
- [#117352](https://github.com/openclaw/openclaw/pull/117352) — fix(agents): preserve cancellation at tool execution boundary. *Needs proof.*
- [#115968](https://github.com/openclaw/openclaw/pull/115968) — fix(agents): per-candidate compaction timeout instead of shared across fallback chain. *Waiting on author.*
- [#117128](https://github.com/openclaw/openclaw/pull/117128) — fix(secrets): preflight exec provider command paths before config acceptance. *Waiting on author.*

## 4. Community Hot Topics

Most active issues by comment count:

- [#116201](https://github.com/openclaw/openclaw/issues/116201) — **57 comments** — Real time voice work can retain unbounded provider and consult state. *Underlying need: strict ownership bounds and cancellation for realtime voice sessions to prevent resource buildup under stalled/bursty provider behavior.*

- [#77598](https://github.com/openclaw/openclaw/issues/77598) — **22 comments** — Track live dev agent behavior and trajectory. *Underlying need: observability into long-running agent behavior; this is a maintainer-led 24-hour behavioral watch.*

- [#43367](https://github.com/openclaw/openclaw/issues/43367) — **13 comments** — Multi-agent orchestration is unstable: concurrent agents add/config overwrites, session-lock failures, detached child work. *Underlying need: safe, concurrent multi-agent operations from the CLI.*

- [#41744](https://github.com/openclaw/openclaw/issues/41744) — **13 comments** — Feishu: read image tool result loses media before final outbound payload. *Underlying need: cross-channel attachment reliability and media preservation through tool-result delivery.*

- [#118846](https://github.com/openclaw/openclaw/issues/118846) — **12 comments** — Gateway main thread saturated from boot by plugin-metadata snapshot + fs statting; local RPC dies at `ws_upgrade` with 1006. *Underlying need: non-blocking gateway startup and plugin discovery.*

- [#115908](https://github.com/openclaw/openclaw/issues/115908) — **11 comments** — Session transcript projection reconcile can livelock under sustained writes, blocking the main thread. *Underlying need: guaranteed convergence and event-loop safety for transcript rebuilds.*

## 5. Bugs & Stability

Ranked by severity:

- **P0 — Data loss** — [#119090](https://github.com/openclaw/openclaw/issues/119090): Managed media cleanup fails open on an unreadable session store and permanently deletes a session's generated media. Filed today. No linked fix PR in the sample.

- **P1 — Session-state / livelock** — [#115908](https://github.com/openclaw/openclaw/issues/115908): Transcript projection livelock under sustained writes, stalling all channel transports.

- **P1 — Gateway crash/OOM** — [#115424](https://github.com/openclaw/openclaw/issues/115424): Gateway V8 heap OOM during main-session turn; restart-recovery converts one crash into a 7-core-dump loop.

- **P1 — Gateway main-thread starvation** — [#118846](https://github.com/openclaw/openclaw/issues/118846): Plugin-metadata snapshot + fs statting pegs main thread from boot; RPC dies at `ws_upgrade`.

- **P1 — Realtime voice unbounded state** — [#116201](https://github.com/openclaw/openclaw/issues/116201): Retains superseded consult work, large provider frames, pre-ready audio under slow/bursty clients.

- **P1 — Multi-agent instability** — [#43367](https://github.com/openclaw/openclaw/issues/43367): Concurrent `agents add` overwrites config, session-lock failures, detached child work. **Linked fix PR open.**

- **P1 — Feishu media loss** — [#41744](https://github.com/openclaw/openclaw/issues/41744): `read` tool result loses media before final outbound payload. **Linked fix PR open.**

- **P1 — Session cursor / compaction regressions** — [#115700](https://github.com/openclaw/openclaw/issues/115700): `chat.send` rejected with "thread switched branches" after model completes. **Linked fix PR open.** / [#116010](https://github.com/openclaw/openclaw/issues/116010): Persistent sessions capped at 128k context regardless of model. **Linked fix PR open.**

- **P1 — State DB / schema recovery** — [#115421](https://github.com/openclaw/openclaw/issues/115421): Schema downgrade recovery quarantines/wipes state DB and loses cron jobs. **Linked fix PR open.**

- **P1 — Crash-loop / memory pegging** — [#99910](https://github.com/openclaw/openclaw/issues/99910): Memory dreaming run pegs event loop for ~10 min; short-term recall store never persists. / [#72015](https://github.com/openclaw/openclaw/issues/72015): Active-memory blocks replies and QMD boot initialization can overload multi-agent gateways.

- **P1 — Existing stale serious bugs still open** — [#40611](https://github.com/openclaw/openclaw/issues/40611) heartbeat drift blocks Telegram; [#41165](https://github.com/openclaw/openclaw/issues/41165) Telegram DMs pollute `agent:main:main`; [#43374](https://github.com/openclaw/openclaw/issues/43374) all LLM API calls time out simultaneously; [#78493](https://github.com/openclaw/openclaw/issues/78493) `sudo openclaw update` creates mixed ownership and doctor overwrites config.

## 6. Feature Requests & Roadmap Signals

Strong roadmap signals from active feature requests:

- [#7722](https://github.com/openclaw/openclaw/issues/7722) — Filesystem Sandboxing Config (`tools.fileAccess`). **4 👍**. Has an open PathGuard PR ([#60981](https://github.com/openclaw/openclaw/pull/60981)); likely to stay a priority for security hardening.

- [#67413](https://github.com/openclaw/openclaw/issues/67413) — Per-agent dreaming configuration. **5 👍** — highest reaction count in sample. Memory-core OOMs are a recurring pain point.

- [#96975](https://github.com/openclaw/openclaw/issues/96975) — Isolate subagent completion from parent context; return status + child session link only by default. Directly addresses parent-context pollution.

- [#14785](https://github.com/openclaw/openclaw/issues/14785) — Reduce tool schema token overhead (~3,500 tokens/session). Important efficiency improvement for all sessions.

- [#41899](https://github.com/openclaw/openclaw/issues/41899) — Plugin Circuit Breaker for graceful degradation. Relevant to several plugin-related gateway stalls.

- [#79165](https://github.com/openclaw/openclaw/issues/79165) — Graduated crash recovery ladder for gateway. Would mitigate crash-loop severity.

- [#51572](https://github.com/openclaw/openclaw/issues/51572) — Fire session-memory hook on session reset/prune, not just compaction.

- [#42650](https://github.com/openclaw/openclaw/issues/42650) — Memory MVP: review, edit, forget, and conflict-resolution flows.

- [#92672](https://github.com/openclaw/openclaw/issues/92672) — Rate-limit fallback should send a user-visible error + immediate switch notification.

- [#77700](https://github.com/openclaw/openclaw/issues/77700) — Tracking: prepared runtime resolution migration, to stop hot request paths from rediscovering known runtime info.

**Prediction:** The next versions are likely to continue hardening memory-core, session-state, and compaction. Per-agent dreaming ([#67413](https://github.com/openclaw/openclaw/issues/67413)), filesystem sandboxing ([#7722](https://github.com/openclaw/openclaw/issues/7722)), and subagent context isolation ([#96975](https://github.com/openclaw/openclaw/issues/96975)) are the most visible roadmap candidates.

## 7. User Feedback Summary

- Users are filing **high-quality, detailed bug reports** with root-cause analysis, CPU profiles, and reproduction steps — e.g. [#118846](https://github.com/openclaw/openclaw/issues/118846), [#115908](https://github.com/openclaw/openclaw/issues/115908), and [#78493](https://github.com/openclaw/openclaw/issues/78493).
- The biggest pain points remain **session-state corruption, message loss across channels** (Telegram, Feishu, WebChat), **multi-agent orchestration instability**, and **gateway main-thread stalls/OOMs**.
- There is clear frustration with **silent failures** — e.g. rate-limit fallback hanging sessions without user notification ([#92672](https://github.com/openclaw/openclaw/issues/92672)) — and with **recovery systems making crashes worse** ([#115424](https://github.com/openclaw/openclaw/issues/115424)).
- Some positive signals: **two patch releases in one day**, maintainer activity on Codex integration fixes, and a proactive maintainer-led dev-agent observability issue ([#77598](https://github.com/openclaw/openclaw/issues/77598)).
- Overall sentiment is **cautious**: users appreciate the project's velocity but are increasingly concerned about production stability and data safety.

## 8. Backlog Watch

Long-running or high-priority items still needing maintainer attention:

- [#7722](https://github.com/openclaw/openclaw/issues/7722) — Filesystem sandboxing config, open since **Feb 3**, P2, needs maintainer review + product decision + security review.
- [#14785](https://github.com/openclaw/openclaw/issues/14785) — Tool schema token overhead, open since **Feb 12**, P2, needs product decision.
- [#37966](https://github.com/openclaw/openclaw/issues/37966) — `cacheRetention` ignored for LiteLLM-proxied Anthropic models, open since **Mar 6**, P2, linked PR still open.
- [#40611](https://github.com/openclaw/openclaw/issues/40611) — Heartbeat drift fix causes aggressive retry that blocks Telegram, open since **Mar 9**, P1, needs maintainer review.
- [#41165](https://github.com/openclaw/openclaw/issues/41165) — Telegram DMs can still land in `agent:main:main`, open since **Mar 9**, P1, linked PR open.
- [#41744](https://github.com/openclaw/openclaw/issues/41744) — Feishu read image tool result loses media, open since **Mar 10**, P1, linked PR open.
- [#43367](https://github.com/openclaw/openclaw/issues/43367) — Multi-agent orchestration unstable, open since **Mar 11**, P1, linked PR open.
- [#43374](https://github.com/openclaw/openclaw/issues/43374) — All LLM API calls time out simultaneously, open since **Mar 11**, P1, needs maintainer review.
- [#41899](https://github.com/openclaw/openclaw/issues/41899) — Plugin circuit breaker, open since **Mar 10**, P1, needs maintainer review + product decision.
- [#50165](https://github.com/openclaw/openclaw/issues/50165) — Subagents appear completed before actual work finishes, open since **Mar 19**, P2.
- [#52249](https://github.com/openclaw/openclaw/issues/52249) — ACP parent session stuck until refresh, open since **Mar 22**, P1.

Notable long-open PRs:

- [#60981](https://github.com/openclaw/openclaw/pull/60981) — Filesystem Access Control (PathGuard), open since **Apr 4**, large cross-cutting change.
- [#69346](https://github.com/openclaw/openclaw/pull/69346) — Actionable diagnostic for empty-stream config errors, open since **Apr 20**, waiting on author.
- [#75157](https://github.com/openclaw/openclaw/pull/75157) — Use catalog display names for agent models, open since **Apr 30**, needs proof.
- [#78436](https://github.com/openclaw/openclaw/pull/78436) — Scope session-history guard to latest-user-answered, open since **May 6**.
- [#79200](https://github.com/openclaw/openclaw/pull/79200) — Add `--message-file` flag to `openclaw message send`, open since **May 8**.
- [#79404](https://github.com/openclaw/openclaw/pull/79404) — Harden OpenClaw certification gates, open since **May 8**.

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report — Personal AI Assistant Open-Source Ecosystem
**Date:** 2026-08-04 | **Scope:** 13 projects tracked

---

## 1. Ecosystem Overview

The personal AI assistant open-source landscape is in a phase of rapid maturation marked by extreme velocity and growing stability concerns. The reference implementation (OpenClaw) processed 500 issues and 500 PRs in a single day while shipping two patch releases, yet simultaneously carries a P0 data-loss bug — a pattern of "fast but fragile" that recurs across the ecosystem. Security and data isolation have emerged as the dominant cross-project theme, with credential leakage (NanoBot, LobsterAI), cross-user memory contamination (IronClaw, ZeroClaw), and inadequate per-agent ownership scoping (ZeroClaw) appearing as top-severity items. Meanwhile, the ecosystem is consolidating around shared architectural needs: OpenAI-protocol compatibility, prompt-cache cost optimization, reliable session-state management, and MCP lifecycle robustness. Smaller projects (PicoClaw, NanoClaw, Moltis, NullClaw) are successfully carving niches via localization, channel adapters, and focused integrations rather than competing head-on with the full-stack leaders.

---

## 2. Activity Comparison

| Project | Issues Updated | PRs Updated | Releases (24h) | Notable Closures | Health Score |
|---|---|---|---|---|---|
| **OpenClaw** | 500 | 500 | 2 (patch) | 63 issues, 99 PRs | 7/10 — High throughput but P0 data-loss bug + multiple P1 livelocks |
| **Hermes Agent** | 50 | 50 | 1 (v0.20.0) | 4 issues, 2 PRs | 8/10 — Responsive same-day fixes; Desktop/macOS friction persists |
| **IronClaw** | 50 | 50 | 0 | 8 issues, 20 PRs | 6/10 — Massive refactoring but red CI lane and P0 security issue |
| **ZeroClaw** | 50 | 50 | 0 | 2 issues, 1 PR | 6/10 — RFC-rich but maintainer-review bottleneck; S0 ownership gaps |
| **CoPaw** | 20 | 47 | 0 | 10 issues, 21 PRs | 7.5/10 — Healthy fix velocity; silent-timeout and capability bugs open |
| **NanoBot** | 5 | 27 | 0 | 1 issue, 20 PRs | 7/10 — Solid merge rate; unresolved provider key-leak security issue |
| **LobsterAI** | 1 | 12 | 0 (release branch merged) | 0 issues, 10 PRs | 7/10 — Release-focused and healthy; stale security bug open |
| **PicoClaw** | 8 | 6 | 0 | 5 issues, 3 PRs | 6.5/10 — Steady bugfix cycle; MCP hang and WebUI lag unfixed |
| **NanoClaw** | 0 | 8 | 0 | 0 issues, 2 PRs | 7/10 — Targeted fixes; Dial channel integration in progress |
| **Moltis** | 0 | 2 | 0 | 0 | 6/10 — Quiet consolidation; MCP bundles feature under review |
| **NullClaw** | 0 | 1 | 0 | 0 | 5/10 — Minimal activity; single grok-cli provider PR open |
| **TinyClaw** | 0 | 0 | 0 | 0 | 4/10 — No activity in window |
| **ZeptoClaw** | 0 | 0 | 0 | 0 | 4/10 — No activity in window |

---

## 3. OpenClaw's Position

OpenClaw remains the ecosystem's center of gravity and reference architecture:

- **Scale advantage:** 500 daily issue/PR updates is an order of magnitude above all peers except IronClaw and ZeroClaw; the 99 daily PR merges demonstrate unmatched maintainer throughput.
- **Release discipline:** Two patch releases in 24 hours — no other project shipped during this window. This cadence is the primary mechanism for restoring trust after regressions.
- **Community feedback quality:** Users file sophisticated root-cause analyses (CPU profiles, repro steps) that raise the bar for bug reports across the ecosystem.
- **Technical approach:** Memory-core-first architecture (dreaming, compaction, session-memory hooks) and aggressive gateway/session-state management represent a broader surface area than peers, which is both its strength and its Achilles' heel — the P0 media-deletion bug and transcript livelock are direct consequences of this complexity.
- **Risk:** The sheer surface area invites reliability gaps. If the P0 data-loss issue and P1 gateway-starve/OOM cluster are not stabilized in the next 2–3 releases, user trust erosion could benefit more focused competitors (e.g., Hermes' Desktop experience, NanoBot's lightweight footprint).

---

## 4. Shared Technical Focus Areas

| Focus Area | Projects | Specific Needs |
|---|---|---|
| **Session-state integrity** | OpenClaw, Hermes, PicoClaw, NanoClaw, CoPaw | Transcript livelocks, stale cursors, missing-session recovery, compaction regressions, dead-session rotation |
| **Memory consolidation & context** | OpenClaw, Hermes, CoPaw, ZeroClaw, IronClaw | Automated "dreaming," per-agent memory isolation, summarize-on-compact, memory review/forget/conflict flows |
| **Credential & key isolation** | NanoBot, LobsterAI, ZeroClaw, OpenClaw | Provider key leakage via global env mutation, model-key disclosure refusal, per-tenant memory namespaces |
| **Channel reliability** | OpenClaw, NanoBot, Hermes, PicoClaw, CoPaw | Telegram heartbeat/polling stalls, Feishu/media loss, Matrix auto-join, WeCom filename edge cases, message dedup |
| **MCP robustness & lifecycle** | NanoBot, PicoClaw, Moltis, OpenClaw | Business-error envelopes treated as success, dead-server hangs, managed repository bundles, plugin circuit breakers |
| **Gateway stability** | OpenClaw, Hermes, IronClaw, ZeroClaw | Main-thread starvation, OOM crash loops, startup plugin-discovery blocking, PID-reuse false negatives |
| **Cost optimization** | CoPaw, ZeroClaw, OpenClaw, Hermes | Prompt caching (GPT-5.6, OpenRouter stable session_id), tool-schema token overhead, cache-retention configs |
| **File/artifact lifecycle** | CoPaw, OpenClaw, IronClaw, Hermes | Per-task output dirs, drag-drop original paths, binary corruption fixes, media preservation through tool results |
| **OpenAI-protocol compatibility** | ZeroClaw (#8603), OpenClaw (Codex), Hermes (custom providers), NanoBot | Letting existing SDKs/chat UIs (Open WebUI, LobeChat, Aider, Continue.dev) connect directly |
| **Sandboxing & tool policy** | OpenClaw, ZeroClaw, IronClaw, Hermes | Filesystem access control, per-execution approval tiers, WASM wall-clock deadlines, config-gated shell execution |

---

## 5. Differentiation Analysis

| Project | Primary Focus | Target Users | Architectural Signature |
|---|---|---|---|
| **OpenClaw** | Full-stack reference agent: memory, gateway, multi-channel | Power users, self-hosters, developers | Memory-core-first; largest plugin/channel surface; patch-release discipline |
| **Hermes Agent** | Desktop-first agent with gateway | Desktop prosumers, macOS users | Massive periodic releases (~3,650 commits); Desktop app + web dashboard; guardrails focus |
| **IronClaw** | Rust-based agent with enterprise architecture | Developers, CI-heavy teams | Rust toolchain; WS2/WS3/WS4/WS6 refactor waves; architecture-ratchet enforcement; canary QA |
| **ZeroClaw** | Security-hardened conversational agent | Security-conscious operators, OpenAI-SDK users | RFC-driven design (goal mode, pluggable auth, ownership scoping); v0.9.0 security milestone |
| **CoPaw (QwenPaw)** | Qwen/AgentScope-ecosystem agent | Chinese-market users, free-tier model users | Deep integration with DashScope/Volcengine/Xiaomi providers; memory reranking; console + web UIs |
| **NanoBot** | Lightweight multi-channel bot | Self-hosters, Cloudflare Tunnel users | Small footprint; rapid WebUI polish; provider-family version thresholds |
| **LobsterAI** | Desktop chat product with commercial features | Chinese consumer/enterprise users | Credit-reward campaigns, login UX, Windows installer, artifact preview controls |
| **PicoClaw** | Lightweight agent with localization | Japanese/international users, routed multi-agent | Dispatch-routing; WebUI i18n (ja); launcher/systemd coexistence |
| **NanoClaw** | Agent-runner + channel adapters | SMS/voice-channel enthusiasts | Scheduled tasks with runtime awareness; Dial (SMS + AI voice) integration; hardened images |
| **NullClaw** | CLI-provider aggregation | Users with local AI CLIs (Codex, Gemini, Claude, Grok) | Spawn-per-request pattern; opt-in providers; no API-key requirement |
| **Moltis** | MCP server management platform | MCP-heavy integrators | Managed repo bundles; vault integration; HTTPS/SSH credential handling |

---

## 6. Community Momentum & Maturity

**Tier 1 — Rapidly iterating (release-driven, high-risk/high-reward):**
- **OpenClaw** — Shipping daily patches; velocity is strongest in ecosystem but reliability debt is accumulating.
- **Hermes Agent** — Post-"Herald" release surge; same-day fix PRs for fresh regressions indicate an efficient triage loop.
- **IronClaw** — Extreme churn from multi-wave restructuring; momentum is architectural, not user-facing. CI breakage and no releases for a month temper the signal.

**Tier 2 — Steady delivery (healthy throughput, no releases in window):**
- **CoPaw** — 21 PRs merged in 24h with broad surface (timestamps, CI, console, security permissions); feature PRs (reranker, auto-compact) awaiting review.
- **NanoBot** — High merge ratio (20/27 PRs); WebUI polish cluster suggests a polished release is near.
- **LobsterAI** — 2026.8.3 release integrated; momentum is product-feature-driven (campaigns, login, settings).
- **ZeroClaw** — High activity but RFC-bound; the maintainer-review bottleneck on high-risk items is the gating factor.

**Tier 3 — Bugfix/consolidation phase:**
- **PicoClaw, NanoClaw, Moltis** — Focused, low-volume but purposeful work; no releases.

**Tier 4 — Quiet/stalled:**
- **NullClaw** — Single PR in flight; **TinyClaw** and **ZeptoClaw** — no activity.

---

## 7. Trend Signals

1. **Security isolation is now table stakes, not a feature.** Four projects independently flagged credential leakage or cross-user memory contamination as top-severity issues (NanoBot #4784, LobsterAI #1202, IronClaw #6900, ZeroClaw #9646/#9647). Expect per-agent ownership, fail-closed behavior, and key-redaction guardrails to become default expectations in every assistant framework.

2. **OpenAI-protocol compatibility is becoming the universal integration standard.** ZeroClaw's Chat Completions RFC (#8603) with 16 comments and OpenClaw's Codex integration work both signal that proprietary WebSocket/ACP surfaces are a liability; agents must speak the lingua franca of existing SDK ecosystems.

3. **Prompt caching is a cost axis users are actively demanding.** CoPaw (#6649), ZeroClaw (#9631), and OpenClaw (#37966) all show users pushing for cache-key control, stable session IDs, and cache-aware provider config. Agent runtimes that expose cache-control primitives will win cost-sensitive self-hosters.

4. **MCP reliability is the new "channel reliability."** The ecosystem is moving from "can we connect to MCP?" to "what happens when MCP fails mid-turn?" — NanoBot's error-envelope bug, PicoClaw's dead-server hang, and Moltis' managed-bundle lifecycle all attack the same problem from different angles.

5. **Memory systems are converging on automation + human control.** Auto-dreaming (Hermes), per-agent dreaming config (OpenClaw), summarize-on-compact (CoPaw), and memory review/edit/forget flows (OpenClaw, ZeroClaw) indicate the next competitive differentiator is memory quality and governance, not just persistence.

6. **Desktop/WebUI UX is a battleground for trust.** macOS Full Disk Access revocation (Hermes), silent session-rename failures (LobsterAI), auto-scroll during streaming (ZeroClaw), and WebUI lag on long histories (PicoClaw) all erode user confidence despite backend progress. Smooth, predictable client behavior is a differentiator.

7. **Local CLI providers are a viable niche.** NullClaw's grok-cli PR extends a pattern (codex-cli, gemini-cli, claude-cli) that appeals to users who want subscription-based access without API-key management — a signal that the "local-first, no-cloud-key" segment is underserved.

8. **CI/tooling health is a leading indicator of project trajectory.** IronClaw's red clippy lane and untracked enforcement gates, plus OpenClaw's gateway OOM/crash-loop cluster, demonstrate that internal engineering health directly forecasts user-facing stability. Projects with hermetic CI (NanoBot, CoPaw fixes) are better positioned for sustainable velocity.

---

**Bottom line for technical decision-makers:** The ecosystem is consolidating around session integrity, memory governance, and security isolation as the core battlegrounds. OpenClaw remains the reference implementation but its stability lag creates an opening for focused competitors. For developers choosing a platform, evaluate not just feature breadth but the project's demonstrated ability to close P0/P1 bugs within a release cycle — the metric that most consistently separates healthy projects from fast-but-fragile ones.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-08-04

## 1. Today’s Overview

In the 24 hours ending 2026-08-04, NanoBot showed strong delivery momentum: 20 of 27 updated PRs reached a merged/closed state, while 7 remain open. Issue activity was moderate, with 5 issues updated (4 open/active, 1 closed) and no new releases. The main work centered on WebUI polish, Anthropic Claude Opus 5 support, and channel-specific fixes for Telegram, WeCom, and Mattermost. A security-sensitive issue about provider API key leakage (`#4784`) remains open and is the most serious unresolved item. Overall, the project looks healthy in throughput, but the open security and MCP reliability bugs keep the risk from being negligible.

## 2. Releases

No new releases were published in this window. There are no changelog, breaking-change, or migration notes to report.

## 3. Project Progress

Notable PRs that advanced the project in the last 24 hours:

- **Anthropic support** — [`fix(anthropic): support Opus 5 effort controls` (#5236)](https://github.com/HKUDS/nanobot/pull/5236)  
  Replaces hard-coded Anthropic parameter exclusions with model-family version thresholds and resolves the Opus 5 temperature rejection reported in [`#5235`](https://github.com/HKUDS/nanobot/issues/5235).

- **WebUI security** — [`feat(webui): support trusted proxy bootstrap auth` (#5210)](https://github.com/HKUDS/nanobot/pull/5210)  
  Adds opt-in trusted upstream-proxy authentication for `/webui/bootstrap`, aimed at Cloudflare Tunnel + Access deployments.

- **WebUI developer experience** — [`feat(webui): add integrated Vite dev mode` (#5239)](https://github.com/HKUDS/nanobot/pull/5239)  
  Adds `nanobot webui --dev` with gateway + Vite HMR for contributor workflows.

- **WebUI UX consistency** — A concentrated batch of merged/closed styling and interaction fixes:  
  - [`fix(webui): render markdown in prompt rail previews` (#5244)](https://github.com/HKUDS/nanobot/pull/5244)  
  - [`fix(webui): align timestamp tooltip styles` (#5245)](https://github.com/HKUDS/nanobot/pull/5245)  
  - [`fix(webui): align automation metadata with timestamps` (#5243)](https://github.com/HKUDS/nanobot/pull/5243)  
  - [`refactor(webui): unify floating controls` (#5240)](https://github.com/HKUDS/nanobot/pull/5240)  
  - [`fix(webui): refine inline token highlights` (#5241)](https://github.com/HKUDS/nanobot/pull/5241)

- **Command handling** — [`fix(commands): reject malformed slash commands` (#5242)](https://github.com/HKUDS/nanobot/pull/5242)  
  Prevents typo/unrecognized slash commands from being forwarded to the LLM.

- **Telegram** — [`fix(telegram): keep fenced code intact when language has special chars` (#5222)](https://github.com/HKUDS/nanobot/pull/5222)  
  Fixes corrupted code blocks for languages like `c++`, `objective-c`, and `html+django`.

- **WeCom** — [`fix(wecom): fall back when filename sanitization strips everything` (#5223)](https://github.com/HKUDS/nanobot/pull/5223)  
  Prevents empty filenames from causing the write step to target the media directory itself.

- **Sessions** — [`feat(session): add cross-session search and mentions` (#5211)](https://github.com/HKUDS/nanobot/pull/5211)  
  Adds bounded read access to persisted sessions and WebUI `@`-mention support for other chats.

Several older conflict-marked PRs were also closed/updated in this window (`#1776`, `#3200`, `#3211`, `#1288`), suggesting maintainers are cleaning up stale PRs.

## 4. Community Hot Topics

The most active discussion items in this window:

- [**#4784 — Security: Provider API keys leaked between providers via global os.environ mutation**](https://github.com/HKUDS/nanobot/issues/4784)  
  This is the highest-comment issue of the window (2 comments). It describes provider API keys overwriting or leaking through the process-global `os.environ` dict. Underlying need: strict provider-level key isolation, especially for gateway-type providers.

- [**#5235 — Anthropic: Opus 5 configuration always rejected by the API**](https://github.com/HKUDS/nanobot/issues/5235)  
  Users are already adopting Opus 5 and hit Nanobot’s outdated `omit_temperature` substring list. This was closed and fixed by [`#5236`](https://github.com/HKUDS/nanobot/pull/5236).

- [**#5237 — MCP tool returns “data not found” envelope → agent ignores it until tool_timeout fires**](https://github.com/HKUDS/nanobot/issues/5237)  
  Users need business-error envelopes inside MCP `CallToolResult.content` to be surfaced to the agent as failures, instead of being treated as successful calls.

- [**#5238 — refactor(session): remove request-scoped access grants**](https://github.com/HKUDS/nanobot/pull/5238)  
  Open, P1 PR that removes the request-scoped `Tool.available()` layer and `SessionAccessScope` abstraction introduced by `#5211`. This is likely the most security-sensitive open PR: it reopens the question of whether session tools should read all persisted sessions.

## 5. Bugs & Stability

Bugs and regressions observed this window, ranked roughly by severity:

1. **Critical / Security — Provider API key leakage**  
   [**`#4784`**](https://github.com/HKUDS/nanobot/issues/4784)  
   `OpenAICompatProvider._setup_env()` mutates global `os.environ` and can overwrite keys across providers. No fix PR has been posted yet.

2. **High — MCP tool errors are silently swallowed when `isError = False`**  
   [**`#5237`**](https://github.com/HKUDS/nanobot/issues/5237)  
   A business error envelope such as `{"code": 404, "msg": "data not exist"}` is treated as success, causing the agent to wait until timeout. No fix PR yet.

3. **High — Anthropic Opus 5 requests rejected**  
   [**`#5235`**](https://github.com/HKUDS/nanobot/issues/5235)  
   Fixed by [`#5236`](https://github.com/HKUDS/nanobot/pull/5236).

4. **Medium — Matrix bot does not auto-join invited rooms**  
   [**`#5247`**](https://github.com/HKUDS/nanobot/issues/5247)  
   `_on_room_invite` callback appears registered, but the bot does not auto-join rooms for allowlisted users. No fix PR yet.

5. **Medium — Telegram polling can silently stall**  
   [**`#5156`**](https://github.com/HKUDS/nanobot/pull/5156)  
   Open PR proposes recovery from permanently stalled polling after transient network blips.

6. **Medium — Telegram code fence corruption with special language tags**  
   [**`#5222`**](https://github.com/HKUDS/nanobot/pull/5222)  
   Fixed and closed.

7. **Medium — WeCom empty filename from over-aggressive sanitization**  
   [**`#5223`**](https://github.com/HKUDS/nanobot/pull/5223)  
   Fixed and closed.

8. **Regression watch — Removal of session access grants**  
   [**`#5238`**](https://github.com/HKUDS/nanobot/pull/5238)  
   Open P1 refactor would remove request-scoped session-read grants introduced by `#5211`. Even if intentional, it needs close security review before merge.

## 6. Feature Requests & Roadmap Signals

Feature-adjacent signals in this window:

- [**`#5246` — Memory `.gitignore` leaves `memory/.cursor` and `memory/history.jsonl` untracked**](https://github.com/HKUDS/nanobot/issues/5246)  
  Small enhancement request to fix scaffolded workspace Git behavior. Likely candidate for a quick patch.

- [**`#5233` — Mattermost group policy for threads, exposed in WebUI**](https://github.com/HKUDS/nanobot/pull/5233)  
  Open PR extending Mattermost support with separate `groupPolicyInThread`. Could land in the next Mattermost-focused release.

- [**`#5184` — Quick Chat and Temporary Chat for WebUI**](https://github.com/HKUDS/nanobot/pull/5184)  
  Open feature PR proposing persistent Quick Chat and connection-owned Temporary Chat. Larger UX feature, currently awaiting review.

- [**`#5210` — Trusted proxy bootstrap auth**](https://github.com/HKUDS/nanobot/pull/5210)  
  Newly closed/merged, indicating Cloudflare Tunnel/Access deployments are becoming a supported use case.

- **WebUI polish cluster**  
  The many closed WebUI PRs (`#5240`, `#5241`, `#5243`, `#5244`, `#5245`) suggest the next release will include a noticeably more consistent frontend.

Based on this window, the next release will likely emphasize WebUI UX consistency, Anthropic Opus 5 support, and channel fixes. The open Mattermost thread policy and Quick Chat/Temporary Chat features are plausible near-term additions.

## 7. User Feedback Summary

Real user pain points visible in this window:

- **Opus 5 users** were blocked by Nanobot’s outdated temperature handling. The rapid fix in `#5236` should restore satisfaction for Anthropic users.
- **MCP integrators** are frustrated by opaque tool failures: error envelopes are not surfaced to the LLM, causing long timeouts and wrong agent behavior.
- **Matrix operators** expect allowlisted invite auto-join to work out of the box; the pending-invite behavior breaks room onboarding.
- **Memory users** find the generated `.gitignore` confusing because important workspace files appear untracked.
- **Telegram users** reported corrupted code blocks for language tags with special characters; the fix is already closed.
- **Self-hosted users behind Cloudflare Tunnel/Access** wanted a tokenless trusted-proxy path for bootstrap auth; `#5210` addresses that.
- **Security-conscious users** will remain concerned until `#4784` provider key isolation is fixed.

Overall, users are actively testing new models, channels, and WebUI workflows, and the maintainer team is responding quickly on most issues. The unresolved security item and MCP error handling are the main sources of dissatisfaction.

## 8. Backlog Watch

Items that need maintainer attention:

- [**`#4784` — Provider API keys leaked via global `os.environ` mutation**](https://github.com/HKUDS/nanobot/issues/4784)  
  Open since 2026-07-06, updated again today, still no fix PR. Highest-priority support item.

- [**`#5237` — MCP tool error envelopes treated as success**](https://github.com/HKUDS/nanobot/issues/5237)  
  Open bug with no fix PR yet; can cause silent agent failures and timeouts.

- [**`#5247` — Matrix bot does not auto-join invited rooms**](https://github.com/HKUDS/nanobot/issues/5247)  
  Open bug with no comments and no fix PR; needs triage.

- [**`#5156` — Telegram polling stall recovery PR**](https://github.com/HKUDS/nanobot/pull/5156)  
  Open since 2026-07-29; important reliability fix awaiting review/merge.

- [**`#5184` — Quick Chat and Temporary Chat WebUI feature**](https://github.com/HKUDS/nanobot/pull/5184)  
  Open since 2026-07-30; a significant UX feature that would benefit from maintainer feedback.

- [**`#5233` — Mattermost thread group policy**](https://github.com/HKUDS/nanobot/pull/5233)  
  Open PR, P2, no visible comments; needs review.

- [**`#5238` — Remove request-scoped session access grants**](https://github.com/HKUDS/nanobot/pull/5238)  
  Open P1 PR with security implications; maintainers should clarify whether this is an intentional reversal of the access-control model introduced in `#5211`.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-08-04

## 1. Today's Overview

Hermes Agent is in a high-velocity development and release cycle following the **v0.20.0 “Herald” release** on August 3. In the last 24 hours, 50 issues and 50 PRs were updated, with 4 issues closed and 2 PRs closed/merged. Community activity is heavily concentrated on Desktop app regressions, gateway message-delivery edge cases, and platform-specific integration bugs. Maintainer response appears strong, with numerous same-day fix PRs targeting freshly reported issues. Overall project health looks active and responsive, though several P1/P2 bugs remain open.

## 2. Releases

### v2026.8.3 — Hermes Agent v0.20.0 “The Herald Release” (August 3, 2026)

The only release in the window. The provided excerpt highlights scale relative to v0.19.0:

- **~3,650 commits**
- **~1,400 merged PRs**
- **~5,200 files changed**
- **~559,000 insertions / ~405,000 deletions**
- **~1,200 issues closed**
- **650+ contributors**

No explicit breaking-change or migration notes were included in the data excerpt.

---

## 3. Project Progress

- **PRs updated in last 24h:** 50 (48 open, 2 merged/closed).
- **Visible closed/merged PR:** [#43930](https://github.com/NousResearch/hermes-agent/pull/43930) — `feat(guardrails): repeated-mutation halt + destructive-overwrite guard`, a long-running guardrails feature now closed.
- **Closed issues in the sample:**
  - [#38855](https://github.com/NousResearch/hermes-agent/issues/38855) — Desktop working directory does not override stale remembered workspace cwd.
  - [#75152](https://github.com/NousResearch/hermes-agent/issues/75152) — Streaming received 0 chunks from custom OpenAI-compatible provider.
  - [#78529](https://github.com/NousResearch/hermes-agent/issues/78529) — HermesPilot mobile dropped assistant text when GPT responses included tool calls.

Notable open features/fixes advancing:

- [#74654](https://github.com/NousResearch/hermes-agent/pull/74654) — Show session state in classic terminal title.
- [#78112](https://github.com/NousResearch/hermes-agent/pull/78112) — Snapshot-bound portfolio pagination for Kanban.
- [#78564](https://github.com/NousResearch/hermes-agent/pull/78564) — Deep-link to individual cron jobs in the web dashboard.
- [#78569](https://github.com/NousResearch/hermes-agent/pull/78569) — Cross-process FIFO lanes for local endpoints.
- [#74864](https://github.com/NousResearch/hermes-agent/pull/74864) — Relay concurrent turn scope corruption fix.

---

## 4. Community Hot Topics

Most active issues by comment count and reactions:

- [#38855](https://github.com/NousResearch/hermes-agent/issues/38855) — **15 comments** · Desktop working directory override inconsistent with remembered localStorage state. Closed, but indicates user confusion around config precedence.
- [#52010](https://github.com/NousResearch/hermes-agent/issues/52010) — **14 comments** · macOS Full Disk Access revoked after every Hermes Desktop update. High-friction update UX issue.
- [#10771](https://github.com/NousResearch/hermes-agent/issues/10771) — **9 comments · 5 👍** · Automatic Memory Consolidation (“Auto Dream”). The most-upvoted feature request in the sample.
- [#62324](https://github.com/NousResearch/hermes-agent/issues/62324) — **5 comments** · Desktop terminal broken because `stage-native-deps.mjs` drops the execute bit on `node-pty`'s `spawn-helper`.
- [#46194](https://github.com/NousResearch/hermes-agent/issues/46194) — **4 comments** · Desktop session switch leaks queued follow-up state.
- [#49689](https://github.com/NousResearch/hermes-agent/issues/49689) — **4 comments** · Desktop screenshot capture + annotation overlay request.

Underlying signals: users are demanding more reliable Desktop state management, smoother macOS updates, and richer agent memory features.

---

## 5. Bugs & Stability

Ranked by severity from the available data.

### Critical / P1

- [#52010](https://github.com/NousResearch/hermes-agent/issues/52010) — macOS Full Disk Access revoked after every Desktop update. No fix PR visible in the sample.
- [#78541](https://github.com/NousResearch/hermes-agent/issues/78541) — Telegram group/forum sessions: normal final send suppressed, swallowing complete replies. Fix attempted in [#78558](https://github.com/NousResearch/hermes-agent/pull/78558).
- [#38855](https://github.com/NousResearch/hermes-agent/issues/38855) — Desktop cwd override ignored due to stale localStorage key. Closed in the sample.

### High / P2

- [#78498](https://github.com/NousResearch/hermes-agent/issues/78498) — Dashboard falsely reports a live gateway as stopped due to PID-reuse guard `create_time` drift on macOS.
- [#46194](https://github.com/NousResearch/hermes-agent/issues/46194) — Desktop session switch leaks queued follow-up state and shows wrong chat contents.
- [#60456](https://github.com/NousResearch/hermes-agent/issues/60456) — `prefill_messages_file` ignored by the Desktop App.
- [#78477](https://github.com/NousResearch/hermes-agent/issues/78477) — Streaming TTS sentence cutter ignores Chinese punctuation, stalling Chinese replies.
- [#78535](https://github.com/NousResearch/hermes-agent/issues/78535) — Weixin voice replies delivered as file attachments instead of native voice bubbles.
- [#78566](https://github.com/NousResearch/hermes-agent/issues/78566) — Gateway onboarding tells users to use `/busy`, but the command is `cli_only` and fails on all messaging platforms.
- [#78543](https://github.com/NousResearch/hermes-agent/issues/78543) — `cryptography` pinned to 48.0.1 in base deps leaves 2 HIGH security advisories open for all users.
- [#8120](https://github.com/NousResearch/hermes-agent/issues/8120) — `vision_analyze` frequently times out in WSL2 with Qwen models.

### Moderate / P3

- [#76153](https://github.com/NousResearch/hermes-agent/issues/76153) — `hermes kanban create` silent-COMMIT bug still manifests despite `--verify-create`.
- [#78512](https://github.com/NousResearch/hermes-agent/issues/78512) — `inline_shell` runs bash on `skill_view` with no sandbox — config-gated RCE-on-load.
- [#78060](https://github.com/NousResearch/hermes-agent/issues/78060) — `nemo_relay` scope stack corruption causes silent turn-finalization failure. Related fix PR: [#74864](https://github.com/NousResearch/hermes-agent/pull/74864).
- [#78050](https://github.com/NousResearch/hermes-agent/issues/78050) — A2A client tools invisible to CLI/TUI sessions.

Many same-day fix PRs are in flight, including [#78558](https://github.com/NousResearch/hermes-agent/pull/78558), [#78562](https://github.com/NousResearch/hermes-agent/pull/78562), [#78570](https://github.com/NousResearch/hermes-agent/pull/78570), [#78572](https://github.com/NousResearch/hermes-agent/pull/78572), [#78573](https://github.com/NousResearch/hermes-agent/pull/78573), [#78575](https://github.com/NousResearch/hermes-agent/pull/78575), and [#78576](https://github.com/NousResearch/hermes-agent/pull/78576).

---

## 6. Feature Requests & Roadmap Signals

Top user-requested features:

- [#10771](https://github.com/NousResearch/hermes-agent/issues/10771) — **Automatic Memory Consolidation / Auto Dream** · 5 👍. Strongest roadmap signal.
- [#78563](https://github.com/NousResearch/hermes-agent/issues/78563) — **Claude Code CLI backend provider** to use subscription directly instead of API credits.
- [#78502](https://github.com/NousResearch/hermes-agent/issues/78502) — **Produce a `config-schema.json`** for config validation.
- [#49689](https://github.com/NousResearch/hermes-agent/issues/49689) — Desktop composer screenshot capture + annotation overlay.
- [#31515](https://github.com/NousResearch/hermes-agent/issues/31515) — Language auto-correction against user-defined grammar/spelling standards.
- [#26858](https://github.com/NousResearch/hermes-agent/issues/26858) — Telegram Business Connection support.
- [#74619](https://github.com/NousResearch/hermes-agent/issues/74619) — RFC: lossless fallback spool and idempotent replay for failed session persistence.

Features already landing via PRs and likely candidates for the next release:

- [#78564](https://github.com/NousResearch/hermes-agent/pull/78564) — Cron job deep-linking in dashboard.
- [#78112](https://github.com/NousResearch/hermes-agent/pull/78112) — Kanban snapshot-bound pagination.
- [#74654](https://github.com/NousResearch/hermes-agent/pull/74654) — Terminal title session state.
- [#78569](https://github.com/NousResearch/hermes-agent/pull/78569) — FIFO admission lanes for local endpoints.

---

## 7. User Feedback Summary

Real user pain points visible in the data:

- **Desktop reliability pain:** stale working directories, leaked session state, ignored `prefill_messages_file`, and terminal startup failures.
- **Update friction on macOS:** repeated Full Disk Access revocation is a significant trust issue.
- **Messaging gateway correctness:** Telegram, Weixin, Feishu, WhatsApp, and Matrix users report message-delivery and deduplication problems.
- **Docs/code contradictions:** Several users filed issues showing CLI docs contradict actual behavior, e.g. [#78540](https://github.com/NousResearch/hermes-agent/issues/78540), [#78566](https://github.com/NousResearch/hermes-agent/issues/78566), [#78567](https://github.com/NousResearch/hermes-agent/issues/78567).
- **TTS/Chinese support:** Missing Chinese sentence-boundary handling is a concrete localization gap.
- **Security-conscious users:** Reports about dependency advisories and config-gated shell execution show active security review from the community.

Overall sentiment is mixed: users are engaged and filing detailed root-cause reports, but several recurring areas — Desktop state, gateway delivery, and update permissions — are causing frustration.

---

## 8. Backlog Watch

Issues/PRs that have been open for a while or remain unresolved despite importance:

- [#8120](https://github.com/NousResearch/hermes-agent/issues/8120) — **P2, open since 2026-04-12** · WSL2 `vision_analyze` timeout; needs reproduction, no fix PR visible.
- [#10771](https://github.com/NousResearch/hermes-agent/issues/10771) — **P3, open since 2026-04-16** · Auto Memory Consolidation; high community interest, no implementation yet.
- [#26858](https://github.com/NousResearch/hermes-agent/issues/26858) — **P3, open since 2026-05-16** · Telegram Business Connection; duplicate but still no action.
- [#31515](https://github.com/NousResearch/hermes-agent/issues/31515) — **P3, open since 2026-05-24** · Language auto-correction; duplicate request, no roadmap response visible.
- [#46194](https://github.com/NousResearch/hermes-agent/issues/46194) — **P2, open since 2026-06-14** · Desktop session switch leakage.
- [#52010](https://github.com/NousResearch/hermes-agent/issues/52010) — **P1, open since 2026-06-24** · macOS Full Disk Access revoked on every update; no fix PR visible.
- [#62324](https://github.com/NousResearch/hermes-agent/issues/62324) — **P3, open since 2026-07-10** · Desktop terminal `node-pty` execute-bit regression.
- [#76153](https://github.com/NousResearch/hermes-agent/issues/76153) — **P3, open since 2026-08-01** · Silent-COMMIT bug persists despite the `--verify-create` fix, suggesting the original fix was incomplete.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

## 1. Today's Overview

PicoClaw activity over the last 24 hours is moderate and healthy: **8 issues** were updated (3 open, 5 closed) and **6 PRs** were updated (3 open, 3 merged/closed), with **no new releases**. Maintainer attention appears focused on clearing stale bugs and reviewing community-contributed fixes, while new contributions continue around provider observability, Telegram topic handling, and routed-agent context management. The open issue list is relatively short, but two stale high-impact bugs — MCP connection hangs and WebUI lag with long histories — remain without a linked fix. Overall, the project is in a steady bugfix-and-localization cycle rather than a feature-expansion phase.

## 2. Releases

No new releases in the last 24 hours.

## 3. Project Progress

Three PRs were closed/merged in the reporting window:

- **[PR #3267](https://github.com/sipeed/picoclaw/pull/3267)**: Fixed a scope bug when refreshing Antigravity tokens, which previously caused `PERMISSION_DENIED` errors during LLM calls after primary auth succeeded.
- **[PR #3273](https://github.com/sipeed/picoclaw/pull/3273)**: Added Japanese (`ja`) localization to the WebUI, fulfilling issue [#3272](https://github.com/sipeed/picoclaw/issues/3272).
- **[PR #3202](https://github.com/sipeed/picoclaw/pull/3202)**: Fixed routing ID normalization so leading/trailing underscores are stripped, matching the documented `^[a-z0-9]...` pattern for agent/account IDs.

Additionally, an open fix PR **[#3316](https://github.com/sipeed/picoclaw/pull/3316)** directly targets the routed-agent context bug in issue [#3301](https://github.com/sipeed/picoclaw/issues/3301), addressing history retention, summarization, and auto-compaction for dispatch-routed chats.

## 4. Community Hot Topics

The most active issues by comment count were:

- **[Issue #3269](https://github.com/sipeed/picoclaw/issues/3269)** — "MCP server connection failure hangs agent loop" (3 comments, 👍1). Users are hitting a hard failure mode where a dead MCP server makes the entire chat interface unresponsive. The underlying need is **resilience and timeout handling for external MCP dependencies**, not just an error message.
- **[Issue #3281](https://github.com/sipeed/picoclaw/issues/3281)** — "WebUI chat input is very laggy when history is a little long" (3 comments, 👍1). This reflects a **frontend performance need** around rendering/in-memory state as conversation history grows.
- **[Issue #3301](https://github.com/sipeed/picoclaw/issues/3301)** — dispatch-routed chats ignore `/clear` and session auto-compression (1 comment, but with an associated fix PR). Users expect per-agent/channel context management to behave identically to default routing.

## 5. Bugs & Stability

Ranked by severity:

1. **High — MCP connection failure hangs the agent loop** ([#3269](https://github.com/sipeed/picoclaw/issues/3269))  
   Open and stale. When an MCP server connection fails, the agent loop hangs and PicoClaw stops replying in chat. This is a critical availability/reliability bug; **no fix PR is linked yet**.

2. **High — Routed-agent context management broken** ([#3301](https://github.com/sipeed/picoclaw/issues/3301))  
   Open. `/clear` and auto-compression don't work for chats routed to non-default agents via dispatch rules. A fix exists in **[PR #3316](https://github.com/sipeed/picoclaw/pull/3316)** but is still open.

3. **Medium — WebUI input lag with long history** ([#3281](https://github.com/sipeed/picoclaw/issues/3281))  
   Open and stale. Typing becomes very laggy once a session accumulates history. No fix PR is linked yet.

4. **Low / Already closed:**
   - [#3264](https://github.com/sipeed/picoclaw/issues/3264) — `SplitMessage` infinite loop on oversized fenced-code info strings.
   - [#3265](https://github.com/sipeed/picoclaw/issues/3265) — Gateway startup failure with unexpected DeltaChat channel type.
   - [#3268](https://github.com/sipeed/picoclaw/issues/3268) — `exec` tool requiring `action` parameter instead of defaulting to `"run"`.

## 6. Feature Requests & Roadmap Signals

Several feature-oriented items moved through the pipeline:

- **Japanese localization** ([#3272](https://github.com/sipeed/picoclaw/issues/3272)) — closed via **[PR #3273](https://github.com/sipeed/picoclaw/pull/3273)**, so `ja` support is likely to appear in the next WebUI release.
- **Externally-managed gateway / systemd support** ([#3276](https://github.com/sipeed/picoclaw/issues/3276)) — closed. Signals headless deployment is a real use case and launcher lifecycle handling needs to coexist with systemd.
- **Telegram topics in private bot chats** ([PR #3315](https://github.com/sipeed/picoclaw/pull/3315)) — open PR extending topic support to private chats with forum-topic mode enabled.
- **Prompt cache token logging** ([PR #3317](https://github.com/sipeed/picoclaw/pull/3317)) — open PR adding cache token visibility to LLM response debug logs, particularly useful for DeepSeek/Cloudflare AI Gateway users.

Likely next-version candidates: Japanese UI locale, launcher systemd integration improvements, Telegram private-chat topic support, and prompt-cache observability.

## 7. User Feedback Summary

Real user pain points emerging from this window:

- **Reliability of external integrations**: MCP connection failures should not freeze the whole chat loop ([#3269](https://github.com/sipeed/picoclaw/issues/3269)).
- **Headless server deployments**: Users run `picoclaw gateway` and the launcher under systemd and want the launcher to detect externally-managed gateways rather than assume it owns the lifecycle ([#3276](https://github.com/sipeed/picoclaw/issues/3276)).
- **Internationalization**: Japanese-speaking users need full WebUI/Launcher localization, not just docs ([#3272](https://github.com/sipeed/picoclaw/issues/3272)).
- **Multi-channel power users**: Discord/Telegram routed-agent sessions need correct history, summarization, and compression behavior ([#3301](https://github.com/sipeed/picoclaw/issues/3301)).
- **Performance on long sessions**: WebUI typing lag makes sustained chatbot sessions unpleasant ([#3281](https://github.com/sipeed/picoclaw/issues/3281)).
- **Provider auth friction**: Antigravity token refresh scope errors caused silent LLM call failures until fixed ([#3267](https://github.com/sipeed/picoclaw/pull/3267)).

Overall, users are technically sophisticated, provide detailed environment info, and contribute scoped fixes. The main dissatisfaction centers on failure modes that make the agent unresponsive rather than missing product features.

## 8. Backlog Watch

Items needing maintainer attention:

- **[#3269](https://github.com/sipeed/picoclaw/issues/3269)** — Open, stale, severe MCP hang with no fix PR. Should be prioritized or explicitly marked as planned.
- **[#3281](https://github.com/sipeed/picoclaw/issues/3281)** — Open, stale WebUI lag issue; no linked PR. May need frontend profiling or virtualized history rendering.
- **[#3316](https://github.com/sipeed/picoclaw/pull/3316)** — Fix for routed-agent context management; should be reviewed and merged to close [#3301](https://github.com/sipeed/picoclaw/issues/3301).
- **[#3315](https://github.com/sipeed/picoclaw/pull/3315)** — Telegram private-chat topic support; small scoped change awaiting review.
- **[#3317](https://github.com/sipeed/picoclaw/pull/3317)** — Prompt cache token logging; useful observability improvement awaiting review.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-08-04

## 1. Today's Overview
- No issues were updated in the last 24 hours, and no new issues are currently tracked.
- 8 pull requests were active/updated; 2 are now closed/merged and 6 remain open.
- No new releases were published.
- Most activity centered on bug fixes, the upcoming Dial channel integration, and infrastructure hardening.
- Overall project health looks steady: maintainers are closing core fixes and contributors are continuing to propose solid improvements.

## 2. Releases
None.

## 3. Project Progress
Two PRs were closed/merged in this window:

- [#3154 fix(agent-runner): give scheduled tasks current run time](https://github.com/nanocoai/nanoclaw/pull/3154)  
  Improves scheduled task handling by rendering task time from the effective scheduled occurrence (`process_after`) and adding a task-only `current_time` including weekday and configured agent-group timezone.

- [#3182 versions: repin the agent image to hardened-2026-08-02](https://github.com/nanocoai/nanoclaw/pull/3182)  
  Repins the agent image to a hardened build while keeping identical NanoClaw content/upstream digest — a low-risk infrastructure refresh.

Also active today:

- [#3186 refactor: add host seams for skill-owned capabilities](https://github.com/nanocoai/nanoclaw/pull/3186)  
  Open refactor aiming to make skill-owned capabilities more decoupled/testable.

- [#3185 fix(discord): strip \n delimiter in webhook interaction custom_id so approvals resolve correctly](https://github.com/nanocoai/nanoclaw/pull/3185)  
  New bug-fix PR for Discord approval handling.

## 4. Community Hot Topics
No issues had meaningful comment/reaction activity in the last 24 hours, and the dataset shows zero 👍 on all PRs.

The most notable active discussion signals are around:

- **Dial channel support** — two related PRs updated today:
  - [#3041 feat(channels): add Dial channel adapter (SMS + AI voice calls)](https://github.com/nanocoai/nanoclaw/pull/3041)
  - [#3050 feat(setup): add Dial to the channel picker + wizard/skills](https://github.com/nanocoai/nanoclaw/pull/3050)

Underlying need: users want a new practical channel for SMS/AI voice interactions, with full setup-wizard integration.

## 5. Bugs & Stability
Bug-related PRs, ranked by user impact:

1. **Discord approvals always rejecting** — [#3185](https://github.com/nanocoai/nanoclaw/pull/3185)  
   Clicking “Approve” on Discord resolves to the wrong option, causing every approval to be rejected. Cause: `\n` delimiter not stripped from `custom_id` in the webhook interaction path.  
   Fix PR exists and is open.

2. **Dead session when transcript file is missing** — [#3184](https://github.com/nanocoai/nanoclaw/pull/3184)  
   If a stored continuation transcript is gone, the next message fails permanently with `No conversation found with session ID`.  
   Fix PR proposes rotating to a new session instead of resuming dead state.

3. **Retention cleanup reaps cold sessions** — [#3183](https://github.com/nanocoai/nanoclaw/pull/3183)  
   Users messaging a quiet channel after 30+ days get raw `No conversation found...` errors because cleanupPeriodDays isn't pinned.  
   Fix PR is open.

## 6. Feature Requests & Roadmap Signals
Strong roadmap signals from current PRs:

- **Dial channel integration** — [#3041](https://github.com/nanocoai/nanoclaw/pull/3041) and [#3050](https://github.com/nanocoai/nanoclaw/pull/3050) show an active push to support SMS/AI voice calls as a first-class channel with setup-wizard support.
- **Host seams for skill-owned capabilities** — [#3186](https://github.com/nanocoai/nanoclaw/pull/3186) suggests architectural work to make skill capabilities more portable and easier to test.
- **Scheduled task runtime awareness** — [#3154](https://github.com/nanocoai/nanoclaw/pull/3154) adds current-time context to scheduled tasks, improving agent behavior for time-sensitive runs.

Likely next version will include the Dial channel if those PRs merge, plus the scheduled-task fix and hardened image refresh.

## 7. User Feedback Summary
Real user pain points visible from PR descriptions:

- Discord approval actions are unreliable; users click “Approve” but the action is registered as “Reject”.
- Quiet or cold channels can break with raw session errors instead of graceful recovery.
- Missing local transcript files leave conversations permanently broken.
- Scheduled tasks need accurate “current run time” semantics rather than creation timestamps.

No direct satisfaction/unhappiness metrics are available, but the quick creation of targeted fix PRs suggests maintainers are responding to reported issues.

## 8. Backlog Watch
PRs that may need maintainer attention:

- [#3041 Dial channel adapter](https://github.com/nanocoai/nanoclaw/pull/3041) — open since July 14, updated today; long-running feature work.
- [#3050 Dial setup wizard integration](https://github.com/nanocoai/nanoclaw/pull/3050) — open since July 14, updated today; depends on/relates to #3041.
- [#3184 Missing transcript rotation fix](https://github.com/nanocoai/nanoclaw/pull/3184) — open since August 3; waiting for review/merge.
- [#3183 Retention cleanup fix](https://github.com/nanocoai/nanoclaw/pull/3183) — open since August 3; bug fix pending.
- [#3186 Host seams refactor](https://github.com/nanocoai/nanoclaw/pull/3186) — newly opened; needs initial review.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest — 2026-08-04

## 1. Today's Overview

NullClaw saw minimal activity on 2026-08-04: no issues were updated, no releases were published, and exactly one pull request was active. The only touched PR (#981) remains open and was updated today, suggesting ongoing work or review around a proposed `grok-cli` provider. No merge activity occurred, so no new features landed in the main branch. Overall, the project appears to be in a quiet maintenance phase with low but non-zero contributor momentum.

## 2. Releases

No new releases were published on 2026-08-04.

---

## 3. Project Progress

No PRs were merged or closed in the last 24 hours.

The only updated PR is still open:

- **[#981 [OPEN] feat(provider): add grok-cli provider for xAI Grok CLI](https://github.com/nullclaw/nullclaw/pull/981)**
  - Author: valonmulolli
  - Created: 2026-07-29
  - Updated: 2026-08-04
  - Status: Open
  - Summary: Adds a new optional CLI-based provider that delegates to the local `grok` CLI, following the same spawn-per-request pattern as `codex-cli`, `gemini-cli`, and `claude-cli`.

This PR represents the only visible feature advancement in the current window, though it has not been merged yet.

---

## 4. Community Hot Topics

The only active item is:

- **[#981 — add grok-cli provider for xAI Grok CLI](https://github.com/nullclaw/nullclaw/pull/981)**

No comment/reaction counts were captured for this PR, so engagement metrics are unavailable. The underlying need appears to be broader provider flexibility: users want to use locally installed AI CLIs — now including xAI's Grok — through NullClaw without requiring API-key-based integration. The PR deliberately makes the provider optional, implying a preference for lightweight, opt-in integrations over hard dependencies.

---

## 5. Bugs & Stability

No bugs, crashes, regressions, or stability issues were reported in the last 24 hours. No fix PRs are active in the current data.

---

## 6. Feature Requests & Roadmap Signals

The main roadmap signal is **PR #981**, which requests and implements support for the `grok` CLI as a provider.

- If merged, this would add xAI Grok to the existing family of CLI-based providers (`codex-cli`, `gemini-cli`, `claude-cli`).
- The design follows an established pattern, making integration relatively low-risk.
- This feature could plausibly be included in the next NullClaw release, pending maintainer review.
- No other feature requests were recorded in the last 24 hours.

---

## 7. User Feedback Summary

User feedback is sparse in this window. With no new issues and only one PR, the main signal comes from the contributor behind **PR #981**:

- Desired use case: using xAI's Grok CLI through NullClaw.
- Pain point addressed: lack of native/simple provider support for Grok.
- Preference: optional provider requiring local `grok` CLI installation and authentication, rather than a bundled dependency.

No explicit satisfaction or dissatisfaction signals were visible in the data.

---

## 8. Backlog Watch

There are no open issues in the tracker, so no long-unanswered issues need attention.

However, **PR #981** has been open since 2026-07-29 and was updated on 2026-08-04. It may require maintainer review or merge decision:

- **[#981 — add grok-cli provider for xAI Grok CLI](https://github.com/nullclaw/nullclaw/pull/981)**

This is the only potentially stale item in the current backlog.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-08-04

## 1. Today's Overview

IronClaw shows **extreme activity**: 50 issues and 50 PRs were updated in the last 24 hours, with 8 issues closed and 20 PRs merged/closed. The project is in the midst of a large multi-wave restructuring effort — WS2, WS3/4, and WS6 refactor tracks all saw consolidation PRs today, several authored as XL-sized superseding PRs at the owner's request. However, `origin/main` is currently **red on the Code Style clippy lane** (#7119), with a WIP unbreaking PR (#7154) already open. A **P0 security issue** (#6900, cross-user memory leak in shared channels) and the **run-failure delivery gap** (#6896) remain open, while a major binary-corruption bug was fixed and closed. No new releases were published.

## 2. Releases

**No releases on 2026-08-04.** (The release automation PR #5598 has been open since 2026-07-03 — see Backlog Watch.)

## 3. Project Progress

**Merged/Closed PRs (notable):**

- **#7062** — `fix(webui): scope workspace and memory views` — Scope WebUI Workspace/Memory to the authenticated tenant/user; fail closed for signed/non-operator sessions. *(closed)*
- **#7143** — `WS2: re-layer host_ingress, delete the retired-identity migration, close four WS2 rows` — Executed #7092; notably *excluded* the `extension_host → loops` flip because measurements showed the blocker is not what the plan claimed (see #7145). *(closed)*
- **#7155** — `test(architecture): itemize the extension_host product residue; execute the eight doc-truth corrections` — One enforcement addition plus eight doc-truth fixes; no production `src/` changes. *(closed)*
- **#7132** — `Fix grep filesystem diagnostics` — Makes builtin grep root stat/read failures model-visible, with redacted `file not found` reasons and bounded scan incompleteness reporting. *(closed)*
- **#7134** — `fix(ci): make Windows fixtures portable and stabilize E2E coverage` — First-time contributor PR; enables post-merge Windows clippy and confines QA-only run-artifact routes to hermetic E2E fixtures. *(closed)*
- **#7126** — `fix(webui): stop "Reconnecting" badge flashing on every streamed chunk` — Prevents SSE transport retries from toggling connection status on each chunk. *(closed)*

**Closed issues with fixes shipped:** #6898 (write_file binary corruption), #7116 (Live-QA Slack gating), #7100 (Reborn test planner failing on `crates/AGENTS.md`), #7069 (Google repeated auth).

**Still-open large PRs worth tracking:** #7157 (channel delivery tool), #7139 (Wave 4 consolidation), #7141 (Wave 3 consolidation), #7152 (13 WS6 renames), #7154 (unbreak main clippy + defect set), #7156 (enforcement fixes), #7131 (run-failure delivery fix), #7135 (pageable result_read fix).

## 4. Community Hot Topics

- **#7137 — live-canary shard artifacts are 700MB–1.5GB; exclude regenerable paths** (6 comments) — Practical CI infrastructure pain: 13 artifact bundles exceed 5GB, burning GitHub Actions storage quota and slowing triage. Signals a need for artifact hygiene in the canary pipeline.
- **#6898 — write_file silently corrupts binary documents (docx)** (4 comments, closed) — A read-proof fingerprint bypass and missing binary-target guard caused silent data corruption. Closed today; a strong example of the project responding quickly to data-integrity bugs.
- **#7119 — Code Style clippy is package-set-dependent: main is red** (3 comments) — `origin/main` fails clippy for the `{ironclaw, ironclaw_reborn_config}` package set. Reproduced on a clean checkout; WIP fix in #7154.
- **#7145 — WS2: finish the extension_host → loops re-layer, sized from the four-port residue** (3 comments) — Methodological discussion: the prior sizing from production-file count repeated a planning error; successor to #7092, rewritten per #7155.
- **#7138 — Triggered channel failure notices use static summaries; WebUI gets model-explained turn** (3 comments) — Parity follow-up to #6896: delivery works, but notice quality lags behind the WebUI experience.
- **#6900 — Shared-channel default subject binding collapses all users into the operator's memory namespace** (3 comments) — **P0 security/cross-user memory leak**; traffic from unrouted shared conversations adopts another user's memory namespace.
- **#7087 — Reborn PR test planner hard-fails on Dockerfile, .githooks/, .claude/, crates/AGENTS.md, test-tools/** (3 comments) — Pre-existing CI planner defect that fails whole test workflows on innocent file touches.

Underlying needs: CI reliability and speed, artifact-size control, data integrity, notification delivery quality, and multi-tenant memory isolation.

## 5. Bugs & Stability

Ranked by severity:

1. **#6900 (P0, security, open)** — Shared-channel default subject binding collapses all users into the operator's memory namespace: **cross-user memory leak**. Fail-closed behaviour or per-actor binding required. **No fix PR yet.**
2. **#7119 (open)** — Main's clippy lane is red; CI is broken for the project's own HEAD. Fix in progress via **#7154** (WIP).
3. **#6896 (open)** — Scheduled/triggered run failures never delivered to users (timeout/cancel included). Fix PR **#7131** is open.
4. **#6899 (open)** — Install failures drop diagnostics: lifecycle blockers computed but never rendered; `skill_install` collapses all errors to `operation_failed`.
5. **#7146 (open)** — **121 tracing sites** use `target = "…"` (field) instead of `target: "…"` (metadata), making those events invisible to filters they name. Fix included in #7154.
6. **#7103 (open)** — Latency-trace field computed even when latency tracing is off (per-tool-call JSON byte cost).
7. **#7104 (open)** — Extractors report "no text found" as `Failed` rather than `Empty` — the model is told the wrong thing.
8. **#7085 (open)** — `check-version-bumps.sh` silently skips WIT version cross-check on macOS (BSD sed lacks `\+`).
9. **#7115 (open)** — `docker/reborn/entrypoint.sh` gates legacy-Slack migration on a dead env var; following the docs skips the migration.
10. **#7081 (open)** — Docker fail-closed test gate wired to nothing (`IRONCLAW_REQUIRE_DOCKER_TESTS` never set in CI).
11. **#7147 / #7151 (open)** — Enforcement gates are untracked (architecture ratchet slack, composition share-based mass gate) letting the "god crate" re-accrete while CI stays green; fixes in **#7156**.
12. **#7083 (open)** — Coverage is dark for the entire `crates/extensions/` family; five crates unfloorable.

**Also fixed today:** #6898 (binary corruption, P0) and #7116 (Slack gating, closed).

## 6. Feature Requests & Roadmap Signals

- **Channel delivery tool (#7157, open XL PR)** — Implements an approved design with a two-lane model (conversation lifecycle + notification channels), deleting delivery heuristics. Likely to land as a headline feature soon.
- **Compaction inference isolation (#7111, open PR, fixes #6990)** — Fresh run/turn identities for one-shot system calls, prompt-cache suppression flag, omits `cache_control` markers. Part of the pi-harness adoption program.
- **Bounded JSON file queries (#7133, open PR)** — `builtin.json` read support for explicitly supplied files under scoped mounts, with bounded actionable diagnostics.
- **Pageable result_read preservation (#7135, open PR)** — Returns original pageable references instead of inline staging writes for `builtin.result_read`.
- **QA coverage expansion (#7114, open PR)** — Maps manual-QA use cases UC1–UC11 against existing coverage and adds missing rows.
- **IronHub documentation (#6965, open PR)** — New docs hub (Overview, Installing skills & tools, Contributing); renames legacy "ClawHub" references.
- **Roadmap signals from issues:** The pi-harness adoption program drives P0/P1 items (context-budget from model window #6988, hybrid token accounting #6989, cache-stable tool arrays #6986), and the WS2/WS6 restructuring waves continue toward the target architecture (epic #3773). Expect the next releases to include the channel delivery tool, compaction isolation, and Wave 4 structural renames.

## 7. User Feedback Summary

- **#7072 (bug_bash_P2)** — Telegram messages render raw Markdown instead of formatted text on the Railway QA instance. Formatting of `###`, `**`, etc. is visibly broken for users.
- **#7069 (bug_bash_P1, closed today)** — Google services required repeated authentication even after completing authorization flows; reported via QA but fixed/closed today.
- **#3762 (customer, open since May)** — Editing `AGENTS.md` in the web UI does not update the system prompt for current or future conversations. This is the longest-running user-facing complaint and remains unfixed.
- **#7137 (from CI operators)** — Artifact bloat makes triage "impractical" and eats storage quota; friction in the live-canary workflow.
- **#7116 / #7115 / #7081 (maintainer-reported)** — Config and env-var wiring that "follows the docs" silently skips intended behaviour: a recurring theme of dead switches and docs/behaviour drift this week.

Overall, external user reports are relatively few but concrete (Telegram formatting, Google auth, AGENTS.md updates); the bulk of churn is maintainer- and bot-driven refactoring, CI repair, and bug bashes.

## 8. Backlog Watch

- **#3762 (open since May 18)** — AGENTS.md edits not reflected in system prompts; customer-reported, 2 comments, no fix PR. The longest-unaddressed user-facing issue.
- **#5598 (release PR, open since July 3)** — `chore: release` with breaking changes to `ironclaw_common` (0.4.2→0.5.0) and `ironclaw_skills` (0.3.0→0.4.0); no releases have shipped for over a month despite the PR being open.
- **#7087 (open since Aug 3)** — Reborn PR test planner hard-fails on common paths (Dockerfile, `.claude/`, `crates/AGENTS.md`); pre-existing on main and still blocking unrelated PRs.
- **#7102 / #7107 (open)** — WS6 measurement handoffs for extractors/observability and RebornRuntime re-export wall; waiting for an executor to pick up.
- **#7140 (dependabot, open)** — 8 dependency updates (base64 0.23.0, toml, rstest, etc.) awaiting review/merge.
- **#7144 (open)** — 29 pre-existing defect threads surfaced by a consolidation review; a fix set is in progress within #7154.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

## 1. Today's Overview

Activity on 2026-08-04 was release-focused and high-volume: 12 PRs were updated, with 10 closed/merged and 2 still open. The `release/2026.8.3` branch was merged into `main` via PR #2430, bundling credit-reward activities, login-page optimization, Artifact auto-preview controls, model-overload error classification, and Windows installer improvements. No new formal GitHub releases were published in the last 24 hours. On the issue side, only 1 issue was updated, and it remains an open security bug (#1202) regarding possible model-key leakage. Overall, the project looks healthy and active, though the unresolved security issue and several stale open items deserve maintainer attention.

## 2. Releases

No new releases were published in the last 24 hours. The latest release-related activity was the merge of `release/2026.8.3` into `main` via [PR #2430](https://github.com/netease-youdao/LobsterAI/pull/2430), which signals an upcoming 2026.8.3 release containing:

- Native credit-reward activities
- Streamlined first-run login experience
- Control over Artifact auto-preview
- Improved model-error handling
- Windows installer reliability improvements

## 3. Project Progress

The following PRs were closed/merged today:

- [PR #2430](https://github.com/netease-youdao/LobsterAI/pull/2430) — **Release: 2026.8.3**: merge of `release/2026.8.3` into `main`; includes credit-reward activities, first-run login improvements, Artifact auto-preview settings, model-error handling, and Windows installer fixes.
- [PR #2429](https://github.com/netease-youdao/LobsterAI/pull/2429) — **Chore: optimize login page**.
- [PR #2428](https://github.com/netease-youdao/LobsterAI/pull/2428) — **fix: complete startup credit campaign analytics fields**: reports full login redirect URL and error messages for campaign claims.
- [PR #2427](https://github.com/netease-youdao/LobsterAI/pull/2427) — **feat(activity): bundle startup credit campaign artwork**: render campaign offer from local assets while keeping server-controlled availability.
- [PR #2426](https://github.com/netease-youdao/LobsterAI/pull/2426) — **feat(cowork): classify model capacity overload separately from rate limit**: splits provider overload/capacity errors from generic rate-limit messaging.
- [PR #2425](https://github.com/netease-youdao/LobsterAI/pull/2425) — **feat(settings): add artifact auto-preview toggle**: lets users disable automatic previews while preserving manual preview defaults.
- [PR #2424](https://github.com/netease-youdao/LobsterAI/pull/2424) — **fix(activity): restore active credits campaign**: reverts a previous removal and restores the 500-credit claim flow for eligible non-subscribers.
- [PR #1282](https://github.com/netease-youdao/LobsterAI/pull/1282) — **chore(deps): bump @headlessui/react from 1.7.19 to 2.2.9** (stale, closed).
- [PR #1283](https://github.com/netease-youdao/LobsterAI/pull/1283) — **chore(deps): bump react from 18.3.1 to 19.2.4** (stale, closed).
- [PR #1284](https://github.com/netease-youdao/LobsterAI/pull/1284) — **chore(deps): bump react-syntax-highlighter from 15.6.6 to 16.1.1** (stale, closed).

The main areas advanced today were release integration, credit-campaign feature work, login UX, settings controls, and model-error classification.

## 4. Community Hot Topics

The most active issue today is [Issue #1202](https://github.com/netease-youdao/LobsterAI/issues/1202): **【bug】agent泄漏model key信息，存在敏感信息泄漏风险** (Agent leaks model key info / sensitive information disclosure risk).

- Author: `blueb0ne`
- Created: 2026-04-01, Updated: 2026-08-04
- Comments: 1, Reactions: 0
- Status: Open, marked `stale`

The user reports that asking the agent for current key configuration leads the agent to reveal where config files and key environment variables are located, then further prompting can expose model key details. The expected behavior is that the agent refuses to disclose key information. This issue reflects a real security-concern signal from the community: users expect the agent to have protective guardrails around credential/key-related data.

## 5. Bugs & Stability

Ranked by severity:

1. **High — Sensitive key leakage risk**  
   [Issue #1202](https://github.com/netease-youdao/LobsterAI/issues/1202): The agent appears willing to reveal model key configuration locations and key-related environment variable information. No dedicated fix PR has been identified yet. This is the most serious stability/security item today.

2. **Medium — Silent session rename failures**  
   [PR #1205](https://github.com/netease-youdao/LobsterAI/pull/1205): An open fix for `handleRenameSave` silently swallowing rename failures. The input would close with no user feedback. The proposed fix keeps the input open and shows a localized toast. The PR remains open and marked stale.

3. **Low — Misleading rate-limit error on model overload**  
   [PR #2426](https://github.com/netease-youdao/LobsterAI/pull/2426): Provider "overloaded"/capacity errors were previously grouped with rate-limit messages, causing users to retry too early. This was fixed today with a dedicated `ModelOverloaded` classification.

No new crash or regression reports were filed in the last 24 hours.

## 6. Feature Requests & Roadmap Signals

The clearest user-driven signal is the security request in [Issue #1202](https://github.com/netease-youdao/LobsterAI/issues/1202): the agent should refuse to reveal API/model key configuration details. Given the severity of this issue, protection against credential leakage is likely to become a priority in the next releases.

Other roadmap signals from merged PRs:

- **Artifact auto-preview control** ([PR #2425](https://github.com/netease-youdao/LobsterAI/pull/2425)) — users now get control over automatic file preview behavior.
- **Credit-reward campaign support** ([PR #2424](https://github.com/netease-youdao/LobsterAI/pull/2424), [PR #2427](https://github.com/netease-youdao/LobsterAI/pull/2427), [PR #2428](https://github.com/netease-youdao/LobsterAI/pull/2428)) — startup credit-reward activity is being productized.
- **Better model-error messaging** ([PR #2426](https://github.com/netease-youdao/LobsterAI/pull/2426)) — distinguishes overload from rate-limit, enabling more appropriate user retry behavior.

Likely next-version focus areas: 2026.8.3 release stabilization, key-information redaction/security hardening, and continued polish of first-run and campaign flows.

## 7. User Feedback Summary

Direct user feedback in the last 24 hours is limited but notable:

- **Security concern**: In [Issue #1202](https://github.com/netease-youdao/LobsterAI/issues/1202), the user is dissatisfied that the agent does not refuse to disclose model key information. This is both a trust and security pain point, and the user explicitly expects refusal-like protective behavior.
- **UX issue**: [PR #1205](https://github.com/netease-youdao/LobsterAI/pull/1205) reflects a user-visible annoyance where session rename failures are silent; the open fix addresses this with explicit toast feedback.
- **Release-oriented improvements** in [PR #2430](https://github.com/netease-youdao/LobsterAI/pull/2430) — streamlined login, Artifact preview controls, and clearer model errors — suggest ongoing attention to user experience friction reported by the community.

## 8. Backlog Watch

The following items are long-open or stale and need maintainer attention:

- [Issue #1202](https://github.com/netease-youdao/LobsterAI/issues/1202) — **Open security bug about agent leaking model key info**  
  Created 2026-04-01, updated 2026-08-04, marked `stale`. Only 1 comment; no fix PR yet. This should be prioritized because it involves sensitive credential disclosure.

- [PR #1205](https://github.com/netease-youdao/LobsterAI/pull/1205) — **Open fix: show error toast when session rename fails**  
  Created 2026-04-01, updated 2026-08-04, marked `stale`. The fix is small and user-visible; it needs review or closure.

- [PR #1277](https://github.com/netease-youdao/LobsterAI/pull/1277) — **Open dependency bump: electron group**  
  Created 2026-04-02, updated 2026-08-04. Bumps `electron` from 40.2.1 to 43.2.0 and `electron-builder`. Long-running open dependency PR; should be merged or closed to reduce maintenance noise.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-08-04

## 1. Today's Overview

Moltis saw minimal activity in the last 24 hours: no issues were updated, no new releases were cut, and no pull requests were merged or closed. Two open pull requests received updates, including one substantive feature PR (#1183) for managed MCP repository bundles and one automated dependency bump (#1184). Overall project health appears stable but quiet, with development momentum concentrated on MCP server lifecycle improvements rather than bug fixing or community issue triage. The lack of closed PRs and new releases suggests the project is in a consolidation/review phase.

## 2. Releases

No new releases were published on 2026-08-04. There are no release notes, breaking changes, or migration details to report.

## 3. Project Progress

No pull requests were merged or closed in the last 24 hours.

**Open feature work:**
- **PR #1183 — feat(mcp): add managed repository bundles**  
  [https://github.com/moltis-org/moltis/pull/1183](https://github.com/moltis-org/moltis/pull/1183)  
  This PR proposes managed Git repository bundles for discovering, previewing, installing, updating, rolling back, and removing MCP servers. It also adds support for HTTPS credentials, pinned managed SSH transport, vault lifecycle integration, and imported repository-backed MCP configurations. While not merged yet, it represents the main feature advancement currently under review.

**Dependency maintenance:**
- **PR #1184 — chore(deps-dev): bump undici from 7.28.0 to 7.29.0 in /website**  
  [https://github.com/moltis-org/moltis/pull/1184](https://github.com/moltis-org/moltis/pull/1184)  
  Automated dependency update in the website workspace, part of the `npm_and_yarn` group. No functional changes to core project behavior.

## 4. Community Hot Topics

There are currently no Issues in the repository, and neither of the two recently updated PRs shows explicit comments or reactions in the provided data. The most notable discussion-worthy item is:

- **PR #1183 — managed repository bundles for MCP servers**  
  [https://github.com/moltis-org/moltis/pull/1183](https://github.com/moltis-org/moltis/pull/1183)  
  This PR touches a user-facing pain point: simplifying how MCP servers are discovered, previewed, installed, and updated. The underlying need appears to be reducing onboarding complexity and providing a robust lifecycle management path for repository-backed MCP configurations.

Given the absence of issues and comments, community engagement is low in this window, but the MCP feature area is clearly an active development focus.

## 5. Bugs & Stability

No bugs, crashes, regressions, or stability-related issues were reported in the last 24 hours. The only maintenance-related signal is:

- **PR #1184 — bump undici from 7.28.0 to 7.29.0**  
  [https://github.com/moltis-org/moltis/pull/1184](https://github.com/moltis-org/moltis/pull/1184)  
  Likely contains upstream fixes and should be reviewed and merged to keep website dependencies current. No severity ranking is applicable because no user-reported defects are in the data.

## 6. Feature Requests & Roadmap Signals

The clearest roadmap signal is **PR #1183**:

- **Managed repository bundles for MCP servers**  
  [https://github.com/moltis-org/moltis/pull/1183](https://github.com/moltis-org/moltis/pull/1183)  
  The PR adds capabilities for:
  - Discovering and previewing MCP servers from managed Git repositories
  - Installing, updating, rolling back, and removing MCP servers
  - HTTPS credentials and pinned managed SSH transport
  - Vault lifecycle integration
  - Importing repository-backed MCP configurations

This suggests the next version of Moltis may include a more complete MCP server management experience, especially around secure repository-based distribution. The "simplify web onboarding" mention in the PR summary also hints at planned UX improvements.

## 7. User Feedback Summary

No direct user feedback, issue comments, or reactions were captured in the provided data for 2026-08-04. Indirect signals include:

- A sustained need for **MCP server lifecycle management** — reflected in PR #1183.
- A desire to **simplify onboarding** and reduce friction when working with MCP servers.
- A general expectation of **dependency hygiene**, as shown by the active dependabot PR.

Without explicit issue tracker activity, user satisfaction cannot be assessed quantitatively, but the project appears to be prioritizing infrastructure and developer experience.

## 8. Backlog Watch

No long-standing issues are currently open (the Issue list is empty). However, two open PRs may require maintainer attention:

- **PR #1183 — managed repository bundles**  
  [https://github.com/moltis-org/moltis/pull/1183](https://github.com/moltis-org/moltis/pull/1183)  
  Opened 2026-08-02, last updated 2026-08-03. This is a significant feature PR and has been open for at least two days without visible merge/close activity. Maintainer review and feedback would help keep momentum.

- **PR #1184 — undici dependency bump**  
  [https://github.com/moltis-org/moltis/pull/1184](https://github.com/moltis-org/moltis/pull/1184)  
  Created and updated 2026-08-04. Automated dependency bumps should be reviewed promptly to avoid accumulating stale PRs.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-08-04

## 1. Today's Overview

CoPaw/QwenPaw shows high sustained activity: 20 issues were updated in the last 24 hours (10 open, 10 closed) and 47 pull requests were touched (26 open, 21 closed/merged), with no new releases published. The most concentrated work areas are memory/context handling, channel reliability, console UI fixes, plugin packaging, and CI/test hardening. The project appears healthy but is carrying a mix of small regression fixes and larger feature PRs (reranker support, OS-level enhancements) that remain under review. User feedback continues to arrive from real daily usage, with several integration issues caused by version and provider mismatches.

## 2. Releases

No new releases were published in this window. Release-duty verification for **v2.1.0-beta.1** was completed/closed via [[#6656](https://github.com/agentscope-ai/QwenPaw/issues/6656)].

## 3. Project Progress

21 PRs were closed/merged in the last 24 hours. Notable changes from the visible set:

- **Timestamp/timezone fixes** — multiple PRs landed to fix incorrect UTC/local timestamp conversion:
  - [[#6309](https://github.com/agentscope-ai/QwenPaw/pull/6309)] — `fix(chats): convert session timestamps across timezones`
  - [[#6685](https://github.com/agentscope-ai/QwenPaw/pull/6685)] — `fix(timestamp): improve timestamp handling in agentscope_msg_to_message`
  - [[#6618](https://github.com/agentscope-ai/QwenPaw/pull/6618)] — `fix(console): remove forced UTC timestamp normalization in session list`
- **CI/test stability**:
  - [[#6678](https://github.com/agentscope-ai/QwenPaw/pull/6678)] — install Playwright Chromium for the integration suite
  - [[#6686](https://github.com/agentscope-ai/QwenPaw/pull/6686)] — fix Chrome contract mismatches and add p-tier markers
  - [[#6679](https://github.com/agentscope-ai/QwenPaw/pull/6679)] — align import-local tests with #6487 source guard
- **Console fixes**:
  - [[#6682](https://github.com/agentscope-ai/QwenPaw/pull/6682)] — sync legacy `max_iters` when saving iteration limit
  - [[#6677](https://github.com/agentscope-ai/QwenPaw/pull/6677)] — prevent long tool commands from overflowing chat
- **Security/process hardening**:
  - [[#6672](https://github.com/agentscope-ai/QwenPaw/pull/6672)] — modify review bot permissions to reduce privileged PR mutation risk

Open PRs advancing features include [[#6398](https://github.com/agentscope-ai/QwenPaw/pull/6398)] (reranker support for ReMe memory search), [[#6629](https://github.com/agentscope-ai/QwenPaw/pull/6629)] (trigger summarize on auto-compression), [[#6689](https://github.com/agentscope-ai/QwenPaw/pull/6689)] (channel startup retry), and [[#6688](https://github.com/agentscope-ai/QwenPaw/pull/6688)] (plugin namespace isolation fix).

## 4. Community Hot Topics

Most active issues by comment count:

- [[#6649](https://github.com/agentscope-ai/QwenPaw/issues/6649)] — **GPT-5.6 prompt caching parameters support** (13 comments). Users want `prompt_cache_key`, `prompt_cache_options`, and `prompt_cache_breakpoint` to reduce multi-turn latency and cost. This signals growing demand for fine-grained provider cost control.

- [[#6655](https://github.com/agentscope-ai/QwenPaw/issues/6655)] — **Console channel does not render safety-approval prompts** (12 comments). High-impact usability/safety issue: commands blocked by security policy silently time out because no approval prompt is shown in console mode.

- [[#6643](https://github.com/agentscope-ai/QwenPaw/issues/6643)] — **Per-task output directories instead of dumping everything in `media`** (6 comments). Users want artifact organization by task to avoid clutter.

- [[#6667](https://github.com/agentscope-ai/QwenPaw/issues/6667)] — **DeepSeek thinking mode fails in multi-turn** (5 comments). `reasoning_content` disappears after OpenAI formatter skips `ThinkingBlock`; workaround only fixes first occurrence.

- [[#6642](https://github.com/agentscope-ai/QwenPaw/issues/6642)] — **Drag-and-drop should read original file path instead of upload/copy** (5 comments). Users report unnecessary file duplication into `media`.

Underlying themes: power users are pushing for lower-cost provider integration, better file/artifact lifecycle management, and more transparent safety/approval behavior in non-Web channels.

## 5. Bugs & Stability

Ranked by severity:

1. **Silent timeout on console approval requests** — [[#6655](https://github.com/agentscope-ai/QwenPaw/issues/6655)]. HIGH: users cannot see pending security approvals, so blocked `rm`/`del` commands time out invisibly. No dedicated fix PR appears in today's set.

2. **OpenRouter multimodal capability overwrite** — [[#6687](https://github.com/agentscope-ai/QwenPaw/issues/6687)]. HIGH: explicit probe reports `false` for image/video support even when provider metadata already says supported. Could break model capability detection.

3. **Auto-compression not triggering memory summarize** — [[#6624](https://github.com/agentscope-ai/QwenPaw/issues/6624)]. MEDIUM: Scroll auto-compression skips `summarize_when_compact`, unlike manual `/compact`. Fix PR exists: [[#6629](https://github.com/agentscope-ai/QwenPaw/pull/6629)].

4. **Plugin install failure: `No module named 'utils.env'`** — [[#6683](https://github.com/agentscope-ai/QwenPaw/issues/6683)]. MEDIUM: top-level module name collision in plugin namespace breaks App Center installs. Fix PR: [[#6688](https://github.com/agentscope-ai/QwenPaw/pull/6688)].

5. **Token usage persistence no retry on transient write failure** — [[#6374](https://github.com/agentscope-ai/QwenPaw/issues/6374)]. MEDIUM: `_dirty` flag cleared before save; `OSError` is swallowed, causing lost token usage.

6. **Anti-repetition false positives** — [[#5906](https://github.com/agentscope-ai/QwenPaw/issues/5906)]. MEDIUM: normal conversations incorrectly trigger "Doom loop" detection; closed today, but root cause/fix not visible in the digest.

7. **Skills pages fail on slow networks** — [[#6633](https://github.com/agentscope-ai/QwenPaw/issues/6633)]. LOW-MEDIUM: `/api/skills` embeds MB-level uncompressed content, exceeding 30s frontend timeout.

8. **Timestamp timezone conversion bugs** — [[#6301](https://github.com/agentscope-ai/QwenPaw/issues/6301)]. LOW-MEDIUM: naive UTC timestamps treated as local time. Addressed by [[#6309](https://github.com/agentscope-ai/QwenPaw/pull/6309)] and [[#6685](https://github.com/agentscope-ai/QwenPaw/pull/6685)].

9. **Frontend conversation window display issue** — [[#6673](https://github.com/agentscope-ai/QwenPaw/issues/6673)]. LOW: visual layout issue in v2.1.0b1.

## 6. Feature Requests & Roadmap Signals

Requests with likely roadmap impact:

- **GPT-5.6 prompt caching** — [[#6649](https://github.com/agentscope-ai/QwenPaw/issues/6649)]: likely to be considered if provider API supports it; aligns with cost/latency optimization roadmap.
- **Multiple models per agent** — [[#6455](https://github.com/agentscope-ai/QwenPaw/issues/6455)]: users want one agent to run the same task across several models and merge results. This is a substantial architecture-level feature.
- **Per-task artifact directories** — [[#6643](https://github.com/agentscope-ai/QwenPaw/issues/6643)] and **direct file-path drag-and-drop** — [[#6642](https://github.com/agentscope-ai/QwenPaw/issues/6642)]: both point to a cleaner file management UX.
- **New built-in providers** — [[#6490](https://github.com/agentscope-ai/QwenPaw/issues/6490)]: Volcengine Agent Plan and Xiaomi MiMo Standard API.
- **Channel retry/health detection** — [[#6684](https://github.com/agentscope-ai/QwenPaw/issues/6684)]: already has a corresponding open PR [[#6689](https://github.com/agentscope-ai/QwenPaw/pull/6689)], so this is likely to land soon.

Open PRs indicate next-version direction: memory reranking ([[#6398](https://github.com/agentscope-ai/QwenPaw/pull/6398)]), auto-compact memory summarization ([[#6629](https://github.com/agentscope-ai/QwenPaw/pull/6629)]), sandbox constraint transparency ([[#6657](https://github.com/agentscope-ai/QwenPaw/pull/6657)]), and OneBot security defaults ([[#6676](https://github.com/agentscope-ai/QwenPaw/pull/6676)]).

## 7. User Feedback Summary

Users are actively using QwenPaw as a daily production assistant, but several pain points consistently appear:

- **File handling** is a recurring complaint: uploads copy files into `media` and create clutter [[#6642](https://github.com/agentscope-ai/QwenPaw/issues/6642)]; dragged-in filenames are not displayed fully [[#6583](https://github.com/agentscope-ai/QwenPaw/issues/6583)]; task outputs are not separated by task [[#6643](https://github.com/agentscope-ai/QwenPaw/issues/6643)].
- **Console/channel UX** lacks critical safety visibility — users cannot see approval requests [[#6655](https://github.com/agentscope-ai/QwenPaw/issues/6655)].
- **Self-hosted/desktop users** report setup friction with Matrix channel auto-reconnect [[#6684](https://github.com/agentscope-ai/QwenPaw/issues/6684)] and plugin installation conflicts [[#6683](https://github.com/agentscope-ai/QwenPaw/issues/6683)].
- **Free-tier model users** want better handling of rate limits (e.g., `deepseek-v4-flash` 429s) [[#6674](https://github.com/agentscope-ai/QwenPaw/issues/6674)].
- Overall sentiment is positive — one user explicitly thanked the project and called QwenPaw "a great personal AI assistant" — but the volume of environment-specific bug reports suggests compatibility testing across providers/versions needs more attention.

## 8. Backlog Watch

Issues/PRs that are open, relatively old, or important and may need maintainer attention:

- [[#4947](https://github.com/agentscope-ai/QwenPaw/issues/4947)] — Kanban Board for Playground Multi-agents. Opened **2026-06-03**, closed today after a long lifecycle; worth confirming whether the feature shipped or was intentionally dropped.
- [[#6455](https://github.com/agentscope-ai/QwenPaw/issues/6455)] — "One agent can use multiple models" — opened 2026-07-24, only 3 comments; significant architecture signal and likely to need a maintainer decision.
- [[#6490](https://github.com/agentscope-ai/QwenPaw/issues/6490)] — Built-in providers for Volcengine and Xiaomi MiMo — open since 2026-07-27, no visible fix/PR.
- [[#6398](https://github.com/agentscope-ai/QwenPaw/pull/6398)] — ReMe memory reranker backend PR — under review since 2026-07-23; no comment count visible, appears to be waiting on maintainer review.
- [[#6492](https://github.com/agentscope-ai/QwenPaw/pull/6492)] — Preserve uploaded filenames in hints — open since 2026-07-27, relates to the file-handling feedback cluster.
- [[#6629](https://github.com/agentscope-ai/QwenPaw/pull/6629)] — Auto-compression memory summarize fix — under review since 2026-08-01; directly addresses a bug report and should be prioritized.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-08-04

## 1. Today's Overview

ZeroClaw is in a high-intensity design and stabilization phase. In the last 24 hours, 50 issues and 50 PRs were updated; 48 issues remain open and 49 PRs remain open, with only 2 issues closed and 1 PR closed/merged in the same window. Activity is dominated by large architecture RFCs and security-focused fixes, especially around tool policy, per-agent ownership, plugin/WASM sandboxing, and provider reliability. No new releases were published. Project health is active but shows a notable maintainer-review bottleneck: many important RFCs have been waiting weeks with `needs-maintainer-review` and high-risk labels.

## 2. Releases

No new releases were published in this window.

## 3. Project Progress

- **PRs:** 50 PRs updated; 49 open, 1 merged/closed. The single merged/closed PR is not in the top-20 by comment count, so its details are not available from this snapshot.
- **Closed issues:**
  - [#8568 — Mixture-of-Agents (MoA) virtual model provider](https://github.com/zeroclaw-labs/zeroclaw/issues/8568) was closed.
  - [#9642 — Approval timeout recorded as explicit operator denial](https://github.com/zeroclaw-labs/zeroclaw/issues/9642) was closed after being identified as an audit-trail integrity bug.

Notable open PRs advancing fixes and features:

- [fix(runtime): reject semantic-empty terminal completions (#9424)](https://github.com/zeroclaw-labs/zeroclaw/pull/9424)
- [fix(anthropic): classify incomplete terminal responses (#9447)](https://github.com/zeroclaw-labs/zeroclaw/pull/9447)
- [fix(tools): enforce agent policy in pipelines (#9737)](https://github.com/zeroclaw-labs/zeroclaw/pull/9737)
- [fix(config): distinguish absent vs empty risk-profile allowed_tools (#9753)](https://github.com/zeroclaw-labs/zeroclaw/pull/9753)
- [fix(security): default command audit logging to disabled (#9410)](https://github.com/zeroclaw-labs/zeroclaw/pull/9410)
- [feat(gateway): keep chat WebSockets alive (#9701)](https://github.com/zeroclaw-labs/zeroclaw/pull/9701)
- [fix(runtime): prevent stale provider refreshes from mutating replacement sessions (#9748)](https://github.com/zeroclaw-labs/zeroclaw/pull/9748)
- [fix(web): respect manual scroll position during agent streaming (#9749)](https://github.com/zeroclaw-labs/zeroclaw/pull/9749)
- [fix(plugins): bound WASM exports by a wall-clock deadline (#9403)](https://github.com/zeroclaw-labs/zeroclaw/pull/9403)
- [fix(runtime): avoid nesting Docker sandbox inside Docker runtime (#9402)](https://github.com/zeroclaw-labs/zeroclaw/pull/9402)
- [fix(runtime): fail closed on unresolved Docker workspace roots (#9413)](https://github.com/zeroclaw-labs/zeroclaw/pull/9413)

## 4. Community Hot Topics

PR comment counts were not populated in the snapshot, so this section focuses on issues by comment count.

| Issue | Title | Comments | Signal |
|---|---|---|---|
| [#8603](https://github.com/zeroclaw-labs/zeroclaw/issues/8603) | RFC: ZeroClaw Chat Completions profile | 16 | Strong demand for OpenAI-protocol client compatibility (Open WebUI, LobeChat, Continue.dev, Aider, etc.) |
| [#8303](https://github.com/zeroclaw-labs/zeroclaw/issues/8303) | RFC: Goal mode v1 — bounded foreground Matrix work | 13 | Need for durable, bounded multi-turn agent objectives beyond single-turn tool calls |
| [#7155](https://github.com/zeroclaw-labs/zeroclaw/issues/7155) | RFC: Per-execution confirmation tier for high-risk shell commands + policy | 12 | Security-conscious operators want allow/ask/deny control over tool execution |
| [#9488](https://github.com/zeroclaw-labs/zeroclaw/issues/9488) | RFC: Unified attachment architecture for web chat and channels | 11 | Cross-channel attachment handling is becoming a UX and architecture blocker |
| [#9487](https://github.com/zeroclaw-labs/zeroclaw/issues/9487) | RFC: Runtime-owned conversation sessions and transport surface adapters | 10 | Session ownership and transport abstraction need centralization |
| [#7141](https://github.com/zeroclaw-labs/zeroclaw/issues/7141) | RFC: Pluggable inbound authentication and canonical principals | 10 | Identity/security architecture remains a top community concern |
| [#8568](https://github.com/zeroclaw-labs/zeroclaw/issues/8568) | Mixture-of-Agents (MoA) virtual model provider | 9 | Interest in multi-model aggregation, though the issue is now closed |

The underlying theme is consistent: users want a more secure, more OpenAI-compatible, and more architecturally coherent ZeroClaw, with less reliance on single-turn prompts and ad-hoc channel implementations.

## 5. Bugs & Stability

Ranked by reported severity:

1. **[#9647 — Knowledge graph has no per-agent attribution](https://github.com/zeroclaw-labs/zeroclaw/issues/9647)**  
   **Severity:** S0 — data loss / security risk. The `knowledge` tool exposes a single globally shared graph; any agent can read/mutate another agent's knowledge. Labeled `status:accepted`, `priority:p1`, high risk. No dedicated fix PR was listed in this snapshot.

2. **[#9646 — Session/channel read+write tools lack per-agent ownership scoping](https://github.com/zeroclaw-labs/zeroclaw/issues/9646)**  
   **Severity:** S0 — data loss / security risk. Tools like `sessions_list`, `sessions_history`, `sessions_send`, and `discord_search` trust model-supplied IDs without ownership checks. Labeled `status:accepted`, `priority:p1`, high risk.

3. **[#9642 — Approval timeout recorded as explicit operator denial](https://github.com/zeroclaw-labs/zeroclaw/issues/9642)**  
   **Impact:** Falsifies the audit trail. Closed, but significant because it changes what logs say a human did.

4. **[#9697 — ZeroCode cannot connect to daemon launched by Windows Task Scheduler](https://github.com/zeroclaw-labs/zeroclaw/issues/9697)**  
   **Severity:** S3 — minor issue, but a recurring Windows daemon startup problem.

Related stability/security fix PRs currently open:

- [#9737 — enforce agent policy in pipelines](https://github.com/zeroclaw-labs/zeroclaw/pull/9737)
- [#9753 — distinguish absent vs empty risk-profile allowed_tools](https://github.com/zeroclaw-labs/zeroclaw/pull/9753)
- [#9410 — default command audit logging to disabled](https://github.com/zeroclaw-labs/zeroclaw/pull/9410)
- [#9748 — prevent stale provider refreshes from mutating replacement sessions](https://github.com/zeroclaw-labs/zeroclaw/pull/9748)
- [#9447](https://github.com/zeroclaw-labs/zeroclaw/pull/9447) and [#9424](https://github.com/zeroclaw-labs/zeroclaw/pull/9424) — fix unreliable terminal completion handling for Anthropic/runtime

## 6. Feature Requests & Roadmap Signals

The most likely roadmap signals from active RFCs:

- **OpenAI-compatible gateway surface**  
  [#8603](https://github.com/zeroclaw-labs/zeroclaw/issues/8603) proposes a Chat Completions profile so existing OpenAI SDKs and chat UIs can talk to ZeroClaw.

- **Bounded goal execution**  
  [#8303](https://github.com/zeroclaw-labs/zeroclaw/issues/8303) pushes toward durable, multi-turn "goal mode" work rather than single-turn tasks.

- **Security architecture milestone**  
  Multiple high-signal RFCs target v0.9.0 security: [#7155](https://github.com/zeroclaw-labs/zeroclaw/issues/7155) tool confirmation policies, [#7141](https://github.com/zeroclaw-labs/zeroclaw/issues/7141) pluggable inbound auth, [#7142](https://github.com/zeroclaw-labs/zeroclaw/issues/7142) runtime-owned security decision pipeline, [#9598](https://github.com/zeroclaw-labs/zeroclaw/issues/9598) SOP permission contract.

- **Session and attachment architecture**  
  [#9487](https://github.com/zeroclaw-labs/zeroclaw/issues/9487), [#9488](https://github.com/zeroclaw-labs/zeroclaw/issues/9488), and tracker [#9600](https://github.com/zeroclaw-labs/zeroclaw/issues/9600) aim to settle ownership of sessions, attachments, and transport adapters.

- **Cost optimization**  
  [#9631](https://github.com/zeroclaw-labs/zeroclaw/issues/9631) requests stable `session_id` to OpenRouter for prompt-cache savings — a practical operator pain point.

- **Persistent memory and observability**  
  [#8891](https://github.com/zeroclaw-labs/zeroclaw/issues/8891) tracks persistent memory parity; [#6998](https://github.com/zeroclaw-labs/zeroclaw/issues/6998) proposes schema-validated memory consolidation; [#7232](https://github.com/zeroclaw-labs/zeroclaw/issues/7232) covers structured observability/OTel.

Prediction: the next version is likely to emphasize the accepted/in-progress security items (`#7141`, `#7155`, `#7142`) and the gateway/session architecture work, since those have been repeatedly revised and are labeled high priority.

## 7. User Feedback Summary

Real user pain points visible from this snapshot:

- **OpenAI-protocol clients are blocked.** Users want to connect Open WebUI, LobeChat, Aider, Continue.dev, and LangChain directly; the current WebSocket/ACP/webhook-only surface is a barrier. ([#8603](https://github.com/zeroclaw-labs/zeroclaw/issues/8603))
- **OpenRouter costs are too high without prompt caching.** One conversation spawns many LLM requests with repeated system prompts/tool schemas. ([#9631](https://github.com/zeroclaw-labs/zeroclaw/issues/9631))
- **WebChat auto-scroll is actively harmful.** Users cannot scroll up while the agent is streaming. A fix is proposed in [#9749](https://github.com/zeroclaw-labs/zeroclaw/pull/9749).
- **Windows daemon startup remains fragile.** ZeroCode cannot connect to a daemon launched by Windows Task Scheduler, a recurring issue. ([#9697](https://github.com/zeroclaw-labs/zeroclaw/issues/9697))
- **Security and data isolation are top concerns.** Reports about shared knowledge graphs, missing per-agent ownership, and audit-log falsification show users are auditing ZeroClaw with production-grade expectations. ([#9647](https://github.com/zeroclaw-labs/zeroclaw/issues/9647), [#9646](https://github.com/zeroclaw-labs/zeroclaw/issues/9646), [#9642](https://github.com/zeroclaw-labs/zeroclaw/issues/9642))
- **CLI usability issues are getting fixed quickly.** Cron help examples, hyphenated alias config, and Edge TTS temp cleanup all have open PRs. ([#9704](https://github.com/zeroclaw-labs/zeroclaw/pull/9704), [#9705](https://github.com/zeroclaw-labs/zeroclaw/pull/9705), [#9709](https://github.com/zeroclaw-labs/zeroclaw/pull/9709))

Overall sentiment is engaged and technical: contributors are filing detailed RFCs and reproducible bugs, but also showing some frustration around security gaps, maintainer latency, and provider/runtime reliability.

## 8. Backlog Watch

Older, high-signal items still needing maintainer attention:

- [#8692 — Maintainer decision queue for RFCs and design issues](https://github.com/zeroclaw-labs/zeroclaw/issues/8692)  
  This tracker itself is the active queue for maintainer decisions and remains open.

- [#6998 — RFC: Schema-validated memory consolidation with bounded fallback](https://github.com/zeroclaw-labs/zeroclaw/issues/6998)  
  Created 2026-05-29, `needs-maintainer-review`, high risk, only 3 comments.

- [#7155 — RFC: Per-execution confirmation tier for high-risk shell commands](https://github.com/zeroclaw-labs/zeroclaw/issues/7155)  
  Created 2026-06-03, `priority:p1`, 12 comments, `needs-maintainer-review`.

- [#7141 — RFC: Pluggable inbound authentication and canonical principals](https://github.com/zeroclaw-labs/zeroclaw/issues/7141)  
  Created 2026-06-03, `priority:p1`, 10 comments, `needs-maintainer-review`, `status:in-progress`.

- [#7142 — RFC: Runtime-owned security decision pipeline and restrictive overlays](https://github.com/zeroclaw-labs/zeroclaw/issues/7142)  
  Created 2026-06-03, `priority:p2`, 7 comments, `needs-maintainer-review`.

- [#7232 — RFC: Structured Observability Enhancement](https://github.com/zeroclaw-labs/zeroclaw/issues/7232)  
  Created 2026-06-05, 5 comments, `needs-maintainer-review`.

- [#8367 — RFC: Derived capability readiness for agent guidance](https://github.com/zeroclaw-labs/zeroclaw/issues/8367)  
  Created 2026-06-26, 2 comments, `needs-maintainer-review`.

These items represent a growing maintainer bottleneck. If left untouched, the backlog of high-risk RFCs will continue to accumulate and may delay the v0.9.0 security architecture and gateway compatibility work.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/boom7sss/agents-radar).*