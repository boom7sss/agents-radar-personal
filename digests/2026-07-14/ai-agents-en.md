# OpenClaw Ecosystem Digest 2026-07-14

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-07-14 02:56 UTC

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

# OpenClaw Project Digest – 2026-07-14

## Today's Overview

The project is **highly active**, with 500 issues and 500 pull requests updated in the last 24 hours. The community continues to drive momentum: 164 issues were closed and 213 PRs were merged or closed during this period. A new patch release **v2026.7.1** shipped, adding several new LLM providers and model defaults. However, the issue tracker shows a high number of **P0/P1 regressions** and critical bugs—especially around session state corruption, message loss, and database integrity—indicating that while feature velocity is high, stability remains a key concern.

## Releases

### v2026.7.1 – openclaw 2026.7.1  
[Release notes](https://github.com/openclaw/openclaw/releases/tag/v2026.7.1)

**Highlights:**
- **New models & providers:** Added Featherless, Claude Sonnet 5, Mythos 5, Meta Muse Spark 1.1, and ClawRouter.
- **Default model update:** GPT-5.6 is now the default for new setups, with `/think ultra` for Sol and Terra plus `max` for Luna.
- **OAuth improvements:** Honor Z.AI `max`; refresh model availability after OAuth re-authentication.

No breaking changes or migration notes were documented in this release.

## Project Progress

213 PRs were merged or closed in the last 24 hours. Among the highlighted PRs:

- **Session catalog & Codex integration**  
  - `#107009` (feat: upstream liveness for adopted catalog sessions) – closes #104804, improves session continuity across CLI/Desktop.  
  - `#106927` (feat: continue paired-node Codex catalog sessions from the Control UI) – *closed*, makes Codex sessions continuable.  
  - `#107004` (feat: notify Discord voice agents of participant changes) – closes #106882.  
- **Channel fixes**  
  - `#105994` (fix: explain Feishu content-policy delivery rejections) – closes #105976, improves user feedback.  
  - `#106541` (fix: add chunk-idle timeout to Feishu inbound media download) – prevents indefinite hangs.  
  - `#106178` (fix: bound Google Chat auth transporter fetches) – prevents stalled token fetches.  
  - `#106502` (fix: reject malformed relay audio base64) – improves Talk/transcription reliability.  
- **Regression & stability**  
  - `#103153` (fix: bound compaction planning worker payloads) – addresses #100635.  
  - `#106899` (fix: prevent completed Codex hook relays from lingering) – closes #106838.  
  - `#106314` (fix: preserve Gmail watcher bind errors across output chunks) – prevents endless respawn loops.  
- **UI & accessibility**  
  - `#106997` (feat: native-feel dashboard hosting on macOS) – adds instant reopen, preload, frame autosave.  
  - `#96267` (fix: make session history accessible in picker and sidebar) – improves Web UI accessibility.

## Community Hot Topics

Most active issues and pull requests (by comment count and reaction score):

| Issue/PR | Comments | 👍 | Summary |
|----------|----------|----|---------|
| [#75](https://github.com/openclaw/openclaw/issues/75) | 112 | 81 | **Linux/Windows Clawdbot Apps** – cross‑platform gap is a long‑standing request. |
| [#7707](https://github.com/openclaw/openclaw/issues/7707) | 18 | 0 | **Memory Trust Tagging by Source** – prevent memory poisoning. |
| [#104721](https://github.com/openclaw/openclaw/issues/104721) | 16 | 1 | **P0 regression:** Tool results all return literal "(see attached image)". |
| [#102020](https://github.com/openclaw/openclaw/issues/102020) | 13 | 1 | **Session initialization conflict** on second message (cross‑channel). |
| [#38327](https://github.com/openclaw/openclaw/issues/38327) | 11 | 3 | **P1 regression:** `Cannot convert undefined or null to object` with google‑vertex/gemini‑3.1. |
| [#101290](https://github.com/openclaw/openclaw/issues/101290) | 11 | 1 | **P0 regression:** CLI startup corrupts live state DB – database malformed. |
| [#90213](https://github.com/openclaw/openclaw/issues/90213) | 10 | 1 | **Legacy state migration warnings** persist even after `doctor --fix`. |
| [#10687](https://github.com/openclaw/openclaw/issues/10687) | 10 | 3 | **Dynamic model discovery** for providers (OpenRouter). |
| [#7722](https://github.com/openclaw/openclaw/issues/7722) | 10 | 4 | **Filesystem sandboxing config** (`tools.fileAccess`). |
| [#11665](https://github.com/openclaw/openclaw/issues/11665) | 9 | 0 | **Webhook session reuse** for multi‑turn conversations. |

**Underlying needs:** The community is urgently requesting desktop parity (Linux/Windows), stronger security defaults (memory tagging, filesystem sandboxing), and fixes for regressions that break core functionality (tool outputs, session persistence, database integrity).

## Bugs & Stability

Critical bugs reported or updated in the last 24 hours, ranked by severity:

| Severity | Issue | Short Description | Fix PR Exists? |
|----------|-------|-------------------|----------------|
| **P0** | [#104721](https://github.com/openclaw/openclaw/issues/104721) | All tool results return literal “(see attached image)” – complete data loss. | No fix PR linked. |
| **P0** | [#101290](https://github.com/openclaw/openclaw/issues/101290) | CLI preflight corrupts live state DB while gateway is running (“malformed database”). | No fix PR linked. |
| **P0** | [#103076](https://github.com/openclaw/openclaw/issues/103076) | Legacy‑state migration still blocks gateway startup after previous fix (#102780). | No fix PR linked. |
| **P0** | [#100121](https://github.com/openclaw/openclaw/issues/100121) | Exec/tool failures show “(see attached image)” and suppress model response (regression in 2026.6.11). | No fix PR linked. |
| **P1** | [#38327](https://github.com/openclaw/openclaw/issues/38327) | “Cannot convert undefined or null to object” with google‑vertex/gemini‑3.1 (regression in 2026.3.2). | No fix PR linked. |
| **P1** | [#102020](https://github.com/openclaw/openclaw/issues/102020) | Second message fails with “reply session initialization conflicted” (cross‑channel). | [#102400](https://github.com/openclaw/openclaw/pull/102400) (closed) addressed Slack/webchat path, but root cause may still exist. |
| **P1** | [#92057](https://github.com/openclaw/openclaw/issues/92057) | Gateway slow/timeouts under multi‑session load. | No fix PR linked. |
| **P1** | [#77012](https://github.com/openclaw/openclaw/issues/77012) | WebChat transcript overwritten on every turn (regression in 2026.5.2). | No fix PR linked. |
| **P1** | [#92769](https://github.com/openclaw/openclaw/issues/92769) | Reasoning fields dropped from message history for MiniMax M3 via OpenRouter. | No fix PR linked. |
| **P1** | [#76665](https://github.com/openclaw/openclaw/issues/76665) | Session context silently lost between turns with Z.AI provider. | No fix PR linked. |

**Observations:** Several P0/P1 bugs are regressions from recent releases (2026.3.2, 2026.5.2, 2026.6.6, 2026.6.11). The “see attached image” issue appears in two separate bugs suggesting a systemic problem with tool output rendering. No fix PR is currently open for any of the top P0 items, which could delay the next stable release.

## Feature Requests & Roadmap Signals

High‑impact feature requests with strong community support (by reaction or comment count):

- **Cross‑platform desktop apps** ([#75](https://github.com/openclaw/openclaw/issues/75)) – Linux/Windows clients. This has been open since Jan 2026 with 81 👍. Likely a long‑term roadmap item.
- **Memory trust tagging by source** ([#7707](https://github.com/openclaw/openclaw/issues/7707)) – addresses memory poisoning. Could become a security priority.
- **Filesystem sandboxing** ([#7722](https://github.com/openclaw/openclaw/issues/7722)) – received 4 👍 and a clear config proposal. Might align with upcoming security hardening.
- **Denylist support for exec‑approvals** ([#6615](https://github.com/openclaw/openclaw/issues/6615)) – 7 👍; allows “allow all except X” policies. Likely to be implemented soon given the existing allowlist framework.
- **Dynamic model discovery** ([#10687](https://github.com/openclaw/openclaw/issues/10687)) – 3 👍, but important for fast‑moving providers. Could be in next minor release.
- **Per‑model generation timeout** ([#8724](https://github.com/openclaw/openclaw/issues/8724)) – prevent infinite thinking loops. Requested by user for Google models.
- **Context length fallback** ([#9986](https://github.com/openclaw/openclaw/issues/9986)) – trigger fallback on context exceeded, not just API errors. Likely to be addressed as part of fallback chain improvements.
- **OpenRouter cost exposure** ([#9016](https://github.com/openclaw/openclaw/issues/9016)) – exposes per‑message costs to agents. Could be gated behind an experimental flag.
- **TUI accessibility** ([#9637](https://github.com/openclaw/openclaw/issues/9637), [#10118](https://github.com/openclaw/openclaw/issues/10118)) – disable emojis, support Shift+Enter for multiline. Low priority but clear community desire.

**Prediction for v2026.8.x:** The team will likely prioritise fixing the “see attached image” P0 regressions and the DB corruption issue. Among features, exec‑approval denylist and filesystem sandboxing are most mature and could land soon. Dynamic model discovery may appear as an opt‑in experimental feature.

## User Feedback Summary

**Satisfaction points:**
- The new release v2026.7.1 brings desired model support (GPT‑5.6 default, Claude Sonnet 5) and better OAuth handling.
- Several channel‑specific fixes (Feishu, Google Chat, Telegram) are being actively merged, showing responsiveness to platform issues.

**Dissatisfaction / pain points:**
- **Cross‑platform desktop frustration** – Issue #75 has been open for 7 months with no progress on Linux/Windows apps. Users express impatience.
- **Regressions causing data loss** – The “(see attached image)” placeholder (issues #104721, #100121) and session transcript overwriting (#77012) are breaking core workflows.
- **Database corruption** – Issue #101290 reports the SQLite database being corrupted multiple times; users cannot trust persistent storage.
- **Memory poisoning risk** – Feature requests like #7707 and #7722 indicate users are concerned about security in multi‑source agent setups.
- **Webhook multi‑turn not working** – Issue #11665 documents a feature that is documented but broken; test coverage appears insufficient.
- **Scalability concerns** – Issue #92057 (gateway slowdown under load) and #98790 (session tree corruption under concurrency) suggest the system struggles with multi‑agent, multi‑session scenarios.

**Overall sentiment:** The community remains engaged but is experiencing a wave of regressions that lower trust in the stable channel. Demand for security and desktop parity continues.

## Backlog Watch

Long‑standing issues and PRs that require maintainer attention (open >1 month, high priority or high community involvement):

| Issue/PR | Open Since | Priority | Why Stalled |
|----------|------------|----------|-------------|
| [#75](https://github.com/openclaw/openclaw/issues/75) – Linux/Windows apps | Jan 2026 | P2 | Needs product decision and implementation capacity. |
| [#7707](https://github.com/openclaw/openclaw/issues/7707) – Memory trust tagging | Feb 2026 | P2 | Needs security‑review and product decision. |
| [#6615](https://github.com/openclaw/openclaw/issues/6615) – Exec‑approvals denylist | Feb 2026 | P2 | Has clear design, but no assignee. |
| [#10687](https://github.com/openclaw/openclaw/issues/10687) – Dynamic model discovery | Feb 2026 | P2 | Requires architectural change to provider catalog. |
| [#7722](https://github.com/openclaw/openclaw/issues/7722) – Filesystem sandboxing | Feb 2026 | P2 | Security review and product decision blocking. |
| [#9986](https://github.com/openclaw/openclaw/issues/9986) – Context length fallback | Feb 2026 | P2 | Needs maintainer review and product decision. |
| [#11665](https://github.com/openclaw/openclaw/issues/11665) – Webhook session reuse | Feb 2026 | P2 | Has linked PR open (#11665 is linked, but PR itself not evident in data). |
| [#77802](https://github.com/openclaw/openclaw/issues/77802) – `doctor --fix` fails atomically | May 2026 | P2 | Reproduced, waiting for maintainer review. |
| [#77121](https://github.com/openclaw/openclaw/issues/77121) – Exec tool can launch heavy commands | May 2026 | P1 | Security risk, needs product decision and live repro. |
| [#97198](https://github.com/openclaw/openclaw/pull/97198) – Feishu bot identity recovery | Jun 2026 | P1 | PR open, status “📣 needs proof”; author may need to respond. |
| [#97280](https://github.com/openclaw/openclaw/pull/97280) – OpenAI OAuth for audio transcription | Jun 2026 | P1 | PR marked “ready for maintainer look” but not merged. |
| [#99057](https://github.com/openclaw/openclaw/pull/99057) – Matrix message field normalization | Jul 2026 | P2 | PR waiting for maintainer review. |

**Call to action:** Several P1/P0 regressions (e.g., #104721, #101290) still lack fix PRs. Maintainers should prioritise these over new features to restore stability. Community members have provided detailed reproduction steps and root‑cause analysis, reducing investigation effort.

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: Personal AI Assistant Open-Source Ecosystem

**Date:** 2026-07-14  
**Prepared by:** Senior Ecosystem Analyst

---

## 1. Ecosystem Overview

The open-source personal AI assistant landscape continues to experience rapid fragmentation and maturation. This week reveals an ecosystem-wide pattern: projects are emerging from major version upgrades (CoPaw v2.0.0, ZeroClaw v0.8.3) while simultaneously battling post-release regressions—particularly around tool-calling reliability, state persistence, and database integrity. The core tension observed across all active projects is between **feature velocity** and **stability**, with multiple projects (OpenClaw, NanoBot, IronClaw) acknowledging P0/P1 regressions that break fundamental workflows. Notably, the community is coalescing around shared requirements for memory controls, sandboxing, and cross-platform desktop parity, suggesting the ecosystem is maturing beyond basic chat agents toward production-ready autonomous systems.

---

## 2. Activity Comparison

| Project | Issues Updated (24h) | PRs Updated (24h) | PRs Merged/Closed | Release | Health Score | Key Stability Concern |
|---------|---------------------|-------------------|-------------------|---------|--------------|----------------------|
| **OpenClaw** | 500 | 500 | 213 merged, 164 closed | v2026.7.1 | 🟡 Medium | P0 regressions (tool results, DB corruption) |
| **NanoBot** | 14 | 44 | 17 merged/closed | None | 🟢 Good | Heartbeat regression, memory leak (#4787) |
| **Hermes Agent** | N/A | 10 merged, 38 issues closed | 10 merged | None | 🟢 Good | IME input (resolved), Kanban routing open |
| **PicoClaw** | 4 | 5 | 1 merged | None | 🟢 Stable | libolm security (stalled 35 days) |
| **NanoClaw** | 3 closed | 33 | 26 merged/closed | None | 🟢 Excellent | WhatsApp group send (fix in review) |
| **NullClaw** | 0 | 10 (all open) | 0 | None | 🟡 Slow | 5 fix PRs pending review (oldest 28 days) |
| **IronClaw** | 34 | 50 | 17 merged | None | 🟢 Active | 13 new bug bash issues, Slack DM routing |
| **LobsterAI** | 0 | 15 | 13 merged | None | 🟢 Active | Windows installer/signing (fixed) |
| **Moltis** | 0 | 1 | 0 | None | 🔴 Low | CalDAV fix pending (#1147) |
| **CoPaw** | 50 | 50 | 27 closed, 29 merged | v2.0.0.post1 | 🟡 Post-release | Context compression broke tool pairing |
| **TinyClaw** | 0 | 0 | 0 | None | 🔴 Inactive | No activity |
| **ZeptoClaw** | 0 | 0 | 0 | None | 🔴 Inactive | No activity |
| **ZeroClaw** | 50 | 50 | 14 closed, 2 merged | None | 🟢 Active | Docker loopback binding, Landlock sandbox |

**Health Score Key:**
- 🟢 **Excellent/Active** – High merge velocity, regressions being addressed, clear roadmap
- 🟡 **Medium/Post-release** – Active but facing significant regressions or major-version cleanup
- 🟢 **Good/Stable** – Few regressions, steady progress
- 🟡 **Slow** – Low activity, pending reviews
- 🔴 **Low/Inactive** – Minimal development

---

## 3. OpenClaw's Position

**Advantages vs. Peers:**
- **Largest community and activity**: 500+ issues/PRs updated daily, 213 PRs merged in 24 hours—far exceeds all other projects. This indicates unmatched contributor base and user adoption.
- **Fastest release cycle**: v2026.7.1 shipped this week with new models (Claude Sonnet 5, GPT-5.6 default). No other project matched this feature velocity.
- **Richest model/provider support**: Featherless, Mythos 5, Meta Muse Spark 1.1, ClawRouter—unique breadth of LLM integrations.
- **Ecosystem reference implementation**: As the core reference architecture (github.com/openclaw/openclaw), it sets standards for API design and session management that downstream projects inherit.

**Technical Approach Differences:**
- Emphasizes **session catalog + Codex integration** for session continuity across CLI/Desktop—a sophisticated state management approach not seen in peers.
- OAuth re-authentication triggers model availability refresh, showing tight coupling between auth and model lifecycle.
- More **channel-specific transports** (Feishu, Google Chat, Telegram, Discord) than any competitor—built-in multichannel as a first-class concern.

**Community Size Comparison:**
- OpenClaw's activity volume (500 issues/PRs per day) dwarfs all others. The next most active (CoPaw, ZeroClaw, IronClaw) each operate at ~50 issues/PRs/day—a 10x difference.
- However, **stability perception is lower**: 10 open P0/P1 regressions with no fix PRs, including critical "see attached image" tool output bug. Users report data loss and DB corruption, damaging trust.

**Key Weakness:** Feature velocity is outpacing quality assurance. The "see attached image" placeholder appears in multiple P0 bugs, suggesting a systemic rendering issue. No other project reports similar systemic tool-output failures.

---

## 4. Shared Technical Focus Areas

The following requirements are emerging *independently* across multiple projects, indicating ecosystem-level demand:

| Focus Area | Projects Affected | Specific Need |
|------------|-------------------|---------------|
| **Tool-Calling Reliability** | OpenClaw (#104721, #100121), CoPaw (#5996, #5986), NanoBot (#4864), IronClaw (#6049) | Tool results returning placeholders, orphan `ToolResultBlock`, infinite loops on tool completion |
| **State Persistence & DB Integrity** | OpenClaw (#101290), CoPaw (v2.0.0 regressions), ZeroClaw (#9046) | SQLite corruption during CLI startup, session loss, `models_cache.json` never written |
| **Approval Flow & Security** | OpenClaw (#7707), NanoClaw (#2827, #2762), NullClaw (#969), PicoClaw (#3088) | Approval smuggling (MCP server args hidden), memory poisoning, `libolm` replacement, structured approval flows |
| **Channel Reliability** | OpenClaw (Feishu/Google Chat fixes), NanoBot (#4897 Discord), NanoClaw (WhatsApp #3038), IronClaw (#5943 Slack DM), ZeroClaw (#8973 Landlock) | Specific channel adapter failures: WhatsApp group send, Discord message receipt, Slack DM routing, Docker loopback |
| **Desktop Parity** | OpenClaw (#75 – Linux/Windows apps), Hermes Agent (Windows console, ConPTY), LobsterAI (Windows installer) | Cross-platform desktop clients as a recurring 7+ month request |
| **Memory Controls** | OpenClaw (#7707), NullClaw (#961), ZeroClaw (#9048) | Trust tagging, configurable recall, separation of conversation history from long-term memory |
| **Sandboxing** | OpenClaw (#7722), CoPaw (#5879, #6054), ZeroClaw (#8973), Hermes Agent (filesystem) | Filesystem access controls, global sandbox toggle, Landlock compatibility, shell execution safety |

**Implication for developers:** If you're building on any of these platforms, prioritize validating tool-calling pipelines, session persistence under load, and approval-flow integrity before relying on them for production agent workflows.

---

## 5. Differentiation Analysis

| Dimension | OpenClaw | NanoBot | Hermes Agent | PicoClaw | NanoClaw | IronClaw | CoPaw | ZeroClaw |
|-----------|----------|---------|--------------|----------|----------|----------|-------|----------|
| **Primary Target User** | Power users, multi-channel deployers | Lightweight/embedded agents | Desktop productivity users | Edge/IoT devices | Security-conscious deployers | Enterprise/team workflows | Chinese-language developers | Decentralized/secure deployments |
| **Core Architecture** | Monorepo reference, session-catalog + Codex | Modular, heartbeat-driven cron | Desktop-native with ConPTY | Minimal embedded (Sipeed hardware) | Rules-engine heavy, approval-centric | WASM channels, Reborn loop | Major v2 rewrite, AgentScope integration | Zero-knowledge, Tauri sidecar |
| **Community Language** | English primary | English primary | English primary | English/Chinese | English primary | English primary | **Chinese primary** (PRs in Chinese) | English primary |
| **Key Feature Distinction** | Broadest model/provider support (11+ new in one release) | Dream memory system with diff-based compression | IME input handling, ConPTY Windows bridge | Anthropic caching, vodozemac migration | Dial channel (SMS+voice), scheduled tasks | Matrix Reborn channel, NEA-25 extension model | Sandbox governance, MCP sub-tool controls | Landlock sandbox, local-first mode RFC |
| **Release Maturity** | Continuous patches (v2026.7.1) | Minor releases only | Bug-fix cycles | No recent release | No recent release | No recent release | Major patch (v2.0.0.post1) | v0.8.3 milestone closeout |
| **Open PR Backlog Risk** | Low (high merge velocity) | Moderate (4 stalled PRs) | **High** (39-day-old PRs) | **High** (35-day security issue) | Low (26 merged in 24h) | Moderate | Low (29 merged) | Moderate (6 stalled `needs-author-action`) |

**Key Takeaways:**
- **OpenClaw** = broadest ecosystem but highest regression risk
- **NanoClaw** = fastest bug fix cycle, security-conscious
- **IronClaw** = most enterprise-oriented (WASM, extension model)
- **CoPaw** = strongest Chinese-language community, post-major-version refactor
- **ZeroClaw** = most architecturally innovative (RFC-driven, local-first)

---

## 6. Community Momentum & Maturity

### Tier 1: Rapidly Iterating (High Feature Velocity, Some Instability)
| Project | Evidence | Risk Profile |
|---------|----------|--------------|
| **OpenClaw** | 213 PRs merged/24h, new release v2026.7.1 | High: P0 regressions, data loss |
| **NanoClaw** | 26 PRs merged/24h, security fixes landed | Low: excellent fix velocity |
| **Hermes Agent** | 38 issues closed, 10 PRs merged | Low: IME fixes landed same day |
| **IronClaw** | 17 PRs merged, bug bash ongoing | Medium: 13 new bugs, Slack broken |
| **LobsterAI** | 13 PRs merged, Windows installer fixed | Low: focused stabilization sprint |

### Tier 2: Stabilizing Post-Major-Release
| Project | Evidence | Risk Profile |
|---------|----------|--------------|
| **CoPaw** | v2.0.0.post1 released, 29 PRs merged | High: context compression breakage, user frustration |
| **ZeroClaw** | v0.8.3 closeout, 14 issues closed | Medium: sandbox issues, Docker blocking |

### Tier 3: Steady, Lower-Velocity
| Project | Evidence | Risk Profile |
|---------|----------|--------------|
| **NanoBot** | 17 PRs merged | Low: moderate activity, no major breakage |
| **PicoClaw** | 1 PR merged | Medium: stalled security issue (libolm) |
| **NullClaw** | 0 PRs merged, 10 pending | Medium: 5 fix PRs pending 28+ days |

### Tier 4: Low Activity
| Project | Evidence |
|---------|----------|
| **Moltis** | 1 PR open (CalDAV fix), no merges |
| **TinyClaw** | No activity in 24 hours |
| **ZeptoClaw** | No activity in 24 hours |

**Maturity Assessment:** The ecosystem is **mid-stage**: core projects have established architectures but still experience critical regressions that erode trust. The most mature projects (NanoClaw, Hermes Agent) demonstrate fast incident response, while the largest (OpenClaw) struggles with scale of regressions.

---

## 7. Trend Signals

### Industry Trends Extracted from Community Feedback

**1. "Tool-Calling Reliability Is Non-Negotiable"**
- 5 of 7 active projects report tool-call failures as their top stability issue
- The "(see attached image)" placeholder bug (OpenClaw #104721, #100121) represents a failure mode that breaks all downstream autonomous workflows
- **Value for developers:** Tool-calling *must* be tested under compression, serialization, and multi-turn context scenarios. Any tool-output formatting layer is a single point of failure.

**2. "Security Is Shifting from Authentication to Authorization"**
- Multiple projects now grappling with approval smuggling (NanoClaw #2827, nullClaw #969), memory poisoning (OpenClaw #7707), and unmaintained crypto dependencies (PicoClaw #3088)
- The shift is from "can the user access the agent?" to "what can the agent access?"
- **Value for developers:** Invest in fine-grained approval flows, memory access controls, and dependency audit. Agent safety is becoming a non-negotiable feature, not a nice-to-have.

**3. "Channel Reliability Drives Real-World Adoption"**
- Specific channel adapter failures (WhatsApp group send, Discord message receipt, Slack DM routing) are blocking production deployments
- Multi-channel bots are the dominant use case, but each channel introduces unique failure modes
- **Value for developers:** Prefer projects that treat channels as first-class citizens with dedicated testing (NanoClaw, OpenClaw). Channel-specific bugs are the most frequent cause of user complaints.

**4. "Desktop Parity Remains a Barrier"**
- OpenClaw's #75 (Linux/Windows apps) has 81 reactions and 112 comments over 7 months
- Zero progress on cross-platform desktop clients across all projects except Hermes Agent (Windows ConPTY) and LobsterAI (Windows installer fixes)
- **Value for developers:** If your deployment requires desktop clients, expect to invest in platform-specific work. No project offers parity across macOS/Linux/Windows today.

**5. "Post-Major-Version Regressions Are a Recurring Pattern"**
- CoPaw v2.0.0 and IronClaw bug bash both exhibit the same pattern: major rewrite introduces systemic breakages that take weeks to stabilize
- OpenClaw's "see attached image" regression dates to v2026.6.11—still unfixed after 30+ days
- **Value for developers:** Avoid upgrading to x.0.0 releases immediately. Wait for x.0.2+ patches. Track whether the project has a regression test suite specifically for tool-calling and session persistence.

**6. "Memory Management Is the Next Frontier"**
- Three concurrent RFCs on memory separation (OpenClaw #7707, NullClaw #961, ZeroClaw #9048)
- The ecosystem recognizes that current "append-all" memory models are unsustainable for long-running agents
- **Value for developers:** Plan for configurable memory recall limits, trust-based tagging, and separation of session history from agent-curated memory. This will become a standard architecture pattern in 2026-2027 releases.

### Urgent Recommendation
For teams evaluating which project to build on: **NanoClaw** demonstrates the strongest balance of feature velocity, security responsiveness, and reliability this week. **OpenClaw** remains the ecosystem leader in breadth but should not be deployed in production until the tool-output rendering bug (#104721) and DB corruption bug (#101290) are resolved. Monitor **ZeroClaw's** memory separation RFC (#9048) as it could set the standard for agent memory architecture across the ecosystem.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-07-14

## Today’s Overview
NanoBot shows moderate activity over the last 24 hours, with 14 issues updated (3 open) and 44 pull requests updated (17 merged/closed, 27 open). No new releases were published. The community focuses on fixing regressions introduced by recent heartbeat and dream‑memory changes, while several open PRs continue to mature. Overall project health appears stable, though a few high‑severity bugs (resource leaks, agent looping) remain unresolved.

## Releases
No new releases in the last 24 hours.

## Project Progress
The following pull requests were merged or closed today, advancing several features and fixes:

- **Audit Tool** — PR [#4320](https://github.com/HKUDS/nanobot/pull/4320) added a minimal, configurable `tools.audit` module for agent action observability.
- **Dream Memory Fix** — PR [#4909](https://github.com/HKUDS/nanobot/pull/4909) corrected diff comparison to ignore CRLF/LF line‑ending differences.
- **Localization** — PR [#4914](https://github.com/HKUDS/nanobot/pull/4914) added full Brazilian Portuguese (pt‑BR) translation for the WebUI.
- **Documentation** — PRs [#4913](https://github.com/HKUDS/nanobot/pull/4913) and [#4912](https://github.com/HKUDS/nanobot/pull/4912) updated the README with recent changelog entries and removed a broken Star History embed.

These changes, along with the other 12 closed PRs not detailed above, indicate steady progress across audit instrumentation, internationalization, and documentation quality.

## Community Hot Topics
The most active discussions revolve around tool‑integration regressions and memory management:

- **Endless loop in `complete_goal`** — Issue [#4864](https://github.com/HKUDS/nanobot/issues/4864) (3 comments) reports a gateway bug where tool parameter serialisation broke, causing an infinite loop. This is a high‑impact issue affecting agent goal completion.
- **Discord bot integration failure** — Issue [#4897](https://github.com/HKUDS/nanobot/issues/4897) (3 comments) describes a configuration where the bot appears online but never receives messages. Community members are seeking workarounds while a fix is investigated.
- **Forced output verbosity** — Issue [#1500](https://github.com/HKUDS/nanobot/issues/1500) (2 comments, 1 👍) calls for a message‑level filtering mechanism, echoing a long‑standing user desire for less cluttered agent logs.

These issues reflect underlying needs for better tool‑parameter handling, channel reliability, and user‑control over logging verbosity.

## Bugs & Stability
Several bugs were reported or actively addressed in the last 24 hours, ranked by severity:

| Severity | Bug | Status | Fix PR |
|----------|-----|--------|--------|
| High | Endless loop on `complete_goal` due to gateway serialisation change (#4864) | Open — no fix PR yet | — |
| High | Unbounded `Session.messages` list causing memory leak (#4787) | Open — no fix PR yet | — |
| Medium | Dream session pruning fails for base64‑encoded filenames (#4894) | Closed via PR [#4909](https://github.com/HKUDS/nanobot/pull/4909) | ✅ |
| Medium | `/dream-log` and `/dream-restore` include non‑Dream commits (#4893) | Closed | — |
| Medium | UTF‑16 output from Windows shell tools shows NUL bytes (#4881) | Fix PR [#4917](https://github.com/HKUDS/nanobot/pull/4917) open | ⏳ |
| Low | Test setup missing `lark-oapi` for Feishu tests (#4887) | Closed | — |
| Low | Dream diff reports unchanged empty files as modified (#4882) | Closed | — |

Additionally, PR [#4915](https://github.com/HKUDS/nanobot/pull/4915) (open) aims to fix heartbeat response‑evaluation regressions introduced by the migration to cron, and PR [#4839](https://github.com/HKUDS/nanobot/pull/4839) (open) addresses HTML `parse_mode` issues during Telegram stream overflow.

## Feature Requests & Roadmap Signals
User‑requested enhancements and in‑progress features suggest the following may land in the next minor release:

- **Guarded tool gateway for channels** — Issue [#4911](https://github.com/HKUDS/nanobot/issues/4911) proposes a seam allowing channels to run agent tools (e.g., for real‑time voice). Low community traction but architecturally important.
- **Model preset per session** — PR [#4866](https://github.com/HKUDS/nanobot/pull/4866) persists model preset selection in session metadata, an enabler for multi‑model workflows.
- **Heartbeat CLI trigger** — PR [#4620](https://github.com/HKUDS/nanobot/pull/4620) adds `nanobot heartbeat trigger` for manual or cron‑driven control.
- **Auto‑discovery of agent hooks** — PR [#4878](https://github.com/HKUDS/nanobot/pull/4878) automates hook registration via `pkgutil` scanning, mirroring the channels/tools pattern.
- **WebUI / `config.json` parity** — PR [#4313](https://github.com/HKUDS/nanobot/pull/4313) (open, conflict label) closes the gap between UI settings and configuration file fields.
- **Message level filtering** — Issue [#1500](https://github.com/HKUDS/nanobot/issues/1500) remains a recurring request, likely to be considered after core stability improves.

## User Feedback Summary
Real pain points expressed by the community today include:

- **Discord integration not receiving messages** despite correct API configuration and online status (#4897). User frustration is evident.
- **Tool parameter serialisation regression** causing agent loops (#4864), indicating insufficient testing before a recent update.
- **Forced output of intermediate steps** (#1500) — users want control over verbosity, especially for cron‑based autonomous tasks.
- **Resource leak in long‑running sessions** (#4787) — a systemic issue affecting users with unified sessions.
- **Feishu file handling** (#2352, closed) remains problematic for some users, though the issue is older and may have been resolved.

Overall sentiment is mixed: the project is active and responsive, but recent regressions have eroded confidence in core stability.

## Backlog Watch
The following open pull requests have been pending for over a month and may need maintainer attention or rebase:

- **Telegram streaming via `sendMessageDraft`** — PR [#1599](https://github.com/HKUDS/nanobot/pull/1599) (open since Mar 6, conflict label) — important for real‑time Telegram UX, but stalled.
- **WebUI / config.json parity** — PR [#4313](https://github.com/HKUDS/nanobot/pull/4313) (open since Jun 12, conflict label) — adds essential configuration features.
- **WebUI Markdown export** — PR [#4587](https://github.com/HKUDS/nanobot/pull/4587) (open since Jun 29) — a requested productivity feature.

No open issues are currently very old or completely ignored, but these PRs risk becoming stale without attention.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest – 2026-07-14

---

## 1. Today's Overview

The project is in a high-activity bug-fixing cycle, with **38 issues closed** and **10 PRs merged/closed** in the last 24 hours. Most of these fixes stem from a wave of bugs reported around June 5–6, now resolved via the `sweeper:implemented-on-main` label. However, **40 PRs remain open**, suggesting a growing review bottleneck. No new releases were published. The community remains engaged, filing detailed bug reports and feature requests, especially around IME input, platform-specific quirks, and gateway routing. Overall, the project shows strong fix velocity but needs attention to the open PR backlog to maintain momentum.

---

## 2. Releases

No new releases were published in the last 24 hours.

---

## 3. Project Progress

The following notable PRs were merged or closed today (all marked `sweeper:implemented-on-main`):

| PR | Description |
|----|-------------|
| [#39949](https://github.com/nousresearch/hermes-agent/pull/39949) | **Security**: Sanitize Kanban markdown HTML before `dangerouslySetInnerHTML` |
| [#39942](https://github.com/nousresearch/hermes-agent/pull/39942) | **Desktop**: Keep profile color picker open after interaction |
| [#39938](https://github.com/nousresearch/hermes-agent/pull/39938) | **Desktop**: Sync `contentEditable` state before submit (fixes #39872) |
| [#39920](https://github.com/nousresearch/hermes-agent/pull/39920) | **MCP**: Show startup servers as `connecting` instead of `failed` |
| [#39918](https://github.com/nousresearch/hermes-agent/pull/39918) | **Desktop**: Fix IME composition preventing send button switch |
| [#39915](https://github.com/nousresearch/hermes-agent/pull/39915) | **Cron**: Isolate profile-home override per-thread to prevent context bleed |
| [#39914](https://github.com/nousresearch/hermes-agent/pull/39914) | **Cron**: Stop mutating module-global `_hermes_home` (alternative fix) |
| [#39913](https://github.com/nousresearch/hermes-agent/pull/39913) | **Windows**: Enable dashboard chat tab via ConPTY bridge |
| [#39938](https://github.com/nousresearch/hermes-agent/pull/39938) | **Desktop**: IME composition send button fix |

Additionally, 38 issues were closed, many with the `sweeper:implemented-on-main` tag, indicating the corresponding fixes were merged. Key closed bugs include:

- IME/input truncation issues (#39651, #39786, #39636, #39620, #39930, #39721)
- Gateway/routing bugs (#39781, #39696, #39699, #39615)
- Provider-specific failures (#39685 Xiaomi, #39765 DeepSeek, #39599 Gemini)
- CLI/dashboard startup errors (#39674, #39631)
- Vision tool regression (#39242)

---

## 4. Community Hot Topics

The most active issue as measured by comment count (5 comments) is:

- **[#56580 (OPEN) – Kanban creator-agent wake mis-routes for DM/thread task creators](https://github.com/nousresearch/hermes-agent/issues/56580)**  
  A P2 bug where a hardcoded `chat_type="group"` in the kanban wakeup logic causes routing failures for DM/thread sessions. This issue remains open and is actively discussed.

Other highly-commented items (4–3 comments) are all closed bugs fixed in the current cycle:

- [#39651](https://github.com/nousresearch/hermes-agent/issues/39651) – IME composition send button bug (closed)
- [#39728](https://github.com/nousresearch/hermes-agent/issues/39728) – `pre_tool_call` missing `session_id` (closed)
- [#39721](https://github.com/nousresearch/hermes-agent/issues/39721) – Long prompts consuming viewport (closed)
- [#39685](https://github.com/nousresearch/hermes-agent/issues/39685) – Xiaomi API rejection with multimodal vision (closed)

The underlying need from #56580 is a robust session routing mechanism that respects the original conversation type (DM vs group) when waking task creators.

---

## 5. Bugs & Stability

### High Severity (P2 – Open)
| Issue | Description | Fix PR Status |
|-------|-------------|---------------|
| [#56580](https://github.com/nousresearch/hermes-agent/issues/56580) | Kanban wake mis-routes (DM/thread) | No fix PR yet |
| [#63698](https://github.com/nousresearch/hermes-agent/issues/63698) | Windows console windows flash despite `windows_hide_console:true` | No fix PR yet |
| [#39958](https://github.com/nousresearch/hermes-agent/pull/39958) | File sync rate-limit clock advances on failed sync (PR open) | PR #39958 open |
| [#39946](https://github.com/nousresearch/hermes-agent/pull/39946) | File sync – rate-limit blocks retry after failed cycle (PR open) | PR #39946 open |
| [#39922](https://github.com/nousresearch/hermes-agent/pull/39922) | Grep fallback regex behavior misaligned with ripgrep (PR open) | PR #39922 open |
| [#52627](https://github.com/nousresearch/hermes-agent/pull/52627) | Reject xAI media models as main model (PR open) | PR #52627 open |
| [#39627](https://github.com/nousresearch/hermes-agent/pull/39627) | Cron script path normalization missing (PR open) | PR #39627 open |
| [#39916](https://github.com/nousresearch/hermes-agent/pull/39916) | Cron liveness lost during context compression (PR open) | PR #39916 open |
| [#39910](https://github.com/nousresearch/hermes-agent/pull/39910) | Windows MSYS path mangling (PR open) | PR #39910 open |

### Medium Severity (P3 – Closed)
Numerous P3 bugs were fixed today, covering IME input, desktop truncation, dashboard session deletion, and provider compatibility. Notably, all reported IME bugs (Chinese, Japanese, Vietnamese) have fix PRs merged.

---

## 6. Feature Requests & Roadmap Signals

Several feature requests were closed today (either implemented or marked not-planned):

| Issue | Feature | Status |
|-------|---------|--------|
| [#39943](https://github.com/nousresearch/hermes-agent/issues/39943) | Clean basic UI for dashboard | Closed – `implemented-on-main` |
| [#39768](https://github.com/nousresearch/hermes-agent/issues/39768) | Streamlining review threads (memory/skills) | Closed – `implemented-on-main` |
| [#39596](https://github.com/nousresearch/hermes-agent/issues/39596) | Profile switching in Desktop app | Closed – `implemented-on-main` |
| [#39571](https://github.com/nousresearch/hermes-agent/issues/39571) | Chinese (Simplified) localization | Closed – `implemented-on-main` |
| [#39932](https://github.com/nousresearch/hermes-agent/issues/39932) | Live meeting voice bridge via Vexa | Closed – `not-planned` |

Open feature PRs that may land in the next release:

- [#39935](https://github.com/nousresearch/hermes-agent/pull/39935) – IRC observe unaddressed channel context
- [#39931](https://github.com/nousresearch/hermes-agent/pull/39931) – Cron `job:end` hook event
- [#39939](https://github.com/nousresearch/hermes-agent/pull/39939) – Expose transcript path to tool hooks

These indicate a continued focus on platform extensibility (IRC, hooks) and cron lifecycle management.

---

## 7. User Feedback Summary

User-reported pain points in the last 24 hours include:

- **IME input issues**: Multiple users reported truncation, lost characters, and incorrect send button behavior when using Chinese/Japanese/Korean/Vietnamese IMEs on desktop. These have been addressed in today’s fixes.
- **Platform-specific problems**: Windows users face console window flashes and path mangling; Docker users see configuration invalidity; Xiaomi and DeepSeek providers experience API errors.
- **Desktop UX**: Dashboard UI is considered “too busy” (#39943); users requested cleaner themes and profile switching.
- **Truncation and silence**: Several users noted that their input was silently truncated or not sent, which caused confusion and frustration.

On the satisfaction side, many issue authors saw their bugs closed with fix PRs promptly, indicating responsive maintainer engagement.

---

## 8. Backlog Watch

The following open items are important and lack maintainer action:

| Item | Type | Priority | Age |
|------|------|----------|-----|
| [#56580](https://github.com/nousresearch/hermes-agent/issues/56580) | Issue (open) | P2 | 13 days (since July 1) |
| [#63698](https://github.com/nousresearch/hermes-agent/issues/63698) | Issue (open) | P2 | 1 day (since July 13) |
| [#39958](https://github.com/nousresearch/hermes-agent/pull/39958) | PR (open) | P2 | 39 days (since June 5) |
| [#39946](https://github.com/nousresearch/hermes-agent/pull/39946) | PR (open) | P2 | 39 days (since June 5) |
| [#39922](https://github.com/nousresearch/hermes-agent/pull/39922) | PR (open) | P2 | 39 days (since June 5) |
| [#52627](https://github.com/nousresearch/hermes-agent/pull/52627) | PR (open) | P2 | 19 days (since June 25) |
| [#39627](https://github.com/nousresearch/hermes-agent/pull/39627) | PR (open) | P2 | 39 days (since June 5) |
| [#39916](https://github.com/nousresearch/hermes-agent/pull/39916) | PR (open) | P2 | 39 days (since June 5) |
| [#39910](https://github.com/nousresearch/hermes-agent/pull/39910) | PR (open) | P2 | 39 days (since June 5) |
| [#39935](https://github.com/nousresearch/hermes-agent/pull/39935) | PR (open) | P3 | 39 days (since June 5) |
| [#39947](https://github.com/nousresearch/hermes-agent/pull/39947) | PR (open) | P3 | 39 days (since June 5) |
| [#39955](https://github.com/nousresearch/hermes-agent/pull/39955) | PR (open) | P3 | 39 days (since June 5) |
| [#39939](https://github.com/nousresearch/hermes-agent/pull/39939) | PR (open) | P3 | 39 days (since June 5) |

Most open PRs have been waiting over a month without comments from maintainers. This suggests a need for dedicated review bandwidth to prevent feature/bugfix stagnation.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-07-14

## 1. Today’s Overview
The project shows steady, moderate activity with 4 issues and 5 pull requests updated in the last 24 hours. One PR was merged (gateway webhook), and no new releases were published. The community continues to surface both feature requests and bugs, with particular attention on security (replacing unmaintained `libolm`), caching improvements for Anthropic, and compatibility gaps when using Gemini via OpenAI‑compatible endpoints. Several stale items remain open, indicating areas that may benefit from maintainer prioritisation.

## 2. Releases
**No new releases today.** The latest published version remains from an earlier date.

## 3. Project Progress
- **Merged/Closed PRs:**
  - `#3253` **Feat/gateway webhook** — adds webhook support to the gateway, now closed.  
    [PR #3253](https://github.com/sipeed/picoclaw/pull/3253)

- **Notable new open PRs:**
  - `#3254` **fix(agent): prefer verbatim model matches over provider‑alias splits** — resolves a model resolution ordering bug that could cause incorrect model lookups. (opened 2026‑07‑13)  
    [PR #3254](https://github.com/sipeed/picoclaw/pull/3254)

- **Ongoing PRs (stale)** include infrastructure improvements (Alpine base image bump, `.gitignore` cleanup) and a critical caching fix for the `anthropic-messages` provider.

## 4. Community Hot Topics
- **Issue #3088** — *[Feature] use vodozemac instead of libolm*  
  The most discussed item with **8 comments** and **2 👍 reactions**. The community strongly supports replacing the unmaintained `libolm` library with the official replacement `vodozemac`. The issue is tagged `priority: high` and `help wanted`, reflecting both security and maintenance concerns.  
  [Issue #3088](https://github.com/sipeed/picoclaw/issues/3088)

- **Issue #3229** — *Proposal: rolling conversation cache breakpoints for anthropic-messages*  
  A detailed proposal for caching conversation history in Anthropic workloads, building on PR #3228. Despite only 1 comment so far, it addresses a widely‑felt pain point in agentic workflows.  
  [Issue #3229](https://github.com/sipeed/picoclaw/issues/3229)

- **PR #3228** — *fix(anthropic-messages): send SystemParts as system blocks with cache_control*  
  This PR enables per‑block `cache_control` for Anthropic, which is a prerequisite for the conversation caching proposal. It has been open since July 6 and is marked stale.  
  [PR #3228](https://github.com/sipeed/picoclaw/pull/3228)

## 5. Bugs & Stability
| Severity | Bug | Status | Related Fix |
|----------|-----|--------|-------------|
| **High** | **Libolm is unmaintained and insecure** (#3088) – feature request, but essentially a security bug. | Open, stale, priority high | Awaiting PR to switch to `vodozemac` |
| **Medium** | **Missing `thought_signature` error when using Gemini via OpenAI‑compat format** (#3230) – blocks use of tool calls with Gemini through AI Gateway. | Open, stale | No fix PR yet |
| **Low** | **Model resolution ordering bug** where provider‑alias splits could incorrectly win over exact model matches (#3254) | Open (new) | Fix PR #3254 submitted |

No crash or regression bugs were reported today.

## 6. Feature Requests & Roadmap Signals
- **Security hard‑dependency replacement** (#3088) – replacing `libolm` with `vodozemac` is the most likely candidate for the next minor release, given its high priority and community demand.
- **Anthropic prompt caching** – PR #3228 and issue #3229 together aim to bring full conversation caching to the Anthropic provider, which would improve latency and cost for iterative tool‑use agents.
- **SearXNG basic auth support** (#3231) – a user requests the ability to add `basicauth` request headers to SearXNG search instead of appending credentials to the URL.
- **Gateway webhook** was merged today (#3253), signalling continued investment in the gateway layer.

These features align with a roadmap focused on **security modernisation** and **LLM provider performance optimisations**.

## 7. User Feedback Summary
- **Pain points**:
  - Inability to use Gemini models with tool calls via OpenAI‑compatible gateways (#3230).
  - Inefficient caching of conversation history in Anthropic workloads (#3229, #3228).
  - Security concerns over bundled `libolm` (#3088).
  - SearXNG integration breaks when credentials are required in URL form (#3231).
- **Use cases driving the project**: Agentic workflows with heavy LLM calls, multi‑provider setups, and self‑hosted search.
- **Overall sentiment**: Active and engaged community; issues are well‑described and receive prompt triage, though some high‑priority items have remained stale for weeks.

## 8. Backlog Watch
The following items have been open for more than 7 days with no recent maintainer activity and warrant attention:

| Item | Type | Days Open | Last Updated | Notes |
|------|------|-----------|--------------|-------|
| [#3088](https://github.com/sipeed/picoclaw/issues/3088) | Feature (security) | 35 | 2026‑07‑13 | `priority: high` – libolm replacement, 8 comments |
| [#3228](https://github.com/sipeed/picoclaw/pull/3228) | PR (fix) | 8 | 2026‑07‑13 | Anthropic caching – unmerged, stale label |
| [#3192](https://github.com/sipeed/picoclaw/pull/3192) | PR (chore) | 17 | 2026‑07‑13 | Docker image bump – stale, no reviewer activity |
| [#3191](https://github.com/sipeed/picoclaw/pull/3191) | PR (chore) | 17 | 2026‑07‑13 | `.gitignore` cleanup – stale |

Maintainers may want to prioritise #3088 and #3228 given their impact on security and core functionality, respectively.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-07-14

## 1. Today’s Overview

NanoClaw saw intense activity over the past 24 hours: **3 issues closed** (all security or bug related), **33 pull requests updated** — of which **26 were merged/closed** and **7 remain open**. No new releases were cut. The project is in a mature cleanup and consolidation phase, with a strong emphasis on **security hardening** (approval‑flow smuggling fixes landed), **channel reliability** (WhatsApp LID‑mode group sends, offline adapter detection), and **infrastructure features** (scheduled tasks, provider‑agnostic memory, a new Dial channel adapter). The high merge rate suggests the maintainer team is clearing a significant backlog of fixes and community contributions.

## 2. Releases

*None.* No new versions were published in the last 24 hours.

## 3. Project Progress

**Merged / Closed PRs (26 items)** – the following represent the most impactful changes:

- **Security fixes**  
  - [`PR #2998`](https://github.com/nanocoai/nanoclaw/pull/2998) – Fixes the `add_mcp_server` approval card to render the full payload (args/env), closing the smuggling vector reported in issues #2827 and #2762.  
  - [`PR #2226`](https://github.com/nanocoai/nanoclaw/pull/2226) – Throws `MissingChannelAdapterError` instead of silently dropping messages when a channel adapter is missing.  
  - [`PR #2996`](https://github.com/nanocoai/nanoclaw/pull/2996) – Routes missing‑adapter messages into the retry path rather than marking them delivered.

- **Channel & messaging infrastructure**  
  - [`PR #3035`](https://github.com/nanocoai/nanoclaw/pull/3035) – Structured skill format: channel install skills now serve as single source of truth; setup applies the SKILL.md machine‑applicable steps.  
  - [`PR #3032`](https://github.com/nanocoai/nanoclaw/pull/3032) – New native channel adapter for **Dial** (SMS + AI voice calls).  
  - [`PR #3033`](https://github.com/nanocoai/nanoclaw/pull/3033) – Adds Dial to the setup picker and wizard.

- **Configuration & templates**  
  - [`PR #3022`](https://github.com/nanocoai/nanoclaw/pull/3022) – Templates can now define recurring scheduled tasks (cron + script gate + agent prompt).  
  - [`PR #2906`](https://github.com/nanocoai/nanoclaw/pull/2906) – Instance‑wide default agent provider (`DEFAULT_AGENT_PROVIDER` in `.env`) for new groups.  
  - [`PR #2907`](https://github.com/nanocoai/nanoclaw/pull/2907) – Structured skill format (merged).

- **CLI & diagnostics**  
  - [`PR #1889`](https://github.com/nanocoai/nanoclaw/pull/1889) – Cleanup script now hard‑fails on sqlite3 errors instead of silent data loss.  
  - [`PR #1887`](https://github.com/nanocoai/nanoclaw/pull/1887) – Diagnostics honors `DO_NOT_TRACK` and skips PostHog when curl missing.  
  - [`PR #2743`](https://github.com/nanocoai/nanoclaw/pull/2743) – `ncl wirings create` now correctly inserts the companion `agent_destinations` row.

- **Other notable merges**  
  - [`PR #2966`](https://github.com/nanocoai/nanoclaw/pull/2966) – Agent runner logs when an errored batch is acked as completed.  
  - [`PR #3002`](https://github.com/nanocoai/nanoclaw/pull/3002) – Container warns when a real entry blocks a shared skill symlink.  
  - [`PR #2120`](https://github.com/nanocoai/nanoclaw/pull/2120) – Provider‑generic error substitution rules.

## 4. Community Hot Topics

No issue or PR in the data shows visible comment/reaction counts (all show `0` or `undefined`), but several threads indicate significant user concern or contribution:

- **🥇 Active open PR with deep problem analysis**  
  [`PR #3038`](https://github.com/nanocoai/nanoclaw/pull/3038) – *fix(whatsapp): don't translate group participants to phone JIDs* – addresses a blocking WhatsApp group send bug where replies never render for recipients. The PR includes a thorough root‑cause analysis and a one‑line fix. Users waiting for this fix will likely see it merged soon.

- **Security vulnerability reports (now closed)**  
  Issues [`#2827`](https://github.com/nanocoai/nanoclaw/issues/2827) and [`#2762`](https://github.com/nanocoai/nanoclaw/issues/2762) – both detail the `add_mcp_server` approval smuggling flaw. The community reporter (YLChen-007) provided clear advisory summaries. The fix PR #2998 was merged, indicating rapid response.

- **Feature requests gaining traction**  
  Open PRs [`#3037`](https://github.com/nanocoai/nanoclaw/pull/3037) (MCP tool allowlist) and [`#3012`](https://github.com/nanocoai/nanoclaw/pull/3012) (provider‑agnostic memory) are the most discussed new features, with detailed descriptions and multiple stakeholders (community + core team authors). They represent the next wave of planned functionality.

## 5. Bugs & Stability

| Severity | Bug | Status | Fix |
|----------|-----|--------|-----|
| **Critical** | `add_mcp_server` approval flow hides args/env, enabling approval smuggling (Issues #2827, #2762) | **Closed** | ✅ PR #2998 merged |
| **High** | Outbound messages to offline channel adapter marked delivered without any send (Issue #2995) | **Closed** | ✅ PRs #2226 and #2996 merged |
| **High** | WhatsApp group replies stuck on “waiting” in LID‑addressed groups (PR #3038) | **Open** | 🛠️ PR #3038 proposed |
| **Medium** | Cleanup script silently treats sqlite3 failures as “no active sessions” (Issue #1825, PR #1889) | **Closed** | ✅ PR #1889 merged |
| **Medium** | Agent confuses day‑of‑week / hour during scheduled tasks (PR #3036) | **Open** | 🛠️ PR #3036 (injects `current_time` + weekday) |
| **Low** | Diagnostics ignores `DO_NOT_TRACK` (PR #1887) | **Closed** | ✅ PR #1887 merged |

Overall stability improved significantly: three long‑standing delivery bugs (silent drops, missing adapter, group send) are now either fixed or under active review. The approval‑flow security fix eliminates a potential tool‑use bypass.

## 6. Feature Requests & Roadmap Signals

**Merged features** that signal near‑term direction:

- **Scheduled tasks in templates** (PR #3022) – enables recurring agent prompts from pre‑defined templates.
- **Instance‑wide default agent provider** (PR #2906) – reduces per‑group configuration friction.
- **Dial channel adapter** (PRs #3032, #3033) – expands channel support to phone calls and SMS via a single API.
- **Structured skill format** (PR #3035) – future‑proofs channel installation and allows machine‑readable skill definitions.

**Open PRs likely to land in the next version:**

- **MCP tool allowlist** ([PR #3037](https://github.com/nanocoai/nanoclaw/pull/3037)) – env‑driven whitelist of MCP tools (popular for security‑conscious deployments).
- **Provider‑agnostic persistent memory** ([PR #3012](https://github.com/nanocoai/nanoclaw/pull/3012) + Codex counterpart [PR #3013](https://github.com/nanocoai/nanoclaw/pull/3013)) – shared memory tree across providers, loaded at session start.
- **Socket hardening** ([PR #2802](https://github.com/nanocoai/nanoclaw/pull/2802)) – adds timeouts and buffer caps to the `ncl` socket transport.
- **Current time + weekday injection** ([PR #3036](https://github.com/nanocoai/nanoclaw/pull/3036)) – prevents agent time confusion, especially on cron turns.

**Predictions for the next release (v0.x.y):**  
Likely includes the memory system, Dial support, scheduled tasks, and the socket hardening – a combination of new channels and improved reliability.

## 7. User Feedback Summary

From the issues and PR descriptions, several real user pain points emerge:

- **Security trust in approval flows** – The `add_mcp_server` smuggling bug undermines trust in the self‑moderation system. Users expect the approval card to show exactly what will be executed. The fix is now merged.
- **Silent failures** – Offline channel adapters causing false “delivered” status (Issue #2995) was frustrating for users who thought messages went through. The retry path fix (PR #2996) addresses this.
- **WhatsApp group unreliability** – LID‑mode group sends hanging indefinitely (PR #3038) is a showstopper for users relying on group messaging. The proposed fix is straightforward and eagerly awaited.
- **Agent time confusion** – User feedback (PR #3036) indicates the agent regularly misidentifies the day of the week during scheduled tasks, leading to incorrect responses. The patch injects explicit `current_time` into the context header.
- **Request for MCP tool whitelisting** – The allowlist feature (PR #3037) responds to administrators who need to restrict agent tools to a safe subset.

Satisfaction appears high with the rapid bugfix cadence – the team closed 26 PRs in one day. The only potential dissatisfaction may be the lack of a formal release tag despite many improvements.

## 8. Backlog Watch

No **issues** have been left unanswered for a long time – all three updated today were closed. However, several **open PRs** have been sitting without merge for weeks:

| PR | Title | Age (days since creation) | Reason for attention |
|----|-------|---------------------------|----------------------|
| [`#2802`](https://github.com/nanocoai/nanoclaw/pull/2802) | fix(security): ncl socket hardening (client timeout/cap + server fail‑closed/frame‑cap) | 27 | Important security hardening; no activity since June 17. |
| [`#3036`](https://github.com/nanocoai/nanoclaw/pull/3036) | fix(agent): inject current_time into context header + weekday | 1 | Newly opened, but a common user complaint; should be prioritized. |
| [`#3012`](https://github.com/nanocoai/nanoclaw/pull/3012) | feat(memory): add provider‑agnostic persistent memory | 4 | Large feature; Codex counterpart (#3013) also open; likely awaiting review. |
| [`#3037`](https://github.com/nanocoai/nanoclaw/pull/3037) | feat(container): optional MCP tool allowlist | 1 | New, but a straightforward configuration enhancement. |

No PRs appear to be blocked by maintainer inaction – the high merge rate indicates active management. The socket hardening PR (#2802) is the oldest and touches security, so it warrants a prompt review.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest — 2026-07-14

## Today's Overview

As of 2026-07-14, NullClaw remains in an active development phase with no new releases or issue activity in the past 24 hours. Ten pull requests were updated on 2026-07-13, all still open, indicating a healthy flow of contributions awaiting review and merge. No issues were opened or closed, and no new releases were published. The project’s pulse is steady: contributors are addressing cross‑platform compatibility, CLI usability, persistence, and documentation while no regressions or recent breakages have been reported. Maintainer attention is currently spread across feature additions (structured approval flow, memory controls, streaming tool calls) and infrastructure hardening (Android HTTP, Matrix sync, cron token storage).

## Releases

*None* — no new versions were cut today.

## Project Progress

No pull requests were merged or closed in the last 24 hours. The following **open PRs** represent work that is under review or pending integration:

- **#970** – fix(cli): handle arrow keys in agent REPL  
- **#969** – feat(agent): structured approval_request / approval_response flow  
- **#968** – fix(matrix): persist next_batch across restart + test env isolation  
- **#966** – fix(http): secure buffered curl fallback on Android  
- **#964** – Enable native API-level tool calls during streaming  
- **#963** – fix(channels): document and harden Weixin iLink QR auth  
- **#956** – ci(deps): bump alpine from 3.23 to 3.24 in docker-images group  
- **#962** – docs(providers): document native Anthropic provider with API key and OAuth support  
- **#961** – feat(memory): add configurable auto-recall, recall_limit, max_context_bytes  
- **#959** – fix(cron): persist paired token for scheduler tool access

Key feature work advanced: structured tool approval (**#969**), streaming tool-call deltas (**#964**), and memory recall controls (**#961**). Significant fixes target the Matrix channel (**#968**), Android HTTP stack (**#966**), and CLI REPL UX (**#970**).

## Community Hot Topics

No issues or pull requests drew explicit comments or reactions in the monitored period (all `Comments: undefined`). Based on scope and novelty, the following PRs are likely to generate discussion:

- **#969 (structured approval flow)** — introduces a two‑turn tool approval mechanism for the shell tool, emitting events through SSE. This is a foundational change for agent safety and user‑in‑the‑loop workflows.  
  [GitHub Link](https://github.com/nullclaw/nullclaw/pull/969)

- **#961 (memory config)** — adds three new JSON config keys (`auto_recall`, `recall_limit`, `max_context_bytes`) to control memory enrichment, giving users fine‑grained control over context injection.  
  [GitHub Link](https://github.com/nullclaw/nullclaw/pull/961)

- **#968 (Matrix next_batch persistence)** — fixes a long‑standing annoyance where Matrix channel resyncs on every restart. Likely to be well‑received by Matrix users.  
  [GitHub Link](https://github.com/nullclaw/nullclaw/pull/968)

## Bugs & Stability

No new bugs were reported in the last 24 hours. However, several fix PRs address known stability issues:

| Severity | Issue | Fix PR | Description |
|----------|-------|--------|-------------|
| **High** | Android DNS failures (`error.NameServerFailure`) when using Zig’s stdlib HTTP | #966 | Routes all HTTP traffic through a secure buffered curl fallback on `aarch64-linux-android` (Termux). |
| **Medium** | Matrix channel loses `/sync` cursor after restart → triggers full initial sync every time | #968 | Persists `next_batch` token across restarts to avoid redundant initial sync. |
| **Medium** | Weixin iLink Bot QR auth flow undocumented and implementation gaps | #963 | Hardens auth flow and adds documentation in English and Chinese. |
| **Medium** | Cron/scheduler tool loses bearer token after `/pair` on daemon restart | #959 | Persists paired token encrypted via `SecretStore` (ChaCha20‑Poly1305). |
| **Low** | Arrow keys in agent REPL print control characters | #970 | Implements a lightweight, allocation‑free line editor with POSIX raw‑mode input. |

All five fix PRs are open; none have been merged yet.

## Feature Requests & Roadmap Signals

The following PRs represent new functionality that could land in the next release:

- **Structured approval flow** (#969) — enables interactive tool approval (e.g., shell commands) via an SSE event channel. This aligns with growing user demand for safe agent execution.
- **Native API-level tool calls during streaming** (#964) — preserves tool‑call deltas in `StreamChatResult`, allowing agents to execute tool responses from pure streaming. Closes a gap in provider–agent interoperability.
- **Memory recall configuration** (#961) — adds `auto_recall`, `recall_limit`, `max_context_bytes` under `memory`. Users can disable automatic memory enrichment or cap the number/length of injected memories.
- **Native Anthropic provider documentation** (#962) — documents direct Anthropic API key usage (including OAuth Pro‑Plan tokens) and provider‑level settings.

Predictions for next release (v0.x): The structured approval flow (#969) and memory recall controls (#961) are likely candidates for immediate merge given their utility and lack of breaking changes. The streaming tool‑call fix (#964) is also critical for workflow correctness.

## User Feedback Summary

No explicit user feedback (comments, reactions, or issue reports) was recorded in the last 24 hours. However, the content of the open PRs reveals implicit pain points:

- **CLI usability** – Users need arrow‑key navigation in the REPL (#970); the current state prints control characters.
- **Android compatibility** – Termux users experience DNS failures with the default HTTP stack (#966).
- **Matrix reliability** – Frequent full syncing on restart is disruptive (#968).
- **Memory control** – Users want to disable or limit automatic memory recall to manage context window usage (#961).
- **Tool approval** – There is a need for user‑in‑the‑loop confirmation before executing dangerous tools (shell) (#969).
- **Anthropic provider** – Users who have Pro‑Plan (OAuth) tokens or prefer direct API usage lack clear documentation (#962).

Overall sentiment appears constructive, with contributors addressing real‑world shortcomings.

## Backlog Watch

No issues are currently open in the repository, so there are no unanswered user reports. Among the open pull requests, a few have been in review for several weeks and may need maintainer attention:

- **#970 (arrow keys)** — created 2026-06-29, last updated 2026-07-13. Still open, no comments. Simple UX fix.
- **#966 (Android curl)** — created 2026-06-19, last updated 2026-07-13. High‑severity fix for Android users; review is overdue.
- **#959 (cron token)** — created 2026-06-16, last updated 2026-07-13. Affects scheduler reliability; has been open for nearly a month.

No PRs have been marked stale or abandoned. The project could benefit from periodic review of older submissions to prevent accumulation of open work.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-07-14

## 1. Today's Overview

Project activity remains very high, with **34 issues** and **50 pull requests** updated in the last 24 hours (28 open issues, 33 open PRs). A large fraction of the issue activity comes from a **bug bash** (P1/P2/P3 labels from `joe-rlo`), indicating a sustained quality push. No new releases were cut today, but multiple large feature PRs are in review or have been merged. The merge queue shows **17 PRs merged/closed**, including critical runtime resilience improvements and the first skeleton of a Matrix Reborn channel. The overall project health appears robust but with a sizeable backlog of usability and stability bugs surfaced by the bug bash.

## 2. Releases

**None.** No releases were published in the last 24 hours. The last release candidate was PR [#5598](https://github.com/nearai/ironclaw/pull/5598) (still open) which would bump several crates with **API breaking changes** in `ironclaw_common` and `ironclaw_skills`. That PR has not yet been merged.

## 3. Project Progress

17 PRs were merged or closed in the last 24 hours. Key advances:

- **Reborn loop resilience** — PR [#5959](https://github.com/nearai/ironclaw/pull/5959) (merged) tackles provider 5xx storms, iteration backstops, and model-visible tool-failure reasons, closing a large performance gap vs. Hermes on SWE-bench.
- **Matrix channel skeleton** — PR [#6062](https://github.com/nearai/ironclaw/pull/6062) (merged) adds the WASM channel component shape, CI build/test gate, and runtime smoke coverage for the Matrix Reborn channel (no live sync yet).
- **Extension ownership migration** — PR [#6058](https://github.com/nearai/ironclaw/pull/6058) (merged) ships the extension-ownership migration binary in the Reborn Railway image, with cargo-chef caching.
- **Storage error cause preservation** — PR [#5971](https://github.com/nearai/ironclaw/pull/5971) (merged) fixes discarding of underlying errors in compaction persistence.
- **Dependency bumps** — PR [#6021](https://github.com/nearai/ironclaw/pull/6021) (merged) updates 22 dependencies across the workspace.

Still open (in review, size XL): NEA-25 unified extension model roll-up ([#6061](https://github.com/nearai/ironclaw/pull/6061)), per-user MCP registration store ([#5970](https://github.com/nearai/ironclaw/pull/5970)), offline v1-to-Reborn migration workflow ([#5936](https://github.com/nearai/ironclaw/pull/5936)), and prompt-cache break detection ([#5975](https://github.com/nearai/ironclaw/pull/5975)).

## 4. Community Hot Topics

The most active discussions (by comment count) are:

- **#5948** — [Assistant incorrectly reports GitHub extension as activated when it is only installed](https://github.com/nearai/ironclaw/issues/5948) (5 comments) — Users are confused by a status mismatch between the assistant's claim and the Extensions page. Underlying need: consistent, trustworthy reporting of extension state.
- **#6050** — [Conversation history error banner displayed despite successful chat response](https://github.com/nearai/ironclaw/issues/6050) (2 comments) — A persistent "Failed to load conversation history" banner undermines user confidence even when the current session works. A fix PR ([#6064](https://github.com/nearai/ironclaw/pull/6064)) is open.
- **#5640** — [Harness gap: no RecordingSecurityAuditSink double](https://github.com/nearai/ironclaw/issues/5640) (2 comments) — Integration harness missing production wiring of security audit sink, blocking parity testing.
- **#5741** — [builtin.http.save fails with OutputTooLarge](https://github.com/nearai/ironclaw/issues/5741) (2 comments) — Saving large web pages (e.g., ESPN articles) errors out instead of handling output size gracefully.
- **#5836** — [Routine fails on every scheduled run with "No thread attached"](https://github.com/nearai/ironclaw/issues/5836) (2 comments) — Systemic failure of scheduled routines; 0% success rate.

The common thread is **reliability of core UX flows**: status reporting, error handling, and routine execution. Users need the assistant to be a dependable partner, not a source of confusion.

## 5. Bugs & Stability

Bugs reported in the last 24 hours, ranked by severity label (P1 highest):

| Issue | Severity | Description | Fix PR exists? |
|-------|----------|-------------|----------------|
| [#5943](https://github.com/nearai/ironclaw/issues/5943) | **P1** | Slack DM action posts to current channel instead of user DMs | No |
| [#5882](https://github.com/nearai/ironclaw/issues/5882) | **P2** | Repeated Slack reconnect leaves auth flow broken (only fix: reinstall) | No |
| [#6048](https://github.com/nearai/ironclaw/issues/6048) | **P2** | Agent run fails because model calls an unavailable tool | No |
| [#6044](https://github.com/nearai/ironclaw/issues/6044) | **P2** | Enter key sometimes does not submit message in WebUI | No |
| [#6043](https://github.com/nearai/ironclaw/issues/6043) | **P2** | GitHub connection flow fails with generic capability error instead of starting auth | No |
| [#6045](https://github.com/nearai/ironclaw/issues/6045) | **P2** | Agent diagnoses root cause instead of acting (e.g., missing User-Agent header) | No |
| [#6046](https://github.com/nearai/ironclaw/issues/6046) | **P2** | Simple email-to-sheet workflow invokes 124 tools (excessive) | No |
| [#6047](https://github.com/nearai/ironclaw/issues/6047) | **P2** | Task messages processed and displayed out of chronological order | No |
| [#6049](https://github.com/nearai/ironclaw/issues/6049) | **P3** | Gmail disconnect fails with generic "Validation" error; no explanation | No |
| [#6050](https://github.com/nearai/ironclaw/issues/6050) | **P3** | Stale conversation history error banner (see Hot Topics) | Yes ([#6064](https://github.com/nearai/ironclaw/pull/6064)) |
| [#6037](https://github.com/nearai/ironclaw/issues/6037) | **P3** | Chat connection status is hidden during disconnects/reconnects | No |
| [#6039](https://github.com/nearai/ironclaw/issues/6039) | **P3** | Light theme: unreadable button and status colors | No |
| [#6028](https://github.com/nearai/ironclaw/issues/6028) | **P3** | MCP tab: stray `$` rendered before heading | No |
| [#6029](https://github.com/nearai/ironclaw/issues/6029) | **P3** | GitHub extension cannot be deactivated, reconfigured, or uninstalled after activation | No |
| [#6051](https://github.com/nearai/ironclaw/issues/6051) | **P3** | Large documents labeled with warning icon (should be informational) | No |
| [#6052](https://github.com/nearai/ironclaw/issues/6052) | **P3** | Extensions Registry takes up to 10 seconds to load | No |

The bug bash has exposed **many UX/UI inconsistencies** (banners, icons, colors) and **critical integration failures** (Slack DM routing, GitHub auth flow). The resilience PR [#5959](https://github.com/nearai/ironclaw/pull/5959) addresses some underlying runtime issues that cause tool failures.

## 6. Feature Requests & Roadmap Signals

Several requests and proposals signal upcoming priorities:

- **Security reporting channel** — [#6000](https://github.com/nearai/ironclaw/issues/6000) asks for a SECURITY.md or private vulnerability reporting. This is a governance gap that maintainers should address soon.
- **Per-user MCP registration** — PR [#5970](https://github.com/nearai/ironclaw/pull/5970) (open) adds a store for installing MCP servers per user. Likely to land in next release.
- **Unified extension model (NEA-25)** — PR [#6061](https://github.com/nearai/ironclaw/pull/6061) is a large roll-up that merges 8 smaller PRs into a single extension taxonomy. Expected to be merged after review.
- **Offline v1-to-Reborn migration** — PR [#5936](https://github.com/nearai/ironclaw/pull/5936) provides a complete workflow for migrating from v1 to Reborn. Important for enterprise users.
- **Verification guidelines in system prompt** — PR [#6027](https://github.com/nearai/ironclaw/pull/6027) addresses model output quality (e.g., table precision, verification steps). Likely to ship soon.
- **Matrix channel** — Skeleton merged ([#6062](https://github.com/nearai/ironclaw/pull/6062)), live sync is the next milestone.
- **Tools-capable completion nudge** — PR [#6013](https://github.com/nearai/ironclaw/pull/6013) improves interactive coding by making the agent loop's nudge tools-capable.

Predictions for the next release: NEA-25 unified extension model (if merged), MCP registration store, and the prompt-cache break detector from #5975.

## 7. User Feedback Summary

Real user pain points extracted from issues:

- **Extension lifecycle confusion** — Users cannot tell if an extension is truly activated (#5948), cannot deactivate or uninstall extensions (#6029), and receive generic errors during disconnection (#6049).
- **Stale error banners** — Errors persist after successful actions (#6050, #5879), eroding trust.
- **Chat connection invisibility** — No indication of reconnection (#6037) leaves users unsure if the assistant is working.
- **Tool call details hidden** — Expanding a running tool row shows nothing until completion (#5860).
- **Routine delivery misconfiguration** — Delivery target leaks globally (#6060), causing unexpected posts to wrong channels.
- **Slack integration broken** — DMs go to public channels (#5943), reconnect loops break auth (#5882).
- **Light theme unusable** — Low contrast on buttons and success banners (#6039).
- **Generic error messages** — "Validation" errors (#6049), "model output could not be used" (#5883) without actionable detail.
- **Performance** — Extensions Registry slow loading (#6052), excessive tool invocations (#6046).

User satisfaction is impeded by **unclear error handling and missing lifecycle controls**. On the positive side, the community is actively reporting and the maintainers are responding with fix PRs (e.g., #6064 for banner clearing).

## 8. Backlog Watch

Long-unanswered or important issues needing maintainer attention:

- **#6000** — [How should security issues be reported?](https://github.com/nearai/ironclaw/issues/6000) (Open since July 11, 1 comment, no maintainer response) — Critical governance gap: no SECURITY.md and private reporting disabled. Security researchers cannot responsibly disclose findings.
- **#5640** — [Harness gap: no RecordingSecurityAuditSink double](https://github.com/nearai/ironclaw/issues/5640) (Open since July 4, 2 comments) — Blocks wiring parity tests. No assignee or milestone.
- **#5741** — [builtin.http.save can fail with OutputTooLarge](https://github.com/nearai/ironclaw/issues/5741) (Open since July 6, 2 comments) — Affects a fundamental tool; no fix in progress.
- **#5836** — [Routine fails on every scheduled run with "No thread attached"](https://github.com/nearai/ironclaw/issues/5836) (Open since July 8, 2 comments) — 0% success rate for scheduled routines; no PR yet.
- **#5889** — [“Load older messages” button does nothing](https://github.com/nearai/ironclaw/issues/5889) (Open since July 9, 2 comments) — Basic pagination broken in activity panel.

These issues represent **stability and security risks** that should be prioritized alongside the bug bash fixes.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

好的，作为AI代理和个人AI助手开源项目的分析师，我已经分析了所提供的LobsterAI GitHub数据。以下是为您生成的项目摘要。

---

### **LobsterAI 项目摘要 (2026-07-14)**

**项目健康度：** 开发活动非常密集，主要关注稳定性和发布准备。

---

#### **1. 今日概览**

LobsterAI 在 2026年7月13-14日期间展现了极高的开发活动，尽管没有新的公开 Issue 或者正式版本发布。团队在24小时内处理了15个 Pull Request，其中13个已合并或关闭，主要聚焦于修复 Windows 平台上的安装和签名问题，并同时推进了桌面通知、协作（Cowork）功能以及后台构建系统的优化。项目的活跃度表明其正处在向稳定版本冲刺的关键阶段，核心目标已从添加新功能转向修复严重的“最后一公里”错误，特别是针对 Windows 客户端的安全软件兼容性和自动更新流程。

#### **2. 发布版本**

无。在过去24小时内没有新的正式版本发布。

#### **3. 项目进展**

今日合并了大量PR，表明多个关键领域正在同步推进：

- **平台稳定性与构建 (Windows)：** 这是今日修复的重点。
    - **修复了Windows安装程序被安全软件误拦截的问题。** PR #2326 引入了安装时的自修复机制，优先使用系统`tar.exe`，并在备用提取器超时后自动恢复。
    - **修复了Windows二进制文件签名问题。** PR #2327 确保所有EXE文件（包括应用本身和卸载程序）都经过内部签名，解决了安全软件因签名缺失而导致的安装挂起。
    - **新增了可选的Windows Web安装程序目标。** PR #2323 为未来更轻量级的安装方式奠定了基础。
    - **修复了Mac更新失败`hdiutil`的问题。** PR #2321 解决了一个跨平台的发布流程问题。
    - **修复了Chrome浏览器并发启动导致的内存泄漏。** PR #2328 通过序列化浏览器操作来解决稳定性问题。

- **核心功能 (Cowork)：**
    - **优化了桌面通知系统。** PR #2318 将任务完成通知升级为更全面的桌面通知管理器，支持等待通知和前台通知模式。
    - **支持了思考过程 (Thinking) 的流式输出。** PR #2324 允许OpenClaw模型按轮次显示其思考过程，提升透明度。
    - **改进了主页快速操作场景。** PR #2319 替换了不适用的场景，并优化了提示文案。
    - **修复了徽章/标题显示问题。** PR #2325 修复了样式裁剪问题，并稳定了模板结构。
    - **修复了Cron定时任务的追赶逻辑。** PR #2320 确保跳过的任务不会在下一个定时周期被意外重复执行。

- **文档与其他：**
    - **优化了文件卡片展示。** PR #2322 对文件卡片UI进行了优化。
    - **修复了协作功能中输入错误分类问题。** PR #1323 (虽然历史已久但今天有更新) 修正了错误的“输入过长”报错，提升用户体验。

#### **4. 社区热门话题**

由于过去24小时内无新的Issues和PR评论，最活跃的话题集中在少数几个历史遗留的PR上：

- **PR #1277: `chore(deps-dev): bump the electron group...` (已开放)**
  - **链接:** [PR #1277](https://github.com/netease-youdao/LobsterAI/pull/1277)
  - **分析:** 这是一个依赖项升级PR，自4月2日打开后一直处于未合并状态。今天（7月13日）有更新活动。这通常表明维护者正在审阅或处理升级Electron和Electron-Builder可能带来的兼容性风险。这是社区关注项目长期健康和技术债务的信号。

- **PR #1323: `fix(cowork): narrow input-too-long error classification` (已开放)**
  - **链接:** [PR #1323](https://github.com/netease-youdao/LobsterAI/pull/1323)
  - **分析:** 此PR旨在修复一个误导性的错误提示。其长期处于开放状态，可能意味着该问题的修复方案存在争议，或者被更高优先级的任务（如今天的安装包问题）所覆盖。社区用户对这一问题的关注，反映了他们对协作功能中错误信息准确性的要求。

#### **5. Bug 与稳定性**

今日修复了一系列严重的Bug，主要集中在安装和启动阶段：

- **[高] Windows安装程序因签名问题被安全软件拦截。** 这是最严重的阻断性问题。修复PR: [#2327](https://github.com/netease-youdao/LobsterAI/pull/2327)。
- **[高] Windows安装过程中 `win-resources.tar` 提取失败导致安装挂死。** 另一个严重的安装问题。修复PR: [#2326](https://github.com/netease-youdao/LobsterAI/pull/2326)。
- **[中] Mac更新失败 `hdiutil`。** 影响Mac用户的更新体验。修复PR: [#2321](https://github.com/netease-youdao/LobsterAI/pull/2321)。
- **[中] Chrome并发启动导致内存泄漏。** 一个潜在的性能和稳定性问题。修复PR: [#2328](https://github.com/netease-youdao/LobsterAI/pull/2328)。
- **[低] 协作功能中徽章/标题显示问题。** 影响界面美观。修复PR: [#2325](https://github.com/netease-youdao/LobsterAI/pull/2325)。

#### **6. 功能需求与路线图信号**

今日的PR揭示了未来的几个发展方向：

- **更智能的桌面通知系统：** PR #2318 不只是修复，还重构了通知管理器，增加了“等待”状态和前台模式。这暗示了未来LobsterAI可能支持更复杂的交互，如等待用户确认的Agent请求。
- **流式思考 (Streaming Thinking)：** PR #2324 引入了模型的思考过程流式输出。这不仅是用户体验的提升，也是为展示更复杂的AI推理过程做准备。
- **Web安装程序 (Web Installer)：** PR #2323 引入了可选的 Web 安装目标，这可能是为了未来支持通过网页下载和安装应用的轻量级分发方式。
- **定时任务 (Scheduled Tasks) UI重构：** PR #1488 虽然历史久远，但今天有更新，表明团队并未放弃对定时任务模块的彻底UI改造，其卡片式网格和搜索筛选功能有望在后续版本中上线。

**预测下一版本可能包含：** Windows 安装/签名修复、重新设计的桌面通知、定时任务的卡片式UI、以及对OpenClaw思考过程的可视化支持。

#### **7. 用户反馈总结**

由于无新的Issue，用户反馈主要从修复的Bug中推断：

- **核心痛点：** Windows用户遇到的安装失败、被安全软件误杀、应用无法更新是最为突出的问题。这表明LobsterAI在Windows平台上的分发和安装流程是当前最大的用户满意度瓶颈。
- **使用场景：** 对协作功能（Cowork）的持续优化，表明这是用户的核心使用场景。特别是对“输入过长”等错误分类的修复，反映了用户在使用长文本或特定参数时遇到的挫折感。
- **满意度：** 随着今日对Windows安装和Mac更新问题的集中修复，过去对此感到不满的用户满意度有望在下一个版本中得到显著提升。

#### **8. 积压任务观察**

以下是需要维护者关注的长期未解决的问题/PR：

- **PR #1277 (依赖升级):** 已开放超过3个月，涉及Electron和Electron-Builder两项核心依赖的升级。长期搁置可能导致安全风险和与新操作系统/硬件的兼容性问题，且会与其他新特性产生冲突。建议尽快合并或决定替代方案。
- **PR #1323 (错误分类修复):** 同样开放超过3个月。这是一个提升协作功能易用性的小修复，但长期未被合并，可能因其优先级较低。建议评估其影响范围，若修复简单，可考虑直接合并。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest – 2026-07-14

## Today's Overview
Moltis shows minimal activity in the past 24 hours. No new issues were opened or closed, and no releases were published. A single pull request (#1147) received an update, but remains open and unmerged. Overall project health appears stable but low-velocity, with no recent merges or breaking changes to report.

## Releases
No new versions were released. The latest available release remains unchanged; users should continue with the current release.

## Project Progress
No pull requests were merged or closed today. The only open PR is **#1147**, which addresses a CalDAV-related fix (see *Bugs & Stability* section for details). No features or advancements were completed in this period.

## Community Hot Topics
The only item with recent activity is **Pull Request #1147**:  
- [**fix(caldav): honor time range in list_events via server-side calendar-query**](https://github.com/moltis-org/moltis/pull/1147)  
  *Author:* thoscut | *Created:* 2026-07-11 | *Updated:* 2026-07-13  
  *Summary:* The `list_events` tool’s `start`/`end` parameters were previously ignored because the range argument was bound but never used in the underlying CalDAV query. This PR fixes the issue by leveraging server-side calendar-query filtering.  
  *Underlying need:* Users expecting accurate time-range filtering for calendar events, which is a core functionality for CalDAV integrations.

## Bugs & Stability
**Bug (Medium Severity)** – *CalDAV `list_events` ignores time range parameters*  
The bug caused all events to be returned regardless of `start`/`end` arguments, contradicting documented behavior.  
- **Fix PR:** [PR #1147](https://github.com/moltis-org/moltis/pull/1147) (open, awaiting review/merge).  
No other bugs or regressions were reported today.

## Feature Requests & Roadmap Signals
No new feature requests were recorded. The only open work (PR #1147) is a bug fix, not a feature. Based on current data, there are no clear signals for upcoming feature additions.

## User Feedback Summary
No user comments, reactions, or satisfaction signals are available in today’s data. The absence of new issues suggests no pressing user pain points were reported in the last 24 hours.

## Backlog Watch
No long-unanswered issues or PRs are present. The single open PR (#1147) is only a few days old and has no unresolved maintainer questions. The project backlog remains clean.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw / QwenPaw Project Digest – 2026-07-14

## 1. Today’s Overview
The project saw high activity with **50 issues and 50 PRs updated** in the last 24 hours. 27 issues were closed and 29 PRs were merged or closed. A new patch release **v2.0.0.post1** was published, addressing a few frontend and backend bugs. The majority of community reports continue to focus on **regressions introduced in the major v2.0.0 upgrade**, particularly around context compression breaking tool‑call/tool‑result pairing, sandbox limitations, and missing features from v1. Developer response has been swift: several targeted fixes have already been merged or are under review.

## 2. Releases
**v2.0.0.post1** (published 2026-07-14)  
- **What’s new:**  
  - Bumped version to 2.0.0.post1  
  - Fixed browser autofill on provider search input (#5981)  
  - Fixed legacy session handling (commit details truncated)  
- **Breaking changes:** None. This is a minor patch with backward compatibility.  
- **Migration notes:** If you are on v2.0.0, upgrading to `.post1` is safe and recommended. No configuration changes required.

## 3. Project Progress (Merged/Closed PRs Today)
29 PRs were merged or closed. Notable advancements:

- **Stability fixes:**  
  - `#6070` – Bump version to 2.0.0post2 (preparing next patch)  
  - `#6052`, `#6058` – Flatten offload hint messages to prevent orphan `ToolResultBlock` that caused `400` errors (directly addresses #5996, #5986)  
  - `#5935` – Refactored tool‑result pruning to unify behavior and prevent context‑compression breakage  

- **Feature enhancements:**  
  - `#6067` – More sensitive files detection and global read permission  
  - `#6054` – Relaxed governance no‑finding fallback and added a global sandbox on/off switch  

- **Testing & quality:**  
  - `#6061` – Added unit tests for Ponytail Quality Plugin backend  
  - `#5791` – Fixed `formatCompact` rounding rollover in the console  

- **Platform compatibility:**  
  - `#5927` – Added `errors='replace'` for GBK encoding on Chinese Windows  

## 4. Community Hot Topics
| Issue / PR | Comments | Summary |
|------------|----------|---------|
| [#5996] – [CLOSED] `[Bug] 2.0.0对话时会产生MODEL_EXECUTION_ERROR` | 11 | Hint message contains orphan `ToolResultBlock`, causing OpenAI 400. Root cause identified and fixed in #6052 / #6058. |
| [#5879] – [CLOSED] `[Feature] 增加可关闭沙箱的功能` | 7 | User requests ability to disable sandbox in trusted environments. Strong upvote (7 comments). PR #6054 partially addresses by adding global sandbox switch. |
| [#5961] – [OPEN] `[Bug] v2.0.0版本循环执行的问题` | 7 | Agent repeatedly writes/deletes without completing simple tasks when using Qwen3.7-plus model. No fix PR yet; likely related to doom‑loop detection. |
| [#5947] – [CLOSED] `[Bug] MCP中禁用了某些子工具的访问,但是agent还是可以调用` | 6 | Tool‑guard deny rules ineffective for MCP sub‑tools. PR #6063 (under review) bridges frontend rules into policy deep scan. |
| [#6006] – [CLOSED] `[Bug] 消息队列功能没有了！急急急` | 6 | Message queue missing in v2.0.0. User very urgent. Fix likely included in v2.0.0.post2. |
| [#6034] – [CLOSED] `[Bug] 升级到2.0版后出现了很多意想不到的情况` | 5 | Multiple regressions: WeChat internal errors, unsolicited content addition, tool‑result 400 errors. Represents general user frustration. |

**Underlying need:** Users are demanding **stability and feature parity with v1.1.x** after the major rewrite. The most critical pain point is the **tool‑call/tool‑result pair breakage** during context compression, which has multiple duplicate reports.

## 5. Bugs & Stability
### Critical (causing session failures or data corruption)
- **Context compression breaks tool_call/tool_result pairing** → `400 BadRequestError`  
  Reports: #5996, #5986, #5960, #5962, #6046. **Fix PRs merged:** #6052, #6058, #5935, #5953.  
- **Shell command hard‑capped at 60s** (#5963); **background offload kills subprocess immediately** (#6056).  
  No fix PR yet; root cause identified in runtime 2.0.  
- **Missing features from v1.1.x**: SSH offline, profiles returning 404 (#5980). Still open, no patch.

### Moderate
- **MCP tool deny rules ignored** (#5947) – PR #6063 under review.  
- **Sandbox shell execution misses venv PATH** (#6042) – open, no fix yet.  
- **WeChat/Feishu channels show "Internal error"** (#6017, #6034) – linked to tool‑result pairing issues; should improve with above fixes.  
- **TUI crashes on mouse click** (#6008) – PR #6069 merged today to prevent crash during streaming.

### Low
- **Skills list only shows 20 items** (#5788) – scroll‑to‑load not working; still open.  
- **Docker container dbus failure** (#5872) – still open.

**Overall severity:** High. The project is in a post‑major‑release stabilization phase. Most critical bugs now have corresponding fix PRs, but several moderate issues remain unaddressed.

## 6. Feature Requests & Roadmap Signals
- **Disable sandbox (global switch)** – #5879, #6054 (PR merged) → expected in v2.0.0.post2 or v2.0.1.  
- **Restore SSH offline & profiles** – #5980 (user from v1.1.12) – likely backported.  
- **Minimize to system tray on close** – #6057 (FR) – low priority but easy win.  
- **Integrate AgentScope permission control** – #5958 – could appear as a governance enhancement.  
- **Tool whitelist with transient allow** – #5955 (comment) – user suggests one‑time or permanent permission model.

**Prediction for next minor release (v2.0.1):** Sandbox toggle, SSH offline restoration, and the batch of context‑compression fixes.

## 7. User Feedback Summary
- **Pain points (strong negative sentiment):**  
  - “越来越不稳定了,还不如V1.xxx的版本” (#6013) – v2.0.0 perceived as a regression.  
  - “要崩溃了，说不了两句话，会话就挂了” (#6046) – session breaks after context compression.  
  - “急急急，望修复” (#6006) – missing message queue blocks workflow.  
- **Use cases:**  
  - Automated administrative tasks (stand‑up meeting summaries) – #6034.  
  - Programming assistance (pip install, long shell commands) – #5879, #5963.  
  - Multi‑channel bots (WeChat, Feishu) – #6034, #6017.  
- **Satisfaction:** Low for v2.0.0 adopters; some choose to downgrade. Developers are acknowledged for rapid fix attempts.

## 8. Backlog Watch
Issues that remain open without a corresponding fix PR or maintainer response:

| Issue | Age | Reason for attention |
|-------|-----|----------------------|
| [#5872] – Docker `browser_use` dbus failure | 5 days | No PR; blocks containerized browser‑use feature. |
| [#5963] – Shell command hard‑capped at 60s | 3 days | Core runtime regression; affects all long‑running tasks. |
| [#6055] – Environment variables not passed | 1 day | Docker env config broken; multiple users affected. |
| [#6042] – Sandbox venv PATH missing | 1 day | Prevents `pip install` inside sandbox. |
| [#5979] – Electron CLI crashes as root | 2 days | Linux sandbox usability block. |

These items require maintainer prioritisation to restore v1.1.x capability and improve Docker/container support.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-07-14

## 1. Today's Overview
Project activity remains **high** with 50 issues and 50 pull requests updated in the last 24 hours. 14 issues were closed and 2 PRs were merged/closed, reflecting progress on v0.8.3 release validation and early v0.8.4 maintenance train work. The community is actively discussing RFCs (#6808, #6165, #9048) and filing bug reports covering sandbox compatibility (Landlock on Fedora), Docker deployment quirks, and Windows signal handling. No new releases were cut today, but the v0.8.3 milestone is effectively feature-frozen and entering final closeout.

## 2. Releases
**None.**

## 3. Project Progress
The following **closed issues** indicate recent feature and fix completions (all merged or closed today):
- **Memory & test coverage** – Edge‑case tests for storage readers (#7694), runtime hooks (#7688), provider response‑wire options (#7690), and zerocode insecure‑TLS confirmation (#7693) were added.
- **Google Workspace** – A bug rejecting camelCase methods in `google_workspace` was fixed and closed (#9044).
- **v0.8.3 tracker closeout** – Six child trackers (observability/CI/docs #8073, runtime/agent loop #8071, provider serialization #8360, channel adapters #8362, gateway/web/onboarding #8070, config‑driven policy #8363) were closed.

Two PRs were merged/closed today (not in the top‑20 list). Notable open PRs making progress:
- **#9051** – Restores lean prebuilt feature set for releases (ci/bug fix).
- **#9011** – Shows active runtime context in the ZeroCode Dashboard (enhancement).
- **#8966** – Fixes `max_context_tokens` fallback chain in config (bug fix).
- **#8996** – Preserves running goals across daemon reload (large bug fix, still open).

## 4. Community Hot Topics
The most active discussions (by comment count) reveal three underlying themes:

- **RFC: Work Lanes, Board Automation, Label Cleanup** (#6808, 14 comments) – A governance RFC proposing structured work lanes to reduce manual maintenance overhead. The high engagement reflects maintainers' desire for smoother contributor workflows.
- **RFC: Lighter Core via External Integrations** (#6165, 9 comments) – Proposes moving long‑tail integrations to skills/MCP/plugins. Mixed opinions on the boundary; community wants clear migration paths.
- **Slack Thread Hydration** (#6055, 7 comments) – Users need automatic backfill of thread context on first mention; a concrete UX improvement for Slack‑centric deployments.
- **Local‑First Small Model Mode** (#5287, 5 comments, 2 👍) – Strong demand for reduced prompt bloat, stricter parsing, and no leakage of internal instructions when using local models.

**Links:**
- [#6808](https://github.com/zeroclaw-labs/zeroclaw/issues/6808)
- [#6165](https://github.com/zeroclaw-labs/zeroclaw/issues/6165)
- [#6055](https://github.com/zeroclaw-labs/zeroclaw/issues/6055)
- [#5287](https://github.com/zeroclaw-labs/zeroclaw/issues/5287)

## 5. Bugs & Stability
Several bugs were reported or actively fixed today, ranked by severity:

| Severity | Issue | Description | Status |
|----------|-------|-------------|--------|
| **S1 – Blocked** | [#9035](https://github.com/zeroclaw-labs/zeroclaw/issues/9035) | Docker Compose gateway binds to loopback behind published port → “Connection refused” | Open, no fix PR yet |
| **S2 – Degraded** | [#8973](https://github.com/zeroclaw-labs/zeroclaw/issues/8973) | Landlock shell tool fails on Fedora because `sh` cannot access `/dev/null` | Open, no fix PR |
| **S2 – Degraded** | [#9028](https://github.com/zeroclaw-labs/zeroclaw/issues/9028) | Ctrl+C on Windows causes forced exit (exit code 1073741510) | Open, no fix PR |
| **S2 – Degraded** | [#9046](https://github.com/zeroclaw-labs/zeroclaw/issues/9046) | `models_cache.json` is read but never written → `/model` always fails | Open, no fix PR |
| **S3 – Minor** | [#6548](https://github.com/zeroclaw-labs/zeroclaw/issues/6548) | Channel runtime command replies bypass Fluent localization (hard‑coded English) | Open, no fix PR |

**Fix PRs in flight:**
- [#8546](https://github.com/zeroclaw-labs/zeroclaw/pull/8546) – Localize CLI status fragments (addresses part of #6548)
- [#8571](https://github.com/zeroclaw-labs/zeroclaw/pull/8571) – Skip global credential fallback for OAuth delegate providers
- [#8964](https://github.com/zeroclaw-labs/zeroclaw/pull/8964) – Strip leaked scratchpad XML from Telegram outbound messages
- [#8966](https://github.com/zeroclaw-labs/zeroclaw/pull/8966) – Fix max context fallback chain
- [#8975](https://github.com/zeroclaw-labs/zeroclaw/pull/8975) – Track assistant threads in Slack polling mode
- [#8996](https://github.com/zeroclaw-labs/zeroclaw/pull/8996) – Preserve running goals across daemon reload
- [#8964](https://github.com/zeroclaw-labs/zeroclaw/pull/8964) – Telegram scratchpad leak fix
- [#9031](https://github.com/zeroclaw-labs/zeroclaw/pull/9031) – Escape release verification Markdown in CI
- [#9033](https://github.com/zeroclaw-labs/zeroclaw/pull/9033) – Remove unused Tauri webview plugin capabilities (security)
- [#9032](https://github.com/zeroclaw-labs/zeroclaw/pull/9032) – Embed dashboard in macOS release sidecar

## 6. Feature Requests & Roadmap Signals
Strong roadmap signals from RFCs and feature requests:

- **RFC: Separate Conversation History from Long‑Term Memory** (#9048, just opened) – Proposes clean separation of session history and agent‑curated memory. Likely to influence v0.8.4 or v0.9.0.
- **RFC: Lighter Core** (#6165) – Accepted but rollout still in progress; next versions will trim built‑in integrations.
- **RFC: Work Lanes & Label Cleanup** (#6808) – Governance changes to ease maintenance; moving to final implementation.
- **Slack Events API (HTTP Request URL) Mode** (#9022) – Request for scale‑to‑zero deployers; would complement existing polling/Socket Mode.
- **GUI Surface for Pending Pairing Codes** (#8998) – Improves onboarding for Telegram/WeChat/Line.
- **Config Validation Warning for Non‑Existent Channel Ref** (#8997) – Small UX win to catch typos early.
- **Local‑First Small Model Mode** (#5287) – High user demand; may become a priority after v0.8.4.

**Prediction:** The memory separation (#9048) and local‑first mode (#5287) are likely candidates for v0.8.5 or v0.9.0, while the Slack HTTP mode (#9022) could be picked up sooner given interest in serverless deployments.

## 7. User Feedback Summary
Real user pain points surfaced in the last 24 hours:

- **Local model users** – Prompt bloat and leakage of internal instructions remain a major friction point (#5287).
- **Slack power users** – Need automatic thread history backfill (#6055); current `strict_mention_in_thread` requires re‑@mention for every message.
- **Windows users** – Ctrl+C causes unconditional exit (#9028) with no graceful shutdown.
- **Docker deployers** – Gateway loopback binding (#9035) prevents external access even with correct ports; likely a missing `0.0.0.0` binding.
- **Multilingual users** – Channel runtime replies ignore Fluent locale (#6548); hard‑coded English appears even when `zh-CN` is configured.
- **Model catalog users** – `/model` command fails silently because `models_cache.json` is never written (#9046), requiring manual workaround.

Satisfaction indicators: Two thumbs‑up on #5287 and high engagement on RFCs suggest the community values architectural discussions and cares deeply about correctness and security.

## 8. Backlog Watch
Issues and PRs that have been open for extended periods or lack recent maintainer attention:

- **#5287** – “Local‑First Small Model Mode” (open since Apr 4, 2026). 5 comments, status `accepted` but no implementation PR. Needs maintainer assignment.
- **#6548** – “Channel runtime localization bypass” (open since May 9, 2026). Labeled `risk:medium`. PR #8546 partially addresses but does not fix all paths.
- **#7960** – Fix `execute_pipeline` sub‑tool access policy bypass (open since Jun 19, 2026). Labeled `needs-author-action`. Author has not responded for weeks.
- **#8571** – Fix delegate credential fallback for OAuth (open since Jul 1, 2026). Labeled `needs-author-action`.
- **#8879** – Unify risk‑profile tool permissions in web UI (open since Jul 9, 2026). Labeled `needs-author-action`.
- **#8893 / #8895** – Memory audit trail and rerank stage (both opened Jul 9, 2026). Labeled `needs-author-action`. These are large features (size L) that could unblock the memory parity tracker (#8891).

Maintainers should prioritise reviewing the stalled PRs and assigning an owner for #5287, as it has broad community support.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/boom7sss/agents-radar).*