# OpenClaw Ecosystem Digest 2026-08-15

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-08-15 01:37 UTC

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

# OpenClaw Project Digest — 2026-08-15

## Today's Overview

OpenClaw had a very active 24 hours: **500 issues** were updated (485 open / 15 closed) and **500 PRs** were updated (400 open / 100 closed/merged). No new releases were published in this window. The tracker remains heavily loaded with long-running reliability issues — especially silent message-delivery failures, gateway memory growth, and channel-integration regressions — while maintainers also advanced several UI and security-focused PRs. Overall, the project shows strong community engagement but continues to be strained by recurring stability and delivery bugs.

## Releases

No new releases in this window.

## Project Progress

Notable closed/merged PRs visible in the top sample:

- [openclaw/openclaw#116489](https://github.com/openclaw/openclaw/pull/116489) — `feat(security)` require acknowledgement for install policy warnings. Adds an operator review path for suspicious plugin/skill installs.
- [openclaw/openclaw#123914](https://github.com/openclaw/openclaw/pull/123914) — `fix(cron)` keep agent-less schedules running after adding an agent. Fixes a regression where agent-less cron jobs failed after a second agent was configured.
- [openclaw/openclaw#123901](https://github.com/openclaw/openclaw/pull/123901) — `fix(workers)` bound Gateway bundle cache growth. Prevents unbounded `state/cache/worker-bundles` growth during long dev/upgrade cycles.
- [openclaw/openclaw#123913](https://github.com/openclaw/openclaw/pull/123913) — `refactor(sessions)` avoid duplicate SQLite conformance runs. Removes redundant test paths and no-op assertions.

Open PRs also advanced in areas such as web UI sidebar consolidation, incognito-session identity, install-policy warnings, and gateway performance guards.

## Community Hot Topics

Most-commented issues in the last 24 hours:

| Issue | Comments | Topic |
|---|---|---|
| [#121058](https://github.com/openclaw/openclaw/issues/121058) | 94 | Silent reply failures recurring after #116277 was closed |
| [#7707](https://github.com/openclaw/openclaw/issues/7707) | 51 | Memory Trust Tagging by source |
| [#42475](https://github.com/openclaw/openclaw/issues/42475) | 25 | Per-agent cost budget enforcement at gateway level |
| [#91588](https://github.com/openclaw/openclaw/issues/91588) | 24 | Critical gateway memory leak / OOM crashes |
| [#91009](https://github.com/openclaw/openclaw/issues/91009) | 20 | Codex PreToolUse hook spawns CPU-bound processes |
| [#48003](https://github.com/openclaw/openclaw/issues/48003) | 19 | Steer mode does not inject messages mid-turn |
| [#121953](https://github.com/openclaw/openclaw/issues/121953) | 19 | Cron agent turns stall on DeepSeek |

Underlying themes: users are primarily concerned with **message-delivery reliability**, **memory/CPU stability**, **security of injected memory/context**, and **cost control**. The high comment count on #121058 suggests silent reply failures are affecting a broad set of users and that a previous fix was insufficient.

## Bugs & Stability

Ranked by severity:

| Severity | Issue | Impact | Status |
|---|---|---|---|
| P0 | [#91588](https://github.com/openclaw/openclaw/issues/91588) | Gateway RSS grows from 350MB to 15.5GB, causing repeated OOM crashes | Open; `no-new-fix-pr`, needs maintainer review |
| P0 | [#119270](https://github.com/openclaw/openclaw/issues/119270) | File tools strip leading `@` from destination paths, causing writes/edits/deletes on wrong files | Open; source repro provided |
| P0 | [#48920](https://github.com/openclaw/openclaw/issues/48920) | Live docs ahead of release; release-blocking docs mismatch | Open; needs maintainer/product decision |
| High | [#121058](https://github.com/openclaw/openclaw/issues/121058) | Silent reply failures still recurring; no queued reply payload | Open; 94 comments, no visible fix PR |
| P1 | [#91009](https://github.com/openclaw/openclaw/issues/91009) | Codex PreToolUse relay spawns CPU-bound processes and stalls gateway RPC | Open; needs live repro |
| P1 | [#87109](https://github.com/openclaw/openclaw/issues/87109) | Gateway heap grows at idle; cron jobs fail silently under memory pressure | Open; needs maintainer review |
| P1 | [#121953](https://github.com/openclaw/openclaw/issues/121953) | Cron turns stall on DeepSeek because `[cron:...]` prefix is deprioritized | Open; linked PR exists |
| P1 | [#86012](https://github.com/openclaw/openclaw/issues/86012) | LINE messages silently lost due to reply-token expiry and missing push fallback | Open; linked PR exists |
| P1 | [#123073](https://github.com/openclaw/openclaw/issues/123073) | `openclaw update` fails on dev channel with `EUNSUPPORTEDPROTOCOL` for `workspace:*` | Open; fix-shape-clear |
| P1 | [#123557](https://github.com/openclaw/openclaw/issues/123557) | ACP `session/new` cwd not propagated; agent runs in default workspace | Open; source repro |
| P1 | [#123273](https://github.com/openclaw/openclaw/issues/123273) | Image attachments fail for named agents but work for default agent | Open; needs info |

The most serious pattern is **silent failure**: replies not delivered, cron jobs no-op, and messages lost without errors. Several issues have linked PRs, but the largest P0 items still lack new fix PRs.

## Feature Requests & Roadmap Signals

Active feature requests likely to influence the roadmap:

- [Memory Trust Tagging by Source #7707](https://github.com/openclaw/openclaw/issues/7707) — Tag memory by origin to prevent memory-poisoning attacks.
- [Per-agent cost budget enforcement #42475](https://github.com/openclaw/openclaw/issues/42475) — Gateway-level daily/monthly spend caps.
- [Context Provenance #54373](https://github.com/openclaw/openclaw/issues/54373) — Add source/volatility metadata to injected context.
- [Agent-triggered context compaction #6757](https://github.com/openclaw/openclaw/issues/6757) — Let agents self-compact without user intervention.
- [Configurable upload size limit #71142](https://github.com/openclaw/openclaw/issues/71142) — Raise the 5MB hardcoded Control UI limit.
- [UI quality update #75947](https://github.com/openclaw/openclaw/issues/75947) — Redesign config pages around accessibility/ergonomics.
- [Per-pattern session retention #50900](https://github.com/openclaw/openclaw/issues/50900) — Different maintenance retention rules for ephemeral vs interactive sessions.
- [Task-flow lifecycle hook events #87362](https://github.com/openclaw/openclaw/issues/87362) — Expose observer events through plugin SDK.
- [maxThreads for local embedding #54128](https://github.com/openclaw/openclaw/issues/54128) — Better CPU utilization for `node-llama-cpp` embeddings.

Roadmap prediction: the dense chain of open web-UI PRs by `vyctorbrzezowski` (sidebar, chat rails, incognito identity, transactional customization) appears likely to land soon, along with security-related install-policy acknowledgements and per-turn send-budget guards.

## User Feedback Summary

- **Reliability frustration is high.** Repeated silent reply failures, undelivered WhatsApp/LINE/Telegram messages, and cron no-ops are common complaints.
- **Power users are providing excellent repros.** Many top issues include source repros, live-repro labels, screenshots, and detailed environment data.
- **Release/docs quality is a concern.** The P0 “Live Docs are ahead of release” issue and the dev-channel update breakage suggest friction between documentation, tooling, and packaged releases.
- **Cost and security governance are emerging demands.** Users want per-agent budget caps and provenance/trust tracking for memory and context.
- **Satisfaction signals are mixed:** maintainers are actively closing/merging PRs and iterating on UI/security, but several long-standing P0/P1 issues remain in `needs-maintainer-review` without a new fix PR.

## Backlog Watch

Issues and PRs that appear to need maintainer attention:

- [#7707](https://github.com/openclaw/openclaw/issues/7707) — Memory Trust Tagging; open since Feb, 51 comments, still needs product decision/review.
- [#42475](https://github.com/openclaw/openclaw/issues/42475) — Per-agent cost budgets; open since Mar, needs maintainer/product decision.
- [#91588](https://github.com/openclaw/openclaw/issues/91588) — P0 gateway memory leak; open since Jun, no new fix PR.
- [#91009](https://github.com/openclaw/openclaw/issues/91009) — P1 Codex hook CPU stall; open since Jun, needs live repro and product decision.
- [#48003](https://github.com/openclaw/openclaw/issues/48003) — Steer mode broken for main sessions; open since Mar, has linked PR but still needs review.
- [#50093](https://github.com/openclaw/openclaw/issues/50093) — WhatsApp missed-message backfill; open since Mar, needs product decision/live repro.
- [#48920](https://github.com/openclaw/openclaw/issues/48920) — P0 docs/release mismatch; open since Mar, remains a release blocker.
- [#90788](https://github.com/openclaw/openclaw/pull/90788) — Large CoT pre-flight planning PR; waiting on real-behavior proof and PR context.
- [#117712](https://github.com/openclaw/openclaw/pull/117712) — Dependabot actions group bump; security-relevant but waiting on author/maintainer action.

The overall picture is an actively developed project with high community participation, but also a growing backlog of chronic reliability and delivery issues that need maintainer prioritization.

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report — AI Agent & Personal Assistant Open-Source Ecosystem
**Data window:** 2026-08-15 | **Projects analyzed:** 13

---

## 1. Ecosystem Overview

The open-source personal AI assistant ecosystem in August 2026 is a crowded field of a dozen-plus actively maintained projects sharing a common blueprint: a chat-channel gateway, an LLM-driven agent loop, a skills/tools layer, and persistent memory. OpenClaw remains the gravitational center as the core reference implementation, but the field has diversified sharply by language and deployment model — Python (Hermes, NanoBot, CoPaw), Rust (IronClaw, ZeroClaw), Node/TypeScript (LobsterAI, NanoClaw), and Go (PicoClaw). The dominant cross-project theme is no longer raw capability but **reliability and trust**: silent message-delivery failures, memory-integrity bugs, and inadequate governance for autonomous actions dominate the busiest issue trackers. MCP is consolidating as the integration standard, while OpenAI-compatible API access is the most-demanded interoperability feature. Overall, the ecosystem is high-velocity and community-rich, but maintainer bandwidth, Windows quality, and chronic P0 bugs are the binding constraints.

---

## 2. Activity Comparison

*Counts reflect issues/PRs *touched* in the 24h window, not absolute open totals. Health score = composite of merge throughput, P0/P1 resolution speed, backlog age, and release cadence (10 = excellent).*

| Project | Issues Updated | PRs Updated | Merged/Closed PRs | Release Status | Health |
|---|---|---|---|---|---|
| **OpenClaw** | 500 | 500 | 100 | None | **5/10** — massive activity, but chronic P0s unresolved and silent-failure recurrence |
| **Hermes Agent** | 50 | 50 | 23 | None (v0.20.0 last) | **9/10** — two P0s closed same-day, god-file epic completed |
| **CoPaw** (QwenPaw) | 50 | 41 | 15 | None | **7.5/10** — strong triage, but 2.1.0 regressions open without fix PRs |
| **ZeroClaw** | 33 | 50 | 3 | None (v0.8.5 line) | **7.5/10** — high velocity, RFC-review bottleneck, Windows gap |
| **IronClaw** | 25 | 47 | 23 | None (1.2.0 merged to main) | **8.5/10** — QA-driven fixes, coherent v1.3.0 roadmap |
| **LobsterAI** | 2 | 27 | 22 | **2026.8.14 shipped** | **8/10** — strong cadence; safety-critical tests still missing |
| **NanoBot** | 3 | 22 | 8 | None | **9/10** — 24h bug-to-fix turnaround, healthy contributor pipeline |
| **PicoClaw** | 3 | 9 | 5 | None | **6/10** — moderate; MCP fix in progress, stale PR backlog |
| **NanoClaw** | 2 | 11 | 3 | None | **6.5/10** — active CI hardening; attachment PRs stale 2–3 months |
| **Moltis** | 0 | 2 | 0 | None | **5.5/10** — clean but minimal signal; two feature PRs pending |
| **NullClaw** | 0 | 1 | 1 | None | **5.5/10** — stable, low activity |
| **TinyClaw** | 0 | 0 | 0 | None | N/A — no activity |
| **ZeptoClaw** | 0 | 0 | 0 | None | N/A — no activity |

---

## 3. OpenClaw's Position

**Advantages vs. peers**
- **Community scale:** ~10× the daily activity of the next-busiest projects (500 issues + 500 PRs touched/24h vs. ~50 for Hermes, CoPaw, ZeroClaw). The 94-comment thread on silent reply failures (#121058) alone evidences a large real-world install base.
- **Reference status:** OpenClaw defines the ecosystem's vocabulary — gateway, agents, skills, channel adapters, cron runs — that NanoClaw, PicoClaw, ZeroClaw, and others explicitly mirror in naming and architecture.
- **Channel breadth:** the widest messaging surface (WhatsApp, LINE, Telegram, etc.), and the deepest feature surface: security install-policy acknowledgments, UI sidebar consolidation, incognito sessions, and per-turn budget guards all in active PRs.

**Technical approach differences**
- Node.js/TypeScript gateway with worker bundles, a plugin/skill install pipeline, built-in cron, and per-agent send-budget machinery. Memory trust tagging and context provenance are on the roadmap but not yet shipped.

**Risks**
- Chronic P0s: gateway memory leak (#91588, RSS growing 350MB→15.5GB) and file-tool path corruption (#119270) remain open with no new fix PRs; silent reply failures recurred after a prior fix.
- Docs/release mismatch is itself a P0 release blocker (#48920).
- A 400-open-PR queue indicates contributor supply is outpacing maintainer review capacity — a structural bottleneck.

---

## 4. Shared Technical Focus Areas

Requirements emerging independently across multiple projects:

1. **Message-delivery reliability / silent-failure elimination** — OpenClaw (#121058 recurring silent replies, LINE token expiry #86012, WhatsApp backfill #50093), Hermes (#83683 gateway killed on desktop restart → WeChat/QQ/Telegram go silent), PicoClaw (#3269 MCP hang stops all replies), IronClaw (#7660 Slack UI lies about connection state), NanoBot (#5391 long generations killed by idle-timeout misuse).
2. **Memory & session integrity** — NanoBot (#5271 stale background saves overwrite sessions), Hermes (#85825 CRLF corruption destroyed MEMORY.md; #85622 provider violates "additive" contract), ZeroClaw (#9919 Qdrant silently routed to Markdown fallback), OpenClaw (#7707 memory trust tagging), NullClaw (configurable memory DB path to support read-only workspaces).
3. **Governance for autonomous action** — ZeroClaw (#7155 allow/ask/deny shell policy, #9996 atomic action budgets, HTTP egress hardening), IronClaw (#7644–7647 verify-once, preflight grants, standing approval leases, deterministic no-delivery), OpenClaw (#42475 per-agent cost budgets), LobsterAI (#1154 dangerous-command detection untested), CoPaw (#7025 plugin isolation broken).
4. **Cost control & model routing** — OpenClaw (#42475 gateway-level spend caps), IronClaw (#7645 per-automation model pinning, #7183 per-user model selection), CoPaw (#5992 per-session model overrides, #6302 provider unification), ZeroClaw (#9895 Telegram model picker, #9983 vision-fallback misdiagnosis), Hermes (GLM-5.3 support, fallback chain escalation).
5. **MCP ecosystem reliability** — PicoClaw (#3269 hang on unreachable MCP server), CoPaw (#6405 "Tool not found" after 2.0, #6958 duplicate tool results), NanoBot (#5179 MCP SDK v2 migration with security preserved), IronClaw (#7665 origin-scoped MCP OAuth).
6. **Channel parity & media handling** — Discord (Hermes Omniscience campaign, NanoClaw #2752 attachments unreachable), Telegram (IronClaw 2FA/code delivery, PicoClaw session commands, ZeroClaw picker), Slack (Moltis native task cards, IronClaw UI truth), Alibaba channels (CoPaw OneBot/Feishu, PicoClaw DingTalk), plus OpenClaw LINE/WhatsApp gaps.
7. **Cross-platform (Windows) quality** — ZeroClaw (#7462 74 failing tests, code page 936), Hermes (#85825 CRLF corruption), NanoClaw (#3246 orphan cleanup silently no-ops under cmd.exe), NanoBot (#5382 PermissionError on `os.replace`), IronClaw (1.2.0 Windows fs/smoke fixes), CoPaw (#2846 installer/icon pain).
8. **WebUI/UX maturity** — NanoBot (drag-and-drop sessions, collaboration mentions, 10-locale localization), IronClaw (toasts, design-system components), OpenClaw (sidebar consolidation, incognito identity), LobsterAI (artifact panel, sidebar, fonts), ZeroClaw (transcript copy).

---

## 5. Differentiation Analysis

| Project | Stack | Primary Surface | Target User | Defining Trait |
|---|---|---|---|---|
| **OpenClaw** | Node/TS | Chat gateway + skills | General self-hosters | Ecosystem reference; unmatched channel breadth |
| **Hermes Agent** | Python + TS desktop/TUI | Desktop app + gateway | Power users, production multi-tenant | Architectural rigor (god-file sharding, RFC discipline) |
| **NanoBot** | Python + TS WebUI | Web UI | Web-first developers, teams | Session collaboration, localization, fast maintainer loop |
| **IronClaw** | Rust | Gateway + automations | Automation-heavy teams | Structured automation stack, pluggable memory over MCP |
| **ZeroClaw** | Rust | CLI/gateway/API | Security-conscious operators | RFC-driven security governance; OpenAI-compat gap is the key ask |
| **CoPaw** | Python (AgentScope) | Desktop + channels | Chinese-market, AgentScope devs | Deep China-channel support (Feishu, OneBot, DingTalk) |
| **LobsterAI** | TS/Electron-style | Desktop app | Enterprise/team users | Commercial UX, Team Edition, strong release cadence |
| **PicoClaw** | Go | Chat gateway | Edge/low-resource users | Lightweight runtime; hardware-adjacent (Sipeed) |
| **NanoClaw** | Node/Bun | Channels + containers | Container-native developers | Supply-chain security (agent-image signing, cosign verify) |
| **Moltis** | N/A | Slack integration | Slack-centric teams | Slack-native task cards, durable CalDAV/Gmail connectors |
| **NullClaw** | N/A (SQLite memory) | Minimal gateway | Deployment-flexible users | Configuration simplicity (e.g., external memory DB path) |

---

## 6. Community Momentum & Maturity

**Activity tiers (by 24h touched items):**
- **Tier 1 — Hyperactive (80+):** OpenClaw (1,000), Hermes (100), CoPaw (91), ZeroClaw (83)
- **Tier 2 — High (25–80):** IronClaw (72), LobsterAI (29), NanoBot (25)
- **Tier 3 — Moderate (<15):** PicoClaw (12), NanoClaw (13), Moltis (2)
- **Tier 4 — Dormant:** NullClaw (1), TinyClaw (0), ZeptoClaw (0)

**Rapidly iterating:** Hermes (same-day P0 fixes, epic completion, Discord parity campaign), IronClaw (QA bug-bash driving fixes, unbound-turns train), LobsterAI (daily release, 22 PRs merged), NanoBot (24h bug-to-fix loop).
**Stabilizing/hardening:** ZeroClaw (v0.8.5 intake freeze through Aug 30, RFC-driven), NanoClaw (CI/signing pipeline hardening).
**Strained:** OpenClaw — high engagement but P0 fixes lagging behind community demand.
**Stalled/at-risk:** TinyClaw and ZeptoClaw show zero activity; NullClaw and Moltis are alive but low-signal; Moltis' two feature PRs (#1190, #1195) need review decisions to avoid drift.

---

## 7. Trend Signals

1. **Silent failure is the #1 reliability enemy.** Recurring undelivered messages, no-op cron jobs, and lost replies dominate the highest-comment issues (OpenClaw #121058; Hermes #83683; PicoClaw #3269). **For developers:** instrument delivery receipts, explicit error propagation, and dead-letter fallbacks as first-class features — not afterthoughts.
2. **Memory is becoming a security boundary.** Trust tagging, provenance metadata, and integrity checks are demanded across OpenClaw (#7707, #54373), Hermes (#85825, #85622), NanoBot (#5271), and ZeroClaw (#9919). **For developers:** treat memory as an untrusted input; add atomic writes, source provenance, and corruption detection.
3. **Governance precedes autonomy.** Users want `allow/ask/deny` shell policies, preflight grant checks, approval leases, and atomic budget accounting before letting agents run unattended (ZeroClaw #7155, IronClaw #7644–7647, OpenClaw #42475). **For developers:** build policy hooks and budget enforcement into the runtime, not the UI.
4. **OpenAI-compatible APIs are table stakes for ecosystem adoption.** ZeroClaw's most-commented RFC (#8603) is that Open WebUI/LobeChat/Continue.dev/Aider clients cannot connect; CoPaw has similar Responses-API complaints. **For developers:** exposing a `/v1/chat/completions`-compatible surface unlocks the entire tooling ecosystem.
5. **MCP is the integration standard, but failure handling is immature.** Hangs, "tool not found" 404s, duplicate result writes, and SDK migration risk recur across PicoClaw, CoPaw, NanoBot, and IronClaw. **For developers:** invest in MCP timeouts, retries, clear errors, and connection resilience.
6. **Windows remains an underserved differentiator.** Six projects report Windows-specific breakage (ZeroClaw's 74 failed tests, Hermes' CRLF memory corruption, NanoClaw's shell quoting, NanoBot's `os.replace` crashes). **For developers:** running Windows CI is a low-cost, high-loyalty advantage.
7. **Channel parity is an expectation, not a feature.** Users treat Discord, Telegram, Slack, WhatsApp, LINE, WeChat, DingTalk, Feishu, and OneBot as interchangeable; gaps in attachment handling, session management, or login flows generate immediate complaints across every project. **For developers:** abstract channel semantics behind a common interface and test media/login flows per channel.
8. **Cost control is shifting from dashboards to enforcement.** Per-agent budgets, per-automation model pinning, and atomic action-budget accounting are appearing at the gateway level (OpenClaw #42475, IronClaw #7645, ZeroClaw #9996, CoPaw #5992). **For developers:** runtime-level spend caps and model pinning will be baseline expectations for production deployments.

---

*Report compiled from community digest data for 2026-08-15. Activity counts reflect 24-hour update windows, not absolute repository size. Health scores are analyst composites based on merge velocity, bug-resolution speed, backlog age, and release cadence.*

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-08-15

## 1. Today's Overview

NanoBot saw strong contributor activity in the last 24 hours: 22 PRs were updated (14 open, 8 closed/merged), and 3 issues were touched (1 still open, 2 closed). No new releases were published. The current queue is heavily WebUI-focused — drag-and-drop organization, localization, setup flows, and collaboration features — while a parallel stability track continues around session persistence and provider streaming. The rapid closure of the Anthropic idle-timeout bug (#5391) via PR #5392 shows responsive maintainers, and the large number of open, reviewable PRs indicates a healthy external contribution pipeline.

## 2. Releases

No new releases were published in the last 24 hours, so there are no release notes, breaking changes, or migration steps to report.

## 3. Project Progress

**Closed/merged PRs visible in today’s update window:**

- **#5392** — [fix(anthropic): treat stream idle timeout as inactivity only, not total time](https://github.com/HKUDS/nanobot/pull/5392)  
  Fixes #5391 and prevents `NANOBOT_STREAM_IDLE_TIMEOUT_S` from killing long but active Anthropic generations.

- **#5395** — [feat(webui): refine conversation groups and shared shapes](https://github.com/HKUDS/nanobot/pull/5395)  
  Improves group terminology, group drag behavior, and WebUI control consistency.

- **#5393** — [feat(webui): polish sidebar and session transitions](https://github.com/HKUDS/nanobot/pull/5393)  
  Splits collaboration-independent WebUI improvements out of #5358; refines sidebar hierarchy, tabs, and session transitions.

- **#4689** — [feat(providers): surface OAuth status and expiry warnings](https://github.com/HKUDS/nanobot/pull/4689)  
  Adds OAuth status visibility and proactive token expiry warnings across CLI, WebUI, and runtime sessions.

- **#5018** — [feat(skills): support explicit context loading](https://github.com/HKUDS/nanobot/pull/5018)  
  Makes `skill_names` on `ContextBuilder` actually preload explicitly requested skills.

- **#5390** — [Agent/knowledge graph](https://github.com/HKUDS/nanobot/pull/5390)  
  Chore/feature PR closed; no detailed summary available in the visible data.

The remaining closed/merged PRs from the 22-item update batch were not shown in the top-20 excerpt, but total closed/merged count for the day is 8.

## 4. Community Hot Topics

- **#5161 — [refactor: narrow file-level Pyright suppressions](https://github.com/HKUDS/nanobot/issues/5161)**  
  Open issue with 1 comment, created 2026-07-29. It tracks reducing 31 file-level `pyright` suppressions after strict checking was enabled. PR **#5396** targets this. The underlying need is long-term type-safety and static-analysis hygiene.

- **#5391 / #5392 — Anthropic streaming timeout bug and fix**  
  [Issue #5391](https://github.com/HKUDS/nanobot/issues/5391) and [PR #5392](https://github.com/HKUDS/nanobot/pull/5392) are the day’s clearest maintainer-response loop: a provider regression was reported and fixed within 24 hours. The underlying concern is reliability for long-running agent generations.

- **#5271 — [fix(session): prevent stale background task saves from overwriting session data](https://github.com/HKUDS/nanobot/pull/5271)**  
  Prioritized **p0**, still open. It addresses session data loss after `/new` or lifecycle replacements. This is one of the most safety-critical PRs in the queue.

- **#5179 — [Migrate MCP integration to SDK v2 with legacy compatibility](https://github.com/HKUDS/nanobot/pull/5179)**  
  Prioritized **p1**, open since 2026-07-30. It modernizes MCP transport while preserving SSRF validation, DNS pinning, and proxy routing. The demand here is maintainability without sacrificing security.

- **WebUI feature cluster** — Multiple open PRs show strong community demand for richer session management and collaboration:  
  - [#5389 drag-and-drop session organization](https://github.com/HKUDS/nanobot/pull/5389)  
  - [#5358 session collaboration via mentions](https://github.com/HKUDS/nanobot/pull/5358)  
  - [#5356 setup flows across chat channels](https://github.com/HKUDS/nanobot/pull/5356)  
  - [#5367 localized agent activity](https://github.com/HKUDS/nanobot/pull/5367)  
  - [#5371 hide assistant actions until turn end](https://github.com/HKUDS/nanobot/pull/5371)

## 5. Bugs & Stability

Ranked by severity:

- **P0 — Stale background saves overwrite session data**  
  [PR #5271](https://github.com/HKUDS/nanobot/pull/5271) fixes a critical session-integrity bug where old background saves could overwrite a session after `/new` or lifecycle replacement. It serializes `/new` with per-session compaction and rejects invalidated saves. Still open.

- **P2 — Anthropic idle timeout used as total timeout**  
  [Issue #5391](https://github.com/HKUDS/nanobot/issues/5391) reported that `NANOBOT_STREAM_IDLE_TIMEOUT_S` (default 90s) was applied as a *total* timeout on the no-callback path, killing long active Anthropic generations. Fixed and closed by [#5392](https://github.com/HKUDS/nanobot/pull/5392).

- **Bug — file-cap archive failure mutates session before persistence**  
  [Issue #5378](https://github.com/HKUDS/nanobot/issues/5378) reports that `Session.enforce_file_cap()` removes overflow from the live session before calling the archive callback. If the callback raises, the caller is left with an already-mutated session. The issue is closed, but no dedicated fix PR is visible in the top-20 PR list.

- **Windows — transient `PermissionError` on `os.replace()` crashes gateway**  
  [PR #5382](https://github.com/HKUDS/nanobot/pull/5382) adds retry logic for `[WinError 5] Access is denied` during `JsonlSessionStore.save()`, which crashed the gateway during heartbeat cron saves. Open, priority p2.

- **Regression — subagent partial completion results not marked correctly**  
  [PR #5152](https://github.com/HKUDS/nanobot/pull/5152) addresses a regression in subagent result handling by attaching `subagent_remaining_count` metadata and preventing model inference of unfinished results. Open, includes tests.

## 6. Feature Requests & Roadmap Signals

Recurring feature signals from the last 24 hours:

- **WebUI session organization**  
  [#5389](https://github.com/HKUDS/nanobot/pull/5389) adds drag-and-drop reordering, grouping by dragging sessions onto each other, and group-aware layout. This is likely to land soon.

- **Session collaboration via mentions**  
  [#5358](https://github.com/HKUDS/nanobot/pull/5358) gives persisted WebUI sessions stable `@name`s and extends the composer mention picker. A strong signal toward multi-session collaboration features.

- **WebUI localization and channel setup polish**  
  [#5367](https://github.com/HKUDS/nanobot/pull/5367) localizes agent activity across 10 locales; [#5356](https://github.com/HKUDS/nanobot/pull/5356) improves setup flows for chat channels. Both point to internationalization and onboarding as near-term priorities.

- **MCP SDK v2 migration**  
  [#5179](https://github.com/HKUDS/nanobot/pull/5179) is a p1 provider refactor. Expect MCP SDK v2 compatibility to be a major integration milestone in the next release.

- **Skills ecosystem improvements**  
  [#5309](https://github.com/HKUDS/nanobot/pull/5309) allows marketplace skills to shadow builtins; [#4145](https://github.com/HKUDS/nanobot/pull/4145) adds a weather skill example. This suggests continued investment in the skills marketplace.

- **Terminal UI**  
  [#4329](https://github.com/HKUDS/nanobot/pull/4329) proposes rebuilding `nanobot agent` as a native TypeScript/OpenTUI client while keeping the Python gateway. This is a larger roadmap item but still active.

- **Type-system cleanup**  
  [#5161](https://github.com/HKUDS/nanobot/issues/5161) and [#5396](https://github.com/HKUDS/nanobot/pull/5396) aim to narrow Pyright suppressions. This is more of an internal-quality roadmap than a user-facing feature.

Predicted next-version themes: **WebUI collaboration and session organization**, **MCP v2 support**, and **session/storage hardening**.

## 7. User Feedback Summary

- **Long Anthropic generations were being killed despite active streaming** — users reported a real reliability regression; the quick fix in [#5392](https://github.com/HKUDS/nanobot/pull/5392) should improve trust in long-running tasks.

- **Session data loss / overwrite risk** after `/new` or lifecycle replacement is the most serious concern in the queue. The community responded with a p0 fix in [#5271](https://github.com/HKUDS/nanobot/pull/5271), suggesting users depend heavily on durable session state.

- **Windows users experienced gateway crashes** during heartbeat saves due to transient `os.replace()` access-denied errors. The proposed retry fix in [#5382](https://github.com/HKUDS/nanobot/pull/5382) directly addresses a real deployment pain point.

- **File-cap archive failures** can silently corrupt in-memory session state, another data-integrity concern raised in [#5378](https://github.com/HKUDS/nanobot/issues/5378).

- **Satisfaction signals are mixed but improving**: many WebUI enhancement PRs indicate a highly engaged user base, while the large volume of bug-fix PRs shows contributors are invested in stabilizing the core. The maintainers’ fast turnaround on #5391 is a positive signal.

## 8. Backlog Watch

Items that may need maintainer attention:

- **#4145 — [fix: resolve #3958 — Weather Skill](https://github.com/HKUDS/nanobot/pull/4145)**  
  Open since 2026-06-01. A long-running skills example PR with new tests and docs. Needs a decision or review.

- **#4329 — [feat(cli): add native TypeScript terminal UI](https://github.com/HKUDS/nanobot/pull/4329)**  
  Open since 2026-06-13. A large architectural enhancement that preserves the Python gateway while adding a TypeScript/OpenTUI client. Likely needs maintainer direction.

- **#5152 — [fix(subagent): mark partial completion results](https://github.com/HKUDS/nanobot/pull/5152)**  
  Open since 2026-07-28. Tackles a regression in subagent result handling. Correctness-related and still unreviewed in the visible top-20 list.

- **#5179 — [Migrate MCP integration to SDK v2 with legacy compatibility](https://github.com/HKUDS/nanobot/pull/5179)**  
  Open since 2026-07-30, priority p1. A substantial provider refactor that benefits from maintainer review, especially around security-sensitive transport behavior.

- **#5309 — [fix(skills): allow marketplace skills to shadow builtins](https://github.com/HKUDS/nanobot/pull/5309)**  
  Open since 2026-08-09. Fixes a marketplace/builtin skill shadowing bug and includes tests. Needs maintainer review to avoid further skill-loading regressions.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-08-15

---

## 1. Today's Overview

Hermes Agent saw a high-volume day: **50 issues updated** (46 open/active, 4 closed) and **50 PRs updated** (27 open, 23 merged/closed), with **no new releases**. The headline event is the closure of the long-running "All Gods Must Die" epic (#78647) — all 20 repo-wide god-files have been successfully sharded into clean modules, marking a major architectural milestone. The Discord Omniscience campaign (#79564) is actively generating multiple new feature sub-issues and PRs, indicating a concentrated push on Discord platform parity. Stability work dominated the merge queue, including a P0 Windows memory-corruption fix and a P1 desktop gateway regression fix. Overall, the project is in a healthy, high-velocity state with strong architectural discipline and an active community contributing across platform integrations, skills ecosystem, and bug fixes.

---

## 2. Releases

**No new releases** in the last 24 hours. (Last known release in the data window: Hermes v0.20.0.)

---

## 3. Project Progress

### ✅ Completed Epic

- **[#78647 — [EPIC — COMPLETE] All Gods Must Die: 20/20 killed](https://github.com/NousResearch/hermes-agent/issues/78647)** — The repo-wide god-file sharding epic is finished. All 20 identified god files have been refactored into clean modules. Standing policy (2026-08): **all god files are sharded, never reverted.** This is a foundational architecture win for maintainability. (78 comments)

### 🔀 Merged/Closed PR Highlights

- **[#67017 — anthropic_prompt_cache_policy: missing positional agent parameter](https://github.com/NousResearch/hermes-agent/pull/67017) [CLOSED]** — Fixed a runtime break when the positional `agent` parameter was removed from `anthropic_prompt_cache_policy`; all affected call sites (moa_loop, agent_runtime_helpers, run_agent) now pass correctly. Companion regression test added in open PR [#86578](https://github.com/NousResearch/hermes-agent/pull/86578).
- **[#83785 — fix(gateway/desktop): durable row-id addressing for rewind truncation (#82959)](https://github.com/NousResearch/hermes-agent/pull/83785) [CLOSED — P0]** — Salvaged fix for rewind/edit/regenerate truncation using durable SQLite `row_id` addressing, including an alignment guard and dedup/heal fallback path.
- **[#86572 — fix(agent): escalate repeated stream-drop stalls to the fallback chain](https://github.com/NousResearch/hermes-agent/pull/86572) [CLOSED]** — After a real OpenRouter outage for `anthropic/claude-sonnet-4.6` (2026-08-14 ~22:45–23:30 UTC), repeated mid-stream deaths now escalate to the fallback chain instead of returning `PARTIAL_STREAM_STUB_ID` stubs.
- **[#84859 — fix(browser): strip parent venv pointers from browser-use subprocess env](https://github.com/NousResearch/hermes-agent/pull/84859) [CLOSED]** — Fixes `pydantic_core` ABI mismatch crashes in browser-use by cleaning inherited `PYTHONPATH`/venv pointers.
- **[#86374 — fix(tui): prepend Hermes tool dirs to slash_worker PATH](https://github.com/NousResearch/hermes-agent/pull/86374) [CLOSED]** — Dashboard/Desktop-spawned `slash_worker` processes can now resolve Hermes-managed CLIs (browser-use, uvx, uv); resolves issue #83845.
- **[#86562 — feat(skills): Phase 0+1.3 + Phase 1.1 — data-engineering core, skill registry CI, 106 social-media skills](https://github.com/NousResearch/hermes-agent/pull/86562) [CLOSED as duplicate]** — Superseded by the still-open **[#86557](https://github.com/NousResearch/hermes-agent/pull/86557)**, which carries the full skills ecosystem expansion: new categories (`data-engineering`, `cloud-native`, `security`, `social-media`, `mobile`, `meta`), SKILL.md frontmatter schema, registry CI, and 106 social-media skills.

### 🚧 Notable Open PRs Advancing

- [#86183 — fix(state): verify and self-repair FTS5 indexes on engine change](https://github.com/NousResearch/hermes-agent/pull/86183)
- [#86433 — feat(zai): add GLM-5.3 support](https://github.com/NousResearch/hermes-agent/pull/86433) (743B base, 1M context, rides existing 5.2 wiring)
- [#86355 — feat(gateway): route Matrix project sessions](https://github.com/NousResearch/hermes-agent/pull/86355)
- [#64384 — fix(codex): normalize raw Responses stream payloads](https://github.com/NousResearch/hermes-agent/pull/64384)
- [#70375 — fix(desktop): redact secrets in local backend log ring](https://github.com/NousResearch/hermes-agent/pull/70375)
- [#67454 — feat: add cross-process turn serialization with DB-level leases](https://github.com/NousResearch/hermes-agent/pull/67454)

---

## 4. Community Hot Topics

The most discussion-heavy items reveal three underlying community concerns: **architecture governance, multi-tenancy, and desktop reliability.**

- **[#78647 — All Gods Must Die epic (78 comments, CLOSED)](https://github.com/NousResearch/hermes-agent/issues/78647)** — The largest conversation today, now resolved. Community invested heavily in the god-file sharding effort; closure is a strong trust signal.

- **[#34352 — Solving the Multi-Tenant Hermes Problem (31 comments, 3 👍)](https://github.com/NousResearch/hermes-agent/issues/34352)** — High engagement from a user running a production multi-tenant deployment for months. Core complaint: **memory operations bypass the hook system entirely**, making tenant isolation impossible without forking core. This is a serious architectural ask with production backing.

- **[#66616 — Skills index is stale or degraded (31 comments)](https://github.com/NousResearch/hermes-agent/issues/66616)** — Automated freshness probe reports the Skills Hub index is 29.8h old (limit 26h). Bot-reported infrastructure issue, but the comment volume suggests maintainers and community are actively discussing the CI/build pipeline.

- **[#83683 — Desktop restart reaps the live gateway but never relaunches it (27 comments, P1)](https://github.com/NousResearch/hermes-agent/issues/83683)** — Windows regression where WeChat/QQ/Telegram go silent after restart. High urgency because messaging silence is user-visible immediately.

- **[#4064 — [UX] Enable mouse support in CLI (13 comments)](https://github.com/NousResearch/hermes-agent/issues/4064)** — Long-standing UX feature request (since March) for cursor positioning, selection, and scrolling in the prompt_toolkit TUI.

- **[#85622 — External memory provider suppresses built-in MEMORY.md/USER.md injection (10 comments)](https://github.com/NousResearch/hermes-agent/issues/85622)** — Contradicts documented "additive, never replacing" contract; raises trust concerns about memory safety.

---

## 5. Bugs & Stability

### P0 — Critical

- **[#85825 — memory replace/remove silently overwrites entire MEMORY.md on Windows (CRLF) — CLOSED](https://github.com/NousResearch/hermes-agent/issues/85825)** — On Windows, CRLF line-ending mismatch caused `replace`/`remove`/`add` to destroy entire memory files. **Fix status: resolved/closed** — highest-severity issue today, and it was handled quickly.

### P1 — High

- **[#83683 — Desktop restart reaps live gateway, never relaunches (WeChat/QQ/Telegram go silent) — regression](https://github.com/NousResearch/hermes-agent/issues/83683)** — Windows desktop app force-kills the messaging gateway on restart. Regression vs. prior versions. **No fix PR visible yet; needs attention.**

### P2 — Medium

- **[#86558 — `hermes gateway restart` crashes with raw PermissionError on XDG_RUNTIME_DIR leak](https://github.com/NousResearch/hermes-agent/issues/86558)** — `su/sudo -u` without login shell leaves another user's XDG_RUNTIME_DIR in env, causing unhandled crash.
- **[#30449 — API server: `reasoning_content`/`reasoning_effort` never reach OpenAI-compatible SSE stream](https://github.com/NousResearch/hermes-agent/issues/30449)** — DeepSeek V4 backend reasoning content dropped; Open WebUI affected.
- **[#84969 — Persistent Docker reuse ignores immutable config drift](https://github.com/NousResearch/hermes-agent/issues/84969)** — `docker run` config not fingerprinted; config changes don't take effect on reused containers.
- **[#85834 — Desktop per-profile SSH remote resume fails "Session not found" while transcript loads](https://github.com/NousResearch/hermes-agent/issues/85834)** — Profile routing missing on resume/detail path.
- **[#86510 — `read_file`: total_lines off-by-one for files without trailing newline](https://github.com/NousResearch/hermes-agent/issues/86510)** — `wc -l` semantics miscount final unterminated line.
- **[#86513 — file_tools stat HOST filesystem for remote/container backends](https://github.com/NousResearch/hermes-agent/issues/86513)** — Read dedup/staleness checks hit wrong filesystem.
- **[#86566 — terminal timeout exceptions wrongly retried (PR open)](https://github.com/NousResearch/hermes-agent/pull/86566)** — Timeout classified as transient; fix PR now classifies as non-retriable, returns 124.

### P3 — Lower

- **[#79625 — Desktop sessions ignore `checkpoints.enabled`](https://github.com/NousResearch/hermes-agent/issues/79625)**
- **[#68876 — Desktop provider/model switch leaves UI out of sync](https://github.com/NousResearch/hermes-agent/issues/68876)**
- **[#86565 — Desktop status dot stays blue while blocked on approval](https://github.com/NousResearch/hermes-agent/issues/86565)**
- **[#86509 — `_budget_grace_call` is dead code](https://github.com/NousResearch/hermes-agent/issues/86509)** — graceful-budget mechanism can never trigger.
- **[#83845 — Dashboard slash_worker PATH omits venv/user bin — CLOSED](https://github.com/NousResearch/hermes-agent/issues/83845)** — Fixed via PR #86374.

**Stability assessment:** Two P0 incidents (memory corruption on Windows, rewind truncation) were both fixed and merged today. The P1 desktop gateway regression (#83683) remains the main unresolved high-severity item.

---

## 6. Feature Requests & Roadmap Signals

### Discord Omniscience Campaign (#79564) — Major Roadmap Push
A rapid-fire series of new feature issues, all interlocked with the meta-issue, each backed by passing test suites:

- [#86535 — I3: slash-command autocomplete option fidelity](https://github.com/NousResearch/hermes-agent/issues/86535) (16 tests)
- [#86536 — I4: component authorization seam](https://github.com/NousResearch/hermes-agent/issues/86536) (19 tests)
- [#86537 — V1: native voice-message validation](https://github.com/NousResearch/hermes-agent/issues/86537) (26 tests)
- [#86538 — W3: profile routing acceptance matrix](https://github.com/NousResearch/hermes-agent/issues/86538) (9 tests)
- [#86539 — R3: recovery cursor correctness](https://github.com/NousResearch/hermes-agent/issues/86539) (21 tests)
- [#86549 — I1: command registry sync parity](https://github.com/NousResearch/hermes-agent/issues/86549)
- [#86521 — T5: thread permission correctness](https://github.com/NousResearch/hermes-agent/issues/86521)
- PR [#86440 — M1: structured inbound message model](https://github.com/NousResearch/hermes-agent/pull/86440) (12/12 tests pass)

**Prediction:** Discord v10/parity work is clearly the current integration focus and is very likely to land in the next minor release.

### Other Notable Feature Demand

- **[#34352 — Multi-tenant support](https://github.com/NousResearch/hermes-agent/issues/34352)** — 31 comments; could become a P1 roadmap item given production demand.
- **[#67798 — Lifecycle hooks as shared runtime contract](https://github.com/NousResearch/hermes-agent/issues/67798)** — 10 comments; gateway-owned hooks should be runtime-owned across all execution surfaces.
- **[#4064 — Mouse support for CLI](https://github.com/NousResearch/hermes-agent/issues/4064)** — Old request (Mar 30), config-toggle proposed; candidate for UX-focused release.
- **[#86561 — Move existing sessions into Projects](https://github.com/NousResearch/hermes-agent/issues/86561)** — Marked duplicate; association/move feature requested.
- **[#85159 — Route `file://` links through `#media:` in Desktop chat](https://github.com/NousResearch/hermes-agent/issues/85159)** — Windows local-file links currently render as `[blocked]`.
- **[#86576 — Strip encrypted reasoning tokens on cross-provider delegation](https://github.com/NousResearch/hermes-agent/issues/86576)** — Closed; provider-switch context pollution fixed/decided.
- **Skills ecosystem expansion** — PRs [#86557](https://github.com/NousResearch/hermes-agent/pull/86557) and [#86575](https://github.com/NousResearch/hermes-agent/pull/86575) (secret-scanner security skill) point to a major skills-library growth phase.

---

## 7. User Feedback Summary

**Pain points expressed by users:**

- **Windows memory corruption trauma** (#85825): A P0 bug that could silently erase an entire `MEMORY.md`/`USER.md` caused visible alarm; it was fixed same-day. Reliability trust hinges on such rapid response.
- **Messaging gateway going silent** (#83683): Users on WeChat/QQ/Telegram experience total communication blackout after every desktop restart — high frustration, regression-labeled.
- **Multi-tenancy blocker** (#34352): A production user reports running a months-long fork to achieve tenant isolation; strong desire for first-class support rather than core forks.
- **Documented contract violations** (#85622): External memory provider contradicts its own "additive, never replacing" docs; users expect documented memory safety guarantees to hold.
- **Feature parity gaps** (#79564 Discord issues): Active users are filing small, well-tested sub-issues — a sign of an engaged power-user community contributing directly to quality.
- **Desktop/CLI UX inconsistencies** (#68876, #79625, #86565): Session state, checkpoints, and model-switch sync issues in the desktop app are recurring themes, indicating the desktop surface still lags the CLI in maturity.

**Satisfaction signals:** The god-file epic's completion (#78647) was well-received (78 comments, mostly constructive). The triage velocity — two P0 fixes merged same-day — demonstrates strong maintainer responsiveness.

---

## 8. Backlog Watch

Items needing maintainer attention (high engagement or long open time without resolution):

- **[#34352 — Solving the Multi-Tenant Hermes Problem (31 comments, since 2026-05-29, needs-decision)](https://github.com/NousResearch/hermes-agent/issues/34352)** — The single most important unanswered architectural question. Production-proven fix described in detail; awaits maintainer decision.
- **[#64384 — fix(codex): normalize raw Responses stream payloads (since 2026-07-14, P2)](https://github.com/NousResearch/hermes-agent/pull/64384)** — Open for over a month with no merge; codex streaming remains broken without it.
- **[#67454 — cross-process turn serialization with DB-level leases (since 2026-07-19, needs-decision)](https://github.com/NousResearch/hermes-agent/pull/67454)** — Important concurrency feature; awaiting review/decision.
- **[#67798 — Lifecycle hooks as shared runtime contract (10 comments, since 2026-07-20, needs-decision)](https://github.com/NousResearch/hermes-agent/issues/67798)** — Architectural debt across execution surfaces; unresolved.
- **[#79625 — Desktop sessions ignore `checkpoints.enabled` (since 2026-08-05, P2)](https://github.com/NousResearch/hermes-agent/issues/79625)** — Silent checkpoint disablement is a data-loss-adjacent concern; no fix PR yet.
- **[#4064 — Mouse support in CLI (since 2026-03-30)](https://github.com/NousResearch/hermes-agent/issues/4064)** — 4.5 months old with 13 comments; small scope, clear UX win — good candidate for a quick win.

---

*Digest generated from Hermes Agent GitHub activity data for 2026-08-15. Data: 50 issues, 50 PRs, 0 releases.*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-08-15

## 1. Today's Overview
PicoClaw shows moderate activity over the past 24 hours with 3 issues updated and 9 pull requests touched, though no new releases were published. The most significant signal is an active fix for the MCP server hang bug (#3269), with a dedicated PR now open. Five PRs were closed/merged, including several stale-bot cleanups, a DingTalk image inbound fix, and a seahorse content-leak fix. Maintainer attention appears to be shifting toward stability and channel parity, while older feature/refactor PRs remain pending. Overall, the project is healthy but has a growing backlog of longer-lived open PRs that may need triage.

## 2. Releases
No new releases were published in the last 24 hours.

## 3. Project Progress
Five PRs were closed/merged in the last 24 hours (several marked as `[stale]`, likely via stale bot):

- **#3270 — [CLOSED] feat: add DashScope TTS provider and WeChat audio file sending**  
  Adds Alibaba Cloud DashScope TTS support and WeChat audio sending.  
  https://github.com/sipeed/picoclaw/pull/3270

- **#3271 — [CLOSED] chore(providers): update default model names to 2026-07 latest**  
  Refreshes model IDs across 9 providers, including OpenAI and Anthropic.  
  https://github.com/sipeed/picoclaw/pull/3271

- **#3279 — [CLOSED] fix(seahorse): prevent tool-call format leakage into LLM summaries**  
  Fixes a bug where raw tool-call formats could leak into user-visible messages.  
  https://github.com/sipeed/picoclaw/pull/3279

- **#3283 — [CLOSED] fix(dingtalk): support picture/image message inbound**  
  Adds image message handling for DingTalk with token caching and graceful fallback.  
  https://github.com/sipeed/picoclaw/pull/3283

- **#3303 — [CLOSED] build(deps): bump actions/stale from 10 to 11**  
  Dependency bump for the stale-bot GitHub Action.  
  https://github.com/sipeed/picoclaw/pull/3303

No major feature merge stands out aside from the above; the closed items are mostly incremental fixes, dependency maintenance, and stale cleanup.

## 4. Community Hot Topics
The most active discussion is clearly the MCP hang bug:

- **#3269 — [OPEN] [BUG] MCP server connection failure hangs agent loop**  
  👁 5 comments, 1 👍  
  Users report that an unreachable/broken MCP server causes the agent loop to exit and the PicoClaw chat interface to stop replying entirely. This is a high-impact reliability issue.  
  https://github.com/sipeed/picoclaw/issues/3269

Two stale-closed issues also generated mild discussion:

- **#3308 — [CLOSED] Code review: concurrency hazards, goroutine leaks, memory/speed optimizations**  
  2 comments  
  Raises concerns about SeaHorse, channel manager, and hooks. Closed as stale, but the underlying concerns may still be actionable.  
  https://github.com/sipeed/picoclaw/issues/3308

- **#3307 — [CLOSED] Feature: session list/switch command for Telegram**  
  2 comments  
  Requests Telegram parity with the Web UI session management system. Closed as stale, but signals a real channel-parity gap.  
  https://github.com/sipeed/picoclaw/issues/3307

The underlying pattern: users care about reliability of external integrations and feature parity across messaging channels.

## 5. Bugs & Stability
Bugs are ranked by severity and current status:

1. **High — MCP server connection failure hangs the agent loop**  
   Issue #3269 remains open and directly affects user-facing reliability. A fix PR is now available.  
   https://github.com/sipeed/picoclaw/issues/3269  
   Fix: https://github.com/sipeed/picoclaw/pull/3337

2. **Medium — Exec tool ignores per-run timeout and boolean options**  
   PR #3319 is open to fix the `exec` tool, where the advertised `timeout` argument is ignored and `background`/`pty` are incorrectly typed as strings.  
   https://github.com/sipeed/picoclaw/pull/3319

3. **Medium — Tool-call format leakage in seahorse summaries**  
   PR #3279 was closed/merged and addresses this bug class in `partsToReadableContent`.  
   https://github.com/sipeed/picoclaw/pull/3279

4. **Low/unverified — Concurrency hazards and goroutine leaks**  
   Issue #3308 was closed as stale, but it flagged potential concurrency/memory issues. No current fix PR exists.  
   https://github.com/sipeed/picoclaw/issues/3308

## 6. Feature Requests & Roadmap Signals
The clearest roadmap signals from recent activity:

- **MCP connection resilience** — #3337 aims to prevent agent-loop hangs on MCP failure. This is likely to land soon given the severity of #3269.
- **Exec tool configurability** — #3319 improves per-run timeout and boolean option handling. This is a practical developer-facing improvement.
- **Session management outside Web UI** — #3307 asked for Telegram session list/switch commands. It was closed as stale, but may be reconsidered if channel parity becomes a priority.
- **Configurable model fallback chain** — PR #3200 remains open and would let users configure fallback models via the web UI/backend API. It has been open since July 1 and may need maintainer attention.
- **DeltaChat cleanup/refactor** — PR #3222 removes legacy features and improves documentation/docs links. This is an older open PR that could still be merged.

## 7. User Feedback Summary
Real user pain points in the last 24 hours include:

- **MCP failures are destructive**: Users lose the chat interface entirely when an upstream MCP server fails (#3269). This is the most serious complaint and is backed by a fix attempt.
- **Telegram users lack session management**: The Web UI has session history controls, but Telegram users cannot list or switch sessions (#3307). This suggests cross-channel UX inconsistency.
- **Internal code quality concerns**: The stale-closed review (#3308) pointed at goroutine leaks and concurrency hazards, indicating some contributors are thinking about long-term stability and memory usage, especially important for low-resource hardware.

Overall sentiment is mixed: users appreciate the project’s ambitions but are sensitive to reliability issues and missing feature parity across chat platforms.

## 8. Backlog Watch
Several important open PRs/issues need maintainer attention:

- **#3337 — Fix MCP failure hangs agent loop**  
  Newly opened, directly fixes the most reported bug. Needs review and testing.  
  https://github.com/sipeed/picoclaw/pull/3337

- **#3200 — [OPEN] feat(models): configurable default fallback chain**  
  Open since 2026-07-01, no recent maintainer activity.  
  https://github.com/sipeed/picoclaw/pull/3200

- **#3222 — [OPEN] refactor(deltachat): cleanup implementation, documentation -200LOC**  
  Open since 2026-07-03. Substantial cleanup, still pending.  
  https://github.com/sipeed/picoclaw/pull/3222

- **#3319 — [OPEN] fix(tools): honor exec timeout and boolean run options**  
  Open since 2026-08-07. Fixes a real bug, awaiting review.  
  https://github.com/sipeed/picoclaw/pull/3319

- **#3269 — [OPEN] MCP hang bug**  
  Open since 2026-07-20, now with a proposed fix. Should be prioritized.  
  https://github.com/sipeed/picoclaw/issues/3269

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-08-15

## 1. Today's Overview

As of 2026-08-15, NanoClaw shows a moderately active maintenance-and-hardening cycle: 2 issues and 11 pull requests were updated in the last 24 hours, with 3 PRs moving to closed/merged status and 8 remaining open. No new releases were published. The current activity is heavily weighted toward setup reliability, container/runtime compatibility, and small bug fixes rather than large new features. Overall project health appears stable, with an active core team running CI/signature pipeline tests via intentionally unmerged "live-fire" PRs. The main user-facing signals are installation friction on certain Node.js and CPU configurations.

---

## 2. Releases

No new releases were published in the last 24 hours. The latest release line is unchanged, so there are no new changelogs, breaking changes, or migration notes to report.

---

## 3. Project Progress

Three PRs moved to closed/merged status in the last 24 hours:

- **#3243 — [core-team] verify-agent-image: arming auto-merge is not a verdict**  
  This is the most notable actual fix among the closed PRs. It changes the CI verification job so that "Enable auto-merge" failure no longer incorrectly determines the job's conclusion. Previously, auto-merge failures on draft PRs, disabled `allow_auto_merge`, or transient API errors could be mistaken for image verification failures.  
  [nanocoai/nanoclaw PR #3243](https://github.com/nanocoai/nanoclaw/pull/3243)

- **#3244 — DO NOT MERGE — live-fire the signature approver (take 2)**  
  Draft test PR, intentionally closed unmerged. Validates that the signature-approver chain now runs green on drafts.  
  [nanocoai/nanoclaw PR #3244](https://github.com/nanocoai/nanoclaw/pull/3244)

- **#3242 — DO NOT MERGE — live-fire test of the signature approver**  
  Draft test PR, intentionally closed unmerged. Tested the full verify → approve-agent-image → independent cosign verify → approving review chain.  
  [nanocoai/nanoclaw PR #3242](https://github.com/nanocoai/nanoclaw/pull/3242)

These three PRs together indicate progress on hardening the agent-image signing/verification pipeline, even though two were deliberately not merged.

---

## 4. Community Hot Topics

Comment/reaction data is sparse in this snapshot — all listed issues show 0 comments and 0 👍 reactions, and PR comment counts are not populated. Using recency and thematic clustering, the most active areas are:

- **Setup/node-version handling**  
  [Issue #3248](https://github.com/nanocoai/nanoclaw/issues/3248) and its accompanying fix PR [PR #3249](https://github.com/nanocoai/nanoclaw/pull/3249) are the newest point of focus. The underlying user need is straightforward: `setup.sh` should reliably handle environments where Node.js exists but is too old, instead of failing through a broken helper path.

- **Container/CPU compatibility**  
  [Issue #3245](https://github.com/nanocoai/nanoclaw/issues/3245) reports that the default prebuilt agent image contains a Bun binary requiring AVX2, causing SIGILL on CPUs without it. This reflects a broader user need for portable default images, especially on lower-power Intel Atom/Tremont-class hardware.

- **Inbound attachment handling**  
  [PR #2427](https://github.com/nanocoai/nanoclaw/pull/2427) ("fix: attachment issues") and [PR #2752](https://github.com/nanocoai/nanoclaw/pull/2752) ("stage inbound attachments that expose only a url — Discord") both target the same user pain point: attachments not arriving in a readable form for the agent. These are long-open and should be considered high-signal community needs.

---

## 5. Bugs & Stability

Ranked by severity:

1. **Critical/High — SIGILL on CPUs without AVX2**  
   [Issue #3245](https://github.com/nanocoai/nanoclaw/issues/3245)  
   The default hardened image ("recommended by the wizard") ships a Bun binary built for non-baseline x64, causing `SIGILL` on CPUs without AVX2, e.g. Intel Tremont/Elkhart Lake Atoms. No dedicated fix PR is present in this batch.

2. **Medium-High — `setup.sh` "Node missing or too old" branch is broken**  
   [Issue #3248](https://github.com/nanocoai/nanoclaw/issues/3248)  
   `setup.sh` correctly detects an existing Node that is too old, but routes it to `install-node.sh`, which short-circuits on any existing Node. The result is that the "too old" case is not actually handled.  
   **Fix PR exists:** [PR #3249](https://github.com/nanocoai/nanoclaw/pull/3249)

3. **Medium — Malformed cron strings re-error every sweep tick**  
   [PR #3247](https://github.com/nanocoai/nanoclaw/pull/3247)  
   When cron-parser rejects a recurrence string such as `0 21-5 * * *`, the scheduler logs the error but leaves the bad row in place, causing repeated failures. The fix retires malformed cron strings instead.

4. **Medium — Windows orphan cleanup silently no-ops**  
   [PR #3246](https://github.com/nanocoai/nanoclaw/pull/3246)  
   `cleanupOrphans()` uses POSIX single quotes in a shell-mediated `execSync`, which breaks under `cmd.exe` on Windows. The cleanup silently does nothing. The PR fixes quoting/compatibility.

5. **Medium — Inbound attachments not reaching the agent in readable form**  
   [PR #2427](https://github.com/nanocoai/nanoclaw/pull/2427) and [PR #2752](https://github.com/nanocoai/nanoclaw/pull/2752)  
   PR #2752 specifically addresses Discord attachments: pasted text becomes `message.txt` and images become `[file: ...]` / `[image: ...]` references with no bytes and no path, so the agent cannot use them. Bug fix PRs are open but not yet merged.

6. **Low — Docs still reference retired data/env mirror**  
   [PR #3230](https://github.com/nanocoai/nanoclaw/pull/3230)  
   Skill-removal docs point to a retired mirror; this is a documentation/stability cleanup.

---

## 6. Feature Requests & Roadmap Signals

The clearest roadmap signal is a new **Dial channel integration**, represented by two open feature PRs:

- **#3041 — feat(channels): add Dial channel adapter (SMS + AI voice calls)**  
  [nanocoai/nanoclaw PR #3041](https://github.com/nanocoai/nanoclaw/pull/3041)

- **#3050 — feat(setup): add Dial to the channel picker + wizard/skills**  
  [nanocoai/nanoclaw PR #3050](https://github.com/nanocoai/nanoclaw/pull/3050)

Both PRs have been open since 2026-07-14 and were updated in the last 24h, suggesting continued work rather than abandonment. If merged, the next NanoClaw version is likely to include Dial as a supported channel for SMS and AI voice calls.

No explicit user feature-request issues appear in this snapshot; current roadmap pressure is coming from contributor-driven PRs and setup/runtime reliability complaints.

---

## 7. User Feedback Summary

User feedback in this batch is predominantly negative/pain-point-driven, with no explicit praise or satisfaction signals in the available data. The most common underlying concerns are:

- **Setup should work in imperfect environments.** Users expect `setup.sh` to handle both "Node missing" and "Node too old" correctly.  
  [Issue #3248](https://github.com/nanocoai/nanoclaw/issues/3248)

- **Default images should be portable.** A user on AVX2-less Intel hardware hit an immediate crash with the recommended hardened image.  
  [Issue #3245](https://github.com/nanocoai/nanoclaw/issues/3245)

- **Agents should receive attachments with actual bytes or paths.** Discord attachment handling currently gives the agent unusable placeholders.  
  [PR #2752](https://github.com/nanocoai/nanoclaw/pull/2752), [PR #2427](https://github.com/nanocoai/nanoclaw/pull/2427)

- **Windows support needs to be a first-class path.** Silent no-op cleanup on Windows undermines trust in container-runtime hygiene.  
  [PR #3246](https://github.com/nanocoai/nanoclaw/pull/3246)

---

## 8. Backlog Watch

These open PRs are important and have been waiting for a relatively long time; they were all touched in the last 24h but remain unresolved:

- **#2427 — fix: attachment issues**  
  Created 2026-05-12. Addresses issue #2426. Long-running blocker for attachment reliability.  
  [nanocoai/nanoclaw PR #2427](https://github.com/nanocoai/nanoclaw/pull/2427)

- **#2752 — fix: stage inbound attachments that expose only a url (Discord)**  
  Created 2026-06-12. Fixes Discord attachments never reaching the agent in readable form.  
  [nanocoai/nanoclaw PR #2752](https://github.com/nanocoai/nanoclaw/pull/2752)

- **#3050 — feat(setup): add Dial to the channel picker + wizard/skills**  
  Created 2026-07-14. Part of the Dial channel feature set.  
  [nanocoai/nanoclaw PR #3050](https://github.com/nanocoai/nanoclaw/pull/3050)

- **#3041 — feat(channels): add Dial channel adapter (SMS + AI voice calls)**  
  Created 2026-07-14. Companion feature PR to #3050.  
  [nanocoai/nanoclaw PR #3041](https://github.com/nanocoai/nanoclaw/pull/3041)

These PRs span 3 months, 2 months, and 1 month respectively. If they are still healthy, they are strong candidates for maintainer review and decision — either move to merge or provide explicit guidance.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest — 2026-08-15

## 1. Today's Overview

NullClaw saw minimal activity on 2026-08-15: no issues were updated, no releases were published, and one pull request was closed/merged. The only PR, #986, adds a `memory.database_path` configuration option for SQLite-backed primary memory engines. This is a small, focused change that improves deployment flexibility, especially for read-only workspace environments. Overall project health appears stable, with no open issues, no open PRs, and no reported bugs in the monitored window.

## 2. Releases

No new releases were published in the last 24 hours.

## 3. Project Progress

- **PR #986 — [CLOSED] GEN-548: make SQLite memory database path configurable**  
  Author: gently-whitesnow  
  Created: 2026-08-14 | Updated: 2026-08-14  
  Link: [nullclaw/nullclaw PR #986](https://github.com/nullclaw/nullclaw/pull/986)  

  This PR introduces a new `memory.database_path` setting for SQLite-backed primary memory engines. Key points:
  - Adds `memory.database_path` as an optional configuration.
  - Preserves the existing default `<workspace>/memory.db` location when the setting is empty.
  - Resolves relative paths from the workspace directory.
  - Accepts absolute paths, which is useful for read-only workspace deployments.
  - Includes documentation for the new setting.

This change likely advances the project’s configuration flexibility and operational deployment story.

## 4. Community Hot Topics

No issues or PRs with significant comments or reactions were active today. The only updated PR, #986, had no recorded comment or reaction data. The underlying need behind the PR appears to be **deployment configurability** — allowing operators to position SQLite memory databases outside the default workspace path, especially in environments where the workspace is read-only.

## 5. Bugs & Stability

No bugs, crashes, or regressions were reported in the last 24 hours. There are no stability-related fixes currently pending or merged today.

## 6. Feature Requests & Roadmap Signals

The merged/closed PR #986 is the clearest roadmap signal today: **configurable database paths for memory engines**. The inclusion of `memory.database_path` suggests the next release will support:

- Custom SQLite database locations.
- Relative path resolution from the workspace.
- Absolute paths for read-only deployments.

Future related work may include similar configurability for other persistent components or additional storage engine options.

## 7. User Feedback Summary

No direct user feedback or issue comments were captured in the last 24 hours. Based on PR #986, the implicit pain point is the fixed default location `<workspace>/memory.db`, which is not suitable for all deployment scenarios. Users appear to want:

- Storing persistent memory data outside the ephemeral workspace.
- Explicit control over database paths.
- Compatibility with read-only filesystem deployments.

Since the PR was closed/merged, this feedback appears to have been addressed positively.

## 8. Backlog Watch

There are no open issues or open pull requests in the monitored data. No long-unanswered items require maintainer attention at this time.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-08-15

## 1. Today's Overview

IronClaw saw heavy activity in the last 24 hours: **25 issues updated** (16 open, 9 closed) and **47 PRs updated** (24 open, 23 merged/closed), with **no new releases**. The day was dominated by three workstreams: the week-long QA bug-bash on the Railway `ironclaw-qa-testing-libsql` instance (three new P2 reports), the **unbound-turns prepared-context switchover** train ([#7562](https://github.com/nearai/ironclaw/pull/7562) closed, [#7634](https://github.com/nearai/ironclaw/pull/7634) open), and the post-1.2.0 release merge back into `main` ([#7657](https://github.com/nearai/ironclaw/pull/7657)). Nine issues closed, including two epics ([#7414](https://github.com/nearai/ironclaw/issues/7414) dogfooding/QA bug fixing, [#7520](https://github.com/nearai/ironclaw/issues/7520) retiring superseded WebUI surfaces) and the structured-execution-spec work ([#7532](https://github.com/nearai/ironclaw/issues/7532)) underpinning the v1.3.0 automation-reliability epic. Project health is strong: high merge velocity, active bug-bash-driven QA coverage, and a coherent v1.3.0 roadmap forming around automations, pluggable memory, and the ACP harness executor.

## 2. Releases

No new releases in the last 24 hours. The existing **IronClaw 1.2.0** release line was merged back into `main` via [#7657](https://github.com/nearai/ironclaw/pull/7657), carrying state-preserving 1.0/1.1→1.2 startup migrations, Windows filesystem/smoke fixes, clean Windows JSON output, and release artifact upgrade canaries. A follow-up open PR ([#7663](https://github.com/nearai/ironclaw/pull/7663)) forward-ports the independently validated 1.2 fixes without the legacy migration path.

## 3. Project Progress

Merged/closed PRs in the last 24h:

**Architecture / runtime**
- [#7562](https://github.com/nearai/ironclaw/pull/7562) (closed, XL) — **unbound-turns base train**: design docs + full phase-1 implementation (prepared-context accept door, unbound run lane, kernel binding-ref deletion). The stacked [#7634](https://github.com/nearai/ironclaw/pull/7634) completes the switchover with a 71-clause conformance audit of both design docs.
- [#7657](https://github.com/nearai/ironclaw/pull/7657) (closed, XL) — merged the validated `release/2026-08-11` 1.2.0 line back into `main`.
- [#7652](https://github.com/nearai/ironclaw/pull/7652) (closed, XL) — **perf/stress**: measured a production-wired canonical turn (10 tool calls, 11 model attempts, durable events, heartbeats) plus idle-process overhead — the Tier 0 regression harness for the DB write-pressure epic ([#7592](https://github.com/nearai/ironclaw/issues/7592), closed).

**Messaging / auth**
- [#7658](https://github.com/nearai/ironclaw/pull/7658) (closed, M) — Telegram: recognize the 2FA gate on migrated DCs and say where login codes arrive; fixes first-day linked-device QA defects.
- [#7665](https://github.com/nearai/ironclaw/pull/7665) (closed, L) — auth: support origin-scoped hosted MCP OAuth for MKT1, preserving the admitted resource through manifest persistence, DCR, token exchange, and refresh.

**Extensions / WebUI**
- [#7668](https://github.com/nearai/ironclaw/pull/7668) (closed, XL) — surface provider auth diagnostics through WASM, extension-tool ABI, capability, runtime-gate, and durable gate-record paths so the next model turn receives actionable 401 context.
- [#7666](https://github.com/nearai/ironclaw/pull/7666) (closed, XL) — "tell the truth" on extension cards/install results: device-link installs direct users to the Web UI link step; addresses Slack UI-state report [#7660](https://github.com/nearai/ironclaw/issues/7660).

**CI / tooling**
- [#7655](https://github.com/nearai/ironclaw/pull/7655) (closed, XS) — re-pinned Slack/Telegram integration coverage floors to observed reality from main's own gate output.

Also closed today: [#7569](https://github.com/nearai/ironclaw/issues/7569) shared `SearchField`, [#7565](https://github.com/nearai/ironclaw/issues/7565) i18n coverage on exposed WebUI routes, [#7532](https://github.com/nearai/ironclaw/issues/7532) structured execution specs, [#7592](https://github.com/nearai/ironclaw/issues/7592) DB write measurement harness, [#7183](https://github.com/nearai/ironclaw/issues/7183) per-user LLM model selection, [#6869](https://github.com/nearai/ironclaw/issues/6869) DOCX corruption, and epics [#7414](https://github.com/nearai/ironclaw/issues/7414) / [#7520](https://github.com/nearai/ironclaw/issues/7520).

## 4. Community Hot Topics

Available comment/reaction data is sparse (most items show 0 comments; PR comment counts are not captured), so activity clusters are the better signal:

- **Automation-reliability epic — [#6879](https://github.com/nearai/ironclaw/issues/6879)** — the only issue with reported comments (1). Open since 2026-07-29, it has spawned four new v1.3.0 sub-issues this cycle: [#7644](https://github.com/nearai/ironclaw/issues/7644) (verify a structured automation once before arming), [#7645](https://github.com/nearai/ironclaw/issues/7645) (pin an LLM model per execution contract), [#7646](https://github.com/nearai/ironclaw/issues/7646) (preflight grants + scoped standing approval leases), and [#7647](https://github.com/nearai/ironclaw/issues/7647) (deterministic no-delivery outcome). PR [#7651](https://github.com/nearai/ironclaw/pull/7651) already implements suppression. **Underlying need:** unattended scheduled runs must be deterministic, grant-checked, and model-pinned — not "hit-or-miss" turns that execute as plain interactive chat.
- **Unbound-turns train — [#7562](https://github.com/nearai/ironclaw/pull/7562) / [#7634](https://github.com/nearai/ironclaw/pull/7634)** — the largest active change (both XL, core contributor). **Underlying need:** every follow-up becomes a complete, self-contained prepared-context turn rather than a continuation of a prior binding.
- **QA bug-bash reports (joe-rlo)** — [#7660](https://github.com/nearai/ironclaw/issues/7660) (Slack UI lies about connection state), [#7662](https://github.com/nearai/ironclaw/issues/7662) (MP4 attachment rejection), [#7659](https://github.com/nearai/ironclaw/issues/7659) (cross-user extension-state leakage). These represent the sharpest user-visible edges of the messaging and multi-user surfaces.

## 5. Bugs & Stability

Ranked by severity (P2 QA reports all target the `ironclaw-qa-testing-libsql` Railway instance):

1. **#7659 — Extensions installed by other users visible on Registry page** ([link](https://github.com/nearai/ironclaw/issues/7659)) — [bug_bash_P2, qa-bug]. Extension state appears to leak between users; a multi-user isolation/privacy concern. No dedicated fix PR yet; related card-truth work landed in [#7666](https://github.com/nearai/ironclaw/pull/7666), but the leak itself remains unaddressed.
2. **#7662 — MP4 attachment fails with `invalid_value (attachments.mime_type)`** ([link](https://github.com/nearai/ironclaw/issues/7662)) — [bug_bash_P2, qa-bug]. Valid `video/mp4` uploads are rejected in Telegram despite correct MIME detection. No fix PR yet.
3. **#7660 — Slack shows "Reconnect" and "Finish Setup" despite active connection** ([link](https://github.com/nearai/ironclaw/issues/7660)) — [bug_bash_P2, qa-bug]. Misleading UI state for a fully functional channel; partially addressed by the "truth on cards" batch in [#7666](https://github.com/nearai/ironclaw/pull/7666).
4. **#7667 — Telegram phone-mode login code hint** ([link](https://github.com/nearai/ironclaw/issues/7667)) — live QA defect: after `PHONE_MIGRATE_1` / successful `auth.sentCode`, codes don't arrive and the hint doesn't reflect `sentCode.type_`. The 2FA-on-migrated-DC half shipped in [#7658](https://github.com/nearai/ironclaw/pull/7658) (closed); the code-arrival hint remains open.
5. **#6869 — DOCX files unreadable by Word** ([link](https://github.com/nearai/ironclaw/issues/6869)) — closed; external report from Davin Basi. Presumed resolved; worth a regression check.

## 6. Feature Requests & Roadmap Signals

Strong v1.3.0 signal from the automations epic: [#7644](https://github.com/nearai/ironclaw/issues/7644) verify-once-before-arming, [#7645](https://github.com/nearai/ironclaw/issues/7645) per-automation model pinning, [#7646](https://github.com/nearai/ironclaw/issues/7646) preflight grants + standing approval leases, and [#7647](https://github.com/nearai/ironclaw/issues/7647) deterministic no-delivery (`[SILENT]`) — all labeled v1.3.0, with PR [#7651](https://github.com/nearai/ironclaw/pull/7651) already open for suppression.

Other feature signals:
- **#7653** — Structured Ask User cards in WebUI ([link](https://github.com/nearai/ironclaw/issues/7653)): OMP-inspired model-facing `ask` tool built on the existing `LoopCompletionKind::AskUserReply`, deliberately not a resumable loop gate.
- **#7664** — Pluggable memory over MCP ([link](https://github.com/nearai/ironclaw/issues/7664)), with Mnesis Core as first consumer; draft provider crate in open PR [#7661](https://github.com/nearai/ironclaw/pull/7661).
- **#7624** — ACP harness executor v0 ([link](https://github.com/nearai/ironclaw/issues/7624)): claude-code as the loop, dev-only yolo mode; experimental PR [#7648](https://github.com/nearai/ironclaw/pull/7648) open.
- **#7656** — Slack-to-Console bridge with deep link + run metadata ([link](https://github.com/nearai/ironclaw/issues/7656)) — closed; likely shipped or on the immediate release path.
- **WebUI polish cluster**: [#7637](https://github.com/nearai/ironclaw/issues/7637) typed design-system component boundary, [#7638](https://github.com/nearai/ironclaw/issues/7638) toast feedback replacing `window.alert()` on thread deletion, [#7639](https://github.com/nearai/ironclaw/issues/7639) shared `InlineNotice`.
- **#7183** — Per-user LLM model selection ([link](https://github.com/nearai/ironclaw/issues/7183)): closed; this externally-originated request (2026-07-23 Champions check-in) should be verified as shipped or explicitly deferred.

**Prediction:** v1.3.0 will ship the full structured-automation stack (validate → pin model → preflight grants → suppress no-result deliveries), the Ask User card, and the first pluggable memory consumer; the ACP harness executor stays experimental behind configuration.

## 7. User Feedback Summary

- **DOCX generation** ([#6869](https://github.com/nearai/ironclaw/issues/6869)): external user Davin Basi reported IronClaw-produced `.docx` files unreadable in Word while ChatGPT/Claude handle the same task. Closed — treat as resolved, but this is a competitive-parity pain point worth a regression guard.
- **Per-user model selection** ([#7183](https://github.com/nearai/ironclaw/issues/7183)): raised by Jeremy Koch (marketing) at the Champions check-in; admin-only model control was a visible limitation for non-admin users. Closed.
- **QA tester experience** (joe-rlo, Railway instance): Slack UI misrepresents connection state ([#7660](https://github.com/nearai/ironclaw/issues/7660)); Telegram MP4 uploads are blocked with no actionable message ([#7662](https://github.com/nearai/ironclaw/issues/7662)); extension registry leaks other users' installations ([#7659](https://github.com/nearai/ironclaw/issues/7659)). These are the top current user-visible frustrations.
- **Telegram linked-device QA** (BenKurrek, 2026-08-14 live QA): phone-mode login codes not delivered to the expected service chat after DC migration; 2FA gate now recognized, but code-arrival messaging is still incomplete ([#7667](https://github.com/nearai/ironclaw/issues/7667)).

## 8. Backlog Watch

Items open 5+ days that need maintainer attention:

- **#6879** — Automation-reliability epic ([link](https://github.com/nearai/ironclaw/issues/6879)): open since 2026-07-29; actively worked but remains the top v1.3.0 delivery risk.
- **#7255** — docs(governance): APDD kit evaluation + proposed scoped integration ([link](https://github.com/nearai/ironclaw/pull/7255)): open since 2026-08-05 from a regular contributor (rdisandro), no recorded review comments; awaiting maintainer response.
- **#7378 / #7379** — doc-truth contract tests and docs-live deployment ([link](https://github.com/nearai/ironclaw/pull/7378), [link](https://github.com/nearai/ironclaw/pull/7379)): PRs 3/5 and 4/5 of the doc-truth train, open since 2026-08-07 from thisisjoshford; likely blocked on review sequencing across a 5-PR series.
- **#7456** — fix(reborn): profile-agnostic durable storage ([link](https://github.com/nearai/ironclaw/pull/7456)): XL, risk medium, open since 2026-08-10; touches tenancy and workspace isolation via typed security envelopes — needs careful, priority review.
- **#7628** — perf(processes): remove heartbeat journal churn ([link](https://github.com/nearai/ironclaw/pull/7628)): open since 2026-08-13; a conservative, independently safe subset of the DB write-pressure epic, ready for merge assessment.
- **#7516** — operator surface for the IronHub agent link ([link](https://github.com/nearai/ironclaw/pull/7516)): XL, open since 2026-08-12 from a **new contributor** (neo-sky); timely review is important to maintain contributor momentum.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-08-15

## 1. Today's Overview

LobsterAI is in a high-velocity maintenance and feature-delivery period. In the last 24 hours, 27 PRs were updated with **22 closed/merged and 5 still open**, while 2 issues remain active — indicating a healthy merge-throughput ratio. A new release **2026.8.14** shipped sidebar enhancements, and the larger **2026.7.30 release branch (67 commits, 264 files, +24,736/−4,253)** was merged into `main` via PR #2498, introducing Team Edition account/quota flows and a Skills/Connectors experience refresh. Maintenance hygiene is improving: several stale PRs from March (e.g., #1228, #1231) were finally merged, though equally old safety/Gemini-URL PRs remain open and stale. Overall, the project shows strong release cadence, responsive bug fixing, and a growing surface area across renderer, cowork, openclaw, and account systems.

## 2. Releases

**LobsterAI 2026.8.14** (released 2026-08-14) — [Releases page](https://github.com/netease-youdao/LobsterAI/releases)

What's Changed:
- **feat(sidebar):** support check-in and banner carousel — [PR #2411](https://github.com/netease-youdao/LobsterAI/pull/2411) by @btc69m979y-dotcom
- **feat(sidebar):** add multi-agent task activity filter — [PR #2418](https://github.com/netease-youdao/LobsterAI/pull/2418) by @liuzhq1986
- Additional sidebar changes (truncated in source data)

No breaking changes or migration notes were recorded for this release.

**Note on 2026.7.30:** The release branch was merged into `main` on 2026-08-14 via [PR #2498](https://github.com/netease-youdao/LobsterAI/pull/2498) — 67 commits ahead, 264 files changed (+24,736/−4,253). It introduces **Team Edition account and quota flows**, refreshes the **Skills and Connectors** experiences, and touches renderer, main, openclaw, cowork, im, artifacts, and Windows platforms. Users should expect these features in the next stable release.

## 3. Project Progress

Merged/closed PRs in the last 24 hours show concentrated work in cowork, openclaw, and account UI:

- **Release integration:** 2026.7.30 merged to `main` with Team Edition flows ([PR #2498](https://github.com/netease-youdao/LobsterAI/pull/2498))
- **Cowork fixes & features:**
  - Keep turn process expanded until an answer exists, preventing misleading empty duration lines after `sessions_yield` ([PR #2499](https://github.com/netease-youdao/LobsterAI/pull/2499))
  - Keep badge popovers within viewport and above later messages ([PR #2496](https://github.com/netease-youdao/LobsterAI/pull/2496))
  - Preview browser-annotation attachments in a dedicated artifact panel view instead of the generic image modal ([PR #2490](https://github.com/netease-youdao/LobsterAI/pull/2490))
- **OpenClaw:** Key `skills.entries` by skill frontmatter `name` so UI enable toggles work when directory/frontmatter names mismatch — a silent-config-failure fix ([PR #2491](https://github.com/netease-youdao/LobsterAI/pull/2491), [PR #2483](https://github.com/netease-youdao/LobsterAI/pull/2483))
- **Account/UI polish:** Credits icon restyled with inline SVG stacked-points artwork ([PR #2494](https://github.com/netease-youdao/LobsterAI/pull/2494)) and color-aligned with account menu icons ([PR #2492](https://github.com/netease-youdao/LobsterAI/pull/2492)); default UI/code font sizes bumped with one-time migration ([PR #2495](https://github.com/netease-youdao/LobsterAI/pull/2495)); improved cowork goal/steer i18n wording ([PR #2497](https://github.com/netease-youdao/LobsterAI/pull/2497)); session export image and card toggle UI fixed ([PR #2493](https://github.com/netease-youdao/LobsterAI/pull/2493))
- **Long-dormant community PRs merged:** Session "mark as unread" feature ([PR #1228](https://github.com/netease-youdao/LobsterAI/pull/1228)); AgentCreateModal Escape-key close + form reset on reopen ([PR #1231](https://github.com/netease-youdao/LobsterAI/pull/1231))
- **Churn:** BTW tools change merged then reverted ([PR #2422](https://github.com/netease-youdao/LobsterAI/pull/2422), [PR #2423](https://github.com/netease-youdao/LobsterAI/pull/2423))

## 4. Community Hot Topics

Activity volume is moderate; the most notable engagement items:

- **[Issue #2489 — "快更新v4pro！"](https://github.com/netease-youdao/LobsterAI/issues/2489)** — A user (created 2026-08-14, 1 comment) urgently demands v4 Pro model support. The impatient title indicates users treat model currency as a competitive feature and feel updates lag behind expectations.
- **[Issue #1154 — Vitest coverage for commandSafety and coworkMemoryJudge](https://github.com/netease-youdao/LobsterAI/issues/1154)** — Flagged by @MaoQianTu (created 2026-03-31, stale, 1 comment). The issue details that `commandSafety.ts` (dangerous-command detection, used by coworkRunner and IM auto-approval) and `coworkMemoryJudge.ts` (memory write gatekeeper) have zero test coverage. A false negative could allow `rm -rf` or `git push --force` execution by the AI. This reflects community concern about safety-critical modules and has been unanswered for ~4.5 months.
- **[PR #2374 — Permanent setting to hide sidebar ad banner](https://github.com/netease-youdao/LobsterAI/pull/2374)** — Open since 2026-07-21, addresses [Issue #2342](https://github.com/netease-youdao/LobsterAI/issues/2342). Users previously could only dismiss banners temporarily; the request for a permanent toggle shows ads are a recurring UX pain point.

## 5. Bugs & Stability

Ranked by severity:

1. **High — OpenClaw skill toggles silently ineffective** (directory/frontmatter key mismatch): OpenClaw resolves `skills.entries` overrides via skill frontmatter name, but LobsterAI wrote directory-derived IDs, making UI toggles silently no-op. Fixed in [PR #2491](https://github.com/netease-youdao/LobsterAI/pull/2491) and [PR #2483](https://github.com/netease-youdao/LobsterAI/pull/2483).
2. **Medium-High — Google Gemini baseURL malformed for `/v1` paths:** `buildOpenAIChatCompletionsURL` slices `-3` removing the `/` separator, producing `...googleapis.comv1beta/openai/chat/completions`. Fix PR [#1153](https://github.com/netease-youdao/LobsterAI/pull/1153) has been open and stale since 2026-03-31 — a ready fix for a real connectivity bug, still unmerged.
3. **Medium — Cowork turn folding shows false-failure lines:** a turn ending mid-wait (right after `sessions_yield`) collapsed into an empty duration line reading as failure. Fixed by requiring a trailing answer chunk before folding ([PR #2499](https://github.com/netease-youdao/LobsterAI/pull/2499)).
4. **Low — Cowork badge popovers overflow viewport** and render under later messages. Fixed in [PR #2496](https://github.com/netease-youdao/LobsterAI/pull/2496).
5. **Low/Cosmetic — Credits icon color mismatch** across themes. Fixed in [PR #2492](https://github.com/netease-youdao/LobsterAI/pull/2492).

No new critical crashes or regressions were reported in the last 24 hours.

## 6. Feature Requests & Roadmap Signals

- **Sidebar ad banner permanent opt-out** ([PR #2374](https://github.com/netease-youdao/LobsterAI/pull/2374)) — Ready-to-merge feature; likely lands in the next release if reviewed.
- **v4 Pro model support** ([Issue #2489](https://github.com/netease-youdao/LobsterAI/issues/2489)) — User demand is explicit and urgent; given LobsterAI's fast model-adaptation pattern, v4 Pro support is a strong candidate for the next release.
- **In-session Ctrl+F / Cmd+F page search** ([PR #1155](https://github.com/netease-youdao/LobsterAI/pull/1155)) — Fully implemented (TreeWalker + CSS Custom Highlight API, per-message jumps) but stale since March; may be revived after the recent stale-cleanup momentum.
- **Session "mark as unread"** ([PR #1228](https://github.com/netease-youdao/LobsterAI/pull/1228)) — Merged; expected to appear in the upcoming stable release.
- **Roadmap signals from the 2026.7.30 merge** ([PR #2498](https://github.com/netease-youdao/LobsterAI/pull/2498)): Team Edition account & quota flows, refreshed Skills/Connectors experience — these will shape the product direction for team/enterprise usage.
- **Browser annotation attachments as first-class artifacts** ([PR #2490](https://github.com/netease-youdao/LobsterAI/pull/2490)) — Signals deepening artifact/browser-cowork integration.

## 7. User Feedback Summary

- **Model freshness is a satisfaction driver:** Issue #2489 ("快更新v4pro！" — "Hurry up and update v4pro!") shows users feel the gap between the latest model releases and LobsterAI support, creating impatience. Prompt model rollouts likely correlate with user retention.
- **Ads are a friction point:** The request for a permanent ad-banner hide ([PR #2374](https://github.com/netease-youdao/LobsterAI/pull/2374), referencing [Issue #2342](https://github.com/netease-youdao/LobsterAI/issues/2342)) suggests users tolerate ads only with granular, persistent control.
- **Safety/trust concerns from the community:** Issue #1154 highlights that dangerous-command detection and memory-write scoring have zero tests — a vocal contributor is asking for hardening before AI execution behavior becomes more autonomous.
- **Positive signal:** Multiple long-stale community contributions (#1228, #1231) were finally merged, indicating maintainers are clearing backlog and rewarding external contributors.

## 8. Backlog Watch

Items needing maintainer attention:

- **[Issue #1154 — Missing unit tests for commandSafety.ts and coworkMemoryJudge.ts](https://github.com/netease-youdao/LobsterAI/issues/1154)** — Open since 2026-03-31, stale, 1 comment, safety-critical. No maintainer response visible. Recommendation: triage and consider it a security-hardening priority.
- **[PR #1153 — Gemini `/v1` URL construction fix](https://github.com/netease-youdao/LobsterAI/pull/1153)** — Open since 2026-03-31, stale. Fixes a real connectivity bug for Gemini users; needs review/merge or closure with rationale. Related to [Issue #1151](https://github.com/netease-youdao/LobsterAI/issues/1151).
- **[PR #1155 — In-session Ctrl+F page search](https://github.com/netease-youdao/LobsterAI/pull/1155)** — Open since 2026-03-31, stale. Feature-complete (search bar, TreeWalker precision, Custom Highlight API); a clear candidate for merge or explicit deferral.
- **[PR #2374 — Permanent sidebar ad-banner hide toggle](https://github.com/netease-youdao/LobsterAI/pull/2374)** — Open since 2026-07-21, awaiting review; directly resolves a user complaint.
- **Dependabot major-version bumps:** [PR #2460](https://github.com/netease-youdao/LobsterAI/pull/2460) (rimraf 5 → 6.1.3) and [PR #2465](https://github.com/netease-youdao/LobsterAI/pull/2465) (vite 5.4.21 → 8.2.1) — both open since 2026-08-10. Vite 8 is a major jump requiring build pipeline validation.

---

**Overall project health:** Healthy. Strong merged-PR throughput, regular releases, active multi-area development, and a maintainer team that is cleaning up stale community work. The main risk areas are the still-unaddressed safety-test issue (#1154) and the aging Gemini URL fix (#1153), plus users' growing impatience for v4 Pro model support (#2489).

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-08-15

## 1. Today's Overview
As of 2026-08-15, Moltis shows low overall activity: no new releases, no issue updates, and no merged/closed pull requests in the last 24 hours. The repository currently has zero open issues, which indicates a clean backlog but also provides no new user-reported signal. Development activity is concentrated in two open feature PRs: #1195, created and updated today, and #1190, last updated on 2026-08-14. Project health appears stable, with no bug reports or regressions to triage, but contribution velocity is moderate at best. The main forward movement is in Slack-native tooling and durable connector infrastructure.

## 2. Releases
No new versions were published in the last 24 hours.  
No release notes, breaking changes, or migration steps are available for this digest period.

## 3. Project Progress
No pull requests were merged or closed today.

Active open PRs show ongoing feature development:

- [#1195 Add Slack native live task cards](https://github.com/moltis-org/moltis/pull/1195) — Open, created 2026-08-15  
  Adds channel-neutral tool lifecycle updates and renders them as native Slack plan/task cards, with opaque per-run IDs and canonical tool name allowlisting. Includes terminal error cleanup for failed streams.

- [#1190 Add durable calendar, channel, and email connectors](https://github.com/moltis-org/moltis/pull/1190) — Open, created 2026-08-11, updated 2026-08-14  
  Adds provider-neutral connector persistence, atomic snapshots, scheduling, projections, and bounded local full-text search. Includes read-only CalDAV, Gmail, Himalaya v2, and channel-history datasets with provider-owned schemas and no copied credentials.

Both are feature additions rather than fixes, and remain open for review.

## 4. Community Hot Topics
No issues or PRs accumulated comments or reactions during the reporting window; all comment/reaction fields were effectively empty.

The most active items are the two open PRs:

- [PR #1195 — Slack native live task cards](https://github.com/moltis-org/moltis/pull/1195)  
  Underlying need: deeper Slack-native integration and real-time task visibility without leaving the chat surface.

- [PR #1190 — Durable calendar, channel, and email connectors](https://github.com/moltis-org/moltis/pull/1190)  
  Underlying need: persistent, provider-scoped connectors for calendar, email, and channel history, likely enabling more reliable long-running agent workflows.

No explicit community discussion data is available to infer broader user sentiment.

## 5. Bugs & Stability
No bugs, crashes, or regressions were reported in the last 24 hours.  
There are no open stability issues in the tracker and no fix PRs to monitor.  
Severity ranking: none.

## 6. Feature Requests & Roadmap Signals
No new feature requests were filed as issues in this period. However, the open PRs provide strong roadmap signals:

- Native Slack task cards and lifecycle updates ([#1195](https://github.com/moltis-org/moltis/pull/1195)) suggest a push toward chat-platform UX polish.
- Durable connectors with snapshots, scheduling, and local search ([#1190](https://github.com/moltis-org/moltis/pull/1190)) suggest roadmap investment in multi-provider calendar/email/channel reliability.

If merged, these two features are plausible candidates for the next Moltis release, possibly combined into a single connector/tooling milestone.

## 7. User Feedback Summary
No direct user feedback is available for this period: zero issues, zero comments, and zero reactions were recorded. The only signal comes from contributor-authored PRs, which appear focused on production use cases: Slack-native task interaction and durable provider integrations. There is no data to confirm user satisfaction or dissatisfaction.

## 8. Backlog Watch
The repository currently has no open issues in need of attention.

The longest-pending open PR is:

- [PR #1190 — Add durable calendar, channel, and email connectors](https://github.com/moltis-org/moltis/pull/1190) — Open since 2026-08-11, last updated 2026-08-14.  
  This is the oldest open item and may require maintainer review or a merge decision.

- [PR #1195 — Add Slack native live task cards](https://github.com/moltis-org/moltis/pull/1195) — Open since 2026-08-15.  
  Still new, but it will also need review and ideally CI/merge status confirmation.

No issues or PRs are currently stuck or unattended for an unusually long time.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-08-15

## 1. Today's Overview

CoPaw/QwenPaw saw sustained high activity in the last 24 hours: **50 issues updated** (13 open, 37 closed) and **41 PRs updated** (26 open, 15 merged/closed), with **no new releases** published. The high issue-closure rate (74% of touched issues closed) suggests active triage/maintenance, but several newly opened regressions around plugin isolation, tool-call 404s, and multi-session cancellation remain unresolved. The PR pipeline is busy, with meaningful work across skills, model provider routing, OneBot/media handling, and console UX. Overall, project health looks solid but the lack of a release means several fixes and features are still waiting to reach users.

## 2. Releases

None in the last 24 hours. No changelog, migration notes, or breaking-change announcements to report.

## 3. Project Progress

PRs that moved to **closed/merged** status in the last 24 hours:

- **#6943 — feat(channels): support interactive configurators for plugin channels**  
  Restores plugin channel `get_configurator()` support and allows plugin HTTP routers to load during interactive channel configuration.  
  https://github.com/agentscope-ai/QwenPaw/pull/6943

- **#6715 — feat(onebot): localize inbound media before agent processing**  
  Aligns OneBot image/audio/video/file handling with the AgentScope 2.0 local `DataBlock` pipeline.  
  https://github.com/agentscope-ai/QwenPaw/pull/6715

- **#2105 — docs: add whisper installation instructions**  
  Adds `--extras whisper` documentation to README and README_zh.  
  https://github.com/agentscope-ai/QwenPaw/pull/2105

- **#7029 / #7031 / #7030 — skill-system and auto-title-sync PRs closed**  
  These were closed, likely superseded by newer open counterparts **#7033** (dynamic skill loading + auto-unload) and **#7032** (auto-memory linked chat title refresh). The work is still moving forward but has been re-submitted under fresh PRs.  
  https://github.com/agentscope-ai/QwenPaw/pull/7033  
  https://github.com/agentscope-ai/QwenPaw/pull/7032

## 4. Community Hot Topics

The most active issues by comment count reveal several persistent user pain points:

- **#7010 — QwenPaw has no true background/daemon mode**  
  6 comments. Users running `qwenpaw app` over SSH or via scripts get stuck because the process stays in the foreground.  
  https://github.com/agentscope-ai/QwenPaw/issues/7010

- **#6405 — MCP tools always report "Tool not found" after 2.0 upgrade**  
  6 comments. MCP tool naming changed to `[mcp-key]__[tool_name]`, but tool resolution fails in Docker 2.0.0.post3.  
  https://github.com/agentscope-ai/QwenPaw/issues/6405

- **#3045 — Auto model retrieval unavailable on Windows desktop**  
  8 comments. Users cannot automatically fetch/configure models in CoPaw v1.0.1.  
  https://github.com/agentscope-ai/QwenPaw/issues/3045

- **#2418 — Request for a skills-hub management page**  
  7 comments. Users want faster, easier discovery and installation of mainstream skills.  
  https://github.com/agentscope-ai/QwenPaw/issues/2418

- **#2846 — Desktop auto-update + wrong Windows taskbar icon**  
  6 comments. Repeated complaint: desktop updates require manual uninstall/reinstall, and the process shows a Python icon.  
  https://github.com/agentscope-ai/QwenPaw/issues/2846

- **#7011 — Console stop request can cancel an active Feishu session**  
  5 comments, **open**. A serious session-identity bug where two UI sessions cross values and a Console stop cancels an active Feishu conversation.  
  https://github.com/agentscope-ai/QwenPaw/issues/7011

- **#7025 — QwenPaw Creator plugin breaks all other plugins**  
  4 comments, **open**. Installing the Creator plugin causes every plugin to fail.  
  https://github.com/agentscope-ai/QwenPaw/issues/7025

Underlying themes: users are asking for better desktop packaging, easier skill/model discoverability, reliable MCP integration, and safer session concurrency.

## 5. Bugs & Stability

Ranked by likely impact:

### High severity / open

- **#7011 — Console stop request cancels an active Feishu session (2.1.0)**  
  Session identity values cross between two UI sessions, causing an active Feishu conversation to be cancelled by a Console stop request. No fix PR identified yet.  
  https://github.com/agentscope-ai/QwenPaw/issues/7011

- **#7016 — Tool-call offload endpoint returns 404 during streaming sessions**  
  `/api/tool-calls/{session_id}/{tool_call_id}/offload` returns `{"detail":"Tool call not found"}`. Affects 2.1.0 streaming UI. No fix PR identified yet.  
  https://github.com/agentscope-ai/QwenPaw/issues/7016

- **#7025 — QwenPaw Creator plugin installation invalidates all plugins**  
  Plugins stop working after installing Creator. No fix PR identified yet.  
  https://github.com/agentscope-ai/QwenPaw/issues/7025

### Medium severity / fix PR exists

- **#6958 — FastMCP tool results written twice to tool result file**  
  When a tool returns both `content` and `structuredContent`, the adapter writes duplicate data after truncation. Fix PR **#6969** is open.  
  https://github.com/agentscope-ai/QwenPaw/issues/6958  
  https://github.com/agentscope-ai/QwenPaw/pull/6969

### Recently closed bug reports

Several older bugs were touched/closed in the last 24h, suggesting triage/fixes:

- **#6951** — Scroll compression hides original chat transcript after re-entry.  
  https://github.com/agentscope-ai/QwenPaw/issues/6951
- **#6405** — MCP "Tool not found" after 2.0 upgrade.  
  https://github.com/agentscope-ai/QwenPaw/issues/6405
- **#3002** — CoPaw incompatible with OpenAI Responses API format.  
  https://github.com/agentscope-ai/QwenPaw/issues/3002
- **#2303** — MiniMax `check_connection()` fails on unsupported `/models` endpoint.  
  https://github.com/agentscope-ai/QwenPaw/issues/2303
- **#4832** — Shell command subprocess causes cmd window flash on Windows.  
  https://github.com/agentscope-ai/QwenPaw/issues/4832
- **#6197** — Desktop hangs on startup when `nvidia-smi` hangs.  
  https://github.com/agentscope-ai/QwenPaw/issues/6197
- **#6972** — Chrome extension WebSocket disconnects after `tab.create`.  
  https://github.com/agentscope-ai/QwenPaw/issues/6972
- **#6612** — QwenPaw 2.0.1 incompatible with AgentScope 2.0.4.post1.  
  https://github.com/agentscope-ai/QwenPaw/issues/6612

## 6. Feature Requests & Roadmap Signals

Strong feature signals from user issues and open PRs:

- **Desktop auto-update** — Repeatedly requested in **#2846** and **#3464**. Windows users are frustrated by manual uninstall/reinstall workflows.  
  https://github.com/agentscope-ai/QwenPaw/issues/2846  
  https://github.com/agentscope-ai/QwenPaw/issues/3464

- **Skills hub / skill management UI** — **#2418** asks for a built-in skills download/manage page.  
  https://github.com/agentscope-ai/QwenPaw/issues/2418

- **Provider-agnostic conversation history / Responses API support** — **#944**, **#2314**, **#2737**, **#3002** all point toward broader OpenAI-compatible provider support. Open PR **#6302** attempts to unify provider discovery, model metadata, routing, and agent controls.  
  https://github.com/agentscope-ai/QwenPaw/pull/6302

- **Per-session model overrides** — PR **#5992** is open and under review; it would let users assign different LLMs to different conversations.  
  https://github.com/agentscope-ai/QwenPaw/pull/5992

- **Conversation management** — **#4001** asks for single-message deletion; **#4436** asks for splitting conversations into new sessions. Both remain open.  
  https://github.com/agentscope-ai/QwenPaw/issues/4001  
  https://github.com/agentscope-ai/QwenPaw/issues/4436

- **Dynamic skill lifecycle** — PR **#7033** adds dynamic skill loading, auto-unload, and frontmatter fixes.  
  https://github.com/agentscope-ai/QwenPaw/pull/7033

- **Computer use support** — Question **#5551** asks for it; PR **#7037** adds observation of related window surfaces for computer-use workflows.  
  https://github.com/agentscope-ai/QwenPaw/issues/5551  
  https://github.com/agentscope-ai/QwenPaw/pull/7037

Likely near-term roadmap candidates: **dynamic skill management**, **per-session model overrides**, **provider/model catalog unification (#6302)**, and **auto-update on desktop**.

## 7. User Feedback Summary

- **Windows desktop experience is a persistent frustration** — Auto-update, taskbar icon, and installer friction come up repeatedly. Users describe updates as "too troublesome" and dislike seeing the Python icon instead of the CoPaw icon.

- **Deployment/automation users need daemon mode** — `qwenpaw app` cannot run as a true background service; SSH and `nohup` workflows hang. This is a real blocker for server-side automation.

- **MCP reliability is fragile after 2.0** — Users report "Tool not found" errors and duplicate tool-result writes. Trust in MCP integrations is clearly affected.

- **Users want more control over conversation data** — Requests to delete individual messages stem from privacy concerns (e.g., removing accidentally sent passwords/API keys) and from wanting cleaner context management.

- **Plugin ecosystem needs isolation** — The QwenPaw Creator plugin breaking all installed plugins is a major red flag for the plugin model.

- **Localization/UI polish matters** — Typo reports such as **#7040** ("Stopp Running") indicate users are sensitive to UI copy quality.

- **Positive signal** — Multiple first-time contributors are submitting structured PRs with tests and clear descriptions, showing healthy community engagement.

## 8. Backlog Watch

Items that need maintainer attention, either due to severity, age, or being high-value contributions:

- **#7011** — High-severity session-cancellation bug, open, no fix PR.  
  https://github.com/agentscope-ai/QwenPaw/issues/7011

- **#7016** — Streaming tool-call 404, open, no fix PR.  
  https://github.com/agentscope-ai/QwenPaw/issues/7016

- **#7025** — Plugin conflict breaking all plugins, open, no fix PR.  
  https://github.com/agentscope-ai/QwenPaw/issues/7025

- **#6958** — Duplicate MCP tool result, open; fix PR **#6969** has been waiting for review/merge.  
  https://github.com/agentscope-ai/QwenPaw/issues/6958  
  https://github.com/agentscope-ai/QwenPaw/pull/6969

- **#5992** — Per-session model overrides PR, open since **2026-07-12**, under review. Needs maintainer decision.  
  https://github.com/agentscope-ai/QwenPaw/pull/5992

- **#6302** — Large provider discovery/model routing PR, open since **2026-07-21**. This could resolve multiple provider-compatibility issues if reviewed and merged.  
  https://github.com/agentscope-ai/QwenPaw/pull/6302

- **#6940** — First-time-contributor PR adding a native DataPaw app runtime and durable analysis workspace, open since **2026-08-12**. Needs maintainer response/review.  
  https://github.com/agentscope-ai/QwenPaw/pull/6940

- **#6908** — AgentScope version bump to 2.0.6, open since **2026-08-11**. Important for staying compatible with upstream changes.  
  https://github.com/agentscope-ai/QwenPaw/pull/6908

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-08-15

## 1. Today's Overview

ZeroClaw is in a sustained architecture-and-stabilization phase: 33 issues and 50 PRs were updated in the 24h window ending 2026-08-15, with no new release cut. The v0.8.5 finite weekly stabilization line ([#9459](https://github.com/zeroclaw-labs/zeroclaw/issues/9459)) is active through August 30, with intake already frozen on August 4. The queue is dominated by accepted security/architecture RFCs — shell command policy, pluggable authentication, runtime-owned security decision pipelines — and by large cross-cutting PRs, most of which carry `needs-author-action` or `needs-maintainer-review` labels, indicating review/iteration bottlenecks rather than stalled development. Maintainer triage remains responsive: a promotional hosted-memory vendor pitch ([#9982](https://github.com/zeroclaw-labs/zeroclaw/issues/9982)) was closed `wontfix` within a day, and 3 PRs plus 3 issues were closed overall. Project health is strong on contribution velocity, but gated by maintainer bandwidth and a heavy RFC decision backlog.

## 2. Releases

**No new releases** were published in the last 24 hours; there are no changelogs, breaking changes, or migration notes to report. Per tracker [#9459](https://github.com/zeroclaw-labs/zeroclaw/issues/9459), the project is running a finite v0.8.5 weekly stabilization line through August 30, 2026 — weekly cuts ship ready work without waiting for every milestone item. Current contribution focus is therefore stabilizing v0.8.5 rather than cutting new feature releases.

## 3. Project Progress

The aggregate data shows **3 PRs merged/closed** in the window, though none appear in the top-20-by-comments snapshot, so their specific contents are not enumerated here; they were lower-traffic changes (typical of small fixes or stacked commits). On the issue side, the notable visible closure is:

- **[#6663 — feat(telegram): show tool-call progress during partial streaming](https://github.com/zeroclaw-labs/zeroclaw/issues/6663)** — [CLOSED] after 3 months; the Telegram `update_draft_progress` / `stream_mode = "partial"` UX improvement appears to have shipped or been resolved.

Active PRs advancing core functionality (all open):

- **[#9999 — fix(compatible): classify output-limited terminal responses](https://github.com/zeroclaw-labs/zeroclaw/pull/9999)** — addresses the S1 incomplete-response bug [#9421](https://github.com/zeroclaw-labs/zeroclaw/issues/9421); classifies `finish_reason: "length"` as a typed output-token-limit failure.
- **[#9996 — fix(security): make action budget accounting atomic](https://github.com/zeroclaw-labs/zeroclaw/pull/9996)** — reserves sender-scoped action-budget capacity atomically so parallel calls cannot jointly exceed `max_actions_per_hour`.
- **[#10002 — fix(tools): accept camelCase segments in google_workspace validation](https://github.com/zeroclaw-labs/zeroclaw/pull/10002)** — unblocks real Google API identifiers (`calendarList`, `quickAdd`, `batchUpdate`).
- **[#9986 — feat(agents): export an agent to a portable bundle](https://github.com/zeroclaw-labs/zeroclaw/pull/9986)** — adds `zeroclaw agents export <alias> --out <dir>` with manifest, config closure, and workspace tree.
- **[#9994 — feat(zerocode): add transcript copy context menu](https://github.com/zeroclaw-labs/zeroclaw/pull/9994)** — one-action copy for transcript messages and code blocks.
- **[#9962](https://github.com/zeroclaw-labs/zeroclaw/pull/9962) / [#9985](https://github.com/zeroclaw-labs/zeroclaw/pull/9985) — CI runner/cache migration** — routes rust-cache through a provider-aware composite action and extends Blacksmith runners to `msrv`, `parallel-runtime-test`, and `installer-drift` jobs.

Security hardening is the dominant workstream: HTTP egress hardening ([#9580](https://github.com/zeroclaw-labs/zeroclaw/pull/9580)), blocking direct spellings of destructive commands ([#9839](https://github.com/zeroclaw-labs/zeroclaw/pull/9839)), authorizing channel approval responders ([#9574](https://github.com/zeroclaw-labs/zeroclaw/pull/9574)), and stored Anthropic OAuth profiles ([#9420](https://github.com/zeroclaw-labs/zeroclaw/pull/9420)).

## 4. Community Hot Topics

The most active issues by comment count reveal where contributor and user energy is concentrated:

- **[#8303 — RFC: Goal mode v1 — bounded foreground Matrix work](https://github.com/zeroclaw-labs/zeroclaw/issues/8303)** — 22 comments, 1 👍. The top-demand item: durable pursuit of a bounded user objective across multiple agent turns. The original proposal was too broad (coupled restart handoff, Web, async child work); the revision narrows scope to bounded foreground Matrix work.
- **[#7155 — RFC: Per-execution confirmation tier for high-risk shell commands](https://github.com/zeroclaw-labs/zeroclaw/issues/7155)** — 20 comments. Operators want Claude Code-style `allow/ask/deny` command-pattern policy. Rev 3 (Aug 5) narrowed scope back to the reconciled shell-policy contract per maintainer review.
- **[#8603 — RFC: ZeroClaw Chat Completions profile](https://github.com/zeroclaw-labs/zeroclaw/issues/8603)** — 19 comments. Strong ecosystem pressure: Open WebUI, LobeChat, Continue.dev, Aider, LangChain, and OpenAI SDK clients cannot currently talk to ZeroClaw, which only exposes WebSocket, ACP, and webhooks.
- **[#7141 — RFC: Pluggable inbound authentication and canonical principals](https://github.com/zeroclaw-labs/zeroclaw/issues/7141)** — 16 comments. Rev 8 of an Identity & Access milestone proposal (OIDC + pluggable providers); accepted, in-progress.
- **[#7462 — Bug: 74 test failures on Windows](https://github.com/zeroclaw-labs/zeroclaw/issues/7462)** — 15 comments. Unix-only test commands, path semantics, and console encoding break the suite on Windows 11 (code page 936); CI only runs Linux.

**Underlying needs:** consistent governance of high-risk/autonomous actions (shell, egress, approvals), interoperability with the OpenAI-compatible client ecosystem, cross-platform CI trust, and a clean model for long-running agent objectives.

## 5. Bugs & Stability

New and active bugs, ranked by severity:

- **[S1] #9421 — Incomplete terminal responses reported as successful](https://github.com/zeroclaw-labs/zeroclaw/issues/9421)** (p1, in-progress): providers can end a turn without a trustworthy final answer while runtime/delegation reports success. **Fix PR exists:** [#9999](https://github.com/zeroclaw-labs/zeroclaw/pull/9999), open and stacked on [#9447](https://github.com/zeroclaw-labs/zeroclaw/pull/9447).
- **[p1] #9965 — Cron custom-shell test hits ETXTBSY under parallel runtime gate](https://github.com/zeroclaw-labs/zeroclaw/issues/9965)** (new, Aug 13, accepted): a red required check fails unrelated PRs (e.g., #9963). No dedicated fix PR visible yet.
- **[S2/p1] #7462 — 74 Windows test failures](https://github.com/zeroclaw-labs/zeroclaw/issues/7462)** (accepted, June 10): long-standing cross-platform gap; CI's Linux-only Test job misses it. Related fix: [#10001](https://github.com/zeroclaw-labs/zeroclaw/pull/10001) gates non-UTF-8 browser-path fixtures to Linux, addressing one failure class.
- **[p1] #9919 — Qdrant silently routed to MarkdownMemory fallback](https://github.com/zeroclaw-labs/zeroclaw/issues/9919)** (accepted): `create_memory_with_builders` can silently select the wrong persistence layer when storage config is unavailable; fix should return an explicit error.
- **[S2] #9759 — Duplicate enabled webhook ports accepted in Quickstart](https://github.com/zeroclaw-labs/zeroclaw/issues/9759)** (accepted): with port defaulting to `8090`, multiple webhook aliases can stage conflicting ports.
- **[S2] #9486 — High-entropy detector redacts Solana wallet addresses](https://github.com/zeroclaw-labs/zeroclaw/issues/9486)** (accepted, no-stale): outbound Telegram messages replace legitimate wallet addresses with `[REDACTED_HIGH_ENTROPY_TOKEN]`, and `high_entropy_tokens=false` does not stop it on the channel path.
- **[S3] #9983 — Fallback model without vision misreports error cause](https://github.com/zeroclaw-labs/zeroclaw/issues/9983)** (new, Aug 13): the messaging does not explain that the fallback provider lacks vision support.

## 6. Feature Requests & Roadmap Signals

- **OpenAI Chat Completions compatibility ([#8603](https://github.com/zeroclaw-labs/zeroclaw/issues/8603))** — the highest-demand feature signal. If accepted, it would unlock the entire OpenAI SDK/UI ecosystem; likely post-v0.8.5 (v0.9.0) gateway architecture, alongside runtime-owned sessions ([#9487](https://github.com/zeroclaw-labs/zeroclaw/issues/9487)) and unified attachments ([#9488](https://github.com/zeroclaw-labs/zeroclaw/issues/9488)).
- **Discord role-based authorization ([#9970](https://github.com/zeroclaw-labs/zeroclaw/issues/9970))** — new, in-progress, additive to the user-ID allowlist; small enough to plausibly land in the v0.8.5 line.
- **Provider-grouped, paginated Telegram `/model` picker ([#9895](https://github.com/zeroclaw-labs/zeroclaw/issues/9895))** — accepted, p2; mobile UX pain point.
- **Agent evaluation harness** — feature [#7065](https://github.com/zeroclaw-labs/zeroclaw/issues/7065) (in-progress) plus new tracker [#9967](https://github.com/zeroclaw-labs/zeroclaw/issues/9967) "Establish a harness evaluation framework"; signals roadmap commitment to measurable agent quality.
- **Portable agent bundles** — already implemented in open PR [#9986](https://github.com/zeroclaw-labs/zeroclaw/pull/9986); likely v0.8.5 or shortly after.
- **Localization boundaries ([#9972](https://github.com/zeroclaw-labs/zeroclaw/issues/9972))** — new audit tracker to eliminate user-facing literal output outside Fluent/i18n boundaries.
- **Shell dialect in system prompt ([#9788](https://github.com/zeroclaw-labs/zeroclaw/issues/9788))** — blocked, p3; small quality win for shell-using agents.
- **Hosted memory via ViBo Cloud API ([#9982](https://github.com/zeroclaw-labs/zeroclaw/issues/9982))** — rejected `wontfix`; maintainers prefer in-house memory infrastructure.

**Prediction:** v0.8.5 weekly cuts (through Aug 30) will likely absorb the shell-policy contract from [#7155](https://github.com/zeroclaw-labs/zeroclaw/issues/7155), approval-responder authorization ([#9574](https://github.com/zeroclaw-labs/zeroclaw/pull/9574)), atomic action budgets ([#9996](https://github.com/zeroclaw-labs/zeroclaw/pull/9996)), and CI/platform fixes; Chat Completions ([#8603](https://github.com/zeroclaw-labs/zeroclaw/issues/8603)) and the session/attachment RFCs ([#9487](https://github.com/zeroclaw-labs/zeroclaw/issues/9487)/[#9488](https://github.com/zeroclaw-labs/zeroclaw/issues/9488)) read as v0.9.0 architecture work.

## 7. User Feedback Summary

- **Windows pain is real and persistent:** contributors report 74 failing tests on Windows 11 Simplified Chinese (code page 936) ([#7462](https://github.com/zeroclaw-labs/zeroclaw/issues/7462)), and non-UTF-8 path handling breaks browser-tool fixtures ([#10001](https://github.com/zeroclaw-labs/zeroclaw/pull/10001)). Trust in cross-platform support is the visible sore spot.
- **False-positive redaction is damaging for real use:** a user running an agent with a Solana MCP server cannot get wallet addresses delivered via Telegram ([#9486](https://github.com/zeroclaw-labs/zeroclaw/issues/9486)) — an attacker-beneficial, user-hostile behavior for Web3 workflows.
- **Ecosystem lock-in is a recurring complaint driver:** developers want to use ZeroClaw from standard OpenAI-compatible clients and cannot ([#8603](https://github.com/zeroclaw-labs/zeroclaw/issues/8603)).
- **Mobile Telegram users find the text-based `/model` interface cumbersome** and explicitly request a keyboard picker ([#9895](https://github.com/zeroclaw-labs/zeroclaw/issues/9895)).
- **Operators of autonomous/shell-heavy agents want pre-execution consent controls** with an `allow/ask/deny` pattern ([#7155](https://github.com/zeroclaw-labs/zeroclaw/issues/7155)).
- **Misleading errors erode confidence:** vision-fallback failures don't explain the real cause ([#9983](https://github.com/zeroclaw-labs/zeroclaw/issues/9983)), and provider "success" on incomplete terminal responses is an S1 trust bug ([#9421](https://github.com/zeroclaw-labs/zeroclaw/issues/9421)).
- **Positive signal:** the RFC process is genuinely iterative — multiple proposals show 3–8 revisions with maintainer scope corrections (e.g., [#7155](https://github.com/zeroclaw-labs/zeroclaw/issues/7155), [#7141](https://github.com/zeroclaw-labs/zeroclaw/issues/7141), [#6954](https://github.com/zeroclaw-labs/zeroclaw/issues/6954)), and vendor spam is closed quickly ([#9982](https://github.com/zeroclaw-labs/zeroclaw/issues/9982)).

## 8. Backlog Watch

Items that need maintainer attention or are at risk of stalling:

- **Long-awaiting `needs-maintainer-review` RFCs:**
  - [#6954 — Provenance, conversation binding, reply contract for internal turns](https://github.com/zeroclaw-labs/zeroclaw/issues/6954) — open since May 26, needs-maintainer-review.
  - [#6971 — Security posture, credential boundaries, universal ingress policy](https://github.com/zeroclaw-labs/zeroclaw/issues/6971) — open since May 27, needs-maintainer-review.
  - [#8603 — Chat Completions profile](https://github.com/zeroclaw-labs/zeroclaw/issues/8603) — open since July 2; high community demand, no maintainer decision yet.
  - [#9487 / #9488 — Runtime-owned sessions and unified attachments](https://github.com/zeroclaw-labs/zeroclaw/issues/9487) — open since July 28, needs-maintainer-review; linked to the #9600 ownership boundary.
  - [#9621 — Staged opt-in product telemetry](https://github.com/zeroclaw-labs/zeroclaw/issues/9621) — open since Aug 1, needs-maintainer-review.
- **PRs with `needs-maintainer-review` on p1 bugs:**
  - [#9002 — keep agent turns alive after viewer disconnect](https://github.com/zeroclaw-labs/zeroclaw/pull/9002) (gateway, p1).
  - [#9281 — roll back auto-created map aliases when config set fails](https://github.com/zeroclaw-labs/zeroclaw/pull/9281) (config, p1).
- **Accepted p1 bug without a fix PR:** [#7462 — Windows test suite](https://github.com/zeroclaw-labs/zeroclaw/issues/7462) has been accepted for two months with no dedicated cross-platform CI fix.
- **`needs-author-action` concentration:** 12 of the top-20 PRs carry `needs-author-action` (e.g., [#9137](https://github.com/zeroclaw-labs/zeroclaw/pull/9137), [#8443](https://github.com/zeroclaw-labs/zeroclaw/pull/8443), [#9420](https://github.com/zeroclaw-labs/zeroclaw/pull/9420), [#9713](https://github.com/zeroclaw-labs/zeroclaw/pull/9713)), suggesting contributors are waiting on review feedback or are slow to revise — an explicit maintainer review wave would likely unblock a large share of the 47 open PRs.
- **Maintainer decision queue tracker:** [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) is the active issue-level queue for exactly these RFC/design decisions; progress on it will be the key health indicator over the next two weeks.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/boom7sss/agents-radar).*