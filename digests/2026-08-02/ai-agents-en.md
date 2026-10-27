# OpenClaw Ecosystem Digest 2026-08-02

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-08-02 03:32 UTC

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

# OpenClaw Project Digest — 2026-08-02

## 1. Today's Overview

OpenClaw saw extremely high activity over the last 24 hours, with 500 issues and 500 PRs updated (44 issues closed, 104 PRs merged/closed). A single new beta release, **v2026.7.2-beta.6**, shipped with a strong focus on state safety and recovery — a direct response to the cluster of data-loss, migration, and crash-loop reports seen this week. Maintainer throughput is high, with steipete alone authoring a dozen-plus PRs spanning Telegram, Discord, Matrix, MS Teams, media handling, and CI. Community reports continue to concentrate on session-state corruption, message loss, and model-turn lifecycle bugs, with several P0/P1 items still awaiting maintainer decisions. Overall, the project is responsive but under sustained pressure from stability regressions in the 2026.7.x series.

## 2. Releases

**v2026.7.2-beta.6** ([release](https://github.com/openclaw/openclaw/releases)) — openclaw 2026.7.2-beta.6

Highlights (from 2026.7.2):
- **State safety and recovery:** persisted data is now protected by a quarantine store that survives primary-database damage.
- Crash-recoverable SQLite snapshots.
- Crash-durable filesystem publication.
- Schema-upgrade data-loss rejection.
- Rollback-writer snapshot recovery.

The release notes are truncated in the available data; no explicit migration or breaking-change notes were captured. The emphasis on schema-upgrade safety and snapshot recovery aligns directly with open issues about migrations wiping conversation stores ([#94939](https://github.com/openclaw/openclaw/issues/94939)) and schema downgrades quarantining state DBs ([#115421](https://github.com/openclaw/openclaw/issues/115421)).

## 3. Project Progress

104 PRs were merged/closed in the last 24 hours. Visible closures:

- **[#117772 — test(mcp): make tools-list fixture logs deterministic](https://github.com/openclaw/openclaw/pull/117772)** (steipete): removes an async append race in MCP test fixtures; test-only change, all existing assertions preserved.
- **[#117775 — fix(tasks): prevent doubled tool activity after module reload](https://github.com/openclaw/openclaw/pull/117775)** (steipete): fixes task summaries reporting doubled tool activity after task-registry module reload; resolves the `expected 4 to be 2` CI failure signature; closes #117774.
- **[#117537 — fix(telegram): apply group media policy before inbound downloads](https://github.com/openclaw/openclaw/pull/117537)** (steipete): resolves album and captionless path divergence from the canonical mention policy; closes a Telegram group-media policy gap.

Notable open PRs advancing fixes (ready for maintainer review or awaiting author):

- **[#117721 — fix(control-ui): render live thinking agent events in WebChat](https://github.com/openclaw/openclaw/pull/117721)** (clawsweeper[bot]): fixes #88079, the long-standing Kimi Code / DeepSeek Reasoner reasoning-stream rendering bug.
- **[#117400 — fix(compaction): use canonical session context projection for post-turn estimator](https://github.com/openclaw/openclaw/pull/117400)**: prevents stale pre-boundary messages from inflating token estimates and triggering unnecessary compaction; closes #117358.
- **[#117074 — fix(sessions): cron-heavy agents accumulate invisible session store debris](https://github.com/openclaw/openclaw/pull/117074)**: cleans canonical SQLite history placeholders that ordinary pruning cannot reach.
- **[#117768 — fix(agents): reuse prepared runtime facts for configured turns](https://github.com/openclaw/openclaw/pull/117768)**: addresses an ~3× gateway-side turn-latency regression on plugin-heavy hosts (14.6–18.1s vs 3.3–4.9s).
- **[#117641 — fix(gateway): active turns are interrupted on SIGTERM](https://github.com/openclaw/openclaw/pull/117641)**: makes supervisor shutdown wait for in-progress turns instead of interrupting them.
- **[#115138 — perf(sqlite): memory-map reads on local-filesystem databases](https://github.com/openclaw/openclaw/pull/115138)**: enables `mmap_size` to reduce event-loop blocking from synchronous `node:sqlite` reads; fixes #112758.

## 4. Community Hot Topics

- **[#116277 — DeepSeek v4 Flash silent reply failure](https://github.com/openclaw/openclaw/issues/116277)** (73 comments, P1): The most-discussed issue. `deepseek/deepseek-v4-flash` silently produces no reply and OpenClaw posts a generic "No reply was generated" fallback on Telegram. Underlying need: reliable model-turn execution with observable failure signals, not silent message loss.

- **[#116201 — Realtime voice retains unbounded provider/consult state](https://github.com/openclaw/openclaw/issues/116201)** (38 comments, P1): Slow/stalled/bursty realtime voice sessions retain superseded consult work, large provider frames, pre-ready audio, and playback state. Underlying need: hard ownership bounds and cancellation semantics for voice session resources.

- **[#99241 — Tool outputs render as image attachments](https://github.com/openclaw/openclaw/issues/99241)** (26 comments, 2 👍, now **closed**): ANSI-heavy tool results collapsed into `(see attached image)`, making stdout/stderr unreadable to the agent. Closed in this window — a win for long-running tool workflows.

- **[#115326 — Crash-loop breaker permanently suppresses Discord/WhatsApp](https://github.com/openclaw/openclaw/issues/115326)** (24 comments, P1): Documented recovery (`channels.start`) fails with WebSocket 1006, leaving channels permanently disabled. Underlying need: a trustworthy recovery path when the crash-loop breaker engages.

- **[#48920 — Live Docs are ahead of release](https://github.com/openclaw/openclaw/issues/48920)** (11 comments, 4 👍, P0): Docs document `IsolatedSessions` heartbeat config that doesn't exist in the latest release. Underlying need: doc/release synchronization; users are configuring features that silently don't work.

## 5. Bugs & Stability

**P0 (release blockers / data loss):**

- **[#48920 — Live Docs ahead of release](https://github.com/openclaw/openclaw/issues/48920)** (P0, open since 2026-03-17): documented config not in released version; `impact:ux-release-blocker`.
- **[#115421 — Schema downgrade recovery must not quarantine/wipe state DB](https://github.com/openclaw/openclaw/issues/115421)** (P0, diamond lobster, maturity:stable): opening a v6-schema state dir with a v1-only binary leaves cron jobs lost; recovery must preserve data rather than create a fresh empty DB. No fix PR visible.

**P1 (high severity — message loss, session-state, crash loops):**

- **#116277** — [DeepSeek v4 Flash silent reply failure with generic fallback](https://github.com/openclaw/openclaw/issues/116277); `impact:message-loss`.
- **#115326** — [Crash-loop breaker suppresses Discord/WhatsApp; documented recovery fails](https://github.com/openclaw/openclaw/issues/115326).
- **#115908** — [Session transcript projection reconcile livelocks under sustained writes](https://github.com/openclaw/openclaw/issues/115908), blocking the main thread and stalling all channel transports.
- **#115424** — [Gateway V8 heap OOM during main-session turn](https://github.com/openclaw/openclaw/issues/115424); restart recovery converts one crash into a 7-core-dump loop.
- **#109490** — [Codex turn interrupted after client-delegated `message` tool result](https://github.com/openclaw/openclaw/issues/109490); promised work never executes.
- **#115909** — [Bundled browser-copilot Gateway client can never pair](https://github.com/openclaw/openclaw/issues/115909); auth gate rejects device-identity connections, making `PAIRING_REQUIRED` unreachable.
- **#115914** — [Accepted WhatsApp turns can stay silent with no bounded liveness fallback](https://github.com/openclaw/openclaw/issues/115914).
- **#114234** — [Usage-cost refresh lock never releasable when a container reuses the owner PID](https://github.com/openclaw/openclaw/issues/114234); cache permanently frozen.
- **#94939** — [6.x migration leaves channel conversation-store SQLite empty (0 bytes)](https://github.com/openclaw/openclaw/issues/94939), breaking MS Teams proactive sends; `impact:data-loss`; linked PR open.
- **#115700** — [`chat.send` rejected with "thread switched branches" after model completion](https://github.com/openclaw/openclaw/issues/115700); stale `expectedLeafEntryId`; linked PR open.
- **#116488** — [Superseded reply operation never released from reply-run registry](https://github.com/openclaw/openclaw/issues/116488); watchdog waits out the abort timer.
- **#85042** — [Missing Google provider config silently routes Gemini requests to OpenAI](https://github.com/openclaw/openclaw/issues/85042) instead of failing validation.
- **#91804** — [Internal reasoning leakage to users since 2026.6.5](https://github.com/openclaw/openclaw/issues/91804); privacy regression.

Several P1 areas have fix PRs in flight: #88079 (reasoning streaming) has autofix PR [#117721](https://github.com/openclaw/openclaw/pull/117721); #115700 and #116010 have linked open PRs; [#117400](https://github.com/openclaw/openclaw/pull/117400) addresses compaction-related session-state issues.

**P2 regressions of note:**

- **#115152** — [bootstrapMaxChars/bootstrapTotalMaxChars deleted on every restart](https://github.com/openclaw/openclaw/issues/115152) (regression from #95939 fix).
- **#112906** — [Backtick collapsible sections render broken in rich messages](https://github.com/openclaw/openclaw/issues/112906) since v2026.7.1.
- **#117644** — [Agent emits Unix commands (`head`, `~` expansion) in PowerShell on Windows](https://github.com/openclaw/openclaw/issues/117644); broader than #10868.
- **#116691** — [openai-responses + Volcano Engine long conversations fail with missing `input.status`](https://github.com/openclaw/openclaw/issues/116691).
- **#116010** — [All persistent sessions capped at 128k context regardless of model](https://github.com/openclaw/openclaw/issues/116010).

## 6. Feature Requests & Roadmap Signals

- **[#113251 — Image viewing in the webchat file viewer](https://github.com/openclaw/openclaw/issues/113251)** (P2 enhancement): graphical preview for attached images in WebChat; 10 comments.
- **[#114146 — `talk.realtime.providers.<id>.baseUrl`](https://github.com/openclaw/openclaw/issues/114146)** (P2): support for OpenAI Realtime-compatible third-party WebSocket endpoints (e.g., Alibaba Bailian Qwen3-ASR-Flash). Likely to land as realtime voice matures.
- **[#50291 — Plugin Hooks trace context](https://github.com/openclaw/openclaw/issues/50291)** (P2, stale): wants `messageId`/`runId`/`parentSpanId` in all hooks for distributed tracing in group chats.
- **[#95724 — Memory indexed by source directory, not agent](https://github.com/openclaw/openclaw/issues/95724)** (P2): eliminates duplicate vector stores for same-workspace agents.
- **[#73537 — Production-readiness stability label](https://github.com/openclaw/openclaw/issues/73537)** (P2): user-requested release labeling for stable vs. beta confidence.

**Near-term signals:** PRs already submitted suggest the next release may include Google Gemini `params.serviceTier` (Flex/Priority) support ([#117739](https://github.com/openclaw/openclaw/pull/117739), closes #69102), WebChat live thinking rendering ([#117721](https://github.com/openclaw/openclaw/pull/117721), fixes #88079), SQLite memory-mapped reads ([#115138](https://github.com/openclaw/openclaw/pull/115138)), MCP materialization for server-name `toolsAllow` globs ([#115277](https://github.com/openclaw/openclaw/pull/115277)), and the large plugin-registry compat scaffolding removal ([#117749](https://github.com/openclaw/openclaw/pull/117749)).

## 7. User Feedback Summary

- **Message loss is the dominant pain point.** DeepSeek v4 Flash failures (#116277), crash-loop suppression (#115326), and silent WhatsApp turns (#115914) all erode confidence in unattended operation. Users are particularly frustrated by generic fallback messages that hide the actual failure cause.
- **Upgrade/migration trust is fragile.** Reports of emptied conversation stores (#94939) and quarantined state DBs with lost cron jobs (#115421) make users wary of schema migrations — exactly what the new v2026.7.2-beta.6 release attempts to address.
- **Docs drift causes real breakage.** #48920 (4 👍) shows users actively configuring documented-but-unreleased features and hitting silent failures.
- **Windows remains a weak spot:** lingering `node.exe` processes (#74378), missing Ctrl+C handling (#93081), and Unix-isms in PowerShell (#117644) are recurring themes.
- **Performance regressions get noticed.** PR #117768 documents a ~3× gateway turn-latency regression on plugin-heavy hosts, implying users are sensitive to response-time changes across releases.
- **Positive sentiment exists.** In #73537, a family/business user calls OpenClaw "genuinely part of our daily workflow" and thanks the team — while requesting stability labels so upgrades can be planned safely.

## 8. Backlog Watch

Items needing maintainer attention that have gone unanswered for extended periods:

- **[#48920 — Live Docs ahead of release](https://github.com/openclaw/openclaw/issues/48920)** — open since 2026-03-17, **P0**, 4 👍, still unresolved after ~4.5 months.
- **[#50291 — Plugin Hooks trace context](https://github.com/openclaw/openclaw/issues/50291)** — open since 2026-03-19, stale, diamond lobster.
- **[#73537 — Production-readiness stability label](https://github.com/openclaw/openclaw/issues/73537)** — open since 2026-04-28, needs product decision.
- **[#85042 — Missing Google provider config silently routes Gemini to OpenAI](https://github.com/openclaw/openclaw/issues/85042)** — open since 2026-05-21, P1, security-adjacent, `clawsweeper-recovery-stuck`.
- **[#87763 — SSRF guard pinned DNS dispatcher causes timeouts with autoSelectFamily](https://github.com/openclaw/openclaw/issues/87763)** — open since 2026-05-28, P1, linked PR open.
- **[#92886 — Docs: Plugin Inspector development and CI workflow](https://github.com/openclaw/openclaw/pull/92886)** — PR waiting on author since 2026-06-14.
- **[#94939 — 6.x migration leaves conversation-store SQLite empty](https://github.com/openclaw/openclaw/issues/94939)** — open since 2026-06-19, P1, data-loss impact, linked PR open but not yet merged.
- **[#106231 — Loop detection blocks exec but never terminates the stuck agent run](https://github.com/openclaw/openclaw/issues/106231)** — open since 2026-07-13, P1, diamond lobster; resources burned for hours; linked PR open.

---

**Overall health assessment:** the project is extremely active with a responsive maintainer team, and the new release's state-safety themes show awareness of the top community pain points. However, the volume of P0/P1 message-loss and session-state issues — plus several months-old blockers still open — suggests stability and migration hardening should remain the top priority through the 2026.7.x series.

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report — Personal AI Assistant / Agent Open-Source Ecosystem
**Date:** 2026-08-02 | **Source:** 24-hour community digest summaries for 13 projects

---

## 1. Ecosystem Overview

The open-source personal AI assistant space remains highly fragmented but converging on a common architecture: a gateway/service core, multi-channel connectors (Telegram, Discord, WhatsApp, Matrix, iMessage), LLM-provider abstraction, session/memory persistence, and now increasingly an ACP/agent-to-agent layer. The dominant theme in 2026-08-02 community activity is **reliability, not novelty** — message loss, session-state corruption, silent model failures, and migration data-loss are the top cross-project pain points. A second wave of projects (ZeroClaw, IronClaw, CoPaw) is investing in architectural rigor — RFC-driven design, contract inversion, security-boundary enforcement — rather than raw feature velocity. Notably, the ecosystem is beginning to standardize around OpenAI-compatible API surfaces and shared provider routing concepts (OrcaRouter appears in three projects simultaneously). Overall, the landscape is healthy: high contribution velocity, responsive maintainers, and a clear competitive differentiation emerging between "chat-first" assistants, "desktop/productivity" agents, and "embedded/edge" runtimes.

---

## 2. Activity Comparison

| Project | Issues Updated (closed) | PRs Updated (merged/closed) | Release Status | Health Score |
|---|---|---|---|---|
| OpenClaw | 500 (44) | 500 (104) | v2026.7.2-beta.6 | 7/10 |
| NanoBot | 5 (4) | 25 (13) | None | 8/10 |
| Hermes Agent | 50 (10) | 50 (9) | None | 7/10 |
| PicoClaw | 1 (0) | 3 (1) | None | 5/10 |
| NanoClaw | 2 (1) | 15 (5) | v2.1.54 | 8/10 |
| NullClaw | 0 | 0 | None | N/A (inactive) |
| IronClaw | 12 (2) | 22 (7) | None (release PR pending) | 7/10 |
| LobsterAI | 7 (6 stale-closed) | 2 (0) | None | 4/10 |
| TinyClaw | 0 | 0 | None | N/A (inactive) |
| Moltis | 0 | 3 (2) | None | 6/10 |
| CoPaw | 9 (0) | 11 (1) | None | 7/10 |
| ZeptoClaw | 0 | 0 | None | N/A (inactive) |
| ZeroClaw | 50 (3) | 50 (0) | None (v0.8.4 bump pending) | 6/10 |

*Health score is a qualitative composite of maintainer responsiveness, issue closure rate, stability signals, and release cadence.*

---

## 3. OpenClaw's Position

**OpenClaw is the de-facto reference implementation and scale leader** — its 500-issue/500-PR daily volume exceeds all peers combined by roughly an order of magnitude. Its advantages:

- **Community gravity:** The largest contributor base and user pool; 104 PRs merged/closed in 24 hours dwarfs every other project.
- **Channel breadth:** Telegram, Discord, Matrix, MS Teams, WhatsApp, and more — a coverage moat that specialist projects (PicoClaw on Matrix, NanoClaw on iMessage) only partially match.
- **Maintainer throughput:** A single maintainer (steipete) authored a dozen-plus PRs in one window, indicating strong bus-factor mitigation relative to peers.
- **State-safety investment:** The new beta's quarantine store, crash-recoverable SQLite snapshots, and schema-upgrade data-loss rejection directly target the ecosystem's #1 pain — ahead of most peers.

**Structural weakness:** OpenClaw's velocity creates regression risk. It carries the highest count of P0/P1 data-loss and message-loss issues (#94939, #115421, #116277), many weeks old. Its TypeScript/Node gateway approach — while contributor-friendly — faces performance criticism (3× turn-latency regression, SQLite event-loop blocking) that Rust-based IronClaw and lighter Python peers (NanoBot) are structurally better positioned on. OpenClaw remains the default choice for multi-channel power users, but its stability reputation is the key vulnerability.

---

## 4. Shared Technical Focus Areas

| Focus Area | Projects | Specific Needs |
|---|---|---|
| **Session-state & data-loss prevention** | OpenClaw, NanoBot, Hermes, NanoClaw, CoPaw, ZeroClaw | Migration safety, compaction correctness, quarantine stores, stale-lock recovery, media-path preservation |
| **Silent failure elimination** | OpenClaw, Hermes, CoPaw, ZeroClaw | No-reply fallbacks, observable turn failures, liveness bounds, message-loss attribution |
| **Provider abstraction & model routing** | OpenClaw, NanoBot, PicoClaw, IronClaw, CoPaw, ZeroClaw | OrcaRouter as built-in provider (3 projects), OpenAI-compat adapters, Google/Gemini misrouting, DeepSeek message hardening, prompt-cache stability |
| **Channel reliability** | OpenClaw, Hermes, PicoClaw, NanoClaw, ZeroClaw | Matrix reconnection logic, crash-loop breaker recovery, WhatsApp allowlist semantics, queued-delivery media extraction |
| **Security boundaries** | Hermes, Moltis, IronClaw, ZeroClaw | Sensitive-path guards, privileged-command operator lists, fail-closed allowlists, key-source abstraction |
| **Memory/context management** | OpenClaw, NanoBot, CoPaw, ZeroClaw | Separating conversation history from long-term memory, auto-compression triggers, context-window caps, archiving |
| **Observability** | Moltis, ZeroClaw, Hermes | OTel conversation correlation, Langfuse export, trace context in hooks |
| **Docs/release synchronization** | OpenClaw, NanoClaw, ZeroClaw | Documented-but-unreleased config, stale docs causing silent misconfiguration |
| **CI/developer experience** | IronClaw, CoPaw, ZeroClaw | Path-keyed gate failures, evidence-block validation, stale-PR hygiene |

---

## 5. Differentiation Analysis

| Project | Core Positioning | Target Users | Architecture |
|---|---|---|---|
| **OpenClaw** | General-purpose multi-channel assistant (reference) | Power users, homelab, unattended ops | Node/TS gateway, SQLite, massive channel matrix |
| **NanoBot** | Lightweight personal agent, research-informed | Developers, self-hosters | Python (uv-managed), WebUI-centric, lightweight single-agent |
| **Hermes Agent** | Research-grade agent (Nous Research) + desktop app | Researchers, desktop users | Gateway + Windows/macOS desktop, plugin lifecycle, security hardline |
| **PicoClaw** | Edge/embedded-friendly assistant | Sipeed hardware, IoT tinkerers | Minimal footprint, Matrix-leaning |
| **NanoClaw** | Apple-ecosystem assistant | macOS/iMessage users | Chat SDK + hosted Photon backends, rollup releases |
| **IronClaw** | Architecturally rigorous agent framework | Core/platform teams | Rust, contract inversion, CI-gate discipline |
| **LobsterAI** | Chinese-market collaborative assistant | Chinese-speaking teams | NetEase Youdao stack, cowork/desktop focus |
| **Moltis** | Ops-ready assistant with observability | Deploying organizations | Langfuse/OTLP instrumentation, per-account operator lists |
| **CoPaw** | Qwen/Aliyun-ecosystem agent (ACP support) | Alibaba cloud users, multi-agent devs | ACP protocol, scroll memory, Gemini tool-call compat |
| **ZeroClaw** | RFC-driven modular assistant | Security-conscious operators | Design-heavy, OpenAI-compat adapter, key-source trait, WhatsApp focus |

---

## 6. Community Momentum & Maturity

**Tier 1 — Rapid iteration, high responsiveness:** OpenClaw (release-per-day cadence, huge throughput), NanoBot (dense PR pipeline, fast issue-to-fix loops), NanoClaw (rollup releases, active external contributors), Hermes Agent (same-day `implemented-on-main` labels), IronClaw (rapid refactor execution), ZeroClaw (heavy RFC design velocity, though 0 PRs merged this window indicates decision queue build-up).

**Tier 2 — Targeted, disciplined progress:** CoPaw (active bug-fix pipeline, first-time contributors, but low closure rate), Moltis (quiet but clean; security fix merged, observability foundation landed).

**Tier 3 — Stalling/maintenance mode:** PicoClaw (critical Matrix bug labeled stale, maintainer bottleneck), LobsterAI (bot-driven stale cleanup, valid fix PRs waiting months).

**Inactive:** NullClaw, TinyClaw, ZeptoClaw — no activity in 24h.

**Key maturity signal:** The ecosystem is bifurcating between projects that treat reliability as a feature (NanoBot, NanoClaw, Moltis) and projects still in architectural transition (ZeroClaw, IronClaw, CoPaw). OpenClaw's beta release shows it is actively addressing reliability, but its backlog of P0/P1 issues is the ecosystem's single largest risk concentration.

---

## 7. Trend Signals

**For AI agent developers, the 2026-08-02 data strongly suggests:**

1. **Reliability is the new competitive moat.** Message loss, silent failures, and migration data-loss dominate across every active project. Users are not asking for more features — they are asking for trustworthy unattended operation. Investment in crash-recoverable state, quarantine stores, and observable failure signals will differentiate.

2. **Fail-closed is the required default.** ZeroClaw's empty-allowlist-becomes-permit-all WhatsApp bug, Hermes' Windows path-normalization guard bypass, and Moltis' privileged-command exposure all show that security boundaries must assume the worst configuration.

3. **Memory architecture is the next frontier.** OpenClaw (compaction), NanoBot (auto-compact), CoPaw (summarize_when_compact), and ZeroClaw (RFCs separating history from long-term memory) are all converging on the same problem: context management that is correct, cheap, and lossless.

4. **Provider routing is consolidating.** OrcaRouter appearing in three projects (PicoClaw, IronClaw, CoPaw) plus ZeroClaw's OpenAI-compat adapter RFC signals a shift toward vendor-neutral routing layers and API-surface compatibility as adoption criteria.

5. **Prompt-cache economics matter.** OpenClaw (cache-stable system prefix), ZeroClaw (stable `session_id` for OpenRouter), and IronClaw (cache_control breakpoints) all target the same cost lever — a sign that LLM cost optimization is moving from app-level to framework-level.

6. **Desktop and UX convenience is undersupplied.** Global-hotkey quick input (CoPaw), session-level model switching (NanoBot), image preview in WebChat (OpenClaw), and cleanup pages (CoPaw) are all requested — the agent ecosystem is maturing from "API tool" to "daily-use product."

7. **Developer experience gates contributor growth.** IronClaw's CI-gate defects, CoPaw's Evidence-block validation, and LobsterAI's months-orphaned PRs show that process friction — not code quality — is now the gating factor for community contribution velocity.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-08-02

## Today’s Overview

NanoBot remains highly active: in the last 24 hours, 5 issues were updated (4 closed, 1 open) and 25 PRs were updated (12 open, 13 merged/closed). No new release was published, but the PR pipeline is dense with bug fixes, reliability hardening, and WebUI/feature work. Maintainers have been responsive to regressions around cron state, memory formatting, exec output truncation, and session persistence. Overall project health looks strong, with community contributions steadily landing across providers, channels, CLI, and WebUI.

## Releases

None.

## Project Progress

The visible closed/merged PRs in this window cluster around stability fixes, provider hardening, memory/session robustness, and WebUI/CLI polish. Notable completed items:

- [PR #5208](https://github.com/HKUDS/nanobot/pull/5208) — Fix Dream cron job cursor advancement when durable changes were made, preventing repeated reprocessing of history batches.
- [PR #5209](https://github.com/HKUDS/nanobot/pull/5209) — Refactor WebUI sidebar selection highlight into a reusable component, removing flicker and highlighting the new-topic route.
- [PR #5172](https://github.com/HKUDS/nanobot/pull/5172) — Preserve Responses API reasoning state and compact context, adopting capabilities highlighted in the ARC-AGI-3 report.
- [PR #5108](https://github.com/HKUDS/nanobot/pull/5108) — Add per-sender message rate limiting across channel adapters, addressing a token/LLM abuse gap.
- [PR #3732](https://github.com/HKUDS/nanobot/pull/3732) — Require `api_base` before a local provider wins on keyword match, preventing cloud models from being silently hijacked.
- [PR #5199](https://github.com/HKUDS/nanobot/pull/5199) — Narrow Pyright suppressions in CLI code for better type-checking coverage.
- [PR #5153](https://github.com/HKUDS/nanobot/pull/5153) — Fix memory formatting when raw-archiving messages with non-string timestamps or missing `role` fields.
- [PR #5183](https://github.com/HKUDS/nanobot/pull/5183) — Preserve manual cron run completion state when WebUI/API reads happen concurrently.
- [PR #5200](https://github.com/HKUDS/nanobot/pull/5200) — Preserve `wait_for` targets across exec response truncation.
- [PR #5201](https://github.com/HKUDS/nanobot/pull/5201) — Tolerate malformed persisted session summaries in `AutoCompact`.

## Community Hot Topics

- [Issue #5185](https://github.com/HKUDS/nanobot/issues/5185) — *Nanobot returning tool calls code in responses*  
  4 comments, the most-commented issue in the snapshot. Users reported a sudden regression where tool-call internals leaked into model responses. It was closed as invalid/provider-related, suggesting a configuration- or provider-specific rendering issue rather than a core NanoBot defect.

- [Issue #5205](https://github.com/HKUDS/nanobot/issues/5205) — *“No module named ensurepip” when enabling feishu channel*  
  2 comments. The plugin-enabled flow failed because the `uv`-managed Python environment lacked `ensurepip`. Highlights installation-environment friction for channel plugins.

- [Issue #5198](https://github.com/HKUDS/nanobot/issues/5198) — *Not possible to change models in a specific session unless reconfiguring the entire instance*  
  Open with 1 comment. Users want session-level model switching, similar to mainstream cloud AI UIs.

- [Issue #4801](https://github.com/HKUDS/nanobot/issues/4801) — *Unprotected `message['role']` dict access*  
  A malformed persisted message could raise `KeyError`. This was fixed by [PR #5153](https://github.com/HKUDS/nanobot/pull/5153).

## Bugs & Stability

Ranked by severity:

1. **Data loss risk: media paths dropped during session consolidation** — [Issue #5118/#5135 context in PR #5139](https://github.com/HKUDS/nanobot/pull/5139)  
   Uploaded media paths stored only in `media[]` could be lost after archiving. The fix PR is still open and currently has a conflict, making this the most important unresolved reliability item.

2. **Cron manual run completion state race** — [Issue #5163](https://github.com/HKUDS/nanobot/issues/5163)  
   Manually triggered cron jobs could execute successfully but remain shown as `Failed` when the WebUI/API read the store mid-run. Fixed by [PR #5183](https://github.com/HKUDS/nanobot/pull/5183).

3. **Malformed persisted session messages causing `KeyError`** — [Issue #4801](https://github.com/HKUDS/nanobot/issues/4801)  
   Missing `role` fields in raw-archived history caused crashes. Fixed by [PR #5153](https://github.com/HKUDS/nanobot/pull/5153).

4. **`ensurepip` missing in plugin installation environment** — [Issue #5205](https://github.com/HKUDS/nanobot/issues/5205)  
   `nanobot plugins enable feishu` failed because the managed Python lacked `ensurepip`. Closed , but may indicate a packaging/environment issue worth documenting or hardening.

5. **Tool-call code appearing in responses** — [Issue #5185](https://github.com/HKUDS/nanobot/issues/5185)  
   Closed as invalid/provider-related. Still notable as a user-visible symptom, likely from provider tool-call rendering or configuration.

Additional bug-fix PRs in flight:

- [PR #5206](https://github.com/HKUDS/nanobot/pull/5206) — Fix duplicate logging of streamed responses.
- [PR #5207](https://github.com/HKUDS/nanobot/pull/5207) — Add model preset support to the `spawn` tool.
- [PR #3869](https://github.com/HKUDS/nanobot/pull/3869) — DeepSeek message hardening; open with conflict, no recent merge activity.

## Feature Requests & Roadmap Signals

The strongest roadmap signal is the community push toward a more modern, interactive WebUI and more flexible session/model controls:

- [Issue #5198](https://github.com/HKUDS/nanobot/issues/5198) requests session-level model switching. [PR #5202](https://github.com/HKUDS/nanobot/pull/5202) addresses discoverability of model preset switching, and [PR #5207](https://github.com/HKUDS/nanobot/pull/5207) adds preset support for subagents. These will likely land together in a future release.

- [PR #5211](https://github.com/HKUDS/nanobot/pull/5211) adds cross-session search and `@`-mentions, a meaningful usability upgrade for persistent chat workflows.

- [PR #5184](https://github.com/HKUDS/nanobot/pull/5184) proposes Quick Chat and Temporary Chat destinations in the WebUI, giving users both persistence and disposable conversation modes.

- [PR #5210](https://github.com/HKUDS/nanobot/pull/5210) adds trusted upstream-proxy bootstrap auth, useful for Cloudflare Tunnel + Access deployments.

- [PR #5186](https://github.com/HKUDS/nanobot/pull/5186) adds support for well-known skills.sh sources, expanding skills discovery beyond GitHub repositories.

- Merged [PR #5172](https://github.com/HKUDS/nanobot/pull/5172) indicates forward-looking investment in preserving full Responses API reasoning state and compact context.

## User Feedback Summary

Users are reporting real-world reliability issues around state persistence, environment-specific Python problems, and provider edge cases:

- Cron state being lost or stale during manual runs caused trust issues in automation workflows.
- Plugin enabling broke in minimal `uv`/Debian environments due to missing `ensurepip`.
- Media files could become unreachable after session consolidation.
- DeepSeek users especially need message sanitization around null/empty content and assistant text preservation.
- Users are also asking for more mainstream chat UIs conveniences: per-session model switching, quick/temporary chats, and cross-session conversation search.

On the positive side, many of these issues were closed quickly with targeted PRs, indicating a healthy maintainer-contributor feedback loop.

## Backlog Watch

- [PR #3869](https://github.com/HKUDS/nanobot/pull/3869) — DeepSeek message hardening, open since 2026-05-16 and flagged as conflicting. This is the oldest open PR in the snapshot and may need rebase/maintainer attention despite being valuable to DeepSeek users.

- [PR #5139](https://github.com/HKUDS/nanobot/pull/5139) — Media path preservation during session consolidation. This is a P1 regression fix with a conflict marker; given potential data-loss impact, it should be a priority for review.

- [Issue #5198](https://github.com/HKUDS/nanobot/issues/5198) — Session-level model switching remains open with no explicit response in the snapshot; several related PRs indicate the feature is actively being addressed, but maintainer clarification would help.

- [PR #5184](https://github.com/HKUDS/nanobot/pull/5184) — Quick Chat / Temporary Chat is a substantial WebUI feature and may require careful review before landing.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-08-02

## 1. Today's Overview

Hermes Agent saw very high activity over the last 24 hours, with 50 issues and 50 PRs touched, including 40 open/active issues and 41 open PRs. 10 issues and 9 PRs were closed or merged, but no new releases were published. The majority of incoming work is bug-focused: Windows update failures, gateway lifecycle/watchdog problems, session-state issues, and security-guard bypasses. Maintainer responsiveness looks good, with several issues labeled `implemented-on-main` on the same day, though the queue of open PRs remains large.

## 2. Releases

No new releases were published in this window, so there are no changelog, breaking-change, or migration notes to report.

## 3. Project Progress

9 PRs were merged/closed in the last 24 hours. The visible top sample includes:

- [PR #76543](https://github.com/NousResearch/hermes-agent/pull/76543) — **closed/implemented**: retries session DB flush during compression rotation, addressing a session-state data-loss window.
- [PR #76546](https://github.com/NousResearch/hermes-agent/pull/76546) — **closed as duplicate**: React Router 8.3.0 upgrade and web dependency audit refresh.

Several issues were also closed as fixed on main:

- [Issue #76541](https://github.com/NousResearch/hermes-agent/issues/76541) — P1 Telegram gateway killed by `shutdown_watchdog` during network instability.
- [Issue #76533](https://github.com/NousResearch/hermes-agent/issues/76533) — Ubuntu v0.19.0 update leaving mixed dependencies.
- [Issue #76511](https://github.com/NousResearch/hermes-agent/issues/76511) — Copilot token exchange stalling startup ~4.5s.
- [Issue #76528](https://github.com/NousResearch/hermes-agent/issues/76528) — Language setting cannot be saved.

Two reported issues were closed as `cannot-reproduce`: [#76510](https://github.com/NousResearch/hermes-agent/issues/76510) and [#76529](https://github.com/NousResearch/hermes-agent/issues/76529).

## 4. Community Hot Topics

The most active issues by comment count show users focused on reliability, security boundaries, and platform-specific regressions:

- [Issue #67249](https://github.com/NousResearch/hermes-agent/issues/67249) — 5 comments. `active_pr` respawn guard can be tripped by non-PR content and has no operator override. Underlying need: operator control and better false-positive handling.
- [Issue #63717](https://github.com/NousResearch/hermes-agent/issues/63717) — 4 comments. Windows Desktop update failure chain with 7 correlated root causes. Underlying need: reliable self-update on Windows.
- [Issue #76505](https://github.com/NousResearch/hermes-agent/issues/76505) — 4 comments. Qwen `native_image_input_mode` sends full-resolution images without preprocessing; Qwen3VLProcessor rejects them. Underlying need: image pre-processing/routing parity between native and text fallback paths.
- [Issue #60845](https://github.com/NousResearch/hermes-agent/issues/60845) — 4 comments. Queued Telegram follow-up responses bypass MEDIA extraction, so attachments are delivered as plain text paths. Underlying need: message-delivery correctness for queued runs.
- [Issue #76435](https://github.com/NousResearch/hermes-agent/issues/76435) — 3 comments. Discord gateway reconnect loop plus unusable Desktop updater. Proposed fix already exists in [PR #76537](https://github.com/NousResearch/hermes-agent/pull/76537).
- [Issue #76246](https://github.com/NousResearch/hermes-agent/issues/76246) and [Issue #76218](https://github.com/NousResearch/hermes-agent/issues/76218) — 3 comments each. Both are security-boundary bypasses: Windows sensitive-path writes and bash ANSI-C quoting around dangerous commands.

## 5. Bugs & Stability

### P1

- [Issue #76541](https://github.com/NousResearch/hermes-agent/issues/76541) — **Closed, fixed on main.** v0.19.1 gateway repeatedly killed by `shutdown_watchdog` on Telegram polling instability; caused bot-token reset. Fix is marked `implemented-on-main`.
- [Issue #76502](https://github.com/NousResearch/hermes-agent/issues/76502) — **Open.** `cronjob(action="run")` executes synchronously on the calling agent thread, so the parent inactivity watchdog can kill the agent at 1800s. No fix PR is visible yet.

### P2 Security

- [Issue #76246](https://github.com/NousResearch/hermes-agent/issues/76246) — **Open.** On Windows, the sensitive-path write guard fails open for POSIX targets like `/etc`, `/boot`, and `/var/run/docker.sock` because path normalization converts them to backslash forms.
- [Issue #76218](https://github.com/NousResearch/hermes-agent/issues/76218) — **Open.** Bash/zsh ANSI-C quoting (`$'...'`) can obfuscate destructive commands like `rm -rf /` and skip the hardline approval floor.

### P2 Reliability / Platform

- [Issue #63717](https://github.com/NousResearch/hermes-agent/issues/63717) — **Open.** Comprehensive Windows Desktop update failure report with multiple correlated root causes.
- [Issue #76435](https://github.com/NousResearch/hermes-agent/issues/76435) — **Open.** Gateway reconnect loop and Desktop updater showing "managed outside"; fix PR [PR #76537](https://github.com/NousResearch/hermes-agent/pull/76537) is open.
- [Issue #75584](https://github.com/NousResearch/hermes-agent/issues/75584) — **Open.** Windows update fails after interrupted install: `hermes.exe` missing and `node_modules` ENOTEMPTY.
- [Issue #60845](https://github.com/NousResearch/hermes-agent/issues/60845) — **Open.** Queued Telegram follow-up responses bypass MEDIA extraction.
- [Issue #43757](https://github.com/NousResearch/hermes-agent/issues/43757) — **Open.** Responses API `function_call_output` items are stripped from `input` arrays, losing tool results across turns.
- [Issue #74568](https://github.com/NousResearch/hermes-agent/issues/74568) — **Open.** Stale compression lock from a dead PID blocks `append_message` for the full TTL.
- [Issue #76457](https://github.com/NousResearch/hermes-agent/issues/76457) — **Open.** `hermes config set` writes list-of-strings values as stringified JSON instead of real YAML lists.
- [Issue #76421](https://github.com/NousResearch/hermes-agent/issues/76421) — **Open.** `hermes update` does not self-heal a stale primary launcher.

## 6. Feature Requests & Roadmap Signals

The most forward-looking requests/PRs in this window:

- [Issue #64229](https://github.com/NousResearch/hermes-agent/issues/64229) — Plugin lifecycle: registration handles, ownership ledger, `on_unload`, supervised tasks. This is a strong signal that plugin architecture is being actively shaped.
- [PR #69086](https://github.com/NousResearch/hermes-agent/pull/69086) — Compute provider capability POC blending Modal terminal backend with computer-use capabilities. Still open and labeled `needs-decision`.
- [Issue #40950](https://github.com/NousResearch/hermes-agent/issues/40950) — Desktop fork-from-message should use Hermes-native session branching.
- [Issue #63583](https://github.com/NousResearch/hermes-agent/issues/63583) — `/model` picker should live-probe non-current custom providers instead of showing stale/0 model counts.
- [Issue #76539](https://github.com/NousResearch/hermes-agent/issues/76539) — Give the gateway process a recognizable name on macOS.
- [Issue #76207](https://github.com/NousResearch/hermes-agent/issues/76207) — Hide Vite warning and update npm.

Several open plugin-related PRs — [PR #76522](https://github.com/NousResearch/hermes-agent/pull/76522) (durable ambient observer mode), [PR #76530](https://github.com/NousResearch/hermes-agent/pull/76530) (reasoning-effort propagation), and [PR #76538](https://github.com/NousResearch/hermes-agent/pull/76538) (Google auth refactor) — suggest plugin maturity and provider abstraction are likely near-term roadmap themes.

## 7. User Feedback Summary

The strongest user pain points reported in the last 24 hours:

- **Windows update/install reliability is the top frustration.** Multiple reports cover missing `hermes.exe`, `node_modules` ENOTEMPTY, broken Desktop updater, mixed dependency states, and stale launchers.
- **Security-conscious users are probing guard boundaries.** Windows path normalization and bash ANSI-C quoting bypasses show real concern about Hermes' hardline approval and sensitive-path safeguards.
- **Gateway/session delivery issues affect real use.** Telegram, Discord, and Responses API users report lost media, lost tool results, stale locks, and reconnect loops.
- **Desktop UX issues remain visible:** profile-scoped endpoints are ignored, demo plugins ship enabled by default, language setting fails to save, and review preview can hit ENOENT.

On the positive side, many user reports include detailed reproduction steps and diagnostics, and several issues were marked `implemented-on-main` the same day, indicating responsive maintainer activity despite no release in this window.

## 8. Backlog Watch

These items have been open long enough that they may need maintainer attention or a clear decision:

- [Issue #6729](https://github.com/NousResearch/hermes-agent/issues/6729) — Created 2026-04-09, P2. Systemd Gateway installation ignores non-standard `HERMES_HOME` environment variables.
- [Issue #40950](https://github.com/NousResearch/hermes-agent/issues/40950) — Created 2026-06-07, P3. Desktop fork-from-message should use Hermes-native session branching.
- [PR #41661](https://github.com/NousResearch/hermes-agent/pull/41661) — Created 2026-06-08. ACP tool-title rendering tests; still open after roughly two months.
- [Issue #43757](https://github.com/NousResearch/hermes-agent/issues/43757) — Created 2026-06-10, P2. Responses API tool results are stripped across turns; a core correctness issue.
- [Issue #67249](https://github.com/NousResearch/hermes-agent/issues/67249) — Created 2026-07-19, labeled `needs-decision`. `active_pr` respawn guard requires an operator override.
- [PR #69086](https://github.com/NousResearch/hermes-agent/pull/69086) — Created 2026-07-22, labeled `needs-decision`. Compute provider capability POC is waiting on architectural direction.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-08-02

## Today's Overview

PicoClaw saw low but steady activity over the last 24 hours: 1 issue was updated and 3 pull requests received updates, with no new releases published. The only active issue is a serious Matrix sync reliability bug that remains open, while the open PR pipeline shows continued community momentum around provider integrations. No new features were merged in the window; the only closed PR was a stale localization contribution. Overall project health is stable but constrained by an unresolved long-running sync failure and a small maintainer-review bottleneck.

## Releases

No new releases were published in the last 24 hours. The “Latest Releases” field reports no versions.

## Project Progress

No merged feature PRs were confirmed in the 24h window.

- **PR #3261 (closed, stale)** – [Add zh-TW locale and Traditional Chinese translations](https://github.com/sipeed/picoclaw/pull/3261)  
  Labeled stale and closed. It proposed consistent Traditional Chinese / Taiwanese terminology across the WebUI and documentation. No merge was visible in the provided data.

Open PRs that advanced or are awaiting review:

- **PR #3299** – [Add native Exa web search provider](https://github.com/sipeed/picoclaw/pull/3299)  
  Adds Exa as a native `tools.web` / `web_search` provider with date-range filter support. Open and updated 2026-08-01.

- **PR #3309** – [feat(providers): add OrcaRouter as an OpenAI-compatible provider](https://github.com/sipeed/picoclaw/pull/3309)  
  Introduces `orcarouter` as a first-class OpenAI-compatible provider, using `vendor/model` addressing. Open and updated 2026-08-01.

## Community Hot Topics

The clear community hotspot is the Matrix sync reliability bug:

- **Issue #3203** – [Matrix sync loop has no reconnection logic — silent death after network/server disruption](https://github.com/sipeed/picoclaw/issues/3203)  
  - Created: 2026-07-02  
  - Updated: 2026-08-01  
  - Comments: 7  
  - Reactions: 👍 2  
  - Status: open, labeled `[stale] [BUG]`  
  - Underlying need: users expect the Matrix bridge/agent to recover automatically from network flaps or homeserver restarts. The current silent death is especially painful because systemd restart policies do not catch it.

The open provider PRs (#3299, #3309) had no reported comments/reactions yet, but indicate active contributor interest in extending PicoClaw’s provider and search ecosystem.

## Bugs & Stability

Ranked by severity based on current data:

1. **High – Issue #3203: Matrix sync loop has no reconnection logic**  
   [Link](https://github.com/sipeed/picoclaw/issues/3203)  
   The `/sync` long-polling loop dies permanently after network disruption or homeserver restart. The main process survives, so systemd `Restart=on-failure` never triggers. Result: silent service death. No fix PR was visible in the 24h data. The `[stale]` label is concerning for what appears to be a critical reliability bug.

No other bugs, crashes, or regressions were reported in the last 24 hours.

## Feature Requests & Roadmap Signals

The open PRs point to two near-term roadmap signals:

- **Exa web search provider** (#3299) — Native `web_search` support via Exa, including time-range filters. This suggests a move toward more flexible, publisher-grade web search backends.
- **OrcaRouter provider** (#3309) — OpenAI-compatible multi-vendor routing support. This aligns with the existing provider abstraction and would expand PicoClaw’s model-source flexibility.

Additionally, the closed zh-TW locale PR (#3261) signals continued community interest in broader i18n coverage, particularly for Traditional Chinese. If reopened or re-submitted, it could become part of a future release.

Likely next-version candidates if merged: Exa as a search provider and OrcaRouter as an OpenAI-compatible provider.

## User Feedback Summary

Real user pain points visible in this data:

- **Matrix sync resilience** is the primary complaint: users cannot rely on long-running Matrix sync after network or server changes. The issue has 7 comments and 2 👍 reactions, indicating meaningful impact.
- **Provider choice** is an active desire: contributors are voluntarily adding Exa and OrcaRouter support, suggesting demand for more web-search and model-routing options.
- **Localization** is a secondary request: the zh-TW PR aimed to make the WebUI and documentation fully usable for Taiwanese users, though it was closed as stale.

There is no direct satisfaction/dissatisfaction metric in the data, but the prolonged Matrix bug and the stale locale PR suggest some friction in getting community contributions and bug fixes through the pipeline.

## Backlog Watch

Items that may need maintainer attention:

- **Issue #3203** – [Matrix sync loop has no reconnection logic](https://github.com/sipeed/picoclaw/issues/3203)  
  Open since 2026-07-02, 7 comments, 2 reactions. This is the most important unresolved item: critical bug, no fix PR, and labeled stale despite being actively discussed.

- **PR #3299** – [Add native Exa web search provider](https://github.com/sipeed/picoclaw/pull/3299)  
  Open since 2026-07-26 with no comments reported. Needs maintainer review and possible merge or requested changes.

- **PR #3309** – [feat(providers): add OrcaRouter as an OpenAI-compatible provider](https://github.com/sipeed/picoclaw/pull/3309)  
  Open since 2026-08-01. Still in early review stage; no comments reported.

- **PR #3261** – [Add zh-TW locale and Traditional Chinese translations](https://github.com/sipeed/picoclaw/pull/3261)  
  Closed as stale. If localization remains desired, this should be revived or given clear maintainer guidance.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-08-02

## Today's Overview

Activity is high: 2 issues were updated in the last 24 hours (1 closed, 1 open), 15 PRs were updated (10 open, 5 closed/merged), and a new rollup release, **v2.1.54**, shipped. The release consolidates work from v2.1.18 through v2.1.54 and includes a breaking iMessage channel unification. Community contributors are heavily involved, with several fix PRs and issues filed by external users. Overall project health looks solid, with maintainers actively triaging a sizable but not overwhelming open PR queue.

## Releases

### [v2.1.54](https://github.com/nanocoai/nanoclaw/releases/tag/v2.1.54)
- Rollup release covering **v2.1.18 through v2.1.54** — everything merged since the v2.1.17 tag.
- **[BREAKING] iMessage unified into one `imessage` channel** with two backends via `/add-imessage`:
  - **Local** — uses this Mac's `chat.db` via the Chat SDK.
  - **Hosted** — native [Photon](https://photon.codes) integration.
- **Migration note:** users should consolidate on the single `imessage` channel and run `/add-imessage` to select their backend. Related work: [#2999](https://github.com/nanocoai/nanoclaw/pull/2999) and [#3164](https://github.com/nanocoai/nanoclaw/pull/3164).

## Project Progress

Closed/merged PRs in the last 24 hours:

- [#3170](https://github.com/nanocoai/nanoclaw/pull/3170) — `fix(setup): dispatch failure assist to the picked provider` — fixes setup forcing Claude CLI diagnostics on non-Claude installs.
- [#3168](https://github.com/nanocoai/nanoclaw/pull/3168) — `fix(release): close post-merge safety gaps` — release process hardening.
- [#3167](https://github.com/nanocoai/nanoclaw/pull/3167) — `feat(credentials): alert when a provider credential expires` — improves observability around expired credentials.
- [#2999](https://github.com/nanocoai/nanoclaw/pull/2999) — `feat(channels): unify iMessage into a single imessage channel` — local + hosted backends.
- [#3164](https://github.com/nanocoai/nanoclaw/pull/3164) — Hosted iMessage (Photon) — supersedes #2999 with a working registration flow.

Issue [#3169](https://github.com/nanocoai/nanoclaw/issues/3169) was also closed, with the fix delivered via PR #3170.

## Community Hot Topics

No issues or PRs in the provided data have recorded comment/reaction counts, so “hotness” is assessed by recent update activity and follow-up PRs.

- [#3171](https://github.com/nanocoai/nanoclaw/issues/3171) — Two bundled Qodo skills depend on an integration nothing sets up and intercept normal coding requests. Directly followed by PR [#3172](https://github.com/nanocoai/nanoclaw/pull/3172) to remove the skills.
- [#3174](https://github.com/nanocoai/nanoclaw/pull/3174) — Rootless Docker support for agent containers; user-relevant for non-`docker`-group environments.
- [#3173](https://github.com/nanocoai/nanoclaw/pull/3173) — Egress update PR from a community contributor.

Underlying themes: users want setup flows to respect their chosen provider, bundled integrations should either be configured or removed, and Docker deployments need to work beyond the common `docker`-group setup.

## Bugs & Stability

Ranked by severity:

1. **High — [#3171](https://github.com/nanocoai/nanoclaw/issues/3171): Qodo skills intercept normal coding requests**
   - Both `get-qodo-rules` and `qodo-pr-resolver` depend on `~/.qodo/config.json`, which nothing in the repo sets up.
   - Fix PR: [#3172](https://github.com/nanocoai/nanoclaw/pull/3172) — removes the two skills.

2. **High — [#3166](https://github.com/nanocoai/nanoclaw/pull/3166): `migrate-v2` references removed `insertTask`**
   - `setup/migrate-v2/tasks.ts` imports `insertTask`, but the module exports `insertTaskRow`.
   - Fails at static import time with `SyntaxError`, blocking migration.
   - Fix PR: [#3166](https://github.com/nanocoai/nanoclaw/pull/3166).

3. **High — [#3174](https://github.com/nanocoai/nanoclaw/pull/3174): Agent containers unusable on rootless Docker**
   - Two independent failures, hidden when the host user is in the `docker` group.
   - Fix PR: [#3174](https://github.com/nanocoai/nanoclaw/pull/3174).

4. **Medium — [#3169](https://github.com/nanocoai/nanoclaw/issues/3169): Non-Claude setup failures always offer Claude CLI**
   - Can force an Anthropic sign-in flow even when the operator chose a different provider.
   - Fixed by [#3170](https://github.com/nanocoai/nanoclaw/pull/3170).

5. **Medium — [#2956](https://github.com/nanocoai/nanoclaw/pull/2956): Duplicate delivery when final output repeats tool-sent content**
   - An agent sending via `send_message` and then repeating the text in final output delivers it twice.
   - Open fix PR exists.

6. **Medium — [#2750](https://github.com/nanocoai/nanoclaw/pull/2750): Stale `outbound.db` journals after container kills**
   - Related to #2516 and #2640; long-running host-side reliability fix.

7. **Low/Medium — [#2801](https://github.com/nanocoai/nanoclaw/pull/2801): Untrusted router input hardening**
   - `safeParseContent` can return primitives, causing callers to read `undefined` fields instead of falling back to raw text.

8. **Observability — [#3167](https://github.com/nanocoai/nanoclaw/pull/3167): Credential expiry produced misleading errors**
   - Expired Codex ChatGPT credential surfaced as `Read-only file system (os error 30)`.
   - Closed PR adds explicit credential-expiry alerts.

## Feature Requests & Roadmap Signals

There were no formal feature-request issues in this window, but several PRs signal roadmap direction:

- **Shipped:** Unified iMessage channel with local and hosted backends — [v2.1.54](https://github.com/nanocoai/nanoclaw/releases/tag/v2.1.54), [#2999](https://github.com/nanocoai/nanoclaw/pull/2999), [#3164](https://github.com/nanocoai/nanoclaw/pull/3164).
- **Likely next:** Rootless Docker support ([#3174](https://github.com/nanocoai/nanoclaw/pull/3174)) and removal of unconfigured Qodo skills ([#3172](https://github.com/nanocoai/nanoclaw/pull/3172)).
- **Possible near-term:** Best-effort reaction delivery ([#3121](https://github.com/nanocoai/nanoclaw/pull/3121)), egress configuration updates ([#3173](https://github.com/nanocoai/nanoclaw/pull/3173)), and documentation alignment for pairing status blocks ([#3046](https://github.com/nanocoai/nanoclaw/pull/3046)).

## User Feedback Summary

- **Setup flow frustration:** Users who select Codex or another non-Claude provider still get pushed toward Claude CLI installation and Anthropic sign-in ([#3169](https://github.com/nanocoai/nanoclaw/issues/3169)).
- **Bundled integration confusion:** Qodo skills were shipped without any setup path and interfere with normal coding requests ([#3171](https://github.com/nanocoai/nanoclaw/issues/3171)).
- **Container environment gaps:** Rootless Docker users cannot run agent containers; the common `docker`-group setup masked the failures ([#3174](https://github.com/nanocoai/nanoclaw/pull/3174)).
- **Setup migration broken:** The v2 migration path crashes because of a renamed export ([#3166](https://github.com/nanocoai/nanoclaw/pull/3166)).
- **Opaque credential failures:** Expired credentials produce confusing low-level errors instead of actionable alerts ([#3167](https://github.com/nanocoai/nanoclaw/pull/3167)).

No satisfaction ratings were available; the overall signal is that users are actively contributing fixes, which indicates engagement but also persistent friction in setup and bundled skill behavior.

## Backlog Watch

Long-open PRs that may need maintainer attention:

- [#2750](https://github.com/nanocoai/nanoclaw/pull/2750) — Stale `outbound.db` journals after container kills; open since **2026-06-12**.
- [#2801](https://github.com/nanocoai/nanoclaw/pull/2801) — Router input hardening for untrusted payloads; open since **2026-06-17**.
- [#2956](https://github.com/nanocoai/nanoclaw/pull/2956) — Duplicate delivery fix; open since **2026-07-05**.
- [#3046](https://github.com/nanocoai/nanoclaw/pull/3046) — Docs alignment for pairing status blocks; open since **2026-07-14**.
- [#3090](https://github.com/nanocoai/nanoclaw/pull/3090) — Prepend all top-level context Markdown; open since **2026-07-19**, labeled core-team.
- [#3121](https://github.com/nanocoai/nanoclaw/pull/3121) — Make reaction delivery best-effort; open since **2026-07-23**.

These PRs were all touched/updated in the last 24 hours, so they are not ignored, but several have now been waiting weeks for a merge or close decision.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-08-02

## 1. Today's Overview

IronClaw saw high, maintainer-driven activity in the last 24 hours: **12 issues updated** (10 open/active, 2 closed) and **22 PRs updated** (15 open, 7 merged/closed), with **no new releases**. The dominant narrative is execution of the "reborn" Wave 2 refactoring plan — the contract-inversion PRs #6998 and #7002 are closed/merged, and a chain of dependent refactors (#7000, #7003, #7004, #7005) is actively moving. CI hardening also advanced: tracking issue #6963 was closed by #6996, which made path-keyed CI gate discovery fail-closed. Activity is healthy but heavily core-team/internal; only one new issue was filed today.

## 2. Releases

**None in the last 24 hours.**

The open release PR remains pending:

- [PR #5598 — chore: release](https://github.com/nearai/ironclaw/pull/5598) — open since 2026-07-03; would ship `ironclaw_common` 0.4.2 → 0.5.0 (breaking), `ironclaw_safety` 0.2.2 → 0.2.3, and `ironclaw_skills` 0.3.0 → 0.4.0 (breaking).

## 3. Project Progress

Aggregate data shows **7 PRs merged/closed** in the window. Visible closed/merged PRs:

- [PR #6998 — refactor(contracts): invert extension_host's product-facing ports onto product_contracts (WS2.1)](https://github.com/nearai/ironclaw/pull/6998) — closed; moves `ironclaw_extension_host` onto `ironclaw_product_contracts` port definitions.
- [PR #7002 — refactor(contracts): invert webui + openai_compat onto product_contracts (WS5)](https://github.com/nearai/ironclaw/pull/7002) — closed; inverts WebUI/OpenAI-compat dependencies.
- [PR #6996 — ci(gates): close #6963 — inventory-driven discovery + fail-closed across remaining path-keyed gates](https://github.com/nearai/ironclaw/pull/6996) — closed; fixes silent CI-gate defects.
- [PR #6995 — docs(target-architecture): Wave 1 truth audit — reconcile decision record with shipped reality](https://github.com/nearai/ironclaw/pull/6995) — closed.
- [PR #6761 — test: cover generic outbound registration](https://github.com/nearai/ironclaw/pull/6761) — closed; adds regression coverage for generic channel outbound-target registration.

Also closed on the issue side:

- [Issue #6963 — Path-keyed CI gates that survive #6946](https://github.com/nearai/ironclaw/issues/6963) — closed by #6996.
- [Issue #6921 — Extract neutral loop, extension, and product contracts and seal evidence minting](https://github.com/nearai/ironclaw/issues/6921) — closed.

**Bottom line:** the reborn architecture is progressively reducing direct dependencies on `ironclaw_product`, centralizing contracts, and fixing CI reliability issues.

## 4. Community Hot Topics

PR comment/reaction counts were not available in the extract; issue comment counts are the clearest signal.

- [Issue #6963 — Path-keyed CI gates that survive #6946](https://github.com/nearai/ironclaw/issues/6963) — **7 comments**, now closed. It tracked eight path-keyed CI/dev gate defects. Underlying need: reviewers and maintainers want silent CI coverage gaps discovered systematically rather than via checklist items.
- [Issue #6974 — libSQL thread_store_writes pathology: tool-heavy stress cases at p95 37-135s post-#6696](https://github.com/nearai/ironclaw/issues/6974) — **2 comments**. Underlying need: performance regression coverage for libSQL under tool-heavy workloads; the suite now completes but is far over the 2.5s p95 target.
- [Issue #6921 — Extract neutral loop, extension, and product contracts and seal evidence minting](https://github.com/nearai/ironclaw/issues/6921) — **2 comments**, closed. Underlying need: enforce architectural authority boundaries so evidence cannot be forged outside sanctioned minters.
- [Issue #6978 — reborn-tests.yml: workflow_dispatch runs structurally fail the Tests (Reborn) roll-up](https://github.com/nearai/ironclaw/issues/6978) — **1 comment**. Underlying need: manual CI runs should not produce false-red roll-ups because `critical-mutation` is skipped but disallowed.

## 5. Bugs & Stability

Ranked by severity:

1. **Severe — libSQL thread_store_writes regression**  
   [Issue #6974 — libSQL thread_store_writes pathology: tool-heavy stress cases at p95 37-135s post-#6696](https://github.com/nearai/ironclaw/issues/6974)  
   Tool-heavy cases are at **p95 37–135s**, far exceeding the 2.5s target. This was split out of #6973 and remains open; no dedicated fix PR is visible yet.

2. **Medium — CI roll-up fails on workflow_dispatch**  
   [Issue #6978 — reborn-tests.yml: workflow_dispatch runs structurally fail the Tests (Reborn) roll-up](https://github.com/nearai/ironclaw/issues/6978)  
   `critical-mutation` is skipped for non-PR events but the roll-up still disallows the skip, producing red CI even when zero lanes fail.

3. **Medium — Five pre-existing extension_manager findings from WS2.4 split**  
   [Issue #7011 — extension_manager: five pre-existing findings surfaced by the WS2.4 split](https://github.com/nearai/ironclaw/issues/7011)  
   Includes a false `WriteFilesystem` effect, an untested lock predicate, two missing dispatch tests, and six dropped causes. Code was moved byte-for-byte by #7003, so the bugs predate the split.

4. **Low/Quality — Changed-coverage gate cannot exercise steering-queue error paths**  
   [Issue #7006 — Changed-coverage gate: steering-queue slice error paths are crate-tier-only](https://github.com/nearai/ironclaw/issues/7006)  
   Roughly 180 changed lines are fault-injection/serialization error paths the hermetic integration harness cannot execute.

5. **Low/Quality — Server-lifecycle architecture rule does not cover WebChat v2 routes**  
   [Issue #6999 — reborn_dependency_boundaries' server-lifecycle rule never covered the WebChat v2 route surface](https://github.com/nearai/ironclaw/issues/6999)  
   The test documents a rule it does not actually enforce; fixing it is an architecture call.

**Fixed in this window:** [Issue #6963](https://github.com/nearai/ironclaw/issues/6963) described six silent + two loud path-keyed CI gate defects and was closed by [PR #6996](https://github.com/nearai/ironclaw/pull/6996).

## 6. Feature Requests & Roadmap Signals

- [Issue #7009 — Add OrcaRouter as a built-in LLM provider](https://github.com/nearai/ironclaw/issues/7009)  
  Direct user-facing request. Since `providers.json` already includes OpenRouter, Together, Fireworks, Cerebras, SambaNova, NVIDIA, Venice, io.net, and Yandex, adding OrcaRouter is a likely quick win and a plausible next-version item.

- [Issue #7012 — Time awareness without prompt-cache churn: append-only rollover context and duration evidence](https://github.com/nearai/ironclaw/issues/7012)  
  Newly filed roadmap item for agent/reborn behavior: define temporal facts and cache-stable context boundaries. Likely to shape future loop/context work.

- [Issue #6993 — Backend wiring for the OOBE automation-tasks prototype](https://github.com/nearai/ironclaw/issues/6993)  
  The frontend prototype is already open as [PR #6994](https://github.com/nearai/ironclaw/pull/6994). If the prototype is accepted, backend wiring is the natural next step.

- [PR #7001 — keep the cached system prefix byte-stable across model calls](https://github.com/nearai/ironclaw/pull/7001) and [PR #6997 — explicit Anthropic cache_control breakpoints](https://github.com/nearai/ironclaw/pull/6997)  
  Both target prompt-cache efficiency and are likely enablers for latency/cost improvements in upcoming releases.

- [PR #6780 — deep-link register/install gateway + private manifest source](https://github.com/nearai/ironclaw/pull/6780)  
  In-flight feature for reborn-ironhub; open since 2026-07-28.

## 7. User Feedback Summary

No explicit user satisfaction data (comments/reactions) was captured in this extract — all listed issues show **👍 0**. Indirect signals from the issue tracker:

- **Provider coverage matters**: #7009 shows an external user wants OrcaRouter as a first-class provider, not just via a generic OpenAI-compatible path.
- **Performance pain is real**: #6974 and #6973 document severe p95 latency regressions; tool-heavy workloads are missing the 2.5s target by an order of magnitude.
- **Onboarding is an active product direction**: the OOBE automation-tasks UI prototype (#6994) plus backend issue (#6993) suggest first-time-user setup is being productized.
- **Developer/CI friction is a recurring theme**: #6978, #6996, #7006, and #6999 all reflect maintainer/contributor pain with CI gating and architecture-test coverage.

## 8. Backlog Watch

PRs/issues that have been open the longest and need attention:

- [PR #5598 — chore: release](https://github.com/nearai/ironclaw/pull/5598) — open since **2026-07-03**; carries breaking changes in `ironclaw_common` and `ironclaw_skills`. No release has shipped in the visible window.
- [PR #5981 — Reborn queued-message steering](https://github.com/nearai/ironclaw/pull/5981) — open since **2026-07-11**; large, risk-medium, core-owned. Updated today, so still actively worked but long-lived.
- [PR #5982 — Reborn budget approval-as-blocked-gate + usage settings](https://github.com/nearai/ironclaw/pull/5982) — open since **2026-07-11**; split 2/2 and stacked on the queued-message steering work.
- [PR #6780 — Feat(reborn-ironhub): deep-link register/install gateway + private manifest source](https://github.com/nearai/ironclaw/pull/6780) — open since **2026-07-28**.
- [PR #6917 — fix(webui): open workspace file links in authenticated previews](https://github.com/nearai/ironclaw/pull/6917) — open since **2026-07-30**.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-08-02

## 1. Today's Overview
LobsterAI saw very low activity in the last 24 hours: no new releases, no merged PRs, and no newly opened issues. Seven issues were updated, but six are now closed under the `stale` label rather than being resolved, leaving only one issue still open. Two pull requests remain open and await review, including a long-pending i18n/UX fix and a session-rename feedback improvement. This looks like a maintenance/low-activity phase for the project, with bot-driven stale cleanup dominating the update stream. Maintainer review of pending PRs is needed to prevent valid fixes and user reports from being lost.

## 2. Releases
No new releases were published in the last 24 hours.

## 3. Project Progress
No PRs were merged or closed today. The two open PRs represent the only concrete in-flight work:

- [#1224 fix(agent): 修复 i18n 硬编码、Agent 弹窗 Escape 键支持及删除防重复点击](https://github.com/netease-youdao/LobsterAI/pull/1224) — Closes #1223; ready for review since April.
- [#2358 fix(cowork): show feedback when session rename fails](https://github.com/netease-youdao/LobsterAI/pull/2358) — Fixes #670; ready for review since July.

No feature or fix advanced to merged state in this window.

## 4. Community Hot Topics
Activity was low, but the following items received the most attention:

- [#1293 自定义studio http 的mcp无法使用](https://github.com/netease-youdao/LobsterAI/issues/1293) — 2 comments, 1 👍  
  Users report that custom HTTP MCP servers are not registered in the OpenClaw engine and cannot be called; only SSE-based MCP works. This reflects a real need for broader MCP transport support.

- [#1302 feat(cowork): 为代码块添加行号显示切换按钮](https://github.com/netease-youdao/LobsterAI/issues/1302) — 2 comments  
  A feature proposal to add a line-number toggle to code blocks. It was closed as stale, but the request itself is still useful product signal.

- [#1223 [Bug] CoworkPromptInput 硬编码中文标签...](https://github.com/netease-youdao/LobsterAI/issues/1223) — still open, with an associated fix PR #1224.

## 5. Bugs & Stability
Ranked by estimated severity:

- **High: [#1296 上传长图（3M）解析，页面直接报错](https://github.com/netease-youdao/LobsterAI/issues/1296)**  
  3MB long-image upload crashes the page and makes new tasks unusable. Closed as stale, no linked fix PR.

- **Medium: [#1298 输入两个字就提示超出模型限制](https://github.com/netease-youdao/LobsterAI/issues/1298)**  
  Model connection test passes, but a two-character input is incorrectly rejected as too long. Suggests a token/context-window calculation bug. Closed as stale.

- **Medium: [#1307 Cannot edit another model provider config after closing the edit panel](https://github.com/netease-youdao/LobsterAI/issues/1307)**  
  Provider config panel becomes read-only after opening/closing another provider's edit panel. Closed as stale.

- **Medium: [#1293 Custom HTTP MCP not usable](https://github.com/netease-youdao/LobsterAI/issues/1293)**  
  Feature gap / bug: only SSE MCP is recognized by the OpenClaw engine.

- **Low: [#1305 Scheduled task history shows wrong title after task deletion](https://github.com/netease-youdao/LobsterAI/issues/1305)**  
  Historical run records display an incorrect title after the scheduled task is deleted.

- **Open with fix pending: [#1223 Hardcoded Chinese i18n, missing Escape-key close, delete double-click protection](https://github.com/netease-youdao/LobsterAI/issues/1223)**  
  Fix PR [#1224](https://github.com/netease-youdao/LobsterAI/pull/1224) has been open and stale for months.

## 6. Feature Requests & Roadmap Signals
The only explicit feature request in this batch was:

- [#1302 Code-block line-number display toggle](https://github.com/netease-youdao/LobsterAI/issues/1302) — closed as stale, but signals continued interest in better code-reading UX.

The MCP issue [#1293](https://github.com/netease-youdao/LobsterAI/issues/1293) also indicates a roadmap gap: users expect HTTP-based custom MCP servers to work, not just SSE.

The pending UX PRs point toward upcoming quality-of-life improvements if merged:

- [#1224](https://github.com/netease-youdao/LobsterAI/pull/1224) brings i18n fixes, Escape-key support, and delete-button double-click protection.
- [#2358](https://github.com/netease-youdao/LobsterAI/pull/2358) adds localized feedback when session rename fails.

If maintainers resume review, these two are the most likely candidates for the next minor release.

## 7. User Feedback Summary
User reports in this window show several real pain points:

- Long-image parsing can crash the entire app and block future tasks ([#1296](https://github.com/netease-youdao/LobsterAI/issues/1296)).
- Input-length validation is unreliable even for very short inputs ([#1298](https://github.com/netease-youdao/LobsterAI/issues/1298)).
- Custom MCP integrations are effectively unsupported unless they use SSE ([#1293](https://github.com/netease-youdao/LobsterAI/issues/1293)).
- The model-provider settings UI can become read-only after editing another provider ([#1307](https://github.com/netease-youdao/LobsterAI/issues/1307)).
- English users see hardcoded Chinese text in prompts sent to AI models ([#1223](https://github.com/netease-youdao/LobsterAI/issues/1223)).

No positive satisfaction signals were present in this batch. The high proportion of stale-closed issues suggests that some users’ reports may not have received maintainer response, which risks leaving known issues unresolved.

## 8. Backlog Watch
Items that need maintainer attention the most:

- [#1223 [Bug] CoworkPromptInput i18n / Agent modal UX issues](https://github.com/netease-youdao/LobsterAI/issues/1223) — open since April 1, with a ready fix PR.
- [#1224 fix(agent): i18n / Escape key / delete double-click protection](https://github.com/netease-youdao/LobsterAI/pull/1224) — open since April 1, marked stale; should be reviewed and merged or closed.
- [#2358 fix(cowork): show feedback when session rename fails](https://github.com/netease-youdao/LobsterAI/pull/2358) — open since July 18; fixes a real silent-failure bug.

These items have concrete fixes and clear user impact, making them the highest-priority backlog for maintainer review.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-08-02

## Today's Overview
Moltis had a quiet issue day: no issues were opened, updated, or closed in the last 24 hours, and no new release was cut. PR activity was moderate, with 3 PRs updated: 1 currently open and 2 closed/merged. The closed work focuses on security hardening and observability infrastructure, while the open PR targets session-management UX. Overall, the project looks healthy with maintainer-driven progress, though community issue traffic is currently low.

## Releases
No new releases were published as of 2026-08-02.

## Project Progress
Two PRs were closed/merged and one PR remains open:

- [#1174 [CLOSED] Add instrumentation and feedback collection infrastructure](https://github.com/moltis-org/moltis/pull/1174)  
  Adds backend-neutral agent instrumentation, Langfuse v4 export, OTLP backends, and end-user reaction feedback. This is a major observability and product-feedback foundation.

- [#1170 [CLOSED] fix(channels): gate /sh and privileged tools behind a per-account operators list](https://github.com/moltis-org/moltis/pull/1170)  
  Fixes a security boundary issue where channel senders with access allowlist could reach privileged commands and host tools. The PR introduces an explicit per-account `operators` list and enforces it across commands, callbacks, queue replay, and chat execution.

- [#1182 [OPEN] fix(sessions): allow deleting and archiving the main session](https://github.com/moltis-org/moltis/pull/1182)  
  A pending fix for issue [#1132](https://github.com/moltis-org/moltis/issues/1132), allowing the `main` session to be deleted or archived like any other session. The PR removes the `main` guard while preserving active-channel-session restrictions and `sessions.clear_all` behavior.

## Community Hot Topics
There were no issues updated in the last 24 hours, and none of the listed PRs show comment or reaction counts. The only open PR, [#1182](https://github.com/moltis-org/moltis/pull/1182), is the most likely community focal point. Its underlying need is straightforward: users expect the `main` session to behave like every other session and want full control over deletion and archiving without breaking channel-session safeguards.

## Bugs & Stability
No new bugs or regressions were reported in the last 24 hours. Two stability/security-relevant fixes were active:

- **High severity / security**: [#1170](https://github.com/moltis-org/moltis/pull/1170) fixes a potential privilege-boundary issue where channel senders who passed an access allowlist could still reach privileged commands and host tools. This fix has already been closed/merged.
- **Medium severity / functional bug**: [#1182](https://github.com/moltis-org/moltis/pull/1182) addresses issue [#1132](https://github.com/moltis-org/moltis/issues/1132), where the `main` session could not be deleted or archived. This fix is open and awaiting review/merge.

No crashes or new regressions were reported.

## Feature Requests & Roadmap Signals
The closed PRs point to clear roadmap themes:

- **Observability and feedback**: [#1174](https://github.com/moltis-org/moltis/pull/1174) suggests Moltis is investing in production-grade instrumentation, including Langfuse and OTLP integration, plus end-user reaction feedback. These features are likely to appear in the next minor release.
- **Security and access control**: [#1170](https://github.com/moltis-org/moltis/pull/1170) formalizes privilege separation with per-account operator lists, indicating a broader security-hardening trend.
- **Session management flexibility**: [#1182](https://github.com/moltis-org/moltis/pull/1182) is a user-driven feature/bug fix that may land in the next patch release.

## User Feedback Summary
User pain points visible in this digest:

- Users want to delete or archive the main session without special restrictions, as reported in [#1132](https://github.com/moltis-org/moltis/issues/1132).
- Channel administrators need stronger separation between general access and privileged tool/command execution.
- There is demand for agent instrumentation, trace export, and direct end-user feedback collection, indicating real deployment/operations needs.

Maintainers appear responsive: both the security issue and the session-management issue received direct fix PRs, and the instrumentation PR shows active investment in operational tooling.

## Backlog Watch
No long-unanswered or stale issues are visible in the current 24-hour window. The only item requiring maintainer attention is the open PR [#1182](https://github.com/moltis-org/moltis/pull/1182), which is a pending fix for [#1132](https://github.com/moltis-org/moltis/issues/1132). If it passes review and merges, it should resolve the reported session-management pain point. Otherwise, the active backlog appears clean.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-08-02

## 1. Today's Overview

As of 2026-08-02, CoPaw had **no new releases**, **9 issues updated in the last 24h** (all still open), and **11 PRs updated** (10 open, 1 closed). Activity was heavily focused on bug fixes and reliability work: scroll/auto-compression memory behavior, ACP transport races, Gemini tool-call streaming crashes, and provider model alignment. Three first-time contributors submitted PRs (#6620, #6622, #6623), a positive signal for community onboarding. However, no issues were closed and only one PR was closed in the window, suggesting maintainer review capacity may be a bottleneck.

## 2. Releases

No new releases were published in this digest window. The latest-releases list is empty.

## 3. Project Progress

**Closed PRs**

- [#6598 [CLOSED] fix(skills): preserve plugin-sourced skill tags across reconcile cycles](https://github.com/agentscope-ai/QwenPaw/pull/6598)  
  The only closed PR in the window. It addresses #6537, where skill tags disappeared after restart for plugin-sourced skills. It is not explicitly marked as merged; notably, a newer open PR [#6632](https://github.com/agentscope-ai/QwenPaw/pull/6632) covers the same fix, so #6598 may have been superseded.

**Active PRs advancing fixes and features**

- [#6632 fix(skills): preserve plugin-sourced skill tags across reconcile cycles](https://github.com/agentscope-ai/QwenPaw/pull/6632) — new replacement fix for #6537.
- [#6629 fix(memory): trigger summarize on auto-compression when summarize_when_compact is enabled](https://github.com/agentscope-ai/QwenPaw/pull/6629) — addresses #6624.
- [#6623 fix(acp): prevent final text loss when notifications race the prompt response](https://github.com/agentscope-ai/QwenPaw/pull/6623) — addresses #6625.
- [#6620 fix(providers): relay Gemini thought_signature without mutating strict ToolCallBlock](https://github.com/agentscope-ai/QwenPaw/pull/6620) — addresses #6619.
- [#6630 fix(agents): report empty model response to user instead of silently failing](https://github.com/agentscope-ai/QwenPaw/pull/6630)
- [#6631 fix(providers): align Aliyun coding plan models with official website](https://github.com/agentscope-ai/QwenPaw/pull/6631)
- [#6628 fix(scroll): use SystemMsg for compressed memory placeholder in _rebuild_context](https://github.com/agentscope-ai/QwenPaw/pull/6628)
- [#6622 feat(provider): add OrcaRouter as built-in provider](https://github.com/agentscope-ai/QwenPaw/pull/6622)
- [#5490 feat(console): show tool-card images inline and add gallery navigation](https://github.com/agentscope-ai/QwenPaw/pull/5490)
- [#6302 feat: unify provider discovery, model metadata, routing, and agent controls](https://github.com/agentscope-ai/QwenPaw/pull/6302)

## 4. Community Hot Topics

The most-discussed issues in this window each had **2 comments**:

- [#6593 [Feature] 增加统一且专业的 QwenPaw 专用清理页面](https://github.com/agentscope-ai/QwenPaw/issues/6593)  
  Users want a unified, professional cleanup page for accumulated agent data: memory, workspace files, backups, history, and inbox clutter. Underlying need: long-term storage hygiene is becoming a real usability problem.

- [#6480 [Question] 运行 nohup 命令 agent 都会卡住](https://github.com/agentscope-ai/QwenPaw/issues/6480)  
  Shell commands using `nohup` or trailing `&` never return the agent to idle. Underlying need: reliable background/detached process handling in `execute_shell_command`.

- [#6568 [Feature] 全局快捷键唤出浮动快速输入框（豆包式）](https://github.com/agentscope-ai/QwenPaw/issues/6568)  
  Users want a Raycast/Doubao-style global-hotkey floating quick-input box instead of opening the full desktop window. Underlying need: low-friction, lightweight agent interaction on desktop.

No issues or PRs showed upvote reactions (👍 = 0) in this dataset, so engagement was measured primarily through comments and authored PRs.

## 5. Bugs & Stability

Ranked by severity:

- **High — [#6619 "ToolCallBlock" object has no field "extra_content"](https://github.com/agentscope-ai/QwenPaw/issues/6619)**  
  Streaming Gemini tool-call responses crash QwenPaw 2.0.1 with a `ValueError` in `openai_chat_model_compat._parse_stream_response`. A fix PR exists: [#6620](https://github.com/agentscope-ai/QwenPaw/pull/6620).

- **High — [#6625 ACP delegate_external_agent returns "completed without text output"](https://github.com/agentscope-ai/QwenPaw/issues/6625)**  
  A race between `session/update` notifications and `session/prompt` responses can cause valid agent output to be reported as missing. A fix PR exists: [#6623](https://github.com/agentscope-ai/QwenPaw/pull/6623).

- **Medium/High — [#6624 自动压缩无法触发记忆](https://github.com/agentscope-ai/QwenPaw/issues/6624)**  
  Scroll auto-compression does not trigger `summarize_when_compact`, while manual `/compact` does. This reduces memory reliability in long sessions. A fix PR exists: [#6629](https://github.com/agentscope-ai/QwenPaw/pull/6629).

- **Medium — [#6480 nohup/& shell processes never return to idle](https://github.com/agentscope-ai/QwenPaw/issues/6480)**  
  Detached shell processes hang the agent. This issue is older and still open, with no fix PR visible.

- **Medium — [#6626 CI gate strips fenced Evidence blocks](https://github.com/agentscope-ai/QwenPaw/issues/6626)**  
  The “Real behavior proof” gate rejects PRs whose Evidence section contains only fenced code blocks. This is a contributor-workflow blocker and may need a CI validation fix.

Also in flight: [#6628](https://github.com/agentscope-ai/QwenPaw/pull/6628) fixes a scroll compression placeholder that used `role=user`, causing HTTP 400 errors with DeepSeek and other OpenAI-compatible APIs.

## 6. Feature Requests & Roadmap Signals

- **Unified cleanup/storage management** — [#6593](https://github.com/agentscope-ai/QwenPaw/issues/6593) requests a global cleanup page with manual and automatic options. No implementation PR yet; likely a larger UX/storage initiative.

- **Global-hotkey floating quick input** — [#6568](https://github.com/agentscope-ai/QwenPaw/issues/6568) is a desktop UX request similar to Doubao/Raycast. No implementation PR yet.

- **OrcaRouter as built-in provider** — [#6622](https://github.com/agentscope-ai/QwenPaw/pull/6622) is already an open PR, so this is the feature most likely to ship in the near term.

- **Multi-agent collaboration onboarding** — [#6621](https://github.com/agentscope-ai/QwenPaw/issues/6621) reports that users are unaware Default Agent will not call other agents unless explicitly configured in `PROFILE.md`. This is a strong signal for docs/UX improvements around multi-agent discoverability.

- **LLM tracing with LoongSuite** — [#6627](https://github.com/agentscope-ai/QwenPaw/issues/6627) asks how to use `alibaba/loongsuite-python` with QwenPaw for LLM trace. This points to growing demand for built-in observability/tracing support.

## 7. User Feedback Summary

User feedback in this window shows both enthusiasm and friction:

- **Storage bloat is a real pain point** — [#6593](https://github.com/agentscope-ai/QwenPaw/issues/6593): long-running agents accumulate memory, files, backups, and history with no clean way to manage or delete them.
- **Shell process handling is fragile** — [#6480](https://github.com/agentscope-ai/QwenPaw/issues/6480): background commands like `nohup` hang the agent and the user cannot easily recover.
- **Desktop interaction is too heavy for quick queries** — [#6568](https://github.com/agentscope-ai/QwenPaw/issues/6568): opening a 1280×800 main window is a poor fit for “just ask a quick question.”
- **Multi-agent behavior is surprising and under-documented** — [#6621](https://github.com/agentscope-ai/QwenPaw/issues/6621): user spent 50+ sessions before discovering agents are not called automatically.
- **Memory/compaction behavior is inconsistent** — [#6624](https://github.com/agentscope-ai/QwenPaw/issues/6624): auto-compression silently bypasses the expected summarize flow.
- **Contributors are engaged but hitting process friction** — [#6626](https://github.com/agentscope-ai/QwenPaw/issues/6626) and the number of first-time contributor PRs show a willing community, though CI/evidence rules can block valid contributions.

Overall, users are constructive, but daily operational reliability — memory, shell execution, cleanup, and discoverability — remains the top source of dissatisfaction.

## 8. Backlog Watch

Items needing maintainer attention due to age or lack of resolution:

- **[#5490 feat(console): show tool-card images inline and add gallery navigation](https://github.com/agentscope-ai/QwenPaw/pull/5490)**  
  Open since 2026-06-24. This is the oldest open PR in the dataset and still awaiting review/merge.

- **[#6302 feat: unify provider discovery, model metadata, routing, and agent controls](https://github.com/agentscope-ai/QwenPaw/pull/6302)**  
  Open since 2026-07-21. A large architectural refactor with no visible maintainer response; risk of bit-rotting.

- **[#6480 nohup/& shell commands hang the agent](https://github.com/agentscope-ai/QwenPaw/issues/6480)**  
  Open since 2026-07-26. This is a functional bug affecting real usage, but no linked fix PR or maintainer status update was visible in this window.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-08-02

## 1. Today’s Overview

ZeroClaw activity remains high and design-heavy: 50 issues and 50 PRs were updated in the last 24 hours, with 47 issues still open and 3 closed. No PRs were merged or closed during the window, and no new release was published, but a v0.8.4 version-bump PR indicates release preparation is underway. The busiest items are RFCs around memory architecture, OpenAI compatibility, key management, and observability, suggesting the project is still in a deliberate hardening and modularization phase. Security-related bugs in WhatsApp and cron delivery also received continued attention.

## 2. Releases

No new releases were published in the last 24 hours. The open PR [chore(release): bump version to v0.8.4 (#9648)](https://github.com/zeroclaw-labs/zeroclaw/pull/9648) suggests the next patch release is being assembled, but it has not yet merged.

## 3. Project Progress

- **Merged/closed PRs today:** 0.
- **Closed issues in the window:**
  - [Feature: Mixture-of-Agents (MoA) virtual model provider (#8568)](https://github.com/zeroclaw-labs/zeroclaw/issues/8568) — closed after RFC discussion.
  - [Docs: Update broken LinkedIn link on GitHub organization profile (#9550)](https://github.com/zeroclaw-labs/zeroclaw/issues/9550) — closed documentation fix.

Notable open PRs actively advanced today, though not merged:

- [feat(runtime): support PowerShell as the native shell on Windows (#9182)](https://github.com/zeroclaw-labs/zeroclaw/pull/9182)
- [fix(anthropic): support stored OAuth profiles (#9420)](https://github.com/zeroclaw-labs/zeroclaw/pull/9420)
- [fix(channels/telegram): skip unauthorized handler for non-mentioned group messages with mention_only (#9634)](https://github.com/zeroclaw-labs/zeroclaw/pull/9634)
- [chore(channels): remove the WATI channel (#9571)](https://github.com/zeroclaw-labs/zeroclaw/pull/9571)
- [refactor(runtime): seal the engine tool registry as ScopedToolRegistry (#9319)](https://github.com/zeroclaw-labs/zeroclaw/pull/9319)
- [feat(computer-use): add native macOS, Linux X11, and Windows drivers (#9091)](https://github.com/zeroclaw-labs/zeroclaw/pull/9091)
- [feat(relay): secure transport and browser enrollment frontdoor (#9080)](https://github.com/zeroclaw-labs/zeroclaw/pull/9080)
- Multiple evaluation-suite PRs by IftekharUddin: [#9220](https://github.com/zeroclaw-labs/zeroclaw/pull/9220), [#9221](https://github.com/zeroclaw-labs/zeroclaw/pull/9221), [#9222](https://github.com/zeroclaw-labs/zeroclaw/pull/9222), [#9223](https://github.com/zeroclaw-labs/zeroclaw/pull/9223), [#9244](https://github.com/zeroclaw-labs/zeroclaw/pull/9244), [#9248](https://github.com/zeroclaw-labs/zeroclaw/pull/9248)

## 4. Community Hot Topics

The most active discussions are all RFC/design issues:

- [RFC: Separate conversation history from agent-curated long-term memory (#9048)](https://github.com/zeroclaw-labs/zeroclaw/issues/9048) — 16 comments. Core concern: memory lifecycle concepts are mixed in implementation paths.
- [RFC: OpenAI Chat Completions compatibility adapter (#8603)](https://github.com/zeroclaw-labs/zeroclaw/issues/8603) — 13 comments. Strong demand from Open WebUI, LobeChat, Continue.dev, and LangChain users.
- [RFC: Abstract a `KeySource` trait — classify master-key material by source / deployment form (#9127)](https://github.com/zeroclaw-labs/zeroclaw/issues/9127) — 13 comments. Security architecture for secret handling.
- [RFC: Add cross-turn conversation correlation to OTel export (#8933)](https://github.com/zeroclaw-labs/zeroclaw/issues/8933) — 12 comments. Observability scoping via `gen_ai.conversation.id`.
- [RFC: Add a per-execution confirmation tier for high-risk shell commands (#7155)](https://github.com/zeroclaw-labs/zeroclaw/issues/7155) — 11 comments. Need for middle ground between full shell access and blocking.
- [RFC: separate authoritative memory storage from optional enrichment connectors (#9103)](https://github.com/zeroclaw-labs/zeroclaw/issues/9103) — 10 comments.
- [RFC: A2A outbound client (A2ATool) (#9106)](https://github.com/zeroclaw-labs/zeroclaw/issues/9106) — 10 comments.

The underlying pattern is clear: users and maintainers are pushing ZeroClaw toward cleaner architectural boundaries — memory, security, protocol compatibility, and inter-agent communication.

## 5. Bugs & Stability

Bug-class issues updated in the last 24 hours, ranked by severity:

- **S1 / P1 — WhatsApp Web allowlist bypass**  
  [Bug: WhatsApp Web answers every DM and every group under mode = business (#9348)](https://github.com/zeroclaw-labs/zeroclaw/issues/9348)  
  An empty `allowed_groups` permits all groups, making a locked-down config behave as fully open. A fix is proposed in [RFC: Treat an empty WhatsApp Web `allowed_groups` as permit-none (#9397)](https://github.com/zeroclaw-labs/zeroclaw/issues/9397), but no fix PR has merged yet.

- **S2 / P1 — WhatsApp Cloud approval token leak**  
  [WhatsApp Cloud request_approval leaks a live approval token on send failure and on cancellation (#9417)](https://github.com/zeroclaw-labs/zeroclaw/issues/9417)  
  Approval tokens remain live after failed or cancelled sends. No fix PR is visible in the current top-20 PR set.

- **P1 — CLI-created cron jobs discard output**  
  [Bug: CLI-created cron jobs cannot deliver output; delivery is hardcoded to None (#9340)](https://github.com/zeroclaw-labs/zeroclaw/issues/9340)  
  Jobs run and report `ok`, but output is silently dropped. No fix PR is visible yet.

- **S3 / P2 — Nextcloud Talk wrong bot message API**  
  [Bug: Nextcloud Talk use correct bot message API (#6157)](https://github.com/zeroclaw-labs/zeroclaw/issues/6157)  
  Accepted and in progress, but still open.

Active PRs addressing stability/security issues include [Telegram `mention_only` unauthorized-handler fix (#9634)](https://github.com/zeroclaw-labs/zeroclaw/pull/9634) and the [Anthropic stored OAuth profiles fix (#9420)](https://github.com/zeroclaw-labs/zeroclaw/pull/9420).

## 6. Feature Requests & Roadmap Signals

Strong roadmap signals from RFCs and enhancements updated recently:

- **OpenAI-compatible API surface** — [RFC #8603](https://github.com/zeroclaw-labs/zeroclaw/issues/8603) is one of the most-commented issues and would unlock Open WebUI, LobeChat, Aider, and LangChain clients.
- **Memory architecture split** — Issues [#9048](https://github.com/zeroclaw-labs/zeroclaw/issues/9048), [#9103](https://github.com/zeroclaw-labs/zeroclaw/issues/9103), and [#6850](https://github.com/zeroclaw-labs/zeroclaw/issues/6850) all push for separating conversation history, authoritative memory, lifecycle policy, and enrichment connectors.
- **A2A outbound client** — [RFC #9106](https://github.com/zeroclaw-labs/zeroclaw/issues/9106) would let ZeroClaw agents proactively call external A2A agents.
- **Realtime speech-to-speech channel for Gemini Live** — [RFC #8780](https://github.com/zeroclaw-labs/zeroclaw/issues/8780).
- **OpenRouter prompt-cache savings via stable `session_id`** — [Feature #9631](https://github.com/zeroclaw-labs/zeroclaw/issues/9631), a concrete cost-saving request.
- **Desktop computer-use support** — [RFC #6909](https://github.com/zeroclaw-labs/zeroclaw/issues/6909) and the large open PR [feat(computer-use) #9091](https://github.com/zeroclaw-labs/zeroclaw/pull/9091).

Likely next release: **v0.8.4** as an incremental patch. Larger architecture changes are being tracked under the [v0.9.0 auth/security/gateway queue (#7432)](https://github.com/zeroclaw-labs/zeroclaw/issues/7432).

## 7. User Feedback Summary

Real user pain points visible from the issue tracker:

- **Security config trust is fragile:** Operators expect allowlists to restrict behavior, but empty WhatsApp `allowed_groups` does the opposite ([#9348](https://github.com/zeroclaw-labs/zeroclaw/issues/9348)).
- **Cost of LLM calls matters:** OpenRouter users want stable `session_id` to reduce prompt-cache misses and lower expenses ([#9631](https://github.com/zeroclaw-labs/zeroclaw/issues/9631)).
- **Integration friction with existing tools:** The absence of an OpenAI-compatible endpoint blocks adoption by common chat UIs and agent frameworks ([#8603](https://github.com/zeroclaw-labs/zeroclaw/issues/8603)).
- **Silent failures in automation:** CLI-created cron jobs report success while discarding output, undermining trust in scheduled agents ([#9340](https://github.com/zeroclaw-labs/zeroclaw/issues/9340)).
- **Memory behavior feels overloaded:** Users and maintainers want a clearer separation between session history and durable agent memory ([#9048](https://github.com/zeroclaw-labs/zeroclaw/issues/9048)).

Satisfaction signals are indirect: the project has a healthy RFC process, contributor-backed PRs, and user-sponsored security issue reports, but the volume of open security bugs indicates hardening is still ongoing.

## 8. Backlog Watch

Long-running, high-priority items still awaiting maintainer action or a final decision:

- [RFC: Decouple memory lifecycle policy from storage backends (#6850)](https://github.com/zeroclaw-labs/zeroclaw/issues/6850) — open since May 22, `needs-maintainer-review`, 9 comments.
- [RFC: Add a per-execution confirmation tier for high-risk shell commands (#7155)](https://github.com/zeroclaw-labs/zeroclaw/issues/7155) — open since June 3, `needs-maintainer-review`, 11 comments, P1.
- [RFC: Pluggable inbound authentication and canonical principals (#7141)](https://github.com/zeroclaw-labs/zeroclaw/issues/7141) — open since June 3, `needs-maintainer-review`, security/architecture.
- [RFC: Computer-use support for desktop screen interaction and input control (#6909)](https://github.com/zeroclaw-labs/zeroclaw/issues/6909) — open since May 25, `needs-maintainer-review`.
- [RFC: Per-model capability & context-window config (#7100)](https://github.com/zeroclaw-labs/zeroclaw/issues/7100) — open since June 2, `needs-maintainer-review`, P1.

Several older PRs are flagged `stale-candidate` and `needs-author-action`, including [fix(cli): localize status fragments (#8546)](https://github.com/zeroclaw-labs/zeroclaw/pull/8546), [fix(channels): add env-var fallback for OpenAI STT credentials (#8576)](https://github.com/zeroclaw-labs/zeroclaw/pull/8576), and [refactor(zerocode): consolidate Code pane, rails, and prompt drafts (#8655)](https://github.com/zeroclaw-labs/zeroclaw/pull/8655). The maintainer decision queue is tracked in [Tracker #8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692).

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/boom7sss/agents-radar).*