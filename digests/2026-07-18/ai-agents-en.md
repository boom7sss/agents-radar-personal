# OpenClaw Ecosystem Digest 2026-07-18

> Issues: 425 | PRs: 500 | Projects covered: 13 | Generated: 2026-07-18 02:56 UTC

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

# OpenClaw Project Digest — 2026-07-18

## 1. Today’s Overview

Project activity remains exceptionally high, with **425 issues** and **500 PRs** updated in the last 24 hours—a clear sign of a fast-moving codebase and engaged community. A new **beta release (v2026.7.2-beta.2)** shipped with headline features around remote coding sessions and native automation nodes, though a Late-stage migration bug (`#109867`) temporarily blocked gateway startup for some upgraders. Security and stability themes dominate the day’s conversations, with multiple P0/P1 regressions under active investigation and a steady stream of fixes landing for OAuth, Codex integration, and credential handling.

## 2. Releases

**v2026.7.2-beta.2** (new)  
🔗 [Release page](https://github.com/openclaw/openclaw/releases/tag/v2026.7.2-beta.2)

| Category | Details |
|----------|---------|
| **Highlights** | • **Remote coding sessions** – Run Control UI sessions on cloud workers; open Codex and Claude catalog sessions in terminals on their owning hosts; resume OpenCode and Pi sessions directly in a terminal. <br> • **Native automation and nodes** – (description truncated in source) |
| **Migration notes** | ⚠️ **State migration ordering bug** (`#109867`): The beta.2 migration creates an index on `managed_outgoing_image_records.agent_id` *before* adding that column, causing `doctor --fix` to fail. Users upgrading from `2026.7.2-beta.1` should apply a manual workaround or wait for a patch. |

No explicit breaking changes are documented outside the known migration issue.

## 3. Project Progress

**198 PRs merged/closed** in the last 24 hours. Key areas of progress include:

- **Codex integration fixes**: `#88312` (turn-completion stall) and `#95121` (latency regression) both closed. `#91352` (OAuth migration stale profile) resolved.
- **Session & lifecycle improvements**: `#50248` (session cleanup pruning valid cron transcripts) fixed; `#45314` (early abort template variables) closed; `#108344` (in-flight cron session eviction) addressed.
- **Performance & resource management**: `#76171` (stale worker process accumulation) closed; `#106231` (loop detection not terminating agent run) has a fix-in-progress.
- **Provider & model handling**: `#92479` (Zen provider missing model catalog) closed; multiple PRs landed for input validation (Baseten, Anthropic, Telegram) and credential bounding (iMessage, QA Lab).
- **Android & macOS parity**: `#110347` and `#109329` introduce session groups and inline dictation; `#110315` refactors Android composer state.

## 4. Community Hot Topics

| Issue/PR | Comments | 👍 | Summary & Underlying Need |
|---|---|---|---|
| [#75 – Linux/Windows Clawdbot Apps](https://github.com/openclaw/openclaw/issues/75) | 113 | 81 | Long-standing feature request for native desktop apps on Linux and Windows. Users want parity with macOS/iOS functionality. |
| [#88312 – Codex turn-completion stall](https://github.com/openclaw/openclaw/issues/88312) (CLOSED) | 21 | 5 | Regression causing multi-tool agent turns to fail silently. Indicates sensitivity of Codex integration to runtime changes. |
| [#7707 – Memory Trust Tagging by Source](https://github.com/openclaw/openclaw/issues/7707) | 17 | 0 | Proposal to tag memory entries by source trust level to prevent prompt injection / memory poisoning. Security-conscious users want defense-in-depth. |
| [#10659 – Masked Secrets](https://github.com/openclaw/openclaw/issues/10659) | 14 | 4 | Agents should use API keys without seeing them. Highlights growing concern over credential leaks through prompt injection. |

The community is clearly **vocal about security and platform completeness**. The top issue (`#75`) has been open since January and remains a high-priority feature gap.

## 5. Bugs & Stability

**P0 (critical) regressions reported today:**

| Issue | Summary | Status |
|---|---|---|
| [#109867](https://github.com/openclaw/openclaw/issues/109867) | Beta.2 state migration creates `agent_id` index before column addition → gateway fails to start | **Open**, PR #110? not yet linked; reported by 5 users |
| [#108435](https://github.com/openclaw/openclaw/issues/108435) | Gateway fails to start on `2026.7.1` with systemd/Ollama/manual – regression | **Open**, needs maintainer review |
| [#101763](https://github.com/openclaw/openclaw/issues/101763) | Hosted Molty model selector sends dotted ID (`claude-opus-4.8`) → API failure | **Open**, P0, affects hosted users |

**P1 regressions under active investigation:**

- `#108075` – 2026.7.1 agent fails with `provider rejected … schema or tool payload`
- `#107873` – Embedded prompt-lock session takeover aborts WebChat turns after tool failure
- `#106779` – Local `llama.cpp` provider fails with parser generation error on 2026.7.1
- `#78562` – Repeated tool-loop context overflows cause auto-compaction loops (v2026.5.5)

**Notable closed stabiles:** `#88312` (Codex regression), `#91352` (OAuth drift), `#50248` (session cleanup false positives).

Most P0/P1 issues have `needs-maintainer-review` or `needs-live-repro` labels, indicating maintainers are actively triaging.

## 6. Feature Requests & Roadmap Signals

High-impact feature requests that are likely candidates for the next minor release:

| Issue | Request | Community Support | Likelihood |
|---|---|---|---|
| [#75](https://github.com/openclaw/openclaw/issues/75) | Linux/Windows native apps | 81 👍, 113 comments | **High** – long-running, maintainer-acknowledged |
| [#10659](https://github.com/openclaw/openclaw/issues/10659) | Masked secrets (agents use API keys without seeing them) | 4 👍, P1 | **Medium-High** – security team actively working on similar issues |
| [#7707](https://github.com/openclaw/openclaw/issues/7707) | Memory trust tagging by source | 0 👍 (but high comment count) | **Medium** – design still in discussion |
| [#9986](https://github.com/openclaw/openclaw/issues/9986) | Trigger model fallback on context length exceeded | 0 👍, 5 comments | **Low-Medium** – blocked by `needs-product-decision` |
| [#7722](https://github.com/openclaw/openclaw/issues/7722) | Filesystem sandboxing (`tools.fileAccess`) | 4 👍, 9 comments | **Medium** – complements masked secrets security work |
| [#90916](https://github.com/openclaw/openclaw/issues/90916) | Topic-session families (isolated context lanes) | 2 👍, 8 comments | **Low-Medium** – complex feature, awaiting product decision |

The release notes for `v2026.7.2-beta.2` hint at continued investment in **remote sessions and automation**, suggesting these will be core themes for Q3.

## 7. User Feedback Summary

**Pain points (repeated across issues):**

- **Missing Linux/Windows apps**: users rely on web/app workarounds; desire parity with macOS.
- **Security without friction**: many requests for sandboxing, secret masking, and permission manifests – users want safety without breaking existing workflows.
- **Unreliable provider integration**: Codex OAuth migrations, Anthropic model naming, Ollama parser errors – all cause sudden breakage.
- **UX friction in Telegram/TUI**: hardcoded Markdown, missing newline support, inaccessible emoji – small but frequent annoyances.

**Positive signals:**

- Maintainers are responsive – many issues show labels like `clawsweeper:fix-shape-clear` or `linked-pr-open`.
- The community is collaborative: multiple issues contain detailed reproduction steps and logs.
- Release notes indicate active development on remote sessions, a feature many power users requested.

**Frustration hotspots:** Regressions in stable releases cause the most vocal feedback (e.g., `#88312`, `#108435`). Users “want to trust” the upgrade path.

## 8. Backlog Watch

Issues and PRs that have been awaiting maintainer action for an unusually long time:

| Item | Created | Last Updated | Issue/PR | Staleness Indicator |
|---|---|---|---|---|
| [#75](https://github.com/openclaw/openclaw/issues/75) – Linux/Windows apps | 2026-01-01 | 2026-07-18 | Issue | 199 days open; `help wanted`, `needs-maintainer-review` |
| [#7707](https://github.com/openclaw/openclaw/issues/7707) – Memory trust tagging | 2026-02-03 | 2026-07-18 | Issue | 166 days; `needs-product-decision` |
| [#7722](https://github.com/openclaw/openclaw/issues/7722) – Filesystem sandboxing | 2026-02-03 | 2026-07-18 | Issue | 166 days; `needs-security-review` |
| [#10687](https://github.com/openclaw/openclaw/issues/10687) – Dynamic model discovery | 2026-02-06 | 2026-07-18 | Issue | 162 days; `needs-product-decision` |
| [#12219](https://github.com/openclaw/openclaw/issues/12219) – Skill permission manifest | 2026-02-09 | 2026-07-18 | Issue | 159 days; `needs-security-review` |
| [#100140](https://github.com/openclaw/openclaw/pull/100140) – Cross-conversation memory | 2026-07-05 | 2026-07-18 | PR | 13 days; `status: ⏳ waiting on author` |
| [#109155](https://github.com/openclaw/openclaw/pull/109155) – Ollama model pull hang fix | 2026-07-16 | 2026-07-18 | PR | 2 days; `status: ⏳ waiting on author` (author needs to address review) |

**Recommendation**: Security-related features (`#7707`, `#7722`, `#12219`) have been stalled for months waiting on product/security decisions. A dedicated security sprint could unblock multiple community requests at once. The older issues (`#75`, `#10687`) are good candidates for a roadmap commitment to improve community confidence.

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: Personal AI Assistant Open-Source Ecosystem

**Date:** 2026-07-18  
**Analyst:** Senior Ecosystem Analyst

---

## 1. Ecosystem Overview

The personal AI assistant open-source landscape is experiencing a bifurcation between **rapidly maturing reference platforms** (OpenClaw, IronClaw, ZeroClaw) and **lightweight, specialized agents** (NanoBot, NanoClaw, PicoClaw). Activity across the ecosystem is exceptionally high, with over 650 issues and 750 PRs updated across tracked projects in just 24 hours. A clear thematic shift is underway: projects are moving from prototype-stage feature velocity toward **production-grade reliability**, with security hardening (supply-chain signing, credential masking, sandboxing), cross-platform parity, and inter-agent protocols emerging as consensus priorities. While no single project has achieved market dominance, the ecosystem is consolidating around a few core reference architectures, with OpenClaw serving as the most comprehensive integration platform.

---

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Release Today | Health Score | Notes |
|---------|-------------|-----------|---------------|--------------|-------|
| **OpenClaw** | 425 | 500 | ✅ v2026.7.2-beta.2 | **Strong** | Dominant contributor activity; 198 PRs merged |
| **ZeroClaw** | 50 | 50 | ❌ | **Strong** | 13 PRs merged; proactive security fixes |
| **IronClaw** | 50 | 50 | ❌ | **Strong** | 25 PRs merged; rapid Reborn platform progress |
| **CoPaw** | 22 | 35 | ✅ v2.0.0.post3 | **Active** | 20 PRs merged; Windows regressions pulling down |
| **Hermes Agent** | 50 | 50 | ❌ | **Strained** | 3 PRs merged; many P1 bugs without fix PRs |
| **NanoClaw** | 4 | 15 | ❌ | **Moderate** | 3 PRs merged; strong bug-fix response |
| **LobsterAI** | 7 | 15 | ✅ 2026.7.16 | **Moderate** | 13 PRs merged; UI polish focus |
| **PicoClaw** | 4 | 12 | ❌ | **Moderate** | 2 PRs merged; channel parity gap |
| **NanoBot** | 2 | 11 | ❌ | **Moderate** | 4 PRs merged; clean, focused development |
| **Moltis** | 1 | 2 | ✅ 2 patch releases | **Low/Stable** | No PRs merged; iterative patches |
| **NullClaw** | 1 | 0 | ❌ | **Dormant** | Critical crash bug unfixed; no maintainer response |
| **ZeptoClaw** | 8 | 0 | ❌ | **Chore-Only** | Routine metadata updates; no development |
| **TinyClaw** | 0 | 0 | ❌ | **Inactive** | No activity in 24h |

---

## 3. OpenClaw's Position

**Advantages over peers:**
- **Scale of community engagement:** 425 issues and 500 PRs updated in 24h exceeds the combined activity of the next three most active projects (ZeroClaw, IronClaw, Hermes). This indicates the largest contributor base and fastest iteration cycle.
- **Release velocity:** Shipping beta releases with real features (remote coding sessions, native automation nodes) while peers are primarily in patch/fix cycles.
- **Comprehensive integration surface:** Codex, Claude, Anthropic, Zen, Telegram, iMessage, Ollama – OpenClaw supports more provider backends and channel integrations than any competitor.
- **Security-first architecture:** Active work on masked secrets, memory trust tagging, and filesystem sandboxing – topics that other projects are only beginning to discuss.

**Technical approach differences:**
- OpenClaw uses a **component-based architecture** with a central gateway (`clawdbot`), whereas IronClaw/ZeroClaw are pursuing modular "Reborn" refactors. This gives OpenClaw faster integration at the cost of architectural debt.
- Unlike NanoBot/NanoClaw which prioritize **lightweight deployment** (single-binary, minimal dependencies), OpenClaw targets **enterprise-grade orchestration** with session management, automation pipelines, and multi-platform support.

**Community size comparison:**
- OpenClaw's top feature request (#75, Linux/Windows apps) has 81 👍 and 113 comments – more engagement than any single issue in any other project.
- The project shows clearer **maintainer responsiveness** (dedicated labels like `clawsweeper:fix-shape-clear`) compared to Hermes or CoPaw where issues often lack maintainer comments.

**Key vulnerability:** The beta.2 migration bug (#109867) threatens user trust during upgrades – a lesson other projects (IronClaw, ZeroClaw) have managed better by postponing breaking changes to major releases.

---

## 4. Shared Technical Focus Areas

### 4.1 Security & Credential Management

| Need | Projects | Specific Requests |
|------|----------|-------------------|
| Masked secrets / API key isolation | **OpenClaw** (#10659), **ZeroClaw** (#5869, #9110) | Agents should use keys without seeing them; timing-attack-safe verification |
| Supply-chain signing | **ZeroClaw** (#8177), **OpenClaw** (implicit in release process) | Hermetic builds, SLSA provenance, hardware PGP |
| Filesystem sandboxing | **OpenClaw** (#7722), **ZeroClaw** (#9114), **CoPaw** (#5187) | Landlock allowlist expansion, bubblewrap config |
| OAuth reliability | **PicoClaw** (#3239), **OpenClaw** (#91352) | Shared OAuth refresh logic, race condition fixes |

### 4.2 Cross-Platform Support

| Need | Projects | Specific Requests |
|------|----------|-------------------|
| Native Linux/Windows apps | **OpenClaw** (#75 – 81👍), **Hermes** (#51448, #63717) | macOS/iOS parity; WSL2 workarounds insufficient |
| Windows desktop reliability | **CoPaw** (#6161, #6169), **Hermes** (#63717, #62734) | UAC elevation, terminal tool console windows |
| ARM64/aarch64 stability | **NullClaw** (#976), implied in OpenClaw | Thread stack sizing, container compatibility |

### 4.3 Provider Integration Reliability

| Need | Projects | Specific Issues |
|------|----------|-----------------|
| Model provider fallback | **OpenClaw** (#9986), **NanoBot** (#4961) | Context length exceeded handling; hardcoded temperature overrides |
| Codex/OAuth migration stability | **OpenClaw** (#88312, #91352), **Hermes** (#66641) | Turn-completion stalls, stale profiles |
| Custom provider support | **NanoClaw** (#3074), **Hermes** (#66544) | OpenRouter silent drops; `ssl_ca_cert` ignored |

### 4.4 Session & Memory Management

| Need | Projects | Specific Requests |
|------|----------|-------------------|
| Cross-session memory / context isolation | **OpenClaw** (#7707), **IronClaw** (#4644), **CoPaw** (#6227) | Topic-based routing, per-chat MCP selection |
| Session state robustness | **Hermes** (#66661–#66667), **NanoClaw** (#3078) | Draft bleed, session forking, lineage tracking |
| Memory auto-consolidation | **Hermes** (#61433), **OpenClaw** (#78562) | Overflow → compaction rather than hard reject |

### 4.5 Real-Time & Channel Parity

| Need | Projects | Specific Requests |
|------|----------|-------------------|
| Streaming / typing presence on all channels | **PicoClaw** (#3201, #3240), **CoPaw** (Feishu) | QQ lacks streaming; WhatsApp lacks typing indicator |
| Session groups / context lanes | **OpenClaw** (#90916), **Hermes** (#66670) | Topic-isolated sessions, cross-platform resume |

---

## 5. Differentiation Analysis

| Dimension | OpenClaw | IronClaw / ZeroClaw | NanoBot / NanoClaw | Hermes | LobsterAI / CoPaw |
|-----------|----------|---------------------|--------------------|--------|-------------------|
| **Target user** | Power users, enterprises | DevOps, multi-tenant operators | Individual developers, lightweight deployments | Advanced users, multi-platform | Consumer, UI-driven |
| **Primary architecture** | Component-based, gateway-centric | Modular "Reborn" refactor, filesystem-native | Minimal-dependency, provider-agnostic | Feature-rich monolith | Desktop app, AI skin customization |
| **Integration breadth** | 15+ providers, 6+ channels | 10+ providers, channels via plugins | 8+ providers, channel plugins | 12+ providers, WebUI + desktop | Limited providers, focus on UI polish |
| **Deployment complexity** | Medium (gateway + workers) | High (multi-service) | Low (single binary) | Medium-High | Medium (desktop install) |
| **State management** | Session memory, automation pipelines | Architectural simplification to disk stores | Provider-agnostic, minimal state | Desktop session groups | Cowork/chat sessions |
| **Security maturity** | Active: masked secrets, sandboxing | Strong: supply-chain signing, OIDC planning | Moderate: MCP security, credential handling | Weak: CVE-ridden deps, no sandboxing | Minimal: Windows permissions regressions |
| **Windows/Linux support** | Requested (#75) | Good (IronClaw), strong (ZeroClaw) | Good (NanoBot), moderate (NanoClaw) | Poor: regressions, WSL2 workarounds | Primary Windows focus |
| **Differentiator** | Ecosystem hub, broadest integrations | Production-ready foundations | Lightweight, fast iteration | Feature density, WebUI | Desktop UX, AI skin |

---

## 6. Community Momentum & Maturity

### Tier 1: High-Velocity Development (rapid iteration, breaking changes, large contributor bases)

- **OpenClaw** – 500+ PRs updated/day, major beta releases with new features. Scaling challenges: migration bugs, maintainer triage bandwidth.
- **IronClaw** – Rapid Reborn refactor with 50 PRs/day, massive deletion of legacy in-memory stores. Nearing v1 stability after architecture simplification.
- **ZeroClaw** – 50 PRs/day with strong security focus. Best at managing technical debt (dedicated RFC process). Targeting v0.9.0 with OIDC and A2A.

### Tier 2: Active Development (steady feature additions, occasional regressions)

- **Hermes Agent** – High bug report volume (50 issues/day) with slow fix closure. Strained maintainer capacity. Feature-rich but reliability-challenged.
- **CoPaw** – Active (35 PRs/day) but Windows regressions and upgrade friction hurting momentum. Chinese-speaking community is vocal.
- **NanoClaw** – Clean, focused development (15 PRs/day). Strong bug-fix response. Good candidate for stable integration.

### Tier 3: Stabilizing / Maintenance (patch releases, UI polish)

- **LobsterAI** – UI polish and campaign features. Low bug count. Consumer-oriented, not competing on infrastructure breadth.
- **NanoBot** – Small, focused team. Clean merge cadence. Provider integration specialization.
- **PicoClaw** – Steady but slow. Channel parity gap persists. Good for specific use cases (Chinese channels).
- **Moltis** – Iterative patches. Single feature request. Small community.

### Tier 4: Dormant / Inactive

- **NullClaw** – Critical crash unfixed for 2+ days. No maintainer activity.
- **ZeptoClaw** – Automated chore pipeline. No development activity.
- **TinyClaw** – Zero activity in 24h.

---

## 7. Trend Signals

### 7.1 Security-First Design Is Becoming Table Stakes

The ecosystem is moving beyond "add features fast" toward "secure by default." Projects actively investing in security (ZeroClaw's supply-chain signing, OpenClaw's masked secrets, IronClaw's immediate file-access fix) are gaining contributor trust. Projects that ignore security (Hermes' CVE-ridden dependencies, NullClaw's unfixed crash) risk losing community confidence. **Implication for developers:** Prioritize security features in new agent deployments; users will expect credential isolation and sandboxing as baseline.

### 7.2 The "Multimodal Wall" Has Arrived

Multiple projects report critical bugs in vision/multimodal processing (Hermes #66267 – infinite retry loops; NanoClaw #3074 – silent turn drops). The complexity of managing image content across model providers, context windows, and channels is a top-3 pain point. **Implication:** Teams building multimodal agents should budget significant engineering time for error handling and graceful degradation.

### 7.3 Cross-Platform Parity Is a Competitive Battleground

The long-running OpenClaw Linux/Windows app request (#75) with 81 👍 signals that web-only and macOS-first strategies are insufficient for enterprise adoption. Hermes and CoPaw's Windows regressions are actively hurting user satisfaction. **Implication:** Projects with native desktop apps for all three platforms (Windows, macOS, Linux) will have a significant adoption advantage. The lack of a single project offering this parity suggests an open market opportunity.

### 7.4 Inter-Agent Communication Is the Next Frontier

ZeroClaw's A2A protocol (#3566 with 8 comments, 7👍) and OpenClaw's session groups/remote coding features point to a future where agents are not isolated but orchestrated. The demand for multi-agent routing (#2767, 9👍) and per-session tool selection (#6227 in CoPaw) suggests users want agent networks, not single agents. **Implication:** Early investment in A2A or equivalent inter-agent protocols could create network effects and lock-in for the winning architecture.

### 7.5 "Production Ready" Means Configuration Simplicity

The most common frustration across projects is configuration complexity: missing migration docs (CoPaw #6155), daemon port conflicts (ZeroClaw #5628), cron job documentation gaps (ZeroClaw #7762). **Implication:** Winning projects will invest in CLI discoverability, migration tools, and runbooks – not just features. The "one-command setup" that IronClaw is building for Reborn (#6174) is a competitive differentiator.

### 7.6 Channel Real-Time Feedback Is Non-Negotiable

Users across projects demand streaming/typing indicators on all channels (PicoClaw QQ, WhatsApp; OpenClaw Telegram). The absence of real-time feedback is cited as a "dealbreaker" in community discussions. **Implication:** Any channel integration that doesn't support streaming or typing presence will be perceived as second-class. This is a low-effort, high-impact feature gap.

---

## Summary Recommendation for Technical Decision-Makers

| If you need... | Choose... | Because... |
|----------------|-----------|------------|
| Broadest provider/channel support | **OpenClaw** | Largest ecosystem, most integrations, most contributors |
| Production-grade security | **ZeroClaw** | Supply-chain signing, OIDC planning, fastest security fix response |
| Stable, lightweight agent | **NanoBot** or **NanoClaw** | Clean codebases, minimal dependencies, good bug-fix cadence |
| Desktop consumer experience | **LobsterAI** | Best UI polish, Windows native, AI skin customization |
| Multi-tenant enterprise deployment | **ZeroClaw** or **IronClaw** | RBAC, A2A protocol, architectural simplification for scale |
| Feature-rich single-agent | **Hermes Agent** (with caution) | Most features, active community, but reliability and security need monitoring |

The **highest-risk projects** are NullClaw (unfixed critical crash) and Hermes (maintainer bandwidth stretched across 50+ open bugs). The **highest-opportunity gap** is a stable, secure, cross-platform desktop agent that combines OpenClaw's integration breadth with ZeroClaw's security posture and LobsterAI's UI polish.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest – 2026-07-18

## Today's Overview
Activity remains steady with 2 issues closed and 11 pull requests updated in the last 24 hours. Four PRs were merged/closed, addressing critical provider-side bugs and polishing the WebUI. The project continues to show strong momentum in provider support (Moonshot Kimi K2.6 temperature fix, Kimi K3 integration, ModelScope provider) and channel decoupling. No new releases were published today, but the volume of open PRs (7) points to active development across multiple fronts.

## Releases
No new releases today.

## Project Progress
**Merged/Closed Pull Requests (4)**
- **#4958** – [zh-TW Traditional Chinese locale](https://github.com/HKUDS/nanobot/pull/4958): Improved translation quality for Traditional Chinese (Taiwan). *(closed)*
- **#4953** – [Native folder picker bridges for WebUI](https://github.com/HKUDS/nanobot/pull/4953): Allows external native hosts to advertise a folder-picker bridge via WebUI bootstrap, secured with a tab-scoped token. *(closed)*
- **#4962** – [Fix Moonshot kimi-k2.6 temperature override](https://github.com/HKUDS/nanobot/pull/4962): Corrected the hardcoded `model_overrides` entry from `1.0` to `0.6` to match Moonshot's updated API requirement. *(closed)*
- **#4967** – [Omit temperature for Moonshot Kimi K2.5/K2.6](https://github.com/HKUDS/nanobot/pull/4967): Stops sending `temperature` for these models, allowing Moonshot to select the fixed value based on thinking mode. *(closed)*

**Other Notable Open PRs (7)** – New features (ModelScope provider, Kimi K3, Render deploy, live image generation settings) and a major refactor of channel discovery are under review or pending merge.

## Community Hot Topics
The most active discussion today:
- **Issue #4968** – [Enhancement: Unbound cron jobs](https://github.com/HKUDS/nanobot/issues/4968) (4 comments, closed). The community questioned why unbound cron jobs are forbidden. The maintainers responded, and the issue was closed, likely after clarifying the design rationale.

All other issues and PRs had 0–1 comments, indicating focused development rather than heated debate.

## Bugs & Stability
**High severity (critical):**
- **#4961** – [Moonshot kimi-k2.6 temperature bug](https://github.com/HKUDS/nanobot/issues/4961) (closed): The provider registry hardcoded `temperature: 1.0` for kimi-k2.6, but the model now requires exactly `0.6`. Every request failed with an invalid temperature error. Fixed via PRs **#4962** and **#4967** (both merged today).

**Medium severity:**
- **#4925** – [Hard context overflow reporting](https://github.com/HKUDS/nanobot/pull/4925) (open): A PR that improves error handling when a provider confirms context overflow, stopping retries and returning a clear `stop_reason="context_overflow"`. Still open, awaiting review.

No crashes or regressions reported in the last 24 hours.

## Feature Requests & Roadmap Signals
- **ModelScope provider** ([PR #4965](https://github.com/HKUDS/nanobot/pull/4965) – open): Adds a new built-in provider for open-source models (Qwen, DeepSeek, Kimi, GLM, etc.) using ModelScope’s OpenAI-compatible API. This expands NanoBot’s reach into the Chinese open‑source ecosystem.
- **Kimi K3 support** ([PR #4966](https://github.com/HKUDS/nanobot/pull/4966) – open): Implements native handling for Kimi K3’s `reasoning_effort="max"` contract and normalizes legacy presets.
- **One-click Render deployment** ([PR #4937](https://github.com/HKUDS/nanobot/pull/4937) – open): A Render Blueprint for quick deployment with session persistence, still awaiting maintainer review.
- **Live image generation settings** ([PR #4964](https://github.com/HKUDS/nanobot/pull/4964) – open): Allows hot‑applying image provider, model, and credentials without restarting the agent.

These features align with a trend toward broader provider compatibility, easier deployment, and real‑time configuration. The ModelScope and Kimi K3 additions are likely candidates for the next minor release, given their provider nature and existing test coverage.

## User Feedback Summary
- **Pain point – Forced temperature for Moonshot**: Users reported silent failures when using kimi-k2.6 because the registry’s hardcoded override could not be overridden by user config. The quick closure of both the issue and fix PRs indicates strong community and maintainer responsiveness.
- **Pain point – Unbound cron jobs**: A user questioned why unbound cron jobs are forbidden; the discussion was resolved without a code change, suggesting the limitation is intentional but may benefit from better documentation.
- **Satisfaction – Translation improvement**: The zh‑TW locale PR was merged, pleasing Traditional Chinese users.

## Backlog Watch
No long‑unanswered important issues or PRs were visible in today’s data. The open PRs are relatively recent (mostly created July 14–17) and are actively being updated. The project appears healthy in terms of maintainer responsiveness.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest – 2026-07-18

## 1. Today’s Overview

The project saw extremely high activity over the past 24 hours, with **50 issues** and **50 pull requests** updated. Of these, 46 issues remain open/active and 47 PRs are open, while 4 issues and 3 PRs were closed or merged. No new releases were published. The community continues to report a wide range of bugs across components (agent, CLI, desktop, gateway, platform integrations) and on multiple operating systems (Windows, WSL2). Many of the bugs have high-severity labels (P1, P2) and are accompanied by fix PRs, suggesting an active but strained development cycle. The volume of open work indicates a project in rapid iteration with significant user engagement.

## 2. Releases

No new releases were published today. The latest tagged version remains unchanged.

## 3. Project Progress

Three pull requests were closed or merged today:

- **PR #57846** (CLOSED) – `fix(webhook): support Linear-Signature HMAC verification` – Adds HMAC-SHA256 verification for Linear webhook deliveries, completing a previously missing integration.
- **PR #66665** (CLOSED) – `fix(ci): timing report crashes on every fork PR (missing token secret)` – Resolves a CI regression where the `ci-timings` job fails on fork PRs due to an unresolved `AUTOFIX_BOT_PAT` secret.
- **PR #57846** (already listed) – Merged/closed details not fully enumerated; likely there is a third closed PR (e.g., #66559 is an issue, not a PR). The two known merged items improve webhook compatibility and CI reliability for external contributors.

These fixes primarily target infrastructure and platform support, not core agent features.

## 4. Community Hot Topics

The most active discussions revolve around critical bugs and requested integrations:

- **Issue #66267** ([link](https://github.com/NousResearch/hermes-agent/issues/66267)) – 6 comments, P1 bug: Multimodal content list crashes and causes infinite retry loops until API budget exhaustion. Users are reporting production-blocking failures after image/vision turns. No fix PR is visible yet.
- **Issue #3523** ([link](https://github.com/NousResearch/hermes-agent/issues/3523)) – 6 comments, P2 regression: `hermes update` silent git output and unnecessary stashes after PR #3492. This regression has been open since March and is waiting a maintainer decision.
- **Issue #62810** ([link](https://github.com/NousResearch/hermes-agent/issues/62810)) – 5 comments, P2 bug: CLI dispatcher drops integer exit statuses, breaking `set -e`, CI, and shell pipelines. A fundamental reliability concern.
- **Issue #9978** ([link](https://github.com/NousResearch/hermes-agent/issues/9978)) – 4 comments, P3 feature: Feishu interactive card format for gateway messages. Users running multi-model routing want richer message formatting with model metadata.
- **Issue #60841** ([link](https://github.com/NousResearch/hermes-agent/issues/60841)) – 4 comments, P3 security: CVE‑ridden packages pinned in `uv.lock`; pip‑based fixes are transient. A recurring vulnerability that resets after `uv sync`.
- **Issue #60197** ([link](https://github.com/NousResearch/hermes-agent/issues/60197)) – 4 comments, P2 bug: RuntimeError “Event loop is closed” during `/exit` shutdown of MCP server tasks. Affects graceful termination.

Underlying community needs: **reliability in multimodal processing** (vision), **CLI professionalism** (exit codes, update idempotency), **security baseline** (CVE management), and **better platform integration** (Feishu cards, Windows parity).

## 5. Bugs & Stability

Today’s incoming bugs are ranked by severity (P1 → P3):

| Severity | Issue | Description | Fix PR? |
|----------|-------|-------------|---------|
| **P1** | [#66267](https://github.com/NousResearch/hermes-agent/issues/66267) | Multimodal content list crash → infinite retry loop | No visible fix PR |
| **P2** | [#3523](https://github.com/NousResearch/hermes-agent/issues/3523) | `hermes update` silent output + unnecessary stash | Needs-decision; no PR |
| **P2** | [#62810](https://github.com/NousResearch/hermes-agent/issues/62810) | CLI dispatcher drops integer exit statuses | No PR yet |
| **P2** | [#60197](https://github.com/NousResearch/hermes-agent/issues/60197) | Event loop closed during `/exit` | No PR yet |
| **P2** | [#66544](https://github.com/NousResearch/hermes-agent/issues/66544) | Custom-provider metadata probes ignore `ssl_ca_cert` | No PR yet |
| **P2** | [#66641](https://github.com/NousResearch/hermes-agent/issues/66641) | `key_env` ignored in auxiliary task config → 401 errors | No PR yet |
| **P2** | [#58705](https://github.com/NousResearch/hermes-agent/issues/58705) | mem0/Qdrant lock conflict on startup | No PR yet |
| **P2** | [#51448](https://github.com/NousResearch/hermes-agent/issues/51448) | Hermes Desktop + LM Studio fails on native Windows (works on WSL) | No PR yet (needs-repro) |
| **P2** | [#66518](https://github.com/NousResearch/hermes-agent/issues/66518) | stdio MCP watchdog kills healthy children on WSL2 | No PR yet |
| **P2** | [#63717](https://github.com/NousResearch/hermes-agent/issues/63717) | Windows Desktop update failures – 7 correlated root causes | No PR yet |
| **P2** | [#66642](https://github.com/NousResearch/hermes-agent/issues/66642) | Terminal tool loses venv from PATH in containerized install | No PR yet |
| **P2** | [#62734](https://github.com/NousResearch/hermes-agent/issues/62734) | Windows terminal tool probes spawn visible console windows | No PR yet |
| **P2** | [#66589](https://github.com/NousResearch/hermes-agent/issues/66589) | Telegram startup notification race condition | No PR yet |
| **P2** | [#66587](https://github.com/NousResearch/hermes-agent/issues/66587) | Gemini HTTP 400 – missing `thought_signature` in function calls | No PR yet |
| **P3** | [#60841](https://github.com/NousResearch/hermes-agent/issues/60841) | CVE‑vulnerable packages pinned in `uv.lock` | No PR yet |
| **P3** | [#66630](https://github.com/NousResearch/hermes-agent/issues/66630) | `gateway.api_server` YAML config ignored | **PR #66676** (fix submitted) |
| **P3** | [#66661](https://github.com/NousResearch/hermes-agent/issues/66661) | Desktop: rejected text written to wrong session composer | No PR yet |
| **P3** | [#66662](https://github.com/NousResearch/hermes-agent/issues/66662) | Desktop: new sessions share `__new__` draft key → draft bleed | No PR yet |
| **P3** | [#66664](https://github.com/NousResearch/hermes-agent/issues/66664) | `_lineage_root_id` not set on uncompressed tips | No PR yet |
| **P3** | [#66663](https://github.com/NousResearch/hermes-agent/issues/66663) | `session.list` RPC drops `_lineage_root_id` | **PR #66675** (fix submitted) |
| **P3** | [#66667](https://github.com/NousResearch/hermes-agent/issues/66667) | Desktop: slow session switching without stale-while-revalidate cache | No PR yet |

Many of today’s newly filed desktop session bugs (#66661, #66662, #66663, #66664, #66667) form a cluster indicating **immature session state management in the desktop client**. Fixes for two of them (#66663, #66630) have been submitted as PRs.

## 6. Feature Requests & Roadmap Signals

Today’s feature requests include:

- **Rabbit R1 platform plugin** – PR [#66673](https://github.com/NousResearch/hermes-agent/pull/66673) adds zero-core‑change support for Rabbit R1 as a platform plugin.
- **Per‑profile sessions restore** – PR [#66672](https://github.com/NousResearch/hermes-agent/pull/66672) remembers open chat per profile and restores it on rail switch.
- **Cross‑source session listing** – PR [#66670](https://github.com/NousResearch/hermes-agent/pull/66670) adds `--all` flag to Telegram `/resume` to list sessions created on other platforms.
- **Memory viewer** – PR [#66399](https://github.com/NousResearch/hermes-agent/pull/66399) adds a memory viewer to the desktop UI.
- **Memory auto‑consolidate on overflow** – PR [#61433](https://github.com/NousResearch/hermes-agent/pull/61433) replaces hard-reject with automatic consolidation when MEMORY.md/USER.md exceeds char cap.
- **Holographic fact supersede** – PR [#38706](https://github.com/NousResearch/hermes-agent/pull/38706) non‑destructive fact correction with version trace.
- **Tool result compaction** – PR [#30980](https://github.com/NousResearch/hermes-agent/pull/30980) compresses large tool outputs before appending to context.
- **Kanban board terminal view** – PR [#44491](https://github.com/NousResearch/hermes-agent/pull/44491) adds `hermes kanban board` command for headless users.
- **Progressive Web App dashboard** – PR [#58532](https://github.com/NousResearch/hermes-agent/pull/58532) makes the web dashboard installable as a PWA.
- **Artifact publish‑hint tag** – PR [#66666](https://github.com/NousResearch/hermes-agent/pull/66666) provides a channel‑agnostic `[[artifact:path|title]]` tag for messaging fallback.
- **Encoding‑safety lint** – PR [#66669](https://github.com/NousResearch/hermes-agent/pull/66669) adds a CI sibling to `check-windows-footguns` for charset issues.
- **Custom profile icons** – Issue [#66621](https://github.com/NousResearch/hermes-agent/issues/66621) requests user‑customizable icons for desktop profiles.
- **GitHub Enterprise Server Copilot** – Issue [#11442](https://github.com/NousResearch/hermes-agent/issues/11442) (open since April) requests support for GHE instances.

**Roadmap signals**: Memory subsystem improvements (viewer, auto‑consolidation, fact versioning) are converging in multiple PRs and are likely candidates for the next minor release. Desktop session state fixes (#66663, #66675) are being addressed immediately. The Rabbit R1 plugin suggests broader platform expansion.

## 7. User Feedback Summary

**Pain points frequently voiced:**

- **Multimodal crashes** (Issue #66267) are the highest‑severity complaint, blocking users who rely on image/vision capabilities.
- **Windows users** face a disproportionate share of problems: Desktop + LM Studio fails (Issue #51448), update failures with correlated root causes (Issue #63717), terminal tool spawning console windows (Issue #62734), and WSL2 watchdog kills (Issue #66518). Windows stability remains a long‑standing dissatisfaction.
- **CLI reliability** is questioned: exit statuses are dropped (Issue #62810), `hermes update` regresses (Issue #3523), and global model switches do not persist fully (Issue #25106, closed but symptomatic).
- **Session management** in the desktop app is immature: draft bleed (Issue #66662), session bleed on reject (Issue #66661), slow switching (Issue #66667), and missing lineage dedup (Issues #66663, #66664). Power users find these disruptive.
- **Security** concerns: CVE‑ridden pinned packages (Issue #60841) and ignored `ssl_ca_cert` for custom providers (Issue #66544) affect trust in production deployments.

**Satisfaction signals** are less prominent but include active contributions (many PRs from community members) and feature requests that indicate users want to extend the platform rather than replace it. The Linear webhook signature PR (#57846) shows external integrators are investing in Hermes.

## 8. Backlog Watch

The following important items have been open for extended periods without maintainer resolution:

- **Issue #3523** ([link](https://github.com/NousResearch/hermes-agent/issues/3523)) – `hermes update` regression (March 28, 2026). Labeled `needs-decision`. No PR or comment from a maintainer.
- **Issue #9978** ([link](https://github.com/NousResearch/hermes-agent/issues/9978)) – Feishu interactive card format (April 15, 2026). Open for three months with no maintainer response.
- **Issue #11442** ([link](https://github.com/NousResearch/hermes-agent/issues/11442)) – GHE Copilot support (April 17, 2026). Two comments, no official triage.
- **PR #30980** ([link](https://github.com/NousResearch/hermes-agent/pull/30980)) – Tool result compaction (May 23, 2026). Labeled `needs-decision` and unchanged for nearly two months.
- **PR #38706** ([link](https://github.com/NousResearch/hermes-agent/pull/38706)) – Holographic fact supersede (June 4, 2026). No recent activity; risk of bitrot.
- **PR #43277** ([link](https://github.com/NousResearch/hermes-agent/pull/43277)) – Auth cooldown fix for codex pool (June 10, 2026). Open for over a month despite clear description and fix.

The volume of open PRs (47) and issues (46 active) combined with the lack of maintainer interaction on several mid‑priority items suggests the core team may be stretched or prioritizing other areas. Community contributors may need to follow up to accelerate review.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-07-18

## 1. Today's Overview
Project activity remained steady over the past 24 hours, with 4 issues and 12 pull requests updated. Of those, 1 issue was closed (#3206, v2→v3 config migration bug) and 2 PRs were merged (#3204, Azure dependency freeze; #3180, CLI tool-call validation). No new releases were published. The majority of PRs are still open (10 of 12), indicating ongoing review cycles for features and refactors. The community continues to focus on channel improvements, OAuth reliability, and performance optimizations, with several hardening and translation contributions also in flight.

## 2. Releases
No new releases.

## 3. Project Progress
Two pull requests were closed/merged:

- **#3204** (closed, gezhengbin888): Restored Azure SDK modules to frozen baseline versions (`azcore` v1.21.1, `azidentity` v1.13.1), fixing downstream supply-chain checks.  
  [PR #3204](https://github.com/sipeed/picoclaw/pull/3204)

- **#3180** (closed, Alix-007): Fixed CLI behavior to skip tool calls with invalid JSON arguments instead of dropping the entire batch; includes regression tests.  
  [PR #3180](https://github.com/sipeed/picoclaw/pull/3180)

Additionally, issue **#3206** (v2→v3 config migration failure) was closed, presumably resolved by an earlier change or the user’s workaround.  
[Issue #3206](https://github.com/sipeed/picoclaw/issues/3206)

## 4. Community Hot Topics
Two items attracted the most comments and discussion:

- **#3201** (3 comments) – Requests streaming (token-by-token) output for the QQ channel, noting that Telegram and WebSocket already support it. The author highlights a clear use case and a missing capability.  
  [Issue #3201](https://github.com/sipeed/picoclaw/issues/3201)

- **#3206** (2 comments) – Reported a blocking config migration error on fresh installs. Closed after discussion, but underlying migration logic may still need testing for edge cases.  
  [Issue #3206](https://github.com/sipeed/picoclaw/issues/3206)

No PRs received more than one comment. The community is most vocal about expanding channel feature parity (streaming, typing presence) and fixing migration/persistence issues.

## 5. Bugs & Stability
Several bugs and regressions were reported or addressed:

- **High severity – OAuth refresh failures** ([#3239](https://github.com/sipeed/picoclaw/issues/3239)). The shared OAuth refresh logic sends the wrong payload to OpenAI (JSON vs form) and lacks race protection. A fix PR ([#3241](https://github.com/sipeed/picoclaw/pull/3241)) is already open and under review.

- **Medium severity – Missing typing presence on WhatsApp** ([#3240](https://github.com/sipeed/picoclaw/issues/3240)). Users see no feedback while the bot prepares a reply. A corresponding PR ([#3242](https://github.com/sipeed/picoclaw/pull/3242)) adds native WhatsApp typing indicators.

- **Low severity – Config migration false positive** ([#3206](https://github.com/sipeed/picoclaw/issues/3206), now closed). Occurred on fresh installs; likely a version detection issue. No fix PR linked, but issue resolved.

- **Security hardening** – PR [#3246](https://github.com/sipeed/picoclaw/pull/3246) fixes three separate issues: MQTT TLS certificate verification (was insecure), OAuth timeouts, and bounded search read limits. This PR is open and addresses latent security risks.

## 6. Feature Requests & Roadmap Signals
New feature requests and open PRs indicate strong demand for:

- **Channel streaming parity** – QQ channel (issue #3201) still lacks streaming. This is likely to be prioritized once OAuth and stability fixes are merged.
- **WhatsApp native typing presence** – PR #3242 is already submitted and could land in the next minor release (v0.3.2 or v0.4.0).
- **Simplex channel integration** – PR #3193 adds a new channel type. Its age (opened June 27) suggests it may be a lower priority or awaiting review.
- **OAuth refresh correctness** – PR #3241 is critical for users relying on OpenAI or Google auth, and is likely to be merged soon.
- **Performance optimizations** – Three PRs from corporatepiyush (#3243, #3244, #3245) reduce allocations in seahorse compaction and XML escape routines. These are low-risk and could be included in an upcoming patch release.
- **Internationalisation** – PR #3247 adds Czech translations for new code-wrap options, showing ongoing i18n community support.

Predictions for next version (likely v0.3.2 or v0.4.0): WhatsApp typing presence, OAuth refresh fix, security hardening (MQTT TLS), and possibly some allocation optimizations. QQ streaming may slip to a later release.

## 7. User Feedback Summary
Users are actively requesting better real-time feedback from chat channels. The QQ streaming request and WhatsApp typing presence issue both reflect dissatisfaction with the lack of interactivity. The config migration bug caused frustration on new installs but has been resolved. OAuth failures with OpenAI are a significant pain point for developers integrating custom providers. Overall, satisfaction with the project’s responsiveness is moderate: bugs are being addressed quickly, but feature requests for channel parity remain open for weeks.

## 8. Backlog Watch
Two items stand out as needing maintainer attention:

- **PR #1951** (opened 2026-03-24) – Aims to move installation scripts from the docs repo into the main repo. It has been open for nearly four months with no recent updates. Community dependency?  
  [PR #1951](https://github.com/sipeed/picoclaw/pull/1951)

- **Issue #3201** (opened 2026-07-01, stale) – QQ streaming feature request has 3 comments but no associated PR and no maintainer response. Although not extremely old, it is the most upvoted open issue and has been marked `stale`.  
  [Issue #3201](https://github.com/sipeed/picoclaw/issues/3201)

Both items could benefit from a brief maintainer comment to set expectations or request further input.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest – 2026-07-18

---

## 1. Today's Overview

Activity remains high, with 4 issues and 15 pull requests updated in the last 24 hours. Three PRs were merged or closed, including two operational skill additions for the OpenCode stack and a documentation cleanup. The project is in a healthy state of continuous improvement, with a strong focus on fixing regressions (routing, session anchoring, ESM compatibility) and addressing community-reported bugs. No new releases were published today.

---

## 2. Releases

No new releases today.

---

## 3. Project Progress

Three pull requests were merged or closed today:

- **[#2952](https://github.com/nanocoai/nanoclaw/pull/2952)** – *Skill/add opencode stack* (merged Jul 17) – Adds the OpenCode operational/container skill.
- **[#2951](https://github.com/nanocoai/nanoclaw/pull/2951)** – *fix(opencode): dedicated OPENCODE_BASE_URL, read from .env, NO_PROXY* (merged Jul 17) – Corrects environment variable handling for the OpenCode skill.
- **[#3063](https://github.com/nanocoai/nanoclaw/pull/3063)** – *docs(changelog): drop duplicated Unreleased bullets* (merged Jul 17) – Maintains changelog clarity.

These represent the latest contributions to the OpenCode integration and general documentation hygiene.

---

## 4. Community Hot Topics

The most active issue this period was **#3071** (closed), which received one comment (from the author) and was resolved quickly. No other issues or PRs have accumulated more than 0 comments or reactions.

- **[#3071](https://github.com/nanocoai/nanoclaw/issues/3071)** – *Discord: bare URLs posted by the agent arrive as literal `[url](url)` and aren’t clickable* – The author identified the root cause in the Chat SDK Discord adapter. The issue was closed, implying a fix has been applied or is in progress.

Given the low engagement metrics, the community appears to be reporting bugs directly without extensive discussion, likely because maintainers respond promptly.

---

## 5. Bugs & Stability

Several bugs were reported and multiple fix PRs were opened today. Severity ranking (high → low):

1. **#3075** – *Silent log loss + inbound message duplicate-insert errors after long uptime*  
   - **Severity: High** – Affects Matrix channel reliability over extended runs. No comments yet; no fix PR immediately visible.
   - Reported by libellebilai-collab in a WSL2/Docker environment. May indicate a resource leak or state corruption.

2. **#3074** – *claude provider with custom ANTHROPIC_BASE_URL (OpenRouter): turns silently dropped when SDK result event is empty*  
   - **Severity: High** – Users relying on OpenRouter may lose replies without warning. No fix PR yet, but related PR **#3077** (see below) addresses a similar rate-limit issue in the Claude provider.

3. **#3071** (closed) – *Discord bare URL formatting*  
   - **Severity: Low** – Cosmetic and already addressed.

**Bug-fix pull requests opened today:**

- **[#3077](https://github.com/nanocoai/nanoclaw/pull/3077)** – *fix(claude): only abort on a rejected rate_limit_event; split rate_limit vs quota* – Prevents premature health-check aborts by distinguishing telemetry from terminal errors.
- **[#3081](https://github.com/nanocoai/nanoclaw/pull/3081)** – *fix(agent-runner): route per-turn results by turn generation, not entry-frozen routing* – Fixes a cross-channel routing bug that could cause results to be delivered to the wrong conversation.
- **[#3080](https://github.com/nanocoai/nanoclaw/pull/3080)** – *fix(add-matrix): ship the matrix-js-sdk ESM fix as a pnpm patch, not a node_modules edit* – Makes the ESM workaround persistent across installs (affects the Matrix channel skill).
- **[#3079](https://github.com/nanocoai/nanoclaw/pull/3079)** – *fix(agent-runner): gate mid-turn follow-up push on trigger=1, same as cold wake* – Prevents agent self-sustaining responses to background messages.
- **[#3078](https://github.com/nanocoai/nanoclaw/pull/3078)** – *fix(session): pin agent-shared resolution to an anchor session* – Eliminates session forking when multiple sessions exist for the same agent group.
- **[#3065](https://github.com/nanocoai/nanoclaw/pull/3065)** – *fix(security): authenticate loopback webhook to prevent action forgery (GHSA-h9g4-589h-68xv)* – Addresses a security vulnerability (CWE-306) on the local forwarded-gateway webhook server.

The volume of bug-fix PRs suggests a strong focus on stability, especially around state management and channel integration.

---

## 6. Feature Requests & Roadmap Signals

- **[#3072](https://github.com/nanocoai/nanoclaw/issues/3072)** – *[Type: Documentation] Skill docs only document /name, which works in one of three coding harnesses* – A user points out that skill invocation syntax (`/name`) is documented only for Claude Code, while Codex uses `$name` and may not support slash commands. This indicates a need to either unify invocation or document all harnesses. Likely to be addressed in a documentation update similar to recent PRs.

- **[#3073](https://github.com/nanocoai/nanoclaw/pull/3073)** – *Add the Adoption Companion pack (Memory Receipts + Knowledge Inventory)* – A new utility skill pack, still open. Could be merged in the next version.

- **[#2999](https://github.com/nanocoai/nanoclaw/pull/2999)** and **[#3076](https://github.com/nanocoai/nanoclaw/pull/3076)** – *feat(channels): unify iMessage into a single imessage channel (local + hosted backends)* – Two related PRs aiming to consolidate iMessage support. Likely candidates for a future release, though #2999 has been open since Jul 10.

- **[#3068](https://github.com/nanocoai/nanoclaw/pull/3068)** – *Fix scheduled task cross-session visibility and error clarity* – Resolves #2992, improving task tool feedback across sessions.

These contributions suggest the next minor release may include the unified iMessage channel, the Adoption Companion pack, and improved scheduled task management.

---

## 7. User Feedback Summary

- **Pain points:**  
  - Discord URL formatting (resolved).  
  - Log loss and message duplication after long uptime (#3075).  
  - Silent turn drops when using OpenRouter (#3074).  
  - Inconsistent documentation for skill invocation across coding harnesses (#3072).  

- **Use cases:**  
  - Matrix channel in local homeserver environments (#3075).  
  - OpenRouter as a model provider (#3074).  
  - Multi-harness development (Claude Code vs Codex) (#3072).  

- **Satisfaction:** No explicit satisfaction signals, but the rapid closing of #3071 and the number of quick bug-fix PRs indicate a responsive maintainer team.

---

## 8. Backlog Watch

- **[#2999](https://github.com/nanocoai/nanoclaw/pull/2999)** – *feat(channels): unify iMessage into a single imessage channel* (open since Jul 10, no updates in 8 days). A second overlapping PR (#3076) was opened on Jul 17, which may supersede it. Maintainers should reconcile or merge one.

- **[#3075](https://github.com/nanocoai/nanoclaw/issues/3075)** – *Silent log loss + duplicate-insert errors* – Opened yesterday with no maintainer response yet. Given its high severity, it should be triaged promptly.

- **[#3074](https://github.com/nanocoai/nanoclaw/issues/3074)** – *Claude/OpenRouter turn drops* – Also open without comment. A fix PR (#3077) touches related code but does not fully address the empty SDK event scenario; further investigation needed.

No other issues or PRs appear stale beyond the typical few days. The project’s activity suggests maintainers are clearing backlogs efficiently.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest — 2026-07-18

## 1. Today’s Overview
Project activity is very low over the last 24 hours: no new releases, no pull requests, and only a single issue update. A critical crash bug (#976) affecting the Telegram gateway on aarch64 Linux remains open and actively discussed. The absence of merged PRs or closed issues suggests development may be paused or focused elsewhere. Overall, project health is **stable but dormant**, with one high-severity stability concern demanding attention.

## 2. Releases
None. No new versions were published in the last 24 hours.

## 3. Project Progress
No pull requests were updated, merged, or closed today. No features or fixes have been advanced in this period.

## 4. Community Hot Topics
The only active conversation is around a severe crash:

- **[#976 – SIGSEGV on every inbound Telegram message](https://github.com/nullclaw/nullclaw/issues/976)**  
  *Author: wonhotoss | Opened: 2026-07-16 | Updated: 2026-07-17 | Comments: 2*  
  The user reports a stack overflow crash on aarch64 Linux when the gateway spawns a worker thread with an insufficient ~512 KB stack. Every inbound message triggers a SIGSEGV, causing a crash-loop under `systemd`. The underlying need is for either a larger default stack size or an adjustable thread stack configuration for the Telegram gateway.

## 5. Bugs & Stability
**Critical** — One open crash bug:

- **#976 – SIGSEGV on every inbound Telegram message**  
  Severity: **Critical** (process termination, message loss, crash-loop under systemd).  
  The root cause is identified as an insufficiently sized worker thread stack (~512 KB) on aarch64. No fix PR exists. Until resolved, the gateway is unusable for users on aarch64 Linux.

## 6. Feature Requests & Roadmap Signals
No explicit feature requests were filed in the last 24 hours. The only indirect signal is the crash bug’s resolution would require either a configurable stack size or a platform-specific increase. Such a change could be considered a minor enhancement if implemented in the next release.

## 7. User Feedback Summary
The single active user report (wonhotoss) expresses clear dissatisfaction: “every inbound message kills the process, it restarts, and the message is dropped, so the user never gets a reply.” This points to a fundamental reliability pain point for gateway deployments on ARM64 architectures. No positive feedback was recorded.

## 8. Backlog Watch
No issues or PRs older than 24 hours are present in the provided data. However, issue #976 (opened 2 days ago) already needs maintainer attention given its severity. No other long-unanswered items are visible.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-07-18

## 1. Today's Overview

IronClaw remains in a high‑velocity development cycle. In the past 24 hours **50 issues** and **50 pull requests** were updated; **24 issues were closed** (23 of them open/active yesterday) and **25 PRs were merged or closed**. Activity is concentrated on the **Reborn** next‑generation platform and the **engine v2** runtime, with a large refactoring wave (architecture simplification §4.3–§4.4) that is deleting hand‑written in‑memory stores in favour of production filesystem backends. No new releases were published today. The project is clearly accelerating toward a v1 release, as evidenced by the binary rename PR (#6185) that promotes the Reborn CLI to the canonical `ironclaw` command.

---

## 2. Releases

No new releases in the last 24 hours. The most recent release candidate remains tracked in open PR #5598 (0.5.0 for `ironclaw_common`, 0.4.0 for `ironclaw_skills`, and `ironclaw` at 0.29.1). ⚠️ Those releases contain API‑breaking changes.

---

## 3. Project Progress

**Features that advanced or were fixed today:**

- **Reborn binary rename**: PR #6185 (open, large) renames the Reborn CLI from `ironclaw-reborn` to `ironclaw` and renames the legacy binary to `ironclaw-v1`. This is the largest single step toward making Reborn the default experience.
- **Onboarding journey**: PR #6174 (open, XL) makes `ironclaw-reborn` usable standalone with a single‑command setup – keychain master key, two‑prompt model config, login link – and is already passing CI.
- **Telegram channel extension**: PR #6159 (merged today) ships Telegram as a first‑class Reborn channel with admin bot, WebGeneratedCode pairing, DM entrypoint, and triggered delivery. Follow‑up PR #6217 (merged) ensures Telegram compiles in the production Docker image.
- **Architecture simplification (§4.3 store consolidation)**:
  - Merged: #6210 (budget‑gate store over RootFilesystem, deleted `InMemoryBudgetGateStore`)
  - Merged: #6214 (delivered‑gate‑route store over RootFilesystem, deleted `InMemoryDeliveredGateRouteStore`)
  - Merged: #6212 (outbound‑state store over RootFilesystem, deleted `InMemoryOutboundStateStore`)
  - Merged: #6213 (triggered‑run‑delivery store over RootFilesystem, deleted `InMemoryTriggeredRunDeliveryStore`)
- **Naming cleanup (§4.4)**:
  - Merged: #6209 renames `LocalFilesystem` → `DiskFilesystem` (deployment‑mode removal)
  - Merged: #6220 renames `LocalDevOutboundStores` → `OutboundStores`
  - Merged: #6218 inlines `LocalDevRootFilesystem` alias → `CompositeRootFilesystem`
- **Documentation**: PR #6208 (merged) updates the architecture simplification proposal with r2–r7 revisions based on adversarial review.
- **Bug fixes**: PR #6219 (merged) fixes missed `LocalFilesystem` references in Telegram test code; PR #6211 (open) replaces hardcoded CLI stubs with proper “not implemented” errors.
- **CI/Benchmarks**: PR #6221 (open) forwards a 350‑min job cap to prevent heavy benchmark suites from timing out at the default 240‑min limit.

---

## 4. Community Hot Topics

The most active discussions (by comment count) are all older epics that were updated today, indicating maintainer review and closure rather than ongoing community debate:

- **#2767** – [CLOSED] *Epic: Separate engine v2 capability background from callable tool schemas* (7 comments). The foundational split that enabled the rest of the engine v2 work.  
  https://github.com/nearai/ironclaw/issues/2767

- **#2813** – [CLOSED] *engine‑v2: add typed assistant content model for final vs internal tool‑use text* (6 comments). Addresses a long‑standing inconsistency in how assistant tool‑use text is flattened.  
  https://github.com/nearai/ironclaw/issues/2813

- **#2835**, **#2834**, **#2837**, **#2836**, **#2838** – a cluster of engine v2 prompt‑enhancement issues (3 or fewer comments each) that were all closed today. They represent the completed “tool discovery and compact action cards” workstream.

- **#4644** – [OPEN] *Universal attachments across all channels* (2 comments, last updated today). A frequently touched enhancement that has stalled on the Reborn path. The community (and internal teams) request a unified attachment pipeline.  
  https://github.com/nearai/ironclaw/issues/4644

- **#6170** – [CLOSED] *Remove user access to file system via shell* (2 comments). A security bug reported by a user; received immediate attention and was closed.  
  https://github.com/nearai/ironclaw/issues/6170

Underlying need: users are eager for engine v2 to reach feature parity with v1 (attachments, UI rendering, tool approval) while maintainers are investing heavily in Reborn architecture cleanup.

---

## 5. Bugs & Stability

| Severity | Issue / PR | Description | Status | Fix PR |
|----------|------------|-------------|--------|--------|
| **Critical** | #6170 | Users on multi‑tenant instances can access the file system via shell commands (e.g. `ls -all`) unbounded to workspace. | **Closed** | Immediate closure (likely committed as fix) |
| **High** | #6215 (new) | Reborn: model cost table / budget accountant not rebuilt by LLM reload chokepoint (regression from #6174). Budget tracking breaks after model config changes. | **Open** | Not yet |
| **Medium** | #5331 | Tool‑approval “always” may not auto‑approve the next same‑tool call on engine v2. Flaky behaviour under certain conditions. | **Closed** (confirmed/closed) | Likely in PR #6174? |
| **Medium** | #4278 | Unbounded conversation growth in ENGINE_V2 may cause context window exhaustion; all messages stored as single JSON blob. | **Closed** (discussed) | No dedicated fix PR yet; likely addressed by broader memory budgeting (#2399) |
| **Low** | #3618 | Debug panel stats stuck at 0 on engine v2 (only Tool Calls update). | **Closed** | Fixed by earlier PR |
| **Low** | #3463, #3464, #3465 | Engine v2 UI rendering bugs: images not shown, failed tool calls inconsistent, repeated `tool_info` calls. | All **Closed** | Fixed by prompt/metadata workstream |

**Regressions today**: #6215 is a clear regression from the Reborn onboarding PR #6174. The team opened a fix issue within hours.

---

## 6. Feature Requests & Roadmap Signals

User‑visible requests visible in today’s data:

- **Universal attachments (#4644)** – “silently dropped on Reborn”, duplicate format‑support logic. Likely to land in the next minor release as part of the Reborn channel porting effort.
- **Telegram channel (#5124, #6159)** – just shipped. Further channel ports (Discord, WhatsApp) are likely next.
- **Engine v2 context budget broker (#2399)** – already closed; capability was built as part of the memory/job budgeting work. Will be in the upcoming v1 cut.
- **Admin LLM usage tracking for engine v2 (#4822)** – closed; likely already merged into Reborn.

Predictions for next version:
- **Reborn as default CLI** (PR #6185) – will be in the next release after it’s fully tested.
- **Architecture simplification completion** – the §4.3 store deletions and §4.4 naming cleanup are nearly done; the v1 release will ship without any in‑memory store vestiges.
- **More channel ports** – based on the tracking issue #3577 and the Telegram pilot.

---

## 7. User Feedback Summary

Pain points expressed (directly or via bugs):
- **Security**: A user reported that the WebUI allows shell commands with full file‑system access (#6170). The team fixed it promptly.
- **Consistency**: Users reported engine v2 tool‑approval auto‑approve failing (#5331), images not rendering (#3463), and debug stats stuck (#3618).
- **Feature gaps**: Attachments drop on Reborn (#4644); admin usage tracking missing (#4822).
- **Performance**: Concern about unbounded context growth (#4278) was raised by a code reviewer, not an end user.
- **CLI usability**: A new contributor (sergeiest) submitted a fix for misleading hardcoded stubs (#6211), indicating that the CLI experience still needs polish.

Satisfaction signals: The community appears engaged – many issues are filed with detailed reproduction steps. The team’s rapid closure of engine v2 bugs (all reported in May are now closed) suggests high responsiveness.

---

## 8. Backlog Watch

Items that are open, important, and have not seen maintainer response in a while (though today’s data is only 24h window; we note older open issues with recent updates):

- **#4644** – *Universal attachments* (open since June 9, last updated today). Despite being a high‑value feature, it has only 2 comments with no assignee or milestone. Could become a blocker for Reborn adoption.
- **#3577** – *Track v1 (ironclaw) ports for legacy channels* (open since May 13, last updated today). This tracking issue is the roadmap for bringing all channels to Reborn but has no recent resolution on most channels.
- **#5219** – *Harden activity identity invariants after gate lifecycle refactor* (open since June 25, last updated today). A follow‑up from PR #5145; touches execution identity, which is foundational for reliability. Needs assignee.

No PRs appear abandoned – the maintainers (ilblackdragon, henrypark133, serrrfirat) are very active. The only PR with dependency bumps (#6186, #6196) is handled by Dependabot and is awaiting review.

---

*Data source: GitHub API for nearai/ironclaw, 2026-07-18 snapshot. All links are to the respective issues/PRs.*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-07-18

## 1. Today's Overview
Yesterday (2026-07-17) saw intense development activity with **15 pull requests** (13 merged/closed) and **7 issues** updated (5 closed, 2 still open). A new patch release **2026.7.16** was published, focusing on cowork refactoring and campaign reward features. The majority of PRs targeted the renderer and cowork areas, with a notable addition of an AI-generated app skin workflow. Community issues are mostly stale (from April 2026) and were closed, suggesting either they were resolved or no longer actionable. Overall project health is strong, with a high merge rate and continuous UI/UX polish.

## 2. Releases
**LobsterAI 2026.7.16** ([Release tag](https://github.com/netease-youdao/LobsterAI/releases/tag/2026.7.16))
- **What’s Changed:**
  - `refactor(cowork): extract clipboard attachment file extraction into testable helper` — improves testability and maintainability of cowork file handling.
  - `feat: add campaign final reward claim feature` — introduces a new user-facing reward claim flow for in-app campaigns.
- No breaking changes or migration notes were mentioned.

## 3. Project Progress (Merged/Closed PRs – July 17)
Key developments from the 13 merged/closed PRs:
- **Artifacts & Layout Stability:** [#2357](https://github.com/netease-youdao/LobsterAI/pull/2357) fixed preview panel and input area layout flickering by adding stable keys.
- **AI Skin Experience:** [#2352](https://github.com/netease-youdao/LobsterAI/pull/2352) introduced an AI-generated skin-pack workflow with light/dark appearance persistence, applied across the entire UI.
- **Service Deployment Persistence:** [#2349](https://github.com/netease-youdao/LobsterAI/pull/2349) added data persistence for service deployment configurations.
- **Error UX Improvement:** [#2348](https://github.com/netease-youdao/LobsterAI/pull/2348) surfaces structured failure details (provider, model, HTTP code, failover reason) in the cowork error panel.
- **Windows UI Polish:** [#2355](https://github.com/netease-youdao/LobsterAI/pull/2355) aligned caption button hover colors; [#2351](https://github.com/netease-youdao/LobsterAI/pull/2351) refined caption icon sizing and hover states.
- **Build & Updates:** [#2345](https://github.com/netease-youdao/LobsterAI/pull/2345) fixed NSIS web installer localization and progress bar overlap; [#2347](https://github.com/netease-youdao/LobsterAI/pull/2347) reduced automatic update check interval from 12h to 2h.
- **Bug Fixes:** [#2354](https://github.com/netease-youdao/LobsterAI/pull/2354) ignored stale chat errors after a successful deferred final; [#2346](https://github.com/netease-youdao/LobsterAI/pull/2346) prevented IM/history sessions from overriding new email diagnostic chats.
- **Chores:** [#2353](https://github.com/netease-youdao/LobsterAI/pull/2353) updated main UI; [#2350](https://github.com/netease-youdao/LobsterAI/pull/2350) optimized sidebar ad banner; [#2356](https://github.com/netease-youdao/LobsterAI/pull/2356) is the release PR for 2026.7.17.

## 4. Community Hot Topics
- **Most commented issue (3 comments):** [#1354](https://github.com/netease-youdao/LobsterAI/issues/1354) – Pageant launch causing blue screen. Closed as stale; no fix PR linked. Underlying need: reliable external tool launching without system crashes.
- **Most commented issue (2 comments):** [#1357](https://github.com/netease-youdao/LobsterAI/issues/1357) – Pageant “already started” false positive; [#1358](https://github.com/netease-youdao/LobsterAI/issues/1358) – No feedback after clicking timed tasks; [#1359](https://github.com/netease-youdao/LobsterAI/issues/1359) – Deleted tasks reappear after restart; [#1360](https://github.com/netease-youdao/LobsterAI/issues/1360) – No duplicate agent name validation.
- **Open feature request (1 comment):** [#1314](https://github.com/netease-youdao/LobsterAI/issues/1314) – Drag-to-resize sidebar width (180–480px). Accompanying PR [#1315](https://github.com/netease-youdao/LobsterAI/pull/1315) is still open, indicating maintainer interest but not yet merged.
- **Open UI polish request (1 comment):** [#1311](https://github.com/netease-youdao/LobsterAI/issues/1311) – Table content line-break shows raw HTML tags; long text truncation should have hover tooltip.

None of the PRs had comments, but the stale issue closure pattern suggests users may have reported issues earlier without follow-up.

## 5. Bugs & Stability
No new bugs were opened in the last 24 hours. However, several fixed issues were merged:
- **Medium severity:** [#2354](https://github.com/netease-youdao/LobsterAI/pull/2354) eliminates stale chat errors after deferred final runs, preventing irrelevant error UI.
- **Low severity:** [#2346](https://github.com/netease-youdao/LobsterAI/pull/2346) prevents email diagnostics from opening in a stale/im chat session.
- **UI stability:** [#2357](https://github.com/netease-youdao/LobsterAI/pull/2357) resolves layout flickering in the artifact panel.
- The old issues (#1354, #1357, #1358, #1359, #1360) were all closed as stale with no linked fix PRs. Their closure implies they were either fixed earlier, unreproducible, or deemed low priority. Users who reported them may still be affected.

## 6. Feature Requests & Roadmap Signals
- **Sidebar Width Resizing:** Issue [#1314](https://github.com/netease-youdao/LobsterAI/issues/1314) and PR [#1315](https://github.com/netease-youdao/LobsterAI/pull/1315) remain open for over 3 months. The PR contains implementation code (180–480px range, drag handle). Likely to be merged in a coming release given the clear user demand and ready patch.
- **Table Rendering Improvements:** Issue [#1311](https://github.com/netease-youdao/LobsterAI/issues/1311) asks for raw HTML tag removal in table line-breaks and hover tooltip for long text. A simple fix that may appear in the next minor update.
- **AI-Generated App Skin:** The new skin-pack workflow in [#2352](https://github.com/netease-youdao/LobsterAI/pull/2352) is a significant UX feature. It may be followed by a public skin gallery or customization templates.
- **Campaign Reward Claim:** The 2026.7.16 release added this feature, signaling a push toward in-app gamification.

## 7. User Feedback Summary
- **Pain Points (from closed stale issues):**
  - **Pageant integration:** Users report crashes (`blue screen`) and false success messages.
  - **Task management:** Timed tasks give no feedback; deleted tasks reappear on restart.
  - **Agent creation:** No duplicate name validation leads to confusion.
- **Satisfaction Indicators:**
  - Active PR merges targeting cowork error UX (#2348) and layout stability (#2357) show responsiveness to user experience.
  - The new AI skin feature adds aesthetic customization, likely welcomed by power users.
- **Unresolved dissatisfaction:** The stale closure of the pageant/task issues without a visible fix suggests either the problems were edge cases or maintenance backlog. Users may need to reopen if issues persist.

## 8. Backlog Watch
- **Open PR #1308** ([https://github.com/netease-youdao/LobsterAI/pull/1308](https://github.com/netease-youdao/LobsterAI/pull/1308)) – “feat(cowork): isolate home-screen input draft per agent” – untouched since April 2026. This feature would improve multi-agent workflow by preventing draft confusion. Needs maintainer review.
- **Open PR #1315** ([https://github.com/netease-youdao/LobsterAI/pull/1315](https://github.com/netease-youdao/LobsterAI/pull/1315)) – “feat: support drag-to-resize sidebar width” – already implemented but not merged. May require code review or conflict resolution.
- **Open Issues #1311 and #1314** – Both from April with only one comment each. No maintainer response or label update. They are low-hanging fruit for the next minor release.

**Recommendation:** Prioritize review of PR #1315 and #1308 to reduce backlog, and either close or address the lingering table rendering issue (#1311) before the next release.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-07-18

## 1. Today's Overview
Project activity remains moderate, with one open issue and two open pull requests updated in the last 24 hours. No issues or PRs were closed or merged today, indicating a focus on ongoing development rather than immediate resolution. Two patch releases (20260717.02 and 20260717.03) were published, suggesting active iteration on the codebase. The single open issue continues a long-standing feature request for per‑topic model routing, while the two PRs introduce a new memory backend (Zvec/redb) and fix ACP-only chat setups.

## 2. Releases
**Two new releases today** (20260717.03 and 20260717.02) — both patch versions with no detailed changelog provided. Based on the PRs and the absence of breaking changes in the data, these releases likely include minor fixes and the `zvec` memory backend (PR #1158) and/or the ACP-only chat fix (PR #1157). Users should review the commit logs for exact changes. No migration notes or breaking changes are indicated.

## 3. Project Progress
No pull requests were merged or closed today. The two open PRs are:
- **PR #1158** (feat(memory): add zvec vector database memory backend) – Adds an alternative memory backend using Zvec and redb, gated behind a `zvec` feature. This is a notable expansion of memory storage options.
- **PR #1157** (fix(web): support ACP-only chat setup) – Fixes the web UI to treat ACP-only setups as valid instead of errors, and improves agent selection when no LLM models are configured.

Both are open and awaiting review or testing. No feature advancements or fixes were merged today.

## 4. Community Hot Topics
The only active issue with engagement is:
- **#574 [OPEN] [Feature]: Model Routing Per topic**  
  Author: azharkov78 | Created: 2026-04-06 | Updated: 2026-07-18 | Comments: 3 | 👍: 1  
  [Issue #574](https://github.com/moltis-org/moltis/issues/574)  
  *Analysis:* The request asks for intelligent model selection based on topic context. The single upvote and three comments suggest moderate interest but low urgency. The issue has been open for three months without resolution, indicating the maintainers may be waiting for more community feedback or implementation bandwidth.

The two open PRs have no comments or reactions yet, so they have not sparked discussion.

## 5. Bugs & Stability
No bugs, crashes, or regressions were reported today. The project appears stable in terms of new defect reports. The existing PR #1157 addresses a UX issue (ACP-only setup being incorrectly flagged as an error), which is a minor functional bug but not a stability concern.

## 6. Feature Requests & Roadmap Signals
The primary feature request is **#574: Model Routing Per topic**. Given the lack of recent activity or a merged PR addressing it, this feature is unlikely to appear in the next release. However, the addition of the `zvec` memory backend (PR #1158) signals continued investment in memory infrastructure, which could later support more advanced routing logic. Another subtle signal is the quick succession of two patch releases—this may indicate iterative improvements ahead of a larger update.

## 7. User Feedback Summary
No direct user feedback (e.g., complaints, praise) was recorded in the observed data. The single issue, #574, reflects a user’s desire for more context‑aware model selection—a pain point for users who manage multi‑topic chats. The lack of other feedback suggests either a small user base or that existing functionality meets expectations for most.

## 8. Backlog Watch
- **Issue #574 (Model Routing Per topic)** has been open since April 6, 2026 (over three months) with only one reaction and three comments. While not extremely stale, it has received no update from maintainers. Given that it is a feature request (not a bug) and the project appears to focus on memory and ACP integration, this issue may remain backlogged unless more users upvote or engage.
- **PR #1157** and **PR #1158** are both fresh (created yesterday) and have not yet been merged or reviewed. They need attention from maintainers to avoid stalling.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-07-18

*Generated from GitHub data (github.com/agentscope-ai/CoPaw), covering changes updated in the last 24 hours.*

---

## 1. Today's Overview

CoPaw (the open‑source personal AI assistant framework) saw **very high activity** over the past day: 22 issues were updated (14 still open, 8 closed), 35 pull requests were updated (20 merged/closed, 15 open), and a new patch release **v2.0.0.post3** was published. The community is actively reporting Windows compatibility regressions after the recent v2.0.0.post2 update, while the core team continues to merge bug fixes and performance improvements at a steady pace. A notable shift toward frontend caching, parallel startup, and graceful shutdown handling indicates focus on production‑readiness for the upcoming stable release.

---

## 2. Releases

**v2.0.0.post3** was published on 2026‑07‑17 (release page). Key changes:

- **Fix (MCP)**: Migrate `${VAR}` headers in MCP driver configurations to environment credential references during driver migration.
- **Refactor (CI)**: Hardened desktop workflows and removed legacy dead code in verify scripts.

*No breaking changes or migration notes have been announced.* This is a minor patch release aimed at improving MCP security and CI reliability.

---

## 3. Project Progress

**Merged/closed PRs in the last 24h (20 items)** – notable advances:

- **`feat: bound multi-agent startup and improve readiness UX`** (#6198, merged) – limits concurrent ReMe initialization to reduce memory spikes during startup, and surfaces partial readiness status to operators and the frontend.
- **`fix(browser): add MAX_WAITTIME for browser use`** (#6170, merged) – caps the model‑supplied wait duration in the browser automation tool to prevent indefinite blocking.
- **`fix(token_usage): don't persist an unseeded cache on shutdown`** (#6220, merged) – fixes a bug where an empty disk cache was written on shutdown, wasting I/O.
- **`fix(utils): drop redundant nvidia-smi probe in get_vram_size_gb`** (#6204, merged) – removes a double `nvidia‑smi` call.
- **`fix(runtime): pass model_slot_override from HTTP request to model factory`** (#6218, merged) – ensures model slot overrides are respected via the API.
- **`fix: treat unprobed multimodal as fail-open to prevent image stripping`** (#6217, merged) – prevents images from being stripped when a model’s multimodal support has not yet been probed.
- **`fix: use absolute import in Tauri entry point`** (#6234, merged) – fixes PyInstaller packaging for the Windows sandbox startup helper.
- **`fix(desktop): gracefully shut down backend sidecar before exit`** (#6225, open? Actually it’s open, not merged – but listed in PRs updated. Wait: it's still open; but it's a fix PR. Keep as open but note it exits.)
- **`refactor(channels): add separate tool call and result display controls`** (#6233, open) – addresses a long‑standing request to let users control verbosity of tool call results in channels.
- **`refactor: make the default loop an agent mode`** (#6210, open) – major refactoring of the ReAct loop into a first‑class `DefaultMode`, improving lifecycle boundaries.

Additionally, a fix for the channel base refactor (#6159) and a fix for the CLI cron update command (#6236, open) moved forward.

---

## 4. Community Hot Topics

| Issue / PR | Comments | Subject | Link |
|------------|----------|---------|------|
| **#6161** | 7 (closed) | Windows 更新后普通用户无法启动，卡在 "Waiting for HTTP ready..." | [GitHub](https://github.com/agentscope-ai/QwenPaw/issues/6161) |
| **#5995** | 6 (open) | Messages silently dropped when session is busy — no queue, no error | [GitHub](https://github.com/agentscope-ai/QwenPaw/issues/5995) |
| **#6155** | 5 (open) | 从 1.x 升级到 2.0 后，发现多个问题 (embedding mapping, auto‑memo, etc.) | [GitHub](https://github.com/agentscope-ai/QwenPaw/issues/6155) |
| **#6221** | 5 (closed) | Test notification bot (noise) | [GitHub](https://github.com/agentscope-ai/QwenPaw/issues/6221) |
| **#5976** | 4 (open) | Feature: 分开设置channel的工具调用参数信息和调用结果信息的发送 | [GitHub](https://github.com/agentscope-ai/QwenPaw/issues/5976) |
| **#6193** | 3 (open) | MCP drivers start sequentially instead of in parallel (8× speedup possible) | [GitHub](https://github.com/agentscope-ai/QwenPaw/issues/6193) |
| **#6205** | 3 (open) | 控制台网站js文件等能否设置压缩及缓存 | [GitHub](https://github.com/agentscope-ai/QwenPaw/issues/6205) |
| **#6169** | 3 (closed) | pip 安装的 QwenPaw 2.0.0.post2 强迫管理员权限启动 | [GitHub](https://github.com/agentscope-ai/QwenPaw/issues/6169) |
| **#6202** | 3 (closed) | [Desktop] 工作区技能导航渐进渲染在 Desktop 版失效 | [GitHub](https://github.com/agentscope-ai/QwenPaw/issues/6202) |
| **#6227** | 1 (+1 👍) (open) | Enable per‑chat MCP server selection and granular tool‑level control | [GitHub](https://github.com/agentscope-ai/QwenPaw/issues/6227) |

**Underlying needs:**
- **Windows users** are experiencing a cluster of permission‑related regressions (#6161, #6169) after the latest Windows update and CoPaw v2.0.0.post2. The core issue appears to be the new UAC elevation requirement in the desktop app.
- **Message reliability** (#5995) is a critical concern for production deployments – the lack of queuing means missed user inputs during busy agent turns.
- **Upgrade friction** (#6155) from 1.x to 2.0.x highlights documentation and migration tooling gaps.
- **Performance‑aware users** are pushing for parallelism in MCP driver initialisation (#6193) and static asset caching (#6205) to improve startup and frontend load times.

---

## 5. Bugs & Stability

**High severity:**
- **Windows startup failure under normal user** (#6161) – *closed* as invalid? Actually marked `[invalid]` but the description indicates a real problem. It was closed without a fix PR, which may be concerning. Users report only `Run as Administrator` works. Potentially a platform permission bug that requires investigation.
- **Forced admin privilege requirement** (#6169) – *closed* as duplicate of #6161. Same root.
- **Messages dropped silently** (#5995) – *open* with 6 comments; no fix PR yet. Critical for reliability.
- **Upgrade breakage from 1.x to 2.0** (#6155) – multiple issues: embedding mapping error, auto‑memo failures. *Open*, with a comment suggesting a workaround but no merge.

**Medium severity:**
- **Desktop force‑kills backend instead of graceful shutdown** (#6219) – *open*, PR #6225 exists but is still open.
- **Desktop skill navigation progressive rendering broken** (#6202) – *closed* as duplicate? Likely related to frontend rendering.
- **PubMed MCP causes error in llama.cpp** (#6201) – *closed*, not clear if fixed.
- **MCP drivers start sequentially** (#6193) – *open*, performance issue.
- **High memory during multi‑agent startup** (#6144) – *closed*? Actually #6144 closed after PR #6198 merged. Good.

**Low severity:**
- **Token usage cache unseeded on shutdown** (#6220) – *merged* fix.
- **Redundant nvidia‑smi probe** (#6204) – *merged* fix.
- **Multimodal image stripping when unprobed** (#6217) – *merged* fix.

**Overall**: The Windows admin‑rights cluster is the most visible regression. Two high‑severity issues (#5995, #6155) remain open without a fix PR. The core team has been responsive on many other bugs.

---

## 6. Feature Requests & Roadmap Signals

The following user‑requested features saw discussion or were linked to new PRs:

| Feature | Issue / PR | Likelihood for next minor version |
|---------|------------|-----------------------------------|
| **Per‑chat tool call/result display control** | #5976 → PR #6233 (open) | **High** – PR already under review. |
| **Parallel MCP driver startup** | #6193 | **High** – performance win, no PR yet but clear demand. |
| **Static asset caching & compression** | #6205 → PR #6232 (open) | **High** – frontend UX improvement, PR exists. |
| **Per‑chat MCP server / tool selection** | #6227 (1 👍) | **Medium** – requested by power users, complex UI/backend change. |
| **Per‑chat internet search toggle** | #6228 (1 comment) | **Medium** – complementary to #6227. |
| **Reasoning depth selection (Light/Medium/Deep/Auto)** | #6229 | **Low** – would require new model‑specific configuration. |
| **Hermes model family support** | #6230 | **Low** – niche model family, but open to discussion. |
| **Global agent configuration** | #5919 | **Medium** – pain point for users with many agents, no PR yet. |
| **Auto‑detect `max_input_length` from model API** | #6162 (closed) | **Likely deferred** – closed, but idea may be revisited. |
| **Separate configs for same model ID** | #6231 | **Medium** – common for provider variations (e.g., thinking toggle). |

**Roadmap signals**: The cluster of “per‑chat control” requests (MCP, internet search, reasoning depth) suggests a **session‑level personalisation** theme is emerging. The PR #6233 (tool display) and #6232 (frontend caching) are nearly ready and will likely land in the next release.

---

## 7. User Feedback Summary

- **Windows permission hassles** are the most vocal pain point: users on normal (non‑admin) accounts cannot start the desktop app without UAC elevation. This is a regression from previous versions.
- **Upgrade process from 1.x** is frustrating: missing embedding parameters, auto‑memo not working, and unclear migration steps.
- **Message reliability**: power users deploying CoPaw in production chat channels (Feishu, etc.) report that messages are lost when the agent is busy, with no queue or error feedback.
- **Global configuration is cumbersome**: each new agent requires manual config edits (#5919).
- **MCP startup slowness** is noticeable for users with many MCP servers (#6193).
- **Positive feedback**: the Docker/Web version works well, and users appreciate the fix PRs being merged quickly.

---

## 8. Backlog Watch

| Item | Type | Age / Last Update | Why it needs attention |
|------|------|-------------------|------------------------|
| **#5995** – Messages silently dropped | Issue | Created 2026‑07‑12, last comment 7d ago | High severity, no fix PR. Impact on reliability is critical. |
| **#6155** – 1.x → 2.0 upgrade bugs | Issue | Created 2026‑07‑15, last comment 2d ago | Multiple regressions affecting existing users. |
| **#5919** – Global agent configuration | Issue | Created 2026‑07‑10, last comment 1d ago | Long‑standing request, no maintainer response. |
| **#5698** – `run_tool_batch` adapt to AgentScope 2.0 | PR | Created 2026‑07‑01, last update 1d ago | Large PR with control‑flow enhancements, pending review. |
| **#5187** – Computer use for Windows desktop | PR | Created 2026‑06‑14, last update 1d ago | Major feature (GUI automation) in review for over a month. |
| **#6169** – Admin privilege forced | Issue | Closed as duplicate, but underlying problem not fixed | The duplicate #6161 was also closed; users may still experience the bug. |
| **#6222** – Memory system confusion (MEMORY.md vs Dream digests) | Issue | Created yesterday, 1 comment | Low urgency but signals documentation gap. |

The most critical items requiring maintainer attention are **#5995 (message dropping)** and **#6155 (upgrade migration)**, as they directly impact user trust and adoption. The older PRs #5698 and #5187 would benefit from a review cycle to unblock long‑standing features.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw Project Digest — 2026-07-18

- **Source**: github.com/qhkm/zeptoclaw  
- **Data snapshot**: 2026-07-18 00:00 UTC (based on 24-hour activity)

---

## 1. Today’s Overview

ZeptoClaw saw low but focused activity in the last 24 hours, with **8 closed issues** and **zero pull requests or releases**. All activity was concentrated on batch updates to D5 gate-point metadata — a routine, chore‑style maintenance workflow driven by contributor `YLChen-007`. No open issues or open PRs remain, indicating the project is in a stable, low‑development phase. The project health is steady, though the absence of new features or community engagement suggests a temporary slowdown in active development.

## 2. Releases

**No new releases** were published in the last 24 hours. The latest release remains the previous version (not specified in this data).

## 3. Project Progress

No pull requests were merged or closed today. All progress consisted of **8 closed issues**, each completing an automated D5 gate‑point data refresh for CSV rows 34–38 (issues #636–#643). Specifically:

- **4 `chore(analysis)` issues** (#636–#639) updated D5 gate and cross‑component fields for security‑related JSON records (issues #263, #264, #268, #329, #466).  
- **4 `chore(llm-enhance)` issues** (#640–#643) re‑derived the same metadata and wrote workflow receipts after the analysis step.

These are purely operational updates with no code changes, no feature additions, and no bug fixes. The project effectively executed a scheduled data‑refresh pipeline.

## 4. Community Hot Topics

**No active community discussions** occurred in the last 24 hours. Every closed issue received exactly one comment (likely an automated acknowledgement or receipt). No issues or PRs had reactions or extended commentary. The lack of engagement suggests the repository is primarily used for automated workflows rather than collaborative discussion.

## 5. Bugs & Stability

**No bugs, crashes, or regressions** were reported or fixed today. All closed issues were non‑functional metadata updates, and the project shows no open defect reports.

## 6. Feature Requests & Roadmap Signals

**No feature requests** were submitted or discussed. The project’s roadmap signals are neutral — today’s activity points to ongoing refinement of existing D5 gate‑metadata infrastructure, but no new capabilities were proposed or hinted at.

## 7. User Feedback Summary

**No user feedback** (positive or negative) was publicly visible. All contributions came from the same author, and no external users reported issues, requested assistance, or shared use cases. The project appears to be in a maintenance‑only state, with no observable user interaction.

## 8. Backlog Watch

**No important issues or PRs** are languishing unanswered. All 8 issues created today were closed within hours. Zero open issues or open PRs exist at the time of the snapshot. The backlog is effectively empty.

---

**Overall note**: Today reflects a routine data‑maintenance cycle. The project is stable but static — community activity and feature development are paused, and the repository is operating as an execution environment for scripted tasks rather than a collaborative development hub.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-07-18

## 1. Today's Overview
Activity remains high: 50 issues and 50 pull requests were updated in the last 24 hours, with 9 issues and 13 PRs closed or merged. No new releases today, but the project continues to ship steady fixes and significant feature RFCs. The community is actively driving security hardening (supply-chain signing, OIDC, sandbox improvements) and inter‑agent communication (A2A protocol). Several S1 (workflow‑blocked) bugs remain open but have corresponding fix PRs in progress, indicating a healthy response cadence.

## 2. Releases
No new releases were published in the last 24 hours.

## 3. Project Progress
Two PRs were merged/closed today:
- **#8951** (closed, merged) – Fix runtime: stop duplicating streamed narration on whitespace-only divergence. Resolves a long‑standing issue where trimmed tokens were re‑emitted.
- **#8913** (closed, merged) – Fix runtime: annotate max‑iteration turn stop with visible reason. Users now see why the agent stopped, e.g. “Maximum tool iterations reached”.

Other notable open PRs that advanced (not yet merged):
- **#9090** – Enforce tool‑call pairing at a single chokepoint (fixes Anthropic 400 errors and missing tool_results).
- **#9083** – Trim context overflow to model window and attribute compactions (prevents silent context loss).
- **#9102** – Strip unhandled non‑image media markers before dispatch (fixes crashes with audio/video markers).
- **#9114** – Broaden Landlock sandbox allowlist for FHS 3.0 compatibility.
- **#9110** – Use constant‑time comparison for Lark verification token (timing attack fix).

## 4. Community Hot Topics
| Issue # | Title | Comments | Reactions | Summary of underlying need |
|---------|-------|----------|-----------|---------------------------|
| **#8177** | RFC: Supply chain signing – hardware PGP, hermetic builds, SLSA provenance | 11 | 0 | Community wants hardened release pipeline; current 3‑parallel signing mechanisms need consolidation (see also #9101). |
| **#5982** | Per‑sender RBAC for multi‑tenant deployments | 10 | 0 | Demanded by operators running ZeroClaw for multiple user classes (customers, admins) within a single instance. |
| **#3566** | A2A (Agent‑to‑Agent) Protocol native support | 8 | 7 👍 | Interoperability with other agent frameworks (NanoClaw, OpenClaw) is a top priority; 5+ related issues link here. |
| **#7141** | RFC: OIDC authentication provider support | 7 | 0 | Users need enterprise‑grade single sign‑on; targeted for v0.9.0. |
| **#2767** | Multi‑Agent Routing | 6 | 9 👍 | Runs separate agents with isolated workspaces and channels; closely tied with A2A and RBAC. |

*Analysis:* The community is clearly shifting toward production‑grade features: security provenance, identity management, and agent federation. The high reaction count on #2767 and #3566 suggests these are the most emotionally invested features.

## 5. Bugs & Stability
**S1 – Workflow blocked:**
- **#8563** – SOPs are not available to the agent through the web dashboard chat session. No dedicated fix PR yet; root cause under investigation.
- **#8560** – `browser_open` hangs the agent turn when no display is available (unbounded subprocess wait; also affects TTS and ffmpeg). A context‑level fix is being tracked in **#9083** (trim overflow) but not the direct cause.
- **#7527** – macOS app shows empty page after install; permissions not detected. Reported on macOS 15.7.7; no fix PR yet.
- **#5869** – Security advisory cluster from `rumqttc` transitive dependency (RUSTSEC advisories). Blocked by upstream crate. No resolution in sight.

**S2 – Degraded behavior:**
- **#5628** – Daemon auto‑starts on boot (systemd) and causes port conflict with manual `zeroclaw daemon` runs. Unaddressed.
- **#8929** (closed today) – Narration duplication during streaming (fixed by #8951).

**Security fixes in progress:**
- **#9110** – Constant‑time comparison for Lark verification token (timing attack).
- **#9114** – Landlock sandbox allowlist expansion (many binaries failed with `EACCES`).
- **#9100** – Move pgvector setup to a dedicated OS thread to avoid blocking Tokio workers.

## 6. Feature Requests & Roadmap Signals
The following are high‑impact features actively requested:

| Issue | Feature | Status | Likely Version |
|-------|---------|--------|----------------|
| #7141 | OIDC authentication provider | RFC accepted, umbrella tracker | v0.9.0 |
| #7142 | Pluggable security enforcement provider interface | RFC accepted, umbrella tracker | v0.9.0 |
| #5982 | Per‑sender RBAC | Status: accepted | v0.9.0+ |
| #3566 | A2A protocol support | Status: accepted, no‑stale | v0.9.0 |
| #2767 | Multi‑Agent Routing | Status: accepted, no‑stale | v0.9.0 |
| #9101 | Consolidate release attestation mechanisms (one story, ~20 assets) | Needs maintainer review | v0.8.4+ |
| #8891 | Persistent memory parity (curation, relevance, operability) | In‑progress tracker | v0.9.0 |
| #8135 | Wasm‑first plugin runtime (default‑on, signed, capability‑enforced) | RFC accepted | v0.10.0+ |

*Prediction:* v0.9.0 will likely ship OIDC, pluggable security interfaces, core A2A support, and the memory parity tracker. The Wasm runtime may slip to v0.10.0 due to its scope.

## 7. User Feedback Summary
**Pain points reported (real users):**
- *Configuration confusion:* Users struggle with missing documentation for cron jobs (#7762), inability to restrict Discord bot to specific channels (#6378), and lack of aliases rename in TUI (#7468).
- *Installing and running:* Documentation gaps for `cargo binstall` (#5269), macOS app crashing (#7527), daemon port conflicts (#5628).
- *Missing features in web dashboard:* SOPs not loaded (#8563), in‑app upgrade unavailable (#8170 – closed as RFC but not implemented).
- *Cross‑platform sandboxing:* Landlock sandbox too restrictive on Fedora (#9114), bubblewrap lacks configurable writable paths (#5127).
- *Tool stability:* `browser_open` hangs headless hosts (#8560), `file_read` breaks on non‑UTF‑8 encodings (#7521).

**Satisfaction signals:**
- Active community engagement: 7 👍 on A2A issue, 9 👍 on multi‑agent routing.
- Quick bug‑fix turnaround: narration duplication (#8929) and tool‑call pairing (#9090) are being addressed within days of reports.
- Many contributive PRs from community members (Audacity88, tzy‑17, perillamint, etc.).

## 8. Backlog Watch
Issues and PRs that require maintainer attention due to long inactivity or being blocked:

| Item | Type | Days Open | Tag | Notes |
|------|------|-----------|-----|-------|
| **#9101** | Issue | 2 | `needs-maintainer-review` | Urgent: consolidate three parallel signing mechanisms. |
| **#8891** | Issue | 9 | `needs-maintainer-review` | Persistent memory tracker; many dependencies but no merged PRs yet. |
| **#5869** | Issue | 91 | `status:blocked` | RUSTSEC advisory; blocked on upstream `rumqttc` update. |
| **#6293** | Issue | 76 | `status:blocked, needs-author-action` | Air‑gapped execution mode RFC; author has not responded to requests. |
| **#8177** | Issue | 26 | `status:blocked` | Supply‑chain signing RFC; blocked by internal dependency (see #9101). |
| **#8367** | Issue | 22 | `status:blocked, needs-author-action` | Capability‑aware documentation; author inactive. |
| **#9013** | PR | 6 | `needs-author-action` | Major refactor of TodoWrite config; awaiting author’s responses to review comments. |
| **#5628** | Issue | 98 | `status:accepted, no-stale` | Daemon port conflict; accepted but no assignee or PR. |
| **#7527** | Issue | 36 | `status:blocked` | macOS app not working; blocked on reproducing environment. |

*Analysis:* The highest‑risk backlog item is #5869 (security advisory), which has no movement. #9101 is an immediate priority to eliminate CI redundancy. The authors of #6293 and #8367 need to be pinged to unblock their RFCs.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/boom7sss/agents-radar).*