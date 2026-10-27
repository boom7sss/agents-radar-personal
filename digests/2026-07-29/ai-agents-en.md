# OpenClaw Ecosystem Digest 2026-07-29

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-07-29 03:17 UTC

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

# OpenClaw Project Digest — 2026-07-29

## 1. Today's Overview

OpenClaw continues at a very high activity velocity, with **500 issues and 500 pull requests updated in the last 24 hours**. 302 issues were closed and 314 PRs were merged or closed, indicating a strong focus on resolution. One new beta release (**v2026.7.2-beta.5**) landed, centered on state safety and crash recovery. The project is actively addressing critical memory leaks, security vulnerabilities, and regression bugs while also advancing new features like real-time translation and dynamic model discovery. Community engagement remains robust, with the most discussed topics revolving around cross-platform support, memory security, and gateway reliability.

---

## 2. Releases

**v2026.7.2-beta.5** was released today ([changelog](https://github.com/openclaw/openclaw/releases/tag/v2026.7.2-beta.5)). Highlights include:

- **Quarantine store** to protect persisted data when the primary database is damaged.
- **Crash-recoverable SQLite snapshots** and crash-durable filesystem publication.
- **Schema-upgrade data-loss rejection** and rollback-writer snapshot recovery.
- No breaking changes or migration notes were explicitly mentioned in the provided data, but users upgrading from earlier betas should verify session and state integrity after the update.

---

## 3. Project Progress

Today **314 PRs were merged or closed**, reflecting broad progress across the codebase. Notable merged/closed PRs include:

- **Security fixes** – [#77492](https://github.com/openclaw/openclaw/pull/77492) (pre-auth CPU DoS guard); [#115510](https://github.com/openclaw/openclaw/pull/115510) (bound Ed25519 verify inputs); [#115509](https://github.com/openclaw/openclaw/pull/115509) (v2 audit patches for ReDoS, data integrity, SQL, event bus).
- **Session & state reliability** – [#96547](https://github.com/openclaw/openclaw/pull/96547) (fix cross-project session collision); [#115495](https://github.com/openclaw/openclaw/pull/115495) (migrate retired state before connecting); [#115494](https://github.com/openclaw/openclaw/pull/115494) (recover interrupted device identity import on macOS).
- **UI & channel fixes** – [#115097](https://github.com/openclaw/openclaw/pull/115097) (gate admin actions behind operator.admin scope); [#93059](https://github.com/openclaw/openclaw/pull/93059) (Telegram rich parse fallback text loss); [#115486](https://github.com/openclaw/openclaw/pull/115486) (rerender unavailable attachments).
- **New features** – [#111437](https://github.com/openclaw/openclaw/pull/111437) (realtime live translation for Talk); [#115438](https://github.com/openclaw/openclaw/pull/115438) (isolate curated memory entries by project); [#109283](https://github.com/openclaw/openclaw/pull/109283) (configurable auto-recall selectivity in memory-lancedb).
- **Bug fixes** – [#108687](https://github.com/openclaw/openclaw/pull/108687) (prevent crash from circular references in provider error handlers); [#108029](https://github.com/openclaw/openclaw/pull/108029) (recover GitHub Copilot sessions with invalid tool call ids); [#109946](https://github.com/openclaw/openclaw/pull/109946) (make debug CA generation recoverable).

Many closed issues also reflect fixes shipped, including: #94228 (Anthropic thinking block signature), #96857 (tool text placeholder), #108075 (provider schema rejection), #113434 (Codex session reset regression), #108182 (Control UI navigation regression), #78562 (tool-loop context overflows), and #77012 (webchat transcript overwrite).

---

## 4. Community Hot Topics

The most active discussions (by comment count) reveal key community concerns:

- **[#75 – Linux/Windows Clawdbot Apps](https://github.com/openclaw/openclaw/issues/75)** (115 comments, 👍80)  
  Request to bring desktop apps to Linux and Windows, matching macOS/iOS/Android feature sets. High demand but no maintainer action yet.
- **[#7707 – Memory Trust Tagging by Source](https://github.com/openclaw/openclaw/issues/7707)** (23 comments)  
  Feature to tag memory entries by trust level to prevent poisoning attacks from untrusted content. Strong security angle.
- **[#91588 – Critical: Gateway Memory Leak](https://github.com/openclaw/openclaw/issues/91588)** (20 comments, P0)  
  RSS grows from 350MB to 15.5GB over days, causing OOM crashes. One of the most urgent stability issues.
- **[#94228 – Native Anthropic path bricks long tool-use threads](https://github.com/openclaw/openclaw/issues/94228)** (15 comments, closed)  
  Replaying `thinking` blocks causes permanent 400 errors. Recently closed, likely fixed.
- **[#96857 – Tool text outputs degrade to “(see attached image)” placeholders](https://github.com/openclaw/openclaw/issues/96857)** (15 comments, closed)  
  Agents become blind to tool output. Also fixed.
- **[#115326 – Crash-loop breaker suppresses Discord/WhatsApp permanently](https://github.com/openclaw/openclaw/issues/115326)** (13 comments, open)  
  Gateways start but crash-loop breaker permanently disables these channels, with documented recovery failing.

Underlying needs: **cross-platform desktop support**, **memory security hardening**, **urgent memory leak fix**, **reliable channel delivery**.

---

## 5. Bugs & Stability

The project is facing a range of stability issues, with several at critical severity:

| Issue | Severity | Impact | Status |
|-------|----------|--------|--------|
| [#91588 – Gateway memory leak (RSS 350MB→15.5GB over days)](https://github.com/openclaw/openclaw/issues/91588) | **P0** | OOM crashes, service restarts | Open, no fix PR linked |
| [#114911 – `apply_patch` destroys existing files](https://github.com/openclaw/openclaw/pull/114911) | **P0** | Data loss | Open PR (ready for maintainer) |
| [#115326 – Crash-loop breaker disables Discord/WhatsApp permanently](https://github.com/openclaw/openclaw/issues/115326) | P1 | Channel unrecoverable | Open, needs repro/review |
| [#115001 – Hybrid memory search returns spurious 1.0 similarity scores](https://github.com/openclaw/openclaw/issues/115001) | P2 | False positive retrieval | Open |  
| [#114137 – Visible channel turns dispatch with no queued replies](https://github.com/openclaw/openclaw/issues/114137) | P1 | Message loss | Open |  
| [#102268 – Silent empty tool results in long-running Sonnet 5 sessions](https://github.com/openclaw/openclaw/issues/102268) | P1 | Undetected failures | Open |  
| [#102755 – Build won't start on Windows/WSL](https://github.com/openclaw/openclaw/issues/102755) | P1 | Cannot install | Open, stale |  
| [#111979 – Runtime tool calls execute after cancel](https://github.com/openclaw/openclaw/issues/111979) | P1 | Unintended side effects | Closed |  

**Regressions** reported today: #115326, #115001, #114137, #108580 (cron tool schema breaks llama.cpp), #112696 (Control UI avatar/session list), #111519 (Telegram DM replies broken). Several fix PRs exist (#108580 has a linked PR, #112696 is closed).

**Stability summary**: Memory leak, crash-loop issues, data integrity bugs, and provider-specific schema incompatibilities remain top concerns.

---

## 6. Feature Requests & Roadmap Signals

Key user-requested features that may appear in upcoming versions:

- **Cross-platform desktop apps** ([#75](https://github.com/openclaw/openclaw/issues/75)) – Linux/Windows Clawdbot. Very high demand, but no timeline.
- **Memory trust tagging** ([#7707](https://github.com/openclaw/openclaw/issues/7707)) – Mitigates memory poisoning. Likely to be prioritized given security focus.
- **Filesystem sandboxing config** ([#7722](https://github.com/openclaw/openclaw/issues/7722)) – Allowlist/denylist for tool file access.
- **Denylist for exec-approvals** ([#6615](https://github.com/openclaw/openclaw/issues/6615)) – “Allow all except X” policies.
- **Dynamic model discovery** ([#10687](https://github.com/openclaw/openclaw/issues/10687)) – Fetch models live from OpenRouter etc. A PR exists ([#115305](https://github.com/openclaw/openclaw/pull/115305)) adding a code mode model acceptance matrix, suggesting active work.
- **Mid-stream message injection** ([#10960](https://github.com/openclaw/openclaw/issues/10960)) – “Soft steer” for real-time control.
- **Azure Foundry GPT Realtime Talk** ([#87325](https://github.com/openclaw/openclaw/issues/87325)) – Enterprise requirement.
- **Image viewing in webchat** ([#113251](https://github.com/openclaw/openclaw/issues/113251)) – UX improvement.

**Prediction for next major release**: Memory trust tagging, filesystem sandboxing, and dynamic model discovery are likely candidates given security trends and existing development effort. The realtime translation feature ([#111437](https://github.com/openclaw/openclaw/pull/111437)) just merged and should be in the next stable.

---

## 7. User Feedback Summary

**Positive sentiment**: Users appreciate the rapid bug fixes and new features. Multiple comments thank maintainers for their work (e.g., #73537: “OpenClaw has genuinely become part of our daily workflow”). The project is seen as reliable enough for production use (family & business assistants, Telegram, Home Assistant).

**Pain points**:
- **Memory leaks and OOM crashes** (#91588) are the most critical, causing daily frustration for long-running gateways.
- **Regression-prone releases** – multiple users reported that features work in one version and break in the next (#108075, #108182, #108473, #111519).
- **Missing Linux/Windows desktop apps** (#75) – a long-standing gap that limits adoption.
- **Session reliability issues** – transcripts lost, tool loops, stuck recovery (#77012, #98790, #113434).
- **Incomplete docs recovery** – crash-loop breaker recovery documented but fails (#115326).
- **Security concerns** – memory poisoning, exec-approval granularity, filesystem sandboxing (multiple issues).

**Use cases**: Multi-agent setups, Telegram DMs, cron jobs, Control UI webchat, GitHub Copilot integration, local model backends (llama.cpp). The community is active across many platforms.

---

## 8. Backlog Watch

Several important issues and PRs have been open for extended periods with maintainer attention needed:

- **[#75 – Linux/Windows Clawdbot Apps](https://github.com/openclaw/openclaw/issues/75)** – Open since Jan 1, 115 comments, 80 👍. No maintainer response on progress.
- **[#7707 – Memory Trust Tagging](https://github.com/openclaw/openclaw/issues/7707)** – Open since Feb 3, needs product decision and security review.
- **[#6615 – Denylist for exec-approvals](https://github.com/openclaw/openclaw/issues/6615)** – Open since Feb 1, 8 👍, linked PR open but stale.
- **[#7722 – Filesystem Sandboxing Config](https://github.com/openclaw/openclaw/issues/7722)** – Open since Feb 3, needs maintainer review.
- **[#10687 – Dynamic Model Discovery](https://github.com/openclaw/openclaw/issues/10687)** – Open since Feb 6, 3 👍, needs live repro and security review.
- **[#11665 – Webhook session reuse fails](https://github.com/openclaw/openclaw/issues/11665)** – Open since Feb 8, linked PR open, needs product decision.
- **[#73537 – Production-readiness stability label](https://github.com/openclaw/openclaw/issues/73537)** – Open since Apr 28, 2 👍, community request for clearer release stability indicators.
- **[#74378 – CLI processes remain alive on Windows](https://github.com/openclaw/openclaw/issues/74378)** – Open since Apr 29, regression, needs maintainer review.
- **[#90098 – Large attachment handling for Control UI/gateway](https://github.com/openclaw/openclaw/issues/90098)** – Open since Jun 4, 2 👍, linked PR open, needs review.
- **[#98435 – MCP loopback auto-reconnect](https://github.com/openclaw/openclaw/issues/98435)** – Open since Jul 1, needs product decision and repro.
- **[#115249 – Fix visible session transcripts (PR)](https://github.com/openclaw/openclaw/pull/115249)** – Open since yesterday, needs proof, touches session-state.
- **[#115286 – config rejects agents.defaults.mediaLocalRoots](https://github.com/openclaw/openclaw/pull/115286)** – Open since yesterday, needs proof, compatibility risk.

Many of these have the `clawsweeper:needs-maintainer-review` or `clawsweeper:needs-product-decision` labels, indicating the maintainer team is the bottleneck for several high-value features.

---

## Cross-Ecosystem Comparison

# Cross-Project Ecosystem Comparison Report
**Date**: 2026-07-29

---

## 1. Ecosystem Overview

The personal AI assistant/agent open-source landscape continues to mature rapidly, with multiple projects demonstrating intense development velocity focused on reliability, security hardening, and production-grade channel integrations. The ecosystem shows clear stratification: a few dominant core projects (OpenClaw, Hermes Agent, ZeroClaw) carry the bulk of community activity and feature development, while smaller, more specialized projects (PicoClaw, Moltis, LobsterAI) iterate on specific niches like mobile-first design, enterprise deployment, or lightweight runtimes. Common pain points—memory leaks, configuration fragility, session state reliability—appear across nearly every project, suggesting these are frontier challenges for the entire category rather than individual project gaps. The emergence of RFC-driven architecture changes (especially in ZeroClaw and IronClaw) signals the ecosystem is transitioning from rapid prototyping to more deliberate platform engineering.

---

## 2. Activity Comparison

| Project | Issues Updated (24h) | PRs Updated (24h) | PRs Merged/Closed | Release Published | Health Score |
|---------|----------------------|-------------------|-------------------|-------------------|--------------|
| **OpenClaw** | 500 | 500 | 314 | ✅ v2026.7.2-beta.5 | Very High |
| **Hermes Agent** | 50 | 50 | 6 | ❌ | High |
| **ZeroClaw** | 49 | 50 | 0 | ❌ | High |
| **CoPaw** | 12 | 50 | 17 | ❌ | High |
| **NanoBot** | 7 | 39 | 10 | ❌ | Moderate-High |
| **IronClaw** | 50 | 50 | 15 | ❌ | High |
| **PicoClaw** | 4 | 9 | 3 | ❌ | Moderate |
| **NanoClaw** | 1 | 10 | 4 | ❌ | Moderate |
| **Moltis** | 1 | 8 | 2 | ❌ | Moderate |
| **LobsterAI** | 3 | 5 | 5 | ❌ | Low-Moderate |
| **ZeptoClaw** | 0 | 2 | 1 | ❌ | Low (maintenance) |
| **NullClaw** | 0 | 0 | 0 | ❌ | Inactive |
| **TinyClaw** | 0 | 0 | 0 | ❌ | Inactive |

**Notes**: 
- Health Score factors activity volume, resolution velocity, bug-to-fix ratio, and community engagement.
- OpenClaw's "500" figure is a ceiling from the digest; actual may be slightly lower but clearly dominates.
- ZeroClaw's 0 merged PRs despite high activity indicates a day focused on review, not delivery.

---

## 3. OpenClaw's Position

**Advantages vs. Peers:**
- **Scale**: 500 issues/PRs updated daily dwarfs every other project (next closest: ~50). This reflects a community and contributor base perhaps 10x larger than any competitor.
- **Release velocity**: Beta releases every few days with clear changelogs; constant feature delivery (real-time translation, memory isolation, crash recovery).
- **Resolution discipline**: 302 issues closed and 314 PRs merged/closed in a single day—a level of throughput no other project approaches.
- **Security posture**: Dedicated v2 audit patches, pre-auth DoS guards, Ed25519 input bounds—more systematic than peers' ad-hoc fixes.

**Technical Approach Differences:**
- OpenClaw is a **general-purpose core reference** with maximal feature surface: gateway, webchat, Control UI, multi-model (Claude, Gemini, Copilot, local), real-time Talk, memory-lancedb, MCP support.
- Most peers are forks/specializations: NanoBot (WebUI focus), PicoClaw (lightweight, mobile), CoPaw (desktop automation), Moltis (ACP interop). OpenClaw is the "batteries-included" reference implementation.
- Stronger **state safety** infrastructure: quarantine store, crash-recoverable SQLite snapshots, schema-upgrade rejection—features absent in smaller projects.

**Community Size Comparison:**
- OpenClaw's GitHub issues generate 80+ thumbs-up on feature requests (#75), 115+ comments—engagement that eclipses entire projects' total activity.
- It attracts contributions from the broadest user base: families/business assistants, Telegram, Home Automation, multi-agent setups.
- The "100% error recoverability" epic in IronClaw and the RFC-driven architecture in ZeroClaw suggest those projects are trying to solve problems OpenClaw has already addressed (or is actively addressing).

---

## 4. Shared Technical Focus Areas

Several requirements appear across **three or more projects**, indicating ecosystem-wide consensus on importance:

| Focus Area | Projects Affected | Specific Needs |
|------------|------------------|----------------|
| **Memory/State Reliability** | OpenClaw, NanoBot, Hermes Agent, PicoClaw, CoPaw, ZeroClaw | Memory leaks (OpenClaw #91588 – 350MB→15.5GB), session state persistence, crash recovery, archive media loss |
| **Security Hardening** | OpenClaw, NanoBot, Hermes Agent, PicoClaw, IronClaw, ZeroClaw, Moltis | Memory poisoning/memory trust tagging, exec-approval granularity, filesystem sandboxing, credential isolation, CA cert consistency |
| **Cross-Platform Desktop Support** | OpenClaw, Hermes Agent, CoPaw | Linux/Windows apps (OpenClaw #75: 115 comments, 80👍), Windows installer crashes, macOS Apple Silicon timeout |
| **Channel Reliability** | OpenClaw, NanoBot, Hermes Agent, PicoClaw, ZeroClaw | Discord message routing, WhatsApp audio send, Telegram thinking leak, Signal crashloop, Slack setup failures |
| **Configuration/Installer Fragility** | OpenClaw, CoPaw, Hermes Agent, LobsterAI, ZeroClaw | `agent.json` corruption (CoPaw), NSIS infinite loops, Windows WSL build failures, `.env` port precedence |
| **Multi-Provider Model Support** | OpenClaw, NanoClaw, CoPaw, ZeroClaw | Fallback chains, dynamic model discovery, per-session model overrides, Quota exhaustion handling |
| **Agent Collaboration** | NanoBot, ZeroClaw, CoPaw | Sub-agent isolation, multi-agent shared state, execution budgets, cancellation safety |

**Emerging shared requirement**: **Configurable safety defaults** – false positive content filters (Hermes Agent, IronClaw), missing tools causing deadlocks (PicoClaw), prompt budget management. Multiple projects are rethinking how safety gates interact with legitimate workflows.

---

## 5. Differentiation Analysis

| Dimension | OpenClaw | NanoBot | Hermes Agent | ZeroClaw | CoPaw | Moltis |
|-----------|----------|---------|--------------|----------|-------|--------|
| **Primary Focus** | General-purpose core reference | WebUI polis & agent reliability | Platform compatibility (Docker/Windows/macOS) | Rust runtime, plugin architecture | Desktop automation & Qwen integration | ACP interop, enterprise observability |
| **Target User** | End-users & developers building multi-channel agents | Web-first users, chat enthusiasts | Multi-platform enterprise deployment | Developers extending via WASM plugins | Qwen/DeepSeek users, desktop automation | Standards bodies, ops teams |
| **Architecture** | Monolithic, Python-heavy, broad feature surface | Lightweight, React SPA + Python backend | Python, strong Docker & desktop client | Rust/core, WASM plugins, minimalist | Qwen-specific, desktop GUI tools | ACP-native, stdio server mode |
| **Key Weakness** | Regression-prone, memory leaks at scale | Smaller community, broken WhatsApp audio | Slow maintainer decisions, Kanban gaps | 0 PRs merged today – delivery bottleneck | Windows installer bugs, config corruption | Small community, low engagement |
| **Unique Strength** | Largest community, fastest release cycle | Fast bug-fix turnaround, CI improvements | Platform support breadth (Windows, Docker, Termux) | Security RFC rigor, plugin extensibility | New contributor friendliness, context compression | Instrumentation infrastructure, clean backlog |

**Key takeaway**: OpenClaw is the ecosystem's "Linux kernel" – broadest adoption, most contributors, but carries technical debt from rapid growth. ZeroClaw is the "Rust rewrite" – promising better safety/performance but slower to ship. CoPaw and Moltis carve specific niches (desktop, standards) where they can out-innovate general-purpose projects.

---

## 6. Community Momentum & Maturity

**Tier 1 – Very High Activity & Rapid Iteration**:
- **OpenClaw** – Unquestionably dominant. ~500 daily updates, frequent beta releases, massive community engagement. However, regression-prone releases and memory leaks suggest it is still maturing toward production-grade stability.
- **Hermes Agent** – Strong contributor base, high issue/PR volume, active fix pipeline. Platform reliability gaps (Discord routing, Windows hangs) are being addressed but slowly.
- **ZeroClaw** – Intense RFC-driven design phase. Zero PRs merged today but high-quality architecture discussion. Poised for a major release (0.9.0?) once the backlog clears.

**Tier 2 – Moderate-High Activity, Stable Maintenance**:
- **NanoBot** – Steady bug-fix cadence, WebUI-focused improvements, responsive to regressions. Not growing explosively but reliable.
- **CoPaw** – Very active (50 PRs updated) but chaotic: multiple first-time contributors, Windows bugs, context compression feature merged. High energy but needs stabilization.
- **IronClaw** – High activity with clear epics (error-recoverability, hermetic testing). Epics suggest a project approaching a major milestone/release.

**Tier 3 – Moderate Activity, Niche Scope**:
- **PicoClaw** – Lower volume but focused: mobile-first, security migration (vodozemac), targeted fixes. Healthy for its size.
- **NanoClaw** – Similar to PicoClaw: modest activity, steady contributor throughput, pluggable backend focus.
- **Moltis** – Clean backlog, responsive to bugs, building instrumented foundation. Growing slowly.

**Tier 4 – Low/Inactive**:
- **LobsterAI** – Windows installer fixes, isolated side-chat feature. Minimal community engagement.
- **ZeptoClaw** – Maintenance-only (Dependabot bumps). No community or feature work.
- **NullClaw, TinyClaw** – No activity. Effectively dormant.

---

## 7. Trend Signals

The following industry trends emerge from cross-project community feedback and development priorities:

**1. Multi-Provider Reliability Is the New Table Stakes**
Multiple projects (OpenClaw, NanoClaw, CoPaw, ZeroClaw) are investing in quota fallback chains, dynamic model discovery, and per-session model overrides. Users expect seamless failover between Claude, Gemini, Copilot, local models—not just a single provider. Projects that lack this (LobsterAI, Moltis) risk irrelevance.

**2. Memory/RAG Is Evolving from Vector Search to Trust & Provenance**
Memory poisoning is a cross-project concern (OpenClaw #7707, NanoBot memory store bugs, Hermes Agent session search). The next frontier is trust tagging, provenance tracking, and configurable retrieval selectivity—moving beyond simple vector similarity to semantic safety.

**3. Security Is Shifting from "Prevent Attacks" to "Survive Configurations"**
User-reported bugs increasingly show edge cases where safe configurations break: empty credentials causing crashloops (ZeroClaw #6724), `description` containing "API key" blocking skills (IronClaw #6814), false-positive content redaction (ZeroClaw #9486). The ecosystem needs graceful degradation, not binary allow/deny.

**4. Desktop & Mobile Are Unresolved Gaps**
OpenClaw's most-upvoted issue (#75, 80👍) is Linux/Windows desktop support. Hermes Agent's Windows CONNECTING hang (#49920) and CoPaw's NSIS installer infinite loop (#6534) show even basic desktop experience is fragile. Mobile is worse: PicoClaw's Android launch bug (#3182) is 34 days stale. This is the ecosystem's biggest adoption ceiling.

**5. Enterprise Features Are Emerging from User Demand**
IronClaw's extension governance API, Moltis's instrumentation infrastructure, ZeroClaw's multi-tenancy RFCs, and OpenClaw's tenant-managed extensions all point to enterprise readiness. Multi-agent isolation, audit logging, and release gates are becoming requirements, not nice-to-haves.

**6. Cost Optimization Is Implicit but Urgent**
NanoBot's "5k tokens for 'hello'" (#1332) and OpenClaw's tool-loop context overflows (#78562) highlight that developers are burning tokens inefficiently. Context compression (CoPaw merged today), prompt budget management, and progressive tool disclosure (IronClaw #6810) are direct responses. Expect more work on system prompt optimization and token accounting.

**7. WASM/Plugin Ecosystems Are the Next Architecture Wave**
ZeroClaw's RFC to move channels/tools to WASM plugins (#8850) and NanoBot's extension platform PR (#5098) signal a shift from compile-time feature flags to runtime extensibility. This mirrors the VS Code extension model and could unlock third-party contribution without core modification.

---

**Bottom Line for Technical Decision-Makers**:
- **If you need maximum community support and fastest feature delivery**: **OpenClaw** is the clear choice, but budget for regression handling and memory leak workarounds.
- **If stability and long-term maintainability matter most**: **ZeroClaw** (Rust, plugin architecture) or **Moltis** (clean backlog, ACP standards) may offer lower total cost of ownership despite smaller communities.
- **If you're targeting desktop automation or Qwen ecosystem**: **CoPaw** is the most active and contributor-friendly option.
- **If cross-platform enterprise deployment is critical**: **Hermes Agent** has the broadest platform support, though its decision-making bottlenecks may frustrate.
- **If you need mobile-first or lightweight**: **PicoClaw** is the only project actively addressing mobile, but its Android support is broken.

The ecosystem is rapidly converging on a shared technical agenda—memory safety, multi-provider reliability, and plugin extensibility—but no project has solved all three simultaneously.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest – 2026-07-29

## 1. Today's Overview

The project saw **high activity** over the past 24 hours: 7 issues were updated (5 open, 2 closed) and 39 pull requests were updated (19 open, 20 merged/closed). No new releases were published. The development velocity is strong, with a clear focus on **WebUI polish, agent reliability, and provider stability**. A significant batch of regression fixes and feature work landed, many from repeat contributors `chengyongru`, `santhreal`, and `yu-xin-c`. The community is actively reporting bugs and proposing major enhancements, indicating both product maturity and growing user engagement.

---

## 2. Releases

**None** – The latest release remains unchanged. No release notes or migration guides are available for this digest period.

---

## 3. Project Progress

**10 pull requests were merged or closed today**, advancing several areas:

| PR | Description | Impact |
|----|-------------|--------|
| [#5113](HKUDS/nanobot PR #5113) | **fix(webui): stabilize repeated model preset rows** | Fixes React key collision when fallback presets appear multiple times in a chain. |
| [#5119](HKUDS/nanobot PR #5119) | **fix(webui): soften model selector emphasis** | UI refinement: reduces label weight and fixes opacity token. |
| [#5132](HKUDS/nanobot PR #5132) | **docs: move README title above introduction** | Documentation-only structural fix. |
| [#5134](HKUDS/nanobot PR #5134) | **fix(agent): prevent gateway crash when stopping active tasks** | Resolves a crash caused by task cancellation after the tracking data structure changed from list to set. |
| [#5130](HKUDS/nanobot PR #5130) | **fix(webui): reconcile chats after browser resume** | Ensures thread state stays in sync after page visibility events or WebSocket reconnection. |
| [#5140](HKUDS/nanobot PR #5140) | **fix(webui): keep streaming tail visible** | Prevents the scroll view from lagging behind streaming content. |
| [#5142](HKUDS/nanobot PR #5142) | **fix(webui): open threads at latest message** | Restores proper scroll position for restored threads without visible jump. |
| [#5143](HKUDS/nanobot PR #5143) | **fix(webui): animate reasoning drawer transitions** | Synchronises drawer animation timing with the running drawer. |
| [#5144](HKUDS/nanobot PR #5144) | **fix(ci): scope PR path detection to head changes** | CI pipeline will now only run jobs affected by changes in the PR head, not the merge base. |
| [#5148](HKUDS/nanobot PR #5148) | **feat(config): add image-aware model presets** | Introduces `supportsImageInput` flag per model preset, with tri-state handling (`auto`, image-support, text-only). Migrates legacy defaults into named presets. |

These merges reflect intense effort on **WebUI robustness**, **agent crash fixes**, and **foundational config features** (image multiturn). The CI fix will also improve developer experience.

---

## 4. Community Hot Topics

**Issues with most comments / reactions:**

- **[#5 – uv install](HKUDS/nanobot Issue #5)** (closed, 7 comments, 👍3)  
  Request to document `uv` installation for faster setup. This popular request signals that users value **installation speed and stability**. Though closed, the maintainers may want to consider adding an `uv.lock` file or a dedicated `uv` guide.

- **[#5000 – Proposal: evolve subagent system toward multi-agent collaboration](HKUDS/nanobot Issue #5000)** (open, 5 comments, 👍0)  
  A detailed feature proposal to give subagents persistent identities and shared task state. The lack of thumbs-up suggests limited community validation so far, but the idea is ambitious and aligns with AI agent industry trends.

- **[#1332 – High token consumption on “hello”](HKUDS/nanobot Issue #1332)** (closed, 4 comments, 👍0)  
  A user reported that even a simple message cost 5k+ input tokens. This highlights a **latent cost concern** that may drive future efficiency improvements.

**Pull requests with notable activity** (recent creation, but comments not available):  
- [#5156](HKUDS/nanobot PR #5156) – fix(telegram): recover from silently stalled polling (new, likely to gain attention)  
- [#5116](HKUDS/nanobot PR #5116) – feat(webui): add skill marketplaces and management (large feature, ongoing review)  
- [#5098](HKUDS/nanobot PR #5098) – feat(extensions): add unified extension platform (long-running, major architecture change)

---

## 5. Bugs & Stability

**Today’s bug reports (open), ranked by severity:**

| Severity | Issue | Description | Fix PR exists? |
|----------|-------|-------------|----------------|
| **High** | [#5149](HKUDS/nanobot Issue #5149) | **No audio on WhatsApp** – bot receives but cannot send audio files. Functional blocker for WhatsApp users. | No fix PR yet. |
| **High** | [#5118](HKUDS/nanobot Issue #5118) | **Session consolidation drops uploaded media paths** – files stored only in `media[]` become unrecoverable after archive. Data loss scenario. | No fix PR yet. |
| **Medium** | [#5133](HKUDS/nanobot Issue #5133) | **`finish_reason='length'` with tool_calls misrouted** – empty content retry logic incorrectly fires instead of length recovery. Causes retry loops and wasted tokens. | No fix PR yet. |
| **Medium** | [#5138](HKUDS/nanobot Issue #5138) | **MCP SDK v2 migration needed** – stdio shutdown produces `cancel-scope teardown error` and stdout pollution. Annoying but not data-loss. | Tracked but no PR yet. |
| **Low** | [#5133](HKUDS/nanobot Issue #5133) | *(included above)* | |
| **Low** | [#5132](HKUDS/nanobot Issue #5132) | *(docs – not a bug)* | |

**Additional bug fixes submitted today (open PRs)** – these address regressions likely introduced by recent refactors:

| PR | Bug Fixed |
|----|-----------|
| [#5155](HKUDS/nanobot PR #5155) | `get_approved` crashes when pairing store JSON contains `null` for `approved` map. |
| [#5154](HKUDS/nanobot PR #5154) | Responses API parser crashes on primitive items in output lists (TypeError on `vars(item)`). |
| [#5153](HKUDS/nanobot PR #5153) | `MemoryStore._format_messages` crashes on non-string timestamps or missing `role` fields during archiving. |
| [#5152](HKUDS/nanobot PR #5152) | Subagent partial completion results cause confusion – missing completion metadata. |
| [#5151](HKUDS/nanobot PR #5151) | Idle session locks never released – memory leak fix via `WeakValueDictionary`. |
| [#5150](HKUDS/nanobot PR #5150) | Exec session buffered output unbounded – potential memory exhaustion; adds head/tail budget. |

The **watchlist of unfixed high-severity bugs** (#5149 and #5118) needs immediate maintainer attention. The other regressions have pending fixes.

---

## 6. Feature Requests & Roadmap Signals

**Most significant user-requested features this week:**

- **[#5000 – Multi-agent collaboration](HKUDS/nanobot Issue #5000)**: Proposes evolving subagents into persistent, reusable agents with shared state. This aligns with industry trends (e.g., AutoGen, CrewAI).  
- **[#5098 – Unified extension platform](HKUDS/nanobot PR #5098)**: A native Python extension boundary that fills the gap between skills, MCP, and Apps. This is a **major architectural feature** currently under review (PR has "conflict" label).  
- **[#5116 – Skill marketplaces](HKUDS/nanobot PR #5116)**: Adds a Discover view for third-party skill installation from `skills.sh` and SkillHub. Likely to ship in the next minor release.  
- **[#5 – uv install (closed)](HKUDS/nanobot Issue #5)**: While closed, the thumbs-up indicate strong demand for modern Python package management.  

**Predictions for next version**:  
- **Image-aware model presets** (#5148 merged today) will be part of the next release.  
- **Skill marketplaces** and **extension platform** are large features; one may make it if code review accelerates.  
- **Multi-agent collaboration** is likely further out (conceptual stage).

---

## 7. User Feedback Summary

Real pain points expressed in the last 24 hours:

1. **Token consumption is excessive** – Issue #1332 (now stale) shows a user burning >5k tokens for “hello”. Even closed, this indicates a need for **prompt compression** or **system prompt optimization**.
2. **WhatsApp audio not sending** – #5149 is a direct functional regression for WhatsApp users (likely a high-priority fix).
3. **Media files lost after session archive** – #5118 is a data-loss bug that undermines user trust.
4. **Installation speed** – #5’s thumbs-up show users want faster, more reliable setup via `uv`.

Overall sentiment appears **neutral to frustrated** among active bug reporters, but the high volume of PRs shows responsive engineering.

---

## 8. Backlog Watch

Issues and PRs that have been open for a while without maintainer response or closure:

- **[#5000 – Multi-agent collaboration proposal](HKUDS/nanobot Issue #5000)** (open 9 days) – No maintainer comment yet. While the idea is large, a brief acknowledgement would help set expectations.
- **[#1332 – High token consumption](HKUDS/nanobot Issue #1332)** – Closed as stale without resolution. The underlying problem may still affect users.
- **[#5118 – Session consolidation media loss](HKUDS/nanobot Issue #5118)** – Only 2 comments, but reported 2 days ago. No fix PR or triage label yet – needs prioritisation.
- **[#5138 – MCP SDK v2 migration](HKUDS/nanobot Issue #5138)** – No PR yet, but the teardown error is a known pain point for stdio users.

**No long-unanswered feature requests** beyond #5000 were found.

---

*Generated from GitHub data on 2026-07-29. All links reference `HKUDS/nanobot`.*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest – 2026-07-29

## Today’s Overview
Project activity remains high, with **50 issues and 50 pull requests updated in the last 24 hours**. No new releases were published. The issue tracker is entirely open (0 closed today), while **6 PRs were merged or closed**, indicating ongoing stabilization work. The majority of updates concern bug fixes, platform compatibility (Windows, Docker, macOS), and community feature requests. Maintainer engagement is visible through merged fixes and new fix-PRs targeting recently reported stability problems.

---

## Releases
None

---

## Project Progress
**6 PRs were merged or closed today** (from the 50 updated). The only closed item clearly identified in the top-20 list is:

- **PR #70767** ([link](https://github.com/NousResearch/hermes-agent/pull/70767)) – `fix(docker): detect stale docker_volumes on container reuse (#69575)`  
  *Merged.* Resolves a scope-mismatch where config changes to `docker_volumes` were ignored when reusing existing containers.

Other merged/closed PRs not shown in the top-20 remain unlisted but contribute to the count.

---

## Community Hot Topics

The following issues attracted the most comments and reactions today:

| Issue | Title | Comments | 👍 | Link |
|-------|-------|----------|---|------|
| #5472 | send_message tool cannot target current Discord session channel | 8 | 0 | [link](https://github.com/NousResearch/hermes-agent/issues/5472) |
| #42896 | Kanban review status exists but has no first-class request-review transition | 6 | 1 | [link](https://github.com/NousResearch/hermes-agent/issues/42896) |
| #49920 | Desktop hangs in CONNECTING after update on Windows | 5 | 0 | [link](https://github.com/NousResearch/hermes-agent/issues/49920) |
| #7135 | Hindsight local plugin on macOS Apple Silicon: daemon startup timeout | 5 | 1 | [link](https://github.com/NousResearch/hermes-agent/issues/7135) |
| #63815 | Copilot fallback providers not triggered when quota exhausted | 4 | 0 | [link](https://github.com/NousResearch/hermes-agent/issues/63815) |
| #22054 | PATH injection from venv shadows system Python 3.11 | 4 | 2 | [link](https://github.com/NousResearch/hermes-agent/issues/22054) |
| #66544 | Custom-provider metadata probes ignore provider-scoped CA settings | 4 | 0 | [link](https://github.com/NousResearch/hermes-agent/issues/66544) |
| #55446 | Kanban default_assignee config requires gateway restart | 4 | 0 | [link](https://github.com/NousResearch/hermes-agent/issues/55446) |
| #6507 | session_search drops child/continuation-session hits | 4 | 0 | [link](https://github.com/NousResearch/hermes-agent/issues/6507) |

**Analysis:**  
- **Platform reliability** dominates: Discord session routing, Windows desktop update failures, macOS memory plugin timeout, and Copilot fallback behaviour are blocking core workflows for users.  
- **Kanban and workflow gaps** (#42896, #55446) reflect growing demand for review-centric task management.  
- **Configuration fragility** (#66544, #22054) points to subtle environment and network settings that are not consistently respected across the stack.  
- **Session state and search** (#5472, #6507) remain a consistent pain point, especially in multi-turn or multi-channel contexts.

---

## Bugs & Stability

### Critical / High Severity (P2)

- **#5472** – [send_message tool cannot target current Discord session channel](https://github.com/NousResearch/hermes-agent/issues/5472)  
  Fixes message delivery breaking batch response workflows.
- **#49920** – [Desktop hangs in CONNECTING after update on Windows](https://github.com/NousResearch/hermes-agent/issues/49920)  
  Root cause: Dashboard build fails silently due to `NODE_ENV=production` stripping devDependencies.  
  *Related fix PR: [#73809](https://github.com/NousResearch/hermes-agent/pull/73809) (remove GIL-holding gateway prewarm from desktop lifespan)*
- **#63815** – [Copilot fallback providers not triggered on quota exhaustion](https://github.com/NousResearch/hermes-agent/issues/63815)  
  No fallback chain activation. *No dedicated fix PR yet.*
- **#22054** – [PATH injection from venv shadows system Python](https://github.com/NousResearch/hermes-agent/issues/22054)  
  Affects CLI commands outside Hermes. *Needs decision.*
- **#66544** – [Custom-provider CA settings ignored by metadata probes](https://github.com/NousResearch/hermes-agent/issues/66544)  
  `ssl_ca_cert` bypassed by `requests.get` in probe paths.
- **#13126** – [Slack TTS voice reply never sent](https://github.com/NousResearch/hermes-agent/issues/13126)  
  `_should_send_voice_reply` always false.
- **#37124** – [Termux: setsid bash -lc fails due to missing `--` separator](https://github.com/NousResearch/hermes-agent/issues/37124)  
  Command execution silent failure.
- **#63277** – [WhatsApp bridge /health falsely reports connected during Baileys flapping](https://github.com/NousResearch/hermes-agent/issues/63277)  
  Leads to silent message loss. *Needs reproduction.*
- **#72678** – [Telegram streams internal reasoning despite `enable_thinking: false`](https://github.com/NousResearch/hermes-agent/issues/72678)  
  Reasoning leaks to user. *Needs reproduction.*
- **#73796** – [Dashboard reports gateway "stopped" in split-container Docker](https://github.com/NousResearch/hermes-agent/issues/73796)  
  *Fix PR: [#73808](https://github.com/NousResearch/hermes-agent/pull/73808) – trust fresh runtime state when PID probes fail.*
- **#69912** – [Desktop/CLI diverge for OpenAI-compatible proxy settings](https://github.com/NousResearch/hermes-agent/issues/69912)  
  Configuration not reliably preserved.

### Medium Severity (P3)

- **#7135** – Hindsight macOS Apple Silicon daemon startup timeout (CPU-force env ignored)
- **#55446** – Kanban default_assignee requires restart
- **#60258** – Skills prompt index never refreshes for `external_dirs` changes
- **#67851** – DOCX text-box text extracted twice by `read_file`
- **#73804** – Cron: no-agent workdir jobs serialized → starvation  
  *Fix PR: [#73817](https://github.com/NousResearch/hermes-agent/pull/73817)*

### Fix PRs merged or open today

| PR | Fixes | Status |
|----|-------|--------|
| [#73808](https://github.com/NousResearch/hermes-agent/pull/73808) | #73796 – Dashboard Docker false "stopped" | Open |
| [#73814](https://github.com/NousResearch/hermes-agent/pull/73814) | #69575 – docker_volumes stale on fresh create | Open |
| [#73803](https://github.com/NousResearch/hermes-agent/pull/73803) | Handoff race condition under WAL | Open |
| [#73802](https://github.com/NousResearch/hermes-agent/pull/73802) | Stream replay after partial transport failures | Open |
| [#73807](https://github.com/NousResearch/hermes-agent/pull/73807) | Windows EACCES in `atomic_replace` | Open |
| [#73813](https://github.com/NousResearch/hermes-agent/pull/73813) | MCP shutdown "Event loop is closed" RuntimeError | Open |
| [#73811](https://github.com/NousResearch/hermes-agent/pull/73811) | Reasoning replay for self-hosted thinking models | Open |
| [#70767](https://github.com/NousResearch/hermes-agent/pull/70767) | #69575 – docker_volumes stale on container reuse | **Merged** |

---

## Feature Requests & Roadmap Signals

The following community-requested features saw significant activity today:

- **#42896** ([link](https://github.com/NousResearch/hermes-agent/issues/42896)) – First-class Kanban review transition  
  *Likely to land soon given existing review state support.*
- **#8830** ([link](https://github.com/NousResearch/hermes-agent/issues/8830)) – Xiaomi MiMo V2 TTS native provider  
  *High Chinese TTS quality, 2 👍 requests.*
- **#8558** ([link](https://github.com/NousResearch/hermes-agent/issues/8558)) – Remote Filesystem MCP over SSH  
  *Would drastically reduce shell escaping errors for remote file ops.*
- **#14405** ([link](https://github.com/NousResearch/hermes-agent/issues/14405)) – Eager-load flag for skills like browser-harness  
  *Addresses lazy loading blind spot.*
- **#5437** ([link](https://github.com/NousResearch/hermes-agent/issues/5437)) – Model capability pre-flight validation  
  *Prevents cryptic API errors.*
- **#11483** ([link](https://github.com/NousResearch/hermes-agent/issues/11483)) – Preserved thinking for GLM models  
  *Important for agentic tool chains.*

**New feature PRs opened today:**

| PR | Description | Status |
|----|-------------|--------|
| [#10893](https://github.com/NousResearch/hermes-agent/pull/10893) | RSS reader skill (feeds category) | Open |
| [#50044](https://github.com/NousResearch/hermes-agent/pull/50044) | WeChat QR onboarding (dashboard-based) | Open |
| [#73805](https://github.com/NousResearch/hermes-agent/pull/73805) | Expose tool call success/failure counts in chat completions | Open |
| [#73812](https://github.com/NousResearch/hermes-agent/pull/73812) | Sanitize cron context payloads | Open |

**Prediction for next release:**  
WeChat QR onboarding (#50044) and the RSS reader skill (#10893) are polished features that may ship soon. Bug fix PRs for Docker, Windows, and session state are also likely candidates.

---

## User Feedback Summary

**Common pain points voiced today:**
- **Discord message delivery is broken** – agents cannot reply to the correct channel (#5472).  
- **Windows desktop update breaks entirely** – stuck on CONNECTING after a successful update log (#49920).  
- **Apple Silicon users hit daemon timeouts** – environment CPU-force flags ignored (#7135).  
- **Copilot quota exhaustion is not gracefully handled** – fallback providers never activate (#63815).  
- **Python environment pollution** – Hermes venv shadows system Python 3.11 (#22054).  
- **Custom SSL CA settings are inconsistently applied** – probes bypass them (#66544).  
- **Session search is confusing** – retrieves root summary instead of the child hit (#6507).  
- **DOCX extraction duplicates text boxes** (#67851).  
- **Docker users:** stale volumes and false "stopped" status (#73796).  
- **Scripted cron jobs with workdir starve each other** (#73804).  

**Satisfaction signals:**  
No explicitly positive feedback is captured in today’s data, but the high volume of contributed fix PRs (especially from community members) indicates a healthy contributor ecosystem and trust in the project’s responsiveness.

---

## Backlog Watch

The following issues and PRs are **long-standing, important, and lack maintainer action** (needs-decision, needs-repro, or unanswered for months):

| Item | Title | Created | Updated | Status |
|------|-------|---------|---------|--------|
| [#5472](https://github.com/NousResearch/hermes-agent/issues/5472) | Discord send_message channel targeting | 2026-04-06 | 2026-07-29 | needs-decision |
| [#42896](https://github.com/NousResearch/hermes-agent/issues/42896) | Kanban review transition missing | 2026-06-09 | 2026-07-29 | needs-decision |
| [#7135](https://github.com/NousResearch/hermes-agent/issues/7135) | Hindsight macOS Apple Silicon startup | 2026-04-10 | 2026-07-29 | needs-decision |
| [#63815](https://github.com/NousResearch/hermes-agent/issues/63815) | Copilot fallback failure | 2026-07-13 | 2026-07-29 | needs-decision |
| [#66544](https://github.com/NousResearch/hermes-agent/issues/66544) | Custom provider CA probes | 2026-07-17 | 2026-07-29 | needs-decision |
| [#6507](https://github.com/NousResearch/hermes-agent/issues/6507) | session_search root summarisation | 2026-04-09 | 2026-07-29 | No decision |
| [#63277](https://github.com/NousResearch/hermes-agent/issues/63277) | WhatsApp health false connected | 2026-07-12 | 2026-07-29 | needs-repro |
| [#69912](https://github.com/NousResearch/hermes-agent/issues/69912) | Desktop/CLI divergence for proxy | 2026-07-23 | 2026-07-29 | needs-repro |
| [#72678](https://github.com/NousResearch/hermes-agent/issues/72678) | Telegram thinking leak | 2026-07-27 | 2026-07-29 | needs-repro |

Many of these were opened **3–4 months ago** and still require a maintainer decision or a clear reproduction path. Prioritising these would unblock community workflows and reduce duplicate reports.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-07-29

## 1. Today’s Overview

The PicoClaw project saw moderate activity over the past 24 hours, with **4 issues updated** (3 closed, 1 open) and **9 pull requests updated** (3 merged/closed, 6 open). No new releases were published. The closed issues include a high‑priority security feature (migrating from `libolm` to `vodozemac`), a platform‑specific DingTalk bug, and a critical toolset deadlock fix. The PR stream is dominated by bug fixes across providers (Anthropic cache metrics, Feishu media, seahorse summaries) and a new Exa web search provider. While the project remains healthily active, a handful of still‑open bugs and stale PRs (most notably the Android launch issue) signal areas that require ongoing maintainer attention.

## 2. Releases

No new releases were published in the last 24 hours.

## 3. Project Progress

Three pull requests were merged or closed in the reporting window:

- **[sipeed/picoclaw PR #3256](https://github.com/sipeed/picoclaw/pull/3256)** – **fix(feishu):** Audio and video files are now sent with native Feishu message types (`opus`, `mp4`) instead of generic file attachments, enabling inline playback.  
- **[sipeed/picoclaw PR #3254](https://github.com/sipeed/picoclaw/pull/3254)** – **fix(agent):** Model resolution in `lookupModelConfigByRef` now prefers verbatim model strings over provider‑alias splits, eliminating incorrect fallback matches.  
- **[sipeed/picoclaw PR #3228](https://github.com/sipeed/picoclaw/pull/3228)** – **fix(anthropic‑messages):** The `anthropic_messages` provider now correctly sends `SystemParts` as system blocks with `cache_control`, unblocking Anthropic prompt caching.

In addition, three issues were closed:

- **#3088 (Feature – `vodozemac` instead of `libolm`)** – see *Feature Requests & Roadmap Signals*.  
- **#3255 (Bug – DingTalk list preview)** – see *Bugs & Stability*.  
- **#3300 (Bug – `read_file` deadlock)** – see *Bugs & Stability*.

## 4. Community Hot Topics

The most actively discussed items in the past 24 hours are:

- **[sipeed/picoclaw Issue #3088](https://github.com/sipeed/picoclaw/issues/3088)** – **Feature: use vodozemac instead of libolm**  
  *10 comments, 2 👍* – This long‑running, high‑priority request was closed yesterday. The community has been pushing for the migration because `libolm` is unmaintained and insecure. The proposed solution makes `libolm` optional and uses `vodozemac` as the default – a change that aligns with upstream Matrix recommendations. Its closure signals that the feature is likely integrated into the next release.

- **[sipeed/picoclaw Issue #3182](https://github.com/sipeed/picoclaw/issues/3182)** – **BUG: Android version**  
  *5 comments* – Still open and tagged stale, this bug prevents the service from launching on Android even with full permissions. The reporter cannot change the path from settings. With no fix PR in sight, this remains a significant gap for mobile users.

- **[sipeed/picoclaw PR #3299](https://github.com/sipeed/picoclaw/pull/3299)** – **Add native Exa web search provider**  
  *No comment count but high topical interest* – A new contributor proposes adding Exa as a native web search tool. This PR is relatively new (created 2026‑07‑26) and has been updated recently; it could see heightened discussion as maintainers review the integration.

## 5. Bugs & Stability

Three bugs were reported or updated in the last 24 hours, ranked by severity:

| Severity | Issue | Description | Status | Fix PR? |
|----------|-------|-------------|--------|---------|
| **Critical** | [#3300](https://github.com/sipeed/picoclaw/issues/3300) | **Missing `read_file` tool causes deadlock each conversation** – Users who rely on `AGENT.md` to instruct the AI to read `RULES.md` cannot proceed because the tool is missing from the toolset, leading to a permanent deadlock. | **Closed** (no comments, likely fixed rapidly) | Not visible, but closed indicates resolution. |
| **High** | [#3182](https://github.com/sipeed/picoclaw/issues/3182) | **Android service cannot launch** – The app fails to start with no actionable error beyond the log screenshot. The settings path is unchangeable. | **Open** (stale since June) | None identified. |
| **Low** | [#3255](https://github.com/sipeed/picoclaw/issues/3255) | **DingTalk chat list preview shows “PicoClaw” instead of message content** – Only the list preview is wrong; inside the chat replies display correctly. | **Closed** | Likely addressed in a pending merge or quick commit. |

Additional stability improvements arrived via the closed PRs:

- **Feishu audio/video** (PR #3256) – prevents media being sent as generic files.  
- **Agent model resolution** (PR #3254) – avoids incorrect alias‑based model matching.  
- **Anthropic system blocks** (PR #3228) – enables prompt caching for Anthropic users.  

Still‑open fix PRs that target reported issues include:

- **PR #3280** – Browser OAuth login robustness (addresses burned authorization codes).  
- **PR #3279** – Prevents tool‑call format leakage into seahorse summaries.  
- **PR #3251** – Captures prompt cache token usage from Anthropic providers (currently discarded).

## 6. Feature Requests & Roadmap Signals

The most notable feature request that just closed is:

- **[#3088 – vodozemac migration](https://github.com/sipeed/picoclaw/issues/3088)** – This security‑critical change is now merged/closed. It is almost certain to appear in the **next release**, replacing `libolm` with the actively maintained `vodozemac`. The implementation makes `libolm` compile‑time optional.

Other features active in the PR pipeline point to what may land soon:

- **[PR #3299 – Exa web search provider](https://github.com/sipeed/picoclaw/pull/3299)** – If accepted, this will be a new native `web_search` tool using Exa's API, expanding the search backends beyond the current defaults.  
- **[PR #3200 – Configurable default fallback chain for models](https://github.com/sipeed/picoclaw/pull/3200)** – Adds a UI and backend API to set and reorder fallback models, improving reliability when the primary model fails.  
- **[PR #1951 – Move installation scripts](https://github.com/sipeed/picoclaw/pull/1951)** – While not a user‑facing feature, this build enhancement (created in March, updated today) simplifies setup for new users by consolidating scripts into the main repo.

Looking ahead, the community interest in better mobile support (see #3182) and improved prompt caching (PRs #3228, #3251) suggests these areas are priorities for the next minor version.

## 7. User Feedback Summary

Real user pain points surfaced in the last 24 hours:

- **Critical deadlock for power users** – #3300: A user who wants to split rules into a separate `RULES.md` file hit a system deadlock because the required `read_file` tool was missing. This was clearly a regression or missing feature that prevented any conversation from proceeding. The issue was closed quickly, suggesting a fix was applied.  
- **Android users blocked** – #3182: An Android user cannot run the service at all, with no ability to change the settings path. This is a long‑standing problem (since June) that remains unfixed, likely causing frustration among mobile adopters.  
- **DingTalk UX annoyance** – #3255: A cosmetic but noticeable bug – the chat list always shows “PicoClaw” as the last message preview, which may confuse users and reduce trust in the bot. It was closed, implying a fix is in place.  

Positive signals include active community contributions: two new contributors (MrTreasure, fabdelgado, hydrogenbond007) provided fixes for DingTalk, Feishu, model resolution, and Anthropic caching. The swift closure of #3088 (vodozemac) also indicates the maintainers respond to security and community‑driven requests.

## 8. Backlog Watch

Several important items remain open and stale, requiring maintainer attention:

| Item | Type | Created | Last Updated | Risk |
|------|------|---------|--------------|------|
| [Issue #3182 – Android service launch](https://github.com/sipeed/picoclaw/issues/3182) | Bug | 2026‑06‑26 | 2026‑07‑28 | **High** – Blocks mobile deployment; no fix PR attached. |
| [PR #3280 – Auth OAuth callback fix](https://github.com/sipeed/picoclaw/pull/3280) | Bugfix | 2026‑07‑21 | 2026‑07‑28 | **Medium** – Important for headless/remote OAuth, but no maintainer review yet. |
| [PR #3279 – Seahorse tool‑call leakage](https://github.com/sipeed/picoclaw/pull/3279) | Bugfix | 2026‑07‑21 | 2026‑07‑28 | **Medium** – Same symptom class as a previously reported issue; code is ready. |
| [PR #3251 – Anthropic prompt cache metrics](https://github.com/sipeed/picoclaw/pull/3251) | Bugfix | 2026‑07‑12 | 2026‑07‑28 | **Low–Medium** – Operators cannot verify caching; PR has been open for two weeks without activity. |
| [PR #1951 – Move installation scripts](https://github.com/sipeed/picoclaw/pull/1951) | Enhancement | 2026‑03‑24 | 2026‑07‑29 | **Low** – Stale for months; low impact but could simplify onboarding. |
| [PR #3200 – Default fallback chain](https://github.com/sipeed/picoclaw/pull/3200) | Feature | 2026‑07‑01 | 2026‑07‑28 | **Medium** – UI‐backed feature with community demand; pending review. |

The Android bug (#3182) stands out as the most critical backlog item. If the project aims to support mobile platforms, this issue should be triaged and addressed. The three older fixes (PRs #3280, #3279, #3251) are ripe for merge if they pass review, as they address real user‑facing problems.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-07-29

## 1. Today's Overview
Project activity was **high** with 10 pull requests updated in the last 24 hours, of which 4 were closed or merged. One open issue received an update after months of inactivity. No new releases were published. The merged PRs delivered a container zombie‑process fix, a new MiniMax OAuth provider, and safety guards for the `update-nanoclaw` skill. The open‑issue pipeline shows increasing interest in alternative AI backends, while the six outstanding PRs focus on bug fixes and data‑layer improvements. Overall the project is healthy, with steady contributor throughput and a clear emphasis on hardening the runtime and expanding model provider options.

## 2. Releases
*No new releases in the last 24 hours. Omitted.*

## 3. Project Progress
Four PRs were closed/merged today:
- **[PR #3060](https://github.com/nanocoai/nanoclaw/pull/3060)** – `fix(container): add --init to agent container spawn args so PID 1 reaps zombie processes`. Corrects a known gap in the container runtime.
- **[PR #1255](https://github.com/nanocoai/nanoclaw/pull/1255)** – `feat: add MiniMax OAuth (Coding Plan) as model provider`. Provides a full device‑code OAuth flow, enabling agents to use MiniMax models without an Anthropic API key.
- **[PR #2197](https://github.com/nanocoai/nanoclaw/pull/2197)** – `fix(update-nanoclaw): guard merge state to prevent silent single-parent commits`. Prevents a subtle git merge failure on customized forks.
- **[PR #1136](https://github.com/nanocoai/nanoclaw/pull/1136)** – `feat(update-nanoclaw): add auto-merge audit and container smoke test`. Adds safety steps to catch code silently dropped during upstream merges.

These changes advance container reliability, model‑provider diversity, and fork‑update safety.

## 4. Community Hot Topics
- **[Issue #1350](https://github.com/nanocoai/nanoclaw/issues/1350) (open, 8👍, 3 comments)** – “Add GitHub Copilot SDK as alternative AI backend”. This long‑standing feature request was updated today, reflecting sustained user demand for Copilot‑compatible models as a Claude alternative.
- **[PR #3057](https://github.com/nanocoai/nanoclaw/pull/3057) (open)** – “Dual-engine quota fallback: Claude→Codex overflow, handoff recaps, proactive quota warning”. A large feature branch that has been battle‑tested in production since July 6. It addresses the critical operational need of avoiding service disruption when API quotas are exhausted.
- **[PR #3143](https://github.com/nanocoai/nanoclaw/pull/3143) (open)** – “Preserve resolved approval card content”. A core‑team fix to keep UI cards readable after resolution, signalling attention to user‑facing polish.

The underlying theme is **expanding backend flexibility** (Copilot, Codex) and **improving production resilience** (quota fallback, container hardening).

## 5. Bugs & Stability
Several bugs were fixed or are currently under review:

**Resolved (merged)**
- *Container zombie processes* (PR #3060) – medium severity; could cause resource leaks in long‑running agents.
- *Silent single‑parent commits in `/update-nanoclaw`* (PR #2197) – medium severity; risked lost changes on forked repos.
- *Code silently dropped by auto‑merge* (PR #1136) – high severity; addressed by new audit and smoke test steps.

**Open fixes (under active development)**
- **[PR #3148](https://github.com/nanocoai/nanoclaw/pull/3148)** – `fix: honor WEBHOOK_PORT from .env`. High severity (regression if `.env` is the primary configuration source). Closes issue #2901.
- **[PR #3147](https://github.com/nanocoai/nanoclaw/pull/3147)** – `fix(agent-runner): keep destination reply context local`. Medium severity; potential cross‑agent context leakage.
- **[PR #3145](https://github.com/nanocoai/nanoclaw/pull/3145)** – `fix(db): backfill destinations for existing wirings`. Low severity; prevents null pointer errors in message‑group wirings.
- **[PR #3146](https://github.com/nanocoai/nanoclaw/pull/3146)** – `scripts: repair two dev scripts`. Low severity (dev‑only impact).
- **[PR #3143](https://github.com/nanocoai/nanoclaw/pull/3143)** – `Preserve resolved approval card content`. Low severity; UI presentation.

No critical crashes or regressions were reported today; the most impactful open bug is the `WEBHOOK_PORT` configuration precedence issue.

## 6. Feature Requests & Roadmap Signals
The most notable feature request is **[Issue #1350](https://github.com/nanocoai/nanoclaw/issues/1350)** (Copilot SDK integration), which has been open since March and gained 8 thumbs‑up. Given the recent merge of MiniMax OAuth (PR #1255), the maintainers are clearly investing in multi‑provider support, making Copilot a plausible candidate for the next release.

The **dual‑engine quota fallback** (PR #3057) is already production‑tested and should be expected in a coming minor release. Together with the MiniMax provider, NanoClaw is moving toward a **pluggable AI backend** architecture.

## 7. User Feedback Summary
- **Positive signal**: The high number of upvotes on the Copilot SDK request (8👍) indicates strong community desire for more backend choice beyond Claude.
- **Operational pain point**: The production‑tested quota fallback (PR #3057) directly addresses real‑world frustration with rate limits and API outages, demonstrating that users rely on NanoClaw for continuous agent operation.
- **Usability feedback**: The `WEBHOOK_PORT` config bug (PR #3148) and the approval‑card preservation fix (PR #3143) reflect user reports about configuration and UI clarity.
- **Satisfaction**: Quick turnaround on container zombie reaping (PR #3060) and merge safety (PRs #2197, #1136) suggests contributors are responsive to stability concerns.

## 8. Backlog Watch
- **[Issue #1350](https://github.com/nanocoai/nanoclaw/issues/1350) (Copilot SDK integration)** – created 2026-03-22, last updated 2026-07-29. With 8👍 and recent activity, it is the highest‑impact open feature request lacking a maintainer response. A roadmap comment or design discussion would help set expectations.

No other critical issues or PRs appear to have been stalled beyond typical review cycles. The six open PRs are all from active contributors and have recent updates (within last 1–2 days), so the backlog is current.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

## IronClaw Project Digest — 2026-07-29

### 1. Today’s Overview
IronClaw saw very high activity over the past 24 hours: **50 issues** and **50 pull requests** were updated, with **15 PRs merged/closed** and **16 issues closed**. The project continues its intense focus on reliability (epic #6284 — 100% error recoverability) and a new hermetic testing platform (epic #6524). Security remains a top priority, with multiple fixes for trust-boundary issues (e.g., TOCTOU escapes in the filesystem, unsigned catalog URLs). A major database migration PR (#6696) and large-scale refactors (composition builders, messaging framework) are under active review. No new release was published today; the last tagged release is `ironclaw 1.0.0`.

### 2. Releases
**None.** No new releases in the last 24 hours.

### 3. Project Progress
**Merged/Closed PRs (15 total):** Notable among the top-20 list is [#6816](https://github.com/nearai/ironclaw/pull/6816) *(closed)*, which centralizes channel ingress and adds a manifest-based `[channel] commands` allowlist, hardening Slack/Telegram integrations. Several other PRs marked *closed* in the full data but not shown in the top-20 are likely small patches; the team’s velocity is high.

**Closed Issues (16 total):** A wave of epics from the extension and messaging workstreams were closed today, including:
- [#6518](https://github.com/nearai/ironclaw/issues/6518) – Enforce release gates and publish critical-journey health
- [#6517](https://github.com/nearai/ironclaw/issues/6517) – Map critical journeys to evidence tiers
- [#6516](https://github.com/nearai/ironclaw/issues/6516) – Define canonical critical user journey catalog
- [#6512](https://github.com/nearai/ironclaw/issues/6512) – Define extension policy precedence
- [#6511](https://github.com/nearai/ironclaw/issues/6511) – Build tenant extension governance API/UI
- [#6509](https://github.com/nearai/ironclaw/issues/6509) – Bind credentials to tenant-managed extensions
- [#6508](https://github.com/nearai/ironclaw/issues/6508) – Synchronize provider events with conversation history
- [#6507](https://github.com/nearai/ironclaw/issues/6507) – Surface channel provenance in WebUI
- [#6506](https://github.com/nearai/ironclaw/issues/6506) – Define external-conversation binding contract
- [#6502](https://github.com/nearai/ironclaw/issues/6502) – Migrate Slack tools to shared operation profiles
- [#6501](https://github.com/nearai/ironclaw/issues/6501) – Add manifest opt-in for messaging operations
- [#6500](https://github.com/nearai/ironclaw/issues/6500) – Define provider-neutral messaging profiles
- [#6497](https://github.com/nearai/ironclaw/issues/6497) – Add Telegram lifecycle release gate
- [#6729](https://github.com/nearai/ironclaw/issues/6729) – Normalize installation persistence into lifecycle records
- [#6730](https://github.com/nearai/ironclaw/issues/6730) – Correct memory provider lifecycle capabilities

These closures represent significant progress in defining and hardening the extension system, messaging architecture, and release quality gates.

**Active PRs of note:**
- [#6696](https://github.com/nearai/ironclaw/pull/6696) *(XL, risk: medium)* – DB migration to collapse lifecycle state into a process journal.
- [#5659](https://github.com/nearai/ironclaw/pull/5659) *(XL, risk: low)* – Production security fix for tool-disclosure narrowing (3 leak vectors).
- [#6817](https://github.com/nearai/ironclaw/pull/6817) *(XL, risk: low)* – Fixes four TOCTOU containment escapes in the local filesystem.
- [#6740](https://github.com/nearai/ironclaw/pull/6740) – TLS termination seam for sandbox egress proxy.
- [#6780](https://github.com/nearai/ironclaw/pull/6780) – Deep-link IronHub install gateway + private manifest source (stacked on #6754).

### 4. Community Hot Topics
**Most commented issues:**
- [#6284](https://github.com/nearai/ironclaw/issues/6284) — **“Error-recoverability endgame”** (15 comments, epic). The goal that every mid-run error must satisfy a recoverability contract. This is the most active thread, reflecting the project’s core reliability push.
- [#6524](https://github.com/nearai/ironclaw/issues/6524) — **“Hermetic capability and journey testing platform”** (3 comments, epic). Addresses the lack of deterministic, meaningful coverage for all supported capabilities.
- [#6820](https://github.com/nearai/ironclaw/issues/6820) — **“IronHub agent reaches for unsigned catalog URL”** (2 comments). A trust-boundary issue discovered in live preview.
- [#6814](https://github.com/nearai/ironclaw/issues/6814) — **“Third-party skills still trip prompt content denylist”** (1 comment). Blocks all runs if `description` contains “API key”.

**Underlying needs:** The community (mostly core contributors) is driving two major themes: **reliability** (recovery from every error, no silent failures) and **security** (trust boundaries, safe defaults, prompt content filtering). The high comment count on #6284 shows consensus that the project needs a systematic approach to error handling, not just ad-hoc fixes.

### 5. Bugs & Stability
**Bugs reported today (ranked by severity):**

| Severity | Issue | Description | Fix PR exists? |
|----------|-------|-------------|----------------|
| P1 | [#6805](https://github.com/nearai/ironclaw/issues/6805) | Instance intermittently returns `service_unavailable` (~every 30 min) | No explicit fix PR yet |
| P1 | [#6815](https://github.com/nearai/ironclaw/issues/6815) | Turn-state store latches degraded forever after write-behind flush failure, requires restart | No |
| P2 | [#6833](https://github.com/nearai/ironclaw/issues/6833) | Notion tool fails to install | No |
| P2 | [#6834](https://github.com/nearai/ironclaw/issues/6834) | Slack setup fails | No |
| P2 | [#6806](https://github.com/nearai/ironclaw/issues/6806) | Automations don’t show in web chat | No |
| P2 | [#6814](https://github.com/nearai/ironclaw/issues/6814) | Third-party skills blocked by prompt denylist (follow-up to #5169/#5258) | No |
| P2 | [#6807](https://github.com/nearai/ironclaw/issues/6807) | NetworkTargetPattern validators not enforced at type level | No |
| P2 | [#6835](https://github.com/nearai/ironclaw/issues/6835) | MCP auth failures classified as `Client` instead of `AuthRequired` | PR #6825 (testing) addresses classification |
| P2 | [#6820](https://github.com/nearai/ironclaw/issues/6820) | IronHub agent reaches for unsigned catalog URL | No explicit fix PR yet |
| P2 | [#6821](https://github.com/nearai/ironclaw/issues/6821) | IronHub search free-text matches read as complete listing | No |
| P2 | [#6829](https://github.com/nearai/ironclaw/issues/6829) | Telegram forum-topic delivery has no whole-path coverage | No |

**Notable fixes in progress:**
- [#6817](https://github.com/nearai/ironclaw/pull/6817) closes four TOCTOU escapes in the filesystem.
- [#6832](https://github.com/nearai/ironclaw/pull/6832) fixes recovery bounding per run (not just per stage) for #6284.
- [#6826](https://github.com/nearai/ironclaw/pull/6826) stops reading rate-limit digits as auth failures.
- [#6824](https://github.com/nearai/ironclaw/pull/6824) stops silent retries of model-stage failures that cannot succeed.

**Stability concern:** The `service_unavailable` symptom (#6805) and turn-state latch degradation (#6815) indicate systemic reliability issues in the libSQL deployment, likely related to write-behind flush patterns. These are the highest-priority blockers.

### 6. Feature Requests & Roadmap Signals
**New feature requests:**
- [#6837](https://github.com/nearai/ironclaw/issues/6837) — Add minimal `info`-level logging for growth/usage stats. Currently zero such signals exist; this is a request for analytics observability.
- [#6810](https://github.com/nearai/ironclaw/issues/6810) — Make progressive tool disclosure the safe default without degrading everyday use. This would improve prompt budget management for large capability surfaces.

**Roadmap signals from epics and PRs:**
- Epics #6284 (error recoverability) and #6524 (hermetic testing) are clearly the two main pillars for the next release.
- The IronHub integration is nearing completion with PRs #6754 and #6780 (install flow, deep-link gateway).
- The messaging framework PR [#6831](https://github.com/nearai/ironclaw/pull/6831) standardizes 29 operations across channels — a major architectural piece likely to land before the next minor release.
- A WebUI design system extraction ([#6836](https://github.com/nearai/ironclaw/pull/6836)) is in progress, suggesting UI polish as a future deliverable.

**Predictions for next version:** The next release (likely `1.1.0` or `2.0.0`) will include the Hermetic testing platform, full IronHub support, the standardized messaging framework, and tightened security defaults (tool disclosure, TOCTOU fixes). The error-recoverability epic may see initial adoption with per-run recovery bounding already merged.

### 7. User Feedback Summary
Real user pain points surfaced today:
- **Integration failures:** Notion and Slack setup both fail without clear error messages (#6833, #6834). Users are blocked from using these tools.
- **Service instability:** The QA instance on Railway suffers frequent `service_unavailable` errors (#6805), frustrating anyone testing or using the live preview.
- **Automation transparency:** Automations execute but their output is hidden from web chat (#6806), forcing manual navigation to the automations page.
- **Content filtering false positives:** Third-party skills containing “API key” in their description are entirely blocked (#6814), preventing legitimate use of skills that mention API keys generically.

**Satisfaction:** The team is responsive — many of these bugs were filed by core contributors or QA and are being addressed quickly. The high activity on fixes indicates strong internal investment.

### 8. Backlog Watch
**Long-unanswered issues/PRs requiring maintainer attention:**
- **[#5659](https://github.com/nearai/ironclaw/pull/5659)** *(PR, open since 2026-07-05)* – Critical security fix for tool-disclosure narrowing, still awaiting review or merge. 24 days open.
- **[#5598](https://github.com/nearai/ironclaw/pull/5598)** *(PR, open since 2026-07-03)* – Release PR with API-breaking changes in `ironclaw_common` and `ironclaw_skills`. 26 days open. This suggests the release process is blocked, possibly waiting on the items above.
- **[#6518](https://github.com/nearai/ironclaw/issues/6518)** *(closed today)* – While closed, the underlying goal of making journey status a visible release signal is still pending implementation in the CI/release pipeline.
- **[#6835](https://github.com/nearai/ironclaw/issues/6835)** *(opened 2026-07-28)* – MCP auth misclassification, though a fix PR (#6825) exists, but the classification itself may need a config change before merge.

**No issues older than 7 days appear in the top 30,** suggesting the team triages and closes quickly. The slowest-moving items are the two major open PRs #5659 and #5598, which may be waiting on cross-team review or stabilization of the sandbox changes.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-07-29

## 1. Today's Overview
The project saw moderate activity with 5 pull requests merged or closed and 3 issues updated in the last 24 hours. No new releases were published. Activity was concentrated in bug fixing and minor feature additions, particularly around the Windows installer, runtime safety contracts, and the cowor/btw side chat feature. Two stale bugs (plugin ID mismatch, scheduled task error) received updates but remain open. Community engagement on issues remains low, with no new comments or reactions exceeding 1.

## 2. Releases
No new releases were published on 2026-07-29.

## 3. Project Progress
Five PRs were merged/closed today, advancing both fixes and features:

- **#2400** [merged] — `fix(openclaw): enforce runtime/config safety‑contract gate to stop false-stop token burn` — Introduces startup validation so the bundled OpenClaw runtime only runs under LobsterAI’s managed safety policy, preventing premature token exhaustion.
- **#2402** [merged] — `fix(update): reject Windows installer redirects instead of trusting response.url` — Hardens the Windows update mechanism against insecure redirects.
- **#2398** [merged] — `fix(installer): drive Skills backup outcome from helper exit codes` — Corrects a bug where the legacy Skills backup step misclassified a successful “no user skills” exit as a failure, causing spurious restore warnings.
- **#2399** [merged] — `feat(renderer): hide sites nav entry outside test mode` — Toggles visibility of the “Sites” navigation element in non‑test environments.
- **#2397** [merged] — `feat(cowork): add isolated /btw side chat` — Adds an editable, floating side‑chat panel for selected assistant text, with drag/resize support and full isolation from the main conversation.

## 4. Community Hot Topics
All three updated issues have only 1 comment each and zero reactions, indicating limited community discussion.

- **#2401** *skill技能* — Asks whether the PDF/docs/pptx/xlsx capabilities rely on Anthropic’s official tools and whether the skills can be used commercially. This is a new question that may reflect uncertainty around licensing and dependency transparency.
- **#1236** *[bug]插件 ID 不匹配警告* — Reports a persistent config warning when plugin entry key and manifest ID mismatch. Stale since April but updated today, possibly because an upcoming fix is being scoped.
- **#2071** *创建定时任务错误* — Describes errors when creating scheduled tasks in version 2026.5.27. Also stale (May) but updated.

## 5. Bugs & Stability
Two open bugs were updated today, both classified as medium severity:

| Issue | Summary | Severity | Fix PR? |
|-------|---------|----------|---------|
| #1236 | Plugin ID mismatch warning on startup | Medium – non‑functional but noisy | No open fix PR today |
| #2071 | Scheduled task creation error | Medium – crashes scheduled workflows | No open fix PR today |

Additionally, two Windows installer bugs were fixed today:
- **#2402** – Rejects insecure redirects during updates.
- **#2398** – Corrects false‑positive “backup missing” error when no user skills exist.

No regressions or crashes reported in the last 24 hours.

## 6. Feature Requests & Roadmap Signals
- **#2401** (new) – Requests clarification on commercial use of document‑processing skills. This may signal a need for clearer documentation or licensing terms, possibly leading to a future documentation PR.
- **#1233** (stale OPEN) – Proposes adding official website links and “Get API Key” guidance to model providers. Originally from April, this feature is likely still under consideration for the next minor release.
- **#2397** (merged) – The `/btw` side chat feature was just merged; future iterations may add persistent state or integration with the main conversation.
- **#2399** (merged) – Hiding the Sites nav behind a test mode flag suggests that feature is not yet ready for general availability.

Given the high volume of fixes today, the next release (likely a patch) could include Windows installer stability improvements and the OpenClaw safety‑contract gate.

## 7. User Feedback Summary
- **Pain points** identified:
  - Plugin ID mismatch warnings (noisy startup logs)
  - Scheduled task creation errors in recent versions
  - Windows installer incorrectly reporting missing legacy backups
- **Use cases** inferred:
  - Commercial deployment of document‑processing skills (PDF, docs, pptx, xlsx)
  - Running scheduled tasks via LobsterAI’s automation framework
  - Using side‑chat (`/btw`) for isolated follow‑up questions during cowork sessions
- **Satisfaction**: Not directly measured; however, the rapid merging of Windows installer fixes and the new side‑chat feature suggest the team is responsive to reported pain points.

## 8. Backlog Watch
Three stale items (last updated today but created months ago) remain open with no maintainer response or fix PRs:

| # | Created | Title | Type | Last Action |
|---|---------|-------|------|-------------|
| #1236 | 2026-04-01 | [bug]插件 ID 不匹配警告 | Bug | Updated (no comment) |
| #2071 | 2026-05-28 | 创建定时任务错误 | Bug | Updated (no comment) |
| #1233 | 2026-04-01 | feat(model): add official site & API key links | Feature PR | Updated (no comment) |

These issues have not been assigned and lack clear maintainer acknowledgment. They represent unresolved usability and configuration concerns that may affect long‑term user confidence.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-07-29

---

## 1. Today’s Overview
Development velocity remains high with **8 pull requests updated** in the last 24 hours (6 open, 2 closed/merged) and **1 bug issue closed**. No new releases were published. Activity is concentrated on security hardening, cross-platform interoperability, and observability infrastructure. The lone bug (archived cron sessions not hiding) has been fixed and merged, indicating a responsive maintenance cycle.

---

## 2. Releases
*None.* No new versions were published in the last 24 hours.

---

## 3. Project Progress
Two PRs were merged/closed today:

- **[PR #1172 — fix(web): hide archived cron sessions by default](https://github.com/moltis-org/moltis/pull/1172)** (closed, merged)  
  Resolves the long-standing issue [#1111](https://github.com/moltis-org/moltis/issues/1111) where archiving a cron session had no visible effect. Now the Cron tab hides archived runs by default, with a “Show archived sessions” toggle. Includes a Playwright regression test.

- **[PR #1171 — Move ACP selection into the chat model picker](https://github.com/moltis-org/moltis/pull/1171)** (closed, merged)  
  Improves the UI by integrating installed ACP clients into the composer model selector, removing the redundant header ACP selector and “Built-in LLM agent” option. Preserves per-session binding and reasoning controls.

Both merges represent UX polish and bugfix delivery from the current development cycle.

---

## 4. Community Hot Topics
No issues or PRs attracted comments or reactions (all `👍: 0`, `comments: undefined`) in the observation window. However, the following PRs received repeated updates today, signalling ongoing maintainer attention:

- **[PR #1174 — Add instrumentation and feedback collection infrastructure](https://github.com/moltis-org/moltis/pull/1174)** (open, updated 2026-07-29)  
  Large feature adding Langfuse, OTLP, and user reaction feedback. High-impact for operational teams.

- **[PR #1169 — feat(acp): expose Moltis as an ACP agent over stdio](https://github.com/moltis-org/moltis/pull/1169)** (open, updated 2026-07-29)  
  Core interoperability work – turning Moltis into an ACP agent for external tools.

- **[PR #1170 — fix(channels): gate privileged tools behind a per-account operators list](https://github.com/moltis-org/moltis/pull/1170)** (open, updated 2026-07-29)  
  Security-focused: separates channel access from privilege, addressing a past allowlist bypass.

The underlying needs are clear: **security hardening**, **standards-based interop (ACP)**, and **production observability**. These are structural, not cosmetic, changes.

---

## 5. Bugs & Stability
One bug was addressed today:

- **[Issue #1111 — [Bug]: Archiving a cron session has no visible effect](https://github.com/moltis-org/moltis/issues/1111)** (closed)  
  Severity: **Medium** (UI misleading, functional but invisible). Fixed by PR #1172.

No new bug reports were opened in the last 24 hours. No regressions or crashes were recorded.

---

## 6. Feature Requests & Roadmap Signals
Several open PRs point toward upcoming capabilities likely to be included in the next release:

- **ACP agent mode (#1169)** – exposes Moltis as a first-class ACP agent, opening the door to orchestration by external frameworks (e.g., Harbor, LangChain).
- **Instrumentation & feedback (#1174)** – backend-neutral tracing + Langfuse v4 export + user reaction feedback. Indicates a push toward enterprise-grade monitoring.
- **Terminal-Bench chat runner (#1175)** – adds `moltis-ctl chat` and a Harbor/Terminal-Bench wrapper for benchmarked agent execution.
- **PWA push notifications (#1173)** – reliable, privacy-safe push across tabs/devices.
- **Slack acknowledgment reactions (#1166)** – per-message phases, Block Kit, reconnect supervision.

These features suggest the next version will focus on **interoperability (ACP, Slack integrations)**, **operational tooling (instrumentation, benchmarks)**, and **mobile/offline UX (PWA)**.

---

## 7. User Feedback Summary
No direct user comments or reactions were captured in the 24-hour window. However, the closed bug **#1111** indicates a real-world pain point: users expected archiving to visibly hide cron sessions, which is now fixed. The security fix in **#1170** suggests earlier access control gaps. Both were addressed by the maintainers within 24 hours of the bug report’s last update, reflecting a responsive support culture.

---

## 8. Backlog Watch
No long-unanswered issues or PRs were identified. The oldest still-open PR is **[#1166](https://github.com/moltis-org/moltis/pull/1166)** (opened 2026-07-24, 5 days ago), which is actively being updated. The only open issue in the project (across all time, not shown) had no recent activity. **The backlog is effectively clean.**

---

*Digest generated from GitHub data up to 2026-07-29 23:59 UTC.*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-07-29

## 1. Today's Overview
CoPaw (QwenPaw) saw very high activity on 2026-07-29, with **50 PRs updated** (33 open, 17 merged/closed) and **12 issues updated** (9 open, 3 closed). No new releases were published. The project is clearly in an intense development phase, with multiple bug fixes, new features, and community contributions landing. Notable focus areas include desktop automation, context compression, ACP protocol improvements, and stability fixes for configuration corruption.

---

## 2. Releases
No releases were published in the last 24 hours.

---

## 3. Project Progress
17 PRs were merged or closed today. Key completed work includes:

- **Skill Tagging UX**: `feat(skill): Add qwenpaw to skill url` ([#6517](https://agentscope-ai/QwenPaw/pull/6517)) — allows importing skills from URL with examples.
- **Context Compression**: `feat(context): Visual Compact` ([#6456](https://agentscope-ai/QwenPaw/pull/6456)) — PawFocus visual context compression with profitability gating and exact-content recovery.
- **Testing & Coverage**: `test(drivers): add Driver unit tests + enable fail_under=50 coverage gate` ([#6489](https://agentscope-ai/QwenPaw/pull/6489)) — brings Driver subsystem from 0% to regression-protected coverage.
- **Plugin Compatibility**: `fix(plugins): temporarily disable max version check in plugin compat` ([#6532](https://agentscope-ai/QwenPaw/pull/6532)) — prevents false failures after version bump to `2.1.0b1`.
- **Website & Analytics**: Multiple PRs contributed to website improvements: blog updates ([#6330](https://agentscope-ai/QwenPaw/pull/6330), [#5825](https://agentscope-ai/QwenPaw/pull/5825), [#5940](https://agentscope-ai/QwenPaw/pull/5940), [#5758](https://agentscope-ai/QwenPaw/pull/5758)), contributor style fix ([#3332](https://agentscope-ai/QwenPaw/pull/3332)), and Google Analytics migration.

*(All links are GitHub PRs under agentscope-ai/QwenPaw)*

---

## 4. Community Hot Topics
The most discussed issues and PRs (by comment count and reactions) reflect significant user pain points and active debugging:

- **MCP Server Reconnection Failure [#6524](https://agentscope-ai/QwenPaw/issues/6524)** (3 comments): Users report that after an MCP server restart, QwenPaw caches an invalid session ID and cannot recover until manually running `list mcp`. This affects remote `streamable_http` connections.

- **Skill Tag Disappearance on Restart [#6537](https://agentscope-ai/QwenPaw/issues/6537)** (2 comments): A regression of #3270 where skill tags saved via API are lost during startup manifest reconciliation. Affects skill pool management.

- **agent.json Systematic Corruption [#6520](https://agentscope-ai/QwenPaw/issues/6520)** (2 comments): A Windows-specific corruption causing BOM, missing quotes, and double-encoded Chinese text across ~20+ fields, completely breaking the system.

- **Scroll Context Compression Failure with DeepSeek [#6541](https://agentscope-ai/QwenPaw/issues/6541)** (1 comment): A targeted bug where the `[context compressed]` block is injected with `role=user` instead of `role=system`, causing `MODEL_EXECUTION_ERROR` on DeepSeek’s OpenAI-compatible API.

**Underlying need**: Users are demanding better session persistence, fallback handling, and cross-model compatibility. These issues highlight gaps in state recovery and provider-specific formatting.

---

## 5. Bugs & Stability
Bugs reported today (ranked by severity):

| Severity | Issue | Description | Fix PR Exists? |
|----------|-------|-------------|----------------|
| **Critical** | [#6520](https://agentscope-ai/QwenPaw/issues/6520) | `agent.json` systematic corruption – complete system failure on Windows | ✅ [#6528](https://agentscope-ai/QwenPaw/pull/6528) (open, first-time contributor) |
| **Critical** | [#6534](https://agentscope-ai/QwenPaw/issues/6534) | NSIS installer infinite loop – "still running" check matches installer process, blocking installation | ❌ |
| **High** | [#6524](https://agentscope-ai/QwenPaw/issues/6524) | MCP backend restart causes permanent session failure | ❌ |
| **High** | [#6541](https://agentscope-ai/QwenPaw/issues/6541) | Scroll context compression triggers `MODEL_EXECUTION_ERROR` on DeepSeek | ❌ |
| **High** | [#6537](https://agentscope-ai/QwenPaw/issues/6537) | Skill tags lost on restart (regression) | ❌ |
| **Medium** | [#6533](https://agentscope-ai/QwenPaw/issues/6533) | `/mission` command throws `TypeError` due to signature mismatch | ❌ |
| **Medium** | [#6529](https://agentscope-ai/QwenPaw/issues/6529) | ACP `new_session` response missing `models` field – external clients cannot discover models | ✅ [#6531](https://agentscope-ai/QwenPaw/pull/6531) (open, first-time contributor) |
| **Closed** | [#6474](https://agentscope-ai/QwenPaw/issues/6474) | `view_video` silently drops video data before reaching LLM | Closed; no PR linked |
| **Closed** | [#6501](https://agentscope-ai/QwenPaw/issues/6501) | Development install docs omit `test` extra | Closed |

---

## 6. Feature Requests & Roadmap Signals
Several feature requests and in-flight PRs indicate where the project is headed:

- **Sub-Agent Isolation [#6509](https://agentscope-ai/QwenPaw/issues/6509)**: Users request that Sub Agents cannot call each other and that per-session workspace resources are fully isolated (UUID-based directories). This is a multi-tenant security concern.

- **Auto-Save Mechanism [#6542](https://agentscope-ai/QwenPaw/issues/6542)**: A flash-crash recovery feature – automatic periodic saving of conversation history to prevent data loss. Likely to be prioritized given its impact on user trust.

- **RobotFramework Syntax Highlighting** (closed [#6403](https://agentscope-ai/QwenPaw/issues/6403)): Already implemented.

**In-progress features (open PRs) likely for next release:**
- **Desktop GUI Automation** – `computer_use` builtin tool for Windows & macOS ([#6424](https://agentscope-ai/QwenPaw/pull/6424))
- **Per-Session Model Overrides** – allows different LLM per conversation without changing default ([#5992](https://agentscope-ai/QwenPaw/pull/5992))
- **User Context Transparency** – `user_id`/`user_name`/`channel` propagated through the entire pipeline ([#6525](https://agentscope-ai/QwenPaw/pull/6525))
- **Cancellation-Safe Lifecycle Hooks** – persist interrupted state on cancel ([#6527](https://agentscope-ai/QwenPaw/pull/6527))
- **Safe Model Discovery** – infrastructure for automatic model list retrieval from providers ([#6302](https://agentscope-ai/QwenPaw/pull/6302))
- **Workspace Checkpoints** – recoverable conversation history via Git-based checkpoints ([#6269](https://agentscope-ai/QwenPaw/pull/6269))

---

## 7. User Feedback Summary
**Pain points:**
- **Data loss**: Session history lost on crash/flash exit ([#6542](https://agentscope-ai/QwenPaw/issues/6542)) – causes frustration for users with long-running conversations.
- **Configuration fragility**: `agent.json` corruption on Windows ([#6520](https://agentscope-ai/QwenPaw/issues/6520)) – breaks the entire system and is hard to recover without manual fixing.
- **Integration failures**: ACP missing models field ([#6529](https://agentscope-ai/QwenPaw/issues/6529)) blocks external agent clients (e.g., Multica daemon) from working properly.
- **Windows installer**: NSIS infinite loop ([#6534](https://agentscope-ai/QwenPaw/issues/6534)) makes installation impossible for some users.

**User needs:**
- Reliable reconnection after infrastructure changes (MCP restart, [#6524](https://agentscope-ai/QwenPaw/issues/6524)).
- Stable skill pool metadata persistence ([#6537](https://agentscope-ai/QwenPaw/issues/6537)).
- Isolation and multi-tenancy for sub-agents ([#6509](https://agentscope-ai/QwenPaw/issues/6509)).

**Satisfaction signals:** The community is actively contributing – multiple “first-time-contributor” PRs ([#6528](https://agentscope-ai/QwenPaw/pull/6528), [#6531](https://agentscope-ai/QwenPaw/pull/6531), [#6331](https://agentscope-ai/QwenPaw/pull/6331), [#5992](https://agentscope-ai/QwenPaw/pull/5992)) show a healthy, welcoming open-source environment.

---

## 8. Backlog Watch
Issues and PRs that have been open for a significant time without maintainer response or merge:

- **PR #5992 – Per-session model overrides** (created 2026-07-12, 17 days open) – A substantial feature from a first-time contributor; needs review and decision.

- **PR #6151 – Background tool call offload refactor** (created 2026-07-15, 14 days open) – Dual-deadline architecture to fix three bugs; waiting for maintainer feedback.

- **PR #6269 – Workspace checkpoint management** (created 2026-07-20, 9 days open) – Important data-recovery feature; no recent comments.

- **PR #6302 – Safe model discovery infrastructure** (created 2026-07-21, 8 days open) – Foundational change for provider integration; needs broader review.

- **Issue #6524 – MCP reconnect bug** (created 2026-07-28, 1 day old but already 3 comments) – Quickly reported and discussed; no assigned fix yet.

**Recommendation**: Maintainers should prioritize reviewing the older feature PRs (#5992, #6151, #6269) to avoid stagnation, and address the critical installer bug (#6534) and agent.json corruption (#6520) with high urgency.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw Project Digest – 2026-07-29

## 1. Today's Overview
ZeptoClaw saw minimal activity in the past 24 hours. No new issues were opened or updated, and no releases were published. The only activity consisted of two automated dependency updates (Dependabot) for the project’s Rust base Docker image. One pull request was closed (merged), and another remains open. Overall, the project appears to be in a low-activity maintenance phase, with no community engagement or feature development visible in the current data window.

## 2. Releases
**None** – No new releases were published in the last 24 hours.

## 3. Project Progress
- **#613 (Closed/Merged)** – chore(deps): bump rust from 1.95-slim-trixie to 1.96-slim-trixie  
  *Author: dependabot[bot] – Updated: 2026-07-28*  
  This routine dependency upgrade was merged, ensuring the Docker build environment uses an updated Rust toolchain.  
  [PR #613](https://github.com/qhkm/zeptoclaw/pull/613)

- **#649 (Open)** – chore(deps): bump rust from 1.95-slim-trixie to 1.97-slim-trixie  
  *Author: dependabot[bot] – Updated: 2026-07-28*  
  A follow‑up bump to the next Rust version, currently open and awaiting review or merge.  
  [PR #649](https://github.com/qhkm/zeptoclaw/pull/649)

No feature work or bug fixes were advanced in the reported time frame.

## 4. Community Hot Topics
No issues or pull requests received comments or reactions in the last 24 hours. The only items updated are Dependabot‑generated dependency bumps, which generated no community discussion. The project shows no active community conversations at this time.

## 5. Bugs & Stability
No bugs, crashes, or regressions were reported in the last 24 hours. The project appears stable from a defect perspective, though the lack of reported issues does not guarantee absence of latent problems.

## 6. Feature Requests & Roadmap Signals
No feature requests or roadmap signals were observed. The only changes are automated dependency upgrades, indicating no active user‑driven feature proposals or maintainer‑indicated direction in the current data.

## 7. User Feedback Summary
No user feedback, pain points, or use‑case descriptions were captured in the last 24 hours. The project currently lacks visible community discourse to assess satisfaction or dissatisfaction.

## 8. Backlog Watch
No long‑unanswered issues or pull requests were identified. The only open PR (#649) was created less than 24 hours ago and is a routine dependency update. The zero‑issue backlog suggests either a well‑maintained project or low community usage; maintainers should monitor for any emerging concerns.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-07-29

## 1. Today’s Overview
The project remains highly active with **49 issues** and **50 pull requests** updated in the last 24 hours, reflecting intense development and community engagement. However, **no PRs were merged or closed**, and **zero new releases** were published, indicating a day dominated by review, iteration, and problem identification rather than delivery. Security, channel integration, and runtime stability dominate the conversation, with several `priority:p1` bugs and RFCs waiting for maintainer decisions. The balance of open/closed issues (42 open, 7 closed) points to a growing backlog, but the steady stream of updates shows that maintainers and contributors are actively triaging.

## 2. Releases
*No new releases were issued on 2026-07-29.* The latest available version remains **0.8.3** (as reported in a recent bug report). Users should continue to build from `master` for the latest fixes.

## 3. Project Progress
**Pull requests merged/closed today:** **0** – all 50 PRs remain open.  
**Issues closed today:** 7 issues were closed in the last 24 hours, representing progress in several areas:
- **#9357** – A critical CI flakiness bug (`cargo test -p zeroclaw-runtime --lib` failing in 19/20 runs) was closed, likely after a fix landed.  
- **#9474** – An auth profile store migration bug (blocked workflows due to `model_provider` rename) was closed.  
- **#9471** – A dormant cron test module was retired.  
- **#9380** – A vendored WIT drift issue was resolved.  
- **#9178** – The ACP embedded resource blob feature was closed.  
- Two other minor issues (#? not listed but counted) were closed.  

These closures show steady cleanup and stabilization, though the lack of merged PRs suggests that fixes are still in review pipeline.

## 4. Community Hot Topics
The following issues and PRs attracted the most comments and activity:

| Issue/PR | Title | Comments | Key Concerns |
|----------|-------|----------|--------------|
| [#9127](https://github.com/zeroclaw-labs/zeroclaw/issues/9127) | RFC: Abstract a `KeySource` trait | 8 | Master-key classification, security architecture |
| [#6157](https://github.com/zeroclaw-labs/zeroclaw/issues/6157) | [Bug]: Nextcloud Talk use correct bot message API | 6 | Channel integration failure, high risk |
| [#9357](https://github.com/zeroclaw-labs/zeroclaw/issues/9357) | [Bug]: cargo test fails on master (now closed) | 6 | CI reliability, global mutex poisoning |
| [#8654](https://github.com/zeroclaw-labs/zeroclaw/issues/8654) | [Bug]: skill-review fork panics → SIGSEGV | 5 | Runtime crash, tool-heavy turns |
| [#6724](https://github.com/zeroclaw-labs/zeroclaw/issues/6724) | [Bug]: Empty credentials crashloop supervisor | 4 | Supervisor stability, configuration edge case |
| [#8850](https://github.com/zeroclaw-labs/zeroclaw/issues/8850) | RFC: Move optional channels & tools to runtime plugins | 4 | Architecture evolution, binary size reduction |
| [#9487](https://github.com/zeroclaw-labs/zeroclaw/issues/9487) | RFC: Runtime-owned conversation sessions | 3 | Session lifecycle architecture |
| [#9488](https://github.com/zeroclaw-labs/zeroclaw/issues/9488) | RFC: Unified attachment architecture | 3 | Web chat & channels attachment handling |
| [#9397](https://github.com/zeroclaw-labs/zeroclaw/issues/9397) | RFC: Treat empty WhatsApp `allowed_groups` as permit-none | 3 | Security configuration |
| [#8965](https://github.com/zeroclaw-labs/zeroclaw/pull/8965) | PR: feat(skills): declarative auto-activation | *high activity* | Skills, provider switch, image-turn blocking |

**Underlying needs:**  
- **Security hardening** – Multiple RFCs (#9127, #9397) address credential routing, key material, and access controls.  
- **Channel reliability** – Nextcloud Talk (#6157), Signal/Voice crashloop (#6724), and Telegram precheck silence (#9465) show that channel integrations are a persistent pain point.  
- **Architecture simplification** – RFCs #8850, #9487, #9488 propose moving from compile-time features to runtime plugins and unifying session/attachment handling, which would reduce code complexity and improve extensibility.

## 5. Bugs & Stability
Several high-severity bugs were discussed or active today. Outstanding `risk:high` bugs (ranked by severity):

| Issue | Title | Severity | Fix PR? |
|-------|-------|----------|---------|
| [#8654](https://github.com/zeroclaw-labs/zeroclaw/issues/8654) | skill-review fork panics → daemon SIGSEGV | S2 (degraded behavior) | No PR linked yet |
| [#6724](https://github.com/zeroclaw-labs/zeroclaw/issues/6724) | Empty credentials crashloop supervisor | S2 (degraded behavior) | No PR linked |
| [#9332](https://github.com/zeroclaw-labs/zeroclaw/issues/9332) | Multimodal context meter undercount | S2 (major workflow degradation) | No PR linked |
| [#9284](https://github.com/zeroclaw-labs/zeroclaw/issues/9284) | Config flush overwrites concurrent writes | S2 (degraded behavior) | No PR linked |
| [#9474](https://github.com/zeroclaw-labs/zeroclaw/issues/9474) | Auth profile store fails (now closed) | S1 (blocked) | Closed – fix landed |
| [#9492](https://github.com/zeroclaw-labs/zeroclaw/issues/9492) | `auth refresh` dead-ends on rotated token | S1 (blocked) | No PR linked |
| [#9486](https://github.com/zeroclaw-labs/zeroclaw/issues/9486) | High-entropy detector redacts wallet addresses | S2 (degraded) | No PR linked |
| [#9357](https://github.com/zeroclaw-labs/zeroclaw/issues/9357) | CI test flakiness (now closed) | S2 (degraded) | Closed – fix likely in PR #? |
| [#6157](https://github.com/zeroclaw-labs/zeroclaw/issues/6157) | Nextcloud Talk wrong API | S3 (minor) | No PR linked |
| [#9462](https://github.com/zeroclaw-labs/zeroclaw/issues/9462) | Plugin unit tests never execute in CI | S3 (minor) | No PR linked |

**Notable fix PRs in review:**  
- [#9410](https://github.com/zeroclaw-labs/zeroclaw/pull/9410) – Default command audit logging to disabled (fixes #9391, security).  
- [#9401](https://github.com/zeroclaw-labs/zeroclaw/pull/9401) – Preserve shell cwd across sandbox wrappers (regression fix).  
- [#9418](https://github.com/zeroclaw-labs/zeroclaw/pull/9418) – Multiplex stdio MCP calls without replaying outcomes.  
- [#9478](https://github.com/zeroclaw-labs/zeroclaw/pull/9478) – Notify sender when precheck declines (fixes #9465).  

Many critical bugs remain open with no fix PR attached, especially in runtime/daemon (`skill-review panic`, `config flush race`). This indicates the team is prioritizing higher-impact security and channel fixes over deep runtime rewrites.

## 6. Feature Requests & Roadmap Signals
The following issues and RFCs signal upcoming directions:

| Item | Title | Impact | Likely Next Version Candidate |
|------|-------|--------|------------------------------|
| [#8850](https://github.com/zeroclaw-labs/zeroclaw/issues/8850) | Move optional channels & tools to WASM plugins | Shrinks binary, runtime extensibility | Yes – voted by multiple maintainers |
| [#9487](https://github.com/zeroclaw-labs/zeroclaw/issues/9487) | Runtime-owned conversation sessions | Decouples transport from execution | Yes – foundational refactor |
| [#9488](https://github.com/zeroclaw-labs/zeroclaw/issues/9488) | Unified attachment architecture | Web chat + channels parity | Yes – depends on #9487 |
| [#9464](https://github.com/zeroclaw-labs/zeroclaw/issues/9464) | Anthropic stored-profile OAuth alias | Provider authentication simplification | Likely – PR #9420 already implements |
| [#9323](https://github.com/zeroclaw-labs/zeroclaw/issues/9323) | Execution-tree iteration budget ownership | Prevents unbounded sub-agent loops | Possible – requires architecture decision |
| [#9171](https://github.com/zeroclaw-labs/zeroclaw/issues/9171) | Make ZeroCode modifier semantics independent | QoL for macOS users | Likely – tracked by maintainer |
| [#9521](https://github.com/zeroclaw-labs/zeroclaw/issues/9521) | Map MCP image content blocks into vision pipeline | Better vision support for Qwen etc. | Likely – fits current provider work |
| [#8965](https://github.com/zeroclaw-labs/zeroclaw/pull/8965) | Declarative skill auto-activation | Major skills enhancement | Yes – high community interest |

The roadmap is clearly moving toward **plugin-based architecture**, **unified session ownership**, and **improved multimodal support**. These are expected to land in the next minor release (0.9.0) assuming maintainer bandwidth.

## 7. User Feedback Summary
From issue descriptions and comments, users express:

- **Pain points:**
  - Configuration/crash edge cases: Empty credentials crashloop (#6724), config flush race (#9284), dangling peer_group refs (#8997 tracked in PR #9311).
  - Provider authentication friction: OAuth token rotation (#9492), model_provider migration (#9474).
  - False positive redaction: Solana wallet addresses blocked in Telegram (#9486).
  - Silent failures: Precheck declining without text (#9465), agent idling after context exhaustion (#8758).
  - Channel integration: Nextcloud Talk broken (#6157), WhatsApp empty group semantics (#9397).
- **Use cases:**
  - Deployment in production via Signal, Telegram, WhatsApp channels.
  - Multi-provider setups with fallback (reliable provider issues #9470, #9419).
  - Large-scale multi-turn conversations hitting context limits.
- **Satisfaction indicators:**
  - Active bug reporting and RFC drafting by the community; many issues come with detailed reproduction steps and proposed solutions (e.g., #9127, #9284).
  - PRs by contributors like IftekharUddin, ATECHPCS, and metalmon show sustained engagement.
- **Dissatisfaction points:**
  - The number of open `risk:high` bugs (18+ in the top 30 only) suggests users are encountering regressions frequently.
  - Several issues tagged `needs-maintainer-review` or `needs-author-action` have been open for weeks (e.g., #9127 since July 18, #9397 since July 26), implying slow decision-making.

## 8. Backlog Watch
Issues and PRs that have been open for extended periods or have critical `needs-maintainer-review` labels:

| Item | Created | Label | Reason for Watch |
|------|---------|-------|------------------|
| [#9127](https://github.com/zeroclaw-labs/zeroclaw/issues/9127) | 2026-07-18 | `needs-maintainer-review`, `risk:high` | RFC on master-key trait; 8 comments, no maintainer response. |
| [#9397](https://github.com/zeroclaw-labs/zeroclaw/issues/9397) | 2026-07-26 | `needs-maintainer-review`, `domain:security` | WhatsApp security RFC; 3 comments, awaiting sponsorship. |
| [#9464](https://github.com/zeroclaw-labs/zeroclaw/issues/9464) | 2026-07-27 | `needs-maintainer-review` | Anthropic OAuth contract; two comments, open for 2 days but labeled. |
| [#9323](https://github.com/zeroclaw-labs/zeroclaw/issues/9323) | 2026-07-24 | `needs-maintainer-review` | Execution budget RFC; 2 comments. |
| [#8691](https://github.com/zeroclaw-labs/zeroclaw/issues/8691) | 2026-07-04 | `type:tracker` | ADR baseline audit tracker; no updates since creation. |
| [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) | 2026-07-04 | `type:tracker` | Maintainer decision queue; 1 comment. |
| [#7904](https://github.com/zeroclaw-labs/zeroclaw/issues/7904) | 2026-06-17 | `risk:medium` | `always-inject` frontmatter broken in compact mode; untouched for a month. |
| [#6157](https://github.com/zeroclaw-labs/zeroclaw/issues/6157) | 2026-04-27 | `risk:high`, `status:accepted` | Nextcloud Talk API bug accepted but unfixed for 3 months. |
| [#6724](https://github.com/zeroclaw-labs/zeroclaw/issues/6724) | 2026-05-16 | `status:no-stale`, `risk:high` | Crashloop bug open for 2.5 months with no PR. |
| PR [#8965](https://github.com/zeroclaw-labs/zeroclaw/pull/8965) | 2026-07-11 | `needs-author-action` | Large PR (XL) for skills auto-activation; author is unresponsive since July 11. |

**Maintainer attention needed:** The `needs-maintainer-review` backlog, especially for security RFCs (#9127, #9397, #9464), is growing. The long-standing bugs #6157 and #6724 have been accepted but not acted upon for months, which may erode community confidence. The PR queue also has many `needs-author-action` items; maintainers may need to ping contributors or close stale PRs.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/boom7sss/agents-radar).*