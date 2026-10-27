# OpenClaw Ecosystem Digest 2026-08-11

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-08-11 02:08 UTC

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

# OpenClaw Project Digest — 2026-08-11

## Today’s Overview
OpenClaw remained highly active over the last 24 hours, with **500 issues and 500 PRs updated**, **62 issues closed**, and **170 PRs merged/closed**. No new releases were published. The project is healthy in volume but dominated by reliability concerns: the most-commented issues continue to revolve around silent message delivery failures, duplicate messages across channels, session-state problems, and auth-refresh regressions. Maintainers are actively reviewing and pushing fix PRs, but many high-severity issues remain open with `needs-maintainer-review` / `needs-product-decision` labels, suggesting a triage bottleneck on architectural decisions.

## Releases
None in the last 24 hours. No changelog, breaking-change, or migration notes to report.

## Project Progress
170 PRs were closed/merged in the past day. The top-PR sample is still mostly open, but notable movements include:

- **Closed PR — [openclaw/openclaw#121074](https://github.com/openclaw/openclaw/pull/121074):** Ollama fix to expose and send `max` thinking for supported cloud models (GLM 5.2, DeepSeek V4), instead of silently reducing to `high`.
- **PRs advancing fixes/features:**
  - [openclaw/openclaw#121566](https://github.com/openclaw/openclaw/pull/121566) — splits the large Claude live-session module by concept.
  - [openclaw/openclaw#121366](https://github.com/openclaw/openclaw/pull/121366) — consolidates coercion helpers across core, plugins, UI, and tooling.
  - [openclaw/openclaw#121734](https://github.com/openclaw/openclaw/pull/121734) — leads Control UI chat header with project identity.
  - [openclaw/openclaw#120419](https://github.com/openclaw/openclaw/pull/120419) — requeues pre-adoption ingress stalls instead of silently dropping messages.
  - [openclaw/openclaw#120595](https://github.com/openclaw/openclaw/pull/120595) — routes virtiofs-backed SQLite DBs to rollback journaling to prevent corruption on Docker Desktop/OrbStack.
  - [openclaw/openclaw#121108](https://github.com/openclaw/openclaw/pull/121108) — enumerates descendant PIDs for attached Unix processes.
  - [openclaw/openclaw#112932](https://github.com/openclaw/openclaw/pull/112932) — re-seeds only tombstoned OAuth targets from fresh Codex login.
  - [openclaw/openclaw#115277](https://github.com/openclaw/openclaw/pull/115277) — materializes MCP for server-name `toolsAllow` globs in isolated cron runs.
  - [openclaw/openclaw#121586](https://github.com/openclaw/openclaw/pull/121586) — adds zero-click Chrome extension bootstrap.
  - [openclaw/openclaw#121544](https://github.com/openclaw/openclaw/pull/121544) — fixes native commands executing the wrong plugin in Discord/Telegram/Slack.

## Community Hot Topics
| Issue/PR | Comments | Summary |
|---|---|---|
| [#121058](https://github.com/openclaw/openclaw/issues/121058) | 48 | Silent reply failures continue even after #116277 was closed; monitoring still logs new occurrences. |
| [#7707](https://github.com/openclaw/openclaw/issues/7707) | 34 | Feature request: tag memory entries by source trust level to prevent memory poisoning attacks. |
| [#48788](https://github.com/openclaw/openclaw/issues/48788) | 20 | Centralized filename encoding utility for multi-encoding Content-Disposition handling. |
| [#22438](https://github.com/openclaw/openclaw/issues/22438) | 18 | Tiered bootstrap file loading for progressive context control. |
| [#86519](https://github.com/openclaw/openclaw/issues/86519) (closed) | 15 | Telegram duplicate replies regression after 5.20; partially improved but not fully fixed. |
| [#42475](https://github.com/openclaw/openclaw/issues/42475) | 14 | Per-agent cost budget enforcement at gateway level. |
| [#39476](https://github.com/openclaw/openclaw/issues/39476) | 13 | A2A `sessions_send` can cause duplicate messages when target agent replies back. |
| [#115908](https://github.com/openclaw/openclaw/issues/115908) | 13 | Session transcript projection can livelock under sustained writes, stalling the main thread. |
| [#40001](https://github.com/openclaw/openclaw/issues/40001) | 12 | `write` tool lacks append mode; isolated cron sessions overwrite shared files. |

**Underlying needs:** Users are asking for **delivery reliability** (no silent drops/duplicates), **memory/context management** (trust tagging, snapshots, tiered loading), **cost controls**, and **better observability** into sessions, auth, and model routing.

## Bugs & Stability
High-severity bugs active in the last 24 hours:

- **Silent reply failures keep recurring** — [#121058](https://github.com/openclaw/openclaw/issues/121058) is the most urgent community-reported issue; no new fix PR is visible yet.
- **P1 session/message-loss bugs:**
  - [#115908](https://github.com/openclaw/openclaw/issues/115908) — transcript projection livelock blocks main thread.
  - [#39476](https://github.com/openclaw/openclaw/issues/39476) — A2A duplicate messages.
  - [#40001](https://github.com/openclaw/openclaw/issues/40001) — `write` tool overwrites shared files; data loss.
  - [#53408](https://github.com/openclaw/openclaw/issues/53408) — `write`/`exec` params silently dropped after long conversations.
  - [#47975](https://github.com/openclaw/openclaw/issues/47975) — subagent sessions persist after completion; main session unresponsive.
  - [#97983](https://github.com/openclaw/openclaw/issues/97983) — iOS/WebChat messages append but do not trigger replies.
- **P1 auth/provider regressions:**
  - [#83598](https://github.com/openclaw/openclaw/issues/83598) — `anthropic:claude-cli` OAuth refresh dead-ends all traffic.
  - [#89278](https://github.com/openclaw/openclaw/issues/89278) — Codex OAuth refresh succeeds but cron/heartbeat fail with 10s timeout.
  - [#98702](https://github.com/openclaw/openclaw/issues/98702) — inherited OpenAI OAuth rejected on one transport while main succeeds.
- **P1 infra/stability:**
  - [#97616](https://github.com/openclaw/openclaw/issues/97616) — leaked child processes/zombies degrade runtime.
  - [#119087](https://github.com/openclaw/openclaw/issues/119087) — gateway cold start regressed ~2.5x on 1-vCPU.
  - [#82662](https://github.com/openclaw/openclaw/issues/82662) — isolated cron fails with “setup timed out before runner start.”

**Fix PRs in flight:** [#94719](https://github.com/openclaw/openclaw/pull/94719) (anthropic user-agent auth), [#93952](https://github.com/openclaw/openclaw/pull/93952) (auth refresh promise hang), [#120419](https://github.com/openclaw/openclaw/pull/120419) (ingress stalls), [#121108](https://github.com/openclaw/openclaw/pull/121108) (descendant PID cleanup), [#120595](https://github.com/openclaw/openclaw/pull/120595) (SQLite corruption), [#112966](https://github.com/openclaw/openclaw/pull/112966) (Responses reasoning effort maps).

## Feature Requests & Roadmap Signals
Strong signals for next versions:

- **Memory/context architecture:** [#7707](https://github.com/openclaw/openclaw/issues/7707) trust tagging by source, [#22438](https://github.com/openclaw/openclaw/issues/22438) tiered bootstrap loading, [#13700](https://github.com/openclaw/openclaw/issues/13700) session snapshots, [#42648](https://github.com/openclaw/openclaw/issues/42648) memory write pipeline with dedupe/merge/conflict handling, [#38568](https://github.com/openclaw/openclaw/issues/38568) context-window percentage in system prompt.
- **Cost and gateway controls:** [#42475](https://github.com/openclaw/openclaw/issues/42475) per-agent cost budgets, [#47910](https://github.com/openclaw/openclaw/issues/47910) provider fallback by failure class, [#51441](https://github.com/openclaw/openclaw/issues/51441) expose resolved backend model.
- **Security / isolation:** [#15032](https://github.com/openclaw/openclaw/issues/15032) per-spawn tool restrictions for sub-agents, [#40786](https://github.com/openclaw/openclaw/issues/40786) backup exclude patterns.
- **UX polish:** [#28300](https://github.com/openclaw/openclaw/issues/28300) theme customization, [#16670](https://github.com/openclaw/openclaw/issues/16670) mandatory memory/embedding onboarding, [#33413](https://github.com/openclaw/openclaw/issues/33413) Slack tool-level progress.

Predictions: memory/context tooling and auth reliability are the most likely next-version focus areas, given both community demand and the number of open fix PRs in those areas.

## User Feedback Summary
Users are engaging deeply with the project, but satisfaction is tempered by recurring regressions. The top frustrations are:

- **Silent failures:** Replies that never arrive, with no observability into why.
- **Duplicate messages:** Telegram and Feishu repeatedly send duplicates, often after failover or compaction paths.
- **Data-loss risks:** `write` overwriting shared memory files; backup tooling cannot exclude sensitive/large folders.
- **Auth flakiness:** OAuth refreshes working in `probe` but failing in cron/heartbeat; gateway upgrades leaving macOS agents unrecoverable.
- **Context-window waste:** Bootstrap files consume tokens even when irrelevant; users want finer control over memory and session context.

On the positive side, users are submitting well-scoped architectural proposals (central encoding utility, tiered bootstrap, memory trust tagging), which indicates an engaged technical community willing to contribute fixes.

## Backlog Watch
Long-running or high-comment issues that still need maintainer attention:

- [#7707](https://github.com/openclaw/openclaw/issues/7707) — Memory Trust Tagging by Source (Feb 3, 34 comments, P2, still needs product/security decision).
- [#48788](https://github.com/openclaw/openclaw/issues/48788) — Central filename encoding utility (Mar 17, 20 comments, P3).
- [#22438](https://github.com/openclaw/openclaw/issues/22438) — Tiered bootstrap file loading (Feb 21, 18 comments, P2).
- [#42475](https://github.com/openclaw/openclaw/issues/42475) — Per-agent cost budgets (Mar 10, 14 comments, P2).
- [#40001](https://github.com/openclaw/openclaw/issues/40001) — `write` tool append mode / data loss (Mar 8, P1, 12 comments).
- [#39476](https://github.com/openclaw/openclaw/issues/39476) — A2A duplicate messages (Mar 8, P1, 13 comments).
- [#53408](https://github.com/openclaw/openclaw/issues/53408) — Write/exec params dropped after long conversations (Mar 24, P1, 11 comments).
- [#16670](https://github.com/openclaw/openclaw/issues/16670) — Onboarding should include Memory/Embedding setup (Feb 15, 9 comments).
- [#50291](https://github.com/openclaw/openclaw/issues/50291) — Plugin hooks missing trace context (Mar 19, stale label, 10 comments).

Many of these carry `clawsweeper:needs-maintainer-review` and `clawsweeper:needs-product-decision` labels. Bot triage is clearly active, but the backlog suggests maintainers need to make product-level decisions on memory/context features and delivery-reliability architecture.

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report — Personal AI Assistant / Agent Open-Source Ecosystem
**Snapshot: 2026-08-11**

---

## 1. Ecosystem Overview

The personal AI assistant ecosystem is in a high-velocity maintenance-and-hardening phase: 11 of 13 tracked projects saw activity in the last 24 hours, yet only one (IronClaw) published a release artifact. The dominant cross-project concerns are **delivery reliability** (silent message drops, duplicate delivery, session-state loss), **security hardening** (OAuth refresh regressions, credential leakage across subprocesses, per-agent trust boundaries), and **MCP integration maturity** (remote servers, browser OAuth, SDK migrations). Memory/context management is emerging as the next major architecture frontier, with demand for trust tagging, tiered loading, and cost guardrails. Governance overhead is becoming a visible bottleneck in larger projects (ZeroClaw, OpenClaw), where maintainer decision queues and `needs-product-decision` labels are accumulating faster than they are resolved.

---

## 2. Activity Comparison

| Project | Issues Updated (closed) | PRs Updated (merged/closed) | Release | Health Score* |
|---|---|---|---|---|
| **OpenClaw** | 500 (62) | 500 (170) | None | 8.0 |
| **Hermes Agent** | 50 (6) | 50 (10) | None | 7.0 |
| **IronClaw** | 50 (25) | 50 (17) | v1.1.1-rc.1 | 7.5 |
| **ZeroClaw** | 50 (n/a) | 50 (2 closed, 0 merged) | None | 5.5 |
| **CoPaw** | 39 (6) | 50 (17) | None | 6.5 |
| **LobsterAI** | 1 (1) | 34 (20) | None | 7.0 |
| **NanoBot** | 4 (3) | 24 (10) | None | 7.5 |
| **NanoClaw** | 3 (0) | 20 (10) | None | 7.5 |
| **PicoClaw** | 4 (2) | 9 (7) | None | 7.5 |
| **Moltis** | 3 (0) | 2 (0) | None | 5.0 |
| **NullClaw** | 1 (1) | 1 (0) | None | 5.0 |
| **TinyClaw** | 0 | 0 | None | 2.0 |
| **ZeptoClaw** | 0 | 0 | None | 2.0 |

*\*Health score = composite of merge throughput, issue closure rate, fix responsiveness, and unaddressed high-severity backlog (1–10).*

**Tier summary:** OpenClaw operates at roughly **10× the volume** of the next busiest projects (Hermes, IronClaw, ZeroClaw, CoPaw all at ~50/50). Mid-tier projects (NanoBot, NanoClaw, PicoClaw) show the **best merge ratios** (44–78% of updated PRs merged) despite lower volume. The bottom tier (TinyClaw, ZeptoClaw) is dormant; NullClaw and Moltis are quiet but not abandoned.

---

## 3. OpenClaw's Position

**Advantages:**
- **Community size:** Unmatched — 500 issues and 500 PRs updated in 24h, with 170 PRs merged/closed. This is ~3.4× the PR throughput of the entire next tier combined.
- **Integration breadth:** The de-facto reference implementation; peers (NanoClaw, PicoClaw, CoPaw) explicitly borrow its plugin/channel model, and ZeroClaw community issues cite OpenClaw PRs as reference solutions.
- **Architectural maturity:** Native A2A protocol support, virtiofs-aware SQLite journaling, descendant-PID cleanup, and MCP materialization for cron runs — infrastructure depth that smaller projects are only beginning to approach.
- **Contributor pipeline:** Community members file well-scoped architectural proposals (central encoding utility, tiered bootstrap, memory trust tagging), indicating a technically strong contributor base.

**Technical approach differences:** OpenClaw is a **monolithic core + plugin ecosystem** — one large codebase covering channels, providers, memory, gateway, and desktop. This contrasts with IronClaw's **Rust-based, governance-heavy modular architecture** (ten-family crate layout, architecture ratchets) and NullClaw's **minimalist A2A-only** design.

**Risks:** Triage throughput is the binding constraint. High-severity issues (`#121058` silent reply failures, `#115908` transcript livelock, `#83598` OAuth dead-end) carry `needs-maintainer-review` / `needs-product-decision` labels, and no release shipped in this window. Volume without release cadence creates regression risk: 62 issues closed but recurring duplicates (Telegram, `#121058`) suggest fixes are not fully resolving root causes.

---

## 4. Shared Technical Focus Areas

Requirements emerging across **multiple** projects:

| Focus Area | Projects | Specific Needs |
|---|---|---|
| **Delivery reliability / anti-silent-failure** | OpenClaw (#121058, #39476), NanoClaw (#3226, #3223), IronClaw (#7473, #7476), CoPaw (#6821) | No dropped messages; deduplication with diagnostics; routable error delivery for scheduled tasks; vendor_message_refs preservation |
| **Auth / OAuth / credential isolation** | OpenClaw (#83598, #89278), Hermes (#83565, #68367, #82936), NanoBot (#5316), ZeroClaw (#9389) | Browser OAuth for MCP; refresh flows that work uniformly across transports; child-process env scrubbing; sender authorization on social channels |
| **Memory & context architecture** | OpenClaw (#7707, #22438), NanoBot (#5324), CoPaw (#6398), ZeroClaw (#9647), Hermes (#34352) | Trust tagging by source; tiered bootstrap loading; dedupe/merge/conflict handling; per-agent knowledge isolation; cost guardrails against runaway loops |
| **MCP integration maturity** | NanoBot (#5316, #5179), NanoClaw (#3092, #3221), IronClaw (#6727), CoPaw (#6405), ZeroClaw (#9339) | Remote Streamable HTTP servers; OAuth flows; SDK v2 migration; custom CA trust; error isolation so one failing server can't crash the gateway |
| **Tool-loop guardrails & cost controls** | NanoBot (#5324→#5325), PicoClaw (#3311→#3312), LobsterAI (#2454), CoPaw (#6884) | Stop on repeated identical tool failure; reject no-op edits; per-agent budgets; avoid burning tokens on meaningless loops |
| **Windows / desktop stability** | Hermes (#83555, #83583, #83569), LobsterAI (#1243), OpenClaw | Watchdog false positives; updater file-locking; gateway restart loops; pip shim repair |
| **Streaming / UI transparency** | CoPaw (#6820, #6826), IronClaw (#7471), ZeroClaw (#9562) | Progressive output instead of buffered full-response; correct timestamps; live tool-call visibility |

The three most urgent cross-project gaps: **(1) observable, non-silent failure paths; (2) enforceable memory/context isolation with cost limits; (3) MCP error containment.**

---

## 5. Differentiation Analysis

| Project | Core Focus | Target Users | Architecture |
|---|---|---|---|
| **OpenClaw** | Full personal AI assistant hub: channels, providers, plugins, memory, gateway | Power users, self-hosters, plugin developers | Monolithic Python core + plugin ecosystem; broadest provider/channel matrix |
| **Hermes Agent** | Research-grade agent with desktop apps, multi-tenant hooks | Enterprise/production users; multi-profile deployments | Modular core + Electron desktop; security-campaign-driven hardening; god-file sharding in progress |
| **IronClaw** | Rust-based assistant with architecture governance, IronHub skills marketplace | Developers and teams needing CI-enforced quality gates | Rust; ten-family crate layout; doc-truth pipeline; architecture ratchets (audit-driven) |
| **CoPaw** | Qwen-centric consumer assistant with ReMe memory engine | Chinese-speaking users; Qwen model stack | Console UI + desktop; heavy provider-compat shims; plugin marketplace |
| **NanoBot** | Lightweight, MCP-first, WebUI-centric assistant | Users wanting a clean WebUI + MCP servers | Gateway-owned settings services; WebSocket request/reply; MCP SDK v2 migration |
| **NanoClaw** | Privacy-forward multi-platform agent (Telegram/Matrix) | Self-hosters on constrained hardware; privacy-conscious users | Host-module lifecycle hooks; opt-in privacy-safe logging; agent-plugin migration |
| **PicoClaw** | Edge optimizer for Raspberry Pi / low-resource devices | Hobbyists; Discord/Telegram users | Lightweight multi-channel; security-hardened remote exec (schema v4) |
| **ZeroClaw** | Governance-heavy assistant with SOPs, knowledge graph, multi-channel | Organizations needing audit trails and policy controls | Rust-based; RFC-driven process; knowledge graph; security-audit remediation focus |
| **LobsterAI** | Desktop "cowork" client on OpenClaw runtime | Desktop productivity users (Windows/macOS) | Electron + local runtime; file-centric collaboration UI |
| **Moltis** | Research-grade sandboxing with Apple Container backend | Researchers; macOS users | CDP screencast browser UI; session lifecycle management |
| **NullClaw** | Minimalist A2A-protocol agent (server + now client) | Interop-focused developers | Small footprint; protocol-first |
| **TinyClaw / ZeptoClaw** | Dormant | — | — |

**Key architectural fault line:** Python monoliths (OpenClaw lineage: OpenClaw, NanoClaw, PicoClaw, CoPaw, LobsterAI) vs. **Rust foundations** (IronClaw, ZeroClaw) vs. **research sandboxes** (Hermes, Moltis). The Rust-based projects invest more in compile-time enforcement, architecture gates, and process governance; the Python lineage competes on breadth of integrations and velocity.

---

## 6. Community Momentum & Maturity

**Tier 1 — Hyperactive, release-starved:** **OpenClaw** (500/500 daily updates) has unmatched volume but is in a "many fixes, no release" state — a growing risk as high-severity recurrences accumulate.

**Tier 2 — High velocity, mixed closure quality:** **Hermes Agent, IronClaw, ZeroClaw, CoPaw** all show ~50/50 daily updates. Hermes has the strongest regression-response loop (quick Windows fix PRs). IronClaw is the only project shipping a release candidate, with strong governance maturity. ZeroClaw is the weakest of this tier: **zero PRs merged**, a stalled P1 security-audit cluster, and the community explicitly complaining about process overhead (#9496). CoPaw merges steadily but leaves many high-severity bugs (SIGBUS, IME crash, MCP tool loss) without clear fixes.

**Tier 3 — Moderate, efficient:** **NanoBot, NanoClaw, PicoClaw, LobsterAI** have the healthiest merge ratios (44–78%) and responsive maintainers. These projects are likely the best "low-friction contribution" targets. NanoClaw and PicoClaw are actively consolidating security/privacy work.

**Tier 4 — Low but alive:** **Moltis** (long-running browser UI feature, Apple Container bugs) and **NullClaw** (A2A client work closing after 4.5 months) are between sprints.

**Tier 5 — Dormant:** **TinyClaw, ZeptoClaw** — no activity; effectively stalled.

**Maturity signal:** IronClaw, ZeroClaw, and OpenClaw are at the stage where **project governance becomes a product** — RFC pipelines, maintainer decision queues, and label automation are consuming community energy. This is a hallmark of quickly grown projects that have not yet scaled maintainer capacity.

---

## 7. Trend Signals

1. **Silent failure is the #1 trust killer.** Recurring across OpenClaw, NanoClaw, IronClaw, and CoPaw: messages that disappear, scheduled tasks that fail invisibly, and providers that wedge without diagnostics. Expect the next wave of feature work to focus on **observability-first delivery** — explicit deduplication diagnostics, routable error alerts, and fail-loud semantics.

2. **Security is shifting from credential scrubbing to trust-boundary enforcement.** Hermes' child-env scrub campaign, ZeroClaw's per-agent knowledge attribution and sender-authorization bugs, and OpenClaw's memory poisoning concerns all point to one conclusion: **the agent's own memory and subprocess environment are the new attack surface.** Per-agent isolation, egress policy, and memory trust tagging will be table stakes.

3. **Memory/context is the next architectural battleground.** Trust tagging, tiered bootstrap loading, dedupe/merge pipelines, session snapshots, and context-window percentage exposure are being requested independently across OpenClaw, NanoBot, CoPaw, and ZeroClaw. Whoever ships a coherent, cost-bounded memory architecture first will set the pattern.

4. **MCP is becoming the universal integration fabric — and its failure modes are the new reliability frontier.** Remote HTTP MCP, browser OAuth, SDK v2 migration, custom CA trust, and per-server error isolation dominate NanoBot, NanoClaw, IronClaw, and CoPaw. A single misbehaving MCP server crashing a gateway is now a recognized bug class.

5. **Tool-loop guardrails are a cost-control priority.** The NanoBot Dream incident (10M+ tokens in 23 minutes) and PicoClaw's silent tool-failure loops (#3311) are forcing the ecosystem to add **loop budget enforcement, no-op rejection, and early-exit on repeated identical failures**.

6. **Windows reliability is the weakest platform link.** Hermes (watchdog false positives, update self-locks), LobsterAI (gateway restart loops), and OpenClaw-ecosystem Windows issues show that Windows desktop remains under-tested. Projects that invest in Windows CI and updater hardening will capture dissatisfied users.

7. **Governance scalability is becoming a competitive factor.** ZeroClaw's RFC process (23 comments on process redesign), OpenClaw's `needs-product-decision` backlog, and the general maintainer-bandwidth strain suggest that **projects with automated triage and clear decision pipelines will retain contributors better** than those where product decisions stall for months.

---

**Bottom line for decision-makers:** OpenClaw remains the ecosystem's center of gravity but carries release-cadence and triage risk; IronClaw and NanoBot offer the strongest governance/efficiency balance; and the next differentiation wave will be won on **observability, memory isolation, and MCP error containment** — not on channel count.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-08-11

## 1. Today's Overview

NanoBot shows a high-velocity development cycle: 4 issues were updated in the last 24 hours (1 still open, 3 closed), while 24 PRs were updated (14 open, 10 merged/closed). No new release was published in this window. The current work is concentrated on WebUI refactoring/security, MCP client stability and OAuth support, and defensive fixes for file-edit and session-save edge cases. One open user-facing bug around repeated reasoning output remains under investigation. Overall project health looks active, though several older PRs carry `conflict` labels and a P0 session-save fix is still waiting.

## 2. Releases

No new releases were published in this window, so there are no changelog entries, breaking changes, or migration notes to report.

## 3. Project Progress

Eight of the 10 merged/closed PRs are visible in the provided top-20 data:

### MCP / Integrations
- [#5316](https://github.com/HKUDS/nanobot/pull/5316) — **feat(mcp): add browser OAuth for remote servers**  
  Adds browser-based OAuth for remote Streamable HTTP and SSE MCP servers, with presets for Xmind, Notion, and Linear. This directly addresses the OAuth request in issue #5297.
- [#5310](https://github.com/HKUDS/nanobot/pull/5310) — **fix(weixin): honor forced QR login**  
  Ensures forced Weixin login always runs a fresh QR flow across CLI and WebUI instead of restoring cached credentials.

### WebUI
- [#5321](https://github.com/HKUDS/nanobot/pull/5321) — **refactor(webui): make gateway own settings services**  
  Moves WebUI settings and OAuth flow state into gateway-owned services with serialized atomic updates.
- [#5318](https://github.com/HKUDS/nanobot/pull/5318) — **refactor(webui): extract deterministic event projection helpers**  
  Makes stream event projection reusable and deterministic, with shared fixtures and regression coverage.
- [#5317](https://github.com/HKUDS/nanobot/pull/5317) — **fix(webui): move mutations to authenticated WebSocket requests**  
  Hardens WebUI state-changing operations by moving them from GET/query-string/custom-header calls to authenticated WebSocket request/reply frames.
- [#5315](https://github.com/HKUDS/nanobot/pull/5315) — **fix(webui): improve UX recovery and empty states**  
  Adds keyboard-focused recovery for failed chat creation and improves auth challenge UX.

### Agent / Files / Runtime
- [#5325](https://github.com/HKUDS/nanobot/pull/5325) — **fix(files): reject no-op edits**  
  Prevents `edit_file` calls with identical `old_text` and `new_text` from reporting success. Related to the Dream memory-loop incident in #5324.
- [#5319](https://github.com/HKUDS/nanobot/pull/5319) — **refactor(agent): replace reflective runtime state access**  
  Replaces reflective loop-state access with explicit `RuntimeControl`/`AgentRuntimeControl` abstractions and redacts credential-bearing fields.

## 4. Community Hot Topics

PR comment counts were not shown in this data snapshot, so the most active discussions are based on issue comments:

- [#5297](https://github.com/HKUDS/nanobot/issues/5297) — **MCP OAuth web authorization request** (3 comments, closed)  
  User wants browser-based OAuth for MCP servers that require it, e.g. `https://app.xmind.com/api/mcp`. They also request gateway-based remote access via IP/domain. The closing of PR #5316 suggests this need has been addressed.

- [#5324](https://github.com/HKUDS/nanobot/issues/5324) — **Dream memory consolidation infinite loop** (2 comments, closed)  
  A single memory-consolidation run consumed 10M+ tokens over 23 minutes. The underlying need is stronger guardrails against meaningless tool-call loops. PR #5325 adds the no-op edit rejection.

- [#5327](https://github.com/HKUDS/nanobot/issues/5327) — **Nanobot repeats same message while reasoning** (1 comment, open)  
  Users need more deterministic reasoning/response behavior. This remains open with no linked fix PR yet.

## 5. Bugs & Stability

Ranked by severity:

1. **High — Dream memory consolidation token blowup**  
   [#5324](https://github.com/HKUDS/nanobot/issues/5324): An `edit_file` accepting no-op edits caused a 23-minute runaway loop and 10M+ token consumption.  
   **Fix exists:** [#5325](https://github.com/HKUDS/nanobot/pull/5325) rejects no-op edits and adds regression coverage.

2. **High — MCP connection failure can crash gateway**  
   [#5300](https://github.com/HKUDS/nanobot/issues/5300): Remote MCP HTTP 530 errors triggered an `anyio cancel scope` RuntimeError, leading to gateway crash/hang, task leaks, and high CPU.  
   No issue-specific fix is visible in this batch; the ongoing MCP SDK v2 migration in [#5179](https://github.com/HKUDS/nanobot/pull/5179) is likely relevant.

3. **Medium — Repeated reasoning messages**  
   [#5327](https://github.com/HKUDS/nanobot/issues/5327): Randomly repeats phrases like “Good points, let me investigate the issue” during reasoning.  
   **No fix PR yet.**

4. **Medium/P0 — Stale background task saves can overwrite session data**  
   [#5271](https://github.com/HKUDS/nanobot/pull/5271): Open P0 PR preventing stale background saves after `/new` from overwriting a fresh session.

5. **Medium/Security — ExecTool tilde expansion workspace bypass**  
   [#5329](https://github.com/HKUDS/nanobot/pull/5329): Open fix PR guards bare `~`, `~user`, and `~user/...` paths so commands like `cd ~ && cat secret.txt` cannot escape the workspace boundary.

6. **Low/Medium — Docker privilege-drop regression**  
   [#5320](https://github.com/HKUDS/nanobot/pull/5320): Open fix PR restores the three capabilities required by the root bootstrap path after `cap_drop: ALL`.

## 6. Feature Requests & Roadmap Signals

- **MCP browser OAuth** is the clearest roadmap signal. Issue [#5297](https://github.com/HKUDS/nanobot/issues/5297) requested it, and PR [#5316](https://github.com/HKUDS/nanobot/pull/5316) is already closed. This will likely be in the next release.
- **OrcaRouter provider support** — [#5328](https://github.com/HKUDS/nanobot/pull/5328) adds OrcaRouter as a named OpenAI-compatible gateway provider with 150+ models. Signals continued expansion of provider/gateway integrations.
- **Structured token usage records** — [#5299](https://github.com/HKUDS/nanobot/pull/5299) would expose per-day token accounting records via `GET /api/settings/usage/records`. This is a likely candidate for users needing cost transparency.
- **WebUI tabbed workbench** — [#5322](https://github.com/HKUDS/nanobot/pull/5322) models each topic as a Tab with up to four Pane sessions and switchable layouts. Indicates a major WebUI productivity push.
- **Agent Plugins + CLI Apps** — [#5288](https://github.com/HKUDS/nanobot/pull/5288) would integrate vendor-neutral Agent Plugins v1 with CLI Apps, making NanoBot a more generic host for portable skills and MCP runtimes.

## 7. User Feedback Summary

- Users are requesting **practical MCP server support**: specifically browser-based OAuth flows for services like Xmind, with remote/gateway-based access patterns.
- The **Dream memory token burn** incident reflects a real cost risk: one bad loop consumed roughly half a month of token usage. Users need stronger guardrails for autonomous agent loops.
- **MCP error isolation** is a recurring pain point: a single remote MCP failure should not crash the gateway or cause CPU runaway.
- **Reasoning output reliability** is another concern: randomly repeated phrases undermine trust in agent responses.
- On the positive side, maintainers appear responsive: the OAuth request and the no-op edit regression both received targeted PRs quickly.

## 8. Backlog Watch

The following open PRs appear most important and may need maintainer attention:

- [#5271](https://github.com/HKUDS/nanobot/pull/5271) — **P0 session-save race fix**  
  Open since 2026-08-06, prevents stale background task saves from overwriting session data. Highest-priority item in the backlog.

- [#5179](https://github.com/HKUDS/nanobot/pull/5179) — **MCP SDK v2 migration with legacy compatibility**  
  Open since 2026-07-30 and marked `conflict`. Likely important for long-term MCP stability and may address crashes like #5300.

- [#5257](https://github.com/HKUDS/nanobot/pull/5257) — **Bound sustained-goal continuation**  
  Open since 2026-08-05, marked `conflict`. Addresses unbounded goal-continuation loops burning tokens.

- [#5299](https://github.com/HKUDS/nanobot/pull/5299) — **Structured token usage records**  
  Open since 2026-08-08, marked `conflict`. Needs rebasing/merge attention despite being a valuable diagnostics feature.

- [#5323](https://github.com/HKUDS/nanobot/pull/5323) — **WebUI settings backend split**  
  Open, marked `conflict`. Part of the ongoing WebUI settings refactor.

- [#5292](https://github.com/HKUDS/nanobot/pull/5292) — **Matrix room-level reply fix**  
  Open since 2026-08-08; improves Matrix UX by linking replies to the initiating room-level event.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-08-11

## 1. Today's Overview

Activity is high: 50 issues and 50 PRs were updated in the last 24 hours, with 6 issues closed and 10 PRs merged/closed. No new release was published. The most urgent pattern is a cluster of Windows Desktop startup/update regressions, with new fixes already proposed in #83611 and #83604. In parallel, the project is running a security hardening campaign around child-process credential inheritance (#83565) and a repo-wide refactoring push to shard god-files (#78647). Overall, maintainer responsiveness looks strong, but Windows Desktop upgrade reliability and secret isolation remain the key risks.

## 2. Releases

No new releases were published in the last 24 hours.

---

## 3. Project Progress

Closed/merged PRs visible in the latest data:

- **fix(gateway): make turn-lease idle predicate waiter-aware** — [PR #67626](https://github.com/NousResearch/hermes-agent/pull/67626)  
  Hardens the turn-lease implementation against a latent invariant gap found during audit; closes a follow-up issue.

- **feat(skills): pin GitHub branch and PR installs to commits** — [PR #83597](https://github.com/NousResearch/hermes-agent/pull/83597)  
  Adds immutable SHA resolution for branch/PR skill installs, fail-closed handling for forks/short SHAs, and lock provenance. Focused test suite: 188 passed.

- **fix(desktop): attach renderer-lifecycle diagnostics to all BrowserWindow instances** — [PR #81533](https://github.com/NousResearch/hermes-agent/pull/81533)  
  Fixes black/undiagnosable secondary desktop windows from [#81290](https://github.com/NousResearch/hermes-agent/issues/81290).

- **fix(desktop): renderer-lifecycle diagnostics + crash recovery for every window** — [PR #83567](https://github.com/NousResearch/hermes-agent/pull/83567)  
  Extends crash logging and recovery to secondary, HUD, overlay, wake, and login windows under a shared crash-loop budget.

- **test(gateway): pin the final-send suppression contract across a behaviour matrix** — [PR #82676](https://github.com/NousResearch/hermes-agent/pull/82676)  
  No behavior change; locks down an invariant the final-send suppression logic depends on.

- **Closed: experimental change** — [PR #83570](https://github.com/NousResearch/hermes-agent/pull/83570)  
  Explicitly not being pursued.

---

## 4. Community Hot Topics

Most active issue discussions:

- [Issue #78647 — Epic: Shard all 20 god files — repo-wide god-file decomposition](https://github.com/NousResearch/hermes-agent/issues/78647) — **66 comments**  
  The highest-activity issue. Underlying need: maintainability. Files like `tools/mcp_tool.py`, `agent/conversation_loop.py`, and `hermes_cli/gateway.py` exceed 7,000 lines each, and the project has a standing policy that all god-files must be sharded.

- [Issue #34352 — Solving the Multi-Tenant Hermes Problem](https://github.com/NousResearch/hermes-agent/issues/34352) — **21 comments, 2 👍**  
  A production user reports that memory operations bypass the hook system, making tenant isolation impossible without forking core. Strong signal for multi-tenant/enterprise demand.

- [Issue #68367 — Desktop-spawned profile inherits Tlon credentials from parent process env](https://github.com/NousResearch/hermes-agent/issues/68367) — **5 comments**  
  Security/isolation bug: profile backends can inherit credentials from the default profile, causing duplicate responders on the same Urbit moon.

- [Issue #77164 — Child-process env scrub is a name-shape heuristic; non-credential-shaped secrets leak](https://github.com/NousResearch/hermes-agent/issues/77164) — **4 comments**  
  Community is actively probing the limits of the new secret-scrub implementation.

PR-side comment counts were not available in this snapshot, but the most community-relevant open PRs are the Windows watchdog fixes ([#83611](https://github.com/NousResearch/hermes-agent/pull/83611), [#83604](https://github.com/NousResearch/hermes-agent/pull/83604)), the DeepSeek empty-`tool_calls` fix ([#83600](https://github.com/NousResearch/hermes-agent/pull/83600)), and Slack channel-initiated work authorization ([#83504](https://github.com/NousResearch/hermes-agent/pull/83504)).

---

## 5. Bugs & Stability

Ranked by severity/impact:

- **[P1] DeepSeek sessions permanently wedge on `tool_calls: []`** — [Issue #83312](https://github.com/NousResearch/hermes-agent/issues/83312)  
  Every follow-up message fails with HTTP 400 once an empty `tool_calls: []` is replayed.  
  **Fix PR exists:** [PR #83600](https://github.com/NousResearch/hermes-agent/pull/83600).

- **[Critical-ish] Child-env scrub bypasses** — [Issue #77463](https://github.com/NousResearch/hermes-agent/issues/77463)  
  TUI host re-adds full env post-scrub, LSP passes full env, Docker forward-env leaks secrets, `_HERMES_FORCE_` unwrap bypass.  
  No dedicated fix PR yet; covered by campaign epic [Issue #83565](https://github.com/NousResearch/hermes-agent/issues/83565).

- **[P2] Windows Desktop: backend exits immediately via parent-death watchdog false positive on uv trampoline** — [Issue #83555](https://github.com/NousResearch/hermes-agent/issues/83555)  
  Desktop never boots; `Hermes backend exited (0)` before ready.  
  **Fix PR exists:** [PR #83611](https://github.com/NousResearch/hermes-agent/pull/83611).

- **[P2] Windows Desktop: ppid mismatch triggers watchdog self-exit on every launch** — [Issue #83583](https://github.com/NousResearch/hermes-agent/issues/83583)  
  Same symptom family as #83555.  
  **Fix PR exists:** [PR #83604](https://github.com/NousResearch/hermes-agent/pull/83604).

- **[P2] Windows Desktop doesn't start after last update** — [Issue #83548](https://github.com/NousResearch/hermes-agent/issues/83548)  
  TUI works; Desktop crashes. No dedicated fix PR visible yet.

- **[P2] Windows: `hermes update` self-locks `cryptography._rust.pyd`** — [Issue #83569](https://github.com/NousResearch/hermes-agent/issues/83569)  
  Updater process imports cryptography and blocks file replacement with OS error 5. No fix PR visible.

- **[P2] `gateway.multiplex_profiles`: default profile secrets leak into secondary profile terminal/Kanban subprocesses** — [Issue #82936](https://github.com/NousResearch/hermes-agent/issues/82936)  
  Breaks least-privilege profile isolation. No fix PR visible.

- **[P2] Desktop-spawned profile inherits Tlon credentials from parent process env** — [Issue #68367](https://github.com/NousResearch/hermes-agent/issues/68367)  
  Still open; security-boundary issue.

- **[P2] WhatsApp bridge: operator environment not scrubbed from subprocess** — [Issue #38079](https://github.com/NousResearch/hermes-agent/issues/38079)  
  Open since June; no fix PR visible.

- **[P2] Cron API calls hang 20–219s behind transparent proxy due to half-dead pooled connections** — [Issue #81518](https://github.com/NousResearch/hermes-agent/issues/81518)  
  Cleanup misses request clients. No fix PR visible.

- **[P2] `/refine` rejects completed Desktop sessions when in-memory agent cache is absent** — [Issue #83455](https://github.com/NousResearch/hermes-agent/issues/83455)  
  Persisted session is treated as empty. No fix PR visible.

- **[P2] Curator-archived skills unrecoverable; `curator restore` fails for timestamped archives** — [Issue #83580](https://github.com/NousResearch/hermes-agent/issues/83580)  
  51 of 62 archived skills were unrecoverable on one user's machine.  
  **Fix PR exists:** [PR #83613](https://github.com/NousResearch/hermes-agent/pull/83613).

- **[P2] kimi-coding credential pool retains stale static `base_url`** — [Issue #5908](https://github.com/NousResearch/hermes-agent/issues/5908)  
  Old issue, still open; needs re-resolution from key prefix on load.

**Resolved in this window:**

- Dashboard macOS fd leak — [Issue #81547](https://github.com/NousResearch/hermes-agent/issues/81547) — closed.
- Desktop restart orphan gateway — [Issue #77276](https://github.com/NousResearch/hermes-agent/issues/77276) — closed.
- Windows secondary black window — [Issue #81290](https://github.com/NousResearch/hermes-agent/issues/81290) — closed via renderer-lifecycle PRs.
- Windows Desktop boot loop after update — [Issue #83603](https://github.com/NousResearch/hermes-agent/issues/83603) — closed.

---

## 6. Feature Requests & Roadmap Signals

- **Child-process credential-inheritance conquest** — [Issue #83565](https://github.com/NousResearch/hermes-agent/issues/83565)  
  Campaign epic for every issue/PR fixing trust-boundary credential leaks. This is likely to shape upcoming security releases.

- **Built-in gateway self-heal** — [Issue #83522](https://github.com/NousResearch/hermes-agent/issues/83522)  
  Requests clean-SIGTERM restart handling and dead-WebSocket detection. Marked `needs-decision`; could appear in a next minor release if accepted.

- **Slack: allow channel members to initiate work without DM access** — [PR #83504](https://github.com/NousResearch/hermes-agent/pull/83504)  
  A concrete feature PR, likely a candidate for the next version.

- **CLI `release-notes` command** — [PR #66178](https://github.com/NousResearch/hermes-agent/pull/66178)  
  Interactive GitHub Releases viewer. Still open with `needs-decision`.

- **Large-context compression cap for 1M-token models** — [PR #83523](https://github.com/NousResearch/hermes-agent/pull/83523)  
  Avoids deferring compaction until 500K tokens; likely performance improvement for large-context workflows.

- **God-file sharding epic** — [Issue #78647](https://github.com/NousResearch/hermes-agent/issues/78647)  
  Architecture roadmap signal; expect continued decomposition PRs.

---

## 7. User Feedback Summary

- **Windows update pain is the loudest dissatisfaction signal.** Users report Desktop crashing after update while TUI works ([#83548](https://github.com/NousResearch/hermes-agent/issues/83548)), backend exiting before ready ([#83555](https://github.com/NousResearch/hermes-agent/issues/83555)), boot loops ([#83603](https://github.com/NousResearch/hermes-agent/issues/83603)), and update self-locking cryptography DLLs ([#83569](https://github.com/NousResearch/hermes-agent/issues/83569)).

- **Security-conscious/multi-tenant users are pushing for real isolation.** One production user states memory operations "bypass the hook system entirely, making tenant isolation impossible without forking core" ([#34352](https://github.com/NousResearch/hermes-agent/issues/34352)). Similar pain appears in secret leakage across profiles/subprocesses ([#82936](https://github.com/NousResearch/hermes-agent/issues/82936), [#68367](https://github.com/NousResearch/hermes-agent/issues/68367)).

- **Skill management workflow is causing real friction.** A user found 51 of 62 archived skills unrecoverable through the documented CLI path ([#83580](https://github.com/NousResearch/hermes-agent/issues/83580)).

- **Provider compatibility issues damage trust.** DeepSeek sessions permanently wedging on a wire-format edge case ([#83312](https://github.com/NousResearch/hermes-agent/issues/83312)) is a high-impact user-facing failure.

- **Satisfaction signal:** maintainers are shipping quick, targeted fixes for newly reported Desktop regressions, which suggests a responsive maintenance loop despite the Windows instability.

---

## 8. Backlog Watch

These items are open for a while and appear to need maintainer attention:

- [Issue #5908 — kimi-coding credential pool `base_url` not re-resolved from key prefix on load](https://github.com/NousResearch/hermes-agent/issues/5908) — opened 2026-04-07, P2, only 2 comments.

- [Issue #38079 — WhatsApp bridge: scrub operator environment from subprocess](https://github.com/NousResearch/hermes-agent/issues/38079) — opened 2026-06-03, P2 security issue, 2 comments.

- [Issue #34352 — Solving the Multi-Tenant Hermes Problem](https://github.com/NousResearch/hermes-agent/issues/34352) — opened 2026-05-29, 21 comments, `needs-decision`.

- [Issue #60961 — Langfuse SDK plugin: placeholder API key silent failure](https://github.com/NousResearch/hermes-agent/issues/60961) — opened 2026-07-08, duplicate-tagged but still notable.

- [PR #66178 — feat(cli): add `release-notes` command](https://github.com/NousResearch/hermes-agent/pull/66178) — opened 2026-07-17, `needs-decision`.

- [PR #72428 — fix(web): expose Docker-visible cache paths](https://github.com/NousResearch/hermes-agent/pull/72428) — opened 2026-07-27, P2.

- [PR #75063 — fix(kanban): wake origin session on triage escalation](https://github.com/NousResearch/hermes-agent/pull/75063) — opened 2026-07-30, P3.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-08-11

## 1. Today's Overview

PicoClaw activity in the last 24 hours was healthy and maintenance-focused: 4 issues were updated, split evenly between open and closed, and 9 PRs were updated, with 7 closed/merged and 2 still open. No new releases were published. The closed PR set includes a notable security hardening change for remote prompt and exec handling, Telegram rich-table rendering, and a web-frontend build fix. The two open PRs both target recent agent-loop and shell-command permission bugs. Overall, the project is actively addressing regressions and hardening security, though several stale-labeled items still need maintainer follow-up.

## 2. Releases

None. No new versions or release artifacts were published in the 2026-08-11 window. The latest version referenced in active issues remains PicoClaw `0.3.1`.

## 3. Project Progress

The following PRs were closed/merged in the last 24 hours:

- **[#3297 — fix(security): harden remote prompt and exec boundaries](https://github.com/sipeed/picoclaw/pull/3297)**  
  A significant security change. It normalizes remote sender/chat metadata, defaults remote execution to disabled, requires independent per-call approval when enabled, re-enforces origin policy at execution time, and migrates configs to schema v4. This may be a breaking config change for users relying on older schema versions.

- **[#3327 — feat(telegram): render tables with native rich messages](https://github.com/sipeed/picoclaw/pull/3327)**  
  Telegram responses with GFM or HTML tables are no longer reduced to monospaced code blocks; they now use Bot API rich messages.

- **[#3295 — fix(channels): prevent SplitMessage hang on oversized fence headers](https://github.com/sipeed/picoclaw/pull/3295)**  
  Fixes a hang when an opening fenced-code info string exceeds the max length, with a bounded raw-split fallback and regression coverage.

- **[#3326 — fix(web): remove duplicate pnpm lock entries](https://github.com/sipeed/picoclaw/pull/3326)**  
  Removes duplicate `semver@7.8.5` entries blocking `pnpm install --frozen-lockfile` with `ERR_PNPM_BROKEN_LOCKFILE`.

- **[#3296 — i18n: complete Czech code wrap labels](https://github.com/sipeed/picoclaw/pull/3296)**  
  Completes localized code-wrap labels for Czech.

- **[#2132 — feat(config): support model-specific max_tokens and fix config key consistency](https://github.com/sipeed/picoclaw/pull/2132)**  
  A long-running enhancement that decouples the model lookup key from the runtime model ID and adds model-level parameter overrides.

- **[#1547 — fix: merge PR #1466 #1465](https://github.com/sipeed/picoclaw/pull/1547)**  
  A housekeeping PR that merges fixes from two older open PRs.

## 4. Community Hot Topics

The most active issue by comment count is:

- **[#3301 — `/clear` and session auto-compression don't work in chats routed to non-default agent via dispatch rules](https://github.com/sipeed/picoclaw/issues/3301)** — 3 comments  
  Users running PicoClaw on Raspberry Pi with Discord/Telegram channels and dispatch rules report that session-management commands stop working when a chat is routed to a non-default agent. The underlying need is consistent per-agent session behavior regardless of routing.

Two issues with 2 comments each show a common theme around configuration discoverability:

- **[#3298 — Add AI Router as an OpenAI-compatible provider preset](https://github.com/sipeed/picoclaw/issues/3298)**  
  The reporter maintains AI Router and wants a named provider preset instead of manually setting `api_base`.

- **[#3294 — `/list models` only shows the current model instead of all configured models](https://github.com/sipeed/picoclaw/issues/3294)**  
  Users expect the `/list models` command to be a full configuration browser, not just a status line.

There was no reaction/👍 data in this window, so sentiment metrics are unavailable.

## 5. Bugs & Stability

Bugs reported or active in the last 24 hours, ranked by severity:

1. **[#3311 — Repeated identical tool failure loops silently to `max_tool_iterations` — user never gets an answer](https://github.com/sipeed/picoclaw/issues/3311)** — **High**  
   In production over Telegram, a turn can spin for many minutes when a tool fails with the same error on every call, and the user never receives a reply. A fix is proposed in **[PR #3312 — stop turn early on repeated identical tool failure](https://github.com/sipeed/picoclaw/pull/3312)**, but it is still open.

2. **[#3314 — Agent not able to execute shell command added to `customAllowPatterns`](https://github.com/sipeed/picoclaw/pull/3314)** — **High**  
   This open PR describes a real permission bug: default deny patterns take precedence in `guardCommand`, so commands like `git push` do not work even when explicitly allowlisted. The fix is proposed but not yet merged.

3. **[#3301 — `/clear` and session auto-compression fail for dispatch-routed chats](https://github.com/sipeed/picoclaw/issues/3301)** — **Medium**  
   Affects session hygiene on constrained devices and multi-agent configurations. No fix PR is attached yet.

4. **[#3294 — `/list models` only shows the current model](https://github.com/sipeed/picoclaw/issues/3294)** — **Low**  
   User-facing CLI/Telegram mismatch. The issue was closed in this window, but the available data does not include a resolution summary.

## 6. Feature Requests & Roadmap Signals

- **[#3298 — AI Router provider preset](https://github.com/sipeed/picoclaw/issues/3298)**  
  Users want first-class provider presets. The generic `openai` provider already works, but a named preset would improve discoverability. This was closed as an issue, but the idea may still land as a small config/provider enhancement.

- **[#2132 — Model-specific `max_tokens` and config-key consistency](https://github.com/sipeed/picoclaw/pull/2132)**  
  Closed/merged in this window. This signals growing demand for per-model overrides and cleaner config lookup behavior.

- **[#3327 — Telegram rich table rendering](https://github.com/sipeed/picoclaw/pull/3327)**  
  Already merged, indicating the project is investing in channel-specific UX polish rather than only core agent logic.

Likely next-version candidates: the two open fix PRs, **[#3312](https://github.com/sipeed/picoclaw/pull/3312)** and **[#3314](https://github.com/sipeed/picoclaw/pull/3314)**, plus the schema v4 config migration from **[#3297](https://github.com/sipeed/picoclaw/pull/3297)**.

## 7. User Feedback Summary

- Telegram production users report silent timeouts when a tool repeatedly fails, e.g. `git` without credentials, and expect fast failure or a clear error instead of a long silent loop ([#3311](https://github.com/sipeed/picoclaw/issues/3311)).
- A Raspberry Pi user needs session management like `/clear` and auto-compression to work consistently for all agents, including non-default agents reached through dispatch rules ([#3301](https://github.com/sipeed/picoclaw/issues/3301)).
- A user explicitly allowlisting `git push` in `customAllowPatterns` found the shell guard still blocked it; tests in the repository apparently did not cover this case ([#3314](https://github.com/sipeed/picoclaw/pull/3314)).
- Users want `/list models` to show all configured models, not just the active one ([#3294](https://github.com/sipeed/picoclaw/issues/3294)).
- The AI Router maintainer wants a plug-and-play provider preset for end users, indicating interest in broader OpenAI-compatible provider ecosystem support ([#3298](https://github.com/sipeed/picoclaw/issues/3298)).

## 8. Backlog Watch

Several important items now carry a `stale` label and need maintainer attention:

- **[#3301 — Dispatch-routed chat session commands broken](https://github.com/sipeed/picoclaw/issues/3301)**  
  Open since 2026-07-29 with active discussion, no fix PR attached.

- **[#3311 — Silent tool-failure loop](https://github.com/sipeed/picoclaw/issues/3311)**  
  Open since 2026-08-02, with a fix PR available but not merged.

- **[#3312 — Fix for repeated identical tool failure](https://github.com/sipeed/picoclaw/pull/3312)**  
  Stale open PR that addresses the highest-severity bug currently reported.

- **[#3314 — Fix `customAllowPatterns` precedence](https://github.com/sipeed/picoclaw/pull/3314)**  
  Stale open PR that fixes a permission bypass-by-default-deny issue.

Long-running PRs such as **[#2132](https://github.com/sipeed/picoclaw/pull/2132)** and **[#1547](https://github.com/sipeed/picoclaw/pull/1547)** were finally closed in this window after months, which is positive cleanup; however, reviewers should ensure their intended changes are actually tracked in follow-up work.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-08-11

## 1. Today's Overview

On 2026-08-11, NanoClaw shows a high level of active development: 20 PRs were updated in the last 24 hours, with 10 closed/merged, while 3 issues remain open. No new release was published. The day’s work concentrated on reliability fixes (chat delivery deduplication, inbound message preservation, Telegram pairing hardening), privacy improvements (DM log redaction/opt-in safety logs), and internal refactoring (DB migrations, lifecycle hooks, skill seams). Overall project health looks good, but the open issues point to a common theme: silent failures in message delivery and scheduled-task error handling need more attention.

## 2. Releases

**None.** No new NanoClaw releases were published in this window. The latest release is unchanged.

## 3. Project Progress

10 PRs were merged/closed in the last 24 hours:

- [PR #3228](https://github.com/qwibitai/nanoclaw/pull/3228) — **fix: deduplicate turn-scoped chat delivery** — reduces duplicate chat messages within a single turn.
- [PR #3222](https://github.com/qwibitai/nanoclaw/pull/3222) — **feat(permissions): add opt-in privacy-safe DM logs** — adds a `privacySafeLogs` option to suppress identifying user/channel data in DM logs.
- [PR #3215](https://github.com/qwibitai/nanoclaw/pull/3215) — **fix(permissions): redact DM resolution logs** — further improves log privacy by removing user IDs, handles, and raw adapter errors.
- [PR #3213](https://github.com/qwibitai/nanoclaw/pull/3213) — **refactor(channels): register question renderers** — cleans up channel question-rendering registration.
- [PR #3214](https://github.com/qwibitai/nanoclaw/pull/3214) — **refactor(host): unify module lifecycle hooks** — standardizes host module startup/shutdown behavior.
- [PR #3212](https://github.com/qwibitai/nanoclaw/pull/3212) — **refactor(db): add module migration registry** — improves database migration organization.
- [PR #3186](https://github.com/qwibitai/nanoclaw/pull/3186) — **refactor: add host seams for skill-owned capabilities** — prepares the host for cleaner skill integration.
- [PR #3216](https://github.com/qwibitai/nanoclaw/pull/3216) — **docs(hardened-image): note that `install_packages` covers apt and npm only** — clarifies an important documented limitation.
- [PR #3211](https://github.com/qwibitai/nanoclaw/pull/3211) — **docs(skills): define single-responsibility integration rule** — adds a design/contribution guideline for skills.
- [PR #3219](https://github.com/qwibitai/nanoclaw/pull/3219) — **Telegram and container env** — closed/merged Telegram and container environment changes.

## 4. Community Hot Topics

Comment and reaction volume is currently low: the most-commented issue is [Issue #3075](https://github.com/qwibitai/nanoclaw/issues/3075) with 1 comment; [Issue #3226](https://github.com/qwibitai/nanoclaw/issues/3226) and [Issue #3223](https://github.com/qwibitai/nanoclaw/issues/3223) have 0 comments/reactions. Still, these open issues reflect strong underlying user needs:

- [Issue #3075](https://github.com/qwibitai/nanoclaw/issues/3075) — **Silent log loss + duplicate-insert errors after long uptime; no systemd unit**  
  Environment: WSL2/Docker/Matrix. The user reports durability problems in a long-running self-hosted deployment and a lack of process supervision. Underlying need: reliable logging, idempotent inbound handling, and better packaging/systemd support.

- [Issue #3226](https://github.com/qwibitai/nanoclaw/issues/3226) — **Inbound messages silently dropped when a platform reuses a message ID**  
  The user says this is “indistinguishable from the agent ignored me.” Underlying need: idempotent message handling and visible diagnostics when deduplication drops or preserves messages.

- [Issue #3223](https://github.com/qwibitai/nanoclaw/issues/3223) — **Scheduled-task error messages are silently dropped; operator never learns the task failed**  
  Underlying need: routable/alertable error delivery for scheduled tasks, not just a chat message with no destination.

## 5. Bugs & Stability

Ranked by severity:

1. **High — Silent inbound message loss on platform ID reuse**  
   [Issue #3226](https://github.com/qwibitai/nanoclaw/issues/3226)  
   Platforms that reuse message IDs cause duplicate-key insert failures, and the message is logged then dropped. The user sees no response at all.  
   **Fix PR:** [PR #3224](https://github.com/qwibitai/nanoclaw/pull/3224) is open and targets exactly this: preserve inbound messages across platform ID reuse.

2. **High — Scheduled-task failures are invisible to operators**  
   [Issue #3223](https://github.com/qwibitai/nanoclaw/issues/3223)  
   When a scheduled task turn errors, the error is written as a chat message with no routing fields and is silently dropped. No dedicated fix PR is visible yet.

3. **Medium-High — Duplicate-insert errors and silent log loss after long uptime**  
   [Issue #3075](https://github.com/qwibitai/nanoclaw/issues/3075)  
   Long-running Matrix/WSL2/Docker deployments hit duplicate inbound inserts and log loss; also no systemd unit is installed. [PR #3224](https://github.com/qwibitai/nanoclaw/pull/3224) may address the duplicate-insert portion, but log supervision and systemd packaging remain open.

4. **Medium — Telegram pairing security hardening**  
   [PR #3229](https://github.com/qwibitai/nanoclaw/pull/3229) and [PR #3225](https://github.com/qwibitai/nanoclaw/pull/3225)  
   Two open PRs address weak Telegram pairing code generation (`Math.random()`) and permissive pairing-store permissions. These should be consolidated and merged.

## 6. Feature Requests & Roadmap Signals

The open issues are mostly bug reports, but they imply important feature/enhancement requests:

- **Supervised deployments / systemd unit** — requested implicitly by [Issue #3075](https://github.com/qwibitai/nanoclaw/issues/3075).
- **Routable/alertable scheduled-task errors** — requested by [Issue #3223](https://github.com/qwibitai/nanoclaw/issues/3223).
- **Idempotent inbound message handling with diagnostics** — requested by [Issue #3226](https://github.com/qwibitai/nanoclaw/issues/3226).

Active PRs signal near-term roadmap direction:

- [PR #3220](https://github.com/qwibitai/nanoclaw/pull/3220) — **Agent templates become Agent Plugins 1.0.0 directories** — a format/engine migration.
- [PR #2909](https://github.com/qwibitai/nanoclaw/pull/2909) — **Template setup flow in the wizard and first-agent stamping** — part 2 of the agent-templates feature.
- [PR #3092](https://github.com/qwibitai/nanoclaw/pull/3092) — **Remote Streamable HTTP MCP servers** support in the engine.
- [PR #3221](https://github.com/qwibitai/nanoclaw/pull/3221) — extends remote MCP support to **codex and opencode** providers.
- [PR #3218](https://github.com/qwibitai/nanoclaw/pull/3218) — **CLI bounded JSON-from-stdin mode** for structured arguments.
- [PR #3222](https://github.com/qwibitai/nanoclaw/pull/3222) — landed privacy-safe DM logging; likely part of a broader privacy hardening push.

Prediction for the next version: Agent Plugins/template migration, remote MCP over HTTP, CLI stdin JSON, Telegram pairing hardening, and improved message-delivery deduplication are the most likely inclusions.

## 7. User Feedback Summary

Real user pain points this cycle center on **silent failures**:

- From [Issue #3226](https://github.com/qwibitai/nanoclaw/issues/3226): “the agent ignored me” — dropped inbound messages are a major trust/usability problem.
- From [Issue #3223](https://github.com/qwibitai/nanoclaw/issues/3223): scheduled-task operators never learn about failures — a serious automation/observability gap.
- From [Issue #3075](https://github.com/qwibitai/nanoclaw/issues/3075): long uptime causes log loss and duplicate-insert errors; no systemd unit makes recovery harder for self-hosters.

On the positive side, community contributions show security/privacy awareness: Telegram pairing PRs ([#3229](https://github.com/qwibitai/nanoclaw/pull/3229), [#3225](https://github.com/qwibitai/nanoclaw/pull/3225)) and DM log privacy work ([#3222](https://github.com/qwibitai/nanoclaw/pull/3222), [#3215](https://github.com/qwibitai/nanoclaw/pull/3215)) indicate users care about secure, privacy-preserving deployments. Maintainer responsiveness appears strong given the volume of closed PRs, but the silent-message-loss issues remain unresolved from the user perspective.

## 8. Backlog Watch

Items that need maintainer attention due to age/importance:

- [Issue #3075](https://github.com/qwibitai/nanoclaw/issues/3075) — Open since 2026-07-17, updated 2026-08-10, only 1 comment. Long-running Matrix/WSL2 duplicate-insert and log-loss report still lacks a confirmed fix or workaround.
- [PR #2909](https://github.com/qwibitai/nanoclaw/pull/2909) — Core-team template setup wizard PR, open since 2026-07-02. Large feature that has been waiting over a month.
- [PR #3092](https://github.com/qwibitai/nanoclaw/pull/3092) — Remote Streamable HTTP MCP support, open since 2026-07-19. Needs review; related [PR #3221](https://github.com/qwibitai/nanoclaw/pull/3221) depends on it.
- [PR #3193](https://github.com/qwibitai/nanoclaw/pull/3193) — Telegram Chat SDK rich-message update, open since 2026-08-06.
- [PR #3225](https://github.com/qwibitai/nanoclaw/pull/3225) vs [PR #3229](https://github.com/qwibitai/nanoclaw/pull/3229) — Overlapping Telegram pairing hardening fixes; maintainers should consolidate to avoid duplicated work.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest — 2026-08-11

## 1. Today's Overview

NullClaw is in a quiet maintenance phase. In the last 24 hours, 1 issue was closed and 1 pull request was updated, with no new releases published. The notable event is the closure of Issue #700, a feature request for an `a2a_call` client tool that has been open since March 2026 — signaling potential completion of that work. The only active PR is a Dependabot infrastructure bump that has remained open for nearly two months. Overall activity is low but not stagnant, suggesting the project is between development sprints rather than abandoned. No bugs or regressions were reported in this window.

## 2. Releases

No new releases were published in the last 24 hours. Omitted.

---

## 3. Project Progress

**No pull requests were merged or closed today.** However, one long-standing issue reached closure:

- **[Issue #700 — Add a2a_call client tool for calling remote agents](https://github.com/nullclaw/nullclaw/issues/700) — CLOSED**
  - Created 2026-03-23 by georgeglarson, closed/updated 2026-08-10
  - The issue proposed a client-side `a2a_call` tool enabling the agent to send `message/send` JSON-RPC requests over the A2A protocol (v0.3.0). NullClaw currently only serves A2A; the request was to add outbound consumption.
  - With closure coming after ~4.5 months, this may indicate the feature was implemented (likely via work merged prior to this 24-hour window) or was validated through the bundled patch. Either way, closure is a positive signal for A2A interoperability progress.

---

## 4. Community Hot Topics

Community discussion volume is minimal today, but one item stands out:

- **[Issue #700 — a2a_call client tool](https://github.com/nullclaw/nullclaw/issues/700)** — 1 comment, 1 👍 — the most-engaged item in the window. The single upvote, combined with a substantive use case, indicates modest but real user demand for outbound A2A capabilities.
- **[PR #956 — ci(deps): bump alpine 3.23 → 3.24](https://github.com/nullclaw/nullclaw/pull/956)** — no comments or reactions. Routine automated maintenance, not a community discussion point.

**Underlying need:** The activity around #700 reflects a desire for **symmetrical A2A networking** — user instances should be able to both serve and call other agents, enabling hub-and-spoke or peer-to-peer agent topologies. The single comment likely sought clarification or confirmation, and the upvote suggests at least one additional user shares the need.

---

## 5. Bugs & Stability

**No bugs, crashes, or regressions were reported in the last 24 hours.** Stability-related activity is limited to:

- **[PR #956 — Alpine 3.23 → 3.24](https://github.com/nullclaw/nullclaw/pull/956)** — a routine base-image update (in the `docker-images` group) that typically carries security and bug fixes. It remains open, and no severity issues are associated with it.

Overall system stability appears healthy, with the only infrastructure change being an overdue dependency refresh rather than a reactive fix.

---

## 6. Feature Requests & Roadmap Signals

The clear roadmap signal this period is **bidirectional A2A protocol support**:

- **[Issue #700 (closed)](https://github.com/nullclaw/nullclaw/issues/700)** requested an `a2a_call` client tool. With its closure, it is plausible that an upcoming release will include outbound A2A calling, positioning NullClaw as both an A2A server and client. This aligns with the broader industry trend toward agent-to-agent standards (A2A v0.3.0 interoperability).
- **Prediction:** If the closure reflects merged code, `a2a_call` should appear in the next NullClaw release, likely alongside or shortly after any A2A v0.3.0 compliance updates already served. Watch the changelog for `a2a` / `message/send` entries.

---

## 7. User Feedback Summary

The only genuine user feedback in this window comes from **[Issue #700](https://github.com/nullclaw/nullclaw/issues/700)** (author: georgeglarson):

- **Real pain point:** NullClaw lacks a client-side A2A implementation, preventing outbound calls to remote agents.
- **Real use case:** The user runs two NullClaw instances — a public-facing "doorman" and a private personal agent — and needs them to interoperate via A2A.
- **Satisfaction signal:** The issue was closed, which (assuming completion) indicates the user’s request was addressed. The single 👍 suggests at least one other user shares the need. Low comment volume indicates no prolonged debate or dissatisfaction.
- The author contributed a working tool ("I've built an `a2a_call` tool"), which is a positive collaborative signal for the maintainer relationship.

---

## 8. Backlog Watch

- **[PR #956 — Alpine 3.23 → 3.24 (Docker)](https://github.com/nullclaw/nullclaw/pull/956)**
  - Opened **2026-06-15**, still open as of 2026-08-10 (~8 weeks without merge).
  - Only a dependency-group bump with no conflicts reported; long-dormant Dependabot PRs suggest either CI friction, release-train scheduling, or maintainer bandwidth constraints. Stale base images accumulate security risk over time, so this deserves a merge or explicit close.
- **[Issue #700](https://github.com/nullclaw/nullclaw/issues/700)** — now closed, but it took ~4.5 months to resolve; users with feature requests timing-sensitive to A2A standards may face similar lead times.

**Maintainer attention needed:** primarily on #956 for hygiene; no other stale community-facing items are evident in this window.

---

*Data sources: [nullclaw/nullclaw Issues](https://github.com/nullclaw/nullclaw/issues) and [Pull Requests](https://github.com/nullclaw/nullclaw/pulls), snapshot 2026-08-11.*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-08-11

## 1. Today's Overview

IronClaw is in a highly active maintenance-and-hardening phase. In the last 24 hours, 50 issues and 50 PRs were updated, with a near-even split between open and closed work (25/25 issues; 33 open vs. 17 merged/closed PRs). The dominant themes are architecture governance (audit-driven ratchet fixes), a multi-PR "doc-truth" pipeline to stop documentation drift, channel reliability (Slack/Telegram), and CI artifact bloat. One urgent patch release candidate, `ironclaw-v1.1.1-rc.1`, was published. The project shows strong dual-track velocity: core contributors are landing large refactors while newer contributors (e.g., `theredspoon`, `thisisjoshford`) are closing documentation and CI gaps.

## 2. Releases

**ironclaw-v1.1.1-rc.1** (2026-08-10) — [Release](https://github.com/nearai/ironclaw/releases/tag/ironclaw-v1.1.1-rc.1)

An urgent patch candidate for the 1.1 line. Key focus areas:
- **Channel delivery and pairing**
- **IronHub / custom MCP compatibility**
- **WebUI streaming stability**
- **Durable retrieval**
- **Safe upgrades from both supported stable predecessors**

⚠️ **Migration note:** When upgrading from 1.0.0, **all writers must be stopped** first — indicating a breaking storage/state transition requiring a maintenance window.

## 3. Project Progress

**Notable merged/closed PRs:**
- [#7381](https://github.com/nearai/ironclaw/pull/7381) — Doc-truth pipeline design record (5/5 doc-truth PR), adding the as-built design answering [#7317](https://github.com/nearai/ironclaw/issues/7317)
- [#7336](https://github.com/nearai/ironclaw/pull/7336) — `loop-host`: dedup consumed steering replays, preventing duplicate assistant replies

**Closed issues (25 total) show several workstreams completing:**
- **Architecture governance:** [#7145](https://github.com/nearai/ironclaw/issues/7145), [#7147](https://github.com/nearai/ironclaw/issues/7147), [#7149](https://github.com/nearai/ironclaw/issues/7149), [#7150](https://github.com/nearai/ironclaw/issues/7150), [#7151](https://github.com/nearai/ironclaw/issues/7151) — all closed, covering extension_host re-layering, ratchet drift, same-layer coupling guards, vendor-sanction pins, and composition mass-gate poisoning
- **Epics completed:** [#6941](https://github.com/nearai/ironclaw/issues/6941) (self-create/find/choose/use skills), [#6727](https://github.com/nearai/ironclaw/issues/6727) (custom/arbitrary MCP server support), [#6733](https://github.com/nearai/ironclaw/issues/6733) (manifest-declared `/model` and `/status` commands across Telegram, Slack, WebUI)
- **Refactoring:** [#6926](https://github.com/nearai/ironclaw/issues/6926) — ten-family crate layout, [#7067](https://github.com/nearai/ironclaw/issues/7067) — ResourceGovernor narrowed to a reserve/reconcile/release port
- **Docs truth:** [#6945](https://github.com/nearai/ironclaw/issues/6945) — fixed CLAUDE.md citing nonexistent tests; [#7036](https://github.com/nearai/ironclaw/issues/7036) — documented CI coverage-gate gap

## 4. Community Hot Topics

- [#7137](https://github.com/nearai/ironclaw/issues/7137) — **live-canary shard artifacts are 700MB–1.5GB** (12 comments): CI uploads exceed 5GB per run across 13 bundles; slows downloads and burns GitHub Actions quota. A bot-authored fix attempt exists in [#7466](https://github.com/nearai/ironclaw/pull/7466).
- [#7145](https://github.com/nearai/ironclaw/issues/7145) — extension_host → loops re-layer sizing method (4 comments): the prior file-count baseline was proven wrong during execution; re-sized from "four-port residue."
- [#7317](https://github.com/nearai/ironclaw/issues/7317) — Doc-Truth Verification Pipeline proposal (3 comments): community-identified real drift (e.g., `origin_gate_matrix` became mandatory without docs); now answered by the merged design record [#7381](https://github.com/nearai/ironclaw/pull/7381).
- [#6257](https://github.com/nearai/ironclaw/issues/6257) — PDF `attachments.mime_type` error (3 comments): user-facing breakage when sending/generating PDFs; open since July 19.
- [#5882](https://github.com/nearai/ironclaw/issues/5882) — Repeated Slack reconnects leave auth flow broken (3 comments): only recovery is full extension reinstall.
- [#7147](https://github.com/nearai/ironclaw/issues/7147) — Architecture ratchets carry untracked slack; three PRs hold three baseline values (3 comments): process-integrity concern for CI gates.

**Underlying needs:** CI/triage efficiency, trustworthy documentation, channel reliability, and meaningful architecture enforcement.

## 5. Bugs & Stability

Ranked by severity:

| Severity | Issue | Description | Fix status |
|---|---|---|---|
| 🔴 High | [#7476](https://github.com/nearai/ironclaw/issues/7476) | `classify_delivery_outcome` (MODEL path) discards `vendor_message_refs`, hiding partial-send evidence from the model | Open; no fix yet |
| 🔴 High | [#7473](https://github.com/nearai/ironclaw/issues/7473) | Connect-nudge anti-duplicate throttle can release on ref-less delivery, causing duplicate nudges to already-nudged users | Open; fix in [#7475](https://github.com/nearai/ironclaw/pull/7475) |
| 🟠 High | [#7471](https://github.com/nearai/ironclaw/pull/7471) (fix PR) | Hosted runs die user-visibly with `lease_expired`; journal heartbeat shares a max-size-2 Postgres pool with data-plane traffic | Fix proposed: lease-expiry recovery + isolated heartbeat pool |
| 🟠 High | [#7474](https://github.com/nearai/ironclaw/pull/7474) (fix PR) | Agent asserts unverified state: automation status, per-caller extension auth, recalled memory (covers [#7246](https://github.com/nearai/ironclaw/issues/7246), [#7247](https://github.com/nearai/ironclaw/issues/7247), [#7294](https://github.com/nearai/ironclaw/issues/7294)) | Fix proposed, one commit per bug |
| 🟡 Medium | [#7470](https://github.com/nearai/ironclaw/pull/7470) (fix PR) | Thread index rows without ordered-projection metadata are invisible in `list_threads` | Fix proposed |
| 🟡 Medium | [#6257](https://github.com/nearai/ironclaw/issues/6257) | PDF `attachments.mime_type` error | Open since 2026-07-19 |
| 🟡 Medium | [#3762](https://github.com/nearai/ironclaw/issues/3762) | Editing `AGENTS.md` in WebUI doesn't update system prompt (customer P1) | Open since 2026-05-18; targeted v1.3.0 |
| ✅ Resolved | [#5882](https://github.com/nearai/ironclaw/issues/5882), [#6834](https://github.com/nearai/ironclaw/issues/6834) | Slack reconnect auth loop; Slack setup failure (near.foundation) | Both closed |

## 6. Feature Requests & Roadmap Signals

**Targeting v1.3.0:**
- [#7038](https://github.com/nearai/ironclaw/issues/7038) — Storybook + AI-first Design System (theming, assets, interactions, IA)
- [#7354](https://github.com/nearai/ironclaw/issues/7354) — Extensions vNext: Web Push, Rich Messaging, Telegram User Sessions, Signal (due 2026-08-14)
- [#7046](https://github.com/nearai/ironclaw/issues/7046) — Configure all tools, channels, and extensions from AI chat as an Admin
- [#3762](https://github.com/nearai/ironclaw/issues/3762) — AGENTS.md system-prompt live updates

**Newly filed:**
- [#7467](https://github.com/nearai/ironclaw/issues/7467) — Epic: make Reborn durable state profile-agnostic and migrate legacy profile roots (risk: high; implementation PR [#7456](https://github.com/nearai/ironclaw/pull/7456) already open)
- [#7465](https://github.com/nearai/ironclaw/issues/7465) — Epic: Company Brain FDE (no details yet)

**Large features in flight (open PRs):**
- [#7477](https://github.com/nearai/ironclaw/pull/7477) — Unified `ChannelAdapter` model: one adapter per channel for inbound, replies, notifications
- [#7464](https://github.com/nearai/ironclaw/pull/7464) — Telegram linked-device: device-link auth, session custody, standard-op tools
- [#7410](https://github.com/nearai/ironclaw/pull/7410) — Tool-search fair discovery and benchmark arms
- [#7442](https://github.com/nearai/ironclaw/pull/7442) — Install every companion file published for IronHub skills (with validation)
- [#7468](https://github.com/nearai/ironclaw/pull/7468) / [#7469](https://github.com/nearai/ironclaw/pull/7469) — Opt-in per-token logprobs sidecar capture, then reduced to envelope confidence aggregates

**Prediction:** The unified channel model (#7477), Telegram linked-device (#7464), and profile-agnostic storage (#7456) are the strongest candidates for the next 1.1.x or 1.2 minor release, given core-owner authorship and XL-size scope.

## 7. User Feedback Summary

- **Slack reliability is the #1 recurring user pain:** two separate auth/setup failures ([#5882](https://github.com/nearai/ironclaw/issues/5882), [#6834](https://github.com/nearai/ironclaw/issues/6834)) with no self-service recovery for the reconnect loop ("only recovery path is to remove and reinstall the extension").
- **PDF generation is broken for real users:** [#6257](https://github.com/nearai/ironclaw/issues/6257) reported via Slack product feedback; error `Invalid value (attachments.mime_type)` is likely a validation regression.
- **Identity configuration is not honoring edits:** [#3762](https://github.com/nearai/ironclaw/issues/3762) — saving `AGENTS.md` in the UI silently does nothing to the system prompt, which undermines the core agent-personality workflow.
- **Documented trust is eroding:** [#7317](https://github.com/nearai/ironclaw/issues/7317) and [#6945](https://github.com/nearai/ironclaw/issues/6945) show docs citing nonexistent tests and missing mandatory fields — the community is asking for pipeline-enforced doc truth.
- **Developer experience friction from CI:** [#7137](https://github.com/nearai/ironclaw/issues/7137) — multi-GB shard artifacts make triage "impractical" and consume quota.

## 8. Backlog Watch

- [#5101](https://github.com/nearai/ironclaw/pull/5101) — **ci: reuse cargo-component installer in live canary** (open since 2026-06-20): small, low-risk CI improvement that has sat unreviewed for ~7 weeks; needs maintainer attention.
- [#3762](https://github.com/nearai/ironclaw/issues/3762) — **AGENTS.md system prompt not updating** (open since 2026-05-18): customer P1, explicitly milestones v1.3.0, but no linked implementation PR yet.
- [#6257](https://github.com/nearai/ironclaw/issues/6257) — **PDF mime_type bug** (open since 2026-07-19): no assignee or fix PR visible.
- [#7137](https://github.com/nearai/ironclaw/issues/7137) — **Live-canary artifact bloat** (open since 2026-08-04): a bot-authored fix ([#7466](https://github.com/nearai/ironclaw/pull/7466)) exists; needs human review.
- New bugs [#7476](https://github.com/nearai/ironclaw/issues/7476) and [#7473](https://github.com/nearai/ironclaw/issues/7473) were filed by `theredspoon` with reproduction details and a companion fix PR [#7475](https://github.com/nearai/ironclaw/pull/7475) — timely maintainer review is warranted to avoid duplicate-delivery and lost telemetry regressions.

---

*Data source: GitHub issues/PRs updated 2026-08-10 → 2026-08-11 for `nearai/ironclaw`. Closed counts include items closed earlier but updated in the window.*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-08-11

## Today's Overview

LobsterAI saw a high-volume maintenance day on 2026-08-11: 34 PRs were updated in the last 24 hours (14 open, 20 merged/closed), while only 1 issue was updated and it was closed as stale. No new releases were published. Activity was concentrated in two areas: **cowork UI/UX polish** — file attachment cards, context menus, shortcuts, loading states — and **OpenClaw runtime reliability** — tool-loop guard fixes, IPC retry handling, and late chat error propagation. A large batch of Dependabot dependency bumps was also merged and replaced with newer open PRs, indicating an active dependency refresh cycle. Overall, project health looks solid, with the main open risk being a stale-closed gateway-restart bug that may need renewed triage.

## Releases

No new releases were published in the last 24 hours.

## Project Progress

Notable merged/closed PRs from the reporting window:

- **Cowork file attachments as clickable cards** — [#2471](https://github.com/netease-youdao/LobsterAI/pull/2471)  
  Non-image attachments no longer collapse into raw `输入文件: /path` text; they now render as file-type cards with icon, name, and type.

- **Cowork activity group collapse** — [#2472](https://github.com/netease-youdao/LobsterAI/pull/2472)  
  Adds grouping/collapse behavior for cowork activity items.

- **Cowork shortcut improvements** — [#2469](https://github.com/netease-youdao/LobsterAI/pull/2469)  
  Adds a collapse-agent-tasks shortcut and allows modifier shortcuts while typing.

- **Unified streaming loading indicators** — [#2468](https://github.com/netease-youdao/LobsterAI/pull/2468)  
  Refactors scattered streaming loading states into a single unified component.

- **OpenClaw tool-loop guard fix** — [#2454](https://github.com/netease-youdao/LobsterAI/pull/2454)  
  Prevents the tool-loop guard from killing legitimate polling operations.

- **Renderer init IPC stall retry** — [#2466](https://github.com/netease-youdao/LobsterAI/pull/2466)  
  Adds retry handling for renderer-init IPC stalls, likely improving startup reliability.

- **Surface provider runtime failures on late chat error** — [#2470](https://github.com/netease-youdao/LobsterAI/pull/2470)  
  Fixes a case where real provider/LLM runtime failures were swallowed as stale tool-failure notices.

- **Windows Python runtime pip shim repair** — [#2467](https://github.com/netease-youdao/LobsterAI/pull/2467)  
  Fixes outdated/broken pip shims surviving Windows runtime upgrades by converging shim templates at packaging time and app startup.

- **Dependency bumps closed** — Vite 8.0.13 ([#1766](https://github.com/netease-youdao/LobsterAI/pull/1766)), React DOM 19.2.6 ([#1764](https://github.com/netease-youdao/LobsterAI/pull/1764)), `@vitejs/plugin-react` 6.0.1 ([#1763](https://github.com/netease-youdao/LobsterAI/pull/1763)).

Also notable: a new open feature PR adds a right-click context menu for local file links with open-with, save-as, copy-path, copy-contents, copy-image, and reveal-in-folder actions ([#2473](https://github.com/netease-youdao/LobsterAI/pull/2473)).

## Community Hot Topics

The only issue updated in the last 24 hours was **#1243**, which carries 2 comments:

- **[#1243 [CLOSED] [stale] [BUG] qwen-portal-auth plugin config loop write causes gateway frequent restarts](https://github.com/netease-youdao/LobsterAI/issues/1243)**  
  Reports that the `qwen-portal-auth` plugin configuration keeps auto-changing, triggering OpenClaw gateway restarts every 5–20 minutes on Windows 10/11. The issue was closed as stale after being open since April, but there is no visible linked fix in the provided data.

The underlying user need is clear: **gateway stability on Windows when using non-Qwen models**. The stale closure may be premature if the bug still reproduces in current versions.

No PR comment/reaction counts were exposed in the data, so PR discussion activity could not be evaluated.

## Bugs & Stability

Ranked by severity:

1. **High — Gateway restart loop from `qwen-portal-auth` config loop**  
   [#1243](https://github.com/netease-youdao/LobsterAI/issues/1243)  
   Reported for LobsterAI 2026.4.1 on Windows; gateway restarts every 5–20 minutes, with “AI engine is starting gateways...” popups. Closed as stale, but no direct fix PR appears in the data. **Recommend re-triaging or reopening** if still reproducible.

2. **Medium/High — Provider lost for model IDs containing `/`**  
   [#2452](https://github.com/netease-youdao/LobsterAI/pull/2452)  
   Open fix: when a model ID like `deepseek-ai/DeepSeek-V4-Flash` is stored with a separate provider prefix, the provider is dropped, which can cause incorrect provider routing. Not yet merged.

3. **Medium — Tool-loop guard killing legitimate polling**  
   [#2454](https://github.com/netease-youdao/LobsterAI/pull/2454)  
   Fixed in PR.

4. **Medium — Late chat errors from providers/LLMs being swallowed**  
   [#2470](https://github.com/netease-youdao/LobsterAI/pull/2470)  
   Fixed by surfacing real runtime failures instead of treating them as stale tool failures.

5. **Medium — Renderer init IPC stall**  
   [#2466](https://github.com/netease-youdao/LobsterAI/pull/2466)  
   Fixed with retry logic.

6. **Low/Medium — Stale pip shims on Windows runtime upgrade**  
   [#2467](https://github.com/netease-youdao/LobsterAI/pull/2467)  
   Fixed by validating/converging shim templates rather than only checking file existence.

No new crash or regression issues were filed today beyond the stale-closed #1243.

## Feature Requests & Roadmap Signals

Current PR activity suggests a strong roadmap focus on **improving the cowork agent experience around local file handling and task management**:

- Right-click local file context menu with open/save/copy/reveal actions — [#2473](https://github.com/netease-youdao/LobsterAI/pull/2473)
- Submitted file attachments rendered as clickable cards — [#2471](https://github.com/netease-youdao/LobsterAI/pull/2471)
- Cowork activity group collapse — [#2472](https://github.com/netease-youdao/LobsterAI/pull/2472)
- Collapse-agent-tasks shortcut + modifier shortcuts while typing — [#2469](https://github.com/netease-youdao/LobsterAI/pull/2469)
- Unified streaming loading indicators — [#2468](https://github.com/netease-youdao/LobsterAI/pull/2468)

Dependency modernization is also clearly in flight: open bumps include Vite 8.2.1 ([#2465](https://github.com/netease-youdao/LobsterAI/pull/2465)), React DOM 19.2.8 ([#2464](https://github.com/netease-youdao/LobsterAI/pull/2464)), Mermaid 11.16.1 ([#2462](https://github.com/netease-youdao/LobsterAI/pull/2462)), and `eslint-plugin-react-hooks` 7.1.1 ([#2461](https://github.com/netease-youdao/LobsterAI/pull/2461)).

If #2473 merges cleanly, a near-term release is likely to include richer local-file collaboration in cowork, alongside React 19 and Vite 8 as the new baseline.

## User Feedback Summary

- The most direct user-reported pain point is **repeated gateway restarts caused by `qwen-portal-auth` config writes** ([#1243](https://github.com/netease-youdao/LobsterAI/issues/1243)). Users see an “AI engine is starting gateway...” popup every 5–20 minutes, which severely disrupts usage even when using non-Qwen models.
- Cowork changes indicate **users expect file attachments to retain rich previews**; the old behavior of collapsing non-image files into raw path text was treated as a UX bug and fixed in [#2471](https://github.com/netease-youdao/LobsterAI/pull/2471).
- The rapid fixes around OpenClaw error handling, IPC retries, and Windows runtime upgrades suggest the team is responsive to stability complaints, though no explicit satisfaction metrics were available in the data.

## Backlog Watch

Items that may need maintainer attention:

- **#1243 — Gateway restart bug, stale-closed after 4 months**  
  [Issue link](https://github.com/netease-youdao/LobsterAI/issues/1243)  
  Created April 1, 2026, stale-closed August 10, 2026, with 2 comments and no visible fix link. This is the highest-priority backlog item for investigation.

- **#2452 — Preserve provider for slashed model IDs**  
  [PR link](https://github.com/netease-youdao/LobsterAI/pull/2452)  
  Open since August 7, 2026, still not merged. Provider routing correctness for model IDs containing `/` is a real functional risk.

- **Open Dependabot PRs from August 10, 2026**  
  [#2459](https://github.com/netease-youdao/LobsterAI/pull/2459), [#2460](https://github.com/netease-youdao/LobsterAI/pull/2460), [#2461](https://github.com/netease-youdao/LobsterAI/pull/2461), [#2462](https://github.com/netease-youdao/LobsterAI/pull/2462), [#2463](https://github.com/netease-youdao/LobsterAI/pull/2463), [#2464](https://github.com/netease-youdao/LobsterAI/pull/2464), [#2465](https://github.com/netease-youdao/LobsterAI/pull/2465)  
  A wave of freshly opened dependency bumps awaits review; several replace just-closed lower-version bumps.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-08-11

## Today's Overview
Moltis saw moderate activity over the last 24 hours: 3 issues and 2 pull requests were updated, with no releases and no PRs merged or closed. All three updated issues are open bugs, two of which target the Apple Container backend and were filed by the same reporter. On the PR side, the session-management fix in #1182 saw fresh activity, while the long-running browser UI feature #531 was also touched. Overall, the project remains active on the bug-triage and feature-review fronts, but no changes shipped today.

## Releases
No new releases were published in the last 24 hours.

## Project Progress
No PRs were merged or closed today.

- **#1182** — [fix(sessions): allow deleting and archiving the main session](https://github.com/moltis-org/moltis/pull/1182) remains open and was updated on 2026-08-11. It addresses issue #1132 by removing the special `main` session guard, allowing it to be deleted/archived like any other session while preserving restrictions on active channel sessions.
- **#531** — [feat(browser): interactive browser viewing UI with CDP screencast](https://github.com/moltis-org/moltis/pull/531) was updated on 2026-08-10. This long-running feature PR adds live browser viewing, interaction via CDP screencast, per-agent browser profiles, and session history/action logs.

## Community Hot Topics
- **#1185** — [Bug: Apple Container 1.x sandbox starts but Moltis treats it as not running](https://github.com/moltis-org/moltis/issues/1185) is the most commented item with 3 comments. It highlights a core reliability gap: the sandbox backend is actually running, but Moltis’ state detection disagrees with reality. This likely points to a need for better process/liveness detection in the Apple Container backend.

## Bugs & Stability
All three updated issues are open bugs, ranked by likely severity:

1. **High** — [Issue #1185: Apple Container 1.x sandbox starts but Moltis treats it as not running](https://github.com/moltis-org/moltis/issues/1185)  
   Core backend state mismatch; users cannot rely on Moltis’ view of running sandboxes. No fix PR is currently linked.

2. **Medium** — [Issue #1188: resource limits not applied for apple-container backend](https://github.com/moltis-org/moltis/issues/1188)  
   Resource isolation settings are ignored for Apple Container, weakening sandbox guarantees. No fix PR is currently linked.

3. **Medium** — [Issue #1189: Sandbox build failing due to wrong gogcli github URL](https://github.com/moltis-org/moltis/issues/1189)  
   Build-time failure caused by an incorrect dependency URL. Likely a straightforward fix, but still open.

No stability regressions, crashes, or closed bug fixes were reported today.

## Feature Requests & Roadmap Signals
The main forward-looking signal is **PR #531** — the interactive browser viewing UI with CDP screencast. If merged, it would add a major user-facing feature to Settings > Browser, including live sessions, mouse/keyboard/scroll interaction, per-agent cookie isolation, and action logs. This has been open since 2026-03-31 and appears close to a polished feature, though it still needs maintainer merge attention.

**PR #1182** also signals a usability improvement: allowing deletion/archiving of the main session. Given it fixes a previously reported issue and is currently active, it is a strong candidate for the next release.

## User Feedback Summary
Recent user reports focus on concrete pain points with the Apple Container backend:

- Sandbox processes start but are not recognized as running by Moltis ([#1185](https://github.com/moltis-org/moltis/issues/1185)).
- Resource limits are silently not enforced ([#1188](https://github.com/moltis-org/moltis/issues/1188)).
- Sandbox builds fail immediately due to a bad dependency URL ([#1189](https://github.com/moltis-org/moltis/issues/1189)).

There is no positive feedback captured in today’s data; the tone is primarily bug-driven. The repeated Apple Container backend issues suggest user dissatisfaction with backend reliability and a need for maintainers to prioritize that area.

## Backlog Watch
- **PR #531** — [feat(browser): interactive browser viewing UI with CDP screencast](https://github.com/moltis-org/moltis/pull/531) has been open since 2026-03-31 and was updated recently. Given its size and scope, it likely needs a maintainer review pass or clear next-step feedback.
- **PR #1182** — [fix(sessions): allow deleting and archiving the main session](https://github.com/moltis-org/moltis/pull/1182) has been open since 2026-08-01; it is active but not yet merged, despite addressing a known issue (#1132).
- **Issue #1185** — with 3 comments and no linked fix, it may need a maintainer response or confirmation of intended behavior to avoid stalling.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-08-11

## 1. Today's Overview

CoPaw (tracked via `agentscope-ai/QwenPaw`) saw high activity over the last 24 hours: **39 issues updated** (33 open, 6 closed) and **50 PRs updated** (33 open, 17 closed/merged). No new release was published. The project appears to be in a **v2.1.0 preparation phase**, with release-notes PR [#6875](https://github.com/agentscope-ai/QwenPaw/pull/6875) and several feature PRs under review. Community reports are dominated by provider-compatibility failures, MCP tool problems, and console UI stability issues — several with open fix PRs, but a few high-impact crashes still lack a clear fix.

## 2. Releases

**None.** No new releases were tagged in the last 24 hours.

## 3. Project Progress

17 PRs were closed or merged during the period. Visible highlights from the sampled PR list:

- **Provider compatibility** — [#6809](https://github.com/agentscope-ai/QwenPaw/pull/6809): Sanitizes Chat Completions content for strict providers (e.g., StepFun). Closes [#6803](https://github.com/agentscope-ai/QwenPaw/issues/6803).
- **Console UX** — [#6878](https://github.com/agentscope-ai/QwenPaw/pull/6878): Adds hidden-folders toggle to the project directory picker.
- **Config robustness** — [#6615](https://github.com/agentscope-ai/QwenPaw/pull/6615): Handles corrupted agent config / invalid JSON in `load_agent_config`.
- **Memory / ReMe** — [#6398](https://github.com/agentscope-ai/QwenPaw/pull/6398): Adds reranker support for ReMe memory search (backend).

Other notable open PRs advancing features: unified marketplace ([#6880](https://github.com/agentscope-ai/QwenPaw/pull/6880)), IME event handling ([#6889](https://github.com/agentscope-ai/QwenPaw/pull/6889)), Auto-Dream resilience ([#6884](https://github.com/agentscope-ai/QwenPaw/pull/6884)), long multiline tool output rendering ([#6890](https://github.com/agentscope-ai/QwenPaw/pull/6890)), and assistant completion-time preservation ([#6845](https://github.com/agentscope-ai/QwenPaw/pull/6845)).

## 4. Community Hot Topics

The most active issues by comment count:

- [#6782](https://github.com/agentscope-ai/QwenPaw/issues/6782) — **9 comments**: Docker 2.0.1 plugin/app market always says “under maintenance”; blocks plugin use for container users.
- [#6803](https://github.com/agentscope-ai/QwenPaw/issues/6803) — **6 comments**: OpenAI-compatible requests rejected by strict providers due to Responses-API content types / raw streaming fields. Now closed, with fix PR [#6809](https://github.com/agentscope-ai/QwenPaw/pull/6809).
- [#6811](https://github.com/agentscope-ai/QwenPaw/issues/6811) — **5 comments**: OpenAI Responses continuation summary ignores `disable_thinking` and misreports a 60-second cancellation.
- [#6826](https://github.com/agentscope-ai/QwenPaw/issues/6826) — **5 comments**: Assistant message end time displays incorrectly in chat UI.
- [#4237](https://github.com/agentscope-ai/QwenPaw/issues/4237) — **4 comments**: Long-standing request for in-chat observability of running shell commands (see/kill/extend timeout).
- [#6405](https://github.com/agentscope-ai/QwenPaw/issues/6405) — **4 comments**: MCP tools report “Tool not found” after upgrade to 2.0.
- [#6814](https://github.com/agentscope-ai/QwenPaw/issues/6814) — **4 comments**: macOS SIGBUS crash in SQLite WAL while opening Scroll history.
- [#6820](https://github.com/agentscope-ai/QwenPaw/issues/6820) — **4 comments**: Frontend buffers entire model output / tool calls instead of streaming them progressively.

Underlying signals: users want **transparent streaming UI**, **reliable plugin/MCP provisioning**, **strict OpenAI-compatible provider support**, and **better memory/command observability**.

## 5. Bugs & Stability

| Severity | Issue | Summary | Fix status |
|---|---|---|---|
| High | [#6814](https://github.com/agentscope-ai/QwenPaw/issues/6814) | SIGBUS (`FS pagein 22`) in `sqlite3WalFindFrame` while opening Scroll `history.db` on macOS. | No fix PR identified. |
| High | [#6885](https://github.com/agentscope-ai/QwenPaw/issues/6885) | Console UI crashes on Chinese IME `compositionEnd` during agent run; message queue unusable. | [#6889](https://github.com/agentscope-ai/QwenPaw/pull/6889) open. |
| High | [#6780](https://github.com/agentscope-ai/QwenPaw/issues/6780) | 2.0.1 process freezes after idle; requires restart. | No fix PR identified. |
| High | [#6821](https://github.com/agentscope-ai/QwenPaw/issues/6821) | Thinking-mode models fail with 400: `reasoning_content` must be passed back. | No direct fix; related [#6809](https://github.com/agentscope-ai/QwenPaw/pull/6809) closed. |
| High | [#6867](https://github.com/agentscope-ai/QwenPaw/issues/6867) | Gemini compaction fails with 400: function calls missing `thought_signature`. | No fix PR identified. |
| Medium | [#6803](https://github.com/agentscope-ai/QwenPaw/issues/6803) | Strict providers reject Chat Completions requests with Responses-API fields. | Fixed by [#6809](https://github.com/agentscope-ai/QwenPaw/pull/6809). |
| Medium | [#6811](https://github.com/agentscope-ai/QwenPaw/issues/6811) | Continuation summary ignores `disable_thinking`; cancellation reported as malformed output. | No fix PR identified. |
| Medium | [#6813](https://github.com/agentscope-ai/QwenPaw/issues/6813) | `consume_model_response` raises `KeyError: '__aiter__'`; chat auto-title generation fails. | No fix PR identified. |
| Medium | [#6405](https://github.com/agentscope-ai/QwenPaw/issues/6405) | MCP tools not found after 2.0 upgrade / Docker install. | No fix PR identified. |
| Medium | [#6839](https://github.com/agentscope-ai/QwenPaw/issues/6839) | MCP calls coerce numeric-looking strings to numbers, breaking tools. | No fix PR identified. |
| Medium | [#6828](https://github.com/agentscope-ai/QwenPaw/issues/6828) | Idle console repaints at ~20% CPU due to infinite CSS animations. | No fix PR identified. |
| Medium | [#6810](https://github.com/agentscope-ai/QwenPaw/issues/6810) | Windows installer fails because browser-extension NM host locks files. | No fix PR identified. |
| Low | [#6871](https://github.com/agentscope-ai/QwenPaw/issues/6871) | Historical timestamps shifted +8h after re-render. | Closed; no PR shown. |
| Low | [#6853](https://github.com/agentscope-ai/QwenPaw/issues/6853) | `prompts.py` claims dream syncs to MEMORY.md, but implementation writes to digest/. | No fix PR identified. |

## 6. Feature Requests & Roadmap Signals

Notable user-requested features and roadmap signals:

- **Shell-command observability** — [#4237](https://github.com/agentscope-ai/QwenPaw/issues/4237): in-chat panel to see/kill/extend running commands.
- **Configurable MCP timeout** — [#6724](https://github.com/agentscope-ai/QwenPaw/issues/6724): per-client timeout and call-level guard for MCP tools.
- **Window size / position memory** — [#4634](https://github.com/agentscope-ai/QwenPaw/issues/4634): persist desktop window geometry across restarts.
- **Auto-refresh session title** — [#6881](https://github.com/agentscope-ai/QwenPaw/issues/6881): update chat title after auto-memory updates.
- **Collapsible background-task panel** — [#6876](https://github.com/agentscope-ai/QwenPaw/issues/6876): task cards currently occupy the entire chat window; issue closed.
- **Auto-Dream retry/tolerance** — [#6841](https://github.com/agentscope-ai/QwenPaw/issues/6841): single failed integration unit should not fail the whole task; fix PR [#6884](https://github.com/agentscope-ai/QwenPaw/pull/6884) open.
- **ReMe4 roadmap asked by community** — [#6840](https://github.com/agentscope-ai/QwenPaw/issues/6840): users are tracking timeline for Auto-Link, tri-modal search, and 4-category digest weights.

Likely v2.1.0 candidates based on active PRs: unified marketplace ([#6880](https://github.com/agentscope-ai/QwenPaw/pull/6880)), ReMe reranker backend + UI ([#6398](https://github.com/agentscope-ai/QwenPaw/pull/6398), [#6399](https://github.com/agentscope-ai/QwenPaw/pull/6399)), embedding hot updates and Daily Paper ([#6772](https://github.com/agentscope-ai/QwenPaw/pull/6772)), and creator plugin orchestration improvements ([#6870](https://github.com/agentscope-ai/QwenPaw/pull/6870)).

## 7. User Feedback Summary

Real pain points reported in the last 24 hours:

- **Chinese users are disproportionately affected** by Docker/plugin-market failures ([#6782](https://github.com/agentscope-ai/QwenPaw/issues/6782)), IME crashes ([#6885](https://github.com/agentscope-ai/QwenPaw/issues/6885)), MCP parameter coercion ([#6839](https://github.com/agentscope-ai/QwenPaw/issues/6839)), and Windows installer locks ([#6810](https://github.com/agentscope-ai/QwenPaw/issues/6810)).
- **UI transparency is a recurring concern**: users dislike waiting for full output before seeing tool calls / thinking ([#6820](https://github.com/agentscope-ai/QwenPaw/issues/6820)), incorrect completion timestamps ([#6826](https://github.com/agentscope-ai/QwenPaw/issues/6826)), and intrusive task cards ([#6876](https://github.com/agentscope-ai/QwenPaw/issues/6876)).
- **Antivirus interference** was reported: QwenPaw processes are killed while “WorkBuddy” is not ([#6847](https://github.com/agentscope-ai/QwenPaw/issues/6847)), suggesting packaging / process-behavior concerns.
- **Memory feature interest is high** but documentation mismatches create confusion ([#6853](https://github.com/agentscope-ai/QwenPaw/issues/6853), [#6840](https://github.com/agentscope-ai/QwenPaw/issues/6840)).

## 8. Backlog Watch

Issues/PRs that may need maintainer attention:

- [#4237](https://github.com/agentscope-ai/QwenPaw/issues/4237) — **Open since May 12**: in-chat shell-command observability; 4 comments but no visible implementation.
- [#4634](https://github.com/agentscope-ai/QwenPaw/issues/4634) — **Open since May 22**: desktop window size/position persistence.
- [#5992](https://github.com/agentscope-ai/QwenPaw/pull/5992) — **Open PR since Jul 12**: per-session model overrides; first-time contributor; still awaiting merge/review decision.
- [#6405](https://github.com/agentscope-ai/QwenPaw/issues/6405) — **Open since Jul 23**: MCP “Tool not found” after 2.0 upgrade; likely affects many MCP users.
- [#6398](https://github.com/agentscope-ai/QwenPaw/pull/6398), [#6399](https://github.com/agentscope-ai/QwenPaw/pull/6399) — **Under review since Jul 23**: ReMe reranker backend + UI; need final review/merge or explicit deferral.
- [#6724](https://github.com/agentscope-ai/QwenPaw/issues/6724) — **Open since Aug 5**: configurable MCP timeout; no implementation yet.
- [#6814](https://github.com/agentscope-ai/QwenPaw/issues/6814) — **High-impact macOS crash** in SQLite WAL; no fix PR identified as of digest date.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-08-11

## 1. Today's Overview
ZeroClaw is in a highly active but release-quiet phase: 50 issues and 50 PRs were updated in the last 24 hours, yet no new releases shipped. Activity is dominated by governance/process RFCs (#6808, #8692, #9496) and a cluster of P1 security bugs from a late-July audit that remain in-progress. The PR queue shows strain — most open PRs are either `needs-author-action` or `stale-candidate`, and no PRs merged today (2 were closed without confirmed merge). Overall health is stable-but-tight: contributor velocity is strong across channels, CLI, and security hardening, but maintainer bandwidth appears to be the gating constraint.

## 2. Releases
None in the last 24 hours. No new versions, breaking changes, or migration notes to report.

## 3. Project Progress
Two pull requests were closed (no confirmed merges in this window):
- [PR #9904 — chore(security): ignore RUSTSEC-2026-0247 (bitmaps unmaintained)](https://github.com/zeroclaw-labs/zeroclaw/pull/9904) — suppresses a cargo-deny failure for a dependency with no safe upgrade path.
- [PR #8301 — test(hardware): cover catalog tool name format](https://github.com/zeroclaw-labs/zeroclaw/pull/8301) — test-only regression coverage.

Other forward motion:
- [PR #9583 — ci(lint): gate rustdoc warnings via config and lint job](https://github.com/zeroclaw-labs/zeroclaw/pull/9583) — refreshed; implements task #9545 by folding `-D warnings` into `.cargo/config.toml` while preserving docs-theme ownership.
- [Issue #9771 — zeroclaw-gateway fails clippy -D warnings on default feature surface](https://github.com/zeroclaw-labs/zeroclaw/issues/9771) — accepted P2 CI-hygiene task with a one-line fix identified.
- Large feature PRs continue to be revised rather than merged: OpenAI-compatible chat completions (#8486), Telegram multi-message streaming (#8561), Matrix single-message drafts (#8443), cron wall-clock timeout (#9320).

## 4. Community Hot Topics
- [Issue #6808 — RFC: Work Lanes, Board Automation, and Label Cleanup](https://github.com/zeroclaw-labs/zeroclaw/issues/6808) — 23 comments. Rev. 24 of a governance RFC; ratification deferred but rollout in progress.
- [Issue #7100 — RFC: Per-model capability & context-window config](https://github.com/zeroclaw-labs/zeroclaw/issues/7100) — 13 comments. Accepted P1 RFC touching capability checks, context budgeting, and UI display.
- [Issue #8692 — Maintainer decision queue for RFCs and design issues](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) — 12 comments. The project's own tracker for a backlog of pending maintainer decisions.
- [Issue #9397 — RFC: Treat empty WhatsApp Web `allowed_groups` as permit-none](https://github.com/zeroclaw-labs/zeroclaw/issues/9397) — 12 comments. Accepted, in-progress P1 security RFC.
- [Issue #9496 — RFC: Streamline RFC scope, discussion, voting, and assignment](https://github.com/zeroclaw-labs/zeroclaw/issues/9496) — 7 comments. Direct evidence that contributors find the RFC process slower than the decisions it supports.

**Underlying need:** two of the top-threaded items are about making governance, label routing, and decision-making faster. The community is spending significant energy on process itself, which signals maintainer overload and an attempt to industrialize how work is routed.

## 5. Bugs & Stability
**S0 — data loss / security risk:**
- [Issue #9647 — Knowledge graph has no per-agent attribution; any agent reads/mutates another agent's knowledge](https://github.com/zeroclaw-labs/zeroclaw/issues/9647) — P1, in-progress.
- [Issue #9627 — git write verbs bypass the risk classifier via global options (`-C` / `--git-dir`)](https://github.com/zeroclaw-labs/zeroclaw/issues/9627) — P1, in-progress, follow-up.
- [Issue #9855 — Matrix channel fails homeserver discovery via `.well-known/matrix/client` delegation](https://github.com/zeroclaw-labs/zeroclaw/issues/9855) — reported S0; blocks Matrix channel connectivity. P2, accepted.

**S1 — workflow blocked:**
- [Issue #9425 — Running SOP jobs have no operator cancellation path](https://github.com/zeroclaw-labs/zeroclaw/issues/9425) — P1, in-progress.
- [Issue #9035 — Docker Compose gateway can remain loopback-bound behind a published port](https://github.com/zeroclaw-labs/zeroclaw/issues/9035) — P2, in-progress.
- [Issue #9231 — Docker runtime commands are nested inside a second Docker sandbox](https://github.com/zeroclaw-labs/zeroclaw/issues/9231) — P1, in-progress.
- [Issue #9779 — `sops_dir` documented default is not honored, so SOPs silently never load](https://github.com/zeroclaw-labs/zeroclaw/issues/9779) — P1, accepted.

**S2/S3:**
- [Issue #9768 — daemon reload is not on SIGUSR1; degraded-security warning tells operators to send a signal that kills the daemon](https://github.com/zeroclaw-labs/zeroclaw/issues/9768) — P1, accepted.
- [Issue #9796 — cron parent help prints invalid add-at/add-every/once examples](https://github.com/zeroclaw-labs/zeroclaw/issues/9796) — P2, accepted.
- [Issue #9844 — ZeroCode dashboard CPU metric does not identify the measured process](https://github.com/zeroclaw-labs/zeroclaw/issues/9844) — P3, accepted.

**Security-audit cluster** (all P1, in-progress, high risk, filed 2026-07-26):
- [Issue #9393 — Bluesky and Reddit have no sender authorization](https://github.com/zeroclaw-labs/zeroclaw/issues/9393)
- [Issue #9395 — plugin wasi:http egress has no destination policy](https://github.com/zeroclaw-labs/zeroclaw/issues/9395)
- [Issue #9392 — LINE group messages skip the allowlist and pairing handshake](https://github.com/zeroclaw-labs/zeroclaw/issues/9392)
- [Issue #9389 — unauthenticated POST /api/pair keys lockout on an attacker-supplied header](https://github.com/zeroclaw-labs/zeroclaw/issues/9389)
- [Issue #9391 — command audit logging defaults to enabled and writes nothing](https://github.com/zeroclaw-labs/zeroclaw/issues/9391)

**Fixes in flight:** [PR #8713 — file_download SSRF opt-in gate](https://github.com/zeroclaw-labs/zeroclaw/pull/8713), [PR #9110 — constant-time Lark token comparison](https://github.com/zeroclaw-labs/zeroclaw/pull/9110), [PR #9002 — keep agent turns alive after viewer disconnect](https://github.com/zeroclaw-labs/zeroclaw/pull/9002). Dependency risk: [Issue #9383 — npm audit CI failure with 6 high/critical findings](https://github.com/zeroclaw-labs/zeroclaw/issues/9383) remains open (P1, accepted).

## 6. Feature Requests & Roadmap Signals
**Accepted, likely in the next release:**
- [Issue #7100 — Per-model capability & context-window config](https://github.com/zeroclaw-labs/zeroclaw/issues/7100) — accepted P1 RFC.
- [Issue #9397 — WhatsApp `allowed_groups` permit-none default change](https://github.com/zeroclaw-labs/zeroclaw/issues/9397) — accepted, in-progress.
- [Issue #9545 — Gate rustdoc warnings in required PR CI](https://github.com/zeroclaw-labs/zeroclaw/issues/9545) — accepted; implementation PR #9583 is active.
- [Issue #9345 — Recalculate PR risk and size labels on every update](https://github.com/zeroclaw-labs/zeroclaw/issues/9345) — accepted.

**Strong signals in flight (large, not yet merged):**
- [PR #8486 — OpenAI Chat Completions gateway endpoint](https://github.com/zeroclaw-labs/zeroclaw/pull/8486) — major ecosystem-compatibility item.
- [PR #9554 — DAG plan-execute tool](https://github.com/zeroclaw-labs/zeroclaw/pull/9554) and [PR #9223 — JUnit XML eval report format](https://github.com/zeroclaw-labs/zeroclaw/pull/9223) — agentic/eval capability expansion.
- [Issue #9339 — Custom CA trust for remote MCP servers](https://github.com/zeroclaw-labs/zeroclaw/issues/9339) — P2, in-progress.

**Prediction:** the next release will be a 0.8.x point release focused on security hardening (WhatsApp allowlist default, per-agent knowledge attribution, egress policy) plus gateway interoperability (OpenAI-compatible endpoint), assuming maintainer capacity permits.

## 7. User Feedback Summary
**Pain points:**
- **Deployment confusion:** Docker Compose gateway unreachable behind a published port (#9035); documented `sops_dir` default silently disables the SOP engine (#9779).
- **Operational control:** no cancel path for running SOP jobs (#9425); the degraded-security warning recommends a signal that actually kills the daemon (#9768).
- **UX:** WebChat auto-scroll makes reading history during streaming impossible ([#9562](https://github.com/zeroclaw-labs/zeroclaw/issues/9562)); ZeroCode streamed user turns look like log/API payloads to small local models ([#8999](https://github.com/zeroclaw-labs/zeroclaw/issues/8999)).
- **Trust/security:** users are concerned about cross-agent knowledge leakage (#9647), missing sender authorization on Bluesky/Reddit/LINE (#9393, #9392), and SSRF risk in `file_download` (PR #8713).

**Satisfaction signals:** issue quality is high — reporters include exact line numbers, HEAD-verified quotes, and upstream references (e.g., #9562 cites related OpenClaw PRs). PRs receive structured review even if slowly. The main explicit dissatisfaction is process overhead, stated directly in #9496.

## 8. Backlog Watch
- [Issue #6808 — Work Lanes / Board Automation / Label Cleanup RFC](https://github.com/zeroclaw-labs/zeroclaw/issues/6808) — open since May 20, 23 comments, ratification still deferred. Needs a decision.
- [Issue #8692 — Maintainer decision queue](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) — the project itself flags a queue of RFC/design decisions awaiting maintainers.
- [Issue #5842 — Warn when Codex CLI `extra_args` weaken sandbox boundaries](https://github.com/zeroclaw-labs/zeroclaw/issues/5842) — open since April 17; the longest-running active feature request (P2, in-progress).
- **Stale-candidate PRs needing maintainer action:** [PR #8546 — CLI status i18n](https://github.com/zeroclaw-labs/zeroclaw/pull/8546), [PR #8576 — OpenAI STT env-var fallback](https://github.com/zeroclaw-labs/zeroclaw/pull/8576), [PR #8655 — ZeroCode Code-pane consolidation](https://github.com/zeroclaw-labs/zeroclaw/pull/8655).
- **P1 audit security items from 2026-07-26** still in-progress after ~2 weeks: #9389, #9391, #9392, #9393, #9395 — high-risk and no merged fix visible.
- [Issue #9383 — npm audit CI failure](https://github.com/zeroclaw-labs/zeroclaw/issues/9383) — P1, 6 high/critical vulnerabilities, open since 07-26 with no fix PR yet.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/boom7sss/agents-radar).*