# OpenClaw Ecosystem Digest 2026-07-19

> Issues: 368 | PRs: 500 | Projects covered: 13 | Generated: 2026-07-19 03:29 UTC

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

# OpenClaw Project Digest — 2026-07-19

Generated from GitHub data (openclaw/openclaw). Data reflects activity in the 24 h ending 2026-07-19T23:59 UTC.

---

## 1. Today’s Overview

OpenClaw remains in a high-velocity development phase. Over the past 24 hours **368 issues** were updated (224 open/active, 144 closed) and **500 pull requests** were updated (281 open, 219 merged/closed). One new **beta release** (v2026.7.2‑beta.3) landed, introducing remote coding session improvements and native automation foundations. Community activity is intense, especially around **security‑critical** issues (masked secrets, filesystem sandboxing) and **stability‑impacting** regressions (gateway startup failures, session compaction bugs). The project is clearly converging toward a stable summer release, but several P0/P1 bugs remain in the open queue.

---

## 2. Releases

**v2026.7.2‑beta.3** ([release page](https://github.com/openclaw/openclaw/releases/tag/v2026.7.2-beta.3))  
- **Highlights (from the release notes):**  
  - **Remote coding sessions:** run Control UI sessions on cloud workers, open Codex and Claude catalog sessions in terminals on their owning hosts, and resume OpenCode and Pi sessions directly in a terminal. (`#107670`, `#107086`, `#107200`)  
  - **Native automation and nodes:** foundational support for automations surfaced as first‑class runtime nodes (details in release notes).  
- This is a **beta** release; no breaking changes or migration notes documented yet. Users on `2026.7.x` stable should expect a migration path when `2026.7.2` stable ships.

---

## 3. Project Progress

**219 PRs were merged or closed** in the last 24 h, indicating a very active integration pipeline. While the top‑30 PR list (by comment count) consists entirely of still‑open PRs, several high‑impact issues were resolved today:

- **Closed issues** (from the top‑50 list):  
  - [#101763 – Hosted Molty model selector bug](https://github.com/openclaw/openclaw/issues/101763) — model id with dot instead of dash fixed.  
  - [#83184 – Heartbeat‑driven replies blocking subsequent heartbeats](https://github.com/openclaw/openclaw/issues/83184) — pendingFinalDelivery starvation resolved.  
  - [#86827 – Group chat session stuck in failed state](https://github.com/openclaw/openclaw/issues/86827) — silent message drop fixed.  
  - [#49104 – Telegram HTML parse_mode truncation](https://github.com/openclaw/openclaw/issues/49104) — angle‑bracket tags no longer silently dropped.  
  - [#76233 – exec‑approval‑followup race with bundle‑MCP disposal](https://github.com/openclaw/openclaw/issues/76233) — UNAVAILABLE error fixed.  
  - [#79553 – Wizard cross‑overwrites credentials in multi‑account plugins](https://github.com/openclaw/openclaw/issues/79553) — account selection bugs resolved.  
  - [#88548 – GitHub Copilot static model list shadowing live discovery](https://github.com/openclaw/openclaw/issues/88548) — model entitlement fixed.  
  - [#91592 – memory_search broken after --force rebuild](https://github.com/openclaw/openclaw/issues/91592) — scopeHash mismatch fixed.  
  - [#85822 – Silent 48 s post‑run lane retention on Discord](https://github.com/openclaw/openclaw/issues/85822) — latency regression fixed.  
  - [#79308 – Telegram group replies sent to DM chat_id](https://github.com/openclaw/openclaw/issues/79308) — routing bug fixed.  
  - [#96732 – reasoning_content leaks into chat output (moonshot/kimi‑k2.6)](https://github.com/openclaw/openclaw/issues/96732) — reasoning separation fixed.  
  - [#65656 – LINE table flex messages silently dropped with 429](https://github.com/openclaw/openclaw/issues/65656) — API quota handling fixed.  

These closures span **channel integrations** (Telegram, Discord, LINE, Molty), **session management**, **model selection**, and **security** – demonstrating broad progress.

---

## 4. Community Hot Topics

The most active discussions (by comment count + reactions) reveal core community pain points and feature desires:

| Issue | Comments | 👍 | Topic | Underlying Need |
|-------|----------|----|-------|-----------------|
| [#91009](https://github.com/openclaw/openclaw/issues/91009) – Codex PreToolUse hook CPU stall | 14 | 2 | CPU‑bound `openclaw‑hooks` processes stall gateway RPC | **Performance & reliability** – tool‑call lifecycle causing 100% CPU spikes. |
| [#10659](https://github.com/openclaw/openclaw/issues/10659) – Masked Secrets for API keys | 13 | 4 | Agent cannot see but can use secrets | **Security** – protect against prompt injection and credential leaks. |
| [#79077](https://github.com/openclaw/openclaw/issues/79077) – Telegram guest bot & bot‑to‑bot mode | 11 | 8 | Support Telegram May‑7 release features | **Channel expansion** – wanting first‑class Telegram enhancements. |
| [#96975](https://github.com/openclaw/openclaw/issues/96975) – Isolate subagent completion from parent | 10 | 1 | Large subagent output pollutes parent context | **Session management** – control content flow between parent and child agents. |
| [#109490](https://github.com/openclaw/openclaw/issues/109490) – Codex app‑server turn interrupted | 9 | 1 | `terminate:true` stops promised work | **Stability** – dynamic tool split causes loss of intended agent actions. |

The **#10659 (masked secrets)** and **#79077 (Telegram bots)** topics received the most positive reactions, indicating strong user demand for security hardening and channel parity.

---

## 5. Bugs & Stability

The following bugs reported/updated in the last 24 h are ranked by severity. Fix PRs are noted where they exist.

### P0 / Release‑blocking
- [#109867](https://github.com/openclaw/openclaw/issues/109867) – **Beta.2 state migration creates index before adding column**, blocking gateway startup. **Fix PR:** [#111167](https://github.com/openclaw/openclaw/pull/111167) (open, ready for maintainer look).  
- [#108435](https://github.com/openclaw/openclaw/issues/108435) – **Gateway fails to start on 2026.7.1** (`Error: gateway did not start on 127.0.0.1:39781`). Regression from stable update. **No fix PR yet.**  
- [#110763](https://github.com/openclaw/openclaw/issues/110763) – **No API key in header for Minimax after upgrade to beta.2**. Regression reported as release‑blocking. **No fix PR yet.**

### P1 / Critical
- [#91009](https://github.com/openclaw/openclaw/issues/91009) – Codex PreToolUse hook spawns CPU‑bound processes, stalls gateway RPC. No fix PR yet.  
- [#109490](https://github.com/openclaw/openclaw/issues/109490) – Codex turn interrupted after client‑delegated tool result (`terminate:true`). No fix PR yet.  
- [#108238](https://github.com/openclaw/openclaw/issues/108238) – Session context incorrectly counts `cacheRead` as total tokens, causing false compaction. **Fix PR:** [#111126](https://github.com/openclaw/openclaw/pull/111126) (open, ready).  
- [#99263](https://github.com/openclaw/openclaw/issues/99263) – Gateway crashes (`ERR_INVALID_STATE`) on Node 26 when handling inbound image media. No fix PR yet.  
- [#99910](https://github.com/openclaw/openclaw/issues/99910) – Memory dreaming run pegs gateway event loop for ~10 min, short‑term recall never persists. No fix PR yet.  
- [#99071](https://github.com/openclaw/openclaw/issues/99071) – Repeated Codex Apps plugin discovery causes excessive disk I/O. No fix PR yet.  

### P2 / Medium
- [#96242](https://github.com/openclaw/openclaw/issues/96242) – Duplicate Telegram messages from multiple independent paths.  
- [#89147](https://github.com/openclaw/openclaw/issues/89147) – Native hook relay starves mid‑turn after long model‑thinking gap.  
- [#86684](https://github.com/openclaw/openclaw/issues/86684) – `sessions_yield` subagent wake compacts parent branch at low context usage (regression).  
- [#87299](https://github.com/openclaw/openclaw/issues/87299) – Spurious “Something went wrong” failures in large Telegram direct sessions.  
- [#94220](https://github.com/openclaw/openclaw/issues/94220) – session‑medic auto‑heal causes stale detached tasks to resume, leading to livelock.

**Note:** Several P1 bugs have fix PRs under review (e.g., #111126, #111167, #111155 for auth‑provider issues). The community is actively debugging #110763 and #108435.

---

## 6. Feature Requests & Roadmap Signals

The most requested features (by comment count and reactions) are strong candidates for the next minor release:

- **Masked Secrets** ([#10659](https://github.com/openclaw/openclaw/issues/10659)) – 4 👍, diamond lobster rating. Likely to land soon given security focus.
- **Filesystem Sandboxing Config** ([#7722](https://github.com/openclaw/openclaw/issues/7722)) – 4 👍, long‑standing request. Open since February; could be bundled with security hardening.
- **Model Fallback on Context Length Exceeded** ([#9986](https://github.com/openclaw/openclaw/issues/9986)) – Active again today; config exists but does not trigger on context overflow. Low‑hanging improvement.
- **Everything is a Cron** ([#110950](https://github.com/openclaw/openclaw/issues/110950)) – Brand new, maintainer‑tagged. Proposes unifying heartbeat, watchers, and scheduled automation into one primitive. Could reshape the automation architecture for the next cycle.
- **Telegram Quote/Reply as Durable Inbound Contract** ([#88032](https://github.com/openclaw/openclaw/issues/88032)) – 1 👍, but deep technical discussion. Might be part of Telegram plugin overhaul.
- **WhatsApp Sticker Send Support** ([#7476](https://github.com/openclaw/openclaw/issues/7476)) – small feature with 1 👍; may wait for broader WhatsApp improvements.
- **RISC‑V Docker Image** ([#11977](https://github.com/openclaw/openclaw/issues/11977)) – 0 👍 but important for platform diversity. Low priority likely.

**Predictions for next version (2026.7.2 stable):**  
- Masked secrets (#10659) due to popular demand and security relevance.  
- Model fallback on context exceed (#9986) is a simple config change.  
- Durable ingress drain on remaining channels (#109657) – closed today but adoption on WhatsApp/Discord/Slack may be in progress.  
- “Everything is a cron” (#110950) will likely be a design proposal first, not shipping in the next beta.

---

## 7. User Feedback Summary

### Pain Points (recurring themes)
- **Session state bloating and compaction regressions** – multiple issues (#86684, #108238, #96242, #87299) describe false compaction, duplicate messages, and lost context. Users express frustration with unstable session continuity.  
- **Gateway crashes on upgrade** – #108435 and #110763 show that both stable and beta upgrades break startup for some configurations (Ollama, Minimax). Users are dissatisfied with regression‑prone releases.  
- **Telegram and Discord channel quirks** – duplicate messages (#96242), wrong reply targets (#79308), and silent drops (#49104) erode trust in outbound delivery.  
- **Security concerns** – #10659 (masked secrets) and #7722 (filesystem sandboxing) reflect a user base that wants to run agents safely in production or multi‑tenant environments.  
- **Subagent isolation** – #96975 and #8299 show users want control over how child sessions affect parent context and announcements.

### Satisfaction Signals
- The **remote coding sessions** feature in v2026.7.2‑beta.3 was met with positive GitHub reactions on linked PRs.  
- Many older bugs were closed today (see Section 3), indicating the maintainers are actively triaging and fixing long‑standing issues.  
- The “Masked Secrets” issue (#10659) garnered 4 👍 in a single day, showing appreciation for the proposed solution.

### User‑Reported Workarounds
- Several users mention patching runtime files (e.g., for Telegram quotes) as temporary fixes until official patches land.

---

## 8. Backlog Watch

The following issues are **open**, **important** (P1/P2, diamond/platinum rating), and have **not received recent maintainer action** (no linked fix PR, no product decision). They risk falling behind:

| Issue | Created | Rating | Last Update | Reason for Concern |
|-------|---------|--------|-------------|-------------------|
| [#10659](https://github.com/openclaw/openclaw/issues/10659) – Masked Secrets | 2026‑02‑06 | 🦞 diamond lobster | 2026‑07‑18 (commented) | Needs product decision + security review; 4👍, 13 comments, but no PR yet. |
| [#7722](https://github.com/openclaw/openclaw/issues/7722) – Filesystem Sandboxing | 2026‑02‑03 | 🦞 diamond lobster | 2026‑07‑18 (commented) | Needs maintainer + security review; 4👍. |
| [#9986](https://github.com/openclaw/openclaw/issues/9986) – Model Fallback on Context Exceed | 2026‑02‑05 | 🦞 diamond lobster | 2026‑07‑19 (commented) | Needs maintainer + product decision; simple config change. |
| [#12219](https://github.com/openclaw/openclaw/issues/12219) – Skill Permission Manifest | 2026‑02‑09 | 🌊 off‑meta tidepool | 2026‑07‑18 (commented) | No maintainer review since Feb; 5 comments. |
| [#11977](https://github.com/openclaw/openclaw/issues/11977) – RISC‑V Docker image | 2026‑02‑08 | 🌊 off‑meta tidepool | 2026‑07‑19 (commented) | Needs product decision; low priority but community interest. |
| [#72611](https://github.com/openclaw/openclaw/issues/72611) – Dreaming configurable exclusions | 2026‑04‑27 | 🐚 platinum hermit | 2026‑07‑18 (commented) | Needs maintainer + live repro; 5 comments. |
| [#87441](https://github.com/openclaw/openclaw/issues/87441) – Diagnostics memory thresholds not wired | 2026‑05‑27 | 🦞 diamond lobster | 2026‑07‑18 (commented) | Needs maintainer + product decision; 5 comments. |

**Also flagged:** Several P1 bugs with high impact but no fix PRs (e.g., #91009, #109490, #99263, #99910, #99071) should be escalated to maintainer review quickly, as they affect production deployments and user trust.

---

*Data sourced from openclaw/openclaw GitHub repository. All links point to the relevant issues/PRs. Analysis reflects the state as of 2026-07-19 23:59 UTC.*

---

## Cross-Ecosystem Comparison

# Cross-Project Comparative Report: Personal AI Assistant Open-Source Ecosystem
**Date:** 2026-07-19 | **Analyst:** Senior Ecosystem Analyst

---

## 1. Ecosystem Overview

The personal AI agent open-source ecosystem is experiencing a **plateau of rapid maturation**, where foundational architecture battles are giving way to security hardening, channel parity, and production stability. Three distinct architectural schools dominate: the **TypeScript-first gateway pattern** (OpenClaw, NanoClaw, NullClaw, TinyClaw), the **Rust-based performance-optimized approach** (PicoClaw, IronClaw, Moltis), and the **Python-first research-oriented lineage** (Hermes Agent, LobsterAI, CoPaw). Cross-cutting concerns—masked secrets, session compaction, tool-call lifecycle management, and multi-channel delivery reliability—appear across all stacks, indicating a convergence on the same unsolved problems. The ecosystem is **fragmenting by deployment target** (desktop, mobile, embedded SBC, cloud workers) while **converging on feature sets**, suggesting the next 6 months will reward projects that achieve production-grade stability over those pursuing novel agent architectures.

---

## 2. Activity Comparison

| Project | Issues Updated (24h) | PRs Updated (24h) | Release Status | Community Health Score* | Primary Language |
|---------|---------------------|-------------------|----------------|------------------------|-----------------|
| **OpenClaw** | 368 | 500 | v2026.7.2-beta.3 (active) | ★★★★★ | TypeScript |
| **ZeroClaw** | 50 | 50 | None (high dev) | ★★★★☆ | TypeScript |
| **Hermes Agent** | 50 | 50 | None (high dev) | ★★★★☆ | TypeScript |
| **IronClaw** | 6 | 50 | None (Reborn active) | ★★★★☆ | Rust |
| **NanoClaw** | 18 | 36 | None (stable phase) | ★★★★☆ | TypeScript |
| **CoPaw** | 11 | 7 | v2.0.0.post3 (post-release) | ★★★☆☆ | Python |
| **PicoClaw** | 4 | 12 | None (steady) | ★★★☆☆ | Go |
| **LobsterAI** | 6 | 3 | v2026.7.17 (recent) | ★★☆☆☆ | Python |
| **NanoBot** | 7 | 30 | None (active) | ★★★☆☆ | TypeScript |
| **Moltis** | 1 | 3 | None (low activity) | ★★☆☆☆ | Rust |
| **NullClaw** | 1 | 0 | None (dormant) | ★☆☆☆☆ | Zig |
| **TinyClaw** | 0 | 0 | None (inactive) | ☆☆☆☆☆ | Not visible |
| **ZeptoClaw** | 0 | 0 | None (inactive) | ☆☆☆☆☆ | Not visible |

*\*Health Score: composite of issue closure rate, PR merge velocity, maintainer responsiveness, and community engagement signals. ★★★★★ = exceptional, ★☆☆☆☆ = critical concern.*

**Key observations:**
- **OpenClaw dominates** with nearly 10x the issue/PR volume of any peer, reflecting either strong community, aggressive issue labeling, or both.
- **ZeroClaw, Hermes Agent, and IronClaw** form a second tier with high sustained activity.
- **NullClaw, TinyClaw, and ZeptoClaw** show effectively zero activity—these projects risk deprecation.

---

## 3. OpenClaw's Position

### Advantages vs. Peers
- **Scale of community engagement:** 368 issues and 500 PRs updated in 24 hours dwarfs all peers. Even accounting for labeling granularity, the community is an order of magnitude larger.
- **Release velocity:** v2026.7.2-beta.3 with remote coding sessions and native automation shows OpenClaw is pushing into new use cases (cloud workers, programmable agents) while peers are still fixing channel bugs.
- **Bug closure rate:** 144 issues closed in 24 hours—faster triage than any competitor. 12 high-impact bugs closed today alone (Telegram, Discord, memory, session management).
- **Channel breadth:** Telegram, Discord, LINE, Molty, GitHub Copilot, with dedicated fixes shipping daily.

### Technical Approach Differences
- **Gateway-as-core:** OpenClaw's architecture treats the gateway as the central runtime, enabling multi-channel, multi-model, multi-session orchestration from a single process. This contrasts with IronClaw's capabilities-as-module approach and CoPaw's Python-first monolithic agent.
- **Beta-driven innovation:** Willingness to ship experimental features (remote coding sessions, automation nodes) as betas, whereas PicoClaw and Moltis merge features only after weeks of review.
- **Security posture:** Masked Secrets (#10659) and Filesystem Sandboxing (#7722) have strong community support but lack merged PRs—OpenClaw is *discussing* rather than *shipping* security features, unlike ZeroClaw which merged constant-time comparisons this week.

### Community Size Comparison
OpenClaw's community appears **5-10x larger** than any single peer based on issue volume. However, this may partially reflect internal tooling (e.g., automated issue generation from telemetry). The gap is narrower in unique contributor counts; Hermes Agent and ZeroClaw show comparable breadth of external PR authors.

**Risk:** OpenClaw's rapid beta cadence leads to stability regressions (gateway startup failures #108435, #110763) that erode trust among production users. The project risks becoming "always in beta" if the gap between beta and stable becomes too wide.

---

## 4. Shared Technical Focus Areas

The following requirements emerged across **multiple projects**, indicating industry-wide pain points:

| Requirement | Projects Affected | Specific Needs | Urgency |
|------------|------------------|----------------|---------|
| **Masked/Credential Secrets** | OpenClaw (#10659), ZeroClaw (#9127 KeySource), IronClaw (#6247 plaintext tokens), NanoClaw (#sonic proxy) | Prevent prompt injection leaks, support env-var fallbacks, encrypt MCP tokens at rest | **Critical** – multiple security incidents |
| **Session Compaction & Context Management** | OpenClaw (#108238, #86684), NanoBot (#2343 overflow), CoPaw (#6241 infinite loop), Hermes Agent (#27579 idle compression) | False compaction, 2k msg caps, subagent isolation, context-length fallback | **High** – impacts reliability |
| **Channel Message Delivery Reliability** | OpenClaw (#96242 duplicates), NanoClaw (#2506 dedup drop), Hermes Agent (#67041 no /queue images), PicoClaw (#3264 split hang) | Silent drops, duplicate messages, lost attachments, split infinite loops | **High** – core UX |
| **Local LLM Optimization** | NanoBot (#4867 Ollama caching), Hermes Agent (#66829 vision preprocessing), ZeroClaw (#9109 Hailo-Ollama) | Prompt prefix caching, VRAM management, hardware-specific backends | **Medium** – growing self-hosters |
| **Multi-Turn & Subagent Isolation** | OpenClaw (#96975 parent pollution), IronClaw (capability-result collapse), CoPaw (#6244 memory isolation by project) | Control content flow between agents, prevent context poisoning | **Medium-High** – advanced use cases |
| **Channel Parity (Telegram, Matrix, GitHub)** | OpenClaw (#79077 Telegram bots), ZeroClaw (#2079 GitHub restore), PicoClaw (#3193 Simplex), Moltis (#1159 Slack base URL) | Feature-equivalent across all channels | **Medium** – fragmentation risk |

**Notable:** No project has achieved full **supply-chain security** (ZeroClaw's RFC was closed wontfix), and **filesystem sandboxing** remains theoretical across the ecosystem.

---

## 5. Differentiation Analysis

| Dimension | OpenClaw | ZeroClaw | IronClaw | Hermes Agent | CoPaw | NanoClaw |
|-----------|----------|----------|----------|--------------|-------|----------|
| **Primary Use Case** | Universal gateway + cloud workers | Security-hardened enterprise agent | Academic/research multi-agent | Desktop-first personal assistant | Chinese-market coding agent | Lightweight mobile/SBC agent |
| **Technical Stack** | TypeScript, Gateway-centric | TypeScript, Security-focused | Rust, Capability-driven | TypeScript, Electron desktop | Python, AgentScope framework | TypeScript, Minimal runtime |
| **Release Philosophy** | Beta-fast, ship often | Conservative, security gates | Reborn architecture rewrite | Stable with fast bugfixes | Post-release patches | Steady maintenance |
| **Target User** | Developers, integrators | Security-conscious ops teams | Researchers, Rustaceans | Power users, desktop users | Chinese developers, Qwen users | Raspberry Pi, mobile users |
| **Community Model** | Maintainer-driven + large contributor base | Strong external contributor base | Core-team dominated | Contributor-driven (50/50) | Contributor-heavy (first-timers) | Small but active |
| **Key Differentiator** | Feature velocity & channel breadth | Security & credential hygiene | Formal capability modeling | Desktop UX & voice integration | Chinese LLM & sandbox | Minimal resource footprint |

**Strategic insight:** OpenClaw is becoming the **"Linux kernel of AI agents"** – a broad, fast-moving core that many projects build upon. IronClaw is pursuing the **"Rust-rewrite story"** with formal methods appeal. Hermes Agent owns **desktop UX**. CoPaw dominates **Chinese market coding use cases**. NanoClaw targets the **edge/SBC niche**. This specialization suggests the ecosystem will remain diverse rather than consolidating around a single project.

---

## 6. Community Momentum & Maturity

### Tier 1: High Velocity, Early Maturity (Active Daily, Shipping Rapidly)
- **OpenClaw** – Momentum: **Very High** | Maturity: **Beta-level**. Shipping features faster than stabilizing regressions. P0/P1 bugs piling up (3 release-blocking) but closure rate is high.
- **ZeroClaw** – Momentum: **High** | Maturity: **Pre-stable**. Intense security hardening and channel work. 2 S1 issues unresolved but active PR pipeline.
- **IronClaw** – Momentum: **High** | Maturity: **Architecture transition**. Reborn rewrite progressing rapidly, but v1 retirement creates migration burden. 35 PRs merged today.

### Tier 2: High Activity, Stabilizing
- **Hermes Agent** – Momentum: **High** | Maturity: **Post-stable bugfix phase**. 10 PRs merged, 24 issues closed. P1 bugs fixed within 24h. Desktop crash fixed.
- **NanoClaw** – Momentum: **Medium-High** | Maturity: **Stable maintenance**. 17 PRs merged, 16 issues closed. Focus on channel adapters and credential fixes.
- **CoPaw** – Momentum: **Medium** | Maturity: **Post-release regression recovery**. v2.0.0.post3 introduced regressions; community actively patching.

### Tier 3: Moderate Activity, Slow Cadence
- **PicoClaw** – Momentum: **Low-Medium** | Maturity: **Steady but slow**. 8 PRs merged but 2 critical bugs opened (gateway crash, infinite loop). Three stale PRs waiting 2+ weeks.
- **NanoBot** – Momentum: **Medium** | Maturity: **Bugfix phase**. 16 PRs merged, but Ollama caching issue remains open with no fix.
- **LobsterAI** – Momentum: **Low** | Maturity: **Stale backlog clearing**. 2 stale PRs merged, but 6 bugs from April remain unfixed.

### Tier 4: Dormant / Critical Concern
- **Moltis** – Momentum: **Very Low** | Maturity: **Single maintainer bandwidth constraint**. Only 1 issue and 3 PRs; feature request #574 open since April with no maintainer response.
- **NullClaw** – Momentum: **Near Zero** | Maturity: **Build failure blocks all users**. Issue #868 (Android build) untouched for 3 months.
- **TinyClaw**, **ZeptoClaw** – **Fully inactive.** Neither has any activity. Should be considered at risk of abandonment.

---

## 7. Trend Signals

### From Community Feedback → Industry Implications

1. **Security is becoming table stakes, not differentiator.** Masked secrets, credential encryption, and filesystem sandboxing appear across 6+ projects. The absence of these features is now a *competitive disadvantage*. Expect mandatory security baselines within 6 months—projects without credential encryption (#9127, #10659 patterns) will lose enterprise adoption.

2. **Local LLM optimization is the next battleground.** With NanoBot, Hermes, and ZeroClaw all hitting Ollama caching/VAL failures, the ecosystem is hitting the wall of prompt prefix diversity. **Prompt prefix caching** (preserving exact prefixes to leverage KV cache) will be a critical optimization. Projects that solve this—especially for hardware backends like Hailo/RISC-V—will win the self-hosting market.

3. **Channel delivery reliability is still unsolved.** Silent drops, duplicate messages, and split logic bugs are the #1 source of user frustration across every project. The industry needs a **standardized delivery contract** (idempotency keys, acknowledgment protocols, retry policies). Until then, production users must build their own reliability layer on top of brittle agent outputs.

4. **The "gateway" architecture is winning.** OpenClaw, ZeroClaw, and NanoClaw all share a gateway-centric pattern. IronClaw's Reborn is moving toward this model. Monolithic agents (CoPaw, LobsterAI) are struggling with channel fragmentation. The gateway pattern's advantage for multi-channel, multi-model orchestration is becoming decisive.

5. **ARM/RISC-V mobile and edge deployment is underserved.** Multiple projects (ZeroClaw #7911, PicoClaw #3205 ARMv7, NullClaw #868 Android) have build failures on non-x86 platforms. As mobile AI agents become viable (phone-based personal assistants), the first project to deliver **first-class ARM64/Android support** will capture a rapidly growing segment.

6. **Subagent isolation is the new frontier.** Developers want parent-child agent workflows without context pollution. OpenClaw (#96975), IronClaw (capability-outcome collapse), and CoPaw (#6244) are all addressing this independently. A standardized subagent protocol (likely built on MCP or ACP) could emerge as a shared dependency.

7. **"Everything is a Cron"** (#110950 in OpenClaw) signals convergence of scheduling, automation, and event-driven triggers. The industry is moving away from separate cron/trigger/automation UIs toward a unified "schedule + event → action" primitive. This could reshape how agents handle proactive behavior vs. reactive responses.

### Value for AI Agent Developers

- **Short-term (next 3 months):** Prioritize credential security and session reliability over new features. Users are frustrated by data loss and setup friction. Fixing delivery consistency (dedup, split logic) will yield the highest user satisfaction ROI.
- **Medium-term (3-9 months):** Invest in local LLM caching and ARM/RISC-V support. The self-hosted mobile agent market is unserved. Projects that make local models fast and portable will capture the next wave of users.
- **Long-term (9-18 months):** Prepare for subagent standardization and unified automation primitives. The gateway architectural pattern will likely become the dominant reference—align your runtime abstractions accordingly or risk being forked.

**Bottom line for decision-makers:** If you need *production reliability today*, invest in OpenClaw (stability risks) or Hermes Agent (desktop stability). If you need *security-first deployment*, watch ZeroClaw's credential encryption progress. If you target *Chinese markets*, CoPaw is your best bet. For *edge/mobile*, NanoClaw and PicoClaw are the only viable options—but both need significant stability work before production readiness.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest – 2026-07-19

## Today’s Overview
The project remains highly active, with 7 issues and 30 pull requests updated in the last 24 hours. Sixteen PRs were merged or closed, reflecting strong ongoing maintenance and feature integration. No new releases were published today. The community continues to report real‑world pain points around context limits, Windows encoding, and configuration persistence, while the core team is shipping targeted fixes for session management, memory consolidation, and subagent behavior.

## Releases
*No new releases today.*

## Project Progress
Six pull requests were merged/closed today, advancing several areas:

- **Agent & Tool Result Recovery** – PR #4925 (`fix(agent): guide recovery from oversized tool results`). Prevents crashes when tool output exceeds the model’s context window by capping and instructing the model to retry.
- **Deployment** – PR #4937 (`feat: add one-click deploy to render support`). Adds a Render Blueprint for straightforward cloud deployment with persisted state.
- **Memory Consolidation** – Three PRs from contributor yu‑xin‑c:  
  - #4621 (`feat(memory): gate archive facts with provenance context`) improves archive quality by including `MEMORY.md` excerpts.  
  - #4626 (`feat(memory): add opt-in eager consolidation`) introduces an optional eager archiving pass for proactive memory trimming.  
  - #4627 (`fix(memory): preserve delivery context during consolidation`) ensures channel‑delivery messages are not lost during replay‑window consolidation.
- **Subagent Aggregation** – PR #4624 (`feat(subagent): add aggregated result mode`) allows buffering subagent results before publishing, reducing message noise.

Additionally, security issue #4886 (Docker Compose confinement) and resource leak #4786 (unbounded `SessionManager._cache`) were both closed, indicating fixes have been applied.

## Community Hot Topics
- **Issue #2343 – Context length overflow** (15 comments, closed). A user configured `maxTokens` and `contextWindowTokens` but the model threw a 32k‑token limit error. The discussion reveals confusion about how to reduce chat history carried into each turn. This is a recurring pain point that the merged PR #4925 directly addresses.
- **Issue #4867 – Ollama caching performance** (5 comments, closed). A follow‑up to #2463: NanoBot adds ~60 seconds per turn when using Ollama due to changing prompt prefixes, breaking local model usability even with 32 GB VRAM. The request is to preserve exact prefix to leverage prompt caching. No fix has been merged yet, but the issue is closed, suggesting either a workaround or a decision to defer.

Other issues (#4940, #4980, #4975) are new and have few comments but signal emerging bugs (see Bugs & Stability).

## Bugs & Stability
Several bugs reported today, ranked by severity:

1. **GitStore fails with non‑default workspace** (Issue #4980, P1). `GitStore` passes relative paths to Dulwich, causing initialization failure when the workspace differs from the working directory. **Fix PR submitted** (#4979) resolves paths relative to workspace.
2. **CLI apps lose UTF‑8 output on Windows non‑UTF‑8 locales** (Issue #4975, P2). `subprocess.run` without explicit encoding causes `UnicodeDecodeError` on CP936/GBK systems. **Fix PR submitted** (#4976) adds `encoding='utf-8'`.
3. **Legacy session filename metadata lost** (Issue #4940, P2). Sessions stored with old lossy filenames lose `workspace_scope` after restart. **Fix PR submitted** (#4977) adds fallback to legacy paths in `read_session_metadata`.
4. **Session message cap missing at persistence boundary** (Issue #4956, P1). The 2,000‑message limit was not enforced when SDK‑ingested sessions were saved. **Fix PR submitted** (#4956) enforces the cap during `SessionManager.save()`.
5. **Infinite loops in message splitting** (PRs #4971, #4981, #4982). Zero or negative `max_len`/`limit` caused `split_message`, Telegram, and Feishu splitters to hang. **Fix PRs** (#4971, #4981, #4982) now return the input unsplit.

Additionally, two minor null‑coercion fixes were submitted for cron and trigger stores (PRs #4983, #4985, #4986) where JSON `null` values triggered `TypeError`.

## Feature Requests & Roadmap Signals
- **Prompt prefix caching** (Issue #4867, closed). The demand for a stable prefix to enable LLM‑side caching suggests this will be a high‑priority optimization for the next release, especially for Ollama users.
- **Session‑local triggers** (PR #4942, open). Allows agents to create/list/enable/disable triggers scoped to a conversation. This is a new capability that could ship soon if conflicts are resolved.
- **RTK command rewriter** (PR #4854, open). An opt‑in tool that rewrites shell commands using RTK, improving expressiveness for agent‑driven execution. Likely to be included after conflicts are addressed.
- **WebUI polish** (PR #4963, open). Replaces raw tool logs with a unified single‑line “activity language” covering many agent actions. This improves user experience and may be part of a v0.8 interface overhaul.

## User Feedback Summary
- **Context‑window management frustration** (#2343) – Users struggle to control how much history is sent, leading to expensive errors. The merged PR #4925 is a direct fix, but usability around configuration (`contextWindowTokens`) remains a learning curve.
- **Poor performance with local LLMs** (#4867) – Ollama users report unusably long turn times. The caching proposal was well‑received but not yet implemented, causing dissatisfaction among self‑hosters.
- **Configuration persistence confusion** (#4940) – Loss of workspace scope after restart surprises users who relied on legacy session files. The quick fix (#4977) should restore trust.
- **Security awareness** (#4886) – A contributor flagged excessive privileges in the default Docker Compose. The issue was closed, implying a security hardening update is already live.

## Backlog Watch
- **PR #4854** (`feat(exec): add RTK command rewriter`). Open since July 8, tagged with a `conflict` label. No recent updates. This feature has significant scope and may require maintainer attention to resolve merge conflicts.
- **Issue #4940** (`read_session_metadata() lacks legacy filename fallback`). Only one comment so far, but the fix PR #4977 is already in review. Low risk, but still awaiting merge.
- **Issue #4975** (`CLI Apps lose UTF-8 subprocess output on Windows`). Open since yesterday, with a fix PR (#4976) submitted same day. Should be merged quickly; no further action needed from maintainers except review.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-07-19

## Today's Overview
The project saw very high activity in the last 24 hours, with **50 issues and 50 PRs updated**. 24 issues and 10 PRs were closed/merged, indicating a strong focus on bug fixing and stabilization. No new releases were published. The community continues to report a mix of critical platform crashes (Windows, Telegram, macOS), integration bugs (OpenRouter, MCP, Codex), and feature requests around model routing and tool efficiency. Several high-severity issues received fix PRs, reflecting active maintainer responsiveness.

## Releases
*No new versions were released in the last 24 hours.*

## Project Progress
Ten pull requests were merged or closed today. Notable completed changes include:

- **fix(compression): preserve human intent and durable handoffs** – Merged via PR #67275 (salvaged from #66637). Distinguishes real user turns from synthetic scaffolding to avoid compression loss.
- **fix(cli): restore session cwd on mid-chat /resume and /sessions** – PR #67287 closed. Ensures interactive session resumption restores the original working directory.
- **fmt(js): `npm run fix` auto-fix** – PR #67284 merged: automated formatting fixes.
- **Telegram voice interrupt duplicate transcriptions** – Issue #61455 closed, likely fixed by a related PR.
- **OpenRouter “Unknown” App identification** – Issue #61099 closed.
- **Dashboard model change with `--open-profile`** – Issue #66406 closed (fix merged).
- **Desktop not opening after failed self-update** – Issue #66356 closed.
- Several other P3/P2 bugs closed, including #66891 (invalid obsidian_mem issue) and #67083 (terminal tool session key cross-contamination).

## Community Hot Topics
The most active discussions (by comment count) center on platform stability and integration gaps:

- **[Issue #38216]** (10 comments, closed) – Hermes Desktop crash on Windows 11 with 0x80000003 breakpoint. A P1 bug now resolved.  
- **[Issue #66829]** (7 comments, open) – Desktop always preprocesses images through auxiliary vision model even when main model supports vision. Users want direct image passing to avoid quality loss.  
- **[Issue #66616]** (6 comments, open) – Skills index is stale/degraded (29.8h old vs 26h limit). Probes the automation pipeline.  
- **[Issue #61099]** (5 comments, closed) – OpenRouter logs show “Unknown” app intermittently. Root cause: missing HTTP header propagation.  
- **[Issue #66950]** (5 comments, closed) – Prompt-based rule compliance is probabilistic despite identity/memory loading. User frustration with unenforced rules.  
- **[Issue #66360]** (4 comments, open) – Codex app-server tool events never reach WebSocket clients; webSearch not bridged. Breaks real-time UI updates.  
- **[Issue #67233]** (4 comments, closed) – Telegram image sending fails because vision_analyze tool is missing. User notes inconsistent behavior between clients.

*No PRs had recorded comment counts, but PR #67207 (fix desktop chat reseeding) and #67291 (supersedes #67207) appear to be attracting review attention.*

## Bugs & Stability
New and ongoing high-severity bugs reported today:

| Severity | Issue | Summary | Fix PR | Status |
|----------|-------|---------|--------|--------|
| **P1** | #67142 | Anthropic stale-stream watchdog corrupts SQLite via TLS FD reuse (critical data loss) | – | Closed |
| **P1** | #66377 | Telegram polling reconnect ladder stalls; gateway silently dead, `Restart=always` never fires | – | Closed |
| **P2** | #66829 | Desktop always preprocesses images via auxiliary vision model, ignoring main model vision | – | Open |
| **P2** | #66360 | Codex app-server tool events never reach WebSocket clients; webSearch items not bridged | – | Open |
| **P2** | #67120 | Changing model via SSH/config no longer propagates to active Telegram gateway sessions | – | Open |
| **P2** | #67187 | MCP parked server revival reconnects but does not re-register tools | – | Open |
| **P2** | #67277 | Webhook multiplexing loads default profile's skills instead of URL-resolved profile's | #67280 | Open |
| **P2** | #67165 | cua-driver macOS ScreenCaptureKit `display_count=0` despite TCC permissions (macOS 26.5.2) | – | Open |
| **P2** | #67041 | `/queue` slash command does not accept images in Discord gateway | – | Closed |
| **P2** | #65631 | Provider error chunk (SSE with HTTP 200 + error) misclassified as “empty stream”, retried forever | – | Open |
| **P3** | #67158 | CLI `lockfile` not cleaned on Windows exit, causes ghost-lock on multi-instance runs | – | Open |
| **P3** | #67286 | Desktop files panel auto-opens after first reply in a new session | #67288 | Open |

Fix PRs are in review for #67277 (#67280) and #67286 (#67288). Several P2 bugs remain open without attached fix PRs, including the critical Codex event bridge (#66360) and provider error misclassification (#65631).

## Feature Requests & Roadmap Signals
User-requested features with the most traction:

- **Smart model routing** (#66860) – Auto-select model based on task complexity. Currently single-model per session; users want cost optimization.
- **Per-session tool schema filtering** (#67273) – Tool schemas consume 83% of every API request; need lazy loading and filtering.
- **Idle-triggered context compression** (#27579, open since May) – Avoid pre-flight delays by compressing during idle periods.
- **Boardstate desktop plugin** (#66415, closed as “not planned”) – Request for a Kanban board in the Electron app.
- **LM Studio JIT model loading** (#67015, closed as duplicate) – Allow Hermes to release VRAM between tasks.
- **Claude Agent SDK provider** (#65982, PR open) – Official subscription OAuth integration with fail-closed billing.
- **WebSocket transport for custom providers** (#67256, PR open) – Opt-in WebSocket for codex_responses endpoints.
- **Credential pool switch command** (#67285, PR open) – CLI command to switch between same-provider credentials.

*Likely next-version candidates:* The compression fix (#67275) is already merged. Smart model routing and tool schema filtering are still in early discussion. WebSocket transport and credential pool switching may land in 0.19.x given active PRs.

## User Feedback Summary
**Pain points (explicit dissatisfaction):**

- Desktop crash on Windows 11 (now fixed) caused lost trust.
- Vision preprocessing forces text description even on multimodal models – users feel they are not getting full capability.
- Telegram/ Discord image attachments not working reliably across different contexts (/queue, voice interrupts).
- MCP tools failing to re-register after reconnect breaks automation workflows.
- “Unknown” OpenRouter app label makes monitoring and auditing difficult.
- Profile scoping bugs (model change, webhook skills) cause inconsistent behavior across sessions.

**Satisfaction signals:**

- Fast turnaround on P1 bugs (Telegram gateway dead, SQLite corruption) – fixes merged within 24–48 hours.
- Community contributors actively submitting fix PRs (e.g., #67280, #67288, #67281).
- Users appreciate the robustness of identity/memory loading even if rule compliance remains probabilistic.

## Backlog Watch
Issues that have remained open for an extended period without maintainer resolution:

- **[#27579]** (open since May 17, 3 comments) – Idle-triggered context compression. No recent maintainer activity. Would meaningfully improve UX for long sessions.
- **[#58609]** (open since July 5, 1 comment) – Anthropic adapter tests not isolated from Claude Code macOS Keychain. Security-risk flagged but no fix in progress.
- **[#65631]** (open since July 16, 2 comments) – Provider error chunk misclassification leads to infinite retries. Needs maintainer triage – could cause severe cost/availability issues.
- **[#66360]** (open since July 17, 4 comments) – Codex app-server event bridge broken for WebSocket clients. A key integration gap for real-time UI.
- **[#67158]** (open since July 18, 1 comment) – Windows CLI lockfile ghost-lock. Reported by multiple users but still awaiting triage.

These long-standing items should be reviewed for prioritization in the upcoming sprint to prevent deepening technical debt and user frustration.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-07-19

## 1. Today's Overview

The PicoClaw project shows moderate activity over the last 24 hours. Four issues were updated (two closed as stale, two new open bug reports), and twelve pull requests saw changes — eight of which were merged or closed. No new releases were tagged. Two of the closed PRs addressed significant feature work (agent-specific runtime overrides and a configurable default model fallback chain), while several other long-running branches (including a major agent collaboration bus) were finally merged. Two fresh bugs surfaced: a gateway startup crash involving the DeltaChat channel type and a loop condition in message splitting. Overall, the project is steadily consuming its stale backlog, but maintainers should watch the newly opened stability issues.

## 2. Releases

_No new releases have been published. This section is omitted._

## 3. Project Progress (Merged / Closed PRs)

Eight pull requests were merged or closed in the last 24 hours, bringing several features and fixes into the codebase:

- **Agent collaboration system** – PR [#2937](https://github.com/sipeed/picoclaw/pull/2937) (`Feat/agent collaboration`, merged after weeks of review) introduces a durable internal Agent Collaboration Bus with per-agent mailboxes, isolated session threads, structured envelopes, and permission-aware dispatch. This is a foundational change.

- **Agent-specific runtime overrides** – PR [#3225](https://github.com/sipeed/picoclaw/pull/3225) (`Support agent-specific runtime overrides`, closed) allows `agents.list` entries to define `max_tokens`, summarization thresholds, and `split_on_marker`, applied per-agent when building an `AgentInstance`.

- **Configurable default fallback chain** – PR [#3200](https://github.com/sipeed/picoclaw/pull/3200) (`feat(models): add configurable default fallback chain`, closed) adds a dedicated workflow on the models page to set default model, add fallback models, reorder, and persist via backend API.

- **WhatsApp typing presence** – PR [#3242](https://github.com/sipeed/picoclaw/pull/3242) (`feat(whatsapp): add native typing presence`, closed) implements `channels.TypingCapable` for `WhatsAppNativeChannel`, sending `composing` immediately and refreshing every 10 seconds.

- **OAuth refresh fix (provider-correct & concurrency-safe)** – PR [#3241](https://github.com/sipeed/picoclaw/pull/3241) (`fix(auth): make OAuth refresh provider-correct and concurrency-safe`, closed) switches OpenAI to JSON body, keeps others on form encoding, omits scopes during refresh, and adds a 30-second debounce.

- **Seed XML tool calls recovery** – PR [#3165](https://github.com/sipeed/picoclaw/pull/3165) (`fix(openai_compat): recover Seed XML tool calls`, closed) recovers Volcengine Doubao Seed `<seed:tool_call>` XML blocks from OpenAI-compatible responses.

- **Dependency bumps** – PRs [#3211](https://github.com/sipeed/picoclaw/pull/3211) (eslint 10.6.0) and [#3208](https://github.com/sipeed/picoclaw/pull/3208) (mautrix 0.28.1) were merged via Dependabot.

## 4. Community Hot Topics

None of the recent issues or PRs have accumulated more than one comment, so there is no single highly debated thread. However, the two freshly opened issues are the most likely to attract attention:

- **[#3265](https://github.com/sipeed/picoclaw/issues/3265)** – Gateway fails to start with `channel deltachat has unknown type deltachat` even when DeltaChat is not configured. This appears to be an unexpected validation/code path issue that could block users with standard configs.

- **[#3264](https://github.com/sipeed/picoclaw/issues/3264)** – `channels.SplitMessage` hangs forever when a fenced code block's info string extends beyond a split point. This is a critical runtime bug that can stall message processing.

Underlying need: users expect the gateway to be resilient to configuration choices and channel splitting to be robust — especially for Markdown-heavy messages.

## 5. Bugs & Stability

| Issue | Severity | Description | Fix PR Exists? |
|-------|----------|-------------|----------------|
| [#3265](https://github.com/sipeed/picoclaw/issues/3265) | **High** | Gateway startup fails with an error about an unknown DeltaChat channel type even when the channel is not configured. Blocks all gateway instances if the `deltachat` channel package is compiled in. | No |
| [#3264](https://github.com/sipeed/picoclaw/issues/3264) | **Critical** | `channels.SplitMessage` enters an infinite loop when the info string of a fenced code block exceeds the split point. Can cause agent threads to freeze. | No |

Both bugs were opened within the last 24 hours and have no associated fix PRs yet. Given the infinite loop nature of #3264, it should be prioritized. The gateway startup failure (#3265) may be a configuration or dependency compilation issue — investigation needed.

No regressions were reported from recently merged features.

## 6. Feature Requests & Roadmap Signals

The following user-requested capabilities are visible from the open PR pipeline:

- **Simplex channel** – PR [#3193](https://github.com/sipeed/picoclaw/pull/3193) (open since June 27) adds a new messenger integration. It is the largest open feature PR and may land in the next minor release.

- **9router gateway support + ARMv7 build** – PR [#3205](https://github.com/sipeed/picoclaw/pull/3205) (open since July 2) fixes parsing of 9router’s API responses and adds a Linux ARMv7 build target for Raspberry Pi use.

- **Routing ID normalization fix** – PR [#3202](https://github.com/sipeed/picoclaw/pull/3202) (open since July 1) ensures agent/account IDs strip leading/trailing underscores to match the documented regex.

- **Go stdlib vulnerability remediation** – PR [#3248](https://github.com/sipeed/picoclaw/pull/3248) (open since July 10) bumps Go to 1.25.12 to fix `crypto/tls` and `os` issues flagged by `govulncheck`. This will likely be merged quickly.

Prediction: The next minor release (v0.x) will likely include the Simplex channel, 9router/ARM support, the routing fix, and the Go version bump. The agent collaboration system (#2937) is already merged and will ship in the next release.

## 7. User Feedback Summary

While no explicit user comments appear in the issue data, the closed PRs indicate direct pain points and satisfaction improvements:

- **Pain point: OAuth refresh failing for OpenAI users** – PR #3241 directly addresses a race condition and incompatible payload semantics. Users integrating with OpenAI experienced sporadic token refresh failures.

- **Pain point: No typing indicator on WhatsApp** – PR #3242 adds native presence, addressing feedback that agents felt unresponsive on WhatsApp.

- **Pain point: Seed (Volcengine Doubao) tool calls leaking raw XML** – PR #3165 fixes a rendering and functionality issue for users of that provider.

- **Satisfaction: Agent collaboration and per-agent overrides** – These features (PRs #2937, #3225) respond to advanced use-case requests for multi-agent orchestration and granular control.

## 8. Backlog Watch

| Item | Type | Status | Notes |
|------|------|--------|-------|
| [#3202](https://github.com/sipeed/picoclaw/pull/3202) | PR (open) | Stale since Jul 1, last updated Jul 18 | Routing ID normalization fix. Needs review from maintainers. |
| [#3205](https://github.com/sipeed/picoclaw/pull/3205) | PR (open) | Stale since Jul 2, last updated Jul 18 | 9router gateway support + ARMv7 build. Tested on Raspberry Pi; waiting for merge. |
| [#3248](https://github.com/sipeed/picoclaw/pull/3248) | PR (open) | Stale since Jul 10, last updated Jul 18 | Go version bump for security. Low risk; should be merged soon. |
| [#3193](https://github.com/sipeed/picoclaw/pull/3193) | PR (open) | Stale since Jun 27, last updated Jul 18 | Simplex channel; no recent maintainer comments. |

None of these items are flagged as “critical”, but #3202 and #3205 have been waiting for attention for over two weeks. The two fresh bugs (#3265, #3264) should be triaged and assigned promptly to avoid accumulating further stale entries.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-07-19

## 1. Today's Overview

NanoClaw saw high activity on 19 July 2026, with 18 issues and 36 pull requests updated in the past 24 hours. Of these, 16 issues were closed and 2 remain open, while 17 PRs were merged or closed and 19 are open. No new releases were cut today. The project is in a strong maintenance and stabilization phase, with contributors actively closing bugs, improving channel adapters (Signal, WhatsApp, Slack), and refining the CLI and setup processes. The community continues to drive fixes for edge cases in container runners, credential proxies, and session handling.

## 2. Releases

No new releases were published on this date.

## 3. Project Progress

**17 pull requests were merged or closed today**, indicating steady progress on both bug fixes and feature additions. Notable merged/closed PRs include:

- **Credential proxy fixes** (multiple authors): PRs [#1100](https://github.com/nanocoai/nanoclaw/pull/1100), [#1185](https://github.com/nanocoai/nanoclaw/pull/1185), [#1212](https://github.com/nanocoai/nanoclaw/pull/1212), and [#1267](https://github.com/nanocoai/nanoclaw/pull/1267) all addressed missing path prefix propagation from `ANTHROPIC_BASE_URL` in the credential proxy, ensuring compatibility with third-party Claude API providers like MiniMax.
- **Slack setup improvements** ([alipgoldberg](https://github.com/alipgoldberg)): Merged PRs [#2296](https://github.com/nanocoai/nanoclaw/pull/2296), [#2299](https://github.com/nanocoai/nanoclaw/pull/2299), [#2303](https://github.com/nanocoai/nanoclaw/pull/2303), [#2304](https://github.com/nanocoai/nanoclaw/pull/2304), [#2305](https://github.com/nanocoai/nanoclaw/pull/2305) — these enhance the Slack integration wizard with clearer step labeling, token-paste preparation, member-ID lookup fallbacks, and plain-language descriptions.
- **Photon homepage URL fix** ([alipgoldberg](https://github.com/alipgoldberg)): PR [#2314](https://github.com/nanocoai/nanoclaw/pull/2314) corrected the iMessage remote-mode card from a parked domain to the legitimate Photon project URL (`https://photon.codes`).

Other merged PRs include container-runner fixes, mount-security toleration improvements, and Signal adapter bug fixes.

**16 issues were closed**, covering bugs, feature requests, and test tasks. Among them: the critical `send_message` dedup bug ([#2506](https://github.com/nanocoai/nanoclaw/issues/2506)), false quota error logging ([#3016](https://github.com/nanocoai/nanoclaw/issues/3016)), systemd detection under `su -` ([#2482](https://github.com/nanocoai/nanoclaw/issues/2482)), and WhatsApp media drop ([#2894](https://github.com/nanocoai/nanoclaw/issues/2894)).

## 4. Community Hot Topics

The most active discussions today revolve around two categories:

**Critical messaging bugs** — Issue [#2506](https://github.com/nanocoai/nanoclaw/issues/2506) (4 comments, closed) describes a scenario where agent responses are silently dropped when two turns complete within 60 seconds or a follow-up arrives mid-stream. This was closed with a fix that appears related to PR [#2531](https://github.com/nanocoai/nanoclaw/pull/2531) (still open), which aims to suppress duplicate text when `send_message` fires mid-turn. The underlying need is robust, non-lossy message delivery in high-frequency chat scenarios.

**Noisy error logs** — Issue [#3016](https://github.com/nanocoai/nanoclaw/issues/3016) (3 comments, closed) reported that every `rate_limit_event` is logged as a quota error even when the status is “allowed,” causing 80+ alarming log lines per week in normal operation. The fix improves log hygiene and reduces false alerts for users.

Also attracting attention: Issue [#2482](https://github.com/nanocoai/nanoclaw/issues/2482) (3 comments, closed) on systemd detection in Proxmox LXCs, reflecting the complexity of running the setup wizard in containerized environments.

## 5. Bugs & Stability

**Critical severity:**
- **Message dedup drop** ([#2506](https://github.com/nanocoai/nanoclaw/issues/2506)) — closed, with fix in PR [#2531](https://github.com/nanocoai/nanoclaw/pull/2531) (still open). The issue caused client timeouts and silent response loss when messages arrived within 60 seconds or during streaming.
- **WhatsApp mention mode gap** ([#3085](https://github.com/nanocoai/nanoclaw/issues/3085), open) — when using `engage_mode='mention'`, typed `@name` text without an autocomplete pill never triggers the agent, and the `accumulate` policy masks the failure. This is a configuration-level bug affecting group chats.

**High severity:**
- **WhatsApp media silently dropped** ([#2894](https://github.com/nanocoai/nanoclaw/issues/2894), closed) — Baileys CDN fetch failures were swallowed, losing attachments. Fix merged.
- **Container-runner staleness check** ([#2784](https://github.com/nanocoai/nanoclaw/issues/2784), closed) — session source sync only watched `index.ts`, missing changes in `ipc-mcp-stdio.ts`. Fixed.

**Medium severity:**
- **False quota errors** ([#3016](https://github.com/nanocoai/nanoclaw/issues/3016), closed) — all rate limit events logged as quota errors; mental noise but not data loss.
- **Systemd detection in su -** ([#2482](https://github.com/nanocoai/nanoclaw/issues/2482), closed) — wizard fell back to nohup wrapper on healthy Debian LXCs. Fixed.

**Open issues needing attention:** [#3085](https://github.com/nanocoai/nanoclaw/issues/3085) (WhatsApp mention) and [#1981](https://github.com/nanocoai/nanoclaw/issues/1981) (systemd misdetection on headless Linux, open since April).

## 6. Feature Requests & Roadmap Signals

Several recently closed issues point to ongoing and likely near-future features:

- **Keyword-based message routing** ([#1681](https://github.com/nanocoai/nanoclaw/issues/1681), closed) — adds zero-cost pre-turn model selection via keyword matching (e.g., “code review” → Claude Sonnet, “research” → Gemini Flash). This feature is now implemented and provides a lightweight way to optimize model usage.
- **CLI for scheduled tasks** ([#2397](https://github.com/nanocoai/nanoclaw/issues/2397), closed) — introduces `ncl` commands to list, run-now, pause, cancel scheduled tasks. This fills a gap in the administrative UX.
- **Container mount commands** ([#2395](https://github.com/nanocoai/nanoclaw/issues/2395), closed) — adds `add-mount` / `remove-mount` to `ncl groups config` after the DB migration.
- **Unarchive agent groups on reference** ([#2517](https://github.com/nanocoai/nanoclaw/issues/2517), closed) — MGA references archived groups are now auto-archived with GC.

New skills are also emerging: PRs for **Google Contacts MCP tool** ([#2693](https://github.com/nanocoai/nanoclaw/pull/2693)) and **CalDAV tool** ([#2530](https://github.com/nanocoai/nanoclaw/pull/2530)) are open, indicating the project is expanding its integration ecosystem. These are likely to land in the next minor release.

## 7. User Feedback Summary

**Pain points voiced by users and contributors:**
- **Silent failures** — the `send_message` dedup bug and WhatsApp media drop caused messages to disappear without notification. This erodes trust in the platform for real-time chat.
- **Setup friction** — multiple reports of systemd detection failures on headless Linux (Hetzner, Proxmox LXC). Setting up requires workarounds, especially for non-technical users. The Slack setup card improvements (plain language, clearer ordering) address this.
- **Log noise** — false quota errors generated unnecessary support inquiries and confusion.
- **WhatsApp edge cases** — typed mentions not engaging the agent; the `accumulate` policy hiding the problem.

**Use cases mentioned:**
- Personal assistant in WhatsApp (issue [#1183](https://github.com/nanocoai/nanoclaw/issues/1183)).
- Logo generation via the agent (issue [#2959](https://github.com/nanocoai/nanoclaw/issues/2959)).
- Running on VPS/headless setups (multiple issues).

**Satisfaction indicators:**
- Quick turnaround on bug fixes — 16 issues closed in one day, many within hours or days of being filed.
- Active community contributions: cfis (7 open PRs), alipgoldberg (Slack improvements), masslbp, glifocat, echarrod — all consistently reporting and fixing issues.

## 8. Backlog Watch

Several items remain that require maintainer attention:

- **Issue [#1981](https://github.com/nanocoai/nanoclaw/issues/1981) (open since April 24)** — “v2 setup: systemd misdetected as absent on headless Linux.” Despite multiple related closed issues, this specific report on Hetzner with Node 22 has not received a comment since April. The root cause appears similar to #2482 but the environment may have additional peculiarities (e.g., SSH session vs interactive login).
- **PR [#2694](https://github.com/nanocoai/nanoclaw/pull/2694) (open, Signal DM fix)** — Submitted June 6, still unreviewed. It fixes inbound DMs being dropped due to missing `isMention`/`isGroup` flags. Essential for Signal channel usability.
- **PR [#2695](https://github.com/nanocoai/nanoclaw/pull/2695) (open, Signal attachments)** — Submitted June 6, also unreviewed. Converts host attachment paths to base64 for container readability.
- **PR [#2531](https://github.com/nanocoai/nanoclaw/pull/2531) (open, poll-loop duplicate suppression)** — Fix for the critical dedup bug; has been open since May 18. Its merge would close the now-resolved #2506 and prevent regression.
- **PR [#2348](https://github.com/nanocoai/nanoclaw/pull/2348) (open, WhatsApp reconnect)** — Single-timer reconnect and clean teardown; open since May 8. Important for WhatsApp adapter stability.

These older items, especially the Signal adapter PRs, could benefit from maintainer review to avoid accumulating technical debt.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest – 2026-07-19

## 1. Today's Overview

Activity on the NullClaw repository has been minimal over the past 24 hours. One existing issue (#868) received an update, but no new pull requests were merged or opened, and no releases were published. The project appears to be in a low-activity phase, with maintainer attention concentrated on a long-standing build environment bug. While no new code contributions arrived today, the community is still engaging with a single open problem that may require deeper investigation.

## 2. Releases

None – no new versions were released in the last 24 hours.

## 3. Project Progress

No pull requests were merged or closed today. No new features or fixes have been integrated into the codebase within this period.

## 4. Community Hot Topics

The only issue updated in the last 24 hours is:

- **Issue #868** – `[bug] zig build fails on Android/Termux (aarch64) with AccessDenied on options.zig linkat`  
  Author: NOTJuangamer10 | Created: 2026-04-23 | Updated: 2026-07-18 | Comments: 7 | 👍: 0  
  [Link to issue](nullclaw/nullclaw issue #868)  
  **Analysis**: This is a recurring build failure on Android devices (aarch64) when using Zig 0.16.0. The error (`AccessDenied` on `linkat`) suggests a filesystem permission or Android-specific VFS limitation during the build linking step. The seven comments indicate active community troubleshooting, but no maintainer response is recorded in the data. The underlying need is reliable cross-platform build support, particularly for mobile Linux environments like Termux. This issue may become a blocker for users on Android.

## 5. Bugs & Stability

One bug is currently tracked:

- **#868 (Open)** – `zig build` fails with AccessDenied on Android/Termux  
  **Severity**: Medium – impacts a specific but growing user base (Android with Termux). No fix PR exists yet. The bug prevents building NullClaw on aarch64 Android devices, which may be a common deployment environment for personal AI agents on mobile.

## 6. Feature Requests & Roadmap Signals

No new feature requests were opened today. However, the discussion in #868 implicitly signals a desire for **better Android/Termux support** and possibly a **build system adaptation** (e.g., avoiding `linkat` or adding a fallback). Given the staleness of the issue, a future release that addresses this could restore cross-platform trust.

## 7. User Feedback Summary

Based on the single active issue, user pain points center on **build environment limitations**. The reporter (NOTJuangamer10) uses a typical Android setup (LineageOS + Termux), which is a common way to run CLI tools on mobile. The lack of response from maintainers may cause dissatisfaction. Use cases include running NullClaw as a personal AI assistant on a phone, which is a reasonable expectation for a lightweight open-source project.

## 8. Backlog Watch

- **Issue #868** (created 2026-04-23, last updated 2026-07-18) – This issue has been open for nearly three months with no maintainer comment. It is the oldest open issue updated in the last 24h. It deserves maintainer attention to either confirm the bug, provide a workaround, or escalate to a future release.  
  [Link to issue](nullclaw/nullclaw issue #868)

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest – 2026-07-19

## 1. Today’s Overview

IronClaw saw very high activity over the past 24 hours, with **50 pull requests** updated (35 merged/closed, 15 open) and **6 issues** touched (5 open, 1 closed). The core team remains the primary driver, pushing forward a major architecture simplification (capability-result collapse, runtime dispatcher consolidation) and fixing several bugs and test harness issues. No new releases were published today. Project health appears strong, with rapid iteration on Reborn and continued progress toward v1 retirement.

## 2. Releases

**No new releases** were published today. The last pending release PR (#5598) remains open and includes breaking API changes for `ironclaw_common` and `ironclaw_skills`.

## 3. Project Progress

Among the **35 merged/closed PRs** today, key advances include:

- **Architecture simplification (Slice C):** Multiple large PRs from `ilblackdragon` merged:
  - [#6254](https://github.com/nearai/ironclaw/pull/6254) – Make `host_api::Resolution` non-lossy for the CapabilityOutcome collapse (Stage 1).
  - [#6256](https://github.com/nearai/ironclaw/pull/6256) – Add host-private `ReplayPayloadStore` for gate/auth resume-read.
  - [#6245](https://github.com/nearai/ironclaw/pull/6245) – Route capability results through `host_api::Resolution` at the loop_host seam.
  - [#6242](https://github.com/nearai/ironclaw/pull/6242) – CapabilityOutcome → Resolution mapping in `ironclaw_turns`.
  - [#6243](https://github.com/nearai/ironclaw/pull/6243) – Persistent `GateRecordStore` for the capability-result collapse.
  - [#6241](https://github.com/nearai/ironclaw/pull/6241) – Route resume/auth-resume/spawn through `authorize()` fold.
  - [#6240](https://github.com/nearai/ironclaw/pull/6240) – Collapse `RuntimeAdapter` dyn registry into closed `RuntimeLane` executor.
  - [#6239](https://github.com/nearai/ironclaw/pull/6239) – Extract `authorize()` delegating scaffold in `ironclaw_capabilities`.

- **Documentation & Testing:**
  - [#6252](https://github.com/nearai/ironclaw/pull/6252) – Add compile-time transition exhaustiveness and full-infra edge coverage for capability state machines (§11.9).
  - [#6253](https://github.com/nearai/ironclaw/pull/6253) – Interactive architecture explorer and reusable diagram skill (docs only).

- **Bug fixes:**
  - [#6255](https://github.com/nearai/ironclaw/pull/6255) – Restore arg-visible tool-attempt assertions in the live canary test.
  - [#6211](https://github.com/nearai/ironclaw/pull/6211) – Disable hardcoded stubs for channels/hooks/logs in CLI and fix models stub.
  - [#6182](https://github.com/nearai/ironclaw/pull/6182) – Reject settings imports with no supported entries.
  - [#6180](https://github.com/nearai/ironclaw/pull/6180) – Sanitize and dismiss automation action errors in WebUI.

- **CI & dependencies:**
  - [#6186](https://github.com/nearai/ironclaw/pull/6186) – Bump tokio-ecosystem dependencies (tokio 1.53.0, tokio-tungstenite 0.29.0, etc.).
  - [#6188](https://github.com/nearai/ironclaw/pull/6188) – Make release workflow Reborn-compile-only (#6160 preparation).

## 4. Community Hot Topics

Activity remains overwhelmingly core-team driven; no PRs received comments today (comments field undefined). The only issue with any discussion is:

- **[#6158](https://github.com/nearai/ironclaw/issues/6158)** – “Add zh-TW Traditional Chinese localization” (2 comments). The user proposes adding Traditional Chinese for browsers that prefer it over Simplified Chinese. This issue has low reaction count but signals a clear community need for locale coverage.

Other open issues with zero engagement so far:
- [#6257](https://github.com/nearai/ironclaw/issues/6257) – PDF MIME type bug (fresh).
- [#6249](https://github.com/nearai/ironclaw/issues/6249) – Reborn extensions-management API parity for MCP servers.
- [#6248](https://github.com/nearai/ironclaw/issues/6248) – Credential preflight (blocked on auth_resume design).

Underlying needs: localization, improved MCP lifecycle management, and better credential security handling.

## 5. Bugs & Stability

**High severity:**
- **[#6247](https://github.com/nearai/ironclaw/issues/6247)** – MCP server headers (including `Authorization: Bearer`) persist in plaintext in the DB and worker mounts. No fix PR yet. Security risk – token exposure in backups/exports.

**Medium severity:**
- **[#6257](https://github.com/nearai/ironclaw/issues/6257)** – “Invalid value (attachments.mime_type)” error when sending/generating PDF files. Reported by a user in Slack. No comments or linked PRs yet.

**Low severity (fixed today):**
- [#6255](https://github.com/nearai/ironclaw/pull/6255) – Test assertion restored in live canary.
- [#6182](https://github.com/nearai/ironclaw/pull/6182) – Reject empty settings imports.
- [#6180](https://github.com/nearai/ironclaw/pull/6180) – Automation action errors now sanitized/dismissed in WebUI.

Stability improvements are steady, but two unpatched bugs (PDF, plaintext tokens) require attention.

## 6. Feature Requests & Roadmap Signals

- **[#6158](https://github.com/nearai/ironclaw/issues/6158)** – **Traditional Chinese (zh-TW) locale** – High likelihood of being included in the next release given clean implementation and existing zh-CN support.
- **[#6249](https://github.com/nearai/ironclaw/issues/6249)** – **MCP server lifecycle API parity for Reborn** – The v1 gateway already provides `/api/extensions/install`, activate, and PATCH; the standalone Reborn binary lacks these. Likely to land soon as part of Reborn feature completion.
- **[#6248](https://github.com/nearai/ironclaw/issues/6248)** – **Credential preflight before sandbox approval** – Blocked on `auth_resume` design. Could appear in a subsequent cycle once the auth design is settled.

## 7. User Feedback Summary

- **Pain point (PDF generation):** A user (Michael Kelly) reported that sending/generating PDF files throws a `Invalid value (attachments.mime_type)` error. No workaround mentioned. This directly impacts productivity for users who rely on PDF attachments.
- **Security concern:** Plaintext bearer tokens in MCP server configuration (settings row + worker mounts) is a serious privacy risk; no user comments yet, but the issue itself is a maintainer-identified gap.
- **Localization demand:** A community contributor requested Traditional Chinese locale support, indicating that IronClaw’s user base extends beyond English and Simplified Chinese speakers.

Overall satisfaction is not explicitly measured, but the rapid bug-fix throughput suggests responsiveness to reported issues.

## 8. Backlog Watch

- **[#5598](https://github.com/nearai/ironclaw/pull/5598) – `chore: release`** – Open since July 3 (16 days). This release PR includes breaking changes for `ironclaw_common` and `ironclaw_skills`. It remains open while multiple architecture changes are still being merged. Blocking factors: the release itself likely depends on stabilization of the ongoing simplification.
- **[#6121](https://github.com/nearai/ironclaw/pull/6121) – `fix(reborn): make migration default legacy-free`** – Open since July 15 (4 days). Gating the legacy importer behind optional features; needed for v1 retirement sequence. Still awaiting merge.
- **[#6176](https://github.com/nearai/ironclaw/pull/6176) – `ci: validate Reborn release binaries across seven targets`** – Open since July 17 (2 days). Important for ensuring cross-platform release quality, but not yet merged.
- **[#6188](https://github.com/nearai/ironclaw/pull/6188) – `ci: make release workflow Reborn compile-only`** – Same timeframe; dependent on #6176 or vice versa.

None of these are critically stale, but maintainers should prioritize #5598 to cut a release once the current simplification wave settles.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-07-19

## 1. Today's Overview

The project shows moderate activity over the past 24 hours, with 6 issues updated (all remain open) and 3 pull requests touched (2 merged/closed, 1 open). A minor release (2026.7.17) was published two days ago, focusing on error UI improvements and service deployment data persistence. The current backlog consists mainly of older, stale issues reopened for attention — most were created in early April and received comments yesterday, suggesting maintainers are revisiting long-standing bugs. The single open PR addresses a user-facing feedback gap when session rename fails.

## 2. Releases

**Latest Version:** [LobsterAI 2026.7.17](https://github.com/netease-youdao/LobsterAI/releases/tag/2026.7.17) (published 2026-07-17)

**What’s Changed:**
- `feat(cowork)`: Surface structured run failure details in error UI (#2348)
- `feat(service)`: Service deployment data persistence (#2349)
- `feat(skin)`: *(truncated, likely a UI skin feature)*

**Breaking Changes / Migration Notes:** None reported. The release appears backward-compatible, adding new capabilities without altering existing APIs or configurations.

## 3. Project Progress (Merged/Closed PRs Today)

Two PRs were merged/closed in the last 24 hours:

- **[PR #1464]** `fix(im): add duplicate validation for instance name and credential ID` — by gongzhi-netease. Adds validation to prevent creating duplicate IM instances (DingTalk, Feishu, QQ) and re-adding the same bot. Merged after being stale since April 4.
- **[PR #1353]** `feat(agent): Agent 技能选择器新增全选和清除功能` — by fhraiwxr. Adds “Select All” and “Clear” buttons for the Agent skill picker, along with a visible count (e.g., “Selected 3/10”). Merged after being stale since April 2.

These two older features were finally integrated, improving IM multi-instance robustness and Agent skill selection UX.

## 4. Community Hot Topics

No new issues or PRs generated significant discussion (most have only 1 comment). The most notable activity is on two long-standing bugs that received maintainer attention yesterday:

- **[Issue #1293]** [自定义 studio http 的 mcp 无法使用](https://github.com/netease-youdao/LobsterAI/issues/1293) — A custom MCP (Model Context Protocol) with HTTP transport is not being updated in the OpenClaw engine, making it unusable. Only SSE-based MCP works. Has 1 👍 reaction and a new comment.
- **[Issue #1296]** [上传长图（3M）解析，页面直接报错](https://github.com/netease-youdao/LobsterAI/issues/1296) — Uploading a ~3MB long image crashes the page and makes the whole app unusable until a new task is started. User provided screenshots. The underlying need is a fix for large image parsing and error recovery.

Both issues reflect frustration with core functionality (MCP integration, image handling) and indicate that users expect reliable, scalable support for common workflows.

## 5. Bugs & Stability

All 6 issues updated today are bugs, though none were newly created. Severity ranking (high to low):

1. **[Critical] Issue #1296** — Uploading a 3MB long image causes a permanent page error, rendering the app unusable. No known fix PR.
2. **[High] Issue #1293** — HTTP-based custom MCP is completely non-functional (only SSE works). Blocks users who rely on HTTP MCP servers.
3. **[Medium] Issue #1307** — After editing one model provider config, switching to another provider results in a read-only panel. Reproducible, impacts configuration flow. No fix PR.
4. **[Medium] Issue #1305** — Scheduled task history shows incorrect title after the task is deleted. UI display bug affecting task management.
5. **[Low] Issue #1298** — Inputting even short text triggers “content too long” error despite model passing connection test. Likely a token limit misreporting issue.
6. **[Low] Issue #1302** — Feature request disguised as a bug: request to add line number toggle in code blocks (not a regression).

**Fix PRs in progress:** None for these bugs. The only open PR (#2358) fixes a feedback issue for session rename failures, which is a minor UI gap.

## 6. Feature Requests & Roadmap Signals

- **Line numbers in code blocks** (Issue #1302) — A user requested a toggle button to show/hide line numbers in chat code blocks, with specific UX mockups for both language-tagged and plain code blocks. This is a straightforward front-end enhancement likely to be picked up in the next minor release.
- **Agent skill selector improvements** (PR #1353, just merged) — The “Select All” / “Clear” functionality has now landed, fulfilling an earlier user request.
- **IM instance deduplication** (PR #1464, just merged) — Another community pain point resolved.

No radical new feature requests surfaced; the project’s near-term roadmap appears focused on stability and polish.

## 7. User Feedback Summary

Based on issue descriptions and comment tone:

- **Satisfaction:** Users appreciate fast fixes for clear UX gaps (e.g., session rename feedback in PR #2358). The merging of stale PRs signals that maintainers are clearing backlog, which is generally positive.
- **Dissatisfaction:** Several bugs have persisted for over three months (since April 2) without resolution. The 3MB image crash (#1296) and MCP HTTP incompatibility (#1293) are serious blockers for power users. One comment on #1293 explicitly notes “只有sse的可以被openclaw引擎使用” — implying the limitation was not documented or expected.
- **Common pain points:** Configuration panel bugs (Issue #1307), misleading error messages (Issue #1298), and data display inconsistencies (Issue #1305) hurt daily workflow reliability.

Overall, users expect higher stability in core areas (MCP, image parsing, model config UI) before demanding new features.

## 8. Backlog Watch

The following issues have been open for over 3 months without a fix or maintainer response beyond today’s comments:

- **Issue #1293** — HTTP MCP not working (since 2026-04-02). 1 comment yesterday may be a maintainer ping, but no fix. **Needs urgency** as it blocks a documented protocol.
- **Issue #1296** — Large image crash (since 2026-04-02). No fix PR. Extremely severe impact.
- **Issue #1307** — Model provider config becomes read-only (since 2026-04-02). Reproducible with clear steps, yet unresolved.
- **Issue #1298** — False token limit error (since 2026-04-02). Low severity but could frustrate new users evaluating models.

**No maintainer response** has been recorded on these issues besides the timestamp update — it is unclear if the comments came from users or maintainers. The project should prioritize these items to restore confidence.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest – 2026-07-19

## Today's Overview
Activity is moderate with one open issue and three pull requests touched in the last 24 hours. Two PRs were merged/closed, advancing Slack configuration flexibility and web UI ACP support. One open PR introduces a new memory backend based on Zvec. No new releases were published. The single open issue—a two‑month‑old feature request for per‑topic model routing—remains under discussion but has not been resolved, indicating possible maintainer bandwidth constraints.

## Releases
None. No new versions were released today.

## Project Progress
Two pull requests were merged or closed:

- **#1159 (merged) – feat(slack): support configurable API base URL**  
  Adds an `api_base_url` field to Slack account configuration (defaulting to `https://slack.com/api`). Routes all Slack client construction, Socket Mode startup, Events API auth, outbound replies, and native streaming through that base URL. Also adds corresponding fields to onboarding and configuration pages.  
  Author: `penso` | [PR #1159](https://github.com/moltis-org/moltis/pull/1159)

- **#1157 (merged) – fix(web): support ACP-only chat setup**  
  Enables the web interface to function when only ACP (Agent Communication Protocol) agents are installed (no LLM models). Installed ACP agents are shown during LLM onboarding, the session header picker filters to ACP‑capable agents, and an ACP agent is auto‑selected when no LLM models are configured.  
  Author: `penso` | [PR #1157](https://github.com/moltis-org/moltis/pull/1157)

## Community Hot Topics
The most active item is the open enhancement request **#574 – [Feature]: Model Routing Per Topic**  
Created on 2026‑04‑06, updated today with 4 comments and 1 👍 reaction. The discussion revolves around routing different model providers per conversation topic—a feature that would improve cost management and response quality for specialised use cases. Despite its age, the request remains open, suggesting it is a community priority that hasn’t been implemented yet.  
[Issue #574](https://github.com/moltis-org/moltis/issues/574)

## Bugs & Stability
No bugs, crashes, or regressions were reported in the last 24 hours. The two merged PRs (#1157 and #1159) are functional enhancements rather than fixes.

## Feature Requests & Roadmap Signals
The only feature request today is **Issue #574 – Model Routing Per Topic**. This request asks for a system that automatically selects different LLM providers (e.g., GPT‑4 for deep reasoning, a cheaper model for casual chat) based on the topic or nature of a conversation. Given that the project already supports multiple backends and providers, this is a logical next step for power users. It has been open for over three months, so it may be considered for a near‑future release (e.g., v0.8 or v0.9). However, no maintainer has assigned it yet.

## User Feedback Summary
- **Pain point (issue #574):** Users want fine‑grained control over which model handles which conversation topic; the current single‑model‑per‑session approach is too rigid for mixed‑workload usage.
- **Positive response to PR #1157 (ACP-only setup):** The community likely appreciates the ability to run Moltis purely with external agents, reducing reliance on LLM providers.
- **Request for configurable Slack base URL (#1159):** Indicates enterprise users or self‑hosters need custom Slack endpoints (e.g., for proxies or compliance).  
Overall sentiment appears neutral‑to‑positive, though the lack of movement on #574 may cause mild frustration.

## Backlog Watch
- **Issue #574 – Model Routing Per Topic** (open since 2026‑04‑06, updated today, no maintainer comment)  
  This is the most important backlog item. It has received community support (👍) and multiple comments, but the feature has not been triaged or assigned. Maintainer attention is needed to either accept the proposal, ask for design refinements, or decline with reasoning.  
  [Issue #574](https://github.com/moltis-org/moltis/issues/574)

- **Open PR #1158 – feat(memory): add zvec vector database memory backend** (open since 2026‑07‑17, updated today)  
  While not yet merged, this PR introduces a new memory backend using Zvec and redb, feature‑gated behind a `zvec` cargo feature. It may need review and testing before merging. It does not appear to have outstanding maintainer activity.  
  [PR #1158](https://github.com/moltis-org/moltis/pull/1158)

---

*Generated from GitHub data snapshot: 2026-07-19*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-07-19

## Today's Overview
CoPaw (QwenPaw) saw a high level of community and development activity over the past 24 hours, with 11 issues updated and 7 pull requests receiving attention. Despite no new releases, the project is clearly in an intensive bug-fixing and feature-enhancement phase. Six open PRs are targeting critical regressions, memory system crashes, and missing configuration knobs, indicating strong maintainer responsiveness. The single closed issue (#6240) was a minor display bug, while most other discussions revolve around stability issues after the v2.0.0.post3 release.

## Releases
No new releases were published today. The last release remains **v2.0.0.post3** (Post, published 2026-07-17). Several bugs reported today are specific to that version, suggesting a patch release (v2.0.0.post4) may be imminent.

## Project Progress
Only one PR was merged/closed today:

- **#1071** (closed) – *feat: Introduce Mattermost channel integration for message* (first-time contributor). This long‑standing PR by @2niuhe was finally merged, adding a new communication channel for agent messages. It relates to issue #621.

Other active PRs (all open) are in various stages of review:

| PR | Title | Author | Status |
|----|-------|--------|--------|
| #6247 | fix(memoryspace): catch OSError in `_saved_tool_refs` is_file() check | zealonexp | Open |
| #6248 | fix: distinguish offload vs cancel to prevent subprocess kill on deadline | feng183043996 | Open |
| #6251 | feat(cli): add scriptable environment reads | wananing | Open (created today) |
| #6243 | fix(embedding): expose `use_dimensions` toggle for OpenAI-compatible APIs | Wiziechen (first-time) | Open |
| #6238 | perf(drivers): initialize handlers concurrently | wananing | Open |
| #6237 | feat(scroll): improve exchange and date-aware history recall | niceIrene | Open |

These demonstrate parallel work on memory, shell integration, CLI, embedding configuration, startup performance, and scroll‑based history retrieval.

## Community Hot Topics
The most actively discussed issues and PRs (by comment count and reactions):

- **#6240** (closed) – *[Bug]: 末尾出现注释显示* – 3 comments. A display bug where memory annotations leak into the chat UI. Quickly resolved (closed).  
  [Link](https://github.com/agentscope-ai/CoPaw/issues/6240)

- **#6245** – *Session permanently blocked when shell command exceeds coordinator deadline (regression)* – 2 comments. High‑severity regression flagged by @feng183043996. The companion fix PR #6248 is already open.  
  [Link](https://github.com/agentscope-ai/CoPaw/issues/6245)

- **#6246** – *`_saved_tool_refs` crashes `recall_history` with OSError: File name too long* – 2 comments. Another memory‑system crash; fix PR #6247 submitted by the same reporter.  
  [Link](https://github.com/agentscope-ai/CoPaw/issues/6246)

- **#4641** – *qwenpaw env set → subprocess can't see it* – 2 comments. Long‑standing request for runtime environment variable access. The new PR #6251 directly addresses this.  
  [Link](https://github.com/agentscope-ai/CoPaw/issues/4641)

The pattern: users are actively filing regressions from v2.0.0.post3, and the community is also contributing fixes (the same users who report bugs often submit PRs). The `env set` issue has been open since May and finally has a fix in review.

## Bugs & Stability
Ranked by severity:

1. **Critical – Session permanently blocked on coordinator deadline** (#6245, #6056 regression)  
   - Any shell command that times out freezes the entire session until restart. PR #6248 proposes a fix by distinguishing “offload” from “user cancel”.  
   - **Reporter:** feng183043996 | **Status:** Fix PR open.

2. **High – `recall_history` crashes from oversized file paths** (#6246)  
   - An OSError when a tool result (e.g., git diff) triggers a regex match that produces an extremely long path. PR #6247 wraps the `is_file()` call in try/except.  
   - **Reporter:** zealonexp | **Status:** Fix PR open.

3. **Medium – Embedding `use_dimensions` not exposed** (#6242)  
   - Console UI allows setting dimensions but the parameter is not sent to OpenAI‑compatible APIs because the underlying toggle is missing from the config schema. PR #6243 adds the field.  
   - **Reporter:** BLUE0818 | **Status:** Fix PR open.

4. **Medium – Agent repeated output + memory_search infinite loop** (#6241)  
   - The agent outputs nearly identical content across multiple turns; `memory_search` may loop forever. The system warns but does not break the cycle. No PR yet.  
   - **Reporter:** z13645719 | **Status:** No fix PR.

5. **Low – Sandbox fallback hard‑codes approval prompt** (#6250)  
   - When sandbox is unavailable, `SANDBOX_FALLBACK` hard‑codes an approval request with no configuration to skip it. A configuration option is requested.  
   - **Reporter:** zhapeng2016 | **Status:** No fix PR.

6. **Low – Windows PATH concatenation drops semicolons** (#6239)  
   - Under Windows, concatenating User+Machine PATH loses the separator, breaking npm global commands. Workaround exists (manually set PATH).  
   - **Reporter:** 604731578 | **Status:** No fix PR.

7. **Cosmetic – Comment display at end of chat** (#6240) – already closed.

8. **Question/Other – TUI stuck at “warming”** (#6249) – not a confirmed bug.

## Feature Requests & Roadmap Signals
- **Environment variable scriptability** (#4641, PR #6251) – The newly opened PR adds `qwenpaw env get KEY` and `env list --json`, directly responding to a long‑standing request. Likely to land in the next patch release.
- **Memory isolation by project** (#6244) – A user requests that each “project” has its own memory namespace, reducing noise in retrieval. This is a significant architectural change but aligns with best practices in agent memory. Could appear in v2.1.
- **Mattermost integration** (#1071, now merged) – A new channel integration that will allow agents to send/receive messages via Mattermost. Likely available in v2.0.0.post4.
- **Concurrent driver initialization** (#6238) – Performance improvement for multi‑MCP setups. Likely to be merged soon.
- **Date‑aware history recall improvements** (#6237) – Enhancements to scroll‑based retrieval. Already in PR.

Predictions for next version (v2.0.0.post4 or v2.0.1): The four bugfix PRs (#6247, #6248, #6243, #6238) plus the CLI env feature (#6251) and the history recall improvement (#6237) have a high chance of inclusion.

## User Feedback Summary
- **Frustration with v2.0.0.post3 regressions:** Two separate, severe regressions (session freeze, memory crash) were reported, indicating the latest release introduced new stability issues. Users are actively contributing fixes, which shows high engagement but also suggests the release was premature.
- **Positive community response:** First‑time contributors submitted PRs (#6243, #6237) and issues are detailed with root‑cause analysis. The maintainer team appears responsive – all critical bug reports have matching PRs within hours.
- **Pain point – sandbox governance:** The hard‑coded approval for sandbox fallback (#6250) is criticised as inflexible; users want a configurable “skip” option.
- **Pain point – memory loop:** The repeated output problem (#6241) is particularly disruptive for long‑running tasks, and no fix is yet proposed.
- **Unmet need – memory isolation:** The request for project‑based memory (#6244) indicates that power users are hitting scalability limits with the current flat memory model.

## Backlog Watch
- **#4641** – *qwenpaw env set → subprocess can't see it* (since 2026-05-23). Now has a fix PR #6251, so no longer unattended. 
- **#6239** – *Windows PATH concatenation drops semicolons* (reported 2026-07-18). No maintainer response or PR yet. Moderate impact for Windows users.
- **#6241** – *Agent repeated output + memory_search dead loop* (reported 2026-07-18). No PR. This is a usability blocker for anyone using memory_search; deserves maintainer attention.
- **#6223** – *Release Duty v2.0.0.post3 Installation Verification* (created 2026-07-17). This is an automated checklist that may need a review to confirm the release passes.

---

*Generated from GitHub data for [agentscope-ai/CoPaw](https://github.com/agentscope-ai/CoPaw) on 2026-07-19.*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-07-19

**Data source:** GitHub issues/PRs updated in the last 24 hours (50 issues, 50 PRs) as of 2026-07-19 23:59 UTC.  
**Period covered:** 2026-07-18 to 2026-07-19.

---

## 1. Today's Overview

ZeroClaw saw very high activity in the past 24 hours, with **50 issues** and **50 pull requests** updated. **11 issues were closed**, and **3 PRs were merged or closed** (among the top‑20 PRs none are closed – the merged/closed PRs are below the threshold). The project remains in an intense development phase, with a strong focus on **security hardening** (supply‑chain signing, constant‑time comparisons, credential encryption), **channel integrations** (Telegram, Matrix, Discord, GitHub restoration), and **agent runtime robustness** (cron awareness, tool‑call pairing enforcement, WebSocket lifetime decoupling). No new releases were cut today.

---

## 2. Releases

**None.** No new versions or tags were created during the reporting window.

---

## 3. Project Progress

**Closed issues (selected):**  
- **#5862** – *[Bug]: zeroclaw does not know it can add cron.* (closed, resolution unknown) — Agent now understands its own cron capability.  
- **#8177** – *RFC: Supply chain signing* (closed as `wontfix`; the proposal did not proceed).  
- **#2079** – *[Feature]: Restore GitHub as a native channel* (completed) – GitHub channel re‑added as a first‑class integration.  
- **#6378** – *[Feature]: Discord Bot respond only in specific Discord channels* (completed) – `allowed_channels` field added.  
- **#6672** – *[Bug]: reasoning_content not passed back in tool‑call loops with Xiaomi models* (closed) – Fix for S0 severity data loss.  
- **#7248** – *[Feature]: Persist cached input tokens and include them in cost accounting* (completed).  
- **#5573** – *[Feature]: Send Emails via SMTP* (completed) – cron task result delivery via email.  
- **#8056** – *CI: required PR gate — cargo audit, lockfile check, npm dependency review* (closed as completed).  
- **#6517** – *[Bug]: Context Overflow Causes Hallucination* (closed).

**Merged/closed PRs (exact list not in top‑20; the 3 merged PRs are likely minor fixes or CI improvements):**  
- Likely includes small patches for documentation, hardware serial resynchronization, or CI runner routing. These changes are not individually detailed but contribute to overall stability.

**Other notable open but progressing work:**  
- **#6055** – Slack thread context hydration (status `in-progress`).  
- **#5316** – SearXNG search support (status `in-progress`).  
- **#7759** – Decouple gateway WebSocket lifetime from agent turn (status `in-progress`).  
- **#8559** – Agents stop on web dashboard exit (status `in-progress`, fix in PR #8559? not directly linked).  
- **#8445** – Telegram multi‑message mode (status `in-progress`).

---

## 4. Community Hot Topics

The most engaging issues and PRs (by comment count, reactions) reveal strong user demand for **integration reliability**, **security**, and **operational control**.

**Top issues (comments ≥ 6):**  
- **#5862** (14 comments) – *[Bug]: zeroclaw does not know it can add cron.* — Users expect the agent to autonomously use its own cron scheduling tool. **Underlying need:** agent self‑awareness of available built‑in capabilities.  
- **#8177** (12 comments) – *RFC: Supply chain signing* — Closure as `wontfix` generated discussion; users care about binary provenance.  
- **#2079** (9 comments) – *Restore GitHub as a native channel* — Demonstrates strong demand for GitHub integration as a first‑class channel.  
- **#6378** (8 comments) – *Discord allowed_channels* — Broad consensus for restricting bot responses to specific channels.  
- **#6055** (7 comments) – *Slack: hydrate thread context* — Users need backfill of thread history to avoid re‑mentioning the bot.  
- **#8424** (7 comments) – *Workspace‑relative forbidden path patterns* — Security‑conscious users want AI to ignore sensitive config files inside the workspace.  
- **#9127** (6 comments) – *KeySource trait* — Discussion about master‑key material classification; part of credential encryption improvements.  
- **#8226** (6 comments) – *Per‑agent git identity* — Request for multi‑tenancy in git operations and MCP instances.  
- **#6293** (6 comments) – *Air‑gapped execution mode* — Security‑focused users want offline agent with isolated companion daemon.  
- **#6002, #6672, #8138, #2467** (6 comments each) – Telegram bugs, OpenRouter fallback, webhook transforms.

**Top PRs (all open, comments undefined – likely 0–2):**  
- **#8630** – docs: correct cron trigger dispatch status.  
- **#9109** – feat(providers): add native Hailo‑Ollama support (XL).  
- **#8576** – fix(channels): env‑var fallback for OpenAI STT credentials.  
- **#9152** – fix(sop): resolve relative sops_dir against workspace.  
- **#8337** – feat(observability): herdr agent reporting integration.  
- **#9131** – fix(ci): comment hygiene gate language‑aware.  
- **#9043** – docs(install): align first‑run guidance.  
- **#9157** – fix(hardware): resynchronize serial response frames.  
- **#8920** – fix(zerocode): refine chat copy affordances.  
- **#9026** – feat(gateway/acp): select session agent via `?agent=` query param.  
- **#8447** – chore(firmware): share protocol parsing with ESP32.  
- **#8486** – feat(gateway): add OpenAI chat completions endpoint (XL).  
- **#7954** – feat(zerocode): agent rename dashboard flow.  
- **#8443** – feat(matrix): add single‑message progress drafts (XL).  
- **#9090** – fix(agent): enforce tool‑call pairing at one chokepoint (XL).  
- **#9102** – fix(providers/multimodal): strip unhandled non‑image media markers.  
- **#9110** – fix(lark): use `constant_time_eq` for verification_token comparison.  
- **#9113** – fix(providers): add idle read_timeout to streaming HTTP clients.  
- **#9115** – ci(runners): run compile‑heavy jobs on optional Blacksmith runners.  
- **#9055** – fix(docs): make translation refresh reproducible.

**Analysis:** The community is heavily invested in **agent awareness** (cron, self‑capabilities), **channel parity** (GitHub, Slack, Discord, Telegram), **security** (forbidden paths, constant‑time comparisons, air‑gap), and **provider flexibility** (OpenRouter fallback, model switching, Hailo‑Ollama). The high number of large PRs (XL, L) indicates active contributions to core runtime and gateway.

---

## 5. Bugs & Stability

**New or active bugs reported in the last 24h (sorted by severity):**

| Severity | Issue | Description | Status & Fix PR |
|----------|-------|-------------|-----------------|
| **S1 – Workflow blocked** | **#8505** – Telegram channel cannot be configured | After quickstart, `channels doctor` claims not set up; bot does not respond. Priority p1. | Open; check in progress. |
| **S1 – Workflow blocked** | **#8559** – Agents stop their work when exiting chat window | Web dashboard kills agent loop on tab close. Priority p1, in‑progress. | Possibly linked to #7759 (WebSocket decoupling). |
| **S2 – Degraded** | **#6002** – Telegram message not clearly addressed | Agent in container queries llama.cpp, but user message not properly routed (stale). | Needs author action. |
| **S2 – Degraded** | **#7911** – `install.sh` selects generic Linux binary on Android/Termux | ARM64 binary not detected; priority p2. | No fix PR yet. |
| **S3 – Minor** | **#6724** – Empty Signal/Voice channel credentials cause crashloop | Supervisor restarts every 2s; priority p3. | Open. |
| **S3 – Minor** | **#6517** – Context overflow causes hallucination (closed) | Already fixed. | – |

**Fix PRs in flight:**  
- **#8576** – Env‑var fallback for OpenAI STT credentials (fixes #7899).  
- **#9152** – Relative `sops_dir` now resolved against workspace (fixes SOP config ambiguity).  
- **#9157** – Hardware serial frame resynchronization (fixes stale frame poisoning).  
- **#9090** – Enforce tool‑call pairing to prevent provider 400 errors (Anthropic, Bedrock).  
- **#9110** – Constant‑time comparison for Lark verification token (timing side‑channel fix).  
- **#9113** – Idle read timeout for streaming HTTP clients (prevents hanging connections).

**Stability note:** The project is actively addressing channel credential edge‑cases and agent lifecycle issues, but two S1 bugs remain unresolved (Telegram config and web dashboard exit).

---

## 6. Feature Requests & Roadmap Signals

**Active, high‑priority feature requests (accepted or in‑progress):**

| Feature | Issue/PR | Priority | Status | Likelihood for next release |
|---------|----------|----------|--------|-----------------------------|
| Slack thread context hydration | #6055 | p2 | in‑progress | High – already implemented in PR. |
| Workspace‑relative forbidden paths | #8424 | p2 | blocked, needs‑author‑action | Medium – scope is clear, but blocked. |
| Per‑agent git identity | #8226 | p2 | accepted | Medium – design accepted, implementation pending. |
| SearXNG search support | #5316 | p2 | in‑progress | High – community contribution. |
| Webhook transforms | #2467 | p2 | accepted | Medium – accepted but no active PR. |
| Pre‑turn tool elicitation hints | #7431 | p2 | accepted | Medium – design ready. |
| Cross‑turn OTel conversation correlation | #8933 | p2 | accepted, RFC | Medium – RFC stage. |
| Easy per‑chat model switching | #8600 | p2 | accepted | High – one reaction, popular request. |
| Telegram multi‑message mode | #8445 | p2 | in‑progress | High – in active PR. |
| OpenRouter fallback models | #8138 | p2 | blocked | Low – blocked on provider config design. |
| Skill installation from `.well-known` URI | #4853 | p2 | accepted | Medium – standards‑driven. |
| Gateway ACP `?agent=` query param | #9026 | – | open PR | High – already submitted. |
| OpenAI chat completions endpoint | #8486 | – | open PR (XL) | Very high – large PR, core feature. |
| Matrix single‑message progress drafts | #8443 | p2 | open PR (XL) | High – large community PR. |
| Hailo‑Ollama native support | #9109 | – | open PR (XL) | Medium – hardware‑specific. |
| Herdr agent reporting | #8337 | – | open PR (L) | Medium – observability integration. |
| Agent rename dashboard flow | #7954 | – | open PR (M) | High – UI improvement. |
| Decouple WebSocket lifetime (background turns) | #7759 | p1 | in‑progress | Very high – fixes S1 bug #8559. |
| Air‑gapped execution mode | #6293 | p2 | blocked, RFC | Low – complex architecture change. |
| KeySource trait for master‑key classification | #9127 | p2 | needs‑author‑action | Low – early RFC. |

**Roadmap signal:** The next version is likely to include **Slack thread hydration**, **SearXNG search**, **Telegram multi‑message mode**, **gateway ACP agent selection**, and **OpenAI‑compatible gateway endpoint**. The team appears to be prioritising channel parity and security improvements.

---

## 7. User Feedback Summary

**Pain points expressed in issues and PRs:**
- **Agent ignorance of own tools:** Users expect the agent to autonomously discover and use features like `zeroclaw cron` (#5862). The fix completed today addresses this.
- **Telegram setup is fragile:** Even after using quickstart, the bot may not respond (#8505). This is a widespread onboarding frustration.
- **Web dashboard kills background tasks:** Exiting the chat window cancels the agent’s work (#8559). Users want to leave agents running unattended.
- **Context window management:** With long conversations, the bot hallucinates or drifts (#6517, closed). Users need better context trimming or summarization.
- **Installation on non‑Linux platforms:** Android/Termux and potentially macOS Homebrew users hit binary selection issues (#7911).
- **Provider model switching is cumbersome:** Users coming from other frameworks want quick model toggles (#8600).
- **Channel configuration complexity:** Empty credentials causing crashloops (#6724) and missing env‑var fallbacks (#7899, PR #8576) degrade the setup experience.

**Satisfaction signals:**
- Quick closure of high‑severity bugs (e.g., reasoning_content loss #6672) and security issues (constant‑time comparison PR #9110) is appreciated.
- Active community contributions (large PRs from external developers) indicate strong engagement.
- The variety of channel integrations (Telegram, Matrix, Lark, Discord, Slack) is being actively improved, matching user demand.

---

## 8. Backlog Watch

Issues and PRs that have been open for a long time without resolution or that are blocked and need maintainer attention:

| Item | Created | Last Updated | Status | Reason for attention |
|------|---------|--------------|--------|---------------------|
| **#2467** – Webhook transforms | 2026-03-02 | 2026-07-18 | accepted | 4.5 months old; no active implementation PR despite accepted status. |
| **#4853** – Skill installation from `.well-known` URI | 2026-03-27 | 2026-07-18 | accepted | 3.5 months; blocked on standards progress? |
| **#6002** – Telegram message routing issue | 2026-04-22 | 2026-07-18 | stale, needs‑author‑action | 3 months; author has not responded to questions. |
| **#6293** – Air‑gapped execution mode | 2026-05-03 | 2026-07-18 | blocked, RFC | 2.5 months; architectural complexity may need prioritisation. |
| **#7497** – OCI registries for WASM plugins | 2026-06-11 | 2026-07-18 | blocked | 1 month; waiting on dependency or decision. |
| **#8138** – OpenRouter fallback models | 2026-06-22 | 2026-07-18 | blocked | Blocked on provider config refactoring. |
| **#8424** – Workspace‑relative forbidden paths | 2026-06-28 | 2026-07-18 | blocked, needs‑author‑action | Author has not provided requested clarifications. |
| **#9127** – KeySource trait | 2026-07-18 | 2026-07-19 | needs‑author‑action | Very new, but already stalled. |

**PRs needing maintainer review:**
- **#8337** – Herdr agent reporting (labelled `needs-maintainer-review`).
- **#8486** – OpenAI chat completions endpoint (labelled `needs-author-action`).
- **#8443** – Matrix single‑message progress drafts (labelled `needs-author-action`).
- **#8576** – Env‑var fallback for STT credentials (labelled `needs-author-action`).
- **#9102** – Strip unhandled media markers (labelled `needs-author-action`).
- **#9115** – CI runner routing (labelled `needs-author-action`).

**Observations:** Several features accepted weeks or months ago have no implementation in progress. The `needs-author-action` label on many large PRs suggests contributors need maintainer feedback or requested changes. The backlog of blocked and stale items may slow down the roadmap if not addressed soon.

---

*Digest generated from ZeroClaw GitHub activity (zeroclaw-labs/zeroclaw) on 2026-07-19.*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/boom7sss/agents-radar).*