# OpenClaw Ecosystem Digest 2026-07-26

> Issues: 349 | PRs: 500 | Projects covered: 13 | Generated: 2026-07-26 03:34 UTC

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

# OpenClaw Project Digest — 2026-07-26

## 1. Today’s Overview

Project activity remains extremely high: **349 issues** and **500 pull requests** were updated in the last 24 hours. Of the issues, 250 are still open/active and 99 were closed; on the PR side, 220 were merged or closed while 280 remain open. This signals a healthy pace of both bug fixing and feature development, though the volume of open items (especially high-severity bugs) suggests the release train may need stability focus. Three **P0** (release-blocker) issues are currently open—two related to gateway startup failures and one to upgrade config corruption. Security and session-state issues continue to dominate the most-discussed items. No new releases were tagged today.

## 2. Releases

**None** – No new releases in the last 24 hours. The latest release remains at version 2026.7.1 (and associated betas, e.g., 2026.7.1-beta.5).

## 3. Project Progress

**220 PRs were merged or closed today**, reflecting substantial forward motion. Key highlights from the top commented PRs include:

- **feat(chat): restore prompt image attachments on rewind/fork** ([#113945](https://github.com/openclaw/openclaw/pull/113945)) — fix for a UX regression where images attached to user prompts were silently dropped during session rewind or fork actions.
- **fix(agents): let harness-owned compaction proceed without ambient auth** ([#114001](https://github.com/openclaw/openclaw/pull/114001)) — resolves a crash loop on codex app-server sessions during post-turn compaction.
- **fix(cron): preserve browser tabs between persistent job runs** ([#113984](https://github.com/openclaw/openclaw/pull/113984)) — ensures persistent cron session identities retain browser state across job executions.
- **feat(mac): dashboard gateway picker with in-place switching** ([#113965](https://github.com/openclaw/openclaw/pull/113965)) — adds multi-gateway switching support to the Mac app’s dashboard.
- **fix(cron): pin the cron webhook bearer token to operator-allowlisted hosts** ([#113998](https://github.com/openclaw/openclaw/pull/113998)) — security fix preventing credential leakage to unauthorized cron destinations.
- **fix(clickclack): resolve global discussion owner** ([#113997](https://github.com/openclaw/openclaw/pull/113997)) — resolves an error for global session keys in ClickClack discussions.
- **fix(memory): close previous embedding provider before replacement** ([#113471](https://github.com/openclaw/openclaw/pull/113471)) — prevents orphaned worker processes during embedding provider degradation/fallback.
- **chore(compat): date the annotated deprecation families and expose removal-pending debt** ([#114002](https://github.com/openclaw/openclaw/pull/114002)) — a repo-wide deprecation audit covering 559 `@deprecated` annotations across 189 files.

## 4. Community Hot Topics

The most active discussions (by comment count and reactions) reveal deep user concerns around **security, session state, and memory management**:

- **Memory Trust Tagging by Source** ([#7707](https://github.com/openclaw/openclaw/issues/7707), 21 comments) — Proposes tagging agent memory entries by trust level based on origin (user command vs. web scrape vs. third-party skill). Users are clearly worried about prompt injection and memory poisoning from untrusted content.
- **Channel-mediated approval for MCP tool calls** ([#78308](https://github.com/openclaw/openclaw/issues/78308), 15 comments, 1 👍) — Requests that MCP servers opt into the existing `/approve <id>` pipeline for state-mutating calls. The underlying need: users want a unified consent experience across shell and MCP tools.
- **SQLite snapshot restore lacks end-to-end crash and identity guarantees** ([#113306](https://github.com/openclaw/openclaw/issues/113306), 13 comments) — A freshly filed P1 bug that highlights reliability concerns in the snapshot mechanism. Users expect crash-proof, atomic restore semantics.
- **Gateway fails to start w/ error** ([#108435](https://github.com/openclaw/openclaw/issues/108435), 11 comments, 2 👍) — P0 release-blocker; the gateway doesn’t start after update to 2026.7.1. Strong negative sentiment from multiple affected users.
- **Session context bloat: bootstrap files re-injected every turn** ([#67419](https://github.com/openclaw/openclaw/issues/67419), 10 comments, 2 👍) — Users report 20–30% token waste because MEMORY.md and other bootstraps are re-injected every turn. A clear performance and cost concern.
- **Memory management is in chaos** ([#43747](https://github.com/openclaw/openclaw/issues/43747), 10 comments) — Three colleagues see completely inconsistent memory behavior; a regression that undermines trust in the memory subsystem.

Additional hot items include **Filesystem Sandboxing Config** ([#7722](https://github.com/openclaw/openclaw/issues/7722), 10 comments, 4 👍) and **Dynamic model discovery for OpenRouter** ([#10687](https://github.com/openclaw/openclaw/issues/10687), 10 comments, 3 👍).

## 5. Bugs & Stability

**P0 (Release-blocker):**

- **Gateway fails to start on 2026.7.1** ([#108435](https://github.com/openclaw/openclaw/issues/108435)) — regression; gateway does not start via systemd, Ollama, or manual launch. Multiple users affected. **No linked fix PR yet.**
- **Upgrade 2026.6.8→2026.6.9 corrupts email channel config** ([#95515](https://github.com/openclaw/openclaw/issues/95515), linked PR open) — spurious `groupAllowFrom` field written into `openclaw.json`. **Has linked PR**.
- **Gateway HTTP server listens but does not accept connections (v2026.7.1-beta.5)** ([#109145](https://github.com/openclaw/openclaw/issues/109145)) — socket never accepts TCP connections post-upgrade. **No fix PR visible.**

**P1 (High severity):**

- **SQLite snapshot restore lacks crash & identity guarantees** ([#113306](https://github.com/openclaw/openclaw/issues/113306)) — duplicate fix PR? Not explicitly linked.
- **Agent loop allows simulated tool calls instead of enforcing real invocation** ([#45049](https://github.com/openclaw/openclaw/issues/45049)) — security issue; model hallucinates tool calls.
- **Foreground reply fence cancels delivery of earlier group replies** ([#92186](https://github.com/openclaw/openclaw/issues/92186)) — WhatsApp replies lost when concurrent @mentions occur.
- **Session model pinning persists indefinitely** ([#92776](https://github.com/openclaw/openclaw/issues/92776)) — snap-back probe PR #82676 is defeated by upstream bug.
- **Telegram inbound update permanently lost after offset persistence** ([#113315](https://github.com/openclaw/openclaw/issues/113315)) — acknowledged but never dispatched.
- **Large SQLite transcript cleanup blocks gateway event loop** ([#112423](https://github.com/openclaw/openclaw/issues/112423)) — blocking I/O on main thread.
- **`/new` and `/reset` don’t actually create a new session** ([#113466](https://github.com/openclaw/openclaw/issues/113466)) — only fires hooks, never invokes gateway session creation.
- **MCP loopback auto-reconnect fails after gateway restart** ([#98435](https://github.com/openclaw/openclaw/issues/98435)) — `recovered=1` misleading; CLI loses transport.
- **Gateway heap grows to 1073MB+ at idle** ([#87109](https://github.com/openclaw/openclaw/issues/87109)) — leads to silent cron job failures.
- **Stack-safe large attachment handling** ([#90098](https://github.com/openclaw/openclaw/issues/90098)) — `RangeError` on large PDF uploads. **Linked PR open**.
- **Discord: subsequent message content truncated after inline error** ([#96007](https://github.com/openclaw/openclaw/issues/96007)) — error line suppresses rest of message.

**Notable PRs addressing bugs today:** `#114001` (compaction auth), `#113984` (cron tab persistence), `#113945` (image attachment restore), `#113997` (ClickClack global owner), `#113471` (embedding provider close order), `#113341` (Codex tool allowlist fix), `#113998` (webhook pinning).

## 6. Feature Requests & Roadmap Signals

The most-requested features from the top active issues point toward **security hardening, cost transparency, and better memory management**:

- **Memory Trust Tagging by Source** ([#7707](https://github.com/openclaw/openclaw/issues/7707)) — likely to be considered for the next major release given its security implications and high community interest.
- **Channel-mediated approval for MCP tool calls** ([#78308](https://github.com/openclaw/openclaw/issues/78308)) — aligns with ongoing security work; **next release candidate**.
- **Filesystem Sandboxing Config** ([#7722](https://github.com/openclaw/openclaw/issues/7722)) — already partially prototyped; could ship as a config-only feature soon.
- **Per-spawn tool restrictions for sub-agents** ([#15032](https://github.com/openclaw/openclaw/issues/15032)) — strong use case; likely to be prioritized for DMZ isolation.
- **Expose OpenRouter usage cost to agent runtime** ([#9016](https://github.com/openclaw/openclaw/issues/9016)) — high adoption potential, nice-to-have for next release.
- **Trigger model fallback on context length exceeded** ([#9986](https://github.com/openclaw/openclaw/issues/9986)) — filed in February; may land as part of context management improvements.
- **Per-model generation timeout config** ([#8724](https://github.com/openclaw/openclaw/issues/8724)) — user asking for protection against infinite thinking loops.
- **Skill Permission Manifest Standard** ([#12219](https://github.com/openclaw/openclaw/issues/12219)) — in line with security trend; could become a milestone.
- **Add accessibility config to disable emojis in TUI** ([#9637](https://github.com/openclaw/openclaw/issues/9637)) — low effort, high impact for screenreader users.

Several PRs merged today implement roadmap features: **dashboard gateway picker** (#113965), **per-agent daily model spend alerts** (#113548), **path-based session URLs** (#113883), **headless one-shot agent runner** (#113988), and **Signal chat-based setup** (#112863). These indicate continued investment in multi-platform support and developer experience.

## 7. User Feedback Summary

- **Positive signals:** Users are actively engaging with the project and filing detailed bug reports with reproduction steps and log attachments. The presence of `clawsweeper:source-repro` tags on many issues shows users are investing time in reproducible reports.
- **Pain points:**
  - **Session state inconsistency** — memory management is "in chaos" (#43747), context bloat wastes tokens (#67419), session recovery sometimes fails silently (#75593, #91564).
  - **Security and trust** — users are demanding memory tagging (#7707), filesystem sandboxing (#7722), and tool restrictions (#15032). There is palpable fear of prompt injection and credential theft.
  - **Upgrade regressions** — multiple P0/P1 regressions on the 2026.7 release line (gateway starting, config corruption, session commands broken). This erodes confidence in automatic updates.
  - **Gateway stability** — heap growth to >1GB at idle (#87109), HTTP server not accepting connections (#109145), cron jobs failing silently.
  - **Channel reliability** — Telegram messages lost (#113315, #91564), Discord truncation (#96007), WhatsApp reply fencing (#92186) are causing real delivery failures.
  - **UX friction** — `richMessages` rendering broken (#112906), large attachment uploads crash the browser (#90098), auto-update leaves stale imports (#85844).
- **Satisfaction:** Several issues mention that features “worked before” (regression reports), suggesting base functionality is valued and the project used in production. The high volume of feature requests implies an active, engaged user base that sees potential in the platform.

## 8. Backlog Watch

Several high-value issues have been open for months without maintainer resolution:

- **Session context bloat – bootstrap re-injection every turn** ([#67419](https://github.com/openclaw/openclaw/issues/67419)) — 10 comments, opened April 15. Tagged `clawsweeper:needs-maintainer-review`, `clawsweeper:needs-product-decision`. No movement despite clear performance cost.
- **Memory management in chaos** ([#43747](https://github.com/openclaw/openclaw/issues/43747)) — 10 comments, opened March 12. Regression with three users reporting inconsistent behavior. Still `needs-maintainer-review`.
- **Dynamic model discovery (OpenRouter+)** ([#10687](https://github.com/openclaw/openclaw/issues/10687)) — 10 comments, opened February 6. Static catalog is a known limitation; no decision after 5 months.
- **Filesystem Sandboxing Config** ([#7722](https://github.com/openclaw/openclaw/issues/7722)) — 10 comments, 4 👍, opened February 3. Strong user interest, tagged `needs-product-decision` and `needs-security-review`. Security-critical feature with no visible progress.
- **Per-spawn tool restrictions** ([#15032](https://github.com/openclaw/openclaw/issues/15032)) — 7 comments, opened February 12. Another security feature with no maintainer decision.
- **Add per-agent daily model spend alerts** (PR [#113548](https://github.com/openclaw/openclaw/pull/113548), merged today) — addresses a long-standing request; good sign of backlog clearing.

**PRs needing maintainer attention:**
- **fix(wechat): preserve existing accounts across hot reload** ([#82540](https://github.com/openclaw/openclaw/pull/82540)) — opened May 16, still `needs proof`. WeChat channel is important for some users.
- **fix(control-ui): add tooltips for Reasoning/Thinking dropdowns** ([#90831](https://github.com/openclaw/openclaw/pull/90831)) — opened June 6, stale, `needs-proof`. Small UX improvement.
- **fix: direct dependency pin guard after stylelint adoption** ([#113996](https://github.com/openclaw/openclaw/pull/113996), closed today) — shows CI issues are being addressed.

Overall, the project is moving fast but the backlog of high-severity, security-related issues demands attention to maintain user trust. The next release should prioritize the three P0 blockers and at least a subset of the P1 session-state and security bugs.

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: Personal AI Agent Open-Source Ecosystem
**Date: 2026-07-26**

---

## 1. Ecosystem Overview

The personal AI agent open-source landscape remains highly fragmented yet intensely active, with approximately 12 tracked projects spanning from production-grade reference implementations to experimental niche agents. The ecosystem is converging on several critical themes: **memory reliability, security hardening, multi-channel support, and cost transparency**—all driven by real-world deployment at scale. Activity levels are bifurcated: three projects (OpenClaw, Hermes Agent, ZeroClaw) dominate with 50+ daily PRs each, while five projects show no activity in this window, suggesting consolidation around a few dominant codebases. The most pressing ecosystem-wide concern is **upgrade regression risk**, with multiple P0 blockers across projects sharing root causes in session state management and gateway stability.

---

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Release Status | Health Score | Key Signal |
|---|---|---|---|---|---|
| **OpenClaw** | 349 (250 open) | 500 (280 open) | 2026.7.1 (no new) | ⚠️ **Moderate** | 3 P0 blockers; velocity high but stability risk |
| **Hermes Agent** | 50 (38 open) | 50 (31 open) | None today | ✅ **Good** | P0 SQLite fix merged; active backlog clearance |
| **ZeroClaw** | 19 (16 open) | 50 (48 open) | v0.8.3; v0.8.4 due Jul 31 | ⚠️ **Caution** | S1 WhatsApp bypass; CI 95% flake rate |
| **NanoBot** | 1 (0 open) | 10 (3 open) | **v0.3.0 today** | ✅ **Excellent** | Major release; 38 new contributors |
| **IronClaw** | 11 (8 open) | 19 (11 open) | None today | ✅ **Good** | 8 PRs merged; error recoverability epic |
| **LobsterAI** | 8 (1 open) | 11 (0 open) | None today | ✅ **Good** | Backlog cleanup; 5 user features implemented |
| **NanoClaw** | 2 (2 open) | 11 (10 open) | None today | ✅ **Good** | Security hardening merged; bugs getting fast fixes |
| **CoPaw** | 7 (7 open) | 7 (5 open) | v2.0.1 (no new) | ⚠️ **Moderate** | MCP hardcoded transport bug; 3 duplicates |
| **PicoClaw** | 2 (2 open) | 4 (1 open) | v0.3.1 (no new) | ⚠️ **Moderate** | Matrix reconnection bug open 24 days |
| **Moltis** | 0 | 6 (4 open) | None today | ✅ **Good** | Slack reaction fix; ACP agent mode in review |
| **NullClaw** | 0 | 0 | N/A | 🔴 **Inactive** | No activity |
| **TinyClaw** | 0 | 0 | N/A | 🔴 **Inactive** | No activity |
| **ZeptoClaw** | 0 | 0 | N/A | 🔴 **Inactive** | No activity |

**Health Score Legend:** Excellent (≥95% PRs merged, no P0, release active) | Good (no P0, active maintenance) | Moderate (P0 exist, or bug backlogs) | Caution (security S1, CI broken) | Inactive

---

## 3. OpenClaw's Position

**Advantages over peers:**
- **Community scale**: 349 daily issues and 500 PRs—roughly **7× the activity** of the next busiest project (Hermes/ZeroClaw at ~50 each). This generates unmatched bug discovery, feature velocity, and ecosystem plugins.
- **Reference status**: As the core reference implementation, OpenClaw sets architectural patterns that downstream projects (NanoClaw, PicoClaw, TinyClaw) replicate, creating de facto standards for gateway API, session management, and skill manifests.
- **Integration breadth**: Merged PRs today cover Mac dashboard, Signal chat setup, headless runners, and cron tab persistence—significantly broader platform support than any competitor.

**Technical approach differences:**
- **Monolithic core + plugin periphery**: Unlike ZeroClaw's ambitious "everything is a plugin" microkernel (#6489) or IronClaw's Rust-centric Reborn architecture, OpenClaw keeps a large core with plugin extensions, enabling rapid feature addition but creating tighter coupling—evident in the current P0 gateway startup regressions.
- **Session-as-first-class-citizen**: OpenClaw's session management is more sophisticated than NanoBot (which relies on WebUI state) or Moltis (which delegates to ACP), but this complexity generates the most reported bugs (context bloat #67419, memory chaos #43747).

**Community size comparison:**

| Metric | OpenClaw | Hermes Agent | ZeroClaw |
|---|---|---|---|
| Daily issues updated | 349 | 50 | 19 |
| Daily PRs updated | 500 | 50 | 50 |
| Open issues | 250 | ~38 | ~16 |
| P0 blockers | 3 | 0 (1 fixed today) | 2 (S1 security) |
| Contributors (recent) | Not tracked | 38 new for v0.3.0 | Active core team |

**Risk factor**: OpenClaw's high velocity is producing release-line regressions at a rate that erodes production confidence. The three P0 blockers (gateway startup, config corruption, HTTP accept loop) all represent **broken core paths** that should be caught by integration tests. This is an area where Hermes Agent (despite smaller scale) demonstrates better discipline: its P0 SQLite fix was identified and merged same-day.

---

## 4. Shared Technical Focus Areas

Seven cross-cutting requirements emerge from analyzing all projects' bug reports, feature requests, and PRs:

### 4.1 Memory Management & Trust
| Requirement | Projects Affected | Specific Pain Points |
|---|---|---|
| Memory trust tagging by source | **OpenClaw** (#7707), **PicoClaw** (no explicit issue but Matrix state loss), **NanoClaw** (#3134 agent context gap) | Users want provenance-aware memory to prevent prompt injection from web-scraped content |
| Context deduplication / bloat prevention | **OpenClaw** (#67419, 20-30% token waste), **Hermes Agent** (#10421 turn-level time context to reduce redundant injection) | Bootstrap files re-injected every turn; 20-30% cost waste |
| Consistent session memory behavior | **OpenClaw** (#43747 "in chaos"), **Hermes Agent** (#44028 Feishu broken context) | Three users reporting inconsistent memory behavior across sessions |

### 4.2 Security & Sandboxing
| Requirement | Projects Affected | Specific Pain Points |
|---|---|---|
| Filesystem sandboxing / path restrictions | **OpenClaw** (#7722), **NanoClaw** (#2748 merged cap-drop), **ZeroClaw** (#7821 sandbox policy open) | Users want configurable filesystem access for agent containers |
| MCP tool call approval pipeline | **OpenClaw** (#78308), **Hermes Agent** (unnamed but implied), **CoPaw** (#6470 MCP transport config) | Unified consent experience across shell and MCP tools |
| Credential / secret management | **ZeroClaw** (#9328 verifiable-intent gap, #9194 KeySource trait), **OpenClaw** (#113998 webhook pinning), **Hermes Agent** (#71710 env var resolution) | Secrets leaked via webhooks, unverified credentials, hardcoded API keys |

### 4.3 Channel & Platform Reliability
| Requirement | Projects Affected | Specific Pain Points |
|---|---|---|
| WhatsApp/Telegram message delivery guarantees | **OpenClaw** (#92186 reply fencing, #113315 Telegram loss), **ZeroClaw** (#9348 WhatsApp bypass, #9340 cron output lost) | Messages dropped under concurrent access or after errors |
| Convergence on OpenAI-compatible API | **ZeroClaw** (#8486 gateway endpoint), **PicoClaw** (#3205 9router fix), **Hermes Agent** (implied by MoA work) | Ecosystem tooling expects OpenAI-compatible interfaces |
| Matrix persistent connectivity | **PicoClaw** (#3203, 24 days open), **ZeroClaw** (#8443 Matrix streaming) | Silently dropped /sync loops after network disruption |

### 4.4 Cost & Usage Transparency
| Requirement | Projects Affected | Specific Pain Points |
|---|---|---|
| Per-turn / per-agent cost tracking | **OpenClaw** (#9016 OpenRouter cost, #113548 daily spend alerts merged), **Hermes Agent** (#71242 Anthropic 7× under-reporting), **ZeroClaw** (#9373 peer-agent cost missing) | Users relying on budgets misled by under-reported costs |
| Cache hit rate visibility | **Hermes Agent** (#71576 39% vs 100% hit rate) | Anthropic caches written but never read through Portal |

### 4.5 Developer Experience
| Requirement | Projects Affected | Specific Pain Points |
|---|---|---|
| CI reliability / test flakiness | **ZeroClaw** (#9357 95% failure rate), **Hermes Agent** (#71719 test suite abort), **NanoBot** (#1131 CI coverage closed today) | Broken CI on master reduces contributor confidence |
| Deprecation management | **OpenClaw** (#114002 559 deprecated annotations across 189 files), **Hermes Agent** (#67139 legacy skill adoption) | Breaking changes without migration paths |

### 4.6 Cross-Platform Desktop Parity
| Requirement | Projects Affected | Specific Pain Points |
|---|---|---|
| Windows gateway reliability | **Hermes Agent** (#48434, #71514 desktop boot loops), **LobsterAI** (#2383, #2384 Windows installer fixes) | Windows users face disproportionate connectivity issues |
| Mac multi-gateway switching | **OpenClaw** (#113965 merged dashboard picker) | Only OpenClaw has addressed this natively |

### 4.7 Upgrade Safety
| Requirement | Projects Affected | Specific Pain Points |
|---|---|---|
| Safe config migration across versions | **OpenClaw** (#95515 config corruption on 2026.6.8→6.9), **Hermes Agent** (implied by WAL corruption fix) | Upgrades silently corrupt configuration or database |
| Automatic rollback on gateway failure | **OpenClaw** (#108435, #109145 gateway startup fails), **Hermes Agent** (#71514 readiness loop) | Gateway fails silently after update, requiring manual intervention |

---

## 5. Differentiation Analysis

### 5.1 Feature Focus

| Project | Primary Focus | Target User | Differentiator |
|---|---|---|---|
| **OpenClaw** | Full-featured personal assistant | Power users, enterprise | Broadest platform support, largest plugin ecosystem |
| **Hermes Agent** | Production reliability, data integrity | DevOps, heavy users | SQLite WAL fixes, 63-day uptime reports, cost debugging |
| **ZeroClaw** | Microkernel architecture, channel flexibility | Developers, integrators | Plugin-first design, OpenAI-compatible gateway, Matrix/Telegram streaming |
| **NanoBot** | Quick start, WebUI-first | New users, non-technical | One-command `nanobot webui` launch, 38 new contributors driven by v0.3.0 |
| **IronClaw** | Error recoverability, WebUI performance | Rust ecosystem users | Reborn architecture, 70% JS bundle reduction, signed intents |
| **LobsterAI** | Chat UX polish, Chinese market | Productivity users | 5 user-requested features implemented in one day; Kimi K3 model support |
| **PicoClaw** | Lightweight, resource-constrained devices | Raspberry Pi/ARM users | ARMv7 build target, minimal footprint, Simplex channel addition |
| **NanoClaw** | Container security, operational skills | Security-conscious DevOps | cap-drop/pid limits merged, flight check-in skill, OpenCode integration |
| **CoPaw** | Memory search with reranking | Qwen ecosystem users | Hybrid BM25+vector retrieval + reranker UI, Qwen-specific integration |
| **Moltis** | Interoperability (ACP, Nostr, Buzz) | Multi-platform agent users | ACP agent mode, NIP-29 group chat, Slack Block Kit |

### 5.2 Technical Architecture

| Project | Language | Architecture | Plugin Model | Session Model |
|---|---|---|---|---|
| OpenClaw | TypeScript (?) | Monolithic core + plugins | Plugin catalog | Complex session trees with forks/rewinds |
| Hermes Agent | Python | Modular agent framework | Skill manifests | Flat sessions with versioned snapshots |
| ZeroClaw | Rust | Microkernel "everything is a plugin" | Unified plugin catalog (in progress) | Channel-agnostic sessions |
| NanoBot | TypeScript (?) | WebUI-driven client-server | N/A (bundled) | WebUI state-based |
| IronClaw | Rust | Reborn multi-module | Skill ecosystem | Workspace-based with automations |
| Moltis | Rust | ACP-native agent client | Channel-specific drivers | Delegated to ACP harness |

### 5.3 Ecosystem Position

- **OpenClaw** is the **ecosystem hegemon**—its decisions on session model, skill format, and API design cascade down to NanoClaw, PicoClaw, TinyClaw, and NullClaw. Its P0 blockers are ecosystem-wide risks.
- **Hermes Agent** is the **production-optimized alternative**—its SQLite resilience work and cost debugging tools address the pain points OpenClaw users report but haven't solved.
- **ZeroClaw** is the **architecture innovator**—its microkernel split is high-risk/high-reward; if successful, it could offer superior modularity and channel flexibility.
- **Moltis** and **IronClaw** are **interoperability bridges**—Moltis brings ACP connectivity; IronClaw targets the Rust/WebGPU niche.

---

## 6. Community Momentum & Maturity

### Activity Tiers

| Tier | Projects | Characteristics |
|---|---|---|
| **Tier 1: Hyperactive (50+ daily PRs)** | OpenClaw (500), Hermes Agent (50), ZeroClaw (50) | Rapid iteration but stability challenges; production users exist |
| **Tier 2: High Activity (10-20 daily PRs)** | IronClaw (19), NanoClaw (11), LobsterAI (11), NanoBot (10) | Focused development; active feature delivery within scope |
| **Tier 3: Moderate (4-7 daily PRs)** | CoPaw (7), Moltis (6), PicoClaw (4) | Niche focus; slower but deliberate pacing |
| **Tier 4: Dormant** | NullClaw, TinyClaw, ZeptoClaw | No activity in 24 hours |

### Velocity vs. Stability Trade-off

- **NanoBot** shows the healthiest trajectory: a major release (v0.3.0) with 38 new contributors, then immediate cleanup (compatibility deferred to v0.3.1, CI added in #1284). This "release then stabilize" pattern is ideal.
- **OpenClaw** exhibits the worst **velocity-stability imbalance**: 500 daily PRs with 3 P0 blockers and high-severity regressions across the 2026.7 release line. The project needs a **stabilization sprint**—ideally freezing new features and merging only bug fixes until the three P0 blockers are resolved.
- **ZeroClaw** has a **security crisis** (S1 WhatsApp bypass) compounded by CI instability (95% flake rate). The v0.8.4 release train (#8357) due July 31 must prioritize these over feature PRs.
- **Hermes Agent** demonstrates **disciplined triage**: the P0 SQLite fix was merged the same day it was reported, and the Kanban DB corruption issue (#34385) has been open 58 days but is actively labeled. This suggests good maintainer bandwidth relative to issue volume.

### Maturity Indicators

| Indicator | Leaders | Lagging |
|---|---|---|
| Release cadence | NanoBot (v0.3.0 today), ZeroClaw (v0.8.4 planned) | OpenClaw (no release today despite 500 PRs), Moltis, CoPaw |
| CI reliability | NanoBot (#1284 merged), LobsterAI (stable) | ZeroClaw (#9357 95% failure) |
| Bug fix turnaround | Hermes Agent (P0 fixed same-day), NanoClaw (fix PRs submitted same-day as bugs) | PicoClaw (Matrix bug open 24 days), OpenClaw (P0s linger) |
| Security vulnerability handling | ZeroClaw (#9328 acknowledged, #9348 warning PR open) | OpenClaw (memory tagging #7707 open since February) |

---

## 7. Trend Signals

### 7.1 Security is the #1 Ecosystem Concern

Across six projects, users are demanding:
- **Memory trust tagging**: Provenance awareness for agent memory (OpenClaw #7707, PicoClaw interactions)
- **Credential vaulting**: First-class secrets management (ZeroClaw #9194 KeySource)
- **Sandboxing defaults**: Containers dropping all capabilities by default (NanoClaw #2748 merged)
- **Tool call visibility**: Users want to know which tools are called, by whom, and with what permissions (NanoClaw #2211 tool-visibility skill, OpenClaw #78308 MCP approval)

**Signal for developers**: Security features are no longer "nice-to-have"—they are table stakes for production deployment. Projects without sandboxing, credential management, or memory provenance will lose enterprise adoption.

### 7.2 Cost Transparency is a Growing Pain Point

- Hermes Agent users are manually verifying API cost reports (#71242, #71576) and finding 2-7× discrepancies.
- OpenClaw users want per-agent daily spend alerts (#113548, merged) and OpenRouter cost exposure (#9016).
- ZeroClaw users lack peer-agent cost tracking entirely (#9373).

**Signal for developers**: The next battleground is **cost observability**. Users running agents at scale need granular, real-time cost attribution to make model selection decisions. Projects that integrate with provider billing APIs and expose per-turn costs will have a competitive advantage.

### 7.3 Cross-Platform Reliability Defines User Satisfaction

- Desktop connectivity issues (Hermes Agent: Windows boot loops; LobsterAI: Windows installer corruption) generate disproportionate user frustration because they block first-time use.
- Channel-specific bugs (WhatsApp bypass, Telegram message loss, Matrix reconnection failure) erode trust in the agent as a reliable communication tool.

**Signal for developers**: Cross-platform testing must extend beyond Linux. Projects that invest in Windows/macOS CI, desktop-specific integration tests, and channel-level reliability guarantees will capture users who need "always on" availability.

### 7.4 Upgrade Safety is Undervalued

The cluster of P0 regressions around OpenClaw's 2026.7 release line (gateway startup, config corruption, HTTP accept loop) mirrors similar patterns in Hermes Agent (SQLite WAL corruption) and ZeroClaw (WhatsApp policy bypass introduced in v0.8.3). **No project has a systematic upgrade safety mechanism**—such as canary releases, automated rollback, or schema versioning with migration testing.

**Signal for developers**: This is the single biggest trust-eroding pattern in the ecosystem. Implementing schema migration tests, upgrade CI pipelines, and automated rollback detection would differentiate a project as "production-ready" in a field where most are "production-experimental."

### 7.5 The "Reference" Trap

OpenClaw's dominance creates a **monoculture risk**. When the reference implementation has three P0 blockers, the entire downstream ecosystem (NanoClaw, PicoClaw, TinyClaw) inherits the instability. Projects that maintain API compatibility while offering alternative architectural approaches—especially around session management, memory persistence, and security—will attract users burned by OpenClaw regressions.

### 7.6 AI-Assisted Development is Becoming an Ecosystem Feature

- ZeroClaw proposes AI-assisted PR pre-review (#9330).
- Moltis integrates with Buzz, an AI workspace tool (NIP-29 support).
- Multiple projects adopt MCP (Model Context Protocol) for tool calling.

**Signal for developers**: The boundary between "AI agent" and "AI development tool" is blurring. Projects that enable agents to participate in the development workflow (code review, PR management, CI debugging) will create deeper engagement loops.

---

## Summary Recommendation for Decision-Makers

| If you value... | Choose... | Key Decision Factor |
|---|---|---|
| **Feature breadth & ecosystem** | OpenClaw | Accept stability risk; monitor P0 blockers before upgrading |
| **Production reliability** | Hermes Agent | Best data integrity guarantees; good cost debugging |
| **Architectural innovation** | ZeroClaw | Wait for v0.8.4; monitor security fixes and CI stability |
| **Quick start & simplicity** | NanoBot | Best onboarding; limited customization |
| **Rust ecosystem & WebGPU** | IronClaw | Best performance for local inference |
| **Security-hardened containers** | NanoClaw | Best container isolation; small community |
| **Chinese market & Qwen models** | CoPaw | Best Qwen integration; limited English documentation |
| **Multi-platform integration** | Moltis | Best ACP/Nostr support; niche community |

**Ecosystem-level risk**: The three most active projects (OpenClaw, Hermes Agent, ZeroClaw) each have critical unresolved issues. No single project is currently "stable and complete." This represents both risk (frequent breaking changes) and opportunity (early adopters shape the direction).

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-07-26

## 1. Today's Overview
The project saw a major milestone with the release of **v0.3.0**, described as “the agent gained agency.” Activity was high: **1 issue was closed** (#1131 – CI test coverage), and **10 pull requests were updated** in the last 24 hours. Of those, **7 were merged/closed** and **3 remain open** for further review. The community is focused on polishing the WebUI, improving documentation, and stabilizing infrastructure after the large release. Overall project health appears strong, with sustained contributor momentum (260 PRs merged for v0.3.0 and 38 new contributors).

## 2. Releases
**v0.3.0** was published (PR [#5081](https://github.com/HKUDS/nanobot/pull/5081)).  
**Key changes:**
- New one‑command launch: `nanobot webui` prepares the local WebUI, starts the gateway, and opens the browser workbench.
- The agent now has full agency – details in the release notes.
- Compatibility cleanup is deferred to v0.3.1 (via PR [#5083](https://github.com/HKUDS/nanobot/pull/5083)), meaning no breaking changes are expected for current users.
- Quick‑start documentation (PR [#5082](https://github.com/HKUDS/nanobot/pull/5082)) was rewritten to recommend `nanobot webui` as the default browser‑first path while preserving `nanobot gateway` and `nanobot` interactive CLI for operators.

No explicit migration steps are needed; runtime behavior remains unchanged from v0.2.x.

## 3. Project Progress
The following PRs were merged/closed today:

| PR | Title | Type |
|----|-------|------|
| [#1284](https://github.com/HKUDS/nanobot/pull/1284) | Add CI workflow with quality checks and coverage | Infrastructure |
| [#5085](https://github.com/HKUDS/nanobot/pull/5085) | feat: open WebUI after fresh desktop install | Feature |
| [#4696](https://github.com/HKUDS/nanobot/pull/4696) | Smooth WebUI streaming with state‑driven viewport motion | Enhancement |
| [#5083](https://github.com/HKUDS/nanobot/pull/5083) | Defer compatibility cleanup to v0.3.1 | Chore |
| [#5082](https://github.com/HKUDS/nanobot/pull/5082) | Clarify WebUI, gateway, and CLI quick starts | Documentation |
| [#4954](https://github.com/HKUDS/nanobot/pull/4954) | fix(webui): keep late subagent turns visible | Bug fix |
| [#5081](https://github.com/HKUDS/nanobot/pull/5081) | chore(release): prepare v0.3.0 | Chore |

These advances indicate a focus on **CI maturity**, **WebUI polish**, **subagent visibility**, and **onboarding clarity**.

## 4. Community Hot Topics
The only issue updated in the last 24 hours is **#1131** (closed), which asked for clarity on CI test coverage. With its closure and the merge of PR [#1284](https://github.com/HKUDS/nanobot/pull/1284) (which adds CI/CD pipeline, quality checks, and coverage tools), that gap is now addressed.

No other issue or PR accumulated comments or reactions in this window, suggesting most discussion happens via the merged PRs themselves.

## 5. Bugs & Stability
No new bugs were reported as issues today. Several fix PRs were either merged or remain open:

- **[#4954](https://github.com/HKUDS/nanobot/pull/4954) (merged)** – Fixes late subagent turns disappearing from WebUI. **Severity: Medium** – visual regression affecting multi‑agent workflows.
- **[#4928](https://github.com/HKUDS/nanobot/pull/4928) (open)** – Fixes heartbeat routing to the last used channel in unified sessions. **Severity: Medium** – could cause missed notifications.
- **[#5084](https://github.com/HKUDS/nanobot/pull/5084) (open)** – Preserves runtime context for pending mid‑turn messages. **Severity: High** – can lead to lost context when messages queue during agent processing.

All three have corresponding fix PRs in progress or already merged.

## 6. Feature Requests & Roadmap Signals
One open feature PR signals near‑term priorities:

- **[#4625](https://github.com/HKUDS/nanobot/pull/4625) (open)** – Adds configurable extra bind roots for the `bwrap` shell sandbox (e.g., exposing `~/.local/bin`). This satisfies a user request for secure but flexible sandboxing.

Based on the v0.3.0 changelog and deferred cleanup, the next version (v0.3.1) is expected to:
- Finish compatibility cleanup (session path migration, maxMessages deprecation, legacy `agent` keys).
- Possibly incorporate the bwrap configurability.

## 7. User Feedback Summary
While explicit user comments are scarce in the last 24 hours, the following insights can be drawn from PRs and the release:

- **Pain point: missing CI coverage** – Issue #1131 was the only user‑raised point and has been resolved.
- **Pain point: subagent results not appearing in WebUI** – Fix merged in #4954.
- **Pain point: unclear quick‑start experience** – Addressed by documentation rewrite (#5082) and the automatic WebUI launch on fresh desktop install (#5085).
- **Satisfaction indicator**: 38 new contributors and 260 PRs in v0.3.0 suggest strong positive reception and community engagement.

## 8. Backlog Watch
No long‑unanswered issues or PRs were identified. The only issue updated in the window was closed. The project appears to be actively triaging and resolving items promptly. The three open PRs (#4928, #5084, #4625) are recent and under active review.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-07-26

## 1. Today's Overview

Project activity is **very high**, with 50 issues and 50 PRs updated in the last 24 hours, including 12 closed issues and 19 merged/closed PRs. The development focus continues to be on **stability and reliability** — today’s highlights include a P0 fix for SQLite lock cancellation (#71724), closure of a critical SQLite WAL corruption bug (#69784), and a fix for desktop gateway boot loops (#71714). The community is active, with several deep-dive reports on scalability limits, session consistency, and caching cost. No new releases were published today, but the number of high-priority fixes landing suggests a release may be imminent.

## 2. Releases

**None** — no new releases were published today.

## 3. Project Progress

Several important bugs and features were closed or merged today:

- **Desktop gateway boot loop** — PR #71714 (closed) fixes the desktop app getting stuck in a 401 readiness probe loop against gated remote gateways.
- **SQLite WAL corruption** — Issue #69784 (closed) documents the bundled SQLite 3.50.4 bug; the fix PR #70200 (open) migrates managed Python to fixed builds.
- **Gemini parallel streaming** — PR #54355 (closed) prevents tool call key collisions during parallel streaming with Gemini models.
- **Link label preservation** — PR #62020 (closed) stops fetched page titles from overwriting author-chosen link text in Desktop and TUI.
- **Skill curator conflict** — Issues #67139 and #67140 (both closed) add a supported adoption path for legacy unmanaged skills and fix the background review write guard.
- **ACP session CWD** — Issue #11515 (closed) aligns tool execution CWD with project context file discovery in ACP mode.
- **Link title resolution** — PR #71716 (open) prevents network-title resolution from replacing deliberately written link text.
- **Env var resolution** — PR #71722 (open) expands `${VAR}` references in gateway model configuration (fixes #71710).

## 4. Community Hot Topics

1. **[#10421 – Feature: Turn-level live time context](https://github.com/NousResearch/hermes-agent/issues/10421)**  
   *Comments: 13 · 👍 9*  
   A highly-upvoted feature request for reliable per-turn awareness of current date/time. Users want agents to know “now” without explicit tool calls.

2. **[#34385 – Kanban DB index corruption](https://github.com/NousResearch/hermes-agent/issues/34385)**  
   *Comments: 6*  
   Long-running discussion about kanban.db corruption under multi-process WAL access. Related to #53819 and #60510 — a cluster of related stability concerns.

3. **[#48434 – Windows Desktop gateway fails after sign-in](https://github.com/NousResearch/hermes-agent/issues/48434)**  
   *Comments: 5 · 👍 1*  
   Windows-specific regression: Desktop remote gateway works for test but fails on “Save and reconnect”. Users report frustration with cross-platform consistency.

4. **[#71514 – Desktop readiness loop on 401](https://github.com/NousResearch/hermes-agent/issues/71514)**  
   *Comments: 5*  
   Desktop spins forever against gated dashboards; root cause identified (no fallback to public /api/status). Fix merged via #71714 today.

5. **[#71242 – Anthropic auxiliary usage shim drops cache tokens](https://github.com/NousResearch/hermes-agent/issues/71242)**  
   *Comments: 4*  
   Cost under-reporting (estimated 7×) for Anthropic models when using Mixture-of-Agents. Users with heavy caching see inaccurate bills.

6. **[#44028 – Feishu quoted reply creates isolated session](https://github.com/NousResearch/hermes-agent/issues/44028)**  
   *Comments: 4*  
   Quoted replies in Feishu DMs break conversation context. Affects a Chinese user base, no fix yet.

7. **[#71576 – Nous Portal cache routing (P0)](https://github.com/NousResearch/hermes-agent/issues/71576)**  
   *Comments: 2*  
   Anthropic caches written but never read through Portal — 39% hit rate vs 100% direct. Major cost impact; no fix PR yet.

## 5. Bugs & Stability

Bugs reported or updated today, ranked by severity:

- **P0**  
  - [#71576](https://github.com/NousResearch/hermes-agent/issues/71576) — Nous Portal fails to apply provider sticky routing for Anthropic → 39% cache hit rate, ~2.3× cost. No fix PR.
  - [#71724](https://github.com/NousResearch/hermes-agent/issues/71724) — `hermes sessions optimize` corrupts state.db due to own POSIX lock cancellation. **Fix PR #71724 open.**

- **P1**  
  - [#69784](https://github.com/NousResearch/hermes-agent/issues/69784) — Bundled SQLite 3.50.4 has WAL-reset corruption bug. **Closed** (fix PR #70200 open).

- **P2**  
  - [#71242](https://github.com/NousResearch/hermes-agent/issues/71242) — Anthropic cost under-report (~7×) due to dropped cache tokens. No fix PR.
  - [#44028](https://github.com/NousResearch/hermes-agent/issues/44028) — Feishu DM quoted reply loses context. No fix PR.
  - [#53819](https://github.com/NousResearch/hermes-agent/issues/53819) — Kanban DB corruption under high concurrent load (per-write serialization needed). No fix PR.
  - [#48434](https://github.com/NousResearch/hermes-agent/issues/48434) — Windows Desktop gateway fails after successful sign-in. No fix PR.
  - [#71514](https://github.com/NousResearch/hermes-agent/issues/71514) — Desktop readiness loop. **Closed** (fix merged via #71714).
  - [#71305](https://github.com/NousResearch/hermes-agent/issues/71305) — Desktop boot loop against self-hosted gateway. **Closed** (fix merged).
  - [#71710](https://github.com/NousResearch/hermes-agent/issues/71710) — `${VAR}` env vars not resolved in gateway model config. Fix PR #71722 open.
  - [#71719](https://github.com/NousResearch/hermes-agent/issues/71719) — Test suite silently aborts (pytest killed by `os._exit()`). No fix PR.

- **P3**  
  - [#60510](https://github.com/NousResearch/hermes-agent/issues/60510) — WAL page-count false torn-extend errors.
  - [#63386](https://github.com/NousResearch/hermes-agent/issues/63386) — state.db FTS index corruption on macOS.
  - [#71243](https://github.com/NousResearch/hermes-agent/issues/71243) — MoA fan-out gives zero UI feedback (reference_timeout default 900s).
  - [#14372](https://github.com/NousResearch/hermes-agent/issues/14372) — Browser tool inherits proxy env vars causing ERR_EMPTY_RESPONSE.

## 6. Feature Requests & Roadmap Signals

Features requested or discussed today that may appear in the next release:

1. **Turn-level live time context** [#10421](https://github.com/NousResearch/hermes-agent/issues/10421) – High demand (👍9). Likely to land soon given simplicity and user need.
2. **Named delegation profiles** [#71727](https://github.com/NousResearch/hermes-agent/issues/71727) – PR #71728 opened today. Prevents incoherent model/endpoint pairs. Strong candidate for next release.
3. **Claude Agent SDK provider** PR [#65982](https://github.com/NousResearch/hermes-agent/pull/65982) – Large feature adding OAuth-based Claude runtime. Tagged as `needs-decision` but active.
4. **Editor auto-submit toggle** [#56485](https://github.com/NousResearch/hermes-agent/pull/56485) – Restores pre-74f0dd6 Ctrl+G behavior. Open PR, likely to be merged.
5. **Mattermost image editing via CLI** [#71707](https://github.com/NousResearch/hermes-agent/pull/71707) – Integrates Higgsfield image edits into Mattermost plugin.
6. **Legacy skill adoption path** [#67139](https://github.com/NousResearch/hermes-agent/issues/67139) – Closed, so already implemented. Enables curator management for unmanaged skills.
7. **Configure indent size in chat** [#41917](https://github.com/NousResearch/hermes-agent/issues/41917) – Small config option, low complexity.

**Roadmap signals:** The project appears to be doubling down on **provider extensibility** (Claude SDK, MoA improvements), **data integrity** (SQLite fixes, lock management), and **user experience** (link labels, editor behavior, time context).

## 7. User Feedback Summary

- **Scale feedback** — Issue [#71418](https://github.com/NousResearch/hermes-agent/issues/71418) from a user who ran Hermes for 63 days (54K sessions, 17.3GB data). Praises the tool but hits hard ceilings (likely database size, session management). Demonstrates genuine production use and long-term satisfaction, but with scaling pain points.
- **Desktop connectivity** – Multiple reports of Windows desktop gateway loops (issues #48434, #71514, #71305, #71491) show frustration with cross-platform reliability. Many fixes landed today, which should improve satisfaction.
- **Cost transparency** – [#71242](https://github.com/NousResearch/hermes-agent/issues/71242) and [#71576](https://github.com/NousResearch/hermes-agent/issues/71576) reveal that users are closely monitoring inference costs and caching effectiveness. The Anthropic cost under-report bug undermines trust in billing.
- **Skill management** – Issues around legacy skills ([#67139](https://github.com/NousResearch/hermes-agent/issues/67139)) and background review conflicts ([#67140](https://github.com/NousResearch/hermes-agent/issues/67140)) show users actively managing custom skills and wanting better tooling.
- **Session consistency** – Feishu quoted reply ([#44028](https://github.com/NousResearch/hermes-agent/issues/44028)) and MoA zero feedback ([#71243](https://github.com/NousResearch/hermes-agent/issues/71243)) highlight that users rely on predictable conversation flows and visual feedback.
- **Overall tone**: Users are engaged, reporting real-world bugs with detailed reproduction steps. The project’s rapid fix turnaround (e.g., #71514 closed same day) is likely appreciated.

## 8. Backlog Watch

Issues and PRs that have been open for an extended period (≥30 days) and may need maintainer attention:

| Issue/PR | Created | Updated | Last Maintainer Activity | Notes |
|---|---|---|---|---|
| [#10421](https://github.com/NousResearch/hermes-agent/issues/10421) – Turn-level time context | 2026-04-15 | 2026-07-26 | No maintainer response | High community demand (👍9). Labeled `P3` despite popularity. |
| [#34385](https://github.com/NousResearch/hermes-agent/issues/34385) – Kanban DB index corruption | 2026-05-29 | 2026-07-26 | Labeled `needs-decision` | No fix PR yet; multiple duplicates. |
| [#25016](https://github.com/NousResearch/hermes-agent/issues/25016) – LSP idle subprocesses never reaped | 2026-05-13 | 2026-07-26 | No response | Accumulates ~200 MB per server in long-lived gateways. |
| [#39245](https://github.com/NousResearch/hermes-agent/issues/39245) – ACP prompt hang after final response | 2026-06-04 | 2026-07-26 | Labeled `needs-decision` | Affects ACP mode usability. |
| [#44028](https://github.com/NousResearch/hermes-agent/issues/44028) – Feishu quoted reply breaks context | 2026-06-11 | 2026-07-26 | No response | Affects Chinese-language users. |
| [#45307](https://github.com/NousResearch/hermes-agent/issues/45307) – `_find_skill` does not resolve category/skill path | 2026-06-13 | 2026-07-26 | No response | Skill lookup regression. |
| [#45674](https://github.com/NousResearch/hermes-agent/issues/45674) – `hermes mcp list` crashes on string entry | 2026-06-13 | 2026-07-26 | No response | Configuration crash. |
| [#54990](https://github.com/NousResearch/hermes-agent/issues/54990) – Desktop profile switch leaves CWD stuck | 2026-06-29 | 2026-07-26 | No response | User-reported workflow hindrance. |
| [#41917](https://github.com/NousResearch/hermes-agent/issues/41917) – Indent size config | 2026-06-08 | 2026-07-26 | No response | Small feature, easy win. |
| [#14372](https://github.com/NousResearch/hermes-agent/issues/14372) – Browser tool inherits proxy env vars | 2026-04-23 | 2026-07-26 | No response | Affects users behind corporate proxies. |

These issues range from feature requests to stability bugs; several have `needs-decision` labels, indicating they are on the maintainer radar but have not yet been prioritized. Given the current high velocity of fixes, addressing the oldest or most upvoted items could further improve community trust.

---

*Digest generated from GitHub data for 2026-07-26. All links are to NousResearch/hermes-agent.*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest – 2026-07-26

## 1. Today’s Overview
The project shows moderate activity on July 26, with 4 pull requests updated and 2 issues opened or updated. Three PRs were closed/merged, including a significant feature addition (email, calendar, system stats) and two bug fixes (fenced code splitting, 9router gateway responses). No new releases were cut. Community engagement remains focused on two open bugs: a critical Matrix reconnection failure and a minor display issue in the `/list models` command. The project is actively merging contributions but may need to prioritize the Matrix stability fix.

## 2. Releases
No new releases today. The latest version remains v0.3.1 (as referenced in Issue #3294). No release notes or migration guides to report.

## 3. Project Progress
Three PRs were closed/merged in the last 24 hours:

- **[PR #3295](https://github.com/sipeed/picoclaw/pull/3295) (closed):** Fixes `SplitMessage` hanging when a fenced-code info string exceeds `maxLen`. Adds regression tests. This resolves a subtle channel message splitting bug.
- **[PR #339](https://github.com/sipeed/picoclaw/pull/339) (closed):** Large feature addition: Google Calendar integration, enhanced Email channel polling, and new developer tools (GitHub, System Stats). Merged after five months of development.
- **[PR #3205](https://github.com/sipeed/picoclaw/pull/3205) (closed, stale):** Fixes parsing of 9router gateway responses (OpenAI-compatible) and adds a Linux ARMv7 build target, enabling PicoClaw on Raspberry Pi 3 B+.

One PR remains open:
- **[PR #3193](https://github.com/sipeed/picoclaw/pull/3193) (open, stale):** Adds a Simplex channel type, extending the list of supported messaging platforms.

## 4. Community Hot Topics
The most active issue this period is:

- **[Issue #3203 – Matrix sync loop reconnection bug](https://github.com/sipeed/picoclaw/issues/3203)** (6 comments, 2 👍). Author weissfl reports that the Matrix `/sync` long-polling loop silently dies after any network disruption or server restart, with no automatic reconnection. The underlying need is **reliable persistent connectivity** for Matrix users, especially those on unstable networks. The lack of reconnection logic forces manual intervention.

Other items have minimal discussion: Issue #3294 (0 comments) and the closed PRs had no public comments.

## 5. Bugs & Stability
Two bugs were logged or updated today:

### High severity – Issue #3203 (Matrix reconnection failure)
- **Description:** Matrix `/sync` loop dies silently after network/server disruption. Main process stays alive, so systemd `Restart=on-failure` does not help.
- **Status:** Open since July 2, updated July 25. No fix PR yet.
- **Impact:** All Matrix users can lose connectivity without warning.

### Low severity – Issue #3294 (`/list models` shows only current model)
- **Description:** Running `/list models` in Telegram only displays the active model and provider, not all configured models.
- **Status:** Open, filed July 25, no comments.
- **Impact:** User confusion; the command name implies a full list.

### Notable fix merged
PR #3295 (Fix `SplitMessage` hang on oversized fence headers) addresses a similar message-splitting hang bug that could cause channel blocking. This is a stability improvement.

## 6. Feature Requests & Roadmap Signals
User-contributed features indicate interest in:

- **New channel types:** PR #3193 (Simplex) suggests demand for privacy‑focused or decentralized messaging backends.
- **Integration tools:** PR #339 (Calendar, Email, GitHub, System Stats) points toward a more versatile AI assistant capable of managing schedules and developer workflows.
- **Broader hardware support:** PR #3205 (ARMv7 build) shows desire to run PicoClaw on Raspberry Pi and similar low‑power devices.

The next minor release (v0.3.2 or v0.4.0) is likely to include the Simplex channel and the ARMv7 build target, assuming the Matrix reconnection bug is also addressed.

## 7. User Feedback Summary
- **Pain point:** Matrix users (Issue #3203) are frustrated by silent disconnections that require manual restarts. The workaround of using systemd auto-restart fails because the process does not exit.
- **Confusion:** The `/list models` command (Issue #3294) does not match its name, leading to a minor but clear UX issue.
- **Satisfaction with fixes:** The quick closure of PR #3295 (fence header hang) and PR #3205 (Raspberry Pi support) indicates that contributors value reliability and platform inclusivity.

## 8. Backlog Watch
- **[Issue #3203 – Matrix reconnection logic](https://github.com/sipeed/picoclaw/issues/3203)** (open 24 days, 6 comments, 2 👍). No maintainer comment or assignee. This is the most critical open issue and needs prioritization to prevent further user frustration.
- **[PR #3193 – Simplex channel](https://github.com/sipeed/picoclaw/pull/3193)** (open 29 days, last update July 25). No maintainer review or merge. As a feature PR, it may be waiting for code review or testing. Stale label applied; could be closed if not progressing.

Both items risk becoming outdated if maintainer attention is not directed soon.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-07-26

## 1. Today’s Overview
NanoClaw saw a surge in development activity over the past 24 hours, with 11 pull requests updated and 2 new issues filed — both describing concrete bugs. One PR (the long‑running security hardening initiative) was merged, moving the project closer to a more resilient container runtime. No new releases were cut, but the high volume of open fixes and features indicates the team is preparing for a milestone. Overall project health appears strong, with focused work on correctness (agent context, poll‑loop gating) and security (mount‑path blocking, image‑tag validation).

## 2. Releases
No new releases were published today. (Last release data not provided.)

## 3. Project Progress
**Merged / Closed PRs (1):**
- [#2748: security: harden agent containers (cap-drop, no-new-privileges, pids-limit)](https://github.com/nanocoai/nanoclaw/pull/2748) — **merged/closed**. This PR enforces `--cap-drop=ALL`, `--security-opt no-new-privileges:true`, and `--pids-limit 2048` on per‑session agent containers, adding defense‑in‑depth against container escape or fork‑bomb attacks. Defaults are overridable per agent group.

Other open PRs advanced (see below), but no additional merges were recorded today.

## 4. Community Hot Topics
No issues or PRs received comments or reactions in the last 24 hours, making it difficult to gauge community sentiment quantitatively. However, the following items stand out due to their scope, age, or developer attention:

- [#2211: feat: add tool‑visibility skill for live tool‑call previews](https://github.com/nanocoai/nanoclaw/pull/2211) — open since May, resynced on July 25 with three months of production use. This PR adds Pre‑/Post‑ToolUse hooks to surface live tool calls in the chat. Its longevity and ongoing updates suggest strong underlying demand for runtime observability.
- [#3134: Messages the host sends on an agent's behalf are absent from that agent's context](https://github.com/nanocoai/nanoclaw/issue/3134) — filed today, with a companion fix PR (#3135) already open. The issue directly affects agent memory consistency when the host sends approval cards or registration notices.
- [#3122: fix(opencode): main compatibility, custom‑endpoint transport, memory parity](https://github.com/nanocoai/nanoclaw/pull/3122) — a multi‑fix PR for the OpenCode integration, indicating community interest in third‑party platform support.

## 5. Bugs & Stability
Two new bugs were reported today, both with corresponding fix PRs already submitted:

| Issue | Severity | Summary | Fix PR |
|-------|----------|---------|--------|
| [#3134](https://github.com/nanocoai/nanoclaw/issue/3134) | **High** – Host‑sent messages (approvals, reject prompts, registration notices) are never recorded in the agent’s context, breaking conversational memory. | Agent cannot see messages the host sends on its behalf. | [#3135](https://github.com/nanocoai/nanoclaw/pull/3135): “mirror host‑sent messages into the agent’s context” |
| [#3132](https://github.com/nanocoai/nanoclaw/issue/3132) | **Medium** – Follow‑up polls push messages with `trigger=0` into an active query, bypassing the accumulate gate. | Poll‑loop has two message‑consumption paths; only the outer batch loop respects the `trigger` flag. | [#3133](https://github.com/nanocoai/nanoclaw/pull/3133): “gate the follow‑up poll on trigger=1 too” |

Additionally, three other bug‑fix PRs are open:
- [#3127: fix(host): sanitize inbox attachment paths](https://github.com/nanocoai/nanoclaw/pull/3127) — ensures attachment file names only use safe characters (PR follows guidelines).
- [#3124: fix: report unavailable MCP servers](https://github.com/nanocoai/nanoclaw/pull/3124) — surfaces MCP server failures to the user instead of silently failing.
- [#3130: db: validate container_configs.image_tag at the write seam](https://github.com/nanocoai/nanoclaw/pull/3130) — prevents writing arbitrary, unvalidated image tags into the database.

No crashes or regressions were reported.

## 6. Feature Requests & Roadmap Signals
No standalone feature requests were filed today, but the following PRs point to likely roadmap prioritisation:

- **Tool‑visibility skill** (#2211) — has been running on a production fork for three months; strong candidate for inclusion in the next release as a first‑class skill.
- **Flight check‑in skill** (#3128) — a new container skill that automates airline check‑in via Puppeteer/Playwright. Shows growing ecosystem of operational skills.
- **OpenCode compatibility** (#3122) — fixes main‑branch compatibility, custom‑endpoint transport, and memory parity, suggesting the team is investing in multi‑channel support.

Given the emphasis on bug fixes and security today, the next minor release will likely bundle the two critical context/poll‑loop fixes (#3135, #3133) and the security hardening (#2748), alongside one or both skill additions (#2211, #3128).

## 7. User Feedback Summary
While no explicit user comments exist in the data, the issues and PRs themselves reveal recurring pain points:

- **Agent memory inconsistency** — users (or developers) discovered that agents are unaware of host‑generated messages, undermining trust in conversational continuity.
- **Poll‑loop unpredictability** — the accumulate gate being bypassed could cause unintended message injection, leading to confusing agent behaviour.
- **Path‑cleaning gaps** — inbox attachments with unsafe characters (e.g., spaces, shell metacharacters) could cause errors or injection risks; fix PR #3127 addresses this.
- **Silent MCP server failures** — users reported MCP servers being unavailable without any feedback to the agent or user; #3124 aims to surface these failures.

Satisfaction indicators: the community is actively contributing PRs (11 updated today), and a production‑proven skill (#2211) is being upstreamed. The merged security PR (#2748) shows maintainer responsiveness to defence‑in‑depth concerns.

## 8. Backlog Watch
- [#2211: tool‑visibility skill](https://github.com/nanocoai/nanoclaw/pull/2211) — open since 2026‑05‑03 (almost 3 months). Despite being resynced recently, it has not been merged. This is the oldest open PR with significant community use. Maintainer attention needed to decide on inclusion or request changes.
- [#3122: opencode compatibility](https://github.com/nanocoai/nanoclaw/pull/3122) — open since 2026‑07‑23, no comments from maintainers yet. Though only a few days old, it touches core source code and may require a timely review.
- No other issues or PRs have remained unanswered for an extended period without updates. The new bugs (#3134, #3132) already have fix PRs, which is a healthy sign.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest – 2026-07-26

## 1. Today's Overview
IronClaw saw **high activity** over the past 24 hours, with **11 issues** and **19 pull requests** updated. Eight PRs were merged or closed, advancing WebUI accessibility, performance, and state management, while the Reborn architecture received consolidation and new conformance tests. The error recoverability epic (#6284) continues to drive structural testing, and three new user-facing integration gaps were reported for Telegram, Slack, and GitHub PAT handling. No new releases were published.

## 2. Releases
*No new releases this period.*

## 3. Project Progress – Merged/Closed PRs (8 total)
- **#6669** – Move extension host ownership out of composition (Reborn modules restructured)  
- **#6680** – Fix WebUI workspace tree state preservation across root navigation  
- **#6670** – Consolidate Reborn guidance and remove stale architectural plans  
- **#6624** – Trap and restore keyboard focus in extension configuration modal (accessibility fix)  
- **#6632** – Add route-level code splitting, reducing initial JS payload from 1,227 kB to 377 kB (gzip 348→116 kB)  
- **#6627** – Preserve active run state when cancellation fails (frontend/backend consistency)  
- **#6626** – Preserve automation list during filter changes (eliminates loading skeleton flash)  
- **#6673** – Add production struct dead-code ratchet (architecture test)

These changes improve **WebUI performance**, **error state handling**, **accessibility**, and **code health**.

## 4. Community Hot Topics
- **#6284** – “EPIC: Error-recoverability endgame” (6 comments, most active)  
  The model must recover from 100% of errors. This epic drives new testing infrastructure and conformance matrices.  
  [Issue #6284](https://github.com/nearai/ironclaw/issues/6284)

- **#6675** – “Centralize Shared Rust Dependencies” (2 👍, zero comments)  
  Proposes using `[workspace.dependencies]` to eliminate duplicate version declarations. Quick community support signals strong desire for maintainability.  
  [Issue #6675](https://github.com/nearai/ironclaw/issues/6675)

- **#6672** – “Signed intent + per-agent key lifecycle” (open PR, Phase B of attested-signing)  
  Cryptographic attestation feature with high architectural impact.  
  [PR #6672](https://github.com/nearai/ironclaw/pull/6672)

## 5. Bugs & Stability
Three user-facing bugs reported today (all **high severity** for UX/security):

| Bug | Issue | Severity | Fix Exists? |
|-----|-------|----------|-------------|
| GitHub PAT rejection silently loops auth prompt | [#6667](https://github.com/nearai/ironclaw/issues/6667) | **Critical** – user cannot recognize invalid token; repeated prompts | No |
| Telegram setup dead-ends on "admin must configure" | [#6671](https://github.com/nearai/ironclaw/issues/6671) | **High** – blocks integration path for non-admin users | No |
| Agent doesn't guide users to connect Slack | [#6668](https://github.com/nearai/ironclaw/issues/6668) | **Medium** – guidance gap, but workaround exists | No |

Previously reported bugs that were fixed in this period:
- Focus trap in extension modal (#6621 → fixed by PR #6624)
- Automation loading flash (#6622 → fixed by PR #6626)
- Failed cancellation resets chat state (#6620 → fixed by PR #6627)

A daily failure taxonomy (#6676) also documents model shortfalls in clawbench (DeepSeek-v4-flash driving health).

## 6. Feature Requests & Roadmap Signals
- **Error recoverability** (#6284) – epic driving new conformance matrices and mutation testing (see PRs #6674, #6677, #6681)  
- **WebUI bundle optimization** (#6628) – already partially delivered via route-level code splitting (#6632, now merged)  
- **Centralized Rust dependencies** (#6675) – strong community support; likely to land in next release  
- **Attested signing Phase B** (#6672) – per-agent key lifecycle and signed intents; part of Ledger revival plan  
- **Integration guidance improvements** (#6671, #6668) – usability gaps that may be addressed in v1 launch checklist

Likely next version includes: dependency centralization, additional recoverability tests, and the signed-intent feature.

## 7. User Feedback Summary
Real pain points surfaced from issues:
- **GitHub PAT rejection**: silent retry loop erodes trust; users need immediate error feedback  
- **Telegram & Slack setup**: discoverability is poor; agent does not recognize or guide users to existing capabilities  
- **WebUI automation filtering**: full loading flash on filter change was disruptive (now fixed)  
- **Cancellation failure**: chat showing idle while backend still running caused confusion (now fixed)  
- **Extension modal focus**: keyboard users trapped behind modal (now fixed)

Overall satisfaction is tempered by integration friction, but the rapid fixes this period show responsive maintainers.

## 8. Backlog Watch
- **PR #5598** – Release PR (chore) open since **July 3**, updated today. Blocks version bump for `ironclaw_common` (0.5.0) and `ironclaw_skills` (0.4.0). Stale for 23 days; needs review/merge.  
  [PR #5598](https://github.com/nearai/ironclaw/pull/5598)

- **PR #6640** – Dependabot bulk update (31 dependency bumps) open since July 24. Low risk but large diff; could benefit from selective merge.  
  [PR #6640](https://github.com/nearai/ironclaw/pull/6640)

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

Here is the LobsterAI project digest for 2026-07-26, generated from the provided GitHub activity data.

---

## LobsterAI Project Digest: 2026-07-26

### 1. Today's Overview

Today was a period of high maintenance and cleanup activity for LobsterAI. A total of 8 issues and 11 pull requests were closed or merged, reflecting focused effort on addressing a backlog of feature requests and bug fixes. Despite a high volume of merged PRs (11) and no new releases, the project appears healthy, with maintainers actively resolving older items. The community remains engaged, primarily through detailed feature proposals, though no new critical bugs were introduced in the last 24 hours.

### 2. Releases

No new releases were published in the last 24 hours.

### 3. Project Progress

A total of 11 pull requests were merged or closed today, representing significant progress in both core functionality and developer experience. Key advancements include:

- **Core User Experience (Cowork):**
    - **Batch Tool Control:** Implemented a "Expand All / Collapse All" button for tool calls in cowork sessions ([PR #1327](https://github.com/netease-youdao/LobsterAI/pull/1327)). This directly addresses a major user-reported friction point.
    - **Session List Grouping:** Added time-based grouping (Today, Yesterday, This Week, Earlier) to the side panel for better navigation of many sessions ([PR #1338](https://github.com/netease-youdao/LobsterAI/pull/1338)).
    - **Error State Indicators:** Introduced a visual red dot indicator for sessions in an `error` state in the sidebar ([PR #1331](https://github.com/netease-youdao/LobsterAI/pull/1331)).
    - **Message Timestamps:** Added a timestamp (HH:MM format) to user message bubbles ([PR #1340](https://github.com/netease-youdao/LobsterAI/pull/1340)).
    - **Input History Navigation:** Added support for Up/Down arrow keys to cycle through previously sent messages in the input box ([PR #1342](https://github.com/netease-youdao/LobsterAI/pull/1342)).

- **Platform & Build Stability:**
    - **Windows Installer Hardening:** Two PRs focused on fixing Windows installation and update recovery, including addressing "foreign content protection" issues ([PR #2383](https://github.com/netease-youdao/LobsterAI/pull/2383), [PR #2384](https://github.com/netease-youdao/LobsterAI/pull/2384)).

- **New Integrations & Features:**
    - **Kimi K3 Model Support:** Added support for the Kimi K3 model ([PR #2381](https://github.com/netease-youdao/LobsterAI/pull/2381)).
    - **Workdays Schedule Option:** Added a "Workdays (Mon-Fri)" option to scheduled tasks ([PR #1335](https://github.com/netease-youdao/LobsterAI/pull/1335)).
    - **MCP JSON Import:** Added a JSON import mode for custom MCP server configurations ([PR #1336](https://github.com/netease-youdao/LobsterAI/pull/1336)).

- **Internationalization & UX Fixes:**
    - Fixed i18n labels for attachment files and improved the "Escape to close" and "delete guard" UX ([PR #1333](https://github.com/netease-youdao/LobsterAI/pull/1333)).

### 4. Community Hot Topics

The most engaging topic recently has been the request for **batch tool call management** ([Issue #1326](https://github.com/netease-youdao/LobsterAI/issues/1326) | 2 comments). This issue, along with its implemented PR [#1327](https://github.com/netease-youdao/LobsterAI/pull/1327), generated discussion about the complexity of AI sessions with multiple parallel tool calls. The underlying need is for user efficiency and reducing UI friction during complex agent interactions.

Another active area is the new, open issue about attaching folders in the dialog ([Issue #2385](https://github.com/netease-youdao/LobsterAI/issues/2385) | 1 comment). While new, it signals a growing user expectation to match the capabilities of competing AI assistants, reflecting a demand for more sophisticated file management workflows.

### 5. Bugs & Stability

No new regressions or critical bugs were reported in the last 24 hours. The primary stability work involved hardening the Windows installer:

- **High Severity:** Fixes for Windows install root foreign content protection ([PR #2383](https://github.com/netease-youdao/LobsterAI/pull/2383)) and installer/update recovery ([PR #2384](https://github.com/netease-youdao/LobsterAI/pull/2384)) suggest past issues with installations failing or being corrupted on Windows. These fixes are crucial for onboarding new users on that platform.
- **Medium Severity:** An older bug where scheduled task notification channels had no options available ([Issue #1329](https://github.com/netease-youdao/LobsterAI/issues/1329) | Closed) was resolved. A fix for i18n attachment labels was also merged ([PR #1333](https://github.com/netease-youdao/LobsterAI/pull/1333)), indicating a continuous effort to polish UI details.

### 6. Feature Requests & Roadmap Signals

Five feature requests from a single user were all implemented and closed today, indicating strong alignment between user needs and the project roadmap.

**Recently Implemented:**
- Batch tool call control ([Issue #1326](https://github.com/netease-youdao/LobsterAI/issues/1326))
- Error state red badges on sessions ([Issue #1330](https://github.com/netease-youdao/LobsterAI/issues/1330))
- Time-based session list grouping ([Issue #1337](https://github.com/netease-youdao/LobsterAI/issues/1337))
- Message timestamps ([Issue #1339](https://github.com/netease-youdao/LobsterAI/issues/1339))
- Up/Down arrow key input history ([Issue #1341](https://github.com/netease-youdao/LobsterAI/issues/1341))

**Likely in Next Version:**
Several other feature requests from the backlog, addressing **full-text search** ([Issue #1343](https://github.com/netease-youdao/LobsterAI/issues/1343)) and **Markdown export** ([Issue #1345](https://github.com/netease-youdao/LobsterAI/issues/1345)), were closed today without a corresponding PR. While they resolved the issues, the features themselves were not merged in this period. This suggests they may be deprioritized or deferred from this sprint, but the fact they were explicitly considered and the issues closed indicates they remain on the long-term roadmap.

### 7. User Feedback Summary

User feedback this period was almost entirely composed of formal feature requests from a single, highly engaged user (MaoQianTu). The pain points expressed are clear:

- **Inefficiency in Complex Workflows:** Users find it tedious to manage multiple tool calls, navigate long sessions without timestamps or visual error states, and repeatedly type similar prompts.
- **Information Retrieval:** Users need better ways to find historical conversations, either via full-text search or by organizing the session list.
- **Data Portability:** Users want to export their conversations for use outside the application (e.g., Markdown for notes or editing).
- **Matching Competitor UX:** The request to attach folders ([Issue #2385](https://github.com/netease-youdao/LobsterAI/issues/2385)) shows users expect feature parity with other major AI assistants.

Overall, the feedback signals a user base that is technically proficient, uses the tool for serious work, and values efficiency, organization, and data accessibility.

### 8. Backlog Watch

There is one immediately important issue requiring maintainer attention:

- **[OPEN] Issue #2385**: [Dialog can only add files, not folders](https://github.com/netease-youdao/LobsterAI/issues/2385) (Updated: 2026-07-25, 1 comment). This is the only open issue from the last 24 hours. It is a direct user request for a feature that is common in competitor tools. No maintainer has responded yet, so a prompt acknowledgment or plan for this feature would be beneficial for community engagement.

All other issues and PRs from the backlog were closed today, so there is no further long-unanswered items demanding attention.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest – 2026-07-26

## 1. Today's Overview
Activity remained moderate with **6 pull requests updated** in the last 24 hours, of which **2 were merged/closed** and **4 remain open**. No new issues or releases were filed. The project continues to focus on expanding agent connectivity (ACP), platform integrations (Slack, Nostr), and memory backends. The two merged PRs close out a documentation policy and a Slack acknowledgment feature, while the open PRs indicate ongoing work toward ACP agent mode, NIP‑29 group chat support, and an experimental vector database backend.

## 2. Releases
None.

## 3. Project Progress
**Merged/closed PRs today:**

- **[#1165 – feat(slack): acknowledge messages with reactions and add reaction triggers](https://github.com/moltis-org/moltis/pull/1165)**  
  *Author: penso | Closed 2026-07-25*  
  Adds Slack acknowledgment reactions (since Slack bots cannot show typing indicators) and inbound reaction triggers. Also fixes a bug in threaded replies that was sending messages to the wrong thread. This gives users a visible “I got it” signal and improves reply correctness.

- **[#1167 – docs: forbid Claude session URLs in commits and PRs](https://github.com/moltis-org/moltis/pull/1167)**  
  *Author: penso | Closed 2026-07-25*  
  A documentation-only change that extends the git‑workflow rules in `CLAUDE.md` to explicitly disallow AI‑assistant session links (`Claude-Session:` URLs) in commit messages and PR descriptions.

## 4. Community Hot Topics
No issues or PRs had comments or reactions recorded in the last 24 hours, so there are no active community discussions to highlight. The project appears to have a relatively quiet external engagement day.

## 5. Bugs & Stability
No new bug reports were filed today. However, the merged PR **#1165** fixes a **confirmed wrong‑message bug** in threaded Slack replies, which is a moderate‑severity reliability issue affecting users of Slack threads. No other regressions or crashes were mentioned.

## 6. Feature Requests & Roadmap Signals
The open PRs reveal strong signals for the upcoming feature set:

- **[#1169 – feat(acp): expose Moltis as an ACP agent over stdio](https://github.com/moltis-org/moltis/pull/1169)**  
  *Author: penso*  
  Would allow external ACP harnesses (e.g., Zed, `buzz-acp`) to use Moltis as an agent, not just as a client. This closes a major interoperability gap.

- **[#1168 – feat(nostr): add NIP-29 group chat support for Buzz channels](https://github.com/moltis-org/moltis/pull/1168)**  
  *Author: penso*  
  Adds Nostr NIP‑29 group chat support for [Buzz](https://github.com/block/buzz), Block’s open‑source AI workspace, enabling Moltis agents to participate in team channels as equal members.

- **[#1166 – feat(slack): per-message acknowledgment reactions, phases, reconnect supervision, and Block Kit](https://github.com/moltis-org/moltis/pull/1166)**  
  *Author: penso*  
  Builds on #1165 to add phase feedback, Block Kit rendering, and reconnect supervision – a production‑grade Slack integration.

- **[#1158 – feat(memory): add zvec vector database memory backend](https://github.com/moltis-org/moltis/pull/1158)**  
  *Author: demyanrogozhin*  
  An experimental memory backend using Zvec and redb, gated behind a Cargo feature. This could become an alternative to the default memory store, especially for users with a local embedding server.

These features are likely candidates for the next minor release, though only #1166 and #1158 were opened more than a day ago.

## 7. User Feedback Summary
No direct user feedback was captured today. However, the content of the Slack PRs (#1165, #1166) directly addresses a common user pain point: **Slack bots cannot show typing indicators**, so users had no confirmation that a message was received and being processed. The addition of acknowledgment reactions explicitly solves that. Similarly, the Nostr PR (#1168) responds to the need for Moltis agents to work inside Buzz, a real‑world open‑source workspace where humans and AI collaborate.

## 8. Backlog Watch
No long‑unanswered issues or PRs were identified in the provided data. The oldest open PR is **#1158** (created July 17, 2026, last updated July 25, 2026) which has no comments from maintainers or reviewers, suggesting it may be awaiting review or additional discussion. It remains in open status with no visible feedback.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-07-26

## Today's Overview
Today the project shows moderate activity with 7 issues and 7 pull requests receiving updates in the last 24 hours. No new releases were published. The community is actively reporting bugs, particularly around MCP transport configuration, high CPU usage, and model connectivity. Two PRs from the reranker feature series were merged, while several other feature and CI improvements remain under review. Overall health is stable but with a concentration of unresolved bugs that may require maintainer attention.

## Releases
None.

## Project Progress
Two pull requests were closed/merged today, both from the same author and both advancing the reranker integration for memory search:
- **PR #5691** (closed) — *feat(console): add reranker config UI for reme0.4 memory search* — Adds a collapsible “Search Result Reranker” section in the ReMeLightMemoryCard component, enabling users to configure model name, base URL, API key, and temperature from the Web UI. Full i18n (zh/en) included.  
  [https://github.com/agentscope-ai/QwenPaw/pull/5691](https://github.com/agentscope-ai/QwenPaw/pull/5691)
- **PR #5692** (closed, under review) — *feat(memory): add reranker for search results on reme0.4* — Implements a post-retrieval reranking stage after BM25 + vector hybrid retrieval, using a dedicated reranker API to re-order initial top-K results.  
  [https://github.com/agentscope-ai/QwenPaw/pull/5692](https://github.com/agentscope-ai/QwenPaw/pull/5692)

These two PRs together complete a significant feature: visual configuration and backend support for reranking in memory search, likely to be included in a future release.

## Community Hot Topics
The most engaged issues today are:
- **Issue #6470** (2 comments) — *[Bug]: MCP driver ignoring transport config — hardcoded SSE client breaks streamable_http servers* — Reported by JohnyLe. The user describes that the MCP driver hardcodes `sse_client` instead of reading the `transport: streamable_http` from YAML config, causing connection failures.  
  [https://github.com/agentscope-ai/QwenPaw/issues/6470](https://github.com/agentscope-ai/QwenPaw/issues/6470)
- **Issue #6460** (2 comments) — *QwenPaw 2.0.1 首页/会话在 Edge+Wayland 下单标签高 CPU 占用* — High CPU usage on Edge under Wayland, triggered by large result sets and WebSocket pushes.  
  [https://github.com/agentscope-ai/QwenPaw/issues/6460](https://github.com/agentscope-ai/QwenPaw/issues/6460)

Two additional issues (#6469 and #6468) with the same title as #6470 appear to be duplicates, indicating strong user impact. Underlying needs: (1) proper support for Streamable HTTP transport in the MCP stack, and (2) performance optimization for WebSocket-driven UI rendering.

## Bugs & Stability
Three distinct bugs were reported today, ranked by severity:

1. **High — MCP driver ignores transport config** (Issues #6470, #6469, #6468): The `_setup_transport` method in `mcp_stateful_client.py` hardcodes `sse_client`, breaking servers configured for `streamable_http`. No fix PR identified yet. This affects all users relying on Streamable HTTP MCP servers.  
2. **Medium — High CPU usage on Edge+Wayland** (Issue #6460): Single-tab CPU spike when viewing large sessions. Possibly related to re-rendering of large result sets or WebSocket message handling. No fix PR in progress.  
3. **Medium — API error when connecting to model** (Issue #6464): Deployed QwenPaw v2.0.1 fails to connect to any model, with empty dropdown. Likely a backend configuration or network issue. No fix PR.

No regressions were reported, but the MCP hardcode bug is a clear regression from configurability expectations.

## Feature Requests & Roadmap Signals
The only explicit feature request today is:
- **Issue #6466** — *[Feature]: Allow agent to send clickable folder/file path buttons in chat* — User wants agents to output buttons that open `C:\Users\...` paths directly rather than requiring manual copy-paste. This is a UX enhancement that aligns with the project’s goal of smooth agent-user interaction. Given its simplicity and clear user benefit, it may be prioritized for the next minor release.  
  [https://github.com/agentscope-ai/QwenPaw/issues/6466](https://github.com/agentscope-ai/QwenPaw/issues/6466)

## User Feedback Summary
- **Pain points**: MCP transport inflexibility (hardcoded SSE) is causing direct failures for users running Streamable HTTP servers. High CPU usage on Edge/Wayland disrupts workflows with large sessions. Model connectivity issues frustrate new deployments.
- **Use cases**: Multiple users (e.g., #6467) are trying to set up servers for personal use (including VPN nodes), indicating a non-technical user base that expects simpler setup. Others (e.g., #6460) use QwenPaw to manage ComfyUI workflows.
- **Satisfaction**: No explicit positive feedback today; most interactions are bug reports or help requests. The duplicate MCP bug reports (three issues with same root cause) suggest users are actively seeking a solution.

## Backlog Watch
No long-unanswered issues or PRs were identified in today’s data; all items are from the last 1–2 days. However, the three duplicate MCP transport bug reports (#6470, #6469, #6468) could benefit from being consolidated by a maintainer to avoid fragmentation. PRs #6276 (unified browser SDK) and #6399 (reranker UI config) remain open but have received recent updates and are under review.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest – 2026-07-26

## 1. Today's Overview

ZeroClaw is in an intense development cycle with **50 PRs updated in the last 24 hours** (48 open, 2 closed) and **19 issues updated** (16 open/active, 3 closed). No new releases were published, but the project is clearly preparing for **v0.8.4** (tracked in #8357, target July 31). Activity is dominated by large cross-cutting PRs (multi-channel streaming, gateway OpenAI endpoint, plugin architecture) and a cluster of high-severity security bugs, most notably a WhatsApp Web configuration bypass (#9348) and a verifiable-intent credential verification gap (#9328). CI reliability is also a central concern, with a **test flake affecting 19 out of 20 runs** on master (#9357). Two PRs were merged today: a fix for channel plugin route host-stamping (#9123) and a npm audit resolution (#9270).

## 2. Releases

**No new releases** today. The last published version remains **v0.8.3** (as noted in binary reports). The upcoming **v0.8.4 maintenance train** (#8357) is scheduled for July 31 and will include numerous bug fixes, CI improvements, and the first crates.io publication since the microkernel split (see PR #9376, cut v0.8.4 changelog, currently open).

## 3. Project Progress

**Merged/Closed PRs today (2):**
- [#9123](https://github.com/zeroclaw-labs/zeroclaw/pull/9123) – **fix(plugins): host-stamp channel plugin routes** – Adds `PluginChannelEndpoint` to separate routing channel types from binding aliases, fixing route confusion in multi-plugin setups.
- [#9270](https://github.com/zeroclaw-labs/zeroclaw/pull/9270) – **fix(web/deps): resolve npm audit advisories** – Pins `@redocly/openapi-core` to safe version, upgrades `js-yaml` and `brace-expansion`, removing three high-severity findings.

**Closed issues today (3):**
- [#9285](https://github.com/zeroclaw-labs/zeroclaw/issues/9285) – **nested set_prop masks invalid values** – Fixed; config path-resolution error replaced with proper value error.
- [#9235](https://github.com/zeroclaw-labs/zeroclaw/issues/9235) – **npm audit CI failure** – Closed by PR #9270.
- [#8962](https://github.com/zeroclaw-labs/zeroclaw/issues/8962) – **runtime tests flake under parallel execution** – Likely addressed by parallelization work in #9371.

**Key feature advances (open PRs with significant progress):**
- [#8443](https://github.com/zeroclaw-labs/zeroclaw/pull/8443) – Matrix `single_message` streaming mode (progress drafts).
- [#8561](https://github.com/zeroclaw-labs/zeroclaw/pull/8561) – Telegram `multi_message` streaming mode.
- [#8486](https://github.com/zeroclaw-labs/zeroclaw/pull/8486) – OpenAI Chat Completions endpoint on the gateway.
- [#9194](https://github.com/zeroclaw-labs/zeroclaw/pull/9194) – KeySource trait extraction for secrets management.
- [#9376](https://github.com/zeroclaw-labs/zeroclaw/pull/9376) – v0.8.4 release cut with crates.io publishing.

## 4. Community Hot Topics

**Most active issues (by comment count):**
- [#9348](https://github.com/zeroclaw-labs/zeroclaw/issues/9348) – **WhatsApp Web security bypass** (6 comments). Operators believe they have restricted the agent to personal chats, but `mode = business` ignores all chat policies, allowing the agent to reply to every DM and group. A fix PR [#9354](https://github.com/zeroclaw-labs/zeroclaw/pull/9354) is open with a warning approach.
- [#6489](https://github.com/zeroclaw-labs/zeroclaw/issues/6489) – **"Everything is a plugin" architectural RFC** (5 comments). Long-running tracker to unify integrations and plugins. Maintainers are still discussing the phased path.
- [#9328](https://github.com/zeroclaw-labs/zeroclaw/issues/9328) – **Verifiable-intent credential chain missing** (3 comments). Constraint evaluation runs before cryptographic verification, allowing forged fulfillments. No fix PR yet.

**Most active PRs (by size/complexity, as comment counts are unavailable):**
- [#8496](https://github.com/zeroclaw-labs/zeroclaw/pull/8496) – Deferred MCP access policy centralization (size M, high risk).
- [#8561](https://github.com/zeroclaw-labs/zeroclaw/pull/8561) – Telegram multi_message streaming (size XL, high risk, needs author action).
- [#8443](https://github.com/zeroclaw-labs/zeroclaw/pull/8443) – Matrix single_message streaming (size XL, high risk).
- [#8486](https://github.com/zeroclaw-labs/zeroclaw/pull/8486) – OpenAI chat completions endpoint (size XL, high risk).

**Underlying needs:** Users are demanding **better security defaults** (WhatsApp policy bypass), **more streaming modes** (Telegram/Matrix), **OpenAI-compatible API** for ecosystem tooling, and **cleaner plugin architecture** to reduce fragmentation.

## 5. Bugs & Stability

**High-severity bugs (risk:high, P1):**
- [#9348](https://github.com/zeroclaw-labs/zeroclaw/issues/9348) – **WhatsApp Web policy bypass** (S1 security). No fix PR yet; workaround is to use `mode = personal`. Fix PR #9354 adds warnings only.
- [#9328](https://github.com/zeroclaw-labs/zeroclaw/issues/9328) – **Verifiable-intent credential verification missing** (S1/S2). No fix PR.
- [#9357](https://github.com/zeroclaw-labs/zeroclaw/issues/9357) – **Runtime test flake on master** – 95% failure rate, poisoned mutex. PR #9371 proposes parallelizing the stress gate but does not address root cause.
- [#9239](https://github.com/zeroclaw-labs/zeroclaw/issues/9239) – **Config patch --json emits plaintext errors** (S3, P1). Affects CLI automation.
- [#9340](https://github.com/zeroclaw-labs/zeroclaw/issues/9340) – **CLI cron jobs cannot deliver output** – Delivery mode hardcoded to `none`. No fix PR.
- [#9374](https://github.com/zeroclaw-labs/zeroclaw/issues/9374) – **AgentStart lifecycle leak** (S3, new today). Open-coded bracket in `agent::run` leaks on 12 exit paths.
- [#9373](https://github.com/zeroclaw-labs/zeroclaw/issues/9373) – **Peer-agent cost tracking missing** (S2, new today). Spend unrecorded.

**Medium-severity bugs (risk:medium, P2):**
- [#9366](https://github.com/zeroclaw-labs/zeroclaw/issues/9366) – WhatsApp Web `approval_timeout_secs` accepted but never read.
- [#9363](https://github.com/zeroclaw-labs/zeroclaw/issues/9363) – Config metadata remains English in localized UI.
- [#9359](https://github.com/zeroclaw-labs/zeroclaw/issues/9359) – Telegram multi_message delay pacing per-draft (non-blocking).

**CI/Stability improvements in progress:**
- PR [#9371](https://github.com/zeroclaw-labs/zeroclaw/pull/9371) – Parallelize runtime stress gate.
- PR [#9115](https://github.com/zeroclaw-labs/zeroclaw/pull/9115) – Use faster Blacksmith runners for compile-heavy jobs.

## 6. Feature Requests & Roadmap Signals

**New feature requests / RFCs:**
- [#9330](https://github.com/zeroclaw-labs/zeroclaw/issues/9330) – **AI-assisted PR pre-review and re-review** (RFC). Proposes using CI to trigger AI reviews while keeping human final approval. High risk due to integration complexity.
- [#6489](https://github.com/zeroclaw-labs/zeroclaw/issues/6489) – **"Everything is a plugin"** – Still active, phased path from Integrations → unified plugin catalog. Likely a v0.9 or v1.0 goal.
- [#7130](https://github.com/zeroclaw-labs/zeroclaw/issues/7130) – **forbid(unsafe_code) workspace-wide** – Aardvark-sys as sole carve-out. Medium priority, no-stale.
- [#8583](https://github.com/zeroclaw-labs/zeroclaw/issues/8583) – **Channel/source shared-boundary cleanup** – In-progress tracker; will affect all future channel additions.

**Predictions for next version (v0.8.4, due July 31):**
- Telegram `multi_message` mode (#8561) – likely to land if author resolves needs-author-action.
- Matrix `single_message` mode (#8443) – strong candidate.
- OpenAI gateway endpoint (#8486) – may be deferred due to size.
- Secrets `KeySource` trait (#9194) – could slip.
- At least the WhatsApp warning fix (#9354) and the npm audit fix (#9270) will be included.

## 7. User Feedback Summary

**Pain points expressed:**
- **Security misconfigurations** – WhatsApp Web users who think they have locked down their agent are exposed (#9348). This creates trust issues.
- **Cron job output discarded** – CLI-created cron jobs silently lose results (#9340). Operators cannot use cron for automation workflows.
- **Cost tracking blind spots** – Peer-agent delivery and agent lifecycle leaks mean spend goes unrecorded (#9373, #9349). Users relying on budgets are misled.
- **Config tooling inconsistencies** – JSON patch errors are human-readable (#9239), breaking scripting.
- **Localization gaps** – Chinese UI users still see English config metadata (#9363).
- **Test reliability** – 95% failure on master (#9357) impacts contributor confidence.

**Positive signals:**
- The community is actively contributing large features (Telegram, Matrix, OpenAI endpoint) and security improvements.
- Users are filing high-quality bug reports with reproduction steps and severity classifications.

## 8. Backlog Watch

**Long-unanswered important issues (no maintainer response or stale):**
- [#6489](https://github.com/zeroclaw-labs/zeroclaw/issues/6489) – **"Everything is a plugin"** – Created May 6, 2026, last comment July 25. No maintainer decision on phased path; major architectural direction.
- [#7130](https://github.com/zeroclaw-labs/zeroclaw/issues/7130) – **forbid(unsafe_code)** – Created June 3. No PR yet; needs maintainer to approve aardvark-sys carve-out.
- [#8357](https://github.com/zeroclaw-labs/zeroclaw/issues/8357) – **v0.8.4 maintenance train** – Created June 26. No recent comments; milestone page may be source of truth.

**PRs needing maintainer attention (marked `needs-author-action` or `needs-maintainer-review`):**
- [#8496](https://github.com/zeroclaw-labs/zeroclaw/pull/8496) – Deferred MCP access policy (needs-author-action since June 29).
- [#9194](https://github.com/zeroclaw-labs/zeroclaw/pull/9194) – Secrets KeySource (needs-author-action).
- [#8561](https://github.com/zeroclaw-labs/zeroclaw/pull/8561) – Telegram multi_message (needs-author-action).
- [#8486](https://github.com/zeroclaw-labs/zeroclaw/pull/8486) – OpenAI gateway (needs-author-action).
- [#7821](https://github.com/zeroclaw-labs/zeroclaw/pull/7821) – Sandbox policy config (needs-author-action since June 17).
- [#8438](https://github.com/zeroclaw-labs/zeroclaw/pull/8438) – Cron shell_output_format (needs-author-action).
- [#9200](https://github.com/zeroclaw-labs/zeroclaw/pull/9200) – Atlas Cloud provider (needs-author-action).

**Key observation:** A large number of XL-sized PRs are waiting on author action, suggesting contributors may be blocked on review feedback or have deprioritized their work. Maintainers may need to triage and close stale PRs to reduce technical debt.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/boom7sss/agents-radar).*