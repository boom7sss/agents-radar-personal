# OpenClaw Ecosystem Digest 2026-07-28

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-07-28 03:13 UTC

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

# OpenClaw Project Digest — 2026-07-28

## 1. Today’s Overview
The OpenClaw repository continues to see extremely high activity, with 500 issues and 500 pull requests updated in the last 24 hours. 217 PRs were merged or closed, and 249 issues were resolved, reflecting a sustained maintenance cadence. No new releases were published today. The most notable ongoing work includes fixes for a critical gateway memory leak (P0), rework of cron/scheduler internals (RFC 0026), and continued improvements to iOS, Signal, Slack, and Microsoft Teams integrations. Community engagement remains strong, with the long-standing request for Linux/Windows native apps (#75) still generating the most discussion.

## 2. Releases
No new releases were cut on 2026-07-28.

## 3. Project Progress
Today’s merged and closed PRs (217 total) advanced several areas:
- **Performance**: `perf(sessions): watermark-cache derived titles and single-pass list filtering` (#114842) aims to reduce `sessions.list` latency from ~490 ms at 800 sessions.
- **Reliability**: Fixes for `code-mode` concurrent tool execution (#114884), Signal malformed base64 attachments (#114883), Exa search UTF‑8 validation (#111736), and Microsoft Foundry GPT token limits (#114641).
- **Platform Support**: iOS media rendering (#113057) and gateway forgetting (#114083), Android Wear Talk reconnection (#112383), and Microsoft Teams session reset on app removal (#104690).
- **Security & Auth**: GitHub Copilot fine‑grained PAT support (#114282), cron webhook bearer token pinning (#113998), and rejections of altered visible message cursors (#111264) and CSP metadata variants (#111247).
- **Config & Tools**: Reusable tool profiles (#112683) and a new built-in `productivity` tool profile (#112473) were opened; a dependency update group (#113927) was rebased.

*Notable closed bugs* include the `beta.2` SQLite migration blocker (#109867), the heartbeat prompt regression (#40255), and the WhatsApp stall on long model calls (#84569).

## 4. Community Hot Topics
| Issue / PR | Comments | 👍 | Summary |
|---|---|---|---|
| [#75 Linux/Windows Clawdbot Apps](openclaw/openclaw/issues/75) | 115 | 80 | Long-running request for desktop apps beyond macOS/iOS/Android. Still open, needs product decision. |
| [#7707 Memory Trust Tagging by Source](openclaw/openclaw/issues/7707) | 22 | 0 | Proposes tagging memory entries by trust level to prevent poisoning attacks. Stalled with multiple maintainer-review labels. |
| [#91588 Critical: Gateway Memory Leak](openclaw/openclaw/issues/91588) | 21 | 1 | RSS grows from 350 MB to 15.5 GB over days, triggering OOM crashes. **P0** with `clawsweeper:no-new-fix-pr`. |
| [#10659 Masked Secrets for API Keys](openclaw/openclaw/issues/10659) | 15 | 4 | Prevents agents from reading raw secrets. Security-enhancement with linked open PR. |
| [#86519 Telegram duplicate replies after 5.20](openclaw/openclaw/issues/86519) | 14 | 1 | Regression where agent repeats identical reply 2–10×. `P1`, still open after partial fix. |
| [#96857 Tool text outputs degraded to "(see attached image)"](openclaw/openclaw/issues/96857) | 14 | 4 | Normal tool outputs become placeholder images. Closed as stale. |

The community’s strongest signals are **cross‑platform support**, **memory/performance stability**, and **security hardening** (secrets masking, memory trust, denylist).

## 5. Bugs & Stability
**Critical (P0)**
- [#91588 Gateway Memory Leak](openclaw/openclaw/issues/91588) – RSS grows to 15.5 GB over days → OOM crashes. No fix PR open; needs maintainer/product decision.

**High (P1)**
- [#87109 Gateway heap grows to 1073 MB+ at idle on macOS](openclaw/openclaw/issues/87109) – Leads to silent cron failures. Open, no fix.
- [#86519 Telegram duplicate replies (regression)](openclaw/openclaw/issues/86519) – Fix partially applied in 5.22 but not complete.
- [#113306 SQLite snapshot restore lacks crash guarantees](openclaw/openclaw/issues/113306) – `data-loss` impact, open.
- [#113434 Codex session ID reuse exhausts RAM](openclaw/openclaw/issues/113434) – `crash-loop`, open, test on Windows.
- [#94251 Ollama remote streaming not consumed](openclaw/openclaw/issues/94251) – `model_call:started` never progresses. Linked PR open.
- [#87756 Regression: Lobster workflow hangs on nested /tools/invoke](openclaw/openclaw/issues/87756) – Open, source-repro provided.
- [#94939 6.x migration leaves conversation-store SQLite empty](openclaw/openclaw/issues/94939) – Orphans references, breaks Teams. Stale, open.
- [#85844 Auto-update leaves stale hashed bundle imports](openclaw/openclaw/issues/85844) – Open, needs product decision.
- [#113323 LLM idle timeout aborts reasoning-model streaming](openclaw/openclaw/issues/113323) – Open, needs live repro.

**Medium/Low (P2/P3)**
- [#67419 Session context bloat (20–30% token waste)](openclaw/openclaw/issues/67419) – Open, feature request.
- [#90414 agentmemory__memory_search returns “index metadata is missing”](openclaw/openclaw/issues/90414) – P2, open.
- [#95610 Prompt-cache churn on OpenAI models](openclaw/openclaw/issues/95610) – P2, open.
- [#110065 `compaction.enabled` schema mismatch](openclaw/openclaw/issues/110065) – Closed as fixed.

Several high‑severity bugs lack a corresponding fix PR (`clawsweeper:no-new-fix-pr`), suggesting the team is still triaging or awaiting product decisions.

## 6. Feature Requests & Roadmap Signals
Top user‑requested features by engagement and strategic alignment:
- **Cross‑platform desktop apps** (#75) – most popular by far; likely a 2026 H2 priority.
- **Memory trust tagging** (#7707) – security essential for multi-source memory.
- **Masked secrets** (#10659) – complements exec‑approval denylist (#6615) and filesystem sandboxing (#7722).
- **Dynamic model discovery** (#10687) – requested for fast‑moving providers like OpenRouter.
- **Skill Permission Manifest** (#12219) – addresses trust in third‑party skills.
- **Model context‑limit fallback** (#9986) – currently only fails on API errors.
- **Expose OpenRouter cost to runtime** (#9016) – operational transparency.
- **TUI accessibility** (#9637) – disable emojis/symbols for screen readers.

**Likely inclusions in next version (2026.8.x?)**: The `perf(sessions)` PR and the scheduler‑to‑automations rename (RFC 0026, #114852) are in active review. The `productivity` tool profile (#112473) and reusable tool profiles (#112683) suggest a config‑as‑code direction. The masked secrets feature already has a linked open PR.

## 7. User Feedback Summary
- **Pain points**:
  - Memory leaks (gateway heap grows uncontrollably) causing silent failures and OOM crashes (#91588, #87109).
  - Duplicate replies on Telegram after minor updates (#86519) eroding trust in regression testing.
  - Lack of native Windows/Linux apps (#75) – a persistent blocker for many users.
  - Stale approvals after gateway restart (#64664) creating confusing UX.
  - Cron jobs falsely marked as errors when they intentionally produce no output (#76159, #81514).
- **Satisfaction signals**:
  - Quick turnaround on beta migration blockers (#109867 fixed same day).
  - iOS and Android fixes being actively contributed (4 PRs today).
  - Community members filing detailed, reproducible bug reports with environment info.
- **Unmet needs**: Accessibility improvements (TUI emoji disable), WhatsApp stickers, and a reliable `/models test-fallback` command remain open for months.

## 8. Backlog Watch
Long‑standing items that have not received maintainer attention or a fix PR:

| Issue | Created | Status | Notes |
|---|---|---|---|
| [#75 Linux/Windows Clawdbot Apps](openclaw/openclaw/issues/75) | 2026‑01‑01 | Open | Super‑popular but stuck with multiple `clawsweeper` labels including `needs-product-decision`. |
| [#7707 Memory Trust Tagging](openclaw/openclaw/issues/7707) | 2026‑02‑03 | Open | `clawsweeper:needs-maintainer-review`, no fix PR in 6 months. |
| [#7722 Filesystem Sandboxing Config](openclaw/openclaw/issues/7722) | 2026‑02‑03 | Open | Same pattern – needs live repro and product decision. |
| [#6615 Denylist for exec-approvals](openclaw/openclaw/issues/6615) | 2026‑02‑01 | Open | Linked PR open but not merged; still `needs-security-review`. |
| [#8299 Suppress sub-agent announce](openclaw/openclaw/issues/8299) | 2026‑02‑03 | Open | P2 with live repro missing; no assignee. |
| [#9637 TUI accessibility](openclaw/openclaw/issues/9637) | 2026‑02‑05 | Open | No update since creation. |
| [#67419 Session context bloat](openclaw/openclaw/issues/67419) | 2026‑04‑15 | Open | High token waste; `needs-maintainer-review`. |

These items represent a backlog of community‑raised improvements that require architectural decisions or additional maintainer capacity to move forward. The `clawsweeper:no-new-fix-pr` label on many of them indicates the project is aware but resource‑constrained.

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: Personal AI Assistant Open-Source Ecosystem

## 2026-07-28

---

## 1. Ecosystem Overview

The personal AI assistant open-source landscape is maturing rapidly, with a clear bifurcation between **heavyweight enterprise-capable frameworks** (OpenClaw, IronClaw, ZeroClaw) and **lightweight, community-oriented agents** (NanoBot, NanoClaw, PicoClaw). The ecosystem is converging on shared challenges: memory management at scale, cross-platform support, security hardening, and channel integration reliability. Community expectations are rising—users demand production-grade stability from projects that were experimental six months ago. The most successful projects combine rapid bug-fix cycles with clear architectural roadmaps, while projects without active maintainer engagement are falling behind despite strong community interest.

---

## 2. Activity Comparison

| Project | Issues Updated (24h) | Issues Closed | PRs Updated (24h) | PRs Merged/Closed | Release Today | Health Score* |
|---|---|---|---|---|---|---|
| **OpenClaw** | 500 | 249 | 500 | 217 | No | **7/10** |
| **NanoBot** | 63 | 62 | 34 | 21 | No | **9/10** |
| **Hermes Agent** | 50 | 1 | 50 | 4 | No | **5/10** |
| **PicoClaw** | 6 | 0 | 6 | 0 | No | **4/10** |
| **NanoClaw** | 0 | 0 | 10 | 1 | No | **6/10** |
| **NullClaw** | 0 | 0 | 1 | 0 | No | **3/10** |
| **IronClaw** | 38 | 4 | 50 | 19 | No | **6/10** |
| **LobsterAI** | 9 | 0 | 9 | 6 | No | **6/10** |
| **TinyClaw** | 0 | 0 | 0 | 0 | No | **2/10** |
| **Moltis** | 0 | 0 | 5 | 0 | No | **5/10** |
| **CoPaw** | 50 | 33 | 48 | 13 | No | **8/10** |
| **ZeptoClaw** | 0 | 0 | 0 | 0 | No | **2/10** |
| **ZeroClaw** | 48 | 4 | 50 | 8 | No | **5/10** |

*Health Score = composite of closure velocity, bug severity distribution, community engagement, and maintainer responsiveness (1–10 scale)

**Tier Breakdown:**
- **High Velocity (>50 PRs/day):** OpenClaw, Hermes Agent, ZeroClaw, IronClaw, CoPaw
- **Efficient (&gt;80% issue closure rate):** NanoBot (98%), CoPaw (66%), OpenClaw (50%)
- **Stalled/Stable (&lt;10 PRs/day):** PicoClaw, NanoClaw, NullClaw, LobsterAI, Moltis, TinyClaw, ZeptoClaw

---

## 3. OpenClaw's Position

**Advantages over Peers:**
- **Scale**: 500 issues/500 PRs daily—4× the activity of the next most active project (IronClaw/ZeroClaw at ~50). Community is 10–20× larger than any single competitor.
- **Maturity**: Addresses complex problems others haven't touched (memory trust tagging, cron-to-automation rename, watermark-cached session listings). The RFC process (RFC 0026) demonstrates structured governance.
- **Ecosystem Depth**: 217 PRs merged daily vs. ~13–21 for peers. The integration surface (Signal, Slack, Teams, Telegram, iOS, Android) is unmatched.

**Technical Approach Differences:**
- OpenClaw uses a **gateway-centric architecture**—the gateway is a stateful process managing sessions, memory, and tool execution. This contrasts with NanoBot's lighter daemon model and ZeroClaw's daemon-owned control plane.
- **Session performance focus**: The `perf(sessions): watermark-cache` PR targeting 490ms→lower latency at 800 sessions is unique—no other project is optimizing at this scale.
- **SDK-first**: Tool profiles (#112683) and reusable config-as-code indicate a platform play, while peers (PicoClaw, NanoClaw) treat configuration as manual YAML/JSON.

**Community Size Comparison:**
- OpenClaw's popular issues (#75 Linux/Windows apps: 115 comments, 80 👍) exceed the total daily activity of most other projects. The project has **more discussion on a single feature request** than NullClaw, TinyClaw, ZeptoClaw, and Moltis combined.

**Weaknesses:**
- Persistent P0/P1 memory leaks (#91588, #87109) with no fix PRs—a reliability gap that NanoBot avoids entirely.
- Feature bloat risk: 500 daily updates creates merge chaos; PR #114842 alone touches 800-session watermark caching, a problem most projects don't have yet.
- Long-stalled community needs (#75, #7707) despite high activity suggest bottlenecked product decisions.

---

## 4. Shared Technical Focus Areas

The following requirements appear across **multiple projects**, indicating ecosystem-wide priorities:

| Need | Affected Projects | Evidence |
|---|---|---|
| **Memory/Context Management** | OpenClaw, NanoBot, CoPaw, ZeroClaw | OpenClaw: #7707 trust tagging, #67419 context bloat; NanoBot: #1174 consolidation failures; CoPaw: #4921 context compression loops; ZeroClaw: #8983 category-scoped read |
| **Cross-Platform Desktop Apps** | OpenClaw, PicoClaw, ZeroClaw | OpenClaw #75 (80 👍, 115 comments); PicoClaw: no Windows/Linux launcher; ZeroClaw: #9182 PowerShell support pending |
| **Channel Integration Reliability** | OpenClaw, NanoBot, Hermes Agent, CoPaw, ZeroClaw | OpenClaw: #86519 Telegram duplicates; NanoBot: #3123 cron reply blocks; Hermes: WeCom duplicates; CoPaw: Feishu bot silence; ZeroClaw: #9393 Bluesky auth gaps |
| **Secrets/Key Security** | OpenClaw, ZeroClaw, Moltis, CoPaw | OpenClaw: #10659 masked secrets; ZeroClaw: #9386 Gemini key leak in chat; Moltis: #1170 `/sh` privilege escalation; CoPaw: #5090 tool bypass via Python |
| **Sandboxing / Tool Safety** | OpenClaw, ZeroClaw, CoPaw | OpenClaw: #7722 filesystem sandboxing; ZeroClaw: #8279 delegation bypass; CoPaw: #5090 Python deletes despite rm block |
| **Configuration Flexibility** | NanoBot, Hermes Agent, LobsterAI, NanoClaw | NanoBot: multi-custom providers; Hermes: #71298 CLI/GUI mismatch; LobsterAI: #2396 exec shell flavor; NanoClaw: #3144 webhook bind |
| **Localization / i18n** | OpenClaw, ZeroClaw, PicoClaw | OpenClaw: accessibility #9637; ZeroClaw: #9363/PR #9377 Chinese UI; PicoClaw: #3272 Japanese UI |

---

## 5. Differentiation Analysis

| Dimension | OpenClaw | NanoBot | IronClaw | CoPaw | ZeroClaw |
|---|---|---|---|---|---|
| **Primary Target User** | Power users, developers | Hobbyists, tinkerers | Enterprise teams | Chinese enterprise | Security-sensitive ops |
| **Architecture** | Gateway-centric, stateful SDK | Daemon + WebUI, stateless design | Reborn monolith → modular | Plugin-based on QwenPaw | Daemon-owned control plane |
| **Deployment Model** | macOS, iOS, self-hosted | Lightweight, no desktop requirement | Self-hosted, hosted | Desktop, Docker, cloud | Self-hosted, CLI-heavy |
| **Channel Coverage** | 8+ (Signal, Slack, Teams, Telegram, iOS, Android, Discord, WhatsApp) | ~6 (WebUI, Discord, Telegram, CLI, Feishu) | Telegram, Slack, WebUI, OAuth | Feishu, DingTalk, WeChat Work | Bluesky, Reddit, Telegram, WebUI |
| **Security Posture** | Moderate (secrets masking, exec denylist) | Low (limited sandboxing) | High (sandbox, credential staging) | Medium (tool bypass fix in progress) | High (active audit, S0 tracking) |
| **Innovation Velocity** | Very high (RFC-driven, 217 merges/day) | High (62 issues closed/day) | Very high (post-launch stabilization) | High (33 issues closed/day) | High (security audit wave) |
| **Risk Profile** | Memory leaks, feature bloat | Extremely stable, lean | Launch regression risk | Channel reliability gaps | Security vulnerabilities |

**Key Architectural Contrasts:**
- **OpenClaw** is building an **agent operating system**—session lifecycle, cron scheduling, gateway memory—while **NanoBot** is building a **React-friendly agent daemon** with minimal state.
- **IronClaw** is the only project undergoing a **ground-up rebuild** (v1.0.0), creating migration friction but long-term architectural coherence.
- **CoPaw** is **Qwen-specific**, deeply integrating with Alibaba's model ecosystem, while every other project is model-agnostic.
- **ZeroClaw** is the **most security-conscious**, with formal audit findings, S0/S1 severity tracking, and a dedicated security queue.

---

## 6. Community Momentum & Maturity

**Tier 1: Rapidly Iterating (Production-Grade Aspirations)**
| Project | Score | Key Signals |
|---|---|---|
| **NanoBot** | **9/10** | 98% issue closure rate; 21 PRs merged/day; zero critical bugs open; clear v0.2 roadmap |
| **CoPaw** | **8/10** | 66% issue closure; 13 PRs merged; strong Chinese ecosystem; v2.0.1 desktop app |
| **OpenClaw** | **7/10** | Highest absolute activity; structured RFC process; but critical memory leaks unresolved |

**Tier 2: Stabilizing (Post-Launch or Maintenance)**
| Project | Score | Key Signals |
|---|---|---|
| **IronClaw** | **6/10** | v1.0.0 launched yesterday; 19 merges; but 3 P1 launch blockers with no fix |
| **NanoClaw** | **6/10** | Moderate activity; 9 open PRs; steady but not rapid |
| **LobsterAI** | **6/10** | 6 merges; critical data corruption bug (#2393) unfixed |
| **ZeroClaw** | **5/10** | High activity but security crisis mode; 44 open issues, many S1/S2 |

**Tier 3: Low Momentum (Require Maintainer Attention)**
| Project | Score | Key Signals |
|---|---|---|
| **Hermes Agent** | **5/10** | 50 PRs but only 4 merged; 49 open issues; noisy community |
| **Moltis** | **5/10** | 5 open PRs, 0 merged; no user engagement in 24h |
| **PicoClaw** | **4/10** | 0 PRs merged; critical MCP hang bug unfixed; growing backlog |
| **NullClaw** | **3/10** | 1 Dependabot PR, 0 community engagement |
| **TinyClaw / ZeptoClaw** | **2/10** | Zero activity; effectively dormant |

**Key Observation:** NanoBot is **the most efficient project per unit of activity**—62 issues closed from 63 updated (98% closure). OpenClaw has 50% closure (249/500), suggesting it processes more churn but may be overwhelming maintainers with volume.

---

## 7. Trend Signals

### Cross-Project Trends Extracted from Community Feedback

**1. Memory is the New Frontier**
Every major project is grappling with memory as a reliability and performance bottleneck. OpenClaw's context bloat (#67419) and trust tagging (#7707), NanoBot's consolidation failures (#1174), and CoPaw's compression loops (#4921) all point to a **gap in scalable, trustworthy memory architectures**. Expect a wave of new memory backends (Moltis #1158 Zvec, ZeroClaw #9463 WASM plugins) in Q3 2026.

**2. Security Hardening is Non-Negotiable**
The ZeroClaw security audit identified systemic vulnerabilities in secrets handling, channel authorization, and tool sandboxing—issues that are latent in every project. OpenClaw (#10659 masked secrets), Moltis (#1170 operators list), and CoPaw (#5090 Python bypass) are all reacting. **Expect industry-wide adoption of per-tool allowlists, credential staging, and audit trails** by year-end.

**3. Cross-Platform Desktop is the Unmet Demand**
OpenClaw's #75 (80 👍, 115 comments) dwarfs every other feature request in the ecosystem. No project has solved this. PicoClaw users want systemd integration (#3276). ZeroClaw has PowerShell support pending (#9182). **The team that delivers first-class Linux/Windows native apps with reliable notifications will gain significant market share.**

**4. Channel Integration Reliability is a Hygiene Factor**
Telegram duplicates (OpenClaw #86519), Feishu bot silence (CoPaw #5757), WeCom missing messages (Hermes #14061), and Bluesky auth gaps (ZeroClaw #9393) all indicate that **channel reliability is the top source of user frustration**. Users expect uniform behavior across all messaging platforms—this is table stakes, not differentiation.

**5. Context Management Architecture is Diverging**
Three approaches are emerging:
- **Watermark caching** (OpenClaw)—optimistic session list caching for low latency
- **Snapshot/restore with crash guarantees** (OpenClaw #113306, IronClaw #6724 provider contracts)
- **Lazy skill loading** (Hermes #2045, NanoBot extension platform #5098)

The winner will be the architecture that balances **low latency with crash safety**—right now, no project has both.

**6. Local Model Parity is Still Missing**
NanoBot users report consistent frustration with Ollama/LM Studio setups (#2570, #1590). Hermes users want on-device wake words (#70509). OpenClaw has Ollama streaming bugs (#94251). The ecosystem **over-indexes on cloud API integration** and under-delivers on local-first experiences.

**7. Developer Experience is Becoming Table Stakes**
NanoBot's README improvements (#5123), OpenClaw's tool profiles (#112683), and ZeroClaw's i18n PR (#9377) all signal that **contributor onboarding and documentation quality are becoming competitive differentiators**. The projects that invest in DX will attract more community contributions.

---

## Summary for Technical Decision-Makers

| If you need... | Choose... | Because... |
|---|---|---|
| **Maximum community size & integration breadth** | OpenClaw | 10× the ecosystem of any competitor; 217 merges/day |
| **Lights-out stability & minimal maintenance** | NanoBot | 98% issue closure; zero critical bugs; lean, fast |
| **Enterprise-grade security & audit trails** | ZeroClaw | Formal security audits; S0/S1 tracking; sandbox infrastructure |
| **Chinese market & Qwen ecosystem** | CoPaw | Native Feishu/DingTalk/WeChat Work; deep Alibaba integration |
| **Production reliability post-migration** | IronClaw | Ground-up architecture rebuild; hermetic testing platform |
| **Lightweight, embeddable agent** | Moltis | ACP protocol support; low resource footprint |

**The ecosystem is healthy but fragmented.** No single project dominates across all dimensions—OpenClaw has the community, NanoBot has the efficiency, ZeroClaw has the security posture. The projects that close the gap between ambition and reliability (fixing memory leaks, delivering cross-platform apps, hardening channel integrations) will define the next phase of this market.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-07-28

## 1. Today's Overview
NanoBot saw another day of high-velocity development and community engagement. Over the last 24 hours, **63 issues** were updated (62 closed, 1 still open) and **34 pull requests** were touched (21 merged or closed, 13 open). No new releases were published. The project remains extremely responsive: almost every reported bug or feature request from the past weeks has been closed, while core refactors, WebUI improvements, and new channel integrations moved forward through merged PRs. The single open issue suggests a very lean backlog, though several important feature PRs are still under review.

## 2. Releases
**None** – no new versions of NanoBot were cut today.

## 3. Project Progress
The following PRs were **merged or closed** today, representing substantial work across the stack:

- **[#5127 – refactor(core): remove redundant runtime scaffolding](https://github.com/HKUDS/nanobot/pull/5127)** – Simplifies prompt construction, makes runtime ownership explicit, removes dead code like no‑op microcompaction policy and duplicate MEMORY.md reads.
- **[#5124 – fix(gitstore): return real git object ids instead of hex-of-hex](https://github.com/HKUDS/nanobot/pull/5124)** – Corrects double‑encoding of commit hashes that could corrupt memory store references. (Supersedes #5126, which remains open with a similar fix.)
- **[#5123 – docs: improve README landing page](https://github.com/HKUDS/nanobot/pull/5123)** – Adds a clear H1, GitHub star CTA, concrete use‑case labels, and actionable contribution paths.
- **[#5121 – fix(webui): prevent composer resize scroll jitter](https://github.com/HKUDS/nanobot/pull/5121)** – Stops auto‑scroll from fighting user intent on textarea resize.
- **[#5119 – fix(webui): soften model selector emphasis](https://github.com/HKUDS/nanobot/pull/5119)** – Polishes label weight and opacity, adds CSS regression tests.
- **[#5114 – fix(memory): preserve Dream input integrity](https://github.com/HKUDS/nanobot/pull/5114)** – Ensures Dream’s `write_file` tool only targets canonical memory files and never overwrites history or skill files.
- **[#5113 – fix(webui): stabilize repeated model preset rows](https://github.com/HKUDS/nanobot/pull/5113)** – React key fix to prevent stale/duplicated rows when presets share the same fallback.
- **[#5077 – feat(webui): switch model presets from the composer](https://github.com/HKUDS/nanobot/pull/5077)** – Adds long‑press drag to cycle presets, with mobile‑safe motion.
- **[#1683 – feat: add LLM_LOGGING env var for request/response debug logging](https://github.com/HKUDS/nanobot/pull/1683)** – Merged after months of waiting; enables opt‑in verbose logging via `LLM_LOGGING=true`.

These merges reflect a focus on **stability (gitstore, memory), WebUI polish, and developer tooling (logging)**.

## 4. Community Hot Topics
The most discussed issues (all closed today) reveal real user needs:

- **[#1991 – “希望nanobot可以支持多个自定义custom”](https://github.com/HKUDS/nanobot/issues/1991) (9 comments)** – Request to support multiple custom model providers that can be switched freely. This is a common pain for users running different models for different tasks.
- **[#3123 – “Problem with cron/scheduled task message send”](https://github.com/HKUDS/nanobot/issues/3123) (8 comments)** – Cron jobs send messages in a session the user cannot reply to or ask follow‑ups, breaking conversational flow.
- **[#2570 – “local ollama config – getting 404 page not found”](https://github.com/HKUDS/nanobot/issues/2570) (7 comments)** – Ollama users face 404 errors and port binding issues; detailed user debugging showed the vllm provider misroutes model names.
- **[#2329 – “custom model provider did not work with channels but ok on cli”](https://github.com/HKUDS/nanobot/issues/2329) (6 comments)** – Cross‑channel inconsistency when using custom providers.
- **[#1174 – “memory consolidation can take long or even fail”](https://github.com/HKUDS/nanobot/issues/1174) (5 comments, 2 👍)** – Local models struggle with consolidation; user wants the ability to start a new session without forcing memory sync.

All these issues have been resolved (closed today), indicating the maintainers are actively listening and shipping fixes.

## 5. Bugs & Stability
Several higher‑severity bugs were either fixed by merged PRs today or remain under review:

| Issue / PR | Severity | Description | Status |
|------------|----------|-------------|--------|
| [#4792](https://github.com/HKUDS/nanobot/issues/4792) – `/stop` discards pending queue messages | **Critical** – permanent message loss. Fix not yet merged. | `CMD_stop` drains the queue but never re‑publishes messages. | Open issue (closed 2026-07-27) |
| [#4805](https://github.com/HKUDS/nanobot/issues/4805) – `suppress(Exception)` swallows tool validation errors | **High** – tool preparation errors silently ignored, leading to unexpected behavior. | Open issue | Closed (2026-07-27) |
| [#5124](https://github.com/HKUDS/nanobot/pull/5124) – gitstore hex‑of‑hex double encoding | **High** – memory references may point to wrong commits. | Merged fix | Fixed |
| [#5120](https://github.com/HKUDS/nanobot/pull/5120) – session consolidation drops uploaded media paths | **High** – file paths stored only in `media[]` are lost during consolidation. | Open PR | Under review |
| [#5117](https://github.com/HKUDS/nanobot/pull/5117) – invalid idle‑compaction timestamps crash session listing | **Medium** – malformed timestamps break session manager. | Open PR | Under review |

The project’s bug‑fixing pace is strong, though the `/stop` message loss issue (#4792) may still be unaddressed in code (issue closed today but no fix PR merged).

## 6. Feature Requests & Roadmap Signals
Active feature PRs and recently closed issues hint at what’s coming next:

- **Extension Platform** – [#5098](https://github.com/HKUDS/nanobot/pull/5098) (open) introduces a native Python extension system that reuses existing tool/command/hook registries, plugging a gap between skills and MCP.
- **LINE Channel** – [#5115](https://github.com/HKUDS/nanobot/pull/5115) (open) adds the popular Japanese/Taiwan/Thailand messaging API, with HMAC verification and file/image support.
- **Dream Runs in WebUI** – [#5112](https://github.com/HKUDS/nanobot/pull/5112) (open) allows viewing Dream agent sessions as read‑only threads, including reasoning, tool calls, and file edits.
- **Host Integration SDK** – [#5111](https://github.com/HKUDS/nanobot/pull/5111) (open) exposes per‑turn context providers and runtime events, enabling deeper embedding in external applications.
- **Marketplace Skill Management** – [#5116](https://github.com/HKUDS/nanobot/pull/5116) (open) brings a Discover view and one‑click install from skills.sh.
- **Multiple Custom Model Providers** – frequently requested (#1991) and now closed; likely to appear in a future config refactor.
- **Disablable Emoji** (#2747) and **tool/memory toggles** (#1881) – both closed, indicating user‑configurability of system prompt and agent capabilities may land soon.

These signals point to a **v0.2‑level release** focusing on ecosystem reach (LINE, skill marketplace), SDK flexibility, and UX polish.

## 7. User Feedback Summary
Real user pain points and use cases extracted from today’s issue updates:

- **Local model frustration** – Users continue to struggle with Ollama, LM Studio, and other local setups (wrong model names, missing API keys, 404 errors). Multiple issues (#2570, #1590, #1947, #1478) document detailed workarounds, suggesting documentation improvements are still needed.
- **Cron job inflexibility** – One‑way messages without reply capability (#3123) and cross‑workspace cron leaks (#2358) show the scheduler needs rethinking for multi‑tenant conversational use.
- **Multi‑channel inconsistency** – Custom providers work on CLI but fail on channels (#2329), Feishu doesn’t show progress (#3166), Discord slash commands conflict (#1315). Users expect uniform behavior.
- **Memory and skill management** – Local models struggle with memory consolidation (#1174), skills are not shared between agent and gateway (#1328), and Dream could overwrite user skills (#4667). Recent PRs (#5114) address some of these.
- **Proactive messaging** – WebSocket cannot replace webhooks for server‑initiated messages (#3559), and API‑to‑channel push fails silently (#3074). This is a key multi‑tenant enterprise requirement.

Overall sentiment: **highly engaged but expecting more polish on local deployments and cross‑channel consistency.** The quick closure of issues and steady stream of fixes keeps satisfaction positive.

## 8. Backlog Watch
Most issues and PRs are actively maintained. A few items worth monitoring:

- **[#4667 – fix: protect user skills from dream writes](https://github.com/HKUDS/nanobot/pull/4667)** (open since July 2, updated today) – Security‑sensitive guard is still open. With Dream WebUI integration (#5112) progressing, this becomes more important.
- **Repeated historical PRs** – Some old PRs (e.g., #1683, closed today) took months to merge. The single open issue (# something not shown?) may be a leftover from earlier waves, but given the 62 closed today, the maintainers appear to be clearing the backlog aggressively.

**No critical unanswered questions remain**; the project’s triage and merge velocity is excellent.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

**Hermes Agent Project Digest – 2026-07-28**

**1. Today’s Overview**  
Hermes Agent saw extremely high activity on 2026-07-28, with **50 issues and 50 pull requests updated in the last 24 hours**. The project remains in an intense development phase: of those updated issues, 49 remain open and only 1 was closed; PRs follow a similar pattern (46 open, 4 merged/closed). No new releases were published today. The volume of open bug reports and feature requests indicates a vibrant but heavily worked community, with many users actively troubleshooting regressions and advocating for configurable defaults.

**2. Releases**  
No new releases today.

**3. Project Progress**  
Four pull requests were closed or merged today. The only visible closed PR from the top-20 list is:  
- **PR #73068** ([fix(desktop): anchor the inline image download button to the image, not the block](https://github.com/NousResearch/hermes-agent/pull/73068)) – a desktop UI fix preventing misaligned download buttons on inline images.  

Additionally, one issue was closed:  
- **Issue #73042** ([context-usage statusbar item toggle broken when hidden by default (deadlock)](https://github.com/NousResearch/hermes-agent/issues/73042)) – a deadlock caused by a statusbar item that could not be re-enabled after being hidden. The fix landed via PR #72442 and the issue was closed today.

The other three merged/closed PRs (not shown in the top-20 list) likely include bug fixes and small enhancements across the codebase, but their details are unavailable from the provided data.

**4. Community Hot Topics**  
The most active discussions today revolve around stability and configuration mismatches:

- **#71226** – *Desktop boot loop* (10 comments) – Windows 11 users report the app fails to start with a gateway connection error after a recent update. The thread suggests WebSocket reconnection and renderer-initiated reset loops. [Link](https://github.com/NousResearch/hermes-agent/issues/71226)
- **#71298** – *providers vs custom_providers dual storage causes CLI/GUI mismatch* (8 comments) – Users encounter profile versioning issues due to two independently stored provider sections in `config.yaml`. This impacts both CLI commands and the desktop GUI Settings page. [Link](https://github.com/NousResearch/hermes-agent/issues/71298)
- **#17565** – *Configurable Temperature Parameter* (7 comments, 12 👍) – A long-standing feature request (since April) demanding user-facing LLM temperature control to mitigate hallucination. It remains a top upvoted issue. [Link](https://github.com/NousResearch/hermes-agent/issues/17565)
- **#14091** – *Environment Variables Not Passed Through to SSH Sessions* (6 comments) – A bug affecting skills that rely on `required_environment_variables` when using SSH. [Link](https://github.com/NousResearch/hermes-agent/issues/14091)

The underlying needs are clear: **reliability on startup**, **consistent configuration across UI/CLI**, and **greater user control over model inference parameters**.

**5. Bugs & Stability**  
Today’s data reveals multiple regressions and stability risks, ranked by severity:

- **P1** – *Gateway sessions lack activity watchdog* – PR #73031 re-lands a session watchdog to detect silent agent stalls, a critical fix that was previously reverted. [PR link](https://github.com/NousResearch/hermes-agent/pull/73031)
- **P2** – Several high-impact bugs:
  - *Desktop boot loop* (#71226) – No fix PR yet, but actively discussed.
  - *Kanban workers inherit dispatcher terminal settings* (#66541) – Breaks profile boundaries in multi-profile setups.
  - *Anthropic OAuth usage scaling error* (#58226) – Shows 100% usage when real usage is <1%.
  - *“Gateway online” notice never fires after SIGTERM restart* (#66087) – Users miss important startup notifications.
- **P3** – Numerous smaller bugs, including:
  - *Memory tool load_from_disk doesn’t validate char limit* (#10877)
  - *Inline edit submits during IME composition* (#40544)
  - *Honcho dependency install fails with permission denied* (#72981)

Fix PRs exist for some P1/P2 items, notably the watchdog PR #73031 and a container repair PR #73072 for TTS. The closed issue #73042 indicates the team is actively closing low-hanging bugs.

**6. Feature Requests & Roadmap Signals**  
User-requested features center on **configuration flexibility** and **on-device capabilities**:

- **Temperature parameter** (#17565, 12 👍) – Likely to land soon given the strong upvote count and maintainer activity.
- **Lazy skill loading** (#2045, 3 👍) – Would reduce system prompt bloat; tagged `needs-decision`, suggesting the team is considering it for a future release.
- **Default plugin for no-API-key web_extract** (#72364) – Community desires a free, local alternative like `ddgs` for web extraction.
- **On-device wake words with multi-profile voice routing** – PR #70509 proposes a complete wake-word system for CLI/TUI/desktop, indicating a roadmap focus on voice interaction.
- **Snapshotted channel context files** – PR #50680 adds per-channel context mirroring, likely aimed at improving memory in collaborative sessions.

Given the high volume of PRs in voice and configuration areas, **v0.20 or the next minor release will likely include temperature configurability, lazy skill loading, and the first iteration of on-device wake words.**

**7. User Feedback Summary**  
Real pain points expressed in today’s top issues:

- **“Hermes slacks off”** (#10023) – Users must repeatedly type “continue” to keep the agent working; this indicates a session continuation design that frustrates productivity.
- **Desktop boot loop on Windows** (#71226) – A critical blocker for new/upgrading users.
- **CLI/GUI provider configuration mismatch** (#71298) – Confusion and version drift across interfaces.
- **WeCom duplicate messages and stale req_id** (#14061, #52820) – Integration quality issues on Enterprise WeChat.
- **SSH session environment variable pass-through failure** (#14091) – Hinders skills that depend on secure credentials.

Overall sentiment is **frustrated-but-engaged**: users actively file bugs and suggest improvements, but several regressions and missing features (especially the temperature parameter) cause recurring dissatisfaction.

**8. Backlog Watch**  
Several important issues have gone unanswered for months and need maintainer attention:

- **#2045** (March 2026) – *Lazy skill loading* – Tagged `needs-decision`; no PR or official stance yet.
- **#10581** (April 2026) – *Home-channel auto-prompt only checks env var* – A simple config fallback bug that has 3 comments but no resolution.
- **#10877** (April 2026) – *Memory char limit not validated on load* – A data-integrity risk for users who manually edit memory files.
- **#14091** (April 2026) – *SSH environment variables bug* – Stalls many skill-based workflows.
- **#14061** (April 2026) – *WeCom timeout fallback causing duplicates* – Affects users on a major platform.
- **#17565** (April 2026) – *Temperature configurability* – Despite 12 👍, no PR is linked; maintainers should prioritize.

The backlog is manageable in size but contains recurring themes of **configuration inconsistency**, **missing defaults**, and **platform-specific edge cases** that erode user trust.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest – 2026-07-28

**Generated from GitHub activity on `sipeed/picoclaw`**

---

## 1. Today's Overview

Activity on July 28 is moderate but concentrated on open issues and pull requests. No new releases or merged PRs occurred in the last 24 hours. The project shows sustained community engagement with six open issues updated (all still active) and six open PRs updated (none closed or merged). A new critical bug (#3300) was filed today highlighting a missing `read_file` tool that can cause deadlocks. Several older feature contributions (Japanese localisation, DashScope TTS, model fallback chains) remain open, indicating a backlog that may need maintainer prioritisation. Overall project health appears stable but with a growing queue of unmerged enhancements and unaddressed stability concerns.

---

## 2. Releases

No new releases in the last 24 hours.  
*Latest known release: v0.3.1 (referenced in issue #3281). No migration notes available.*

---

## 3. Project Progress

No pull requests were merged or closed today. All six open PRs continue to mature, but no code has been integrated. Notable open PRs that represent ongoing development:

- **#3273** – *feat(webui): add Japanese (ja) localization* – Full 968-line translation complete, pending review.  
- **#3270** – *feat: add DashScope TTS provider and WeChat audio file sending* – New provider and integration for Chinese ecosystem.  
- **#3200** – *feat(models): add configurable default fallback chain* – Enables user-defined model fallback chains via WebUI.  
- **#3271** – *chore(providers): update default model names to 2026-07 latest* – Refreshes model IDs across 9 providers.  
- **#3259** – *Update PicoClaw description for parallelization* – Documentation improvement.  
- **#1951** – *chore: move installation scripts from docs repo to here* – Long-open infrastructure task.

*Links:*  
[PR #3273](https://github.com/sipeed/picoclaw/pull/3273) | [PR #3270](https://github.com/sipeed/picoclaw/pull/3270) | [PR #3200](https://github.com/sipeed/picoclaw/pull/3200) | [PR #3271](https://github.com/sipeed/picoclaw/pull/3271) | [PR #3259](https://github.com/sipeed/picoclaw/pull/3259) | [PR #1951](https://github.com/sipeed/picoclaw/pull/1951)

---

## 4. Community Hot Topics

The most active issues and PRs (based on comments – each has 1 comment; no large discussions) are:

- **#3300** [Bug] *工具集缺失 read_file 导致每次对话死锁*  
  Filed today, describes a workaround deadlock when AI is instructed to read `RULES.md` but the tool is missing.  
  *Underlying need*: Users require a flexible `read_file` tool to inject custom rule files beyond `AGENT.md`.  
  [Issue #3300](https://github.com/sipeed/picoclaw/issues/3300)

- **#3281** [BUG] *Web UI chat input is very laggy when history has a little bit long*  
  Reported with v0.3.1. Performance degradation degrades user experience for sessions with longer histories. Likely a frontend rendering issue.  
  [Issue #3281](https://github.com/sipeed/picoclaw/issues/3281)

- **#3269** [BUG] *If the MCP server connection fails, the agent loop will hang*  
  Critical: entire chat UI stops responding. Affects reliability of external tool integrations.  
  [Issue #3269](https://github.com/sipeed/picoclaw/issues/3269)

- **#3276** [Feature] *Launcher: support/detect an externally-managed gateway (systemd)*  
  Headless deployment friction: launcher assumes ownership of gateway lifecycle. Needs detection of external systemd services.  
  [Issue #3276](https://github.com/sipeed/picoclaw/issues/3276)

- **#3272** [Feature] *Add Japanese localization* (accompanied by PR #3273) – requested by community, PR ready.  
  [Issue #3272](https://github.com/sipeed/picoclaw/issues/3272)

---

## 5. Bugs & Stability

Three bugs were updated or filed today, ranked by severity:

| Severity | Issue | Summary | Status | Fix PR? |
|----------|-------|---------|--------|---------|
| **High** | [#3269](https://github.com/sipeed/picoclaw/issues/3269) | MCP server failure causes agent loop hang, stops chat replies | Open, 1 comment | None yet |
| **High** | [#3300](https://github.com/sipeed/picoclaw/issues/3300) | Missing `read_file` tool leads to conversation deadlock when AI is instructed to read custom rule files | Open, new today | None |
| **Medium** | [#3281](https://github.com/sipeed/picoclaw/issues/3281) | WebUI input lag with long chat history (v0.3.1) | Open, 1 comment | None |

Additionally, issue [#3268](https://github.com/sipeed/picoclaw/issues/3268) (exec tool action parameter should default to `"run"`) is a usability bug affecting AI agent reliability, but not a crash.

No bug-fix PRs are currently in progress.

---

## 6. Feature Requests & Roadmap Signals

Several notable feature requests indicate where the project may be heading:

- **Externally-managed gateway support** (#3276) – Essential for headless server deployments using systemd. Likely to be addressed soon given server-use popularity.
- **Japanese localization** (#3272 / PR #3273) – Translation is ready; main review blocker is maintainer bandwidth.
- **Exec tool default action** (#3268) – Simple change, high impact for AI agent reliability; high chance of inclusion in next patch.
- **Configurable default fallback chain** (PR #3200) – Already implemented; could be merged soon.
- **DashScope TTS + WeChat audio** (PR #3270) – Niche but valuable for Chinese market users.
- **Model name refresh** (PR #3271) – Routine maintenance that will likely be merged ahead of next release.

*Prediction*: The next minor release (v0.4.0) may include #3200, #3271, and #3273 if reviewed promptly. Bug fixes #3268 and #3269 are candidates for a point release.

---

## 7. User Feedback Summary

Real pain points and use cases expressed in issues:

- **Headless server deployment** (#3276): Users running on Ubuntu VMs with systemd want launcher to co‑exist with external gateway management. Current behaviour is brittle.
- **Multi-language support** (#3272): Japanese documentation already exists, but UI lacks Japanese; translation PR is waiting.
- **AI agent reliability** (#3268, #3269, #3300):  
  - LLM calls to `exec` fail when `action` is omitted – forced parameter makes AI unpredictable.  
  - MCP connection failures hang the entire conversation – no fallback or timeout.  
  - Missing `read_file` tool forces users into workarounds that deadlock the agent.
- **Web UI performance** (#3281): Input lag becomes severe with long chat histories – degrades daily use.
- **Rule injection flexibility** (#3300): Users want to split prompts into custom files beyond `AGENT.md`, but tooling is incomplete.

Overall sentiment: Users are actively deploying PicoClaw in production-like scenarios and hitting edge cases that affect reliability and usability. Satisfaction with feature breadth is tempered by frustration with stability gaps.

---

## 8. Backlog Watch

The following issues and PRs have been open for an extended period without maintainer response or merge:

- **PR #1951** (opened 2026-03-24) – *chore: move installation scripts from docs repo to here* – No activity since April. Infrastructure improvement.
- **PR #3200** (opened 2026-07-01) – *feat: configurable default fallback chain* – Last updated 2026-07-27, still no review. Likely ready for merge.
- **Issue #3272 / PR #3273** (opened 2026-07-20) – Japanese localisation – Stale for 8 days despite full implementation.
- **Issue #3276** (opened 2026-07-20) – Externally-managed gateway – Stale, no maintainer acknowledgment.
- **Issue #3269** (opened 2026-07-20) – MCP hang critical bug – No assignee, no fix PR.
- **Issue #3268** (opened 2026-07-19) – Exec tool default – Stale for 9 days.

*Recommendation*: Maintainer attention is urgently needed on #3269 and #3268 (stability) and on reviewing PRs #3200, #3273 to reduce backlog.

*Links to long-open items:*  
[PR #1951](https://github.com/sipeed/picoclaw/pull/1951) | [PR #3200](https://github.com/sipeed/picoclaw/pull/3200) | [Issue #3272](https://github.com/sipeed/picoclaw/issues/3272) | [Issue #3276](https://github.com/sipeed/picoclaw/issues/3276) | [Issue #3269](https://github.com/sipeed/picoclaw/issues/3269) | [Issue #3268](https://github.com/sipeed/picoclaw/issues/3268)

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-07-28

## Today's Overview
NanoClaw saw moderate activity with **10 pull requests updated** in the last 24 hours, though **no new issues or releases** were created. The project remains in a steady development phase, with contributions focusing on bug fixes, feature additions, and documentation improvements. The single merged PR (#2598) ended a long-standing fix for per-group CLAUDE.md configuration, while nine open PRs continue to mature — covering webhook flexibility, signal adapter reliability, engagement controls, and new channel integration (Dial). No regression or crash reports were filed, suggesting a stable codebase.

## Releases
*No new releases today.*  
No versions were published; the latest available release remains unchanged.

## Project Progress
**Merged/Closed PRs (1):**
- [#2598 – fix: load per-group CLAUDE.local.md by adding 'local' to settingSources](https://github.com/nanocoai/nanoclaw/pull/2598) *(closed)*  
  Closes a configuration bug where `CLAUDE.local.md` fragments were not loaded for per-group settings, ensuring group-scoped agents inherit the correct custom instructions.

**Notable open PRs advancing major fixes or features:**
- [#3144 – feat(webhook): configurable bind address via `WEBHOOK_HOST`](https://github.com/nanocoai/nanoclaw/pull/3144)  
  Adds environment variable support to avoid binding to all interfaces (`0.0.0.0`) when more restrictive networking is desired.
- [#3137 – Fix engagement consistency and expose self-serve wiring controls](https://github.com/nanocoai/nanoclaw/pull/3137)  
  Allows group-scoped agents to inspect and update their engagement policies and prevents warm-container follow-ups from consuming context.
- [#3142 – fix(signal): forward image/file attachments through the mounted inbox](https://github.com/nanocoai/nanoclaw/pull/3142)  
  Fixes a dead-path issue where Signal attachments (PDFs, etc.) were placed in an unmounted directory, making them unreachable by the agent’s Read tool.

## Community Hot Topics
No pull requests or issues accumulated comments or reactions in the last 24 hours (all `comments: undefined`, `👍: 0`). The most structurally significant open PRs (by scope and recency) are:

- [#3144 – Webhook bind host](https://github.com/nanocoai/nanoclaw/pull/3144) — reflects community need for flexible network configuration in multi-interface deployments.
- [#3137 – Engagement wiring controls](https://github.com/nanocoai/nanoclaw/pull/3137) — addresses agent autonomy and policy inspection, a likely priority for power users.
- [#3050 – Dial channel integration](https://github.com/nanocoai/nanoclaw/pull/3050) — a feature skill for a new messaging channel, signalling demand for broader platform coverage.

These PRs, while lacking discussion, cover core infrastructure and user-facing capabilities that consistently generate interest.

## Bugs & Stability
No new bugs were reported today, but several **fix PRs** are active that impact stability and usability:

| PR | Severity | Description |
|----|----------|-------------|
| [#3142 – Signal attachment dead path](https://github.com/nanocoai/nanoclaw/pull/3142) | **High** – attachments (PDFs, text files, documents) are silently lost; agents cannot open them. Fix exists and is open. |
| [#3143 – Preserve resolved approval card content](https://github.com/nanocoai/nanoclaw/pull/3143) | **Medium** – resolved approval cards lose details; fix retains title, request body, and decision status. |
| [#3141 – container.json skill selection not respected](https://github.com/nanocoai/nanoclaw/pull/3141) | **Medium** – CLAUDE.md fragments from configured skills are ignored during container build. |
| [#2346 – Unknown slash commands dropped](https://github.com/nanocoai/nanoclaw/pull/2346) | **Medium** – unrecognised `/command` messages are silently swallowed; fix treats them as normal chat. **(Open since May 8)** |

No regression or crash PRs are pending, indicating that the current codebase is operationally sound.

## Feature Requests & Roadmap Signals
The following open PRs represent new or enhanced functionality likely to influence the next release:

- [#3144 – Webhook bind address](https://github.com/nanocoai/nanoclaw/pull/3144) – low risk, environment-var driven; likely to merge soon.
- [#3050 – Dial channel integration](https://github.com/nanocoai/nanoclaw/pull/3050) – adds a new messaging platform (Dial) to the setup wizard and skill model. Signals increasing multi-channel support.
- [#2971 – NCC host operational and health CLI](https://github.com/nanocoai/nanoclaw/pull/2971) – a utility skill for host-level health checks; useful for operational teams.
- [#2685 – Signal documentation improvements](https://github.com/nanocoai/nanoclaw/pull/2685) – updates docs for group typing, outbound reactions, and quote-reply behaviour; improves developer experience.

**Prediction:** The next minor version is likely to include webhook host configurability, the Dial channel skill, and several of the current bug fixes (especially #3142 and #3143). The engagement wiring controls (#3137) may be held for a larger governance release.

## User Feedback Summary
Direct user feedback is absent (no issues or comments in the period), but the PR contents reveal **implicit pain points** reported by contributors:

- **Network security**: Users want to restrict webhook to a specific interface (`WEBHOOK_HOST`) instead of all interfaces.
- **Attachment handling**: Signal users experienced silent failures when the agent could not read attached PDFs/documents — the fix (#3142) directly addresses this.
- **Configuration correctness**: Group-specific `CLAUDE.local.md` was ignored (#2598), and skill selection in `container.json` was not propagated to CLAUDE.md fragments (#3141).
- **Message handling**: Unknown slash commands were silently dropped (#2346), causing confusion during chat.

Overall sentiment appears constructive, with contributors actively patching their own use-cases.

## Backlog Watch
Several PRs remain open for extended periods and may benefit from maintainer review or merge:

- [#2346 – Unknown slash commands fix](https://github.com/nanocoai/nanoclaw/pull/2346) – **Open since May 8, 2026 (81 days)**. This is a simple behavioural fix; its long tail suggests either low priority or insufficient review bandwidth.
- [#2685 – Signal docs improvements](https://github.com/nanocoai/nanoclaw/pull/2685) – **Open since June 4, 2026 (54 days)**. Clarifications for group typing and reactions; likely blocked on documentation consistency checks.
- [#2971 – NCC host health CLI](https://github.com/nanocoai/nanoclaw/pull/2971) – **Open since July 7, 2026 (21 days)** – no comments; may need a maintainer to verify utility skill guidelines.

No issues are orphaned, and the backlog is modest. Targeted triage on these three PRs would improve project momentum.

---

*Digest generated from [qwibitai/nanoclaw](https://github.com/qwibitai/nanoclaw) GitHub data for 2026-07-28.*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest — 2026-07-28

## 1. Today's Overview
The NullClaw project showed minimal activity over the past 24 hours. No new issues were created or updated, and no releases were published. The only change was an update to an existing open pull request (#956) from Dependabot, which bumps the Alpine base image version. No features were merged, and no community discussions took place. The project appears stable but with low engagement, possibly in a maintenance phase.

## 2. Releases
No new releases were published today or in the recent past. The latest release remains unknown from the available data.

## 3. Project Progress
No pull requests were merged or closed in the last 24 hours. The only PR activity was an update to an open dependency bump:

- **[PR #956 – ci(deps): bump alpine from 3.23 to 3.24 in the docker-images group](https://github.com/nullclaw/nullclaw/pull/956)**  
  Status: **Open** (created 2026-06-15, last updated 2026-07-27)  
  This PR automatically updates the Alpine base image from version 3.23 to 3.24. It remains unmerged, with no comments or reviews.

## 4. Community Hot Topics
There are no active issues or pull requests with significant community engagement. PR #956 has zero comments and zero reactions. No other discussions were recorded in the last 24 hours. The project currently lacks visible community discourse.

## 5. Bugs & Stability
No bug reports, crashes, or regressions were reported today. The dependency bump in PR #956 is a routine maintenance update and does not address any known stability issues. The absence of bug reports suggests a relatively stable state, though low activity may also mask latent issues.

## 6. Feature Requests & Roadmap Signals
No user-submitted feature requests or roadmap signals were observed in the last 24 hours. The only open item is a dependency update, which does not indicate any planned feature work. Without additional data, it is not possible to predict upcoming features.

## 7. User Feedback Summary
No user feedback (comments, reactions, or issue descriptions) was recorded in the last 24 hours. The project appears to have little to no active user engagement during this period.

## 8. Backlog Watch
One open item may require maintainer attention:

- **[PR #956 – ci(deps): bump alpine from 3.23 to 3.24](https://github.com/nullclaw/nullclaw/pull/956)**  
  Created over six weeks ago and last updated yesterday, this automated dependency bump has not been reviewed or merged. While low-risk, leaving it open could cause CI inconsistencies if other dependency changes are made. A maintainer review and merge (or closure) would be prudent.

No other long-unanswered issues or PRs were identified.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-07-28

## Today's Overview

IronClaw is in an intensive post-launch stabilization and feature-completion phase following its **v1.0.0 ground-up rebuild** released yesterday (2026-07-27). Activity is extremely high: **38 issues** and **50 PRs** were updated in the last 24 hours, with 19 PRs merged or closed and 4 issues resolved. The team is executing a coordinated launch checklist (`v1-launch-checklist` label), running daily failure taxonomies, and working through a backlog of epics targeting extension platform unification, memory provider contracts, and hermetic testing infrastructure. The project shows strong organizational discipline with clearly scoped epics, milestone tracking, and systematic mutation testing, but the volume of reported regressions and UX gaps suggests the reborn architecture is still being hardened in production-like environments.

---

## Releases

### `ironclaw-v1.0.0` — 2026-07-27
**This is the first stable release of the fully rearchitected IronClaw.** It is *not* an incremental update from the 0.29.x line — it is a ground-up rebuild of the agent runtime, storage, extension host, and web UI.

**Key changes:**
- The `ironclaw` binary now ships the rearchitected CLI; the legacy monolith builds as `ironclaw-legacy`
- Internal engineering docs were previously served publicly on the docs site — fixed in PR #6692 (merged)
- API breaking changes in `ironclaw_common` (0.4.2 → 0.5.0, copy trait additions) and `ironclaw_skills` (0.3.0 → 0.4.0) via PR #5598

**Migration notes:** Users on the 0.29.x line should expect a breaking migration path. A dedicated tracking epic ([#6725](nearai/ironclaw Issue #6725)) for the pre-Reborn → v1 migration path has been opened but its description is pending.

---

## Project Progress

### Merged/Closed PRs Today (19 total)

| PR | Summary |
|---|---|
| [#6687](nearai/ironclaw PR #6687) | **Dependency bump:** 33 updates across the `everything-else` group (async-trait, thiserror, uuid, etc.) |
| [#6692](nearai/ironclaw PR #6692) | **Docs restructure:** Fixed 33 internal doc paths leaking publicly; reorganized docs site around shipped 1.0 binary |
| [#6684](nearai/ironclaw PR #6684) | **Failure kind collapse:** Unified five overlapping failure-kind enums into one `FailureKind` (36 variants) with fate projections — fixes six wrongful-terminal / mis-retry bugs |
| [#6723](nearai/ironclaw PR #6723) | **Sandbox credential firewall:** Added unwired primitives for CA infrastructure and credential staging |

### Key Feature Advances (Open PRs)

- **Sandbox infrastructure:** PR [#6695](nearai/ironclaw PR #6695) adds leaf-scoped mount containment and per-user sandbox identity primitives (unwired). PR [#6740](nearai/ironclaw PR #6740) ports TLS termination seam for the sandbox egress proxy.
- **Memory provider contract rebuild:** PR [#6724](nearai/ironclaw PR #6724) rebuilds the memory provider contract around declared capabilities — provider manifest becomes the single source of truth.
- **Extension lifecycle normalization:** PR [#6655](nearai/ironclaw PR #6655) normalizes extension installation state into typed filesystem records.
- **Error recoverability:** PR [#6697](nearai/ironclaw PR #6697) fixes finish-reason reporting so adapters read the provider's real finish reason instead of inferring from response shape (epic #6284 item 8).

### Resolved Issues

- **#4548** (Closed): DeepSeek 400 error from duplicate `model` field in requests with tools — fixed
- **#6060** (Closed): Routine delivery target leaking across all routines — fixed

---

## Community Hot Topics

### Most Active Issues

1. **[#6284](nearai/ironclaw Issue #6284) — Error-recoverability endgame** (14 comments)
   *Epic demanding that *every* mid-run error satisfies a five-clause recoverability contract. This is the single most commented issue and reflects a foundational quality requirement: runs must survive errors, and the model must see actionable recovery information. The underlying need is production-grade reliability — the ability for agents to self-heal without human intervention.*

2. **[#6524](nearai/ironclaw Issue #6524) — Hermetic capability and journey testing platform** (3 comments)
   *Epic for a deterministic, mechanized answer to "does every capability have meaningful coverage?" Signals a shift toward rigorous, repeatable QA. Related PRs [#6728](nearai/ironclaw PR #6728) (reversed-order journey replay) and [#6738](nearai/ironclaw PR #6738) (fault-state isolation) show active implementation.*

3. **[#6581](nearai/ironclaw Issue #6581) — 429 Too Many Requests on agent-stg** (3 comments)
   *WebChat v2 SSE live-update channel returns 429 under normal multi-thread usage, causing "Disconnected" state. This is a launch-blocking production bug affecting user experience on the hosted instance.*

### Most Active Pull Requests

Several XL-sized structural PRs are under active review:

- **[#6691](nearai/ironclaw PR #6691)** — Refactors composition assembly, reducing `ironclaw_reborn_composition` by 9,394 lines
- **[#6696](nearai/ironclaw PR #6696)** — Collapses lifecycle state into row-native process journal (DB migration required)
- **[#6740](nearai/ironclaw PR #6740)** — TLS termination seam for sandbox egress proxy
- **[#6737](nearai/ironclaw PR #6737)** — Fixes regression from PR #6616 merge that silently reverted extension behaviors

The underlying theme across all hot topics is **structural consolidation** — collapsing duplicated enums, normalizing lifecycle records, and unifying failure models — as the team pays down technical debt from the Reborn architecture.

---

## Bugs & Stability

### P1 / Launch-Blocking (Critical)

1. **[#6720](nearai/ironclaw Issue #6720) — Task runs indefinitely; stop button fails**
   *Instance: Railway QA testing. A smoke test ran >15 minutes without completing. UI displays "Couldn't stop this run." **No fix PR yet.***

2. **[#6719](nearai/ironclaw Issue #6719) — Conversation history fails to load after backend errors**
   *After 503 errors and CSP violations, chat shows "Failed to load conversation history" with 401s and manifest fetch failures. **No fix PR yet.***

3. **[#6718](nearai/ironclaw Issue #6718) — Streaming only resumes after switching pages**
   *Connection stuck on "Reconnecting" — tool updates and responses stop until page navigation. **No fix PR yet.***

### High Severity

4. **[#6581](nearai/ironclaw Issue #6581) — 429 rate limit on WebChat SSE**
   *Normal multi-thread usage triggers rate limiting. Affects hosted instance users. **No fix PR yet** (discussion ongoing).*

5. **[#6741](nearai/ironclaw Issue #6741) — Extension OAuth fails for Gmail/Calendar**
   *OAuth sign-in flow completes but connection fails. Filed today. **No fix PR yet.***

6. **[#6717](nearai/ironclaw Issue #6717) — Agent gives incorrect Telegram pairing instructions**
   *After successful pairing, agent still tells user to connect Telegram. **No fix PR yet.***

7. **[#6716](nearai/ironclaw Issue #6716) — Model incorrectly claims Slack is unavailable**
   *Hallucinates limitations when Slack integration exists. **No fix PR yet.***

8. **[#6726](nearai/ironclaw Issue #6726) — Dead code: `register_generic_channel_outbound_targets` is a no-op**
   *All test tiers pass with it removed. Not a runtime bug but indicates incomplete delivery path cleanup.*

9. **[#6575](nearai/ironclaw Issue #6575) — `systemd` service error after `ironclaw onboard` (Ubuntu)**
   *Closed as resolved, though root cause not detailed in digest data.*

### Resolved Today

- **#4548** (DeepSeek 400 duplicate model field) — Fixed
- **#6060** (Routine delivery target leakage) — Fixed
- **#6575** (systemd service error) — Closed

### Regression Risk

PR [#6737](nearai/ironclaw PR #6737) explicitly notes that a previous merge (#6616) silently reverted extension behaviors due to conflict resolution. A generalized scan found exactly one regression, which this PR fixes, but the incident highlights merge risk in the rapid development cycle.

---

## Feature Requests & Roadmap Signals

### User-Requested Features (Filed Today)

1. **[#6743](nearai/ironclaw Issue #6743) — In-app feedback / bug report widget**
   *"No easy way for users to submit feedback" — users must leave the app for Slack/GitHub. **High likelihood for next patch.***

2. **[#6742](nearai/ironclaw Issue #6742) — User profile details view**
   *Profile menu shows no name, email, or account identifier. **High likelihood — trivial UI addition with outsized UX impact.***

### Roadmap Signals (Epics)

The following epics were opened or heavily updated today, indicating near-term roadmap priorities:

- **[#6725](nearai/ironclaw Issue #6725)** — Migration path: legacy → v1 (Reborn) — *Prerequisite for v1 adoption*
- **[#6727](nearai/ironclaw Issue #6727)** — Custom/arbitrary MCP server support — *Extensibility gap*
- **[#6731](nearai/ironclaw Issue #6731)** — IronHub integration (marketplace for tools/skills) — *Strategic platform play*
- **[#6734](nearai/ironclaw Issue #6734)** — Give agent access to its own documentation — *Self-service configuration*
- **[#6733](nearai/ironclaw Issue #6733)** — Ship manifest-declared `/model` and `/status` commands across Telegram, Slack, WebUI — *Channel parity*
- **[#6732](nearai/ironclaw Issue #6732)** — Unify outbound delivery execution and automation targeting — *Architecture cleanup*
- **[#6730](nearai/ironclaw Issue #6730)** — Correct memory provider lifecycle capabilities — *Provider contract hardening*
- **[#6729](nearai/ironclaw Issue #6729)** — Normalize extension installation persistence — *Extension platform maturity*

### Prediction for Next Release (v1.0.1 or v1.1.0)

The v1-launch-checklist bugs (streaming, conversation history, 429 rate limits) will be blockers for any stable release. The highest-probability additions are:
1. User profile view & feedback widget (quick UX wins)
2. Documentation-access capability for the agent (epic #6734)
3. Custom MCP server support (epic #6727)
4. `/model` and `/status` commands across channels (epic #6733)

---

## User Feedback Summary

### Pain Points

1. **Streaming unreliability:** Users seeing "Disconnected" / "Reconnecting" states that require page navigation to recover ([#6718](nearai/ironclaw Issue #6718), [#6581](nearai/ironclaw Issue #6581))
2. **Incorrect agent guidance:** The model confidently gives wrong instructions about Telegram pairing and Slack availability after successful setup ([#6717](nearai/ironclaw Issue #6717), [#6716](nearai/ironclaw Issue #6716))
3. **OAuth integration failures:** Gmail and Calendar extensions fail after completing sign-in ([#6741](nearai/ironclaw Issue #6741))
4. **Missing user identity information:** No way to see which account is logged in ([#6742](nearai/ironclaw Issue #6742))
5. **No in-app feedback channel:** Users must leave the app to report issues ([#6743](nearai/ironclaw Issue #6743))
6. **Telegram setup documentation gap:** Users lack clear instructions ([#6522](nearai/ironclaw Issue #6522))

### Satisfaction Signals

- The systematic approach to failure recovery (epic #6284) and hermetic testing (epic #6524) indicates a team that values reliability
- Daily failure taxonomies ([#6707](nearai/ironclaw Issue #6707)) provide transparent quality tracking
- The extension platform unification epics suggest a maturing vision for third-party extensibility

### Dissatisfaction Signals

- Multiple launch-checklist bugs being discovered in staging/hosted environments suggests insufficient pre-release testing
- Model hallucination about available integrations undermines user trust
- The stop-button failure ([#6720](nearai/ironclaw Issue #6720)) is a fundamental control-safety concern

---

## Backlog Watch

### Long-Open Issues Needing Attention

| Issue | Age | Note |
|---|---|---|
| **#5598** PR — Release automation | Open since July 3 (25 days) | Blocking automated crate publishing; multiple API-breaking changes staged |
| **#4548** — DeepSeek duplicate model field | Open since June 8 (50 days) | **Resolved today** — previously was the longest-standing open bug |
| **#6284** — Error-recoverability endgame | Open since July 19 (9 days) | 14 comments, active implementation PRs exist, but epic remains open |
| **#6428** — Tokio ecosystem dependency bump | Open since July 21 (7 days) | Dependabot PR, likely safe to merge |

### Risk Items

- **PR #6737**: The silent regression from a merge conflict resolution raises concerns about code review processes in the fast-moving reborn branch. The team's response (generalized 120-commit scan) is appropriate but suggests the CI pipeline may not catch behavioral regressions reliably.
- **No fix PRs exist** for any of the P1 launch-blocking bugs (indefinite runs, conversation history failure, streaming issues) — these are the most urgent stability risks as of this report.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-07-28

## 1. Today's Overview
The project saw moderate activity with 9 issues and 9 PRs updated in the last 24 hours. All 9 issues remain open, indicating ongoing user-reported problems, while 6 PRs were merged or closed, reflecting active development. No new releases were published today. The community is raising several usability and data-integrity concerns, with multiple reports focusing on the `exec` tool’s shell behavior and file corruption bugs. The development team has responded by merging fixes for installation blockers, email security, artifact preview, and agent engine loop termination.

## 2. Releases
**None** — no releases were published on 2026-07-28.

## 3. Project Progress (Merged/Closed PRs)
Six PRs were merged or closed today, indicating focused development on stability and features:

- **PR #2394** (closed) – `Fix/windows install manual overwrite blocked` (area: docs, platform: windows). Addresses installation failures on Windows when manual overwrite is blocked.  
  [GitHub](https://github.com/netease-youdao/LobsterAI/pull/2394)

- **PR #2389** (closed) – `fix(email): prevent attachment path traversal`. Sanitizes attachment filenames to prevent directory traversal; includes cross-platform security tests and version bump for bundled email skill.  
  [GitHub](https://github.com/netease-youdao/LobsterAI/pull/2389)

- **PR #2388** (closed) – `feat(artifacts): 新增预览工具栏分享与部署入口`. Adds share and deploy buttons to the artifact preview toolbar, with unit tests and design docs.  
  [GitHub](https://github.com/netease-youdao/LobsterAI/pull/2388)

- **PR #2386** (closed) – `fix(agentEngine): terminate no-progress tool loops before token budget exhaustion`. Addresses agent stalls where tool loops consume tokens without progress.  
  [GitHub](https://github.com/netease-youdao/LobsterAI/pull/2386)

- **PR #2387** (closed) – `Feat/2026.7.20 sites` (area: renderer, docs, main, artifacts). Feature work on site/service deployment infrastructure.  
  [GitHub](https://github.com/netease-youdao/LobsterAI/pull/2387)

- **PR #1323** (closed) – `fix(cowork): narrow input-too-long error classification`. Resolves misleading “input too long” UI when the actual error is unrelated (e.g., invalid `max_tokens` parameter).  
  [GitHub](https://github.com/netease-youdao/LobsterAI/pull/1323)

## 4. Community Hot Topics
The most active issues and PRs (by comments/reactions) reflect two core themes: **installation failures** and **shell/tool compatibility**.

- **#2395** (1 comment) – “无法安装” – User reports an installation error: *“The LobsterAI update stopped because user skills could not be backed up.”* This is a fresh issue (created today) and may be linked to PR #2394 (Windows install fix).  
  [GitHub](https://github.com/netease-youdao/LobsterAI/issues/2395)

- **#2396** (0 comments) – “exec 工具的默认 shell wrapper = Windows PowerShell 5.1” – Detailed report of commands failing silently when `exec` uses PowerShell 5.1 instead of PowerShell 7, especially with special characters.  
  [GitHub](https://github.com/netease-youdao/LobsterAI/issues/2396)

- **#2393** (0 comments) – “LobsterAI 加速器在字符串改写时把 `\f` 字节对替换为 `\x0C`” – Data corruption bug where literal `\f` sequences are replaced by form feed bytes. Marked as **critical** by the reporter.  
  [GitHub](https://github.com/netease-youdao/LobsterAI/issues/2393)

- **#1240** (1 comment) – “现有大模型受限后无法切换到其他大模型” – User describes a scenario where hitting API rate limits on one model locks all agents, even after switching. Raises concerns about state isolation between agents.  
  [GitHub](https://github.com/netease-youdao/LobsterAI/issues/1240)

Underlying need: Users expect reliable installation, consistent shell behavior across platforms, and safe data handling. The shell and encoding bugs (#2396, #2393) point to deeper cross-platform compatibility gaps.

## 5. Bugs & Stability
Several bugs were reported today, ranked by severity:

| Severity | Issue | Problem | Fix PR exists? |
|----------|-------|---------|----------------|
| 🔴 Critical | #2393 | Accelerator corrupts `\f` byte sequences → data integrity loss when writing files | No |
| 🔴 Critical | #2395 | Installation cannot complete due to failed skill backup | PR #2394 (merged) – likely a fix |
| 🟡 High | #2396 | `exec` tool defaults to PowerShell 5.1, causing silent failures on Linux commands and special chars | No |
| 🟡 High | #2390 | `exec` tool hardcodes `powershell.exe`; Chinese usernames cause path encoding issues | No |
| 🟢 Medium | #2392 | Scheduled tasks cannot select agent or skill | No |
| 🟢 Medium | #2391 | No skill rename functionality (feature request) | No |

Also note stale bugs:
- **#1237** (Settings close without save) – comment today, no resolution yet.  
- **#2062** (Task timeout for 24h runs) – still open, no fix.

No crash reports or regressions beyond these.

## 6. Feature Requests & Roadmap Signals
User-requested features from today’s issues:

- **Skills rename** (#2391) – Users want to rename custom skills. Simple quality-of-life improvement.
- **Scheduled task agent/skill selection** (#2392) – Currently impossible to assign a specific agent or skill to a timed task.
- **Window attention on task completion** (PR #1239, stale) – Would flash taskbar/Dock icon when AI finishes. Still open after 4 months, but community interest is present.

Given the merge of PR #2388 (artifact share/deploy) and PR #2387 (sites feature), the next version is likely to focus on **deployment and sharing capabilities**. Feature requests like skill rename are minor and could appear in a future patch. The `exec` shell flexibility (#2396) may drive a larger cross-platform shell abstraction.

## 7. User Feedback Summary
Real pain points from today’s activity:

- **Installation instability** – “无法安装” (can’t install) is a blocker for new users. The error message about failed skill backup is confusing and leaves the system in a broken state.
- **Data corruption** – The `\f` replacement bug (#2393) is described as “data silently damaged” with 100% reproducibility. Users saving files (e.g., memory.md) lose content integrity.
- **Model lock after quota** – #1240 describes a frustrating scenario: after one model hits rate limits, the entire app becomes unusable. Users expect isolation between agents.
- **Scheduled task rigidity** – #2392 and #2391 highlight that users want more control over automation (which agent, which skill, rename skills).
- **Cross-platform shell frustration** – #2396 and #2390 reflect Windows power users who have PowerShell 7 installed but are forced to use the older 5.1 shell, causing failures in `pwsh -Command`, `grep`, and Chinese path handling.

Overall, users are pushing for **stability**, **data safety**, and **configuration flexibility**.

## 8. Backlog Watch
Several important issues and PRs have been open for months without resolution or maintainer response:

- **PR #1239** (stale, opened 2026-04-01) – “feat(main): AI 任务完成时闪烁任务栏/Dock 图标提醒用户”. No maintainer activity for 4 months. Would improve user experience significantly.
- **PR #1241** (stale, opened 2026-04-01) – “feat(settings): Settings 关闭无确认，API Key 等配置静默丢失”. Has a full implementation but remains unmerged.
- **Issue #1237** (stale, opened 2026-04-01) – Same topic as PR #1241; likely duplicate. No response from maintainers.
- **Issue #1240** (stale, opened 2026-04-01) – Model lock issue; users are still commenting (most recent today). High impact, no fix in sight.
- **Issue #2062** (stale, opened 2026-05-27) – Task timeout beyond maximum duration; user reports 24h runs stop but unsure if background continues. No maintainer reply.

These items represent **accumulating technical debt** and **unaddressed user needs**. Addressing them could reduce frustration and improve project health.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-07-28

## 1. Today's Overview

The project saw no new issues or releases in the last 24 hours, but five open pull requests were updated, indicating continued active development. No changes were merged, so the master branch remains stable. The lack of new bug reports suggests the current release is relatively mature, while ongoing PRs tackle both security hardening and feature expansion. Overall, the project is in a steady development phase with no signs of stagnation, though community engagement (comments/reactions) appears low.

## 2. Releases

None. No new releases were published today.

## 3. Project Progress

No pull requests were merged or closed in the last 24 hours. The following open PRs represent the progress currently under review:

- **#1158** – `feat(memory): add zvec vector database memory backend` (author: demyanrogozhin)  
  Adds an experimental, vibe-coded memory backend using Zvec and redb, feature-gated behind `zvec` (enabled by default in `full`).

- **#1169** – `feat(acp): expose Moltis as an ACP agent over stdio` (author: penso)  
  Implements the ACP agent side so that external harnesses (Zed, `buzz-acp`, etc.) can use Moltis as their agent (previously only an ACP client).

- **#1170** – `fix(channels): gate /sh and privileged tools behind a per-account operators list` (author: penso)  
  Security fix: restricts `/sh` (host command execution) to an explicit operators list per account, preventing group-chat members from gaining arbitrary shell access.

- **#1174** – `Add instrumentation and feedback collection infrastructure` (author: penso)  
  Introduces an `ObservationSink` fanout for agent instrumentation, with pluggable backends and end-user feedback collection on top.

- **#1173** – `feat(pwa): make push notifications reliable and non-disruptive` (author: penso)  
  Fixes a bug where PWA notifications silently replaced earlier messages; adds `renotify` flag and session-based tagging to ensure sound/alert for each new message.

## 4. Community Hot Topics

No issues or PRs received comments or reactions in the last 24 hours (all fields show “undefined”). However, the most actively updated PRs point to clear community needs:

- **[PR #1158](https://github.com/moltis-org/moltis/pull/1158)** – The desire for an alternative, lightweight vector-database memory backend (Zvec + Redb) suggests users want more flexible, self-hostable memory options.
- **[PR #1169](https://github.com/moltis-org/moltis/pull/1169)** – Making Moltis an ACP agent responds to demand for integration with ACP-compatible tools and runners.
- **[PR #1170](https://github.com/moltis-org/moltis/pull/1170)** – The urgency of the `/sh` gate fix indicates privacy/security concerns in multi-user deployments (Discord guilds, group chats) – likely a hot topic among operators.

## 5. Bugs & Stability

Two bugs are directly addressed by open fix PRs. Ranked by severity:

- **Critical** – `/sh` command execution accessible to non-operators in shared channels ([PR #1170](https://github.com/moltis-org/moltis/pull/1170)). This is a privilege-escalation vulnerability that could allow arbitrary host commands on shared instances. A fix PR is open.
- **Medium** – PWA push notifications silently replacing earlier messages ([PR #1173](https://github.com/moltis-org/moltis/pull/1173)). This disrupts user experience for mobile users relying on push notifications. A fix PR is open.

No additional bugs, crashes, or regressions were reported today.

## 6. Feature Requests & Roadmap Signals

The following features are currently in the PR pipeline and likely candidates for the next release:

- **Zvec vector database backend** (#1158) – expands memory persistence options beyond the current defaults.
- **ACP agent role** (#1169) – enables Moltis to be used as a pluggable agent in ACP ecosystems.
- **Instrumentation & feedback collection** (#1174) – lays groundwork for telemetry and user feedback, indicating a shift toward production monitoring.
- **PWA notification reliability** (#1173) – improves the mobile/web app experience.

No explicit user-requested features were logged as issues, but the PRs themselves are driven by real-world usage scenarios (multi-user channels, external agent harnesses, notification dependability).

## 7. User Feedback Summary

No direct user feedback was captured in the last 24 hours. Inferred from PR descriptions:

- Operators need fine-grained access control for dangerous commands (e.g., `/sh`) in shared environments.
- PWA users were frustrated by missing/silent notifications – the fix directly addresses a satisfaction gap.
- Developers experimenting with alternative memory backends (e.g., Zvec) suggest a desire for lightweight, non-default options.
- The lack of any open issues implies that users are either satisfied with stability or channeling feedback through other means (Discord, etc.).

## 8. Backlog Watch

One PR stands out as needing maintainer attention due to its age:

- **[PR #1158](https://github.com/moltis-org/moltis/pull/1158)** – “feat(memory): add zvec vector database memory backend”  
  Created **2026-07-17**, updated today but still open after 11 days without merging or strong reviewer activity. This is an experimental contribution (note “vibe-coded”) that may need additional discussion, testing, or code review before acceptance.

The other four PRs are all from 2026-07-26 or 2026-07-27, which is recent and does not yet indicate neglect. No open issues are awaiting response.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest – 2026-07-28

## Today's Overview

CoPaw (powering the QwenPaw agent platform) saw high community and development activity in the last 24 hours. **50 issues were updated** (17 open, 33 closed) and **48 pull requests were updated** (35 open, 13 merged/closed). The high closure rate (66% of issues, 27% of PRs) indicates that the team is actively addressing bugs and merging features. A significant portion of the resolved issues came from older reports (June/July), suggesting ongoing cleanup of the backlog. No new releases were published today; the latest public version remains **v2.0.0.post3** (with a v2.0.1 desktop app noted in issues).

---

## Releases

**No new releases today.**

---

## Project Progress

Today’s merged/closed PRs advanced several areas:

- **Cron job streaming** ([PR #6511](https://github.com/agentscope-ai/QwenPaw/pull/6511)) – Fixed a migration issue where existing “final‑mode” cron jobs were not switched to streaming on upgrade.
- **Desktop sidecar packaging** ([PR #6491](https://github.com/agentscope-ai/QwenPaw/pull/6491)) – Bundled PawApp SDK modules so third‑party plugins (e.g. Agent Kanban) can install correctly on the desktop app.
- **QwenPaw Creator app** ([PR #6284](https://github.com/agentscope-ai/QwenPaw/pull/6284)) – Merged a new plugin app that brings a script‑to‑storyboard video creation workflow into the platform.
- **Windows sandbox documentation** ([PR #6462](https://github.com/agentscope-ai/QwenPaw/pull/6462)) – Updated docs to clarify native Windows sandbox support (no WSL2 requirement).

Other work in progress (still open but actively reviewed) includes: unified browser backend ([#6276](https://github.com/agentscope-ai/QwenPaw/pull/6276)), native desktop GUI automation ([#6424](https://github.com/agentscope-ai/QwenPaw/pull/6424)), third‑party agent integration ([#6397](https://github.com/agentscope-ai/QwenPaw/pull/6397)), and visual context compression ([#6456](https://github.com/agentscope-ai/QwenPaw/pull/6456)).

---

## Community Hot Topics

Issues and PRs that generated the most discussion (by comment count) reveal key user concerns:

| Item | Comments | Summary |
|------|----------|---------|
| [#5757](https://github.com/agentscope-ai/QwenPaw/issues/5757) | 14 | **CLOSED** – Feishu/Lark bot stops replying after the first message (Docker & platform). High frustration. |
| [#5725](https://github.com/agentscope-ai/QwenPaw/issues/5725) | 6 | **CLOSED** – Console streaming causes browser lag; only recovers after reply finishes. |
| [#4895](https://github.com/agentscope-ai/QwenPaw/issues/4895) | 5 | **CLOSED** – Infinite image compression loop leading to hallucination. |
| [#5090](https://github.com/agentscope-ai/QwenPaw/issues/5090) | 5 | **CLOSED** – Tool protection bypass: agent used Python to delete files despite `rm` being blocked. |
| [#5259](https://github.com/agentscope-ai/QwenPaw/issues/5259) | 5 | **CLOSED** – Windows vector index not persisted; must keep “rebuild index on startup” enabled. |
| [#5561](https://github.com/agentscope-ai/QwenPaw/issues/5561) | 5 | **CLOSED** – Long messages to Feishu not delivered; only sent as file attachments. |
| [#6473](https://github.com/agentscope-ai/QwenPaw/issues/6473) | 3 | **CLOSED** – “Agent Kanban” plugin fails to install on Desktop 2.0.1 (`No module named 'qwenpaw.pawapp'`). Fix shipped in PR #6491 today. |
| [#6460](https://github.com/agentscope-ai/QwenPaw/issues/6460) | 3 | **OPEN** – High CPU on Edge+Wayland when viewing large sessions, likely due to WebSocket push. |
| [#6324](https://github.com/agentscope-ai/QwenPaw/issues/6324) | 3 | **OPEN** – Model responses truncated (MiniMax‑M3). |

The underlying needs are clear: **reliability in channel integrations** (Feishu, DingTalk, WeChat Work) and **smoother frontend performance**. The popularity of the compression/hallucination issues also points to growing pain with context management at scale.

---

## Bugs & Stability

Bugs reported or updated today (open) ranked by severity:

| Severity | Issue | Description | Fix Existing? |
|----------|-------|-------------|---------------|
| **High** | [#6460](https://github.com/agentscope-ai/QwenPaw/issues/6460) | High CPU on Edge+Wayland in large sessions – may affect usability for Linux users. | No |
| **High** | [#6324](https://github.com/agentscope-ai/QwenPaw/issues/6324) | Model responses truncated (MiniMax‑M3) – causes incomplete answers. | No |
| **Medium** | [#6457](https://github.com/agentscope-ai/QwenPaw/issues/6457) | Task mode generating excessive extra conversation entries. | No |
| **Medium** | [#6258](https://github.com/agentscope-ai/QwenPaw/issues/6258) | `openai` model max output tokens not effective (v2.0.0.post3). | No |
| **Low** | [#6473](https://github.com/agentscope-ai/QwenPaw/issues/6473) | Plugin install failure – **fixed today** in PR #6491. | Yes |
| **Low** | [#6467](https://github.com/agentscope-ai/QwenPaw/issues/6467) | Server setup confusion (user misunderstanding, not a code bug). | N/A |

Additionally, several older high‑severity bugs (memory leak [#4968](https://github.com/agentscope-ai/QwenPaw/issues/4968), Windows process locking [#4844](https://github.com/agentscope-ai/QwenPaw/issues/4844), context inflation [#4872](https://github.com/agentscope-ai/QwenPaw/issues/4872)) were **closed today** – likely fixed in recent releases or patches.

---

## Feature Requests & Roadmap Signals

The following user‑requested features and ongoing PRs hint at the next roadmap priorities:

- **Custom model protocols** ([#5609](https://github.com/agentscope-ai/QwenPaw/issues/5609)) – Users want non‑OpenAI‑compatible endpoints (e.g. image generation). **Likely in next minor release** given multiple similar requests.
- **Kimi Coding Plan support** ([#5427](https://github.com/agentscope-ai/QwenPaw/issues/5427)) – Anthropic‑style API for Kimi K2 Code. Under discussion.
- **DingTalk image preview** ([#5593](https://github.com/agentscope-ai/QwenPaw/issues/5593) + [#5603](https://github.com/agentscope-ai/QwenPaw/issues/5603)) – Image messages and faster card streaming. Community enthusiasm.
- **Native desktop GUI automation** ([PR #6424](https://github.com/agentscope-ai/QwenPaw/pull/6424)) – “Computer use” tool for Windows & macOS (accessibility + Tauri). In review – could land in v2.1.
- **Third‑party agent architecture** ([PR #6397](https://github.com/agentscope-ai/QwenPaw/pull/6397)) – Integration of Codex, Qoder, and Skills. Large feature, likely a preview in next release.
- **Reranker for memory search** ([PR #6398](https://github.com/agentscope-ai/QwenPaw/pull/6398)) – Addresses the “context compression” pain point.

---

## User Feedback Summary

Real user pain points captured from issues:

- **Channel instability**: Feishu/Lark, DingTalk, WeChat Work all reported intermittent non‑responses or slow streaming. Users in enterprise settings are particularly affected (#5757, #5561, #5603).
- **Security concerns**: The `rm` bypass (#5090) shows that tool safety guards can be circumvented via Python – a critical trust issue for production deployments.
- **Desktop plugin friction**: Installing official plugins on Windows desktop fails (#6473), undermining the “App Center” ecosystem.
- **Performance degradation**: Console streaming lag (#5725) and high CPU (#6460) degrade the user experience, especially on Linux with Wayland.
- **Context management**: Compressed contexts lose important anchor messages (#5710) and images inflate tokens (#4921). The community clearly wants smarter context handling.

Overall sentiment is **mixed**: users appreciate the rapid feature pace but are frustrated by regressions and channel reliability. The high closure rate suggests maintainers are listening.

---

## Backlog Watch

Several important items remain unresolved after the 24‑hour window (open PRs and issues that have gone weeks without maintainer response or integration):

| Item | Created | Days Open | Issue |
|------|---------|-----------|-------|
| [PR #5514](https://github.com/agentscope-ai/QwenPaw/pull/5514) | 2026-06-25 | 33 | Fix chat input queue session ID migration – still open, needs review. |
| [PR #6068](https://github.com/agentscope-ai/QwenPaw/pull/6068) | 2026-07-13 | 15 | Fix scroll history migration – open, no recent activity. |
| [Issue #5609](https://github.com/agentscope-ai/QwenPaw/issues/5609) | 2026-06-29 | 29 | Custom model protocol request – no official roadmap acknowledgment. |
| [Issue #5427](https://github.com/agentscope-ai/QwenPaw/issues/5427) | 2026-06-23 | 35 | Kimi Coding Plan support – acknowledged in PRs but not yet implemented. |

The team should prioritize review of PR #5514 and PR #6068 to prevent further drift, and provide a clear response to the custom protocol request (#5609) which has gathered positive reactions.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest – 2026-07-28

## Today's Overview
ZeroClaw is in an intense security-hardening and stability phase. Activity is very high: 48 issues and 50 PRs were updated in the last 24 hours, with 8 PRs merged/closed. However, the majority of open items (44 issues, 42 PRs) remain unresolved, many flagged as high-risk or blocked. Security vulnerabilities dominate the tracker, with multiple S1 (workflow blocked) and S2 (degraded behavior) bugs reported, several by external auditors. The community is actively contributing patches, but maintainer bandwidth appears strained, as evidenced by the number of PRs marked `needs-author-action` and long-standing trackers awaiting decisions. No new releases were published today.

## Releases
No new releases.

## Project Progress
Eight pull requests were merged or closed today. While the top-20 PR list does not include these specific merges, the closed issues (4 total) and the general PR activity indicate progress on:
- Test stability fixes (see PR #9439 for cross-platform test pinning, PR #9475 replacing fixed sleeps with bounded waits).
- CI improvements: PR #9369 serialised shared Cargo caches to prevent container race conditions; PR #9398 added advisory macOS and Windows test jobs.
- Security patches: PR #9472 removed the `vi_verify` tool from model-callable registration; PR #9412 fixed OTel display marker ordering.
- Documentation: PR #9416 added doc comments for `AllToolsResult.tools`; PR #9407 preserved placeholders through mdBook rendering.
- An important operational improvement: PR #9476 (opened today) adds authenticated cancellation for running SOP jobs, directly addressing issue #9425.

## Community Hot Topics
The most engaging discussions this period centre on security and sandboxing:

- **#9357** (5 comments) – Flaky runtime test that poisons a global mutex, affecting 19/20 runs. The community is investigating root cause, with follow-up assigned.
- **#8973** (4 comments) – Landlock sandbox blocks shell access to `/dev/null` on Fedora. A high-severity runtime bug with ongoing debate about the correct fix.
- **#9386** (4 comments) – Gemini API key leak through `sanitize_api_error`. The bug allows keys to be posted into the originating chat. Immediate attention needed.
- **#9363** (3 comments) – Config metadata remains English despite locale selection in ZeroCode/web – a localization gap that degrades UX.
- **#8279** (3 comments) – Delegation tool bypasses parent’s tool allowlist, marked S0 (data loss/security risk). No fix PR yet despite being open since June 24.
- **#9393** (3 comments) – Bluesky and Reddit channels lack sender authorization – a security audit finding.
- **#8720** (3 comments) – Support request to disable cache for Bedrock Nova 2 Lite model, with no straightforward config solution.

## Bugs & Stability
New and high-severity bugs reported today (2026-07-27 to 2026-07-28):

| Issue | Severity | Description | Fix PR? |
|-------|----------|-------------|---------|
| **#9474** | S1 – Workflow blocked | Auth profile store fails to load due to required `model_provider` field rename; no migration. | None yet |
| **#9425** | S1 – Workflow blocked | Running SOP jobs have no operator cancellation path. | PR #9476 opened today |
| **#9421** | S1 – Workflow blocked | Incomplete terminal responses reported as successful. | PR #9424 in review |
| **#9386** | S2 – Degraded | Gemini API key in request URL not sanitised, leaked into chat. | None |
| **#8973** | S2 – Degraded | Landlock breaks shell tool on Fedora. | None |
| **#9357** | S2 – Degraded | Cargo test flakes 19/20 runs, poisons global mutex. | Follow-up in progress |
| **#9422** | S2 – Degraded | `zeroclaw-config` cannot compile on Windows (ungated `EnvValueGuard`). | None |
| **#9462** | S2 – Degraded | Plugin unit tests behind feature gate never run in CI. | None |
| **#9429** (closed) | S2 – Degraded | Channel tests use fixed wall-clock timeouts, flake on slow runners. | Fixed |
| **#9238** (closed) | S2 – Degraded | `config_save_isolation` skips all test files on Windows. | Fixed |
| **#7808** (closed) | S2 – Degraded | CLI secret prompts give no feedback after paste. | Fixed |

Notable: The security audit by `belumume` produced a wave of S1/S2 bugs (#9386, #9393, #9417, #9392, #9390, #9389) – all filed 2026-07-26 or 07-27. These indicate systemic gaps in channel security and emergency-stop mechanisms.

## Feature Requests & Roadmap Signals
Several enhancement requests and RFCs received updates today:

- **#8983** – Proposal for category-scoped `read_memory_from` to share only selected memory categories with sibling agents (community interest, no PR yet).
- **#9464** – RFC for Anthropic stored-profile OAuth alias contract, awaiting maintainer confirmation.
- **#9463** – Feature request to wire WASM memory plugins into runtime backend selection (currently only tool plugins work in production).
- **#9330** – RFC to use AI-assisted PR pre-review using CI results, while keeping final approval human-owned. Maintainer attention needed.
- **#9377** – Large PR (XL) adding full Chinese (zh) translations for all UI keys – 1,457 web keys and 100% CLI coverage. A strong community contribution.

Roadmap trackers still active: **#7432** (v0.9.0 auth/security/gateway queue) and **#8288** (SOP milestone to 5/5 daemon-owned control plane). No blockers on these appear to have been resolved today.

## User Feedback Summary
Real pain points expressed by users and contributors:
- **Sandboxing failures**: Landlock on Fedora breaks shell access (#8973). Users on non-Ubuntu distributions are blocked.
- **Security fatigue**: Multiple reports of API key leaks (#9386), delegation bypasses (#8279), and missing authorization in channels (#9393, #9417, #9392) – trust in the project’s security posture is shaken.
- **Test suite unreliability**: Flaky tests (#9357, #9429) and Windows compilation issues (#9422) frustrate contributors and make CI less trustworthy.
- **Cron output dead end**: CLI-created cron jobs deliver output to nowhere (#9340) – users losing scheduled work silently.
- **Localization gaps**: Config metadata remains English even when the rest of the UI is translated (#9363), creating a disjointed experience.
- **SOP operational gaps**: No way to cancel a running SOP from the dashboard (#9425) – users must restart the daemon, losing state.

Satisfaction signals: The community is actively contributing high-quality patches (e.g., PR #9376 for crates.io publishing, PR #9377 for i18n). The SOP cancellation PR (#9476) was opened the same day as the bug report, demonstrating responsive development.

## Backlog Watch
Issues and PRs that remain unresolved for an extended period or need immediate maintainer attention:

| Item | Age (days open) | Reason for concern |
|------|-----------------|-------------------|
| **#8279** – Delegate bypasses tool allowlist (S0) | 34 days | Critical security bug; no fix PR. Last activity 2 days ago. |
| **#8973** – Landlock shell failure (S2) | 17 days | Blocks Fedora users; accepted but no PR. |
| **#8720** – Bedrock cache disabling (support) | 24 days | No config workaround provided; maintainer decision needed. |
| **#9340** – Cron jobs have no delivery (S1) | 4 days | Severity S1 with accepted label but no PR; follow-up needed. |
| **#7432** – v0.9.0 tracker | 49 days | Large milestone; no recent check-in on blockers. |
| **#8692** – Maintainer decision queue | 24 days | Contains multiple pending RFCs; no new decisions this month. |
| **#8858** – Drift audit tracker | 20 days | Cleanup audit; no recent progress. |
| **PR #8784** – Split-history loop refactor | 21 days | Marked `stale-candidate`; risks falling behind. |
| **PR #8966** – Live provider identity on usage events | 17 days | Large PR (XL) with `needs-author-action`; stalled since July 11. |
| **PR #9182** – PowerShell support on Windows | 8 days | XL PR with `needs-author-action`; Windows users waiting. |

The high proportion of security-related backlog items, combined with the audit firehose from the past two days, suggests that maintainers should prioritise triage and assign fixes before the next release.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/boom7sss/agents-radar).*