# OpenClaw Ecosystem Digest 2026-08-05

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-08-05 03:12 UTC

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

# OpenClaw Project Digest — 2026-08-05

## 1. Today's Overview

OpenClaw is in a high-intensity bug-fixing cycle: 500 issues and 500 PRs were updated in the last 24 hours, with 53 issues closed and 128 PRs merged/closed. No new releases were published in this window, which is notable given the volume of P0/P1 stability work in flight — fixes are being queued behind maintainer review and "needs proof" validation rather than shipped as a release. The dominant themes are delivery reliability (subagent completions, channel replies, Slack/Telegram outbound), migration robustness after minor-version upgrades, and resource-bound enforcement for realtime voice and gateway startup. Maintainer presence is strong, with numerous maintainer-labeled PRs from `steipete` and `vincentkoc` driving a production LOC-reduction campaign and expanded QA automation. Community engagement is heavy on a handful of diamond-lobster-severity regressions, most notably a 104-comment thread on DeepSeek v4 Flash silent reply failures.

## 2. Releases

No new releases in the last 24 hours. (The most recent reported version in issue data is 2026.7.2 `b4f01af`, with migration issues still being reported against it.)

## 3. Project Progress

The aggregate PR pipeline shows **128 merged/closed PRs** in the window (372 still open). Within the visible top-comment sample, the progress picture is dominated by open PRs awaiting proof, review, or author response — plus one same-day-merged refactor.

**Closed PRs (visible in sample):**
- [#119429 — refactor(plugins): consolidate lifecycle hook dispatch](https://github.com/openclaw/openclaw/pull/119429) — maintainer-driven cleanup that collapses 17 duplicated lifecycle hook dispatch wrappers; part of the project-wide LOC-reduction campaign. Created and closed same day.

**Closed issues signaling fixes landed or were triaged:**
- [#116277 — DeepSeek v4 Flash silent reply failure](https://github.com/openclaw/openclaw/issues/116277) (104 comments) — closed after a fix PR was linked.
- [#115326 — Crash-loop breaker permanently suppresses Discord/WhatsApp](https://github.com/openclaw/openclaw/issues/115326) — closed.
- [#52249 — ACP parent session stuck until refresh](https://github.com/openclaw/openclaw/issues/52249) — closed.
- [#77136 — WebChat fails to render some assistant messages](https://github.com/openclaw/openclaw/issues/77136) — closed.

**Fixes advancing through the open PR pipeline (high-value):**
- [#119402 — fix: unblock queued replies after repeated model requests](https://github.com/openclaw/openclaw/pull/119402) (closes #119009) — addresses a run loop that spends paid provider requests without producing semantic output.
- [#119127 — fix(media): keep the ttl sweep out of the managed outgoing tree](https://github.com/openclaw/openclaw/pull/119127) (fixes #119088) — prevents `attachments.ttlHours` from deleting the only original copy of chat-referenced generated media.
- [#119169 — fix(channels): treat `adapter_returned_no_identity` as potentially visible](https://github.com/openclaw/openclaw/pull/119169) — improves durable-delivery semantics to avoid treating possibly-delivered replies as unsent.
- [#119377 — fix(gateway): keep post-ready context cache warming responsive](https://github.com/openclaw/openclaw/pull/119377) (closes #119375) — prevents large model catalogs from making the gateway appear hung.
- [#119379 — fix(mcp): guard stdio stdout frame parsing against oversized-buffer crash](https://github.com/openclaw/openclaw/pull/119379) — prevents a >10 MiB MCP stdout frame from crashing the entire host process.
- [#118796 — fix(session): require a real context snapshot for CLI usage](https://github.com/openclaw/openclaw/pull/118796) — fixes `SessionEntry.totalTokens` accuracy for CLI-backed runs.

**Feature/refactor PRs in flight:**
- Slack UX consolidation: [#119376 (progress + final replies in one message)](https://github.com/openclaw/openclaw/pull/119376), [#119395 (recover Home/Assistant events after API failures)](https://github.com/openclaw/openclaw/pull/119395), [#119410 (hide progress for implicit thread replies)](https://github.com/openclaw/openclaw/pull/119410).
- macOS realtime Talk: [#119321 (realtime Talk relay)](https://github.com/openclaw/openclaw/pull/119321), [#118505 (Talk settings UI)](https://github.com/openclaw/openclaw/pull/118505).
- [#119358 — fix(clickclack): keep discussion rooms durable across session lifecycle](https://github.com/openclaw/openclaw/pull/119358).
- [#119374 — improve(xai): defer optional capability runtimes](https://github.com/openclaw/openclaw/pull/119374) — trims xAI plugin import cost at startup.
- Maintainer refactor wave: [#119438 (Telegram outbound consolidation)](https://github.com/openclaw/openclaw/pull/119438), [#119416 (media geometry normalization)](https://github.com/openclaw/openclaw/pull/119416).

## 4. Community Hot Topics

**Most-commented issues:**

- [#116277 — DeepSeek v4 Flash silent reply failure (104 comments, closed)](https://github.com/openclaw/openclaw/issues/116277) — P1 diamond-lobster: the model silently generates no reply; OpenClaw posts a generic fallback ("No reply was generated for this message"). The 104-comment engagement reflects how damaging silent message loss is for users in active Telegram groups.
- [#116201 — Realtime voice retains unbounded provider and consult state (58 comments, open)](https://github.com/openclaw/openclaw/issues/116201) — P1 diamond-lobster: realtime voice sessions have no hard ownership bounds, so slow/bursty provider behavior can retain superseded consult work, large frames, and pre-ready audio.
- [#115326 — Crash-loop breaker permanently suppresses Discord/WhatsApp; documented recovery fails with WebSocket 1006 (25 comments, closed)](https://github.com/openclaw/openclaw/issues/115326) — P1: a safety breaker becomes a permanent outage with no working recovery path.
- [#44925 — Subagent completion silently lost (23 comments, open)](https://github.com/openclaw/openclaw/issues/44925) — P1, open since March: three distinct failure modes where subagent results vanish without retry or notification.
- [#48788 — Centralized filename encoding utility (20 comments, open)](https://github.com/openclaw/openclaw/issues/48788) — architectural follow-up to a Feishu filename fix; users want a cross-channel solution for Shift-JIS/EUC-KR/GB18030.

**Most-reacted issues (👍 signals):**
- [#42840 — MathJax/LaTeX support in Control UI](https://github.com/openclaw/openclaw/issues/42840) — 10 👍, the strongest positive demand signal in the dataset.
- [#91363 — Isolated cron consistently fails with "LLM request failed"](https://github.com/openclaw/openclaw/issues/91363) — 6 👍, P1, open since June with recovery stuck.
- [#45508 — Self-hosted STT/TTS in webchat](https://github.com/openclaw/openclaw/issues/45508) — 2 👍; [#89278 — Codex OAuth timeout](https://github.com/openclaw/openclaw/issues/89278) — 2 👍.

**Underlying needs:** the hot threads converge on one core demand — *the system must never silently lose a user-visible message or a completed subagent result* — plus a secondary demand for operational resilience: breakers must self-recover, migrations must not brick gateways, and resource growth must be bounded.

## 5. Bugs & Stability

**P0 (release-blocking class):**
- [#112395 — Startup migration preflight blocks gateway after 6.11 → 7.1 upgrade; migration tables and leases empty](https://github.com/openclaw/openclaw/issues/112395) — P0, diamond-lobster, `maturity:stable`, recovery stuck, linked fix PR open. Upgrade from 2026.6.11 to 2026.7.1 never starts; state DB appears healthy but empty.

**P1 (high-severity):**
- **Subagent completion delivery (recurring theme, 3 issues):** [#44925](https://github.com/openclaw/openclaw/issues/44925) (silent loss on announce failure E31/E42/E45), [#67777](https://github.com/openclaw/openclaw/issues/67777) (loss on direct-announce timeout, drain, orphan prune), [#92433](https://github.com/openclaw/openclaw/issues/92433) (loss when announce steers into a requester run that ends first). All diamond-lobster, all awaiting maintainer review/product decision, all open for months.
- [#118846 — Gateway main thread pegged at 100% from boot by plugin-metadata snapshot + fs statting; local RPC dies with 1006](https://github.com/openclaw/openclaw/issues/118846) — starves the accept loop, crash-loop impact.
- [#115908 — Session transcript projection reconcile livelocks under sustained writes, stalling all transports](https://github.com/openclaw/openclaw/issues/115908) — synchronous rebuild path blocks the Node main thread for tens of seconds.
- [#116277 — DeepSeek v4 Flash silent reply failure (closed)](https://github.com/openclaw/openclaw/issues/116277) — fallback message posted, no reply generated; fix PR linked.
- [#111498 — Main agent blocked by persistent legacy workspace-state migration after Anthropic auth recovery](https://github.com/openclaw/openclaw/issues/111498) — probes stop at migration even though credentials are effective; recovery stuck.
- [#119263 — Agent DB v14→v15 migration fails: `no such column: entry_valid`; gateway refuses to start](https://github.com/openclaw/openclaw/issues/119263) — reported against 2026.7.2; `doctor --fix` cannot recover; linked PR open.
- [#91363 — Isolated cron always fails at model-call-started phase; usage.input=0](https://github.com/openclaw/openclaw/issues/91363) — affects all `sessionTarget:"isolated"` jobs regardless of timeout; 6 👍; recovery stuck.
- [#117609 — Transient LLM/socket errors not retried at embedded-assistant stage; long turns die whole](https://github.com/openclaw/openclaw/issues/117609).
- [#115700 — `chat.send` rejected with "thread switched branches" after model completes; stale `expectedLeafEntryId`](https://github.com/openclaw/openclaw/issues/115700) — persistent rejection after retry/fallback/compaction; linked PR open.
- [#116010 — All persistent sessions capped at 128k context regardless of model or `contextTokens`](https://github.com/openclaw/openclaw/issues/116010) — linked PR open.
- [#115326 — Crash-loop breaker suppresses Discord/WhatsApp permanently (closed)](https://github.com/openclaw/openclaw/issues/115326) — recovery path `channels.start` failed with WebSocket 1006.
- [#114690 — Successful Discord source reply can be sent again after native Codex compaction in same turn](https://github.com/openclaw/openclaw/issues/114690) — duplicate-message risk.
- [#115642 — Billing cooldown (5h `disabledUntil`) outlives provider outage; no probe-based recovery or manual reset](https://github.com/openclaw/openclaw/issues/115642).
- [#75380 — `provider-payload.jsonl` and `cache-trace.jsonl` grow unbounded with no rotation policy](https://github.com/openclaw/openclaw/issues/75380) — ops/security impact.
- [#97616 — OpenClaw leaks unreaped hook/tool child processes; zombie accumulation degrades runtime](https://github.com/openclaw/openclaw/issues/97616) — regression, crashes reported in #115326 context.

**Observability note:** a large fraction of unresolved P1s carry the `clawsweeper-recovery-stuck` label — the automated repro/verification loop is itself stuck on issues like #112395, #91363, #111498, #92433, #44925, and #75380, which is itself a project-health concern.

## 6. Feature Requests & Roadmap Signals

**Strong demand (high reactions or comments):**
- [#42840 — MathJax/LaTeX rendering in Control UI](https://github.com/openclaw/openclaw/issues/42840) — 10 👍, P2, needs product decision since March. Strongest community want; plausible for a future UI release.
- [#48788 — Centralized multi-encoding filename utility for Content-Disposition](https://github.com/openclaw/openclaw/issues/48788) — 20 comments, P3 but architecturally "proper fix" per maintainers.
- [#45508 — Route webchat TTS/STT through the gateway instead of browser Speech API](https://github.com/openclaw/openclaw/issues/45508) — P2, would make self-hosted voice setups work in webchat.
- [#44431 — Browser tool: 7 field-test improvements (CSS selector support, etc.)](https://github.com/openclaw/openclaw/issues/44431) — P2 from 9+ provider signup automation.
- [#44395 — Heading-aware chunking + entity extraction for memory search](https://github.com/openclaw/openclaw/issues/44395) — P2 memory quality improvement.
- [#9016 — Expose OpenRouter usage cost to agent runtime](https://github.com/openclaw/openclaw/issues/9016) — P2, open since Feb, needs maintainer review.

**Structural/RFC items:**
- [#71736 — RFC: Control UI plugin contribution slots](https://github.com/openclaw/openclaw/issues/71736) — proposed SDK surface for chat modes, approval cards, input guards; currently needs security review + product decision.
- [#44289 — Generate secretref reference docs from target registry metadata](https://github.com/openclaw/openclaw/issues/44289) — diamond-lobster, `fix-shape-clear`, `queueable-fix` — looks ripe to pick up.
- [#79168 — Content-based prompt injection scanning on tool output](https://github.com/openclaw/openclaw/issues/79168) — security feature, P2, needs security review.
- [#44294 — Preserve structured ACP backend error kinds instead of mapping all errors to `end_turn`](https://github.com/openclaw/openclaw/issues/44294).

**Roadmap prediction:** the next release is likely to land the Slate of already-proofed maintainer PRs — Slack message UX consolidation (#119376/#119395/#119410), macOS realtime Talk (Talk relay + settings), xAI startup-time optimization (#119374), and the ClickClack session-decoupling fix (#119358). Community feature PRs are more likely to appear in the release after, pending product decisions on YAML config (#45758), configurable `/new` startup prompt (#45501), and the browser-tool field-test bundle (#44431).

## 7. User Feedback Summary

Real pain points reported in the last 24h window:

- **Silent loss is the #1 trust killer.** Users describe subagent results vanishing "without retry, notification, or auto-restart," DeepSeek replies replaced by generic fallbacks, and WebChat turns disappearing while TUI still shows the transcript.
- **Upgrades are the most dangerous operation.** Multiple reports of breakage at version boundaries: 6.11→7.1 (P0 preflight block), 7.1→7.2 (DB v14→v15 `entry_valid` failure), plus the older workspace-state migration block. Users infer "state DB healthy but empty" and lose confidence in `doctor --fix`.
- **Breakers and cooldowns turn outages into penalties.** Crash-loop breakers suppressing channels permanently, billing cooldowns outliving the actual provider outage, and auth profiles stuck in refresh timeouts — users feel punished after transient external failures.
- **Resource problems degrade entire hosts.** A pegged main thread from plugin-metadata statting, zombie child-process accumulation, unbounded JSONL logs, and 128k context caps regardless of model — all reported as slow degradation that eventually stalls everything.
- **Frustration with "works on my machine" memory behavior.** The #43747 "memory management is in chaos" thread shows three colleagues with three different memory backends and no shared model of how memory is supposed to behave.
- **Positive signals:** maintainer-labeled PRs and QA-lab expansions indicate active investment in regression coverage, and several high-profile issues (#116277, #115326, #77136) did close within the window — users' reports are being processed, even if slowly.

## 8. Backlog Watch

Long-unanswered or stuck items most needing maintainer attention:

- [#112395 — P0 migration preflight blocks gateway (Jul 21, diamond-lobster, stable, recovery stuck, linked PR open)](https://github.com/openclaw/openclaw/issues/112395) — highest-priority backlog item; an open P0 with a linked PR that has not yet landed.
- [#44925 — P1 subagent completion silently lost (Mar 13, diamond-lobster, needs maintainer review + product decision)](https://github.com/openclaw/openclaw/issues/44925) — three months old and still the canonical silent-loss issue; the adjacent #67777 and #92433 are also waiting.
- [#91363 — P1 isolated cron always fails at model-call-started (Jun 8, 6 👍, recovery stuck)](https://github.com/openclaw/openclaw/issues/91363) — long-standing functional outage for cron automation users.
- [#9016 — OpenRouter cost exposure (Feb 4, P2, needs maintainer review)](https://github.com/openclaw/openclaw/issues/9016) — the oldest item in the sample, open for six months.
- [#42840 — MathJax/LaTeX in Control UI (Mar 11, 10 👍, needs product decision)](https://github.com/openclaw/openclaw/issues/42840) — the most-upvoted open feature request with no maintainer response visible.
- [#75380 — Unbounded `provider-payload.jsonl` / `cache-trace.jsonl` (May 1, P1, security review, recovery stuck)](https://github.com/openclaw/openclaw/issues/75380) — silent disk-growth risk on long-running gateways.
- [#97616 — Zombie child-process leak (Jun 29, P1, recovery stuck)](https://github.com/openclaw/openclaw/issues/97616) — runtime degradation tied to hook/tool execution.
- [#79168 — Content-based prompt injection scanning (May 8, security, needs security review + live repro)](https://github.com/openclaw/openclaw/issues/79168) — security item awaiting an owner.
- [#71736 — RFC Control UI plugin contribution slots (Apr 25)](https://github.com/openclaw/openclaw/issues/71736) — proposed SDK surface awaiting product direction; important for the plugin ecosystem roadmap.

**Overall health assessment:** OpenClaw is processing an unusually large bug load with strong maintainer activity and a disciplined PR pipeline (proof/QA gates, autofix bots, maintenance campaigns), but the volume of P0/P1 issues carrying `recovery-stuck` and `needs-product-decision` labels — some open for 3–5 months — indicates triage capacity is the bottleneck. The most urgent systemic risk is migration reliability, followed by the unresolved subagent-delivery loss cluster.

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report — Personal AI Assistant / Agent OSS Ecosystem
**Data window:** 2026-08-05 | **Projects:** 13 tracked

---

## 1. Ecosystem Overview

The personal AI assistant open-source landscape is consolidating around a "Claw-style" gateway architecture — a core agent runtime with multi-channel connectors (Slack, Telegram, Discord, WhatsApp, web chat), tool/MCP integration, and plugin systems — with OpenClaw serving as the reference implementation and a long tail of derivatives and independent projects iterating on it. The field has decisively shifted from feature expansion to **hardening**: the dominant work across the busiest projects is delivery reliability, migration safety, security isolation, and cost/prompt-cache observability. Community expectations are converging on a non-negotiable baseline: the system must never silently lose a user-visible message, a subagent result, or a tool outcome. Notably, several projects are backed by significant organizations (Nous Research, Near AI, NetEase Youdao, HKUDS, AgentScope/Qwen), indicating that personal-agent infrastructure is becoming strategically important beyond the hobbyist community.

---

## 2. Activity Comparison

| Project | Issues updated (closed) | PRs updated (merged/closed) | Release status | Health score (1–10) |
|---|---|---|---|---|
| **OpenClaw** | 500 (53) | 500 (128) | None; 2026.7.2 latest | **7** — massive activity, disciplined pipeline, but many P0/P1s stuck in `recovery-stuck` |
| **NanoBot** | 5 (1) | 26 (19) | None; release-prep | **8** — highest merge ratio (73%), security issue open |
| **Hermes Agent** | 50 (3) | 50 (2) | None | **5** — high churn, 4% merge ratio, maintainer-review bottleneck |
| **IronClaw** | 50 (12) | 50 (17) | None; v1.1.0-rc hardening | **8** — release-blocker fixes landing fast, strong CI enforcement |
| **ZeroClaw** | 42 (1) | 50 (2) | None; v0.9.0 targeting | **6** — very active RFC culture, but 3 accepted S0/S1 security bugs unfixed |
| **CoPaw** | 29 (12) | 47 (19) | None; v2.1.0-beta.1 | **7** — high throughput, beta regressions in desktop/browser |
| **LobsterAI** | n/a | 15 (10) | `release/2026.8.3` merged to main | **7** — steady polish cycle; open key-leak security issue |
| **PicoClaw** | 3 (0) | 4 (0 merged; 2 stale-closed) | None | **4** — low activity; important fixes closed stale |
| **NanoClaw** | 0 (0) | 5 (1) | None | **6** — quiet but healthy; Discord approval fix pending |
| **NullClaw** | 0 (0) | 1 (0) | None | **5** — stable; one feature PR awaiting review |
| **Moltis** | 0 (0) | 1 (0) | None | **3** — effectively dormant |
| **TinyClaw** | 0 (0) | 0 (0) | None | **3** — no activity |
| **ZeptoClaw** | 0 (0) | 0 (0) | None | **3** — no activity |

**Merge-velocity ranking (PRs merged/closed ÷ updated):** NanoBot 73% → CoPaw 40% → IronClaw 34% → OpenClaw 26% → Hermes 4% → ZeroClaw 4%. The last two are blocked primarily by maintainer bandwidth, not contributor output.

---

## 3. OpenClaw's Position

**Advantages vs. peers:** OpenClaw's community is an order of magnitude larger than the next tier (500 issues + 500 PRs updated in 24h vs. ~50/50 for IronClaw, ZeroClaw, and Hermes). It is the de-facto reference architecture — its plugin lifecycle hooks, ACP (Agent Client Protocol) support, and channel abstraction are being replicated across the ecosystem. Maintainer presence is unusually strong (`steipete`, `vincentkoc`), with a production LOC-reduction campaign and expanded QA automation driving a disciplined proof/QA-gated pipeline. It also has the broadest channel coverage, including Slack/Telegram/Discord/WhatsApp/Feishu, realtime voice, and WebChat.

**Technical approach differences:** OpenClaw prioritizes breadth and plugin-lifecycle standardization, absorbing complexity into a large gateway runtime. In contrast, IronClaw (Rust/WASM sandboxing, architecture-enforcement CI) and ZeroClaw (Rust, RFC-driven design, OpenAI-protocol compatibility) favor stricter boundaries and smaller cores.

**Community size comparison:** OpenClaw's 104-comment threads on a single P1 regression exceed the total issue activity of PicoClaw, NanoClaw, NullClaw, Moltis, TinyClaw, and ZeptoClaw combined for the entire window.

**Key risk:** the sheer bug volume is outpacing triage — a large fraction of P1s carry `clawsweeper-recovery-stuck` and `needs-product-decision` labels, with one P0 migration issue open since July 21 despite a linked PR.

---

## 4. Shared Technical Focus Areas

Requirements emerging independently across multiple projects:

| Focus area | Projects | Specific needs |
|---|---|---|
| **Zero silent loss / delivery guarantees** | OpenClaw, Hermes, CoPaw, NanoBot, ZeroClaw | Subagent completions must survive announce failures (OpenClaw #44925/#67777/#92433); rejected media must be visible to the model (Hermes #78932); approval prompts must render on non-Web channels (CoPaw #6655/#6695); context-exhaustion must produce a terminal notice (ZeroClaw #9504); MCP error envelopes must be relayed to the LLM (NanoBot #5237) |
| **Migration & upgrade safety** | OpenClaw, IronClaw, ZeroClaw | Lossless startup migrations (OpenClaw #112395/#119263; IronClaw #7178/#7198); retry-safe session migration (ZeroClaw #9715). Upgrades are now the single most feared operation |
| **Credential security & isolation** | NanoBot, LobsterAI, ZeroClaw | Provider API keys leaked via global env mutation (NanoBot #4784); agent discloses model keys under prompt injection (LobsterAI #1202); fail-closed webhook auth (ZeroClaw #9565); per-agent knowledge/session ownership (ZeroClaw #9647/#9646) |
| **Provider/cost observability** | OpenClaw, PicoClaw, CoPaw, Hermes, LobsterAI | Prompt-cache token logging (PicoClaw #3317); OpenRouter cost exposure (OpenClaw #9016); `prompt_cache_key` continuity (CoPaw #6649, Hermes #79017); unbounded usage log growth (OpenClaw #75380) |
| **MCP / tool-call robustness** | NanoBot, PicoClaw, ZeroClaw | MCP failures must not hang the agent loop (PicoClaw #3269); non-standard tool-call envelopes must be parsed (ZeroClaw #9723/#9477); business-level MCP errors should trigger retry (NanoBot #5237) |
| **Cron reliability** | OpenClaw, Hermes, CoPaw, ZeroClaw | Isolated cron failures (OpenClaw #91363); state persistence across restarts (CoPaw #6690); lock-release timeouts (ZeroClaw #9320); reasoning-model stale timeouts (Hermes #78862) |
| **Memory/context budget management** | OpenClaw, CoPaw, Hermes, ZeroClaw | Skill descriptions consuming 25–30% of system prompt (CoPaw #6699); per-project memory isolation (Hermes #16833); persistent context caps (OpenClaw #116010); token accounting on history trims (ZeroClaw #9713) |
| **WebUI long-session performance** | PicoClaw, ZeroClaw | Input lag scaling with history length (PicoClaw #3281); full-history re-renders (ZeroClaw #9317) |
| **Windows desktop reliability** | Hermes, IronClaw, CoPaw, LobsterAI | Update hangs (Hermes #79040); `icacls` stdout pollution (IronClaw #7200); `PYTHONHOME` injection breaking subprocesses (CoPaw #6697); installer reliability (LobsterAI) |

---

## 5. Differentiation Analysis

| Project | Distinctive focus | Target users | Architecture signature |
|---|---|---|---|
| **OpenClaw** | Breadth-first reference gateway; max channel/plugin coverage | Power users, self-hosters, developers | Large Node-based runtime, lifecycle-hook standardization, ACP |
| **IronClaw** | Engineering rigor: WASM sandbox, CI enforcement ratchets, error-recoverability epics | Enterprise/capability-focused teams | Rust, WASM tool sandbox, hermetic test platform |
| **ZeroClaw** | RFC-driven design; security architecture (v0.9.0); OpenAI-protocol compatibility | Open WebUI/LobeChat/Aider users, security-conscious ops | Rust, goal mode, runtime-owned sessions, A2A client |
| **CoPaw** | Desktop-first UX; Qwen/AgentScope ecosystem | Desktop agent users, WeChat/iLink channel users | Python, desktop app, credit-reward campaigns |
| **Hermes Agent** | Plugin API expansion; distributed orchestrator ambition | Plugin contributors, Windows desktop users, multi-device setups | Hook taxonomy, P2P federation RFC, Remote-Brain↔Local-Nodes RFC |
| **NanoBot** | WebUI polish and contributor DX | Multi-channel teams (Mattermost, WeCom, Telegram, Matrix) | Python, WebUI dev-mode HMR, trusted-proxy auth |
| **LobsterAI** | Consumer desktop experience; credit/reward mechanics | End-users on desktop | Electron-class desktop app, campaign analytics |
| **PicoClaw / NanoClaw / NullClaw** | Small-footprint OpenClaw variants; niche providers | Hobbyists, embedded/lightweight use | Provider add-ons (Exa, Dial, Grok CLI) |

The clearest strategic split: **OpenClaw, CoPaw, and NanoBot compete on breadth and UX polish**; **IronClaw and ZeroClaw compete on architectural discipline and security**; **Hermes is betting on plugin-ecosystem and federation**; **LobsterAI is pursuing consumer monetization via credit campaigns**.

---

## 6. Community Momentum & Maturity

**Tier 1 — High velocity, release-hardening:** **OpenClaw** (128 merges/24h, strong maintainers), **IronClaw** (17 merges, actively closing release blockers for v1.1.0-rc.1), **CoPaw** (19 merges, fixing v2.1.0-beta.1 regressions). These are executing at production scale.

**Tier 2 — Steady, feature-defined:** **NanoBot** (excellent merge hygiene, release-prep), **ZeroClaw** (high RFC engagement but execution gated on maintainer decisions), **Hermes** (high contributor churn, low merge throughput), **LobsterAI** (steady polish, release branch merged to main).

**Tier 3 — Low activity / maintenance:** **PicoClaw** (fixes being closed stale — a warning sign), **NanoClaw** (quiet but productive), **NullClaw** (single pending PR), **Moltis** (near-dormant).

**Tier 4 — Inactive:** **TinyClaw**, **ZeptoClaw** (zero activity in the window).

**Maturity signal:** the most mature projects (OpenClaw, IronClaw, NanoBot) are investing in regression-proofing infrastructure — QA labs, sabotage-tested CI gates, and proof-before-merge policies — while younger projects (PicoClaw, NullClaw) still risk losing contributor value to stale closures.

---

## 7. Trend Signals

1. **"Never silently lose a message" is the industry baseline.** Subagent/announce failures, invisible approval prompts, and silent media rejections are the most emotionally charged issues across OpenClaw, CoPaw, Hermes, and NanoBot. Expect delivery receipts and structured error surfacing to become default features, not differentiators.

2. **Security is shifting from injection defense to isolation-by-architecture.** The coincidence of NanoBot's key-leakage issue, LobsterAI's key-disclosure bug, and ZeroClaw's fail-open webhooks / missing per-agent ownership scoping indicates the next security frontier is **credential scoping and multi-agent tenant isolation**.

3. **OpenAI-protocol compatibility is becoming the integration currency.** ZeroClaw's most-active RFC (#8603, 16 comments) treats Chat Completions compatibility as the way to plug into Open WebUI/LobeChat/Aider/LangChain. The ecosystem is converging on a common wire protocol to avoid writing channel adapters.

4. **Cost and prompt-cache observability are demand-validated.** Independent requests for cache-token logging (PicoClaw), cost exposure (OpenClaw), and cache-key continuity (CoPaw, Hermes) confirm operators now treat token economics as first-class telemetry.

5. **MCP reliability is the new critical dependency.** Agent loops hanging on MCP failures (PicoClaw, NanoBot) and non-standard tool-call envelope parsing (ZeroClaw) show that as agents lean harder on external tools, tool-protocol robustness determines real-world uptime.

6. **Windows desktop is the weak flank.** Update hangs, broken status detection, subprocess environment pollution, and installer issues recur across Hermes, IronClaw, CoPaw, and LobsterAI — Windows support is maturing last, and users notice.

7. **Value for developers:** build delivery guarantees and migration safety into the core before adding features; expose token/cache metrics early; treat maintainer-review latency as a project-health metric — the strongest communities in this window (NanoBot, IronClaw) are precisely those with the shortest path from PR to merge.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

## NanoBot Project Digest — 2026-08-05

### 1. Today's Overview

NanoBot is in a high-velocity stabilization and polish cycle: 26 PRs were updated in the last 24 hours, with 19 merged/closed and 7 still open, alongside 5 issues updated (4 open, 1 closed). The merged work is heavily weighted toward WebUI refinements and channel-specific bug fixes, indicating a release-prep phase rather than new feature expansion. No new releases were cut during this window. Security and correctness issues remain the most active community discussion points, especially around provider API key isolation and MCP error handling.

### 2. Releases

No new releases were published in this window.

---

### 3. Project Progress

The majority of merged/closed PRs landed in **WebUI** and **channel integrations**, with a few security/developer-experience improvements.

**WebUI / UX**
- [#5250](https://github.com/HKUDS/nanobot/pull/5250) — Direction-aware feathering for clipped agent activity edges, keeping the latest activity row visible during auto-follow.
- [#5244](https://github.com/HKUDS/nanobot/pull/5244) — Markdown rendering in prompt-rail hover previews for assistant answers.
- [#5245](https://github.com/HKUDS/nanobot/pull/5245) — Unified timestamp tooltip styles and improved keyboard accessibility.
- [#5243](https://github.com/HKUDS/nanobot/pull/5243) — Automation trigger marker moved to the footer, aligned with timestamp typography.
- [#5241](https://github.com/HKUDS/nanobot/pull/5241) — Refined inline token highlights for commands, mentions, and skills.
- [#5240](https://github.com/HKUDS/nanobot/pull/5240) — Centralized floating-surface styling across menus, popovers, and comboboxes.
- [#5239](https://github.com/HKUDS/nanobot/pull/5239) — Integrated Vite dev mode (`nanobot webui --dev`) with HMR and sidecar cleanup for contributors.
- [#5242](https://github.com/HKUDS/nanobot/pull/5242) — Slash commands now reject malformed/unknown input instead of forwarding to the LLM.

**Channels**
- [#5233](https://github.com/HKUDS/nanobot/pull/5233) — Mattermost: added `groupPolicyInThread` config and WebUI exposure for separate thread mention policies.
- [#5223](https://github.com/HKUDS/nanobot/pull/5223) — WeCom: fallback when filename sanitization strips everything, preventing directory-targeted writes.
- [#5222](https://github.com/HKUDS/nanobot/pull/5222) — Telegram: preserved fenced code blocks when language tags contain special characters (e.g. `c++`).
- [#1776](https://github.com/HKUDS/nanobot/pull/1776) — Telegram: added missing `group_mode` config field to the Pydantic schema.

**Security / Access**
- [#5210](https://github.com/HKUDS/nanobot/pull/5210) — WebUI: opted-in trusted reverse-proxy bootstrap auth supporting IPv4/IPv6 CIDRs.
- [#5238](https://github.com/HKUDS/nanobot/pull/5238) — Session: removed request-scoped access grants layer, reverting a prior authorization complexity regression.

---

### 4. Community Hot Topics

The most discussed items are issues rather than PRs, since most PRs currently have no comment threads:

- [#4784](https://github.com/HKUDS/nanobot/issues/4784) — **Security: Provider API keys leaked between providers via global os.environ mutation** (2 comments). This is the longest-running open issue updated in this window. The core concern is that provider-specific API keys overwrite global environment variables, potentially exposing keys across providers in gateway setups. The two comments suggest ongoing discussion about scoping and isolation.

- [#5235](https://github.com/HKUDS/nanobot/issues/5235) — **Anthropic Opus 5 rejected because omit_temperature list is outdated** (1 comment). Users are actively hitting the temperature deprecation with the newly released `claude-opus-5`; the issue was closed, likely after a fix, but the discussion indicates real-world deployment friction.

- [#5237](https://github.com/HKUDS/nanobot/issues/5237) — **MCP tool “data not found” envelope is ignored; agent waits for timeout** (1 comment). The MCP tool-result contract treats business-level error envelopes as success, preventing the LLM from retrying or recovering. This is a reliability pain point for agent autonomy.

- [#5247](https://github.com/HKUDS/nanobot/issues/5247) — **Matrix bot does not auto-join rooms on Continuwuity** (0 comments, but linked to a fix PR). Users want matrix room invitations to work seamlessly across homeserver implementations.

---

### 5. Bugs & Stability

Ranked by severity:

1. **Security / API Key Leakage** — [#4784](https://github.com/HKUDS/nanobot/issues/4784) *(open)*  
   Global `os.environ` mutation can leak or overwrite provider API keys. No fix PR is attached yet; needs maintainer attention.

2. **MCP Business Error Envelope Handling** — [#5237](https://github.com/HKUDS/nanobot/issues/5237) *(open)*  
   `isError=false` with an error envelope in `CallToolResult.content` makes the agent proceed incorrectly and eventually hit `tool_timeout`. This breaks tool-based workflows.

3. **Anthropic Opus 5 Rejection** — [#5235](https://github.com/HKUDS/nanobot/issues/5235) *(closed)*  
   The `omit_temperature` substring list did not include `"opus-5"`, so requests included a deprecated parameter and were rejected. Closed as fixed in the window.

4. **Matrix Auto-Join Fails on Continuwuity** — [#5247](https://github.com/HKUDS/nanobot/issues/5247) *(open)*  
   Empty POST body from `nio.Api.join()` causes homeserver rejection. Fix PR [#5248](https://github.com/HKUDS/nanobot/pull/5248) is open and pending review.

5. **Memory Workspace `.gitignore` Exclusion** — [#5246](https://github.com/HKUDS/nanobot/issues/5246) *(open)*  
   Scaffolded `.gitignore` leaves `memory/.cursor` and `memory/history.jsonl` untracked, which can lead to loss or confusion in versioned workspaces.

Additionally, several merged bug-fix PRs addressed Telegram formatting, WeCom filename handling, and WebUI rendering/tooltip issues — all low-risk, stability-oriented fixes.

---

### 6. Feature Requests & Roadmap Signals

Open PRs and issues point to the following likely next-version features:

- **MST (Meta-Search Tool) provider** — [#5234](https://github.com/HKUDS/nanobot/pull/5234) *(open, p1)*  
  Aggregates results from multiple search engines with Reciprocal Rank Fusion, offering richer coverage for agent web search.

- **Telegram custom Bot API base URL and extra headers** — [#4919](https://github.com/HKUDS/nanobot/pull/4919) *(open, p2)*  
  Enables self-hosted Bot API servers and enterprise gateways. Open since July 14 — a strong candidate for merge after rebase.

- **Quick Chat and Temporary Chat** — [#5184](https://github.com/HKUDS/nanobot/pull/5184) *(open, currently in conflict)*  
  Adds persistent Quick Chat with one stable session identity and ephemeral Temporary Chat with connection-owned memory.

- **Trusted proxy bootstrap auth** — [#5210](https://github.com/HKUDS/nanobot/pull/5210) *(merged)*  
  Already landed; will enable Cloudflare Tunnel/Access deployments for WebUI.

- **WebUI contributor dev mode** — [#5239](https://github.com/HKUDS/nanobot/pull/5239) *(merged)*  
  Signals a push toward making the WebUI easier to contribute to.

- **Mattermost thread group policy** — [#5233](https://github.com/HKUDS/nanobot/pull/5233) *(merged)*  
  Now allows separate mention policy in threads vs. channels.

Next minor release will likely bundle the merged WebUI/UX refinements, the Mattermost and WeCom/Telegram fixes, plus the trusted proxy auth. The open p1 provider features (`mst-python`, Telegram API base) may land if maintainers resolve conflicts and review them soon.

---

### 7. User Feedback Summary

Recurring user pain points from issues and PRs this window:

- **Provider API key isolation** is a top concern. Users expect keys to remain scoped to their provider, not leaked through the global environment.
- **LLM-facing tool errors** need to be structured and communicated back to the model; opaque MCP envelopes cause real workflow failures.
- **Channel integration edge cases** (Matrix homeserver quirks, Telegram formatting, WeCom filenames) show active use across diverse platforms, with users relying on NanoBot as a professional-grade multi-channel assistant.
- **WebUI polish** is highly valued. Contributors are submitting steady, small UI fixes, indicating a receptive core team and an active frontend community.
- **Long-standing feature requests** (Telegram custom API base, Quick Chat) continue to be desired by the community; the backlog is getting crowded.

---

### 8. Backlog Watch

Items needing maintainer attention:

- [#4784](https://github.com/HKUDS/nanobot/issues/4784) — **Provider API key leakage** *(open since 2026-07-06)*. Security-sensitive; no fix PR attached after a month.
- [#4919](https://github.com/HKUDS/nanobot/pull/4919) — **Telegram custom Bot API base URL** *(open since 2026-07-14)*. Fully implemented, awaiting review/merge; conflict-free for at least 3 weeks.
- [#5156](https://github.com/HKUDS/nanobot/pull/5156) — **Telegram silent polling stall recovery** *(open since 2026-07-29)*. Production reliability fix for an issue that causes permanent bot silence.
- [#5184](https://github.com/HKUDS/nanobot/pull/5184) — **Quick Chat / Temporary Chat** *(open since 2026-07-30, marked with conflict)*. A major WebUI feature; needs conflict resolution and maintainer review.
- [#5234](https://github.com/HKUDS/nanobot/pull/5234) — **mst-python metasearch provider** *(open, p1)*. New provider requested by the community; no comments or maintainer activity yet.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-08-05

## 1. Today's Overview

Hermes Agent saw high churn over the last 24 hours: 50 issues were updated (47 open, 3 closed), 50 PRs were updated (48 open, 2 merged/closed), and no new release was published. The busiest discussions remain centered on plugin-interface expansion and hook-lifecycle standardization (#64182, #64231), while new bug reports skew toward P2 regressions in Windows, gateway startup, cron, and streaming reliability. A new P0 prompt-cache continuity issue (#79017) was filed, along with an ambitious RFC for a distributed orchestrator architecture (#79042). Overall, the project is active and contributor-friendly, but the large open PR queue and numerous "needs-decision" labels suggest a maintainer-review bottleneck.

## 2. Releases

No new releases in the last 24 hours. No breaking changes or migration notes to report.

## 3. Project Progress

- **Merged/closed PRs today:** 2 PRs moved to merged/closed state. The visible one is:
  - [#66076 fix(tui): hide npm console window during TUI dependency install on Windows](https://github.com/NousResearch/hermes-agent/pull/66076) — closes a Windows UX bug where the TUI dependency install opened a visible npm console window.

- **Closed issues today:**
  - [#18594 get_hermes_home() silently falls back to ~/.hermes and causes cross-profile data corruption](https://github.com/NousResearch/hermes-agent/issues/18594) — P1 closed.
  - [#50747 Feishu adapter fails on container rebuild but docker restart fixes it](https://github.com/NousResearch/hermes-agent/issues/50747) — P2 closed.
  - [#73599 Dashboard tab open before gateway restart becomes silently dead](https://github.com/NousResearch/hermes-agent/issues/73599) — P3 closed.

- **Notable open-PR activity:** many long-running PRs were refreshed today, including Windows test-suite fixes ([#74300](https://github.com/NousResearch/hermes-agent/pull/74300)), gateway PYTHONPATH leak fixes ([#57470](https://github.com/NousResearch/hermes-agent/pull/57470), [#79046](https://github.com/NousResearch/hermes-agent/pull/79046)), Feishu withdrawn-message handling ([#52076](https://github.com/NousResearch/hermes-agent/pull/52076)), and the large zyz-contributed batch touching cron, skills, fallback cooldowns, and desktop fixes.

## 4. Community Hot Topics

- [#64182 Tracking: Plugin Interface Expansion — community ideas](https://github.com/NousResearch/hermes-agent/issues/64182) — **21 comments**. The longest-running roadmap thread, collecting community plugin API ideas and queued contributor PRs.
- [#64231 chore(plugins): lifecycle-event catalog, hook taxonomy, and batch disposition of pending hook PRs](https://github.com/NousResearch/hermes-agent/issues/64231) — **17 comments**, `needs-decision`. Maintainers are trying to avoid merging a dozen one-off `VALID_HOOKS` additions without a coherent standard.
- [#46199 [Setup][Windows Desktop] Request for supported portable / isolated deployment guidance](https://github.com/NousResearch/hermes-agent/issues/46199) — **7 comments, 2 👍**. Security-conscious Windows users need an officially supported minimal-footprint install path.
- [#75791 Windows 11 25H2: hermes dashboard --status falsely reports no dashboard](https://github.com/NousResearch/hermes-agent/issues/75791) — **5 comments**. Platform-specific process-detection regression.
- [#16833 Project-scoped memory pools](https://github.com/NousResearch/hermes-agent/issues/16833) — **4 comments, 1 👍**. Users want memory isolation between projects rather than one global pool.
- Also drawing 3-comment discussion today: [#62254](https://github.com/NousResearch/hermes-agent/issues/62254) (`api_key_env` silently ignored), [#51684](https://github.com/NousResearch/hermes-agent/issues/51684) (Feishu wildcard not applied to approval clicks), [#76457](https://github.com/NousResearch/hermes-agent/issues/76457) (`hermes config set` stringifies lists), and [#77047](https://github.com/NousResearch/hermes-agent/issues/77047) (CJK UTF-8 files misdetected as binary).

## 5. Bugs & Stability

Ranked by severity:

| Severity | Item | Summary | Status |
|---|---|---|---|
| **P0** | [#79017 prompt_cache_key loses continuity across context-compression session rotation](https://github.com/NousResearch/hermes-agent/issues/79017) | Cache continuity breaks after compression rotates sessions; needs a logical cache-scope concept. Follow-up to #78941 / PR #78959. | New, no fix PR yet |
| **P2** | [#79044 Slack channel directory discovery can block inbound Gateway startup](https://github.com/NousResearch/hermes-agent/issues/79044) | Inbound messages can stay queued behind startup-restore gate while channel discovery runs. | New, no fix PR yet |
| **P2** | [#79040 hermes update completes but process never exits](https://github.com/NousResearch/hermes-agent/issues/79040) | Hangs after "Web UI built", breaking cron auto-update. | New, `needs-repro` |
| **P2** | [#79021 npm dependency vulnerabilities reported by hermes doctor](https://github.com/NousResearch/hermes-agent/issues/79021) | 3 high-severity build-time npm vulnerabilities; auto-repair fails. | New |
| **P2** | [#78980 cron lifecycle guard false-positives on Python scripts with ~ path literals](https://github.com/NousResearch/hermes-agent/issues/78980) | Blocks legitimate `--no-agent` script cron jobs. | New |
| **P2** | [#78406 openai-api provider transport not rebuilt until retry budget exhausted](https://github.com/NousResearch/hermes-agent/issues/78406) | Recurring `RemoteProtocolError`; delayed recovery from mid-stream connection drops. | Open |
| **P2** | [#78862 Cron jobs die on reasoning-model non-stream stale timeout](https://github.com/NousResearch/hermes-agent/issues/78862) | 600s reasoning floor races cron inactivity limit; fallback never engages. | Open |
| **P2** | [#78932 Rejected MEDIA delivery paths are silent to the model](https://github.com/NousResearch/hermes-agent/issues/78932) | Message posts without attachment, and the model believes delivery succeeded. | Open |
| **P2** | [#75801 OpenCode Go gpt-5.6-luna omits finish_reason → fake network drops](https://github.com/NousResearch/hermes-agent/issues/75801) | Compounding bug in streaming classification plus desktop stripping of streamed answer. | Open |
| **P2** | [#76457 hermes config set stringifies list-of-strings values](https://github.com/NousResearch/hermes-agent/issues/76457) | YAML lists written as quoted JSON literals. | Open |
| **P2** | [#77047 read_file misdetects valid UTF-8 (CJK) files as binary](https://github.com/NousResearch/hermes-agent/issues/77047) | 1000-byte sample boundary can split a multibyte character. | Duplicate |
| **P2** | [#62254 custom provider api_key_env silently ignored](https://github.com/NousResearch/hermes-agent/issues/62254) | Causes silent 401s; no warning or error. | Duplicate |
| **P2** | [#75791 Windows 11 dashboard --status false negative](https://github.com/NousResearch/hermes-agent/issues/75791) | Dashboard is healthy but CLI reports no process. | Open |
| **P2** | [#78122 max_in_progress is enforced per board, not gateway-wide](https://github.com/NousResearch/hermes-agent/issues/78122) | Kanban boards have separate DBs, so global cron concurrency limits fail. | Open |
| **P1 closed** | [#18594 get_hermes_home() cross-profile data corruption](https://github.com/NousResearch/hermes-agent/issues/18594) | Silent fallback to `~/.hermes` can corrupt profile-mode data. | Closed today |
| **P2 closed** | [#50747 Feishu adapter fails on container rebuild](https://github.com/NousResearch/hermes-agent/issues/50747) | "requirements not met" but works after docker restart. | Closed today |

Relevant fix PRs currently in flight: [#79046](https://github.com/NousResearch/hermes-agent/pull/79046) and [#57470](https://github.com/NousResearch/hermes-agent/pull/57470) address gateway PYTHONPATH leakage; [#52076](https://github.com/NousResearch/hermes-agent/pull/52076) fixes Feishu withdrawn-reply handling; [#73955](https://github.com/NousResearch/hermes-agent/pull/73955) aligns compression RPC timeouts.

## 6. Feature Requests & Roadmap Signals

- **Major architectural signal:** [#79042 RFC: Hermes Distributed Orchestrator (Remote Brain ↔ Local Nodes)](https://github.com/NousResearch/hermes-agent/issues/79042) — proposes decoupling the LLM/memory/skill "Brain" from local execution nodes. Draft status, `needs-decision`.
- **DeepSeek support:** [#79039 deepseek-v4-flash responses API support](https://github.com/NousResearch/hermes-agent/issues/79039).
- **Desktop usage visibility:** [#78997 Desktop app: display subscription/token usage in bottom status bar](https://github.com/NousResearch/hermes-agent/issues/78997).
- **Project discovery opt-out:** [#64615 Add option to disable automatic project/repo discovery](https://github.com/NousResearch/hermes-agent/issues/64615), related to bug report [#53328](https://github.com/NousResearch/hermes-agent/issues/53328).
- **Memory isolation:** [#16833 Project-scoped memory pools](https://github.com/NousResearch/hermes-agent/issues/16833).
- **Feature PRs in review:** [#79045 Honcho memory consolidation at session end](https://github.com/NousResearch/hermes-agent/pull/79045), [#73332 cron custom response wrappers](https://github.com/NousResearch/hermes-agent/pull/73332), [#73380 persistent per-model rate-limit cooldowns](https://github.com/NousResearch/hermes-agent/pull/73380), [#76661 P2P federation heartbeat](https://github.com/NousResearch/hermes-agent/pull/76661).

Likely next-version candidates: plugin-interface/hook-taxonomy standardization from the #64182/#64231 roadmap, Honcho memory consolidation (#79045), and Windows/update fixes driven by repeated regression reports.

## 7. User Feedback Summary

- **Windows remains the biggest pain point:** users are asking for portable/isolated deployment guidance ([#46199](https://github.com/NousResearch/hermes-agent/issues/46199)), reporting broken `dashboard --status` ([#75791](https://github.com/NousResearch/hermes-agent/issues/75791)), and hitting update hangs ([#79040](https://github.com/NousResearch/hermes-agent/issues/79040)).
- **Silent failures frustrate users:** custom provider `api_key_env` is silently ignored ([#62254](https://github.com/NousResearch/hermes-agent/issues/62254)), `config set` silently stringifies lists ([#76457](https://github.com/NousResearch/hermes-agent/issues/76457)), and rejected media deliveries are invisible to the model ([#78932](https://github.com/NousResearch/hermes-agent/issues/78932)).
- **Multi-project and multi-device use cases are emerging:** users want scoped memory pools ([#16833](https://github.com/NousResearch/hermes-agent/issues/16833)), Desktop usage monitoring ([#78997](https://github.com/NousResearch/hermes-agent/issues/78997)), autonomous coding-run ownership rules ([#73308](https://github.com/NousResearch/hermes-agent/pull/73308)), and P2P federation ([#76661](https://github.com/NousResearch/hermes-agent/pull/76661)).
- **Sentiment is mixed but constructive:** plugin-system contributors are highly engaged, while duplicate bugs and regressions indicate some frustration. Closure of older issues like #18594 and #50747 is a positive signal.

## 8. Backlog Watch

- [#64182 Plugin Interface Expansion tracking](https://github.com/NousResearch/hermes-agent/issues/64182) and [#64231 Hook taxonomy / batch disposition](https://github.com/NousResearch/hermes-agent/issues/64231) continue to accumulate comments without a final maintainer decision.
- [#46199 Windows portable/isolated deployment guidance](https://github.com/NousResearch/hermes-agent/issues/46199) has been open since June 14 with 2 👍 and no visible maintainer resolution.
- [#16833 Project-scoped memory pools](https://github.com/NousResearch/hermes-agent/issues/16833) has been open since April 28 and still lacks a roadmap response.
- [#53328 Desktop scans entire home directory for git repos](https://github.com/NousResearch/hermes-agent/issues/53328) and duplicate feature request [#64615](https://github.com/NousResearch/hermes-agent/issues/64615) remain unresolved.
- **Old open PRs needing attention:** [#26859 Discord runtime status](https://github.com/NousResearch/hermes-agent/pull/26859) (opened May 16), [#52076 Feishu withdrawn reply](https://github.com/NousResearch/hermes-agent/pull/52076) (June 24), [#57470 PYTHONPATH leak](https://github.com/NousResearch/hermes-agent/pull/57470) (July 3), [#68667 profile activation button](https://github.com/NousResearch/hermes-agent/pull/68667) (July 21), [#71021 mem0 availability check](https://github.com/NousResearch/hermes-agent/pull/71021) (July 24), and the zyz-authored series [#73308](https://github.com/NousResearch/hermes-agent/pull/73308) through [#73975](https://github.com/NousResearch/hermes-agent/pull/73975) — a large batch still awaiting review decisions.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-08-05

## 1. Today's Overview

PicoClaw is showing moderate maintenance activity: 3 issues and 4 pull requests were updated in the last 24 hours, but no new releases were published. The most visible community concerns are Web UI performance with long chat history ([#3281](https://github.com/sipeed/picoclaw/issues/3281)) and agent-loop hangs after MCP connection failures ([#3269](https://github.com/sipeed/picoclaw/issues/3269)). The project also processed some stale backlog items: one issue and two PRs were closed as stale, while two new/ongoing provider PRs remain open. Overall, current activity is oriented more toward reliability fixes, provider integrations, and LLM observability than large feature rollouts.

## 2. Releases

No new releases were published in the observed window.

## 3. Project Progress

No PRs were merged in the last 24 hours. Two PRs were closed as stale and did **not** land:

- [#3280 — fix(auth): make browser OAuth login survive real-world callback conditions](https://github.com/sipeed/picoclaw/pull/3280) — proposed fix for headless/remote OAuth login failures; closed stale.
- [#3251 — fix(providers): capture the prompt cache token usage in Anthropic providers](https://github.com/sipeed/picoclaw/pull/3251) — proposed fix for missing Anthropic cache token metrics; closed stale.

Still-open work continues around provider expansion and observability:

- [#3299 — Add native Exa web search provider](https://github.com/sipeed/picoclaw/pull/3299) — open PR adding Exa as a `web_search` provider.
- [#3317 — feat(providers): log prompt cache tokens in LLM response debug output](https://github.com/sipeed/picoclaw/pull/3317) — fresh PR targeting cache token visibility in gateway logs.

## 4. Community Hot Topics

Most active items by comments/reactions:

- [#3182 — [BUG] Android version](https://github.com/sipeed/picoclaw/issues/3182) — **6 comments**, 0 👍; closed as stale. Though closed, it is still the most-commented recent issue. Underlying need: Android users want a working background service and configurable path settings.
- [#3281 — Web UI chat input is very laggy when history has a little bit long](https://github.com/sipeed/picoclaw/issues/3281) — **3 comments**, 1 👍. Community reports degraded input responsiveness as session history grows.
- [#3269 — MCP server connection failure causes the agent loop to hang](https://github.com/sipeed/picoclaw/issues/3269) — **3 comments**, 1 👍. Users expect failed MCP connections to fail gracefully instead of blocking the chat interface.

The pattern suggests two core user needs: robust failure handling for external tooling, and smooth long-session Web UI behavior.

## 5. Bugs & Stability

Ranked by estimated severity:

1. **High — [#3269: MCP server connection failure hangs the agent loop](https://github.com/sipeed/picoclaw/issues/3269)**  
   The chat interface stops replying when an MCP server connection fails. This can block all agent interaction until intervention. No fix PR is linked yet.

2. **Medium/High — [#3281: Web UI chat input becomes very laggy with long history](https://github.com/sipeed/picoclaw/issues/3281)**  
   Input lag scales with history length, hurting long sessions. No fix PR is currently attached.

3. **High for Android users — [#3182: Android version cannot launch service / change path](https://github.com/sipeed/picoclaw/issues/3182)**  
   Closed as stale with 6 comments, but no public resolution or merged fix is visible in the provided data.

No new crash or regression reports were observed beyond these issues.

## 6. Feature Requests & Roadmap Signals

- **Native Exa search provider ([#3299](https://github.com/sipeed/picoclaw/pull/3299))**  
  This open PR adds Exa as a native `tools.web` / `web_search` provider. It signals continued investment in search provider options.

- **Prompt cache token logging ([#3317](https://github.com/sipeed/picoclaw/pull/3317))**  
  Following the stale-closed [#3251](https://github.com/sipeed/picoclaw/pull/3251), this request reinforces operator demand for cache usage visibility and cost monitoring.

- **Android support / mobile client expectations ([#3182](https://github.com/sipeed/picoclaw/issues/3182))**  
  Although closed stale, it shows real demand for a usable mobile experience.

If maintainers review and merge #3299 and #3317, the next minor release could reasonably include Exa search support and improved LLM usage/debug logging. No release is currently available to confirm this.

## 7. User Feedback Summary

Users are reporting practical, real-world pain points:

- MCP failures should not freeze the whole agent loop ([#3269](https://github.com/sipeed/picoclaw/issues/3269)).
- Long Web UI sessions become unusable due to input lag ([#3281](https://github.com/sipeed/picoclaw/issues/3281)).
- Android builds are effectively broken for some users because the service cannot start and settings paths cannot be changed ([#3182](https://github.com/sipeed/picoclaw/issues/3182)).
- OAuth login is painful on headless/remote machines, and the proposed fix ([#3280](https://github.com/sipeed/picoclaw/pull/3280)) was closed stale, likely leaving affected users without a solution.
- Operators want prompt-cache token metrics to verify caching behavior and cost ([#3251](https://github.com/sipeed/picoclaw/pull/3251), [#3317](https://github.com/sipeed/picoclaw/pull/3317)).

On the positive side, contributors are actively submitting targeted fixes and provider integrations, which indicates a participating and engaged community. The main dissatisfaction signal is that important fixes and bug reports are being closed as stale before resolution.

## 8. Backlog Watch

Items needing maintainer attention:

- **[#3269 — MCP failure hangs agent loop](https://github.com/sipeed/picoclaw/issues/3269)**  
  Open for ~16 days, high severity, no maintainer response or fix PR visible.

- **[#3281 — Web UI lag with long history](https://github.com/sipeed/picoclaw/issues/3281)**  
  Open for ~15 days, upvoted by the community, no fix PR linked.

- **[#3299 — Exa web search provider PR](https://github.com/sipeed/picoclaw/pull/3299)**  
  Open PR since 2026-07-26; still awaits review/merge.

- **[#3280 — OAuth login fix closed stale](https://github.com/sipeed/picoclaw/pull/3280)**  
  The problem is real for headless/remote users, yet the fix was closed stale. Should be reconsidered or technically superseded.

- **[#3251 — Anthropic prompt cache capture closed stale](https://github.com/sipeed/picoclaw/pull/3251)**  
  Also closed stale, though [#3317](https://github.com/sipeed/picoclaw/pull/3317) partially continues that work.

- **[#3182 — Android issue closed stale](https://github.com/sipeed/picoclaw/issues/3182)**  
  Most-commented issue in the set, but no public resolution. If Android support is not planned, explicit project guidance would help users.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-08-05

## Today's Overview
NanoClaw saw a quiet 24-hour window on the issue tracker: **no new issues were updated or filed**, with 0 open/active and 0 closed issues. Pull-request activity was moderate, with **5 PRs updated in the last 24 hours** — 4 open and 1 closed. The only newly closed PR, [#3154](https://github.com/nanocoai/nanoclaw/pull/3154), improves scheduled task time handling. Open PRs indicate continued community work on Discord approval reliability, Dial channel integration, and architectural refactoring for skill-owned capabilities. No new releases were published.

## Releases
None.

## Project Progress
The main merged/closed PR in this window was:

- **[#3154 — fix(agent-runner): give scheduled tasks current run time](https://github.com/nanocoai/nanoclaw/pull/3154)**  
  Closed/merged by the core team. This fix renders a task’s `time` from its effective scheduled occurrence (`process_after`), while preserving the creation timestamp as a fallback for legacy rows. It also adds a task-only `current_time` generated when the task reaches the agent, including the weekday and using the configured agent-group time handling.

No other PRs were merged in this window.

## Community Hot Topics
No comment/reaction counts were available in the snapshot, so the most notable activity is measured by recent updates and PR breadth:

- **[#3186 — refactor: add host seams for skill-owned capabilities](https://github.com/nanocoai/nanoclaw/pull/3186)**  
  Open refactor by `zvi-fried` focused on improving how skills can own capabilities through host seams. Signals interest in cleaner extension points and better separation of concerns.

- **[#3050 — feat(setup): add Dial to the channel picker + wizard/skills](https://github.com/nanocoai/nanoclaw/pull/3050)**  
  **and** **[#3041 — feat(channels): add Dial channel adapter (SMS + AI voice calls)](https://github.com/nanocoai/nanoclaw/pull/3041)**  
  Both by `OmriBenShoham`, these PRs together aim to add Dial as a full channel integration. Underlying need: users want more channel options beyond existing chat platforms, specifically SMS and AI voice-call support.

- **[#3185 — fix(discord): strip `\n` delimiter in webhook interaction `custom_id` so approvals resolve correctly](https://github.com/nanocoai/nanoclaw/pull/3185)**  
  Fresh open PR by `omerh` addressing a Discord approval-flow regression. This is a high-visibility bug fix because it affects every button-based approval interaction.

## Bugs & Stability
- **[High severity] Discord approval cards resolve to the wrong option — every Approve is treated as Reject](https://github.com/nanocoai/nanoclaw/pull/3185)**  
  In Discord webhook interactions, the `custom_id` decoder splits on `:` and fails because the raw HTTP interaction path includes a newline delimiter. This can cause **all approvals to be rejected** even when users click Approve. A fix PR is open and needs review/merge.

- **[Medium/Low severity] Scheduled tasks did not receive the correct run time](https://github.com/nanocoai/nanoclaw/pull/3154)**  
  Scheduled tasks were not being given the effective current run time. This was addressed in the closed/merged PR #3154, which also adds the day-of-week and timezone-aware `current_time`.

## Feature Requests & Roadmap Signals
- **Dial channel integration is the strongest roadmap signal.**  
  PRs [#3050](https://github.com/nanocoai/nanoclaw/pull/3050) and [#3041](https://github.com/nanocoai/nanoclaw/pull/3041) add Dial as a channel picker option and a full adapter for **SMS + AI voice calls**. If merged, this would likely land in the next minor release.

- **Skill-owned capability seams** via [#3186](https://github.com/nanocoai/nanoclaw/pull/3186) suggest future architectural investment in making skills more self-contained and host-aware.

- No new feature-request issues were created in this window.

## User Feedback Summary
No issue-tracker user feedback was captured in the last 24 hours. However, PR-derived feedback shows clear user pain points:

- Discord approval flows are unreliable when using webhook-based button interactions — a critical UX/production issue.
- Scheduled tasks need accurate, context-aware current timestamps rather than relying on legacy creation time.
- Some users/contributors are actively requesting **Dial** as a communication channel, indicating demand for broader channel support.

Overall, contributor activity remains healthy, but no new GitHub issues means community feedback is currently flowing mainly through pull requests.

## Backlog Watch
- **[#3050 — Dial channel picker + wizard/skills](https://github.com/nanocoai/nanoclaw/pull/3050)** and **[#3041 — Dial channel adapter](https://github.com/nanocoai/nanoclaw/pull/3041)** have been open since **2026-07-14**. They were recently updated on 2026-08-04 but have not been merged. These are significant feature PRs and need maintainer attention to avoid going stale.

- **[#3185 — Discord approval fix](https://github.com/nanocoai/nanoclaw/pull/3185)** and **[#3186 — host seams refactor](https://github.com/nanocoai/nanoclaw/pull/3186)** are newly opened and should be triaged/reviewed promptly.

- There are **no long-unanswered issues** currently, since the issue tracker shows 0 active issues.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest — 2026-08-05

## 1. Today's Overview

NullClaw is in a **low-activity period**: no issues were updated in the last 24 hours, no releases were published, and no PRs were merged or closed. The only activity is one **open pull request** ([#981](https://github.com/nullclaw/nullclaw/pull/981)) that was updated on 2026-08-04, proposing a new `grok-cli` provider for xAI Grok CLI. Overall project health appears stable: the repository is not showing bug-report pressure or unresolved issue traffic today. The main signal for maintainers is a pending feature contribution awaiting review/merge.

## 2. Releases

**No new releases** were published in the last 24 hours. The latest releases section is empty, so there are no changelog details, breaking changes, or migration notes to report.

## 3. Project Progress

- **No PRs merged or closed today.**
- **Open PR updated:** [PR #981 — feat(provider): add grok-cli provider for xAI Grok CLI](https://github.com/nullclaw/nullclaw/pull/981), authored by `valonmulolli`.
  - The PR adds a new CLI-based provider that delegates to the local `grok` CLI.
  - It follows the same spawn-per-request pattern used by existing `codex-cli`, `gemini-cli`, and `claude-cli` providers.
  - No feature has advanced into the main branch yet; this remains an open contribution.

## 4. Community Hot Topics

- [PR #981 — feat(provider): add grok-cli provider for xAI Grok CLI](https://github.com/nullclaw/nullclaw/pull/981) is the only active PR. It has no recorded comments or reactions in the data.
  - **Underlying need:** Users want support for xAI's Grok CLI as an optional provider, integrating with local CLI authentication rather than API-key-only access.
  - The proposal aligns with an existing product pattern, suggesting that multi-provider CLI support is a valued direction for the project.

## 5. Bugs & Stability

**No bugs, crashes, or regressions were reported in the last 24 hours.** There are no open issues and no associated fix PRs to rank.

## 6. Feature Requests & Roadmap Signals

- [PR #981](https://github.com/nullclaw/nullclaw/pull/981) is effectively a feature request plus implementation for an optional `grok-cli` provider.
- The PR explicitly requires the `grok` CLI to be installed and authenticated, matching the optional-provider model already used for other CLI-based tools.
- **Prediction:** If maintainers review and merge this PR, it could land in the next release. Given the established pattern of `codex-cli`, `gemini-cli`, and `claude-cli` providers, the likelihood of acceptance is moderate, but the lack of maintainer activity on the PR may delay inclusion.

## 7. User Feedback Summary

- **Pain point:** At least one contributor needs a way to use xAI's Grok CLI through NullClaw without reinventing integration logic.
- **Requested behavior:** Providers should spawn the local `grok` command per request, similar to other CLI providers.
- **Satisfaction signal:** No explicit positive or negative user feedback was recorded today. The presence of a contributed PR suggests active interest in provider extensibility, though no community discussion data is available.

## 8. Backlog Watch

- There are **no long-unanswered issues** in the repository.
- **Action item:** [PR #981](https://github.com/nullclaw/nullclaw/pull/981) has been open since **2026-07-29** and was last updated on **2026-08-04**. It remains without recorded maintainer response. This is the main item needing attention to avoid stagnation of a user-submitted feature.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-08-05

## 1. Today's Overview

IronClaw is in a high-velocity release-hardening phase: 50 issues and 50 PRs were updated in the past 24 hours, with 12 issues closed and 17 PRs merged/closed during the window. No new releases were published. The most visible activity centers on v1.1.0 readiness: Windows release-blocker fixes, a lossless rc.1→rc.1 migration PR, CI enforcement ratchets, and several user-facing reliability bugs from production feedback. Maintainers are also filing and executing structured architecture/gate-consolidation work, suggesting a strong focus on making "green CI" meaningful.

## 2. Releases

**No new releases in the last 24 hours.**

The most recent release-related signal is the long-open automated release PR [#5598](https://nearai/ironclaw PR #5598), which still lists API-breaking changes for `ironclaw_common` and `ironclaw_skills`.

## 3. Project Progress

### Closed/merged PRs in the last 24h (captured in top-20 view)

- [#7167](https://nearai/ironclaw PR #7167) — **fix(ci): unbreak per-package clippy on bin-only crates; classify `.gitignore`**. Fixes a CI failure where `cargo clippy --lib` hard-errors on bin-only packages.
- [#7200](https://nearai/ironclaw PR #7200) — **fix(composition): stop icacls writing to the CLI's stdout on Windows**. Fourth Windows defect blocking `ironclaw-v1.1.0-rc.1`; preflight previously cleared `USERNAME is unset`.
- [#7197](https://nearai/ironclaw PR #7197) — **ci: pass the Windows identity variables to the release smoke**. Scope reduced to avoid changing shipped Windows ACL behavior on a release branch.
- [#7156](https://nearai/ironclaw PR #7156) — **Enforcement: same-layer edge inventory, composition absolute-LOC ceiling, D-E vendor census, ratchet slack**. Addresses enforcement defects from issues #7149, #7151, #7150, #7147, with sabotage-tested CI gates.

### Closed issues in the last 24h (captured in top-30 view)

- [#6284](https://nearai/ironclaw Issue #6284) — Epic: error-recoverability endgame. Closed with the goal that the model recovers from 100% of errors it sees.
- [#6524](https://nearai/ironclaw Issue #6524) — Epic: Hermetic capability and journey testing platform. Closed.
- [#7119](https://nearai/ironclaw Issue #7119) — Code Style clippy is package-set-dependent; main was red for `{ironclaw, ironclaw_reborn_config}`. Closed; appears addressed by CI fixes.
- [#7148](https://nearai/ironclaw Issue #7148) — `conversations -> turns` had no owning CHECKLIST row, making a Wave 3 milestone unreachable as scheduled. Closed after audit.
- [#7168](https://nearai/ironclaw Issue #7168) — Agent-installed skills were invisible: `skill_install` wrote where discovery does not read. Closed.

### Notable open PRs advancing major work

- [#7198](https://nearai/ironclaw PR #7198) — **fix(migration): preserve rc1 state during 1.1 startup**. Implements lossless `1.0.0-rc.1` → `1.1.0-rc.1` migration.
- [#7157](https://nearai/ironclaw PR #7157) — **feat: explicit channel delivery tool** — two-lane delivery model, notification channels, delivery heuristics deleted.
- [#7184](https://nearai/ironclaw PR #7184) — **feat: Nostr host functions for WASM tools** in the reborn sandbox.
- [#7001](https://nearai/ironclaw PR #7001) — **feat(loop): keep cached system prefix byte-stable across model calls**.
- [#7029](https://nearai/ironclaw PR #7029) / [#7028](https://nearai/ironclaw PR #7028) / [#7048](https://nearai/ironclaw PR #7048) — Stacked contributions from a new contributor around durable delivery, recovery status preservation, and WASM diagnostic sanitization.

## 4. Community Hot Topics

The most-discussed items are concentrated around reliability, test coverage, and architecture enforcement.

- [#6284](https://nearai/ironclaw Issue #6284) — **15 comments**. The error-recoverability epic was the single most active discussion. Underlying need: every mid-run error must be survivable, visible to the model, actionable, and correctly reported — no non-success should ever be misrepresented.
- [#6524](https://nearai/ironclaw Issue #6524) — **4 comments**. Epic for a hermetic capability/journey testing platform. Underlying need: mechanically prove that every supported capability and critical journey has deterministic, meaningful coverage.
- [#7119](https://nearai/ironclaw Issue #7119) — **4 comments**. CI clippy failures on main triggered by package-set-dependent lint behavior. Underlying need: CI must be deterministic and not dependent on which package set a PR happens to touch.
- [#6752](https://nearai/ironclaw Issue #6752) — **3 comments**. Instance deletion fails, leaving "Loading your agents..." stuck on re-login. User-facing reliability blocker.
- [#7145](https://nearai/ironclaw Issue #7145) — **3 comments**. WS2 extension_host → loops re-layer sizing discussion. Underlying need: architecture refactors should be sized from actual port/residue constraints, not file-count proxies.
- New maintainer-authored enhancements with active discussion:
  - [#7194](https://nearai/ironclaw Issue #7194) — Admin-allowed shared Slack channel as an outbound delivery target.
  - [#7193](https://nearai/ironclaw Issue #7193) — Run-now/manual fire for automations across triggers, product surface, and WebUI.
  - [#7192](https://nearai/ironclaw Issue #7192) — WebUI optimistic user messages rendering below agent output.
  - [#7191](https://nearai/ironclaw Issue #7191) — `builtin.time` needs relative-offset arithmetic and typed input errors.

## 5. Bugs & Stability

Ranked roughly by user impact and release-blocking potential.

| Severity | Issue / PR | Description | Status / Fix |
|---|---|---|---|
| **High** | [#6752](https://nearai/ironclaw Issue #6752) | Instance deletion fails; "Loading your agents..." stuck on re-login. | Open, no visible fix PR. |
| **High** | [#7178](https://nearai/ironclaw Issue #7178) | `1.0.0-rc.1` → `1.1.0-rc.1` startup migration is not lossless. | Open; fix PR [#7198](https://nearai/ironclaw PR #7198) in progress. |
| **High** | [#7119](https://nearai/ironclaw Issue #7119) | Main was red for clippy on a specific package set. | Closed; CI fix landed via [#7167](https://nearai/ironclaw PR #7167). |
| **High** | [#7200](https://nearai/ironclaw PR #7200) | Windows release smoke blocked by `icacls` writing to CLI stdout. | Fixed/closed. |
| **Medium** | [#7191](https://nearai/ironclaw Issue #7191) | `builtin.time` cannot parse "24 hours ago"; emits opaque `input_error()`. Observed in real production thread. | Open, no fix PR yet. |
| **Medium** | [#7168](https://nearai/ironclaw Issue #7168) | Agent-installed skills are invisible to discovery and cannot be activated. | Closed. |
| **Medium** | [#7192](https://nearai/ironclaw Issue #7192) | WebUI optimistic user messages render below agent replies until durable row replaces them. | Open, no fix PR yet. |
| **Medium** | [#7146](https://nearai/ironclaw Issue #7146) | 121 tracing sites use `target = "..."` as a field instead of `target: "..."`, making events invisible to intended filters. | Open, no fix PR yet. |
| **Medium** | [#7115](https://nearai/ironclaw Issue #7115) | `docker/reborn/entrypoint.sh` gates legacy-Slack migration on a dead env var; following docs skips the migration. | Open, no fix PR yet. |
| **Medium** | [#7104](https://nearai/ironclaw Issue #7104) | Extractors report "no text found" as `Failed` instead of `Empty`, misleading the model. | Open, no fix PR yet. |
| **Low/Medium** | [#7103](https://nearai/ironclaw Issue #7103) | Latency-trace field computed even when latency tracing is off, adding per-tool-call JSON bytes. | Open, no fix PR yet. |
| **Low/Medium** | [#7144](https://nearai/ironclaw Issue #7144) | Pre-existing defects in trace contribution pipeline surfaced by consolidation review (29 threads on moved code). | Open. |
| **Low/Medium** | [#7147](https://nearai/ironclaw Issue #7147) | Shrink-only architecture ratchets carry untracked slack on main; three PRs hold different baseline values. | Open; enforcement addressed by [#7156](https://nearai/ironclaw PR #7156). |
| **Low/Medium** | [#7151](https://nearai/ironclaw Issue #7151) | Composition "god crate" gate is share-based and can re-accrete while staying green. | Open; addressed by [#7156](https://nearai/ironclaw PR #7156). |

## 6. Feature Requests & Roadmap Signals

Several active feature requests point toward v1.1.0 and beyond.

- [#7193](https://nearai/ironclaw Issue #7193) — **Run-now for automations**: manual fire across triggers, product surface, capabilities, and WebUI. Size L, medium risk; strong candidate for an upcoming release.
- [#7194](https://nearai/ironclaw Issue #7194) — **Admin-allowed shared channel as outbound delivery target**: lets agents route final replies to channels they can access but cannot yet declare as delivery targets.
- [#7177](https://nearai/ironclaw Issue #7177) — **Schema-aware ranked search for deferred tool retrieval**: improves Reborn progressive tool disclosure using canonical capability vocabulary.
- [#7183](https://nearai/ironclaw Issue #7183) — **Per-user LLM model selection**; currently admin-only. Raised in Champions check-in by marketing user.
- [#7105](https://nearai/ironclaw Issue #7105) — **Evaluate dedicated identity/session and payments service**: recurring payment/credits issues suggest extracting these concerns from the cloud API.
- [#6731](https://nearai/ironclaw Issue #6731) — **Integrate IronHub into IronClaw**: runtime discovery/install of signed, provenance-checked tools and skills.
- [#7199](https://nearai/ironclaw Issue #7199) — **User suggestion from PostChairmanLock**: separately log "candidate skill existed but wasn't chosen" vs "chosen and changed final answer" to prove skill-selection ROI.
- [#6565](https://nearai/ironclaw Issue #6565) / [#6941](https://nearai/ironclaw Issue #6941) — **Skill discovery, routing, activation, and self-created skills** remain roadmap epics.

Based on current PR and issue velocity, the next v1.1.0-rc.1 is likely to include the lossless migration work ([#7198](https://nearai/ironclaw PR #7198)), Windows release fixes ([#7197](https://nearai/ironclaw PR #7197), [#7200](https://nearai/ironclaw PR #7200)), channel delivery tooling ([#7157](https://nearai/ironclaw PR #7157)), and possibly run-now automations ([#7193](https://nearai/ironclaw Issue #7193)) and outbound shared-channel targets ([#7194](https://nearai/ironclaw Issue #7194)).

## 7. User Feedback Summary

Real user-reported pain points from the last 24 hours are heavily weighted toward reliability and control:

- **Memory is not reliably recalled across conversations** ([#7185](https://nearai/ironclaw Issue #7185)): multiple testers in the 2026-07-23 IronClaw Champions check-in observed that context from one conversation is not available later.
- **Web scraping is hit-or-miss** ([#7180](https://nearai/ironclaw Issue #7180)): agent sometimes uses `http` instead of `web_search`, with no clear pattern for failures.
- **Per-user model selection is missing** ([#7183](https://nearai/ironclaw Issue #7183)): model choice is admin-only, limiting individual users.
- **Instance deletion can break re-login** ([#6752](https://nearai/ironclaw Issue #6752)): "Loading your agents..." stuck after deleting an instance.
- **Payments/account-credit issues keep surfacing** ([#7105](https://nearai/ironclaw Issue #7105)): recurring user-facing payment friction.
- **Agent-installed skills do not appear anywhere** ([#7168](https://nearai/ironclaw Issue #7168)): `skill_install` reports success but the skill is undiscoverable.
- **Real production thread showed `builtin.time` failing on "24 hours ago"** ([#7191](https://nearai/ironclaw Issue #7191)): the agent could not compute a daily report window.

Overall sentiment: users are actively trying IronClaw in real workflows (legal, marketing, builder ops) and value the tool ecosystem, but they are hitting reliability gaps in memory, scraping, time arithmetic, and post-deletion state. The maintainer response has been fast — most feedback items were triaged into concrete issues within the same period.

## 8. Backlog Watch

These items have been open for a long time or are structurally important but do not yet show active completion.

- [#3773](https://nearai/ironclaw Issue #3773) — **Epic: Land the IronClaw Target Crate Architecture**. Open since 2026-05-19. Large architectural epic with no comments in the current snapshot; still a foundational v1.2.0 item.
- [#5101](https://nearai/ironclaw PR #5101) — **ci: reuse cargo-component installer in live canary**. Open since 2026-06-20. Long-running CI improvement with no visible merge progress.
- [#5598](https://nearai/ironclaw PR #5598) — **chore: release**. Open since 2026-07-03. Automated release PR still carrying breaking changes for `ironclaw_common` and `ironclaw_skills`; may need maintainer decision.
- [#6565](https://nearai/ironclaw Issue #6565) — **Epic: Reliable Skill Discovery, Routing, and Activation**. Open since 2026-07-23 with 21 acceptance criteria; too large for one owner, and has been partially split into [#6941](https://nearai/ironclaw Issue #6941).
- [#6731](https://nearai/ironclaw Issue #6731) — **Integrate IronHub into IronClaw**. Open since 2026-07-27; roadmap-level feature with docs PR [#6965](https://nearai/ironclaw PR #6965) in progress.
- [#6941](https://nearai/ironclaw Issue #6941) — **Epic: self-create/find/choose/use skills that pay off**. Open since 2026-07-31; subset of #6565 but still fully measured and unowned.

With v1.1.0 release hardening dominating current activity, these long-running architecture and release-process items will likely need explicit triage after the rc.1 milestone.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-08-05

## 1. Today's Overview
LobsterAI saw a busy development day: 15 PRs were updated in the last 24 hours, with 10 merged/closed and 5 still open. No new releases were tagged, but the `release/2026.8.3` branch was merged into `main`, signaling an upcoming version rollout. Active focus areas include the startup credit-reward campaign, login flow improvements, artifact preview settings, and better model-error classification. One open security-related issue about model key leakage remains the most notable risk item. Overall project health appears solid, with steady feature work and dependency maintenance alongside a small number of stale items needing attention.

## 2. Releases
No new releases were published on 2026-08-05.

However, [PR #2430](https://github.com/netease-youdao/LobsterAI/pull/2430) merged `release/2026.8.3` into `main`. This release branch introduces native credit-reward activities, streamlines first-run login, adds Artifact auto-preview control, improves model-error handling, and enhances Windows installer reliability. A formal release tag may follow shortly.

## 3. Project Progress
The following PRs were merged or closed today:

- [PR #2430](https://github.com/netease-youdao/LobsterAI/pull/2430) — Release: 2026.8.3 merged into main, bundling multiple features and fixes.
- [PR #2432](https://github.com/netease-youdao/LobsterAI/pull/2432) — Disabled the final reward auto popup for the World Cup activity; manual claiming remains available.
- [PR #2433](https://github.com/netease-youdao/LobsterAI/pull/2433) — Polished the startup credit campaign experience: cropped poster asset, localized failure messages, and campaign-binding refresh before retry.
- [PR #2429](https://github.com/netease-youdao/LobsterAI/pull/2429) — Optimized the login page.
- [PR #2428](https://github.com/netease-youdao/LobsterAI/pull/2428) — Completed startup credit campaign analytics fields, including full login redirect URL and richer error reporting.
- [PR #2427](https://github.com/netease-youdao/LobsterAI/pull/2427) — Bundled startup credit campaign artwork locally while keeping server-controlled availability and fulfillment.
- [PR #2426](https://github.com/netease-youdao/LobsterAI/pull/2426) — Added separate `ModelOverloaded` classification for provider capacity errors, instead of bundling them under generic rate-limit messaging.
- [PR #2425](https://github.com/netease-youdao/LobsterAI/pull/2425) — Added an artifact auto-preview toggle so users can disable automatic preview opening.
- Dependency PRs [headlessui #1282](https://github.com/netease-youdao/LobsterAI/pull/1282), [react #1283](https://github.com/netease-youdao/LobsterAI/pull/1283), and [react-syntax-highlighter #1284](https://github.com/netease-youdao/LobsterAI/pull/1284) were closed after long staleness.

## 4. Community Hot Topics
The main community attention point is the security bug:

- [Issue #1202](https://github.com/netease-youdao/LobsterAI/issues/1202) — **Agent leaks model key information**. Opened April 1, updated August 4, 1 comment. The issue describes how an agent can be tricked into revealing configuration file locations and environment variables containing model keys. Underlying need: prompt-injection resistance and strict redaction of sensitive credentials in agent outputs.

Other PRs had little explicit comment activity. The most user-facing open item is [PR #2374](https://github.com/netease-youdao/LobsterAI/pull/2374), which adds a permanent setting to hide the sidebar ad banner — responding to user annoyance with repeated banner dismissal. Activity around reward popups and login flow also reflects user-experience pressure.

## 5. Bugs & Stability
Ranked by severity:

1. **Critical — Model key information leakage**  
   [Issue #1202](https://github.com/netease-youdao/LobsterAI/issues/1202) remains open. An agent can disclose sensitive configuration/key environment variable details. No fix PR is linked yet. This needs immediate security review.

2. **Medium — Model capacity overload misclassified as rate limit**  
   Addressed by merged [PR #2426](https://github.com/netease-youdao/LobsterAI/pull/2426). Previously users saw misleading retry-now messages when providers were actually overloaded.

3. **Medium — Silent session rename failures**  
   [PR #1205](https://github.com/netease-youdao/LobsterAI/pull/1205) remains open. It adds an error toast when renaming a session fails; currently failures are silently swallowed.

4. **Low/UX — Unwanted final reward auto popup**  
   Fixed in [PR #2432](https://github.com/netease-youdao/LobsterAI/pull/2432), which stops automatic opening of the reward poster.

5. **Low/UX — Startup credit campaign rough edges**  
   [PR #2433](https://github.com/netease-youdao/LobsterAI/pull/2433) polishes asset cropping and error messaging.

## 6. Feature Requests & Roadmap Signals
Several merged PRs indicate near-term product direction:

- **Credit-reward activities are now a core feature**: local artwork bundling, analytics completion, and claim-flow refinement in [#2427](https://github.com/netease-youdao/LobsterAI/pull/2427), [#2428](https://github.com/netease-youdao/LobsterAI/pull/2428), and [#2433](https://github.com/netease-youdao/LobsterAI/pull/2433).
- **User control over UI behavior**: the artifact auto-preview toggle merged in [#2425](https://github.com/netease-youdao/LobsterAI/pull/2425) and the ad-banner hide setting proposed in [#2374](https://github.com/netease-youdao/LobsterAI/pull/2374) show a pattern of giving users more interface control.
- **Security hardening** is an obvious future requirement, driven by [#1202](https://github.com/netease-youdao/LobsterAI/issues/1202). A guardrail that detects and refuses key/config disclosure is likely in the next roadmap.
- Dependabot PRs for React 19 and Electron 43 were closed/merged, meaning major dependency upgrades could land soon.

## 7. User Feedback Summary
User pain points visible in today's data:

- **Security concerns**: users worry about agent leaking model API keys via prompt manipulation ([Issue #1202](https://github.com/netease-youdao/LobsterAI/issues/1202)).
- **Annoying popups/banners**: final reward auto popup and sidebar ad banner caused friction; both are being addressed or disabled.
- **Misleading error messages**: provider-overload errors were incorrectly shown as rate limits, causing confusing retry behavior.
- **Silent UI failures**: failed session renames offer no feedback; users need a clear error toast.

Satisfaction signals: login flow optimization, clearer model-error handling, and new settings to control previews and ads should improve overall UX. The steady stream of activity and polish PRs suggests an engaged development team responding to user-reported issues.

## 8. Backlog Watch
Items needing maintainer attention:

- [Issue #1202](https://github.com/netease-youdao/LobsterAI/issues/1202) — Open security bug about model key leakage, stale since April 1, updated August 4. Needs prioritization and a fix PR.
- [PR #1205](https://github.com/netease-youdao/LobsterAI/pull/1205) — Stale fix for silent session-rename failures; open since April 1.
- [PR #1277](https://github.com/netease-youdao/LobsterAI/pull/1277) — Dependabot Electron group bump, open since April 2 and still unmerged; may need conflict resolution.
- [PR #2374](https://github.com/netease-youdao/LobsterAI/pull/2374) — Sidebar ad-banner permanent hide setting, open since July 21; has a linked issue ([#2342](https://github.com/netease-youdao/LobsterAI/issues/2342)) and is likely user-requested.
- [PR #2431](https://github.com/netease-youdao/LobsterAI/pull/2431) — Open PR titled "Liuzhq/fix rlog 202683" with no summary; needs description/review.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-08-05

## Today's Overview
Moltis is in a quiet maintenance phase: no issues were updated in the last 24 hours, and no new releases were published. The only public activity is one open Dependabot pull request updating the `undici` dependency in the website directory. There were no merged or closed PRs, meaning no feature or fix landed today. Overall, the repository shows low activity with no user-reported bugs or feature discussions.

## Releases
None.

## Project Progress
No PRs were merged or closed in the last 24 hours. No features, fixes, or documentation changes advanced to the main branch.

## Community Hot Topics
The only active PR is a routine dependency update:

- [PR #1184 — chore(deps-dev): bump undici from 7.28.0 to 7.29.0 in /website](https://github.com/moltis-org/moltis/pull/1184)  
  Opened by Dependabot on 2026-08-04. This PR bumps `undici` from `7.28.0` to `7.29.0` in the `npm_and_yarn` group for `/website`. It has no comments and no reactions, so it is not a heavily discussed item, but it does keep the website toolchain current.

## Bugs & Stability
No bugs, crashes, or regressions were reported in the last 24 hours. There are no open issues, and no fix PRs are needed based on today's data.

## Feature Requests & Roadmap Signals
No feature requests or roadmap signals were received today. With zero open issues and no user-submitted proposals, there is no visible signal to predict upcoming features.

## User Feedback Summary
No user feedback was captured through issues or PRs in this period. There are no pain points, use-case discussions, or satisfaction indicators available for analysis.

## Backlog Watch
No backlog concerns were identified. There are zero open issues, and the only open PR (#1184) was created on 2026-08-04 and is not stale. No long-unanswered items are waiting for maintainer attention.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-08-05

## 1. Today's Overview

CoPaw (QwenPaw) is in a high-activity period: **29 issues were updated** in the last 24 hours (17 open/active, 12 closed) and **47 PRs were updated** (28 open, 19 closed/merged), with **no new release published**. The busiest topics are v2.1.0-beta.1 desktop/browser regressions, approval-prompt visibility on non-Web channels, memory/context compression behavior, and file/media workflow UX. Maintainer throughput is solid: several fix PRs are already attached to open bugs such as plugin loading (#6688), cron persistence (#6691), and auto-compression memory (#6629), while release-quality bugs from the latest beta remain open.

## 2. Releases

**No new releases in the last 24 hours.**  
The most recent tracked release activity is the closed release-duty verification issue for **v2.1.0-beta.1**: [Issue #6656](https://github.com/agentscope-ai/QwenPaw/issues/6656). No new migration notes or breaking-change documentation are available.

## 3. Project Progress

Of the **19 closed/merged PRs** today, the following substantive changes appear in the latest set:

- [PR #6692](https://github.com/agentscope-ai/QwenPaw/pull/6692) — Stop logging raw conversation command arguments; adds regression coverage for `/compact` redaction and one-shot behavior.
- [PR #6685](https://github.com/agentscope-ai/QwenPaw/pull/6685) — Improve timestamp handling in `agentscope_msg_to_message`; fixes [Issue #6301](https://github.com/agentscope-ai/QwenPaw/issues/6301) (naive UTC timestamps treated as local time).
- [PR #6628](https://github.com/agentscope-ai/QwenPaw/pull/6628) — Use `SystemMsg` for compressed-memory placeholders in `_rebuild_context`; fixes [Issue #6541](https://github.com/agentscope-ai/QwenPaw/issues/6541) (DeepSeek-compatible APIs returning HTTP 400 on `tool` role messages).
- [PR #6678](https://github.com/agentscope-ai/QwenPaw/pull/6678) — Install Playwright Chromium for the integration test suite.
- [PR #6686](https://github.com/agentscope-ai/QwenPaw/pull/6686) — Fix Chrome contract mismatches and add missing p-tier markers in integration tests.
- [PR #6679](https://github.com/agentscope-ai/QwenPaw/pull/6679) — Align import-local integration tests with [Issue #6487](https://github.com/agentscope-ai/QwenPaw/issues/6487) and widen a flaky poll window.
- [PR #4267](https://github.com/agentscope-ai/QwenPaw/pull/4267) — macOS file path whitelist / `sandbox-exec` security feature closed after a long review cycle.

**Notable in-flight PRs visible today:**

- [PR #6688](https://github.com/agentscope-ai/QwenPaw/pull/6688) — Isolate plugin absolute imports; fixes [Issue #6683](https://github.com/agentscope-ai/QwenPaw/issues/6683).
- [PR #6691](https://github.com/agentscope-ai/QwenPaw/pull/6691) — Persist `enabled` state on cron pause/resume; fixes [Issue #6690](https://github.com/agentscope-ai/QwenPaw/issues/6690).
- [PR #6689](https://github.com/agentscope-ai/QwenPaw/pull/6689) — Add startup retry for channel failures, especially Matrix.
- [PR #6629](https://github.com/agentscope-ai/QwenPaw/pull/6629) — Trigger `summarize_when_compact` on auto-compression; fixes [Issue #6624](https://github.com/agentscope-ai/QwenPaw/issues/6624).

## 4. Community Hot Topics

The most-discussed issues in the last 24 hours:

- [Issue #6649](https://github.com/agentscope-ai/QwenPaw/issues/6649) — **GPT-5.6 prompt caching parameters** (13 comments). Users want `prompt_cache_key` / `prompt_cache_options` in the Responses API provider to reuse cached prefixes across agent-loop turns and reduce cost/latency.
- [Issue #6655](https://github.com/agentscope-ai/QwenPaw/issues/6655) — **Console channel does not render approval prompts** (12 comments). Blocked `rm`/`del` commands silently time out after 5 minutes because no terminal-readable approval prompt is shown.
- [Issue #6643](https://github.com/agentscope-ai/QwenPaw/issues/6643) — **Task outputs all dumped into `media/`** (6 comments). Users want a separate output directory per task to avoid clutter.
- [Issue #6667](https://github.com/agentscope-ai/QwenPaw/issues/6667) — **DeepSeek thinking mode fails in multi-turn** (5 comments). `reasoning_content` is missing after OpenAI formatter skips `ThinkingBlock`; the retry fallback only works for the first occurrence.
- [Issue #6642](https://github.com/agentscope-ai/QwenPaw/issues/6642) — **Drag-and-drop should read original file paths** (5 comments). Users want desktop-agent-style direct file access instead of upload/copy workflow.
- [Issue #6684](https://github.com/agentscope-ai/QwenPaw/issues/6684) — **Channel retry / health checks for Matrix** (4 comments). Self-hosted Matrix often starts before QwenPaw, leaving the channel dead until manual re-save.

Underlying demand: users are pushing toward production-grade desktop workflows — safer approval UX, file-path-based workflows, lower token overhead, and more reliable channel connections.

## 5. Bugs & Stability

Ranked by severity:

1. **Critical** — [Issue #6697](https://github.com/agentscope-ai/QwenPaw/issues/6697): v2.1.0-beta.1 desktop injects `PYTHONHOME` into child environments, causing every Python subprocess to crash with `encodings ModuleNotFoundError`. No fix PR visible yet.
2. **High** — [Issue #6698](https://github.com/agentscope-ai/QwenPaw/issues/6698): Browser SDK `open()` always fails with `WireProtocolError: Target crashed` in isolated Playwright sessions on v2.1.0-beta.1. No fix PR visible yet.
3. **High** — [Issue #6700](https://github.com/agentscope-ai/QwenPaw/issues/6700): Huge tool outputs (multi-MB recursive search) are persisted into session history, freezing web reloads and risking context-window overflow. Reported and closed; no fix PR in the top list.
4. **High** — [Issue #6696](https://github.com/agentscope-ai/QwenPaw/issues/6696): WeChat iLink one-time `context_token` is consumed by the typing indicator, so real replies are rejected (`ret=-2`) and the “working” indicator gets stuck.
5. **High / safety** — [Issue #6655](https://github.com/agentscope-ai/QwenPaw/issues/6655) and [Issue #6695](https://github.com/agentscope-ai/QwenPaw/issues/6695): approval prompts are unreachable on console / WeChat-only channels, causing silent 5-minute auto-denial of gated shell commands.
6. **Medium** — [Issue #6683](https://github.com/agentscope-ai/QwenPaw/issues/6683): App Center install of `qwenpaw-creator` fails with `No module named 'utils.env'`; fix PR [PR #6688](https://github.com/agentscope-ai/QwenPaw/pull/6688) is open.
7. **Medium** — [Issue #6690](https://github.com/agentscope-ai/QwenPaw/issues/6690): `cron pause/resume` only mutates APScheduler memory, so state is lost on restart; [PR #6691](https://github.com/agentscope-ai/QwenPaw/pull/6691) is open.
8. **Medium** — [Issue #6687](https://github.com/agentscope-ai/QwenPaw/issues/6687): OpenRouter multimodal probe overwrites documented image/video capabilities with `false`.
9. **Medium** — [Issue #6667](https://github.com/agentscope-ai/QwenPaw/issues/6667): DeepSeek multi-turn thinking mode breaks because `reasoning_content` is missing; existing retry workaround only covers the first failure.
10. **Medium** — [Issue #6624](https://github.com/agentscope-ai/QwenPaw/issues/6624): Scroll auto-compression does not trigger the `summarize_when_compact` memory flow; [PR #6629](https://github.com/agentscope-ai/QwenPaw/pull/6629) is open.

Also closed recently: [Issue #5906](https://github.com/agentscope-ai/QwenPaw/issues/5906) (anti-repeat false positive) and [Issue #6374](https://github.com/agentscope-ai/QwenPaw/issues/6374) (token-usage persistence retry).

## 6. Feature Requests & Roadmap Signals

Strong signals for upcoming versions:

- **Model/provider support**
  - [Issue #6649](https://github.com/agentscope-ai/QwenPaw/issues/6649) — GPT-5.6 prompt caching parameters.
  - [Issue #6490](https://github.com/agentscope-ai/QwenPaw/issues/6490) — Add Volcengine Agent Plan and Xiaomi MiMo Standard API as built-in providers.
  - [Issue #6455](https://github.com/agentscope-ai/QwenPaw/issues/6455) — Allow one agent to run multiple models independently and merge results.
  - [Issue #6674](https://github.com/agentscope-ai/QwenPaw/issues/6674) — Better handling of free-tier rate limits (429s) to avoid task interruption.

- **File / media / desktop UX**
  - [Issue #6643](https://github.com/agentscope-ai/QwenPaw/issues/6643) — Per-task output directories instead of a single `media/` dump.
  - [Issue #6642](https://github.com/agentscope-ai/QwenPaw/issues/6642) — Drag-and-drop should read original file paths without upload/copy.
  - [PR #6492](https://github.com/agentscope-ai/QwenPaw/pull/6492) — Preserve uploaded original filenames in hints.
  - [PR #6504](https://github.com/agentscope-ai/QwenPaw/pull/6504) — Unify project-directory resolution and harden the file workspace.

- **Channels / reliability**
  - [Issue #6684](https://github.com/agentscope-ai/QwenPaw/issues/6684) — Channel retry and health checks; [PR #6689](https://github.com/agentscope-ai/QwenPaw/pull/6689) is the implementation.

- **Prompt / memory efficiency**
  - [Issue #6699](https://github.com/agentscope-ai/QwenPaw/issues/6699) — On-demand skill loading; users with 27+ skills report ~8k–10k tokens consumed by skill descriptions alone.
  - [Issue #6694](https://github.com/agentscope-ai/QwenPaw/issues/6694) — Global pinned system rules similar to `.agent` / `.claude`.
  - [PR #6398](https://github.com/agentscope-ai/QwenPaw/pull/6398) — Add reranker support for ReMe memory search.

Likely next-version candidates: fixes for the v2.1.0-beta.1 blockers (#6697, #6698), plugin namespace isolation (#6688), cron persistence (#6691), and channel startup retry (#6689). On-demand skill loading (#6699) is a strong roadmap signal if token-budget pressure continues.

## 7. User Feedback Summary

- **Positive sentiment**: [Issue #6674](https://github.com/agentscope-ai/QwenPaw/issues/6674) explicitly calls QwenPaw “a great personal AI assistant,” indicating strong daily-use satisfaction.
- **Safety/UX pain**: Approval prompts are invisible on console and WeChat-only channels, leading to silent command timeouts ([#6655](https://github.com/agentscope-ai/QwenPaw/issues/6655), [#6695](https://github.com/agentscope-ai/QwenPaw/issues/6695)).
- **Desktop expectations**: Users compare QwenPaw to other desktop agent tools and expect direct local file-path handling rather than upload/copy workflows ([#6642](https://github.com/agentscope-ai/QwenPaw/issues/6642)).
- **Organization frustration**: Outputs accumulating in `media/` are described as “very messy” ([#6643](https://github.com/agentscope-ai/QwenPaw/issues/6643)).
- **Cost/token concerns**: Many enabled skills waste 25–30% of the system prompt on descriptions ([#6699](https://github.com/agentscope-ai/QwenPaw/issues/6699)); free-tier rate limits interrupt real tasks ([#6674](https://github.com/agentscope-ai/QwenPaw/issues/6674)).
- **Multi-model workflows**: Running several models independently and merging results is “very troublesome” ([#6455](https://github.com/agentscope-ai/QwenPaw/issues/6455)).
- **Beta regression pressure**: The v2.1.0-beta.1 desktop release has multiple user-facing blockers around Python subprocesses and browser automation ([#6697](https://github.com/agentscope-ai/QwenPaw/issues/6697), [#6698](https://github.com/agentscope-ai/QwenPaw/issues/6698)).

## 8. Backlog Watch

Items that may need maintainer attention:

- [Issue #6455](https://github.com/agentscope-ai/QwenPaw/issues/6455) — Open since **2026-07-24**: one agent orchestrating multiple models and merging results. High-demand workflow, still open with only 3 comments.
- [Issue #6490](https://github.com/agentscope-ai/QwenPaw/issues/6490) — Open since **2026-07-27**: built-in Volcengine Agent Plan and Xiaomi MiMo providers. Waiting for feature triage.
- [PR #6331](https://github.com/agentscope-ai/QwenPaw/pull/6331) — Open since **2026-07-22**: specify Node.js version requirement for local builds. Small but not yet merged.
- [PR #6398](https://github.com/agentscope-ai/QwenPaw/pull/6398) — Open since **2026-07-23**: reranker backend for ReMe memory search, still under review.
- [PR #6615](https://github.com/agentscope-ai/QwenPaw/pull/6615) — Open since **2026-07-31**: AgentScope compatibility and config-loading fixes, still under review.
- [Issue #6627](https://github.com/agentscope-ai/QwenPaw/issues/6627) — Open since **2026-08-01**: user question on how to use `loongsuite-python` for LLM tracing with QwenPaw; currently has no visible maintainer answer.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-08-05

## 1. Today's Overview

ZeroClaw is in a heavy design-and-hardening phase: 42 issues and 50 PRs were updated in the last 24 hours, with activity concentrated in RFC review cycles (four open RFCs with 10+ comments), a large in-flight PR pipeline, and a growing backlog of security-critical bugs. The signature of the week is architectural — OpenAI-protocol compatibility (#8603), runtime-owned sessions (#9487/#9600), attachment unification (#9488), and goal-oriented agent execution (#8303) are all competing for maintainer decisions. Meanwhile, three S0/S1-class security defects (fail-open webhooks #9565, shared knowledge graph #9647, unscoped session/channel tools #9646) remain open, with the webhook issue already accepted as in-progress. Two PRs merged/closed and one issue closed in the window (#8568), but the bulk of visible activity is on long-running review branches awaiting maintainer or author action. No new release was published.

## 2. Releases

No new releases in the last 24 hours. No versioned artifacts, breaking changes, or migration notes to report.

## 3. Project Progress

- **Merged/closed PRs:** 2 PRs were merged or closed in the window, but neither appears in the top-20 sample, so their identities and contents are not available in this data pull.
- **Closed issue:** [#8568 — Mixture-of-Agents (MoA) virtual model provider RFC](https://github.com/zeroclaw-labs/zeroclaw/issues/8568) was closed (10 comments); the disposition (accepted vs. deferred) is not stated in the available metadata.
- **Notable in-flight features advancing (open PRs, updated in last 24h):**
  - Phase 1 of the A2A outbound client ([#9324](https://github.com/zeroclaw-labs/zeroclaw/pull/9324)): four working `a2a_*` tools, a shared A2A v1.0 wire model, and a default-closed `[a2a.client]` config block for RFC #9106.
  - ZeroCode multi-session panes with agent sidebar ([#9739](https://github.com/zeroclaw-labs/zeroclaw/pull/9739)), stacked on #9738.
  - Repeated live eval runs with pass@k / pass^k and error bars ([#9224](https://github.com/zeroclaw-labs/zeroclaw/pull/9224)).
  - Rust toolchain bump to 1.97.1 with the source floor held at 1.96.0 ([#9527](https://github.com/zeroclaw-labs/zeroclaw/pull/9527)).
  - Token accounting on history-trim events ([#9713](https://github.com/zeroclaw-labs/zeroclaw/pull/9713)), addressing silent budget misdiagnosis (#9619).

## 4. Community Hot Topics

The most active discussions are all RFCs, indicating a community that is investing in shaping the architecture rather than just reporting bugs:

- **[#8603 — RFC: ZeroClaw Chat Completions profile](https://github.com/zeroclaw-labs/zeroclaw/issues/8603)** (16 comments) — The highest-activity item. Users want to drive ZeroClaw from OpenAI-protocol clients (Open WebUI, LobeChat, Continue.dev, Aider, LangChain, OpenAI SDK). Underlying need: ecosystem interoperability without writing a custom channel adapter.
- **[#8303 — RFC: Goal mode v1](https://github.com/zeroclaw-labs/zeroclaw/issues/8303)** (15 comments, 1 👍) — Durable, bounded multi-turn objectives. The need: agent work that survives turn boundaries without escalating to fully autonomous operation.
- **[#7155 — RFC: Per-execution confirmation tier for high-risk shell commands](https://github.com/zeroclaw-labs/zeroclaw/issues/7155)** (14 comments, revised 2026-08-05) — A Claude Code-style allow/ask/deny pattern policy. Revision 3 narrowed the normative scope after maintainer feedback, a sign of a healthy review loop.
- **[#9488 — RFC: Unified attachment architecture for web chat and channels](https://github.com/zeroclaw-labs/zeroclaw/issues/9488)** (13 comments) — Consistent attachment handling across surfaces; paired with session-ownership work (#9487).
- **[#8568 — MoA virtual model provider](https://github.com/zeroclaw-labs/zeroclaw/issues/8568)** (10 comments, closed) — Interest in multi-model aggregation; closed, so likely folded or deferred.
- **[#6850 — Decouple memory lifecycle policy from storage](https://github.com/zeroclaw-labs/zeroclaw/issues/6850)**, **[#9487 — Runtime-owned sessions](https://github.com/zeroclaw-labs/zeroclaw/issues/9487)**, **[#7141 — Pluggable inbound authentication](https://github.com/zeroclaw-labs/zeroclaw/issues/7141)** (10 comments each) — a cluster of issues arguing for the runtime owning identity, sessions, and memory policy rather than scattering them across channels/backends.
- **[#8692 — Maintainer decision queue tracker](https://github.com/zeroclaw-labs/zeroclaw/issues/8692)** (9 comments) — The community has built a public queue to track which RFCs need maintainer decisions, reflecting both engagement and a perceived decision bottleneck.

PR comment counts were not provided in the data sample; issue comment volume therefore drives this ranking.

## 5. Bugs & Stability

Ranked by severity (all updated within the last 24h):

**S0 / Critical security**
- **[#9565 — Gateway webhook handlers do not fail closed (WhatsApp Cloud, Linq, WATI)](https://github.com/zeroclaw-labs/zeroclaw/issues/9565)** — priority:p0, status:in-progress. Three inbound webhook handlers dispatch attacker-controllable messages without authenticating the caller. No fix PR is visible in the sample; this is the single most urgent item in the project.
- **[#9647 — Knowledge graph has no per-agent attribution](https://github.com/zeroclaw-labs/zeroclaw/issues/9647)** — priority:p1, status:accepted. Any agent can read/mutate another agent's knowledge via the single shared graph. No fix PR visible yet.
- **[#9646 — Session/channel tools lack per-agent ownership scoping](https://github.com/zeroclaw-labs/zeroclaw/issues/9646)** — priority:p1, status:accepted. `sessions_list/history/send`, `discord_search`, etc. trust model-supplied IDs with no ownership check. No fix PR visible yet.

**S1 / High-impact fixes in flight**
- **Browser tool arbitrary file-write escape** (screenshot path not validated) → fix PR [#9362](https://github.com/zeroclaw-labs/zeroclaw/pull/9362) (priority:p1) validates destination against workspace policy.
- **Command audit logging misrepresented as active** (#9391) → fix PR [#9410](https://github.com/zeroclaw-labs/zeroclaw/pull/9410) defaults the inert setting to disabled and warns when enabled.
- **Cron agent jobs hang indefinitely, holding the SQLite lock** → fix PR [#9320](https://github.com/zeroclaw-labs/zeroclaw/pull/9320) (priority:p1) adds a wall-clock timeout that releases the lock.
- **`config set` leaves auto-created map aliases behind on failure** → fix PR [#9281](https://github.com/zeroclaw-labs/zeroclaw/pull/9281) (priority:p1) makes the write transactional.

**S2 / Correctness & reliability fixes in flight**
- **DeepSeek tool calls emitted as DSML / `<|tool_call|>` envelopes are not executed** → fix PR [#9723](https://github.com/zeroclaw-labs/zeroclaw/pull/9723).
- **Qwen-family invocations wrapped in `<tools>` declaration tag not recovered** → fix PR [#9477](https://github.com/zeroclaw-labs/zeroclaw/pull/9477).
- **Anthropic tool-result images never delivered (typed as plain String)** → fix PR [#9757](https://github.com/zeroclaw-labs/zeroclaw/pull/9757).
- **JSONL session migration not retry-safe** → fix PR [#9715](https://github.com/zeroclaw-labs/zeroclaw/pull/9715) adds a shared mutation lock + immediate SQLite transaction.
- **Turns ending on context exhaustion show no terminal notice** (agent appears idle) → fix PR [#9504](https://github.com/zeroclaw-labs/zeroclaw/pull/9504).
- **Risky Codex CLI extra args change sandbox/approval boundaries silently** → warning added in PR [#9548](https://github.com/zeroclaw-labs/zeroclaw/pull/9548).
- **Slack-only lifecycle code compiled into non-Slack builds** → gated in PR [#9754](https://github.com/zeroclaw-labs/zeroclaw/pull/9754) (low risk).
- **ZeroCode transient frames re-render full history, growing input latency** → fix PR [#9317](https://github.com/zeroclaw-labs/zeroclaw/pull/9317).
- **Quickstart checklist rows can be erased by dialoguer redraw accounting** → fix PR [#9399](https://github.com/zeroclaw-labs/zeroclaw/pull/9399).

## 6. Feature Requests & Roadmap Signals

Strong signals for the next release (targets a v0.9.0 security architecture per #7142):

- **OpenAI Chat Completions compatibility** ([#8603](https://github.com/zeroclaw-labs/zeroclaw/issues/8603)) — the highest-engagement RFC. If accepted, ZeroClaw becomes a drop-in backend for the OpenAI SDK ecosystem. High likelihood for the next milestone.
- **Goal mode v1** ([#8303](https://github.com/zeroclaw-labs/zeroclaw/issues/8303)) — bounded foreground Matrix work; a durable middle ground between single-turn and autonomous operation.
- **Shell command policy (allow/ask/deny)** ([#7155](https://github.com/zeroclaw-labs/zeroclaw/issues/7155)) — narrowed to a normative shell-policy contract in Revision 3; a realistic near-term addition.
- **A2A outbound client** ([#9324](https://github.com/zeroclaw-labs/zeroclaw/pull/9324)) — agent-to-agent interop is already implemented in PR form; likely to land in phases.
- **Runtime-owned conversation sessions + transport adapters** ([#9487](https://github.com/zeroclaw-labs/zeroclaw/issues/9487), with tracker [#9600](https://github.com/zeroclaw-labs/zeroclaw/issues/9600)) and the paired **[#9488 attachment architecture](https://github.com/zeroclaw-labs/zeroclaw/issues/9488)** — a coordinated ownership-boundary refactor spanning web, ACP, and channels.
- **Persistent memory parity** ([#8891](https://github.com/zeroclaw-labs/zeroclaw/issues/8891)) — an 18-item epic tracker; the curation/relevance/operability planes are being wired in a multi-PR rollout.
- **Pluggable inbound auth / canonical principals** ([#7141](https://github.com/zeroclaw-labs/zeroclaw/issues/7141)) and **runtime-owned security decision pipeline** ([#7142](https://github.com/zeroclaw-labs/zeroclaw/issues/7142)) — the v0.9.0 security architecture backbone.
- **Longer-tail signals:** unified slash-command registry ([#7929](https://github.com/zeroclaw-labs/zeroclaw/issues/7929)), WASM plugin lifecycle hooks ([#7822](https://github.com/zeroclaw-labs/zeroclaw/issues/7822)), Rust→Wasm web UI replacing React/Vite ([#8132](https://github.com/zeroclaw-labs/zeroclaw/issues/8132), 1 👍), plugin permission/secrets model ([#8398](https://github.com/zeroclaw-labs/zeroclaw/issues/8398)), and plugin-owned Kanban boards ([#8832](https://github.com/zeroclaw-labs/zeroclaw/issues/8832)).

**Prediction:** the next release will likely combine the v0.9.0 security work (fail-closed webhooks, shell confirmation policy, auth pipeline), the OpenAI-compatible API surface, and the A2A client phase 1 — with the session-persistence contract (#9600) as the integration crux.

## 7. User Feedback Summary

- **Interoperability is the loudest ask.** Users of Open WebUI, LobeChat, Continue.dev, Aider, LangChain, and the OpenAI SDK (per #8603) want ZeroClaw as a backend without writing custom adapters. The RFC's framing — "currently exposes agent capabilities only through WebSocket, ACP, and per-channel webhooks" — reads as a real adoption barrier.
- **Security trust is a recurring pain point.** Operators are pushing for fail-closed design (#9565), per-execution approval for shell (#7155), credential boundaries and audit honesty (#6971, #9410), and workspace-internal path protection via `.zeroclawignore` ([#8424](https://github.com/zeroclaw-labs/zeroclaw/issues/8424)).
- **Multi-agent isolation concerns are emerging.** The S0 bugs #9647 and #9646 both describe one agent reaching another agent's knowledge/sessions — a sign that real deployments are running multiple agents and assuming tenant isolation that does not yet exist.
- **Model compatibility friction.** Users are running DeepSeek and Qwen models and hitting tool-call envelope formats the parser doesn't understand (#9723, #9477) — the tool-call parser is a visible integration bottleneck.
- **Silent failure modes frustrate users.** Turns ending on context exhaustion with no message (#9504), history-trim notices that misreport budget usage (#9713), and cron jobs that hang without releasing locks (#9320) all degrade trust in agent visibility.
- **Configuration trust:** users note that saving config doesn't apply it until a full daemon reload ([#7897](https://github.com/zeroclaw-labs/zeroclaw/issues/7897)), and `config set` can leave partial state behind (#9281).
- **Positive signals:** The RFC process is being taken seriously — #7155 shows authors actively revising normative scope in response to maintainer review, and the maintainer decision queue (#8692) is a transparency measure the community appears to value.

## 8. Backlog Watch

Items that appear stalled or are waiting on a maintainer decision:

- **P1 RFCs awaiting maintainer review (longest-queued):**
  - [#7100 — Per-model capability & context-window config](https://github.com/zeroclaw-labs/zeroclaw/issues/7100) — created 2026-06-02 (64 days), priority:p1, needs-maintainer-review.
  - [#7155 — Shell command confirmation tier](https://github.com/zeroclaw-labs/zeroclaw/issues/7155) — created 2026-06-03 (63 days), priority:p1, needs-maintainer-review; actively revised, still pending decision.
  - [#7141 — Pluggable inbound authentication](https://github.com/zeroclaw-labs/zeroclaw/issues/7141) — created 2026-06-03 (63 days), priority:p1, needs-maintainer-review.
- **Accepted S0/S1 bugs with no visible fix PR yet:**
  - [#9565](https://github.com/zeroclaw-labs/zeroclaw/issues/9565) (p0, in-progress), [#9647](https://github.com/zeroclaw-labs/zeroclaw/issues/9647) (p1), [#9646](https://github.com/zeroclaw-labs/zeroclaw/issues/9646) (p1) — all accepted by maintainers but without an associated implementation in the PR sample.
- **Long-open accepted feature:** [#5607 — deterministic precondition gates for cron jobs](https://github.com/zeroclaw-labs/zeroclaw/issues/5607) — filed 2026-04-10, accepted, still open after ~117 days.
- **Stale needs-author-action RFCs (author MIA or unreviewed):** [#6850](https://github.com/zeroclaw-labs/zeroclaw/issues/6850), [#6971](https://github.com/zeroclaw-labs/zeroclaw/issues/6971), [#8043](https://github.com/zeroclaw-labs/zeroclaw/issues/8043), [#8424](https://github.com/zeroclaw-labs/zeroclaw/issues/8424), [#6996](https://github.com/zeroclaw-labs/zeroclaw/issues/6996), [#8832](https://github.com/zeroclaw-labs/zeroclaw/issues/8832), [#7929](https://github.com/zeroclaw-labs/zeroclaw/issues/7929), [#7897](https://github.com/zeroclaw-labs/zeroclaw/issues/7897), [#8132](https://github.com/zeroclaw-labs/zeroclaw/issues/8132), [#7822](https://github.com/zeroclaw-labs/zeroclaw/issues/7822), [#8398](https://github.com/zeroclaw-labs/zeroclaw/issues/8398), [#9246](https://github.com/zeroclaw-labs/zeroclaw/issues/9246).
- **Long-lived PR:** [#6622 — WhatsApp LID allowlist dispatch tests](https://github.com/zeroclaw-labs/zeroclaw/pull/6622) opened 2026-05-13 (84 days); a maintainer note says the branch was refreshed onto master, but it remains open and needs-author-action.

**Overall health assessment:** ZeroClaw is highly active with strong contributor diversity and a serious RFC culture, but maintainer bandwidth is the critical constraint — the decision queue (#8692) has been operating for a month and still holds multiple p1/p2 RFCs, while three S0/S1 security bugs sit accepted-but-unfixed. The pace of fix-PR authoring (tool parsing, config rollback, cron timeouts, path validation) suggests solid execution once decisions land.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/boom7sss/agents-radar).*