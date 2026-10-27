# OpenClaw Ecosystem Digest 2026-07-30

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-07-30 02:49 UTC

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

# OpenClaw Project Digest – 2026-07-30

## 1. Today’s Overview

OpenClaw continues to see extreme activity, with 500 issues and 500 pull requests updated in the last 24 hours. Of those, 450 issues remain open/active and 410 PRs are open, while 50 issues were closed and 90 PRs were merged or closed. This high volume reflects both a large community and an automated triage bot (clawsweeper) that refreshes stale items. No new releases were cut today. The project is wrestling with several critical bugs, particularly around crash-loop suppression, Codex integration performance, and message delivery reliability. Maintainer bandwidth appears strained, as many high-severity items carry `clawsweeper:needs-maintainer-review` tags.

## 2. Releases

No new releases today.

## 3. Project Progress

90 pull requests were merged or closed in the past 24 hours, indicating active development. Notable merged/closed PRs visible in the top activity include:

- **[PR #116084](https://github.com/openclaw/openclaw/pull/116084)** (closed) – chore(i18n): refresh native locales (Android, iOS, macOS). Keeps generated locale files in sync.
- **[PR #116000](https://github.com/openclaw/openclaw/pull/116000)** (open) – feat(cron): emit session reaper pruning metrics, adding Prometheus/OpenTelemetry instrumentation for cron-run cleanup.
- **[PR #115516](https://github.com/openclaw/openclaw/pull/115516)** (open) – refactor(codex): reuse shared `toErrorObject` coercion, reducing code duplication.
- **[PR #116188](https://github.com/openclaw/openclaw/pull/116188)** (open) – feat(gateway): advertise chat attachment limits on `hello-ok`, improving client-server contract.
- **[PR #97135](https://github.com/openclaw/openclaw/pull/97135)** (open) – fix(auto-reply): hide recovered failed tool progress, preventing misleading failure indicators.
- **[PR #80246](https://github.com/openclaw/openclaw/pull/80246)** (open) – feat(cron): include run time in failure alerts, reducing confusion from delayed notifications.
- **[PR #97676](https://github.com/openclaw/openclaw/pull/97676)** (open) – fix(security): avoid false-positive secret findings when config uses env references.
- **[PR #82572](https://github.com/openclaw/openclaw/pull/82572)** (open) – feat(queue): persist followup queues across gateway restarts (large, XL size).
- **[PR #98658](https://github.com/openclaw/openclaw/pull/98658)** (open) – fix(model-selection): warn on duplicate model aliases.
- **[PR #116190](https://github.com/openclaw/openclaw/pull/116190)** (open) – fix: restore doctor install-switch release proof.
- **[PR #98458](https://github.com/openclaw/openclaw/pull/98458)** (open) – fix(feishu): add video preview covers.
- **[PR #113515](https://github.com/openclaw/openclaw/pull/113515)** (open) – fix(memory): keep QMD file hints after stale docid misses.
- **[PR #115881](https://github.com/openclaw/openclaw/pull/115881)** (open) – fix(xai): classify 'run out of credits' as billing instead of auth.
- **[PR #116028](https://github.com/openclaw/openclaw/pull/116028)** (open) – fix(anthropic): bump emulated Claude Code version to support claude-opus-5.
- **[PR #112367](https://github.com/openclaw/openclaw/pull/112367)** (open) – refactor(googlechat,zalouser): declare single-account config promotion keys.
- **[PR #115891](https://github.com/openclaw/openclaw/pull/115891)** (open) – fix(auto-reply): deliver ingress-retried messages after their queued run is dropped.
- **[PR #115774](https://github.com/openclaw/openclaw/pull/115774)** (open) – fix(feishu): abort task signal on sequential queue timeout to prevent orphan ACP agents.

These changes span improved observability, security, message delivery, memory management, and provider compatibility.

## 4. Community Hot Topics

The most active discussions (by comment count and reactions) reflect deep operational pain points:

- **[Issue #115326](https://github.com/openclaw/openclaw/issues/115326)** (18 comments, 0 👍) – Crash-loop breaker suppresses Discord/WhatsApp permanently; documented recovery (`channels.start`) fails with WebSocket 1006. A regression that leaves channels unusable. No fix PR is linked yet; tagged `clawsweeper:needs-maintainer-review`.

- **[Issue #91009](https://github.com/openclaw/openclaw/issues/91009)** (18 comments, 2 👍) – Codex PreToolUse native hook relay spawns CPU-bound `openclaw-hooks` processes, stalling gateway RPC. This is a critical performance bug affecting all Codex users. Has a `clawsweeper:linked-pr-open` tag, suggesting a fix PR exists but is not visible in the top 30.

- **[Issue #86996](https://github.com/openclaw/openclaw/issues/86996)** (15 comments, 2 👍) – Active Memory + Codex app-server path causes long response latency, hook timeouts, startup aborts, and gateway event-loop stalls. Also impacts Telegram DMs. Tagged `clawsweeper-recovery-stuck`, meaning users are unable to recover automatically.

- **[Issue #39476](https://github.com/openclaw/openclaw/issues/39476)** (13 comments, 0 👍) – A2A `sessions_send` can cause duplicate messages when the target agent calls back. This issue is stale (since March) and still open, frustrating users.

- **[Issue #91363](https://github.com/openclaw/openclaw/issues/91363)** (10 comments, 6 👍) – Isolated cron consistently fails with "LLM request failed" on model-call-started phase. High reaction count indicates many users are affected. No fix PR linked.

- **[Issue #90354](https://github.com/openclaw/openclaw/issues/90354)** (11 comments, 1 👍) – Feature request for bounded/validated append semantics for pre-compaction memory flush. This is a design discussion around memory management guardrails.

The community’s needs center on reliability (crash-loop, message loss, cron failures), performance (Codex CPU usage, memory search timeouts), and better error recovery paths.

## 5. Bugs & Stability

The following high-severity bugs were active or updated today, ranked by impact:

| Severity | Issue | Description | Fix PR Exists? |
|----------|-------|-------------|----------------|
| **P0** | [#95515 (closed)](https://github.com/openclaw/openclaw/issues/95515) | Upgrade 2026.6.8→2026.6.9 corrupts email channel config with spurious `groupAllowFrom` field. | Closed as duplicate/fixed? Not detailed. |
| **P1** | [#115326](https://github.com/openclaw/openclaw/issues/115326) | Crash-loop breaker permanently suppresses Discord/WhatsApp; recovery fails. | No linked PR. |
| **P1** | [#91009](https://github.com/openclaw/openclaw/issues/91009) | Codex PreToolUse hook relay spawns CPU-bound processes, stalls RPC. | `linked-pr-open` suggests fix exists. |
| **P1** | [#86996](https://github.com/openclaw/openclaw/issues/86996) | Active Memory + Codex causes latency, hook timeouts, startup aborts. | `linked-pr-open` but stuck in recovery. |
| **P1** | [#115908](https://github.com/openclaw/openclaw/issues/115908) | Session transcript projection livelocks under sustained writes, blocking main thread. | No linked PR. |
| **P1** | [#89315](https://github.com/openclaw/openclaw/issues/89315) | Gateway heap grows unbounded, killed by OOM on long-running deployments. | No linked PR. |
| **P1** | [#91363](https://github.com/openclaw/openclaw/issues/91363) | Isolated cron fails consistently with LLM request failed. | No linked PR. |
| **P1** | [#86215](https://github.com/openclaw/openclaw/issues/86215) | Codex OAuth refresh failures can wedge agent for hours without alerting. | No linked PR. |
| **P1** | [#86684](https://github.com/openclaw/openclaw/issues/86684) | `sessions_yield` subagent wake compacts parent branch at low context usage (regression). | No linked PR. |
| **P1** | [#89278](https://github.com/openclaw/openclaw/issues/89278) | Codex OAuth refresh succeeds but cron/heartbeat fail with 10s timeout. | No linked PR. |
| **P1** | [#92433](https://github.com/openclaw/openclaw/issues/92433) | Subagent completion silently dropped when announce steers into requester run. | No linked PR. |
| **P1** | [#90944](https://github.com/openclaw/openclaw/issues/90944) | `sessions_yield` resume reply not delivered; auto-announce mirror delivered instead. | `linked-pr-open` suggests fix exists. |
| **P1** | [#91456](https://github.com/openclaw/openclaw/issues/91456) | Telegram DM lane remains guarded after send timeout, dropping messages. | `linked-pr-open` suggests fix exists. |
| **P2** | [#88657](https://github.com/openclaw/openclaw/issues/88657) | DeepSeek V4 Flash produces incomplete turns (regression in 2026.5.27/28). | No linked PR. |
| **P2** | [#91144](https://github.com/openclaw/openclaw/issues/91144) | Windows native CLI gateway Scheduled Task does not stay running. | No linked PR. |
| **P2** | [#97616](https://github.com/openclaw/openclaw/issues/97616) | OpenClaw leaks unreaped child processes (zombies) from hook/tool execution. | No linked PR. |
| **P2** | [#105528](https://github.com/openclaw/openclaw/issues/105528) | exec/read tools silently return empty output on Windows (regression). | No linked PR. |
| **P2** | [#112423](https://github.com/openclaw/openclaw/issues/112423) | Large SQLite transcript cleanup blocks gateway event loop. | No linked PR. |
| **P2** | [#115076](https://github.com/openclaw/openclaw/issues/115076) | Webchat messages with text+image misclassified as `source_modality: image`. | No linked PR. |
| **P2** | [#90692](https://github.com/openclaw/openclaw/issues/90692) | Thinking tags leak and truncation on heartbeat interrupt during streaming. | No linked PR. |

Several P1 bugs have linked PRs (e.g., #90944, #91456), but many remain without a known fix. The high number of P1 items suggests the project is in a firefighting mode.

## 6. Feature Requests & Roadmap Signals

User-requested features visible in the latest activity:

- **[#90354](https://github.com/openclaw/openclaw/issues/90354)** – Bounded/validated append semantics for pre-compaction memory flush. Likely to be picked up soon as it addresses data integrity.
- **[#88154](https://github.com/openclaw/openclaw/issues/88154)** – Slack Modal Support for interactive workflows. Community interest, but no linked PR yet.
- **[#81061](https://github.com/openclaw/openclaw/issues/81061)** – Pre-routing hook (`before_route_inbound_message`) for channel bridging. Tagged `linked-pr-open`, possibly in development.
- **[#13219](https://github.com/openclaw/openclaw/issues/13219)** – Per-model usage logging for cost tracking. A long-standing request (since February) with a linked PR, but still open.
- **[#91455](https://github.com/openclaw/openclaw/issues/91455)** – Documentation update for Kubernetes. `linked-pr-open`, suggesting a PR is close.
- **[#8299](https://github.com/openclaw/openclaw/issues/8299)** – Config option to suppress sub-agent announce. Ongoing discussion.

Next version may include: bounded memory flush, Slack modals, and per-model usage logging if linked PRs mature. The roadmap appears driven by community pain rather than a clear published plan.

## 7. User Feedback Summary

Users express significant dissatisfaction with reliability and recovery mechanisms. Key pain points:

- **Crash-loop breaker design**: "#115326 shows that the documented recovery fails, leaving channels dead." Users want robust self-healing.
- **Codex integration is brittle**: High CPU usage, OAuth timeouts, and missed completions (#91009, #86996, #86215, etc.) frustrate users who rely on Codex for app-server workflows.
- **Memory and context management**: `memory_search` timeouts, stale index metadata, and lack of bounded appends (#90361, #92633, #90354) hurt advanced use cases.
- **Cron and sub-agent reliability**: Isolated cron fails (#91363), subagent completions dropped (#92433), and run timeouts not propagated (#89095) erode trust in automation.
- **Platform-specific issues**: Windows Scheduled Task not staying running (#91144), hardcoded `/dev/null` stderr on macOS (#90711), and Feishu sanitization gaps (#90684) show cross-platform polish is lacking.
- **Upgrade regressions**: Several reports (e.g., #95515, #86684, #88657, #89278) indicate that each release introduces new regressions, shaking user confidence.

Positive signals: The community remains highly engaged, filing detailed bug reports and contributing PRs. The fast pace of PRs indicates active development, but users clearly want more focus on stability.

## 8. Backlog Watch

The following important issues have been open for a long time without clear maintainer action. They present risk of user abandonment or accumulated technical debt:

| Issue | Age | Impact | Status |
|-------|-----|--------|--------|
| [#39476](https://github.com/openclaw/openclaw/issues/39476) | ~5 months | Duplicate messages in A2A | Stale, P1, `linked-pr-open` |
| [#8299](https://github.com/openclaw/openclaw/issues/8299) | ~6 months | Config option to suppress sub-agent announce | Stale, P2, needs decision |
| [#13219](https://github.com/openclaw/openclaw/issues/13219) | ~6 months | Per-model usage logging | Stale, P2, `linked-pr-open` |
| [#43454](https://github.com/openclaw/openclaw/issues/43454) | ~4 months | Gateway lifecycle hooks (closed but reopened? it's CLOSED in the list but updated recently) | Closed (P3), but still discussed |
| [#52526](https://github.com/openclaw/openclaw/issues/52526) | ~4 months | `agent --json` returns pre-hook text | Stale, P2, needs security review |
| [#69086](https://github.com/openclaw/openclaw/issues/69086) | ~3 months | `attempt-execution` retry guard too broad | Stale, P2, needs decision |
| [#81061](https://github.com/openclaw/openclaw/issues/81061) | ~3 months | Pre-routing inbound message hook | Stale, P2, `linked-pr-open` |
| [#86063](https://github.com/openclaw/openclaw/issues/86063) | ~2 months | Anthropic cache invalidated every turn | P2, needs maintainer review |
| [#86684](https://github.com/openclaw/openclaw/issues/86684) | ~2 months | `sessions_yield` subagent wake compacts parent (regression) | P1, `needs-live-repro` |

These items, especially the P1 ones, deserve maintainer attention to reduce community frustration and prevent further regressions. The project would benefit from a dedicated stability sprint to address the backlog of critical bugs and unblock feature development.

---

## Cross-Ecosystem Comparison

# Cross-Project Ecosystem Comparison Report
**Date:** 2026-07-30  
**Analyst:** Senior Analyst, AI Agent Open-Source Ecosystem

---

## 1. Ecosystem Overview

The open-source personal AI assistant ecosystem is experiencing an intense maturation phase, characterized by high-velocity development across multiple competing architectures. The landscape spans from monolithic reference implementations (OpenClaw, IronClaw) to lightweight, focused tools (NullClaw, PicoClaw), and from research-grade agents (Hermes) to production-ready desktop applications (CoPaw, LobsterAI). A clear pattern emerges: every project struggles with reliability—crash-loop recovery, message delivery guarantees, and memory management regressions plague even the most active repositories. The community is unified in demanding better self-healing, cross-provider resilience, and deterministic behavior, while simultaneously pushing for multi-agent collaboration, rich desktop UIs, and expanded protocol support (MCP, A2A). The ecosystem is vibrant but fragile; projects that prioritize stability sprints over feature velocity are likely to gain user trust in the coming quarter.

---

## 2. Activity Comparison

| Project | Issues Updated (24h) | Open Issues | PRs Updated (24h) | Open PRs | Releases (24h) | Health Score* |
|---------|---------------------|-------------|-------------------|----------|----------------|---------------|
| **OpenClaw** | 500 | 450 | 500 | 410 | 0 | ⚠️ Moderate |
| **NanoBot** | 5 | 3 | 27 | 16 | 0 | ✅ High |
| **Hermes Agent** | 50 | 34 | 50 | 45 | 0 | ✅ High |
| **PicoClaw** | 1 | 1 | 0 | 1 | 0 | ❌ Low |
| **NanoClaw** | 0 | 1 | 9 | 3 | 0 | ✅ High |
| **NullClaw** | 1 | 1 | 4 | 2 | 0 | ✅ Moderate |
| **IronClaw** | 50 | 21 | 50 | 40 | 0 | ✅ High |
| **LobsterAI** | 0 | 0 | 16 | 3 | 0 | ✅ High |
| **Moltis** | 0 | 0 | 5 | 3 | 0 | ✅ Moderate |
| **CoPaw (QwenPaw)** | 30 | 24 | 48 | 37 | 0 | ✅ High |
| **ZeroClaw** | 50 | 40 | 50 | 43 | 0 | ✅ High |
| **TinyClaw** | 0 | 0 | 0 | 0 | 0 | ⏸️ Inactive |
| **ZeptoClaw** | 0 | 0 | 0 | 0 | 0 | ⏸️ Inactive |

*Health Score criteria: Active maintainer response to bugs, merged PRs vs open, community engagement, regression frequency.

**Key observations:**
- OpenClaw dominates raw volume but carries a disproportionate burden of unaddressed P1 bugs (12+ with no fix PR).
- IronClaw and ZeroClaw show strong closure rates (29/50 and 10/50 issues closed respectively), indicating responsive maintainers.
- PicoClaw, TinyClaw, and ZeptoClaw are effectively dormant—a risk for users depending on them.
- NanoBot and NanoClaw have small issue counts but high merge velocity, suggesting stable codebases.

---

## 3. OpenClaw's Position

**Advantages vs. Peers:**
- **Scale:** 500 PRs/day dwarfs all competitors (IronClaw: 50, Hermes: 50). OpenClaw is the undisputed largest contributor base.
- **Integration surface:** Supports Discord, WhatsApp, Telegram, Feishu, Slack, email, Codex, cron, A2A—more channels and providers than any other project.
- **Community investment:** 18+ comments on critical bugs (#115326, #91009) shows a highly engaged, vocal user base that files detailed reports.

**Technical Approach Differences:**
- **Monolithic architecture:** OpenClaw bundles everything (gateway, cron, Codex, memory, channels) into a single codebase. Competitors like ZeroClaw are moving toward modular, WASM-plugin architectures; IronClaw has a crate-based design.
- **Automated triage (clawsweeper):** Unique bot-driven issue management, but creates noise—450 open issues and stale items refreshed artificially inflate metrics.
- **Crash-loop breaker design:** A custom circuit-breaker for channel recovery is widely criticized (#115326). Competitors (NanoBot, NullClaw) use simpler, proven retry mechanisms.

**Community Size Comparison:**
- OpenClaw's 500 issues/day is 10× IronClaw or ZeroClaw. However, quality-per-issue is lower—many are stale or automated nags.
- Hermes and NanoBot have healthier signal-to-noise ratios (fewer total issues, higher fix rates).
- OpenClaw risks contributor burnout: maintainers are overwhelmed, as evidenced by the `clawsweeper:needs-maintainer-review` tag on critical P1 bugs.

**Adoption Risk:** OpenClaw's feature breadth comes at a stability cost. Users considering OpenClaw for production should plan for workarounds on crash-loop recovery, Codex performance, and memory management.

---

## 4. Shared Technical Focus Areas

The following requirements emerge across multiple projects, indicating industry-wide pain points:

| Technical Area | Affected Projects | Specific Needs |
|----------------|-------------------|----------------|
| **Crash-loop & self-healing** | OpenClaw (#115326), Hermes (#62792, #74267), ZeroClaw (#6724) | Robust recovery after gateway/channel failure; documented escape hatches that actually work |
| **Memory & context management** | OpenClaw (#86996, #90354), NanoBot (#5118), ZeroClaw (#9048, #9103), CoPaw (#6555) | Bounded append semantics, session compaction not dropping data, separation of ephemeral vs. durable memory |
| **MCP / A2A protocol support** | OpenClaw (A2A #39476), Hermes (MCP Comfy #57308), Moltis (ACP #1169), ZeroClaw (A2A #9106) | Reliable inter-agent communication, response-id matching, reconnection on backend restart |
| **WebUI & desktop UX** | NanoBot (#5164), IronClaw (#6776, #6891), CoPaw (#6560, #6542), LobsterAI (#2405) | Auto-save, emoji reactions, command palettes, session density, global shortcuts |
| **Windows compatibility** | Hermes (#74267, #62792), CoPaw (#6534), ZeroClaw (#9422) | NSIS installer fixes, Python venv lock issues, path normalization, `\\?\` prefix |
| **Cross-provider resilience** | OpenClaw (Codex #91009), IronClaw (Gemini #6786), NanoBot (OpenRouter #5094), ZeroClaw (OpenAI endpoint #8603) | Graceful fallback on quota exhaustion; consistent tool schema across providers |
| **Security & secret management** | OpenClaw (#97676), ZeroClaw (#9127, #9486), IronClaw (#6542) | Prompt injection hardening, high-entropy detector configs, KeySource abstraction |
| **Observability & instrumentation** | ZeroClaw (#8933), Moltis (#1174), IronClaw (#6524) | Cross-turn correlation, OTel exports, user feedback collection, Semgrep PR integration |

**Synthesis:** The ecosystem converged on three non-negotiable requirements: **(1) reliable self-healing under failure, (2) deterministic memory/context preservation, and (3) cross-provider compatibility.** Projects that solve these well will win user trust.

---

## 5. Differentiation Analysis

| Dimension | OpenClaw | NanoBot | Hermes | IronClaw | ZeroClaw | CoPaw (QwenPaw) | NullClaw | Moltis | LobsterAI |
|-----------|----------|---------|--------|----------|----------|-----------------|----------|--------|-----------|
| **Primary audience** | Enthusiasts / power users | Developers | Researchers | Enterprise developers | Enterprise ops | Desktop users | CLI users | Side-chat / workspace | Chinese enterprise |
| **Architecture** | Monolithic Python | Python modular | Python research | Rust crate-based | Rust modular (WASM) | Desktop + cloud | Minimal CLI | Side-chat overlay | Desktop + cloud |
| **Channel breadth** | Very high (9+) | Moderate (3-4) | High (6+) | Moderate (4-5) | Moderate (5+) | Low (primarily desktop) | Low (Telegram, chat) | Low (Slack, PWA) | Low (desktop) |
| **Stability emphasis** | Low (firefighting) | High | Moderate-High | High | Moderate (RFC-heavy) | Moderate | High | High | High |
| **Unique strength** | Largest community | Rapid merge velocity | MCP catalog | Signing security | RFC-driven design | Desktop UX depth | Simplicity | ACP integration | Chinese market |
| **Key differentiator** | Swiss Army knife | Pythonic developer experience | Nous Research pedigree | Code signing / trust | OpenAI-compatible endpoint | Qwen ecosystem | Zero-config CLI | Workspace side-chat | NetEase ecosystem |

**Strategic Observations:**
- **OpenClaw competes on breadth**, but this dilutes quality. Users who need many channels in one tool accept trade-offs.
- **ZeroClaw and IronClaw are the architectural leaders**—Rust-based, modular, with clear RFC processes. They are positioned for enterprise adoption.
- **NanoBot and NullClaw win on simplicity and stability.** Their small codebases are easier to maintain and debug.
- **CoPaw (QwenPaw) occupies a unique niche** as a fully-featured desktop app with auto-save, global shortcuts, and workspace checkpoints—features no other project offers at this polish level.
- **Moltis and LobsterAI are specialized** (side-chat, Chinese enterprise) and unlikely to compete broadly.

---

## 6. Community Momentum & Maturity

### Tier 1: Rapid Iteration (High Risk / High Reward)
| Project | Velocity | Stability Trend | Verdict |
|---------|----------|----------------|---------|
| **OpenClaw** | 🚀 Extremely high | 📉 Declining | Firefighting mode; feature breadth exceeds reliability |
| **ZeroClaw** | 🚀 Very high | 📈 Improving | RFC-driven design should reduce regressions |
| **IronClaw** | 🚀 Very high | 📈 Stable | Strong closure rates; enterprise-grade mindset |

### Tier 2: Steady Growth (Balanced)
| Project | Velocity | Stability Trend | Verdict |
|---------|----------|----------------|---------|
| **NanoBot** | ⏩ High | 📈 Improving | Quick bug fixes; session management still fragile |
| **Hermes** | ⏩ High | 📈 Improving | Desktop + MCP focus; test isolation gap closing |
| **CoPaw** | ⏩ High | 📉 Moderate | New features outpace bug fixes; desktop-specific regressions |
| **NullClaw** | ⏸️ Moderate | ✅ Stable | Small scope ensures reliability; scheduler fix pending |

### Tier 3: Consolidating (Low Activity)
| Project | Velocity | Stability Trend | Verdict |
|---------|----------|----------------|---------|
| **Moltis** | 🐢 Low | ✅ Stable | Internal development; no user-facing bugs |
| **LobsterAI** | 🐢 Low | ✅ Stable | Hotfix mode after release; daily check-in incoming |
| **PicoClaw** | 💤 Dormant | ❌ Stagnant | No merges in 24h; PR #3283 untouched 8 days |

### Tier 4: Inactive
| Project | Status |
|---------|--------|
| **TinyClaw** | ⏸️ Zero activity |
| **ZeptoClaw** | ⏸️ Zero activity |

**Implication for Developers:**
- PicoClaw, TinyClaw, and ZeptoClaw should be considered unmaintained. Avoid new deployments.
- OpenClaw offers the richest feature set but requires operational maturity to manage its instability. Best suited for teams with dedicated DevOps support.
- For production reliability, **IronClaw, NanoBot, and NullClaw** represent the safest bets today.

---

## 7. Trend Signals

### 1. Cross-Provider Resilience Is Non-Negotiable
Users are deploying AI assistants with multiple LLM providers (Claude, Codex, Gemini, Grok, DeepSeek). Every major project has bugs related to provider-specific quirks:    - Quota exhaustion fallback (NanoClaw PR #3057)  
    - Tool schema mismatches (IronClaw #6786, Gemini `type` field)  
    - OAuth refresh failures (OpenClaw #86215, #89278)  
    - Hardcoded model lists going stale (CoPaw #6479, NullClaw #981)  

**Signal:** The ecosystem is converging on abstraction layers (OpenAI-compatible endpoints, KeySource traits, fallback chains). The next wave will feature **automatic provider failover** as a standard capability.

### 2. Multi-Agent Protocols Become Infrastructure
A2A (OpenClaw #39476), MCP (Hermes #57308, ZeroClaw #9186), and ACP (Moltis #1169) are no longer theoretical—they're shipping with real bugs.  
- MCP stdio transport errors (response-id mismatches, hard timeouts) are the #1 source of S1 bugs in ZeroClaw.  
- A2A duplicate messages and callback loops frustrate OpenClaw users.  
- Community is demanding **deterministic inter-agent communication** with retry, idempotency, and reconnect semantics.

**Signal:** MCP/A2A will become table stakes within 6 months. Projects without protocol support risk obsolescence.

### 3. Memory Management Is the Hardest Problem
Every active project has memory-related bugs:  
- Session compaction dropping data (NanoBot #5167, CoPaw #6555)  
- Active Memory + Codex causing latency (OpenClaw #86996)  
- Media paths lost during consolidation (NanoBot #5118)  
- Long-term vs. short-term confusion (ZeroClaw #9048, #9103)  

**Signal:** The industry is moving toward **separation of concerns**—ephemeral conversation history separated from curated long-term memory, with bounded append semantics and deterministic compaction. This is a deep technical challenge that will define the next generation of AI assistants.

### 4. Desktop UX Is the New Battleground
CoPaw (auto-save, global shortcuts, workspace checkpoints), IronClaw (WebUI command palette, smoke tests), LobsterAI (daily check-in, side chat improvements), and Hermes (emoji reactions, session density) are all investing heavily in desktop experience.  
- Users expect **native OS integration**: global shortcuts, system tray, notification reliability, smooth animations.  
- **Conversation recovery after crash** is a top request (CoPaw #6542).  

**Signal:** Pure CLI/Telegram bots are commoditizing. Differentiation will come from polished desktop apps that reduce friction for power users.

### 5. Security Moves from Afterthought to Prerequisite
- Prompt injection hardening (ZeroClaw #9542, #9508)  
- Secret classification via KeySource trait (ZeroClaw #9127)  
- Code signing / trust registration (IronClaw #6813)  
- False-positive secret detection (OpenClaw #97676)  
- Per-account operators lists for privileged commands (Moltis #1170)  

**Signal:** Enterprise adoption is driving security as a first-class concern. WASM plugin sandboxes (ZeroClaw), credential pools (Hermes), and attestation-based signing (IronClaw) will become standard.

### 6. Windows Parity Remains Elusive
Hermes (#74267, #62792), CoPaw (#6534), and ZeroClaw (#9422) all have Windows-specific critical bugs. The ecosystem is overwhelmingly developed on Linux/macOS.  
- NSIS installer loops, Python venv lock conflicts, `\\?\` path issues, and `.pyd` file locks are recurring patterns.  

**Signal:** Projects that invest in Windows CI and cross-platform testing will capture a large underserved user base.

### Value for AI Agent Developers

1. **Prioritize reliability over features.** Users consistently rate crash-loop recovery and message delivery above new channels.  
2. **Invest in memory architecture now.** The separation of ephemeral vs. durable memory is a multi-month effort that will compound in value.  
3. **Adopt MCP/A2A early but expect instability.** Protocol support is mandatory for interop, but transport-level bugs will persist.  
4. **Build for provider independence.** Abstraction layers (OpenAI-compatible endpoints, KeySource, fallback chains) reduce lock-in and improve resilience.  
5. **Desktop users are your most valuable audience.** They file better bug reports, contribute code, and evangelize.  
6. **Windows is not optional.** Ignoring it leaves 25%+ of potential users stranded.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

**NanoBot Project Digest — 2026-07-30**

---

### 1. Today’s Overview

NanoBot saw **very high activity** over the past 24 hours, with **5 issues updated** (3 open, 2 closed) and **27 pull requests updated** (16 open, 11 merged/closed). No new releases were cut. Development velocity remains strong – the PR queue includes a mix of critical bug fixes, regression patches, and foundational enhancements such as strict type‑check enforcement, skill marketplace integration, and sub‑agent concurrency improvements. The project is healthy, with maintainers actively reviewing and merging contributions, though several long‑standing feature PRs still await final attention.

---

### 2. Releases

*No new releases were published in the last 24 hours.*

---

### 3. Project Progress

**Merged / closed PRs today (11 total; top items shown below):**

| PR # | Title | Impact |
|------|-------|--------|
| [#5167](https://github.com/HKUDS/nanobot/pull/5167) | fix(session): preserve history during idle compaction | Stops session compaction from dropping legitimate messages. |
| [#5164](https://github.com/HKUDS/nanobot/pull/5164) | fix(webui): prevent redundant thread and media reloads | Reduces unnecessary network requests in the WebUI. |
| [#5165](https://github.com/HKUDS/nanobot/pull/5165) | fix(webui): avoid false microphone silence errors | Ensures voice input works when waveform samples are silent but audio is present. |
| [#5158](https://github.com/HKUDS/nanobot/pull/5158) | refactor: enforce BasedPyright strict type checking | Adds `strict`‑mode type checking across 273 modules, improving long‑term code quality. |
| [#5116](https://github.com/HKUDS/nanobot/pull/5116) | feat(webui): add skill marketplaces and management | Introduces a Discover view for third‑party skill installation (skills.sh, SkillHub). |

These closures represent concrete progress in **session reliability**, **WebUI stability**, **type safety**, and **skill ecosystem growth**.

---

### 4. Community Hot Topics

**Most active Issue:**
- [#5000](https://github.com/HKUDS/nanobot/issues/5000) **[enhancement]** *Proposal: evolve the current subagent system toward multi‑agent collaboration*  
  *6 comments | Open since July 20*  
  The community is pushing for a shift from simple task delegation to a full multi‑agent architecture where sub‑agents have persistent identities and shared state. This is the top‑voted feature request and signals a clear roadmap direction.

**Most active PRs (by discussion – comment data not available, but based on age and conflict tags):**
- [#5034](https://github.com/HKUDS/nanobot/pull/5034) **[enhancement/feature]** *feat(goal): add durable state‑graph planning and recovery* (open 8 days, has conflicts)
- [#4919](https://github.com/HKUDS/nanobot/pull/4919) **[channel/feature]** *feat(telegram): support custom Bot API base URL* (open 16 days, has conflicts)
- [#5094](https://github.com/HKUDS/nanobot/pull/5094) **[fix]** *fix(providers): use canonical OpenRouter app URL* (open 4 days, has conflicts)
- [#5131](https://github.com/HKUDS/nanobot/pull/5131) **[conflict]** *feat(core): add stable resource path aliases* (open 2 days)

**Underlying needs:** Users want more sophisticated agent autonomy (multi‑agent, durable planning), flexible deployment (custom Telegram API), and better provider integration.

---

### 5. Bugs & Stability

**Newly reported bugs (in last 24h):**

| Issue | Severity | Summary | Fix PR exists? |
|-------|----------|---------|----------------|
| [#5163](https://github.com/HKUDS/nanobot/issues/5163) | **High** | Manual cron runs lose completion state when WebUI polling reloads store | No open PR yet |
| [#5159](https://github.com/HKUDS/nanobot/issues/5159) | **Medium** | Windows PowerShell 5.1 ExecTool corrupts non‑ASCII native pipeline input | Closed (resolved?) |
| [#5118](https://github.com/HKUDS/nanobot/issues/5118) | **High** | Session consolidation drops uploaded media paths carried only in `media[]` | Fix PR [#5139](https://github.com/HKUDS/nanobot/pull/5139) open |
| [#5161](https://github.com/HKUDS/nanobot/issues/5161) | Low (refactor) | Narrow file‑level Pyright suppressions | No fix needed |

**Bug‑fix PRs opened today (in addition to those merged):**
- [#5169](https://github.com/HKUDS/nanobot/pull/5169) – reject truncated JSON args and circuit‑break tool retry loops (addresses infinite retry loops)
- [#5168](https://github.com/HKUDS/nanobot/pull/5168) – handle dataclass instances in `CronJob.from_dict`
- [#5152](https://github.com/HKUDS/nanobot/pull/5152) – mark subagent partial completion results
- [#5151](https://github.com/HKUDS/nanobot/pull/5151) – release idle session locks
- [#5150](https://github.com/HKUDS/nanobot/pull/5150) – bound buffered session output in exec
- [#5146](https://github.com/HKUDS/nanobot/pull/5146) – drop malformed token‑usage day keys

Several of these fix long‑standing regressions (session locks, exec memory usage). The **cron state race (#5163)** remains the highest‑risk open bug with no fix PR yet.

---

### 6. Feature Requests & Roadmap Signals

**User‑requested features (from recent issues/PRs):**
1. **Multi‑agent collaboration** ([#5000](https://github.com/HKUDS/nanobot/issues/5000)) – persistently identified sub‑agents with shared state.
2. **Durable state‑graph planning** ([#5034](https://github.com/HKUDS/nanobot/pull/5034)) – `/goal` flow should preserve execution plans, dependencies, and recovery paths.
3. **Custom Telegram Bot API base URL** ([#4919](https://github.com/HKUDS/nanobot/pull/4919)) – support self‑hosted Bot API servers or enterprise gateways.
4. **Stable resource path aliases** ([#5131](https://github.com/HKUDS/nanobot/pull/5131)) – provide reliable views into agent, media, and package directories.

**Predictions for next release (v0.x):**  
Given the high activity and maintainer merging of skill marketplace and type checking, the next minor release will likely include:
- Multi‑agent sub‑system improvements (evolving #5000)
- Goal planning durability (merging #5034)
- Telegram custom API support (merging #4919 after conflict resolution)
- The remaining regression fixes for WebUI and session handling

---

### 7. User Feedback Summary

**Common pain points expressed through bug reports:**
- **Media unrecoverability** – files uploaded via `media[]` are lost during session archive (#5118). Several users rely on file attachments for long conversations.
- **Cron state inconsistency** – manually triggered jobs show as “Failed” in UI even after success (#5163). Undermines trust in automation.
- **PowerShell non‑ASCII corruption** – Windows users cannot pipe non‑ASCII text through `ExecTool` (#5159). Blocks localized workflows.
- **WebUI false‑silence errors** – voice input fails on quiet audio (#5165). Annoying for hands‑free use.
- **Session lock leaks** – idle sessions never release locks (#5151). Causes slow downs in long‑running agents.
- **Subagent partial results** – model incorrectly infers unfinished tasks (#5152). Confuses multi‑step tasks.

**Overall sentiment:** The community is engaged and actively reporting issues, which is a sign of healthy adoption. However, the volume of regressions (especially around session management and WebUI) suggests recent refactors introduced instability. The rapid pace of bug‑fix PRs indicates the maintainers are responsive.

---

### 8. Backlog Watch

**Long‑standing open items that may require maintainer attention:**

| Item | Created | Last Activity | Notes |
|------|---------|---------------|-------|
| [#4812](https://github.com/HKUDS/nanobot/pull/4812) – fix(memory): use .get() for role key | 2026-07-06 | 2026-07-29 | Conflict tag; simple fix but unresolved for 24 days. |
| [#4919](https://github.com/HKUDS/nanobot/pull/4919) – feat(telegram): support custom Bot API base URL | 2026-07-14 | 2026-07-29 | Popular feature; marked `conflict` – needs rebase. |
| [#5034](https://github.com/HKUDS/nanobot/pull/5034) – feat(goal): add durable state‑graph planning | 2026-07-22 | 2026-07-29 | Large change; multiple conflicts, but core feature. |
| [#5094](https://github.com/HKUDS/nanobot/pull/5094) – fix(providers): use canonical OpenRouter app URL | 2026-07-26 | 2026-07-29 | Conflict tag; simple fix for proper traffic attribution. |
| [#5139](https://github.com/HKUDS/nanobot/pull/5139) – Fix media paths during session consolidation | 2026-07-28 | 2026-07-29 | Critical bugfix for #5118; still open. |
| [#5156](https://github.com/HKUDS/nanobot/pull/5156) – fix(telegram): recover from silently stalled polling | 2026-07-29 | 2026-07-29 | Network resilience fix; no activity yet from maintainers. |

The **Telegram polling stall fix (#5156)** and **media path fix (#5139)** are especially time‑sensitive for users in production environments. Maintainers should prioritise rebasing and merging these.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-07-30

## Today's Overview

The project saw moderate activity with **50 issues** and **50 PRs** updated in the last 24 hours. Among issues, 34 remain open and 16 were closed; PRs have 45 open and 5 merged/closed. No new releases were published. The community is focused on resolving test isolation gaps, Windows compatibility, and several gateway delivery regressions. A notable number of feature PRs (especially around the desktop app) remain open, indicating steady feature development alongside bug-fixing.

## Releases

*No new releases were issued in the last 24 hours.*

## Project Progress

**Merged/Closed PRs (5 total):**
- [#68134 – fix(desktop): keep contentEditable composer from collapsing when empty](https://github.com/NousResearch/hermes-agent/pull/68134) – Fixes a visual bug where the desktop composer collapsed to a tiny height while typing.
- [#74518 – feat: re-add Vercel AI Gateway provider and Vercel Sandbox terminal backend](https://github.com/NousResearch/hermes-agent/pull/74518) – Modernized revert restoring Vercel provider and sandbox terminal.
- [#57308 – feat(mcp): add Comfy Cloud to MCP catalog](https://github.com/NousResearch/hermes-agent/pull/57308) – Adds remote HTTP + native OAuth 2.1 support for Comfy Cloud.
- [#66112 – feat(mcp): add Comfy Cloud with curated 20-tool default (salvage #57308)](https://github.com/NousResearch/hermes-agent/pull/66112) – Curated salvage with authorship preserved.
- (one additional merged PR not listed in top 20, bringing total to 5)

These merged PRs advance the MCP ecosystem and desktop stability, while the Vercel re‑addition re‑enables a previously removed provider path.

## Community Hot Topics

The most active discussions (by comment count) reveal several areas of user concern:

1. **[#53819 – Kanban DB corruption under high concurrent load](https://github.com/NousResearch/hermes-agent/issues/53819)** (8 comments, open, P3)  
   Users are analyzing root cause (concurrent SQLite writes from worker processes) and debating serialisation strategies. The community is highly engaged in finding a fix.

2. **[#19320 – Feature: Add Codex/openai `web.run` as search provider](https://github.com/NousResearch/hermes-agent/issues/19320)** (5 comments, open, P3)  
   A long‑standing request (since May) for native OpenAI web search support. Users want an alternative to third‑party search providers.

3. **[#50681 – Bug: pytest sessions leak into production state.db](https://github.com/NousResearch/hermes-agent/issues/50681)** (5 comments, closed)  
   A critical test isolation issue that was resolved (closed today). The root cause was a module‑level constant freezing `DEFAULT_DB_PATH` at import time.

4. **[#73939 – Bug: Gateway agent:end hooks omit turn exit reason and API call count](https://github.com/NousResearch/hermes-agent/issues/73939)** (5 comments, closed)  
   Gateway lifecycle hooks missing structured metadata. Fix merged.

5. **[#73771 – Session‑wide MEDIA dedup silently swallows explicit send‑again requests](https://github.com/NousResearch/hermes-agent/issues/73771)** (5 comments, closed)  
   Users reported that repeated media delivery requests were incorrectly blocked by deduplication logic.

Underlying needs: **test environment isolation**, **platform portability (Windows/macOS)**, and **feedback transparency** (hooks, dedup logs) dominate community concerns.

## Bugs & Stability

**P1 (Critical):**
- [#74267 – Windows Desktop updater falsely detects running Hermes processes and aborts update](https://github.com/NousResearch/hermes-agent/issues/74267) (open, 3 comments)  
  *Platform:* Windows. Prevents users from updating the desktop app even after clean reboot.
- [#74339 – Credential‑pool write‑through to global root self‑disables after first refresh](https://github.com/NousResearch/hermes-agent/issues/74339) (open, 2 comments)  
  *Area:* auth. Regression that breaks credential persistence on repeated refreshes.

**P2 (High):**
- [#73771 – Session‑wide MEDIA dedup silently drops repeat requests](https://github.com/NousResearch/hermes-agent/issues/73771) – closed, fix implemented on main.
- [#62792 – Desktop backend uses venv Python on Windows, holding .pyd locks that block updates](https://github.com/NousResearch/hermes-agent/issues/62792) (open, 2 comments)  
  *Platform:* Windows. Blocks auto‑update and manual `hermes update`.
- [#56303 – persist override still mutates live message list on tool‑loop flush path](https://github.com/NousResearch/hermes-agent/issues/56303) (open, 1 comment)  
  *Area:* agent/session state. In‑place mutation persists despite earlier fixes.
- [#29528 – Discord clicked slash‑command suggestions not normalized before dispatch](https://github.com/NousResearch/hermes-agent/issues/29528) (open, 2 comments)  
  *Platform:* Discord. Clicked suggestions arrive as mentions, breaking command detection.
- [#68077 – `sanitize_api_messages()` doesn't strip gateway‑only keys, causing HTTP 400 on strict‑schema providers](https://github.com/NousResearch/hermes-agent/issues/68077) – closed, fix implemented on main.

**P3 (Medium) – notable regressions:**
- [#73783 – main is red: photon U+FFFC salvage regression + runtime‑record tests need sidecar‑deps mock](https://github.com/NousResearch/hermes-agent/issues/73783) (open, 3 comments)  
  Two independent failures on `main` causing CI red for all PRs. No fix PR identified yet.
- [#56527 – x_search reads upstream response bodies without size limit](https://github.com/NousResearch/hermes-agent/issues/56527) (open, 3 comments)  
  Unbounded response parsing creates potential memory pressure.
- [#72884 – file‑mutation verifier falsely claims target unchanged after terminal mutation](https://github.com/NousResearch/hermes-agent/issues/72884) (open, 3 comments)  
  False negative inside turn‑end verifier.

*Note:* Several older test‑isolation bugs (e.g., #38034, #67385, #70041, #69283, #58609, #35404, #70813) were closed today, indicating ongoing improvements in CI/test hermeticity.

## Feature Requests & Roadmap Signals

High‑interest features requested or being implemented:

- **OpenAI `web.run` search provider** (#19320, open since May) – would unify search for OpenAI subscribers.
- **Multi‑app Feishu bots** (#68046, closed/implemented on main) – now supports routing multiple Feishu apps to different profiles.
- **Fallback model notification** (#68057, closed/implemented on main) – user gets alerted when a fallback model is activated.
- **Markdown table rendering with cell borders** (#28714, open, P3) – cosmetic improvement for CLI rendering.
- **Kanban cross‑board resource leases** (PR #68104) – adds exclusive locking for tasks across boards.
- **TTS ordered fallback chain** (PR #68113) – allows cascading TTS providers.
- **Desktop session list density modes** (PR #68124) – compact/comfortable/detailed views.
- **Safe agent‑authored movable views** (PR #68115) – new interactive desktop surface with trust boundary.
- **iMessage‑style emoji reactions on desktop** (PR #74533) – opt‑in, two‑way, persistent reactions.

*Prediction:* The desktop developer experience (composer, views, reactions) and MCP catalog additions are likely to appear in the next minor release. The Vercel re‑addition (#74518) may also be fast‑tracked.

## User Feedback Summary

**Pain points:**
- **Test environment pollution** remains a top concern – users reported pytest sessions corrupting real state.db (#50681) and kanban tests writing to real home directories (#69283). Though many were fixed today, the pattern indicates a systemic weakness.
- **Windows compatibility** continues to frustrate: update blockers (#74267, #62792), env variable stripping (#67385, #70813), and missing backspace (#68120) are frequently reported.
- **Silent failures** in gateway delivery (media dedup #73771, hook metadata #73939) erode trust in message handling.
- **macOS boot timeout** (#60323) and **credential refresh regression** (#74339) add to user friction.

**Satisfaction signals:**
- Users actively request new features (emoji reactions #74533, session density #68124) and contribute fixes (desktop composer #68134, TUI completions #68114). The community is engaged and willing to debug.
- The rapid closure of test isolation bugs today suggests maintainers are responsive to quality issues.

## Backlog Watch

Several important issues have been open for weeks or months without maintainer comment or resolution:

- [#6358 – SSE endpoint missing CORS headers](https://github.com/NousResearch/hermes-agent/issues/6358) (created 2026‑04‑09, open, 2 comments)  
  Blocks cross‑origin frontend integration. Needs a maintainer decision and fix.
- [#19320 – Add Codex/openai `web.run` search provider](https://github.com/NousResearch/hermes-agent/issues/19320) (created 2026‑05‑03, open, 5 comments)  
  Feature request with strong user demand (1 👍). No assignee or milestone.
- [#28714 – Markdown tables rendered without cell borders](https://github.com/NousResearch/hermes-agent/issues/28714) (created 2026‑05‑19, open, 1 comment)  
  Minor but visible cosmetic issue in CLI.
- [#29528 – Discord slash‑command normalization](https://github.com/NousResearch/hermes-agent/issues/29528) (created 2026‑05‑20, open, 2 comments)  
  Platform‑specific P2 bug with no linked PR.
- [#29532 – "Unknown toolsets: hermes" warning](https://github.com/NousResearch/hermes-agent/issues/29532) (created 2026‑05‑20, open, 2 comments)  
  User confusion from a spurious warning.
- [#60323 – Desktop backend timeout on macOS](https://github.com/NousResearch/hermes-agent/issues/60323) (created 2026‑07‑07, open, 2 comments, 1 👍)  
  Intermittent boot failure that prevents desktop use on macOS.

These issues would benefit from triage, assignment, or a roadmap comment to set community expectations.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-07-30

## Today’s Overview
Activity on the PicoClaw repository remained very low over the past 24 hours, with no new releases, no merged pull requests, and only a single issue update. One bug report (#3301) was opened and remains untriaged, while a feature PR (#3283) for DingTalk image support has been open for over a week without review. The project appears to be in a maintenance phase, with only minimal user interaction and no visible progress on either bug fixes or feature integration. Maintainer attention is needed to prevent further stagnation.

## Releases
No new releases were published during this period.

## Project Progress
No pull requests were merged or closed today. The only open PR, **#3283** (Adding DingTalk picture message inbound support), has seen no review activity since its last update on July 29. No functional advances or bug fixes were merged.

## Community Hot Topics
Only two items have been updated in the last 24 hours, neither with any comments or reactions:

- **Issue #3301** – *[BUG] /clear and session auto-compression don't work in chats routed to non-default agent via dispatch rules*  
  [GitHub Issue](https://github.com/sipeed/picoclaw/issues/3301)  
  Reported by `j-v` with no community engagement yet. The underlying need is a reliable session-clearing mechanism for multi-agent routing scenarios.

- **PR #3283** – *fix(dingtalk): support picture/image message inbound*  
  [GitHub PR](https://github.com/sipeed/picoclaw/pull/3283)  
  A substantial change adding image handling to the DingTalk channel, but has received zero comments or reviews since July 22.

The absence of any discussion or votes suggests that the PicoClaw community is either small, inactive, or that these items have not yet drawn attention.

## Bugs & Stability
- **#3301 (Medium Severity)** – `/clear` and session auto-compression fail when a chat is routed to a non-default agent via dispatch rules. This could break expected session management for users employing advanced routing. No fix PR exists, and the issue has not been acknowledged by maintainers.

No crashes or regressions were reported today.

## Feature Requests & Roadmap Signals
The only feature signal is **PR #3283** (DingTalk image support), which, if merged, would expand PicoClaw’s multi-channel capabilities. Given the lack of maintainer feedback, it is unclear whether this will be included in the next version. No other user-requested features were observed.

## User Feedback Summary
The sole user interaction (Issue #3301) highlights a real pain point for those using dispatch rules: session-clearing commands and auto-compression behave inconsistently across different agent routes. This indicates dissatisfaction with the current session management reliability, especially on resource-constrained platforms like Raspberry Pi. The absence of other feedback suggests either low adoption or a silent user base.

## Backlog Watch
- **PR #3283** – Open for 8 days with no review. This is a moderately complex feature implementation that may bit-rot if left unattended. Requesting maintainer triage.
- **Issue #3301** – New but requires maintainer acknowledgment to confirm reproduction and prioritize a fix.

Both items would benefit from a response from the project maintainers to keep the community engaged and the repository healthy.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest – 2026-07-30

## 1. Today's Overview
Project activity remains high with 9 pull requests touched in the last 24 hours and 6 of them merged or closed. The only new issue reports a significant silent data-loss bug in Telegram integration. Key fixes landed for the agent-runner’s duplicate-send guard, Slack thread history reloading, and a poll-loop session routing issue. Three open PRs are under active review, including a long-running dual-engine quota fallback feature and a database backfill migration. No new releases were cut today.

## 2. Releases
*(No new releases.)*

## 3. Project Progress – Merged/Closed PRs Today
Six pull requests were merged or closed in the last 24 hours:

- **#3152 – `docs: link architecture docs from README`** (closed) – Adds cross‑links to `REQUIREMENTS.md` and `SECURITY.md` from the README to improve discoverability.
- **#2476 – `Feat/restart no nanoclaw`** (closed) – A feature/operational PR allowing restart without requiring the `nanoclaw` binary; likely enables cleaner container restarts.
- **#3014 – `fix(agent-runner): bound hasIdenticalSend to the turn in flight`** (merged) – Critical fix ensuring the duplicate send detection is scoped to the current turn, preventing false positives or missed duplicates in multi‑turn conversations.
- **#3150 – `setup: fetch a hardened agent image instead of building it`** (merged) – Introduces a pre‑built, hardened container image from the NanoClaw registry (built by Echo) as an alternative to local builds. Makes setup faster and more secure for production deployments.
- **#2440 – `fix(poll-loop) + feat(agent): session routing fix and pre-compaction notification`** (merged) – Fixes the poll‑loop logic that previously used the wrong reply channel when container restarts occur mid‑batch. Also adds a pre‑compaction notification feature.
- **#2904 – `fix(slack): reload thread history from platform on @mention`** (merged) – Repairs a bug where `engage_mode: 'mention'` wirings never loaded Slack thread history, causing the bot to miss earlier human messages when re‑tagged deep inside a thread.

## 4. Community Hot Topics
- **Issue #3151 – Telegram `rich_message` silently dropped**  
  *Author: jonnychesthair-crypto | [GitHub](https://github.com/qwibitai/nanoclaw/issues/3151)* – The only new issue this update, reporting that rich content (formatted text, attachments) sent via Telegram’s Bot API 10.1 arrives completely empty. No errors are logged, making it a frustrating data‑loss scenario. The user observed this when pasting formatted content from a web page. Zero comments so far, but the underlying need is clear: Telegram integration must handle the new `rich_message` field without silently discarding it.

- **PR #3057 – Dual‑engine quota fallback (Claude→Codex, handoff recaps, proactive warnings)**  
  *Author: elia-ben-cnaan | [GitHub](https://github.com/qwibitai/nanoclaw/pull/3057)* – This open PR (updated Jul 29) is the largest ongoing change, battle‑tested in production for two weeks. It enables automatic fallback from Claude to Codex on quota exhaustion, with handoff recaps and proactive quota warnings. Attracts attention as a capacity‑management solution.

## 5. Bugs & Stability
| Severity | Bug | Status | Fix PR |
|----------|-----|--------|--------|
| **High** | #3151 – Telegram Bot API 10.1 `rich_message` content silently dropped. No text, no attachments, no pipeline error. | Open – no fix published yet | None |
| **Medium** | (Fixed) #3014 – `hasIdenticalSend` check not scoped to the current turn could cause incorrect duplicate detection. | Merged | #3014 |
| **Medium** | (Fixed) #2904 – Slack @‑mention mode never loaded thread history, making re‑tagging in deep threads lose all context. | Merged | #2904 |
| **Low** | #3145 – DB backfill migration missing channel destinations for old wirings. Open PR provides fix. | Open (#3145) | #3145 |
| **Low** | #3149 – CLI `groups config add-mount` missing `--rw` flag for read‑write mounts. Open PR adds it. | Open (#3149) | #3149 |

The Telegram bug (#3151) is the most critical open issue because it silently drops user data and could affect many deployments using rich formatting. No fix PR exists yet.

## 6. Feature Requests & Roadmap Signals
- **Dual‑engine quota fallback (PR #3057)** – Once merged, this will be a major capability for users hitting Claude rate limits, automatically switching to Codex. The inclusion of handoff recaps and proactive warnings makes it production‑ready.
- **Pre‑built hardened agent images (PR #3150)** – Already merged; indicates a push toward easier, more secure deployments. Likely to become the recommended setup path in upcoming releases.
- **Restart without `nanoclaw` (PR #2476)** – Merged; simplifies operational workflows and suggests improved container lifecycle management.
- **Backfill DB destinations (PR #3145)** – Still open; once merged, it will clean up legacy configurations that lacked channel destinations, preventing routing errors in group messaging.

**Prediction for next version:** The dual‑engine fallback system (PR #3057) is the most significant pending feature and has already seen production testing. It is likely to be included in the next minor release, along with the DB backfill migration (PR #3145) and the CLI `--rw` flag (PR #3149).

## 7. User Feedback Summary
- **Telegram rich‑message loss**: User “jonnychesthair‑crypto” reports a concrete pain point: pasting formatted content from web pages into Telegram results in invisible messages. This indicates that the integration needs to catch up with the latest Bot API version.
- **Slack thread context**: The merged fix (#2904) addresses a long‑standing complaint from users of `engage_mode: 'mention'` – the bot would only see the single @‑mention message, ignoring everything said before. The fix should significantly improve satisfaction for team‑chat deployments.
- **Operational friction**: The introduction of pre‑built images (#3150) likely stems from user feedback that local builds are too slow or error‑prone. No explicit complaints are recorded, but the change signals a demand for simpler setup.

No explicit negative feedback (other than the Telegram bug) appears in today’s data. Overall, the project is responding rapidly to reported issues.

## 8. Backlog Watch
- **PR #3057 – Dual‑engine quota fallback** – Open since July 15, actively updated (last update Jul 29). No maintainer action appears blocked, but it remains open for 15 days. Given its complexity, it may require additional review rounds.
- **PR #3145 – DB backfill destinations** – Open since July 28, updated Jul 30. This migration is important for production deployments with legacy wiring configurations. Could benefit from a maintainer’s final review.
- **Issue #3151 – Telegram rich‑message bug** – Only one day old, but no assignee or response yet. Given its high severity, a quick triage from the core team is advisable to prevent further user impact.

No other issues or PRs appear to have been ignored for an extended period.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest — 2026-07-30

## Today's Overview
Project activity today is moderate, with one open issue updated, four pull requests updated (two merged/closed, two open), and no new releases. The team is actively addressing a critical scheduler bug (Issue #915) via an open fix PR (#980), while also integrating two new features that were merged earlier: a Grok CLI provider and configurable memory recall settings. The project appears to be in a steady maintenance and feature-development cycle, with a focus on stability and extensibility.

## Releases
No new releases were published today.

## Project Progress
Two pull requests were merged/closed today:
- **#981 [CLOSED] feat(provider): add grok-cli provider for xAI Grok CLI** — Added a new CLI-based provider (`grok-cli`) that delegates to the local `grok` CLI, following the same spawn-per-request pattern as `codex-cli`. This expands provider options for users who have xAI’s Grok installed locally.  
  [GitHub](https://github.com/nullclaw/nullclaw/pull/981)
- **#961 [CLOSED] feat(memory): add configurable auto-recall, recall_limit, max_context_bytes** — Introduced three new memory configuration keys (`auto_recall`, `recall_limit`, `max_context_bytes`) that allow users to control memory enrichment behavior (e.g., disabling automatic recall, limiting number of entries, capping context size).  
  [GitHub](https://github.com/nullclaw/nullclaw/pull/961)

Two open pull requests remain in progress:
- **#980 [OPEN] fix(scheduler): persist paired token to disk during /pair** — Directly addresses the scheduler bug by ensuring the paired token is written to disk so the cron/schedule tool can authenticate against gateway admin routes.  
  [GitHub](https://github.com/nullclaw/nullclaw/pull/980)
- **#979 [OPEN] feat(memory): add configurable auto-recall, recall_limit, max_context_bytes** — Appears to be a duplicate or follow-up to #961 (which was merged), possibly containing additional refinements or fixes.  
  [GitHub](https://github.com/nullclaw/nullclaw/pull/979)

## Community Hot Topics
The most active issue is **#915 [OPEN] [bug] Problem with scheduler unauthorized**, with 3 comments and 1 👍 reaction. The user describes a scheduler not working in Telegram or chat when running NullClaw on Ubuntu with an external Ollama host (Qwen3.6:27b on RTX 3090). The underlying need is reliable scheduling functionality, which appears to be a core feature for automated workflows. The fix PR #980 is already open, suggesting the community and maintainers are aligned on the root cause (missing persistent paired token).  
[GitHub](https://github.com/nullclaw/nullclaw/issue/915)

All other PRs have zero comments, indicating limited discussion on recent features.

## Bugs & Stability
Only one bug is reported in the last 24 hours:
- **Issue #915** (scheduler unauthorized) — Medium-to-high severity. The scheduler tool fails to authenticate, making scheduled tasks unusable in both Telegram and chat interfaces. A fix PR (#980) is already open and targets the root cause: the `/pair` endpoint stores the token hash only in memory without persisting it to disk, so the scheduler’s `readPairedToken()` always returns `null`. Once merged, this should resolve the issue.

No other crashes, regressions, or stability issues were reported.

## Feature Requests & Roadmap Signals
The merged PR #961 (memory configurability) and #981 (Grok CLI provider) signal the project’s direction toward:
- **Better user control over memory recall** — Users can now disable automatic recall or limit recall entries/context size, improving performance and privacy.
- **Expanded provider support** — Adding support for xAI Grok CLI broadens LLM integration options for users who prefer or already use Grok.

The open PR #979 (a refined version of #961) may introduce additional tuning, though it’s unclear if it supersedes the merged one. The scheduler fix (#980) is a clear candidate for the next release. No major new feature requests were explicitly raised in the data, but the scheduler bug fix is likely the highest priority.

## User Feedback Summary
The only direct user feedback visible is from Issue #915: a real-world deployment using NullClaw with an external Ollama host and Qwen3.6:27b on an RTX 3090. The user explicitly states that “scheduler is not working… not in Telegram chat nor…” — a clear dissatisfaction with a core feature. The single upvote suggests at least one other user experiences the same pain. No positive feedback or satisfaction signals were recorded in the last 24 hours.

## Backlog Watch
**Issue #915** has been open since 2026-05-15 (over 2.5 months) and is the only long-standing issue updated today. Although a fix PR exists, the issue’s age and user impact warrant close attention from maintainers to ensure the PR is reviewed and merged promptly. No other stale issues or PRs were noted in the provided data.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

## IronClaw Project Digest — 2026-07-30

**Project:** [IronClaw](https://github.com/nearai/ironclaw)  
**Generated from:** GitHub activity in the last 24 hours

---

### 1. Today's Overview

IronClaw has seen very high activity with 50 issues and 50 pull requests updated in the last 24 hours. Of the issues, 29 were closed and 21 remain open — indicating a strong push to resolve bugs and wrap up feature work. Similarly, 10 PRs were either merged or closed, while 40 remain open with several large refactors and feature additions in flight. No new release was cut today, but the project continues to mature rapidly, especially around the "Reborn" architecture, WebUI improvements, skills, and signing security. The overall health appears positive with steady progress on both stability patches and new capabilities.

---

### 2. Releases

*No new releases were published today.*  
The last release PR ([#5598](https://github.com/nearai/ironclaw/pull/5598)) remains open, preparing `ironclaw_common` v0.5.0 and `ironclaw_skills` v0.4.0 with API breaking changes.

---

### 3. Project Progress

Today’s merged/closed PRs represent significant forward movement:

- **[PR #6890](https://github.com/nearai/ironclaw/pull/6890)** (size S, merged) — Fixed Windows clippy for legacy skill backfill imports.
- **[PR #6776](https://github.com/nearai/ironclaw/pull/6776)** (size XS, merged) — Added WebUI v2 smoke tests covering tool dispatch, cancellation, and approval gates through `ironclaw serve`.
- **[PR #6691](https://github.com/nearai/ironclaw/pull/6691)** (size XL, merged) — Major refactor of composition assembly, reducing `ironclaw_reborn_composition` by 9,421 lines and moving workflow ownership to the correct modules.

Key closed issues (today or recently) include:

- **Hermetic testing platform** — Epic [#6524](https://github.com/nearai/ironclaw/issues/6524) remains open, but many sub-issues such as runtime presets ([#3045](https://github.com/nearai/ironclaw/issues/3045)) and local developer profiles ([#3044](https://github.com/nearai/ironclaw/issues/3044)) were closed.
- **Event streaming** — [#3809](https://github.com/nearai/ironclaw/issues/3809) (EventStreamManager timeline) closed.
- **Approval security** — Critical issues for WebUI beta, such as attenuating approval leases ([#3609](https://github.com/nearai/ironclaw/issues/3609)) and sealing dispatch authority ([#3608](https://github.com/nearai/ironclaw/issues/3608)), were closed.
- **Tool approval coverage** — [#4633](https://github.com/nearai/ironclaw/issues/4633) added end-to-end test coverage for Reborn tool approval gates.
- **Process journal kernel** — [#6666](https://github.com/nearai/ironclaw/issues/6666) moved process journal logic into `ironclaw_processes`.

**Active large open PRs** that are advancing core features:

- [#6745](https://github.com/nearai/ironclaw/pull/6745) — Fixes to skill selection, installation, and completion (based on SkillsBench).
- [#6836](https://github.com/nearai/ironclaw/pull/6836) — WebUI design system refactor as `@ironclaw/ui`.
- [#6891](https://github.com/nearai/ironclaw/pull/6891) — Role-filtered command palette for WebUI (PR-2 of command train).
- [#6876](https://github.com/nearai/ironclaw/pull/6876) — Fix for smooth streaming and preserving model phases.
- [#6813](https://github.com/nearai/ironclaw/pull/6813) / [#6818](https://github.com/nearai/ironclaw/pull/6818) — Multi-tenant signing, trust registration, and Ledger clear-signing product (groups 7/8 and 8/8).

---

### 4. Community Hot Topics

Issues and PRs attracting the most discussion (comments/reactions) in the last 24 hours:

| Issue/PR | Comments | Summary |
|----------|----------|---------|
| [#6524](https://github.com/nearai/ironclaw/issues/6524) | 4 | Epic for hermetic capability & journey testing platform |
| [#6786](https://github.com/nearai/ironclaw/issues/6786) | 3 | Gemini provider sends empty `"type"` in tool schemas – 400 errors on every tool call |
| [#3045](https://github.com/nearai/ironclaw/issues/3045) | 3 | (Closed) Adding runtime presets for Reborn (low-level grants, mounts, etc.) |
| [#6790](https://github.com/nearai/ironclaw/issues/6790) | 2 | Restart during Codex authorization blocks WebUI and hides recovery code |

The underlying need in these threads is reliability and determinism: ensuring that every supported capability and user journey has meaningful testing, and that tool-calling across providers (especially Gemini) works correctly with properly shaped schemas. The runtime presets discussion reflects the community desire for simple, safe operating modes without hand-wiring low-level permissions.

---

### 5. Bugs & Stability

**Critical bugs reported or still open today (ranked by severity):**

1. **[#6786](https://github.com/nearai/ironclaw/issues/6786)** (open) — `provider_id="gemini"` sends empty `"type"` in tool schemas, causing 400 errors on every tool call. Affects all Gemini native integrations.
2. **[#6880](https://github.com/nearai/ironclaw/issues/6880)** (open) — `provider_id="gemini_oauth"` also 400s on tool calls because `shape_tool_schema` is bypassed entirely.
3. **[#6790](https://github.com/nearai/ironclaw/issues/6790)** (open) — Restart during pending Codex device authorization blocks WebUI and hides recovery code; users must restart again.
4. **[#6879](https://github.com/nearai/ironclaw/issues/6879)** (open) — Automation runs are hit-or-miss: same prompt sometimes succeeds, sometimes produces nothing, especially with small models.
5. **[#6877](https://github.com/nearai/ironclaw/issues/6877)** (open) — Channel command gating missing activation guard; latent trap not exploitable today but needs fix.
6. **[#6887](https://github.com/nearai/ironclaw/issues/6887)** (open) — `ironclaw_reborn_composition` test suite intermittently red under parallelism due to timeout contention, not a logic defect.
7. **[#6815](https://github.com/nearai/ironclaw/issues/6815)** (closed) — Turn-state store latched degraded forever after one write-behind flush failure, requiring manual restart. Fixed? (closed status suggests fix merged).
8. **[#6805](https://github.com/nearai/ironclaw/issues/6805)** (closed) — Instance intermittently returned `service_unavailable` ~every 30 min (bug_bash_P1). Likely fixed.
9. **[#6720](https://github.com/nearai/ironclaw/issues/6720)** (closed) — Task runs indefinitely and stop button fails to cancel (bug_bash_P1). Likely fixed.
10. **[#6348](https://github.com/nearai/ironclaw/issues/6348)** (closed) — Gmail extension automatically authorized without user consent after reinstall (security concern). Likely fixed.

**Fix PRs in flight:**  
- [#6876](https://github.com/nearai/ironclaw/pull/6876) aims to fix streaming event loss and model phase preservation.  
- [#6850](https://github.com/nearai/ironclaw/pull/6850) fixes approval gate “Always allow” persisting across tools (component regression).  
- [#6848](https://github.com/nearai/ironclaw/pull/6848) stabilizes Playwright nightly runtime shards.

---

### 6. Feature Requests & Roadmap Signals

Strong signals from today’s data:

- **Hermetic Testing Platform** ([#6524](https://github.com/nearai/ironclaw/issues/6524)) — An epic to mechanically answer whether every capability and journey has deterministic, meaningful coverage. Predictive: this will become a priority in the next release cycle, possibly spawning a dedicated crate.
- **Command Palette** ([#6891](https://github.com/nearai/ironclaw/pull/6891)) — Role-filtered slash commands in WebUI, sharing the channel door’s policy engine.
- **Skill System Fixes** ([#6745](https://github.com/nearai/ironclaw/pull/6745)) — Three fixes stemming from benchmarking self-improvement tasks. Suggests skills are being dogfooded intensively.
- **Multi-tenant Signing & Ledger Clear-Signing** ([#6813](https://github.com/nearai/ironclaw/pull/6813), [#6818](https://github.com/nearai/ironclaw/pull/6818)) — Final hardening and productization of the signing subsystem.
- **Coverage Enforcement** ([#6889](https://github.com/nearai/ironclaw/pull/6889)) — CI enforcing 85.11% aggregate Reborn coverage with strict changed-line and changed-branch floors.

These features are likely to land in the next minor release (0.5.0 or similar) given the number of large, nearly-ready PRs.

---

### 7. User Feedback Summary

Real pain points expressed in today’s issues:

- **Gemini tool-calling broken** — Two separate issues ([#6786](https://github.com/nearai/ironclaw/issues/6786), [#6880](https://github.com/nearai/ironclaw/issues/6880)) report that Gemini providers (native and OAuth) reject all tool calls because `type` field is missing or schema shaping is bypassed. Users who rely on Gemini are blocked.
- **Automation unreliability** ([#6879](https://github.com/nearai/ironclaw/issues/6879)) — Users report that automation runs are inconsistent; same prompt sometimes works, sometimes returns nothing, especially on smaller models. Structural issue in trigger/run pipeline.
- **Restart blocks WebUI** ([#6790](https://github.com/nearai/ironclaw/issues/6790)) — Hosted instance users face a situation where an incomplete Codex authorization prevents the WebUI from loading after restart, requiring manual recovery.
- **Service availability** — Issues [#6805](https://github.com/nearai/ironclaw/issues/6805) (intermittent 503s) and [#6815](https://github.com/nearai/ironclaw/issues/6815) (turn-state store latching) frustrated users on the QA instance, though both appear fixed.
- **UI friction** — Automations not visible in chat ([#6806](https://github.com/nearai/ironclaw/issues/6806)), cancellation failures ([#6720](https://github.com/nearai/ironclaw/issues/6720)), and native confirm prompts ([#6852](https://github.com/nearai/ironclaw/pull/6852)) point to ongoing WebUI polish.

Overall satisfaction signals: the team is responsive — many bug_bash_P1 issues were closed within hours. The community sees active improvements in WebUI and security.

---

### 8. Backlog Watch

Issues that appear important but may need maintainer attention:

- **[#6524](https://github.com/nearai/ironclaw/issues/6524)** (Epic, open since July 22) — The hermetic testing platform is broad; though sub-issues are closing, the epic itself may benefit from a clearer roadmap or milestone.
- **[#6887](https://github.com/nearai/ironclaw/issues/6887)** (open since July 29) — Intermittent test suite redness due to parallelism. Not a code defect, but flaky CI damages developer confidence.
- **[#3577](https://github.com/nearai/ironclaw/issues/3577)** (open since May 13) — Tracking v1 channel ports to Reborn. No recent updates; could be a candidate for deprecation or focused sprint.
- **[#6877](https://github.com/nearai/ironclaw/issues/6877)** (open since July 29) — Command gating activation guard and door-asymmetry decision; identified as a latent trap, though not exploitable today.

No obviously abandoned PRs or issues — the project maintainers have been highly responsive in the last 24 hours.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-07-30

## 1. Today's Overview
The project saw **no new issues** but **16 pull requests updated** in the last 24 hours, of which **13 were closed or merged**. This indicates a high-velocity maintenance and feature day, with the team focused on polishing the cowork (side chat) experience, fixing auth and window rendering glitches, and shipping a daily check-in feature. A release candidate (`Release/2026.7.24`) was merged yesterday, and today’s merges likely represent post-release hotfixes and small improvements. Overall project health appears strong, with steady contributor activity and no blocker regressions reported.

## 2. Releases
No new releases were published today. The most recent release branch `Release/2026.7.24` (PR #2407) was closed on July 29. No changelog or migration notes are available for today.

## 3. Project Progress
The following features and fixes were advanced or resolved today (all PRs closed/merged):

- **Daily check-in (open)** – PR #2408 adds a server-driven native daily check-in experience for the desktop sidebar and account menu; still open but under review.
- **Cowork (side chat) improvements** – Multiple merges by `liuzhq1986`:
  - `fix(cowork): improve side chat input handling` (#2406) — accumulate selected text, remove product-level length limit, retain safety checks.
  - `feat(cowork): add selected text tags to side chat` (#2405) — show selected text as removable context, add tests.
  - `fix(cowork): render export modal above sidebar` (#2376) — use body portal to avoid stacking conflicts.
  - `fix(cowork): prevent scroll jumps on session refresh` (#2364) — scope refresh by session ID.
  - `fix(cowork): prevent periodic IM message flicker` (#2363) — improve history reconciliation.
  - `fix(cowork): open email diagnostics in a new chat` (#2346) — prevent stale sessions.
- **Auth** – `fix(auth): preserve local callback across login retries` (#2360) — reuses active callback server, adds diagnostics.
- **Window rendering** – `fix(window): align Windows caption button hover colors` (#2355) — theme-aware surface colors.
- **Updater** – `chore(updater): reduce automatic update check interval` (#2347) — from 12h to 2h.
- **Refactor/revert** – `Refactor/kimi k3 auto only compat` (#2404) and `revert(openclaw): remove run-safety-contract gate` (#2403) — reverting a feature that caused release-blocking issues.
- **Cache fix** – `fix(cowork): true LRU eviction for LLM memory judge cache` (#1322) — fixes a stale cache bug.

## 4. Community Hot Topics
No issues or PRs received comments or reactions in the last 24 hours (all comment counts are `undefined`, 👍: 0). The **newly opened daily check-in feature PR (#2408)** is the most significant change and may attract community discussion in the coming days. The **stale open PR #1232** (scheduled task first-run UI notification) still lacks maintainer response.

## 5. Bugs & Stability
Several bugs were fixed today, ranked by impact:

- **High**: `fix(auth): preserve local callback across login retries` (#2360) – login retries could break due to stale callback server; now fixed with safe lifecycle diagnostics.
- **Medium**: 
  - `fix(cowork): prevent scroll jumps on session refresh` (#2364) – user experience issue when cowork session refreshed.
  - `fix(cowork): prevent periodic IM message flicker` (#2363) – flickering caused by wrong history comparison.
  - `fix(cowork): render export modal above sidebar` (#2376) – modal hidden behind sidebar in certain layouts.
- **Low**: 
  - `fix(window): align Windows caption button hover colors` (#2355) – cosmetic inconsistency.
  - `fix(cowork): open email diagnostics in a new chat` (#2346) – edge case where diagnostic replaces ongoing chat.
- **Regression avoided**: `revert(openclaw): remove run-safety-contract gate` (#2403) – a recently introduced client-side Run Safety design was reverted because of release-blocking issues (receipt keying, false-success followups, byte-accounting mismatches).

All bugs have associated fix PRs that were merged today. No new bugs were reported via issues.

## 6. Feature Requests & Roadmap Signals
The **daily check-in feature (PR #2408)** is a clear signal of product direction toward user engagement and retention mechanics. The **cowork selected-text tags (PR #2405)** indicate deeper integration of cowork with content selection workflows. These features are likely to be included in the next minor release after `2026.7.24`. No formal feature requests were filed as issues.

## 7. User Feedback Summary
No direct user feedback was captured today, but the volume of cowork fixes (flicker, scroll jumps, export modal, email diagnostics) suggests that these areas were causing notable user dissatisfaction. The reduction of update check interval from 12h to 2h (PR #2347) may be a response to user requests for faster update delivery. The daily check-in is a net-new feature that could improve user engagement.

## 8. Backlog Watch
- **PR #1232** (open, last updated 2026-07-29) – *“fix(scheduledTask): 修复定时任务首次执行结果不推送到 UI 的问题”* – Fix for scheduled task first-run result not pushed to UI. This PR has been open since April 2026, received recent activity (bot update?), but remains unmerged. The bug affects users relying on scheduled task notifications. Needs maintainer review.
- **PR #1277** (open, dependabot) – *“chore(deps-dev): bump the electron group across 1 directory with 2 updates”* – Stale dependency bump open since April, last updated July 29. Should be merged or refreshed to keep dependencies secure.
- **PR #2408** (open, created today) – *“feat(activity): add native daily check-in experience”* – New feature, should be reviewed promptly to avoid stagnation.

No long-unanswered issues exist (zero issues in total).

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-07-30

## Today’s Overview
The Moltis repository saw no new issues or releases in the last 24 hours, but development activity remains healthy with five pull requests updated. Two PRs were merged/closed, signaling progress on the ACP (Agent Communication Protocol) integration and PWA push notification reliability. The three open PRs continue to evolve, focusing on Slack acknowledgment lifecycle safety, privileged command gating, and a comprehensive instrumentation and feedback collection infrastructure. While community discussion (comments, reactions) is absent, the steady pace of feature work indicates a focused development phase.

## Releases
*None*

## Project Progress
Two pull requests were merged/closed today, advancing core features:

- **#1169 — feat(acp): expose Moltis as an ACP agent over stdio**  
  *Merged/closed* — Exposes Moltis as an ACP agent via the `moltis acp` command, routing through the cancellable `LiveChatService`. Enforces session isolation, bounded prompts/history/concurrency, and deterministic final-text reconciliation.  
  [PR #1169](https://github.com/moltis-org/moltis/pull/1169)

- **#1173 — feat(pwa): make push notifications reliable and non-disruptive**  
  *Merged/closed* — Improves PWA push notifications: re-alerts for new messages in the same chat, maintains unread counts, uses privacy-safe titles, strips rich formatting, and ensures cross-tab/cross-device consistency.  
  [PR #1173](https://github.com/moltis-org/moltis/pull/1173)

## Community Hot Topics
No new issues were created or updated today, and all PRs carry zero comments and zero reactions. The most actively evolving items are the three open PRs:

- **#1166 — feat(slack): per-message acknowledgment reactions, phases, reconnect supervision, and Block Kit**  
  Builds on earlier reaction-based acknowledgments to add lifecycle safety under queueing, cancellation, retries, and delivery failures.  
  [PR #1166](https://github.com/moltis-org/moltis/pull/1166)

- **#1170 — fix(channels): gate /sh and privileged tools behind a per-account operators list**  
  Separates channel access from privileged commands by introducing an explicit per-account `operators` list.  
  [PR #1170](https://github.com/moltis-org/moltis/pull/1170)

- **#1174 — Add instrumentation and feedback collection infrastructure**  
  Adds backend-neutral agent instrumentation, Langfuse v4 export, OTLP backends, and end-user reaction feedback.  
  [PR #1174](https://github.com/moltis-org/moltis/pull/1174)

The lack of community discussion suggests these PRs are maintainer-driven, but the scope (security gating, observability, Slack UX) reflects typical underlying needs for production AI assistant deployments.

## Bugs & Stability
No new bugs, crashes, or regressions were reported in the last 24 hours. There are no open issues tagged as bugs.

## Feature Requests & Roadmap Signals
No explicit feature requests were filed today. However, the three open PRs signal the likely next areas of focus for the project:

- **Production-grade Slack integration** (#1166) — Making acknowledgment reactions resilient to real-world message queueing and failures.
- **Access control hardening** (#1170) — Privilege separation beyond simple allowlists is a common enterprise requirement.
- **Observability and user feedback** (#1174) — Instrumentation and feedback collection are prerequisites for monitoring and improving agent quality. This feature may land in the next minor release.

## User Feedback Summary
There is no direct user feedback (comments, reactions, issues) in the data provided. The project appears to be in an active internal development phase with no visible end-user interaction on GitHub.

## Backlog Watch
No long‑unanswered issues or PRs were identified. The three open PRs have all been updated within the last 24–48 hours, indicating maintainer attention is current. No items require immediate maintainer intervention.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-07-30

## 1. Today's Overview
Project activity remains high with **30 issues** and **48 pull requests** updated in the last 24 hours. Of these, **6 issues** and **11 PRs** were closed/merged, indicating steady progress on both bug fixes and features. Community engagement is strong, particularly around stability regressions and UX improvements for the QwenPaw desktop and server components. The maintainer team appears responsive, with several critical bugs receiving fix PRs within the same day.

---

## 2. Releases
**No new releases** today. The latest available version remains **QwenPaw v2.0.1** (desktop) and **v2.0.0.post3** (server). No breaking changes or migration notes are pending.

---

## 3. Project Progress
The following pull requests were merged/closed today, advancing both stability and functionality:

- **[PR #6500]** – `fix(browser): make unauthenticated local CDP exposure opt-in` – Security hardening for browser automation. Now requires explicit consent rather than exposing Chrome DevTools Protocol on a local TCP port by default.
- **[PR #6553]** – `feat: redesign app center` – Splits the App Center into three tabs (My Apps, Official Apps, App Market). Defaults to installed apps, reduces initial third-party loading.
- **[PR #6269]** – `feat(checkpoints): add workspace checkpoint management` – Introduces recoverable conversation history via a workspace-scoped shadow Git store (`<workspace>/checkpoints`). Enables rollback without affecting the existing `.git` repository.
- **[PR #6479]** – `fix(providers): sync MiniMax model baseline with current platform lineup` – Updates hardcoded MiniMax model lists to match the official platform, fixing provider selection failures.

Additionally, a first-time contributor PR **[#6562]** (fixing bugs #6533, #6506, and #60) is open and under review.

---

## 4. Community Hot Topics
The most active discussions highlight several recurring pain points:

- **[Issue #6537](https://github.com/agentscope-ai/QwenPaw/issues/6537)** (9 comments) – *Skill tags disappear on restart (regression of #3270)*. Tags saved correctly via API but lost during manifest reconciliation on startup. High frustration due to data loss of custom configurations.
- **[Issue #6460](https://github.com/agentscope-ai/QwenPaw/issues/6460)** (4 comments) – *High CPU usage on Edge+Wayland*. Single tab consumes sustained CPU, suspected to be related to large result set rendering or WebSocket push.
- **[Issue #6464](https://github.com/agentscope-ai/QwenPaw/issues/6464)** (3 comments, closed) – *Connection test failure for all models* in AgentScope Platform deployment. Root cause appears to be a backend configuration gap.
- **[Issue #6524](https://github.com/agentscope-ai/QwenPaw/issues/6524)** (3 comments) – *MCP backend restart breaks client connection* until manual `list mcp` is executed. Session management gap for `streamable_http` connections.
- **[Issue #6542](https://github.com/agentscope-ai/QwenPaw/issues/6542)** (3 comments) – *Feature request: built-in auto-save* to prevent conversation history loss after crash.

**Underlying needs**: Users demand reliable state persistence, graceful handling of backend restarts, and better performance on non-Windows platforms.

---

## 5. Bugs & Stability

### Critical
| Bug | Description | Fix PR status |
|-----|-------------|---------------|
| [#6534](https://github.com/agentscope-ai/QwenPaw/issues/6534) – Windows installer infinite loop | NSIS matches itself as "QwenPaw still running", no bypass possible | No fix PR yet |
| [#6555](https://github.com/agentscope-ai/QwenPaw/issues/6555) – Memory compression misses early-session events | Dream process loses context if scrolled out before daily `.md` generation | **PR #6564** open |
| [#6565](https://github.com/agentscope-ai/QwenPaw/issues/6565) – Shell command bugs | Newlines collapsed to spaces; PIPE mode causes permanent hang on Linux | **PR #6566** open |
| [#6537](https://github.com/agentscope-ai/QwenPaw/issues/6537) – Skill tags lost on restart | Regression from #3270 | No fix PR yet |
| [#6558](https://github.com/agentscope-ai/QwenPaw/issues/6558) – Multiple UI data integrity issues | Messages lost on tab switch, instructions drift, replies re-render from scratch | No fix PR yet |

### High Severity
- [#6541](https://github.com/agentscope-ai/QwenPaw/issues/6541) – Scroll compression on DeepSeek uses `role=user` instead of `system`, causing API errors.
- [#6524](https://github.com/agentscope-ai/QwenPaw/issues/6524) – MCP client fails to auto-reconnect after backend restart.
- [#6460](https://github.com/agentscope-ai/QwenPaw/issues/6460) – Sustained high CPU on Edge+Wayland.
- [#6482](https://github.com/agentscope-ai/QwenPaw/issues/6482) – Console UI lag when switching chat/agent.
- [#6557](https://github.com/agentscope-ai/QwenPaw/issues/6557) – MCP tool names starting with `-` break strict LLM APIs like Kimi (**PR #6561** open for fix).
- [#6533](https://github.com/agentscope-ai/QwenPaw/issues/6533) – `/mission` command raises TypeError (`verification_instructions` missing) – included in **PR #6562**.
- [#6510](https://github.com/agentscope-ai/QwenPaw/issues/6510) – Chinese file paths URL-encoded on Feishu channel (2.0.x).
- [#6544](https://github.com/agentscope-ai/QwenPaw/issues/6544) – Feishu audio messages silent transcription failure in 2.x.

### Medium/Low
- [#6537](https://github.com/agentscope-ai/QwenPaw/issues/6537) – Misplaced cursor in Coding Mode editor (offset rendering).
- [#6549](https://github.com/agentscope-ai/QwenPaw/issues/6549) – Desktop input box obscured on Windows with high DPI scaling.
- [#6551](https://github.com/agentscope-ai/QwenPaw/issues/6551) – Aliyun coding plan model list mismatch.

**Notable**: Several regressions from the #6056 fix series (background offload) were reported in [#6245](https://github.com/agentscope-ai/QwenPaw/issues/6245) (closed today), indicating the previous patch introduced session‑blocking behavior. The fix in #6056 itself is now closed, but the regression chain shows the fragility of shell command lifecycle management.

---

## 6. Feature Requests & Roadmap Signals

| Issue | Feature | Likely for next version? |
|-------|---------|--------------------------|
| [#6542](https://github.com/agentscope-ai/QwenPaw/issues/6542) | Built-in auto-save for conversation history | **High** – data loss prevention is a top user pain point |
| [#6568](https://github.com/agentscope-ai/QwenPaw/issues/6568) | Global shortcut floating input (like Raycast/豆包) | **Medium** – requires new desktop integration |
| [#6475](https://github.com/agentscope-ai/QwenPaw/issues/6475) | `notice_after_complete` tool – agent can acknowledge long tasks and handle other queries | **High** – aligns with the agent multitasking vision |
| [#6421](https://github.com/agentscope-ai/QwenPaw/issues/6421) | QQ channel streaming output | **Medium** – depends on channel maintainer bandwidth |
| [#6560](https://github.com/agentscope-ai/QwenPaw/issues/6560) | Chat session UX improvements (copy, undo, stop, mission mode, context transfer) | **High** – multiple sub-requests with clear UX gaps |
| [#6559](https://github.com/agentscope-ai/QwenPaw/issues/6559) | Parent-child session grouping for forks | **Medium** – improves navigation but not critical |
| [#6408](https://github.com/agentscope-ai/QwenPaw/issues/6408) | `/undo` command | **Closed today** – likely implemented or declined; feature may already exist |
| [#6453](https://github.com/agentscope-ai/QwenPaw/issues/6453) | Preserve Chinese filenames in upload prompts | **Fix PR #6567** open – high chance for next patch |
| [#6563](https://github.com/agentscope-ai/QwenPaw/issues/6563) | CI blocks all fork PRs (permissions issue) | **Blocking** – must be resolved to enable external contributions |

**Prediction**: The next minor release (v2.0.2) will likely include auto-save, Chinese filename preservation, notice_after_complete, and the CI fix for forks. The global shortcut and session grouping may be planned for a later version.

---

## 7. User Feedback Summary

**Pain points**:
- **Data loss** – Conversations lost after crash (#6542), skill tags deleted on restart (#6537), memory missing early events (#6555), session history corrupted on tab switch (#6558).
- **Platform-specific issues** – Windows NSIS installer unusable (#6534), high CPU on Edge+Wayland (#6460), Chinese file paths broken on Feishu (#6510), audio transcription fails on Feishu (#6544).
- **MCP / Shell reliability** – Backend restart forces manual reconnect (#6524), long-running shell commands block sessions (#6245 regression), hyphens in tool names break strict APIs (#6557).
- **UI/UX frustrations** – Input box obscured on high-DPI (#6549), cursor misaligned in code editor (#6547), chat UI lacks undo/copy/stop (#6560), session list cluttered by unwanted forks (#6559).

**Satisfaction signals**:
- Positive community engagement with feature requests (e.g., #6560, #6475).
- Quick maintainer response – many issues have associated fix PRs within 24 hours.
- First-time contributors are active (PRs #6566, #6562, #6312), indicating a welcoming codebase.

---

## 8. Backlog Watch
No critical long-unanswered issues were identified from the last 24 hours. The oldest reopened issue in today’s data is **#6056** (July 13, closed today). Maintainers appear to be triaging effectively. However, **#6408** (undo feature, opened July 23) was closed today, and **#6407** (orphan tool_result messages) is being addressed in **PR #6540** – both show timely resolution.

One concern: **#6563** (CI bug blocking fork PRs) was opened yesterday and has no response yet. Since it blocks all external contributions, it deserves urgent maintainer attention. No PR is currently linked.

---

*All links are to the [CoPaw / QwenPaw repository](https://github.com/agentscope-ai/QwenPaw). Data refreshed as of 2026-07-30 23:59 UTC.*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-07-30

## Today’s Overview

ZeroClaw saw very high activity today with **50 issues updated** (40 open/active, 10 closed) and **50 PRs updated** (43 open, 7 merged/closed) in the last 24 hours. Work is concentrated on several major architectural RFCs—memory separation, a `KeySource` trait for secrets, an OpenAI-compatible endpoint, and a unified attachment/session architecture—indicating the project is in an intense design-and-implementation phase. No new releases were tagged. Security and observability improvements (prompt-injection hardening, OTel cross-turn correlation, Semgrep diff-aware findings) also saw attention from multiple contributors.

## Releases

None.

## Project Progress

Seven pull requests were merged or closed today, along with eight issues resolved.

**Merged/Closed PRs:**

- **#9205** (merged) – Centralized SOP fan-in ingress adapters, closing issue #8581. Adds a borrowed `SopIngress` adapter for shared engine/audit handle validation across channels.  
- **#9542** (closed) – Documents untrusted-GitHub-input doctrine for AI PR-review skills, hardening against prompt injection.  
- Other closed PRs (not individually listed but part of the 7 total) include minor fixes and documentation updates.

**Resolved Issues (all closed in the period):**

- **#8581** — Centralize SOP ingress adapters (completed via #9205).  
- **#7269** — Clean up docs build warning noise (minor docs fix).  
- **#9508** — Harden AI PR-review skills against prompt injection (documented via #9542).  
- **#8810** — Fix wrong Telegram example in documentation.  
- **#9239** — `config patch --json` now emits proper `ConfigApiError` envelope on all failure paths.  
- **#9422** — `zeroclaw-config` unit tests now compile on Windows (ungated `EnvValueGuard` fixed).  
- **#9186** — MCP stdio: response-id mismatches, hardcoded 30s timeout, and mutex-holding fixed (critical S1 bug).  
- **#9278** — `context_compression.enabled` default corrected to `false` to match runtime behavior.

**Notable Feature Advances (via open PRs under active development):**

- **#9525** (open) – Splits agent loop history into `loop_history` (past turns) and `loop_new_messages` (current turn), paving the way for a `before_llm_call` hook.  
- **#9194** (open) – Introduces `KeySource` trait and `FileKeySource` backend for master encryption key provisioning (closing RFC #9127).  
- **#8486** (open, large) – Adds an OpenAI chat completions endpoint, addressing #8550 and #8603.  
- **#9203** (open) – Wires authenticated HTTP fan-in for SOP, returning 404 when no match.  
- **#8313** (open) – Defaults skill injection to compact mode, deprecating full injection.

## Community Hot Topics

The most-discussed issues and PRs reveal three major areas of community interest: **memory architecture redesign**, **security/secrets abstraction**, and **OpenAI compatibility**.

| Item | Comments | Underlying Need |
|------|----------|----------------|
| **#9048** – RFC: Separate conversation history from agent-curated long-term memory | 11 | Users need clear separation between ephemeral session logs and durable learned knowledge; current mixing causes confusion and scalability issues. |
| **#9127** – RFC: Abstract `KeySource` trait for master-key sources | 9 | Administrators want to classify encryption key material by deployment form (file, env, KMS). 93 secret fields across config schema drive the need for a unified provisioning interface. |
| **#9106** – RFC: A2A outbound client (A2ATool) | 6 | Agents today cannot proactively call external A2A agents; inter-agent collaboration is forced through channels. This RFC would enable true multi-agent workflows. |
| **#8603** – RFC: OpenAI Chat Completions compatibility adapter | 6 | Clients like Open WebUI, LobeChat, and custom integrations can’t connect to ZeroClaw without building custom adapters. This is a top requested feature for ecosystem integration. |
| **#8933** – RFC: Add cross-turn conversation correlation to OTel export | 6 | Operators want to trace full conversation flows across turns for debugging and analytics; current OTel exports only track individual LLM calls. |
| **#9103** – RFC: Separate authoritative memory storage from enrichment connectors | 5 | Memory backend currently conflates durable store with “connector” backends (e.g., Lucid), making it impossible to have a non-authoritative enrichment pipeline. |

**PRs with ongoing discussion** (comments not shown, but high activity inferred from label changes and updates):

- **#9194** (KeySource trait) – 22 commits, includes `ProvisioningState` enum and object-safe callback design.  
- **#9525** (history split) – Direct precursor to a new `before_llm_call` hook, referenced by prior design work (#7846, #8784).  
- **#9477** – Fixes `<tools>` tag recovery for Qwen2.5-Coder-32B output; important for Hermes-compliance.  
- **#9423** – Stops reporting an unanswerable approval as user denial, affecting all non-interactive channel runs.

## Bugs & Stability

**Critical / High Severity Bugs Reported Today** (updated in the last 24h):

| Issue | Severity | Status | Description | Fix PR? |
|-------|----------|--------|-------------|---------|
| **#9340** – CLI-created cron jobs lose output (delivery hardcoded to `None`) | P1 | Open | Every CLI cron job gets `delivery.mode = "none"`; runs succeed but output discarded. | No PR yet. |
| **#9486** – High-entropy detector redacts Solana wallet addresses even with `high_entropy_tokens=false` on channels | P2 (risk:high) | Open | Telegram channel path ignores the config flag; agent cannot communicate wallet addresses. | No PR yet. |
| **#9506** – Email channel cannot preserve CC recipients or send Reply All | P2 (risk:high) | Open | Email can only send to one recipient; CC list ignored. | No PR yet. |
| **#6724** – Signal/Voice Call with empty credentials can crashloop supervisor | P3 (risk:high) | Open | Channels orchestrator exits and restarts every ~2s when no channel is actually enabled. | No PR yet. |
| **#9462** – `zeroclaw-plugins` lib unit tests behind `plugins-wasmtime` feature never execute in CI | P2 | In Progress | WASM plugin tests are gated behind a non-default feature; CI doesn’t test them. | No PR yet. |
| **#9186** – MCP stdio: response-id mismatch, 30s hard timeout vs tool budget | S1 | Closed (fixed) | Mutex held for whole call; timeout too short. | PR #? (closed today) |
| **#9422** – `zeroclaw-config` cannot compile on Windows | S2 | Closed (fixed) | `EnvValueGuard` under `cfg(unix)` used by an ungated test. | PR #? (closed today) |
| **#9278** – `context_compression.enabled` defaults true while runtime ignores it | S2 | Closed (fixed) | Default fixed to `false`. | PR #? (closed today) |

**Recent Fix PRs Active Today:**

- **#9497** (open) – Fixes `\\?\` verbatim prefix on Windows before passing paths to external `grep`.  
- **#9075** (open) – Fixes `models_cache.json` never being written; `zeroclaw models refresh` now persists.  
- **#9314** (open) – Telegram long-poll offset now advances only after successful delivery; prevents message loss on transient failures.  
- **#9208** (open) – Stops per-iteration deep-cloning of tool schemas (fixes performance and correctness in agent loop).  
- **#9229** (open) – Makes interactive Ctrl+C state-aware, replacing per-turn listeners with a single lifecycle.

## Feature Requests & Roadmap Signals

Several major RFCs are driving ZeroClaw’s near-term roadmap. The following are likely candidates for the next version (v0.9.x):

- **OpenAI Chat Completions Adapter** (#8603 / PR #8486) – The most requested feature; a large PR is active and has been under development for a month. Expected in next release.  
- **KeySource Trait & Secret Classification** (#9127 / PR #9194) – Close to merging; introduces a secure abstraction for encryption key material. Will likely land soon.  
- **Memory Architecture Separation** (#9048, #9103) – Two complementary RFCs proposing to split conversation history from curated memory and separate authoritative storage from enrichment connectors. These are high-priority and have strong community support.  
- **A2A Outbound Client** (#9106) – Enables agents to proactively call other A2A agents, unlocking true multi-agent workflows. Design is mature; implementation may follow after OpenAI endpoint lands.  
- **Realtime Speech-to-Speech Channel (Gemini Live)** (#8780) – Native audio-to-audio channel with Gemini; signals growing interest in multimodal interaction.  
- **Runtime-Owned Conversation Sessions** (#9487) – Refactoring WebSocket, dashboard, channels as transport adapters over a centralized runtime. Architectural shift for scalability.  
- **Mixture-of-Agents Virtual Provider** (#8568) – Allows chaining several models in parallel with an aggregator; power users want this for complex reasoning tasks.

**Other Roadmap Signals:**

- **WASM Plugins** (#8850) – Moving optional channels and tools from compile-time features to runtime WASM plugins. A tracker issue is accepted.  
- **Goal Controller & Verifier** (PR #8687, #8689) – Adds `/goal` command admission and completion gates across channels (Telegram, Matrix, WhatsApp, etc.). This indicates a push toward goal-oriented agent behavior.  
- **Unified Attachment Architecture** (#9488) – Proposed to handle file uploads consistently across web chat and channels.  
- **Semgrep Diff-Aware Findings as PR Comments** (#9511) – Security team wants findings visible in PRs, not just in Security tab. Blocked awaiting implementation.

**Predictions for v0.9.0:** OpenAI endpoint (PR #8486), KeySource trait (PR #9194), memory separation (at least one of #9048/#9103), and goal/command admission are the most advanced and have maintainer support. WASM plugin infrastructure may also ship as experimental.

## User Feedback Summary

**Pain Points Expressed (from issues and comments):**

- **OpenAI client incompatibility** – Repeated requests (issues #8550, #8603) from users of Open WebUI, LobeChat, LangChain, and Continue.dev that cannot connect natively.  
- **MCP instability** – Multiple S1 bugs in stdio MCP transport (response-id mismatch, hard timeout, mutex blocking) reported by at least one user (cursor[bot]). Fix merged today.  
- **Telegram redaction errors** – Solana wallet addresses incorrectly redacted even with config disabled (#9486). User @koshak01 reported in Russian.  
- **Cron job output loss** – CLI users cannot get output from scheduled tasks (#9340); @AngryPacifist highlighted the gap.  
- **Windows compilation failure** – Config crate didn’t compile on Windows (#9422), blocking Windows users from testing.  
- **Missing Reply All in Email** – Email channel limited to single recipient (#9506); @JordanTheJet noted enterprise usage is hampered.  
- **Documentation errors** – Telegram example was wrong (#8810), causing user frustration (“slop remains slop”).  
- **Context compression default mismatch** (#9278) – Users who expected compression on by default got no effect; fixed today.

**Satisfaction Signals:**

- Active participation by many contributors (Audacity88, REL-mame, IftekharUddin, JordanTheJet, NiuBlibing, perlowja, yanchenko, etc.) shows a healthy contributor community.  
- RFC process is being used extensively (many “type:rfc” items), indicating structured design discussion.  
- Trusted contributors are driving large architectural changes (KeySource, OpenAI endpoint, memory separation).  
- No reports of major regressions in recent releases.

## Backlog Watch

Several important issues and PRs require maintainer or author attention:

| Item | Type | Age | Reason for Attention |
|------|------|-----|----------------------|
| **#6864** – Invert zeroclaw-channels → zeroclaw-runtime dependency | Open RFC | Since 2026-05-23 | Foundational architecture issue; no assignee; listed as accepted but no PR. |
| **#6724** – Signal/Voice empty credential crashloop | Bug (P3, high risk) | Since 2026-05-16 | Old, open, with no fix PR. Causes supervisor instability. |
| **#9288** (not in top list but likely present) – Long-standing old issues? | – | – | Review all issues older than 30 days. |
| **#8692** – Maintainer decision queue tracker | Tracker | Since 2026-07-04 | Central list of RFCs pending maintainer decisions; many items likely need explicit accept/reject. |
| **#8288** – SOP milestone tracker | Tracker | Since 2026-06-24 | Coordinates 13 capabilities; some may be stalled. |
| **PR #8486** (OpenAI endpoint) | PR | Since 2026-06-29 | Large PR with “needs-author-action” label; maintainer review required. |
| **PR #8687** (goal controller) | PR | Since 2026-07-04 | “needs-author-action”; needs maintainer decision. |
| **PR #8689** (goal command admission) | PR | Since 2026-07-04 | Same as #8687; large PR with 20+ files changed. |
| **PR #9208** (fix tool-schema deep clones) | PR | Since 2026-07-20 | “needs-author-action”; important for agent loop performance. |
| **PR #9314** (Telegram long-poll offset) | PR | Since 2026-07-23 | “needs-author-action”; critical for Telegram reliability. |
| **PR #9548** (warn on risky Codex CLI args) | PR | 1 day old | “needs-author-action”; security-related. |
| **PR #9511** (Semgrep PR comments) | Feature | 1 day old | Blocked with “status:blocked”; maintainer attention needed to unblock. |

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/boom7sss/agents-radar).*