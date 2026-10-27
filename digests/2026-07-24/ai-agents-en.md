# OpenClaw Ecosystem Digest 2026-07-24

> Issues: 334 | PRs: 500 | Projects covered: 13 | Generated: 2026-07-24 03:21 UTC

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

# OpenClaw Project Digest — 2026-07-24

## 1. Today's Overview

OpenClaw saw extremely high activity over the past 24 hours: **334 issues** (239 open, 95 closed) and **500 pull requests** (340 open, 160 merged/closed) were updated. The project continues to be heavily maintained, with contributors actively shipping bug fixes and working on large-scale refactors such as localization and agent architecture. No new releases were published today, but the volume of merged PRs (160) indicates significant code motion toward the next stable version. Several critical regressions (P0 and P1) remain open, particularly around session state loss and gateway startup failures on recent 2026.7.x releases.

---

## 2. Releases

**No new releases today.**

The latest available version remains **2026.7.2-beta.3** (referenced in issue #111519). Users who recently upgraded to 2026.7.x should be aware of ongoing regression bugs (see *Bugs & Stability*).

---

## 3. Project Progress

Over the past 24 hours, **160 PRs were merged or closed**, indicating steady development velocity. Notable merged/closed features and fixes from the top PR list:

- **PR #113207** — Fixes a boot session snapshot key issue (`hadEntry false`) that caused all BOOT.md hooks to silently fail on upgrades to 2026.7.x. (by xialonglee)
- **PR #111773** — Fixed `fetchLinkContent` to honor `Content-Type` charset when decoding web content. (by chenyangjun-xy, closed)
- **PR #111404** — Improve `message` tool handling of populated location objects on text sends in Telegram. (by snotty)
- **PR #111609** — Bound JSONL store file reads in Reef audit/replay to prevent OOM on oversized stores. (by RileyJJY)
- **PR #109967, #109970, #110429, #110450, #110544** — A series of small memory-bound fixes for Ollama, MS Teams, Comfy, memory-core, and Active Memory – part of a broader initiative to harden production code against unbounded resource usage.

A major architectural PR **#112678** (refactor agents – move implicit main fallback into load-time roster injection) is still open, as is the localization stack (#111545, #112801, #112784). These are large changes that will likely land in the next minor release.

---

## 4. Community Hot Topics

The following issues and PRs attracted the most discussion and reactions, reflecting pressing community concerns:

- **[#44925] [Bug]: Subagent completion silently lost — no retry, no notification**  
  (22 comments, 2 👍)  
  A long-standing (since March 2026) P1 bug where subagent orchestration silently drops results in multiple failure modes. The community is actively discussing workarounds and the lack of auto-restart.  
  [Issue #44925](https://github.com/openclaw/openclaw/issues/44925)

- **[#102020] [Bug]: Second message in a session fails with "reply session initialization conflicted"**  
  (15 comments, 1 👍)  
  A fresh bug affecting both Signal and other channels, where only the first message succeeds. It is marked as a behavior bug but not yet a release blocker.  
  [Issue #102020](https://github.com/openclaw/openclaw/issues/102020)

- **[#94228] Native Anthropic path: replaying historical `thinking` blocks bricks long tool-use threads**  
  (14 comments, 2 👍)  
  A platinum-hermit rated bug causing a permanent 400 error after several tool-use turns on the native Anthropic API path. The issue is stale but still active.  
  [Issue #94228](https://github.com/openclaw/openclaw/issues/94228)

- **[#92043] Bug: 180s compaction timeout is a single wall clock over whole chunk pipeline**  
  (13 comments, 3 👍)  
  A diamond-lobster P1 where legitimate long compactions fail identically every turn, making sessions unrecoverable for users with heavy history.  
  [Issue #92043](https://github.com/openclaw/openclaw/issues/92043)

- **[#108435] [Bug]: update to openclaw 2026.7.1 — gateway fails to start**  
  (10 comments, 2 👍)  
  A P0 regression blocking users from upgrading to the latest stable release. The error occurs across systemd, Ollama, and manual launch.  
  [Issue #108435](https://github.com/openclaw/openclaw/issues/108435)

**Underlying needs:** Users are demanding better error handling, recovery, and stability in the session layer. The silent failure modes (subagent loss, session conflict, compaction deadlock) directly impact production deployments. The community is also seeking clear communication about upgrade regressions.

---

## 5. Bugs & Stability

Several high-severity bugs were updated or reported in the last 24 hours. Below is a severity-ranked summary:

| Severity | Issue | Summary | Fix PR Exists? |
|----------|-------|---------|----------------|
| 🔴 **P0** | [#108435](https://github.com/openclaw/openclaw/issues/108435) | Gateway fails to start after upgrade to 2026.7.1 | No |
| 🔴 **P0** | [#90378](https://github.com/openclaw/openclaw/issues/90378) | Cron store migrated silently to SQLite; new jobs default to wrong delivery mode | No |
| 🟠 **P1** | [#92043](https://github.com/openclaw/openclaw/issues/92043) | Compaction timeout is wall-clock over whole pipeline (no progress reuse) | No |
| 🟠 **P1** | [#94228](https://github.com/openclaw/openclaw/issues/94228) | Native Anthropic `thinking` blocks cause permanent 400 on long tool-use sessions | No |
| 🟠 **P1** | [#102020](https://github.com/openclaw/openclaw/issues/102020) | Second message in session fails with "reply session initialization conflicted" | No |
| 🟠 **P1** | [#44925](https://github.com/openclaw/openclaw/issues/44925) | Subagent completion silently lost (multiple patterns) | No |
| 🟠 **P1** | [#111519](https://github.com/openclaw/openclaw/issues/111519) | Telegram DM replies fall back after stale DM-scope cleanup in 2026.7.2-beta.3 | No |
| 🟠 **P1** | [#91941](https://github.com/openclaw/openclaw/issues/91941) | Feishu streaming card full-content updates cause severe latency | No |
| 🟡 **P2** | [#108580](https://github.com/openclaw/openclaw/issues/108580) | Cron tool schema incompatible with llama.cpp grammar-constrained tool calling (regression in 2026.7.1) | No |
| 🟡 **P2** | [#81514](https://github.com/openclaw/openclaw/issues/81514) | Cron isolated-job status non-deterministic after tool error recovery | No |
| 🟡 **P2** | [#92374](https://github.com/openclaw/openclaw/issues/92374) | Plugin `message_sending` hooks silently bypassed on channel agent-reply delivery | No |

**Note:** Several of these have linked PRs (e.g., #113207 fixes boot session key issues) but many remain unresolved.

---

## 6. Feature Requests & Roadmap Signals

Top user-requested features from the last 24 hours (by comment count or reactions):

- **[#110950] Everything is a cron — unify heartbeat, watchers, and scheduled automation**  
  *Closed* – Likely to be considered for next version as it was merged quickly (maintainer-authored).  
  [Issue #110950](https://github.com/openclaw/openclaw/issues/110950)

- **[#8299] Config option to suppress sub-agent announce**  
  8 comments – Users want granular control over when sub-agent results are announced.  
  [Issue #8299](https://github.com/openclaw/openclaw/issues/8299)

- **[#67419] Session context bloat: bootstrap files re-injected every turn**  
  9 comments – Wasting 20-30% of tokens. A strong candidate for a performance-focused release.  
  [Issue #67419](https://github.com/openclaw/openclaw/issues/67419)

- **[#49259] Prune stale orphaned sessions from Dashboard**  
  7 comments – Needed for users with many abandoned channels. Could land soon.  
  [Issue #49259](https://github.com/openclaw/openclaw/issues/49259)

- **[#45390] Session TTL / max lifetime for automatic rotation**  
  5 comments – Directly addresses session bloat observed in the field.  
  [Issue #45390](https://github.com/openclaw/openclaw/issues/45390)

- **[#42651] Memory MVP: ingestion helpers and CLI/skill surface**  
  5 comments – Part of a larger memory roadmap that is gaining attention.  
  [Issue #42651](https://github.com/openclaw/openclaw/issues/42651)

- **[#41418] Global --dry-run mode to prevent all tool calls**  
  5 comments – Safety request for testing agent behavior without side effects.  
  [Issue #41418](https://github.com/openclaw/openclaw/issues/41418)

**Prediction for next release:** The localization stack (multiple large PRs from giodl73-repo) and the agent roster refactor (#112678) are likely to be merged. At least one "memory MVP" issue may be addressed. Context bloat fixes (#67419, #45390) are also strong candidates given the number of related compaction bugs.

---

## 7. User Feedback Summary

From the issues and comments, the following pain points emerge:

- **Session reliability is the #1 concern:** Multiple reports of silent data loss (subagent completion, thinking block corruption, session initialization conflicts). Users feel frustrated that errors are not surfaced and recovery is manual.
- **Upgrade regressions are eroding trust:** The 2026.7.x line introduced several breakages (gateway crash, schema incompatibilities, cron defaults). Several users explicitly state they are holding back on upgrades.
- **Context management remains a recurring theme:** Compaction timeouts, token bloat from injected files, and lack of session TTL dominate performance-related feedback.
- **Positive signals:** The number of PRs merged (160) and the rapid response to some bugs (e.g., boot session fix #113207 authored same day) show that maintainers are responsive. The localization initiative and the "everything is a cron" unification have community support.

---

## 8. Backlog Watch

The following important issues have been stale for months and still lack maintainer review or a fix:

| Issue | Age | Reason for Concern |
|-------|-----|-------------------|
| [#48579](https://github.com/openclaw/openclaw/issues/48579) | Created 2026-03-17 | Context pruning "off" mode not preventing compactions — user reports 82 compactions/day despite settings. Needs product decision. |
| [#43374](https://github.com/openclaw/openclaw/issues/43374) | Created 2026-03-11 | All LLM API calls time out simultaneously under multi-agent concurrency. Platinum hermit rank, stale. |
| [#42273](https://github.com/openclaw/openclaw/issues/42273) | Created 2026-03-10 | `backup create` stalls on large installations (4GB+ .openclaw dir). Platinum hermit, stable maturity. |
| [#41372](https://github.com/openclaw/openclaw/issues/41372) | Created 2026-03-09 | Field report: 25 findings from 4 weeks of self-hosted use (crashes, CLI docs, Discord issues). Platinum hermit, stale. |
| [#42648](https://github.com/openclaw/openclaw/issues/42648) | Created 2026-03-11 | Memory MVP write pipeline — untouched for months despite being core to the memory feature. |
| [#7057](https://github.com/openclaw/openclaw/issues/7057) | Created 2026-02-02 | Flaky tests on Windows/WSL – timeouts and ENOENT. Low priority but blocks CI reliability for Windows users. |

**Maintainer attention needed:** Many of these are tagged `clawsweeper:needs-maintainer-review` or `clawsweeper:needs-product-decision`, indicating they have been triaged but not assigned. The project would benefit from a concerted effort to resolve or close these long-standing items, especially those impacting stability (#48579, #43374).

---

*This digest is generated from GitHub data available as of 2026-07-24 23:59 UTC.*

---

## Cross-Ecosystem Comparison

# Cross-Project Ecosystem Comparison Report
**Date: 2026-07-24 | Period: 24-hour window**

---

## 1. Ecosystem Overview

The personal AI agent open-source landscape is experiencing a bifurcation between **core infrastructure projects** (OpenClaw, ZeroClaw) that serve as reference implementations for agent orchestration, and **application-layer tools** (Hermes Agent, CoPaw, LobsterAI) targeting specific deployment environments and user personas. A clear pattern of **stabilization pressure** is visible across all active projects: the rapid feature velocity of early 2026 has given way to intense bug-fixing cycles, particularly around session reliability, channel delivery, and memory management. Two new entrants—IronClaw and ZeptoClaw—are in pre-launch/hardening phases, indicating continued ecosystem expansion. Notably, **security concerns are emerging as a cross-cutting theme**, with multiple projects independently hardening subprocess execution, credential handling, and channel authorization in the same 24-hour window.

---

## 2. Activity Comparison

| Project | Issues Updated (24h) | PRs Updated (24h) | Merged/Closed PRs | Release Today | Health Score |
|---------|---------------------|-------------------|-------------------|---------------|--------------|
| **OpenClaw** | 334 | 500 | 160 | None | ⚠️ Moderate (high activity but P0 regressions) |
| **ZeroClaw** | 50 | 50 | 0 | None | ⚠️ Moderate (intense open queue, no merges today) |
| **Hermes Agent** | 50 | 50 | 17 | None | 🟢 Good (responsive fixes, active review) |
| **CoPaw** | 28 | 50 | 21 | v2.0.1-beta.2 | 🟢 Good (high merge rate, critical fixes underway) |
| **LobsterAI** | 3 | 50 | 50 | None | 🟢 Good (all updates merged, clearing backlog) |
| **IronClaw** | 31 | 50 | 19 | None | 🔴 Pre-launch (intense, many blockers) |
| **NanoBot** | 9 | 38 | 32 | None | 🟢 Good (efficient merging, critical fix in review) |
| **Moltis** | 2 | 5 | 5 | 2 releases | 🟢 Good (small, well-managed) |
| **PicoClaw** | 2 | 14 | 6 | None | 🟡 Low activity (dependency bumps only) |
| **NanoClaw** | 1 | 10 | 4 | None | 🟡 Low activity (steady, narrow focus) |
| **ZeptoClaw** | 2 | 1 | 0 | None | 🔴 Critical (2 P1 bugs, CI blocked) |
| **NullClaw** | 0 | 0 | 0 | None | ⚫ Dormant |
| **TinyClaw** | 0 | 0 | 0 | None | ⚫ Dormant |

**Health Score Key:** 🟢 Good = active merging, responsive to critical issues; 🟡 Low = low velocity but stable; ⚠️ Moderate = high activity but significant open problems; 🔴 Critical = blockers preventing progress; ⚫ Dormant = no activity.

---

## 3. OpenClaw's Position

**Advantages vs. peers:**
- **Scale & maturity:** With 334 issues and 500 PRs in 24 hours, OpenClaw operates at 6-10x the activity volume of any single competitor. Its 160 merged/closed PRs in one day exceed many projects' monthly totals.
- **Reference implementation status:** OpenClaw is the canonical reference for the "Claw" architecture family (PicoClaw, NanoClaw, NullClaw, TinyClaw all derive from it). Its APIs and conventions shape downstream projects.
- **Localization initiative:** The multi-PR localization stack (#111545, #112801, #112784) is unique—no other project demonstrates equivalent investment in internationalization.
- **Bug count as feature:** The sheer number of reported issues (239 open) indicates a larger user base and more rigorous testing than any peer.

**Technical approach differences:**
- OpenClaw uses a **monolithic agent runtime** with a session-oriented architecture, whereas ZeroClaw and Hermes Agent lean toward more modular, profile-based designs. OpenClaw's "everything is a cron" unification (#110950) signals convergence of scheduling and event handling.
- Its **memory handling** (compaction, session bloat) is more complex than NanoBot or CoPaw, reflecting both a larger feature surface and technical debt.

**Community size comparison:**
- OpenClaw's 334 issues/500 PRs vs. 50/50 for ZeroClaw and Hermes suggests a community roughly 6-7x larger. However, the **bug-to-fix ratio** is concerning: OpenClaw merged 160 PRs but still has 6 P0/P1 bugs with no fix PR, whereas Hermes Agent and CoPaw show faster turnaround on critical items.

**Key vulnerability:** The P0 gateway startup failure (#108435) and P1 session loss bugs erode trust in the 2026.7.x release line. OpenClaw risks losing early adopters to more stable alternatives if regressions persist.

---

## 4. Shared Technical Focus Areas

The following requirements are emerging across **multiple projects simultaneously**, indicating industry-wide priorities:

| Requirement | Affected Projects | Specific Symptoms |
|-------------|-------------------|-------------------|
| **Session reliability & state persistence** | OpenClaw, Hermes Agent, CoPaw, LobsterAI | Lost subagent completions, session init conflicts, stale cursor advancement |
| **Subprocess security hardening** | ZeroClaw, ZeptoClaw, NanoBot | Environment variable leaks, process tree reaping, shell path injection |
| **Channel delivery consistency** | OpenClaw, ZeroClaw, Hermes Agent, CoPaw | Telegram message loss, WeChat cursor races, gateway retry loops |
| **Context window & compaction management** | OpenClaw, CoPaw, PicoClaw | Compaction timeouts, token bloat, session TTL requests |
| **LLM provider interoperability** | CoPaw, ZeroClaw, NanoBot, PicoClaw | Tool call parsing failures, model-specific caching, fallback chains |
| **Multi-agent / subagent orchestration** | OpenClaw, LobsterAI, ZeroClaw, CoPaw | Silent failures, context corruption, name resolution |
| **Architecture simplification & refactoring** | OpenClaw, IronClaw, ZeroClaw | Locale/agent roster refactors, runtime assembly collapse, MCP lifecycle decoupling |
| **Windows platform support** | CoPaw, IronClaw, ZeroClaw, NanoBot | PATH handling, PowerShell multiline, DLL dependencies |

**Key insight:** The convergence on **session atomicity** and **process isolation** suggests the ecosystem is maturing from prototype to production. No single project has solved these well; competition will likely center on which achieves production-grade reliability first.

---

## 5. Differentiation Analysis

| Dimension | OpenClaw | ZeroClaw | Hermes Agent | CoPaw | NanoBot | IronClaw |
|-----------|----------|----------|--------------|-------|---------|----------|
| **Primary user** | Self-hosters, power users | Developers, security-conscious | Desktop users, SSH remote | Multi-model power users | Web-first, lightweight | Enterprise/staging |
| **Architecture** | Monolithic agent runtime | Modular with A2A support | Profile-based, desktop-centric | React agent with MCP | Lightweight, Python-native | Rust-based, extension system |
| **Key strength** | Largest ecosystem, most features | Security design, A2A proto | Desktop polish, voice | Model provider variety | WebUI, simplicity | Configurability, contracts |
| **Key weakness** | Regressions, stability debt | Low merge velocity (0 today) | Profile path issues, UI bugs | Performance regression | Ollama speed, data loss | Pre-launch immaturity |
| **Release cadence** | Beta (2026.7.2-beta.3) | v0.8.3 | v0.19.0 stable | v2.0.1-beta.2 | v0.2.2 | rc1 |
| **Programming language** | Go | Rust | Go | Python | Python | Rust |
| **Security posture** | Reactive fixes | Proactive (KeySource RFC, Landlock) | OAuth retry hole | Basic | Basic plus shell guard | Extension model |

**Notable differentiators:**
- **ZeroClaw** is the only project with a formal RFC process (#9127, KeySource Trait) and explicit security architecture (Landlock, A2A TOTP). It treats security as a first-class design constraint.
- **IronClaw** has the most structured product management: epics for heartbeat systems, skill routing, admin-managed agents. It reads like a commercial product roadmap.
- **CoPaw** uniquely supports AIOnly provider (190+ models) and has the most granular bug tracking (per-model tool call issues).
- **Hermes Agent** is the only project with wake-word support and active localization (Russian translation PR).
- **NanoBot** has the highest merge-efficiency ratio (32/38 PRs merged), suggesting focused scope and disciplined maintainers.

---

## 6. Community Momentum & Maturity

**Tier 1: Rapid iteration / high risk-reward**
- **OpenClaw** – Highest absolute activity but also highest bug count. The project is *thrashing* between feature work (localization, agent refactors) and stability crises (P0 regressions). It is the ecosystem's leading indicator but not its safest bet.
- **ZeroClaw** – Also high activity but with a different character: many open PRs, few merges, suggesting a bottleneck in review capacity. The A2A and KeySource work indicates strong architectural ambition.

**Tier 2: Stabilizing / shipping fixes**
- **Hermes Agent** – Recovering from v0.19 regressions. The "salvaged" skill PRs and wake-word feature suggest the team is repaying technical debt while adding polish.
- **CoPaw** – Aggressive bug-fixing with 21 PRs merged. The v2.0.1-beta.2 release shows they are close to a stable v2.0.1.
- **LobsterAI** – All 50 PRs merged today; the project is in a cleanup phase from a large release. Open bugs are stale but not critical.
- **NanoBot** – Efficient operation. The critical data-loss bug #5051 has a fix PR in progress; prompt caching and model override features show user-driven roadmap.

**Tier 3: Pre-launch / niche**
- **IronClaw** – Intense pre-launch activity with structured epics. The rebranding from "Reborn" to "IronClaw" suggests a product identity shift. High risk of launch-day regressions.
- **ZeptoClaw** – Hardening phase with CI blockers. Won't ship until safety issues resolved.

**Tier 4: Steady-state / low activity**
- **Moltis, NanoClaw, PicoClaw** – Small, focused projects with narrow commit scopes. Moltis is healthy; PicoClaw and NanoClaw are dependency-maintenance mode.

**Tier 5: Dormant**
- **NullClaw, TinyClaw** – No activity. Likely abandoned or waiting for upstream OpenClaw releases.

**Maturity assessment:** The ecosystem is in an **adolescent phase**—feature-rich but unstable. No project has achieved production-grade reliability across all dimensions. Hermes Agent and CoPaw are closest to "stable for daily use" but still have critical open bugs.

---

## 7. Trend Signals

**For AI agent developers, the following industry trends are extractable from community feedback across all projects:**

### 1. Performance at scale is the #1 unmet need
- "Extra 60 seconds per turn" (NanoBot #4867)
- "2s fixed overhead per request" (CoPaw #6307)
- "Compaction timeout kills sessions" (OpenClaw #92043)
- "Long sessions lag" (ZeroClaw #9092)

**Signal:** Agents are being used in production for extended sessions, and current architectures don't handle this well. **Opportunity:** Projects that solve O(1) context management with minimal latency will leapfrog competitors.

### 2. Context budget is the new memory limit
- "Bootstrap files re-injected every turn wastes 20-30% tokens" (OpenClaw #67419)
- "Session TTL / max lifetime" (OpenClaw #45390)
- "Prune stale sessions" (OpenClaw #49259)
- "Memory MVP: ingestion helpers" (OpenClaw #42651)

**Signal:** Users want predictable token consumption and automatic lifecycle management, not manual context pruning. **Opportunity:** Default-on session rotation with configurable budgets.

### 3. "Plug and play" expectation is growing
- "Per-conversation model override" (NanoBot #4253)
- "Docker hot-update" (CoPaw #6344)
- "Configurable fallback chain" (PicoClaw #3200)
- "Slack OAuth persistence" (IronClaw #6544)

**Signal:** Users expect agents to be as deployable as web apps. Configuration friction (env vars, path issues, missing binaries) is a top frustration. **Opportunity:** Zero-config onboarding with sensible defaults.

### 4. Security is shifting from afterthought to prerequisite
- "Subprocess credential leakage" (ZeptoClaw #644)
- "KeySource Trait RFC" (ZeroClaw #9127)
- "Shell guard injection bypass" (NanoBot #4594)
- "OAuth retry loop" (Hermes Agent #70401)
- "Landlock sandbox restrictions" (ZeroClaw #9204)

**Signal:** Agent autonomy (running code, accessing APIs) creates new attack surfaces that single-vendor solutions haven't addressed. **Opportunity:** First-movers in agent security (auditing, sandboxing, credential isolation) will win enterprise adoption.

### 5. Multi-modal and multi-channel are table stakes, not differentiators
- Almost every project supports Telegram, Slack, Discord, WeChat, Matrix.
- Hailo hardware support (ZeroClaw), native E2EE Matrix (NanoClaw), Telegram threads (NanoClaw) show channel depth competition.

**Signal:** Channel support is expected; **channel reliability** (no dropped messages, proper streaming) is the new quality bar. **Opportunity:** Focus on delivery guarantees (QoS, retry with dedup, cursor atomicity) rather than adding more platforms.

### 6. The "agent as infrastructure" pattern is emerging
- IronClaw's admin-managed agents (#6578)
- ZeroClaw's A2A protocol (#3566)
- LobsterAI's per-agent IM binding (#1265)
- OpenClaw's subagent orchestration (#44925)

**Signal:** Agents are being treated as programmable services, not just chat interfaces. Multi-agent topologies, HTTP-callable agents, and role-based access are in demand. **Opportunity:** Agent-to-agent protocols (A2A, MCP) and agent lifecycle management (deploy, scale, monitor) will become essential platform features.

### 7. Localization is gaining critical mass
- OpenClaw: Multi-PR localization stack
- Hermes Agent: Russian locale PR
- ZeroClaw: i18n in UI components
- Global Chinese-language support across LobsterAI, PicoClaw, NanoClaw

**Signal:** The ecosystem is globalizing, with Chinese developers representing a significant user base (LobsterAI from Netease Youdao, PicoClaw from Sipeed). **Opportunity:** Early investment in i18n infrastructure (translation frameworks, RTL support, CJK rendering) will pay off as the user base diversifies.

---

**Bottom line for decision-makers:** If you need a stable agent today, Hermes Agent and CoPaw offer the best balance of features and responsiveness. If you want to bet on the ecosystem's future direction, OpenClaw (reference standard) and ZeroClaw (security architecture) represent the most influential design philosophies. IronClaw is the wildcard—its structured pre-launch could produce the most production-ready product, if it ships cleanly. The industry-wide challenge remains **session reliability at scale**; whoever cracks this will define the next generation of agent infrastructure.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-07-24

**Generated from GitHub data (HKUDS/nanobot) – 24-hour window ending 2026-07-24 23:59 UTC**

---

## 1. Today’s Overview

The project saw very high activity, with 9 issues and 38 PRs updated. A large batch of 32 PRs were merged or closed, indicating a strong push to stabilize the codebase after recent feature work. Community engagement remains robust, especially on performance and usability concerns. Three new issues were opened (one bug, one feature request, one test fix), while six were closed. The maintainers continue to prioritise WebUI improvements, security hardening, and bug fixes, with several high-priority patches landing today.

---

## 2. Releases

**None** – No new releases were published today. The latest reported version in issues is `nanobot-ai==0.2.2` (mentioned in issue #5051).

---

## 3. Project Progress

Today **32 PRs were merged or closed**, covering a wide range of components. Notable advances include:

- **WebUI**  
  - 🔗 [#5070 – Present chats as topics](https://github.com/HKUDS/nanobot/pull/5070) – major UX reorganisation across all locales.  
  - 🔗 [#5061 – Simplify model preset settings](https://github.com/HKUDS/nanobot/pull/5061) – separates presets from explicit call order, removes synthetic `default` preset.  
  - 🔗 [#5065 – Allow media directory access when `restrictToWorkspace` is enabled](https://github.com/HKUDS/nanobot/pull/5065) – fixes file preview for uploaded media.  
  - 🔗 [#5060 – Polish responsive layouts and settings search](https://github.com/HKUDS/nanobot/pull/5060)  
  - 🔗 [#5058 – Unify settings and dark mode surfaces](https://github.com/HKUDS/nanobot/pull/5058)

- **Security & Workspace**  
  - 🔗 [#4889 – Authorize destructive priority commands](https://github.com/HKUDS/nanobot/pull/4889) – adds `channels.admin_senders` allowlist for `/restart` and `/stop`.  
  - 🔗 [#4594 – Extract absolute paths after equals sign in shell guard](https://github.com/HKUDS/nanobot/pull/4594) – fixes `curl --output=/etc/passwd` bypass.  

- **Agent / Exec / Session**  
  - 🔗 [#5066 – Retain stale sessions after cleanup failure](https://github.com/HKUDS/nanobot/pull/5066) – prevents data loss on cleanup failure.  
  - 🔗 [#5068 – Tolerate files removed during session listing](https://github.com/HKUDS/nanobot/pull/5068) – avoids crash on concurrent file deletion.  

- **Channels**  
  - 🔗 [#5055 – Fix Telegram markdown split on long single-line fences](https://github.com/HKUDS/nanobot/pull/5055) – prevents send path hang.  
  - 🔗 [#5069 – Ignore confirmations after connect cancellation](https://github.com/HKUDS/nanobot/pull/5069) *(still open)*  

- **Documents**  
  - 🔗 [#5039 – Preserve DOCX table content](https://github.com/HKUDS/nanobot/pull/5039) – adds table extraction with recursion guards.  

- **Testing & Infrastructure**  
  - 🔗 [#5064 – Use `python3` in ExecTool workspace scope tests](https://github.com/HKUDS/nanobot/pull/5064) – fixes Debian/Ubuntu compatibility.  
  - 🔗 [#4901 – Replace transcript JSON round-trip copies with `deepcopy`](https://github.com/HKUDS/nanobot/pull/4901) – performance fix.  

---

## 4. Community Hot Topics

The most active discussions today centred around performance and configurability:

| Issue | Comments | Summary |
|-------|----------|---------|
| 🔗 [#4867 (CLOSED)](https://github.com/HKUDS/nanobot/issues/4867) | 23 | **“Preserve exact prompt prefix to enable caching in Ollama”** – User reports 60-second overhead per turn with local Ollama models due to missing cache key stability. *Underlying need:* make local model inference fast enough for real-time use. |
| 🔗 [#4253 (CLOSED)](https://github.com/HKUDS/nanobot/issues/4253) | 6 | **“Support overriding model per conversation”** – User wants to switch between OpenRouter (fast) and local LlamaCpp (private) depending on task sensitivity. *Underlying need:* flexible, per-conversation model routing. |
| 🔗 [#5059 (CLOSED)](https://github.com/HKUDS/nanobot/issues/5059) | 4 | **“都支持各个浏览器的什么版本”** – User asks which browser versions are supported. *Underlying need:* clearer documentation and wider browser support. |
| 🔗 [#4858 (OPEN)](https://github.com/HKUDS/nanobot/issues/4858) | 2 | **“Refactor dynamic tool provider lifecycle out of AgentLoop”** – Proposes decoupling MCP state from core agent loop. *Underlying need:* maintainable architecture for tool providers. |

Two additional open issues with 1 comment each are also notable:  
- 🔗 [#5028](https://github.com/HKUDS/nanobot/issues/5028) – Media path and workspace restriction conflict (Feishu uploads).  
- 🔗 [#5051](https://github.com/HKUDS/nanobot/issues/5051) – Length recovery loses earlier segments (critical bug, see §5).

---

## 5. Bugs & Stability

Several bugs were reported or fixed today, ranked by estimated severity:

| Severity | Issue / PR | Description | Status |
|----------|------------|-------------|--------|
| **Critical** | 🔗 [#5051 (OPEN)](https://github.com/HKUDS/nanobot/issues/5051) | Length recovery `final_content` only contains the last continuation segment; earlier responses lost. Data loss. | Open; fix PR [#5056](https://github.com/HKUDS/nanobot/pull/5056) in progress (accumulates segments). |
| **High** | 🔗 [#5028 (OPEN)](https://github.com/HKUDS/nanobot/issues/5028) | Media files uploaded via Feishu become inaccessible when `restrictToWorkspace` is enabled. | Open; workaround exists in PR [#5065](https://github.com/HKUDS/nanobot/pull/5065) (already merged). |
| **Medium** | 🔗 [#4592 (CLOSED)](https://github.com/HKUDS/nanobot/issues/4592) | Shell workspace guard misses absolute paths after `=`. | Fixed in PR [#4594](https://github.com/HKUDS/nanobot/pull/4594) (merged today). |
| **Medium** | 🔗 [#4940 (CLOSED)](https://github.com/HKUDS/nanobot/issues/4940) | Legacy session filename format loses `workspace_scope` after restart. | Fixed (PR linked in issue – merged). |
| **Low** | 🔗 [#5062 (CLOSED)](https://github.com/HKUDS/nanobot/issues/5062) | `test_workspace_scope.py` uses `python` command, fails on systems without symlink. | Fixed in PR [#5064](https://github.com/HKUDS/nanobot/pull/5064) (merged today). |

**Security fixes landed:** #4889 (admin command authorization) and #4594 (shell path extraction) are both merged.

No crashes (e.g., segfaults) were reported today.

---

## 6. Feature Requests & Roadmap Signals

- **Ollama prompt caching** – Issue #4867 (closed) suggests a strong user desire for reduced inference latency. While closed, the conversation likely led to internal improvements. Expect prompt prefix preservation to appear in a future release.  
- **Per-conversation model override** – Issue #4253 (closed) signals demand for flexible model routing. The PR [#5061](https://github.com/HKUDS/nanobot/pull/5061) simplifies model preset settings, which may lay groundwork for per-conversation overrides.  
- **Refactoring MCP lifecycle** – Issue [#4858](https://github.com/HKUDS/nanobot/issues/4858) is still open and labelled `refactor`. It reflects a longer-term architectural goal to separate tool provider lifecycle from the agent loop. Could land in the next major version.  
- **Browser version support** – Issue #5059 (closed without detailed resolution) hints at possible future work on compatibility matrices or automated testing.  
- **WebUI visual unification** – Today’s merges (topic-based chat, responsive layout, dark mode tokens, settings redesign) indicate a sustained drive toward a polished, consistent user interface.

---

## 7. User Feedback Summary

Real user pain points extracted from today’s activity:

- **Ollama performance is unusable** – “extra 60 seconds to every single turn” (#4867). This is the loudest complaint in the dataset, directed at local model users with 32 GB VRAM.  
- **File access restrictions are confusing** – Media uploaded via Feishu is stored outside the workspace, then blocked by `restrictToWorkspace`. User wants seamless access (#5028).  
- **Model switching is cumbersome** – Users juggle between fast/public and slow/private models, needing per-conversation override instead of global presets (#4253).  
- **Data loss during length recovery** – When model output is truncated, only the final continuation segment is kept (#5051). This breaks long conversations.  
- **Linux compatibility hiccups** – The `python` vs `python3` issue frustrates Debian/Ubuntu users (#5062, quickly fixed).  
- **Session metadata loss** – Legacy format sessions lost their workspace scope after restart, causing project path confusion (#4940, fixed).

Overall satisfaction is mixed: the rapid merge of fixes demonstrates responsiveness, but the number of open bugs and performance complaints shows that the project is still maturing.

---

## 8. Backlog Watch

Several open PRs and issues require maintainer attention, particularly those with conflicts or high priority:

| Item | Details | Concern |
|------|---------|---------|
| 🔗 [#5042 (OPEN, conflict)](https://github.com/HKUDS/nanobot/pull/5042) | Fix cron null schedule – has merge conflict. | Blocks sibling PRs; priority p1. |
| 🔗 [#4987 (OPEN, conflict, p0)](https://github.com/HKUDS/nanobot/pull/4987) | Bind workspace checks to opened files – critical security fix. Conflict unresolved. | High risk; merging should be accelerated. |
| 🔗 [#5056 (OPEN, p1)](https://github.com/HKUDS/nanobot/pull/5056) | Fix length recovery data loss – directly addresses #5051. Needs review. | Affects all users of truncated LLM outputs. |
| 🔗 [#5057 (OPEN, p1)](https://github.com/HKUDS/nanobot/pull/5057) | Normalize local JSON Schema refs for MCP compatibility. | Blocks Kimi/Moonshot providers where a single broken tool can reject the whole chat. |
| 🔗 [#5069 (OPEN, p1)](https://github.com/HKUDS/nanobot/pull/5069) | Ignore confirmations after connect cancellation. | Prevents saved credentials from cancelled sessions. |
| 🔗 [#4858 (OPEN, p2)](https://github.com/HKUDS/nanobot/issues/4858) | Refactor MCP lifecycle out of AgentLoop – 2 weeks old, no PR yet. | Architectural debt; low urgency but important for future maintainability. |

No issues have gone unanswered for more than 30 days; the project team appears to be keeping up with the inbox.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-07-24

## 1. Today’s Overview

Hermes Agent saw very high activity in the last 24 hours, with **50 issues** and **50 pull requests** updated. Of those, 43 issues remain open/active and 7 were closed; 33 PRs are open and **17 were merged or closed**. No new release was published. The community is actively reporting and fixing regressions, especially around the **v0.19.0** stable release (profile‑scoped paths, gateway state, desktop UI quirks). Several high‑severity bugs (401‑retry loop, gateway wedging) are being addressed in open PRs. A long‑standing feature request for automatic backups gained additional traction, and a wave of skill‑related improvements landed through salvaged contributions.

## 2. Releases

**None** — no new releases were created on 2026-07-24.

## 3. Project Progress (Merged/Closed PRs Today)

17 PRs were merged or closed. Key merged items:

- **[PR #70495](https://github.com/NousResearch/hermes-agent/pull/70495) (fix):** `truncate_message()` now preserves table boundaries and ordered list continuity when splitting long messages into chunks — a common source of broken Markdown in gateway outputs.
- **[PR #46031](https://github.com/NousResearch/hermes-agent/pull/46031) (fix):** Added `skills.description_max_length` and `skills.description_truncation_suffix` configuration keys, allowing users to control how skill descriptions are shortened in prompts, with caching for performance.
- **[PR #14289](https://github.com/NousResearch/hermes-agent/pull/14289) (fix):** Raised the shared skill‑description truncation cap from 60 to 1024 characters, ensuring long routing descriptions remain intact in the agent’s system prompt.
- **[PR #70492](https://github.com/NousResearch/hermes-agent/pull/70492) (feat – closed as invalid):** The “pulse‑buttons” plugin for Project Pulse was submitted but closed as invalid; no action taken.

The merged fixes focus on **message formatting robustness** and **skill description configurability**, both areas that have seen repeated user complaints.

## 4. Community Hot Topics

Most discussed issues and PRs (by comment count):

| Item | Type | Comments | Summary |
|------|------|----------|---------|
| [Issue #66875](https://github.com/NousResearch/hermes-agent/issues/66875) | Bug | 8 | Desktop: latest session does not switch after navigating to Plugins/Artifacts tab and back. Users are frustrated because the session list becomes unresponsive. |
| [Issue #69314](https://github.com/NousResearch/hermes-agent/issues/69314) | Bug | 7 | Telegram gateway behind a healthy HTTP proxy gets stuck in a retry loop with hundreds of CLOSE_WAIT sockets. Requires full restart. A P3 bug with significant real‑world impact. |
| [Issue #12238](https://github.com/NousResearch/hermes-agent/issues/12238) | Feature | 6 (+19 👍) | Built‑in automatic backup & version control for `~/.hermes/`. Long‑standing request with strong community support. |
| [Issue #49978](https://github.com/NousResearch/hermes-agent/issues/49978) | Bug | 6 (+2 👍) | PageUp in focused chat input breaks layout (sidebar squeezed, blank space). Multiple reproductions on different platforms. |
| [Issue #69551](https://github.com/NousResearch/hermes-agent/issues/69551) | Bug | 5 | Desktop SSH remote mode broken when a non‑default profile is active — token‑path validation uses profile‑scoped `HERMES_HOME` while client hardcodes `~/.hermes/desktop-ssh`. |
| [PR #70509](https://github.com/NousResearch/hermes-agent/pull/70509) | Feature | – | Adds “Hey Hermes” on‑device wake word for CLI, TUI, and desktop. Highly anticipated feature salvaged from earlier work. |

The community is overwhelmingly reporting **regressions in session management**, **gateway reliability**, and **profile‑aware path handling**. The backup feature request (#12238) continues to garner interest, indicating users want a safety net for agent state.

## 5. Bugs & Stability

Bugs reported in the last 24 hours, ranked by severity (P1 highest):

- **P1 – OAuth retry loop** ([Issue #70401](https://github.com/NousResearch/hermes-agent/issues/70401)): OAuth credential pool enters an unbounded, non‑interruptible 401 retry loop when a key hint matches no entry. The process can only be killed externally. **No fix PR yet.**
- **P2 – Desktop session switching** ([Issue #66875](https://github.com/NousResearch/hermes-agent/issues/66875)): Most recent session is ignored after visiting non‑chat tabs. A duplicate ([#70424](https://github.com/NousResearch/hermes-agent/issues/70424)) also filed.
- **P2 – Desktop SSH profile breakage** ([Issue #69551](https://github.com/NousResearch/hermes-agent/issues/69551)): Hardcoded path prevents non‑default profiles from working in remote SSH mode.
- **P2 – Shell hooks never fire** ([Issue #69825](https://github.com/NousResearch/hermes-agent/issues/69825)): `serve` command does not call `register_from_config`, so `hooks list` succeeds but hooks are never active.
- **P2 – Dashboard blind to per‑profile gateways** ([Issue #69143](https://github.com/NousResearch/hermes-agent/issues/69143)): Docker 0.19.0 regression; dashboard reports “stopped” while profile gateway runs. Fix PR [#70498](https://github.com/NousResearch/hermes-agent/pull/70498) open.
- **P2 – Gateway reconnect wedge** ([Issue #70344](https://github.com/NousResearch/hermes-agent/issues/70344)): After network‑loss fatal error, the gateway remains in “running” state but stops processing messages. Fix PR [#70502](https://github.com/NousResearch/hermes-agent/pull/70502) open.
- **P3 – Various desktop UI bugs**: PageDown layout break (#49978), zoom reset (#60693), markdown horizontal scroll (#70451), accidental composer drag (#70422), chat list no live refresh (#70346), boot loop when CLI runs simultaneously (#69925), etc. All P3 but affect user experience daily.

Several fix PRs are already in progress for the most critical bugs and regressions, indicating an active response from maintainers.

## 6. Feature Requests & Roadmap Signals

Notable feature requests from the last 24 hours:

- **[Issue #12238](https://github.com/NousResearch/hermes-agent/issues/12238) (backup & version control):** 19 👍, 6 comments. Likely to be considered for v0.20 as a core reliability feature.
- **[Issue #16833](https://github.com/NousResearch/hermes-agent/issues/16833) (project‑scoped memory pools):** 2 comments, 1 👍. Continues to be discussed but no maintainer response.
- **[Issue #69532](https://github.com/NousResearch/hermes-agent/issues/69532) (in‑session message sidebar):** Similar to DeepSeek UI. Low priority but receives user interest.
- **[PR #70509](https://github.com/NousResearch/hermes-agent/pull/70509) (wake word):** On‑device “Hey Hermes” for hands‑free activation. Salvaged from older PR — likely to be merged in the next minor release.
- **[PR #70500](https://github.com/NousResearch/hermes-agent/pull/70500) (cron external interpreter):** Allows Python cron jobs to use a user‑managed venv instead of the Hermes‑managed one (fixes [#69889](https://github.com/NousResearch/hermes-agent/issues/69889)). High utility for advanced users.
- **[PR #70499](https://github.com/NousResearch/hermes-agent/pull/70499) (Russian locale):** Full desktop UI translation. Indicates growing internationalisation efforts.

The roadmap is clearly shifting toward **voice interaction**, **cron job flexibility**, and **localisation**, alongside stability fixes for the 0.19 release.

## 7. User Feedback Summary

From the data, user sentiment is mixed:

- **Positive:** The community is actively contributing fixes and features (salvage PRs, translations, skills improvements). The “Hey Hermes” wake word and Russian translation are well received.
- **Negative / Frustrated:** Recurring complaints about **session switching not working** (#66875, #70424) and **profile‑aware path handling** (#69551, #52669) — users who rely on multiple profiles or SSH are blocked. The **gateway retry loop** (#69314) and **OAuth loop** (#70401) cause production outages. **Desktop UI quirks** (PageDown, zoom, markdown wrapping) degrade daily use.
- **Feature gaps:** Users want **backup mechanisms** (#12238) to prevent losing agent state, **project‑scoped memory** (#16833) for multi‑project workers, and **MOA progress indicators** (#59546, #59959) to demystify the “black box” of mixture‑of‑agents execution.

Overall, the 0.19.0 release introduced several regressions that the team is now actively patching, but the community remains engaged and helpful.

## 8. Backlog Watch

Issues and PRs that have been open for weeks or months and require maintainer attention:

| Item | Created | Age | Importance |
|------|---------|-----|------------|
| [Issue #12238](https://github.com/NousResearch/hermes-agent/issues/12238) – Backup & version control | 2026-04-18 | ~3 months | 19 👍, no maintainer response yet. |
| [Issue #16833](https://github.com/NousResearch/hermes-agent/issues/16833) – Project‑scoped memory | 2026-04-28 | ~3 months | 1 👍, no maintainer comment. |
| [Issue #52669](https://github.com/NousResearch/hermes-agent/issues/52669) – Hardcoded `~/.hermes` paths in system prompt | 2026-06-25 | ~1 month | Blocks non‑standard installations. |
| [Issue #55377](https://github.com/NousResearch/hermes-agent/issues/55377) – SMS adapter missing `re` import | 2026-06-30 | ~24 days | Simple fix but unfixed; crashes SMS send. |
| [Issue #45148](https://github.com/NousResearch/hermes-agent/issues/45148) – Analytics `?profile=custom` broken | 2026-06-12 | ~6 weeks | Affects monitoring dashboard. |

These long‑standing items risk eroding user trust if not addressed in the coming weeks. The backup and memory features, in particular, are heavily upvoted and would significantly improve the product’s reliability and versatility.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest – 2026-07-24

## Today's Overview

The PicoClaw project shows a steady maintenance cadence with 14 pull requests updated in the last 24 hours and two stale bugs closed. No new releases were published today, indicating a focus on dependency housekeeping and incremental improvements rather than major feature launches. Eight open PRs remain, including several dependency bumps and two meaningful features (a configurable model fallback chain and a refactored DeltaChat implementation). The two closed issues were both auto-closed as stale, suggesting the maintainer team is managing backlog hygiene but may be under-resourced for long-tail bug fixes. Overall project health appears moderate: active dependency updates keep the codebase current, but the lack of recent releases and the closure of stale bugs without resolution could indicate a slower feature velocity.

## Releases

No new releases were published today. The latest available release remains unchanged from previous periods.

## Project Progress

**Merged/Closed PRs** (6 closed in the last 24h, all previously stale):  
- `#3237` – Bump `golang.org/x/sync` from 0.21.0 to 0.22.0 (dependency)  
- `#3118` – Add remote Pico WebSocket mode to `picoclaw agent` (feature, merged)  
- `#3115` – Fix inline data URL media extraction for generic tool output (bug fix)  
- `#3236` – Bump `github.com/github/copilot-sdk/go` from 0.2.0 to 1.0.6 (dependency)  
- `#3238` – Bump `github.com/aws/aws-sdk-go-v2/config` from 1.32.25 to 1.32.29 (dependency)  
- `#3235` – Bump `github.com/pion/rtp` from 1.10.2 to 1.10.3 (dependency)  

**Notable feature advances**:  
- `#3222` (open) – **Refactor DeltaChat integration**: –200 LOC, drops legacy features, renames invite link APIs, adds full documentation section. This indicates a renewal of the DeltaChat messaging pipeline.  
- `#3200` (open) – **Configurable default fallback chain for models**: Allows users to set primary and fallback models via Web UI, persisted through backend. This is a user-facing feature that addresses a common pain point (model availability).  

**Bug fixes**:  
- `#3115` (merged) prevents session-history corruption caused by base64 strings in plain text tool output being treated as actual media attachments.

## Community Hot Topics

Two issues generated discussion (7 and 4 comments respectively), both now closed as stale:  
- **Issue #2796** – [BUG] History shows only last user message in multi‑message conversations ([Link](sipeed/picoclaw Issue #2796))  
  7 comments. User reports that when a conversation has multiple user messages, only the final one is visible in history. The underlying need is for accurate historical review, which conflicts with context compression performed for the LLM.  
- **Issue #3195** – [BUG] OpenAI GPT does not work on NanoKVM with default config ([Link](sipeed/picoclaw Issue #3195))  
  4 comments. User on NanoKVM 2.4.0 could not interact with PicoClaw after configuring GPT‑5.4. Likely a configuration or protocol mismatch issue.  

No active PRs have significant comment volume or reactions today.

## Bugs & Stability

Two bugs were updated today, both already closed as stale. No new bugs were filed.

| Issue | Severity | Status | Notes |
|-------|----------|--------|-------|
| #2796 – Historical message truncation | Medium | Closed (stale) | Affects users reviewing multi‑message conversations; no fix merged. |
| #3195 – OpenAI GPT failure on NanoKVM | High | Closed (stale) | Blocks NanoKVM users from using the default OpenAI model; likely config‑related. |

Neither bug has an associated fix PR, and their closure as stale means they may not be prioritized. The DeltaChat refactor (#3222) and the model fallback chain (#3200) are likely more active areas.

## Feature Requests & Roadmap Signals

The open PR `#3200` (configurable default fallback chain) is a clear signal that model reliability is a priority. Users want to define fallback models when the primary provider is unavailable. This feature is expected to land in the next release.  
Another open PR `#3222` (DeltaChat cleanup) suggests ongoing investment in decentralized messaging integration, possibly for edge‑AI or peer‑to‑peer use cases.  
The closed PR `#3118` (remote WebSocket mode) indicates a desire for remote agent operation, which could be part of a broader multi‑device or server‑based deployment story.

## User Feedback Summary

- **Pain points**:  
  - Multi‑message history truncation (Issue #2796) – users want to see all messages, not just the last.  
  - OpenAI setup friction on NanoKVM (Issue #3195) – default configuration is not plug‑and‑play.  
- **Satisfaction signals**:  
  - The merged fix for base64 media extraction (PR #3115) addresses a subtle corruption bug that may have frustrated users of generic tools.  
- **Use cases**:  
  - NanoKVM deployment (edge device).  
  - Multi‑turn conversational history review.  

No explicit satisfaction or dissatisfaction expressions in the data beyond bug reports.

## Backlog Watch

- **Issue #2796** (closed as stale) – Historical message truncation remains unfixed. If users encounter this frequently, it may resurface.  
- **Issue #3195** (closed as stale) – NanoKVM OpenAI configuration failure. No resolution exists, and the integration is marked as a “new feature” in NanoKVM 2.4.0, so a fix is important for that user base.  

Open PRs that have been idle for weeks:  
- `#3263` & `#3262` – GitHub Actions dependency bumps (stale, opened July 16).  
- `#3222` – DeltaChat refactor (last updated July 3, but recently commented).  

No PRs or issues appear to have been ignored for an excessive period; maintainers are actively reviewing and merging dependency PRs.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest – 2026-07-24

## 1. Today's Overview
NanoClaw maintained moderate development velocity with **10 pull requests updated** in the past 24 hours (4 merged/closed) and **1 active bug issue**. The project continues to focus on reliability fixes and adapter enhancements. No new releases were published. The community is actively working on container lifecycle hardening, messaging interoperability, and tooling improvements, reflecting steady maturation of the agent orchestration platform.

## 2. Releases
*None.*

No new versions were tagged or published in the last 24 hours.

## 3. Project Progress (Merged/Closed PRs)
Four pull requests were merged or closed, advancing messaging, UI, and security:

- **[[CLOSED] fix(telegram): enable thread support (#2892)](https://github.com/nanocoai/nanoclaw/pull/2892)** – Sets `supportsThreads: true` for the Telegram adapter, enabling proper tracking of forum/topic threads.  
- **[[CLOSED] feat(matrix): native persistent E2EE adapter via matrix-bot-sdk (#2844)](https://github.com/nanocoai/nanoclaw/pull/2844)** – Replaces the Chat SDK bridge with a native Matrix adapter using Rust-based crypto, delivering persistent end-to-end encryption.  
- **[[CLOSED] Keep typing indicator alive through a single long tool call (#3120)](https://github.com/nanocoai/nanoclaw/pull/3120)** – Prevents the typing indicator from expiring during extended tool executions, improving user experience.  
- **[[CLOSED] fix(onecli): block legacy Gmail API routes (#3115)](https://github.com/nanocoai/nanoclaw/pull/3115)** – Adds idempotent blocks for deprecated `www.googleapis.com` paths, preventing inadvertent access to legacy Gmail endpoints.

## 4. Community Hot Topics
The most active discussion centers on container lifecycle management:

- **[[#2466] Bug: Duplicate container spawn race on wakeContainer](https://github.com/nanocoai/nanoclaw/issues/2466)** (2 comments, opened May 14) – Reports that concurrent script and host sweep executions cause two containers to spawn processing the same brief. The issue remains open with low-priority hardening label.  
- **[[#3119] fix(container-runner): reconcile untracked orphan containers](https://github.com/nanocoai/nanoclaw/pull/3119)** (open) – Directly addresses duplicate per-group spawns by reconciling orphan containers. This PR is likely a response to the underlying need surfaced in #2466.  
- **[[#3122] fix(opencode): main compatibility, custom-endpoint transport, memory parity](https://github.com/nanocoai/nanoclaw/pull/3122)** (open, core-team) – A substantial fix targeting the OpenCode integration, indicating demand for robust third-party tool interoperability.  
- **[[#2971] Add ncc utility skill](https://github.com/nanocoai/nanoclaw/pull/2971)** (open) – Proposes a standalone CLI for host operational and health tasks, reflecting community interest in improved tooling.

## 5. Bugs & Stability
- **[[#2466] Duplicate container spawn race (Low, Hardening)](https://github.com/nanocoai/nanoclaw/issues/2466)** – Observed on a 5d continuously-running host: two containers spawn ~10s apart from concurrent `wakeContainer` calls. No crash or data loss reported.  
  - **Related fix PR:** [#3119](https://github.com/nanocoai/nanoclaw/pull/3119) reconciles untracked orphan containers to prevent duplicate per-group spawns. If merged, this should mitigate the race condition.  
- No new crashes, regressions, or high-severity bugs were reported in the last 24 hours.

## 6. Feature Requests & Roadmap Signals
No explicit feature requests were filed as issues today. However, merged and open PRs signal the following roadmap directions:

- **Messaging expansion** – Native Matrix E2EE (#2844) and Telegram thread support (#2892) indicate a push toward richer, secure messaging.  
- **Operational tooling** – The `ncc utility skill` (#2971) suggests a desire for a dedicated host CLI, which may appear in a future release.  
- **Interoperability** – OpenCode compatibility fixes (#3122) and Gmail API route blocking (#3115) point to ongoing work in third-party integration hygiene.

## 7. User Feedback Summary
Direct user feedback is limited in the available data. The primary pain point surfaced is the **container duplication race** described in issue #2466, which occurs in production-like environments with continuous host uptime. The detailed reproduction steps indicate real-world usage of the agent orchestration system. No explicit satisfaction or dissatisfaction comments were recorded.

## 8. Backlog Watch
The following open PRs/Issues may require maintainer attention due to age or lack of progress:

- **[[#2346] fix(formatter): treat unknown slash commands as normal chat](https://github.com/nanocoai/nanoclaw/pull/2346)** – Opened May 8, 2026. Awaiting review; addresses silent drops of unrecognized slash commands.  
- **[[#3090] fix(templates): prepend all top-level context Markdown](https://github.com/nanocoai/nanoclaw/pull/3090)** – Opened July 19, 2026. Requires core-team review.  
- **[[#3121] Make reaction delivery best-effort](https://github.com/nanocoai/nanoclaw/pull/3121)** – Opened July 23, 2026; fresh PR with no comments yet.  
- No issues have been unanswered for an unusually long period (the oldest open issue #2466 has recent activity and a fix PR in progress).

*Data source: GitHub – nanocoai/nanoclaw. Snapshot taken 2026-07-24.*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-07-24

## 1. Today's Overview

The project is in an intense pre‑launch phase, with **31 issues** and **50 pull requests** updated in the last 24 hours. **6 issues** and **19 PRs** were closed/merged, indicating rapid bug‑fixing and feature delivery. Activity is dominated by v1‑launch‑checklist items (Slack OAuth, Telegram setup, WebUI reconnection, CLI availability) and deep architectural refactoring (collapsing runtime assembly, DeployConfig completion, rebranding away from “Reborn”). No new releases were published today.

## 2. Releases

**None.** The latest release remains the `ironclaw 1.0.0-rc.1` from earlier; no release artifacts were created on 2026-07-24. The release automation PR [#5598](https://github.com/nearai/ironclaw/pull/5598) is still open.

## 3. Project Progress

Merged/closed PRs today advanced several key areas:

- **Extension Lifecycle & Channel Delivery** – [#6520](https://github.com/nearai/ironclaw/pull/6520) (closed) made extension readiness and channel delivery generic, collapsed install/activate into one step, and separated admin config from user membership.
- **Legacy Removal** – [#6594](https://github.com/nearai/ironclaw/pull/6594) (closed) retired legacy `tools-src/` and `channels-src/` source trees.
- **WebUI Fixes** – [#6592](https://github.com/nearai/ironclaw/pull/6592) (closed) fixed the “Disconnected” lockout caused by rate‑limit budget and navigation‑race SSE thrash; [#6608](https://github.com/nearai/ironclaw/pull/6608) (closed) fixed Telegram pairing prompts appearing as stream errors.
- **Automation & Delivery** – [#6607](https://github.com/nearai/ironclaw/pull/6607) (closed) resolved opaque conversation bindings for automated triggers; [#6604](https://github.com/nearai/ironclaw/pull/6604) (open) adds fallback to web‑app delivery when a channel is removed mid‑run.
- **Live‑QA Reconciliation** – [#6602](https://github.com/nearai/ironclaw/pull/6602), [#6603](https://github.com/nearai/ironclaw/pull/6603), [#6606](https://github.com/nearai/ironclaw/pull/6606) (all closed) repaired Slack admin bootstrap and Playwright shards after the #6520 merge.
- **Product Identity** – [#6556](https://github.com/nearai/ironclaw/pull/6556) (open) makes IronClaw the canonical product identity in CLI/WebUI while preserving machine‑compatible `reborn` contracts.
- **Configuration** – [#6559](https://github.com/nearai/ironclaw/pull/6559) (open) makes `IRONCLAW_*` environment variables canonical with fallback.

Closed issues today include [#6389](https://github.com/nearai/ironclaw/issues/6389) (collapsing runtime assembly) and [#6274](https://github.com/nearai/ironclaw/issues/6274) (finishing DeploymentConfig), signalling that the architecture simplification effort is advancing.

## 4. Community Hot Topics

The most active issues (by comment count):

- **#6389** – “Phase 4 (§5.11): collapse build_local_runtime + build_production_shaped into one build_runtime(cfg)” – **11 comments** – closed today. The discussion focused on unifying two runtime‑assembly paths; the underlying need is reducing duplication and improving maintainability.

- **#6274** – “Finish DeploymentConfig as the main composition config (§4.4/§5.6/§5.11)” – **5 comments** – closed. Tracks the incomplete `DeploymentConfig` implementation; community concern about it being “roadblocked” with todo comments.

- **#6524** – “Epic: Hermetic capability and journey testing platform” – **3 comments** – open. A broad epic for deterministic coverage of every capability and user journey. Signals the project’s move toward robust automated validation.

- **#6544** – “No UI or CLI to configure IRONCLAW_REBORN_SLACK_PERSONAL_OAUTH_REDIRECT_URI” – **2 comments** – closed. The issue highlighted a missing persistence path for Slack OAuth redirect URIs, critical for hosted agents.

Pull requests with ongoing review:

- **#5598** – chore: release (still open since July 3) – blocks publishing of new crate versions.
- **#6556** / **#6559** – product identity and configuration canonicalisation – both large, low‑risk PRs under active review.

## 5. Bugs & Stability

Ranked by severity (today’s reported or reopened bugs):

| Severity | Issue | Summary | Fix PR exists? |
|----------|-------|---------|----------------|
| **Critical** | [#6605](https://github.com/nearai/ironclaw/issues/6605) | Telegram inbound silently dead after extension reinstall | No |
| **High** | [#6581](https://github.com/nearai/ironclaw/issues/6581) | 429 Too Many Requests on staging (WebChat disconnect) | Yes – [#6592](https://github.com/nearai/ironclaw/pull/6592) (merged) |
| **High** | [#6590](https://github.com/nearai/ironclaw/issues/6590) | `serve` fails on Windows (workspace root overlap) | No |
| **High** | [#6541](https://github.com/nearai/ironclaw/issues/6541) | WebUI constantly reconnecting | Partially – #6592 addresses the backend side |
| **Medium** | [#6575](https://github.com/nearai/ironclaw/issues/6575) | `systemd` service error right after `ironclaw onboard` | No |
| **Medium** | [#6548](https://github.com/nearai/ironclaw/issues/6548) | Hosted staging preview‑auth wall blocks Telegram/Slack webhooks | No |
| **Low** | [#6609](https://github.com/nearai/ironclaw/pull/6609) | Test‑infrastructure crash from #6520 audit | Open fix PR (#6609) |

Two bugs on Windows and staging webhook delivery remain unaddressed. The 429 issue appears resolved on main via #6592.

## 6. Feature Requests & Roadmap Signals

Several new issues signal upcoming roadmap items:

- **Heartbeat System** – Three issues ([#6569](https://github.com/nearai/ironclaw/issues/6569), [#6570](https://github.com/nearai/ironclaw/issues/6570), [#6571](https://github.com/nearai/ironclaw/issues/6571)) define heartbeat scheduling, delivery, and contracts. Likely to land in the next minor release.
- **Rebranding from “Reborn”** – Issues [#6550](https://github.com/nearai/ironclaw/issues/6550), [#6551](https://github.com/nearai/ironclaw/issues/6551), [#6552](https://github.com/nearai/ironclaw/issues/6552) propose removing the codename from user‑facing UI/CLI, renaming internal crates, and introducing canonical `IRONCLAW_*` configuration. The companion PRs #6556 and #6559 are already open.
- **Skill Discovery & Routing** – Epic [#6565](https://github.com/nearai/ironclaw/issues/6565) targets reliable skill discovery, routing, and activation – a long‑standing user pain point.
- **Admin‑Managed Agents** – Epic [#6578](https://github.com/nearai/ironclaw/issues/6578) introduces non‑human subjects for product agents and automations.

These items suggest the project is moving from “Reborn” prototype to a stable, multi‑tenant product.

## 7. User Feedback Summary

Real user pain points captured today:

- **Telegram setup is broken/incomplete** – Users report that removing and reinstalling the Telegram extension makes inbound messages silently die ([#6605](https://github.com/nearai/ironclaw/issues/6605)). Also, there are no instructions on how to set up Telegram locally or on `agent.near.ai` ([#6522](https://github.com/nearai/ironclaw/issues/6522)).
- **Slack OAuth configuration cannot be persisted** – Redirect URI must be set via UI/CLI, but the setting is not saved ([#6544](https://github.com/nearai/ironclaw/issues/6544)).
- **WebUI reconnection loop** – Users constantly see “Reconnecting” even when the agent works, causing confusion ([#6541](https://github.com/nearai/ironclaw/issues/6541)).
- **CLI missing on hosted VMs** – `ironclaw` is not available via SSH on staging ([#6521](https://github.com/nearai/ironclaw/issues/6521)).
- **Google OAuth config cannot be applied** in hosted deployments ([#6534](https://github.com/nearai/ironclaw/issues/6534)).
- **Windows unable to run `serve`** in local development profiles ([#6590](https://github.com/nearai/ironclaw/issues/6590)).
- **Success overall** – Several users on `WebChat` and Slack reported working sessions despite UI confusion.

Satisfaction is generally low for new users hitting these v1 blockers, but the rapid merge rate of fixes (especially #6592, #6607, #6606) indicates the team is responsive.

## 8. Backlog Watch

Long‑standing issues and PRs that require maintainer attention:

- **#4548** – “Bug: Chat completion request serializes duplicate top‑level `model` field when tools are included (DeepSeek 400)” – opened 2026-06-08, updated 2026-07-23, only 2 comments. This blocks DeepSeek integration and has been open for 46 days without a fix.
- **#5598** – “chore: release” – PR opened 2026-07-03, still open. Delays crate publication for `ironclaw_common` (breaking changes) and `ironclaw_skills` (breaking changes). Action needed from the release team.
- **#3997** – “feat(signing): register NEAR/WC providers + flip production to durable composition (attested‑signing PR13)” – opened 2026-05-24, force‑pushed on 2026-07-23 with a fresh port. A large feature with no recent review comments. May need dedicated reviewer bandwidth.
- **#6579** – “chore(deps): bump the everything‑else group with 30 updates” – opened 2026-07-23, still open. Dependency updates (async‑trait, thiserror, uuid, etc.) are pending, which may block other work if not merged soon.

None of these are commented by maintainers; proactive triage is encouraged.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest – 2026-07-24

## 1. Today's Overview

LobsterAI saw exceptionally high development activity, with **50 pull requests merged or closed** in the last 24 hours—all of which were already open and have now been resolved. No new releases were published. Meanwhile, **3 outstanding issues** remain open, all marked as stale (last updated 2026-07-23, but created in April 2026). The project appears healthy and focused on bug fixing and stabilization, with significant work on OpenClaw runtime patches, scheduled-task routing, cowork session performance, and Windows installer reliability.

## 2. Releases

*No new releases were published on this date.*

## 3. Project Progress

All 50 updated PRs were merged or closed. The following areas saw concentrated improvements:

- **OpenClaw Runtime Fixes** – Multiple backported patches to stabilize the `v2026.6.1` runtime, including: tool-loop termination ([#2331](https://github.com/netease-youdao/LobsterAI/pull/2331)), abort handling ([#2330](https://github.com/netease-youdao/LobsterAI/pull/2330)), DeepSeek prompt cache stability ([#2258](https://github.com/netease-youdao/LobsterAI/pull/2258)), fallback maxToken limits ([#2232](https://github.com/netease-youdao/LobsterAI/pull/2232)), and workspace/prompt separation ([#2260](https://github.com/netease-youdao/LobsterAI/pull/2260)). Also improved plugin approval routing ([#2217](https://github.com/netease-youdao/LobsterAI/pull/2217)) and user-turn cache stability ([#2219](https://github.com/netease-youdao/LobsterAI/pull/2219)).

- **Scheduled Tasks & IM Integration** – Fixed IM group task routing and WeCom/DingTalk ID casing ([#2306](https://github.com/netease-youdao/LobsterAI/pull/2306), [#2314](https://github.com/netease-youdao/LobsterAI/pull/2314)). Restored gateway-backed run history ([#2231](https://github.com/netease-youdao/LobsterAI/pull/2231)).

- **Cowork & Subagents** – Improved large session rendering and diagnostics export ([#2264](https://github.com/netease-youdao/LobsterAI/pull/2264)), subagent tool history sync ([#2299](https://github.com/netease-youdao/LobsterAI/pull/2299)), subagent panel timestamps ([#2261](https://github.com/netease-youdao/LobsterAI/pull/2261)), and agent display names ([#2305](https://github.com/netease-youdao/LobsterAI/pull/2305)).

- **Build & Platform** – Windows binary signing fix ([#2327](https://github.com/netease-youdao/LobsterAI/pull/2327)), self-heal for interrupted win-resources extraction ([#2326](https://github.com/netease-youdao/LobsterAI/pull/2326)), and serialized browser launch to prevent Chrome leaks ([#2328](https://github.com/netease-youdao/LobsterAI/pull/2328)). Also ES2020 compatibility for null-byte stripping ([#2309](https://github.com/netease-youdao/LobsterAI/pull/2309)).

- **Revert** – PR [#2340](https://github.com/netease-youdao/LobsterAI/pull/2340) reverted an earlier model-allowed fix, indicating a potential regression that needed rollback.

## 4. Community Hot Topics

- **Issue #1263** – [Duplicate scheduled tasks](https://github.com/netease-youdao/LobsterAI/issues/1263) always showing two identical entries with "API rate limit reached". Commenter notes only one session exists. This suggests a UI/state bug, possibly related to cron job registration. (1 comment, 0 👍)

- **Issue #1265** – [Per-agent IM bot and model binding](https://github.com/netease-youdao/LobsterAI/issues/1265) – a feature request to allow different agents to bind different IM bots and models. The user argues for team composition (orchestrator vs. PPT bot) and model specialization (reasoning vs. coding). (1 comment, 0 👍)

- **Issue #1273** – [WASM memory crash in sql.js](https://github.com/netease-youdao/LobsterAI/issues/1273) – under high-frequency writes (e.g., long Cowork sessions), `memory access out of bounds` errors cause irreversible app hangs and risk database corruption due to non-atomic `fs.writeFileSync`. (1 comment, 0 👍)

Community engagement on these issues remains low (single comments each), but they represent persistent pain points that have not been addressed in recent merges.

## 5. Bugs & Stability

*No new bugs were filed in the last 24 hours.* All three open issues are older (April 2026) and have been updated (likely due to activity in related PRs).  
- **High severity** – Issue #1273 (WASM memory crash & database corruption) is the most critical open bug. No fix PR is visible yet.  
- **Medium severity** – Issue #1263 (duplicate tasks with rate-limit errors) indicates a UI/state inconsistency under load.  
- **Low severity** – Issue #1265 is a feature request, not a bug.

The 50 merged PRs today addressed several stability issues: Windows installer hangs ([#2326](https://github.com/netease-youdao/LobsterAI/pull/2326)), Chrome process leaks ([#2328](https://github.com/netease-youdao/LobsterAI/pull/2328)), and OpenClaw loop/abort handling ([#2331](https://github.com/netease-youdao/LobsterAI/pull/2331), [#2330](https://github.com/netease-youdao/LobsterAI/pull/2330)). These indicate ongoing efforts to harden the application.

## 6. Feature Requests & Roadmap Signals

- **Per-Agent IM binding** – Issue #1265 explicitly requests multiple agents with separate IM bots and models. This aligns with the recent multi-agent cowork focus (PRs on subagent history, display names). It is likely to be considered for a future release given the team's interest in agent orchestration.

- **Diagnostics export** – PR [#2264](https://github.com/netease-youdao/LobsterAI/pull/2264) added a "Diagnostics package" export. This suggests the team is improving debuggability and user support, possibly in response to issues like #1273.

- **DeepSeek prompt cache stability** – PR [#2258](https://github.com/netease-youdao/LobsterAI/pull/2258) targets provider-specific caching, indicating ongoing optimization for third-party LLM integrations.

Predictions: The next version (likely `v2026.7.x`) may include the OpenClaw runtime patches, scheduled-task improvements, and the diagnostics export as standard features.

## 7. User Feedback Summary

- **Pain points**:  
  - Duplicate scheduled tasks and API rate-limit confusion (Issue #1263)  
  - WASM database corruption causing app crashes (Issue #1273) – a serious reliability concern  
  - Lack of per-agent IM bot/model configuration (Issue #1265) – limits team workflows

- **Use cases**:  
  - Long Cowork sessions with many tool calls (Issue #1273)  
  - Multi-agent teams for specialized tasks (Issue #1265)  
  - Scheduled posting to WeCom/DingTalk groups (PR #2306, #2314)

- **Satisfaction**: The large number of bug-fix PRs suggests the team is responsive, but the three unresolved stale issues indicate some user concerns remain unaddressed for months. No explicit positive feedback appears in the data.

## 8. Backlog Watch

The following issues have been open for over 3 months with no maintainer response or fix:

- **Issue #1263** – [Duplicate scheduled tasks](https://github.com/netease-youdao/LobsterAI/issues/1263) (created 2026-04-02, last updated 2026-07-23) – stale, no assigned labels, no PR.  
- **Issue #1265** – [Per-agent IM bot/model binding](https://github.com/netease-youdao/LobsterAI/issues/1265) (created 2026-04-02) – feature request, no activity from maintainer.  
- **Issue #1273** – [WASM memory crash & database corruption](https://github.com/netease-youdao/LobsterAI/issues/1273) (created 2026-04-02) – high severity, no fix in progress visible. This issue should be prioritized given the risk of data loss.

*Note: All three issues were updated on 2026-07-23, likely due to automated staleness checks or related PR activity, not maintainer responses.*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-07-24

---

## 1. Today’s Overview

Moltis saw moderate activity in the last 24 hours: **2 issues updated** (1 open, 1 closed), **5 pull requests merged/closed**, and **2 new releases** (20260723.03 and 20260723.02). The project remains in active development with a focus on Slack security hardening, web UI polish, and deployment-oriented features like configurable context commands. One open bug (Podman compatibility) persists without a fix, but several recent merges address user-reported problems and infrastructure gaps. Overall, the project is healthy with steady improvement in both stability and feature scope.

---

## 2. Releases

Two releases were cut on 2026-07-23:

- **`20260723.03`** – likely includes the latest batch of PR merges (e.g., Slack allowlist/OTP fixes, context command, and dependency updates).
- **`20260723.02`** – either a complementary patch or an earlier build from the same day.

Detailed changelogs are not provided in the data; users are encouraged to **upgrade to the latest release** to receive all outstanding fixes. No breaking changes or migration notes were indicated.

---

## 3. Project Progress

All five PRs updated in the last 24 hours were merged or closed. Key accomplishments:

- **#1124 – Add context command support for chat turns**  
  *Author: gptme-thomas*  
  Introduces an optional `chat.context_command` that runs before each chat turn, appending stdout to the prompt. Allows deployments to inject dynamic runtime context without manual pasting.  
  [PR #1124](https://github.com/moltis-org/moltis/pull/1124)

- **#1161 – Bump astro from 7.0.9 to 7.1.3 in `/docs`**  
  *Author: dependabot[bot]*  
  Routine dependency update for the documentation site.  
  [PR #1161](https://github.com/moltis-org/moltis/pull/1161)

- **#1162 – Show dates for older sessions in web UI**  
  *Author: shixi-li*  
  Fixes the session list to display localized “yesterday”, weekday labels, or full dates for sessions older than today. Resolves the UX issue reported in #1108.  
  [PR #1162](https://github.com/moltis-org/moltis/pull/1162)

- **#1164 – Allow operator-approved Slack API base hosts**  
  *Author: penso*  
  Moves Slack API base URL validation into the channels crate, adds `MOLTIS_SLACK_API_BASE_URL_ALLOWLIST` for internal proxies, and documents the allowlist. Enhances deployment safety.  
  [PR #1164](https://github.com/moltis-org/moltis/pull/1164)

- **#1163 – Challenge unknown Slack DMs with OTP self-approval**  
  *Author: penso*  
  Fixes empty allowlist bypasses and introduces OTP-based self-approval for non-allowlisted DM users. Also fixes similar gaps in Microsoft Teams and Matrix.  
  [PR #1163](https://github.com/moltis-org/moltis/pull/1163)

---

## 4. Community Hot Topics

The only open issue with recent activity is:

- **#1095 – [Bug]: Podman is not working via Moltis**  
  *Author: RokkuCode*  
  *Updated: 2026-07-23 | 1 comment*  
  The user reports Podman compatibility problems. The issue has been open since June 3 and remains unresolved. No external reactions yet, but it represents a concrete deployment blocker for Podman users.  
  [Issue #1095](https://github.com/moltis-org/moltis/issues/1095)

All five recent PRs had no comments or reactions, suggesting the community is small or that most discussion happens elsewhere. The lack of engagement on #1095 may indicate that Podman support is not a widespread pain point, but the single reporter’s stack trace warrants attention.

---

## 5. Bugs & Stability

**Open bugs (ranked by severity):**

| Severity | Issue | Summary | Fix status |
|----------|-------|---------|------------|
| Medium | [#1095](https://github.com/moltis-org/moltis/issues/1095) | Podman not working | No fix PR yet |
| Low | [#1108](https://github.com/moltis-org/moltis/issues/1108) (closed) | Session list shows times but not dates | ✅ Fixed in #1162 |

*Security/Latent bugs:*  
The two Slack fixes (#1164, #1163) closed potential allowlist bypasses. While not reported as bugs per se, they strengthen the platform’s security posture. No regressions were introduced.

---

## 6. Feature Requests & Roadmap Signals

The following features emerged from recent PRs and could shape the next minor release:

- **Configurable chat context command** (#1124) – Enables automated injection of runtime context. This is a clean way to support dynamic environments (e.g., CI pipelines, cloud shells) without expanding the core API.
- **Operator-controlled Slack API allowlist** (#1164) – Suggests growing enterprise adoption and demand for controlled proxy setups.
- **OTP self-approval for non-allowlisted Slack DMs** (#1163) – Balances security and usability; likely to be extended to other channels in future releases.

*Prediction for next version:* The context command feature (#1124) is a strong candidate for documentation and default configuration in the next stable release. Slack proxy support (#1164) may also be promoted to a first-class deployment guide.

---

## 7. User Feedback Summary

- **Pain point:** Podman incompatibility (#1095) is the most concrete user complaint. The reporter invested effort in a preflight checklist but received no maintainer response yet.
- **Satisfaction:** The closed issue #1108 about session dates was quickly addressed in #1162 (merged within one day of the fix PR). This shows responsive development for UI usability issues.
- **Use cases:** Merged PRs highlight two primary user segments:  
  1. *Enterprise/team deployments* needing Slack security controls (allowlist, OTP, proxy).  
  2. *Automation-heavy users* wanting automated context injection via the new context command.

Overall satisfaction appears neutral with a slight positive bias due to rapid bug fixes, but the Podman issue may be a silent frustration for container-native workflows.

---

## 8. Backlog Watch

The following item has been open for an extended period with little maintainer interaction:

- **#1095 – Podman not working**  
  *Opened: 2026-06-03 | Last update: 2026-07-23 | No assignee*  
  Despite being updated by the author, there is no comment from maintainers. This 51-day-old bug blocks a specific runtime environment. Maintainers should consider acknowledging the issue, requesting additional logs, or marking for triage.  
  [Issue #1095](https://github.com/moltis-org/moltis/issues/1095)

No other open issues or PRs have languished beyond a week. The project’s triage cadence appears healthy for most items, but #1095 is the exception that could erode trust if left unaddressed.

---

*Digest generated from GitHub data on 2026-07-24.*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-07-24

## 1. Today's Overview

CoPaw saw very high activity in the past 24 hours, with **28 issues** and **50 pull requests** updated. The project released **v2.0.1-beta.2** (a beta patch), while the development pace remains intense — 21 PRs were merged or closed, and 10 issues were resolved. The community is actively reporting bugs and suggesting features, especially around stability regressions introduced in v2.0. Several critical performance and correctness bugs are being addressed in parallel, indicating a focused push toward hardening the codebase. Overall, the project is in a **fast-iteration stabilisation phase**.

## 2. Releases

**v2.0.1-beta.2** — [Release page](https://github.com/agentscope-ai/QwenPaw/releases/tag/v2.0.1-beta.2)

Changes (from the release notes):
- `feat(ci)`: Unified release orchestrator gating Web on desktop build.
- `fix(runtime)`: Rotate text message on new reasoning block.

No breaking changes or migration notes were included in the provided snippet. The release appears to be a maintenance beta addressing CI and runtime message handling. Users are advised to test this version, especially if they experienced tool‑call or memory issues in v2.0.0.post3/post4.

## 3. Project Progress

**Merged/closed PRs today (21 total)** – key advancements:

| PR | Description |
|----|-------------|
| [#6395](https://github.com/agentscope-ai/QwenPaw/pull/6395) | **Fix(tools):** Coerce LLM‑stringified `spawn_subagent` batch/list args to native arrays, preventing `Input validation failed` errors. |
| [#6351](https://github.com/agentscope-ai/QwenPaw/pull/6351) | **Fix(memory):** Guide failed memory edits – agents now reload file and use `write_file` instead of retrying the same replacement. |
| [#6368](https://github.com/agentscope-ai/QwenPaw/pull/6368) | **Fix(governance):** Honor `audit_level=none` to skip SQLite inserts for non‑audited events. |
| [#6268](https://github.com/agentscope-ai/QwenPaw/issues/6268) | **Feat(providers):** Add **AIOnly** as a built‑in model provider (190+ models). |
| [#6404](https://github.com/agentscope-ai/QwenPaw/pull/6404) | **Chore:** Bump version to v2.0.1. |
| [#6416](https://github.com/agentscope-ai/QwenPaw/pull/6416) | **Chore:** Update release date for v2.0.1. |

Other closed items include test infrastructure and dependency updates.

## 4. Community Hot Topics

The following issues attracted the most discussion (by comment count):

- **[#6307 — Performance: ~2s overhead per simple reply in v2.0](https://github.com/agentscope-ai/QwenPaw/issues/6307)** (6 comments)  
  **Need:** Users are experiencing a fixed ~2‑second latency on every query, independent of model inference time, caused by architectural changes in the request pipeline. This is a **critical performance regression** compared to v1.x. No fix PR exists yet.

- **[#6363 — Tool call arguments polluted with markdown fences / XML tags](https://github.com/agentscope-ai/QwenPaw/issues/6363)** (3 comments)  
  **Need:** When using models like GLM‑5‑Turbo or DeepSeek‑V3, tool_call JSON is wrapped in markdown code fences, causing `JSONDecodeError` and broken tool execution. Workarounds exist but a robust parser fix is needed.

- **[#2999 — Repeated MCP client registration leads to task cancellation](https://github.com/agentscope-ai/QwenPaw/issues/2999)** (2 comments, last updated today)  
  **Need:** Every chat request reconnects MCP servers, causing `CancelledError` when servers are slow. A long‑standing issue (April 2026) still open — maintainers should prioritise a caching/reuse mechanism.

- **[#6407 — ReAct Agent context mixes tool_result into assistant role](https://github.com/agentscope-ai/QwenPaw/issues/6407)** (2 comments)  
  **Need:** Context corruption where `tool` role messages are merged into a single `assistant` block, causing API 400 errors. This breaks conversation history restoration.

## 5. Bugs & Stability

| Severity | Bug | Status | Fix PR? |
|----------|-----|--------|---------|
| **Critical** | [#6307: 2s fixed overhead per reply](https://github.com/agentscope-ai/QwenPaw/issues/6307) – Performance regression in v2.0 request pipeline. | Open | None yet |
| **Critical** | [#6363: Tool call arguments broken by markdown fences](https://github.com/agentscope-ai/QwenPaw/issues/6363) – Affects GLM‑5, DeepSeek‑V3. | Closed? (marked CLOSED) | Not linked, but related PR [#6409](https://github.com/agentscope-ai/QwenPaw/pull/6409) improves parser robustness. |
| **Critical** | [#6407: ReAct context corruption](https://github.com/agentscope-ai/QwenPaw/issues/6407) – tool_result mixed into assistant role. | Open | None yet |
| **High** | [#6376: Loop feature crashes main process](https://github.com/agentscope-ai/QwenPaw/issues/6376) – User reports process death. | Closed | Comment suggests fix may be in v2.0.1‑beta.2. |
| **Medium** | [#6406: Windows PowerShell multiline command collapse](https://github.com/agentscope-ai/QwenPaw/issues/6406) – Newlines replaced with spaces, breaking scripts. | Open | PR [#6412](https://github.com/agentscope-ai/QwenPaw/pull/6412) addresses exactly this. |
| **Medium** | [#6405: MCP tool not found after upgrade](https://github.com/agentscope-ai/QwenPaw/issues/6405) – Tool name prefix `[mcp-key]__` causes lookup failures. | Open | None yet |
| **Low** | [#6239: Windows PATH separator dropped](https://github.com/agentscope-ai/QwenPaw/issues/6239) – Child processes lose npm globals. | Open | None yet |

Several fixes are already in review or merged (e.g., #6395, #6412, #6409), indicating active bug‑squashing.

## 6. Feature Requests & Roadmap Signals

Top user‑requested features:

- **Docker hot‑update** ([#6344](https://github.com/agentscope-ai/QwenPaw/issues/6344)) – Persistent runtime environment across container updates; inspired by AstrBot’s implementation.
- **Agent‑level token statistics** ([#6392](https://github.com/agentscope-ai/QwenPaw/issues/6392)) – Detailed per‑conversation and per‑agent token counts.
- **Undo / re‑edit previous round** ([#6408](https://github.com/agentscope-ai/QwenPaw/issues/6408)) – `/undo` command to remove specific conversation turns.
- **Specific task API** ([#6377](https://github.com/agentscope-ai/QwenPaw/issues/6377)) – HTTP‑callable micro‑agents with restricted I/O.
- **UI simplification** ([#6413](https://github.com/agentscope-ai/QwenPaw/issues/6413)) – Replace confusing “full mode” with a gear icon.
- **Custom provider name editing** ([#6414](https://github.com/agentscope-ai/QwenPaw/issues/6414)).
- **RobotFramework syntax highlighting** ([#6403](https://github.com/agentscope-ai/QwenPaw/issues/6403)).

**Likely to land in next minor version:**  
- **Reranker support** for ReMe memory (backend [#6398](https://github.com/agentscope-ai/QwenPaw/pull/6398) + UI [#6399](https://github.com/agentscope-ai/QwenPaw/pull/6399)) — both PRs open, close to merge.  
- **Safe model discovery** infrastructure ([#6302](https://github.com/agentscope-ai/QwenPaw/pull/6302)) — foundational PR under review.  
- **Scroll staged compaction** ([#6323](https://github.com/agentscope-ai/QwenPaw/pull/6323)) – redesigning long‑term context management.

## 7. User Feedback Summary

**Pain points:**
- **Performance regression:** Several users report v2.0 is noticeably slower than v1.x (#6307).
- **Docker update pain:** Each update destroys the container’s writable layer, requiring re‑installation of all tools (#6344).
- **HDD update slow:** ~1.5 hours on NAS / mechanical drives (#6380).
- **Tool reliability:** Frequent `Tool not found` errors (#6405) and repeated tool calls (#6386).
- **Context corruption:** ReAct agent history breaks after restore (#6407).
- **Windows bugs:** PATH handling (#6239) and multiline PowerShell (#6406) frustrate Windows power users.

**Satisfaction signals:**
- Community is actively contributing new features (AIOnly provider, reranker, QwenPaw Creator app).
- Many bugs are being acknowledged and fixed quickly.
- The scroll compaction PR (#6323) and safe model discovery (#6302) show planned architectural improvements that address long‑standing needs.

## 8. Backlog Watch

| Issue / PR | Age | Status | Reason for Watch |
|------------|-----|--------|------------------|
| [#2999 – Repeated MCP client registration](https://github.com/agentscope-ai/QwenPaw/issues/2999) | ~110 days (Apr 6 → Jul 24) | **Open** | Long‑standing bug with clear reproduction; no maintainer response or assignment. |
| [#5187 – Windows desktop GUI automation](https://github.com/agentscope-ai/QwenPaw/pull/5187) | ~40 days (Jun 14 → Jul 24) | **Open** | Large feature PR with no recent updates; may need review prioritisation. |
| [#6239 – Windows PATH semicolon dropped](https://github.com/agentscope-ai/QwenPaw/issues/6239) | ~6 days (Jul 18 → Jul 24) | **Open** | Affects npm environment on Windows; no linked PR yet. |
| [#6377 – Specific task API](https://github.com/agentscope-ai/QwenPaw/issues/6377) | ~1 day (Jul 23) | **Open** | Suggestive of a roadmap gap (micro‑service agents); could be merged with existing plugin system. |

Maintainers are encouraged to triage #2999 and #6239 to prevent community frustration, and to provide guidance on #5187 to unblock the contributor.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw Project Digest — 2026-07-24

## Today’s Overview
In the past 24 hours, ZeptoClaw saw moderate activity concentrated on two **P1-critical** safety issues. Two new issues were filed—one documenting CI regressions from Clippy and cargo-deny, the other detailing a vulnerability in subprocess environment handling and process-tree reaping on timeout. A corresponding pull request (#645) is open to address the subprocess security flaw. No releases or merged PRs occurred today, indicating the team is actively reviewing and preparing to resolve these high-severity items before pushing a new version. Overall, the project is in a defensive, hardening phase.

## Releases
*None in the reporting period.*

## Project Progress
- **No PRs were merged or closed today.** All progress remains in review:
  - **PR #645** (open) – *fix(runtime): scrub subprocess secrets and reap timed-out process trees*  
    This PR directly addresses Issue #644 by sanitizing the environment passed to subprocesses and ensuring that timed-out process trees are terminated and reaped. If merged, it will resolve a critical vulnerability where provider credentials could leak to model-authored commands.

## Community Hot Topics
No issues or PRs received comments, reactions, or discussions in the last 24 hours. The two open issues are the primary focus:
- **Issue #646** – *[chore, area:safety, P1-critical] chore(ci): restore Clippy and cargo-deny checks on current toolchain*  
  [🔗 Issue #646](https://github.com/qhkm/zeptoclaw/issues/646)  
  *Underlying need:* The repository’s CI baseline is broken after PR #645 exposed new Clippy warnings and vulnerable dependency versions. The team needs to suppress or fix these to keep CI green, which is a prerequisite for merging any further changes.
- **Issue #644** – *[bug, area:safety, P1-critical] bug(safety): scrub subprocess environments and terminate process trees on timeout*  
  [🔗 Issue #644](https://github.com/qhkm/zeptoclaw/issues/644)  
  *Underlying need:* A clear security gap in the runtime that could leak secrets to model-run commands. The community (or internal team) demands a more secure default subprocess execution model.

## Bugs & Stability
Two P1-critical bugs were reported today, both in the **safety** area:

| ID | Title | Severity | Fix PR |
|----|-------|----------|--------|
| [#644](https://github.com/qhkm/zeptoclaw/issues/644) | Scrub subprocess environments and terminate process trees on timeout | **P1-critical** | PR #645 (open) |
| [#646](https://github.com/qhkm/zeptoclaw/issues/646) | Restore Clippy and cargo-deny checks on current toolchain | **P1-critical** | None yet |

- **#644** is the more architecturally significant bug: it involves both credential leakage and zombie process accumulation. PR #645 proposes a fix.
- **#646** is a CI blocker: baseline warnings and dependency vulnerabilities (quick-xml 0.39.2, lopdf 0.40.0) must be resolved before the subprocess fix can be merged.

## Feature Requests & Roadmap Signals
No explicit feature requests were filed in the last 24 hours. However, the pattern of issues suggests the next release will likely focus on:
- **Runtime security hardening** – env scrubbing, process tree management, possibly containerized runner improvements.
- **CI infrastructure reliability** – updating lint rules and dependency audits to keep the project buildable on the latest Rust toolchain.

These are not new features but essential maintenance that will precede any user-facing enhancements.

## User Feedback Summary
No user comments or reactions were captured in this snapshot. The absence of discussion may indicate that the project’s user base is small or that these internal CI/safety items have not yet reached a broad audience.

## Backlog Watch
No long-unanswered issues or PRs were identified in the last 24 hours. The two open items are both recent (created July 23) and are already receiving maintainer attention via PR #645. No items appear stale or neglected.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-07-24

## 1. Today's Overview

The ZeroClaw project remains highly active with **50 issues and 50 pull requests updated in the last 24 hours**. No new releases were published today, but the codebase is seeing intense development across security, agent interoperability, channel reliability, and performance. Five issues were closed, indicating steady triage, while the bulk of activity is on open items — including several critical (S0/S1) bugs that have attracted immediate fix PRs. The community is most engaged on the A2A protocol interoperability tracker and a new cryptographic key source abstraction. Overall, the project is in a phase of hardening for the upcoming v0.9.0 milestone while also expanding core features.

---

## 2. Releases

**No new releases today.** The latest available release remains v0.8.3 (noted in issue #9290). No pre-release, beta, or RC tags were created.

---

## 3. Project Progress

**No pull requests were merged or closed today.** All 50 updated PRs remain open. However, several significant open PRs have advanced:

- **A2A Outbound Client (Phase 1)** — PR [#9324](https://github.com/zeroclaw-labs/zeroclaw/pull/9324) adds four `a2a_*` tools, a shared Serde wire model, and a default-closed `[a2a.client]` config block, implementing the first phase of the A2A interoperability tracker.
- **Hailo-Ollama Native Support** — PR [#9109](https://github.com/zeroclaw-labs/zeroclaw/pull/9109) introduces a dedicated `HailoOllamaModelProvider` for running Ollama on Hailo hardware accelerators.
- **Streamed User Turn Fix** — PR [#9325](https://github.com/zeroclaw-labs/zeroclaw/pull/9325) addresses the bug where small local models misinterpret streamed user turns as log payloads.
- **Config Bugfixes** — Multiple fix PRs landed or were updated today targeting config-specific issues: nested `set_prop` value masking (#9310), map keys containing dots (#9297), and `context_compression.enabled` default correction (#9299).
- **Telegram Multi-Message Streaming** — PR [#8561](https://github.com/zeroclaw-labs/zeroclaw/pull/8561) continues its long-running effort to add paced multi-message delivery to the Telegram channel.

Other notable open PRs include PowerShell native shell support (#9182), idle-bound SSE streaming (#8838), and authenticated HTTP fan-in for SOP (#9203).

---

## 4. Community Hot Topics

The most active discussions (by comment count and reactions) reveal strong community interest in security and multi-agent functionality.

- **[Issue #3566 – A2A Protocol Interoperability Tracker](https://github.com/zeroclaw-labs/zeroclaw/issues/3566)** (9 comments, 7 👍) – This large enhancement tracker proposes native Agent2Agent protocol support so ZeroClaw can communicate with external agents over HTTP. It has been open since March 2026 and is a key roadmap item. The PR #9324 (outbound client) is a direct response.

- **[Issue #9127 – RFC: Abstract a KeySource Trait](https://github.com/zeroclaw-labs/zeroclaw/issues/9127)** (7 comments) – A well-received RFC to classify master-key material by source/deployment form, addressing security concerns around secret management. It was opened only six days ago and already has detailed discussion.

- **[Issue #2767 – Multi-Agent Routing](https://github.com/zeroclaw-labs/zeroclaw/issues/2767)** (7 comments, 9 👍) – Closed yesterday, this feature request for isolated agents in separate workspaces within one Gateway has high community demand. Its closure (likely via a tracker or merge) signals progress.

- **[Issue #4721 – Logging to stderr](https://github.com/zeroclaw-labs/zeroclaw/issues/4721)** (5 comments) – Closed today, this bug fix addresses a fundamental usability issue where CLI command output was polluted with log lines. The fix is now merged.

- **[Issue #4832 – Disable LeakDetector Token Redaction](https://github.com/zeroclaw-labs/zeroclaw/issues/4832)** (5 comments, closed) – Resolved user request to allow disabling false-positive high-entropy token redaction.

---

## 5. Bugs & Stability

Today's data reveals several high-severity bugs. We rank by reported severity:

### S0 – Data Loss / Security Risk

- **[#9188 Telegram update offset advanced before successful delivery](https://github.com/zeroclaw-labs/zeroclaw/issues/9188)** – The long-poll update offset is incremented *before* voice/attachment parsing and enqueue, risking permanent message loss if processing fails. **No fix PR yet.**
- **[#9187 WeChat sync cursor persisted before enqueue](https://github.com/zeroclaw-labs/zeroclaw/issues/9187)** – Similar pattern: cursor saved before messages are processed, so a crash loses inbound messages. **No fix PR yet.**

### S1 – Workflow Blocked

- **[#9207 web_fetch returns garbage for compressed responses](https://github.com/zeroclaw-labs/zeroclaw/issues/9207)** – S1 severity because agents cannot parse gzip/deflate/brotli responses. **Fix PR not yet identified** in today's list.
- **[#9204 Landlock sandbox restricts ZeroClaw daemon itself](https://github.com/zeroclaw-labs/zeroclaw/issues/9204)** – Landlock locking causes SQLite memory access failures and shell tool restriction. **No fix PR yet.**
- **[#9191 Cron jobs have no wall-clock timeout](https://github.com/zeroclaw-labs/zeroclaw/issues/9191)** – Agent cron jobs can run indefinitely, and in-flight locks are only cleared at process start. **No fix PR yet.**
- **[#9192 shared_budget TOCTOU can wrap AtomicUsize](https://github.com/zeroclaw-labs/zeroclaw/issues/9192)** – Concurrent subagent iterations can overdraw the allowed budget, leading to panic. Fix PR [#9201](https://github.com/zeroclaw-labs/zeroclaw/pull/9201) is open and proposes atomic `fetch_update`.
- **[#9236 Fresh Telegram aliases dropped after config reload](https://github.com/zeroclaw-labs/zeroclaw/issues/9236)** – Cannot persist new Telegram aliases. **No fix PR yet.**
- **[#9284 config flush can overwrite concurrent writes](https://github.com/zeroclaw-labs/zeroclaw/issues/9284)** – Flushing config under read lock without atomicity. **No fix PR yet.**
- **[#9290 Windows desktop installer fails with missing TaskDialogIndirect](https://github.com/zeroclaw-labs/zeroclaw/issues/9290)** – v0.8.3 installer cannot launch on Windows. Fix PR [#9291](https://github.com/zeroclaw-labs/zeroclaw/pull/9291) addresses the CLI detection part; installer fix may still be needed.

### S2 – Degraded Behavior

- **[#8999 ZeroCode streamed user turns look like log payloads to small local models](https://github.com/zeroclaw-labs/zeroclaw/issues/8999)** – Addressed by PR [#9325](https://github.com/zeroclaw-labs/zeroclaw/pull/9325) (opened today).
- **[#9092 ZeroCode keystrokes lag in long sessions](https://github.com/zeroclaw-labs/zeroclaw/issues/9092)** – Full history rerender causes performance degradation. **No fix PR yet.**
- **[#9119 ZeroCode session picker selects wrong row after scrolling](https://github.com/zeroclaw-labs/zeroclaw/issues/9119)** – UI widget misbehavior. **No fix PR yet.**

### S3 – Minor Issues

- **[#9285 nested set_prop masks invalid values](https://github.com/zeroclaw-labs/zeroclaw/issues/9285)** – Fixed by PR [#9310](https://github.com/zeroclaw-labs/zeroclaw/pull/9310).
- **[#9202 zeroclaw desktop cannot detect installed AppImage](https://github.com/zeroclaw-labs/zeroclaw/issues/9202)** – Fixed by PR [#9291](https://github.com/zeroclaw-labs/zeroclaw/pull/9291).

---

## 6. Feature Requests & Roadmap Signals

The following user-requested features are gaining traction and are likely candidates for the next minor release (v0.9.0):

- **A2A Protocol Interoperability (#3566)** – The strongest signal. Phase 1 (outbound client) is already in PR #9324. Inbound and full interoperability may follow in v0.9.0.
- **TOTP for Cross-Channel Approval (#3767)** – Requires TOTP enforcement for critical tools across all channels. High risk, p1 priority.
- **External Command Hooks for Messages (#3696)** – Configurable shell hooks before/after agent message processing for memory integration and logging.
- **Workspace File & Memory Change History (#3672)** – Git-style history for agent self-modifications. Important for agent debugging and rollback.
- **Eval Results Dashboard (#9228)** – Trend tracking for agent evaluation suites. Deferred from #7065 but actively discussed.
- **KeySource Trait RFC (#9127)** – A security-focused refactor that could land in v0.9.0 given its priority p2 and high risk.

The **v0.9.0 Tracker (#7432)** explicitly lists auth, security hardening, A2A, multi-agent boundaries, and breaking changes, confirming these are the current roadmap focus.

---

## 7. User Feedback Summary

Real user pain points extracted from issues and PRs:

- **Portability and integration pain**: Users want ZeroClaw to communicate with other agent systems (A2A), which is the most upvoted feature.
- **Configuration friction**: Several bugs (nested `set_prop` masking, map keys with dots, Telegram alias persistence, config flush races) show that the configuration system, while powerful, has sharp edges.
- **Channel reliability**: WeChat and Telegram cursor-advancement bugs (S0) highlight user frustration with missed messages. The Discord typing indicator stuck on daemon reload (#9198) is a minor but persistent annoyance.
- **ZeroCode TUI performance**: Long-session lag and wrong row selection degrade the chat experience for heavy users.
- **Sandbox impact**: The Landlock sandbox causing SQLite failures is a significant blocker for Linux users who rely on the security feature.
- **Windows desktop issues**: The missing `TaskDialogIndirect` DLL in the installer prevents some Windows users from even launching the app.
- **False positive redaction**: Users appreciate the LeakDetector but need an opt-out for legitimate high-entropy content (hash filenames).
- **Logging to stdout**: Fixed today (#4721), but the pain was real – users couldn't pipe CLI output cleanly.

---

## 8. Backlog Watch

The following important issues have been open for extended periods or lack recent maintainer responses:

- **[#3566 – A2A Protocol Tracker](https://github.com/zeroclaw-labs/zeroclaw/issues/3566)** – Open since March 15 (4+ months). While PRs are now appearing, the issue itself has no official milestone or priority update. Maintainer should mark as `v0.9.0` or assign.
- **[#3672 – Workspace File Change History](https://github.com/zeroclaw-labs/zeroclaw/issues/3672)** – Open since March 16 (4+ months). No PR activity, and it's a core feature for agent self-modification safety. Should be prioritized.
- **[#3696 – Message Lifecycle Hooks](https://github.com/zeroclaw-labs/zeroclaw/issues/3696)** – Open since March 16 (4+ months). No comments since April. Could be a valuable addition for integration.
- **[#4760 – Schema-Validated Tool Calls for Memory Consolidation](https://github.com/zeroclaw-labs/zeroclaw/issues/4760)** – Open since March 26 (4 months). No PR. Prompt-based JSON parsing is brittle; this would improve reliability.
- **[#8999 – ZeroCode Streamed User Turns Bug](https://github.com/zeroclaw-labs/zeroclaw/issues/8999)** – Open since July 11 (13 days). PR #9325 was opened today and should be reviewed promptly as it addresses a frustrating UX issue.

Additionally, PRs with `needs-author-action` label (e.g., #9109, #8966, #8561, #8438, #9182, #8838) may require maintainer feedback to unblock. The **CI npm audit failure (#9235)** with three high/critical vulnerabilities in web dependencies also needs attention to avoid supply-chain risk.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/boom7sss/agents-radar).*