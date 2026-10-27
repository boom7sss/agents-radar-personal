# OpenClaw Ecosystem Digest 2026-07-27

> Issues: 352 | PRs: 500 | Projects covered: 13 | Generated: 2026-07-27 03:42 UTC

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

# OpenClaw Project Digest — 2026-07-27

## 1. Today’s Overview

OpenClaw is in an intense development cycle. In the last 24 hours, **352 issues** were updated (240 still open) and **500 pull requests** were touched — **349 of those PRs were merged or closed**, indicating a high rate of active fixes and feature work. The project remains in a **pre-stable or beta phase**, with a large number of P1/P2 regressions and session‑state bugs dominating the tracker. No new releases were published today. Community focus is on cross‑platform client support, session reliability, and security enhancements.

## 2. Releases

No new releases today.

## 3. Project Progress

Today’s merged/closed PRs reflect substantial forward movement across several components:

- **OpenAI integration**: `#114258` (closed) fixes model visibility after API‑key onboarding.
- **Control UI**: `#114259` (closed) adds browser coverage for agent‑scope label updates. `#114262` (open) introduces a durable session board face and dashboards index.
- **Gateway reliability**: `#113417` (open) rejects invalid channel account selections; `#114257` (open) stops fabricating a null `main` agent ID before roster resolution.
- **Voice calls**: `#114267` (open) protects against malformed UTF‑8 in provider call IDs.
- **Channels**: `#113500` (open) refactors bundled command replies across Discord, Mattermost, Slack, and Telegram to fix lifecycle gaps.
- **Meetings plugins**: `#114247` (closed) consolidates manual action state for Google Meet, Zoom, and Teams meetings.
- **Plugin diagnostics**: `#93975` (open) improves detection of orphan diagnostics.
- **Bun runtime support**: `#114256` (open) allows OpenClaw to run under recent Bun versions with `node:sqlite`.

Many of these were authored by maintainer `steipete`, who drove several large refactors and fixes today.

## 4. Community Hot Topics

The most active discussion and reaction magnets are:

- **Issue #75** (115 comments, 80 👍) — *Linux/Windows Clawdbot Apps*  
  Open since January 2026, this remains the **top‑voted and most‑discussed feature request**. Users are eager for desktop clients beyond macOS/iOS/Android.  
  → [Issue #75](https://github.com/openclaw/openclaw/issues/75)

- **Issue #99241** (24 comments) — *Tool outputs become image attachments, unreadable to the agent*  
  A P1 session‑state bug causing message loss in long‑running ANSI‑heavy workflows.  
  → [Issue #99241](https://github.com/openclaw/openclaw/issues/99241)

- **Issue #102020** (15 comments) — *Second message fails with “reply session initialization conflicted” (cross‑channel)*  
  A P1 bug affecting both Signal and other channels.  
  → [Issue #102020](https://github.com/openclaw/openclaw/issues/102020)

- **Issue #86519** (13 comments) — *Agent repeats identical replies 2‑10x on Telegram after 5.20 update*  
  A regression still not fully resolved despite partial mitigation in 5.22.  
  → [Issue #86519](https://github.com/openclaw/openclaw/issues/86519)

- **Issue #86996** (13 comments) — *Active Memory + Codex causes long latency, hook timeouts, and stalls*  
  Impacts Telegram DM reliability when using the `active-memory` feature.  
  → [Issue #86996](https://github.com/openclaw/openclaw/issues/86996)

- **Issue #6615** (9 comments, 8 👍) — *Feature: Denylist support for exec‑approvals*  
  High demand for “allow everything except X” policies.  
  → [Issue #6615](https://github.com/openclaw/openclaw/issues/6615)

- **Issue #42026** (9 comments, 3 👍) — *RFC: Distributed Agent Runtime*  
  A proposal to split the monolithic gateway into control plane and agent runtime.  
  → [Issue #42026](https://github.com/openclaw/openclaw/issues/42026)

**Underlying needs**: Users are hitting serious session‑state corruption, message loss, and latency issues in production. There is a clear desire for more secure fine‑grained tool controls (denylist, sub‑agent restrictions) and a more scalable architecture (distributed runtime).

## 5. Bugs & Stability

A large number of P1 and P2 bugs were reported or updated today. Ranked by severity:

| Issue | Severity | Description | Fix PR Exists? |
|-------|----------|-------------|----------------|
| #113434 | P1 | Codex `sessions.reset` reuses retired session ID; RAM exhaustion on catalog scans (Gateway crash) | No (`clawsweeper:no-new-fix-pr`) |
| #113315 | P1 | Telegram inbound update permanently lost after offset persistence with no dispatch | No (PR #114239 related – config wiring) |
| #113474 (closed) | P1 | Gateway crash loop on Raspberry Pi 5 (repeated offline/online cycling) | No – closed without fix visible |
| #112423 | P1 | Large SQLite transcript cleanup blocks the event loop | No |
| #112906 | P2 | Rich messages regression: `` collapsible sections broken in v2026.7.1 | No |
| #111519 | P1 | Telegram DM replies fall back after stale DM‑scope cleanup (regression in beta.3) | No |
| #108473 | P2 | Cron tool schema breaks llama.cpp tool‑calling (regression) | No |
| #106403 | P1 | Terminal‑main reconciliation race condition silently resets a healthy main session | No |
| #99241 | P1 | Tool outputs collapse into image placeholders, unreadable to agent | No |
| #102020 | P1 | Cross‑channel session init conflict on second message | No |
| #86519 | P1 | Telegram duplicate replies (regression, partially mitigated) | No |
| #86996 | P1 | Active Memory + Codex causes severe latency, timeouts, and stalls | No |
| #92043 | P1 | 180s compaction timeout is a single wall clock; no partial progress reuse | No |
| #85251 | P1 | Codex app‑server emits `notification:turn/started` then goes silent | No |
| #94251 | P1 | Ollama remote provider streaming not consumed – model call never progresses | No |
| #91892 | P1 | Cron jobs stall during AI model calls (stream never completes) | No |
| #103917 | P1 | Gateway crashes on `FsSafeError` when subagent workspace directory is deleted | No |
| #113315 | P1 | Telegram update lost after offset persistence | No |

Many of these carry the `clawsweeper:no-new-fix-pr` label, meaning the triage bot has not yet found an in‑progress fix PR. Several also have `clawsweeper:needs-maintainer-review` or `clawsweeper:needs-product-decision`, indicating they are blocked on maintainer attention.

## 6. Feature Requests & Roadmap Signals

Several prominent enhancements are likely to shape the next release:

| Issue | Title | Demand | Likelihood for next release |
|-------|-------|--------|-----------------------------|
| #75 | Linux/Windows Clawdbot Apps | Very high (115 comments, 80 👍) | Moderate – cross‑platform is a long‑standing ask but no current PR |
| #6615 | Denylist for exec‑approvals | High (8 👍) | Moderate – PR #78441 may touch similar area |
| #42026 | Distributed Agent Runtime | Moderate (3 👍, RFC) | Low – architectural decision needed |
| #67413 | Per‑agent dreaming configuration | Moderate (5 👍) | Moderate – memory spike complaints |
| #11665 | Webhook multi‑turn support (consistent sessionKey) | Low (0 👍) | Low – PR #82572 related to queue persistence |
| #15032 | Per‑spawn tool restrictions for sub‑agents | Low (0 👍) | Moderate – PR #78441 covers this |
| #8299 | Suppress sub‑agent announce | Low (1 👍) | Low |
| #10960 | Mid‑stream message injection (soft steer) | Low (2 👍) | Low |
| #88032 | Telegram quote/reply durable contract | Low (1 👍) | Low |
| #7476 | WhatsApp sticker send support | Low (1 👍) | Low |
| #38520 | Pre‑compaction notification & deferral | Low (1 👍) | Low |
| #82336 | Plugin approval APIs for HITL plugins | Low (1 👍) | Moderate – needed for external HITL |

The most likely near‑term additions are **denylist support** and **sub‑agent tool restrictions**, both with related open PRs (#78441). The **Distributed Runtime** and **cross‑platform apps** will require longer‑term planning.

## 7. User Feedback Summary

**Pain points repeatedly mentioned:**
- Session state instability (message loss, duplicate replies, stuck sessions, compaction failures).
- Missing Linux/Windows desktop application (most‑commented issue).
- Telegram channel reliability regressions after recent updates.
- High token waste from re‑injected bootstrap files every turn.
- Security gaps: no denylist for exec‑approvals, no per‑spawn tool restrictions.
- Inadequate support for local models (Ollama streaming broken, llama.cpp tool‑calling regression).
- Slow performance with Active Memory and Codex backends.

**Satisfaction signals:**
- Many users are actively running OpenClaw in production (Telegram, Discord) and reporting bugs with detailed reproduction steps, indicating a committed user base.
- The community reacts strongly to fixes; issues like #86519 (duplicate replies) get multiple contributions and comments.

**Overall sentiment**: The project is moving fast but still raw. Users appreciate the features but are frustrated by frequent regressions and the lack of a stable cross‑platform desktop client.

## 8. Backlog Watch

The following important items have been open for a long time without a visible fix or decision:

- **Issue #75** (Linux/Windows apps) – open since Jan 2026, most‑voted. No assignee, no PR. Maintainer attention is overdue.
- **Issue #11665** (webhook multi‑turn) – open since Feb 2026, 11 comments. Labeled `clawsweeper:needs-product-decision`.
- **Issue #6615** (denylist for exec‑approvals) – open since Feb 2026, 8 👍, 9 comments. Needs product decision and security review.
- **Issue #42026** (Distributed Runtime RFC) – open since Mar 2026, 9 comments. Needs maintainer response.
- **Issue #67419** (context bloat from bootstrap files) – open since Apr 2026, 11 comments. High impact on token usage.
- **Issue #67413** (per‑agent dreaming) – open since Apr 2026, 5 👍. `clawsweeper:needs-maintainer-review`.
- **PR #78441** (sub‑agent toolsAllow) – open since May 2026, stale despite `needs proof`. Directly addresses #15032.
- **PR #82572** (persist followup queues) – open since May 2026, `needs proof` for months.
- **Issue #85251** (Codex silent wedge) – open since May 2026, P1, stale. No maintainer decision.
- **Issue #86519** (Telegram duplicate replies) – open since May 2026, P1, partial fix but full fix not merged.

These items should be prioritized for the next maintainer review cycle to keep the project’s backlog healthy.

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: Personal AI Assistant Ecosystem

## Ecosystem Overview

The personal AI assistant open-source ecosystem remains in an intense, pre-stable growth phase, characterized by rapid iteration across a dozen projects with varying maturity levels. The core reference implementation (OpenClaw) continues to drive the most community activity, while specialized forks and competing implementations like NanoBot, ZeroClaw, and IronClaw pursue differentiated technical strategies in sandboxing, error recovery, and protocol interoperability. A clear pattern emerges: projects are converging on shared pain points around session reliability, security hardening, and cross-platform support, while diverging in their architectural approaches to agent delegation, memory management, and provider integration. The ecosystem is still searching for production-grade stability, with even the most active projects carrying significant open bug loads.

## Activity Comparison

| Project | Issues Updated (24h) | PRs Updated (24h) | PRs Merged/Closed | Release Status | Health Score |
|---------|---------------------|-------------------|-------------------|----------------|--------------|
| **OpenClaw** | 352 | 500 | 349 | Pre-stable (no release today) | Moderate – high activity but dominated by P1/P2 bugs |
| **NanoBot** | 10 | 34 | 27 | v0.2.2 | High – focused fix velocity, few open regressions |
| **Hermes Agent** | 50 | 50 | 10 | v0.19.0 | Moderate-high – responsive maintainers, delegation fixes |
| **IronClaw** | 5 | 19 | 6 | Release PR open (#5598) | High – structured epic-driven development |
| **ZeroClaw** | 50 | 50 | 2 | v0.8.3 (release cut PR open) | Moderate-high – intense work, many S1 bugs |
| **CoPaw** | 22 | 20 | 6 | v2.0.1 | Moderate – post-major-release stabilization |
| **Moltis** | 0 | 7 | 0 | No recent release | Moderate – active feature development, no merges today |
| **NanoClaw** | 2 | 8 | 2 | No release today | Low-moderate – critical migration bugs |
| **PicoClaw** | 4 | 7 | 1 | No release today | Moderate – low activity, stale items |
| **LobsterAI** | 2 | 8 | 1 | No release today | Low – stale PRs, critical gateway bug unattended |
| **NullClaw** | 1 | 0 | 0 | No release today | Very low – single critical crash, no fix |
| **TinyClaw** | 0 | 0 | 0 | N/A | Inactive |
| **ZeptoClaw** | 0 | 0 | 0 | N/A | Inactive |

## OpenClaw's Position

OpenClaw remains the ecosystem's reference implementation and focal point, commanding an order of magnitude more activity than any peer: 352 issues and 500 PRs updated in a single day dwarfs even the next most active projects (ZeroClaw and Hermes at ~50 each). Its community is deeply engaged, with the Linux/Windows desktop client request (#75) accumulating 115 comments and 80 upvotes. However, this scale comes with significant instability: OpenClaw carries a massive P1 bug load covering session-state corruption, message loss, Telegram duplicate replies, memory leaks, and gateway crashes, with many marked `clawsweeper:no-new-fix-pr`. The project is pre-stable and raw, while smaller peers like NanoBot and IronClaw demonstrate higher fix-velocity ratios and fewer open regressions.

OpenClaw's technical approach is monolithic and feature-rich, supporting dozens of channels and providers, which creates a broad attack surface for regressions. In contrast, NanoBot ships smaller, more focused fixes with 27 merged PRs and only two open issues, and IronClaw pursues architectural rigor through its error-recoverability epic. OpenClaw's advantage lies in community gravity and momentum; its disadvantage is that this momentum has not yet translated into production-grade reliability. For decision-makers, OpenClaw offers the most complete feature set but requires tolerance for frequent breakage, while alternatives like NanoBot or IronClaw provide more stable bases for specific use cases.

## Shared Technical Focus Areas

Several requirements emerge consistently across multiple projects, indicating where the ecosystem as a whole is investing:

**Session state reliability** is the most pervasive concern. OpenClaw (#99241, #102020, #86519), NanoBot (#4792), NanoClaw (#3140, #3136), and CoPaw (#5980) all report issues with message loss, duplicate replies, session initialization conflicts, and silent message drops after upgrades. This is the ecosystem's critical path to production readiness.

**Security hardening** is accelerating across the board. ZeroClaw (#9386) and Hermes Agent (#72298) both reported API key leakage into chat logs; IronClaw is building a credential placeholder registry (#6689); Moltis added operator-gated shell access (#1170); and NanoBot hardened image URL downloads (#5095). The trend is toward least-privilege execution models, per-spawn tool restrictions, and credential isolation.

**Sandbox and containment** is a major focus for ZeroClaw (Landlock fixes, bwrap bind roots), IronClaw (DockerProcessSandboxBackend cleanup), NanoBot (extra bwrap bind mounts, #4625), and CoPaw (Windows sandbox PRs #6383, #6462). The ecosystem is converging on container-based and system-call filtering approaches for tool execution isolation.

**Cross-platform support** is a persistent gap. OpenClaw's #75 (Linux/Windows desktop), ZeroClaw's #7462 (74 Windows test failures), CoPaw's #6239 (Windows PATH corruption), and LobsterAI's #273 (Linux support) all reflect demand for parity beyond macOS. Only IronClaw shows deliberate cross-platform CI investment.

**Agent-to-agent (A2A) and MCP interoperability** is emerging as a strategic layer. Hermes Agent (#514) has the most explicit A2A demand; CoPaw (#6470) and Moltis (#1169) are fixing MCP transport issues; ZeroClaw (#8486) is adding OpenAI-compatible endpoints. Standardization is still fragmented, but the direction is clear.

**Provider and model compatibility** is a recurring friction point. OpenClaw reports broken Ollama streaming (#94251), llama.cpp tool-calling regressions (#108473); NanoBot fixed MCP schema refs (#5057); CoPaw has a model connectivity bug (#6464). Projects are investing in provider-agnostic abstractions but struggling with the diversity of LLM backends.

## Differentiation Analysis

**Feature focus** divides the ecosystem along three axes. OpenClaw and ZeroClaw pursue **broad channel and provider coverage**, integrating everything from Telegram to Nextcloud to WhatsApp. Hermes Agent and Moltis concentrate on **agent delegation and A2A protocols**, with Hermes shipping multi-day gateway delegation fixes and Moltis adding ACP agent exposure. IronClaw and NanoBot prioritize **sandbox security and error recovery**, with IronClaw's systematic recoverability classification and NanoBot's focused security hardening (image downloads, oversized reads).

**Target users** differ in sophistication. OpenClaw, ZeroClaw, and CoPaw appeal to **power users running self-hosted agents** across many platforms, accepting complexity in exchange for flexibility. IronClaw targets **developer-centric deployments** needing rigorous error contracts and attestation. NanoBot serves **practical, lower-friction deployments** with fewer channels but higher per-feature stability. LobsterAI remains a **narrow UI-focused project** with limited community engagement.

**Technical architecture** varies significantly. OpenClaw uses a **monolithic gateway** with plugin extensions; the RFC for a distributed runtime (#42026) signals recognition of scaling limitations. IronClaw is **Rust-native with structured enums** for error recovery and composition assembly builders. NanoBot uses a **Python-based modular design** with fast fix iteration. ZeroClaw builds **Rust-based sandbox primitives** (Landlock) alongside gateway services. Hermes Agent implements **delegation pools and subagent lifecycle** management as core abstractions.

## Community Momentum & Maturity

Three activity tiers are visible:

**Tier 1 – High-velocity but unstable:** OpenClaw, ZeroClaw, and CoPaw show intense daily activity but carry large open bug counts. These projects are moving fast and breaking things, with OpenClaw at extreme scale (500 PRs/day), ZeroClaw closing in on a release cut, and CoPaw stabilizing after a major version rewrite.

**Tier 2 – Focused iteration:** NanoBot, Hermes Agent, IronClaw, and Moltis demonstrate higher fix-velocity-to-activity ratios. NanoBot merged 27 of 34 PRs; IronClaw's work is structured around a clear epic (#6284); Hermes merged 10 delegation fixes; Moltis is building features but not yet merging. These projects are closer to production readiness per unit of complexity.

**Tier 3 – Stalled or low-activity:** LobsterAI, NullClaw, PicoClaw, NanoClaw, TinyClaw, and ZeptoClaw show minimal activity or unresolved critical bugs. LobsterAI's 7 stale PRs and NullClaw's unattended SIGSEGV indicate maintainer bandwidth constraints. These projects risk drifting from the ecosystem unless maintainers re-engage.

## Trend Signals

**Error recovery as first-class feature** is the strongest signal from IronClaw's recoverability epic and ZeroClaw's systematic severity classification. The industry is moving beyond "does it crash?" to "does it survive errors in production?" – a shift that will define which projects become reliable enough for enterprise adjacent use.

**API key and credential exposure** is a newly urgent concern. Two independent projects (ZeroClaw, Hermes Agent) reported credential leakage into user-visible chat logs on the same day, suggesting systemic under-investment in output sanitization across the ecosystem. Expect this to become a top-three priority for all actively maintained projects.

**Sandbox expansion beyond containers** is visible in ZeroClaw's Landlock work and IronClaw's credential placeholder registry. The ecosystem is moving from "run in Docker" to "restrict at the system call and credential level" – a maturation that reflects real-world deployment in untrusted environments.

**Agent-to-agent standardization** remains fragmented but accelerating. Hermes Agent's A2A proposal, Moltis's ACP exposure, and ZeroClaw's OpenAI-compatible endpoint all point toward interoperability as a competitive advantage. Projects that standardize early on a protocol (Google's A2A, Anthropic's MCP, or OpenAI-compatible endpoints) will attract agent-to-agent integrations.

**Local model support is degrading** even as demand grows. OpenClaw reports broken Ollama streaming and llama.cpp regressions; CoPaw's model connectivity issues persist. The industry's shift toward cloud-hosted frontier models is leaving self-hosted LLM support as a second-class concern, creating an opportunity for projects (like NanoBot's provider-agnostic fixes) that prioritize local inference reliability.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-07-27

## Today's Overview

The project saw **high activity** over the past 24 hours: **10 issues** were updated (8 closed, 2 still open) and **34 pull requests** were updated (27 merged/closed, 7 open). Despite the absence of a new release, the volume of merged PRs indicates a focused sprint on bug fixes, security hardening, and incremental feature work. The maintainer team appears to be actively triaging and resolving reported regressions, with several high-priority (“p1”) PRs landing across core agent, MCP, channel, and sandbox modules. Community contributions remain strong, with external authors involved in many of the merged patches.

## Releases

*No new releases were published on this date.* The latest available version remains `nanobot-ai==0.2.2`, which is referenced in some recent bug reports.

## Project Progress

The following **27 merged/closed PRs** represent measurable progress in the last 24 hours (selected key items):

- **[#5101] `fix(image): honor provider proxy for URL downloads`** — Merged. Ensures that generated image downloads respect an explicitly configured provider proxy, while preserving DNS-pinned direct downloads when no proxy is set.
- **[#5095] `fix(security): harden generated image URL downloads`** — Merged. Adds a restricted downloader that validates every redirect hop and rejects loopback, private, and metadata IPs; caps download at 32 MiB.
- **[#5088] `fix(pairing): treat null approved/pending maps as empty`** — Merged. Prevents crash when pairing.json has null top-level maps.
- **[#5084] `fix(agent): preserve pending message runtime context`** — Merged. Addresses the runtime-context pipeline gap that caused pending mid-turn messages to lose sender/channel/chat metadata (related to #4064).
- **[#5069] `fix(channels): ignore confirmations after connect cancellation`** — Merged. Prevents WeChat/Feishu connectors from saving credentials from a cancelled QR connection.
- **[#5057] `fix(mcp): normalize local schema refs`** — Merged. Fixes #5040 by rewriting MCP tool schemas with arbitrary `$ref` pointers into ones acceptable by strict providers (Kimi/Moonshot).
- **[#5056] `fix(agent): preserve output across length recovery`** — Merged. Fixes #5051, accumulating all continuation segments after a token-limit truncation so that `final_content` contains the complete output.
- **[#5054] `fix(memory): progress past completed no-op Dream batches`** — Merged. Fixes #5041 by advancing the Dream cursor even when a batch produces no durable-memory diff.
- **[#5036] `feat(agent): make idle compaction scan interval configurable`** — Merged. Reduces CPU consumption on low-power devices (e.g., Raspberry Pi) by letting users increase the idle compaction interval.
- **[#5014] `fix(files): reject oversized reads before loading`** — Merged. Prevents out-of-memory conditions by rejecting reads of files over 100 MiB before loading them into memory.
- **[#5004] `fix(session): tolerate unsupported directory fsync`** — Merged. Handles `EINVAL` on `fsync` for directories on shared filesystems that do not support it.
- **[#4939] `fix(cli): support Codex OAuth in Quick Start`** — Merged. Exposes OpenAI Codex in the CLI quick-start flow with OAuth-based token acquisition.
- **[#4854] `feat(exec): add RTK command rewriter`** — Merged. Opt-in RTK command rewriting for `exec` before sandbox wrapping.
- **[#4656] `fix(image): pass aspect ratio and size to Gemini Flash image models`** — Merged. Fixes a silent drop of image generation parameters on the Gemini Flash path.
- **[#4625] `feat(exec): allow extra bwrap bind roots`** — Merged. Closes #4107 by adding configurable extra bind mounts for the bwrap sandbox.
- **[#4446] `feat(dingtalk): gate private chats and mention sender in group replies`** — Merged. Two DingTalk improvements: disable private chat flag and sender mention in group replies.

## Community Hot Topics

The most active discussions over the past 24 hours:

- **Issue #4924** (*[CLOSED] Heartbeat target selection fails with unifiedSession enabled*) — 4 comments. A regression where a single unified session causes heartbeat target selection to crash. The quick closure suggests a straightforward fix was identified.
- **Issue #5102** (*[CLOSED] WebUI cron push loss; lastStatus not reflecting real status*) — 2 comments. A bug where a cron task’s push is lost if the WebUI tab is closed, despite `lastStatus` showing “ok”. The underlying cause was *not* transcript loss; the reply was persisted but the new-activity indicator did not fire offline.
- **Issue #4792** (*[OPEN] /stop silently discards pending queue messages*) — 2 comments. A high-impact bug where the `/stop` command drains the pending queue without re-publishing messages, causing permanent message loss.
- **Issue #4107** (*[CLOSED] Allow configuring additional bind mounts for bwrap sandbox*) — 2 comments, 1 👍. A feature request that was later implemented in PR #4625.
- **Issue #4603** (*[CLOSED] Refactor: stop mutating tool_call.id for WebUI file-edit progress*) — 2 comments. A refactor that improves WebUI progress correlation without breaking provider protocol.

The community’s underlying need is clear: **reliability of message delivery and state persistence**, especially for asynchronous workflows (cron, pending queue, Dream). Several discussions also revolve around **sandbox configurability** and **provider compatibility** (strict schema validation).

## Bugs & Stability

All bugs reported or active in the last 24 hours, ranked by severity:

| Severity | Issue | Description | Fix Status |
|----------|-------|-------------|------------|
| **High** | #4792 (*OPEN*) | `/stop` permanently loses pending messages by draining without re-publishing. No fix PR linked yet; remains open. | Unresolved |
| **High** | #5051 (*CLOSED*) | `final_content` only contains last continuation segment after token-limit length recovery – earlier segments lost. Fixed in #5056. | ✅ Merged |
| **High** | #5040 (*CLOSED*) | MCP tool schema with non-standard `$ref` disables entire model on strict providers (Kimi/Moonshot). Fixed in #5057. | ✅ Merged |
| **High** | #5041 (*CLOSED*) | Completed no-op Dream batches starve later history entries. Fixed in #5054. | ✅ Merged |
| **Medium** | #5102 (*CLOSED*) | WebUI cron push loss – confirmed not data loss but a UI discovery gap. Addressed by #5103 (still open) which preserves unread activity across reconnects. | 🔄 PR #5103 open |
| **Medium** | #4924 (*CLOSED*) | `_pick_heartbeat_target_from_sessions` fails with unifiedSession and no sessions. Likely fixed; no PR mentioned. | ✅ Closed (fix assumed) |
| **Medium** | #4064 (*CLOSED*) | Pending mid-turn messages lose runtime context (sender, channel, chat). Fixed in #5084. | ✅ Merged |
| **Low** | #4603 (*CLOSED*) | Mutating `tool_call.id` for file-edit progress correlation causes provider protocol issues. Refactored in same PR. | ✅ Merged |

**Security-related fixes:** #5095 (image URL download hardening), #5104 (file_state security finding – PR open), #5014 (oversized reads).

## Feature Requests & Roadmap Signals

- **Open PR #5098** — *feat(extensions): add unified extension platform*. This is a substantial PR (still open with conflicts) that would make extensions a first-class governed capability, with transactional lifecycle management and Pi/OpenClaw compatibility. If merged, it could become a cornerstone for future plugin ecosystems.
- **Open PR #4301** — *feat(skills): cache skills loader entries and metadata*. Aims to eliminate repeated directory scans and YAML parsing; blocked by conflicts but addresses a clear performance issue.
- **Merged PR #5036** — Idle compaction interval now configurable, directly addressing feedback from low-power device users.
- **Merged PR #4625** — Extra bwrap bind roots, requested in #4107, now released.
- **Merged PR #4854** — RTK command rewriter for exec, an opt-in enhancement for tool execution.
- **Issue #1012** (*OPEN, stale*) — Request for subagent profiles with configurable tools and skills. No recent maintainer activity; could be a longer-term roadmap item.

Likely features for the next release: **extension platform** (#5098 if conflicts resolved), **skills caching** (#4301), and continued **image generation security hardening**.

## User Feedback Summary

Real pain points expressed in issues and PRs:

- **Cron push reliability** (#5102): Users expect offline cron replies to be delivered even when the WebUI tab is closed. The fix (#5103) focuses on persisting unread activity state, but the underlying mechanism now works.
- **Message loss on /stop** (#4792): A critical workflow issue for users who rely on `/stop` to interrupt long runs while preserving queued messages. This remains an open problem.
- **Sandbox flexibility** (#4107): Users deploying custom toolchains (e.g., `~/.local/bin`) want to expose them inside bwrap without loosening global defaults. Now addressed.
- **CPU overhead on Raspberry Pi** (#5036, resolved): Users running on ARM devices reported constant 30-40% CPU usage due to aggressive idle compaction. Making the interval configurable provides relief.
- **Provider incompatibility** (#5040): Users on Kimi/Moonshot experienced complete model failures when MCP tools with certain JSON schemas were registered. Now fixed.
- **Dream memory runs** (#5041): Users with large histories could see Dream stall indefinitely on the first batch when no changes were made. Fixed.

Overall satisfaction appears high: most reported bugs are being closed within days, and few users express frustration beyond initial bug reports.

## Backlog Watch

The following items require maintainer attention:

- **Issue #1012** (*OPEN, created Feb 2026*) — Subagent profiles with configurable tools/skills. No recent activity from maintainers; stale.
- **Issue #4792** (*OPEN, created Jul 6*) — `/stop` message loss. No fix PR linked; high severity and user impact.
- **PR #4301** (*OPEN, created Jun 11*) — Skills caching. Blocked by merge conflicts; a performance improvement for sessions with many skills.
- **PR #5098** (*OPEN, created Jul 26*) — Extension platform. Large PR; needs conflict resolution and review before merging.

These items represent either long-standing feature requests or critical bugs that could affect project reliability and user experience.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-07-27

## 1. Today’s Overview

Hermes Agent saw high activity over the past 24 hours with **50 issues updated** (43 open, 7 closed) and **50 pull requests updated** (40 open, 10 merged/closed). The project remains in a rapid development cycle, driven by community-reported bugs and feature requests. Major themes include credential security (password leakage via Telegram), subagent lifecycle fixes in the Desktop UI, and preparation for A2A interoperability. The maintainer team merged several salvage PRs for delegation and observability features, indicating active stewardship despite the high volume of open items. No new releases were tagged.

## 2. Releases

No new releases were published in the last 24 hours. The last release remains v0.19.0 (2026-07-20). Active development focuses on the `main` branch.

## 3. Project Progress

**10 pull requests were merged or closed** today, representing meaningful progress in stability and feature delivery:

- **Delegation fixes**  
  - [#72412](https://github.com/NousResearch/hermes-agent/pull/72412) (merged) – Fixed nested-pool wedge causing delegated children to hang after multi-day gateway uptime (#60203).  
  - [#72409](https://github.com/NousResearch/hermes-agent/pull/72409) (merged) – Desktop UI now preserves still-running background subagents across user messages (#67980 / #64015).  
  - [#72406](https://github.com/NousResearch/hermes-agent/pull/72406) (merged) – Forwarded `subagent.start` / `subagent.complete` events on `/v1/runs` SSE stream (#51294).  
  - [#72403](https://github.com/NousResearch/hermes-agent/pull/72403) (merged) – Exposed redacted child tool history in `subagent_stop` hook payloads (#61974).

- **New feature**  
  - [#72436](https://github.com/NousResearch/hermes-agent/pull/72436) (merged) – Added `/ponytail` mode with session-scoped prompt overlays (off/lite/full/ultra).

- **Automated housekeeping**  
  - [#72443](https://github.com/NousResearch/hermes-agent/pull/72443) (merged) – Auto-fix formatting via `npm run fix`.

- **Stability & compatibility**  
  - Various salvaged PRs from previous authors were rebased and merged, improving subagent lifecycle, delegation resilience, and API stream reliability.

## 4. Community Hot Topics

The most active discussions highlight strong demand for interoperability and security:

- **[#514 – A2A Protocol Support](https://github.com/NousResearch/hermes-agent/issues/514)**  
  *22 comments, 28 👍*  
  **Need:** Agent-to-agent communication standard. Users want Hermes to interoperate with other A2A-compliant agents for cross-platform task delegation. The feature is highly upvoted but remains open since March 2026.

- **[#4656 – Credential Proxy Daemon](https://github.com/NousResearch/hermes-agent/issues/4656)**  
  *14 comments, 1 👍*  
  **Need:** Zero-knowledge HTTP/HTTPS broker for credentials. Ongoing discussion about architecture, security boundaries, and integration with existing isolation features (PID namespaces, env scoping). Low reaction count but deep technical engagement.

- **[#72298 – Passwords shown in Telegram](https://github.com/NousResearch/hermes-agent/issues/72298)**  
  *3 comments, 8 👍*  
  **Need:** Urgent security concern – credentials typed into web forms leaked to Telegram tool-progress messages. High reaction-to-comment ratio signals a pain point that resonated quickly. A fix PR [#72432](https://github.com/NousResearch/hermes-agent/pull/72432) has been opened.

- **[#68858 – Disk I/O saturation from compaction](https://github.com/NousResearch/hermes-agent/issues/68858)**  
  *3 comments, 0 👍*  
  **Need:** Performance bottleneck under heavy gateway sessions. Users report gateway shutdown wedging due to concurrent compaction and FTS maintenance on large `state.db`. No PR yet.

## 5. Bugs & Stability

New and escalated bugs reported today, ranked by severity:

| Severity | Issue | Description | Fix PR |
|----------|-------|-------------|--------|
| **P2 – Security** | [#72298](https://github.com/NousResearch/hermes-agent/issues/72298) | Passwords shown in Telegram via tool-progress indicator | [#72432](https://github.com/NousResearch/hermes-agent/pull/72432) |
| **P2 – Stability** | [#72431](https://github.com/NousResearch/hermes-agent/issues/72431) | Extreme container startup delay on Windows host bind mount after s6-overlay update | Open |
| **P2 – Platform** | [#72434](https://github.com/NousResearch/hermes-agent/pull/72434) | Kanban dispatcher causes silent Windows gateway crash (fix PR open) | [#72434](https://github.com/NousResearch/hermes-agent/pull/72434) |
| **P2 – Stability** | [#68858](https://github.com/NousResearch/hermes-agent/issues/68858) | v0.19 in-place compaction + FTS maintenance saturates disk I/O, wedges shutdown | None |
| **P2 – Config** | [#72421](https://github.com/NousResearch/hermes-agent/issues/72421) | Auxiliary Azure Foundry calls fail with HTTP 401 when main provider uses Entra ID | None |
| **P2 – Config** | [#72348](https://github.com/NousResearch/hermes-agent/issues/72348) | Discord adapter allow/deny gates are process-global, breaking per-profile isolation under multiplex_profiles | None |
| **P2 – Config** | [#72418](https://github.com/NousResearch/hermes-agent/issues/72418) | Model name double-namespaced (e.g. `openrouter/deepseek-v4-pro`) in CLI | None |
| **P2 – Security** | [#54735](https://github.com/NousResearch/hermes-agent/issues/54735) | Unbounded response body reads in provider model catalog fetching | None |
| **P3 – Regression** | [#65600](https://github.com/NousResearch/hermes-agent/issues/65600) | Housekeeping-tool empty-follow-up shortcut wrongly ends turn when local model chokes | None |
| **P3 – Stability** | [#72389](https://github.com/NousResearch/hermes-agent/issues/72389) | `web_extract` truncation footer reports host-side cache path unreachable from Docker backend | None |
| **P3 – UI** | [#27740](https://github.com/NousResearch/hermes-agent/issues/27740) | xterm.js WebGL renderer context lost causes black screen on chat page switch | None |
| **P3 – UI** | [#67980](https://github.com/NousResearch/hermes-agent/issues/67980) | Desktop UI background subagents vanish on new message (fix merged today) | [#72409](https://github.com/NousResearch/hermes-agent/pull/72409) |

Most high-severity bugs have active fix PRs, reflecting responsive development.

## 6. Feature Requests & Roadmap Signals

Several features requested today and recently point to upcoming capabilities:

- **A2A (Agent-to-Agent) Protocol** ([#514](https://github.com/NousResearch/hermes-agent/issues/514)) – Likely to be prioritized for next minor release given high community demand and maintainer engagement.
- **Credential Proxy Daemon** ([#4656](https://github.com/NousResearch/hermes-agent/issues/4656)) – Deep architectural discussion suggests this may land as an optional component in v0.20.
- **Tool Pre-Execution Hook** ([#56969](https://github.com/NousResearch/hermes-agent/issues/56969)) – Could enable URL routing rules; a candidate for next sprint.
- **Configurable Tool Progress Streaming** ([#4804](https://github.com/NousResearch/hermes-agent/issues/4804)) – Requested by voice and latency-sensitive workflows; likely to see a config flag.
- **NeMo Relay Observability** ([#67607](https://github.com/NousResearch/hermes-agent/pull/67607)) – Large feature PR still open; integration may enter main branch soon.
- **Incremental Update** ([#48962](https://github.com/NousResearch/hermes-agent/issues/48962)) – Skip Python dependency reinstall when unchanged; quality-of-life improvement likely in next patch.
- **Delegated Role Tracking** ([#40189](https://github.com/NousResearch/hermes-agent/issues/40189)) – Request to record which role/persona a subagent was delegated as; small addition may appear in v0.19.1.

Predictions: A2A support or credential proxy may be the next headline feature. Incremental update and tool pre-execution hook are lower effort and could be merged sooner.

## 7. User Feedback Summary

**Pain points:**
- Security: Users are alarmed by password leakage through tool-progress indicators in Telegram ([#72298](https://github.com/NousResearch/hermes-agent/issues/72298)).
- Reliability: Multi-day gateway deployments lead to hanging delegation tasks ([#60203](https://github.com/NousResearch/hermes-agent/issues/60203)) and disk I/O wedges ([#68858](https://github.com/NousResearch/hermes-agent/issues/68858)).
- UI: Desktop subagents disappearing on new messages ([#67980](https://github.com/NousResearch/hermes-agent/issues/67980)) and WebGL terminal blackouts ([#27740](https://github.com/NousResearch/hermes-agent/issues/27740)) frustrate power users.
- Platform: Windows container startup delays ([#72431](https://github.com/NousResearch/hermes-agent/issues/72431)) and dangling symlink HTTP 500 errors ([#47154](https://github.com/NousResearch/hermes-agent/issues/47154)) show cross-platform gaps.

**Satisfaction signals:**
- Strong community support for A2A and credential proxy – users are investing time in detailed feature proposals.
- Multiple users contributed salvage PRs (e.g., [#67005](https://github.com/NousResearch/hermes-agent/pull/67005), [#62011](https://github.com/NousResearch/hermes-agent/pull/62011)) that were merged today, indicating an engaged contributor base.
- The `ponytail` feature ([#72436](https://github.com/NousResearch/hermes-agent/pull/72436)) was quickly merged, showing maintainers value user-requested UX improvements.

## 8. Backlog Watch

Issues and PRs that appear stalled or need maintainer attention:

- **[#27740 – xterm.js WebGL renderer context lost](https://github.com/NousResearch/hermes-agent/issues/27740)**  
  P2, open since May, updated today – reproducible black screen on chat page switch. No PR attached, and `needs-decision` label suggests unresolved approach.

- **[#68858 – Disk I/O saturation from compaction](https://github.com/NousResearch/hermes-agent/issues/68858)**  
  P2, open for 6 days – high impact on large installations. Maintainer has not assigned a fix.

- **[#72431 – Windows container startup delay](https://github.com/NousResearch/hermes-agent/issues/72431)**  
  P2, filed today – critical for Windows users but no fix PR yet.

- **[#13900 – docker_volumes submounts skip persistent mount](https://github.com/NousResearch/hermes-agent/issues/13900)**  
  P2, open since April – affects users needing custom workspace mounts inside Docker.

- **[#65600 – Housekeeping-tool empty-follow-up shortcut](https://github.com/NousResearch/hermes-agent/issues/65600)**  
  P2, open for 11 days – causes premature turn end with weak models.

- **[#54761 – Feishu QR onboarding unbounded reads](https://github.com/NousResearch/hermes-agent/issues/54761)**  
  P3, open since June – security concern but low priority.

- **[#68437 – Restore gateway availability under SQLite contention](https://github.com/NousResearch/hermes-agent/pull/68437)**  
  Open PR from July 21 with no reviewer activity. Addresses critical production issue (Discord disconnection). Needs maintainer review.

- **[#67607 – NeMo Relay observability integration](https://github.com/NousResearch/hermes-agent/pull/67607)**  
  Large feature PR with extensive risk labels; no recent maintainer comments. May require architectural decision.

These items, if left unattended, could erode trust in long-term stability for production deployments.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-07-27

## Today’s Overview

The project shows moderate activity over the past 24 hours: 4 issues were updated and 7 pull requests received attention, with one PR merged. The maintainers closed a long-standing bug report (the `splitKnownProviderModel` alias stripping issue) and merged a Go toolchain upgrade to fix two stdlib vulnerabilities. A notable new feature request (native AI Router provider preset) and a community contribution for an Exa web search integration signal steady external interest. However, the number of stale-labelled items (3 issues, 2 PRs) suggests some backlog items may be losing momentum, and a critical bug causing gateway startup failures remains unaddressed.

## Releases

No new releases were published today. The last known release is not indicated in the data.

## Project Progress

- **Merged / Closed PRs:**  
  - **#3248** (merged) – Bump Go toolchain to 1.25.12 to patch `GO-2026-5856` (crypto/tls) and `GO-2026-4970` (os). This improves CI security posture.
- **Open PRs with meaningful progress:**  
  - **#3299** – New native Exa web search provider, supporting date range filters.  
  - **#3295** – Fix for `SplitMessage` infinite loop on oversized fence headers (addresses issue #3264).  
  - **#3297** – Security hardening for remote prompts and execution boundaries, including schema v4 migration.  
  - **#3267** – Fix token refresh scope bug for the Antigravity provider.  
  - **#3202** – Correct `NormalizeAgentID` to strip leading/trailing underscores.  
  - **#3296** – Complete Czech translations for code wrap labels.

## Community Hot Topics

- **Issue #3252** (closed, 2 comments) – Bug in `splitKnownProviderModel` that wrongly strips provider prefixes when model IDs contain known aliases. Closed after 14 days; likely patched.  
  [GitHub](https://github.com/sipeed/picoclaw/issues/3252)
- **Issue #3298** (new, 0 comments) – Feature request to add AI Router as an OpenAI-compatible provider preset. Submitted by a maintainer of the AI Router service, signaling desire for easier configuration.  
  [GitHub](https://github.com/sipeed/picoclaw/issues/3298)
- **Issue #3264** (stale, 1 comment) – `SplitMessage` hang bug with oversized fenced-code info strings. PR #3295 now provides a fix, which should resolve this active pain point.  
  [GitHub](https://github.com/sipeed/picoclaw/issues/3264)
- **Issue #3265** (stale, 1 comment) – Gateway startup fails with unknown `deltachat` channel type even when not configured. No PR yet; may require deeper investigation.  
  [GitHub](https://github.com/sipeed/picoclaw/issues/3265)

## Bugs & Stability

**High severity**  
- **#3265** – Gateway fails to start with “channel deltachat has unknown type deltachat”. Reproduction steps show no deltachat config present. Likely a validation bug that blocks all gateway users. **No fix PR exists.**  
  [GitHub](https://github.com/sipeed/picoclaw/issues/3265)

**Medium severity**  
- **#3264** – `SplitMessage` infinite loop on oversized fence info strings. Can cause denial-of-service when processing certain messages. **Fix PR #3295** is open.  
  [GitHub](https://github.com/sipeed/picoclaw/issues/3264)

**Low severity**  
- **#3252** (closed) – Provider prefix stripping bug, resolved.  
- **#3267** (PR) – Token refresh scope error for Antigravity, fix proposed.  
- **#3297** (PR) – Security hardening for remote prompts/exec, addressing potential misuse.

## Feature Requests & Roadmap Signals

- **AI Router provider preset (#3298)** – Likely to be included in the next release as it requires only configuration additions and has a dedicated contributor.  
- **Exa web search provider (#3299)** – Community-contributed, already in PR; could land soon if reviews pass.  
- **i18n completion (#3296)** – Czech labels, minor but welcomed.

No major roadmap changes are implied by today’s data.

## User Feedback Summary

Users are actively reporting and contributing fixes for reliability issues:
- The `SplitMessage` hang is a concrete pain point affecting channel splitting.  
- The gateway startup failure (#3265) is alarming because it prevents even using the project with a clean config.  
- On the positive side, the merged Go version bump shows proactive security maintenance.  
- The new feature requests (AI Router, Exa) indicate interest in expanding provider integrations with minimal configuration overhead.

Overall sentiment is mixed: the project is responsive to bugs, but the stale labels on three issues and two PRs hint that some fixes may linger without maintainer attention.

## Backlog Watch

- **Issue #3265** – Gateway startup failure with deltachat, **no maintainer response yet**. Requires immediate attention to restore functionality.  
  [GitHub](https://github.com/sipeed/picoclaw/issues/3265)
- **PR #3202** (stale, 26 days) – ID normalization fix for underscores. Still open with no merge activity. Could affect routing correctness.  
  [GitHub](https://github.com/sipeed/picoclaw/pull/3202)
- **Issue #3264** (stale) – Though fix PR #3295 exists, the issue itself remains open and stale-labelled; merging the PR will resolve it. Maintainers should close quickly.

No other long-unanswered items were observed in the 24-hour snapshot.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest – 2026-07-27

## Today’s Overview
NanoClaw shows moderate activity with two open issues and eight recently updated pull requests (two merged/closed). The project is actively addressing messaging reliability and migration fallout, particularly around the recent “explicit-destinations” breaking change. Two core-team PRs were completed today, advancing agent-group timezone support and duplicate-reply prevention. Community contributions continue to flow, with fixes for WhatsApp shared-number mode and chat SDK attachment handling under review. No new releases were published, signalling the team is consolidating before the next ship.

## Releases
*None.* No new releases were created in the last 24 hours. Changelog and migration notes remain unchanged from previous versions.

## Project Progress
Two pull requests were merged/closed in the last 24 hours:

- **#3028 – [`fix: avoid duplicate replies after send_message`](nanocoai/nanoclaw PR #3028)** (closed) – by ogarciarevett. Prevents the agent runner from emitting a duplicate final summary when `send_message` already wrote a chat reply in the same provider round. This has been a long-standing reliability pain point for multi-turn conversations.

- **#3125 – [`feat: per-agent-group timezone override`](nanocoai/nanoclaw PR #3125)** (closed/merged, core-team) – by Koshkoshinsk. Adds an optional IANA timezone per agent group, stored via migration 020. Enables resolution through group override → install global, grounding group-dependent scheduling. Approval-gated for agent callers. A notable infrastructure improvement for multi-geography deployments.

These merges indicate steady progress on both bug fixes and feature additions, driven by the core team and external contributors.

## Community Hot Topics
No single issue or PR has attracted comments or reactions yet, but several discussions are shaping the project’s immediate direction:

- **#3137 – [`Fix engagement consistency and expose self-serve wiring controls`](nanocoai/nanoclaw PR #3137)** (open, core-team) – by Koshkoshinsk. Proposes keeping accumulated messages without triggering warm-container follow-ups, letting group-scoped agents inspect wirings and request approved engagement-policy updates. This is a significant step toward agent autonomy and is likely to be closely scrutinised.

- **#3126 – [`fix(agent-runner): never deliver silence, never deliver <internal> thinking`](nanocoai/nanoclaw PR #3126)** (open, core-team) – by glifocat. Addresses a class of chat noise that degrades user experience. As a core-team fix, it signals high priority.

- **#3050 – [`feat(setup): add Dial to the channel picker + wizard/skills`](nanocoai/nanoclaw PR #3050)** (open, skill) – by OmriBenShoham. Adds “Dial” as a new channel, expanding NanoClaw’s integration ecosystem. Open since July 14, it reflects ongoing demand for alternative messaging backends.

## Bugs & Stability
Two regressions were reported today, both in the open issue queue:

1. **#3140 – [OPEN] [`Explicit-destinations migration: pre-existing wirings have no own-chat destination — all replies silently dropped after update`](nanocoai/nanoclaw Issue #3140)**  
   - **Severity: Critical** – Users who upgraded to the explicit-destinations breaking change lose all agent replies in long-standing chat groups. The error is silent: `[poll-loop] Unknown destination in <message...`. No workaround documented.
   - **Fix PRs: None linked yet.**

2. **#3136 – [OPEN] [`sendToDestination stamps a foreign in_reply_to on outbound rows, silently losing messages to destinations with no inbound history`](nanocoai/nanoclaw Issue #3136)**  
   - **Severity: High** – A subtle routing bug where `sendToDestination()` falls back to the waking batch’s `in_reply_to`, corrupting A2A return-path routing when the destination has no prior inbound message. Messages are silently lost.
   - **Fix PRs: None linked yet.**

**Stability note:** Two closed/merged PRs (#3028, #3125) reduce duplicate replies and improve timezone handling, but the two new open issues represent active regressions that require immediate attention.

## Feature Requests & Roadmap Signals
Beyond the merged per-group timezone feature, the following requests are gaining traction:

- **Self-serve wiring controls** (PR #3137) – Would allow agents to inspect their own wiring and request engagement-policy changes. This aligns with a longer-term vision of autonomous agent operations.
- **Dial channel integration** (PR #3050) – A community skill adding a new messaging channel. Likely to be included in a future minor release if reviews proceed smoothly.
- **OpenCode compatibility fixes** (PR #3122) – Enhancing compatibility with the main branch, custom-endpoint transport, and memory parity. Suggests the project is preparing to support more deployment modes.

Based on core-team activity, the next version will likely focus on engagement consistency and the explicit-destinations migration fallout.

## User Feedback Summary
Real pain points surfaced today are centred on breaking-change migration and message delivery:

- **Silent message loss** (Issue #3140) – Users who maintained long-standing chat groups are seeing all agent replies silently dropped after updating. No error in logs other than `Unknown destination`. This is a satisfaction-breaker for any production deployment.
- **Foreign `in_reply_to` stamping** (Issue #3136) – Messages sent to destinations without inbound history are misrouted and lost. This undermines trust in the A2A routing system.
- **WhatsApp owner silencing** (PR #3139) – A fix for shared-number mode that currently blanket-drops `fromMe` messages, silencing the owner. Community contributor grtwrn provided the fix, indicating user frustration with this established behaviour.

Overall satisfaction is tempered by the explicit-destinations migration pain, though the quick community response with fixes shows a healthy contributor ecosystem.

## Backlog Watch
Two items require maintainer attention:

- **#3050 – [`feat(setup): add Dial to the channel picker`](nanocoai/nanoclaw PR #3050)** – Open since July 14 (13 days) with no recent core-team review comments. This is a substantial skill addition waiting for maintainer bandwidth or feedback.
- **#3122 – [`fix(opencode): main compatibility, custom-endpoint transport, memory parity`](nanocoai/nanoclaw PR #3122)** – Open since July 23, core-team labelled, but no merge activity. May be blocked by the explicit-destinations migration issues.

Both are mature enough for a review cycle. In particular, the Dial channel PR could benefit from a maintainer check to avoid drifting further.

---

*Data collected from GitHub activity in the last 24 hours ending 2026-07-27.*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest — 2026-07-27

## Today's Overview
Project activity remains low, with a single open issue updated in the last 24 hours and no new pull requests or releases. The sole topic of discussion—a critical crash bug on inbound Telegram messages—dominates the current state and indicates a stability bottleneck that is blocking normal operation for at least one user. No feature additions or maintenance merges occurred today, suggesting maintainer bandwidth may be concentrated on this unresolved crash.

## Releases
*None in the reporting period.*

## Project Progress
No pull requests were merged or closed today. No feature work or bug fixes have been advanced.

## Community Hot Topics
- **Issue #976** — "SIGSEGV on every inbound Telegram message — inbound worker thread spawned with a ~512 KB stack overflows"  
  *Author: wonhotoss | Created: 2026-07-16 | Updated: 2026-07-26 | Comments: 3*  
  This is the only active discussion and the most commented issue. The user describes a reproducible crash on aarch64 Linux with `nullclaw gateway` where every inbound Telegram message triggers a segfault due to a thread stack size of ~512 KB overflowing. The crash-loop causes message loss. The three comments likely explore workarounds or root cause analysis, but no fix has been proposed yet.  
  **Link:** [nullclaw/nullclaw Issue #976](https://github.com/nullclaw/nullclaw/issues/976)

## Bugs & Stability
| Issue | Severity | Description | Fix PR exists? |
|-------|----------|-------------|----------------|
| [#976](https://github.com/nullclaw/nullclaw/issues/976) | **Critical** | SIGSEGV on every inbound Telegram message. `nullclaw gateway` crash-loops as a systemd service with `Restart=always`, dropping all messages. Root cause identified as a 512 KB stack limit on the inbound worker thread, which overflows when processing typical Telegram payloads. | No |

This crash is the highest-priority bug in the project. It renders the Telegram gateway unusable on aarch64 (and potentially other architectures with default small stack sizes). No pull request addressing it has been opened as of today.

## Feature Requests & Roadmap Signals
No new feature requests appeared today. The community’s immediate need is purely defensive—restoring basic inbound message handling.

## User Feedback Summary
The sole user report (Issue #976) expresses clear frustration: the project **does not work** for its intended use case after the v2026.5.29 release. The crash-loop behavior is particularly annoying because automated restart prevents any manual recovery. The user likely expects a quick patch to increase the thread stack size or switch to a heap-allocated thread context. No positive feedback or use-case satisfaction data is available for this period.

## Backlog Watch
- **Issue #976** (open since 2026-07-16) — While updated yesterday (2026-07-26), it remains unassigned and lacks a linked PR. Given the critical severity and the 10-day gap since creation without a resolution, this issue should be a top priority for maintainers. Users cannot use the Telegram gateway at all, and the root cause is a simple configuration oversight (stack size). Prompt attention is recommended to restore project reliability.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest – 2026-07-27

## 1. Today’s Overview
Project activity remains high, with 5 open issues and 19 pull requests updated in the last 24 hours, 6 of which were merged or closed. No new releases were published. The core team is heavily focused on the **error-recoverability endgame** (epic #6284) and on consolidating the failure vocabulary into a single `FailureKind` enum (PR #6684). A major user-facing bug was reported (chat hangs forever when out of credits – #6690), and several large refactoring PRs – including sandbox credential placeholders (#6689), per-user MCP discovery (#6683), and composition assembly builders (#6691) – demonstrate continued architectural maturation. Overall health is good, with rigorous testing and cleanup visible across the board.

## 2. Releases
**None** in the last 24 hours. The last pending release PR (#5598) remains open.

## 3. Project Progress – Merged / Closed PRs Today
Six pull requests were merged or closed today, representing significant forward motion:

- **[#6640** – `build(deps): bump the everything-else group across 1 directory with 31 updates`](https://github.com/nearai/ironclaw/pull/6640) – Closed after merge; routine dependency bump.
- **[#6679** – `Harden struct ratchet and remove dead Gemini API`](https://github.com/nearai/ironclaw/pull/6679) – Closed; hardened the struct ratchet with `syn`-based parsing and removed unused Gemini API code.
- **[#4032** – `chore(deps): bump the wasm group across 1 directory with 2 updates`](https://github.com/nearai/ironclaw/pull/4032) – Closed; wasm dependencies updated.
- **[#5369** – `fix(reborn): suppress Cranelift debug log floods`](https://github.com/nearai/ironclaw/pull/5369) – Closed; improves debug log hygiene without losing useful information.
- **[#6365** – `[reference] P2b: per-user hosted-MCP discovery (worker agents get per-hire connector tools)`](https://github.com/nearai/ironclaw/pull/6365) – Closed; reference PR for P2b work, now superseded by a cleaner rebase (#6683).
- **[#6677** – `test(reborn): compile-forced recoverability conformance matrix (§11.7 / #6284 item 7)`](https://github.com/nearai/ironclaw/pull/6677) – Closed; added exhaustive recoverability classification for seven error enums, a prerequisite for epic #6284.

## 4. Community Hot Topics
- **[Issue #6284 – `[EPIC] error-recoverability endgame`](https://github.com/nearai/ironclaw/issues/6284)** (8 comments, 0 👍) – Still the most discussed issue. It defines a strict recoverability contract: every mid-run error must survive, be visible to the model, carry cause and remedy, and never report a false non-success. Multiple sub-PRs (#6684, #6677) directly advance this epic. The underlying need is robust agent self-healing without silent failures.

All other issues and PRs have 0 comments or reactions, so the conversation is concentrated on recovery guarantees.

## 5. Bugs & Stability
| Severity | Bug | Details | Fix status |
|----------|-----|---------|------------|
| **High** | **Chat hangs on “thinking…” forever when out of NEAR AI credits** ([#6690](https://github.com/nearai/ironclaw/issues/6690)) | User sees no notification; only discovers issue by logging into the web portal. Severely degrades user experience. | No fix PR yet. Likely needs a credit-check hook before model invocation. |
| **Medium** | **Daily failure taxonomy – 2026-07-26** ([#6682](https://github.com/nearai/ironclaw/issues/6682)) | 82 non-passing clawbench runs, dominated by model-quality partial completions. Not a code bug per se, but indicates reliability gaps. | Addressed by ongoing error-recoverability work. |
| **Low** | **Removal of dead code: DockerProcessSandboxBackend** ([#6686](https://github.com/nearai/ironclaw/issues/6686)) | No production constructor; superseded by persistent sandbox. | Cleanup issue; related PRs are in progress. |
| **Fixed** | **Harness bug (escaped to main) – mutation-audit output never produced** – fixed in PR [#6681](https://github.com/nearai/ironclaw/pull/6681) (open). | | Merged pending. |
| **Fixed** | **Four wrongful-terminal bugs exposed by failure-kind collapse** – fixed in PR [#6684](https://github.com/nearai/ironclaw/pull/6684) (open with red-verified regressions). | | Open, awaiting review. |

The most critical issue (#6690) has no fix yet; the other high-severity bugs are being addressed through the recoverability initiative.

## 6. Feature Requests & Roadmap Signals
- **Error-recoverability endgame** ([#6284](https://github.com/nearai/ironclaw/issues/6284)) – The dominant roadmap item. PRs [#6684](https://github.com/nearai/ironclaw/pull/6684) (failure vocabulary unification) and [#6677](https://github.com/nearai/ironclaw/pull/6677) (recoverability conformance) are direct steps. Likely to be completed in the next release.
- **Sandbox credential placeholder registry** (PR [#6689](https://github.com/nearai/ironclaw/pull/6689)) – Unwired infrastructure for keeping secrets out of sandbox containers. Signals a security hardening push.
- **Per-user hosted-MCP discovery** (PR [#6683](https://github.com/nearai/ironclaw/pull/6683)) – Rebases P2b work cleanly onto `main`. This is a major feature enabling worker agents to discover MCP tools per hire. Targeted for the next version.
- **Unify model-visible safe text** ([#6688](https://github.com/nearai/ironclaw/issues/6688)) – Proposes consolidating five overlapping safe-text wrappers. Likely to be tackled after failure vocabulary unification.
- **Attested signing Phase B – signed intent + per-agent key lifecycle** (PR [#6672](https://github.com/nearai/ironclaw/pull/6672)) – Adds cryptographic attestation for agent transactions. A significant Ledger integration feature.
- **Composition assembly refactor** (PR [#6691](https://github.com/nearai/ironclaw/pull/6691)) – Focused builders to clean up monolithic composition code. Architectural cleanup.

The next release (still unconfirmed) is expected to include the error-recoverability endgame, MCP discovery, and the credential placeholder registry.

## 7. User Feedback Summary
- **Pain point – credit exhaustion**: Issue [#6690](https://github.com/nearai/ironclaw/issues/6690) highlights a silent failure when credits run out. Users expect a clear notification, not an infinite spinner. This is the most direct user-facing complaint today.
- **Model quality**: The daily failure taxonomy ([#6682](https://github.com/nearai/ironclaw/issues/6682)) shows that many failures stem from partial or incomplete agent responses, even though code paths are technically correct. Users may experience inconsistent results.
- **No explicit satisfaction signals** in the data, but the high number of PRs suggests active iteration to address pain points.

## 8. Backlog Watch
- **PR #5598 – `chore: release`** (open since 2026-07-03, last updated 2026-07-26) – This is a release PR that has been open for over three weeks. It contains API-breaking changes for `ironclaw_common` and `ironclaw_skills`. Despite regular updates, it remains unmerged. It likely needs final review and sign-off to cut a release.
- **PR #5664 – `build(deps): bump the actions group across 1 directory with 16 updates`** (open since 2026-07-05) – Another long-pending dependency PR. Risk is medium due to multi-step GitHub Actions updates. May require manual intervention.
- **PR #6361 – `build(deps): bump the serialization group`** (open since 2026-07-20) – Stale but low risk; only serde and serde_json updates.
- **PR #6428 – `build(deps): bump the tokio-ecosystem group`** (open since 2026-07-21) – Stale low-risk dependency updates.
- **PR #6685 – `build(deps): bump the wasm group`** (open since 2026-07-26) – Medium risk due to wasmtime/wasm-tools updates; fresh but needs review.

The release PR (#5598) is the most critical item requiring maintainer attention, as it blocks official versioned releases. The stale dependency PRs should be merged or closed to reduce technical debt.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest – July 27, 2026

## 1. Today's Overview
Project activity remains very low, with no new releases and only two issues updated in the last 24 hours. One issue (#273, Linux support request) was closed without further action, while a critical bug (#1243, gateway restart loop) remains open with no assignee. Eight pull requests were updated, but all are marked as stale (last activity on July 26) and none have been merged – only one closed PR (#1325) was a minor UI improvement. The overall pace suggests maintainers may be in a low-activity phase or focusing on upstream dependencies.

## 2. Releases
No new releases or version tags were created. The latest release remains unknown; this absence may indicate a prolonged development cycle or a lack of stable builds for end users.

## 3. Project Progress
- **Closed PR – UI polish**: [#1325 – feat(ui): add tooltip on "new conversation" icon button](https://github.com/netease-youdao/LobsterAI/pull/1325) was merged yesterday. This adds `title` attributes to the pure-icon "new chat" button in several views, improving discoverability when the sidebar is collapsed.  
- **No other PRs were merged or closed today.** All seven remaining open PRs (listed in the data) have not seen any merge activity since April 1–2, indicating a significant review bottleneck.

## 4. Community Hot Topics
- **Issue #273 (closed)** – [Linux support request](https://github.com/netease-youdao/LobsterAI/issues/273)  
  *Comments: 2* – The user asked for an Ubuntu/Linux desktop version. The issue was closed without a resolution or roadmap explanation, leaving Linux users without official support.
- **Issue #1243 (open)** – [Gateway restart bug](https://github.com/netease-youdao/LobsterAI/issues/1243)  
  *Comments: 1* – The only actively open issue, describing a severe configuration loop that causes the OpenClaw gateway to restart every 5–20 minutes. Despite being open since April, it has attracted only a single comment and no fix pull request.

The low comment count across all items suggests that the user community is either small or disengaged, with only two pieces of feedback in the last 24 hours.

## 5. Bugs & Stability
| Severity | Issue | Description | Fix PR | Status |
|----------|-------|-------------|--------|--------|
| **High** | [#1243 (open)](https://github.com/netease-youdao/LobsterAI/issues/1243) | `qwen-portal-auth` plugin causes configuration loop, triggering OpenClaw gateway restarts every 5–20 minutes. Affects any model configuration. | None | No fix PR exists; issue was created Apr 1, last updated Jul 26. |
| **Low** | N/A | No new bugs or regressions were reported today. | – | – |

The gateway restart bug (#1243) is the most critical stability concern. It affects normal usage on Windows 10/11 with LobsterAI version 2026.4.1 and could degrade user trust if not addressed soon.

## 6. Feature Requests & Roadmap Signals
- **Linux desktop support** (#273, closed) – Despite being a popular request, the closure without comment signals that cross-platform support is not currently a priority.
- **Scheduled task enhancements** – Two stale PRs ([#1256](https://github.com/netease-youdao/LobsterAI/pull/1256) – natural language time input; [#1252](https://github.com/netease-youdao/LobsterAI/pull/1252) & [#1258](https://github.com/netease-youdao/LobsterAI/pull/1258) – unsaved changes confirmation) indicate that the team was working on improved task configuration workflows, but these have stalled for three months.
- **OpenClaw stability improvements** – PR [#1247](https://github.com/netease-youdao/LobsterAI/pull/1247) (model switch recovery) and [#1259](https://github.com/netease-youdao/LobsterAI/pull/1259) (gateway bundling) contain fixes that could directly address the #1243 bug, but neither has been reviewed or merged.

If any of these PRs are revived, the next release might include:
- Natural-language cron expression parsing for scheduled tasks.
- A confirmation dialog to prevent accidental data loss in forms.
- More robust model switching and gateway restart handling.

## 7. User Feedback Summary
- **Pain points**: Users are experiencing disruptive gateway restarts (#1243). One user requested native Linux support (#273) but received no visible acknowledgment.
- **Positive signals**: The tooltip improvement (#1325) addresses a long-standing UX issue – users previously had no indication of the "new conversation" button's function when the sidebar was collapsed.
- **Mixed**: Translations for "edit" and "delete" were missing (PR #1257), suggesting that internationalization coverage is still incomplete.

Overall sentiment appears neutral to frustrated: the gateway bug generates negativity, while recent small UI fixes show the team is alive but not making large strides.

## 8. Backlog Watch
The following items have been open for months without meaningful maintainer interaction and need urgent attention:

- **[#1243 – Gateway restart loop](https://github.com/netease-youdao/LobsterAI/issues/1243)** – Open since Apr 1, no assignee, no fix PR, only one comment. This is the most critical backlog item.
- **Stale pull requests (7 total)** – All created Apr 1–2, last updated Jul 26. They include bug fixes (gateway, diff rendering), features (scheduled tasks, i18n), and refactoring. None have received a maintainer review or merge. Key PRs:
  - [#1247 – OpenClaw model switch recovery](https://github.com/netease-youdao/LobsterAI/pull/1247)
  - [#1249 – Fix DiffView for Claude SDK tools](https://github.com/netease-youdao/LobsterAI/pull/1249)
  - [#1256 – Natural language scheduled tasks](https://github.com/netease-youdao/LobsterAI/pull/1256)
  - [#1259 – Gateway bundling optimization](https://github.com/netease-youdao/LobsterAI/pull/1259)

The project’s health is compromised by the large number of unresolved, untouched code changes. Without action on these items, the risk of bug accumulation and contributor attrition increases.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest – 2026-07-27

## 1. Today's Overview

On July 27, 2026, Moltis saw no new issues, no merged pull requests, and no releases. Despite the quiet merge lane, development activity remained high: **7 open pull requests were updated** in the last 24 hours, covering memory backends, PWA notifications, Slack integration, agent‑exposure via ACP, security hardening, and UI polish. The project is clearly in a heavy feature‑development phase, with maintainers pushing multiple parallel changes. The absence of closed PRs suggests these changes are still under review or iterative refinement.

## 2. Releases

No new releases were published on or near this date. The last known release remains at an earlier version; no migration notes or breaking changes are applicable.

## 3. Project Progress

No pull requests were merged or closed today. However, the following open PRs represent the most recent feature advances and fixes under active development:

- **#1158** – *feat(memory): add zvec vector database memory backend* (vibe‑coded, gated behind `zvec` cargo feature)
- **#1166** – *feat(slack): per‑message acknowledgment reactions, phases, reconnect supervision, and Block Kit* (builds on #1165)
- **#1169** – *feat(acp): expose Moltis as an ACP agent over stdio* (enables other harnesses to use Moltis as an agent)
- **#1171** – *Move ACP selection into the chat model picker* (streamlines client/provider model selection)
- **#1172** – *fix(web): hide archived cron sessions by default* (UI consistency with Playwright regression test)
- **#1173** – *feat(pwa): make push notifications reliable and non‑disruptive* (fixes silent replacement bug, adds `renotify`)

All are open and receiving updates this week.

## 4. Community Hot Topics

No issues were reported, so community discussion is focused entirely on open pull requests. The most notable PRs by impact and activity:

- **#1170 – *fix(channels): gate /sh and privileged tools behind a per‑account operators list***  
  [PR #1170](https://github.com/moltis-org/moltis/pull/1170)  
  **Why it matters:** This addresses a critical security gap – `/sh` (shell execution) was reachable by any channel member who passed the group access gate, effectively allowing arbitrary command execution on multi‑user instances (Discord guilds, group chats). The fix introduces an explicit operators list per account, aligning with least‑privilege best practices.

- **#1158 – *feat(memory): add zvec vector database memory backend***  
  [PR #1158](https://github.com/moltis-org/moltis/pull/1158)  
  **Underlying need:** Users and developers are exploring alternative lightweight vector stores for agent memory, independent of heavy dependencies. The `zvec` + `redb` combo, combined with an external embedding server, signals demand for modular memory backends that can run with minimal overhead.

- **#1173 – *feat(pwa): make push notifications reliable and non‑disruptive***  
  [PR #1173](https://github.com/moltis-org/moltis/pull/1173)  
  **Underlying need:** PWA users experienced silent notification replacement – a second message in a chat would overwrite the first without sound or alert. This PR restores expected behavior, indicating that notification reliability is a key user‑experience pain point for mobile/web users.

## 5. Bugs & Stability

No new bugs, crashes, or regressions were reported via issues today. However, **PR #1170** is a direct fix for a high‑severity vulnerability (unauthenticated shell execution via `\sh` in group chats). This issue likely existed in production but was not filed as a separate bug report. The fix is actively pending merge.

- **Severity:** Critical – affects multi‑user deployments (Discord, Slack, shared channels)  
- **Fix PR:** #1170 (open, updated today)  

No other stability concerns were surfaced.

## 6. Feature Requests & Roadmap Signals

While no feature requests were filed as issues, the open PRs provide strong signals for the project’s direction:

- **Vector memory backends** (#1158) – likely to be merged once reviewed, enabling users to choose between the default and `zvec` storage.
- **Moltis as an ACP agent** (#1169) – a strategic move to make Moltis interoperable with external ACP harnesses (Zed, `buzz-acp`, etc.), broadening its use as a drop‑in agent.
- **Unified ACP client selection** (#1171) – simplifying UI by merging client and model pickers, a quality‑of‑life improvement for power users.
- **Slack deep integration** (#1166) – adding reaction acknowledgments, phase feedback, and Block Kit indicates a push toward production‑grade Slack support.
- **Cron session archiving visibility** (#1172) – small UX fix, likely to be included in next patch release.
- **PWA notification reliability** (#1173) – essential for mobile/desktop PWA adoption.

The next minor release will likely bundle these features, with #1170 (security fix) possibly expedited as a patch.

## 7. User Feedback Summary

No explicit user feedback (comments, reactions) was recorded in the provided data. However, the PR summaries imply the following pain points and desires:

- **Pain point:** Silent notification replacement in PWA – users missed alerts because the service worker replaced them without `renotify`. (#1173)
- **Pain point:** Arbitrary shell execution in multi‑user channels – a serious security concern for community deployments. (#1170)
- **Desire:** Alternative, lightweight memory backends for users running on constrained hardware. (#1158)
- **Desire:** Ability to use Moltis as an agent from external tools (ACP protocol). (#1169)
- **Desire:** Better Slack experience – acknowledgment reactions, Block Kit messages, and reliable reconnection. (#1166)

User satisfaction appears high enough that no complaints were filed as issues; active development suggests maintainers are proactive.

## 8. Backlog Watch

No issues are currently open, so there is no backlog of unanswered questions or stalled features. All ongoing work is captured in the 7 open PRs listed above. Special attention should be given to:

- **#1170** – security fix – should be prioritized for merge to close the `/sh` vulnerability.
- **#1173** – notification reliability – directly affects user experience for PWA users.

No long‑standing PRs or issues have been abandoned; the project appears well‑maintained with timely updates.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-07-27

## 📊 Today’s Overview

CoPaw (QwenPaw) sees high community activity with **22 issues** and **20 pull requests** updated in the last 24 hours. Of the issues, 15 remain open/active and 7 were closed. Among PRs, 6 were merged or closed (including fixes and tests), while 14 are still open under review. No new releases were published today. The volume suggests a maintainer push to stabilise v2.0.x, with several long-standing bugs (MCP transport, Matrix E2EE, CPU spikes) now receiving targeted fix PRs. Community contributions are strong, with multiple first-time contributors submitting PRs for localisation and platform compatibility.

## 🚀 Releases

**No new releases today.** The latest available version remains **v2.0.1** (referenced in many issues). Users upgrading from v1.x to v2.0.0 reported missing features (SSH offline, profile 404) and embedding mapping bugs, which are being addressed through issue tracking and PRs.

## ✅ Project Progress (Merged/Closed PRs Today)

Six PRs were merged or closed in the last 24 hours, spanning documentation, testing, and feature enhancements:

- **[#6477 – docs(faq): align zh sub-section headings with en](https://github.com/agentscope-ai/QwenPaw/pull/6477)** (first-time contributor, merged) – Fixes inconsistent heading hierarchy in Chinese FAQ.
- **[#6488 – fix(console): keep sidebar settings gear visible when collapsed](https://github.com/agentscope-ai/QwenPaw/pull/6488)** – Improves UI discoverability on mobile and collapsed sidebar modes.
- **[#6426 – feat(models): allow renaming custom providers](https://github.com/agentscope-ai/QwenPaw/pull/6426)** – Addresses feature request #6414; adds `name` field to provider config for custom providers.
- **[#6365 – fix(console): run test scripts on Windows](https://github.com/agentscope-ai/QwenPaw/pull/6365)** (first-time contributor) – Replaces POSIX-only inline environment variables in npm scripts, unlocking Windows contributor workflow.
- **[#6417 – test(integration): Sprint 4.3+4.4 – workspace-git / coding-project / skill-pool auto-sync](https://github.com/agentscope-ai/QwenPaw/pull/6417)** – Adds integration coverage for three previously untested v2.0 endpoints.
- **[#6415 – test(e2e): add skill auto-sync cases](https://github.com/agentscope-ai/QwenPaw/pull/6415)** – Adds E2E regression tests for skill pool auto-sync feature.

All six are test-only or low-risk changes, indicating a focus on quality assurance.

## 🔥 Community Hot Topics

Issues and PRs sparking the most discussion (by comments and reactions):

- **[#5980 – v2.0.0 Missing features: SSH Offline, Profiles returning 404](https://github.com/agentscope-ai/QwenPaw/issues/5980)** (8 comments) – User frustration over regressions after upgrading from v1.1.12 to v2.0.0. Still closed but represents a major pain point for power users.
- **[#6155 – [Bug] 从 1.x 升级到 2.0 后，发现多个问题](https://github.com/agentscope-ai/QwenPaw/issues/6155)** (5 comments) – Embedding mapping bug and other upgrade issues. Highlights need for smoother migration docs and backward compatibility.
- **[#6470 – [Bug]: MCP driver ignoring transport config – hardcoded SSE client breaks streamable_http servers](https://github.com/agentscope-ai/QwenPaw/issues/6470)** (4 comments) – Critical transport-level issue. The same root cause was reported in three separate issues (#6468, #6469, #6470) by the same reporter, suggesting widespread impact. A fix PR [#6483](https://github.com/agentscope-ai/QwenPaw/pull/6483) adds regression tests for streamable HTTP transport.
- **[#6342 – [Question]: 如何验证 embedding 模型已生效？](https://github.com/agentscope-ai/QwenPaw/issues/6342)** (3 comments, 1 👍) – User confusion about verifying Reme vector storage. Indicates missing documentation or visible feedback.
- **[#6239 – Windows backend drops ';' separator when concatenating PATH](https://github.com/agentscope-ai/QwenPaw/issues/6239)** (3 comments, opened Jul 18) – Breaks npm global tools on Windows. Maintainer attention still pending.

## 🐛 Bugs & Stability

Eleven bug reports were updated today, several with high severity:

| Issue | Description | Severity | Fix PR Exists? |
|-------|-------------|----------|----------------|
| [#6470](https://github.com/agentscope-ai/QwenPaw/issues/6470) | MCP driver hardcoded SSE client, breaks Streamable HTTP servers | **Critical** – prevents MCP tool integration for many users | [#6483](https://github.com/agentscope-ai/QwenPaw/pull/6483) (test coverage, but hardcoded logic not yet fixed in main) |
| [#6474](https://github.com/agentscope-ai/QwenPaw/issues/6474) | `view_video` returns success but video DataBlock silently dropped – model never receives video | **High** – silent failure in multimodal workflows | No fix PR yet |
| [#6476](https://github.com/agentscope-ai/QwenPaw/issues/6476) | Matrix E2EE unavailable on Python 3.12 because `olm` probe fails | **High** – breaks private Matrix channels | [#6486](https://github.com/agentscope-ai/QwenPaw/pull/6486) |
| [#6471](https://github.com/agentscope-ai/QwenPaw/issues/6471) | Cron jobs misfire when event loop idle (APScheduler `AsyncIOScheduler`) | **Medium** – impacts scheduled tasks reliability | [#6481](https://github.com/agentscope-ai/QwenPaw/pull/6481) |
| [#6460](https://github.com/agentscope-ai/QwenPaw/issues/6460) | Single-tab high CPU on Edge+Wayland due to SSE replay buffer | **Medium** – degrades user experience on Linux | [#6485](https://github.com/agentscope-ai/QwenPaw/pull/6485) (caps buffer, adds heartbeat) |
| [#6482](https://github.com/agentscope-ai/QwenPaw/issues/6482) | Console UI lag when switching chat/agent | **Medium** – affects productivity | No PR yet |
| [#6480](https://github.com/agentscope-ai/QwenPaw/issues/6480) | `nohup` command never returns to idle, blocking agent | **Medium** – breaks long-running shell tasks | No PR yet |
| [#6472](https://github.com/agentscope-ai/QwenPaw/issues/6472) | JSON file line numbers disappeared in programming mode after upgrade to 2.0.1 | **Low** – cosmetic regression | No PR yet |
| [#6457](https://github.com/agentscope-ai/QwenPaw/issues/6457) | Task mode history shows excessive duplicate conversations | **Low** – data bloat | No PR yet |
| [#6464](https://github.com/agentscope-ai/QwenPaw/issues/6464) | AgentScope-deployed v2.0.1 cannot connect to any model | **Critical** (isolated to deployment? needs investigation) | No PR yet |
| [#6239](https://github.com/agentscope-ai/QwenPaw/issues/6239) | Windows PATH concatenation drops `;` between adjacent directories | **Medium** – impacts npm global tools | No PR yet, remains open since Jul 18 |

## 💡 Feature Requests & Roadmap Signals

Notable user-requested features and signals of upcoming development:

- **Cron task safety & notification granularity** ([#6458](https://github.com/agentscope-ai/QwenPaw/issues/6458)) – User proposes defaulting tool safety checks to ON for cron tasks and adding notification after completion. Indicates need for more robust job scheduling UX.
- **`notice_after_complete` tool** ([#6475](https://github.com/agentscope-ai/QwenPaw/issues/6475)) – Agent should be able to acknowledge a long-running task and continue conversation until the task completes. This is a conversational UX improvement that could appear in a minor release.
- **Traditional Chinese (zh-TW) support** ([#6478](https://github.com/agentscope-ai/QwenPaw/issues/6478)) – Already implemented as a PR ([#6484](https://github.com/agentscope-ai/QwenPaw/pull/6484)). Likely to land in next release.
- **Custom provider rename** (#6414) – Already merged in PR #6426, will ship in next patch.
- **Unified browser SDK** ([#6276](https://github.com/agentscope-ai/QwenPaw/pull/6276)) – Long-running PR to unify browser control behind one SDK. Still open since Jul 20, signals major feature in flight.
- **QwenPaw Creator app** ([#6284](https://github.com/agentscope-ai/QwenPaw/pull/6284)) – A plugin for video creation workflows. Under review, could introduce a new plugin category.
- **Windows sandbox support** ([#6383](https://github.com/agentscope-ai/QwenPaw/pull/6383), [#6462](https://github.com/agentscope-ai/QwenPaw/pull/6462)) – Native Windows isolation without WSL2. Active development.
- **Visual context compression** ([#6456](https://github.com/agentscope-ai/QwenPaw/pull/6456)) – PawFocus feature to compress long agent histories. Likely targeting v2.1.

## 📣 User Feedback Summary

Real user pain points and satisfaction signals from today’s activity:

- **Upgrade pain:** Multiple users report missing features and bugs after upgrading from v1.x to v2.0.x (#5980, #6155, #6472). The transition has been rough for some power users.
- **MCP integration frustration:** Three near-identical reports (#6468, #6469, #6470) about transport config being ignored indicate a systemic issue that undermines trust in MCP support.
- **Windows experience lags:** Contributors and users on Windows face script failures (#6365), PATH corruption (#6239), and UI issues (#6482). However, the Windows sandbox PRs show the team is investing in this platform.
- **Documentation gaps:** Questions about verifying embedding storage (#6342) and UI discoverability (#6488) suggest the v2.0 documentation hasn’t kept pace with new features.
- **Positive signals:** Community contributions are growing – three first-time contributors submitted PRs today (#6483, #6477, #6486). The “Visual Compact” feature and Creator app indicate an ambitious roadmap that excites the community.

## 📌 Backlog Watch

Issues that have been open for more than a few days without maintainer response or resolution:

- **[#6239 – Windows PATH concatenation drops `;`](https://github.com/agentscope-ai/QwenPaw/issues/6239)** – Opened Jul 18 (9 days ago). Last comment Jul 26. No maintainer acknowledegment. Affects all Windows users running npm-based tools.
- **[#6457 – Task mode history contains duplicate conversations](https://github.com/agentscope-ai/QwenPaw/issues/6457)** – Opened Jul 24 (3 days ago). No response from maintainers.
- **[#6482 – Console UI lag when switching chat/agent](https://github.com/agentscope-ai/QwenPaw/issues/6482)** – Opened today, but already 1 comment (likely user). No triage response yet.
- **Open PRs needing review:** [#6276](https://github.com/agentscope-ai/QwenPaw/pull/6276) (unified browser, since Jul 20), [#6284](https://github.com/agentscope-ai/QwenPaw/pull/6284) (Creator app, since Jul 20), [#6387](https://github.com/agentscope-ai/QwenPaw/pull/6387) (on-demand channel installation, since Jul 23), [#6456](https://github.com/agentscope-ai/QwenPaw/pull/6456) (Visual Compact, since Jul 24) – all await maintainer review or further iteration.

> **Overall health:** CoPaw is in a post-major-release stabilisation phase. Activity is high, community contributions are rising, but several regressions and gaps from the v2.0 rewrite are causing friction. Prompt resolution of the MCP transport and Matrix E2EE issues, better upgrade documentation, and faster triage of Windows bugs will improve user satisfaction.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-07-27

## 1. Today's Overview

ZeroClaw remains in a phase of intense development and bug-fixing, with **50 open issues** and **50 pull requests** updated in the last 24 hours. No new releases were published. The project is actively addressing a wide range of critical stability and security concerns – several S1 (workflow-blocked) and S2 (degraded behavior) bugs are being worked on in parallel. The community is highly engaged, commenting on cross-platform testing (Windows, macOS), sandboxing (Landlock), and channel integration (Telegram, Nextcloud, WhatsApp). While no release is imminent, a **v0.8.4 release cut PR** ([#9376](https://github.com/zeroclaw-labs/zeroclaw/pull/9376)) is already open, suggesting a coordinated push to ship accumulated fixes and minor features.

## 2. Releases

No new releases were generated in the last 24 hours. The latest release remains v0.8.3.

## 3. Project Progress

Only **two PRs were merged/closed** among the 50 updated; the single merged PR visible in the top 20 is a critical security fix:

- **[#9233](https://github.com/zeroclaw-labs/zeroclaw/pull/9233) — `fix(runtime/security): Prevent Landlock locks zeroclaw itself`** (merged). This resolves a dangerous issue where the Landlock sandbox was being applied to the daemon process itself, locking ZeroClaw out of its own file access. The fix also includes caller-thread safety, child-only enforcement, and a dedicated CI lane – part of the ongoing hardening of the sandbox tooling.

Other notable open PRs that signal active feature work:

- **[#8486](https://github.com/zeroclaw-labs/zeroclaw/pull/8486) — `feat(gateway): add OpenAI chat completions endpoint`** — a large (XL) enhancement that adds native OpenAI protocol support to the gateway, enabling compatibility with LangChain, IDE extensions, and the OpenAI SDK.
- **[#8337](https://github.com/zeroclaw-labs/zeroclaw/pull/8337) — `feat(observability): herdr agent reporting integration`** — adds Herdr lifecycle reporting (idle/working/blocked) inside Herdr panes.
- **[#9376](https://github.com/zeroclaw-labs/zeroclaw/pull/9376) — `chore(release): cut v0.8.4`** — prepares crates.io publishing, changelog, and crate removals; this is the release orchestration PR.

## 4. Community Hot Topics

The most active discussions (by comment count) highlight deep integration and reliability pain points:

- **[Issue #7462](https://github.com/zeroclaw-labs/zeroclaw/issues/7462)** (14 comments, P1) — *74 test failures on Windows*. The user reports that the test suite is Unix-only, fails miserably on Windows 11 (Chinese locale, code page 936). Community members are pushing for cross-platform CI coverage (promoted in related issue [#7461](https://github.com/zeroclaw-labs/zeroclaw/issues/7461)).

- **[Issue #9101](https://github.com/zeroclaw-labs/zeroclaw/issues/9101)** (7 comments, P1) — *Consolidate release attestation mechanisms*. The last release shipped three parallel signing mechanisms, causing CI redundancy and confusion. This is a maintainer-driven consolidation effort.

- **[Issue #5514](https://github.com/zeroclaw-labs/zeroclaw/issues/5514)** (6 comments, P2) — *Batch Telegram media groups into one multimodal turn*. Users sending multiple images on Telegram trigger per-image LLM requests, producing redundant agent replies.

- **[Issue #6157](https://github.com/zeroclaw-labs/zeroclaw/issues/6157)** (6 comments, P2) — *Nextcloud Talk use correct bot message API*. The channel uses the wrong API endpoint; a fix PR ([#9181](https://github.com/zeroclaw-labs/zeroclaw/pull/9181)) is open.

- **[Issue #8654](https://github.com/zeroclaw-labs/zeroclaw/issues/8654)** (5 comments, P1) — *skill-review fork panics with SIGSEGV*. A critical crash in the background skill review process after tool-heavy turns. In progress with high risk.

- **[Issue #9386](https://github.com/zeroclaw-labs/zeroclaw/issues/9386)** (2 comments, P1, filed 2026-07-26) — *Gemini API key leaked into chat via error message*. A security-critical bug: `sanitize_api_error` fails to strip the API key from URLs in transport errors, exposing the key to users.

## 5. Bugs & Stability

Severity is high across several areas. The following bugs were updated or filed in the last 24 hours, ranked by severity:

**S1 — Workflow blocked / Crash**
- [#8559](https://github.com/zeroclaw-labs/zeroclaw/issues/8559) — Agents stop working when exiting web dashboard chat. Blocks background task execution.
- [#9035](https://github.com/zeroclaw-labs/zeroclaw/issues/9035) — Docker Compose gateway binds to loopback behind a published port, causing “Connection refused”.
- [#7527](https://github.com/zeroclaw-labs/zeroclaw/issues/7527) — macOS desktop app can reopen blank / without window (still blocked, needs reproducer).
- [#9085](https://github.com/zeroclaw-labs/zeroclaw/issues/9085) — `try_enable_pgvector` panics on startup when pgvector memory backend is enabled.
- [#8654](https://github.com/zeroclaw-labs/zeroclaw/issues/8654) — skill-review SIGSEGV (panic=abort) after tool-heavy turns (fix in progress).
- [#8642](https://github.com/zeroclaw-labs/zeroclaw/issues/8642) — MCP/tool-schema cloning causes unbounded RSS growth (OOM risk).

**S2 — Degraded behavior / Security**
- [#7462](https://github.com/zeroclaw-labs/zeroclaw/issues/7462) — 74 test failures on Windows (CI blind spot).
- [#8973](https://github.com/zeroclaw-labs/zeroclaw/issues/8973) — Landlock blocks shell access to `/dev/null` on Fedora (fix PR [#9114](https://github.com/zeroclaw-labs/zeroclaw/pull/9114) open).
- [#9386](https://github.com/zeroclaw-labs/zeroclaw/issues/9386) — Gemini API key leaked into chat via error messages (critical security issue, no fix PR yet).
- [#6350](https://github.com/zeroclaw-labs/zeroclaw/issues/6350) — WhatsApp Web `allowed-numbers` bypassed for LID-based contacts (silent message drops, fix PRs [#9382](https://github.com/zeroclaw-labs/zeroclaw/pull/9382) and [#9385](https://github.com/zeroclaw-labs/zeroclaw/pull/9385) open).

Several fix PRs are actively in review, including those for Landlock, WhatsApp policies, Anthropic OAuth, and Nextcloud Talk bot API.

## 6. Feature Requests & Roadmap Signals

The most prominent feature in motion is the **OpenAI-compatible chat completions endpoint** ([#8486](https://github.com/zeroclaw-labs/zeroclaw/pull/8486)), which would make ZeroClaw usable as a drop-in replacement with standard LLM tooling. **Observability via Herdr** ([#8337](https://github.com/zeroclaw-labs/zeroclaw/pull/8337)) is another significant addition targeting agent lifecycle visibility.

User-requested enhancements with traction:
- [#8409](https://github.com/zeroclaw-labs/zeroclaw/issues/8409) — Cron shell jobs should support raw stdout output (opt-in).
- [#7099](https://github.com/zeroclaw-labs/zeroclaw/issues/7099) — Route `zeroclaw status` output through CLI i18n (ongoing, P3).
- [#7461](https://github.com/zeroclaw-labs/zeroclaw/issues/7461) — Run tests on Windows and macOS in CI (related to the 74-failure bug).

Given the v0.8.4 release cut PR, it is likely that the OpenAI endpoint, Herdr integration, and the bundle of Landlock/memory/channel fixes will be included in the next version. The attestation consolidation ([#9101](https://github.com/zeroclaw-labs/zeroclaw/issues/9101)) is also a strong candidate for inclusion.

## 7. User Feedback Summary

Real user pain points expressed in the last 24h:

- **Cross-platform gaps**: Windows users cannot run tests; macOS desktop disappears. Users on Fedora hit Landlock sandbox restrictions.
- **Channel integration failures**: Telegram media groups cause floods, Nextcloud Talk uses wrong API, WhatsApp silently drops messages for LID contacts, and Docker ports are unreachable.
- **Memory and stability**: Background skill-review crashes, unbounded RSS growth from MCP tool cloning, and zombie MCP processes under active daemon PIDs.
- **Security exposure**: API keys (Gemini) leaking into chat logs, and default command audit logging enabled (fix PR [#9410](https://github.com/zeroclaw-labs/zeroclaw/pull/9410) changes default to disabled).
- **Installation friction**: Termux/Android users get wrong binary; `zeroclaw models refresh` hint cannot resolve `models_cache.json` never being written.

Overall, users are actively deploying ZeroClaw in diverse environments but encountering rough edges. The development team is responding quickly with targeted fix PRs, but the number of open P1/P2 issues (over 50) indicates a high maintenance load.

## 8. Backlog Watch

Several important issues have been open for weeks without a clear resolution or maintainer response:

- [#7527](https://github.com/zeroclaw-labs/zeroclaw/issues/7527) — macOS desktop app blank/no window (open since 2026-06-12, status `blocked`, needs reproducer). No fix PR in sight.
- [#7911](https://github.com/zeroclaw-labs/zeroclaw/issues/7911) — install.sh selects generic Linux binary on Android/Termux (open 2026-06-18, 3 comments, marked `no-stale`).
- [#7269](https://github.com/zeroclaw-labs/zeroclaw/issues/7269) — Docs build warning noise (open 2026-06-05, P3, 2 comments).
- [#7870](https://github.com/zeroclaw-labs/zeroclaw/issues/7870) — Agent runtime options can leak from first configured provider (open 2026-06-17, P2 tracker, 1 comment).
- [#7872](https://github.com/zeroclaw-labs/zeroclaw/issues/7872) — QQ group replies need `msg_id` for passive reply sends (open 2026-06-17, P1 tracker, 1 comment; a fix has been merged but the tracker remains open).
- [#7828](https://github.com/zeroclaw-labs/zeroclaw/issues/7828) — Audit byte-limited string truncation for UTF-8 char-boundary safety (open 2026-06-17, P2 tracker).

These items, while not blocking immediate workflows, represent lingering liabilities that could benefit from maintainer triage or community contribution.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/boom7sss/agents-radar).*