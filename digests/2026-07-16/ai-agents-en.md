# OpenClaw Ecosystem Digest 2026-07-16

> Issues: 480 | PRs: 500 | Projects covered: 13 | Generated: 2026-07-16 03:17 UTC

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

# OpenClaw Project Digest — 2026-07-16

## 1. Today’s Overview

OpenClaw maintains a very high activity level with **480 issues** and **500 PRs** updated in the last 24 hours. The community is heavily engaged around the **v2026.7.1 upgrade**, which introduced several regressions affecting gateway startup, session handling, and model compatibility. A new **v2026.7.2-beta.1** release shipped today, focusing on remote coding sessions and native automation. 58 PRs were merged/closed, indicating steady development velocity, but the large number of open issues (313) and P0 bugs suggests the project is currently in a stabilization phase following the last stable release.

## 2. Releases

**New release: v2026.7.2-beta.1**  
[GitHub Release](https://github.com/openclaw/openclaw/releases/tag/v2026.7.2-beta.1)

**Highlights** (from release notes):
- **Remote coding sessions**: Run Control UI sessions on cloud workers, open Codex and Claude catalog sessions in terminals on their owning hosts, and resume OpenCode/Pi sessions directly in a terminal.
- **Native automation and nodes**: Further details were truncated in the provided data, but this appears to be a foundational infrastructure improvement.

**Breaking changes / migration notes**: Not specified. Given the beta status and the focus on remote sessions, no immediate migration steps are indicated, but users should test carefully before upgrading production instances.

## 3. Project Progress (Merged/Closed PRs)

58 PRs were merged/closed today. Notable fixes and improvements include:

- **CI performance**: `improve(ci): speed warm Node shards with sticky bind mount` (#108386) – reduces restore time by ~20s per shard.
- **Telegram**: Fix tool rows visibility under progress preambles (#108394), and preserve authored file-reference links (#105911, merged 2026-07-13 but updated today).
- **LINE group history**: Fix group history recorded correctly during mention turns (#107367, closed).
- **Zalo**: Fix reporting unsupported message actions (#108434).
- **Sandbox**: Fix locale-dependent error detection in `stat` command (#108477).
- **Cron tool**: Fix llama.cpp rejecting unanchored schema patterns (#108469).
- **Browser**: Keep CDP cursor text previews UTF-16 safe (#108316).
- **Heartbeat**: Stop reporting success after tool failures (#107735).
- **UI**: Remove retired Matrix QA art (#108575).
- **Plugin SDK**: Drop unreachable OpenAI tool-compat branch (#108310).

Several high-severity bug fixes also landed (see section 5).

## 4. Community Hot Topics

| Issue/PR | Title | Comments | 👍 | Link |
|----------|-------|----------|----|------|
| #75 | Linux/Windows Clawdbot Apps (enhancement, P2) | 112 | 81 | [Issue](https://github.com/openclaw/openclaw/issues/75) |
| #104721 | Bug: "All tool results return \"(see attached image)\" literal string" (P0, regression) | 17 | 1 | [Issue](https://github.com/openclaw/openclaw/issues/104721) |
| #102020 | Bug: Second message fails with "reply session initialization conflicted" | 14 | 1 | [Issue](https://github.com/openclaw/openclaw/issues/102020) |
| #91009 | Codex PreToolUse native hook relay spawns CPU-bound processes (P1) | 12 | 2 | [Issue](https://github.com/openclaw/openclaw/issues/91009) |
| #11665 | Feature: Webhook sessions should reuse existing sessionKey for multi-turn | 11 | 0 | [Issue](https://github.com/openclaw/openclaw/issues/11665) |
| #94518 | DeepSeek cache hit rate <10% after 6.x upgrade (P1) | 9 | 10 | [Issue](https://github.com/openclaw/openclaw/issues/94518) |
| #90213 | Legacy state migration warnings persist after `doctor --fix` (P2) | 11 | 1 | [Issue](https://github.com/openclaw/openclaw/issues/90213) |
| #107449 | Cron tool JSON Schema incompatible with llama.cpp tool parser (P1) | 10 | 4 | [Issue](https://github.com/openclaw/openclaw/issues/107449) |
| #85103 | Model fallback chain not triggered on quota exhaustion (P1) | 10 | 1 | [Issue](https://github.com/openclaw/openclaw/issues/85103) |

**Analysis**: The community’s most pressing needs are:
- **Cross-platform support**: The long-standing request for Clawdbot on Windows/Linux (#75) remains the most commented and liked feature request.
- **Stability after upgrades**: Multiple P0/P1 regressions tied to the v2026.7.1 release are causing production outages, particularly around gateway startup and session handling.
- **Model integration**: DeepSeek caching, llama.cpp schema compatibility, and fallback chain failures indicate friction with third-party LLM backends.

## 5. Bugs & Stability

**Critical (P0) bugs reported today or updated today:**

| Issue | Title | Status | Fix PR? | Link |
|-------|-------|--------|---------|------|
| #107694 | Gateway fails to start due to strict startupMigrationWarnings guard on benign legacy migration skips | Open | No PR linked | [Issue](https://github.com/openclaw/openclaw/issues/107694) |
| #107220 | 2026.7.1 gateway crash-loop: legacy memory sidecar `meta`/`chunks` conflicts are fatal | Open | No PR linked | [Issue](https://github.com/openclaw/openclaw/issues/107220) |
| #107227 | startup-migration gate fatal, `doctor` doesn't resolve (crash-loop) | **Closed** | PR #107476 likely | [Issue](https://github.com/openclaw/openclaw/issues/107227) |
| #107330 | OpenClaw Update 2026.7.1 Crash on Windows | **Closed** | Fix included in v2026.7.2-beta.1? | [Issue](https://github.com/openclaw/openclaw/issues/107330) |
| #103076 | Additional legacy-state migration sources block gateway startup | Closed | PR #103076 fix was merged | [Issue](https://github.com/openclaw/openclaw/issues/103076) |
| #101763 | Hosted Molty model selector doesn't persist (API receives dotted id) | Open | Not yet | [Issue](https://github.com/openclaw/openclaw/issues/101763) |
| #104721 | Tool results return literal "(see attached image)" (P0, regression) | Open | Not yet | [Issue](https://github.com/openclaw/openclaw/issues/104721) |
| #107873 | Embedded prompt-lock session takeover aborts visible WebChat turns | Open | Not yet | [Issue](https://github.com/openclaw/openclaw/issues/107873) |

**Highlights**:
- **Gateway crash-loop epidemic**: At least four separate P0 issues (107694, 107220, 107227, 103076) all relate to the strict startup-migration guard introduced in v2026.7.1. While #107227 was closed, its root cause has not been fully eliminated – users are still hitting benign migration skips.
- **Session initialization failures**: #102020 (cross-channel message failure) and #104721 (placeholder string instead of tool output) are severe regressions that break core user workflows.
- **Model fallback & schema**: #107449 (cron tool schema) and #85103 (fallback not triggered) affect reliability of model routing.

**Mitigation**: Several fix PRs exist (e.g., #107227 was resolved, #103076 fixed). The v2026.7.2-beta.1 release likely includes some of these fixes, but users on older versions should upgrade cautiously.

## 6. Feature Requests & Roadmap Signals

**Notable feature requests** (by reaction count and recency):

| Issue | Title | Reactions | Priority | Link |
|-------|-------|-----------|----------|------|
| #75 | Linux/Windows Clawdbot Apps | 81 👍 | P2 (enhancement) | [Issue](https://github.com/openclaw/openclaw/issues/75) |
| #82548 | Add AI safety and quality observability events | 1 👍 | P2 | [Issue](https://github.com/openclaw/openclaw/issues/82548) |
| #87660 | memory: add lifecycle-aware LLM curation for MEMORY.md | 2 👍 | P2 | [Issue](https://github.com/openclaw/openclaw/issues/87660) |
| #107686 | Reduce Token Costs with Intelligent Multi-LLM Router | 0 👍 | P3 | [Issue](https://github.com/openclaw/openclaw/issues/107686) |
| #96975 | Isolate subagent completion from parent context | 1 👍 | P2 (stale) | [Issue](https://github.com/openclaw/openclaw/issues/96975) |
| #73274 | Expose appendAssistantMessageToSessionTranscript in Plugin Runtime API | 1 👍 | P2 (closed) | [Issue](https://github.com/openclaw/openclaw/issues/73274) |
| #93680 | Side panel copilot with per-tab agent sessions | 0 👍 (stale PR) | P2 | [PR](https://github.com/openclaw/openclaw/pull/93680) |

**Roadmap predictions**:
- **Autonomous agent loop**: A large PR (#108206, `feat(loop): implement autonomous agent loop`) was opened today. This feature is likely to land in the next stable release.
- **Multi-LLM routing**: The high interest in model fallback and cost optimization suggests a smart router could be prioritized in the 2026.8 timeframe.
- **Cross-platform Clawdbot**: Given the massive community demand (#75) and the mention of "remote coding sessions" in v2026.7.2-beta.1, we may see Linux/Windows support in a future update.
- **Memory & observability**: Lifecycle-aware memory curation and observability events are incremental but clearly valued by power users.

## 7. User Feedback Summary

**Common pain points**:
1. **Upgrade anxiety**: Every stable release seems to introduce migration-related startup failures. Users report “gateway crash-loops with no documented remedy” (#107227) and “legacy state migration warnings keep appearing” (#90213). The community wants smoother, tested upgrade paths.
2. **Session reliability**: “Second message fails” (#102020), “tool results are placeholder text” (#104721), and “session transcript overwritten” (#77012) undermine trust in long-running sessions.
3. **Model integration friction**: Users switching to non-Anthropic models (DeepSeek, llama.cpp) encounter schema incompatibilities (#107449, #90288) and caching issues (#94518). The fallback chain is often broken (#85103, #103734).
4. **UI regressions**: Control UI lost features like Skill Proposals and Dreaming (#108182) – users feel they lost functionality despite visual improvements.

**Positive signals**:
- The community is highly engaged – 112 comments on the Clawdbot feature request shows strong enthusiasm.
- Contributors are actively submitting fixes; many P0 bugs have been closed or have PRs in review.
- The remote coding session feature in the new beta addresses a major use case for power users.

**Satisfaction rating**: Moderate. Development momentum is high, but release quality and regression management need improvement.

## 8. Backlog Watch

**Long-unanswered high-importance issues** (open >30 days, marked `needs-maintainer-review` or `needs-product-decision`):

| Issue | Title | Age | Priority | Status | Link |
|-------|-------|-----|----------|--------|------|
| #75 | Linux/Windows Clawdbot Apps | ~197 days | P2 | Needs product decision, security review, maintainer review | [Issue](https://github.com/openclaw/openclaw/issues/75) |
| #11665 | Webhook session reuse (multi-turn) | ~159 days | P2 | Needs maintainer review, needs product decision, needs security review | [Issue](https://github.com/openclaw/openclaw/issues/11665) |
| #85103 | Model fallback chain not triggered on quota exhaustion | ~56 days | P1 | Needs maintainer review, needs product decision, needs live repro | [Issue](https://github.com/openclaw/openclaw/issues/85103) |
| #80040 | Cascading failure: OAuth invalidation + placeholder reply + duplicate tools | ~67 days | P2 | Needs maintainer review, needs security review, needs live repro | [Issue](https://github.com/openclaw/openclaw/issues/80040) |
| #70024 | Channel stop timeout leaves channel permanently dead | ~85 days | P1 | Needs product decision, needs live repro | [Issue](https://github.com/openclaw/openclaw/issues/70024) |
| #67915 | Local assistant attachments "Unavailable — Outside allowed folders" despite correct config | ~90 days | P2 | Needs maintainer review, linked PR open | [Issue](https://github.com/openclaw/openclaw/issues/67915) |
| #84242 | memory-lancedb tools not exposed to agent | ~58 days | P2 | Needs maintainer review, needs product decision | [Issue](https://github.com/openclaw/openclaw/issues/84242) |

**Stale PRs awaiting author response**:
- #87349: Allow host-local APK media sends (waiting on author since May).
- #102141: Fix LINE webhook retryable acknowledgement (waiting on author).
- #102296: Add plan-first Claw status and remove (waiting on author).
- #93680: Side panel copilot (stale, needs updates).

**Recommendation**: The maintainer team should prioritize unblocking the `needs-product-decision` issues, especially #75 (cross-platform support) and #11665 (webhook multi-turn), which directly affect user experience and developer adoption. The backlog of `needs-live-repro` issues suggests additional testing infrastructure may be needed to verify complex bugs.

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report — Personal AI Assistant Open-Source Ecosystem

**Date:** 2026-07-16  
**Audience:** Technical decision-makers and developers

---

## 1. Ecosystem Overview

The personal AI assistant open-source ecosystem is undergoing a maturation phase characterized by rapid feature expansion (agent loops, memory systems, multi-LLM routing) colliding with stability challenges from aggressive release cycles. Projects are converging on shared architectural patterns—provider-agnostic runtimes, WebSocket consolidation, and lifecycle-managed sessions—while differentiating on deployment model (desktop-first vs. gateway-centric), target user (developer power-users vs. enterprise teams), and integration breadth. The ecosystem remains fragmented across 13+ actively maintained repositories, with OpenClaw acting as the de facto reference implementation while projects like ZeroClaw and CoPaw build complementary capabilities. A clear trend is the tension between feature velocity and regression management, with several projects (OpenClaw, IronClaw, CoPaw) experiencing post-upgrade crash-loops that erode user trust.

---

## 2. Activity Comparison

| Project | Issues Updated (24h) | PRs Updated (24h) | Release Today | Health Score* |
|---|---|---|---|---|
| **OpenClaw** | 480 issues | 500 PRs | ✅ v2026.7.2-beta.1 | ⚠️ Stable but regressing |
| **ZeroClaw** | 50 issues | 50 PRs | ✅ v0.8.3 | 🟢 Healthy |
| **Hermes Agent** | 50 issues | 50 PRs (0 merged) | ❌ | 🟡 Active but blocked |
| **CoPaw** | 50 issues (27 closed) | 43 PRs (21 merged) | ❌ | 🟡 Post-upgrade cleanup |
| **NanoBot** | 24 issues (21 closed) | 24 PRs (9 merged) | ❌ | 🟢 Audit-driven hardening |
| **LobsterAI** | 6 issues (5 closed) | 17 PRs (11 merged) | ✅ 2026.7.15 | 🟢 Steady polish |
| **Moltis** | 1 issue | 6 PRs (6 merged) | ❌ | 🟢 Focused delivery |
| **IronClaw** | 24 issues | 37 PRs (13 merged) | ❌ | 🟡 Intense stabilization |
| **PicoClaw** | 6 issues (3 stale-closed) | 2 PRs (0 merged) | ❌ | 🔴 Low velocity |
| **NanoClaw** | 2 issues | 9 PRs (4 merged) | ❌ | 🟡 Moderate, responsive |
| **TinyClaw** | 0 issues | 1 PR (0 merged) | ❌ | 🔴 Subdued |
| **NullClaw** | 1 issue (critical) | 0 PRs | ❌ | 🔴 Silent, critical bug |
| **ZeptoClaw** | 0 issues | 0 PRs | ❌ | ⚫ Inactive |

*Health score key: 🟢 = Stable iteration, 🟡 = Active but with blocking issues, 🔴 = Low activity or critical unaddressed bugs, ⚫ = No activity

---

## 3. OpenClaw's Position

**Advantages vs. Peers:**
- **Scale leader:** 480 issues and 500 PRs updated in 24h—nearly 10x the next most active projects (ZeroClaw, Hermes). This volume reflects both the largest community and the highest maintenance burden.
- **Reference implementation status:** As the OpenClaw core reference, it defines the architectural standard that downstream projects (NanoClaw, PicoClaw, NullClaw) inherit—including gateway architecture, session protocols, and plugin SDK.
- **Autonomous agent loop lead:** PR #108206 (`feat(loop): implement autonomous agent loop`) signals a pending step-change in agent capability that most peers lack.
- **Vendor diversity:** Already supporting DeepSeek, llama.cpp, Claude, and now remote coding sessions—broader than IronClaw (Slack-centric) or LobsterAI (OpenClaw-dependent).

**Technical Approach Differences:**
- **Gateway-first vs. desktop-first:** OpenClaw routes all interactions through a gateway layer with rich session management, unlike Hermes Agent (desktop-heavy) or LobsterAI (Tauri desktop app).
- **Plugin SDK maturity:** The most stable plugin ecosystem among peers, though NanoBot's audit revealed security gaps and Moltis' plugin API is newer.
- **Migration-heavy development:** OpenClaw's strict startup-migration guards (P0 bugs #107694, #107220) show a more aggressive approach to state management than peers, at the cost of upgrade stability.

**Community Size Indicators:**
- **Feature request #75** (Linux/Windows clawdbot) — 81 👍, 112 comments: 5-10x the engagement of equivalent feature requests in any other project.
- **58 PRs merged/closed in 24h** vs. 21 for CoPaw, 13 for IronClaw, 12 for ZeroClaw. OpenClaw's merge velocity is 2-3x most peers.
- However, **313 open issues** (many P0/P1) indicates the community is also the most burdened by regressions.

**Verdict:** OpenClaw is the ecosystem's **pace-setter and bottleneck**—it drives architecture but the volume of its regressions (gateway crash-loops, session initialization failures) cascades to downstream projects.

---

## 4. Shared Technical Focus Areas

The following requirements emerged across **3+ projects**, representing ecosystem-wide priorities:

| Focus Area | Projects Affected | Specific Needs |
|---|---|---|
| **Multi-LLM provider reliability** | OpenClaw, NanoBot, Hermes, NullClaw, Moltis, CoPaw, ZeroClaw | Fallback chains on quota exhaustion (#85103, OpenClaw); schema incompatibility with llama.cpp (#107449, OpenClaw); kimi-code streaming errors (#5600, ZeroClaw); MiniMax tool rejection (#65166, Hermes) |
| **Memory & context management** | OpenClaw, NanoBot, NanoClaw, CoPaw, ZeroClaw | Lifecycle-aware memory curation (#87660, OpenClaw); memory archive with provenance (#4621, NanoBot); persistent memory tree (#3012, NanoClaw); ReMe memory leak (#6124, CoPaw); memory vs. history separation (#9048, ZeroClaw) |
| **Session & gateway reliability** | OpenClaw, Hermes, IronClaw, CoPaw, PicoClaw | Startup crash-loops (all gateway-centric projects); session takeover conflicts (#107873, OpenClaw); legacy metadata loss (#4940, NanoBot); "busy" rejection during background routines (#6125, IronClaw) |
| **Channel/desktop UX polish** | Hermes, IronClaw, CoPaw, LobsterAI | Paste broken (#24860, Hermes); first message blank (#63078, Hermes); Slack disconnect unreliable (#5834, IronClaw); Windows startup fails (#6161, CoPaw); ad persistence (#2342, LobsterAI) |
| **Cross-platform expansion** | OpenClaw (#75), CoPaw (#6125), ZeroClaw | Linux/Windows clawdbot apps; Kylin OS support (Chinese government); Windows 7 non-Tauri variant |
| **Security & access control** | NanoBot, ZeroClaw, CoPaw | OAuth flow hygiene (#6128, IronClaw); authorization bypass audit (#4815, NanoBot); SSRF gates (#8713, ZeroClaw); plugin permission model (#8398, ZeroClaw) |
| **Developer experience & tooling** | NanoBot, Moltis, ZeroClaw | One-click deploy (#4937, NanoBot; #3055, NanoClaw); config centralization (#4918, NanoBot); prebuilt channel bundles (#7952, ZeroClaw) |

---

## 5. Differentiation Analysis

### Feature Focus & Target Users

| Project | Core Target | Key Differentiator |
|---|---|---|
| **OpenClaw** | AI agent developers & integrators | Reference architecture, broadest provider support, autonomous agent loop |
| **ZeroClaw** | Advanced users & enterprise teams | SOP engine, WebAssembly plugins, Git forge channel, air-gapped mode |
| **CoPaw** | Chinese market & enterprise users | Qwen model integration, WeChat/QQ channels, ReMe memory, Kylin OS support |
| **Hermes Agent** | Desktop power users | Feishu/Lark integration, Desktop app focus, Concierge MCP marketplace |
| **IronClaw** | Slack-centric teams | Deepest Slack integration, Reborn runtime migration, OAuth lifecycle management |
| **NanoBot** | Security-conscious developers | Comprehensive audit culture, Python-first, weak-reference consolidator |
| **LobsterAI** | Commercial desktop users | Polished Tauri desktop app, Windows web installer, GPT-5.6/Grok support |
| **Moltis** | Agent interoperability | ACP auto-detection, provider token lifecycle, systemd-less containers |
| **PicoClaw** | Lightweight edge deployment | Minimal footprint, DeltaChat support, ARM64 focus |
| **NanoClaw** | Practical operators | Delivery reliability, OpenCode provider, deploy scripts |
| **NullClaw** | Gateway-only deployments | Minimalist design (now stalled) |
| **TinyClaw** | CLI-first teams | Minimal features, team management focus |

### Technical Architecture Differences

- **Runtime model:** OpenClaw, ZeroClaw, and IronClaw use gateway-heavy architectures with rich session management. Hermes and CoPaw blend gateway with desktop-native runtimes. LobsterAI is uncompromisingly desktop-first (Tauri). NullClaw and PicoClaw are lightweight gateway-only.
- **State management:** ZeroClaw and CoPaw are pioneering memory-separated architectures (SOP engine vs. ReMe), while OpenClaw still struggles with migration-induced state corruption.
- **Security model:** NanoBot leads with proactive auditing. ZeroClaw is building SSRF gates and pluggable security. OpenClaw's security posture is reactive (bugs reported post-release).
- **Plugin system:** OpenClaw's plugin SDK is most mature; ZeroClaw's WebAssembly host is most sandboxed; CoPaw's Chrome extension and SDK are emerging.

---

## 6. Community Momentum & Maturity

### Activity Tiers

**Tier 1: Rapid Iteration (High velocity, feature expansion, but regression-prone)**
- **OpenClaw** — Busiest by far; 500+ PRs/day but P0 bugs threaten trust
- **ZeroClaw** — Major release v0.8.3 with 56 contributors; strong momentum
- **CoPaw** — Very active post-v2.0; 21 PRs merged today but upgrade pain is real

**Tier 2: Intensive Stabilization (Focused on fixing, fewer features merged)**
- **IronClaw** — Deep Reborn runtime migration; Slack bugs persist across QA waves
- **Hermes Agent** — 50 open PRs, 0 merged today; blocked by review bottlenecks
- **NanoBot** — Audit-driven cleanup; 21 issues closed, but 3 critical open

**Tier 3: Moderate / Maintenance (Steady polish, few blockers)**
- **LobsterAI** — Clean release cycle (2026.7.15); quick bug turnaround
- **Moltis** — Small but focused; 6/6 PRs merged today
- **NanoClaw** — Responsive but low volume; delivery fix in progress
- **PicoClaw** — Low activity; critical ARM64 bug unaddressed

**Tier 4: Low / Stalled**
- **TinyClaw** — 1 PR, 0 issues; barely maintained
- **NullClaw** — Critical crash bug with no response; project may be dormant
- **ZeptoClaw** — No activity; effectively dead

### Maturity Assessment
- **Most feature-complete:** OpenClaw, ZeroClaw, CoPaw (though CoPaw's v2.0 regressions lower maturity perception)
- **Most stable release process:** LobsterAI, Moltis (smaller scope, better regression control)
- **Most security-aware:** NanoBot (proactive audit), ZeroClaw (SSRF + permission model)
- **Most user-responsive:** NanoClaw (bug → fix PR same day), LobsterAI (multiple fixes per release)

---

## 7. Trend Signals

### 1. Multi-Model Intelligence is the New Baseline
Multiple projects are investing in **intelligent model routing**—not just fallback chains, but topic-aware selection (#574, Moltis), cost-optimized routers (#107686, OpenClaw), and cascade handling (PR #3057, NanoClaw). *Signal:* Users expect agents to transparently choose the best model per query, not just default to one provider.

### 2. Agent Collaboration is Becoming a Platform Feature
From OpenClaw's autonomous loop (#108206) to ZeroClaw's A2A discovery (#7218) and CoPaw's multi-agent teams (#2922), the ecosystem is moving beyond single-agent assistants toward **agent orchestrators**. *Signal:* The next competitive moat will be how smoothly agents delegate, share context, and recover from sub-agent failures.

### 3. Memory is the New Infrastructure Debt
Every major project is wrestling with memory systems—persistent trees, lifecycle-aware curation, provenance tracking, and separation from conversation history. OpenClaw, NanoBot, NanoClaw, CoPaw, and ZeroClaw all have open memory-related RFCs or bugs. *Signal:* A standardized memory abstraction (reminiscent of LangChain's document loaders) is needed; first to deliver it could set the ecosystem standard.

### 4. Enterprise & Government Adoption is Driving Platform Choices
CoPaw's Kylin OS support, ZeroClaw's air-gapped execution mode, and OpenClaw's SSRF gates all point to **production deployments in regulated environments**. Telegram webhooks, audit trails (#82548, OpenClaw), and OIDC support (#7141, ZeroClaw) further confirm this. *Signal:* The consumer market is saturating; the next growth wave is enterprise, with requirements for compliance, air-gaps, and Chinese domestic OS support.

### 5. Post-Release Regression Management is the Weak Point
The pattern is stark: every major release across OpenClaw (v2026.7.1), CoPaw (v2.0), and IronClaw (0.28.x) triggered crash-loops, data loss, or broken integrations. Users consistently report "upgrade anxiety." *Signal:* The ecosystem needs a shared regression-testing framework—perhaps a community-run integration test suite or canary release pipeline. Projects that solve this (like LobsterAI's careful release processes) will build outsized trust.

### 6. Security Audits Are Going Mainstream
NanoBot's deep audit (#4815) produced 42 findings and sparked a cleanup wave. ZeroClaw is building pluggable security enforcement. Hermes has auth bypass issues. The era of "ship first, secure later" is ending for production-grade agents. *Signal:* Expect more projects to adopt audit-driven development cycles, and for upstream projects like OpenClaw to face increasing pressure to prioritize security over features.

### Value for AI Agent Developers:
- **If you need stability:** Consider LobsterAI (desktop) or Moltis (provider integration). Avoid OpenClaw if you can't tolerate beta-level reliability.
- **If you need maximum flexibility:** OpenClaw remains the most extensible, but budget time for regression hunting.
- **If you need enterprise compliance:** ZeroClaw (air-gapped, OIDC, SSRF) or NanoBot (audited) are ahead.
- **If you're targeting Chinese market:** CoPaw is the clear leader with WeChat/QQ/Kylin support.
- **If you're prototyping:** TinyClaw or NullClaw might be too quiet; start with NanoClaw or PicoClaw for lightweight needs.

**Bottom line:** The ecosystem has entered a **stabilization and consolidation phase** after a burst of innovation. The projects that emerge strongest will be those that can maintain feature velocity while not breaking core workflows on every release.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-07-16

## 1. Today's Overview

The NanoBot project saw a surge of activity in the last 24 hours, with 24 issues and 24 pull requests updated. A total of 21 issues were closed, reflecting a major cleanup of security and correctness findings from a deep code audit submitted over the past week. Three open issues remain active, and nine PRs were merged or closed. No new releases were published. The project appears to be in a consolidation phase, addressing technical debt and hardening the codebase after a sustained period of feature development.

## 2. Releases

None

No new releases this period.

## 3. Project Progress

Nine pull requests were merged or closed in the last 24 hours. The merged/closed PRs represent targeted fixes and quality improvements:

- **Shutdown ordering fix** — [#4944 (closed)](https://github.com/HKUDS/nanobot/pull/4944): Stops channels before draining runtime tasks during gateway shutdown, preventing transport timeouts (affecting DingTalk Stream, etc.).
- **Codex proxy consistency** — [#4943 (closed)](https://github.com/HKUDS/nanobot/pull/4943): Ensures provider proxy configuration is honored across OAuth login, image-generation clients, and HTTP requests.
- **WebUI activity timer** — [#4649 (closed)](https://github.com/HKUDS/nanobot/pull/4649): Corrects the live `Working for...` duration to measure from user turn start instead of first activity row.
- **Shared markdown helpers** — [#4870 (closed)](https://github.com/HKUDS/nanobot/pull/4870): Adds shared markdown utility functions for Telegram, Signal, and Feishu channels, reducing duplicated converter code.
- **Multimodal `.strip()` guard** — [#4813 (closed)](https://github.com/HKUDS/nanobot/pull/4813): Protects command-dispatch paths from `AttributeError` when `msg.content` is a list-form multimodal message.
- **Feishu SDK dependency** — [#4926 (closed)](https://github.com/HKUDS/nanobot/pull/4926): Includes `lark-oapi` in the dev extra so documented local tests work out of the box.

Additionally, 21 issues were closed, many linked to the comprehensive security and correctness audit (#4815) that produced 42 findings. This indicates the team is actively fixing reported vulnerabilities and inefficiencies.

## 4. Community Hot Topics

The most active Issue in the last 24 hours is **[#4924 — Heartbeat target selection fails with unified session](https://github.com/HKUDS/nanobot/issues/4924)** (4 comments). The bug describes a failure when no traditional sessions exist but `unifiedSession: true` is enabled. A fix PR [#4928](https://github.com/HKUDS/nanobot/pull/4928) is already open.

The **[Security & Correctness Audit (#4815)](https://github.com/HKUDS/nanobot/issues/4815)** compiled 42 findings, sparking the closure of many related issues (#4776–#4780, #4793, #4799, #4800, #4802, #4806–#4810, etc.). This audit provided a structured foundation for the current wave of fixes and refactors.

Other notable discussions:
- **[#4934 — Qwen thinking content exposure](https://github.com/HKUDS/nanobot/issues/4934):** Users report reasoning content leaking into chat responses. A fix PR [#4946](https://github.com/HKUDS/nanobot/pull/4946) is open.
- **[#4940 — Legacy session metadata loss](https://github.com/HKUDS/nanobot/issues/4940):** Sessions created with old filename format lose `workspace_scope` after restart — a regression affecting WebUI users.

## 5. Bugs & Stability

Bugs and stability issues updated in the last 24 hours fall into several severity levels:

**High severity:**
- **Heartbeat fails in unified session** — [#4924 (open)](https://github.com/HKUDS/nanobot/issues/4924): No target selected when only a unified session exists. Fix PR [#4928](https://github.com/HKUDS/nanobot/pull/4928) is ready.
- **Qwen thinking content leakage** — [#4934 (open)](https://github.com/HKUDS/nanobot/issues/4934): Hybrid thinking mode exposes verbose reasoning. Fix PR [#4946](https://github.com/HKUDS/nanobot/pull/4946) open.
- **Legacy session metadata lost** — [#4940 (open)](https://github.com/HKUDS/nanobot/issues/4940): `workspace_scope` disappears after restart for old-format sessions.

**Medium severity (fixed/closed):**
- Multimodal `.strip()` crash — [#4800 → #4813](https://github.com/HKUDS/nanobot/pull/4813)
- Spurious 128-token budget when context window disabled — [#4802](https://github.com/HKUDS/nanobot/issues/4802) (closed)
- Shared ExecSessionManager cross-session visibility — [#4793](https://github.com/HKUDS/nanobot/issues/4793) (closed, with fix PR [#4862](https://github.com/HKUDS/nanobot/pull/4862) still open)
- WeakValueDictionary GC breakage in Consolidator — [#4789](https://github.com/HKUDS/nanobot/issues/4789) (closed)
- Cron job context sharing across runs — [#4082](https://github.com/HKUDS/nanobot/issues/4082) (closed)

Many of these bugs were identified in the deep audit and have corresponding fix PRs in progress.

## 6. Feature Requests & Roadmap Signals

Several open PRs indicate features likely to land in the next release:

- **Session-local triggers** — [#4942 (open)](https://github.com/HKUDS/nanobot/pull/4942): Lets agents manage `local_trigger` tools and a new skill for conversational trigger management.
- **One-click Render deployment** — [#4937 (open)](https://github.com/HKUDS/nanobot/pull/4937): Adds Render Blueprint for simple cloud deployment with persistent session data.
- **Heartbeat trigger command** — [#4620 (open)](https://github.com/HKUDS/nanobot/pull/4620): Adds CLI and gateway timer heartbeat runner with dry-run and JSON output.
- **Memory archive with provenance** — [#4621 (open)](https://github.com/HKUDS/nanobot/pull/4621): Gates archive facts with source context to reduce duplicate memory entries.
- **Telegram custom Bot API** — [#4919 (open)](https://github.com/HKUDS/nanobot/pull/4919): Allows self-hosted Telegram Bot API servers or enterprise gateways.
- **Config centralization** — [#4918 (open)](https://github.com/HKUDS/nanobot/pull/4918): Introduces `FileConfigRepository` for atomic config file management and improved secret handling.

These features suggest the roadmap prioritizes agent autonomy (local triggers, heartbeat commands), deployment simplicity, configuration hardening, and channel flexibility.

## 7. User Feedback Summary

Recent user interactions highlight several pain points:

- **Security concerns**: Multiple issues (#4776–#4779) described authorization bypasses for `/restart`, `/stop`, system channel, and `process_direct()` methods. Users and auditors flagged these as high-risk.
- **Multimodal compatibility**: Crash when `msg.content` is a list (multimodal) — reported by user AxelRay, fixed in #4813.
- **Context trimming at wrong boundaries**: #4056 (now closed) — assistant question dropped before user reply, hurting conversation coherence.
- **Configuration silent fallback**: #4067 — invalid config silently falls back to defaults, confusing users.
- **WebSocket message drops**: #4062 — proactive messages lost when no subscriber is connected.
- **Dream skill overwriting user skills**: #4075 — ownership not enforced on skill file writes.

Overall satisfaction appears moderate; the audit and rapid closure of many issues should improve trust, but users are actively reporting regressions (e.g., #4940 legacy metadata) as new features land.

## 8. Backlog Watch

No long-unanswered important issues were observed in the open items (all open issues are from the last two days). However, several open PRs have been awaiting review for more than a week:

- **[#4621 — Memory archive with provenance](https://github.com/HKUDS/nanobot/pull/4621)** — open since July 1, 15 days.
- **[#4620 — Heartbeat trigger command](https://github.com/HKUDS/nanobot/pull/4620)** — open since July 1, 15 days.
- **[#4862 — Isolate exec session managers](https://github.com/HKUDS/nanobot/pull/4862)** — open since July 9, 7 days.
- **[#4822 — Preserve automation source on streamed replies](https://github.com/HKUDS/nanobot/pull/4822)** — open since July 7, 9 days.
- **[#4908 — Self-contained channels](https://github.com/HKUDS/nanobot/pull/4908)** — open since July 13, 3 days.

These PRs represent substantial refactors and new features that may need maintainer attention to avoid stalling progress.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-07-16

## 1. Today’s Overview
The Hermes Agent project saw high activity today, with **50 issues** and **50 pull requests** updated in the last 24 hours. Nineteen issues were closed, many of them carrying the `sweeper:implemented-on-main` label, indicating that fixes have been merged. Meanwhile, all 50 PRs remain open (none merged/closed today), suggesting a large batch of new contributions under review. No new releases were published. Overall, the project appears to be in an intense maintenance and feature-development cycle, with strong community engagement around dashboard, desktop, and plugin stability.

## 2. Releases
No releases today.

## 3. Project Progress
**Closed issues (implemented-on-main):** Several notable bugs have been resolved, including:
- **Dashboard SSO redirect for basic_auth** ([#64424](https://github.com/NousResearch/hermes-agent/issues/64424)) — fixed HTTP 500 when `basic_auth` is the sole provider.
- **Write-guard error message conflation** ([#64003](https://github.com/NousResearch/hermes-agent/issues/64003)) — agent now correctly distinguishes between protected files and safe-root scope.
- **MoA reference models receiving empty content** ([#64416](https://github.com/NousResearch/hermes-agent/issues/64416)) — cache_control conversion fixed for Claude aggregator.
- **Web provider plugins failing to load** ([#64387](https://github.com/NousResearch/hermes-agent/issues/64387)) — `sys.path` shadowing of PyPI packages resolved.
- **Subagent results lost during streaming** ([#64201](https://github.com/NousResearch/hermes-agent/issues/64201)) — delegate_task results no longer dropped.
- **Desktop cron silently broken** ([#64333](https://github.com/NousResearch/hermes-agent/issues/64333)) — missing import fixed.
- **Child process stdout suppressed in one-shot mode** ([#64504](https://github.com/NousResearch/hermes-agent/issues/64504)) — pytest output no longer truncated.
- **Dashboard mobile session loss on WebSocket reconnection** ([#64017](https://github.com/NousResearch/hermes-agent/issues/64017)) — auto-resume behaviour improved.

**Open PRs (key contributions awaiting merge):** The 50 open PRs target a wide range of improvements:
- **Desktop fixes:** sidebar scoped by profile ([#63618](https://github.com/NousResearch/hermes-agent/pull/63618)), Enter key on Windows ([#64372](https://github.com/NousResearch/hermes-agent/pull/64372)), orphaned backend reaping ([#64344](https://github.com/NousResearch/hermes-agent/pull/64344)), keyboard navigation in clarify choices ([#64346](https://github.com/NousResearch/hermes-agent/pull/64346)).
- **Stability & performance:** memory provider context during compression ([#64342](https://github.com/NousResearch/hermes-agent/pull/64342)), drain accepted provider work before shutdown ([#64364](https://github.com/NousResearch/hermes-agent/pull/64364)), guardrail hard-stop rebound ([#64363](https://github.com/NousResearch/hermes-agent/pull/64363)), delegate child toolset narrowing ([#64366](https://github.com/NousResearch/hermes-agent/pull/64366)).
- **Platform & integrations:** Feishu thread replies ([#64343](https://github.com/NousResearch/hermes-agent/pull/64343)), Feishu reply_in_thread from config ([#64332](https://github.com/NousResearch/hermes-agent/pull/64332)), Concierge remote MCP ([#64349](https://github.com/NousResearch/hermes-agent/pull/64349)).
- **Bug fixes across agent, gateway, and providers:** DeepSeek empty `tool_calls` ([#64345](https://github.com/NousResearch/hermes-agent/pull/64345)), black console window on Windows ([#64339](https://github.com/NousResearch/hermes-agent/pull/64339)), standing goal loop on failed turns ([#64337](https://github.com/NousResearch/hermes-agent/pull/64337)), ACP approval timeout config ([#64336](https://github.com/NousResearch/hermes-agent/pull/64336)), non-standard JSON Schema type sanitisation ([#64331](https://github.com/NousResearch/hermes-agent/pull/64331)).

## 4. Community Hot Topics
| Issue | Comments | 👍 | Summary |
|-------|----------|---|---------|
| [#24860 – Dashboard Chat: Ctrl+V paste broken, image paste not supported](https://github.com/NousResearch/hermes-agent/issues/24860) | **11** | **3** | **Open since May.** Users report clipboard paste in the TUI dashboard is either ignored or incorrectly handled. Image paste support is also missing. This is a high-impact UX bug for web/desktop users. |
| [#64424 – Dashboard auto-SSO redirect breaks for basic_auth providers](https://github.com/NousResearch/hermes-agent/issues/64424) | **5** | 0 | **Closed today.** Caused HTTP 500 when only password auth is configured. Fixed, but the high engagement indicates strong reliance on this auth mode. |
| [#63078 – Desktop: first message in a new session creates blank session](https://github.com/NousResearch/hermes-agent/issues/63078) | **4** | 0 | Users lose their first message entirely – no messages shown, no error. This is a fundamental onboarding regression for the desktop app. |
| [#64333 – Desktop cron silently broken](https://github.com/NousResearch/hermes-agent/issues/64333) | **1** | 0 | **P1 severity.** Every scheduled job fails with missing import. Already fixed on main, but community frustration is evident. |

The underlying pattern is that **dashboard and desktop stability** remain the most pressing community concerns, with basic input and session-management features broken for some users.

## 5. Bugs & Stability
**P1 (Critical):**
- **Desktop cron broken** ([#64333](https://github.com/NousResearch/hermes-agent/issues/64333)) — all cron jobs dead on arrival due to stale bundled code. **Fix implemented on main.**

**P2 (High) – reported today or still open:**
- **Dashboard Chat Ctrl+V paste broken** ([#24860](https://github.com/NousResearch/hermes-agent/issues/24860)) – no fix PR yet.
- **Desktop first message blank session** ([#63078](https://github.com/NousResearch/hermes-agent/issues/63078)) – no fix PR identified.
- **Web dashboard clicking previous session opens blank** ([#63701](https://github.com/NousResearch/hermes-agent/issues/63701)) – reattach/resume bug.
- **Model selector reverts on Telegram session resume** ([#65335](https://github.com/NousResearch/hermes-agent/issues/65335)) – desktop UX regression.
- **GPT-5.6 response placed in reasoning channel** ([#64854](https://github.com/NousResearch/hermes-agent/issues/64854)) – semantic channel mixup.
- **MiniMax M3 rejects browser tools** ([#65166](https://github.com/NousResearch/hermes-agent/issues/65166)) – provider compatibility.
- **CustomProfile sends `reasoning_effort="none"`** ([#65233](https://github.com/NousResearch/hermes-agent/issues/65233)) – HTTP 400 for many APIs.
- **Cron jobs never fire** ([#65348](https://github.com/NousResearch/hermes-agent/issues/65348)) – scheduler scans wrong directory.

**P3 (Medium) – notable:**
- **Subdirectory plugin installs discard .git** ([#65314](https://github.com/NousResearch/hermes-agent/issues/65314)) – prevents updates.
- **Gateway ignores `.no-bundled-skills` opt-out** ([#64860](https://github.com/NousResearch/hermes-agent/issues/64860)) – fixed on main.

**Fix PRs exist for several P2 bugs:** The open PR list includes fixes for Windows console flash, Feishu threads, sanitizer, standing goal loop, ACP timeout, kanban attachment paths, and more. However, many P2 issues listed above do not yet have corresponding fix PRs.

## 6. Feature Requests & Roadmap Signals
- **Markitdown as web_fetch provider** ([#65179](https://github.com/NousResearch/hermes-agent/issues/65179)) – user wants a self-hosted, local, free alternative to hosted web-fetch APIs. Likely to be considered for the next minor release.
- **Configurable default view for file preview** ([#64666](https://github.com/NousResearch/hermes-agent/issues/64666)) – Desktop users want to stay in rendered/source view instead of forced diff.
- **Grok Build runtime parity** ([#65343](https://github.com/NousResearch/hermes-agent/issues/65343)) – xAI provider feature parity with Codex App-Server Runtime.
- **Add MiniMax high-speed model variants** ([#11367](https://github.com/NousResearch/hermes-agent/issues/11367)) – pending since April.
- **Concierge remote MCP** ([PR #64349](https://github.com/NousResearch/hermes-agent/pull/64349)) – pay-per-call market intel, signals move toward commercial plugin ecosystem.
- **Keyboard navigation for clarify choices** ([PR #64346](https://github.com/NousResearch/hermes-agent/pull/64346)) – UX improvement likely to land soon.

**Prediction for next version:** The volume of P2 fixes in open PRs suggests the next release (v0.18.3 or v0.19.0) will focus on **desktop stability, Windows compatibility, and plugin reliability**. Feature-wise, Feishu thread improvements and the Concierge MCP integration appear close to merge.

## 7. User Feedback Summary
- **Pain points:** Dashboard paste broken (long-standing), desktop session management unreliable, cron jobs not working (especially for Windows users), plugin updates broken when installed from subdirectories, model provider incompatibilities (GPT-5.6, MiniMax, CustomProfile).
- **Use cases:** Users are using Hermes for:
  - **Automated software factory orchestration** (see #64407 – factory issue).
  - **Group chat integrations** (Feishu/Lark memory bugs).
  - **Web dashboard via mobile** (session loss on lock-screen reconnection).
  - **Complex multi-model workflows** (MoA with Claude, delegate tasks).
- **Satisfaction:** High participation (50 issues, 50 PRs in 24h) shows a very active community. The prompt closure of many bugs (19 closed today) suggests maintainers are responsive. However, the sheer number of open P2 bugs and the age of #24860 indicate that some core UX issues still need sustained attention.

## 8. Backlog Watch
- **#44771 – Curator LLM review enters multi-hour loop on symlinked skill clusters** – open since June, updated today but no fix PR. Consumed 91M tokens, P2. Needs a maintainer to triage the symlink handling logic.
- **#24860 – Dashboard paste broken** – open since May, 11 comments, 3 👍. No fix PR yet despite high impact.
- **#11367 – MiniMax high-speed model variants** – open since April, awaiting addition of model list. Low effort, high user value.
- **#65348 – Cron jobs never fire (wrong directory)** – reported today, P2, no fix PR yet. Critical for any user relying on cron.
- **#64331 (PR) and associated issue** – Non-standard JSON Schema sanitisation for MCP – important for Anthropic provider compatibility, but open since yesterday.

These items would benefit from immediate maintainer attention to reduce user friction and prevent regressions from piling up.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest – 2026-07-16

## 1. Today's Overview
Project activity remains **moderate**, with 6 issues touched in the last 24 hours (3 stale closures, 3 new open items) and 2 open pull requests. No new releases or merges occurred today. The community is reporting a few **critical bugs** (ARM64 launcher missing, process hook deserialisation defect) alongside a **feature request** for stateless gateway sessions. The three stale issues (#3153, #3197, #3196) were automatically closed after inactivity, indicating that some long-standing bugs may not have received maintainer attention. Overall, the project is in a **maintenance phase** with active bug triage but no feature advancements merged today.

## 2. Releases
No new releases today.

## 3. Project Progress
No pull requests were merged or closed in the last 24 hours. Two PRs remain open:
- **#3259** – “Update PicoClaw description for parallelization” (opened 2026-07-15) – a minor documentation update.
- **#3222** – “refactor(deltachat): cleanup implementation, documentation -200LOC” (opened 2026-07-03) – a significant refactoring for the DeltaChat backend, still awaiting review.

No feature completions or bug fixes were landed today.

## 4. Community Hot Topics
The most active discussions were in the **now-closed stale issues**, which had accumulated 4, 2, and 2 comments:
- **#3153** [CLOSED] – [BUG] Volcengine Doubao Seed tool calls leak as `<seed:tool_call>` text  
  [Link](https://github.com/sipeed/picoclaw/issues/3153)  
  4 comments. Users reported that tool calls are sometimes returned as raw text instead of being executed. This remains an open behaviour concern even after closure.
- **#3197 / #3196** [CLOSED] – [BUG] Codex and antigravity OAuth login not working  
  [Link #3197](https://github.com/sipeed/picoclaw/issues/3197) | [Link #3196](https://github.com/sipeed/picoclaw/issues/3196)  
  2 comments each. Both report broken OAuth for Codex/antigravity integrations. Duplicate reports suggest a systemic authentication issue.

No new open issues or PRs have attracted comments yet. Community engagement is **low**, with fresh items still awaiting user feedback.

## 5. Bugs & Stability
Two **high-severity bugs** were opened today:

| Issue | Summary | Severity | Fix PR? |
|-------|---------|----------|---------|
| [#3260](https://github.com/sipeed/picoclaw/issues/3260) | ARM64 (arm64) release lacks a launcher executable – cannot start on Raspberry Pi 3B (Raspbian Lite) | **Critical** – blocks usage on ARM hardware | None yet |
| [#3258](https://github.com/sipeed/picoclaw/issues/3258) | Process hook `before_tool` modify not working: decision field discarded, args misparsed due to deserialisation defect | **High** – breaks custom tool rewriting (DeepSeek + Telegram) | None yet |

Three stale bugs (#3153, #3197, #3196) were auto-closed – these may still affect users but are no longer tracked as open. **No fix PRs exist for any of the open bugs.**

## 6. Feature Requests & Roadmap Signals
One **feature request** opened today:
- **[#3257](https://github.com/sipeed/picoclaw/issues/3257)** – “Add stateless/no-history mode for gateway sessions”  
  User wants the ability to run gateway sessions without persisting conversation history, similar to the `--session` switch in agent mode. This is a **clean, low-complexity addition** likely to be included in the next minor release (e.g., v0.3.2) if the maintainer accepts it.

No other feature requests appeared today.

## 7. User Feedback Summary
- **Pain points:**
  - ARM64 users cannot run PicoClaw at all on Raspberry Pi (#3260).
  - Custom tool hooks (process hooks) are broken in v0.3.1, making advanced automation unreliable (#3258).
  - OAuth login for Codex/antigravity integrations has been failing since v0.2.9 (now stale-closed, but no known fix).
- **Use cases:**
  - Gateway mode (non-CLI) is popular; users need stateless sessions for ephemeral conversations.
  - Tool-calling with Volcengine providers still suffers from intermittent text leaks (#3153).
- **Satisfaction/dissatisfaction:**
  - Mixed: the project is active on issue triage but **slow to land fixes**. The closure of bugs without resolution may frustrate users.

## 8. Backlog Watch
The following items need **maintainer attention** due to age or lack of progress:

| Item | Type | Created | Last Updated | Status | Notes |
|------|------|---------|--------------|--------|-------|
| [#3222](https://github.com/sipeed/picoclaw/pull/3222) | PR – DeltaChat refactor | 2026-07-03 | 2026-07-15 | Open, no review | Significant code reduction (-200 LOC), needs maintainer review and merge. |
| [#3153](https://github.com/sipeed/picoclaw/issues/3153) | Bug – Volcengine tool call leak | 2026-06-22 | 2026-07-15 | Closed (stale) | Underlying issue still unfixed; may be reopened if users report again. |
| [#3197 / #3196](https://github.com/sipeed/picoclaw/issues/3197) | Bug – OAuth login failures | 2026-06-30 | 2026-07-15 | Closed (stale) | Duplicate reports; no root cause identified or patch released. |

The stale-closed bugs suggest the project needs a **dedicated bug-squashing release** to regain user trust. The open PR #3222 is a substantial improvement that should be prioritised for review.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-07-16

## 1. Today's Overview
Activity remained moderate with 2 issues and 9 pull requests updated in the last 24 hours. One critical bug report (#3058) about permanent dropping of transient delivery failures was filed and immediately addressed with a fix PR (#3059), signalling responsive maintainers. Three features reached completion: a provider‑agnostic persistent memory system (PRs #3012, #3013) and support for the OpenCode agent provider (#3056). A new one‑command deploy script (#3055) also landed. The project is solidifying its core delivery reliability while expanding provider choice and DevOps tooling.

## 2. Releases
*No new releases were published today.*

## 3. Project Progress (Merged/Closed PRs)
Four pull requests were merged or closed today, advancing both core infrastructure and operational tooling:

- **[#3012](https://nanocoai/nanoclaw/pull/3012) – Provider‑agnostic persistent memory (merged)**  
  Adds a shared memory tree (`memory/index.md` and `memory/system/definition.md`) that loads on new agent contexts, replacing provider‑specific memory implementations.

- **[#3013](https://nanocoai/nanoclaw/pull/3013) – Codex memory integration (merged)**  
  Implements the Codex‑side counterpart for the memory system, hooking into `SessionStart` commands while preserving existing Codex behaviour.

- **[#3056](https://nanocoai/nanoclaw/pull/3056) – OpenCode agent provider (merged)**  
  Adds `opencode serve` as a new provider inside the container agent‑runner, with MCP server config translation and idle‑timeout handling.

- **[#3055](https://nanocoai/nanoclaw/pull/3055) – One‑command deploy script (merged)**  
  Introduces `deploy.sh` that runs `git pull`, `pnpm install`, `pnpm build`, and restarts the service over SSH – aligning with the existing `setup/*.sh` convention.

Additionally, issue **[#3054](https://nanocoai/nanoclaw/issues/3054)** (stale `agent_message_policies` rows causing FK failures) was closed, likely resolved by related work on approval lifecycle handling.

## 4. Community Hot Topics
While the project sees relatively few comments per item, two threads stand out for their technical importance:

- **[#3058](https://nanocoai/nanoclaw/issues/3058) – Transient send failures permanently dropped**  
  One comment (the author’s own) highlights a clear design flaw: after three fast retries, any delivery failure is treated as permanent, even for network blips. The associated fix PR (#3059) has been opened.

- **[#2591](https://nanocoai/nanoclaw/pull/2591) – Namespace user IDs by channel‑type prefix**  
  An open PR since May, updated yesterday. It proposes replacing bare‑colon separators with channel‑type prefixes to avoid ID collisions across integrations. The long tail of updates suggests ongoing discussion or refinement.

**Underlying need:** Both threads reflect a desire for more robust, production‑grade handling of multi‑channel, failure‑prone environments.

## 5. Bugs & Stability
Two bugs were reported today, one of high severity:

| Severity | Issue | Description | Fix PR |
|----------|-------|-------------|--------|
| **High** | [#3058](https://nanocoai/nanoclaw/issues/3058) | `src/delivery.ts` permanently drops outbound messages after 3 fast retries, ignoring transient vs. permanent failures. Directly causes message loss. | [#3059](https://nanocoai/nanoclaw/pull/3059) (open) |
| **Medium** | [#3054](https://nanocoai/nanoclaw/issues/3054) *(closed)* | `agent_message_policies` FK constraints block group deletion when the related rows are not cleaned up; CLI destination removal leaves stale gates. Appears resolved. | – |

Additionally, **[#3051](https://nanocoai/nanoclaw/pull/3051)** (open PR) addresses a preflight validation gap: provider configuration is not validated before saving, which could lead to runtime errors. This falls under **medium** severity (operational misconfigurations).

## 6. Feature Requests & Roadmap Signals
The most prominent feature on the horizon is the **Claude↔Codex quota fallback** system (PR [#3057](https://nanocoai/nanoclaw/pull/3057)), which also includes Telegram/WhatsApp channel adapters and a pilot activation module. Although still open, it signals a clear roadmap direction toward automatic provider failover and multi‑channel support.

The merged memory system (PRs #3012, #3013) and OpenCode provider (#3056) are now part of the codebase, likely appearing in the next minor release. The deploy script (#3055) suggests increased attention to production lifecycle.

**Prediction:** The next version will likely include the quota fallback feature (#3057) alongside the memory system, OpenCode provider, and the delivery fix (#3059).

## 7. User Feedback Summary
Although explicit feedback is sparse, the issues and PRs reveal concrete pain points:

- **Delivery reliability:** A user (mashkovtsevlx) identified that network blips permanently discard agent replies, demonstrating a real‑world scenario where transient failures cause permanent message loss.
- **Data integrity:** A user (jguillen1984) reported that deleting agent groups fails due to unremoved policy rows, and CLI‑based destination removal leaves stale data – indicating cleanup routines are incomplete.
- **Provider configuration validation:** A contributor (OtherVibes) found that provider settings can be saved without validation, leading to silent runtime failures.

Overall, users are pushing for greater resilience and correctness in edge‑case handling.

## 8. Backlog Watch
Two open items require maintainer attention:

- **[PR #2591](https://nanocoai/nanoclaw/pull/2591)** – Namespace user IDs by channel‑type prefix (open since May 22). Last updated July 15, but no merge or close. This change affects core user identification and should be prioritised to avoid ID collisions.

- **[PR #3040](https://nanocoai/nanoclaw/pull/3040)** – Unify approval holds behind one lifecycle contract (open since July 14). Part of the broader approval‑policies rework; if left unresolved, future changes to approval behaviour could become inconsistent.

Both PRs are tagged as `[PR: Fix, core-team]` or `[PR: Fix, follows-guidelines]`, indicating they are considered important but have not yet received final review or sign‑off.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest — 2026-07-16

## 1. Today's Overview
Project activity is minimal today with no new releases, no merged or closed pull requests, and only a single issue updated in the last 24 hours. That issue (#976) reports a critical **SIGSEGV crash** that affects the `nullclaw gateway` service on aarch64 Linux, causing a continuous crash-loop on every inbound Telegram message. No maintainer responses or fix PRs are visible yet. The project appears to be in a quiet maintenance phase, but the severity of the reported bug demands immediate attention.

## 2. Releases
No new releases were published today. The latest available version remains **v2026.5.29** (as referenced in the issue).

## 3. Project Progress
No pull requests were updated, merged, or closed in the last 24 hours. No code changes or feature advancements have been recorded for today.

## 4. Community Hot Topics
No issues or PRs have attracted comments or reactions today. The sole open issue (#976) has zero discussion so far, indicating either low community engagement or that the bug was reported very recently.

- [#976] SIGSEGV on every inbound Telegram message  
  https://github.com/nullclaw/nullclaw/issues/976

Although currently quiet, this issue is likely to become a hot topic once users encounter the crash-loop behavior.

## 5. Bugs & Stability
| Severity | Issue | Description | Fix PR Exists? |
|----------|-------|-------------|----------------|
| **Critical** | #976 | On aarch64 Linux, `nullclaw v2026.5.29` segfaults on every inbound Telegram message. The inbound worker thread is spawned with a ~512 KB stack, which overflows, causing a crash-loop under `systemd Restart=always`. Messages are dropped. | No |

This is a production-blocking bug for any aarch64 deployment using the Telegram gateway. No known workaround or fix is available in the repository today.

## 6. Feature Requests & Roadmap Signals
No feature requests were filed or discussed in the last 24 hours. The only user feedback is the crash report, which implies a pressing need for stability fixes rather than new features. The next version will likely focus on resolving the stack overflow issue (e.g., increasing the default thread stack size or switching to a dynamic allocation model).

## 7. User Feedback Summary
The only user pain point comes from the reporter of #976 (wonhotoss): the nullclaw gateway is **completely unusable** on aarch64 Linux because every Telegram message kills the process. The user’s use case (automated Telegram bot/gateway) is broken, and the crash-loop pattern suggests high dissatisfaction with the current release. No positive feedback was recorded.

## 8. Backlog Watch
The following item is new but warrants close monitoring given its critical impact:

- **Issue #976** (opened today, 2026-07-16) – urgently needs maintainer triage and a fix. No assignee, no label, no response yet.  
  https://github.com/nullclaw/nullclaw/issues/976

No other long-unanswered issues or PRs were identified in today’s data window.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest – 2026-07-16

*Generated from GitHub activity on the [nearai/ironclaw](https://github.com/nearai/ironclaw) repository.*

---

## 1. Today’s Overview

The project is in a phase of intense stabilization and architectural consolidation. 24 issues and 37 pull requests were updated in the last 24 hours, reflecting sustained effort from the core team to address regressions and finalize the Reborn runtime migration. Slack integration remains the single largest source of user-facing bugs, with multiple P1/P2 issues (wrong DM delivery, broken disconnect, silent failures) still unresolved despite prior fixes. On the positive side, several infrastructure wins landed today: the unified generic extension runtime (PR #6116) advanced, the v1 runtime removal PR (#6123) was opened, and a cluster of OAuth lifecycle bugs (#6130, #6128) are being fixed independently of the larger branch. No new release was tagged; version 0.28.x remains current, with 0.29.x still pending in PR #5598.

---

## 2. Releases

*None.*

No new releases were published in the last 24 hours. The last release remains 0.28.1 (May 2026). A version bump to 0.29.1 is queued in open PR #5598 but has not yet been merged.

---

## 3. Project Progress

**Merged / closed PRs (13 total):**

- [#6135 – `fix(reborn): recover Slack host after OAuth activation`](https://github.com/nearai/ironclaw/pull/6135) – Fixes catalog construction and post-OAuth activation for Slack. Closes a regression where Slack host state was lost.
- [#6128 – `fix(auth): audit + review blockers — scope ceiling, Notion refresh, fan-out retryability, removal/callback race`](https://github.com/nearai/ironclaw/pull/6128) – Confirmed fixes for shared-vendor auth blockers, landed as independent commits.
- [#6084 – `feat(webui): replace native confirmations with a shared modal`](https://github.com/nearai/ironclaw/pull/6084) – Replaces browser-native `confirm()` dialogs for chat deletion, automation deletion, and extension removal with a Reborn design-system modal.
- [#6082 – `fix(webui-v2): render extension registry without enrichment delay`](https://github.com/nearai/ironclaw/pull/6082) – Speeds up Extension Registry loading by rendering catalog data immediately instead of waiting for slower enrichment.
- [#6055 – `test(reborn): StaleSurface same-run refresh pin + extension-remove channel-cleanup integration coverage`](https://github.com/nearai/ironclaw/pull/6055) – Adds integration tests for production surface refresh and channel cleanup on extension removal.
- Other closed PRs include dependency bumps, CI fixes, and minor documentation updates.

**Key feature advances (open PRs):**

- [#6116 – `feat(reborn): unified generic extension runtime + Option A honest state machine`](https://github.com/nearai/ironclaw/pull/6116) – Core architectural change merging the unified runtime into main. Currently parked pending review.
- [#6140 – `feat(reborn): github.get_job_logs + SSRF-safe redirect egress`](https://github.com/nearai/ironclaw/pull/6140) – Adds first-party GitHub CI log retrieval capability with security-aware redirect handling.
- [#6113 – `test(reborn): channel-lifecycle transition coverage`](https://github.com/nearai/ironclaw/pull/6113) – Tests for delivery honesty, re-auth, exit edges, OAuth retry, and restart survival.

---

## 4. Community Hot Topics

Issues with the most discussion (3 comments each, the highest count in this window):

- **[#3533 – [CLOSED] Telegram in v 0.28.1 does not automatically setup from UI](https://github.com/nearai/ironclaw/issues/3533)** – A long-standing P1 bug that was closed. While not the newest topic, it still attracted attention today as a reference for integration lifecycle issues.
- **[#5834 – [OPEN] Slack disconnect request is incorrectly rejected by agent](https://github.com/nearai/ironclaw/issues/5834)** – A P2 bug where asking the agent to disconnect Slack yields an unrelated response. Users cannot disconnect Slack through the agent, indicating a gap in command routing.
- **[#6105 – [OPEN] Extension/channel lifecycle state-machine test](https://github.com/nearai/ironclaw/issues/6105)** – A meta-issue tracking the most persistent bug family (Slack lifecycle) that has regressed across four QA waves. It requests comprehensive test coverage and cron-based canary runs.

The underlying need behind these topics is clear: the Slack integration lifecycle (install → connect → disconnect → reconnect → uninstall) is brittle and lacks robust testing. Users are unable to reliably manage Slack connections, and attempts to fix have repeatedly introduced regressions.

---

## 5. Bugs & Stability

**Severity P1 (critical, user-blocking):**

- [#5943 – *Slack DM action posts to current channel instead of user's direct messages*](https://github.com/nearai/ironclaw/issues/5943) – Open, no fix PR yet.
- [#5877 – *Slack notification delivered to the wrong user*](https://github.com/nearai/ironclaw/issues/5877) – Open, no fix PR yet.

**Severity P2 (major, degraded experience):**

- [#5834 – *Slack disconnect request incorrectly rejected*](https://github.com/nearai/ironclaw/issues/5834) – Open, no dedicated fix PR.
- [#5944 – *Slack DM delivery silently fails*](https://github.com/nearai/ironclaw/issues/5944) – Open.
- [#5882 – *Repeated Slack reconnect leaves auth in broken state*](https://github.com/nearai/ironclaw/issues/5882) – Open.
- [#6125 – *User message rejected with “busy” error while routine runs in background*](https://github.com/nearai/ironclaw/issues/6125) – New today. No fix PR yet.

**Severity P3 (minor, cosmetic/annoyance):**

- [#6127 – *Running routine displays “Previous run still in progress” on first execution*](https://github.com/nearai/ironclaw/issues/6127) – New today.
- [#6126 – *First message in a new chat has no loading or streaming state*](https://github.com/nearai/ironclaw/issues/6126) – New today.
- [#6052 – *Extensions Registry takes up to 10 seconds to load*](https://github.com/nearai/ironclaw/issues/6052) – Closed, fixed by PR #6082.

**Newly discovered structural bugs (tier-2 coverage hunt):**

- [#6138 – *Tier-2 harness can't express compound denied-gate + HTTP-egress-error scenario*](https://github.com/nearai/ironclaw/issues/6138)
- [#6137 – *Mixed-batch gate resume never redispatches non-first gated call*](https://github.com/nearai/ironclaw/issues/6137)
- [#6136 – *WebChatV2Event variants accepted/cancelled/failed are dead code*](https://github.com/nearai/ironclaw/issues/6136)

These were found during test infrastructure work and point to deeper logic gaps in the Reborn runtime.

**Fix PRs active:**

- [#6130 – *OAuth flow-lifecycle hygiene*](https://github.com/nearai/ironclaw/pull/6130) – Fixes supersede-on-start, durable PKCE, expiry projections. Targets live bugs on `main`.
- [#6129 – *fix(threads): undo #5902 regression*](https://github.com/nearai/ironclaw/pull/6129) – Restores word-boundary markers and 16KB/32KB caps broken by a prior compaction fix.

---

## 6. Feature Requests & Roadmap Signals

- **[#6105 – Extension/channel lifecycle state-machine test](https://github.com/nearai/ironclaw/issues/6105)** – Not a feature request per se, but a demand for robust automated testing of the most fragile path. Predict that the next release will include the `channel-lifecycle` test coverage from PR #6113.
- **[#6118 – Add per-user secrets management to Admin UI](https://github.com/nearai/ironclaw/issues/6118)** – Backend APIs exist but frontend is missing. Likely to be implemented in the next minor version.
- **[#6083 – Replace native confirmation dialogs with shared modal](https://github.com/nearai/ironclaw/issues/6083)** – Already closed with PR #6084, so this improvement is shipping.
- **[#6117 – Workspace displays untranslated region names and raw file sizes](https://github.com/nearai/ironclaw/issues/6117)** – UI polish request. Predict a quick fix in 0.29.
- **[#6140 – `github.get_job_logs` capability](https://github.com/nearai/ironclaw/pull/6140)** – New tool for CI log retrieval. May land in 0.29 if the PR is accepted.

The most impactful roadmap signal is the **unified generic extension runtime** (PR #6116), which promises to harmonize extension and channel management under a single state machine. Once merged, this should reduce the recurrence of lifecycle regressions.

---

## 7. User Feedback Summary

Pain points captured from recent issues:

- **Slack integration is unreliable**: Users cannot disconnect Slack (#5834), DM messages are silently lost or delivered to the wrong user (#5877, #5944, #5943), and repeated reconnection attempts permanently break authentication (#5882). This is the most vocal area of dissatisfaction.
- **Routines lock out user input**: When a scheduled routine runs, the user is blocked from sending messages with a “busy” error (#6125). This breaks the conversational experience.
- **Zero feedback on first message**: The WebUI stays completely blank until the first response arrives, making the app appear frozen (#6126).
- **Confusing status messages**: The UI incorrectly reports “Previous run still in progress” for first-time executions (#6127).
- **Admin UI gaps**: Administrators cannot create tokens for existing users (#6085) or manage per-user secrets (#6118) through the WebUI.
- **Workspace localization missing**: Internal identifiers (`home`, `memory`) and byte counts (`5242880 bytes`) are shown raw (#6117).

Satisfaction signals are harder to find, but the quick closure of several P3 UI bugs (modals, registry loading speed) suggests the team is responsive to polish feedback.

---

## 8. Backlog Watch

Issues and PRs that have been open for an extended period without resolution or maintainer response:

- **[#5602 – Can't connect Slack from chat](https://github.com/nearai/ironclaw/issues/5602)** – Opened 2026-07-03 (13 days ago). This is a duplicate of the broader Slack lifecycle problem but hasn’t been closed or explicitly linked to a fix. Last updated today with no new action.
- **[#5598 – Release PR for 0.29.1](https://github.com/nearai/ironclaw/pull/5598)** – Open since 2026-07-03. Despite many fixes landing, this release has not been merged. It includes breaking changes in `ironclaw_common` (0.4.2 → 0.5.0) and `ironclaw_skills` (0.3.0 → 0.4.0). The delay suggests the team is waiting for the unified runtime PR to stabilize before cutting a release.
- **[#5910 – “hydrate approval gates on notification open”](https://github.com/nearai/ironclaw/pull/5910)** – Open since 2026-07-10. A bot-authored PR (by `ironloopai[bot]`) that adds subscription-based approval gate delivery. No human review comments visible. May need maintainer attention to unblock.

No other issues have gone completely unanswered for more than a week; the core team is highly active. However, the sheer volume of Slack bugs that have persisted across multiple QA waves (documented in #6105) indicates a structural gap that the unified runtime (PR #6116) aims to close.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-07-16

## 1. Today's Overview
Project activity remains high, with **17 pull requests** updated in the last 24 hours (**11 merged/closed, 6 open**) and **6 issues** touched (5 closed stale, 1 new open). A new release **LobsterAI 2026.7.15** shipped, bringing UI improvements, a Windows web installer option, and model additions. The team is actively addressing user-reported bugs (e.g., multiple file selection, content copy, IM loading state) and polishing the update experience. The single open issue (#2342) about persistent advertising has attracted immediate user feedback, indicating potential UX friction.

## 2. Releases
**LobsterAI 2026.7.15** ([release associated PRs](https://github.com/netease-youdao/LobsterAI/pull/2322))  
*What's Changed* (from PR #2322–#2324):
- **feat: optimize file card** — UI refinement for file attachments.
- **feat(build): add opt-in Windows web installer target** — new installation option for Windows users.
- **feat(cowork): revamp homepage quick-action scenarios** — redesigned quick actions on cowork homepage.

No breaking changes or migration notes were declared in the release description. Users upgrading from earlier versions should see improved attachment handling and a new installer choice.

## 3. Project Progress
Today’s merged/closed PRs (all closed on 2026-07-15) reflect focused work on stability, UI polish, and model support:

| PR | Area | Summary |
|----|------|---------|
| [#2341](https://github.com/netease-youdao/LobsterAI/pull/2341) | Multiple | Release branch for 2026.7.13 (merged) |
| [#2340](https://github.com/netease-youdao/LobsterAI/pull/2340) | Multiple | Reverted "fix: fixed model not allowed" |
| [#2339](https://github.com/netease-youdao/LobsterAI/pull/2339) | renderer | Align update card header titles in narrow sidebars |
| [#2337](https://github.com/netease-youdao/LobsterAI/pull/2337) | renderer, etc. | Fixed model not allowed (reverted by #2340) |
| [#2338](https://github.com/netease-youdao/LobsterAI/pull/2338) | renderer | Refined blocking update overlay (centered progress, scrollable notes, error recovery) |
| [#2336](https://github.com/netease-youdao/LobsterAI/pull/2336) | renderer, main | Grouped General settings into labeled cards (basics, notifications, data & privacy) |
| [#2335](https://github.com/netease-youdao/LobsterAI/pull/2335) | renderer, artifacts | Fixed content copy bug |
| [#2334](https://github.com/netease-youdao/LobsterAI/pull/2334) | renderer, main | Fixed cowork IM session loading state (prevent cron/desktop events interfering) |
| [#2333](https://github.com/netease-youdao/LobsterAI/pull/2333) | renderer | Block app interactions during user-initiated updates with overlay |
| [#2332](https://github.com/netease-youdao/LobsterAI/pull/2332) | renderer, main, openclaw | Added GPT-5.6 and Grok 4.5 as default models with versioned migration |
| [#1372](https://github.com/netease-youdao/LobsterAI/pull/1372) | renderer | Fixed bug: multiple file selection only kept last file (added `mergeAttachments` unit tests) |

**Notable:** The fix for multiple file selection (#1372, closed) resolves a long-standing issue (#1384). The IM session loading fix (#2334) addresses cowork reliability.

## 4. Community Hot Topics
- **[#2342 – "左下角广告可以彻底关闭吗" (Can the bottom-left ad be permanently closed?)](https://github.com/netease-youdao/LobsterAI/issues/2342)**  
  *Created 2026-07-15, 1 comment, 0 👍*  
  User reports a new advertisement in the bottom-left corner of the app (v2026.7.15) and asks for a permanent disable option. This is the only freshly opened issue today, suggesting a possible regression or new feature that may not have a settings toggle. The lack of upvotes indicates narrow impact so far, but the complaint is direct.

- **Stale closed issues (April 2026)** — Several older issues were automatically closed today (e.g., #1381, #1382, #1383, #1384, #1385) after being marked stale. These covered cron session behavior, log color warnings, WeChat sync duplicates, file selection, and WeChat history clearing. Most were likely fixed by earlier PRs or deemed low priority.

No PRs attracted significant comment activity; the busiest are Dependabot automation PRs (#2167, #2166, #2165, #2164) which remain open for a month.

## 5. Bugs & Stability
**Newly reported (open):**
- **#2342** – Persistent advertisement in bottom-left corner (v2026.7.15). Severity: **Medium** (annoyance, no crash). Root cause unclear; could be intentional or accidental leftover. No fix PR exists yet.

**Recently fixed (merged today):**
- **Content copy bug** – PR [#2335](https://github.com/netease-youdao/LobsterAI/pull/2335) (closed) fixed a copy operation failure.
- **IM session loading state** – PR [#2334](https://github.com/netease-youdao/LobsterAI/pull/2334) (closed) fixed incorrect loading state when cron/desktop events interfered.
- **Multiple file selection** – PR [#1372](https://github.com/netease-youdao/LobsterAI/pull/1372) (closed) resolved issue where only the last file was kept in cowork attachments.

**Long-standing open bug fix (stale):**
- **LRU eviction for LLM memory judge cache** – PR [#1322](https://github.com/netease-youdao/LobsterAI/pull/1322) (open since April 2) implements true LRU eviction but has not been merged. This could affect cowork memory performance over time.

## 6. Feature Requests & Roadmap Signals
- **Ad toggle / permanent disable** – Issue [#2342](https://github.com/netease-youdao/LobsterAI/issues/2342) requests a setting to permanently hide the bottom-left ad. Likely to be addressed in a future release if user feedback grows.
- **Cron task session management** – Closed issue [#1381](https://github.com/netease-youdao/LobsterAI/issues/1381) requested that scheduled tasks reuse the same session instead of opening new ones. No resolution evident; may require architectural change.
- **Log export color improvement** – Closed issue [#1382](https://github.com/netease-youdao/LobsterAI/issues/1382) suggested avoiding red for log exports (since red implies failure). Minor UX polish.

**On the roadmap (based on merged PRs):**
- Support for **GPT-5.6** and **Grok 4.5** default models (#2332) – indicates continued expansion of LLM provider integrations.
- **Windows web installer** (#2323) – going beyond traditional installer.
- **Grouped settings cards** (#2336) – UI reorganization for better discoverability.

## 7. User Feedback Summary
**Pain points:**
- **Advertising intrusion** (#2342) – “I never saw this ad before updating to v2026.7.15, and there is no setting to disable it.”
- **WeChat robot interoperability** (closed #1383, #1385) – Duplicate message sync and incomplete conversation history clearing after deletion.
- **Cron session explosion** (#1381) – Multiple sessions cluttering the UI for scheduled tasks.
- **File selection confusion** (#1384) – Selecting multiple files only attaches the last one (now fixed via #1372).
- **Export log color psychology** (#1382) – Red color misleads users into thinking something failed.

**Satisfaction signals:**
- The team responds quickly to bugs (multiple fixes merged same day as report or shortly after).
- New model support and UI refinements are regularly delivered.

## 8. Backlog Watch
Items that have been open for a long time and may need maintainer attention:

- **PR #1322** – [fix(cowork): true LRU eviction for LLM memory judge cache](https://github.com/netease-youdao/LobsterAI/pull/1322) (open since Apr 2, last updated Jul 15). This performance improvement has been waiting for review/merge for over 3 months. Potential impact on cowork memory efficiency.
- **PR #2167**, **#2166**, **#2165**, **#2164** – Dependabot CI bumps (actions/stale, paths-filter, checkout, trufflehog). All open since Jun 15 with no activity beyond auto-updates. Likely safe to merge, but may require CI pipeline confirmation.
- **PR #1277** – [chore(deps-dev): bump electron group](https://github.com/netease-youdao/LobsterAI/pull/1277) (open since Apr 2, last updated Jul 15). Updates Electron from 40.2.1 to 43.1.0 and electron-builder. A major version bump could introduce breaking changes; requires careful review.
- **All stale closed issues** (e.g., #1381–#1385) are now closed, so no backlog of unanswered user issues remains. The open #2342 is fresh.

> *Generated from GitHub data of [netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI) as of 2026-07-16.*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

# TinyClaw Project Digest — 2026-07-16

## 1. Today's Overview
Activity on the TinyClaw (TinyAGI/tinyagi) repository was minimal over the past 24 hours. No new issues were opened or updated, and no releases were published. A single pull request (#295) received an update, proposing a bug fix in the CLI team removal logic. While project momentum appears low, the existence of this open fix suggests ongoing maintenance efforts.

## 2. Releases
*None.* No new versions were released today.

## 3. Project Progress
No pull requests were merged or closed today. The only open PR (#295) is a fix that remains in review. No features advanced to completion.

## 4. Community Hot Topics
**Most (and only) active item:**
- **PR #295** – `fix(cli): print the "New leader" note after removing a team leader`  
  👤 Author: Osamaali313 | 💬 Comments: 0 | 👍 Reactions: 0  
  🔗 [TinyAGI/ tinyagi PR #295](https://github.com/TinyAGI/tinyagi/pull/295)

The PR addresses a logical bug where a condition checking the new leader assignment always evaluates to false. Although it has no comments or reactions, its presence indicates a contributor identified a real CLI output issue. The lack of discussion may reflect low community engagement or that the fix is straightforward.

## 5. Bugs & Stability
**One bug reported (via PR):**
- **Severity: Medium** – The `teamRemoveAgent` function in `packages/cli/src/team.ts` contains an always‑false condition (`team.leader_agent === newLeader` but `newLeader` is assigned *after* the comparison). This prevents the "New leader" message from being printed when the removed agent was the team leader.  
  🔧 Fix proposed in PR #295 – replaces the stale reference with the actual new leader value.

No crashes, regressions, or other stability issues were reported today.

## 6. Feature Requests & Roadmap Signals
No feature requests were made today. The project shows no signal of new roadmap items or planned enhancements.

## 7. User Feedback Summary
No user feedback or pain points were expressed in issues, comments, or PR discussions over the past 24 hours. The low activity level makes it difficult to gauge satisfaction or dissatisfaction.

## 8. Backlog Watch
No important issues or PRs remain unanswered for an extended period. The current open PR (#295) is recent (created July 15) and does not yet qualify as backlog.

---

**Project Health Note:**  
TinyClaw’s activity today is subdued, with only one open pull request and zero community interaction. While the project is not stagnant, sustained contribution and issue resolution would benefit from additional maintainer and community engagement.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest – 2026-07-16

## 1. Today’s Overview
The Moltis project saw **high activity** over the past 24 hours, with **6 pull requests merged or closed** and **1 open issue** updated. All six PRs were merged on July 15, reflecting a focused push on provider enhancements, bug fixes, and platform compatibility. The lone open issue—a long-standing feature request—received a comment, but no new releases or breaking changes were published. Overall, the project is in a **healthy state**, with maintainers actively addressing both feature requests and stability concerns.

## 2. Releases
*No new releases were published in the last 24 hours.*

## 3. Project Progress
Six pull requests were merged or closed today, spanning new features, fixes, and routine maintenance:

- **feat(providers): add MiniMax M3 model support** ([#1151](https://github.com/moltis-org/moltis/pull/1151))  
  Adds the MiniMax M3 model to the static model registry while retaining M2.7, along with context-length and image-input metadata and endpoint documentation.

- **feat(external-agents): auto-detect ACP agents** ([#1149](https://github.com/moltis-org/moltis/pull/1149))  
  Introduces named ACP agent kinds (Copilot, Codex, Claude, Pi, opencode, Gemini, Augment, Kiro, OpenClaw, OpenHands, Kimi, Stakpak, fast-agent) with binary-based auto-detection and default stdio commands.

- **fix(providers): derive openai-codex token expiry from JWT exp claim** ([#1152](https://github.com/moltis-org/moltis/pull/1152))  
  Fixes a critical bug where the `openai-codex` provider stored tokens with `expires_at: null`, causing all sessions to fail after ≈10 days with no recovery except manual re‑login.

- **fix(providers): derive context windows from capabilities** ([#1150](https://github.com/moltis-org/moltis/pull/1150))  
  Adds context-window values to model capabilities with centralized fallback mappings, and parses GitHub Copilot live metadata for accurate limits.

- **fix(cli): support services without systemd** ([#1153](https://github.com/moltis-org/moltis/pull/1153))  
  Provides a fallback supervisor script for Linux containers (e.g., Coder/devbox) where `systemd --user` is unavailable, enabling service management (install/status/stop/restart/uninstall).

- **chore(deps): bump npm_and_yarn group** ([#1148](https://github.com/moltis-org/moltis/pull/1148))  
  Routine dependency bumps for `esbuild` and `vite` in the web UI and documentation directories.

## 4. Community Hot Topics
The only issue updated in the last 24 hours is **#574 – [Feature]: Model Routing Per Topic** ([#574](https://github.com/moltis-org/moltis/issues/574)), opened on April 6 and updated on July 15. It has **1 comment** and **1 thumbs‑up reaction**. The request asks for the ability to route queries to different models based on topic (e.g., use a cheaper model for simple questions). Although engagement is low, the feature resonates with users seeking intelligent model selection. No other issues or PRs generated significant community discussion today.

## 5. Bugs & Stability
Two fixes merged today address notable stability issues:

- **Critical**: Token expiry null in `openai-codex` provider ([#1152](https://github.com/moltis-org/moltis/pull/1152)). This bug caused session downtime every ~10 days with no automatic recovery. The fix derives expiry from the JWT `exp` claim, restoring seamless session continuity.

- **Moderate**: Lack of systemd in containerized environments ([#1153](https://github.com/moltis-org/moltis/pull/1153)). Users on Coder/devbox containers could not install/restart Moltis services. The new fallback supervisor script resolves this without requiring systemd.

- **Low**: Context-window mismatches for GitHub Copilot/Copilot‑based providers ([#1150](https://github.com/moltis-org/moltis/pull/1150)). The fix ensures context windows are correctly derived from live metadata, preventing truncation or over‑allocation.

No new bugs or regressions were reported in the last 24 hours beyond those already addressed by the above fixes.

## 6. Feature Requests & Roadmap Signals
- **Model Routing Per Topic** ([#574](https://github.com/moltis-org/moltis/issues/574)) remains an open enhancement request. Given the project’s recent focus on provider flexibility and model metadata (PRs #1151, #1150), a topic‑based routing capability could be a natural next step, possibly in the next minor release.

- The merged PRs signal several roadmap priorities:
  - **Broader provider support** (MiniMax M3) and accurate model capabilities.
  - **External agent ecosystem** (ACP auto‑detection) for seamless integration with popular AI agents.
  - **Better platform support** (systemd fallback for containers) to expand deployment flexibility.

These changes are likely to be part of the next version, along with the token‑expiry fix and context‑window improvements.

## 7. User Feedback Summary
- The primary explicit user request is **topic‑based model routing** (Issue #574), indicating a desire for cost‑efficient intelligent routing.
- The token‑expiry fix (#1152) and systemd fallback (#1153) address pain points reported by users experiencing session drops and deployment difficulties in container environments.
- No negative feedback or satisfaction signals were captured in the data; the swift merging of fixes suggests maintainers are responsive to user needs.

## 8. Backlog Watch
- **Issue #574 – Model Routing Per Topic** ([#574](https://github.com/moltis-org/moltis/issues/574)) has been open since **April 6, 2026** (over 3 months) with only one comment and one reaction. While not high‑urgency, its age and the lack of assignee or milestone indicate it may need maintainer attention or a decision on roadmap inclusion.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest – 2026-07-16

## 1. Today's Overview
The CoPaw project shows **very high activity** over the past 24 hours, with **50 issues** updated (23 open, 27 closed) and **43 pull requests** updated (22 open, 21 merged/closed). No new releases were published. The community is actively reporting bugs, especially around the recent 2.0 upgrade, while the development team is responding with targeted fixes for memory, channel compatibility, and tool execution. Feature requests continue to focus on enterprise OS support, knowledge management, and multi-agent collaboration improvements. The project appears healthy and well-maintained, with maintainers merging multiple PRs and addressing regressions promptly.

---

## 2. Releases
**None** – no new versions published today.

---

## 3. Project Progress
Today’s merged/closed PRs (21 total) include several important improvements:

- **Memory & Embedding Fixes** – [#6153](https://github.com/agentscope-ai/QwenPaw/pull/6153) upgraded ReMe to 0.4.1.1, added file size limits (10 MiB) and fixed OpenAI‑compatible dimension passing.  
- **Website & Analytics** – [#6147](https://github.com/agentscope-ai/QwenPaw/pull/6147) added blog view/like counts with Supabase and switched GA to QwenPaw property.  
- **GBK Encoding Fix** – [#6140](https://github.com/agentscope-ai/QwenPaw/pull/6140) added `errors='replace'` to `_run_command` for GBK compatibility.  
- **CI & Validation** – [#6143](https://github.com/agentscope-ai/QwenPaw/pull/6143) passed Supabase secrets to website build; [#6142](https://github.com/agentscope-ai/QwenPaw/pull/6142) added frontend validation for `auto_memory_interval`.  
- **Desktop WebView** – [#6107](https://github.com/agentscope-ai/QwenPaw/pull/6107) prevented stale frontend caching in WKWebView (open, ready for review).  

Other notable open PRs advancing features: [#6157](https://github.com/agentscope-ai/QwenPaw/pull/6157) introduces an official Chrome extension plugin; [#5882](https://github.com/agentscope-ai/QwenPaw/pull/5882) integrates OMP workflow modes; [#6150](https://github.com/agentscope-ai/QwenPaw/pull/6150) adds a PawApp SDK and kanban demo.

---

## 4. Community Hot Topics
The most discussed issues and PRs reveal several key themes:

| Issue / PR | Comments | Topic |
|------------|----------|-------|
| [#2911](https://github.com/agentscope-ai/QwenPaw/issues/2911) (CLOSED) | 6 | Windows client closing unexpectedly after hours – resolved. |
| [#6129](https://github.com/agentscope-ai/QwenPaw/issues/6129) (OPEN) | 5 | **Missing spaces & linefeeds in thinking blocks** (rendering bug). |
| [#6125](https://github.com/agentscope-ai/QwenPaw/issues/6125) (OPEN) | 5 | Request for **Kylin OS (Galaxy Kylin) support** – government/enterprise Linux. |
| [#2969](https://github.com/agentscope-ai/QwenPaw/issues/2969) (CLOSED) | 5, 👍3 | **Personal knowledge base integration** – top-voted feature. |
| [#6158](https://github.com/agentscope-ai/QwenPaw/issues/6158) (OPEN) | 4 | **Token usage anomaly** – 28M tokens consumed without user conversation. |
| [#2930](https://github.com/agentscope-ai/QwenPaw/issues/2930) (CLOSED) | 4 | Tool call parse failure + config reset with local models. |

The underlying needs are: **platform compatibility** (Kylin OS, Windows UAC), **transparency** (token logging, session state), and **basic reliability** (rendering spaces, config persistence).

---

## 5. Bugs & Stability
Several high-severity bugs were reported today, many tied to the v2.0.0 upgrade:

- **Token overuse without activity** – [#6158](https://github.com/agentscope-ai/QwenPaw/issues/6158) (OPEN): 28M tokens consumed in a week with nearly no user interaction. **High severity** – potential cost impact.  
- **Memory leak on startup** – [#6124](https://github.com/agentscope-ai/QwenPaw/issues/6124) (OPEN): 36 ReMe background loops consume 48 GB+, never completes. **High severity** for local deployments.  
- **Memory loss / amnesia after upgrade** – [#6148](https://github.com/agentscope-ai/QwenPaw/issues/6148) (OPEN): `/compact` truncates context instead of compressing. **Medium severity** – breaks long conversations.  
- **Windows startup fails after update** – [#6161](https://github.com/agentscope-ai/QwenPaw/issues/6161) (OPEN): Normal user freezes on "Waiting for HTTP ready…". Workaround: Run as Admin. **Medium severity** – UX blocker.  
- **QQ channel crash on local image path** – [#6152](https://github.com/agentscope-ai/QwenPaw/issues/6152) (CLOSED): Pydantic `AnyUrl` validation failure after upgrade. **High severity** – channel broken.  
- **Embedding mapping bug** – [#6155](https://github.com/agentscope-ai/QwenPaw/issues/6155) (OPEN): Missing `pass_dimensions` in config pass, plus auto‑memo crashes. **Medium severity**.  
- **MODEL_EXECUTION_ERROR after abort** – [#6141](https://github.com/agentscope-ai/QwenPaw/issues/6141) (OPEN): Session broken until restart. **Medium severity**.  
- **Silent message drops when busy** – [#5995](https://github.com/agentscope-ai/QwenPaw/issues/5995) (OPEN): No queue or error for incoming messages during tool execution. **Medium severity** – data loss risk.

**Fix PRs existing**:  
- [#6153](https://github.com/agentscope-ai/QwenPaw/pull/6153) addresses embedding and ReMe memory issues.  
- [#6154](https://github.com/agentscope-ai/QwenPaw/pull/6154) fixes images stripped for multimodal models.  
- [#6127](https://github.com/agentscope-ai/QwenPaw/pull/6127) conditionally elevates UAC on Windows.  
- [#5761](https://github.com/agentscope-ai/QwenPaw/pull/5761) surfaces malformed tool-call inputs to model (fix for config reset).  
- [#6123](https://github.com/agentscope-ai/QwenPaw/pull/6123) improves context limits and tool-result compaction (targets memory loss #6148).

---

## 6. Feature Requests & Roadmap Signals
User-requested features from today’s activity include:

- **Galaxy Kylin OS Support** – [#6125](https://github.com/agentscope-ai/QwenPaw/issues/6125): Government/enterprise Linux demand. Likely to be added in 2.1 if community interest remains high.  
- **Personal Knowledge Base** – [#2969](https://github.com/agentscope-ai/QwenPaw/issues/2969) (CLOSED, 👍3): One of the most upvoted features; may appear in a future minor release.  
- **Prebuilt Agent Templates** – [#4259](https://github.com/agentscope-ai/QwenPaw/issues/4259) (CLOSED): Lower non‑tech user barrier.  
- **LSP Support & Fallback Models** – [#2912](https://github.com/agentscope-ai/QwenPaw/issues/2912) (CLOSED): IntelliSense‑like capability.  
- **Multi‑Agent Team Collaboration** – [#2922](https://github.com/agentscope-ai/QwenPaw/issues/2922) (CLOSED): Smoother context sharing.  
- **Granular Media Rejection** – [#5821](https://github.com/agentscope-ai/QwenPaw/issues/5821) (OPEN): Per‑media‑type rejection instead of all‑or‑nothing.  
- **Workspace File Shortcut in Desktop** – [#6083](https://github.com/agentscope-ai/QwenPaw/issues/6083) (OPEN): One‑click access to agent outputs.  
- **Non‑Tauri Variant** – [#6076](https://github.com/agentscope-ai/QwenPaw/issues/6076) (OPEN): Windows 7 support via VxKex.  
- **Chrome Extension** – [#6157](https://github.com/agentscope-ai/QwenPaw/pull/6157) (OPEN): New plugin pairing QwenPaw with native messaging bridge.

**Prediction**: The Chrome extension (PR #6157) and the OMP workflow modes (PR #5882) are likely to land in the next minor release (2.1). The ReMe memory refinements (PR #6153) are already merged.

---

## 7. User Feedback Summary
Real pain points and use cases voiced by the community:

- **Upgrade Regressions** – Several users report that v2.0 upgrade broke core functionality: memory/amnesia (#6148), QQ channel crash (#6152), embedding config reset (#6155), and Windows startup requiring admin (#6161). High dissatisfaction with the upgrade experience.  
- **Token Waste** – [#6158](https://github.com/agentscope-ai/QwenPaw/issues/6158) expresses frustration over unexplained token consumption, asking for better logging and transparency.  
- **Agent Collaboration** – [#6136](https://github.com/agentscope-ai/QwenPaw/issues/6136) highlights difficulty in triggering multi-agent cooperation; users want smarter automatic delegation.  
- **Knowledge Management** – [#2969](https://github.com/agentscope-ai/QwenPaw/issues/2969) shows strong demand for personal knowledge base to combine file storage with agent capabilities.  
- **Platform Support** – Requests for Chinese domestic OS (Kylin) and Windows 7 indicate enterprise and government users evaluating CoPaw.  
- **Non‑Technical Onboarding** – [#4259](https://github.com/agentscope-ai/QwenPaw/issues/4259) reflects desire for pre‑configured agent templates.

Overall sentiment: **mixed** — strong enthusiasm for the project’s potential, but frustration with instability after the major update.

---

## 8. Backlog Watch
Issues and PRs that may need maintainer attention (low activity, important, or awaiting review):

- [#6076](https://github.com/agentscope-ai/QwenPaw/issues/6076) – **Non‑Tauri variant for Windows 7** (OPEN, last updated 2026-07-15). No maintainer response.  
- [#5821](https://github.com/agentscope-ai/QwenPaw/issues/5821) – **Granular media rejection** (OPEN, last updated 2026-07-16). Only 2 comments, but a clear design proposal.  
- [#5862](https://github.com/agentscope-ai/QwenPaw/pull/5862) – **Inbox system pop feature** (OPEN, last updated 2026-07-15). No reviewer activity since July 8.  
- [#5761](https://github.com/agentscope-ai/QwenPaw/pull/5761) – **Fix malformed tool-call input** (OPEN, last updated 2026-07-16). Important bugfix, still waiting for merge.  
- [#5992](https://github.com/agentscope-ai/QwenPaw/pull/5992) – **Per‑session model overrides** (OPEN, first‑time contributor). Valuable feature, under‑review since July 12.  
- [#2907](https://github.com/agentscope-ai/QwenPaw/issues/2907) – **PR #2448 needs review** (CLOSED but unresolved delay). Historical but may indicate stalled PR process.

The project maintainers appear responsive overall, but a few community contributions and platform‑support asks could benefit from explicit prioritisation or feedback.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-07-16

## 1. Today’s Overview
ZeroClaw remains in a high‑activity development phase. Over the past 24 hours, 50 issues and 50 pull requests saw updates, with 21 issues closed and 12 PRs merged or closed. A major release (v0.8.3) landed, consolidating 379 commits from 56 contributors. The project is actively hardening runtime, provider, and security components while expanding its architecture with a new Standard Operating Procedure engine, WebAssembly plugin host, and Git forge channel. Overall health is strong, though several critical bugs and long‑standing feature requests continue to demand attention.

## 2. Releases
- **v0.8.3** — Released today.  
  A large consolidation cycle spanning 379 commits from 56 contributors.  
  **Key changes:**
  - New **Standard Operating Procedure (SOP) engine** for deterministic channel pipelines.
  - **WebAssembly plugin host** for sandboxed extensions.
  - **Git forge channel** (e.g., GitHub/GitLab integration).
  - Broad round of **runtime, provider, and security hardening** (SSRF gates, auth middleware, etc.).
  - See full changelog: [v0.8.3 release](https://github.com/zeroclaw-labs/zeroclaw/releases/tag/v0.8.3)  
  *No breaking changes or migration steps were announced.*

## 3. Project Progress
The 12 merged/closed PRs today advanced several key areas, alongside the closed issues listed below. Notable improvements delivered in the recent release cycle and today include:

- **OIDC authentication provider** — RFC #7141 closed, landed pluggable auth support for the gateway.
- **i18n submodule** — Issue #7184 closed; translation files moved out of main tree to reduce churn.
- **A2A agent discovery** — Issue #7218 closed; `.well-known/agent-card.json` support for multi‑agent setups.
- **Pluggable security enforcement** — Issue #7142 closed; single trait for security enforcement, reporting, and incident response.
- **Air‑gapped execution mode** — Issue #6293 closed; companion daemon over Unix socket for enclave support.
- **ComfyUI media provider** — Issue #6563 closed; remote workflow generation for images and future video.
- **WebSocket protocol consolidation** — Issue #8798 closed; `/ws/chat` and `/acp` merged onto single wire protocol (RFC later closed as wontfix).
- **SSRF fixes** — PRs #8713 and #8826 merged, gating `file_download` and `image_gen` tool URLs against internal hosts.
- **Telegram bot token config fix** — PR #8823 merged, corrected property name in error message.
- **Desktop security** — PR #9033 merged, removed unused Tauri shell plugin capabilities.

## 4. Community Hot Topics
| Issue/PR | Comments | Summary | Underlying Need |
|----------|----------|---------|-----------------|
| [#5600](https://github.com/zeroclaw-labs/zeroclaw/issues/5600) | 12 | Bug: kimi‑code provider streaming error with `thinking` enabled. | Reliable streaming across all providers; users blocked on workflows. |
| [#5937](https://github.com/zeroclaw-labs/zeroclaw/issues/5937) | 11 | Feature: refactor providers architecture to reduce duplication. | Code maintainability; fragmented provider configuration hurts extensibility. |
| [#7952](https://github.com/zeroclaw-labs/zeroclaw/issues/7952) | 7 | Feature: publish optional `channels-full` prebuilt bundles. | Users want to use niche channels without compiling from source. |
| [#8832](https://github.com/zeroclaw-labs/zeroclaw/issues/8832) | 5 | RFC: Gateway‑local Kanban board for agent work visualization. | Need unified agent task visibility; inspired by OpenClaw Workboard. |
| [#9048](https://github.com/zeroclaw-labs/zeroclaw/issues/9048) | 5 | RFC: separate conversation history from long‑term memory. | Memory mixing causes retention and context‑window issues. |

The community is actively pushing for better **observability** (Kanban, memory separation), **multi‑channel support** (prebuilt bundles, Telegram webhook, Matrix threading), and **provider reliability** (kimi‑code bug, arch refactor).

## 5. Bugs & Stability
**Critical (S1 – workflow blocked):**
- **kimi‑code provider streaming error** ([#5600](https://github.com/zeroclaw-labs/zeroclaw/issues/5600)) — open since April, still affecting users.
- **Agents stop when exiting chat window** ([#8559](https://github.com/zeroclaw-labs/zeroclaw/issues/8559)) — Web dashboard issue; agent loop terminates prematurely.
- **`try_enable_pgvector` runtime panic** ([#9085](https://github.com/zeroclaw-labs/zeroclaw/issues/9085)) — startup crash when pgvector enabled with Postgres memory backend.

**High (S2 – degraded behavior):**
- `models_cache.json` never written ([#9046](https://github.com/zeroclaw-labs/zeroclaw/issues/9046)) — `/model` command always fails unless cache is manually populated.
- Serial transport desynchronized after non‑matching response ID ([#9078](https://github.com/zeroclaw-labs/zeroclaw/issues/9078)) — hardware peripheral bug.
- Tool output lacks `[AUDIO:]` marker support ([#9089](https://github.com/zeroclaw-labs/zeroclaw/issues/9089)) — audio markers become literal text.

**Fix PRs in flight:**
- PR #8826 (SSRF gate for `image_gen`), #8713 (`file_download` SSRF), #8751 (`LocalWhisperConfig` defaults).  
  *No immediate fix PR exists for the S1 bugs above.*

## 6. Feature Requests & Roadmap Signals
**Likely candidates for v0.9.0** (based on accepted RFCs and high‑priority open issues):
- **OIDC authentication** — already closed (#7141).
- **Pluggable security enforcement** — closed (#7142).
- **Air‑gapped execution mode** — closed (#6293).
- **Kanban board** — RFC #8832 open, strong community interest.
- **Memory separation** — RFC #9048 open, addresses a recognized architectural debt.
- **Realtime speech‑to‑speech channel (Gemini Live)** — RFC #8780 open, gateway for multimodal interaction.

**Other notable requests:**
- Telegram webhook mode ([#8046](https://github.com/zeroclaw-labs/zeroclaw/issues/8046)).
- Reset stale channel sessions ([#8134](https://github.com/zeroclaw-labs/zeroclaw/issues/8134)).
- Matrix thread‑scoped history ([#8541](https://github.com/zeroclaw-labs/zeroclaw/issues/8541)).

## 7. User Feedback Summary
- **Pain points:** Streaming reliability (kimi‑code), agents halting on UI exit, missing audio/tool output markers, and perennial config confusion (`models_cache.json`). Users report blocked workflows and degraded behavior.
- **Use cases:** Multi‑agent coordination (Kanban, A2A discovery), media generation (ComfyUI), channel‑specific optimizations (Telegram webhook, Matrix threading), and hardware integration (serial transport, robot‑kit).
- **Satisfaction:** The active release cycle (v0.8.3 with 56 contributors) and responsive maintainers (e.g., singlerider, NiuBlibing) indicate strong community trust. However, the backlog of S1 bugs unresolved for months (e.g., #5600) is a source of frustration.

## 8. Backlog Watch
Issues and PRs that require maintainer attention due to age, blocking status, or lack of response:

| Item | Created | Status | Notes |
|------|---------|--------|-------|
| [PR #6297](https://github.com/zeroclaw-labs/zeroclaw/pull/6297) – poll‑vote / interactive‑reply events for Signal/WhatsApp | 2026‑05‑03 | Open, no maintainer review | Large feature, risk:high, may be awaiting broader channel architecture. |
| [Issue #5600](https://github.com/zeroclaw-labs/zeroclaw/issues/5600) – kimi‑code streaming bug | 2026‑04‑10 | Open, accepted | No fix in sight; high priority, many comments. |
| [Issue #5937](https://github.com/zeroclaw-labs/zeroclaw/issues/5937) – providers refactor | 2026‑04‑20 | Open, accepted | Large refactoring; duplicates across providers hinder maintenance. |
| [Issue #8367](https://github.com/zeroclaw-labs/zeroclaw/issues/8367) – capability‑aware documentation | 2026‑06‑26 | Blocked, needs maintainer review | RFC without maintainer response. |
| [Issue #8398](https://github.com/zeroclaw-labs/zeroclaw/issues/8398) – plugin permission model open questions | 2026‑06‑27 | Needs author action, no maintainer review | Critical for plugin system security. |
| [PR #7821](https://github.com/zeroclaw-labs/zeroclaw/pull/7821) – SandboxPolicyConfig schema | 2026‑06‑17 | Needs author action | Part of security enforcement; awaiting further backend wiring. |

*Several other PRs (e.g., #8734, #8735, #8732) carry `needs‑maintainer‑review` and have been open for over a week. Community contributors are waiting for guidance to unblock channel‑relink features.*

---

*Digest generated from GitHub data for 2026‑07‑16. All links point to zeroclaw-labs/zeroclaw repository.*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/boom7sss/agents-radar).*