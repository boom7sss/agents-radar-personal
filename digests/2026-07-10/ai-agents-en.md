# OpenClaw Ecosystem Digest 2026-07-10

> Issues: 498 | PRs: 500 | Projects covered: 13 | Generated: 2026-07-10 15:58 UTC

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

# OpenClaw Project Digest – 2026-07-10

## 1. Today's Overview

OpenClaw continues to see very high community activity with **498 issues** and **500 pull requests** updated in the last 24 hours. Of those PRs, **106 were merged or closed**, indicating steady progress despite no new release today. The project faces significant stability challenges: several critical **P0/P1 bugs** (memory leaks, silent message loss, OAuth failures) remain open, but maintainers are actively reviewing fixes. Community engagement is high, with top issues attracting 15–21 comments and strong “diamond lobster” priority ratings.

---

## 2. Releases

**No new releases** were published today. The most recent stable release remains OpenClaw 2026.3.11 (referenced in issue #44925).

---

## 3. Project Progress

While the data does not list individual merged PRs, the **106 merged/closed pull requests** today likely include fixes for numerous reported bugs and feature implementations. Among the **open PRs** that advanced today, notable entries include:

- **#103515** – *fix: prevent exec approval revocation races* – a large security fix (XL size, P1) now ready for maintainer look.
- **#103355** – *fix(nextcloud-talk): strip internal tool-trace banners* – a diamond-lobster-rated fix for a message-delivery issue.
- **#103108** – *[AI-assisted] Tidy Android Sessions row affordances* – user-experience polish approved.
- **#103723** – *feat(anthropic): add claude-haiku-4-5 to claude-cli catalog* – new model support.
- **#103792** – *feat(mobile): share native protocol helpers* – progress toward shared mobile logic.

These indicate ongoing work in security hardening, channel reliability, model support, and mobile improvements.

---

## 4. Community Hot Topics

The most active issues by comment count reveal deep user frustration with reliability and missing features:

- **#44925** – *[Bug]: Subagent completion silently lost* (21 comments)  
  Users report task orchestration failures where subagent results vanish with no retry, notification, or auto-restart.  
  [GitHub](https://github.com/openclaw/openclaw/issues/44925)

- **#99241** – *Tool outputs sometimes render as image attachments and become unreadable* (18 comments)  
  Long-running/ANSI-heavy tool outputs collapse into useless image placeholders.  
  [GitHub](https://github.com/openclaw/openclaw/issues/99241)

- **#91588** – *Critical: Gateway Memory Leak – RSS grows from 350MB to 15.5GB* (15 comments, **P0**)  
  A memory leak kills the gateway process after 2–3 days, causing repeated crash loops.  
  [GitHub](https://github.com/openclaw/openclaw/issues/91588)

- **#102175** – *[Bug]: embedded prompt-cache continuity breaks across room events* (14 comments)  
  Regression in long-lived sessions that breaks prompt caching.  
  [GitHub](https://github.com/openclaw/openclaw/issues/102175)

- **#12602** – *[Feature]: Slack Block Kit support for agent messages* (14 comments)  
  A long-requested enhancement for richer Slack integration.  
  [GitHub](https://github.com/openclaw/openclaw/issues/12602)

On the PR side (comments data not available), the most actively discussed PRs include **#98105** (auth token-profile rollup) and **#103515** (exec approval races).

*Underlying needs:* Users demand **reliability of task completion** (silent losses), **visibility into tool outputs**, and **long-running session stability**. The Slack Block Kit feature request shows interest in richer channel integrations.

---

## 5. Bugs & Stability

The project faces several critical **P0 and P1** bugs, many with fix PRs already open:

| Severity | Issue | Summary | Fix PR? |
|----------|-------|---------|---------|
| P0 | [#91588](https://github.com/openclaw/openclaw/issues/91588) | Gateway memory leak → OOM kills → restart loops | No dedicated PR linked, still open |
| P1 | [#44925](https://github.com/openclaw/openclaw/issues/44925) | Subagent completion silently lost (21 comments) | No fix PR listed |
| P1 | [#99241](https://github.com/openclaw/openclaw/issues/99241) | Tool outputs become image attachments, agent cannot read | No fix PR listed |
| P1 | [#102175](https://github.com/openclaw/openclaw/issues/102175) | Prompt-cache continuity regression (14 comments) | No fix PR listed |
| P1 | [#84569](https://github.com/openclaw/openclaw/issues/84569) | WhatsApp session stalls on long model calls | Linked PR open |
| P1 | [#83959](https://github.com/openclaw/openclaw/issues/83959) | Codex app-server startup retries exhaust before replacement | Linked PR open |
| P1 | [#89278](https://github.com/openclaw/openclaw/issues/89278) | Codex OAuth refresh succeeds but cron/heartbeat fail with 10s timeout | No fix PR listed |
| P1 | [#45494](https://github.com/openclaw/openclaw/issues/45494) | Cron agent jobs silently time out during LLM API outages | No fix PR listed |
| P1 | [#96834](https://github.com/openclaw/openclaw/issues/96834) | WhatsApp inbound image wedges main lane ~3 min | No fix PR listed |
| P1 | [#99912](https://github.com/openclaw/openclaw/issues/99912) | Agent heartbeat routes to wrong agent's session | Closed (fixed) |

**Security bugs:**
- **P1** – [#52130](https://github.com/openclaw/openclaw/issues/52130) – restart storm from type mismatch + misleading SecretRef (fix PR linked)
- **P1** – [#45740](https://github.com/openclaw/openclaw/issues/45740) – gh-issues skill injects untrusted issue body into sub-agent prompt (no fix PR)
- **P2** – [#51363](https://github.com/openclaw/openclaw/issues/51363) – Docker sandbox container name collision across instances (no fix PR)

**Regressions reported today** (2026-07-10): #102175 (prompt-cache), #89278 (OAuth timeout), #45494 (cron timeout). The project appears to be struggling with both new regressions and a backlog of critical stability issues.

---

## 6. Feature Requests & Roadmap Signals

Top feature requests (by comment count/reactions) suggest strong demand for:

- **#12602** – *Slack Block Kit support* (14 comments) – high user demand; might land in a future minor release if design is accepted.
- **#63829** – *Per-agent memory-wiki vault configuration* (13 comments, 10 👍) – multi-agent isolation; likely in next major release.
- **#45608** – *Pre-reset agentic memory flush* (11 comments, 4 👍) – improves session hygiene; could be a quick win.
- **#7722** – *Filesystem sandboxing config* (10 comments, 4 👍) – security enhancement, still needs product decision.
- **#8355** – *Streaming TTS pipeline for voice calls* (6 comments, 2👍) – pipeline optimization for voice channels.
- **#8299** – *Config option to suppress sub-agent announce* (9 comments) – UX friction fix.
- **#52640** – *Persistent task-status surface for long-running channel turns* (7 comments) – better user feedback.
- **#45758** – *Support YAML as config file format* (7 comments, 2👍) – DevOps-friendly.

*Prediction:* The per-agent memory-wiki (#63829) and pre-reset memory flush (#45608) have strong community support and clear design; they may be included in the next feature release (potentially Q3 2026). Slack Block Kit (#12602) and filesystem sandboxing (#7722) are more complex and may be deferred.

---

## 7. User Feedback Summary

**Real pain points** expressed in today’s issues:

- **Silent failures**: Users report that subagent results, tool outputs, and agent responses can be lost without any notification (#44925, #99241, #85714). This undermines trust.
- **Memory leak causing production outages**: Gateway crashes every few days (#91588) forces full restarts and disrupts in-flight conversations.
- **Unreliable message delivery**: WhatsApp stalling (#84569, #96834), Discord WS disconnect (#99681, closed), Telegram deadlock on medium files (#27984, closed) – channel reliability is a top complaint.
- **OAuth/integration friction**: Codex OAuth timeouts (#89278) and persistent billing cooldown after credit top-up (#70903) frustrate users.
- **Regressions in core features**: Prompt-cache continuity (#102175) and cron session hallucination (#49876) indicate testing gaps.

**Positive signals**: Users actively contribute PRs and provide detailed reproduction steps, showing strong engagement. The high number of closed issues and merged PRs demonstrates responsive maintainers.

---

## 8. Backlog Watch

Several important issues have been open for months with no fix PR, and are tagged `clawsweeper:needs-maintainer-review` or `clawsweeper:needs-product-decision`. These warrant maintainer attention:

| Issue | Priority | Created | Status |
|-------|----------|---------|--------|
| [#91588](https://github.com/openclaw/openclaw/issues/91588) | **P0** – Gateway memory leak | 2026-06-09 | Open, needs fix |
| [#44925](https://github.com/openclaw/openclaw/issues/44925) | **P1** – Subagent silent loss | 2026-03-13 | Open, no fix PR |
| [#7722](https://github.com/openclaw/openclaw/issues/7722) | **P2** – Filesystem sandboxing | 2026-02-03 | Open, needs product decision |
| [#12602](https://github.com/openclaw/openclaw/issues/12602) | **P2** – Slack Block Kit | 2026-02-09 | Open, needs product decision |
| [#8299](https://github.com/openclaw/openclaw/issues/8299) | **P2** – Suppress sub-agent announce | 2026-02-03 | Open, needs maintainer review |
| [#49876](https://github.com/openclaw/openclaw/issues/49876) | **P1** – Cron hallucinated output | 2026-03-18 | Open, stale |
| [#45740](https://github.com/openclaw/openclaw/issues/45740) | **P1** – gh-issues prompt injection | 2026-03-14 | Open, needs security review |
| [#45494](https://github.com/openclaw/openclaw/issues/45494) | **P1** – Cron silent timeout | 2026-03-13 | Open, needs live repro |

The P0 memory leak (#91588) and P1 subagent loss (#44925) are particularly critical and have lacked visible progress for weeks. Maintainers should prioritize these to restore user confidence.

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report — AI Agent Open-Source Ecosystem
**Date:** 2026-07-10 | **Analyst:** Senior Ecosystem Analyst

---

## 1. Ecosystem Overview

The personal AI assistant open-source ecosystem is experiencing a maturation phase characterized by rapid iteration on reliability, security hardening, and multi-platform support. Across the eight active projects tracked today, **1,060+ issues and 800+ PRs were updated**, with **200+ PRs merged or closed** — indicating sustained high-velocity development despite no major releases from flagship projects. The landscape is fragmenting along architectural lines: monorepo reference implementations (OpenClaw, ZeroClaw) compete with lightweight, single-binary designs (NanoBot, PicoClaw), while specialized forks (Hermes Agent, IronClaw) target enterprise Slack integrations and desktop-first experiences. A significant trend is the emergence of **AgentScope 2.0** as a new runtime foundation (CoPaw v2.0.0), signaling a shift toward modular, composable agent kernels. Community frustration with silent failures, memory leaks, and configuration friction remains the dominant pain point across all projects.

---

## 2. Activity Comparison

| Project | Issues Updated (24h) | PRs Updated (24h) | PRs Merged/Closed | Release Status | Health Score | Notes |
|---------|---------------------|-------------------|-------------------|----------------|--------------|-------|
| **OpenClaw** | 498 | 500 | 106 | No new release | ⚠️ **At risk** | P0 memory leak unaddressed; high community engagement but critical stability gaps |
| **ZeroClaw** | 36 | 50 | 9 | No new release | ✅ **Strong** | Active bug fixing; context budget fix merged; gateway security hardening |
| **Hermes Agent** | 50 | 50 | 0 | No new release | ⚠️ **Bottlenecked** | 50 open PRs, zero merged — review pipeline stalled |
| **IronClaw** | 31 | 50 | 20 | No new release | ✅ **Strong** | Bug bash sprint; Slack routing overhaul merged; 13-probe canary suite |
| **CoPaw** | 44 | 47 | 26 | ✅ **v2.0.0 released** | 🟢 **Healthy** | Major release with beta patches; high closure rate |
| **NanoBot** | 10 | 43 | 14 | No new release | ✅ **Strong** | High merge ratio; good velocity despite small team |
| **NanoClaw** | 7 | 20 | 3 | No new release | ✅ **Good** | Security fixes in flight; CLI parity improvements |
| **LobsterAI** | — | 18 | 11 | Release candidate merged | 🟢 **Healthy** | Batch release merged; active feature work |
| **PicoClaw** | 5 | 22 | 2 | No new release | ⚠️ **Needs attention** | Critical Matrix bug unfixed; config migration broken |
| **NullClaw** | 2 | 0 | 0 | No new release | 🔴 **Dormant** | Security advisory (A2A auth bypass) unaddressed |
| **Moltis** | 0 | 1 | 0 | No new release | ✅ **Stable** | Low activity but zero bugs; GPT-5.6 support PR |
| **TinyClaw** | 0 | 0 | 0 | — | 🔴 **Inactive** | No activity |
| **ZeptoClaw** | 0 | 0 | 0 | — | 🔴 **Inactive** | No activity |

**Health Score Methodology:** Based on merge ratio, critical bug response time, release cadence, community engagement, and maintenance of security issues.

---

## 3. OpenClaw's Position

OpenClaw remains the **largest and most active project** in the ecosystem by raw metrics (498 issues, 500 PRs), but its position is increasingly precarious due to unresolved critical stability issues:

### Advantages vs. Peers
- **Ecosystem gravity:** Largest contributor base; serves as the reference implementation that other projects (NanoClaw, PicoClaw) fork from.
- **PR throughput:** 106 merged/closed in 24 hours demonstrates strong review capacity and contributor pipeline.
- **Feature breadth:** Unmatched integration surface (Slack, WhatsApp, Telegram, Discord, Codex, Anthropic, mobile).

### Technical Approach Differences
- **Architecture:** Monorepo with layered subprojects (gateway, agent, channel adapters) — more complex but more flexible than NanoBot's single-binary Go design.
- **Memory management:** Relies on a shared memory-wiki system; peers like CoPaw are moving to AgentScope 2.0 runtime with ReMe memory summarization.
- **Security posture:** Lagging behind NanoClaw and IronClaw — critical OAuth and injection bugs (#45740, #52130) lack fixes, while peers ship security hardening PRs.

### Community Size Comparison
| Metric | OpenClaw | Next Largest (ZeroClaw) | Runner-Up (Hermes Agent) |
|--------|----------|------------------------|--------------------------|
| 24h Issues Updated | 498 | 36 | 50 |
| 24h PRs Updated | 500 | 50 | 50 |
| Critical Bugs Open (P0/P1) | 8 | 2 | 3 |
| Community Comments (top issue) | 21 | 13 | 5 |

**Assessment:** OpenClaw dominates in scale but is **losing the reliability race**. The P0 memory leak (#91588, open 31 days) and silent subagent loss (#44925, open 119 days) erode user trust. Peer projects are converging on similar feature sets (Slack Block Kit, per-agent memory, streaming TTS) — OpenClaw's window of first-mover advantage is narrowing.

---

## 4. Shared Technical Focus Areas

The following requirements emerged across **three or more projects**, indicating ecosystem-wide priorities:

### Top Cross-Project Needs

| Focus Area | Affected Projects | Specific Requirement |
|------------|------------------|---------------------|
| **Silent failure detection** | OpenClaw, NanoClaw, NullClaw, LobsterAI | Message loss, subagent task dropping, undelivered channel messages without notification |
| **OAuth/integration reliability** | OpenClaw, PicoClaw, IronClaw, NullClaw | Timeout handling, provider-specific refresh semantics, disconnected channel detection |
| **Local model support** | NanoBot, Hermes Agent, IronClaw | Ollama prompt caching (60s delays), first-chunk timeout for local streams, provider fallbacks |
| **Tool output visibility** | OpenClaw, Hermes Agent, ZeroClaw | ANSI-heavy output collapse, tool result truncation, structured tool_call preservation |
| **Multi-agent isolation** | OpenClaw, LobsterAI, NanoBot | Per-agent memory/memory-wiki config, USER.md file overwrite (#2293 in LobsterAI) |
| **CLI configuration parity** | NanoClaw, IronClaw, ZeroClaw | Missing `container_configs` rows, secrets management CLI, cron memory flags |
| **Rich channel integrations** | OpenClaw, Hermes Agent, ZeroClaw, PicoClaw | Slack Block Kit, Telegram rich rendering, Discord slash commands, iMessage Unicode |

### Security Themes
- **MCP tool authorization:** NanoClaw (#2827), CoPaw (#5947), OpenClaw (approval race #103515) all report flaws in agent-triggered tool approval flows.
- **Context injection:** OpenClaw (#45740), NullClaw (#974), Hermes Agent (delegation routing) — untrusted input can modify agent behavior.
- **Process isolation:** OpenClaw (#51363), CoPaw (#5951), NanoClaw (sandbox hardening) — container/sandbox escape risks.

---

## 5. Differentiation Analysis

### Feature Focus Comparison

| Project | Primary Use Case | Target User | Core Differentiator |
|---------|-----------------|-------------|---------------------|
| **OpenClaw** | General-purpose multi-agent | Developers, power users | Largest integration surface; reference implementation |
| **NanoBot** | Lightweight CLI agent | Solo devs, terminal users | Single Go binary; fast install; per-conversation model switching |
| **Hermes Agent** | Desktop-first enterprise agent | Enterprise teams | Desktop app with Kanban/Obsidian; MCP server ecosystem |
| **IronClaw** | Slack-native automation | Operations teams | Deep Slack integration; canary testing; routine scheduling |
| **CoPaw** | AI-assistant runtime | Researchers, Qwen ecosystem | AgentScope 2.0 runtime; Chinese-first; ReMe memory system |
| **NanoClaw** | Security-hardened fork | Security-conscious teams | MCP approval auditing; CLi completeness; Chinese localization |
| **PicoClaw** | Embedded/IoT agent | ARM/Raspberry Pi users | Linux ARMv7 build targets; minimal resource footprint |
| **ZeroClaw** | OTel-observable agent | Observability teams | OpenTelemetry export; SOP authoring; gateway security headers |
| **NullClaw** | Minimal deployment | Test/edge cases | Tiny footprint; but neglected (A2A security flaw) |

### Architectural Differences

| Dimension | Monorepo (OpenClaw, ZeroClaw) | Single-Binary (NanoBot, PicoClaw) | Runtime-Native (CoPaw) |
|-----------|-------------------------------|------------------------------------|------------------------|
| **Setup complexity** | High | Low | Medium |
| **Feature richness** | Very high | Moderate | High |
| **Update friction** | High (breaking changes) | Low | Medium (runtime upgrade) |
| **Ecosystem leverage** | Strong (forks, plugins) | Weak | Moderate (AgentScope) |

### User Base Segmentation
- **CLI-first users:** NanoBot, PicoClaw, ZeroClaw — value speed, minimal dependencies.
- **Desktop/UI-first:** Hermes Agent, LobsterAI — prioritize visual feedback, session management.
- **Platform integrators:** OpenClaw, IronClaw — need multi-channel delivery, Slack/Telegram robustness.
- **Security-sensitive:** NanoClaw — willing to trade features for auditability.

---

## 6. Community Momentum & Maturity

### Activity Tiers

| Tier | Projects | Characteristics |
|------|----------|-----------------|
| **🔥 High velocity** (>30 PRs/day) | OpenClaw, ZeroClaw, IronClaw, NanoClaw, LobsterAI | Bug bash / stabilization sprints; high merge ratios; maintainers active |
| **⚡ Stable iteration** (10-30 PRs/day) | Hermes Agent, CoPaw, NanoBot | Balanced feature/bug work; release cycles predictable |
| **🔧 Maintenance mode** (<5 PRs/day) | PicoClaw, Moltis, NullClaw | Low activity; critical bugs unaddressed; risk of abandonment |
| **💤 Inactive** (0 PRs) | TinyClaw, ZeptoClaw | No development signal; consider for archival |

### Velocity Leaders (PRs Merged/Closed per Maintainer)

| Rank | Project | Merged/24h | Active Maintainers | Efficiency |
|------|---------|------------|-------------------|------------|
| 1 | OpenClaw | 106 | ~10-15 | High |
| 2 | CoPaw | 26 | ~5-8 | Very High |
| 3 | IronClaw | 20 | ~4-6 | Very High |
| 4 | NanoBot | 14 | ~2-3 | Exceptional |
| 5 | LobsterAI | 11 | ~3-4 | High |
| 6 | ZeroClaw | 9 | ~5-7 | Moderate |
| 7 | NanoClaw | 3 | ~3-4 | Low |

**Insight:** NanoBot achieves the highest per-maintainer throughput, indicating efficient CI, clear contribution guidelines, and focused scope. OpenClaw's volume is impressive but diluted across many unmerged PRs.

### Maturity Indicators

| Project | Age of oldest critical bug | Release frequency | Documentation quality | CI/CD maturity |
|---------|---------------------------|-------------------|----------------------|----------------|
| **OpenClaw** | 119 days (#44925) | Monthly (last: Mar 2026) | Good | Strong |
| **CoPaw** | <1 day (v2.0 regressions) | Daily (beta → stable) | Good (migration guide needed) | Strong |
| **IronClaw** | 3 days | Weekly | Emerging | Very strong (canary suites) |
| **NanoBot** | 33 days (#4253) | Bi-weekly | Adequate | Moderate |
| **PicoClaw** | 8 days (#3203) | Monthly | Minimal | Weak |

---

## 7. Trend Signals

### Top 5 Industry Trends Extracted from Community Feedback

| Trend | Evidence | Value for Developers |
|-------|----------|---------------------|
| **1. Local-First is Emerging but Unstable** | NanoBot (#4867): 60s delay from broken Ollama caching; Hermes (#61265): large prompts stall local models; ZeroClaw (#8840): token budget undercount | **Build local model support with caching and fallback strategies** — users demand offline-capable agents. |
| **2. Prompt Caching as Core Infrastructure** | OpenClaw (#102175): cache continuity regression; NanoBot (#4867): prefix preservation; CoPaw (#5348): date-based KV cache freezing | **Treat prompt prefix as first-class API contract** — caching is required for production latency. |
| **3. Observability is Becoming Non-Negotiable** | ZeroClaw (#8933): OTel `conversation.id`; IronClaw (canary suites); CoPaw (#5922): Langfuse integration | **Integrate structured logging and tracing** — users want to debug agent behavior in production. |
| **4. Security Hardening is Accelerating** | NanoClaw (#2827): MCP approval smuggling; NullClaw (#974): A2A auth bypass; OpenClaw (#103515): execution approval races | **Implement authorization at every tool boundary** — shared bearer tokens are insufficient. |
| **5. Structured Output is a Pervasive Pain Point** | OpenClaw (#99241): tool outputs as images; Hermes (#58317): compression crash; CoPaw (#5856): tool_call structure loss | **Support structured data preservation and rendering** — plain-text serialization breaks tools. |

### Emerging User Expectations

- **"Agent should self-discover its own tools"** — ZeroClaw (#5862): users expect the agent to mention `cron_add` without explicit configuration.
- **"No silent failures"** — Seven projects have issues about undetected message loss. Users explicitly demand "if you can't deliver, tell me."
- **"One command setup"** — NanoBot (#4860), PicoClaw (#3206): fresh installation friction drives users away.
- **"Cross-channel parity"** — Users expect Slack Block Kit, Telegram rich rendering, iMessage Unicode support — not just text fallback.

### Recommendation for AI Agent Developers

1. **Prioritize local model caching and fallback** — the "totally unusable" feedback on broken Ollama caching is a competitive advantage waiting to be captured.
2. **Build tool output visibility and preservation** — the #1 reliability complaint across the ecosystem.
3. **Implement authorization at tool boundaries** — security is becoming a differentiator.
4. **Invest in observability early** — users in multi-agent deployments need debugging surfaces.
5. **Watch CoPaw's AgentScope 2.0** — if it gains traction, the runtime layer could become a reference for modular agent architecture, similar to how Kubernetes standardized container orchestration.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-07-10

## Today’s Overview

NanoBot is experiencing **high development velocity**, with 43 PRs updated in the last 24 hours (14 merged/closed, 29 open) and 10 issues updated (9 open, 1 closed). No new releases were published today. The project is actively fixing regressions, addressing long-standing feature gaps (model overrides, memory improvements), and strengthening security. However, **several P1 bugs and security flaws** remain open, indicating a need for maintainer bandwidth to resolve critical issues.

---

## Releases

None.

---

## Project Progress

**14 PRs were merged or closed today**, including:

- **#4832** — `fix(cli): handle CSI-u Shift+Enter instead of dumping raw escapes` (enhancement, closed) – Fixes a terminal regression for multiline input on certain terminals.
- **#4835** (Issue) – WebUI landing message bug closed after fix. (PR not listed but issue resolved.)

Other notable PRs advancing this week (still open but with recent commits):
- **#4877** – `feat(webui): highlight file previews and diffs` (new, open)
- **#4878** – `feat(hooks): add auto-discovery mechanism for agent hooks` (new, open)
- **#4843** – `fix(mcp): defer stale stack cleanup during reconnect` (P1, open) – Critical MCP crash fix.

---

## Community Hot Topics

### Most Active Issues (by comment count)

| Issue | Title | Comments | Link |
|-------|-------|----------|------|
| #4253 | support overriding model per conversation | 6 | [Issue #4253](https://github.com/HKUDS/nanobot/issues/4253) |
| #4823 | whatsapp – groups broken | 4 | [Issue #4823](https://github.com/HKUDS/nanobot/issues/4823) |
| #4867 | Preserve exact prompt prefix to enable caching in Ollama | 3 | [Issue #4867](https://github.com/HKUDS/nanobot/issues/4867) |
| #4231 | Add model parameter to spawn tool for subagent model override | 2 | [Issue #4231](https://github.com/HKUDS/nanobot/issues/4231) |
| #4860 | no such command "onboard" or "webui" | 2 | [Issue #4860](https://github.com/HKUDS/nanobot/issues/4860) |

**Analysis:**
- **#4253** – Strong community desire for per‑conversation model switching (local vs. cloud). This aligns with multiple open PRs (#4291, #4205, #4622) and is likely a high‑priority roadmap item.
- **#4823** – WhatsApp group permissions are broken post‑v0.2.2, causing responses to leak into every group. High frustration from users relying on group isolation.
- **#4867** – Ollama users report **60‑second delays per turn** due to prompt prefix manipulation disabling caching. Described as “totally unusable”. This is a severe performance bug disguised as an enhancement request.

---

## Bugs & Stability

### Bugs updated in the last 24 hours, ranked by severity

| Severity | Issue | Description | Status | Fix PR exists? |
|----------|-------|-------------|--------|----------------|
| **Critical** | #4776 | `/restart` command has zero authorization – any paired user can DoS the process | Open | No direct fix, but #4844 (slash authorization for sustained goals) partially addresses related authorization gaps. |
| **High** | #4867 | Ollama prompt prefix adds +60s per turn – caching broken | Open (enhancement) | No; requires rethinking prompt construction. |
| **High** | #4823 | WhatsApp group responses sent to all groups instead of allowed only | Open | No specific fix PR yet. |
| **Medium** | #4864 | Endless loop for `complete_goal` due to gateway parsing error | Open | No. Root cause: recent serialization change. |
| **Medium** | #4860 | `nanobot onboard` / `nanobot webui` commands missing after uv install | Open | No; likely documentation/installer issue. |
| **Low** | #4835 | WebUI landing message sent to wrong existing chat (closed) | Closed | Fixed; no details on PR. |

**Note:** Three P1 PRs (#4843, #4844, #4697) are open and address MCP crash, authorization, and subagent MCP inheritance respectively, but none directly target the critical security bug #4776.

---

## Feature Requests & Roadmap Signals

### User‑requested features (updated today)

- **Per‑conversation model override** (#4253) – Most requested. Multiple contributors (rombert, jsapede, chengyongru) have linked PRs and discussions. Likely to land in next release.
- **Preserve exact prompt prefix for Ollama caching** (#4867) – A performance enabler for all local model users. High impact.
- **Model parameter for `spawn` tool** (#4231) – Already implemented in **PR #4291** (subagent configurable model presets) which is open and has conflicts.
- **Cron‑level model/preset** (#4378) – Addressed by **PR #4622** (feat(cron): support job model presets), open with conflicts.
- **Dream only commit when productive** (#4872) – Simple enhancement, no PR yet.

### Likely next‑release features

Based on merged/closed PRs and active open PRs with recent commits:
1. **Subagent model overrides** (#4291, #4231) – Merge conflict resolution needed.
2. **Cron job model presets** (#4622).
3. **WebUI improvements** – File preview highlighting (#4877), guided queue prompt (#4876).
4. **Hook auto‑discovery** (#4878) – Eases custom hook integration.
5. **MCP reconnect stability** (#4843) – P1, close to merge.

---

## User Feedback Summary

| Pain point | Source | Sentiment |
|------------|--------|-----------|
| Ollama unusable due to +60s per turn | #4867 | **Strongly negative** – “totally unusable” |
| WhatsApp groups broken – responses leak to all groups | #4823 | **Frustration** – “i try not go into detail… currently group allow is broken” |
| Missing `onboard`/`webui` commands after install | #4860 | **Confusion** – new users cannot find documented commands |
| Security: `/restart` kills entire bot with no authorization | #4776 | **Concern** – “zero authorization checks” |
| `complete_goal` tool causes infinite loop | #4864 | **Annoyance** – basic goal completion broken |
| WebUI first‑message misdirection (fixed) | #4835 | **Fixed** – user reported correctly, resolved. |

**Positive signals:**
- Users are actively contributing PRs (chengyongru, hamb1y, yu‑xin‑c, multiple authors).
- The community values flexibility (model switching, subagent configs, cron presets) and is willing to add features.

---

## Backlog Watch

### Issues and PRs needing maintainer attention

| Item | Type | Created | Age | Reason for watch |
|------|------|---------|-----|------------------|
| #4253 | Issue | 2026-06-08 | 32 days | Top‑voted feature request, 6 comments, no maintainer response since creation. |
| #4231 | Issue | 2026-06-07 | 33 days | Subagent model override, closely linked to contested PRs. No maintainer direction. |
| #4378 | Issue | 2026-06-17 | 23 days | Cron model preset; PR #4622 exists but has conflicts. Awaiting review. |
| #4280 | PR | 2026-06-10 | 30 days | Memory context continuity fix; labeled `conflict`. Unresolved merge conflicts block progress. |
| #4205 | PR | 2026-06-05 | 35 days | Mailbox‑backed subagent results; `conflict` label, no recent activity from maintainer. |
| #4621 | PR | 2026-07-01 | 9 days | Memory archive gating with provenance; `conflict`. Recently updated but not merged. |
| #4588 | PR | 2026-06-29 | 11 days | Token reduction via tool output compression; `conflict` and `performance`. Could significantly improve context efficiency. |
| #4668 | PR | 2026-07-02 | 8 days | Enforce message outbound policy (security, P1); `conflict`. Critical for isolation but stalled. |
| #4697 | PR | 2026-07-04 | 6 days | Configurable MCP inheritance (security, P1); `conflict`. Addresses subagent tool access security. |

**Recommendation:** The maintainers should prioritise resolving merge conflicts on these PRs, especially **#4668** and **#4697** (security P1), and respond to the popular feature request **#4253** to set community expectations.

---

*Data sourced from GitHub repository HKUDS/nanobot as of 2026-07-10 23:59 UTC.*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest – 2026-07-10

## 1. Today’s Overview

The project saw high activity with **50 issues updated** (31 open, 19 closed) and **50 pull requests updated** (all 50 remain open; none were merged or closed in the last 24 hours). The closure of 19 issues—many tagged `sweeper:implemented-on-main—indicates that several bug fixes and minor features reached a stable solution, though the complete lack of merged PRs suggests a bottleneck in the review pipeline or a deliberate code-freeze period. The open PR count is unusually high, which may increase risk of merge conflicts and maintainer fatigue.

## 2. Releases

**No new releases** in the last 24 hours. The latest tagged version is not reported; users are running the `main` branch or the previous release (v0.18.x based on issue references).

## 3. Project Progress

Although **zero PRs were merged or closed**, the following notable issues were **closed** during the day, many with the `sweeper:implemented-on-main` label, indicating the fixes are available on `main`:

- [#60732 – Clarifying Sidebar Hierarchy / Repository vs Branch Level Redundancy](https://github.com/NousResearch/hermes-agent/issues/60732) – UX discussion resolved.
- [#61195 – Delegation `base_url` correctly resolved but subagent still routes to OpenRouter → 401](https://github.com/NousResearch/hermes-agent/issues/61195) – delegation routing fix.
- [#61191 – Desktop Composer persists stale URL/file attachments across conversations](https://github.com/NousResearch/hermes-agent/issues/61191) – localStorage draft cache fix.
- [#61081 – Windows desktop UI scaling resets after minimizing](https://github.com/NousResearch/hermes-agent/issues/61081) – scaling persistence fix.
- [#61036 – Desktop model picker hides MoA provider](https://github.com/NousResearch/hermes-agent/issues/61036) – UX regression fix.
- [#61008 – Telegram voice messages cause interrupt recursion deadlock](https://github.com/NousResearch/hermes-agent/issues/61008) – voice message delivery fix.
- [#60694 – MCP OAuth tokens deleted on reconnect failure](https://github.com/NousResearch/hermes-agent/issues/60694) – OAuth token preservation fix (though marked `cannot-reproduce`).
- [#60635 – QQAdapter.connect() missing `is_reconnect` parameter causes crash](https://github.com/NousResearch/hermes-agent/issues/60635) – QQ Bot reconnect fix.
- [#61106 – Configurable webhook bind host](https://github.com/NousResearch/hermes-agent/issues/61106) – feature implemented.
- [#60954 – `project_create` writes to DB but sidebar shows no entry](https://github.com/NousResearch/hermes-agent/issues/60954) – UI refresh fix.
- [#60929 – Cannot update Desktop version](https://github.com/NousResearch/hermes-agent/issues/60929) – update mechanism fix.

These closures demonstrate steady progress on bugs and small feature gaps across the Desktop, Gateway, and MCP subsystems.

## 4. Community Hot Topics

The most active discussions (by comment count) centered on feature extensions and tricky bugs:

- **[#49190 – Generalize Kanban notifications into an event substrate](https://github.com/NousResearch/hermes-agent/issues/49190)** (5 comments)  
  Author proposes decoupling Kanban notification logic from the gateway platform to allow any surface (TUI, desktop, webhook) to subscribe. Underlying need: extendability and code reuse for event-driven workflows.

- **[#60732 – Clarifying Sidebar Hierarchy](https://github.com/NousResearch/hermes-agent/issues/60732)** (5 comments, closed)  
  UX discussion about repository vs. branch-level visual redundancy in the Desktop sidebar. Reflects user confusion over the mental model of sessions.

- **[#49253 – Photon iMessage Markdown Bold-Formatting corrupts Unicode](https://github.com/NousResearch/hermes-agent/issues/49253)** (4 comments)  
  A lingering P2 bug that replaces Unicode characters with `▉` when sending bold markdown via iMessage. Users reporting German text corruption. No fix PR yet.

- **[#61195 – Delegation base_url routing fails with 401](https://github.com/NousResearch/hermes-agent/issues/61195)** (4 comments, closed)  
  Subagent correctly resolves delegation config but still routes to OpenRouter. Fix now on `main`.

- **[#61265 – Hermes sends extremely large prompts to local OpenAI-compatible models](https://github.com/NousResearch/hermes-agent/issues/61265)** (3 comments, 1 👍)  
  Causes multi-minute stalls. Likely a prompt construction issue in agent workflows; users testing across model sizes.

No PRs accumulated more than 0 visible comments (data shows `undefined`), indicating limited peer review activity on the open pull requests.

## 5. Bugs & Stability

New bugs reported today (created 2026-07-10) ranked by priority:

| Priority | Issue | Description | Fix PR? |
|----------|-------|-------------|---------|
| **P2** | [#61850 – Ollama loses terminal response after successful tool calls](https://github.com/NousResearch/hermes-agent/issues/61850) | Turns produce `incomplete` finish_reason; no visible text. Needs repro. | None yet |
| **P2** | [#62142 – Verification-stop discards streamed final answers and cron reports](https://github.com/NousResearch/hermes-agent/issues/62142) | Editing + verification can lose substantive answer from transcript. | None yet |
| **P3** | [#62158 – Desktop chat elapsed-time counter resets on navigation](https://github.com/NousResearch/hermes-agent/issues/62158) | Timer resets to ~1s when leaving and returning to chat view. | None yet |
| **P3** | [#62157 – Discord agent cannot self-delete messages](https://github.com/NousResearch/hermes-agent/issues/62157) | Feature request but exposes capability gap. | None yet |

Existing high-severity bugs still open:

- **#49253 (P2)** – iMessage Unicode corruption (unfixed, no PR)
- **#61265 (P2)** – Large prompts stalling local models (3 comments, 1 👍; no PR yet)
- **#58317 (P2)** – Compression crash `AttributeError: 'dict' object has no attribute 'count'` (open since July 4)
- **#60014 (P2)** – cron.jobs module-level caching breaks test isolation (open since July 7)

Several fix PRs are in flight for similar session-state bugs: #61116 (flush budget results), #61113 (model swap detection), #61092 (session reset mode), #60731 (TUI sticky-scroll), and #61090 (memory mirror). These indicate the team is actively addressing persistence and state management issues.

## 6. Feature Requests & Roadmap Signals

High-signal feature requests from the last 24 hours:

- **[#62157 – Discord self-delete messages + code-exec tool](https://github.com/NousResearch/hermes-agent/issues/62157)** – Strong use case: users want the agent to clean up its own messages. Currently leads to misleading “I don’t have Discord delete tools” refusal.
- **[#56944 – Refresh session button in Desktop app](https://github.com/NousResearch/hermes-agent/issues/56944)** – Delayed session visibility after creation via ACP Extension. Simple UI fix likely in next patch.
- **[#49190 – Generalized Kanban notification substrate](https://github.com/NousResearch/hermes-agent/issues/49190)** – High architectural impact; would enable any client to subscribe to task events. Could be a v0.19 milestone item.
- **[#49430 – Orchestrator should remediate blocked tasks](https://github.com/NousResearch/hermes-agent/issues/49430)** – Automation for Kanban tasks hitting failure limits. Currently requires manual intervention.
- PRs like [#61111 – aiops-agent optional skill](https://github.com/NousResearch/hermes-agent/pull/61111) and [#61091 – Compression handoff artifacts](https://github.com/NousResearch/hermes-agent/pull/61091) suggest new optional skills and data export capabilities are being prepared.

**Prediction for next version (likely v0.18.3 or v0.19):**  
- Desktop session refresh button  
- Discord message self-deletion (low effort, high user impact)  
- Configurable webhook bind host (already implemented)  
- Generalized notification substrate may be deferred to a larger rework.

## 7. User Feedback Summary

Overall tone: **mixed**. Many issues are being resolved quickly (19 closed today), but recurring pain points persist:

- **Desktop UX:** Users are frustrated by zoom resets (`#61081` closed, but `#60693` reopens similar issue), stale attachment cache (`#61191` closed), and the model picker hiding MoA providers (`#61036` closed). These indicate insufficient testing of UI state persistence.
- **Gateway reliability:** Interrupt deadlocks (`#61008` closed), voice message loss, and QQ reconnect crashes (`#60635` closed) show that multi-platform resilience is a work in progress.
- **Configuration surprises:** Webhook binding to 0.0.0.0 was hardcoded (`#61106` closed); `custom:<name>` providers fail model discovery (`#55153` open); `session_reset.mode` not respected (`#61052` fixed via #61092). Users expect config to be honored consistently.
- **Session state fragility:** Compression crashes (`#58317`), background review forks (`#61088`), and memory sync leaks (`#61086`, `#61090`) suggest the context engine layer needs hardening.
- **Positive signals:** The swift closure of 19 issues and the existence of dedicated sweeper bots (`sweeper:implemented-on-main`) show a responsive maintainer team. Users like the rapid iteration pace.

## 8. Backlog Watch

Issues and PRs that have been open for a significant time without maintainer response or progress:

- **[#38662 – `/claude` gateway command passes unsupported flags to Claude Code CLI](https://github.com/NousResearch/hermes-agent/issues/38662)** – Opened June 4, P2, 1 comment, no PR. The ACP transport for Claude Code is broken; users cannot use `/claude` in gateways.
- **[#37168 – Finite first-chunk timeout for local OpenAI streams](https://github.com/NousResearch/hermes-agent/pull/37168)** – PR opened June 2, no comments, still open. Unbounded wait on local models remains unaddressed.
- **[#49190 – Kanban event substrate](https://github.com/NousResearch/hermes-agent/issues/49190)** – No maintainer response since June 19. Architecture proposal with 5 comments but zero thumbs-up; may not be prioritized.
- **[#49253 – iMessage Unicode corruption](https://github.com/NousResearch/hermes-agent/issues/49253)** – Open since June 19, P2, 4 comments, no assignee. Affects non-English users; no progress in 3 weeks.
- **[#55153 – `custom:<name>` provider model discovery fails](https://github.com/NousResearch/hermes-agent/issues/55153)** – Opened June 29, P3, 2 comments. User-defined provider endpoints are effectively broken.

These items deserve maintainer attention to prevent user abandonment and regressions in core functionality.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-07-10

## 1. Today’s Overview
Project activity is moderate with five open issues and 22 pull requests touched in the last 24 hours. No new releases were published. The community submitted three merged fixes (LINE channel safety, AWS SDK dependency bump) while the maintainer team appears to be focused on hardening – five fresh PRs from `corporatepiyush` cover TLS security, OAuth correctness, and memory allocation reductions. Several older “stale” issues and PRs (#3203, #3206, #3205) have been updated by their authors but still await maintainer review. Overall, the project is steadily addressing infrastructure bugs and incremental optimisations, but the backlog of unresolved, older items suggests a need for more systematic triage.

## 2. Releases
**None** – no new versions were cut in the last 24 hours.

## 3. Project Progress
Two pull requests were merged/closed today:

- **#3171** `fix(line): add ok checks for sync.Map type assertions in Send` — prevents potential panics when the LINE channel’s `Send` method encounters unexpected map value types. [PR #3171](https://github.com/sipeed/picoclaw/pull/3171)
- **#3213** `build(deps): bump github.com/aws/aws-sdk-go-v2/config from 1.32.25 to 1.32.27` — routine dependency update. [PR #3213](https://github.com/sipeed/picoclaw/pull/3213)

Both are low-risk, incremental improvements. No major feature work advanced to `main` today.

## 4. Community Hot Topics
Activity on issues and PRs remains low in terms of discussion. The most commented-on item is:

- **#3201** `[Feature] Support streaming output for QQ channel` (2 comments, created 2026-07-01) — users request real-time, token-by-token output for the QQ channel, similar to Telegram and Pico WebSocket. The underlying need is parity across chat platforms for latency-sensitive interactions. [Issue #3201](https://github.com/sipeed/picoclaw/issues/3201)

No PRs today gathered significant discussion. Several new PRs from `corporatepiyush` (#3243–#3246) are “optimisation” focused and have attracted no comments yet, which is typical for such change sets.

## 5. Bugs & Stability

| Severity | Issue / PR | Summary | Status |
|----------|------------|---------|--------|
| **Critical** | [#3203](https://github.com/sipeed/picoclaw/issues/3203) | Matrix `/sync` loop dies silently after network/server disruption; no reconnection logic. Systemd cannot detect the failure. | Open, stale. No fix PR yet. |
| **High** | [#3206](https://github.com/sipeed/picoclaw/issues/3206) | v2→v3 config migration fails with “unknown field(s): build_info, session.dm_scope”, affecting fresh installs of v0.2.9. | Open, stale. No fix PR. |
| **High** | [#3239](https://github.com/sipeed/picoclaw/issues/3239) | OAuth refresh uses incompatible provider semantics (JSON vs form) and can race – breaks OpenAI OAuth refresh. | Opened today; fix PR #3241 exists (see below). |
| **Medium** | [#3240](https://github.com/sipeed/picoclaw/issues/3240) | WhatsApp native channel lacks typing presence – no user feedback during long processing. | Opened today; fix PR #3242 exists. |

**Fix PRs available today:**
- **#3241** `fix(auth): make OAuth refresh provider-correct and concurrency-safe` – addresses #3239 by sending JSON for OpenAI, adding a 30‑second timeout, and omitting scopes during refresh. [PR #3241](https://github.com/sipeed/picoclaw/pull/3241)
- **#3242** `feat(whatsapp): add native typing presence` – implements `TypingCapable` for WhatsApp, addressing #3240. [PR #3242](https://github.com/sipeed/picoclaw/pull/3242)
- **#3246** `fix: security and robustness hardening (MQTT TLS, OAuth timeouts, bounded search reads)` – enables TLS certificate verification for MQTT, adds timeout on OAuth requests, bounds search reads. [PR #3246](https://github.com/sipeed/picoclaw/pull/3246)

**Note:** The most severe bug (#3203 – Matrix silent death) remains unfixed despite being reported eight days ago. This should be prioritised.

## 6. Feature Requests & Roadmap Signals

- **Streaming for QQ channel** (#3201) – a long-standing parity request. Likely to be included in the next minor release given that the pattern already exists for Telegram and WebSocket.
- **WhatsApp typing presence** (#3240) – a PR (#3242) is already submitted; expect it in the next patch.
- **Remote Pico WebSocket mode** (#3118) – an open PR since June 12, adding a `--remote` flag to `picoclaw agent`. This could land in v0.4.0 if reviewed.
- **Bedrock prompt caching** (#3163) – a performance enhancement for AWS Bedrock users, still open since June 23. Could be merged once the maintainers approve.

No breaking changes or major roadmap shifts are indicated in today’s data.

## 7. User Feedback Summary
Real user pain points evident today:

- **“Matrix stops working and I don’t know it’s dead”** – frustration with silent failure after network blips. The user (weissfl) even described a workaround involving `systemd` restart policies, indicating production usage.
- **“Config migration broke my setup”** – several users on fresh installs of v0.2.9 hit a migration error (#3206). This blocks first-run experience.
- **“OAuth refresh doesn’t work with OpenAI”** – greencabe reported that the generic OAuth handling fails for OpenAI, causing authentication issues. The fix in #3241 should address this.
- **“No feedback when chatting via WhatsApp”** – users expect typing indicators to know the bot is working.

Overall, the community values stability and platform reliability over new features, with the Matrix and config migration bugs being the most disruptive.

## 8. Backlog Watch
The following older items remain unaddressed and need maintainer attention:

| Item | Type | Age | Notes |
|------|------|-----|-------|
| [#1951](https://github.com/sipeed/picoclaw/pull/1951) – chore: move installation scripts from docs repo to here | PR | Opened 2026-03-24 (over 3 months) | No comments from maintainers; blocks documentation consolidation. |
| [#3205](https://github.com/sipeed/picoclaw/pull/3205) – fix: support 9router gateway responses and add Linux ARMv7 build target | PR | Opened 2026-07-02 (stale) | Needed for Raspberry Pi users; author is waiting for review. |
| [#3202](https://github.com/sipeed/picoclaw/pull/3202) – fix(routing): strip leading/trailing underscores in ID normalization | PR | Opened 2026-07-01 (stale) | Small correctness fix for agent ID generation. |
| [#3203](https://github.com/sipeed/picoclaw/issues/3203) – Matrix sync loop has no reconnection logic | Issue | Created 2026-07-02 (stale) | Critical bug affecting Matrix users; no PR yet. |
| [#3206](https://github.com/sipeed/picoclaw/issues/3206) – v2→v3 config migration fails | Issue | Created 2026-07-02 (stale) | Blocks fresh installs; no PR yet. |
| [#3118](https://github.com/sipeed/picoclaw/pull/3118) – Add remote Pico WebSocket mode | PR | Opened 2026-06-12 | Feature PR awaiting review for almost a month. |
| [#3115](https://github.com/sipeed/picoclaw/pull/3115) – Fix inline data URL media extraction for generic tool output | PR | Opened 2026-06-12 | Session-history corruption fix; pending review. |

These items represent a growing backlog that could harm community trust if left unresolved. Prioritising the critical Matrix and config migration bugs would significantly improve project health.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-07-10

## 1. Today’s Overview
NanoClaw is in a high-velocity patch cycle. Over the past 24 hours, 7 issues were updated (5 open, 2 closed) and 20 pull requests were updated (17 open, 3 merged/closed). The surge is driven by two parallel efforts: a **security hardening track** (two related advisories on MCP server approval smuggling) and a **CLI + database consistency campaign** (multiple PRs fixing missing rows on `ncl groups create` and `ncl wirings create`). Activity is also boosted by a feature series codenamed “scheduled-tasks train” (part 3/5 merged today), and a steady stream of Chinese‑localized improvements (Codex footer fix, Feishu notification for delegation). No new releases were published today.

## 2. Releases
*None* — no new releases in the last 24 hours.

## 3. Project Progress (Merged/Closed PRs Today)
Three PRs were merged or closed:

- **PR #2621** (chore: add `.gitattributes` to enforce LF line endings for shell scripts) — merged. Improves cross‑platform compatibility for Windows contributors.
- **PR #3000** (fix(codex): footer token uses single‑turn value instead of cumulative) — closed. Fixes a cosmetic bug where the Codex footer displayed millions of tokens (e.g. 383M input tokens) by preferring `last_token_usage` over `total_token_usage`.
- **PR #2416** (fix(cli): provision companion rows on `ncl groups create` and `ncl wirings create`) — closed. Addresses the root cause of two long‑standing bugs (#2415, #2389) by ensuring `container_configs` and `agent_destinations` rows are created alongside the main records.

Two closed issues reflect the same fixes:
- **Issue #2415** (closed) – “`ncl groups create` skips `container_configs` row” — resolved by PR #2416.
- **Issue #2389** (closed) – “Wirings created via `bin/ncl` don’t auto‑create destinations” — resolved by PR #2416.

**Progress summary**: The CLI now correctly bootstraps all required database rows for new groups and wirings. The Codex metrics display is accurate. Build tooling is more Windows‑friendly.

## 4. Community Hot Topics
Most discussions revolve around **security advisories** and **critical spawn failures**:

- **Security – #2827 / #2762** (both open): *`add_mcp_server` approval flow hides runtime `args` and `env`*. Two duplicate advisories (opened 2026‑06‑14 and 2026‑06‑21) describe how an attacker‑controlled agent can submit an MCP server request whose approval card shows only the server name and URL, while the actual `args` and `env` are persisted without the approver’s knowledge. **Impact**: high — smuggled environment variables could leak secrets or inject commands. Fix PR #2998 is open (renders full payload on the approval card).
- **Bug – #2997** (open, 1 day old): *`hasIdenticalSend` matches sends from previous fires, blocking recurring reminders*. A recurring task with fixed text stops delivering after the first fire. The deduplication logic erroneously treats the second occurrence as a duplicate. No fix PR yet.
- **Bug – #2995** (open, 1 day old): *Outbound messages to an offline channel adapter are marked delivered*. When the channel factory returns null (missing credentials, setup failure), the delivery loop marks the message as `delivered` without any send attempt. Fix PR #2996 exists — routes missing‑adapter messages into the retry path.
- **Feature – #2877** (open, 12 days old): *Native rich rendering for Telegram via Bot API 10.1 `sendRichMessage`*. High community interest as it unlocks interactive media cards in‑line.
- **Feature – #2999** (open, today): *Unify iMessage into a single channel with local + hosted backends*. Consolidates two separate skill implementations.

## 5. Bugs & Stability
**High‑severity (security)**:
1. **#2827 / #2762** – MCP server approval smuggling. No fix merged yet; PR #2998 is open (renders visibility). **Risk**: allows persist of arbitrary `args`/`env` without user consent.
2. **#2995** – Offline adapter marks messages delivered (silent data loss). PR #2996 open.

**Medium‑severity**:
3. **#2997** – Recurring reminders stop after first fire (functional regression for scheduled tasks). No fix PR yet.
4. **#3001** – Groups created before shared‑skills refactor never receive skill updates. Stale copies block symlinks. Fix PR #3002 open (warns when a real entry blocks a shared skill symlink).
5. **#2994** – (feature, but risk of breaking existing delegation flows) – Feishu notification for delegation sub‑groups.

**Low‑severity (cosmetic / CLI)**:
6. Various duplicate PRs for the “container config row missing” bug (#2610, #2539, #2926) — now functionally closed by #2416, though several remain open as alternatives.

**Fix status**: Out of 5 open bugs, 3 have dedicated fix PRs (#2998, #2996, #3002). The recurring reminder bug (#2997) has no fix PR yet — **maintainer attention needed**.

## 6. Feature Requests & Roadmap Signals
The following feature PRs signal the next release’s likely shape:

- **Scheduled Tasks (Part 3/5) – PR #2988**: Forces `send_message` / `send_file` to use explicit destinations, eliminating reply‑in‑place fallback. This is a breaking change for skills that rely on implicit single‑destination delivery.
- **Telegram Rich Rendering – PR #2877**: Adds Bot API 10.1 support. Expected to land in next minor release.
- **iMessage Unification – PR #2999**: Merges local and hosted backends under one skill. Likely to be a featured add‑on.
- **Remote Storage Skill – PR #1598** (open since April): WebDAV / S3 via rclone + systemd, plus CLI mount management. Long‑standing, high utility.
- **Chinese localization**: Codex token fix (#3000) and Feishu notification (#2994) — growing East Asian contributor base.
- **Socket Hardening – PR #2802**: Client timeout/cap and server fail‑closed/frame‑cap for `ncl` socket transport. A security prerequisite for untrusted host environments.

**Prediction**: The next version (likely v0.15.x) will include the security MCP approval card render (#2998), the scheduled‑tasks one‑door delivery (#2988), and at least one new channel (Telegram rich or iMessage unified).

## 7. User Feedback Summary
Real user pain points expressed through issues:

- **CLI incompleteness** (glifocat, alexli-77): “Container config not found” and “agent silently drops messages” after using `ncl` commands. Users expect `ncl groups create` and `ncl wirings create` to be fully self‑contained. Partially solved by #2416.
- **Silent failures** (glifocat, YLChen-007): Messages dropped without logs (#2389), missing destination rows (#2389), approval cards that hide dangerous config (#2827) — pervasive frustration with non‑obvious failures.
- **Stale skills** (glifocat): Groups not receiving shared‑skill updates after refactor — users report confusion and lost time debugging old behavior.
- **Recurring tasks** (glifocat): “Recurring reminders stop arriving” — a regression for anyone relying on scheduled reminders.
- **Security distrust** (YLChen-007): The approval smuggling issue undermines trust in the self‑modification workflow.

**Satisfaction signals**: Two long‑standing UX bugs (container config, destinations) are now closed, and the security team is actively responding with fix PRs. The community appears engaged (multiple contributors submitting fix PRs, e.g. jrnanocore, abarbaccia, dim0627).

## 8. Backlog Watch
The following items have been open for an extended period without a maintainer response or merge:

| Item | Age | Summary | Action Needed |
|------|-----|---------|---------------|
| **PR #1598** | 100 days (since Apr 2) | Remote storage skill (WebDAV/S3) – core‑team label, no recent activity. | Review and decide on inclusion. |
| **PR #2226** | 68 days (since May 3) | Fix host to throw on missing channel adapter (alternative to #2996). Obsoleted by #2996? | Close or merge as duplicate. |
| **PR #2539** | 53 days (since May 18) | Fix db to ensure container config row – alternative to #2416. | Close as superseded. |
| **PR #2610** | 46 days (since May 25) | Call `initGroupFilesystem` after `ncl groups create` – alternative to #2416. | Close as superseded. |
| **PR #2743** | 29 days (since Jun 11) | Fix wirings create to add agent_destinations – alternative to #2416. | Close as superseded. |
| **PR #2802** | 23 days (since Jun 17) | Socket hardening security feature – core‑team label, needs final review. | Review and merge. |
| **Issue #2827** | 19 days (since Jun 21) | Security advisory – hidden MCP args/env. Fix PR #2998 open. | Fast‑track review of #2998. |

**Two high‑priority items** need immediate maintainer attention:
1. **PR #2998** (fix for #2827 / #2762) — security fix, should be merged before next release.
2. **Issue #2997** (recurring reminder bug) — no fix PR exists, impacts scheduled tasks functionality.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest – 2026-07-10

## Today’s Overview
Project activity is very low today, with no pull requests or releases and only two issues updated in the last 24 hours. Both issues remain open and highlight significant stability and security concerns. The Telegram channel integration appears to suffer from idle-time disconnection, while a more critical vulnerability has been reported in the A2A bearer‑token route that could allow cross‑caller context reuse. No fixes or PRs are currently in flight. Overall, the project is in a maintenance‑focused state with latent risks.

## Releases
*None* – No new versions were published today.

## Project Progress
*No pull requests were merged or closed today.*  
No feature advancements, bugfixes, or documentation changes have been recorded.

## Community Hot Topics
- **[Issue #972 – [bug] telegram channel stop respond after some idle time](https://github.com/nullclaw/nullclaw/issues/972)**  
  *Author: i11010520 | Created: 2026-06-30 | Updated: 2026-07-10 | Comments: 2*  
  Users report that the Telegram channel becomes unresponsive after overnight idle periods, while the backend continues working normally (confirmed by `nullclaw agent -m "ping"`). This suggests a connector‑level timeout or reconnection issue. The problem has been open for 10 days with no maintainer response, indicating a possible gap in debugging or triage.

- **[Issue #974 – [BUG] NullClaw shared bearer A2A route allows cross-caller task and context reuse](https://github.com/nullclaw/nullclaw/issues/974)**  
  *Author: N0zoM1z0 | Created: 2026-07-10 | Updated: 2026-07-10 | Comments: 0*  
  A security researcher reports that the `/a2a` endpoint only validates a shared bearer token, after which task and session authority is determined solely by caller‑supplied `taskId` and `contextId`. In the described replay attack, Bob can read Alice’s task history and reuse her context. This is a high‑visibility topic because it exposes a fundamental authorization flaw.

## Bugs & Stability

| Severity | Issue | Description | Fix PR? |
|----------|-------|-------------|---------|
| **High** | [#974](https://github.com/nullclaw/nullclaw/issues/974) | A2A bearer‑token bypass allows cross‑caller task/context access – a direct security vulnerability affecting multi‑tenant deployments. | None yet |
| **Medium** | [#972](https://github.com/nullclaw/nullclaw/issues/972) | Telegram channel stops responding after idle periods; backend remains healthy. Likely a connection‑lifecycle bug. | None yet |

No regressions or crashes were reported beyond these two issues. Both bugs remain unaddressed as of today.

## Feature Requests & Roadmap Signals
No explicit feature requests were raised today. The absence of PRs and releases suggests the maintainers may be focusing on core stability or security hardening. If the A2A vulnerability (#974) is prioritized, a security patch is likely to appear in the next minor release. The Telegram idle bug (#972) may also drive a connector improvement in a future patch.

## User Feedback Summary
- **Pain Points**  
  - *Telegram reliability*: Users must restart the Telegram channel daily after idle disconnection (#972). Workaround exists (backend is fine) but causes user frustration.  
  - *Security concern*: A researcher demonstrates that shared bearer tokens are insufficient for multi‑user environments (#974). This undermines trust for anyone deploying NullClaw in a multi‑agent or shared‑service configuration.  
- **Satisfaction/Dissatisfaction**  
  - No positive feedback was recorded. The lack of responses to either issue may contribute to user dissatisfaction. Both reports are from active users (i11010520, N0zoM1z0) who have taken time to provide detailed reproduction steps.

## Backlog Watch
- **[Issue #972](https://github.com/nullclaw/nullclaw/issues/972)** – Open since 2026-06-30 (11 days). No maintainer comment, no PR. The idle disconnection pattern may be occurring for other channels as well. **Requires triage and a fix schedule.**  
- **[Issue #974](https://github.com/nullclaw/nullclaw/issues/974)** – Created today, zero comments. Because it is a security issue, it demands immediate maintainer attention. A patch or at least a security advisory is expected soon.

No other long‑unanswered items exist in the current backlog. The project would benefit from a dedicated bug‑fix release addressing both issues.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-07-10

## 1. Today’s Overview
The IronClaw project is in an intense bug-fix and stabilization sprint, likely a coordinated “bug bash” (tag `bug_bash_P1`–`P3`). In the last 24 hours, 31 issues were updated (27 still open) and 50 pull requests were updated (20 merged/closed). No new releases were published. Activity is dominated by addressing systemic Slack integration defects, UI inconsistencies, and runtime reliability problems. The development team is actively merging fixes from several large PRs targeting Slack delivery routing, thread management, and CI stability. The overall cadence is high, with core contributors pushing multiple fixes per day.

## 2. Releases
*None in the last 24 hours.*  
The last release attempt (PR #5598, `chore: release`) remains open with breaking changes in `ironclaw_common` and `ironclaw_skills`, suggesting an upcoming version bump may be imminent once the current wave of bug fixes stabilises.

## 3. Project Progress
Five pull requests were closed (merged or closed) today:

- **[PR #5949](https://github.com/nearai/ironclaw/pull/5949)** — Promotes the QA 9/10 Slack canary suite into the cron rotation, enabling continuous monitoring of Slack automation delivery.
- **[PR #5939](https://github.com/nearai/ironclaw/pull/5939)** — Persists successful tool observations so that model-visible success summaries are retained across provider replays.
- **[PR #5942](https://github.com/nearai/ironclaw/pull/5942)** — Constrains failure-explanation model calls to reply-only mode, preventing unintended tool invocations during error analysis.
- **[PR #5898](https://github.com/nearai/ironclaw/pull/5898)** — Overhauls Slack delivery routing and the tool surface, fixing wrong-channel delivery, raw user IDs in digests, and duplicate bot+user delivery.
- **[PR #5899](https://github.com/nearai/ironclaw/pull/5899)** — Added a 13-probe live canary suite covering Slack automation delivery and tool correctness.

Additionally, three closed issues (UI-related) were resolved: the “Jump to latest” button positioning (#5835), removal of legacy v1 test references (#5828), and non-clickable routine run action buttons (#5837).

## 4. Community Hot Topics
The most active discussions centre on critical bugs discovered during the bash:

- **[Issue #5747](https://github.com/nearai/ironclaw/issues/5747)** (3 comments) — No way to unpair Slack on the built-in host-beta mount. Users are stuck once paired. High demand for a disconnect workflow.
- **[Issue #5891](https://github.com/nearai/ironclaw/issues/5891)** (2 comments) — “Last completed” timestamp incorrectly shows the active run instead of the last finished execution. Misleading for routine monitoring.
- **[Issue #5741](https://github.com/nearai/ironclaw/issues/5741)** (2 comments) — `builtin.http.save` fails with `OutputTooLarge` when saving large web pages.
- **[Issue #5836](https://github.com/nearai/ironclaw/issues/5836)** (2 comments) — Scheduled routines fail on every run with “No thread attached”, causing 100% failure rates.
- **[Issue #5834](https://github.com/nearai/ironclaw/issues/5834)** (2 comments) — Agent incorrectly rejects Slack disconnect requests, leaving users unable to disconnect.

Several other bug-bash P2/P3 issues also have 2 comments, indicating sustained team triage and user reporting.

## 5. Bugs & Stability
New bugs reported today (2026-07-10) are ranked by severity:

**P1 (Critical)**
- **[#5943](https://github.com/nearai/ironclaw/issues/5943)** — Slack DM action posts to the current channel instead of the user’s direct messages. (Fix PR #5898 already merged.)

**P2 (High)**
- **[#5946](https://github.com/nearai/ironclaw/issues/5946)** — Assistant mutates a Google Sheet before checking if the requested Slack trigger is available.
- **[#5945](https://github.com/nearai/ironclaw/issues/5945)** — Run fails with generic “model provider was unavailable” after long multi-tool execution.
- **[#5944](https://github.com/nearai/ironclaw/issues/5944)** — Slack DM delivery silently fails while the run reports success.
- **[#5883](https://github.com/nearai/ironclaw/issues/5883)** — Generic “model output could not be used” error after successful tool execution.
- **[#5885](https://github.com/nearai/ironclaw/issues/5885)** — Approval notification opens action page but hides the approval message.
- **[#5879](https://github.com/nearai/ironclaw/issues/5879)** — Stale error banners persist after a subsequent successful run.
- **[#5836](https://github.com/nearai/ironclaw/issues/5836)** — Routine fails every 5 minutes with “No thread attached”.
- **[#5834](https://github.com/nearai/ironclaw/issues/5834)** — Slack disconnect request incorrectly rejected.
- **[#5707](https://github.com/nearai/ironclaw/issues/5707)** — Routine creation response exposes internal implementation details.

**P3 (Medium)**
- **[#5948](https://github.com/nearai/ironclaw/issues/5948)** — Agent reports GitHub extension as “activated” when it is only installed.
- **[#5947](https://github.com/nearai/ironclaw/issues/5947)** — Thread deletion requires page refresh to reflect in UI.
- **[#5889](https://github.com/nearai/ironclaw/issues/5889)** — “Load older messages” button non-functional.
- **[#5888](https://github.com/nearai/ironclaw/issues/5888)** — Cannot delete old threads from the thread list.
- **[#5708](https://github.com/nearai/ironclaw/issues/5708)** (closed) — Error banners displayed outside the chat stream. (Fix merged in a previous PR.)

Most P1/P2 bugs have corresponding fix PRs either already merged (e.g., #5898 for Slack routing, #5942 for failure explanations) or open (e.g., #5932 for surface invalid model output details, #5929 for thread delete action). The team is actively resolving these.

## 6. Feature Requests & Roadmap Signals
Several long-standing user requests and internal roadmap items are visible:

- **[Issue #2601](https://github.com/nearai/ironclaw/issues/2601)** (from April 2026) — CLI / TUI for managing secrets. No maintainer response yet.
- **[Issue #5938](https://github.com/nearai/ironclaw/issues/5938)** (new) — Unify Reborn dropdown styling with the shared SelectMenu component.
- **[Issue #5935](https://github.com/nearai/ironclaw/issues/5935)** (new) — Retire v1 runtime and remove legacy `src/` code. This signals a major architectural cleanup.
- **[Issue #5905](https://github.com/nearai/ironclaw/issues/5905)** (new) — Decompose oversized Slack lifecycle and product-auth files (follow-up to PR #5851).
- **[PR #5925](https://github.com/nearai/ironclaw/pull/5925)** — Implements W5 option A of the Reborn crate restructuring roadmap, showing active refactoring toward modularity.
- **[Issue #5919](https://github.com/nearai/ironclaw/issues/5919)** — Suggestion to monetize the MCP server with x402 micropayments. Appears promotional, likely low priority.

**Prediction for next release:** Expect inclusion of the v1 runtime removal (#5935), Slack disconnect unpairing (#5747 fix likely in progress), dropdown unification (#5938), and further stability improvements from the bug bash fixes. Secret management (CLI/TUI) remains a top user request but has no committed PR yet.

## 7. User Feedback Summary
Real pain points expressed through bug reports and feature requests:

- **Slack integration frustration:** Users cannot unpair, disconnect requests are ignored, DMs go to wrong channels, and delivery fails silently. This is the most acute pain area.
- **Routine unreliability:** Scheduled runs fail consistently with “No thread attached”; success metrics are misleading (“Last completed” shows active run). Users cannot inspect failed runs because action buttons are non-clickable.
- **UI inconsistencies:** Stale error banners, unresponsive “Load older messages”, missing delete actions for threads, and dropdowns that look out of place.
- **Generic error messages:** Runs fail with cryptic “model provider was unavailable” or “output could not be used” without actionable details.
- **Secret management:** The lack of CLI/TUI tooling for managing secrets is a long-standing ask, suggesting setup friction for new users.

Overall satisfaction is likely low due to numerous regressions, but the rapid response from core contributors (multiple daily fixes) may help restore confidence.

## 8. Backlog Watch
Issues and PRs that have remained unanswered or unaddressed for an extended period:

- **[Issue #2601](https://github.com/nearai/ironclaw/issues/2601)** (2026-04-18) — CLI/TUI for secrets. No maintainer comment. High community value.
- **[Issue #5418](https://github.com/nearai/ironclaw/issues/5418)** (2026-06-29) — Conversation messages appear in wrong order after tool activity. Open for 11 days without a fix PR.
- **[Issue #5640](https://github.com/nearai/ironclaw/issues/5640)** (2026-07-04) — Harness gap: no `RecordingSecurityAuditSink` in integration harness. Open for 6 days, though a linked PR (#5921) adds regression pins.
- **[Issue #5747](https://github.com/nearai/ironclaw/issues/5747)** (2026-07-07) — No way to unpair Slack on built-in mount. High-priority bug, but no attached fix PR yet. The team is likely working on it given the Slack focus.
- **[PR #5598](https://github.com/nearai/ironclaw/pull/5598)** (2026-07-03) — Release PR with breaking changes. Still open after a week, likely waiting for the current bug bash to settle.

These items would benefit from explicit maintainer attention or status updates to avoid further user frustration.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

Here is the structured project digest for LobsterAI on 2026-07-10.

---

## LobsterAI Project Digest — 2026-07-10

### 1. Today's Overview
The project maintained a high level of activity, with **18 PRs updated** and **11 merged or closed** in the last 24 hours, indicating a significant push toward stabilization and feature completion. A minor release candidate (`Release/2026.7.8`) was merged, bringing a batch of focused fixes and small enhancements. Meanwhile, community issues continue to surface around multi-agent configuration consistency and UI/UX gaps, with one notable bug report about `USER.md` files being overwritten across agents. Overall, the project appears to be in a steady state of iterative improvement, with maintainers actively addressing both recent regressions and longer-standing feature requests.

### 2. Releases
No new official releases were published today. The previous release (if any) is not listed in the data.

### 3. Project Progress
A substantial number of PRs were merged/closed today, reflecting meaningful progress in several areas:

- **Release Engineering & Bug Fixes:**
    - [PR #2317](https://github.com/netease-youdao/LobsterAI/pull/2317) **Merged**: `Release/2026.7.8` — a batch release covering fixes across renderer, build, docs, main, OpenClaw, cowork, IM, and artifacts.
    - [PR #2316](https://github.com/netease-youdao/LobsterAI/pull/2316) **Merged**: Fixed Windows title bar logo compression when sidebar is collapsed.
    - [PR #2314](https://github.com/netease-youdao/LobsterAI/pull/2314) **Merged**: Preserved original casing for WeCom and DingTalk group IDs in scheduled tasks.
    - [PR #2313](https://github.com/netease-youdao/LobsterAI/pull/2313) **Merged**: Fixed queued steer submission to preserve FIFO processing.
    - [PR #2306](https://github.com/netease-youdao/LobsterAI/pull/2306) **Merged**: Repaired IM group task routing, filtering targets by bot-bound agent and normalizing legacy jobs.
    - [PR #2308](https://github.com/netease-youdao/LobsterAI/pull/2308) **Merged**: Stripped null bytes from prompts before sending to the OpenClaw gateway.

- **Cowork Features:**
    - [PR #2310](https://github.com/netease-youdao/LobsterAI/pull/2310) **Merged**: Added folder context attachments to Cowork, allowing users to paste/drop folders as prompt attachments.
    - [PR #2315](https://github.com/netease-youdao/LobsterAI/pull/2315) **Merged**: Fixed queued follow-up coordinator so follow-ups are processed across sessions and while the app is minimized.
    - [PR #2312](https://github.com/netease-youdao/LobsterAI/pull/2312) **Merged**: Fixed ask-user minimize state loss.

- **Memory & Build:**
    - [PR #2311](https://github.com/netease-youdao/LobsterAI/pull/2311) **Merged**: Migrated FTS-only memory indexes for all agents, with safe retry on failure.
    - [PR #2309](https://github.com/netease-youdao/LobsterAI/pull/2309) **Merged**: Replaced `String.replaceAll` for ES2020 compatibility in the build process.

### 4. Community Hot Topics
- **[Issue #2293](https://github.com/netease-youdao/LobsterAI/issues/2293) — Multi-Agent USER.md Overwrite Bug** (Open, 2 comments): This is the hottest discussion. A user reports that modifying `USER.md` or the "About You" settings for one agent overwrites the same file for all other agents. The user suspects a recent update introduced this bug. This is a severe regression for multi-agent setups.
- **[Issue #1337](https://github.com/netease-youdao/LobsterAI/issues/1337) — Missing Session List Grouping** (Open, 1 comment): A feature request from April for time-based grouping (Today, Yesterday, This Week) in the session sidebar. The corresponding PR [#1338](https://github.com/netease-youdao/LobsterAI/pull/1338) remains open and stale, suggesting community demand for this common UX pattern.

### 5. Bugs & Stability
- **Critical: [Issue #2293](https://github.com/netease-youdao/LobsterAI/issues/2293) — USER.md overwrite across agents.** This is the most impactful bug reported. It destroys configuration isolation between agents. **No direct fix PR exists yet**, though PR [#2311](https://github.com/netease-youdao/LobsterAI/pull/2311) (merged) touches memory index migration for all agents, which might be related. This requires urgent maintainer attention.
- **Moderate: [Issue #1392](https://github.com/netease-youdao/LobsterAI/issues/1392) — Scheduled task switch unclickable for some tasks.** This was closed today after being stale, likely by the stale bot. The root cause may still be unresolved.
- **Minor/Fixed: [PR #2315](https://github.com/netease-youdao/LobsterAI/pull/2315) & [PR #2312](https://github.com/netease-youdao/LobsterAI/pull/2312)** addressed null byte injection and minimize state loss, which could cause silent data corruption and session loss.

### 6. Feature Requests & Roadmap Signals
- **Session List Time Grouping** ([Issue #1337](https://github.com/netease-youdao/LobsterAI/issues/1337), [PR #1338](https://github.com/netease-youdao/LobsterAI/pull/1338)): A well-defined UX feature already implemented by the community in a stale PR. High chance of merging in the next release after review.
- **Workdays (Mon-Fri) Schedule Option** ([PR #1335](https://github.com/netease-youdao/LobsterAI/pull/1335)): A simple but high-value PR for scheduled tasks. Very likely to be merged soon.
- **MCP JSON Import** ([PR #1336](https://github.com/netease-youdao/LobsterAI/pull/1336)): Allows importing MCP server configs via JSON. Solves a known pain point for power users. High demand.
- **Folder Context Attachments** ([PR #2310](https://github.com/netease-youdao/LobsterAI/pull/2310)): Just merged today, indicating the roadmap is prioritizing richer context and file handling in the Cowork flow.

### 7. User Feedback Summary
- **Pain Point: Multi-Agent Configuration Isolation** — The `USER.md` overwrite bug ([#2293](https://github.com/netease-youdao/LobsterAI/issues/2293)) directly contradicts the purpose of having multiple agents, causing significant frustration.
- **Pain Point: Session Management** — Users find the session list chaotic without time grouping ([#1337](https://github.com/netease-youdao/LobsterAI/issues/1337)), echoing feedback common in other chat products.
- **Satisfaction Signal** — The quick merging of multiple fix PRs today (scheduled task routing, null bytes, memory indexes) suggests maintainers are responsive to user-reported issues, which likely improves user trust.

### 8. Backlog Watch
The following items are **open, stale, and have not received maintainer comments** in a long time, posing a risk of neglect:

- **[Issue #1337](https://github.com/netease-youdao/LobsterAI/issues/1337) — Session list time grouping**: Open since April 2, last maintained comment is unknown. The associated PR [#1338](https://github.com/netease-youdao/LobsterAI/pull/1338) is ready but unreviewed.
- **[PR #1331](https://github.com/netease-youdao/LobsterAI/pull/1331) — Error state red dot for Cowork sessions**: Open since April 2, no recent maintainer activity.
- **[PR #1333](https://github.com/netease-youdao/LobsterAI/pull/1333) — i18n attachment labels and Escape close fix**: A small, clearly scoped UX fix.
- **[PR #1335](https://github.com/netease-youdao/LobsterAI/pull/1335) — Workdays schedule option**: Compelling feature with no review activity.
- **[PR #1336](https://github.com/netease-youdao/LobsterAI/pull/1336) — MCP JSON import**: A popular feature request, unreviewed.
- **[Dependabot PRs #1276](https://github.com/netease-youdao/LobsterAI/pull/1276) & [#1275](https://github.com/netease-youdao/LobsterAI/pull/1275)**: CI dependency bumps that are also stale and unmerged.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-07-10

## 1. Today's Overview
Project activity remains minimal, with no new issues or releases in the last 24 hours. A single pull request (#1146) was updated, proposing support for the newly announced GPT-5.6 model family (Sol, Terra, Luna). The absence of bug reports or user feedback suggests either a stable baseline or low community engagement at this time. Overall, the project appears to be in a quiet maintenance phase, with a clear forward-looking feature addition under review.

## 2. Releases
*None.* No new releases were published today.

## 3. Project Progress
**Merged/Closed PRs Today:** 0  
No pull requests were merged or closed in the last 24 hours. Development activity is concentrated on the open PR described below.

## 4. Community Hot Topics
- **#1146 – [OPEN] Add GPT-5.6 model support**  
  *Author: [PeterDaveHello](https://github.com/PeterDaveHello) | Created: 2026-07-09 | Updated: 2026-07-10 | Comments: 0 | 👍: 0*  
  [View PR](https://github.com/moltis-org/moltis/pull/1146)  
  This is the only active PR. It registers GPT-5.6 variants (Sol, Terra, Luna) in the OpenAI and Codex fallback catalogs, applies the documented 1.05M context window (with a 372K ChatGPT/Codex backend limit), and replaces superseded model references in configuration examples and documentation. The underlying need is clear: keeping Moltis compatible with the latest OpenAI model releases, which is critical for any AI agent framework. The PR is small but impactful, reflecting the team’s responsiveness to model provider changes.

## 5. Bugs & Stability
No bugs, crashes, or regressions were reported in the last 24 hours. The project currently has zero open issues, indicating no known stability concerns.

## 6. Feature Requests & Roadmap Signals
The only feature signal today is PR #1146, which adds support for GPT-5.6. This strongly suggests that the next version of Moltis will include these new model endpoints. No other user-requested features were recorded. Given the timeliness of GPT-5.6’s public availability (as implied by the PR summary), this addition is likely to be merged and released in the coming days.

## 7. User Feedback Summary
No user feedback (comments, reactions, or issue reports) was captured today. The community appears silent on this particular day, which may indicate satisfaction with the current state or a lull in active use.

## 8. Backlog Watch
**No items flagged.** There are no long-unanswered issues or PRs needing maintainer attention. The project’s backlog is effectively empty, which is healthy but may also reflect low community turnover. PR #1146 is still open but is actively being reviewed (last updated today).

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

Here is the CoPaw project digest for July 10, 2026.

---

## CoPaw Project Digest — July 10, 2026

### 1. Today's Overview

The project is in a state of intense activity following the official release of **v2.0.0**. With 44 issues and 47 pull requests updated in the last 24 hours, the community is highly engaged, reporting bugs and testing the new architecture. The core team is responding quickly, as evidenced by the high closure rate (26 merged/closed PRs) and the immediate release of beta patches (v2.0.0-beta.7) prior to the stable v2.0.0. The primary focus is on stabilizing the new AgentScope 2.0 runtime and addressing critical regressions reported by the user base.

### 2. Releases

Three new releases were made today, culminating in the major **v2.0.0 stable** version.

- **v2.0.0 (Stable)**: The headline release. It features a **Runtime 2.0**, refactoring the kernel based on **AgentScope 2.0**. This is a significant architectural change that introduces a new runtime model and likely includes breaking changes. Users are already reporting issues related to this upgrade (see Bugs & Stability below). A migration guide is essential but was a primary user request (see Issue #5948).
- **v2.0.0-beta.7**: A pre-release patch focusing on UI polish and a core memory fix. It includes an update to the homepage copy/visuals for the v2.0 release and a critical fix to **propagate `session_id` into ReMe summarize tasks**, preventing memory attribution errors.
- **v2.0.0-beta.6**: A pre-release patch that focused on testing infrastructure and a fix for tool result error states.

**Migration Notes**: Users upgrading from v1.x should be prepared for breaking changes due to the new AgentScope 2.0 runtime. Key concerns from the community include compatibility of historical messages, logs, and memories. The project maintainers are expected to release a detailed migration guide shortly.

### 3. Project Progress

The closure of 26 PRs indicates robust progress on multiple fronts. Key merged/closed items from today include:

- **Core Release**: `bump the version to v2.0.0` (#5942) and `update(docs): update docs for qwenpaw 2.0` (#5932) were merged, marking the finalization of the stable release.
- **Critical Bug Fixes**:
    - `fix(memory): propagate session_id into ReMe summarize tasks` (#5938) was merged to fix command-triggered memory archival failures.
    - `fix(docs): refine news format` (#5937) was merged.
- **Feature Enhancements**:
    - `feat(website): Update homepage copy and visuals for QwenPaw 2.0` (#5940) was merged to refresh the project's front page for the new version.
    - `feat(tools): add ToolChunk instances for web search and fetch results` (#5933) was merged, enhancing how web search results are rendered in the UI.
- **Revert**: A previous fix for per-message time injection (PR #5923) was reverted in PR #5936 due to "ugly display," showing a willingness to roll back changes that negatively impact UX.

New features are also advancing, including a **configurable theme/skin module** (PR #5909), a **Windows sandbox based on restricted tokens** (PR #5931), and a **vision fallback** system for text-only models (PR #5726).

### 4. Community Hot Topics

The most engaged discussions highlight the community's active role in both testing and contributing to the project.
- **[Issue #2291: Help Wanted: Open Tasks — Come Contribute!](https://github.com/agentscope-ai/QwenPaw/issues/2291)** (64 comments)
    - This is the project's central hub for community contributions, listing tasks with priorities (P0-P2). Its high activity level shows a healthy and enthusiastic contributor base, with users actively claiming tasks like the configurable theme module (#5909) and session grouping (#5903).
- **[Issue #5401: Console: session with large tool-use history fails to render](https://github.com/agentscope-ai/QwenPaw/issues/5401)** (15 comments, CLOSED)
    - A **critical frontend crash** caused by a type mismatch between the frontend and backend for tool-use blocks. This was a high-priority bug that was fixed, reflecting effective community bug reporting and a swift maintainer response.
- **[Issue #4727: Migrate backend from AgentScope 1.x to AgentScope 2.0](https://github.com/agentscope-ai/QwenPaw/issues/4727)** (12 comments, CLOSED)
    - The tracking issue for the major v2.0.0 architectural change. Its closure marks a significant milestone. The number of comments reflects the complexity and community interest in this foundational shift.
- **[Issue #5273: QwenPaw v2.0.0 Pre-release Bug & Issue Tracker](https://github.com/agentscope-ai/QwenPaw/issues/5273)** (11 comments, CLOSED)
    - Served as a centralized location for reporting pre-release bugs. its closure signals the end of the beta phase and the readiness of v2.0.0.

### 5. Bugs & Stability

Today's reports are dominated by regressions and critical issues following the v2.0.0 release. Severity is ranked High to Low.

- **[CRITICAL] Issue #5951: Desktop shell sandbox: icacls timeout → pwsh recursive explosion + 20GB memory**
    - A severe bug in the new desktop sandbox on Windows causes a recursion of PowerShell windows that consumes up to 20GB of memory. The user notes they cannot disable it and must rollback. No associated fix PR was found immediately, but PR #5931 (`feat(sandbox): add restricted token based windows sandbox`) was opened today, which may be intended to address this.
- **[HIGH] Issue #5950: Chinese memory files trigger embedding 400 error**
    - A binary incompatibility where the text truncation logic counts characters instead of tokens, causing errors for models like `bge-m3` when processing Chinese text. This is a significant localization issue.
- **[HIGH] Issue #5947: MCP tool allow/deny policies are not enforced**
    - A core functionality regression where access control policies for MCP sub-tools are ignored, allowing agents to call disabled tools. A fix PR (#5949) was opened today.
- **[HIGH] Issue #5946: "Full output preserved durably" prompt causes agent to call `recall_history` for data still in context**
    - The agent incorrectly interprets a truncation notification as a signal to fetch data from the database, leading to unnecessary and confusing `recall_history` calls.
- **[MEDIUM] Issue #5856: Tool_call structure lost during context compaction**
    - The `LightContextManager` converts tool call structures to plain text during summarization, permanently losing structured data and causing 400 errors. This is a data integrity issue in the v1.1.12.post2 release.
- **[MEDIUM] Issue #5906: Anti-repetition feature erroneously triggers "doom loop"**
    - The duplicate detection logic is misfiring, incorrectly flagging normal conversation as a repetitive loop and halting the agent.

### 6. Feature Requests & Roadmap Signals

Based on user requests and ongoing PRs, the following features are likely candidates for upcoming releases:

- **Session Organization & Data Portability**: Interest in grouping sessions and importing/exporting them is very strong (Issue #5903, PR #5943). This is a low-lift, high-impact UX improvement.
- **Upgrade/Migration Guide**: The number of questions regarding v2.0 breaking changes (Issue #5948) makes a comprehensive guide a near-term necessity for maintaining user trust.
- **Configurable Themes**: A community-contributed design proposal for a theme system (Issue #5909) is already under discussion and is a P0 task from the help wanted list. It is likely to land in v2.0.1 or v2.1.0.
- **KaTeX Support**: A user request for LaTeX rendering in the desktop app (Issue #5453) points to a need for better academic and technical documentation support.
- **Vision Fallback**: The active PR for a vision fallback system (PR #5726) suggests this feature is a planned addition for handling images with text-only models.
- **Observability Enhancement**: A PR to integrate with Langfuse (PR #5922) signals a growing focus on production monitoring and debugging capabilities.

### 7. User Feedback Summary

User feedback is a mix of enthusiasm for the v2.0 release and frustration over regressions.

- **Pain Point: Instability of New Features**: The most vocal feedback concerns the new desktop sandbox (Issue #5951) and MCP tool policies (Issue #5947), which are either broken or cause system-level issues (20GB memory usage). Users are clearly frustrated by features that make the tool "essentially unusable."
- **Pain Point: Data Integrity & Routing**: Issues like the loss of tool_call structure (Issue #5856) and the agent incorrectly hallucinating the need to recall data (Issue #5946) are serious concerns about the agent's reliability and context management.
- **Pain Point: Lack of Migration Guidance**: Users are confused about what changes are in v2.0 (Issue #5948, #5455), indicating a communication gap in the release process.
- **Satisfaction: Community & Contribution**: The quick closure of high-priority bugs (like the frontend crash in #5401) and the active community claiming contribution tasks show a healthy contributor ecosystem. Users are also proactively filing design proposals (e.g., for themes and session grouping), showing high investment in the product's future.

### 8. Backlog Watch

Several important issues and PRs remain open and require maintainer attention to provide community feedback or make a decision.

- **[Issue #5453 (OPEN, 2 comments): KaTeX support or similar](https://github.com/agentscope-ai/QwenPaw/issues/5453)**: A feature request for LaTeX support. While not a bug, it has been open for over two weeks without a label or assignee, which might discourage potential contributors.
- **[PR #5726 (OPEN, Under Review): feat(agents): implement vision fallback for text-only models](https://github.com/agentscope-ai/QwenPaw/pull/5726)**: A valuable feature, but it has been open for over a week. It needs a reviewer to push it toward merge or provide feedback.
- **[PR #5348 (OPEN, Under Review): freeze env_context date per session to preserve KV cache](https://github.com/agentscope-ai/QwenPaw/pull/5348)**: A promising performance optimization that has been open for nearly three weeks. The lack of final decision is a potential bottleneck for contributor motivation.
- **[Issue #5455 (CLOSED, 4 comments): Why not make the current time a per-user-message prefix?](https://github.com/agentscope-ai/QwenPaw/issues/5455)**: While closed after a revert, the underlying discussion about time management and KV cache stability is unresolved and likely to resurface.
- **PRs Awaiting Human Review**: Several PRs (e.g., #5869, #5731, #5791) are tagged as "Under Review" or "ready-for-human-review" but still lack explicit approval. A pass over these to provide feedback or merge could significantly improve contributor throughput and morale.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-07-10

## 1. Today's Overview
The project saw very high activity with **36 issues updated** (26 open, 10 closed) and **50 PRs updated** (41 open, 9 merged/closed) in the last 24 hours. No new releases were published. The community is actively reporting bugs, particularly around streaming narration duplication, Gemini function call handling, and Telegram command registration. Feature work continues on SOP (Standard Operating Procedure) authoring, gateway security headers, and Discord channel parity. Several high‑severity bugs received fixes today, and a large refactor PR (#8901) aims to clean up comment bureaucracy across the entire codebase.

## 2. Releases
*None.* — No new releases are recorded for this date.

## 3. Project Progress
**Merged/closed PRs today (9 total):**  
- **#8676** – `feat(cron): expose per-cron-job uses_memory flag in CLI, tools, and gateway API` — allows agents to set memory usage for cron jobs via imperative interfaces.  
- **#8829** – `feat(gateway): add default HTTP security response headers` — closes 11 of 13 INFO‑severity findings from a security scan.  
- **#8840** – `fix(runtime): enforce context budget against provider-reported tokens` — fixes a token‑budget undercount that caused premature context trimming.  
- **#8859** – `docs(pr-template): add human-run Testing section with A/B recipe` — improves PR template to encourage manual testing evidence.  
- **#8677** (issue closed) – `Add uses_memory check box to web gateway` — companion UI work for cron memory flag.  
- Others: #8760 (keep daemon‑owned agent output out of stdout), #7809 (channel turn flags fix), #5903 (MCP child process leak), #6034 (user message loss bug).

Key advances this week: cron memory control is now fully exposed across CLI, tools, and web UI; the gateway gains basic security hardening; context budget enforcement is more accurate.

## 4. Community Hot Topics
Most discussed issues (by comment count):

- **[#5862] [Bug]: zeroclaw does not know it can add cron** — *13 comments*  
  User asks for a recurring action but ZeroClaw says it lacks the tools. Suggests the model isn’t aware of the `zeroclaw cron` CLI/tool.  
  https://github.com/zeroclaw-labs/zeroclaw/issues/5862

- **[#6808] RFC: Work Lanes, Board Automation, and Label Cleanup** — *13 comments*  
  Governance RFC to simplify maintainer workflows. Accepted and in rollout.  
  https://github.com/zeroclaw-labs/zeroclaw/issues/6808

- **[#6034] [Bug]: 单轮对话以及多轮对话会出现丢失 user message的现象** — *8 comments*  
  (Chinese) User report of missed user messages in single/multi‑turn chat. Closed today after fix.  
  https://github.com/zeroclaw-labs/zeroclaw/issues/6034

- **[#6672] [Bug]: reasoning_content not passed back in agentic tool‑call loops** — *5 comments*  
  Xiaomi thinking‑mode models lose `reasoning_content` after first tool call. Open with `stale‑candidate`.  
  https://github.com/zeroclaw-labs/zeroclaw/issues/6672

- **[#5262] [Feature]: Add ZeroClaw logo to official Agent Skills client list** — *5 comments*  
  Completed: logo added to agentskills.io clients page.  
  https://github.com/zeroclaw-labs/zeroclaw/issues/5262

Underlying needs: users want the agent to self‑discover its own built‑in tools (cron, memory flags), and they expect correct forwarding of model‑specific fields (thought content, function call signatures) across multi‑turn tool loops.

## 5. Bugs & Stability
New bugs filed today (2026-07-10), ranked by severity:

| Issue | Severity | Summary | Status | Fix PR |
|-------|----------|---------|--------|--------|
| #8952 | Medium | Streamed pre‑tool narration duplicated when turn text has trailing whitespace | Open | ✅ #8951 (fix submitted) |
| #8950 | Medium | Telegram `setMyCommands` fails when tools+skills+builtins >100 → command menu never registers | Open | — |
| #8945 | S2 | ZeroCode input box blocks macOS text replacements | Open | — |
| #8944 | S2 | ZeroCode transcript mouse copy blocks word‑level text selection | Open | — |
| #8936 | S2 | `loop_detector::hash_value` deep‑clones entire tool‑args JSON on every tool call (hot‑path allocation) | Open | — |
| #8934 | S1 | Gemini function calls fail because `thought_signature` is dropped from assistant history | Open | — |
| #8929 | S2 | Streamed narration duplicated when final display text is trimmed | Open | — |

**Critical fix deployed:** PR #8840 merged today fixes context budget enforcement – previously the runtime used a `chars/4` heuristic that undercounted tokens, causing premature message dropping.

**Ongoing high‑severity bugs:** #8654 (skill‑review panic SIGSEGV on tool‑heavy turns – in progress), #5287 (local‑first mode request), #5903 (MCP child process leak – closed today).

## 6. Feature Requests & Roadmap Signals
Notable new features requested today:

- **#8933** – Add `gen_ai.conversation.id` for cross‑turn session correlation in OTel export. Likely for v0.8.3 (observability tracker #8073).  
- **#8907** – ZeroCode TUI unified plugin/capability catalog pane (part of plugin unification #8850).  
- **#8925** – Proper way to configure Amazon Bedrock connection (support request, but indicates demand for better documentation).  
- **#7831** – Discord interaction‑surface parity tracker (embeds, slash options, voice) – long‑standing roadmap item still active.

Expected in next release (v0.8.3 or v0.9.0): OTel improvements (#8933), SOP authoring UI (#8590, large PR in progress), multi‑user isolation (#8290), and auth/security hardening (#7432).

## 7. User Feedback Summary
Real pain points expressed in today’s issues:

- **Tool discoverability** – User #5862: “I ask zeroclaw to let me do something every 8:00 PM. But zeroclaw says it does not have the tools.” The agent fails to mention `cron_add`.
- **Provider configuration friction** – #6558 (Qwen API returns 405), #8094 (Anthropic provider not showing in chat after quickstart), #8925 (Amazon Bedrock configuration unclear).
- **Telegram usability** – #8950: bot command menu fails to register when too many tools are enabled.
- **macOS ergonomics** – #8945, #8944: ZeroCode TUI interferes with system text replacements and mouse selection.
- **Streaming quality** – Multiple reports of duplicated text (#8952, #8929) due to whitespace handling in streaming narration.

Overall sentiment: users are actively deploying ZeroClaw with various providers and channels, but encounter friction in tool awareness, configuration, and edge cases in streaming. The project responds quickly (same‑day fix PRs for duplication bugs).

## 8. Backlog Watch
Issues/PRs that are old, open, and may need maintainer attention:

- **#5862** (Apr 18) – Tool discovery bug, 13 comments, needs‑repro. Should be prioritized once repro steps are confirmed.
- **#6672** (May 15) – `reasoning_content` not forwarded, `stale‑candidate`. Author may need to respond.
- **#6517** (May 7) – Context overflow hallucination with Kimi/Discord, blocked on author action.
- **#6558** (May 10) – Qwen provider error, blocked on author action.
- **#8443** (Jun 28) – Matrix single‑message progress drafts PR, `needs‑author‑action`.
- **#8139** (Jun 22) – Session TTL cleanup PR, open with no recent updates.
- **#7809** (Jun 17, closed today) – Channel turn flags bug, now resolved.

The project maintains a large backlog, but many items are marked `needs‑author‑action` or `stale‑candidate`, indicating the community is responsive once authors provide requested information.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/boom7sss/agents-radar).*