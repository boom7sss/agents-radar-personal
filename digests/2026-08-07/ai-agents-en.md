# OpenClaw Ecosystem Digest 2026-08-07

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-08-07 02:55 UTC

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

## 1. Today's Overview

As of 2026-08-07, OpenClaw is in a high-activity maintenance cycle: 500 issues and 500 PRs were updated in the last 24 hours, with 70 issues closed and 103 PRs merged/closed. No new release was published. The open queue is dominated by P1/P2 bug reports around memory/compaction behavior, channel delivery failures, and agent orchestration. Community engagement is strong, but project stability is currently at risk due to two open P0 regressions affecting database migration and context-window data loss.

---

## 2. Releases

No new releases were published in this period. The latest releases list is empty, so there are no changelog, breaking-change, or migration notes to report.

---

## 3. Project Progress

103 PRs were merged/closed overall, though the top-30 PR list does not show any merged PRs. Six notable PRs were closed as **superseded**, indicating active consolidation around gateway lock-file isolation and memory status reporting:

- [PR #119573](https://github.com/openclaw/openclaw/pull/119573) — fix(acp): pass agent configured model to runtime session initialization
- [PR #118409](https://github.com/openclaw/openclaw/pull/118409) — fix: keep sandboxed gateway locks out of live state dirs
- [PR #119226](https://github.com/openclaw/openclaw/pull/119226) — fix(infra): derive gateway lock dir from resolved state dir
- [PR #119240](https://github.com/openclaw/openclaw/pull/119240) — fix(memory): report vector store available on fast status path
- [PR #117572](https://github.com/openclaw/openclaw/pull/117572) — fix(memory): distinguish persisted vector index status
- [PR #118421](https://github.com/openclaw/openclaw/pull/118421) — fix(memory-core): report vector store ready from persisted chunks on fast path

Several important open PRs are still in flight:

- [PR #116382](https://github.com/openclaw/openclaw/pull/116382) — fixes false “thread switched branches” errors after background updates
- [PR #120076](https://github.com/openclaw/openclaw/pull/120076) — adds MCP OAuth loopback callback listening
- [PR #119976](https://github.com/openclaw/openclaw/pull/119976) — redacts exposed Authorization headers in Nextcloud Talk error responses
- [PR #120126](https://github.com/openclaw/openclaw/pull/120126) — logs Telegram error-notification send failures instead of silently swallowing them
- [PR #119325](https://github.com/openclaw/openclaw/pull/119325) — adds session-only `/model -s` selection

---

## 4. Community Hot Topics

The most active issues show strong user demand around platform coverage, model reliability, and memory safety:

- [Issue #75](https://github.com/openclaw/openclaw/issues/75) — Linux/Windows Clawdbot Apps: 116 comments, 80 👍. Closed, but clearly a high-demand feature gap.
- [Issue #116277](https://github.com/openclaw/openclaw/issues/116277) — DeepSeek v4 Flash silent reply failure: 114 comments. The community extensively debugged a no-reply fallback path.
- [Issue #7707](https://github.com/openclaw/openclaw/issues/7707) — Memory Trust Tagging by Source: 28 comments. Reflects concern about memory poisoning from untrusted content.
- [Issue #27445](https://github.com/openclaw/openclaw/issues/27445) — `announceTarget` for sub-agent completion routing: 12 comments, 5 👍. Users want stronger multi-step orchestration.
- [Issue #88657](https://github.com/openclaw/openclaw/issues/88657) — DeepSeek V4 Flash incomplete turn regression: 10 comments.
- [Issue #90354](https://github.com/openclaw/openclaw/issues/90354) — Bounded/validated append semantics for pre-compaction memory flush: 10 comments.

Underlying themes: users need reliable model replies, better observability, memory hardening, and cross-platform desktop availability.

---

## 5. Bugs & Stability

### P0 — critical

- [Issue #119263](https://github.com/openclaw/openclaw/issues/119263) — Agent DB v14→v15 migration fails with `no such column: entry_valid`; gateway refuses to start. No fix PR is visible.
- [Issue #118772](https://github.com/openclaw/openclaw/issues/118772) — `sessionEntry.totalTokens` inflation triggers premature compaction at 4–8% of the context window, causing data loss. No fix PR is visible.

### P1 — high severity

- [Issue #119087](https://github.com/openclaw/openclaw/issues/119087) — Gateway cold start regressed ~2.5x from 2026.7.1-beta.1 to 2026.7.2-beta.7 on 1-vCPU containers.
- [Issue #115700](https://github.com/openclaw/openclaw/issues/115700) — `chat.send` rejected with “thread switched branches” after model completion. Fix PR: [PR #116382](https://github.com/openclaw/openclaw/pull/116382).
- [Issue #117209](https://github.com/openclaw/openclaw/issues/117209) — Sticky `AuthProfileStoreUnreadable` error after runtime snapshot publication failure.
- [Issue #117445](https://github.com/openclaw/openclaw/issues/117445) — Feishu inbound DMs decoded as `?` and never answered.
- [Issue #118489](https://github.com/openclaw/openclaw/issues/118489) — Failed-tool finalization skipped after prior tool presentation or stale lifecycle state.
- [Issue #119333](https://github.com/openclaw/openclaw/issues/119333) — Codex `request_user_input` exposed in Default mode but rejected at runtime.
- [Issue #117358](https://github.com/openclaw/openclaw/issues/117358) — Post-turn compaction ignores compaction/reset boundaries and delays completed replies.
- [Issue #115546](https://github.com/openclaw/openclaw/issues/115546) — CLI-budget compaction times out far below deadline; 100% failure on large sessions.
- [Issue #92186](https://github.com/openclaw/openclaw/issues/92186) — WhatsApp foreground reply fence drops earlier concurrent group replies.
- [Issue #90789](https://github.com/openclaw/openclaw/issues/90789) — claude-cli synthetic “No response requested.” leaves Telegram turns fully silent.
- [Issue #86012](https://github.com/openclaw/openclaw/issues/86012) — LINE messages silently lost due to reply-token expiry.
- [Issue #86050](https://github.com/openclaw/openclaw/issues/86050) — Gateway buffers claude-cli stream events; surfaces only see the final message.
- [Issue #109881](https://github.com/openclaw/openclaw/issues/109881) — Bedrock thinking-signature replay issue can permanently brick Claude 4+ sessions.
- [Issue #95553](https://github.com/openclaw/openclaw/issues/95553) — Preflight compaction hard-capped at ~60s, ignoring `compaction.timeoutSeconds`.
- [Issue #86119](https://github.com/openclaw/openclaw/issues/86119) — Orphaned `node server.js` worker processes accumulate after embedded agent runs.

### P2 — notable

- [Issue #119796](https://github.com/openclaw/openclaw/issues/119796) — Windows vitest teardown fails with EBUSY on agent state DB.
- [Issue #116512](https://github.com/openclaw/openclaw/issues/116512) — Telegram progress mode duplicates first commentary when snapshot IDs change.
- [Issue #88079](https://github.com/openclaw/openclaw/issues/88079) — WebChat does not stream `reasoning_content` for Kimi Code and DeepSeek Reasoner.
- [Issue #119557](https://github.com/openclaw/openclaw/issues/119557) — Chat delta throttle has no trailing flush, so withheld chunks wait for the next event.

---

## 6. Feature Requests & Roadmap Signals

Strong roadmap signals from open feature requests:

- **Cross-platform clients:** [Issue #75](https://github.com/openclaw/openclaw/issues/75) — Linux/Windows apps.
- **Memory security:** [Issue #7707](https://github.com/openclaw/openclaw/issues/7707) — memory trust tagging by source; [Issue #15032](https://github.com/openclaw/openclaw/issues/15032) — per-spawn tool restrictions for sub-agents; [Issue #90354](https://github.com/openclaw/openclaw/issues/90354) — bounded memory flush.
- **Agent orchestration:** [Issue #27445](https://github.com/openclaw/openclaw/issues/27445) — `announceTarget`; [Issue #44309](https://github.com/openclaw/openclaw/issues/44309) — one-way A2A dispatch mode.
- **Observability/control:** [Issue #71736](https://github.com/openclaw/openclaw/issues/71736) — Control UI plugin contribution slots; [Issue #87362](https://github.com/openclaw/openclaw/issues/87362) — task-flow lifecycle hook events; [Issue #6599](https://github.com/openclaw/openclaw/issues/6599) — `/models` test-fallback command.
- **Provider/UI surface:** [Issue #88154](https://github.com/openclaw/openclaw/issues/88154) — Slack modal support; [Issue #89114](https://github.com/openclaw/openclaw/issues/89114) — MiniMax M3 thinking levels; [PR #119325](https://github.com/openclaw/openclaw/pull/119325) — session-only model selection.

Prediction: the next release will likely prioritize compaction/memory guardrails and channel-delivery fixes. Smaller features such as session-scoped model selection and MCP OAuth callback handling may also land soon. Larger memory-trust design work still needs product/security decisions.

---

## 7. User Feedback Summary

- Positive sentiment exists: [Issue #73537](https://github.com/openclaw/openclaw/issues/73537) thanks the maintainers and asks for production-readiness stability labels on releases.
- Recurring pain points include silent model failures, premature compaction/data loss, missing Linux/Windows apps, and channel-specific message loss.
- Channel reliability is a major trust issue: LINE silent loss, WhatsApp dropped replies, Feishu DMs broken, Telegram duplicate commentary, and WebChat canvas state issues all surfaced in this snapshot.
- Windows/Docker users continue to report friction: `memory-lancedb` bind-mount failure, vitest EBUSY, and Unix-shell commands emitted in PowerShell.
- Users are asking for better observability and fewer “no reply” failure modes; several bugs involve replies visible in the dashboard but never delivered to the actual chat platform.

---

## 8. Backlog Watch

These older, unresolved items appear to need maintainer attention or product decisions:

- [Issue #6599](https://github.com/openclaw/openclaw/issues/6599) — `/models` test-fallback command, created Feb 1, needs maintainer/product review.
- [Issue #7707](https://github.com/openclaw/openclaw/issues/7707) — Memory trust tagging, created Feb 3, 28 comments, needs security/product decision.
- [Issue #15032](https://github.com/openclaw/openclaw/issues/15032) — Per-spawn tool restrictions, created Feb 12, linked PR open, security impact.
- [Issue #27445](https://github.com/openclaw/openclaw/issues/27445) — `announceTarget`, created Feb 26, linked PR open.
- [Issue #44309](https://github.com/openclaw/openclaw/issues/44309) — One-way A2A dispatch mode, created Mar 12, marked stale.
- [Issue #45771](https://github.com/openclaw/openclaw/issues/45771) — Pace-aware rate limiting, created Mar 14.
- [Issue #86050](https://github.com/openclaw/openclaw/issues/86050) — claude-cli stream buffering, created May 24.
- [Issue #88657](https://github.com/openclaw/openclaw/issues/88657) — DeepSeek V4 Flash incomplete turn, created May 31, needs live repro.
- [Issue #90789](https://github.com/openclaw/openclaw/issues/90789) — claude-cli synthetic placeholder / silent Telegram turn, created Jun 6.
- [Issue #106475](https://github.com/openclaw/openclaw/issues/106475) — `/pair qr` data URL not renderable in WebChat, created Jul 13.
- [PR #89584](https://github.com/openclaw/openclaw/pull/89584) — memory-core cross-encoder rerank stage, open since Jun 2 and marked “ready for maintainer look.”

These items are not necessarily abandoned, but they are long-running threads with unresolved maintainer/product decisions and are worth prioritizing in the next triage pass.

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report
**AI Agent & Personal Assistant Open-Source Ecosystem — 2026-08-07**

---

## 1. Ecosystem Overview

The personal AI assistant open-source landscape is in a phase of rapid maturation, characterized by high-velocity maintenance cycles and a hardening focus on reliability, security, and observability. Core projects like OpenClaw and Hermes Agent are consolidating architecture (memory subsystems, plugin interfaces, gateway isolation) while shipping steady bug-fix streams rather than new features. Channel-delivery reliability has emerged as the single largest trust issue across the ecosystem — nearly every active project reports silent message loss or delivery failures on at least one chat platform. Security hardening is also accelerating, with ZeroClaw closing long-standing credential-storage vulnerabilities and NanoBot/Hermes addressing agent-accessible session data and plugin supply-chain risks. A notable cluster of "Claw" variants (PicoClaw, NanoClaw, NullClaw, TinyClaw, ZeptoClaw) indicates active forking and specialization of the core agent architecture, though several are dormant or low-activity, suggesting consolidation around the top-tier projects.

---

## 2. Activity Comparison

| Project | Issues Updated | PRs Updated | Release Status | Health Score | Notes |
|---|---|---|---|---|---|
| **OpenClaw** | 500 (70 closed) | 500 (103 merged/closed) | None | **6/10** | Massive activity but 2 open P0 regressions (DB migration, compaction data loss) |
| **IronClaw** | 50 (23 closed) | 50 (17 merged/closed) | **v1.1.0** (2026-08-06) | **8/10** | Shipped stable release; strong QA closure; many P1/P2 open |
| **Hermes Agent** | 50 (3 closed) | 50 (11 merged/closed) | None (v0.20.0 in field) | **7/10** | Fast contributor pipeline; desktop regression + memory `sync_turn` bug unresolved |
| **ZeroClaw** | 36 (12 closed) | 50 (8 merged/closed) | None (v0.8.4 baseline) | **7/10** | Coordinated hardening + governance reform; 17 PRs stalled on author action |
| **CoPaw** | 28 (14 closed) | 50 (30 merged/closed) | None (2.0.1 stable / 2.1.0b2 beta) | **7/10** | High merge throughput; agentscope compatibility friction; several high-sev open |
| **NanoClaw** | 1 (1 closed) | 14 (8 merged/closed) | None | **8/10** | Small but responsive; critical update-safety bug has fix PR open |
| **NanoBot** | 10 (2 closed) | 18 (7 merged/closed) | None | **8/10** | Healthy UX polish cycle; security-focused session isolation in review |
| **LobsterAI** | 6 | 4 (1 merged) | None | **5/10** | Low activity; silent-execution bug; stale backlog items |
| **PicoClaw** | 0 | 2 (1 closed) | None | **6/10** | Quiet but stable; long-overdue QQ attachment PR finally merged |
| **NullClaw** | 0 | 0 | None | N/A | No activity |
| **TinyClaw** | 0 | 0 | None | N/A | No activity |
| **Moltis** | 0 | 0 | None | N/A | No activity |
| **ZeptoClaw** | 0 | 0 | None | N/A | No activity |

---

## 3. OpenClaw's Position

**Advantages vs. peers:**
- **Largest community by an order of magnitude**: 500 issues and 500 PRs updated in 24 hours dwarfs all peers (next closest: 50/50). This creates faster bug discovery, broader platform coverage, and a deeper contributor bench.
- **Reference implementation status**: As the core project, OpenClaw defines the architectural patterns (memory compaction, gateway lock-file isolation, ACP runtime session init) that fork projects adopt — its PR consolidation around "memory status reporting on fast path" and "sandboxed gateway locks" signals the ecosystem's leading edge on operational hygiene.
- **Cross-platform channel breadth**: LINE, WhatsApp, Feishu, Telegram, WebChat, Slack, Matrix — no peer matches this channel surface, though it also means more channel-specific bugs (currently 6+ open P1s).

**Technical approach differences:**
- OpenClaw is a **multi-channel gateway + agent runtime** first, desktop/UI second (desktop apps are a top user demand, #75 with 80👍). IronClaw and Hermes lead on **observability tooling** (Inspector suite, diagnostics, plugin scanning), while OpenClaw's current priority is **memory/compaction correctness and channel delivery**.
- Community size comparison: OpenClaw (500/500 daily) vs. Hermes/IronClaw/CoPaw/ZeroClaw (28–50/50 each) vs. NanoBot/NanoClaw (10–18 PRs) vs. LobsterAI/PicoClaw (<5). OpenClaw's queue volume is **10x the nearest peer**.

**Risk:** Two open P0s (DB migration failure, premature compaction causing context data loss) with no visible fix PRs threaten its stability advantage. The next release will be a critical credibility signal.

---

## 4. Shared Technical Focus Areas

| Focus Area | Project Evidence | Specific Needs |
|---|---|---|
| **Memory / Context-Window Safety** | OpenClaw (#118772 P0 compaction data loss, #90354 bounded flush), CoPaw (#6601 empty responses near window, PR #6564 flush-before-compression), IronClaw (#7289 FTS recall), Hermes (#79339 `sync_turn` dead code), NanoBot (Dream idle-session archiving) | Compaction guardrails, empty-response detection, memory lifecycle hooks, persisted memory status accuracy |
| **Channel Reliability** | OpenClaw (LINE, WhatsApp, Feishu, Telegram P1s), IronClaw (Slack cluster: #5877, #5834, #5508, #5522), CoPaw (Matrix #6684, WeChat #6728), NanoBot (Matrix #5247, #5274), NanoClaw (Telegram media-only drops), Hermes (Feishu approval buttons, 5 duplicate issues) | Reply-token management, delivery retries/health-checks, thread/context fidelity, proactive delivery survival through trimming |
| **Security Hardening** | ZeroClaw (SSRF #8826, Gemini key leak #9435, pair-lockout bypass #9438, XOR cipher closed), NanoBot (#5278 session files agent-reachable, #5276 temp isolation), Hermes (plugin install scanning #80728, secret redaction #77484/#77162), CoPaw (AV false-positive trust #6775) | Agent-accessible state separation, credential hygiene, plugin supply-chain validation, secure defaults |
| **Model Reliability & Fallbacks** | OpenClaw (DeepSeek silent failures #116277, session-only `/model -s` PR), PicoClaw (fallback chain PR #3200), NanoBot (#5198 per-session model switching), CoPaw (DeepSeek thinking-mode multi-turn, empty responses), ZeroClaw (per-model capability RFC #7100) | Configurable fallback chains, per-session model control, capability metadata accuracy, silent-failure surfacing |
| **Agent Orchestration / A2A** | ZeroClaw (A2A outbound client RFC #9106 + PR #9324), OpenClaw (`announceTarget` #27445, one-way A2A #44309), NanoBot (subagent cron termination #4290), CoPaw (subagent worktree finalization #6722) | Inter-agent protocols, subagent result consumption, goal/mission safety gates, per-spawn tool restrictions |
| **Observability & Diagnostics** | IronClaw (Inspector suite: PRs #7235–#7277), Hermes (per-message `token_count` #80724), NanoBot (token consumption logging #5266), OpenClaw (Control UI #71736), LobsterAI (silent execution #2447), ZeroClaw (OTel correlation #9352) | Operator inspection APIs, live tool-call streams, token-cost accounting, execution-status transparency |
| **Session & Workspace Isolation** | NanoBot (#5276/#5278 session temp files), LobsterAI (#1196 workspace file pollution), OpenClaw (sandboxed gateway lock files), Hermes (stray `.git` workspace false-positive #80731) | Per-session sandboxing, separation of agent state from user content, config location hygiene |
| **Update Safety** | NanoClaw (#3194 transactional upgrades), Hermes (launchd bootout settle #68708), LobsterAI (watchdog exit code #2446), OpenClaw (DB migration P0 #119263) | Atomic cutover, rollback coverage for DB/config, migration validation, version-check correctness |

---

## 5. Differentiation Analysis

| Project | Primary Focus | Target Users | Architectural Signature |
|---|---|---|---|
| **OpenClaw** | Multi-channel agent gateway, memory/compaction engine, orchestration | Power users, self-hosters, channel-heavy deployments | Monolithic core with plugin channels; largest surface area; ACP runtime init |
| **Hermes Agent** | Desktop-first agent with plugin ecosystem | Desktop productivity users (macOS/Windows) | Rich desktop UI (Command Center, Kanban), plugin registry, god-file monoliths undergoing sharding |
| **IronClaw** | Routine automation + operator observability | Ops-oriented users running scheduled workflows | Inspector/diagnostics platform, MCP/server integration, IronHub deep links, sandbox profiles |
| **ZeroClaw** | Governance-heavy, security-conscious agent | Enterprise-leaning, RFC-driven adopters | Formal RFC process, A2A outbound client, per-model capability registry, Rust codebase (clippy gates) |
| **CoPaw** | AgentScope-ecosystem agent (QwenPaw lineage) | Chinese + English bilingual users, Qwen model users | AG-UI protocol endpoint, Files REST API, user-context passthrough (Chat→Agent→Tool→MCP→SKILL), WeChat approval flows |
| **NanoBot** | Lightweight WebUI agent with session polish | Personal use, web-first users | Drag-and-drop session management, temp/memory-only chat mode, Matrix/Weixin channel focus |
| **NanoClaw** | Skills-driven assistant with scheduling | Skill/automation enthusiasts | Skills ecosystem (MCP tools), cron/task sweeps, user-ID namespacing |
| **LobsterAI** | Windows-centric agent (OpenClaw derivative) | Chinese-speaking Windows users | PowerShell runtime, Windows installer focus, workspace-file conventions |
| **PicoClaw** | QQ Channel-focused variant | Chinese QQ users | Multi-modal QQ attachments (voice/image/video/file) |
| **NullClaw / TinyClaw / Moltis / ZeptoClaw** | Inactive / dormant | N/A | No recent signals |

---

## 6. Community Momentum & Maturity

**Tier 1 — High velocity, hardening phase:**
- **OpenClaw** (500/500 daily): Most issues+PRs, but stability at risk with 2 P0s and 16+ P1s. Consolidating superseded PRs — a sign of maturing architecture review.
- **Hermes Agent** (50/50): Rapid contributor pipeline (11 PRs merged/closed, fresh PRs daily). The god-file sharding epic (#78647, 53 comments) signals deliberate architectural refactoring for contributor onboarding. v0.20.0 regressions are the main drag.
- **IronClaw** (50/50): Best release cadence (v1.1.0 shipped). QA-heavy issue load with strong closure rates; investing heavily in operator observability. Momentum is positive but Slack reliability cluster needs attention.
- **ZeroClaw** (36/50): Coordinated hardening cycle; closed the oldest issue (#1 XOR cipher) and a confused-deputy security bug. Governance reform (RFC process) is active. Bottleneck: 17 PRs waiting on author action.
- **CoPaw** (28/50): Highest merge throughput relative to issue count (30 PRs merged/closed). Adapting to upstream agentscope changes; bilingual community. Pre-release hardening for 2.1.x.

**Tier 2 — Healthy, moderate pace:**
- **NanoBot** (10/18): Steady UX polish and session-handling improvements; maintainers closing issues promptly. Well-scoped security work in flight.
- **NanoClaw** (14 PRs): Small but responsive; cleared a backlog of May–June PRs in one window. Critical update-safety fix in review.

**Tier 3 — Low activity / watchlist:**
- **LobsterAI** (6/4): Stable but slow; stale PRs from April remain unreviewed. Silent-failure bug (#2447) unresolved.
- **PicoClaw** (0/2): Quiet; merged a 5-month-old PR. Needs maintainer bandwidth for the fallback-chain PR.
- **NullClaw, TinyClaw, Moltis, ZeptoClaw**: No activity — dormant.

**Maturity assessment:** The ecosystem is past the "feature gold rush" and into a **reliability-and-governance phase**. Top-tier projects are investing in diagnostics platforms, security scanning, memory-subsystem correctness, and structured decision-making (RFCs, maintainer queues). The fork ecosystem (Claw variants) is consolidating around OpenClaw, Hermes, IronClaw, ZeroClaw, and CoPaw as the five viable core projects.

---

## 7. Trend Signals

**For AI agent developers, these cross-project signals indicate where the industry is heading:**

1. **Silent failures are the #1 user trust killer.** OpenClaw (DeepSeek no-reply), CoPaw (empty responses near context window), LobsterAI (no output/error), IronClaw (generic "invalid result"), ZeroClaw (SOP.toml silently dropped) — users consistently report the same pattern: the agent fails without surfacing an error. **Action:** instrument every failure path with explicit user-visible diagnostics.

2. **Context-window management is the next frontier.** Premature compaction with data loss (OpenClaw P0), silent unresponsiveness near limits (CoPaw), token-count persistence (Hermes), FTS recall failures (IronClaw) — as agents run longer, memory/compaction correctness supersedes raw context-window size. **Action:** treat compaction as a transactional operation with rollback, and make memory state observable.

3. **Channel delivery is the integration layer that makes or breaks adoption.** Every active project reported platform-specific delivery failures (LINE, WhatsApp, Telegram, Slack, Matrix, Feishu, WeChat, QQ). Bot platforms are fragmenting, not consolidating. **Action:** build channel-agnostic delivery guarantees (retry, health-check, reply-token management) rather than per-channel patches.

4. **Security is shifting from credential storage to runtime boundaries.** ZeroClaw closed a 2-year-old XOR-cipher secret-storage issue; NanoBot users discovered their agent's filesystem tools could read session history; Hermes is adding plugin-install scanning. The trend is **agent-accessible state isolation** — the agent's own session, memory, and config data must be out of reach of its tools. **Action:** default-closed permissions, per-session sandboxes, and supply-chain validation for plugins/skills.

5. **Model control is becoming user-facing.** Per-session model switching (NanoBot #5198), configurable fallback chains (PicoClaw #3200), session-only `/model` selection (OpenClaw PR), per-model capability metadata (ZeroClaw RFC) — users want the same model flexibility they get from cloud SaaS UIs. **Action:** expose model selection and fallback as first-class session configuration, not global settings.

6. **Observability is the new differentiator.** IronClaw's Inspector suite (live prompt diagnostics, model-call stats), Hermes's per-message token accounting, and NanoBot's token-consumption logging all point to **operational transparency** as a competitive moat. **Action:** build operator-facing diagnostics early — run snapshots, tool-activity streams, and cost attribution.

7. **A2A and multi-agent orchestration are moving from RFC to code.** ZeroClaw's accepted A2A outbound client (with shared wire model), OpenClaw's `announceTarget` demand, and subagent reliability bugs across NanoBot/CoPaw show the industry converging on **structured inter-agent protocols** with safe subagent lifecycle management (result consumption, worktree finalization, safety gates). **Action:** design subagent invocation with explicit completion contracts and failure propagation.

8. **Update/upgrade safety is a growing trust boundary.** NanoClaw's transactional-update proposal, OpenClaw's DB migration P0, Hermes's launchd self-update fix, and LobsterAI's watchdog exit-code rescue all reflect user demand for **atomic upgrades with rollback coverage** beyond just Git state. **Action:** validate migrations before cutover and cover DB/config/external components in rollback paths.

---

*Data sources: Community digest summaries for OpenClaw, NanoBot, Hermes Agent, PicoClaw, NanoClaw, NullClaw, IronClaw, LobsterAI, TinyClaw, Moltis, CoPaw, ZeptoClaw, ZeroClaw — 2026-08-07 snapshot.*

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-08-07

## 1. Today's Overview

NanoBot saw elevated activity in the last 24 hours: 10 issues were updated (8 open/active, 2 closed) and 18 PRs were updated (11 open, 7 closed/merged). The majority of merged work was in the WebUI, session handling, and channel compatibility areas, indicating a continuing focus on UX polish and protocol robustness. Several security-related PRs are now open, especially around API key isolation and session storage boundaries. No new releases were published during this window. Overall, the project appears healthy and responsive, with maintainers actively closing issues and merging community contributions.

## 2. Releases

No new releases were published in the last 24 hours.

## 3. Project Progress

Seven PRs were merged or closed:

- **fix(session): preserve proactive channel delivery during session retention trimming** — [PR #5272](https://github.com/HKUDS/nanobot/pull/5272)  
  Closes [Issue #5273](https://github.com/HKUDS/nanobot/issues/5273). Prevents session trimming from dropping proactive assistant messages like cron notifications.

- **feat(memory): archive idle sessions for Dream** — [PR #5231](https://github.com/HKUDS/nanobot/pull/5231)  
  Adds archiving for idle sessions so Dream memory processing receives input even when sessions never exceed the protected recent-suffix window.

- **feat(webui): drag sidebar sessions** — [PR #5261](https://github.com/HKUDS/nanobot/pull/5261)  
  Adds drag-and-drop session reordering and structured session-mention insertion from the sidebar into the composer.

- **fix(matrix): send non-empty POST body on room join for Continuwuity compatibility** — [PR #5248](https://github.com/HKUDS/nanobot/pull/5248)  
  Fixes Matrix auto-join failures on homeservers that reject empty POST bodies.

- **fix(webui): tighten interactive motion** — [PR #5267](https://github.com/HKUDS/nanobot/pull/5267)  
  Standardizes WebUI transition timings and respects reduced-motion preferences.

- **fix(webui): enforce memory-only temporary sessions** — [PR #5259](https://github.com/HKUDS/nanobot/pull/5259)  
  Stacks on [PR #5252](https://github.com/HKUDS/nanobot/pull/5252); ensures temporary chat state never persists to disk.

- **perf(webui): reduce cold-start payload** — [PR #5262](https://github.com/HKUDS/nanobot/pull/5262)  
  Adds precompressed gzip assets, lazy-loads heavy renderer dependencies, and includes regression guards.

## 4. Community Hot Topics

Most discussed items were bug reports rather than feature debates:

- **Not possible to change models in a specific session** — [Issue #5198](https://github.com/HKUDS/nanobot/issues/5198) (3 comments)  
  Users expect to switch models per chat session like cloud SaaS UIs, but NanoBot currently treats the primary model as fixed unless the whole instance is reconfigured. This is the clearest UX demand in the current traffic.

- **Cronjob ends early when a subagent is spawned** — [Issue #4290](https://github.com/HKUDS/nanobot/issues/4290) (2 comments)  
  A long-running workflow reliability issue: the main agent exits before consuming the subagent’s result, breaking subsequent workflow steps.

- **Session history should not live inside the agent workspace** — [Issue #5278](https://github.com/HKUDS/nanobot/issues/5278) (1 comment)  
  Security-focused discussion about session files being reachable by the agent’s own filesystem tools when `restrict_to_workspace` is enabled.

- **Allow enforcing session-level temporary file isolation** — [Issue #5276](https://github.com/HKUDS/nanobot/issues/5276) (1 comment)  
  Users want per-session sandboxing for temporary workspace files, not just workspace-level restrictions.

## 5. Bugs & Stability

Ranked by severity:

1. **High — Session history reachable by the agent** — [Issue #5278](https://github.com/HKUDS/nanobot/issues/5278)  
   Session files stored under `<workspace>/sessions/` can be read or listed by the agent’s filesystem tools.  
   **Fix PR:** [PR #5279](https://github.com/HKUDS/nanobot/pull/5279) open.

2. **High — Cron workflow termination after subagent completion** — [Issue #4290](https://github.com/HKUDS/nanobot/issues/4290)  
   Main agent fails to continue after a subagent finishes, causing workflow failures. No fix PR is currently linked.

3. **High — Model switching broken within a session** — [Issue #5198](https://github.com/HKUDS/nanobot/issues/5198)  
   The model selector and `/model` command do not allow changing the active model in an existing session. No fix PR currently visible.

4. **Medium — Session retention trimming drops proactive channel deliveries** — [Issue #5273](https://github.com/HKUDS/nanobot/issues/5273)  
   Background cron and job delivery messages are lost during history trimming.  
   **Fix PR:** [PR #5272](https://github.com/HKUDS/nanobot/pull/5272) closed.

5. **Medium — No session-level temporary file isolation** — [Issue #5276](https://github.com/HKUDS/nanobot/issues/5276)  
   The global `~/.nanobot/workspace` shared R/W state remains a cross-session privacy concern. No fix PR yet.

6. **Medium — Missing `media_urls` on history API for files outside media root** — [Issue #5264](https://github.com/HKUDS/nanobot/issues/5264)  
   After refresh, attachments served from outside `<workspace>/media/` lose signed URLs.  
   **Fix PR:** [PR #5268](https://github.com/HKUDS/nanobot/pull/5268) open.

7. **Low — Matrix auto-join failure with Continuwuity** — [Issue #5247](https://github.com/HKUDS/nanobot/issues/5247)  
   Fixed by [PR #5248](https://github.com/HKUDS/nanobot/pull/5248), which is now closed.

## 6. Feature Requests & Roadmap Signals

Active feature requests and signals for upcoming versions:

- **Per-session model switching** — [Issue #5198](https://github.com/HKUDS/nanobot/issues/5198)  
  Strongly requested for parity with commercial chat UIs.

- **Temporary chat mode** — [PR #5252](https://github.com/HKUDS/nanobot/pull/5252) and [PR #5259](https://github.com/HKUDS/nanobot/pull/5259)  
  Memory-only, non-persistent conversations are already in review/iteration, suggesting the WebUI team is actively building this.

- **Session-level temp file isolation** — [Issue #5276](https://github.com/HKUDS/nanobot/issues/5276)  
  Security-focused feature likely to shape future sandboxing work.

- **Matrix reply/thread context improvements** — [Issue #5274](https://github.com/HKUDS/nanobot/issues/5274) and [Issue #5275](https://github.com/HKUDS/nanobot/issues/5275)  
  Users want proper Matrix reply semantics and dedicated thread contexts.

- **Token consumption logging** — [Issue #5266](https://github.com/HKUDS/nanobot/issues/5266)  
  Users need visibility into which calls burn tokens, especially for background activity.

- **Expanded model preset editor** — [PR #5277](https://github.com/HKUDS/nanobot/pull/5277)  
  Inline editor expansion for model presets is already being prototyped.

- **Shared interactive project terminal** — [PR #5253](https://github.com/HKUDS/nanobot/pull/5253)  
  A persistent PTY shared between WebUI and agent, still open with a conflict tag.

- **Metasearch provider integration** — [PR #5234](https://github.com/HKUDS/nanobot/pull/5234)  
  Adds MST as a multi-engine search provider; likely to land if no maintainer objections remain.

## 7. User Feedback Summary

User feedback in the last 24 hours centers on practical workflow and security concerns:

- **Model control is the top UX pain point**: users expect to switch models per conversation, not via full instance reconfiguration ([#5198](https://github.com/HKUDS/nanobot/issues/5198)).
- **Background/cron workflows are unreliable when subagents are involved**, causing real downstream failures ([#4290](https://github.com/HKUDS/nanobot/issues/4290)).
- **Security boundaries are being scrutinized**: multiple users raised concerns about session files and temporary data living inside agent-accessible workspace directories ([#5278](https://github.com/HKUDS/nanobot/issues/5278), [#5276](https://github.com/HKUDS/nanobot/issues/5276)).
- **Token consumption feels opaque**: one user reported massive token usage without visible user activity and requested per-call logging ([#5266](https://github.com/HKUDS/nanobot/issues/5266)).
- **Channel integration quality matters**: Matrix users reported both join and reply/thread behavior problems, while Weixin protocol handling is being hardened in [PR #5263](https://github.com/HKUDS/nanobot/pull/5263).

Overall, users are engaged and security-aware, but there is clear demand for more granular session controls and better observability.

## 8. Backlog Watch

Issues or PRs that appear important but need maintainer attention:

- **Cronjob ends early when a subagent is spawned** — [Issue #4290](https://github.com/HKUDS/nanobot/issues/4290)  
  Open since June 10, updated August 6, still no linked fix PR. This is a serious workflow reliability bug.

- **Not possible to change models in a specific session** — [Issue #5198](https://github.com/HKUDS/nanobot/issues/5198)  
  Open since July 31, 3 comments, no fix PR. High user impact on everyday usage.

- **feat(agent): integrate mst-python as a metasearch provider** — [PR #5234](https://github.com/HKUDS/nanobot/pull/5234)  
  Open since August 3 without visible maintainer response or merge activity.

- **feat(webui): add shared interactive project terminal** — [PR #5253](https://github.com/HKUDS/nanobot/pull/5253)  
  Open since August 5, tagged `conflict`, no recent maintainer interaction.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-08-07

## 1. Today's Overview

Hermes Agent is in a period of very high activity: 50 issues and 50 PRs were updated in the last 24 hours, with 3 issues closed and 11 PRs merged/closed. The dominant theme is the repo-wide **"god-file sharding" epic** (#78647, 53 comments) driving a wave of decomposition issues, alongside active triage of **0.20.0 regressions** (desktop UI panel missing, memory `sync_turn` never called). At least a dozen fresh PRs landed or were opened today, spanning security scanning for plugins, MCP null-args crash fixes, session token-cost accounting, and desktop UX polish — indicating a healthy, fast-moving contributor pipeline. However, the long-running Feishu approval-button failure cluster remains unresolved across multiple versions, and two P2 0.20.0 regressions still lack fix PRs. No new releases were published today.

## 2. Releases

No new releases in the last 24 hours. The most recent release context remains **v0.20.0**, which is the subject of several active regression reports (see Bugs & Stability).

## 3. Project Progress

**Merged/Closed PRs today (4 of 11 visible in top items):**
- [PR #68708](https://github.com/NousResearch/hermes-agent/pull/68708) — **fix(gateway): wait for launchd bootout to settle before re-bootstrapping in deferred reload** (CLOSED) — resolves a macOS self-update scenario where the gateway stayed offline with an unregistered launchd service.
- [PR #80718](https://github.com/NousResearch/hermes-agent/pull/80718) — **Desktop: "Show earlier messages" no longer hides most of a session** (CLOSED) — fixed the DOM budget accounting that caused the threshold to trigger prematurely.
- [PR #80719](https://github.com/NousResearch/hermes-agent/pull/80719) — **Desktop: keep elapsed status text from overlapping** (CLOSED) — separates running-status and elapsed timer into distinct flex slots with truncation.
- [PR #80725](https://github.com/NousResearch/hermes-agent/pull/80725) — auto-fix bot JS formatting (CLOSED, auto-merged via CI).

**Also closed today:** [Issue #75468](https://github.com/NousResearch/hermes-agent/issues/75468) — desktop session pin/unpin persistence (backend PATCH rejected `pinned`); reported 2026-07-31, now resolved.

**Key features/fixes advanced in new PRs today:**
- [PR #80728](https://github.com/NousResearch/hermes-agent/pull/80728) — **Security scanning for `hermes plugins install/update`** (inspired by Claude Cowork): safe installs pass silently, suspicious ones require confirmation, malicious ones are blocked.
- [PR #80724](https://github.com/NousResearch/hermes-agent/pull/80724) — **Persist per-message `token_count`** from response usage (column existed but was NULL for all 20,930 messages), enabling true context-cost measurement.
- [PR #80729](https://github.com/NousResearch/hermes-agent/pull/80729) — **fix(mcp): treat null `args` as empty list in stdio bridge** — direct fix for Issue #80652.
- [PR #80731](https://github.com/NousResearch/hermes-agent/pull/80731) — **fix(agent): stray `.git` debris must not manufacture a code workspace** — four call sites incorrectly treated an empty `.git` directory as a valid repo.
- [PR #80686](https://github.com/NousResearch/hermes-agent/pull/80686) — Port of **grok-cli's verify subsystem** (run-recipe detection + environment manifest + `hermes verify` smoke runner).
- [PR #80681](https://github.com/NousResearch/hermes-agent/pull/80681) — fix(config): recognize `agent.system_prompt` / `agent.personalities` in schema validation (removes false warnings).
- [PR #80721](https://github.com/NousResearch/hermes-agent/pull/80721) — **Announce date changes to long-running sessions** without touching the prompt cache (port from kimi-code).
- [PR #80727](https://github.com/NousResearch/hermes-agent/pull/80727) — New optional **Dyad integration skill** (local AI app builder, SQLite state, git-backed projects).
- [PR #80722](https://github.com/NousResearch/hermes-agent/pull/80722) — Docs re-sync for platform moves (`gateway/platforms/` → `plugins/platforms/`) plus regeneration guards.

## 4. Community Hot Topics

- **[Issue #78647](https://github.com/NousResearch/hermes-agent/issues/78647) — Epic: Shard all 20 god files (53 comments, needs-decision)** — The defining architectural effort right now: a repo-wide policy that all god files are sharded and never reverted. Community members are contributing per-file decomposition plans (Telegram `adapter.py`, `auth.py`, `kanban_db.py`, `auxiliary_client.py`, etc.). Underlying need: maintainability and contributor onboarding — the files are 6,000–10,000+ lines each.

- **[Issue #64182](https://github.com/NousResearch/hermes-agent/issues/64182) — Plugin Interface Expansion tracking (27 comments)** — Distilled from the July Discord community thread; goal is to let long-queued plugin PRs ship on a stable, published interface. Signals strong community demand for a richer plugin ecosystem.

- **[Issue #78645](https://github.com/NousResearch/hermes-agent/issues/78645) — Shard `agent/context_compressor.py` (19 comments)** — Highest-activity single-file shard issue (6,789 lines). Part of the same epic; likely a template for the remaining 19 files.

- **[Issue #79407](https://github.com/NousResearch/hermes-agent/issues/79407) — [0.20.0 Regression] Desktop bottom operation panel completely missing (8 comments)** — The app becomes a "viewer-only shell" (Command Center, Gateway controls, sub-agent status all gone). One of the most severe user-facing regressions; no fix PR linked yet.

- **Feishu approval-button cluster (8, 6, 4, 3, 3 comments across #7675, #13924, #25886, #38305, #10073)** — Five separate issues spanning April–June all report the same failure: interactive card approval buttons return errors (code 200340/200343/220340). The volume of duplicates indicates a top pain point for the Feishu user base.

## 5. Bugs & Stability

Ranked by severity (P2 first), with fix-PR status:

| Sev | Issue | Description | Fix status |
|-----|-------|-------------|------------|
| **P2** | [#79407](https://github.com/NousResearch/hermes-agent/issues/79407) | Desktop bottom operation panel missing after 0.19→0.20; app is viewer-only shell (Windows) | ⚠️ No fix PR yet |
| **P2** | [#80652](https://github.com/NousResearch/hermes-agent/issues/80652) | MCP stdio bridge crashes: `TypeError: Value after * must be an iterable, not NoneType` when `args: null` in config; server loops connecting→parked | ✅ [PR #80729](https://github.com/NousResearch/hermes-agent/pull/80729) |
| **P2** | [#80646](https://github.com/NousResearch/hermes-agent/issues/80646) | `agent_context` hardcoded to `"primary"` — memory-provider context-skip logic (cron/flush/subagent) is dead code | ⚠️ No fix PR |
| **P2** | [#80259](https://github.com/NousResearch/hermes-agent/issues/80259) | Message reactions gated off for remote-desktop sessions (`HERMES_DESKTOP` only set locally) | ⚠️ No fix PR |
| **P2** | [#79628](https://github.com/NousResearch/hermes-agent/issues/79628) | `use_gateway: true` discards a valid direct credential when Tool Gateway is unauthenticated (web/tts/browser); error text points user to the exact credential they already set | ⚠️ No fix PR |
| **P2** | [#74411](https://github.com/NousResearch/hermes-agent/issues/74411) | Desktop SSH mode version-check runs `python --version <script>` (wrong arg order) → falsely claims `--ssh-session-token-file`/`--ssh-owner-nonce` unsupported on git/source installs | ⚠️ No fix PR |
| **P3** | [#79339](https://github.com/NousResearch/hermes-agent/issues/79339) | `MemoryProvider.sync_turn()` never called in 0.20 — external memory backends silently stop receiving completed turns | ⚠️ No fix PR |
| **P3** | [#79859](https://github.com/NousResearch/hermes-agent/issues/79859) | Desktop "Talk to Hermes" with OpenAI TTS still does delayed whole-MP3 playback; no low-latency conversational mode | ⚠️ No fix PR |
| **P2** | [#7675](https://github.com/NousResearch/hermes-agent/issues/7675), [#13924](https://github.com/NousResearch/hermes-agent/issues/13924), [#25886](https://github.com/NousResearch/hermes-agent/issues/25886), [#38305](https://github.com/NousResearch/hermes-agent/issues/38305), [#10073](https://github.com/NousResearch/hermes-agent/issues/10073) | **Feishu/Lark command-approval card buttons fail** (codes 200340/200343/220340) across versions 0.8.0→0.15.2→current; workaround is manual `/approve` commands | ⚠️ PR #10256 (referenced in #38305) remains unmerged |
| **P3** | [#80596](https://github.com/NousResearch/hermes-agent/issues/80596) | Learning graph marks externally-installed skills as "learned" (`use_count` inflation) | ⚠️ No fix PR |
| **P3** | [#77286](https://github.com/NousResearch/hermes-agent/issues/77286) | Windows desktop updater error submission bug (needs repro) | ⚠️ No fix PR |

Security follow-ups in flight: [#77484](https://github.com/NousResearch/hermes-agent/issues/77484) and [#77162](https://github.com/NousResearch/hermes-agent/issues/77162) (P3, both authored by andrexibiza) document emission/redaction gaps — raw `process(list)` output, traceback leakage into tool results, and missing exact-value secret redaction on the provider egress path.

## 6. Feature Requests & Roadmap Signals

**User-requested features (open issues):**
- **[#80723](https://github.com/NousResearch/hermes-agent/issues/80723)** — Allow one live session to be watched by multiple devices; current WS event routing has a single transport slot ("close the laptop, the turn keeps going, watch it finish from your phone"). High product value.
- **[#80720](https://github.com/NousResearch/hermes-agent/issues/80720)** — Make Kanban attachment rows actionable: open with OS default app, in-app Preview via existing Markdown preview rail, Quick Look, reveal in Finder.
- **[#70849](https://github.com/NousResearch/hermes-agent/issues/70849)** — Support per-job `deliver_profile` for multiplexed gateway cron delivery (currently always uses default/active profile's adapter).
- **[#53317](https://github.com/NousResearch/hermes-agent/issues/53317)** — Finish plugin-provider migration for `image_gen` and TTS to match `video_gen`'s pure-registry pattern (remove hardcoded `if/elif` fallback chains).

**Roadmap signals from PRs opened today:**
- Plugin security scanning ([#80728](https://github.com/NousResearch/hermes-agent/pull/80728)) — likely to land in next minor release.
- Verify/smoke-test subsystem port from grok-cli ([#80686](https://github.com/NousResearch/hermes-agent/pull/80686)).
- Date-change announcement for long sessions via prompt-cache-safe injection ([#80721](https://github.com/NousResearch/hermes-agent/pull/80721)).
- Dyad integration as an optional skill ([#80727](https://github.com/NousResearch/hermes-agent/pull/80727)) — signals continued appetite for local app-builder/IDE integrations.

**Prediction:** The next release (likely 0.20.1) should contain the MCP null-`args` fix (#80729), `token_count` persistence (#80724), config schema fixes (#80681), and the docs re-sync (#80722). The desktop 0.20.0 regression (#79407) and memory `sync_turn` issue (#79339) are urgent enough to warrant hotfix inclusion.

## 7. User Feedback Summary

- **Feishu users are the most vocal and most dissatisfied.** Five separate issues (highest 8 comments) report the same broken approval-card buttons, tracking failures through v0.8.0, v0.15.2, and beyond. One user (#38305) explicitly identifies the fix PR (#10256) and asks why it is unmerged — a clear trust issue.
- **0.20.0 desktop regression (#79407)** turned the app into a "viewer-only shell"; users describe it as "not a cosmetic issue" — severe workflow disruption for desktop-first users.
- **Silent breakage erodes confidence:** the memory `sync_turn` regression (#79339) fails with "no error, no log" — external memory backends just stop receiving turns. Similarly, the MCP crash (#80652) puts servers in an endless connecting→parked loop without clear diagnostics.
- **Positive signals:** users are contributing high-quality, well-scoped PRs (plugin security scanning, Dyad skill, MCP fix, session token accounting) and the maintainer/auto-bot pipeline is closing desktop UX polish items quickly (#80718, #80719, #80725). The god-file sharding epic shows a community actively willing to take on large refactors — a sign of healthy project stewardship.

## 8. Backlog Watch

Items needing maintainer attention:

- **[Issue #38305](https://github.com/NousResearch/hermes-agent/issues/38305)** (June 3) — Feishu error 200340 persists in v0.15.2; correctly-fixed PR #10256 remains unmerged. *Action: review/merge #10256 or explain the blocker.*
- **[Issue #7675](https://github.com/NousResearch/hermes-agent/issues/7675)** (April 11) — Feishu triple-issue report (card handling, approval buttons, streaming card replies) still open and unprefixed. *Action: triage into sub-issues or connect to the approval-button epic.*
- **[Issue #13924](https://github.com/NousResearch/hermes-agent/issues/13924)** (April 22) — Feishu approval buttons error 220340, marked duplicate but still open. *Action: verify duplicate linkage and close or route to fix PR.*
- **[PR #67934](https://github.com/NousResearch/hermes-agent/pull/67934)** (July 20) — "Use native Ollama tags for local model discovery": GitHub state `MERGEABLE / BLOCKED`, no checks reported, no review attached. *Action: run CI and review.*
- **[PR #70667](https://github.com/NousResearch/hermes-agent/pull/70667)** and **[PR #72671](https://github.com/NousResearch/hermes-agent/pull/72671)** (July 24/27) — Test-only PRs (kanban CLI refusal exit status, gateway cleanup fixture) also `MERGEABLE / BLOCKED` with no review. *Action: low-risk test coverage; batch-review.*
- **[Issue #64182](https://github.com/NousResearch/hermes-agent/issues/64182)** (July 14) — Plugin Interface Expansion tracking: community contributors with long-queued PRs are waiting on a stable published interface. *Action: assign an owner and publish a timeline.*
- **[Issue #78647](https://github.com/NousResearch/hermes-agent/issues/78647)** (Aug 4) — God-file sharding epic carries `needs-decision` at 53 comments; individual shard issues are multiplying. *Action: make the architecture decision and assign shards to prevent parallel duplicate plans.*

---

*Data source: GitHub issues/PRs for NousResearch/hermes-agent, updated 2026-08-07.*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-08-07

## 1. Today's Overview

PicoClaw is currently in a low-activity period: no issues were updated in the last 24 hours, and no new releases were published. Two pull requests received updates, with one being closed and one remaining open. The closed PR brings long-awaited QQ Channel attachment enhancements, while the open PR proposes a configurable model fallback chain for the web UI. Overall, the project looks stable but quiet, with no incoming bug reports or urgent community threads. The main forward motion is in feature-oriented PRs rather than issue-driven maintenance.

## 2. Releases

No new releases were published on 2026-08-07. There are no changelogs, breaking changes, or migration notes to report.

## 3. Project Progress

- **Closed / merged PR: [sipeed/picoclaw #1349](https://github.com/sipeed/picoclaw/pull/1349)** — `feat(qq): support parsing and replying to more attachment types`  
  This PR advanced QQ Channel integration by adding support for:
  - Parsing QQ Channel emoji structures
  - Handling incoming voice, image, video, and file messages
  - Replying with local voice, image, video, and file attachments via upload
  - Prioritizing Markdown replies with fallback behavior

- **Open PR: [sipeed/picoclaw #3200](https://github.com/sipeed/picoclaw/pull/3200)** — `feat(models): add configurable default fallback chain`  
  This PR introduces a model fallback chain workflow on the models page, including default model selection, reordering, and backend persistence. It remains open and under active consideration.

No other merge or close events were recorded in the last 24 hours.

## 4. Community Hot Topics

There are no active issue threads to analyze, as zero issues were updated in the reporting period. The two recent PRs serve as the main community activity:

- **[PR #1349 — QQ channel attachments](https://github.com/sipeed/picoclaw/pull/1349)**  
  Underlying need: users want richer multi-modal QQ bot interaction, including voice, images, video, and files, not just text.

- **[PR #3200 — Model fallback chain](https://github.com/sipeed/picoclaw/pull/3200)**  
  Underlying need: users want more control and resilience over model selection in the web UI, avoiding hard failures when a single model is unavailable.

Both PRs indicate demand for practical, configuration-driven features rather than purely experimental enhancements.

## 5. Bugs & Stability

No bugs, crashes, or regressions were reported in the last 24 hours. No stability-related fixes were submitted. There are no new severity-ranked issues or hotfix PRs to highlight.

## 6. Feature Requests & Roadmap Signals

While no formal feature-request issues were filed, the two most recent PRs send clear roadmap signals:

- **Expanded QQ Channel media support** — merging [PR #1349](https://github.com/sipeed/picoclaw/pull/1349) would make PicoClaw significantly more capable for handling non-text content in QQ channels.
- **Default model fallback chains** — [PR #3200](https://github.com/sipeed/picoclaw/pull/3200) suggests a near-term focus on better model reliability and user-configurable failover in the web UI.

If these land, the next PicoClaw release would likely include both multi-attachment QQ message handling and more robust model configuration.

## 7. User Feedback Summary

Direct user feedback via issues is unavailable for this period. Based on the PR descriptions, the implicit pain points are:

- QQ channel users need to send and receive attachments beyond basic text.
- Web UI users need a way to define fallback models to prevent service interruption.
- Administrators want persisted configuration rather than per-session model selection.

There are no explicit complaints or negative sentiment captured in the last 24 hours.

## 8. Backlog Watch

- **[PR #3200 — Configurable default fallback chain](https://github.com/sipeed/picoclaw/pull/3200)** has been open since 2026-07-01 and last updated 2026-08-06. It needs maintainer review/decision and is the main open item requiring attention.

- **[PR #1349](https://github.com/sipeed/picoclaw/pull/1349)** was created on 2026-03-11 and remained open for nearly five months before closing on 2026-08-06. This suggests slow turnaround for long-lived feature PRs, which could be worth monitoring.

No long-unanswered issues are currently in the backlog.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-08-07

## Today's Overview
NanoClaw saw a high-activity day: 14 PRs were updated in the last 24 hours, with 8 closed/merged and 6 still open. One issue was closed and one new bug remains open. No release was published, so all movement is still accumulating on `main` toward the next version. The main themes this window were reliability fixes (scheduling, Telegram messaging, update safety), skill hygiene (removing stale Qodo/Google skills, adding a Tavily skill), and credential/CLI correctness. Overall project health looks strong: older PRs from May and June were finally closed, and a critical update bug already has an open fix PR.

## Releases
No new releases in this window.

## Project Progress
Eight PRs were closed/merged in the last 24 hours, covering messaging, scheduling, skills, and identity fixes:

- **Media-only messages no longer dropped** — [nanocoai/nanoclaw#2213](https://github.com/nanocoai/nanoclaw/pull/2213)  
  Fixes Telegram/Chat SDK photo/video/file messages without captions being silently ignored.

- **Recurring tasks re-arm after permanent failure** — [nanocoai/nanoclaw#2678](https://github.com/nanocoai/nanoclaw/pull/2678)  
  `handleRecurrence` now considers permanently failed recurring rows so schedules continue correctly.

- **Permanently failed scheduled tasks are surfaced to users** — [nanocoai/nanoclaw#2679](https://github.com/nanocoai/nanoclaw/pull/2679)  
  Adds a `notifyFailedTasks` sweep hook that turns failures into user-visible notices.

- **Telegram reply-to-bot detection fixed** — [nanocoai/nanoclaw#2644](https://github.com/nanocoai/nanoclaw/pull/2644)  
  `extractReplyContext` now sets `isReplyToBot` when a message quotes the bot's own message.

- **Direct mentions/DMs now trigger pattern wirings** — [nanocoai/nanoclaw#2643](https://github.com/nanocoai/nanoclaw/pull/2643)  
  `evaluateEngage` now handles @mentions, DMs, and replies even when the text doesn't contain the keyword.

- **Stale Qodo and Google MCP skills removed** — [nanocoai/nanoclaw#3172](https://github.com/nanocoai/nanoclaw/pull/3172)  
  Resolves the broken bundled skills reported in [nanocoai/nanoclaw#3171](https://github.com/nanocoai/nanoclaw/issues/3171).

- **`/update-skills` can refresh code without credential pre-flight** — [nanocoai/nanoclaw#2873](https://github.com/nanocoai/nanoclaw/pull/2873)  
  Splits skill pre-flight checks from credential setup so skill code updates don't stall.

- **User IDs namespaced by channel type** — [nanocoai/nanoclaw#2591](https://github.com/nanocoai/nanoclaw/pull/2591)  
  Fixes potential user ID collisions by using channel-type prefixes instead of bare colon separators.

## Community Hot Topics
No explicit comment/reaction counts were included in this snapshot, so activity is judged by update recency and cross-referenced issues/PRs.

- **Update safety is the most visible concern** — [nanocoai/nanoclaw#3194](https://github.com/nanocoai/nanoclaw/issues/3194) opened as a bug, and the accompanying fix PR [nanocoai/nanoclaw#3195](https://github.com/nanocoai/nanoclaw/pull/3195) proposes making NanoClaw upgrades transactional. The underlying need is clear: users want upgrades that cannot corrupt the database, gitignored configuration, or external components.

- **Credential proxy gateway bypass** — [nanocoai/nanoclaw#2705](https://github.com/nanocoai/nanoclaw/pull/2705) is an older PR updated today. It addresses real-install pain where the `use-native-credential-proxy` skill silently falls back to the OneCLI gateway instead of truly opting out.

- **New utility skill demand** — [nanocoai/nanoclaw#3190](https://github.com/nanocoai/nanoclaw/pull/3190) adds a Tavily MCP tool skill, signaling continued community interest in web-search capabilities through NanoClaw skills.

- **CLI mount permissions** — [nanocoai/nanoclaw#3149](https://github.com/nanocoai/nanoclaw/pull/3149) proposes adding `--rw` to `groups config add-mount`. It was updated today and reflects user demand for more ergonomic filesystem mount configuration.

## Bugs & Stability
Ranked by severity:

1. **High — `/update-nanoclaw` can stamp success without a recoverable cutover**  
   [nanocoai/nanoclaw#3194](https://github.com/nanocoai/nanoclaw/issues/3194)  
   The updater changes the running checkout before validation passes. Rollback protects Git, but not SQLite, gitignored configuration, or external components, leaving multiple failure windows. Fix PR: [nanocoai/nanoclaw#3195](https://github.com/nanocoai/nanoclaw/pull/3195).

2. **Medium — Bundled Qodo skills depend on an integration nothing sets up**  
   [nanocoai/nanoclaw#3171](https://github.com/nanocoai/nanoclaw/issues/3171)  
   `get-qodo-rules` and `qodo-pr-resolver` require a Qodo SaaS account and read credentials from `~/.qodo/config.json`; they also intercepted normal coding requests. Resolved by removal in [nanocoai/nanoclaw#3172](https://github.com/nanocoai/nanoclaw/pull/3172).

3. **Resolved in this window** — Several long-standing bugs were fixed via closed PRs: media-only messages silently dropped ([#2213](https://github.com/nanocoai/nanoclaw/pull/2213)), scheduled failures not re-armed or surfaced ([#2678](https://github.com/nanocoai/nanoclaw/pull/2678), [#2679](https://github.com/nanocoai/nanoclaw/pull/2679)), bot ignoring direct mentions/replies ([#2643](https://github.com/nanocoai/nanoclaw/pull/2643), [#2644](https://github.com/nanocoai/nanoclaw/pull/2644)), and user ID namespace collisions ([#2591](https://github.com/nanocoai/nanoclaw/pull/2591)).

## Feature Requests & Roadmap Signals
Open work points to a few likely roadmap directions:

- **Skill ecosystem expansion** — [nanocoai/nanoclaw#3190](https://github.com/nanocoai/nanoclaw/pull/3190) adds a Tavily MCP skill, showing continued demand for prebuilt utility skills.
- **More capable messaging** — [nanocoai/nanoclaw#3193](https://github.com/nanocoai/nanoclaw/pull/3193) updates the Chat SDK for rich Telegram messages, likely landing after the media-only fix in [#2213](https://github.com/nanocoai/nanoclaw/pull/2213).
- **Host-level skill integration** — [nanocoai/nanoclaw#3186](https://github.com/nanocoai/nanoclaw/pull/3186) adds host seams for skill-owned capabilities, which could become a foundation for future skill runtime features.
- **CLI polish** — [nanocoai/nanoclaw#3149](https://github.com/nanocoai/nanoclaw/pull/3149) adds `--rw` to mount configuration, a smaller but user-visible convenience improvement.
- **Transactional updates** — If [nanocoai/nanoclaw#3195](https://github.com/nanocoai/nanoclaw/pull/3195) is merged, transactional upgrades are very likely to appear in the next release.

## User Feedback Summary
User pain points visible in this snapshot:

- Bundled skills that require external SaaS accounts without setup documentation create frustration and interfere with normal coding workflows ([#3171](https://github.com/nanocoai/nanoclaw/issues/3171)).
- The update process is risky: it can report success even when the rollback path doesn't cover databases, configuration, or external components ([#3194](https://github.com/nanocoai/nanoclaw/issues/3194)).
- Media-only messages were being silently dropped on Telegram and other chat platforms ([#2213](https://github.com/nanocoai/nanoclaw/pull/2213)).
- The bot sometimes ignored direct @mentions, DMs, or replies unless the message text also contained the keyword ([#2643](https://github.com/nanocoai/nanoclaw/pull/2643)).
- Scheduled task failures were invisible to users until a notification hook was added ([#2679](https://github.com/nanocoai/nanoclaw/pull/2679)).
- Credential proxy behavior was surprising in real installs because it silently fell back to the OneCLI gateway ([#2705](https://github.com/nanocoai/nanoclaw/pull/2705)).

There are no explicit satisfaction scores in the data, but maintainers have been responsive: most reported issues now have associated fix PRs, and several old PRs were finally closed this window.

## Backlog Watch
Items needing maintainer attention:

- **Credential proxy gateway bypass** — [nanocoai/nanoclaw#2705](https://github.com/nanocoai/nanoclaw/pull/2705)  
  Open since June 7, updated today. Real-world installs are affected; this should be reviewed for merge.

- **CLI `--rw` flag for mount config** — [nanocoai/nanoclaw#3149](https://github.com/nanocoai/nanoclaw/pull/3149)  
  Open since July 29, updated today. Small, well-scoped UX improvement.

- **Transactional update fix** — [nanocoai/nanoclaw#3195](https://github.com/nanocoai/nanoclaw/pull/3195)  
  Critical fix for the open update-safety bug; should be prioritized.

- **Host seams refactor** — [nanocoai/nanoclaw#3186](https://github.com/nanocoai/nanoclaw/pull/3186)  
  Architectural change for skill-owned capabilities, open since August 4.

- **Tavily MCP skill** — [nanocoai/nanoclaw#3190](https://github.com/nanocoai/nanoclaw/pull/3190)  
  New utility skill awaiting review since August 5.

Encouragingly, many older PRs from May and June — [#2591](https://github.com/nanocoai/nanoclaw/pull/2591), [#2643](https://github.com/nanocoai/nanoclaw/pull/2643), [#2644](https://github.com/nanocoai/nanoclaw/pull/2644), [#2678](https://github.com/nanocoai/nanoclaw/pull/2678), [#2679](https://github.com/nanocoai/nanoclaw/pull/2679) — were closed in this window, indicating the maintainers are actively clearing the backlog.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-08-07

## 1. Today's Overview

IronClaw is in a high-activity period: 50 issues and 50 PRs were updated in the last 24 hours, with 23 issues and 17 PRs closed/merged. The project shipped a new stable release, `ironclaw-v1.1.0`, on 2026-08-06, focused on extension reach and MCP/server integration. The PR pipeline is dominated by the new Inspector diagnostics feature, Slack delivery fixes, filesystem FTS recall fixes, and sandbox/profile work. Issue activity remains QA-heavy, with several P1/P2 bugs around routine execution, Slack delivery, and notification reliability still open. Overall, the project looks actively maintained, with strong momentum behind observability and integration reliability.

## 2. Releases

### ironclaw-v1.1.0 — 2026-08-06
- First stable release since `1.0.0`, promoting `1.1.0-rc.1` plus fixes listed under "Fixed since 1.1.0-rc.1".
- Headline work includes:
  - Registering arbitrary hosted MCP servers
  - Installing from IronHub deep links
  - Durable file attachments that cross channels
  - Slack-related improvements (note: release notes text truncated at "Slac")

No breaking changes or migration notes were provided in the available release data. The truncated notes suggest the full changelog contains additional Slack/channel delivery details.

## 3. Project Progress

In the last 24h, several notable PRs were closed/merged:

- **[#7235 — feat(inspector): add operator inspection API and live updates](https://github.com/nearai/ironclaw/pull/7235)** — Closed. Adds operator-only endpoints for bounded run snapshots, prompt diagnostics, and tool activity details, plus a live diagnostics stream with cursor-based resume and deduplication.
- **[#7259 — docs: enforce docs publication boundary](https://github.com/nearai/ironclaw/pull/7259)** — Closed. Fixes a live leak where internal `docs/design/` and `docs/research/` were publicly reachable; freezes `.mintignore` and adds a CI gate.
- **[#7303 — fix(docker): install curl so orchestrator healthchecks can run](https://github.com/nearai/ironclaw/pull/7303)** — Closed. Fixes hosted staging nodes showing `error` status despite healthy servers.
- **[#7289 — fix(memory): sanitize FTS queries so natural-language recall works on libSQL](https://github.com/nearai/ironclaw/pull/7289)** — Closed. Fixes the production recall defect behind #7275 by making FTS queries safe for natural-language text.

Open PRs indicate strong forward progress:

- Inspector suite: [#7236 debug panel shell](https://github.com/nearai/ironclaw/pull/7236), [#7239 prompt inspection and Prompt tab](https://github.com/nearai/ironclaw/pull/7239), [#7277 model call statistics](https://github.com/nearai/ironclaw/pull/7277)
- [#7157 explicit channel delivery tool](https://github.com/nearai/ironclaw/pull/7157) — two-lane delivery model replacing old heuristics
- [#7214 Docker/Railway user sandbox profiles](https://github.com/nearai/ironclaw/pull/7214)
- [#7184 Nostr host functions for WASM tools](https://github.com/nearai/ironclaw/pull/7184)
- [#7253 keep custom MCP registration private/definition-only](https://github.com/nearai/ironclaw/pull/7253)
- [#7288 libSQL FTS safety for filesystem recall](https://github.com/nearai/ironclaw/pull/7288)
- [#7300 restore Slack personal delivery and standardized canaries](https://github.com/nearai/ironclaw/pull/7300)
- [#7309 fix OAuth scope parameter when ceiling is empty](https://github.com/nearai/ironclaw/pull/7309)

## 4. Community Hot Topics

The most-commented issues within the last 24h (comment counts are low overall, but these are the relative hotspots):

- **[#5553 — Approval notifications disappear instead of remaining in notification history](https://github.com/nearai/ironclaw/issues/5553)** — 4 comments. Open P2 QA bug. Users need reliable approval visibility when automations request web access.
- **[#5702 — GitHub issue search and create capabilities fail with HTTP 403](https://github.com/nearai/ironclaw/issues/5702)** — 4 comments. Open P2. GitHub integration is configured but unusable; blocks core agent workflows.
- **[#5522 — Reborn routine fails when task requires reading Slack DMs](https://github.com/nearai/ironclaw/issues/5522)** — 3 comments. Open P2. Missing Slack read capability plus `capability_info` retry loop.
- **[#3533 — Telegram in v0.28.1 does not automatically setup from UI](https://github.com/nearai/ironclaw/issues/3533)** — 3 comments. Closed P1. Historical but still significant for the Telegram UX.
- **[#5701 — Activity panel hides tool details and does not update during active run](https://github.com/nearai/ironclaw/issues/5701)** — 3 comments. Open P2. Users want real-time tool-call observability.
- **[#5834 — Slack disconnect request is incorrectly rejected by agent](https://github.com/nearai/ironclaw/issues/5834)** — 3 comments. Open P2. User cannot disconnect Slack through the agent.

Underlying needs: notification reliability, integration authentication robustness, Slack lifecycle management, and better runtime observability.

## 5. Bugs & Stability

### Critical / P1
- **[#5504 — Routine creation hangs without returning result or error](https://github.com/nearai/ironclaw/issues/5504)** — Closed. P1. High user impact: no confirmation or error after planning message.
- **[#5456 — Routine runs fail with runner lease expiration](https://github.com/nearai/ironclaw/issues/5456)** — Open. P1. 90-second inactivity threshold is too aggressive for multi-tool routines.
- **[#5877 — Slack notification delivered to the wrong user](https://github.com/nearai/ironclaw/issues/5877)** — Closed. P1. Privacy/security risk: workflow results sent to unrelated recipient.
- **[#3533 — Telegram not automatically setup from UI](https://github.com/nearai/ironclaw/issues/3533)** — Closed. P1. Setup flow mismatch.

### High / P2
- **[#5702 — GitHub integration fails with HTTP 403](https://github.com/nearai/ironclaw/issues/5702)** — Open, 4 comments.
- **[#5834 — Slack disconnect request incorrectly rejected](https://github.com/nearai/ironclaw/issues/5834)** — Open.
- **[#5836 — Routine fails on every scheduled run with "No thread attached"](https://github.com/nearai/ironclaw/issues/5836)** — Open. Systemic scheduled-run failure.
- **[#5707 — Routine creation response exposes internal implementation details](https://github.com/nearai/ironclaw/issues/5707)** — Open.
- **[#5701 — Activity panel hides tool details and does not update during active run](https://github.com/nearai/ironclaw/issues/5701)** — Open.
- **[#5553 — Approval notifications disappear](https://github.com/nearai/ironclaw/issues/5553)** — Open.
- **[#5522 — Slack DMs cannot be read; retry loop](https://github.com/nearai/ironclaw/issues/5522)** — Open.
- **[#5508 — Slack delivery target not found despite active Slack connection](https://github.com/nearai/ironclaw/issues/5508)** — Open.
- **[#5509 — Chat creation latency scales with accumulated history](https://github.com/nearai/ironclaw/issues/5509)** — Open.
- **[#5552 — Generic "invalid result" after multiple tool failures](https://github.com/nearai/ironclaw/issues/5552)** — Open.
- **[#5776 — Long-output prompt causes repeated model timeouts](https://github.com/nearai/ironclaw/issues/5776)** — Open.
- **[#5838 — Context compaction error despite successful tool execution](https://github.com/nearai/ironclaw/issues/5838)** — Closed.

### Related fix PRs in flight
- [#7300](https://github.com/nearai/ironclaw/pull/7300) targets Slack personal-DM delivery and should address the Slack delivery/disconnect cluster.
- [#7305](https://github.com/nearai/ironclaw/pull/7305) softens failed-tool activity summary styling, related to activity-panel UX complaints.
- [#7288](https://github.com/nearai/ironclaw/pull/7288) and [#7289](https://github.com/nearai/ironclaw/pull/7289) address FTS/natural-language recall failures on libSQL.

### Lower severity / P3
- [#5510](https://github.com/nearai/ironclaw/issues/5510) Cannot delete old routines
- [#5557](https://github.com/nearai/ironclaw/issues/5557) Logs deep link requires opening twice
- [#5704](https://github.com/nearai/ironclaw/issues/5704) Image preview becomes transparent while chat is active
- [#5705](https://github.com/nearai/ironclaw/issues/5705) Terminal icon in chat UI has no disable option
- [#5706](https://github.com/nearai/ironclaw/issues/5706) Sidebar shows raw thread ID when instance is lagging

## 6. Feature Requests & Roadmap Signals

The most concrete roadmap signals come from open PRs and recent issue work:

- **Inspector/diagnostics platform** — Issues like [#7220](https://github.com/nearai/ironclaw/issues/7220) and PRs [#7235](https://github.com/nearai/ironclaw/pull/7235), [#7236](https://github.com/nearai/ironclaw/pull/7236), [#7239](https://github.com/nearai/ironclaw/pull/7239), [#7277](https://github.com/nearai/ironclaw/pull/7277) point to a serious investment in operator observability: prompt inspection, live diagnostics, model-call statistics, and bounded tool details.
- **Explicit channel delivery tool** — [#7157](https://github.com/nearai/ironclaw/pull/7157) implements a two-lane delivery model, likely the long-term fix for Slack notification routing and delivery-target confusion.
- **Sandbox profiles** — [#7214](https://github.com/nearai/ironclaw/pull/7214) adds explicit Docker and Railway user-sandbox profiles, suggesting broader multi-tenant/self-hosted support.
- **WASM/Nostr integration** — [#7184](https://github.com/nearai/ironclaw/pull/7184) adds Nostr host functions for WASM tools, a notable feature from a new contributor.
- **MCP registration privacy** — [#7253](https://github.com/nearai/ironclaw/pull/7253) keeps custom MCP registration definition-only, aligning with the 1.1.0 release theme of arbitrary hosted MCP servers.
- **Guidance unification** — [#7306](https://github.com/nearai/ironclaw/pull/7306) is a large docs/CI effort to keep guidance canonical and prevent rot.

Prediction: the next minor release will likely include the Inspector suite, the channel-delivery tool, FTS recall fixes, Slack personal-delivery restoration, and the sandbox profile work.

## 7. User Feedback Summary

Users are generally testing IronClaw in real automation scenarios — routines, Slack DMs, GitHub issue triage, MCP integrations — and reporting friction where the agent cannot complete or explain its own actions.

Key pain points:

- **Slack is a major source of frustration:** incorrect delivery to wrong users (#5877), disconnect blocked (#5834), missing delivery targets (#5508), inability to read DMs (#5522), and stale routines continuing on old Slack configs (#5510).
- **Failure transparency is weak:** generic "invalid result" errors (#5552), hidden tool details (#5701), internal implementation details exposed after routine creation (#5707), and "No thread attached" failures that block debugging (#5507).
- **Reliability issues with routine execution:** hangs (#5504), lease expiry (#5456), scheduled-run failures (#5836), context compaction errors (#5838), and long-output timeouts (#5776).
- **UX regressions:** disappearing approval notifications (#5553), transparent image previews (#5704), raw thread IDs in sidebar (#5706), and double-click-required deep links (#5557).

Satisfaction signals are indirect but positive: the project is shipping stable releases, actively closing QA bugs, and investing in operator tooling. However, the density of P1/P2 QA labels suggests users are hitting systemic stability issues in routine-based workflows.

## 8. Backlog Watch

Issues that appear important but have been open for a while or have low maintainer engagement in the provided data:

- **[#5456 — Routine runs fail with runner lease expiration](https://github.com/nearai/ironclaw/issues/5456)** — Open since 2026-06-30, P1. This was the dominant failure pattern during 6/30 QA testing and remains open.
- **[#5508 — Slack delivery target not found despite active Slack connection](https://github.com/nearai/ironclaw/issues/5508)** — Open since 2026-07-01, P2. Directly impacts routine delivery.
- **[#5509 — Chat creation latency scales with accumulated conversation history](https://github.com/nearai/ironclaw/issues/5509)** — Open since 2026-07-01, P2. Frontend performance issue.
- **[#5510 — Cannot delete old routines](https://github.com/nearai/ironclaw/issues/5510)** — Open since 2026-07-01, P3. Compounds Slack delivery and stale-routine problems.
- **[#5552 — Generic "invalid result" after multiple tool failures](https://github.com/nearai/ironclaw/issues/5552)** — Open since 2026-07-02, P2. Hinders debuggability.
- **[#5776 — Long-output prompt causes repeated model timeouts](https://github.com/nearai/ironclaw/issues/5776)** — Open since 2026-07-07, P2. Root cause hidden by generic error path.
- **[#5836 — Routine fails on every scheduled run with "No thread attached"](https://github.com/nearai/ironclaw/issues/5836)** — Open since 2026-07-08, P2. Appears systemic for scheduled routines.
- **Older Qwen/MiniMax model QA cluster** — [#4344](https://github.com/nearai/ironclaw/issues/4344), [#4343](https://github.com/nearai/ironclaw/issues/4343), [#4341](https://github.com/nearai/ironclaw/issues/4341), [#4342](https://github.com/nearai/ironclaw/issues/4342), [#4340](https://github.com/nearai/ironclaw/issues/4340), [#4339](https://github.com/nearai/ironclaw/issues/4339) — all open since 2026-06-02 with zero comments in the sampled data. These include exposed thinking chains, blank-content validation errors, auth modal persistence, MCP driver failures, and invalid tool invocations. They may be model-specific, but their age and lack of updates make them backlog risks.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-08-07

## Today's Overview
LobsterAI saw moderate activity on 2026-08-07: 6 issues and 4 PRs were updated in the last 24 hours, with no new releases. New issue reports focused on silent execution failures, model-selection bugs for providers using slash-containing model IDs, and PowerShell runtime version concerns. One Windows installer fix PR was closed/merged, while two fresh PRs from the same contributor indicate active maintenance on installer and OpenClaw configuration areas. No release was published, and the overall project health appears stable but still heavily reliant on backlog cleanup and incremental bug-fixing.

## Releases
No new releases were published in this window.

## Project Progress
- [#2446 [CLOSED] fix(win-installer): rescue null watchdog exit code via extractor](https://github.com/netease-youdao/LobsterAI/pull/2446) — The only closed/merged PR today. This is a Windows installer fix that prevents a null watchdog exit code from causing incorrect installer behavior. It is a targeted stability improvement for the Windows packaging path.

## Community Hot Topics
Activity on issues remains low; the items below had the most comments/discussion in the last day:

- [#2447 [OPEN] 执行没有出结果，也没有错误信息](https://github.com/netease-youdao/LobsterAI/issues/2447) — 1 comment. Users report commands/tasks seeming to run without any output or error, which points to a need for better execution feedback and error surfacing.
- [#1196 [OPEN] [stale] 不要强制在工作目录中建立 Agents.md、User.md等6个文件](https://github.com/netease-youdao/LobsterAI/issues/1196) — 1 comment. Users are asking for a global or hidden configuration location instead of forcing workspace file creation.
- [#1198 [OPEN] [stale] 网关重启到一半进度条消失，也不知道重启状态，后面的对话都显示模型不可用](https://github.com/netease-youdao/LobsterAI/issues/1198) — 1 comment. Gateway restart UX is confusing: progress disappears and users cannot tell whether the restart succeeded.

Underlying needs: more transparent job/execution status, less workspace pollution, and clearer gateway restart state.

## Bugs & Stability
Ranked by severity:

1. **High — [#2447 执行没有结果，也没有错误信息](https://github.com/netease-youdao/LobsterAI/issues/2447)**  
   Silent execution failure: no output, no error message. This is the most serious reliability issue reported today because users cannot distinguish a hung task from a completed one. No fix PR has been linked yet.

2. **Medium-High — [#1198 网关重启到一半进度条消失，也不知道重启状态](https://github.com/netease-youdao/LobsterAI/issues/1198)**  
   Stale but still relevant: gateway restart progress disappears and models remain unavailable. Existing issue from April, no dedicated fix PR.

3. **Medium — [#2443 模型 ID 含斜杠的自定义 Provider 无法在界面中使用](https://github.com/netease-youdao/LobsterAI/issues/2443)**  
   OpenAI-compatible providers such as SiliconFlow cannot be used when model IDs contain slashes, e.g. `deepseek-ai/DeepSeek-V4-Flas...`. Workaround exists only via direct config, not UI. No fix PR yet.

4. **Low / Question — [#2442 LobsterAI 内核仍是 PS 5.1，未升级到 PS 7.4](https://github.com/netease-youdao/LobsterAI/issues/2442)**  
   Not a regression, but a compatibility complaint: LobsterAI’s default shell is Windows PowerShell 5.1 instead of PowerShell 7.4. Users want modern PowerShell features.

No direct fix PR was observed today for these reported bugs, though the closed installer PR [#2446](https://github.com/netease-youdao/LobsterAI/pull/2446) may address a related Windows startup/watchdog failure mode.

## Feature Requests & Roadmap Signals
- [#2444 [功能请求] 输入框编辑模式](https://github.com/netease-youdao/LobsterAI/issues/2444) — Users want an "edit mode" for the prompt input box: larger area, `Enter` for newline, `Ctrl+Enter` to send, and possibly WYSIWYG Markdown editing. This is a clear, implementable UX improvement likely to appear in the next UI-focused release.
- [#1196 不要强制在工作目录中建立 Agents.md、User.md等6个文件](https://github.com/netease-youdao/LobsterAI/issues/1196) — A repeated request for global or hidden config files instead of requiring six files in every working directory.
- [#1199 [OPEN] feat(model): add context window and token settings](https://github.com/netease-youdao/LobsterAI/pull/1199) — Stale PR but represents a roadmap feature: per-model `contextWindow` and `maxTokens` settings, with propagation to Cowork/OpenClaw. If revived, this could land in a future release.
- [#2442 升级到 PowerShell 7.4](https://github.com/netease-youdao/LobsterAI/issues/2442) — A possible roadmap signal for modern shell support on Windows, though the linked explanation suggests it is an internal design constraint rather than a simple config toggle.

Prediction: the next version will likely include fixes for slash-containing model IDs and prompt-input editing improvements, since both are fresh and directly affect daily usability. The model context/token settings feature may also progress if the stale PR is rebased.

## User Feedback Summary
- **Workspace clutter is a recurring pain point**: users are frustrated by LobsterAI forcing creation of `AGENTS.md`, `USER.md`, and similar files into every working directory.
- **Execution transparency is lacking**: at least one user observed silent failures with no output or error; another reported disappearing gateway restart progress and confusing "model unavailable" states afterward.
- **Provider compatibility matters**: SiliconFlow and other OpenAI-compatible providers are impacted by model IDs with slashes, preventing UI selection for valid models.
- **Long-prompt editing is awkward**: the current `Shift+Enter` behavior causes accidental sends and makes multiline input impractical.
- **Windows shell expectations are shifting**: some users expect PowerShell 7.4 rather than the default 5.1 runtime.

No positive feedback or satisfaction signals were present in this window.

## Backlog Watch
The following long-standing items were touched/updated on 2026-08-06 and still need maintainer attention:

- [#1196 [stale] 不要强制在工作目录中建立 Agents.md、User.md等6个文件](https://github.com/netease-youdao/LobsterAI/issues/1196) — Open since 2026-04-01; needs a maintainer decision on global config storage.
- [#1198 [stale] 网关重启到一半进度条消失](https://github.com/netease-youdao/LobsterAI/issues/1198) — Open since 2026-04-01; gateway restart UX/reliability bug should be prioritized.
- [#1197 [stale] Feature/Agent 管理页面交互优化](https://github.com/netease-youdao/LobsterAI/pull/1197) — Open PR from April with merge conflicts; needs rebase and review.
- [#1199 [stale] feat(model): add context window and token settings](https://github.com/netease-youdao/LobsterAI/pull/1199) — Useful feature PR from April, still unreviewed/unmerged.

These stale items indicate that some community contributions and long-standing UX issues are not receiving timely maintainer attention, even though they are directly aligned with current user complaints.

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

# CoPaw Project Digest — 2026-08-07

> Source data: agentscope-ai/CoPaw (issue/PR trackers referenced as QwenPaw product items).

## 1. Today's Overview

CoPaw had a busy 24-hour cycle: 28 issues were updated (14 open/active, 14 closed) and 50 pull requests were touched (20 open, 30 merged/closed), with **no new releases** published. The mix indicates a hardening phase: a large share of merged PRs address agentscope 2.0.4.post1 compatibility, tool-call fidelity, and memory-subsystem lifecycle bugs, while notable feature work (AG-UI protocol endpoint, Files REST API, user-context passthrough) also landed. Maintainers closed issues at a healthy rate, and several high-impact bugs already have linked fix PRs (e.g., #6619 → #6759, #6773 → #6774). The community is globally diverse (Chinese- and English-speaking reporters) with recurring themes around channel reliability, long-session stability, and dependency compatibility.

## 2. Releases

No new releases were published in this period. The latest versions referenced across issues are QwenPaw 2.0.1 (stable) and 2.1.0b1/b2 (beta).

## 3. Project Progress

30 PRs were merged/closed in the last 24h. Highlights from the tracked set:

**Tool-call robustness**
- [PR #6759](https://github.com/agentscope-ai/QwenPaw/pull/6759) — fix: preserve tool call extra content across context lifecycle (addresses the `ToolCallBlock` crash in #6619).
- [PR #6605](https://github.com/agentscope-ai/QwenPaw/pull/6605) — fix(providers): return typed tagged tool calls; rehydrates tool calls from thinking/text tags as AgentScope 2 `ToolCallBlock` objects.

**New APIs / features**
- [PR #6337](https://github.com/agentscope-ai/QwenPaw/pull/6337) — feat(agui): expose AG-UI protocol via dedicated `/protocol/agui/chat` SSE endpoint.
- [PR #6651](https://github.com/agentscope-ai/QwenPaw/pull/6651) — feat(files): file/folder management REST API for the Files page (delete, rename/move, mkdir, upload/download, listing), reusing the FileGuard security model.
- [PR #6525](https://github.com/agentscope-ai/QwenPaw/pull/6525) — feat: transparent passthrough of user context (`user_id`, `user_name`, `channel`, metadata) from Chat API → Agent → Tool → MCP → SKILL CLI.

**Stability / resilience**
- [PR #6664](https://github.com/agentscope-ai/QwenPaw/pull/6664) — fix(harnesses): degrade gracefully without Codex CLI.

**Docs**
- [PR #6751](https://github.com/agentscope-ai/QwenPaw/pull/6751) — docs(blog): Scroll executable memory report.

**Memory subsystem re-submissions**
- [PR #6741](https://github.com/agentscope-ai/QwenPaw/pull/6741) and [PR #6739](https://github.com/agentscope-ai/QwenPaw/pull/6739) were closed because their source forks were deleted; the work was re-submitted as [PR #6772](https://github.com/agentscope-ai/QwenPaw/pull/6772) (ReMe configuration & embedding lifecycle) and [PR #6771](https://github.com/agentscope-ai/QwenPaw/pull/6771) (embedding model configuration guide), both currently open.

Other open PRs worth tracking: [PR #6774](https://github.com/agentscope-ai/QwenPaw/pull/6774) (honor `in_loop_modes` for goal/mission gates — fixes #6773), [PR #6776](https://github.com/agentscope-ai/QwenPaw/pull/6776) (self-heal dead Playwright driver connections), and [PR #6564](https://github.com/agentscope-ai/QwenPaw/pull/6564) (flush pending turns before memory compression — fixes #6555).

## 4. Community Hot Topics

Most-discussed issues in the last 24h:

- [Issue #6684](https://github.com/agentscope-ai/QwenPaw/issues/6684) *(closed, 8 comments)* — **Feature: channel retry/health-check for Matrix.** QwenPaw's Matrix client starts faster than the Matrix service, causing permanent channel failure until manual re-save; no automatic retry or health detection exists.
- [Issue #6588](https://github.com/agentscope-ai/QwenPaw/issues/6588) *(closed, 6 comments)* — **`spawn_subagent` treats empty `batch` placeholder as batch mode** in single-task calls.
- [Issue #6601](https://github.com/agentscope-ai/QwenPaw/issues/6601) *(open, 5 comments)* — **No empty-response errors reported.** Long sessions near the context window get silent model empty responses and become unresponsive.
- [Issue #6667](https://github.com/agentscope-ai/QwenPaw/issues/6667) *(closed, 5 comments)* — **DeepSeek thinking mode fails in multi-turn** after OpenAI formatter skips ThinkingBlock; the retry fallback only works for the first occurrence.
- [Issue #6732](https://github.com/agentscope-ai/QwenPaw/issues/6732) *(open, 3 comments)* — **MCP tools fail periodically** ("not registered"/"doesn't exist"); Docker restart restores them.
- [Issue #6612](https://github.com/agentscope-ai/QwenPaw/issues/6612) *(open, 3 comments)* — **QwenPaw 2.0.1 incompatible with agentscope 2.0.4.post1**: proactive-subsystem crashes + tool-permission deadlock.

**Underlying needs:** production reliability (channels, MCP, long-running sessions), better error visibility, and faster adaptation to upstream agentscope API changes.

## 5. Bugs & Stability

Bugs reported or updated in the last 24h, ranked by severity:

**High severity (open)**
- [Issue #6768](https://github.com/agentscope-ai/QwenPaw/issues/6768) — Agent enters an infinite/unresponsive loop for hours after a multi-step REST import task; messages received but never processed. No fix PR yet.
- [Issue #6773](https://github.com/agentscope-ai/QwenPaw/issues/6773) — On Linux, doom-loop/rubric safety gates in `/goal` and `/mission` never activate; `in_loop_modes` is a no-op, silently disabling repetition protection. Fix PR: [PR #6774](https://github.com/agentscope-ai/QwenPaw/pull/6774) (open).
- [Issue #6612](https://github.com/agentscope-ai/QwenPaw/issues/6612) — Dependency incompatibility with agentscope 2.0.4.post1 crashes the proactive/memory subsystem and deadlocks tool permissions.
- [Issue #6732](https://github.com/agentscope-ai/QwenPaw/issues/6732) — MCP tools become un-callable after hours/days; container restart required.
- [Issue #6775](https://github.com/agentscope-ai/QwenPaw/issues/6775) — Malwarebytes reports "Trojan Loader" in the Windows Desktop build; user uninstalled pending official response. Likely false positive, but needs a maintainer reply.
- [Issue #6601](https://github.com/agentscope-ai/QwenPaw/issues/6601) — Empty model responses silently kill long sessions; no error surfaced.
- [Issue #6756](https://github.com/agentscope-ai/QwenPaw/issues/6756) — `run_tool_batch` always fails with "No toolkit available in current context" on 2.1.0b1.
- [Issue #6722](https://github.com/agentscope-ai/QwenPaw/issues/6722) — Background forked subagent reports completed even when worktree finalization fails; commits missing.
- [Issue #6755](https://github.com/agentscope-ai/QwenPaw/issues/6755) — Cross-day sessions: model mislabels weekday/date (calls 2026-08-06 "Wednesday"), causing real scheduling errors.

**Fixed/closed in this cycle**
- [Issue #6619](https://github.com/agentscope-ai/QwenPaw/issues/6619) — `ToolCallBlock` "extra_content" crash → fixed by [PR #6759](https://github.com/agentscope-ai/QwenPaw/pull/6759).
- [Issue #6731](https://github.com/agentscope-ai/QwenPaw/issues/6731) — `execute_shell_command` crashes when model passes `sandbox_config` (dataclass `replace()` error).
- [Issue #6707](https://github.com/agentscope-ai/QwenPaw/issues/6707) — 400 `invalid_request_error` when thinking-mode history contains tool calls; `reasoning_content` relay fails.
- [Issue #6708](https://github.com/agentscope-ai/QwenPaw/issues/6708) — 503 reported as SSE in-stream error is not retried and fails the request.
- [Issue #6698](https://github.com/agentscope-ai/QwenPaw/issues/6698) — Browser SDK `open()` always fails with WireProtocolError (isolated Playwright session).
- [Issue #6762](https://github.com/agentscope-ai/QwenPaw/issues/6762) — Desktop 2.1.0b1 long shell commands overflow (CodeMirror lacks lineWrapping).
- [Issue #6760](https://github.com/agentscope-ai/QwenPaw/issues/6760) — `qwenpaw task` cmdline error after upgrading to 2.0.1.
- [Issue #6557](https://github.com/agentscope-ai/QwenPaw/issues/6557) — MCP tool names starting with `-` violate OpenAI function-calling spec, causing 400s on strict APIs (e.g., Kimi).
- [Issue #6687](https://github.com/agentscope-ai/QwenPaw/issues/6687) — OpenRouter multimodal probe overwrites documented capabilities with `false`.
- [Issue #6476](https://github.com/agentscope-ai/QwenPaw/issues/6476) — Matrix end-to-end encryption unavailable (matrix-nio/olm installation issues).
- [Issue #6700](https://github.com/agentscope-ai/QwenPaw/issues/6700) — Multi-MB tool outputs freeze history loading; requested truncation/pagination.

## 6. Feature Requests & Roadmap Signals

Requests updated in the last 24h:

- [Issue #6770](https://github.com/agentscope-ai/QwenPaw/issues/6770) *(open)* — Make user Chrome tab lifetime configurable across response cycles.
- [Issue #6724](https://github.com/agentscope-ai/QwenPaw/issues/6724) *(open)* — Configurable MCP tool-call timeout (per-client config + call-level guard); slow/hung MCP servers can stall a turn indefinitely.
- [Issue #6728](https://github.com/agentscope-ai/QwenPaw/issues/6728) *(open)* — WeChat approval prompts should support Chinese approve/deny actions.
- [Issue #6765](https://github.com/agentscope-ai/QwenPaw/issues/6765) *(open)* — Add more EU languages (e.g., Hungarian); i18n backlog item.
- [Issue #6761](https://github.com/agentscope-ai/QwenPaw/issues/6761) *(open)* — Support for the MCP 2026-07-28 stateless protocol spec; breaking change requiring a roadmap decision.
- [Issue #6684](https://github.com/agentscope-ai/QwenPaw/issues/6684) *(closed)* — Channel retry/health-check capability; closure suggests implementation is underway or planned.
- [Issue #6700](https://github.com/agentscope-ai/QwenPaw/issues/6700) *(closed)* — Tool-output truncation + history pagination; likely UX hardening for 2.1.x.

**Roadmap signals from merged code:** AG-UI protocol exposure ([#6337](https://github.com/agentscope-ai/QwenPaw/pull/6337)), Files REST API ([#6651](https://github.com/agentscope-ai/QwenPaw/pull/6651)), user-context passthrough ([#6525](https://github.com/agentscope-ai/QwenPaw/pull/6525)), and memory/embedding lifecycle improvements ([#6772](https://github.com/agentscope-ai/QwenPaw/pull/6772)).

**Likely next-version (2.1.x) candidates:** MCP stateless support + timeouts, browser driver self-healing ([#6776](https://github.com/agentscope-ai/QwenPaw/pull/6776)), goal/mission safety-gate fix ([#6774](https://github.com/agentscope-ai/QwenPaw/pull/6774)), and the ReMe embedding configuration work ([#6772](https://github.com/agentscope-ai/QwenPaw/pull/6772)).

## 7. User Feedback Summary

- **Reliability is the top pain point.** Multiple reports describe silently broken or degraded sessions: Matrix channels requiring manual re-saves ([#6684](https://github.com/agentscope-ai/QwenPaw/issues/6684), [#6476](https://github.com/agentscope-ai/QwenPaw/issues/6476)), MCP tools dying overnight ([#6732](https://github.com/agentscope-ai/QwenPaw/issues/6732)), and hours-long unresponsiveness after complex tasks ([#6768](https://github.com/agentscope-ai/QwenPaw/issues/6768)).
- **Long-session users hit the context-window ceiling.** Silent empty responses ([#6601](https://github.com/agentscope-ai/QwenPaw/issues/6601)) and multi-MB tool outputs freezing the UI ([#6700](https://github.com/agentscope-ai/QwenPaw/issues/6700)) drive requests for truncation, pagination, and explicit errors.
- **Chinese-speaking users want localized UX**, not just translations: Chinese approve/deny labels in WeChat approvals ([#6728](https://github.com/agentscope-ai/QwenPaw/issues/6728)) and correct date/weekday handling for scheduling ([#6755](https://github.com/agentscope-ai/QwenPaw/issues/6755)).
- **Dependency friction is real.** Two separate incompatibility reports against agentscope 2.0.4.post1 ([#6612](https://github.com/agentscope-ai/QwenPaw/issues/6612), [#6619](https://github.com/agentscope-ai/QwenPaw/issues/6619)) show users upgrading agentscope and hitting crashes; version-pinning guidance is needed.
- **Trust/security sensitivity:** a Windows AV false-positive alert caused an immediate uninstall ([#6775](https://github.com/agentscope-ai/QwenPaw/issues/6775)); a prompt official response is important.
- **Sentiment is largely positive:** reporters explicitly thank maintainers and express enthusiasm for the Qwen family ([#6765](https://github.com/agentscope-ai/QwenPaw/issues/6765), [#6775](https://github.com/agentscope-ai/QwenPaw/issues/6775)). The community is technically sophisticated — several reports include verified root-cause analysis and testing on `main`.

## 8. Backlog Watch

Items needing maintainer attention:

- [Issue #6612](https://github.com/agentscope-ai/QwenPaw/issues/6612) *(open since Jul 31)* — blocks users on agentscope 2.0.4.post1; no fix PR yet.
- [Issue #6601](https://github.com/agentscope-ai/QwenPaw/issues/6601) *(open since Jul 31, 5 comments)* — framework-level empty-response detection; important for long-session usability.
- [Issue #6732](https://github.com/agentscope-ai/QwenPaw/issues/6732) *(open since Aug 6)* — periodic MCP tool failure with no root cause identified; high user impact.
- [Issue #6775](https://github.com/agentscope-ai/QwenPaw/issues/6775) *(opened Aug 7)* — AV false positive needs an official reply to restore trust.
- [Issue #6756](https://github.com/agentscope-ai/QwenPaw/issues/6756) — `run_tool_batch` broken in 2.1.0b1; should be fixed before the next stable release.
- [Issue #6773](https://github.com/agentscope-ai/QwenPaw/issues/6773) — safety gates silently disabled on Linux; fix PR [PR #6774](https://github.com/agentscope-ai/QwenPaw/pull/6774) is open and should be prioritized.
- [PR #6564](https://github.com/agentscope-ai/QwenPaw/pull/6564) *(open since Jul 30)* — memory compression flush fix; in review for over a week.
- [PR #6663](https://github.com/agentscope-ai/QwenPaw/pull/6663) *(open since Aug 4)* — "Keep console channel enabled" still has a placeholder description; needs proper review/summary.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-08-07

## 1. Today's Overview
ZeroClaw is deep in a coordinated hardening-and-governance cycle: 36 issues and 50 PRs were updated in the last 24 hours (12 issues and 8 PRs reached closure), with no new releases published. The project is operating around v0.8.4, with a v0.9.0 breaking-change queue ([#7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432)) already tracking auth, security, gateway, A2A, and tool-policy work. Dominant themes are RFC-process reform ([#6808](https://github.com/zeroclaw-labs/zeroclaw/issues/6808), [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692)), delivery of the accepted A2A outbound client ([#9106](https://github.com/zeroclaw-labs/zeroclaw/issues/9106), [PR #9324](https://github.com/zeroclaw-labs/zeroclaw/pull/9324)), and a wave of security fixes around credential leakage, SSRF, and unauthenticated endpoints. Healthy closure signals include the project's first-ever issue ([#1](https://github.com/zeroclaw-labs/zeroclaw/issues/1), XOR cipher) and the S0 confused-deputy bug ([#7947](https://github.com/zeroclaw-labs/zeroclaw/issues/7947)), but maintainer bandwidth is becoming the bottleneck: 7 open issues await `needs-maintainer-review` and 17 PRs are stalled on `needs-author-action`.

## 2. Releases
No releases published in the last 24 hours.

## 3. Project Progress
- **8 PRs were closed/merged** in the last 24 hours. The one visible in the digest sample is [PR #9741](https://github.com/zeroclaw-labs/zeroclaw/pull/9741) — `ci(container)`: validate the canonical all-features image, preventing MSRV-lane drift from the all-features `Containerfile` selection.
- **12 issues closed**, including several meaningful resolutions:
  - [#7947](https://github.com/zeroclaw-labs/zeroclaw/issues/7947) — S0 security bug: `execute_pipeline` bypassed per-agent tool gating (confused deputy). Now closed.
  - [#1](https://github.com/zeroclaw-labs/zeroclaw/issues/1) — CRITICAL XOR-cipher secret storage; the oldest issue in the repo is finally closed.
  - [#657](https://github.com/zeroclaw-labs/zeroclaw/issues/657) — Feature request: Kimi Code provider support.
  - [#9172](https://github.com/zeroclaw-labs/zeroclaw/issues/9172) — Single command-descriptor source for ZeroCode slash commands.
  - [#8615](https://github.com/zeroclaw-labs/zeroclaw/issues/8615) — Compatible provider silently deleting content via unconditional `<think>`-tag stripping.
  - [#8950](https://github.com/zeroclaw-labs/zeroclaw/issues/8950) — Telegram `BOT_COMMANDS_TOO_MUCH` command-menu registration failure.
  - [#9672](https://github.com/zeroclaw-labs/zeroclaw/issues/9672) — All three `cron add` CLI help examples broken.
  - [#9456](https://github.com/zeroclaw-labs/zeroclaw/issues/9456) — Added Containerfile source-build validation to PR CI.

## 4. Community Hot Topics
**Most-discussed issues:**
- [#6808](https://github.com/zeroclaw-labs/zeroclaw/issues/6808) — **19 comments**: RFC: Work Lanes, Board Automation, and Label Cleanup. Rev. 24, ratification deferred / rollout in progress. The project's central governance reform.
- [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) — **11 comments**: Maintainer decision queue for RFCs and design issues — the formal queue for unblocking decisions.
- [#9106](https://github.com/zeroclaw-labs/zeroclaw/issues/9106) — **11 comments**: RFC: A2A outbound client (`A2ATool`); accepted, risk:high, with implementation underway in [PR #9324](https://github.com/zeroclaw-labs/zeroclaw/pull/9324).
- [#9246](https://github.com/zeroclaw-labs/zeroclaw/issues/9246) — **11 comments**: RFC: Preserve Todo tracker configuration during ZeroCode ownership migration.
- [#6954](https://github.com/zeroclaw-labs/zeroclaw/issues/6954) — **10 comments**: RFC: provenance, conversation binding, and reply contract for internally initiated agent turns.
- [#7100](https://github.com/zeroclaw-labs/zeroclaw/issues/7100) — **8 comments**: RFC: per-model capability & context-window config (vision, context_window).
- [#9397](https://github.com/zeroclaw-labs/zeroclaw/issues/9397) — **7 comments**: RFC: treat empty WhatsApp Web `allowed_groups` as permit-none (security default).

**Notable PRs** (comment counts not captured in data): the p0 [PR #9571](https://github.com/zeroclaw-labs/zeroclaw/pull/9571) removing the WATI channel, and the p1 security fixes [PR #9435](https://github.com/zeroclaw-labs/zeroclaw/pull/9435) (Gemini API-key scrubbing) and [PR #9438](https://github.com/zeroclaw-labs/zeroclaw/pull/9438) (`/api/pair` lockout bypass).

**Underlying needs:** maintainers are seeking to make the RFC process itself faster ([#9496](https://github.com/zeroclaw-labs/zeroclaw/issues/9496), [#9530](https://github.com/zeroclaw-labs/zeroclaw/issues/9530)); users want real A2A inter-agent interoperability and trustworthy per-model capability data; and the community continues to push for secure defaults (WhatsApp groups, pairing rate limits, credential handling).

## 5. Bugs & Stability
Ranked by severity (fix PR status noted where applicable):

- **High — [#9799](https://github.com/zeroclaw-labs/zeroclaw/issues/9799)** (new, daemon): long-lived `--ephemeral` daemon spins at 140–177% CPU with repeated database handles. No fix PR yet.
- **High — [#9800](https://github.com/zeroclaw-labs/zeroclaw/issues/9800)** (new, zerocode/TUI): SIGTERM leaves terminal in raw mode with mouse-tracking enabled; raw SGR sequences leak to shell. No fix PR yet.
- **High — [#9328](https://github.com/zeroclaw-labs/zeroclaw/issues/9328)** (security, accepted): `verifiable-intent` evaluates constraints without verifying the credential chain — broken trust model in `vi_verify`. No fix PR yet.
- **High (P1) — [#9779](https://github.com/zeroclaw-labs/zeroclaw/issues/9779)**: documented `sops_dir` default not honored by daemon; SOPs silently never load. No fix PR yet.
- **High (P1) — [#9770](https://github.com/zeroclaw-labs/zeroclaw/issues/9770)**: `cron update` silently discards changes to declarative jobs (six columns). No fix PR yet.
- **High (P1) — [#9786](https://github.com/zeroclaw-labs/zeroclaw/issues/9786)**: malformed `SOP.toml` silently dropped; `sop list` omits it and `sop validate` reports success. No fix PR yet.
- **Medium (P2) — [#9780](https://github.com/zeroclaw-labs/zeroclaw/issues/9780)**: cron-triggered SOPs cannot do network work (no HTTP capability; `shell.exec`/`notify.channel` unsatisfiable placeholders).
- **Medium (P2) — [#9783](https://github.com/zeroclaw-labs/zeroclaw/issues/9783)**: `SopEngine::finish_run` accepts a failure reason and discards it; failed runs record no cause.
- **Medium (P2) — [PR #9771](https://github.com/zeroclaw-labs/zeroclaw/issues/9771)**: `zeroclaw-gateway` fails `clippy -D warnings` on default feature surface.

**Fix PRs in flight:** [PR #8826](https://github.com/zeroclaw-labs/zeroclaw/pull/8826) (SSRF via `image_gen` download URL), [PR #9435](https://github.com/zeroclaw-labs/zeroclaw/pull/9435) (Gemini key leak in error text), [PR #9438](https://github.com/zeroclaw-labs/zeroclaw/pull/9438) (`/api/pair` lockout bypass), [PR #9283](https://github.com/zeroclaw-labs/zeroclaw/pull/9283) (gzip/brotli/deflate decompression for `web_fetch`), [PR #9748](https://github.com/zeroclaw-labs/zeroclaw/pull/9748) (stale provider refreshes mutating replacement sessions, fixes #9719), [PR #9197](https://github.com/zeroclaw-labs/zeroclaw/pull/9197) (CLI Ctrl+C supervisor restart loop), and [PR #9403](https://github.com/zeroclaw-labs/zeroclaw/pull/9403) (WASM export wall-clock deadline).

## 6. Feature Requests & Roadmap Signals
- **A2A outbound client** ([#9106](https://github.com/zeroclaw-labs/zeroclaw/issues/9106)) — accepted RFC; [PR #9324](https://github.com/zeroclaw-labs/zeroclaw/pull/9324) implements phase 1 (four `a2a_*` tools, shared A2A v1.0 wire model, default-closed `[a2a.client]` config). Strong candidate for the next release.
- **Per-model capability & context-window config** ([#7100](https://github.com/zeroclaw-labs/zeroclaw/issues/7100)) — P1 RFC under maintainer review; would fix false vision support and wrong 32k context fallback.
- **PowerShell as native Windows shell** ([PR #9182](https://github.com/zeroclaw-labs/zeroclaw/pull/9182)) — XL feature awaiting author action.
- **Anthropic stored OAuth profiles** ([PR #9420](https://github.com/zeroclaw-labs/zeroclaw/pull/9420)) — XL feature awaiting author action.
- **OTel cross-turn conversation correlation** ([PR #9352](https://github.com/zeroclaw-labs/zeroclaw/pull/9352)) — XL feature awaiting author action.
- **Matrix single-message progress drafts** ([PR #8443](https://github.com/zeroclaw-labs/zeroclaw/pull/8443)) — XL feature awaiting author action.
- **WATI channel removal** ([PR #9571](https://github.com/zeroclaw-labs/zeroclaw/pull/9571)) — P0 breaking change/cleanup in flight.
- **v0.9.0 queue** ([#7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432)) — tracker for the next major release's auth, security, gateway, A2A, and breaking changes; signals that 0.9.0 will contain deliberate breaking changes.

## 7. User Feedback Summary
- **Resolved satisfaction:** users asking for Kimi Code provider support ([#657](https://github.com/zeroclaw-labs/zeroclaw/issues/657)), Bedrock Nova 2 Lite cachePoint disablement ([#8720](https://github.com/zeroclaw-labs/zeroclaw/issues/8720)), and Telegram command-menu fixes ([#8950](https://github.com/zeroclaw-labs/zeroclaw/issues/8950)) all saw their issues closed.
- **Silent-configuration pain is the biggest recurring complaint:** `sops_dir` default not honored ([#9779](https://github.com/zeroclaw-labs/zeroclaw/issues/9779)), malformed `SOP.toml` dropped without diagnostics ([#9786](https://github.com/zeroclaw-labs/zeroclaw/issues/9786)), `cron update` discarding declarative changes ([#9770](https://github.com/zeroclaw-labs/zeroclaw/issues/9770)), and cron-triggered SOPs with no network capability ([#9780](https://github.com/zeroclaw-labs/zeroclaw/issues/9780)) — all filed by operators relying on documented behavior.
- **CLI usability:** every `cron add` help example failed as printed ([#9672](https://github.com/zeroclaw-labs/zeroclaw/issues/9672), closed).
- **Desktop experience:** AppImage detection and download-URL issues persist ([PR #9291](https://github.com/zeroclaw-labs/zeroclaw/pull/9291)).
- **Provider parity demand remains high:** Kimi Code, Anthropic OAuth, Gemini key hygiene, and per-model context windows are all actively requested.

## 8. Backlog Watch
- **Maintainer decision queue** — [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) (11 comments) is the formal tracker, but the items waiting on it are piling up.
- **Long-running governance RFCs needing maintainer review:**
  - [#6808](https://github.com/zeroclaw-labs/zeroclaw/issues/6808) — Work Lanes/Board Automation, in "ratification deferred" since May 20 (19 comments).
  - [#6954](https://github.com/zeroclaw-labs/zeroclaw/issues/6954) — provenance/reply-contract RFC, since May 26 (10 comments).
  - [#7100](https://github.com/zeroclaw-labs/zeroclaw/issues/7100) — P1 per-model capability RFC, since Jun 2 (8 comments).
  - [#9397](https://github.com/zeroclaw-labs/zeroclaw/issues/9397) — P1 WhatsApp security RFC, since Jul 26 (7 comments).
  - [#9496](https://github.com/zeroclaw-labs/zeroclaw/issues/9496) and [#9530](https://github.com/zeroclaw-labs/zeroclaw/issues/9530) — RFC-process streamlining, both awaiting maintainer review.
- **PRs stuck on `needs-author-action` (17 total)** — including security-critical ones: [#8826](https://github.com/zeroclaw-labs/zeroclaw/pull/8826) (SSRF), [#9435](https://github.com/zeroclaw-labs/zeroclaw/pull/9435) (Gemini key leak), [#9438](https://github.com/zeroclaw-labs/zeroclaw/pull/9438) (pair lockout bypass), as well as large features [#9324](https://github.com/zeroclaw-labs/zeroclaw/pull/9324) (A2A), [#9352](https://github.com/zeroclaw-labs/zeroclaw/pull/9352) (OTel), [#9182](https://github.com/zeroclaw-labs/zeroclaw/pull/9182) (PowerShell), and [#9420](https://github.com/zeroclaw-labs/zeroclaw/pull/9420) (Anthropic OAuth). Author-response latency is currently the tightest constraint on delivery velocity.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/boom7sss/agents-radar).*