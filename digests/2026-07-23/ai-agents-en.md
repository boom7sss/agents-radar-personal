# OpenClaw Ecosystem Digest 2026-07-23

> Issues: 464 | PRs: 500 | Projects covered: 13 | Generated: 2026-07-23 03:27 UTC

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

# OpenClaw Project Digest — 2026-07-23

## 1. Today's Overview
The project experienced extremely high activity in the last 24 hours, with **464 issues updated** (314 open, 150 closed) and **500 pull requests updated** (294 open, 206 merged/closed). Despite the volume, **no new releases** were published today. The community continues to focus on stabilizing the 2026.7.x line, with several P0/P1 regressions actively being addressed concurrently with foundational refactors (session lineage, plugin lifecycle, hosting profiles). The maintainer team merged a notable batch of critical fixes for CI, plugin lifecycle, and release validation, while dozens of user-reported bugs remain under review.

---

## 2. Releases
**No releases today.** The last known release appears to be `2026.7.2` based on issue mentions. No migration notes or changelogs are available.

---

## 3. Project Progress
**Merged/closed PRs today (selected from top-30 by comment count):**
- **#112860** (XS, maintainer) — Fixed CI to skip OpenClawKit suite for frozen release candidates.
- **#112850** (XL, refactor) — Moved Telegram and iMessage config schemas from core into their respective channel plugins, reducing core coupling.
- **#112841** (S, release) — Fixed release validation for frozen extended-stable candidates (`2026.6.34`).
- **#112763** (XL, plugins) — Serialized plugin lifecycle mutations and preserved setup-required installs, closing #112718 and #112719.
- **#111861** (XL, sessions) — Refactored session lineage model: added creation provenance, fork ancestry, generation chain, and a typed row contract.
- **#112782** (XL, channels) — Hoisted doctor migration helpers across nine bundled channel plugins, improving compatibility maintenance.

**Notable open PRs advancing features:**
- **#107765** (XL, standard hosting profiles) — Still awaiting maintainer review but represents a major RFC-driven feature.
- **#75165** (XL, composable termination algebra + GSAR) — Adds composable termination conditions for A2A loops and hallucination detection; proof supplied, merge-risk flagged.
- **#112787** (XL, session visibility states) — Owner-set per-session visibility (read-only, restricted to collaborators) for multi-operator gateways.
- **#112678** (XL, agent roster refactor) — Moves implicit `main` agent fallback into load-time roster injection, cleaning up ~38 scattered fallback sites.

---

## 4. Community Hot Topics

### Most Active Issues
| Issue | Title | Comments | Reactions | Underlying Need |
|-------|-------|----------|-----------|-----------------|
| [#75](https://github.com/openclaw/openclaw/issues/75) | Linux/Windows Clawdbot Apps | 115 | 80 👍 | Cross-platform parity for desktop apps (macOS/iOS/Android exist). Long-standing feature request. |
| [#85333](https://github.com/openclaw/openclaw/issues/85333) | Performance regression in `doctor --fix` | 17 | 1 👍 | 4–5× slowdown due to session snapshot path traversal bottleneck. Urgent for production users. |
| [#13583](https://github.com/openclaw/openclaw/issues/13583) | Pre-response enforcement hooks (hard gates) | 16 | 2 👍 | Need for mechanical prevention of agent responses until mandatory tool calls complete (finance/security). |
| [#91009](https://github.com/openclaw/openclaw/issues/91009) | CPU-bound hooks relay spawns & gateway RPC stall | 15 | 2 👍 | Performance and reliability impact of Codex integration under load. |
| [#10659](https://github.com/openclaw/openclaw/issues/10659) | Masked secrets to prevent agent API key access | 15 | 4 👍 | Security: agents should use keys without seeing them. High demand for prompt-injection protection. |
| [#96857](https://github.com/openclaw/openclaw/issues/96857) | Tool text outputs degraded to “(see attached image)” | 13 | 4 👍 | Tool output corruption makes agent blind to normal command/status outputs. |

**Analysis:** The community is strongly advocating for **cross-platform support** (Linux/Windows apps), **security hardening** (masked secrets, enforcement hooks), and **performance stability** (doctor regression, CPU-bound hooks). The high reaction counts on #75 and #10659 indicate these are strategic priorities.

---

## 5. Bugs & Stability

### P0 (Release-Blocker / Critical)
| Issue | Summary | Status | Fix PR |
|-------|---------|--------|--------|
| [#108435](https://github.com/openclaw/openclaw/issues/108435) | Gateway fails to start after update to 2026.7.1 (systemd, Ollama, manual launch all fail) | Open | None yet (marked `clawsweeper:needs-maintainer-review`) |
| [#98674](https://github.com/openclaw/openclaw/issues/98674) | Mac app install icon unclickable after update | **Closed** | Fix merged in earlier cycle |

### P1 Regressions & Crashes (Open)
- **Performance / Bottlenecks:**
  - [#85333](https://github.com/openclaw/openclaw/issues/85333) — `doctor --fix` 4–5× slower (2026.5.19 → 5.20) due to session snapshot path traversal.
  - [#91009](https://github.com/openclaw/openclaw/issues/91009) — Codex PreToolUse hook spawns CPU-bound processes stalling gateway RPC.
  - [#92043](https://github.com/openclaw/openclaw/issues/92043) — 180s compaction timeout fails identically every turn; no partial-progress reuse.
- **Message Loss / Session State:**
  - [#90840](https://github.com/openclaw/openclaw/issues/90840) — Subagent run completion delivered raw to chat user instead of parent summary.
  - [#41199](https://github.com/openclaw/openclaw/issues/41199) — Agent-to-Agent communication tools have parameter conflicts causing failures.
  - [#99054](https://github.com/openclaw/openclaw/issues/99054) — Teams app removal/re-add retains prior DM session history (privacy concern).
  - [#108580](https://github.com/openclaw/openclaw/issues/108580) — Cron tool schema incompatible with llama.cpp grammar-constrained tool calling (2026.7.1 regression).
- **Security:**
  - [#92516](https://github.com/openclaw/openclaw/issues/92516) — Self-hosted deploys can't use external channel plugins: `openKeyedStore` gated to trusted plugins.
  - [#10659](https://github.com/openclaw/openclaw/issues/10659) — Masked secrets feature request (still open, high demand).
- **Authentication / Provider:**
  - [#39807](https://github.com/openclaw/openclaw/issues/39807) — Billing 402 error causes infinite retry death spiral with no backoff.
  - [#86031](https://github.com/openclaw/openclaw/issues/86031) — Windows gateway listens but health probes time out after Telegram polling stall.
  - [#98702](https://github.com/openclaw/openclaw/issues/98702) — Inherited OpenAI OAuth rejected at provider for built-in openclaw runtime.

### P1–P2 Issues with Associated Fix PRs (Open or Merged)
- [#77802](https://github.com/openclaw/openclaw/issues/77802) (P2, **closed**) — Doctor --fix fails atomically on multiple validation errors. Fix assumed in later releases.
- [#83968](https://github.com/openclaw/openclaw/issues/83968) (P1, **closed**) — Gateway crash `assert(!this.paused)` on macOS; rollback to 5.12 worked.
- [#84610](https://github.com/openclaw/openclaw/issues/84610) (P1, **closed**) — Gateway SIGTERM loop every ~90s after upgrade (WSL2).
- [#91007](https://github.com/openclaw/openclaw/issues/91007) (P1, **closed**) — iOS Talk session closes before audio append.
- [#84783](https://github.com/openclaw/openclaw/issues/84783) (P1, **closed**) — Moonshot Discord model-resolution 30s delay.
- [#110504](https://github.com/openclaw/openclaw/issues/110504) (P1, **closed**) — WhatsApp auto-reply fails with no listener.

**Assessment:** The project is actively addressing a wave of regressions introduced in May–July 2026 releases. Several P1 issues were closed today, indicating strong fix velocity. However, critical P0 issue #108435 and several high-impact P1 bugs remain open without clear resolution timelines.

---

## 6. Feature Requests & Roadmap Signals

### Top User-Requested Features (by issue activity)
- **#75** — Linux/Windows Clawdbot apps (115 comments, 80 👍) – **Likely next major feature.**  
- **#13583** — Pre-response enforcement hooks (16 comments, 2 👍) – Security-critical for enterprise use cases.  
- **#10659** — Masked secrets (15 comments, 4 👍) – High demand, multiple security-related issues.  
- **#38568** — Context window % injection into system prompt (6 comments, 2 👍) – Small but practical.  
- **#9912** — `maxTurns`/`maxToolCalls` config limit (5 comments, 1 👍) – Prevents runaway agents.  
- **#10142** — `session:end` internal hook event (5 comments) – Workflow orchestration integration.

### In-Flight PRs Signalling Roadmap Direction
- **Standard hosting profiles** (#107765) – Operator-selectable readiness criteria per deployment.  
- **Composable termination algebra + GSAR** (#75165) – Advanced A2A agent loop control and hallucination detection.  
- **Portable agent policy settings** (#112773) – Claw manifest–based tool profiles, denied tools, bounded memory.  
- **Session visibility states** (#112787) – Multi-operator session governance.  
- **Onboard migration imports** (#112798) – Safer migration by staging imports before promotion.

**Prediction:** The next release (likely 2026.7.x or 2026.8.1) will likely include **standard hosting profiles**, **portable agent policies**, and **session visibility**, along with continued fixes on the P1 regression stack. The masked secrets and enforcement hooks may follow if security-related issues continue to attract attention.

---

## 7. User Feedback Summary

### Pain Points (recurring across issues)
- **Cross-platform incompleteness** – Linux and Windows app gaps dominate user dissatisfaction (#75).  
- **Performance regressions** – `doctor --fix` slowdown, compaction timeout, CPU-bound hooks disrupt production.  
- **Security anxieties** – API key exposure, prompt injection, OAuth failures, unbounded memory search.  
- **Reliability regressions** – Gateway crashes on macOS/Windows, Telegram/WhatsApp/Discord channel drops, fallback chain not triggered.  
- **Session management** – Teams history retention, subagent raw output, stale memories not deletable.  
- **Accessibility** – Screen readers announce every token during streaming (#65538).  
- **Developer tooling** – `tools.deny` not effective against Codex deferred tools (#97911), exec tool corrupts shell redirects (#87980).

### Use Cases Driving Demand
- **Enterprise / high-stakes workflows** (finance, security ops) – drive requests for hard enforcement gates, masked secrets, and bounded agent iterations.  
- **Multi-operator deployments** – need session visibility, session lineage, and proper ownership.  
- **Local/self-hosted inference** – llama.cpp grammar support, vLLM streaming fixes are critical for on-premise users.  
- **Cloud-hosted production** – require stable fallback chains, OAuth, and billing backoff.

### Satisfaction Indicators
- **High engagement** – 464 issues and 500 PRs updated in 24h shows an active, invested community.  
- **Quick fix turnaround** – Many P1 issues closed within weeks, with several fixes merged today.  
- **Frustration with regressions** – Multiple issues express that "version X worked, version Y broke it," especially around May–June upgrade cycle.

---

## 8. Backlog Watch

### Issues Needing Maintainer Attention (long-open, high priority)
| Issue | Priority | Created | Last Maintainer Activity | Notes |
|-------|----------|---------|--------------------------|-------|
| [#85333](https://github.com/openclaw/openclaw/issues/85333) | P1 | 2026-05-22 | Stale (needs maintainer review) | Performance regression – critical for production. |
| [#91009](https://github.com/openclaw/openclaw/issues/91009) | P1 | 2026-06-06 | Needs maintainer review | CPU-bound hooks, linked PR open. |
| [#10659](https://github.com/openclaw/openclaw/issues/10659) | P1 | 2026-02-06 | Needs maintainer review + security review | Masked secrets – high community demand. |
| [#108435](https://github.com/openclaw/openclaw/issues/108435) | P0 | 2026-07-15 | Needs maintainer review | Gateway fails to start – newest critical issue. |
| [#39807](https://github.com/openclaw/openclaw/issues/39807) | P1 | 2026-03-08 | Needs maintainer review | Billing 402 infinite retry death spiral – no backoff. |
| [#41199](https://github.com/openclaw/openclaw/issues/41199) | P1 | 2026-03-09 | Needs maintainer review | Agent-to-agent parameter conflicts. |
| [#9912](https://github.com/openclaw/openclaw/issues/9912) | P2 | 2026-02-05 | Needs maintainer + product decision | `maxTurns` feature – low but steady demand. |

### Stale PRs Awaiting Maintainer Look
- **#107765** (XL, standard hosting profiles) – Ready for maintainer look since July 14.  
- **#104018** (XL, readiness conditions) – Ready for maintainer look since July 11.  
- **#112000** (XL, prompt refactor) – Waiting on author but also needs maintainer attention.  
- **#110562** (M, subprocess bounds) – Ready for maintainer look since July 18.

**Recommendation:** Maintainers should prioritize #108435 (P0 crash) and #85333 (performance regression) to restore confidence in the 2026.7.x line. The backlog of feature PRs (#107765, #104018) represents significant roadmap items that have been ready for more than a week without review.

---

*Digest generated 2026-07-23 based on public GitHub data for [openclaw/openclaw](https://github.com/openclaw/openclaw). All links are provided as relative repository paths.*

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: Personal AI Assistant Open-Source Ecosystem

## 2026-07-23

---

## 1. Ecosystem Overview

The personal AI assistant open-source ecosystem is experiencing a bifurcation between stabilization and rapid feature iteration. While flagship projects like OpenClaw and NanoBot merge hundreds of PRs weekly—addressing foundational architecture, security, and cross-platform parity—smaller projects like NullClaw and PicoClaw focus on targeted reliability fixes within specific channels (Discord, IRC). The ecosystem shows converging demand for multi-agent collaboration, masked secrets, and standardized hosting profiles, yet projects diverge sharply in maturity: some are pre-v1 (IronClaw, ZeroClaw) shipping major refactors, while CoPaw and LobsterAI deliver incremental stability patches on stable v2 lines. The community is highly engaged, with 1,000+ combined issues and PRs updated across observed projects in a single day.

---

## 2. Activity Comparison

| Project | Issues Updated (24h) | PRs Updated (24h) | Release Today | Activity Health Score* |
|---|---|---|---|---|
| OpenClaw | 464 | 500 | No | **9/10** |
| NanoBot | 5 | 61 | No | **8/10** |
| Hermes Agent | 50 | 50 | No | **8/10** |
| IronClaw | 50 | 50 | No | **8/10** |
| CoPaw | 26 | 50 | **Yes (v2.0.0.post4)** | **8/10** |
| ZeroClaw | 50 | 50 | No | **7/10** |
| LobsterAI | 1 (closed) | 5 (all merged) | No | **6/10** |
| PicoClaw | 0 (3 open) | 5 (2 merged) | No | **4/10** |
| NullClaw | 1 (closed) | 1 (merged) | No | **4/10** |
| NanoClaw | 1 (new) | 3 (none merged) | No | **3/10** |
| Moltis | 0 | 1 (open) | No | **2/10** |
| TinyClaw | 0 | 0 | No | **1/10** |
| ZeptoClaw | 0 | 0 | No | **1/10** |

*Health Score = composite of merge velocity, bug fix turnaround, release cadence, and community engagement. 9–10 = exceptional, 7–8 = strong, 5–6 = moderate, 3–4 = low, 1–2 = dormant.

**Key observations:**
- **OpenClaw dominates** by raw volume (964 combined actions), but a significant portion is open/in-review.
- **CoPaw** is the only project that shipped a release today—steady cadence on its v2.x line.
- **Hermes, IronClaw, ZeroClaw** all sustain 50+ updates daily, indicating high development intensity.
- **TinyClaw, ZeptoClaw** show zero activity; may be abandoned or in long hibernation.

---

## 3. OpenClaw's Position

### Advantages vs Peers
- **Massive community base**: 464 issues + 500 PRs in 24h—roughly 10× the activity of the next most active projects. This provides unmatched bug discovery, feature proposals, and contributor pipeline.
- **Reference implementation status**: Serves as the core upstream for fork/derivative projects (PicoClaw, NanoClaw, NullClaw). Architectural decisions here propagate downstream.
- **Broadest channel coverage**: Telegram, iMessage, Discord, WhatsApp, Slack, IRC, DingTalk, Feishu, Matrix—one of the widest integrations sets among peers.
- **Established governance**: Maintainer team closes P1 issues rapidly (10+ critical fixes merged today), with clear release train (`2026.7.x` line).

### Technical Approach Differences
- **Plugin-centric architecture**: Refactoring (e.g., #112850 moving configs into channel plugins) reduces core coupling—a more modular approach than Hermes Agent's monolithic gateway or PicoClaw's lean Go runtime.
- **Session lineage model** (#111861): Added typed provenance, fork ancestry, and generation chain—a level of session management maturity not seen in NanoBot, CoPaw, or ZeroClaw.
- **Composable termination algebra** (#75165): Formal proof-supported agent loop termination—unique in the ecosystem; most peers use simple `maxTurns` limits.

### Community Size Comparison
| Metric | OpenClaw | Nearest Peer | Ratio |
|---|---|---|---|
| Daily issue updates | 464 | 50 (Hermes/IronClaw/ZeroClaw) | **9.3×** |
| Daily PR updates | 500 | 61 (NanoBot) | **8.2×** |
| Open P0/P1 bugs | ~15 | ~3–5 (peers) | **3–5×** |
| Feature requests with 80+ reactions | 1 (#75) | 0 (all peers) | **Unique** |

OpenClaw's community is an order of magnitude larger, but it also carries a proportionally larger bug backlog and higher user expectations.

---

## 4. Shared Technical Focus Areas

Several requirements are emerging independently across multiple projects, indicating industry-wide pain points:

| Focus Area | Projects Affected | Specific Needs |
|---|---|---|
| **Multi‑agent collaboration** | OpenClaw (#75165), NanoBot (#5000), Hermes (#69694), ZeroClaw (#8687+) | Subagent persistence, shared task state, parallel model selection, composable termination |
| **Security hardening** | OpenClaw (#10659 masked secrets, #92516 ext plugin gating), Hermes (#12651 .env sanitizer), ZeroClaw (#5775 per-skill RBAC, #5842 sandbox warnings), CoPaw (#6354 approval dialog) | API key masking, prompt‑injection protection, per‑user RBAC, auditable permission grants |
| **Cross‑platform parity** | OpenClaw (#75 Linux/Windows apps), Hermes (#45279 macOS installer, #21341 NixOS), ZeroClaw (#7462 Windows test failures) | Desktop apps for all OSes, installer consistency, CI for Windows |
| **Performance & reliability** | OpenClaw (#85333 doctor perf, #91009 CPU‑bound hooks), NanoBot (#5041 dream starvation), Hermes (#62708 silent overflow), CoPaw (#6307 2s overhead regression), ZeroClaw (#5869 RUSTSEC advisories) | Predictable latency, compaction efficiency, crash recovery, graceful degradation |
| **Plugin & channel lifecycle** | OpenClaw (#112763 serialized lifecycle), PicoClaw (#3258 hook deserialization), IronClaw (#6105 Slack lifecycle test), ZeroClaw (#5808 deferred tool schemas) | Standardized install/connect/disconnect, hook reliability, schema lazy‑loading |

**Cross-cutting pattern**: Every project with real-world deployments is investing in security and performance—these are no longer "nice to have" but baseline requirements for production use.

---

## 5. Differentiation Analysis

| Project | Primary Differentiator | Target User | Architecture Highlight |
|---|---|---|---|
| **OpenClaw** | Reference implementation; broadest ecosystem | Developers building custom agents | Plugin‑based, session lineage, formal termination algebra |
| **NanoBot** | Fast iteration, multi‑provider, WebUI‑first | Python‑centric teams, rapid prototyping | Session‑scoped model presets (#4866), SQLite‑indexed history |
| **Hermes Agent** | Desktop UX polish, keyboard workflow | Power users, multi‑platform desktop | Clarify keyboard nav (#64346), per‑task model delegation (#69694) |
| **IronClaw** | `ProductSurface` unified routing; v1 launch | Rust‑native production deployments | Trait‑based architecture, Web3 attestation signing (#6532) |
| **CoPaw** | Chinese market; thinking‑model support | Users of GLM, DeepSeek, MiniMax | Qwen‑backed, AG‑UI protocol (#6337), Creator app plugin (#6284) |
| **ZeroClaw** | Multi‑tenant RBAC; goal system | Enterprise SaaS providers | Per‑sender RBAC (#5982), OTel trace correlation (#6641) |
| **PicoClaw** | Lightweight Go runtime; embedded/low‑power | Raspberry Pi, edge deployments | Minimal dependency, IRC message reassembly (#3287) |
| **LobsterAI** | Scheduled tasks, automation | Power users needing cron workflows | Cron visual builder (#1347), skills management (#1346) |
| **NullClaw** | Minimalist Discors bot | Single‑channel Discord deployments | Lean, single‑purpose, rapid bug fixes |
| **NanoClaw** | WhatsApp‑first channel focus | WhatsApp‑dependent users | Baileys/Cloud identity fix (#3070) |

**Key insight**: The ecosystem is fragmenting by deployment environment (cloud/SaaS vs edge), language preference (Python vs Rust vs Go), and market geography (China‑focused providers in CoPaw vs Western model providers in most others).

---

## 6. Community Momentum & Maturity

### Activity Tiers

**Tier 1 — Rapid Iteration (daily 50+ interactions)**  
*OpenClaw, NanoBot, Hermes Agent, IronClaw, ZeroClaw, CoPaw*  
These projects merge significant PRs daily, ship releases regularly (CoPaw today, others weekly), and have active maintainer response times <24h. They are driving the ecosystem's technical frontier.

**Tier 2 — Moderate Steady State (5–20 interactions)**  
*LobsterAI, PicoClaw, NullClaw*  
These projects are maintaining stable codebases with focused improvements. LobsterAI merged 5 PRs today, all addressing stability/UX. PicoClaw and NullClaw are fixing specific channel bugs.

**Tier 3 — Low / Dormant (0–5 interactions)**  
*NanoClaw, Moltis, TinyClaw, ZeptoClaw*  
NanoClaw has one open bug and three stalled PRs. Moltis has a single UI polish PR. TinyClaw and ZeptoClaw showed zero activity—may be effectively unmaintained.

### Stabilization vs Innovation
- **Stabilizing**: CoPaw (v2.0.0.post4 patch), LobsterAI (Windows hardening), NullClaw (Discord reliability). These projects are past major rewrites.
- **Still innovating/refactoring**: OpenClaw (session lineage, plugin lifecycle), IronClaw (`ProductSurface` migration), ZeroClaw (goal system, provider refactor). These teams are actively reshaping core architecture before stabilization.

---

## 7. Trend Signals

### Emerging Industry Trends (from community feedback)

1. **Security and governance are table stakes, not differentiators**  
   Masked secrets, per-session RBAC, and enforcement hooks appear across *five* projects (OpenClaw, Hermes, ZeroClaw, CoPaw, PicoClaw). Enterprises are demanding auditable, secure-by-default agent deployments.

2. **Multi-agent coordination is the next frontier**  
   Four projects (OpenClaw, NanoBot, Hermes, ZeroClaw) have active work on subagent persistence, parallel delegation, or formal termination logic. Simple "one agent per task" is giving way to complex orchestration.

3. **Performance observability is becoming critical**  
   OTel trace correlation (OpenClaw, ZeroClaw), provider failure diagnostics (ZeroClaw #9056), and compaction timeout monitoring (OpenClaw #92043) signal that operators need to understand *why* agents slow down or fail.

4. **Multi-modal and local-first are splitting the ecosystem**  
   CoPaw's MiniMax vision bugs (#6362) and NanoBot's tool schema incompatibility (#5040) show friction with non-OpenAI providers. Local inference (llama.cpp, vLLM) is a growing use case requiring grammar support and streaming fixes.

5. **Cross-platform incompleteness remains a top frustration**  
   OpenClaw (#75), Hermes (#45279), and ZeroClaw (#7462) all face user complaints about missing or broken Linux/Windows/macOS support. This is a persistent gap that no project fully solves yet.

### Value for AI Agent Developers

| Trend | Implication |
|---|---|
| Security governance expansion | Build with RBAC and secret masking from day one—retrofitting is harder. |
| Multi-agent orchestration standard | Design subagents with persistent identity and shared state; avoid disposable task workers. |
| Observability requirements | Instrument with OTel or similar before v1; debugging "silent failures" is the top production pain point. |
| Provider diversity acceleration | Abstract provider interfaces (like ZeroClaw's refactor) to avoid lock-in; support local LLMs as a first-class option. |
| Cross-platform parity expectation | If targeting desktop users, budget for per-OS testing and installer maintenance; it's a major differentiation. |

**Bottom line**: The ecosystem is converging on a set of shared architectural patterns (plugin-based, session-aware, security-hardened) while diverging on deployment models and language stacks. Developers should prioritize provider abstraction, observability, and RBAC early—these are no longer optional for production use.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-07-23

**Project:** [NanoBot](https://github.com/HKUDS/nanobot)  
**Data period:** Last 24 hours (2026-07-22 to 2026-07-23)

---

## 1. Today's Overview

The project saw extremely high activity, with **61 pull requests updated** (23 open, **38 merged/closed**) and **5 issues updated** (4 open, 1 closed). No new releases were tagged. The development pace is intense: the merged PRs indicate that several long-running feature branches and bug fixes have landed, while the large number of open PRs (many with `priority: p1`) suggests active parallel work on providers, WebUI, and channel integrations. Issue volume is moderate, with one important enhancement proposal (#5000) drawing community discussion.

---

## 2. Releases

No new releases were published in the last 24 hours.

---

## 3. Project Progress

**38 pull requests were merged or closed today.** The most prominent merged PR is:

- **[#4866 – feat(agent): make model presets session-scoped](https://github.com/HKUDS/nanobot/pull/4866)**  
  Makes named model-preset selection persist only as explicit per-session overrides, ensures one immutable `LLMRuntime` per turn, and uses it consistently for provider calls, prompt sizing, tools/subagents, and compaction. This is a foundational improvement that will affect all agent interactions.

Other merged/closed PRs are not individually listed in the provided data, but the high number (38) confirms that many bug fixes, documentation updates, and minor features were accepted – reflecting a healthy and responsive merge process.

---

## 4. Community Hot Topics

The most active issue is:

- **[#5000 – [enhancement] Proposal: evolve the current subagent system toward multi-agent collaboration](https://github.com/HKUDS/nanobot/issues/5000)**  
  **4 comments** (highest), created 2026-07-20. The author argues the current subagent system is closer to background task delegation than a true multi-agent system, lacking persistent identities and shared task state. The discussion indicates community interest in more sophisticated agent orchestration.

No pull request accumulated more than zero visible comments (data shows `undefined`), but several PRs are clearly high-priority based on labels and content:

- **[#5035 – feat(providers): add xAI Grok OAuth with capability-gated X Search](https://github.com/HKUDS/nanobot/pull/5035)** – high-profile provider integration.
- **[#5033 – feat(telegram): support multiple bot instances in WebUI](https://github.com/HKUDS/nanobot/pull/5033)** – requested by multi-bot users.
- **[#5017 – feat(webui): show the actual fallback model](https://github.com/HKUDS/nanobot/pull/5017)** – improves transparency when model fallback occurs.

**Underlying needs:** The community is pushing toward multi-agent collaboration, richer provider support (xAI Grok), better multi-channel management (Telegram multi-bot), and enhanced WebUI transparency (fallback model display).

---

## 5. Bugs & Stability

**Three open bugs were reported today; one bug was closed.**

### High Severity

- **[#5041 – Bug: completed no-op Dream batches can starve all later history](https://github.com/HKUDS/nanobot/issues/5041)**  
  A Dream run with no durable-memory diff does not advance `dream_cursor`, causing the same batch to be selected repeatedly and starving later history entries. This can silently block memory consolidation. **No fix PR yet.**

- **[#5040 – MCP tool schema with non-'#/$defs/' $ref is forwarded verbatim — one tool disables the entire model on strict providers (Kimi/Moonshot)](https://github.com/HKUDS/nanobot/issues/5040)**  
  JSON-Pointer `$ref`s that don't start with `#/$defs/` cause strict providers (Kimi/Moonshot) to reject the entire model. This is a compatibility landmine for any user relying on those LLM backends. **No fix PR yet.**

### Medium Severity

- **[#5028 – [bug] media路径和workspace限制好像有时候会产生冲突](https://github.com/HKUDS/nanobot/issues/5028)**  
  When NanoBot integrates with Feishu (飞书), uploaded files are stored outside the workspace-restricted directory, causing access failures. **No fix PR yet.**

### Closed Bug

- **[#4948 – WebUI loses visibility when a late subagent completion starts a system turn](https://github.com/HKUDS/nanobot/issues/4948)** – closed, presumably fixed.

### Fix PRs Submitted (still open)

Several bug-fix PRs were opened today, targeting stability:

- [#5044 – fix(pairing): treat null approved channel lists as empty](https://github.com/HKUDS/nanobot/pull/5044) – crash fix.
- [#5043 – fix(cron): skip null runHistory elements when loading jobs.json](https://github.com/HKUDS/nanobot/pull/5043) – crash fix.
- [#5042 – fix(cron): default null schedule when loading jobs.json](https://github.com/HKUDS/nanobot/pull/5042) – crash fix.
- [#5045 – fix(slack): keep fenced markdown tables intact](https://github.com/HKUDS/nanobot/pull/5045)
- [#5046 – fix(feishu): keep fenced markdown tables out of card tables](https://github.com/HKUDS/nanobot/pull/5046)
- [#4988 – fix(agent): keep background turns silent when the model ends empty](https://github.com/HKUDS/nanobot/pull/4988) – regression fix for cron/local triggers producing unwanted placeholder text.

**Warning:** While crash fixes are being submitted, the two high-severity bugs (#5041, #5040) lack any linked fix PRs and may require maintainer attention.

---

## 6. Feature Requests & Roadmap Signals

### User-Requested Enhancements

- **[#5000 – Multi-agent collaboration](https://github.com/HKUDS/nanobot/issues/5000)** – the single most-discussed feature this week. Aims to give subagents persistent identities and shared state.
- **[#5047 – Add Parallel Search MCP preset](https://github.com/HKUDS/nanobot/pull/5047)** – adds a free, no-key MCP search tool as an optional app preset.
- **[#5036 – Make idle compaction scan interval configurable](https://github.com/HKUDS/nanobot/pull/5036)** – requested by a Raspberry Pi user to reduce CPU usage (30-40% idle).
- **[#4494 – PWA support and mobile swipe gesture for sidebar](https://github.com/HKUDS/nanobot/pull/4494)** – mobile UX improvement.

### Predictions for Next Release

The high volume of `priority: p1` PRs (12+ in the top 20) strongly suggests the next version will include:

- **xAI Grok OAuth + X Search** (#5035)
- **Telegram multi-bot support** (#5033)
- **WebUI fallback model badge** (#5017)
- **WebUI conversation history indexed in SQLite** (#5003) – major performance uplift
- **Feishu `groupPolicy: listen` mode** (#5009)
- **Explicit skill context loading** (#5018)

The multi-agent proposal (#5000) is earlier in concept phase and likely targets a later release.

---

## 7. User Feedback Summary

### Pain Points Expressed

- **Dream batch starvation** (#5041): Silent data loss in memory consolidation – a serious reliability issue.
- **MCP schema incompatibility** (#5040): Complete model failure on Kimi/Moonshot when a tool schema uses non-standard `$ref` – blocks users on those providers.
- **Media file access under workspace restrictions** (#5028): Feishu users cannot access uploaded files when workspace limits are enabled.
- **Raspberry Pi performance** (#5036): Idle CPU consumption of 30-40% due to compaction polling – a real pain for low-power deployments.
- **Subagent system limitations** (#5000): Users want more than just background task delegation.

### Satisfaction Signals

- The rapid merge of 38 PRs in one day indicates a responsive maintainer team.
- The closed bug (#4948) shows user-reported WebUI issues are being addressed.
- New features like the free Parallel Search MCP preset (#5047) are welcomed by the community.

---

## 8. Backlog Watch

The following issues and PRs have remained open for extended periods and may need maintainer attention:

- **[#2584 – Feature/xiaozhi support](https://github.com/HKUDS/nanobot/pull/2584)**  
  Opened **2026-03-28** (nearly 4 months ago). Adds Xiaozhi voice gateway and MCP tools for ESP32. Labeled `conflict` – likely needs rebase or review.

- **[#4439 – feat(tools): add read-only search_history tool](https://github.com/HKUDS/nanobot/pull/4439)**  
  Opened **2026-06-21**. Uncontroversial feature, labeled `conflict` – may be stalled.

- **[#4689 – feat(providers): surface OAuth status and expiry warnings](https://github.com/HKUDS/nanobot/pull/4689)**  
  Opened **2026-07-03**. Labeled `priority: p1` and `conflict` – addresses a real user need (#4679) but has not moved in 20 days.

- **[#4494 – feat(webui): PWA support and mobile swipe gesture for sidebar](https://github.com/HKUDS/nanobot/pull/4494)**  
  Opened **2026-06-24**. Labeled `conflict`. Mobile users are waiting on this.

- **[#4446 – feat(dingtalk): gate private chats and mention sender in group replies](https://github.com/HKUDS/nanobot/pull/4446)**  
  Opened **2026-06-22**. No conflict label but no recent activity.

**Recommendation:** The `conflict` label on several older PRs suggests they may need maintainer rebase or community contribution to bring them up to date. The OAuth status PR (#4689) is especially important given the new xAI Grok OAuth work (#5035) – merging it would improve provider UX across the board.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-07-23

## 1. Today's Overview

Hermes Agent is in a period of **high activity** with 50 issues and 50 pull requests updated in the last 24 hours. Of these, 4 issues were closed and 13 PRs were merged or closed, while no new releases were cut. The project shows a sustained focus on **desktop app polish**, **session-state correctness**, and **platform-specific fixes** (Windows, macOS, Nix). A notable uptick in bug reports filed today (17 new issues) signals both intensive real-world usage and potential stability gaps, particularly around session compression, SQLite corruption on bundled runtimes, and cross-platform configuration handling. The maintainer response appears quick—several desktop bug fixes were merged on the same day they were reported.

## 2. Releases

**No new releases today.** The last release tag is not specified in the provided data.

## 3. Project Progress (Merged/Closed PRs Today)

Thirteen PRs were merged or closed in the last 24 hours. Key improvements include:

- **Desktop fixes:**
  - [`fix(desktop): prevent stale worktree status`](https://github.com/NousResearch/hermes-agent/pull/69781) — stops a race that could publish Git status from the previous session after workspace change.
  - [`fix(desktop): clarify options defensive rendering and layout fix`](https://github.com/NousResearch/hermes-agent/pull/69497) — resolves layout overflow on clarify choice buttons (fixes #69122).
  - [`fix(desktop): keep clarify prompts answerable across reconnect/hydration + tool-progress off`](https://github.com/NousResearch/hermes-agent/pull/47544) — ensures clarify tool lifecycle events render even with tool-progress disabled.
  - [`feat(desktop): add keyboard navigation to clarify choices`](https://github.com/NousResearch/hermes-agent/pull/64346) — adds arrow-key and numeric selection for clarify choices.
- **CI & infrastructure:**
  - [`fix(ci): authenticate gh-image installation`](https://github.com/NousResearch/hermes-agent/pull/69793) — resolves anonymous API rate-limit in CI review publisher.
  - [`fix(ci): run trusted Docker publish directly`](https://github.com/NousResearch/hermes-agent/pull/69803) — fixes empty credentials in reusable workflow calls.
  - [`fix: register gateway service after profile import`](https://github.com/NousResearch/hermes-agent/pull/69273) — gateway was missing after profile import (#69163).
- **Feature:**
  - [`feat(delegation): allow per-task model selection in delegate_task`](https://github.com/NousResearch/hermes-agent/pull/69694) — closes #69694, enabling distinct models for parallel sub-agents.

Several `fmt(js): npm run fix` auto-fix PRs were also closed.

## 4. Community Hot Topics

The most active discussions in the last 24 hours (by comments and reactions):

- **[#4335 – Feature Request: Cross-platform session context sharing (CLI ↔ Telegram)](https://github.com/NousResearch/hermes-agent/issues/4335)**  
  *9 comments · 2 👍*  
  User request to allow knowledge of conversations to carry across platforms (CLI, Telegram, Discord). The gateway architecture currently keeps sessions isolated. This is a long-standing issue (March 2026) with sustained interest.

- **[#66875 – [Bug]: Latest session does not switch after navigating to Plugins/Artifacts tab and back](https://github.com/NousResearch/hermes-agent/issues/66875)**  
  *7 comments*  
  Desktop app session selection fails when returning from non-chat tabs. Affects daily workflow fluidity.

- **[#21341 – [Bug]: nixosModule `documents` option installs files to wrong paths](https://github.com/NousResearch/hermes-agent/issues/21341)**  
  *5 comments*  
  NixOS installation misconfigures `SOUL.md` and memory files due to path mismatch between `workingDirectory` and `$HERMES_HOME`.

- **[#45279 – [Bug]: PR #38889 still creates node/npm/npx shims in `~/.local/bin` for user macOS installs](https://github.com/NousResearch/hermes-agent/issues/45279)**  
  *4 comments*  
  Regression in macOS installer; shim shadowing persists despite previous fix attempt.

- **[#62708 – [Bug]: Silent context-overflow: no warning when compression is blocked (P1)](https://github.com/NousResearch/hermes-agent/issues/62708)**  
  *3 comments · P1*  
  High-severity issue: context compression blocked (cooldown/anti-thrash) gives no feedback, leading to silent token limits. No fix PR yet.

Underlying needs: users want **seamless cross-platform experience**, **reliable desktop UI** (session switching, clarify interaction), and **better failure visibility** (compression, overflow).

## 5. Bugs & Stability

**New bugs reported today** (created 2026-07-23) ranked by priority:

| Priority | Issue | Description | Fix PR? |
|----------|-------|-------------|---------|
| **P1** | [#69784](https://github.com/NousResearch/hermes-agent/issues/69784) | Bundled SQLite 3.50.4 hits WAL-reset corruption; clean on 3.51.3 | No |
| **P1** | [#62708](https://github.com/NousResearch/hermes-agent/issues/62708) (open, updated) | Silent context-overflow when compression blocked | No |
| **P2** | [#69738](https://github.com/NousResearch/hermes-agent/issues/69738) | `/reload` deletes container-supplied env config (Docker) | No |
| **P2** | [#69737](https://github.com/NousResearch/hermes-agent/issues/69737) | `checkpoints.enabled` ignored in one-shot (hermes -z) sessions | No |
| **P2** | [#69709](https://github.com/NousResearch/hermes-agent/issues/69709) | `supports_vision` override not resolved for CLI `--provider` with named custom_providers | No |
| **P2** | [#69732](https://github.com/NousResearch/hermes-agent/issues/69732) | ACP stdio file tools deadlock on Windows (bash/ASLR probes miss stdin=DEVNULL) | No |
| **P2** | [#69776](https://github.com/NousResearch/hermes-agent/issues/69776) | Async delegation dispatch note tells model to "just continue," so weak models fabricate results | No |
| **P2** | [#69778](https://github.com/NousResearch/hermes-agent/issues/69778) | `intent_ack_continuation` never fires in established sessions with local models | No |
| **P3** | [#69787](https://github.com/NousResearch/hermes-agent/issues/69787) | Docs still promise board `default_workdir` inheritance but CLI/tool-created tasks default to scratch | No |

**Crash/security/regression notes:**  
- **SQLite corruption** (P1) affects all users of bundled Python runtime (current uv-managed) — a full database rebuild or runtime upgrade may be needed.  
- **Windows-specific deadlock** (ACP stdio) could render ACP integration on Windows unusable.  
- **Oneshot checkpoint bypass** means users relying on `--checkpoint` in automated workflows get no persistence.

Several of these bugs have **no associated fix PR yet**, indicating a need for rapid triage.

## 6. Feature Requests & Roadmap Signals

Feature requests from the last 24 hours and recent days likely to shape the next release:

- **[#69792 – Add Ollama Web Search as a search backend](https://github.com/NousResearch/hermes-agent/issues/69792)**  
  Marked duplicate; suggests existing plans for Ollama cloud search integration.

- **[#69726 – feat(whatsapp): support channel_skill_bindings for auto-loading group skills](https://github.com/NousResearch/hermes-agent/issues/69726)**  
  Brings WhatsApp to parity with Discord/Slack for skill bindings.

- **[#69694 – (merged) Per-task model selection in delegate_task](https://github.com/NousResearch/hermes-agent/pull/69694)**  
  Will allow users to assign different models to sub-agents; likely to land in next minor release.

- **[#4335 – Cross-platform session context sharing](https://github.com/NousResearch/hermes-agent/issues/4335)**  
  High community demand; may become a major architecture change in a future milestone.

- **[#45955 – ACP: honor `--toolsets` and add per-session tool scoping](https://github.com/NousResearch/hermes-agent/issues/45955)**  
  ACP adapter currently hardcodes toolset; feature requested for more flexible agent control.

- **[#44845 – Clarify prompts as durable ID-addressable decisions](https://github.com/NousResearch/hermes-agent/issues/44845)**  
  Proposal to replace short blocking timers with persistent decision IDs; could improve reliability for async platforms.

**Prediction:** Next minor version will likely include per-task model selection, WhatsApp skill bindings, and the merged desktop clarify navigation improvements. The cross-platform session sharing is a bigger architectural lift and may be deferred.

## 7. User Feedback Summary

Real user pain points and satisfaction signals:

- **Session context isolation** across platforms remains a top frustration (#4335). Users managing conversations on Telegram and CLI feel the agent's "amnesia."
- **Desktop UX regressions** are a recurring theme: session not switching after tab navigation (#66875), clarify choices not rendering (#69122, rep. in #69796), queued messages appearing in timeline instead of drawer (#69660). Users appreciate rapid fixes but wish for pre-release testing.
- **Installer/configuration shadowing** on macOS (#45279) and NixOS (#21341) frustrates users with non-standard setups; workarounds needed.
- **Silent failures** (context overflow #62708, oneshot checkpoint bypass #69737) erode trust. Users expect warnings or graceful degradation.
- Positive feedback implied by the **many fix PRs filed today** – community contributors are engaged (e.g., @ethernet8023, @OutThisLife, @webtecnica) and merging quickly.

Overall, users are **actively testing edge cases** (Windows, Nix, Docker, ACP) and reporting bugs at a high rate. Satisfaction is mixed: fast response on desktop bugs, but core stability issues (SQLite, session state) remain unresolved.

## 8. Backlog Watch

Issues and PRs that have been open for weeks or months with no significant progress, potentially requiring maintainer attention:

| Issue/PR | Created | Status | Need |
|----------|---------|--------|------|
| [#21341](https://github.com/NousResearch/hermes-agent/issues/21341) – NixOS `documents` path misconfiguration | 2026-05-07 | Open, 5 comments | Maintainer guidance or fix for Nix module; no PR activity. |
| [#12651](https://github.com/NousResearch/hermes-agent/issues/12651) – `.env` sanitizer does not remove `KEY=***` placeholders | 2026-04-19 | Open, 3 comments | Security bug (placeholders treated as real credentials); trivial fix pending. |
| [#25837](https://github.com/NousResearch/hermes-agent/issues/25837) – Vision inline oversized image bricks session (Anthropic) | 2026-05-14 | Open, 3 comments | Non-retryable 400 error; fix requires pixel-dimension check. |
| [#45279](https://github.com/NousResearch/hermes-agent/issues/45279) – macOS npm shim shadowing persists after claimed fix | 2026-06-12 | Open, 4 comments | User pointing to incomplete fix; needs re-evaluation. |
| [#57775](https://github.com/NousResearch/hermes-agent/issues/57775) – Windows `atomic_replace` drops writes on sharing violation | 2026-07-03 | Open, 1 comment | Silent data loss; affects gateway state persistence. |
| [#35601](https://github.com/NousResearch/hermes-agent/pull/35601) – `fix(profiles): exclude backup credentials from exports` | 2026-05-31 | Open PR, 0 comments | Security improvement; no merge activity. |

These items represent **lingering risks** for user data integrity, platform support, and security. The `sweeper:risk-session-state` label appears frequently across open issues, indicating session-state handling is a systemic pain point.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-07-23

## Today’s Overview
Project activity today is moderate, with **3 open issues** and **5 pull requests** updated in the last 24 hours. Two PRs were closed/merged—a security fix for Go dependencies and a documentation revert—while no new releases were published. The community continues to surface both bugs (a hook deserialization defect) and feature gaps (stateless gateway sessions, IRC long message handling). A handful of older contributions remain stalled, signalling areas where maintainer review is overdue.

## Releases
*None.* No new versions were tagged today.

## Project Progress
Two pull requests were merged or closed today:

- **#3286** (closed) – *fix: update Go and x/text for govulncheck* – Author: imguoguo. Addresses a vulnerability scan warning by bumping Go version and a dependency.  
  [PR #3286](https://github.com/sipeed/picoclaw/pull/3286)

- **#3285** (closed) – *docs: remove picopaw* – Author: imguoguo. Reverts an earlier documentation change (revert of #3096).  
  [PR #3285](https://github.com/sipeed/picoclaw/pull/3285)

These are relatively small maintenance tasks, indicating ongoing care for security and documentation hygiene.

## Community Hot Topics
The most active discussions (by comment count) involve a persistent bug and a feature gap:

- **#3258** – **[BUG] Process Hook `before_tool` modify not working** (1 comment) – Reported by Shiniese. The `decision` field is lost and arguments are misparsed due to a deserialization defect in the hook system. This blocks users who rely on custom tool preprocessing.  
  [Issue #3258](https://github.com/sipeed/picoclaw/issues/3258)

- **#3257** – **Add stateless/no-history mode for gateway sessions** (1 comment) – Requested by lisiying. Gateway users currently cannot create fresh conversations without passing a custom session key (unlike `picoclaw agent`). This is a usability pain point for stateless or ephemeral integrations.  
  [Issue #3257](https://github.com/sipeed/picoclaw/issues/3257)

- **#3287** – **Better support long messages in IRC** (0 comments, but filed today) – Author superuser-does. IRC clients split messages >512 bytes; PicoClaw currently treats each split part as a separate message. The request is to reassemble these into a single cohesive message.  
  [Issue #3287](https://github.com/sipeed/picoclaw/issues/3287)

## Bugs & Stability
One notable bug is active:

- **#3258** (open, stale) – *Hook `before_tool` deserialization defect* – Severity: **moderate/high**. The bug affects the core hook system, causing tool modifiers to silently discard the `decision` field and misinterpret arguments. No fix PR exists yet, and the issue has been stale for 8 days.  
  [Issue #3258](https://github.com/sipeed/picoclaw/issues/3258)

No crashes or regressions were reported today beyond this.

## Feature Requests & Roadmap Signals
Three user-driven feature requests stand out:

- **#3257** – Stateless gateway sessions: Likely to be addressed in the next minor release (0.4.x) given the simplicity and community demand.
- **#3287** – IRC long message reassembly: A specialised request that may be tackled if an IRC maintainer picks it up; currently no assignee.
- **PR #3283** (open) – *fix(dingtalk): support picture/image message inbound* – Author MrTreasure. Adds image handling to the DingTalk channel. This is a well-defined enhancement that is likely to be merged soon.  
  [PR #3283](https://github.com/sipeed/picoclaw/pull/3283)

Additionally, two older PRs signal future roadmap items:  
- **#3163** (stale) – AWS Bedrock prompt caching support.  
- **#3222** (stale) – DeltaChat refactor and cleanup.

## User Feedback Summary
Real pain points expressed today:

- **Hook reliability**: Shiniese cannot rely on `before_tool` for custom tool workflows due to a deserialisation bug.
- **Gateway statelessness**: lisiying finds the gateway mode inflexible for scenarios that require fresh per-request context without session reuse.
- **IRC split messages**: superuser-does reports a poor user experience when long messages are fragmented.
- **DingTalk image support** (PR #3283) indicates a user wanting richer multimodal input for that channel.

Overall, users are actively working with the project but encountering friction in core hook mechanics and channel-specific limitations.

## Backlog Watch
Several important items have been **stale for a week or more** with no recent maintainer response:

- **Issue #3258** – Hook bug (stale since Jul 22, reported Jul 15). Needs triage and fix assignment.
- **Issue #3257** – Stateless gateway feature (stale since Jul 22). Maintainer feedback would be valuable.
- **PR #3222** – DeltaChat refactor (last updated Jul 3, no comments). A sizeable cleanup that could improve codebase health.
- **PR #3163** – Bedrock prompt caching (last updated Jun 23, stale 30 days). A significant performance enhancement for AWS Bedrock users.

These items warrant maintainer attention to avoid community frustration and keep contributions moving.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest – 2026-07-23

## 1. Today's Overview

Project activity remains low but focused. Over the past 24 hours, one new security-related issue (#3118) was filed, and three existing pull requests received updates, though none were merged or closed. No new releases were published. The open PRs address a WhatsApp identity bug, a Waybar status indicator skill, and Telegram rich rendering – indicating incremental feature work and bug fixing continues. Overall project health is stable but the lack of merges and low community engagement (zero comments or reactions on all items) suggests maintainers may be reviewing code or awaiting CI checks.

## 2. Releases

No new releases were published today. The latest available release remains unchanged. No migration notes or breaking changes to report.

## 3. Project Progress

No pull requests were merged or closed in the last 24 hours. Three PRs remain open and were updated:

- **#3070** – Fix WhatsApp sender identity divergence between Baileys and Cloud paths (author: QuantumBreakz). This PR addresses a bug where the same phone number was assigned two different user IDs depending on the channel path used. No comments since its creation on July 16.
- **#3117** – New utility skill: `add-omarchy-statusbar` – a Waybar status indicator for NanoClaw (author: mmneimne). Filed and updated yesterday, this is a non‑core skill addition.
- **#2877** – Feature: native rich rendering via Telegram Bot API 10.1's `sendRichMessage` (author: robbyczgw-cla). Open since June 28, still awaiting review.

## 4. Community Hot Topics

No issues or PRs generated any comments or reactions in the last 24 hours. The single open issue (#3118) was posted yesterday with zero discussion. The lack of community engagement may indicate that the project is in a quiet period or that maintainers need to prompt feedback. All three open PRs also have zero comments, suggesting they are either uncontroversial or still awaiting initial review.

## 5. Bugs & Stability

One bug has been reported:

- **#3118** (OPEN, created 2026-07-22) – *SECURITY.md overclaims per-group credential isolation*. The documentation states that each NanoClaw group gets its own OneCLI agent identity, but in reality, OAuth connections on a self-hosted OneCLI gateway are account‑level, not per‑group. This is a **medium‑severity** documentation‑accuracy bug that could mislead administrators about security boundaries. No fix PR exists yet.

Additionally, PR **#3070** addresses a **medium‑severity** functional bug (WhatsApp sender identity divergence) – while not merged, it is the active fix.

No crashes or regressions were reported.

## 6. Feature Requests & Roadmap Signals

Two feature‑related PRs remain open and signal potential roadmap items:

- **#2877** (since June 28) – Native rich rendering for Telegram via Bot API 10.1. This would enhance Telegram channel output quality. Likely targeting a future minor release.
- **#3117** (since July 22) – Waybar status indicator utility skill. This is a lightweight, standalone addition that likely does not require core changes.

Given the low activity and no new releases, these features are unlikely to land in the immediate next release unless maintainers accelerate reviews.

## 7. User Feedback Summary

No direct user comments or reactions were recorded today. The open issue #3118 indicates a user (bradfeld) identified a documentation inaccuracy regarding credential isolation – suggesting at least one user is carefully evaluating security claims. The WhatsApp bug (#3070) was reported internally (#3069) and likely reflects a real pain point for users running both native and cloud WhatsApp channels. No explicit satisfaction or dissatisfaction signals.

## 8. Backlog Watch

The following items have been open for an extended period without maintainer response:

- **PR #2877** – Telegram rich rendering: Open since **2026-06-28** (25 days). No comments from maintainers. This is the longest‑standing open PR awaiting review.
- **PR #3070** – WhatsApp identity fix: Open since **2026-07-16** (7 days). Still no merge or maintainer comments.

These PRs are candidate for maintainer attention to avoid stagnation. The new security issue #3118 could also become stale if not acknowledged quickly.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest — 2026-07-23

## Today's Overview
The NullClaw project saw a low-activity day with one bug-fix PR merged and its associated issue closed. No new releases or tagged versions were published. The main focus was on resolving a critical Discord gateway reliability defect: the bot would go permanently deaf after processing a single message event. A corresponding stack overflow issue in the typing indicator thread was also fixed. Overall, the project remains stable with a single contributor (Tetraslam) driving the day’s changes.

## Releases
*No new releases today.*

## Project Progress
- **PR #978 (merged/closed)** – [discord: run typing thread on the heavy runtime stack](https://github.com/nullclaw/nullclaw/pull/978)  
  Moved the Discord typing-indicator thread from the auxiliary (512KB) stack to the heavier runtime stack to prevent stack overflows during TLS handshakes. This fix resolves crashes that occurred whenever a typing indicator was triggered (e.g., after processing a message).

## Community Hot Topics
- **Issue #977 (closed)** – [Discord gateway goes permanently deaf after exactly one MESSAGE_CREATE](https://github.com/nullclaw/nullclaw/issues/977)  
  The single most active item today (1 comment, 0 reactions). The reporter (Tetraslam) provided a clear reproduction: the bot handles one inbound message, replies successfully, then never dispatches another event despite heartbeats continuing. The underlying need was for reliable long-lived gateway connections – a critical requirement for any production Discord bot.  
- **PR #978 (merged/closed)** – (linked above) addressed the stack overflow symptom but the deafness issue may have a separate root cause; the two fixes are closely related.

## Bugs & Stability
- **Severity: Critical** – *Discord gateway deafness* (Issue #977)  
  A 100% reproducible bug that causes the bot to become unresponsive after processing a single message. No active fix PR exists for this specific symptom; the merged PR #978 only resolved a related crash. The root cause remains unaddressed (likely an event loop or socket state issue).  
- **Severity: High** – *Typing indicator thread stack overflow* (PR #978)  
  Caused process abort when a typing trigger occurred. Now fixed by increasing stack size.

## Feature Requests & Roadmap Signals
No explicit feature requests were observed in today’s data. The focus remains on stabilizing the Discord gateway implementation. Future roadmap signals may include more robust event dispatch handling or a re-architecture of the gateway connection lifecycle to prevent silent failures.

## User Feedback Summary
The only user pain point documented is the Discord gateway reliability problem reported by Tetraslam. The user expressed clear dissatisfaction with a bot that appears online but is functionally deaf. The fix for the typing crash is appreciated, but the core deafness issue likely still affects any deployment using message events. No positive feedback was recorded today.

## Backlog Watch
No long-standing unanswered issues or PRs were identified in the last 24 hours. The project appears to be actively maintaining a lean backlog with rapid closure of reported problems.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-07-23

## 1. Today’s Overview

IronClaw is in an intense stabilization and refactoring push ahead of its v1 launch. In the last 24 hours, 50 issues were updated (36 remain open/active), and 50 PRs saw activity, with exactly half (25) being merged or closed. No new releases were cut, but the team is actively closing foundational epics from the Reborn roadmap and merging large refactoring PRs (XL-sized) that rewire core abstractions like `ProductSurface`. Activity is high, with multiple bug-bash items (especially around Telegram integration) being opened and fixed in quick succession. The project appears to be balancing finishing touches for launch with long-term architectural unification.

## 2. Releases

No new releases were published in the last 24 hours.

## 3. Project Progress

**Merged/Closed PRs (today’s date filter):** Several significant PRs were merged or closed on 2026-07-23:

- **#6540** (M, merged) – Mask ambient `NEARAI` environment variables in tests to ensure deterministic CI runs.
- **#6538** (XL, closed) – Route OpenAI-compatible Chat Completions and Responses through `ProductSurface`, preserving inline-image constraints and WebUI reuse.
- **#6537** (XS, closed) – CI fix: run full Reborn test/E2E gates on `release-fix-*` branches (previously missing).
- **#6535** (XS, closed) – Add Slice 0 reference model oracles for turn/run lifecycle, covering 10+ stateful operations (submit, claim, heartbeat, cancel, etc.).
- **#6529** (XL, closed) – Move outbound delivery-target preferences facade out of composition into `ironclaw_outbound`, keeping only the adapter in `ironclaw_product_workflow`.
- **#6480** (XL, closed) – Continue `ProductSurface` conversion for operator, project, admin, automation, and view APIs, retaining operator config capabilities.
- **#6444** (XS, closed) – Docs refresh: Reborn ProductSurface routing design, adds Urbit/terminal takeaway and vocabulary tightening.
- **#6441** (XL, closed) – Refactor to name `ProductSurface` trait over `RebornServicesApi`, move WebUI and composition to depend on `Arc<dyn ProductSurface>`.

These PRs demonstrate a systematic migration toward `ProductSurface` as the unified routing abstraction, alongside targeted CI and test infrastructure improvements.

**Closed foundational issues (retrospectively completed):** A batch of 10 issues (e.g., #6519, #6515, #6514, #6513, #6510, #6505, #6499, #6498, #6495, #6494, #6493, #6489) were closed as completed records of earlier foundation work (Telegram support, extension runtime, OAuth hardening, etc.). This suggests the team is tidying up the roadmap tracker for clarity.

## 4. Community Hot Topics

The most active issues (by comment count) in the last 24h:

- **#6284** «[epic] error-recoverability endgame» (4 comments) – Outlines a strict contract for recovering from all mid-run errors. Indicates the team is setting a high reliability bar.
- **#6105** «Extension/channel lifecycle state-machine test…» (3 comments) – Describes a test for install→connect→disconnect→reconnect→uninstall flow for Slack, which has been a persistent regression. Signals strong focus on channel reliability.
- **#5459** «Configurable skills and tools» (2 comments) – A long-standing feature request for admin/user-installed WASM tools and skills.
- **#3288** «Production/scoped capability lifecycle admin parity» (2 comments) – Parent epic unifying extension/skill/MCP lifecycle under typed services.
- **#6523** «Agent fails to create during onboarding if testing flag set» (1 comment) – Fresh bug blocking onboarding.
- **#6534** «Google OAuth config can’t be applied in hosted deployments» (1 comment) – Configuration issue on hosted staging.

The pattern shows the community (likely internal QA and core contributors) is pushing hard on stabilization, with the most energy around error recovery, channel lifecycle reliability, and enterprise-adjacent features (OAuth, admin config).

PRs did not show public comment counts (data omitted), but the large number of dependency bumps (e.g., #6428, #6361, #6446) suggests active maintenance of the Rust dependency tree.

## 5. Bugs & Stability

Several bugs were reported in the last 24h, many from the QA bug-bash labeled `v1-launch-checklist` or `bug_bash`:

| Severity | Issue | Summary | Status | Fix PR? |
|----------|-------|---------|--------|---------|
| P1 | **#6475** | Telegram `/pair` command not recognized, user trapped in pairing loop | OPEN | None linked yet |
| P1 | **#6474** | Telegram delivery channel not configurable in Delivery Defaults | OPEN | None linked yet |
| P2 | **#6478** | Agent does not recognize connected Telegram, redirects to Slack auth | OPEN | None linked yet |
| P2 | **#6523** | Agent fails to create during onboarding if testing flag is set | OPEN | None linked yet |
| P2 | **#6534** | Google OAuth config can’t be applied in hosted deployments | OPEN | Partially addressed by #6533 (merged) which fixes `os error 2` UX and container restart path |
| P3 | **#6522** | No Telegram setup instructions in UI; user must use CLI | OPEN | Enhancement request, no PR |
| N/A | **#6521** | `ironclaw` CLI not available on agent staging | CLOSED | Already resolved (was a deployment configuration issue) |

**Stability trends:** Telegram integration is the #1 source of new bugs, with three P1/P2 items opened today alone. The channel routing confusion (Telegram ignored in favor of Slack) indicates an incomplete channel-selection heuristic or bug in the extension lifecycle. Google OAuth config persistence is another friction point. The fixed CLI availability issue signals operational maturity improvements on the hosted staging environment.

## 6. Feature Requests & Roadmap Signals

Notable feature requests surfaced in open issues:

- **#6532** (Attested-signing stack + Ledger hardware-wallet clear signing) – A design + Phase A plan to enable IronClaw agents to perform blockchain transactions without being able to move funds unilaterally. This is a strategic addition for Web3/DeFi use cases.
- **#5459** (Configurable skills and tools) – Admin/user ability to install WASM tools and skills with visibility controls. Active since June, likely targeting post-launch.
- **#2246** (Unify extension model: MCP tools as single-tool extensions) – Open since April, touches core model abstraction. The recent surge of `ProductSurface` refactoring may unblock this.
- **#1519** (Routine notifications lack context in user’s chat thread) – A UX gap for routine-driven messages, open since March.
- **#1330** (Tool schema discovery: expose message routing and attachment semantics) – An engineering improvement for tool schema clarity, open since March.

**Predictions for next release:** Given the intensity of `ProductSurface` migration and the closing of foundational epics, the next release (likely `1.0.0-rc.1`) will focus on:
- Resolving Telegram bugs (pairing, delivery defaults, channel recognition)
- Completing Google OAuth config runtime application (PR #6531 is open)
- Merging the `ProductSurface` conversion for remaining APIs (PR #6536 open)
- Possibly including the attestation signing design phase (not code yet).

## 7. User Feedback Summary

Based on issues and PR descriptions, common user pain points include:

- **Telegram setup confusion**: Users see no instructions in UI, are instructed to use CLI, and pairing flow is broken (`/pair` not recognized, no Telegram option in Delivery Defaults). This is a clear UX failure for a newly supported channel.
- **Slack dominance in routing**: The agent sometimes defaults to Slack even when Telegram is connected, suggesting the routing logic doesn’t respect user’s active channel.
- **Onboarding blocker**: The “test build” flag during agent creation causes a deployment error—new users hit a dead end.
- **Google OAuth configuration non-functional on hosted**: Admins can save config but changes aren’t applied until a server restart; this is confusing for enterprise users.
- **CLI unavailable on staging**: Operators expecting to restart services via `ironclaw service restart` found the command missing—though fixed.

Overall sentiment: the project is near launch but the Telgram channel and OAuth config are the most visible beta-quality items. Users (internal testers) are frustrated by the lack of in-app guidance and routing bugs.

## 8. Backlog Watch

Long-standing issues that lack recent maintainer activity or are important but stuck:

- **#1330** (March 18) – Tool schema discovery: no comments in 4 months, labeled `on hold`. Risk: low priority, but could impact model performance when using built-in tools.
- **#1519** (March 21) – Routine notification context: last comment was on July 22, but neither assigned nor in progress. May be superseded by broader notification rework.
- **#2246** (April 10) – Unify extension model: labeled `refactoring` and `scope: tool/mcp`. The recent `ProductSurface` work likely addresses this indirectly, but no direct PR linkage.
- **#3288** (May 6) – Capability lifecycle admin parity: parent epic with many children, last update was July 22. Still open. Likely being tracked via child issues.
- **#5459** (June 30) – Configurable skills/tools: moderate activity (2 comments), but no assignee or milestone. May be deferred post-v1.
- **#4775** (June 11) – Automated QA epic: last update July 22, closed? Actually marked OPEN. Awaiting completion of underlying kids.

These backlogs suggest the team is laser-focused on v1 launch blockers (Telegram, OAuth, ProductSurface), while broader architectural improvements (unified extensions, tool schema) are deferred to v1.1 or later.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-07-23

## Today's Overview
Project activity was moderate with 5 pull requests merged and 1 issue closed in the last 24 hours. No new releases were published. The team focused on stability hardening (Windows installer, OpenClaw OOM guard) and UI polish (export modal stacking context). Two long‑stale PRs from April were finally merged, bringing scheduled task customisation and skills management features into the main branch. Overall, the project is progressing steadily with an emphasis on platform robustness and user‑experience improvements.

## Releases
No new releases today.

## Project Progress
All 5 PRs updated in the last 24 hours were closed/merged:

- **Windows installer hardening** (`PR #2377`)  
  Strengthened the installer for Windows platforms.  
  [GitHub](https://github.com/netease-youdao/LobsterAI/pull/2377)

- **Export modal rendering fix** (`PR #2376`)  
  Resolved a stacking context conflict where the export options modal appeared behind the sidebar, by mounting it via a body portal.  
  [GitHub](https://github.com/netease-youdao/LobsterAI/pull/2376)

- **Skills management** (`PR #1346` — stale, closed today)  
  Introduced a skills management interface, following upstream guidelines from a referenced PR. This is a feature that had been pending for several months.  
  [GitHub](https://github.com/netease-youdao/LobsterAI/pull/1346)

- **Scheduled task enhancements** (`PR #1347` — stale, closed today)  
  Added Cron custom scheduling (visual builder + raw expression editor), Agent/Model selector binding, and unified form UX for the scheduled task module.  
  [GitHub](https://github.com/netease-youdao/LobsterAI/pull/1347)

- **OpenClaw OOM crash guard** (`PR #2375`)  
  Added protection against oversized transcript loading that caused JavaScript heap out‑of‑memory crashes. The fix blocks transcripts before gateway load, classifies OOM crashes, and ignores stale gateway generations after restart to prevent zombie reconnects.  
  [GitHub](https://github.com/netease-youdao/LobsterAI/pull/2375)

## Community Hot Topics
The only issue updated in the last 24 hours was:

- **#1348 – Duplicate scheduled task names not validated** (2 comments)  
  Reported on 2026-04-02, closed today as stale. The issue describes a missing validation for duplicate cron task names, which could lead to confusing behaviour. Although closed without a visible fix PR, the broader scheduled task module received significant improvements in PR #1347. The underlying need for better input validation and user feedback remains.  
  [GitHub](https://github.com/netease-youdao/LobsterAI/issues/1348)

No other issue or PR attracted comments or reactions today.

## Bugs & Stability
| Severity | Bug | Fix Status |
|----------|-----|------------|
| **Critical** | OpenClaw crash when loading large transcripts (heap OOM) | Fixed in PR #2375 (merged today) |
| **Medium** | Export modal rendered behind sidebar (UI stacking) | Fixed in PR #2376 (merged today) |
| **Low** | Duplicate scheduled task names not flagged (issue #1348) | Issue closed without explicit fix; improvements in PR #1347 may mitigate |

The OOM fix in OpenClaw is the most significant stability improvement, as it prevents application crashes and zombie connections on memory exhaustion.

## Feature Requests & Roadmap Signals
The merged stale PRs signal the following features are now landing:

- **Cron custom scheduling** – Users can now define schedules via a visual builder or raw expression, with real‑time preview and validation.
- **Agent/Model binding for scheduled tasks** – Tasks can be tied to specific agents and models, enabling more granular automation.
- **Skills management** – A dedicated interface for managing user‑defined skills.

These align with a roadmap focused on **task automation** and **agent customisation**. No new feature requests were raised today, but the scheduled task enhancements address previously reported pain points (e.g., limited scheduling options).

## User Feedback Summary
Direct user feedback is sparse. The most tangible pain point captured is the **duplicate scheduled task name** issue, which suggests users are creating multiple tasks and expect immediate validation. The fix for the export modal stacking indicates users encountered visual confusion when exporting. The OOM crash guard addresses a severe real‑world scenario where large transcripts could crash the application, likely affecting power users handling long conversation histories.

Overall, the community appears satisfied with the gradual delivery of long‑requested features (scheduled tasks, skills) and appreciates the increased stability on Windows and during transcription handling.

## Backlog Watch
Two stale PRs (#1346, #1347) were closed today after months of inactivity. No other high‑priority, long‑unanswered issues or PRs are currently outstanding. The project maintainers have effectively cleared accumulated backlog items. No significant items require immediate attention.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

## Moltis Project Digest – July 23, 2026

### 1. Today's Overview
The Moltis repository saw minimal activity in the past 24 hours. No new issues were opened or closed, and no releases were published. A single pull request (#1162) remains open, focusing on cosmetic improvements to date labels in the web interface. With zero open issues and only one active PR, the project appears to be in a stable, low-activity phase, possibly indicating maintainers are either allocating efforts elsewhere or the current feature set meets community needs.

### 2. Releases
**No new releases** were published today. The project has no release history in the observed timeframe.

### 3. Project Progress
**Merged/Closed PRs today:** None.  
The only PR updated in the last 24 hours is still open:

- **#1162 (OPEN)** – `fix(web): show dates for older sessions`  
  *Author: shixi-li* – No significant discussion or votes.  
  The PR improves date display logic: keeping localized `HH:MM` for today’s sessions, showing “yesterday” or weekday labels for recent days, and falling back to calendar dates (with year if needed) for older sessions.  
  *Link: [PR #1162](https://github.com/moltis-org/moltis/pull/1162)*

No other features or fixes advanced to a merged state.

### 4. Community Hot Topics
**No highly active discussions** were observed. The only open PR (#1162) has zero comments and zero reactions, making it the sole item but not a “hot” topic. The project currently shows no signs of community debate or concentrated interest.

### 5. Bugs & Stability
**No new bugs, crashes, or regressions** were reported today. The zero‑issue state suggests the project is either very stable or that bug tracking occurs elsewhere. No fix PRs beyond the open date‑label improvement exist.

### 6. Feature Requests & Roadmap Signals
**No feature requests** were filed or discussed today. Given the lack of user activity, it is difficult to predict upcoming features. The only active change (#1162) is a UI polish, implying the next release might focus on incremental quality-of-life improvements rather than major new capabilities.

### 7. User Feedback Summary
**No user feedback, pain points, or use‑case descriptions** were recorded today. The repository has no issues or PR comments to analyze. This silence could indicate high user satisfaction – or simply that the community is not actively engaging through GitHub at this time.

### 8. Backlog Watch
**Nothing flagged as backlog.** With zero open issues and only one open PR created yesterday, there are no long‑unanswered items awaiting maintainer attention. The project backlog is effectively empty.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-07-23

## 1. Today’s Overview

CoPaw (GitHub repo: `agentscope-ai/QwenPaw`) saw high activity over the past 24 hours, with **26 issues updated** (19 open, 7 closed) and **50 pull requests updated** (34 open, 16 merged/closed). A new patch release **v2.0.0.post4** was published, focusing on agent reasoning optimizations. The project is in an intense development cycle: many bugs and regressions from the v2.0.0 line are being actively fixed, while feature work continues on cron overrides, a new AG‑UI protocol endpoint, and the “QwenPaw Creator” app plugin. Community engagement is strong, with several long‑running bug threads and feature requests drawing multiple participants.

## 2. Releases

### v2.0.0.post4

- **What’s changed**: Optimized agent reasoning to mitigate redundant thinking loops and duplicate tool invocations.  
- **Breaking changes**: None.  
- **Migration notes**: No migration steps required; this is a patch-level update.  
- **Link**: [v2.0.0.post4 Release Notes](https://github.com/agentscope-ai/QwenPaw/releases/tag/v2.0.0.post4)

## 3. Project Progress

**16 PRs were merged or closed today.** Notable closed/merged PRs:

- **#6357** – `fix(console): prioritize one-time approval` – Switches the “Always Allow” / “Just Once” button styling to reduce risk of accidental permanent grants.  
- **#6367** – `test(console): stabilize Gate coverage test` – Increases a timeout from 15s to 30s for V8‑instrumented test runs.  
- **#6375** – `fix(token-usage): retry token usage persistence` – Adds retry logic for transient write failures in token usage recording.  
- **#6369** – `fix(governance): honor disabled audit logging` – Ensures `audit_level: none` actually skips SQLite persistence.  
- **#6371** – `fix(file-handling): continue fallback after downloader timeout` – Fixes `subprocess.TimeoutExpired` escaping the fallback chain.  
- **#6373** – `fix(channels): preserve recreated queue state` – Prevents idle cleanup from removing a newly created queue state.  
- **#6365** – `fix(console): run test scripts on Windows` – Makes `npm test` work on Windows by using the Node entry point directly.  
- **#6364** – `fix: strip markdown fences and XML tags from tool_call arguments` – Fixes tool execution for models like GLM‑5‑Turbo and DeepSeek‑V3.  
- **#6360** – `fix: change context injection role from system to user` – Fixes `ValueError` on GLM/OpenAI APIs caused by mid‑conversation system messages.  
- **#6356** – `fix(mission): preserve quoted verify commands` – Uses quote‑aware tokenization for mission verification commands.  
- **#6352** – `fix(mission): avoid directory collisions` – Prevents mission state collisions when two missions start within the same second.  
- **#6348** – `fix(mission): handle malformed user stories` – Validates `userStories` before use.  
- **#6351** – `fix(memory): guide failed memory edits` – Improves MEMORY.md prompts to help agents recover from failed edits.

**Key open PRs** (still under review):

- **#6302** – `feat(providers): add safe model discovery infrastructure` – First provider integrations (manual model lists replaced by auto‑discovery).  
- **#6284** – `feat(apps): add qwenpaw-creator app` – A script‑to‑video workflow plugin.  
- **#6337** – `feat(agui): expose AG‑UI protocol via /protocol/agui/chat` – Streams agent responses as SSE for external consumers.  
- **#6353** – `feat(crons): support per-job model overrides` – Allows cron jobs to pin a model independently.  
- **#6378** – `perf: prevent synchronous I/O from blocking the event loop` – Centralizes atomic file I/O with async wrappers.

## 4. Community Hot Topics

Most active issues (by comment count) in the past 24 hours:

| Issue | Title | Comments | Link |
|-------|-------|----------|------|
| #5218 (CLOSED) | `[Bug] 子Agent触发上下文压缩时QwenPaw进程冻结无响应` | 18 | [Issue #5218](https://github.com/agentscope-ai/QwenPaw/issues/5218) |
| #6322 (CLOSED) | `[question] platform域名跳转广告页面` | 8 | [Issue #6322](https://github.com/agentscope-ai/QwenPaw/issues/6322) |
| #6314 (OPEN) | `[Bug]: RemoteProtocolError: peer closed connection without sending complete message body` | 8 | [Issue #6314](https://github.com/agentscope-ai/QwenPaw/issues/6314) |
| #6307 (OPEN) | `[Performance] v2.0 introduces ~2s fixed overhead per simple conversational reply vs v1.x` | 5 | [Issue #6307](https://github.com/agentscope-ai/QwenPaw/issues/6307) |
| #6297 (CLOSED) | `[Feature]: 希望能在对话中直接拖拽上传图片、PDF和office文档` | 4 | [Issue #6297](https://github.com/agentscope-ai/QwenPaw/issues/6297) |
| #6316 (OPEN) | `[Feature]: Allow agent-type cron jobs to optionally specify a model` | 3 | [Issue #6316](https://github.com/agentscope-ai/QwenPaw/issues/6316) |

**Analysis**:  
- The **process freeze on sub‑agent context compaction** (#5218) was the most commented issue (18 comments) and has been closed – presumably fixed in v2.0.0.post4 or a prior hotfix.  
- **Network‑related bugs** (#6322, #6314) indicate frustration around platform domain redirections and sudden connection closures. #6322 appears to be a mobile‑network‑specific ad‑redirect problem that differs between carriers.  
- **Performance regression in v2.0** (#6307) is a critical concern: users are experiencing ~2s of fixed overhead per simple reply. This points to architectural inefficiencies in the request pipeline.  
- **File upload via drag‑and‑drop** (#6297) is a heavily upvoted workflow request, especially for contract review use cases on Windows.  
- **Cron model overrides** (#6316) has an open PR (#6353), so community feedback is being directly addressed.

## 5. Bugs & Stability

New bugs reported today, ranked by potential impact:

| Severity | Bug | Status | Fix PR? |
|----------|-----|--------|---------|
| **Critical** | [#6376] `v2.0.0.post3/post4 loop功能导致主进程挂了` – New loop feature crashes main process during runtime. User requests stress testing. | Open | No PR yet |
| **High** | [#6307] `v2.0 introduces ~2s fixed overhead` – Performance regression affecing every simple reply. | Open | No PR yet |
| **High** | [#6363] `tool_call arguments polluted with markdown fences / XML tags` – Breaks all tool execution for GLM‑5‑Turbo, DeepSeek‑V3. | Open | [#6364] (merged today) |
| **High** | [#6358] `context injection as role='system' causes ValueError` – Breaks GLM/OpenAI APIs. | Open | [#6360] (merged today) |
| **Medium** | [#6374] `token usage persistence does not retry after transient write failure` – Loses token usage data. | Open | [#6375] (merged today) |
| **Medium** | [#6372] `idle cleanup can remove a newly recreated queue state` – Can cause missed notifications or state corruption. | Open | [#6373] (open) |
| **Medium** | [#6370] `continue downloader fallback after timeout` – Timeout from `wget`/`curl` not caught, breaks downloads. | Open | [#6371] (merged today) |
| **Low** | [#6361] `Console test scripts do not start on Windows` – Blocks Windows contributors. | Open | [#6365] (merged today) |
| **Low** | [#6362] `使用内置 MiniMax 供应商且模型选择MiniMax-M3时，图片无法被模型正确识别` – Vision capability broken for MiniMax‑M3. | Open | No PR yet |
| **Low** | [#6366] `Console coverage run can time out in AgentLoopCard Gate test` – Flaky test under V8 coverage. | Closed | [#6367] (merged today) |
| **Low** | [#6354] `Approval Dialog UI Design Risks Accidental Permanent Permission Grants` – UI imbalance between “Always Allow” and “Just Once”. | Closed | [#6357] (merged today) |
| **Low** | [#6355] `Mission parser splits quoted --verify commands` – Breaks multi‑word verification commands. | Open | [#6356] (open) |
| **Low** | [#6368] `honor audit_level=none before persisting events` – Config not respected. | Open | [#6369] (merged today) |

**Key observations**: The v2.0.0 line suffers from multiple regressions (performance overhead, loop crashes, tool calling issues). The team is responding quickly – most bugs have associated fix PRs that were merged the same day they were reported.

## 6. Feature Requests & Roadmap Signals

- **Drag‑and‑drop file upload** (Issue #6297, closed as enhancement) – Strong demand from Windows users for contract review. Likely to be implemented in an upcoming UI overhaul.  
- **Per‑job model overrides for cron** (Issue #6316, open; PR #6353 open) – Already being worked on, likely for v2.1.  
- **Docker hot‑update** (Issue #6344, open) – Users want in‑place updates without container rebuild. Could be a mid‑term improvement.  
- **Multi‑user / team deployment** (Issue #6335, open) – Enterprise demand for multi‑account management. This is a significant roadmap item.  
- **Expose agent as HTTP API** (Issue #6377, open) – Request for turnkey API endpoints with controlled input/output formats.  
- **ReMe embedding verification** (Issue #6342, open) – User wants confirmation that vector storage is working. Suggests need for better diagnostics.  
- **Safe model discovery** (PR #6302, open) – Infrastructure for automatic model list retrieval. Expected to roll out gradually.  
- **QwenPaw Creator** (PR #6284, open) – A video‑creation app plugin. New product direction?  
- **AG‑UI protocol endpoint** (PR #6337, open) – Opening CoPaw to external integrations. Signals platform‑as‑service ambitions.

**Next‑version prediction**: v2.1 will likely include the performance fix for #6307, stable model discovery, cron model overrides, and the AG‑UI protocol endpoint. Drag‑and‑drop upload may land in v2.2.

## 7. User Feedback Summary

**Pain points expressed**:
- **Performance regression** (#6307): “Upgrading from v1.x to v2.0 adds ~2s fixed overhead on every simple reply.” Several users have echoed this in the issue.  
- **Process crashes** (#6376, #5218): Users in production complain that v2.0 crashes under load, with calls for stress testing before release.  
- **Tool execution failure** (#6363): Models like GLM‑5‑Turbo are unusable for tool‑using agents due to markdown/XML pollution. One user called it “breaks all tool execution”.  
- **Vision broken for MiniMax‑M3** (#6362, also #5135): A recurring problem – the model fails to understand images.  
- **Mobile ad‑redirect** (#6322): A carrier‑specific issue that degrades the mobile experience.  
- **Unclear embedding setup** (#6342): User installed an embedding model but cannot tell if it’s working – lack of confirmation UI.  
- **Docker update pain** (#6344): “每次更新都需要重新安装，严重影响自用机器人长期使用体验”。

**Satisfaction signals**:  
- Many bugs are fixed within hours of reporting, showing responsive maintainers.  
- The new release v2.0.0.post4 explicitly addresses thinking loops – a common community complaint.  
- Approval dialog UX (#6354) was fixed promptly after feedback.

## 8. Backlog Watch

| Issue/PR | Age | Last Maintainer Action | Recommendation |
|----------|-----|------------------------|----------------|
| [#5135] `[Bug]: MiniMax-M3 大模型视觉能力异常` (CLOSED) | ~6 weeks | Closed yesterday with no fix reported; duplicate of #6362? | Re‑evaluate: #6362 reopened the same problem. Needs a proper fix. |
| [#6176] `[Bug]: cron CLI update resets untouched runtime and metadata fields` (CLOSED) | 1 week | Closed without resolution details. | Verify the fix was actually applied; user may have missed it. |
| [#6338] `[Release Duty] QwenPaw v2.0.0.post4 — Installation Verification` (OPEN) | 1 day | No comments; deadline passed. | Ensure the verification checklist is completed and results published. |

**No long‑unanswered issues** – the team is actively triaging. The only concern is the MiniMax‑M3 vision bug, which keeps resurfacing despite being closed.

---

*Generated from data on 2026-07-23. All links point to the CoPaw repository at [github.com/agentscope-ai/QwenPaw](https://github.com/agentscope-ai/QwenPaw).*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-07-23

---

## 1. Today’s Overview

Project activity remained very high: **50 issues** and **50 pull requests** were updated in the last 24 hours, with **12 issues closed** and **no PRs merged**. The repository shows sustained development momentum, particularly around the goal system, Anthropic fallback support, and provider architecture refactoring. However, the absence of merged PRs for the day suggests that many open PRs are either waiting on author revisions or maintainer review – the **needs-author-action** label appears on several large PRs. No new releases were published.

---

## 2. Releases

No new releases were recorded. The last published version remains the one preceding the current activity.

---

## 3. Project Progress

While no PRs were merged today, **12 issues were closed**, indicating that several features and bug fixes reached a resolution (likely through earlier merges or design decisions). Notable closed items include:

- [**#6641**](https://github.com/zeroclaw-labs/zeroclaw/issues/6641) – Turn-level OTel trace correlation (nested spans for LLM calls, tool calls, memory) – closed after implementation.
- [**#5674**](https://github.com/zeroclaw-labs/zeroclaw/issues/5674) – Made `classify_channel_reply_intent` configurable, addressing a user pain point where the assistant ignored users in 1:1 chats.
- [**#6289**](https://github.com/zeroclaw-labs/zeroclaw/issues/6289) – Prompt-triggered install suggestions for missing skills/plugins, improving discoverability.
- [**#5628**](https://github.com/zeroclaw-labs/zeroclaw/issues/5628) – Daemon auto-start port conflict on boot – fixed.
- [**#6557**](https://github.com/zeroclaw-labs/zeroclaw/issues/6557) – Reconcile runtime model switching with new provider structure – closed ahead of v0.8.0.
- [**#6489**](https://github.com/zeroclaw-labs/zeroclaw/issues/6489) – “Everything is a plugin” architectural direction – closed as the long-term roadmap is accepted.
- [**#5752**](https://github.com/zeroclaw-labs/zeroclaw/issues/5752) – Replaced hardcoded provider timeout values with configurable parameters.
- [**#5840**](https://github.com/zeroclaw-labs/zeroclaw/issues/5840) – Evaluated multi-chunk reasoning replay fidelity for streamed tool turns.

These closures represent tangible progress toward v0.8.0 hardening.

---

## 4. Community Hot Topics

The most active discussions (by comment count) reveal deep technical and architectural concerns:

- [**#5937**](https://github.com/zeroclaw-labs/zeroclaw/issues/5937) (12 comments) – **Feature: Refactor providers architecture and reqwest client management**. Users and maintainers are debating the unification of provider modules, which suffer from code duplication and inconsistent configuration. This is a foundational effort for future provider extensions.
- [**#7462**](https://github.com/zeroclaw-labs/zeroclaw/issues/7462) (12 comments) – **Bug: 74 test failures on Windows**. The community is actively identifying platform-specific issues (Unix-only commands, path semantics, console encoding) that block Windows adoption. CI does not currently run Windows tests, making this a high-impact gap.
- [**#5982**](https://github.com/zeroclaw-labs/zeroclaw/issues/5982) (10 comments) – **Feature: Per-sender RBAC for multi-tenant deployments**. A strong demand for isolated workspaces, tool sets, and rate limits – essential for production deployments serving multiple customer classes.
- [**#5808**](https://github.com/zeroclaw-labs/zeroclaw/issues/5808) (9 comments) – **Feature: Defer built-in tool schemas to reduce prompt floor**. Users report that the first LLM call already exceeds the context budget due to full tool schemas. Discussion focuses on lazy loading.
- [**#6641**](https://github.com/zeroclaw-labs/zeroclaw/issues/6641) (8 comments, closed) – **Turn-level OTel trace correlation**. Already resolved, but the discussion was heated about the best instrumentation approach.

Additionally, the **Anthropic fallback PR series** ([#9262](https://github.com/zeroclaw-labs/zeroclaw/pull/9262), [#9265](https://github.com/zeroclaw-labs/zeroclaw/pull/9265), [#9266](https://github.com/zeroclaw-labs/zeroclaw/pull/9266), [#9268](https://github.com/zeroclaw-labs/zeroclaw/pull/9268)) is generating cross-PR conversation around typed refusal handling and server-side fallback mechanics.

---

## 5. Bugs & Stability

Several bugs are actively being addressed:

**High severity:**
- [**#7462**](https://github.com/zeroclaw-labs/zeroclaw/issues/7462) – **74 Windows test failures** (S2 degraded). No fix PR yet; root cause analysis ongoing.
- [**#5869**](https://github.com/zeroclaw-labs/zeroclaw/issues/5869) – **RUSTSEC advisory cluster** from `rumqttc` transitive dependencies (blocked on upstream update). Security-critical; marked `status:blocked`.
- [**#5628**](https://github.com/zeroclaw-labs/zeroclaw/issues/5628) – **Daemon port conflict on boot** – closed as fixed.

**Medium severity:**
- [**#6548**](https://github.com/zeroclaw-labs/zeroclaw/issues/6548) – Channel runtime command replies bypass Fluent localization (hard-coded English). Minor but affects non-English users.
- [**#6157**](https://github.com/zeroclaw-labs/zeroclaw/issues/6157) – Nextcloud Talk uses wrong bot message API (S3 minor). Marked in-progress.

**Fix PRs in flight:**
- [**#9233**](https://github.com/zeroclaw-labs/zeroclaw/pull/9233) – Prevent Landlock from locking ZeroClaw itself (high risk).
- [**#9197**](https://github.com/zeroclaw-labs/zeroclaw/pull/9197) – Prevent channel supervisor restart loop during shutdown (medium risk).
- [**#9153**](https://github.com/zeroclaw-labs/zeroclaw/pull/9153) – Matrix voice message transcription fix (medium risk, needs author action).
- [**#9075**](https://github.com/zeroclaw-labs/zeroclaw/pull/9075) – Persist model catalog cache on refresh (medium risk).
- [**#9056**](https://github.com/zeroclaw-labs/zeroclaw/pull/9056) – Surface cause-specific provider failure diagnostics (medium risk, needs author action).
- [**#8996**](https://github.com/zeroclaw-labs/zeroclaw/pull/8996), [#8746](https://github.com/zeroclaw-labs/zeroclaw/pull/8746) – Goal self-resume loop and reload preservation (both high risk, large, need author action).

**Security bugs:** [#5775](https://github.com/zeroclaw-labs/zeroclaw/issues/5775) (per-skill permissions), [#5842](https://github.com/zeroclaw-labs/zeroclaw/issues/5842) (warn on dangerous extra_args) remain open.

---

## 6. Feature Requests & Roadmap Signals

The following features are likely to appear in the next release (v0.8.0 or soon after) based on current PR activity and issue priority:

- **Goal system** – A set of large PRs ([#8687](https://github.com/zeroclaw-labs/zeroclaw/pull/8687), [#8688](https://github.com/zeroclaw-labs/zeroclaw/pull/8688), [#8689](https://github.com/zeroclaw-labs/zeroclaw/pull/8689), [#8746](https://github.com/zeroclaw-labs/zeroclaw/pull/8746), [#8996](https://github.com/zeroclaw-labs/zeroclaw/pull/8996)) introduces goal admission, verification, and restart recovery. This is a major capability expected to ship soon.
- **Anthropic server-side fallback** – PRs [#9262](https://github.com/zeroclaw-labs/zeroclaw/pull/9262), [#9265](https://github.com/zeroclaw-labs/zeroclaw/pull/9265), [#9266](https://github.com/zeroclaw-labs/zeroclaw/pull/9266) add opt-in fallback, native refusal typing, and safeguard notices.
- **Provider architecture unification** – [#5937](https://github.com/zeroclaw-labs/zeroclaw/issues/5937) (high priority) is a foundational refactor to reduce duplication and unify reqwest client management.
- **Per-sender RBAC** – [#5982](https://github.com/zeroclaw-labs/zeroclaw/issues/5982) is a highly requested multi-tenant security feature.
- **Node CLI and heartbeat tracking** – [#6390](https://github.com/zeroclaw-labs/zeroclaw/issues/6390), [#6391](https://github.com/zeroclaw-labs/zeroclaw/issues/6391), [#6346](https://github.com/zeroclaw-labs/zeroclaw/issues/6346) – multi-machine fleet management.

Other strong signals: deferred tool schemas ([#5808](https://github.com/zeroclaw-labs/zeroclaw/issues/5808)), quickstart validation ([#6416](https://github.com/zeroclaw-labs/zeroclaw/issues/6416)), per-skill security permissions ([#5775](https://github.com/zeroclaw-labs/zeroclaw/issues/5775)), and LM Studio config ([#6260](https://github.com/zeroclaw-labs/zeroclaw/issues/6260)).

---

## 7. User Feedback Summary

User reports highlight several recurring pain points:

- **Windows support** – Issue [#7462](https://github.com/zeroclaw-labs/zeroclaw/issues/7462) reflects frustration that the test suite is completely broken on Windows. This blocks a significant portion of potential users.
- **1:1 chat ignoring** – [#5674](https://github.com/zeroclaw-labs/zeroclaw/issues/5674) (closed) shows that the “should I reply” gate confused users in private chats. The fix was well-received.
- **Port conflicts** – [#5628](https://github.com/zeroclaw-labs/zeroclaw/issues/5628) (closed) – daemon auto-start causing bind errors for manual runs. Fixed, but indicates systemd integration needs polish.
- **Missing PDF/remote file ingestion** – [#5745](https://github.com/zeroclaw-labs/zeroclaw/issues/5745) – users need to fetch and read PDFs for scholarly research.
- **Non-English localization gaps** – [#6548](https://github.com/zeroclaw-labs/zeroclaw/issues/6548) – even when configured for `zh-CN`, some replies remain hard-coded English.
- **Nextcloud Talk broken** – [#6157](https://github.com/zeroclaw-labs/zeroclaw/issues/6157) – API endpoint mismatch prevents bot responses.
- **Global security permissions** – [#5775](https://github.com/zeroclaw-labs/zeroclaw/issues/5775) – users want per-skill `allowed_commands` instead of global flags.
- **Xcode integration desired** – [#6065](https://github.com/zeroclaw-labs/zeroclaw/issues/6065) – a developer wants to use ZeroClaw as an Xcode agent via MCP bridge.

Overall sentiment is positive for the project’s direction, but there is clear dissatisfaction with Windows support and documentation for multi-tenant deployments.

---

## 8. Backlog Watch

Several important items have remained open for weeks with little maintainer interaction:

### Issues needing maintainer response or prioritization:
- [**#5869**](https://github.com/zeroclaw-labs/zeroclaw/issues/5869) – **RUSTSEC advisory cluster** – Blocked since April 18. Security advisory; could affect users who run cargo deny.
- [**#5775**](https://github.com/zeroclaw-labs/zeroclaw/issues/5775) – **Per-skill security permissions** – Open since April 15, risk high, no PR yet despite strong user demand.
- [**#5842**](https://github.com/zeroclaw-labs/zeroclaw/issues/5842) – **Warn when Codex CLI extra_args weaken sandbox** – Open since April 17.
- [**#5607**](https://github.com/zeroclaw-labs/zeroclaw/issues/5607) – **Deterministic precondition gates for cron jobs** – Open since April 10.
- [**#5745**](https://github.com/zeroclaw-labs/zeroclaw/issues/5745) – **Safe remote PDF fetching** – Open since April 15.
- [**#5836**](https://github.com/zeroclaw-labs/zeroclaw/issues/5836) – **Cooperative cancellation for tool execution** – Open since April 17.
- [**#6065**](https://github.com/zeroclaw-labs/zeroclaw/issues/6065) – **Xcode MCP bridge** – Open since April 24, priority p3 but high risk.
- [**#6250**](https://github.com/zeroclaw-labs/zeroclaw/issues/6250) – **Enforce gateway authentication at route layer** – Priority p1, open since May 1.
- [**#6260**](https://github.com/zeroclaw-labs/zeroclaw/issues/6260) – **Configurable LM Studio server URL** – Open since May 1.
- [**#7468**](https://github.com/zeroclaw-labs/zeroclaw/issues/7468), [#7467](https://github.com/zeroclaw-labs/zeroclaw/issues/7467) – **Zerocode UI improvements** (alias renaming, cursor navigation) – Open since June 10, no maintainer comments.

### PRs stalled with `needs-author-action`:
- [**#8996**](https://github.com/zeroclaw-labs/zeroclaw/pull/8996) – Goal reload preservation (XL, high risk)
- [**#8746**](https://github.com/zeroclaw-labs/zeroclaw/pull/8746) – Goal self-resume loop fix (XL, high risk)
- [**#8689**](https://github.com/zeroclaw-labs/zeroclaw/pull/8689) – Goal command admission (XL, high risk)
- [**#9056**](https://github.com/zeroclaw-labs/zeroclaw/pull/9056) – Provider failure diagnostics (medium risk)
- [**#9197**](https://github.com/zeroclaw-labs/zeroclaw/pull/9197) – Supervisor shutdown fix (medium risk)
- [**#9153**](https://github.com/zeroclaw-labs/zeroclaw/pull/9153) – Matrix transcription fix (medium risk)

These PRs address critical stability and functionality gaps; maintainer review or author revision is needed to prevent feature delay.

---

*Data snapshot taken from GitHub on 2026-07-23, covering the previous 24 hours.*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/boom7sss/agents-radar).*