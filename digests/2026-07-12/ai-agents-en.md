# OpenClaw Ecosystem Digest 2026-07-12

> Issues: 450 | PRs: 500 | Projects covered: 13 | Generated: 2026-07-12 03:32 UTC

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

# OpenClaw Project Digest – 2026-07-12

## Today's Overview
OpenClaw saw very high activity today with 450 issues and 500 pull requests updated in the past 24 hours. The project closed 223 issues and merged/closed 242 PRs, indicating strong forward momentum. A new beta release (`v2026.7.1-beta.5`) shipped, featuring a fully conversational onboarding flow. Community engagement remains robust with several long-standing feature requests and high-severity bugs drawing dozens of comments.

## Releases
**v2026.7.1-beta.5** – released today  
[OpenClaw 2026.7.1-beta.5](https://github.com/openclaw/openclaw/releases/tag/v2026.7.1-beta.5)

### Highlights
- **Conversational onboarding:** Crestodian now runs a real agent-loop setup across CLI, web install, and macOS app. AI-guided provider setup with model-judged approvals bound to exact operations, masked credential prompts, and deterministic fallback when no model is available.
- No breaking changes or migration notes were explicitly listed in the release. Users on the beta track should update via the usual channels.

## Project Progress
Of the ~242 PRs closed/merged today, notable improvements include:
- **Chat channel fixes:** Feishu Auto-TTS now sends text and voice separately ([PR #103781](https://github.com/openclaw/openclaw/pull/103781)), and Discord preview cleanup was hardened ([PR #104893](https://github.com/openclaw/openclaw/pull/104893)).
- **OpenRouter & xAI request policy:** Two PRs ensure music generation and video generation requests respect configured provider policies ([#104835](https://github.com/openclaw/openclaw/pull/104835), [#104836](https://github.com/openclaw/openclaw/pull/104836)).
- **Groq TPM fix:** Default Llama agent turns no longer exceed Groq's 12,000 TPM limit ([#104904](https://github.com/openclaw/openclaw/pull/104904)).
- **UTF-16 surrogate pair fixes:** Several UI and approval code paths were patched to avoid truncating multi-byte emoji and astral characters ([#104930](https://github.com/openclaw/openclaw/pull/104930), [#104931](https://github.com/openclaw/openclaw/pull/104931), [#104927](https://github.com/openclaw/openclaw/pull/104927)).
- **SQLite lifecycle hardening:** A large PR ([#104859](https://github.com/openclaw/openclaw/pull/104859)) addresses concurrent schema issues, WAL checkpoint failures, and backup corruptions.
- **MCP Apps Phase 0:** A new feature PR ([#104742](https://github.com/openclaw/openclaw/pull/104742)) adds generic MCP server support in Control UI, allowing plugins to declare `ui://` resources.

## Community Hot Topics
Most active issues (by comment/reaction count) reveal strong user demand for security, cross-platform support, and performance stability:

1. **[#75 – Linux/Windows Clawdbot Apps](https://github.com/openclaw/openclaw/issues/75)** (110 comments, 81 👍)  
   *Long-standing request for desktop apps on Linux and Windows with macOS-level feature parity.*
2. **[#88838 – Track core session/transcript SQLite migration](https://github.com/openclaw/openclaw/issues/88838)** (37 comments, 3 👍) – closed, major internal refactor.
3. **[#99241 – Tool outputs render as image attachments](https://github.com/openclaw/openclaw/issues/99241)** (21 comments, 2 👍) – agent cannot read stdout/stderr after ANSI-heavy workflows.
4. **[#7707 – Memory Trust Tagging by Source](https://github.com/openclaw/openclaw/issues/7707)** (17 comments) – security against memory poisoning.
5. **[#102175 – Embedded prompt cache breaks across boundaries](https://github.com/openclaw/openclaw/issues/102175)** (16 comments) – critical stability issue with prompt caching loss.
6. **[#10659 – Masked Secrets system](https://github.com/openclaw/openclaw/issues/10659)** (14 comments, 4 👍) – prevent agents from reading raw API keys.

Active PRs with high attention include the Mattermost thread backfill ([#93865](https://github.com/openclaw/openclaw/pull/93865)) and the WhatsApp phone-code login ([#101294](https://github.com/openclaw/openclaw/pull/101294)).

## Bugs & Stability
**Critical (P0):**
- **[#104721 – All tool results return "(see attached image)" literal string](https://github.com/openclaw/openclaw/issues/104721)**  
  *Regression causing complete data loss in tool output. The placeholder string replaces actual file content. No fix PR yet; maintainers triaged as P0. Impact: ux-release-blocker.*
- **[#45003 – Script to restore session history archived by daily reset](https://github.com/openclaw/openclaw/issues/45003)** (P0, closed) – feature request but closed; may need re-evaluation.

**High severity (P1) bugs reported today (open):**
- **[#40001 – Write tool lacks append mode – cron sessions destroy shared files](https://github.com/openclaw/openclaw/issues/40001)** – data loss risk; fix PR may be open.
- **[#86996 – Active Memory + Codex app-server path causes latency and timeouts](https://github.com/openclaw/openclaw/issues/86996)** – impacts multiple channels.
- **[#91009 – Codex PreToolUse relay spawns CPU-bound processes, stalls gateway](https://github.com/openclaw/openclaw/issues/91009)** – resource exhaustion.
- **[#103917 – Gateway crashes on unhandled FsSafeError after workspace directory deleted](https://github.com/openclaw/openclaw/issues/103917)** – crash loop.
- **[#104516 – Zero-value resetArchiveRetention causes silent data loss](https://github.com/openclaw/openclaw/issues/104516)** – fix PR open.

**Regressions noted:**
- `#104721` (tool output placeholder), `#90213` (legacy migration warnings persist after fix), `#76042` (clean install blocked since 2026.5.x).

Several fixes are in transit: prompt cache stabilization ([#102189](https://github.com/openclaw/openclaw/pull/102189)), idempotent nack callbacks ([#104919](https://github.com/openclaw/openclaw/pull/104919)), and exec approval fallback ([#104923](https://github.com/openclaw/openclaw/pull/104923)).

## Feature Requests & Roadmap Signals
Strong community desire for:
- **Cross-platform desktop apps** (#75) – likely a long-term engineering effort.
- **Security enhancements:** Masked secrets (#10659), filesystem sandboxing (#7722), memory trust tagging (#7707), exec-approval deny list (#6615) – these may land in future releases given multiple PRs and high priority.
- **Dynamic model discovery** (#10687) – requested for OpenRouter and other fast-changing providers.
- **Voice call improvements** (#8355 – streaming TTS pipeline) – already gaining traction.
- **WhatsApp sticker support** (#7476) and **Slack Block Kit** (#12602) – minor but useful.

Based on active PRs, the next version is likely to include MCP Apps Phase 0, the SQLite lifecycle hardening (#104859), and the embedded prompt cache fix (#102189). The conversational onboarding is already in beta.

## User Feedback Summary
- **Positive:** The conversational onboarding (v2026.7.1-beta.5) is a clear win for new users. Several fixes for channel-specific issues (Feishu, Discord, Mattermost) show responsiveness.
- **Pain points:** Security remains the loudest concern – users want visible protection against prompt injection, credential leaks, and memory poisoning. Stability regressions (tool output placeholder #104721, gateway memory leaks #87109, session isolation failures #84903) are causing frustration. The lack of Linux/Windows apps (#75) continues to limit adoption.

## Backlog Watch
- **[#75 – Linux/Windows Clawdbot Apps](https://github.com/openclaw/openclaw/issues/75)** – 110 comments, 81 👍, created Jan 2026. No maintainer response in tags. Needs product decision.
- **[#10687 – Dynamic model discovery](https://github.com/openclaw/openclaw/issues/10687)** – 10 comments, 3 👍, created Feb 2026. Tagged “needs-maintainer-review” and “needs-product-decision”.
- **[#9409 – Improve context overflow error message](https://github.com/openclaw/openclaw/issues/9409)** – 10 comments, 3 👍, Feb 2026. Simple fix, no action.
- **[#9637 – Accessibility: disable emojis in TUI](https://github.com/openclaw/openclaw/issues/9637)** – 6 comments, 0 👍, Feb 2026. Neglected despite clear accessibility impact.
- **[#93884 – Document gateway host agent runtime boundary](https://github.com/openclaw/openclaw/issues/93884)** – 7 comments, P3, created Jun 2026. Decision captured but not documented.

Several issues tagged `clawsweeper:needs-maintainer-review` have been waiting for weeks, indicating maintainer bandwidth may be stretched. The 450+ issues updated daily suggest a vibrant but sometimes overloaded support pipeline.

---

## Cross-Ecosystem Comparison

# AI Agent Open-Source Ecosystem: Cross-Project Comparison Report

**Date:** 2026-07-12  
**Prepared for:** Technical decision-makers and developers evaluating the personal AI agent/assistant landscape

---

## 1. Ecosystem Overview

The personal AI agent open-source ecosystem is experiencing a period of **intense, parallel development** across multiple projects, with approximately 600+ issues and 700+ PRs updated in the last 24 hours alone. The landscape is fragmented but converging around shared challenges: security hardening (credential leakage, prompt injection, authorization gaps), performance optimization (prompt caching, context management), and platform expansion (Windows/Linux parity, messaging channel diversity). While each project targets slightly different developer personas—from embedded/IoT (PicoClaw, NanoClaw) to full-stack desktop (OpenClaw, Hermes Agent) to enterprise workflow automation (IronClaw, ZeroClaw)—common infrastructure concerns like SQLite lifecycle management, MCP protocol support, and model-agnostic memory subsystems are emerging as universal requirements. The ecosystem is **highly reactive to community feedback**, with security audits and stability regressions (particularly from recent major releases) dominating today's conversations, suggesting a maturation phase where robustness is prioritized over raw feature velocity.

---

## 2. Activity Comparison

| Project | Issues Updated (24h) | PRs Updated (24h) | PRs Merged/Closed (24h) | New Release? | Health Assessment |
|---|---|---|---|---|---|
| **OpenClaw** | 450 | 500 | 223 issues, 242 PRs | ✅ v2026.7.1-beta.5 | **Very High** – production-scale activity, rapid closure rate |
| **NanoBot** | 21 | 22 | 5 PRs | ❌ | **Moderate** – high security audit activity, low merge throughput |
| **Hermes Agent** | 50 | 50 | 2 PRs, 8 issues | ❌ | **Moderate** – active bug reporting but review bottleneck (48 open PRs) |
| **PicoClaw** | 1 | 2 (1 merged) | 1 PR | ❌ | **Low** – maintenance phase, critical Matrix bug unresolved |
| **NanoClaw** | 2 | 7 (1 closed) | 1 PR (RFC, closed) | ❌ | **Moderate** – active core development, low community engagement |
| **NullClaw** | 2 | 0 | 0 | ❌ | **Low** – maintenance phase, Telegram bug persists |
| **IronClaw** | 8 | 50 | 13 PRs | ❌ | **High** – strong development velocity, platform gaps unaddressed |
| **LobsterAI** | 3 (all stale) | 1 (stale) | 0 | ❌ | **Dormant** – 3+ months without maintainer response |
| **TinyClaw** | 0 | 0 | 0 | ❌ | **Inactive** – no activity |
| **Moltis** | 0 | 1 (open) | 0 | ❌ | **Low** – calm state, single PR pending |
| **CoPaw** | 24 | 7 | 4 PRs | ❌ | **Moderate-High** – v2.0.0 regressions driving bug reports, rapid dark-mode fix |
| **ZeptoClaw** | 0 | 0 | 0 | ❌ | **Inactive** – no activity |
| **ZeroClaw** | 50 | 50 | 1 PR | ❌ | **Very High** – heavy development, but severe S1 bugs unfixed |

**Key observation:** Only OpenClaw released a new version today. The ecosystem is in a **code-heavy, release-light** phase, with many projects accumulating merge debt while prioritizing feature branches.

---

## 3. OpenClaw's Position

**Advantages vs. peers:**
- **Scale:** 450 issues/500 PRs daily is 9x the next most active project (IronClaw/ZeroClaw at ~50 each). This reflects both a larger user base and more maintainer bandwidth.
- **Release cadence:** v2026.7.1-beta.5 shipped today with conversational onboarding—a UX innovation not present in any peer project. NanoBot and Hermes Agent have no comparable guided setup.
- **Community engagement:** Issue #75 (Linux/Windows apps) has 110 comments and 81 👍—the highest engagement signal across all projects. OpenClaw’s community is both larger and more vocal.
- **Fix velocity:** ~242 PRs closed/merged vs. 2-13 for peers. OpenClaw resolves issues at 20-100x the rate of comparable projects.
- **Security investment:** Active PRs for masked secrets (#10659), memory trust tagging (#7707), and exec-approval deny lists (#6615) show security is treated as a first-class feature, not an afterthought.

**Technical approach differences:**
- **SQLite lifecycle hardening** (PR #104859) is more comprehensive than NanoBot's workspace serialization fix (#4888) or Hermes Agent's config migration patches.
- **MCP Apps Phase 0** (PR #104742) positions OpenClaw as an MCP **host**, not just a client—a strategic architectural decision that peer projects (except ZeroClaw’s WASM plugin sidecar PR #8661) have not matched.
- **Conversational onboarding** uses a real agent-loop setup with model-judged approvals, a sophistication level absent in NanoBot’s guided WebUI flows (PR #4855) or Hermes Agent’s desktop setup.

**Community size comparison:**
| Metric | OpenClaw | Nearest Peer |
|---|---|---|
| Issues updated/day | 450 | 50 (ZeroClaw, IronClaw) |
| Contributors visible | Dozens (multiple named PR authors) | ~5-10 per project |
| Community pressure (👍 on top issue) | 81 (issue #75) | 0-3 on most peer issues |
| Backlog response | Issues tagged `needs-maintainer-review` but many closed | Peer backlogs show weeks of silence (e.g., LobsterAI, PicoClaw #3203) |

**Verdict:** OpenClaw is the **clear market leader** in community size, release maturity, and fix throughput. Its main risk is managing scale—450 daily issues could outpace maintainer capacity if growth continues linearly.

---

## 4. Shared Technical Focus Areas

The following requirements appear across **3+ projects**, indicating ecosystem-wide priorities:

| Requirement | Projects Affected | Specific Needs |
|---|---|---|
| **Security hardening (credentials, authorization, sandboxing)** | OpenClaw, NanoBot, Hermes Agent, CoPaw, ZeroClaw | Masked secrets (#10659 OpenClaw, #4784 NanoBot); exec-approval bypass (#35357 Hermes); sandbox failures (#5951 CoPaw, Windows); TOCTOU credential pool (#8040 Hermes) |
| **Prompt caching / context management** | OpenClaw, NanoBot, CoPaw, ZeroClaw | Prefix preservation (#2463 NanoBot); context compression splits tool pairs (#5960 CoPaw); 32k context budget exceeded (#5808 ZeroClaw); embedded cache breaks (#102175 OpenClaw) |
| **Cross-platform support (Windows/Linux parity)** | OpenClaw, Hermes Agent, IronClaw, CoPaw, NanoClaw | Windows sandbox broken (#5951 CoPaw); Visual Studio compilation fails (#3017 NanoClaw); local-dev-yolo crashes (#5999 IronClaw); long-standing Linux/Windows app request (#75 OpenClaw, 110 comments) |
| **MCP / plugin ecosystem** | OpenClaw, NanoBot, Hermes Agent, ZeroClaw, IronClaw | MCP Apps Phase 0 (#104742 OpenClaw); MCP reconnect crash (#4764 NanoBot); local MCP transport missing (#5998 IronClaw); WASM plugin sidecar (#8661 ZeroClaw); selective tool loading (#690 Hermes) |
| **Messaging channel stability** | PicoClaw, NullClaw, Hermes Agent, CoPaw, ZeroClaw | Matrix reconnection (#3203 PicoClaw); Telegram idle timeout (#972 NullClaw); Slack not installed (#3944 Hermes); WeChat orphaned tool results (#5962 CoPaw); Discord feature parity (#7831 ZeroClaw) |
| **Data migration / config upgrade reliability** | Hermes Agent, CoPaw, OpenClaw | Config v30→v32 drops Feishu (#62723 Hermes); v2.0.0 data mapping loss (#5964, #5967 CoPaw); migration warnings persist (#90213 OpenClaw) |
| **Scheduled / cron job reliability** | OpenClaw, Hermes Agent, ZeroClaw, CoPaw | Cron jobs fail silently (#2788 Hermes); cron documentation missing (#7762 ZeroClaw); cron run now feature (#3249 PicoClaw merged) |

**Common root cause:** Many of these issues stem from **rapid feature expansion outpacing testing infrastructure**—particularly around edge cases (Windows, non-UTF-8 locales, network partitions, large payloads).

---

## 5. Differentiation Analysis

| Dimension | OpenClaw | NanoBot | Hermes Agent | ZeroClaw | IronClaw |
|---|---|---|---|---|---|
| **Primary target user** | End users (desktop-first) | Developers (API-first) | Enterprise teams | Power users / homelab | Enterprise / NEAR AI ecosystem |
| **Core language** | Unspecified (likely Go/Rust) | Python | Unspecified | Rust (SIGSEGV suggests unsafe code) | Rust (crate-based) |
| **Architecture** | Monorepo + MCP host | Modular, provider-agnostic | Gateways + desktop apps | WASM plugin sidecar | Crates + extension runtime |
| **Onboarding philosophy** | Conversational agent-loop | Guided WebUI flows | Desktop installer + auto-config | CLI + config files | NEAR AI attestation (complex) |
| **Security approach** | Proactive (masked secrets, memory tagging) | Reactive (post-audit fixes) | Partial (Tirith approval, but gaps) | SOP-based access policies | Attestation-focused |
| **Differentiator** | **Ecosystem scale & release maturity** | **Deep security audit** (42 findings) | **Autonomous evaluation engine** (HAEE) | **WASM-first plugin runtime** | **Enterprise attestation & CI hardening** |
| **Weakness** | Scaling maintainer bandwidth | Prompt cache architecture debt | PR review bottleneck | S1 bugs unfixed (SIGSEGV) | Windows & local MCP gaps |

**Key takeaway:** OpenClaw competes on **breadth and polish**; NanoBot on **security depth**; ZeroClaw on **architectural innovation** (WASM); Hermes Agent on **enterprise features** (HAEE evaluation). They are not direct substitutes—they target different layers of the stack and different user maturity levels.

---

## 6. Community Momentum & Maturity

**Tier 1 – High Velocity / Production-Grade**
- **OpenClaw** – 450 issues/day, 500 PRs/day, shipping betas. Most mature project with largest community.
- **ZeroClaw** – 50 issues/50 PRs, strong v0.8.3 pipeline, but S1 bugs without fixes.
- **CoPaw** – Post-v2.0.0 firefighting mode; high bug report volume but rapid UI fixes.

**Tier 2 – Active Development with Bottlenecks**
- **NanoBot** – Strong security audit momentum (42 findings), but low merge rate and unresolved cache architecture.
- **Hermes Agent** – 50 PRs open, only 2 merged today. Feature-rich (HAEE, desktop) but review-starved.
- **IronClaw** – 13 PRs merged, CI hardening focus; platform gaps mute community satisfaction.
- **NanoClaw** – Core team driving guard seam, tasks, memory refactors; community engagement minimal.

**Tier 3 – Maintenance / Low Activity**
- **PicoClaw** – Single merged PR (skill toggle); critical Matrix bug unresolved for 10 days.
- **NullClaw** – Two issues, no PR activity. Telegram bug persists without maintainer acknowledgment.
- **Moltis** – Single PR pending (CalDAV fix); otherwise dormant.

**Tier 4 – Inactive / Dormant**
- **LobsterAI** – 3+ months stale; no maintainer response on any issue.
- **TinyClaw** – Zero activity.
- **ZeptoClaw** – Zero activity.

**Trend:** The ecosystem is **bimodal**—three projects (OpenClaw, ZeroClaw, CoPaw) dominate activity, while six projects are effectively dormant or in low-power mode. This suggests **consolidation pressure**: users of smaller projects may migrate to the larger ones, especially as OpenClaw adds Linux/Windows desktop apps (#75) and closes the feature gap.

---

## 7. Trend Signals

**1. Security is the #1 community demand across all active projects.**
- *Evidence:* NanoBot’s 42-finding audit, OpenClaw’s masked secrets/memory tagging, Hermes Agent’s Tirith gaps, ZeroClaw’s SSRF protections, CoPaw’s sandbox failures.
- *Implication:* Projects that do not prioritize security hardening (especially credential isolation, prompt injection defense, and authorization models) will lose users to those that do. Expect **NIST-style security guidelines** to emerge for the ecosystem.

**2. Local model performance is a non-negotiable requirement.**
- *Evidence:* NanoBot #4867 (60s/turn with Ollama, “totally unusable”); ZeroClaw #5808 (32k budget exceeded); OpenClaw PR #104904 (Groq TPM fix).
- *Implication:* Prompt caching architecture (prefix preservation, deterministic construction) is the **single most impactful performance lever**. NanoBot’s unresolved #2463 is a critical competitive disadvantage.

**3. “Stability over features” sentiment is rising.**
- *Evidence:* CoPaw’s v2.0.0 regressions generating 10+ critical bug reports in one day; Hermes Agent’s `write_file` silently failing (#52267, #62948); ZeroClaw’s SIGSEGV crash (#8654).
- *Implication:* Users are signaling that **reliable tool execution and data integrity** matter more than new channel integrations. Expect the next wave of releases to be **stabilization-focused** (point releases, not major versions).

**4. Platform lock-in is breaking down—users want model/provider flexibility.**
- *Evidence:* NullClaw #975 (Grok CLI provider); OpenClaw #10687 (dynamic model discovery); IronClaw #5969 (GLM-5.2 missing from default list); CoPaw #4124 (OAuth for OpenAI/Codex).
- *Implication:* Provider-agnostic architectures (MCP, model abstraction layers, CLI-based providers) are table stakes. Projects that hardcode provider-specific logic will face user pressure to abstract.

**5. The messaging channel “surface area” is reaching diminishing returns.**
- *Evidence:* Issues across Telegram (NullClaw, CoPaw), Matrix (PicoClaw), Feishu (OpenClaw), Discord (ZeroClaw, OpenClaw), WhatsApp (Hermes Agent), Slack (Hermes Agent).
- *Implication:* The low-hanging fruit of channel integration is largely picked. Future value lies in **channel-specific polish** (streaming TTS, block kits, multi-message modes) and **unified state management** across channels—not adding new ones.

**6. Enterprise adoption drivers are becoming visible.**
- *Evidence:* IronClaw’s attestation and CI hardening; Hermes Agent’s pricing overrides (#9403); OpenClaw’s MCP Apps Phase 0 (enterprise plugin ecosystem); ZeroClaw’s SOP-based access policies (#8563) and Kanban board (#8832).
- *Implication:* The “workforce of AI agents” vision is attracting corporate interest. Multi-tenancy, audit logging, SSO (CoPaw #4124), and contractual pricing will become differentiators in the next 6-12 months.

**7. Developer experience is a growing pain point.**
- *Evidence:* NanoBot missing test dependencies (#4887); Hermes Agent silent git in `hermes update` (#3523); CoPaw PyInstaller missing submodules (#5965); NanoClaw Windows compilation failure (#3017).
- *Implication:* Projects that invest in **one-command setup, reproducible builds, and cross-platform CI** will retain developer contributors. The ecosystem is still too fragile for casual onboarding.

---

## Summary Recommendations for Technical Decision-Makers

| If you need… | Choose… | Why |
|---|---|---|
| Largest ecosystem, fastest bug fixes, mature UX | **OpenClaw** | 20-100x fix velocity vs peers; conversational onboarding; active security investment |
| Security-first deployment | **NanoBot** (after audit fixes land) | Deepest code audit; 42 findings addressed; but caching performance gap |
| Enterprise workflow automation | **IronClaw** | Attestation, extension runtime, CI hardening; but Windows/local MCP gaps |
| Rust/WASM ecosystem innovation | **ZeroClaw** | WASM-first plugins, SOPs, goal-mode; but S1 crashes and review queue |
| Lightweight/specialized use case | **NanoClaw or PicoClaw** | Core architecture changes (guard seam, tasks); but small communities |
| **Avoid** | **LobsterAI, TinyClaw, ZeptoClaw** | Dormant projects with no maintainer response in 3+ months |

The ecosystem is **consolidating around OpenClaw and ZeroClaw** as the dominant high-activity poles. Projects that resolve their critical bugs (NanoBot’s caching, CoPaw’s sandbox, Hermes’ review bottleneck) in the next 30 days will remain competitive; those that do not may see user migration.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest – 2026-07-12

## Today's Overview

NanoBot is experiencing a **high-activity phase** with 21 issues and 22 pull requests updated in the last 24 hours. A major security and correctness audit (42 findings, **#4815**) has dominated recent submissions, with multiple DoS, secret leakage, and authorization bypass vulnerabilities reported by community contributor `hamb1y`. In parallel, the maintainer team is actively merging fixes: three PRs were closed/merged today, including a critical MCP crash fix (**#4764**) and two refactors for sustained goals and runtime context. No new releases were published. The project shows strong community engagement but faces significant stability and security debt that will likely require focused resolution before the next release.

## Releases

None – no new versions were published today.

## Project Progress

Today **5 pull requests were merged or closed** (out of 22 updated). Key merged PRs:

- **#4764 (bug, priority p1)** – Fix MCP reconnect crash: isolates cancel scopes to prevent gateway crash when a streamable-http server times out.  
- **#4844 (refactor, priority p1)** – Refactors sustained-goal workflow: replaces legacy `long_task`/`complete_goal` with explicit `/goal` triggers and a compact runtime prompt template.  
- **#4891 (feature, priority p2)** – Makes runtime context (time, channel info) opt-in and prefix-stable, preventing unnecessary prompt changes that break caching.

These changes improve reliability for MCP integrations, simplify the goal system, and lay groundwork for better performance with local models (e.g., Ollama). Additionally, two closed issues (**#4860** [command not found] and **#4302** [MCP reconnect crash]) were resolved.

**Open PRs of note** (not merged today) include:

- **#4889** (security, p1) – Authorize destructive priority commands, adding an admin allowlist.  
- **#4888** (fix, p1) – Serialize workspace writes to prevent concurrent session corruption.  
- **#4880** (security, p1) – Default `restrict_to_workspace` to `True`.  
- **#4890** (fix, p2) – Prevent unbounded session lock growth using `WeakValueDictionary`.  
- **#4875** (refactor, p2) – Extract MCP tool provider lifecycle.

## Community Hot Topics

The most active discussions revolve around two interconnected issues:

- **#2463** (14 comments, open since March) – Architectural problem: NanoBot does not preserve the exact prompt prefix previously sent to the model. This breaks prompt caching and is a root cause of performance problems with local models.  
- **#4867** (4 comments, created 2 days ago) – Follow-up to #2463: calls to Ollama add an extra 60 seconds per turn. Users with local 32GB VRAM setups find the project *“totally unusable”*.

These issues reflect a **core community need for deterministic, cache-friendly prompt construction**. The proposed solution (**#4371**, a PR that adds a breakpoint before the growing “Recent History” block) has been open since June and is marked as conflicting, indicating maintainer attention is required to finalise a design.

Other active topics include the security audit summary **#4815** (0 comments, but 42 findings referenced across many sub-issues) and PR **#4855** (guided WebUI setup flows) which aims to improve onboarding.

## Bugs & Stability

Today’s reports are dominated by security and reliability issues, many identified in the deep code audit. Ranked by severity:

### Critical (potential data loss, unauthorised access, crashes)
- **DoS: No rate limiting on `/v1/chat/completions`** (**#4782**) – unthrottled API leads to token cost exhaustion.  
- **DoS: Unbounded WebSocket connections** (**#4781**) – no `max_connections`, trivial FD exhaustion.  
- **DoS: Unbounded `asyncio.Queue` in MessageBus** (**#4780**) – no backpressure, memory exhaustion.  
- **Security: API keys leaked between providers** (**#4784**) – global `os.environ` mutation.  
- **Security: CLI subprocesses inherit entire env** (**#4783**) – API keys exposed to installed apps.  
- **Security: `process_direct()` bypasses all channel auth** (**#4779**) – 6+ callers, including SDK and API.  
- **Security: `/stop` cancels other users' tasks** (**#4777**) – keyed by session, not sender.  
- **Security: “system” channel has zero authorization** (**#4778**).  
- **Security: Docker Compose disables AppArmor/seccomp** (**#4886**).  
- **Security: Unsigned CLI app registry** (**#4885**).  
- **Security: WebFetch sends user URLs to Jina** (**#4884**).  
- **Security: API session lock map grows without bounds** (**#4883**) – fix PR #4890 open.  
- **Memory: OOM on multi-GB files** (**#4785**) – `read_file` loads entire file before truncation.

### High (crashes, data corruption, developer friction)
- **Windows UTF-16 corruption** (**#4881**) – ExecTool decodes all subprocess output as UTF-8.  
- **Dream content diff false positives** (**#4882**) – empty files reported as modified.  
- **Feishu tests fail due to missing dependency** (**#4887**) – `dev` extra omits `lark-oapi`.

**Fix PRs already open** for several of these: #4889 (authorization), #4888 (workspace serialization), #4880 (restrict_to_workspace), #4764 (MCP crash – merged), #4842 (MCP shutdown – open), #4890 (lock leak).

## Feature Requests & Roadmap Signals

The following user requests and ongoing PRs indicate strong community demand and probable roadmap items:

- **Prompt prefix preservation** (#2463, #4867) – essential for caching. PR **#4371** (add breakpoint before Recent History) is the leading candidate but has conflicts. Expect this to be prioritised for the next release.
- **Guided WebUI setup flows** (PR **#4855**) – aims to productise channel configuration and onboarding.
- **Session-scoped model presets** (PR **#4866**, p1) – persists model selection in session metadata, allowing per-session provider/modal binding.
- **Opt-in sustained goals** (PR **#4879**, p2) – gates automatic background goal pursuit behind a flag; addresses user complaints about blocking UI.
- **Opt-in runtime context** (PR **#4891** – merged today) – stops injecting time/channel info into every prompt by default, improving caching stability.
- **Weather Skill** (PR **#4145**, open since June) – a community-contributed skill example that remains unmerged due to conflicts.

**Prediction for next version**: Expect a release focused on **performance (prompt caching) and security hardening** (rate limiting, env isolation, workspace restrictions). The sustained-goal refactor and session-preset features are likely to land soon.

## User Feedback Summary

**Positive signals**: High-quality contributions from multiple community members (hamb1y, chengyongru, adabarbulescu, Re-bin) indicate an engaged developer base. The depth of the security audit (42 findings) shows users are willing to invest deeply in improving the project.

**Pain points**: The most vocal dissatisfaction is about **performance with local models** – the 60-second overhead per turn (#4867) makes NanoBot unusable for Ollama users with adequate VRAM. This is linked to the unresolved prompt prefix architecture (#2463).  
**Developer experience** also suffers: missing test dependencies (#4887) and the “no such command” issue (#4860, now closed) frustrate new users.  
**Security concerns** are now front and centre; users are aware that default configurations are unsafe (e.g., unrestricted workspace, leaked API keys).

**Satisfaction**: The rapid merging of critical fixes (MCP crash, runtime context opt-in) suggests maintainers are responsive, which likely sustains community trust.

## Backlog Watch

Items that have been open for an extended period without maintainer resolution:

- **Issue #2463** (created March 2026) – Architecture: prompt prefix not preserved. 14 comments, no closure. This is the #1 blocker for caching performance. Directly related to PR #4371 (June 2026, conflicts). **Needs maintainer decision** on the correct design.
- **PR #4145** (June 2026, Weather Skill) – Community feature addition with conflicts. Author `chinhkrb113` has not updated in over a month. **Should be either merged or closed** with guidance.
- **PR #4021** (May 2026, Codex dedup fix) – AI-assisted fix for a 400 duplicate-item error. Still open with conflicts. Low activity but users with Codex provider will benefit.
- **Issue #4782** (DoS rate limiting) – No fix PR yet. Although multiple DoS issues exist, this one has no associated PR. **Maintainer should assign or respond** to indicate priority.

**Action recommended**: The maintainer team should schedule a focused sprint to resolve the prompt prefix architecture (#2463) and merge the blocking #4371, as it affects both performance and community sentiment. Security fixes with open PRs (#4889, #4880, #4888) should be reviewed and merged quickly to reduce exposure.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-07-12

## 1. Today's Overview

Project activity remains very high: 50 issues and 50 pull requests were updated in the last 24 hours, but the merge rate is low — only 2 PRs were closed/merged, and 8 issues were closed (many as duplicates or non-reproducible). No new releases were published. The community is actively reporting bugs (especially around config migrations, tool reliability, and platform-specific failures) while submitting feature PRs for autonomous evaluation, session management, and platform integrations. The large volume of open PRs (48) suggests a review and merge bottleneck that may slow momentum if not addressed.

## 2. Releases

**No new releases were published today.** The last release remains unknown from this data.

## 3. Project Progress

Only **2 pull requests were closed/merged** today:

- **[PR #62966](https://github.com/NousResearch/hermes-agent/pull/62966)** (CLOSED): Release desktop v0.16.8 — a version bump synchronising macOS and Windows builds, includes all fixes from hc-511–517.
- **[PR #62916](https://github.com/NousResearch/hermes-agent/pull/62916)** (CLOSED, `sweeper:implemented-on-main`): Added native OpenCode Go provider support to the desktop GUI.

**Closed issues that were resolved** (some with fix on main):

| Issue | Title | Status |
|-------|-------|--------|
| [#60385](https://github.com/NousResearch/hermes-agent/issues/60385) | MCP server processes leak on reconnect | Fixed |
| [#62948](https://github.com/NousResearch/hermes-agent/issues/62948) | write_file silently fails when content > ~8 KB | Fixed on main |
| [#62940](https://github.com/NousResearch/hermes-agent/issues/62940) | Gemini parallel tool calls concatenated → arguments dropped | Fixed on main |
| [#56058](https://github.com/NousResearch/hermes-agent/issues/56058) | Desktop model picker persists to global config | Fixed |
| [#62905](https://github.com/NousResearch/hermes-agent/issues/62905) | Cron tool calls route to interactive approval after restart | Closed (cannot reproduce) |

These fixes address memory leaks, silent file write failures, and model picker regressions.

## 4. Community Hot Topics

The most discussed issues reveal three core concerns: **reliability of infrastructure**, **security gaps**, and **missing feature parity**.

- **[#38240](https://github.com/NousResearch/hermes-agent/issues/38240) (21 comments)** — *Skills index watchdog: index is stale or degraded.* An automated probe repeatedly fails, meaning the Skills Hub documentation is out of date. This is a meta-maintenance issue that undermines the documentation for skills.
- **[#2788](https://github.com/NousResearch/hermes-agent/issues/2788) (6 comments)** — *Cron jobs never run or fail silently.* Users cannot debug cron failures because logging is insufficient. This is a long-standing user frustration.
- **[#35357](https://github.com/NousResearch/hermes-agent/issues/35357) (6 comments)** — *Tirith approval gate does not cover non-shell tools.* The human-in-the-loop system is bypassed by `send_message`, `write_file`, etc. Users are concerned about safety.
- **[#3944](https://github.com/NousResearch/hermes-agent/issues/3944) (5 comments)** — *Slack integration in gateway fails because slack-bolt not installed.* Basic install docs lead to broken experience.
- **[#9403](https://github.com/NousResearch/hermes-agent/issues/9403) (5 comments)** — *Pricing overrides, contract pricing, and sync CLI.* Enterprise users want custom pricing catalogs.

**PRs with significant activity** (comment counts shown as `undefined` but still heavily discussed):  
- **[#61645](https://github.com/NousResearch/hermes-agent/pull/61645)** — HAEE autonomous evaluation engine (feature PR)  
- **[#61652](https://github.com/NousResearch/hermes-agent/pull/61652)** — Compression fix preserving visible transcript  
- **[#61621](https://github.com/NousResearch/hermes-agent/pull/61621)** — Fix fallback chain refresh during model switch

## 5. Bugs & Stability

The project faces **several high‑severity open bugs**, many with existing fix PRs awaiting merge.

### Critical / P1
| Issue | Summary | Status | Fix PR? |
|-------|---------|--------|---------|
| [#62723](https://github.com/NousResearch/hermes-agent/issues/62723) | Config migration v30→v32 silently drops `platforms.feishu` in multi-profile setups | **OPEN** | No linked PR |
| [#62948](https://github.com/NousResearch/hermes-agent/issues/62948) | `write_file` silently fails for content >~8 KB (closed as duplicate, fixed on main) | CLOSED | Implemented on main |

### High / P2
| Issue | Summary | Status | Fix PR? |
|-------|---------|--------|---------|
| [#62914](https://github.com/NousResearch/hermes-agent/issues/62914) | `_emit_pending_fallback_notice()` crashes API call with `AttributeError` on fallback success path | **OPEN** | None |
| [#8040](https://github.com/NousResearch/hermes-agent/issues/8040) | Credential pool TOCTOU – process‑local lock doesn't protect cross‑process file access | **OPEN** | None |
| [#2975](https://github.com/NousResearch/hermes-agent/issues/2975) | WhatsApp bridge only checks `PATH`, misses macOS bundled Node runtimes | **OPEN** | None |
| [#3523](https://github.com/NousResearch/hermes-agent/issues/3523) | `hermes update` regressions: silent git output + unnecessary stashes | **OPEN** | None |
| [#62936](https://github.com/NousResearch/hermes-agent/issues/62936) | Telegram uploads >15 MB always time out due to missing `media_write_timeout` | **OPEN** | None |
| [#52267](https://github.com/NousResearch/hermes-agent/issues/52267) | `write_file` returns success but does not write to disk (Windows) | **OPEN** | None |

### Moderate / P3
Many P3 bugs remain open, including silent plugin registration ([#2765](https://github.com/NousResearch/hermes-agent/issues/2765)), incorrect `/insights` model name ([#3988](https://github.com/NousResearch/hermes-agent/issues/3988)), and context pressure missing in Telegram ([#3953](https://github.com/NousResearch/hermes-agent/issues/3953)).

**Notable fix PRs open** (all created 2026-07-09, still unmerged):  
- [#61662](https://github.com/NousResearch/hermes-agent/pull/61662) — Cap `launchd` stderr at CRITICAL (mitigates runaway gateway logs)  
- [#61659](https://github.com/NousResearch/hermes-agent/pull/61659) — Add timeout to `gws_bridge` subprocess  
- [#61653](https://github.com/NousResearch/hermes-agent/pull/61653) — Fix profile `terminal.cwd` override in Desktop  
- [#61652](https://github.com/NousResearch/hermes-agent/pull/61652) — Preserve visible transcript during compression  
- [#61621](https://github.com/NousResearch/hermes-agent/pull/61621) — Refresh fallback chain on model switch  
- [#61629](https://github.com/NousResearch/hermes-agent/pull/61629) — Fix cron `.sh` script bash detection on Windows  
- [#61641](https://github.com/NousResearch/hermes-agent/pull/61641) — Normalize `/approve`/`/deny` tokens in yes/no prompts  

These PRs target many of the P2 bugs listed above, but they have not yet been merged.

## 6. Feature Requests & Roadmap Signals

The community is requesting **more configuration control, better platform support, and autonomous capabilities**.

| Feature | Issue/PR | Likely Next‑Version Candidate |
|---------|----------|-------------------------------|
| Autonomous Evaluation & Self‑Improvement Engine (HAEE) | [#61645](https://github.com/NousResearch/hermes-agent/pull/61645) | PR open, could land in v0.17 |
| Native OpenCode Go provider (desktop) | [#62916](https://github.com/NousResearch/hermes-agent/issues/62916) | Already implemented on main |
| Copy conversations between profiles | [#61630](https://github.com/NousResearch/hermes-agent/pull/61630) | PR open, low risk |
| Pricing overrides & contract pricing | [#9403](https://github.com/NousResearch/hermes-agent/issues/9403) | No PR yet, Phase 4 unimplemented |
| MCP Server Management & selective tool loading | [#690](https://github.com/NousResearch/hermes-agent/issues/690) | No PR; planned per roadmap |
| Desktop UI for custom OpenAI‑compatible provider setup | [#38975](https://github.com/NousResearch/hermes-agent/issues/38975) | No PR, but frequently requested |
| Context Cockpit (read‑only glanceable dashboard) | [#61633](https://github.com/NousResearch/hermes-agent/pull/61633) | PR open, risk contained |
| Slack auto‑onboard bot on channel join | [#61635](https://github.com/NousResearch/hermes-agent/pull/61635) | PR open, low risk |
| LLM internal clock / date awareness | [#62904](https://github.com/NousResearch/hermes-agent/issues/62904) | Infrastructure request; no PR |

The HAEE PR is the most ambitious – it adds a full self‑improvement pipeline with tests, sandboxing, and a leaderboard. It may require careful review before merging.

## 7. User Feedback Summary

Common pain points voiced in today’s issues:

- **Configuration fragility**: Config migration silently drops critical sections (Feishu platforms), causing users to lose connectivity. (#62723)
- **Tool reliability issues**: `write_file` unpredictably fails or appears to succeed without writing (#52267, #62948). Users on Windows are especially affected.
- **Platform integration gaps**: Telegram missing context pressure monitor (#3953), missing message history (#3210). Slack not installed by default (#3944). WhatsApp fails on macOS (#2975). Feishu tables fall back to plain text (fixed in PR #61647).
- **Cron & automation**: Cron jobs are not debuggable (#2788) and can stall after gateway restart (#62905). Unreliable execution hurts trust in the scheduler.
- **Security concerns**: Human‑in‑the‑loop is bypassed by non‑shell tools (#35357). The credential pool has a TOCTOU vulnerability (#8040).
- **Model/provider confusion**: `/insights` shows wrong model name (#3988). `/provider` shows OpenRouter while custom provider is active (#3292). Custom providers lack context length auto‑detection (#2513).

On a positive note, contributors are actively submitting PRs to fix these issues, demonstrating a strong open‑source community. However, the low merge rate suggests maintainer bandwidth may be a bottleneck.

## 8. Backlog Watch

The following issues are **long‑standing, open, and have not received a maintainer response or fix PR**, despite moderate to high impact:

| Issue | Age (Created) | Title | Comments | Severity |
|-------|---------------|-------|----------|----------|
| [#2788](https://github.com/NousResearch/hermes-agent/issues/2788) | 2026-03-24 | Cron jobs never run or fail silently | 6 | P2 |
| [#690](https://github.com/NousResearch/hermes-agent/issues/690) | 2026-03-08 | MCP Server Management (discovery, selective loading, CLI) | 3 | P3 (but roadmap) |
| [#35357](https://github.com/NousResearch/hermes-agent/issues/35357) | 2026-05-30 | Tirith approval gate bypass for non‑shell tools | 6 | P3 (security) |
| [#2975](https://github.com/NousResearch/hermes-agent/issues/2975) | 2026-03-25 | WhatsApp bridge misses macOS bundled Node | 4 | P2 |
| [#3523](https://github.com/NousResearch/hermes-agent/issues/3523) | 2026-03-28 | `hermes update` regressions | 4 | P2 |
| [#8040](https://github.com/NousResearch/hermes-agent/issues/8040) | 2026-04-12 | Credential pool TOCTOU | 3 | P2 (security) |
| [#2513](https://github.com/NousResearch/hermes-agent/issues/2513) | 2026-03-22 | Custom providers lack context length auto‑detection | 3 | P3 |
| [#38240](https://github.com/NousResearch/hermes-agent/issues/38240) | 2026-06-03 | Skills index watchdog degraded | 21 | P3 (meta) |

These items indicate that the project has a **substantial backlog of unresolved community‑reported problems**, especially around cron, security, and platform‑specific behaviour. The automated skills‑index issue (#38240) with 21 comments suggests the documentation pipeline needs maintainer attention.  

**Maintainer action recommended**: Prioritise merging the existing fix PRs (especially those from 2026-07-09) to reduce the open bug count and improve user trust.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-07-12

## 1. Today's Overview
Project activity remains low today. Only one issue (#3203) was updated in the last 24 hours—a stale bug reporting a critical Matrix reconnection failure—and one pull request (#3249) was merged/closed. Two other PRs (#3225, #3222) remain open but have not received comments or reviews for several days. No new releases were published. The overall tempo suggests a maintenance or quiet phase, though the unresolved Matrix sync bug is a significant stability concern.

## 2. Releases
No new releases today.

## 3. Project Progress
The single merged pull request today is:
- **#3249 — Skill enable/disable state + cron RunNow** (merged/closed)  
  Implements support for toggling skill enablement via a state file (`workspace/skills/.skills-state.json`) and a “RunNow” button for cron‑driven skills. This feature is described as a port from the Ethos P6.6 fork and allows disabling skills without restarting the agent.  
  [GitHub: sipeed/picoclaw PR #3249](https://github.com/sipeed/picoclaw/pull/3249)

No other PRs were merged or closed today.

## 4. Community Hot Topics
The only issue with any discussion activity is:
- **#3203 — [BUG] Matrix sync loop has no reconnection logic — silent death after network/server disruption**  
  (2 comments, updated 2026-07-12)  
  The issue describes a permanent failure of the Matrix `/sync` long‑polling loop after any network glitch or homeserver restart. Because the main process survives, systemd’s `Restart=on-failure` never triggers, leaving the agent mute without administrator noticing. No fix PR has been opened yet.  
  [GitHub: sipeed/picoclaw Issue #3203](https://github.com/sipeed/picoclaw/issues/3203)

No other issues or PRs have accumulated comments or reactions.

## 5. Bugs & Stability
**High‑severity bug (unfixed):**
- **#3203** — Matrix sync loop dies silently after network/server disruption. No reconnection logic exists. The agent stays alive but stops receiving/sending Matrix messages.  
  Severity: **critical** (loss of communication without alert).  
  No fix PR is currently linked.

No new bugs, crashes, or regressions were reported today apart from the above.

## 6. Feature Requests & Roadmap Signals
Two open pull requests signal upcoming features or refactoring that may land in the next release:

- **#3225 — Support agent‑specific runtime overrides (open)**  
  Allows per‑agent `max_tokens`, summarization thresholds, and `split_on_marker` via `agents.list` configuration. This indicates a growing need for fine‑grained control over individual agent behaviors.  
  [GitHub: sipeed/picoclaw PR #3225](https://github.com/sipeed/picoclaw/pull/3225)

- **#3222 — refactor(deltachat): cleanup implementation, documentation –200LOC (open)**  
  Drops legacy features, removes hardcoded relay list and password‑based email configuration, and renames APIs. This suggests the DeltaChat integration is being modernised to reduce maintenance burden.  
  [GitHub: sipeed/picoclaw PR #3222](https://github.com/sipeed/picoclaw/pull/3222)

Combined with the merged skill‑toggling feature (#3249), the next version may focus on agent‑level configuration polish and channel backend cleanup.

## 7. User Feedback Summary
Indirect user feedback comes mainly from the open bug #3203, which explicitly states: “no automatic reconnection … systemd fallback does not work”. This is a clear pain point for users relying on Matrix as a messaging channel. The lack of a fix or acknowledgement in the past ten days may cause frustration among self‑hosted operators. No direct satisfaction indicators (e.g., positive comments) are visible in today’s data.

## 8. Backlog Watch
The following items have been open for over a week without maintainer response or substantial progress:

- **#3203 — Matrix reconnection bug** (created 2026-07-02, last updated today but only to mark stale)  
  Urgent — requires a reconnection or watchdog mechanism.

- **#3225 — Agent‑specific runtime overrides** (created 2026-07-04, last activity 2026-07-11)  
  No reviewer comments; code appears ready.

- **#3222 — DeltaChat refactor** (created 2026-07-03, last activity 2026-07-11)  
  No reviewer comments; the PR description notes tests pass.

These PRs might benefit from maintainer review to avoid prolonged stagnation.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-07-12

## 1. Today's Overview
The project saw moderate activity over the past 24 hours, with **2 new issues** opened and **7 pull requests** updated (6 open, 1 closed). No new releases were published. Development remains focused on core architecture changes—guard seam (privileged action decision), tasks one-door delivery, provider-agnostic persistent memory—and on **agent-runner reliability fixes** (stall watchdog, rescue of undelivered replies). Two community bug reports highlight Windows build breakage and misleading quota error logs, both of which lack maintainer responses so far. Overall project health is active; the high PR count (including a closed RFC) suggests a strong development cadence.

## 2. Releases
*No new releases today.*

## 3. Project Progress
Only one PR was closed in the last 24 hours:

- **[#3018 – RFC: temporal (incognito) sessions — throwaway, memory-free DM sessions](https://github.com/nanocoai/nanoclaw/pull/3018)** (closed, not merged)  
  A vision share / RFC proposing ephemeral, no-storage sessions. Closed without merge (as expected per CONTRIBUTING.md for a design discussion).

Six other PRs remain open and are actively advancing:

- [#3020 – fix(agent-runner): rescue undelivered unwrapped replies after the re-wrap nudge](https://github.com/nanocoai/nanoclaw/pull/3020)  
  Addresses silent message drops (#2369, #2393) by catching unwrapped replies.

- [#3019 – fix(agent-runner): stall watchdog to recover from hung in-flight tools](https://github.com/nanocoai/nanoclaw/pull/3019)  
  Prevents container kill when SDK activity stalls for a full heartbeat interval.

- [#2986 – Guard seam: one decision function for every privileged action](https://github.com/nanocoai/nanoclaw/pull/2986)  
  Unifies `allow | hold | deny` logic for all privileged actions in a new `src/guard/` module.

- [#2987 – feat: /add-audit skill — opt-in local audit log](https://github.com/nanocoai/nanoclaw/pull/2987)  
  Adds an audit logging skill for the ncl surface (rebased onto `feat/guard-seam`).

- [#2988 – Tasks: one-door delivery — send_message is the only path out of a task session](https://github.com/nanocoai/nanoclaw/pull/2988)  
  Forces all task session outputs through an explicit destination (part 3/5 of scheduled tasks).

- [#3012 – feat(memory): add provider-agnostic persistent memory](https://github.com/nanocoai/nanoclaw/pull/3012)  
  Scaffolds a shared memory tree across agent providers.

## 4. Community Hot Topics
Both issues opened today have **zero comments and no reactions**, so activity is low, but they represent the most discussed topics by virtue of being the only community interactions.

- **[#3017 – Windows: Visual Studio 2026 + better-sqlite3 v11.10.0 compilation fails](https://github.com/nanocoai/nanoclaw/issues/3017)**  
  Environment: Windows 11, VS 2026, Node 20/24, better-sqlite3 11.10.0. User reports build failure without details of the error. **Underlying need**: Ensure NanoClaw compiles on the latest Windows toolchain – critical for Windows-based contributors.

- **[#3016 – Every rate_limit_event is logged as a quota error, even when the status is "allowed"](https://github.com/nanocoai/nanoclaw/issues/3016)**  
  Since PR #2965, the agent-runner’s poll loop falsely logs `Error: Rate limit (retryable: false, quota)` on every rate-limit event, even when the API returns `allowed`. User reports 82 occurrences in a week with no actual errors. **Underlying need**: Accurate logging to avoid noise and confusion – the user explicitly states every delivery worked despite the log line.

The most commented-on PR is **#3020** (linked to multiple earlier issues), but actual comment count is not available. The silence on both issues suggests maintainers have not yet acknowledged these reports.

## 5. Bugs & Stability
Two bugs were reported today, both open and unaddressed:

| Severity | Issue | Summary |
|----------|-------|---------|
| **High** | [#3017 – Windows compilation fails with VS2026](https://github.com/nanocoai/nanoclaw/issues/3017) | Blocks all Windows users from building the project with latest toolchain. No workaround provided. |
| **Medium** | [#3016 – False rate-limit error logs](https://github.com/nanocoai/nanoclaw/issues/3016) | Causes poll-loop noise; does not break functionality but creates false alarms. |

In addition, two open PRs address stability issues that were likely reported earlier:

- **#3020** fixes silent message drops (linked to #2369, #2393, #2404).  
- **#3019** fixes hung in-flight tools that result in container killing (observed by the author in production).

No regressions or crashes beyond these were reported.

## 6. Feature Requests & Roadmap Signals

- **Temporal / incognito sessions** (PR #3018, closed RFC) – a design to allow throwaway, memory-free DM sessions. The closure suggests it is not being actively developed but the idea was shared for future consideration.
- **Provider-agnostic persistent memory** (PR #3012) – a significant infrastructure addition that will allow agents to maintain state across restarts independent of LLM provider.
- **Guard seam** (PR #2986) – a security-centric change that centralises privileged action decision making.
- **Scheduled tasks / one-door delivery** (PR #2988) – part of a larger train for task scheduling, making delivery paths explicit.

**Prediction for next release**: The `guard-seam` and `tasks: one-door delivery` PRs appear close to merging (both are part of “core-team” trains). The `memory` PR is still open and likely needs more review. Expect a minor release (e.g., v0.22 or v0.23) that includes the guard infrastructure and the first batch of task scheduling changes, along with the agent-runner reliability fixes (#3019, #3020).

## 7. User Feedback Summary
- **“Windows build is broken”** – User *shayshankr* reports inability to compile with VS 2026. This is a clear pain point for Windows-based developers, especially those on updated toolchains.
- **“Rate-limit logs are misleading”** – User *glifocat* is frustrated by 82 false-positive error logs in a week. The logs caused unnecessary concern despite normal operation.
- **“Silent message drops in agent-runner”** – While not a new issue today, the fix in #3020 references several earlier reports (#2369, #2393) where replies were silently dropped after tool chains. Users expect reliable delivery.
- **Overall satisfaction**: Mixed. The high volume of core-team PRs indicates active development, but the lack of responses on new community issues may signal a gap in maintainer bandwidth for triage.

## 8. Backlog Watch
Both issues from today have **no comments or reactions**, and no maintainer has engaged. They are not yet stale, but early attention is recommended:

- [#3017 – Windows compilation fails](https://github.com/nanocoai/nanoclaw/issues/3017) – needs a repro or error detail to diagnose.
- [#3016 – False rate-limit logs](https://github.com/nanocoai/nanoclaw/issues/3016) – likely a one-line fix after identifying the condition.

No long-unanswered important issues were reported in the provided data; the most stale item is the RFC #3018, which was closed yesterday after a day of discussion.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest — 2026-07-12

## Today's Overview

NullClaw saw low activity in the past 24 hours: **2 issues updated**, both remaining open, and **no pull request activity or new releases**. The project appears to be in a maintenance phase with no merges or deployments today. The most notable event is a continuing bug report about Telegram channel timeout and a newly filed feature request to add a Grok CLI provider. No stability regressions were recorded.

## Releases

*No new releases were published today.*

## Project Progress

- **No pull requests were merged or closed today.** No feature advancements or bug fixes were integrated into the main branch.

## Community Hot Topics

1. **[#972 – Telegram channel stops responding after idle time](https://github.com/nullclaw/nullclaw/issues/972)** (3 comments)  
   **Author:** i11010520 | **Created:** 2026-06-30 | **Updated:** 2026-07-11  
   The most active issue currently, with users discussing a recurring bug where the Telegram channel dies after overnight idle while the backend continues to work. The thread indicates this is a persistent pain point for Telegram users.

2. **[#975 – Feature Request: Add grok-cli provider](https://github.com/nullclaw/nullclaw/issues/975)** (1 comment)  
   **Author:** yanggf8 | **Created:** 2026-07-11  
   A new feature request to support an unmetered Grok provider via the local `grok` CLI login session, similar to existing CLI providers. This reflects user desire for broader provider support.

## Bugs & Stability

- **Bug #972 (Medium severity):** Telegram channel stops responding after idle periods (over a night). The symptom is that `nullclaw` backend remains functional, but the Telegram channel goes silent. No fix PR has been submitted yet. The issue has been open for 12 days with moderate community engagement, suggesting it may require maintainer input to diagnose the root cause.

*No other bugs, crashes, or regressions were reported today.*

## Feature Requests & Roadmap Signals

- **#975 – grok-cli provider:** A user explicitly requested adding a Grok CLI provider, following the same subprocess pattern already used for `claude-cli`, `codex-cli`, and `gemini-cli`. Given that nullclaw already supports multiple CLI-based providers, this request aligns with the existing architecture and is likely to be considered for a future release. No maintainer response has been posted yet.

## User Feedback Summary

- **Pain point:** Telegram users are experiencing session drops after idle intervals, causing frustration because the backend remains healthy but the messaging interface stops working. This suggests a potential session management issue in the Telegram adapter.
- **Use case expansion:** A user is pushing for free/ unmetered LLM access via Grok's CLI, indicating interest in cost-effective alternatives and expanding the provider ecosystem.
- Overall satisfaction seems mixed: the backend is praised as stable, but integration-specific bugs (Telegram) lower the user experience.

## Backlog Watch

- **Issue #972 (opened 2026-06-30):** No maintainer comment has been made in the 12 days since creation. While the issue is actively discussed, the lack of official acknowledgment or status update may lead to user frustration. This issue should be reviewed and prioritized to prevent further disengagement from Telegram users.
- No other long-unanswered items are present in the current data set.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-07-12

## Today's Overview
IronClaw saw high development activity over the last 24 hours, with 50 pull requests updated (13 merged/closed) and 8 issues touched (1 closed). The project remains release‑stable this week, with no new versions published. The team is deeply engaged in CI hardening, extension runtime rollout, and bug fixing, while external contributors report several integration and platform gaps—most notably on Windows, local MCP transport, and security reporting channels.

## Releases
*No new releases were published in the last 24 hours. The most recent release appears to be PR #5598 (still open after 9 days), which proposes breaking changes in `ironclaw_common` (0.5.0) and `ironclaw_skills` (0.4.0).*

## Project Progress
13 pull requests were merged or closed in the last day. Notable among the visible closed PRs:
- **#5951** (merged) – Fixes `near.ai` streaming tool‑call argument loss when a reasoning model appends trailing content. ([PR #5951](https://github.com/nearai/ironclaw/pull/5951))
- **#5997** (merged) – Addresses e2e fixture review feedback for Emulate tests, adding defensive parsing and test‑owned Drive files. ([PR #5997](https://github.com/nearai/ironclaw/pull/5997))
- **#6003** (closed, accidental op) – No functional change. ([PR #6003](https://github.com/nearai/ironclaw/pull/6003))

Several ongoing feature branches advanced through multiple open PRs:
- **Extension Runtime (PRs #5995, #5996)** – Phases P1 and P2 (manifest v3, adapters, dispatch cutover) are ready for review, stacked on the P0 foundation.
- **Queued Message Steering (PR #5981)** – Part 1 of a split, forward‑ported to main, allowing busy threads to queue user messages as active‑run steering input.
- **Responses API (PR #5991, Issue #5990)** – CI now requires Responses API coverage; implementation gaps are tracked in three phases covering HTTP semantics, lifecycle, and external tool resilience.
- **Admin‑Provisioned Secrets (PR #5934)** – Threads WebUI caller scope through admin secret operations.

## Community Hot Topics
Issues and PRs with the most attention (by content, as comment/reaction counts are minimal):

- **#6000** – “How should security issues be reported?”: A contributor found a potential vulnerability in the Reborn runtime but **cannot find a SECURITY.md or private reporting channel**. This is a governance gap that could discourage responsible disclosure. ([Issue #6000](https://github.com/nearai/ironclaw/issues/6000))
- **#5999** – “local-dev-yolo cannot start on Windows”: A clear platform bug where `MountAlias` rejects Windows paths with backslashes. Blocks all Windows development with the dev profile. ([Issue #5999](https://github.com/nearai/ironclaw/issues/5999))
- **#5998** – “Reborn has no transport for a local MCP server”: Neither `stdio` nor loopback HTTP are supported, making local MCP server testing impossible. ([Issue #5998](https://github.com/nearai/ironclaw/issues/5998))
- **#5992** – “Daily ironclaw failure taxonomy — 2026-07-11”: Provides a structured breakdown of test failures, noting that ~77 tasks failed due to benchmark defects rather than model quality. ([Issue #5992](https://github.com/nearai/ironclaw/issues/5992))

## Bugs & Stability
| Severity | Issue/PR | Summary |
|----------|----------|---------|
| **High** | #5999 | **Windows can't start local-dev-yolo** – host paths are passed where POSIX `MountAlias` is required. No fix PR yet. |
| **High** | #5998 | **No local MCP transport** – `stdio` rejected, loopback HTTP denied; no workaround for on‑device MCP servers. |
| **Medium** | #5968 | **HTTP tool fails with third‑party APIs without MCP support** (e.g., Attio) – lacks authentication and egress. |
| **Medium** | #5969 (closed) | GLM‑5.2 missing from opencode default model list – required manual config. Already closed; fix may be in place. |
| **Low** | #6005 (open PR) | Fixes flaky Slack trigger hook e2e by adding a deterministic poller tick. ([PR #6005](https://github.com/nearai/ironclaw/pull/6005)) |
| **Low** | #6002 (open PR) | Better error message when production validation fails due to unwired component. ([PR #6002](https://github.com/nearai/ironclaw/pull/6002)) |
| **Low** | #5951 (merged) | Resolved streaming tool‑call argument loss (see Project Progress). |

Also notable: multiple `ironloopai[bot]` PRs (#5906, #5910, #5911, #5914) address UI bugs in chat history paging, approval gates, and trigger‑trusted actor pairing – all merged/closed? They remain open as of last update.

## Feature Requests & Roadmap Signals
Key asks from the community and ongoing feature work that indicate near‑term direction:

- **#5987** – “NEAR AI attestation docs too complex” – user requests a **local proxy service** for private inference. The team has acknowledged the complexity gap. Likely to appear in a minor release as a tool or config option. ([Issue #5987](https://github.com/nearai/ironclaw/issues/5987))
- **#5990** – Responses API gaps (phase 1‑3) – tracked together; semantic fidelity, lifecycle safety, and external‑tool resilience are being addressed in PR #5991 and related. Expect these to land in the next major or minor release. ([Issue #5990](https://github.com/nearai/ironclaw/issues/5990))
- **#6000** – Security reporting channel – no resolution yet; maintainers should add a SECURITY.md and enable private vulnerability reporting.
- **#5998** – Local MCP transport – directly impacts developer experience. Could become a high‑priority addition in the 0.30 or 0.31 cycle.
- **Extension Runtime (PR #5995, #5996)** – The multi‑PR train suggests a significant upcoming feature for third‑party extensions. Not yet user‑visible but roadmap‑relevant.

## User Feedback Summary
Real pain points and use‑case signals from the last 24 hours:

- **Complex attestation flow**: Users find the documentation too hard and want a turnkey proxy service (#5987).
- **Missing model in opencode**: GLM‑5.2 not in default list (#5969) forced manual config – a friction point for new adopters.
- **Windows incompatibility**: `local-dev-yolo` profile is completely broken on Windows (#5999), blocking a significant user segment.
- **No security channel**: A security researcher was unable to privately report a potential runtime vulnerability (#6000) – a trust and safety concern.
- **Generic HTTP tool limitations**: Third‑party API integration without MCP support is failing with opaque errors (#5968).
- **Test reliability concerns**: Daily failure taxonomy (#5992) shows that benchmark defects (not model quality) dominate test failures, which can erode confidence in CI signals.

## Backlog Watch
Important items that have remained open for several days without maintainer resolution:

| Item | Created | Last Update | Notes |
|------|---------|-------------|-------|
| **PR #5639** – CI main checks staging‑release promotion | 2026-07-04 | 2026-07-12 | Open 8 days; large (size L), risk medium. Appears stalled – needed for release automation. |
| **PR #5598** – Release (crate version bumps with breaking changes) | 2026-07-03 | 2026-07-11 | Open 9 days; would publish new `ironclaw_common` 0.5.0 and `ironclaw_skills` 0.4.0. Blocked? |
| **Issue #5968** – HTTP tool failures with third‑party APIs | 2026-07-10 | 2026-07-11 | No fix PR yet; users cannot integrate common services like Attio. |
| **Issue #5998** – No local MCP transport | 2026-07-11 | 2026-07-11 | Critical for local development; no response from maintainers yet. |
| **Issue #5999** – Windows local‑dev‑yolo crash | 2026-07-11 | 2026-07-11 | Same – no fix or acknowledgment. |

The absence of a SECURITY.md (#6000) and the 9‑day‑old release PR (#5598) suggest that process and automation items may need prioritisation alongside feature work.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-07-12

## 1. Today's Overview
Project activity remains very low. No new releases, no merged pull requests, and no closed issues were recorded in the last 24 hours. The three open issues and one open PR have remained untouched since their last update on July 11, and all were originally created over three months ago. This suggests the project is currently in a maintenance or low-priority phase, with no visible response from maintainers on stale items.

## 2. Releases
*No new releases. None to report.*

## 3. Project Progress
No pull requests were merged or closed today. The only open PR [#1327](https://github.com/netease-youdao/LobsterAI/pull/1327) (tool call batch expand/collapse) remains unmerged since April 2, despite being linked to an issue with a clear implementation. No other feature advancements or fixes have been delivered.

## 4. Community Hot Topics
All three open issues have single comments (presumably from the author) and zero reactions, indicating low community engagement. The most notable items:

- **#1326** — *Feature: ToolUse batch expand/collapse toggle*  
  [Issue](https://github.com/netease-youdao/LobsterAI/issues/1326) | [Linked PR](https://github.com/netease-youdao/LobsterAI/pull/1327)  
  Users want a single button to expand/collapse all tool call blocks in a Cowork session, reducing repetitive clicks.

- **#1330** — *Feature: Error status red dot badge on session list*  
  [Issue](https://github.com/netease-youdao/LobsterAI/issues/1330)  
  Suggests adding a visible red indicator for sessions with `error` status, alongside existing running/unread badges.

These requests address UI ergonomics and error visibility — common pain points in interactive AI assistants.

## 5. Bugs & Stability
One bug report is active:

- **#1329** — *New scheduled task notification channel shows no options, only "no notification"*  
  [Issue](https://github.com/netease-youdao/LobsterAI/issues/1329)  
  **Severity: Medium** – Blocks users from configuring notifications for scheduled tasks. Reported for version v2026.4.1. No fix PR or maintainer comment exists. The issue is stale for over three months.

No other crashes or regressions reported today.

## 6. Feature Requests & Roadmap Signals
The two open feature requests (#1326 and #1330) are well-specified and include implementation details. If maintainer activity resumes, these could land in a future minor release (e.g., v2026.5.x). Given the absence of recent merges, however, no short-term inclusion is predicted. The tool call batch toggle already has a PR submitted, which could accelerate its integration.

## 7. User Feedback Summary
Reported pain points focus on three areas:

- **Interaction inefficiency** – Manually expanding/collapsing multiple tool call blocks is tedious.
- **Missing error visibility** – Users cannot quickly identify failed sessions in the sidebar.
- **Notification configuration broken** – The scheduled task channel picker is non-functional, effectively disabling a core feature.

Satisfaction is likely low among active users, as these issues have remained unresolved for months with no maintainer acknowledgment.

## 8. Backlog Watch
All three open issues and the one open PR have been unaddressed for over three months (created April 2, last updated July 11). They are marked as `[stale]` and have received no maintainer comments. This backlog signals a risk of feature decay and user churn. Priority items requiring attention:

- **#1329** – Bugfix for notification channel picker; blocks scheduled tasks.
- **#1327** – PR ready for feature #1326; merging would close two items at once.
- **#1330** – Low-effort UI enhancement with high visibility impact.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest – 2026-07-12

## Today's Overview
Project activity was very low over the past 24 hours. No new issues were opened or updated, and no pull requests were merged or closed. A single pull request (#1147) was updated, proposing a fix for an existing bug in the CalDAV client. No new releases or tags were created. The project appears to be in a calm state with no major firefighting or feature momentum visible.

## Releases
*None.* No new releases were published today. The latest release remains as previously reported.

## Project Progress
No pull requests were merged or closed today. The only open PR is #1147, which remains unmerged. No features advanced or were resolved in the last 24 hours.

## Community Hot Topics
The sole item of interest is the open pull request **#1147** ([fix(caldav): honor time range in list_events via server-side calendar‑query](https://github.com/moltis-org/moltis/pull/1147)) by thoscut. It has no comments or reactions yet, likely because it was opened only yesterday. The PR addresses a functional discrepancy between documented behavior and actual implementation – this may become a focal point once maintainers review it.

## Bugs & Stability
One bug was addressed via pull request **#1147**:
- **Bug**: The `list_events` tool’s `start`/`end` parameters were ignored. The `range` parameter was bound as `_range` and never used, causing the client to always fetch all calendar resources regardless of the time range. (Severity: **medium** – undocumented behavior contradicts specifications; can degrade performance on large calendars.)
- **Fix Status**: A fix is proposed in the open PR, but not yet merged.

No other bugs, crashes, or regressions were reported today.

## Feature Requests & Roadmap Signals
No user feature requests were filed or discussed in the monitoring window. No roadmap signals emerged from the data.

## User Feedback Summary
No user feedback, pain points, or satisfaction indicators are available in today’s data. The project lacks community interaction during this period.

## Backlog Watch
No long-unanswered issues or pull requests require maintainer attention. The only open PR is recent (created 2026-07-11) and has not yet been reviewed. No stale items are currently visible.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-07-12

## 1. Today's Overview
Project activity is **high**, with 24 open issues updated and 7 pull requests processed in the last 24 hours. No new releases were published. The community is actively reporting regressions introduced in v2.0.0, particularly around the Windows sandbox, context compression, and data migration. The core team has merged **4 closed PRs** addressing a dark-mode visibility bug, and several other fixes are in review. Overall project health is **moderate** — while the v2.0.0 release has caused significant stability pain for users, the rapid bugfix response signals strong maintainer engagement.

## 2. Releases
**None** — no new versions have been published in the last 24 hours.

## 3. Project Progress
The following PRs were **merged/closed** today:
- [#5974](https://github.com/agentscope-ai/QwenPaw/pull/5974) – **fix(console): improve dark mode text contrast** (closed)
- [#5973](https://github.com/agentscope-ai/QwenPaw/pull/5973) – same fix (closed)
- [#5971](https://github.com/agentscope-ai/QwenPaw/pull/5971) – same fix (closed)
- [#5970](https://github.com/agentscope-ai/QwenPaw/pull/5970) – same fix (closed)

These four PRs address issue **[#5969](https://github.com/agentscope-ai/QwenPaw/issues/5969)** (dark mode text contrast) by introducing theme-aware CSS variables with proper fallbacks. The iteration through multiple closed PRs suggests the team worked to incorporate Copilot review feedback.

Additionally, the following **open PRs** may advance key fixes:
- [#5968](https://github.com/agentscope-ai/QwenPaw/pull/5968) – **fix: skills page scroll loading** (first-time contributor, targets [#5788](https://github.com/agentscope-ai/QwenPaw/issues/5788))
- [#5953](https://github.com/agentscope-ai/QwenPaw/pull/5953) – **fix: use standard truncation hint for scroll-capped tool results** (targets [#5946](https://github.com/agentscope-ai/QwenPaw/issues/5946), [#5929](https://github.com/agentscope-ai/QwenPaw/issues/5929))

## 4. Community Hot Topics
The most active discussions (by comment count) reveal critical pain points and unmet needs:

| Issue | Comments | Summary |
|---|---|---|
| [#5951](https://github.com/agentscope-ai/QwenPaw/issues/5951) | 7 | **Windows sandbox failure**: pwsh recursion, NTFS ACL pollution, missing `CREATE_NO_WINDOW`. Core usability blocked on Windows. |
| [#4124](https://github.com/agentscope-ai/QwenPaw/issues/4124) | 4 | **Feature request**: OAuth login for OpenAI / Codex. Long-standing (May 2026).  |
| [#5788](https://github.com/agentscope-ai/QwenPaw/issues/5788) | 4 | **Skills list scroll-to-load-more broken** – progressive rendering stops after 20 items. |
| [#5961](https://github.com/agentscope-ai/QwenPaw/issues/5961) | 3 | **v2.0.0 loop execution**: Agent repeatedly writes/deletes files, unable to complete simple tasks with Qwen3.7-Plus. |
| [#5952](https://github.com/agentscope-ai/QwenPaw/issues/5952) | 3 | **auto-memory fails**: Missing submodule `agentscope.tool._builtin._scripts` on Windows desktop. |

*Underlying needs*: Windows usability, OAuth integration, UI pagination fixes, and overall stability of the v2.0.0 agent runtime.

## 5. Bugs & Stability
A **high volume** of bugs were reported today, almost all related to the v2.0.0 release. Severity ranking:

| Severity | Issue | Description | Fix PR Exists? |
|---|---|---|---|
| **Critical** | [#5951](https://github.com/agentscope-ai/QwenPaw/issues/5951) | Windows sandbox: pwsh recursive explosion, 20GB memory, cannot close sandbox | No |
| **Critical** | [#5961](https://github.com/agentscope-ai/QwenPaw/issues/5961) | Infinite write/delete loop with Qwen3.7-Plus, agent never completes tasks | No |
| **Major** | [#5960](https://github.com/agentscope-ai/QwenPaw/issues/5960) | Context compression splits `tool_call`/`tool_result` pairs → API 400 errors | No |
| **Major** | [#5962](https://github.com/agentscope-ai/QwenPaw/issues/5962) | WeChat channel: orphaned `tool_result` after scroll eviction → 400 errors | No |
| **Major** | [#5963](https://github.com/agentscope-ai/QwenPaw/issues/5963) | `execute_shell_command` hard-capped at 60s, ignores `shell_command_timeout` | No |
| **Major** | [#5967](https://github.com/agentscope-ai/QwenPaw/issues/5967) | Data incompatibility after upgrade: `parse_legacy_memory_state` Pydantic error | No |
| **Major** | [#5964](https://github.com/agentscope-ai/QwenPaw/issues/5964) | Chat list vs. conversation history mapping lost after upgrade to 2.0.0 | No |
| **Major** | [#5965](https://github.com/agentscope-ai/QwenPaw/issues/5965) | PyInstaller bundle missing `_scripts` submodule → `Glob` tool broken | No |
| **Major** | [#5977](https://github.com/agentscope-ai/QwenPaw/issues/5977) | Plugin HTTP routes lost after workspace hot‑reload | No |
| **Minor** | [#5969](https://github.com/agentscope-ai/QwenPaw/issues/5969) | Dark mode text contrast (fixed by multiple merged PRs today) | ✅ [#5974](https://github.com/agentscope-ai/QwenPaw/pull/5974) |
| **Minor** | [#5978](https://github.com/agentscope-ai/QwenPaw/issues/5978) | `auto memory` fails: session ID invalid characters in Telegram channel | No |
| **Minor** | [#5979](https://github.com/agentscope-ai/QwenPaw/issues/5979) | Electron CLI tool crashes under sandbox root mapping on Linux | No |
| **Minor** | [#5980](https://github.com/agentscope-ai/QwenPaw/issues/5980) | Missing SSH offline and profiles features in v2.0.0 (404 errors) | No |
| **Minor** | [#5981](https://github.com/agentscope-ai/QwenPaw/issues/5981) | Model search field auto-filled with username from auth page | No |

*Summary*: The v2.0.0 release introduced **multiple regressions** across sandboxing, context handling, data migration, and packaging. Most critical bugs lack a fix PR yet.

## 6. Feature Requests & Roadmap Signals
Notable feature requests and enhancement discussions:

- **[#4124](https://github.com/agentscope-ai/QwenPaw/issues/4124)** – **OAuth login for OpenAI/Codex** (created May 2026, 4 comments, no assignee). Highly requested, likely a candidate for v2.1.
- **[#5976](https://github.com/agentscope-ai/QwenPaw/issues/5976)** – **Separate tool‑call parameter and result display per channel** e.g., truncate results, allow opt‑out. Indicates power‑user need for cleaner channel output.
- **[#5972](https://github.com/agentscope-ai/QwenPaw/issues/5972)** – **Heartbeat session recovery loads stale state** → orphan tool messages. Flag for session management improvements.
- **[#5966](https://github.com/agentscope-ai/QwenPaw/issues/5966)** – **Question about AgentScope kernel version** (2.0 vs 1.12). Community confusion suggests need for better documentation.

*Prediction*: The next minor release (v2.0.1 or v2.1) will likely focus on **critical bug fixes** (sandbox, context compression, data migration) before any large features. OAuth and enhanced channel controls may appear in a subsequent release.

## 7. User Feedback Summary
Real user pain points expressed in today’s issues:

- **v2.0.0 upgrade pain** – Several users report that upgrading from v1.1.12 broke existing workflows (data mapping loss, memory errors, 404 on previously working features). *“After upgrading … several features … are completely inaccessible”* ([#5980](https://github.com/agentscope-ai/QwenPaw/issues/5980)).
- **Windows sandbox unusability** – *“pwsh window recursion … cannot turn off sandbox … tool basically unusable”* ([#5951](https://github.com/agentscope-ai/QwenPaw/issues/5951)).
- **Agent loop stuck in write/delete cycle** – *“agent repeatedly writes, deletes, writes, deletes … cannot complete simple task”* ([#5961](https://github.com/agentscope-ai/QwenPaw/issues/5961)).
- **Context handling errors cause API 400** – Both WeChat and general sessions broken by orphaned tool messages ([#5960](https://github.com/agentscope-ai/QwenPaw/issues/5960), [#5962](https://github.com/agentscope-ai/QwenPaw/issues/5962)).
- **Dark mode visibility** – Fixed promptly, demonstrating good response to UI complaints.
- **Missing builtins in packaged bundle** – PyInstaller users on Windows cannot use `Glob` tool ([#5965](https://github.com/agentscope-ai/QwenPaw/issues/5965)).

Satisfaction is **low** among v2.0.0 adopters, but the rapid closure of the dark‑mode fix shows the team is listening. The volume of reports suggests a **hotfix release** is urgently needed.

## 8. Backlog Watch
Long‑standing open issues that require maintainer attention:

- **[#2664](https://github.com/agentscope-ai/QwenPaw/issues/2664)** – *Intel Mac support* (created March 2026, 3 comments, last updated July 11). No official response. Users still asking.
- **[#4124](https://github.com/agentscope-ai/QwenPaw/issues/4124)** – *OAuth login* (created May 2026, 4 comments). No assignee, no milestone. Feature is becoming more requested as enterprise users look for SSO integration.

These items have been unanswered for weeks to months and represent **known gaps** that may deter adoption.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest – 2026-07-12

## 1. Today’s Overview

ZeroClaw remains highly active with **50 issues** and **50 pull requests** updated in the last 24 hours, though all but one of those PRs remain open. No new release was published today. The project continues to push forward the **v0.8.3 milestone** (tracked in #7320) with multiple feature trackers and bug fixes in flight. Community engagement is strong, especially around runtime stability, tool access policies, and channel parity. The 1:49 open-to-merged PR ratio suggests a heavy code review queue, but progress is visible in the number of “in-progress” and “accepted” issues.

## 2. Releases

No new releases today.

## 3. Project Progress

Only **one pull request was merged or closed** in the last 24 hours (details not provided in the data set). The vast majority of PRs remain open, indicating an active development cycle with pending reviews.

Key areas of advancement visible in open PRs:

- **Tool security**: Multiple PRs address SSRF protections for `image_gen` (#8826, #8827) and `file_download` (#8713), adding host classification and DNS rebinding checks.
- **Streaming & transport**: PR #8838 introduces idle-bound SSE streaming timeouts across providers; PR #8951 fixes duplicate narration on whitespace-only divergence.
- **WASM plugin ecosystem**: PR #8661 demonstrates out-of-process WASM plugin execution via a sidecar process.
- **Config schema V4**: PR #8754 begins a breaking schema cut, removing deprecated config surfaces.
- **SOP improvements**: PR #8848 releases execution slots on HITL approval and enforces per-SOP admission policies.
- **Memory parity**: Tracker #8891 coordinates persistent memory subsystem advancements.

## 4. Community Hot Topics

The most discussed issues (by comment count) reveal major pain points and ongoing debates:

- **#8681** – [Goal mode implementation split stack](https://github.com/zeroclaw-labs/zeroclaw/issues/8681) (9 comments)  
  Tracker for splitting the accepted goal-mode implementation into reviewable PRs. Coordinates a complex architectural change.

- **#8054** – [System prompt tool-availability mismatch](https://github.com/zeroclaw-labs/zeroclaw/issues/8054) (9 comments)  
  High-priority bug: system prompt tells models “no tools are available” across multiple entry points (WebSocket, gateway, etc.) while tools are actually present. PR #8496 attempts to centralize the deferred-MCP access policy to fix this.

- **#5808** – [Default 32k context budget exceeded by system prompt + tool definitions](https://github.com/zeroclaw-labs/zeroclaw/issues/5808) (8 comments)  
  S1 severity: first iteration already exceeds budget by 3.3x, causing perpetual preemptive trim. No resolution PR spotted yet.

- **#7952** – [Publish full-channel prebuilt assets](https://github.com/zeroclaw-labs/zeroclaw/issues/7952) (6 comments)  
  Feature request to bundle all channel implementations alongside the default lean prebuilt. Blocked on maintainer review.

- **#8654** – [Skill-review fork panics (SIGSEGV) after tool-heavy turn](https://github.com/zeroclaw-labs/zeroclaw/issues/8654) (4 comments)  
  Critically: an out-of-range slice panics in `skills/review.rs` and crashes the entire daemon under `panic = abort`. No fix PR identified yet.

Underlying community needs: **stability** (crashes, context overrun), **consistency** (tool availability across entry points), and **complete documentation** (cron jobs, SOPs).

## 5. Bugs & Stability

Several severe bugs were active in the last 24 hours (ranked by severity):

| Issue | Severity | Description | Fix PR exists? |
|-------|----------|-------------|----------------|
| [#8654](https://github.com/zeroclaw-labs/zeroclaw/issues/8654) | S1 (workflow blocked) | `skill-review` fork panics → SIGSEGV after tool-heavy turn | No |
| [#8675](https://github.com/zeroclaw-labs/zeroclaw/issues/8675) | S1 | Malformed native tool-call arguments sent unvalidated → provider 400 → empty reply | No |
| [#5808](https://github.com/zeroclaw-labs/zeroclaw/issues/5808) | S1 | Default 32k context budget exceeded causing perpetual trim | No |
| [#8563](https://github.com/zeroclaw-labs/zeroclaw/issues/8563) | S1 | SOPs not available through web dashboard chat | No |
| [#8054](https://github.com/zeroclaw-labs/zeroclaw/issues/8054) | p1, blocked | Tool-availability mismatch across entry points | PR #8496 (open) |
| [#8578](https://github.com/zeroclaw-labs/zeroclaw/issues/8578) | S3 | `zerocode` does not terminate process on startup failure | No |

Additionally, PRs fixing bugs in progress include:
- [#8951](https://github.com/zeroclaw-labs/zeroclaw/pull/8951) – Stop duplicating narration on whitespace-only divergence
- [#9007](https://github.com/zeroclaw-labs/zeroclaw/pull/9007) – Trim structured history by whole turns
- [#8940](https://github.com/zeroclaw-labs/zeroclaw/pull/8940) – Apply theme fill to queue sidebar and session picker overlays

The **three S1 bugs without fix PRs** (#8654, #8675, #8563) represent critical stability gaps requiring immediate maintainer attention.

## 6. Feature Requests & Roadmap Signals

Top user-requested enhancements visible in the latest issues:

- **#8445** – [Telegram multi-message mode](https://github.com/zeroclaw-labs/zeroclaw/issues/8445): Send each agent turn as a separate message. Likely to land with channel streaming work.
- **#8134** – [Auto-truncate stale session history](https://github.com/zeroclaw-labs/zeroclaw/issues/8134): Add `session_ttl_hours` implementation to reduce token consumption. Already in-progress; possible for v0.8.3.
- **#7759** – [Decouple gateway WebSocket from agent turn lifecycle](https://github.com/zeroclaw-labs/zeroclaw/issues/7759): Run turns in background, resume on reconnect. High priority, accepted.
- **#7762** – [Cron documentation and per-job model selection](https://github.com/zeroclaw-labs/zeroclaw/issues/7762): Missing docs and ability to run cron with a specific model. Accepted, risk high.
- **#8409** – [Cron shell jobs raw stdout output](https://github.com/zeroclaw-labs/zeroclaw/issues/8409): Opt-in raw output format for shell cron jobs.
- **#8832** – [Gateway-local Kanban board](https://github.com/zeroclaw-labs/zeroclaw/issues/8832): RFC for opt-in Kanban view in web dashboard. Early stage.
- **#8135** – [Wasm-first plugin runtime](https://github.com/zeroclaw-labs/zeroclaw/issues/8135): Default-on Wasm with capability enforcement and signed distribution. Major architectural shift.

Two new trackers created today signal near-term roadmap focus:
- **#9009** – [Operator UX Onboarding, Pairing & Self-Service](https://github.com/zeroclaw-labs/zeroclaw/issues/9009)
- **#9010** – [ZeroCode Consolidation & Hardening](https://github.com/zeroclaw-labs/zeroclaw/issues/9010)

Prediction for next version (v0.8.3 or v0.9.0): The goal-mode implementation (#8681), channel parity (Discord, Matrix, Telegram), persistent memory work (#8891), and Wasm plugin sidecar (#8661) have strong momentum and are likely candidates for inclusion.

## 7. User Feedback Summary

From the issue tracker, concrete user pain points and use cases include:

- **Context budget overload** (#5808): Users report that even a fresh conversation immediately triggers trimming, blocking workflows. The default 32k tokens is insufficient for system prompts + tool definitions.
- **Daemon crashes** (#8654): A tool-heavy interaction causes a SIGSEGV in the skill-review fork. Users lose the entire agent process.
- **Tool availability confusion** (#8054): Users on different entry points (web chat, gateway, WebSocket) get inconsistent tool listings, leading to model confusion.
- **Missing SOP support in dashboard** (#8563): SOPs configured via files are not accessible in the web UI, blocking workflow automation.
- **Missing cron documentation** (#7762): Users cannot find how to set up cron jobs or specify a model per job.
- **Unreliable clipboard paste** (#8759): On Wayland, screenshots dropped ~50% of the time in ZeroCode.
- **Discord feature parity gaps** (#7831): Users expect embeds, typed slash options, and voice surface parity with other integrations.

Satisfaction signals: The community is actively filing well-formed feature requests and bug reports, indicating engaged users who find value but encounter friction. The lack of new releases suggests a backlog of work awaiting integration.

## 8. Backlog Watch

Issues and PRs that appear blocked or awaiting maintainer review:

- **#7952** – [Publish full-channel prebuilt assets](https://github.com/zeroclaw-labs/zeroclaw/issues/7952) (blocked)
- **#8134** – [Auto-truncate stale session history](https://github.com/zeroclaw-labs/zeroclaw/issues/8134) (needs-maintainer-review)
- **#8832** – [Gateway-local Kanban board](https://github.com/zeroclaw-labs/zeroclaw/issues/8832) (needs-maintainer-review; RFC)
- **#8891** – [Persistent memory tracker](https://github.com/zeroclaw-labs/zeroclaw/issues/8891) (needs-maintainer-review)
- **#6074** – [Audit: track 153 commits lost in bulk revert](https://github.com/zeroclaw-labs/zeroclaw/issues/6074) (in-progress, but no PR linked; risk of lost work remains)
- **#8583** – [Channel/source shared-boundary cleanup](https://github.com/zeroclaw-labs/zeroclaw/issues/8583) (no recent maintainer action)

PRs requiring author action (marked `needs-author-action`): #8848, #8940, #8951, #8838, #8942, #8796, #8827, #8866, #8826, #8759, #8845, #8713. These likely need rebase, conflict resolution, or response to review comments – maintainers may need to follow up to unblock progress.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/boom7sss/agents-radar).*