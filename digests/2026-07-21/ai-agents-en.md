# OpenClaw Ecosystem Digest 2026-07-21

> Issues: 355 | PRs: 500 | Projects covered: 13 | Generated: 2026-07-21 03:22 UTC

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

# OpenClaw Project Digest — 2026-07-21

## Today's Overview
The project is in a period of **high activity** with 355 issues and 500 pull requests updated in the last 24 hours. The overall health is **moderate** – while a significant number of issues are being closed (129 closed issues, 125 merged/closed PRs), the volume of open, high-severity bugs (especially around session reliability and message delivery) remains a concern. No new releases were published today. The community is actively discussing long-standing feature requests, and several critical regressions (particularly in the Codex app-server integration) are still awaiting resolution.

## Releases
*None.* No new releases were created today.

## Project Progress
**Pull Requests merged/closed today (125 total):** Key milestones include:
- **fix(agent): remove redundant `===DONE_ERR===` sentinel logic** – PR #106635 (merged) improves error detection in cron tasks.
- **feat(dashboard): widget presentation contract** – PR #111977 (merged) standardizes widget frame insets and auto-height.
- **fix(clickclack): redact REST error details** – PR #106635 (closed) tightens security around credential leakage in error messages.
- Several localization and UI unification PRs (e.g., #112035, #111545 series) advanced the Web UI’s thread creation and media permission flows.

Pending high-impact PRs still under review:
- **#110179** (P1) – Fixes gateway authentication for Anthropic Vertex users relying on Google ADC.
- **#111277** (P2) – Prevents streaming response leak in guarded HTTP callers.
- **#111422** (P1) – Adds `===DONE_ERR===` detection for cron failure alerting.

## Community Hot Topics
The most discussed issues reveal three core themes: **message loss, session reliability, and security**:

| Issue | Title | Comments | 👍 |
|-------|-------|----------|----|
| [#99241](https://github.com/openclaw/openclaw/issues/99241) | Tool outputs render as image attachments – agent cannot read stdout | 23 | 2 |
| [#88312](https://github.com/openclaw/openclaw/issues/88312) | Regression in Codex app-server turn-completion stall (closed) | 22 | 5 |
| [#7707](https://github.com/openclaw/openclaw/issues/7707) | Feature Request: Memory Trust Tagging by Source | 20 | 0 |
| [#87744](https://github.com/openclaw/openclaw/issues/87744) | Codex-backed Telegram turns time out repeatedly | 17 | 3 |
| [#58450](https://github.com/openclaw/openclaw/issues/58450) | Agent promises follow-up without action | 16 | 4 |

**Analysis:** Users are frustrated with phantom message loss (issues #99241, #87744) and broken promises (#58450). The trust-tagging feature (#7707) has strong community backing, reflecting growing concern about prompt injection and memory poisoning.

## Bugs & Stability
**Critical regressions and high-severity bugs** dominate the active issue list:

| Severity | Issue | Title | Fix PR exists? |
|----------|-------|-------|----------------|
| P1 | [#99241](https://github.com/openclaw/openclaw/issues/99241) | Tool outputs → image placeholder (agent blind) | No |
| P1 | [#88312](https://github.com/openclaw/openclaw/issues/88312) | Codex turn-completion stall (closed, but root cause?) | Yes (#85107, but regression recurred) |
| P1 | [#87744](https://github.com/openclaw/openclaw/issues/87744) | Telegram sessions time out on 2026.5.27 | No |
| P1 | [#86996](https://github.com/openclaw/openclaw/issues/86996) | Active Memory + Codex → long latency and crash loops | No |
| P1 | [#108238](https://github.com/openclaw/openclaw/issues/108238) | False context overflow due to cacheRead counting (Chinese) | Closed |
| P1 | [#101349](https://github.com/openclaw/openclaw/issues/101349) | Agent-created crons inherit broken toolsAllow | No |
| P1 | [#109017](https://github.com/openclaw/openclaw/issues/109017) | Anthropic provider missing from model picker | No |
| P1 | [#108215](https://github.com/openclaw/openclaw/issues/108215) | Context usage drops mysteriously without compaction | No |

**Notable regression patterns:** Several bugs (e.g., #88312, #87744, #63216) trace back to the same 2026.5.27 Codex release, indicating a likely shared cause in the app-server integration layer. The platform is also seeing a spike in **memory/compaction failures**, with issues like #78562 (tool-loop compaction loops) and #86684 (premature compaction of parent sessions).

## Feature Requests & Roadmap Signals
**High-community-signal features** likely to appear in the next minor release:

- **Memory Trust Tagging by Source** ([#7707](https://github.com/openclaw/openclaw/issues/7707), 20 comments, P2) – Demand for provenance tracking of memory entries to prevent poisoning.
- **Masked Secrets** ([#10659](https://github.com/openclaw/openclaw/issues/10659), 15 comments, P1) – Agents use API keys without seeing them; could be a security milestone.
- **Subagent isolation** ([#96975](https://github.com/openclaw/openclaw/issues/96975), 11 comments, P2) – Limit parent context pollution from child sessions.
- **Skill Permission Manifest** ([#12219](https://github.com/openclaw/openclaw/issues/12219), 6 comments, P2) – Informed consent for third-party skills.

**Predicted next release features:** The parallel localization consolidation PRs (#111541–111545) and paginated chat history (#111941) are large, well-supported efforts that may land soon. The `maxTurns` / `maxToolCalls` config option ([#9912](https://github.com/openclaw/openclaw/issues/9912)) also has a linked PR open.

## User Feedback Summary
**Positive signals:** The community is actively contributing fixes (500 PRs updated today). The localization effort (PR #111545) and media permission fixes (PR #112037) address long-standing UX frustrations.

**Pain points (raw excerpts from issues):**
- *“The agent cannot read the original stdout/stderr text”* – [#99241](https://github.com/openclaw/openclaw/issues/99241)
- *“A normal user question can get interrupted and effectively disappear”* – [#64810](https://github.com/openclaw/openclaw/issues/64810)
- *“No way to verify fallback configuration works until an actual provider failure”* – [#6599](https://github.com/openclaw/openclaw/issues/6599)
- *“Cold-path auth resolution takes 4 seconds every 15 minutes”* – [#78041](https://github.com/openclaw/openclaw/issues/78041)

**Satisfaction:** Users value the open-source transparency (Claude Code leak inspired improvements like #58730, #58398), but reliability regressions are eroding trust.

## Backlog Watch
**Long-unanswered or maintainer-stalled items of importance:**

| Issue / PR | Stale since | Notes |
|------------|-------------|-------|
| [#58450](https://github.com/openclaw/openclaw/issues/58450) – Agent promises follow-up without action | 2026-03-31 (stale) | 16 comments, P2, no fix PR – common user complaint. |
| [#7707](https://github.com/openclaw/openclaw/issues/7707) – Memory Trust Tagging | 2026-02-03 (stale) | 20 comments, P2 – needs product decision. |
| [#88312](https://github.com/openclaw/openclaw/issues/88312) – Codex turn-completion stall regression | Closed, but reopened? Closed today but regression persists | 22 comments – explicit fix PR (#85107) exists but regression recurred. |
| [#78562](https://github.com/openclaw/openclaw/issues/78562) – Tool-loop compaction after compaction | 2026-05-06 (stale) | P1, still open – needs live repro. |
| [#8299](https://github.com/openclaw/openclaw/issues/8299) – Suppress sub-agent announce | 2026-02-03 (stale) | 8 comments, P2 – PR needed. |

**Maintainer attention needed:** Issues flagged `clawsweeper:needs-maintainer-review` include #88312, #87744, #7707, #10659 — many involve security or session-state impact. The backlog of stale P1 bugs (e.g., #78562, #63216, #64810) suggests the team may be resource-constrained despite high PR volume.

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: Personal AI Agent Open-Source Ecosystem

## 1. Ecosystem Overview

The personal AI assistant open-source landscape is experiencing explosive growth, with seven actively-developed projects processing over 600 combined issues and 800+ pull requests daily. The ecosystem is converging around shared pain points—session reliability, memory poisoning prevention, cross-platform continuity, and token efficiency—while diverging in architectural approaches (monolithic vs. micro-agent, JavaScript vs. Rust core, local-first vs. cloud-hybrid). A clear pattern emerges: projects that shipped major architectural rewrites (IronClaw's Reborn, ZeroClaw's v0.9.0) are absorbing short-term stability costs for long-term scalability gains. The community is voting with contributions: projects with low barrier-to-entry plugin SDKs and clear documentation (OpenClaw, Hermes Agent) are attracting the most external pull requests.

---

## 2. Activity Comparison

| Project | Issues Updated (24h) | PRs Updated (24h) | Release This Week? | Health Score | Trend |
|---------|---------------------|-------------------|-------------------|--------------|-------|
| **OpenClaw** | 355 | 500 | No | Moderate | ⬆️ High activity, P1 bug backlog heavy |
| **Hermes Agent** | 50 | 50 | Yes (v0.19.0) | Good | 🚀 Post-release, aggressive triage |
| **ZeroClaw** | 39 | 50 | No | Good | 🔧 Pre-milestone push (v0.9.0) |
| **IronClaw** | 43 | 50 | RC1 in staging | Good | 🏗️ Major architectural migration |
| **CoPaw** | 24 | 41 | No | Moderate | 📈 Feature velocity surging |
| **NanoBot** | 6 | 29 | No | Strong | ✅ Stable, focused bug fixing |
| **NanoClaw** | 6 | 20 | No | Strong | 🔒 Security hardening sprint |
| **PicoClaw** | 10 | 10 | No | Moderate | ↔️ Steady, low drama |
| **LobsterAI** | 0 | 15 | No | Good | 🧩 Polish & integration focus |
| **TinyClaw / Moltis / ZeptoClaw** | 0 | 0 | None | Dormant | ❄️ No activity |

*Health Score: Composite of open/closed ratio, severity distribution, community engagement, and maintainer responsiveness.*

---

## 3. OpenClaw's Position

**Advantages vs. peers:**
- **Largest community footprint**: 355 daily issues + 500 PRs—roughly 7× the activity of the next-busiest project (ZeroClaw). The reference implementation effect is real: external contributors ship fixes faster than any peer.
- **Integration surface area**: Codex app-server, Telegram, Discord, WebUI—OpenClaw has the widest adapter ecosystem. No other project matches its channel breadth.
- **Maturity of memory system**: Active Memory + compaction + Dream digests (shared with CoPaw) is the most articulated long-term memory architecture in the ecosystem.

**Technical approach differences:**
- **JavaScript/TypeScript core** vs. Hermes Agent (Python) and IronClaw (Rust)—this lowers contributor friction but creates performance ceiling for local model inference.
- **Monolithic agent model** vs. ZeroClaw's SOP (Standard Operating Procedures) micro-agent architecture. OpenClaw bets on a single, capable agent; ZeroClaw decomposes into composable step agents.

**Community size comparison:**
- OpenClaw: 500 PRs/24h (est. 2,000+ monthly contributors) → **Ecosystem's dominant project**
- Hermes Agent: 50 PRs/24h, 450+ contributors in one release cycle → **Fastest-growing challenger**
- ZeroClaw: 50 PRs/24h, growing contributor diversity → **Architecture innovator**

**Current risk**: P1 bugs (session reliability, Codex integration regressions) are accumulating faster than they are resolved, potentially eroding trust advantage.

---

## 4. Shared Technical Focus Areas

The following requirements emerge independently across **three or more projects**, signaling ecosystem-level priorities:

| Requirement | Affected Projects | Signal Strength |
|------------|-------------------|----------------|
| **Memory provenance / trust tagging** | OpenClaw (#7707), CoPaw (#6222), ZeroClaw (#7432) | 🔴 High — prompt injection defense |
| **Cross-platform session continuity** | OpenClaw (#64810), Hermes (#4335), IronClaw (#6349) | 🔴 High — user data loss complaints |
| **Tool call efficiency (token reduction)** | OpenClaw (#99241), Hermes (#13332), CoPaw (#6286) | 🟠 Medium — cost & latency |
| **Plaintext secret storage** | NanoBot (#4803), ZeroClaw (implicit), PicoClaw (implicit) | 🟠 Medium — production readiness gap |
| **Subagent isolation / pollution prevention** | OpenClaw (#96975), CoPaw (#4873), ZeroClaw (SOP design) | 🟠 Medium — multi-agent reliability |
| **Provider-level prompt caching** | NanoBot (#4867), PicoClaw (#3229), Hermes (Ollama users) | 🟢 Emerging — local model adoption |
| **Windows compatibility** | ZeroClaw (#7462), CoPaw (#6197), PicoClaw (#3182) | 🟢 Emerging — cross-platform gap |

---

## 5. Differentiation Analysis

| Dimension | OpenClaw | Hermes Agent | ZeroClaw | IronClaw | CoPaw | NanoBot |
|-----------|----------|--------------|----------|----------|-------|---------|
| **Core language** | TypeScript | Python + Rust | Rust | Rust | Python | TypeScript |
| **Target user** | General power user | Developer + plug-in | Enterprise / compliance | AI researcher | Chinese market | Chat platform user |
| **Architecture** | Monolithic agent | Agent + MCP hybrid | SOP micro-agents | Reborn (modular) | SDK + app plugins | Gateway + providers |
| **Memory system** | Active Mem + Codex | Plugin hooks | Persistent + typed | Workspace-based | ReMe Light + Dream | Basic session |
| **Differentiator** | Integration breadth | Release velocity | Governance/SOP | Reborn rewrite | Model ecosystem (QWen) | Channel depth (QQ/WeChat) |
| **Weakness** | Reliability regressions | Cron/stability gaps | Windows gap | Post-migration bugs | Reasoning bugs | Plaintext secrets |
| **Community maturity** | Mature, reference | Hyper-growth | Early professional | Research spin-out | Regional strong | Niche strong |

**Key takeaway**: No single project dominates all dimensions. OpenClaw leads in breadth; Hermes in pace; ZeroClaw in architecture; CoPaw in Asian market fit. The ecosystem is fragmenting by use case rather than consolidating.

---

## 6. Community Momentum & Maturity

**Tier 1: Hyper-active (50+ PRs/day, multiple releases/month)**
- **OpenClaw** — Reference project, massive but struggling with bug debt
- **Hermes Agent** — Fastest feature shipping (v0.19.0 just dropped, ~450 contributors)
- **ZeroClaw** — Pre-v0.9.0 push with coordinated bug bash and RFC process

**Tier 2: Very Active (20-50 PRs/day, stable releases quarterly)**
- **IronClaw** — Post-Reborn migration, stabilizing after v1 deletion
- **CoPaw** — Rapid feature addition (Creator app, browser SDK, pawapp SDK)
- **NanoBot** — Quietly productive, focusing on bug fixes and deployment UX

**Tier 3: Moderate (10-20 PRs/day, occasional releases)**
- **PicoClaw** — Small but responsive community, good triage speed
- **NanoClaw** — Security-focused sprint, low feature velocity

**Tier 4: Low / Dormant (0 PRs/day)**
- **LobsterAI** — Polish/maintenance only, likely corporate-supported
- **TinyClaw, Moltis, ZeptoClaw** — Effectively stalled

**Rapid iteration signal**: Hermes Agent closed 3,300 issues since previous release—a 3:1 closure-to-opening ratio that demonstrates exceptional triage discipline. ZeroClaw's RFC process (#6808) for workflow automation is the most mature governance model in the ecosystem.

---

## 7. Trend Signals

**For AI agent developers, extracted from community demand:**

1. **Reliability over features**: Every project with declining user satisfaction (OpenClaw, CoPaw) has P1 bugs around message loss or loops. The market is signaling that "dumb but reliable" beats "smart but flaky." Agent developers should prioritize idempotent message delivery, crash recovery, and predictable session semantics over new tool integrations.

2. **Local model readiness is a competitive differentiator**: NanoBot's 15-comment issue on Ollama caching ("60 seconds per turn") and PicoClaw's Anthropic cache breakpoints signal that provider-agnostic prompt caching is table stakes. Projects that optimize for local inference (IronClaw's Rust core, ZeroClaw's streaming retry) will win developers deploying on-premise.

3. **Security is moving left**: Three projects (NanoClaw, ZeroClaw, NanoBot) had critical security bugs reported this week alone—RBAC escalation, plaintext secrets, and privilege bypass. The community is no longer tolerating security debt; agent developers must ship with least-privilege defaults and secrets management baked in, not bolted on.

4. **Cross-platform session continuity is the new "must-have"**: Users are demanding that conversations started on Telegram continue in the Desktop app, and that CLI-session context is available in WebUI. OpenClaw, Hermes, and IronClaw all have active issues on this—it's the ecosystem's top user experience gap.

5. **Multi-agent orchestration is maturing**: CoPaw's subagent polling bugs (#4873) and ZeroClaw's SOP micro-agents represent two poles of a design tension—tightly-coupled subagents vs. loosely-coupled workflows. The industry hasn't converged, but the discussion is shifting from "should agents delegate?" to "how do we delegate safely?"

6. **Tool token overhead is a cost crisis**: Hermes users report ~14K tokens per turn for tool schemas; CoPaw users complain about 22 built-in tools burning 8-10K tokens. Hybrid tool pre-selection (Hermes #13332) and customizable tool descriptions (CoPaw #6286) are early solutions. Agent developers shipping to production should prioritize tool set optimization as a cost-reduction lever.

---

*Report generated from community digest data collected 2026-07-21. All issue/PR references link to respective GitHub repositories.*

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-07-21

## 1. Today’s Overview

The project saw significant activity over the past 24 hours: 6 issues were updated (4 open, 2 closed) and **29 pull requests** were updated (17 open, 12 merged/closed). The high PR throughput indicates focused development efforts on bug fixes, stability improvements, and security hardening. No new releases were published today. Community engagement is moderate, with one issue accumulating 15 comments and several security- and performance-related discussions drawing attention. Overall project health is strong, though a few critical bugs (endless loops, plaintext secret storage) remain unaddressed.

## 2. Releases

No new releases or version tags were created today.

## 3. Project Progress (Merged/Closed PRs)

Twelve PRs were merged or closed during the last 24 hours, covering a wide range of improvements:

- **bug/fix:**  
  - [#5004](HKUDS/nanobot/PR/5004) – tolerate `EINVAL` when syncing session directory on unsupported filesystems.  
  - [#5008](HKUDS/nanobot/PR/5008) – preserve all images when merging consecutive multimodal user turns (fixes album/multi-image dropout).  
  - [#4768](HKUDS/nanobot/PR/4768) – add exponential backoff to QQ WebSocket reconnect loop (fixes excessive error logs).  
  - [#4982](HKUDS/nanobot/PR/4982) – fix infinite loop in `FeishuChannel._fallback_text_chunks` when limit ≤ 0.  
  - [#4981](HKUDS/nanobot/PR/4981) – fix infinite loop in `_split_telegram_markdown` when `max_len` ≤ 0.  
  - [#4998](HKUDS/nanobot/PR/4998) – document Ollama prompt-cache diagnostics (tool prompt reuse guidance).

- **refactor/infrastructure:**  
  - [#4993](HKUDS/nanobot/PR/4993) – unify internal turn lifecycle (merge subagent handling into single state machine).  
  - [#4937](HKUDS/nanobot/PR/4937) – add one-click deploy to Render via blueprint.

- **CI/CD & documentation:**  
  - [#5010](HKUDS/nanobot/PR/5010) – recommend env-var references over plaintext API keys in SECURITY.md (documentation only, not code change).  
  - [#5007](HKUDS/nanobot/PR/5007) – add Dokploy one-click deploy template (open, not yet merged).  
  - [#4767](HKUDS/nanobot/PR/4767) – closed issue (QQ reconnect loop) resolved by #4768.

Key features advanced include: guarded tool gateway for channels ([#5006](HKUDS/nanobot/PR/5006)), Feishu group policy listen mode ([#5009](HKUDS/nanobot/PR/5009)), and scoped `/tmp` cleanup commands ([#5005](HKUDS/nanobot/PR/5005)) – all still open but show pipeline growth.

## 4. Community Hot Topics

Most active items by comments/reactions:

- **Issue [#4867](HKUDS/nanobot/Issue/4867)** [CLOSED] – “Preserve exact prompt prefix to enable caching in Ollama”  
  *15 comments.* Users report an extra **60 seconds per turn** with Ollama due to prompt prefix truncation, making the system “totally unusable” with local models. The discussion indicates a strong demand for provider-level prompt caching support.

- **Issue [#4864](HKUDS/nanobot/Issue/4864)** [OPEN] – “Endless loop for `<tool_call> <function=complete_goal>`”  
  *4 comments, 1 reaction.* Reproducer shows a gateway parsing error where JSON parameters become bare strings, causing infinite retries. The bug is recent and likely introduced by a serialization change.

- **Issue [#5000](HKUDS/nanobot/Issue/5000)** [OPEN] – “Proposal: evolve the current subagent system toward multi-agent collaboration”  
  *1 comment* (from author). A feature-rich proposal arguing the current subagent system is too limited for true multi-agent patterns (no shared state, persistent identities). This could become a major roadmap item if maintainers engage.

- **PR [#4954](HKUDS/nanobot/PR/4954)** [OPEN] – “fix(webui): keep late subagent turns visible”  
  *No comment count listed but high activity (multiple updates).* Addresses WebUI disappearance of subagent results.

## 5. Bugs & Stability

**Ranked by severity:**

| Severity | Issue / PR | Description | Status | Related Fix PR |
|----------|------------|-------------|--------|----------------|
| **Critical** | [#4864](HKUDS/nanobot/Issue/4864) | Endless loop on `complete_goal` due to parameter parsing regression | Open | Not yet |
| **High** | [#4803](HKUDS/nanobot/Issue/4803) | API keys and channel tokens stored as plaintext in `config.json` | Open (1 comment, no assignee) | [#5010](HKUDS/nanobot/PR/5010) (docs only, no code fix) |
| **High** | [#4767](HKUDS/nanobot/Issue/4767) | QQ channel WebSocket reconnect flood (fixed via backoff) | Closed | [#4768](HKUDS/nanobot/PR/4768) |
| **Medium** | [#4988](HKUDS/nanobot/PR/4988) | Background turns emitting `EMPTY_FINAL_RESPONSE_MESSAGE` incorrectly | Open fix PR | – |
| **Medium** | [#4982](HKUDS/nanobot/Issue/4982) | Feishu text split hang when limit ≤ 0 | Closed | [#4982](HKUDS/nanobot/PR/4982) |
| **Medium** | [#4981](HKUDS/nanobot/Issue/4981) | Telegram markdown split hang when `max_len` ≤ 0 | Closed | [#4981](HKUDS/nanobot/PR/4981) |
| **Low** | [#5004](HKUDS/nanobot/PR/5004) | Directory fsync failure on unsupported filesystems | Merged | – |

The **security** issue [#4803](HKUDS/nanobot/Issue/4803) remains the most concerning unaddressed bug; the only related PR ([#5010](HKUDS/nanobot/PR/5010)) merely updates documentation rather than fixing the code. Developers should prioritise a code-level secret encryption or env-var substitution mechanism.

## 6. Feature Requests & Roadmap Signals

- **Prompt caching support** ([#4867](HKUDS/nanobot/Issue/4867)) – already closed with an acknowledgement that exact prefix preservation is needed. Likely to appear in next release as a provider-level feature.
- **Multi-agent collaboration** ([#5000](HKUDS/nanobot/Issue/5000)) – a comprehensive proposal for persistent subagent identities and shared state. If maintainers accept the concept, it could shape the architecture for v2.x.
- **Dokploy one-click deploy** ([#1503](HKUDS/nanobot/Issue/1503), PR [#5007](HKUDS/nanobot/PR/5007)) – a long-standing request now has an implementation PR under review. High probability of merging soon.
- **Guarded tool gateway for channels** ([#5006](HKUDS/nanobot/PR/5006) – new feature to let channel plugins securely execute tool calls under the same workspace context. Expected to become an opt-in protocol in next minor release.
- **Feishu group policy listen** ([#5009](HKUDS/nanobot/PR/5009)) – enables context accumulation without LLM turn until @mention. Already submitted, likely to merge.
- **Telegram custom Bot API base URL** ([#4919](HKUDS/nanobot/PR/4919)) – supports self-hosted or enterprise gateways. A targeted but valuable addition for enterprise deployments.

**Prediction:** The next minor release (v0.x) will likely include prompt caching diagnostics, Dokploy template, guarded tool gateway, and the Feishu/Telegram enhancements. Multi-agent collaboration is a longer-term roadmap item.

## 7. User Feedback Summary

- **Pain points expressed:**
  - *Ollama performance* – “60 seconds per turn, totally unusable” (Issue #4867). The community strongly desires prompt caching for local models.
  - *Endless retry loops* – `complete_goal` tool call stuck in infinite loop due to JSON parsing regression (#4864). Frustration with gateway reliability.
  - *Security* – Plaintext API keys in config file (#4803) – a red flag for production users. Only documentation improvement offered so far.
  - *WebUI subagent visibility* – Subagent results sometimes invisible or delayed (#4954, #4992). Multiple PRs in progress to address.
  - *Channel-specific issues* – QQ reconnect spam (fixed), Feishu/Telegram split hangs (fixed), all appreciated.

- **Satisfaction indicators:**
  - High PR merge rate (12 in 24h) demonstrates active maintenance.
  - One-click deploy templates (Render, Dokploy) are welcomed by non-technical users.
  - Many fixes (QQ backoff, split hangs) were submitted and merged within days of issue reports.

- **Overall sentiment:** Mixed – users appreciate rapid bug fixes but are frustrated by persistent performance regressions and the plaintext security gap. The community’s enthusiasm for new features (multi-agent, Dokploy) is balanced by calls for stability.

## 8. Backlog Watch

Items lacking maintainer attention:

| Issue/PR | Created | Last Update | Reason for Concern |
|----------|---------|-------------|--------------------|
| [#4803](HKUDS/nanobot/Issue/4803) – API keys plaintext | 2026-07-06 | 2026-07-20 (1 comment) | High-severity security bug with no code fix assigned. Documentation-only PR [#5010](HKUDS/nanobot/PR/5010) does not resolve the core issue. |
| [#1503](HKUDS/nanobot/Issue/1503) – Dokploy template request | 2026-03-04 | 2026-07-20 (1 comment) | Stale for 4.5 months; now has a pending PR [#5007](HKUDS/nanobot/PR/5007) that needs maintainer review. |
| [#5000](HKUDS/nanobot/Issue/5000) – Multi-agent proposal | 2026-07-20 | 2026-07-20 (1 comment) | New but no maintainer response yet. High potential impact, should be triaged. |
| [#4954](HKUDS/nanobot/PR/4954) – WebUI subagent visibility | 2026-07-16 | 2026-07-20 | Open for 5 days with no merge or reviewer feedback. Competing PR [#4992](HKUDS/nanobot/PR/4992) also covers similar ground; coordination needed. |
| [#4919](HKUDS/nanobot/PR/4919) – Telegram custom API base | 2026-07-14 | 2026-07-20 | 7 days open, no reviewer comments despite being a clean feature. |

**Recommendation:** Maintainers should prioritise code-level secret management for [#4803], respond to the multi-agent proposal [#5000], and review/merge the Dokploy template [#5007] and WebUI subagent PRs [#4954]/[#4992] to avoid duplicate effort.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-07-21

## 1. Today's Overview

The project is experiencing **extremely high activity** with 50 issues and 50 pull requests updated in the last 24 hours — a clear sign of a vibrant, rapidly evolving codebase. The release of **v0.19.0 (The Quicksilver Release)** on July 20 marks a major milestone, featuring ~2,245 commits, 1,065 merged PRs, and contributions from 450+ community members. A massive 3,300 issues were closed since v0.18.0, reflecting aggressive issue triage and feature completion. Despite the volume, the backlog remains healthy: **43 open issues** and **46 open PRs** suggest the maintainers are keeping pace with community input while pushing forward significant architectural changes.

---

## 2. Releases

### v2026.7.20 — Hermes Agent v0.19.0 (Quicksilver Release)

| Metric | Value |
|--------|-------|
| Release Date | July 20, 2026 |
| Commits since v0.18.0 | ~2,245 |
| Merged PRs since v0.18.0 | ~1,065 |
| Files changed | ~2,465 |
| Insertions | ~300,000 |
| Deletions | ~36,000 |
| Issues closed | ~3,300 |
| Community contributors | 450+ |

**Breaking Changes & Migration Notes:**
- No explicit breaking changes are documented in the release note, but the sheer number of file changes (~2,465) implies significant refactoring. Users upgrading from v0.18.x should expect to re-run `hermes doctor` and validate custom configurations.
- The release note includes the cryptic line *“Hermes is the mess”* — likely a tongue-in-cheek acknowledgment of the rapid pace of change. Plugin developers should review the new lifecycle‑event catalog (#64231) and hook taxonomy, which may affect existing plugins.

---

## 3. Project Progress

Today, **4 pull requests were merged or closed** and **7 issues were resolved** (based on the data overview). Notable closed items include:

- **#68000** — *Doctor reports runtime-supported root config keys as ignored* — A config validation bug in `hermes doctor` has been fixed, improving reliability for users with non‑default settings.
- **#38017** — *fix(mcp): pin optional catalog installs before bootstrap* — A critical security fix (CVSS 9.6) that prevents mutable catalog references from being installed during MCP bootstrap. Merged today after a follow‑up PR (#38018) added runtime enforcement.
- **#53382** — *here-now skill uses invalid frontmatter name 'here.now'* — A skill validator patch that ensures skill names conform to `^[a-z0-9-]+$` regex.
- **#66611** — *Desktop "Already up to date" overlay close button unresponsive* — A UI bug in the Electron app has been resolved, improving user experience on update‑check dialogs.
- **#68301** — *Native session bridging: mirror one conversation across surfaces* — Closed as duplicate; the feature is already tracked under the broader cross‑platform session context sharing (#4335).

These closures demonstrate active issue triage and steady improvement in security, config validation, and desktop usability.

---

## 4. Community Hot Topics

The most engaged issues and PRs (by comment count and reactions) reveal the community’s top concerns:

### Issues

| Issue | Title | Comments | 👍 | Analysis |
|-------|-------|----------|----|----------|
| [#13332](https://github.com/NousResearch/hermes-agent/issues/13332) | Feature: Hybrid Tool Pre-Selection (Semantic + Keyword) | 8 | 4 | Users are struggling with token overhead from full tool schemas (~14,000 tokens). Request for RAG‑style schema injection to reduce cost without extra LLM calls. High interest. |
| [#4335](https://github.com/NousResearch/hermes-agent/issues/4335) | Feature: Cross-platform session context sharing (CLI ↔ Telegram) | 8 | 2 | A long‑standing request (since March) for unified conversation history across platforms. The duplicate #68301 was closed, but this remains open. |
| [#2788](https://github.com/NousResearch/hermes-agent/issues/2788) | [Bug]: Cron jobs never run or fail silently | 6 | 0 | A persistent cron reliability issue that frustrates automation users. No fix has been merged yet. |
| [#64900](https://github.com/NousResearch/hermes-agent/issues/64900) | [Feature]: Allow plugins to extend send_message with platform‑specific fields | 5 | 0 | Plugin developers need extensibility for platform‑specific features (e.g., voice selection, metadata). |
| [#64231](https://github.com/NousResearch/hermes-agent/issues/64231) | chore: lifecycle-event catalog, hook taxonomy, batch disposition | 5 | 0 | A maintainer‑driven issue to standardize plugin hooks; expected to unblock many pending hook PRs. |

### Pull Requests

| PR | Title | Comments | Analysis |
|----|-------|----------|----------|
| [#65217](https://github.com/NousResearch/hermes-agent/pull/65217) | fix(computer_use): guard json.loads in _json_out against malformed output | undefined | A defensive fix for the `cua-driver` integration, preventing crashes on malformed JSON. |
| [#68357](https://github.com/NousResearch/hermes-agent/pull/68357) | feat(tui): show the plan catalog in /subscription on Free | undefined | Improves the Free‑tier user experience by displaying available plans on the `/subscription` command. |
| [#68356](https://github.com/NousResearch/hermes-agent/pull/68356) | feat(desktop): add named gateway connections | undefined | Adds ability to manage multiple remote gateway connections in the Desktop app — a notable UX enhancement. |
| [#37969](https://github.com/NousResearch/hermes-agent/pull/37969) | fix(cron): isolate gateway approvals from environment pollution | undefined | A security fix preventing cron session state from leaking into interactive sessions. |

The community is clearly focused on **tool efficiency**, **cross‑platform consistency**, and **plugin extensibility** — themes that are likely to drive the next release.

---

## 5. Bugs & Stability

Several bugs were reported today, ranked by severity:

### P1 (Critical)

| Issue | Title | Details | Fix PR? |
|-------|-------|---------|---------|
| [#68311](https://github.com/NousResearch/hermes-agent/issues/68311) | Every published sdist (0.13.0–0.19.0) ships a test that runs `os.kill(-1, SIGTERM)` | A canary test in the sdist can kill the user’s entire session if run directly (e.g., `pytest`). Affects all releases since 0.13.0. **Urgent fix needed.** | No PR linked yet. |

### P2 (High)

| Issue | Title | Details | Fix PR? |
|-------|-------|---------|---------|
| [#68342](https://github.com/NousResearch/hermes-agent/issues/68342) | Desktop model selector sticky manual override diverges from config.yaml | No visual indicator when localStorage overrides config — can lead to unexpected model picks. | No |
| [#68339](https://github.com/NousResearch/hermes-agent/issues/68339) | Mixed-batch tool execution interacts with TOOL_USE_ENFORCEMENT_GUIDANCE | Early‑session behavior shift observed in sessions with enforcement‑gated models. | No |
| [#68192](https://github.com/NousResearch/hermes-agent/issues/68192) | Desktop: new chat in non‑git Project fails with 'not a git repository' | Error prevents creating chats in projects that are not git repos. | No |
| [#68261](https://github.com/NousResearch/hermes-agent/issues/68261) | TUI skill credential prompts can be routed to the wrong session | Process‑global callback can deliver prompts to the wrong TUI session. | No |

### P3 (Moderate)

| Issue | Title | Details |
|-------|-------|---------|
| [#68338](https://github.com/NousResearch/hermes-agent/issues/68338) | Dependency conflict: cryptography version mismatch | `hermes-agent 0.19.0` requires `cryptography==46.0.7` but newer 49.0.0 is installed. |

**Notable:** The P1 issue (#68311) is a critical regression affecting all released versions — it should be prioritized for a hotfix release.

---

## 6. Feature Requests & Roadmap Signals

The following user‑requested features are likely candidates for **v0.20.0** (or an imminent minor release):

| Feature | Issue | Likelihood | Rationale |
|---------|-------|------------|-----------|
| **Hybrid Tool Pre-Selection** | [#13332](https://github.com/NousResearch/hermes-agent/issues/13332) | High | High community interest (8 comments, 4 👍) and aligns with the existing `tool_search` feature from v0.18.0. |
| **Cross‑platform session sharing** | [#4335](https://github.com/NousResearch/hermes-agent/issues/4335) | High | Duplicate #68301 was closed today, consolidating discussion into this main issue. Expect a design decision soon. |
| **Per‑MCP‑server tool injection control** | [#66736](https://github.com/NousResearch/hermes-agent/issues/66736) | Medium | Builds on the MCP tool_search threshold; provides granular control. A `needs‑decision` label suggests maintainer discussion is ongoing. |
| **Configurable keybindings** | [#4256](https://github.com/NousResearch/hermes-agent/issues/4256) | Medium | 6 👍 votes and a `sweeper:risk‑compatibility` label indicate maintainer awareness. |
| **Plugin lifecycle hooks taxonomy** | [#64231](https://github.com/NousResearch/hermes-agent/issues/64231) | High | This is a maintainer‑filed issue intended to unblock many pending hook PRs. Likely to land in v0.20.0. |
| **Community plugin index** | [#64181](https://github.com/NousResearch/hermes-agent/issues/64181) | Medium | A foundation for plugin discovery; parked as core‑side substrate without social features. |
| **MCP Server Management CLI** | [#690](https://github.com/NousResearch/hermes-agent/issues/690) | Low (yet high interest) | Open since March with 4 comments; may be deferred in favor of plugin‑based MCP management. |

---

## 7. User Feedback Summary

**Pain Points:**

- **Token overhead** — Users report ~14,000 tokens consumed by full tool schemas on every API call. The hybrid pre‑selection proposal (#13332) is the top‑voted feature.
- **Cron unreliability** — Issue #2788 (open since March) describes cron jobs failing silently with no logs. Multiple PRs attempt to fix cron session state isolation (#37969, #58663), but the root cause remains elusive.
- **BlueBubbles double processing** — #34372 documents every iMessage being processed twice due to `updated-message` webhook registration. Affects users on macOS/iMessage bridges.
- **Slack integration setup friction** — #3944 reports that the standard install script fails to install `slack-bolt`, requiring a manual `pip install hermes-agent[slack]`.
- **TUI keybindings** — Hardcoded keybindings conflict with tmux/screen (#4256, 6 👍). Users want configurable keymaps.

**Use Cases:**
- Multi‑platform power users (CLI + Telegram + Desktop) want seamless session continuity (#4335).
- Plugin developers need a standard hook system to avoid core patches (#64900, #64231).
- MCP users want fine‑grained tool injection control for low‑frequency servers (#66736).

**Satisfaction Signals:**
- The rapid pace of releases (v0.19.0 just out) and aggressive issue closure (~3,300 closed) indicate a responsive team.
- Community contributors are active: 450+ contributors since last release, and multiple PRs from newcomers (e.g., #68314, #68356) are being merged.

---

## 8. Backlog Watch

The following issues and PRs have been open for an extended period and require maintainer attention:

| Item | Title | Created | Last Update | Comments | Why It Matters |
|------|-------|---------|-------------|----------|----------------|
| [#690](https://github.com/NousResearch/hermes-agent/issues/690) | Feature: MCP Server Management CLI | 2026-03-08 | 2026-07-21 | 4 | MCP servers are a core feature; lack of management CLI forces users to manually edit YAML. |
| [#2788](https://github.com/NousResearch/hermes-agent/issues/2788) | [Bug]: Cron jobs never run or fail silently | 2026-03-24 | 2026-07-20 | 6 | Long‑standing reliability issue; multiple related PRs (#37969, #58663) remain open. |
| [#4335](https://github.com/NousResearch/hermes-agent/issues/4335) | Feature: Cross‑platform session sharing | 2026-03-31 | 2026-07-21 | 8 | Duplicate #68301 was closed today, but the main issue has no assignee or milestone. |
| [#2228](https://github.com/NousResearch/hermes-agent/issues/2228) | bug: system error messages injected with dynamic role | 2026-03-20 | 2026-07-20 | 3 | Introduces potential conversation context corruption; no fix PR in sight. |
| [#2513](https://github.com/NousResearch/hermes-agent/issues/2513) | [Bug]: Custom providers lack context length auto‑detection | 2026-03-22 | 2026-07-20 | 3 | Poor UX for custom provider users; `/model` command fails to report detected context length. |

**Recommendation:** The maintainers should assign milestones or labels (e.g., `v0.20.0`) to these aging items to prevent further stagnation. The **P1 sdist bug (#68311)** should be patched immediately as a hotfix.

---

*This digest was generated from GitHub data retrieved on 2026‑07‑21. All links point to the NousResearch/hermes-agent repository.*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-07-21

## 1. Today's Overview

Activity over the past 24 hours has been moderate, with 10 issues and 10 PRs updated. The majority of issue updates are closures (6 closed), suggesting steady triage momentum. One critical regression in the Antigravity provider (INVALID_ARGUMENT on `main`) was reported and closed within the same day, indicating responsive debugging. On the PR side, 5 were merged/closed, including a notable tool‑fix PR (#3277) that addresses deferred‑tool visibility and TTL expiry. Several stale items have been re‑touched by the bot, but the project maintains a healthy balance of incoming bug reports and community feature contributions. No new releases were cut.

## 2. Releases

None.

## 3. Project Progress

**Merged/closed PRs today:**

- **[#3277](https://github.com/sipeed/picoclaw/pull/3277)** — **fix(tools):** healing of deferred‑tool visibility, sliding TTL for tool promotions, and an SSE tool‑call index fix. This resolves a persistent issue where models would attempt to call tools that had silently disappeared from the request.
- **[#3192](https://github.com/sipeed/picoclaw/pull/3192)** — chore: bump goreleaser Dockerfiles from `alpine:3.21` to `alpine:3.23` for consistency with main Dockerfiles.
- **[#3191](https://github.com/sipeed/picoclaw/pull/3191)** — chore: remove duplicate `build/` entry in `.gitignore`.
- **[#276](https://github.com/sipeed/picoclaw/pull/276)** — docs: polish wording and consistency in `README.md`.
- **[#277](https://github.com/sipeed/picoclaw/pull/277)** — feat: update `make deps` logic to prevent unnecessary dependency version bumps.

**Closed issues today (notably):**

- **[#3274](https://github.com/sipeed/picoclaw/issues/3274)** — Antigravity provider `INVALID_ARGUMENT` — closed after a short discussion; likely fixed by #3277 or a config change.
- **[#3275](https://github.com/sipeed/picoclaw/issues/3275)** — `model_list` entry loses `api_keys` after config rewrites — closed with a fix.
- **[#3278](https://github.com/sipeed/picoclaw/issues/3278)** — Antigravity OAuth login blocked by Google policy — closed, though no fix details visible.
- **[#3231](https://github.com/sipeed/picoclaw/issues/3231)**, **[#3230](https://github.com/sipeed/picoclaw/issues/3230)**, **[#3229](https://github.com/sipeed/picoclaw/issues/3229)** — three stale items closed, likely considered addressed or superseded.

## 4. Community Hot Topics

- **[#3203](https://github.com/sipeed/picoclaw/issues/3203)** — *Matrix sync loop has no reconnection logic* (👍1, 3 comments). A user reports that the Matrix `/sync` long‑poll dies silently after any network disruption. The issue has been tagged `stale` but remains open; it reflects a real reliability pain point for Matrix‑based agents.

- **[#3182](https://github.com/sipeed/picoclaw/issues/3182)** — *[BUG] Android version* (4 comments) — A user cannot launch the service on Android and reports permission and path‑change failures. No maintainer response is visible; the issue has been open since June 26.

- **[#3229](https://github.com/sipeed/picoclaw/issues/3229)** — *Proposal: rolling conversation cache breakpoints for anthropic-messages* (2 comments) — A detailed proposal for caching conversation history per‑block, closed by the author but indicating strong interest in optimization for Anthropic provider users.

## 5. Bugs & Stability

| Severity | Issue | Status | Description |
|----------|-------|--------|-------------|
| **High** | [#3203](https://github.com/sipeed/picoclaw/issues/3203) | Open, stale | Matrix sync loop dies silently on network disruption; no automatic reconnection. |
| **High** | [#3182](https://github.com/sipeed/picoclaw/issues/3182) | Open | Android service launch failure, permission issues, unclear fix timeline. |
| **Medium** | [#3274](https://github.com/sipeed/picoclaw/issues/3274) | Closed | Antigravity provider `INVALID_ARGUMENT` regression on `main` — closed same day, likely fixed. |
| **Medium** | [#3275](https://github.com/sipeed/picoclaw/issues/3275) | Closed | `model_list` entry loses `api_keys` after config rewrites through Launcher WebUI — fixed. |
| **Low** | [#3278](https://github.com/sipeed/picoclaw/issues/3278) | Closed | Antigravity OAuth blocked by Google’s policy — closed with no visible resolution, may require re‑verification. |

Two high‑severity bugs remain open and unassigned. The rest have been addressed promptly.

## 6. Feature Requests & Roadmap Signals

- **[#3272](https://github.com/sipeed/picoclaw/issues/3272) / PR [#3273](https://github.com/sipeed/picoclaw/pull/3273)** — Japanese localization for WebUI and Launcher. PR #3273 is open with a full 968‑line translation. Likely to be merged soon.
- **[#3276](https://github.com/sipeed/picoclaw/issues/3276)** — Support for an externally‑managed gateway (systemd) and graceful handling of unknown channel types. Submitted by a headless server user; indicates a need for better production deployment ergonomics.
- **[PR #3270](https://github.com/sipeed/picoclaw/pull/3270)** — Adds DashScope TTS provider and WeChat audio file sending. A substantial new feature for Asian‑language users and WeChat integration.
- **[PR #3271](https://github.com/sipeed/picoclaw/pull/3271)** — Updates default model names across nine providers to July 2026 latest (`gpt-5.6-*`, Claude 5, etc.). Expected in next minor release.

The next version is likely to include Japanese i18n, updated model lists, DashScope TTS, and improvements to Launcher deployment flexibility.

## 7. User Feedback Summary

- **Android user** (#3182) expresses frustration: “Can’t launch service… have full permission… can’t change path from settings.” The issue has no response from maintainers.
- **Matrix user** (#3203) describes a **silent death** scenario that systemd cannot auto‑restart because the process stays alive. This is a critical reliability regression for anyone using Matrix channels.
- **Antigravity users** (#3274, #3278) experienced two distinct regressions in a single day — a `INVALID_ARGUMENT` error and an OAuth policy block. While both were closed quickly, the pattern suggests the Antigravity provider may need extra testing.
- **Configuration stability** (#3275) was praised? (no negative tone) but the bug where `api_keys` were dropped after a config rewrite was frustrating for the reporter.
- **Positive contributions**: The community is actively submitting high‑quality PRs (TTS, i18n, model updates, caching proposals), indicating strong engagement and satisfaction with the project’s direction.

## 8. Backlog Watch

The following items have been open for some time with no recent maintainer activity and may need attention:

- **[#3182](https://github.com/sipeed/picoclaw/issues/3182)** — *Android version bug* (open 25 days, 4 comments, no response). Android support is a common request; a maintainer acknowledgment or workaround would be valuable.
- **[#3203](https://github.com/sipeed/picoclaw/issues/3203)** — *Matrix sync reconnection* (open 19 days, 3 comments, tagged stale). Given that the reporter provides detailed reproduction steps and a systemd trick, this warrants a fix.
- **[PR #3254](https://github.com/sipeed/picoclaw/pull/3254)** — *fix(agent): prefer verbatim model matches* — open since July 13, no recent activity. A small but important improvement for model resolution correctness.
- **[PR #3251](https://github.com/sipeed/picoclaw/pull/3251)** — *fix(providers): capture prompt cache token usage in Anthropic* — open since July 12. Important for cost visibility; pending review.

These items represent the most pressing unaddressed concerns as of today.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

**Project Digest: NanoClaw**  
**Date:** 2026-07-21  
**Data source:** [github.com/nanocoai/nanoclaw](https://github.com/nanocoai/nanoclaw)  

---

## 1. Today’s Overview

The project saw **high activity** over the past 24 hours, with **6 new issues** (all open) and **20 pull requests updated** (14 open, 6 merged/closed). A clear focus emerged on **security hardening of the role‑based access control (RBAC) system** and **fixing attachment handling across channels**. No new releases were cut. The six closed PRs include improvements to the container image (caldav‑MCP), WhatsApp mention‑mode wiring, and Telegram adapter compatibility. Meanwhile, the issue tracker reveals several critical vulnerabilities – most notably the ability to revoke the last remaining owner – with dedicated fix PRs already in review.

---

## 2. Releases

*None.* No new versions or tags were published today.

---

## 3. Project Progress (Merged/Closed PRs)

Six pull requests were closed or merged in the last 24 hours:

| PR | Title | Type |
|----|-------|------|
| [#3110](https://github.com/nanocoai/nanoclaw/pull/3110) | feat(container): bake caldav-mcp into the agent image | Feature |
| [#3108](https://github.com/nanocoai/nanoclaw/pull/3108) | fix(chat-sdk-bridge): rehydrate inbound attachments when adapters carry no fetchData | Fix |
| [#3107](https://github.com/nanocoai/nanoclaw/pull/3107) | fix(add-whatsapp-cloud): copy the adoption module and document the row re-key | Fix |
| [#3087](https://github.com/nanocoai/nanoclaw/pull/3087) | fix(whatsapp): engage mention-mode wirings on typed @-mentions in groups | Fix |
| [#2642](https://github.com/nanocoai/nanoclaw/pull/2642) | fix(add-telegram): pin chat-adapter to 4.26.0 to match installed chat | Fix |
| [#1110](https://github.com/nanocoai/nanoclaw/pull/1110) | fix: update container-runtime tests to match implementation | Fix |

**Highlights**  
- **Container image** now pre‑installs a `caldav-mcp` server, enabling calendar‑related tools out of the box.  
- **Inbound attachment handling** was repaired for adapters (e.g., Telegram, iMessage) that do not provide a `fetchData()` URL; bytes are now properly rehydrated from the local store.  
- **WhatsApp** got two stability fixes: one corrects the mention‑mode activation in groups, the other resolves a migration gap (row re‑key) that could break existing installations.  
- **Telegram integration** now uses a pinned adapter version to avoid peer‑dependency conflicts.

---

## 4. Community Hot Topics

### Most active issues (by comments or reactions)

- **#3096** – [feat: Add /add-line skill for LINE Official Account channel support](https://github.com/nanocoai/nanoclaw/issues/3096)  
  *1 comment* – The only issue with user discussion. Author proposes adding LINE as a communication channel, citing its dominance in Japan, Taiwan, and Thailand. The associated PR [#2918](https://github.com/nanocoai/nanoclaw/pull/2918) (open) shows strong community interest.

- **#3105** – [[bug] whatsapp-cloud: upgrading an existing install strands its messaging_groups rows](https://github.com/nanocoai/nanoclaw/issues/3105)  
  *0 comments but high relevance* – Reports a data‑loss scenario on upgrade. Two companion PRs (#3106, #3107) address the migration gap, showing responsive maintainers.

### Most active PRs (by discussion or status)

- **#2918** (LINE channel) – continuous updates, still open.
- **#2459** (voice transcription) – long‑running feature PR, updated today but still pending review.

**Underlying needs**  
The community is pushing for **broader channel support** (LINE, Dial SMS/voice) and **better migration safety**. The security issues (#3100, #3099, #3098, #3097) generated four fix PRs in a single day, indicating that maintainers and contributors treat RBAC flaws as top priority.

---

## 5. Bugs & Stability

Five bugs were reported today, all still open. Four are security‑critical; one is a data‑loss risk.

### Ranked by severity

| Severity | Issue | Description | Fix PR exists? |
|----------|-------|-------------|----------------|
| **Critical** | [#3100](https://github.com/nanocoai/nanoclaw/issues/3100) | Revoking the last remaining owner is not prevented → loss of root of trust. | Yes – [#3104](https://github.com/nanocoai/nanoclaw/pull/3104) |
| **Critical** | [#3099](https://github.com/nanocoai/nanoclaw/issues/3099) | Approval routing can self‑approve a role change; privilege escalation possible. | Yes – [#3103](https://github.com/nanocoai/nanoclaw/pull/3103) |
| **High** | [#3097](https://github.com/nanocoai/nanoclaw/issues/3097) | `ncl roles grant --role admin` without `--group` silently grants **global** admin. | Yes – [#3101](https://github.com/nanocoai/nanoclaw/pull/3101) |
| **High** | [#3105](https://github.com/nanocoai/nanoclaw/issues/3105) | WhatsApp upgrade orphans `messaging_groups` rows, causing silent mute. | Yes – [#3106](https://github.com/nanocoai/nanoclaw/pull/3106) + [#3107](https://github.com/nanocoai/nanoclaw/pull/3107) (merged) |
| **Medium** | [#3098](https://github.com/nanocoai/nanoclaw/issues/3098) | Approval cards show raw command line instead of human‑readable effect. | Yes – [#3102](https://github.com/nanocoai/nanoclaw/pull/3102) |

**All five bugs already have fix PRs submitted**, reflecting a very responsive community and core team.

---

## 6. Feature Requests & Roadmap Signals

### New channel integrations

- **LINE Official Account** – Issue [#3096](https://github.com/nanocoai/nanoclaw/issues/3096) and PR [#2918](https://github.com/nanocoai/nanoclaw/pull/2918) (open, updated today).  
  *Predict for next release:* High likelihood, as the PR is mature and the author is active.

- **Dial (SMS + AI voice calls)** – PRs [#3050](https://github.com/nanocoai/nanoclaw/pull/3050) (channel picker) and [#3041](https://github.com/nanocoai/nanoclaw/pull/3041) (adapter).  
  *Predict for next release:* Possible if review completes; adds a unique phone‑based channel.

- **On‑device voice transcription** – PR [#2459](https://github.com/nanocoai/nanoclaw/pull/2459) (whisper.cpp).  
  *Predict:* Likely in a later release; has been open since May but received updates today.

### Documentation improvements

- PR [#3095](https://github.com/nanocoai/nanoclaw/pull/3095) – Branch maintenance guide rewrite.  
- PR [#2950](https://github.com/nanocoai/nanoclaw/pull/2950) – Traditional Chinese README.

These indicate a push to improve contributor onboarding and internationalization.

---

## 7. User Feedback Summary

**Pain points expressed in issues / PR discussions:**

1. **Channel gaps** – Users explicitly request LINE support for the East Asian market (#3096).  
2. **Upgrade fragility** – WhatsApp cloud bridge breaks on upgrade (#3105), leading to silent message loss.  
3. **RBAC usability & safety** – `admin` grants can be accidental (#3097), approval cards lack context (#3098), and the last owner can be locked out (#3100).  
4. **Attachment handling** – Inbound audio/voice notes on Telegram and iMessage were invisible to the agent (PRs #3108, #3109, #3044).

**Satisfaction indicators:**  
The team’s rapid creation of fix PRs (often within hours of an issue being filed) shows high responsiveness. Users like “glifocat” and “k‑fls” are contributing multiple fixes, a sign of a healthy contributor ecosystem.

---

## 8. Backlog Watch

The following items are open and **may need maintainer attention** due to age or lack of recent activity:

| Item | Age | Status |
|------|-----|--------|
| [PR #2459](https://github.com/nanocoai/nanoclaw/pull/2459) – Voice transcription skill (whisper.cpp) | 69 days (since 2026-05-13) | Last updated today, but no core‑team review comment visible. |
| [PR #2918](https://github.com/nanocoai/nanoclaw/pull/2918) – LINE channel adapter | 18 days (since 2026-07-03) | Updated today, still awaiting merge. Should be reviewed alongside the related issue #3096. |
| [PR #2950](https://github.com/nanocoai/nanoclaw/pull/2950) – Traditional Chinese README | 17 days (since 2026-07-04) | Documentation PR with no maintainer response. Could be merged quickly. |
| [PR #3044](https://github.com/nanocoai/nanoclaw/pull/3044) – Fix inbound attachments (fetchData) | 7 days (since 2026-07-14) | Partially addressed by #3108, but this PR may still be relevant. |

**Recommendation:** Prioritise review of the LINE channel PR (#2918) and the voice transcription PR (#2459) to unblock community contributions. The Traditional Chinese translation (#2950) is low effort and would improve accessibility.

---

*Digest generated from GitHub data captured on 2026-07-21. All links point to the [nanocoai/nanoclaw](https://github.com/nanocoai/nanoclaw) repository.*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest — 2026-07-21

## 1. Today’s Overview
Project activity is extremely low. No new issues have been created or updated in the past 24 hours, and no pull requests have been merged or closed. The only notable change is a single open pull request (#956) that updates the Alpine base image from 3.23 to 3.24 in the Docker images group; it was authored by Dependabot and last updated a day ago. No new releases have been published. This suggests a maintenance‑only period, likely with no active feature development or bugfixing underway.

## 2. Releases
*No new releases have been published since the last digest. The latest release remains unavailable in the provided data.*

## 3. Project Progress
- **Merged/closed PRs (today):** None.
- **Notable open PRs:**  
  - [#956 – `ci(deps): bump alpine from 3.23 to 3.24 in the docker-images group`](https://github.com/nullclaw/nullclaw/pull/956)  
    *Author:* dependabot[bot] · *Opened:* 2026-06-15 · *Updated:* 2026-07-20  
    *Status:* Open, no comments or reactions.  
    *Impact:* Routine dependency update — reduces technical debt in the Docker image layer without introducing new features or breaking changes.

No features have been advanced or bugs fixed in the last 24 hours.

## 4. Community Hot Topics
No issues or pull requests have attracted active discussion or reactions within the last day. The only open PR (#956) has zero comments and zero emoji reactions. The community appears to be inactive, or the project is in a quiet phase with no urgent topics.

## 5. Bugs & Stability
No bugs, crashes, or regressions have been reported or discussed in the last 24 hours. The project currently has no open issues. Stability status cannot be assessed from the available data; no fix PRs are underway.

## 6. Feature Requests & Roadmap Signals
No feature requests have been filed or discussed recently. Without any issue activity, it is not possible to predict which features might appear in the next version. The project roadmap remains opaque.

## 7. User Feedback Summary
There is no user feedback available for the reporting period. The absence of issues, comments, or reactions suggests either low user engagement or satisfaction with the current state (no complaints, but also no praise). No pain points or use‑case discussions have been surfaced.

## 8. Backlog Watch
No long‑unanswered issues or pull requests are present in the backlog. The only open PR (#956) has been open for over a month but has not received maintainer attention beyond automated updates. This may indicate a backlog of dependency updates that require manual review, but given the project’s current activity level, it does not appear to be a critical blocker.

---

**Overall Health:** Low activity with no signs of development, bugfixing, or community engagement. The project appears to be in a maintenance‑only or dormant state.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-07-21

## 1. Today's Overview
IronClaw saw intense activity with **43 issues updated** (40 open, 3 closed) and **50 PRs updated** (27 merged/closed) in the last 24 hours. The project is deep into a major architectural transition: **Tier B deletion of the v1 monolith (`src/`)** merged to `main` ([PR #6375](nearai/ironclaw PR #6375)), cutting production deployments over to the Reborn stack. A concurrent **release-fix branch** shipped `v1.0.0-rc.1` after resolving MSI bloat and codename issues ([PR #6383](nearai/ironclaw PR #6383)). No new releases were tagged today, but a `release` PR ([#5598](nearai/ironclaw PR #5598)) continues to accumulate changes for an upcoming release. The flurry of `bug_bash_P1/P2` issues (23 reported since July 17) signals a coordinated quality push before the v1-to-Reborn switchover.

## 2. Releases
**None.** No new releases were published in the last 24 hours.  
*(The release automation PR #5598 remains open, preparing `ironclaw_common` 0.5.0 and `ironclaw_skills` 0.4.0, both with breaking API changes.)*

## 3. Project Progress
The following PRs were **merged or closed** today (2026-07-21), representing significant forward momentum:

| PR | Title | Impact |
|----|-------|--------|
| [#6375](nearai/ironclaw PR #6375) | **refactor(tier-b): delete v1 legacy monolith (src/) and cut deploy over to Reborn** | **Milestone achievement** – removes the old `src/` binary, repoints Railway/GCP/CI to Reborn. Risk was high but has been merged. |
| [#6382](nearai/ironclaw PR #6382) | **refactor(turns): simplify filesystem_store** | Retired the dead blob store, deduplicated transition/commit code, decomposed 8k+ line files. Improves maintainability and crash-safety. |
| [#6383](nearai/ironclaw PR #6383) | **fix(release): strip "Reborn" codename from 1.0.0-rc.1 + fix MSI blocker** | Shipped the first release candidate after fixing CI and packaging issues. |
| [#6379](nearai/ironclaw PR #6379) | **fix(tier-b): repair post-merge red main** | Fixed CI (release-plz, replay-gate) that broke after the v1 deletion; restored green builds. |
| [#6378](nearai/ironclaw PR #6378) | **chore(runner): remove dead feature flags** | Trimmed `ironclaw_runner` feature flags from three to one, cleaning up after legacy removal. |
| [#6288](nearai/ironclaw PR #6288) | **chore(deps): bump everything-else group** | Bumped 32 dependencies (futures, agent-client-protocol, tokio, etc.) across the repo. |
| [#6186](nearai/ironclaw PR #6186) | **chore(deps): bump tokio-ecosystem group** | Updated tokio to 1.53.1, tokio-tungstenite to 0.29.0, and others. |

**Key features that advanced or were fixed:**
- **DeploymentConfig adoption** (#6274) – Track 1 (shrinking branching ratchet from 5→3) and Track 2 (relocating profile edge) started in open PRs [#6387](nearai/ironclaw PR #6387) and [#6388](nearai/ironclaw PR #6388).
- **Streaming retry resilience** – PR [#6376](nearai/ironclaw PR #6376) wires programmable mock LLM faults and retry logic.
- **Authorization policy consolidation** – PR [#6386](nearai/ironclaw PR #6386) makes `authorize()` the single site for all pre-flight policy, addressing security milestone §5.3.2/§9.

## 4. Community Hot Topics
The most active discussions (by comment count) reveal the community’s focus on **architectural simplification** and **critical bug fixes**:

- **#6274 – Finish DeploymentConfig as the main composition config** (4 comments)  
  *Link: [nearai/ironclaw Issue #6274](nearai/ironclaw Issue #6274)*  
  **Need:** Consolidating deployment branches (`local`, `production`, `docker`) into a single `DeploymentConfig` to reduce complexity. The high engagement reflects the project’s top priority: stabilising the Reborn composition layer.

- **#6190 – Multiple conflicting error messages for a single failed request** (4 comments)  
  *Link: [nearai/ironclaw Issue #6190](nearai/ironclaw Issue #6190)*  
  **Need:** Users are confused by overlapping error banners (streaming + model context limit). The underlying demand is for a unified, actionable error display.

- **#6189 – Retryable stream error leaves completed response in failed state** (4 comments)  
  *Link: [nearai/ironclaw Issue #6189](nearai/ironclaw Issue #6189)*  
  **Need:** False error banners after a successful response erode trust; users want clear “success” vs. “failure” signals.

- **#6369 – Tier B follow-up: gaps left by v1 deletion** (3 comments)  
  *Link: [nearai/ironclaw Issue #6369](nearai/ironclaw Issue #6369)*  
  **Need:** Tracking missing capabilities (Telegram channel, Wasm tooling, etc.) after the v1 monolith was removed. This is a community-consensus priority list.

- **#2277 – ACP-backed child thread backends for delegated agents** (2 comments, 1 👍)  
  *Link: [nearai/ironclaw Issue #2277](nearai/ironclaw Issue #2277)*  
  **Need:** Long-standing request for IronClaw to delegate work to external coding agents (Codex, Droid, OpenCode) via the Agent Client Protocol. This feature remains in scope but has not been prioritised yet.

## 5. Bugs & Stability
A coordinated **bug bash** (identifiable by `bug_bash_P1/P2` labels) uncovered **23 open bugs** in the last 24 hours. The most significant are ranked below by severity (P1 = critical, P2 = major). Only one bug has an associated fix PR today:

### P1 (Critical)
- **#6360 – Provider onboarding has no way to navigate back**  
  *Link: [nearai/ironclaw Issue #6360](nearai/ironclaw Issue #6360)*  
  **Impact:** Users cannot switch providers mid-onboarding; stuck state. No fix PR yet.

- **#6351 – Run fails with checkpoint unavailable/unreachable errors**  
  *Link: [nearai/ironclaw Issue #6351](nearai/ironclaw Issue #6351)*  
  **Impact:** Multi-tool requests fail before response. Likely infrastructure instability.

- **#6348 – Gmail extension automatically re-authorized after reinstall**  
  *Link: [nearai/ironclaw Issue #6348](nearai/ironclaw Issue #6348)*  
  **Impact:** Security vulnerability – OAuth consent bypassed. Requires immediate attention.

### P2 (Major)
- **#6190, #6189** – Conflicting error messages and false retryable errors (see section 4).
- **#6350 – Assistant unexpectedly switches response language**  
  *Link: [nearai/ironclaw Issue #6350](nearai/ironclaw Issue #6350)*  
  **Impact:** User writes in English, response in Ukrainian. Likely model prompt issue.
- **#6353 – Long assistant messages truncated without expansion**  
  *Link: [nearai/ironclaw Issue #6353](nearai/ironclaw Issue #6353)*  
  **Impact:** Lost content, poor UX for tables/reports.
- **#6352 – Streamed response replays in a loop after returning to page**  
  *Link: [nearai/ironclaw Issue #6352](nearai/ironclaw Issue #6352)*  
  **Impact:** Visual glitch, confusing and damaging to performance.
- **#6349 – Telegram chat history rendered inconsistently in WebUI**  
  *Link: [nearai/ironclaw Issue #6349](nearai/ironclaw Issue #6349)*  
  **Impact:** Cross-channel chat continuity is broken.

**Fixed issues today:** Two closed bugs – [#6178](nearai/ironclaw Issue #6178) (persistent error banner exposing raw API errors) and [#6179](nearai/ironclaw Issue #6179) (settings import falsely reported success). Also closed: [#6335](nearai/ironclaw Issue #6335) (host-authored capability remediation silently placeholder’d).

## 6. Feature Requests & Roadmap Signals
Several enhancement issues were filed today, many referencing earlier RFCs and design docs. These signal the next wave of Reborn-native features:

- **#6320 – IronHub extension install flow**  
  *Link: [nearai/ironclaw Issue #6320](nearai/ironclaw Issue #6320)*  
  **Signal:** Planned for Reborn CLI/workflow – discovery, install, configure, activate extensions with host-meditated credentials.

- **#6325 – Thread-scoped MCP sessions and programmatic MCP config**  
  *Link: [nearai/ironclaw Issue #6325](nearai/ironclaw Issue #6325)*  
  **Signal:** Scoping tools to threads/run contexts, building on #6244. Likely in next release.

- **#6324 – WebUI workspace redesign and chat-first onboarding**  
  *Link: [nearai/ironclaw Issue #6324](nearai/ironclaw Issue #6324)*  
  **Signal:** Aligning UI with Reborn product model; reference tracks #6162/#6163.

- **#6384 – Prioritized backlog for in-chat command coverage**  
  *Link: [nearai/ironclaw Issue #6384](nearai/ironclaw Issue #6384)*  
  **Signal:** Survey of missing Reborn commands created by sergeiest; no implementation yet, but planning is underway.

- **#6329 – Decompose extension_lifecycle.rs (8,789 lines)**  
  *Link: [nearai/ironclaw Issue #6329](nearai/ironclaw Issue #6329)*  
  **Signal:** Maintainability – a clear target for next refactor sprint.

**Predictions:** The `DeploymentConfig` finish (#6274) and authorization consolidation (#6386) are likely to land before the next release. The bug bash fixes will be cherry-picked into the `release-fix` branch for a quick patch. IronHub and MCP features may slip to v1.1.0.

## 7. User Feedback Summary
Real user pain points extracted from issues and PR descriptions:

- **Error handling confusion:** Multiple banners for one failure (#6190), false retryable errors (#6189) – users cannot trust the UI to tell them if their request succeeded.
- **Onboarding friction:** Inability to navigate back during provider setup (#6360), duplicate “Test connection” vs. “Fetch models” buttons (#6362) – new users hit dead ends.
- **Language inconsistency:** Assistant randomly generates responses in the wrong language (#6350) – a hard trust-breaker for non-English speakers.
- **Data loss and visual regressions:** Chat truncation (#6353), stream looping (#6352), broken Telegram history (#6349), viewport jumps (#6333) – degraded reading experience.
- **Security concerns:** Silent Gmail re-authorization (#6348) – requires immediate trust restoration.
- **Overall satisfaction:** High engagement on architecture improvements (many comments on #6274, #6369) suggests power users are pleased with the Reborn direction but frustrated by bugs.

## 8. Backlog Watch
Long-lingering important issues that still need maintainer attention:

- **#2277 – ACP-backed child thread backends** (opened 2026-04-10)  
  *Link: [nearai/ironclaw Issue #2277](nearai/ironclaw Issue #2277)*  
  **Status:** 2 comments, 1 👍. Has not been touched since July 14. This feature is core to IronClaw’s delegation story but is not yet resourced. With the v1 deletion complete, it may come into focus.

- **#5598 – Release PR** (opened 2026-07-03)  
  *Link: [nearai/ironclaw PR #5598](nearai/ironclaw PR #5598)*  
  **Status:** Open for 18 days with no merge. Contains breaking changes for two crates. The release-fix branch (#6383) was used instead, suggesting this PR may be superseded or deferred.

- **#5664 – Dependabot PR for actions group** (opened 2026-07-05)  
  *Link: [nearai/ironclaw PR #5664](nearai/ironclaw PR #5664)*  
  **Status:** 16 updates pending review. CI changes can block other PRs; merging is needed.

- **#6329 – Decompose extension_lifecycle.rs** (opened 2026-07-20)  
  *Link: [nearai/ironclaw Issue #6329](nearai/ironclaw Issue #6329)*  
  **Status:** No assigned owner or PR. This 8.7k-line file violates the architecture guideline; it’s a technical debt item that impacts maintainability.

- **#6347 – Slack instance-readiness lacks caller-level coverage** (opened 2026-07-20)  
  *Link: [nearai/ironclaw Issue #6347](nearai/ironclaw Issue #6347)*  
  **Status:** Only Google axis has coverage. Untested Slack activation could lead to production outages.

---

*Digest generated automatically from GitHub data. All links are to nearai/ironclaw.*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-07-21

## Today’s Overview
LobsterAI is in a high-velocity development window with 15 pull requests updated in the last 24 hours, 11 of which were merged or closed. No new issues were opened, and no releases were published, indicating a day dominated by polish and feature landing rather than bug discovery or shipping. The majority of merged work centers on three themes: the Cowork browser multi-annotation system, silent Windows update installation, and AI skin creation flow improvements. The project remains healthy, with core maintainers actively reviewing and merging contributions across renderer, main, and build areas. A small backlog of stale dependency upgrade PRs from dependabot continues to linger without maintainer response.

## Releases
No new releases today. The last release remains unlisted in the provided data.

## Project Progress
Eleven PRs were closed or merged today. Key advances include:

- **Cowork: Browser multi-annotation attachments** ([#2366](https://github.com/netease-youdao/LobsterAI/pull/2366)) — A major feature landing by liugang519: new browser annotation protocol, webview preload, screenshot asset storage IPC, batch annotation creation within the built-in browser, draft attachment support with structured context passed into Cowork message metadata and OpenClaw prompt. Includes design docs and Redux/runtime tests.
- **Silent Windows updates** ([#2368](https://github.com/netease-youdao/LobsterAI/pull/2368)) — NSIS installer now launches with `/S` via PowerShell Start-Process for silent elevation and auto-relaunch. Declined UAC (exit 1223) gets a localized error instead of a raw OS message.
- **Windows dist build channel entry points** ([#2367](https://github.com/netease-youdao/LobsterAI/pull/2367)) — New `dist-win-channel.cjs` and `dist-win-web.cjs` scripts to pass `keyfrom` and `web-installer` env vars explicitly per build, preventing environment leakage between builds.
- **AI skin creation flow** ([#2361](https://github.com/netease-youdao/LobsterAI/pull/2361)) — Persistent AI skin creation entry in Appearance settings with first-use onboarding, framework prompt placement, and cross-turn workflow support.
- **Config hot-reload via RPC ack** ([#2365](https://github.com/netease-youdao/LobsterAI/pull/2365)) — OpenClaw config hot-reload now delivered via RPC acknowledgment instead of file-based polling.
- **Cowork bug fixes**: scroll-jump prevention on session refresh ([#2364](https://github.com/netease-youdao/LobsterAI/pull/2364)), periodic IM message flicker fix ([#2363](https://github.com/netease-youdao/LobsterAI/pull/2363)).
- **Auth stability** ([#2360](https://github.com/netease-youdao/LobsterAI/pull/2360)) — Local callback server reused across login retries, with safe lifecycle diagnostics and regression tests.
- **Artifact panel layout stability** ([#2359](https://github.com/netease-youdao/LobsterAI/pull/2359)) — Stable keys for drag handles and content area prevent subtree rebuilds and flash on preview expand.
- **Cron UI fix** ([#2362](https://github.com/netease-youdao/LobsterAI/pull/2362)) — Unspecified cron UI bug fixed.
- **POPO IM connectivity validation** ([#1349](https://github.com/netease-youdao/LobsterAI/pull/1349) — closed after 3.5 months) — Real API validation for POPO appKey/appSecret instead of just non-empty field check.

## Community Hot Topics
No issues or PRs received explicit comments or reactions today. The most notable PRs by scope and author engagement:

- **Browser multi-annotation attachments ([#2366](https://github.com/netease-youdao/LobsterAI/pull/2366))** — The largest feature merged, touching renderer, docs, main, cowork, and artifacts areas. Signals strong user demand for richer browser-based annotation workflows.
- **AI skin creation ([#2361](https://github.com/netease-youdao/LobsterAI/pull/2361))** — Focus on persistent, guided creation flow suggests user friction on first-time skin customization.
- **POPO API validation ([#1349](https://github.com/netease-youdao/LobsterAI/pull/1349))** — Oldest closed PR today, addressing a long-standing user trust issue where invalid credentials would silently pass validation.

Underlying need: Users require accurate, non-misleading feedback from their tools (auth validation, silent installs, config reliability) and richer attachment/collaboration capabilities in the Cowork environment.

## Bugs & Stability
No new bugs were reported today. Bugs that were fixed:

- **Medium severity — IM message flicker** ([#2363](https://github.com/netease-youdao/LobsterAI/pull/2363)): Periodic flicker caused by mismatched reconciliation windows during gateway tail repair. Fix: compare matching history windows, preserve older messages.
- **Medium severity — Auth callback failure across retries** ([#2360](https://github.com/netease-youdao/LobsterAI/pull/2360)): Repeated or concurrent login attempts could fail. Fix: reuse active callback server, add diagnostics and tests.
- **Low severity — Artifact panel layout flash** ([#2359](https://github.com/netease-youdao/LobsterAI/pull/2359)): Preview expand caused subtree rebuilds and input area height instability. Fix: stable keys and synchronous layout updates.
- **Low severity — Session scroll jumps** ([#2364](https://github.com/netease-youdao/LobsterAI/pull/2364)): Refresh events not scoped by session ID causing unwanted scroll resets.
- **Low severity — Cron UI bug** ([#2362](https://github.com/netease-youdao/LobsterAI/pull/2362)): Unspecified but quickly fixed.

## Feature Requests & Roadmap Signals
No explicit feature requests were filed as issues today. However, the merged PRs signal roadmap priorities:

- **Cowork collaboration** continues to be the most active area, with the large browser annotation feature suggesting deeper in-browser editing and screenshot capabilities on the roadmap.
- **Windows installer experience** is being refined — silent update installation and cleaner build pipelines indicate an upcoming release targeting enterprise or automated deployment use cases.
- **AI skin customization** is receiving UX polish, suggesting the team plans to make skin creation a first-class, retained feature rather than a one-off experiment.

Likely next version items: Cowork multi-annotation with structured LLM prompting, streamlined Windows updates, and persistent AI skin design flows.

## User Feedback Summary
No direct user feedback (comments, reactions, or issues) was recorded in the last 24 hours. Inference from fix PRs:

- **Pain point**: Login retries could fail silently; users had inconsistent authentication experiences. (Fixed via [#2360](https://github.com/netease-youdao/LobsterAI/pull/2360))
- **Pain point**: POPO connectivity test gave false positives, eroding trust in configuration validation. (Fixed via [#1349](https://github.com/netease-youdao/LobsterAI/pull/1349))
- **Pain point**: Artifact preview panel caused layout jumps and flicker, disrupting read/input flow. (Fixed via [#2359](https://github.com/netease-youdao/LobsterAI/pull/2359))
- **Use case**: Users want to create annotations across multiple browser tabs/captures and have them structured for LLM consumption. (Addressed by [#2366](https://github.com/netease-youdao/LobsterAI/pull/2366))

## Backlog Watch
Three stale dependabot PRs remain open without maintainer response:

- **[#1277](https://github.com/netease-youdao/LobsterAI/pull/1277)** — `chore(deps-dev): bump the electron group across 1 directory with 2 updates` (last updated 2026-07-20, open since April 2). Requires review for Electron 40→43 and electron-builder update.
- **[#1282](https://github.com/netease-youdao/LobsterAI/pull/1282)** — `chore(deps): bump @headlessui/react from 1.7.19 to 2.2.9` (open since April 2). Major version jump may need compatibility testing.
- **[#1283](https://github.com/netease-youdao/LobsterAI/pull/1283)** — `chore(deps): bump react from 18.3.1 to 19.2.4` (open since April 2). Critical dependency with known breaking changes.
- **[#1284](https://github.com/netease-youdao/LobsterAI/pull/1284)** — `chore(deps): bump react-syntax-highlighter from 15.6.6 to 16.1.1` (open since April 2).

All four exceed 3.5 months of inactivity. The Electron, React, and HeadlessUI upgrades are high-impact and could cause regressions if merged without testing. Maintainers should triage these promptly to avoid accumulating technical debt and dependency drift.

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

# CoPaw Project Digest — 2026-07-21

## Today's Overview

The CoPaw (QwenPaw) project shows very high activity: **24 issues** and **41 pull requests** were updated in the last 24 hours, with **8 issues closed** and **10 PRs merged or closed**. No new releases were published. The community is actively reporting bugs around reasoning duplication, conversation loop problems, and token overhead, while core contributors are pushing forward major feature branches such as a unified browser SDK, a creator app plugin, and memory index maintenance enhancements. The project appears healthy but faces several critical bugs that are being addressed in parallel PRs.

## Releases

No new releases were published today. The last posted version is `v2.0.0.post3` (appearing in several issue reports).

## Project Progress

**10 pull requests were merged or closed today.** Notable merged/closed PRs include:

- **#6290** – `fix(local_models): adapt GGUF check to ModelScope SDK key change` (fixes local model download failures) [🔗](https://github.com/agentscope-ai/CoPaw/pull/6290)
- **#6150** – `feat(pawapp): add pawapp sdk and kanban app` (introduces a new plugin SDK and a sample app) [🔗](https://github.com/agentscope-ai/CoPaw/pull/6150)
- **#6235** – `feat(memory): enhance ReMe Light index maintenance stability and chunking` (moves index rebuild to explicit action, fixes concurrent write protection, adds randomized Dream scheduling) [🔗](https://github.com/agentscope-ai/CoPaw/pull/6235)
- **#6101** – `refactor: Inconsistent conversation reset lifecycle across agent modes` (cleans up gate/mode reset semantics) [🔗](https://github.com/agentscope-ai/CoPaw/pull/6101)

Several other PRs remain open but actively reviewed:

- **#6284** – Adds a full video creation workflow via the QwenPaw Creator app (plugin architecture) [🔗](https://github.com/agentscope-ai/CoPaw/pull/6284)
- **#6280** – Fixes duplicated reasoning across tool segments (directly addresses #6257 and #6282) [🔗](https://github.com/agentscope-ai/CoPaw/pull/6280)
- **#6276** – Unified browser SDK with control-plane/execution-plane split [🔗](https://github.com/agentscope-ai/CoPaw/pull/6276)

## Community Hot Topics

Most active issues by comment count:

1. **#6257** – “Multiple tool calls produce identical thinking output” (13 comments)  
   [🔗 Issue](https://github.com/agentscope-ai/CoPaw/issues/6257)  
   *Analysis:* A critical reasoning bug where all tool calls in one turn share the same thinking block. This affects reliability of multi-step agent tasks. A fix is already in review via PR #6280.

2. **#5961** – “v2.0.0版本循环执行的问题” (8 comments, closed)  
   [🔗 Issue](https://github.com/agentscope-ai/CoPaw/issues/5961)  
   *Analysis:* The agent enters an infinite write/delete loop when using qwen3.7-plus. Closed presumably after a hotfix, but indicates systemic conversation management issues.

3. **#4873** – “同时开两个subagent会导致主agent无限快速轮询” (5 comments)  
   [🔗 Issue](https://github.com/agentscope-ai/CoPaw/issues/4873)  
   *Analysis:* A long-standing concurrency bug (reported June 1) where two background subagents cause runaway polling and loss of interrupt ability from Feishu channel. Still open.

4. **#6282** – “Reasoning relay repeats the first thinking block across AgentScope 2 tool iterations” (1 comment, 1 👍)  
   [🔗 Issue](https://github.com/agentscope-ai/CoPaw/issues/6282)  
   *Analysis:* A closely related variant of #6257, affecting replayed reasoning when an AgentScope 2 assistant message contains multiple ReAct iterations. PR #6280 also targets this.

## Bugs & Stability

**High Severity**

- **Reasoning duplication bugs** – #6257 and #6282 both report that the assistant repeatedly emits the same thinking block for multiple tool calls. This is a fundamental correctness issue in the shared formatter wrapper. A fix exists in PR #6280 (under review).
- **Infinite polling with subagents** – #4873 remains open after 7 weeks, causing runaway API costs and inability to cancel from Feishu. No associated fix PR yet.
- **Desktop startup hang** – #6197 reports that QwenPaw Desktop (frozen binary) hangs indefinitely when `nvidia-smi` hangs. Affects Windows users with older drivers. No PR yet.

**Medium Severity**

- **Chat error `BadRequestError`** – #6255 reports random 400 errors during normal chat (OpenAI invalid parameter). Root cause unclear.
- **File name too long crash** – #6246 (closed) was fixed; `_saved_tool_refs` regex caused OSError in `recall_history`. PR #6235 may have addressed it.
- **Local model download failure** – #6288 (closed) was fixed today via PR #6290 (ModelScope SDK key change).
- **Memory digest confusion** – #6222 asks about the roles of MEMORY.md vs Dream-generated digests. No resolution yet.

**Low Severity**

- `use_dimensions` not exposed ( #6242 ), CSS prefix mismatch ( #5688 ), task tracking concurrency ambiguity ( #6273 ).

## Feature Requests & Roadmap Signals

**Likely to ship in next minor release:**

- **QwenPaw Creator app** (#6284) – a video/storyboard creation workflow plugin. Already in review.
- **AIOnly model provider** (#6268) – OpenAI-compatible aggregation of 190+ models. Easy to add.
- **Session grouping / folders** (#6287, #6289) – User demand is high; both issues received immediate comments. Expect a frontend PR soon.

**Longer-term roadmap signals:**

- **Windows desktop GUI automation** (#5187) – UIA + Tauri control mode (open since June 14).
- **Chrome extension plugin** (#6157) – pairs user’s Chrome with the unified browser SDK.
- **OMP workflow modes** (#5882) – five new agent modes (UltraQA, Ralph, etc.) as a bundle plugin.
- **Per-session model overrides** (#5992) – allows different LLMs per conversation (first-time contributor PR).
- **Human-in-the-loop tool** (#6274) – `ask_user_question` for risky/ambiguous requests.
- **Mobile web console** (#6281) – adaptation for phone use.

## User Feedback Summary

**Pain Points:**

- **Token waste** – #6286 (closed) noted 22 built-in tools consume 8k–10k tokens every request, most of which are rarely used. Users want customizable or disabled tool descriptions.
- **Looping behaviour** – #5961 (v2.0.0 write/delete loop) caused significant frustration; user reported “长时间也不能完成一个简单任务”.
- **Memory system confusion** – #6222 shows users are unclear on the relationship between MEMORY.md, daily memories, and Dream digests.
- **Inability to organize sessions** – #6289 and #6287 strongly request custom groups, tags, and the ability to hide default agents.
- **Missing real-time context** – #6283 asks for automatic timestamp injection so old sessions don’t confuse dates.

**Satisfaction Signals:**

- No negative sentiment spikes beyond bug reports.
- Community is actively contributing features (first-time-contributor PRs #5992, #6203).
- The plugin SDK (pawapp) and new app PRs suggest a healthy ecosystem desire.

## Backlog Watch

Items requiring maintainer attention, ranked by age and impact:

| Issue | Opened | Last Updated | Comments | Summary |
|-------|--------|--------------|----------|---------|
| [#4873](https://github.com/agentscope-ai/CoPaw/issues/4873) | 2026-06-01 | 2026-07-20 | 5 | Subagent infinite polling, no fix PR |
| [#5187](https://github.com/agentscope-ai/CoPaw/pull/5187) | 2026-06-14 | 2026-07-20 | - | Windows computer use PR, unreviewed for 5 weeks |
| [#5688](https://github.com/agentscope-ai/CoPaw/issues/5688) | 2026-07-01 | 2026-07-20 | 2 | CSS prefix mismatch (`ant-` vs `qwenpaw-`), possible styling breakage |
| [#5992](https://github.com/agentscope-ai/CoPaw/pull/5992) | 2026-07-12 | 2026-07-20 | - | Per-session model overrides PR, first-time contributor, no maintainer review yet |
| [#6197](https://github.com/agentscope-ai/CoPaw/issues/6197) | 2026-07-16 | 2026-07-20 | 2 | Desktop hang on startup (nvidia-smi) – no PR |
| [#6222](https://github.com/agentscope-ai/CoPaw/issues/6222) | 2026-07-17 | 2026-07-20 | 2 | Memory digest role clarification |
| [#6101](https://github.com/agentscope-ai/CoPaw/issues/6101) | 2026-07-14 | 2026-07-20 | 1 | (PR closed today, but root issues may remain) |

The project is moving quickly but the volume of open work is high. The reasoning duplication bugs are the most pressing correctness issue and should be merged as soon as #6280 passes review. The subagent polling bug (#4873) and the desktop hang (#6197) are blocking reliability for specific user groups.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

## ZeroClaw Project Digest — 2026-07-21

### 1. Today’s Overview
The ZeroClaw project remains highly active with **39 issues** and **50 pull requests** updated in the last 24 hours. Of those, **12 PRs were merged or closed** and **9 issues were resolved**, indicating steady progress toward the upcoming v0.9.0 milestone. No new releases were cut today, but the development pipeline is busy with multiple cross-cutting initiatives—SOP (Standard Operating Procedures) control-plane work, persistent memory parity, and provider refactoring. Community engagement is strong, with several long-running feature requests and RFCs gathering fresh discussion.

---

### 2. Releases
*None in the last 24 hours.*

---

### 3. Project Progress
Key PRs merged/closed today (from the top-20 list):

- **#9030** (closed) – `fix(sop): re-assemble the step agent’s policy on the live nested-step path` — Fixes a bug where nested SOP steps with a different agent could lose policy context.
- **#8900** (closed) – `feat(memory): typed memory classification and gated typed-facts extraction` — First implementation of typed memory kinds, building on the schema seam from #8570.
- **#8898** (closed) – `fix(memory): let durable global memories reach semantic recall across sessions` — Ensures global memories with embeddings are correctly recalled across sessions.
- **#8897** (closed) – `feat(memory): add an opt-in retrieval cache decorator over agent memory` — Adds a caching layer to reduce latency on repeated memory queries.

Other closed PRs from the broader set (not in top-20) include fixes for Windows startup (#9117), serial transport desynchronization (#9078), and history trimming (#8837).

---

### 4. Community Hot Topics

**Most commented issues:**

- **#6808** – *RFC: Work Lanes, Board Automation, and Label Cleanup* (14 comments) – A governance RFC now in rollout (accepted, milestone 0.8.3). Proposes a lighter manual overhead for maintainers.  
  https://github.com/zeroclaw-labs/zeroclaw/issues/6808

- **#7462** – *74 test failures on Windows* (10 comments) – Linux-only test commands, path semantics, and console encoding break the suite on Windows (S2). No CI coverage.  
  https://github.com/zeroclaw-labs/zeroclaw/issues/7462

- **#3566** – *A2A (Agent-to-Agent) Protocol Support* (9 comments, 7 👍) – Popular feature request to interoperate with other agent runtimes via the open A2A protocol. Open since March.  
  https://github.com/zeroclaw-labs/zeroclaw/issues/3566

- **#8891** – *Persistent memory tracker* (6 comments) – Coordinates 18 open items to bring memory subsystem to parity with peer runtimes.  
  https://github.com/zeroclaw-labs/zeroclaw/issues/8891

The discussion around #6808 reflects a community desire for better workflow automation, while #7462 highlights a continuing gap in Windows support that frustrates developers on that platform. The A2A request (#3566) signals need for multi-agent interoperability.

---

### 5. Bugs & Stability

**New bugs reported today (July 20–21), ranked by severity:**

| Severity | Issue | Description | Fix PR exists? |
|----------|-------|-------------|----------------|
| **S0** (data loss) | [#9206](https://github.com/zeroclaw-labs/zeroclaw/issues/9206) | Cron `agent` jobs intermittently resolve workspace_dir to `/` instead of the real workspace. | No |
| **S1** (blocked) | [#9204](https://github.com/zeroclaw-labs/zeroclaw/issues/9204) | Landlock sandbox locks the daemon itself, breaking SQLite and other processes. | No |
| **S1** | [#9207](https://github.com/zeroclaw-labs/zeroclaw/issues/9207) | `web_fetch` tool returns garbage for gzip/brotli/deflate responses. | No |
| **S1** | [#9192](https://github.com/zeroclaw-labs/zeroclaw/issues/9192) | `shared_budget` TOCTOU race + `SopEngine::finish_run` unwrap panic. | No |
| **S1** | [#9216](https://github.com/zeroclaw-labs/zeroclaw/issues/9216) | Comment-hygiene gate fails on master due to issue refs in source comments. | [#9230](https://github.com/zeroclaw-labs/zeroclaw/pull/9230) (fix submitted) |
| **S2** (degraded) | [#9202](https://github.com/zeroclaw-labs/zeroclaw/issues/9202) | `zeroclaw desktop` uses dead download URL, doesn’t detect installed AppImage. | No |
| **S3** | [#9198](https://github.com/zeroclaw-labs/zeroclaw/issues/9198) | Discord typing indicator stuck indefinitely after daemon reload. | No |

Several older bugs were closed today: [#8837](https://github.com/zeroclaw-labs/zeroclaw/issues/8837) (history trimming), [#9078](https://github.com/zeroclaw-labs/zeroclaw/issues/9078) (serial desync), [#8675](https://github.com/zeroclaw-labs/zeroclaw/issues/8675) (malformed tool-call arguments), [#9117](https://github.com/zeroclaw-labs/zeroclaw/issues/9117) (ZeroCode socket), [#8664](https://github.com/zeroclaw-labs/zeroclaw/issues/8664) (code copy bug), [#8644](https://github.com/zeroclaw-labs/zeroclaw/issues/8644) (no visible assistant output), [#8944](https://github.com/zeroclaw-labs/zeroclaw/issues/8944) (mouse selection), [#8765](https://github.com/zeroclaw-labs/zeroclaw/issues/8765) (queue overlay background).

---

### 6. Feature Requests & Roadmap Signals

**Active feature trackers and requests:**

- **#3566** – A2A Protocol – Still open, high community interest (7 👍). Likely candidate for v0.9.0.
- **#7065** – Agent evaluation harness (`zeroclaw eval`) – Open since June; three follow-ups filed today ([#9228](https://github.com/zeroclaw-labs/zeroclaw/issues/9228) dashboard, [#9227](https://github.com/zeroclaw-labs/zeroclaw/issues/9227) LLM-judge calibration, [#9226](https://github.com/zeroclaw-labs/zeroclaw/issues/9226) memory seeding). Shows strong momentum toward production-level testing.
- **#9178** – ACP embedded resource blob + `deliver_file` – New feature enabling agents to return workspace files as ACP resources.
- **#8891 / #8288 / #7432** – Three roadmap trackers for persistent memory, SOP control plane, and v0.9.0 auth/security. These represent the most significant upcoming capabilities.
- **#8581** – SOP ingress adapters (in-progress) – Centralizes fan-in from multiple sources.

The volume of follow-up issues for #7065 suggests the eval harness is near completion and will be a flagship feature. A2A (#3566) remains the longest-requested feature with no implementation yet—expect it to land in the next major release.

---

### 7. User Feedback Summary

**Pain points expressed in recent issues:**

- **Windows compatibility** is the most vocal pain point: 74 test failures ([#7462](https://github.com/zeroclaw-labs/zeroclaw/issues/7462)), ZeroCode won’t start without env var ([#9117] closed), and now a comment-hygiene gate that blocks Windows contributors ([#9216](https://github.com/zeroclaw-labs/zeroclaw/issues/9216)). Repeated mentions of Chinese locale (Code Page 936) indicate international users are affected.
- **Context loss / history trimming** (#8837, closed) – A user reported the agent silently losing conversation context despite pruning being disabled. The fix was merged today.
- **Tool reliability** – `web_fetch` returning binary garbage (#9207) and a sandbox locking the daemon (#9204) are fresh incidents that impact real workflows.
- **ZeroCode TUI glitches** – Several bugs around copy behavior, overlays, and mouse selection have been fixed, but a new desktop detection issue (#9202) shows polish gaps remain.

**Satisfaction signals:** The rapid closure of reported bugs (9 in 24h) and active discussion on RFCs (#6808) suggest maintainers are responsive. The memory and SOP tracker comments show community investment in these features.

---

### 8. Backlog Watch

Items that have been open for extended periods without resolution or recent maintainer action:

| Issue | Age | Status | Why flagged |
|-------|------|--------|-------------|
| [#6685](https://github.com/zeroclaw-labs/zeroclaw/issues/6685) – SOP HTTP fan-in (POST /sop/*) | Since May 15 (2+ months) | In-progress, 1 comment | Documented but not wired; blocking SOP adoption. |
| [#3566](https://github.com/zeroclaw-labs/zeroclaw/issues/3566) – A2A Protocol | Since March 15 (4+ months) | Open, accepted, 9 comments | High community interest (7 👍), but no implementation PR yet. |
| [#7065](https://github.com/zeroclaw-labs/zeroclaw/issues/7065) – Eval harness | Since June 1 (1.5 months) | Open, accepted, 4 comments | Follow-ups filed today, but main PR not yet visible. |
| [#7462](https://github.com/zeroclaw-labs/zeroclaw/issues/7462) – Windows failures | Since June 10 (1.5 months) | Open, acknowledged, 10 comments | No fix PR or assignment; CI gap remains. |
| [#6808](https://github.com/zeroclaw-labs/zeroclaw/issues/6808) – Work lanes RFC | Since May 20 (2 months) | Accepted, rollout in progress | Still no concrete implementation issues from the RFC. |

Maintainers are encouraged to prioritize #7462 (Windows) to broaden the contributor base, and to begin implementation of #3566 (A2A) given its popularity. The SOP HTTP fan-in (#6685) could be unblocked by the ongoing SOP adapter work (#8581).

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/boom7sss/agents-radar).*