# OpenClaw Ecosystem Digest 2026-08-10

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-08-10 02:15 UTC

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

## Today's Overview

OpenClaw saw very high activity in the last 24 hours: **500 issues** and **500 PRs** were updated, with **71 issues closed** and **167 PRs merged/closed**, while **no new release** was published. The dominant theme is reliability: the silent-reply-failure issue #116277 was closed but a follow-up report (#121058) says the failure still occurs, and multiple P1/P2 channel, gateway, and platform regressions remain open. Maintainers merged several focused fixes around doctor migration, reset session pairing, QA infrastructure, UI launchers, and Slack Grid backports. However, a long tail of P0/P1 issues involving session-state, message-loss, and crash-loops continues to require maintainer and product decisions.

## Project Progress

167 PRs were closed/merged in the window. Notable merged/closed PRs from the top of the set:

- [PR #121346](https://github.com/openclaw/openclaw/pull/121346) — Fix: preserve GPT-5 personality setting through `openclaw doctor --fix` migration.
- [PR #121146](https://github.com/openclaw/openclaw/pull/121146) — Fix: pair reset tool results correctly within retained session history.
- [PR #121253](https://github.com/openclaw/openclaw/pull/121253) — Fix: QA suite now reuses one immutable Docker candidate instead of producing varying evidence.
- [PR #121322](https://github.com/openclaw/openclaw/pull/121322) — Fix: restore Desktop panel launchers in the Control UI.
- [PR #121323](https://github.com/openclaw/openclaw/pull/121323) — Fix: `scripts/check-changed` falls back to local lanes when the Crabbox provider is fully down.
- [PR #121331](https://github.com/openclaw/openclaw/pull/121331) — Refactor: canonicalize record guards on normalization-core.
- [PR #121347](https://github.com/openclaw/openclaw/pull/121347) — Fix: backport Slack Enterprise Grid reaction and pin event listeners to the release branch.

Still-open but actively advancing areas include the system-agent QR setup stack ([#119341](https://github.com/openclaw/openclaw/pull/119341), [#119342](https://github.com/openclaw/openclaw/pull/119342), [#119343](https://github.com/openclaw/openclaw/pull/119343), [#119344](https://github.com/openclaw/openclaw/pull/119344), [#114173](https://github.com/openclaw/openclaw/pull/114173)), plus large reliability refactors like failover classification consolidation ([#121341](https://github.com/openclaw/openclaw/pull/121341)) and channel-turn dispatch naming cleanup ([#121308](https://github.com/openclaw/openclaw/pull/121308)).

## Community Hot Topics

The most active issues by comment count and reactions reveal strong community concern about reliability, security, and session control:

- [#116277](https://github.com/openclaw/openclaw/issues/116277) — DeepSeek v4 Flash silent reply failure, fallback message, 196 comments. Closed, but now controversial because the failure reportedly persists.
- [#121058](https://github.com/openclaw/openclaw/issues/121058) — Silent reply failures still recurring after #116277 was closed, 19 comments. Direct follow-up demonstrating user distrust of the closure.
- [#22438](https://github.com/openclaw/openclaw/issues/22438) — Tiered bootstrap file loading for progressive context control, 19 comments. Users are feeling context-window pressure from always-loaded bootstrap files.
- [#91009](https://github.com/openclaw/openclaw/issues/91009) — Codex PreToolUse hook relay spawns CPU-bound `openclaw-hooks` processes, 18 comments, 👍2. Serious integration stability issue.
- [#45740](https://github.com/openclaw/openclaw/issues/45740) — `gh-issues` skill injects untrusted issue bodies into sub-agent prompts, 16 comments, 👍1. Security boundary concern.
- [#48003](https://github.com/openclaw/openclaw/issues/48003) — Steer mode does not inject messages mid-turn, 16 comments, 👍4. Strong demand for real-time interruptibility.
- [#10659](https://github.com/openclaw/openclaw/issues/10659) — Masked secrets to prevent agents from reading raw API keys, 15 comments, 👍4. Popular security feature request.

## Bugs & Stability

Bugs and regressions updated in the last 24h, ranked by severity:

**P0**
- [#48920](https://github.com/openclaw/openclaw/issues/48920) — Live docs are ahead of release; `IsolatedSessions` documented but not in the shipped version. Release-blocking documentation regression.

**P1**
- [#121058](https://github.com/openclaw/openclaw/issues/121058) — Silent reply failures recurring after #116277 closed; message loss continues.
- [#91009](https://github.com/openclaw/openclaw/issues/91009) — Codex hook relay spawns CPU-bound processes and stalls gateway RPC.
- [#111372](https://github.com/openclaw/openclaw/issues/111372) — Infinite gateway SIGTERM restart loop on macOS after upgrade.
- [#114020](https://github.com/openclaw/openclaw/issues/114020) — Feishu/Telegram channel dispatch fails on beta.4 because `runChannelInboundEvent` requires `runDispatchLifecycle`.
- [#96242](https://github.com/openclaw/openclaw/issues/96242) — Multiple independent paths cause duplicate Telegram messages.
- [#114211](https://github.com/openclaw/openclaw/issues/114211) — Matrix room agents loop on visible no-reply output and replay stale session state.
- [#97616](https://github.com/openclaw/openclaw/issues/97616) — Unreaped hook/tool child processes accumulate as zombies, degrading runtime.
- [#105528](https://github.com/openclaw/openclaw/issues/105528) — `exec`/`read` tools silently return empty output on Windows.
- [#87327](https://github.com/openclaw/openclaw/issues/87327) — Isolated agent runs stall in the runtime-plugins phase before execution starts.
- [#51049](https://github.com/openclaw/openclaw/issues/51049) — WhatsApp inbound messages not received in k3s nested containers.
- [#56653](https://github.com/openclaw/openclaw/issues/56653) — Slack `reaction_added`/`reaction_removed` never delivered over Socket Mode.
- [#90378](https://github.com/openclaw/openclaw/issues/90378) — Cron store silently migrates to SQLite on upgrade, new jobs default to announce delivery and fail.

**P2 with notable impact**
- [#72015](https://github.com/openclaw/openclaw/issues/72015) — `active-memory` blocks replies and overloads multi-agent gateways at boot.
- [#52130](https://github.com/openclaw/openclaw/issues/52130) — Telegram retry jitter type mismatch causes restart storms.
- [#120735](https://github.com/openclaw/openclaw/issues/120735) — Telegram stickers arrive as unusable raw file refs.
- [#114154](https://github.com/openclaw/openclaw/issues/114154) — `bundle-mcp` tool passes policy but agent sessions never actually bundle it.

Many of these issues carry labels like `clawsweeper:no-new-fix-pr` or `clawsweeper:needs-live-repro`, meaning fixes are not yet confirmed in flight. Some fix PRs do exist, e.g. [#121337](https://github.com/openclaw/openclaw/pull/121337) closes terminal history-loss issue #114192, [#121301](https://github.com/openclaw/openclaw/pull/121301) closes image-understanding fallback issue #121293, and [#121254](https://github.com/openclaw/openclaw/pull/121254) closes UI pin/unpin issue #121247.

## Feature Requests & Roadmap Signals

High-signal user requests that could shape upcoming releases:

- **Context/session efficiency**: Tiered bootstrap loading ([#22438](https://github.com/openclaw/openclaw/issues/22438)), multi-slot memory architecture ([#60572](https://github.com/openclaw/openclaw/issues/60572)), multi-index embedding memory ([#63990](https://github.com/openclaw/openclaw/issues/63990)), agent-triggered compaction ([#6757](https://github.com/openclaw/openclaw/issues/6757)), context provenance metadata ([#54373](https://github.com/openclaw/openclaw/issues/54373)).
- **Security**: Masked secrets ([#10659](https://github.com/openclaw/openclaw/issues/10659)); sanitization of GitHub issue bodies in `gh-issues` ([#45740](https://github.com/openclaw/openclaw/issues/45740)).
- **Agent control & channels**: Steer-mode mid-turn injection ([#48003](https://github.com/openclaw/openclaw/issues/48003)), Telegram reaction triggers ([#47677](https://github.com/openclaw/openclaw/issues/47677)), webchat/Control UI inline buttons ([#46656](https://github.com/openclaw/openclaw/issues/46656)), image/media-group batching ([#39343](https://github.com/openclaw/openclaw/issues/39343)).
- **Model/fallback transparency**: `/models test-fallback` command ([#6599](https://github.com/openclaw/openclaw/issues/6599)), fallback approval mode and model attribution ([#33975](https://github.com/openclaw/openclaw/issues/33975)), visible fallback notices in async contexts ([#94919](https://github.com/openclaw/openclaw/issues/94919)).
- **Performance**: Per-request auth and tool bundling overhead dominating TTFT ([#80131](https://github.com/openclaw/openclaw/issues/80131)).

Likely near-term roadmap signals are the system-agent QR setup and Signal account-linking PR stack ([#119341](https://github.com/openclaw/openclaw/pull/119341)–[#119344](https://github.com/openclaw/openclaw/pull/119344)), failover classification consolidation ([#121341](https://github.com/openclaw/openclaw/pull/121341)), and Ollama max-thinking support ([#121074](https://github.com/openclaw/openclaw/pull/121074)).

## User Feedback Summary

Users are simultaneously relying on OpenClaw for serious multi-channel workflows and hitting reliability limits:

- **Silent reply failures** are the biggest trust issue. The original reporter filed a follow-up saying “still recurring after #116277 was closed,” and their monitoring cron still logs new occurrences ([#121058](https://github.com/openclaw/openclaw/issues/121058)).
- **Upgrade pain** is common: silent SQLite cron-store migration ([#90378](https://github.com/openclaw/openclaw/issues/90378)), docs ahead of release ([#48920](https://github.com/openclaw/openclaw/issues/48920)), and post-upgrade restart loops ([#111372](https://github.com/openclaw/openclaw/issues/111372)).
- **Debuggability complaints**: plugin loader silently tolerates invalid contracts, costing users “hours of debugging” ([#78301](https://github.com/openclaw/openclaw/issues/78301)); `XDG_CONFIG_HOME` not expanded during skill install ([#53628](https://github.com/openclaw/openclaw/issues/53628)).
- **Windows and container environments** remain underserved: empty `exec`/`read` output ([#105528](https://github.com/openclaw/openclaw/issues/105528)), Docker bind-mount memory plugin failures ([#58139](https://github.com/openclaw/openclaw/issues/58139)), and nested k3s inbound message loss ([#51049](https://github.com/openclaw/openclaw/issues/51049)).
- **Security-conscious users** are asking for credential masking and prompt-injection hardening before expanding agent permissions ([#10659](https://github.com/openclaw/openclaw/issues/10659), [#45740](https://github.com/openclaw/openclaw/issues/45740)).

## Backlog Watch

Several important issues have been open for months and are waiting on maintainer or product decisions:

- [#10659](https://github.com/openclaw/openclaw/issues/10659) — Masked secrets, P1, open since Feb 6, needs product decision.
- [#22438](https://github.com/openclaw/openclaw/issues/22438) — Tiered bootstrap loading, open since Feb 21, 19 comments, linked PR open but still needs product decision.
- [#91009](https://github.com/openclaw/openclaw/issues/91009) — Codex PreToolUse CPU/stall problem, P1, open since Jun 6, needs maintainer review and live repro.
- [#45740](https://github.com/openclaw/openclaw/issues/45740) — `gh-issues` prompt-injection risk, P1, needs security review.
- [#48920](https://github.com/openclaw/openclaw/issues/48920) — Docs-ahead-of-release P0 regression, needs maintainer review.
- [#72015](https://github.com/openclaw/openclaw/issues/72015) — `active-memory` blocking replies/gateway overload, P1, needs product decision.
- [#6757](https://github.com/openclaw/openclaw/issues/6757) — Agent-triggered compaction, open since Feb, needs maintainer review.
- [#54373](https://github.com/openclaw/openclaw/issues/54373) — Context provenance RFC, open since Mar, needs maintainer/product decisions.
- [#78301](https://github.com/openclaw/openclaw/issues/78301) — Plugin loader silent failures, needs security review and live repro.

On the PR side, large open PRs still requiring attention include the QR setup stack ([#119343](https://github.com/openclaw/openclaw/pull/119343), [#119342](https://github.com/openclaw/openclaw/pull/119342)), worker-failure preservation ([#121122](https://github.com/openclaw/openclaw/pull/121122)), and auth-profile quota scoping ([#121278](https://github.com/openclaw/openclaw/pull/121278)).

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report — Personal AI Assistant / Agent Open-Source Ecosystem
**Date:** 2026-08-10 · **Source:** 24-hour community digest summaries for 13 projects

---

## 1. Ecosystem Overview

The personal AI assistant / agent open-source ecosystem is in a period of intensive stabilization rather than greenfield feature expansion. Across all 13 tracked projects, **zero releases were published** in the window, while issue and PR velocity remained high — a pattern consistent with the ecosystem consolidating gains before the next release round. Reliability is the dominant trust currency: silent message loss, session-state corruption, and history-disappearing bugs appear as top-severity items in nearly every active project. A second major theme is security hardening — SSRF, command-allowlist bypass, webhook authentication, prompt injection, and credential masking are being actively addressed across at least six projects. Finally, the ecosystem is visibly family-structured: OpenClaw functions as the core reference implementation, with a cluster of "Claw" derivatives (NanoClaw, PicoClaw, ZeroClaw, IronClaw, etc.) iterating on channel support, memory architecture, and container deployment. Three projects (NullClaw, TinyClaw, ZeptoClaw) showed zero activity, indicating ecosystem consolidation around the active players.

---

## 2. Activity Comparison

| Project | Issues Updated | PRs Updated | Release | Merged/Closed (24h) | Health Score (/10) |
|---|---|---|---|---|---|
| **OpenClaw** | 500 | 500 | None | 71 issues / 167 PRs | **8** |
| **Hermes Agent** | 50 | 50 | None | 0 issues / 3 PRs | **5** |
| **ZeroClaw** | 50 | 50 | None | 12 issues / 1 PR | **6** |
| **IronClaw** | 22 | 32 | None | 7 issues / 8 PRs | **7** |
| **CoPaw** | 18 | 27 | None | 7 issues / 1 PR | **6** |
| **NanoBot** | 5 | 16 | None | 0 issues / 4 PRs | **6** |
| **NanoClaw** | 1 | 16 | None | 0 issues / 0 PRs | **5** |
| **PicoClaw** | 3 | 6 | None | 0 issues / 1 PR | **6** |
| **LobsterAI** | 3 | 0 | None | 0 issues / 0 PRs | **4** |
| **Moltis** | 2 | 1 | None | 0 issues / 0 PRs | **6** |
| **NullClaw** | 0 | 0 | None | — | **2** (dormant) |
| **TinyClaw** | 0 | 0 | None | — | **2** (dormant) |
| **ZeptoClaw** | 0 | 0 | None | — | **2** (dormant) |

*Health score is an analyst judgment combining throughput, severity of open critical/P0 issues, and maintainer responsiveness. No project published a release in this window.*

---

## 3. OpenClaw's Position

**Advantages:**
- **Unmatched community scale:** 500 issues / 500 PRs updated in 24h is roughly **10× the volume** of the next tier (Hermes, ZeroClaw at 50 each). With 71 issues closed and 167 PRs merged/closed, it has the largest maintainer capacity and fastest fix pipeline in the ecosystem.
- **Reference-implementation status:** OpenClaw is the project others fork or derive from. Its architecture decisions (gateway, channel dispatch, plugin lifecycle) define the ecosystem's baseline.
- **Enterprise channel breadth:** Slack Enterprise Grid backports, Feishu, Telegram, WhatsApp, Matrix, Signal — no peer matches this channel matrix.
- **Mature QA infrastructure:** The shift to immutable Docker candidates for QA evidence (#121253) shows a level of test determinism most peers lack.

**Technical approach differences:**
- OpenClaw is **gateway-centric with a hook-relay and plugin system**, whereas peers pursue desktop-first (Hermes), Web-console-first (CoPaw), or Rust-native-hardening (ZeroClaw) approaches.
- It ships a **doctor migration path and formalized session-pairing/reset tooling**, indicating a mature upgrade lifecycle story.

**Community size comparison:**
- Tier 1 (500-scale): OpenClaw alone.
- Tier 2 (50-scale): Hermes, ZeroClaw.
- Tier 3 (16–32 PRs): NanoBot, NanoClaw, IronClaw, CoPaw.
- Tier 4 (<10): PicoClaw, LobsterAI, Moltis.

**Key risk:** despite the throughput, OpenClaw carries a long tail of P0/P1 reliability debt — the silent-reply-failure issue #116277 was closed but immediately re-opened in spirit via follow-up #121058, a pattern that erodes user trust despite high fix velocity.

---

## 4. Shared Technical Focus Areas

Requirements emerging across multiple projects:

| Focus Area | Projects | Specific Needs |
|---|---|---|
| **Message-delivery reliability** | OpenClaw, Hermes, IronClaw, NanoClaw | Silent reply failures (#121058), P0 desktop message deletion (#82756), history disappearing on refresh (#7349), dropped Signal attachments (#2529) |
| **Security hardening** | NanoBot, ZeroClaw, PicoClaw, OpenClaw, NanoClaw | `exec.allowPatterns` shell-chain bypass (#5305/#5306), S0 webhook auth (#9565), SSRF in media downloaders (#3322–#3324), prompt-injection via `gh-issues` (#45740), critical `tar` CVE in container image (#3207) |
| **Context / memory management** | OpenClaw, CoPaw, ZeroClaw, NanoBot, LobsterAI | Tiered bootstrap loading (#22438), ReMe reranker + Auto-Dream (#6398/#6841), Hindsight memory stack (#9066), context-overflow on DeepSeek (#1187), token-usage accounting (#5266) |
| **Session-state correctness** | Hermes, OpenClaw, IronClaw, Moltis | Test sessions leaking into prod `state.db` (#82770), session pairing resets (#121146), zombie threads (#7400), silent settings reset (#1187) |
| **Channel/platform-specific bug fixes** | All active projects | Telegram duplicates, Slack reaction events, WhatsApp inbound loss, Matrix sync-loop death, IRC 512-byte fragmentation, WeChat error misclassification |
| **Container & Windows support** | OpenClaw, NanoClaw, NanoBot, CoPaw, Hermes | Docker entrypoint permission failure (#5295), hardened CI image with CVE gates (#3208), Windows empty `exec` output (#105528), Windows model-config save failure (#6806), `rd /s /q` drive-root risk (#82842) |
| **Observability & cost transparency** | NanoBot, OpenClaw, ZeroClaw | Per-call token records (#5299), fallback attribution (#33975/#94919), Langfuse backend (#9556) |
| **Cron / automation reliability** | OpenClaw, Hermes, ZeroClaw | Silent SQLite cron-store migration (#90378), `repeat='forever'` TypeError (#66824), cron SOPs that can't do network work (#9780) |
| **Governance / maintainer tooling** | ZeroClaw, CoPaw, NanoBot | Decision queue for RFCs (#8692), maintainer review bottleneck, un-triaged security advisories (#5305/#5306) |

---

## 5. Differentiation Analysis

| Project | Feature Focus | Target Users | Architectural Signature |
|---|---|---|---|
| **OpenClaw** | Multi-channel enterprise gateway, plugin/hook system, doctor-driven ops | Ops-heavy teams running multi-channel production agents | Gateway-centric, channel-dispatch lifecycle, hook relays |
| **Hermes Agent** | Desktop-first experience (session state, HUD, macOS/Windows apps), cron & memory curator | Desktop power users who live in the app | Native desktop + gateway; session-state heavy; highest data-loss risk pattern |
| **IronClaw** | "Reborn" agent loop, progressive tool disclosure, Responses API, WebUI v2 | API integrators and web-console users building on a hosted agent | Capability-execution semantics, tool-search/deferred discovery, batch parallel execution |
| **ZeroClaw** | Security-first governance, verifiable-intent credentials, Rust hardening, memory stack | Security-conscious ops and contributors who value RFC-driven process | Rust, `forbid(unsafe_code)`, release attestation, webhook fail-closed posture |
| **CoPaw (QwenPaw)** | Memory/RAG (ReMe), provider extensibility, community task board | Developers in the Chinese-model ecosystem (Volcengine, Xiaomi MiMo) plus memory-heavy workflows | Community-contributed providers, console UX, session fork |
| **NanoBot** | Lightweight self-hosted agent, WebUI, token observability, CI quality gates | Self-hosters and hobbyists; clean Docker deployment | WebUI + OpenAI-compatible API; structured usage records; plugin-able CLI apps |
| **NanoClaw** | Hardened container images, supply-chain CVE gates, Signal/Dial channels | Users deploying in locked-down container environments | Docker Hub publishing with CVE gates; inbox-mount attachment pattern |
| **PicoClaw** | Chat-bridge specialization (Matrix, IRC, Telegram, Delta Chat) | Users bridging AI into non-mainstream channels | Long-polling sync loops, protocol-limit handling (512-byte IRC, rich tables) |
| **LobsterAI** | Multi-model orchestration, cross-model sub-task calls | Users mixing planner + executor models in one thread | Gateway-level sub-task tracking gap; context-window config |
| **Moltis** | Sandbox/vault reliability (Apple Container detection, secret normalization) | Small/user-trust-focused audience | Vault recovery normalization; container runtime detection |

---

## 6. Community Momentum & Maturity

**Tier 1 — Rapid iteration, high throughput:**
- **OpenClaw** — Ecosystem leader; highest merge velocity, but carrying reliability debt from its own scale.
- **Hermes Agent** — High issue/PR volume, but **0 issues closed and only 3 PRs merged** — iterating under pressure with a P0 that has recurred three times.
- **ZeroClaw** — Fast bug burn-down (12 closures incl. zombie MCP processes, TOCTOU panic, container build), but S0 webhook auth and a heavy RFC pipeline keep it in pre-release stabilization.

**Tier 2 — Active, steady:**
- **IronClaw** — Best balance in the window: 8 PRs merged, 7 bug-bash issues closed, clear epic-driven roadmap. Most "healthy" signal per unit of activity.
- **CoPaw** — High contributor energy but a **maintainer review bottleneck** (1 of 27 PRs closed). Community task board (#2291, 66 comments) is a successful onboarding mechanism.
- **NanoBot** — Maturing: CI gates, test-strengthening PRs, but critical security advisories await triage.
- **NanoClaw** — 16 active PRs, **0 merged** — in a high-review/iteration phase; overlapping Signal-attachment PRs (#2529/#3142) need reconciliation.
- **PicoClaw** — Quiet but focused; security hardening PRs pending review; risk of stale-closure controversies (Matrix sync-loop #3203).

**Tier 3 — Low activity / maintenance:**
- **LobsterAI** — No PR movement; stale issues (4+ months) unresolved; new high-severity custom-model parsing bug.
- **Moltis** — Small but responsive; a vault-fix PR awaiting review.

**Tier 4 — Dormant:**
- **NullClaw, TinyClaw, ZeptoClaw** — No activity in 24h; likely candidates for archive or consolidation.

**Maturity takeaway:** The ecosystem is bifurcating — a top tier with real maintainer capacity (OpenClaw, IronClaw, ZeroClaw) is converting community energy into merged code, while a middle tier (CoPaw, NanoClaw, NanoBot) risks contributor churn from review lag.

---

## 7. Trend Signals

1. **Reliability is the #1 trust currency — and silent failures are unforgivable.** Users file follow-up issues when a "closed" bug still occurs (OpenClaw #121058). Message loss, ghost sessions, and disappearing history appear across four projects. *For developers:* treat delivery confirmation, session persistence, and history integrity as P0 features from day one.

2. **Security hardening is shifting from "add auth" to "fail closed by default."** Patterns across the ecosystem: exec allowlist must resist shell chaining (NanoBot), webhooks must authenticate callers (ZeroClaw), media downloaders must block SSRF (PicoClaw), container images need CVE gates (NanoClaw), and agents should never see raw secrets (OpenClaw #10659). *For developers:* assume every allowlist will be probed; design for credential masking and prompt-injection boundaries.

3. **Context-window management is the next UX battleground.** Demand for tiered bootstrap loading, agent-triggered compaction, context provenance, and per-model context config is rising across OpenClaw, CoPaw, LobsterAI, and NanoBot. *For developers:* expose context usage and make compaction user-controllable; the "always-loaded bootstrap" era is ending.

4. **Token and cost observability is becoming table stakes.** NanoBot's most-commented issue is unexplained token burn; OpenClaw users want fallback attribution; ZeroClaw is integrating Langfuse. *For developers:* instrument per-call token accounting before users ask for it.

5. **Multi-channel support is assumed, but platform-specific bugs dominate the backlog.** Telegram duplicates, Slack reaction events, WhatsApp inbound loss, Matrix reconnect death, IRC fragmentation, WeChat error misclassification — every project has a channel-specific failure queue. *For developers:* budget 30–40% of engineering time for channel quirks if you promise multi-platform reach.

6. **Desktop and Windows remain the weakest platforms.** Hermes has a P0 desktop message-deletion bug and a near-miss `rd /s /q C:\` incident; OpenClaw has empty Windows tool output; CoPaw has a Windows model-config save failure. *For developers:* Windows/desktop test lanes (Hermes #77992) are the right corrective; run OS-specific tests on real hosts.

7. **Governance and maintainer bandwidth are the ecosystem's real bottleneck.** ZeroClaw created a formal "Maintainer Decision Queue" (#8692); CoPaw's open-PR pool is 26 deep; NanoBot's security advisories sit unanswered. *For developers:* invest in triage automation, RFC time-boxes, and explicit decision SLAs to retain contributors.

8. **Agent-specific safety semantics are emerging as a differentiator.** Verifiable-intent credentials (ZeroClaw #9866), progressive tool disclosure (IronClaw #7166), approval purpose descriptions (CoPaw #6854), and bounded stdin (NanoClaw #3218) point toward a future where agent permissions are cryptographically auditable and context-aware. *For developers:* early adoption of these patterns will be a competitive advantage as the ecosystem matures.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-08-10

## Today's Overview

NanoBot saw strong contributor activity on 2026-08-10: 16 PRs were updated (12 open, 4 closed/merged) and 5 issues were actively updated, all of which remain open. No new releases or release candidates were published. The dominant themes were token-usage observability, security hardening around `exec.allowPatterns`, Docker deployment reliability, and provider compatibility fixes. Overall project health is mixed: PR momentum is healthy and test/CI work is advancing, but two security advisories and several unresolved bugs need maintainer attention.

## Releases

No new releases were published in this window, so no changelog, breaking-change, or migration notes apply.

## Project Progress

Four PRs moved to closed status today:

- [#5308 — test: strengthen user-path coverage and CI gates](https://github.com/HKUDS/nanobot/pull/5308) — Closed. Adds user-path tests for CLI, WebUI forks, version checks, route auth, and failure boundaries; removes subsumed tests; adds V8 coverage reporting and tighter CI enforcement.
- [#5304 — fix(webui): explain HTTPS requirement for voice input](https://github.com/HKUDS/nanobot/pull/5304) — Closed. Fixes misleading voice-input failures by showing an explicit HTTPS requirement and documents trusted HTTPS options for LAN access.
- [#5307 — Restore Star History chart](https://github.com/HKUDS/nanobot/pull/5307) — Closed. Revives the Star History chart using a new provider not affected by GitHub restrictions.
- [#4019 — Add GitAgent Protocol support](https://github.com/HKUDS/nanobot/pull/4019) — Closed. Proposed `agent.yaml` + `SOUL.md` support for portable AI agents, but was eventually closed after a long review period.

Notably, feature work is still advancing in open PRs, especially structured token usage records and Agent Plugins integration.

## Community Hot Topics

- [#5266 — [enhancement] Logs about token consumption (too many tokens are burned)](https://github.com/HKUDS/nanobot/issues/5266) — 13 comments. The most active issue. Users report unexpectedly high token consumption with no visible activity and request per-call token accounting. Underlying need: cost observability and debugging support.
- [#5295 — Bug: deploy with docker compose failed, “cannot open /usr/local/bin/entrypoint.sh: Permission denied”](https://github.com/HKUDS/nanobot/issues/5295) — 5 comments. Deployment smoke-test failure blocks Docker Compose users. Underlying need: reliable out-of-box Docker deployment.
- [#5305 — [Security] `exec.allowPatterns` allowlist bypass enables chained shell command execution via the OpenAI-compatible API](https://github.com/HKUDS/nanobot/issues/5305) — New security advisory, no comments yet, but high impact.
- [#5306 — [Security] `exec.allowPatterns` shell-chain bypass allows unintended command execution](https://github.com/HKUDS/nanobot/issues/5306) — Companion security advisory. Both highlight that command allowlisting must resist shell chaining.

## Bugs & Stability

Ranked by severity:

1. **Critical — `exec.allowPatterns` allowlist bypass enabling chained shell commands**  
   [#5305](https://github.com/HKUDS/nanobot/issues/5305) and [#5306](https://github.com/HKUDS/nanobot/issues/5306) report that shell chaining can bypass the configured exec allowlist. This affects command execution boundaries and could allow unintended commands. No fix PR is visible yet.

2. **High — Agnes AI double-encodes nested-object tool arguments as JSON strings**  
   [#5311](https://github.com/HKUDS/nanobot/issues/5311) — When using Agnes AI (`apihub.agnes-ai.com/v1`, `agnes-2.5-flash`) as a custom provider, MCP tool calls with nested-object parameters fail validation with `MCP error -32602`. No fix PR is linked yet.

3. **Medium — Docker Compose startup failure with entrypoint permission error**  
   [#5295](https://github.com/HKUDS/nanobot/issues/5295) — `docker compose logs -f nanobot-gateway` reports `cannot open /usr/local/bin/entrypoint.sh: Permission denied` and exits with code 2. No fix PR is visible yet.

4. **Medium / observability — Massive silent token consumption**  
   [#5266](https://github.com/HKUDS/nanobot/issues/5266) — Users report millions of tokens burned without obvious activity. This is not yet a proven bug, but it exposes missing diagnostics. Open PR [#5299](https://github.com/HKUDS/nanobot/pull/5299) would add structured token usage records and may partially address it.

## Feature Requests & Roadmap Signals

- **Token usage records / cost diagnostics**  
  [#5266](https://github.com/HKUDS/nanobot/issues/5266) requests per-call token-consumption logs. Open PR [#5299](https://github.com/HKUDS/nanobot/pull/5299) proposes persisting the latest 50 token-usage records and adding `GET /api/settings/usage/records?day=YYYY-MM-DD`. This is a strong candidate for the next release.

- **Agent Plugins integration with CLI Apps**  
  [#5288](https://github.com/HKUDS/nanobot/pull/5288) — Integrates Agent Plugins v1 with CLI Apps so portable skills and MCP runtimes can be distributed as independent plugins. This signals movement toward a pluggable ecosystem.

- **Model-agnostic computer use**  
  [#4276](https://github.com/HKUDS/nanobot/pull/4276) — Long-running PR adding `browser` and `computer_use` tools using stable element references rather than pixel coordinates. Still open, but updated recently.

- **Declarative Responses capabilities**  
  [#5204](https://github.com/HKUDS/nanobot/pull/5204) — Refactors provider-specific Responses checks into a declarative capability profile for OpenAI, GitHub Copilot, and DeepSeek.

- **Truthful API service status**  
  [#5255](https://github.com/HKUDS/nanobot/pull/5255) — Draft PR still open; aims to show correct WebUI API status when `nanobot serve` is externally managed.

- **Telegram polling resilience**  
  [#5156](https://github.com/HKUDS/nanobot/pull/5156) — Full watchdog for stalled Telegram polling remains open. A lower-risk observability split, [#5301](https://github.com/HKUDS/nanobot/pull/5301), is now also proposed.

## User Feedback Summary

- Users are concerned about opaque and potentially excessive token consumption, especially when no user-visible activity explains the costs ([#5266](https://github.com/HKUDS/nanobot/issues/5266)).
- Docker Compose deployment is a friction point: a simple setup fails at startup with an entrypoint permission error ([#5295](https://github.com/HKUDS/nanobot/issues/5295)).
- Security-minded users are already probing command allowlist edge cases, highlighting the need for hardened `exec` tool semantics ([#5305](https://github.com/HKUDS/nanobot/issues/5305), [#5306](https://github.com/HKUDS/nanobot/issues/5306)).
- Provider compatibility remains important: custom providers such as Agnes AI can break MCP tool calls due to argument encoding differences ([#5311](https://github.com/HKUDS/nanobot/issues/5311)).
- Positive signals: contributors are investing in test coverage, CI gates, WebUI correctness, and documentation fixes ([#5308](https://github.com/HKUDS/nanobot/pull/5308), [#5304](https://github.com/HKUDS/nanobot/pull/5304)).

## Backlog Watch

- [#4276 — feat(tools): model-agnostic computer use (computer_use + browser tools)](https://github.com/HKUDS/nanobot/pull/4276) — Open since June 10, 2026. Large scope, marked with conflicts, and still awaiting a maintainer decision.
- [#5156 — fix(telegram): recover from silently stalled polling](https://github.com/HKUDS/nanobot/pull/5156) — Open since July 29, 2026. Fixes a production-impacting Telegram issue; related split PR [#5301](https://github.com/HKUDS/nanobot/pull/5301) is a lower-risk observability piece.
- [#5255 — Draft: truthful API service status for externally-managed servers + `nanobot api status`](https://github.com/HKUDS/nanobot/pull/5255) — Open since August 5, 2026, still a draft with conflict flags.
- [#5204 — refactor(providers): declare Responses capabilities](https://github.com/HKUDS/nanobot/pull/5204) — Open since August 1, 2026; provider refactor that could affect compatibility decisions.
- [#5305](https://github.com/HKUDS/nanobot/issues/5305) and [#5306](https://github.com/HKUDS/nanobot/issues/5306) — Although newly filed, these security advisories have zero maintainer response and no linked fix PR, so they should be triaged as top priority.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-08-10

## 1. Today's Overview

Hermes Agent saw a high level of activity in the last 24 hours: **50 issues updated** (50 open, 0 closed) and **50 PRs updated** (47 open, 3 merged/closed). No new releases were published. The issue queue is dominated by desktop session-state stability problems, including a P0 silent message-deletion regression, as well as Windows data-loss risk and several cron/gateway correctness bugs. PR activity is heavily focused on security hardening, desktop fixes, and reliability patches. Overall project health is **active but stability-critical**: maintainers are landing targeted fixes, but several high-severity issues remain open.

---

## 2. Releases

**None.** No new releases were published on 2026-08-10, so there are no changelog, breaking-change, or migration notes to report.

---

## 3. Project Progress

Three PRs were merged/closed in the last 24h per the data overview. Two are visible in the top-20 PR list:

- [PR #77992 — test: gate OS-specific tests by real host, add macOS + Windows CI lanes](https://github.com/NousResearch/hermes-agent/pull/77992)  
  **Closed.** Improves test reliability by no longer faking `sys.platform`/`_IS_WINDOWS`; runs OS-specific tests on real macOS/Windows CI hosts.

- [PR #43819 — fix(memory): share one SQLite connection per holographic store database](https://github.com/NousResearch/hermes-agent/pull/43819)  
  **Closed.** Fixes a P1 memory-plugin bug by sharing a single process-wide SQLite connection with refcounted close semantics for holographic memory stores.

A third merged/closed PR was updated today but is not present in the top-20 list shown in this digest.

---

## 4. Community Hot Topics

Most-commented issues in the last 24h:

- [#63047 — Desktop app becomes completely unresponsive after ~5 messages on macOS 27 beta](https://github.com/NousResearch/hermes-agent/issues/63047)  
  **19 comments · P1 · updated 2026-08-10**  
  The single hottest topic. The desktop app freezes entirely, including Settings, after a few messages. Underlying need: desktop client reliability for long conversations.

- [#26689 — Accessibility improvements for blind VoiceOver users](https://github.com/NousResearch/hermes-agent/issues/26689)  
  **13 comments · 1 👍 · P3 · updated 2026-08-10**  
  Users praise the backend power but call out the near-impossible screen-reader UX. Underlying need: inclusive CLI/TUI/dashboard accessibility.

- [#66824 — cronjob create with repeat='forever' fails: '<=' not supported between 'str' and 'int'](https://github.com/NousResearch/hermes-agent/issues/66824)  
  **6 comments · P2 · duplicate · updated 2026-08-10**  
  Also duplicated by [#71987 — cronjob create/update throws TypeError](https://github.com/NousResearch/hermes-agent/issues/71987). Strong signal that cron job creation/update is currently broken for a class of users.

- [#46064 — OpenRouter router models silently dropped from `hermes model`](https://github.com/NousResearch/hermes-agent/issues/46064)  
  **3 comments · P3 · updated 2026-08-10**  
  Users can only use router models like `openrouter/pareto-code` by hand-editing config. Underlying need: model picker transparency.

- [#80125 — WeChat adapter misreports ret=-2 as rate limited, hiding missing context_token](https://github.com/NousResearch/hermes-agent/issues/80125)  
  **3 comments · P2 · updated 2026-08-09**  
  Platform adapter error misclassification hides the real configuration problem from users.

- [#15831 — Feature: Job chaining — trigger one cron job from another's completion](https://github.com/NousResearch/hermes-agent/issues/15831)  
  **1 comment · 1 👍 · oldest open feature request in this digest (Apr 26)**  
  Still a desired workflow, but has not gained maintainer traction.

---

## 5. Bugs & Stability

Ranked by severity:

### Critical / P0

- [#82756 — Desktop plain-Enter submit silently deleted ~65 messages](https://github.com/NousResearch/hermes-agent/issues/82756)  
  **P0 · comp/gateway · comp/desktop · area/sessions**  
  Third occurrence of silent session-history loss after #70516 and #80763. The desktop client executed a destructive `replace_messages` flow with stale truncation state. No fix PR is visible in today's list; this is the highest-priority open bug.

- [#82842 — Agent executed `rd /s /q` against the drive root C:\ on Windows](https://github.com/NousResearch/hermes-agent/issues/82842)  
  **User-reported severity: Critical · label P2 · needs-repro · Windows**  
  Nearly caused full system-drive data loss after a scoped, user-approved folder deletion. This is a security-boundary and terminal-tool safety issue; no fix PR is visible yet.

### High / P1

- [#63047 — Desktop app completely unresponsive after ~5 messages on macOS 27 beta](https://github.com/NousResearch/hermes-agent/issues/63047)  
  **P1 · sweeper:risk-session-state · comp/desktop**  
  Full UI freeze, including Settings; open since 2026-07-12 with 19 comments. No fix PR visible.

- [#82770 — Test sessions leak into developer production state.db](https://github.com/NousResearch/hermes-agent/issues/82770)  
  **P1 · area/sessions**  
  700+ junk open gateway session rows with test-fixture identities were found in a production `state.db`. Fixture-escape class bug; no fix PR visible.

### Medium / P2

- [#82846 — Smart-approval auxiliary LLM call has no enforced timeout](https://github.com/NousResearch/hermes-agent/issues/82846)  
  **P2 · approval gate / auxiliary client**  
  A stalled provider response can wedge the entire agent session indefinitely.

- [#66824 / #71987 — cron create/update TypeError with `repeat='forever'`](https://github.com/NousResearch/hermes-agent/issues/66824)  
  **P2 · duplicate · comp/cron**  
  Cron job creation/update is broken for recurring schedules. No fix PR is visible in today's data.

- [#82875 — `reasoning_effort` silently dropped for named `providers:` endpoints](https://github.com/NousResearch/hermes-agent/issues/82875)  
  **P2 · duplicate · comp/agent · provider/openai**  
  User-configured reasoning effort resolves but is never sent to the provider.

- [#82831 — `normalize_usage` misses reasoning tokens when usage details are dicts](https://github.com/NousResearch/hermes-agent/issues/82831)  
  **P2 · comp/agent · area/usage-cost**  
  Reasoning tokens are silently recorded as 0 for models that do emit them.

- [#82805 — Intermittent empty-bodied HTTP 400 on local llama.cpp](https://github.com/NousResearch/hermes-agent/issues/82805)  
  **P2 · comp/agent**  
  Fix PR exists: [PR #82809 — classify empty-bodied 400 from llama.cpp as transient and free-retry](https://github.com/NousResearch/hermes-agent/pull/82809).

- [#82872 — Desktop `ws_orphan_reap` sessions restore as empty ghost tiles](https://github.com/NousResearch/hermes-agent/issues/82872)  
  **P2 · comp/desktop · area/sessions**  
  Sessions killed by the gateway orphan-reaper are unopenable after restart.

### Lower severity / P3

- [#82871 — Buzz adapter: gateway default-denies all Buzz users](https://github.com/NousResearch/hermes-agent/issues/82871)  
  **P3 · comp/gateway · comp/plugins · area/auth**  
  Central authorization has no BUZZ entry, so every Buzz user is denied even when the adapter allowlist would permit them.

- [#82851 — Desktop HUD drag broken on Linux/Wayland](https://github.com/NousResearch/hermes-agent/issues/82851)  
  **P3 · comp/desktop**  
  `setPosition` is a no-op under Wayland compositors.

---

## 6. Feature Requests & Roadmap Signals

Notable feature-shaped requests in the current issue set:

- [#26689 — Accessibility improvements for blind VoiceOver users](https://github.com/NousResearch/hermes-agent/issues/26689)  
  Strong community support (13 comments). A likely candidate if maintainers prioritize inclusive UX in a future release.

- [#61644 — Autonomous Evaluation and Self-Improvement Engine (HAEE)](https://github.com/NousResearch/hermes-agent/issues/61644)  
  Would close the gap between Hermes' “self-improving” claim and actual skill verification.

- [#76883 — Make memory mutations reversible](https://github.com/NousResearch/hermes-agent/issues/76883)  
  Local archive for `remove()`/`replace()` on MEMORY.md/USER.md. Fits the safety/curator direction.

- [#62738 — Model responses can exhibit persuasion-bomb / sycophancy tendencies](https://github.com/NousResearch/hermes-agent/issues/62738)  
  Could lead to response-filtering or behavior-correction features.

- [#15831 — Cron job chaining](https://github.com/NousResearch/hermes-agent/issues/15831)  
  Oldest feature request in this snapshot, but low recent activity; less likely near-term.

- [#82316 — Desktop “New session in project” shouldn't force-enter the project drill-in view](https://github.com/NousResearch/hermes-agent/issues/82316)  
  Small UX quality-of-life fix that could ride along with desktop polish.

**Prediction:** The next release is more likely to focus on **desktop session-state correctness**, **cron reliability fixes**, and **security-boundary hardening** than on new large features. Accessibility and memory reversibility remain strong roadmap signals but may take longer.

---

## 7. User Feedback Summary

Users are clearly relying on Hermes Agent for serious desktop, cron, and gateway workflows, and they are hitting real friction:

- **Desktop stability is the biggest pain point.** Complaints range from full UI freezes ([#63047](https://github.com/NousResearch/hermes-agent/issues/63047)) to silent message deletion ([#82756](https://github.com/NousResearch/hermes-agent/issues/82756)) and dead-end ghost sessions ([#82872](https://github.com/NousResearch/hermes-agent/issues/82872)).
- **Cron UX is fragile.** Users report broken create/update commands ([#66824](https://github.com/NousResearch/hermes-agent/issues/66824), [#71987](https://github.com/NousResearch/hermes-agent/issues/71987)) and missing run history for script-only jobs ([PR #82870](https://github.com/NousResearch/hermes-agent/pull/82870)).
- **Platform integrations need better error reporting.** WeChat users are shown “rate limited” when the real cause is a missing `context_token` ([#80125](https://github.com/NousResearch/hermes-agent/issues/80125)); Buzz users are denied by default despite allowlist configuration ([#82871](https://github.com/NousResearch/hermes-agent/issues/82871)).
- **Install/update flow is frustrating.** `hermes update` tells users to re-run after a failed npm install, but re-running on an already-current checkout skips the repair ([#77211](https://github.com/NousResearch/hermes-agent/issues/77211)). macOS in-app updates deadlock with a stale staged updater ([#77753](https://github.com/NousResearch/hermes-agent/issues/77753)).
- **Power users appreciate the backend but want better visibility.** VoiceOver users call the backend powerful but the UX difficult ([#26689](https://github.com/NousResearch/hermes-agent/issues/26689)). OpenRouter users are blocked from router models in the picker ([#46064](https://github.com/NousResearch/hermes-agent/issues/46064)).

---

## 8. Backlog Watch

Issues and PRs that have been open for a while and still need maintainer attention:

- [#63047 — Desktop unresponsive after ~5 messages on macOS](https://github.com/NousResearch/hermes-agent/issues/63047)  
  **Open since 2026-07-12 · P1 · 19 comments**  
  Long-running high-severity desktop bug with no visible fix PR.

- [#26689 — Accessibility for blind VoiceOver users](https://github.com/NousResearch/hermes-agent/issues/26689)  
  **Open since 2026-05-16 · P3 · 13 comments**  
  Major UX gap for screen-reader users; needs a maintainer response or roadmap commitment.

- [#15831 — Cron job chaining](https://github.com/NousResearch/hermes-agent/issues/15831)  
  **Open since 2026-04-26 · P3**  
  Oldest feature request in this snapshot, still unresolved.

- [#46064 — OpenRouter router models silently hidden from `hermes model`](https://github.com/NousResearch/hermes-agent/issues/46064)  
  **Open since 2026-06-14 · P3**  
  Simple configuration/visibility gap that forces manual config.yaml edits.

- [#77211 — `hermes update` never repairs a previously failed npm install](https://github.com/NousResearch/hermes-agent/issues/77211)  
  **Open since 2026-08-03 · P2**  
  The update path gives users incorrect recovery instructions.

- [#77753 — macOS in-app update deadlocks with stale `~/.hermes/hermes-setup`](https://github.com/NousResearch/hermes-agent/issues/77753)  
  **Open since 2026-08-03 · P2**  
  Recurring bug class; no supported path to refresh the staged updater binary.

- [#61644 — Autonomous Evaluation and Self-Improvement Engine (HAEE)](https://github.com/NousResearch/hermes-agent/issues/61644)  
  **Open since 2026-07-09 · P3**  
  Large, potentially roadmap-defining feature request; no maintainer engagement visible.

- [#61752 — fix(tests): stop cmd_update tests leaking real detached Windows gateways](https://github.com/NousResearch/hermes-agent/pull/61752)  
  **Open PR since 2026-07-10 · P3 · Windows test infra**  
  Important test-isolation fix still waiting for review/merge.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-08-10

## 1. Today's Overview

PicoClaw activity is stable but focused: 3 issues and 6 pull requests were touched in the last 24 hours, with 1 PR closed and no new release published. The most significant movement is a security-focused SSRF-hardening series across multiple chat channel media downloaders (#3322, #3323, #3324), which remains open for review. A previously reported Matrix sync-loop reconnect bug was closed as stale despite having 8 comments and 2 👍 reactions. On the feature side, Telegram native rich table rendering now has both an issue (#3325) and an implementation PR (#3327). The project appears healthy overall, with active contributor involvement and recent attention to both security and platform-specific UX improvements.

## 2. Releases

No new releases were published in this window.

## 3. Project Progress

Only one PR was closed/merged in the last 24 hours:

- [#3326: fix(web): remove duplicate pnpm lock entries](https://github.com/sipeed/picoclaw/pull/3326) — Removed duplicate `semver@7.8.5` mappings from `web/frontend/pnpm-lock.yaml` that caused `pnpm install --frozen-lockfile` to fail with `ERR_PNPM_BROKEN_LOCKFILE`. This was a maintenance fix for the web frontend build tooling.

No feature PRs were merged in this window.

## 4. Community Hot Topics

- [#3203: [stale] [BUG] Matrix sync loop has no reconnection logic](https://github.com/sipeed/picoclaw/issues/3203) — 8 comments, 2 👍. The issue documents a serious reliability problem: after a network disruption or homeserver restart, the Matrix `/sync` loop dies silently, and systemd does not restart the process because the main process remains alive. The issue was closed as stale despite clear user interest. The underlying need is production-grade resilience for long-polling chat bridges.

- [#3287: [Feature] Better support long messages in IRC](https://github.com/sipeed/picoclaw/issues/3287) — 4 comments. Users want PicoClaw to reassemble IRCv3 messages split at the 512-byte limit into a single cohesive message. This signals real-world usage where long-form AI/assistant messages are being truncated or fragmented in IRC.

- [#3325: [Feature] Render Telegram tables with rich messages](https://github.com/sipeed/picoclaw/issues/3325) — New issue, but already paired with [#3327](https://github.com/sipeed/picoclaw/pull/3327), showing responsive feature development.

## 5. Bugs & Stability

Ranked by severity:

1. **SSRF risk in channel media downloads** — [#3322](https://github.com/sipeed/picoclaw/pull/3322), [#3323](https://github.com/sipeed/picoclaw/pull/3323), [#3324](https://github.com/sipeed/picoclaw/pull/3324) all address crafted media URLs reaching loopback/private hosts through insecure HTTP clients. Affected areas include QQ, Telegram, Discord, LINE, Slack, WeChat, and WeCom media handling. These are open security-hardening PRs and likely need prompt maintainer review.

2. **Matrix sync loop silent death** — [#3203](https://github.com/sipeed/picoclaw/issues/3203) describes a high-availability bug where the Matrix channel permanently stops after network/server disruption, with no reconnection. This was closed as stale, so no fix PR currently exists. This deserves attention despite the stale label.

3. **Broken frontend lockfile** — [#3326](https://github.com/sipeed/picoclaw/pull/3326) fixed duplicate pnpm lock entries that broke frozen installs. This has already been addressed.

## 6. Feature Requests & Roadmap Signals

- **Telegram native rich message tables** — [#3325](https://github.com/sipeed/picoclaw/issues/3325) requested using Telegram Bot API 10.1 rich message support for tables instead of code blocks. The corresponding implementation PR [#3327](https://github.com/sipeed/picoclaw/pull/3327) is already open, so this is the strongest candidate for inclusion in the next version.

- **IRC long message support** — [#3287](https://github.com/sipeed/picoclaw/issues/3287) remains an open feature request with no linked PR. It is likely on the roadmap but may need a contributor to pick it up.

- **Delta Chat cleanup** — [#3222](https://github.com/sipeed/picoclaw/pull/3222) is an open refactor PR reducing Delta Chat implementation by ~200 lines, modernizing configuration and documentation. It has been open since July 3 and may be part of a broader channel maintenance effort.

## 7. User Feedback Summary

Users are primarily asking for reliability and better message fidelity. The Matrix reconnect issue shows operations-focused users need their chat bridges to survive network interruptions without manual intervention. IRC users want long AI-generated messages to be treated as one logical message, not fragmented by IRC protocol limits. Telegram users want better structured-data rendering with native rich messages. The stale closure of #3203 may be a pain point, as the bug remains unresolved while technically closed.

## 8. Backlog Watch

- [#3222: refactor(deltachat): cleanup implementation, documentation -200LOC](https://github.com/sipeed/picoclaw/pull/3222) — Open since July 3, updated August 9, with no visible comments. This needs maintainer review to avoid becoming stale.

- [#3203: Matrix sync loop has no reconnection logic](https://github.com/sipeed/picoclaw/issues/3203) — Recently closed as stale, but the underlying bug is serious and unresolved. Maintainers should either reopen or link a follow-up tracking issue.

- [#3287: Better support long messages in IRC](https://github.com/sipeed/picoclaw/issues/3287) — Open since July 22, with active discussion but no implementation PR yet. If roadmap priorities include IRC improvements, this needs attention.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

## 1. Today's Overview

NanoClaw saw an active but unmerged day: **1 open issue** was filed and **16 PRs were updated** in the last 24 hours, with **0 PRs merged or closed** and **0 new releases**. The update activity is concentrated around container/hardened-image improvements, Signal/Slack attachment handling, internal refactors, and supply-chain CVE fixes. The repo is clearly in a high-review/iteration phase, but the lack of merged PRs means little landed in `main` today. Overall project health looks strong in contributor engagement, with 16 open PRs all receiving recent updates.

---

## 2. Releases

**No new releases** were published in the last 24 hours. There are no changelogs, breaking-change notes, or migration guides to report.

---

## 3. Project Progress

**No PRs were merged or closed today**, so no features or fixes officially landed in the project. However, the active PR queue shows meaningful progress in several areas:

- **Hardened image & supply chain**:  
  - [nanocoai/nanoclaw #3208](https://github.com/nanocoai/nanoclaw/pull/3208) — CI workflow to publish the agent image to Docker Hub with CVE gates.  
  - [nanocoai/nanoclaw #3207](https://github.com/nanocoai/nanoclaw/pull/3207) — bumps pnpm and npm to fix a critical `tar` CVE in the agent image.

- **Attachment handling**:  
  - [nanocoai/nanoclaw #2529](https://github.com/nanocoai/nanoclaw/pull/2529) — delivers inbound Signal attachments to the agent instead of dropping them.  
  - [nanocoai/nanoclaw #3142](https://github.com/nanocoai/nanoclaw/pull/3142) — forwards Signal image/file attachments through the mounted inbox instead of a dead path.  
  - [nanocoai/nanoclaw #3209](https://github.com/nanocoai/nanoclaw/pull/3209) — surfaces pasted tables from Slack to the agent.

- **Refactors and foundations**:  
  - [nanocoai/nanoclaw #3214](https://github.com/nanocoai/nanoclaw/pull/3214) — unified host module lifecycle hooks.  
  - [nanocoai/nanoclaw #3213](https://github.com/nanocoai/nanoclaw/pull/3213) — registered question renderers.  
  - [nanocoai/nanoclaw #3212](https://github.com/nanocoai/nanoclaw/pull/3212) — added module migration registry.  
  - [nanocoai/nanoclaw #3186](https://github.com/nanocoai/nanoclaw/pull/3186) — added host seams for skill-owned capabilities.

These are not yet merged, but they indicate strong forward progress toward container stability, channel reliability, and extensibility.

---

## 4. Community Hot Topics

No issue or PR in the dataset shows explicit comment or reaction counts, so popularity is inferred from recency, breadth, and the sensitivity of the topic.

Most likely active discussion topics:

- **Missing pip support in `install_packages`** — [nanocoai/nanoclaw #3217](https://github.com/nanocoai/nanoclaw/issues/3217)  
  This issue blocks users who need Python packages from adopting the hardened prebuilt image. Underlying need: **users want a single package-install abstraction that covers Python, not just apt and npm**.

- **Critical `tar` CVE in the container image** — [nanocoai/nanoclaw #3207](https://github.com/nanocoai/nanoclaw/pull/3207)  
  Security-sensitive users are likely watching this closely. Underlying need: **clean, current container images without known critical vulnerabilities**.

- **Signal attachment handling** — [nanocoai/nanoclaw #2529](https://github.com/nanocoai/nanoclaw/pull/2529) and [nanocoai/nanoclaw #3142](https://github.com/nanocoai/nanoclaw/pull/3142)  
  Both PRs address the same class of bug: attachments reaching the agent container via inaccessible paths. Underlying need: **reliable multi-modal communication for real-world Signal usage**.

- **New Dial channel adapter** — [nanocoai/nanoclaw #3041](https://github.com/nanocoai/nanoclaw/pull/3041) and [nanocoai/nanoclaw #3050](https://github.com/nanocoai/nanoclaw/pull/3050)  
  A large feature addition: SMS + AI voice calls via Dial, plus setup-wizard integration. Underlying need: **broader channel coverage beyond Slack/Signal, especially telephony**.

---

## 5. Bugs & Stability

Bugs and stability issues ranked by severity:

- **Critical**: [nanocoai/nanoclaw #3207](https://github.com/nanocoai/nanoclaw/pull/3207)  
  The agent image contains `tar` versions flagged as critical by Grype (GHSA-23hp-3jrh-7fpw). The fix PR bumps npm/pnpm toolchains and is currently open.

- **High**: [nanocoai/nanoclaw #3142](https://github.com/nanocoai/nanoclaw/pull/3142)  
  Signal image/file attachments were spliced into a container path that was never mounted, so the agent could never read them. Fix PR exists, but it is not merged.

- **High**: [nanocoai/nanoclaw #2529](https://github.com/nanocoai/nanoclaw/pull/2529)  
  Inbound Signal attachments are dropped entirely. This is a companion fix to #3142 and remains open after months.

- **Medium**: [nanocoai/nanoclaw #3209](https://github.com/nanocoai/nanoclaw/pull/3209)  
  Tables pasted into Slack are not surfaced to the agent, reducing usefulness for chat-based workflows. Fix PR is open.

- **Low**: [nanocoai/nanoclaw #3215](https://github.com/nanocoai/nanoclaw/pull/3215)  
  DM resolution logs are not redacted, creating a potential permissions/privacy leak. A redaction fix PR is open.

- **Adoption blocker / feature gap**: [nanocoai/nanoclaw #3217](https://github.com/nanocoai/nanoclaw/issues/3217)  
  Not a crash, but `install_packages` only supports apt and npm, blocking Python-dependent installs from using the hardened derived-image path. A docs-only PR ([nanocoai/nanoclaw #3216](https://github.com/nanocoai/nanoclaw/pull/3216)) acknowledges the limitation but does not fix it.

---

## 6. Feature Requests & Roadmap Signals

Strong roadmap signals from the active PR queue:

- **Python package channel for `install_packages`** — [nanocoai/nanoclaw #3217](https://github.com/nanocoai/nanoclaw/issues/3217)  
  Users want pip support in the package-install model. This is likely to be a near-term feature if maintainers prioritize hardened-image adoption.

- **Bounded JSON stdin input** — [nanocoai/nanoclaw #3218](https://github.com/nanocoai/nanoclaw/pull/3218)  
  A generic `--stdin-json` mode for `ncl` clients would give commands a clean, bounded structured-input mechanism.

- **Dial channel integration** — [nanocoai/nanoclaw #3041](https://github.com/nanocoai/nanoclaw/pull/3041) and [nanocoai/nanoclaw #3050](https://github.com/nanocoai/nanoclaw/pull/3050)  
  SMS and AI voice calls via Dial would be a major channel expansion. Since both PRs have been updated recently, they may be close to review/merge.

- **Docker Hub publishing with CVE gates** — [nanocoai/nanoclaw #3208](https://github.com/nanocoai/nanoclaw/pull/3208)  
  Publishing images to Docker Hub with built-in CVE gates aligns with the project’s hardening direction.

Prediction: the next NanoClaw release, when it comes, will likely include attachment-delivery fixes for Signal, the Dial channel (if merged), and security-focused container workflow improvements.

---

## 7. User Feedback Summary

Real user pain points visible in today’s data:

- Python-dependent installs cannot adopt the hardened prebuilt image because pip packages have no channel in `install_packages` ([#3217](https://github.com/nanocoai/nanoclaw/issues/3217)).
- Signal attachment handling is unreliable: attachments are either dropped or sent to a path the agent cannot access ([#2529](https://github.com/nanocoai/nanoclaw/pull/2529), [#3142](https://github.com/nanocoai/nanoclaw/pull/3142)).
- Slack users lose table data when pasting into chats because the agent never receives it ([#3209](https://github.com/nanocoai/nanoclaw/pull/3209)).
- Security-conscious users are blocked by known critical CVEs in the container image ([#3207](https://github.com/nanocoai/nanoclaw/pull/3207)).
- Permission/DM logs need redaction to prevent sensitive information exposure ([#3215](https://github.com/nanocoai/nanoclaw/pull/3215)).

No explicit satisfaction or dissatisfaction scores are available. The tone of the PRs suggests contributors are actively solving real friction rather than merely filing complaints, which is a healthy signal.

---

## 8. Backlog Watch

Several important PRs have been open for weeks or months and need maintainer attention:

- [nanocoai/nanoclaw #2529](https://github.com/nanocoai/nanoclaw/pull/2529) — **Opened May 18, 2026**, updated Aug 9. Fixes inbound Signal attachments being dropped. High user impact, long wait.
- [nanocoai/nanoclaw #3142](https://github.com/nanocoai/nanoclaw/pull/3142) — **Opened Jul 27, 2026**, updated Aug 9. Same attachment class; should be reconciled with #2529.
- [nanocoai/nanoclaw #3041](https://github.com/nanocoai/nanoclaw/pull/3041) — **Opened Jul 14, 2026**, updated Aug 9. Large Dial channel adapter.
- [nanocoai/nanoclaw #3050](https://github.com/nanocoai/nanoclaw/pull/3050) — **Opened Jul 14, 2026**, updated Aug 9. Dial setup wizard/picker integration.
- [nanocoai/nanoclaw #3186](https://github.com/nanocoai/nanoclaw/pull/3186) — **Opened Aug 4, 2026**, updated Aug 9. Refactor adding host seams; foundational but waiting on review.

The cluster of overlapping Signal attachment PRs ([#2529](https://github.com/nanocoai/nanoclaw/pull/2529) and [#3142](https://github.com/nanocoai/nanoclaw/pull/3142)) is especially notable: both address the same user-facing problem and should be triaged together to avoid duplicate or conflicting fixes.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-08-10

## 1. Today's Overview

IronClaw showed a high level of activity over the past 24 hours, with 22 issues updated (15 open, 7 closed) and 32 pull requests updated (24 open, 8 merged/closed). No new releases were published. Development momentum is concentrated around the "Reborn" architecture, especially tool discovery ergonomics (#7405, #7409, #7410, #7411), capability execution semantics (#7407), and new notification channels like web-push (#7398). The closure of 7 older bug-bash QA issues (#5522, #7292, #5552, #5509, #5510, #4341, #4344) signals steady stabilization of the agent loop and WebUI v2. The most urgent new item is a high-severity Responses API streaming bug (#7400) affecting current stable releases.

## 2. Releases

No new releases in the last 24 hours. The latest stable line remains **ironclaw 1.1.0** (reference: issue #7400 confirms both `1.1.0-rc.1` and `1.1.0` stable are in the wild).

## 3. Project Progress

**Merged/closed PRs** (8 total in window; visible subset):

- **#7171 (closed)** — `fix(skills): one DB-backed tree for every skill mount, and make a skill's own commands runnable (closes #7168)`, part of epic #6941. Fixes a serious user-facing bug: installed skills returned `{"installed": true}` but were "gone forever" — absent from Settings → Skills and unactivatable. https://github.com/nearai/ironclaw/pull/7171
- **#7387 (closed)** — Routine dependabot bump: 12 Rust updates in the everything-else group. https://github.com/nearai/ironclaw/pull/7387
- **#7022 (closed)** — Dependabot: GitHub Actions group (`actions/setup-node` 4.0.2 → 7.0.0, `docker/login-action`). https://github.com/nearai/ironclaw/pull/7022

**Closed issues** — 7 QA/bug-bash bugs resolved in the window, clearing older Reborn-loop, WebUI, and routine-management debt:
- #5522 — Slack DM reading capability missing + `capability_info` retry loop (https://github.com/nearai/ironclaw/issues/5522)
- #7292 — Installed tool unusable; runner heartbeat error (https://github.com/nearai/ironclaw/issues/7292)
- #5552 — Generic "invalid result" after multiple tool failures (https://github.com/nearai/ironclaw/issues/5552)
- #5509 — Chat creation latency scaling with history (https://github.com/nearai/ironclaw/issues/5509)
- #5510 — Cannot delete old routines (https://github.com/nearai/ironclaw/issues/5510)
- #4341 — Agent THINKING chain-of-thought exposed / stuck thinking state (https://github.com/nearai/ironclaw/issues/4341)
- #4344 — Agent mirrors user message while loading (https://github.com/nearai/ironclaw/issues/4344)

## 4. Community Hot Topics

Most active items by discussion, with underlying needs:

- **#5522 (closed, 4 comments)** — "Reborn routine fails when task requires reading Slack DMs." The most-commented issue in the window. The core complaint is twofold: the agent lacks channel-read primitives, and it enters a `capability_info` retry loop when a capability is unavailable. This reflects a broader demand for native channel-read capabilities and fail-fast behavior on missing tools. https://github.com/nearai/ironclaw/issues/5522
- **#7400 (open, high severity, 2 comments)** — `stream: true` + caller `tools[]` on `POST /api/v1/responses` fails mid-stream and leaves a permanently undeletable "zombie" thread, with 100% reproduction on both 1.1.0-rc.1 and stable. This is a critical API-integrator trust issue. https://github.com/nearai/ironclaw/issues/7400
- **#7405 / #7407 (open, 2 comments each, both filed by serrrfirat)** — Deferred tool discovery with complete signatures (#7405) and true concurrent execution of `BatchPolicy::Parallel` batches (#7407). Together they signal that multi-tool-call turns are currently too slow and token-hungry, and the project is actively addressing it via companion PRs #7409, #7410, and #7411. https://github.com/nearai/ironclaw/issues/7405 · https://github.com/nearai/ironclaw/issues/7407

## 5. Bugs & Stability

Ranked by severity:

**High**
- **#7400** — `stream: true` + caller-supplied `tools[]` on `/api/v1/responses` fails mid-stream and leaves a permanently undeletable "zombie" thread. Verified on both `1.1.0-rc.1` and `1.1.0` stable; 100% reproduction; no fix PR visible yet. https://github.com/nearai/ironclaw/issues/7400

**Medium (P2 bug-bash cluster)**
- **#7346** — Emoji shortcodes (`:wave:`, `:smile:`, `:+1:`) render as raw text in assistant messages on Railway staging. Rendering regression. https://github.com/nearai/ironclaw/issues/7346
- **#7348** — Activity tool calls and assistant progress messages appear out of chronological order in the chat UI during long-running tasks. https://github.com/nearai/ironclaw/issues/7348
- **#7345** — Agent reports 61 automations while the dashboard UI shows only 50 — either hallucinated state or UI/backend count inconsistency. https://github.com/nearai/ironclaw/issues/7345
- **#7349** — Refreshing the chat page causes a significant portion of run history and Activity timeline to disappear. Data-loss-adjacent UX bug. https://github.com/nearai/ironclaw/issues/7349
- **#5882** — Repeated Slack reconnect attempts leave the authentication flow permanently broken ("Waiting for Slack..." indefinitely); only recovery is reinstalling the extension. https://github.com/nearai/ironclaw/issues/5882
- **#6479** — Routines can create or modify other routines while executing, risking self-replicating automations and infinite scheduling loops; no guardrail exists. https://github.com/nearai/ironclaw/issues/6479
- **#6046** — Simple email-to-sheet workflow ("check my recent emails and add near.ai addresses to my Google Sheet") triggers 124 tool invocations, with the agent decoding unrelated content (base64, FOIA context, pricing emails). https://github.com/nearai/ironclaw/issues/6046
- **#5878** — Revoked GitHub token produces misleading errors ("the tool input could not be encoded", "AI model provider was temporarily unavailable") instead of triggering a re-auth flow. https://github.com/nearai/ironclaw/issues/5878
- **#5551** — Slack-triggered automation posts intermediate progress messages (e.g., "Now let me also check for the 'Show HN: Apfel' thread...") instead of the final summary. https://github.com/nearai/ironclaw/issues/5551

No fix PRs are yet linked against the still-open P2 set, but the 7 closed issues this window show the team is actively burning down the earlier bug-bash backlog.

## 6. Feature Requests & Roadmap Signals

- **Tool-search / deferred-tool discovery upgrade (#7405)** — Improve `tool_search` to return complete canonical signatures and namespace-aware catalog previews, reducing model turns at large tool counts. An implementation stack is already underway: **#7409** (100/500/1,000-tool retrieval baselines), **#7410** (bounded complete signatures), and **#7411** (swappable retrieval provider behind a host port). Strongest "next version" signal. https://github.com/nearai/ironclaw/issues/7405 · https://github.com/nearai/ironclaw/pull/7410 · https://github.com/nearai/ironclaw/pull/7411
- **Parallel capability batches (#7407)** — The agent loop already computes `BatchPolicy::Parallel`, but production executes batches sequentially. The request is bounded concurrency with zero model-facing changes — a high-value performance win likely to land soon. https://github.com/nearai/ironclaw/issues/7407
- **Web push notifications + PWA (#7398, open PR)** — Turns the web app into a first-party notification channel with W3C Web Push (RFC 8030), VAPID, and aes128gcm encryption, achieving parity with Slack/Telegram for automation delivery. Strong next-release candidate. https://github.com/nearai/ironclaw/pull/7398
- **Progressive previews for Slack/Telegram (#7396, open PR)** — Channel-neutral progressive-preview contract with editable `chat.postMessage`/`chat.update` previews in Slack DMs; final-message delivery remains authoritative. https://github.com/nearai/ironclaw/pull/7396
- **Coding tools experiment (#7392, epic)** — Replace IronClaw's first-party model-visible coding tools with the pinned `can1357/oh-my-pi` contract, shipped through the always-on host-owned tool surface. Signals consolidation of the coding-tool ecosystem. https://github.com/nearai/ironclaw/issues/7392
- **Stress coverage expansion (#7360)** — The nightly API-capacity harness never exercises built-in capability writes or durable write paths because the mock model returns final responses without tool calls; request to expand e2e stress coverage. https://github.com/nearai/ironclaw/issues/7360
- **Tool disclosure follow-up (#7166, epic, v1.2.0)** — Progressive tool disclosure is declared safe/reliable/efficient as the Reborn default; this epic likely drives v1.2.0 polish. https://github.com/nearai/ironclaw/issues/7166

## 7. User Feedback Summary

The bug-bash P2 cluster reveals consistent pain themes:

- **Slack integration is the weakest link** — #5522 (cannot read Slack DMs), #5882 (reconnect breaks auth permanently), #5551 (intermediate progress messages leak to channels instead of final results). Slack is a primary automation surface and is hitting reliability walls.
- **Execution history is not trustworthy** — #7349 (history disappears on refresh), #7348 (timeline out of order), #7345 (agent count vs. UI count mismatch) collectively erode confidence in the run timeline.
- **Simple tasks are expensive** — #6046's 124 tool invocations and #7407's sequential batch execution show the agent burns too many calls/tokens on basic workflows; the tool-search work (#7405) is the direct response.
- **Error messages mislead users** — #5878 (revoked GitHub token reported as "tool input could not be encoded") and the closed #5552 (generic "invalid result" with no per-tool attribution) show demand for actionable failure details.
- **Guardrails are requested** — #6479's routine-inception risk highlights user concern about autonomous self-replication.
- **API stability matters to integrators** — #7400's zombie threads on `/api/v1/responses` are a blocker for external consumers building on the Responses API.

Positive signals: the closure of 7 older P1/P2/P3 bugs in a single window shows visible backlog burn-down on Railway staging, with the Reborn loop and WebUI v2 converging in stability.

## 8. Backlog Watch

Open items that have gone quiet or need maintainer attention:

- **#5551 (open since 2026-07-02, 1 comment)** — Slack automations post intermediate progress messages instead of final results. No linked fix after 5+ weeks. https://github.com/nearai/ironclaw/issues/5551
- **#5878 (open since 2026-07-09, 1 comment)** — Misleading errors on revoked GitHub token; needs re-auth flow wiring. https://github.com/nearai/ironclaw/issues/5878
- **#5882 (open since 2026-07-09, 2 comments)** — Slack reconnect permanently breaks auth flow. https://github.com/nearai/ironclaw/issues/5882
- **#6046 (open since 2026-07-13, 1 comment)** — 124 tool invocations for a simple email-to-sheet task; needs efficiency heuristics. https://github.com/nearai/ironclaw/issues/6046
- **#6479 (open since 2026-07-22, 1 comment)** — Routine-inception / self-replicating automation risk; no guardrail discussion beyond the initial report. https://github.com/nearai/ironclaw/issues/6479
- **PR #5101 (open since 2026-06-20)** — `ci: reuse cargo-component installer in live canary`; 7+ weeks old and possibly blocked or deprioritized. https://github.com/nearai/ironclaw/pull/5101
- **#7166 (epic, open since 2026-08-04)** — Tool disclosure follow-up tagged v1.2.0; needs breakdown into tracked sub-issues. https://github.com/nearai/ironclaw/issues/7166

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

## LobsterAI Project Digest — 2026-08-10

### 1. Today's Overview

As of 2026-08-10, LobsterAI shows a low-activity day: 3 issues were updated in the last 24 hours, while no pull requests and no releases were published. All updated issues remain open, and none were closed or merged. Two of the active issues are stale, having been open since April and June respectively, which suggests limited maintainer attention on older threads. The current discussions center on model configuration, context-window handling, custom-model validation, and cross-model sub-task orchestration. Overall project health appears stable but with a growing maintenance backlog.

---

### 2. Releases

No new releases were published in the last 24 hours.

---

### 3. Project Progress

No pull requests were merged or closed today. There is no observable code-merge activity or feature advancement to report in this digest window.

---

### 4. Community Hot Topics

The following issues received the most engagement during the reporting period:

- **[#1187 – Suggest adding context-window size and output-token settings in the model API configuration](https://github.com/netease-youdao/LobsterAI/issues/1187)**  
  - Author: qxjysd | Created: 2026-04-01 | Updated: 2026-08-09 | Comments: 2 | 👍: 1  
  - This is the most-discussed item, with 2 comments and 1 reaction. The user reports `Context overflow: prompt too large for the model` errors on DeepSeek models and asks for configurable context-window and output-token settings. The underlying need is greater user control over per-model context limits to avoid hard failures during long sessions.

- **[#2132 – Cross-model sub-task invocation problem](https://github.com/netease-youdao/LobsterAI/issues/2132)**  
  - Author: woxinsj | Created: 2026-06-09 | Updated: 2026-08-09 | Comments: 1  
  - This issue discusses a cross-model collaboration scenario where a planner model creates sub-tasks for a faster executor model. The user found that a gateway-level function call was not tracked in `sessions_list` or `subagents`, revealing gaps in cross-model sub-task supervision and event notification.

- **[#2453 – Switching to a custom model is rejected by the system](https://github.com/netease-youdao/LobsterAI/issues/2453)**  
  - Author: Alexandre0820 | Created: 2026-08-09 | Updated: 2026-08-09 | Comments: 1  
  - A recent bug report where custom model definitions like `custom_1/openai/gpt-oss-20b:free` are misparsed as `provider/model`, causing the system to reject them as unauthorized. This affects OpenRouter free models and NVIDIA-hosted models.

---

### 5. Bugs & Stability

Three bug-related concerns were updated today, ranked by likely severity:

1. **[#2453 – Custom model switching misclassified as unauthorized](https://github.com/netease-youdao/LobsterAI/issues/2453)**  
   - **Severity:** High  
   - Custom models containing additional path segments are incorrectly parsed, breaking model switching in active threads. This is a functional regression/validation bug affecting real user workflows with third-party model providers. No fix PR exists.

2. **[#1187 – Context overflow due to incompatible context-window handling](https://github.com/netease-youdao/LobsterAI/issues/1187)**  
   - **Severity:** Medium  
   - DeepSeek sessions fail with `Context overflow` errors, making long conversations unusable unless the user manually resets. The absence of user-configurable context/output-token settings makes this a recurring annoyance. No fix PR exists.

3. **[#2132 – Cross-model sub-task calls not tracked properly](https://github.com/netease-youdao/LobsterAI/issues/2132)**  
   - **Severity:** Medium / Architectural  
   - Gateway-level function calls from a main task to sub-tasks are not recognized as sub-agent sessions, breaking status synchronization and notification flows. This is more of a design gap than a crash, but it affects multi-model orchestration reliability. No fix PR exists.

---

### 6. Feature Requests & Roadmap Signals

Two clear feature signals emerged from today's issue activity:

- **User-configurable context-window and output-token settings**  
  Requested in [#1187](https://github.com/netease-youdao/LobsterAI/issues/1187). Users want per-model API configuration for context size and output token limits, especially for large-context models like DeepSeek. Given the repeated nature of the error, this is a strong candidate for a future configuration panel or model-schema enhancement.

- **Explicit cross-model sub-task collaboration semantics**  
  Requested in [#2132](https://github.com/netease-youdao/LobsterAI/issues/2132). The proposal includes:  
  1. Reusing the same-model sub-task completion notification mechanism for cross-model calls.  
  2. Enabling sub-tasks to proactively notify the main task upon completion or blockage.  
  This could evolve into a documented "cross-model sub-task calling requirement" in a future release.

- **Model-validation relaxation / provider parsing fix**  
  Implicitly requested by [#2453](https://github.com/netease-youdao/LobsterAI/issues/2453). The system should accept custom model IDs that contain provider names as part of the model identifier, rather than rejecting them.

---

### 7. User Feedback Summary

Real user pain points in the last 24 hours center on model interoperability and orchestration:

- Users running DeepSeek models face hard session failures due to context overflow, with no easy way to adjust model limits. This disrupts long-running conversations and forces resets.
- Users combining multiple models in one thread—e.g., a planning model and a faster executor—find the sub-task system confusing and incomplete. The main task is not reliably informed of sub-task completion or failure.
- Users relying on OpenRouter free models and NVIDIA-hosted models report that custom model names are rejected during switching, making multi-model workflows unnecessarily brittle.

Overall sentiment is mixed: the project is clearly powerful enough to attract complex usage, but configuration flexibility and cross-model orchestration need improvement.

---

### 8. Backlog Watch

Two stale issues remain open and would benefit from maintainer attention:

- **[#1187 – Provide context-window/output-token settings](https://github.com/netease-youdao/LobsterAI/issues/1187)**  
  Open since 2026-04-01, last updated 2026-08-09. Still unresolved after more than four months, despite user demand and a reproducible error message.

- **[#2132 – Cross-model sub-task invocation gap](https://github.com/netease-youdao/LobsterAI/issues/2132)**  
  Open since 2026-06-09, last updated 2026-08-09. Contains a detailed root-cause analysis and proposed design improvements but has not received maintainer response or a fix PR.

- **[#2453 – Custom model validation issue](https://github.com/netease-youdao/LobsterAI/issues/2453)**  
  This is a fresh issue created 2026-08-09. Because it affects a core workflow (model switching) and is easy to reproduce, it should be prioritized for triage despite not yet being stale.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-08-10

## 1. Today's Overview

Moltis showed low but active maintenance activity in the last 24 hours: 2 open issues were updated and 1 open PR was submitted, with no closed issues or merged PRs. No new releases were published. The project is in a triage/development state, with maintainers evidently reviewing bug reports and an incoming vault fix. All current activity remains open, suggesting ongoing investigation rather than immediate resolution. Overall project health appears stable, though the lack of merged PRs means no user-facing improvements landed in this window.

## 2. Releases

No new releases were published in this period.

## 3. Project Progress

No PRs were merged or closed in the last 24 hours. The only PR activity is a newly submitted open fix:

- [PR #1186: fix(vault): normalize recovery phrase before hashing](https://github.com/moltis-org/moltis/pull/1186) — authored by `pxmpsdev`
  - Addresses inconsistent vault unsealing by normalizing recovery phrases (stripping dashes, uppercasing) before deriving and hashing the key encryption key.
  - The PR notes that vault unsealing already accepts lowercase/dashed phrases, but the stored hash was computed over the raw phrase, meaning unsealing could fail for users who originally entered an unnormalized phrase.
  - If merged, this would resolve a real vault recovery edge case, though it is still open.

## 4. Community Hot Topics

No issues or PRs in this snapshot have comments or reactions, so there are no high-engagement threads by those metrics. The most notable actively updated items are:

- [Issue #1185: Apple Container 1.x sandbox starts but Moltis treats it as not running](https://github.com/moltis-org/moltis/issues/1185) — affects container runtime detection.
- [Issue #1187: Heartbeat settings UI silently resets fields not represented by the form](https://github.com/moltis-org/moltis/issues/1187) — affects settings persistence and data integrity.
- [PR #1186: vault recovery phrase normalization](https://github.com/moltis-org/moltis/pull/1186) — a fix awaiting review.

Underlying needs from these items center on reliability: users expect Moltis to correctly detect running sandbox environments and to persist all settings without silent loss.

## 5. Bugs & Stability

Two open bugs were reported or updated in the last 24 hours, both with no associated fix PR yet.

1. **High severity — [Issue #1185: Apple Container 1.x sandbox starts but Moltis treats it as not running](https://github.com/moltis-org/moltis/issues/1185)**
   - Reported by `mikz`
   - A false negative on container runtime status can break workflows that depend on sandbox lifecycle state.
   - No fix PR is currently linked.

2. **Medium severity — [Issue #1187: Heartbeat settings UI silently resets fields not represented by the form](https://github.com/moltis-org/moltis/issues/1187)**
   - Reported by `IlyaBizyaev`
   - Users may believe settings are saved when they actually get reset, leading to unexpected behavior.
   - This is a data-integrity/UI bug rather than a crash, but it can cause configuration loss.

No crashes or regressions were reported in this window.

## 6. Feature Requests & Roadmap Signals

There are no explicit feature requests in the current data. However, the two bug reports signal areas that may need roadmap attention:

- **Sandbox compatibility:** [Issue #1185](https://github.com/moltis-org/moltis/issues/1185) suggests that Apple Container 1.x support may need a more robust detection mechanism. Future versions may include improved container-runtime state checks.
- **Settings UI completeness:** [Issue #1187](https://github.com/moltis-org/moltis/issues/1187) implies the heartbeat settings form does not reflect all stored fields. The next UI iteration may need to synchronize form fields with the full settings model.

The open [PR #1186](https://github.com/moltis-org/moltis/pull/1186) is also a likely candidate for the next patch release if it passes review.

## 7. User Feedback Summary

Users reported two concrete pain points:

- A user running Apple Container 1.x experienced a discrepancy between actual sandbox state and Moltis’s reported state, which can undermine trust in the tool’s runtime monitoring.
- A user found that heartbeat settings can be silently reset when editing through the UI, causing configuration loss without an error message.

Both reports followed the preflight checklist, indicating users are engaged and trying to provide useful context. There were no positive feedback items, reactions, or comments in this snapshot, so overall sentiment cannot be broadly measured; the existing reports suggest frustration with reliability and transparency.

## 8. Backlog Watch

No long-unanswered issues or PRs were visible in this 24-hour window. The oldest items in the snapshot were created on 2026-08-08 and updated on 2026-08-09, so they are still recent. Maintainers should nonetheless prioritize [Issue #1185](https://github.com/moltis-org/moltis/issues/1185), because incorrect sandbox state detection can block core usage, and review [PR #1186](https://github.com/moltis-org/moltis/pull/1186) to prevent vault recovery friction from lingering.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-08-10

## 1. Today's Overview

CoPaw/QwenPaw activity remained high over the last 24 hours: 18 issues were updated (11 open/active, 7 closed), 27 PRs were updated (26 open, 1 closed), and no new releases were published. The project is clearly in an active community-driven development phase, with many contributors submitting feature PRs and bug fixes. However, the low merged/closed PR count relative to the large open-PR pool suggests a possible maintainer review bottleneck. Overall project health looks strong from a contribution standpoint, but user-facing stability issues around providers, memory, and console UX still need attention.

## 2. Releases

No new releases were published in this window.

## 3. Project Progress

Only one PR was closed today:

- [PR #6846 — feat(providers): catalog DeepSeek V4 context windows (1M)](https://github.com/agentscope-ai/QwenPaw/pull/6846)  
  Adds `deepseek-v4-flash` and `deepseek-v4-pro` entries to the static context-window catalog with 1,000,000-token windows, fixing incorrect 128K context-window resolution.

Several meaningful PRs were updated but remain open, including:

- [PR #6515 — Volcengine Agent Plan and Xiaomi MiMo V2.5 built-in providers](https://github.com/agentscope-ai/QwenPaw/pull/6515)
- [PR #6854 — Localized approval purpose descriptions](https://github.com/agentscope-ai/QwenPaw/pull/6854)
- [PR #6844 — Strip unsupported Gemini schema metadata](https://github.com/agentscope-ai/QwenPaw/pull/6844)
- [PR #6845 — Preserve assistant completion time](https://github.com/agentscope-ai/QwenPaw/pull/6845)
- [PR #6843 — Stream SSE in real-time via pure ASGI middleware](https://github.com/agentscope-ai/QwenPaw/pull/6843)
- [PR #6398 — Add reranker support for ReMe memory search](https://github.com/agentscope-ai/QwenPaw/pull/6398)
- [PR #6704 — Session fork: snapshot conversation context to new session](https://github.com/agentscope-ai/QwenPaw/pull/6704)

## 4. Community Hot Topics

The most active issues by comment count were:

- [Issue #2291 — Help Wanted: Open Tasks — Come Contribute! (66 comments)](https://github.com/agentscope-ai/QwenPaw/issues/2291)  
  The community task board remains a central coordination point. It lists P0–P2 tasks and invites contributors to claim work, showing healthy onboarding momentum.

- [Issue #6281 — Web console mobile adaptation (5 comments)](https://github.com/agentscope-ai/QwenPaw/issues/6281)  
  Users want to operate the QwenPaw console from mobile devices. This is a recurring quality-of-life request with no maintainer response visible yet.

- [Issue #6826 — Assistant message end time display bug (4 comments)](https://github.com/agentscope-ai/QwenPaw/issues/6826)  
  Users report the UI shows unrealistically short assistant completion times. A fix PR already exists: [PR #6845](https://github.com/agentscope-ai/QwenPaw/pull/6845).

- [Issue #5584 — Cannot connect custom ascend-vllm model (4 comments, closed)](https://github.com/agentscope-ai/QwenPaw/issues/5584)  
  Custom vLLM model connectivity regressed after version 1.1.7. Closed as a question, but underlying model-config compatibility concerns remain.

- [Issue #6812 — Model 'unknown' execution failed in Google API (3 comments)](https://github.com/agentscope-ai/QwenPaw/issues/6812)  
  Gemini provider tool schemas include an unsupported `$schema` field. [PR #6844](https://github.com/agentscope-ai/QwenPaw/pull/6844) directly addresses this root cause.

The PR list shows particularly strong community interest in provider extensibility, memory/RAG improvements, console UX, and session/chats management.

## 5. Bugs & Stability

Ranked roughly by severity:

1. **High — [Issue #6806: qwenpaw-creator cannot save model config on Windows — “Internal Server Error”](https://github.com/agentscope-ai/QwenPaw/issues/6806)**  
   Blocks Windows users from saving any model configuration. No fix PR is visible yet.

2. **High — [Issue #6839: MCP tool calls convert digit-like strings to numbers](https://github.com/agentscope-ai/QwenPaw/issues/6839)**  
   Breaks MCP tools with string parameters such as API keys or asset codes. No fix PR is visible yet.

3. **High — [Issue #6812: Google Gemini API fails with “Model 'unknown' execution failed”](https://github.com/agentscope-ai/QwenPaw/issues/6812)**  
   Caused by `$schema` metadata being sent to Gemini. Fix exists in [PR #6844](https://github.com/agentscope-ai/QwenPaw/pull/6844).

4. **Medium — [Issue #6847: Antivirus software kills QwenPaw during tasks](https://github.com/agentscope-ai/QwenPaw/issues/6847)**  
   Likely environment/AV false-positive related, but disruptive. No fix PR is visible.

5. **Medium — [Issue #6826: Assistant completion time displayed incorrectly](https://github.com/agentscope-ai/QwenPaw/issues/6826)**  
   Persisted messages lose `finished_at`/`completed_at` time. Fix in [PR #6845](https://github.com/agentscope-ai/QwenPaw/pull/6845).

6. **Medium — [Issue #6853: prompts.py tells agents dream writes to MEMORY.md, but it does not](https://github.com/agentscope-ai/QwenPaw/issues/6853)**  
   A documentation/prompt inconsistency in the ReMe memory pipeline that could mislead agents.

7. **Medium — [Issue #6841: Auto-Dream marks whole task as error after one unit schema failure](https://github.com/agentscope-ai/QwenPaw/issues/6841)**  
   Partial failures should be tolerated and retried rather than poisoning the entire task status.

8. **Low/UX — [Issue #6852: Front-end collapses long multi-line tool output](https://github.com/agentscope-ai/QwenPaw/issues/6852)**  
   The same report was also filed as #6848, #6849, #6850, and #6851, with four of those closed as duplicates.

Also closed today: [Issue #5579 — conversation records lost under abnormal interruption](https://github.com/agentscope-ai/QwenPaw/issues/5579). This was a serious data-loss report; if the closure means a fix landed, it should be verified against the original crash/reboot scenarios.

## 6. Feature Requests & Roadmap Signals

Strong roadmap signals include:

- [Issue #6281 — Web console mobile adaptation](https://github.com/agentscope-ai/QwenPaw/issues/6281)  
  Likely candidate for a future UX-focused release.

- [Issue #6832 — Approval requests should include purpose description](https://github.com/agentscope-ai/QwenPaw/issues/6832)  
  Already implemented in [PR #6854](https://github.com/agentscope-ai/QwenPaw/pull/6854), so this is likely landing soon.

- [Issue #6840 — ReMe Light in 2.1.0b2: roadmap for full ReMe4](https://github.com/agentscope-ai/QwenPaw/issues/6840)  
  Users are tracking the memory roadmap: Auto-Link, tri-modal search, and 4-category digest weights.

- [Issue #6841 — Auto-Dream retry and partial-failure tolerance](https://github.com/agentscope-ai/QwenPaw/issues/6841)  
  Suggests memory-pipeline robustness is becoming a community priority.

- [PR #6515 — New built-in providers: Volcengine Agent Plan and Xiaomi MiMo V2.5](https://github.com/agentscope-ai/QwenPaw/pull/6515)  
  More provider options are a recurring theme; likely to ship in a near-term release.

- [PR #6398 — ReMe reranker support](https://github.com/agentscope-ai/QwenPaw/pull/6398)  
  Signals ongoing investment in memory search quality.

- [PR #6704 — Session fork](https://github.com/agentscope-ai/QwenPaw/pull/6704) and [PR #6843 — Real-time SSE streaming](https://github.com/agentscope-ai/QwenPaw/pull/6843)  
  Both target console/chat UX and are strong candidates for the next beta.

Overall, the next minor/beta version will likely include approval descriptions, new provider additions, SSE streaming improvements, and further ReMe memory refinements.

## 7. User Feedback Summary

User pain points are concentrated around provider compatibility, console UX, and memory reliability:

- Custom/third-party model connectivity remains fragile, especially for Ascend-vLLM, Gemini, and strict OpenAI-compatible providers.
- MCP tool integration has type-handling problems that break real-world tools.
- Desktop/console users want incremental streaming output, mobile access, better tool-output rendering, and clearer approval context.
- Memory system users are excited about ReMe but want more transparency and robustness, especially around Auto-Dream failures.
- Security software interference is causing real task interruptions for some users.

On the positive side, the project has attracted many first-time contributors, and the community task board ([#2291](https://github.com/agentscope-ai/QwenPaw/issues/2291)) appears to be functioning as an effective onboarding mechanism. Overall feedback is mixed but skews constructively toward fixes and feature requests rather than fundamental dissatisfaction.

## 8. Backlog Watch

The following older open PRs have been waiting for maintainer attention and would benefit from review, merge, or explicit closure:

- [PR #6259 — Support CIDR in no-auth host allowlist](https://github.com/agentscope-ai/QwenPaw/pull/6259) — open since 2026-07-19
- [PR #6312 — Configurable theme/skin module (draft)](https://github.com/agentscope-ai/QwenPaw/pull/6312) — open since 2026-07-21
- [PR #6325 — Show built-in tool docs and parameters in Console](https://github.com/agentscope-ai/QwenPaw/pull/6325) — open since 2026-07-22
- [PR #6360 — Change context injection role from system to user](https://github.com/agentscope-ai/QwenPaw/pull/6360) — open since 2026-07-22
- [PR #6398 — ReMe memory search reranker support](https://github.com/agentscope-ai/QwenPaw/pull/6398) — open since 2026-07-23
- [PR #6515 — Volcengine Agent Plan and Xiaomi MiMo V2.5 providers](https://github.com/agentscope-ai/QwenPaw/pull/6515) — open since 2026-07-28

Older open issues also needing maintainer response:

- [Issue #6281 — Web console mobile adaptation](https://github.com/agentscope-ai/QwenPaw/issues/6281) — open since 2026-07-20
- [Issue #6806 — Windows model-config save failure](https://github.com/agentscope-ai/QwenPaw/issues/6806) — open since 2026-08-07

The accumulation of open PRs, especially from first-time contributors, is a sign of community energy, but without faster maintainer review it may become a bottleneck for contributor retention.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-08-10

## 1. Today's Overview
ZeroClaw is in a high-intensity stabilization and governance phase: **50 issues and 50 PRs** were updated in the last 24 hours, with **12 issues closed** (all but one of the visible closures were bug fixes or completed trackers) and **1 PR merged/closed**. The open PR queue is large (49 open) and heavy — many are `size:XL` feature branches, including multi-model provider profiles, PowerShell native shell support, and the 7-part Hindsight memory stack. Security is the dominant theme of the moment: an **S0 webhook authentication bug (#9565)**, a verifiable-intent credential-chain flaw (#9328, with fix PR #9866 in flight), and release-attestation consolidation (#9101) are all under active discussion. No new releases were published in this window; the project appears to be preparing a v0.8.4 release after a blocked container build was fixed (#9690). Contributor energy is strong, but **many high-value PRs are stalled on `needs-author-action`**, suggesting maintainer attention is partially consumed by process overhead rather than code review.

## 2. Releases
No new releases in this window. (The last release, v0.8.3, was referenced in ongoing discussions; a v0.8.4 release run surfaced the rustc-pin bug #9690, which was closed in this window.)

## 3. Project Progress
One PR was merged/closed in the last 24h, but it was not among the top-20 PRs sampled in this snapshot, so its identity cannot be confirmed from the provided data. However, **9 of the 12 closed issues are visible and indicate landed fixes**:

- **[#8054](https://github.com/zeroclaw-labs/zeroclaw/issues/8054) (closed)** — System prompt tool-availability mismatch across all entry points; completes the #7756/#8053 fix series.
- **[#8560](https://github.com/zeroclaw-labs/zeroclaw/issues/8560) (closed)** — `browser_open` hanging agent turns on unbounded subprocess wait; also covers robot-kit TTS and channel ffmpeg.
- **[#9192](https://github.com/zeroclaw-labs/zeroclaw/issues/9192) (closed)** — `shared_budget` TOCTOU `AtomicUsize` wrap and `SopEngine::finish_run` mutex panic.
- **[#9656](https://github.com/zeroclaw-labs/zeroclaw/issues/9656) (closed)** — Telegram typing indicator running during approval waits (misleading "working" state).
- **[#9690](https://github.com/zeroclaw-labs/zeroclaw/issues/9690) (closed)** — Containerfile StageX rustc 1.95.0 pin below MSRV; unblocked the all-features container variant.
- **[#8731](https://github.com/zeroclaw-labs/zeroclaw/issues/8731) (closed)** — Stdio MCP servers accumulating as zombie processes.
- **[#9834](https://github.com/zeroclaw-labs/zeroclaw/issues/9834) (closed)** — Intermittent `zeroclaw-runtime` test failures from process-global state.
- **[#8681](https://github.com/zeroclaw-labs/zeroclaw/issues/8681) (closed)** — Goal-mode implementation split tracker completed.

Notable **open PRs advancing** (not yet merged): [#9866](https://github.com/zeroclaw-labs/zeroclaw/pull/9866) hardens verifiable-intent boundaries (JWK private key redaction, u32 wraparound, empty-currency rejection); [#9777](https://github.com/zeroclaw-labs/zeroclaw/pull/9777) accepts Signal `sourceUuid` senders; [#9636](https://github.com/zeroclaw-labs/zeroclaw/pull/9636) accepts Windows `nul` as a safe redirect target; [#9571](https://github.com/zeroclaw-labs/zeroclaw/pull/9571) removes the WATI channel entirely (p0); [#9424](https://github.com/zeroclaw-labs/zeroclaw/pull/9424) rejects semantically-empty terminal completions.

## 4. Community Hot Topics
*(Comment counts were captured for issues; PR comment counts were unavailable in this snapshot. No 👍 reactions were recorded on any sampled item.)*

| Issue | Comments | What it's about |
|---|---|---|
| [#6808](https://github.com/zeroclaw-labs/zeroclaw/issues/6808) | 22 | RFC: Work Lanes, Board Automation & Label Cleanup (governance rollout tracker, Rev. 24) |
| [#7100](https://github.com/zeroclaw-labs/zeroclaw/issues/7100) | 12 | RFC: Per-model capability & context-window config (vision, `context_window`) |
| [#9397](https://github.com/zeroclaw-labs/zeroclaw/issues/9397) | 11 | RFC: Empty WhatsApp Web `allowed_groups` should mean permit-none (security) |
| [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) | 11 | Tracker: Maintainer decision queue for RFCs and design issues |
| [#8054](https://github.com/zeroclaw-labs/zeroclaw/issues/8054) | 10 | System prompt tool-availability mismatch (closed w/ fix) |
| [#8681](https://github.com/zeroclaw-labs/zeroclaw/issues/8681) | 10 | Goal-mode implementation split tracker (closed) |
| [#6971](https://github.com/zeroclaw-labs/zeroclaw/issues/6971) | 10 | RFC: Security posture, credential boundaries, universal ingress policy |
| [#9101](https://github.com/zeroclaw-labs/zeroclaw/issues/9101) | 9 | Consolidate release attestation mechanisms (3 parallel signing mechanisms today) |

**Underlying needs:** The most-commented items are dominated by *process and governance* rather than features — contributors want a faster, clearer RFC/voting pipeline ([#9496](https://github.com/zeroclaw-labs/zeroclaw/issues/9496), 6 comments, explicitly calls the RFC process "slower and more cumbersome"), plus a decision queue ([#8692]) so accepted work doesn't stall. The second cluster is *security hardening* (webhook fail-closed, WhatsApp allowlists, credential/ingress boundaries, single signing story), showing a community actively pushing defense-in-depth. The sustained attention on #6808 (22 comments across 24 revisions) marks it as the de-facto meta-governance document for the project.

## 5. Bugs & Stability

**Open, highest severity:**

- **[#9565](https://github.com/zeroclaw-labs/zeroclaw/issues/9565) — S0 / p0, in-progress:** Gateway webhook handlers for WhatsApp Cloud, Linq, and WATI dispatch attacker-controllable messages without authenticating the caller. No dedicated fix PR yet, but [#9571](https://github.com/zeroclaw-labs/zeroclaw/pull/9571) removes the WATI channel entirely, partially shrinking the attack surface.

**Open, S1 / p1:**

- **[#9085](https://github.com/zeroclaw-labs/zeroclaw/issues/9085) — accepted, help wanted:** Nested runtime panic in `try_enable_pgvector` blocks gateway/agent startup with the Postgres memory backend.
- **[#8642](https://github.com/zeroclaw-labs/zeroclaw/issues/8642) — accepted, help wanted:** MCP/tool-schema cloning drives unbounded RSS growth in the agent loop (split from the WSL2 OOM tracker #5542).
- **[#9284](https://github.com/zeroclaw-labs/zeroclaw/issues/9284) — accepted:** Config flush can overwrite concurrent writes (read-lock → await `save_dirty()` → write pattern).
- **[#9779](https://github.com/zeroclaw-labs/zeroclaw/issues/9779) — accepted:** Documented `sops_dir` default is not honored by the daemon, so SOPs silently never load.

**Open security bugs:**

- **[#9328](https://github.com/zeroclaw-labs/zeroclaw/issues/9328) — accepted, p2:** `vi_verify` evaluates constraints without verifying the credential chain. Fix PR [#9866](https://github.com/zeroclaw-labs/zeroclaw/pull/9866) is in flight.
- **[#9486](https://github.com/zeroclaw-labs/zeroclaw/issues/9486) — accepted, p2:** High-entropy detector redacts Solana wallet addresses on the Telegram channel, and `high_entropy_tokens=false` doesn't suppress it. Related RFC [#9825](https://github.com/zeroclaw-labs/zeroclaw/issues/9825) proposes publish-safe exceptions.
- **[#8519](https://github.com/zeroclaw-labs/zeroclaw/issues/8519) — accepted, p1:** Cargo-audit ignores and wasmtime-wasi CVEs need remediation; audit.toml/deny.toml drift.

**Fixed in this window (closed):** #8054 (system-prompt tools), #8560 (browser_open hang), #9192 (shared_budget/TOCTOU), #9656 (typing indicator during approval), #8731 (zombie MCP processes), #9834 (test flake), #9690 (container build). [#9860](https://github.com/zeroclaw-labs/zeroclaw/issues/9860) (web UI frozen after filesystem channel event) was closed as a duplicate.

**Minor/open:** [#9198](https://github.com/zeroclaw-labs/zeroclaw/issues/9198) (S3, Discord typing indicator stuck after dashboard reload), [#9780](https://github.com/zeroclaw-labs/zeroclaw/issues/9780) (cron-triggered SOPs cannot do network work; docs overpromise watch-loops).

## 6. Feature Requests & Roadmap Signals
The roadmap is being shaped by a dense batch of RFCs awaiting maintainer ratification:

- **[#7100](https://github.com/zeroclaw-labs/zeroclaw/issues/7100)** — Per-model capability & context-window config (fixes misreported vision support and wrong 32k fallback). High likelihood for next release given its `p1`/`risk:high` status.
- **[#9397](https://github.com/zeroclaw-labs/zeroclaw/issues/9397)** — Empty WhatsApp `allowed_groups` → permit-none. Security-driven behavior change; likely to land with the channel-security wave.
- **[#6971](https://github.com/zeroclaw-labs/zeroclaw/issues/6971)** — Universal ingress/credential-boundary policy; a broad security RFC (p2, risk:high).
- **[#7897](https://github.com/zeroclaw-labs/zeroclaw/issues/7897)** — Apply security policy/channel config changes without full daemon reload (p3, addresses live-reload pain).
- **[#9825](https://github.com/zeroclaw-labs/zeroclaw/issues/9825)** — Publish-safe exceptions for public blockchain identifiers (directly unblocks Solana payment use cases).
- **[#9101](https://github.com/zeroclaw-labs/zeroclaw/issues/9101)** — Single release-attestation story (~20 assets instead of 53); accepted and likely targeted for v0.8.4.
- **[#7130](https://github.com/zeroclaw-labs/zeroclaw/issues/7130)** — Workspace-wide `forbid(unsafe_code)` with `aardvark-sys` as sole carve-out (accepted, p2).
- **[#6808](https://github.com/zeroclaw-labs/zeroclaw/issues/6808)** — Work lanes/board automation/label cleanup (governance, rollout in progress), plus process RFCs [#9496](https://github.com/zeroclaw-labs/zeroclaw/issues/9496) (streamline RFC voting) and [#9530](https://github.com/zeroclaw-labs/zeroclaw/issues/9530) (risk precedence for test-only changes).

**Feature PRs to watch:** [#9809](https://github.com/zeroclaw-labs/zeroclaw/pull/9809) (multiple models per provider profile, size:XL), [#9182](https://github.com/zeroclaw-labs/zeroclaw/pull/9182) (PowerShell as native Windows shell, size:XL), [#9556](https://github.com/zeroclaw-labs/zeroclaw/pull/9556) (Langfuse observability backend), [#9571](https://github.com/zeroclaw-labs/zeroclaw/pull/9571) (WATI channel removal), and the Hindsight memory stack ([#9066](https://github.com/zeroclaw-labs/zeroclaw/pull/9066), [#9067](https://github.com/zeroclaw-labs/zeroclaw/pull/9067)) which is blocked on author action.

**Prediction for next release (likely 0.8.4/0.9.0):** security hardening will land first — webhook fail-closed (#9565 follow-ups), verifiable-intent fixes (#9866), attestation consolidation (#9101), WATI removal (#9571), and Windows `nul` handling (#9636). The per-model capability work (#7100/#9809) is the strongest feature candidate.

## 7. User Feedback Summary
- **Redaction false positives hurt real use cases.** A user running a Solana MCP server cannot state a wallet address in Telegram ([#9486](https://github.com/zeroclaw-labs/zeroclaw/issues/9486)); the RFC #9825 thread confirms payment-request URLs are "undeliverable." The detector works as designed — but the design is wrong for public identifiers.
- **Silent misconfiguration erodes trust.** SOPs silently never load when relying on the documented default ([#9779](https://github.com/zeroclaw-labs/zeroclaw/issues/9779)), and cron-triggered SOPs cannot actually perform network work despite docs presenting them as "watch-loops" ([#9780](https://github.com/zeroclaw-labs/zeroclaw/issues/9780)). Both are accepted bugs, signaling user frustration with doc-vs-runtime mismatches.
- **Operator-visible stuck states.** Typing indicators that run during approval waits ([#9656]) or stick permanently after dashboard reload ([#9198]) make blocked work look healthy or frozen — a UX pain point in two channels (Telegram and Discord).
- **Process friction is a top complaint.** The RFC author community (led by Audacity88) is pushing back on 7-day minimum discussion, unanimity requirements, and manual vote coordination ([#9496](https://github.com/zeroclaw-labs/zeroclaw/issues/9496)); the "Maintainer decision queue" tracker [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) exists precisely because decisions are backing up.
- **Satisfaction signals:** contributors are willing to open and maintain 24-revision RFCs and multi-part PR stacks (Hindsight memory 4/7 and 5/7), and maintainers are closing high-severity bugs quickly (8 visible bug closures in 24h). The `help wanted` labels on accepted p1 bugs (#8642, #9085) indicate a healthy, volunteer-driven fix pipeline.

## 8. Backlog Watch
- **[#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) — Maintainer decision queue:** The single most important process bottleneck. At least 10 open RFCs carry `needs-maintainer-review` and are waiting on ratifiers: [#6808](https://github.com/zeroclaw-labs/zeroclaw/issues/6808), [#7100](https://github.com/zeroclaw-labs/zeroclaw/issues/7100), [#9397](https://github.com/zeroclaw-labs/zeroclaw/issues/9397), [#6971](https://github.com/zeroclaw-labs/zeroclaw/issues/6971), [#9101](https://github.com/zeroclaw-labs/zeroclaw/issues/9101), [#7897](https://github.com/zeroclaw-labs/zeroclaw/issues/7897), [#9530](https://github.com/zeroclaw-labs/zeroclaw/issues/9530), [#9496](https://github.com/zeroclaw-labs/zeroclaw/issues/9496), [#9825](https://github.com/zeroclaw-labs/zeroclaw/issues/9825).
- **PRs stalled on `needs-author-action` (author-reply, not code review):** [#9182](https://github.com/zeroclaw-labs/zeroclaw/pull/9182) (PowerShell), [#9194](https://github.com/zeroclaw-labs/zeroclaw/pull/9194) (KeySource trait), [#9066](https://github.com/zeroclaw-labs/zeroclaw/pull/9066) and [#9067](https://github.com/zeroclaw-labs/zeroclaw/pull/9067) (Hindsight memory stacks 4/7 and 5/7), [#9556](https://github.com/zeroclaw-labs/zeroclaw/pull/9556) (Langfuse), [#9544](https://github.com/zeroclaw-labs/zeroclaw/pull/9544) (delegate provider fallbacks), [#9350](https://github.com/zeroclaw-labs/zeroclaw/pull/9350) (cron CLI delivery flags), [#8826](https://github.com/zeroclaw-labs/zeroclaw/pull/8826) (image_gen SSRF gate), [#9758](https://github.com/zeroclaw-labs/zeroclaw/pull/9758) and [#9561](https://github.com/zeroclaw-labs/zeroclaw/pull/9561). The Hindsight memory series and the PowerShell/KeySource XL PRs have been idle since **July 20** — these are at the highest risk of bit-rotting.
- **Accepted p1 bugs needing an implementer (`help wanted`):** [#8519](https://github.com/zeroclaw-labs/zeroclaw/issues/8519) (wasmtime-wasi CVEs, cargo-audit ignores), [#8642](https://github.com/zeroclaw-labs/zeroclaw/issues/8642) (MCP RSS growth), [#9085](https://github.com/zeroclaw-labs/zeroclaw/issues/9085) (pgvector startup panic), [#9284](https://github.com/zeroclaw-labs/zeroclaw/issues/9284) (config flush race). These are approved, scoped, and unassigned — prime `good first issue` / bounty candidates.
- **Long-running untriaged-at-maintainer-level item:** [#6971](https://github.com/zeroclaw-labs/zeroclaw/issues/6971) (security posture/ingress RFC) has been open since May 27 with 10 comments and still awaits maintainer review — its broad scope makes it the most likely candidate to be split into follow-ups, per its own RFC text.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/boom7sss/agents-radar).*