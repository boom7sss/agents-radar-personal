# OpenClaw Ecosystem Digest 2026-08-12

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-08-12 02:25 UTC

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

# OpenClaw Project Digest — 2026-08-12

## 1. Today's Overview

OpenClaw remains highly active, with 500 issues and 500 pull requests updated in the last 24 hours. Issue resolution is flowing — 117 issues and 221 PRs were closed/merged in the window — but the open backlog is substantial (383 open/active issues, 279 open PRs). The most energetic discussion by far is the recurring silent-reply failure ([#121058](https://github.com/openclaw/openclaw/issues/121058), 69 comments), which signals that message-delivery reliability is still the community's top pain point. A P0 packaging incident ([#121675](https://github.com/openclaw/openclaw/issues/121675)) — a beta published without its companion plugins causing a boot loop — was reported and closed within a day. No new releases were published today.

## 2. Releases

None in the last 24 hours.

## 3. Project Progress

221 PRs were merged/closed in the last 24 hours. In the visible sample, the confirmed closed PR is [#119528](https://github.com/openclaw/openclaw/pull/119528) (autmerged via clawsweeper), which timestamps recovered Claude CLI history to fix [#94679](https://github.com/openclaw/openclaw/issues/94679).

Strong forward progress is visible across open PRs advancing toward merge:

- **Queue durability**: [#82572](https://github.com/openclaw/openclaw/pull/82572) persists followup queues in SQLite across gateway restarts.
- **Device pairing**: [#120768](https://github.com/openclaw/openclaw/pull/120768) adds one-paste pairing via `oc-pair` setup links across Android/iOS/web.
- **Localization**: [#111541](https://github.com/openclaw/openclaw/pull/111541) adds locale context and message rendering; [#122355](https://github.com/openclaw/openclaw/pull/122355) refreshes native locales.
- **Gateway performance**: [#122350](https://github.com/openclaw/openclaw/pull/122350) keeps model catalog reads responsive, preventing CPU starvation on large installs.
- **iMessage reliability**: [#115531](https://github.com/openclaw/openclaw/pull/115531) reconciles send timeouts by exact attempt ID (prevents duplicate user-visible replies); [#117122](https://github.com/openclaw/openclaw/pull/117122) adds bounded native history reads.
- **Feishu resilience**: [#97295](https://github.com/openclaw/openclaw/pull/97295) retries once on token-invalid errors (99991663/99991664) with cache invalidation.
- **UI/UX**: [#122300](https://github.com/openclaw/openclaw/pull/122300) keeps usable multi-profile providers ready; [#122286](https://github.com/openclaw/openclaw/pull/122286) fixes Markdown marker drift; [#122296](https://github.com/openclaw/openclaw/pull/122296) keeps composer menus in the viewport.
- **Discord**: [#118579](https://github.com/openclaw/openclaw/pull/118579) binds voice transcript capture to the source account, fixing multi-account routing.
- **Session grounding**: [#122380](https://github.com/openclaw/openclaw/pull/122380) simplifies and hardens session companion grounding with fail-closed reset-state handling.

## 4. Community Hot Topics

Most active issues by comment count:

- [#121058](https://github.com/openclaw/openclaw/issues/121058) — **Silent reply failures still recurring** (69 comments). Users report the failure persists after #116277 was closed; a monitoring cron continues logging new occurrences. Closed-but-still-happening pattern suggests the fix did not cover the real path.
- [#116201](https://github.com/openclaw/openclaw/issues/116201) — **Realtime voice retains unbounded provider/consult state** (64 comments, P1 "diamond lobster"). Heavy maintainer/product/security labeling; resource-limit design discussion.
- [#25592](https://github.com/openclaw/openclaw/issues/25592) — **Text between tool calls leaks to messaging channels** (46 comments, P1). Internal processing output is being posted to Slack/iMessage; security review still pending after six months.
- [#7707](https://github.com/openclaw/openclaw/issues/7707) — **Memory Trust Tagging by Source** (43 comments, P2 security feature). Prevents memory poisoning from untrusted web/scraped content.
- [#92201](https://github.com/openclaw/openclaw/issues/92201) — **Anthropic thinking-signature replay failures** (23 comments, CLOSED). Resolved; users acknowledged the fix.
- [#42475](https://github.com/openclaw/openclaw/issues/42475) — **Per-agent cost budget enforcement** (21 comments, 1 👍).
- [#87744](https://github.com/openclaw/openclaw/issues/87744) — **Codex-backed Telegram turns time out** (17 comments, 3 👍).
- [#68596](https://github.com/openclaw/openclaw/issues/68596) — **Configurable streaming watchdog timeout** (15 comments, 8 👍). Highest-reacted open issue; extended-reasoning model users keep getting killed by the fixed 30s watchdog.

Underlying needs: delivery reliability, resource-bound enforcement, privacy of internal agent output, and configurability for long-reasoning models.

## 5. Bugs & Stability

Ranked by severity:

**P0 (resolved):**
- [#121675](https://github.com/openclaw/openclaw/issues/121675) — `2026.8.1-beta.1` published without companion `@openclaw/*` plugins, causing an unrecoverable startup boot loop. Closed within a day; a release-pipeline risk worth watching.

**P1 — open, no fix PR in flight:**
- [#121058](https://github.com/openclaw/openclaw/issues/121058) — Silent reply failures recurring; 69 comments, no fix PR visible.
- [#116201](https://github.com/openclaw/openclaw/issues/116201) — Unbounded realtime voice state retention.
- [#25592](https://github.com/openclaw/openclaw/issues/25592) — Internal text leaking to messaging channels (security impact).
- [#87744](https://github.com/openclaw/openclaw/issues/87744) — Codex-backed Telegram turns never reach `turn/completed`.
- [#74586](https://github.com/openclaw/openclaw/issues/74586) — Active-memory plugin aborts `memory_search` tool calls, misclassified as timeout.
- [#84516](https://github.com/openclaw/openclaw/issues/84516) — Codex app-server replies silently truncated at ~1000–1100 chars with no abort/finish reason.
- [#97616](https://github.com/openclaw/openclaw/issues/97616) — Leaked unreaped hook/tool child processes; zombie accumulation degrades runtime.
- [#71689](https://github.com/openclaw/openclaw/issues/71689) — Tasks registry fails to restore on malformed SQLite.
- [#121953](https://github.com/openclaw/openclaw/issues/121953) — Cron turns on DeepSeek stall because `[cron:...]` prefix is deprioritized by the API edge.
- [#114020](https://github.com/openclaw/openclaw/issues/114020) — Feishu/Telegram dispatch broken after `2026.7.2-beta.4` (`runDispatchLifecycle` required).
- [#112668](https://github.com/openclaw/openclaw/issues/112668) — `sessions_yield` abort-settle timeout still drops subagent announces post-SQLite rework.
- [#47975](https://github.com/openclaw/openclaw/issues/47975) — Subagent sessions persist after completion; main session becomes unresponsive.
- [#97983](https://github.com/openclaw/openclaw/issues/97983) — iOS/WebChat messages append to transcript but don't deliver assistant replies.

**P1 — fix PRs in flight:**
- [#117321](https://github.com/openclaw/openclaw/pull/117321) — Reject malformed base64 MCP App resource blobs (silent corrupted HTML).
- [#119993](https://github.com/openclaw/openclaw/pull/119993) — Fix `openclaw status` swallowing vector probe failures in empty `catch {}`.
- [#115531](https://github.com/openclaw/openclaw/pull/115531) — iMessage duplicate-reply prevention via exact attempt IDs.
- [#122200](https://github.com/openclaw/openclaw/pull/122200) — Expand truncated assistant messages on Android.
- [#122361](https://github.com/openclaw/openclaw/pull/122361) — Retain resolved images when one photo in a batch fails to read.
- [#107362](https://github.com/openclaw/openclaw/pull/107362) — Block unresolved Telegram reply targets before starting a turn.

**Memory/disk growth:**
- [#114612](https://github.com/openclaw/openclaw/issues/114612) — SQLite `memory_index_chunks`/`memory_embedding_cache` unbounded growth.
- [#89315](https://github.com/openclaw/openclaw/issues/89315) — Gateway heap grows until cgroup OOM kill (closed, but recurring theme).
- [#80131](https://github.com/openclaw/openclaw/issues/80131) — Per-request auth (5.5s) and tool bundling (8.9s) dominate TTFT.

## 6. Feature Requests & Roadmap Signals

Strong candidates for upcoming versions:

- **Memory trust tagging** ([#7707](https://github.com/openclaw/openclaw/issues/7707)) — P2 security feature; maintainer + security review labels attached.
- **Per-agent cost budgets at the gateway** ([#42475](https://github.com/openclaw/openclaw/issues/42475)) — natural fit with existing `session-cost-usage.ts` tracking.
- **Configurable streaming watchdog** ([#68596](https://github.com/openclaw/openclaw/issues/68596)) — 8 👍; high community demand from DeepSeek-R1/kimi users.
- **External security/guardrail interface** ([#72741](https://github.com/openclaw/openclaw/issues/72741)) — standard hook point for third-party safety checks.
- **Tool schema token reduction** ([#14785](https://github.com/openclaw/openclaw/issues/14785)) — ~3,500 tokens/session fixed tax; efficiency win.
- **MathJax/LaTeX in Control UI** ([#42840](https://github.com/openclaw/openclaw/issues/42840)) — 10 👍, highest-reacted feature in the sample.
- **Session snapshots** ([#13700](https://github.com/openclaw/openclaw/issues/13700)) — save/load context checkpoints for branching and rollback.
- **Multiple Teams bots per gateway** ([#71058](https://github.com/openclaw/openclaw/issues/71058)) — enterprise multi-tenant signal.

PR-side roadmap signals: one-paste pairing ([#120768](https://github.com/openclaw/openclaw/pull/120768)), followup queue persistence ([#82572](https://github.com/openclaw/openclaw/pull/82572)), localization infrastructure ([#111541](https://github.com/openclaw/openclaw/pull/111541)), and a "Where" picker/placement chip + projects read model ([#120804](https://github.com/openclaw/openclaw/pull/120804)) all appear close to shippable.

## 7. User Feedback Summary

**Recurring reliability pain (most severe):**
- Message delivery failures dominate: lost replies ([#121058](https://github.com/openclaw/openclaw/issues/121058)), duplicate messages via A2A `sessions_send` ([#39476](https://github.com/openclaw/openclaw/issues/39476)), premature/duplicated subagent announcements ([#80498](https://github.com/openclaw/openclaw/issues/80498)), and dropped announces after `sessions_yield` ([#112668](https://github.com/openclaw/openclaw/issues/112668)).
- Silent failures and misleading status: `openclaw status` falsely reports working mem0 memory as unavailable ([#57256](https://github.com/openclaw/openclaw/issues/57256)); `recovered=1` is misleading when MCP loopback transport doesn't re-handshake ([#98435](https://github.com/openclaw/openclaw/issues/98435)); model switches fail silently on oversized context ([#58957](https://github.com/openclaw/openclaw/issues/58957)).

**Upgrade/config friction:**
- Plugin/core version drift silently disables channels after upgrade ([#83337](https://github.com/openclaw/openclaw/issues/83337)).
- Unvalidated model names enable silent misconfiguration ([#39811](https://github.com/openclaw/openclaw/issues/39811)).
- Replacement channel plugins rejected by `config validate` ([#120332](https://github.com/openclaw/openclaw/pull/120332), fix in flight).

**Sentiment:** Users are engaged and technically generous — they attach repro scripts, monitoring cron evidence, and profiling data (e.g., [#121058](https://github.com/openclaw/openclaw/issues/121058), [#80131](https://github.com/openclaw/openclaw/issues/80131), [#89315](https://github.com/openclaw/openclaw/issues/89315)). But the repeated "we fixed it and it still happens" pattern on delivery reliability is eroding trust in that area.

## 8. Backlog Watch

Long-running, high-priority items needing maintainer attention:

- [#25592](https://github.com/openclaw/openclaw/issues/25592) — P1, since 2026-02-24, 46 comments. Needs maintainer review, product decision, and security review. Text leakage to messaging channels remains unfixed after nearly six months.
- [#14785](https://github.com/openclaw/openclaw/issues/14785) — P2 diamond lobster, since 2026-02-12. Tool schema token overhead; waiting on maintainer + product decision.
- [#7707](https://github.com/openclaw/openclaw/issues/7707) — P2, since 2026-02-03. Memory trust tagging; needs maintainer + security review.
- [#42475](https://github.com/openclaw/openclaw/issues/42475) — P2, since 2026-03-10. Per-agent cost budgets; needs maintainer + product decision.
- [#116201](https://github.com/openclaw/openclaw/issues/116201) — P1, since 2026-07-30. Realtime voice state; heavily labeled but awaiting product decision.
- [#87744](https://github.com/openclaw/openclaw/issues/87744) — P1, since 2026-05-28. Codex/Telegram timeouts; waiting on live repro.

**PRs waiting on author:**
[#82572](https://github.com/openclaw/openclaw/pull/82572), [#116093](https://github.com/openclaw/openclaw/pull/116093), [#111541](https://github.com/openclaw/openclaw/pull/111541), [#80396](https://github.com/openclaw/openclaw/pull/80396), [#120804](https://github.com/openclaw/openclaw/pull/120804), [#97295](https://github.com/openclaw/openclaw/pull/97295), [#120332](https://github.com/openclaw/openclaw/pull/120332), [#121690](https://github.com/openclaw/openclaw/pull/121690), [#122284](https://github.com/openclaw/openclaw/pull/122284), [#122350](https://github.com/openclaw/openclaw/pull/122350), [#122286](https://github.com/openclaw/openclaw/pull/122286).

**PRs needing proof:**
[#119993](https://github.com/openclaw/openclaw/pull/119993), [#115531](https://github.com/openclaw/openclaw/pull/115531), [#122200](https://github.com/openclaw/openclaw/pull/122200), [#107362](https://github.com/openclaw/openclaw/pull/107362), [#119030](https://github.com/openclaw/openclaw/pull/119030), [#122361](https://github.com/openclaw/openclaw/pull/122361).

**PRs ready for maintainer look (awaiting review):**
[#117321](https://github.com/openclaw/openclaw/pull/117321), [#122300](https://github.com/openclaw/openclaw/pull/122300), [#121994](https://github.com/openclaw/openclaw/pull/121994), [#122371](https://github.com/openclaw/openclaw/pull/122371), [#118579](https://github.com/openclaw/openclaw/pull/118579), [#122380](https://github.com/openclaw/openclaw/pull/122380), [#122296](https://github.com/openclaw/openclaw/pull/122296), [#119356](https://github.com/openclaw/openclaw/pull/119356).

---

**Overall project health:** The project is shipping steadily (221 PRs closed/merged in 24h) and has strong community engagement with detailed bug reports. The principal risk area is message-delivery reliability, where multiple P1s remain open and a previously closed issue (#121058) is demonstrably recurring. Release-process rigor is also a concern following the P0 beta-publishing incident. On the positive side, the maintainer pipeline is visibly active on stability fixes, and several large features (pairing, localization, queue persistence) are close to merge.

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report — Personal AI Assistant / Agent Open-Source Ecosystem
**2026-08-12**

---

## 1. Ecosystem Overview

The personal AI assistant ecosystem has evolved from a single reference design into a family of "Claw"-lineage projects (OpenClaw, PicoClaw, NanoClaw, ZeroClaw, IronClaw) plus independent agent frameworks (Hermes Agent, CoPaw, NanoBot, LobsterAI, Moltis) that are now competing less on raw features and more on reliability, token economics, and security. The dominant user pain across all projects is message-delivery trust: silent reply failures, dropped messages, and update regressions that make agents appear unresponsive. A second cross-cutting theme is token-cost pressure, as developers run real workloads on reasoning-heavy frontier models and hit fixed tool-schema overhead, 30-second watchdogs, and misleading context-window math. Security hardening — API-key isolation, sandbox bypasses, plugin permission gaps, memory poisoning — is becoming a prerequisite rather than a differentiator, while architects converge on modular designs: pluggable agent loops, durable local state, and provenance-aware memory.

---

## 2. Activity Comparison

| Project | Issues (24h: upd / closed / open) | PRs (24h: upd / merged / open) | Release status | Health score* |
|---|---|---|---|---|
| **OpenClaw** | 500 / 117 / 383 | 500 / 221 / 279 | None | 7.0 / 10 |
| **NanoBot** | 6 / 4 / 2 | 141 / 119 / 22 | None | 7.5 / 10 |
| **Hermes Agent** | 50 / — / — | 50 / 8 / — | None | 7.0 / 10 |
| **IronClaw** | 19 / 6 / 13 | 50 / 25 / 25 | None | 7.5 / 10 |
| **ZeroClaw** | 50 / 10 / 40 | 50 / 1 / 49 | None | 6.0 / 10 |
| **CoPaw (QwenPaw)** | 22 / 13 / 9 | 49 / 26 / 23 | **v2.1.0-beta.3** | 8.5 / 10 |
| **LobsterAI** | 4 / 3 / 1 | 9 / 6 / 3 | **2026.8.11** | 8.0 / 10 |
| **NanoClaw** | 1 / 0 / 1 | 7 / 3 / 4 | None | 7.0 / 10 |
| **PicoClaw** | 3 / 1 / 2 | 6 / 0 / 6 | None | 5.5 / 10 |
| **Moltis** | 0 / 0 / 0 | 1 / 0 / 1 | None | 6.0 / 10 |
| NullClaw / TinyClaw / ZeptoClaw | No activity | No activity | — | — |

*Health score is a qualitative composite of throughput, fix responsiveness, open-P1 load, and process hygiene, derived from the 24h digest.

**Notes:** NanoBot's 119 merged/closed PRs include a large share of `[conflict]`-labeled stale closures, not feature merges. ZeroClaw's 49-open-PR / 1-merge ratio signals a review-constrained queue, with the community itself filing a tracker for maintainer decision latency (#8692). OpenClaw's combined daily issue+PR volume (~1,000) is roughly **2× the rest of the active ecosystem combined** (~518).

---

## 3. OpenClaw's Position

### Advantages vs. peers
- **Scale and triage throughput:** 221 PRs merged/closed and 117 issues closed in 24 hours — no comparable project sustains this velocity.
- **Reference status:** the ecosystem's "Claw" naming lineage and compatibility expectations anchor on OpenClaw's gateway + plugin-channel model.
- **Channel breadth:** native iMessage, Discord, Feishu, Telegram, WhatsApp, Android/iOS/web pairing. Peers cover subsets (PicoClaw: Telegram/LINE; Hermes: desktop; ZeroClaw: WebSocket/web).
- **Mature infrastructure:** clawsweeper automerge, localization infrastructure, one-paste device pairing (#120768), SQLite queue durability (#82572), and a 500-issue/500-PR daily community providing rich repro data.

### Technical approach differences
- OpenClaw is a **centralized gateway with per-channel plugins and A2A inter-agent messaging**, whereas IronClaw plans to shed internal agent loops for pluggable ACP executors, ZeroClaw is a Rust-based RFC-governed security pipeline, Hermes is a desktop-app/gateway hybrid with a Windows update pipeline, and CoPaw centers on a Scroll-based memory lifecycle.
- **Reliability exposure:** the recurring silent-reply failure (#121058, 69 comments, previously "fixed") is the ecosystem's most visible unresolved trust issue. Peers are explicitly designing around this failure class (NanoClaw #3226).
- **Release hygiene:** the P0 beta-without-plugins boot-loop incident (#121675) contrasts with LobsterAI's and CoPaw's clean release motion this week.

### Community size comparison
- OpenClaw's 24h activity (~1,000 issue+PR updates) exceeds all other tracked projects combined by ~2×. The next tier (Hermes, ZeroClaw, NanoBot, IronClaw, CoPaw) each runs at 50–150 updates/day.
- OpenClaw contributes the ecosystem's deepest bug-report quality: users attach repro scripts, monitoring-cron evidence, and profiling data (#121058, #80131, #89315). However, the "we fixed it and it still happens" pattern on delivery reliability is eroding trust in that specific area.

---

## 4. Shared Technical Focus Areas

- **Guaranteed message delivery (the #1 requirement).** OpenClaw (#121058 silent replies, #115531 duplicate prevention, #112668 dropped announces), NanoClaw (#3226 silent drops on message-ID reuse), Hermes (#84185/#83683 gateway cold-start silences channels), ZeroClaw (#9911 Matrix follow-ups dropped), PicoClaw (#3301 routed-session context loss). Need: exactly-once delivery semantics with visible failure states — "dropped" must never be indistinguishable from "ignored."

- **Token-cost reduction.** OpenClaw (#14785 tool-schema tax ~3,500 tok/session), Hermes (#6839 lazy tool schema, 18👍), IronClaw (#7485 token estimator double-counts ASCII, halving effective context; #7484 hard clamp evicts the user task), ZeroClaw (#2269 workloads "prohibitively expensive"). Need: schema-efficient tool injection, correct context accounting, configurable watchdogs for long-reasoning models (OpenClaw #68596, 8👍).

- **Memory lifecycle and trust provenance.** OpenClaw (#7707 memory trust tagging, #114612 unbounded SQLite growth), Hermes (#34352 memory-layer bypass blocks multi-tenancy), IronClaw (#7505 mem0 target-alias contract mismatch), CoPaw (#6564/#6830 memory flush before compression), NanoBot (session isolation). Need: provenance-aware memory writes and bounded, provider-consistent memory stores.

- **Security: secrets and sandbox boundaries.** NanoBot (#5306 `exec.allowPatterns` shell-chain bypass, #4784 cross-provider API-key leak), Hermes (#84199 `model_aliases` key leak), ZeroClaw (#9872 delegate workspace escape, #7155 shell allow/ask/deny policy), CoPaw (#6916 plugins can silently create cron jobs and inject messages), OpenClaw (#25592 internal text leaking to Slack/iMessage, P1 since February). Need: per-provider secret isolation, validated sandbox allowlists, explicit plugin permission approval.

- **Upgrade/update reliability.** OpenClaw (P0 beta packaging incident), Hermes (Windows update cluster: #84185, #83562, #63717), NanoClaw (#3195 transactional upgrades), LobsterAI (#1183 gateway startup loop). Need: transactional upgrades with post-update health verification before reporting success.

- **Standard API interoperability.** ZeroClaw (#8603 OpenAI-compatible Chat Completions for Open WebUI/LobeChat/Continue.dev/Aider), NanoBot (#5333 OpenRouter server tools, #5328 OrcaRouter), CoPaw (#6817 AnySearch), Hermes (#84202 OneBot/QQ adapter). Need: expose agents through existing OpenAI-SDK surfaces rather than proprietary channels only.

---

## 5. Differentiation Analysis

| Project | Core identity | Target users | Architectural signature |
|---|---|---|---|
| **OpenClaw** | The gateway standard | Self-hosters, multi-channel teams, power users | Plugin-channel gateway, SQLite durability, A2A |
| **NanoBot** | Secure Python agent runner | Ops-minded developers, security-sensitive teams | `exec` sandbox policies, WebUI presets, provider isolation |
| **Hermes Agent** | Desktop-first personal agent | Windows/macOS desktop users, enterprise | Desktop app + gateway, Windows update pipeline, god-file sharding |
| **IronClaw** | Durable execution kernel | NEAR ecosystem, automation fleets | Reborn refactor, pluggable ACP loops, NEAR staking for inference |
| **ZeroClaw** | RFC-governed secure runtime (Rust) | Enterprises, security reviewers | RFC-driven design, Rust core, OIDC, sandbox isolation |
| **CoPaw (QwenPaw)** | Memory-native assistant (Qwen) | Chinese-speaking power users, Alibaba ecosystem | Scroll memory lifecycle, Console UI, Computer Use, rapid betas |
| **LobsterAI** | Desktop Cowork UI over a gateway | NetEase/Youdao users, Windows desktop | Cowork scheduling, model thinking levels, settings safety |
| **NanoClaw** | MCP-extensible agent templates | Developers shipping agent-as-template products | Agent Plugins 1.0.0, remote Streamable HTTP MCP |
| **PicoClaw** | Lightweight routed-agent companion | SMB/hobbyists, LINE/Telegram users | Dispatch-rule routing, low maintenance activity |
| **Moltis** | Local-first connector layer | Privacy-focused local-data users | Durable CalDAV snapshots + agent dataset tool |

---

## 6. Community Momentum & Maturity

- **Tier 1 — High velocity, actively shipping:** **CoPaw** (beta.3 release + 26 PRs merged, feature-dense memory/UI/Computer-Use work), **LobsterAI** (clean release, mainline merges, steady cadence), **IronClaw** (25 merges, focused epics despite mid-refactor churn). These projects exhibit the best merge-to-noise ratio this week.
- **Tier 2 — High volume, process-constrained:** **OpenClaw** (massive throughput but backlog-heavy: 383 open issues, 279 open PRs, P1 delivery/leak issues unresolved), **NanoBot** (high PR churn diluted by conflict closures; security triage active), **Hermes** (responsive same-day fix PRs but a P1 Windows regression cluster remains), **ZeroClaw** (50 PRs touched / 1 merged — RFC decision latency is the bottleneck).
- **Tier 3 — Moderate / maintenance phase:** **NanoClaw** (small but meaningful MCP extensibility progress), **PicoClaw** (fix PRs aging into `[stale]` without maintainer review).
- **Tier 4 — Quiet / dormant:** **Moltis** (single long-running PR), **NullClaw**, **TinyClaw**, **ZeptoClaw** (no activity).

---

## 7. Trend Signals

1. **Reliability is the new feature.** Delivery-loss and update-regression reports dominate OpenClaw, NanoClaw, Hermes, and ZeroClaw. The competitive battleground is shifting from model capability to "does the reply arrive exactly once, every time, with a visible failure state." Agent developers should instrument delivery acknowledgment and replay semantics from day one.

2. **Token overhead is a product tax.** Tool-schema reduction, lazy loading, explicit Anthropic cache breakpoints (IronClaw #6997), and prompt-cache token logging (PicoClaw #3317) are emerging independently across five projects. Expect per-call schema efficiency to become a default selling point, especially for local-model users.

3. **Long-reasoning models break fixed assumptions.** Configurable streaming watchdogs (OpenClaw #68596), per-model thinking levels (LobsterAI #2457/#2475), and duplicate-output suppression during reasoning (NanoBot #5327) are direct community responses to R1-class models. Fixed 30-second timeouts and global thinking levels will not survive contact with current frontier models.

4. **Security is moving from feature to prerequisite.** API-key leakage via environment mutation, sandbox allowlist bypasses, plugin cron injection, and memory poisoning are P1/P0 across NanoBot, Hermes, CoPaw, ZeroClaw, and OpenClaw. External guardrail interfaces (OpenClaw #72741) and trust-tagged memory (#7707) are the likely next table stakes.

5. **Multi-agent orchestration is shifting from demo to contract.** A2A duplicate replies (OpenClaw #39476), shadow-instance duplication (CoPaw #6918), delegate workspace escape (ZeroClaw #9872), and tenant-isolation demands (Hermes #34352) indicate that inter-agent protocols, per-agent resource ownership, and durable session leases are the next architecture frontier.

6. **Standard API interop unlocks adoption.** ZeroClaw's OpenAI-compatible Chat Completions RFC and NanoBot's gateway-provider additions show that proprietary channel exposure limits adoption. Developers want to plug agents into existing OpenAI-SDK tooling (Open WebUI, LobeChat, Continue.dev, Aider).

**Bottom line for developers:** The ecosystem is consolidating around five requirements — guaranteed delivery, bounded token cost, provenance-aware memory, hardened secret/sandbox handling, and standard API surfaces. CoPaw and LobsterAI are gaining momentum by shipping steadily on these axes; OpenClaw retains scale leadership but must resolve its delivery-reliability reputation to keep it. For new builds, prefer architectures with explicit delivery semantics, durable local state, and pluggable agent loops rather than monolithic, chat-paradigm-coupled designs.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-08-12

## 1. Today's Overview
NanoBot saw moderate issue activity with 6 issues updated in the last 24 hours: 2 remain open/active and 4 were closed. Pull request activity is very high, with 141 PRs updated over the same window — 22 open and 119 merged/closed. No new releases were published. The PR churn is notable because many visible closed PRs carry a `[conflict]` label, suggesting automated cleanup/stale-PR closing rather than a wave of feature merges. Overall, the project appears stable but heavily focused on security hardening, loop prevention, and provider/UX improvements.

## 2. Releases
No new releases were published in this window.

## 3. Project Progress
- 119 PRs were reported as merged/closed during the update window, but the most visible closed PRs are older contributions marked `[conflict]`, e.g.:
  - [#2181 Xiaomi MiMo provider support](https://github.com/HKUDS/nanobot/issues/2181) — closed, conflict
  - [#1367 kimi-coding model mapping](https://github.com/HKUDS/nanobot/issues/1367) — closed, conflict
  - [#1321 Tavily search tool support](https://github.com/HKUDS/nanobot/issues/1321) — closed, conflict
  - [#1199 fallback model support](https://github.com/HKUDS/nanobot/issues/1199) — closed, conflict
- These were likely not merged but closed due to conflicts/outdatedness.
- Active in-flight fixes and features are concentrated in open PRs:
  - [#5347 WebUI provider/model preset management](https://github.com/HKUDS/nanobot/pull/5347)
  - [#5346 Fix one-shot exec process-tree cleanup](https://github.com/HKUDS/nanobot/pull/5346)
  - [#5344 Add warning on repeated identical tool calls](https://github.com/HKUDS/nanobot/pull/5344)
  - [#5341 Windows-safe weather workflow](https://github.com/HKUDS/nanobot/pull/5341)
  - [#5338 Preserve MCP credentials when OAuth store read fails](https://github.com/HKUDS/nanobot/pull/5338)
- No newly merged feature can be confirmed from the visible PR subset.

## 4. Community Hot Topics
- [#5327 “Nanobot repeats multiple times the same message while reasoning”](https://github.com/HKUDS/nanobot/issues/5327) — 10 comments, closed  
  The most active issue today. Users report duplicate reasoning output seemingly at random, hurting trust in agent output. Its closure suggests a fix or workaround was identified.
- [#5256 “/goal message produces dozens of repeated replies when waiting for user’s answer”](https://github.com/HKUDS/nanobot/issues/5256) — open, 2 comments  
  Another repetition/loop bug, tied to sustained-goal handling. A companion fix PR [#5257](https://github.com/HKUDS/nanobot/pull/5257) is open.
- [#5306 “exec.allowPatterns shell-chain bypass allows unintended command execution”](https://github.com/HKUDS/nanobot/issues/5306) — open, 1 comment  
  Security advisory around sandbox/exec restrictions. High visibility due to safety implications.
- [#4784 “Provider API keys leaked between providers via global os.environ mutation”](https://github.com/HKUDS/nanobot/issues/4784) — closed  
  Security issue that likely received significant maintainer attention and is now resolved.

Underlying needs: users want reliable, non-repeating agent behavior; stronger security boundaries; and clearer control over provider/API-key handling.

## 5. Bugs & Stability
Ranked by severity:

1. **High — [#5306 `exec.allowPatterns` shell-chain bypass](https://github.com/HKUDS/nanobot/issues/5306)**  
   Open security vulnerability. May allow command execution outside configured patterns. No visible fix PR yet.
2. **High — [#4784 API key leakage between providers](https://github.com/HKUDS/nanobot/issues/4784)**  
   Closed, but was serious: `os.environ` mutation could overwrite/leak provider keys across providers.
3. **High — [#4783 CLI apps run with full environment, leaking API keys](https://github.com/HKUDS/nanobot/issues/4783)**  
   Closed. Subprocesses could inherit all provider secrets.
4. **Medium — [#5256 `/goal` repeated replies loop](https://github.com/HKUDS/nanobot/issues/5256)**  
   Open. Causes dozens of duplicate replies. Fix PR [#5257](https://github.com/HKUDS/nanobot/pull/5257) exists.
5. **Medium — [#5346 one-shot exec cleanup gap](https://github.com/HKUDS/nanobot/pull/5346)**  
   Open fix for orphaned child processes after timeout/cancellation.
6. **Medium — [#5338 MCP OAuth store read failure overwrites credentials](https://github.com/HKUDS/nanobot/pull/5338)**  
   Open fix for credential preservation.
7. **Low — [#5341 Windows `curl` alias issue in weather skill](https://github.com/HKUDS/nanobot/pull/5341)**  
   Open fix for Windows compatibility.

## 6. Feature Requests & Roadmap Signals
- [#5333 OpenRouter server tools support](https://github.com/HKUDS/nanobot/issues/5333)  
  Users want OpenRouter’s built-in server tools (Web Search, Web Fetch, etc.). Likely a near-term provider integration.
- [#5347 WebUI provider and model preset management](https://github.com/HKUDS/nanobot/pull/5347)  
  Suggests better self-service provider configuration in the WebUI.
- [#5342 Redesign apps discovery](https://github.com/HKUDS/nanobot/pull/5342)  
  Points toward stronger curated app registry and MCP setup UX.
- [#5328 Add OrcaRouter as a named gateway provider](https://github.com/HKUDS/nanobot/pull/5328)  
  Another gateway provider request, showing demand for multi-provider routing.
- [#5283 Per-session sandbox isolation for non-WebUI channels](https://github.com/HKUDS/nanobot/pull/5283)  
  Signals roadmap interest in stronger workspace isolation.
- [#4291 Subagents using configurable model presets](https://github.com/HKUDS/nanobot/pull/4291)  
  Older but still open; would give spawn/subagent workflows more flexibility.

Likely next-version themes: server-tool support, provider/gateway expansion, WebUI provider management, and sandboxing.

## 7. User Feedback Summary
- **Positive sentiment**: One requester explicitly thanked the project (#5333), indicating a generally appreciative community.
- **Pain points**:
  - Repetitive replies during reasoning or sustained-goal turns (#5327, #5256).
  - Security anxiety around API key isolation and subprocess environments (#4784, #4783, #5306).
  - Cross-platform issues, e.g. PowerShell `curl` alias behavior (#5341).
- **Use cases**: Users are running NanoBot for investigative tasks, Telegram interactions, cron/scheduled delivery, web search, and multi-provider routing. They expect predictable, bounded agent loops and secure secret handling.

## 8. Backlog Watch
- [#5306 `exec.allowPatterns` shell-chain bypass](https://github.com/HKUDS/nanobot/issues/5306) — open security issue with only 1 comment; needs maintainer triage and likely a fast fix.
- [#5256 `/goal` repeated replies](https://github.com/HKUDS/nanobot/issues/5256) — open bug with fix PR [#5257](https://github.com/HKUDS/nanobot/pull/5257) still pending review.
- [#4291 Subagents use configurable model presets](https://github.com/HKUDS/nanobot/pull/4291) — open since June 11; feature is still awaiting maintainer attention.
- [#5283 Per-session sandbox isolation](https://github.com/HKUDS/nanobot/pull/5283) — open since Aug 7; significant security/architecture change that needs review.
- Older conflict-labeled PRs (#2181, #1367, #1321, #1199, etc.) are being closed; maintainers may need to confirm whether any should be revived or rebased rather than lost.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-08-12

## 1. Today's Overview

Hermes Agent is in a high-activity phase: 50 issues and 50 PRs were updated in the last 24 hours, with 8 PRs merged/closed and no new release cut. The dominant theme is reliability around Windows desktop updates and gateway/session state, where several regressions were reported and same-day fix PRs appeared. On the architecture side, the god-file sharding epic ([#78647](https://github.com/NousResearch/hermes-agent/issues/78647)) and token-overhead reduction ([#6839](https://github.com/NousResearch/hermes-agent/issues/6839)) continue to drive discussion. Overall, maintainers are responding quickly to fresh regressions, but the cluster of P1 Windows issues indicates release and update-process friction remains the main project-health risk.

## 2. Releases

No new releases were published in this 24-hour window.

## 3. Project Progress

8 PRs are marked merged/closed in the last 24h. The visible closed set from the top-20 list:

- [PR #78149](https://github.com/NousResearch/hermes-agent/pull/78149) — `fix(cli): recognize prefixed MCP toolsets`
- [PR #78172](https://github.com/NousResearch/hermes-agent/pull/78172) — `fix(cron): enforce profile cap for review dispatch`
- [PR #78143](https://github.com/NousResearch/hermes-agent/pull/78143) — `fix(kanban): count dry-run spawns toward global cap`

Several significant fixes and features are now in open PRs:

- [PR #84212](https://github.com/NousResearch/hermes-agent/pull/84212) — verifies Windows gateway cold-start survives before reporting update success, targeting [#84185](https://github.com/NousResearch/hermes-agent/issues/84185)
- [PR #84198](https://github.com/NousResearch/hermes-agent/pull/84198) — makes post-reset sessions visible in session lists, targeting [#84109](https://github.com/NousResearch/hermes-agent/issues/84109)
- [PR #84201](https://github.com/NousResearch/hermes-agent/pull/84201) — prevents delegated child marker snapshot leaks affecting terminal sessions
- [PR #84199](https://github.com/NousResearch/hermes-agent/pull/84199) — stops cross-provider API-key leak for `model_aliases`
- [PR #84202](https://github.com/NousResearch/hermes-agent/pull/84202) — adds a OneBot 11 platform adapter for QQ via NapCat/Lagrange/LLOneBot
- [PR #83432](https://github.com/NousResearch/hermes-agent/pull/83432) — stops local bridge impersonation on WhatsApp
- [PR #84210](https://github.com/NousResearch/hermes-agent/pull/84210) — adds retry handling for transient Telegram media downloads
- [PR #84209](https://github.com/NousResearch/hermes-agent/pull/84209) — adds desktop `host.attachFileToComposer` SDK door

## 4. Community Hot Topics

- [Issue #78647 — Epic: Shard all 20 god files](https://github.com/NousResearch/hermes-agent/issues/78647) — 67 comments  
  Repo-wide decomposition of god files is now standing policy. The discussion is about enforcement, sharding order, and avoiding duplication during the refactor.

- [Issue #6839 — Lazy Tool Schema Loading](https://github.com/NousResearch/hermes-agent/issues/6839) — 38 comments, 18 👍  
  Users report 3,500–5,000 tokens per call wasted on full tool schemas, especially painful for local models. This is the clearest demand-side signal for token-efficiency work.

- [Issue #34352 — Solving the Multi-Tenant Hermes Problem](https://github.com/NousResearch/hermes-agent/issues/34352) — 25 comments, 3 👍  
  Memory operations bypass the hook system, making tenant isolation impossible without forking core. The author says they have run a production fix for months — a strong signal that multi-tenant orchestration is a real enterprise need.

- [Issue #67442 — Cross-process turn serialization](https://github.com/NousResearch/hermes-agent/issues/67442) — 14 comments  
  A narrow but important session-state edge case: separate OS processes sharing a gateway session still lack a DB-level lease.

Underlying needs: lower token cost, multi-tenant isolation, durable session state, and continued architectural cleanup.

## 5. Bugs & Stability

Regressions and unresolved bugs ranked by severity:

### P1 / Critical

- [Issue #84185 — Windows gateway cold-started after `hermes update` dies silently](https://github.com/NousResearch/hermes-agent/issues/84185)  
  Gateway never writes logs, no PID, no exit record — offline until manual restart. Fix PR: [#84212](https://github.com/NousResearch/hermes-agent/pull/84212)

- [Issue #84200 — macOS Desktop backend SIGTERMs the launchd-managed gateway](https://github.com/NousResearch/hermes-agent/issues/84200)  
  Every Desktop-triggered update kills the gateway via `_reap_unsupervised_gateway_orphans()`. No fix PR visible in this snapshot.

- [Issue #84109 — Gateway sessions created after reset are invisible in session lists](https://github.com/NousResearch/hermes-agent/issues/84109)  
  Regression from session-identity durability change. Fix PR: [#84198](https://github.com/NousResearch/hermes-agent/pull/84198)

- [Issue #83683 — Desktop restart reaps the live gateway but never relaunches it](https://github.com/NousResearch/hermes-agent/issues/83683)  
  Windows WeChat/QQ/Telegram go silent after desktop restart. No fix PR visible.

- [Issue #83562 — Windows Desktop update: backend works manually but Desktop reports "exited (0)"](https://github.com/NousResearch/hermes-agent/issues/83562)  
  Update/repair flow broken after updating Desktop on Windows.

- [Issue #63717 — Windows Desktop update failures: 7 correlated root causes](https://github.com/NousResearch/hermes-agent/issues/63717)  
  Broad diagnostic covering lock chains, venv issues, and update-handoff failures.

### P2 / Major

- [Issue #83213 — Background process completion notifications misrouted after `/new`](https://github.com/NousResearch/hermes-agent/issues/83213)
- [Issue #83427 — `browser_exec` crashes with `pydantic_core` ModuleNotFoundError](https://github.com/NousResearch/hermes-agent/issues/83427)
- [Issue #84102 — Local TTS writes Ogg/Vorbis into `.ogg` paths, degrading voice bubbles](https://github.com/NousResearch/hermes-agent/issues/84102)
- [Issue #69672 — FTS5 indexes NUL-prefixed JSON sentinel, causing DB bloat and SQLite-version-dependent errors](https://github.com/NousResearch/hermes-agent/issues/69672)
- [Issue #52179 — Bedrock Guardrails configured but never enforced](https://github.com/NousResearch/hermes-agent/issues/52179)

### P3 / Lower

- [Issue #83448 — `hermes kanban show` queries task graph after closing database connection](https://github.com/NousResearch/hermes-agent/issues/83448)

## 6. Feature Requests & Roadmap Signals

High-signal feature requests currently open:

- [Issue #6839 — Lazy Tool Schema Loading / Two-Pass Tool Injection](https://github.com/NousResearch/hermes-agent/issues/6839)  
  Strong candidate for a near-term token-cost optimization.

- [Issue #34352 — Multi-Tenant Hermes](https://github.com/NousResearch/hermes-agent/issues/34352)  
  The production-ready fix described in the issue makes this likely to move if maintainers accept the memory-layer API change.

- [Issue #83244 — Add Google Antigravity as a first-class OAuth provider](https://github.com/NousResearch/hermes-agent/issues/83244)  
  User demand for Claude Sonnet/Opus + Gemini via Antigravity OAuth.

- [Issue #72658 — Pre-completion vault verification gate for task workflow](https://github.com/NousResearch/hermes-agent/issues/72658)  
  Requests a verification gate before kanban tasks complete, aimed at multi-agent fleet orchestration.

- [Issue #67440 — Blast-radius review mode with proof-backed safety facts](https://github.com/NousResearch/hermes-agent/issues/67440)  
  Smaller-scope review-mode pattern adapted from cursor/plugins.

- [PR #84202 — OneBot 11 platform adapter](https://github.com/NousResearch/hermes-agent/pull/84202)  
  If merged, adds non-official QQ bridge support as a plugin.

Prediction: the next version is likely to prioritize Windows update/gateway cold-start fixes, post-reset session visibility, and token-efficiency work such as lazy tool schema loading. The OneBot adapter and desktop SDK additions are plausible features to land in the next minor release.

## 7. User Feedback Summary

- **Windows update process is the loudest pain point.** Multiple users report `hermes update` lock failures, dead gateways after update, and desktop-app update breakage ([#84185](https://github.com/NousResearch/hermes-agent/issues/84185), [#83562](https://github.com/NousResearch/hermes-agent/issues/83562), [#63717](https://github.com/NousResearch/hermes-agent/issues/63717), [#68760](https://github.com/NousResearch/hermes-agent/issues/68760), [#82186](https://github.com/NousResearch/hermes-agent/issues/82186), [#62792](https://github.com/NousResearch/hermes-agent/issues/62792)).

- **Desktop users depend on gateway continuity.** The recurring "WeChat/QQ/Telegram go silent" outcome makes gateway lifecycle bugs feel severe even when they are narrow regressions.

- **Token overhead is a real friction point for local-model users.** The 18 👍 on [#6839](https://github.com/NousResearch/hermes-agent/issues/6839) show broad support for reducing per-call tool-schema cost.

- **Multi-tenancy demand is ahead of core architecture.** Users are running production forks to work around memory-hook bypass ([#34352](https://github.com/NousResearch/hermes-agent/issues/34352)).

- **Responsiveness is a positive signal.** Several bugs filed on 2026-08-11/12 already have fix PRs, indicating maintainers are actively triaging the regression wave.

## 8. Backlog Watch

Items that appear stalled or need maintainer attention:

- [Issue #6839 — Lazy Tool Schema Loading](https://github.com/NousResearch/hermes-agent/issues/6839)  
  Open since April, 18 👍, 38 comments, still `needs-decision`.

- [Issue #34352 — Multi-Tenant Hermes Problem](https://github.com/NousResearch/hermes-agent/issues/34352)  
  Open since May, has a production-tested fix described in detail, still awaiting architectural sign-off.

- [Issue #52179 — Bedrock Guardrails never enforced](https://github.com/NousResearch/hermes-agent/issues/52179)  
  Security-relevant P2 bug open since June with no visible fix.

- [Issue #29590 — Hardcoded `max_tokens` and verbose prompt in vision tools causes latency](https://github.com/NousResearch/hermes-agent/issues/29590)  
  Open since May, P2 performance issue, little recent movement.

- [Issue #47954 — Memory provider 'honcho' race condition on startup](https://github.com/NousResearch/hermes-agent/issues/47954)  
  P3 but has been open since June and is still producing startup warnings.

- [PR #62191 — Resolve venv dir for both `venv/` and `.venv/` layouts](https://github.com/NousResearch/hermes-agent/pull/62191)  
  Open since July 10; relevant to the Windows update-lock problem but not yet merged.

- [Issue #63717 — Windows Desktop update failure diagnostic](https://github.com/NousResearch/hermes-agent/issues/63717)  
  P1, open since mid-July, lists multiple correlated root causes that no single fix has fully addressed.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-08-12

## 1. Today's Overview

PicoClaw activity is moderate: 3 issues and 6 pull requests were updated in the last 24 hours, but no PRs were merged or closed and no new releases were published. The project is in a mostly bug-fixing and feature-contribution phase, with open PRs addressing agent context management, Telegram topic handling, custom tool permissions, and a new web search provider. Two issues remain open as active bugs, while one issue was closed as stale. Maintainer attention appears to be needed on several older PRs, several of which have already been marked `[stale]`.

## 2. Releases

No new releases in the last 24 hours. There are no release notes to report.

## 3. Project Progress

No PRs were merged or closed in the last 24 hours. The only closed item was Issue #3294, which was closed as `[stale]`.

Active open PRs that would advance the project if merged:

- [#3316 fix: routed-agent context management not respecting history, summarization, compression, and seahorse bootstrap](https://github.com/sipeed/picoclaw/issues/3316) — fixes a core bug for routed non-default agents.
- [#3314 Fix: agent not able to execute shell command added to customAllowPatterns](https://github.com/sipeed/picoclaw/issues/3314) — corrects command allow-list precedence.
- [#3315 Support topics in private bot chats](https://github.com/sipeed/picoclaw/issues/3315) — improves Telegram topic detection.
- [#3317 feat(providers): log prompt cache tokens in LLM response debug output](https://github.com/sipeed/picoclaw/issues/3317) — adds provider cache observability.
- [#3299 Add native Exa web search provider](https://github.com/sipeed/picoclaw/issues/3299) — adds Exa as a `tools.web` / `web_search` provider.
- [#3329 fix(line): warn on inert webhook_host / webhook_port instead of seeding them](https://github.com/sipeed/picoclaw/issues/3329) — fixes silently ignored LINE webhook configuration.

## 4. Community Hot Topics

The most-commented items in the last 24 hours are both issues with 3 comments each:

- [#3301 [BUG] /clear and session auto-compression don't work in chats routed to non-default agent via dispatch rules](https://github.com/sipeed/picoclaw/issues/3301)  
  This is tied to a real user workflow: routing agents to Discord/Telegram channels and expecting session memory, `/clear`, and auto-compression to behave like default-agent chats. The issue has an associated fix PR (#3316), indicating the community is actively validating and repairing routed-agent behavior.

- [#3294 [stale] /list models only shows the current model instead of all configured models](https://github.com/sipeed/picoclaw/issues/3294)  
  Users expect `/list models` to reflect all models in `model_list`, not just the active model. Although the issue was closed as stale, it highlights a UX gap around model configuration visibility.

No reactions were recorded on these issues, and PR comment counts were not provided.

## 5. Bugs & Stability

No critical crashes or regressions were newly reported outside of the already-tracked issues. Ranked by severity:

1. **High — Routed-agent session context loss** ([#3301](https://github.com/sipeed/picoclaw/issues/3301))  
   Non-default agents routed via dispatch rules do not retain history, `/clear` does not work, and auto-compression never triggers. A fix PR exists: [#3316](https://github.com/sipeed/picoclaw/issues/3316).

2. **Medium — `customAllowPatterns` is ignored due to default deny precedence** ([#3314](https://github.com/sipeed/picoclaw/issues/3314))  
   Commands like `git push` are blocked even when explicitly added to the exec allow list. The fix has been submitted in PR #3314.

3. **Medium — LINE `webhook_host` / `webhook_port` settings have no effect** ([#3328](https://github.com/sipeed/picoclaw/issues/3328))  
   Settings are declared, defaulted, and documented but never consumed, leading to silent misconfiguration. A fix PR exists: [#3329](https://github.com/sipeed/picoclaw/issues/3329).

4. **Low/Medium — Telegram topics not handled in private bot chats** ([#3315](https://github.com/sipeed/picoclaw/issues/3315))  
   Topics are only recognized when `Chat.IsForum` is true, missing private chats with bot topic mode enabled. PR #3315 addresses this.

5. **Low — `/list models` shows only the current model** ([#3294](https://github.com/sipeed/picoclaw/issues/3294))  
   Misleading command output; closed as stale but remains a potential consistency issue.

## 6. Feature Requests & Roadmap Signals

The following user-driven features are visible in currently open PRs and issues:

- **Native Exa web search provider** ([#3299](https://github.com/sipeed/picoclaw/issues/3299)) — would add Exa as a first-class search backend with date-range support.
- **Telegram topics in private bot chats** ([#3315](https://github.com/sipeed/picoclaw/issues/3315)) — broader Telegram integration for forum-topic-enabled private conversations.
- **Prompt cache token logging** ([#3317](https://github.com/sipeed/picoclaw/issues/3317)) — useful for users of DeepSeek/Cloudflare AI Gateway who need cache-aware cost and latency debugging.
- **Better `/list models` behavior** ([#3294](https://github.com/sipeed/picoclaw/issues/3294)) — users want complete visibility into configured models.

If the current open PRs are merged, the next version will likely include routed-session context fixes, custom exec-allow-pattern corrections, Telegram topic improvements, LINE webhook configuration warnings, and possibly Exa web search support.

## 7. User Feedback Summary

Real user pain points reported in this period include:

- Routed agents lose conversation memory and never trigger auto-compression, making multi-channel agent workflows unreliable.
- Explicitly allowed shell commands are still blocked due to default-deny precedence.
- LINE webhook settings are documented but silently ignored, causing deployment confusion.
- Telegram topic support is incomplete for private bot chats.
- `/list models` is confusing because it only lists the active model.
- Provider response logs lack cache token information, making debugging harder in gateway setups.

The satisfaction signal is mixed: users are encountering real stability and configuration bugs, but many have also contributed fixes via pull requests, indicating an engaged and technically invested community.

## 8. Backlog Watch

Several open PRs and issues appear to need maintainer attention, especially those already marked `[stale]`:

- [#3299 Add native Exa web search provider](https://github.com/sipeed/picoclaw/issues/3299) — oldest open PR in this set, created 2026-07-26, marked `[stale]`.
- [#3316 fix: routed-agent context management not respecting history, summarization, compression, and seahorse bootstrap](https://github.com/sipeed/picoclaw/issues/3316) — important fix for issue #3301, marked `[stale]`.
- [#3315 Support topics in private bot chats](https://github.com/sipeed/picoclaw/issues/3315) — marked `[stale]`.
- [#3317 feat(providers): log prompt cache tokens in LLM response debug output](https://github.com/sipeed/picoclaw/issues/3317) — marked `[stale]`.
- [#3314 Fix: agent not able to execute shell command added to customAllowPatterns](https://github.com/sipeed/picoclaw/issues/3314) — open since 2026-08-03 without merge.
- [#3301 [BUG] /clear and session auto-compression don't work in chats routed to non-default agent via dispatch rules](https://github.com/sipeed/picoclaw/issues/3301) — open issue since 2026-07-29; the linked fix PR needs review.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-08-12

## Today's Overview

NanoClaw saw focused activity in the last 24 hours: one issue was updated, seven pull requests were touched, and three PRs moved into closed/merged status. No new release was published. The dominant themes are reliability around message delivery and completing remote Streamable HTTP MCP support across providers. The open report of silently dropped inbound messages is the most serious user-facing concern. Overall project health looks stable, but the message-loss issue needs attention.

## Releases

No new releases were published in this window.

## Project Progress

Three PRs were closed or merged in this period:

- [PR #3190](https://github.com/nanocoai/nanoclaw/pull/3190) — **feat: add Tavily MCP tool skill**  
  A contributor-added utility skill for the Tavily MCP tool.

- [PR #3092](https://github.com/nanocoai/nanoclaw/pull/3092) — **feat: support remote Streamable HTTP MCP servers**  
  This adds engine-level support for remote Streamable HTTP MCP servers.

- [PR #3221](https://github.com/nanocoai/nanoclaw/pull/3221) — **feat(providers): remote Streamable HTTP MCP servers for codex and opencode**  
  Follow-up work extending the remote MCP support to codex and opencode providers, likely completing the feature started in #3092.

These closings indicate meaningful progress on MCP extensibility and contributor tooling.

## Community Hot Topics

The only item with comment activity was:

- [Issue #3226](https://github.com/nanocoai/nanoclaw/issues/3226) — **Inbound messages silently dropped when a platform reuses a message id**  
  The reporter notes that from the user’s perspective, dropped messages are indistinguishable from “the agent ignored me.” This is a trust and observability issue, not just a technical edge case.

PRs did not show visible comment counts in this feed, but the most strategically active PRs are:

- [PR #3220](https://github.com/nanocoai/nanoclaw/pull/3220) — Agent templates becoming “Agent Plugins 1.0.0” directories  
- [PR #2909](https://github.com/nanocoai/nanoclaw/pull/2909) — Template setup flow and first-agent stamping

## Bugs & Stability

Ranked by severity:

1. **High — [Issue #3226](https://github.com/nanocoai/nanoclaw/issues/3226): silent inbound message loss**  
   When a platform reuses a message ID in the same session, messages are dropped without reaching the agent. No user-visible error is shown, making the agent appear unresponsive. No linked fix PR exists yet.

2. **Medium — [PR #3195](https://github.com/nanocoai/nanoclaw/pull/3195): make NanoClaw upgrades transactional**  
   Open PR addressing upgrade safety. Transactional upgrades would reduce the risk of partial or broken updates.

3. **Medium/Low — [PR #3145](https://github.com/nanocoai/nanoclaw/pull/3145): backfill destinations for existing wirings**  
   Open database migration PR that preserves existing destinations and custom local names while fixing missing channel destinations for messaging-group wirings.

Additionally, [PR #3220](https://github.com/nanocoai/nanoclaw/pull/3220) includes stamp-time symlink/caps/secret hardening as part of a broader template format migration.

## Feature Requests & Roadmap Signals

The recent PRs point to several roadmap directions:

- **Remote Streamable HTTP MCP support** — Now likely available across Claude, codex, and opencode after [#3092](https://github.com/nanocoai/nanoclaw/pull/3092) and [#3221](https://github.com/nanocoai/nanoclaw/pull/3221).
- **Agent Plugins 1.0.0 directory format** — [PR #3220](https://github.com/nanocoai/nanoclaw/pull/3220) is a format migration for agent templates.
- **Template setup wizard and first-agent stamping** — [PR #2909](https://github.com/nanocoai/nanoclaw/pull/2909) is the second part of the template feature.
- **Tavily MCP tool skill** — [PR #3190](https://github.com/nanocoai/nanoclaw/pull/3190) adds a new contributed skill.

The next version may consolidate remote MCP support and the Agent Plugins template migration, if #3220 and #2909 land together.

## User Feedback Summary

The clearest user pain point is **silent message loss**:

> “From the user's side this is indistinguishable from ‘the agent ignored me.’”

This reflects dissatisfaction with lack of visibility and reliability. Contributors are also signaling pain around **upgrade safety** ([#3195](https://github.com/nanocoai/nanoclaw/pull/3195)) and **broken/destination-missing wiring after migrations** ([#3145](https://github.com/nanocoai/nanoclaw/pull/3145)). On the positive side, community skills and MCP-related PRs show active interest in extensibility.

## Backlog Watch

The following open PRs may need maintainer attention:

- [PR #2909](https://github.com/nanocoai/nanoclaw/pull/2909) — **Template setup flow and first-agent stamping**  
  Opened July 2, long-running, and now overlaps with the newer #3220 template migration.

- [PR #3145](https://github.com/nanocoai/nanoclaw/pull/3145) — **DB backfill for existing wirings**  
  Open since July 28; affects existing users with messaging-group wirings.

- [PR #3195](https://github.com/nanocoai/nanoclaw/pull/3195) — **Transactional upgrades**  
  Open since August 6; important for upgrade reliability.

- [PR #3220](https://github.com/nanocoai/nanoclaw/pull/3220) — **Agent Plugins 1.0.0 directories**  
  Large format migration that should be coordinated with #2909 to avoid conflicting template implementations.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-08-12

## 1. Today's Overview

IronClaw saw high-intensity activity over the last 24 hours: **19 issues** were updated (13 open, 6 closed) and **50 PRs** were touched (25 open, 25 merged/closed). No new releases were published. The busiest areas are the **Reborn architecture refactor**, **agent-loop reliability**, **memory/target-alias handling**, and **channel adapters** (Slack/Telegram/unified channel model). Several closed PRs show the maintainers are actively fixing context-window, lease-expiry, and disclosure-tool bugs, while large open epics — notably pluggable ACP agent loops and profile-agnostic durable storage — are moving through design and implementation. Overall, the project appears healthy but mid-refactor: many fixes target correctness and architecture, not just surface features.

## 2. Releases

**None.** There are no new releases to report in this window.

---

## 3. Project Progress

Notable **closed/merged PRs** observed in the last 24 hours (visible set):

- **#7471** — `fix(processes): lease expiry recovers safe runs instead of failing them; isolate the journal heartbeat pool`  
  Improves run recovery on lease expiry, adds a lease-TTL grace window, fenced stale executors, and isolates heartbeat traffic.  
  https://github.com/nearai/ironclaw/pull/7471

- **#7514** — `fix: enable Railway shell for hosted volume profile`  
  Adds a strict release-only alias for Railway sandbox shell support while preserving base-volume storage paths.  
  https://github.com/nearai/ironclaw/pull/7514

- **#7470** — `fix(threads): restore listability for unprojected thread index rows`  
  Fixes a bug where some durable `thread_index` rows were absent from the sidebar/list projection.  
  https://github.com/nearai/ironclaw/pull/7470

- **#7503** — `fix(loop): retain accepted task across context eviction`  
  Pins the user task across the 128-message tail cut and makes context limits count effective model-visible messages.  
  https://github.com/nearai/ironclaw/pull/7503

- **#6997** — `feat(llm): explicit Anthropic cache_control breakpoints on both transports`  
  Closes #6984: both rig/API-key and OAuth transport paths now place explicit Anthropic cache breakpoints.  
  https://github.com/nearai/ironclaw/pull/6997

- **#7480** — `fix(webui): reveal long conversation titles on hover`  
  Adds an overflow-aware marquee component for truncated sidebar titles.  
  https://github.com/nearai/ironclaw/pull/7480

- **#7511** — `[Ignore]`  
  Test/ignored PR; closed without content.  
  https://github.com/nearai/ironclaw/pull/7511

Closed issues also show progress in **deferred tool discovery** (#7405), **disclosure bridge tool concurrency** (#7488), **tool_search schema disclosure** (#7487), and **default NEAR AI connection probes** (#7483).

---

## 4. Community Hot Topics

The most-discussed items in the last 24 hours are architecture-focused:

- **#7482 — Epic: Pluggable agent loops — ACP executor, edge credential injection, kernel architecture** (3 comments, open)  
  This is the highest-comment issue in the window. It proposes making IronClaw a kernel that no longer owns agent loops or per-integration tool code, instead consuming off-the-shelf ACP agents.  
  https://github.com/nearai/ironclaw/issues/7482

- **#7405 — Improve deferred tool discovery with complete signatures and namespace-aware catalog previews** (2 comments, closed)  
  Focused on reducing avoidable model turns and improving catalog awareness at large tool counts.  
  https://github.com/nearai/ironclaw/issues/7405

- **#7505 — Memory: target-alias resolution is contract — move it to the domain layer** (1 comment, open)  
  Highlights a contract-level inconsistency between memory providers (native vs mem0), gaining attention as a correctness issue.  
  https://github.com/nearai/ironclaw/issues/7505

Underlying need: developers and maintainers are pushing toward **fewer bespoke integrations, more standardized agent interfaces**, and **fewer model round-trips**. The discussion around #7482 signals a major architectural direction — IronClaw as a durable execution/kernel layer rather than a monolithic agent loop.

---

## 5. Bugs & Stability

Ranked by severity:

### High
- **#7484 — Context window silently evicts the task**  
  The per-turn prompt can silently evict the accepted user task due to a hard 128-message clamp. A fix exists in closed PR #7503, though the issue remains open in the current data.  
  https://github.com/nearai/ironclaw/issues/7484

- **#7485 — Token estimator double-counts ASCII, halving the effective context window**  
  Two inconsistent estimators exist; the transcript estimator double-counts ASCII (2 chars/token), shrinking the usable context. No dedicated fix PR is visible yet.  
  https://github.com/nearai/ironclaw/issues/7485

- **#7486 — Typed no-progress escape false-positives on idempotent reads/polling**  
  Legitimate long-running idempotent operations can be terminally failed by output-hash-based `NoChange` detection. No visible fix PR yet.  
  https://github.com/nearai/ironclaw/issues/7486

- **#7505 — Memory target-alias resolution is contract-level but only one provider implements it**  
  mem0 stored `target: "memory"` verbatim, causing canonical `MEMORY.md` reads to miss data. Fix PR #7512 is open.  
  https://github.com/nearai/ironclaw/issues/7505  
  https://github.com/nearai/ironclaw/pull/7512

### Medium
- **#7490 — retry_disposition() silent-redrive table is dead code**  
  ~25 transient failure categories classified but never wired into redrive behavior. Needs wiring or removal.  
  https://github.com/nearai/ironclaw/issues/7490

- **#7508 — GitHub MCP extension startup gives confusing endpoint verification prompt**  
  QA bug on Railway: extension appears registered but fails to connect cleanly and raises confusing verification concerns.  
  https://github.com/nearai/ironclaw/issues/7508

- **#7488 / #7487 — Disclosure bridge tool bugs**  
  Both are now closed: `tool_search`/`tool_describe`/`tool_call` were hardcoded exclusive, and `tool_search` accidentally disarmed the describe-first safety net.  
  https://github.com/nearai/ironclaw/issues/7488  
  https://github.com/nearai/ironclaw/issues/7487

### Low / UX
- **#7481 — Long conversation titles truncated without hover** — closed; fix merged in #7480.  
  https://github.com/nearai/ironclaw/issues/7481

- **#7483 — Default NEAR AI connection/model probes fail when API key is blank** — closed.  
  https://github.com/nearai/ironclaw/issues/7483

---

## 6. Feature Requests & Roadmap Signals

Strong roadmap signals in this window:

- **#7517 — Cloud.near.ai: allow staking path for Google/GitHub sign-ins**  
  Newest feature request: users with Google/GitHub accounts cannot stake for inference; NEAR wallet is only a login option, not an attachable wallet. This is likely to influence near-term auth/payment work.  
  https://github.com/nearai/ironclaw/issues/7517

- **#7496 — Host-mediated IdentyClaw Passport (builtin.idcp + practitioner helper)**  
  Requests a stock path for host-side Passport private keys/JWTs in processless/secure-default profiles.  
  https://github.com/nearai/ironclaw/issues/7496

- **#7482 — Pluggable agent loops / ACP executor**  
  Broad architecturally significant epic; likely the basis for the next major kernel direction.  
  https://github.com/nearai/ironclaw/issues/7482

- **#7467 — Make Reborn durable state profile-agnostic**  
  Large refactor to prevent profile changes from stranding conversation history, secrets, and workspaces. PR #7456 is open and tracks this.  
  https://github.com/nearai/ironclaw/issues/7467

- **#7038 — Storybook + AI-first Design System**  
  Still an open v1.3.0 epic; backend work appears in open PR #7498 (automation suggestion cards V1).  
  https://github.com/nearai/ironclaw/issues/7038

- **#7489 — result_read 24 KiB preview ceiling + read-before-edit full-read gate**  
  Tracks round-trip inflators in coding tools; likely resolved via the #7435 OMP cutover.  
  https://github.com/nearai/ironclaw/issues/7489

Expect the next version (likely v1.3.0) to include **unified channel adapters**, **Anthropic cache-control improvements**, **memory alias/domain fixes**, and **context-window compaction** work.

---

## 7. User Feedback Summary

Real user pain points visible from issues and QA reports:

- **Auth/payments:** Users with Google/GitHub sign-in feel stuck because they cannot stake for inference (#7517).
- **Automation reliability:** Unattended automation runs still behave like interactive chat turns and are hit-or-miss, especially on small models (#6879).
- **Extension onboarding:** GitHub MCP extension startup is confusing and does not cleanly connect in the QA environment (#7508).
- **Memory consistency:** Users' facts stated in one conversation are not recalled in another because the model was never shown when to write or because mem0 target aliases broke reads (#7365 / #7505 related).
- **UI discoverability:** Long conversation titles are unreadable in the sidebar; fixed by marquee-on-hover (#7481 / #7480).

Overall, the feedback skews toward **production readiness**: users are hitting real reliability, authentication, and context-window limits rather than cosmetic issues.

---

## 8. Backlog Watch

These items have remained open for a longer period and may need maintainer attention:

- **#6879 — Automation runs are hit-or-miss: unattended runs execute as plain interactive chat turns**  
  Opened 2026-07-29, no comments. This is a structural automation issue, not model noise, and is still open. High priority for deployment confidence.  
  https://github.com/nearai/ironclaw/issues/6879

- **PR #5910 — fix: hydrate approval gates on notification open**  
  Open since 2026-07-10, from an experienced contributor, with no visible maintainer response in the visible data. This PR touches approval-gate delivery and regression coverage.  
  https://github.com/nearai/ironclaw/pull/5910

- **#7038 — Epic: Storybook + AI-first Design System**  
  Open since 2026-08-03 with no comments in the visible data; remains a v1.3.0 epic and is receiving some backend implementation via #7498.  
  https://github.com/nearai/ironclaw/issues/7038

No new releases were cut this period, but the combination of aggressive bug-fixing, architecture epics, and steady PR throughput suggests IronClaw is in a **stabilization-and-refactor phase** rather than a feature-release phase.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-08-12

## 1. Today's Overview

In the last 24 hours, LobsterAI had **1 new release**, **4 issue updates** (1 open, 3 closed), and **9 PR updates** (3 open, 6 closed). Activity is healthy: the `release/2026.8.10` branch was merged into `main`, model thinking-level support landed, and several older stale issues/PRs were processed. Most issue updates were stale-bot closures, but one long-standing Windows startup bug remains open. The project continues a steady release cadence, with active focus on Cowork UX, model configuration, and startup/runtime reliability.

## 2. Releases

### LobsterAI 2026.8.11
Released on **2026-08-11**.

**What’s Changed:**
- `feat(cowork): add collapse-agent-tasks shortcut and allow modifier shortcuts while typing` — [PR #2469](https://github.com/netease-youdao/LobsterAI/pull/2469)
- `feat(cowork): mark scheduled task sessions in sidebar` — by @liuzhq1986

In parallel, [PR #2477](https://github.com/netease-youdao/LobsterAI/pull/2477) merged `release/2026.8.10` into `main`, bringing:
- Configurable model thinking levels
- Better Cowork progress visibility
- Scheduled-task identification
- Local-file workflow improvements
- Startup/runtime reliability fixes
- Settings interaction improvements

**Breaking changes / migration notes:** None provided in the release notes or merge summary.

## 3. Project Progress

Closed/merged PRs in the last 24 hours:

- [PR #2477](https://github.com/netease-youdao/LobsterAI/pull/2477) — **Release/2026.8.10** merged into `main`; includes model thinking levels and Cowork/runtime improvements.
- [PR #2457](https://github.com/netease-youdao/LobsterAI/pull/2457) — `feat(models): add configurable thinking levels`; server-driven options, per-session/agent persistence, versioned model request options.
- [PR #2476](https://github.com/netease-youdao/LobsterAI/pull/2476) — `feat(ui): dismiss the topmost overlay on Escape`; improves modal Escape handling with layer IDs and IME-composition awareness.
- [PR #1241](https://github.com/netease-youdao/LobsterAI/pull/1241) — `feat(settings): Settings 关闭无确认，API Key 等配置静默丢失`; adds dirty-check and blocks all close paths until unsaved changes are confirmed. **Closes #1237.**
- [PR #1239](https://github.com/netease-youdao/LobsterAI/pull/1239) — `feat(main): AI 任务完成时闪烁任务栏/Dock 图标提醒用户`; cross-platform window-attention support.
- [PR #2474](https://github.com/netease-youdao/LobsterAI/pull/2474) — `fix(sidebar): align sites icon stroke weight`; minor UI consistency fix.

Still open in review:

- [PR #2475](https://github.com/netease-youdao/LobsterAI/pull/2475) — `fix(model-selector): give each model its own thinking level` (fixes a global-thinking-level conflict).
- [PR #1181](https://github.com/netease-youdao/LobsterAI/pull/1181) — `fix(cowork): hide OpenClaw main agent sessions from session list` (stale).
- [PR #1277](https://github.com/netease-youdao/LobsterAI/pull/1277) — `chore(deps-dev): bump electron group` (Electron 40 → 43, stale).

## 4. Community Hot Topics

The most active issues by comment count (2 comments each) were all older stale issues touched in the last 24h:

- [Issue #1237](https://github.com/netease-youdao/LobsterAI/issues/1237) — **Settings close loses unsaved API Key/model config silently.**  
  Users want a confirmation prompt before discarding unsaved configuration changes. A fix PR ([#1241](https://github.com/netease-youdao/LobsterAI/pull/1241)) exists and is closed.

- [Issue #1240](https://github.com/netease-youdao/LobsterAI/issues/1240) — **One API provider rate-limit makes all models/dialog tasks appear restricted.**  
  The underlying need is model/provider isolation or failover: when one API quota is exhausted, the whole app should not become unusable.

- [Issue #2062](https://github.com/netease-youdao/LobsterAI/issues/2062) — **“Task exceeded maximum duration” error; unclear if task is stopped or still running.**  
  Users want longer-running task support and clearer timeout/continuation behavior.

- [Issue #1183](https://github.com/netease-youdao/LobsterAI/issues/1183) — **Windows: endless overlay loop starting OpenClaw gateway.**  
  Still open, with only 1 comment. This is the only active open issue in the set and deserves maintainer response.

## 5. Bugs & Stability

Ranked by severity:

1. **High — Gateway startup loop on Windows** — [Issue #1183](https://github.com/netease-youdao/LobsterAI/issues/1183)  
   After adding/calling a model, disabling it, and saving, the app repeatedly shows an “OpenClaw gateway failed to start” overlay. No fix PR is linked. This has been open since 2026-04-01 and is now stale but still active.

2. **High — Provider rate-limit paralyzes all models** — [Issue #1240](https://github.com/netease-youdao/LobsterAI/issues/1240)  
   A restricted API key causes every agent/dialog window to report “restricted,” making LobsterAI effectively unusable. No fix PR was found; the issue was closed as stale.

3. **Medium — Unsaved Settings changes silently lost** — [Issue #1237](https://github.com/netease-youdao/LobsterAI/issues/1237)  
   Closing the Settings modal via background click/X/Cancel discards unsaved API Key changes. Fix PR [#1241](https://github.com/netease-youdao/LobsterAI/pull/1241) exists and is closed.

4. **Medium/Low — Long-running tasks hit maximum duration without clear state** — [Issue #2062](https://github.com/netease-youdao/LobsterAI/issues/2062)  
   Users cannot tell whether a timed-out 24h task continues in the background. No fix PR is linked.

No new regressions were explicitly reported in the last 24 hours.

## 6. Feature Requests & Roadmap Signals

Several product signals are visible from recent PRs and issues:

- **Model thinking levels are now configurable** ([#2457](https://github.com/netease-youdao/LobsterAI/pull/2457)) and a follow-up [PR #2475](https://github.com/netease-youdao/LobsterAI/pull/2475) to make thinking level **per-model** is already open. This will likely ship in the next version.
- **Cowork scheduling and keyboard shortcuts** are being actively improved: release 2026.8.11 added a collapse-agent-tasks shortcut, modifier-key shortcuts while typing, and scheduled-task sidebar badges.
- **Long-running task support** is implied by [Issue #2062](https://github.com/netease-youdao/LobsterAI/issues/2062); users want configurable maximum durations or clearer continuation flows.
- **Model/provider resilience** is a likely future direction after [Issue #1240](https://github.com/netease-youdao/LobsterAI/issues/1240), especially per-provider rate-limit handling.
- **Cleaner Cowork session list** may still arrive if [PR #1181](https://github.com/netease-youdao/LobsterAI/pull/1181) is revived and merged.

## 7. User Feedback Summary

- **Configuration safety** is important to users: losing API Key edits on Settings close was reported as a real workflow-breaking annoyance. The fix is now in place.
- **Long-running automation users** are pushing against hard timeouts; they want transparency and control over 24h+ task execution.
- **Provider-level failures** are the most painful scenario: users expect one restricted model not to take down all agents and dialog tasks.
- **Windows startup reliability** remains a recurring pain point, especially around the OpenClaw gateway overlay loop.
- Overall, user sentiment appears mixed but the project is responsive: issues are being closed, releases are frequent, and several user-reported problems already have fix PRs.

## 8. Backlog Watch

Items that are old, stale, or unanswered and likely need maintainer attention:

- [Issue #1183](https://github.com/netease-youdao/LobsterAI/issues/1183) — **Open since 2026-04-01**: Windows gateway startup loop. Still open, no linked fix.
- [PR #1181](https://github.com/netease-youdao/LobsterAI/pull/1181) — **Open since 2026-04-01**: hide internal OpenClaw main-agent sessions from the Cowork session list. No maintainer comments or merge activity.
- [PR #1277](https://github.com/netease-youdao/LobsterAI/pull/1277) — **Open since 2026-04-02**: Dependabot Electron major bump (40.2.1 → 43.3.0). Needs review; could introduce breaking changes to the desktop shell.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-08-12

## 1. Today's Overview
Moltis saw very low repository activity in the last 24 hours: no issues were updated, no releases were published, and no pull requests were merged or closed. The only activity is the open PR #1190, which proposes a substantial feature addition around durable local CalDAV connectors and local dataset tooling. This suggests the project is in a quiet development phase, with maintainer attention likely focused on the pending connector feature rather than bug triage or community issue resolution. Overall project health appears stable, but community-facing engagement is minimal today.

## 2. Releases
No new releases were published for Moltis as of 2026-08-12.

## 3. Project Progress
No pull requests were merged or closed today. The sole active pull request is:

- [#1190 [OPEN] Add durable local CalDAV connectors](https://github.com/moltis-org/moltis/pull/1190) — authored by `penso`, created and last updated 2026-08-11. This PR is open and under review/development but has not yet been merged.

## 4. Community Hot Topics
The only active item is the open PR:

- [PR #1190: Add durable local CalDAV connectors](https://github.com/moltis-org/moltis/pull/1190)

The PR proposes provider-neutral connector persistence, atomic CalDAV snapshots, scheduling, projections, bounded local full-text search, prompt-compiled dataset plans, and a trusted read-only `connectors` agent tool. No comment/reaction counts were provided, so engagement levels cannot be quantified. The underlying need appears to be making local data access durable and queryable for AI agents, with CalDAV as the first concrete connector type. This points toward broader interest in reliable local-first integrations for personal AI assistants.

## 5. Bugs & Stability
No bugs, crashes, regressions, or stability issues were reported in the last 24 hours. No related fix PRs are currently active.

## 6. Feature Requests & Roadmap Signals
There are no new feature requests filed as issues. However, PR #1190 is a strong roadmap signal: Moltis is moving toward durable local connectors, specifically CalDAV support, with local full-text search and agent-accessible dataset plans. If merged, this would likely appear in the next minor or feature release. Future connector types may follow the same persistence and projection patterns established by this PR.

## 7. User Feedback Summary
No explicit user feedback or issue discussions were recorded in the last 24 hours. The only signal comes from PR #1190, which suggests a push to improve local data durability, searchability, and agent tooling. Without issue comments or reactions, user satisfaction and pain points cannot be assessed from this data.

## 8. Backlog Watch
No long-unanswered issues or PRs requiring maintainer attention were identified. The only tracked item, PR #1190, is recent and actively updated (last touched 2026-08-11), so it is not yet backlogged. Maintainers should continue monitoring this PR for review feedback and potential merge.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-08-12  
**Repo:** [agentscope-ai/QwenPaw](https://github.com/agentscope-ai/QwenPaw)  
*Data window: last 24 hours*

---

## 1. Today's Overview

CoPaw/QwenPaw is in a fast-moving pre-release cycle. In the last 24 hours, **22 issues** were updated (**9 open**, **13 closed**) and **49 PRs** were touched (**23 open**, **26 closed/merged**), indicating very high maintainer activity. A new **v2.1.0-beta.3** release was published, and a version-bump PR to **v2.1.0b4** already landed immediately afterward. The busiest areas are memory/context lifecycle, Console UI rendering, channel configuration, and Computer Use native workflows. Overall project health is strong, though several stability bugs around desktop/IME behavior and inter-agent concurrency remain open.

---

## 2. Releases

### [v2.1.0-beta.3](https://github.com/agentscope-ai/QwenPaw/releases/tag/v2.1.0-beta.3)

Highlights from the release notes:

- **Feat:** Files workspace blog — [PR #6783](https://github.com/agentscope-ai/QwenPaw/pull/6783)
- **Fix(provider):** Expire stale capability cache entries and clear on model switch — [PR #6723](https://github.com/agentscope-ai/QwenPaw/pull/6723)
- **Chore:** Version bump to 2.1.0-beta.3

No explicit breaking changes or migration notes were included in the provided excerpt.

Immediately after release, [PR #6920](https://github.com/agentscope-ai/QwenPaw/pull/6920) bumps the project to **v2.1.0b4**, confirming the beta iteration is still active.

---

## 3. Project Progress

### Notable merged/closed PRs in the last 24h

- [PR #6891 — feat(computer-use): improve native input workflows](https://github.com/agentscope-ai/QwenPaw/pull/6891)  
  Adds a bounded keyboard-only sequence action, rate limiting, and better Windows input targeting.

- [PR #6564 — fix(memory): flush pending turns before compression](https://github.com/agentscope-ai/QwenPaw/pull/6564)  
  Fixes #6555 by persisting automatic memory pending turns before Scroll compression.

- [PR #6911 — feat(console): unify renderable code block experience](https://github.com/agentscope-ai/QwenPaw/pull/6911)  
  Standardizes code blocks with syntax highlighting, LaTeX/Mermaid preview tabs, and dark-mode support.

- [PR #6915 — fix(files): repair previews and dark mode styling](https://github.com/agentscope-ai/QwenPaw/pull/6915)  
  Fixes Unicode PDF filename previews and SVG file previews; aligns preview surfaces with dark theme.

- [PR #6909 — feat(channels): warn when a bot is already used by another agent](https://github.com/agentscope-ai/QwenPaw/pull/6909)  
  Adds a conflict-confirmation dialog for duplicate bot identity usage.

- [PR #6898 — fix(tools): correct read_file tool description](https://github.com/agentscope-ai/QwenPaw/pull/6898)  
  Aligns tool documentation with actual text-file-only behavior.

- [PR #6875 — chore: update release notes for v2.1.0](https://github.com/agentscope-ai/QwenPaw/pull/6875)  
  Prepares bilingual release notes and README updates.

- [PR #6920 — chore: bump the version to 2.1.0b4](https://github.com/agentscope-ai/QwenPaw/pull/6920)  
  Next beta version bump.

### Still in flight — open PRs worth watching

- [PR #6830 — fix(memory): preserve auto-memory state across compression and session lifecycles](https://github.com/agentscope-ai/QwenPaw/pull/6830)
- [PR #6779 — refactor(context): align Scroll and memory with AgentScope lifecycle](https://github.com/agentscope-ai/QwenPaw/pull/6779)
- [PR #6880 — feat(console): unify apps, plugins, and skills in the marketplace](https://github.com/agentscope-ai/QwenPaw/pull/6880)
- [PR #6874 — feat(mcp): add configurable tool call timeout](https://github.com/agentscope-ai/QwenPaw/pull/6874)
- [PR #6877 — feat(desktop): remember window geometry](https://github.com/agentscope-ai/QwenPaw/pull/6877)
- [PR #6817 — feat: integrate AnySearch web search (SearchProvider + MCP)](https://github.com/agentscope-ai/QwenPaw/pull/6817)
- [PR #6913 — fix(computer-use): improve macOS element activation](https://github.com/agentscope-ai/QwenPaw/pull/6913)

---

## 4. Community Hot Topics

The most-discussed issues in the last 24h show recurring themes around **integration reliability**, **UI/rendering maturity**, and **workspace/resource isolation**.

- [Issue #6732 — [Bug]: MCP tools periodically fail until restart](https://github.com/agentscope-ai/QwenPaw/issues/6732) — **10 comments, closed**  
  Users report MCP tools becoming invalid after some hours and only recovering after restarting the Docker container. A likely related provider-cache fix landed in v2.1.0-beta.3.

- [Issue #6893 — [Feature]: Formula rendering, session grouping, active session background](https://github.com/agentscope-ai/QwenPaw/issues/6893) — **7 comments, closed**  
  Mixed UX request; formula rendering is a frequent pain point.

- [Issue #5790 — [Bug]: Loading animation does not disappear after Agent response completes](https://github.com/agentscope-ai/QwenPaw/issues/5790) — **4 comments, closed**  
  Console UX bug, now closed.

- [Issue #6882 — [Question]: How to integrate CopilotKit](https://github.com/agentscope-ai/QwenPaw/issues/6882) — **3 comments, open**  
  Users want clearer extensibility/integration examples.

- [Issue #6900 — [Feature]: Isolate chat project directories from the agent workspace](https://github.com/agentscope-ai/QwenPaw/issues/6900) — **3 comments, closed**  
  Requests stricter separation between agent internals and user chat project data.

**Underlying need:** Users are pushing QwenPaw toward a more stable, desktop-grade assistant platform: reliable external tools, better rendering, proper workspace isolation, and more extensibility.

---

## 5. Bugs & Stability

### Open bugs, ranked by severity

| Severity | Issue | Description |
|---|---|---|
| High | [#6919](https://github.com/agentscope-ai/QwenPaw/issues/6919) | v2.0.1 frequently crashes under pip/web usage: `console process/reply failed`. No fix PR observed yet. |
| High | [#6918](https://github.com/agentscope-ai/QwenPaw/issues/6918) | Inter-agent messages spawn a new agent session per message, causing duplicated "shadow instances" and duplicate responses. |
| High / Security | [#6916](https://github.com/agentscope-ai/QwenPaw/issues/6916) | Plugins can silently create cron jobs and inject user-visible messages without approval — permission-model gap. |
| Medium-High | [#6885](https://github.com/agentscope-ai/QwenPaw/issues/6885) | Console UI crashes on Chinese IME `compositionEnd` during agent run, making the message queue unusable. |
| Medium | [#6910](https://github.com/agentscope-ai/QwenPaw/issues/6910) | Invalid single-channel config payloads return HTTP 500 instead of a validation error. |
| Low-Medium | [#6883](https://github.com/agentscope-ai/QwenPaw/issues/6883) | Daily page groups notes inside subfolders under the wrong date. |

### Closed bug reports in the same window

- [Issue #6732 — MCP tools periodically fail](https://github.com/agentscope-ai/QwenPaw/issues/6732) — closed; possibly addressed by provider cache expiry fix in beta.3.
- [Issue #6828 — Console frontend idle repainting / high CPU from infinite CSS animations](https://github.com/agentscope-ai/QwenPaw/issues/6828) — closed.
- [Issue #6697 — v2.1.0b1 desktop injects PYTHONHOME into child env, crashing Python subprocesses](https://github.com/agentscope-ai/QwenPaw/issues/6697) — closed.
- [Issue #6722 — Background forked subagent reports completed when worktree finalization fails](https://github.com/agentscope-ai/QwenPaw/issues/6722) — closed.

The open IME and inter-agent session bugs are the most urgent stability items without an obvious fix PR yet.

---

## 6. Feature Requests & Roadmap Signals

Several user requests align closely with recently merged or open PRs, giving strong signals for upcoming releases.

### Likely near-term features

- **LaTeX / Mermaid rendering in chat**  
  Repeatedly requested in [#6893](https://github.com/agentscope-ai/QwenPaw/issues/6893), [#5453](https://github.com/agentscope-ai/QwenPaw/issues/5453), and [#4756](https://github.com/agentscope-ai/QwenPaw/issues/4756).  
  [PR #6911](https://github.com/agentscope-ai/QwenPaw/pull/6911) is already merged, so improved formula/code-block rendering should land in v2.1.0.

- **Session/workspace isolation**  
  [#6900](https://github.com/agentscope-ai/QwenPaw/issues/6900) requests separating chat project directories from agent workspaces.  
  [#6917](https://github.com/agentscope-ai/QwenPaw/issues/6917) requests an agent-to-Inbox delivery path for reports/messages.  
  Both point toward a more structured "persistent project + inbox" model.

- **Desktop window polish**  
  [#6877](https://github.com/agentscope-ai/QwenPaw/pull/6877) adds window geometry persistence; [#5490](https://github.com/agentscope-ai/QwenPaw/pull/5490) adds a navigable fullscreen image gallery.

- **MCP reliability controls**  
  [#6874](https://github.com/agentscope-ai/QwenPaw/pull/6874) adds configurable MCP tool-call timeouts, directly responding to timeout-related failures like [#6724](https://github.com/agentscope-ai/QwenPaw/issues/6724).

- **Plugin permission controls**  
  [#6916](https://github.com/agentscope-ai/QwenPaw/issues/6916) is a security signal that plugin permissions need explicit user approval. This is likely to become a roadmap item.

---

## 7. User Feedback Summary

- **MCP tool reliability is a major real-world pain point.** Users report having to restart Docker containers to restore MCP functionality. The beta.3 provider-cache fix is a positive response, but it may need validation.
- **LaTeX rendering is an expectation gap.** Multiple users compare QwenPaw with tools like Cherry Studio and expect proper formula rendering. The merged code-block PR should address much of this.
- **The Chinese-language user base is highly active.** Several issues are in Chinese, including IME input crashes, QQ bot verbosity, and WeChat community requests.
- **Desktop/UI friction is common.** Complaints include high idle CPU usage, stuck loading spinners, small fonts, and dark-mode inconsistencies.
- **Positive signal:** One user explicitly wrote *"I like QwenPaw"* in [Issue #5453](https://github.com/agentscope-ai/QwenPaw/issues/5453), and the volume of detailed feature requests suggests a power-user community actively shaping the product.

---

## 8. Backlog Watch

Items that are open, important, and may need maintainer attention:

### Open issues with no clear response/fix yet

- [Issue #6882 — How to integrate CopilotKit](https://github.com/agentscope-ai/QwenPaw/issues/6882) — open since 2026-08-10, 3 comments, no maintainer answer visible.
- [Issue #6885 — Chinese IME crash in Console message queue](https://github.com/agentscope-ai/QwenPaw/issues/6885) — open since 2026-08-10, affects v2.1.0b2.
- [Issue #6883 — Daily page notes grouped under wrong date](https://github.com/agentscope-ai/QwenPaw/issues/6883) — open since 2026-08-10.
- [Issue #6916 — Plugin permission gap / silent cron creation](https://github.com/agentscope-ai/QwenPaw/issues/6916) — open security issue.
- [Issue #6917 — Agent cannot proactively deliver messages to Inbox](https://github.com/agentscope-ai/QwenPaw/issues/6917) — open feature request.

### Long-open PRs waiting for merge/review

- [PR #5490 — Fullscreen image gallery for chat media](https://github.com/agentscope-ai/QwenPaw/pull/5490) — open since **2026-06-24**.
- [PR #5869 — Expose system commands in slash autocomplete across all UIs](https://github.com/agentscope-ai/QwenPaw/pull/5869) — open since 2026-07-08, marked *Under Review*.
- [PR #6660 — Update .dockerignore to include README.me](https://github.com/agentscope-ai/QwenPaw/pull/6660) — open since 2026-08-03, first-time contributor.
- [PR #6817 — Integrate AnySearch web search](https://github.com/agentscope-ai/QwenPaw/pull/6817) — open since 2026-08-08.

The high volume of merged work suggests maintainers are moving quickly, but the older open PRs — especially the first-time-contributor ones — could benefit from explicit review decisions to avoid backlog accumulation.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-08-12

## Today's Overview
In the last 24 hours, ZeroClaw saw 50 issues and 50 PRs updated. 40 issues remain open/active and 10 are closed; 49 PRs remain open, with 1 PR moved to closed. No new releases were published. Activity is heavily weighted toward high-risk RFCs around security, runtime sessions, SOP, and provider compatibility, plus a stream of bug-fix PRs still awaiting author/maintainer action. The project appears to be in a design-heavy, review-constrained phase rather than a release push.

## Releases
No new releases in this window. The Latest Releases list is empty, so there are no changelogs, breaking changes, or migration notes to report.

## Project Progress
- The only PR that closed in this window is [#9936](https://github.com/zeroclaw-labs/zeroclaw/pull/9936) — *fix(sync): cherry-pick upstream security and correctness fixes*. It applies nine upstream cherry-picks and skips two fixes already present in the tree.
- No feature PRs were merged in the visible data; the most substantive fixes remain open and awaiting action.
- Several closed issues are visible among the 10 closed issues:  
  - [#9035](https://github.com/zeroclaw-labs/zeroclaw/issues/9035) — Docker Compose gateway loopback-bound bug  
  - [#9768](https://github.com/zeroclaw-labs/zeroclaw/issues/9768) — daemon reload signal bug  
  - [#9545](https://github.com/zeroclaw-labs/zeroclaw/issues/9545) — rustdoc CI gate task  
  - [#7232](https://github.com/zeroclaw-labs/zeroclaw/issues/7232) — observability RFC  
  - [#2269](https://github.com/zeroclaw-labs/zeroclaw/issues/2269) — token cost RFI  

These closures suggest the maintainers are clearing both bug and design backlog, though no new feature work landed.

## Community Hot Topics
Most active issues by comment count (reactions are low overall; only #8303 and #9545 have 1 👍 each):

- [#8303](https://github.com/zeroclaw-labs/zeroclaw/issues/8303) — RFC: Goal mode v1, 19 comments. Need for durable multi-turn bounded objectives.
- [#8603](https://github.com/zeroclaw-labs/zeroclaw/issues/8603) — RFC: ZeroClaw Chat Completions profile, 18 comments. Demand for OpenAI-compatible access from Open WebUI, LobeChat, Continue.dev, Aider, LangChain, and OpenAI SDK users.
- [#7155](https://github.com/zeroclaw-labs/zeroclaw/issues/7155) — RFC: high-risk shell command confirmation + allow/ask/deny policy, 17 comments. Operator safety and command-pattern control.
- [#7141](https://github.com/zeroclaw-labs/zeroclaw/issues/7141) — RFC: pluggable inbound authentication and canonical principals, 14 comments. Enterprise identity/OIDC needs.
- [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) — Tracker: maintainer decision queue for RFCs, 13 comments. Community concern about decision latency.
- [#2269](https://github.com/zeroclaw-labs/zeroclaw/issues/2269) — RFI: token consumption and cost management, 13 comments, closed. Cost viability of productized agents.
- [#9487](https://github.com/zeroclaw-labs/zeroclaw/issues/9487) — RFC: runtime-owned conversation sessions and transport adapters, 10 comments. Session lifecycle across WebSocket/ACP/Web.
- [#8832](https://github.com/zeroclaw-labs/zeroclaw/issues/8832) — RFC: plugin-owned Kanban board, 9 comments. Agent work coordination and visibility.

Underlying themes: users want standard client interoperability, stronger security policy and isolation, and a faster, more predictable RFC decision process.

## Bugs & Stability
Ranked by severity/priority:

- **S1 — [#9035](https://github.com/zeroclaw-labs/zeroclaw/issues/9035) (closed):** Docker Compose gateway can remain loopback-bound behind a published port, causing "Connection refused." Closed in this window; no visible fix PR, so verification is still needed.
- **P1/S2 — [#9872](https://github.com/zeroclaw-labs/zeroclaw/issues/9872) (open):** Bounded delegate resolves its filesystem to the delegator's workspace instead of its own. This is a sandbox isolation defect; no dedicated fix PR is visible.
- **P1 — [#9883](https://github.com/zeroclaw-labs/zeroclaw/issues/9883) (open):** Inbound WebP conversion decodes unbounded before the shared image validator runs. It was deliberately left out of [#9819](https://github.com/zeroclaw-labs/zeroclaw/pull/9819), so a follow-up fix is still needed.
- **P1/S2 — [#9768](https://github.com/zeroclaw-labs/zeroclaw/issues/9768) (closed):** daemon reload is not on SIGUSR1, and the degraded-security warning tells operators to send a signal that kills the daemon. Closed with a `follow-up` label.
- **P1 fix PRs still in flight:**  
  - [#9765](https://github.com/zeroclaw-labs/zeroclaw/pull/9765) — SOP definitions loaded from wrong workspace  
  - [#9885](https://github.com/zeroclaw-labs/zeroclaw/pull/9885) — `sops_dir` default not honored  
  - [#9918](https://github.com/zeroclaw-labs/zeroclaw/pull/9918) — doubled gateway `session_key` prefix  
  - [#9819](https://github.com/zeroclaw-labs/zeroclaw/pull/9819) — pixel-level image validation  
  - [#9862](https://github.com/zeroclaw-labs/zeroclaw/pull/9862) — bound direct HTTP response handling  

## Feature Requests & Roadmap Signals
Active RFCs likely to shape the roadmap:

- [#8603](https://github.com/zeroclaw-labs/zeroclaw/issues/8603) — OpenAI-compatible Chat Completions API.
- [#7141](https://github.com/zeroclaw-labs/zeroclaw/issues/7141) and [#7142](https://github.com/zeroclaw-labs/zeroclaw/issues/7142) — pluggable auth and runtime security-decision pipeline.
- [#7155](https://github.com/zeroclaw-labs/zeroclaw/issues/7155) — shell command allow/ask/deny policy.
- [#9487](https://github.com/zeroclaw-labs/zeroclaw/issues/9487) — runtime-owned sessions and transport adapters.
- [#8832](https://github.com/zeroclaw-labs/zeroclaw/issues/8832) — plugin-owned Kanban board.
- [#6998](https://github.com/zeroclaw-labs/zeroclaw/issues/6998) — schema-validated memory consolidation.
- [#5907](https://github.com/zeroclaw-labs/zeroclaw/issues/5907) — opt-in LSP support.

Based on explicit `v0.9.0` targets, `priority:p1`, and `in-progress` labels, the next focus is likely **security/auth/SOP consolidation**: [#7141](https://github.com/zeroclaw-labs/zeroclaw/issues/7141), [#7142](https://github.com/zeroclaw-labs/zeroclaw/issues/7142), [#9598](https://github.com/zeroclaw-labs/zeroclaw/issues/9598), [#9464](https://github.com/zeroclaw-labs/zeroclaw/issues/9464), and [#9682](https://github.com/zeroclaw-labs/zeroclaw/issues/9682). [#9496](https://github.com/zeroclaw-labs/zeroclaw/issues/9496) (RFC process reform) is P1/accepted and may land as a meta-change independent of the feature version.

## User Feedback Summary
- **Cost pressure:** [#2269](https://github.com/zeroclaw-labs/zeroclaw/issues/2269) states that running real agent workloads through a single high-end model is "prohibitively expensive," especially for email/productized use cases.
- **Interoperability barrier:** [#8603](https://github.com/zeroclaw-labs/zeroclaw/issues/8603) shows users want to connect existing OpenAI-compatible clients; WebSocket/channel-only exposure is limiting adoption.
- **Sandbox/security pain:** [#9872](https://github.com/zeroclaw-labs/zeroclaw/issues/9872) breaks delegated-agent workspace isolation; [#7155](https://github.com/zeroclaw-labs/zeroclaw/issues/7155) shows demand for allow/ask/deny shell controls.
- **Operational blockers:** [#9035](https://github.com/zeroclaw-labs/zeroclaw/issues/9035) blocked Docker Compose deploys with "Connection refused"; [#9768](https://github.com/zeroclaw-labs/zeroclaw/issues/9768) gave operators a reload instruction that actually kills the daemon.
- **Session/API friction:** [#9918](https://github.com/zeroclaw-labs/zeroclaw/pull/9918) reports doubled `session_key` prefixes breaking abort/rename/state; [#9911](https://github.com/zeroclaw-labs/zeroclaw/pull/9911) reports Matrix follow-up messages silently dropped under `mention_only`.
- **Process dissatisfaction:** [#9496](https://github.com/zeroclaw-labs/zeroclaw/issues/9496) explicitly says the RFC process is "slower and more cumbersome than the decisions it is meant to support"; [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) was created to manage the maintainer decision queue.

## Backlog Watch
- **Long-open P1 RFCs needing maintainer decision:** [#7155](https://github.com/zeroclaw-labs/zeroclaw/issues/7155), [#7141](https://github.com/zeroclaw-labs/zeroclaw/issues/7141), and [#7142](https://github.com/zeroclaw-labs/zeroclaw/issues/7142) have been open since 2026-06-03. [#8303](https://github.com/zeroclaw-labs/zeroclaw/issues/8303) and [#8603](https://github.com/zeroclaw-labs/zeroclaw/issues/8603) are also waiting on maintainer review.
- **Blocked items:** [#8367](https://github.com/zeroclaw-labs/zeroclaw/issues/8367) (derived capability readiness, blocked since 2026-06-26) and [#9598](https://github.com/zeroclaw-labs/zeroclaw/issues/9598) (SOP permission contract, blocked since 2026-07-31).
- **Oldest author-action items:** [#5907](https://github.com/zeroclaw-labs/zeroclaw/issues/5907) (LSP support, open since 2026-04-19) and [#6653](https://github.com/zeroclaw-labs/zeroclaw/issues/6653) (emulated installs, open since 2026-05-14).
- **PRs at risk of stalling:** [#7821](https://github.com/zeroclaw-labs/zeroclaw/pull/7821) (stale-candidate, since 2026-06-17), [#9385](https://github.com/zeroclaw-labs/zeroclaw/pull/9385) (stale-candidate, since 2026-07-26), [#8713](https://github.com/zeroclaw-labs/zeroclaw/pull/8713) (since 2026-07-04), and [#9419](https://github.com/zeroclaw-labs/zeroclaw/pull/9419) (since 2026-07-26).

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/boom7sss/agents-radar).*