# OpenClaw Ecosystem Digest 2026-08-01

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-08-01 03:32 UTC

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

OpenClaw saw very high activity in the last 24 hours: roughly 500 issues and 500 PRs were updated, with 464 issues and 385 PRs still open. The project closed 36 issues and 115 PRs moved to merged/closed, but no new release was published. The most severe item in the backlog is a P0 gateway memory leak causing OOM crash loops ([#91588](https://github.com/openclaw/openclaw/issues/91588)). Much of the open issue volume is concentrated in P1 session-state, message-delivery, and security regressions, many of which still carry `clawsweeper:no-new-fix-pr` or `clawsweeper:needs-maintainer-review` labels. Overall, the project is very active, but maintainer review appears to be a bottleneck relative to the incoming bug and feature load.

## 2. Releases

No new releases were published in the last 24 hours. There are no release notes, breaking changes, or migration notes to report.

## 3. Project Progress

- 115 PRs were merged/closed in the last 24 hours, and 36 issues were closed.
- Notable closed issues in the sample:
  - [Ollama provider never selected as primary in 2026.7.1 #116418](https://github.com/openclaw/openclaw/issues/116418)
  - [WebChat session history disappears on new calendar day #116391](https://github.com/openclaw/openclaw/issues/116391)
  - [Every inbound message written twice to transcript #116409](https://github.com/openclaw/openclaw/issues/116409)
  - [SQLite-backed sessions can fall back to frozen legacy JSONL #116868](https://github.com/openclaw/openclaw/issues/116868)
- Notable closed PR:
  - [fix(gateway): prevent crash loops from state DB schema migration errors #116733](https://github.com/openclaw/openclaw/pull/116733)
- Active open PRs with substantial updates/fixes:
  - [fix(agents): preserve tools on verified completion wakes #117148](https://github.com/openclaw/openclaw/pull/117148)
  - [fix(agents): surface /new guidance for thinking-signature replay errors #116987](https://github.com/openclaw/openclaw/pull/116987)
  - [feat(audit): add execution identity inspection #117034](https://github.com/openclaw/openclaw/pull/117034)
  - [fix(minimax): persist OAuth model context metadata #110588](https://github.com/openclaw/openclaw/pull/110588)
  - [fix(gateway): report failed OpenAI streams instead of false success #113770](https://github.com/openclaw/openclaw/pull/113770)
  - [fix(auth): default agent loses keys after secondary paste-api-key #116248](https://github.com/openclaw/openclaw/pull/116248)
  - [fix(process): clean attached Unix descendants on cancellation #117151](https://github.com/openclaw/openclaw/pull/117151)
  - [fix(ui): restore automatic agent fast-mode settings #113894](https://github.com/openclaw/openclaw/pull/113894)

## 4. Community Hot Topics

- [Linux/Windows Clawdbot Apps #75](https://github.com/openclaw/openclaw/issues/75) — 116 comments, 80 👍  
  The single most-commented and most-reacted issue. Users are asking for Linux and Windows desktop apps with feature parity to the macOS app. This is a long-standing demand with strong community support.

- [Critical: Gateway Memory Leak #91588](https://github.com/openclaw/openclaw/issues/91588) — 23 comments  
  RSS growth from ~350 MB to 15.5 GB over days, causing repeated OOM kills. This is the highest-severity stability topic and is drawing sustained user attention.

- [Feature Request: Memory Trust Tagging by Source #7707](https://github.com/openclaw/openclaw/issues/7707) — 23 comments  
  Users want memory entries tagged by trust level to prevent memory poisoning from web pages or third-party skills.

- [Realtime voice work can retain unbounded provider and consult state #116201](https://github.com/openclaw/openclaw/issues/116201) — 20 comments  
  Realtime voice sessions can retain lots of superseded state under slow or bursty provider behavior.

- [Feature Request: Masked Secrets #10659](https://github.com/openclaw/openclaw/issues/10659) — 14 comments  
  Users want agents to use API keys without being able to read them, reducing prompt-injection and secret-leak risk.

- [Agent repeats identical replies 2-10x on Telegram #86519](https://github.com/openclaw/openclaw/issues/86519) — 13 comments  
  A visible Telegram regression after the 5.20 update; user frustration is high because the issue was only partially improved.

Underlying needs from the hot topics: cross-platform client support, memory/stability reliability, stronger security boundaries for secrets and memory, and prompt-injection resistance.

## 5. Bugs & Stability

All issues below were updated in the last 24 hours; they may not have been newly opened today.

### P0

- [Gateway Memory Leak — RSS grows from 350MB to 15.5GB, OOM crashes #91588](https://github.com/openclaw/openclaw/issues/91588)  
  Repeated OOM kills and `launchd-handoff` restart cycles. No new fix PR currently visible.

### P1

- [Realtime voice work retains unbounded provider and consult state #116201](https://github.com/openclaw/openclaw/issues/116201)  
  Resource limits are not hard ownership bounds; slow or stalled provider behavior can retain large frames and pre-ready audio.

- [Session transcript projection reconcile can livelock #115908](https://github.com/openclaw/openclaw/issues/115908)  
  Sustained writes can block the Node main thread for tens of seconds, stalling all channel transports.

- [Agent repeats identical replies 2-10x on Telegram #86519](https://github.com/openclaw/openclaw/issues/86519)  
  Regression after 5.20 update; still not fully fixed after 5.22.

- [Visible channel turns dispatch with no queued reply payloads #114137](https://github.com/openclaw/openclaw/issues/114137)  
  Assistant final text is persisted in the transcript but never delivered to the user.

- [SQLite snapshot restore lacks end-to-end crash and identity guarantees #113306](https://github.com/openclaw/openclaw/issues/113306)  
  Reported success can leave backups in an inconsistent state, with data-loss risk.

- [Cron agent jobs silently time out during LLM API outages #45494](https://github.com/openclaw/openclaw/issues/45494)  
  Cron jobs exhaust the full timeout on definitive HTTP 500 errors instead of fast-failing.

- [Gateway heap grows to 1073MB+ at idle on macOS #87109](https://github.com/openclaw/openclaw/issues/87109)  
  Heap growth leads to event-loop starvation and silently failing cron jobs.

- [Channel stop timeout leaves channel permanently dead #70024](https://github.com/openclaw/openclaw/issues/70024)  
  `running: true` is left with stale store entries, and the channel never recovers. A linked PR is open.

- [Matrix room agents loop on no-reply output and stale session replay #114211](https://github.com/openclaw/openclaw/issues/114211)  
  Self-sustaining loops and restart recovery issues.

- [OpenClaw leaks unreaped hook/tool child processes #97616](https://github.com/openclaw/openclaw/issues/97616)  
  Zombie process accumulation under the main process causes runtime degradation.

- [tools.elevated.enabled: true breaks exec routing logic #46786](https://github.com/openclaw/openclaw/issues/46786)  
  All `exec` calls route to the gateway host instead of the sandbox.

- [Restart mid-run leaves session status=running and spool retries forever #114255](https://github.com/openclaw/openclaw/issues/114255)  
  Restart recovery claim prevents the session from reaching a recoverable terminal state.

- [Large PDF/file attachments can overflow browser or gateway stack #90098](https://github.com/openclaw/openclaw/issues/90098)  
  A linked PR is open.

- [Auto-update can leave running gateway with stale hashed bundle imports #85844](https://github.com/openclaw/openclaw/issues/85844)  
  Running processes import filenames removed during update.

- [Compaction retry creates orphan fork in parentId chain #48810](https://github.com/openclaw/openclaw/issues/48810)  
  Broken chain reconstruction after failed compaction.

- [reasoningDefault=stream causes feedback loop / infinite reasoning recursion #77625](https://github.com/openclaw/openclaw/issues/77625)  
  Agent can get trapped in self-referential reasoning cycles.

- [Preflight compaction hard-capped at ~60s #95553](https://github.com/openclaw/openclaw/issues/95553)  
  Config `compaction.timeoutSeconds` is ignored for budget-triggered preflight compaction.

- [OpenClaw exposes agent internal thinking to user #64267](https://github.com/openclaw/openclaw/issues/64267)  
  English internal planning text leaks into user-facing responses.

- [Slack thread replies generated but not delivered after origin tuple lost #96692](https://github.com/openclaw/openclaw/issues/96692)  
  Successful session completion despite missing final delivery.

- [LINE messages silently lost due to reply token expiry #86012](https://github.com/openclaw/openclaw/issues/86012)  
  No fallback push safeguard exists; linked PR open.

- [Anthropic provider disappears from model picker + static catalog never pulls new models #109017](https://github.com/openclaw/openclaw/issues/109017)  
  Users cannot access newer Anthropic models without manual overrides.

Several open/closed PRs target related stability fixes: [#116733](https://github.com/openclaw/openclaw/pull/116733) addresses DB migration crash loops, [#117148](https://github.com/openclaw/openclaw/pull/117148) preserves tools on completion wakes, [#117151](https://github.com/openclaw/openclaw/pull/117151) cleans attached child processes, and [#113770](https://github.com/openclaw/openclaw/pull/113770) reports failed OpenAI streams instead of false success.

## 6. Feature Requests & Roadmap Signals

- [Linux/Windows Clawdbot Apps #75](https://github.com/openclaw/openclaw/issues/75) — 80 👍  
  Strongest community demand in the dataset. Likely a roadmap candidate, but large scope.

- [Memory Trust Tagging by Source #7707](https://github.com/openclaw/openclaw/issues/7707)  
  Trust-level tagging for memory origins to prevent poisoning attacks.

- [Masked Secrets #10659](https://github.com/openclaw/openclaw/issues/10659) — 4 👍  
  P1 security feature; agents use credentials without viewing raw values. A plausible near-term roadmap candidate.

- [Pre-reset agentic memory flush — /new and daily reset #45608](https://github.com/openclaw/openclaw/issues/45608) — 4 👍  
  Users want the same memory flush before reset that already runs before compaction.

- [Topic-session families for one assistant across named context lanes #90916](https://github.com/openclaw/openclaw/issues/90916)  
  Isolated context lanes with shared durable memory.

- [Fully dynamic model discovery for OpenRouter and beyond #10687](https://github.com/openclaw/openclaw/issues/10687) — 3 👍  
  Static model catalogs are becoming a real problem for fast-moving providers.

- [Trigger model fallback on context length exceeded #9986](https://github.com/openclaw/openclaw/issues/9986)  
  Fallback currently only triggers on API errors, not context overflow.

- [Per-model usage logging for cost tracking #13219](https://github.com/openclaw/openclaw/issues/13219)  
  Users want aggregated per-model token/cost tracking without parsing JSONL files.

- [Add image viewing in the webchat file viewer #113251](https://github.com/openclaw/openclaw/issues/113251)  
  Requested Control UI improvement.

- [Expose stable plugin SDK surface for installed skill workflows #81913](https://github.com/openclaw/openclaw/issues/81913)  
  Third-party plugins need stable SDK contracts.

- [Visible agent-to-agent messaging for ACP thread-bound sessions #50798](https://github.com/openclaw/openclaw/issues/50798)  
  Coordinated agent communication without route pollution.

Likely next-version candidates based on P1 priority and community momentum: **masked secrets** ([#10659](https://github.com/openclaw/openclaw/issues/10659)), **memory flush before reset** ([#45608](https://github.com/openclaw/openclaw/issues/45608)), and **model fallback on context overflow** ([#9986](https://github.com/openclaw/openclaw/issues/9986)). The cross-platform app request ([#75](https://github.com/openclaw/openclaw/issues/75)) remains a large but highly visible roadmap item.

## 7. User Feedback Summary

- Memory and reliability issues dominate user pain points: the P0 memory leak ([#91588](https://github.com/openclaw/openclaw/issues/91588)), idle heap growth ([#87109](https://github.com/openclaw/openclaw/issues/87109)), and zombie process accumulation ([#97616](https://github.com/openclaw/openclaw/issues/97616)) all describe long-running degradation.
- Silent delivery failures are especially damaging to trust: Telegram duplicates ([#86519](https://github.com/openclaw/openclaw/issues/86519)), LINE silent loss ([#86012](https://github.com/openclaw/openclaw/issues/86012)), Slack replies never delivered ([#96692](https://github.com/openclaw/openclaw/issues/96692)), and visible channel turns with no queued reply ([#114137](https://github.com/openclaw/openclaw/issues/114137)).
- Chinese and international users are actively reporting issues, e.g. hardcoded `/Users/wangtao` workspace path ([#51429](https://github.com/openclaw/openclaw/issues/51429)), Feishu interactive card parsing gaps ([#41609](https://github.com/openclaw/openclaw/issues/41609)), and Taiwan-standard zh-TW localization PRs ([#86085](https://github.com/openclaw/openclaw/pull/86085)).
- Security-conscious users are requesting secret masking ([#10659](https://github.com/openclaw/openclaw/issues/10659)), memory trust tagging ([#7707](https://github.com/openclaw/openclaw/issues/7707)), and are concerned about internal thinking being exposed ([#64267](https://github.com/openclaw/openclaw/issues/64267)).
- There are positive contribution signals: users are submitting provider documentation, localization fixes, new provider integrations like Telnyx ([#116016](https://github.com/openclaw/openclaw/pull/116016)), and model catalog corrections ([#113578](https://github.com/openclaw/openclaw/pull/113578), [#113579](https://github.com/openclaw/openclaw/pull/113579)).
- Overall sentiment is mixed: the community is engaged and contributing, but repeated regressions and a growing pile of `no-new-fix-pr` P1 issues suggest frustration with stability.

## 8. Backlog Watch

Issues that have been open for a long time and still need maintainer attention:

- [Linux/Windows Clawdbot Apps #75](https://github.com/openclaw/openclaw/issues/75) — open since January 1, 116 comments, 80 👍
- [Memory Trust Tagging by Source #7707](https://github.com/openclaw/openclaw/issues/7707) — open since February 3
- [Trigger model fallback on context length exceeded #9986](https://github.com/openclaw/openclaw/issues/9986) — open since February 5
- [Masked Secrets #10659](https://github.com/openclaw/openclaw/issues/10659) — open since February 6, P1
- [Fully dynamic model discovery #10687](https://github.com/openclaw/openclaw/issues/10687) — open since February 6
- [Cron agent jobs silently time out during LLM outages #45494](https://github.com/openclaw/openclaw/issues/45494) — open since March 13, P1
- [tools.elevated breaks exec routing #46786](https://github.com/openclaw/openclaw/issues/46786) — open since March 15, P1
- [Compaction retry creates orphan fork #48810](https://github.com/openclaw/openclaw/issues/48810) — open since March 17, P1
- [Embedded runner "Network connection lost" on large tool calls #53540](https://github.com/openclaw/openclaw/issues/53540) — open since March 24, P1
- [Hardcoded workspace path `/Users/wangtao` #51429](https://github.com/openclaw/openclaw/issues/51429) — open since March 21
- [Discord channel not loaded in 2026.5.4 #77930](https://github.com/openclaw/openclaw/issues/77930) — open since May 5
- [LINE messages silently lost #86012](https://github.com/openclaw/openclaw/issues/86012) — open since May 24, P1
- [Auto-update stale hashed bundle imports #85844](https://github.com/openclaw/openclaw/issues/85844) — open since May 23, P1
- [Gateway heap grows to 1073MB+ at idle #87109](https://github.com/openclaw/openclaw/issues/87109) — open since May 27, P1
- [Gateway Memory Leak #91588](https://github.com/openclaw/openclaw/issues/91588) — open since June 9, P0

Open PRs explicitly marked `ready for maintainer look` and needing maintainer attention:

- [fix(signal): preserve original filenames in outbound attachments #115107](https://github.com/openclaw/openclaw/pull/115107)
- [docs: add Neon AI Gateway provider guide #113734](https://github.com/openclaw/openclaw/pull/113734)
- [fix(minimax): persist OAuth model context metadata #110588](https://github.com/openclaw/openclaw/pull/110588)
- [fix(ui): restore automatic agent fast-mode settings #113894](https://github.com/openclaw/openclaw/pull/113894)
- [fix(gateway): report failed OpenAI streams #113770](https://github.com/openclaw/openclaw/pull/113770)
- [fix(auth): default agent loses keys after paste-api-key #116248](https://github.com/openclaw/openclaw/pull/116248)
- [Clarify landable bug sweep skill credential boundaries #85621](https://github.com/openclaw/openclaw/pull/85621)
- [fix(tooling): run markdownlint on workspace templates #117166](https://github.com/openclaw/openclaw/pull/117166)

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report — AI Agent & Personal AI Assistant Open-Source Ecosystem
**Period:** 2026-08-01 (24-hour digest window)

---

## 1. Ecosystem Overview

Thirteen projects were tracked in this window, anchored by OpenClaw as the core reference implementation and a family of "Claw"-branded derivatives plus adjacent agents (Hermes, CoPaw, NanoBot, Moltis). The ecosystem is dominated by a two-speed dynamic: OpenClaw processes roughly 10× the GitHub volume of the next most active projects, while a second tier (IronClaw, ZeroClaw, Hermes, CoPaw) iterates rapidly on architecture and hardening. Notably, **zero releases shipped across all projects in 24 hours**, suggesting a sector-wide consolidation phase ahead of versioned rollouts (IronClaw's release PR is 29 days pending). Cross-cutting themes are unmistakable: memory/prompt-cache reliability, security hardening at the persistence boundary, channel delivery integrity, and deployment flexibility.

---

## 2. Activity Comparison

Health score reflects issue hygiene, merge throughput, maintainer responsiveness, and severity of open bugs (10 = excellent).

| Project | Issues updated (open) | PRs updated (merged/closed) | Release | Health |
|---|---|---|---|---|
| **OpenClaw** | ~500 (464 open) | ~500 (115 closed/merged) | None | **8/10** — massive velocity, but P0 memory leak + P1 backlog with `no-new-fix-pr` labels |
| **IronClaw** | 36 (29 open) | 50 (29 closed/merged) | None (release PR pending 29d) | **8/10** — high merge velocity; P0 cross-user leak and cache workstream open |
| **ZeroClaw** | 50 (45 open) | 50 (9 closed/merged) | None | **8/10** — strong architectural progress; RFC review is the bottleneck |
| **Hermes Agent** | 50 (46 open) | 50 (10 closed/merged) | None | **8/10** — responsive triage; updater + Telegram delivery bugs persist |
| **CoPaw** | 16 (11 open) | 34 (10 closed/merged) | None | **7/10** — active with first-time contributors; silent-failure bugs unresolved |
| **NanoBot** | 4 | 13 (6 closed/merged) | None | **7/10** — healthy, fast fix cycles (WeChat, SQLite migration) |
| **LobsterAI** | 4 (0 open) | 12 (11 closed/merged) | None | **6/10** — good internal fixes; community UX PRs stale-closed |
| **Moltis** | 2 | 7 (2 closed/merged) | None | **6/10** — shipping features; two security PRs awaiting review |
| **NanoClaw** | 8 (all open) | 10 (4 closed) | None | **6/10** — focused PR pipeline; deployment flexibility gaps |
| **PicoClaw** | 2 | 3 (0 merged) | None | **5/10** — stable but review-latency-stalled (PRs open 29–35 days) |
| **NullClaw** | 0 | 1 (0 merged) | None | **4/10** — near-dormant; sole PR unacknowledged for 3 days |
| **TinyClaw** | 0 | 0 | None | **2/10** — inactive |
| **ZeptoClaw** | 0 | 0 | None | **2/10** — inactive |

---

## 3. OpenClaw's Position

**Advantages vs. peers:**

- **Community critical mass:** ~500 issues and ~500 PRs touched in 24h — an order of magnitude above every peer. 464 open issues and 385 open PRs indicate a deep contributor pool, not abandonment.
- **Strongest feature surface:** broadest channel coverage (Telegram, Slack, LINE, Matrix, Feishu, Discord, Signal), provider catalog, and web UI. The most-reacted request across the entire ecosystem — Linux/Windows desktop apps ([#75](https://github.com/openclaw/openclaw/issues/75), 116 comments, 80 👍) — targets OpenClaw specifically.
- **Reference status:** other projects explicitly position against it (IronClaw's migration-tool request cites Hermes/OpenClaw legacy users; LobsterAI builds on the OpenClaw/Cowork backend).

**Technical approach differences:**

- OpenClaw is a Node/TypeScript gateway architecture with a state DB, launchd/systemd service integration, and automation tooling (`clawsweeper` labels) for issue triage.
- Rust-based challengers (IronClaw, ZeroClaw) compete on reliability and security posture but lack OpenClaw's channel breadth and community gravity.
- Python-based CoPaw owns the Chinese desktop/AgentScope segment; Node-based Hermes competes on native packaging (macOS/Windows) rather than ecosystem size.

**Key vulnerability:** maintainer review is the bottleneck. A large share of OpenClaw's P1 issues carry `clawsweeper:no-new-fix-pr` or `needs-maintainer-review`, and the P0 memory leak ([#91588](https://github.com/openclaw/openclaw/issues/91588)) has no visible fix PR.

---

## 4. Shared Technical Focus Areas

### 4.1 Memory & session-state integrity
The single most common theme across projects:
- **OpenClaw** — P0 gateway memory leak ([#91588](https://github.com/openclaw/openclaw/issues/91588)); session projection livelock ([#115908](https://github.com/openclaw/openclaw/issues/115908)); SQLite→JSONL fallback ([#116868](https://github.com/openclaw/openclaw/issues/116868)).
- **NanoBot** — major JSONL→SQLite session-storage migration ([#5173](https://github.com/HKUDS/nanobot/pull/5173)).
- **CoPaw** — Auto-Memory flush before context eviction ([#6592](https://github.com/agentscope-ai/QwenPaw/pull/6592)).
- **ZeroClaw** — 7-PR Hindsight memory stack ([#9063–9069](https://github.com/zeroclaw-labs/zeroclaw/pull/9063)); RFC separating conversation history from curated memory ([#9048](https://github.com/zeroclaw-labs/zeroclaw/issues/9048)).
- **IronClaw** — compaction context-budget + cache-pollution issues ([#6988–6990](https://github.com/nearai/ironclaw/issues/6988)).
- **LobsterAI** — DeepSeek long-session cache hit-rate collapse (~100%→~57%) fixed via byte-stable prompt projection ([#2413](https://github.com/netease-youdao/LobsterAI/pull/2413), [#2415](https://github.com/netease-youdao/LobsterAI/pull/2415)).

### 4.2 Security & secret handling
- **Secret masking / redaction:** OpenClaw ([#10659](https://github.com/openclaw/openclaw/issues/10659)), Hermes ([#43666](https://github.com/NousResearch/hermes-agent/issues/43666)), NanoClaw ([#3161](https://github.com/qwibitai/nanoclaw/pull/3161)), ZeroClaw ([#9127](https://github.com/zeroclaw-labs/zeroclaw/issues/9127) KeySource RFC).
- **Cross-user isolation:** IronClaw P0 cross-user memory leak ([#6900](https://github.com/nearai/ironclaw/issues/6900)) and hosted-MCP metadata exposure ([#6778](https://github.com/nearai/ironclaw/issues/6778)).
- **Sandbox/runtime routing:** ZeroClaw coding-CLI tools bypass sandbox ([#9607](https://github.com/zeroclaw-labs/zeroclaw/pull/9607)); OpenClaw elevated-exec routing bug ([#46786](https://github.com/openclaw/openclaw/issues/46786)).
- **Supply-chain/path hardening:** Moltis zip/model path traversal fixes ([#1180](https://github.com/moltis-org/moltis/pull/1180)); memory trust tagging to prevent poisoning (OpenClaw [#7707](https://github.com/openclaw/openclaw/issues/7707)).

### 4.3 Channel delivery reliability (silent failures)
The top trust-killer across the ecosystem — *reported success with no delivered message*:
- **Telegram:** OpenClaw duplicate replies ([#86519](https://github.com/openclaw/openclaw/issues/86519)); Hermes stale preview as final edit ([#71643](https://github.com/NousResearch/hermes-agent/issues/71643)).
- **LINE:** OpenClaw reply-token expiry silently drops messages ([#86012](https://github.com/openclaw/openclaw/issues/86012)).
- **Slack:** OpenClaw thread replies generated but not delivered ([#96692](https://github.com/openclaw/openclaw/issues/96692)); Hermes approval-card permissions.
- **WeChat:** NanoBot re-login token overwrite ([#5195](https://github.com/HKUDS/nanobot/issues/5195)); CoPaw cron push reports success but never delivers ([#6614](https://github.com/agentscope-ai/QwenPaw/issues/6614)).

### 4.4 Model/provider interoperability
- **Dynamic model discovery:** OpenClaw ([#10687](https://github.com/openclaw/openclaw/issues/10687), [#109017](https://github.com/openclaw/openclaw/issues/109017)); static catalogs lag fast-moving providers (Anthropic, OpenRouter).
- **Fallback & per-session switching:** PicoClaw configurable fallback chain ([#3200](https://github.com/sipeed/picoclaw/pull/3200)); NanoBot per-session model switching ([#5198](https://github.com/HKUDS/nanobot/issues/5198)); OpenClaw fallback on context overflow ([#9986](https://github.com/openclaw/openclaw/issues/9986)).
- **API compatibility:** ZeroClaw OpenAI-compatible chat completions endpoint ([#8486](https://github.com/zeroclaw-labs/zeroclaw/pull/8486)); NanoBot DeepSeek Responses API ([#5197](https://github.com/HKUDS/nanobot/pull/5197)); NullClaw grok-cli provider ([#981](https://github.com/nullclaw/nullclaw/pull/981)).

### 4.5 Deployment & client flexibility
- **Cross-platform clients:** OpenClaw Linux/Windows desktop apps ([#75](https://github.com/openclaw/openclaw/issues/75), 80 👍).
- **No-Docker / native runtimes:** NanoClaw ([#1732](https://github.com/qwibitai/nanoclaw/issues/1732), [#1225](https://github.com/qwibitai/nanoclaw/issues/1225), [#2354](https://github.com/qwibitai/nanoclaw/issues/2354)); Apple Container support ([#2809](https://github.com/qwibitai/nanoclaw/pull/2809)).
- **Updater reliability:** Hermes macOS/Windows update breakage ([#74836](https://github.com/NousResearch/hermes-agent/issues/74836)); OpenClaw stale hashed bundle imports ([#85844](https://github.com/openclaw/openclaw/issues/85844)).

### 4.6 Tool/process execution hardening
- CoPaw shell-command hangs and UI freezes on large output ([#6608](https://github.com/agentscope-ai/QwenPaw/issues/6608), [#6589](https://github.com/agentscope-ai/QwenPaw/issues/6589)).
- OpenClaw zombie hook/tool child processes ([#97616](https://github.com/openclaw/openclaw/issues/97616)); child-process cleanup PR ([#117151](https://github.com/openclaw/openclaw/pull/117151)).
- ZeroClaw per-execution shell approval tiers ([#7155](https://github.com/zeroclaw-labs/zeroclaw/issues/7155)).

---

## 5. Differentiation Analysis

| Project | Architecture | Target users | Key differentiator |
|---|---|---|---|
| **OpenClaw** | Node/TS gateway + agents | General-purpose, largest community | Breadth: channels, providers, UI, plugin surface |
| **IronClaw** | Rust, crates.io contract extraction | Enterprise / hosted products | Reliability engineering; token-economics focus; WS1 architecture wave |
| **ZeroClaw** | Rust, sandbox-first, RFC-driven | Security- and interoperability-minded | OpenAI-compatible API, A2A, decision-queue governance |
| **Hermes Agent** | Node/TS, desktop-first (launchd, updater) | macOS/Windows power users | Native packaging, multi-profile isolation, plugin lifecycle |
| **CoPaw (QwenPaw)** | Python, AgentScope 2.0 | Chinese market, Feishu/WeChat/Windows desktop | Qwen model alignment; first-time contributor velocity |
| **NanoBot** | Lightweight channel-first | Self-hosters, WeChat/Slack users | Rapid bug-fix cycles; SQLite session migration |
| **LobsterAI** | OpenClaw/Cowork backend | Chinese ecosystem, DeepSeek users | Prompt-cache cost optimization; UI polish |
| **NanoClaw** | Container-runtime-flexible | K8s/enterprise + Apple ecosystem | iMessage/Dial channels; no-Docker ambitions |
| **Moltis** | Rust, modular (cargo features) | Privacy-conscious adopters | Nostr/Buzz group chat; Markdown export; security posture |
| **PicoClaw** | Lightweight embedded-adjacent | Simplex/IRC users | New protocol integrations (Simplex, model fallback) |
| **NullClaw** | CLI-wrapper provider aggregation | Local-CLI users | Thin wrappers for `codex-cli`/`grok`/`gemini-cli` |

**Architecture split:** The ecosystem is bifurcating between Node/TS generalists (OpenClaw, Hermes, NanoBot) and Rust systems-builders (IronClaw, ZeroClaw, Moltis), with Python occupying the China-market desktop niche (CoPaw). Rust projects emphasize contracts, sandboxing, and deterministic behavior; Node projects emphasize channel breadth and community speed.

---

## 6. Community Momentum & Maturity

| Tier | Projects | Characterization |
|---|---|---|
| **Tier 1 — High velocity** | OpenClaw, IronClaw, ZeroClaw, Hermes, CoPaw | 50–500 PRs/day touched; rapid merges; architectural refactors underway. OpenClaw is at capacity (maintainer bottleneck); IronClaw/ZeroClaw are consolidating architecture; Hermes/CoPaw are hardening. |
| **Tier 2 — Moderate/steady** | NanoBot, LobsterAI, Moltis, NanoClaw | Shipping targeted fixes and features; smaller contributor bases; some community contributions stale-closed (LobsterAI) or security PRs pending (Moltis). |
| **Tier 3 — Low activity** | PicoClaw, NullClaw | Stable but review-stalled. PicoClaw has 3 substantive PRs (Simplex, fallback chain, DeltaChat refactor) waiting 29–35 days; NullClaw's only PR has zero engagement. |
| **Tier 4 — Dormant** | TinyClaw, ZeptoClaw | No activity in 24h; effectively paused. |

**Rapidly iterating:** OpenClaw, IronClaw, ZeroClaw — each shipping structural work (dependency extraction, RFC acceptance, memory stacks) rather than isolated bugfixes.
**Stabilizing:** LobsterAI (maintenance mode, stale cleanup), NanoBot (healthy, small-scope fixes).
**At risk of contributor attrition:** PicoClaw and LobsterAI, where community-submitted PRs sit unreviewed or are closed stale without merge.

---

## 7. Trend Signals

1. **Memory is becoming a first-class lifecycle concept, not a storage detail.** History vs. curated memory separation (ZeroClaw #9048), trust-tagged memory origins (OpenClaw #7707), pre-reset flushes (OpenClaw #45608), and SQLite session migrations (NanoBot #5173) all point to memory architecture as the next competitive battleground.

2. **Prompt-cache byte-stability is now a cost issue, not a performance nicety.** LobsterAI's repair of DeepSeek cache hit-rates (~100%→~57%) and IronClaw's new cache workstream ([#6984–6990](https://github.com/nearai/ironclaw/issues/6984)) signal that **agents must construct byte-identical prompt prefixes** (stable tool arrays, no timestamp mutation, explicit `cache_control` breakpoints) to control API spend at scale.

3. **Silent delivery failures are the ecosystem's #1 trust risk.** Telegram, LINE, Slack, WeChat, and Feishu all show instances of *success reported, message never delivered*. Agents need explicit delivery-acknowledgment semantics and fallback pushes, not just optimistic transcript writes.

4. **Security is becoming an adoption gate, not a backlog item.** A Moltis contributor explicitly stated they'd adopt only after security fixes land; IronClaw's P0 cross-user memory leak and ZeroClaw's sandbox-routing gaps are being treated as release blockers. Expect secret masking, memory provenance, and per-execution approval tiers to become default expectations.

5. **OpenAI-compatible APIs are the integration standard.** ZeroClaw's chat-completions endpoint (unblocking Open WebUI, LobeChat, LangChain, Aider) and NanoBot's DeepSeek Responses API support show that agent projects must expose standard wire protocols to win client-ecosystem adoption.

6. **Multi-agent interoperability (ACP/A2A) is moving from RFC to roadmap.** ZeroClaw's A2A outbound client ([#9106](https://github.com/zeroclaw-labs/zeroclaw/issues/9106)) and OpenClaw's thread-bound agent-to-agent messaging ([#50798](https://github.com/openclaw/openclaw/issues/50798)) indicate the next wave after single-agent maturity.

7. **Deployment flexibility determines real-world adoption.** Dockerless runtimes, K8s pod spawning, Apple Container support, and Linux/Windows desktop apps dominate long-running user demand — container-only agents are leaving enterprise and host-tool users behind.

8. **Value for AI agent developers:** prioritize (a) memory architectures with provenance and cache-stable prompt construction, (b) delivery-acknowledged channel adapters, (c) secret-safe credential handling by design, and (d) OpenAI-compatible API surfaces. Projects that ship these first will consolidate the next wave of community migration.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-08-01

## Today's Overview

NanoBot saw a busy 24-hour cycle: 4 issues were updated and 13 PRs were active, with 6 PRs closed/merged and 7 still open. No new releases were published in this window. Activity was concentrated on stability fixes for channel integrations (WeChat, Slack), WebUI polish, and a major session-storage migration from JSONL to SQLite. The project appears healthy and actively maintained, with multiple contributors shipping fixes and features in parallel.

## Releases

No new releases were published in the last 24 hours.

## Project Progress

Closed or merged PRs today:

- **PR #5196** — [fix(weixin): recover refreshed state after session expiry](https://github.com/HKUDS/nanobot/pull/5196)  
  Fixes the WeChat `errcode -14` 60-minute pause problem by reloading persisted session state after pause expiry. Directly addresses issue #5195.

- **PR #4223** — [fix(weixin): reload session state after pause expiry](https://github.com/HKUDS/nanobot/pull/4223)  
  An older related fix, opened 2026-06-06, closed today; appears superseded or consolidated with #5196.

- **PR #5192** — [fix(slack): scope channel thread openers to their own session](https://github.com/HKUDS/nanobot/pull/5192)  
  Fixes Slack threads started from a top-level channel message incorrectly sharing a channel-wide session.

- **PR #5193** — [fix(webui): preserve user scroll ownership near tail](https://github.com/HKUDS/nanobot/pull/5193)  
  Improves the WebUI chat scroll behavior so users do not lose control of the viewport near the message tail.

- **PR #5173** — [feat(session): migrate session storage from JSONL to SQLite](https://github.com/HKUDS/nanobot/pull/5173)  
  Major infrastructure change: SQLite becomes the runtime session store, with transactional JSONL import and rollback backups.

- **PR #5189** — [fix(config): install timezone data on all platforms](https://github.com/HKUDS/nanobot/pull/5189)  
  Adds `tzdata` fallback for platforms such as Termux that lack system timezone databases.

## Community Hot Topics

The only issue with comments in this window is:

- **Issue #5195** — [\[bug\] Re-scan QR login overwrites new token with old one in `stop()`](https://github.com/HKUDS/nanobot/issues/5195) (2 comments, closed)  
  This is the clearest community pain point today: WeChat channel re-login can corrupt session state and cause a 60-minute silent pause. The underlying need is for reliable re-authentication and state recovery in long-running channel processes.

No other issue or PR in this snapshot has significant comment or reaction activity, though the volume of WeChat-related fixes suggests that channel stability remains a top user concern.

## Bugs & Stability

Ranked by severity:

1. **Critical — WeChat re-login overwrites fresh token**  
   [Issue #5195](https://github.com/HKUDS/nanobot/issues/5195)  
   Re-scanning a QR code and calling `stop()` can overwrite the new token with the old one, leading to immediate `errcode -14` and a 60-minute pause.  
   **Fix status:** Addressed by [PR #5196](https://github.com/HKUDS/nanobot/pull/5196), closed today.

2. **High — Frontend fails to load JS modules with MIME type `text/plain`**  
   [Issue #5190](https://github.com/HKUDS/nanobot/issues/5190)  
   On Windows, registry-assigned MIME types can make the server serve `.js` as `text/plain`, breaking the WebUI.  
   **Fix status:** [PR #5191](https://github.com/HKUDS/nanobot/pull/5191) is open.

3. **Medium — Cannot change models within a session**  
   [Issue #5198](https://github.com/HKUDS/nanobot/issues/5198)  
   The `/model` command and model blip do not allow switching top-choice model per session. No fix PR is open yet.

4. **Low — Startup failure on Termux due to timezone data**  
   [Issue #5187](https://github.com/HKUDS/nanobot/issues/5187)  
   Termux lacks system timezone database, making `nanobot` fail to load config.  
   **Fix status:** Resolved by [PR #5189](https://github.com/HKUDS/nanobot/pull/5189), closed today.

## Feature Requests & Roadmap Signals

- **Per-session model switching** is an implicit feature request from [Issue #5198](https://github.com/HKUDS/nanobot/issues/5198). Users expect parity with commercial chat UIs where the current model can be changed within a conversation.

- **PR #5184 — [feat(webui): add Quick Chat and Temporary Chat](https://github.com/HKUDS/nanobot/pull/5184)** (open)  
  Adds persistent Quick Chat and opt-in Temporary Chat, reusing the existing session/thread/streaming stack. This is a strong candidate for the next feature release.

- **PR #5197 — [feat(providers): support DeepSeek Responses API](https://github.com/HKUDS/nanobot/pull/5197)** (open)  
  Routes `deepseek-v4-flash` through DeepSeek’s native Responses API while preserving existing Chat Completions behavior. Likely to land in an upcoming provider-focused release.

- **PR #5194 — [perf(webui): reduce JSONL session list overhead](https://github.com/HKUDS/nanobot/pull/5194)** (open)  
  Performance optimization for `/api/sessions`, indicating continued WebUI scalability work.

- The merged **SQLite session migration (#5173)** is a major roadmap signal: future versions will no longer depend on JSONL as the runtime store.

## User Feedback Summary

User pain points in this window are mostly platform- and integration-specific:

- WeChat channel users need reliable QR re-login without silent 60-minute outages (#5195).
- Windows users cannot load the WebUI because static assets are served with the wrong MIME type (#5190).
- Termux users could not start NanoBot at all without system timezone data (#5187).
- Users want a more flexible model-selection UX per session (#5198).
- Slack users were running into cross-thread session contamination, now fixed in #5192.

Overall, feedback reflects a technically engaged user base testing edge environments and demanding production-grade channel reliability. No expressions of satisfaction or praise were captured in this snapshot.

## Backlog Watch

No open issue or PR appears abandoned in this snapshot. The oldest item closed today was **PR #4223**, open since 2026-06-06 and closed in the context of the newer WeChat session recovery fix. Maintainers should watch:

- [Issue #5198](https://github.com/HKUDS/nanobot/issues/5198) — no fix PR yet, but tied to a common UX expectation.
- [PR #5191](https://github.com/HKUDS/nanobot/pull/5191) — Windows MIME fix, important for WebUI usability on Windows.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-08-01

## 1. Today's Overview

Hermes Agent's public GitHub activity remained high on 2026-08-01: **50 issues** were updated (46 open, 4 closed) and **50 PRs** were updated (40 open, 10 merged/closed). No new release was published. The main themes were update/install reliability on macOS and Windows, streaming/message-delivery correctness for Telegram, session-state safety, and security hardening. Maintainers closed several issues with `sweeper:implemented-on-main`, indicating active fix progress even without a release. Overall project health looks strong on responsiveness, but the issue mix suggests native packaging and provider edge-cases are still the most fragile areas.

## 2. Releases

No new releases were published on 2026-08-01. There are therefore no changelogs, breaking changes, or migration notes to report.

## 3. Project Progress

10 PRs were merged/closed in the last 24 hours. Among the visible closed PRs:

- [#67157](https://github.com/NousResearch/hermes-agent/pull/67157) — Interactive `/profile` list picker with arrow-key navigation (closed).
- [#65758](https://github.com/NousResearch/hermes-agent/pull/65758) — Set file descriptor limits in the macOS launchd plist (closed).
- [#65669](https://github.com/NousResearch/hermes-agent/pull/65669) — Prevent duplicate response rendering after tool-call transitions (closed).
- [#75799](https://github.com/NousResearch/hermes-agent/pull/75799) — `HERMES_OFFLINE` env for air-gapped deployments (closed as not-planned).

Several closed issues also reflect progress:

- [#75804](https://github.com/NousResearch/hermes-agent/issues/75804) — Hardcoded paid OpenRouter fallback model, closed as duplicate.
- [#75768](https://github.com/NousResearch/hermes-agent/issues/75768) — Telegram typing indicator stuck indefinitely, closed as implemented-on-main.
- [#75810](https://github.com/NousResearch/hermes-agent/issues/75810) — macOS desktop updater deadlock with launchd gateway, closed as implemented-on-main.
- [#75806](https://github.com/NousResearch/hermes-agent/issues/75806) — Synthetic model IDs entering production usage records, closed with `needs-decision`/`cannot-reproduce`.

Important in-flight fix PRs updated today include:

- [#75730](https://github.com/NousResearch/hermes-agent/pull/75730) — Refuse `config.set` writes to administrator-managed keys in the TUI/gateway.
- [#75752](https://github.com/NousResearch/hermes-agent/pull/75752) — Recover from interrupted Windows updates (missing `hermes.exe`, `ENOTEMPTY`).
- [#75795](https://github.com/NousResearch/hermes-agent/pull/75795) — Show purpose, effect, and risk in dangerous-command approval prompts.
- [#75811](https://github.com/NousResearch/hermes-agent/pull/75811) — Let the CLI honor `agent.clarify_timeout`.
- [#75800](https://github.com/NousResearch/hermes-agent/pull/75800) — Bind Teams approval card actions to conversation and enforce render permissions.
- [#75814](https://github.com/NousResearch/hermes-agent/pull/75814) — Send QQ cron deliveries as markdown.
- [#75812](https://github.com/NousResearch/hermes-agent/pull/75812) / [#75813](https://github.com/NousResearch/hermes-agent/pull/75813) — Honcho cache-busting and Windows config-path fixes.

## 4. Community Hot Topics

The most active issue threads by comment count reveal the community's current pain points:

- [#69078](https://github.com/NousResearch/hermes-agent/issues/69078) — **13 comments** — xAI Grok-4.5 `Invalid PNG image` 400 permanently bricks a session. Users need session recovery paths that survive bad tool results.
- [#64231](https://github.com/NousResearch/hermes-agent/issues/64231) — **13 comments** — Plugin lifecycle-event catalog and hook taxonomy. Plugin authors want a coherent standard instead of one-off hook additions.
- [#74836](https://github.com/NousResearch/hermes-agent/issues/74836) — **9 comments** — macOS in-app update permanently broken by a stale `~/.hermes/hermes-setup` binary. Update reliability is a major user-facing concern.
- [#71643](https://github.com/NousResearch/hermes-agent/issues/71643) — **6 comments** — Telegram streaming sends a stale preview as the final edit and suppresses the complete delivery. Delivery correctness remains sensitive.
- [#75598](https://github.com/NousResearch/hermes-agent/issues/75598) — **5 comments** — Windows update problems and multiple conflicting gateways across profiles.
- [#60789](https://github.com/NousResearch/hermes-agent/issues/60789) — **4 comments** — `session_search(profile=...)` silently searches the current profile instead of the named one.
- [#72316](https://github.com/NousResearch/hermes-agent/issues/72316) — **4 comments** — Ollama Cloud GLM false-positive truncation and missing `partial` status in SSE.
- [#75725](https://github.com/NousResearch/hermes-agent/issues/75725) — **4 comments** — MiniMax-M3 interleaved thinking stops after the first tool-call turn.
- [#43666](https://github.com/NousResearch/hermes-agent/issues/43666) — **4 comments** — Redaction gaps at the persistence boundary: tool-output dumps, compaction blocks, and DB URIs can leak secrets.
- [#73060](https://github.com/NousResearch/hermes-agent/issues/73060) — **3 comments** — Gateway `/stop` discards only the queue head, and queued FIFO overflow still runs.

Underlying need: users are not primarily asking for new features; they are asking for **session-state resilience, delivery integrity, and safe update paths**.

## 5. Bugs & Stability

### High-impact bugs

- [#71643](https://github.com/NousResearch/hermes-agent/issues/71643) — **P1** — Telegram streaming can permanently deliver truncated replies even when all Bot API calls succeed. No dedicated fix PR is visible in today's top-20.
- [#74836](https://github.com/NousResearch/hermes-agent/issues/74836) — **P1** — macOS updater is permanently broken by a stale `hermes-setup` binary with no version check. Related updater deadlock [#75810](https://github.com/NousResearch/hermes-agent/issues/75810) is closed as implemented-on-main.
- [#69078](https://github.com/NousResearch/hermes-agent/issues/69078) — **P2 but severe** — xAI image 400 error can brick a session permanently, evading image-recovery matchers.
- [#74649](https://github.com/NousResearch/hermes-agent/issues/74649) — **P2 security** — Desktop API proxy can send session credentials to attacker-controlled hosts via `@-paths`.
- [#43666](https://github.com/NousResearch/hermes-agent/issues/43666) — **P2 security** — Secret redaction is inconsistent at the persistence boundary; open since June.

### Medium-impact bugs

- [#75598](https://github.com/NousResearch/hermes-agent/issues/75598) — Windows update instability and conflicting multi-profile gateways. [#75752](https://github.com/NousResearch/hermes-agent/pull/75752) addresses part of the Windows update-recovery failure.
- [#73060](https://github.com/NousResearch/hermes-agent/issues/73060) — `/stop` only removes the queue head; remaining queued messages run anyway.
- [#60789](https://github.com/NousResearch/hermes-agent/issues/60789) — `session_search(profile=...)` searches the current profile, breaking named-profile workflows.
- [#72316](https://github.com/NousResearch/hermes-agent/issues/72316) — Ollama Cloud GLM false-positive truncation and missing partial-stream status.
- [#75761](https://github.com/NousResearch/hermes-agent/issues/75761) — Same-profile desktop sessions can overwrite image uploads generated in the same second.
- [#74965](https://github.com/NousResearch/hermes-agent/issues/74965) — Telegram albums can split across turns when sibling downloads finish at different times.
- [#75791](https://github.com/NousResearch/hermes-agent/issues/75791) — `hermes dashboard --status` falsely reports no dashboard on Windows 11 25H2.
- [#75766](https://github.com/NousResearch/hermes-agent/issues/75766) — `/hatch` fails because the 3.11 server resolves the Python 3.12 user-site Pillow.
- [#39829](https://github.com/NousResearch/hermes-agent/issues/39829) — Bedrock rejects whitespace-only placeholder text, breaking assistant-first history resume.
- [#75811](https://github.com/NousResearch/hermes-agent/pull/75811) — CLI silently auto-decides after 120s when only `agent.clarify_timeout` is configured.

Fix PRs in flight from the visible set include [#75730](https://github.com/NousResearch/hermes-agent/pull/75730), [#75752](https://github.com/NousResearch/hermes-agent/pull/75752), [#75800](https://github.com/NousResearch/hermes-agent/pull/75800), and [#70930](https://github.com/NousResearch/hermes-agent/pull/70930) (upstream 403 error classification).

## 6. Feature Requests & Roadmap Signals

Notable feature/refactor signals from today:

- [#64231](https://github.com/NousResearch/hermes-agent/issues/64231) — Plugin lifecycle-event catalog, hook taxonomy, and batch disposition of pending hook PRs. This could become a tracking issue for plugin standards.
- [#75781](https://github.com/NousResearch/hermes-agent/issues/75781) — Better visual separation of fenced code blocks in the Ink TUI.
- [#71853](https://github.com/NousResearch/hermes-agent/issues/71853) — Skill dependency declaration (`depends_on`) with install-time enforcement.
- [#72896](https://github.com/NousResearch/hermes-agent/issues/72896) — Gmail send/draft `--attach` support.
- [#75186](https://github.com/NousResearch/hermes-agent/issues/75186) — Allow `codex_app_server` to route named custom providers.
- [#75786](https://github.com/NousResearch/hermes-agent/issues/75786) and [#75746](https://github.com/NousResearch/hermes-agent/issues/75746) — God-file decomposition for `CLICommandsMixin` and the Telegram topic cluster in `SessionDB`.
- [#75808](https://github.com/NousResearch/hermes-agent/pull/75808) — Extend RFC 8252 native sign-in to password providers via system-browser autofill.

Likely next-version candidates: macOS/Windows updater fixes, Telegram final-message delivery fix, and security PRs like [#75730](https://github.com/NousResearch/hermes-agent/pull/75730) and [#75800](https://github.com/NousResearch/hermes-agent/pull/75800), assuming they land on `main` and get released.

## 7. User Feedback Summary

Real user pain points visible in today's data:

- **Updates are fragile:** macOS users report permanent updater breakage; Windows users report instability after recent updates.
- **Message delivery is still a trust issue:** Telegram preview text can become final text, albums split across turns, and typing indicators can get stuck.
- **Session corruption is frightening for users:** one bad image can permanently brick an xAI session; recovery requires deleting the session.
- **Profile isolation is not consistent:** profile arguments are silently ignored in `session_search`, and multiple Windows gateways can conflict.
- **Security-conscious users want stronger boundaries:** redaction gaps, credential exfiltration via Desktop API proxy, and Teams approval escalation were all raised.

Satisfaction signals: maintainers are triaging quickly — several issues were closed as duplicates or implemented-on-main, and security-focused PRs are moving. The absence of a release today means many users are still waiting for fixes to ship.

## 8. Backlog Watch

Older, still-open items that appear to need maintainer attention:

- [#43666](https://github.com/NousResearch/hermes-agent/issues/43666) — **P2 security**, opened 2026-06-10 — Redaction gaps at the persistence boundary. High importance and no visible fix PR.
- [#39829](https://github.com/NousResearch/hermes-agent/issues/39829) — **P2**, opened 2026-06-05 — Bedrock whitespace-placeholder rejection breaks assistant-first history.
- [#58728](https://github.com/NousResearch/hermes-agent/issues/58728) — **P2**, opened 2026-07-05 — Matrix streaming sends final/split messages but no `m.replace` edits.
- [#60789](https://github.com/NousResearch/hermes-agent/issues/60789) — **P2**, opened 2026-07-08 — `session_search(profile=...)` silently searches the wrong profile DB.
- [#60637](https://github.com/NousResearch/hermes-agent/issues/60637) — **P3**, opened 2026-07-08 — Email gateway UID trimming can replay old unread mail in large inboxes.
- [#45307](https://github.com/NousResearch/hermes-agent/issues/45307) — **P3**, opened 2026-06-13 — `_find_skill()` only compares `parent.name`, so `category/skill` paths always fail.
- [#42705](https://github.com/NousResearch/hermes-agent/pull/42705) — Russian locale PR, opened 2026-06-09 — Large translation contribution still open.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-08-01

## 1. Today's Overview
PicoClaw saw light but meaningful activity in the last 24 hours: two open issues were updated and three pull requests were touched, with no new releases or merged PRs. The project continues to receive community contributions around new channel types (Simplex), model fallback configuration, and a significant DeltaChat cleanup. However, the lack of any merged PRs suggests maintainer review capacity is the current bottleneck. No new crashes or regressions were reported today, though a pre-existing CPU-usage issue remains open. Overall project health is stable with steady, if modest, contributor engagement.

## 2. Releases
No new releases were published in this window.

## 3. Project Progress
No pull requests were merged or closed today. The following open PRs received updates and remain under review:

- [#3222 refactor(deltachat): cleanup implementation, documentation -200LOC](https://github.com/sipeed/picoclaw/pull/3222) — drops legacy fallbacks, removes password-based email config, renames `invite_link` to `join_invite_link` and adds `show_invite_link`.
- [#3193 Added simplex channel type](https://github.com/sipeed/picoclaw/pull/3193) — new non-breaking feature adding Simplex as a supported channel.
- [#3200 feat(models): add configurable default fallback chain](https://github.com/sipeed/picoclaw/pull/3200) — lets users configure and persist a model fallback chain via the web UI and backend API.

These features have not yet advanced into `main`.

## 4. Community Hot Topics
The most actively discussed item is the feature request **#3287 “[Feature] Better support long messages in IRC”** ([issue](https://github.com/sipeed/picoclaw/issues/3287)) with 2 comments. The underlying need is clear: IRC clients split messages longer than 512 bytes into multiple lines, and PicoClaw currently treats these fragments as separate messages. Users want IRCv3 long-form messages to be handled as a single cohesive unit.

The CPU bug **#3292** ([issue](https://github.com/sipeed/picoclaw/issues/3292)) also received recent attention, with 1 comment describing web UI input focus causing high CPU usage in Firefox.

Among PRs, **#3200**, **#3222**, and **#3193** are all large, actively-maintained feature branches, though no discussion comments are attached in the provided data.

## 5. Bugs & Stability
One open bug is currently reported:

- **#3292 — CPU usage too high when focus on input box in chat interface** ([issue](https://github.com/sipeed/picoclaw/issues/3292))  
  **Severity:** Medium — degrades UX and could significantly impact resource usage on Linux/Firefox.  
  **Status:** Open, reported 2026-07-24, no linked fix PR exists yet.

No other crashes, regressions, or stability problems were reported in the last 24 hours.

## 6. Feature Requests & Roadmap Signals
The following items point toward possible next-version features:

- **Long IRC message support** ([#3287](https://github.com/sipeed/picoclaw/issues/3287)) – user-requested, no implementation PR yet.
- **Simplex channel type** ([#3193](https://github.com/sipeed/picoclaw/pull/3193)) – new protocol integration, ready for review.
- **Configurable model fallback chain** ([#3200](https://github.com/sipeed/picoclaw/pull/3200)) – major web UI/backend feature, likely to land after maintainer review.
- **DeltaChat cleanup/refactor** ([#3222](https://github.com/sipeed/picoclaw/pull/3222)) – not user-facing but signals a direction toward aligning with official APIs and reducing legacy code.

If maintainers merge the pending PRs, the next version may include Simplex support and the model fallback chain. The IRC long-message request has no active implementation yet but appears to be a popular direction.

## 7. User Feedback Summary
Current user-reported pain points are concrete and focused:

- IRC conversation context is broken when long messages are split (each fragment appears as a new message).
- Web chat interface consumes excessive CPU whenever the input box is focused, especially in Firefox on Linux.

Both reports describe reproducible environments (deepseek-v4-flash model, PicoClaw 0.3.1, Debian/Linux x64). No strong negative feedback or user churn signals appear beyond these issues, and the pull request descriptions indicate contributors are actively building features rather than filing complaints.

## 8. Backlog Watch
Several important items are waiting for maintainer attention:

- **PR #3193** ([pull](https://github.com/sipeed/picoclaw/pull/3193)) — open since 2026-06-27 (35 days). New Simplex channel support; no comments or maintainer response visible.
- **PR #3200** ([pull](https://github.com/sipeed/picoclaw/pull/3200)) — open since 2026-07-01 (31 days). Notable model fallback chain feature; needs review.
- **PR #3222** ([pull](https://github.com/sipeed/picoclaw/pull/3222)) — open since 2026-07-03 (29 days). Large DeltaChat refactor, -200 LOC; requires careful review.
- **Issue #3292** ([issue](https://github.com/sipeed/picoclaw/issues/3292)) — open since 2026-07-24 (8 days), no fix PR or maintainer response.
- **Issue #3287** ([issue](https://github.com/sipeed/picoclaw/issues/3287)) — open since 2026-07-22 (10 days), feature request currently unimplemented.

These items are not necessarily abandoned, but the absence of merged PRs and maintainer comments suggests review latency is the primary blocker to project momentum.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

## 1. Today's Overview

As of 2026-08-01, NanoClaw shows moderate, focused activity: 8 issues were updated in the last 24h, all of them still open, and 10 PRs were updated — 6 remain open while 4 were closed. No new release was published. The current work centers on deployment flexibility (Kubernetes, Apple Container, no-Docker options), channel integrations (iMessage, Dial), and a few security/stability fixes. The issue tracker is healthy but contains multiple long-running deployment requests that have not yet converged into a shipped solution.

## 2. Releases

No new releases were published on 2026-08-01. The latest release path is v2.1.54, and PR #3163 — focused on restoring that release path — was closed, indicating release automation repair rather than a new public version.

## 3. Project Progress

Four PRs were closed/merged or closed in the last 24h:

- [PR #3163](https://github.com/qwibitai/nanoclaw/pull/3163) — `fix(release): restore the v2.1.54 release path`  
  Release-infrastructure fix, likely unblocking future releases.
- [PR #3076](https://github.com/qwibitai/nanoclaw/pull/3076) — `feat(imessage): unified local+hosted adapter targeting spectrum-ts v11`  
  Advances iMessage channel consolidation.
- [PR #1678](https://github.com/qwibitai/nanoclaw/pull/1678) — `docs(skills): update voice transcription skills for Telegram + Linux`  
  Expands local-Whisper documentation beyond WhatsApp.
- [PR #3165](https://github.com/qwibitai/nanoclaw/pull/3165) — `Codex/copilot changes`  
  Closed; no clear user-facing feature described.

Still open and under review:

- [PR #3164](https://github.com/qwibitai/nanoclaw/pull/3164) — Hosted iMessage registration flow
- [PR #2809](https://github.com/qwibitai/nanoclaw/pull/2809) — Apple Container runtime + remote OneCLI gateway
- [PR #3041](https://github.com/qwibitai/nanoclaw/pull/3041) — Dial channel adapter (SMS + AI voice calls)
- [PR #3161](https://github.com/qwibitai/nanoclaw/pull/3161) — Redact secrets from host structured logs
- [PR #2954](https://github.com/qwibitai/nanoclaw/pull/2954) — Security reporting and triage policy docs
- [PR #2651](https://github.com/qwibitai/nanoclaw/pull/2651) — Validate pending question response origin

## 4. Community Hot Topics

- [Issue #1184](https://github.com/qwibitai/nanoclaw/issues/1184) — Deploying in restricted K8s environments (Sealos): 3 comments, 1 👍  
  Author values NanoClaw’s minimalist security posture but needs a production path in restricted Kubernetes environments.

- [Issue #1732](https://github.com/qwibitai/nanoclaw/issues/1732) — Native runner mode to bypass Docker: 3 comments  
  Users need direct host access for tmux-based coding workflows, headed browsers, and macOS APIs, which container isolation blocks.

- [Issue #1225](https://github.com/qwibitai/nanoclaw/issues/1225) — Run it without Docker: 2 comments  
  Windows/Linux users without Docker are asking for a simpler runtime path.

- [Issue #2354](https://github.com/qwibitai/nanoclaw/issues/2354) — Kubernetes container runtime for agent spawning: 1 comment, 1 👍  
  Community interest in spawning per-session agent pods on a user-provided Kubernetes cluster.

Common theme: users appreciate NanoClaw’s security model but need runtime/deployment options beyond local Docker.

## 5. Bugs & Stability

Ranked by severity:

- **High — [Issue #3162](https://github.com/qwibitai/nanoclaw/issues/3162): Telegram pairing silently broken if boot-time getMe fails**  
  A single failed HTTP call during boot can permanently block pairing for the process lifetime, with no user-facing diagnostics.

- **High — [Issue #2588](https://github.com/qwibitai/nanoclaw/issues/2588): `skill/apple-container` branch is out of sync with mainline**  
  `/convert-to-apple-container` fails immediately because the branch references removed APIs and Node/tsc assumptions that mainline replaced with Bun.

- **High — [Issue #2589](https://github.com/qwibitai/nanoclaw/issues/2589): `host.docker.internal` does not resolve inside Apple Container microVM**  
  OneCLI proxy URLs fail inside spawned agent containers, and `--add-host` is unsupported.

- **Medium/Security — [Issue #2923](https://github.com/qwibitai/nanoclaw/issues/2923): forged click can deface `ask_user_question` card before origin authz**  
  Display-integrity spoofing risk. Related fix PR [PR #2651](https://github.com/qwibitai/nanoclaw/pull/2651) remains open.

- **Security fix in review — [PR #3161](https://github.com/qwibitai/nanoclaw/pull/3161)**  
  Redacts credentials from host structured log lines before writing to `nanoclaw.log`.

## 6. Feature Requests & Roadmap Signals

- **Native/non-Docker runtime** — [Issue #1732](https://github.com/qwibitai/nanoclaw/issues/1732) and [Issue #1225](https://github.com/qwibitai/nanoclaw/issues/1225) both push for a way to run agents with direct host access or without Docker.
- **Kubernetes runtime** — [Issue #2354](https://github.com/qwibitai/nanoclaw/issues/2354) asks for pod-based agent spawning; likely depends on a runtime abstraction.
- **Apple Container integration** — [PR #2809](https://github.com/qwibitai/nanoclaw/pull/2809) is already open and env-gated, so Apple Container support may land before K8s.
- **Channel expansion continues** — [PR #3041](https://github.com/qwibitai/nanoclaw/pull/3041) adds Dial (SMS + AI voice calls); [PR #3164](https://github.com/qwibitai/nanoclaw/pull/3164) and merged/closed [PR #3076](https://github.com/qwibitai/nanoclaw/pull/3076) advance iMessage support.

Likely next-version candidates: container-runtime abstraction with Apple Container support, unified iMessage adapter, and possibly a Kubernetes runtime if community pressure continues.

## 7. User Feedback Summary

- **Positive**: [Issue #1184](https://github.com/qwibitai/nanoclaw/issues/1184) explicitly praises NanoClaw as a lightweight, secure alternative to heavier agent frameworks.
- **Pain points**:
  - Restricted/enterprise Kubernetes users cannot easily deploy NanoClaw today.
  - Docker-free Windows/Linux users feel blocked.
  - Host-tool use cases (tmux, headed browsers, macOS APIs) are hard to support under container isolation.
  - Apple Container support is effectively broken for users following the documented conversion path.
  - Telegram pairing can fail silently, creating a confusing lockout.

Overall, users are engaged and supportive of the architecture, but deployment flexibility and Apple Container maturity are the biggest sources of friction.

## 8. Backlog Watch

Long-open items needing maintainer attention:

- [Issue #1184](https://github.com/qwibitai/nanoclaw/issues/1184) — Restricted K8s deployment, open since 2026-03-17.
- [Issue #1732](https://github.com/qwibitai/nanoclaw/issues/1732) — Native runner mode, open since 2026-04-10.
- [Issue #2354](https://github.com/qwibitai/nanoclaw/issues/2354) — Kubernetes container runtime, open since 2026-05-08.
- [Issue #2588](https://github.com/qwibitai/nanoclaw/issues/2588) and [Issue #2589](https://github.com/qwibitai/nanoclaw/issues/2589) — Apple Container branch sync/DNS issues, open since 2026-05-22.
- [PR #2651](https://github.com/qwibitai/nanoclaw/pull/2651) — Pending-question origin validation security fix, open since 2026-05-30.
- [PR #2809](https://github.com/qwibitai/nanoclaw/pull/2809) — Apple Container runtime + remote OneCLI gateway, open since 2026-06-18.
- [PR #2954](https://github.com/qwibitai/nanoclaw/pull/2954) — Security reporting/triage policy docs, open since 2026-07-04.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest — 2026-08-01

## 1. Today's Overview
NullClaw experienced minimal activity over the past 24 hours: zero issues were updated, no releases were published, and exactly one pull request received an update. The sole activity is PR #981, an open feature contribution adding a `grok-cli` provider for xAI Grok, signaling continued but slow-paced expansion of the provider ecosystem. No code was merged and no bugs were reported, placing the project in a low-activity, stable state. Maintainer bandwidth appears to be the main constraint, with the pending CLI-provider PR awaiting review.

## 2. Releases
No new releases were published on 2026-08-01. This section is omitted per absence of release data.

## 3. Project Progress
- No PRs were merged or closed during the digest window.
- **PR #981** ([link](https://github.com/nullclaw/nullclaw/pull/981)) — `feat(provider): add grok-cli provider for xAI Grok CLI` by valonmulolli — was updated within the last 24 hours but remains **open**. It adds a CLI-based provider that delegates to the local `grok` CLI using the same spawn-per-request pattern as the existing `codex-cli`, `gemini-cli`, and `claude-cli` providers. No feature or fix landed on the default branch today.

## 4. Community Hot Topics
- **PR #981** ([link](https://github.com/nullclaw/nullclaw/pull/981)) is the only active item, with zero comments and zero reactions. Despite the absence of discussion, its very existence reveals user demand for xAI Grok integration and for extending NullClaw's "thin CLI wrapper" provider architecture to additional external AI tools. The underlying need is interoperability: users want a consistent, unified interface to invoke locally installed AI CLIs without leaving the NullClaw workflow.

## 5. Bugs & Stability
No bugs, crashes, regressions, or stability issues were reported or fixed in the last 24 hours. No severity assessment is warranted given the absence of bug-related activity.

## 6. Feature Requests & Roadmap Signals
- **PR #981** ([link](https://github.com/nullclaw/nullclaw/pull/981)) functions as a concrete feature request for a `grok-cli` provider. If merged, it would establish a fourth CLI-backed provider, reinforcing a clear architectural pattern. This suggests the near-term roadmap is likely to include further CLI-provider additions (e.g., `ollama`, `llama-cli`, or GitHub Copilot). Inclusion in an upcoming version is plausible given the mature pattern and the project's demonstrated appetite for provider breadth.

## 7. User Feedback Summary
- The only user-generated signal today is valonmulolli's PR #981, indicating a desire to use xAI's Grok CLI through NullClaw. This is a constructive, contribution-level signal rather than a complaint, reflecting a user invested enough to implement the integration themselves. No dissatisfaction, pain points, or negative experiences were expressed in the digest window.

## 8. Backlog Watch
- **PR #981** ([link](https://github.com/nullclaw/nullclaw/pull/981)) — opened 2026-07-29, last updated 2026-07-31 — has received **no maintainer or community comments** as of the digest date. While only ~3 days old, the complete lack of engagement may warrant a maintainer review or a response to keep contributor momentum alive and prevent the PR from going stale.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-08-01

## 1. Today's Overview

IronClaw is in a high-velocity consolidation phase. Activity in the last 24h was dominated by the **WS1 target-architecture wave**: four stacked contract-extraction PRs (WS1.1–WS1.4) merged, carving neutral loop/extension/product contracts out of `ironclaw_host_api`, with WS1.5–WS1.7 still in flight. A new **P0/P1 cache-performance and token-accounting workstream** was filed from the pi-harness adoption program (issues #6984–#6990), signaling a focused push on prompt-cache efficiency and cost. WebUI bug fixing accelerated, with admin-user pagination merged and a fabricated-metrics fix in review. However, the report also carries several unresolved security/privacy bugs (a P0 cross-user memory leak, a shared home-directory privacy issue) and structural CI failures that remain open. No releases shipped today.

- Issues updated: **36** (29 open/active, 7 closed)
- PRs updated: **50** (21 open, 29 merged/closed)
- New releases: **0**

## 2. Releases

No new releases were published today.

⚠️ **Watch item:** Release PR [#5598](https://github.com/nearai/ironclaw/pull/5598) (open since Jul 3) is pending and carries **API-breaking changes**:
- `ironclaw_common`: 0.4.2 → **0.5.0** (breaking — `copy_impl_added` and other contract changes)
- `ironclaw_skills`: 0.3.0 → **0.4.0** (breaking)
- `ironclaw_safety`: 0.2.2 → 0.2.3 (compatible)

No migration notes have been published yet; downstream consumers should watch this PR.

## 3. Project Progress

The WS1 target-architecture wave made substantial progress — four of seven workstreams landed:

- **[#6967 (WS1.1)](https://github.com/nearai/ironclaw/pull/6967) — merged:** Completed turn vocabulary in `ironclaw_host_api` and retired the turns shims.
- **[#6975 (WS1.2)](https://github.com/nearai/ironclaw/pull/6975) — merged:** Extracted `ironclaw_loop_contracts` and flipped `ironclaw_agent_loop` onto it, with CI enforcement.
- **[#6977 (WS1.3)](https://github.com/nearai/ironclaw/pull/6977) — merged:** Extracted `ironclaw_extension_contracts` and closed dual-import paths.
- **[#6980 (WS1.4)](https://github.com/nearai/ironclaw/pull/6980) — merged:** Extracted `ironclaw_product_contracts` and landed the `ChannelAdapter` half.
- **[#6981 (WS1.5)](https://github.com/nearai/ironclaw/pull/6981) — open:** Consolidates sealed-evidence minting behind witness grants (XL, collapsed to `main`, byte-identical verified).
- **[#6982 (WS1.6+WS1.7)](https://github.com/nearai/ironclaw/pull/6982) — open:** Narrows `ironclaw_common`; notes that several planned clauses did not survive contact with the code as written.

Other notable merges/advances:

- **[#6930](https://github.com/nearai/ironclaw/pull/6930) — merged (henrypark133):** Hosted MCP server registration with automatic auth detection (bearer/OAuth), wired into the full extension lifecycle. Docs reconciled in [#6979](https://github.com/nearai/ironclaw/pull/6979).
- **[#6908](https://github.com/nearai/ironclaw/pull/6908) — merged (italic-jinxin, human-verified):** Admin users list pagination, closing [#6903](https://github.com/nearai/ironclaw/issues/6903).
- **[#6906](https://github.com/nearai/ironclaw/pull/6906) — open (italic-jinxin):** Removes fabricated spend/gate/failure metrics from the Projects page (fix for [#6902](https://github.com/nearai/ironclaw/issues/6902)); only API-backed data rendered.
- **[#4022](https://github.com/nearai/ironclaw/pull/4022) — merged (zmanian):** Fixed a regression where HTTP response errors aborted runs instead of surfacing as recoverable tool errors.
- **[#3942](https://github.com/nearai/ironclaw/pull/3942) — merged (zmanian):** `PilotAllowlist` moved from string matches to a serde-driven enum with caller-level error-branch tests.
- **[#6991](https://github.com/nearai/ironclaw/pull/6991) — open (ilblackdragon):** New `docs/research/pi-agent-deep-dive.md` — deep analysis of the pi agent harness and IronClaw adoption plan.

## 4. Community Hot Topics

Most-discussed issues in the last 24h:

- **[#6284 — Error-recoverability endgame epic (15 comments)](https://github.com/nearai/ironclaw/issues/6284):** The model must recover from **100% of errors it sees**. Five-part recoverability contract: the run survives, the model sees the error, the error carries cause + fix, the model gets a turn, and no non-success is ever reported. This is the clearest signal of the project's reliability ambitions.
- **[#6963 — Path-keyed CI gates surviving #6946 (5 comments)](https://github.com/nearai/ironclaw/issues/6963):** Eight discovered CI/dev gates (six silent, two loud) still resolve scope from the flat `crates/ironclaw_*` tree shape; all block the first family `git mv`. Maintainer-driven infrastructure-debt tracking.
- **[#6524 — Hermetic capability & journey testing platform epic (4 comments)](https://github.com/nearai/ironclaw/issues/6524):** The project still cannot mechanically answer whether every supported capability and critical user journey has deterministic, meaningful coverage.
- **[#6940 — IronHub skill CTA 404 (2 comments)](https://github.com/nearai/ironclaw/issues/6940):** User-facing broken link across every skill.

**Underlying needs:** The three most active threads converge on a single theme — *trust through reliability*: recoverability contracts, hermetic test coverage, and CI gates that actually protect the architecture refactor. The lower-comment threads cluster around identity isolation and product terminology, showing near-term UX debt.

## 5. Bugs & Stability

Ranked by severity:

**🔴 P0 — Security/Privacy**
- **[#6900 — Cross-user memory leak via shared-channel default subject binding](https://github.com/nearai/ironclaw/issues/6900)** (`suggested_P0`, security): Unrouted shared conversations collapse all users into the operator's memory namespace. No fix PR yet — critical for multi-tenant safety.
- **[#6778 — Hosted-MCP cross-user metadata exposure](https://github.com/nearai/ironclaw/issues/6778):** Discovered tool catalogs are keyed by extension id, not installation, leaking metadata across principals on multi-user MCP servers. No fix PR.

**🟠 P0 — Cache/Performance workstream (from pi-harness program)**
- **[#6984](https://github.com/nearai/ironclaw/issues/6984):** No explicit Anthropic `cache_control` breakpoints — relies on automatic caching.
- **[#6985](https://github.com/nearai/ironclaw/issues/6985):** Prompt prefix mutated each turn (nudges before identity, timestamp in system block, per-run memory retrieval) — invalidates the cached prefix.
- **[#6986](https://github.com/nearai/ironclaw/issues/6986):** Advertised tool array is promoted mid-run — must stay byte-identical (`defer_loading`/`tool_reference`).
- **[#6987](https://github.com/nearai/ironclaw/issues/6987):** Needs a regression test pinning byte-identical prompt prefix once fixes land.

**🟡 P1 — Correctness / Performance**
- **[#6989 — Token accounting bug](https://github.com/nearai/ironclaw/issues/6989):** `ModelWorkRequest::for_assistant` estimates input tokens from `content_ref.as_str().len()` — the length of the *reference string*, not the referenced content.
- **[#6988 — Compaction hardcodes 128k context budget](https://github.com/nearai/ironclaw/issues/6988):** Should derive from the actual model window (128k − 20k reserve triggers at 108k).
- **[#6990 — Compaction inference pollutes prompt cache/session affinity](https://github.com/nearai/ironclaw/issues/6990):** Separate summarization calls share nothing with the run but can still disturb cache state.
- **[#6974 — libSQL thread_store_writes pathology](https://github.com/nearai/ironclaw/issues/6974):** Tool-heavy stress cases at **p95 37–135s** post-#6696; split out of #6973.
- **[#6973 — Postgres API capacity regressed by #6696](https://github.com/nearai/ironclaw/pull/6973) (PR open):** p95 3.74s → 12.0s; `send_message` p95 275ms → 4.78s. Fix PR by serrrfirat is open.

**🟢 P2 — UX / Auth / Ops**
- **[#6972 — New-account email authentication broken](https://github.com/nearai/ironclaw/issues/6972)**
- **[#6940 — IronHub skill CTA 404 across all skills](https://github.com/nearai/ironclaw/issues/6940)**
- **[#6866 — Shared home directory; all workspaces visible to all users](https://github.com/nearai/ironclaw/issues/6866)** (privacy, reported by tobias.holenstein)
- **[#6976 — `service install` does not enable user lingering](https://github.com/nearai/ironclaw/issues/6976)** — breaks unattended VMs/headless servers.
- **[#6978 — `workflow_dispatch` runs structurally fail Tests (Reborn) roll-up](https://github.com/nearai/ironclaw/issues/6978)** — CI-only failure proven from workflow source.
- **[#6947 — `classify-test-scope.sh` mis-buckets `ironclaw_product` as legacy-only](https://github.com/nearai/ironclaw/issues/6947)** — pre-existing glob bug.

**✅ Fixed today:** [#6903](https://github.com/nearai/ironclaw/issues/6903) (admin pagination → [#6908](https://github.com/nearai/ironclaw/pull/6908)); [#4022](https://github.com/nearai/ironclaw/pull/4022) (HTTP error recoverability regression).

## 6. Feature Requests & Roadmap Signals

User-requested features currently open:

- **[#6939 — Migration tool from legacy agents (Hermes/Openclaw) to IronClaw](https://github.com/nearai/ironclaw/issues/6939):** High switching costs; users resist starting from a clean slate. Strong candidate for the next release as adoption ramps.
- **[#6971 — Standardize "Tools" vs "Extensions" terminology](https://github.com/nearai/ironclaw/issues/6971):** Clarify whether tools/channels remain types of extensions.
- **[#6983 — `hub` alias for the `ironhub` CLI subcommand](https://github.com/nearai/ironclaw/issues/6983):** Small, cheap win for IronHub dashboard compatibility.
- **[#6854 — Replace "Reborn" branding with "Ironclaw 1.0"](https://github.com/nearai/ironclaw/issues/6854):** External-messaging consistency; likely paired with the terminology cleanup.
- **[#6941 — Skills epic (find/choose/use/self-create)](https://github.com/nearai/ironclaw/issues/6941):** A measured, subset epic carved out of oversized #6565.
- **[#6578 — Admin-Managed Agents as UserId Subjects](https://github.com/nearai/ironclaw/issues/6578):** Tenant admins operating non-human subjects without a second identity hierarchy.

**Roadmap signal — likely next-version items:** The **pi-harness adoption program** (issues #6984–#6990, plus docs PR #6991) points to a near-term release focused on token economics: explicit Anthropic cache breakpoints, stable byte-identical prompt prefixes, adaptive compaction budgets, and corrected token accounting. Also likely: `hub` CLI alias, Ironclaw 1.0 rebranding cleanup, and the legacy migration tool (if scoped).

## 7. User Feedback Summary

Real-user pain points surfacing through feedback-labeled issues:

- **Onboarding is fragile:** [#6972](https://github.com/nearai/ironclaw/issues/6972) — new accounts cannot authenticate via email; [#6940](https://github.com/nearai/ironclaw/issues/6940) — the IronHub skill CTA 404s for every skill. Both are first-impression blockers.
- **Privacy/trust concerns:** [#6866](https://github.com/nearai/ironclaw/issues/6866) — shared home directory exposes all users' workspaces (reported by tobias.holenstein); [#6902](https://github.com/nearai/ironclaw/issues/6902) — Projects page displays fabricated metrics ($0.00 spend, 0 failures) as if real, which undermines trust in the UI. Fix PR [#6906](https://github.com/nearai/ironclaw/pull/6906) is already in review.
- **Migration friction:** [#6939](https://github.com/nearai/ironclaw/issues/6939) — legacy Hermes/Openclaw users face high switching costs and may not migrate without a porting path.
- **Terminology/branding confusion:** [#6971](https://github.com/nearai/ironclaw/issues/6971) and [#6854](https://github.com/nearai/ironclaw/issues/6854) — "Tools" vs "Extensions" and stale "Reborn" branding on the extensions page.
- **Unattended deployment:** [#6976](https://github.com/nearai/ironclaw/issues/6976) — missing systemd lingering breaks headless/VM operation (Debian/Proxmox user).

**Satisfaction signal:** The feedback-to-fix loop is fast — the admin-pagination bug was filed Jul 30 and its fix merged within ~2 days; the fabricated-metrics issue got a fix PR the next day. Users' reports are being converted into tracked, labeled issues consistently.

## 8. Backlog Watch

Items needing maintainer attention:

- **[#5598 — Release PR, open since Jul 3 (~29 days)](https://github.com/nearai/ironclaw/pull/5598):** Long-pending release with breaking changes to `ironclaw_common` and `ironclaw_skills`. Risk of accumulating drift and merge conflicts; needs a decision to land or close.
- **[#5981 — Reborn queued-message steering, open since Jul 11](https://github.com/nearai/ironclaw/pull/5981)** and **[#5982 — Budget approval-as-blocked-gate, open since Jul 11](https://github.com/nearai/ironclaw/pull/5982):** Both large (XL) forward-ported features by ilblackdragon, stacked; long in review.
- **[#6831 — Standardized messaging framework, open since Jul 28](https://github.com/nearai/ironclaw/pull/6831):** Large XL PR (16 core ops, 13 reserved names, 12-code error taxonomy) awaiting review.
- **[#6778 — Hosted-MCP cross-user metadata exposure, filed Jul 28 (1 comment)](https://github.com/nearai/ironclaw/issues/6778):** Security issue with no assignee or fix PR — should be triaged as P0/P1.
- **[#6866 — Shared home directory privacy issue, filed Jul 29 (0 comments)](https://github.com/nearai/ironclaw/issues/6866):** User-reported privacy concern with zero maintainer response.
- **[#6900 — P0 cross-user memory leak, filed Jul 30 (1 comment)](https://github.com/nearai/ironclaw/issues/6900):** Highest-severity open security bug; no fix PR yet.
- **Review-queue congestion signal:** Two May PRs ([#4022](https://github.com/nearai/ironclaw/pull/4022), [#3942](https://github.com/nearai/ironclaw/pull/3942)) only merged on Jul 31, suggesting large-PR review latency is a bottleneck despite high merge velocity.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-08-01

## 1. Today's Overview
On 2026-08-01, LobsterAI shows a healthy but quiet maintenance phase. All 4 issues updated in the last 24 hours were closed (all stale items from early April), and 11 of 12 touched PRs were merged or closed, with only 1 PR still open. No new releases were published. The active development focus is on the OpenClaw/Cowork backend, where three PRs merged on July 31 address prompt-cache stability (restoring DeepSeek long-session cache hit rates) and tool-protocol hygiene. A release-prep PR (Release/2026.7.31) indicates a versioned release is in progress, while the bulk of closed items carry the `stale` label, indicating automated backlog cleanup rather than new feature work.

## 2. Releases
No new releases were published in the last 24 hours. (Note: [PR #2416 "Release/2026.7.31"](https://github.com/netease-youdao/LobsterAI/pull/2416) touched docs/main/openclaw areas and suggests a release branch is being prepared, but no tagged release appeared in the data.)

## 3. Project Progress
Merged/closed PRs in the last 24 hours cluster into two groups.

**Release and immediate fixes (July 31):**
- [#2416 Release/2026.7.31](https://github.com/netease-youdao/LobsterAI/pull/2416) — release preparation spanning docs, main, and openclaw areas.
- [#2417 fix(sites): add copy success feedback](https://github.com/netease-youdao/LobsterAI/pull/2417) — reuses the existing conversation copy icon and interaction pattern for site URLs and share codes.
- [#2415 fix(openclaw): drop aggregate cap in live tool-result prompt projection](https://github.com/netease-youdao/LobsterAI/pull/2415) — removes a fixed 4x aggregate character cap that rewrote unchanged tool-result history as new results arrived; passes `aggregateMaxCharsOverride=null` to restore prefix-cache stability.
- [#2414 fix(cowork): prevent BTW tool protocol leakage](https://github.com/netease-youdao/LobsterAI/pull/2414) — sanitizes provider tool-call markup from side-chat results, returns stable guidance when a side question requires tools, and preserves error metadata through the OpenClaw gateway.
- [#2413 fix(openclaw): keep live prompt tool-result history byte-stable across turns](https://github.com/netease-youdao/LobsterAI/pull/2413) — companion fix to #2415 that stabilizes the DeepSeek cache prefix, avoiding cache invalidation on every turn.

**Stale PRs closed (April/February backlog):**
- [#172 feat(oauth): add Antigravity OAuth integration and proxy compatibility](https://github.com/netease-youdao/LobsterAI/pull/172) — substantial OAuth subsystem (state/login/disconnect/model sync), SQLite profile persistence, and OpenAI-compatible proxy support; closed stale after ~5 months.
- [#1308 feat(cowork): isolate home-screen input draft per agent](https://github.com/netease-youdao/LobsterAI/pull/1308) — prevents draft state from leaking across agents.
- [#1315 / #1318 / #1320 UI enhancements by MaoQianTu](https://github.com/netease-youdao/LobsterAI/pull/1315) — sidebar drag-resize, sidebar button `<kbd>` shortcut hints, and session-list skeleton loading.
- [#1321 fix(settings): dismiss overlays when switching settings tabs](https://github.com/netease-youdao/LobsterAI/pull/1321) — fixes modals remaining mounted as full-window overlays after tab switch.

## 4. Community Hot Topics
The most-commented items (2 comments each) are all recently stale-closed issues from April:
- [#1311 Table content line breaks show raw tags; add hover-to-show-full-text for truncated cells](https://github.com/netease-youdao/LobsterAI/issues/1311) — rendering-quality complaint from Cathylkx with screenshots.
- [#1314 Feature: drag-to-resize sidebar](https://github.com/netease-youdao/LobsterAI/issues/1314) — fixed 240px sidebar is too wide on small screens and too narrow on large screens; proposal limits range to 180–480px.
- [#1317 Feature: show keyboard shortcut `<kbd>` hints on sidebar buttons](https://github.com/netease-youdao/LobsterAI/issues/1317) — Ctrl+N/Ctrl+F shortcuts exist but are undiscoverable without visiting settings.
- [#1319 Feature: skeleton loading for session list](https://github.com/netease-youdao/LobsterAI/issues/1319) — startup "暂无会话/no sessions" flash misleads users into thinking history was lost.

Underlying need: consistent demand for desktop-app UX polish — discoverability, loading-state clarity, layout flexibility, and richer table rendering. Each issue has a matching community-submitted PR (also closed), indicating users are willing to self-implement, but the April batch was not merged before stale-closing.

## 5. Bugs & Stability
Ranked by severity:

1. **DeepSeek cache hit-rate collapse (fixed).** [#2413](https://github.com/netease-youdao/LobsterAI/pull/2413) / [#2415](https://github.com/netease-youdao/LobsterAI/pull/2415): live prompt projection reapplied a fixed 4x aggregate char cap on every request, rewriting already-cached tool-result history and dropping DeepSeek long-session hit rates from ~100% to ~57%. Fix passes `aggregateMaxCharsOverride=null` so unchanged history stays byte-stable. High severity — directly impacts API cost and latency.
2. **BTW tool protocol leakage (fixed).** [#2414](https://github.com/netease-youdao/LobsterAI/pull/2414): provider tool-call markup leaked out of side-chat results; sanitization added plus stable fallback guidance when a side question requires tools.
3. **Settings tab overlay bug (fixed).** [#1321](https://github.com/netease-youdao/LobsterAI/pull/1321): cowork memory editor / model connection-test modals could remain mounted as a full-window `absolute inset-0` layer after switching settings tabs, making the UI appear read-only (clicks hit the overlay).
4. **Cron yield descendant finalization (still open).** [#2234](https://github.com/netease-youdao/LobsterAI/pull/2234): child-agent completion events after `sessions_yield` don't drive parent-agent continuation in cron scenarios; PR proposes a yield-continuation loop and covers three test scenarios. Created 2026-06-30, stale-marked, no visible reviewer activity.

## 6. Feature Requests & Roadmap Signals
All four feature requests in the last 24h are from April and stale-closed, but they clearly signal a UX wishlist:
- **Sidebar width drag-resize** ([#1314](https://github.com/netease-youdao/LobsterAI/issues/1314)) — layout flexibility for small and large screens; likely candidate if maintainers revisit sidebar UX.
- **Keyboard shortcut hints** ([#1317](https://github.com/netease-youdao/LobsterAI/issues/1317)) — platform-aware `<kbd>` badges (⌘/⌥/⇧ on macOS, Ctrl/Alt/Shift elsewhere) with hover-based reveal.
- **Session-list skeleton loading** ([#1319](https://github.com/netease-youdao/LobsterAI/issues/1319)) — a `sessionsLoaded` flag in `coworkSlice` to distinguish loading from empty states.
- **Table cell rendering improvements** ([#1311](https://github.com/netease-youdao/LobsterAI/issues/1311)) — avoid raw tag display on wrap; add hover tooltips for truncated long text.

Prediction: if any return, they will likely land as small renderer-area PRs similar to the merged #2417. The Antigravity OAuth work ([#172](https://github.com/netease-youdao/LobsterAI/pull/172)) is the largest unmerged feature; despite stale-closing, its scale suggests OAuth/third-party provider integration remains a strategic direction.

## 7. User Feedback Summary
Real pain points expressed by users:
- **Fixed 240px sidebar is problematic** on both small and large screens; long session titles truncate with no way to read them (MaoQianTu, [#1314](https://github.com/netease-youdao/LobsterAI/issues/1314)).
- **Shortcut discoverability gap**: users must open settings to learn Ctrl+N/Ctrl+F; new users never discover them (MaoQianTu, [#1317](https://github.com/netease-youdao/LobsterAI/issues/1317)).
- **Empty-state flash on startup** makes users briefly believe their history is gone — a trust-damaging experience (MaoQianTu, [#1319](https://github.com/netease-youdao/LobsterAI/issues/1319)).
- **Table rendering quality**: raw HTML tags appear when content wraps; truncated long text is unreadable without a hover tooltip (Cathylkx, [#1311](https://github.com/netease-youdao/LobsterAI/issues/1311)).

Satisfaction signals are mixed: users are engaged enough to write detailed specs (with screenshots and proposed implementations) and even submit complete PRs, but the stale-closing of those PRs without merging may disappoint contributors and indicates a maintainer-review bottleneck for community contributions.

## 8. Backlog Watch
- [#2234 fix(openclaw): cron yield descendant finalization](https://github.com/netease-youdao/LobsterAI/pull/2234) — open since 2026-06-30, stale-marked, no visible reviewer activity. Functional bug fix for cron agent workflows; needs maintainer review.
- [#172 feat(oauth): Antigravity OAuth integration](https://github.com/netease-youdao/LobsterAI/pull/172) — a large, well-scoped feature (OAuth subsystem, SQLite persistence, proxy compatibility) closed stale. If Antigravity support is still desired, revive or issue a maintainer decision.
- **April UX PR batch** ([#1308](https://github.com/netease-youdao/LobsterAI/pull/1308), [#1315](https://github.com/netease-youdao/LobsterAI/pull/1315), [#1318](https://github.com/netease-youdao/LobsterAI/pull/1318), [#1320](https://github.com/netease-youdao/LobsterAI/pull/1320), [#1321](https://github.com/netease-youdao/LobsterAI/pull/1321)) — all stale-closed. If maintainers align with the UX direction, re-open or cherry-pick; otherwise, explicit roadmap communication would help retain contributor goodwill.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-08-01

## 1. Today's Overview
Moltis saw moderate activity over the last 24 hours: 2 issues and 7 PRs were updated, with 1 new bug report and 1 feature issue closed. On the PR side, 2 PRs were closed/merged — Nostr group chat support and Markdown copy/session export — while 5 remain open, including two security hardening PRs and infrastructure work for instrumentation/feedback. No new releases were published. Overall, the project remains active with a good mix of feature work, community contributions, and security-focused improvements.

## 2. Releases
No new releases were published in this period. The Latest Releases section is empty, so there are no release notes, breaking changes, or migration steps to report.

## 3. Project Progress
Two PRs were closed/merged in the last 24 hours:

- [PR #1168 — feat(nostr): add NIP-29 group chat support for Buzz channels](https://github.com/moltis-org/moltis/pull/1168)  
  Adds support for Block's Buzz workspace by implementing NIP-29 group chat over NIP-42-authenticated connections, expanding `moltis-nostr` beyond its previous NIP-* capabilities.

- [PR #1176 — feat(web): add Markdown copy and session export](https://github.com/moltis-org/moltis/pull/1176)  
  Preserves original Markdown when copying assistant replies and adds a session-level **Save as Markdown** action that exports full paginated history, including image references.

The related feature request [Issue #1131 — Add copy + export as Markdown](https://github.com/moltis-org/moltis/issues/1131) was also closed, indicating this community-requested feature has been delivered.

## 4. Community Hot Topics
There is limited visible discussion data, with no recorded comments on PRs and only one reaction on issues:

- [Issue #1131 — [Feature]: Add copy + export as Markdown](https://github.com/moltis-org/moltis/issues/1131) — 1 👍  
  Closed and implemented via PR #1176. This signals that users actively want better portability of chat content, especially preserving Markdown formatting and full session export.

- [Issue #1181 — [bug]: Issue with GPT 5.6 Luna](https://github.com/moltis-org/moltis/issues/1181) — newly opened, 0 comments  
  A fresh bug report without details or workarounds yet. It may attract attention if other users hit model compatibility issues.

Overall, the underlying needs are: smoother data export from chat sessions and confidence that Moltis works with the latest GPT model versions.

## 5. Bugs & Stability
Two distinct areas of stability/security concern are present:

- **High severity — Security fixes pending:**  
  - [PR #1179 — fix(gateway): verify node pairing signatures](https://github.com/moltis-org/moltis/pull/1179)  
    Binds `node.pair.verify` to the server-issued pending request so callers cannot supply their own key or challenge. This is an authentication/authorization hardening fix.
  - [PR #1180 — fix(security): harden model and zip paths](https://github.com/moltis-org/moltis/pull/1180)  
    Fixes arbitrary file write outside intended directories via malicious zip archives or HuggingFace repos, which could overwrite trusted files and lead to code execution. Both PRs are open and need review/merge.

- **New bug report:**  
  - [Issue #1181 — Issue with GPT 5.6 Luna](https://github.com/moltis-org/moltis/issues/1181)  
    No reproducer or session context is included yet. This is currently unranked until more details are provided. No linked fix PR exists yet.

## 6. Feature Requests & Roadmap Signals
The most concrete roadmap signal is the completed Markdown export feature, which was explicitly user-requested. Beyond that, open PRs point toward future capabilities:

- [PR #1174 — Add instrumentation and feedback collection infrastructure](https://github.com/moltis-org/moltis/pull/1174)  
  Adds agent instrumentation, Langfuse v4 export, OTLP backends, and end-user reaction feedback. This suggests an observability/telemetry push.

- [PR #1158 — feat(memory): add zvec vector database memory backend](https://github.com/moltis-org/moltis/pull/1158)  
  Adds an alternative memory backend built on Zvec and redb, feature-gated behind a `zvec` cargo feature. This is experimental, but indicates growing interest in custom/local memory backends.

- [PR #1170 — fix(channels): gate /sh and privileged tools behind a per-account operators list](https://github.com/moltis-org/moltis/pull/1170)  
  Separates access from privilege, suggesting a stronger permission model for channels is in progress.

Predictions for the next version: Markdown export/session export, NIP-29 Nostr group chat support, and likely at least one of the security hardening fixes. Instrumentation and Zvec memory may follow depending on review progress.

## 7. User Feedback Summary
- **Positive/expected:** The Markdown copy/export feature was requested and has been delivered, showing responsiveness to user needs.
- **Security concerns from a potential adopter:** PR author `tsauvajon` explicitly stated they would like to use Moltis but wanted security fixes in first. This indicates security posture is a barrier for some users.
- **Compatibility friction:** The new GPT 5.6 Luna bug report suggests users are actively trying current models and may encounter integration issues, though details are still missing.

## 8. Backlog Watch
- [PR #1158 — feat(memory): add zvec vector database memory backend](https://github.com/moltis-org/moltis/pull/1158)  
  Open since 2026-07-17; this is the longest-open PR without a recorded review decision. It is a sizeable feature and merits maintainer attention/triage.

- [PR #1179 — fix(gateway): verify node pairing signatures](https://github.com/moltis-org/moltis/pull/1179) and [PR #1180 — fix(security): harden model and zip paths](https://github.com/moltis-org/moltis/pull/1180)  
  These are security-sensitive fixes from an external contributor. They should be prioritized for review to avoid leaving known vulnerabilities open.

- [Issue #1181 — Issue with GPT 5.6 Luna](https://github.com/moltis-org/moltis/issues/1181)  
  New but already without maintainer response. Needs triage/request for more context.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-08-01

## 1. Today's Overview

CoPaw (QwenPaw) showed high maintenance activity on 2026-08-01: **16 issues updated** (11 open, 5 closed) and **34 PRs updated** (24 open, 10 merged/closed), with **no new release** published. The main focus areas were stability fixes for shell-command execution, Windows-specific `agent.json` corruption, AgentScope 2.0 compatibility, and memory/context compression. Several fixes came from first-time contributors, indicating healthy community engagement. However, multiple silent-failure bugs remain open and likely need maintainer prioritization.

## 2. Releases

**No new releases were published in this window.** The latest referenced version remains **QwenPaw 2.0.1** (desktop/Windows).

## 3. Project Progress

Among the visible closed/merged PRs:

- **#6573** — `fix(audio): restore transcription for channel audio messages` — addresses Feishu/channel audio transcription failures after the AgentScope 2.0 migration.  
  https://github.com/agentscope-ai/QwenPaw/pull/6573
- **#6592** — `fix(memory): flush Auto-Memory before Scroll context eviction` — fixes #6555, preventing loss of early-session events in daily memory files.  
  https://github.com/agentscope-ai/QwenPaw/pull/6592
- **#6606** — `fix(read_file): accept numeric string line ranges` — small parser fix for `read_file` tooling.  
  https://github.com/agentscope-ai/QwenPaw/pull/6606

Open PRs with clear advancement potential include **#6610** (shell command hangs/freezes), **#6609** (`spawn_subagent` schema fix), and **#6615** (AgentScope compatibility). The overall PR pipeline is active, though many PRs are still waiting for review.

## 4. Community Hot Topics

Most commented / actively discussed items:

- **#6537 — Skill tags disappear on restart** (10 comments)  
  Users report skill tags saved via API are lost after manifest reconciliation on startup.  
  https://github.com/agentscope-ai/QwenPaw/issues/6537
- **#6601 — QwenPaw does not report empty-response errors** (5 comments)  
  Long sessions eventually hit context limits; the model returns empty responses but QwenPaw stays silent, making sessions unusable.  
  https://github.com/agentscope-ai/QwenPaw/issues/6601
- **#6588 — `spawn_subagent` single-task mode unusable because `batch` is required** (4 comments)  
  Schema generation marks `batch` as required, blocking foreground single-subagent creation.  
  https://github.com/agentscope-ai/QwenPaw/issues/6588
- **#6520 — `agent.json` systematic corruption** (3 comments)  
  BOM headers, missing quotes, and double-encoded text cause complete system failure on Windows.  
  https://github.com/agentscope-ai/QwenPaw/issues/6520
- **#6589 / #6512 — Large `execute_shell_command` output freezes or truncates** (3 comments each)  
  Shell tools choke on large stdout: UI main-thread freeze vs. silent truncated results.  
  https://github.com/agentscope-ai/QwenPaw/issues/6589  
  https://github.com/agentscope-ai/QwenPaw/issues/6512

Underlying needs: reliable persistence of user-configured metadata, honest failure reporting, correct tool schemas, and robust handling of large shell output without blocking the UI.

## 5. Bugs & Stability

Ranked by severity:

1. **#6614 — WeChat cron push silently fails while reporting success**  
   Daily push never delivered; `status=success` but WeChat returns `ret=-2` / `context_token` invalid. Estimated ~44M tokens burned in retries. No fix PR visible yet.  
   https://github.com/agentscope-ai/QwenPaw/issues/6614

2. **#6608 — Long-running shell commands bypass timeout and block Feishu sessions**  
   A task blocked a chat session for 1.5 hours; orphan subprocesses remain on cancel. Fix PR **#6610** is open.  
   https://github.com/agentscope-ai/QwenPaw/issues/6608  
   https://github.com/agentscope-ai/QwenPaw/pull/6610

3. **#6612 — Incompatibility with `agentscope==2.0.4.post1`**  
   Causes proactive-crash (`Msg.content` type) and tool-permission deadlock. Fix PR **#6615** is open.  
   https://github.com/agentscope-ai/QwenPaw/issues/6612  
   https://github.com/agentscope-ai/QwenPaw/pull/6615

4. **#6601 — Empty responses not reported in long sessions**  
   Model returns empty responses near context limits; QwenPaw doesn't surface an error, so the session appears dead.  
   https://github.com/agentscope-ai/QwenPaw/issues/6601

5. **#6520 — `agent.json` systematic corruption on Windows**  
   BOM + malformed JSON leads to complete system failure. Fix PR **#6528** is open.  
   https://github.com/agentscope-ai/QwenPaw/issues/6520  
   https://github.com/agentscope-ai/QwenPaw/pull/6528

6. **#6589 — Large shell output freezes the UI**  
   Console attempts to render tens of thousands of lines at once. Fix PR **#6610** is open.  
   https://github.com/agentscope-ai/QwenPaw/issues/6589

7. **#6588 — `spawn_subagent` schema blocks single-task mode**  
   `batch` incorrectly required. Fix PR **#6609** is open.  
   https://github.com/agentscope-ai/QwenPaw/issues/6588  
   https://github.com/agentscope-ai/QwenPaw/pull/6609

8. **#6537 — Skill tags disappear on restart (regression of #3270)**  
   No fix PR visible yet; 10 comments indicate real user impact.  
   https://github.com/agentscope-ai/QwenPaw/issues/6537

Fixed in this window:

- **#6555** — Memory compression misses early-session events → addressed by #6592 (closed) and #6564 (open).  
  https://github.com/agentscope-ai/QwenPaw/issues/6555
- **#6544** — Feishu audio messages silently fail transcription → fixed by #6573 (closed).  
  https://github.com/agentscope-ai/QwenPaw/issues/6544

## 6. Feature Requests & Roadmap Signals

- **#6512 — Large shell output truncation** suggests auto-writing output to a file or providing streaming reads. Likely to be addressed in the next patch, especially combined with #6589/#6608.  
  https://github.com/agentscope-ai/QwenPaw/issues/6512
- **#6260 — Results-first UI** (collapse thinking/tool calls, highlight final deliverables) has user support and is a strong UX improvement candidate.  
  https://github.com/agentscope-ai/QwenPaw/issues/6260
- **#6587 — Rename "QwenPaw Desktop" to "QwenPaw"** — small polish item.  
  https://github.com/agentscope-ai/QwenPaw/issues/6587
- **PR #6607 — Global-hotkey floating quick-input window** (Doubao-style) for the desktop app.  
  https://github.com/agentscope-ai/QwenPaw/pull/6607
- **PR #6306 — Desktop workspace shortcut in the sidebar.**  
  https://github.com/agentscope-ai/QwenPaw/pull/6306
- **PR #6302 — Unified provider discovery, model metadata, routing, and agent controls.**  
  https://github.com/agentscope-ai/QwenPaw/pull/6302
- **PR #6526 — NVIDIA NIM provider support.**  
  https://github.com/agentscope-ai/QwenPaw/pull/6526

Prediction: shell-output streaming/truncation and UI collapse/result presentation are the most likely next-version improvements. Desktop hotkey input and provider unification may land in the next minor release.

## 7. User Feedback Summary

Users are hitting Windows-specific pain points: `agent.json` corruption, shell-command UI freezes, and desktop layout issues (e.g. input box obscured at 150% scaling, #6549). Long-session reliability is a recurring dissatisfaction — empty responses, silent WeChat cron failures, and 1.5-hour session blocks all erode trust. UI state bugs such as lost messages when switching modes or sessions (#6558) further amplify frustration. On the positive side, community members are contributing detailed root-cause analyses and first-time-contributor PRs, showing strong willingness to help stabilize the project.

## 8. Backlog Watch

Items needing maintainer attention:

- **#6260** — Open since 2026-07-19, 👍1, 2 comments; results-first UI feature request with no maintainer response.  
  https://github.com/agentscope-ai/QwenPaw/issues/6260
- **PR #6203** — Open since 2026-07-16, under review; Windows `tasklist` liveness probe fix by a first-time contributor.  
  https://github.com/agentscope-ai/QwenPaw/pull/6203
- **PR #6302** — Open since 2026-07-21; large provider-discovery unification, needs review/decision.  
  https://github.com/agentscope-ai/QwenPaw/pull/6302
- **PR #6306** — Open since 2026-07-21; desktop workspace shortcut, references #6083.  
  https://github.com/agentscope-ai/QwenPaw/pull/6306
- **#6537** — Open since 2026-07-28, 10 comments; skill-tags regression remains unresolved.  
  https://github.com/agentscope-ai/QwenPaw/issues/6537

The project is in a "stability hardening" phase: many PRs are ready for human review, but several high-severity silent-failure bugs still need maintainer triage and merge decisions.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-08-01

## 1. Today's Overview

ZeroClaw is in a period of high architectural activity: 50 issues and 50 PRs were updated in the last 24 hours, with 45 open issues, 41 open PRs, and 9 PRs merged/closed. No new releases shipped in this window. The dominant signal is a large wave of high-risk RFCs (primarily memory architecture, security/sandboxing, and interoperability) sitting in the `needs-maintainer-review` state, alongside active implementation of several accepted designs — most notably the OpenAI-compatible chat completions endpoint and the 7-part Hindsight memory stack. The last 24 hours also saw heavy security-focused bugfix PR activity from maintainer-adjacent contributors, suggesting a hardening push ahead of the next release. Overall health is good — issue closure is happening, maintainers are repairing contributor branches (e.g., #8918), and the project's own maintainer decision queue tracker (#8692) is actively processing the RFC backlog.

## 2. Releases

No new releases in the last 24 hours. No changelog, breaking-change, or migration notes to report.

## 3. Project Progress

The provided snapshot does not enumerate the 9 merged/closed PRs individually. Two known issue closures are visible — both bug fixes with `status:accepted`:

- [#8973](https://github.com/zeroclaw-labs/zeroclaw/issues/8973) — **Landlock blocked shell access to required system files on Fedora** (S2, p1) — closed.
- [#6724](https://github.com/zeroclaw-labs/zeroclaw/issues/6724) — **Enabled Signal/Voice Call channel with empty credentials caused supervisor crashloop** (p3) — closed.

Progress visible through open PRs actively updated today:

- **OpenAI-compatible chat completions endpoint** — [#8486](https://github.com/zeroclaw-labs/zeroclaw/pull/8486) (REL-mame) remains open and closes accepted issue [#8550](https://github.com/zeroclaw-labs/zeroclaw/issues/8550). This is the highest-profile feature in flight.
- **Hindsight memory stack (7 PRs)** — parts 1–3, 5–7 ([#9063](https://github.com/zeroclaw-labs/zeroclaw/pull/9063), [#9064](https://github.com/zeroclaw-labs/zeroclaw/pull/9064), [#9065](https://github.com/zeroclaw-labs/zeroclaw/pull/9065), [#9067](https://github.com/zeroclaw-labs/zeroclaw/pull/9067), [#9068](https://github.com/zeroclaw-labs/zeroclaw/pull/9068), [#9069](https://github.com/zeroclaw-labs/zeroclaw/pull/9069)) are all updated and carry maintainer correction notes, awaiting author action.
- **Runtime/security fixes** (Audacity88, all opened 2026-08-01): [#9607](https://github.com/zeroclaw-labs/zeroclaw/pull/9607) routes coding CLI tools (`codex_cli`, `claude_code`, etc.) through the configured runtime/sandbox; [#9606](https://github.com/zeroclaw-labs/zeroclaw/pull/9606) honors runtime proxy for OpenAI Responses; [#9604](https://github.com/zeroclaw-labs/zeroclaw/pull/9604) enforces Linq webhook alias ownership; [#9605](https://github.com/zeroclaw-labs/zeroclaw/pull/9605) fixes Quickstart webhook settings.
- **Other active feature PRs**: [#8985](https://github.com/zeroclaw-labs/zeroclaw/pull/8985) adds Slack lifecycle progress states; [#8313](https://github.com/zeroclaw-labs/zeroclaw/pull/8313) makes compact skill injection the default; [#9603](https://github.com/zeroclaw-labs/zeroclaw/pull/9603) migrates Ollama dev templates to schema V3.

## 4. Community Hot Topics

Most-commented issues (all RFCs/features — no bug dominates discussion today):

- [#9048](https://github.com/zeroclaw-labs/zeroclaw/issues/9048) (14 comments) — **RFC: Separate conversation history from agent-curated long-term memory**. The community's #1 concern: implementation still mixes session history and curated memory despite documented lifecycle separation.
- [#9127](https://github.com/zeroclaw-labs/zeroclaw/issues/9127) (11 comments) — **RFC: Abstract a `KeySource` trait** for master-key material classification across the 93 `#[secret]`-annotated config fields.
- [#7155](https://github.com/zeroclaw-labs/zeroclaw/issues/7155) (10 comments, p1) — **RFC: Per-execution confirmation tier for high-risk shell commands** (allow/ask/deny policy), Claude Code-style.
- [#8933](https://github.com/zeroclaw-labs/zeroclaw/issues/8933) (9 comments) — **RFC: Cross-turn conversation correlation for OpenTelemetry** (`gen_ai.conversation.id`).
- [#9106](https://github.com/zeroclaw-labs/zeroclaw/issues/9106) (8 comments) — **RFC: A2A outbound client (A2ATool)** for proactive inter-agent calls.
- [#6850](https://github.com/zeroclaw-labs/zeroclaw/issues/6850) and [#6909](https://github.com/zeroclaw-labs/zeroclaw/issues/6909) (7 comments each) — memory lifecycle/storage decoupling, and desktop computer-use support.

**Underlying needs:** the community is pushing ZeroClaw toward architectural maturity in four clusters — (1) memory as a first-class lifecycle concept, (2) security policy granularity (shell approval, key management, sandboxing), (3) open interoperability (OpenAI-compatible API, A2A, wire protocol), and (4) observability that can attribute telemetry to conversations. No single PR has drawn notable comment volume; PR attention is concentrated in the large Hindsight stack and the OpenAI endpoint work.

## 5. Bugs & Stability

Closed today (both `status:accepted`):

1. [#8973](https://github.com/zeroclaw-labs/zeroclaw/issues/8973) — **Landlock sandbox blocks shell access to `/dev/null` on Fedora** (S2, p1, `tool:shell`, security) — shell tool always fails when sandbox enabled. Fixed/closed.
2. [#6724](https://github.com/zeroclaw-labs/zeroclaw/issues/6724) — **Channel orchestrator crashloop** when dashboard adds disabled Signal/Voice Call blocks with empty credentials (p3, supervisor restart ~every 2s). Fixed/closed.

Open bug-fix PRs (risk:high unless noted), ranked by severity:

1. [#9607](https://github.com/zeroclaw-labs/zeroclaw/pull/9607) — coding CLI tools not routed through configured runtime/sandbox; a sandbox-escape-adjacent gap.
2. [#9606](https://github.com/zeroclaw-labs/zeroclaw/pull/9606) — OpenAI Responses path ignores configured runtime proxy.
3. [#8918](https://github.com/zeroclaw-labs/zeroclaw/pull/8918) — Slack tokens not redacted in the leak detector (maintainer repaired the branch after author-action deadline).
4. [#9604](https://github.com/zeroclaw-labs/zeroclaw/pull/9604) — Linq webhook messages not enforcing alias ownership by enabled agent.
5. [#9037](https://github.com/zeroclaw-labs/zeroclaw/pull/9037) — provider terminal markers (`<eom>`) leak into transcripts and persisted history.
6. [#9449](https://github.com/zeroclaw-labs/zeroclaw/pull/9449) (risk:medium) — JSONL trace rows could be dropped during schema migration; fix preserves non-legacy rows.

## 6. Feature Requests & Roadmap Signals

Nearly all top-discussed items are RFCs awaiting maintainer review (~20 of the top 30 issues). The accepted items are the strongest next-release signals:

- **OpenAI-compatible chat completions endpoint** — [#8550](https://github.com/zeroclaw-labs/zeroclaw/issues/8550) (`status:accepted`, in-progress, PR [#8486](https://github.com/zeroclaw-labs/zeroclaw/pull/8486) open) — **most likely to land in the next version**; it unblocks Open WebUI, LobeChat, LangChain, Continue.dev, and Aider.
- **Skills: compact injection as default** — PR [#8313](https://github.com/zeroclaw-labs/zeroclaw/pull/8313) is implementation-ready and reduces prompt-context waste.
- **Hindsight memory backend** — the 7-PR stack ([#9063](https://github.com/zeroclaw-labs/zeroclaw/pull/9063) – [#9069](https://github.com/zeroclaw-labs/zeroclaw/pull/9069)) is feature-complete but gated on author revisions; a strong candidate if review completes.

Near-term roadmap themes likely to shape the next 1–2 minor releases: **memory architecture** (#9048, #6850, #6998), **security policy granularity** (#7155, #6971, #6996, #7897), and **interoperability** (#9106 A2A outbound, #8396 wire protocol, #7929 slash-command unification). Longer-horizon items already tracked: plugin ecosystem unification (#6489), Wasm-first runtime (#8135), goal mode (#8303), computer use (#6909), and LSP support (#5907).

## 7. User Feedback Summary

Recurring pain points from issue/PR narratives:

- **Memory semantics confuse users** — conversation history and curated long-term memory are documented as distinct but behave as one (#9048); memory lifecycle policy is reimplemented per-backend (#6850).
- **Security controls are too coarse** — no middle tier between blocking and allowing shell commands (#7155); sandboxing breaks real workloads (Fedora Landlock, #8973); security posture is hard to inspect (#6971).
- **Integration friction** — no OpenAI-compatible API forces custom client work (#8550); agents cannot call external A2A agents (#9106); Slack long turns appear stalled with no progress feedback (#8985).
- **Correctness annoyances** — literal `<eom>` markers leak into transcripts (#9006 / fix #9037); provider defaults misreport vision/context windows (#7100); duplicate channel blocks crashloop the supervisor (#6724).
- **Contributor experience friction** — multiple large PRs sit in `needs-author-action` after maintainer review (Hindsight stack #9063–#9069, #9037, #8985, #8486), and reviewers note the project's 48-hour review bar; maintainers have begun repairing branches themselves (#8918), which signals both responsiveness and contributor-bandwidth strain.

Satisfaction signals: maintainer decision tracking is now explicit (#8692), corrections to contributor PRs are documented inline (e.g., #9068, #9067), and security issues are being closed with fixes rather than deferred.

## 8. Backlog Watch

Items needing maintainer or author attention, by age/importance:

- [#5907](https://github.com/zeroclaw-labs/zeroclaw/issues/5907) — **RFC: Opt-in LSP support for ZeroCode** (created 2026-04-19, `needs-author-action`, no-stale) — oldest RFC in the active set; stalled for over 3 months.
- [#6489](https://github.com/zeroclaw-labs/zeroclaw/issues/6489) — **"Everything is a plugin" architecture tracker** (May 6) — long-running roadmap item with no dedicated implementation PR yet.
- **May–June RFCs still `needs-maintainer-review`**: [#6850](https://github.com/zeroclaw-labs/zeroclaw/issues/6850), [#6909](https://github.com/zeroclaw-labs/zeroclaw/issues/6909), [#6971](https://github.com/zeroclaw-labs/zeroclaw/issues/6971), [#6996](https://github.com/zeroclaw-labs/zeroclaw/issues/6996), [#6998](https://github.com/zeroclaw-labs/zeroclaw/issues/6998), [#7100](https://github.com/zeroclaw-labs/zeroclaw/issues/7100) (p1), [#7155](https://github.com/zeroclaw-labs/zeroclaw/issues/7155) (p1) — several p1/p2 security and memory RFCs have been waiting since May/June.
- **Hindsight memory PR stack** — [#9063](https://github.com/zeroclaw-labs/zeroclaw/pull/9063) through [#9069](https://github.com/zeroclaw-labs/zeroclaw/pull/9069): seven size:XL PRs, all `needs-author-action` since mid-July; the largest single unmerged feature in the project.
- [#8139](https://github.com/zeroclaw-labs/zeroclaw/pull/8139) — `channels.session_ttl_hours` TTL cleanup (June 22) is flagged `stale-candidate` and at risk of closure.
- [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) — the maintainer decision queue tracker itself is active (updated today), but the volume of `needs-maintainer-review` RFCs suggests the review lane is the current bottleneck.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/boom7sss/agents-radar).*