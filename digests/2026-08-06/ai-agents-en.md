# OpenClaw Ecosystem Digest 2026-08-06

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-08-06 03:15 UTC

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

# OpenClaw Project Digest — 2026-08-06

## 1. Today's Overview

OpenClaw is highly active: **500 issues and 500 PRs were updated in the last 24 hours**, with **74 issues closed** and **65 PRs merged/closed**. No new releases were published in this window. The dominant themes are session-state integrity, channel message delivery (Telegram/Slack/Discord), provider/auth failure handling, and subagent orchestration reliability. A large share of high-severity items remain tagged with `clawsweeper:needs-maintainer-review` or `clawsweeper:needs-product-decision`, indicating that maintainer review capacity is currently a bottleneck. Overall health is mixed: meaningful fixes are landing, but there is a long tail of P0/P1 regressions involving silent data loss and resource leaks.

## 2. Releases

**No new releases in this window.** There are no changelog notes, breaking changes, or migration instructions to report.

## 3. Project Progress

### Closed/merged PRs in the visible sample
- [PR #119146 — fix(scripts): bound gh-read gh CLI child process](https://github.com/openclaw/openclaw/pull/119146)  
  Adds a configurable timeout to the `gh-read` GitHub CLI child process to prevent stalled `gh` invocations from hanging CI jobs.
- [PR #110601 — fix(scripts): bound ci-run-timings git and GitHub CLI operations](https://github.com/openclaw/openclaw/pull/110601)  
  Similar CI-hardening fix: timeouts for `git ls-remote` and GitHub CLI calls in CI timing scripts.
- [PR #113515 — fix(memory): keep QMD file hints after stale docid misses](https://github.com/openclaw/openclaw/pull/113515)  
  Closes [issue #113041](https://github.com/openclaw/openclaw/issues/113041), fixing QMD-backed `memory_search` returning empty results despite matching `qmd://` file hints.

### Issues closed in the same window
- [#118846 — Gateway main thread saturated from plugin-metadata snapshotting](https://github.com/openclaw/openclaw/issues/118846) — closed; high-impact crash-loop fixed.
- [#106779 — Local llama.cpp provider parser failure on 2026.7.1](https://github.com/openclaw/openclaw/issues/106779) — closed.
- [#92369 — Subagent orchestration in cron isolated sessions](https://github.com/openclaw/openclaw/issues/92369) — closed as already-fixed.
- [#91564 — Telegram forum topic becomes permanent inbound black hole](https://github.com/openclaw/openclaw/issues/91564) — closed.
- [#38076 — skill-creator `init_skill --resources` case-insensitivity](https://github.com/openclaw/openclaw/issues/38076) — closed.

### Notable open PRs advancing fixes
- [PR #119326 — honor account-scoped history limits](https://github.com/openclaw/openclaw/pull/119326)
- [PR #119221 — reject transcript turn when session id rotates mid-append](https://github.com/openclaw/openclaw/pull/119221)
- [PR #119443 — reject invalid session history cursor with 400](https://github.com/openclaw/openclaw/pull/119443)
- [PR #119441 — apply systemd dotenv changes on gateway restart](https://github.com/openclaw/openclaw/pull/119441)
- [PR #119516 — recover managed gateway after failed CLI update](https://github.com/openclaw/openclaw/pull/119516)
- [PR #119810 — add durable Activity run inspector to web UI](https://github.com/openclaw/openclaw/pull/119810)
- [PR #119815 — explain denied operator approvals in audit](https://github.com/openclaw/openclaw/pull/119815)

## 4. Community Hot Topics

Most engagement is on reliability, security, and data-loss issues:

- [#116201 — Realtime voice work can retain unbounded provider and consult state](https://github.com/openclaw/openclaw/issues/116201) — **58 comments**, P1. Users are concerned about unbounded state retention in realtime voice sessions under stalled/bursty provider behavior.
- [#7707 — Feature Request: Memory Trust Tagging by Source](https://github.com/openclaw/openclaw/issues/7707) — **27 comments**, P2. Repeated community interest in preventing memory-poisoning attacks from untrusted content.
- [#44925 — Subagent completion silently lost — no retry, no notification](https://github.com/openclaw/openclaw/issues/44925) — **25 comments**, P1, 👍2. Silently swallowed subagent results are a top pain point.
- [#118846 — Gateway main thread saturated from boot](https://github.com/openclaw/openclaw/issues/118846) — **19 comments**, P1, now closed. Generated significant attention because it caused total gateway unavailability.
- [#86519 — Agent repeats identical replies 2–10x on Telegram after 5.20](https://github.com/openclaw/openclaw/issues/86519) — **13 comments**, P1. High-frustration regression.
- [#51429 — Hardcoded `/Users/wangtao` workspace path merged into release](https://github.com/openclaw/openclaw/issues/51429) — **12 comments**, P2. Community concern about code-review quality.
- [#113306 — SQLite snapshot restore lacks end-to-end crash and identity guarantees](https://github.com/openclaw/openclaw/issues/113306) — **12 comments**, P1.
- [#6615 — Add denylist support for exec-approvals](https://github.com/openclaw/openclaw/issues/6615) — **11 comments**, 👍8. Strong desire for flexible “allow all except X” security policies.
- [#112423 — Large SQLite transcript cleanup blocks the gateway event loop](https://github.com/openclaw/openclaw/issues/112423) — **11 comments**, P1.
- [#106779 — Local llama.cpp provider issue](https://github.com/openclaw/openclaw/issues/106779) — **12 comments**, 👍3, now closed.

**Underlying needs:** users are primarily asking for safer session-state handling, transparent failure notifications, better provider/auth resilience, and stronger trust/security boundaries around memory and tool execution.

## 5. Bugs & Stability

Ranked by severity.

| Severity | Issue | Description | Status |
|---|---|---|---|
| P0 | [#119263 — Agent DB v14→v15 migration fails: `no such column: entry_valid`](https://github.com/openclaw/openclaw/issues/119263) | Gateway refuses to start after update; migration rolls back. | Open; no fix PR visible in top sample |
| P0 | [#70903 — Persistent file-based provider cooldown blocks users for hours after billing recovery](https://github.com/openclaw/openclaw/issues/70903) | 402 billing error writes `disabledUntil` that survives restarts. | Open; stale |
| P0 | [#119090 — Managed media cleanup fails open and permanently deletes session media](https://github.com/openclaw/openclaw/issues/119090) | Unreadable session store causes all media to be treated as unreferenced. | Closed |
| P1 | [#44925 — Subagent completion silently lost](https://github.com/openclaw/openclaw/issues/44925) | No retry, no notification, no auto-restart on timeout. | Open |
| P1 | [#86519 — Telegram duplicate replies 2–10x](https://github.com/openclaw/openclaw/issues/86519) | Regression after 5.20; reduced but not fixed in 5.22. | Open |
| P1 | [#112423 — SQLite transcript cleanup blocks gateway event loop](https://github.com/openclaw/openclaw/issues/112423) | Full materialization/compression on gateway thread. | Open |
| P1 | [#85251 — Codex app-server goes silent after `turn/started`](https://github.com/openclaw/openclaw/issues/85251) | Embedded run wedges until stuck-session recovery. | Open |
| P1 | [#109490 — Codex turn interrupted after `terminate:true` message tool result](https://github.com/openclaw/openclaw/issues/109490) | Promised follow-up work never executes. | Open |
| P1 | [#53540 — “Network connection lost” when tool-call params are large](https://github.com/openclaw/openclaw/issues/53540) | Param generation latency exceeds request timeout. | Open |
| P1 | [#96692 — Slack thread reply generated but not delivered](https://github.com/openclaw/openclaw/issues/96692) | Origin delivery tuple lost in long-running sessions. | Open |
| P1 | [#90098 — Large attachment handling overflows Control UI/gateway stack](https://github.com/openclaw/openclaw/issues/90098) | Full data URLs + regex parsing cause `RangeError`. | Open, linked PR exists |
| P1 | [#97616 — Unreaped hook/tool child processes accumulate](https://github.com/openclaw/openclaw/issues/97616) | Zombie accumulation degrades runtime. | Open |
| P1 | [#117609 — Transient LLM/socket errors not retried at embedded-assistant stage](https://github.com/openclaw/openclaw/issues/117609) | Long multi-step turns die whole on a single transient failure. | Open |
| P1 | [#85844 — Auto-update leaves stale hashed bundle imports](https://github.com/openclaw/openclaw/issues/85844) | Running gateway imports filenames removed by update. | Open |
| P2 | [#51429 — Hardcoded development path merged into release](https://github.com/openclaw/openclaw/issues/51429) | Fresh installs create `/Users/wangtao` workspace. | Open |
| P2 | [#67419 — Bootstrap files re-injected every turn, wasting 20–30% tokens](https://github.com/openclaw/openclaw/issues/67419) | Context bloat across multi-turn sessions. | Open |

**Fix PRs in flight:** [PR #119221](https://github.com/openclaw/openclaw/pull/119221) guards against session-id rotation mid-append; [PR #119443](https://github.com/openclaw/openclaw/pull/119443) rejects invalid session history cursors; [PR #119809](https://github.com/openclaw/openclaw/pull/119809) fixes Windows Zalo teardown `EBUSY`; [PR #119786](https://github.com/openclaw/openclaw/pull/119786) tightens Telegram Mini App `auth_date` parsing; [PR #119791](https://github.com/openclaw/openclaw/pull/119791) fixes duplicate/leaked OTEL lifecycle spans. No merged fix for the top P0/P1 issues was observed in this window.

## 6. Feature Requests & Roadmap Signals

Strong roadmap signals cluster around **security trust boundaries**, **channel control**, and **Web UI observability**:

- [#7707 — Memory Trust Tagging by Source](https://github.com/openclaw/openclaw/issues/7707) — likely candidate if maintainers prioritize memory-poisoning prevention.
- [#6615 — Denylist support for exec-approvals](https://github.com/openclaw/openclaw/issues/6615) — 👍8; complements existing allowlist.
- [#42840 — MathJax/LaTeX support in Control UI](https://github.com/openclaw/openclaw/issues/42840) — 👍10; important for research/scientific users.
- [#53654 — Discord `messageUpdate` / `messageDelete` support](https://github.com/openclaw/openclaw/issues/53654) — edit-to-reprocess and delete-to-cancel.
- [#16555 — TTL/Expiry for delivery queue messages](https://github.com/openclaw/openclaw/issues/16555) — prevents stale queued messages flooding channels after restart.
- [#13597 — Comprehensive AWS deployment guide](https://github.com/openclaw/openclaw/issues/13597) — EC2/ECS/Lambda documentation gap.
- [#45475 — Slack `ignoreSubtypes` config](https://github.com/openclaw/openclaw/issues/45475) — suppress `message_changed`/`message_deleted` wake-ups.
- [#53562 — Discord voice `sessionChannelId` for text transcript routing](https://github.com/openclaw/openclaw/issues/53562) — companion text channel for voice sessions.
- [#41965 — Force media delivery as document attachment](https://github.com/openclaw/openclaw/issues/41965) — avoids platform compression for quality-critical media.
- [PR #119810 — durable Activity run inspector](https://github.com/openclaw/openclaw/pull/119810) and [PR #119815 — explained denied operator approvals](https://github.com/openclaw/openclaw/pull/119815) — Web UI/audit observability is actively progressing.

**Prediction:** the next release will likely prioritize session-state reliability, provider/auth recovery improvements, and Web UI/audit features, with security-oriented requests like memory trust tagging and exec denylist entering design review.

## 7. User Feedback Summary

- **Regressions are the loudest signal.** Duplicate Telegram replies ([#86519](https://github.com/openclaw/openclaw/issues/86519)), duplicate QQBot messages ([#77306](https://github.com/openclaw/openclaw/issues/77306)), and subagent output silently lost ([#44925](https://github.com/openclaw/openclaw/issues/44925)) are causing visible user frustration.
- **Opaque provider failures are a recurring theme.** Users report silent model fallback ([#106786](https://github.com/openclaw/openclaw/issues/106786)), billing cooldowns that outlive the outage ([#70903](https://github.com/openclaw/openclaw/issues/70903), [#115642](https://github.com/openclaw/openclaw/issues/115642)), and local llama.cpp incompatibility ([#106779](https://github.com/openclaw/openclaw/issues/106779)).
- **Resource efficiency matters.** Complaints about context bloat ([#67419](https://github.com/openclaw/openclaw/issues/67419)), event-loop blocking ([#112423](https://github.com/openclaw/openclaw/issues/112423)), zombie processes ([#97616](https://github.com/openclaw/openclaw/issues/97616)), and unbounded voice state ([#116201](https://github.com/openclaw/openclaw/issues/116201)) indicate users are running long-lived, production-sized workloads.
- **Users want trust controls.** Memory poisoning ([#7707](https://github.com/openclaw/openclaw/issues/7707)), exec-approval denylists ([#6615](https://github.com/openclaw/openclaw/issues/6615)), and concern over a hardcoded contributor path ([#51429](https://github.com/openclaw/openclaw/issues/51429)) all reflect increased security awareness.
- **Positive sentiment:** closed fixes for gateway saturation ([#118846](https://github.com/openclaw/openclaw/issues/118846)), QMD memory search ([#113041](https://github.com/openclaw/openclaw/issues/113041)), and Telegram black-hole recovery ([#91564](https://github.com/openclaw/openclaw/issues/91564)) show that maintainers are addressing the most visible issues, but many high-severity items still await decisions.

## 8. Backlog Watch

Long-running or high-impact items still needing maintainer attention:

- [#6615 — Denylist support for exec-approvals](https://github.com/openclaw/openclaw/issues/6615) — created Feb 1, P2, 👍8, blocked on security/product review.
- [#7707 — Memory Trust Tagging by Source](https://github.com/openclaw/openclaw/issues/7707) — created Feb 3, P2, 27 comments, needs maintainer/product/security review.
- [#13597 — AWS deployment guide](https://github.com/openclaw/openclaw/issues/13597) — created Feb 10, P2.
- [#16555 — TTL/Expiry for delivery queue messages](https://github.com/openclaw/openclaw/issues/16555) — created Feb 14, P2.
- [#42840 — MathJax/LaTeX support in Control UI](https://github.com/openclaw/openclaw/issues/42840) — created Mar 11, P2, 👍10.
- [#67419 — Session context bloat from bootstrap file re-injection](https://github.com/openclaw/openclaw/issues/67419) — created Apr 15, P1.
- [#70903 — Persistent provider cooldown blocks users after billing recovery](https://github.com/openclaw/openclaw/issues/70903) — created Apr 24, P0, currently stale.
- [#91892 — Cron jobs stall during AI model calls](https://github.com/openclaw/openclaw/issues/91892) — created Jun 10, P2.
- [PR #82572 — Persist followup queues across gateway restarts](https://github.com/openclaw/openclaw/pull/82572) — opened May 16, large compatibility/session-state merge risk, waiting on author.
- [PR #104006 — ClickClack REST client timeouts](https://github.com/openclaw/openclaw/pull/104006) — opened Jul 11, waiting on author.
- [PR #104820 — SearXNG fail closed on unresolved base-url refs](https://github.com/openclaw/openclaw/pull/104820) — opened Jul 12, waiting on author.
- [PR #112896 — Snapshot: admit restored recovery points](https://github.com/openclaw/openclaw/pull/112896) — opened Jul 23, large multi-risk PR, waiting on author.
- [PR #118430 — Warn when systemd user lingering is disabled](https://github.com/openclaw/openclaw/pull/118430) — opened Aug 3, status “ready for maintainer look.”
- [PR #119777 — Report resolved SQLite session store path in health](https://github.com/openclaw/openclaw/pull/119777) — opened Aug 5, status “ready for maintainer look.”

Many of these items have been open for weeks with clear use cases and community support; they are strong candidates for prioritization once maintainer review capacity frees up.

---

## Cross-Ecosystem Comparison

# Cross-Project Ecosystem Comparison Report — 2026-08-06

## 1. Ecosystem Overview

The open-source personal AI assistant landscape is consolidating around a shared architecture: a gateway/runtime core, channel adapters (Telegram, Slack, Discord, WhatsApp, Matrix, WeCom), MCP-based tool integration, and increasingly sophisticated session/memory management. The dominant near-term concern across every active project is **reliability under production workloads** — silent failures, session-state corruption, duplicate message delivery, and provider auth/resilience gaps far outweigh feature requests in user feedback. Security trust boundaries (memory-poisoning prevention, exec-approval policies, SSRF gating) are emerging as the next major differentiator. A second wave of "claw" derivatives (NanoClaw, NullClaw, PicoClaw, etc.) is iterating on specialized niches, while the reference implementation (OpenClaw) and research-adjacent projects (Hermes, IronClaw, ZeroClaw) absorb the bulk of community engineering effort.

## 2. Activity Comparison

| Project | Issues (24h updated / closed) | PRs (24h updated / closed-merged) | Release status | Health score |
|---|---|---|---|---|
| **OpenClaw** | 500 / 74 | 500 / 65 | No new release | ⚠️ **7/10** — High throughput, but maintainer-review bottleneck and long P0/P1 tail |
| **Hermes Agent** | 50 / 5 | 50 / 4 | No new (v0.20.0, Aug 3) | ⚠️ **7/10** — Very active; post-release regressions (P1 desktop/gateway) |
| **IronClaw** | 44 / 10 | 50 / 17 | **v1.1.0-rc.1** (Aug 3) | ✅ **8/10** — Release-hardening phase; clear roadmap; strong closure rate |
| **CoPaw (QwenPaw)** | 22 / 8 | 50 / 22 | No new release | ✅ **8/10** — Fast triage of UX feedback; MCP/session reliability remain risk |
| **ZeroClaw** | 50 / 10 | 50 / 1 | No new release | ⚠️ **7/10** — Pre-0.9, RFC-heavy; strong engagement but decision/review backlog |
| **NanoBot** | 4 / 0 | 14 / 5 | No new release | ✅ **8/10** — Healthy; issues quickly followed by paired fix PRs |
| **NanoClaw** | 2 / 0 | 12 / 2 | No new release | ✅ **7/10** — Active contribution; install/attachment bugs aging |
| **LobsterAI** | 3 / 0 | ~10 / 10 | **2026.8.5** (Aug 5) | ✅ **7/10** — Shipping steadily; two new high-impact config bugs |
| **PicoClaw** | 0 / 0 | 4 / 1 | No new release | ⚠️ **6/10** — Moderate pace; long-open PRs (auth took 5 months) |
| **NullClaw** | 0 / 0 | 2 / 0 | No new release | ⚠️ **6/10** — Quiet; two stability PRs awaiting review |
| **TinyClaw** | — | — | — | ⚪ No activity |
| **Moltis** | — | — | — | ⚪ No activity |
| **ZeptoClaw** | — | — | — | ⚪ No activity |

## 3. OpenClaw's Position

**Advantages vs. peers:**
- **Distribution-scale community:** 500 issues/PRs updated in 24 hours is an order of magnitude above every peer; it functions as the ecosystem's reference implementation and de-facto RFC forum.
- **Integration breadth:** Telegram, Slack, Discord, QQ, WeChat/WeCom, Signal, and voice channels, plus plugin-metadata and skill-creator infrastructure — no direct competitor matches this surface area.
- **Institutionalized triage:** The `clawsweeper` maintainer-review/product-decision label system and the "derivative" project family (NanoClaw, NullClaw, PicoClaw) indicate OpenClaw is a platform others build on.

**Technical approach differences:**
- OpenClaw favors a monolithic gateway with adapter plugins and a SQLite-backed session store; derivatives like IronClaw (Rust, component-model/WASM, "Reborn" target architecture) and ZeroClaw (RFC-driven, runtime-owned sessions) are exploring modularity that OpenClaw's god-file monoliths make difficult.
- OpenClaw's memory layer (QMD file hints, SQLite snapshots) is more mature than most peers but also the source of multiple P0/P1 data-integrity complaints — a trade-off peers can learn from.

**Community size comparison:** OpenClaw's issue/PR volume exceeds Hermes, IronClaw, CoPaw, and ZeroClaw **combined**. However, its closure ratio (~15% of updated issues closed vs. ~23% for IronClaw) shows the bottleneck is review capacity, not community interest.

## 4. Shared Technical Focus Areas

Across projects, the following requirements recur — these are the ecosystem's highest-confidence priorities:

1. **Session-state integrity & ownership** *(OpenClaw, Hermes, NanoBot, ZeroClaw, CoPaw, NanoClaw)*
   - Guard against session-id rotation mid-append (OpenClaw), delegated-child context leaking via shared terminal snapshots (Hermes #71941), runtime-owned sessions (ZeroClaw RFC #9487), long-session `tool`-role ordering failures (CoPaw #6726), and transient session loss.

2. **Provider/auth resilience & bounded fallback** *(OpenClaw, Hermes, PicoClaw, CoPaw, ZeroClaw, NanoBot)*
   - Configurable model fallback chains (OpenClaw, PicoClaw #3200, CoPaw #5598), bounded fallback on quota errors (Hermes #61326), auth-type discovery vs. guessing (IronClaw #7251), and persistent billing cooldowns that outlive outages (OpenClaw #70903).

3. **MCP integration reliability** *(NanoBot, IronClaw, CoPaw, NanoClaw, ZeroClaw, OpenClaw)*
   - Error envelopes treated as success (NanoBot #5237), tools silently dying until container restart (CoPaw #6732), env-var forwarding to stdio MCP servers (NanoClaw #3188), endpoint/credential validation before use (IronClaw #7248/#7250), unbounded schema-cloning memory growth (ZeroClaw #8642).

4. **Channel delivery correctness** *(OpenClaw, NanoBot, NanoClaw, NullClaw, ZeroClaw, LobsterAI, Hermes)*
   - Duplicate replies on Telegram/QQ (OpenClaw #86519, #77306), silent channel death after idle (NullClaw #984), outbound media handling on WhatsApp (NanoBot #5149), cross-channel delivery leaks (IronClaw #7249), attachment reachability in containers (NanoClaw #2528), Slack/Discord ack and edit/delete semantics.

5. **Memory hygiene & context efficiency** *(OpenClaw, Hermes, NanoBot, ZeroClaw)*
   - Trust tagging by source (OpenClaw #7707), memory-file vs. runtime-artifact separation (NanoBot #5260), bootstrap context bloat (OpenClaw #67419), lifecycle management for MEMORY.md (Hermes #78307).

6. **Security trust boundaries** *(OpenClaw, ZeroClaw, IronClaw, NanoBot)*
   - Exec-approval denylists (OpenClaw #6615), shell allow/ask/deny policy tiers (ZeroClaw #7155), SSRF gating for download/image-gen tools (ZeroClaw #8713/#8826), credential-bearing URL redaction (NanoBot #5258), WebAuthn assertion validation (ZeroClaw #9781).

7. **WebUI observability & operator tooling** *(OpenClaw, IronClaw, CoPaw, NanoBot)*
   - Durable activity/run inspectors (OpenClaw PR #119810), Web Debug Inspector storage (IronClaw #7218), per-agent usage statistics (CoPaw #6392), temporary-chat isolation (NanoBot #5252/#5259), config-as-code for tenants (IronClaw #3036).

8. **Update/install reliability** *(OpenClaw, Hermes, NanoClaw, PicoClaw)*
   - Stale gateway/bundle imports after auto-update (OpenClaw #85844, Hermes #78574), Docker socket permission recovery (NanoClaw #2006), lockfile breakage (PicoClaw #3318), CLI-update recovery (OpenClaw PR #119516).

## 5. Differentiation Analysis

| Project | Core differentiator | Target user | Architecture stance |
|---|---|---|---|
| **OpenClaw** | Reference gateway; broadest channel + plugin ecosystem | Self-hosters; derivative builders | Monolithic Python gateway, SQLite, adapter plugins |
| **Hermes Agent** | Research-grade agent capabilities (AIDE² self-evaluation); polished desktop app | AI researchers; desktop power users | Gateway + desktop app; god-file sharding campaign in progress |
| **IronClaw** | Rust/WASM component-model ("Reborn"); IronHub runtime marketplace; self-selecting skills | Production operators; extension developers | Modular WASM components, skills as first-class installables |
| **ZeroClaw** | RFC-governed design; strong security posture (WebAuthn, SSRF, allow/ask/deny); OpenAI-compat profile | Security-conscious operators; OSS governance enthusiasts | Runtime-owned sessions; A2A outbound; ZeroCode GUI |
| **CoPaw (QwenPaw)** | Console/desktop UX with Chinese-language feedback loop; fallback UI; creator tools | Chinese-speaking desktop users; Qwen-model users | Console-first; aggressive UX iteration; Docker-based deployment |
| **NanoBot** | Lightweight WebUI-first; temporary chats; MCP Apps host; PTY terminal | Individual developers; MCP-heavy workflows | Minimal core; WebUI-centric; provider-native request switches |
| **NanoClaw** | Channel/container bridge specialization; skill catalog curation | OpenClaw-derivative self-hosters; LXC/Proxmox users | Containerized host + agent SDK separation |
| **NullClaw** | Long-running stability focus (stack sizing, polling supervision) | Quiet-relaibility seekers | Minimal issue tracker; targeted operational fixes |
| **LobsterAI** | Enterprise/NIM integration; activity/engagement features (daily check-in); OpenClaw embedding | Enterprise desktop users (Netease Youdao ecosystem) | Desktop app wrapping OpenClaw gateway |
| **PicoClaw** | Anthropic OAuth flows; model fallback chains; web frontend | Anthropic API users; Sipeed hardware ecosystem | Auth-first; web UI + models config |

## 6. Community Momentum & Maturity

**Tier 1 — Rapid iteration / high throughput:**
- **OpenClaw, Hermes, IronClaw, CoPaw, ZeroClaw.** All five have 40+ issues and 50 PRs updated daily. IronClaw is closest to shipping (v1.1.0-rc.1, 17 PRs merged/closed). CoPaw has the fastest triage loop (8 issues closed). Hermes is burning down a repo-wide sharding epic. ZeroClaw is highest in RFC sophistication but lowest in PR closure rate (1 merged on 50 updated) — a governance-bound project.

**Tier 2 — Moderate, healthy contributor cadence:**
- **NanoBot, NanoClaw, LobsterAI.** NanoBot shows the best "bug → fix PR" pairing ratio in the ecosystem. LobsterAI ships on a release cadence while absorbing OpenClaw integration complexity. NanoClaw has an engaged but small contributor set with several long-lived bugs.

**Tier 3 — Stabilizing / low activity:**
- **PicoClaw, NullClaw.** Low issue volume, but targeted PRs in flight. PicoClaw's 5-month auth review cycle suggests maintainer-bandwidth constraints. NullClaw has two ready stability fixes waiting on review.

**Tier 4 — Dormant:**
- **TinyClaw, Moltis, ZeptoClaw.** No activity in 24 hours; for decision-makers these should be treated as unmaintained until proven otherwise.

## 7. Trend Signals

1. **"Silent failure" is the ecosystem's #1 enemy.** The most emotionally charged issues — subagent completions lost without notification (OpenClaw #44925), duplicate Telegram replies (OpenClaw #86519), MCP error envelopes invisible to the LLM (NanoBot #5237), SOPs silently not loading (ZeroClaw #9779), agents hallucinating automation state (IronClaw #7246) — all share one trait: **the system doesn't say it failed**. Expect "legibility" and explicit failure notifications to become a purchase/selection criterion, not a nice-to-have.

2. **MCP is the de-facto integration standard — and its reliability gap is the ecosystem's shared pain.** Every active project has an MCP-related issue. The next competitive moat will be MCP *diagnostics*: timeout configuration, error-envelope interpretation, auth discovery, env forwarding, and memory-bounded schema handling. A project that delivers a robust "MCP health/observability layer" first will win production deployments.

3. **Trust controls are moving from feature requests to compliance requirements.** Memory-poisoning defense (OpenClaw #7707), exec-approval denylists (OpenClaw #6615), shell policy tiers (ZeroClaw #7155), SSRF gating, and credential-chain verification appear across five projects. For enterprise adoption, **deny-by-default** and auditable approval trails are becoming table stakes.

4. **Context/token efficiency is a user-visible cost line, not an internal concern.** Users now quantify waste: 4,425-character duplicate system-prompt injection (LobsterAI #2440), 20–30% token overhead from bootstrap re-injection (OpenClaw #67419), and sub-cent cost formatting (Hermes #79220). Cost-aware features — prompt caching via stable session IDs (ZeroClaw #9631), model routing (CoPaw #6436), fallback chains — will drive the next wave of UX.

5. **Channel diversity is fragmenting, and adapters are becoming a liability.** Telegram alone spans paid broadcasts, link previews, reactions, batch deletes (Hermes parity campaign), forum-topic bugs (OpenClaw), and duplicate replies. WhatsApp, Signal, Matrix, WeCom, Feishu, Discord voice, and NIM each have distinct, poorly-documented quirks. **Multi-channel support is a maintenance burden** — expect consolidation around a few "reference channels" and paid/enterprise adapters.

6. **WebUI/operator observability is the new differentiation surface.** Durable run inspectors (OpenClaw), Debug Inspector (IronClaw), per-agent token stats (CoPaw), temporary-chat isolation (NanoBot), and truthfulness about externally-managed services (NanoBot #5255) all point to a maturing audience: developers who want to *see* what their agent did, why, and at what cost.

7. **For AI agent developers specifically:** the floor is rising. Bare "agent loop + LLM call" is commoditized; the differentiating engineering investment is in **state-machine correctness** (session ownership, turn boundaries, delivery idempotency) and **failure semantics** (retries, fallbacks, audit trails). The projects that treat distributed-systems rigor as a first-class concern — IronClaw's durable delivery claims, OpenClaw's session-id rotation guards, ZeroClaw's runtime-owned sessions — are the ones positioned to outlast the current wave.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-08-06

## 1. Today's Overview

NanoBot had a highly active development window: **4 issues were updated (all still open)** and **14 PRs were updated (9 open, 5 closed/merged)** in the last 24 hours. No new release was published, so all of this progress remains unreleased. Activity is concentrated on WebUI improvements (temporary chats, composer mentions, terminal support), provider/MCP integration, and targeted stability fixes for WhatsApp, Matrix, goal loops, and memory hygiene. Overall project health looks solid: new bug reports are quickly followed by fix PRs, though some deeper MCP behavior gaps still lack a solution.

---

## 2. Releases

**None.** No new NanoBot releases were published in this period. There are no release notes, breaking changes, or migration notes to report.

---

## 3. Project Progress

The following PRs moved to **closed** state in the last 24 hours:

- **[[#5234] feat(agent): integrate mst-python as a metasearch provider](https://github.com/HKUDS/nanobot/pull/5234)** — Adds Meta-Search Tool (MST) as a web search provider, aggregating DuckDuckGo, Google, Brave, Bing and merging via Reciprocal Rank Fusion. Closed.
- **[[#5254] feat: add provider-native request switches](https://github.com/HKUDS/nanobot/pull/5254)** — Adds WebUI switches for OpenAI Codex Fast mode, OpenAI/DeepSeek web search, and xAI Grok X Search via raw provider fields. Closed.
- **[[#5203] fix(whatsapp): detect outbound media content before dispatch](https://github.com/HKUDS/nanobot/pull/5203)** — WhatsApp outbound media is now detected from file contents rather than filename extension; unsupported audio falls back to document sending. Closed.
- **[[#5249] refactor(webui): improve visual consistency](https://github.com/HKUDS/nanobot/pull/5249)** — Improves menus, popovers, dialogs, and layouts with consistent elevation, plus automatic timezone detection. Closed.
- **[[#5184] feat(webui): add Quick Chat and Temporary Chat](https://github.com/HKUDS/nanobot/pull/5184)** — Closed as a conflicted/superseded PR; Temporary Chat work continues in #5252 and #5259.

Notable open PRs under active review:

- **[[#5252] feat(webui): add temporary chat mode](https://github.com/HKUDS/nanobot/pull/5252)** — Adds connection-scoped, in-memory temporary chats.
- **[[#5259] fix(webui): enforce memory-only temporary sessions](https://github.com/HKUDS/nanobot/pull/5259)** — Ensures temporary session state stays in process memory.
- **[[#5261] feat(webui): drag sessions into composer mentions](https://github.com/HKUDS/nanobot/pull/5261)** — Enables dragging sidebar sessions into the composer as structured mentions.
- **[[#5253] feat(webui): add shared interactive project terminal](https://github.com/HKUDS/nanobot/pull/5253)** — Adds a project-scoped PTY terminal in the WebUI.
- **[[#5258] fix(web): keep credential-bearing URLs away from the remote Jina reader](https://github.com/HKUDS/nanobot/pull/5258)** — Security fix for URLs with userinfo or token/signature query parameters.
- **[[#5260] fix(memory): ignore runtime files inside tracked workspace dirs](https://github.com/HKUDS/nanobot/pull/5260)** — Prevents runtime artifacts from being treated as memory files.
- **[[#5257] fix(agent): bound sustained-goal continuation when the turn goes idle](https://github.com/HKUDS/nanobot/pull/5257)** — Fixes unbounded `/goal` continuation loops.
- **[[#5248] fix(matrix): send non-empty POST body on room join for Continuwuity compatibility](https://github.com/HKUDS/nanobot/pull/5248)** — Fixes Matrix room join failures on homeservers that reject empty POST bodies.
- **[[#5255] Draft: truthful API service status for externally-managed servers + `nanobot api status`](https://github.com/HKUDS/nanobot/pull/5255)** — Draft PR to report externally-managed `nanobot serve` instances accurately.

---

## 4. Community Hot Topics

- **[[#5149] [bug] no audio ?](https://github.com/HKUDS/nanobot/issues/5149)** — 4 comments; the most active issue. User reports NanoBot receives WhatsApp audio but cannot send audio files. Underlying need: robust outbound media handling on WhatsApp. A related fix, #5203, was closed, but the issue remains open.
- **[[#5237] [bug] MCP tool returns "data not found" envelope → agent ignores it](https://github.com/HKUDS/nanobot/issues/5237)** — 2 comments. A business error inside `CallToolResult.content` with `isError = False` is treated as success, causing the LLM to wait until timeout. This is an important reliability pain point for MCP-based tool use.
- **[[#5261] feat(webui): drag sessions into composer mentions](https://github.com/HKUDS/nanobot/pull/5261)** and **[[#5259] fix(webui): enforce memory-only temporary sessions](https://github.com/HKUDS/nanobot/pull/5259)** — Both updated on 2026-08-06 and represent active interest in improving WebUI session management and chat workflows.

---

## 5. Bugs & Stability

Ranked by likely user impact:

- **High — MCP error envelopes are invisible to the LLM ([#5237](https://github.com/HKUDS/nanobot/issues/5237)).** When an MCP server returns `{"code": 404, "msg": "data not exist", "data": null}` with `isError = False`, the agent treats it as success. There is **no fix PR yet**; this needs a design decision on interpreting `CallToolResult.content`.
- **High — `/goal` produces repeated reply loops ([#5256](https://github.com/HKUDS/nanobot/issues/5256)).** A single `/goal` message caused dozens of near-identical replies while waiting for user input. Fix PR **[[#5257]](https://github.com/HKUDS/nanobot/pull/5257)** is open and bounds goal continuation when the turn goes idle.
- **Medium — WhatsApp outbound audio is not sent ([#5149](https://github.com/HKUDS/nanobot/issues/5149)).** User reports receiving audio works but sending does not. The closed fix **[[#5203]](https://github.com/HKUDS/nanobot/pull/5203)** may address it; maintainer verification is still needed.
- **Medium — Matrix room join fails on Continuwuity ([#5248 PR](https://github.com/HKUDS/nanobot/pull/5248)).** Empty POST bodies are rejected with `M_BAD_JSON`. Fix PR is open, awaiting review.
- **Security — Credential-bearing URLs may be sent to Jina reader ([#5258 PR](https://github.com/HKUDS/nanobot/pull/5258)).** Open priority p1 fix that routes URLs with userinfo or token query parameters through the local readability path instead.

---

## 6. Feature Requests & Roadmap Signals

- **MCP Apps host support in WebUI ([#5251](https://github.com/HKUDS/nanobot/issues/5251))** — User requests support for the official `io.modelcontextprotocol/ui` extension, so MCP servers can attach interactive app UIs, not just text/image artifacts. This is a strong roadmap signal for MCP UI integration.
- **Temporary Chat mode ([#5252](https://github.com/HKUDS/nanobot/pull/5252), [#5259](https://github.com/HKUDS/nanobot/pull/5259))** — Likely to land soon; the feature is already being implemented with memory-only guarantees.
- **Shared interactive project terminal ([#5253](https://github.com/HKUDS/nanobot/pull/5253))** — A significant new WebUI capability backed by PTY/ConPTY and xterm.js.
- **Drag sessions into composer ([#5261](https://github.com/HKUDS/nanobot/pull/5261))** — UX polish for session mentions; likely to merge alongside WebUI session work.
- **Truthful API status + `nanobot api status` ([#5255](https://github.com/HKUDS/nanobot/pull/5255))** — Draft feature for externally-managed servers; needs maintainer direction.

**Prediction:** Temporary Chat and provider-native request switches are the most likely candidates for the next NanoBot release. MCP Apps support may follow once the underlying MCP client foundation stabilizes.

---

## 7. User Feedback Summary

Real user pain points from this window:

- **WhatsApp media handling is confusing:** receiving audio works, sending does not, and the expectation is “audio file is received” ([#5149](https://github.com/HKUDS/nanobot/issues/5149)).
- **MCP failures are silent and expensive:** when a tool call returns a business error envelope, the agent wastes time waiting for `tool_timeout` instead of retrying or reporting failure ([#5237](https://github.com/HKUDS/nanobot/issues/5237)).
- **The `/goal` feature can over-message badly:** a single user prompt generated dozens of replies until user intervention or model self-correction ([#5256](https://github.com/HKUDS/nanobot/issues/5256)).
- **Positive signal:** contributors are actively submitting paired fixes for the reported issues (WhatsApp media, goal loops, Matrix join, Jina credential leakage), indicating a responsive contributor community.

---

## 8. Backlog Watch

- **[[#5149] [bug] no audio ?](https://github.com/HKUDS/nanobot/issues/5149)** — Oldest open issue in this window (created 2026-07-28, updated 2026-08-05, 4 comments). Needs maintainer triage to confirm whether closed PR #5203 resolves it.
- **[[#5237] MCP tool "data not found" envelope issue](https://github.com/HKUDS/nanobot/issues/5237)** — No fix PR yet. This is a critical MCP reliability issue and may need a maintainer decision on error-envelope parsing.
- **[[#5248] Matrix join fix PR](https://github.com/HKUDS/nanobot/pull/5248)** — Open since 2026-08-04; the compatibility fix appears ready and needs review/merge.
- **[[#5255] Draft `nanobot api status` PR](https://github.com/HKUDS/nanobot/pull/5255)** — Draft state; needs maintainer feedback on whether the approach matches the project’s API-server model.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-08-06

## 1. Today's Overview

Hermes Agent saw a very high level of activity in the last 24 hours: 50 issues and 50 PRs were updated, with 5 issues closed and 4 PRs merged/closed. No new releases shipped. The work stream is dominated by two organized campaigns — the repo-wide "god-file sharding" epic ([#78647](https://github.com/NousResearch/hermes-agent/issues/78647)) and the Telegram Bot API 10.2 feature-parity push ([#78791](https://github.com/NousResearch/hermes-agent/issues/78791)) — alongside a fresh wave of v0.20.0 regression reports, including two P1 desktop/gateway issues. Overall health: the project is highly active and community-driven, but release quality after v0.20.0 is a notable concern, with several P1/P2 regressions and platform-adapter bugs still open.

## 2. Releases

No new releases in the last 24 hours. The most recent release context referenced in issues is **v0.20.0 ("The Herald Release", 2026-08-03)**, which is the source of several newly reported regressions (see Bugs & Stability).

## 3. Project Progress

**Closed PRs visible in the last 24h (4 total merged/closed; 2 shown in top-20):**
- [#53525 — fix(gateway): preserve rebound ws sessions during teardown](https://github.com/NousResearch/hermes-agent/pull/53525) — narrow gateway-side fix for the reconnect race behind part of #50005; re-checks transport ownership before detaching sessions.
- [#61326 — fix(agent): centralize bounded model fallback](https://github.com/NousResearch/hermes-agent/pull/61326) — invalid model IDs and quota/session-limit failures now enter the configured bounded fallback chain consistently across foreground and worker contexts.

**Closed issues:**
- [#74560 — Desktop double-render (interimBoundaryPending reset) — closed](https://github.com/NousResearch/hermes-agent/issues/74560) — duplicate-bubble bug resolved, though a related symptom remains tracked in #71857.
- [#79820 — DeepSeek server-side web_search via Responses API — closed as duplicate](https://github.com/NousResearch/hermes-agent/issues/79820).

**Active PRs advancing key areas:**
- [#79778 — refactor(web): extract console/spa-mount/ws-auth mixins from web_server.py (shard s5)](https://github.com/NousResearch/hermes-agent/pull/79778) — byte-fidelity god-file decomposition, zero behavior change.
- [#79857 — fix(gateway): suppress internal errors on customer-facing channels](https://github.com/NousResearch/hermes-agent/pull/79857) — adds `suppress_system_errors` platform config; failures still reach logs and `FAILURE` hooks.
- [#79861 — fix(memory): make Hindsight prefetch wait configurable](https://github.com/NousResearch/hermes-agent/pull/79861) — 3s default preserved, with regression coverage.
- [#79862 — fix(vision): per-model image input for kimi-coding](https://github.com/NousResearch/hermes-agent/pull/79862) — fixes blanket text-only assumption for kimi-k3.
- [#79851 — fix(weixin): surface iLink business errors on media sends](https://github.com/NousResearch/hermes-agent/pull/79851) — rate-limited media sends are no longer silently swallowed.
- [#79799 — fix(slack): ack free-response channel messages](https://github.com/NousResearch/hermes-agent/pull/79799) — fixes missing processing acknowledgements.
- [#79803 — feat(desktop): minimize-to-tray on close (Win/Linux, opt-in)](https://github.com/NousResearch/hermes-agent/pull/79803)
- [#77236 — feat(agent): AIDE² self-evaluation — 5 phases complete](https://github.com/NousResearch/hermes-agent/pull/77236)

## 4. Community Hot Topics

- **[#78647 — Epic: Shard all 20 god files (17 comments)](https://github.com/NousResearch/hermes-agent/issues/78647)** — The most-discussed issue. Standing repo policy (2026-08): all god files are sharded, never reverted. High engagement reflects the scale of the refactor and the "needs-decision" state; the god-file campaign has spawned companion issues like [#78631 (shard hermes_cli/main.py, 12,571 lines)](https://github.com/NousResearch/hermes-agent/issues/78631).
- **[#77780 — lifecycle_guard crashes on `ValueError: embedded null byte` (12 comments)](https://github.com/NousResearch/hermes-agent/issues/77780)** — P2 bug that breaks **all terminal commands** because the crash propagates out of `contains_gateway_lifecycle_command_or_referenced_script`. High comment count signals user frustration and active debugging.
- **[#54962 — Extract Gateway Platform Routing from gateway/run.py (11 comments)](https://github.com/NousResearch/hermes-agent/issues/54962)** — `gateway/run.py` is 858KB; users/contributors pressing for modularization before further feature work.
- **[#71941 — Delegated child context persists through shared terminal snapshots (5 comments)](https://github.com/NousResearch/hermes-agent/issues/71941)** — session-state pollution bug; labeled `sweeper:risk-session-state`.
- **[#78791 — Telegram Feature Parity & Alignment Campaign, Bot API 10.2 (5 comments)](https://github.com/NousResearch/hermes-agent/issues/78791)** — meta-issue bundling ~6+ Telegram parity feature requests ([#78689](https://github.com/NousResearch/hermes-agent/issues/78689) paid broadcasts, [#78690](https://github.com/NousResearch/hermes-agent/issues/78690) LinkPreviewOptions, [#78691](https://github.com/NousResearch/hermes-agent/issues/78691) setMessageReaction, [#78692](https://github.com/NousResearch/hermes-agent/issues/78692) forward/copy, [#78693](https://github.com/NousResearch/hermes-agent/issues/78693) deleteMessages batch, [#78788](https://github.com/NousResearch/hermes-agent/issues/78788) callback-query answers, [#78790](https://github.com/NousResearch/hermes-agent/issues/78790) default admin rights).

Underlying needs: maintainability of oversized files, terminal/gateway reliability, and platform-surface parity (Telegram, WeCom, Feishu, Slack, WhatsApp).

## 5. Bugs & Stability

Ranked by severity (P1 → P3):

- **[P1] #79407 — v0.20.0 regression: Desktop bottom operation panel completely missing (Windows)](https://github.com/NousResearch/hermes-agent/issues/79407)** — app becomes a viewer-only shell; no fix PR visible yet. Highest-severity issue today.
- **[P1] #78574 — Linux default gateway can stay stale after `hermes update`, causing ImportError](https://github.com/NousResearch/hermes-agent/issues/78574)** — update skips restarting the systemd user gateway; mixed old/new modules lead to crashes. 1 👍, flagged `area/install-update`. No fix PR visible.
- **[P2] #77780 — lifecycle_guard crashes on embedded null byte; breaks all terminal commands](https://github.com/NousResearch/hermes-agent/issues/77780)** — broad blast radius; 12 comments.
- **[P2] #71941 — Delegated child context persists through shared terminal snapshots](https://github.com/NousResearch/hermes-agent/issues/71941)** — session-state leak across agent/delegate invocations.
- **[P2] #79220 — Cost labels format at 2dp, so sub-cent turns render as $0.00](https://github.com/NousResearch/hermes-agent/issues/79220)** — display bug, not calculation; affects low-cost DeepSeek-style models.
- **[P2] #79562 — [weixin] /approve text fallback stops working after first approval (timing race)](https://github.com/NousResearch/hermes-agent/issues/79562)** — dangerous-command approvals silently ignored after the first per turn.
- **[P2] #79101 — API server stores virtual model alias as real model, breaking gateway default](https://github.com/NousResearch/hermes-agent/issues/79101)** — `"hermes-agent"` alias persisted into session model fields.
- **[P2] #79459 — Local TTS providers (Piper/KittenTTS) ignore configured/requested voice](https://github.com/NousResearch/hermes-agent/issues/79459)** — silently renders default voice.
- **[P2] #79853 — v0.20.0 macOS: high resource usage + cross-session message mixing under load](https://github.com/NousResearch/hermes-agent/issues/79853)** — renderer spikes to ~400% CPU; labeled `needs-repro`.
- **[P2] #79841 — [feishu] DM Allow button gated by group policy instead of admins list](https://github.com/NousResearch/hermes-agent/issues/79841)** — security-boundary concern; labeled duplicate.
- **[P3] #71866 — Desktop sidebar completely empty after update; state.db intact](https://github.com/NousResearch/hermes-agent/issues/71866)** — data intact, rendering/loading bug.
- **[P3] #79843 — Desktop local repo discovery leaks into remote backend's projects.db](https://github.com/NousResearch/hermes-agent/issues/79843)**

**Fix PRs in flight for stability areas:** [#79857](https://github.com/NousResearch/hermes-agent/pull/79857) (suppress internal errors on customer channels), [#79851](https://github.com/NousResearch/hermes-agent/pull/79851) (WeCom media errors), [#79799](https://github.com/NousResearch/hermes-agent/pull/79799) (Slack acks), [#74275](https://github.com/NousResearch/hermes-agent/pull/74275) (dashboard model-options lock-contention freeze), [#79861](https://github.com/NousResearch/hermes-agent/pull/79861) (memory prefetch).

## 6. Feature Requests & Roadmap Signals

**Telegram parity campaign (likely next release):** the meta-issue [#78791](https://github.com/NousResearch/hermes-agent/issues/78791) plus ~7 concrete API-gap issues (paid broadcasts, link previews, multi-reactions, forward/copy batch, deleteMessages batching, callback-query answers, admin rights) — several already have companion skill/methodology PRs.

**Desktop UX customization (v0.20.x / v0.21 signals):** composer/conversation width configurable ([#79856](https://github.com/NousResearch/hermes-agent/issues/79856)), independent conversation font-size ([#79858](https://github.com/NousResearch/hermes-agent/issues/79858)), minimize-to-tray (PR [#79803](https://github.com/NousResearch/hermes-agent/pull/79803)), pop-out preview pane ([#71985](https://github.com/NousResearch/hermes-agent/issues/71985)), and preview links routed through file tabs ([#41736](https://github.com/NousResearch/hermes-agent/issues/41736)).

**Memory lifecycle management:** [#78307](https://github.com/NousResearch/hermes-agent/issues/78307) — first-class maintenance UX for `MEMORY.md`/`USER.md` (health, dedup, conflict detection, cleanup). Combined with the Hindsight-prefetch configurability PR [#79861](https://github.com/NousResearch/hermes-agent/pull/79861), memory is an active roadmap area.

**Model/provider support:** DeepSeek server-side native `web_search` ([#79820](https://github.com/NousResearch/hermes-agent/issues/79820), closed as duplicate — indicating the request already exits elsewhere), Kimi vision input (PR [#79862](https://github.com/NousResearch/hermes-agent/pull/79862)).

**Prediction:** the Telegram parity batch and desktop width/font-size configuration are the strongest candidates for the next minor release; both have duplicate reports and low-risk, additive implementations.

## 7. User Feedback Summary

- **Release-quality pain:** several users report v0.20.0 regressions — Windows desktop bottom panel missing ([#79407](https://github.com/NousResearch/hermes-agent/issues/79407)), macOS high CPU and message mixing ([#79853](https://github.com/NousResearch/hermes-agent/issues/79853)), empty sidebar after update ([#71866](https://github.com/NousResearch/hermes-agent/issues/71866)), and stale gateways after `hermes update` on Linux ([#78574](https://github.com/NousResearch/hermes-agent/issues/78574)).
- **Terminal reliability is a hot button:** the lifecycle_guard crash ([#77780](https://github.com/NousResearch/hermes-agent/issues/77780)) blocks everyday terminal usage — one of the most-commented issues this cycle.
- **Usability nits that erode trust:** cost displays as `$0.00` ([#79220](https://github.com/NousResearch/hermes-agent/issues/79220)), local TTS voice settings silently ignored ([#79459](https://github.com/NousResearch/hermes-agent/issues/79459)).
- **Enterprise/platform users affected:** WeCom approval race ([#79562](https://github.com/NousResearch/hermes-agent/issues/79562)), Feishu DM approval policy ([#79841](https://github.com/NousResearch/hermes-agent/issues/79841)), Slack missing acks (PR [#79799](https://github.com/NousResearch/hermes-agent/pull/79799)), WhatsApp mention plumbing (PR [#73744](https://github.com/NousResearch/hermes-agent/pull/73744)) — indicates growing real-world adoption across chat backends, with corresponding integration bugs.
- **Satisfaction signals:** Desktop double-render closed ([#74560](https://github.com/NousResearch/hermes-agent/issues/74560)), and organized contributors are methodically filing Telegram API-gap issues with docs anchors — sign of an engaged, technically sophisticated community.

## 8. Backlog Watch

Items needing maintainer attention (oldest / most engaged / highest impact without visible resolution):

- **[#41736 — Route assistant-message Preview links through file tabs (opened 2026-06-08)](https://github.com/NousResearch/hermes-agent/issues/41736)** — 3 comments, no decision in 2 months.
- **[#54962 — Extract Gateway Platform Routing from gateway/run.py (opened 2026-06-29, 11 comments)](https://github.com/NousResearch/hermes-agent/issues/54962)** — 858KB god file; the sharding epic references it, but no dedicated PR is visible.
- **[PR #40124 — fix(tools): strip ANSI from session_search results (opened 2026-06-05)](https://github.com/NousResearch/hermes-agent/pull/40124)** — open ~2 months; addresses context-pollution risk, appears blocked on review.
- **[#71866 — Desktop sidebar empty after update (opened 2026-07-26)](https://github.com/NousResearch/hermes-agent/issues/71866)** — P3 but affects all history/pinned sessions; only 2 comments.
- **[#71941 — Delegated child context via shared terminal snapshots (opened 2026-07-26)](https://github.com/NousResearch/hermes-agent/issues/71941)** — P2 session-state risk; 5 comments, no linked fix PR.
- **[#77780 — lifecycle_guard embedded null byte crash (opened 2026-08-03)](https://github.com/NousResearch/hermes-agent/issues/77780)** — P2 with escalating engagement (12 comments), no fix PR visible; a prime candidate for next maintainer pickup.
- **[#78574 — Linux stale-gateway ImportError after update (opened 2026-08-04, P1)](https://github.com/NousResearch/hermes-agent/issues/78574)** — update/install-path bug with only 2 comments; needs owner assignment.

---

*Generated from Hermes Agent GitHub data (issues and PRs updated 2026-08-05 → 2026-08-06). Top-item lists are based on comment-count ranking; items beyond the top 30 (issues) / top 20 (PRs) are not individually listed.*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-08-06

**Data source:** GitHub (`sipeed/picoclaw`)  
**Snapshot window:** Last 24 hours

## 1. Today's Overview

PicoClaw showed low issue-tracker activity over the past 24 hours: no issues were updated, and no new releases were published. Four pull requests received updates, with one PR closed while three remain open. The closed PR represents a user-facing auth enhancement for Anthropic OAuth setup-token login, while the open PRs focus on web frontend build repair, model fallback configuration, and repository tooling consolidation. Overall, the project appears healthy but moderately paced, with ongoing contributor-driven work across auth, models, and frontend infrastructure. No active issue backlog was visible in this snapshot.

## 2. Releases

None.  
No new PicoClaw releases were published in the reporting window.

## 3. Project Progress

**Closed/merged PRs:**

- [#926 — feat(auth): add Anthropic OAuth setup-token login](https://github.com/sipeed/picoclaw/pull/926)  
  **Status:** Closed  
  Adds support for Anthropic OAuth setup tokens (`sk-ant-oat01-*`) as an alternative to API keys, including a new `--setup-token` flag, an interactive login menu, usage-endpoint integration for `auth status`, and streaming support for OAuth tokens.  
  **Significance:** This closes a long-running enhancement effort (created 2026-02-28) and materially improves Anthropic credential handling.

**Open PRs updated in the window:**

- [#3318 — fix(web): repair unparseable pnpm-lock.yaml](https://github.com/sipeed/picoclaw/pull/3318)  
  Open, targets a broken frontend lockfile.
- [#3200 — feat(models): add configurable default fallback chain](https://github.com/sipeed/picoclaw/pull/3200)  
  Open, adds model fallback chain configuration to the web UI and backend persistence.
- [#1951 — chore: move installation scripts from docs repo to here](https://github.com/sipeed/picoclaw/pull/1951)  
  Open, consolidates installation scripts into the main repository.

## 4. Community Hot Topics

No issues or PRs in this snapshot recorded comment counts or reaction totals, so discussion intensity cannot be measured directly. The most notable updated PRs by topic and user impact are:

- [Anthropic OAuth setup-token login (#926)](https://github.com/sipeed/picoclaw/pull/926) — Closed after a long review cycle; signals community demand for OAuth-based Anthropic auth instead of raw API keys.
- [Configurable default fallback chain (#3200)](https://github.com/sipeed/picoclaw/pull/3200) — Users appear to want more resilient model selection, letting the web UI define a default model plus ordered fallbacks.
- [Broken pnpm-lock.yaml (#3318)](https://github.com/sipeed/picoclaw/pull/3318) — A concrete developer pain point: duplicate mapping keys make the lockfile unparseable and block pnpm-based frontend workflows.

**Underlying needs:** Contributors are pushing for better authentication flexibility, more robust frontend builds, and finer model routing controls.

## 5. Bugs & Stability

Only one bug-related PR was active in the window:

- **[#3318 — fix(web): repair unparseable pnpm-lock.yaml](https://github.com/sipeed/picoclaw/pull/3318)**  
  **Severity:** Medium-high for web frontend / pnpm users  
  **Issue:** `web/frontend/pnpm-lock.yaml` contains `semver@7.8.5` as a duplicate mapping key, causing `ERR_PNPM_BROKEN_LOCKFILE` and preventing pnpm from reading the lockfile.  
  **Status:** Fix PR is open; no separate issue was filed in the 24-hour window.

No crashes, regressions, or runtime bugs were reported via the issue tracker in this snapshot.

## 6. Feature Requests & Roadmap Signals

Two feature-oriented PRs are strong roadmap signals:

- **Anthropic OAuth setup-token login (#926)** — Already closed, so this feature may land in an upcoming release. It expands auth beyond traditional API keys and includes usage tracking.
- **Configurable default fallback chain (#3200)** — Open and recently updated. If merged, users will be able to manage default and fallback models from the web UI, with backend API persistence.

A lesser user-facing signal is **#1951**, moving installation scripts into the main repo; if merged, it simplifies install docs and script maintenance.

**Next-version prediction:** Look for Anthropic OAuth setup-token support in the near term. A model fallback chain UI is also a plausible near-future addition if #3200 continues progressing.

## 7. User Feedback Summary

There were no issue comments, reaction counts, or new issue reports in this snapshot, so direct user sentiment is limited. However, contributor activity reveals implicit feedback:

- **Pain point:** Managing Anthropic credentials via setup tokens is desirable; API-key-only flows are seen as limiting.
- **Pain point:** A broken `pnpm-lock.yaml` blocks installation for web frontend developers; the quick submission of a fix PR indicates immediate impact.
- **Desired capability:** Users want model fallback chains to avoid service interruptions, not just a single default model.
- **Process preference:** Contributors want installation scripts to live with the codebase rather than in a separate docs repository.

No explicit satisfaction or dissatisfaction signals were available beyond the PR contents.

## 8. Backlog Watch

Two open PRs are worth maintainer attention due to age and importance:

- **[#1951 — chore: move installation scripts from docs repo to here](https://github.com/sipeed/picoclaw/pull/1951)**  
  Opened 2026-03-24, last updated 2026-08-05.  
  This has been open for more than four months and touches project tooling and documentation workflow.

- **[#3200 — feat(models): add configurable default fallback chain](https://github.com/sipeed/picoclaw/pull/3200)**  
  Opened 2026-07-01, last updated 2026-08-05.  
  Significant feature work waiting for review/merge; relevant to model reliability and web UI capabilities.

Also note: **#926** was open from 2026-02-28 until 2026-08-05 before closing, showing that auth enhancements can take several months to move through review. Maintainers may want to prioritize #3200 and #1951 to avoid similar stalls.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

## NanoClaw Project Digest — 2026-08-06

### 1. Today's Overview

As of 2026-08-06, NanoClaw is in an active development window: 12 pull requests were updated in the last 24 hours, with 10 open and 2 closed, while 2 open issues also received updates. No new releases were published. The main focus areas are channel attachment handling (Signal/WhatsApp), container/Docker setup reliability, MCP environment forwarding, and skill ecosystem cleanups/additions. Overall project health looks strong in contributor engagement, though several installation and attachment-related bugs remain open for weeks or months.

### 2. Releases

**None.** No new releases or tags were reported in the last 24 hours.

### 3. Project Progress

Two PRs moved to closed in this window:

- [PR #3175](https://github.com/nanocoai/nanoclaw/pull/3175) — `fix: route command-gate denials through the delivery adapter, not outbound.db`  
  Closed, with the same fix re-opened as [PR #3192](https://github.com/nanocoai/nanoclaw/pull/3192). This indicates a revised iteration rather than a landed merge.

- [PR #3187](https://github.com/nanocoai/nanoclaw/pull/3187) — `fix(agent-runner): disallow built-in SendMessage so agent-to-agent messaging works`  
  Closed in the last 24 hours, addressing agent-to-agent messaging behavior.

Other notable open progress includes:

- [PR #3192](https://github.com/nanocoai/nanoclaw/pull/3192) — new version of the command-gate denial fix, avoiding a second writer on container-owned `outbound.db`.
- [PR #3191](https://github.com/nanocoai/nanoclaw/pull/3191) — adds a timeout to WhatsApp `setup()` so a logged-out session cannot hang host startup.
- [PR #3188](https://github.com/nanocoai/nanoclaw/pull/3188) — forwards OneCLI gateway env variables to spawned MCP servers.
- [PR #3156](https://github.com/nanocoai/nanoclaw/pull/3156) — carries channel attachments to providers as structured parts, which may address Signal attachment issues.

### 4. Community Hot Topics

The only items with explicit comment activity are the two open issues, both with 1 comment each:

- [Issue #2528](https://github.com/nanocoai/nanoclaw/issues/2528) — **Signal channel: image/PDF attachments unreachable from agent container**  
  Users expect attachments sent over Signal to be accessible inside the agent container. The underlying need is robust channel-to-container file delivery.

- [Issue #2006](https://github.com/nanocoai/nanoclaw/issues/2006) — **Fresh install on Debian 12 LXC: docker socket permission denied — recovery path doesn't fire**  
  A fresh-install blocker for Proxmox/LXC users. The setup process adds the user to the `docker` group but later steps still fail due to socket permissions.

Among PRs, the most active by recent updates and scope are:

- [PR #3156](https://github.com/nanocoai/nanoclaw/pull/3156) — attachment handling across providers.
- [PR #3050](https://github.com/nanocoai/nanoclaw/pull/3050) — adding the Dial channel to the setup picker.
- [PR #3172](https://github.com/nanocoai/nanoclaw/pull/3172) — removing stale qodo and Google MCP skills.

These reflect community interest in broader channel support, better attachment fidelity, and keeping the skill catalog maintainable.

### 5. Bugs & Stability

Ranked by severity:

1. **[Issue #2006](https://github.com/nanocoai/nanoclaw/issues/2006)** — Docker socket permission denied on Debian 12 LXC during fresh install, and the recovery path does not fire.  
   High impact for new users on Proxmox/LXC. No fix PR is currently visible.

2. **[Issue #2528](https://github.com/nanocoai/nanoclaw/issues/2528)** — Signal image/PDF attachments are unreachable from the agent container.  
   Directly breaks a common document-sharing workflow. [PR #3156](https://github.com/nanocoai/nanoclaw/pull/3156) may address this generically.

3. **[PR #3192](https://github.com/nanocoai/nanoclaw/pull/3192)** — Command-gate denials were writing directly into a session's `outbound.db` from the host, violating the single-writer rule and creating a corruption risk. Fix PR is open; a duplicate was closed.

4. **[PR #3191](https://github.com/nanocoai/nanoclaw/pull/3191)** — WhatsApp `setup()` can hang host startup indefinitely when the linked session is logged out and no QR/pairing scan occurs. Fix PR is open.

5. **[PR #3188](https://github.com/nanocoai/nanoclaw/pull/3188)** — MCP servers spawned as stdio child processes do not receive proxy and CA-trust environment variables. Fix PR is open.

6. **[PR #2346](https://github.com/nanocoai/nanoclaw/pull/2346)** — Unknown slash commands are categorized as passthrough, causing the Agent SDK to produce output without `<message>` blocks and silently drop responses. Fix PR is open.

### 6. Feature Requests & Roadmap Signals

There are no new formal feature-request issues in this window, but PR activity signals clear roadmap directions:

- [PR #3190](https://github.com/nanocoai/nanoclaw/pull/3190) — **Tavily MCP tool skill**  
  Adds a web-search MCP utility skill; likely useful for agent research workflows.

- [PR #3189](https://github.com/nanocoai/nanoclaw/pull/3189) — **`add-why` skill**  
  A utility skill explaining what happened to a single message; aimed at debugging/transparency.

- [PR #3050](https://github.com/nanocoai/nanoclaw/pull/3050) — **Dial channel integration**  
  Adds Dial to the channel picker with wizard/skills support.

- [PR #3186](https://github.com/nanocoai/nanoclaw/pull/3186) — **Host seams for skill-owned capabilities**  
  A refactor enabling skills to own host capabilities more cleanly.

- [PR #3172](https://github.com/nanocoai/nanoclaw/pull/3172) — **Removal of stale qodo and Google MCP skills**  
  Signals a quality cleanup pass on the skill catalog.

Likely candidates for the next release: the command-gate DB fix ([#3192](https://github.com/nanocoai/nanoclaw/pull/3192)), WhatsApp timeout fix ([#3191](https://github.com/nanocoai/nanoclaw/pull/3191)), MCP env forwarding ([#3188](https://github.com/nanocoai/nanoclaw/pull/3188)), and one or more skill additions.

### 7. User Feedback Summary

Real user pain points in this window:

- **Installation friction on LXC/Proxmox**: Docker group membership is not effective until session restart, and the recovery path is missing ([#2006](https://github.com/nanocoai/nanoclaw/issues/2006)).
- **Signal attachments don't reach the agent**: users cannot ask the agent to read images/PDFs sent over Signal ([#2528](https://github.com/nanocoai/nanoclaw/issues/2528)).
- **WhatsApp logout can stall host startup**: unlucky state can make the host appear hung ([#3191](https://github.com/nanocoai/nanoclaw/pull/3191)).

Positive signals: contributors are actively submitting fixes and new skills, which suggests an engaged community. Dissatisfaction is concentrated around setup reliability and channel attachment edge cases.

### 8. Backlog Watch

These items are still open and may need maintainer attention:

- [Issue #2006](https://github.com/nanocoai/nanoclaw/issues/2006) — open since **2026-04-25**, no fix PR visible. Critical install blocker for Debian 12 LXC.
- [PR #2346](https://github.com/nanocoai/nanoclaw/pull/2346) — open since **2026-05-08**, fixes silently dropped unknown slash commands; still unmerged.
- [Issue #2528](https://github.com/nanocoai/nanoclaw/issues/2528) — open since **2026-05-18**, Signal attachment handling unresolved.
- [PR #3050](https://github.com/nanocoai/nanoclaw/pull/3050) — open since **2026-07-14**, Dial channel integration awaiting review/merge.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

## NullClaw Project Digest — 2026-08-06

### 1. Today's Overview
NullClaw saw no new releases and zero issue activity in the last 24 hours, indicating a relatively quiet period. Two open pull requests were updated, both authored by `raskevichai` and both targeting runtime/channel stability. No PRs were merged or closed today, so project progress is currently pending review of these fixes. The existing issue tracker is empty of open/active items, but both PRs reference underlying issues (#976, #972) that have not yet been closed. Overall, the project appears stable but with important reliability improvements waiting for merge.

### 2. Releases
No new releases were published in the last 24 hours. There are no release notes, migration notes, or breaking changes to report.

### 3. Project Progress
No PRs were merged or closed today. However, two open PRs represent active progress toward fixing long-running runtime and channel bugs:

- **[PR #985 — fix(runtime): give the agent turn path a 16 MiB stack](https://github.com/nullclaw/nullclaw/pull/985)**  
  Addresses a root cause where `SESSION_TURN_STACK_SIZE` aliased `HEAVY_RUNTIME_STACK_SIZE` (2 MiB), potentially causing stack overflow in the agent turn path. The PR increases the stack for threads running `SessionManager.processMessage*()` / `Agent.turn()`. This would close issue #976.

- **[PR #984 — fix(channels): let poll failures age out a dead polling thread](https://github.com/nullclaw/nullclaw/pull/984)**  
  Fixes Telegram and Matrix channels going silent after idle periods. The supervisor loop was structurally unable to detect dead polling threads. This would close issue #972.

Both fixes are focused on operational robustness rather than new features.

### 4. Community Hot Topics
There are no issues in the current data set, and neither open PR has recorded comments or reactions yet. The most active items are therefore the two open PRs, which highlight reliability expectations from users:

- [PR #985 — Agent turn path stack size fix](https://github.com/nullclaw/nullclaw/pull/985)
- [PR #984 — Dead polling thread aging out fix](https://github.com/nullclaw/nullclaw/pull/984)

The underlying need is clear: users expect `nullclaw agent` to keep channels responsive overnight and over long periods without requiring a full gateway restart. Both PRs target silent failure modes rather than visible crashes, suggesting community emphasis on production-grade reliability.

### 5. Bugs & Stability
Two bugs were addressed by open PRs, ranked by potential severity:

1. **Potential stack overflow in agent turn path (High)**  
   The constant `SESSION_TURN_STACK_SIZE` was incorrectly aliased to `HEAVY_RUNTIME_STACK_SIZE` (2 MiB), which may not be sufficient for the turn processing path. This could cause crashes or undefined behavior. Fix proposed in [PR #985](https://github.com/nullclaw/nullclaw/pull/985).

2. **Silent channel failure after idle periods (Medium/High)**  
   Telegram and Matrix channels stop polling after an idle night, while `nullclaw agent` continues to answer. Only a full gateway restart recovers the channel. The supervisor failed to detect the dead polling thread. Fix proposed in [PR #984](https://github.com/nullclaw/nullclaw/pull/984).

Both issues have associated fix PRs, but neither PR has been merged yet. No new crashes or regressions were reported directly in the last 24 hours.

### 6. Feature Requests & Roadmap Signals
No explicit user feature requests were recorded in the last 24 hours. The only signals come from the two bug-fix PRs, which prioritize stability, monitoring, and self-healing behavior. If merged, these changes may set a pattern for further supervisor improvements or configuration around stack sizes. Future versions may also expose tuning options for channel polling timeouts or stack allocation, if maintainers decide to generalize these fixes.

### 7. User Feedback Summary
The current data contains no direct issue comments or PR discussions. However, the referenced issues (#976, #972) and PR summaries reveal concrete user pain points:

- **Channels silently dying after idle periods:** Users observe that Telegram and Matrix stop responding, while the core agent still works. This is confusing and forces manual gateway restarts.
- **Concern about stack limits in the agent turn path:** Users or contributors identified that the turn path uses an undersized stack alias, which can lead to crashes during complex agent turns.

Overall, user dissatisfaction appears concentrated around long-running stability rather than feature gaps. The timely PRs indicate a responsive maintenance effort.

### 8. Backlog Watch
No long-unanswered issues are present in the current dataset — the issue list is effectively empty. The main backlog watch items are the two open PRs awaiting review/merge:

- [PR #985 — Agent turn path stack fix](https://github.com/nullclaw/nullclaw/pull/985), closing issue #976
- [PR #984 — Channel polling thread fix](https://github.com/nullclaw/nullclaw/pull/984), closing issue #972

These should be prioritized for maintainer review, as both address meaningful production stability defects and have been open since 2026-08-05.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-08-06

## 1. Today's Overview

IronClaw is in a high-velocity release-hardening phase: 44 issues and 50 PRs were updated in the last 24 hours, with 10 issues closed and 17 PRs closed/merged. The first v1.1.0 release candidate (`ironclaw-v1.1.0-rc.1`) was cut on 2026-08-03, and current activity is focused on stabilizing the Reborn architecture, WebUI polish, skill selection/execution, MCP integration robustness, and outbound delivery reliability. A batch of P1/P2 bug-bash findings from a Railway QA instance indicates active testing against real deployments. Overall project health looks strong, with steady architectural closure, CI repair work, and a clear v1.1.0 roadmap.

## 2. Releases

**ironclaw-v1.1.0-rc.1** (`1.1.0-rc.1`) — released 2026-08-03

- First release candidate since 1.0.0.
- Headline changes:
  - Register arbitrary hosted MCP servers.
  - Install from IronHub deep links.
  - Durable file attachments that cross channels.
  - Slack `/ironclaw` slash commands.
  - Broad pass on making failures more legible.

No explicit breaking changes or migration notes were included in the release excerpt. As an RC, behavior may still change before the stable 1.1.0 release.

## 3. Project Progress

Visible closed PRs in the last 24h include:

- [PR #7261](https://github.com/nearai/ironclaw/pull/7261) — `fix(ci): resolve release canary temp path`; fixes a zero-job failure in the tag-only release workflow.
- [PR #7196](https://github.com/nearai/ironclaw/pull/7196) — `chore(deps): bump the wasm group`; updates `wasmtime-wasi`, `wit-component`, and `wit-parser`.

Closed issues in the same window show cleanup and QA completion:

- [Issue #7244](https://github.com/nearai/ironclaw/issues/7244) — Fix main branch CI failures 20260804.
- [Issue #7204](https://github.com/nearai/ironclaw/issues/7204) — WebUI composer focus fix for "+ New" and thread open.
- [Issue #7234](https://github.com/nearai/ironclaw/issues/7234) — Mistakenly opened, closed as `IGNORE`.
- QA/epic closures: [Issue #6892](https://github.com/nearai/ironclaw/issues/6892), [Issue #6394](https://github.com/nearai/ironclaw/issues/6394), [Issue #4632](https://github.com/nearai/ironclaw/issues/4632), and [Issue #7053](https://github.com/nearai/ironclaw/issues/7053) were all closed.

Major open PRs advancing features:

- [PR #7263](https://github.com/nearai/ironclaw/pull/7263) — Program closure for the Reborn target-architecture restructure.
- [PR #7264](https://github.com/nearai/ironclaw/pull/7264) — Guidance layer: family-level `AGENTS.md` and crate READMEs.
- [PR #7157](https://github.com/nearai/ironclaw/pull/7157) — Explicit channel delivery tool with a two-lane model.
- [PR #6938](https://github.com/nearai/ironclaw/pull/6938) / [PR #6745](https://github.com/nearai/ironclaw/pull/6745) / [PR #7171](https://github.com/nearai/ironclaw/pull/7171) — Skill selection, installation, and runnable skill commands.
- [PR #7230](https://github.com/nearai/ironclaw/pull/7230) — Web Debug Inspector diagnostic session storage.
- [PR #7028](https://github.com/nearai/ironclaw/pull/7028) / [PR #7029](https://github.com/nearai/ironclaw/pull/7029) — Durable outbound delivery recovery.

## 4. Community Hot Topics

Issues with the most discussion:

- [Issue #3036](https://github.com/nearai/ironclaw/issues/3036) — **[EPIC] Configuration-as-Code for IronClaw Reborn** (7 comments, 1 👍). The most active issue; operators want declarative tenant blueprints instead of hand-editing `.env`, settings JSON, and workspace docs.
- [Issue #7194](https://github.com/nearai/ironclaw/issues/7194) — Admin-allowed shared channel as an outbound delivery target (3 comments). Need for governed, admin-approved delivery destinations.
- [Issue #6257](https://github.com/nearai/ironclaw/issues/6257) — `Invalid value (attachments.mime_type)` error on PDF files (2 comments). A real user-reported bug affecting document workflows.
- [Issue #7209](https://github.com/nearai/ironclaw/issues/7209) — CI regression gate cannot see `node:assert` style, failing correct frontend PRs (2 comments). Developer productivity pain point.
- [Issue #7204](https://github.com/nearai/ironclaw/issues/7204) — WebUI composer focus papercuts (2 comments, closed).
- [Issue #7208](https://github.com/nearai/ironclaw/issues/7208) — Dead `ThreadSidebar` component cleanup (2 comments).

Underlying need: the community/operator side is pushing toward configuration-as-code, admin governance for delivery channels, and smoother WebUI onboarding; meanwhile, CI and attachment bugs are slowing contributors and users.

## 5. Bugs & Stability

Ranked by severity:

1. **Agent hallucinates automation state — P1**  
   [Issue #7246](https://github.com/nearai/ironclaw/issues/7246) — Agent claims a BTC news digest automation is running and sending to Telegram when the Automations page shows "No automations yet." High trust impact; no direct fix PR visible.

2. **Agent falsely claims GitHub is connected — P1**  
   [Issue #7247](https://github.com/nearai/ironclaw/issues/7247) — Agent states GitHub is fully available without verifying auth state, then the next GitHub call fails. No fix PR visible.

3. **Slack DM result delivered to Telegram — P2**  
   [Issue #7249](https://github.com/nearai/ironclaw/issues/7249) — Execution summary from a Slack DM run lands in Telegram with Slack-specific metadata. Cross-channel delivery leak.

4. **Invalid custom MCP endpoint accepted, then run fails — P2**  
   [Issue #7248](https://github.com/nearai/ironclaw/issues/7248) — Agent accepts an unverified MCP endpoint, then repeatedly fails while discovering tools.

5. **MCP authentication guessing/confusion — P2**  
   [Issue #7251](https://github.com/nearai/ironclaw/issues/7251) and [Issue #7250](https://github.com/nearai/ironclaw/issues/7250) — Agent guesses auth type instead of discovering it, and DeepWiki MCP gives misleading auth guidance on network failures.

6. **Cannot access files attached to Slack feedback threads**  
   [Issue #7254](https://github.com/nearai/ironclaw/issues/7254) — Blocks product-feedback triage workflows.

7. **PDF attachment mime_type validation failure**  
   [Issue #6257](https://github.com/nearai/ironclaw/issues/6257) — User-reported, still open since 2026-07-19; no visible fix PR.

8. **CI regression gate rejects correct frontend PRs**  
   [Issue #7209](https://github.com/nearai/ironclaw/issues/7209) — Gate cannot detect `node:assert`-style assertions, so valid PRs fail.

9. **Review comments say APPROVE without real GitHub approval**  
   [Issue #7231](https://github.com/nearai/ironclaw/issues/7231) — PRs remain merge-blocked despite verbal approval.

There are adjacent fixes in flight for delivery reliability: [PR #7028](https://github.com/nearai/ironclaw/pull/7028) and [PR #7029](https://github.com/nearai/ironclaw/pull/7029) preserve terminal delivery status and restore durable delivery claims, with follow-up design discussion in [Issue #7265](https://github.com/nearai/ironclaw/issues/7265).

## 6. Feature Requests & Roadmap Signals

Strong v1.1.0 signals:

- **Extension reach is already in the RC**: MCP server registration, IronHub deep links, durable file attachments, and Slack slash commands.
- **Skills roadmap**: [Epic #6941](https://github.com/nearai/ironclaw/issues/6941) ("skills the model can self-create, find, choose, and use") is tagged `v1.1.0` and is being implemented via PRs [#6938](https://github.com/nearai/ironclaw/pull/6938), [#6745](https://github.com/nearai/ironclaw/pull/6745), and [#7171](https://github.com/nearai/ironclaw/pull/7171).
- **IronHub integration**: [Issue #6731](https://github.com/nearai/ironclaw/issues/6731) is explicitly tagged `v1.1.0` — runtime tool/skill marketplace with signing and provenance checks.
- **Web Debug Inspector**: [Issue #7218](https://github.com/nearai/ironclaw/issues/7218) — operator-only debug views for prompt construction, model usage, and tool execution; backend storage already in review via [PR #7230](https://github.com/nearai/ironclaw/pull/7230).

Likely later roadmap items:

- [Issue #3036](https://github.com/nearai/ironclaw/issues/3036) — Configuration-as-Code for tenant blueprints.
- [Issue #6578](https://github.com/nearai/ironclaw/issues/6578) — Admin-managed agents as UserId subjects.
- [Issue #7038](https://github.com/nearai/ironclaw/issues/7038) — Storybook + AI-first Design System.
- [Issue #7194](https://github.com/nearai/ironclaw/issues/7194) — Admin-allowed shared channels as outbound delivery targets.

## 7. User Feedback Summary

- **PDF workflows are blocked**: A Slack user reported `Invalid value (attachments.mime_type)` when sending/generating PDFs ([Issue #6257](https://github.com/nearai/ironclaw/issues/6257)).
- **Slack feedback triage is broken**: IronClaw could not download or read files attached to Slack feedback threads ([Issue #7254](https://github.com/nearai/ironclaw/issues/7254)).
- **Trust issues from QA bug-bash**: Users observed the agent confidently asserting incorrect state — automation status ([#7246](https://github.com/nearai/ironclaw/issues/7246)) and GitHub connection ([#7247](https://github.com/nearai/ironclaw/issues/7247)).
- **Cross-channel delivery is confusing**: A Slack DM execution result was delivered into a Telegram chat ([Issue #7249](https://github.com/nearai/ironclaw/issues/7249)).
- **MCP onboarding is rough**: Users report the agent guessing authentication types and accepting invalid endpoints instead of discovering/validating them ([#7251](https://github.com/nearai/ironclaw/issues/7251), [#7248](https://github.com/nearai/ironclaw/issues/7248)).
- **Developer workflow friction**: Correct frontend PRs fail CI due to the regression gate ([#7209](https://github.com/nearai/ironclaw/issues/7209)), and "APPROVE" review text does not always result in a real GitHub approval ([#7231](https://github.com/nearai/ironclaw/issues/7231)).

The v1.1.0 RC's stated "broad pass on making failures legible" suggests the team is already responding to opacity-related feedback.

## 8. Backlog Watch

- [Issue #3036](https://github.com/nearai/ironclaw/issues/3036) — **Configuration-as-Code epic**, open since 2026-04-28, 7 comments, still the most-commented open issue.
- [PR #5101](https://github.com/nearai/ironclaw/pull/5101) — **CI: reuse cargo-component installer in live canary**, open since 2026-06-20; oldest visible open PR.
- [Issue #6257](https://github.com/nearai/ironclaw/issues/6257) — **PDF mime_type bug**, open since 2026-07-19 with no visible fix PR.
- [Issue #6578](https://github.com/nearai/ironclaw/issues/6578) — **Admin-managed agents epic**, open since 2026-07-23.
- [Issue #6731](https://github.com/nearai/ironclaw/issues/6731) — **Integrate IronHub into IronClaw**, tagged `v1.1.0`, open since 2026-07-27.
- [Issue #6941](https://github.com/nearai/ironclaw/issues/6941) — **Self-selecting skills epic**, open since 2026-07-31; waiting on the stacked PRs #6745 / #6938 / #7171 to land.
- [Issue #7194](https://github.com/nearai/ironclaw/issues/7194) — **Shared channel as outbound delivery target**, open since 2026-08-04, with 3 comments and no implementation PR yet.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-08-06

## 1. Today's Overview

LobsterAI has been highly active in the last 24 hours: the project shipped release **2026.8.5**, closed/merged **10 PRs**, and saw **3 issues** updated, all still open. The PR stream was dominated by bug fixes, UI/asset updates, and internal stability hardening — notably shutdown hang fixes and OpenClaw gateway lock protection — while the release added a native daily check-in experience and enterprise account-scoped auth. At the same time, two newly filed issues point to real integration quality concerns around duplicate system-prompt injection and silent skill-switch failures, so the project is moving fast but still carrying some configuration/OpenClaw friction. Overall project health is good, with a stale NIM bug from April still needing maintainer attention.

## 2. Releases

### [LobsterAI 2026.8.5](https://github.com/netease-youdao/LobsterAI/releases/tag/2026.8.5)

Published on **2026-08-05**. Release notes highlight:

- **feat(activity): add native daily check-in experience** — [PR #2408](https://github.com/netease-youdao/LobsterAI/pull/2408)
- **feat(enterprise): isolate account-scoped auth and service flows** — [PR #2409](https://github.com/netease-youdao/LobsterAI/pull/2409)
- `style` changes

No breaking changes or migration notes were included in the release notes.

## 3. Project Progress

In the last 24 hours, **10 PRs were closed/merged** and **1 stale PR remains open**.

### Features & user-facing improvements
- **[#2435](https://github.com/netease-youdao/LobsterAI/pull/2435) — feat(cowork): title-bar conversation search**  
  Adds a conversation search button beside the artifact panel toggle, reuses the sidebar search workflow, and refines responsive styling and query-aware navigation.

- **[#2438](https://github.com/netease-youdao/LobsterAI/pull/2438) — fix(activity): update startup credit poster**  
  Asset-only replacement with the latest approved artwork.

- **[#2439](https://github.com/netease-youdao/LobsterAI/pull/2439) — fix(activity): include close icon in startup credit poster**  
  Replaces the poster with artwork containing the close icon while preserving the transparent close-button hit area.

### Stability & infrastructure fixes
- **[#2437](https://github.com/netease-youdao/LobsterAI/pull/2437) — fix(main): harden window lifecycle and shutdown against hangs**  
  Binds OpenAI-compat proxy and HTML preview server shutdown to a drain timer + hard deadline, preventing lingering keep-alive sockets from stalling app quit.

- **[#2436](https://github.com/netease-youdao/LobsterAI/pull/2436) — fix(openclaw): prevent gateway lock poisoning from self-restart races**  
  Fixes two races that could leave the OpenClaw single-instance lock file poisoned, causing failed gateway respawns for up to 30 seconds.

### Internal fixes & dependency maintenance
- **[#2434](https://github.com/netease-youdao/LobsterAI/pull/2434) / [#2431](https://github.com/netease-youdao/LobsterAI/pull/2431) — `Liuzhq/fix rlog 202683`**  
  Two closed PRs touching renderer/docs/main/cowork areas, likely internal release-log fixes; no detailed summary was provided.

- **[#1279](https://github.com/netease-youdao/LobsterAI/pull/1279) / [#1280](https://github.com/netease-youdao/LobsterAI/pull/1280) / [#1281](https://github.com/netease-youdao/LobsterAI/pull/1281)** — Dependency bumps for `cross-env`, `react-dom`, and `vite`; these stale dependabot PRs were closed on 2026-08-05.

- **Still open:** [#1201](https://github.com/netease-youdao/LobsterAI/pull/1201) — stale fix PR for the NIM `teamTypeNum` bug, linked to issue #1200.

## 4. Community Hot Topics

Community discussion volume is low, but one issue stands out:

- **[Issue #1200](https://github.com/netease-youdao/LobsterAI/issues/1200) — NIM super-group `teamTypeNum` hardcoded error**  
  Created 2026-04-01, updated 2026-08-05, **1 comment**, 0 reactions. This is the only issue with any comment in the current batch.  
  **Underlying need:** Users expect reliable group-name resolution when @-mentioning bots in NIM supergroups; the wrong enum value causes fallback to raw IDs and breaks a core chat integration scenario.

The other two updated issues ([#2440](https://github.com/netease-youdao/LobsterAI/issues/2440), [#2441](https://github.com/netease-youdao/LobsterAI/issues/2441)) are brand new and have no comments yet. They appear to be filed by a power user investigating OpenClaw runtime behavior, which suggests growing real-world deployment of the OpenClaw integration.

## 5. Bugs & Stability

Ranked by severity:

1. **High — [#2440](https://github.com/netease-youdao/LobsterAI/issues/2440): Desktop system-prompt duplicate injection**  
   Every new desktop session injects a `[LobsterAI system instructions]` block where ~78% duplicates the `workspace-main/AGENTS.md` app-managed section. This wastes ~4,425 characters of model context in every new conversation and can degrade instruction-following.  
   **Status:** No fix PR yet.

2. **High — [#2441](https://github.com/netease-youdao/LobsterAI/issues/2441): Skill switches silently fail and `openclaw.json` is overwritten**  
   Skills are enabled/disabled using directory names, but OpenClaw matches by frontmatter `name`; mismatches make user switches ineffective. Additionally, `openclaw.json` is overwritten wholesale, leaving users with no persistent way to trim system prompts.  
   **Status:** No fix PR yet.

3. **Medium — [#1200](https://github.com/netease-youdao/LobsterAI/issues/1200): NIM `teamTypeNum` hardcoding bug**  
   `nimGateway.ts` uses incorrect type values when querying team names, breaking super-group/p2p name resolution for @-mentions. A one-line fix PR ([#1201](https://github.com/netease-youdao/LobsterAI/pull/1201)) exists but remains open and stale.

Separately, two stability fixes were closed today: **[#2437](https://github.com/netease-youdao/LobsterAI/pull/2437)** (shutdown hangs) and **[#2436](https://github.com/netease-youdao/LobsterAI/pull/2436)** (OpenClaw gateway lock poisoning). These were proactive hardening fixes rather than responses to filed user bug reports.

## 6. Feature Requests & Roadmap Signals

The current release and PR stream already show roadmap direction:

- **Native daily check-in** shipped in 2026.8.5, signaling continued investment in activity and engagement surfaces.
- **Title-bar conversation search** was closed today, so it is likely to appear in the next release.

Strong future signals from new issues:

- **[#2441](https://github.com/netease-youdao/LobsterAI/issues/2441)** is both a bug and a design-gap report: users want a **persistent, user-facing way to reduce/trim system prompts**, and `openclaw.json` should not be clobbered during sync. This could become a roadmap item for configuration persistence and OpenClaw alignment.
- **[#2440](https://github.com/netease-youdao/LobsterAI/issues/2440)** implies a clear follow-up fix: de-duplicate injected system instructions vs. `AGENTS.md` content.

Likely next-version candidates: a prompt-dedup fix, a skill-switch matching fix, and possibly a more durable config-sync model that preserves user edits.

## 7. User Feedback Summary

Real user pain points visible in today's data:

- **Prompt bloat and duplication**: A user reported that desktop sessions read the same instruction set twice, increasing cost/latency and diluting instruction clarity.
- **Silent configuration failure**: Skill toggles can appear to work while doing nothing due to directory-name vs frontmatter-name mismatch; this is especially damaging because there is no error or visible hint.
- **Lack of persistence control**: Users cannot reliably keep a slim system prompt across new conversations because `openclaw.json` is overwritten.
- **NIM integration correctness**: In @-mention scenarios with supergroups, the displayed group name can be raw/garbled due to hardcoded enum values.

No positive user satisfaction signals were captured in this batch, but the shipped daily check-in feature and poster updates are user-facing engagement improvements.

## 8. Backlog Watch

- **[Issue #1200](https://github.com/netease-youdao/LobsterAI/issues/1200) + [PR #1201](https://github.com/netease-youdao/LobsterAI/pull/1201)** — Open since 2026-04-01; the fix PR is marked stale after several months. This is a known bug with a one-line fix and deserves either merge or closure with a clear reason.
- **[PR #1279](https://github.com/netease-youdao/LobsterAI/pull/1279), [#1280](https://github.com/netease-youdao/LobsterAI/pull/1280), [#1281](https://github.com/netease-youdao/LobsterAI/pull/1281)** — Stale dependency-update PRs from April were closed today. Maintainers should verify whether these were actually merged; if not, the major-version dependency bumps (`react-dom` 18→19, `vite` 5→8, `cross-env` 7→10) may still need to be re-evaluated.
- **[#2440](https://github.com/netease-youdao/LobsterAI/issues/2440) / [#2441](https://github.com/netease-youdao/LobsterAI/issues/2441)** — Filed only today, but high-impact enough that they should be triaged quickly to avoid turning into long-lived backlog items.

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

# CoPaw Project Digest — 2026-08-06

## 1. Today's Overview

CoPaw (tracked under `agentscope-ai/QwenPaw`) has seen a high-activity day: **22 issues** and **50 PRs** were updated in the last 24 hours. Of those issues, **14 are open/active** and **8 are closed**; of the PRs, **28 are open** and **22 are closed/merged**. There were **no new releases**, so the project appears to be in a stabilization-and-feature-development window rather than a release day. The dominant themes are reliability fixes around tool-call/SSE handling, Windows/desktop packaging, and rapid triage of Chinese-language UI/UX feedback. Overall project health looks solid, though MCP tool reliability and long-running session robustness remain the clearest risk areas.

## 2. Releases

No new releases were published in the last 24 hours, so there are no release notes, breaking changes, or migration notes to report.

## 3. Project Progress

22 PRs moved to closed/merged status. Among the visible top-20 PRs, the notable closed/merged items are:

- [#5598](https://github.com/agentscope-ai/QwenPaw/pull/5598) — **feat(console): add LLM fallback configuration UI** for agent and global model settings. This is a substantial console feature for fallback model lists.
- [#6738](https://github.com/agentscope-ai/QwenPaw/pull/6738) — **feat(creator): grounding search, timeline workbench, YOLO reviews, i18n, ASR, and reliability hardening**. Note that a near-identical PR [#6740](https://github.com/agentscope-ai/QwenPaw/pull/6740) is now open, likely as a resubmission/rebranch.
- [#6669](https://github.com/agentscope-ai/QwenPaw/pull/6669) — **fix(desktop): stabilize Chrome native messaging and Windows restore locking**, fixing Windows-facing startup failures.
- [#6701](https://github.com/agentscope-ai/QwenPaw/pull/6701) — **fix(website): website add blog**.
- [#6670](https://github.com/agentscope-ai/QwenPaw/pull/6670) — **docs(checkpoint): add checkpoint usage documentation** to the Magic Commands page.

8 issues were also closed. Most were UX/feature requests from desktop users, including [#6452](https://github.com/agentscope-ai/QwenPaw/issues/6452), [#6413](https://github.com/agentscope-ai/QwenPaw/issues/6413), [#6392](https://github.com/agentscope-ai/QwenPaw/issues/6392), [#6736](https://github.com/agentscope-ai/QwenPaw/issues/6736), [#6587](https://github.com/agentscope-ai/QwenPaw/issues/6587), and [#6454](https://github.com/agentscope-ai/QwenPaw/issues/6454). The bug [#6690](https://github.com/agentscope-ai/QwenPaw/issues/6690) — `cron pause/resume` not persisting enabled state — was also closed, and [#6716](https://github.com/agentscope-ai/QwenPaw/issues/6716) was closed as invalid.

Notable open PRs still in flight include [#6721](https://github.com/agentscope-ai/QwenPaw/pull/6721) (retry reasoning-content errors), [#6714](https://github.com/agentscope-ai/QwenPaw/pull/6714) (retry SSE errors with embedded status codes), [#6725](https://github.com/agentscope-ai/QwenPaw/pull/6725) (report fork finalization failures), [#6723](https://github.com/agentscope-ai/QwenPaw/pull/6723) (expire stale capability cache), and [#6741](https://github.com/agentscope-ai/QwenPaw/pull/6741) (improve ReMe embedding lifecycle).

## 4. Community Hot Topics

The most commented issues in the last 24 hours are:

- [#6436](https://github.com/agentscope-ai/QwenPaw/issues/6436) — **Automatic model routing** (3 comments). Users want each request routed to the most appropriate model: local/small for simple turns, vision models for images, large models for hard reasoning.
- [#6726](https://github.com/agentscope-ai/QwenPaw/issues/6726) — **Long console session fails with `tool` role ordering error** (2 comments). Heavy tool-call sessions with 20–30+ `tool_call`/`tool_result` pairs eventually trigger a 400 error.
- [#6452](https://github.com/agentscope-ai/QwenPaw/issues/6452) — **Remove/soften “多模态能力” warning** (2 comments). The current non-multimodal warning is considered too aggressive and visually intrusive.
- [#6732](https://github.com/agentscope-ai/QwenPaw/issues/6732) — **MCP tools regularly stop working** until Docker container restart (2 comments).
- [#6480](https://github.com/agentscope-ai/QwenPaw/issues/6480) — **`nohup` / `&` shell commands cause agent to hang** (2 comments).
- [#6413](https://github.com/agentscope-ai/QwenPaw/issues/6413) — **“完整模式” UI is confusing**; users want a simple settings button instead (2 comments).
- [#6392](https://github.com/agentscope-ai/QwenPaw/issues/6392) — **Per-agent token statistics** (2 comments).

All visible issues have **0 👍 reactions**, so “hotness” here is by comment count. The underlying needs are clear: model flexibility and cost control, MCP robustness, better long-session tool handling, simpler desktop UX, and finer-grained usage observability.

## 5. Bugs & Stability

Ranked by estimated severity:

- **High — [#6726](https://github.com/agentscope-ai/QwenPaw/issues/6726)**  
  Long console sessions with heavy tool usage fail with `400 "Messages with role 'tool' must be a response to a preceding message with 'tool_calls'"`. No visible fix PR yet.
- **High — [#6732](https://github.com/agentscope-ai/QwenPaw/issues/6732)**  
  MCP tools become unusable after hours/days until the QwenPaw Docker container is restarted. No visible fix PR yet.
- **High — [#6722](https://github.com/agentscope-ai/QwenPaw/issues/6722)**  
  Background forked subagent reports `completed` even when worktree finalization fails, leaving expected commits missing. A fix is in review: [#6725](https://github.com/agentscope-ai/QwenPaw/pull/6725).
- **Medium — [#6731](https://github.com/agentscope-ai/QwenPaw/issues/6731)**  
  `execute_shell_command` crashes with `TypeError: replace() should be called on dataclass instances` when the model passes `sandbox_config`. No visible fix PR yet.
- **Medium — [#6708](https://github.com/agentscope-ai/QwenPaw/issues/6708)**  
  Upstream gateway 503 errors reported inside SSE streams are not retried and fail the request. Fix PR: [#6714](https://github.com/agentscope-ai/QwenPaw/pull/6714).
- **Medium — [#6707](https://github.com/agentscope-ai/QwenPaw/issues/6707)**  
  `400 invalid_request_error` when tool-call history is used with a thinking-mode upstream; `reasoning_content` relay fails. Fix PR: [#6721](https://github.com/agentscope-ai/QwenPaw/pull/6721).
- **Low / closed — [#6690](https://github.com/agentscope-ai/QwenPaw/issues/6690)**  
  `cron pause/resume` did not persist the `enabled` state across restarts. Closed during this window.
- **Test infra — [#6716](https://github.com/agentscope-ai/QwenPaw/issues/6716)**  
  A deterministic integration test failure (`KeyError: 'auto_update_targets'`) was closed as invalid; related test adjustment is in [#6729](https://github.com/agentscope-ai/QwenPaw/pull/6729).

## 6. Feature Requests & Roadmap Signals

Open feature requests showing likely roadmap signals:

- [#6436](https://github.com/agentscope-ai/QwenPaw/issues/6436) — **Automatic model routing**. This is a larger architectural request and aligns closely with open PR [#6302](https://github.com/agentscope-ai/QwenPaw/pull/6302) (“unify provider discovery, model metadata, routing, and agent controls”).
- [#6724](https://github.com/agentscope-ai/QwenPaw/issues/6724) — **Configurable MCP tool-call timeout**. MCP reliability is already a hot topic, so this small but high-value feature is likely to land soon.
- [#6728](https://github.com/agentscope-ai/QwenPaw/issues/6728) — **WeChat approval prompts should support Chinese approve/deny actions**. Low-effort localization improvement likely suitable for a patch release.
- [#6730](https://github.com/agentscope-ai/QwenPaw/issues/6730) — **Live artifact canvas**: render agent-generated HTML in a side panel. Larger UX feature, likely further out.
- [#6734](https://github.com/agentscope-ai/QwenPaw/issues/6734) — Rename **“新建聊天”** to **“新任务”**.
- [#6737](https://github.com/agentscope-ai/QwenPaw/issues/6737) — Improve auto-generated titles for historical conversations.

Closed feature-request issues in this window include [#6452](https://github.com/agentscope-ai/QwenPaw/issues/6452), [#6413](https://github.com/agentscope-ai/QwenPaw/issues/6413), [#6392](https://github.com/agentscope-ai/QwenPaw/issues/6392), [#6736](https://github.com/agentscope-ai/QwenPaw/issues/6736), [#6587](https://github.com/agentscope-ai/QwenPaw/issues/6587), and [#6454](https://github.com/agentscope-ai/QwenPaw/issues/6454), indicating active triage of user-driven UX requests.

## 7. User Feedback Summary

- **Chinese desktop users are the most vocal group.** Repeated feedback targets confusing labels, unhelpful auto-generated conversation titles, the “完整模式” concept, the “QwenPaw Desktop” app name, and missing right-click copy menus. Many issues were closed quickly, suggesting maintainers are responsive to this feedback.
- **Power users are hitting real reliability friction.** The most serious complaints are MCP tools silently dying until container restart, long sessions breaking after many tool calls, and shell commands using `nohup`/`&` hanging the agent.
- **Users want more control and observability.** The token-statistics request, model-routing request, and MCP timeout request all point toward users wanting smarter usage, cost control, and resilience in production-like workloads.
- **Satisfaction signal:** users are filing detailed reproductions with versions, platform details, and screenshots, and maintainers are closing straightforward issues quickly — which suggests a generally healthy feedback loop.

## 8. Backlog Watch

Items that have been open for a while and may need maintainer attention:

- [#6302](https://github.com/agentscope-ai/QwenPaw/pull/6302) — Open since **2026-07-21**. Large PR unifying provider discovery, model metadata, routing, and agent controls. This is directly relevant to the model-routing feature request.
- [#6436](https://github.com/agentscope-ai/QwenPaw/issues/6436) — Open since **2026-07-24**. Automatic model routing remains one of the most-discussed open features and is likely awaiting direction from #6302.
- [#6480](https://github.com/agentscope-ai/QwenPaw/issues/6480) — Open since **2026-07-26**. `nohup`/`&` detached shell processes never return to idle; this affects automation-channel users.
- [#6504](https://github.com/agentscope-ai/QwenPaw/pull/6504) — Open since **2026-07-27**. Unifies project-directory resolution and hardens file workspace behavior.
- [#6525](https://github.com/agentscope-ai/QwenPaw/pull/6525) — Open since **2026-07-28**. Adds user-context passthrough from Chat API → Agent → Tool → MCP → SKILL CLI. Broad surface area, so likely needs careful review.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-08-06

## 1. Today's Overview

ZeroClaw saw sustained high activity in the 24 hours up to 2026-08-06: **50 issues and 50 PRs were updated**, with **40 issues still open/active** and **10 closed**. On the PR side, **49 PRs remain open** and only **1 is listed as closed/merged**; no new releases were published. The project remains in a pre-0.9 phase, with work concentrated on security hardening, RFC decisions, tool policy, provider compatibility, and channel/runtime reliability. The main health signal is strong contributor engagement, but the large number of `needs-maintainer-review` and `needs-author-action` items points to a growing decision/review backlog.

## 2. Releases

**No new releases were reported** in this snapshot. There are therefore no version-specific changelog entries, breaking changes, or migration notes to summarize.

## 3. Project Progress

### Closed/merged PRs

Only **one PR** in the 24h snapshot is marked closed/merged:

- [zeroclaw-labs/zeroclaw PR #9750](https://github.com/zeroclaw-labs/zeroclaw/pull/9750) — `fix(service): bound launcher-owned daemon logs`  
  This PR was closed, while a closely related PR remains open: [PR #9773](https://github.com/zeroclaw-labs/zeroclaw/pull/9773) — `fix(service): bound launchd daemon logs`, suggesting the work was reworked or superseded.

### Active/advancing PRs

Several substantial PRs were updated or newly opened in the window:

- [PR #9324](https://github.com/zeroclaw-labs/zeroclaw/pull/9324) — A2A outbound client config, shared wire model, and tools; phase 1 of the A2A RFC.
- [PR #9781](https://github.com/zeroclaw-labs/zeroclaw/pull/9781) — New WebAuthn assertion data validation, including `rpIdHash` binding and User Present flag checks.
- [PR #9776](https://github.com/zeroclaw-labs/zeroclaw/pull/9776) — Extends `forbidden_paths` with workspace-relative glob patterns.
- [PR #9777](https://github.com/zeroclaw-labs/zeroclaw/pull/9777) — Signal channel now accepts `sourceUuid` senders.
- [PR #9748](https://github.com/zeroclaw-labs/zeroclaw/pull/9748) — Prevents stale provider refreshes from mutating replacement sessions.
- [PR #9723](https://github.com/zeroclaw-labs/zeroclaw/pull/9723) — Parses DeepSeek DSML and `<|tool_call|>` envelopes.
- [PR #9695](https://github.com/zeroclaw-labs/zeroclaw/pull/9695) — Strips terminal markers from streaming and non-streaming responses.
- [PR #9737](https://github.com/zeroclaw-labs/zeroclaw/pull/9737) — Enforces agent policy in pipelines.
- [PR #8826](https://github.com/zeroclaw-labs/zeroclaw/pull/8826) and [PR #8713](https://github.com/zeroclaw-labs/zeroclaw/pull/8713) — SSRF gates for `image_gen` and `file_download`.
- [PR #8443](https://github.com/zeroclaw-labs/zeroclaw/pull/8443) — Matrix single-message progress drafts.
- [PR #8928](https://github.com/zeroclaw-labs/zeroclaw/pull/8928) — ZeroCode Doctor now shows the active resolved log path.

### Notable closed issues

Among the 10 closed issues, these appear in the top-30 snapshot:

- [Issue #6350](https://github.com/zeroclaw-labs/zeroclaw/issues/6350) — WhatsApp Web `allowed-numbers` bypassed for LID-based contacts.
- [Issue #9335](https://github.com/zeroclaw-labs/zeroclaw/issues/9335) — Support for data-wrapped OpenAI-compatible chat responses.
- [Issue #9462](https://github.com/zeroclaw-labs/zeroclaw/issues/9462) — `zeroclaw-plugins` lib unit tests never executed in CI.
- [Issue #9652](https://github.com/zeroclaw-labs/zeroclaw/issues/9652) — `config set` rejecting cron keys with hyphenated aliases.
- [Issue #7467](https://github.com/zeroclaw-labs/zeroclaw/issues/7467) — Cursor navigation when editing string settings in ZeroCode.

## 4. Community Hot Topics

PR comment counts were not available in the supplied snapshot, so this section focuses on the most active issues by comment count.

- [Issue #6808](https://github.com/zeroclaw-labs/zeroclaw/issues/6808) — *RFC: Work Lanes, Board Automation, and Label Cleanup* — **18 comments**  
  A long-running governance/rollout tracker about reducing maintainer overhead and routing work more cleanly.

- [Issue #8303](https://github.com/zeroclaw-labs/zeroclaw/issues/8303) — *RFC: Goal mode v1 — bounded foreground Matrix work* — **18 comments, 👍 1**  
  Proposes durable, bounded user objectives across multiple agent turns.

- [Issue #8603](https://github.com/zeroclaw-labs/zeroclaw/issues/8603) — *RFC: ZeroClaw Chat Completions profile* — **16 comments**  
  Would let OpenAI-compatible clients such as Open WebUI, LobeChat, Continue.dev, and Aider talk to ZeroClaw directly.

- [Issue #7155](https://github.com/zeroclaw-labs/zeroclaw/issues/7155) — *RFC: Per-execution confirmation tier for high-risk shell commands + allow/ask/deny policy* — **16 comments**  
  A security/UX proposal for shell command policy, with maintainer-scoped revisions.

- [Issue #7141](https://github.com/zeroclaw-labs/zeroclaw/issues/7141) — *RFC: Pluggable inbound authentication and canonical principals* — **12 comments**  
  Security/architecture RFC targeting OIDC, pluggable providers, and identity normalization.

- [Issue #8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) — *Maintainer decision queue for RFCs and design issues* — **11 comments**  
  A meta-tracker created to clear the RFC decision backlog.

- [Issue #9487](https://github.com/zeroclaw-labs/zeroclaw/issues/9487) — *RFC: Runtime-owned conversation sessions and transport surface adapters* — **10 comments**  
  Discusses moving session ownership into the runtime and standardizing inbound actions.

- [Issue #9246](https://github.com/zeroclaw-labs/zeroclaw/issues/9246) — *RFC: Preserve Todo tracker configuration during ZeroCode ownership migration* — **9 comments**  
  Focuses on preserving user configuration during ownership/model transitions.

**Underlying needs:** The most active conversations are about unblocking maintainer decisions, opening ZeroClaw to OpenAI-compatible clients, defining safer tool/command policies, and standardizing authentication and session ownership. Security, developer experience, and RFC governance are clearly the dominant community concerns right now.

## 5. Bugs & Stability

Ranked by explicit severity labels where available:

| Severity | Issue | Status / Notes |
|---|---|---|
| **S1 — workflow blocked** | [Issue #9775](https://github.com/zeroclaw-labs/zeroclaw/issues/9775) — OpenRouter streaming requests drop `provider_extra` | Open; no visible fix PR in the snapshot. |
| **S2 — degraded behavior** | [Issue #9768](https://github.com/zeroclaw-labs/zeroclaw/issues/9768) — daemon reload is not on SIGUSR1, and the degraded-security warning tells operators to send a killing signal | Open; no fix PR listed. |
| **S2 — silent failure** | [Issue #9780](https://github.com/zeroclaw-labs/zeroclaw/issues/9780) — cron-triggered SOPs cannot do network work | New; no fix PR yet. |
| **S2/unlabeled — silent failure** | [Issue #9779](https://github.com/zeroclaw-labs/zeroclaw/issues/9779) — documented `sops_dir` default not honored, SOPs silently never load | New; no fix PR yet. |
| **S2** | [Issue #6350](https://github.com/zeroclaw-labs/zeroclaw/issues/6350) — WhatsApp Web `allowed-numbers` bypassed for LID-based contacts | Closed in this window. |
| **P1 / high-risk** | [Issue #8642](https://github.com/zeroclaw-labs/zeroclaw/issues/8642) — MCP/tool-schema cloning drives unbounded RSS growth in the agent loop | Open/accepted; no visible fix PR. |
| **P1 / high-risk** | [Issue #9328](https://github.com/zeroclaw-labs/zeroclaw/issues/9328) — verifiable-intent evaluates constraints without verifying the credential chain | Open/accepted; no visible fix PR. |
| **S3** | [Issue #9697](https://github.com/zeroclaw-labs/zeroclaw/issues/9697) — ZeroCode cannot connect to daemon launched by Windows Task Scheduler | Open; no fix PR in the snapshot. |
| **S3 — CI/tooling** | [Issue #9462](https://github.com/zeroclaw-labs/zeroclaw/issues/9462) — `zeroclaw-plugins` unit tests never execute in CI | Closed. |
| **Config bug** | [Issue #9652](https://github.com/zeroclaw-labs/zeroclaw/issues/9652) — `config set` rejects cron keys with hyphenated aliases | Closed. |

Active bug-fix PRs that may address related stability issues include:

- [PR #9748](https://github.com/zeroclaw-labs/zeroclaw/pull/9748) — fixes stale provider refreshes after session replacement.
- [PR #9781](https://github.com/zeroclaw-labs/zeroclaw/pull/9781) — validates WebAuthn assertion data.
- [PR #9695](https://github.com/zeroclaw-labs/zeroclaw/pull/9695) — strips terminal markers from model responses.
- [PR #9723](https://github.com/zeroclaw-labs/zeroclaw/pull/9723) — fixes DeepSeek tool-call parsing.
- [PR #9197](https://github.com/zeroclaw-labs/zeroclaw/pull/9197) — fixes channel Ctrl+C restart loops.
- [PR #9737](https://github.com/zeroclaw-labs/zeroclaw/pull/9737) — enforces agent policy in pipelines.
- [PR #8713](https://github.com/zeroclaw-labs/zeroclaw/pull/8713) and [PR #8826](https://github.com/zeroclaw-labs/zeroclaw/pull/8826) — SSRF harden `file_download` and `image_gen`.

## 6. Feature Requests & Roadmap Signals

Strong roadmap signals are visible in the active RFCs and feature-label issues:

- [Issue #8303](https://github.com/zeroclaw-labs/zeroclaw/issues/8303) — Goal mode v1 for bounded, multi-turn agent work.
- [Issue #8603](https://github.com/zeroclaw-labs/zeroclaw/issues/8603) — OpenAI Chat Completions compatibility profile.
- [Issue #9487](https://github.com/zeroclaw-labs/zeroclaw/issues/9487) — Runtime-owned conversation sessions and transport adapters.
- [Issue #8832](https://github.com/zeroclaw-labs/zeroclaw/issues/8832) — Plugin-owned Kanban board for agent work.
- [Issue #6909](https://github.com/zeroclaw-labs/zeroclaw/issues/6909) — Computer-use support for desktop screen interaction and input control.
- [Issue #9631](https://github.com/zeroclaw-labs/zeroclaw/issues/9631) — Stable `session_id` for OpenRouter prompt-cache savings.
- [Issue #8424](https://github.com/zeroclaw-labs/zeroclaw/issues/8424) — Workspace-relative forbidden path patterns and optional `.zeroclawignore`.
- [Issue #7155](https://github.com/zeroclaw-labs/zeroclaw/issues/7155) — Shell command allow/ask/deny policy.
- [Issue #7141](https://github.com/zeroclaw-labs/zeroclaw/issues/7141) — Pluggable inbound authentication and canonical principals.
- [Issue #6954](https://github.com/zeroclaw-labs/zeroclaw/issues/6954) — Provenance and reply contract for internally initiated agent turns.
- [Issue #9346](https://github.com/zeroclaw-labs/zeroclaw/issues/9346) — Unified package/capability/config/runtime-state catalog contract.
- [Issue #9246](https://github.com/zeroclaw-labs/zeroclaw/issues/9246) — Preserve Todo tracker configuration during ZeroCode ownership migration.

**Prediction:** These signals strongly point to **v0.9.0** as the next major roadmap milestone. The existing tracker [Issue #7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432) already collects v0.9.0 auth, security, gateway, and breaking-change work. Smaller user-facing fixes such as OpenRouter caching ([#9631](https://github.com/zeroclaw-labs/zeroclaw/issues/9631)) and workspace-relative path blocking ([#9776](https://github.com/zeroclaw-labs/zeroclaw/pull/9776)) could plausibly land in maintenance releases before 0.9.0.

## 7. User Feedback Summary

Inferred from issue and PR reports in the snapshot:

- **Security defaults matter.** Users are pushing for deny-by-default WhatsApp `allowed_groups` ([#9397](https://github.com/zeroclaw-labs/zeroclaw/issues/9397)), high-risk shell command confirmation ([#7155](https://github.com/zeroclaw-labs/zeroclaw/issues/7155)), workspace-internal file protection ([#8424](https://github.com/zeroclaw-labs/zeroclaw/issues/8424)), and SSRF-safe download/image tools ([#8713](https://github.com/zeroclaw-labs/zeroclaw/pull/8713), [#8826](https://github.com/zeroclaw-labs/zeroclaw/pull/8826)).

- **Silent failures are a major pain point.** Users are reporting cases where SOPs silently don’t load ([#9779](https://github.com/zeroclaw-labs/zeroclaw/issues/9779)), cron SOPs cannot do network work ([#9780](https://github.com/zeroclaw-labs/zeroclaw/issues/9780)), OpenRouter requests silently drop `provider_extra` ([#9775](https://github.com/zeroclaw-labs/zeroclaw/issues/9775)), and WhatsApp messages are silently dropped due to LID identity issues ([#6350](https://github.com/zeroclaw-labs/zeroclaw/issues/6350)).

- **Windows/WSL2 lifecycle friction persists.** ZeroCode cannot connect to a daemon launched by Windows Task Scheduler ([#9697](https://github.com/zeroclaw-labs/zeroclaw/issues/9697)), WSL2 OOM/restart storms have multiple root causes ([#8642](https://github.com/zeroclaw-labs/zeroclaw/issues/8642)), and daemon signal documentation can actually tell operators to kill the daemon ([#9768](https://github.com/zeroclaw-labs/zeroclaw/issues/9768)).

- **Cost-conscious users want better provider compatibility.** OpenRouter users specifically want prompt caching via stable `session_id` ([#9631](https://github.com/zeroclaw-labs/zeroclaw/issues/9631)) and support for data-wrapped OpenAI-compatible responses ([#9335](https://github.com/zeroclaw-labs/zeroclaw/issues/9335)).

- **Positive signals:** Several long-standing usability bugs were closed, including ZeroCode string-editing cursor navigation ([#7467](https://github.com/zeroclaw-labs/zeroclaw/issues/7467)) and config CLI cron-key handling ([#9652](https://github.com/zeroclaw-labs/zeroclaw/issues/9652)).

## 8. Backlog Watch

Items needing maintainer or author attention include:

### Long-running RFCs awaiting maintainer review

- [Issue #6808](https://github.com/zeroclaw-labs/zeroclaw/issues/6808) — Work Lanes, Board Automation, and Label Cleanup — created **2026-05-20**, 18 comments.
- [Issue #6954](https://github.com/zeroclaw-labs/zeroclaw/issues/6954) — Provenance and reply contract for internally initiated turns — created **2026-05-26**, 9 comments.
- [Issue #7155](https://github.com/zeroclaw-labs/zeroclaw/issues/7155) — Shell command confirmation/policy tier — created **2026-06-03**, 16 comments.
- [Issue #7141](https://github.com/zeroclaw-labs/zeroclaw/issues/7141) — Pluggable inbound auth and canonical principals — created **2026-06-03**, 12 comments.
- [Issue #8603](https://github.com/zeroclaw-labs/zeroclaw/issues/8603) — Chat Completions profile — created **2026-07-02**, 16 comments.
- [Issue #9487](https://github.com/zeroclaw-labs/zeroclaw/issues/9487) — Runtime-owned conversation sessions — created **2026-07-28**, 10 comments.
- [Issue #9246](https://github.com/zeroclaw-labs/zeroclaw/issues/9246) — Todo tracker config preservation — created **2026-07-21**, 9 comments.
- [Issue #9397](https://github.com/zeroclaw-labs/zeroclaw/issues/9397) — WhatsApp empty `allowed_groups` as permit-none — P1, 6 comments.

### Accepted bugs with no visible fix PR

- [Issue #8642](https://github.com/zeroclaw-labs/zeroclaw/issues/8642) — MCP/tool-schema cloning RSS growth — P1, accepted.
- [Issue #9328](https://github.com/zeroclaw-labs/zeroclaw/issues/9328) — verifiable-intent constraint evaluation without credential-chain verification — accepted.
- [Issue #9697](https://github.com/zeroclaw-labs/zeroclaw/issues/9697) — ZeroCode cannot connect to Windows Task Scheduler daemon — P1, accepted.

### PRs waiting on author action

Many large PRs are labeled `needs-author-action`, including:

- [PR #9324](https://github.com/zeroclaw-labs/zeroclaw/pull/9324) — A2A outbound client phase 1.
- [PR #8713](https://github.com/zeroclaw-labs/zeroclaw/pull/8713) — SSRF gate for `file_download`.
- [PR #8443](https://github.com/zeroclaw-labs/zeroclaw/pull/8443) — Matrix single-message progress drafts.
- [PR #9723](https://github.com/zeroclaw-labs/zeroclaw/pull/9723) — DeepSeek DSML tool-call parsing.
- [PR #9748](https://github.com/zeroclaw-labs/zeroclaw/pull/9748) — Stale provider refresh fix.
- [PR #9737](https://github.com/zeroclaw-labs/zeroclaw/pull/9737) — Agent policy enforcement in pipelines.

The continued existence of the maintainer decision queue itself, [Issue #8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692), suggests that RFC triage and PR author follow-up are currently the biggest bottlenecks to faster project progress.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/boom7sss/agents-radar).*