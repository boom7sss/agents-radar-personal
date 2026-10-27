# OpenClaw Ecosystem Digest 2026-07-31

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-07-31 03:32 UTC

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

# OpenClaw Project Digest — 2026-07-31

## 1. Today's Overview

OpenClaw saw extremely high activity on 2026-07-31, with 500 issues and 500 PRs updated in the last 24 hours (473 issues still open; 406 PRs still open). Reliability dominates the tracker: message loss, session-state corruption, and crash-loop failures account for most P0/P1 traffic, headlined by a P0 gateway memory leak ([#91588](https://github.com/openclaw/openclaw/issues/91588)). A large share of top-severity issues carry `clawsweeper:needs-maintainer-review` and `clawsweeper:needs-product-decision` labels, indicating a maintainer bottleneck on backlog decisions. On the positive side, 94 PRs were merged or closed, including a wave of fixes targeting silent message loss, channel delivery contracts, Docker healthchecks, and security scanning. No new releases were published.

## 2. Releases

None. No new releases were published on 2026-07-31.

## 3. Project Progress

94 PRs were merged/closed in the last 24 hours. Notable activity among the 500 updated PRs:

- **#116636** [CLOSED] — [fix: resolve explicit main aliases to the configured session](https://github.com/openclaw/openclaw/pull/116636) — closed today; fixes commands targeting the raw `main` alias instead of a customized canonical session.
- **#116584** — [fix: preserve thinking for runtime-selected Ollama models](https://github.com/openclaw/openclaw/pull/116584) — automerge armed; prevents valid non-off thinking levels from being rejected when model policy uses `ollama/*` wildcards.
- **#116649** — [fix(agents): prevent silently lost replies, reports, and delivery receipts](https://github.com/openclaw/openclaw/pull/116649) — addresses queued agent replies, WebChat follow-ups, cron reports, Markdown code blocks, and hooks disappearing without explanation.
- **#116647** — [fix(channels): preserve bundled plugin delivery and provider contracts](https://github.com/openclaw/openclaw/pull/116647) — fixes dropped Slack files, invalid QQBot targets, cancelled Telegram replies, malformed OpenAI speech URLs, and lost Matrix authorizations.
- **#116616** — [fix(exec): preserve approved exec continuation output](https://github.com/openclaw/openclaw/pull/116616) — closes [#41152](https://github.com/openclaw/openclaw/issues/41152); fixes truncated (~400 chars) and whitespace-collapsed command output after async exec approval.
- **#116632** — [fix: preserve outbound modifiers across recovery](https://github.com/openclaw/openclaw/pull/116632) — closes [#116556](https://github.com/openclaw/openclaw/issues/116556); prevents recovered sends from re-running `reply_payload_sending`/`message_sending` after a gateway restart.
- **#116639** — [fix(docker): keep custom-port containers healthy](https://github.com/openclaw/openclaw/pull/116639) — healthchecks always probed port 18789, ignoring `--port`/`OPENCLAW_PORT`.
- **#116646** — [fix(security): detect child_process exec through aliases and computed members](https://github.com/openclaw/openclaw/pull/116646) — closes evasions in the skill security scanner's `dangerous-exec` rule.
- **#116644** — [fix(onboarding): restore skill dependency consent](https://github.com/openclaw/openclaw/pull/116644) — restores an explicit multiselect with "Skip for now" before installing bundled skill dependencies.
- **#116621 / #116622** — [UI inherited-settings defaults](https://github.com/openclaw/openclaw/pull/116621) and [shared config-validation runtime](https://github.com/openclaw/openclaw/pull/116622) — Control UI no longer hides schema defaults or pins current values on reset.
- **Code health:** [#116641](https://github.com/openclaw/openclaw/pull/116641) and [#116643](https://github.com/openclaw/openclaw/pull/116643) remove dead and duplicate test coverage across core and extension suites.

## 4. Community Hot Topics

Most active issues by comment count and reactions:

- **[#25592](https://github.com/openclaw/openclaw/issues/25592)** (39 comments, P1, diamond lobster) — *Text between tool calls leaks to messaging channels.* Internal narration/error handling is delivered as visible messages on Slack/iMessage. Underlying need: a hard separation between internal agent output and user-facing messages.
- **[#44925](https://github.com/openclaw/openclaw/issues/44925)** (23 comments, 2 👍, P1, diamond lobster) — *Subagent completion silently lost on timeout.* Users want orchestration failures to be observable, retryable, and notifiable.
- **[#91588](https://github.com/openclaw/openclaw/issues/91588)** (22 comments, P0, platinum hermit) — *Gateway memory leak: RSS grows 350MB → 15.5GB over days, repeated OOM crashes.* The most severe stability issue in the tracker.
- **[#115326](https://github.com/openclaw/openclaw/issues/115326)** (21 comments, P1, silver shellfish) — *Crash-loop breaker permanently suppresses Discord/WhatsApp; documented recovery fails with WebSocket 1006.*
- **[#48788](https://github.com/openclaw/openclaw/issues/48788)** (19 comments, P3, platinum hermit) — *Centralized filename encoding utility* for multi-encoding Content-Disposition handling (Shift-JIS, EUC-KR, GB18030) across all channel adapters.
- **[#91009](https://github.com/openclaw/openclaw/issues/91009)** (18 comments, 2 👍, P1, platinum hermit) — *Codex PreToolUse hook relay spawns CPU-bound openclaw-hooks processes and stalls gateway RPC.*

Highest-reaction demand: **[#39604](https://github.com/openclaw/openclaw/issues/39604)** (12 👍) for an opt-in `tools.web.fetch.allowPrivateNetwork` setting.

## 5. Bugs & Stability

**Active, unfixed (ranked by severity):**

- **P0 — [#91588](https://github.com/openclaw/openclaw/issues/91588)** Gateway memory leak (350MB → 15.5GB RSS, OOM kill loops, `launchd-handoff` restart cycles). Labeled `clawsweeper-recovery-stuck`; no fix PR.
- **P1 — [#115326](https://github.com/openclaw/openclaw/issues/115326)** Crash-loop breaker permanently suppresses Discord/WhatsApp; `channels.start` recovery fails (WebSocket 1006). Regression.
- **P1 — [#91009](https://github.com/openclaw/openclaw/issues/91009)** Codex `pre_tool_use` hook relay spawns ~100% CPU `openclaw-hooks` processes and stalls gateway RPC; recovery stuck.
- **P1 — [#44925](https://github.com/openclaw/openclaw/issues/44925)** Subagent completion silently lost — no retry, no notification, no auto-restart on timeout.
- **P1 — [#25592](https://github.com/openclaw/openclaw/issues/25592)** Internal text between tool calls leaks to messaging channels (privacy/security exposure).
- **P1 — [#45494](https://github.com/openclaw/openclaw/issues/45494)** Cron agent jobs exhaust full timeout windows during sustained LLM HTTP 500s instead of fast-failing.
- **P1 — [#45224](https://github.com/openclaw/openclaw/issues/45224)** Unhandled Playwright CDP assertion in `CRSession._onMessage` crashes the entire gateway.
- **P1 — [#41744](https://github.com/openclaw/openclaw/issues/41744)** Feishu read-image tool result loses media before final outbound delivery.
- **P1 — [#43367](https://github.com/openclaw/openclaw/issues/43367)** Multi-agent orchestration unstable: concurrent `agents add` config overwrites, session-lock failures, detached child work.
- **P1 — [#29387](https://github.com/openclaw/openclaw/issues/29387)** Bootstrap files in per-agent `agentDir` silently ignored (5 👍).
- **P1 — [#45049](https://github.com/openclaw/openclaw/issues/45049)** Agent loop accepts simulated tool calls in text instead of enforcing real tool invocation.
- **P1 — [#46786](https://github.com/openclaw/openclaw/issues/46786)** `tools.elevated.enabled: true` routes ALL exec calls to the gateway host instead of the sandbox (security regression).

**Fixes in flight today:** [#116616](https://github.com/openclaw/openclaw/pull/116616) (exec continuation output), [#116632](https://github.com/openclaw/openclaw/pull/116632) (outbound modifiers across recovery), [#116599](https://github.com/openclaw/openclaw/pull/116599) (edit tool byte-granularity splice), [#103062](https://github.com/openclaw/openclaw/pull/103062) (stop sends after delivery cancellation), [#116645](https://github.com/openclaw/openclaw/pull/116645) (Synology Chat 2000-char webhook rejection), [#116629](https://github.com/openclaw/openclaw/pull/116629) (voice-wake imports archived on SQLite commit failure), [#116639](https://github.com/openclaw/openclaw/pull/116639) (Docker custom-port healthcheck), [#116646](https://github.com/openclaw/openclaw/pull/116646) (child_process exec detection).

Only 27 issues were closed in the last 24 hours versus 473 still open; nearly all top-severity bugs carry `no-new-fix-pr` and `needs-maintainer-review` labels.

## 6. Feature Requests & Roadmap Signals

Likely candidates for the next release:

- **Private network access** — [#39604](https://github.com/openclaw/openclaw/issues/39604) `tools.web.fetch.allowPrivateNetwork` opt-in (12 👍): simple, low-risk, strong demand.
- **MathJax/LaTeX in Control UI** — [#42840](https://github.com/openclaw/openclaw/issues/42840) (10 👍): clear UX gap for scientific/mathematical content.
- **Telegram Business support** — [#20786](https://github.com/openclaw/openclaw/issues/20786) (6 👍): `business_message` / `business_connection` updates.
- **Sub-agent orchestration controls** — [#27445](https://github.com/openclaw/openclaw/issues/27445) `announceTarget` routing (5 👍), [#22358](https://github.com/openclaw/openclaw/issues/22358) post-subagent completion hook, [#47597](https://github.com/openclaw/openclaw/issues/47597) `streamTo="parent"` for `runtime="subagent"`, [#35203](https://github.com/openclaw/openclaw/issues/35203) RFC on capability profiling + shared blackboard + layered memory.
- **Memory management** — [#45608](https://github.com/openclaw/openclaw/issues/45608) pre-reset agentic memory flush (4 👍), [#22438](https://github.com/openclaw/openclaw/issues/22438) tiered bootstrap file loading, [#43747](https://github.com/openclaw/openclaw/issues/43747) "memory management is in chaos" (inconsistent behavior across installs).
- **Governance & config ergonomics** — [#42475](https://github.com/openclaw/openclaw/issues/42475) per-agent cost budgets at the gateway; [#45758](https://github.com/openclaw/openclaw/issues/45758) YAML config support.
- **Architecture** — [#42026](https://github.com/openclaw/openclaw/issues/42026) RFC to split control plane from agent compute (distributed runtime).

Prediction: the next release will prioritize reliability (message-delivery guarantees, subagent completion observability, memory-leak fixes) and the low-risk high-demand config additions (`allowPrivateNetwork`, cost budgets).

## 7. User Feedback Summary

- **"Silently lost" is the recurring pain point.** Users report subagent completions ([#44925](https://github.com/openclaw/openclaw/issues/44925)), cron reports ([#45494](https://github.com/openclaw/openclaw/issues/45494)), media attachments ([#41744](https://github.com/openclaw/openclaw/issues/41744)), group sessions ([#45573](https://github.com/openclaw/openclaw/issues/45573)), and outbound replies ([#54531](https://github.com/openclaw/openclaw/issues/54531)) vanishing without errors. This points to a systemic observability gap in delivery and orchestration paths.
- **Maintainer responsiveness is a bottleneck.** The concentration of `needs-maintainer-review` / `needs-product-decision` on P0/P1 issues, plus `clawsweeper-recovery-stuck` on the top crash bugs, suggests decisions are stalling. Strongly-upvoted fixes like [#29387](https://github.com/openclaw/openclaw/issues/29387) (5 👍) and [#37634](https://github.com/openclaw/openclaw/issues/37634) (7 👍) remain untouched.
- **Security/safety defaults are a community priority.** Private-network opt-in ([#39604](https://github.com/openclaw/openclaw/issues/39604), 12 👍), writable sandbox workspaces ([#37634](https://github.com/openclaw/openclaw/issues/37634), 7 👍), and prompt-injection hardening ([#45740](https://github.com/openclaw/openclaw/issues/45740)) all have notable support.
- **Positive signals:** an active contributor ecosystem is landing cross-channel fixes (Slack, QQBot, Telegram, Matrix, Synology Chat), and maintainers are actively reviewing and auto-merging (e.g., [#116584](https://github.com/openclaw/openclaw/pull/116584)).

## 8. Backlog Watch

Items needing maintainer attention:

- **[#91588](https://github.com/openclaw/openclaw/issues/91588)** (P0, created 2026-06-09) — gateway memory leak; oldest P0, `clawsweeper-recovery-stuck`, no fix PR.
- **[#91009](https://github.com/openclaw/openclaw/issues/91009)** (P1, created 2026-06-06) — Codex hook CPU spin/gateway RPC stall; recovery stuck.
- **[#77877](https://github.com/openclaw/openclaw/pull/77877)** (PR, stale since 2026-05-05, XL) — managed outgoing document attachments (xlsx/pdf/docx); waiting on author but central to the web UI/gateway delivery gap.
- **[#50520](https://github.com/openclaw/openclaw/pull/50520)** (PR, stale since 2026-03-19) — strip inbound untrusted metadata before delivery; message-delivery and security-boundary merge risk.
- **[#102956](https://github.com/openclaw/openclaw/pull/102956)** (PR, stale) — configurable Talk idle timeout; needs proof.
- **Stale PRs from 2026-07-09:** [#103028](https://github.com/openclaw/openclaw/pull/103028) (agent CLI stdin/file input), [#103031](https://github.com/openclaw/openclaw/pull/103031) (Skill Workshop docs), [#103062](https://github.com/openclaw/openclaw/pull/103062) (stop sends after cancellation), [#103035](https://github.com/openclaw/openclaw/pull/103035) (QMD memory search hits) — all awaiting review/proof.
- **[#45224](https://github.com/openclaw/openclaw/issues/45224)** (stale, P1) — Playwright assertion crashes gateway; needs live repro.
- **[#45740](https://github.com/openclaw/openclaw/issues/45740)** (P2, diamond lobster) — gh-issues skill prompt injection; security review pending.
- **[#37634](https://github.com/openclaw/openclaw/issues/37634)** (P1, 7 👍) — sandbox `workspaceAccess: "none"` yields read-only isolated workspace; needs product decision.
- **[#42026](https://github.com/openclaw/openclaw/issues/42026)** (stale, P2, 3 👍) — distributed agent runtime RFC; no visible maintainer response.

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report — Personal AI Assistant / Agent Open-Source Ecosystem
**Data window: 2026-07-31 (24h digest)** 

---

## 1. Ecosystem Overview

The personal AI assistant open-source ecosystem is dominated by a "Claw family" of agent platforms clustered around OpenClaw and its derivatives (NanoClaw, PicoClaw, ZeroClaw, ZeptoClaw, TinyClaw, NullClaw, IronClaw, CoPaw/QwenPaw), with independent implementations (Hermes Agent, NanoBot, Moltis, LobsterAI) converging on similar architectural patterns. Total tracked activity is overwhelmingly concentrated in OpenClaw — 500 issues and 500 PRs updated in 24 hours, roughly an order of magnitude above its nearest peer — but the entire ecosystem is wrestling with a common reliability crisis: silent message loss, tool-call leakage into user-facing channels, and memory durability failures. Security hardening has become an urgent cross-cutting theme, with same-window reports of unauthenticated webhooks (ZeroClaw S0, Moltis CWE-306), subprocess credential leakage (ZeptoClaw), and cross-user memory isolation gaps (IronClaw). MCP has emerged as the de facto integration standard, though its auth, session lifecycle, and operational maturity remain unresolved across projects. Notably, no project published a release on 2026-07-31; Hermes shipped v0.19.1 the prior day, and ZeroClaw's v0.8.4 maintenance train is landing its final items.

---

## 2. Activity Comparison

Health score = composite of velocity, merge-close rate, responsiveness to new bugs, backlog cleanliness, and unresolved severity load (1–10).

| Project | Issues updated (closed) | PRs updated (merged/closed / open) | Release status | Health |
|---|---|---|---|---|
| OpenClaw | 500 (27) | 500 (94 / 406) | None | 5/10 |
| Hermes Agent | 50 (1) | 50 (4 / 46) | v0.19.1 (Jul 30) | 7/10 |
| IronClaw | 40 (6) | 50 (24 / ~26) | None; #5598 pending w/ breaking changes | 8/10 |
| ZeroClaw | 17 | 50 (1 / 49) | v0.8.4 train in progress | 8/10 |
| CoPaw (QwenPaw) | 21 (5) | 47 (21 / 26) | None; users awaiting patch | 6/10 |
| NanoBot | 5 (1) | 42 (24 / 18) | None | 8/10 |
| PicoClaw | 7 | 17 (5 / 12) | None | 6/10 |
| NanoClaw | 2 (0) | 15 (4 / 11) | None | 7/10 |
| LobsterAI | 0 (0) | 10 (7 / 3) | None | 7/10 |
| Moltis | 2 (0) | 4 (1 / 3) | None | 5/10 |
| ZeptoClaw | 0 (0) | 1 (0 / 1) | None | 4/10 |
| NullClaw | 0 | 0 | None | N/A (inactive) |
| TinyClaw | 0 | 0 | None | N/A (inactive) |

**Key observations:** OpenClaw's absolute volume is unmatched, but its merge-close rate (94/500 PRs, ~19%) is proportionally lower than smaller peers (NanoBot 57%, LobsterAI 70%, CoPaw 45%, IronClaw 48%). The healthiest projects balance velocity with responsiveness: NanoBot, IronClaw, ZeroClaw, and Hermes all produced same-day fix PRs for newly reported bugs.

---

## 3. OpenClaw's Position

**Advantages vs. peers:**

- **Ecosystem center of gravity.** OpenClaw is the reference implementation for the "Claw" architecture and has spawned at least eight derivative projects. Its issue tracker serves as the ecosystem's early-warning system: gateway memory leak ([#91588](https://github.com/openclaw/openclaw/issues/91588), 350MB→15.5GB RSS), crash-loop suppression ([#115326](https://github.com/openclaw/openclaw/issues/115326)), and subagent completion loss ([#44925](https://github.com/openclaw/openclaw/issues/44925)) are the defining unsolved problems of the category.
- **Broadest integration surface.** No peer approaches its channel coverage — Slack, iMessage, Discord, WhatsApp, Telegram, Matrix, QQBot, Feishu, Synology Chat, WebChat — nor its feature depth (skills, hooks, subagents, cron, memory, Control UI).
- **Strong contributor pipeline.** 94 PRs merged/closed in 24h, with active automerge and security-scanning practices; cross-channel fixes landed simultaneously for Slack, QQBot, Telegram, Matrix, and Synology Chat.

**Technical approach differences:**

- **Stack:** Node.js/TypeScript monolithic gateway, versus Rust modular crates (IronClaw, ZeroClaw, PicoClaw), Python (Hermes, NanoBot), and Electron desktop (LobsterAI). The monolith enables fast feature breadth but concentrates reliability risk — exactly where its P0s live.
- **Configuration surface:** Large and powerful, but a recurring source of user friction; peers (NanoBot, PicoClaw) compete on minimalism.
- **Integration contract volume:** Because OpenClaw supports the most channels and extension points, it pays the highest "channel tax" — most channel-specific fixes land here first, then diffuse to derivatives.

**Community size comparison (24h window):**

| Metric | OpenClaw | Nearest peers |
|---|---|---|
| Issues updated | 500 | Hermes 50, IronClaw 40, ZeroClaw 17 |
| PRs updated | 500 | Hermes/IronClaw/ZeroClaw 50 each |
| Open backlog | 473 issues + 406 PRs | Hermes 49+46; ZeroClaw 49 PRs |
| Merges/closures | 94 | IronClaw 24, NanoBot 24, CoPaw 21 |

**Position summary:** OpenClaw is the reference hub and innovation source, but its operational health (5/10) lags smaller peers due to maintainer-review bottlenecks and an aging P0 backlog. Its "silently lost" message-delivery theme is the ecosystem's most important unsolved reliability gap — and the clearest opportunity for a well-executed challenger.

---

## 4. Shared Technical Focus Areas

Requirements emerging across multiple projects (with evidence):

| Focus area | Projects & specific needs |
|---|---|
| **Reliable delivery / no silent loss** | OpenClaw: subagent completions [#44925](https://github.com/openclaw/openclaw/issues/44925), cron reports [#45494](https://github.com/openclaw/openclaw/issues/45494), outbound replies [#54531](https://github.com/openclaw/openclaw/issues/54531). Hermes: flush-scan cursor data loss [#75170](https://github.com/NousResearch/hermes-agent/pull/75170). NanoBot: `finish_reason='length'` misrouting [#5133](https://github.com/HKUDS/nanobot/issues/5133). ZeroClaw: WeChat error swallowing [#8968](https://github.com/zeroclaw-labs/zeroclaw/pull/8968). CoPaw: memory compression loss [#6555](https://github.com/agentscope-ai/QwenPaw/issues/6555). Need: delivery receipts, retries, and observability at every orchestration stage. |
| **Separating internal reasoning from user-facing output** | OpenClaw [#25592](https://github.com/openclaw/openclaw/issues/25592) (39 comments, P1); NanoBot [#5185](https://github.com/HKUDS/nanobot/issues/5185) (tool-call JSON in replies); PicoClaw [#3279](https://github.com/sipeed/picoclaw/pull/3279) (tool-call format leaking into LLM summaries). Need: hard protocol boundary between agent internals and channel-visible messages. |
| **Streaming / truncation recovery** | Hermes: truncated tool args on `finish_reason` [#74798](https://github.com/NousResearch/hermes-agent/issues/74798); NanoBot [#5136](https://github.com/HKUDS/nanobot/pull/5136); OpenClaw: exec continuation output [#116616](https://github.com/openclaw/openclaw/pull/116616); CoPaw: `spawn_subagent` schema failure [#6588](https://github.com/agentscope-ai/QwenPaw/issues/6588). Need: robust reconstruction of tool calls interrupted mid-stream. |
| **Security / fail-closed defaults** | ZeroClaw: S0 webhook auth gap [#9565](https://github.com/zeroclaw-labs/zeroclaw/issues/9565); Moltis: vault endpoints unauthenticated [#1177](https://github.com/moltis-org/moltis/issues/1177) (CWE-306); ZeptoClaw: subprocess env secret leakage [#645](https://github.com/qhkm/zeptoclaw/pull/645); OpenClaw: `child_process` exec evasions [#116646](https://github.com/openclaw/openclaw/pull/116646); LobsterAI: attachment path traversal [#2389](https://github.com/netease-youdao/LobsterAI/pull/2389); IronClaw: cross-user memory namespaces [#6900](https://github.com/nearai/ironclaw/issues/6900) + shared home dirs [#6866](https://github.com/nearai/ironclaw/issues/6866). Need: auth on all inbound endpoints, secret hygiene in subprocesses, per-user isolation. |
| **Memory durability & lifecycle** | CoPaw: WAL flush+fsync [#6596](https://github.com/agentscope-ai/QwenPaw/pull/6596); OpenClaw: pre-reset memory flush [#45608](https://github.com/openclaw/openclaw/issues/45608); NanoBot: consolidation lock correctness [#4819](https://github.com/HKUDS/nanobot/pull/4819); ZeroClaw: history-vs-long-term-memory RFC [#9048](https://github.com/zeroclaw-labs/zeroclaw/issues/9048); Hermes: memory visualizers [#74900](https://github.com/NousResearch/hermes-agent/pull/74900). Need: crash-safe persistence, inspectability, and clear separation of session history from curated memory. |
| **MCP operational maturity** | PicoClaw: OAuth 2.1 + PKCE for MCP servers [#2546](https://github.com/sipeed/picoclaw/issues/2546)/[#3302](https://github.com/sipeed/picoclaw/issues/3302); CoPaw: stale session reconnect [#6524](https://github.com/agentscope-ai/QwenPaw/issues/6524), tool-name sanitization [#6557](https://github.com/agentscope-ai/QwenPaw/issues/6557); IronClaw: hosted MCP registration [#6930](https://github.com/nearai/ironclaw/pull/6930). Need: auth flows, lifecycle management, naming validation, visible failure reporting. |
| **Channel-adapter long tail** | Every project shipped channel-specific fixes this window: Slack, Telegram, WhatsApp, WeChat, IRC, DingTalk, Matrix, QQBot, Feishu, Synology Chat. Need: shared transport contracts, media handling, message-size limits, idempotent delivery with stable message IDs (NanoClaw [#3153](https://github.com/nanocoai/nanoclaw/issues/3153)). |
| **Multi-provider / local-first config fidelity** | Hermes: `max_output_tokens` silently dropped [#21498](https://github.com/NousResearch/hermes-agent/issues/21498), `.env` interpolation mangling [#75137](https://github.com/NousResearch/hermes-agent/pull/75137); ZeroClaw: Ollama base URL stored in `api_key` [#8953](https://github.com/zeroclaw-labs/zeroclaw/pull/8953); OpenClaw: Ollama thinking preservation [#116584](https://github.com/openclaw/openclaw/pull/116584); ZeroClaw: compact `local_small` profile [#5287](https://github.com/zeroclaw-labs/zeroclaw/issues/5287). Need: faithful config round-trips, provider profiles, compact prompt budgets for small models. |
| **Desktop/Web UI consistency** | NanoBot: Quick/Temporary Chat [#5181](https://github.com/HKUDS/nanobot/pull/5181)/[#5184](https://github.com/HKUDS/nanobot/pull/5184); Hermes: Desktop Projects tab loss [#67368](https://github.com/NousResearch/hermes-agent/issues/67368), session isolation [#65601](https://github.com/NousResearch/hermes-agent/issues/65601); CoPaw: workspace artifact access [#6083](https://github.com/agentscope-ai/QwenPaw/issues/6083); IronClaw: `webui_v2` redesign [#6901](https://github.com/nearai/ironclaw/pull/6901); LobsterAI: side chat [#2397](https://github.com/netease-youdao/LobsterAI/pull/2397). Need: stable multi-pane state, one-click artifact access, session isolation. |

---

## 5. Differentiation Analysis

| Project | Stack | Target user / positioning | Distinctive focus |
|---|---|---|---|
| **OpenClaw** | Node.js/TS | General-purpose self-hosted assistants; the default reference | Breadth: channels, skills, hooks, subagents, Control UI; the ecosystem's integration leader |
| **Hermes Agent** | Python | Power developers; Desktop + TUI + gateway | Developer UX, memory inspection (holographic TUI), plugin hooks; ~1,000-PR release cycles |
| **NanoBot** | Python | Lightweight community chat assistants | WebUI polish, WhatsApp/Telegram, quick iteration; high merge efficiency |
| **PicoClaw** | Go | Edge/embedded (Sipeed); low-memory devices | Single native binary, AWS Bedrock prompt caching, minimal footprint |
| **NanoClaw** | Container-centric | Reproducible deployers; NAT/firewall operators | Image hardening (781MB→611MB), skill registry v2 gates, opt-in CLI surface, GitHub polling mode |
| **IronClaw** | Rust | Enterprise multi-user deployments (NEAR ecosystem) | Target-crate architecture program, SSO/isolation E2E, verified/IronHub supply chain |
| **ZeroClaw** | Rust | Governance-minded, local-first, observability-driven | RFC governance, SBOM/attestation consolidation, OpenAI-compat adapter, OTel GenAI correlation |
| **CoPaw (QwenPaw)** | Qwen ecosystem | Desktop users, notably Chinese Windows | Computer Use GUI automation, bundled Python runtime, memory WAL durability |
| **LobsterAI** | Electron desktop | Chinese enterprise desktop users | Cowork side-chat, account-scoped enterprise isolation, NSIS installer reliability |
| **Moltis** | Lightweight server | Privacy/security-conscious operators | Vault-based secrets, operators-list access control, OTLP/Langfuse instrumentation |
| **ZeptoClaw** | Rust | Minimal / security-focused | Subprocess secret scrubbing, process-tree reaping, Docker runtime hygiene |

**Architecture split:** The ecosystem is bifurcating — Rust/Go implementations (IronClaw, ZeroClaw, PicoClaw, ZeptoClaw) compete on memory footprint, modularity, and supply-chain discipline; Node/Python/Electron implementations (OpenClaw, Hermes, NanoBot, LobsterAI, CoPaw) compete on feature breadth and developer velocity. The Go/Rust cluster is where enterprise and edge requirements are being solved; the Node/Python cluster is where the UX and channel surface is being defined.

---

## 6. Community Momentum & Maturity

**Tier 1 — Scale leaders, high momentum:**

- **OpenClaw** — highest absolute velocity (94 merges/day) but constrained by maintainer-review bottleneck; P0s carry `needs-maintainer-review` / `recovery-stuck` labels.
- **Hermes Agent** — stable release train (v0.19.1 rolling up ~1,000 PRs), active same-day fix PRs for new bugs; v0.19.2 patch likely soon.
- **ZeroClaw** — release train landing (v0.8.4), same-day S0/S2 fix PRs from maintainers, mature RFC process; most responsive governance in the ecosystem.
- **IronClaw** — deliberate, well-structured progress: 24 merges/day, architecture program running as a coordinated batch (#6919–#6927), epics being sliced into finishable subsets.

**Tier 2 — Actively iterating:**

- **NanoBot** — highest merge efficiency (57%), quick bug turnaround; long-open conflict PRs are the main drag.
- **CoPaw** — high activity (21 merges) but v2.0 regression risk; the ~2s per-reply overhead issue ([#6307](https://github.com/agentscope-ai/QwenPaw/issues/6307)) is the community's biggest dissatisfaction driver.
- **LobsterAI** — healthy feature cadence (7/10 PRs merged); zero issue inflow suggests feedback flows through PRs; two 4-month-stale PRs need review/closure.
- **NanoClaw** — focused, fast merges (image hardening, opt-in tooling); two high-severity bugs unfixed.
- **PicoClaw** — steady but smaller; Bedrock caching landed; stale PRs and dependency bumps accumulating.

**Tier 3 — Quiet / dormant:**

- **Moltis** — low volume with a critical security bug awaiting triage ([#1177](https://github.com/moltis-org/moltis/issues/1177)).
- **ZeptoClaw** — one security PR in flight; otherwise inactive.
- **NullClaw, TinyClaw** — no activity in window.

---

## 7. Trend Signals

1. **Reliability is the #1 competitive differentiator.** The loudest complaints across OpenClaw, Hermes, NanoBot, CoPaw, and ZeroClaw are "silently lost" items — replies, subagent completions, cron reports, media, memory state. **Value:** instrument delivery with receipts, retries, and failure notifications *before* adding features.

2. **Internal reasoning must be protocol-separated from user-facing output.** Tool-call leakage ([OpenClaw #25592](https://github.com/openclaw/openclaw/issues/25592), 39 comments; [NanoBot #5185](https://github.com/HKUDS/nanobot/issues/5185)) is a privacy and correctness issue. **Value:** design a hard boundary between agent narration and published messages at the architecture level.

3. **Fail-closed security is the new baseline.** Unauthenticated webhooks (ZeroClaw S0), missing vault auth (Moltis), subprocess env inheritance (ZeptoClaw), and cross-user namespace leaks (IronClaw) all surfaced in one week. **Value:** default-deny on inbound endpoints, scrub subprocess environments, and isolate per-user namespaces from day one.

4. **MCP is winning but operationally immature.** OAuth provisioning (PicoClaw), session reconnection (CoPaw), tool-name validation against strict LLM APIs (CoPaw), and hosted registration (IronClaw) are unsolved. **Value:** MCP server lifecycle management (auth, reconnect, health reporting) is a clear market gap.

5. **Memory is becoming a system-of-record.** WAL durability (CoPaw), consolidation lock correctness (NanoBot), pre-reset flush semantics (OpenClaw), and history-vs-curated-memory separation RFCs (ZeroClaw) indicate memory must survive crashes, be inspectable, and be separable from session history. **Value:** treat memory as a durable, queryable store — not an append-only log.

6. **Channel adapters are a universal tax.** Every project ships channel-specific fixes weekly; message-ID round-tripping (NanoClaw) and media delivery contracts (OpenClaw, IronClaw) are recurring failure modes. **Value:** a contract-tested channel abstraction layer with stable delivery IDs would save the ecosystem significant engineering.

7. **Maintainer review is the gating constraint.** OpenClaw's `needs-maintainer-review` pileup, NanoBot's conflict PRs, ZeroClaw's 12 `needs-author-action` items, and 4-month-stale PRs in LobsterAI/PicoClaw show contribution supply exceeds review capacity. **Value:** invest in CI automation, automerge policies, and explicit RFC triage; the projects that solve this will compound community contributions.

8. **Multi-provider and local-first is mainstream, not niche.** Users run custom OpenAI-compatible endpoints, Groq, Kimi, Ollama, Qwen, and Bedrock; silent config normalization and provider-profile gaps (Hermes, ZeroClaw, CoPaw) erode trust. **Value:** ensure configuration round-trips faithfully and add explicit provider profiles instead of fallbacks.

9. **Desktop/Web UX is the next battleground.** Quick Chat (NanoBot), agent-activity redesign (IronClaw), workspace artifact access (CoPaw), and Desktop session isolation (Hermes) show that once reliability stabilizes, the interface layer will differentiate platforms. **Value:** session isolation and artifact access are the highest-leverage UX investments.

10. **Release engineering is a trust signal.** Hermes rolled up ~1,000 PRs into a stable patch; ZeroClaw consolidated three signing systems into single attestation provenance; IronClaw's pending release carries breaking changes. **Value:** adopt single-provenance signing (SBOM + attestations) and clear migration notes early — adopters are increasingly evaluating supply-chain posture.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-07-31

Data source: [github.com/HKUDS/nanobot](https://github.com/HKUDS/nanobot)

## 1. Today's Overview

NanoBot remains highly active: 5 issues were updated in the last 24 hours (4 open/active, 1 closed) and 42 PRs were touched, with 24 merged/closed and 18 still open. No new releases were published during this window. Development is concentrated on WebUI improvements, agent/tool-call handling, memory/consolidation robustness, Telegram reliability, and CI speed/stability. The project shows strong contributor momentum, but several long-open PRs remain in conflict and need maintainer attention. Overall project health looks good, with quick follow-ups on recent bug reports such as timezone validation and `finish_reason='length'` handling.

## 2. Releases

No new releases were published in the past 24 hours, so there are no release notes, breaking changes, or migration steps to report.

## 3. Project Progress

Closed/merged PRs in this window include:

- **[#5145** — `fix(ci): stabilize and speed up CI`](https://github.com/HKUDS/nanobot/pull/5145): Replaces timing-dependent tests and batches dependency installs to make CI more reliable and faster.
- **[#5181** — `feat(webui): add persistent Quick Chat`](https://github.com/HKUDS/nanobot/pull/5181): Adds a dedicated Quick Chat entry backed by a persistent WebSocket session, kept separate from the normal topic list.
- **[#5182** — `refactor(webui): reuse one sidebar selection highlight`](https://github.com/HKUDS/nanobot/pull/5182): Unifies sidebar selection behavior across sessions, settings, and other navigation entries.
- **[#5172** — `feat: preserve Responses reasoning state and compact context`](https://github.com/HKUDS/nanobot/pull/5172): Adopts OpenAI Responses API reasoning-state preservation and context compaction, inspired by the ARC-AGI-3 report.
- **[#5136** — `fix(agent): route finish_reason='length' with blank content to length recovery`](https://github.com/HKUDS/nanobot/pull/5136): Fixes [issue #5133](https://github.com/HKUDS/nanobot/issues/5133), ensuring tool-call outputs aren't dropped when the model exceeds its token budget.

An open follow-up WebUI PR, [#5184](https://github.com/HKUDS/nanobot/pull/5184), builds on the Quick Chat work by adding Temporary Chat with in-memory-only history.

## 4. Community Hot Topics

The most-discussed issue in the last 24 hours is:

- **[#5149 — `[bug] no audio ?`](https://github.com/HKUDS/nanobot/issues/5149)** (3 comments): Nanobot receives audio messages on WhatsApp but fails to send them. Users expect full multimodal behavior, not just input side support.

Also active:

- **[#5185 — `[bug] Nanobot returning tool calls code in responses`](https://github.com/HKUDS/nanobot/issues/5185)** (1 comment): The model's tool-call JSON/code began appearing directly in chat responses. This is a high-visibility correctness issue because it affects the core assistant experience.

These issues point to two underlying user needs: reliable WhatsApp media output and clean separation between internal tool-call mechanics and user-facing answers.

## 5. Bugs & Stability

Ranked by potential impact:

1. **Tool-call code leaking into responses** — [#5185](https://github.com/HKUDS/nanobot/issues/5185)  
   User-visible corruption of assistant replies. No obvious fix PR was listed yet in the top recent PRs.

2. **WhatsApp audio sending broken** — [#5149](https://github.com/HKUDS/nanobot/issues/5149)  
   Channel-specific feature regression: receiving works, sending audio fails. No linked fix PR was visible.

3. **Nanobot fails to start in Termux due to missing timezone database** — [#5187](https://github.com/HKUDS/nanobot/issues/5187)  
   Blocks Termux users entirely. A fix PR is already proposed: [#5189](https://github.com/HKUDS/nanobot/pull/5189) installs `tzdata` as a fallback and preserves strict timezone validation.

4. **Closed recent bug: `finish_reason='length'` with tool calls misrouted** — [#5133](https://github.com/HKUDS/nanobot/issues/5133)  
   Fixed by [#5136](https://github.com/HKUDS/nanobot/pull/5136), now closed.

Additional stability-focused PRs in the backlog/in-flight:

- [#5153](https://github.com/HKUDS/nanobot/pull/5153) — handle non-string timestamps and missing roles in memory raw archiving.
- [#5156](https://github.com/HKUDS/nanobot/pull/5156) — recover from silently stalled Telegram polling after transient network issues.
- [#5183](https://github.com/HKUDS/nanobot/pull/5183) — preserve cron manual-run completion state.
- [#4819](https://github.com/HKUDS/nanobot/pull/4819) — replace weak-reference-based memory consolidation locks to avoid duplicate concurrent consolidations.
- [#4021](https://github.com/HKUDS/nanobot/pull/4021) — deduplicate reasoning items before sending to the Responses API.

## 6. Feature Requests & Roadmap Signals

Several open PRs indicate likely roadmap direction:

- **SQLite session storage** — [#5173](https://github.com/HKUDS/nanobot/pull/5173): Migrates session storage from JSONL to SQLite, with import from existing JSONL and rollback backups.
- **WebUI Quick Chat and Temporary Chat** — [#5184](https://github.com/HKUDS/nanobot/pull/5184): Persistent Quick Chat plus ephemeral Temporary Chat mode.
- **Custom Telegram Bot API support** — [#4919](https://github.com/HKUDS/nanobot/pull/4919): Allows self-hosted Bot API servers or enterprise gateways via `api_base` and extra headers.
- **Heartbeat session isolation** — [#4551](https://github.com/HKUDS/nanobot/pull/4551): Adds `isolated_session` config so heartbeat can share a normal channel session.
- **Subagent model presets** — [#4291](https://github.com/HKUDS/nanobot/pull/4291): Lets spawned subagents run on configurable model presets.
- **Session management CLI** — [#1565](https://github.com/HKUDS/nanobot/pull/1565): Export, import, search, and stats commands for sessions.
- **Skill status command** — [#1319](https://github.com/HKUDS/nanobot/pull/1319): Helps users diagnose why skills are unavailable.
- **Skills.sh well-known source support** — [#5186](https://github.com/HKUDS/nanobot/pull/5186): Keeps and correctly forwards skills from well-known DNS sources.

Given the high number of closed WebUI and agent-related PRs, the next release will likely include Quick Chat, improved Responses API reasoning preservation, and the `finish_reason='length'` recovery fix.

## 7. User Feedback Summary

Users are actively testing Nanobot in diverse environments and reporting concrete issues:

- WhatsApp users need **two-way audio support**, not just receive-side handling ([#5149](https://github.com/HKUDS/nanobot/issues/5149)).
- Core conversation quality is at risk when **tool-call code appears in plain responses** ([#5185](https://github.com/HKUDS/nanobot/issues/5185)).
- Mobile/Termux users expect the tool to work on minimal Linux systems, but **timezone configuration currently blocks startup** ([#5187](https://github.com/HKUDS/nanobot/issues/5187)).
- A long-running report ([#3106](https://github.com/HKUDS/nanobot/issues/3106)) describes scheduled-task failures with GPT models while other models work, suggesting provider-specific handling gaps remain.

On the positive side, recent bug reports have been fixed quickly — especially the `finish_reason='length'` issue — and community contributors are actively submitting targeted stability patches.

## 8. Backlog Watch

Several older PRs remain open with `conflict` labels and need maintainer attention:

- [#1656](https://github.com/HKUDS/nanobot/pull/1656) — `fix(validation): handle None value in string schema validation` (open since March 2026).
- [#1565](https://github.com/HKUDS/nanobot/pull/1565) — `feat(session): add session export, import, search and stats commands` (open since March 2026).
- [#1319](https://github.com/HKUDS/nanobot/pull/1319) — `feat: add skill status command` (open since February 2026).
- [#4021](https://github.com/HKUDS/nanobot/pull/4021) — `fix(codex): dedup reasoning items before send, retry on duplicate-item 400` (open since May 2026).
- [#4551](https://github.com/HKUDS/nanobot/pull/4551) — `feat(heartbeat): add isolated_session config` (open since June 2026).
- [#4819](https://github.com/HKUDS/nanobot/pull/4819) — `fix(memory): replace WeakValueDictionary with plain dict for consolidation locks` (open since July 2026).

These PRs address valuable user-facing features and important stability fixes, so rebasing/merging them would likely reduce ongoing contributor friction and close several long-requested gaps.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-07-31

## 1. Today's Overview

Hermes Agent is in a high-activity maintenance cycle: 50 issues and 50 PRs were updated in the last 24 hours, with 49 issues still open and 1 closed, plus 46 PRs open and 4 merged/closed. The project shipped a new stable patch tag, Hermes Agent v0.19.1 (v2026.7.30), which rolls up ~1,000+ PRs merged since v0.19.0. The tracker shows a healthy mix of bug reports, feature requests, and fast-follow fix PRs, though several P1/P2 regressions remain around Docker startup, streaming tool-call recovery, and Desktop UI state. Triage activity is visible through sweeper labels and same-day fix PRs for newly reported bugs, indicating an actively maintained project.

## 2. Releases

**Hermes Agent v0.19.1 (v2026.7.30)** — [GitHub Release](https://github.com/NousResearch/hermes-agent/releases/tag/v2026.7.30)

- Patch release tagged on July 30, 2026.
- Rolls up ~1,000+ PRs merged since v0.19.0 into a stable release for Docker images, hosted deployments, and fresh installs.
- No explicit breaking changes or migration notes are included in the release notes.

## 3. Project Progress

- **4 PRs were merged/closed in the last 24 hours**, though individual merged-PR titles are not included in the visible extract.
- **Closed issue:** [#75026 — feat(gateway): add a sessionless registered-plugin command RPC](https://github.com/NousResearch/hermes-agent/issues/75026) was closed, suggesting progress on bounded plugin command dispatch for authenticated dashboards.
- **Notable open PRs under active review:**
  - [#75168 — fix(update): remove stale .git/shallow.lock before fetch](https://github.com/NousResearch/hermes-agent/pull/75168) — fixes interrupted-update breakage (#75133).
  - [#75176 — fix(streaming): recover truncated tool args when finish_reason is set](https://github.com/NousResearch/hermes-agent/pull/75176) — fixes lost `write_file` / `terminal` calls (#74798).
  - [#74935 — fix(update): preserve local commits when pull --ff-only fails](https://github.com/NousResearch/hermes-agent/pull/74935) — addresses destructive `git reset --hard` fallback (#74885).
  - [#75170 — fix(agent): invalidate flush-scan cursor when finalizer pops db marker](https://github.com/NousResearch/hermes-agent/pull/75170) — P1 fix for missing final response in durable transcript.
  - [#75137 — fix(config): load .env with interpolate=False so $-values round-trip](https://github.com/NousResearch/hermes-agent/pull/75137) — prevents credential mangling from dotenv interpolation.
  - [#75169 — fix(deps): upgrade vulnerable runtime pins](https://github.com/NousResearch/hermes-agent/pull/75169) — security remediation for MCP, Pillow, httplib2, pyasn1, pydantic-settings, Pygments.
  - [#74900 — feat(memory): add /mem slash command and holographic memory TUI visualizers](https://github.com/NousResearch/hermes-agent/pull/74900) — new memory inspection UX.
  - [#75172 — feat(api-server): expose session rewind over HTTP](https://github.com/NousResearch/hermes-agent/pull/75172) — enables persisted-session truncation for HTTP-driven agents.

## 4. Community Hot Topics

Most-discussed issues in the last 24 hours, based on comment count:

- [#21498 — Custom provider max_output_tokens silently dropped by config.py normalizer](https://github.com/NousResearch/hermes-agent/issues/21498) — 9 comments, P2. Users need custom provider settings to round-trip faithfully instead of defaulting to 2048 tokens.
- [#67368 — Desktop sidepanel PROJECTS tab flashes then disappears](https://github.com/NousResearch/hermes-agent/issues/67368) — 7 comments, P2. Desktop users need stable multi-pane session/project state.
- [#54572 — patch tool can edit wrong region when old_string is not exact](https://github.com/NousResearch/hermes-agent/issues/54572) — 5 comments, P2. Core reliability concern: the patch tool must not silently modify the wrong code region.
- [#13265 — Skills system five architectural defects](https://github.com/NousResearch/hermes-agent/issues/13265) — 4 comments, 7 👍. Strong community interest in skill quality control, validation, and lifecycle management.
- [#48731 — /model switch prefers native provider over current reseller](https://github.com/NousResearch/hermes-agent/issues/48731) — 4 comments, 1 👍. Provider routing should respect the user's currently active provider.

The underlying theme is reliability and transparency: users are most vocal about silent configuration drops, UI state loss, incorrect tool edits, and provider-routing surprises.

## 5. Bugs & Stability

Ranked by severity:

- **P1 — Docker image fails to start after update:** [#38349 — can't start docker image after recent update](https://github.com/NousResearch/hermes-agent/issues/38349). Podman users report s6 init cannot take PID 1. No visible fix PR in the extract.
- **P1 — Flush-scan cursor bug can lose the final delivered response:** [#75170 fix PR](https://github.com/NousResearch/hermes-agent/pull/75170) is open, addressing a durable-transcript data-loss path.
- **P2 — Truncated tool args dropped when provider sets finish_reason:** [#74798](https://github.com/NousResearch/hermes-agent/issues/74798), with fix PR [#75176](https://github.com/NousResearch/hermes-agent/pull/75176) open.
- **P2 — Streaming receives 0 chunks from custom OpenAI-compatible endpoints:** [#75152](https://github.com/NousResearch/hermes-agent/issues/75152). Newly reported on v0.19.1; no fix PR yet.
- **P2 — Stale `.git/shallow.lock` blocks updates after interrupted update:** [#75133](https://github.com/NousResearch/hermes-agent/issues/75133), with fix PR [#75168](https://github.com/NousResearch/hermes-agent/pull/75168) open.
- **P2 — TUI clipboard probe loop causes macOS privacy prompt storm and infinite image auto-attach:** [#75150](https://github.com/NousResearch/hermes-agent/issues/75150). Regression of #23984, still present in v0.19.1.
- **P2 — Custom provider max_output_tokens silently dropped:** [#21498](https://github.com/NousResearch/hermes-agent/issues/21498). Long-standing config-normalizer issue.
- **P2 — patch tool edits wrong region on non-exact old_string match:** [#54572](https://github.com/NousResearch/hermes-agent/issues/54572).
- **P2 — Desktop Projects sidebar disappears after re-render:** [#67368](https://github.com/NousResearch/hermes-agent/issues/67368).
- **P2 — Skill-proposal queue grows unbounded and self-invalidates:** [#75130](https://github.com/NousResearch/hermes-agent/issues/75130). 357 proposals in 8 days, 21% dead.
- **P2 — Quota exhaustion misreported as "Provider authentication failed":** [#74879](https://github.com/NousResearch/hermes-agent/issues/74879). Auth pattern is matched before rate-limit pattern.
- **P2 — Groq rejects synthesized `extra_body.think` / `reasoning` fields:** [#75089](https://github.com/NousResearch/hermes-agent/issues/75089). No Groq provider profile exists, so it falls through to Ollama-specific custom profile.
- **P2 — Kimi requests impersonate Claude Code via hardcoded User-Agent:** [#74739](https://github.com/NousResearch/hermes-agent/issues/74739).
- **P2 — Desktop new session reuses existing agent context:** [#65601](https://github.com/NousResearch/hermes-agent/issues/65601) — no session isolation.
- **P2 — Platform plugins silently disabled after migration to bundled plugins:** [#54009](https://github.com/NousResearch/hermes-agent/issues/54009).
- **P3 — Unbounded response-body reads in Mattermost helpers and image-generation providers:** [#54753](https://github.com/NousResearch/hermes-agent/issues/54753), [#55128](https://github.com/NousResearch/hermes-agent/issues/55128).

## 6. Feature Requests & Roadmap Signals

Active feature asks and likely roadmap candidates:

- **Account-wide GitHub pull requests dashboard:** [#62352 — feat(desktop): add an account-wide GitHub PR dashboard](https://github.com/NousResearch/hermes-agent/issues/62352). Strong fit for the Desktop app's existing git workflow.
- **Telegram live-location background handling:** [#49806 — Support background handling for Telegram live location updates](https://github.com/NousResearch/hermes-agent/issues/49806). Would prevent repeated agent responses to location pings.
- **Per-credential `base_url` override for credential pools:** [#54011 — Credential pool: support per-credential base_url override](https://github.com/NousResearch/hermes-agent/issues/54011). Needed for multi-account same-provider rotation like Cloudflare Workers AI.
- **HTTP hot-reload interface for MCP and Skills:** [#52264 — Add HTTP-callable MCP and Skills hot-reload management API](https://github.com/NousResearch/hermes-agent/issues/52264). Important for external services that modify Hermes config dynamically.
- **Switch working directory during a session:** [#50195 — Add ability to switch working directory during session](https://github.com/NousResearch/hermes-agent/issues/50195). Common multi-project workflow gap.
- **Plugin hook for `post_assistant_turn` / `on_response_sent`:** [#26109](https://github.com/NousResearch/hermes-agent/issues/26109). Needed for downstream logging and bot-to-bot coordination.

**Prediction:** The active P2 fix PRs for streaming, update safety, and config handling are likely to land in a v0.19.2 patch. Feature PRs [#74900](https://github.com/NousResearch/hermes-agent/pull/74900) (memory visualizers) and [#75172](https://github.com/NousResearch/hermes-agent/pull/75172) (HTTP session rewind) are relatively self-contained and could appear in the next minor release.

## 7. User Feedback Summary

- **Configuration fidelity is a major pain point:** users report silent drops of `max_output_tokens`, `.env` values with `${...}` being mangled by interpolation, and provider profiles emitting unsupported fields.
- **Updates are risky:** Docker/Podman startup failure, stale `.git/shallow.lock`, and destructive `git reset --hard` fallback all erode trust in the update path.
- **Agent reliability concerns continue:** truncated streaming tool args, wrong-region patch edits, and lost final transcript messages are high-impact issues.
- **Desktop UX is under pressure:** Projects tab disappearing, new sessions reusing old context, and inability to select chat text on touch devices are recurring complaints.
- **Cloud providers are being used in unexpected ways:** Groq, Kimi, Cloudflare Workers AI, and custom OpenAI-compatible endpoints are surfacing integration gaps faster than provider profiles are being added.
- **Satisfaction signal:** the v0.19.1 stable rollup is a positive milestone, but users express frustration that some previously reported regressions (e.g., clipboard probe loop) are still present in the patch release.

## 8. Backlog Watch

Older open items that likely need maintainer attention:

- [#13265 — Skills system five architectural defects](https://github.com/NousResearch/hermes-agent/issues/13265) — opened 2026-04-21, P3, 7 👍. High community interest but still open after 3+ months.
- [#16979 — QQ Bot: file attachments silently dropped when download fails](https://github.com/NousResearch/hermes-agent/issues/16979) — opened 2026-04-28, P2. Silent data loss in a supported gateway platform.
- [#21498 — Custom provider max_output_tokens silently dropped](https://github.com/NousResearch/hermes-agent/issues/21498) — opened 2026-05-07, P2, 9 comments. Config correctness issue with no visible resolution.
- [#26109 — post_assistant_turn / on_response_sent plugin hook](https://github.com/NousResearch/hermes-agent/issues/26109) — opened 2026-05-15, P3. Waiting for a plugin-hook roadmap decision.
- [#34750 — docs: plan state event archive](https://github.com/NousResearch/hermes-agent/pull/34750) — opened 2026-05-29, P3 docs PR. Long-running design/planning PR for SessionDB decoupling.
- [#54753 — Mattermost REST helpers read response bodies without a cap](https://github.com/NousResearch/hermes-agent/issues/54753) and [#55128 — Image-generation providers buffer unbounded JSON responses](https://github.com/NousResearch/hermes-agent/issues/55128) — both opened 2026-06-29, P3. Unbounded resource consumption issues now over a month old.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

## PicoClaw Project Digest — 2026-07-31

### 1. Today's Overview

Activity over the last 24 hours was moderate but steady: 7 issues and 17 PRs were updated, with 4 issues still open/active, 12 PRs open, and 5 PRs closed/merged. No new releases were published in this window. The project is seeing a healthy mix of community feature work, bug fixes, and routine dependency bumps, though a number of stale PRs and issues are accumulating. Recurring user demand centers on OAuth/MCP support, session management in chat channels, and improved IRC message handling.

### 2. Releases

No new releases were published in this window.

### 3. Project Progress

Five PRs were closed/merged during the reporting period:

- **#3163** — `feat(bedrock): leverage Converse prompt caching via cache points` — a significant cost/performance feature for AWS Bedrock users.  
  [PR #3163](https://github.com/sipeed/picoclaw/pull/3163)
- **#3290** — `build(deps): bump github.com/aws/aws-sdk-go-v2/config from 1.32.25 to 1.32.31`  
  [PR #3290](https://github.com/sipeed/picoclaw/pull/3290)
- **#3288** — `build(deps): bump github.com/aws/aws-sdk-go-v2/service/bedrockruntime from 1.53.3 to 1.56.0`  
  [PR #3288](https://github.com/sipeed/picoclaw/pull/3288)
- **#3263** — `build(deps): bump actions/setup-node from 6 to 7`  
  [PR #3263](https://github.com/sipeed/picoclaw/pull/3263)
- **#3262** — `build(deps): bump actions/setup-go from 6 to 7`  
  [PR #3262](https://github.com/sipeed/picoclaw/pull/3262)

Several issues were also closed, including the OAuth/MCP feature request **#2546**, the process-hook bug **#3258**, and the stateless gateway mode request **#3257**.

### 4. Community Hot Topics

The most-discussed items centered on authentication and chat-channel usability:

- **#2546 — OAuth 2.1 + PKCE for MCP servers** (closed, 6 comments) — Users want a dashboard-based flow for non-technical users to add OAuth-protected MCP servers, similar to Claude.ai's "Add connector."  
  [Issue #2546](https://github.com/sipeed/picoclaw/issues/2546)
- **#3287 — Better support for long messages in IRC** (open, 2 comments) — PicoClaw should treat IRCv3 long messages as one cohesive message instead of fragments.  
  [Issue #3287](https://github.com/sipeed/picoclaw/issues/3287)
- **#3258 — Process Hook `before_tool` modification broken** (closed, 2 comments) — A deserialization defect caused decision fields to be discarded and arguments misparsed.  
  [Issue #3258](https://github.com/sipeed/picoclaw/issues/3258)
- **#3257 — Stateless/no-history mode for gateway sessions** (closed, 2 comments) — Users want an easy way to use fresh gateway sessions without channel-derived session keys.  
  [Issue #3257](https://github.com/sipeed/picoclaw/issues/3257)

Underlying needs: easier external-service onboarding, session isolation, and better handling of protocol-specific message constraints.

### 5. Bugs & Stability

- **#3308 — Code review: concurrency hazards, goroutine leaks, and memory/speed optimizations in SeaHorse, Channel Manager, and Hooks** (open) — A broad stability review highlighting potential concurrency issues. No fix PR has been linked yet.  
  [Issue #3308](https://github.com/sipeed/picoclaw/issues/3308)
- **#3258 — Process Hook `before_tool` modification not working** (closed) — The root cause was a deserialization defect; it is now resolved.  
  [Issue #3258](https://github.com/sipeed/picoclaw/issues/3258)
- **#3279 — fix(seahorse): prevent tool-call format leakage into LLM summaries** (open PR) — Addresses a bug where tool-call format leaks into user-facing LLM messages through `partsToReadableContent`. Fix exists but is still open.  
  [PR #3279](https://github.com/sipeed/picoclaw/pull/3279)
- **#3283 — fix(dingtalk): support picture/image message inbound** (open PR) — Adds missing image-message support for DingTalk with token caching and graceful degradation.  
  [PR #3283](https://github.com/sipeed/picoclaw/pull/3283)

Severity ranking: the concurrency/stability review is the highest-priority open item; the tool-call leakage and DingTalk image bugs are targeted by existing PRs.

### 6. Feature Requests & Roadmap Signals

- **OAuth 2.1 for MCP servers** — Strong recurring demand: **#2546** was closed, but **#3302** re-opens the request. Expect continued discussion and likely roadmap alignment.  
  [Issue #3302](https://github.com/sipeed/picoclaw/issues/3302)
- **Session list/switch for Telegram and other chat channels** — **#3307** asks for Telegram-equivalent session management to match the Web UI.  
  [Issue #3307](https://github.com/sipeed/picoclaw/issues/3307)
- **Better long-message handling in IRC** — **#3287** suggests treating IRCv3-split messages as one cohesive message.  
  [Issue #3287](https://github.com/sipeed/picoclaw/issues/3287)
- **Stateless gateway sessions** — **#3257** was closed, but the use case may resurface if no alternative is documented.  
  [Issue #3257](https://github.com/sipeed/picoclaw/issues/3257)

These items could plausibly appear in a next minor release, especially OAuth support and session-completing commands for chat channels.

### 7. User Feedback Summary

Real user pain points from the latest activity:

- **Non-technical users** need a simple dashboard flow to add OAuth-protected MCP servers without shell or Node.js access.
- **Telegram users** cannot list, switch, or delete conversation sessions, which is a significant usability gap versus the Web UI.
- **IRC users** are affected by message fragmentation when messages exceed the 512-byte limit.
- **Gateway users** want true stateless sessions without deriving keys from channel/chat IDs.
- **Developers** are concerned about concurrency safety and resource leaks in core components, but also acknowledge PicoClaw's strong positioning as a low-memory, native Go AI assistant.

Overall sentiment appears constructive: contributors are actively submitting fixes and enhancements, and maintainers are closing several long-standing issues.

### 8. Backlog Watch

Several items have been open for a while with no visible maintainer response:

- **#3200 — feat(models): add configurable default fallback chain** (open since July 1) — A user-facing feature for the Web UI model page, still unmerged.  
  [PR #3200](https://github.com/sipeed/picoclaw/pull/3200)
- **#3222 — refactor(deltachat): cleanup implementation, documentation -200LOC** (open since July 3, stale) — Large refactor touching legacy features and secrets handling.  
  [PR #3222](https://github.com/sipeed/picoclaw/pull/3222)
- **#3271 — chore(providers): update default model names to 2026-07 latest** (open since July 20) — Important for keeping provider defaults current, especially OpenAI/Anthropic model IDs.  
  [PR #3271](https://github.com/sipeed/picoclaw/pull/3271)
- **#3291 / #3289 — dependency bumps for copilot-sdk and pion/rtp** (stale) — Low-risk updates that should be reviewed to keep the dependency tree healthy.  
  [PR #3291](https://github.com/sipeed/picoclaw/pull/3291) · [PR #3289](https://github.com/sipeed/picoclaw/pull/3289)

These items deserve maintainer attention to prevent the backlog from growing further.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-07-31

## 1. Today's Overview

NanoClaw saw a busy 24-hour window dominated by core infrastructure and agent-runner fixes. Two open issues were updated, both currently active, while 15 PRs received activity — 11 still open and 4 closed/merged. No new releases were published. The closed PRs show a clear focus on image hardening, smaller container footprints, and compatibility fixes. Overall, the project appears healthy, with maintainers actively reviewing and merging stability work, though two newly reported bugs remain unfixed.

## 2. Releases

No new releases were published in this window.

## 3. Project Progress

Four PRs were closed/merged in the last 24 hours:

- **[#3160 — versions: repin the agent image to hardened-2026-07-30](https://github.com/nanocoai/nanoclaw/pull/3160)**  
  Updated the agent image to a hardened build, reducing from 781 MB / 18 layers to 611 MB / 8 layers. The change notes that pull efficiency is gated by the largest single layer, so the layer-structure improvement matters beyond raw size.

- **[#3159 — container: make the Vercel CLI opt-in rather than baked into every image](https://github.com/nanocoai/nanoclaw/pull/3159)**  
  Removed Vercel CLI from the default container tool set. It is now installed by the `/add-vercel` skill, reducing image bloat and removing an unnecessary credential surface by default.

- **[#3122 — fix(opencode): main compatibility, custom-endpoint transport, memory parity](https://github.com/nanocoai/nanoclaw/pull/3122)**  
  Closed after fixes addressing OpenCode compatibility with main, custom endpoint transport, and memory behavior parity.

- **[#2682 — fix(update-skills): skip v1-only skill branches](https://github.com/nanocoai/nanoclaw/pull/2682)**  
  Added a v2 compatibility check when scanning `upstream/skill/*` branches. Branches with `package.json` versions starting with `1.` are skipped and clearly reported instead of being offered for installation.

## 4. Community Hot Topics

Explicit comment/reaction data is limited in this snapshot, so attention is inferred from recency, issue priority, and PR activity.

- **[Issue #3153 — add_reaction / edit_message on inbound messages always fail: agent-group suffix not stripped from platform message id](https://github.com/nanocoai/nanoclaw/issues/3153)**  
  The only item with an explicit comment count. This affects core interactive behavior: messages received through agent groups carry a suffix that is not removed before calling the platform API, so Slack returns `message_not_found` and every reaction/edit fails after retries. The underlying need is reliable round-trip message identity handling.

- **[Issue #3155 — registry branches have drifted from main; provider payloads fail their own install gates](https://github.com/nanocoai/nanoclaw/issues/3155)**  
  Highlights a reproducibility problem: a skill installed from the `providers` branch fails its own typecheck step when applied to `main`. This signals a need for stronger registry-branch sync and integration validation before skill payloads are accepted.

Active PRs addressing similar reliability concerns include [#3156](https://github.com/nanocoai/nanoclaw/pull/3156) (structured channel attachments), [#3158](https://github.com/nanocoai/nanoclaw/pull/3158) (real publisher identity for image verification), and [#3157](https://github.com/nanocoai/nanoclaw/pull/3157) (symlink safety).

## 5. Bugs & Stability

Ranked by severity:

- **High — [#3153: reaction/edit always fail on inbound messages](https://github.com/nanocoai/nanoclaw/issues/3153)**  
  Agent-group suffix is not stripped from platform message IDs, so Slack API calls fail with `message_not_found` and eventually mark operations as `failed`. No fix PR is visible yet.

- **High — [#3155: registry branches drifted; provider payloads fail their own install gates](https://github.com/nanocoai/nanoclaw/issues/3155)**  
  Installing a skill from registry-provider branches on `main` fails at the skill's own build/typecheck step. This blocks skill deployment and indicates broken cross-branch consistency. No fix PR is visible yet.

- **Medium — [#3119: untracked orphan containers cause duplicate per-group spawns](https://github.com/nanocoai/nanoclaw/pull/3119)**  
  A fix PR is open. The PR reconciles untracked orphan containers so a single agent group cannot accumulate multiple concurrent containers polling the same session DB.

- **Medium — [#3158: image signature verification is skipped because publisher identity vars are missing](https://github.com/nanocoai/nanoclaw/pull/3158)**  
  The verification gate reads non-existent variables, so signature verification never runs and auto-merge cannot fire. An open PR wires in the real Sigstore publisher identity.

- **Low/Medium — [#3157: dangling symlinks break template skill materialization](https://github.com/nanocoai/nanoclaw/pull/3157)**  
  `fs.statSync` follows symlinks, including container-path symlinks written by `container-runner`, causing incorrect filtering. An open PR switches to not following dangling symlinks.

- **Low — [#3154: scheduled tasks do not receive current run time](https://github.com/nanocoai/nanoclaw/pull/3154)**  
  Open PR fixes scheduled tasks to render the effective scheduled occurrence time instead of relying on stale creation timestamps.

## 6. Feature Requests & Roadmap Signals

Several feature-oriented PRs remain open and indicate where NanoClaw may be heading next:

- **[#2301 — feat(add-github): polling mode, git access question, safe OneCLI secret merge](https://github.com/nanocoai/nanoclaw/pull/2301)**  
  Adds a no-inbound-port GitHub integration using REST polling every 30s, useful for operators behind NAT/firewalls. Also improves webhook-mode security warnings and secret merging.

- **[#2317 — feat(skills): add /add-voice-transcription-free-whisper skill](https://github.com/nanocoai/nanoclaw/pull/2317)**  
  Local, free voice transcription with `openai-whisper` and `whisper.cpp` backends, including pre-flight detection.

- **[#2634 — feat: add add-paws4claws skill](https://github.com/nanocoai/nanoclaw/pull/2634)**  
  Integration for the paws4claws AWS credential proxy daemon, with bearer-token auth and mount-from-outside container configuration.

- **[#2537 — ci: add pre-commit hooks](https://github.com/nanocoai/nanoclaw/pull/2537)**  
  Prettier, ESLint, typecheck, and Vitest running automatically on staged files.

- **[#2685 — docs(signal): group typing, outbound reactions, quote-reply fix](https://github.com/nanocoai/nanoclaw/pull/2685)**  
  Documentation updates for Signal integration behavior.

- **[#3124 — fix: report unavailable MCP servers](https://github.com/nanocoai/nanoclaw/pull/3124)**  
  Would make MCP server failures visible to users instead of silent.

Given the current merge momentum around agent-runner fixes, the likely near-term additions are the open core-team PRs: structured attachment handling ([#3156](https://github.com/nanocoai/nanoclaw/pull/3156)), scheduled-task time fixes ([#3154](https://github.com/nanocoai/nanoclaw/pull/3154)), and image-verification identity ([#3158](https://github.com/nanocoai/nanoclaw/pull/3158)). The longer-open feature PRs, especially GitHub polling mode and Whisper transcription, are candidates for later releases but have not yet advanced to merge.

## 7. User Feedback Summary

Reported pain points in this window:

- **Broken interactive message operations**: Users cannot reliably react to or edit inbound messages, especially via Slack, because the platform receives an unknown message ID. This is a directly observed failure with retries and final `failed` status.
- **Install-time failures**: A user reported that applying a registry-provider skill on `main` fails its own step-4 typecheck, making the skill unusable and undermining trust in registry payloads.
- **Resource duplication**: On a continuously running host, one agent group reached three concurrent containers due to untracked orphans, causing duplicate polling of the same session DB.
- **Unnecessary baked-in tools**: The Vercel CLI being in every image was seen as wasted bytes and a default security surface. The merged opt-in PR addresses this.
- **Missing observability**: Scheduled tasks showing incorrect times and MCP server failures not being reported both point to a desire for more accurate state and better failure visibility.

No explicit satisfaction data was present, but the fast turnaround on image repinning and container-tooling cleanup suggests general alignment on engineering priorities.

## 8. Backlog Watch

Several PRs have been open for a long time and still need maintainer attention, merge, or explicit closure:

- **[#2301 — GitHub polling mode (open since 2026-05-06)](https://github.com/nanocoai/nanoclaw/pull/2301)**
- **[#2317 — Free Whisper voice transcription skill (open since 2026-05-07)](https://github.com/nanocoai/nanoclaw/pull/2317)**
- **[#2537 — Pre-commit hooks CI (open since 2026-05-18)](https://github.com/nanocoai/nanoclaw/pull/2537)**
- **[#2634 — paws4claws AWS credential proxy skill (open since 2026-05-28)](https://github.com/nanocoai/nanoclaw/pull/2634)**
- **[#2685 — Signal docs: group typing, outbound reactions, quote-reply fix (open since 2026-06-04)](https://github.com/nanocoai/nanoclaw/pull/2685)**

All were touched within the last 24 hours but remain unmerged. They are feature-complete PRs from a frequent contributor and may represent queued roadmap work that needs review capacity or explicit prioritization.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-07-31

## 1. Today's Overview

IronClaw is in a high-velocity consolidation phase: 40 issues and 50 PRs were updated in the last 24 hours, with 24 PRs merged/closed and 6 issues closed. The dominant theme is the **target-crate architecture program** (#3773): BenKurrek shipped two WS0 foundation PRs (#6934, #6936) and opened a coordinated batch of nine follow-up workstreams (#6919–#6927) that will restructure the crate layout over the coming weeks. In parallel, the skills reliability epic (#6565) got a new finishable subset (#6941) plus two large fix PRs (#6937, #6938), and the long-running cross-channel attachment work landed (#6364, closing #6496). No releases were published; the pending release PR (#5598) still carries breaking changes for `ironclaw_common` and `ironclaw_skills`. Overall, the project looks healthy: architecture debt is being paid down deliberately, user-reported bugs are being triaged quickly, and a new outside contributor submitted a UX design PR (#6901).

## 2. Releases

No new releases were published in this window. Note: release PR [#5598](https://github.com/nearai/ironclaw/pull/5598) remains open and includes **API breaking changes** (`ironclaw_common` 0.4.2→0.5.0, `ironclaw_skills` 0.3.0→0.4.0), so downstream consumers should watch for it.

## 3. Project Progress

Merged/closed PRs in this window (24 total; highlights from the active set):

- **[#6364](https://github.com/nearai/ironclaw/pull/6364) — feat(attachments): durable cross-channel file flows** (XL, merged). Introduces one generic attachment contract across WebUI, Telegram, and Slack; inbound attachment batches are landed atomically under shared limits before a turn starts; outbound workspace files can be attached via an authorized run-scoped capability. Closes the Telegram attachment epic [#6496](https://github.com/nearai/ironclaw/issues/6496).
- **[#6935](https://github.com/nearai/ironclaw/pull/6935) — fix(libsql): recover cancelled transactions and history migration** (merged). Fixes conversation-history/timeline 503s caused by a transcript-index migration racing a message update, and prevents cancelled filesystem transactions from holding the single libSQL writer lease.
- **[#6934](https://github.com/nearai/ironclaw/pull/6934) — refactor(host_api): de-wildcard the contract prelude** (WS0, merged). Removes the flat `pub use <mod>::*;` prelude (45 modules) from `ironclaw_host_api`; consumers now reach contracts through module paths.
- **[#6936](https://github.com/nearai/ironclaw/pull/6936) — test(architecture): baselines + shrink-only exception ratchet** (WS0, merged). Behavior-free; arms the metrics that keep the ten-family restructure honest before code moves.

Also closed in this window: SSO session/multi-user isolation E2E coverage [#4636](https://github.com/nearai/ironclaw/issues/4636) and Reborn Playwright runtime/served-API stabilization [#6771](https://github.com/nearai/ironclaw/issues/6771), both test-infrastructure wins. Newly opened follow-up architecture workstreams: crate layout moves [#6926](https://github.com/nearai/ironclaw/issues/6926), dead-code deletion [#6925](https://github.com/nearai/ironclaw/issues/6925), domain evictions [#6924](https://github.com/nearai/ironclaw/issues/6924), kernel/lane narrowing [#6923](https://github.com/nearai/ironclaw/issues/6923), extension restructuring [#6922](https://github.com/nearai/ironclaw/issues/6922), contract extraction [#6921](https://github.com/nearai/ironclaw/issues/6921), baseline establishment [#6920](https://github.com/nearai/ironclaw/issues/6920), and north-star ratification [#6919](https://github.com/nearai/ironclaw/issues/6919).

## 4. Community Hot Topics

- **[#6284 — Error-recoverability endgame (epic, 15 comments)](https://github.com/nearai/ironclaw/issues/6284)** is the most-discussed item. It demands that every mid-run error satisfies a recoverability contract: the run survives, the model sees cause *and* remedy, and gets a turn to act. Underlying need: agents that self-heal instead of dying on first error — central to production trust.
- **[#6524 — Hermetic capability and journey testing platform (epic, 4 comments)](https://github.com/nearai/ironclaw/issues/6524)** asks for deterministic, meaningful coverage of every supported capability and critical user journey. The need is mechanical proof that features actually work, rather than harvested-trace fixtures.
- **[#6565 — Reliable Skill Discovery, Routing, and Activation (epic)](https://github.com/nearai/ironclaw/issues/6565)** plus its new finishable subset **[#6941 — "skills the model can find, choose, and use"](https://github.com/nearai/ironclaw/issues/6941)** (created today). #6941 explicitly carves #6565's 21 acceptance criteria into shippable slices. Demand signal: users' tasks are failing because skills exist but are never selected or activated.
- **[#6752 — Instance deletion failure](https://github.com/nearai/ironclaw/issues/6752)** and **[#6834 — Slack setup failure](https://github.com/nearai/ironclaw/issues/6834)** are the top user-reported functional bugs (1 comment each), both sourced from the x-ai product-feedback Slack channel.

## 5. Bugs & Stability

Ranked by severity:

- **Critical / security — [#6900](https://github.com/nearai/ironclaw/issues/6900) (suggested P0):** shared-channel default subject binding collapses all users into the operator's memory namespace — a cross-user memory leak. Unrouted shared conversations (e.g., Slack) must fail closed or bind to per-actor identities. No fix PR yet.
- **High / security — [#6866](https://github.com/nearai/ironclaw/issues/6866):** same home directory shared across all users; all workspaces visible to everyone. Reported by a user as a privacy concern. No fix PR yet.
- **High / functional — [#6752](https://github.com/nearai/ironclaw/issues/6752):** instance deletion fails; re-login stuck on "Loading your agents...". No fix PR yet.
- **Medium — [#6834](https://github.com/nearai/ironclaw/issues/6834):** Slack integration setup/auth flow fails for near.foundation accounts, leaving the extension unusable.
- **Medium — [#6940](https://github.com/nearai/ironclaw/issues/6940) (new today):** IronHub skill CTA returns 404 for every skill.
- **Frontend / WebUI regressions:** markdown files render as plain text in preview modal ([#6916](https://github.com/nearai/ironclaw/issues/6916)); workspace file links in assistant messages don't open the file ([#6915](https://github.com/nearai/ironclaw/issues/6915), fix PR **[#6917](https://github.com/nearai/ironclaw/pull/6917)** open); Logs page can't paginate past the latest page ([#6904](https://github.com/nearai/ironclaw/issues/6904)); Admin users list can't load beyond first 100 users ([#6903](https://github.com/nearai/ironclaw/issues/6903)).
- **Fixed today:** libSQL 503s / cancellation lease bug via [#6935](https://github.com/nearai/ironclaw/pull/6935).

## 6. Feature Requests & Roadmap Signals

- **Skills reliability (likely next release):** PRs [#6937](https://github.com/nearai/ironclaw/pull/6937) (word-boundary keyword matching, fixes #5417) and [#6938](https://github.com/nearai/ironclaw/pull/6938) (activation refusals explain *why*, enforced requirements) are both open and tied to epic #6565; they are the strongest "next version" candidates.
- **Hosted MCP server registration:** [#6930](https://github.com/nearai/ironclaw/pull/6930) adds tenant-runtime registration, auth detection, and lifecycle integration for hosted MCP servers — a major extensibility step.
- **Agentic Activity & Streaming UX:** [#6901](https://github.com/nearai/ironclaw/pull/6901) (from a new contributor) is a foundation PR with an interactive mockup and implementation brief for the `webui_v2` agent-activity redesign.
- **IronHub supply-chain hardening:** [#6780](https://github.com/nearai/ironclaw/pull/6780) (register/install gateway + private manifest source) and [#6933](https://github.com/nearai/ironclaw/pull/6933) (install bound to versioned SHA-256 package digest) signal a push toward verified, tamper-evident package installs.
- **User-requested:** migration tool to port legacy agent (Hermes/Openclaw) setup, config, and memory into IronClaw ([#6939](https://github.com/nearai/ironclaw/issues/6939)); keyless cosign release signing ([#6905](https://github.com/nearai/ironclaw/issues/6905)); shared UI components for settings switches ([#6910](https://github.com/nearai/ironclaw/issues/6910)) and admin delete confirmations ([#6909](https://github.com/nearai/ironclaw/issues/6909)).
- **Also in flight:** secret-redaction compaction with overflow recovery ([#6855](https://github.com/nearai/ironclaw/pull/6855)) and CI mutation/coverage gates ([#6889](https://github.com/nearai/ironclaw/pull/6889)).

## 7. User Feedback Summary

Real pain points from the product-feedback channel and issue tracker:

- **Switching costs:** users of the legacy Hermes/Openclaw product resist starting over; they want setup, configuration, and memory carried forward ([#6939](https://github.com/nearai/ironclaw/issues/6939)).
- **Privacy distrust:** two distinct reports of cross-user data exposure — shared home directories/workspaces ([#6866](https://github.com/nearai/ironclaw/issues/6866)) and the operator-memory namespace leak ([#6900](https://github.com/nearai/ironclaw/issues/6900)). These are existential trust issues for a multi-user agent platform.
- **Broken core flows:** instance deletion leaves users stranded on "Loading your agents..." ([#6752](https://github.com/nearai/ironclaw/issues/6752)); Slack setup fails end-to-end ([#6834](https://github.com/nearai/ironclaw/issues/6834)); IronHub CTAs are dead links everywhere ([#6940](https://github.com/nearai/ironclaw/issues/6940)).
- **Satisfaction signals:** the project's active response to feedback (e.g., #4636/#6771 test stabilization closing) and an external contributor's design PR (#6901) indicate a healthy, welcoming community.

## 8. Backlog Watch

- **[#3773 — IronClaw Target Crate Architecture epic](https://github.com/nearai/ironclaw/issues/3773)** (open since May 19) is the longest-running structural item. It is now active via the WS0 batch, but the full ten-family migration (#6919–#6927) is multi-week; needs sustained maintainer ownership to avoid stalling.
- **[#5598 — release PR](https://github.com/nearai/ironclaw/pull/5598)** has been open since July 3 with breaking changes queued. With zero releases in this window, it appears releases are blocked — likely by the in-flight breaking refactors.
- **[#6284 — error-recoverability epic](https://github.com/nearai/ironclaw/issues/6284)** (15 comments, highest engagement) has no dedicated PR in this batch; it needs slicing into reviewable workstreams like #6565 just received.
- **Dependabot maintenance debt:** [#6361](https://github.com/nearai/ironclaw/pull/6361), [#6428](https://github.com/nearai/ironclaw/pull/6428), [#5664](https://github.com/nearai/ironclaw/pull/5664) (16 action updates), and [#6932](https://github.com/nearai/ironclaw/pull/6932) (34 updates, currently rebasing) are piling up; worth a dedicated triage pass.
- **[#6905 — keyless cosign release signing](https://github.com/nearai/ironclaw/issues/6905)** is a small, high-value security request (AUR packaging verification) awaiting maintainer action.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-07-31

## 1. Today's Overview

LobsterAI saw focused, multi-area development over the last 24 hours: 10 pull requests were updated, with 7 merged/closed and 3 remaining open. No new issues were opened or updated, and no releases were published. Activity concentrated on the cowork side-chat experience, enterprise account isolation, installer reliability, sidebar UI, and cross-platform security hardening. The merge velocity indicates a healthy maintenance and feature cadence, though the absence of issue activity suggests user feedback is currently flowing mostly through PRs.

## 2. Releases

No new releases were published in this window.

## 3. Project Progress

Merged or closed PRs in the last 24 hours:

- **[#2409 feat(enterprise): isolate account-scoped auth and service flows](https://github.com/netease-youdao/LobsterAI/pull/2409)** — Merged. Isolates auth, media, queued follow-up, sharing, and deployment state per account; prevents stale async responses from leaking across accounts; adds enterprise entitlement enforcement and rollback/cleanup improvements.
- **[#2406 fix(cowork): improve side chat input handling](https://github.com/netease-youdao/LobsterAI/pull/2406)** — Merged. Accumulates selected text while the panel is open, removes the product-level question length limit, and keeps context bounded with transport safety checks.
- **[#2411 feat(sidebar): support check-in and banner carousel](https://github.com/netease-youdao/LobsterAI/pull/2411)** — Merged. Adds a unified sidebar carousel for daily check-in and active banners, with support for coexisting banners and single-item behavior.
- **[#2412 fix(nsis): re-kill survivor processes on every stop poll round](https://github.com/netease-youdao/LobsterAI/pull/2412)** — Merged. Improves Windows installer shutdown reliability by re-issuing `Stop-Process` during every poll round and logging survivor process details.
- **[#2410 style(sites): align page layout with management views](https://github.com/netease-youdao/LobsterAI/pull/2410)** — Merged. Brings the Sites page width, spacing, and search styling in line with Skills and MCP views.
- **[#2397 feat(cowork): add isolated /btw side chat](https://github.com/netease-youdao/LobsterAI/pull/2397)** — Merged. Adds an editable floating side-chat panel with dragging/resizing, stop support, follow-up questions, and isolated history via the OpenClaw utility stream.
- **[#2389 fix(email): prevent attachment path traversal](https://github.com/netease-youdao/LobsterAI/pull/2389)** — Merged. Sanitizes email attachment filenames, enforces download directory boundaries, and adds cross-platform security tests.

One new open PR is worth noting:

- **[#2413 fix(openclaw): keep live prompt tool-result history byte-stable across turns](https://github.com/netease-youdao/LobsterAI/pull/2413)** — Open. Prevents live prompt projection from re-applying a fixed char cap on already-cached history, which should improve DeepSeek cache hit rates.

## 4. Community Hot Topics

Comment/reaction data is not available in this snapshot, but several PRs signal strong community/contributor interest:

- **Cowork side chat workflow** — [#2397](https://github.com/netease-youdao/LobsterAI/pull/2397) and [#2406](https://github.com/netease-youdao/LobsterAI/pull/2406) together constitute a major UX addition: isolated `/btw` side conversations for selected assistant text. The follow-up fix in #2406 shows real usage feedback around text selection and input limits.
- **Account-scoped enterprise isolation** — [#2409](https://github.com/netease-youdao/LobsterAI/pull/2409) touches auth, media, sharing, deployment, and renderer/main diagnostics. This is likely a response to multi-account enterprise users experiencing state leakage.
- **Live prompt cache stability** — [#2413](https://github.com/netease-youdao/LobsterAI/pull/2413) targets DeepSeek cache hit rates by keeping tool-result history byte-stable. This reflects a real cost/latency pain point in long-running agent conversations.

## 5. Bugs & Stability

Ranked by severity:

1. **Email attachment path traversal** — [#2389](https://github.com/netease-youdao/LobsterAI/pull/2389) — High severity. Sanitizes attachment filenames and enforces download directory boundaries. Fix merged with cross-platform security tests.
2. **Live prompt history instability / cache collapse** — [#2413](https://github.com/netease-youdao/LobsterAI/pull/2413) — Medium-high operational impact. Repeated rewriting of cached history reduces DeepSeek cache hit rates. Fix proposed; PR is currently open.
3. **Windows installer survivor processes** — [#2412](https://github.com/netease-youdao/LobsterAI/pull/2412) — Medium severity. Processes could survive the stop gate during NSIS install/uninstall. Fix merged by re-killing on every poll round.

## 6. Feature Requests & Roadmap Signals

- **Cowork side chat** — [#2397](https://github.com/netease-youdao/LobsterAI/pull/2397) and [#2406](https://github.com/netease-youdao/LobsterAI/pull/2406) show clear investment in a richer, isolated side conversation model. Future versions may add more panel behaviors, streaming state, or shared context controls.
- **Enterprise multi-account isolation** — [#2409](https://github.com/netease-youdao/LobsterAI/pull/2409) points toward enterprise-grade account scoping becoming a first-class concern.
- **Sidebar check-in and banner carousel** — [#2411](https://github.com/netease-youdao/LobsterAI/pull/2411) signals product-level growth around daily engagement and promotional content.
- **UI consistency across management views** — [#2410](https://github.com/netease-youdao/LobsterAI/pull/2410) suggests continued design-system alignment for Sites, Skills, and MCP pages.

Two older open feature/UX PRs may also be candidates for the next release:

- [#1228](https://github.com/netease-youdao/LobsterAI/pull/1228) — “Mark session as unread” for cowork sessions.
- [#1231](https://github.com/netease-youdao/LobsterAI/pull/1231) — Escape key close and form reset for `AgentCreateModal`.

## 7. User Feedback Summary

Real user pain points reflected in this window:

- **Security concerns with email attachments** — users need safe download behavior and path traversal protection.
- **Windows install/update reliability** — leftover processes after installation/update is a concrete stability complaint.
- **High cost/latency in long agent sessions** — unstable prompt history is hurting cache effectiveness.
- **Side chat usability gaps** — initial `/btw` implementation required better text accumulation and no arbitrary length limits.
- **Account state confusion in enterprise use** — stale async responses from a previous account were affecting newly signed-in users.

Overall, the feedback pattern is positive: features are being refined quickly after merge, and security/operational fixes are being delivered promptly.

## 8. Backlog Watch

The following older PRs remain open with no visible maintainer response:

- **[#1228 feat(cowork): 新增会话「标记为未读」功能](https://github.com/netease-youdao/LobsterAI/pull/1228)** — Opened 2026-04-01, updated 2026-07-30, labeled `stale`. Adds manual “mark as unread” for cowork sessions via Redux and i18n. Needs maintainer review or closure decision.
- **[#1231 fix(agent): AgentCreateModal supports Escape key and form reset](https://github.com/netease-youdao/LobsterAI/pull/1231)** — Opened 2026-04-01, updated 2026-07-30, labeled `stale`. Fixes two UX consistency issues in `AgentCreateModal`. This is low-risk and likely ready for review.

These two PRs have been waiting for attention for roughly four months and should be prioritized or explicitly closed to reduce backlog noise.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-07-31

## Today's Overview

Moltis had a moderate activity day: 2 issues were updated and remain open, while 4 pull requests saw updates, with 1 closed and 3 still open. No new releases were published. The project is actively iterating on security hardening, channel reliability, observability, and web UX. The current PR mix indicates ongoing investment in production-focused infrastructure (instrumentation, Slack lifecycle handling, access-control boundaries). Issue volume is low, but the one security bug reported is significant and should be prioritized.

## Releases

No new releases were published in the last 24 hours. No changelog, breaking changes, or migration notes are available.

## Project Progress

One PR was closed/merged or closed today:

- **[#1166 [CLOSED] feat(slack): per-message acknowledgment reactions, phases, reconnect supervision, and Block Kit](https://github.com/moltis-org/moltis/pull/1166)**  
  This PR builds on earlier Slack acknowledgment work, adding reaction-based progress indicators, reconnect supervision, and Block Kit support. It appears to have completed its review cycle and was updated/closed on 2026-07-31.

Other active PRs that advanced the project (still open):

- **[#1174 [OPEN] Add instrumentation and feedback collection infrastructure](https://github.com/moltis-org/moltis/pull/1174)**  
  Adds backend-neutral instrumentation, Langfuse v4 export, OTLP backends, and end-user reaction feedback, including cache-aware token usage and failover attribution.

- **[#1170 [OPEN] fix(channels): gate /sh and privileged tools behind a per-account operators list](https://github.com/moltis-org/moltis/pull/1170)**  
  Separates access from privilege by introducing an explicit operators list, closing a potential boundary issue across commands, callbacks, queue replay, and chat execution.

- **[#1176 [OPEN] feat(web): add Markdown copy and session export](https://github.com/moltis-org/moltis/pull/1176)**  
  Preserves original Markdown when copying assistant replies and adds a session-level "Save as Markdown" action with paginated history export.

## Community Hot Topics

Activity is centered on implementation PRs rather than issue discussion; no issues or PRs currently show high comment/reaction counts.

- **[#1177 [Bug] Vault Unlock/Recovery Endpoints Missing Authentication (CWE-306)](https://github.com/moltis-org/moltis/issues/1177)**  
  The most security-relevant item from the community is the report that vault unlock/recovery endpoints are missing authentication. The issue has no comments yet, but the severity implied by CWE-306 makes it a critical watch item.

- **[#1178 [Feature] Let agents send Telegram inline buttons and receive structured callback responses](https://github.com/moltis-org/moltis/issues/1178)**  
  A feature request asking for general-purpose agent-created Telegram inline buttons with structured callback handling. This is a strong signal that users want richer interactive Telegram capabilities.

- **[#1170 [PR] Privileged tool access control fix](https://github.com/moltis-org/moltis/pull/1170)**  
  Actively updated and likely receiving maintainer attention; it addresses a security boundary that could affect channel senders and privileged host tools.

## Bugs & Stability

One bug was reported in the last 24 hours, ranked by severity:

1. **High — Missing authentication on vault unlock/recovery endpoints**  
   [#1177 [Bug]: Vault Unlock/Recovery Endpoints Missing Authentication (CWE-306)](https://github.com/moltis-org/moltis/issues/1177)  
   Reported by Practice100101. If confirmed, unauthenticated access to vault unlock/recovery endpoints could be a serious vulnerability. No fix PR has been linked yet. Maintainers should triage this immediately.

2. **Related security hardening PR**  
   [#1170 fix(channels): gate /sh and privileged tools behind a per-account operators list](https://github.com/moltis-org/moltis/pull/1170)  
   While not a direct bug report, this PR addresses a privilege-boundary weakness where allowlisted senders could reach privileged commands/host tools. It is a positive stability/security improvement still under review.

## Feature Requests & Roadmap Signals

- **Telegram interactive components**  
  [#1178 [Feature]: Let agents send Telegram inline buttons and receive structured callback responses](https://github.com/moltis-org/moltis/issues/1178)  
  Users want agents to send Telegram inline buttons and receive structured callback data. This suggests a roadmap direction toward bidirectional interactive messaging beyond plain text.

- **Web Markdown copy and session export**  
  [#1176 feat(web): add Markdown copy and session export](https://github.com/moltis-org/moltis/pull/1176)  
  The presence of an open PR means Markdown-preserving copy/export may land in a near-term web release.

- **Instrumentation and feedback collection**  
  [#1174 Add instrumentation and feedback collection infrastructure](https://github.com/moltis-org/moltis/pull/1174)  
  This is infrastructure-heavy and likely to be foundational for future observability and user feedback features.

Prediction: The next version of Moltis may include the web Markdown export PR (#1176), the access-control fix (#1170), and possibly the Slack lifecycle improvements (#1166 already closed). The instrumentation work (#1174) is also a strong candidate if it completes review soon.

## User Feedback Summary

Community feedback highlights several concrete needs:

- **Security confidence**: Users/reviewers are concerned about missing authentication on vault-related endpoints and about privilege escalation through channel access. This is the clearest pain point in the current backlog.
- **Richer messaging**: Users want Telegram inline buttons and structured callbacks, indicating a desire for agent-initiated interactive UI in messaging channels.
- **Better web data portability**: The Markdown copy/export PR responds to the need to preserve formatting and export full sessions from the web interface.
- **Channel reliability/visibility**: Slack acknowledgment reactions and reconnect supervision, as advanced in #1166, address user confusion from missing typing indicators and uncertain delivery states.

Overall, satisfaction signals are indirect but positive: progress is being made on multiple UX and reliability fronts, while security issues remain the dominant concern.

## Backlog Watch

No long-stale or clearly unanswered issues/PRs were evident in the current data. The items receiving updates are recent (within the last 3–5 days) and appear to be actively moving:

- [#1174](https://github.com/moltis-org/moltis/pull/1174) — instrumentation PR, updated 2026-07-31
- [#1170](https://github.com/moltis-org/moltis/pull/1170) — security fix PR, updated 2026-07-31
- [#1166](https://github.com/moltis-org/moltis/pull/1166) — closed/merged today
- [#1178](https://github.com/moltis-org/moltis/issues/1178) — feature request from 2026-07-30, awaiting maintainer response
- [#1177](https://github.com/moltis-org/moltis/issues/1177) — security bug from 2026-07-30, needs immediate triage

The main item requiring maintainer attention is the security bug #1177, which should be acknowledged and linked to a fix PR as soon as possible.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-07-31

## Today’s Overview

QwenPaw/CoPaw had a busy but release-free 24-hour cycle: **21 issues updated** (16 open/active, 5 closed) and **47 PRs updated** (26 open, 21 closed/merged). Activity is concentrated on **fixing v2.0 regressions**, especially a ~2s fixed overhead per reply, shell-output handling, MCP interoperability, and memory durability. Several closed PRs show that **Computer Use on desktop** and **governance/sandbox behavior** are maturing. The community is also clearly pushing for desktop UX polish, including bundled Python support, Chinese filename preservation, and easier access to workspace artifacts. Overall project health is active, but contributor friction and unanswered performance bugs remain visible.

## Releases

**No new releases were published in this window.** There are no release notes, breaking changes, or migration notes to summarize. The many pending fix PRs suggest users are waiting on a patch release.

## Project Progress

Of the 21 closed/merged PRs in the last 24h, the notable ones visible in the dataset include:

- **#6424 — Computer Use: native desktop GUI automation for Windows/macOS**  
  Closed as `ready-for-human-review`. This is the largest capability advance in the window.  
  https://github.com/agentscope-ai/QwenPaw/pull/6424

- **#6590 — fix(computer-use): reuse desktop identity on macOS**  
  Fixes macOS Screen Recording permission while preserving native helper isolation.  
  https://github.com/agentscope-ai/QwenPaw/pull/6590

- **#6594 — docs(computer-use): add beginner guide**  
  Adds English and Chinese Computer Use documentation.  
  https://github.com/agentscope-ai/QwenPaw/pull/6594

- **#6596 — feat(dialog): WAL durability — flush+fsync JSONL after every reply turn**  
  Addresses dialog history loss on hard crash / forced close. Closed with a `close-and-review-later` label.  
  https://github.com/agentscope-ai/QwenPaw/pull/6596

- **#6562 — Fix Bug #6533, #6506, and related issues**  
  Fixes the `/mission` TypeError and `approval_level` not being inherited by subagents.  
  https://github.com/agentscope-ai/QwenPaw/pull/6562

- **#6256 — feat(governance): make sandbox-unavailable fallback action configurable**  
  Gives operators control over behavior when the sandbox is unavailable.  
  https://github.com/agentscope-ai/QwenPaw/pull/6256

Several promising fix PRs are still open and moving quickly: #6592 (memory flush before context eviction), #6595 (`spawn_subagent` optional args), #6567 (CJK filenames in upload hints), #6561 (MCP tool-name sanitization), and #6579 (bundled Python for desktop script execution).

## Community Hot Topics

Issues with the most engagement in the last 24h:

- **#6307 — v2.0 introduces ~2s fixed overhead per simple conversational reply vs v1.x**  
  **7 comments** — The most active issue. Users are concerned about a major responsiveness regression in v2.x independent of model latency.  
  https://github.com/agentscope-ai/QwenPaw/issues/6307

- **#6563 — CI bug: “Real behavior proof” workflow blocks all fork PRs**  
  **5 comments** — High contributor impact; every fork PR failed CI due to missing GitHub token permissions.  
  https://github.com/agentscope-ai/QwenPaw/issues/6563

- **#6524 — MCP backend restart: client cannot auto-recover until `list mcp` is run**  
  **5 comments** — Relates to stale `mcp-session-id` after `streamable_http` server restart.  
  https://github.com/agentscope-ai/QwenPaw/issues/6524

- **#6083 — Desktop window: add quick access button for workspace outputs**  
  **4 comments** — Non-technical users want one-click access to generated reports/files.  
  https://github.com/agentscope-ai/QwenPaw/issues/6083

- **#6160 — Can QwenPaw ship with an independent Python runtime?**  
  **4 comments** — Desktop users without a system-wide Python installation are blocked from running generated scripts.  
  https://github.com/agentscope-ai/QwenPaw/issues/6160

The underlying theme is clear: users care about **responsiveness, environment reliability, MCP stability, and desktop accessibility**.

## Bugs & Stability

Ranked by estimated severity:

- **Critical — #6307: ~2s fixed overhead per reply in v2.0**  
  Affects every conversation, independent of model latency. No linked fix PR yet.  
  https://github.com/agentscope-ai/QwenPaw/issues/6307

- **High — #6589: `execute_shell_command` large output freezes UI**  
  Frontend tries to render tens of thousands of stdout lines at once, freezing the app on Windows.  
  https://github.com/agentscope-ai/QwenPaw/issues/6589

- **High — #6588: `spawn_subagent` single-task mode unusable because `batch` is required**  
  Model-facing schema failure prevents foreground single-subagent creation. Fix PR: #6595.  
  https://github.com/agentscope-ai/QwenPaw/issues/6588  
  https://github.com/agentscope-ai/QwenPaw/pull/6595

- **High — #6557: MCP tool names starting with `-` cause strict LLM APIs to return 400**  
  Breaks MCP servers whose namespaces start with non-letters. Fix PR: #6561.  
  https://github.com/agentscope-ai/QwenPaw/issues/6557  
  https://github.com/agentscope-ai/QwenPaw/pull/6561

- **High — #6524: MCP client reuses stale session ID after server restart**  
  Requires manual `list mcp` to reconnect. No fix PR visible yet.  
  https://github.com/agentscope-ai/QwenPaw/issues/6524

- **High — #6563: CI blocks all fork PRs**  
  Closed in this window, but it was a serious contributor bottleneck.  
  https://github.com/agentscope-ai/QwenPaw/issues/6563

- **Medium — #6555: Dream/memory compression misses early-session events**  
  Potential memory data loss. Fix PR open: #6592.  
  https://github.com/agentscope-ai/QwenPaw/issues/6555  
  https://github.com/agentscope-ai/QwenPaw/pull/6592

- **Medium — #6512: `execute_shell_command` output truncation >30KB and `Internal error`**  
  Related to the UI-freeze issue #6589, but no fix PR is listed.  
  https://github.com/agentscope-ai/QwenPaw/issues/6512

- **Medium — #6578: Cron `dispatch.mode: "final"` not respected**  
  Intermediate events were still pushed to channels. Issue closed.  
  https://github.com/agentscope-ai/QwenPaw/issues/6578

- **Medium — #6506: Session-level `approval_level` not inherited by `spawn_subagent` children**  
  Addressed by PR #6562.  
  https://github.com/agentscope-ai/QwenPaw/issues/6506

- **Low — #6533: `/mission` command TypeError**  
  Fixed by PR #6562.  
  https://github.com/agentscope-ai/QwenPaw/issues/6533

- **Low — #6476: Matrix end-to-end encryption unusable**  
  Related to `matrix-nio` / `olm` dependency installation. Issue closed.  
  https://github.com/agentscope-ai/QwenPaw/issues/6476

## Feature Requests & Roadmap Signals

Strong roadmap signals from users and open PRs:

- **Bundled Python runtime for desktop** — #6160, with fix PR #6579 open. Likely to land soon.  
  https://github.com/agentscope-ai/QwenPaw/issues/6160  
  https://github.com/agentscope-ai/QwenPaw/pull/6579

- **Workspace artifact quick access** — #6083. Desktop users want a button to open recent agent outputs.  
  https://github.com/agentscope-ai/QwenPaw/issues/6083

- **Unified cleanup/storage management page** — #6593. Users want global cleanup of memory, backups, old conversations, and agent workspaces.  
  https://github.com/agentscope-ai/QwenPaw/issues/6593

- **Session fork hierarchy** — #6559. Users want auto-created forks grouped as children of the main session.  
  https://github.com/agentscope-ai/QwenPaw/issues/6559

- **CJK-friendly upload hints** — #6453. Fix PR #6567 is open.  
  https://github.com/agentscope-ai/QwenPaw/issues/6453  
  https://github.com/agentscope-ai/QwenPaw/pull/6567

- **Desktop polish requests** — #6587 rename app to “QwenPaw”, #6585 add toggle for character counter animation, #6583 multi-line file name display, #6452 remove “no multimodal ability” notice.  
  https://github.com/agentscope-ai/QwenPaw/issues/6587  
  https://github.com/agentscope-ai/QwenPaw/issues/6585  
  https://github.com/agentscope-ai/QwenPaw/issues/6583  
  https://github.com/agentscope-ai/QwenPaw/issues/6452

- **Provider/model platform unification** — PR #6302 is a large open change addressing multiple provider pain points.  
  https://github.com/agentscope-ai/QwenPaw/pull/6302

Prediction: the next release is likely a **stability patch** centered on memory durability (#6592), MCP tool-name validation (#6561), `spawn_subagent` arguments (#6595), and bundled Python execution (#6579). More exploratory features like unified provider discovery and a cleanup page are probably further out.

## User Feedback Summary

Real user pain points in this window:

- **v2.0 performance regression is the biggest dissatisfaction driver.** Simple replies now carry ~2s fixed overhead, which feels like a step backward from v1.x.  
  https://github.com/agentscope-ai/QwenPaw/issues/6307

- **Chinese Windows users are a vocal segment.** They report mangled Chinese filenames in upload prompts, an awkward “QwenPaw Desktop” app name, and distracting dynamic character counters.  
  https://github.com/agentscope-ai/QwenPaw/issues/6453  
  https://github.com/agentscope-ai/QwenPaw/issues/6587  
  https://github.com/agentscope-ai/QwenPaw/issues/6585

- **Desktop users without system Python are blocked.** Using Conda-managed environments is common on Windows, and users expect QwenPaw to bundle or reuse its own interpreter.  
  https://github.com/agentscope-ai/QwenPaw/issues/6160

- **Long-running users worry about data loss and bloat.** The Dream/memory compression issue (#6555), session-list chaos (#6559), and growing disk usage (#6593) are all trust issues for daily users.

- **MCP users need reliability.** Server restarts and strict LLM API validation are breaking otherwise working MCP integrations.  
  https://github.com/agentscope-ai/QwenPaw/issues/6524  
  https://github.com/agentscope-ai/QwenPaw/issues/6557

- **Positive sentiment exists, but with caveats.** One issue says “very good project” while asking for a UI toggle, indicating users are engaged but sensitive to rough edges in the desktop experience.  
  https://github.com/agentscope-ai/QwenPaw/issues/6585

## Backlog Watch

Older or high-visibility items that may need maintainer attention:

- **#6307 — v2.0 performance regression**  
  Open since July 21, 7 comments, no fix PR yet.  
  https://github.com/agentscope-ai/QwenPaw/issues/6307

- **#6524 — MCP reconnect after server restart**  
  Open since July 28, no fix PR visible.  
  https://github.com/agentscope-ai/QwenPaw/issues/6524

- **#6512 — `execute_shell_command` output truncation**  
  Open since July 28, no dedicated fix PR listed.  
  https://github.com/agentscope-ai/QwenPaw/issues/6512

- **#6083 — Workspace output quick access**  
  Open since July 14, still waiting for implementer.  
  https://github.com/agentscope-ai/QwenPaw/issues/6083

- **#6559 — Unwanted session forking / no parent-child grouping**  
  Open since July 29, no linked PR.  
  https://github.com/agentscope-ai/QwenPaw/issues/6559

- **Stale first-time contributor PRs from July 2:**  
  #5739, #5740, #5745 — all still open and likely need maintainer review.  
  https://github.com/agentscope-ai/QwenPaw/pull/5739  
  https://github.com/agentscope-ai/QwenPaw/pull/5740  
  https://github.com/agentscope-ai/QwenPaw/pull/5745

- **#6302 — Unified provider discovery/model platform PR**  
  Large architectural PR open since July 21; needs sustained review to avoid stalling.  
  https://github.com/agentscope-ai/QwenPaw/pull/6302

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

## ZeptoClaw Project Digest — 2026-07-31

### 1. Today's Overview

ZeptoClaw activity over the past 24 hours was minimal: no issues were opened, updated, or closed, and no new releases were published. The only activity was an update to open pull request [#645](https://github.com/qhkm/zeptoclaw/pull/645), which targets runtime security and process cleanup. The project appears to be in a quiet maintenance phase rather than an active feature-development cycle. The lack of merged PRs or new releases suggests limited forward momentum in this window, but the open PR signals continued maintainer attention on hardening runtime behavior.

### 2. Releases

No new releases were published in this window. The latest release list is empty, so there are no changelog entries, breaking changes, or migration notes to report.

### 3. Project Progress

No PRs were merged or closed in the last 24 hours. The only active PR update was:

- [#645 [OPEN] fix(runtime): scrub subprocess secrets and reap timed-out process trees](https://github.com/qhkm/zeptoclaw/pull/645) — Author: [qhkm](https://github.com/qhkm) · Created 2026-07-23 · Updated 2026-07-30

This PR directly addresses a runtime security issue: shell commands launched by ZeptoClaw previously inherited the full process environment, potentially exposing provider keys and unrelated credentials to model-authored commands. It also targets timeout handling by ensuring `Command::output()` futures do not leave descendant processes un-terminated and unreaped. While not yet merged, this represents meaningful progress toward safer subprocess execution.

### 4. Community Hot Topics

There were no issues with comments or reactions, and the only PR has no recorded discussion or reactions. Community activity is effectively zero in this window.

The sole “hot” item by default is [#645](https://github.com/qhkm/zeptoclaw/pull/645). The underlying concern is clear: ZeptoClaw users who rely on model-authored or model-invoked shell commands need strong guarantees that credentials and provider secrets are not leaked into subprocess environments. The PR also reflects a practical stability need—timed-out commands should not leave orphaned process trees running inside or outside Docker containers.

### 5. Bugs & Stability

No new bugs, crashes, or regressions were reported via issues in the last 24 hours. However, the open PR [#645](https://github.com/qhkm/zeptoclaw/pull/645) implicitly confirms two important runtime defects:

- **High severity — subprocess credential leakage:** Runtime shell commands inherited ZeptoClaw’s full process environment, meaning provider keys and unrelated credentials could be exposed to model-authored commands. This is a security-sensitive bug with potential data-exposure impact.
- **Medium severity — timed-out process trees not reaped:** Dropping `Command::output()` futures on timeout did not consistently terminate and reap descendant processes, which can lead to resource exhaustion and stale processes lingering on the host or in Docker containers.

A fix PR exists for both issues, but it remains open and unreviewed/merged as of this digest.

### 6. Feature Requests & Roadmap Signals

No explicit user-submitted feature requests appear in this window. The project signal points toward hardening rather than new functionality: the only active PR focuses on environment scrubbing, subprocess lifecycle management, and Docker-related cleanup. If merged, these changes are likely to become part of the next runtime maintenance release. Future near-term work may also include more comprehensive secret-handling or process-isolation features, but no user requests are present to confirm that direction.

### 7. User Feedback Summary

There is no direct user feedback available in the current data—no issue comments, PR comments, or reactions were recorded. Indirectly, the existence of [#645](https://github.com/qhkm/zeptoclaw/pull/645) suggests user-facing pain points around security trust in model-authored commands and system stability after timeouts. Satisfaction levels cannot be measured from the available data, and no support requests or bug reports arrived in the last 24 hours.

### 8. Backlog Watch

No long-standing open issues currently require maintainer attention, as the issue tracker has zero active items. The only item to watch is PR [#645](https://github.com/qhkm/zeptoclaw/pull/645), opened on 2026-07-23 and last updated on 2026-07-30. Given its security and stability focus, it should be reviewed and merged promptly or given clear follow-up feedback if additional work is needed.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-07-31

## 1. Today's Overview

ZeroClaw saw a high-activity day with **17 issues and 50 PRs updated** in the last 24 hours, and the v0.8.4 maintenance train (target date July 31) appears to be landing its final items. The only closed PR, #9211, consolidates release attestations — a direct resolution of the high-priority issue #9101 — while security hardening dominated new bug reports, including a **Severity S0 webhook authentication gap** and a Unix command-allowlist regression. Development momentum is healthy but uneven: 49 PRs remain open, with **12 stuck in `needs-author-action`** and several maintainer-review RFCs waiting for a decision. No new releases were published today.

## 2. Releases

**No new releases today.** The most recent published version remains v0.8.3; the v0.8.4 maintenance train is tracked in issue #8357 ([link](https://github.com/zeroclaw-labs/zeroclaw/issues/8357)) with a target date of July 31, 2026.

## 3. Project Progress

Only one PR was merged/closed in the last 24 hours:

- **PR #9211 — ci(release): consolidate release attestations** ([link](https://github.com/zeroclaw-labs/zeroclaw/pull/9211))
  - Closed/merged; resolves #9101 ([link](https://github.com/zeroclaw-labs/zeroclaw/issues/9101)).
  - Makes GitHub artifact attestations the **single provenance mechanism**, collapsing ~53 release assets to ~20 and removing the three parallel signing systems (cosign, artifact attestations, slsa-github-generator) that shipped redundantly in v0.8.3.
  - Generates both SBOM formats in a read-only job with verified offline bundles.

This merge directly advances the v0.8.4 release train and reduces CI cost and maintenance burden — one of the clearest wins of the week.

## 4. Community Hot Topics

The most-discussed items reveal a community focused on **architecture clarity, external integrations, and local-model usability**:

| Item | Comments | Topic |
|---|---|---|
| [#9048](https://github.com/zeroclaw-labs/zeroclaw/issues/9048) (RFC) | 12 | Separating conversation history from agent-curated long-term memory — the highest-engagement item; users want lifecycle separation in memory storage paths |
| [#9101](https://github.com/zeroclaw-labs/zeroclaw/issues/9101) (CI) | 8 | Release attestation consolidation — now resolved by merged PR #9211 |
| [#8603](https://github.com/zeroclaw-labs/zeroclaw/issues/8603) (RFC) | 7 | OpenAI Chat Completions compatibility adapter — strong demand from Open WebUI/LobeChat users who cannot connect without a custom adapter |
| [#8933](https://github.com/zeroclaw-labs/zeroclaw/issues/8933) (RFC) | 7 | Cross-turn conversation correlation in OTel exports (`gen_ai.conversation.id`) |
| [#5287](https://github.com/zeroclaw-labs/zeroclaw/issues/5287) (Feature) | 7 (👍 2) | Compact `local_small` runtime profile with prompt-budget contract — the only item with 👍 reactions |

**Underlying need:** The community is pushing ZeroClaw toward (a) cleaner separation of concerns in memory/observability, (b) drop-in compatibility with the OpenAI ecosystem, and (c) a better local-first experience with smaller models.

## 5. Bugs & Stability

Four new bugs surfaced in the last 24–48h, ranked by severity:

- **S0 — Data loss / security risk: Webhook handlers do not fail closed** — [#9565](https://github.com/zeroclaw-labs/zeroclaw/issues/9565)
  - WhatsApp Cloud, Linq, and WATI handlers dispatch attacker-controllable messages without authenticating the caller when no secret is configured.
  - **Fix PR exists:** [#9569](https://github.com/zeroclaw-labs/zeroclaw/pull/9569) (fail closed on unverifiable webhooks; WATI removal proposed separately in [#9571](https://github.com/zeroclaw-labs/zeroclaw/pull/9571)).

- **S2 — Degraded: Uppercase `allowed_commands` never match on Unix** — [#9566](https://github.com/zeroclaw-labs/zeroclaw/issues/9566)
  - Regression from #4552; case-folding is gated to Windows only, so Unix silently denies valid commands.
  - **Fix PR exists:** [#9568](https://github.com/zeroclaw-labs/zeroclaw/pull/9568) (case-insensitive matching on Unix).

- **S2 — Degraded: Cost pricing lookup fails for multiple aliases of same provider type** — [#9573](https://github.com/zeroclaw-labs/zeroclaw/issues/9573)
  - Configured token prices ignored on Gateway WebSocket/RPC paths when two aliases share a provider type. No fix PR yet.

- **S2 — Degraded: Debug gateway WebSocket turns overflow Tokio worker stack** — [#9572](https://github.com/zeroclaw-labs/zeroclaw/issues/9572)
  - Intermittent `thread 'tokio-rt-worker' has overflowed its stack` in development builds. No fix PR yet.

- **S3 — Minor: `cargo test --doc` fails with duplicated rustdoc theme flag** — [#8847](https://github.com/zeroclaw-labs/zeroclaw/issues/8847)
  - Rust 1.96 treats the repo-level `default-theme` option as duplicated; CI/doc test breakage.

**Assessment:** The two highest-severity items (S0 webhook auth, S2 allowlist regression) both received same-day fix PRs from a maintainer — a strong signal of responsiveness. The S2 cost-lookup and stack-overflow bugs remain unaddressed.

## 6. Feature Requests & Roadmap Signals

Several RFCs are actively awaiting maintainer review and are strong candidates for upcoming releases:

- **OpenAI Chat Completions compatibility adapter** ([#8603](https://github.com/zeroclaw-labs/zeroclaw/issues/8603)) — likely candidate for next minor release given ecosystem demand.
- **Realtime speech-to-speech channel for Gemini Live** ([#8780](https://github.com/zeroclaw-labs/zeroclaw/issues/8780)) — backend-agnostic multimodal channel with native turn-taking.
- **Mixture-of-Agents (MoA) virtual provider** ([#8568](https://github.com/zeroclaw-labs/zeroclaw/issues/8568)) — judge/aggregator model atop parallel reference models.
- **Conversation memory separation** ([#9048](https://github.com/zeroclaw-labs/zeroclaw/issues/9048)) — decoupling session history from curated long-term memory.
- **OTel cross-turn correlation** ([#8933](https://github.com/zeroclaw-labs/zeroclaw/issues/8933)) — aligned with emerging GenAI OTel semantic conventions.

**Local-first roadmap (notable cluster):** [#5287](https://github.com/zeroclaw-labs/zeroclaw/issues/5287) (compact `local_small` profile) and [#7951](https://github.com/zeroclaw-labs/zeroclaw/issues/7951) (effort-based local/cloud routing) are both accepted with `no-stale` status — expect these to appear in a v0.9.x cycle.

**CI/tooling signals:** [#9545](https://github.com/zeroclaw-labs/zeroclaw/issues/9545) (gate rustdoc warnings) and [#9345](https://github.com/zeroclaw-labs/zeroclaw/issues/9345) (auto-recalculate PR risk/size labels) show the maintainers investing in developer experience and automation.

## 7. User Feedback Summary

Real user pain points expressed in this window:

- **WebChat auto-scroll makes history unreadable while streaming** ([#9562](https://github.com/zeroclaw-labs/zeroclaw/issues/9562)) — a v0.8.3 user on Arch Linux reports manual scroll is overridden during agent replies; references upstream fixes (openclaw#81629, #7648). This is a UX regression affecting practical use.
- **Local model prompt bloat and instruction leakage** ([#5287](https://github.com/zeroclaw-labs/zeroclaw/issues/5287), 👍 2) — users running small local models see internal tool/system instructions leak into visible output; demand for a compact prompt contract is real and endorsed.
- **Slack thread context missing on first mention** — PR [#8969](https://github.com/zeroclaw-labs/zeroclaw/pull/8969) addresses this by hydrating bounded thread history, signaling community demand for channel-context awareness.
- **WeChat messages silently dropped** — PR [#8968](https://github.com/zeroclaw-labs/zeroclaw/pull/8968) fixes iLink send failures being swallowed (HTTP 200 with non-zero `ret`); currently a **stale candidate**, needs author attention.
- **Confusing Ollama dev template config** — PR [#8953](https://github.com/zeroclaw-labs/zeroclaw/pull/8953) fixes the base URL being stored in `api_key`; also a **stale candidate**.
- **OpenAI-compatible provider think-tag mishandling** — PR [#8927](https://github.com/zeroclaw-labs/zeroclaw/pull/8927) fixes unconditional `strip_think_tags` breaking MiniMax reasoning content.

Overall sentiment: users appreciate the project's momentum but are hitting real friction in local-model workflows, channel integrations, and streaming UX. The maintainers' rapid security fixes are a positive counterweight.

## 8. Backlog Watch

Items needing maintainer attention or author action:

**RFCs awaiting maintainer review (all `needs-maintainer-review`):**
- [#9048](https://github.com/zeroclaw-labs/zeroclaw/issues/9048) — Conversation vs. long-term memory separation (12 comments, open since July 14)
- [#8603](https://github.com/zeroclaw-labs/zeroclaw/issues/8603) — OpenAI Chat Completions adapter (open since July 2)
- [#8933](https://github.com/zeroclaw-labs/zeroclaw/issues/8933) — OTel cross-turn correlation (open since July 10)
- [#8780](https://github.com/zeroclaw-labs/zeroclaw/issues/8780) — Gemini Live realtime channel (open since July 6)
- [#8568](https://github.com/zeroclaw-labs/zeroclaw/issues/8568) — MoA virtual provider (open since July 1)

**Oldest accepted features still unimplemented:**
- [#5287](https://github.com/zeroclaw-labs/zeroclaw/issues/5287) (created April 4, 2 👍) — `local_small` profile; accepted but no assignee/PR — oldest high-interest item.
- [#7951](https://github.com/zeroclaw-labs/zeroclaw/issues/7951) (created June 19) — effort-based local/cloud routing; only 1 comment despite being accepted.

**PRs stuck in `needs-author-action` (12 total) — highest risk of stalling:**
- [#8688](https://github.com/zeroclaw-labs/zeroclaw/pull/8688) — trusted goal tools and delegation boundaries (size XL, risk high, open since July 4)
- [#9410](https://github.com/zeroclaw-labs/zeroclaw/pull/9410) — default command audit logging to disabled (p1 security, risk high)
- [#9325](https://github.com/zeroclaw-labs/zeroclaw/pull/9325) — streamed user turns read as conversation (principal contributor)
- [#8927](https://github.com/zeroclaw-labs/zeroclaw/pull/8927), [#8928](https://github.com/zeroclaw-labs/zeroclaw/pull/8928), [#8937](https://github.com/zeroclaw-labs/zeroclaw/pull/8937), [#8953](https://github.com/zeroclaw-labs/zeroclaw/pull/8953), [#8968](https://github.com/zeroclaw-labs/zeroclaw/pull/8968) (stale candidate), [#8969](https://github.com/zeroclaw-labs/zeroclaw/pull/8969), [#8878](https://github.com/zeroclaw-labs/zeroclaw/pull/8878), [#8943](https://github.com/zeroclaw-labs/zeroclaw/pull/8943), [#9248](https://github.com/zeroclaw-labs/zeroclaw/pull/9248)

**Watch item:** Two PRs are flagged `stale-candidate` — the WeChat error-surfacing fix (#8968) and the Ollama dev-template fix (#8953) risk being closed for inactivity despite addressing real user pain.

---

*Digest generated from ZeroClaw GitHub activity data for 2026-07-31. Data reflects issues/PRs updated in the preceding 24 hours.*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/boom7sss/agents-radar).*