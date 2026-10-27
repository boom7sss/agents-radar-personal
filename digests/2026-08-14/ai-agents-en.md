# OpenClaw Ecosystem Digest 2026-08-14

> Issues: 486 | PRs: 500 | Projects covered: 13 | Generated: 2026-08-14 02:26 UTC

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

# OpenClaw Project Digest — 2026-08-14

## 1. Today's Overview

OpenClaw is in a period of very high activity: 486 issues and 500 PRs were updated in the last 24 hours, with 162 issues and 126 PRs closed/merged. No new releases were published. The most prominent theme remains **message-delivery reliability**, led by issue #121058 (92 comments) reporting that silent reply failures persist even after a previous fix was closed. In parallel, the PR pipeline shows heavy investment in the **memory subsystem** (multiplayer memory authorization contract, phase 1C read isolation) and a steady stream of mobile/web UI fixes. Overall, the project is highly active and responsive, but carries a significant backlog of P1 bugs around message loss, session-state corruption, and auth-provider timeouts that are eroding user trust.

## 2. Releases

None. Zero new releases were published in the reporting period.

## 3. Project Progress

126 PRs were merged/closed in the last 24 hours. Notable visible closures and shipped fixes:

- **#122344 (closed)** — `fix(models): make picker discovery profile-aware`: OpenAI live model discovery now follows runtime auth-profile order and associates each model with the profile that authorized it.
- **#91283 (closed, security)** — `minSecurity inverted`: the rank-order bug that treated `"full"` as the most restrictive security mode was fixed.
- **#121605 (closed, P1 regression)** — model fallback from claude-cli produced a reply that was never delivered; reported as fixed.
- **#91456 (closed, P1)** — Telegram DM lane could remain guarded after send timeout; fixed.
- **#105342 (closed)** — all `exec` command outputs rendered as images on Telegram; fixed back to text.
- **#42273 (closed, already-fixed)** — `backup create` stalling on 4GB+ installations.
- **#44431 (closed)** — browser tool field-test improvements (CSS selector support and 6 other items) were triaged.

Active high-signal PRs advancing features (open, awaiting review):

- **#121421 / #121422 / #121423 / #121945** — multiplayer memory design doc, plugin-SDK memory authorization contract, shadow-mode authorization inspection, and Phase 1C read isolation. This is a coordinated rollout toward memory security.
- **#123402** — opt-in Anthropic server-side compaction (`compact-2026-01-12`), avoiding client-side prompt rewrites that burn prompt caches.
- **#123216** — authenticated egress substitution proxy with destination binding for `secret`-kind stores, enabling agent-spawned tools (`curl`, `gh`) to authenticate.
- **#123424** — legacy-`main` session migration engine, preparing for future named-agent onboarding.
- **#123426** — backport of Slack global-settings/monitor-state fixes to the `2026-07-31` branch.

## 4. Community Hot Topics

- **[#121058 — Silent reply failures still recurring (92 comments)](https://github.com/openclaw/openclaw/issues/121058)** — The most active issue by far. Users report that monitoring cron still logs failures after #116277 was closed, indicating an incomplete fix. No linked fix PR.
- **[#7707 — Feature: Memory Trust Tagging by Source (48 comments)](https://github.com/openclaw/openclaw/issues/7707)** — Long-running request to tag memory by origin (user commands vs. web scrapes vs. third-party skills) to prevent memory poisoning. Stuck in maintainer/product/security review since February.
- **[#25592 — Text between tool calls leaks to messaging channels (48 comments)](https://github.com/openclaw/openclaw/issues/25592)** — Internal processing output/narration is being sent as visible Slack/iMessage messages. Users consider this a significant UX and privacy problem.
- **[#44925 — Subagent completion silently lost (27 comments)](https://github.com/openclaw/openclaw/issues/44925)** — Three distinct failure patterns where subagent results vanish with no retry, notification, or restart.
- **[#121953 — Cron agent stalls on DeepSeek (16 comments)](https://github.com/openclaw/openclaw/issues/121953)** — The `[cron:<jobId> <name>]` user-message prefix is deprioritized by DeepSeek's API edge, causing tens-of-seconds to minutes of stalls.

**Analysis:** The underlying need across the hottest threads is **trust**: users cannot rely on replies being delivered, subagent work surviving, or internal text staying private. The recurring nature of #121058 is particularly damaging to confidence.

## 5. Bugs & Stability

Ranked by severity and community impact:

**Critical / High**
- **[#121058](https://github.com/openclaw/openclaw/issues/121058)** — Silent reply failures recurring after previous fix; 92 comments; no fix PR.
- **[#121953](https://github.com/openclaw/openclaw/issues/121953)** — Cron agent turns stall on DeepSeek for tens of seconds to minutes (P1).
- **[#43367](https://github.com/openclaw/openclaw/issues/43367)** — Multi-agent orchestration unstable: concurrent `agents add` overwrites config, session-lock failures, detached child work (P1, 13 comments).
- **[#67777](https://github.com/openclaw/openclaw/issues/67777)** — Subagent completion delivery lost on direct-announce timeout, drain, or orphan prune (P1).
- **[#47975](https://github.com/openclaw/openclaw/issues/47975)** — Subagent sessions persist after completion; main session becomes unresponsive (P1).
- **[#91363](https://github.com/openclaw/openclaw/issues/91363)** — Isolated cron jobs consistently fail with "LLM request failed" at model-call-started phase; requests never reach provider (P1, 6 👍).
- **[#97983](https://github.com/openclaw/openclaw/issues/97983)** — iOS/WebChat messages append to transcript but never trigger assistant replies (P1, maturity:stable).
- **[#89278](https://github.com/openclaw/openclaw/issues/89278)** — Codex OAuth refresh succeeds but cron/heartbeat fail with 10s auth refresh timeout (P1, regression).
- **[#72015](https://github.com/openclaw/openclaw/issues/72015)** — `active-memory` plugin blocks replies; QMD boot initialization can overload multi-agent gateways (P1, crash-loop).
- **[#123073](https://github.com/openclaw/openclaw/issues/123073)** — NEW Aug 13: dev-channel `openclaw update` fails with `EUNSUPPORTEDPROTOCOL` on `workspace:*` because the updater uses npm while the repo requires pnpm (P1, stable, fix-shape-clear).

**Medium**
- **[#97616](https://github.com/openclaw/openclaw/issues/97616)** — Unreaped hook/tool child processes cause zombie accumulation and runtime degradation (P1, regression).
- **[#111498](https://github.com/openclaw/openclaw/issues/111498)** — Main agent blocked by persistent legacy workspace-state migration after Anthropic auth recovery (P1).
- **[#114612](https://github.com/openclaw/openclaw/issues/114612)** — SQLite unbounded growth in `memory_index_chunks` / `memory_embedding_cache` with no retention policy (P2).
- **[#107814](https://github.com/openclaw/openclaw/issues/107814)** — `gpt-5.3-codex-spark` emits empty argument objects for required tool calls, rejected by schema validation (P2).

**Fix PRs in flight:** [#122517](https://github.com/openclaw/openclaw/pull/122517) prevents cross-channel exec approval leak to Telegram (fixes #122495); [#122705](https://github.com/openclaw/openclaw/pull/122705) clears stale CLI binding after manual compaction (fixes #84593); [#123253](https://github.com/openclaw/openclaw/pull/123253) fixes automation badge never updating due to `sessions.list` cache fence.

## 6. Feature Requests & Roadmap Signals

Strongest roadmap signals come from the PR queue rather than issues:

- **Memory security & multi-agent memory** — The #121421/#121422/#121423/#121945 PR family is building a versioned authorization contract, shadow-mode inspection, and Phase 1C read isolation. This directly addresses the long-standing **[#7707 Memory Trust Tagging](https://github.com/openclaw/openclaw/issues/7707)** request and is the most likely feature cluster to ship next.
- **Anthropic server-side compaction** ([#123402](https://github.com/openclaw/openclaw/pull/123402)) — Opt-in `compact-2026-01-12` to replace client-side compaction; would improve long-session reliability and prompt-cache warmth.
- **Secrets for spawned tools** ([#123216](https://github.com/openclaw/openclaw/pull/123216)) — Egress substitution proxy with destination binding, letting agent-spawned `curl`/`gh` authenticate.

Other user-requested features with active interest, likely candidates for upcoming versions:

- **[#45758 — YAML config format](https://github.com/openclaw/openclaw/issues/45758)** (8 comments, 2 👍)
- **[#9016 — Expose OpenRouter usage cost to agent runtime](https://github.com/openclaw/openclaw/issues/9016)** (7 comments)
- **[#45508 — Self-hosted STT/TTS in webchat](https://github.com/openclaw/openclaw/issues/45508)** (7 comments, 2 👍)
- **[#16555 — TTL/expiry for delivery queue messages](https://github.com/openclaw/openclaw/issues/16555)** (6 comments) — directly relevant to the recurring message-loss theme.
- **[#45771 — Pace-aware rate limiting](https://github.com/openclaw/openclaw/issues/45771)** (6 comments, 2 👍)
- **[#79165 — Graduated crash recovery ladder](https://github.com/openclaw/openclaw/issues/79165)** (6 comments)

## 7. User Feedback Summary

- **Dominant pain point: silent, unrecoverable message loss.** Subagent completion loss, model-fallback replies that never deliver, and recurring silent failures dominate the most-commented issues. Users express frustration that issues marked fixed recur in production.
- **Memory behavior feels inconsistent.** [#43747](https://github.com/openclaw/openclaw/issues/43747) ("Memory management is in chaos") reports three users on the same project seeing completely different storage behaviors (SQLite chunking vs. other paths), with no unified model.
- **Multi-agent setups are not production-trustworthy.** Field reports like [#43367](https://github.com/openclaw/openclaw/issues/43367) describe config overwrites and session-lock failures during ordinary parallel coding batches.
- **Provider edge cases bite real users.** DeepSeek cron stalls (#121953), Codex OAuth 10s timeouts (#89278), and OpenAI empty tool arguments (#107814) show that provider-specific behavior is a recurring source of regressions.
- **Positive signals:** Long-standing bugs are being closed as fixed (backup, Telegram DM lane, exec output rendering, minSecurity inversion), and the mobile/web UI fix cadence is healthy (dark-mode WebView, deep-link handling, composer scroll behavior, desktop-button session targeting).
- **Dev-channel users hit a hard break**: [#123073](https://github.com/openclaw/openclaw/issues/123073) blocks `openclaw update` entirely on `dev` due to a pnpm/npm mismatch.

## 8. Backlog Watch

Issues and PRs that have been waiting for maintainer/product/security decisions for an extended period or are otherwise stalled:

- **[#7707 — Memory Trust Tagging (Feb 3, 48 comments)](https://github.com/openclaw/openclaw/issues/7707)** — Flagged `needs-maintainer-review`, `needs-product-decision`, `needs-security-review` for over 6 months. Now arguably being addressed indirectly by the memory authorization PRs.
- **[#25592 — Text between tool calls leaks to channels (Feb 24, 48 comments)](https://github.com/openclaw/openclaw/issues/25592)** — P1, 1 👍, still awaiting maintainer/product/security review.
- **[#44925 — Subagent completion silently lost (Mar 13, 27 comments, 2 👍)](https://github.com/openclaw/openclaw/issues/44925)** — P1 with no linked fix PR; closely related to #67777 and #92433, suggesting a systemic subagent-dispatch problem.
- **[#91363 — Isolated cron consistently fails (Jun 8, 10 comments, 6 👍)](https://github.com/openclaw/openclaw/issues/91363)** — P1 with notable community upvotes; no fix PR linked.
- **[#97983 — iOS/WebChat messages don't trigger replies (Jun 30, 9 comments, 2 👍)](https://github.com/openclaw/openclaw/issues/97983)** — P1, `maturity:stable`, source repro available; no fix PR.
- **[#43747 — Memory management chaos (Mar 12, 11 comments)](https://github.com/openclaw/openclaw/issues/43747)** — Needs live repro and product decision; touches the same memory subsystem the PRs are now reworking.
- **[#123073 — dev-channel update EUNSUPPORTEDPROTOCOL (Aug 13)](https://github.com/openclaw/openclaw/issues/123073)** — New but `queueable-fix` and `fix-shape-clear`; blocks all dev-channel users from updating and should be prioritized.

**PRs awaiting author/maintainer action:** [#121945](https://github.com/openclaw/openclaw/pull/121945) and [#121423](https://github.com/openclaw/openclaw/pull/121423) (memory, waiting on author); [#123421](https://github.com/openclaw/openclaw/pull/123421) (hide unowned host catalogs on multi-user gateways) needs proof; [#122705](https://github.com/openclaw/openclaw/pull/122705) (CLI binding after compaction) needs proof.

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report — AI Agent / Personal Assistant Open-Source Ecosystem
**Reporting window:** 2026-08-13 → 2026-08-14 | **Projects analyzed:** 13

---

## 1. Ecosystem Overview

The personal AI assistant open-source landscape remains fragmented but highly active: seven of thirteen tracked projects saw meaningful daily activity, and three shipped releases in the window (Hermes v0.20.1, NanoClaw v2.2.0, IronClaw v1.2.0, CoPaw v2.1.0). The field is consolidating around a shared reliability struggle — silent message loss, session-state corruption, and context-compaction bugs dominate user complaints across every active project. Memory is rapidly becoming a platform-level concern (authorization, isolation, cost), rather than a bolt-on feature. Security hardening is also accelerating: supply-chain pinning, CSPRNG fixes, and egress/proxy controls landed concurrently in multiple repos. Notably, three "Claw" ecosystem projects (NullClaw, TinyClaw, ZeptoClaw) show zero activity, suggesting the branded-fork space is shaking out while the core reference project and a few differentiated peers absorb most contributor energy.

---

## 2. Activity Comparison

*Health score = composite of issue/PR responsiveness, fix velocity, release cadence, and unresolved-severity burden (1–10).*

| Project | Issues (24h) | PRs (24h) | Releases | Health | Notes |
|---|---|---|---|---|---|
| **OpenClaw** | 486 | 500 | None | 7/10 | Extreme volume; 126 PRs merged; recurring P1 delivery bugs erode trust |
| **Hermes Agent** | 50 | 50 | **v0.20.1** | 6/10 | Release shipped; P1 desktop gateway-reaping cluster (5 reports) has no fix PR |
| **IronClaw** | 50 | 50 | **v1.2.0** | 8/10 | Stable promotion; reborn architecture epic driving clear milestones |
| **ZeroClaw** | 50 | 50 | None | 7/10 | High-quality RFC/security work; maintainer decision queue is bottleneck |
| **CoPaw (QwenPaw)** | 46 | 50 | **v2.1.0** + beta.5 | 7/10 | OS Shell shipped; 2.1.0 regression cluster (wrong-session save, TUI failure) |
| **NanoBot** | 11 | 31 | None | 8/10 | Fastest fix turnaround; security advisory closed; fixes PR'd same-day |
| **NanoClaw** | 2 | 19 | **v2.2.0** | 8/10 | Focused release; supply-chain gates + CSPRNG fix landed quickly |
| **LobsterAI** | 2 | 10 | None | 5/10 | UI work merged; safety-critical test PRs stale since March |
| **PicoClaw** | 2 | 9 | None | 5/10 | Dependabot churn only; Web UI lag bug unaddressed ~3 weeks |
| **Moltis** | 1 | 4 | None | 5/10 | Good connector PR pending; zero merges in window |
| **NullClaw** | 0 | 0 | None | 2/10 | No activity |
| **TinyClaw** | 0 | 0 | None | 2/10 | No activity |
| **ZeptoClaw** | 0 | 0 | None | 2/10 | No activity |

---

## 3. OpenClaw's Position

**Advantages.**
- **Community scale:** ~10x the daily issue/PR volume of the next tier (486 issues / 500 PRs vs. ~50/50 for Hermes, IronClaw, ZeroClaw). This is the ecosystem's clear center of gravity.
- **Merge velocity:** 126 PRs merged/closed in 24 hours — the most responsive pipeline in the ecosystem, covering models, security, backup, and mobile/Web UI.
- **Platform-level memory roadmap:** the multiplayer memory authorization contract + Phase 1C read isolation PR family (#121421/#121422/#121423/#121945) addresses memory security more systematically than any peer. No other project has a versioned memory-authorization contract in flight.
- **Broad channel coverage + profile-aware model discovery** — the most production-complete messaging integration surface in the field.

**Technical approach differences.** OpenClaw operates as a unified, high-throughput monorepo (npm/pnpm-based tooling) treating messaging reliability as the core product surface, with a plugin SDK and centralized memory governance. In contrast: Hermes invests in desktop-app and voice-stack depth; IronClaw is re-architecting toward a harness-agnostic "kernel" with pluggable agent loops (Claude Code, codex, pi); ZeroClaw is RFC-driven with WASM-style plugin and policy contracts; CoPaw is an end-user desktop OS-shell experience.

**Community size comparison.** OpenClaw's daily activity is roughly 10× Hermes/IronClaw/ZeroClaw and ~16× NanoBot's PR flow. Its "Claw" naming lineage is visible across PicoClaw, NanoClaw, NullClaw, TinyClaw, ZeptoClaw, and ZeroClaw — but three of those derivatives are now inactive, indicating that **forks without a differentiated thesis are not surviving** while OpenClaw itself continues to absorb contributor volume.

**Key risk:** the recurring silent-reply-failure issue (#121058, 92 comments, no linked fix) is the single most damaging trust item in the ecosystem. Volume without durable reliability will push power users toward smaller, more dependable projects (NanoBot's responsiveness is a direct contrast).

---

## 4. Shared Technical Focus Areas

Requirements emerging independently across multiple projects:

1. **Delivery / execution reliability guarantees** — OpenClaw (silent reply failures #121058, subagent loss #44925/#67777), Hermes (gateway reaping on desktop restart #83683), NanoBot (cron scheduler permanent death #5373), CoPaw (agents stalling mid-task #6921). *Users demand: no silent loss, no permanent scheduler death, no orphaned gateways.*

2. **Memory as a governed, cost-aware subsystem** — OpenClaw (authorization contract, trust tagging #7707), IronClaw (#7185 cross-conversation recall failures), ZeroClaw (memory lifecycle RFC #6850), NanoBot + CoPaw (independent ViBo proposals for cheaper persistent memory, #5372/#7003), LobsterAI (untested memory modules #1162). *Users demand: isolation, provenance, predictable cost, and recall reliability.*

3. **Context-compaction correctness** — CoPaw (tool_call structure destroyed during compaction #5856; transcript hidden by eviction indices #6951), NanoBot (consolidation truncation losing suffixes #5377; file-cap archival mutating live session #5378), OpenClaw (fallback reply never delivered after claude-cli compaction). *Users demand: compaction must be model-input-only, never destroy user-visible state.*

4. **Supply-chain and runtime security hardening** — NanoClaw (Telegram pairing CSPRNG #3229, agent-image attestation), NanoBot (exec.allowPatterns shell-chain bypass #5306), ZeroClaw (filesystem containment #9969, provider JWT fail-closed #9968, SSRF gate #8713), Hermes (KittenTTS wheel SHA-256 pinning #82891). *Common pattern: agent runtimes are being held to production security standards.*

5. **Provider-agnostic resilience** — OpenClaw (DeepSeek cron stalls #121953; OpenAI empty tool args #107814), Hermes (DeepSeek title-generation 400s #83390), CoPaw (Bailian token-plan demand #6973), ZeroClaw (Zhipu JWT handling), IronClaw (NEAR AI Cloud Sonnet-5 500s). *Users demand: fail-closed behavior, per-provider quirks absorbed by the platform.*

6. **Interoperability / migration / escape-velocity** — CoPaw (Pawport: import from Codex/Qoder #6960), IronClaw (ACP harness executor, CLI ACP serve #7513), OpenClaw (legacy-main session migration #123424), ZeroClaw (portable agent bundle export #9986), Moltis (connector data portability #1190). *Users increasingly want to move agents, configs, and session history between tools.*

7. **MCP schema and auth ergonomics** — NanoBot (budgeted MCP schemas #5298; MCP Apps metadata #5251), IronClaw (custom MCP auth hangs #7626), OpenClaw (authenticated egress proxy for spawned tools #123216), LobsterAI (unified skills/MCP UI). *Large tool sets are too context-expensive; authenticated MCP flows are broken in practice.*

---

## 5. Differentiation Analysis

| Project | Primary focus | Target user | Architectural signature |
|---|---|---|---|
| **OpenClaw** | Messaging-first personal agent, multi-agent orchestration | Power users, self-hosters, automation builders | Unified monorepo, plugin SDK, memory authorization contracts, massive channel matrix |
| **Hermes Agent** | Desktop app + voice (STT/TTS) + messaging gateways | Desktop-centric prosumers; macOS/Windows | Native desktop, Whisper/MiniMax voice stack, bundled skills, patch-release discipline |
| **IronClaw** | Harness-agnostic agent kernel ("reborn") | Cloud/platform operators (NEAR AI Cloud), OSS harness users | Kernel/scheduler separating agent loop from infrastructure; Postgres-backed; ACP executor |
| **ZeroClaw** | Architecture/security-first agent platform | Security-conscious operators, RFC-driven communities | WASM plugin contracts, verifiable intent, SOP policy, lettered release trains |
| **CoPaw (QwenPaw)** | End-user desktop "OS shell" agent experience | Consumer/power users, especially Chinese Windows/mobile users | Desktop shell (windows, taskbar, launcher), Qwen-ecosystem alignment, app catalog |
| **NanoBot** | Balanced agent platform with strong WebUI/Telegram/Matrix | Hobbyists to production deployments | Fast-fix Python-style maintainer culture, broad integrations (MCP, Matrix, Telegram) |
| **NanoClaw** | Agent-group orchestration & templating | Teams/operators using OneCLI and external orchestration | Template-stamped agent groups, CI supply-chain gates, `ncl` CLI |
| **LobsterAI** | Renderer/desktop UI + enterprise features | Chinese enterprise users | Electron-style renderer consolidation, skills/MCP unified views, scheduled tasks |
| **PicoClaw** | Lightweight Go agent runtime | Embedded/board developers (Sipeed) + minimal self-hosters | Go SDK stack, minimal footprint |
| **Moltis** | Durable connectors and channel history | Local-first teams, data-portability seekers | Provider-neutral persistence, CalDAV/message-history datasets, sandbox builds |
| **NullClaw / TinyClaw / ZeptoClaw** | (Undifferentiated forks) | — | No observed activity |

---

## 6. Community Momentum & Maturity

**Tier 1 — Rapid iteration, ecosystem-defining (OpenClaw, Hermes, IronClaw, ZeroClaw, CoPaw):** 50+ daily issues/PRs each. OpenClaw leads on raw throughput and merge velocity but carries the largest unresolved P1 burden. IronClaw is the most strategically coherent — shipping v1.2.0 while decomposing the reborn architecture into concrete, gated work items. ZeroClaw has the deepest RFC/security culture but is throttled by its own maintainer-review queue. CoPaw is iterating fastest on end-user surface area (OS Shell, import flows) at the cost of 2.1.0 regressions. Hermes shipped a consolidation patch but is firefighting a cross-platform P1 regression cluster.

**Tier 2 — Healthy, responsive, smaller (NanoBot, NanoClaw):** NanoBot deserves a special note — the best fix-response ratio in the ecosystem (security advisory closed, cron-death fix PR'd the same day). NanoClaw demonstrates disciplined release engineering (v2.2.0) and supply-chain hardening despite a small issue count.

**Tier 3 — Maintenance mode / backlog risk (LobsterAI, PicoClaw, Moltis):** LobsterAI merges UI work but leaves safety-critical test PRs stale for 4+ months. PicoClaw shows dependabot churn only. Moltis has a substantial connector feature pending with zero review activity.

**Dormant:** NullClaw, TinyClaw, ZeptoClaw — no activity; effectively dead forks.

**Net:** the ecosystem is bifurcating between a handful of high-throughput, well-differentiated projects and a long tail of stalled derivatives. Contributor attention is concentrating in OpenClaw, the architecture-led projects (IronClaw, ZeroClaw), and end-user-experience projects (CoPaw, Hermes).

---

## 7. Trend Signals

1. **Reliability is the new feature.** The top complaint across all active projects is silent, unrecoverable failure — messages, subagent completions, cron jobs, gateway processes. For agent developers, this means **delivery receipts, retry/backoff, and crash-recovery ladders are table stakes**, not future roadmap items (OpenClaw #79165, Hermes #71023, NanoBot #5373).

2. **Memory is moving to a governed platform layer.** The convergence is striking: two independent ViBo proposals, OpenClaw's authorization-contract PR family, ZeroClaw's lifecycle-policy RFC, IronClaw's recall failures. **Expect memory to become contract-driven** — with origin tagging, read-isolation, TTL, and per-source trust — in the next two quarters.

3. **Context compaction is a correctness hazard.** Five distinct bugs across three projects involve flattening, truncating, or losing structured data during compaction/consolidation. **Compaction must be treated as a data-integrity operation** — schema-preserving, transactional, and never user-visible-destructive.

4. **Security posture is industrializing.** The window saw CSPRNG replacement, attestation-verified image pins, shell-chain bypass closures, filesystem containment, SSRF gates, and fail-closed provider JWT handling. **Agent frameworks are adopting traditional platform security models** (supply-chain, egress control, least privilege) — developers should expect these as defaults, not opt-ins.

5. **Provider fragmentation demands abstraction layers.** DeepSeek, Zhipu, Bailian, OpenRouter, and OpenAI each broke something different this week. **A provider-agnostic routing/fallback layer with per-provider quirks handling is now a core requirement**, not a nice-to-have.

6. **Interoperability and exit velocity are rising in priority.** IronClaw's ACP executor, CoPaw's Pawport import, OpenClaw's session-migration engine, and ZeroClaw's portable bundles all point to one demand: **agents and their history must be portable across harnesses.** Building for a single runtime is becoming a competitive liability.

7. **Cost visibility is a user-visible pain point.** OpenRouter prompt-cache savings, MCP schema byte-budgets, usage-cost exposure, and heartbeat model overrides all surfaced concurrently. **Token-cost transparency and budget controls will differentiate agent products** in the next release cycle.

---

**Bottom line for decision-makers:** OpenClaw remains the ecosystem's center of gravity but its trust deficit around silent failures is the industry's clearest opportunity. NanoBot and IronClaw are the most reliably executing projects per unit of activity. The strategic bets to watch are IronClaw's pluggable-loop kernel, OpenClaw's memory-authorization rollout, and the emerging portable-agent/interop layer across CoPaw, ZeroClaw, and IronClaw.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

## 1. Today's Overview

NanoBot is in a high-activity maintenance and feature-development cycle. In the 24h window ending 2026-08-14, 11 issues were updated (10 open/active, 1 closed) and 31 PRs were updated (22 open, 9 closed/merged), with **no new releases**. The dominant theme is reliability: several bugs around cron scheduler resilience, session persistence, and consolidation were reported and quickly met with fix PRs. At the same time, feature work continues across the WebUI, Telegram, MCP, and Matrix integrations. The closure of the `exec.allowPatterns` security issue and the rapid iteration on the cron failure fix indicate a responsive maintainer process and signs of a healthy project.

## 2. Releases

**None.** No new NanoBot releases were published in this window. Several bug-fix and feature PRs are pending review, so a release in the near term is likely but not yet available.

## 3. Project Progress

Among the 9 closed/merged PRs updated in this period, the following are visible in the provided data:

- [PR #5381](https://github.com/HKUDS/nanobot/pull/5381) — **feat(webui): add native workspace folder picker** — closed. Adds native macOS/Windows/Linux folder selection for locally hosted WebUI sessions, preferring local loopback/Desktop runtime usage.
- [PR #5384](https://github.com/HKUDS/nanobot/pull/5384) — **fix(webui): restore transcript-only session history** — closed. Re-enables opening/deleting persisted display transcripts when the canonical session JSONL is missing.
- [PR #5374](https://github.com/HKUDS/nanobot/pull/5374) and [PR #5375](https://github.com/HKUDS/nanobot/pull/5375) — **fix(cron): keep scheduler alive when job-store persistence fails** — both closed. Likely superseded by the open [PR #5376](https://github.com/HKUDS/nanobot/pull/5376).
- [PR #4556](https://github.com/HKUDS/nanobot/pull/4556) — **feat(dream): wire up model_override for Dream consolidation** — closed. Fixes [#4029](https://github.com/HKUDS/nanobot/issues/4029).
- [PR #4550](https://github.com/HKUDS/nanobot/pull/4550) — **fix(cron): use per-run session key to prevent context sharing across cron runs** — closed. Fixes [#4082](https://github.com/HKUDS/nanobot/issues/4082).

The security issue [Issue #5306](https://github.com/HKUDS/nanobot/issues/5306) also moved to closed during this window.

## 4. Community Hot Topics

Issue activity is broad rather than concentrated — each listed issue currently has at most 1 comment. The most active topics by attention and linked PR activity are:

- [Issue #5373](https://github.com/HKUDS/nanobot/issues/5373) — **Cron scheduler dies permanently after a single job-store persistence failure**. High-impact reliability bug with multiple follow-up PRs.
- [Issue #5306](https://github.com/HKUDS/nanobot/issues/5306) — **Security: `exec.allowPatterns` shell-chain bypass**. Closed security advisory, indicating a serious command-execution restriction bypass was addressed.
- [Issue #5298](https://github.com/HKUDS/nanobot/issues/5298) — **Budget model-visible MCP schemas for large tool sets**. Reflected in [PR #5388](https://github.com/HKUDS/nanobot/pull/5388).
- [Issue #5289](https://github.com/HKUDS/nanobot/issues/5289) — **Telegram sticker support and agent-initiated reactions**. Reflected in [PR #5387](https://github.com/HKUDS/nanobot/pull/5387).
- [Issue #5251](https://github.com/HKUDS/nanobot/issues/5251) — **MCP Apps host support in WebUI**. Reflected in [PR #5386](https://github.com/HKUDS/nanobot/pull/5386).
- [Issue #4841](https://github.com/HKUDS/nanobot/issues/4841) — **Matrix bot device appears untrusted, no SAS verification path**. A long-standing E2EE usability problem with a newly opened fix PR.

Underlying needs: users are pushing for stronger persistence guarantees, lower MCP context costs, richer Telegram/WebUI interactions, and trustworthy Matrix identity verification.

## 5. Bugs & Stability

Ranked by severity:

1. **Security / Critical — [Issue #5306](https://github.com/HKUDS/nanobot/issues/5306)**  
   `exec.allowPatterns` could be bypassed via shell chaining, allowing unintended command execution. **Closed** in this window. No release was published, so affected users should verify the fix is present in their installed version.

2. **High — [Issue #5373](https://github.com/HKUDS/nanobot/issues/5373)**  
   A single cron job-store persistence failure (disk full, permission change, locked file) permanently kills the cron scheduler. Fix PRs: [PR #5374](https://github.com/HKUDS/nanobot/pull/5374), [PR #5375](https://github.com/HKUDS/nanobot/pull/5375), and the still-open [PR #5376](https://github.com/HKUDS/nanobot/pull/5376).

3. **Medium-High — [Issue #5377](https://github.com/HKUDS/nanobot/issues/5377)**  
   Consolidation truncates archived input to the token budget but callers advance past the full message batch, losing suffixes. Fix PR: [PR #5379](https://github.com/HKUDS/nanobot/pull/5379).

4. **Medium — [Issue #5378](https://github.com/HKUDS/nanobot/issues/5378)**  
   File-cap archive failure mutates the live session before persistence, so a later successful save cannot recover the trimmed overflow. Fix PR: [PR #5380](https://github.com/HKUDS/nanobot/pull/5380).

5. **Medium — [PR #5382](https://github.com/HKUDS/nanobot/pull/5382)**  
   Fixes `os.replace()` crashes on Windows `[WinError 5] Access is denied` during heartbeat session saves.

6. **Medium — [Issue #4841](https://github.com/HKUDS/nanobot/issues/4841)**  
   Matrix bot device remains untrusted in Element due to missing cross-signing/SAS flow. Fix PR: [PR #5385](https://github.com/HKUDS/nanobot/pull/5385).

7. **Low — [Issue #5368](https://github.com/HKUDS/nanobot/issues/5368)**  
   WebUI shows copy/fork actions while an Agent turn is still running, creating conflicting completion signals. No fix PR yet.

8. **Test-stability — [PR #5349](https://github.com/HKUDS/nanobot/pull/5349)**  
   Fixes deterministic daily test failures caused by missing `timezone_name` in `record_token_usage`.

## 6. Feature Requests & Roadmap Signals

Several open feature PRs strongly signal what is likely to land in the next version:

- **MCP schema budgeting** — [Issue #5298](https://github.com/HKUDS/nanobot/issues/5298) proposes an opt-in byte budget for model-visible MCP schemas. [PR #5388](https://github.com/HKUDS/nanobot/pull/5388) implements this in a backward-compatible way, so it is a strong candidate for the next release.
- **Telegram stickers** — [Issue #5289](https://github.com/HKUDS/nanobot/issues/5289) and [PR #5387](https://github.com/HKUDS/nanobot/pull/5387) add reusable sticker replies and inbound sticker metadata.
- **MCP Apps metadata** — [Issue #5251](https://github.com/HKUDS/nanobot/issues/5251) and [PR #5386](https://github.com/HKUDS/nanobot/pull/5386) preserve MCP Apps result metadata without expanding model context.
- **Matrix SAS verification** — [Issue #4841](https://github.com/HKUDS/nanobot/issues/4841) and [PR #5385](https://github.com/HKUDS/nanobot/pull/5385) complete the Element SAS request flow.
- **WebUI polish** — [Issue #5366](https://github.com/HKUDS/nanobot/issues/5366) requests localization of Agent activity text, and [Issue #5368](https://github.com/HKUDS/nanobot/issues/5368) requests hiding copy/fork while a turn is running. Neither has a linked PR yet.
- **Session collaboration** — [PR #5358](https://github.com/HKUDS/nanobot/pull/5358) is an open feature for WebUI session collaboration via mentions; it may become a future roadmap item, but it is still open and labeled as conflicting.
- **Persistent memory / external integration** — [Issue #5372](https://github.com/HKUDS/nanobot/issues/5372) proposes ViBo for cross-session memory. This is a third-party proposal, but it signals user demand for persistent memory in agents.

## 7. User Feedback Summary

- **Reliability concerns are the loudest signal.** Users reported silent cron scheduler death after persistence failures ([#5373](https://github.com/HKUDS/nanobot/issues/5373)) and Windows-specific gateway crashes during session save ([PR #5382](https://github.com/HKUDS/nanobot/pull/5382)). The maintainer team responded quickly with targeted fixes.
- **Data integrity worries surfaced around session consolidation and file-cap archival.** [Issue #5377](https://github.com/HKUDS/nanobot/issues/5377) and [Issue #5378](https://github.com/HKUDS/nanobot/issues/5378) both describe scenarios where context can be silently lost. Fix PRs are already open, which should reassure users.
- **MCP context cost is a real pain point.** [Issue #5298](https://github.com/HKUDS/nanobot/issues/5298) shows that large MCP tool sets are too expensive model-visibly; users want deterministic, budgeted tool visibility.
- **Matrix users are blocked by trust UX.** [Issue #4841](https://github.com/HKUDS/nanobot/issues/4841) reports that the bot device is permanently “untrusted” in Element, with no bot-initiated SAS path.
- **WebUI users want clearer state and localization.** [Issue #5366](https://github.com/HKUDS/nanobot/issues/5366) and [Issue #5368](https://github.com/HKUDS/nanobot/issues/5368) reflect dissatisfaction with English-only agent activity and misleading completion signals.
- **Positive signal:** users are requesting and implementing native desktop-quality WebUI behavior, such as the native workspace folder picker ([PR #5381](https://github.com/HKUDS/nanobot/pull/5381)), which has already been closed as merged.

## 8. Backlog Watch

- [Issue #4841](https://github.com/HKUDS/nanobot/issues/4841) — **Matrix untrusted device / SAS verification**. Open since 2026-07-07. The new [PR #5385](https://github.com/HKUDS/nanobot/pull/5385) needs review and merge.
- [PR #4549](https://github.com/HKUDS/nanobot/pull/4549) — **feat(heartbeat): add model_override config**. Open since 2026-06-26, still unresolved. This could help users reduce heartbeat costs.
- [PR #4551](https://github.com/HKUDS/nanobot/pull/4551) — **feat(heartbeat): add isolated_session config**. Open since 2026-06-26, paired with #4549 and still pending maintainer decision.
- [PR #5349](https://github.com/HKUDS/nanobot/pull/5349) — **fix(tests): pass timezone_name to record_token_usage in settings tests**. Open since 2026-08-12; fixes a deterministic daily test failure and should be a low-risk merge.
- [PR #5383](https://github.com/HKUDS/nanobot/pull/5383), [PR #5358](https://github.com/HKUDS/nanobot/pull/5358), and [PR #5357](https://github.com/HKUDS/nanobot/pull/5357) — all remain open with **conflict** labels, meaning they need rebasing or maintainer attention before they can advance.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-08-14

## 1. Today's Overview

High-activity day for Hermes Agent: **50 issues** (47 open/active, 3 closed) and **50 PRs** (41 open, 9 merged/closed) were updated in the last 24 hours, culminating in a new stable patch release. The dominant theme is a **P1 regression cluster around desktop-app startup killing live messaging gateways** (5+ reports across Windows and macOS, all near-duplicates of issue #83683) that does not yet have a visible fix PR. In parallel, the project shows strong forward momentum in the voice stack (Whisper STT tuning, MiniMax TTS streaming, wake-word fixes), session-search correctness, and bundled skills (new Box skill). Release **v0.20.1 (v2026.8.13)** was tagged, rolling up ~656 PRs since v0.20.0 for downstream consumers.

---

## 2. Releases

### [v2026.8.13 — Hermes Agent v0.20.1](https://github.com/NousResearch/hermes-agent/releases/tag/v2026.8.13) (August 13, 2026)

A **patch release** that rolls up the ~656 PRs merged since v0.20.0 into a stable tagged release for downstream consumers (Docker images, hosted deployments, and `latest`-tag installs). No breaking changes or migration notes are called out for this patch; it primarily serves as a consolidation point for the long tail of fixes accumulated since v0.20.0.

---

## 3. Project Progress

Nine PRs were merged/closed in the last 24 hours. Notable closures:

- **[#67257](https://github.com/NousResearch/hermes-agent/pull/67257) / [#67251](https://github.com/NousResearch/hermes-agent/pull/67251) — fix: desktop crash on reasoning content (RangeError) + py39 compat + profile pin** (merged after ~4 weeks of review). This resolves a desktop launch crash caused by infinite recursion in `ReasoningTextPart` / the markdown lexer when rendering reasoning content from large sessions (v0.17.0-era bug).
- **[#84155](https://github.com/NousResearch/hermes-agent/pull/84155) — fix(desktop): persist dropped screenshot bytes before attach** — fixes macOS Finder screenshot drops that preview correctly but fail on submit with `image not found`.
- **[#85707](https://github.com/NousResearch/hermes-agent/issues/85707) — fix(cache): establish typed tool-schema boundary before `planned_tools[-1]`** — closes a type-normalization gap in the native tool-cache path.

**Open PRs advancing key areas** (updated today):
- **Voice/STT/TTS**: [#85773](https://github.com/NousResearch/hermes-agent/pull/85773) (configurable Whisper `beam_size` + startup prewarm), [#85772](https://github.com/NousResearch/hermes-agent/pull/85772) (honor `voice.silence_duration` in Desktop instead of hardcoded 1250 ms), [#85771](https://github.com/NousResearch/hermes-agent/pull/85771) (MiniMax chunked-PCM streaming TTS provider), [#85770](https://github.com/NousResearch/hermes-agent/pull/85770) (fix client-capture wake-word auto-arm after backend restart).
- **Agent correctness**: [#85769](https://github.com/NousResearch/hermes-agent/pull/85769) (normalize all provider cache/usage wire shapes in `normalize_usage`), [#85764](https://github.com/NousResearch/hermes-agent/pull/85764) (session-search recalls `/new`-reset sessions in current lineage), [#85768](https://github.com/NousResearch/hermes-agent/pull/85768) (accurate per-turn search-cap messaging).
- **Platforms**: [#85765](https://github.com/NousResearch/hermes-agent/pull/85765) (Discord progress edits preserve thread routing), [#85730](https://github.com/NousResearch/hermes-agent/pull/85730) (block per-profile gateways when `multiplex_profiles` is on).
- **Skills**: [#85767](https://github.com/NousResearch/hermes-agent/pull/85767) — new bundled **Box productivity skill** (salvages community PR #52107 by @iskysun96).
- **Security**: [#82891](https://github.com/NousResearch/hermes-agent/pull/82891) — pin KittenTTS wheel SHA-256 to refuse tampered third-party releases.

---

## 4. Community Hot Topics

Most-discussed items (by comment count), with underlying needs:

- **[#66616 — Skills index is stale or degraded](https://github.com/NousResearch/hermes-agent/issues/66616)** (25 comments) — Automated freshness probe reports the `/docs/skills` index is 29.8h old vs. the 26h limit. Signals that the docs/skills CI pipeline may need attention.
- **[#83683 — Desktop restart reaps the live gateway but never relaunches it](https://github.com/NousResearch/hermes-agent/issues/83683)** (20 comments, P1, Windows) — WeChat/QQ/Telegram go fully silent on every desktop-app restart. This is the canonical issue for the gateway-reaping regression cluster; users are actively piling on.
- **[#84834 — Webhook Revolution: graph-gated repair campaign (meta-issue)](https://github.com/NousResearch/hermes-agent/issues/84834)** (16 comments) — An epic-level 5×2×3 repair campaign covering the full webhook surface: ingress, execution, delivery, config, management UI, deployment, docs.
- **[#69592 — `/sessions` and `/models` overlays invisible with ambient widget dock](https://github.com/NousResearch/hermes-agent/issues/69592)** (12 comments, P1, TUI) — Core TUI workflows (resume sessions, change models) have been broken for 13+ days with the documented dock pattern.
- **[#83390 — Auxiliary `title_generation` fails on DeepSeek](https://github.com/NousResearch/hermes-agent/issues/83390)** (9 comments, 2 👍) — HTTP 400 `"This response_format type is unavailable now"` when title generation routes to DeepSeek.
- **[#4438 — Rich Spreadsheet Skill (xlsx/csv)](https://github.com/NousResearch/hermes-agent/issues/4438)** (8 comments) — Longstanding request for structured Excel/CSV handling rather than raw `openpyxl`/`pandas` ad-hoc usage.

Underlying pattern: **desktop/messaging reliability is the #1 community pain right now**, followed by TUI regressions and a desire for richer bundled skills and a native client.

---

## 5. Bugs & Stability

Ranked by severity. Notably, the top cluster is a **single regression from commit `bc1223840` ("reap orphan gateways at startup", 2026-08-04)** with five reports across platforms:

| Severity | Issue | Description | Fix PR? |
|---|---|---|---|
| P1 (cluster) | [#83683](https://github.com/NousResearch/hermes-agent/issues/83683) (Win), [#85344](https://github.com/NousResearch/hermes-agent/issues/85344) (macOS launchd), [#85368](https://github.com/NousResearch/hermes-agent/issues/85368) (SIGKILL), [#84855](https://github.com/NousResearch/hermes-agent/issues/84855) (permission denied), [#85044](https://github.com/NousResearch/hermes-agent/issues/85044) (Scheduled Task) | Desktop `serve` startup kills the supervised/standalone gateway and never relaunches it — messaging platforms go silent | **No fix PR yet** — urgent |
| P1 | [#69592](https://github.com/NousResearch/hermes-agent/issues/69592) | TUI `/sessions`, `/switch`, `/resume` overlays invisible with ambient widget dock; `/reload` silent; Day 13+ | No fix PR visible |
| P0 (dup, closed) | [#81639](https://github.com/NousResearch/hermes-agent/issues/81639) | `_canonicalize_api_tool_calls` mutates persisted history with `{}`-substituted tool calls, leaving sessions stuck in reasoning-only responses | Closed as duplicate |
| P2 | [#83427](https://github.com/NousResearch/hermes-agent/issues/83427) | `browser_exec` crashes: `pydantic_core` ModuleNotFoundError when PYTHONPATH points at Hermes venv (desktop) | — |
| P2 | [#80117](https://github.com/NousResearch/hermes-agent/issues/80117) | SQLite POSIX lock conflict causes `APIConnectionError` in gateway | — |
| P2 | [#83846](https://github.com/NousResearch/hermes-agent/issues/83846) | ZIP-fallback update deletes built desktop app, never rebuilds; later updates report "Already up to date" (Windows) | — |
| P2 | [#72064](https://github.com/NousResearch/hermes-agent/issues/72064) | `oneshot -z` silently ignores `--ignore-rules`; no way to skip built-in memory injection | — |
| P2 | [#52339](https://github.com/NousResearch/hermes-agent/issues/52339) | `hermes update` rebuilds Desktop repo-local but leaves `/Applications/Hermes.app` stale (macOS split-brain) | — |
| P2 | [#76267](https://github.com/NousResearch/hermes-agent/issues/76267) | Windows `sync_back` drops remote sandbox file changes on teardown | — |
| P2 | [#85406](https://github.com/NousResearch/hermes-agent/issues/85406) | `vision_analyze` fails on Windows host + Docker terminal — POSIX separators mangled to backslashes | — |
| P2 | [#83340](https://github.com/NousResearch/hermes-agent/issues/83340) | `hermes cron run` reports "failed" without executing the job (desktop shell, macOS) | — |
| P3 | [#85104](https://github.com/NousResearch/hermes-agent/issues/85104) | Desktop chat renders same assistant message twice (frontend rendering issue; DB stores single record) | — |
| P3 | [#85745](https://github.com/NousResearch/hermes-agent/issues/85745) | Desktop profile-tab switch shows wrong (default) session list; WS never connects to profile backend | [#85750](https://github.com/NousResearch/hermes-agent/pull/85750) (per-profile remote WS routing) |

---

## 6. Feature Requests & Roadmap Signals

High-signal requests and in-flight work likely to shape the next releases:

- **Voice stack is an active roadmap focus** — four PRs landed/updated in 24h: Whisper `beam_size` + prewarm ([#85773](https://github.com/NousResearch/hermes-agent/pull/85773)), Desktop honoring `voice.silence_duration` ([#85772](https://github.com/NousResearch/hermes-agent/pull/85772)), MiniMax chunked-PCM TTS streaming ([#85771](https://github.com/NousResearch/hermes-agent/pull/85771)), and wake-word capture fixes ([#85770](https://github.com/NousResearch/hermes-agent/pull/85770)). Expect these in the next minor release.
- **[#35966 — Native desktop/mobile client](https://github.com/NousResearch/hermes-agent/issues/35966)** (4 👍, most-reacted open feature) — direct Gateway/API interaction without third-party messaging intermediaries. Continues to attract community interest alongside the desktop app maturation.
- **[#4438 — Rich Spreadsheet Skill](https://github.com/NousResearch/hermes-agent/issues/4438)** — open since April; bundled-skills momentum ([#85767](https://github.com/NousResearch/hermes-agent/pull/85767) Box skill) suggests this could get picked up soon.
- **[#71023 — Zero-downtime live upgrade](https://github.com/NousResearch/hermes-agent/issues/71023)** — update without killing running subagents; frequent user-facing pain.
- **[#85418 — Local-first memory provider proposal](https://github.com/NousResearch/hermes-agent/issues/85418)** — community-built memory layer benchmarked against Honcho, offered upstream (needs maintainer decision).
- **[#67798 — Lifecycle hooks as shared runtime contract](https://github.com/NousResearch/hermes-agent/issues/67798)** — `HookRegistry` currently gateway-owned; request to extend to CLI, TUI, cron, desktop surfaces.
- **[#33049 — Configurable credential-pool exhaustion TTL](https://github.com/NousResearch/hermes-agent/issues/33049)** — hardcoded 1-hour cooldowns for 401/429.
- **[#84317 — Opt out of `drop_pending_updates` on Telegram cold boot](https://github.com/NousResearch/hermes-agent/issues/84317)** — pending updates up to 24h are currently discarded.

**Prediction:** the voice PR set and the Box skill are strong candidates for the next minor release; the gateway-reaping cluster (Section 5) is likely to be hotfixed given its P1/messaging-silent severity.

---

## 7. User Feedback Summary

**Strong dissatisfaction — desktop/gateway reliability:**
- Windows users report messaging platforms going completely silent after every desktop restart ([#83683](https://github.com/NousResearch/hermes-agent/issues/83683), [#85368](https://github.com/NousResearch/hermes-agent/issues/85368), [#84855](https://github.com/NousResearch/hermes-agent/issues/84855), [#85044](https://github.com/NousResearch/hermes-agent/issues/85044)); macOS users report the same with launchd-supervised gateways ([#85344](https://github.com/NousResearch/hermes-agent/issues/85344)). One user notes the "Permission denied" variant leaves a zombie gateway PID.
- TUI power users are increasingly frustrated — "Day 13 since this broke" for `/sessions` with ambient widgets ([#69592](https://github.com/NousResearch/hermes-agent/issues/69592)).
- Update/install pain persists: stale `/Applications/Hermes.app` after terminal update ([#52339](https://github.com/NousResearch/hermes-agent/issues/52339)) and ZIP-fallback deleting the desktop app entirely ([#83846](https://github.com/NousResearch/hermes-agent/issues/83846)).

**Satisfaction signals:**
- Community contributors are being salvaged upstream (Box skill PR [#85767](https://github.com/NousResearch/hermes-agent/pull/85767) explicitly cherry-picks @iskysun96's work).
- A memory-provider proposal author ([#85418](https://github.com/NousResearch/hermes-agent/issues/85418)) thanks maintainer @DavidMetcalfe for resolving their earlier issue, saying the fix "fixed it for good" — positive maintainer-community rapport.
- Long-blocked desktop launch crash fixes ([#67257](https://github.com/NousResearch/hermes-agent/pull/67257), [#67251](https://github.com/NousResearch/hermes-agent/pull/67251)) finally merged after ~4 weeks, which should please affected desktop users.

---

## 8. Backlog Watch

Items needing maintainer attention, by urgency:

- **P1 gateway-reaping cluster** — [#83683](https://github.com/NousResearch/hermes-agent/issues/83683) and its four duplicates ([#85344](https://github.com/NousResearch/hermes-agent/issues/85344), [#85368](https://github.com/NousResearch/hermes-agent/issues/85368), [#84855](https://github.com/NousResearch/hermes-agent/issues/84855), [#85044](https://github.com/NousResearch/hermes-agent/issues/85044)): five user reports, zero fix PR. Highest-priority item in the tracker.
- **[#69592 — TUI overlays invisible with ambient dock](https://github.com/NousResearch/hermes-agent/issues/69592)** — P1, open since July 22, 13+ days of impact, no fix PR visible.
- **[#52339 — Stale /Applications/Hermes.app after update](https://github.com/NousResearch/hermes-agent/issues/52339)** — P2, open since June 25, 6 comments, no fix.
- **[#4438 — Rich Spreadsheet Skill](https://github.com/NousResearch/hermes-agent/issues/4438)** — open since April 1; oldest unanswered feature with consistent interest.
- **[#67934 — Use native Ollama tags for model discovery](https://github.com/NousResearch/hermes-agent/pull/67934)** — open since July 20; seems stalled despite being a well-scoped compatibility fix.
- **[#70667](https://github.com/NousResearch/hermes-agent/pull/70667) / [#72671](https://github.com/NousResearch/hermes-agent/pull/72671)** — test-hardening PRs by @vadelma-agent open since late July; appear to be waiting on review.
- **[#71023 — Zero-downtime live upgrade](https://github.com/NousResearch/hermes-agent/issues/71023)** — open since July 24, flagged `needs-decision`; recurring pain point for users running long-lived subagents.

---

*Data source: NousResearch/hermes-agent GitHub activity, 2026-08-14. All links reference the public repository.*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-08-14

## 1. Today's Overview
PicoClaw saw moderate activity over the last 24 hours, with **2 open issues** and **9 pull requests updated**, but **no new releases** and **no feature-merge activity**. Most PR movement was automated dependency bump churn, with three stale dependabot PRs closed and replaced by updated versions. One real user-facing bug report remains open — Web UI chat input lag with long histories — while a new feature request asks for broader audio transcription model support. Overall, project health appears stable, though maintainer attention is still needed on unresolved frontend performance and tooling fixes.

## 2. Releases
**No new releases** were published in this window.

## 3. Project Progress
There were **no merged feature or bugfix PRs** in the last 24 hours.

Three closed PRs were all **stale dependabot updates** that were superseded by newer dependency bumps:

- [PR #3304 — bump anthropic-sdk-go 1.55.1 → 1.61.0](https://github.com/sipeed/picoclaw/pull/3304) — closed, superseded by [PR #3334](https://github.com/sipeed/picoclaw/pull/3334)
- [PR #3305 — bump bedrockruntime 1.53.3 → 1.56.2](https://github.com/sipeed/picoclaw/pull/3305) — closed, superseded by [PR #3336](https://github.com/sipeed/picoclaw/pull/3336)
- [PR #3306 — bump aws-sdk-go-v2/config 1.32.25 → 1.32.33](https://github.com/sipeed/picoclaw/pull/3306) — closed, superseded by [PR #3335](https://github.com/sipeed/picoclaw/pull/3335)

New open dependabot PRs continue to refresh Go SDK dependencies: [PR #3332](https://github.com/sipeed/picoclaw/pull/3332), [PR #3333](https://github.com/sipeed/picoclaw/pull/3333), [PR #3334](https://github.com/sipeed/picoclaw/pull/3334), [PR #3335](https://github.com/sipeed/picoclaw/pull/3335), and [PR #3336](https://github.com/sipeed/picoclaw/pull/3336).

## 4. Community Hot Topics
The most active item by comments/reactions is the long-running Web UI performance bug:

- [Issue #3281 — [BUG] Web UI chat input is very laggy when history has a little bit long](https://github.com/sipeed/picoclaw/issues/3281) — 5 comments, 1 👍, open since July 21, updated August 13.  
  **Underlying need:** Users want smooth, responsive chat input even with long conversation history. The issue has not been resolved yet and appears to be a meaningful UX pain point.

A new feature request also generated interest:

- [Issue #3331 — [Feature] Use any models with `/audio/transcriptions` endpoint, not only `*-whisper-*`](https://github.com/sipeed/picoclaw/issues/3331) — new, no comments yet.  
  **Underlying need:** Users want flexibility to use modern or faster transcription models, not only older Whisper-pattern model names.

## 5. Bugs & Stability
**High / Medium severity:**

- [Issue #3281 — Web UI chat input lag with long history](https://github.com/sipeed/picoclaw/issues/3281)  
  Created July 21, updated August 13, still open. Reported with PicoClaw v0.3.1 / Go 1.25.11 / PicoClaw Web. No fix PR is currently linked.

**Low severity / tooling:**

- [PR #3318 — fix(web): repair unparseable pnpm-lock.yaml](https://github.com/sipeed/picoclaw/pull/3318)  
  Open fix for a broken lockfile caused by duplicate mapping key for `semver@7.8.5`. This blocks `pnpm` from parsing `web/frontend/pnpm-lock.yaml`. The fix PR exists but has not been merged.

No crashes or regressions were reported in the last 24 hours.

## 6. Feature Requests & Roadmap Signals
The only new user feature request is:

- [Issue #3331 — Support any `/audio/transcriptions` endpoint model](https://github.com/sipeed/picoclaw/issues/3331)  
  Proposes a `whisper-transcription: true` flag in model or voice config to force the Whisper path in `asr.go`, allowing non-Whisper ASR models. This is a small, targeted change and could plausibly be included in a future release if maintainers agree.

No other roadmap signals were present in this window.

## 7. User Feedback Summary
- **Pain point: Web UI latency** — Users report that input becomes laggy once chat history grows. This is the clearest dissatisfaction signal in the current data.
- **Pain point: ASR model inflexibility** — Users want to use modern `/audio/transcriptions`-compatible models instead of being limited to `*-whisper-*` pattern names.
- **Satisfaction signals** — No positive feedback or praise was recorded in the last 24 hours; activity remains mostly maintenance-focused.

## 8. Backlog Watch
Items needing maintainer attention:

- [Issue #3281 — Web UI chat input lag](https://github.com/sipeed/picoclaw/issues/3281)  
  Open for ~3 weeks, 5 comments, no linked fix. This is the highest-priority unaddressed user-visible bug.

- [PR #3318 — pnpm-lock.yaml fix](https://github.com/sipeed/picoclaw/pull/3318)  
  Open since August 5, marked `stale`, but still needed to repair broken frontend tooling.

- [Issue #3331 — ASR transcription model support](https://github.com/sipeed/picoclaw/issues/3331)  
  New and uncontested; maintainer response or triage is still pending.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-08-14

## Today's Overview
NanoClaw had a high-activity 24 hours: 19 PRs were updated, with 13 closed/merged and 6 still open, while 2 issues were updated. The project shipped **v2.2.0**, centered on in-place template/plugin updates. Most maintainer PR activity focused on making the `verify-agent-image` CI gate actually run and matter, plus supply-chain hardening. A security fix for Telegram pairing codes and an agent-image repin also landed. Two issues capture current user-facing risk: a closed agent-group ID bug and an open approval-card flood from bot/webhook senders. Overall health looks strong, with fast turnaround on release engineering and security fixes.

## Releases
- **[v2.2.0](https://github.com/nanocoai/nanoclaw/releases)** — Template-stamped agent groups can now be updated in place via `ncl groups create --template <ref>`. When a group already carries the template's plugin, the command updates it instead of minting a duplicate agent. A dry run prints a plan of every plugin-owned surface — plugin files, skills, MCP servers, etc. — before changes are applied.
- The release was prepared in **[PR #3237](https://github.com/nanocoai/nanoclaw/pull/3237)**.
- Note: the closely related **[PR #3220](https://github.com/nanocoai/nanoclaw/pull/3220)** is a `feat!` migration of agent templates to Agent Plugins 1.0.0 directories. The release text does not include explicit migration notes, so existing template users should verify compatibility with the new plugin-directory layout.

## Project Progress
13 PRs were closed/merged in the snapshot. Notable advances:

- **[#3220](https://github.com/nanocoai/nanoclaw/pull/3220)** — `feat!`: agent templates become Agent Plugins 1.0.0 directories; a format migration for templates.
- **[#2909](https://github.com/nanocoai/nanoclaw/pull/2909)** — Setup wizard template flow and first-agent stamping.
- **[#3231](https://github.com/nanocoai/nanoclaw/pull/3231)** — Codex and OpenCode provider config writers now honor plugin MCP working-directory settings.
- **[#3238](https://github.com/nanocoai/nanoclaw/pull/3238)** — `verify-agent-image` now runs on every PR so it can actually function as a required status check.
- **[#3240](https://github.com/nanocoai/nanoclaw/pull/3240)** — Agent-image bump PRs can be opened from a `repository_dispatch` event.
- **[#3241](https://github.com/nanocoai/nanoclaw/pull/3241)** — A verified signature can become the approving review on pin bumps; off by default behind `AGENT_IMAGE_AUTO_APPROVE=true`.
- **[#3158](https://github.com/nanocoai/nanoclaw/pull/3158)** — `verify-agent-image` pins the publisher identity and checks attestations per architecture.
- **[#3236](https://github.com/nanocoai/nanoclaw/pull/3236)** — Repinned the agent image to `hardened-2026-08-13`.
- **[#3229](https://github.com/nanocoai/nanoclaw/pull/3229)** — Security fix: Telegram pairing codes now use `crypto.randomInt` instead of `Math.random()`.
- **[#2624](https://github.com/nanocoai/nanoclaw/pull/2624)** — Added per-server `disabledTools` in `McpServerConfig`.
- **[#3145](https://github.com/nanocoai/nanoclaw/pull/3145)** — DB migration 021 backfills missing channel destinations for existing wirings.
- **[#3239](https://github.com/nanocoai/nanoclaw/pull/3239)** — Closed throwaway smoke test of the `verify-agent-image` gate.

## Community Hot Topics
The only issue with visible comment engagement was **[#3234](https://github.com/nanocoai/nanoclaw/issues/3234)** (1 comment, closed). It reported that template-stamped agent groups received a bare UUID instead of an `ag-`-prefixed ID, causing OneCLI's `ensureAgent` to reject the ID. The underlying need is clear: template-generated agent groups must produce stable, externally compatible identifiers.

**[#3235](https://github.com/nanocoai/nanoclaw/issues/3235)** is new and not yet commented on, but it has high potential impact: under `unknown_sender_policy = 'request_approval'`, bot/webhook senders generate unbounded approval cards, and denials do not persist. This indicates a need for sender-type awareness and persistent deny decisions.

## Bugs & Stability
Ranked by severity:

1. **High — Unbounded approval-card flood from bots/webhooks** ([#3235](https://github.com/nanocoai/nanoclaw/issues/3235))  
   Recurring automated senders can spam the approval queue indefinitely when `unknown_sender_policy = 'request_approval'`. Denials don't persist, making the problem worse. No fix PR is visible yet.

2. **Medium — Template-stamped agent groups get bare UUID IDs** ([#3234](https://github.com/nanocoai/nanoclaw/issues/3234))  
   Closed, but the issue caused OneCLI integration failures because the agent group ID was used verbatim. Likely resolved by the v2.2.0 template/plugin update work.

3. **Security/Medium — Weak Telegram pairing-code randomness** ([PR #3229](https://github.com/nanocoai/nanoclaw/pull/3229))  
   Already fixed by switching from `Math.random()` to `crypto.randomInt` and widening the code space.

4. **Low/Docs — Removal docs still point to retired data/env mirror** ([PR #3230](https://github.com/nanocoai/nanoclaw/pull/3230))  
   Open PR that would stop docs from referencing a retired mirror; not merged yet.

## Feature Requests & Roadmap Signals
- **[#3218](https://github.com/nanocoai/nanoclaw/pull/3218)** — Open feature: accept bounded JSON from stdin in `ncl` clients. This is a low-risk CLI ergonomics improvement for automation.
- **[#2420](https://github.com/nanocoai/nanoclaw/pull/2420)** — Open feature: `/add-hindsight` skill plus bundled MCP wrapper for Hindsight memory. Larger, opt-in feature.
- **[#2346](https://github.com/nanocoai/nanoclaw/pull/2346)** — Open behavioral fix: unknown slash commands should be treated as normal chat, not silently dropped.
- **[#3235](https://github.com/nanocoai/nanoclaw/issues/3235)** may evolve into a feature request for webhook/bot allowlisting, persistent denials, or rate-limited approval cards.

Likely next-version candidates are the self-contained CLI/chat fixes [#3218](https://github.com/nanocoai/nanoclaw/pull/3218) and [#2346](https://github.com/nanocoai/nanoclaw/pull/2346); [#2420](https://github.com/nanocoai/nanoclaw/pull/2420) is larger and may remain open longer.

## User Feedback Summary
No explicit satisfaction ratings were available, but user-reported signals are visible:

- Template users are running into integration incompatibilities with external agent orchestration tools like OneCLI ([#3234](https://github.com/nanocoai/nanoclaw/issues/3234)).
- Operators using `request_approval` are exposed to approval-card spam from webhooks and bots ([#3235](https://github.com/nanocoai/nanoclaw/issues/3235)).
- Chat users can have responses silently dropped when a slash command isn't recognized ([#2346](https://github.com/nanocoai/nanoclaw/pull/2346)).
- Contributors are actively submitting security and documentation fixes, e.g., Telegram CSPRNG ([#3229](https://github.com/nanocoai/nanoclaw/pull/3229)) and docs cleanup ([#3230](https://github.com/nanocoai/nanoclaw/pull/3230)).

Overall, the user community appears engaged with security, CI reliability, and external tooling compatibility — and maintainers are merging fixes quickly.

## Backlog Watch
Open PRs that may need maintainer attention:

- **[#2346](https://github.com/nanocoai/nanoclaw/pull/2346)** — Open since May 8; fix for unknown slash commands being silently dropped. No visible review activity in the snapshot.
- **[#2420](https://github.com/nanocoai/nanoclaw/pull/2420)** — Open since May 11; `/add-hindsight` memory integration. Large bundled feature; needs design review.
- **[#3218](https://github.com/nanocoai/nanoclaw/pull/3218)** — Open since Aug 9; bounded stdin JSON support. Self-contained feature, but no visible comments.
- **[#3230](https://github.com/nanocoai/nanoclaw/pull/3230)** — Open docs fix for retired mirror references; small and should be easy to review.
- **[#3242](https://github.com/nanocoai/nanoclaw/pull/3242)** and **[#3243](https://github.com/nanocoai/nanoclaw/pull/3243)** are core-team PRs; #3242 is explicitly a DO NOT MERGE live-fire test, so not a true backlog item.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-08-14

## 1. Today's Overview

IronClaw is in a high-velocity period: 50 issues and 50 PRs were updated in the last 24 hours, with 18 issues closed and 24 PRs merged/closed. The central activity is the **"reborn" architecture epic (#7482)**, which is being broken into consolidated implementation issues for pluggable agent loops, egress proxying, foreign-harness execution, and capability access. At the same time, the team shipped **IronClaw v1.2.0** as a stable promotion and is actively landing performance work to reduce Postgres write amplification. The project appears healthy but concentrated: core contributors are driving the architectural re-cut while community PRs around ACP, Nostr, and CLI tooling wait for review.

## 2. Releases

**IronClaw v1.2.0** (2026-08-13) was promoted to stable from `1.2.0-rc.3`.  
URL: https://github.com/nearai/ironclaw/releases/tag/ironclaw-v1.2.0

The release consolidates the full RC1 feature set plus RC2/RC3 fixes. The only explicitly documented fix in the provided notes:

- The runtime container image now installs `curl`, enabling in-container HTTP healthchecks for orchestrator worker probes.

No breaking changes or migration notes were included in the available release notes. The promotion PR is https://github.com/nearai/ironclaw/pull/7625.

## 3. Project Progress

Notable PRs closed/merged in the last 24 hours:

- **#7625 — chore(release): promote 1.2.0-rc.3 to 1.2.0**  
  https://github.com/nearai/ironclaw/pull/7625  
  Stable promotion of IronClaw v1.2.0.

- **#7633 — feat(unbound-turns): prepared-context accept door, unbound run lane, kernel binding-ref deletion**  
  https://github.com/nearai/ironclaw/pull/7633  
  Implements the unbound-turns design end-state-first: threads become the coordinator's unit of work, with the kernel no longer carrying reply routing. A follow-up, #7634, is open to complete the switchover with seeded history, OpenAI-compatible door, forced `tool_choice`, run limits, and listing hygiene.

- **#7163 — feat(documents): edit docx/xlsx/pptx structurally, render PDF from HTML, and fix the #7109 text-log regression**  
  https://github.com/nearai/ironclaw/pull/7163  
  Adds real document round-trip editing and fixes the regression where text tools refused to write binary documents.

- **#7590 — fix(live-canary): align the bundled-skill marker owner with the runtime mint**  
  https://github.com/nearai/ironclaw/pull/7590  
  Fixes a live-canary marker verification failure surfaced by the new verdict narration.

- **#7376 — ci(check-guidance): extend the reference gate to the docs/ surface**  
  https://github.com/nearai/ironclaw/pull/7376  
  Extends the path-reference CI gate to Mintlify pages, the Chinese locale mirror, and the reborn contracts corpus.

- **#7506 — chore(deps): bump the everything-else group with 17 updates**  
  https://github.com/nearai/ironclaw/pull/7506  
  Routine dependency maintenance.

Performance work is also visible in open PRs: **#7631** (coalesce runtime milestone writes), **#7629** (reduce trigger and outbound state writes), **#7628** (remove heartbeat journal churn), and **#7630** (measure per-turn Postgres writes).

## 4. Community Hot Topics

The most active issue by comment count is the epic:

- **#7482 — Epic: Pluggable agent loops — ACP executor, edge credential injection, kernel architecture** (6 comments, open)  
  https://github.com/nearai/ironclaw/issues/7482  
  This is the centerpiece of the reborn roadmap. It proposes IronClaw as a kernel that schedules runs, mediates secrets, and enforces egress boundaries while letting third-party harnesses (Claude Code, pi, codex) own the agent loop. The underlying need is architectural flexibility: users want to bring their own agent harness instead of being locked into IronClaw's native loop.

- **#6257 — Bug: "Invalid value (attachments.mime_type)" when sending/generating PDF files** (4 comments, closed)  
  https://github.com/nearai/ironclaw/issues/6257  
  A user-reported PDF generation/sending failure. The closure plus the merged document-editing PR #7163 suggests this area is being actively repaired.

- **#2117 — feat: ironclaw-bridge — local file/MCP bridge daemon for cloud-hosted deployments** (2 comments, 1 👍, open)  
  https://github.com/nearai/ironclaw/issues/2117  
  Requests a bridge so cloud-hosted IronClaw can access local laptop files (Obsidian vaults, project directories). This reflects a recurring need for hybrid local/cloud workflows.

- **#7185 — Bug: Memory not reliably recalled across conversations** (2 comments, open)  
  https://github.com/nearai/ironclaw/issues/7185  
  Multiple testers in the IronClaw Champions check-in observed that context established in one conversation is not reliably available later. This is a trust-critical issue for the product's "memory" promise.

## 5. Bugs & Stability

Ranked by severity:

- **High — #7589: NEAR AI Cloud Sonnet-5 returns 500 errors** (closed)  
  https://github.com/nearai/ironclaw/issues/7589  
  A user reported three days of 500 errors on Sonnet-5 via NEAR AI Cloud, with an upstream reference in `nearai/cloud-api#920`. The issue is closed in this data set, but no linked fix PR is visible in the top PR list.

- **High — #7626: Custom MCP requiring browser/email auth gets stuck during connection** (open)  
  https://github.com/nearai/ironclaw/issues/7626  
  IronClaw gets stuck when a custom MCP needs browser/email verification, specifically with MKT1's email-plus-browser paid-access flow. This blocks legitimate authenticated MCP integrations.

- **Medium — #7627: GitHub extension shows as connected after invalid credentials are entered** (open)  
  https://github.com/nearai/ironclaw/issues/7627  
  The extension appears connected even when arbitrary credentials are entered; later authentication fails but the UI state is misleading.

- **Medium — #7185: Memory not reliably recalled across conversations** (open)  
  https://github.com/nearai/ironclaw/issues/7185  
  Not a crash, but a core reliability defect reported by multiple testers.

- **Low/Medium — #6257: Invalid value `attachments.mime_type` for PDFs** (closed)  
  https://github.com/nearai/ironclaw/issues/6257  
  Older report; appears to have received attention and is now closed.

No dedicated fix PRs were visible in the top PR list for #7626, #7627, or #7185.

## 6. Feature Requests & Roadmap Signals

- **#7482 and sub-issues — Pluggable agent loops / reborn architecture**  
  The epic now has consolidated implementation issues:
  - #7624 — v0 ACP harness executor: claude-code as the loop, dev-only yolo (open)  
    https://github.com/nearai/ironclaw/issues/7624
  - #7621 — Egress edge with iron-proxy (open)  
    https://github.com/nearai/ironclaw/issues/7621
  - #7622 — Foreign-harness execution: HarnessDriver contract, executor, adapters (open)  
    https://github.com/nearai/ironclaw/issues/7622
  - #7623 — Capability access and rollout: sandbox socket, ic CLI, conformance suite (open)  
    https://github.com/nearai/ironclaw/issues/7623  
  This is clearly the roadmap centerpiece. Issue #7624 is explicitly marked as "the only pluggable-loops work item to build right now," meaning ACP + Claude Code as a harness is the nearest milestone.

- **#7580 — Expose IronClaw Reborn version in the web UI**  
  https://github.com/nearai/ironclaw/issues/7580  
  Small, user-requested UX improvement; likely to land soon as a quick win.

- **#2117 — Local file/MCP bridge daemon for cloud-hosted deployments**  
  https://github.com/nearai/ironclaw/issues/2117  
  Open since April; remains an important product gap for local-first users on cloud deployments.

- **#7513 — CLI ACP serve command with streaming + cancel support** (open PR)  
  https://github.com/nearai/ironclaw/pull/7513  
  Enables external tools like Copilot CLI and VS Code to connect to an IronClaw agent via ACP.

- **#7184 — Nostr host functions for WASM tools** (open PR)  
  https://github.com/nearai/ironclaw/pull/7184  
  Adds `nostr-sign-event` and related host functions; still pending review.

Predicted next-version candidates: IronClaw v1.2.x patch releases with the performance PRs (#7631, #7629, #7628) and version-display UX fix; the unbound-turns completion (#7634) is likely for a near-term minor release, and the ACP v0 harness executor (#7624) may enter as an experimental/dev-only path.

## 7. User Feedback Summary

Real user pain points visible in the current data:

- **PDF handling** — sending/generating PDFs failed with `Invalid value (attachments.mime_type)`, reported via Slack and now closed.
- **Memory reliability** — multiple independent testers report that information from previous conversations is not reliably recalled; this was raised during the IronClaw Champions weekly check-in.
- **MCP authentication flows** — browser/email verification in custom MCPs can hang, blocking paid tools like MKT1.
- **GitHub credential UX** — false "connected" state after invalid credentials undermines trust in extension/account status.
- **Model availability** — Sonnet-5 via NEAR AI Cloud returned 500s for three days, impacting users relying on that model.
- **Version discoverability** — users cannot easily find the running IronClaw Reborn version in the web UI.
- **Local resource access** — cloud-hosted users still lack a bridge to local files and MCP servers.

Satisfaction signals are indirect but positive: the stable 1.2.0 promotion, the document round-trip PR, and the breadth of automated doc-truth CI gates suggest the team is investing in both reliability and user-facing capability.

## 8. Backlog Watch

Issues/PRs that appear to need maintainer attention:

- **#2117 — ironclaw-bridge: local file/MCP bridge daemon** (open since 2026-04-07)  
  https://github.com/nearai/ironclaw/issues/2117  
  Oldest open feature request in the highlighted set; only 2 comments. It is a significant product gap for cloud-hosted deployments and has community support (1 👍).

- **#7184 — Nostr host functions for WASM tools** (open PR since 2026-08-04, XL, new contributor)  
  https://github.com/nearai/ironclaw/pull/7184  
  Large contribution from a new contributor with no visible maintainer engagement in the data. Needs review or explicit deferral.

- **#7513 — Add ACP serve command with streaming + cancel support** (open PR since 2026-08-11, new contributor)  
  https://github.com/nearai/ironclaw/pull/7513  
  Directly relevant to the #7482 ACP direction; should be coordinated with the pluggable-loop design work.

- **#7185 — Memory not reliably recalled across conversations** (open since 2026-08-04)  
  https://github.com/nearai/ironclaw/issues/7185  
  Core product reliability issue; although it has comments, no linked fix PR is visible. Likely needs root-cause investigation and prioritization.

- **#7020 / #7262 — Dependency bumps**  
  https://github.com/nearai/ironclaw/pull/7020  
  https://github.com/nearai/ironclaw/pull/7262  
  Routine Dependabot PRs open since August 2 and August 5; low urgency but should not be left to rot.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

## LobsterAI Project Digest — 2026-08-14

### 1. Today's Overview

In the last 24 hours, LobsterAI saw moderate issue activity (**2 updated issues**) and strong PR momentum (**10 updated PRs**, **6 closed**, **4 open**), with **no new releases**. The most active work centered on renderer UI consolidation: merging skills/MCP views, unifying card/detail styling, and refactoring cowork management UI. A significant enterprise-edition PR and an evergreen daily check-in feature also advanced. However, several long-stale PRs from March/April remain open, including safety-critical test coverage additions, indicating a growing backlog risk.

### 2. Releases

No new releases in the last 24 hours.

### 3. Project Progress

Closed/merged PRs in the last 24 hours:

- **#2488 — [area: renderer, area: cowork] Refactor/cowork btw and management UI** ([PR](https://github.com/netease-youdao/LobsterAI/pull/2488)): UI refactor for cowork management screens.
- **#2487 — [area: renderer] refactor(skills): merge skills and mcp views into unified skills-and-connectors view** ([PR](https://github.com/netease-youdao/LobsterAI/pull/2487)): Consolidates the skills and MCP management surfaces into a single unified view.
- **#2486 — [area: renderer] refactor(mcp): unify MCP card/detail UI with kits and skills styling** ([PR](https://github.com/netease-youdao/LobsterAI/pull/2486)): Introduces shared `CardOverflowMenu`, consistent typography, `McpCard`/`McpDetailModal`, and reworks MCP registry/list details.
- **#2485 — [area: renderer, area: cowork] feat(activity): support evergreen daily check-in** ([PR](https://github.com/netease-youdao/LobsterAI/pull/2485)): Turns the check-in activity into an evergreen feature, adds auto status refresh, and redirects points history to a web page. Verified with 7 Vitest tests, ESLint clean, and build pass.
- **#1232 — [stale] fix(scheduledTask): fix first-run result not pushed to UI** ([PR](https://github.com/netease-youdao/LobsterAI/pull/1232)): Fixes the condition `lastRunAtMs > previousRunAtMs && previousRunAtMs > 0` so that the first scheduled execution now triggers a UI update instead of waiting for a second run.
- **#2484 — [area: renderer, docs, main, openclaw] Feat/enterprise edition** ([PR](https://github.com/netease-youdao/LobsterAI/pull/2484)): Adds enterprise-edition support across renderer, docs, main, and OpenClaw layers (note: the PR description is still template/placeholder).

### 4. Community Hot Topics

- **#2489 — 快更新v4pro！ (Update v4pro quickly!)** ([Issue](https://github.com/netease-youdao/LobsterAI/issues/2489))  
  Newest issue, 1 comment, created and updated on 2026-08-14. It is a direct user demand for a quick update to a “v4pro” version (likely a model release). The urgency and lack of detail suggest strong user pressure for new model support.

- **#1162 — [stale] 为 openclawMemoryFile 和 openclawLocalTimeContextPrompt 补充 Vitest 单元测试** ([Issue](https://github.com/netease-youdao/LobsterAI/issues/1162))  
  1 comment, updated 2026-08-13. Requests 75 Vitest unit tests for the memory file manager and local time context prompt. This issue has attracted attention because these modules are zero-test-covered and core to memory workflows; the duplicate PR #1165 is still open.

The common underlying theme: users want both **faster model/version updates** (#2489) and **higher reliability/test coverage** for critical internal modules (#1162).

### 5. Bugs & Stability

No new bug reports were filed in the last 24 hours, but several known bugs are being addressed in open stale PRs:

- **High severity — Dangerous command detection has zero tests** ([PR #1156](https://github.com/netease-youdao/LobsterAI/pull/1156), open): `commandSafety.ts` guards against `rm -rf` and `git push --force`; a false negative could let the AI silently execute destructive commands. The companion PR adds Vitest coverage but has been stale since 2026-03-31.
- **Medium severity — Scheduled task “Run now” lacks UI feedback** ([PR #1163](https://github.com/netease-youdao/LobsterAI/pull/1163), open): No loading/success state, 15-second polling delay, and inconsistent context-menu styling cause poor UX and possible duplicate clicks.
- **Medium severity — Duplicate custom agent names allowed** ([PR #1166](https://github.com/netease-youdao/LobsterAI/pull/1166), open): Creating an agent with an existing name creates ambiguity; the fix should block duplicate submission in the renderer.
- **Fixed — First scheduled execution result not pushed to UI** ([PR #1232](https://github.com/netease-youdao/LobsterAI/pull/1232), closed): Addressed the root cause in `pollOnce()`; this is now part of today’s closed PRs.

### 6. Feature Requests & Roadmap Signals

- **v4pro support** ([Issue #2489](https://github.com/netease-youdao/LobsterAI/issues/2489)): Ambiguous but high-priority user request; likely indicates a new model or provider version should land in the next release.
- **Enterprise edition** ([PR #2484](https://github.com/netease-youdao/LobsterAI/pull/2484)): A cross-cutting feature touching renderer, docs, main, and OpenClaw, signifying enterprise-oriented deployments are on the roadmap.
- **Evergreen daily check-in** ([PR #2485](https://github.com/netease-youdao/LobsterAI/pull/2485)): Turns a limited-time activity into a permanent engagement feature, with web-based points detail — likely to be included in the upcoming version.
- **Unified skills/connectors UI** ([PR #2487](https://github.com/netease-youdao/LobsterAI/pull/2487), [#2486](https://github.com/netease-youdao/LobsterAI/pull/2486)): The renderer team is actively consolidating management UIs for a more coherent user experience.

### 7. User Feedback Summary

- **Impatience for the latest model/version**: User “nimamasl114514” requests a v4pro update ([#2489](https://github.com/netease-youdao/LobsterAI/issues/2489)), implying the current version feels outdated for their use case.
- **Scheduled task UX pain**: The open fix PR [#1163](https://github.com/netease-youdao/LobsterAI/pull/1163) describes real user confusion: no feedback on “Run now,” long polling delays, and repeated clicks. Users expect immediate visual confirmation and near-real-time status updates.
- **Memory reliability concerns**: Both issue [#1162](https://github.com/netease-youdao/LobsterAI/issues/1162) and PR [#1165](https://github.com/netease-youdao/LobsterAI/pull/1165) highlight that core memory modules had no tests, an important signal for users relying on MEMORY.md consistency and migration safety.

### 8. Backlog Watch

The following items have been stale since late March / early April and still need maintainer attention:

- **#1156 — Vitest tests for commandSafety and coworkMemoryJudge** ([PR](https://github.com/netease-youdao/LobsterAI/pull/1156)): Safety-critical; without tests, dangerous-command detection and memory quality gates remain unverified.
- **#1163 — Scheduled task “Run now” feedback & optimistic updates** ([PR](https://github.com/netease-youdao/LobsterAI/pull/1163)): Directly impacts UX; waiting over 3 months for review.
- **#1165 — Duplicate of #1162** ([PR](https://github.com/netease-youdao/LobsterAI/pull/1165)): Adds 75 tests for memory file and time context prompt modules; closed/is duplicated by issue #1162 but still open.
- **#1166 — Prevent duplicate custom agent names** ([PR](https://github.com/netease-youdao/LobsterAI/pull/1166)): Simple user-facing bug fix that has been pending for months.
- **#1162 — Backlog issue for memory/time-context test coverage** ([Issue](https://github.com/netease-youdao/LobsterAI/issues/1162)): Continues to receive updates and attention; its pairing with #1165 suggests maintainers should decide on merging or closing one.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-08-14

## Today's Overview
In the last 24 hours, Moltis saw modest but purposeful activity: 1 open issue and 4 open pull requests were updated, with no merges, closures, or releases. The work in flight centers on build reliability fixes for macOS and OpenClaw org renames, plus one substantial connector feature PR. No new releases were published, and no PRs were merged or closed during the window. Overall, the project appears in an active maintenance and feature-development phase, though review/merge throughput is currently low.

## Releases
No new releases were published in the last 24 hours.

## Project Progress
No PRs were merged or closed during the reporting window.

In-flight PRs:
- [#1194 fix(scripts): guard empty bash array expansions for macOS bash 3.2](https://github.com/moltis-org/moltis/pull/1194) — Fixes `just local-validate-full` failing on macOS when no PR number is supplied.
- [#1192 fix(skills): point wacrawl install metadata at the openclaw org](https://github.com/moltis-org/moltis/pull/1192) — Fixes broken Go install fallback for the `wacrawl` skill after repository/org rename.
- [#1191 fix(sandbox): point gogcli module path at the openclaw org](https://github.com/moltis-org/moltis/pull/1191) — Fixes `moltis sandbox build` failing on pre-built images due to old `steipete` module path.
- [#1190 Add durable CalDAV and channel history connectors](https://github.com/moltis-org/moltis/pull/1190) — Large feature PR adding provider-neutral connector persistence, atomic snapshots, scheduling, projections, bounded local full-text search, and read-only CalDAV/message-history datasets.

No feature work was merged today, but the connector PR remains the most significant forward-looking change under review.

## Community Hot Topics
The provided data does not show comment or reaction counts for these items, so interest is inferred from recency, scope, and the problems they address.

- [#1190 Add durable CalDAV and channel history connectors](https://github.com/moltis-org/moltis/pull/1190) — Most substantial open PR; signals demand for durable, searchable history across Slack, Discord, Matrix, Teams, and CalDAV without copying channel credentials.
- [#1194 fix(scripts): guard empty bash array expansions for macOS bash 3.2](https://github.com/moltis-org/moltis/pull/1194) — Reflects real developer pain on macOS with bash 3.2 and `set -euo pipefail`.
- [#1191 fix(sandbox): point gogcli module path at the openclaw org](https://github.com/moltis-org/moltis/pull/1191) and [#1192 fix(skills): point wacrawl install metadata at the openclaw org](https://github.com/moltis-org/moltis/pull/1192) — Both address broken installs caused by external repos moving to the `openclaw` org.

Underlying needs: users are hitting correctness issues from tooling renames (OpenClaw migration), macOS-specific shell compatibility, and want deeper connector/history persistence.

## Bugs & Stability
Ranked by severity:

1. **High — `moltis sandbox build` fails on every pre-built image**  
   [#1191](https://github.com/moltis-org/moltis/pull/1191) reports that the generated Dockerfile still installs `github.com/steipete/gogcli/cmd/gog@latest`, but gogcli moved to `github.com/openclaw/gogcli`, causing Go module/redirection failures. A fix is proposed in the same PR.

2. **Medium — `wacrawl` skill Go install fallback is broken**  
   [#1192](https://github.com/moltis-org/moltis/pull/1192) reports the skill’s install entry points to `github.com/steipete/wacrawl`, but the repo has moved to the `openclaw` org. Fix PR is open.

3. **Medium — macOS bash 3.2 unbound variable failure in local validation**  
   [#1194](https://github.com/moltis-org/moltis/pull/1194) causes `just local-validate-full` to fail immediately on macOS when expanding empty arrays under `set -euo pipefail`. Fix PR is open.

4. **Low/Flaky — push fanout timeout assertion race under full-suite load**  
   [#1193](https://github.com/moltis-org/moltis/issues/1193): `fanout_is_bounded_and_times_out_a_hung_endpoint` fails intermittently only during full workspace suite runs, passing on targeted runs. No fix PR is currently linked.

## Feature Requests & Roadmap Signals
No standalone feature-request issues were filed in this window, but the open PR [#1190](https://github.com/moltis-org/moltis/pull/1190) is a strong roadmap signal. It adds:
- Provider-neutral connector persistence with atomic snapshots and scheduling.
- Read-only CalDAV datasets and reusable message-history datasets for Slack, Discord, Matrix, and Microsoft Teams.
- Bounded local full-text search over channel history.
- Prompt-related extensions for using historical data.

If merged, this would likely appear in the next minor or feature release. It also suggests Moltis is moving toward durable local history and connector data portability.

## User Feedback Summary
Visible pain points from the current PR/issue set:
- **Broken installs after upstream renames**: Users cannot build sandbox images or install skills because Go module paths still point at old `steipete` locations.
- **macOS developer friction**: Bash 3.2 compatibility issues break local validation recipes, affecting contributors on macOS.
- **Test suite reliability**: The flaky fanout timeout test adds noise to full CI runs, reducing confidence in the suite even if targeted tests pass.
- **Desire for durable connector history**: The large connector PR indicates user demand for persistent, searchable channel and calendar data inside Moltis rather than live-only access.

Overall, users/contributors are actively fixing developer experience issues while pushing for richer data persistence features.

## Backlog Watch
No long-unanswered ancient issues are present in this small dataset, but two items merit maintainer attention:

- [#1193 Flaky test: push fanout timeout assertion races under full-suite load](https://github.com/moltis-org/moltis/issues/1193) — Opened 2026-08-13, no comments, no linked fix PR. Needs triage and likely test isolation or timeout hardening.
- [#1190 Add durable CalDAV and channel history connectors](https://github.com/moltis-org/moltis/pull/1190) — Open since 2026-08-11, updated 2026-08-13, with no visible review/discussion data. This is a large feature PR that likely needs maintainer review and possibly design feedback.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-08-14

*All links refer to the agentscope-ai/QwenPaw repository, which is the data source for this CoPaw digest.*

## 1. Today's Overview

CoPaw/QwenPaw is in a high-velocity release window: **46 issues** and **50 PRs** were updated in the last 24 hours (29 open issues, 17 closed; 31 open PRs, 19 merged/closed), and **2 releases** landed. The v2.1.0 final release with the new **QwenPaw OS Shell** is the headline event, alongside continuing stabilization patches. Community activity is strong, but there is a visible cluster of regression reports around context compaction, Windows desktop/TUI behavior, and session-state integrity. Overall project health looks stable, with a healthy mix of feature development, security review, and active maintainer/contributor collaboration.

## 2. Releases

### v2.1.0
- Adds the **QwenPaw OS Shell** — open apps in movable/resizable windows with a launcher, taskbar, notifications, and saved layouts ([#6645](https://github.com/agentscope-ai/QwenPaw/pull/6645)).
- Installed and marketplace apps now share **one unified catalog** across the App Center and marketplace.
- No explicit breaking changes or migration notes were included in the release excerpt.

### v2.1.0-beta.5
- fix(chats): handle dict-like model responses ([#6816](https://github.com/agentscope-ai/QwenPaw/pull/6816)).
- fix(memory): simplify long-term memory guidance ([#6942](https://github.com/agentscope-ai/QwenPaw/pull/6942)).
- docs(website): make the Files workspace documentation more robust.

The v2.1.0 final release supersedes the beta.5 patch and continues the project’s push toward a richer desktop/OS-like agent shell.

## 3. Project Progress

Notable closed/merged PRs in the last 24 hours, based on the top-20 PR list:

- **Auto-Dream integration made resilient** — malformed structured output no longer fails the whole task ([#6884](https://github.com/agentscope-ai/QwenPaw/pull/6884)).
- **Optional channel dependencies on demand** — built-in channels stay registered while their SDKs become optional where practical ([#6387](https://github.com/agentscope-ai/QwenPaw/pull/6387)).
- **Mission Mode `max_iterations` server-side enforcement** — prevents controller LLMs from spawning unlimited sub-sessions beyond configured limits ([#6652](https://github.com/agentscope-ai/QwenPaw/pull/6652)).
- **Chat history pagination + GZip compression** — fixes long-chat timeouts on slow networks ([#6636](https://github.com/agentscope-ai/QwenPaw/pull/6636)).
- **v2.1.0 release note preparation** ([#6989](https://github.com/agentscope-ai/QwenPaw/pull/6989)).

Important open PRs advancing new features:

- **Pawport**: import instructions, settings, skills, plugins, projects, and recent work from Codex/Qoder ([#6960](https://github.com/agentscope-ai/QwenPaw/pull/6960)).
- **Matrix session/memory isolation per sender** in group rooms ([#7001](https://github.com/agentscope-ai/QwenPaw/pull/7001)).
- **Session-scoped multi-project directories** ([#6976](https://github.com/agentscope-ai/QwenPaw/pull/6976)).
- **Provider capability templates** for custom OpenAI-compatible providers ([#6823](https://github.com/agentscope-ai/QwenPaw/pull/6823)).
- **ReMe memory runtime status dashboard** ([#6984](https://github.com/agentscope-ai/QwenPaw/pull/6984)).
- **Semaphore leak prevention for abandoned LLM streams** ([#6998](https://github.com/agentscope-ai/QwenPaw/pull/6998)).
- **Plugin workspace state restore before reload swap** ([#6996](https://github.com/agentscope-ai/QwenPaw/pull/6996)).

## 4. Community Hot Topics

Most-discussed issues in the last 24 hours:

- [#6921 — Agent stops mid multi-step task without notice; user must say “continue”](https://github.com/agentscope-ai/QwenPaw/issues/6921) — 6 comments. Strong autonomy complaint: model plans next step then halts.
- [#6973 — QwenPaw Creator support for Alibaba Cloud Bailian token plan](https://github.com/agentscope-ai/QwenPaw/issues/6973) — 5 comments. User demand for cheaper/plan-based provider billing.
- [#6811 — OpenAI Responses continuation summary ignores `disable_thinking` and misreports 60-second cancellation as malformed output](https://github.com/agentscope-ai/QwenPaw/issues/6811) — 5 comments. Closed bug affecting reasoning-model users.
- [#5856 — Tool_call structure lost during context compaction, causing 400 errors](https://github.com/agentscope-ai/QwenPaw/issues/5856) — 4 comments. Long-standing issue about structured tool data being flattened during summarization.
- [#6047 — New chat reopens old session after upgrade with stale `chats.json` ordering](https://github.com/agentscope-ai/QwenPaw/issues/6047) — 4 comments. Closed regression affecting session isolation.
- [#6847 — Antivirus kills QwenPaw during tasks, while WorkBuddy does not](https://github.com/agentscope-ai/QwenPaw/issues/6847) — 4 comments. Trust/security pain point from Chinese Windows users.
- [#6882 — How to integrate CopilotKit](https://github.com/agentscope-ai/QwenPaw/issues/6882) — 4 comments. Ecosystem integration request; closed.

The common thread: **context/state management and model-provider compatibility** dominate community concern, with a secondary theme around **deployment/security friction** (antivirus, background daemon, API exposure).

## 5. Bugs & Stability

Ranked by severity:

### High
- **Agent state saved to wrong session file under concurrent sessions (2.1.0 regression)** — one agent receiving messages in two concurrent sessions can persist state to the wrong session ([#7011](https://github.com/agentscope-ai/QwenPaw/issues/7011)). No fix PR yet; user reverted to 2.0.1.
- **Scroll compaction hides pre-compact chat history** — after `/compact` or auto-compaction, the UI only shows internal eviction indices, losing the user-visible transcript ([#6951](https://github.com/agentscope-ai/QwenPaw/issues/6951)). No fix PR yet.
- **Windows Desktop TUI fails with `transport: Connection closed`** — packaged `qwenpaw.exe` rejects `-m qwenpaw acp`, so the Textual TUI cannot start a session ([#7007](https://github.com/agentscope-ai/QwenPaw/issues/7007)). No fix PR yet.
- **Tool_call structure lost during context compaction** — causes 400 errors / message count mismatch; open since July 8 ([#5856](https://github.com/agentscope-ai/QwenPaw/issues/5856)). No direct fix PR visible.

### Medium
- **Anthropic false-positive “sensitive image” audit (1026)** — long history with normal images triggers model-side moderation and interrupts the session ([#7008](https://github.com/agentscope-ai/QwenPaw/issues/7008)).
- **Enabling Shabox breaks UV cache writes** — sandbox policy blocks `~/.cache/uv`; workaround is adding `Write(~/.cache/uv/**)` to `policy.yaml` ([#7005](https://github.com/agentscope-ai/QwenPaw/issues/7005)).
- **Probabilistic startup crash/exit on Windows v2.0.1 (pip install)** — async Windows event loop traceback ([#6955](https://github.com/agentscope-ai/QwenPaw/issues/6955)).
- **Antivirus forcibly terminates QwenPaw during execution** ([#6847](https://github.com/agentscope-ai/QwenPaw/issues/6847)).

### Low / Informational
- **False-positive Pod termination email** — Cloudflare Tunnel + monitor plugin flagged as “reverse proxy or mining” by platform automation ([#7009](https://github.com/agentscope-ai/QwenPaw/issues/7009)).
- **Language dropdown vs settings gear offer inconsistent language lists** ([#7006](https://github.com/agentscope-ai/QwenPaw/issues/7006)).
- **Security report about exposed `0.0.0.0:8088` and unauthenticated plugin API was closed as invalid** ([#6992](https://github.com/agentscope-ai/QwenPaw/issues/6992)) — maintainers may still want to verify the default network binding to address community concerns.

Other already-closed stability issues include #6811 (OpenAI Responses continuation summary), #6047 (stale session reopen), #6768 (infinite loop after task completion), and #6100 (lost workspace after upgrade).

## 6. Feature Requests & Roadmap Signals

High-signal user requests from the last 24 hours:

- **Session-level model selection** — users want per-session model choice, not only a global selector ([#7012](https://github.com/agentscope-ai/QwenPaw/issues/7012)).
- **Unified tool panel / Web preview / interactive terminal in Chat** — a workspace-style view for files, diffs, local services, and terminal ([#7013](https://github.com/agentscope-ai/QwenPaw/issues/7013)).
- **Embeddable chat sub-page** — open chat without sidebar/header, API key via URL, and richer session filtering ([#6970](https://github.com/agentscope-ai/QwenPaw/issues/6970)).
- **True daemon/background mode** — `qwenpaw app` blocks SSH/script execution; users want a headless/daemon mode ([#7010](https://github.com/agentscope-ai/QwenPaw/issues/7010)).
- **Alibaba Cloud Bailian token-plan support** ([#6973](https://github.com/agentscope-ai/QwenPaw/issues/6973)).
- **Memory-efficiency proposal (ViBo)** — claims 97.5% fewer memory tokens via encrypted memory management ([#7003](https://github.com/agentscope-ai/QwenPaw/issues/7003)).

Open PRs point toward the likely next-version themes: **cross-agent import (Pawport)** ([#6960](https://github.com/agentscope-ai/QwenPaw/pull/6960)), **Matrix per-sender isolation** ([#7001](https://github.com/agentscope-ai/QwenPaw/pull/7001)), **session-scoped project directories** ([#6976](https://github.com/agentscope-ai/QwenPaw/pull/6976)), **ReMe memory dashboard** ([#6984](https://github.com/agentscope-ai/QwenPaw/pull/6984)), and **provider discovery/routing unification** ([#6302](https://github.com/agentscope-ai/QwenPaw/pull/6302)). These align strongly with the community’s asks for better session/model control, memory visibility, and deployment flexibility.

## 7. User Feedback Summary

Real user pain points visible in the data:

- **Autonomy gap**: Agents frequently stop after planning (“Now 2.1, 3.1, 3.2…”) and wait for user prodding ([#6921](https://github.com/agentscope-ai/QwenPaw/issues/6921)).
- **Transcript trust**: Context compaction is expected to affect model input only, not destroy the user-visible conversation history ([#6951](https://github.com/agentscope-ai/QwenPaw/issues/6951)).
- **Security perception**: Antivirus false positives ([#6847](https://github.com/agentscope-ai/QwenPaw/issues/6847)), unauthenticated plugin/API concerns ([#6992](https://github.com/agentscope-ai/QwenPaw/issues/6992)), and plugins able to silently create cron jobs/inject messages ([#6916](https://github.com/agentscope-ai/QwenPaw/issues/6916)) all reduce trust.
- **Operational usability**: No daemon mode makes SSH/script launching awkward ([#7010](https://github.com/agentscope-ai/QwenPaw/issues/7010)).
- **UI friction**: language option inconsistency ([#7006](https://github.com/agentscope-ai/QwenPaw/issues/7006)) and dynamic character-count updates that “flash” ([#6585](https://github.com/agentscope-ai/QwenPaw/issues/6585)) were both raised.

On the positive side, the project demonstrates strong community engagement: 33.7k stars were cited by a proposal author ([#7003](https://github.com/agentscope-ai/QwenPaw/issues/7003)), the new v2.1.0 OS Shell is generating ecosystem interest, and first-time contributors are landing meaningful PRs in areas like import flows, provider templates, and session isolation.

## 8. Backlog Watch

Issues/PRs needing maintainer attention:

- **#5856 — Tool_call structure lost during context compaction** — open since July 8, high-impact for long-running agents, still no visible fix ([link](https://github.com/agentscope-ai/QwenPaw/issues/5856)).
- **#6302 — Unify provider discovery, model metadata, routing, and agent controls** — large architectural PR open since July 21 ([link](https://github.com/agentscope-ai/QwenPaw/pull/6302)).
- **#6715 — OneBot inbound media localization** — under review since August 5; important for OneBot channel users ([link](https://github.com/agentscope-ai/QwenPaw/pull/6715)).
- **#6847 — Antivirus kills QwenPaw during tasks** — open since August 9 with no maintainer response visible ([link](https://github.com/agentscope-ai/QwenPaw/issues/6847)).
- **#6921 — Agents stall mid-task and require user “continue”** — one of the most-commented issues today; likely deserves prioritization and a root-cause investigation ([link](https://github.com/agentscope-ai/QwenPaw/issues/6921)).
- **#7003 — ViBo memory proposal** — new but potentially valuable memory-efficiency direction; needs a maintainer triage response ([link](https://github.com/agentscope-ai/QwenPaw/issues/7003)).
- **#6992 — Closed invalid security report about exposed 0.0.0.0:8088** — even if invalid, the project should consider a short public clarification to avoid confusion ([link](https://github.com/agentscope-ai/QwenPaw/issues/6992)).

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-08-14

## 1. Today's Overview

ZeroClaw is in a high-intensity architecture and security hardening phase. In the last 24 hours, 50 issues were updated (37 open, 13 closed) and 50 PRs were updated (40 open, 10 closed), with zero new releases. Activity is concentrated around a cluster of long-running RFCs (goal-mode execution, shell-command policy, session ownership) plus active security remediation: a P1 gateway filesystem-containment fix (#9969) closed today while a P1 provider credential-integrity fix (#9968) remains open. The maintainer decision queue tracker ([#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692)) continues to accumulate RFCs awaiting review, suggesting governance throughput is the current bottleneck. Notably, several closed items today were small lifecycle/CI cleanups (temp-file leaks, dead CI paths), indicating steady hygiene work alongside the larger design effort.

## 2. Releases

No new releases in the last 24 hours. The most recent release-line activity is an accepted proposal for weekly lettered cuts within a numbered line (e.g., `v0.8.5-a`), filed as [#9712](https://github.com/zeroclaw-labs/zeroclaw/issues/9712) and closed today — a signal that the release process itself is being retooled.

## 3. Project Progress

**Closed/merged PRs (10 total):**

- **Security:** [#9969](https://github.com/zeroclaw-labs/zeroclaw/pull/9969) `fix(gateway): contain filesystem dashboard assets` (P1, high risk) — canonicalizes and confines filesystem-backed dashboard asset paths, rejecting symlink escapes.
- **Stability:** [#9674](https://github.com/zeroclaw-labs/zeroclaw/pull/9674) `fix(infra): preserve session queue serialization during eviction` (P1) — closes a race where idle eviction could remove a session slot before its pending count is visible.
- **Config:** [#9705](https://github.com/zeroclaw-labs/zeroclaw/pull/9705) `fix(config): allow config set on existing hyphenated cron aliases` — fixes rejection of valid aliases like `morning-brief`.
- **Lifecycle hygiene:** [#9709](https://github.com/zeroclaw-labs/zeroclaw/pull/9709) `fix(tts): clean up Edge TTS temp output on every error path` — closes temp-file leak on output-read failures.
- **CI:** [#9966](https://github.com/zeroclaw-labs/zeroclaw/pull/9966) `fix(container): match nested fixture manifests by glob` — fixes Docker dependency pre-fetch for nested workspace members.
- **CI:** [#9932](https://github.com/zeroclaw-labs/zeroclaw/pull/9932) `ci(codeql): drop rust/hard-coded-cryptographic-value` — removes a query producing 27 all-false-positive "critical" alerts.
- **Docs:** [#9639](https://github.com/zeroclaw-labs/zeroclaw/pull/9639) `docs(architecture): document provider routing lifecycle` — source-grounded page covering profiling, routing, retries, cooldowns, and attribution.
- **Validation-only:** [#9984](https://github.com/zeroclaw-labs/zeroclaw/pull/9984) — temporary Blacksmith runner cache-path validation PR, closed as intended.

**Closed issues indicating resolved work (13 total):** the unauthenticated `/api/pair` lockout bypass ([#9389](https://github.com/zeroclaw-labs/zeroclaw/issues/9389), P1 security), WIT enum-variant versioning docs gap ([#9643](https://github.com/zeroclaw-labs/zeroclaw/issues/9643), P1 plugin breakage), WhatsApp Web `approval_timeout_secs` config bug ([#9366](https://github.com/zeroclaw-labs/zeroclaw/issues/9366)), WeChat CI coverage gap ([#9951](https://github.com/zeroclaw-labs/zeroclaw/issues/9951)), desktop screenshot and Edge TTS temp-file cleanup ([#9710](https://github.com/zeroclaw-labs/zeroclaw/issues/9710), [#9706](https://github.com/zeroclaw-labs/zeroclaw/issues/9706)), and the weekly-lettered-release proposal ([#9712](https://github.com/zeroclaw-labs/zeroclaw/issues/9712)).

**Open PRs of note:** [#9968](https://github.com/zeroclaw-labs/zeroclaw/pull/9968) (P1, fail-closed Zhipu JWT handling), [#8713](https://github.com/zeroclaw-labs/zeroclaw/pull/8713) (SSRF opt-in gate for `file_download`), [#9203](https://github.com/zeroclaw-labs/zeroclaw/pull/9203) (authenticated HTTP fan-in for SOP), [#9420](https://github.com/zeroclaw-labs/zeroclaw/pull/9420) (Anthropic stored OAuth profiles), and [#9986](https://github.com/zeroclaw-labs/zeroclaw/pull/9986) (portable agent bundle export).

## 4. Community Hot Topics

Top issues by engagement (comment count):

1. **[#8303](https://github.com/zeroclaw-labs/zeroclaw/issues/8303) — RFC: Goal mode v1, bounded foreground Matrix work** (20 comments, 1 👍) — The most-discussed item. Proposes a durable single-objective execution mode; the original proposal was deemed too broad (restart handoff, Web, async child work) and is being narrowed. Signals demand for multi-turn goal pursuit.

2. **[#7155](https://github.com/zeroclaw-labs/zeroclaw/issues/7155) — RFC: per-execution confirmation tier for high-risk shell commands** (18 comments) — Now at Revision 3, narrowed to a reconciled shell-policy contract. Directly addresses operator anxiety about dangerous shell commands; waiting on maintainer review.

3. **[#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) — Tracker: Maintainer decision queue for RFCs** (13 comments) — The active queue for all RFC/design decisions. Its continued growth is the clearest signal of a maintainer-review bottleneck.

4. **[#9328](https://github.com/zeroclaw-labs/zeroclaw/issues/9328) — Bug: verifiable-intent evaluates constraints without verifying the credential chain** (12 comments) — A security bug in `vi_verify`: L2 constraints are evaluated against caller-supplied fulfillment without cryptographic chain verification. High risk, accepted/in-progress.

5. **[#6850](https://github.com/zeroclaw-labs/zeroclaw/issues/6850) — RFC: Decouple memory lifecycle policy from storage backends** (12 comments) — Long-running (since May) proposal to separate durable storage from consolidation/governance policy; stalled on `needs-author-action`.

6. **[#9487](https://github.com/zeroclaw-labs/zeroclaw/issues/9487) — RFC: Runtime-owned conversation sessions and transport surface adapters** (11 comments) — Tied to the [#9600](https://github.com/zeroclaw-labs/zeroclaw/issues/9600) session-persistence tracker; four independent workstreams are touching the same contract with no designated owner.

**Underlying needs:** the community is pushing for (a) a coherent permission/sandbox model (shell policy, SOP contracts, peer policy), (b) ownership clarity for cross-cutting contracts (sessions, memory, slash commands), and (c) a faster maintainer decision path to unblock accepted designs.

## 5. Bugs & Stability

**High severity (P1, security/runtime):**
- [#9389](https://github.com/zeroclaw-labs/zeroclaw/issues/9389) — `[Bug]: unauthenticated POST /api/pair keys its lockout on an attacker-supplied header` — **closed today**; attacker-controlled lockout bypass on pairing endpoint.
- [#9929](https://github.com/zeroclaw-labs/zeroclaw/issues/9929) — `headless SOP step turns given a session path but never persisted` (P1, S2 degraded behavior, blocked/accepted) — **open**; headless SOP turns get session identities but are never written to the session store.
- [#9643](https://github.com/zeroclaw-labs/zeroclaw/issues/9643) — WIT enum-variant addition breaks every previously compiled plugin (P1, docs) — **closed**; docs gap now addressed.

**Medium severity:**
- [#9951](https://github.com/zeroclaw-labs/zeroclaw/issues/9951) — WeChat channel + 51 unit tests never compile or execute in CI (P2) — **closed**.
- [#9366](https://github.com/zeroclaw-labs/zeroclaw/issues/9366) — WhatsApp Web accepts but never reads `approval_timeout_secs` (P2) — **closed**.
- [#9328](https://github.com/zeroclaw-labs/zeroclaw/issues/9328) — verifiable-intent skips credential-chain verification (P2, high risk, accepted/in-progress) — **open**.

**Low severity (P3, lifecycle hygiene) — all closed:** desktop screenshot temp-file leaks ([#9710](https://github.com/zeroclaw-labs/zeroclaw/issues/9710)), Edge TTS temp-file leaks ([#9706](https://github.com/zeroclaw-labs/zeroclaw/issues/9706)).

**Security fix PRs:** [#9969](https://github.com/zeroclaw-labs/zeroclaw/pull/9969) (dashboard asset path containment) **closed**; [#9968](https://github.com/zeroclaw-labs/zeroclaw/pull/9968) (Zhipu JWT fail-closed, P1) **open**; [#8713](https://github.com/zeroclaw-labs/zeroclaw/pull/8713) (file_download SSRF opt-in gate) **open**, needs author action.

## 6. Feature Requests & Roadmap Signals

The v0.9.0 milestone (tracked in [#7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432)) is the clear target for the current RFC wave: auth, security, gateway boundaries, tool policy, and breaking changes. Likely candidates for v0.9.0 based on acceptance status:

- **SOP permission contract** ([#9598](https://github.com/zeroclaw-labs/zeroclaw/issues/9598)) — explicitly targets v0.9.0; blocked pending the shared-policy decision.
- **Shell-command confirmation policy** ([#7155](https://github.com/zeroclaw-labs/zeroclaw/issues/7155)) — Revision 3 awaiting maintainer review.
- **Runtime-owned conversation sessions** ([#9487](https://github.com/zeroclaw-labs/zeroclaw/issues/9487)) — accepted direction, coordinated via tracker [#9600](https://github.com/zeroclaw-labs/zeroclaw/issues/9600), but blocked on ownership assignment.
- **Goal mode v1** ([#8303](https://github.com/zeroclaw-labs/zeroclaw/issues/8303)) — high demand; narrowing scope before acceptance.

Other notable user-driven requests:
- **OpenRouter prompt-cache savings via stable `session_id`** ([#9631](https://github.com/zeroclaw-labs/zeroclaw/issues/9631)) — blocked/needs-author-action; cost reduction is a clear user pain point.
- **LSP support for ZeroCode** ([#5907](https://github.com/zeroclaw-labs/zeroclaw/issues/5907)) — oldest open feature request (April); waiting on author response.
- **Expanded browser tool coverage** ([#9945](https://github.com/zeroclaw-labs/zeroclaw/issues/9945)) — only 16 of 100+ agent-browser commands exposed; accepted but blocked.
- **Agent Plugins 1.0 loading** ([#9810](https://github.com/zeroclaw-labs/zeroclaw/issues/9810)) — ecosystem play; blocked + needs-maintainer-review.
- **Schema-validated memory consolidation** ([#6998](https://github.com/zeroclaw-labs/zeroclaw/issues/6998)) and **image downscaling instead of dropping** ([#9887](https://github.com/zeroclaw-labs/zeroclaw/issues/9887)) — both address fragile multimodal/LLM output handling.
- **Provider-grouped Telegram /model picker** ([#9895](https://github.com/zeroclaw-labs/zeroclaw/issues/9895)) — accepted; mobile UX improvement.

## 7. User Feedback Summary

- **Cost sensitivity:** OpenRouter users report "dozens of LLM requests" per conversation replaying the same system prompt and tool schemas; stable `session_id` ([#9631](https://github.com/zeroclaw-labs/zeroclaw/issues/9631)) is a direct cost-savings request.
- **Permission friction:** The shell-policy RFC ([#7155](https://github.com/zeroclaw-labs/zeroclaw/issues/7155)) reflects user demand for fine-grained allow/ask/deny control over dangerous commands, in the style of Claude Code.
- **False-positive redaction:** Users report payment-request URLs made undeliverable because the leak detector redacts public blockchain addresses ([#9825](https://github.com/zeroclaw-labs/zeroclaw/issues/9825)) — the detector works as designed, but the policy needs exceptions.
- **Data loss / reliability:** Oversized images are silently dropped with a generic "N image(s) could not be loaded" message ([#9887](https://github.com/zeroclaw-labs/zeroclaw/issues/9887)); headless SOP runs produce sessions that are never persisted ([#9929](https://github.com/zeroclaw-labs/zeroclaw/issues/9929)).
- **Mobile UX:** Text-based `/model` selection is "cumbersome on mobile when many routes are configured" ([#9895](https://github.com/zeroclaw-labs/zeroclaw/issues/9895)).
- **Local-model coding:** LSP support ([#5907](https://github.com/zeroclaw-labs/zeroclaw/issues/5907)) is requested as a "useful backstop for agents to reduce hallucination, especially local models."
- **Satisfaction indicators:** Contributors are filing detailed, well-scoped security audits (e.g., [#9389](https://github.com/zeroclaw-labs/zeroclaw/issues/9389), [#9328](https://github.com/zeroclaw-labs/zeroclaw/issues/9328)) with reproduction-quality citations, and maintainers are responding with split-issue requests and accepted trackers — signs of a healthy, engaged contributor community despite the review bottleneck.

## 8. Backlog Watch

Items needing maintainer or author attention, ranked by age and importance:

- **[#5907](https://github.com/zeroclaw-labs/zeroclaw/issues/5907) — Opt-in LSP support** (2026-04-19; `needs-author-action`, P2) — oldest open feature; no maintainer response after nearly 4 months.
- **[#6850](https://github.com/zeroclaw-labs/zeroclaw/issues/6850) — RFC: Decouple memory lifecycle policy** (2026-05-22; `needs-author-action`, 12 comments, high risk) — a mature RFC stalled on author follow-through.
- **[#6998](https://github.com/zeroclaw-labs/zeroclaw/issues/6998) — Schema-validated memory consolidation** (2026-05-29; P2, high risk) — addresses fragile JSON parsing; no maintainer signal.
- **[#7155](https://github.com/zeroclaw-labs/zeroclaw/issues/7155) — Shell-command confirmation tier** (2026-06-03; `needs-maintainer-review`, 18 comments, Revision 3) — one of the top community threads; awaiting final review.
- **[#9631](https://github.com/zeroclaw-labs/zeroclaw/issues/9631) — OpenRouter stable `session_id`** (2026-08-01; `blocked` + `needs-author-action`) — straightforward cost-savings feature stuck on author response.
- **[#9810](https://github.com/zeroclaw-labs/zeroclaw/issues/9810) — Agent Plugins 1.0 loading** (2026-08-07; `blocked` + `needs-maintainer-review`) — ecosystem-relevant RFC; no maintainer review yet.
- **[#9880](https://github.com/zeroclaw-labs/zeroclaw/issues/9880) — Type resolved peer policy instead of `Vec<String>` grammar** (2026-08-10; `blocked` + `needs-maintainer-review`) — type-safety improvement to channel-external-peer policy.
- **[#9323](https://github.com/zeroclaw-labs/zeroclaw/issues/9323) — Execution-tree iteration budget ownership** (2026-07-24; `needs-author-action`, 4 comments) — `ToolLoop.shared_budget` is `None` in every production root, so the fan-out bound is effectively dead code.

The persistent `needs-maintainer-review` queue behind tracker [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) is the single largest risk to momentum: multiple accepted/blocked items are waiting on ownership decisions or review, and four independent workstreams are concurrently touching the session-persistence contract per [#9600](https://github.com/zeroclaw-labs/zeroclaw/issues/9600).

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/boom7sss/agents-radar).*