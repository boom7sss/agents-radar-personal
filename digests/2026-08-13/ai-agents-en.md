# OpenClaw Ecosystem Digest 2026-08-13

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-08-13 02:27 UTC

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

# OpenClaw Project Digest — 2026-08-13

## 1. Today's Overview

OpenClaw is in a high-intensity maintenance and feature-development phase as of 2026-08-13. In the last 24 hours, 500 issues and 500 PRs were updated; 403 issues remain open/active, 359 PRs remain open, and 97 issues plus 141 PRs were closed/merged. No new release was published. The dominant themes are session/message reliability — especially silent reply failures and lost subagent completions — plus multi-agent orchestration stability, auth-provider timeouts, and memory/state integrity. The project is clearly active, but the large number of P1 reliability issues and the 91-comment thread on recurring silent reply failures make delivery durability the biggest near-term health risk. Large in-flight features such as portals, realtime voice, and recovery snapshots show that roadmap work continues in parallel.

## 2. Releases

None. No new OpenClaw release was published in the last 24 hours, so there are no changelog entries, breaking changes, or migration notes to report.

## 3. Project Progress

Closed/merged PRs visible in the sampled top-30 PR list:

- [PR #122879 — fix(ci): prevent channel add command test timeout](https://github.com/openclaw/openclaw/pull/122879) — CI qualification fix for `channels add --use-env` timeouts.
- [PR #122912 — fix(parallels): preserve plugin inventory during updates](https://github.com/openclaw/openclaw/pull/122912) — fixes plugin inventory loss during Parallels npm-update matrix runs.
- [PR #122931 — docs(gateway): clarify dynamic operator scope rules](https://github.com/openclaw/openclaw/pull/122931) — documentation correction for gateway RPC scope.
- [PR #122924 — fix: code mode dead-ends on oversized tool results instead of returning bounded output](https://github.com/openclaw/openclaw/pull/122924) — important reliability fix for Code Mode oversized tool output handling.
- [PR #122921 — fix(ci): stop repeated cold dependency rebuilds](https://github.com/openclaw/openclaw/pull/122921) — CI infra fix reducing repeated dependency reinstall cost.

Several long-open issues also moved to closed/updated states, including:

- [Issue #39604 — Private network access opt-in for web_fetch](https://github.com/openclaw/openclaw/issues/39604) — closed as already fixed.
- [Issue #8299 — Config option to suppress sub-agent announce](https://github.com/openclaw/openclaw/issues/8299) — closed as already fixed.
- [Issue #42820 — Feishu file send pollution by poll schema](https://github.com/openclaw/openclaw/issues/42820) — closed as already fixed.
- [Issue #45031 — Built-in security scanning for skill installation](https://github.com/openclaw/openclaw/issues/45031) — closed in reviewed state.
- [Issue #65538 — Screen readers announce every streaming token](https://github.com/openclaw/openclaw/issues/65538) — closed as already fixed.

Notable in-flight PRs updated today include [PR #122536](https://github.com/openclaw/openclaw/pull/122536) (portals for exposing agent-run dev servers), [PR #122933](https://github.com/openclaw/openclaw/pull/122933) (staged `apply_patch` to avoid partial mutations), [PR #122764](https://github.com/openclaw/openclaw/pull/122764) (queue shared-capacity arbitration), and [PR #121894](https://github.com/openclaw/openclaw/pull/121894) (realtime output and consult ownership fix).

## 4. Community Hot Topics

The most active issues by comment count and reactions reveal strong user focus on reliability and trust:

| Item | Comments / Reactions | Signal |
|---|---|---|
| [Issue #121058 — Silent reply failures still recurring after #116277 closed](https://github.com/openclaw/openclaw/issues/121058) | 91 comments | Major reliability complaint: the same failure mode keeps occurring even after the previous fix was closed. |
| [Issue #7707 — Memory Trust Tagging by Source](https://github.com/openclaw/openclaw/issues/7707) | 45 comments | Long-running feature request around memory poisoning prevention; still needs maintainer/security review. |
| [Issue #44925 — Subagent completion silently lost](https://github.com/openclaw/openclaw/issues/44925) | 26 comments, 2 👍 | P1: subagent results disappear without retry, notification, or auto-restart. |
| [Issue #77598 — Track live dev agent behavior and trajectory](https://github.com/openclaw/openclaw/issues/77598) | 23 comments, 1 👍 | Maintainer observability thread; community interest in watching live agent behavior. |
| [Issue #39604 — Allow private network access for web_fetch](https://github.com/openclaw/openclaw/issues/39604) | 14 comments, 12 👍 | Closed as already fixed; strong user demand for opt-in private-network fetching. |
| [Issue #91363 — Isolated cron fails with "LLM request failed"](https://github.com/openclaw/openclaw/issues/91363) | 10 comments, 6 👍 | P1: cron model calls never reach the provider; high user impact. |

Underlying need: users want durable message/session state, delivery guarantees, memory provenance, and better observability of autonomous agent behavior. The highest-engagement threads are not cosmetic requests — they are about lost work and silent failures.

## 5. Bugs & Stability

Bugs and regressions active/updated in the last 24 hours, ranked roughly by severity:

| Severity | Issue | Summary | Fix Status |
|---|---|---|---|
| Critical | [Issue #121058](https://github.com/openclaw/openclaw/issues/121058) | Silent reply failures still recurring; no queued reply payload, even after #116277 was closed. | No fix PR visible in top list |
| P1 | [Issue #44925](https://github.com/openclaw/openclaw/issues/44925) | Subagent completion silently lost on timeout; no retry/notification/auto-restart. | No fix PR visible in top list |
| P1 | [Issue #43367](https://github.com/openclaw/openclaw/issues/43367) | Multi-agent orchestration unstable: config overwrites, session-lock failures, detached child work. | Linked PR open; maintainer/product review pending |
| P1 | [Issue #92433](https://github.com/openclaw/openclaw/issues/92433) | Subagent completion silently dropped when announce steers into a requester run that ends early. | No fix PR visible in top list |
| P1 | [Issue #67777](https://github.com/openclaw/openclaw/issues/67777) | Subagent completion delivery lost on direct-announce timeout, drain, or orphan prune. | No fix PR visible in top list |
| P1 | [Issue #91363](https://github.com/openclaw/openclaw/issues/91363) | Isolated cron consistently fails at model-call-started phase; provider never receives request. | No fix PR visible in top list |
| P1 | [Issue #97983](https://github.com/openclaw/openclaw/issues/97983) | iOS/WebChat messages append to transcript but do not trigger assistant replies. | No fix PR visible in top list |
| P1 | [Issue #89278](https://github.com/openclaw/openclaw/issues/89278) | Codex OAuth refresh succeeds but cron/heartbeat fails with 10s auth refresh timeout. | No fix PR visible in top list |
| P1 | [Issue #111498](https://github.com/openclaw/openclaw/issues/111498) | Main agent blocked by persistent workspace-state migration after Anthropic auth recovery. | No fix PR visible in top list |
| P1 | [Issue #72015](https://github.com/openclaw/openclaw/issues/72015) | active-memory plugin blocks replies; QMD boot initialization can overload gateways. | No fix PR visible in top list |
| P2 | [Issue #97616](https://github.com/openclaw/openclaw/issues/97616) | Unreaped hook/tool child processes cause zombie accumulation and degradation. | No fix PR visible in top list |
| P2 | [Issue #115001](https://github.com/openclaw/openclaw/issues/115001) | Hybrid memory search returns spurious 1.0 similarity scores via FTS fallback. | Linked PR open; maintainer/product review pending |

Related fixes in the current PR pipeline include [PR #122924](https://github.com/openclaw/openclaw/pull/122924) for oversized Code Mode tool results, [PR #122933](https://github.com/openclaw/openclaw/pull/122933) for atomic `apply_patch`, [PR #122764](https://github.com/openclaw/openclaw/pull/122764) for queue capacity arbitration, [PR #122919](https://github.com/openclaw/openclaw/pull/122919) for steer retry dead-ends, and [PR #120443](https://github.com/openclaw/openclaw/pull/120443) for Codex thread-binding compaction.

## 6. Feature Requests & Roadmap Signals

Strong feature signals visible in recent issues:

| Request | Issue | Signal |
|---|---|---|
| Memory trust tagging by source | [Issue #7707](https://github.com/openclaw/openclaw/issues/7707) | Long-lived, 45 comments; security/product review still pending |
| Self-hosted STT/TTS support in webchat | [Issue #45508](https://github.com/openclaw/openclaw/issues/45508) | Users want webchat voice routed through gateway TTS/STT config |
| Expose OpenRouter usage cost to agent runtime | [Issue #9016](https://github.com/openclaw/openclaw/issues/9016) | Open since Feb; per-message cost visibility |
| TTL/expiry for delivery queue messages | [Issue #16555](https://github.com/openclaw/openclaw/issues/16555) | Directly related to recurring delivery-queue stale/flooding problems |
| Built-in pace-aware rate limiting | [Issue #45771](https://github.com/openclaw/openclaw/issues/45771) | Autonomous loops exhaust provider rate limits |
| YAML config file support | [Issue #45758](https://github.com/openclaw/openclaw/issues/45758) | DevOps/readability request |
| Skill priority configuration | [Issue #50199](https://github.com/openclaw/openclaw/issues/50199) | Overlapping skills need deterministic selection |
| Sessions panel sort by last meaningful activity | [Issue #51028](https://github.com/openclaw/openclaw/issues/51028) | UX improvement; heartbeat noise displaces real sessions |
| Browser tool CSS selector support + 7 field-test fixes | [Issue #44431](https://github.com/openclaw/openclaw/issues/44431) | Real-world browser automation field report |

Prediction for next version: PR-level momentum suggests the next release is more likely to include queue reliability fixes ([#122764](https://github.com/openclaw/openclaw/pull/122764)), realtime Talk ownership fixes ([#121894](https://github.com/openclaw/openclaw/pull/121894)), and atomic patch handling ([#122933](https://github.com/openclaw/openclaw/pull/122933)). Larger roadmap items like portals ([#122536](https://github.com/openclaw/openclaw/pull/122536)) and recovery snapshots ([#112865](https://github.com/openclaw/openclaw/pull/112865), [#112896](https://github.com/openclaw/openclaw/pull/112896)) may land once review clears.

## 7. User Feedback Summary

Users are most frustrated by silent failure modes: messages and subagent results disappear without retry, notification, or recovery paths. This is especially painful in production channels like Telegram forum mode, Discord DMs, WhatsApp, and iOS/WebChat. There is also visible dissatisfaction with regressions that reappear after supposedly being fixed — [Issue #121058](https://github.com/openclaw/openclaw/issues/121058), [Issue #89278](https://github.com/openclaw/openclaw/issues/89278), [Issue #77733](https://github.com/openclaw/openclaw/issues/77733), and [Issue #43747](https://github.com/openclaw/openclaw/issues/43747) all describe behaviors that worked before and then broke again.

On the positive side, users respond strongly to accepted fixes. [Issue #39604](https://github.com/openclaw/openclaw/issues/39604) (private network web_fetch opt-in) received 12 👍, and closed items like [Issue #8299](https://github.com/openclaw/openclaw/issues/8299) (suppress sub-agent announce) and [Issue #33413](https://github.com/openclaw/openclaw/issues/33413) (Slack tool-level progress) show that usability improvements are being noticed.

## 8. Backlog Watch

Items that have been open the longest or are most blocked and still need maintainer attention:

- [Issue #7707 — Memory Trust Tagging by Source](https://github.com/openclaw/openclaw/issues/7707) — opened 2026-02-03; 45 comments; needs maintainer, product, and security review.
- [Issue #9016 — Expose OpenRouter usage cost to agent runtime](https://github.com/openclaw/openclaw/issues/9016) — opened 2026-02-04; needs product decision.
- [Issue #16555 — TTL/expiry for delivery queue messages](https://github.com/openclaw/openclaw/issues/16555) — opened 2026-02-14; directly relevant to current delivery reliability issues.
- [Issue #43367 — Multi-agent orchestration is unstable](https://github.com/openclaw/openclaw/issues/43367) — opened 2026-03-11; P1; linked PR open but still needs maintainer review.
- [Issue #44431 — Browser tool: 7 improvements from real-world automation field test](https://github.com/openclaw/openclaw/issues/44431) — opened 2026-03-12; needs maintainer/product decision.
- [Issue #44925 — Subagent completion silently lost](https://github.com/openclaw/openclaw/issues/44925) — opened 2026-03-13; P1; no new fix PR visible.
- [Issue #45508 — Self-hosted STT/TTS provider support in webchat](https://github.com/openclaw/openclaw/issues/45508) — opened 2026-03-13; needs maintainer/product decision.
- [Issue #45771 — Built-in pace-aware rate limiting](https://github.com/openclaw/openclaw/issues/45771) — opened 2026-03-14; needs maintainer/product decision.

Backlog PRs of note:
- [PR #102261 — Interactive parity with the Codex runtime](https://github.com/openclaw/openclaw/pull/102261) — P1, open since 2026-07-08, still in "needs proof" state.
- [PR #119001 — Bind native realtime voice to existing sessions](https://github.com/openclaw/openclaw/pull/119001) — large cross-platform PR, still in "needs proof" state.

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report — Personal AI Assistant / Agent Ecosystem
**Date:** 2026-08-13 | **Data window:** Last 24h ending 2026-08-13

---

## 1. Ecosystem Overview

The open-source personal AI assistant landscape in this window consists of 13 tracked projects, of which 9 show activity and 4 are dormant. The ecosystem is dominated by reliability work rather than new features: silent reply failures, lost subagent completions, session-state corruption, and channel-adapter bugs (especially Telegram and Windows desktop) consume the largest share of maintainer attention across projects. Security hardening has become a second major workstream — workspace-boundary enforcement, credential handling, and plugin permission models appear in nearly every active project. No stable releases shipped in the window; the only releases were IronClaw's `v1.2.0-rc.2/rc.3` and CoPaw's `v2.1.0-beta.4`, signaling pre-release hardening across the ecosystem. Overall, the field is iterating rapidly but has not yet converged on a reliability baseline.

---

## 2. Activity Comparison

*Health score is an analyst composite of maintainer responsiveness, open-bug severity, release cadence, and activity trend (1–10).*

| Project | Issues Updated | PRs Updated | Releases (24h) | Health Score | Notable Signal |
|---|---|---|---|---|---|
| OpenClaw | 500 | 500 | None | 6.0 | Massive volume; 400+ open issues; recurring P1 silent-failure bugs |
| ZeroClaw | 50 | 50 | None | 7.0 | Steady fixes; blocked by RUSTSEC advisory + S1 bugs |
| Hermes Agent | 50 | 50 | None | 7.0 | Strong plugin-feature delivery; P1 Windows gateway deaths open |
| IronClaw | 41 | 50 | v1.2.0-rc.2, rc.3 | 7.0 | Active RC iteration; Telegram QA-bug cluster |
| CoPaw (QwenPaw) | 31 | 43 | v2.1.0-beta.4 | 7.0 | Beta shipped; multi-agent dead-loop and memory issues open |
| NanoBot | 8 | 36 | None | 8.0 | Highest responsiveness; security fixes closed within window |
| NanoClaw | 4 | 10 | None | 6.0 | One fix merged (WhatsApp); plugin-architecture train in motion |
| LobsterAI | 6 | 8 | None | 6.0 | Release 2026.8.12 in prep; old trust/stability issues unresolved |
| PicoClaw | 3 | 3 | None | 4.0 | Minimal activity; stale high-severity bugs; unanswered PRs |
| NullClaw | 0 | 0 | None | N/A | No activity |
| TinyClaw | 0 | 0 | None | N/A | No activity |
| Moltis | 0 | 0 | None | N/A | No activity |
| ZeptoClaw | 0 | 0 | None | N/A | No activity |

**Volume vs. health note:** OpenClaw's raw activity is ~10× the next-busiest project, but its health score is dragged down by a 91-comment thread on recurring silent reply failures, 11+ visible P1 bugs without fix PRs, and regressions reappearing after being closed as fixed.

---

## 3. OpenClaw's Position

**Advantages vs. peers:**
- **Ecosystem gravity:** OpenClaw is the reference implementation. LobsterAI ships OpenClaw-specific fixes, and the "-Claw" lineage (PicoClaw, NanoClaw, ZeroClaw, NullClaw) indicates architecture/fork influence. Its 500-issue/500-PR daily throughput is unmatched.
- **Breadth:** Broadest channel-adapter surface (Telegram, Discord, WhatsApp, Feishu, iOS/WebChat, Slack) and a mature gateway/plugin architecture — the closest thing to a general-purpose platform.
- **Community size:** 403 open issues + 359 open PRs imply a large distributed contributor base; peers operate at 30–100 open items. Feature pull (portals, realtime voice, recovery snapshots) continues even during reliability work.

**Technical approach differences:**
- OpenClaw uses a gateway-centric model with subagent orchestration, delivery queues, and per-channel adapters. Peers diverge: Hermes emphasizes a plugin-extension API; CoPaw is a desktop-native app with memory-sync pipeline; ZeroClaw targets TUI/coding workflows with WASM plugins; NanoBot is a security-hardened Python service.
- OpenClaw's main weakness is that its own scale creates regression risk — multiple issues describe behaviors that previously worked and broke again (e.g., #121058, #89278), an pattern peers with smaller surfaces have largely avoided.

**Community size comparison:** Order-of-magnitude larger than any peer. The nearest activity level (ZeroClaw, Hermes at 50/50) is 10% of OpenClaw's volume; the smallest active projects (PicoClaw, NanoClaw) are at ~1%.

---

## 4. Shared Technical Focus Areas

| Focus Area | Projects | Specific Needs |
|---|---|---|
| **Delivery guarantees / anti-silent-failure** | OpenClaw, IronClaw, ZeroClaw, CoPaw | Queued reply payloads, retry/notification on lost subagent completions, TTL for delivery queues, no dropped cron output, no "agent plans then stops" behavior |
| **Memory integrity & provenance** | OpenClaw, CoPaw, ZeroClaw, NanoClaw | Source-trusted memory tags, memory pipeline matching documented paths, schema-validated consolidation, routed-agent history/compression correctness |
| **Multi-agent orchestration stability** | OpenClaw, CoPaw, PicoClaw, IronClaw | Subagent completion delivery, session identity preservation, avoiding duplicate shadow sessions/dead loops, parallel batch execution |
| **Security & workspace boundaries** | NanoBot, ZeroClaw, CoPaw, Hermes, OpenClaw | Exec-tool path escaping, credential-bearing URL redaction, screenshot path validation, plugin cron injection, capability consent, skill-install scanning |
| **Channel-adapter parity** | IronClaw, PicoClaw, NanoClaw, NanoBot, ZeroClaw, Hermes | Telegram GIF/sticker stuck sessions and linked-device auth; Matrix thread context; Signal DM first-message drops; WhatsApp false delivery; Discord typing indicators; Windows gateway silent deaths |
| **Model/provider extensibility** | NanoBot, IronClaw, CoPaw, PicoClaw, NanoClaw, OpenClaw | DeepSeek V4 Pro, QwenCloud, Exa search, per-request model overrides, cost visibility, pace-aware rate limiting |
| **Observability & governance** | OpenClaw, ZeroClaw, NanoClaw, Hermes | Live agent-trajectory tracking, `status` commands, RFC decision queues, streaming observer hooks, stress coverage for write paths |

**Cross-cutting requirement:** Users across all active projects treat silent data loss as the most unacceptable failure mode, and treat security boundaries (memory, credentials, workspace) as trust requirements, not optional hardening.

---

## 5. Differentiation Analysis

| Project | Primary Differentiator | Target Users | Architecture Orientation |
|---|---|---|---|
| **OpenClaw** | Largest ecosystem; broadest channel + plugin surface | Self-hosters, power users, channel-heavy deployments | Gateway + subagent orchestration |
| **NanoBot** | Security-first hardening; workspace isolation | Python developers, security-conscious operators | Lightweight Python service |
| **Hermes Agent** | Mature plugin API (hooks, manifests, consent) | Plugin developers, desktop gateway users | Gateway + plugin expansion |
| **IronClaw** | Release discipline (RC pipeline); NEAR/cloud integration | NEAR ecosystem, cloud.near.ai users | Channel + cloud product |
| **CoPaw (QwenPaw)** | Desktop-native UX; memory pipeline; computer-use | Desktop productivity users | Desktop app + agent runtime |
| **ZeroClaw** | ZeroCode TUI; WASM plugins; governance processes | Developer-first TUI/coding workflows | TUI + coding agent |
| **NanoClaw** | Agent Plugins 1.0.0 standardization | Template/plugin-oriented operators | Agent/plugin scaffolding |
| **LobsterAI** | OpenClaw desktop integration; Chinese-market UI | Chinese-market desktop users | Desktop client |
| **PicoClaw** | Lightweight; Telegram topics; Sipeed ecosystem | Embedded/lightweight hardware users | Lightweight agent runtime |

The ecosystem bifurcates into **general-purpose platforms** (OpenClaw, Hermes) competing on ecosystem breadth, and **niche-optimized agents** (CoPaw on desktop, ZeroClaw on coding TUI, IronClaw on channel-first cloud, NanoBot on security) competing on vertical fit. OpenClaw's positioning is the default generalist, but its reliability debt creates an opening for peers to differentiate on trust.

---

## 6. Community Momentum & Maturity

**Tier 1 — Hyperactive (10× baseline):** OpenClaw — massive throughput, but regression-prone; maintainers are keeping pace with volume but P1 reliability debt persists.

**Tier 2 — High activity (50/50 range):** ZeroClaw, Hermes, IronClaw, CoPaw — all shipping or preparing releases, with active QA cycles and feature work. IronClaw is in the most disciplined release-validation phase (two RCs in 24h); CoPaw is iterating fastest on UI and memory; ZeroClaw is steadily closing fixes but carries security-advisory and Windows-parity debt.

**Tier 3 — Moderate activity:** NanoBot is the most **responsive** project per-issue (security fixes closed within the same window), indicating a healthy stabilization phase. LobsterAI and NanoClaw are actively developing but carry older unresolved user issues. PicoClaw shows signs of a maintenance bottleneck — stale high-severity bugs with no linked fixes and unanswered PRs.

**Tier 4 — Dormant:** NullClaw, TinyClaw, Moltis, ZeptoClaw — no activity in 24h; likely stalled or seasonal.

**Overall:** Rapid iteration dominates; only NanoBot shows true stabilization characteristics (high closure rate, low open-bug count). The ecosystem is not yet mature — no project shipped a stable release in the window, and the most common state is "feature-heavy with reliability debt."

---

## 7. Trend Signals

1. **Delivery guarantees are the new baseline expectation.** Users across OpenClaw (91-comment silent-failure thread), IronClaw (Telegram lost/split messages), ZeroClaw (cron output silently discarded), and CoPaw ("agent stops, requires manual continue") treat silent failures as product-breaking. **Value:** any agent framework must build retry, notification, and recovery paths as first-class primitives — not post-hoc patches.

2. **Security is a competitive differentiator, not a checkbox.** NanoBot closed workspace-escape and credential-leak fixes in the same window; ZeroClaw closed an arbitrary file-write escape; CoPaw has an open plugin-cron-injection vulnerability; Hermes closed an SSH approval bypass. **Value:** invest in workspace isolation, credential redaction, and capability consent early; trust is the moat.

3. **Memory is shifting from storage to provenance.** OpenClaw's memory-trust-tagging request (45 comments), CoPaw's realization that the "Dream" pipeline writes to the wrong path, and ZeroClaw's schema-validated consolidation all point to a requirement: memory must be source-traceable and validated. **Value:** design memory with source metadata and validation schemas from the start.

4. **Multi-agent orchestration has a reliability gap.** Lost subagent completions (OpenClaw), duplicate shadow sessions (CoPaw), routed-agent context loss (PicoClaw), and serial batch execution (IronClaw) indicate orchestration is where the next round of agent-quality competition will happen. **Value:** solve subagent delivery, session identity, and parallel execution before scaling agent counts.

5. **Per-call model/effort control is the next UX feature.** IronClaw's per-user model preferences, PicoClaw's dynamic model override request, CoPaw's per-session overrides, and OpenClaw's cost-visibility request converge on one need: runtime control over model choice, cost, and reasoning effort. **Value:** expose model selection and effort as first-class API parameters.

6. **Windows/desktop is an under-invested battlefront.** Hermes (gateway dies after update), ZeroClaw (74 Windows test failures, installer crash), IronClaw (Windows first-start fixes), and LobsterAI (Windows plugin installs) all report P1-class Windows issues. **Value:** CI parity on Windows/macOS and desktop lifecycle handling are low-competition areas where quality wins users.

7. **Plugin ecosystems need governance.** Hermes is building the most complete model (hooks, manifests, consent, lifecycle); OpenClaw has skill-install scanning; NanoClaw is standardizing Agent Plugins 1.0.0; CoPaw has an unaddressed plugin-cron-injection hole. **Value:** manifest versioning, capability consent, and sandboxing are quickly becoming table stakes for plugin adoption.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-08-13

## 1. Today's Overview

NanoBot shows very high activity in the last 24 hours: 8 issues were updated (4 open, 4 closed) and 36 PRs were updated (19 open, 17 merged/closed). No new releases were published in this window. The project is currently dominated by security hardening, workspace-boundary fixes, provider/channel compatibility work, and WebUI/session improvements. Maintainers appear highly responsive: several priority-1 security and stability fixes were closed within the same update window.

## 2. Releases

No new releases were published in the last 24 hours.

## 3. Project Progress

Merged/closed PRs updated in the last 24 hours include several high-impact fixes and feature additions:

- **DeepSeek V4 Pro Responses support** — [#5362](https://github.com/HKUDS/nanobot/pull/5362)  
  Adds `deepseek-v4-pro` to DeepSeek's native Responses API, alongside existing `deepseek-v4-flash` support.

- **ExecTool workspace-boundary hardening** — [#5329](https://github.com/HKUDS/nanobot/pull/5329)  
  Fixes tilde expansion bypasses for bare `~`, `~/...`, named-user `~user` paths, and redirection inputs.

- **Credential-bearing URLs kept away from Jina reader** — [#5258](https://github.com/HKUDS/nanobot/pull/5258)  
  Closes the privacy issue where complete user URLs, including credentials, could be forwarded to `r.jina.ai`.

- **Docker privilege-drop fix** — [#5320](https://github.com/HKUDS/nanobot/pull/5320)  
  Restores only the capabilities required by the bootstrap path while retaining `cap_drop: ALL` and enabling `no-new-privileges`.

- **ExecTool redirection/grouping delimiter guard** — [#5218](https://github.com/HKUDS/nanobot/pull/5218)  
  Improves path extraction so workspace-restricted execution cannot be bypassed via shell operators.

- **Session history moved outside agent workspace** — [#5279](https://github.com/HKUDS/nanobot/pull/5279)  
  Stores session transcripts under `<config-dir>/sessions/<workspace-id>/` instead of inside the tool-visible workspace.

- **Gemini imported tool-call signature fallback** — [#5230](https://github.com/HKUDS/nanobot/pull/5230)  
  Preserves Gemini tool-call signatures when conversations are imported from providers that do not produce them.

- **Agent hooks auto-discovery** — [#4878](https://github.com/HKUDS/nanobot/pull/4878)  
  Adds `pkgutil` scanning and entry-point-based hook registration, matching the existing channel/tool plugin pattern.

## 4. Community Hot Topics

The most-discussed issues in the last 24 hours:

- **[#5327 — Nanobot repeats the same message while reasoning](https://github.com/HKUDS/nanobot/issues/5327)** — 11 comments, now closed.  
  Users report randomly duplicated reasoning phrases. This indicates reliability expectations around agent output and reasoning trace quality.

- **[#5295 — Docker Compose entrypoint permission denied](https://github.com/HKUDS/nanobot/issues/5295)** — 5 comments, closed.  
  Deployment friction with `cannot open /usr/local/bin/entrypoint.sh: Permission denied`; fixed through Docker capability handling.

- **[#4010 — Text-to-speech / voice output support](https://github.com/HKUDS/nanobot/issues/4010)** — 3 comments, 3 👍, still open.  
  Community interest in closing the voice-input loop with voice output, especially on channels that natively support voice notes.

- **[#4858 — Refactor MCP lifecycle out of AgentLoop](https://github.com/HKUDS/nanobot/issues/4858)** — 2 comments, closed.  
  Maintainer-driven architectural cleanup to stop leaking tool-specific provider lifecycle into the core agent loop.

Underlying needs: users want deterministic agent behavior, simpler deployment, richer channel/voice UX, and a maintainable core architecture that keeps provider-specific logic separate.

## 5. Bugs & Stability

Bugs and stability issues active in the last 24 hours, ranked by severity:

- **Security / privacy**
  - [#4884 — WebFetch sends complete user URLs to Jina](https://github.com/HKUDS/nanobot/issues/4884) — closed, fixed by [#5258](https://github.com/HKUDS/nanobot/pull/5258).
  - ExecTool workspace boundary bypasses fixed in [#5329](https://github.com/HKUDS/nanobot/pull/5329) and [#5218](https://github.com/HKUDS/nanobot/pull/5218).

- **Session data integrity**
  - [#5271 — Stale background task saves overwrite session data](https://github.com/HKUDS/nanobot/pull/5271) — **priority p0, still open**, with conflict label. Needs maintainer attention.
  - [#5279 — Session history inside agent workspace](https://github.com/HKUDS/nanobot/pull/5279) — closed, removes transcripts from tool-visible paths.

- **Deployment stability**
  - [#5295 — Docker Compose entrypoint permission denied](https://github.com/HKUDS/nanobot/issues/5295) — closed.
  - [#5320 — Docker capabilities for privilege drop](https://github.com/HKUDS/nanobot/pull/5320) — closed.

- **Core agent behavior**
  - [#5327 — Repeated messages while reasoning](https://github.com/HKUDS/nanobot/issues/5327) — closed.

- **Channel behavior**
  - [#5275 — Matrix "reply in thread" should create dedicated context](https://github.com/HKUDS/nanobot/issues/5275) — open, with related fix PR [#5292](https://github.com/HKUDS/nanobot/pull/5292).

- **Test flakiness**
  - [#5348 — Token-usage settings tests fail in timezone-window](https://github.com/HKUDS/nanobot/issues/5348) — open, no fix PR yet.

## 6. Feature Requests & Roadmap Signals

Notable feature-oriented issues and PRs:

- **Voice output support** — [#4010](https://github.com/HKUDS/nanobot/issues/4010)  
  Open request with community 👍; logical next step after existing voice-input support.

- **Backward-compatible QwenCloud provider path** — [#5350](https://github.com/HKUDS/nanobot/issues/5350)  
  New proposal to add QwenCloud support without breaking existing DashScope configurations.

- **WebUI session collaboration via mentions** — [#5358](https://github.com/HKUDS/nanobot/pull/5358)  
  Open PR adding stable server-owned `@name` identities for sessions and peer-session selection.

- **WebUI setup flow improvements across chat channels** — [#5356](https://github.com/HKUDS/nanobot/pull/5356)  
  Open PR organizing channel configuration fields and making unconfigured channels actionable.

- **Matrix thread context parity** — [#5275](https://github.com/HKUDS/nanobot/issues/5275)  
  Requests thread behavior matching Discord/Slack; fix PR [#5292](https://github.com/HKUDS/nanobot/pull/5292) is open.

- **Apps discovery redesign** — [#5342](https://github.com/HKUDS/nanobot/pull/5342)  
  Open PR redesigning the WebUI around Discover/Installed/All apps and curated registries.

- **Native TypeScript terminal UI** — [#4329](https://github.com/HKUDS/nanobot/pull/4329)  
  Long-running open PR rebuilding `nanobot agent` as a TypeScript/OpenTUI client.

Likely next-version signals: DeepSeek V4 Pro Responses is already closed/merged, WebUI collaboration and setup flows are actively moving, and MCP/session safety fixes continue to land. Voice output remains a possible roadmap item but has less contributor traction than WebUI/provider work.

## 7. User Feedback Summary

Real user pain points visible in this window:

- **Duplicate reasoning output** ([#5327](https://github.com/HKUDS/nanobot/issues/5327)) erodes trust in agent behavior, even when random.
- **Docker deployment failure** ([#5295](https://github.com/HKUDS/nanobot/issues/5295)) shows that deployment documentation alone is not enough; runtime permissions must match the documented path.
- **Privacy concerns around remote URL rendering** ([#4884](https://github.com/HKUDS/nanobot/issues/4884)) show users are watching where their data is sent.
- **Matrix users expect thread-aware conversations** ([#5275](https://github.com/HKUDS/nanobot/issues/5275)), especially when the UI offers "reply in thread".
- **Voice-output users want a complete conversational loop** ([#4010](https://github.com/HKUDS/nanobot/issues/4010)), not just voice input.

Overall sentiment: the community is actively filing detailed, reproducible issues, and maintainers are responding quickly — especially on security and workspace-isolation fixes.

## 8. Backlog Watch

Issues/PRs that appear to need maintainer attention or a decision:

- **[#4010 — Text-to-speech / voice output support](https://github.com/HKUDS/nanobot/issues/4010)**  
  Open since May 26, 3 👍, low comment count. Needs product/roadmap decision.

- **[#4329 — Native TypeScript terminal UI](https://github.com/HKUDS/nanobot/pull/4329)**  
  Open since June 13, large architectural surface, conflict label. Needs review/rebase or explicit deferral.

- **[#5204 — Refactor Responses capabilities declaration](https://github.com/HKUDS/nanobot/pull/5204)**  
  Priority p1 provider refactor, open since August 1, conflict label.

- **[#5271 — Prevent stale background saves from overwriting sessions](https://github.com/HKUDS/nanobot/pull/5271)**  
  Priority p0 session-data-loss fix, open since August 6, conflict label.

- **[#5292 — Matrix reply to room-level user event](https://github.com/HKUDS/nanobot/pull/5292)**  
  Directly addresses open Matrix threading issue [#5275](https://github.com/HKUDS/nanobot/issues/5275); still open.

- **[#5338 — Preserve MCP credentials when OAuth store read fails](https://github.com/HKUDS/nanobot/pull/5338)**  
  Draft PR, open since August 11, credential-safety sensitive, needs review.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-08-13

## 1. Today's Overview
Hermes Agent is highly active: 50 issues and 50 PRs were updated in the last 24 hours, with 13 issues closed and 16 PRs merged/closed. No new releases were published. The main work streams are the long-running plugin-interface expansion ([#64182](https://github.com/NousResearch/hermes-agent/issues/64182)), the Webhook Revolution campaign ([#84834](https://github.com/NousResearch/hermes-agent/issues/84834)), and a cluster of Windows desktop/gateway reliability bugs. Overall project health is mixed: strong feature delivery and observability work are happening, but several P1 Windows/gateway regressions remain open.

## 2. Releases
No new releases in the last 24 hours.

## 3. Project Progress
Notable merged/closed PRs updated in the last 24 hours:
- [#84974](https://github.com/NousResearch/hermes-agent/pull/84974) — `fmt(js): npm run fix` auto-fix (closed by bot).
- [#65077](https://github.com/NousResearch/hermes-agent/pull/65077) — Plugin-visible gateway token stream hooks (`on_stream_delta/segment/end`), closed.
- [#83517](https://github.com/NousResearch/hermes-agent/pull/83517) — Approval decisions now exported with session identity and turn-scoped marks, closed.
- [#83514](https://github.com/NousResearch/hermes-agent/pull/83514) — Bound native scope lifecycle ops so a wedged observability pipeline cannot block delegated agents, closed.

Closed issues also point to landed plugin-interface work: streaming LLM observer hooks ([#64161](https://github.com/NousResearch/hermes-agent/issues/64161)), plugin search ([#64181](https://github.com/NousResearch/hermes-agent/issues/64181)), STT request hooks ([#64168](https://github.com/NousResearch/hermes-agent/issues/64168)), inter-plugin event bus ([#64164](https://github.com/NousResearch/hermes-agent/issues/64164)), manifest v2 ([#64165](https://github.com/NousResearch/hermes-agent/issues/64165)), redaction-pattern registry ([#65449](https://github.com/NousResearch/hermes-agent/issues/65449)), capability consent ([#64228](https://github.com/NousResearch/hermes-agent/issues/64228)), plugin lifecycle ([#64229](https://github.com/NousResearch/hermes-agent/issues/64229)), custom `@context` references ([#26193](https://github.com/NousResearch/hermes-agent/issues/26193)), and desktop workspace switching ([#42525](https://github.com/NousResearch/hermes-agent/issues/42525)).

Open PRs actively advancing the roadmap:
- [#84979](https://github.com/NousResearch/hermes-agent/pull/84979) — Plugin hook delivery parity across dashboards/TUI/cron/query mode.
- [#84978](https://github.com/NousResearch/hermes-agent/pull/84978) — Canonical webhook route model and profile-aware store.
- [#84975](https://github.com/NousResearch/hermes-agent/pull/84975) — Plugin updates autostash local changes.
- [#84808](https://github.com/NousResearch/hermes-agent/pull/84808) — Prevent stale todos from surviving compression.
- [#84931](https://github.com/NousResearch/hermes-agent/pull/84931) — Preserve MCP tool attempt identity across retries.
- [#84468](https://github.com/NousResearch/hermes-agent/pull/84468) — Make `POST /v1/runs` idempotent.
- [#84890](https://github.com/NousResearch/hermes-agent/pull/84890) — Codex CLI support through `hermes proxy`.

## 4. Community Hot Topics
- [#64182](https://github.com/NousResearch/hermes-agent/issues/64182) — Plugin Interface Expansion tracking issue, 33 comments. Largest community planning thread; plugin authors want stable hooks, lifecycle, manifests, and trust/consent surfaces.
- [#66616](https://github.com/NousResearch/hermes-agent/issues/66616) — Skills index stale/degraded, 19 comments. Docs automation freshness is a recurring operational concern.
- [#83683](https://github.com/NousResearch/hermes-agent/issues/83683) — Desktop restart kills live gateway and never relaunches, 10 comments. High-impact Windows messaging outage.
- [#39043](https://github.com/NousResearch/hermes-agent/issues/39043) — Signal adapter native quote/reply/edit/delete/read-receipts, 7 comments, 3 👍.
- [#84834](https://github.com/NousResearch/hermes-agent/issues/84834) — Webhook Revolution meta-issue, 6 comments. Broad community-driven repair campaign.
- [#84185](https://github.com/NousResearch/hermes-agent/issues/84185) — Windows gateway dies silently after `hermes update`, 6 comments.
- [#45779](https://github.com/NousResearch/hermes-agent/issues/45779) — Multi-gateway connections with per-gateway Desktop tabs, 6 comments, 7 👍. The most-reacted open feature request.

Underlying needs: a mature plugin ecosystem, reliable Windows desktop/gateway lifecycle handling, multi-platform messaging parity, and better Desktop workspace/session controls.

## 5. Bugs & Stability
Ranked by severity:

**P1**
- [#83683](https://github.com/NousResearch/hermes-agent/issues/83683) — Desktop restart force-kills the live gateway and never relaunches; WeChat/QQ/Telegram go silent. No fix PR in the current batch.
- [#84185](https://github.com/NousResearch/hermes-agent/issues/84185) — Windows gateway cold-started after `hermes update` dies silently, with no logs/PID file. No fix PR in the current batch.
- [#53479](https://github.com/NousResearch/hermes-agent/issues/53479) — CLI updater still trusts `rev-list` counts for shallow/diverged installs. No fix PR in the current batch.

**P2**
- [#38193](https://github.com/NousResearch/hermes-agent/issues/38193) — OAuth-backed MCP server permanently deadlocks after keepalive reconnect.
- [#81051](https://github.com/NousResearch/hermes-agent/issues/81051) — OAuth MCP connections get permanently “parked” after a teardown lock race.
- [#49543](https://github.com/NousResearch/hermes-agent/issues/49543) — OAuth MCP servers drop mid-session with `RuntimeError: The current task is not holding this lock`.
- [#77505](https://github.com/NousResearch/hermes-agent/issues/77505) — Severe scroll jitter in VirtualSessionList persists after memoization.
- [#83427](https://github.com/NousResearch/hermes-agent/issues/83427) — `browser_exec` crashes with `pydantic_core ModuleNotFoundError` when `PYTHONPATH` points at the Hermes venv.
- [#84206](https://github.com/NousResearch/hermes-agent/issues/84206) — `@file:` expansion assumes UTF-8 and fails on locale-encoded files like GBK/Shift_JIS.
- [#83390](https://github.com/NousResearch/hermes-agent/issues/83390) — Auxiliary title generation fails on DeepSeek with HTTP 400 `response_format unavailable`.

**P3**
- [#66616](https://github.com/NousResearch/hermes-agent/issues/66616) — Skills index is stale/degraded; index is 29.8h old against a 26h limit.

Closed bug: [#81039](https://github.com/NousResearch/hermes-agent/issues/81039) — Windows console windows flash on every subprocess spawn.

Fixes in flight: [#84674](https://github.com/NousResearch/hermes-agent/pull/84674) closes an SSH `authorized_keys` approval bypass; [#84808](https://github.com/NousResearch/hermes-agent/pull/84808) fixes stale todos after compression; [#84931](https://github.com/NousResearch/hermes-agent/pull/84931) preserves MCP tool attempt IDs; [#84977](https://github.com/NousResearch/hermes-agent/pull/84977) handles `postData: null` in HAR entries; [#84468](https://github.com/NousResearch/hermes-agent/pull/84468) makes run starts idempotent.

## 6. Feature Requests & Roadmap Signals
- **Plugin ecosystem** is the clearest near-term roadmap. The tracking issue ([#64182](https://github.com/NousResearch/hermes-agent/issues/64182)) plus the number of closed plugin sub-issues suggests a large plugin API batch is landing. Likely next-version items: streaming hooks, event bus, manifest v2, lifecycle, capability consent, plugin search, redaction registry, and custom `@context` extensions.
- **Webhook Revolution** ([#84834](https://github.com/NousResearch/hermes-agent/issues/84834)) is progressing via PR [#84978](https://github.com/NousResearch/hermes-agent/pull/84978), which adds a canonical route model and profile-aware store.
- **Discord parity campaign** ([#79564](https://github.com/NousResearch/hermes-agent/issues/79564)) is a large meta-issue covering API v10 alignment; likely to produce focused adapter PRs.
- **Desktop features:** multi-gateway tabs ([#45779](https://github.com/NousResearch/hermes-agent/issues/45779)) and `display.autolink_urls` ([#84921](https://github.com/NousResearch/hermes-agent/issues/84921)) are active user requests. Multi-gateway tabs has strong reaction support and may be scheduled after current Desktop stability fixes.
- **Other roadmap signals:** Codex CLI proxy support ([#84890](https://github.com/NousResearch/hermes-agent/pull/84890)), persistent Docker containers for trusted profiles ([#84775](https://github.com/NousResearch/hermes-agent/pull/84775)), deferred tool composition inside `execute_code` ([#82243](https://github.com/NousResearch/hermes-agent/pull/82243)), and the Claude Agent SDK provider ([#65982](https://github.com/NousResearch/hermes-agent/pull/65982)).

## 7. User Feedback Summary
- **Windows reliability is the strongest pain point:** users report gateways going “completely silent” after a Desktop restart ([#83683](https://github.com/NousResearch/hermes-agent/issues/83683)) and cold-started gateways dying “immediately and silently” after update ([#84185](https://github.com/NousResearch/hermes-agent/issues/84185)).
- **Plugin developers are motivated but need decisions:** many plugin-interface PRs/issues were closed, but the tracking issue ([#64182](https://github.com/NousResearch/hermes-agent/issues/64182)) still needs scope confirmation.
- **OAuth-MCP users face severe operational pain:** permanent deadlocks, parked connections, and mid-session tool drops require full gateway restarts ([#38193](https://github.com/NousResearch/hermes-agent/issues/38193), [#81051](https://github.com/NousResearch/hermes-agent/issues/81051), [#49543](https://github.com/NousResearch/hermes-agent/issues/49543)).
- **Desktop UX feedback is mixed:** users acknowledge performance work but still see scroll jitter ([#77505](https://github.com/NousResearch/hermes-agent/issues/77505)), want multi-gateway tabs ([#45779](https://github.com/NousResearch/hermes-agent/issues/45779)), and want control over URL autolinking ([#84921](https://github.com/NousResearch/hermes-agent/issues/84921)).
- **Positive signal:** several high-reaction feature requests were closed recently, including desktop workspace switching ([#42525](https://github.com/NousResearch/hermes-agent/issues/42525)) and multiple plugin-interface items, indicating maintainer responsiveness.

## 8. Backlog Watch
Important open items that have been waiting for maintainer attention:
- [#39043](https://github.com/NousResearch/hermes-agent/issues/39043) — Signal adapter native quote/reply/edit/remote-delete/read-receipts. Open since 2026-06-04, `needs-decision`, 3 👍.
- [#38193](https://github.com/NousResearch/hermes-agent/issues/38193) — OAuth MCP deadlock after keepalive reconnect. Open since 2026-06-03, P2, no merged fix.
- [#49543](https://github.com/NousResearch/hermes-agent/issues/49543) — OAuth MCP tools drop mid-session. Open since 2026-06-20, P2.
- [#53479](https://github.com/NousResearch/hermes-agent/issues/53479) — CLI updater rev-list bug on shallow/diverged installs. Open since 2026-06-27, P1.
- [#45779](https://github.com/NousResearch/hermes-agent/issues/45779) — Multi-gateway Desktop tabs. Open since 2026-06-13, 7 👍, no maintainer sign-off yet.
- [#64182](https://github.com/NousResearch/hermes-agent/issues/64182) — Plugin Interface Expansion tracking. Still `needs-decision` despite active sub-issue churn; the remaining scope and priority need confirmation.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-08-13

## 1. Today's Overview
PicoClaw shows moderate but steady activity over the last 24 hours, with 3 open issues and 3 open pull requests updated. No new releases or closed PRs were recorded, indicating that maintainers are primarily in a review/iteration phase rather than shipping new versions. The most notable movement is a new feature request around dynamic model overrides and continued work on routed-agent memory handling, Telegram topics, and an Exa web search provider. However, two stale bug reports — one involving an MCP-related agent hang and one involving laggy web chat input — remain open and need attention. Overall project health is stable, but unresolved stale bugs and unanswered PRs suggest some maintenance bottleneck.

## 2. Releases
No new releases were published in the last 24 hours.

## 3. Project Progress
No PRs were merged or closed today. However, three open PRs continue to advance:

- **[#3316 — fix: routed-agent context management not respecting history, summarization, compression, and seahorse bootstrap](https://github.com/sipeed/picoclaw/pull/3316)**  
  Aims to fix routed agents not remembering previous messages and auto-compaction never triggering in Discord channel sessions. This is a key reliability improvement for multi-agent/chat-route workflows.

- **[#3315 — Support topics in private bot chats](https://github.com/sipeed/picoclaw/pull/3315)**  
  Fixes Telegram topic handling for private bot chats with forum topic mode enabled, extending support beyond forum supergroups.

- **[#3299 — Add native Exa web search provider](https://github.com/sipeed/picoclaw/pull/3299)**  
  Adds Exa as a native `tools.web` / `web_search` provider, supporting existing time-range filters and API-key auth. This would give users an additional search backend.

These PRs were updated recently but have not yet been merged, so feature completion is still pending.

## 4. Community Hot Topics
The most active discussions in the last 24 hours:

- **[#3281 — [BUG] Web UI chat input is very laggy when history has a little bit long](https://github.com/sipeed/picoclaw/issues/3281)**  
  Comments: 5 | 👍: 1  
  Users report noticeable input lag in the web UI once a session has accumulated chat history. This points to frontend/state management inefficiencies, likely related to rendering or history serialization as the conversation grows.

- **[#3269 — [BUG] If the MCP server connection fails, the agent loop will hang, causing the PicoClaw chat interface to stop replying to users](https://github.com/sipeed/picoclaw/issues/3269)**  
  Comments: 4 | 👍: 1  
  A serious reliability issue: MCP connection failures can freeze the agent loop entirely, leaving the chat interface unresponsive. The fact this remains open and stale is a concern for production users.

- **[#3330 — [Feature] Support dynamic model override in delegate/spawn/subagent tools](https://github.com/sipeed/picoclaw/issues/3330)**  
  Newest issue, created today. Users want to pass a model at call time for `delegate`, `spawn`, and `subagent` tools, rather than being locked to statically configured models.

The underlying need from all three is clear: users want more control over runtime behavior, more responsiveness, and better failure isolation when external dependencies (MCP) break.

## 5. Bugs & Stability
Two active bugs were updated in the last 24 hours, though neither was newly filed today:

1. **High severity — [MCP server connection failure causes agent loop hang and unresponsive chat (#3269)](https://github.com/sipeed/picoclaw/issues/3269)**  
   - Impact: Chat interface stops replying entirely when an MCP connection fails.
   - Status: Open, tagged `stale`, no linked fix PR observed.
   - This is the most stability-critical open issue in the current set.

2. **Medium severity — [Web UI chat input laggy with long history (#3281)](https://github.com/sipeed/picoclaw/issues/3281)**  
   - Impact: Degraded UX; input becomes noticeably laggy as session history grows.
   - Status: Open, tagged `stale`, no linked fix PR observed.
   - Likely related to client-side rendering/history handling, not a core agent crash.

No new regressions or crashes were reported today.

## 6. Feature Requests & Roadmap Signals
- **[#3330 — Dynamic model override in delegate/spawn/subagent tools](https://github.com/sipeed/picoclaw/issues/3330)**  
  This is the clearest roadmap signal for the next version. It suggests PicoClaw users need per-call model selection for subagent tools, likely for cost control, specialized model routing, and experimentation.

- **[#3299 — Native Exa web search provider](https://github.com/sipeed/picoclaw/pull/3299)**  
  If merged, this would widen web-search support and attract users who prefer Exa as a search backend.

- **[#3315 — Telegram topic support in private bot chats](https://github.com/sipeed/picoclaw/pull/3315)**  
  This is a concrete Telegram integration enhancement that may be expected in an upcoming point release.

- **[#3316 — Routed-agent context/history fix](https://github.com/sipeed/picoclaw/pull/3316)**  
  This is more of a bug fix, but it is essential for users leveraging dispatch rules and long-running agent sessions. Its merge will be an important milestone.

The next minor version will likely include at least one of the pending PRs, with the Exa provider and routed-agent context fix being the most probable candidates.

## 7. User Feedback Summary
User feedback in the current window reflects three recurring pain points:

- **Dependency failures are too disruptive**: MCP failures can completely stall the agent/chat loop, which is unacceptable for always-on assistants.
- **Web UI performance degrades with history**: Longer sessions become difficult to use, reducing trust in the web interface for extended workflows.
- **Subagent model selection is too rigid**: Users want to choose a model at call time for `delegate`/`spawn`/`subagent`, indicating use cases where different subtasks require different models.

Overall, users are actively pushing for production-hardening improvements (reliability, scalability, richer tooling) rather than surface-level features.

## 8. Backlog Watch
Issues and PRs that need maintainer attention:

- **[#3269 — MCP failure causes agent loop hang](https://github.com/sipeed/picoclaw/issues/3269)**  
  Open since 2026-07-20, updated 08-12, marked stale. This is a high-impact bug with no visible fix PR. Needs prioritization.

- **[#3281 — Web UI laggy with long history](https://github.com/sipeed/picoclaw/issues/3281)**  
  Open since 2026-07-21, marked stale, no linked fix. Moderate severity but affects core UX.

- **[#3316 — Routed-agent context management fix](https://github.com/sipeed/picoclaw/pull/3316)**  
  Open since 08-03, updated 08-12, no visible merge activity. Important fix for routed-agent memory.

- **[#3315 — Telegram topics in private chats](https://github.com/sipeed/picoclaw/pull/3315)**  
  Open since 08-03, updated 08-12. Feature-complete-looking PR that should be evaluated for merge.

- **[#3299 — Exa web search provider](https://github.com/sipeed/picoclaw/pull/3299)**  
  Open since 07-26, updated 08-12. A clean feature PR with no visible maintainer response; may need review/merge decisions.

These items are not necessarily "unanswered" but have remained open for extended periods, and their risk/size suggests they should be high on the maintainer radar.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-08-13

Data window: last 24h ending 2026-08-13.

## Today's Overview

NanoClaw saw moderate issue activity and elevated PR activity: 4 issues were updated (all still open) and 10 PRs were updated (9 open, 1 closed). The only closed PR was a WhatsApp recipient-validation fix. The most notable movement was on core-team PR #3220, which would convert agent templates into Agent Plugins 1.0.0 directories and includes security hardening; it was updated on the digest date. No new releases were published. Overall, the project appears to be in an active development phase focused on template/plugin architecture, channel reliability fixes, and provider extensibility.

## Releases

No new releases were published in this window.

## Project Progress

- **#3086 (closed)** — [fix(whatsapp): validate recipient exists before sending](https://github.com/qwibitai/nanoclaw/pull/3086)  
  Closed/fixed: prevents false “Message delivered” logs when sending to unregistered WhatsApp numbers.

- No other PRs were merged or closed. Active open PRs continue to evolve, including:
  - **#3220** — [Agent templates become Agent Plugins 1.0.0 directories](https://github.com/qwibitai/nanoclaw/pull/3220)
  - **#3231** — [Honor plugin MCP cwd in codex/opencode config writers](https://github.com/qwibitai/nanoclaw/pull/3231)

## Community Hot Topics

- **Issue #2504** is the only item with explicit comment activity (1 comment): [feat: add `ncl status` command](https://github.com/qwibitai/nanoclaw/issues/2504).  
  Underlying need: users want a fast, first-class operational health check without relying on external dashboards or skills.

- **PR #3220** was updated on 2026-08-13, making it the freshest active PR: [feat!: agent templates become Agent Plugins 1.0.0 directories](https://github.com/qwibitai/nanoclaw/pull/3220).  
  Underlying need: a standardized, hardened plugin format for agent templates.

- The PR list contains no comment/reaction counts in the provided data, so activity is assessed primarily by update timing and labels.

## Bugs & Stability

Ranked by severity:

- **High — #3233** — [Agent-scoped `ncl tasks` blind to pre-2.1.54 recurring tasks](https://github.com/qwibitai/nanoclaw/issues/3233)  
  Upgraded installs have recurring tasks that still fire, but task list/pause/cancel commands return failures or “No tasks.” No fix PR is linked.

- **Medium-High — #3234** — [Template-stamped agent groups get bare UUID id, missing `ag-` prefix](https://github.com/qwibitai/nanoclaw/issues/3234)  
  Causes OneCLI `ensureAgent` to reject template-created groups. No fix PR is linked.

- **Medium — #2346 (open PR)** — [treat unknown slash commands as normal chat](https://github.com/qwibitai/nanoclaw/pull/2346)  
  Fix for silently dropped responses when the Agent SDK interprets unknown commands as Claude Code slash commands.

- **Medium — #2689 (open PR)** — [Signal DM platform ID consistency, isMention, and ask_question/approval delivery](https://github.com/qwibitai/nanoclaw/pull/2689)  
  Fixes first-message drops for Signal DMs and registration issues.

- **Fixed — #3086** — WhatsApp silent send failure was closed in this window.

- **Security — #3220** includes stamp-time symlink/caps/secret hardening, though the PR is still open.

- **Low — #3230 (open PR)** — [stop removal docs pointing at the retired data/env mirror](https://github.com/qwibitai/nanoclaw/pull/3230)

## Feature Requests & Roadmap Signals

- **User feature requests:**
  - #2504 — [Add `ncl status` command for operational health check](https://github.com/qwibitai/nanoclaw/issues/2504)
  - #3232 — [Add QwenCloud as an optional provider skill](https://github.com/qwibitai/nanoclaw/issues/3232)
  - #3050 — [Add Dial to the channel picker + wizard/skills](https://github.com/qwibitai/nanoclaw/pull/3050)
  - #3189 — [Add `add-why` utility skill](https://github.com/qwibitai/nanoclaw/pull/3189)

- **Core-team roadmap signals:**
  - #3220 — [Agent Plugins 1.0.0 directories](https://github.com/qwibitai/nanoclaw/pull/3220)
  - #2909 — [Setup wizard template flow and first-agent stamping](https://github.com/qwibitai/nanoclaw/pull/2909) — stacked on #3220
  - #3231 — [Plugin MCP cwd support for codex/opencode](https://github.com/qwibitai/nanoclaw/pull/3231)

- **Likely next-version candidates:** the #3220 → #2909 plugin/template train is the clearest roadmap signal and includes a breaking change (`feat!`). #3231 will likely land with or immediately after it. #3050 and #3232 are plausible channel/provider additions. #2504 is a lower-confidence candidate unless maintainers pick it up.

## User Feedback Summary

Users are signaling pain points around upgrades, template identity, and channel edge cases:

- Recurring tasks become unmanageable after upgrading to 2.1.54 — [#3233](https://github.com/qwibitai/nanoclaw/issues/3233)
- Template-created agent groups are rejected downstream due to a missing `ag-` prefix — [#3234](https://github.com/qwibitai/nanoclaw/issues/3234)
- Operators want a built-in health check instead of composing output from sessions and dashboards — [#2504](https://github.com/qwibitai/nanoclaw/issues/2504)
- Users want QwenCloud as an optional provider — [#3232](https://github.com/qwibitai/nanoclaw/issues/3232)
- Channel reliability is a recurring theme: WhatsApp false delivery, Signal DM drops, unknown slash commands being lost, and Telegram rich-message support.

No explicit positive sentiment was captured in the supplied data. Dissatisfaction is concentrated around migration gaps and platform-specific integration bugs.

## Backlog Watch

PRs and issues that have been open for a long time or need maintainer attention:

- **#2346** — [fix(formatter): treat unknown slash commands as normal chat](https://github.com/qwibitai/nanoclaw/pull/2346)  
  Open since 2026-05-08; bug-fix PR awaiting review/merge.

- **#2504** — [feat: add `ncl status` command](https://github.com/qwibitai/nanoclaw/issues/2504)  
  Open since 2026-05-15; only 1 comment, no visible maintainer response.

- **#2689** — [fix(signal): DM platform ID consistency, isMention, and ask_question/approval delivery](https://github.com/qwibitai/nanoclaw/pull/2689)  
  Open since 2026-06-04; important Signal fix.

- **#2909** — [feat(setup): template setup flow in the wizard and first-agent stamping](https://github.com/qwibitai/nanoclaw/pull/2909)  
  Open since 2026-07-02; core-team feature stacked on #3220.

- **#3050** — [feat(setup): add Dial to the channel picker + wizard/skills](https://github.com/qwibitai/nanoclaw/pull/3050)  
  Open since 2026-07-14; needs review or a maintainer decision.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-08-13

## 1. Today's Overview

IronClaw is in a high-activity release-validation phase for the 1.2.0 line, with 41 issues and 50 PRs updated in the last 24 hours. Two release candidates shipped on 2026-08-12 (`v1.2.0-rc.2`, `v1.2.0-rc.3`), focused on Docker healthcheck reliability and Windows first-start behavior. The open change set is large and feature-heavy: 31 PRs remain open, including XL-sized work on per-user model preferences, Telegram linked-device auth, durable storage, and coding-tool contracts. Meanwhile, a concentrated QA bug-bash produced a wave of Telegram and multi-user access reports, signaling active hardening before launch. Overall, the project is healthy in throughput but currently carrying a meaningful bug backlog that needs release-candidate iteration and maintainer attention.

## 2. Releases

### `ironclaw-v1.2.0-rc.3`
- Fixed: The runtime container image now installs `curl`, so in-container HTTP healthchecks can execute. Previously, orchestrators could not probe the worker with `curl -fsS http://localhost:3000/`, so the container was never marked healthy.

### `ironclaw-v1.2.0-rc.2`
- Fixed: Windows first-start filesystem publication now uses native atomic rename semantics instead of hard links, and tolerates unsupported directory syncs.
- Fixed: Release smoke runs preserve the Windows account identity required to secure the standalone secrets key, isolating workspace/secret state more safely.

No explicit breaking changes or migration steps were published in the provided release notes, though Windows operators should verify first-start behavior and secrets-key handling after upgrading.

## 3. Project Progress

### Merged/closed PRs in the last 24h

- [PR #7555 — fix(docker): install curl so orchestrator healthchecks can run](https://github.com/nearai/ironclaw/pull/7555)  
  Release-blocking fix for the runtime container health probe.

- [PR #7560 — fix(release): retry the dist installer download](https://github.com/nearai/ironclaw/pull/7560)  
  Fixes flaky `cargo-dist` download failures during the `v1.2.0-rc.3` release pipeline.

- [PR #7550 — feat(extensions): per-field help text on admin configuration forms + channel setup docs rewrite](https://github.com/nearai/ironclaw/pull/7550)  
  Adds optional `description` fields to admin config forms, starting with Telegram.

- [PR #5503 — [Experiment] Add compact Google extension capabilities](https://github.com/nearai/ironclaw/pull/5503)  
  Adds context-efficient Google capabilities such as Gmail message summaries and Calendar digests.

- [PR #7427 — release: prepare 1.1.1-rc.1](https://github.com/nearai/ironclaw/pull/7427)  
  Backports urgent IronHub/custom MCP, WebUI, retrieval, Slack, and Telegram fixes onto the 1.1 release line.

- [PR #6836 — feat(webui): @ironclaw/ui and workspace refactor](https://github.com/nearai/ironclaw/pull/6836)  
  Re-derives the WebUI design system as a workspace package; supersedes earlier design-system experiments.

### Closed issues indicating completed work

- [Issue #7407 — Execute BatchPolicy::Parallel capability batches concurrently](https://github.com/nearai/ironclaw/issues/7407)
- [Issue #7484 — Context window silently evicts the task](https://github.com/nearai/ironclaw/issues/7484)
- [Issue #7485 — Token estimator double-counts ASCII](https://github.com/nearai/ironclaw/issues/7485)
- [Issue #7383 — Track decomposition of `tool_disclosure_port.rs`](https://github.com/nearai/ironclaw/issues/7383)
- [Issue #7302 — Improve tool call UI when one call fails](https://github.com/nearai/ironclaw/issues/7302)
- [Issue #6541 — WebUI constantly reconnecting](https://github.com/nearai/ironclaw/issues/6541)
- [Issue #5508 — Slack delivery target not found despite active Slack connection](https://github.com/nearai/ironclaw/issues/5508)

## 4. Community Hot Topics

- [Issue #7360 — Expand stress coverage across built-in and durable write paths](https://github.com/nearai/ironclaw/issues/7360)  
  Most-active open issue by comment count. It highlights a real testing gap: nightly stress workloads don’t yet exercise built-in tool-call write paths, so regressions can land undetected.

- [Issue #7407 — Execute BatchPolicy::Parallel capability batches concurrently](https://github.com/nearai/ironclaw/issues/7407)  
  Closed after 3 comments. Underlying need: the agent loop already computes parallel batch policies, but production execution was serial — a performance bottleneck for multi-tool-call turns.

- [Issue #7554 — Custom MCP server add flow shows validation error](https://github.com/nearai/ironclaw/issues/7554)  
  From Slack product feedback. Users are blocked from adding custom MCP servers by a red validation error with no clear path forward.

- [Issue #7517 — Cloud.near.ai: allow staking path for Google/GitHub sign-ins](https://github.com/nearai/ironclaw/issues/7517)  
  Users signing in with Google/GitHub cannot stake for inference; NEAR wallet login is not attached as an option.

Underlying themes: the community/QA feedback is pushing for better test coverage, parallel execution, smoother MCP onboarding, and more flexible auth/staking paths.

## 5. Bugs & Stability

Reported bugs ranked by severity:

### P1 / Critical

- [Issue #7538 — Telegram agent becomes completely stuck after receiving GIF or sticker](https://github.com/nearai/ironclaw/issues/7538)  
  Session becomes unresponsive even for normal text messages afterward. Highest-impact Telegram bug.

- [Issue #7536 — Multi-user access flow is broken; additional users get "Invalid secret"](https://github.com/nearai/ironclaw/issues/7536)  
  Users created from Admin UI cannot open the instance. Blocks basic multi-user collaboration.

- [Issue #7535 — Telegram webhook is not activated after saving bot configuration](https://github.com/nearai/ironclaw/issues/7535)  
  Telegram integration only works after full redeploy; "Forbidden" errors appear on save.

- [Issue #7547 — Instance upgrade fails during egress apply on agent staging](https://github.com/nearai/ironclaw/issues/7547)  
  `Error: egress apply failed`; container image switches but egress configuration does not apply.

### P2 / High

- [Issue #7539 — Telegram user message appears after agent starts working](https://github.com/nearai/ironclaw/issues/7539)
- [Issue #7540 — Long Telegram messages are split and partially missed](https://github.com/nearai/ironclaw/issues/7540)
- [Issue #7541 — Agent cannot send generated files back as Telegram attachments](https://github.com/nearai/ironclaw/issues/7541)
- [Issue #7542 — Agent does not recognize that conversation is already in Telegram](https://github.com/nearai/ironclaw/issues/7542)
- [Issue #7543 — Telegram routine runs successfully but message is not delivered on first execution](https://github.com/nearai/ironclaw/issues/7543)
- [Issue #7544 — Agent exposes internal reasoning/planning instead of responding to user](https://github.com/nearai/ironclaw/issues/7544)
- [Issue #7545 — Agent incorrectly claims live crypto market data is unavailable when querying multiple tokens](https://github.com/nearai/ironclaw/issues/7545)
- [Issue #7451 — Telegram agent sometimes incorrectly asks for credentials](https://github.com/nearai/ironclaw/issues/7451)
- [Issue #7508 — GitHub MCP extension startup gives confusing endpoint verification prompt](https://github.com/nearai/ironclaw/issues/7508)
- [Issue #7554 — Custom MCP server add flow shows validation error](https://github.com/nearai/ironclaw/issues/7554)

### P3 / Low

- [Issue #7546 — Agent does not react to or acknowledge Telegram stickers](https://github.com/nearai/ironclaw/issues/7546)

No explicit fix PRs were linked to the Telegram QA-bug-bash items in the provided data snapshot. However, the release-candidate fixes [PR #7555](https://github.com/nearai/ironclaw/pull/7555) and [PR #7560](https://github.com/nearai/ironclaw/pull/7560) address infrastructure/release reliability, and [PR #7551 — fix(loop-host): repair unavailable capability calls](https://github.com/nearai/ironclaw/pull/7551) is closely related to complaints about agents claiming a capability is unavailable.

## 6. Feature Requests & Roadmap Signals

Strong signals for next releases:

- [Issue #7537 — Generic per-request thinking/effort control with provider-native mapping](https://github.com/nearai/ironclaw/issues/7537)  
  Likely candidate for an LLM-layer improvement; DeepSeek V4 Flash is the trigger use case.

- [PR #7439 — Per-user model preferences and commands](https://github.com/nearai/ironclaw/pull/7439)  
  Adds `/model` and `/model use <model>`; could land in the next minor release.

- [PR #7548 — Structured execution contracts for automations](https://github.com/nearai/ironclaw/pull/7548)  
  Makes scheduled automations more deterministic with goals, success criteria, and output instructions.

- [PR #7464 — Telegram linked-device auth, session custody, standard-op tools](https://github.com/nearai/ironclaw/pull/7464)  
  Implements a real MTProto linked-device flow; likely important for Telegram reliability.

- [PR #7556 — Railway sandbox workspace file bridge](https://github.com/nearai/ironclaw/pull/7556)  
  Adds `builtin.sandbox_workspace_copy`; narrow but useful for Railway-hosted workflows.

- [PR #7491 — omp core-tool contract + engines + benchmark arm](https://github.com/nearai/ironclaw/pull/7491)  
  Unifies coding tool surfaces to `read`, `write`, `edit`, `glob`, `grep`.

- [Issue #7044 / PR #6994 / Issue #6993 — OOBE onboarding to channel-first approach](https://github.com/nearai/ironclaw/issues/7044)  
  Tagged for v1.4.0; first-run onboarding design and backend wiring are already in motion.

- [Issue #7038 / #7042 / #7558 — Storybook plus AI-first Design System](https://github.com/nearai/ironclaw/issues/7038)  
  Tagged v1.3.0; phase 1 and 2 PRs are open.

- [Issue #7520 — Epic: retire superseded and unreachable WebUI frontend surfaces](https://github.com/nearai/ironclaw/issues/7520)  
  Also tagged v1.3.0; signals continued frontend cleanup.

Likely next-version outcomes: v1.2.0 finalization, then v1.3.0 will probably include per-user model preferences, Telegram linked-device improvements, structured automation contracts, and the first design-system package landing.

## 7. User Feedback Summary

Real user pain points visible in this snapshot:

- **Telegram channel reliability is the largest dissatisfaction cluster.** Users report stuck sessions on GIF/sticker input ([#7538](https://github.com/nearai/ironclaw/issues/7538)), lost/split long messages ([#7540](https://github.com/nearai/ironclaw/issues/7540)), missing file attachments ([#7541](https://github.com/nearai/ironclaw/issues/7541)), and the agent not understanding it is already in Telegram ([#7542](https://github.com/nearai/ironclaw/issues/7542)).

- **Auth and onboarding friction is high.** Invited users hit "Invalid secret" ([#7536](https://github.com/nearai/ironclaw/issues/7536)); Google/GitHub users cannot stake for inference ([#7517](https://github.com/nearai/ironclaw/issues/7517)); Slack delivery targets falsely appear missing ([#5508](https://github.com/nearai/ironclaw/issues/5508)).

- **Trust and transparency concerns.** The agent sometimes leaks internal reasoning/planning instead of giving a user-facing answer ([#7544](https://github.com/nearai/ironclaw/issues/7544)), and tool failures appear aggressive even when the agent recovers ([#7302](https://github.com/nearai/ironclaw/issues/7302)).

- **Use cases are real and practical.** Users are running crypto market checks ([#7545](https://github.com/nearai/ironclaw/issues/7545)), recurring Telegram routines such as BTC news summaries ([#7543](https://github.com/nearai/ironclaw/issues/7543)), and multi-user instance sharing ([#7536](https://github.com/nearai/ironclaw/issues/7536)). These are production-like workflows, so delivery reliability directly affects satisfaction.

No strong positive sentiment was captured in this snapshot; the overall tone is dominated by QA-bug-bash findings and workflow-blocking issues.

## 8. Backlog Watch

Items that need maintainer attention or are long-running:

- [PR #6994 — OOBE automation-tasks prototype](https://github.com/nearai/ironclaw/pull/6994)  
  Open since 2026-08-01; large onboarding workstream tied to epic [#7044](https://github.com/nearai/ironclaw/issues/7044). Needs review/decision despite being gated behind a flag.

- [Issue #6993 — Backend wiring for the OOBE automation-tasks prototype](https://github.com/nearai/ironclaw/issues/6993)  
  Open since 2026-08-01; backend half of the OOBE plan.

- [PR #7039 — Integrate Storybook + design-system catalog](https://github.com/nearai/ironclaw/pull/7039) and [PR #7043 — DESIGN.md governance + Storybook guidelines](https://github.com/nearai/ironclaw/pull/7043)  
  Both open since 2026-08-03; belong to the v1.3.0 design-system epic [#7038](https://github.com/nearai/ironclaw/issues/7038).

- [Issue #7360 — Expand stress coverage across built-in and durable write paths](https://github.com/nearai/ironclaw/issues/7360)  
  Open since 2026-08-07; important for preventing regressions before release.

- [PR #7456 — Make durable storage profile-agnostic](https://github.com/nearai/ironclaw/pull/7456) and [PR #7491 — omp core-tool contract + engines + benchmark arm](https://github.com/nearai/ironclaw/pull/7491)  
  Large XL PRs open since 2026-08-10/11; both touch storage, CI, and dependencies, so they need careful review bandwidth.

- [Issue #7508 — GitHub MCP extension startup gives confusing endpoint verification prompt](https://github.com/nearai/ironclaw/issues/7508)  
  Open since 2026-08-11 with no fix PR visible in this snapshot.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-08-13

## 1. Today's Overview

LobsterAI had a normal-to-active day: 6 issues were updated in the last 24 hours (4 open, 2 closed) and 8 PRs were touched (6 closed/merged, 2 open). No official GitHub release was published today, although the merged `Release/2026.8.12` PR suggests the project is closing out the 2026.8.12 release cycle. The majority of merged work targets reliability (Windows plugin installs, Electron icon handling), OpenClaw integration, and renderer UI polish. Older user-reported issues remain open and are increasingly marked stale, creating a growing backlog of unresolved concerns around sandboxing, uninstall behavior, and gateway stability.

## 2. Releases

No new releases were published in the last 24 hours.

The closest release-related signal is the merged [PR #2480 - Release/2026.8.12](https://github.com/netease-youdao/LobsterAI/pull/2480), but the PR template contains no user-facing release notes or migration details yet.

## 3. Project Progress

Closed/merged PRs in the last 24 hours:

- [PR #2482](https://github.com/netease-youdao/LobsterAI/pull/2482) – `feat: skills manager split mine builtin tabs`  
  Advances the Skills Manager UI by separating "Mine" and "Built-in" tabs.

- [PR #2481](https://github.com/netease-youdao/LobsterAI/pull/2481) – `feat(sidebar): move task search to header actions`  
  Replaces the labeled search entry with an icon-only action and aligns layout across macOS/Windows.

- [PR #2480](https://github.com/netease-youdao/LobsterAI/pull/2480) – `Release/2026.8.12`  
  Release branch prepared and merged, likely the basis for the next official release.

- [PR #1233](https://github.com/netease-youdao/LobsterAI/pull/1233) – `feat(model): 为模型提供商添加官网链接和 API Key 获取引导`  
  Adds official website links and "Get API Key" guidance for model providers, with i18n support and duplicate URL tables merged. Closes #731.

- [PR #2479](https://github.com/netease-youdao/LobsterAI/pull/2479) – `fix(plugins): preserve junctions during Windows install`  
  Fixes Windows OpenClaw plugin installation by staging on the same volume and atomically renaming into place, avoiding `EPERM` symlink failures.

- [PR #2478](https://github.com/netease-youdao/LobsterAI/pull/2478) – `fix(shell): avoid unsupported large file icon size on macOS/Windows`  
  Prevents Electron icon retrieval errors by using `large` icon size only on Linux and `normal` elsewhere.

Notable open PR today:

- [PR #2483](https://github.com/netease-youdao/LobsterAI/pull/2483) – `fix(openclaw): key skill entries by frontmatter name`  
  Addresses skill UI toggles being ineffective when directory names and frontmatter names mismatch.

## 4. Community Hot Topics

Most commented active items in the last 24 hours:

- [Issue #1179 – 3.31版本强制沙箱怎么关？](https://github.com/netease-youdao/LobsterAI/issues/1179) — 2 comments  
  User asks how to disable the forced sandbox introduced in v3.31; rollback to 3.30 works. Underlying need: more user control over sandboxing.

- [Issue #1236 – [bug]插件 ID 不匹配警告](https://github.com/netease-youdao/LobsterAI/issues/1236) — 2 comments  
  Closed issue about `mcp-bridge` plugin entry key vs manifest ID mismatch causing repeated startup warnings. Users want config/manifest consistency.

- [Issue #2071 – 创建定时任务错误](https://github.com/netease-youdao/LobsterAI/issues/2071) — 2 comments  
  Closed issue reporting scheduled task creation failure in version 2026.5.27, with screenshot but no clear cause.

- [Issue #1173 – 卸载之后程序还能运行？？](https://github.com/netease-youdao/LobsterAI/issues/1173) — 1 comment  
  User reports that after Windows uninstall, the app still runs and can send Feishu messages, prompting distrust and a "backdoor" accusation. High emotional impact, low maintainer visibility.

No reactions were recorded on these items; comments remain the primary engagement signal.

## 5. Bugs & Stability

Ranked by severity:

1. **High — Uninstall does not terminate the app**  
   [Issue #1173](https://github.com/netease-youdao/LobsterAI/issues/1173)  
   The app reportedly continues running after Windows uninstall and can still send messages. This is both a lifecycle bug and a serious trust/privacy concern. No visible fix PR yet.

2. **High/Medium — Gateway restart loop after editing custom agent**  
   [Issue #1180](https://github.com/netease-youdao/LobsterAI/issues/1180)  
   Modifying a self-built agent (e.g., changing its icon) triggers repeated gateway restarts; deleting the agent restores stability. No linked fix PR.

3. **Medium — Scheduled task creation error**  
   [Issue #2071](https://github.com/netease-youdao/LobsterAI/issues/2071)  
   Creating a scheduled task fails on version 2026.5.27. The issue is closed but lacks a detailed resolution.

4. **Low — Plugin ID mismatch warning**  
   [Issue #1236](https://github.com/netease-youdao/LobsterAI/issues/1236)  
   Persistent startup warning caused by `mcp-bridge` entry key and manifest ID mismatch. Closed, but the underlying configuration consistency issue is still relevant.

5. **Policy/UX — Forced sandbox in v3.31**  
   [Issue #1179](https://github.com/netease-youdao/LobsterAI/issues/1179)  
   Not a crash, but a regression from the user's perspective; no configurable escape hatch is documented.

Stability fixes merged today:

- [PR #2479](https://github.com/netease-youdao/LobsterAI/pull/2479) fixes Windows plugin install failures / symlink `EPERM`.
- [PR #2478](https://github.com/netease-youdao/LobsterAI/pull/2478) avoids unsupported icon-size calls on macOS/Windows.

## 6. Feature Requests & Roadmap Signals

Active user request:

- [Issue #1174 – 增加多个自定义模型提供商](https://github.com/netease-youdao/LobsterAI/issues/1174)  
  Users want to configure multiple custom model providers instead of being limited to one. The use case is switching to a new provider while retaining old configurations. No PR is attached yet, but it is a strong candidate for a future release.

Roadmap signals from merged PRs:

- Skills Manager UI is being actively improved with "Mine"/"Built-in" tabs ([PR #2482](https://github.com/netease-youdao/LobsterAI/pull/2482)).
- Task search is being streamlined into sidebar header actions ([PR #2481](https://github.com/netease-youdao/LobsterAI/pull/2481)).
- Model-provider onboarding is being improved with official links and API key guidance ([PR #1233](https://github.com/netease-youdao/LobsterAI/pull/1233)).

The 2026.8.12 release PR ([#2480](https://github.com/netease-youdao/LobsterAI/pull/2480)) suggests these improvements are being bundled for the next official version.

## 7. User Feedback Summary

User feedback in the last 24 hours reflects a mix of frustration and expectation:

- **Control & trust concerns**: The forced sandbox ([#1179](https://github.com/netease-youdao/LobsterAI/issues/1179)) and uninstall behavior ([#1173](https://github.com/netease-youdao/LobsterAI/issues/1173)) are making users question how much control they have over the installed app.
- **Stability frustration**: Custom agent edits can break the gateway ([#1180](https://github.com/netease-youdao/LobsterAI/issues/1180)), and scheduled task creation has failed in recent versions ([#2071](https://github.com/netease-youdao/LobsterAI/issues/2071)).
- **Configuration quality**: Repetitive plugin ID mismatch warnings ([#1236](https://github.com/netease-youdao/LobsterAI/issues/1236)) degrade trust in configuration handling.
- **Positive signals**: The merged UI polish and model-provider guidance PRs show the project is responsive to discoverability and usability needs, but users still expect fixes for the older stability complaints.

## 8. Backlog Watch

Items that need maintainer attention:

- [Issue #1173 – 卸载之后程序还能运行？？](https://github.com/netease-youdao/LobsterAI/issues/1173)  
  Open since March 31, only 1 comment, and it raises a serious security/trust concern about uninstall behavior. Needs an official response and investigation.

- [Issue #1180 – 修改自建agent可能会触发网关反复重启](https://github.com/netease-youdao/LobsterAI/issues/1180)  
  Open since March 31, gateway restart loop triggered by agent edits. No fix PR linked.

- [Issue #1174 – 增加多个自定义模型提供商](https://github.com/netease-youdao/LobsterAI/issues/1174)  
  Open since March 31, clear feature request with real use case; no implementation started.

- [Issue #1179 – 3.31版本强制沙箱怎么关？](https://github.com/netease-youdao/LobsterAI/issues/1179)  
  Open since March 31, users are rolling back to avoid the forced sandbox. Needs at least documentation or a configuration option.

- [PR #1181 – fix(cowork): hide OpenClaw main agent sessions from session list](https://github.com/netease-youdao/LobsterAI/pull/1181)  
  Open since April 1, updated today but still unmerged. It fixes user confusion from internal `[OpenClaw]` sessions appearing in the Cowork session list. This is a candidate for review/merge in the next cycle.

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

# CoPaw Project Digest — 2026-08-13  
**Project:** [agentscope-ai/QwenPaw](https://github.com/agentscope-ai/QwenPaw)

---

## 1. Today's Overview

QwenPaw is in a highly active pre-release phase: **31 issues** were updated in the last 24 hours (23 open, 8 closed), and **43 PRs** were touched (26 open, 17 closed/merged). A new beta release, **v2.1.0-beta.4**, was published. Activity is heavily weighted toward bug-fixing, memory-system corrections, and UI/stability issues, rather than large new features. The maintainer response appears active, but several high-impact bugs around multi-agent execution, memory integrity, and network resilience remain open.

---

## 2. Releases

### [v2.1.0-beta.4](https://github.com/agentscope-ai/QwenPaw/releases/tag/v2.1.0-beta.4)

Included changes:

- [fix(files): repair previews and dark mode styling (#6915)](https://github.com/agentscope-ai/QwenPaw/pull/6915)
- [fix(tools): correct read_file tool description (#6898)](https://github.com/agentscope-ai/QwenPaw/pull/6898)
- Version bump to `2.1.0b4`

No breaking changes or migration notes were included in the release notes. This is a maintenance-oriented beta release, likely preparing for a stable v2.1.0.

---

## 3. Project Progress

Notable closed/merged PRs in the last 24 hours:

- [docs(website): make the Files workspace blog easier to understand (#6950)](https://github.com/agentscope-ai/QwenPaw/pull/6950) — closed
- [fix(memory): simplify long-term memory guidance (#6942)](https://github.com/agentscope-ai/QwenPaw/pull/6942) — closed; directly addresses misleading memory prompt issue [#6853](https://github.com/agentscope-ai/QwenPaw/issues/6853)
- [fix(chats): handle dict-like model responses (#6816)](https://github.com/agentscope-ai/QwenPaw/pull/6816) — closed, but note that it was subsequently reverted:
- [Revert "fix(chats): handle dict-like model responses (#6813)" (#6956)](https://github.com/agentscope-ai/QwenPaw/pull/6956) — closed
- [chore: update the release notes for v2.1.0 (#6944)](https://github.com/agentscope-ai/QwenPaw/pull/6944) — closed
- [fix(computer-use): improve macOS element activation (#6913)](https://github.com/agentscope-ai/QwenPaw/pull/6913) — closed
- [fix(agents): sanitize tool messages before model calls (#6540)](https://github.com/agentscope-ai/QwenPaw/pull/6540) — closed

In-progress work likely heading into the next beta/stable release:

- [fix(#6541): use SystemMsg instead of UserMsg for scroll compression placeholder (#6947)](https://github.com/agentscope-ai/QwenPaw/pull/6947)
- [fix(console): preserve textarea target for IME events (#6889)](https://github.com/agentscope-ai/QwenPaw/pull/6889)
- [fix(console): group daily memory notes by path date (#6941)](https://github.com/agentscope-ai/QwenPaw/pull/6941)
- [fix(#6826): display actual assistant reply completion time in chat history (#6938)](https://github.com/agentscope-ai/QwenPaw/pull/6938)
- [fix(providers): coerce string-typed tool args emitted as JSON numbers (#6936)](https://github.com/agentscope-ai/QwenPaw/pull/6936)
- [perf: stabilize LLM prefix cache by sorting tool schemas and splitting env_context (#6953)](https://github.com/agentscope-ai/QwenPaw/pull/6953)

---

## 4. Community Hot Topics

The most active issues by comment count:

- [#6853 — prompts.py lies to agents: Dream writes to digest/ not MEMORY.md](https://github.com/agentscope-ai/QwenPaw/issues/6853) — 5 comments, closed.  
  Strong community concern about the memory pipeline not matching documentation/prompts. This was picked up by maintainers in PR #6942.

- [#6921 — Task stops after output like “Now 2.1, 3.1, 3.2. Let me do all three.”](https://github.com/agentscope-ai/QwenPaw/issues/6921) — 5 comments, open.  
  Users report the agent plans the next step but then silently stops, requiring a manual “continue.” This is a core autonomy/reliability pain point.

- [#6780 — v2.0.1 idle freeze after several minutes; only process restart helps](https://github.com/agentscope-ai/QwenPaw/issues/6780) — 4 comments, open.  
  Long-running desktop users are hit by process-level hangs.

- [#6928 — History and input box bugs in chat UI](https://github.com/agentscope-ai/QwenPaw/issues/6928) — 4 comments, open.  
  Users cannot scroll old history and editing selected text also deletes following text.

- [#6826 — Assistant message completion time is displayed incorrectly](https://github.com/agentscope-ai/QwenPaw/issues/6826) — 4 comments, open.  
  A UI correctness issue with a fix PR now under review (#6938).

Underlying themes: users need **reliable autonomous execution**, **trustworthy memory/recall**, and **stable desktop/UI behavior** in real multi-step workflows.

---

## 5. Bugs & Stability

Ranked roughly by severity:

### High
- [sync.py imports history under random AgentState UUID instead of real session_id — 18–50% rows orphaned, recall split/duplicated (#6926)](https://github.com/agentscope-ai/QwenPaw/issues/6926) — closed, but data-integrity risk is severe.
- [Inter-agent messages spawn a new agent session per message — duplicate shadow instances (#6918)](https://github.com/agentscope-ai/QwenPaw/issues/6918) — open.
- [Calling multiple subagents repeatedly falls into dead loops (#6927)](https://github.com/agentscope-ai/QwenPaw/issues/6927) — open.
- [Network interruption does not auto-recover; all LLM requests time out until restart (#6932)](https://github.com/agentscope-ai/QwenPaw/issues/6932) — open.
- [Scroll compression hides pre-compression chat history; UI only shows eviction index (#6951)](https://github.com/agentscope-ai/QwenPaw/issues/6951) — open.
- [Plugins can silently create cron jobs and inject user-visible messages without approval (#6916)](https://github.com/agentscope-ai/QwenPaw/issues/6916) — open; security/permission gap.

### Medium
- [Agent stops after announcing next step; requires user to say “continue” (#6921)](https://github.com/agentscope-ai/QwenPaw/issues/6921) — open.
- [Idle freeze after several minutes (#6780)](https://github.com/agentscope-ai/QwenPaw/issues/6780) — open.
- [MCP tools receive numeric-looking strings as numbers, breaking calls (#6839)](https://github.com/agentscope-ai/QwenPaw/issues/6839) — open; fix PR [#6936](https://github.com/agentscope-ai/QwenPaw/pull/6936) exists.
- [MCP Tool Result file contains two duplicate data copies after truncation (#6958)](https://github.com/agentscope-ai/QwenPaw/issues/6958) — open.
- [Upgrades require re-configuring tools/plugins on the Tools page (#6957)](https://github.com/agentscope-ai/QwenPaw/issues/6957) — open.
- [Prefix cache instability from unsorted tool schemas and interleaved env_context (#6952)](https://github.com/agentscope-ai/QwenPaw/issues/6952) — open; fix PR [#6953](https://github.com/agentscope-ai/QwenPaw/pull/6953) exists.
- [Chat auto-title generation fails with KeyError: '__aiter__' (#6813)](https://github.com/agentscope-ai/QwenPaw/issues/6813) — closed, but the original fix #6816 was reverted by #6956, so this may need another solution.
- [Daily page groups notes inside subfolders under wrong date (#6883)](https://github.com/agentscope-ai/QwenPaw/issues/6883) — open; fix PR [#6941](https://github.com/agentscope-ai/QwenPaw/pull/6941) exists.

### Lower / Niche
- [Probabilistic startup crash on Windows v2.0.1 (#6955)](https://github.com/agentscope-ai/QwenPaw/issues/6955) — open.
- [Console admin dialog shows UTC instead of user_timezone (#6948)](https://github.com/agentscope-ai/QwenPaw/issues/6948) — open.
- [Smart mode writes outside sandbox fail; user unclear if smart mode should only approve (#6945)](https://github.com/agentscope-ai/QwenPaw/issues/6945) — open.

---

## 6. Feature Requests & Roadmap Signals

Notable user-requested features and roadmap indicators:

- [Agent should be able to deliver arbitrary reports/messages to Inbox, not just cron/heartbeat/memory tasks (#6917)](https://github.com/agentscope-ai/QwenPaw/issues/6917) — open.
- [Project → conversation → folder workflow: use a folder as conversation base, add file content to dialog (#6929)](https://github.com/agentscope-ai/QwenPaw/issues/6929) — closed enhancement request; aligns with Codex/Trae-style workflows.
- [Agent collaboration should stay in one session window (#6925)](https://github.com/agentscope-ai/QwenPaw/issues/6925) — open.
- [LongHorizon-Harness as a complementary sustained-task direction (#6923)](https://github.com/agentscope-ai/QwenPaw/issues/6923) — open.
- [Restore custom channel config entry in interactive channel config menu (#6924)](https://github.com/agentscope-ai/QwenPaw/issues/6924) — open.
- [Add per-session model overrides (#5992)](https://github.com/agentscope-ai/QwenPaw/pull/5992) — open PR, under review.
- [Add MiniMax TTS support (#6954)](https://github.com/agentscope-ai/QwenPaw/pull/6954) — open PR.
- [Add native DataPaw app runtime and durable analysis workspace (#6940)](https://github.com/agentscope-ai/QwenPaw/pull/6940) — open PR.
- [Surface system commands in slash autocomplete across all UIs (#5869)](https://github.com/agentscope-ai/QwenPaw/pull/5869) — open PR, under review.

Likely next-version candidates: **memory prompt simplification (#6942)**, **MCP string coercion (#6936)**, **prefix cache stabilization (#6953)**, **timeline display fix (#6938)**, **daily note grouping (#6941)**, and possibly **MiniMax TTS (#6954)**.

---

## 7. User Feedback Summary

Real user pain points visible in this window:

- **Task autonomy is the biggest trust issue.** Multiple users report the agent planning then stopping without visible error, requiring manual “continue” prompts ([#6921](https://github.com/agentscope-ai/QwenPaw/issues/6921), [#6927](https://github.com/agentscope-ai/QwenPaw/issues/6927)).
- **Memory behavior does not match documentation.** The “Dream” process does not actually sync to `MEMORY.md`, which reduces user confidence in long-term memory ([#6853](https://github.com/agentscope-ai/QwenPaw/issues/6853)).
- **Upgrades are disruptive.** Users must re-enter tool/plugin credentials after version upgrades ([#6957](https://github.com/agentscope-ai/QwenPaw/issues/6957)).
- **Windows stability complaints are recurring.** Idle freezes and antivirus process killing are affecting real usage ([#6780](https://github.com/agentscope-ai/QwenPaw/issues/6780), [#6847](https://github.com/agentscope-ai/QwenPaw/issues/6847)).
- **Network resilience matters for production-like use.** QwenPaw does not transparently recover from transient network outages ([#6932](https://github.com/agentscope-ai/QwenPaw/issues/6932)).
- **Power users are comparing against tools like Codex and Trae**, especially for folder-based workflows and adding file content into conversations ([#6929](https://github.com/agentscope-ai/QwenPaw/issues/6929)).

No positive satisfaction signals appeared in the top issues; the overall tone is engaged but frustrated, mostly around stability and agent reliability.

---

## 8. Backlog Watch

Issues and PRs that appear to need maintainer attention:

- [feat(console, tui): expose system commands in slash autocomplete across all UIs (#5869)](https://github.com/agentscope-ai/QwenPaw/pull/5869) — open since **2026-07-08**, under review, first-time contributor.
- [Add per-session model overrides (#5992)](https://github.com/agentscope-ai/QwenPaw/pull/5992) — open since **2026-07-12**, under review.
- [fix(acp): prevent final text loss when notifications race the prompt response (#6623)](https://github.com/agentscope-ai/QwenPaw/pull/6623) — open since **2026-08-01**, under review.
- [fix(summary): honor disable_thinking and interruption (#6818)](https://github.com/agentscope-ai/QwenPaw/pull/6818) — open since **2026-08-08**, under review.
- [v2.0.1 idle freeze after minutes (#6780)](https://github.com/agentscope-ai/QwenPaw/issues/6780) — open since **2026-08-07**, no linked fix yet.
- [QwenPaw killed by antivirus/security software during tasks (#6847)](https://github.com/agentscope-ai/QwenPaw/issues/6847) — open since **2026-08-09**, no visible maintainer response.
- [Plugins can silently create cron jobs and inject messages (#6916)](https://github.com/agentscope-ai/QwenPaw/issues/6916) — open since **2026-08-11**; security-relevant and should be triaged quickly.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-08-13

## 1. Today's Overview

ZeroClaw is in a **high-activity period**: 50 issues were updated in the last 24 hours (45 open/active, 5 closed) and 50 PRs were updated (30 open, 20 merged/closed). **No new release was published** in this window. The dominant themes are **Windows/CI parity, security hardening, agent-runtime reliability, and maintainer governance**. Several notable fixes landed or were closed, including WeChat sync-cursor persistence, MCP deferred-access policy centralization, browser screenshot path validation, and cron delivery/help corrections. Overall project health looks active but strained by a backlog of p1 bugs and blocked security work.

---

## 2. Releases

**No new releases in the last 24 hours.** The most recently referenced release remains v0.8.3, which is cited in issues around release attestation redundancy and the Windows desktop installer failure.

---

## 3. Project Progress

### Merged/closed PRs visible in the last 24h

- [PR #9956](https://github.com/zeroclaw-labs/zeroclaw/pull/9956) — `fix(wechat)`: persist sync cursor only after inbound batch is enqueued, closing a crash/data-loss window.
- [PR #8496](https://github.com/zeroclaw-labs/zeroclaw/pull/8496) — `fix(tools/mcp)`: centralize deferred-MCP access policy as the single source of truth.
- [PR #9362](https://github.com/zeroclaw-labs/zeroclaw/pull/9362) and [PR #8741](https://github.com/zeroclaw-labs/zeroclaw/pull/8741) — `fix(browser)`: validate screenshot destination path against workspace policy, closing an arbitrary file-write escape.
- [PR #9695](https://github.com/zeroclaw-labs/zeroclaw/pull/9695) — `fix(runtime)`: strip terminal markers from streaming and non-streaming responses.

### Closed issues representing completed work

- [Issue #9340](https://github.com/zeroclaw-labs/zeroclaw/issues/9340) — CLI-created cron jobs no longer hardcode `delivery.mode = "none"`.
- [Issue #9684](https://github.com/zeroclaw-labs/zeroclaw/issues/9684) — zerocode SOP pane live run-status icons task closed.
- [Issue #9796](https://github.com/zeroclaw-labs/zeroclaw/issues/9796) — invalid `cron` parent help examples fixed.

### Notable open PRs still progressing

- [PR #9724](https://github.com/zeroclaw-labs/zeroclaw/pull/9724) — `always_ask` now survives Full-autonomy mode.
- [PR #9753](https://github.com/zeroclaw-labs/zeroclaw/pull/9753) — distinguish absent vs empty risk-profile `allowed_tools`.
- [PR #9002](https://github.com/zeroclaw-labs/zeroclaw/pull/9002) — keep agent turns alive after viewer disconnect.
- [PR #9403](https://github.com/zeroclaw-labs/zeroclaw/pull/9403) — bound WASM plugin exports with a wall-clock deadline.

---

## 4. Community Hot Topics

Most-commented issues in the last 24h:

| Issue | Comments | Topic |
|---|---|---|
| [#7462](https://github.com/zeroclaw-labs/zeroclaw/issues/7462) | 14 | 74 Windows test failures, Unix-only commands, console encoding |
| [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) | 13 | Maintainer decision queue for RFCs/design issues |
| [#8832](https://github.com/zeroclaw-labs/zeroclaw/issues/8832) | 9 | Plugin-owned Kanban board for agent work |
| [#9101](https://github.com/zeroclaw-labs/zeroclaw/issues/9101) | 9 | Consolidate release attestation mechanisms |
| [#6653](https://github.com/zeroclaw-labs/zeroclaw/issues/6653) | 7 | Host-architecture policy for emulated installs |
| [#7929](https://github.com/zeroclaw-labs/zeroclaw/issues/7929) | 7 | Unify slash-command registries across web/TUI/channel |
| [#5316](https://github.com/zeroclaw-labs/zeroclaw/issues/5316) | 6 | SearXNG configuration and web-search recovery |
| [#6998](https://github.com/zeroclaw-labs/zeroclaw/issues/6998) | 6 | Schema-validated memory consolidation |
| [#5907](https://github.com/zeroclaw-labs/zeroclaw/issues/5907) | 6 | Opt-in LSP support for ZeroCode |
| [#9207](https://github.com/zeroclaw-labs/zeroclaw/issues/9207) | 5 | `web_fetch` garbage for compressed responses |

### Underlying needs

- **Windows users are underserved**: most discussion centers on making tests, installers, and path semantics work off-Linux.
- **Maintainers are being asked for more governance transparency**: the RFC/decision tracker and RFC voting protocol PR show community interest in process.
- **Agent power-users want better work coordination**: Kanban boards, slash-command consistency, LSP support, and memory reliability are recurring themes.
- **Security/ops contributors want fewer parallel mechanisms**: release attestation, dependency advisories, and policy gates are hot areas.

---

## 5. Bugs & Stability

### Workflow-blocking / S1

- [Issue #9207](https://github.com/zeroclaw-labs/zeroclaw/issues/9207) — `web_fetch` returns garbage for gzip/brotli/deflate responses. **S1, p1, in-progress.** No fix PR visible in the top PR set.
- [Issue #7527](https://github.com/zeroclaw-labs/zeroclaw/issues/7527) — macOS desktop app can reopen blank or without a window. **S1, p1, needs repro.**
- [Issue #9290](https://github.com/zeroclaw-labs/zeroclaw/issues/9290) — Windows desktop installer fails at launch with missing `TaskDialogIndirect`. **S1, p1, open.**
- [Issue #9340](https://github.com/zeroclaw-labs/zeroclaw/issues/9340) — CLI-created cron jobs silently discard output. **p1, closed today.**

### Degraded behavior / S2

- [Issue #7462](https://github.com/zeroclaw-labs/zeroclaw/issues/7462) — 74 test failures on Windows; CI only runs Linux. **S2, p1, open.** Related CI gap tracked in [#7461](https://github.com/zeroclaw-labs/zeroclaw/issues/7461).
- [Issue #9796](https://github.com/zeroclaw-labs/zeroclaw/issues/9796) — invalid cron help examples. **S2, p2, closed.**

### Minor / S3

- [Issue #9198](https://github.com/zeroclaw-labs/zeroclaw/issues/9198) — Discord typing indicator stuck after daemon reload. **S3, p2, accepted.**
- [Issue #9202](https://github.com/zeroclaw-labs/zeroclaw/issues/9202) — `zeroclaw desktop` uses dead download URL and doesn’t detect installed AppImage. **S3, p2, in-progress.**

### Security / dependency stability

- [Issue #9899](https://github.com/zeroclaw-labs/zeroclaw/issues/9899) — `cargo deny` is blocked by `RUSTSEC-2026-0247` (`bitmaps 3.2.1` via Matrix SDK dev-dependencies). **p1, blocked.**
- [Issue #9101](https://github.com/zeroclaw-labs/zeroclaw/issues/9101) — three parallel release signing/provenance mechanisms shipped in v0.8.3; consolidation is accepted but not yet implemented.

---

## 6. Feature Requests & Roadmap Signals

### Accepted / strongly signaled features

- [Issue #9101](https://github.com/zeroclaw-labs/zeroclaw/issues/9101) — **Consolidate release attestation** into one signing story. p1, accepted, likely near-term release work.
- [Issue #9644](https://github.com/zeroclaw-labs/zeroclaw/issues/9644) — **Retire the Lucid memory connector at v0.9.0**. Explicit version target.
- [Issue #8832](https://github.com/zeroclaw-labs/zeroclaw/issues/8832) — **Plugin-owned Kanban board** for agent work. p2, accepted.
- [Issue #7929](https://github.com/zeroclaw-labs/zeroclaw/issues/7929) — **Unify slash-command registries** across web UI, ZeroCode TUI, and channel runtime. p2, accepted.
- [Issue #6998](https://github.com/zeroclaw-labs/zeroclaw/issues/6998) — **Schema-validated memory consolidation** with bounded fallback. p2, needs maintainer review.
- [Issue #5316](https://github.com/zeroclaw-labs/zeroclaw/issues/5316) — **SearXNG support** and web-search failure recovery. p2, accepted.
- [Issue #5907](https://github.com/zeroclaw-labs/zeroclaw/issues/5907) — **LSP support for ZeroCode coding workflows**. p2, needs author action.
- [Issue #7461](https://github.com/zeroclaw-labs/zeroclaw/issues/7461) — **Run test suite on Windows and macOS in CI**. p2, accepted.

### Likely next-version candidates

- v0.9.0 is already referenced by the Lucid memory retirement plan.
- The current open feature PRs — [Hailo-Ollama provider support](https://github.com/zeroclaw-labs/zeroclaw/pull/9109), [Langfuse observer](https://github.com/zeroclaw-labs/zeroclaw/pull/9556), [KeySource secret trait](https://github.com/zeroclaw-labs/zeroclaw/pull/9194), and [herdr agent reporting](https://github.com/zeroclaw-labs/zeroclaw/pull/8337) — are strong signals for the next release.

---

## 7. User Feedback Summary

- **Windows users are the most vocal pain-point group**: Chinese-locale console code page 936 produces 74 test failures, the desktop installer fails on `TaskDialogIndirect`, and the macOS desktop app can lose its window entirely.
- **Agent users report real workflow blockers**: `web_fetch` cannot parse compressed responses from common sites, and CLI-created cron jobs run successfully while discarding all output.
- **Channel reliability issues**: Discord users see a permanently stuck typing indicator after dashboard daemon reload.
- **Power users are requesting developer-experience upgrades**: LSP support, SearXNG as a privacy search provider, unified slash commands, and a Kanban coordination surface.
- **No explicit satisfaction data is present**, but the number of accepted p1/p2 issues and quick closures around cron/help/WeChat/browser issues suggests maintainers are responding to community pressure.

---

## 8. Backlog Watch

Items that need maintainer attention or have been waiting longest:

- [Issue #5907](https://github.com/zeroclaw-labs/zeroclaw/issues/5907) — LSP support. Created 2026-04-19, p2, `needs-author-action`.
- [Issue #6653](https://github.com/zeroclaw-labs/zeroclaw/issues/6653) — Host-architecture policy for emulated installs. Created 2026-05-14, p3, `needs-author-action`.
- [Issue #6998](https://github.com/zeroclaw-labs/zeroclaw/issues/6998) — Schema-validated memory consolidation. Created 2026-05-29, p2, `needs-maintainer-review`.
- [Issue #8367](https://github.com/zeroclaw-labs/zeroclaw/issues/8367) — Derived capability readiness for agent guidance. Created 2026-06-26, p3, `blocked`.
- [Issue #9899](https://github.com/zeroclaw-labs/zeroclaw/issues/9899) — RUSTSEC-2026-0247 `bitmaps` advisory waiver. Created 2026-08-10, p1, `blocked`; currently failing Security CI.
- [PR #9002](https://github.com/zeroclaw-labs/zeroclaw/pull/9002) — Keep agent turns alive after viewer disconnect. p1, `needs-maintainer-review`.
- [PR #9694](https://github.com/zeroclaw-labs/zeroclaw/pull/9694) — Expose SOP pane as read-only status view. `needs-maintainer-review`.
- [Issue #8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) — The maintainer decision queue itself should be used to unblock the RFCs and design issues above.

---

**Overall assessment:** ZeroClaw is shipping steady fixes, but Windows support, security-advisory debt, and maintainer review capacity are the main risks to project health. The next release is likely to focus on release-attestation consolidation, CI platform parity, and memory/cron reliability fixes.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/boom7sss/agents-radar).*