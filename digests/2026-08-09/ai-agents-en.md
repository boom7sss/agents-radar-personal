# OpenClaw Ecosystem Digest 2026-08-09

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-08-09 02:08 UTC

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

# OpenClaw Project Digest — 2026-08-09

## 1. Today's Overview

Very high activity: 500 issues and 500 PRs were updated in the last 24 hours, with 52 issues closed and 176 PRs merged/closed. Two security-hardening patch releases shipped (v2026.6.33, v2026.6.34) tightening browser/network boundaries and secret-redaction behavior. The tracker remains dominated by reliability concerns — silent message/completion loss across Telegram, WhatsApp, Slack, WeChat, and Feishu, plus P0 gateway memory-leak and startup regressions — which together account for most high-comment threads. Maintainer throughput is strong: PRs from steipete, vincentkoc, VACInc, and others advanced session-archiving, auditability, pairing, and channel-delivery fixes, several already merged.

## 2. Releases

Two new releases this period, both incremental security-hardening patches. No breaking changes or migration notes were announced.

- **v2026.6.34** — Safer browser and network boundaries: sandboxed browser routes, trusted DNS targets, custom browser origins, and loopback provider endpoints now reject unsafe access paths. Thanks @eleqtrizit, @brunowowk, @mosidevv, @pgondhi987. ([release](https://github.com/openclaw/openclaw/releases/tag/v2026.6.34))
- **v2026.6.33** — Safer network and secret boundaries: provider streams, Discord REST responses, browser fetches, OAuth paths, and logs now cap hostile response sizes and keep Telegram credentials out of diagnostics. Thanks @wangmiao0668000666, @Alix-007. ([release](https://github.com/openclaw/openclaw/releases/tag/v2026.6.33))

## 3. Project Progress

176 PRs merged/closed in the last 24h. Notable merges from the top-activity list:

- **#119511** — fix(sessions): archive cron-run transcripts pruned by `tasks maintenance`. Fixes data-loss bug #119269, where transcript rows were hard-deleted without the compressed `.deleted` archive every other production removal path writes. ([PR](https://github.com/openclaw/openclaw/pull/119511))
- **#120802** — fix(windows): preserve configured child env overrides across key casing (affected command discovery, MCP stdio servers, local/node-host catalogs). ([PR](https://github.com/openclaw/openclaw/pull/120802))
- **#120813** — fix(mistral): reset transcription state after WebSocket reconnect, preventing stale partial text from crossing into a new provider session. ([PR](https://github.com/openclaw/openclaw/pull/120813))
- **#120738** — fix(release): accept stale historical record counts in beta release validation. ([PR](https://github.com/openclaw/openclaw/pull/120738))
- **#120239** — fix(googlechat): reject invalid UTF-8 in API JSON responses; corrupted `name` identifiers could be used by later API calls. ([PR](https://github.com/openclaw/openclaw/pull/120239))

Features advanced (open PRs under review):

- **#120664** — feat(cli): `openclaw resume` attaches the TUI to a recent session, giving an ergonomic continuation path for sessions started in the web UI, a channel, or a cloud worker. ([PR](https://github.com/openclaw/openclaw/pull/120664))
- **#120768 / #120825** — one-paste device pairing via `oc-pair` setup links, plus a non-secret connectivity preflight for Control UI clients. ([PR 120768](https://github.com/openclaw/openclaw/pull/120768), [PR 120825](https://github.com/openclaw/openclaw/pull/120825))
- **#120817** — fix(telegram): restore account `replyToMode` on `2026.8.1-beta.1`; release-blocking regression where `replyToMessageId` was dropped. ([PR](https://github.com/openclaw/openclaw/pull/120817))
- **#120803** — fix(worker): preserve long OpenAI Responses sessions across cloud handoff, preventing silent loss of server-compaction replay. ([PR](https://github.com/openclaw/openclaw/pull/120803))
- **#120575** — fix: preserve exec completion identity across poll and heartbeat (follow-up to #120585 duplicate-completion fix). ([PR](https://github.com/openclaw/openclaw/pull/120575))
- **#120496** — fix(compaction): allow Claude CLI sessions to compact without Anthropic API keys (addresses #103231). ([PR](https://github.com/openclaw/openclaw/pull/120496))
- **#119892 / #120818 / #120819 / #120821 / #120823** — a coordinated Code Mode auditability series: auditable trace exposure, physical provider dispatch attestation, closed trace schema, and a frozen frontier evidence matrix.

## 4. Community Hot Topics

- **[#116277 — DeepSeek v4 Flash silent reply failure](https://github.com/openclaw/openclaw/issues/116277) (CLOSED, 179 comments)** — By far the most-discussed issue: deepseek-v4-flash silently produced no reply for a Telegram group message, leaving users with the generic "No reply was generated" fallback. The engagement level underscores how damaging silent generation failures are to user trust.
- **[#7707 — Memory Trust Tagging by Source](https://github.com/openclaw/openclaw/issues/7707) (OPEN, 31 comments)** — Request to tag agent memory by origin trust level (user commands vs. web scrapes vs. third-party skills) to prevent memory-poisoning attacks. Underlying need: defenses against prompt injection hidden in untrusted content.
- **[#44925 — Subagent completion silently lost](https://github.com/openclaw/openclaw/issues/44925) (OPEN, 24 comments, 2👍)** — Three distinct failure modes where subagent results vanish without retry, notification, or auto-restart.
- **[#91588 — Gateway Memory Leak P0](https://github.com/openclaw/openclaw/issues/91588) (OPEN, 22 comments, 1👍)** — RSS grows from ~350MB to 15.5GB over 2–3 days, causing repeated OOM kills and launchd-handoff restart cycles.
- **[#80319 — QA tool-defaults suite conflates Codex-native tools with OpenClaw dynamic tool parity](https://github.com/openclaw/openclaw/issues/80319) (OPEN, 17 comments)** — The community and maintainers collaboratively corrected an overclaim, clarifying that the issue is a QA harness/mock-provider artifact rather than broad Codex runtime tool dropout.

The common thread: users are far more upset by **silent failures** (generated-but-undelivered replies, lost completions, promises marked sent) than by crashes that at least produce an error. Memory instability and delivery loss dominate every high-engagement thread.

## 5. Bugs & Stability

Ranked by severity:

**P0 — crash loops / startup blockers:**

- **#91588** — Gateway memory leak, RSS 350MB → 15.5GB, repeated OOM kills. Open; needs maintainer review. ([Issue](https://github.com/openclaw/openclaw/issues/91588))
- **#108435** — Upgrade to 2026.7.1: gateway fails to start via systemd, ollama, and manual launch ("gateway did not start on 127.0…"). Open; needs info; 3👍. ([Issue](https://github.com/openclaw/openclaw/issues/108435))
- **#112395** — Startup migration preflight blocks gateway after 6.11 → 7.1 upgrade; migration tables and leases empty. Open; linked PR open. ([Issue](https://github.com/openclaw/openclaw/issues/112395))

**P1 — message/session loss and wedge conditions:**

- **#44925** — Subagent completion silently lost; no retry, no notification, no auto-restart on timeout. Open. ([Issue](https://github.com/openclaw/openclaw/issues/44925))
- **#96834** — WhatsApp 1:1 inbound image wedges the main lane ~3 min before processing; multimodal run strands `active_reply_work`. ([Issue](https://github.com/openclaw/openclaw/issues/96834))
- **#86215** — Codex OAuth refresh failures can wedge an agent for hours without operator-visible alerting or aggressive profile rotation. ([Issue](https://github.com/openclaw/openclaw/issues/86215))
- **#84583** — Cron announce delivery triggers `EmbeddedAttemptSessionTakeoverError` when the user is actively chatting. ([Issue](https://github.com/openclaw/openclaw/issues/84583))
- **#83959** — Codex app-server startup retries can exhaust before the replacement server is ready; "client is closed" errors. ([Issue](https://github.com/openclaw/openclaw/issues/83959))
- **#106231** — Loop detection blocks exec but never terminates the stuck agent run, burning resources for hours. Linked PR open. ([Issue](https://github.com/openclaw/openclaw/issues/106231))
- **#103231** — `claude-cli` backend's `ownsNativeCompaction` assumption is false for `claude -p` sessions; sessions grow past 200% context. Fix PR **#120496** (compaction without API keys) is open. ([Issue](https://github.com/openclaw/openclaw/issues/103231), [PR](https://github.com/openclaw/openclaw/pull/120496))
- **#38327** — Regression: "Cannot convert undefined or null to object" on 2026.3.2 with google-vertex/gemini-3.1-pro-preview. Open; needs live repro; 3👍. ([Issue](https://github.com/openclaw/openclaw/issues/38327))
- **#45224** — Unhandled Playwright CDP assertion error in `CRSession._onMessage` crashes the entire Gateway. ([Issue](https://github.com/openclaw/openclaw/issues/45224))
- **#114020** — Feishu/Telegram dispatch fails after upgrade to `2026.7.2-beta.4`: `runChannelInboundEvent` requires `runDispatchLifecycle`. ([Issue](https://github.com/openclaw/openclaw/issues/114020))
- **#87109** — Gateway heap grows to 1073MB+ at idle on macOS; cron jobs fail silently under memory pressure. ([Issue](https://github.com/openclaw/openclaw/issues/87109))
- **#98435** — MCP loopback transport does not auto-reconnect on CLI side after gateway restart; `recovered=1` is misleading. ([Issue](https://github.com/openclaw/openclaw/issues/98435))

**Data-loss fixes shipped:** #119269 (`tasks maintenance --apply` deleting cron-run transcripts with no archive) is CLOSED by PR **#119511**, merged today. ([Issue](https://github.com/openclaw/openclaw/issues/119269), [PR](https://github.com/openclaw/openclaw/pull/119511))

## 6. Feature Requests & Roadmap Signals

Strong signals in the queue:

- **#7707** — Memory trust tagging by source; open 6+ months, still awaiting product/security decision. ([Issue](https://github.com/openclaw/openclaw/issues/7707))
- **#10687** — Fully dynamic model discovery starting with OpenRouter; static catalogs can't keep pace with fast-moving providers. 3👍. ([Issue](https://github.com/openclaw/openclaw/issues/10687))
- **#13219** — Per-model usage logging for cost tracking and model-mix optimization. ([Issue](https://github.com/openclaw/openclaw/issues/13219))
- **#71195** — OpenAI Realtime speech-to-speech path for macOS Talk Mode, matching the voice-call plugin's sub-second turns. ([Issue](https://github.com/openclaw/openclaw/issues/71195))
- **#8299** — Config option to suppress sub-agent announce (currently relies on the model replying exactly `ANNOUNCE_SKIP`). ([Issue](https://github.com/openclaw/openclaw/issues/8299))
- **#52640** — Persistent task-status surface for long-running channel turns (Discord first). ([Issue](https://github.com/openclaw/openclaw/issues/52640))
- **#73537** — Production-readiness stability label on releases; user explicitly wants maturity signals before adopting versions. 2👍. ([Issue](https://github.com/openclaw/openclaw/issues/73537))
- **#9637** — Accessibility option to disable emojis/unicode symbols in the TUI for screenreader users. ([Issue](https://github.com/openclaw/openclaw/issues/9637))

**Likely in next release:** device pairing (one-paste setup links + connectivity preflight, #120768/#120825), exec completion identity preservation (#120575), the Telegram beta.1 `replyToMode` fix (#120817), and native `announceTarget` for subagent completion routing (#101248) all have active, ready-for-review PRs.

## 7. User Feedback Summary

- **Biggest pain: silent failures.** Repeated reports that "the reply was generated but never delivered": WhatsApp foreground-reply fence cancels delivery (#92186), Slack thread replies lost after origin tuple drop (#96692), WeChat drops intermediate text between tool calls (#92199), Weixin reports success while users see "请稍后再试" (#79293), Feishu/Telegram dispatch breakage post-beta (#114020), and commitments marked `sentAtMs` but never delivered (#94536).
- **Memory instability erodes trust:** gateway heap/RSS growth on macOS (#87109) and Linux (#91588) causes silent cron failures and OOM kills — the worst kind of failure because nothing is surfaced.
- **Upgrade anxiety:** regressions in 2026.7.1 (gateway won't start #108435, Feishu streaming renders characters "a few at a time" #108265, migration preflight #112395) make users cautious about adopting new versions — directly feeding the #73537 request for production-readiness labels.
- **Positive sentiment:** in #73537, a user voluntarily thanked the team — OpenClaw "has genuinely become part of our daily workflow" for family/business automation (Telegram, cron, Home Assistant). UI polish (#75947) and accessibility (#9637) requests show a maturing user base that now wants ergonomics, not just features.

## 8. Backlog Watch

Long-running items needing maintainer attention (older than ~2 months, still open and largely unresolved):

- **#7707** — Memory Trust Tagging by Source. Created 2026-02-03, 31 comments; 6+ months without product/security decision. ([Issue](https://github.com/openclaw/openclaw/issues/7707))
- **#44925** — P1: Subagent completion silently lost. Created 2026-03-13, 24 comments, 2👍; no fix PR yet. ([Issue](https://github.com/openclaw/openclaw/issues/44925))
- **#38327** — P1: Vertex "Cannot convert undefined or null to object" regression. Created 2026-03-06, 13 comments, 3👍; needs live repro. ([Issue](https://github.com/openclaw/openclaw/issues/38327))
- **#91588** — P0: Gateway memory leak. Created 2026-06-09; still awaiting maintainer review. ([Issue](https://github.com/openclaw/openclaw/issues/91588))
- **#10687** — Dynamic model discovery. Created 2026-02-06, 10 comments, 3👍. ([Issue](https://github.com/openclaw/openclaw/issues/10687))
- **#8299** — Sub-agent announce suppression. Created 2026-02-03, 8 comments; marked `clawsweeper-recovery-stuck`. ([Issue](https://github.com/openclaw/openclaw/issues/8299))
- **#13219** — Per-model usage logging. Created 2026-02-10, 7 comments. ([Issue](https://github.com/openclaw/openclaw/issues/13219))
- **#49259** — Prune stale orphaned sessions from Dashboard. Created 2026-03-17, 7 comments. ([Issue](https://github.com/openclaw/openclaw/issues/49259))

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report — AI Agent / Personal Assistant Open-Source Ecosystem
**Date:** 2026-08-09

---

## 1. Ecosystem Overview

The personal AI assistant landscape is undergoing a rapid stabilization phase: across 13 tracked projects, the dominant engineering effort has shifted from feature velocity to reliability hardening — delivery guarantees, memory stability, security boundaries, and update trust. Channel breadth (Telegram, WhatsApp, Slack, Discord, WeChat, Mattermost, IRC, and more) is now table stakes, while MCP has consolidated its position as the standard integration bus. A clear two-tier dynamic has emerged: OpenClaw functions as the de facto reference implementation — explicitly named in other projects' issue trackers as the migration baseline — while peers like IronClaw, ZeroClaw, and Hermes differentiate on architecture, security posture, and UX. Across all projects, users consistently rank **silent failures** (undelivered messages, lost completions, false success states) as more damaging than crashes, and cost/token observability is rapidly becoming a first-class product requirement.

---

## 2. Activity Comparison

| Project | Issues updated (24h) | PRs updated (24h) | Merged/closed PRs | Releases (24h) | Health (1–10)* |
|---|---|---|---|---|---|
| OpenClaw | 500 | 500 | 176 | **2** (v2026.6.33, v2026.6.34) | 9.5 |
| IronClaw | 30 (24 closed) | 50 | **32** | 0 | 9.0 |
| ZeroClaw | 50 | 50 | 0 (2 superseded) | 0 | 8.5 |
| Hermes Agent | 50 (12 closed) | 50 | 7 | 0 | 8.0 |
| NanoBot | 5 | 9 | 4 | 0 | 8.0 |
| CoPaw / QwenPaw | 19 (2 closed) | 50 | 3 | 0 (2.1.0 beta line) | 7.5 |
| NanoClaw | 8 (3 closed) | 6 | 3 | 0 | 7.0 |
| Moltis | 2 (1 closed) | 1 | 1 | 0 | 6.5 |
| PicoClaw | 3 (1 closed) | 4 | 0 | 0 | 6.0 |
| LobsterAI | 1 | 3 | 1 | 0 | 5.5 |
| NullClaw / TinyClaw / ZeptoClaw | 0 | 0 | 0 | 0 | 2.0 |

*\*Health score is a composite of activity volume, merge/closure ratio, release cadence, responsiveness to issues, and backlog health.*

---

## 3. OpenClaw's Position

**Advantages vs. peers:**
- **Scale:** 500 issues + 500 PRs touched in 24h — roughly 10x the next most active project (IronClaw, ZeroClaw, Hermes at ~50/50 each). Daily merged PRs (176) exceed most peers' *weekly* totals.
- **Release discipline:** the only project to ship releases this window (two security-hardening patches). Peers are either pre-release (CoPaw beta), post-milestone (IronClaw preparing v1.1.0), or silent.
- **Maintainer throughput:** multiple named maintainers (steipete, vincentkoc, VACInc) landing fixes across sessions, pairing, channel delivery, and Windows parity — a deep bench no other project matches.
- **Reference status:** IronClaw users explicitly reference "legacy Hermes/Openclaw" switching costs (#6939), confirming OpenClaw as the ecosystem's baseline for channel adapters, session models, and gateway architecture.

**Technical approach differences:**
- Central gateway with cloud-worker handoff and first-class session continuity (`openclaw resume` TUI attachment).
- Defense-in-depth shipping cadence: browser sandboxing, trusted DNS targets, hostile-response size caps, secret redaction from diagnostics.
- Audit-preserving session archiving (compressed `.deleted` archive) — a data-durability model others are only beginning to adopt.

**Community size:** largest by every metric — top issue at 179 comments (vs. 13 for NanoBot's most-active, 11 for ZeroClaw's); 52 issues closed daily.

---

## 4. Shared Technical Focus Areas

| Focus Area | Projects | Specific Needs |
|---|---|---|
| **Delivery reliability / silent-failure elimination** | OpenClaw, Hermes, NanoClaw, CoPaw, ZeroClaw, NanoBot | Exactly-once delivery claims; retry/notification on lost completions; attachment integrity (Google Chat path separators, Signal container access); no-reply as a first-class outcome |
| **Memory stability & lifecycle** | OpenClaw (P0 gateway leak), Hermes (memory tool disabled), CoPaw (SIGBUS on history DB), IronClaw (compaction replay) | Heap/RSS bounds, memory-status accuracy, DB corruption recovery, compaction that preserves transcripts |
| **Security hardening** | OpenClaw, Hermes, ZeroClaw, IronClaw | Secret redaction bypasses (ANSI CSI/SGR), untrusted memory poisoning, path-permission enforcement, validation wired into *live* turn paths, per-profile secret isolation |
| **MCP productionization** | NanoBot, NanoClaw, PicoClaw, CoPaw, ZeroClaw | OAuth web authorization, remote HTTP/SSE servers, failure isolation (no gateway crashes), schema size budgeting, zombie process reaping, reconnect semantics |
| **Update/install trust** | Hermes (Win/macOS bricking), CoPaw (Windows file locks), ZeroClaw (dead desktop URL, Docker loopback), OpenClaw (startup regressions) | Brick-proof updaters, macOS login-shell PATH, file-lock-safe installers, migration/porting tooling |
| **Token/cost observability** | NanoBot (per-iteration logs, usage UI), IronClaw (P1 accounting bug), OpenClaw (per-model logging), ZeroClaw (budget caps never fire) | Per-call/per-model diagnostics, accurate input-token estimation, working budget enforcement |
| **Approval & governance UX** | NanoClaw (broken Discord approvals), ZeroClaw (any chat member can approve), CoPaw (approval purpose context), OpenClaw (device pairing) | Clickable approval flows, sender authorization, approval descriptions, emergency-stop semantics |
| **Context efficiency** | PicoClaw (prefix-cache invalidation), NanoBot (MCP schema budgets), CoPaw (continuation summary blocks), ZeroClaw (registry-driven context discovery) | Prompt ordering for cache hits, model-visible schema minimization, non-blocking compaction |
| **Docker/deployment reliability** | NanoBot (entrypoint perms), Moltis (filesystem tools), CoPaw (market "maintenance"), ZeroClaw (loopback binding), NanoClaw (SQLite VirtioFS) | Working sandbox tools, published-port binding, persistence across cross-mount filesystems |

---

## 5. Differentiation Analysis

| Project | Feature Focus | Target Users | Architectural Character |
|---|---|---|---|
| **OpenClaw** | Broadest channel/provider matrix; session continuity; delivery reliability | Self-hosted power users, families/SMBs | Mature gateway with cloud worker handoff, sandboxed browser routes, archival session storage |
| **IronClaw** | Developer observability (Web Debug Inspector), outbound delivery CAS durability, stress-testing harness | Developers, ex-Hermes/OpenClaw users | Post-Reborn typed service architecture; "run acts as invoker" identity model; WASM guest support |
| **ZeroClaw** | Security-first runtime: forbidden paths, leak detectors, emergency stop, authenticated webhooks, SOP execution engine | Security-conscious orgs, regulated workflows | Rust-based tooling (AUR/Scoop), heavy RFC governance, deliberate scope narrowing |
| **Hermes Agent** | Desktop-first experience (CLI/TUI/Desktop), session write-policy migration, delegated subagent boundaries | Individual desktop users (Win/macOS) | Fail-closed session policies, per-child delegate memory/toolset isolation, i18n (EN/zh/ja/ar, es pending) |
| **CoPaw / QwenPaw** | China-market model support (Qwen, DeepSeek, Volcengine, Xiaomi MiMo), desktop + Docker | Chinese-language users, Qwen stack | 2.1.0 beta stabilization; ReMe memory with reranker; Scroll history database |
| **NanoBot** | Lightweight self-hosted chat UI, token transparency, temporary chat mode | Researchers, small teams | Fast-moving small core; MCP schema budgeting; WebUI polish |
| **NanoClaw** | MCP extensibility (remote HTTP/SSE, Strava), channel adapter framework | Integrators, tinkerers | Adapter registry with OAuth flow support; v2 ChannelAdapter contract |
| **PicoClaw** | Resource-constrained/embedded + privacy channels (SimpleX, IRC, DeltaChat, WhatsApp) | Sipeed hardware ecosystem, privacy-focused users | Lightweight, performance-conscious (prefix-cache ordering) |
| **LobsterAI** | LiteLLM gateway for 100+ providers via one OpenAI-compatible endpoint | Chinese desktop users (Netease ecosystem) | Electron-style desktop app, zero-dependency provider integration |
| **Moltis** | Sandbox runtime compatibility (Docker, Apple Container), filesystem path translation | Security-focused multi-OS developers | Runtime-agnostic sandboxing; fallback host→container operation translation |

---

## 6. Community Momentum & Maturity

**Tier 1 — Rapid iteration, shipping or milestone-closing:**
- **OpenClaw:** ecosystem reference; only project actively shipping releases; highest merge throughput by an order of magnitude.
- **IronClaw:** Reborn migration reached major completeness (22+ parity issues batch-closed); healthy contributor pipeline — new contributors (`theredspoon`) landing core delivery fixes.
- **ZeroClaw:** high-velocity security hardening with a structured RFC/voting process; bottleneck is the maintainer decision queue (~10 items marked `needs-maintainer-review`).

**Tier 2 — Active, responsive, in-flight fixes:**
- **Hermes:** steady throughput (7 merges, 12 closures), but update-bricking regressions on Windows/macOS are eroding user trust; mitigation PRs in flight.
- **NanoBot:** small but exceptionally responsive — 4 PRs closed in 24h, including user-facing token diagnostics; healthy reaction to community pain.
- **CoPaw:** high volume (50 PRs touched) but 47 remain open — review backlog is the constraint; beta bugs (SIGBUS, MCP reconnect blocking) need priority attention.

**Tier 3 — Moderate / maintenance phase:**
- **NanoClaw:** substantive feature PRs landing (remote MCP, Strava, Mattermost), but fresh regressions from refactors (Codex typecheck, attachment drops).
- **PicoClaw:** no merges in window; stale items accumulating; a WhatsApp-breaking fix awaits review.
- **Moltis:** healthy but quiet; one major Docker sandbox fix landed with regression coverage.
- **LobsterAI:** low cadence; April perf PR still unmerged; maintainer bandwidth constrained but external contributions continue.

**Dormant — monitor for abandonment:** NullClaw, TinyClaw, ZeptoClaw (zero activity in window).

---

## 7. Trend Signals

1. **Silent failure is the new availability metric.** The ecosystem's most-engaged threads (OpenClaw's 179-comment DeepSeek silent-reply issue; ZeroClaw's cron output "recorded as ok, went nowhere"; NanoClaw's silently dropped attachments) all share one property: the system reports success while users experience nothing. Expect delivery receipts, exactly-once semantics, and no-reply outcomes to become standard product requirements.

2. **Agent security is being audited like production infrastructure.** External contributors are line-citing code in security findings (ZeroClaw's emergency-stop audit, IronClaw's unwired SafetyLayer, Hermes' ANSI redaction bypass). Defense against memory poisoning, skill-injection, and path-permission bypasses is moving from nice-to-have to release-blocking.

3. **Cost transparency is becoming a product feature.** NanoBot users reporting "millions of tokens in 2 hours" drove two immediate PRs (per-iteration logging, WebUI usage display); IronClaw has an open P1 for input-token undercounting; OpenClaw and ZeroClaw both have cost-observability requests in queue. Agent developers should instrument token usage per call *before* users demand it.

4. **MCP is standardizing, but hardening lags.** Remote HTTP/SSE servers, OAuth flows, schema-size budgeting, failure isolation, and process reaping appear across six projects — the integration bus is settled, but production-grade MCP (auth, isolation, cost control) is the active frontier.

5. **Update paths are retention surfaces.** "Every other update breaks everything" (Hermes), Windows file-lock install failures (CoPaw), dead desktop download URLs (ZeroClaw), and startup regressions (OpenClaw) show that upgrade trust now determines user retention as much as features. Migration tooling for legacy agents (IronClaw #6939) is a clear unmet demand.

6. **Memory and transcript durability are trust anchors.** Compaction that wipes human-visible history (Hermes), transcript pruning without archives (OpenClaw, now fixed), DB write amplification (LobsterAI), and lock contention on cross-mount filesystems (NanoClaw) all point to one rule: **decouple internal context management from user-visible transcript persistence, and archive before deleting.**

7. **Governance for multi-user agents is emerging.** Approval flows that reject valid clicks (NanoClaw), accept any chat member's vote (ZeroClaw), lack purpose descriptions (CoPaw), or run typing indicators while blocked (ZeroClaw) indicate the next UX battleground: safe, transparent human-in-the-loop control.

**Actionable value for AI agent developers:** ship delivery receipts and retries before new channels; instrument token usage per call from day one; test upgrade paths in CI; apply least-privilege to skills and memory inputs; budget MCP schema size; and audit — with tests — that your safety validation is actually wired into the live execution path.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

## Today's Overview

NanoBot saw healthy, active development in the last 24 hours: 5 issues were updated (all open) and 9 PRs were touched, with 4 PRs closed and 5 remaining open. No new release was published. The dominant theme is token-consumption observability: Issue #5266 has drawn the most discussion, and two related PRs (#5293, #5299) were landed or proposed. Stability work is also visible around Docker deployment and MCP failure handling. Overall, the project is moving quickly, with maintainers/contributors actively addressing user-reported pain points around cost, WebUI polish, and session integrity.

## Releases

No new releases were published in the last 24 hours.

## Project Progress

Closed/merged PRs in the last 24 hours:

- [PR #5293 – feat(usage): log per-iteration token diagnostics](https://github.com/HKUDS/nanobot/pull/5293) — Closed; adds per-iteration token diagnostics, directly addressing the token-consumption visibility problem raised in Issue #5266.
- [PR #5252 – feat(webui): add temporary chat mode](https://github.com/HKUDS/nanobot/pull/5252) — Closed; adds a non-persistent Temporary Chat mode to the WebUI, with multi-turn support but no session/history file.
- [PR #5296 – refactor: remove verified dead code](https://github.com/HKUDS/nanobot/pull/5296) — Closed; removes 19 dead-code units and 11 unreachable test-only seams while preserving six API-sensitive units.
- [PR #5294 – fix(webui): prevent image hover clipping](https://github.com/HKUDS/nanobot/pull/5294) — Closed; fixes WebUI image preview clipping by removing hover scaling/ring while retaining zoom, focus, and keyboard behavior.

## Community Hot Topics

- [Issue #5266 – [enhancement] Logs about token consumption](https://github.com/HKUDS/nanobot/issues/5266) — 13 comments. The most active item. Users report extremely high token usage — “millions in 2 hours” — without obvious user activity, and request per-call token logging to identify which calls burn tokens.
- [Issue #5297 – MCP OAuth web authorization support](https://github.com/HKUDS/nanobot/issues/5297) — 2 comments. Chinese-language request to support OAuth web authorization for MCP servers, using XMind’s MCP as an example.
- [Issue #5295 – Docker Compose deploy fails with “entrypoint.sh: Permission denied”](https://github.com/HKUDS/nanobot/issues/5295) — 2 comments. Users following `deployment.md` hit a container startup failure.
- [Issue #5298 – Budget model-visible MCP schemas for large tool sets](https://github.com/HKUDS/nanobot/issues/5298) — New proposal highlighting context cost when many MCP tool schemas are passed to the model.

## Bugs & Stability

Ranked by severity:

1. **[Issue #5300 – MCP connection failure not isolated + anyio cancel-scope crash](https://github.com/HKUDS/nanobot/issues/5300)** — Critical. A remote MCP returning HTTP 530/Cloudflare error can crash or hang the gateway, leak tasks, and cause high CPU usage. No fix PR is linked yet.
2. **[Issue #5295 – Docker Compose deployment fails with entrypoint permission denied](https://github.com/HKUDS/nanobot/issues/5295)** — High. Blocks Docker-based deployment out of the box. No fix PR linked yet.
3. **[PR #5271 – fix(session): prevent stale background task saves from overwriting session data](https://github.com/HKUDS/nanobot/pull/5271)** — Open, flagged `priority: p0` and `conflict`. Background tasks can overwrite session data after a user runs `/new`; a fix PR exists but needs attention.
4. **[PR #5206 – fix(delivery): log streamed responses exactly once](https://github.com/HKUDS/nanobot/pull/5206)** — Open, flagged `priority: p2` and `conflict`. Duplicate “Response to” log lines for every streamed message; fix exists but needs rebase/review.
5. **[PR #5294 – fix(webui): prevent image hover clipping](https://github.com/HKUDS/nanobot/pull/5294)** — Closed; WebUI image-preview clipping was fixed in the last 24 hours.

## Feature Requests & Roadmap Signals

- **[Issue #5297 – MCP OAuth web authorization](https://github.com/HKUDS/nanobot/issues/5297)** — Users need OAuth flow support for MCP servers that require web-based authorization. Likely a near-term roadmap item for MCP integration.
- **[Issue #5298 – Budget model-visible MCP schemas](https://github.com/HKUDS/nanobot/issues/5298)** — Proposes reducing context cost when large MCP tool sets are loaded. This could drive future MCP schema-management features.
- **[PR #5299 – feat(webui): show recent token usage details](https://github.com/HKUDS/nanobot/pull/5299)** — Open; would surface token-usage records in the WebUI. Combined with #5293, token transparency is clearly becoming a first-class concern.
- **[PR #4276 – feat(tools): model-agnostic computer use](https://github.com/HKUDS/nanobot/pull/4276)** — Open since 2026-06-10. Adds `computer_use` and `browser` tools; a major feature that may be part of a future release if reviewed/merged.

## User Feedback Summary

Users are actively reporting real pain points:

- **Token costs are a major concern** — users see unexpectedly high token burn and want actionable, per-call diagnostics.
- **MCP ecosystem friction** — OAuth-requiring MCP servers are unusable, and remote MCP failures can crash the gateway rather than being isolated.
- **Docker deployment friction** — a straightforward `docker compose` deployment fails with a permission error, hurting adoption.
- **Context cost with many MCP tools** — advanced users are worried about model-visible schema size, indicating usage at scale.
- **Satisfaction signals** — the community is responsive: multiple bug-fix and feature PRs are being submitted, and four PRs were closed in the last 24 hours, including user-facing improvements to WebUI and token diagnostics.

## Backlog Watch

- **[PR #4276 – model-agnostic computer use](https://github.com/HKUDS/nanobot/pull/4276)** — Open since 2026-06-10; oldest tracked PR. Large feature, needs maintainer review/decision.
- **[PR #5271 – fix session stale background saves](https://github.com/HKUDS/nanobot/pull/5271)** — Open, `priority: p0` and `conflict`; session data integrity issue likely deserves immediate maintainer attention.
- **[PR #5206 – fix duplicate streamed response logging](https://github.com/HKUDS/nanobot/pull/5206)** — Open since 2026-08-01 with `conflict`; needs rebase/merge to close out a low-risk logging fix.
- **[Issue #5266 – token consumption logging](https://github.com/HKUDS/nanobot/issues/5266)** — Very active with 13 comments; while PRs #5293 and #5299 address part of it, maintainers should consolidate a final UX solution.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-08-09

## 1. Today's Overview
Hermes Agent saw a high-activity day: 50 issues and 50 PRs were updated in the last 24 hours (38 issues open/active, 12 closed; 43 PRs open, 7 merged/closed). No new releases were published. The day's work concentrated on install/update reliability (Windows/macOS), security hardening (skills content scanning, ANSI redaction bypass, per-profile secret isolation), and session/message-delivery correctness. A notable pattern is the batch of "salvage" PRs by teknium1 that cherry-pick and consolidate abandoned contributor work with authorship preserved (#82163, #82162, #82152, #82151) — a healthy sign of contribution continuity. Two P1 update-bricking regressions have fix PRs in flight, and the long-running v0.20 session write-policy migration appears to have reached closure.

## 2. Releases
No new releases were published in this window. (Note: two open issues report that npm 11/12 allow-scripts policy changes are breaking `hermes update` — see Bugs & Stability.)

## 3. Project Progress
- **Session write-policy work reached closure**: [PR #79723](https://github.com/NousResearch/hermes-agent/pull/79723) ("integrate v0.20 session write policy migration", 29 paths, fail-closed session-write preserved) and [PR #80943](https://github.com/NousResearch/hermes-agent/pull/80943) ("propagate and enforce session write policy", including child agents and Copilot ACP subprocess enforcement; C19 contract 9/9 tests passing) were both closed. [PR #82158](https://github.com/NousResearch/hermes-agent/pull/82158) (venv-blocker scan truncation dead-ending Desktop updates) was closed as a duplicate.
- **12 issues closed**, including: [#73624](https://github.com/NousResearch/hermes-agent/issues/73624) (compression budget overcharging stale reasoning tokens), [#57240](https://github.com/NousResearch/hermes-agent/issues/57240) (session forking double-encoded reasoning columns → silent reasoning replay loss), [#79343](https://github.com/NousResearch/hermes-agent/issues/79343) (memory gate misclassifying mid-task commands as trivial), [#79325](https://github.com/NousResearch/hermes-agent/issues/79325) (SiliconFlow missing from model picker), [#82160](https://github.com/NousResearch/hermes-agent/issues/82160) (codex thread identity lost on gateway restart), plus feature closures [#14859](https://github.com/NousResearch/hermes-agent/issues/14859) (session title in CLI/TUI status bar) and [#72337](https://github.com/NousResearch/hermes-agent/issues/72337) (cron delivery multi-select).
- **New PRs opened today** include: [#82163](https://github.com/NousResearch/hermes-agent/pull/82163) (OSC 11 terminal escape leak fix), [#82162](https://github.com/NousResearch/hermes-agent/pull/82162) (MEDIA delivery on queued gateway follow-ups), [#82152](https://github.com/NousResearch/hermes-agent/pull/82152) (FTS5 search sanitizer), [#82151](https://github.com/NousResearch/hermes-agent/pull/82151) (per-profile secret scope for model-switch), [#82143](https://github.com/NousResearch/hermes-agent/pull/82143) (Windows get-windows win32 self-heal), [#82157](https://github.com/NousResearch/hermes-agent/pull/82157) (per-child delegate memory/toolset boundary), [#82150](https://github.com/NousResearch/hermes-agent/pull/82150) (docs audit — 142 issues found on 200 pages), and [#82153](https://github.com/NousResearch/hermes-agent/pull/82153) (xAI OAuth refresh on 403 `unauthenticated:bad-credentials`).

## 4. Community Hot Topics
- [Issue #78515](https://github.com/NousResearch/hermes-agent/issues/78515) — **Security**: `background_review` writes skills with no content scan (`guard_agent_created` defaults off); agent-authored skills bypass the Skills Guard and are served into every session's system prompt. 6 comments. Underlying need: defense-in-depth for self-modifying agents; flagged `needs-decision`.
- [Issue #40801](https://github.com/NousResearch/hermes-agent/issues/40801) — Cron script-path guard rejects profile-scoped jobs referencing the *default* profile's scripts directory (inverse of #32091). 6 comments. Open since June; a profile-isolation correctness regression awaiting decision.
- [Issue #81969](https://github.com/NousResearch/hermes-agent/issues/81969) — **P1**: "scared to update because every other update bricks everything!" Windows installs break on `hermes update`/`hermes desktop` with a missing `get-windows` win32 binding. 6 comments. Fix PR [#82143](https://github.com/NousResearch/hermes-agent/pull/82143) is open.
- [Issue #75778](https://github.com/NousResearch/hermes-agent/issues/75778) — **P1**: macOS desktop update spawns a duplicate `hermes-setup` process; the "failed" window masks the real, still-running update. 6 comments. Related mitigation: [PR #53040](https://github.com/NousResearch/hermes-agent/pull/53040).
- [Issue #70846](https://github.com/NousResearch/hermes-agent/issues/70846) — Context compaction wipes human-visible message history, making post-hoc documentation impossible. 5 comments, 1 👍.
- [Issue #81322](https://github.com/NousResearch/hermes-agent/issues/81322) — `lifecycle_guard` raises `ValueError: embedded null byte` on benign ELF binary paths (e.g., venv Python interpreter). 5 comments.

## 5. Bugs & Stability
Ranked by severity:

- **P1 — Update/install regressions (highest user impact)**:
  - [#81969](https://github.com/NousResearch/hermes-agent/issues/81969) — Windows desktop installs brick on update. **Fix PR open**: [#82143](https://github.com/NousResearch/hermes-agent/pull/82143) (self-heal missing win32 binding + allow install script).
  - [#75778](https://github.com/NousResearch/hermes-agent/issues/75778) — macOS duplicate `hermes-setup` handoff; failure UI masks the real updater. No dedicated fix PR visible; related [#53040](https://github.com/NousResearch/hermes-agent/pull/53040) preserves last-good build.
- **P2 — Security/hardening**:
  - [#78515](https://github.com/NousResearch/hermes-agent/issues/78515) — agent-written skills skip content scan and enter every session prompt (`needs-decision`).
  - [#81012](https://github.com/NousResearch/hermes-agent/issues/81012) — complete ANSI CSI/SGR sequences defeat prefix masking, leaking vendor-prefixed tokens (probe-verified on main).
  - [PR #82151](https://github.com/NousResearch/hermes-agent/pull/82151) fixes a related class: model-switch picker/switch could read another profile's API keys under multiplexed profiles.
- **P2 — Session/memory correctness**:
  - [#81430](https://github.com/NousResearch/hermes-agent/issues/81430) — `hermes memory status` reports "Memory tool: disabled" despite injection/toolset enabled; writes return success but nothing persists.
  - [#41225](https://github.com/NousResearch/hermes-agent/issues/41225) — background processes killed by SIGTERM on lifecycle `release()` during session end/compaction/error recovery (open since June, `needs-repro`).
  - [#39245](https://github.com/NousResearch/hermes-agent/issues/39245) — ACP `prompt` can hang forever if a `usage_update`/session update is not consumed.
  - [#63386](https://github.com/NousResearch/hermes-agent/issues/63386) — state.db FTS index corruption on macOS breaks search/handoff.
- **P2 — Platform/integration**:
  - [#81322](https://github.com/NousResearch/hermes-agent/issues/81322) — embedded null byte rejection of ELF binary paths in Terminal tool.
  - [#82074](https://github.com/NousResearch/hermes-agent/issues/82074) — Podman + SELinux: skills mount inaccessible without `:z` (duplicate).
  - [#81995](https://github.com/NousResearch/hermes-agent/issues/81995) — stalled stdio MCP cold-spawn leaves tool call attached to dead subprocess for full 300s (no fail-fast on supervisor respawn).
  - [#81162](https://github.com/NousResearch/hermes-agent/issues/81162) — auto voice reply synchronously blocks text response on slow TTS backends (perf).
- **P0 perf fix (PR)**: [#81929](https://github.com/NousResearch/hermes-agent/pull/81929) — declares skill cache boundaries so repeated webhook/cron skill invocations no longer force Anthropic to rewrite the entire expanded skill message.
- **Newly fixed in flight**: FTS5 search sanitizer missing special characters ([PR #82152](https://github.com/NousResearch/hermes-agent/pull/82152)); OSC 11 escape leak into prompt ([PR #82163](https://github.com/NousResearch/hermes-agent/pull/82163)); MEDIA path leakage on queued gateway follow-ups ([PR #82162](https://github.com/NousResearch/hermes-agent/pull/82162)); xAI OAuth refresh on 403 ([PR #82153](https://github.com/NousResearch/hermes-agent/pull/82153)).

## 6. Feature Requests & Roadmap Signals
- **Memory lifecycle management** ([#78307](https://github.com/NousResearch/hermes-agent/issues/78307)) — inspection, health, dedup, consolidation, conflict detection for `MEMORY.md`/`USER.md`; `needs-decision`.
- **Delegation hardening** ([PR #82157](https://github.com/NousResearch/hermes-agent/pull/82157)) — optional `child_memory` + per-child toolset permission boundary; signals a roadmap toward safer subagents.
- **Desktop i18n** ([#82165](https://github.com/NousResearch/hermes-agent/issues/82165)) — Spanish locale request; currently only EN/zh/ja/ar offered despite ~600M Spanish speakers.
- **Unified Cmd+K content search** ([#49103](https://github.com/NousResearch/hermes-agent/issues/49103)) — search files, sessions, and skills from one palette.
- **ToolCallStormBreaker RFC** ([#35573](https://github.com/NousResearch/hermes-agent/issues/35573)) — suppress repeated identical tool-call loops.
- **Session-DB auto-prune + VACUUM** ([#57752](https://github.com/NousResearch/hermes-agent/issues/57752)) — currently opt-in, off by default, with no operator warning.
- Additional in-review PRs: configurable human-facing timestamps for CLI/TUI/Desktop ([#81439](https://github.com/NousResearch/hermes-agent/pull/81439)), MCP deterministic record/replay fixtures ([#80475](https://github.com/NousResearch/hermes-agent/pull/80475)), search-only toolset in configurator ([#82155](https://github.com/NousResearch/hermes-agent/pull/82155)), configured tools in background review ([#82146](https://github.com/NousResearch/hermes-agent/pull/82146)), and Telegram bidirectional contextual reactions ([#81709](https://github.com/NousResearch/hermes-agent/pull/81709)).

**Likely next-release candidates**: i18n expansion (es), memory lifecycle UX, delegation permission boundaries, and the display-timestamp contract — all have active, maintained PRs or high-signal feature issues.

## 7. User Feedback Summary
- **Update trust is the loudest pain point**: "every other update breaks everything and I keep losing everything and have to reconfigure everything" ([#81969](https://github.com/NousResearch/hermes-agent/issues/81969)); macOS users see a "failed" updater window while the real update is still running ([#75778](https://github.com/NousResearch/hermes-agent/issues/75778)); npm 11/12 allow-scripts policy changes destabilize update paths ([#43997](https://github.com/NousResearch/hermes-agent/issues/43997), [#62171](https://github.com/NousResearch/hermes-agent/issues/62171)).
- **Compaction destroying human-readable history** ([#70846](https://github.com/NousResearch/hermes-agent/issues/70846)) blocks post-hoc documentation; users want agent context management decoupled from persisted transcript visibility.
- **Cron profile scoping confusion** ([#40801](https://github.com/NousResearch/hermes-agent/issues/40801)) — valid jobs rejected based on scripts directory location; open 2+ months without a decision.
- **Memory tool reliability** ([#81430](https://github.com/NousResearch/hermes-agent/issues/81430)) — fully-formed success responses with nothing persisted, plus contradictory status reporting.
- **Responsiveness** ([#81162](https://github.com/NousResearch/hermes-agent/issues/81162)) — slow TTS backend blocks the entire text reply on QQbot.
- **Positive signals**: session title in status bar ([#14859](https://github.com/NousResearch/hermes-agent/issues/14859)) and cron multi-select delivery ([#72337](https://github.com/NousResearch/hermes-agent/issues/72337)) closed; Spanish locale request filed with a strong demographic rationale ([#82165](https://github.com/NousResearch/hermes-agent/issues/82165)).

## 8. Backlog Watch
Items needing maintainer attention, ranked by age/impact:
- [Issue #35573](https://github.com/NousResearch/hermes-agent/issues/35573) — ToolCallStormBreaker RFC (open since **May 30**) — no maintainer decision.
- [Issue #39245](https://github.com/NousResearch/hermes-agent/issues/39245) — ACP prompt hang (open since **June 4**) — session-state/message-delivery risk.
- [Issue #40801](https://github.com/NousResearch/hermes-agent/issues/40801) — cron script-path guard regression (open since **June 6**) — `needs-decision`.
- [Issue #41225](https://github.com/NousResearch/hermes-agent/issues/41225) — SIGTERM kills background processes on lifecycle release (open since **June 7**) — `needs-repro`.
- [Issue #43997](https://github.com/NousResearch/hermes-agent/issues/43997) — npm 11 allow-scripts warnings (open since **June 11**) — partially superseded by npm 12 breakage ([#62171](https://github.com/NousResearch/hermes-agent/issues/62171)).
- [PR #53040](https://github.com/NousResearch/hermes-agent/pull/53040) — preserve last-good build during before-pack cleanup (open since **June 26**, `needs-decision`) — directly mitigates the update-bricking family; carries an AI-authored caveat requiring maintainer verification.
- [Issue #57752](https://github.com/NousResearch/hermes-agent/issues/57752) — session-DB auto-prune opt-in/off (open since **July 3**).
- [Issue #63386](https://github.com/NousResearch/hermes-agent/issues/63386) — macOS FTS index corruption (open since **July 12**) — no fix PR yet.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-08-09

## 1. Today's Overview

Over the past 24 hours, PicoClaw activity was moderate but mostly maintenance-oriented: 3 issues were updated (2 still open, 1 closed) and 4 pull requests were updated, all of which remain open with no merges or closures. No new releases were published. The most notable movement came from two fresh fix PRs addressing WhatsApp connectivity and agent prefix-cache invalidation, while several older issues and PRs remain tagged as stale. Project health looks stable, though the lack of merged PRs and a small backlog of stale items suggest maintainer review is the current bottleneck.

## 2. Releases

No new releases were published in the last 24 hours.

## 3. Project Progress

No PRs were merged or closed in the last 24 hours. The only closed item was issue [#3292](https://github.com/sipeed/picoclaw/issues/3292), a CPU-usage bug report that was closed after being marked stale.

Active open PRs indicate ongoing development:

- [#3320](https://github.com/sipeed/picoclaw/pull/3320) – Bumps `whatsmeow` to unblock WhatsApp "client outdated (405)" errors.
- [#3321](https://github.com/sipeed/picoclaw/pull/3321) – Moves dynamic context after history to preserve prefix caching.
- [#3222](https://github.com/sipeed/picoclaw/pull/3222) – Refactors DeltaChat implementation, reducing LOC by ~200.
- [#3193](https://github.com/sipeed/picoclaw/pull/3193) – Adds a SimpleX channel type.

No features were officially merged today, but these PRs show active work on channel reliability and LLM-context efficiency.

## 4. Community Hot Topics

- [#3287 [Feature] Better support long messages in IRC](https://github.com/sipeed/picoclaw/issues/3287) – 4 comments, the most active item. The user wants IRCv3 long messages to be treated as a single cohesive message despite the 512-byte line limit and client-side splitting. Underlying need: native IRC message fidelity and correct multi-line handling.

- [#3292 [Bug] CPU usage too high when focusing input box](https://github.com/sipeed/picoclaw/issues/3292) – 2 comments, now closed. Reported in the Firefox web UI on Debian/Linux; reflects UI-performance concerns in heavy chat contexts.

- [#3302 [Feature] Support OAuth 2.1 for MCP servers](https://github.com/sipeed/picoclaw/issues/3302) – 2 comments. Requests OAuth 2.1 support for MCP servers, referencing issue #2546. The author explicitly marks it as a "Nice-to-Have / Enhancement" rather than core roadmap work.

PRs did not have comment counts available in the provided data.

## 5. Bugs & Stability

- **High – WhatsApp channel unusable**: The pinned `whatsmeow` version advertises a client version now rejected by WhatsApp with `Client outdated (405)`. The socket drops and no reconnect is attempted. Fix PR: [#3320](https://github.com/sipeed/picoclaw/pull/3320), still open.

- **Medium – CPU usage spike in web chat input**: Focusing the input box in the chat interface caused high CPU usage, reported with PicoClaw 0.3.1 on Debian/Firefox. Issue [#3292](https://github.com/sipeed/picoclaw/issues/3292) has been closed, but no accompanying fix PR was observed in the last 24 hours.

- **Medium/Performance – Prefix caching invalidated**: The dynamic context block placed inside the system message invalidates prefix caches on every request because it precedes conversation history. PR [#3321](https://github.com/sipeed/picoclaw/pull/3321) proposes moving it after history; this is a performance/stability fix rather than a user-visible crash.

## 6. Feature Requests & Roadmap Signals

- **IRC long-message support** ([#3287](https://github.com/sipeed/picoclaw/issues/3287)): Open for about two weeks, tagged stale, and the most-commented issue. This could plausibly be picked up for a future release if the maintainers prioritize IRC protocol robustness.

- **OAuth 2.1 for MCP servers** ([#3302](https://github.com/sipeed/picoclaw/issues/3302)): Explicitly labeled as a nice-to-have, not core, and not aligned with the current roadmap. Less likely to land soon unless community demand grows.

- **SimpleX channel support** ([PR #3193](https://github.com/sipeed/picoclaw/pull/3193)): An open feature PR from late June. If reviewed and merged, it would add a new supported channel type.

Based on current PR momentum, the next version is more likely to include WhatsApp fix ([#3320](https://github.com/sipeed/picoclaw/pull/3320)) and prefix-cache improvement ([#3321](https://github.com/sipeed/picoclaw/pull/3321)) than the larger feature requests.

## 7. User Feedback Summary

Real user pain points captured in the last 24 hours:

- IRC users want long messages to remain coherent instead of being split at 512 bytes by clients.
- WhatsApp users are experiencing a dead native channel due to client-version rejection; the maintainers have not yet merged a fix.
- Web UI users on Firefox report undesirable CPU usage when the chat input is focused.
- MCP users are asking for modern OAuth 2.1 support, but this is seen by the requester as an enhancement rather than a core need.

No explicit satisfaction or dissatisfaction comments were present in the updated items; the overall signal is a mix of feature requests and reliability bug reports.

## 8. Backlog Watch

These stale or long-open items likely need maintainer attention:

- [PR #3193 – Added SimpleX channel type](https://github.com/sipeed/picoclaw/pull/3193): Open since June 27, tagged stale, no merge decision visible.
- [PR #3222 – refactor(deltachat): cleanup implementation, documentation -200LOC](https://github.com/sipeed/picoclaw/pull/3222): Open since July 3, tagged stale, includes worthwhile cleanups and documentation.
- [Issue #3287 – Better support long messages in IRC](https://github.com/sipeed/picoclaw/issues/3287): Open since July 22, tagged stale, and currently the most-commented issue; needs a maintainer response or roadmap decision.

The newer fix PRs [#3320](https://github.com/sipeed/picoclaw/pull/3320) and [#3321](https://github.com/sipeed/picoclaw/pull/3321) are of high immediate value and should be prioritized for review.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-08-09

## 1. Today's Overview

NanoClaw saw moderate activity over the past 24 hours: 8 issues and 6 PRs were updated, roughly split between open and closed items (5 open / 3 closed issues; 3 open / 3 closed PRs), with no new releases published. Development momentum is concentrated on channel integrations (Mattermost, Telegram, Strava MCP) and reliability fixes for the Discord approval flow and Docker/SQLite persistence. The closure of two long-running PRs — remote HTTP/SSE MCP server support (#2776) and the Strava skill (#2777) — suggests the project is maturing its MCP extensibility story. At the same time, several fresh bug reports filed on 2026-08-08 (codex typecheck failure, Google Chat attachment drops, stale skill docs) indicate regression surface from recent refactors.

## 2. Releases

No new releases in the reporting period.

## 3. Project Progress

Three PRs reached closed/merged status, including two substantial features:

- **[#2777 — feat: add /add-strava skill for official Strava MCP](https://github.com/nanocoai/nanoclaw/pull/2777)** (created Jun 15, closed Aug 8): wires the official Strava MCP endpoint into agent groups via HTTP transport, with a host-side OAuth flow and token auto-refresh module.
- **[#2776 — feat: support remote HTTP/SSE MCP servers](https://github.com/nanocoai/nanoclaw/pull/2776)** (created Jun 15, closed Aug 8): generalizes `McpServerConfig` to a union of stdio and remote HTTP/SSE types, and extends `ncl groups config add-mcp-server` with `--type`, `--url`, and `--header` flags. This is the enabling foundation for #2777.
- **[#3199 — Add Mattermost channel integration (v2 ChannelAdapter)](https://github.com/nanocoai/nanoclaw/pull/3199)** (closed Aug 8): a fresh implementation against the current `ChannelAdapter`/`channel-registry.ts` contract, wrapping the community `chat-adapter-mattermost` package and superseding the pre-v2 #546.

On the issue tracker, the Docker/SQLite lock contention fix (#3177) and the Discord approval reporting bug (#3201) were also closed.

## 4. Community Hot Topics

- **[#3201 — Discord approval button clicks not registering](https://github.com/nanocoai/nanoclaw/issues/3201)** is the most-commented item (2 comments) and the highest-impact this period: approval cards display "0 by [user]" even after clicking Approve, and requests are subsequently rejected — breaking owner-role governance entirely. A fix PR is in flight: **[#3185 — fix(discord): strip \n delimiter in webhook interaction custom_id](https://github.com/nanocoai/nanoclaw/pull/3185)**. Underlying need: reliable asynchronous approval/governance for group config updates.
- **[#3200 — "The Cartographer" persona issue](https://github.com/nanocoai/nanoclaw/issues/3200)** (1 comment) contains prompt/persona content without actionable bug data; likely noise or prompt-injection and was closed.
- **[#3177 — session database lock contention on Docker cross-mount filesystems](https://github.com/nanocoai/nanoclaw/issues/3177)** (1 comment) documented 29,000+ readonly errors and intermittent delivery failures; closed with a fix.

## 5. Bugs & Stability

Ranked by severity:

1. **Discord approvals always rejected** — [#3201](https://github.com/nanocoai/nanoclaw/issues/3201) (closed). Webhook `custom_id` decoding splits on a `\n` delimiter, causing every button click to resolve to the wrong option. Fix PR [#3185](https://github.com/nanocoai/nanoclaw/pull/3185) is open.
2. **Codex provider breaks typecheck and drops generated images** — [#3203](https://github.com/nanocoai/nanoclaw/issues/3203) (open). The `codex` provider emits a `file` ProviderEvent not declared in `ProviderEvent`; `/add-codex` fails the container typecheck on `main`, and even when it compiles, nothing consumes the event so codex-generated images are silently lost.
3. **Inbound attachments silently dropped for message IDs containing path separators** — [#3206](https://github.com/nanocoai/nanoclaw/issues/3206) (open). `isSafeAttachmentName(messageId)` rejects `/` and `\`, so Google Chat attachments (whose IDs contain slashes) never reach the agent — silent data loss.
4. **Signal image/PDF attachments unreachable from agent container** — [#2528](https://github.com/nanocoai/nanoclaw/issues/2528) (open). Media arrives on the host, but the agent inside the container cannot open it; unresolved since May 18.
5. **Stale add-opencode skill instructions** — [#3204](https://github.com/nanocoai/nanoclaw/issues/3204) (open). The skill still instructs Dockerfile `ARG` + `RUN pnpm install -g` edits removed by the `cli-tools.json` refactor, and its guard test asserts the old shape.

Fixed this period: Docker SQLite lock contention [#3177](https://github.com/nanocoai/nanoclaw/issues/3177) — root cause was SQLite DELETE journal mode not propagating across VirtioFS Docker mounts.

## 6. Feature Requests & Roadmap Signals

- **Mattermost channel integration** — a second, newer PR is open: **[#3202 — Add Mattermost channel integration](https://github.com/nanocoai/nanoclaw/pull/3202)** (closes #1379), following the closed #3199. Mattermost appears to be a near-term channel addition.
- **Remote HTTP/SSE MCP servers** — merged via #2776, opening the door to cloud-hosted MCP endpoints such as Strava (#2777).
- **Telegram native rich rendering** — **[#2877 — native rich rendering via Bot API 10.1 sendRichMessage](https://github.com/nanocoai/nanoclaw/pull/2877)** is a feature-complete PR open since Jun 28; still awaiting maintainer review.
- **Persistent group-scoped OneCLI secret assignment** — **[#3205](https://github.com/nanocoai/nanoclaw/issues/3205)** flags an unresolved design fork: two contradictory directions for which vault secrets an agent receives at spawn, with no persistent per-group model. This likely needs a maintainer decision before the next multi-user hardening release.

## 7. User Feedback Summary

- **Governance trust is the top pain point**: Discord approval cards currently cannot capture owner/admin votes, and requests get auto-rejected despite a correct click (#3201). This undermines confidence in async multi-user config workflows.
- **Silent failure modes recur**: attachments are dropped without error on Google Chat (#3206) and Signal (#2528), meaning users only discover loss when the agent cannot see the file.
- **Contributor engagement is healthy**: PRs arrived from multiple recurring contributors (clementdecoligny for MCP/Strava, wakqasahmed for Mattermost, omerh for Discord), signaling strong external demand for more channel adapters and MCP extensibility.
- **Documentation drift frustrates contributors**: #3204 shows users following skill instructions that no longer match the refactored container build, and guard tests that encode the obsolete shape.

## 8. Backlog Watch

- **[#2528 — Signal image/PDF attachments unreachable from agent container](https://github.com/nanocoai/nanoclaw/issues/2528)**: open since May 18 (83 days), 0 comments, no assignee. Silent attachment loss in a supported channel; needs triage and reproduction on current `main`.
- **[#2877 — Telegram native rich rendering PR](https://github.com/nanocoai/nanoclaw/pull/2877)**: open since Jun 28 (42 days) with no visible maintainer interaction, despite following the contributing guidelines.
- **[#3205 — OneCLI secret assignment design fork](https://github.com/nanocoai/nanoclaw/issues/3205)**: fresh but unresolved architecture question; a decision should be made before more spawn-time secret logic is layered on.
- **[#3202 — Mattermost integration (open)](https://github.com/nanocoai/nanoclaw/pull/3202) vs closed #3199**: both by the same author; worth confirming which PR is canonical and whether review continues on #3202 against the latest `ChannelAdapter` contract.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-08-09

## 1. Today's Overview

IronClaw is in an exceptionally high-velocity period: 30 issues were updated in the last 24 hours (24 closed, 6 open) and 50 PRs were touched (32 merged/closed, 18 open), with no new releases cut. The dominant signal is a major Reborn migration milestone — roughly 22 long-running Reborn parity/porting issues created in May–June were batch-closed on August 8, including the P0-gated `ProductWorkflow`/`InboundTurnService` facade ([#3280](https://github.com/nearai/ironclaw/issues/3280)). Simultaneously, feature development continues on the Web Debug Inspector (v1.1.0 epic), new channel capabilities (web-push, progressive Slack previews, presence-based conversations), and outbound delivery reliability. A concerning security finding was raised by an external contributor ([#7391](https://github.com/nearai/ironclaw/issues/7391)): core `SafetyLayer` validation functions appear to have no caller on the live Reborn turn path. Overall project health looks strong — a healthy mix of core maintainers, experienced contributors, and new contributors (notably `theredspoon`) landing substantive fixes.

## 2. Releases

No new releases in the last 24 hours. The most recent roadmap anchor remains the **v1.1.0** epic for the Web Debug Inspector ([#7218](https://github.com/nearai/ironclaw/issues/7218)).

## 3. Project Progress

### Merged/Closed PRs (highlights)
- **#7377** — `feat!: a run acts as its invoker — remove shared-route subject binding` ([#7377](https://github.com/nearai/ironclaw/pull/7377)): breaking behavioral change applying the "run acts as the user who invoked it" decision across three split paths, plus the full review-hardening pass from the 2026-08-08 multi-agent audit. Tagged `size: XL, risk: medium`.
- **#7029** — `fix(product): restore durable delivery claim` ([#7029](https://github.com/nearai/ironclaw/pull/7029)): makes the durable `Prepared → Sending` compare-and-swap the sole authority for vendor-egress ownership; part of the outbound reliability push.
- **#7382** — `feat(stress): scripted tool-call workload with durable write read-back` ([#7382](https://github.com/nearai/ironclaw/pull/7382)): Phase 1 of issue #7360; mock LLM sidecar now drives deterministic builtin/memory tool sequences with production-path read-back verification.
- **#6938** — `fix(skills): the model chooses the skill, not a keyword scorer` ([#6938](https://github.com/nearai/ironclaw/pull/6938)): removes host-side keyword-scoring activation; only explicit model requests via `builtin.skill_activate` activate skills.
- **#7280** — `test(inspector): add browser, security, and operator coverage` ([#7280](https://github.com/nearai/ironclaw/pull/7280)): security tests for operator authorization, cross-scope isolation, invalid cursors, connection limits, and verbose-data exclusion.
- **#7389** — `fix(live-qa): verify triggered Slack delivery through the two-lane contract` ([#7389](https://github.com/nearai/ironclaw/pull/7389)): repairs the `reborn-webui-v2-live-qa` lane that had failed every run since #7157.
- **#7393** — `test(disclosure): measure the Core delivery pair in the wide-catalog benchmark` ([#7393](https://github.com/nearai/ironclaw/pull/7393)): benchmark coverage for the two Core-tier tools moved in #7390.

### Closed Issues — Reborn Migration Sweep
24 issues closed, the bulk of them Reborn product-surface parity/porting trackers from May–June:
- **P0/P1 core**: ProductWorkflow facade ([#3280](https://github.com/nearai/ironclaw/issues/3280)), agent command behavior ([#3286](https://github.com/nearai/ironclaw/issues/3286)), memory/workspace surfaces ([#3287](https://github.com/nearai/ironclaw/issues/3287)), TurnCoordinator acceptance tests ([#3279](https://github.com/nearai/ironclaw/issues/3279)), CLI provider parity ([#4118](https://github.com/nearai/ironclaw/issues/4118)), Contributor Runway epic ([#3484](https://github.com/nearai/ironclaw/issues/3484)).
- **P2/refactoring**: external channel adapter migration ([#3285](https://github.com/nearai/ironclaw/issues/3285)), CLI/TUI/setup migration ([#3284](https://github.com/nearai/ironclaw/issues/3284)), WeChat channel port ([#3582](https://github.com/nearai/ironclaw/issues/3582)), legacy channel tracking ([#3577](https://github.com/nearai/ironclaw/issues/3577)), capability lifecycle admin parity ([#3288](https://github.com/nearai/ironclaw/issues/3288)), approvals parity epic ([#4539](https://github.com/nearai/ironclaw/issues/4539)), composition refactor ([#4470](https://github.com/nearai/ironclaw/issues/4470)), OAuth default-account behavior ([#4382](https://github.com/nearai/ironclaw/issues/4382)), declarative capability policy ([#4120](https://github.com/nearai/ironclaw/issues/4120)), user-scoped tool installs ([#3905](https://github.com/nearai/ironclaw/issues/3905)), and more.
- **Inspector**: browser/security/docs coverage ([#7226](https://github.com/nearai/ironclaw/issues/7226)) and bounded verbose tool details ([#7225](https://github.com/nearai/ironclaw/issues/7225)) both closed.

This batch closure signals that the Reborn architecture migration has reached a major completeness milestone, with dozens of tracked parity items now considered done.

## 4. Community Hot Topics

- **[#3280 — ProductWorkflow and InboundTurnService facade (7 comments, closed)](https://github.com/nearai/ironclaw/issues/3280)** — The most-commented issue; the P0 Reborn inbound-workflow facade that sits between ProductAdapters and host-layer services. Its closure caps the architecture work.
- **[#6989 — Token accounting: hybrid provider-usage + tail estimates (5 comments, open)](https://github.com/nearai/ironclaw/issues/6989)** — A P1 bug in `ModelWorkRequest::for_assistant` estimating input tokens from the `content_ref` string length rather than the referenced content. The sustained discussion reflects rising concern about cost-accuracy as token accounting moves to hybrid real-usage + tail-estimate mode.
- **[#6939 — Migration tool for legacy agent setup (2 comments, open)](https://github.com/nearai/ironclaw/issues/6939)** — User feedback that Hermes/Openclaw users face high switching costs; the only pure user-requested feature in the active set.
- **[#7360 — Expand stress coverage across built-in and durable write paths (2 comments, open)](https://github.com/nearai/ironclaw/issues/7360)** — Identifies a real test-coverage gap: the nightly stress harness never exercises tool calls, so capability-write regressions can land silently. Phase 1 landed via [#7382](https://github.com/nearai/ironclaw/pull/7382).
- **[#3288 — Production/scoped capability lifecycle admin parity (2 comments, closed)](https://github.com/nearai/ironclaw/issues/3288)** — Closure confirms lifecycle UX is preserved through typed Reborn services.

**Underlying needs:** (a) completion and validation of the Reborn rewrite — the dominant theme of the week; (b) cost accuracy and observability (token accounting, Web Debug Inspector); (c) adoption/onboarding friction for legacy-agent users; (d) regression-proofing via expanded stress and test coverage.

## 5. Bugs & Stability

Ranked by severity:

1. **Security: SafetyLayer validation not wired into live turn path** — [#7391 (open, filed 2026-08-08)](https://github.com/nearai/ironclaw/issues/7391). `SafetyLayer::validate_input` / `scan_inbound_for_secrets` exist but have no caller on the live Reborn turn path, contradicting the documented "Validate, Sanitize, Detect Leaks" data-flow. **No fix PR yet.** Highest priority given the security implication.
2. **P1 token accounting undercount** — [#6989 (open)](https://github.com/nearai/ironclaw/issues/6989). Input tokens estimated from the reference string length, not the referenced content — underbilling/under-reporting model usage. Active discussion, no fix PR yet.
3. **Outbound send-claim TOCTOU race + failed-row reopen** — fix PR [#7395 (open)](https://github.com/nearai/ironclaw/pull/7395) from new contributor `theredspoon`; closes a claim-loss misclassification between CAS failure and row re-read.
4. **Installed skills "gone forever"** — [#7168](https://github.com/nearai/ironclaw/issues/7168), fix in [#7171 (open)](https://github.com/nearai/ironclaw/pull/7171): skills absent from Settings and unactivatable after install; introduces a single DB-backed skill mount tree.
5. **Gate projection identity collision** — [#7352 (open)](https://github.com/nearai/ironclaw/pull/7352): multiple approval/auth gates on the same run derive the same durable delivery ID; fix binds projection identities to their gate ref.
6. **WebUI attachment regression** — [#7341 (open)](https://github.com/nearai/ironclaw/pull/7341): restores scoped attachment reads after the fetch/ReadableStream SSE transport migration.
7. **Live-qa Slack delivery regression (fixed)** — [#7389 (closed)](https://github.com/nearai/ironclaw/pull/7389): QA lane failed on every run since #7157 because delivery cases still relied on the retired completion-driver push record.

## 6. Feature Requests & Roadmap Signals

- **New epic: Replace first-party coding tools with pinned `omp` tool surface** — [#7392 (opened 2026-08-08)](https://github.com/nearai/ironclaw/issues/7392). Ship the exact `oh-my-pi` tool contract as IronClaw's model-visible coding surface. Likely a v1.1.x roadmap item with kernel-touching implications.
- **Migration tool for legacy agents** — [#6939 (open, p2)](https://github.com/nearai/ironclaw/issues/6939). Port Hermes/Openclaw setup, config, and memory. Currently no assignee; a strong candidate for the next minor release if prioritized, given user demand.
- **Web Debug Inspector (v1.1.0 epic)** — [#7218 (open)](https://github.com/nearai/ironclaw/issues/7218). The feature surface is essentially complete; open PR [#7291](https://github.com/nearai/ironclaw/pull/7291) adds statistics, navigation, and localization. Expected to ship in v1.1.0.
- **Channel feature wave (open PRs, likely v1.1.x):**
  - **Web-push notifications + PWA** as a first-party notification channel ([#7398](https://github.com/nearai/ironclaw/pull/7398), W3C Web Push/VAPID, XL).
  - **Generic progressive previews for Slack** ([#7396](https://github.com/nearai/ironclaw/pull/7396), channel-neutral preview contract).
  - **Presence-based shared conversations for Slack & Telegram** ([#7397](https://github.com/nearai/ironclaw/pull/7397), XL, building on the acting-identity ladder from #7377).
- **Stress coverage expansion** — [#7360 (open)](https://github.com/nearai/ironclaw/issues/7360): Phase 1 merged; follow-on phases should extend to built-in and durable write paths.

**Prediction:** v1.1.0 will likely ship the Web Debug Inspector plus at least one of the new channel features; the outbound reliability stack (`theredspoon`'s #7028/#7029/#7394/#7395 series) is on track to land as a hardened delivery core.

## 7. User Feedback Summary

- **Explicit switching-cost pain** ([#6939](https://github.com/nearai/ironclaw/issues/6939)): Users of legacy Hermes/Openclaw report they "would resist starting over with a clean slate" and may not migrate without a setup/memory porting tool. This is the clearest user-satisfaction risk in the current backlog.
- **External security review engagement** ([#7391](https://github.com/nearai/ironclaw/issues/7391)): An external contributor (0xkurious) cross-checked the documented security data-flow against the live code path and found the validation stage is not actually invoked. This indicates active community security auditing — a positive health signal, though the finding itself is serious.
- **Positive contributor dynamics**: New contributors (`theredspoon`) are landing well-scoped, review-hardened fixes in core domains (outbound delivery, CI, WASM), and `pranavraja99`/`italic-jinxin`/`BenKurrek` continue to deliver large feature PRs. The `ironloopai[bot]`-authored PR ([#7343](https://github.com/nearai/ironclaw/pull/7343)) suggests automated contribution flow is active — though it will need human maintainer review.

## 8. Backlog Watch

- **[#6939 — Migration tool (open since Jul 31, 2 comments, no assignee)](https://github.com/nearai/ironclaw/issues/6939)** — The most user-visible open feature request; silent for a week after 2 comments. Needs a maintainer decision (accept into roadmap vs. close with rationale).
- **[#7048 — WASM guest diagnostics sanitization (open since Aug 3, stacked on #7063)](https://github.com/nearai/ironclaw/pull/7048)** — XL fix from a new contributor, blocked on prerequisite #7063 then needs peel/rebase. Has been waiting 5 days.
- **[#7028 — Preserve terminal status during outbound recovery (open since Aug 3)](https://github.com/nearai/ironclaw/pull/7028)** — Small (S) but foundational for #7029's durability fix; should be fast-tracked to unblock the stack.
- **[#7171 — DB-backed skill mount tree (open since Aug 4)](https://github.com/nearai/ironclaw/pull/7171)** — Addresses a serious user-facing bug ("skill gone forever") but is XL and untagged for risk; deserves review priority.
- **[#7291 — Inspector stats/navigation/localization (open since Aug 6)](https://github.com/nearai/ironclaw/pull/7291)** — `human-verified` XL PR near the v1.1.0 critical path.
- **[#7343 — LLM settings reset (open since Aug 7, bot-authored)](https://github.com/nearai/ironclaw/pull/7343)** — XL PR from `ironloopai[bot]`; automated submissions of this size require careful maintainer review to avoid subtle product-behavior regressions.
- **[#6989 — Token accounting P1 (open since Aug 1, 5 comments)](https://github.com/nearai/ironclaw/issues/6989)** — No fix PR yet despite being P1 and part of the pi-harness adoption program; the cost-accuracy implications make this worth prioritizing.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-08-09

## 1. Today's Overview

Activity over the last 24 hours was light but non-trivial: 1 issue was updated, 3 pull requests saw updates, and 0 new releases were published. Notably, the LiteLLM AI-gateway feature PR (#2193) moved to a closed/merged state, representing the project's only completed piece of work in this window. The remaining updates were a long-dormant SQLite performance PR (#1193), a stale docs badge PR (#2294), and the recurring user-facing issue about tool default configuration (#1192). Several items carry the `stale` label, indicating that maintainer bandwidth may be limited, though the community continues to submit meaningful contributions. Overall, the project appears to be in a steady, low-cadence maintenance phase rather than a burst of rapid development.

## 2. Releases

No new releases were published in the last 24 hours. This section is omitted.

## 3. Project Progress

**Merged/Closed PRs:**

- **[#2193 — feat: add LiteLLM as AI gateway provider](https://github.com/netease-youdao/LobsterAI/pull/2193)** `[CLOSED]`
  - Adds [LiteLLM](https://litellm.ai) as an AI gateway provider, letting users point the base URL at a LiteLLM proxy to reach 100+ LLM providers through a single OpenAI-compatible endpoint.
  - Reuses the existing `chatWithOpenAICompatible` handler — no new dependencies.
  - Touches `renderer`, `main`, and `openclaw` areas, so the integration is cross-cutting.
  - This is the only PR that reached a closed/merged state in the last 24 hours and represents a genuine feature advancement for provider flexibility.

## 4. Community Hot Topics

The most active items by engagement this period:

- **[Issue #1192 — 自定义已有工具的默认配置 (Customize default configuration for existing tools)](https://github.com/netease-youdao/LobsterAI/issues/1192)** `[OPEN]` | 1 comment
  - The only item with explicit comment activity. The user asks for the ability to hardcode default configurations for existing tools — specifically launching the browser tool in headless mode to avoid disruptive pop-up windows.
  - **Underlying need:** power users want deterministic, user-controlled tool behavior that does not depend on variable LLM instruction-following. This is a recurring tension between "agent autonomy" and "user determinism" in agent frameworks.

No PRs recorded explicit comment counts, and no issues or PRs had reaction (👍) activity within this window.

## 5. Bugs & Stability

No new bug reports, crashes, or regressions were filed or updated in the last 24 hours. However, one ongoing stability/performance concern remains visible:

- **[PR #1193 — perf(sqlite): eliminate write amplification with debounce + batch transactions](https://github.com/netease-youdao/LobsterAI/pull/1193)** `[OPEN]`
  - Severity: **Medium (performance/stability).** The PR identifies a root cause where every single row mutation in `SqliteStore.save()` triggers a full `db.export()` + `fs.writeFileSync()` of the entire in-memory database (`sql.js` has no incremental persistence). This write-amplification issue can degrade performance and increase disk wear, especially under high mutation loads.
  - No corresponding fix has been merged yet; the PR remains open and stale since 2026-04-01.

## 6. Feature Requests & Roadmap Signals

Two clear feature signals emerged:

1. **[#2193 — LiteLLM AI gateway provider](https://github.com/netease-youdao/LobsterAI/pull/2193)** `[CLOSED]` — Now merged/closed, this will likely appear in the next release. Expect broader LLM provider support (100+ providers through LiteLLM proxies) with zero additional dependencies.
2. **[#1192 — Hardcoded default tool configuration](https://github.com/netease-youdao/LobsterAI/issues/1192)** `[OPEN]` — User request to override existing tool defaults (e.g., forcing headless browser mode) without relying on LLM instruction adherence. If maintainers engage, this could become a small-but-impactful UX enhancement in a future version, possibly as a per-tool configuration schema.

**Prediction:** The next release will likely include the LiteLLM provider integration. The tool-default-configuration feature is plausible for a following release if the maintainers respond positively and prioritize user-controllable agent behavior.

## 7. User Feedback Summary

- **Real pain point (from #1192):** The user reports that LLM instruction-following is frequently unreliable — "大模型的指令跟随经常不好" — causing the browser tool to open a visible window despite explicit memory instructions to use headless mode. The user wants a deterministic "hardcode" option instead of hoping the model complies.
- **Use case:** Uninterrupted background operation; the user does not want UI pop-ups during automated browser tasks.
- **Satisfaction:** Low for this specific scenario; the tone is polite but frustrated, indicating that agentic behavior needs escape hatches for deterministic settings. No positive feedback or praise was recorded in this window.

## 8. Backlog Watch

Items that have gone unanswered or unmerged for a long time and need maintainer attention:

- **[PR #1193 — SQLite write amplification fix](https://github.com/netease-youdao/LobsterAI/pull/1193)** — Open since **2026-04-01**, stale, no merge. A well-scoped performance fix addressing a known architectural inefficiency. High value; deserves a maintainer review.
- **[Issue #1192 — Tool default configuration](https://github.com/netease-youdao/LobsterAI/issues/1192)** — Open since **2026-04-01**, stale, only 1 comment. A user-visible quality-of-life request with no maintainer response. At minimum, a triage/acknowledgment is warranted.
- **[PR #2294 — docs: add TakoAPI directory badge](https://github.com/netease-youdao/LobsterAI/pull/2294)** — Open since **2026-07-08**, stale. A trivial documentation addition (listing LobsterAI in the [TakoAPI](https://takoapi.com) open agent directory). Easy to merge; low risk, and improves project discoverability.

**Health assessment:** The project is stable but maintainer response times are slow, as evidenced by multiple stale items from Q1/Q2 2026. Community contributions continue (perf fixes, provider integrations, docs), which signals healthy external interest. Prioritizing the SQLite perf PR (#1193) and responding to #1192 would clear the two most valuable long-standing items.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-08-09

## 1. Today's Overview

Moltis saw quiet but meaningful activity over the past 24 hours: 2 issues and 1 PR were updated, and no new releases were published. The headline event is the closure of the long-running Docker filesystem bug (#1096) via PR #1105, restoring `Read`/`Write`/`Edit` tool functionality in Docker sandboxes. At the same time, a fresh bug (#1185) was filed reporting that Apple Container 1.x sandboxes start but are incorrectly treated as not running by Moltis. Overall, the project appears healthy: an older, high-impact issue was retired with accompanying regression coverage, while the new report awaits triage.

## 2. Releases

No new releases were published in the last 24 hours.

## 3. Project Progress

**PR #1105 — Fix Docker sandbox filesystem tool fallback** ([view](https://github.com/moltis-org/moltis/pull/1105)) — closed (by penso)
- Adds regression coverage for sandboxed `Read`/`Write`/`Edit`/`MultiEdit` operations on `/home/sandbox` and `workspace/data` paths.
- Implements a fallback from translated Docker host paths to container operations when the gateway process cannot access the host mount.
- Preserves direct-host missing-list semantics.
- This directly addresses the underlying report in issue #1096, which was closed on the same day.

## 4. Community Hot Topics

No issue or PR accumulated meaningful discussion in the last 24 hours — every item shows **0 comments and 0 reactions**. The only item currently drawing attention by virtue of being new and open is:

- **#1185 — [Bug]: Apple Container 1.x sandbox starts but Moltis treats it as not running** ([view](https://github.com/moltis-org/moltis/issues/1185)) — filed by mikz on 2026-08-08, no comments yet. Given the absence of discussion, the community's implicit focus is on container/sandbox runtime parity across Docker and Apple Container environments.

## 5. Bugs & Stability

- **Medium-to-high (open):** [#1185](https://github.com/moltis-org/moltis/issues/1185) — Apple Container 1.x sandbox detection fails: the sandbox starts but Moltis does not recognize it as running. This affects sandbox lifecycle handling on macOS/Apple Container environments. No fix PR exists yet.
- **Resolved:** [#1096](https://github.com/moltis-org/moltis/issues/1096) — `Read`/`Write`/`Edit` tools did not work in Docker (reported June 3). Closed on 2026-08-08 as PR #1105 was completed, removing a previously significant blocker for Docker-based users.

## 6. Feature Requests & Roadmap Signals

No explicit feature requests were filed or updated in the observation window. The only roadmap signal is the infrastructure hardening visible in PR #1105, which suggests continued investment in sandbox runtime compatibility and filesystem path translation — areas that will likely underpin future multi-runtime support (Docker, Apple Container, and others). No clear next-version feature candidates emerged from user requests this period.

## 7. User Feedback Summary

User-reported pain points converge on sandbox and container interoperability:

- **Docker filesystem tooling:** Users reported that core file operations failed inside Docker; feedback is effectively addressed by PR #1105, which adds both a fallback mechanism and regression coverage.
- **Apple Container 1.x detection:** A fresh complaint ([#1185](https://github.com/moltis-org/moltis/issues/1185)) indicates runtime-state detection is inconsistent across container providers; user satisfaction here remains uncertain until a fix is confirmed.

With zero comments and reactions captured in the last 24h, there are no additional satisfaction signals to quantify.

## 8. Backlog Watch

- **[#1185](https://github.com/moltis-org/moltis/issues/1185)** (open, filed 2026-08-08) — Newly reported and already lacks maintainer acknowledgement; warrants triage to confirm scope (Apple Container 1.x detection) and to connect it with the sandbox state logic touched by PR #1105.
- **#1096 / #1105** — Both resolved and closed as of 2026-08-08; removed from the backlog.
- No other long-dormant or unaddressed items appear in the current update set.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw / QwenPaw Project Digest — 2026-08-09

## 1. Today's Overview

CoPaw/QwenPaw is in a high-activity stabilization phase: 19 issues were updated in the last 24 hours (17 open, 2 closed), and 50 pull requests were updated (47 open, 3 merged/closed). No new release was published during this window, so the project remains focused on hardening the ongoing 2.1.0 beta line rather than shipping new artifacts. The dominant themes are desktop/macOS integration bugs, MCP and provider compatibility failures, and frontend performance complaints. The 47 open PRs also indicate a substantial review backlog that may become the next bottleneck.

## 2. Releases

No new releases were published in the last 24 hours.

## 3. Project Progress

The provided data does not identify the three merged/closed PRs by name, so no merged feature can be confidently highlighted from this snapshot. Two issues were closed:

- [#6756 — `run_tool_batch` error "No toolkit available in current context"](https://github.com/agentscope-ai/QwenPaw/issues/6756) was closed, suggesting the toolkit context-injection bug was resolved.
- [#4558 — Abnormally high CPU usage during long text output](https://github.com/agentscope-ai/QwenPaw/issues/4558) was closed, indicating progress on frontend rendering performance.

Notable open PRs continue to advance key areas, including chat deletion cleanup ([#6536](https://github.com/agentscope-ai/QwenPaw/pull/6536)), Scroll history session retention ([#6591](https://github.com/agentscope-ai/QwenPaw/pull/6591)), chat-history pagination and compression ([#6636](https://github.com/agentscope-ai/QwenPaw/pull/6636)), and macOS packaged-backend PATH handling ([#5861](https://github.com/agentscope-ai/QwenPaw/pull/5861)).

## 4. Community Hot Topics

- [#6782 — Docker 2.0.1 plugin/app market always shows "maintenance"](https://github.com/agentscope-ai/QwenPaw/issues/6782) — 9 comments
  Users of the Docker image cannot access plugin or application markets at all. This is the single most commented issue and points to a release-blocking regression for Docker deployments.

- [#6811 — OpenAI Responses continuation summary ignores `disable_thinking` and misreports 60-second cancellation as malformed output](https://github.com/agentscope-ai/QwenPaw/issues/6811) — 5 comments
  A beta-specific bug in Scroll eviction: the continuation summary blocks the main conversation and can be misreported as a failure. This is a deep async/context-management issue.

- [#6490 — Add Volcengine Agent Plan and Xiaomi MiMo Standard API as built-in providers](https://github.com/agentscope-ai/QwenPaw/issues/6490) — 5 comments
  A long-running feature request for two additional built-in providers. Several comments suggest users actively want more China-market provider support.

- [#6820 — Frontend UI does not show model output/tool calls/thinking until the entire run completes](https://github.com/agentscope-ai/QwenPaw/issues/6820) — 4 comments
  Streaming transparency is an important UX need: users want incremental output, not delayed batch rendering.

Underlying need: users are pushing for more provider choice, more transparent streaming/approval UX, and immediate fixes to environment-specific deployment bugs.

## 5. Bugs & Stability

Ranked by severity:

- **Critical — SIGBUS crash on macOS when opening Scroll history database**  
  [#6814 — SIGBUS (FS pagein 22) in `sqlite3WalFindFrame`](https://github.com/agentscope-ai/QwenPaw/issues/6814)  
  Opening `history.db` in WAL mode can crash QwenPaw on macOS. This is a stability/data-access risk and currently has no known fix PR.

- **High — Transient MCP connection failure permanently blocks the active conversation**  
  [#6822 — Streamable HTTP MCP reconnect leaves conversation blocked indefinitely](https://github.com/agentscope-ai/QwenPaw/issues/6822)  
  A brief network failure during tool discovery can permanently block the active session. High impact for remote-MCP users.

- **High — Thinking-mode relay failure with `reasoning_content`**  
  [#6821 — `reasoning_content` relay fails for thinking-mode models → 400 error](https://github.com/agentscope-ai/QwenPaw/issues/6821)  
  Multi-turn conversations with thinking-mode models such as DeepSeek V4 break with a hard 400 error.

- **High — OpenAI Responses continuation summary blocks and misreports cancellation**  
  [#6811 — Continuation summary ignores `disable_thinking`, misreports 60-second cancellation](https://github.com/agentscope-ai/QwenPaw/issues/6811)  
  Affects long chats using OpenAI Responses with reasoning models; can freeze the active conversation.

- **Medium — Gemini provider sends invalid `$schema` field in tool schemas**  
  [#6812 — Model 'unknown' execution failed in Google API](https://github.com/agentscope-ai/QwenPaw/issues/6812)  
  The Gemini provider includes an extra `$schema` field that the Gemini API rejects. Blocks Gemini tool calls entirely.

- **Medium — Windows installer fails due to file locks on existing processes**  
  [#6810 — Windows install/update should terminate processes before overwriting files](https://github.com/agentscope-ai/QwenPaw/issues/6810)  
  NSIS reports "cannot write file" errors for core binaries. Likely affects every Windows auto-update path.

- **Medium — Local Whisper broken on macOS because backend PATH excludes `/opt/homebrew/bin`**  
  [#6831 — Desktop macOS Whisper shows "ffmpeg: disabled"](https://github.com/agentscope-ai/QwenPaw/issues/6831)  
  Homebrew ffmpeg is never found. PR [#5861](https://github.com/agentscope-ai/QwenPaw/pull/5861) may address this class of PATH problem but is still open.

- **Medium — Console idle CPU burn from infinite CSS animations**  
  [#6828 — Desktop frontend keeps repainting at idle (~20% CPU)](https://github.com/agentscope-ai/QwenPaw/issues/6828)  
  Caused by `ai-copilot-blink` and an offscreen antd load-more spinner. Leads to visible UI jank on desktop.

- **Medium — Docker plugin/app market permanently "under maintenance"**  
  [#6782 — Docker version cannot use plugin/app market](https://github.com/agentscope-ai/QwenPaw/issues/6782)  
  Functional blocker for Docker deployments.

- **Low — Assistant message end time shows incorrect value**  
  [#6826 — Assistant message end time display anomaly](https://github.com/agentscope-ai/QwenPaw/issues/6826)  
  A 2-minute assistant turn is displayed as a few seconds in the UI.

## 6. Feature Requests & Roadmap Signals

- [#6490 — Add Volcengine Agent Plan and Xiaomi MiMo Standard API as built-in providers](https://github.com/agentscope-ai/QwenPaw/issues/6490) — likely candidate for a provider-layer enhancement in an upcoming minor release.
- [#6832 — AI approval requests should include a description of the approval purpose](https://github.com/agentscope-ai/QwenPaw/issues/6832) — approval UX needs better context, likely to be picked up in a 2.1.x UX pass.
- [#6827 — When deleting a chat, optionally clean up temporary files created by that chat](https://github.com/agentscope-ai/QwenPaw/issues/6827) — data-hygiene feature; PR [#6536](https://github.com/agentscope-ai/QwenPaw/pull/6536) already targets persisted-data cleanup on deletion.
- [#6838 — Sub-agent model switching and shared workspace issues](https://github.com/agentscope-ai/QwenPaw/issues/6838) — sub-agent workflows need better model routing and config isolation.
- [#6819 — Channel tool does not prompt for approval when required](https://github.com/agentscope-ai/QwenPaw/issues/6819) — completion transparency for tool approval is missing.

Roadmap signals from PRs: reranker support for ReMe memory ([#6398](https://github.com/agentscope-ai/QwenPaw/pull/6398)), persistent workspace artifact cards ([#6719](https://github.com/agentscope-ai/QwenPaw/pull/6719)), OneBot remote media handling ([#6715](https://github.com/agentscope-ai/QwenPaw/pull/6715)), and qwen3.8-max-preview in the Aliyun Token Plan ([#6293](https://github.com/agentscope-ai/QwenPaw/pull/6293)).

Next-version prediction: a 2.1.0 release candidate will likely focus on provider compatibility fixes (#6812, #6821), chat deletion/data cleanup (#6536, #6827), and macOS PATH/Whisper fixes (#5861, #6831).

## 7. User Feedback Summary

Real user pain points visible in this snapshot:

- Docker users feel blocked by the unavailable plugin/app market despite a clean 2.0.1 install.
- Windows users are frustrated by failed auto-updates and manual installs due to locked files.
- macOS desktop users report broken local Whisper even when ffmpeg is installed, and one severe database crash when opening history.
- Beta users are hitting conversation-blocking edge cases with MCP reconnects, OpenAI continuation summaries, and thinking-mode models.
- Several Chinese-language users report frontend/UI issues, indicating a significant non-English user base that relies on QwenPaw for agent workflows.
- Feature requests around approval descriptions and temp-file cleanup are constructive signals: users are actively using the tool in daily workflows and want operational safety improvements.

Overall sentiment is mixed: the project is visibly improving and highly used, but beta-stage stability issues on macOS, Windows, and remote-MCP deployments are creating frustration.

## 8. Backlog Watch

PRs and issues that have been open for an extended period and likely need maintainer attention:

- [#5861 — fix(desktop): resolve login-shell PATH for packaged macOS backend](https://github.com/agentscope-ai/QwenPaw/pull/5861)  
  Open since 2026-07-08, first-time contributor, under review. Directly relates to the macOS PATH/Whisper bug reported in #6831.

- [#6041 — fix(loop): exempt read-only tools from doom loop detection](https://github.com/agentscope-ai/QwenPaw/pull/6041)  
  Open since 2026-07-13, first-time contributor. Addresses a false-positive class of bug that terminates legitimate memory recall.

- [#6102 — test(isolation): boundary meta-test pinning #5813 failure modes](https://github.com/agentscope-ai/QwenPaw/pull/6102)  
  Open since 2026-07-14. Important for reducing "passes in isolation, fails in full suite" debugging time.

- [#6238 — perf(drivers): initialize handlers concurrently](https://github.com/agentscope-ai/QwenPaw/pull/6238)  
  Open since 2026-07-18, under review. Meaningful startup latency improvement for multi-MCP setups.

- [#6398 — feat: add reranker support for ReMe memory search](https://github.com/agentscope-ai/QwenPaw/pull/6398)  
  Open since 2026-07-23, under review. Would meaningfully improve memory retrieval quality.

- [#6490 — Add Volcengine Agent Plan and Xiaomi MiMo Standard API as built-in providers](https://github.com/agentscope-ai/QwenPaw/issues/6490)  
  Open since 2026-07-27 with 5 comments; a clear provider-expansion request that has not been resolved.

The concentration of older open PRs, especially from first-time contributors, suggests maintainer review capacity may be becoming a project-health concern.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-08-09

## 1. Today's Overview

ZeroClaw saw a high level of activity over the last 24 hours: 50 issues and 50 PRs were updated, with 47 issues and 48 PRs remaining open/active. No new releases were published. The pulse is dominated by security hardening (path-permission bypasses, leak-detector false positives, webhook authentication), a consolidated SOP (Standard Operating Procedure) execution fix, and channel UX polish for Telegram (tool-call progress, typing indicators). Two closed PRs ([#9494](https://github.com/zeroclaw-labs/zeroclaw/pull/9494), [#9798](https://github.com/zeroclaw-labs/zeroclaw/pull/9798)) were superseded by the broader fix [#9841](https://github.com/zeroclaw-labs/zeroclaw/pull/9841), indicating an active handoff-and-rebase workflow on the SOP runtime path. Overall, the project appears to be in a high-velocity stabilization phase, with the maintainer decision queue ([#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692)) actively managing RFC load.

## 2. Releases

No new releases were published in the last 24 hours. The only release-adjacent activity was CI maintenance for the AUR and Scoop publishing pipelines ([#9787](https://github.com/zeroclaw-labs/zeroclaw/pull/9787), [#9785](https://github.com/zeroclaw-labs/zeroclaw/pull/9785)), which suggests the next release cut is still being prepared.

## 3. Project Progress

Two PRs closed in this window, both superseded rather than merged:

- [#9494 fix(sop): drive cron-started headless runs](https://github.com/zeroclaw-labs/zeroclaw/pull/9494) — closed; superseded by #9841 after a public handoff from @Lusitaniae.
- [#9798 docs(sop): document which agent executes SOP steps](https://github.com/zeroclaw-labs/zeroclaw/pull/9798) — closed; the docs-only patch captured behavior that the runtime fix removes.

Active advances:

- [#9841 fix(sop): drive headless SOP runs](https://github.com/zeroclaw-labs/zeroclaw/pull/9841) — canonical continuation of #9494, rebased onto master; fixes four blocking review findings plus one additional defect found during review. Carries four original commits unchanged.
- [#9822 feat(channels): show Telegram tool progress in partial drafts](https://github.com/zeroclaw-labs/zeroclaw/pull/9822) — routes the existing `update_draft_progress` hook into the draft-edit path when `stream_mode = "partial"`.
- [#9823 fix(channels): pause typing during approval waits](https://github.com/zeroclaw-labs/zeroclaw/pull/9823) — per-turn scoped typing controller; stops the Telegram typing indicator while approval cards are pending.
- [#9854 fix(providers): derive context-window discovery from the family registry](https://github.com/zeroclaw-labs/zeroclaw/pull/9854) — replaces a hand-written list of eight provider names with registry-driven discovery.
- [#9856 chore(deps): bump actions/attest to v4.2.2](https://github.com/zeroclaw-labs/zeroclaw/pull/9856) — CI attestation sync.
- [#9817 docs(rfc): route RFC intake by what the author knows](https://github.com/zeroclaw-labs/zeroclaw/pull/9817) — new routing guidance to gate RFC intake on an explicit trigger.
- [#9694 feat(zerocode): expose the SOP pane as a read-only status view](https://github.com/zeroclaw-labs/zeroclaw/pull/9694) — closes visibility tracker #9682; depends on #9692.

Also updated and still open: [#9828](https://github.com/zeroclaw-labs/zeroclaw/pull/9828) (agent-facing config authoring), [#9744](https://github.com/zeroclaw-labs/zeroclaw/pull/9744) (authenticated webhook ingress), [#9580](https://github.com/zeroclaw-labs/zeroclaw/pull/9580) (network guard primitives move), [#9571](https://github.com/zeroclaw-labs/zeroclaw/pull/9571) (WATI channel removal), [#9410](https://github.com/zeroclaw-labs/zeroclaw/pull/9410) (command audit logging default off), [#9272](https://github.com/zeroclaw-labs/zeroclaw/pull/9272) / [#9268](https://github.com/zeroclaw-labs/zeroclaw/pull/9268) (safeguard fallback notices), [#9739](https://github.com/zeroclaw-labs/zeroclaw/pull/9739) (multi-session zerocode panes), and [#8337](https://github.com/zeroclaw-labs/zeroclaw/pull/8337) (herdr agent reporting).

## 4. Community Hot Topics

Most-discussed issues by comment count:

- [#8692 Tracker: Maintainer decision queue for RFCs and design issues](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) — 11 comments. The central triage point for RFCs, design issues, release-policy questions, and coordination trackers.
- [#8043 RFC: Retire the standalone aardvark-sys crate](https://github.com/zeroclaw-labs/zeroclaw/issues/8043) — 11 comments, now **closed**. Long-running RFC resolved; a companion RFC ([#9803](https://github.com/zeroclaw-labs/zeroclaw/issues/9803)) proposes the same folding-in for `zeroclaw-robot-kit`.
- [#8424 RFC: Workspace-relative forbidden path patterns and .zeroclawignore](https://github.com/zeroclaw-labs/zeroclaw/issues/8424) — 11 comments. Strong interest in protecting workspace-internal sensitive files (`.env`, `rust-toolchain.toml`, etc.) from agent access.
- [#8054 System prompt tool-availability mismatch across entry points](https://github.com/zeroclaw-labs/zeroclaw/issues/8054) — 10 comments. Follow-up to #7756/#8053; the mismatch class persists across channels, gateway, WebSocket, multimodal, and `/think` paths.
- [#8550 Add OpenAI-compatible chat completions endpoint](https://github.com/zeroclaw-labs/zeroclaw/issues/8550) — 6 comments. Demand from Open WebUI/LobeChat/custom-integration users who cannot connect via WebSocket-only protocols.
- [#5514 Batch Telegram media groups into one multimodal turn](https://github.com/zeroclaw-labs/zeroclaw/issues/5514) — 6 comments. Longest-lived issue in the active set (April), still in progress.

Underlying needs: users are pushing for (a) security controls that behave intuitively *inside* the workspace, (b) ecosystem interoperability via an OpenAI-compatible API, and (c) channel UX maturity (media batching, typing/streaming correctness, approval clarity).

## 5. Bugs & Stability

Security-critical (p1):

- [#9815 forbidden_paths is unreachable for any path under allowed_roots or the workspace](https://github.com/zeroclaw-labs/zeroclaw/issues/9815) — allow checks return early, making `forbidden_paths` a no-op for the paths it was designed to protect. Accepted.
- [#9390 Emergency stop is a CLI-only state file that no runtime path reads](https://github.com/zeroclaw-labs/zeroclaw/issues/9390) — documented guarantee is not implemented; line-cited audit. In progress.
- [#9387 Interactive approval responses accepted from any chat member](https://github.com/zeroclaw-labs/zeroclaw/issues/9387) — telegram, slack, lark, and matrix affected; any member can approve or deny. In progress.
- [#9825 Leak detector redacts public blockchain addresses](https://github.com/zeroclaw-labs/zeroclaw/issues/9825) — false positive makes payment-request URLs undeliverable. Accepted.
- [#9486 High-entropy detector redacts Solana wallet addresses; `high_entropy_tokens=false` ignored on channel path](https://github.com/zeroclaw-labs/zeroclaw/issues/9486) — blocks Telegram + MCP blockchain use cases. In progress.
- [#8731 Stdio-based MCP servers accumulate as zombie processes](https://github.com/zeroclaw-labs/zeroclaw/issues/8731) — sub-processes not reaped; degrades daemon over time. In progress.

Functional/reliability (p1):

- [#8559 Agents stop their work when exiting the chat window in web dashboard](https://github.com/zeroclaw-labs/zeroclaw/issues/8559) — S1 workflow-blocked; session exit interrupts the agent loop.
- [#9340 CLI-created cron jobs cannot deliver output; delivery hardcoded to None](https://github.com/zeroclaw-labs/zeroclaw/issues/9340) — runs recorded as `ok` while output is silently discarded. In progress.
- [#9805 SOP auto-mode runs from channel/cron triggers never execute](https://github.com/zeroclaw-labs/zeroclaw/issues/9805) — runs rot as `running` forever, holding concurrency slots and surviving daemon restarts. Fix PR [#9841](https://github.com/zeroclaw-labs/zeroclaw/pull/9841) is open.
- [#9573 Cost pricing lookup fails for multiple aliases of the same provider type](https://github.com/zeroclaw-labs/zeroclaw/issues/9573) — accepted.
- [#9816 Anthropic provider reports $0.00 spend, so daily/monthly budget caps never fire](https://github.com/zeroclaw-labs/zeroclaw/issues/9816) — accepted.
- [#9035 Docker Compose gateway can remain loopback-bound behind a published port](https://github.com/zeroclaw-labs/zeroclaw/issues/9035) — S1 workflow-blocked; "Connection refused" despite proper bridging.

Channel/UX (p2):

- [#9656 Typing indicator runs for the whole approval wait](https://github.com/zeroclaw-labs/zeroclaw/issues/9656) — a blocked turn looks like a working one; fix PR [#9823](https://github.com/zeroclaw-labs/zeroclaw/pull/9823) is open.
- [#8410 Channel tasks need a first-class intentional no-reply outcome](https://github.com/zeroclaw-labs/zeroclaw/issues/8410) — conditional tasks still send visible responses. Accepted.
- [#9202 `zeroclaw desktop` uses dead download URL and misses installed AppImage](https://github.com/zeroclaw-labs/zeroclaw/issues/9202).

Fix PRs in flight: [#9841](https://github.com/zeroclaw-labs/zeroclaw/pull/9841) (SOP headless), [#9823](https://github.com/zeroclaw-labs/zeroclaw/pull/9823) (approval typing pause), [#9822](https://github.com/zeroclaw-labs/zeroclaw/pull/9822) (tool progress), [#9854](https://github.com/zeroclaw-labs/zeroclaw/pull/9854) (context-window discovery), [#9744](https://github.com/zeroclaw-labs/zeroclaw/pull/9744) (authenticated webhook ingress), [#9580](https://github.com/zeroclaw-labs/zeroclaw/pull/9580) (network guard primitives), [#9410](https://github.com/zeroclaw-labs/zeroclaw/pull/9410) (audit logging default off).

## 6. Feature Requests & Roadmap Signals

- [#8550 OpenAI-compatible chat completions endpoint](https://github.com/zeroclaw-labs/zeroclaw/issues/8550) — the strongest roadmap signal; would unlock Open WebUI, LobeChat, and custom clients. Candidate for the next minor release.
- [#9346 RFC: Unified package/capability/config/runtime-state catalog contract](https://github.com/zeroclaw-labs/zeroclaw/issues/9346) — product-level catalog across integrations, built-ins, and plugins; aligns with #6489 and the narrower #8908/#8909 efforts.
- [#9824 Simplify the default web-tool surface to web_fetch + web_research + http_request](https://github.com/zeroclaw-labs/zeroclaw/issues/9824) — signals a tooling UX simplification push, with browser automation becoming opt-in.
- [#9845 Support non-ASCII characters in agent aliases](https://github.com/zeroclaw-labs/zeroclaw/issues/9845) — small but important for i18n users (e.g. `[agents."审核助手"]`).
- [#8445 Telegram channel multi-message mode](https://github.com/zeroclaw-labs/zeroclaw/issues/8445) — one message per agent turn instead of concatenation.
- [#8424 Optional .zeroclawignore](https://github.com/zeroclaw-labs/zeroclaw/issues/8424) — workspace-relative exclusions; high community interest and an active RFC.
- [#9496 Streamline RFC scope, discussion, voting, and assignment](https://github.com/zeroclaw-labs/zeroclaw/issues/9496) — meta-process reform to cut the seven-day minimum discussion and simplify vote coordination.

Consolidation trend: [#8043](https://github.com/zeroclaw-labs/zeroclaw/issues/8043) (closed) and [#9803](https://github.com/zeroclaw-labs/zeroclaw/issues/9803) retire standalone hardware crates into `zeroclaw-hardware`; PR [#9571](https://github.com/zeroclaw-labs/zeroclaw/pull/9571) removes the WATI channel entirely. The project is deliberately narrowing scope.

Prediction: the SOP headless-run fix ([#9841](https://github.com/zeroclaw-labs/zeroclaw/pull/9841)) and the Telegram approval typing fix ([#9823](https://github.com/zeroclaw-labs/zeroclaw/pull/9823)) are likely to merge soon. The OpenAI-compatible endpoint (#8550) and the unified catalog (#9346) are strong candidates for the next minor release.

## 7. User Feedback Summary

Pain points expressed this window:

- **Blockchain + Telegram users are blocked**: "An agent with a Solana MCP server cannot state a wallet address. Every address in an outbound Telegram message is replaced with `[REDACTED_HIGH_ENTROPY_TOKEN]`" — with a Russian-language example (`Твой кошелёк (mainnet): [REDACTED...]`), and `high_entropy_tokens=false` not honored on the channel path ([#9486](https://github.com/zeroclaw-labs/zeroclaw/issues/9486), [#9825](https://github.com/zeroclaw-labs/zeroclaw/issues/9825)).
- **Web dashboard users lose in-flight work**: leaving the chat session after assigning a task "stops the loop as interrupted by the user. This completely blocks from doing stuff while the agent is working" ([#8559](https://github.com/zeroclaw-labs/zeroclaw/issues/8559)).
- **Cron users get silent data loss**: "The run is recorded as `ok`, so nothing indicates the result went nowhere" ([#9340](https://github.com/zeroclaw-labs/zeroclaw/issues/9340)).
- **Docker users hit opaque networking failures**: "Connection refused" despite a properly bridged published port ([#9035](https://github.com/zeroclaw-labs/zeroclaw/issues/9035)).
- **SOP users report permanently stuck runs**: runs stay `running` at step 1 forever, holding concurrency slots across daemon restarts ([#9805](https://github.com/zeroclaw-labs/zeroclaw/issues/9805)).
- **Security auditors are engaged but demanding**: multiple issues were filed with every cited line checked against HEAD ("Found while auditing the host this project builds against"), indicating a technically sophisticated user base ([#9390](https://github.com/zeroclaw-labs/zeroclaw/issues/9390), [#9387](https://github.com/zeroclaw-labs/zeroclaw/issues/9387)).

Satisfaction / process signals:

- A functioning sponsored-RFC flow: RFCs are "Drafted with Claude (Opus 4.8), sponsored by @JordanTheJet", with ratification votes per RFC #5615 ([#8043](https://github.com/zeroclaw-labs/zeroclaw/issues/8043), [#9803](https://github.com/zeroclaw-labs/zeroclaw/issues/9803)).
- Multiple "distinguished contributor" PRs and clean handoffs (e.g., #9494 → #9841) show a structured, collaborative contribution process.
- The maintainer decision queue ([#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692)) and the RFC-streamlining proposal ([#9496](https://github.com/zeroclaw-labs/zeroclaw/issues/9496)) show maintainers actively responding to process friction.

## 8. Backlog Watch

Items needing attention:

- [#5514 Batch Telegram media groups into one multimodal turn](https://github.com/zeroclaw-labs/zeroclaw/issues/5514) — open since 2026-04-08, in progress for four months; the oldest open item in the active set.
- [#7099 Route `zeroclaw status` output through CLI i18n](https://github.com/zeroclaw-labs/zeroclaw/issues/7099) — p3, open since June, low traction.
- [#8337 herdr agent reporting integration](https://github.com/zeroclaw-labs/zeroclaw/pull/8337) — large observability PR (XL), open since 2026-06-26 with no recent merge movement.
- [#8054 System prompt tool-availability mismatch](https://github.com/zeroclaw-labs/zeroclaw/issues/8054) — p1 follow-up from #8053; the direct runtime path is fixed, but channels, gateway, WebSocket, multimodal, and `/think` still need the same fix.
- [#9571 Remove the WATI channel](https://github.com/zeroclaw-labs/zeroclaw/pull/9571) — labeled p0 with `needs-author-action`; a large removal touching CI, containers, installer, labeler, and web proxy.
- [#9744 Require authenticated webhook ingress before agent dispatch](https://github.com/zeroclaw-labs/zeroclaw/pull/9744) — XL security refactor, `needs-author-action`.
- [#9268](https://github.com/zeroclaw-labs/zeroclaw/pull/9268) / [#9272](https://github.com/zeroclaw-labs/zeroclaw/pull/9272) Safeguard fallback notices (channels + web chat) — stacked XL PRs open since 07-23; awaiting review or stack merge.

Bottleneck note: the maintainer decision queue ([#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692)) is the designated triage point for RFCs and design-level items. Items marked `needs-maintainer-review` ([#9346](https://github.com/zeroclaw-labs/zeroclaw/issues/9346), [#9496](https://github.com/zeroclaw-labs/zeroclaw/issues/9496)) and `needs-author-action` ([#8424](https://github.com/zeroclaw-labs/zeroclaw/issues/8424), [#9571](https://github.com/zeroclaw-labs/zeroclaw/pull/9571), [#9744](https://github.com/zeroclaw-labs/zeroclaw/pull/9744), [#9785](https://github.com/zeroclaw-labs/zeroclaw/pull/9785), [#9787](https://github.com/zeroclaw-labs/zeroclaw/pull/9787), [#9580](https://github.com/zeroclaw-labs/zeroclaw/pull/9580), [#9410](https://github.com/zeroclaw-labs/zeroclaw/pull/9410), [#9272](https://github.com/zeroclaw-labs/zeroclaw/pull/9272), [#9268](https://github.com/zeroclaw-labs/zeroclaw/pull/9268), [#9694](https://github.com/zeroclaw-labs/zeroclaw/pull/9694)) are the current workflow bottlenecks.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/boom7sss/agents-radar).*