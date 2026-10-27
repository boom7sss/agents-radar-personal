# OpenClaw Ecosystem Digest 2026-08-03

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-08-03 03:34 UTC

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

# OpenClaw Project Digest — 2026-08-03

## 1. Today's Overview

OpenClaw is in a period of very high activity and stability-hardening: 500 issues and 500 PRs were updated in the last 24 hours, with 51 issues closed and 134 PRs merged/closed in that window. A new beta, **v2026.7.2-beta.7**, shipped with a strong state-safety and recovery theme (quarantine store, crash-recoverable SQLite snapshots, schema-upgrade data-loss rejection, rollback-writer snapshot recovery). The most active community threads are clustered around **message loss** (DeepSeek v4 Flash silent reply failures — 87 comments), **session-state corruption** (realtime voice unbounded state, subagent completion delivery), and **provider/auth regressions** (unexpected Anthropic billing, disappearing Anthropic model picker entries). The `clawsweeper[bot]` autonomous fix pipeline is visibly productive, producing autofix PRs across WhatsApp, Control UI, Gateway media delivery, failover classification, and memory providers. Overall project health is solid, but the density of P1 session-state and message-delivery bugs suggests reliability remains the top internal priority.

## 2. Releases

**v2026.7.2-beta.7** — [openclaw/openclaw Releases](https://github.com/openclaw/openclaw/releases)

Release notes (2026.7.2 section) are dominated by a single theme:

- **State safety and recovery:**
  - Quarantine store that survives primary-database damage
  - Crash-recoverable SQLite snapshots
  - Crash-durable filesystem publication
  - Schema-upgrade data-loss rejection
  - Rollback-writer snapshot recovery

No explicit breaking changes or migration steps were included in the visible notes. However, the schema-upgrade safeguards directly interact with a **P0 open bug** reported this week: [#115421 Schema downgrade recovery must not quarantine/wipe state DB (cron jobs lost)](https://github.com/openclaw/openclaw/issues/115421), so operators running mixed schema versions should watch this closely.

## 3. Project Progress

134 PRs were merged/closed in the last 24 hours. Confirmed closed/merged PRs visible in today's data:

- [PR #118323 — refactor(opencode): consolidate session catalog test fixtures](https://github.com/openclaw/openclaw/pull/118323) (steipete) — test-infrastructure consolidation in a security-sensitive suite
- [PR #117697 — fix(whatsapp): preserve source direction for automatic reactions](https://github.com/openclaw/openclaw/pull/117697) (clawsweeper[bot]) — fixes [#117672](https://github.com/openclaw/openclaw/issues/117672); acknowledgements now address self-authored messages correctly
- [PR #118130 — fix(failover): classify interrupted transport failures as timeouts](https://github.com/openclaw/openclaw/pull/118130) (clawsweeper[bot]) — fixes [#118083](https://github.com/openclaw/openclaw/issues/118083); interrupted-stream failures now route through the canonical timeout/fast-retry path
- [PR #117843 — fix(agents): verify delegated writes before reporting success](https://github.com/openclaw/openclaw/pull/117843) (clawsweeper[bot]) — fixes [#67136](https://github.com/openclaw/openclaw/issues/67136); byte-level write verification across abort/timeout recovery
- [PR #114411 — refactor(cli): consolidate security-sensitive regression fixtures](https://github.com/openclaw/openclaw/pull/114411) (steipete)

**Substantial features/fixes advancing** (open PRs, high activity):

- [PR #118360 — Make subagent completion delivery durable and recoverable](https://github.com/openclaw/openclaw/pull/118360) (joshavant, size XL) — closes [#112616](https://github.com/openclaw/openclaw/issues/112616); comprehensive rework of last-mile subagent handoff (queued/ambiguous/expired states)
- [PR #118296 — fix(agents): prevent internal subagent completion events from leaking into chats](https://github.com/openclaw/openclaw/pull/118296) (joshavant) — closes [#110378](https://github.com/openclaw/openclaw/issues/110378)
- [PR #101665 — feat: let plugin tools yield turns](https://github.com/openclaw/openclaw/pull/101665) (BenGuanRan, size L) — plugin tools gain the ability to pause a turn for external interaction, matching native approval/form-card flows
- [PR #113567 — feat(state): snapshot state DB before a forward schema migration](https://github.com/openclaw/openclaw/pull/113567) (dpriscal) — safety net for interrupted/unwanted forward migrations
- [PR #117721 — fix(control-ui): render live thinking agent events in WebChat](https://github.com/openclaw/openclaw/pull/117721) (clawsweeper[bot]) — fixes [#88079](https://github.com/openclaw/openclaw/issues/88079)
- [PR #100074 — feat(agents): enforce computer-use policy in Claude CLI runtime](https://github.com/openclaw/openclaw/pull/100074) (vincentkoc, size XL)
- [PR #117951 — fix(gateway): preserve assistant media in live chat events](https://github.com/openclaw/openclaw/pull/117951) (clawsweeper[bot])

## 4. Community Hot Topics

Most-commented issues this week (all links → [github.com/openclaw/openclaw](https://github.com/openclaw/openclaw)):

- **[#116277 — DeepSeek v4 Flash silent reply failure (87 comments, CLOSED)](https://github.com/openclaw/openclaw/issues/116277)** — Model silently produced no reply on a Telegram group; OpenClaw posted the generic "No reply was generated" fallback. The 87-comment engagement signals strong user frustration with **silent failures and opaque fallbacks**, not just this one model.
- **[#116201 — Realtime voice work can retain unbounded provider and consult state (51 comments, OPEN, P1)](https://github.com/openclaw/openclaw/issues/116201)** — Slow/stalled/bursty provider behavior can retain superseded consult work, large provider frames, and pre-ready audio indefinitely; resource limits are item-count-based rather than hard ownership bounds.
- **[#115326 — Crash-loop breaker suppresses Discord/WhatsApp permanently; documented recovery fails with WebSocket 1006 (26 comments, CLOSED)](https://github.com/openclaw/openclaw/issues/115326)** — P1 regression; recovery path (`channels.start`) was broken, leaving users with no documented escape hatch.
- **[#91009 — Codex PreToolUse native hook relay spawns CPU-bound processes, stalls gateway RPC (19 comments, 2 👍, OPEN since 2026-06-06)](https://github.com/openclaw/openclaw/issues/91009)** — ~100%+ CPU per `openclaw-hooks` process; one of the longest-standing P1s with a `clawsweeper-recovery-stuck` label.
- **[#48003 — Steer mode does not inject messages mid-turn (16 comments, 4 👍, OPEN since 2026-03-16)](https://github.com/openclaw/openclaw/issues/48003)** — `messages.queue.mode: "steer"` queues until turn end instead of injecting at tool boundaries; root cause traced to `KeyedAsyncQueue` (commit `9889c6da5`).

**Underlying need:** users are asking for *no silent loss* (delivery guarantees + visible fallbacks), *recoverability* (crash-loop breakers must have working escape hatches), *resource bounds* (realtime voice, stuck loops), and *mid-turn control* (steer mode, approvals).

## 5. Bugs & Stability

### Critical (P0)

- **[#115421 — Schema downgrade recovery must not quarantine/wipe state DB; cron jobs lost (OPEN, P0, 6 comments)](https://github.com/openclaw/openclaw/issues/115421)** — A v1-schema build opening a v6 state DB quarantined and wiped `openclaw.sqlite`, losing cron jobs. No fix PR linked yet; directly related to the new release's schema-safety theme.
- **[PR #110692 — fix(codex): guard loopback WS classification with isIP to prevent DNS hostname bypass (OPEN, P0, security)](https://github.com/openclaw/openclaw/pull/110692)** — Auth-free local-loopback classification could be bypassed via DNS hostnames; status **needs proof**.

### High (P1)

- **[#116010 — All persistent sessions capped at 128k context regardless of model (OPEN, 6 comments)](https://github.com/openclaw/openclaw/issues/116010)** — Model choice and configured `contextTokens` are ignored for persistent sessions.
- **[#117956 — claude-cli backend produced metered Anthropic API usage (~13.7M tokens in one day) despite CLAUDE_CLI_CLEAR_ENV scrubbing ANTHROPIC_API_KEY (OPEN, security/cost, 10 comments)](https://github.com/openclaw/openclaw/issues/117956)**
- **[#114234 — Usage-cost refresh lock never releasable after container restart that reuses the owner PID (OPEN, 7 comments)](https://github.com/openclaw/openclaw/issues/114234)** — Leaked lock permanently freezes the usage cache in containers.
- **[#99586 — Runtime tool surface returns blank body after gateway-touching operations (OPEN, regression, 8 comments, 2 👍)](https://github.com/openclaw/openclaw/issues/99586)**
- **[#106231 — Loop detection blocks exec but does not terminate the stuck agent run, burning resources for hours (OPEN, 9 comments, 1 👍)](https://github.com/openclaw/openclaw/issues/106231)**
- **[#111498 — Main agent blocked by persistent workspace-state migration after Anthropic auth recovery (OPEN, regression, 7 comments)](https://github.com/openclaw/openclaw/issues/111498)**
- **[#109017 — Anthropic provider disappears from model picker; static model catalog never pulls new models (OPEN, 7 comments)](https://github.com/openclaw/openclaw/issues/109017)**
- **[#116022 — /new reuses stable session ID and cannot recover a retired Codex binding tombstone (OPEN, 6 comments)](https://github.com/openclaw/openclaw/issues/116022)**
- **[#92433 / #67777 — Subagent completion silently dropped/lost on steer-into-ended-run, direct-announce timeout, drain, or orphan prune (OPEN, P1)](https://github.com/openclaw/openclaw/issues/92433)** — mitigation PRs [#118360](https://github.com/openclaw/openclaw/pull/118360) and [#86540](https://github.com/openclaw/openclaw/pull/86540) are in flight.
- **[#115001 — Hybrid memory search returns spurious 1.0 similarity scores via FTS LIKE-fallback hard-coded textScore (OPEN, regression, 9 comments)](https://github.com/openclaw/openclaw/issues/115001)**

### Closed today (resolved or triaged)

- [#116277 DeepSeek v4 Flash silent failure — CLOSED](https://github.com/openclaw/openclaw/issues/116277)
- [#115326 Crash-loop breaker suppressing Discord/WhatsApp — CLOSED](https://github.com/openclaw/openclaw/issues/115326)
- [#106760 Telegram pre-tool-call text erased in multi-block responses — CLOSED](https://github.com/openclaw/openclaw/issues/106760)
- [#58498 Status card shows active OAuth profile but weekly usage from a different credential — CLOSED](https://github.com/openclaw/openclaw/issues/58498)

## 6. Feature Requests & Roadmap Signals

Active feature requests (all OPEN unless noted):

- **[#50093 — WhatsApp: backfill missed messages after reconnection (P2, 12 comments)](https://github.com/openclaw/openclaw/issues/50093)** — recurring channel-reliability theme
- **[#113251 — Add image viewing in the webchat file viewer (P2, 10 comments)](https://github.com/openclaw/openclaw/issues/113251)**
- **[#52640 — Persistent task-status surface for long-running channel turns (P2, 8 comments, 2 👍)](https://github.com/openclaw/openclaw/issues/52640)**
- **[#71058 — Support multiple Azure/Teams bots on a single Gateway (P2, 8 comments)](https://github.com/openclaw/openclaw/issues/71058)**
- **[#71195 — OpenAI Realtime speech-to-speech path for macOS Talk Mode, parity with voice-call plugin (P2, 7 comments)](https://github.com/openclaw/openclaw/issues/71195)**
- **[#71142 — Configurable Control UI upload size limit (currently hardcoded 5 MB) (P2, 7 comments)](https://github.com/openclaw/openclaw/issues/71142)**
- **[#51028 — Sessions panel: sort by last meaningful activity, not last message (P3, 7 comments)](https://github.com/openclaw/openclaw/issues/51028)**
- **[#51441 — Expose resolved backend model in session_status and agent runtime (P2, 8 comments)](https://github.com/openclaw/openclaw/issues/51441)**
- **[#47910 — Provider fallback by failure class; quarantine auth-broken providers (P1, 9 comments)](https://github.com/openclaw/openclaw/issues/47910)**

**Roadmap signals from open PRs:** plugin tools yielding turns ([#101665](https://github.com/openclaw/openclaw/pull/101665)) and a "commentary" verbose level ([#103991](https://github.com/openclaw/openclaw/pull/103991)) are the most likely near-term feature landings. The subagent delivery-durability work ([#118360](https://github.com/openclaw/openclaw/pull/118360)) is the clearest signal that reliable subagent orchestration is the current architectural focus. Channel-parity gaps (WhatsApp backfill, Teams multi-bot, macOS Realtime) are likely longer-horizon items.

## 7. User Feedback Summary

Real user pain points evident from this week's data:

- **Message loss is the #1 frustration.** DeepSeek v4 Flash silent failures (#116277, 87 comments), WhatsApp missed messages after reconnect (#50093), Telegram multi-block text erasure (#106760), and commitments marked "sent" but never delivered (#94536) all point to a trust problem: *users can't be sure the bot actually replied.*
- **Session-state fragility.** Subagent sessions persisting and blocking the main session (#47975), parent sessions stuck until UI refresh (#52249), and 20–30-minute inbound dispatch stalls (#54488) make the system feel unresponsive in multi-agent/ACP workflows.
- **Provider/auth confusion and cost anxiety.** Disappearing Anthropic picker entries (#109017), mismatched OAuth usage on status cards (#58498), normalized-vs-raw provider display (#47840), and a shock 13.7M-token bill (#117956) show users are actively auditing credentials and spend — and being burned by opacity.
- **Chinese-language Feishu users are reporting channel-specific regressions** with visible dissatisfaction: activation mode switching ineffective (#50490), tool-failure retry storms spamming group chats (#55694), raw `@_user_N` placeholders in quoted messages (#48786), and incorrectly implemented typing indicator (#69572). This suggests a localization/channel-parity satisfaction gap.
- **Positive signal:** the community is detail-oriented and constructive — multiple reports include root-cause commits and log evidence (e.g., #48003, #116010, #115001), indicating a technically sophisticated user base engaged in co-debugging.

## 8. Backlog Watch

Long-open, important items that still need maintainer attention:

- **[#91009 — Codex PreToolUse hook relay CPU-bound processes (OPEN since 2026-06-06, 19 comments, 2 👍, P1, recovery-stuck)](https://github.com/openclaw/openclaw/issues/91009)** — Oldest P1 in the top-50; carries `needs-maintainer-review`, `needs-product-decision`, and `clawsweeper-recovery-stuck`.
- **[#48003 — Steer mode does not inject mid-turn (OPEN since 2026-03-16, 16 comments, 4 👍, P1)](https://github.com/openclaw/openclaw/issues/48003)** — Root cause identified; high user demand (4 👍); no fix PR linked.
- **[#74586 — AM embedded run aborts memory_search tool calls; classifies as timeout despite completion (OPEN since 2026-04-29, 13 comments, 3 👍, P1)](https://github.com/openclaw/openclaw/issues/74586)**
- **[#53408 — Write/exec tool parameters silently dropped after long conversations (OPEN since 2026-03-24, 10 comments, 2 👍, P1)](https://github.com/openclaw/openclaw/issues/53408)**
- **[#52249 — ACP parent session stuck until refresh when yielded waiting for child completion (OPEN since 2026-03-22, 10 comments, P1)](https://github.com/openclaw/openclaw/issues/52249)**
- **[#50291 — Plugin hooks missing trace context for observability (OPEN since 2026-03-19, 10 comments, P2, diamond-lobster rated)](https://github.com/openclaw/openclaw/issues/50291)**
- **[#47975 — Subagent sessions persist after completion; main session unresponsive (OPEN since 2026-03-16, 10 comments, P1)](https://github.com/openclaw/openclaw/issues/47975)**
- **[#54488 — Session lane starvation: followup drain monopolizes lane, blocks inbound dispatch 20–30 min (OPEN since 2026-03-25, 7 comments, P1, stable-channel maturity)](https://github.com/openclaw/openclaw/issues/54488)**

**Stalled PRs needing author/maintainer action:**

- [PR #115301 — fix(msteams): resolve approvals before agent queue (⏳ waiting on author, `clawsweeper-recovery-stuck`)](https://github.com/openclaw/openclaw/pull/115301)
- [PR #117952 — fix(control-ui): wait for delayed Talk source replies (⏳ waiting on author)](https://github.com/openclaw/openclaw/pull/117952)

**Takeaway:** the March–April cohort of session-state bugs (steer mode, subagent persistence, ACP/yield stalls, lane starvation) remains the most significant unresolved debt. The active subagent-delivery PRs suggest maintainers are now systematically addressing this cluster — a good sign for the next stable release.

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report — 2026-08-03

## 1. Ecosystem Overview

The personal AI assistant / agent ecosystem is in a **stabilization phase** after a period of rapid feature expansion. The dominant theme across all active projects is **reliability hardening**: durable message delivery, crash-recoverable session state, provider/auth resilience, and fail-closed security. Two heavyweight frameworks — OpenClaw and ZeroClaw — are absorbing the bulk of community activity, with OpenClaw merging 134 PRs/day and ZeroClaw shipping a 262-commit maintenance release. A mid-tier of focused projects (Hermes Agent, IronClaw, CoPaw, NanoBot) is iterating quickly but with thinner contributor bases, while several smaller projects (LobsterAI, Moltis, PicoClaw, NanoClaw) show signs of stalled review queues. Users across every project are demanding the same things: **no silent failures, visible fallbacks, recoverable sessions, and trustworthy provider/cost behavior**.

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Release Status | Health Score* |
|---|---|---|---|---|
| **OpenClaw** | 500 updated / 51 closed | 500 updated / 134 merged | **v2026.7.2-beta.7** | 8/10 |
| **ZeroClaw** | 50 updated / 13 closed | 50 updated / 10 merged | **v0.8.4** (262 commits, 49 contributors) | 8/10 |
| **Hermes Agent** | 50 updated / 2 closed | 50 updated / 13 merged | None | 6.5/10 |
| **IronClaw** | 8 updated / 1 closed | 31 updated / 9 merged | None (release PR #5598 pending) | 7/10 |
| **CoPaw (QwenPaw)** | 12 updated / 9 open | 28 updated / 17 open | None (stabilizing 2.0.1) | 6.5/10 |
| **NanoBot** | 1 closed | 15 updated / 9 merged | None | 7/10 |
| **NanoClaw** | 1 active | 10 updated / 3 closed | None | 6/10 |
| **PicoClaw** | 3 updated | 9 updated / 3 closed | None | 5.5/10 |
| **LobsterAI** | 3 touched / 2 closed | 6 updated / 2 merged (deps only) | None | 4/10 |
| **Moltis** | 0 | 1 open PR | None | 4/10 |
| **NullClaw / TinyClaw / ZeptoClaw** | 0 | 0 | None | N/A (inactive) |

*Health score is a composite of merge velocity, issue-response lag, P0/P1 backlog severity, release cadence, and maintainer responsiveness inferred from the digests.

## 3. OpenClaw's Position

- **Community size & throughput**: OpenClaw's 500-issue / 500-PR daily update volume is an order of magnitude above any peer; its 87-comment DeepSeek failure thread alone exceeds the entire comment volume of most other projects. It is effectively the ecosystem's reference implementation and primary testing ground.
- **Autonomous fix pipeline**: The `clawsweeper[bot]` autofix system is unique — it produces and merges production fixes (WhatsApp reactions, gateway media, failover classification) without direct maintainer authorship, giving OpenClaw a self-healing cadence peers lack.
- **Technical approach**: OpenClaw's release theme (quarantine store, crash-recoverable SQLite snapshots, rollback-writer recovery, schema-upgrade data-loss rejection) represents the most advanced state-safety architecture in the ecosystem. It also leads on subagent orchestration durability (#118360) and plugin-tool yield semantics (#101665).
- **Vulnerabilities**: Its scale means more surface area — P0 schema-downgrade data loss (#115421), a 13.7M-token auth leak (#117956), and a dense cluster of P1 session-state bugs. Notably, these are the *same* reliability categories peers are also struggling with, confirming that OpenClaw's problems are ecosystem-wide, not project-specific.

## 4. Shared Technical Focus Areas

| Focus Area | Evidence Across Projects |
|---|---|
| **No silent message/result loss** | OpenClaw (DeepSeek silent failures #116277; subagent completion durability #118360); PicoClaw (tool-failure loops #3311); ZeroClaw (declined channel precheck only showed a reaction, #9478); IronClaw (durable delivery CAS #7029); Hermes (model-switch wipes output #76870) |
| **Session/state safety & recovery** | OpenClaw (schema downgrade wipes cron DB); NanoClaw (SQLite lock contention on Docker, 29k readonly errors #3177); Hermes (`history_version` mismatch #76870); CoPaw (skill tags lost on restart #6537); OpenClaw's quarantine/snapshot release theme |
| **Provider/auth resilience & cost transparency** | Hermes (DeepSeek caching regression #77217; xAI TTS broken #73985); OpenClaw (Anthropic billing leak #117956; provider disappears from picker #109017); NanoBot (OpenAI Responses serde rejections #5214; Gemini Flash image 400s); ZeroClaw (SSE idle timeout hardening #8838); IronClaw (proxy env bypass of DNS-rebinding protection #7016) |
| **Multi-channel parity** | OpenClaw (WhatsApp backfill #50093); Hermes (WhatsApp permanent wedge #77268; Telegram group photos #47415); NanoBot (Weixin 60-min pause #5196); NanoClaw (Teams `supportsFiles: false`; Dial channel); CoPaw (OneBot/QQ delivery #6543) |
| **Performance at scale** | CoPaw (MB-level uncompressed APIs, UI freezes #6589/#6635); LobsterAI (N+1 queries #1220); NanoBot (JSONL session list acceleration #5194); Hermes (5–13s trivial-turn latency audit #77291) |
| **MCP ecosystem expansion** | Moltis (managed Git repository bundles #1183); NanoClaw (remote Streamable HTTP MCP #3092); IronClaw (custom MCP OAuth via RFC 9728 #7024) |
| **Cross-session memory/context** | OpenClaw (hybrid memory FTS regression #115001); NanoBot (cross-session search + @-mentions #5211); ZeroClaw (schema-validated memory consolidation RFC #6998) |

## 5. Differentiation Analysis

- **OpenClaw** — General-purpose reference agent; broadest channel/orchestration surface; autonomous bot-assisted maintenance; state-safety engineering as a differentiator. Targets power users and operators running production multi-agent workloads.
- **ZeroClaw** — Rust-based, architecture-RFC-driven project with the most mature governance process (explicit maintainer decision queue #8692). Focus on memory/SOP control planes, WASM plugins, and a planned OpenAI-compatible Chat Completions profile (#8603). Targets security-conscious, self-hosted operators.
- **Hermes Agent** — Distinguishes via **Desktop app** depth (installer, sidebar, updates), kanban, skills, and voice/TTS. Targets individual professionals who want a local-first desktop agent with strong CLI ergonomics.
- **IronClaw** — Rust, Wave 2 port-inversion architecture, CI coverage rigor (90% changed-line floor), WebUI trust/accuracy (removing fabricated metrics #6906). Targets developer/ops teams who prioritize architecture quality and CI governance.
- **CoPaw (QwenPaw)** — Deeply tied to the Qwen/agentscope ecosystem; strongest on console UX and multi-agent creation flows (`spawn_subagent`, creator feedback loop). Targets Chinese-ecosystem developers and multi-agent builders.
- **NanoBot** — Lightweight Python runtime with WebUI-first design and broad channel plug-ins; fast merge pipeline and quick bug fixes. Targets hobbyists/SMBs wanting a simple, self-hosted assistant.
- **NanoClaw / PicoClaw / LobsterAI** — Smaller, channel/integration-focused (SMS/voice Dial, Signal, IM/cowork) with notable localization (zh-TW, Czech, i18n) and lightweight deployment priorities.

## 6. Community Momentum & Maturity

**Tier 1 — High throughput, release trains**: **OpenClaw** (134 merges/day, beta release cycle) and **ZeroClaw** (262-commit release, RFC-driven roadmap) are the ecosystem's locomotives.

**Tier 2 — Fast iteration, thinner bus factor**: **Hermes** (13 merges/day, issues frequently paired with same-day fix PRs), **IronClaw** (9 merges/day, strong CI discipline), **CoPaw** (high contributor inflow incl. first-timers, actively stabilizing 2.0.1), **NanoBot** (cleared several months-old PRs in one day, responsive maintainers).

**Tier 3 — Moderate, review-constrained**: **PicoClaw** and **NanoClaw** have active contributors but visible stale PR queues and an open production bug (#3177, #3311) awaiting merged fixes.

**Tier 4 — Dormant/stalled**: **LobsterAI** (stale-bot-driven, dep-only merges), **Moltis** (single feature PR), and **NullClaw / TinyClaw / ZeptoClaw** (no activity).

## 7. Trend Signals

1. **"No silent failures" is the industry-wide demand.** Users across OpenClaw, PicoClaw, ZeroClaw, and Hermes are reporting scenarios where the agent *appears* to act but nothing happens. Expect **delivery guarantees, visible fallbacks, and failure telemetry** to become table stakes in every agent framework.
2. **Durable outbox/ownership patterns are emerging as the solution.** IronClaw's prepare-CAS-egress (#7029), OpenClaw's quarantine/rollback-writer, NanoClaw's single-writer rerouting (#3175), and NanoBot's shutdown cleanup (#5215) all converge on the same architecture: **exactly-once intent persisted before side effects**.
3. **Session state is a first-class reliability surface.** Schema versioning accidents (OpenClaw P0), mid-session model-switch corruption (Hermes), and filesystem-dependent SQLite (NanoClaw) show that **state migrations and storage backends need the same rigor as network protocols**.
4. **Provider proliferation is driving abstraction layers.** Users want failure-class-based provider fallback (OpenClaw #47910), OpenAI-compatible profiles (ZeroClaw #8603), provider presets (PicoClaw), and transparent cost surfaces (Hermes, OpenClaw). The 13.7M-token billing shock (#117956) is a warning bell for anyone shipping agent CLIs: **env-scrubbing must be proven, not assumed**.
5. **MCP is becoming the universal integration fabric**, with Git-based distribution (Moltis), remote-server support (NanoClaw), and OAuth discovery (IronClaw) all maturing in parallel. Developers building tool ecosystems should target MCP-first.
6. **Cross-session memory is the next UX frontier.** NanoBot's @-mentions across conversations, ZeroClaw's memory/SOP control planes, and OpenClaw's hybrid-memory regression all point to persistent, queryable context as a differentiator.
7. **Desktop/commercial polish is splitting the ecosystem.** Hermes and CoPaw are investing heavily in desktop console quality; OpenClaw's Control UI is a frequent fix target. **Value for developers**: building on any of these frameworks now means inheriting their desktop-layer debt, so evaluate UI maturity carefully.

**Bottom line for decision-makers**: choose OpenClaw for the broadest ecosystem and fastest-moving fixes (accepting scale-related instability); ZeroClaw for architectural rigor and governance; Hermes/CoPaw for desktop-first end-user products; IronClaw for Rust-native, CI-disciplined deployments; NanoBot for lightweight, low-friction self-hosting. Regardless of choice, budget engineering time for the shared unsolved problems: durable delivery, session-state versioning, and provider-failure transparency.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

## NanoBot Project Digest — 2026-08-03

### 1. Today's Overview
NanoBot saw high activity in the last 24 hours: 15 pull requests were updated, 9 of which are now closed/merged and 6 remain open. One bug issue was closed, with a matching fix PR included in the same window. No new releases were published. The day was dominated by bug fixes, WebUI/perf improvements, and provider resilience work, with several older PRs finally landing. Overall project health looks solid, with responsive maintainers and a steady merge pipeline.

### 2. Releases
No new NanoBot releases were published in this window.

### 3. Project Progress
Closed/merged PRs in the last 24 hours:

- [#5191](https://github.com/HKUDS/nanobot/pull/5191) — Register correct MIME types for static assets on Windows, fixing the JS module loading bug from [#5190](https://github.com/HKUDS/nanobot/issues/5190).
- [#5216](https://github.com/HKUDS/nanobot/pull/5216) — Fix Gemini Flash image model hints by sending them via `generationConfig.imageConfig`.
- [#5217](https://github.com/HKUDS/nanobot/pull/5217) — Show timestamps for replayed WebUI messages, including cron/proactive messages.
- [#4854](https://github.com/HKUDS/nanobot/pull/4854) — Add an opt-in RTK command rewriter for the exec tool, including sandbox-wrapping and guard integration.
- [#4833](https://github.com/HKUDS/nanobot/pull/4833) — Gate sustained goals behind an explicit runtime mode, replacing always-visible long-task tools with runtime-gated goal tools.
- [#4822](https://github.com/HKUDS/nanobot/pull/4822) — Preserve automation source metadata on streamed WebUI replies, fixing hydration badge loss.
- [#5196](https://github.com/HKUDS/nanobot/pull/5196) — Fix Weixin channel recovery after session expiry and the 60-minute pause caused by `errcode -14`.
- [#5194](https://github.com/HKUDS/nanobot/pull/5194) — Accelerate JSONL session list and thread loading in the WebUI.
- [#4021](https://github.com/HKUDS/nanobot/pull/4021) — Fix Codex provider duplicate reasoning items with dedup and retry on `400 Duplicate item`.

### 4. Community Hot Topics
No issues or PRs in this window showed notable comment/reaction counts. Activity is focused on PR churn rather than public discussion. The most significant active topics by priority and user impact are:

- **OpenAI Responses API robustness** — [#5214](https://github.com/HKUDS/nanobot/pull/5214) addresses terminal failures when the endpoint rejects request bodies with serde-style deserialization errors.
- **Gateway shutdown reliability** — [#5215](https://github.com/HKUDS/nanobot/pull/5215) targets asyncio teardown noise and stalled stops when exec sessions or MCP subprocesses are still running.
- **Cross-session workflow support** — [#5211](https://github.com/HKUDS/nanobot/pull/5211) adds searchable sessions and `@`-mentions across persisted conversations, indicating demand for more powerful multi-chat context management.

### 5. Bugs & Stability
Bugs reported or fixed in the last 24 hours, ranked by severity:

- **High: OpenAI Responses API body rejections can fail conversations terminally** — [#5214](https://github.com/HKUDS/nanobot/pull/5214) is an open P1 fix that falls back to chat completions on serde rejection. No merged fix yet.
- **High: Gateway stop can stall with asyncio teardown errors** — [#5215](https://github.com/HKUDS/nanobot/pull/5215) is an open P1 fix for deterministic cleanup of exec sessions and MCP subprocesses.
- **Medium: Gemini Flash image models return HTTP 400 for aspect-ratio/size hints** — Fixed in [#5216](https://github.com/HKUDS/nanobot/pull/5216).
- **Medium: `pip` is unavailable in `uv tool` installs, breaking plugin enable commands** — [#5213](https://github.com/HKUDS/nanobot/pull/5213) proposes a `uv` fallback and is still open.
- **Medium: Subagent results can be misinterpreted when sibling tasks are still running** — [#5152](https://github.com/HKUDS/nanobot/pull/5152) is an open regression fix to mark partial completion results.
- **Medium: Windows users cannot load the WebUI because `.js` files are served as `text/plain`** — Fixed by [#5191](https://github.com/HKUDS/nanobot/pull/5191).
- **Medium: Weixin channel enters a 60-minute pause after session expiry and ignores refreshed state** — Fixed in [#5196](https://github.com/HKUDS/nanobot/pull/5196).
- **Low/Medium: Replayed WebUI messages lost timestamps** — Fixed in [#5217](https://github.com/HKUDS/nanobot/pull/5217).
- **Low/Medium: Automation source metadata lost on streamed replies** — Fixed in [#4822](https://github.com/HKUDS/nanobot/pull/4822).
- **Low: Codex provider duplicate reasoning-item 400 errors** — Fixed in [#4021](https://github.com/HKUDS/nanobot/pull/4021).

### 6. Feature Requests & Roadmap Signals
Features and behavior changes visible in the PR pipeline:

- **Cross-session search and mentions** — [#5211](https://github.com/HKUDS/nanobot/pull/5211) is a strong candidate for the next WebUI release, enabling bounded read-only access to persisted conversations and a chat `@`-mention palette.
- **MiniMax music generation guidance** — [#5212](https://github.com/HKUDS/nanobot/pull/5212) adds discoverability for MiniMax music flows, suggesting continued provider/tooling breadth.
- **RTK command rewriter for exec** — [#4854](https://github.com/HKUDS/nanobot/pull/4854) landed, adding opt-in rewriting before sandbox wrapping.
- **Runtime-gated sustained goals** — [#4833](https://github.com/HKUDS/nanobot/pull/4833) landed, changing long-running goal tools from always-visible to explicit runtime-mode-only. This is a notable agent architecture shift.
- **Deterministic gateway shutdown** — [#5215](https://github.com/HKUDS/nanobot/pull/5215) will likely be prioritized as a P1 reliability feature.
- **Plugin installer fallback to `uv`** — [#5213](https://github.com/HKUDS/nanobot/pull/5213) would improve installs under `uv tool` environments.

### 7. User Feedback Summary
Real user pain points visible in this window:

- **Windows WebUI loading is broken out-of-the-box** due to Windows registry mapping `.js` to `text/plain`; user workaround required MIME type registration ([#5190](https://github.com/HKUDS/nanobot/issues/5190), [#5191](https://github.com/HKUDS/nanobot/pull/5191)).
- **Gemini Flash image users cannot pass size/aspect-ratio hints** without HTTP 400 errors, affecting a core image-generation workflow ([#5216](https://github.com/HKUDS/nanobot/pull/5216)).
- **Weixin users experience silent 60-minute service pauses** after session refresh; the fix recovers persisted state automatically ([#5196](https://github.com/HKUDS/nanobot/pull/5196)).
- **Users installing via the official installer with `uv` may not have `pip`**, breaking plugin enable commands ([#5213](https://github.com/HKUDS/nanobot/pull/5213)).
- **Large JSONL session histories load slowly in the WebUI**; the performance fix in [#5194](https://github.com/HKUDS/nanobot/pull/5194) addresses this directly.
- **Users want cross-session context and chat-to-chat mentions**, signaling a shift toward treating NanoBot sessions as connected, queryable memory rather than isolated threads ([#5211](https://github.com/HKUDS/nanobot/pull/5211)).

Overall, reported friction is being addressed quickly, and most bugs now have corresponding fixes. Remaining dissatisfaction is likely centered on the two open P1 issues: provider resilience and shutdown determinism.

### 8. Backlog Watch
Open PRs that need maintainer attention:

- [#5214](https://github.com/HKUDS/nanobot/pull/5214) — **P1 provider fallback** for OpenAI Responses API serde rejections; unresolved terminal failure mode.
- [#5215](https://github.com/HKUDS/nanobot/pull/5215) — **P1 gateway resource cleanup**; shutdown stalls and teardown noise.
- [#5211](https://github.com/HKUDS/nanobot/pull/5211) — **Cross-session search/mentions**; large feature with broad WebUI impact, needs review.
- [#5152](https://github.com/HKUDS/nanobot/pull/5152) — **Subagent partial completion marking**; open since 2026-07-28, making it the longest-open active PR.
- [#5213](https://github.com/HKUDS/nanobot/pull/5213) — **`uv` fallback for plugin installation**; affects `uv tool` environments.
- [#5212](https://github.com/HKUDS/nanobot/pull/5212) — **MiniMax music guidance**; additive but lower priority.

Several older PRs that had been pending since May/July were cleared this window, including [#4021](https://github.com/HKUDS/nanobot/pull/4021), [#4854](https://github.com/HKUDS/nanobot/pull/4854), [#4833](https://github.com/HKUDS/nanobot/pull/4833), and [#4822](https://github.com/HKUDS/nanobot/pull/4822). The remaining open P1s are the clearest priorities for maintainers.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-08-03

## 1. Today's Overview

Hermes Agent is seeing a high-volume maintenance and contribution day: **50 issues and 50 PRs were updated in the last 24 hours**, with **48 issues still open/active**, **2 closed**, **37 PRs open**, and **13 PRs merged/closed**. There are **no new releases** for 2026-08-03, so all recent progress is landing via PRs rather than tags/versioned releases. The project is receiving a steady stream of high-signal bug reports, including **P0/P1 regressions** around DeepSeek caching, WhatsApp reconnect behavior, Desktop app updates, and mid-session model switching. At the same time, multiple open PRs are tackling recently reported issues, indicating strong contributor velocity. Overall project health is active but stretched: many issues are converging on Desktop, gateway, provider-compatibility, and session-state reliability.

## 2. Releases

**None.**  
No new Hermes Agent release was published on 2026-08-03, so there are no changelog entries, breaking changes, or migration notes to summarize.

## 3. Project Progress

The aggregate data shows **13 PRs merged/closed in the last 24 hours**. High-visibility closed/merged PRs in the sampled data include:

- **fix(cli): persist YOLO mode across `--resume`** — [#77237](https://github.com/NousResearch/hermes-agent/pull/77237)  
  YOLO/bypass approval mode no longer resets to safe prompting after resuming a session.

- **fix(secrets): hydrate cold multiplex sources locally** — [#75263](https://github.com/NousResearch/hermes-agent/pull/75263)  
  Fixes profile-secret hydration for cold multiplex profiles, closing an auth/session-state review gap.

- **fix(kanban): make boardd runtime restart-safe** — [#77289](https://github.com/NousResearch/hermes-agent/pull/77289)  
  Moves `boardd` to an immutable release layout with a root-owned `current` pointer and dedicated systemd user.

- **Closed issue:** [#77255](https://github.com/NousResearch/hermes-agent/issues/77255) — API server `_split_provider_prefixed_model` only split on `::` instead of `@provider:model`, causing WebUI 404s; issue closed today.

Notable fix PRs opened today that are likely to land next:

- **fix(whatsapp): add timeout to `fetchLatestBaileysVersion`** — [#77298](https://github.com/NousResearch/hermes-agent/pull/77298)  
  Directly targets the WhatsApp permanent-disconnect wedge in [#77268](https://github.com/NousResearch/hermes-agent/issues/77268).

- **fix(desktop): persist message reactions config** — [#77296](https://github.com/NousResearch/hermes-agent/pull/77296)  
  Targets the silent `config.set 4002` failure in [#77241](https://github.com/NousResearch/hermes-agent/issues/77241).

- **fix(desktop): stop app-managed gateway on backend shutdown** — [#77297](https://github.com/NousResearch/hermes-agent/pull/77297)  
  Targets orphan-gateway behavior reported in [#77276](https://github.com/NousResearch/hermes-agent/issues/77276).

- **fix(tts): rewrite xAI streaming against the real WebSocket protocol** — [#77285](https://github.com/NousResearch/hermes-agent/pull/77285)  
  Targets broke xAI TTS from [#73985](https://github.com/NousResearch/hermes-agent/issues/73985).

## 4. Community Hot Topics

The most-commented issues reveal the community’s main friction points:

- **[#71837 — Duplicate branch lanes in project sidebar on Windows](https://github.com/NousResearch/hermes-agent/issues/71837)** — 6 comments  
  Desktop sidebar shows two identical branch lanes for one project. Users care about session organization and lane-id consistency.

- **[#69163 — `coder` gateway not registered after profile import](https://github.com/NousResearch/hermes-agent/issues/69163)** — 6 comments  
  `hermes profile import` migrates data but the gateway is not registered, breaking `coder gateway start`. Profile migration remains a common workflow pain point.

- **[#73985 — xAI streaming TTS can never produce audio](https://github.com/NousResearch/hermes-agent/issues/73985)** — 4 comments  
  Detailed bug report showing four independent protocol/handshake failures. A rewrite PR is already up: [#77285](https://github.com/NousResearch/hermes-agent/pull/77285).

- **[#73804 — Cron workdir jobs needlessly serialized on sequential pool](https://github.com/NousResearch/hermes-agent/issues/73804)** — 4 comments  
  Cron scheduler silently starves jobs sharing a `workdir`. Discussion focuses on scheduler design and pool partitioning.

- **[#29530 — Profiled workers need shared auth home](https://github.com/NousResearch/hermes-agent/issues/29530)** — 4 comments  
  Long-running architectural issue around OAuth state and isolated `HERMES_HOME`; risky for rotating refresh tokens.

- **[#77241 — Desktop reactions config never reaches backend](https://github.com/NousResearch/hermes-agent/issues/77241)** — 3 comments  
  UI setting is silently swallowed with `4002 unknown key`; fix PR [#77296](https://github.com/NousResearch/hermes-agent/pull/77296) is ready.

- **[#74285 — Multiplexed gateway routes DMs to sibling profile's session](https://github.com/NousResearch/hermes-agent/issues/74285)** — 3 comments  
  Session-isolation bug when a user is allowlisted on multiple Telegram bots.

## 5. Bugs & Stability

Ranked by severity, with fix PRs where visible:

### P0

- **[#77217 — DeepSeek caching on OpenCode breaks `deepseek-v4-flash` with HTTP 400](https://github.com/NousResearch/hermes-agent/issues/77217)**  
  Regression introduced by commit `6b6435a87`; OpenCode Zen rejects Anthropic-style content-block arrays. No fix PR visible in today’s sample.

### P1

- **[#76870 — Model switch mid-session triggers `history_version` mismatch, discards agent output](https://github.com/NousResearch/hermes-agent/issues/76870)**  
  All subsequent assistant turns are stored empty. No fix PR visible yet.

- **[#77268 — WhatsApp bridge wedges permanently disconnected if version fetch hangs](https://github.com/NousResearch/hermes-agent/issues/77268)**  
  Fix PR: [#77298](https://github.com/NousResearch/hermes-agent/pull/77298).

- **[#77276 — Desktop restart leaves orphan gateway on macOS](https://github.com/NousResearch/hermes-agent/issues/77276)**  
  App-managed spawn path not covered by prior fix. Fix PR: [#77297](https://github.com/NousResearch/hermes-agent/pull/77297).

- **[#77277 — Desktop in-app update loops forever on Windows](https://github.com/NousResearch/hermes-agent/issues/77277)**  
  Updater sees its own respawning backend as a blocker. No fix PR visible yet.

### P2

- **[#77241 — Desktop message reactions never reach backend](https://github.com/NousResearch/hermes-agent/issues/77241)** — Fix PR: [#77296](https://github.com/NousResearch/hermes-agent/pull/77296)
- **[#73985 — xAI streaming TTS broken on all code paths](https://github.com/NousResearch/hermes-agent/issues/73985)** — Fix PR: [#77285](https://github.com/NousResearch/hermes-agent/pull/77285)
- **[#71837 — Duplicate branch lanes in Windows Desktop sidebar](https://github.com/NousResearch/hermes-agent/issues/71837)**
- **[#69163 — Profile import/export gateway registration broken](https://github.com/NousResearch/hermes-agent/issues/69163)**
- **[#73804 — Cron workdir jobs silently serialized and starved](https://github.com/NousResearch/hermes-agent/issues/73804)**
- **[#74285 — Multiplexed gateway collapses DMs into sibling profile session](https://github.com/NousResearch/hermes-agent/issues/74285)**
- **[#74554 — Published `linux/arm64` image ships x86_64 wheels](https://github.com/NousResearch/hermes-agent/issues/74554)**
- **[#75756 — Desktop edit earlier message fails with "session not found"](https://github.com/NousResearch/hermes-agent/issues/75756)** — marked P2 but reported as urgent by the user
- **[#77255 — API server model splitter only handles `::`, not `@provider:model`](https://github.com/NousResearch/hermes-agent/issues/77255)** — closed today

### P3

- **[#77078 — Terminal selection reference intermittently missing selected text](https://github.com/NousResearch/hermes-agent/issues/77078)**
- **[#77215 — `kanban_attach` strict base64 validation too strict](https://github.com/NousResearch/hermes-agent/issues/77215)**
- **[#77216 — `kanban_attach` has no local-path option](https://github.com/NousResearch/hermes-agent/issues/77216)**
- **[#77253 — Desktop code fences without language tag not rendered](https://github.com/NousResearch/hermes-agent/issues/77253)**

## 6. Feature Requests & Roadmap Signals

Strong feature signals today center on **Desktop usability**, **usage/cost analytics**, and **agent orchestration**:

- **[#77291 — Cut per-turn latency: high reasoning effort and serial round-trips, not caching](https://github.com/NousResearch/hermes-agent/issues/77291)**  
  A performance audit of 5–13s trivial turns; likely to influence CLI/agent defaults.

- **[#73778 — Desktop: drag sessions between existing Projects](https://github.com/NousResearch/hermes-agent/issues/73778)**  
  Session organization is a recurring Desktop theme.

- **[#77221 — Desktop has no local token/cost analytics surface](https://github.com/NousResearch/hermes-agent/issues/77221)**  
  Core already meters cost; the app lacks UI.

- **[#77223 — Surface included/estimated/unknown cost buckets in aggregate views](https://github.com/NousResearch/hermes-agent/issues/77223)**
- **[#77222 — Add per-day token/cost time-series aggregation to InsightsEngine](https://github.com/NousResearch/hermes-agent/issues/77222)**

Feature PRs opened today that could land in the next version:

- **feat(agent): skill learning loop** — [#77295](https://github.com/NousResearch/hermes-agent/pull/77295)
- **feat(desktop): add `hermes desktop install` subcommand and shortcut creation** — [#77293](https://github.com/NousResearch/hermes-agent/pull/77293)
- **feat(cli): add `--reasoning` flag for per-invocation reasoning effort** — [#77288](https://github.com/NousResearch/hermes-agent/pull/77288)
- **feat(desktop): sidebar sessions open-in-tab preference** — [#77287](https://github.com/NousResearch/hermes-agent/pull/77287)
- **feat(voice): make concise response guidance configurable** — [#77290](https://github.com/NousResearch/hermes-agent/pull/77290)
- **feat: durable SMART busy-input orchestration** — [#77076](https://github.com/NousResearch/hermes-agent/pull/77076)
- **feat(web): web tool backend fallback chains** — [#30975](https://github.com/NousResearch/hermes-agent/pull/30975)

Likely next-version candidates are the already-reviewed small fixes and CLI/Desktop ergonomics: `--reasoning`, Desktop install shortcut, open-in-tab preference, reaction config persistence, xAI TTS rewrite, and WhatsApp reconnect timeout.

## 7. User Feedback Summary

The dominant user pain points are **silent failures** and **platform-specific regressions**:

- Desktop settings are sometimes accepted in UI but never reach the backend (**[#77241](https://github.com/NousResearch/hermes-agent/issues/77241)**).
- TTS providers can be fully non-functional despite shipping (**[#73985](https://github.com/NousResearch/hermes-agent/issues/73985)**).
- Session history can be corrupted by simple model switching (**[#76870](https://github.com/NousResearch/hermes-agent/issues/76870)**).
- Windows users report Desktop sidebar duplication (**[#71837](https://github.com/NousResearch/hermes-agent/issues/71837)**) and update loops (**[#77277](https://github.com/NousResearch/hermes-agent/issues/77277)**).
- ARM64 Docker users cannot run the published image at all (**[#74554](https://github.com/NousResearch/hermes-agent/issues/74554)**).
- Migration workflows are fragile: profile imports succeed but gateway registration fails (**[#69163](https://github.com/NousResearch/hermes-agent/issues/69163)**).

Positively, users and contributors are supplying high-quality root-cause analysis and TDD evidence, and many issues are paired with fix PRs the same day. The community is engaged but clearly bothered by regressions introduced in recently merged features such as DeepSeek caching, xAI TTS, and Desktop configuration handling.

## 8. Backlog Watch

Issues or PRs that appear under-attended and may need maintainer response:

- **[#29530 — Profiled workers need a shared auth home](https://github.com/NousResearch/hermes-agent/issues/29530)**  
  Open since 2026-05-20, P2, needs-decision. OAuth split-brain risk for profile isolation.

- **[#39771 — `hermes version` shows "860 commits behind" after latest tag checkout](https://github.com/NousResearch/hermes-agent/issues/39771)**  
  Open since 2026-06-05, only 1 comment. Version metadata confusion for git-tag users.

- **[#47415 — Telegram group photos without @mention are dropped](https://github.com/NousResearch/hermes-agent/issues/47415)**  
  Open since 2026-06-16, P2. Attachment handling issue in Telegram groups.

- **[#62985 — Kanban auto-decompose silently reassigns non-spawnable assignees](https://github.com/NousResearch/hermes-agent/issues/62985)**  
  Open since 2026-07-12, P2. Described as a containment bypass.

- **[#64862 — `hermes skills install` crashes with Rich MarkupError after install completes](https://github.com/NousResearch/hermes-agent/issues/64862)**  
  Open since 2026-07-15, P3. CLI crash in scan-report printing.

Older open PRs that may need review:

- **feat(web): web tool backend fallback chains** — [#30975](https://github.com/NousResearch/hermes-agent/pull/30975), open since 2026-05-23, needs-decision.
- **fix(state): strip punctuation symmetrically in `/sessions search`** — [#57982](https://github.com/NousResearch/hermes-agent/pull/57982), open since 2026-07-03.
- **fix(telegram): send local GIFs as animations** — [#63505](https://github.com/NousResearch/hermes-agent/pull/63505), open since 2026-07-13.
- **fix(prompt-size): honor platform skill filtering** — [#64467](https://github.com/NousResearch/hermes-agent/pull/64467), open since 2026-07-14.
- **fix(desktop): preserve terminal locale environment** — [#69474](https://github.com/NousResearch/hermes-agent/pull/69474), open since 2026-07-22.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-08-03

## Today’s Overview

PicoClaw shows moderate activity over the past 24 hours: 3 issues and 9 PRs were updated, with no new releases published. All 3 tracked issues remain open, while 3 PRs were closed in the window. The most significant signal is a production-impacting bug report around silent repeated tool-failure loops (#3311), which already has an open fix PR (#3312). Several older items are drifting into “stale” status, suggesting maintainer bandwidth may be stretched. Overall, the project has active contributor momentum, but triage and closure velocity appear slower than issue/PR arrival.

## Releases

No new releases were published in this window. There are no changelogs, breaking-change notes, or migration guides to summarize.

## Project Progress

Three PRs were closed/merged in this window, though none can be confirmed as merged from the provided data:

- **[#3261] Add zh-TW locale and Traditional Chinese translations** — closed after adding Taiwanese Chinese localization to the WebUI and docs.  
  https://github.com/sipeed/picoclaw/pull/3261
- **[#3310] Feat/auto pr** — closed; description is only “picoclanker did this,” suggesting an automated or housekeeping PR.  
  https://github.com/sipeed/picoclaw/pull/3310
- **[#3313] Fix: agent not able to execute shell command added to customAllowPatterns** — closed, but an identical open PR **#3314** exists, likely a replacement or duplicate.  
  https://github.com/sipeed/picoclaw/pull/3313  
  https://github.com/sipeed/picoclaw/pull/3314

Active PRs advancing features/fixes:

- **#3312** — Fix repeated identical tool failure loops.  
  https://github.com/sipeed/picoclaw/pull/3312
- **#3314** — Fix `customAllowPatterns` being overridden by default deny rules.  
  https://github.com/sipeed/picoclaw/pull/3314
- **#3299** — Add native Exa web search provider.  
  https://github.com/sipeed/picoclaw/pull/3299
- **#3297** — Harden remote prompt and exec boundaries.  
  https://github.com/sipeed/picoclaw/pull/3297
- **#3295** — Prevent `SplitMessage` hang on oversized fence headers.  
  https://github.com/sipeed/picoclaw/pull/3295
- **#3296** — Complete Czech code-wrap labels i18n.  
  https://github.com/sipeed/picoclaw/pull/3296

## Community Hot Topics

Community engagement is currently low in absolute numbers — no issue or PR shows more than 1 comment or any 👍 reactions. The most notable active threads are:

- **[#3298] [Feature] Add AI Router as an OpenAI-compatible provider preset**  
  Author explicitly discloses maintaining AI Router and offers to contribute. Users want first-class provider presets instead of manually configuring `api_base`.  
  https://github.com/sipeed/picoclaw/issues/3298

- **[#3294] `/list models` only shows the current model instead of all configured models**  
  Reported by a user who expected the command to list every item in `model_list`. Underlying need is clearer model visibility for multi-model setups.  
  https://github.com/sipeed/picoclaw/issues/3294

- **[#3311] Repeated identical tool failure loops silently to max_tool_iterations**  
  Though it has zero comments, this is the most urgent community signal: a user in production never got an answer because the agent kept retrying the same failing tool.  
  https://github.com/sipeed/picoclaw/issues/3311

The general pattern: users are pushing for better transparency (model listing, tool-failure reporting) and easier integration with third-party providers (AI Router, Exa).

## Bugs & Stability

Ranked by severity:

1. **Silent repeated tool-failure loop, no answer to user** — #3311  
   A turn can spin until `max_tool_iterations` when a tool fails identically every time, producing no reply. An open fix exists: **#3312**, which stops the turn early on repeated identical tool failures.  
   https://github.com/sipeed/picoclaw/issues/3311  
   https://github.com/sipeed/picoclaw/pull/3312

2. **`customAllowPatterns` ignored for shell commands** — #3313 / #3314  
   Commands like `git push` were blocked even when explicitly added to the exec allow list, because default deny patterns took precedence in `guardCommand`. Fix is in #3314.  
   https://github.com/sipeed/picoclaw/pull/3313  
   https://github.com/sipeed/picoclaw/pull/3314

3. **`SplitMessage` hang on oversized fenced-code headers** — #3295  
   Message splitting can hang when an opening code fence info string exceeds `maxLen`; an open PR adds a fallback raw split.  
   https://github.com/sipeed/picoclaw/pull/3295

4. **`/list models` does not list all configured models** — #3294  
   Lower severity but directly contradicts the command description “Configured models.” No linked fix yet.  
   https://github.com/sipeed/picoclaw/issues/3294

## Feature Requests & Roadmap Signals

- **Native AI Router provider preset** (#3298) — Would make PicoClaw more plug-and-play for OpenAI-compatible routers. Given the author’s willingness to contribute, this could land if maintainers accept third-party provider presets.
- **Native Exa web search provider** (#3299) — Open PR adds `tools.web` / `web_search` support with date ranges. This is a concrete roadmap signal for expanded web-search backends.
- **Remote execution hardening** (#3297) — Open security PR proposes schema v4 config migration, default-disabled remote exec, and stricter origin enforcement. This is likely a later-version breaking change.
- **i18n expansion** — Czech labels PR (#3296) and closed zh-TW locale (#3261) show ongoing localization interest. Traditional Chinese support may already be in the next release.

Most likely next-version candidates: the repeated-tool-failure fix (#3312), the `customAllowPatterns` fix (#3314), and the Exa provider PR (#3299), depending on review speed.

## User Feedback Summary

- **Pain point: invisible agent failures.** Users want the agent to surface failures instead of silently retrying for minutes. Issue #3311’s production impact makes this the top user-experience complaint.
- **Pain point: allowlist behavior is confusing and broken.** Adding commands to `customAllowPatterns` did not work in practice, undermining trust in safe shell-exec configuration.
- **Pain point: model discovery is misleading.** `/list models` showing only the active model is a clear usability gap for multi-provider setups.
- **Positive signal: contributors are active.** Multiple i18n, feature, and bug-fix PRs are moving through the pipeline, including provider integrations and security hardening.
- **Low social engagement.** With no reactions and almost no comments on issues/PRs, there is little quantitative community satisfaction data in this window.

## Backlog Watch

Items with stale labels or extended inactivity that need maintainer attention:

- **[#3298] AI Router provider preset** — open since Jul 26, stale, only 1 comment; a maintainer decision is needed to accept, reject, or request a PR.  
  https://github.com/sipeed/picoclaw/issues/3298
- **[#3294] `/list models` incomplete output** — open since Jul 25, stale, only 1 comment; should be triaged as bug or feature.  
  https://github.com/sipeed/picoclaw/issues/3294
- **[#3297] Remote prompt and exec hardening** — security-relevant PR, open since Jul 26, stale; deserves faster review.  
  https://github.com/sipeed/picoclaw/pull/3297
- **[#3295] SplitMessage hang fix** — open since Jul 26, stale; could affect reliability in long or formatted messages.  
  https://github.com/sipeed/picoclaw/pull/3295
- **[#3296] Czech i18n completion** — open since Jul 26, stale; low-risk translation PR that should be easy to merge.  
  https://github.com/sipeed/picoclaw/pull/3296
- **[#3299] Exa web search provider** — open since Jul 26, stale; feature-complete PR waiting for maintainer review.  
  https://github.com/sipeed/picoclaw/pull/3299

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-08-03

## 1. Today's Overview

NanoClaw shows a moderate development pulse on 2026-08-03: 10 PRs were updated in the last 24 hours, with 7 still open and 3 closed, while only 1 issue was active. No release was published in this window. Activity is concentrated on reliability fixes for Docker/SQLite storage, new channel integrations (Dial), MCP remote-server support, and internal cleanup. The three closed PRs suggest continued stabilization work, though older open PRs remain in review. Overall project health appears steady but with a growing backlog of long-pending feature/fix PRs.

## 2. Releases

No new releases were published in the last 24 hours. There are no release notes, breaking-change notices, or migration instructions to report.

## 3. Project Progress

Three PRs were closed/merged in the last 24 hours (exact merge status not explicit in the available data):

- [PR #3176](https://github.com/nanocoai/nanoclaw/pull/3176) — `fix(release): retry post-publish readback` — closed; addresses flaky release verification after publishing.
- [PR #301](https://github.com/nanocoai/nanoclaw/pull/301) — `feat(skill): enhance add-telegram skill with Markdown rendering, file downloads, and Linux/Docker guidance` — closed after a long pending/blocked period.
- [PR #2626](https://github.com/nanocoai/nanoclaw/pull/2626) — `fix(signal): replace silent restartService failure with explicit error` — closed; fixes [issue #2583](https://github.com/nanocoai/nanoclaw/issues/2583).

These closings indicate continued progress on channel reliability, release automation, and user-facing setup-wizard feedback.

## 4. Community Hot Topics

No comment or reaction counts were reported for any issue/PR, so activity is inferred from update timestamps, labels, and content. The most notable active items are:

- [Issue #3177](https://github.com/nanocoai/nanoclaw/issues/3177) — SQLite session database lock contention on Docker-mounted filesystems, causing 29,000+ readonly errors and delivery failures. This is a high-visibility production concern for Docker users.
- [PR #3175](https://github.com/nanocoai/nanoclaw/pull/3175) — routes command-gate denial writes through the delivery adapter instead of writing directly to `outbound.db`, addressing a single-writer violation and corruption risk.
- [PR #3092](https://github.com/nanocoai/nanoclaw/pull/3092) — adds support for remote Streamable HTTP MCP servers, a roadmap-relevant infrastructure feature.
- [PR #3041](https://github.com/nanocoai/nanoclaw/pull/3041) and [PR #3050](https://github.com/nanocoai/nanoclaw/pull/3050) — add a Dial channel adapter (SMS + AI voice calls) plus wizard/skill integration, signaling growing interest in multi-channel conversational AI.

Underlying needs center on portability across Docker/macOS/Linux filesystems, safer database write ownership, broader channel support, and more flexible MCP connectivity.

## 5. Bugs & Stability

Ranked by severity:

- **High — [Issue #3177](https://github.com/nanocoai/nanoclaw/issues/3177)** — SQLite session databases (`inbound.db`, `outbound.db`) experience severe lock contention on Docker-hosted filesystems (VirtioFS), leading to 29,000+ readonly errors and intermittent delivery failures. Root cause appears to be SQLite DELETE journal mode not propagating correctly across Docker mounts. No dedicated fix PR has appeared yet.
- **Medium/High — [PR #3175](https://github.com/nanocoai/nanoclaw/pull/3175)** — A second writer inserting into container-owned `outbound.db` violates NanoClaw's documented single-writer rule and risks corruption. The PR is an open fix that reroutes these writes through the delivery adapter.
- **Medium — [PR #2625](https://github.com/nanocoai/nanoclaw/pull/2625)** — Teams manifest hardcodes `supportsFiles: false`, which silently disables file upload UI and drops bot-side file deliveries. The fix is still open.
- **Low — [PR #3176](https://github.com/nanocoai/nanoclaw/pull/3176)** — Release post-publish readback could fail; retry logic added and closed.
- **Low — [PR #2626](https://github.com/nanocoai/nanoclaw/pull/2626)** — Silent `restartService()` failure in the Signal channel wizard is now an explicit error; closed.

## 6. Feature Requests & Roadmap Signals

No new feature-request issues were filed in this window, but open PRs signal likely roadmap directions:

- **Dial channel support** — [PR #3041](https://github.com/nanocoai/nanoclaw/pull/3041) adds SMS + AI voice calls; [PR #3050](https://github.com/nanocoai/nanoclaw/pull/3050) integrates Dial into the channel picker and wizard/skill model.
- **Remote Streamable HTTP MCP servers** — [PR #3092](https://github.com/nanocoai/nanoclaw/pull/3092) would let NanoClaw connect to remote MCP servers, expanding interoperability.
- **Template/context improvements** — [PR #3090](https://github.com/nanocoai/nanoclaw/pull/3090) prepends top-level context Markdown, likely improving prompt/context consistency.
- **Teams file delivery fix** — [PR #2625](https://github.com/nanocoai/nanoclaw/pull/2625) is technically a fix but also unblocks a user-facing feature (file uploads in Teams).
- **Skill cleanup** — [PR #3172](https://github.com/nanocoai/nanoclaw/pull/3172) removes the two Qodo skills, signaling simplification of bundled skills.

If current open PRs merge, the next NanoClaw version may include Dial integration, remote MCP support, and safer outbound delivery routing.

## 7. User Feedback Summary

Direct user feedback in this window is limited: no comments or reactions were reported on issues/PRs. Implicit pain points from the issue/PR descriptions include:

- Docker users are hitting severe SQLite database lock errors, especially on macOS/Linux mounted filesystems.
- Teams bot users may be silently missing file attachments and upload UI due to `supportsFiles: false`.
- Signal channel setup could previously fail without any visible error, confusing users.
- Command-gate denial handling posed a database corruption risk due to an extra writer.

Maintainers appear responsive: several related fixes have already been closed, while the most severe Docker lock issue (#3177) still needs a published fix.

## 8. Backlog Watch

The following older or important items may need maintainer attention:

- [PR #2625](https://github.com/nanocoai/nanoclaw/pull/2625) — open since 2026-05-27; fixes Teams file support, a user-visible bug. This is the oldest open PR in the current set.
- [PR #3050](https://github.com/nanocoai/nanoclaw/pull/3050) and [PR #3041](https://github.com/nanocoai/nanoclaw/pull/3041) — open since 2026-07-14; both are Dial-channel feature PRs awaiting review/merge.
- [PR #3090](https://github.com/nanocoai/nanoclaw/pull/3090) and [PR #3092](https://github.com/nanocoai/nanoclaw/pull/3092) — open since 2026-07-19; touch core context handling and MCP support, respectively.

The most urgent backlog item is [Issue #3177](https://github.com/nanocoai/nanoclaw/issues/3177), given the high error volume and delivery failures reported by Docker users.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-08-03

## 1. Today's Overview

Activity over the last 24 hours was high, with 8 issues updated (7 open, 1 closed) and 31 PRs updated (22 open, 9 closed/merged). No new releases were published. The project is currently focused on Wave 2 architecture documentation, outbound delivery durability, proxy/network hardening, and CI coverage correctness. A notable production gap was reported: model budget enforcement is apparently not wired into production (#7035). Overall project health is solid but uneven — many targeted, low-risk fixes are in flight, while a release PR with breaking changes continues to wait.

## 2. Releases

**None.** No new releases were published in this window.

Note: The existing release PR [#5598 chore: release](https://github.com/nearai/ironclaw/pull/5598) remains open and contains breaking API changes for `ironclaw_common` (0.5.0) and `ironclaw_skills` (0.4.0).

## 3. Project Progress

Closed/merged PRs visible in the current update set:

- [#7018 refactor(contracts): consolidate the Wave 2 port-inversion stack](https://github.com/nearai/ironclaw/pull/7018) — Closed. Consolidated the Wave 2 port-inversion stack (WS2.2, WS2.4, WS5) into one branch on `main`, superseding #7000, #7003, #7004, and #7005.
- [#7013 ci: restore the original 90% changed-line coverage floor](https://github.com/nearai/ironclaw/pull/7013) — Closed. Restored the 90% changed-line coverage threshold while keeping changed-branch LCOV mandatory without a universal branch gate.
- [#6952 ci: scope Reborn PR tests by affected area](https://github.com/nearai/ironclaw/pull/6952) — Closed. Added a deterministic affected-area planner for Reborn PR tests, including transitive workspace consumers, affected integration partitions, frontend tests, and recorded replay.

Closed issue:

- [#7015 UI bug on Staking page](https://github.com/nearai/ironclaw/issues/7015) — Closed, but the report lacked reproduction details or screenshots.

## 4. Community Hot Topics

Only one item has explicit comment activity in the provided data: [#7015 UI bug on Staking page](https://github.com/nearai/ironclaw/issues/7015) with 1 comment. Other high-signal items are active by scope and maintainer attention rather than comment count:

- [#7033 docs(target-architecture): resolve the open Wave 2 architecture decisions](https://github.com/nearai/ironclaw/pull/7033) — Core contributor, docs-only PR resolving eight open architecture decisions under explicit owner delegation.
- [#7032 docs(target-architecture): reconcile the decision record with post-Wave-2 main](https://github.com/nearai/ironclaw/pull/7032) — Audits the target-architecture docs against merged `main` and closes discrepancies left after the port-inversion stack landed.

Underlying need: the project is in a documentation/decision-settlement phase after large Wave 2 architectural changes, with an emphasis on making the docs match actual behavior.

## 5. Bugs & Stability

Severity-ranked issues reported/active today:

1. **Model budget enforcement not wired in production** — [#7035](https://github.com/nearai/ironclaw/issues/7035)  
   Daily USD caps have reportedly been unenforced since #6174. This is a live production/financial gap. No fix PR yet.

2. **Concurrent coordinators can both send the same durable delivery attempt** — [#7025](https://github.com/nearai/ironclaw/issues/7025)  
   Duplicate delivery risk before vendor egress. Fix PR: [#7029](https://github.com/nearai/ironclaw/pull/7029).

3. **Interrupted-delivery recovery can overwrite a concurrent Delivered status** — [#7017](https://github.com/nearai/ironclaw/issues/7017)  
   Potential durable-status corruption. Fix PR: [#7028](https://github.com/nearai/ironclaw/pull/7028).

4. **Ambient proxy env vars bypass DNS-rebinding protection** — [#7016](https://github.com/nearai/ironclaw/issues/7016)  
   SSRF/DNS-rebinding protection gap in `ReqwestNetworkTransport`. Fix PR: [#7027](https://github.com/nearai/ironclaw/pull/7027).

5. **Failed lazy delivery recovery is not retried within a coordinator lifetime** — [#7031](https://github.com/nearai/ironclaw/issues/7031)  
   Reliability gap in delivery recovery. No dedicated fix PR visible yet.

6. **Host-mediated egress ignores ambient proxy variables in operator diagnostics** — [#7030](https://github.com/nearai/ironclaw/issues/7030)  
   Diagnostic/reporting mismatch. Fix PR: [#7034](https://github.com/nearai/ironclaw/pull/7034).

7. **Changed-coverage gate does not run on ordinary PRs** — [#7036](https://github.com/nearai/ironclaw/issues/7036)  
   CI policy gap: first verdict lands in the merge queue. Maintainer instruction is to leave CI policy as-is for now.

8. **Staking page UI bug** — [#7015](https://github.com/nearai/ironclaw/issues/7015)  
   Low severity due to insufficient repro detail; already closed.

## 6. Feature Requests & Roadmap Signals

There are no explicit user feature requests in this snapshot, but several open PRs signal roadmap direction:

- **Durable delivery ownership** — [#7029](https://github.com/nearai/ironclaw/pull/7029) restores durable `Prepared → Sending` compare-and-swap as the sole authority for vendor egress.
- **Network hardening** — [#7027](https://github.com/nearai/ironclaw/pull/7027) disables ambient proxy discovery in the hardened transport; [#7034](https://github.com/nearai/ironclaw/pull/7034) adds diagnostic coverage for proxy settings.
- **WebUI trust and workspace previews** — [#6917](https://github.com/nearai/ironclaw/pull/6917) opens workspace file links in authenticated previews; [#6906](https://github.com/nearai/ironclaw/pull/6906) removes fabricated project metrics and shows only API-backed data.
- **Custom MCP auth** — [#7024](https://github.com/nearai/ironclaw/pull/7024) resolves custom MCP OAuth during registration via RFC 9728 metadata discovery.

Likely next-version candidates: the small, low-risk fixes #7027, #7028, #7029, and #7034 are most likely to land soon. Larger WebUI and MCP auth changes (#6917, #6906, #7024) may take longer.

## 7. User Feedback Summary

The only explicitly user-reported item is [#7015 UI bug on Staking page](https://github.com/nearai/ironclaw/issues/7015). The user did not provide screenshots or reproduction steps, making triage difficult; the issue was closed.

Indirect user-pain signals from PRs:

- [#6906](https://github.com/nearai/ironclaw/pull/6906) — Users were shown fabricated spend, gate, failure, thread, activity, and health metrics; the fix removes all non-API-backed data, indicating a trust/accuracy problem in the Projects overview.
- [#6917](https://github.com/nearai/ironclaw/pull/6917) — Users need workspace Markdown links to open securely through authenticated, thread-scoped attachment previews.

## 8. Backlog Watch

- [#5598 chore: release](https://github.com/nearai/ironclaw/pull/5598) — Open since 2026-07-03. This release PR contains breaking API changes for `ironclaw_common` and `ironclaw_skills`; it has been pending for over a month and likely needs maintainer action.
- [#5981 Reborn queued-message steering](https://github.com/nearai/ironclaw/pull/5981) — Open since 2026-07-11. Large XL feature, forward-ported and race-fixed; appears ready for continued review.
- [#6917 fix(webui): open workspace file links in authenticated previews](https://github.com/nearai/ironclaw/pull/6917) — Open since 2026-07-30, large PR, still being iterated.
- [#6906 fix: show only API-backed project data](https://github.com/nearai/ironclaw/pull/6906) — Open since 2026-07-30, large UI fix with human verification; remains under review.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

## 1. Today's Overview

LobsterAI activity in the window ending 2026-08-03 is low but not silent: no new releases, 3 issues touched (1 open, 2 closed), and 6 PRs updated (4 open, 2 closed). Most of the listed items carry `[stale]` labels and were last updated by the stale-bot on 2026-08-02, suggesting routine maintenance rather than new development momentum. Notable open PRs remain queued for review, especially around IM handler fixes, cowork performance, and scheduled-task sorting. No feature PRs were merged in this window; all closed PRs were dependency upgrades.

## Releases

No new releases were published in this window.

## Project Progress

No feature branches were merged today. The only closed PRs were automated dependency bumps:

- [#1285](https://github.com/netease-youdao/LobsterAI/pull/1285) — `chore(deps-dev)`: bump `concurrently` from 8.2.2 to 9.2.1 (closed)
- [#1286](https://github.com/netease-youdao/LobsterAI/pull/1286) — `chore(deps-dev)`: bump `tailwindcss` from 3.4.19 to 4.2.2 (closed)

Meaningful work is still waiting in open PRs:

- [#1215](https://github.com/netease-youdao/LobsterAI/pull/1215) — fix(im): always rebuild chat handler on `setConfig` to avoid stale IM state
- [#1218](https://github.com/netease-youdao/LobsterAI/pull/1218) — fix(定时任务): refactor task list sorting so newly created tasks appear in predictable positions
- [#1219](https://github.com/netease-youdao/LobsterAI/pull/1219) — perf(cowork): eliminate unnecessary re-renders in session list/detail views
- [#1220](https://github.com/netease-youdao/LobsterAI/pull/1220) — perf(cowork): eliminate N+1 queries in `recentChats()` and `conversationSearch()`

## Community Hot Topics

The most commented items were both issues with 2 comments each:

- [#1287](https://github.com/netease-youdao/LobsterAI/issues/1287) — [closed/stale] IM robot connectivity test passes even when `appkey`, `appsecret`, and `aes key` are all set to `"1"`. Users need trustworthy validation of IM credentials, not a false positive.
- [#1289](https://github.com/netease-youdao/LobsterAI/issues/1289) — [closed/stale] Feature request to add fold/expand for long code blocks. Users want better readability when AI outputs 15–200+ line code blocks.

The open PRs on cowork performance and scheduled-task sorting also reflect broader community interest in smoother, more responsive UX. None of the PRs had public comments in this window.

## Bugs & Stability

Ranked by severity:

1. **High — [#1217](https://github.com/netease-youdao/LobsterAI/issues/1217)** [open/stale]  
   Intermittent gateway restarts during normal use on Windows 10, occurring roughly 3–5 times per day. Logs were attached. No fix PR is linked yet. This is the most impactful open stability issue.

2. **Medium — [#1287](https://github.com/netease-youdao/LobsterAI/issues/1287)** [closed/stale]  
   IM robot connectivity checker accepts invalid credentials and still reports success. This is a configuration-validation bug that can mislead users. It was stale-closed without a visible merged fix.

Relatedly, open PR [#1215](https://github.com/netease-youdao/LobsterAI/pull/1215) attempts to fix stale chat-handler state after platform-specific IM config saves, which is adjacent to IM reliability issues.

## Feature Requests & Roadmap Signals

- [#1289](https://github.com/netease-youdao/LobsterAI/issues/1289) requests automatic code-block folding beyond the existing 200-line / 20,000-character limit. This is a strong UX candidate for the next renderer-related release.
- [#1218](https://github.com/netease-youdao/LobsterAI/pull/1218) signals roadmap work on scheduled-task list usability: deterministic ordering by creation/execution time instead of random UUID ordering.
- [#1219](https://github.com/netease-youdao/LobsterAI/pull/1219) and [#1220](https://github.com/netease-youdao/LobsterAI/pull/1220) point to active performance improvements in cowork session list/detail rendering and database query efficiency.

If these PRs are merged, the next version is likely to include better task-list ordering, fewer UI freezes during streaming output, and reduced query load.

## User Feedback Summary

- Users find long AI-generated code blocks painful to navigate; there is clear demand for collapsible code sections.
- The IM connectivity test is considered unreliable when obviously invalid inputs still pass.
- Intermittent gateway restarts disrupt real workflows and are particularly frustrating because they are hard to reproduce.
- Contributor activity around memoization and N+1 query removal suggests users/developers are noticing performance degradation in large session histories.

Overall, feedback points toward improving trust in configuration tools and smoothing out longer-session UX.

## Backlog Watch

Items that may need maintainer attention:

- [#1217](https://github.com/netease-youdao/LobsterAI/issues/1217) — open bug, last updated only by stale-bot; no maintainer response or fix linked.
- [#1215](https://github.com/netease-youdao/LobsterAI/pull/1215) — open IM handler fix, stale since April 1, no comments.
- [#1218](https://github.com/netease-youdao/LobsterAI/pull/1218) — open scheduled-task sorting fix, stale, no maintainer review.
- [#1219](https://github.com/netease-youdao/LobsterAI/pull/1219) — open cowork re-render performance PR, stale, no comments.
- [#1220](https://github.com/netease-youdao/LobsterAI/pull/1220) — open N+1 query fix for cowork, stale, no comments.
- [#1287](https://github.com/netease-youdao/LobsterAI/issues/1287) and [#1289](https://github.com/netease-youdao/LobsterAI/issues/1289) were stale-closed; if still relevant, they should be reopened or explicitly tracked.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-08-03

## 1. Today's Overview
Project activity is minimal today: no issues were updated in the last 24 hours, and no new releases were published. The only meaningful signal is one open pull request, #1183, which was updated today and introduces a substantial feature around managed repository bundles for MCP servers. No PRs were merged or closed, indicating the project is in a low-activity or review-pending phase. Overall, the repository appears stable but quiet, with the team focusing on a single significant feature rather than bug-fix churn.

## 2. Releases
No new releases or release notes were published in the last 24 hours. This section is omitted.

## 3. Project Progress
No pull requests were merged or closed today. The one active PR is:

- **[#1183 [OPEN] feat(mcp): add managed repository bundles](https://github.com/moltis-org/moltis/pull/1183)** — Created 2026-08-02, updated 2026-08-03  
  This PR proposes adding managed Git repository bundles for MCP servers, with support for discovering, previewing, installing, updating, and removing servers. It also includes HTTPS Git credentials, SSH transport, vault lifecycle integration, imported repository-backed MCP configurations, and workflows across CLI/RPC/web UI, plus database migrations. Although not merged, it represents the current main development thrust.

## 4. Community Hot Topics
There is no significant issue/PR discussion volume today. The only updated PR, **[#1183](https://github.com/moltis-org/moltis/pull/1183)**, has no recorded comments or reactions in this data. Its feature scope suggests an underlying need for:

- Declarative, Git-based management of MCP servers.
- Secure credential handling via HTTPS and SSH.
- Integration with the existing vault lifecycle.
- Consistent management via CLI, RPC, and web UI.

This likely points to user demand for reusable, versioned MCP server configurations that can be shared across environments.

## 5. Bugs & Stability
No bug reports, crashes, regressions, or stability issues were reported today. There are no open issues in the latest data, and no fix PRs were updated beyond the feature PR. No stability concerns are visible.

## 6. Feature Requests & Roadmap Signals
The main roadmap signal is **[PR #1183](https://github.com/moltis-org/moltis/pull/1183)**. If merged, it will add:

- Managed Git repository bundles for MCP servers.
- Discovery, preview, install, update, and removal workflows.
- Support for HTTPS Git credentials and SSH transport.
- Vault lifecycle integration for MCP server configuration.
- Imported repository-backed MCP configurations.
- CLI/RPC/web UI coverage and related database changes.

Given the breadth of the PR, it is likely intended for the next minor/major release. Further user-driven feature requests are not present in this dataset.

## 7. User Feedback Summary
No explicit user feedback is available from the last 24 hours (no issues or comments). The existence of PR #1183 implies a user/development need for easier MCP server lifecycle management through Git repositories, but there is insufficient data to assess satisfaction or pain points beyond that.

## 8. Backlog Watch
No long-unanswered issues are present in the dataset. The PR requiring attention is:

- **[#1183 feat(mcp): add managed repository bundles](https://github.com/moltis-org/moltis/pull/1183)** — Open for at least 1 day, updated today. Maintainers should review it to prevent the PR from stalling, especially since it touches database migrations and multiple interfaces (CLI, RPC, web UI).

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-08-03

## 1. Today's Overview

QwenPaw (CoPaw) shows high maintenance activity: 12 issues and 28 PRs were updated in the last 24 hours, with 9 issues still open and 17 PRs open. The project is healthy in terms of contributor inflow — several first-time contributors have open or recently closed PRs, especially around bug fixes for console UI, ACP transport, and agentscope compatibility. No new release was published today; all activity is concentrated on stabilising 2.0.1 and merging pending fixes. Critical-user-facing bugs such as UI freezes and slow-network console failures are being addressed in PRs, though some remain unreviewed.

## 2. Releases

No new releases were published on 2026-08-03.

## 3. Project Progress

The following PRs were closed/merged today or in the last 24 hours:

- [#6609 — Fix spawn subagent schema](https://github.com/agentscope-ai/QwenPaw/pull/6609) (first-time contributor): Fixes schema inference for `spawn_subagent` by replacing `Optional[list | str]` with `list | str | None`, making the `batch` parameter correctly optional.
- [#6543 — feat(onebot): improve outbound text and media delivery](https://github.com/agentscope-ai/QwenPaw/pull/6543) (first-time contributor): Cleans text formatting and sends local media properly for OneBot/QQ integration.
- [#6637 — Fix/console large tool output UI freeze](https://github.com/agentscope-ai/QwenPaw/pull/6637): Fixes [#6589](https://github.com/agentscope-ai/QwenPaw/issues/6589) by skipping Prism highlighting for large outputs and truncating display to head/tail segments.
- [#6639 — fix(console): stop stubbing node_modules CSS in real builds](https://github.com/agentscope-ai/QwenPaw/pull/6639): Fixes production/dev/Tauri builds stripping monaco-editor CSS, which caused a floating white input box in the coding editor.
- [#6640 — feat(creator): rejection feedback loop, overlay stacking, structured logging, and runtime hardening](https://github.com/agentscope-ai/QwenPaw/pull/6640): Adds structured undo feedback, persisted review decisions, and runtime hardening. Note: same-titled PR [#6641](https://github.com/agentscope-ai/QwenPaw/pull/6641) is still open and may be a follow-up/duplicate.
- [#6521 — fix(console): surface OMP loop modes in slash menu with i18n and inline Markdown](https://github.com/agentscope-ai/QwenPaw/pull/6521): Exposes loop/plugin modes in chat slash autocomplete.

These closures indicate steady progress on console correctness, tool-output robustness, and community integration channels.

## 4. Community Hot Topics

Comment activity was concentrated on bug reports rather than feature discussions:

- [#6537 — Skill tags disappear on restart](https://github.com/agentscope-ai/QwenPaw/issues/6537) — 11 comments, closed. Strong community engagement around a regression: tags saved via API are lost during manifest reconciliation. This highlights user sensitivity to persisted UI configuration.
- [#6589 — execute_shell_command large output freezes UI](https://github.com/agentscope-ai/QwenPaw/issues/6589) — 3 comments, closed. An extremely disruptive Windows-specific bug; the closure of fix PR [#6637](https://github.com/agentscope-ai/QwenPaw/pull/6637) should be well received.
- [#6612 — QwenPaw 2.0.1 incompatible with agentscope 2.0.4.post1](https://github.com/agentscope-ai/QwenPaw/issues/6612) — 2 comments, open. Reports proactive crashes (`Msg.content` type) and a tool-permission deadlock; a fix PR [#6615](https://github.com/agentscope-ai/QwenPaw/pull/6615) is pending.
- Several issues with 1 comment each still represent important community signals: [#6635](https://github.com/agentscope-ai/QwenPaw/issues/6635), [#6633](https://github.com/agentscope-ai/QwenPaw/issues/6633) (slow-network console failures), [#6621](https://github.com/agentscope-ai/QwenPaw/issues/6621) (multi-agent discoverability), and [#6625](https://github.com/agentscope-ai/QwenPaw/issues/6625) (ACP race causing lost text output).

Underlying needs: users are asking for more robust handling of large data, better dependency-version compatibility, and clearer multi-agent onboarding.

## 5. Bugs & Stability

Ranked roughly by severity/impact:

1. **UI freeze on large shell output** — [#6589](https://github.com/agentscope-ai/QwenPaw/issues/6589) (closed, fixed by [#6637](https://github.com/agentscope-ai/QwenPaw/pull/6637)). Critical desktop usability bug when `execute_shell_command` returns tens of thousands of lines.
2. **`ToolCallBlock` has no field `extra_content`** — [#6619](https://github.com/agentscope-ai/QwenPaw/issues/6619). Crashes streaming responses for Gemini tool calls with agentscope 2.0.4.post1. Fix PR: [#6620](https://github.com/agentscope-ai/QwenPaw/pull/6620).
3. **QwenPaw + agentscope incompatibility: proactive crashes and tool-permission deadlock** — [#6612](https://github.com/agentscope-ai/QwenPaw/issues/6612). Blocks use of latest agentscope. Fix PR: [#6615](https://github.com/agentscope-ai/QwenPaw/pull/6615).
4. **ACP delegate returns “completed without text output” on notification/prompt race** — [#6625](https://github.com/agentscope-ai/QwenPaw/issues/6625). Fix PR: [#6623](https://github.com/agentscope-ai/QwenPaw/pull/6623).
5. **Console pages fail on slow networks due MB-level uncompressed APIs and fixed 30s timeout** — [#6635](https://github.com/agentscope-ai/QwenPaw/issues/6635) and [#6633](https://github.com/agentscope-ai/QwenPaw/issues/6633). Fix PR [#6636](https://github.com/agentscope-ai/QwenPaw/pull/6636) adds pagination and GZip for chat history; no PR yet for skills list payload.
6. **Multi-line shell command newlines folded to spaces + Linux PIPE background-process hang** — [#6565](https://github.com/agentscope-ai/QwenPaw/issues/6565). Fix PR: [#6566](https://github.com/agentscope-ai/QwenPaw/pull/6566).
7. **Auto-compression does not trigger `summarize_when_compact` memory flow** — [#6624](https://github.com/agentscope-ai/QwenPaw/issues/6624). Fix PR: [#6629](https://github.com/agentscope-ai/QwenPaw/pull/6629).
8. **Skill tags disappear on restart** — [#6537](https://github.com/agentscope-ai/QwenPaw/issues/6537) (closed; regression of #3270).
9. **Misplaced cursor UI in Coding Mode editor** — [#6547](https://github.com/agentscope-ai/QwenPaw/issues/6547). Likely related to the CSS-stub issue fixed in [#6639](https://github.com/agentscope-ai/QwenPaw/pull/6639).
10. **CI “Real behavior proof” gate strips fenced Evidence blocks** — [#6626](https://github.com/agentscope-ai/QwenPaw/issues/6626). Process-level bug affecting contributor PRs.

## 6. Feature Requests & Roadmap Signals

- **Multi-agent collaboration discoverability** — [#6621](https://github.com/agentscope-ai/QwenPaw/issues/6621) asks for default-agent-to-agent invocation guidance and better documentation/onboarding.
- **User context transparency** — PR [#6525](https://github.com/agentscope-ai/QwenPaw/pull/6525) proposes passing `user_id`/`user_name`/`channel` metadata through Chat API → Agent → Tool → MCP → SKILL CLI.
- **Provider discovery and model management unification** — PR [#6302](https://github.com/agentscope-ai/QwenPaw/pull/6302) is a large open feature for unifying provider discovery, routing, and Agent controls.
- **Creator/agent-generator rejection feedback loop** — PR [#6641](https://github.com/agentscope-ai/QwenPaw/pull/6641) (and closed [#6640](https://github.com/agentscope-ai/QwenPaw/pull/6640)) adds structured undo/regenerate feedback, overlay stacking, and runtime hardening.
- **AI review bot enhancement** — PR [#6550](https://github.com/agentscope-ai/QwenPaw/pull/6550) improves the CI review bot by precomputing per-file change maps and reducing false alarms.

Likely next-version candidates: chat-history pagination/GZip, large-tool-output display protection, scroll-compression summarization fix, ACP race fix, and agentscope 2.0.4.post1 compatibility patches.

## 7. User Feedback Summary

Real user pain points this week centred on **stability and trust**:

- Users on slow networks are unable to open Skills or chat history pages; one report ([#6635](https://github.com/agentscope-ai/QwenPaw/issues/6635), [#6633](https://github.com/agentscope-ai/QwenPaw/issues/6633)) suggests API payloads are uncompressed multi-megabyte responses.
- Desktop users experienced a hard UI freeze that required force-quitting the app ([#6589](https://github.com/agentscope-ai/QwenPaw/issues/6589)).
- Users of `agentscope==2.0.4.post1` find qwenpaw 2.0.1 broken in proactive/memory workflows ([#6612](https://github.com/agentscope-ai/QwenPaw/issues/6612), [#6619](https://github.com/agentscope-ai/QwenPaw/issues/6619)).
- One user reported 50+ rounds of multi-agent debugging before discovering that Default Agent does not call other agents unless explicitly instructed ([#6621](https://github.com/agentscope-ai/QwenPaw/issues/6621)). This is a documentation/onboarding complaint rather than a code bug.
- Chinese-speaking users are active and filing detailed reproduction reports; maintainers should ensure bilingual triage continues.

Satisfaction signals: multiple first-time contributors are submitting fixes; several high-severity bugs have closed PRs within 24 hours, which suggests responsive maintainership.

## 8. Backlog Watch

Issues/PRs that appear important but may need maintainer attention:

- **PR [#6302 — Unify provider discovery, model metadata, routing, and agent controls](https://github.com/agentscope-ai/QwenPaw/pull/6302)** — open since 2026-07-21, broad architectural change; needs careful review and roadmap alignment.
- **PR [#6525 — User context transparent passthrough](https://github.com/agentscope-ai/QwenPaw/pull/6525)** — open since 2026-07-28; touches multi-layer data flow and may need security review.
- **PR [#6550 — Enhance AI review bot](https://github.com/agentscope-ai/QwenPaw/pull/6550)** — open since 2026-07-29; CI infrastructure change that could reduce false alarms on PRs.
- **PR [#6566 — Fix shell newline-to-space and PIPE hang](https://github.com/agentscope-ai/QwenPaw/pull/6566)** — open since 2026-07-30; directly fixes a long-standing Unix shell bug.
- **PRs fixing critical compatibility bugs**: [#6615](https://github.com/agentscope-ai/QwenPaw/pull/6615), [#6620](https://github.com/agentscope-ai/QwenPaw/pull/6620), [#6623](https://github.com/agentscope-ai/QwenPaw/pull/6623), [#6628](https://github.com/agentscope-ai/QwenPaw/pull/6628), [#6629](https://github.com/agentscope-ai/QwenPaw/pull/6629) — all are open and deserve review priority.
- **Issue [#6626 — CI Evidence gate strips fenced blocks](https://github.com/agentscope-ai/QwenPaw/issues/6626)** — open since 2026-08-01; could discourage contributors if not addressed quickly.
- **Issue [#6621 — Multi-agent guidance missing](https://github.com/agentscope-ai/QwenPaw/issues/6621)** — needs a documentation response, not just a code fix.

Overall, the project is in an active stabilisation phase; the main risk is the growing backlog of reviewed-but-unmerged compatibility and performance PRs.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-08-03

## Today’s Overview

ZeroClaw had a very active 24 hours: 50 issues and 50 PRs were updated, with 13 issues closed and 10 PRs merged/closed. A new maintenance release, **v0.8.4**, is now available, spanning 262 commits from 49 contributors and focused on hardening memory/SOP control planes, provider/channel reliability, sandbox/credential boundaries, and the desktop/release pipeline. Issue activity is currently dominated by architectural RFCs and governance trackers rather than routine bug reports, but there is also a P0 webhook-auth bug and several P1 CI/tooling bugs still open. Overall project health looks stable: the maintenance train has shipped, accepted fixes are landing, and the main bottleneck is the maintainer decision queue for a growing backlog of RFCs.

---

## Releases

### [v0.8.4](https://github.com/zeroclaw-labs/zeroclaw/releases/tag/v0.8.4)

v0.8.4 is described as a maintenance and hardening release:

- **262 commits** from **49 contributors**
- Expands the **memory and SOP control planes**
- Improves **provider and channel reliability**
- Strengthens **sandbox and credential boundaries**
- Includes **desktop and release pipeline** hardening

No explicit breaking changes or migration notes are stated in the release excerpt. The v0.8.4 maintenance tracker ([#8357](https://github.com/zeroclaw-labs/zeroclaw/issues/8357)) is now closed.

---

## Project Progress

Closed/merged PRs visible in the top-20 activity list:

- [#9037](https://github.com/zeroclaw-labs/zeroclaw/pull/9037) — `fix(runtime)`: strip trailing provider terminal markers from streamed assistant text
- [#8838](https://github.com/zeroclaw-labs/zeroclaw/pull/8838) — `fix(providers)`: harden SSE completion and idle timeouts
- [#9519](https://github.com/zeroclaw-labs/zeroclaw/pull/9519) — `fix(gateway)`: serialize config writes so a flush can’t erase concurrent updates
- [#9478](https://github.com/zeroclaw-labs/zeroclaw/pull/9478) — `fix(channels)`: notify the sender when the reply-intent precheck declines

Related closed issues also indicate completed work:

- [#8997](https://github.com/zeroclaw-labs/zeroclaw/issues/8997) — config validation warning for non-existent `peer_groups.*.channel` refs
- [#9162](https://github.com/zeroclaw-labs/zeroclaw/issues/9162) — refactor duplicated OAuth-refresh retry loop into `oauth_common`
- [#8847](https://github.com/zeroclaw-labs/zeroclaw/issues/8847) — fix `cargo test --doc` rustdoc theme flag failure
- [#9465](https://github.com/zeroclaw-labs/zeroclaw/issues/9465) — fixed by [#9478](https://github.com/zeroclaw-labs/zeroclaw/pull/9478)

---

## Community Hot Topics

The most active issues are RFCs and governance trackers:

- [#6808](https://github.com/zeroclaw-labs/zeroclaw/issues/6808) — **17 comments** — RFC: Work Lanes, Board Automation, and Label Cleanup
- [#8603](https://github.com/zeroclaw-labs/zeroclaw/issues/8603) — **15 comments** — RFC: ZeroClaw Chat Completions profile
- [#7141](https://github.com/zeroclaw-labs/zeroclaw/issues/7141) — **9 comments** — RFC: Pluggable inbound authentication and canonical principals
- [#8303](https://github.com/zeroclaw-labs/zeroclaw/issues/8303) — **9 comments, 1 👍** — RFC: Goal mode for bounded autonomous session work
- [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) — **8 comments** — Tracker: Maintainer decision queue for RFCs and design issues

The underlying demand is clear: users want **OpenAI-compatible API access** ([#8603](https://github.com/zeroclaw-labs/zeroclaw/issues/8603)), **stronger security ownership** ([#7141](https://github.com/zeroclaw-labs/zeroclaw/issues/7141), [#7142](https://github.com/zeroclaw-labs/zeroclaw/issues/7142)), **durable autonomous execution** ([#8303](https://github.com/zeroclaw-labs/zeroclaw/issues/8303)), and **better maintainer governance** ([#6808](https://github.com/zeroclaw-labs/zeroclaw/issues/6808), [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692)).

---

## Bugs & Stability

Ranked by severity:

### P0 / Security risk
- [#9565](https://github.com/zeroclaw-labs/zeroclaw/issues/9565) — **S0 data loss / security risk**: gateway webhook handlers for WhatsApp Cloud, Linq, and WATI do **not fail closed**; attacker-controllable messages can be dispatched into the agent without authenticating the caller. Still open/in-progress. PR [#9571](https://github.com/zeroclaw-labs/zeroclaw/pull/9571) removes the WATI channel, but the broader WhatsApp/Linq handlers remain a concern.

### P1
- [#9690](https://github.com/zeroclaw-labs/zeroclaw/issues/9690) — `Containerfile` StageX pin ships rustc 1.95.0, below the declared MSRV; the all-features Docker variant has been unbuildable since 2026-07-08.
- [#9672](https://github.com/zeroclaw-labs/zeroclaw/issues/9672) — all three `cron add` CLI help examples fail as printed, and the empty-state hint prints a fourth broken form.
- [#9624](https://github.com/zeroclaw-labs/zeroclaw/issues/9624) — plugin registry WIT pin diverges from `master` and breaks published WASM components.
- [#9676](https://github.com/zeroclaw-labs/zeroclaw/issues/9676) — closed; described the all-features Docker publishing failure after the MSRV bump, with follow-up tracked by [#9690](https://github.com/zeroclaw-labs/zeroclaw/issues/9690).

### P2 / P3 (closed)
- [#8578](https://github.com/zeroclaw-labs/zeroclaw/issues/8578) — closed: on startup failure, `zerocode` does not terminate the process.
- [#9465](https://github.com/zeroclaw-labs/zeroclaw/issues/9465) — closed: declined channel precheck produced only a reaction; fixed by [#9478](https://github.com/zeroclaw-labs/zeroclaw/pull/9478).

---

## Feature Requests & Roadmap Signals

Several visible RFCs are likely to shape v0.9.0 and beyond:

- [#8603](https://github.com/zeroclaw-labs/zeroclaw/issues/8603) — **Chat Completions profile** for OpenAI-protocol clients (Open WebUI, LobeChat, LangChain, etc.). High community interest and likely a major integration milestone.
- [#8303](https://github.com/zeroclaw-labs/zeroclaw/issues/8303) — **Goal mode** for bounded, durable autonomous session work.
- [#9487](https://github.com/zeroclaw-labs/zeroclaw/issues/9487) — **Runtime-owned conversation sessions** with transport/surface adapters.
- [#9488](https://github.com/zeroclaw-labs/zeroclaw/issues/9488) — **Unified attachment architecture** for web chat and channels.
- [#7822](https://github.com/zeroclaw-labs/zeroclaw/issues/7822) — **WASM plugin lifecycle hook subscriptions**.
- [#7232](https://github.com/zeroclaw-labs/zeroclaw/issues/7232) — **Structured observability**: rich events, OTel trace correlation, bridge refactoring.
- [#6998](https://github.com/zeroclaw-labs/zeroclaw/issues/6998) — **Schema-validated memory consolidation** with bounded fallback.
- [#9644](https://github.com/zeroclaw-labs/zeroclaw/issues/9644) — propose **retiring the Lucid memory connector** at v0.9.0.
- [#9621](https://github.com/zeroclaw-labs/zeroclaw/issues/9621) — **staged opt-in product telemetry** with operator-reviewed reports.

The v0.8.4 maintenance train is complete, so these are likely candidates for the v0.9.0 cycle. [#7142](https://github.com/zeroclaw-labs/zeroclaw/issues/7142) explicitly targets v0.9.0 security architecture.

---

## User Feedback Summary

User pain points visible in this batch:

- **Security fail-closed expectations**: webhook handlers must authenticate callers before dispatching messages ([#9565](https://github.com/zeroclaw-labs/zeroclaw/issues/9565)).
- **CLI/docs quality**: `cron add` help examples are broken in multiple ways, which directly hurts operator onboarding ([#9672](https://github.com/zeroclaw-labs/zeroclaw/issues/9672)).
- **Channel UX**: when the reply-intent precheck declines a message, users saw only a reaction and thought the agent was broken. This was fixed in [#9478](https://github.com/zeroclaw-labs/zeroclaw/pull/9478).
- **Packaging friction**: the all-features Docker image has been unbuildable for weeks due to an MSRV/container pin mismatch ([#9690](https://github.com/zeroclaw-labs/zeroclaw/issues/9690)).
- **Provider compatibility**: terminal markers like `<eom>` leaking into transcripts and channel delivery were fixed by stripping them from streamed responses ([#9037](https://github.com/zeroclaw-labs/zeroclaw/pull/9037)).

On the positive side, the community is actively contributing hardening fixes and the v0.8.4 release reflects broad contributor momentum.

---

## Backlog Watch

Important items still awaiting maintainer attention:

- [#6808](https://github.com/zeroclaw-labs/zeroclaw/issues/6808) — RFC: Work Lanes, Board Automation, and Label Cleanup; open since May, needs maintainer review.
- [#7141](https://github.com/zeroclaw-labs/zeroclaw/issues/7141) — RFC: Pluggable inbound authentication; P1, needs maintainer review.
- [#7142](https://github.com/zeroclaw-labs/zeroclaw/issues/7142) — RFC: Runtime-owned security decision pipeline; targeted at v0.9.0, needs maintainer review.
- [#6998](https://github.com/zeroclaw-labs/zeroclaw/issues/6998) — RFC: Schema-validated memory consolidation; needs maintainer review.
- [#7232](https://github.com/zeroclaw-labs/zeroclaw/issues/7232) — RFC: Structured Observability Enhancement; needs maintainer review.
- [#7822](https://github.com/zeroclaw-labs/zeroclaw/issues/7822) — RFC: WASM plugin lifecycle hook subscriptions; needs maintainer review.
- [#8303](https://github.com/zeroclaw-labs/zeroclaw/issues/8303) — RFC: Goal mode for bounded autonomous session work; needs maintainer review.
- [#8603](https://github.com/zeroclaw-labs/zeroclaw/issues/8603) — RFC: Chat Completions profile; high community interest, needs maintainer review.

These are not inactive — most have recent updates — but they sit in the maintainer decision queue ([#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692)) and need explicit accept/reject/defer decisions.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/boom7sss/agents-radar).*