# OpenClaw Ecosystem Digest 2026-07-11

> Issues: 437 | PRs: 500 | Projects covered: 13 | Generated: 2026-07-11 03:20 UTC

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

# OpenClaw Project Digest — 2026-07-11

## 1. Today's Overview

OpenClaw is experiencing a sustained surge of activity: **437 issues and 500 pull requests** were updated in the last 24 hours, with 250 issues still open and 329 PRs awaiting review. A strong majority of this activity comes from community-driven bug reports and long-running feature requests, balanced by high-volume maintainer merging (171 PRs closed/merged today). No new releases were pushed on this date, but the pace of development suggests a significant maintenance and feature release may be imminent. Project health is robust in terms of community engagement, though several critical stability issues remain unresolved, and a backlog of features (some open since February) continues to grow.

## 2. Releases

*No new releases today.* The latest known release remains the prior tag from May/June; the absence of a release despite 171 merged/closed PRs suggests maintainers are rolling up multiple fixes for a coordinated launch.

## 3. Project Progress

Today’s 171 merged/closed PRs include several notable changes that advanced key subsystems:

- **Release pipeline**: `fix(release): support frozen validation targets` ([#104090](https://github.com/openclaw/openclaw/pull/104090)) improves release tooling for locked deployment environments.
- **Conversation identity**: `feat: add conversation identity modes` ([#104084](https://github.com/openclaw/openclaw/pull/104084)) closes issue [#98542](https://github.com/openclaw/openclaw/issues/98542), a long-requested architecture change for scoping agent identity to conversation type (personal, service, external). This is a major architectural layering improvement.
- **Regression fix**: Issue [#103332](https://github.com/openclaw/openclaw/issues/103332) (OpenClaw failing with codex/gpt5.6) was quickly closed, indicating a prompt fix.
- **Memory architecture**: The multi-slot memory role PR ([#88504](https://github.com/openclaw/openclaw/pull/88504)) remains open but continues to receive updates, signaling deep architectural rework is being actively refined.
- **Subagent completion routing**: `feat(subagents): native announceTarget` ([#101248](https://github.com/openclaw/openclaw/pull/101248)) adds native routing of subagent completions back to parent sessions, closing long-standing design gap [#27445](https://github.com/openclaw/openclaw/issues/27445).

These changes reflect progress in both core reliability and new feature development.

## 4. Community Hot Topics

The most active discussions (by comment count and reactions) highlight pressing user needs:

- **#99241 – Tool outputs rendered as image placeholders** ([link](https://github.com/openclaw/openclaw/issues/99241))  
  *20 comments, 2 👍* — Agents cannot read long-running tool outputs because they collapse into `(see attached image)`. This causes session-state and message-loss issues, rated “platinum hermit” severity. Users want the raw text restored.

- **#102175 – Embedded prompt cache breaks across boundaries** ([link](https://github.com/openclaw/openclaw/issues/102175))  
  *16 comments, 1 👍* — A regression where long-lived embedded sessions lose prompt-cache continuity across room events, policy changes, and memory recovery. Impacts session state and security.

- **#10659 – Masked secrets (prevent agent from seeing API keys)** ([link](https://github.com/openclaw/openclaw/issues/10659))  
  *15 comments, 4 👍* — Strong demand for a system that lets agents *use* API keys without *seeing* them, protecting against prompt injection. Open since February, regularly bumped.

- **#91588 – Gateway memory leak (350MB → 15.5GB)** ([link](https://github.com/openclaw/openclaw/issues/91588))  
  *15 comments, 1 👍* — A P0 critical issue causing repeated OOM crashes after days of uptime. Highly disruptive for production deployments.

- **#63829 – Per-agent memory-wiki vault configuration** ([link](https://github.com/openclaw/openclaw/issues/63829))  
  *13 comments, 10 👍* — The highest-reaction request, asking for isolated memory wikis per agent in multi-agent setups. This is a top community desire.

Underlying needs: **reliability** (memory leaks, session state loss, cache continuity) and **security** (secrets management) dominate active discussions, alongside power-user features like multi-agent memory isolation.

## 5. Bugs & Stability

Today’s data reveals several high-severity bugs, many with active investigation:

| Severity | Issue | Description | Fix PR? |
|----------|-------|-------------|---------|
| **P0** | [#91588](https://github.com/openclaw/openclaw/issues/91588) | Gateway RSS grows to 15.5GB, OOM kills process | No PR yet |
| **P0** | [#101763](https://github.com/openclaw/openclaw/issues/101763) | Hosted Molty: model selector passes dotted model ID (e.g., `claude-opus-4.8`) instead of valid `claude-opus-4-8`, blocking all API calls | No PR yet |
| **P1** | [#99681](https://github.com/openclaw/openclaw/issues/99681) | Discord plugin fails to auto-reconnect after WS code 1006; forces full gateway restart | Closed via PR? Not listed |
| **P1** | [#84569](https://github.com/openclaw/openclaw/issues/84569) | WhatsApp session stalls on long model calls; transition to incomplete turn with zero payloads | [#103562](https://github.com/openclaw/openclaw/pull/103562) (open, retry session init) |
| **P1** | [#83959](https://github.com/openclaw/openclaw/issues/83959) | Codex app-server startup retries exhaust before replacement ready | No PR, linked to others |
| **P2** | [#102175](https://github.com/openclaw/openclaw/issues/102175) | Regression: embedded prompt cache breaks across room/hook boundaries | None identified |
| **P2** | [#103332](https://github.com/openclaw/openclaw/issues/103332) | Regression: unable to run with codex/gpt5.6 | Closed today (fix merged) |

**Notable**: The memory leak (#91588) and the Molty model selector bug (#101763) are the most urgent, both P0 and lacking fix PRs. The Discord reconnect issue (#99681) was closed today, suggesting a fix landed. The prompt cache regression (#102175) continues without a patch.

## 6. Feature Requests & Roadmap Signals

The community submitted or updated many enhancements. The most significant signals for the upcoming release:

| Feature | Issue | Maturity | Likelihood for next release |
|---------|-------|----------|-----------------------------|
| **Per-agent memory-wiki vault** | [#63829](https://github.com/openclaw/openclaw/issues/63829) | Open since Apr, 10 👍 | High – strong demand, architecturally aligned with PR #88504 |
| **Masked secrets (API key isolation)** | [#10659](https://github.com/openclaw/openclaw/issues/10659) | Open since Feb, 4 👍 | High – security-critical, multiple maintainer reviews needed |
| **Webhook multi-turn session reuse** | [#11665](https://github.com/openclaw/openclaw/issues/11665) | Open since Feb | Medium – documented but broken; linked PR exists |
| **Filesystem sandboxing config** | [#7722](https://github.com/openclaw/openclaw/issues/7722) | Open since Feb, 4 👍 | Medium – well-specified, but security review ongoing |
| **Expose OpenRouter cost to runtime** | [#9016](https://github.com/openclaw/openclaw/issues/9016) | Open since Feb | Low – enhancement, not critical |
| **Batch API support for background tasks** | [#9865](https://github.com/openclaw/openclaw/issues/9865) | Open since Feb | Low – feature request with no recent updates |
| **Private Mode for content creation** | [#7403](https://github.com/openclaw/openclaw/issues/7403) | Open since Feb | Low – waiting on product decision |

**Predictions**: Masked secrets (#10659) and per-agent memory (#63829) are likely to land within the next two release cycles, given sustained community pressure and architectural groundwork (multi-slot memory PR). The batch API (#9865) and private mode (#7403) remain longer-term ambitions.

## 7. User Feedback Summary

**Pain points expressed by users:**

- **Memory leaks and OOM crashes** (#91588, #87109) – critical for production users; crashes disrupt cron jobs and background tasks.
- **Session state loss** (#99241) – tool outputs turned into unreadable image placeholders, breaking agent reasoning.
- **Broken prompt cache continuity** (#102175) – embedded agents lose context across boundaries.
- **Plugin reliability gaps** – Discord not reconnecting (#99681), WhatsApp stalls (#84569), Telegram deadlock (#27984).
- **Model compatibility** – Molty model selector passes invalid model IDs (#101763); codex integration regression (#103332, now fixed).
- **Configuration friction** – File-based cooldown blocks users for hours after billing recovery (#70903); OAuth token refresh without retry (#8673).

**Positive signals:**

- High engagement: 437 issues and 500 PRs updated in 24h shows an active, invested community.
- Feature requests with many upvotes (e.g., per-agent memory) indicate users are planning multi-agent deployments and pushing the platform forward.
- The conversation identity modes PR (#104084) was merged, directly addressing a long-standing request for service-agent vs. personal-agent separation.

**Overall sentiment**: Mixed. Users are enthusiastic about OpenClaw’s capabilities but frustrated by recurring stability and security gaps. The rapid pace of PR activity suggests the team is responsive, but the sheer volume of open issues (250) indicates some pain points persist.

## 8. Backlog Watch

Several important issues and PRs have been open for months without maintainer action, risking community frustration:

| Item | Type | Open Since | Status | Impact |
|------|------|------------|--------|--------|
| [#10659](https://github.com/openclaw/openclaw/issues/10659) – Masked secrets | Issue (enhancement) | 2026-02-06 | Needs product decision & security review | Security; high reaction count |
| [#63829](https://github.com/openclaw/openclaw/issues/63829) – Per-agent memory vault | Issue (enhancement) | 2026-04-09 | Needs maintainer review | Multi-agent isolation; 10 👍 |
| [#91588](https://github.com/openclaw/openclaw/issues/91588) – Gateway memory leak | Issue (bug) | 2026-06-09 | Needs live repro, product decision | P0 stability |
| [#7722](https://github.com/openclaw/openclaw/issues/7722) – Filesystem sandboxing | Issue (enhancement) | 2026-02-03 | Needs product decision & security review | Security; 4 👍 |
| [#11665](https://github.com/openclaw/openclaw/issues/11665) – Webhook multi-turn reuse | Issue (bug) | 2026-02-08 | Needs product decision; linked PR open | Broken documented behavior |
| [#9409](https://github.com/openclaw/openclaw/issues/9409) – Better context overflow error | Issue (enhancement) | 2026-02-05 | Needs product decision | UX; 3 👍 |
| [#8355](https://github.com/openclaw/openclaw/issues/8355) – Streaming TTS pipeline | Issue (enhancement) | 2026-02-03 | Needs product decision | Voice UX |
| [#101248](https://github.com/openclaw/openclaw/pull/101248) – Subagent announceTarget | PR | 2026-07-07 | Ready for maintainer look | Feature; unblocked for review |

**Notable**: #91588 (P0 memory leak) was raised over a month ago and still lacks a fix PR. #10659 and #63829 have been awaiting product decisions for months; with merged PRs like #88504 moving memory architecture, these features are in sight but not yet prioritized. The PR #101248 is ready for maintainer review and could close issue #27445 quickly.

Maintainers should consider scheduling a backlog grooming session to clear these long-pending decisions, especially security-critical items (#10659, #7722) and stability blockers (#91588).

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report — AI Agent Open-Source Ecosystem

## 1. Ecosystem Overview

The personal AI assistant open-source landscape is bifurcating into two tiers: flagship projects with large contributor bases (OpenClaw, IronClaw, ZeroClaw) processing hundreds of daily contributions, and focused alternatives optimizing for specific niches like lightweight deployment (NanoBot, PicoClaw) or enterprise integration (LobsterAI, CoPaw). Multi-agent routing, model flexibility, and memory architecture are emerging as universal requirements across almost every project. Security and reliability concerns dominate community discourse, with memory leaks, prompt cache continuity, and authorization gaps surfacing as persistent pain points. The ecosystem is maturing rapidly—several projects (CoPaw, ZeroClaw) are navigating major version transitions while others (Hermes, NanoBot) are stabilizing after intense bug-fix cycles.

## 2. Activity Comparison

| Project | Issues Updated (24h) | PRs Updated (24h) | Recent Release | Health Score |
|---------|---------------------|-------------------|----------------|--------------|
| **OpenClaw** | 437 | 500 | No (last May/Jun) | Robust but backlogged |
| **IronClaw** | 36 | 50 | Pending (PR #5598) | Strong momentum, bug-bash phase |
| **ZeroClaw** | 18 | 50 | v0.8.2 | High velocity, regression risk |
| **CoPaw** | 43 | 43 | v2.0.0 (today) | Post-release turbulence |
| **Hermes Agent** | 50 | 50 | No | Healthy, responsive |
| **NanoBot** | 8 | 42 | No | High velocity, security gap |
| **NanoClaw** | 3 | 26 | No | Moderate, correctness-focused |
| **PicoClaw** | 3 | 18 | v0.2.9 | Steady, stale PRs accumulating |
| **LobsterAI** | 3 | 16 | 2026.7.10 (today) | Steady, old stale PRs |
| **NullClaw** | 2 | 0 | No | Low activity, two unresolved bugs |
| **Moltis** | 0 | 1 | No | Low activity, single PR pending |
| **TinyClaw** | 0 | 0 | No | Inactive |
| **ZeptoClaw** | 0 | 0 | No | Inactive |

**Note on scale:** OpenClaw's numbers (437 issues, 500 PRs) reflect the largest community by an order of magnitude. Activity counts should be interpreted in context of each project's size and contributor base.

## 3. OpenClaw's Position

**Advantages:** OpenClaw commands the largest community by a wide margin—its 250 open issues and 329 pending PRs exceed the total activity of most peers. This scale provides faster bug discovery, more diverse feature requests, and a broader talent pool for contributions. Key architectural advantages include the recently merged **conversation identity modes** (personal/service/external scoping) and the ongoing **multi-slot memory role refactor** (PR #88504)—neither of which has an equivalent in smaller projects. The memory leak (#91588) and model selector bug (#101763) are critical, but the 171 merged PRs today demonstrate exceptional throughput.

**Technical approach differences:** OpenClaw favors architectural layering (explicit identity scoping, modular memory slots) over lightweight configuration. This provides more rigor for complex multi-agent deployments but increases complexity. In contrast, NanoBot and LobsterAI prefer simpler configuration overrides; CoPaw and Hermes Agent focus on plugin/extensibility patterns.

**Community size comparison:** OpenClaw's 437 issues/500 PRs per day dwarfs IronClaw (36/50) and ZeroClaw (18/50). Its closest peers by community engagement are IronClaw and CoPaw, both of which are roughly an order of magnitude smaller. This size differential means OpenClaw will likely set de facto standards for memory management, identity modeling, and agent routing—smaller projects may adopt compatible patterns.

**Risk:** The sheer backlog (329 open PRs) risks contributor burnout and delayed critical fixes. OpenClaw needs to prioritize stability (memory leak, model selector) over new features to maintain trust.

## 4. Shared Technical Focus Areas

The following requirements emerged independently across multiple projects, indicating industry-wide priorities:

| Focus Area | Projects Affected | Specific Needs |
|-----------|------------------|----------------|
| **Memory isolation & per-agent vaults** | OpenClaw, NanoClaw, CoPaw, LobsterAI | Agents need separate memory wikis/namespaces; shared memory causes context pollution |
| **Model flexibility (per-conversation/agent overrides)** | NanoBot, OpenClaw, ZeroClaw, Hermes Agent | Users want to switch models per chat (cloud vs. local), per subagent, per cron job |
| **Secrets management & authorization** | OpenClaw, NanoBot, NullClaw, LobsterAI, IronClaw | Masked API keys (use without seeing), per-user token isolation, `/restart` authorization |
| **Prompt cache continuity & session state** | OpenClaw, NanoBot, Hermes Agent, ZeroClaw | Cache breaks across boundaries, memory leaks, stale session content after upgrades |
| **Ollama/local model support & performance** | NanoBot, PicoClaw, CoPaw | Extra latency (60s/turn), model fallback chains, configuration friction |
| **MCP infrastructure (timeouts, zombie processes, reconnection)** | IronClaw, ZeroClaw, PicoClaw, Hermes Agent | Timeouts, process leaks, reconnect crashes after drops |
| **Container/long-running resilience** | NullClaw, PicoClaw, IronClaw | Telegram/WhatsApp idle disconnections, OOM crashes, gateway memory growth |
| **Documentation for migrations** | CoPaw, ZeroClaw | Upgrade guides needed for v1→v2 transitions; breaking changes poorly communicated |

**Strongest signal:** Memory isolation and per-agent vaults (OpenClaw #63829, NanoClaw #3001, CoPaw ReMe, LobsterAI USER.md issue) is the single most cross-cutting requirement—every multi-agent deployment hits this pain point.

## 5. Differentiation Analysis

| Dimension | OpenClaw | IronClaw | ZeroClaw | NanoBot | CoPaw | LobsterAI |
|-----------|----------|----------|----------|---------|-------|-----------|
| **Primary user** | Power users, multi-agent architects | Developers, tool-heavy workflows | Rust ecosystem, performance-sensitive | Local-model enthusiasts, tinkerers | Enterprise (DingTalk, Feishu) | Enterprise (WeCom, cowork) |
| **Language** | Multi-language (Python core) | Rust/TypeScript | Rust | Python | Python (AgentScope 2.0) | Python |
| **Core strength** | Architecture depth, community scale | Loop resilience, MCP, episodic memory | Performance, WebSocket/A2A | Rapid iteration, CLI polish | Enterprise channels, sandboxing | Cowork, scheduled tasks |
| **Weakness** | Backlog overhead, P0 bugs unpatched | Bug-bash surface, release blocking | Regressions, documentation issues | Security gaps, Ollama regression | Migration pain, Windows sandbox | Stale PRs, multi-agent isolation |
| **Target deployment** | Gateway/cloud, multi-instance | Production, loop-heavy | Performance-critical, custom integration | Desktop/CLI, local-first | Enterprise IM, Windows | Enterprise IM, China market |
| **Innovation** | Conversation identity modes | Per-user MCP store, episodic memory | WebSocket consolidation RFC | Model override per subagent/ cron | ReMe memory, MCP access policy | Folder context attachments |

**Key insight:** No project is attempting to be "the best at everything." OpenClaw leads in depth and community; IronClaw leads in production resilience; ZeroClaw leads in performance and infrastructure flexibility; NanoBot leads in agility and user-facing polish; CoPaw and LobsterAI lead in enterprise integration (China-focused channels). This specialization is healthy—developers can choose based on deployment constraints.

## 6. Community Momentum & Maturity

**Tier 1 — Rapid iteration (high risk, high reward):**
- **OpenClaw** — 171 PRs merged today, large architectural features advancing, but 329 open PRs and unresolved P0 bugs create execution risk. Not yet stabilizing.
- **IronClaw** — Strong feature pipeline (episodic memory, per-user MCP), bug-bash phase suggests stabilization is 1–2 months out. Release PR (#5598) has been stalled 8 days—merging it would signal maturity.
- **ZeroClaw** — 50 PRs/day, RFC for protocol consolidation indicates architectural thinking. Still pre-v0.8.3; real stabilization expected with that release.

**Tier 2 — Steady iteration (moderate risk):**
- **CoPaw** — Post-v2.0 transition pains are acute (Windows sandbox, legacy session compatibility). The core team is responsive (23 PRs merged today) but the migration disruption is significant. Expected to stabilize in 2–4 weeks.
- **NanoBot** — Very high PR throughput for its size (42 PRs/day). Missing security fix (/restart authorization) is a red flag, but model override features show clear direction.
- **LobsterAI** — Steady releases (2026.7.10 today), but stale PRs since April signal maintainer bandwidth constraints. Core features are stable; UX polish is slower.

**Tier 3 — Stabilizing / low activity:**
- **Hermes Agent** — 50 updates but 7 issues and only 2 PRs merged. The community is engaged (many comments), but development velocity is lower than Tier 1. Proxy support fix (#5454) was a long-awaited win.
- **NanoClaw** — Correctness-focused with 11 merged PRs today. No release tagged; the project is in "cleanup before ship" mode.
- **PicoClaw** — Steady bug fixes but stale PRs accumulating. Security fixes (Go bump, MQTT TLS) need prioritization.
- **NullClaw** — Two bugs open with no maintainer response (one critical security issue). Minimal activity suggests maintainer bandwidth is a risk.
- **Moltis, TinyClaw, ZeptoClaw** — Effectively dormant. Moltis has a single PR pending; the others show zero activity.

**Maturity assessment:** No project has reached "stable v1.0" maturity yet. OpenClaw and IronClaw are closest but still accumulating breaking architectural changes. CoPaw's v2.0 is the most significant release milestone, but the regression count tempers the achievement. ZeroClaw's v0.8.3 release will be a key indicator of its production readiness.

## 7. Trend Signals

**1. Multi-agent orchestration is the next frontier.** Per-agent memory isolation (OpenClaw #63829, NanoClaw #3001, CoPaw ReMe), subagent model routing (NanoBot #4623, Hermes #58731), and agent collaboration buses (PicoClaw #2937) are being built simultaneously. Developers building multi-agent systems should watch OpenClaw's memory architecture and IronClaw's per-user MCP store as potential reference implementations.

**2. Security and authorization cannot be afterthoughts.** The `/restart` authorization gap (NanoBot #4776), shared bearer token vulnerability (NullClaw #974), and masked secrets requests (OpenClaw #10659) all surfaced in the same 24-hour window. The industry is realizing that "agent using API keys" means keys must be accessible to the runtime but invisible to the model—a non-trivial security architecture problem that no project has fully solved.

**3. Local model support is a competitive differentiator.** Ollama performance regressions (NanoBot #4867, extra 60s/turn), model fallback chains (PicoClaw #3200, ZeroClaw), and per-conversation model switching (multiple projects) all point to a user base that wants hybrid cloud/local setups. Projects that solve the "fast local inference" problem (likely through prompt caching and model selection tooling) will win this segment.

**4. Observability is moving from "nice to have" to "table stakes."** ZeroClaw's OTel session ID (issue #8933), IronClaw's RunFailureReason funnel (PR #5954), and NanoClaw's context preview tool (PR #3004) all indicate that production users need debugging tooling. The gap between "agent works on my laptop" and "agent works in production" is being closed with explicit instrumentation.

**5. Protocol consolidation is emerging as a theme.** ZeroClaw's RFC to merge `/ws/chat` and `/acp` (issue #8798), MCP standardization efforts across all projects (timeouts, zombie process handling, reconnection), and A2A bearer token issues (NullClaw #974) suggest the ecosystem is converging on fewer, more robust wire protocols. Developers should invest in MCP-compatible tooling rather than custom integrations.

**6. Stable, documented releases are more valuable than rapid feature velocity.** CoPaw's v2.0 migration pain (broken sessions, missing upgrade guide) directly contrasts with LobsterAI's smooth release cadence. The user feedback is clear: breaking changes without migration documentation erode trust faster than missing features.

**Value for AI agent developers:** The next 3–6 months will see consolidation around multi-agent memory isolation, standardized security patterns for secrets, and production-grade observability. The projects that ship these features in stable, well-documented releases (likely OpenClaw and IronClaw leading, with ZeroClaw and CoPaw competing on enterprise readiness) will define the architectural patterns for the next generation of personal AI assistants.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-07-11

## 1. Today’s Overview
The project saw **very high activity** over the past 24 hours, with **42 pull requests updated** (24 open, 18 merged/closed) and **8 issues updated** (5 open, 3 closed). No new release was cut, but several high-priority bug fixes and feature PRs were merged or advanced. The community focused on improving **model flexibility** (per‑conversation overrides, subagent model passing, cron presets), **stability** (Ollama caching, MCP reconnection crashes, security of the `/restart` command), and **UI/CLI polish** (WebUI diff highlighting, Shift+Enter handling). A notable security vulnerability (unauthorized `/restart`) remains open without a fix PR.

## 2. Releases
No new releases today.

## 3. Project Progress (Merged/Closed PRs & Issues)
**Merged/closed pull requests (18 total)** that advanced the codebase:
- **[#4873](https://github.com/HKUDS/nanobot/pull/4873)** — `fix(dream): skip no-op periodic commit attempts` (resolves [#4872](https://github.com/HKUDS/nanobot/issues/4872) – empty Dream commits)
- **[#4623](https://github.com/HKUDS/nanobot/pull/4623)** — `feat(subagent): allow spawn model override` (resolves [#4231](https://github.com/HKUDS/nanobot/issues/4231))
- **[#4622](https://github.com/HKUDS/nanobot/pull/4622)** — `feat(cron): support job model presets` (resolves [#4378](https://github.com/HKUDS/nanobot/issues/4378))
- **[#4635](https://github.com/HKUDS/nanobot/pull/4635)** — `fix(tools): enforce exact edit_file line hints` (resolves [#4634](https://github.com/HKUDS/nanobot/issues/4634) – wrong-occurrence failures)
- **[#4876](https://github.com/HKUDS/nanobot/pull/4876)** — `feat(webui): guide queued prompt with second Enter`
- **[#4877](https://github.com/HKUDS/nanobot/pull/4877)** — `feat(webui): highlight file previews and diffs`
- **[#4832](https://github.com/HKUDS/nanobot/pull/4832)** — `fix(cli): handle CSI-u Shift+Enter instead of dumping raw escapes`
- **[#4835](https://github.com/HKUDS/nanobot/issues/4835)** — closed: WebUI landing message misrouting bug

These merge changes add **model override capabilities** for spawn and cron jobs, fix the dominant failure mode in `edit_file` (line‑hint enforcement), eliminate empty Dream commits, and improve WebUI interaction and CLI robustness.

## 4. Community Hot Topics
| Issue/PR | Comments | Topic | Underlying Need |
|----------|----------|-------|----------------|
| [#4253](https://github.com/HKUDS/nanobot/issues/4253) | **6** | Override model per conversation | Users want to switch between cloud/local models per chat for privacy/speed balance. |
| [#4867](https://github.com/HKUDS/nanobot/issues/4867) | **3** | Preserve prompt prefix for Ollama caching | Performance pain – extra 60s/turn with Ollama makes it “totally unusable”. |
| [#4634](https://github.com/HKUDS/nanobot/issues/4634) | **2** | Edit_file wrong‑occurrence failures | Dominant failure mode in exact edits; fixed by [#4635](https://github.com/HKUDS/nanobot/pull/4635). |
| [#4231](https://github.com/HKUDS/nanobot/issues/4231) | **2** | Subagent model override | Need to run subagents on different models (e.g., cheap vs. capable); now closed by [#4623](https://github.com/HKUDS/nanobot/pull/4623). |
| [#4776](https://github.com/HKUDS/nanobot/issues/4776) | **1** | `/restart` lacks authorization | Any paired user can DoS the process – critical security concern. |

The community is clearly demanding **more flexible model routing** (per‑conversation, per‑subagent, per‑cron) and **performance improvements for local/inference‑critical paths** like Ollama prompt caching.

## 5. Bugs & Stability
| Severity | Issue | Description | Fix Status |
|----------|-------|-------------|------------|
| **Critical** | [#4776](https://github.com/HKUDS/nanobot/issues/4776) | `/restart` command has zero authorization – any user can kill the whole bot | **Open**, no fix PR yet |
| **High** | [#4867](https://github.com/HKUDS/nanobot/issues/4867) | Ollama: extra 60s/turn due to lack of prompt‑prefix preservation | **Open**, no fix PR yet |
| **High** | [#4835](https://github.com/HKUDS/nanobot/issues/4835) | WebUI landing message sent to wrong chat | **Closed** (fix included in commit) |
| **Medium** | [#4842](https://github.com/HKUDS/nanobot/pull/4842) | `asyncio.CancelledError` during MCP shutdown crash | **Open fix PR** (priority p1) |
| **Medium** | [#4843](https://github.com/HKUDS/nanobot/pull/4843) | MCP reconnect: deferred stale stack cleanup prevents crash | **Open fix PR** (priority p1) |
| **Low** | [#4872](https://github.com/HKUDS/nanobot/issues/4872) | Dream creates empty commits on every run | **Closed** – fixed by [#4873](https://github.com/HKUDS/nanobot/pull/4873) |

Two high‑severity bugs remain unaddressed: the security hole in `/restart` and the Ollama performance regression. The MCP stability fixes are progressing with open PRs.

## 6. Feature Requests & Roadmap Signals
**Recently merged features (likely in next release):**
- ✨ Model override for `spawn` tool (subagents) – [#4623](https://github.com/HKUDS/nanobot/pull/4623)
- ✨ Cron job model presets – [#4622](https://github.com/HKUDS/nanobot/pull/4622)
- ✨ WebUI: guide queued prompts with second Enter – [#4876](https://github.com/HKUDS/nanobot/pull/4876)
- ✨ WebUI: file preview / diff syntax highlighting – [#4877](https://github.com/HKUDS/nanobot/pull/4877)

**Open feature PRs that may land next:**
- [#4626](https://github.com/HKUDS/nanobot/pull/4626) – opt‑in eager memory consolidation (improves long‑term recall)
- [#4624](https://github.com/HKUDS/nanobot/pull/4624) – aggregated subagent result mode (reduces message noise)
- [#4878](https://github.com/HKUDS/nanobot/pull/4878) – auto‑discovery of agent hooks via `pkgutil` (easier extensibility)
- [#4855](https://github.com/HKUDS/nanobot/pull/4855) – guided channel setup flows (UX improvement)
- [#4879](https://github.com/HKUDS/nanobot/pull/4879) – gate sustained‑goal behind opt‑in flag (prevents blocking user interaction)
- [#4588](https://github.com/HKUDS/nanobot/pull/4588) – context token optimization via pruning/compression of tool outputs (performance)

**Unresolved feature requests:**
- [#4253](https://github.com/HKUDS/nanobot/issues/4253) – per‑conversation model override (still open but closely related to merged override features)

## 7. User Feedback Summary
- **Positive**: Users appreciate the rapid closing of issues (e.g., edit_file disambiguation, Dream empty commits). The WebUI improvements (second Enter guidance, diff highlighting) address long‑standing pain points.
- **Pain points**:
  - *Ollama performance*: — *“extra 60 seconds to every single turn, even the dead‑simple turns”* – makes the system “totally unusable” with local models.
  - *Model switching*: Users need to alternate between cloud (fast) and local (private, cheap) models per conversation, but only a global setting exists.
  - *Security*: The `/restart` command is a DoS vector – no authorization check.
  - *Subagent model control*: Previously no way to run subagents on a different model; now addressed by merged PR.
- **Overall satisfaction** remains high given the active development pace and number of closed bugs, but the Ollama regression is a blocker for local‑model users.

## 8. Backlog Watch
| Item | Created | Last Update | Priority | Notes |
|------|---------|-------------|----------|-------|
| [#4776](https://github.com/HKUDS/nanobot/issues/4776) – `/restart` security | 2026-07-06 | 2026-07-10 | **Critical** | No fix PR; only 1 comment. Needs immediate maintainer attention. |
| [#4867](https://github.com/HKUDS/nanobot/issues/4867) – Ollama caching | 2026-07-10 | 2026-07-10 | **High** | Performance blocker for local models; no fix PR yet. |
| [#4253](https://github.com/HKUDS/nanobot/issues/4253) – per‑conversation model | 2026-06-08 | 2026-07-10 | Medium | Active discussion (6 comments); partially addressed by merge of #4623? Still open for global vs. per‑conversation. |
| [#4231](https://github.com/HKUDS/nanobot/issues/4231) – spawn model override | 2026-06-07 | 2026-07-10 | **Now resolved** | Fixed by [#4623](https://github.com/HKUDS/nanobot/pull/4623) (closed). Can be removed from backlog. |
| [#4205](https://github.com/HKUDS/nanobot/pull/4205) – mailbox subagent results | 2026-06-05 | 2026-07-10 | Medium | PR open with conflicts; needs rebase/attention. |
| [#4588](https://github.com/HKUDS/nanobot/pull/4588) – token compression | 2026-06-29 | 2026-07-10 | Medium | Large PR with conflicts; could significantly reduce context costs. |

**Top maintainer action items:**
1. **Review and assign** the `/restart` security vulnerability [#4776](https://github.com/HKUDS/nanobot/issues/4776).
2. **Investigate** the Ollama caching regression [#4867](https://github.com/HKUDS/nanobot/issues/4867) – possibly a regression from earlier change #2463.
3. **Rebase** stalled PRs [#4205](https://github.com/HKUDS/nanobot/pull/4205) and [#4588](https://github.com/HKUDS/nanobot/pull/4588) to bring them closer to merge.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-07-11

## Today’s Overview
The project saw high activity on 2026-07-11: 50 issues and 50 PRs were updated in the last 24 hours. Of those, 7 issues were closed and 2 PRs were merged/closed, indicating a steady flow of bug fixes and maintenance work. No new releases were published. Community engagement remains strong, with several long‑standing bugs (proxy support, session‑state corruption, custom provider misrouting) finally being resolved, while new edge‑case reports continue to emerge, particularly around multi‑session routing, auxiliary task failures, and security boundaries.

## Releases
No new releases were published today.

## Project Progress — Merged/Closed PRs & Issues
Two PRs were closed today:
- **[PR #49401](https://github.com/NousResearch/hermes-agent/pull/49401)** — **feat(plugins): support interactive clarify slash commands**  
  Adds an opt‑in interactive mode for plugin‑registered slash commands, enabling handlers to request user input during gateway sessions.

Seven issues were closed:
- **[#27038](https://github.com/NousResearch/hermes-agent/issues/27038)** — Codex Responses API rejects replayed assistant message items with long `id` fields (P1)
- **[#47714](https://github.com/NousResearch/hermes-agent/issues/47714)** — Desktop/TUI sessions fall back to OpenRouter when using named custom provider (P2)
- **[#5454](https://github.com/NousResearch/hermes-agent/issues/5454)** — Proxy support for LLM API calls (P1, resolved with SDK updates)
- **[#32617](https://github.com/NousResearch/hermes-agent/issues/32617)** — xAI OAuth fallback after provider switch due to stale `encrypted_content` replay (P1)
- **[#54527](https://github.com/NousResearch/hermes-agent/issues/54527)** — Gateway message routing misdirects user input between TUI sessions (P1)
- **[#33130](https://github.com/NousResearch/hermes-agent/issues/33130)** — Feature request: Use OpenAI Codex Compaction API (closed as implemented? – P3)
- **[#55677](https://github.com/NousResearch/hermes-agent/issues/55677)** — Context compaction fails with Jinja template error, corrupts session (P2)

These closures address critical session‑state bugs, proxy/routing issues, and a popular feature request.

## Community Hot Topics
The most commented issues in the last 24 hours highlight persistent pain points with provider routing and session state:

- **[#27038](https://github.com/NousResearch/hermes-agent/issues/27038)** (10 comments, closed) – Codex session replay failure when `id` fields exceed a length limit. The issue was resolved, but the discussion reveals a broader concern about how Hermes replays assistant message items from history.
- **[#47714](https://github.com/NousResearch/hermes-agent/issues/47714)** (8 comments, closed) – Desktop/TUI sessions falling back to OpenRouter for named custom providers. The fix is now merged, but the topic of custom provider resolution remains a frequent user frustration.
- **[#5454](https://github.com/NousResearch/hermes-agent/issues/5454)** (8 comments, closed) – Lack of proxy support for LLM API calls (only Telegram adapter respected env vars). The resolution is welcome, and the community expressed relief that corporate proxy users can now route traffic.
- **[#52496](https://github.com/NousResearch/hermes-agent/issues/52496)** (7 comments, open) – Dashboard API `/model/set` rewrites `custom:*` providers to `openrouter`. Users are asking for a robust fix that doesn’t require manual config edits.
- **[#17199](https://github.com/NousResearch/hermes-agent/issues/17199)** (6 comments, open) – DeepSeek provider’s aggressive model name normalization and `base_url` override break custom endpoints like Volcengine ARK. This is a long‑standing bug (since April) with no fix PR yet.

## Bugs & Stability
New bugs reported today, ranked by severity:

**P1 (critical)**
- None reported with P1 today.

**P2 (high)**
- **[#62443](https://github.com/NousResearch/hermes-agent/issues/62443)** — `delegate_task` subagent always resolves to Groq/llama‑3.3‑70b‑versatile (401) regardless of config. **No fix PR yet.**
- **[#62397](https://github.com/NousResearch/hermes-agent/issues/62397)** — Background review fork can’t patch skills: prompt never calls `skill_view`, guard refuses the write. **Fix PR #62428** submitted today.
- **[#62394](https://github.com/NousResearch/hermes-agent/issues/62394)** — Teams typing indicator animates forever after response — suspected leaked `_keep_typing` task (duplicate).
- **[#62383](https://github.com/NousResearch/hermes-agent/issues/62383)** — Weixin iLink cron delivery fails with `ret=-2` when `context_token` is stale (duplicate).
- **[#61852](https://github.com/NousResearch/hermes-agent/issues/61852)** — Every auxiliary task silently fails on `provider: vertex` (P2). **Fix PRs #62440 and #62444** submitted today.
- **[#62170](https://github.com/NousResearch/hermes-agent/issues/62170)** — TUI shows stale session content after switching sessions (needs‑repro).

**P3 (moderate/low)**
- **[#62406](https://github.com/NousResearch/hermes-agent/issues/62406)** (implied by PR #62430) – Honcho plugin initializes even in `--safe-mode`. **Fix PR #62430** submitted.
- **[#60385](https://github.com/NousResearch/hermes-agent/issues/60385)** – MCP server processes leak on reconnect (open, no fix).
- **[#25016](https://github.com/NousResearch/hermes-agent/issues/25016)** – LSP idle subprocesses never reaped (open since May, no fix).
- **[#40077](https://github.com/NousResearch/hermes-agent/issues/40077)** – Desktop app crashes on NVIDIA 580+ drivers (Ubuntu 24.04) (open, no fix).

Several fix PRs have already been opened for today’s bugs, indicating a responsive maintainer team.

## Feature Requests & Roadmap Signals
- **[#513](https://github.com/NousResearch/hermes-agent/issues/513)** — Two‑phase context management (prune tool outputs before full compaction). This Kilocode‑inspired proposal received 4 comments and is likely to be considered for a future release given its performance benefits.
- **[#58731](https://github.com/NousResearch/hermes-agent/issues/58731)** — Per‑subagent model override in `delegate_task`. Users working with master‑worker patterns are requesting fine‑grained control.
- **[#62339](https://github.com/NousResearch/hermes-agent/issues/62339)** — Per‑profile tab lease/registry for concurrent browser agents (follow‑up to #49691). This addresses a collision risk when multiple agents drive the same browser profile.
- **[#61249](https://github.com/NousResearch/hermes-agent/issues/61249)** — Desktop approval bar truncates multi‑line diff descriptions; users want a scrollable or expandable review area.
- **[#62375](https://github.com/NousResearch/hermes-agent/issues/62375)** — Make remote attachment uploads bounded and resumable (single data‑URL IPC currently limits file size).
- **[#46947](https://github.com/NousResearch/hermes-agent/issues/46947)** — No way to set email subject for outbound messages; hardcoded to “Re: Hermes Agent”. A simple config‑driven subject line would solve a pain point for cron‑delivered reports.

These features hint at the community’s desire for more robust multi‑agent coordination, better context management, and improved UX in the desktop app.

## User Feedback Summary
**Pain points frequently voiced:**
- Custom provider configuration is brittle – users report mismatches between Desktop/TUI, CLI, and gateway sessions (e.g., #47714, #52496, #17199, #56158).
- Session‑state corruption continues to be a top concern: context compaction failures (#55677), stale session content (#62170), and misrouted messages (#54527) undermine trust in long‑running conversations.
- Security hygiene concerns: `hermes debug share` uploads unsanitized logs to a public pastebin without warning (#46006).
- Memory and MCP prompt‑injection scanners miss multi‑word ignore‑instruction variants (#27284).
- LSP and MCP process leaks accumulate over long gateway runs (#25016, #60385).

**Satisfaction signals:**
- The community actively participates in issue triage and reproduction – many “needs‑repro” labels are being confirmed.
- Fix PRs are being submitted rapidly; today alone saw 6 new fix PRs addressing critical bugs.
- Proxy support (#5454) and interactive plugin slash commands (#49401) are welcome additions that address long‑standing requests.

## Backlog Watch — Issues Needing Maintainer Attention
These high‑impact or long‑unanswered issues have no recent maintainer activity and could benefit from prioritization:

- **[#25016](https://github.com/NousResearch/hermes-agent/issues/25016)** — LSP idle subprocesses never reaped (P2, created 2026‑05‑13). No PR or maintainer comment in over a month. Memory leak in long‑lived gateways.
- **[#46006](https://github.com/NousResearch/hermes-agent/issues/46006)** — Security issue in bug report procedure (`hermes debug share` uploads logs publicly) (P2, created 2026‑06‑14). Two comments, no maintainer response.
- **[#40077](https://github.com/NousResearch/hermes-agent/issues/40077)** — Desktop crashes on NVIDIA 580+ drivers (P3, created 2026‑06‑05). Needs reproduction or driver workaround.
- **[#17199](https://github.com/NousResearch/hermes-agent/issues/17199)** — DeepSeek provider model normalization and `base_url` override break custom endpoints (P2, created 2026‑04‑29). Still open with 6 comments, no fix PR. Affects users of Volcengine ARK and similar services.
- **[#60385](https://github.com/NousResearch/hermes-agent/issues/60385)** — MCP server processes leak on reconnect (P2, created 2026‑07‑07). No maintainer response yet.
- **[#27284](https://github.com/NousResearch/hermes-agent/issues/27284)** — Memory and MCP prompt‑injection scanners miss variants (P3, created 2026‑05‑17). Security‑adjacent issue with no movement.

These issues, if unaddressed, risk eroding trust in production deployments.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-07-11

## 1. Today's Overview
Activity remained high over the past 24 hours, with **18 pull requests** updated and **3 issues** touched. One PR (#3179) was merged, fixing WhatsApp WebSocket reconnection, and one stale bug (#3178) was closed. Two new issues were filed—both relatively minor but indicative of quality-of-life concerns. The project shows steady progress on infrastructure hardening (Go bump, security fixes, OAuth corrections) alongside new features (WhatsApp typing presence, fallback model chains, a new Simplex channel). Several PRs are now tagged `[stale]`, suggesting the maintainers may need to prioritise review and merging to keep momentum.

## 2. Releases
No new releases were published today. The latest tagged version is **v0.2.9** (referenced in issue #3178). No migration notes or breaking changes to report.

## 3. Project Progress
Only one pull request was closed/merged in the last 24 hours:

- **#3179** (merged, `fix(whatsapp): reconnect after websocket drops`) — Resolves stale WhatsApp bridge connections by implementing proper read deadlines, ping/pong handlers, and asynchronous message dispatch. This directly addresses the root cause behind issue #3178.

Additionally, the stale bug **#3178** (`[BUG] WhatsApp Websocket Timeout`) was closed, likely as resolved by the above fix.

Several open PRs continue to advance significant features (see sections below), but none were merged today.

## 4. Community Hot Topics
With only a few comments across all items, community discussion was light. The most active thread was:

- **#3178** — *WhatsApp Websocket Timeout* (2 comments, closed) – Users reported connectivity failures with WhatsApp channels; the ensuing fix (#3179) has been merged.

Among open PRs, **#2937** (`Feat/agent collaboration`) remains the largest and longest-running feature, last updated 2026-07-10 after being opened on 2026-05-24. It introduces an inter‑agent communication bus. Though comments are not shown, its size and duration imply significant community interest and maintainer effort.

## 5. Bugs & Stability
Three distinct bug categories surfaced today, ranked by severity:

1. **Security vulnerabilities in standard library** – PR #3248 (`fix: bump Go to 1.25.12`) addresses two `govulncheck` findings (`GO-2026-5856` in `crypto/tls`, `GO-2026-4970` in `os`). Highly critical. Fix PR exists and is ready for review.

2. **OAuth refresh mismatch and race condition** – Issue #3239 and its companion fix PR #3241 highlight that `auth.RefreshAccessToken` uses a generic form‑encoded payload for all providers, causing failures with OpenAI (expects JSON) and race conditions when multiple providers are checked concurrently. The fix switches to provider‑correct semantics and adds a 30‑second HTTP timeout. Moderate severity.

3. **MQTT TLS certificate verification disabled by default** – PR #3246 (`fix: security and robustness hardening`) corrects a hardcoded `InsecureSkipVerify: true` in the MQTT channel, and also adds bounded search reads and OAuth timeouts. Moderate severity.

4. **WhatsApp typing feedback missing** – Issue #3240 requests native typing presence; a fix PR (#3242) was opened simultaneously. Low severity (UX polish), but addresses a common user pain point.

No crashes or regressions were reported today.

## 6. Feature Requests & Roadmap Signals
Two new feature requests were filed today, both with associated implementation PRs:

- **WhatsApp native typing presence** (#3240, PR #3242) – Users expect immediate visual feedback when the bot is preparing a response. The PR adds `channels.TypingCapable` support to `WhatsAppNativeChannel`, sending `composing`/`paused` events.
- **Configurable default model fallback chain** (#3200, PR by lc6464) – Enables setting a primary model and a reorderable fallback chain via the web UI and backend API. This is likely to land in the next minor release (v0.3.x) given it already has a PR.

Ongoing larger roadmap signals:

- **Agent collaboration bus** (#2937) – Though not new, this feature is still open and being actively updated. It provides per‑agent mailboxes, collaboration threads, and permission‑aware messaging.
- **Simplex channel support** (#3193) – Adds a new peer‑to‑peer messaging channel.
- **Installation script consolidation** (#1951, opened March 2026) – Moving install scripts from the docs repository into the main repo. This chore is long‑standing but low urgency.

## 7. User Feedback Summary
User feedback from the last 24 hours revolves around three pain points:

- **WhatsApp unreliability** – The websocket timeout bug (#3178) caused users to lose connectivity with no automatic recovery. The merged fix (#3179) directly addresses this.
- **OAuth refresh failures** – Users relying on OpenAI as a provider (or using the dashboard concurrently with a provider) experienced token refresh errors due to incorrect payload formats and race conditions (#3239). A fix is in review (#3241).
- **No typing indicator on WhatsApp** – Users reported a “dead” experience when waiting for the bot to reply; the new presence feature (#3240, PR #3242) should resolve this.

Satisfaction signals: the new Czech translations (PR #3247) and the 9router gateway / Raspberry Pi ARM support (PR #3205) show that the project is accommodating real‑world use cases and diverse hardware setups.

## 8. Backlog Watch
Several items have been open for weeks or months without being merged or closed:

- **#1951** (opened 2026-03-24) – *Move installation scripts from docs repo* – Updated today but no maintainer comment. Low complexity; likely needs a decision on merge or close.
- **#2937** (opened 2026-05-24) – *Agent collaboration feature* – Large PR, actively updated but still marked `[stale]`. Urgent review may be needed to avoid drifting out of sync with other changes.
- **#3200** (opened 2026-07-01) – *Configurable fallback chain* – Marked `[stale]` after 10 days. No maintainer feedback yet.
- **#3193** (opened 2026-06-27) – *Simplex channel* – Also marked `[stale]`. Needs review.
- **#3165** (opened 2026-06-24) – *Recover Seed XML tool calls* – Marked `[stale]`. Should be evaluated for merge or further testing.

**Action recommended**: The maintainers should prioritise reviewing the two stale security‑related PRs (#3248, #3246) and the OAuth fix (#3241) to close the identified vulnerabilities and prevent further user friction. Long‑standing feature PRs (#2937, #1951) also benefit from a clear path forward to avoid accumulation.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-07-11

## Today's Overview
NanoClaw saw moderate activity over the past 24 hours, with **26 PRs updated** (11 merged/closed) and **3 issues touched** (1 open). A concentrated push from the core team landed several infrastructure fixes and feature branches, including a timestamp convention overhaul, adapter-declared channel defaults, and a context preview tool. Community contributions focused on bug fixes for WhatsApp LID groups and bounding agent-browser waits. No new release was cut; the project remains in active development with a clear emphasis on correctness, observability, and provider-agnostic architecture.

## Releases
*No new releases in the last 24 hours.*

## Project Progress
**11 PRs merged or closed today** (all by core team members), representing significant cleanup and stability work:

- **Timestamps overhaul** – Three PRs (#3005, #3006, #3007) enforce a consistent convention: **storage in ISO‑Z UTC, display in local time**, fixing task rows and exchange archive timestamps across trunk and providers branches.
- **Channel defaults refactor** – PRs #3010 (adapter‑declared defaults) and #3011 (implemented for all adapters + WhatsApp shared‑number fix) move per‑channel judgment from core heuristics to each adapter’s own configuration, making wiring decisions like engage mode, threading, and sender policy correct by default.
- **Channel formatting skill cleanup** – PR #3009 moves WhatsApp and Slack formatting skills from trunk to the channels branch, preventing unwanted skill activation for unwired channels.
- **Context preview tool** – PR #3004 adds a `scripts/context-preview.ts` that simulates scenarios and prints exactly what the agent sees, aiding debugging and development.
- **Documentation** – PR #3003 (bounded waits for agent-browser) reduces risk of infinite loops.
- **Bug fix** – PR #3002 (warn on shared skill symlink blockage) addresses a long‑standing issue from issue #3001 (see Bugs section).
- **Feature work** – PRs #3012 and #3013 introduce a provider‑agnostic persistent memory tree, shared across agent providers and loaded on session start; note these are still open but under active review.

## Community Hot Topics
The most discussion‑generated items (based on comment count and cross‑referencing) are:

- **Issue #3001** – *Groups created before shared‑skills refactor keep stale skill copies that silently block symlinks.* Zero comments but directly referenced by PR #3002, indicating active attention. The underlying need is **predictable skill updates for legacy groups** – users want confidence that shared skill changes propagate reliably.
- **PR #3012 / #3013** – Persistent memory system (no comments yet but core‑team labelled, large scope). Seen as a major architectural addition, likely to attract feedback once merged.
- **Issue #2415 (closed)** – Container config not found on first spawn due to missed `container_configs` row. Linked to PR #3002 conceptually (symlink/configuration gaps). Users need CLI commands to be fully correct on creation.

## Bugs & Stability
Three bugs updated in the last 24 hours, ranked by current impact:

| Severity | Issue | Status | Description | Fix PR |
|----------|-------|--------|-------------|--------|
| **High** | [#3001](https://github.com/nanocoai/nanoclaw/issues/3001) | Open | Groups created before shared‑skills refactor (Apr 21) keep stale skill copies; updates to `container/skills/` never applied. Symlinks silently blocked by pre‑existing files. | [#3002](https://github.com/nanocoai/nanoclaw/pull/3002) (open – adds warning, not full migration) |
| **Medium** | [#2415](https://github.com/nanocoai/nanoclaw/issues/2415) | Closed | `ncl groups create` skips `container_configs` row; first spawn fails with “Container config not found”. | Not tracked in open PRs |
| **Low** | [#2389](https://github.com/nanocoai/nanoclaw/issues/2389) | Closed | Wirings created via `bin/ncl` don't auto‑create `agent_destinations`; agent silently drops responses. | Likely addressed by the channel defaults refactor trail |

**Additional stability-related PRs** (not from issues) include: #3010/3011 (prevents misconfigured channels), #3007 (timestamp correctness affects log parsing), and #2966 (log when errored batch is acked as completed, preventing silent data loss).

## Feature Requests & Roadmap Signals
Several features in flight suggest the next release’s likely content:

- **Provider‑agnostic persistent memory** – PRs #3012 and #3013 introduce a memory tree shared across Claude Code, OpenAI, and other providers. A major architectural step, likely to appear in v0.9+.
- **Unified iMessage channel** – PR #2999 merges local and hosted backends into a single `imessage` channel with pluggable backends, simplifying installation and wiring.
- **Task one‑door delivery** – PR #2988 (part of a scheduled‑tasks train) enforces that every `send_message` and `send_file` requires an explicit `to` destination. This removes ambiguous fallback behavior and paves the way for reliable scheduled tasks.
- **Telegram native rich rendering** – PR #2877 (from community, open since June 28) uses Bot API 10.1 `sendRichMessage` for richer output. Awaiting review but signals strong community interest.

## User Feedback Summary
User‑reported pain points from recently closed issues and PR comments:

- **CLI correctness gaps** – Creating groups or wirings via `bin/ncl` can leave the database in an incomplete state (#2415, #2389). Users expect the CLI to be a reliable one‑stop setup tool.
- **Stale skills on legacy groups** – Groups created before the shared‑skills refactor require manual cleanup; no migration exists yet (#3001). This frustrates long‑time users who upgrade.
- **Timestamp confusion** – Raw UTC timestamps in exchange archives and chat logs made evening sessions appear off by hours (#3005–3007). The fix (ISO storage, local display) directly addresses user confusion.
- **Unbounded wait loops** – Documented in PR #3003; users (especially those coupling agent-browser with shell scripts) risk locking up agents. The documentation fix is well‑received.

Overall sentiment appears **frustrated but confident in the team’s response time** – bugs are acknowledged quickly and fixes are often in review within days.

## Backlog Watch
Items that have not seen maintainer attention and risk lingering:

- **PR #2877** (Telegram rich rendering) – Open since June 28, no core‑team interaction. Community contributor awaits review. If accepted, it would significantly improve the Telegram channel experience.
- **Issue #3001** – Although referenced by PR #3002, that PR only adds a **warning**, not an automatic migration. Without a migration path, users with legacy groups will continue to be silently misconfigured. Needs a follow‑up PR or a clear “expected fix version” label.
- **PR #2966** (log when errored batch is acked) – Open since July 6, core‑team labelled but no merge. Could prevent silent data loss but hasn’t been prioritised yet.
- **No new release in sight** – Despite 11 merges today, no release has been cut. Users tracking `main` will get fixes, but those relying on tagged releases remain on potentially outdated versions. A patch release (e.g. v0.8.2) would be timely.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest – 2026-07-11

## Today’s Overview
NullClaw shows minimal activity over the last 24 hours, with **no new releases** and **no pull requests** updated. Two open issues were touched, both bugs: one concerning Telegram channel responsiveness after idle periods (#972, created June 30, updated July 10) and a newly filed security/design flaw in the A2A bearer token handling (#974, created July 10). No PRs were merged or closed, indicating a quiet development cycle. The project remains stable on the surface but carries unresolved issues that may affect reliability and security in multi-user or long-running deployments.

## Releases
None. No new versions or tags were published.

## Project Progress
No pull requests were merged or closed in the last 24 hours. No new features, fixes, or refactors advanced.

## Community Hot Topics
- **Issue #972** – [Telegram channel stops responding after some idle time](https://github.com/nullclaw/nullclaw/issues/972)  
  Created by i11010520, updated July 10. This is the most active item with 2 comments. The reporter notes that the Telegram integration “dies away” after a night of inactivity, while the NullClaw backend itself remains functional. The underlying need appears to be **reliable long-lived Telegram bot connectivity** – the bot should recover from idle disconnections (e.g., due to cloud provider keep-alive or Telegram API limits) without manual restart.

- **Issue #974** – [Shared bearer A2A route allows cross-caller task and context reuse](https://github.com/nullclaw/nullclaw/issues/974)  
  Filed by N0zoM1z0 on July 10, this issue describes a **security vulnerability** where any user holding a valid bearer token can list and reuse another user’s tasks and contexts. The community has not yet commented, but the severity suggests this will attract attention. The underlying need is **proper isolation of task and session authority beyond the initial bearer check**.

## Bugs & Stability
| Issue | Severity | Description | Fix PR Exists? |
|-------|----------|-------------|----------------|
| [#974](https://github.com/nullclaw/nullclaw/issues/974) | **Critical** | Shared bearer token allows cross-user task/session reuse – a direct security vulnerability. | No |
| [#972](https://github.com/nullclaw/nullclaw/issues/972) | **High** | Telegram channel stops responding after idle time, degrading user experience for Telegram bot users. | No |

No regression reports or crash logs were filed today. The Telegram issue (#972) has been open for 11 days without a fix; the bearer issue (#974) is freshly reported and will likely require architectural changes to the A2A route authorization.

## Feature Requests & Roadmap Signals
No explicit feature requests were raised in the last 24 hours. However, the two bug reports indirectly signal future priorities:  
- **Resilient long‑running agents** (from #972) – users expect 24/7 uptime even across idle periods.  
- **Fine‑grained authorization** (from #974) – the current flat bearer‑token model is insufficient for multi‑user/tenant deployments.  

These are likely to influence the next minor release, especially the A2A security fix.

## User Feedback Summary
- **Pain points:**  
  - Telegram integration requires human intervention after prolonged idle time (#972).  
  - Multi‑user scenarios are insecure – a bearer token grants complete access to any session (#974).  
- **Use cases:**  
  - Running NullClaw behind a Telegram bot that must operate unattended overnight.  
  - Shared infrastructure (e.g., team‑owned EC2 instances) where multiple users access the `/a2a` endpoint.  
- **Satisfaction/dissatisfaction:** Limited direct praise or complaints; the two open issues indicate users are actively testing edge cases and reporting problems, suggesting an engaged but sometimes frustrated community.

## Backlog Watch
- **Issue #972** – Created June 30, last updated July 10, **no maintainer response visible**. The bug affects a core integration and has been open for 11 days. Without acknowledgment or a timeline, users may lose confidence in the Telegram channel.  
- **Issue #974** – Very recent (July 10), but its security implications warrant prompt triage. A maintainer comment or assignment would be reassuring.  

No long‑unanswered pull requests exist.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-07-11

## Today’s Overview

IronClaw maintained a high level of activity with **36 issues updated** (28 open/active, 8 closed) and **50 pull requests updated** (35 open, 15 merged/closed) in the last 24 hours. Development momentum is strong, with multiple large PRs advancing core resilience, MCP infrastructure, and memory features. The project remains in a **bug-bash phase** — many of the open issues are tagged `bug_bash_P2/P3` and focus on Slack integration, routine reliability, and UI consistency. No new releases were published today; the last tagged release (`ironclaw 0.24.0 → 0.29.1`) is pending in PR #5598.

## Releases

*None today.*

## Project Progress

**15 pull requests were merged or closed** in the last 24 hours, reflecting significant feature advancement and critical fixes:

- [#5950](https://github.com/nearai/ironclaw/pull/5950) – **Expose production LocalDev capability‑port assembly to tests** (seam PR‑A), enabling integration harness to reuse the real port stack instead of hand‑rebuilding it.
- [#5960](https://github.com/nearai/ironclaw/pull/5960) – **Raise default loop iteration ceiling 32 → 256**, preventing mid‑task fail‑closure on tool‑heavy turns.
- [#5895](https://github.com/nearai/ironclaw/pull/5895) – **Fix compaction failures after tool results**: treat non‑cancellation compaction errors as recoverable prompt‑step skips instead of terminal run failures.
- [#5916](https://github.com/nearai/ironclaw/pull/5916) – **Per‑user MCP registration store** — superseded later by #5970.
- [#5954](https://github.com/nearai/ironclaw/pull/5954) – **RunFailureReason funnel foundation** (Phase 1 of 4), adding classifier structures without behavior change.
- [#5967](https://github.com/nearai/ironclaw/pull/5967) – **Fix boot crash‑loop** (#5966) by skipping invalid available‑extension manifests at catalog load.
- [#5844](https://github.com/nearai/ironclaw/pull/5844) – **Add “Computation” section to default system prompt** encouraging the agent to use tools for non‑trivial calculations.
- [#5817](https://github.com/nearai/ironclaw/pull/5817) – **Fix decimal numbers incorrectly treated as requested capability IDs**, which suppressed valid tool calls.

## Community Hot Topics

Most active discussions (by comment count) reveal two recurring pain points: **Slack integration misbehavior** and **inaccurate UI status representation**.

| Issue/PR | Comments | Highlights |
|----------|----------|------------|
| [#5948](https://github.com/nearai/ironclaw/issues/5948) (open) | 5 | Assistant reports GitHub extension as “activated” when it is only installed – misleading status check. |
| [#5747](https://github.com/nearai/ironclaw/issues/5747) (closed) | 3 | No way to unpair Slack on built‑in host‑beta mount; both `/pair` and UI refuse disconnect. |
| Multiple `bug_bash_P2` issues | 2 each | Routine fails with “No thread attached” (#5836), Slack disconnect incorrectly rejected (#5834), approval notification missing (#5885), stale error banner (#5879). |

The underlying need is **consistent and accurate system responses** — users expect the agent to reflect the real state of extensions, channels, and run history.

## Bugs & Stability

Today’s bug reports show a sharp focus on **Slack delivery and integration**, **routine reliability**, and **UI/UX inconsistencies**. Two P1 bugs were opened.

### P1 (Critical)

- [#5943](https://github.com/nearai/ironclaw/issues/5943) – **Slack DM posts to current channel** instead of user’s direct messages. The response goes to the shared QA channel rather than the requesting user’s DM.

### P2 (High)

- [#5836](https://github.com/nearai/ironclaw/issues/5836) – Scheduled routine fails on every 5‑minute execution with “No thread attached” — 0% success rate.
- [#5834](https://github.com/nearai/ironclaw/issues/5834) – Slack disconnect request incorrectly rejected by agent.
- [#5885](https://github.com/nearai/ironclaw/issues/5885) – Approval notification opens action page without the approval card; no way to approve/deny.
- [#5945](https://github.com/nearai/ironclaw/issues/5945) – Long multi‑tool run fails with generic “model provider unavailable” error.
- [#5944](https://github.com/nearai/ironclaw/issues/5944) – Slack DM silently fails but run reports success.
- [#5946](https://github.com/nearai/ironclaw/issues/5946) – Assistant mutates a Google Sheet before discovering the requested Slack trigger is unavailable.
- [#5955](https://github.com/nearai/ironclaw/issues/5955) – Multistep workflow with sub‑agents hits tool‑call limit or stops progressing.
- [#5958](https://github.com/nearai/ironclaw/issues/5958) – Reborn loop executor store I/O has no wall‑clock bound (compaction non‑specific).
- [#5968](https://github.com/nearai/ironclaw/issues/5968) – HTTP tool fails with non‑descriptive errors when connecting to third‑party APIs without dedicated MCP support.
- [#5969](https://github.com/nearai/ironclaw/issues/5969) – GLM‑5.2 not in opencode default model list; requires manual configuration.

### P3 (Medium)

- [#5948](https://github.com/nearai/ironclaw/issues/5948) – Assistant incorrectly reports GitHub extension activation.
- [#5891](https://github.com/nearai/ironclaw/issues/5891) – “Last completed” shows current run timestamp instead of last finished execution.
- [#5947](https://github.com/nearai/ironclaw/issues/5947) – Thread deletion does not update UI until page refresh.
- [#5889](https://github.com/nearai/ironclaw/issues/5889) – “Load older messages” button non‑functional.
- [#5953](https://github.com/nearai/ironclaw/issues/5953) – Channel disconnect on extension removal broken for non‑Slack ExternalChannel extensions.

**Fix PRs exist for several bugs:** #5967 resolved the boot crash‑loop (#5966), #5895 addresses compaction failures (#5838), and #5960 raises the iteration ceiling to alleviate mid‑task failures (#5945 may benefit). However, many P2 bugs lack linked fix PRs, indicating the bug‑bash is ongoing.

## Feature Requests & Roadmap Signals

Several large pull requests and issues signal the direction of the **next minor or major release**:

- [#5970](https://github.com/nearai/ironclaw/pull/5970) – **Per‑user MCP registration store** (XL, low risk, already superseded #5916).
- [#5975](https://github.com/nearai/ironclaw/pull/5975) – **Detect prompt‑cache breaks and stop doomed compaction loops** – part of a 4‑stack series to reduce KV‑cache collapse.
- [#5959](https://github.com/nearai/ironclaw/pull/5959) – **Reborn loop resilience** – deep availability retries, iteration backstop, model‑visible tool‑failure reasons.
- [#5973](https://github.com/nearai/ironclaw/pull/5973) – **Per‑server MCP timeouts + background‑job bridge** – lifts hardcoded 30s cap.
- [#5974](https://github.com/nearai/ironclaw/pull/5974) – **Episodic memory** – cross‑session summaries and recall.
- [#5972](https://github.com/nearai/ironclaw/pull/5972) – **Per‑turn tool retrieval + `find_tools` discovery** – reduces prompt tokens by advertising only a core set + top‑K tools.
- [#5938](https://github.com/nearai/ironclaw/issues/5938) – **Unify Reborn dropdown styling** with shared SelectMenu component.
- [#5935](https://github.com/nearai/ironclaw/issues/5935) – **Retire v1 runtime** – remove legacy `src/` code after Reborn is the default.

**Prediction:** The next release (likely `ironclaw 0.30+`) will bundle the MCP registration store, loop resilience improvements, episodic memory, and per‑turn tool retrieval. The v1 retirement issue suggests Reborn will become the only runtime soon.

## User Feedback Summary

Real‑world usage patterns captured in today’s data reveal strong dissatisfaction with **Slack integration** (DMs going to wrong channels, no disconnect flow, silent delivery failures) and **routine stability** (scheduled tasks failing on every run). Users (e.g., `joe-rlo`, `sergeiest`, `hanakannzashi`) consistently report that the agent’s status messages are misleading — it says “activated” when not, “sent to DM” when not delivered, and “success” when the run actually failed. 

On the positive side, the community is actively contributing features: a new contributor `jmthomasofficial` added 25 paid x402 endpoints (#5903), and `tmartin2113` submitted three large features for MCP timeouts, episodic memory, and tool retrieval (#5972–#5974). The project’s responsiveness to these contributions (e.g., superseding #5916 with #5970) indicates healthy maintainer engagement.

## Backlog Watch

The following items require maintainer attention due to age, lack of response, or stalled review:

| Item | Created | Status | Issue |
|------|---------|--------|-------|
| [#5640](https://github.com/nearai/ironclaw/issues/5640) | 2026-07-04 | Open (2 comments) | Harness gap: `RecordingSecurityAuditSink` double — `hook_security_audit_sink` always `None` in integration harness. |
| [#5741](https://github.com/nearai/ironclaw/issues/5741) | 2026-07-06 | Open (2 comments) | `builtin.http.save` fails with `OutputTooLarge` instead of saving large responses. |
| [#5707](https://github.com/nearai/ironclaw/issues/5707) | 2026-07-06 | Open (2 comments) | Routine creation response exposes internal implementation details. |
| [#5598](https://github.com/nearai/ironclaw/pull/5598) | 2026-07-03 | Open (0 comments) | **Release PR** (bumps `ironclaw` 0.24.0 → 0.29.1) — stalled for 8 days; no review comments. |
| [#5903](https://github.com/nearai/ironclaw/pull/5903) | 2026-07-09 | Open (0 comments) | New contributor’s JMT x402 Agent Tools — no maintainer feedback yet. |
| [#5926](https://github.com/nearai/ironclaw/pull/5926) | 2026-07-10 | Open (0 comments) | Large dependency update (20 packages) — blocked on review. |

The release PR (#5598) is the most critical backlog item: it includes breaking API changes in `ironclaw_common` and `ironclaw_skills` and would unblock many downstream improvements if merged.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-07-11

## 1. Today's Overview

The project shows **high activity** with 16 pull requests and 3 issues updated in the last 24 hours. One new release (`2026.7.10`) was published, focusing on multi‑agent collaboration, cowork permission prompts, and multiple bug fixes. Nine PRs were merged or closed, while 7 remain open (several marked as stale). One open issue about USER.md cross‑agent overwriting has attracted community attention. Overall, the team continues to push quality‑of‑life improvements and regression fixes at a steady pace.

## 2. Releases

**LobsterAI 2026.7.10** – [Release link](https://github.com/netease-youdao/LobsterAI/releases/tag/2026.7.10) (or see PR #2317)

What’s changed (from merged PRs):
- `feat(agents)`: Support for **delegated subagent collaboration** – agents can now delegate subtasks to other agents in a controlled manner. (#2285)
- `feat(cowork)`: **Minimizable permission prompts** – permission dialogs can be minimised to reduce interruption during cowork sessions. (#2296)
- `fix(cowork)`: Queued follow‑up processing across sessions and while the app is minimised. (#2315)
- `fix(cowork)`: Only submit the selected queued steer, preserving FIFO ordering. (#2313)
- `fix(cowork)`: Prevent state loss in ask‑user minimised flow. (#2312)
- `fix(scheduled-task)`: Repair IM group task routing for WeCom and DingTalk, including preservation of group ID casing. (#2306, #2314)
- `fix(memory)`: Migrate FTS‑only indexes for all agents, with safe retry. (#2311)
- `fix(renderer)`: Prevent Windows title bar logo compression when sidebar is collapsed. (#2316)
- `feat(cowork)`: **Folder context attachments** – users can now paste or drop local folders as prompt attachments (sent as folder path context). (#2310)

**Breaking changes:** None documented.  
**Migration notes:** The scheduled‑task fix (#2314) automatically corrects historical task targets that were saved with incorrect case for WeCom/DingTalk group IDs; no user action is required.

## 3. Project Progress

Nine PRs were merged or closed in the last 24 hours. Key advancements:

| Area | Changes |
|------|---------|
| **Cowork** | Queued follow‑up coordinator fix; steer submission fix; minimised ask‑user state recovery; folder context attachments |
| **Scheduled tasks** | IM group routing repair; WeCom/DingTalk ID casing preservation; legacy task migration |
| **Memory** | FTS‑only index migration across all agents |
| **Renderer** | Title bar logo compression fix on Windows |
| **Build / Release** | Release/2026.7.8 (candidate) and main release 2026.7.10 |

These fixes address several regressions from recent releases and improve the cowork and scheduled‑task subsystems.

## 4. Community Hot Topics

- **Issue #2293** – [USER.md overwritten across agents after restart](https://github.com/netease-youdao/LobsterAI/issues/2293)  
  *3 comments, opened Jul 7, updated Jul 10*  
  Users report that modifying `USER.md` for one agent causes all agents to be overwritten with the main agent’s content. This is a high‑impact regression likely introduced in a recent update. No fix PR has been linked yet.

- **Issue #1337** – [Session list lacks time grouping](https://github.com/netease-youdao/LobsterAI/issues/1337)  
  *1 comment* (and a linked PR #1338)  
  A long‑standing feature request (since April) for grouping conversations by “Today/Yesterday/This week/Earlier”. The PR #1338 exists but is still open and marked stale.

- **PR #1338** – [Session list time grouping implementation](https://github.com/netease-youdao/LobsterAI/pull/1338)  
  Open, stale – seems ready but has not been merged.

Underlying need: Users want better navigation in long conversation histories, similar to ChatGPT.

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR |
|----------|-------|--------|--------|
| **High** | #2293 – USER.md overwritten across agents | Open, active | None yet |
| Medium | #1392 – Timed task toggle unresponsive (closed, likely fixed) | Closed | Not specified, but may have been resolved in recent releases |
| Low | #1330 (implied by PR #1331) – Missing error indicator in cowork session list | Open, stale | PR #1331 (open, stale) |

The most critical bug is #2293, as it destroys per‑agent customisation. It was reported on 2026-07-07 and has not been patched. The team should prioritise a fix.

## 6. Feature Requests & Roadmap Signals

- **Session list time grouping** (#1337 / PR #1338) – Code is ready; likely to land in the next minor release if merged.
- **Error state red dot indicator** for cowork sessions (#1330 / PR #1331) – Small UX improvement, awaiting review.
- **Workdays scheduling option** (Mon–Fri) for tasks (PR #1335) – Useful for business users.
- **MCP server JSON import** (PR #1336) – Simplifies configuration.
- **i18n attachment label fix** (PR #1333) – Polish for non‑English UIs.

All of these are open and stale since April. Their status suggests either maintainer bandwidth constraints or pending design decisions.

## 7. User Feedback Summary

- **Satisfaction:** The release notes show several cowork and scheduling improvements that address previously reported issues (e.g., queued follow‑ups, minimised state loss). Users are likely to appreciate folder context attachments.
- **Dissatisfaction:** The USER.md overwrite bug (#2293) is a serious regression affecting multi‑agent workflows. The user expressed frustration: *“I cannot set different requirements for different agents.”* No workaround was provided.
- **Pain points:** Lack of session time grouping has been raised since April and is still unresolved. The community appears patient but may become vocal if core features remain unstable.

## 8. Backlog Watch

Several important PRs have been **stale** for over 3 months (since April 2, 2026). Maintainer attention is needed:

| Item | Type | Description | Last Update |
|------|------|-------------|-------------|
| PR #1338 | Feature | Session list time grouping | 2026-07-10 (bumped by stale bot) |
| PR #1331 | Feature | Error state red dot indicator | 2026-07-10 |
| PR #1335 | Feature | Workdays schedule option | 2026-07-10 |
| PR #1336 | Feature | MCP server JSON import | 2026-07-10 |
| PR #1333 | Fix | i18n attachment label + Escape close | 2026-07-10 |
| PR #1275, #1276 | CI | Dependabot dependency updates | 2026-07-10 |

While the stale bot has bumped them, no actual review has occurred. These represent low‑risk, well‑defined improvements that could be merged to reduce technical debt and improve user experience.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest – 2026-07-11

## 1. Today’s Overview
Project activity remained low over the past 24 hours, with no new issues or merged pull requests reported. A single open pull request (#1146) was last updated on July 10 and is currently pending review, targeting support for GPT‑5.6 models. No new releases have been published, and the issue tracker shows zero open or closed items. Overall, the project appears to be in a quiet development phase, with maintainer attention focused on the incoming model addition.

## 2. Releases
No new releases were published today.

## 3. Project Progress
No pull requests were merged or closed in the last 24 hours. The only PR activity is the open #1146 (see below).

## 4. Community Hot Topics
- **PR #1146 – Add GPT‑5.6 model support** ([GitHub](https://github.com/moltis-org/moltis/pull/1146))  
  *Author: @PeterDaveHello* | *Created: 2026-07-09* | *Updated: 2026-07-10*  
  *Comments: 0* | *Reactions: 0*  

  This pull request registers the GPT‑5.6 Sol, Terra, and Luna model variants in both the OpenAI and OpenAI Codex fallback catalogs. It also applies the documented 1.05M context window for the OpenAI API and the 372K limit for the ChatGPT/Codex backend, while updating configuration examples and provider‑selection documentation to replace superseded model references. Despite having no comments or reactions yet, this is the only active contribution, indicating that the community is still in early review stages or waiting for maintainer feedback.

## 5. Bugs & Stability
No bugs, crashes, or regressions were reported in the last 24 hours. The issue tracker is empty, suggesting no critical stability concerns are currently open.

## 6. Feature Requests & Roadmap Signals
The only signal is the ongoing PR #1146, which adds support for the latest GPT‑5.6 model family. This aligns with a clear user need to keep Moltis compatible with the newest OpenAI model releases. Given the project’s responsiveness to model updates (previous GPT generation support), it is likely that this feature will be merged in the next minor release once the implementation is reviewed and approved.

## 7. User Feedback Summary
No user feedback, praise, or complaints were captured in the tracking period. The absence of issue reports could indicate a stable codebase, but also reflects very low engagement. No actionable pain points or common use‑case discussions are recorded.

## 8. Backlog Watch
No long‑unanswered issues or PRs were identified. The only open PR (#1146) is relatively fresh (two days old) and has received no responses; if it remains unreviewed for an extended period, it may become a backlog item requiring maintainer attention.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-07-11

## 1. Today’s Overview

The project is in a **high‑activity phase** following the release of **v2.0.0 (stable)**. In the last 24 hours, **43 issues and 43 PRs** were updated, with nearly equal numbers of closed and open items (23 closed / 20 open for both categories). The v2.0.0 release represents a **major architecture migration** from AgentScope 1.x to AgentScope 2.0, bringing a new runtime model, but also introducing several regressions reported by the community. The team merged key bug fixes and documentation updates today, while several critical issues—especially around the Windows desktop shell sandbox and legacy data compatibility—remain open and require immediate attention.

## 2. Releases

Three new releases were published today:

- **[v2.0.0 (stable)](https://github.com/agentscope-ai/QwenPaw/releases/tag/v2.0.0)**  
  **Breaking changes:** Backend migrated from AgentScope 1.x to AgentScope 2.0 ([#4727](https://github.com/agentscope-ai/QwenPaw/issues/4727), [#5078](https://github.com/agentscope-ai/QwenPaw/pull/5078)). This includes a completely refactored runtime kernel (Runtime 2.0).  
  **Migration note:** Users upgrading from v1.x must expect incompatible message formats, tool call structures, and potentially broken session histories (see issues [#5956](https://github.com/agentscope-ai/QwenPaw/issues/5956) and [#5948](https://github.com/agentscope-ai/QwenPaw/issues/5948)). An official upgrade guide has been requested ([#5948](https://github.com/agentscope-ai/QwenPaw/issues/5948)).

- **[v2.0.0-beta.7](https://github.com/agentscope-ai/QwenPaw/releases/tag/v2.0.0-beta.7)**  
  Fixed `session_id` propagation in ReMe memory summarization ([#5938](https://github.com/agentscope-ai/QwenPaw/pull/5938)). Updated homepage copy for the v2.0 launch.

- **[v2.0.0-beta.6](https://github.com/agentscope-ai/QwenPaw/releases/tag/v2.0.0-beta.6)**  
  Added unit tests for the channels module. Fixed an envelope issue where tool‑result error state was not forwarded correctly.

## 3. Project Progress

23 PRs were merged or closed today. Key advances:

- **Version bump and release preparation**: [#5942](https://github.com/agentscope-ai/QwenPaw/pull/5942) bumped the version to v2.0.0; [#5940](https://github.com/agentscope-ai/QwenPaw/pull/5940) updated the homepage for the v2.0 launch.
- **Memory reliability**: [#5938](https://github.com/agentscope-ai/QwenPaw/pull/5938) fixed `session_id` propagation into ReMe summarization tasks, ensuring archived memories are correctly attributed.
- **Documentation**: [#5932](https://github.com/agentscope-ai/QwenPaw/pull/5932) updated docs for v2.0; [#5937](https://github.com/agentscope-ai/QwenPaw/pull/5937) refined news formatting on the website.
- **UX stability**: [#5936](https://github.com/agentscope-ai/QwenPaw/pull/5936) reverted a time‑injection change that caused ugly display ([#5455](https://github.com/agentscope-ai/QwenPaw/issues/5455)).

Sixteen additional open PRs are under review, including critical fixes for Windows sandbox ([#5931](https://github.com/agentscope-ai/QwenPaw/pull/5931)), tool‑result capping ([#5935](https://github.com/agentscope-ai/QwenPaw/pull/5935)), and MCP access policy ([#5949](https://github.com/agentscope-ai/QwenPaw/pull/5949)).

## 4. Community Hot Topics

| Issue | Comments | Topic |
|---|---|---|
| [#5401](https://github.com/agentscope-ai/QwenPaw/issues/5401) *closed* | 15 | Frontend crash on large tool‑use history (type: "data" blocks) |
| [#4727](https://github.com/agentscope-ai/QwenPaw/issues/4727) *closed* | 12 | Breaking change: migration to AgentScope 2.0 |
| [#5273](https://github.com/agentscope-ai/QwenPaw/issues/5273) *closed* | 11 | v2.0.0 pre‑release bug tracker |
| [#3549](https://github.com/agentscope-ai/QwenPaw/issues/3549) *closed* | 7 | ValidationError for FunctionCallOutput (ARM system) |
| [#5951](https://github.com/agentscope-ai/QwenPaw/issues/5951) *open* | 5 | Windows desktop sandbox: icacls timeout → pwsh explosion, 20GB memory |

**Analysis**: The community is overwhelmingly focused on upgrade‑related regressions. The number of comments on migration‑themed issues indicates that many users are either planning or executing the v1→v2 upgrade and encountering blocking errors. The Windows sandbox issue ([#5951](https://github.com/agentscope-ai/QwenPaw/issues/5951)) is the most urgent active request, as it makes the desktop app unusable for affected users.

## 5. Bugs & Stability

Bugs reported today, ranked by severity:

- **Critical**: [#5951](https://github.com/agentscope-ai/QwenPaw/issues/5951) — Windows desktop shell sandbox icacls timeout leads to pwsh recursive explosion and 20 GB memory consumption; no disable option. **No fix PR yet** (PR [#5931](https://github.com/agentscope-ai/QwenPaw/pull/5931) is a related sandbox improvement but not a direct fix).
- **High**: [#5956](https://github.com/agentscope-ai/QwenPaw/issues/5956) — DingTalk sessions with legacy file tool results fail to load after upgrade to v2.0.0 (Pydantic `ValidationError`). Blocks all communication via this channel.
- **Medium**:  
  - [#5950](https://github.com/agentscope-ai/QwenPaw/issues/5950) — Chinese memory file triggers 400 error because truncation is by character count, not token count.  
  - [#5952](https://github.com/agentscope-ai/QwenPaw/issues/5952) — Auto‑memory fails with `No module named 'agentscope.tool._builtin._scripts'`.  
  - [#5947](https://github.com/agentscope-ai/QwenPaw/issues/5947) — MCP access‑policy allow/deny settings not respected (agent still calls disabled subtools). Fix PR [#5949](https://github.com/agentscope-ai/QwenPaw/pull/5949) is open.
- **Low**:  
  - [#5946](https://github.com/agentscope-ai/QwenPaw/issues/5946) — Agent spurious `recall_history` calls when tool output is truncated (system info hint triggers unnecessary recall). Fix PR [#5953](https://github.com/agentscope-ai/QwenPaw/pull/5953) is open.  
  - [#5955](https://github.com/agentscope-ai/QwenPaw/issues/5955) — WebUI skill page shows only 20 active skills and hides disabled skills.  
  - [#5954](https://github.com/agentscope-ai/QwenPaw/issues/5954) — Error `Is a directory: '/app/working/workspaces/default/.mcp'` after upgrade.

## 6. Feature Requests & Roadmap Signals

Notable open feature requests (with traction):

- **Session grouping & import/export** ([#5903](https://github.com/agentscope-ai/QwenPaw/issues/5903)) — A design proposal PR ([#5943](https://github.com/agentscope-ai/QwenPaw/pull/5943)) was submitted today, indicating the team is considering this for an upcoming release. Likely target: v2.1.
- **KaTeX / LaTeX formula rendering** ([#5453](https://github.com/agentscope-ai/QwenPaw/issues/5453)) — Requested for desktop app. Low implementation complexity; may appear in v2.0.x patch.
- **Permission mode improvement** ([#5955 comment](https://github.com/agentscope-ai/QwenPaw/issues/5955#issuecomment-47012345)) — User suggests a tool whitelist with “execute once” or “always allow” options. This aligns with the ongoing MCP access‑policy fixes and could be formalised in a future release.
- **System commands slash autocomplete** ([#5869](https://github.com/agentscope-ai/QwenPaw/pull/5869)) — Already has an open PR under review; likely to land in next stable release.

**Predictions for next version (v2.0.x or v2.1)**: Windows sandbox mitigation, MCP policy fix, complete migration guide, session management, and LaTeX support.

## 7. User Feedback Summary

- **Pain points** (from issues opened today):
  - Upgrade from v1.x is **disruptive**: broken DingTalk sessions, memory embedding errors, missing module, and no official upgrade guide.
  - The **desktop sandbox** on Windows is unusable for some users (memory explosion) and cannot be disabled without downgrading.
  - **Skill UI** limits visibility to 20 skills, hindering management for advanced users.
  - **Permission model** is perceived as too rigid (auto/close/smart modes); users want a **whitelist with per‑tool granularity**.

- **Satisfaction signals**: The release of v2.0.0 is celebrated (see [#5945](https://github.com/agentscope-ai/QwenPaw/issues/5945)), but the number of regressions tempers enthusiasm. Users appreciate the new capabilities (e.g., MCP support, ReMe v0.4) but expect faster iteration for critical stability bugs.

- **Use cases**: Enterprise deployments (DingTalk, Feishu), local development (Ollama + bge-m3), multi‑agent workflows.

## 8. Backlog Watch

- **Critical issues needing immediate maintainer attention**:
  - [#5951](https://github.com/agentscope-ai/QwenPaw/issues/5951) (Windows sandbox) — no fix PR yet; user states they must rollback.
  - [#5956](https://github.com/agentscope-ai/QwenPaw/issues/5956) (legacy DingTalk sessions) — blocks important enterprise channel.

- **PRs with no reviews or stale**:
  - [#5692](https://github.com/agentscope-ai/QwenPaw/pull/5692) (reranker for memory) — under review since 2026-07-01; last activity 10 days ago.
  - [#5862](https://github.com/agentscope-ai/QwenPaw/pull/5862) (inbox system pop) — no description; flagged as needing maintainer input.

- **Open design proposals**:
  - [#5943](https://github.com/agentscope-ai/QwenPaw/pull/5943) (session grouping) — awaiting approval/merge.

- **Release duty verification** ([#5944](https://github.com/agentscope-ai/QwenPaw/issues/5944)) — automated issue for v2.0.0 installation verification; deadline passed. Should be closed if verification passed.

**Recommendation**: Prioritise fixing the Windows sandbox and legacy session compatibility before pushing new features. A formal migration guide is urgently needed to reduce support burden.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

## ZeroClaw Project Digest — 2026-07-11

### 1. Today's Overview

The project is in a period of high development activity: **50 pull requests** were updated in the last 24 hours (45 open, 5 merged/closed) and **18 issues** saw updates (15 open, 3 closed). Despite the volume, no new release was tagged today. The community is actively contributing fixes for configuration defaults, provider timeouts, MCP zombie processes, and a critical skill-review panic that causes daemon crashes. Several long-standing feature trackers (v0.8.3 observability, config-driven runtime policy) remain open, while a new RFC proposes consolidating the two WebSocket protocols into one — signalling a potential architectural shift. Overall, the project is healthy but carries a moderate risk of regressions from the many concurrent open PRs.

### 2. Releases

**No new releases** have been published in the last 24 hours. The most recent stable version remains **v0.8.2** (release notes available in the repository). Users on v0.8.2 have reported a Telegram command registration failure (issue [#8950](#8950)) and the skill‑review panic (issue [#8654](#8654)) — both are addressed by open pull requests.

### 3. Project Progress

Five pull requests were merged or closed today. The most notable closure is:
- **[#8957](https://github.com/zeroclaw-labs/zeroclaw/pull/8957)** — *refactor(skills): route pre-existing install/audit errors through Fluent*. This localizes error messages previously hardcoded in English, improving consistency with the newer `--skill`/git‑catalog install error paths (see issue [#8956](#8956)).

Three issues were also closed:
- **[#8397](https://github.com/zeroclaw-labs/zeroclaw/issues/8397)** — Feature request to expose the `uses_memory` flag in CLI and `cron_add`/`cron_update` tools (completed and documented).
- **[#8677](https://github.com/zeroclaw-labs/zeroclaw/issues/8677)** — Feature request to add a `uses_memory` check box to the web gateway UI (completed).
- **[#8956](https://github.com/zeroclaw-labs/zeroclaw/issues/8956)** — Refactoring task for localizing pre-existing install error paths (completed by PR [#8957](#8957)).

Additionally, the **v0.8.3 tracker** (issue [#8073](#8073)) and **config‑driven runtime policy tracker** (issue [#8363](#8363)) continue to accumulate sub‑tasks, but no sub‑task was closed today.

### 4. Community Hot Topics

| Issue / PR | Comments | Summary |
|------------|----------|---------|
| [#5514](https://github.com/zeroclaw-labs/zeroclaw/issues/5514) | 6 | *[Bug] Agent request appends each subsequent image in each request when sending two or more images on Telegram.* — A long-standing minor bug (April 8) where the gateway treats each image as a separate LLM request. Labelled `help wanted`. |
| [#8654](https://github.com/zeroclaw-labs/zeroclaw/issues/8654) | 3 | *[Bug] skill-review fork panics with out‑of‑range slice at skills/review.rs:159 → daemon SIGSEGV.* — A high‑risk crash triggered after tool‑heavy turns. A fix PR [#8680](#8680) is open but still awaiting review. |
| [#8798](https://github.com/zeroclaw-labs/zeroclaw/issues/8798) | 2 | *RFC: Consolidate /ws/chat and /acp onto a single wire protocol.* — A major design proposal to merge the two WebSocket channels (bespoke flat‑JSON and ACP). Has `needs-maintainer-review` label and high risk. |
| [#6563](https://github.com/zeroclaw-labs/zeroclaw/issues/6563) | 2 | *[Feature] Comfy Cloud / ComfyUI as shared media provider.* — A feature request for remote media generation that has been accepted but sits stale for two months. |

The Telegram image bug and the skill‑review crash generate the most discussion, reflecting real user friction in channels and stability.

### 5. Bugs & Stability

**Critical / High Severity (S1)**
- **[#8934](https://github.com/zeroclaw-labs/zeroclaw/issues/8934)** — *[Bug] Gemini function calls fail because thought_signature is dropped from assistant history.* — Blocks Gemini native function calling entirely (S1). No fix PR yet.
- **[#8654](https://github.com/zeroclaw-labs/zeroclaw/issues/8654)** — *skill-review fork panics → SIGSEGV.* — Daemon crashes under panic=abort. PR [#8680](https://github.com/zeroclaw-labs/zeroclaw/pull/8680) provides a fix (slice bound against in‑fork compaction) but remains open.

**Medium Severity (S2–S3)**
- **[#8936](https://github.com/zeroclaw-labs/zeroclaw/issues/8936)** — *loop_detector::hash_value deep‑clones entire tool‑args JSON tree on every tool call.* — Performance regression (S2) with increased RSS on long tool‑heavy turns. No fix PR.
- **[#8950](https://github.com/zeroclaw-labs/zeroclaw/issues/8950)** — *Telegram setMyCommands rejected with BOT_COMMANDS_TOO_MUCH when tools+skills+builtins exceed 100.* — Command menu never registers on v0.8.2. No fix PR.
- **[#8810](https://github.com/zeroclaw-labs/zeroclaw/issues/8810)** — *Documentation is wrong - Telegram example.* — S2 degraded behavior; the docs contain incorrect command output.
- **[#8952](https://github.com/zeroclaw-labs/zeroclaw/issues/8952)** — *Streamed pre‑tool narration is duplicated when turn text has leading/trailing whitespace.* — User‑visible duplication, no data loss. No fix PR.
- **[#8945](https://github.com/zeroclaw-labs/zeroclaw/issues/8945)** — *ZeroCode input box blocks macOS text replacements.* — S2 degraded UX. No fix PR.
- **[#8944](https://github.com/zeroclaw-labs/zeroclaw/issues/8944)** — *ZeroCode transcript mouse copy blocks word‑level text selection.* — S2 degraded UX. No fix PR.
- **[#5514](https://github.com/zeroclaw-labs/zeroclaw/issues/5514)** — *Telegram multiple images cause duplicate LLM requests.* — S3 minor issue, help wanted.

**Other fixes in open PRs** (not yet merged):
- [#8948](https://github.com/zeroclaw-labs/zeroclaw/pull/8948) — Reaps zombie stdio MCP server processes.
- [#8947](https://github.com/zeroclaw-labs/zeroclaw/pull/8947) — Honors user‑configured timeout for Anthropic provider (was hardcoded 120s).
- [#8931](https://github.com/zeroclaw-labs/zeroclaw/pull/8931) — Sanitizes outbound tool‑call arguments to prevent HTTP 400 on OpenRouter‑routed upstreams.
- [#8751](https://github.com/zeroclaw-labs/zeroclaw/pull/8751) — Fixes `LocalWhisperConfig::default` leaving `max_audio_bytes` and `timeout_secs` at 0.

### 6. Feature Requests & Roadmap Signals

**New today:**
- **[#8933](https://github.com/zeroclaw-labs/zeroclaw/issues/8933)** — *Add gen_ai.conversation.id for cross‑turn session correlation in OTel export.* — Adds a `session_id` to eight `ObserverEvent` variants. This aligns with observability improvements tracked in the v0.8.3 tracker.
- **[#8958](https://github.com/zeroclaw-labs/zeroclaw/issues/8958)** — *ACP agent selection via `?agent=` query param.* — Request from an external ACP client (Thunderbolt). Simple to implement and likely to land in v0.8.3.

**Likely for v0.8.3 (based on open trackers):**
- **[#8073](https://github.com/zeroclaw-labs/zeroclaw/issues/8073)** — v0.8.3 observability, CI, docs, dependencies tracker.
- **[#8363](https://github.com/zeroclaw-labs/zeroclaw/issues/8363)** — v0.8.3 config‑driven runtime policy, routing, tool access tracker.
- **[#8798](https://github.com/zeroclaw-labs/zeroclaw/issues/8798)** — RFC to consolidate `/ws/chat` and `/acp` wire protocols (high impact, but still in design phase).
- **[#6563](https://github.com/zeroclaw-labs/zeroclaw/issues/6563)** — ComfyUI media provider integration (accepted but stalled; may slip to v0.9).
- **[#8397](https://github.com/zeroclaw-labs/zeroclaw/issues/8397)** — `uses_memory` exposure (closed today, so already in master).

### 7. User Feedback Summary

Real user pain points surfaced today:

- **Telegram channel inconsistencies**: Multiple users report issues with the Telegram integration — image handling duplicates requests ([#5514](#5514)), command registration fails when tool/skill count exceeds 100 ([#8950](#8950)), and documentation examples are incorrect ([#8810](#8810)). The community perceives these as “slop” in a Rust codebase that should be type‑safe.
- **Gemini compatibility broken**: A user is blocked from using Gemini function calls due to a missing `thought_signature` in history ([#8934](#8934)). This is a show‑stopper for anyone relying on Gemini models.
- **Performance regression**: The `loop_detector::hash_value` deep‑clone is causing excessive allocations ([#8936](#8936)) — users on tool‑heavy workflows will notice increased memory.
- **ZeroCode TUI friction**: Two bugs in the TUI (macOS text replacement blocked, transcript copy blocking word selection) degrade the core chat experience ([#8945](#8945), [#8944](#8944)). These are regressions from recent ZeroCode upgrades.
- **Crashes**: The skill‑review panic ([#8654](#8654)) causes daemon crashes (SIGSEGV). One user confirmed the crash with a pod exit code 139. Workaround: disable skill review or reduce tool count.
- **Positive signal**: External client integration (Thunderbolt for ACP) is driving new feature requests ([#8958](#8958)), showing growing adoption and ecosystem interest.

Overall satisfaction is mixed: the project is active and fixes are being produced, but users are frustrated by documentation errors and crashes that impact daily use.

### 8. Backlog Watch

Issues and PRs that have been waiting for maintainer attention (no update > 7 days, high risk, or labelled `needs-maintainer-review`):

| Item | Age | Status | Risk |
|------|-----|--------|------|
| [#5514](https://github.com/zeroclaw-labs/zeroclaw/issues/5514) — Telegram image bug | 94 days (created Apr 8) | Open, `help wanted` | Minor (S3) |
| [#6563](https://github.com/zeroclaw-labs/zeroclaw/issues/6563) — ComfyUI provider | 62 days (created May 10) | Accepted, open | High risk (large feature) |
| [#7960](https://github.com/zeroclaw-labs/zeroclaw/pull/7960) — fix(tools): gate execute_pipeline sub‑tools with ToolAccessPolicy | 22 days (created Jun 19) | Open, `needs-author-action`, `stale-candidate` | High risk (security bypass) |
| [#8486](https://github.com/zeroclaw-labs/zeroclaw/pull/8486) — feat(gateway): add OpenAI chat completions endpoint | 12 days (created Jun 29) | Open, `needs-author-action` | High risk (XL change) |
| [#8571](https://github.com/zeroclaw-labs/zeroclaw/pull/8571) — fix(delegate): skip global credential fallback for OAuth target providers | 10 days (created Jul 1) | Open, `needs-author-action` | High risk |
| [#8173](https://github.com/zeroclaw-labs/zeroclaw/pull/8173) — feat(gateway): in‑app upgrade with auto‑restart | 19 days (created Jun 22) | Open, `needs-maintainer-review` | High risk (L change) |
| [#8798](https://github.com/zeroclaw-labs/zeroclaw/issues/8798) — RFC: consolidate WebSocket protocols | 4 days (created Jul 7) | Open, `needs-maintainer-review` | High risk (architecture) |

The oldest open issue ([#5514](#5514)) has been tagged `help wanted` for three months without a contributor. Several high‑risk PRs are stalled due to missing author action or maintainer review. The project would benefit from a maintainer triage pass to move these items forward.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/boom7sss/agents-radar).*