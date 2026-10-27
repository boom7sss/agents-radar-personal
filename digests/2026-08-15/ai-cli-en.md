# AI CLI Tools Community Digest 2026-08-15

> Generated: 2026-08-15 01:37 UTC | Tools covered: 9

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Gemini CLI](https://github.com/google-gemini/gemini-cli)
- [GitHub Copilot CLI](https://github.com/github/copilot-cli)
- [Kimi Code CLI](https://github.com/MoonshotAI/kimi-cli)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Pi](https://github.com/badlogic/pi-mono)
- [Qwen Code](https://github.com/QwenLM/qwen-code)
- [DeepSeek TUI](https://github.com/Hmbown/DeepSeek-TUI)
- [Claude Code Skills](https://github.com/anthropics/skills)

---

## Cross-Tool Comparison

# Cross-Tool Comparison Report: AI CLI Developer Tools

**Date:** 2026-08-15 | **Scope:** 9 major AI CLI tools

---

## 1. Ecosystem Overview

The AI CLI tool ecosystem has entered a **stabilization-and-hardening phase** following an intense period of feature expansion. Across all nine tools tracked, the dominant themes are platform reliability (particularly Windows and macOS regressions), session/data integrity, and the erosion of developer trust caused by false-positive safety/security flags. Established players (Claude Code, OpenAI Codex, Gemini CLI) are shipping rapid incremental releases while managing growing bug backlogs, while newer entrants (Kimi CLI, Pi, OpenCode, Qwen Code, CodeWhale) are differentiating on memory management, provider breadth, and specialized workflows like automated code review. A notable structural shift: **desktop-app performance regressions** (Codex, Claude Code, OpenCode) and **long-running session reliability** now generate more community engagement than feature requests.

---

## 2. Activity Comparison

| Tool | Hot Issues (24h) | PRs (24h) | Releases (24h) | Release Velocity |
|---|---|---|---|---|
| Claude Code | 10 | 4 | v2.1.233 | Moderate (1 stable) |
| OpenAI Codex | 10 | 10 | 5 alphas (rust-v0.148.0-a.14–.18) | Very high (rapid alpha cadence) |
| Gemini CLI | 10 | 10 | v0.56.0-nightly | High (nightly + SSR batch) |
| GitHub Copilot CLI | 10 | 3 | v1.0.81-0, v1.0.80 | Moderate (maintenance only) |
| Kimi Code CLI | 4 | 0 | None | None (dormant) |
| OpenCode | 10 | 10 | None | Low (PR-driven) |
| Pi | 10 | 13¹ | v0.84.2 | High (stable + fast fix turnaround) |
| Qwen Code | 10 | 10 | v0.21.12 stable + nightly + 2 previews | Very high (multi-track) |
| CodeWhale (DeepSeek TUI) | 10 | 10 | v0.9.8 (rebrand release) | Moderate (stable) |

¹ Includes 3 additional notable PRs beyond the primary 10 listed.

**Engagement intensity leaders:** OpenAI Codex (fastest iteration, largest desktop-bug discussions), Gemini CLI (most active SSR Agent engineering), Qwen Code (highest release multiplicity), Claude Code (largest single-issue reaction count: #69238 at 96 👍).

---

## 3. Shared Feature Directions

Several requirements appear independently across multiple tool communities, indicating genuine market demand:

| Direction | Tools (Representative issues) | Specific Needs |
|---|---|---|
| **Session lifecycle & durability** | Claude Code (#30869, #86089), Codex (#24287), Copilot CLI (#4489, #4477), OpenCode (#42608), Qwen Code (#8678), CodeWhale (#5380) | Session unarchiving, resumable state, crash/restart recovery, interrupt semantics, index write serialization |
| **Multi-agent observability** | Claude Code (#24537), Gemini CLI (#22598), Copilot CLI (#4306), OpenCode (#42657) | Real-time sub-agent hierarchy views, execution-status truthfulness, termination-reason accuracy, render performance under concurrency |
| **Windows/WSL first-class support** | Claude Code (#86619, #86473), Codex (#20214, #25453, #38547), Gemini CLI (#25378, #27588), Kimi CLI (#1136), OpenCode (#42668), Pi (#7547, #6187) | No permission-prompt regressions, no polling CPU spikes, native ripgrep, clipboard interop, session sidebar parity, WSL auth fixes |
| **False-positive safety/security flags** | Claude Code (#86804, #86819, #84266), Codex (#28015), Copilot CLI (#4479), Qwen Code (#8582) | Distinguish legitimate DevOps work from cyber risk; reduce unsuppressible prompts; close actual classifier bypasses |
| **Memory/context management** | Kimi CLI (#1283, #1478), Gemini CLI (#26522, #26525), Claude Code (#79217), Qwen Code (#2128), Pi (#8133) | Persistent cross-session memory, tunable memory bounds, deterministic redaction, bounded history arrays, per-model compaction profiles |
| **Provider/model configuration flexibility** | Copilot CLI (#4390, #4422, #4494), Codex (#32349), OpenCode (#42083, #27553), Pi (#8105, #8135), CodeWhale (#5350) | Model-catalog freshness, custom-model diagnostics, automatic provider discovery, per-provider capability handling |
| **Pre-flight request transparency** | CodeWhale (#1004), Pi (#7787), OpenCode (#41909), Claude Code (#66117) | `/dryrun`-style request previews, configurable defaults, dynamic permission toggles, opt-out for suggestions |
| **MCP/ecosystem interoperability** | Copilot CLI (#4480, #4439, #4006), CodeWhale (#3192), Claude Code (#11791, #86807), Qwen Code (#8871) | OAuth discovery tolerance, cursor-based pagination, registry listings for Zed, browser-automation sandbox support |

---

## 4. Differentiation Analysis

| Tool | Core Focus | Target User | Technical Approach | Distinctive Signals |
|---|---|---|---|---|
| **Claude Code** | Enterprise agentic coding with gateway/proxy controls | Large orgs behind Anthropic upstreams | Node/TS, deep Anthropic API integration, `--worktree` MR workflows | GitLab MR support; identity-forwarding gateway; billing and data-loss incidents are the top trust risks |
| **OpenAI Codex** | Desktop-first agentic coding with sandbox rigor | Developers on Windows/macOS desktops | Rust core + Electron desktop; permission profiles; WebSocket/HTTP fallback | 5 alpha releases/day signals aggressive stabilization; sandbox policy hardening (Windows deny-read rules, DNS proxy) is a moat-building area |
| **Gemini CLI** | Self-repairing agent (SSR) with deep test infrastructure | TypeScript/Node developers, multi-agent orchestrators | Node/TS; Vitest-aligned test hygiene; AST-aware tooling roadmap | Uniquely invests in **agent self-repair and deterministic eval**; "agents call agents" (#28738) is the most forward-looking orchestration PR this cycle |
| **Copilot CLI** | GitHub-ecosystem agent with enterprise policy | GitHub-centric enterprises | Node; feature-flag model config; MCP client | Heaviest enterprise model-catalogue pain (org-enabled models missing); MCP OAuth regressions are its weak spot; `/fleet` autopilot direction |
| **Kimi Code CLI** | Minimalist CLI with memory as the differentiator | Individual devs wanting context persistence | Node; agent.md-based memory | Least active this cycle (0 PRs/releases); memory-system design (#1283) is its sole high-signal area — a gap others are filling |
| **OpenCode** | TUI-first multi-provider agent | Power users, local-LLM enthusiasts | Go; provider-agnostic; CC Switch/proxy support | 48-bit ID wraparound fix demonstrates low-level runtime ownership; provider discovery and free-tier billing are adoption blockers |
| **Pi** | Single-binary portable agent | Cross-platform devs, self-hosters | Single binary; provider-agnostic; extension system | Fastest issue-to-fix turnaround (clipboard lie, pnpm loader fixed within hours); TUI performance (#6665) and WSL auth are the frictions |
| **Qwen Code** | Review/autofix automation + multi-channel delivery | Chinese-ecosystem teams, CI/review maintainers | Node; Web Shell, Chrome WebBridge, DingTalk integration | Clear product wedge: **long-running review loops** (resume, content-anchored verdicts, convergence gates); SDK/CLI parity and CI flakiness are internal-friction points |
| **CodeWhale** | DeepSeek-ecosystem agent (rebranded) | DeepSeek API users, Rust-curious devs | Rust; OpenAI-compatible transport; DwarfStar (DS4) local preset | Rebrand to CodeWhale signals product maturation; P0 web-UI rebuild and 32-field agent schema simplification are honesty markers of early-stage growing pains |

---

## 5. Community Momentum & Maturity

**Tier 1 — High momentum, large communities:**
- **OpenAI Codex** — Highest release velocity (5 alphas/24h) and two of the largest desktop-issue discussions (101 and 47 comments). Community is engaged but frustrated by regression churn.
- **Claude Code** — Largest per-issue reaction counts (96 👍 on #69238), suggesting a broad installed base. Single stable release with meaningful features (GitLab MR support).
- **Gemini CLI** — Most concentrated engineering investment (10 PRs, SSR Agent batch fixing P1 issues). Community size is smaller than the above two but highly technical.

**Tier 2 — Moderate momentum, maturing communities:**
- **Qwen Code** — Strong release infrastructure (4 tracks) and a coherent review-autofix roadmap, but CI noise and SDK parity gaps are recurring costs.
- **Pi** — Outpacing its community size with 13 PRs and fast bug fixes; the Windows-support discussion (#7547) is driving a clear platform push.
- **OpenCode** — Critical infrastructure bug (ID wraparound) hurt reliability perception, but the prompt fix (#42684) and 10 PRs show engineering responsiveness.
- **Copilot CLI** — Active issue tracker (enterprise model-catalogue complaints) but slow PR throughput and maintenance-only releases; MCP OAuth regressions persist across versions, suggesting prioritization gaps.

**Tier 3 — Early stage / low velocity:**
- **CodeWhale** — Rebrand signals intent, but P0 web-UI rebuild and CI redness indicate pre-maturity. Interesting Rust-based architecture and local-DS4 story.
- **Kimi Code CLI** — Effectively dormant in engineering output (0 PRs/0 releases); community demand for memory features is real but unmet, making it vulnerable to competitors (Gemini Auto Memory, Claude memory index, Pi compaction).

---

## 6. Trend Signals

1. **Windows reliability is the ecosystem's weakest link.** Six of nine tools have active Windows or WSL-specific regressions this cycle — from permission-prompt false positives (Claude Code, Pi) to CPU busy loops (Codex) and sandbox policy gaps (Codex, Qwen Code). Developers should expect Windows to remain a second-class citizen in the near term; tools investing in first-class Windows support (Codex sandbox, Pi's #7547 effort) are building differentiation.

2. **Safety systems are at a trust inflection point.** False-positive security flags now appear in Claude Code, Codex, Copilot CLI, and Qwen Code simultaneously — all interrupting legitimate work. The community verdict is shifting from "safer by default" to "unsafe to rely on." Tools that ship better scoping (Pi's #8148 guideline fix, Qwen's classifier hardening) are responding correctly; those that don't will see prompt-silencing workarounds.

3. **Session durability has become a baseline expectation, not a feature.** Silent transcript deletion (Claude Code), invisible stuck turns (Codex), session-index races (CodeWhale), and ID wraparounds (OpenCode) all surface the same message: users treat CLI sessions as durable artifacts. Expect session export/restore, crash recovery, and data-integrity guarantees to become purchase criteria.

4. **The next competitive frontier is memory.** Kimi's community is pleading for persistent memory; Gemini is iterating on Auto Memory with redaction concerns; Claude Code is tuning auto-memory defaults; Pi is experimenting with append-compaction that reuses provider prompt caches. Whoever delivers **deterministic, privacy-respecting, cross-session context** without token bloat wins a structural advantage.

5. **Multi-agent orchestration demands observability.** As sub-agent usage scales (Claude Code's hierarchy dashboard request, Gemini's agent-calls-agent PR, Copilot's frozen-subtask bug), tools need real-time visibility into agent trees, accurate termination reasons, and render performance under concurrent agents. This is a nascent category with clear demand signals.

6. **MCP/OAuth interoperability is the ecosystem's plumbing bottleneck.** RFC 8414 issuer-mismatch regressions (Copilot CLI), browser-automation sandbox gaps (Claude Code), and ACP argument failures (Qwen Code) show the agent-protocol layer is still fragile. Tools that invest in protocol tolerance and registry integrations will benefit disproportionately as the agent-tool graph grows.

7. **Rapid iteration is colliding with stability demands.** Codex's 5-alpha-day cadence and Qwen's multi-track releases generate feature velocity but also regression fatigue — users in three separate issues ask for rollback paths. Expect "stay on previous version" and canary-release controls to become standard requests.

8. **Billing transparency is an emerging trust issue.** Unexpected auto-recharges (Claude Code, $995.67), token-metering variance (17x), and free-tier quota confusion (OpenCode) are appearing with increasing frequency. As agentic usage scales compute costs, pricing-model clarity will matter as much as model quality.

---

*Prepared for technical decision-makers evaluating AI CLI tools. Data sourced from 2026-08-15 community digests across all nine repositories.*

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
**Data snapshot:** github.com/anthropics/skills — 2026-08-15

---

## 1. Top Skills Ranking

*The 8 most-discussed pull requests, ranked by comment activity. All remain open.*

**1. skill-creator eval-pipeline fix (#1298)** — [anthropics/skills#1298](https://github.com/anthropics/skills/pull/1298)
Fixes the long-standing `run_eval.py` bug that reports **0% recall for every skill description**, which silently corrupts the description-optimization loop (`run_loop.py`, `improve_description.py`). Discussion centers on 10+ independent reproductions of the failure (issues #556, #1169) and the fix's breadth: installing the eval artifact as a real skill, Windows stream reading, trigger detection, and parallel workers. The most-watched PR in the repo — a strong signal that skill-creator reliability is the community's top pain point.

**2. document-typography skill (#514)** — [anthropics/skills#514](https://github.com/anthropics/skills/pull/514)
New skill for typographic quality control in AI-generated documents: orphan word wrap (1–6 words spilling to the next line), widow paragraphs (stranded section headers), and numbering misalignment. Discussion highlights that these defects affect virtually every document Claude generates, and users rarely know to ask for typographic polish.

**3. pdf case-sensitivity fix (#538)** — [anthropics/skills#538](https://github.com/anthropics/skills/pull/538)
Fixes 8 mismatches in `skills/pdf/SKILL.md` where `REFERENCE.md`/`FORMS.md` are referenced in uppercase against actual lowercase filenames, breaking the skill on case-sensitive filesystems (Linux/macOS). A small, high-impact reliability fix.

**4. ODT skill (#486)** — [anthropics/skills#486](https://github.com/anthropics/skills/pull/486)
Adds OpenDocument support: create/fill/read/convert `.odt` and `.ods` files, including template filling and ODT→HTML conversion. Triggers on "ODT", "ODS", "OpenDocument", "LibreOffice". Addresses demand for ISO-standard, vendor-neutral document formats alongside the existing docx/pdf skills.

**5. frontend-design skill overhaul (#210)** — [anthropics/skills#210](https://github.com/anthropics/skills/pull/210)
Substantive revision of the frontend-design skill for clarity, actionability, and internal coherence — the goal being that every instruction is something Claude can execute within a single conversation, with guidance specific enough to steer behavior without over-constraining it.

**6. skill-quality-analyzer + skill-security-analyzer (#83)** — [anthropics/skills#83](https://github.com/anthropics/skills/pull/83)
Two meta-skills for the marketplace: a quality analyzer evaluating skills across five weighted dimensions (structure & documentation 20%, examples, resources, …) and a security analyzer. Directly responds to the trust concerns raised in issue #492 — the community wants tooling to vet skills before adopting them.

**7. docx tracked-change w:id collision fix (#541)** — [anthropics/skills#541](https://github.com/anthropics/skills/pull/541)
Fixes document corruption when adding tracked changes to DOCX files with existing bookmarks. Root cause: `w:id` is a shared ID space across bookmarks, comments, and move ranges in OOXML, and the skill's examples used hardcoded low IDs (1, 2, 3) that collide.

**8. self-audit skill (#1367)** — [anthropics/skills#1367](https://github.com/anthropics/skills/pull/1367)
Universal delivery-verification skill: **Step 0** mechanically verifies every claimed output file exists, then a four-dimension reasoning audit runs in damage-severity priority order. Works with any project, stack, or model.

---

## 2. Community Demand Trends

Distilled from the Issues tracker (50 total, 15 in the top tier):

- **Security & trust of the skill supply chain** — **#492** (43 comments, the hottest issue in the repo): community skills distributed under the `anthropic/` namespace impersonate official Anthropic skills, creating a trust-boundary vulnerability where users may grant elevated permissions to unofficial code. Demand: provenance guarantees, security review, and clear official-vs-community labeling.
- **Skill lifecycle management & sharing** — **#228** (16 comments, 8👍) asks for org-wide skill sharing in Claude.ai instead of manual `.skill` file transfers; **#62** (10 comments) reports skills silently disappearing; **#189** (6 comments, 9👍) reports duplicate skill injection when installing both `document-skills` and `example-skills` plugins.
- **Reliable, best-practice skill-creator tooling** — **#556** (12 comments, 7👍) and **#1169**: the eval loop reports 0% trigger/recall on every iteration, making description optimization meaningless; **#202** argues skill-creator reads like developer documentation rather than an operational skill.
- **Context-window discipline** — **#1487**: the bundled `claude-api` skill eagerly injects ~156k tokens in a single tool call, exhausting the context window. Counterpoint to the "more content = better" approach; the community wants lean skills.
- **Interoperability & platform reach** — **#29** asks for AWS Bedrock support; **#16** proposes exposing Skills as MCPs to make them a universal tool protocol.
- **Meta-skills for governance and agent state** — **#412** (agent-governance: policy enforcement, threat detection, audit trails), **#1385** (three-gate reasoning quality pipeline), **#1329** (compact-memory: symbolic notation to reduce context overhead of agent state).

---

## 3. High-Potential Pending Skills

Actively discussed PRs not yet merged — likely candidates to land soon:

- **testing-patterns (#723)** — [anthropics/skills#723](https://github.com/anthropics/skills/pull/723) — Full testing stack: Testing Trophy philosophy, AAA pattern, unit-test naming, React Testing Library, and what *not* to test.
- **ServiceNow platform skill (#568)** — [anthropics/skills#568](https://github.com/anthropics/skills/pull/568) — Broad ServiceNow assistant covering ITSM, ITOM, ITAM/SAM, FSM, HRSD/CSM, SPM, Vulnerability Response, SecOps, CSDM, and IntegrationHub.
- **Pyxel retro game development (#525)** — [anthropics/skills#525](https://github.com/anthropics/skills/pull/525) — MCP-driven workflow for Pyxel (Python retro/8-bit engine): write → run_and_capture → inspect → iterate.
- **SAP-RPT-1-OSS predictor (#181)** — [anthropics/skills#181](https://github.com/anthropics/skills/pull/181) — Skill wrapping SAP's open-source tabular foundation model for predictive analytics on SAP business data.
- **plan-file-hygiene (#1479)** — [anthropics/skills#1479](https://github.com/anthropics/skills/pull/1479) — Lifecycle management for planning artifacts, addressing the accumulation problem raised in #1417.
- **skill-quality/security analyzers (#83)** — [anthropics/skills#83](https://github.com/anthropics/skills/pull/83) — Meta-skills for vetting other skills (see Section 1).

---

## 4. Skills Ecosystem Insight

The community's most concentrated demand is for **trustworthy, well-engineered skills**: the top PR and three of the four hottest issues all target the broken skill-creator evaluation tooling, while the single most-commented issue demands security and provenance guarantees against impersonation of official Anthropic skills — reliability and trust are the gating factors for ecosystem growth.

---

# Claude Code Community Digest — 2026-08-15

## Today's Highlights
Version 2.1.233 shipped with GitLab merge request URL support in the `--worktree` flag and `claude agents` view, plus an opt-in `forward_user_identity` gateway setting for proxied Anthropic upstreams. Community attention remains concentrated on the long-running macOS "Advisor" API failure (#69238, 96 👍) and a fresh wave of Windows-specific regressions traced to 2.1.232. Data-loss and billing reports continue to surface, including a silent cleanup of 58/69 session transcripts (#86730) and a $995.67 auto-recharge incident (#83062).

## Releases
**v2.1.233**
- Added GitLab merge request URL support to the `--worktree` flag and the `claude agents` view — MRs now display as `!N`.
- Added opt-in `forward_user_identity` apps gateway setting on Anthropic upstreams, sending the signed-in user's identity as headers so proxies sitting behind upstream Anthropic endpoints can forward identity. *(Release notes truncated in source; additional changes may be unlisted.)*

## Hot Issues
1. **[#69238 — "No response from API" error when Advisor is triggered](https://github.com/anthropics/claude-code/issues/69238)** — *63 comments, 96 👍* — Open since June on macOS; users on a Sonnet base see "No response from API · Retrying in 2m 25s" when the Opus 4.8 Advisor engages. The highest-engagement issue this cycle.

2. **[#30869 — Unarchive Claude Code sessions in desktop app](https://github.com/anthropics/claude-code/issues/30869)** — *CLOSED, 29 comments, 57 👍* — One of the most-upvoted desktop feature requests; closed this cycle, indicating it shipped or was accepted into a release plan.

3. **[#24537 — Agent Hierarchy Dashboard](https://github.com/anthropics/claude-code/issues/24537)** — *16 comments, 17 👍* — Unified real-time visualization for multi-agent workflows (TUI + Desktop). Signals growing demand for observability as sub-agent usage scales.

4. **[#11791 — Browser automation incompatible with web sandbox proxy](https://github.com/anthropics/claude-code/issues/11791)** — *11 comments, 16 👍* — Playwright/Puppeteer/Selenium cannot run in the Claude Code sandbox because the security proxy lacks HTTPS CONNECT tunneling; users want this documented or fixed.

5. **[#86619 — Windows Git Bash permission-prompt false-positives](https://github.com/anthropics/claude-code/issues/86619)** — *9 comments, 9 👍* — Since 2.1.232, static analysis flags read-only `cd`-compound commands, producing constant unsuppressible permission prompts. Reproduced on two independent machines; a clear regression.

6. **[#66117 — Option to disable prompt suggestions](https://github.com/anthropics/claude-code/issues/66117)** — *9 comments, 10 👍* — Users want the ability to turn off inline prompt suggestions in the Claude.ai web/app interface. High-quality-of-life, low-complexity request.

7. **[#86473 — Persistent ECONNRESET on Windows](https://github.com/anthropics/claude-code/issues/86473)** — *2 comments, 2 👍* — "Connection lost mid-response" on all Code surfaces while raw HTTPS to `api.anthropic.com` stays healthy. Filed as duplicate, but representative of broader Windows networking issues.

8. **[#86730 — Default cleanupPeriodDays deleted 58 of 69 transcripts](https://github.com/anthropics/claude-code/issues/86730)** — *1 comment* — Silent data loss on macOS: the default cleanup window removed transcripts while the sidebar now shows "Session not found on disk" ghost entries. Significant trust implications.

9. **[#83062 — $995.67 in auto-recharges after limits reset](https://github.com/anthropics/claude-code/issues/83062)** — *1 comment* — Two Individual-plan auto-recharges fired right after included limits reset. Users are asking for recharge guardrails and clearer billing transparency.

10. **[#84266 — model_refusal_fallback false-positive on tmux orchestration](https://github.com/anthropics/claude-code/issues/84266)** — *2 comments* — Legitimate tmux-based multi-session orchestration repeatedly trips the cyber refusal fallback; with `switchModelsOnFlag: false`, the coordinator session is fully blocked.

## Key PR Progress
Only 4 PRs were updated in the last 24h (all open):

1. **[#86746 — fix(security-guidance): preserve Python probe errors](https://github.com/anthropics/claude-code/pull/86746)** — Fixes #86709: `sg-python.sh` no longer discards stderr from interpreter probes, so users get real diagnostics when all candidate interpreters fail.

2. **[#86626 — feat: add shell completions (bash, zsh, fish)](https://github.com/anthropics/claude-code/pull/86626)** — Adds `claude` tab-completion scripts for bash (works with stock macOS 3.2), zsh, and fish, plus install documentation. Fills a long-standing CLI ergonomics gap.

3. **[#83890 — Create pylint.yml](https://github.com/anthropics/claude-code/pull/83890)** — Community-contributed CI quality gate adding pylint to the project workflow.

4. **[#41611 — add the missing source to claude code](https://github.com/anthropics/claude-code/pull/41611)** — Long-running community PR (open since March); adds a missing source reference. Minimal description available.

## Feature Request Trends
- **Session lifecycle management**: Unarchiving sessions (#30869), resuming agent sessions from workflows (#86089), and restoring archived Cowork projects (#85272) all point to demand for durable, resumable session state.
- **Multi-agent observability**: The Agent Hierarchy Dashboard (#24537) reflects a growing need for real-time visibility into sub-agent and multi-session orchestration.
- **Configurable limits**: Auto-memory index size (#79217) and per-session auto-compact windows (#85205) should be user-tunable rather than fixed defaults.
- **Browser tooling integration**: Requests to support Playwright/Puppeteer in the sandbox (#11791) and to enumerate persisted browser contexts/logins in Browser Agent MCP (#86807).

## Developer Pain Points
- **False-positive security/safety flags on legitimate work**: Repeated reports across WAF development (#86804), credential rotation (#86819), and tmux orchestration (#84266) — the dual-use safeguard is eroding developer trust.
- **Windows reliability**: Permission-prompt regressions (#86619), persistent ECONNRESET (#86473), and MSIX in-app update failures (#86555) make Windows the most problematic platform this cycle.
- **Data loss and billing surprises**: Silent transcript cleanup (#86730), unarchivable local Cowork projects (#85272), and unexpected auto-recharges (#83062).
- **Token metering inconsistency**: 17x variance in tokens charged per quota point (#84607) and API payload duplication forcing >1M compaction (#86817) highlight context/metering bugs that directly impact cost.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-08-15

## Today's Highlights
The day is dominated by **desktop performance regression reports**: the Windows app update to `26.810.4967.0` is linked to widespread mouse lag, CPU busy loops, and system-wide stutter, while macOS `26.810.41047` is triggering OOM crashes and high CPU usage. Meanwhile, the Rust-based Codex line saw **five rapid alpha releases** (`rust-v0.148.0-alpha.14` through `.18`), and the repository landed a wave of sandbox, permission-profile, and TUI fixes.

## Releases
Five `rust-v0.148.0-alpha` releases were published in the last 24 hours:

- `rust-v0.148.0-alpha.14`
- `rust-v0.148.0-alpha.15`
- `rust-v0.148.0-alpha.16`
- `rust-v0.148.0-alpha.17`
- `rust-v0.148.0-alpha.18`

No changelog details were included beyond placeholder release notes. The rapid cadence suggests active stabilization of the Rust Codex runtime, but there are no user-facing release notes to summarize.

## Hot Issues
10 noteworthy issues from the last 24 hours:

- [**#20214**](https://github.com/openai/codex/issues/20214): Codex App frequently freezes/stutters on Windows 11 Pro despite sufficient resources. Long-running performance complaint with **101 comments and 84 👍** — one of the most active issues in the list.
- [**#29532**](https://github.com/openai/codex/issues/29532): macOS SQLite `TRACE target=log` churn persists after `rust-v0.142.0`. **47 comments**; earlier fixes reduced WebSocket logging but did not fully resolve the underlying churn.
- [**#25453**](https://github.com/openai/codex/issues/25453): Windows Codex Desktop spawns `powershell.exe` every second for full process polling, causing high CPU usage. **26 comments**; points to inefficient native process enumeration in the desktop app.
- [**#28015**](https://github.com/openai/codex/issues/28015): False-positive cybersecurity safety check repeatedly blocks normal local repository maintenance in the CLI. **24 comments**; a critical trust/safety UX problem that interrupts paid interactive sessions.
- [**#24287**](https://github.com/openai/codex/issues/24287): Codex Desktop accepts a prompt but stays stuck in “Thinking”; Stop fails and the turn can become invisible after restart. **23 comments** — a serious session-state reliability bug.
- [**#28855**](https://github.com/openai/codex/issues/28855): Desktop `26.611.8604.0` causes intermittent whole-system input lag on Windows. **18 comments, 20 👍**; reproduced on clean logs with plugins disabled.
- [**#38455**](https://github.com/openai/codex/issues/38455): ChatGPT desktop `26.810.41047` repeatedly spawns Computer Use workers and crashes with V8 OOM on macOS. **12 comments**; the previous version worked, making this a clear regression.
- [**#38547**](https://github.com/openai/codex/issues/38547): Windows `26.810.4967.0` enters an idle main-process CPU busy loop in Chrome plugin app-server hashing. **12 comments**; regression appeared immediately after updating.
- [**#38583**](https://github.com/openai/codex/issues/38583): Windows 11 `26.813.12317` causes persistent system-wide mouse lag and ~10% CPU while idle. **11 comments**; another Windows-specific performance regression report.
- [**#38637**](https://github.com/openai/codex/issues/38637): New Codex release is “very unstable” on macOS arm64 — high CPU, constant crashes, and user asks for a revert. **5 comments**, but captures growing sentiment about the latest desktop release.

## Key PR Progress
10 important PRs from the last 24 hours:

- [**#38682**](https://github.com/openai/codex/pull/38682): Surface misalignment policy violations as typed errors. Recognizes policy violations from streams and HTTP 400/403 responses, preserves upstream messages, and marks them non-retryable.
- [**#38681**](https://github.com/openai/codex/pull/38681): Preserve HTTP fallback for delegated sessions. Prevents delegated sessions from creating unnecessary WebSocket connections after the parent session has switched to HTTP.
- [**#31644**](https://github.com/openai/codex/pull/31644): Linux sandbox DNS routing through a managed proxy. Adds an opt-in `enable_dns` adapter inside the bubblewrap network namespace so native DNS clients honor proxy configuration.
- [**#31471**](https://github.com/openai/codex/pull/31471): Extract apps cache logic into `ConnectorRuntimeManager`. Refactors the Codex Apps tools cache into a runtime-scoped, immutable snapshot keyed by account, workspace mode, and Codex home.
- [**#38678**](https://github.com/openai/codex/pull/38678): Preserve environment configuration ownership. Ensures later thread setting updates refresh inherited configuration without overwriting attachment-owned permissions and capability roots.
- [**#38673**](https://github.com/openai/codex/pull/38673): Honor per-environment permission profiles. Resolved `permission_profile` is added to each `EnvironmentConfig`; `Ready` environment configs can override thread permissions while `FromThread` keeps inheritance behavior.
- [**#38660**](https://github.com/openai/codex/pull/38660): Enforce managed deny-read rules in the Windows sandbox. Unsupported policies now fail closed instead of running without the requested filesystem protection.
- [**#38662**](https://github.com/openai/codex/pull/38662): Delete Thai combining marks one at a time in the composer. Improves backspace handling for Thai vowel/tone marks without deleting entire grapheme clusters.
- [**#38647**](https://github.com/openai/codex/pull/38647): Add an override to skip project configuration. `LoaderOverrides::ignore_project_config` bypasses project-root discovery and all project configuration layers, useful for tests and automation.
- [**#38645**](https://github.com/openai/codex/pull/38645): Deliver gRPC code-mode notifications without truncation. Removes the previous 1,024-byte limit and truncation suffix, with tests for oversized multibyte notification text.

## Feature Request Trends
The issue backlog is mostly bug reports, but the feature/improvement requests cluster around:

- **Repository-aware task handoff** — [**#34582**](https://github.com/openai/codex/issues/34582) requests a sanitized, repository-aware state contract for moving task context across workspaces, shared by both Codex App and CLI.
- **Better project association diagnostics** — [**#24484**](https://github.com/openai/codex/issues/24484) asks Codex Desktop to detect and explain Git `safe.directory` / ownership failures when WorkTree project association fails.
- **Reliability / rollback paths** — Several users ask for the ability to stay on or revert to previous stable desktop versions after regressions, e.g. [**#38637**](https://github.com/openai/codex/issues/38637) and [**#38547**](https://github.com/openai/codex/issues/38547).
- **Custom model configuration** — [**#32349**](https://github.com/openai/codex/issues/32349) reports that custom model metadata cannot be resolved even when `model_catalog_json` is successfully loaded, indicating a need for better custom-model diagnostics.
- **Composer and UI papercuts** — [**#34303**](https://github.com/openai/codex/issues/34303) asks for auto-scroll to keep the beginning of generated responses visible; [**#33977**](https://github.com/openai/codex/issues/33977) reports keyboard shortcut conflicts in Quick Chat.

## Developer Pain Points
Recurring frustrations from the latest activity:

- **Windows desktop performance is the dominant theme**: freezes, system-wide mouse lag, PowerShell polling every second, DWM handle accumulation, kernel-pool growth, and idle CPU busy loops after specific updates.
- **macOS stability regressions**: `26.810.41047` causes OOM crashes, 100%+ CPU, 10+ GB RAM usage, and UI hangs; users explicitly request a revert.
- **Session-state bugs are undermining trust**: stuck “Thinking” states, failed Stop actions, invisible turns after restart, and blank terminal output when resuming long CLI threads.
- **Overzealous safety checks**: false-positive cybersecurity prompts interrupt legitimate local DevOps work and degrade paid interactive sessions.
- **Cross-platform rough edges**: SQLite logging churn on macOS, gRPC notification truncation, Windows sandbox policy gaps, and custom model metadata resolution failures show the Rust / Electron integration still needs hardening.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-08-15

## Today's Highlights

The nightly release `v0.56.0-nightly.20260815.g2a87e7be1` landed with the latest SSR Agent (automated repair) work, while a substantial batch of SSR Agent PRs (#28810–#28820) from @joneba-google drove fixes across TUI hangs, subagent lifecycle reporting, test hygiene, and build config. The most important development is PR #28815, which directly fixes the tracker's most-commented open bug (#22323): subagents hitting `MAX_TURNS` were reporting `GOAL` success. Community PRs also made progress on PTY resource leaks and a long-requested "agents can call agents" feature.

## Releases

**v0.56.0-nightly.20260815.g2a87e7be1** — Nightly release containing one change: `[SSR Agent]` migration of `process.env` manipulation to `vi.stubEnv()` in `a2a-server` tests by @joneba-google ([PR #28811](https://github.com/google-gemini/gemini-cli/pull/28811)), aligning tests with Vitest project guidelines.
Full changelog: [compare v0.56.0-nightly.20260814...v0.56.0](https://github.com/google-gemini/gemini-cli/compare/v0.56.0-nightly.20260814.gc0d192452...v0.56.0)

## Hot Issues

1. **[#22323 — Subagent recovery after MAX_TURNS is reported as GOAL success](https://github.com/google-gemini/gemini-cli/issues/22323)** *(p1, 12 comments)* — A `codebase_investigator` subagent reports `termination_reason: "GOAL"` even when it hit the max-turn limit before doing any analysis. The most active issue; now targeted by PR #28815.
2. **[#21409 — Generalist agent hangs](https://github.com/google-gemini/gemini-cli/issues/21409)** *(p1, 8 comments, 8 👍)* — Deferring to the generalist agent hangs indefinitely (up to an hour) on trivial tasks like folder creation. Users work around it by instructing the model to never use subagents. Strong community agreement.
3. **[#19873 — Zero-Dependency OS Sandboxing & Post-Execution Intent Routing](https://github.com/google-gemini/gemini-cli/issues/19873)** *(p2 enhancement, 8 comments)* — Proposes unlocking Gemini 3's native bash affinity (grep/awk/sed chains) inside a sandbox, with post-execution intent routing to preserve security and UX. High architectural interest.
4. **[#24353 — Robust component-level evaluations](https://github.com/google-gemini/gemini-cli/issues/24353)** *(p1 EPIC, 7 comments)* — Follow-up to the behavioral-evals initiative; 76 eval tests now run across 6 Gemini models, and the team wants component-level coverage.
5. **[#22745 — AST-aware file reads, search, and codebase mapping](https://github.com/google-gemini/gemini-cli/issues/22745)** *(p2 EPIC, 7 comments)* — Investigates AST-aware tools to reduce turns from misaligned reads and cut token noise. Companion #22746 recommends `tilth`/`glyph` as starting points.
6. **[#21968 — Gemini does not use skills and sub-agents enough](https://github.com/google-gemini/gemini-cli/issues/21968)** *(p2, 6 comments)* — Custom skills (gradle, git) and sub-agents are ignored unless explicitly instructed, even for highly related tasks.
7. **[#26522 — Auto Memory retries low-signal sessions indefinitely](https://github.com/google-gemini/gemini-cli/issues/26522)** *(p2, 5 comments)* — The extraction agent only marks a session processed after successfully reading it; skipped low-signal sessions resurface forever.
8. **[#25166 — Shell command stuck with "Waiting input" after completion](https://github.com/google-gemini/gemini-cli/issues/25166)** *(p1, 4 comments, 3 👍)* — Simple, non-interactive commands remain displayed as active and awaiting input after they finish.
9. **[#26525 — Deterministic redaction & reduced Auto Memory logging](https://github.com/google-gemini/gemini-cli/issues/26525)** *(p2, security, 4 comments)* — Transcript content is sent to the extraction model *before* redaction is prompted; the service also over-logs skills. Privacy-relevant for a feature that reads local transcripts.
10. **[#22093 — Subagents running without permission since v0.33.0](https://github.com/google-gemini/gemini-cli/issues/22093)** *(p2, 3 comments)* — Users with agents explicitly disabled report the generalist subagent activating anyway; a permissions regression that undermines user control.

## Key PR Progress

1. **[#28815 — Preserve original termination reason during subagent recovery](https://github.com/google-gemini/gemini-cli/pull/28815)** *(p1, area/agent)* — Fixes #22323: when a subagent hits `MAX_TURNS`/`TIMEOUT` but calls `complete_task` during grace recovery, the original interruption reason is no longer masked as "GOAL success."
2. **[#28812 — Prevent indefinite TUI hang by adding execution timeouts](https://github.com/google-gemini/gemini-cli/pull/28812)** *(p1, area/core)* — Fixes #21477: wraps `getProcessInfo()`/`execAsync` in timeouts so bare-Linux-terminal startups don't hang forever at "Initializing...".
3. **[#20916 — Prevent PTY file descriptor leak in ShellExecutionService](https://github.com/google-gemini/gemini-cli/pull/20916)** *(p1, help wanted)* — Fixes #15945: PTY master FDs were never closed after exit/kill, exhausting macOS `kern.tty.ptmx_max` (511) on long-running sessions.
4. **[#27154 — Synchronously delete PTY entries, prevent memory leak](https://github.com/google-gemini/gemini-cli/pull/27154)** *(p2, area/core)* — Fixes a leak where `activePtys.delete()` was chained to a rejected log-stream promise, so PTY entries and headless terminals were never garbage-collected.
5. **[#28738 — Allow agents to call agents](https://github.com/google-gemini/gemini-cli/pull/28738)** *(p2, size/l, help wanted)* — Fixes #22092: lets subagents delegate to other subagents (or recurse) via `tools:` frontmatter. A requested feature with broad orchestration implications.
6. **[#25378 — Windows ripgrep EFTYPE fix](https://github.com/google-gemini/gemini-cli/pull/25378)** *(p1/p2, help wanted)* — Fixes #22784: `grep_search` failed with `spawn EFTYPE` when executing a downloaded binary mismatched to the host architecture (e.g., ARM on x64).
7. **[#27588 — WSL2 clipboard image paste support](https://github.com/google-gemini/gemini-cli/pull/27588)** *(p2, size/l)* — Fixes #22274: detects WSL environments and reads the Windows clipboard via PowerShell interop, saving images as PNG.
8. **[#28597 — Load environment variables before resolving settings placeholders](https://github.com/google-gemini/gemini-cli/pull/28597)** *(p2, area/core)* — Fixes a load-order race condition where `.env` wasn't loaded before settings were expanded, causing placeholder resolution failures at startup.
9. **[#28603 — Upgrade sandbox Dockerfile to Node 22](https://github.com/google-gemini/gemini-cli/pull/28603)** *(p1, security)* — Fixes #28584: sandbox ran `node:20-slim`, which reached EOL 2026-04-30; model-directed commands were executing on an unsupported runtime.
10. **[#28817 — Retain executing subagent tool calls in hook state](https://github.com/google-gemini/gemini-cli/pull/28817)** *(p2)* — Fixes #22589: first-seen subagent tool calls in `Executing` status (e.g., background tasks) were dropped before entering hook state.

## Feature Request Trends

- **Agent lifecycle reliability** — The dominant theme: accurate termination reasons (#22323), hang prevention (#21409, #25166), execution timeouts (#28812), and browser-agent session takeover/lock recovery (#22232).
- **Deep codebase intelligence via ASTs** — Formal EPIC tracking AST-aware reads/search/mapping (#22745, #22746) to reduce token noise and misaligned reads.
- **Secured native-tool execution** — Sandboxing the model's bash affinity with post-execution intent routing (#19873), plus guards against destructive commands like `git reset --force` (#22672).
- **Memory system maturation** — Auto Memory issues cluster around retry loops (#26522), deterministic redaction (#26525), invalid-patch quarantine (#26523), and general quality (#26516).
- **Agent autonomy & transparency** — Users want proactive skill/sub-agent usage (#21968), agent-to-agent delegation (#28738 / #22092), and subagent trajectory visibility via `/chat share` (#22598).
- **Cross-platform parity** — Windows ripgrep (#25378), WSL2 clipboard (#27588), Wayland browser subagent (#21983), and terminal render/refresh behavior (#21924, #24935).

## Developer Pain Points

- **Indefinite hangs** — A recurring, high-severity theme across the generalist agent (#21409), TUI startup (#28812), completed shell commands (#25166), and `MessageBus.request` (#28816).
- **Subagent control & permissions** — Subagents activating despite disabled config (#22093), destructive command usage (#22672), and `/bug` reports that lack subagent context (#21763), making debugging opaque.
- **Resource leaks in long sessions** — PTY fd and memory exhaustion (#20916, #27154) degrade long-running workflows, especially on macOS.
- **Tool-count limits** — 400 errors with >128 tools (#24246); users want smarter tool scoping instead of hard caps.
- **Messy workspace hygiene** — The model scatters tmp edit scripts across directories (#23571) and gets stuck at interactive prompts (e.g., `vite` scaffolding, #22465).
- **Session/terminal glitches** — Flicker on resize (#21924), terminal corruption after external editors (#24935), and incorrect `\n` escape handling (#22466) chip away at TUI polish.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-08-15

## 1. Today's Highlights

Two maintenance releases landed in the last 24 hours — `v1.0.81-0` and `v1.0.80` — both focused on model configuration updates. Meanwhile, the community is most engaged with MCP OAuth regressions (Atlassian/GitLab), stale or missing model catalogues in enterprise accounts, and several session/agent reliability bugs. Only three PRs were updated, all around pull request workflow automation cleanup.

## 2. Releases

- [`v1.0.81-0`](https://github.com/github/copilot-cli/releases) — Model configuration updates.
- [`v1.0.80`](https://github.com/github/copilot-cli/releases) — Released 2026-08-14; model configuration updates.

Both are incremental maintenance releases with no user-facing feature notes beyond refreshed model settings.

## 3. Hot Issues

1. [Issue #4345: Reasoning effort 'medium' is not supported for model 'claude-haiku-4.5'](https://github.com/github/copilot-cli/issues/4345)  
   Users with both `copilot_cli_opus_medium_effort_default` and `copilot_cli_gpt_5_4_mini_for_explore` feature flags see repeated sub-agent execution failures. 6 comments, 4 👍 — a sharp example of feature-flag interactions breaking model defaults.

2. [Issue #4390: Enabled organization models missing from catalogue](https://github.com/github/copilot-cli/issues/4390)  
   Anthropic models like Claude Sonnet 5/Opus 5 and Kimi K3 enabled by the org are missing from the effective catalogue; selecting them reports “disabled by your organization.” 6 comments, 4 👍 — impacts enterprise Copilot Business users directly.

3. [Issue #4422: All Claude models disabled under CLI model selection](https://github.com/github/copilot-cli/issues/4422)  
   Personal Enterprise accounts lost access to Claude models overnight, despite appearing enabled in GitHub settings. Rolling back the CLI did not help. 3 comments, 3 👍 — suggests server-side policy/catalogue propagation issues.

4. [Issue #4480: Atlassian MCP OAuth fails with RFC 8414 issuer mismatch on 1.0.79](https://github.com/github/copilot-cli/issues/4480)  
   Regression reported against `https://mcp.atlassian.com/v1/mcp`; closed, but [Issue #4490](https://github.com/github/copilot-cli/issues/4490) indicates the same failure persists on 1.0.80. 4 comments, 6 👍 — remote MCP auth remains a hot reliability area.

5. [Issue #4439: GitLab MCP OAuth metadata rejected with RFC 8414 issuer mismatch](https://github.com/github/copilot-cli/issues/4439)  
   Self-managed GitLab MCP servers using OAuth 2.0 Dynamic Client Registration fail in 1.0.79. 3 comments, 2 👍 — another symptom of the same OAuth discovery regression.

6. [Issue #4306: Subtasks freeze and stop responding](https://github.com/github/copilot-cli/issues/4306)  
   Long autopilot sessions using `/fleet` eventually hang. 3 comments, 2 👍 — affects complex multi-agent workflows and is a serious reliability signal for autonomous mode.

7. [Issue #4499: Fatal "Committing semi space failed" OOM in autopilot with heap only ~0.6/4.3 GB](https://github.com/github/copilot-cli/issues/4499)  
   `copilot.exe` crashes from host RAM commit failure rather than V8 heap exhaustion during long autopilot sessions. Newly reported, no comments yet — concerning for Windows users running memory-heavy routes.

8. [Issue #4491: `/spawn` template contradicts singular-spawn contract and lacks approval gate](https://github.com/github/copilot-cli/issues/4491)  
   The expanded prompt can instruct the agent to reuse an unrelated running session instead of creating a child session, enabling cross-session writes without explicit approval. 1 comment, 0 👍 — security-adjacent prompt injection risk.

9. [Issue #4488: Plugin updates fail with "Access is denied" when other Copilot CLI/VS Code sessions are open](https://github.com/github/copilot-cli/issues/4488)  
   File locks from unrelated sessions block plugin updates even when the plugin isn’t active. 1 comment — affects multi-window/multi-session users.

10. [Issue #4494: Newly enabled model remains unavailable until local Copilot state/cache is cleared](https://github.com/github/copilot-cli/issues/4494)  
   Sonnet 5 enabled in GitHub settings stays unavailable in CLI and Visual Studio until manual cache reset. 0 comments — points to missing catalog refresh/invalidation logic.

## 4. Key PR Progress

Only 3 PRs were updated in the last 24 hours; all are listed below.

- [PR #4497: Handle fork PR associations in invalid-label writer](https://github.com/github/copilot-cli/pull/4497)  
   Updates the invalid-label writer to handle fork PR workflow runs where GitHub doesn’t populate the pull request association. It now searches trusted workflow-run metadata and requires exactly one open PR.

- [PR #4496: Verify pull request workflow migration (canary)](https://github.com/github/copilot-cli/pull/4496)  
   Documentation-only draft PR used to verify the migrated PR automation for fork-originated PRs. Marked invalid and intended to be closed after confirmation.

- [PR #4449: Migrate pull request automation away from pull_request_target](https://github.com/github/copilot-cli/pull/4449)  
   Replaces `pull_request_target` usage: invalid issues are closed directly with an issue-scoped token, mergeable PRs are handled via a no-permission `pull_request` signal, and privileged work runs only from trusted workflow metadata. Closed.

## 5. Feature Request Trends

- **Model configuration control**  
  Users want more control over new model parameters, e.g. [Issue #4495](https://github.com/github/copilot-cli/issues/4495) asks for GPT-5.6 `reasoning.mode` support. Others want fresher model catalogues so newly enabled models appear without clearing local state ([Issue #4494](https://github.com/github/copilot-cli/issues/4494)).

- **Plugin ecosystem management**  
  [Issue #4487](https://github.com/github/copilot-cli/issues/4487) asks for a dependency model for marketplace plugins, including inter/intra marketplace dependencies and automatic installation. The plugin lock issue ([Issue #4488](https://github.com/github/copilot-cli/issues/4488)) also shows a need for smoother plugin lifecycle management.

- **MCP protocol compliance**  
  Requests include following MCP cursor-based `tools/list` pagination ([Issue #4006](https://github.com/github/copilot-cli/issues/4006)) and more tolerant OAuth metadata discovery for remote MCP servers ([Issue #4480](https://github.com/github/copilot-cli/issues/4480), [Issue #4439](https://github.com/github/copilot-cli/issues/4439)).

- **Observability flexibility**  
  [Issue #2934](https://github.com/github/copilot-cli/issues/2934) requests support for `OTEL_EXPORTER_OTLP_PROTOCOL=http/protobuf`, since only `application/json` is currently honored.

- **Session and UX polish**  
  Developers want clearer startup messaging around `copilot-instructions.md` ([Issue #4475](https://github.com/github/copilot-cli/issues/4475)), session resume to restore the selected agent ([Issue #4489](https://github.com/github/copilot-cli/issues/4489)), and stop actions that don’t delete the entire prompt/session ([Issue #4477](https://github.com/github/copilot-cli/issues/4477)).

## 6. Developer Pain Points

- **MCP OAuth regressions across versions**  
  The RFC 8414 issuer mismatch has hit both Atlassian ([#4480](https://github.com/github/copilot-cli/issues/4480)) and GitLab ([#4439](https://github.com/github/copilot-cli/issues/4439)) users, and appears unresolved in 1.0.80 ([#4490](https://github.com/github/copilot-cli/issues/4490)).

- **Model availability and catalogue staleness**  
  Enterprises repeatedly report Claude models disabled or missing despite org settings ([#4390](https://github.com/github/copilot-cli/issues/4390), [#4422](https://github.com/github/copilot-cli/issues/4422)). Newly enabled models can also require manual local cache resets ([#4494](https://github.com/github/copilot-cli/issues/4494)).

- **Session and agent reliability**  
  Users are frustrated by lost sessions on stop ([#4477](https://github.com/github/copilot-cli/issues/4477)), `/restart` conflicts in `-w` sessions ([#4493](https://github.com/github/copilot-cli/issues/4493)), un-restored agents on resume ([#4489](https://github.com/github/copilot-cli/issues/4489)), and frozen subtasks ([#4306](https://github.com/github/copilot-cli/issues/4306)).

- **Update and deployment friction**  
  Fresh Codespaces still ship 1.0.3 and `copilot update` requires `sudo` to replace the binary ([#4501](https://github.com/github/copilot-cli/issues/4501)). Plugin updates are blocked by file locks from unrelated sessions ([#4488](https://github.com/github/copilot-cli/issues/4488)).

- **Permissions and false-positive safety blocks**  
  `allowed_directories` entries are ignored for shell-command prompts ([#4482](https://github.com/github/copilot-cli/issues/4482)), ordinary debugging gets flagged as cybersecurity risk ([#4479](https://github.com/github/copilot-cli/issues/4479)), and `/spawn` can perform cross-session writes without an approval gate ([#4491](https://github.com/github/copilot-cli/issues/4491)).

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-08-15

Source: [MoonshotAI/kimi-cli](https://github.com/MoonshotAI/kimi-cli)

## 1. Today's Highlights
No new releases or pull requests landed in the last 24 hours. Community activity is dominated by feature requests around persistent memory/context and cross-device session continuity, with the long-running memory-system issue (#1283) still gathering discussion.

## 2. Releases
None in the last 24 hours.

## 3. Hot Issues
Only 4 issues were updated in the last 24 hours; all are listed below.

- **[#1283 — Feature Request: Memory System — Persistent context across sessions](https://github.com/MoonshotAI/kimi-cli/issues/1283)**  
  Open · Created by CatKang · Updated 2026-08-14 · 39 comments  
  The most-discussed open feature request. Proposes both automatic AI-managed memory and manual user-defined memory so Kimi CLI retains project patterns, preferences, and context across sessions. The high comment count suggests strong community demand for durable project-level state.

- **[#2269 — Feature Request: Remote Control / Multi-Device Session Handoff](https://github.com/MoonshotAI/kimi-cli/issues/2269)**  
  Open · Created by lucianalima777 · Updated 2026-08-14 · 6 comments  
  Requests the ability to start a Kimi CLI session on one device and continue or remotely control it from another device (laptop, web, mobile). Relevant for developers working across multiple machines; early traction but still relatively low engagement.

- **[#1478 — Can the memory layer be optimized? Missing from docs; painful for large projects](https://github.com/MoonshotAI/kimi-cli/issues/1478)**  
  Open · Created by hahy36 · Updated 2026-08-15 · 3 comments  
  The user reports that memory-layer behavior is undocumented (only `agent.md` is visible) and makes large-project work painful. Includes a reference layout for a memory-based workspace, highlighting confusion about how Kimi CLI currently handles long-term memory.

- **[#1136 — feat(shell): enhance shell tool with version-aware PowerShell context](https://github.com/MoonshotAI/kimi-cli/issues/1136)**  
  Closed · Created by QIN2DIM · Updated 2026-08-14 · 0 comments  
  A closed enhancement proposal describing Windows-specific shell issues on Kimi K2.5, especially ambiguous command generation during initial passes. Relevant to developers using PowerShell in mixed/legacy environments.

## 4. Key PR Progress
No pull requests were updated in the last 24 hours.

## 5. Feature Request Trends
- **Persistent memory / context management** — The clearest trend: users want reliable long-term memory across sessions, including project patterns, preferences, and AI-managed notes.
- **Memory documentation & behavior transparency** — Developers expect memory features to be documented and discoverable; the absence of clear references is causing friction.
- **Cross-device session control / handoff** — Growing interest in starting work on one device and continuing seamlessly on another.
- **Better cross-platform shell tooling** — Windows/PowerShell execution reliability remains a concern, especially for agentic command generation.

## 6. Developer Pain Points
- **Large-project context loss** — Repeatedly raised via memory-related issues: users feel Kimi CLI loses important context or does not expose a clear memory mechanism.
- **Undocumented memory features** — The community is unsure what memory capabilities exist, how to configure them, or where the relevant docs/files are located.
- **Windows shell friction** — PowerShell version ambiguity and command-generation problems degrade the agent experience on Windows.
- **No official session handoff** — Users working across multiple devices cannot currently move or mirror an active session, forcing context re-creation.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-08-15

## Today's Highlights

A critical 48-bit ID timestamp wraparound was identified as the root cause of multiple “agent stops responding” reports, with a fix already open in [#42684](https://github.com/anomalyco/opencode/pull/42684). Desktop/TUI regressions continue to draw community attention, especially the hidden Plan/Build switching UI in v1.18.1 ([#36997](https://github.com/anomalyco/opencode/issues/36997)) and the Windows web sidebar losing sessions ([#42668](https://github.com/anomalyco/opencode/issues/42668)). Meanwhile, contributors landed several TUI and protocol hardening PRs, including session interrupt behavior and plugin adapter fixes.

## Releases

No new releases were published in the last 24 hours.

## Hot Issues

- [#42608 — 48-bit ID timestamp wraparound on 2026-08-14 wedges all pre-existing sessions](https://github.com/anomalyco/opencode/issues/42608)  
  Critical bug: sessions created before the wraparound silently stop processing prompts. Likely root cause behind [#42605](https://github.com/anomalyco/opencode/issues/42605) and the recent spike of “agent stops responding” reports. 5 comments, 3 👍.

- [#36997 — Desktop App v1.18.1 new layout hides agent (Plan/Build) switching UI](https://github.com/anomalyco/opencode/issues/36997)  
  Users cannot see or switch between Plan/Build modes after the layout redesign. Tab-key switching is also affected. 12 comments, 6 👍.

- [#42013 — Error: Free usage exceeded, subscribe to Go](https://github.com/anomalyco/opencode/issues/42013)  
  Free-tier quota errors persist beyond the expected reset window on OpenCode Zen. Related reports: [#42385](https://github.com/anomalyco/opencode/issues/42385), [#42215](https://github.com/anomalyco/opencode/issues/42215). 10 comments, 4 👍.

- [#42083 — GitHub Copilot provider shows zero models](https://github.com/anomalyco/opencode/issues/42083)  
  Auth succeeds, but no Copilot models appear in the picker and `opencode models github-copilot` reports “Provider not found.” 8 comments, 2 👍.

- [#25129 — Thinking mode gets stuck in infinite repetition loop](https://github.com/anomalyco/opencode/issues/25129)  
  Qwen 3.6 Pro in thinking mode outputs repeated characters indefinitely. Users are forced to switch models. 7 comments, 4 👍.

- [#41518 — gpt-5.6-luna via OpenCode Go returns 403 "not available in your region"](https://github.com/anomalyco/opencode/issues/41518)  
  Regional model access through OpenCode Go relay fails via CC Switch local proxy. 6 comments.

- [#38791 — Run loop can never exit when message IDs are not time-sortable](https://github.com/anomalyco/opencode/issues/38791)  
  Imported sessions with non-chronological message IDs can cause the agent loop to run until the provider returns 400. Related to ID sorting behavior. 6 comments.

- [#42605 — Session remains open, but agent does not process subsequent prompts](https://github.com/anomalyco/opencode/issues/42605)  
  OpenCode Desktop becomes unresponsive after a task completes and the user sends a follow-up. 4 comments.

- [#42668 — Web sidebar shows 'no sessions' on Windows despite API returning them](https://github.com/anomalyco/opencode/issues/42668)  
  TUI-created sessions are invisible in the web sidebar, and F5 loses web-created sessions on Windows. 2 comments.

- [#42657 — TUI lag with multi-subagent sessions (97% CPU on render thread)](https://github.com/anomalyco/opencode/issues/42657)  
  Typing delays of 1–3 seconds and stuttering spinners when 2–4 subagents run concurrently. Reproduced across Warp, Windows Terminal, and WezTerm. 2 comments.

## Key PR Progress

- [#42684 — fix(opencode): compare ID timestamps numerically in isAfter() to handle 48-bit overflow](https://github.com/anomalyco/opencode/pull/42684)  
  Direct fix for the critical 48-bit timestamp wraparound affecting session message ordering.

- [#42685 — fix(tui): re-query terminal palette on focus for system theme refresh](https://github.com/anomalyco/opencode/pull/42685)  
  Fixes stale system-theme colors inside terminal multiplexers like herdr; relates to [#42635](https://github.com/anomalyco/opencode/issues/42635).

- [#42683 — fix(tui): search all agents for configured color in color() lookup](https://github.com/anomalyco/opencode/pull/42683)  
  Prevents subagent colors from being silently dropped when subagents are not in the visible agent list.

- [#42682 — fix(core): keep queued work parked after interrupt](https://github.com/anomalyco/opencode/pull/42682)  
  Improves `session.interrupt?continue=true` semantics so queued next-turn work stays parked until a later full wake.

- [#42681 — fix(desktop): show window on did-finish-load fallback for wayland](https://github.com/anomalyco/opencode/pull/42681)  
  Linux-only fallback for Wayland window visibility; closes [#42679](https://github.com/anomalyco/opencode/issues/42679).

- [#42680 — refactor(core): share session model requests](https://github.com/anomalyco/opencode/pull/42680)  
  Unifies durable session steps and transient `session.generate` calls through one request-shaping boundary.

- [#42673 — fix(tui): ignore stray releases on new session controls](https://github.com/anomalyco/opencode/pull/42673)  
  Prevents accidental new-session creation when a text-selection drag is released over the tab strip.

- [#42669 — fix(plugin): derive promise adapter from protocol schemas](https://github.com/anomalyco/opencode/pull/42669)  
  Replaces field-by-field Promise plugin translation with schema-driven request/response conversions.

- [#42667 — fix(core): unify patch path resolution](https://github.com/anomalyco/opencode/pull/42667)  
  Aligns the patch tool’s path and permission handling with the canonical `LocationMutation` service.

- [#42663 — feat(core): persist web search provider selection](https://github.com/anomalyco/opencode/pull/42663)  
  Moves web search provider consent into file-backed config instead of KV state.

## Feature Request Trends

- **Model/provider auto-discovery**: Strong demand for automatic model discovery from OpenAI-compatible endpoints ([#27553](https://github.com/anomalyco/opencode/issues/27553)) and LAN/local provider discovery ([#27554](https://github.com/anomalyco/opencode/pull/27554)).
- **Runtime permission controls**: Users want dynamic permission toggles, e.g. an `/approve on|off` command to switch approval mode without restarting ([#41909](https://github.com/anomalyco/opencode/issues/41909)).
- **Context-cache performance**: Requests to improve context cache behavior when switching modes or during compaction, especially for local LLM backends ([#37489](https://github.com/anomalyco/opencode/issues/37489)).
- **Additional provider integrations**: Requests for Ollama Cloud auth ([#4581](https://github.com/anomalyco/opencode/issues/4581)) and new router providers such as Nara ([#42664](https://github.com/anomalyco/opencode/issues/42664)).
- **TUI/theme fidelity**: Continued focus on terminal theme correctness, transparent backgrounds, and agent color customization ([#42635](https://github.com/anomalyco/opencode/issues/42635), [#42646](https://github.com/anomalyco/opencode/pull/42646)).

## Developer Pain Points

- **Session reliability**: Multiple reports of non-responsive sessions, silent prompt drops, and agent loops after interruptions or ID wraparound ([#42608](https://github.com/anomalyco/opencode/issues/42608), [#42605](https://github.com/anomalyco/opencode/issues/42605), [#38791](https://github.com/anomalyco/opencode/issues/38791)).
- **Free-tier and billing confusion**: Users hit persistent “Free usage exceeded” errors and paid credits not appearing in OpenCode Zen/Go ([#42013](https://github.com/anomalyco/opencode/issues/42013), [#42385](https://github.com/anomalyco/opencode/issues/42385), [#42606](https://github.com/anomalyco/opencode/issues/42606)).
- **Provider configuration friction**: Copilot models not appearing, regional 403 errors, missing websearch tools, and MCP configs without required `type` fields ([#42083](https://github.com/anomalyco/opencode/issues/42083), [#41518](https://github.com/anomalyco/opencode/issues/41518), [#40568](https://github.com/anomalyco/opencode/issues/40568), [#42662](https://github.com/anomalyco/opencode/pull/42662)).
- **Desktop/WSL/Windows integration**: WSL sidecar failures with mirrored networking, Windows web sidebar session loss, and Wayland window visibility issues ([#37718](https://github.com/anomalyco/opencode/issues/37718), [#42668](https://github.com/anomalyco/opencode/issues/42668), [#42679](https://github.com/anomalyco/opencode/issues/42679)).

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-08-15

## Today's Highlights
Pi shipped **v0.84.2** with fullscreen transcript search and configurable default tools, while the community's attention centered on Windows support, provider compatibility edge cases, and performance fixes for the TUI. Notably, the clipboard "Copied!" bug on VTE terminals and the pnpm extension loader failure both got merged fixes within hours of being reported.

## Releases
**v0.84.2**
- **Fullscreen transcript search** — Search and navigate matches in fullscreen mode ([keybindings docs](https://github.com/earendil-works/pi/blob/v0.84.2/packages/coding-agent/docs/keybindings.md#tui-fullscreen-viewport))
- **Configurable default tools** — Choose which tools load at startup

## Hot Issues

1. **[#7547 — Windows usage and pitfalls (27 comments, OPEN)](https://github.com/earendil-works/pi/issues/7547)** — The top community discussion: how Pi runs on Windows, what breaks, and where maintainers should focus. High signal for anyone using Pi on Windows or WSL.

2. **[#6187 — Pi login hangs in WSL after Copilot device auth (26 comments, CLOSED)](https://github.com/earendil-works/pi/issues/6187)** — Browser-based GitHub Copilot authorization completes, but the WSL client never detects it and hangs. A frequently-hit onboarding wall for WSL users.

3. **[#5223 — Anthropic modifies thinking blocks → 400 with Opus 4.8 (17 comments, CLOSED)](https://github.com/earendil-works/pi/issues/5223)** — Multi-turn conversations fail when the provider rewrites `thinking`/`redacted_thinking` blocks in the latest assistant message. Critical for adaptive-thinking users.

4. **[#6665 — TUI pins a full core while streaming (12 comments, OPEN, in-progress)](https://github.com/earendil-works/pi/issues/6665)** — Uncached `Intl.Segmenter` grapheme segmentation plus per-chunk Markdown rebuilds cause 100% CPU on one core during long sessions. Community confirmed it reproduces with `pi -ne`.

5. **[#7850 — Copilot login fails with 429 for large orgs (9 comments, CLOSED)](https://github.com/earendil-works/pi/issues/7850)** — Organizations with 20+ models hit rate limiting during device authorization login. Paired with [#8010](https://github.com/earendil-works/pi/issues/8010), this is a recurring auth pain.

6. **[#8092 — Extension loader fails with pnpm's isolated node_modules (5 comments, CLOSED)](https://github.com/earendil-works/pi/issues/8092)** — jiti can't resolve declared dependencies through pnpm's symlinked `.pnpm` layout, breaking extensions installed via npm.

7. **[#7761 — TUI "Copied!" lies on VTE terminals (3 comments, CLOSED)](https://github.com/earendil-works/pi/issues/7761)** — OSC 52 writes are silently ignored by GNOME Terminal/Tilix, yet the TUI flashes "Copied!" anyway. Security-adjacent: users believe clipboard writes succeeded when they didn't.

8. **[#7787 — Bash PI_* guideline causes spurious permission prompts (3 comments, OPEN)](https://github.com/earendil-works/pi/issues/7787)** — The default `exposeSessionEnvironment: true` injects a guideline that makes models run `env` during unrelated tasks, triggering unnecessary approvals.

9. **[#8036 — Edit tool crashes TUI on ~14.5 MB diff render (2 comments, OPEN)](https://github.com/earendil-works/pi/issues/8036)** — The built-in `edit` tool succeeds, but rendering a massive diff from HTML files with long physical lines crashes the TUI — both during execution and session resume.

10. **[#8096 — Z.AI Coding Plan defaults reference a removed model (5 comments, CLOSED)](https://github.com/earendil-works/pi/issues/8096)** — `defaultModelPerProvider` still selects `glm-5.1` while models.dev's `zai-coding-plan` catalog no longer contains it, breaking out-of-box defaults.

## Key PR Progress

1. **[#8149 — fix(ai): omit invalid OpenAI session header (CLOSED)](https://github.com/earendil-works/pi/pull/8149)** — Drops the `session_id` HTTP header that proxies rejecting underscore-bearing header names would 400 (Envoy `http1.unexpected_underscore`).

2. **[#8148 — fix(coding-agent): scope bash PI_* guideline to session questions (CLOSED)](https://github.com/earendil-works/pi/pull/8148)** — Fixes #7787 by limiting the PI_* environment guideline so models don't run `env` for unrelated tasks.

3. **[#8146 — fix(ai): cap Baseten DeepSeek V4 Flash output at 384k (CLOSED)](https://github.com/earendil-works/pi/pull/8146)** — models.dev advertises 1,048,576 but Baseten only serves 384k; caps `maxTokens` accordingly.

4. **[#8143 — perf(tui): window fullscreen transcripts (CLOSED)](https://github.com/earendil-works/pi/pull/8143)** — Fullscreen sessions keep the complete human transcript (including pre-compaction history) while model context stays compacted, rendering only viewport-intersecting blocks.

5. **[#8139 — feat(ai): add ChatGPT OAuth image generation (CLOSED)](https://github.com/earendil-works/pi/pull/8139)** — Native ChatGPT image generation/editing reusing the OpenAI Codex OAuth and Responses infrastructure, no API key required.

6. **[#8124 — feat(ai): route xAI models through Responses and default to Grok 4.6 (OPEN)](https://github.com/earendil-works/pi/pull/8124)** — Switches xAI from completions to Responses API and bumps the default model from Grok 4.5 to 4.6.

7. **[#8120 — feat(coding-agent): experimental append compaction (OPEN)](https://github.com/earendil-works/pi/pull/8120)** — With `PI_EXPERIMENTAL=1`, append mode reuses the active system prompt, tools, and routing session so the compacted prefix can reuse provider prompt caches.

8. **[#8119 — fix: track Kimi cached tokens (OPEN)](https://github.com/earendil-works/pi/pull/8119)** — Addresses #8075: Kimi's top-level `usage.cached_tokens` is now counted as cache-read input instead of normal input.

9. **[#8112 — fix(coding-agent): realpath extension entries before jiti import (OPEN)](https://github.com/earendil-works/pi/pull/8112)** — Closes #8092 by realpath'ing entries before jiti resolves imports, working around pnpm's `.pnpm` symlink layout.

10. **[#8110 — fix(tui): route selection copy through the host clipboard (CLOSED)](https://github.com/earendil-works/pi/pull/8110)** — Fixes #7761: falls back to host clipboard integration when OSC 52 isn't supported, so "Copied!" is truthful on Terminal.app/VTE/tmux.

*Also notable:* [#8113 SiliconFlow provider (CLOSED)](https://github.com/earendil-works/pi/pull/8113), [#5262 Anthropic Vertex provider (OPEN)](https://github.com/earendil-works/pi/pull/5262), [#6216 Amazon Bedrock Mantle OpenAI Responses provider (OPEN)](https://github.com/earendil-works/pi/pull/6216).

## Feature Request Trends

- **Per-model settings** — Multiple requests for per-model compaction profiles ([#8133](https://github.com/earendil-works/pi/issues/8133)) and session-scoped model state for extensions ([#8100](https://github.com/earendil-works/pi/issues/8100)).
- **Provider breadth** — Momentum toward new providers (SiliconFlow, Vertex, Bedrock Mantle) and better provider-specific behavior: xAI Responses routing, ChatGPT image generation, Kimi cached-token accounting.
- **TUI/UX refinements** — Skill autocomplete in the middle of prompts ([#8144](https://github.com/earendil-works/pi/issues/8144)), configurable autocomplete popup position ([#8132](https://github.com/earendil-works/pi/issues/8132)), and temp-file hygiene with per-project/per-session `/tmp` directories ([#8145](https://github.com/earendil-works/pi/issues/8145)).
- **Windows & WSL first-class support** — The #7547 discussion is driving focus on Windows startup paths, Unix socket test failures ([#8047](https://github.com/earendil-works/pi/issues/8047)), and WSL auth flow fixes.

## Developer Pain Points

- **Authentication friction** — Repeated Copilot 429s for orgs with many models ([#7850](https://github.com/earendil-works/pi/issues/7850), [#8010](https://github.com/earendil-works/pi/issues/8010)) and the WSL login hang ([#6187](https://github.com/earendil-works/pi/issues/6187)) are blocking adoption.
- **TUI performance & stability** — Full-core spinning during streaming ([#6665](https://github.com/earendil-works/pi/issues/6665)) and crashes on large diff renders ([#8036](https://github.com/earendil-works/pi/issues/8036)) degrade long-session workflows.
- **Provider quirk whack-a-mole** — `strict: null` making optional params required ([#8105](https://github.com/earendil-works/pi/issues/8105)), dropped thinking levels on Gemini custom maps ([#8135](https://github.com/earendil-works/pi/issues/8135)), and reasoning-only responses bypassing retry ([#8115](https://github.com/earendil-works/pi/issues/8115)) show the cost of multi-provider compatibility.
- **Extension ecosystem friction** — pnpm install layouts ([#8092](https://github.com/earendil-works/pi/issues/8092)) and flag type mismatches ([#8123](https://github.com/earendil-works/pi/pull/8123)) complicate third-party extension development.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-08-15

## Today’s Highlights

Qwen Code shipped **v0.21.12 stable**, adding Web Shell workspace file uploads with progress tracking and introducing a diff-growth brake for autofix reviews. The repository’s review infrastructure remains the biggest engineering push: multiple PRs landed or advanced `--resume`, incremental anchors, and convergence-posture logic to make long-running review loops cheaper and more deterministic. Meanwhile, community issues continue to flag CI instability, SDK/CLI parity gaps, and unresolved resource-growth problems in long-lived daemon sessions.

## Releases

- **v0.21.12 (stable)** — [Release tag](https://github.com/QwenLM/qwen-code/releases/tag/v0.21.12)
  - Added Web Shell composer workspace file uploads via drag-and-drop or the `@` file panel, with progress tracking. ([#8874](https://github.com/QwenLM/qwen-code/pull/8874))
  - Implemented a diff-growth brake in autofix reviews to prevent runaway review loops.

- **v0.21.11-nightly.20260815.c396fe3d12** — [Release tag](https://github.com/QwenLM/qwen-code/releases/tag/v0.21.11-nightly.20260815.c396fe3d12)
  - Includes `feat(autofix): deny-by-default footprint gate and positional window censuses` and a `fix(web-shell)` change. ([#9156](https://github.com/QwenLM/qwen-code/pull/9156))

- **v0.21.12-preview.4 / v0.21.12-preview.3** — [preview.4](https://github.com/QwenLM/qwen-code/releases/tag/v0.21.12-preview.4) / [preview.3](https://github.com/QwenLM/qwen-code/releases/tag/v0.21.12-preview.3)
  - Both preview builds carry `fix(web-shell): preserve standalone session target` ([#9038](https://github.com/QwenLM/qwen-code/pull/9038)) and `feat(web-shell): support workspace file uploads`.

- **dsw-eas-tb-e2e-20260814-r\*** — Internal benchmark validation tags for SWE-bench Verified / Terminal-Bench 2.0 end-to-end runs, not user-facing feature releases.

## Hot Issues

1. **[#8678](https://github.com/QwenLM/qwen-code/issues/8678) — fix(serve): Preserve current session when a large restore times out**  
   Closed as partially addressed and superseded. P1 session-management issue with 9 comments; it covered restore timeout behavior, late-result safety, and attachment identity fencing.

2. **[#8051](https://github.com/QwenLM/qwen-code/issues/8051) — tracking(serve): Bound multi-workspace daemon resource usage**  
   Open P2 tracking issue with 9 comments. Current count-only limits do not bound bytes held by request bodies, WebSocket assembly, or other daemon resources. Community is asking for byte-level resource accounting.

3. **[#4063](https://github.com/QwenLM/qwen-code/issues/4063) — refactor: core + CLI architecture review**  
   Open architecture issue with 8 comments and 1 👍. Details 14 structural problems, most notably `@google/genai` types leaking into 136 files and coupling the core type system.

4. **[#8582](https://github.com/QwenLM/qwen-code/issues/8582) — security: read-only shell classifier auto-approves command substitution hidden by line continuation or `${var@P}`**  
   Closed P1 security bug with 5 comments. The AST and runtime classifiers could be bypassed, allowing arbitrary code execution despite read-only shell enforcement.

5. **[#9002](https://github.com/QwenLM/qwen-code/issues/9002) — SDK Python rejects `permission_mode="auto"` although the CLI supports it**  
   Open P3 integration bug with 6 comments. Client-side SDK validation rejects a mode the CLI accepts, forcing users to bypass the SDK or work around validation.

6. **[#8871](https://github.com/QwenLM/qwen-code/issues/8871) — ACP child process fails with “Unknown argument: acp” in qwen serve mode**  
   Open P2 bug with 5 comments. The serve/`--http-bridge` path spawns an ACP child with `--acp` but the child cannot parse it, causing auth failures.

7. **[#9026](https://github.com/QwenLM/qwen-code/issues/9026) — `NO_TOOL_RESULT_PROGRESS` hard-fails headless runs**  
   Open P2 bug with 4 comments. Headless runs abort when a model ends a turn quietly after a tool result, making automation brittle around “quiet” model turns.

8. **[#9143](https://github.com/QwenLM/qwen-code/issues/9143) — Main CI failed: E2E Tests on c5bf22247432**  
   Open P3 dev-bot issue with 7 comments. CI failures before any test result force per-commit tracking. Labeled `ready-for-agent` and `autofix/skip`, indicating maintainers are treating flaky pipeline runs separately from code defects.

9. **[#2128](https://github.com/QwenLM/qwen-code/issues/2128) — Memory grows unboundedly during long sessions**  
   Open P1 issue with 4 comments. The UI History array in `useHistoryManager.history` accumulates without bound during long sessions, causing ever-increasing memory consumption.

10. **[#8944](https://github.com/QwenLM/qwen-code/issues/8944) — 2 high severity vulnerabilities after `npm update` since 0.21.0**  
    Closed P2 security report with 4 comments. Users repeatedly saw high-severity npm audit findings after routine updates, raising concerns about supply-chain hygiene.

## Key PR Progress

1. **[#9175](https://github.com/QwenLM/qwen-code/pull/9175) — fix(review): repair seven pipeline defects found by live runs**  
   Fixes seven review-pipeline defects discovered by running live reviews, including structural problems with the incremental anchor.

2. **[#9153](https://github.com/QwenLM/qwen-code/pull/9153) — feat(review): wire `--resume` through `/review`, review run and CI retry**  
   Completes `--resume` support across all entry points, with warn-and-ignore gating on non-PR targets.

3. **[#9191](https://github.com/QwenLM/qwen-code/pull/9191) — feat(review): transfer per-file content verdicts across rebases**  
   Makes incremental review survive rebase/force-push by anchoring verdicts to file content rather than commit SHA alone.

4. **[#9092](https://github.com/QwenLM/qwen-code/pull/9092) — feat(review): resume an interrupted PR review from on-disk state**  
   Adds `fetch-pr --resume` with local fact-checking of previous report, worktree SHA, and diff integrity.

5. **[#9118](https://github.com/QwenLM/qwen-code/pull/9118) — feat(review): adopt a round-aware convergence posture for posted findings**  
   Raises the posting bar as review rounds accumulate, encouraging review→fix→re-review convergence instead of widening diffs.

6. **[#8707](https://github.com/QwenLM/qwen-code/pull/8707) — feat(chrome): add Qwen WebBridge direct browser control**  
   Adds direct browser control from `qwen serve` to the Qwen Chrome extension, including a 17-action surface and Kimi WebBridge-compatible endpoints.

7. **[#8529](https://github.com/QwenLM/qwen-code/pull/8529) — feat(core): resolve model modalities from API metadata**  
   Resolves missing model input modalities from models.dev, using a valid disk cache and background refresh without slowing cold startup.

8. **[#8938](https://github.com/QwenLM/qwen-code/pull/8938) — feat(core): reject upstream fail-fast placeholder responses**  
   Defends against HTTP 200 upstream responses whose entire body is placeholder text such as `(request timed out)`.

9. **[#9130](https://github.com/QwenLM/qwen-code/pull/9130) — feat(triage): add a deterministic flakiness gate to sandboxed verification**  
   Re-runs added/modified unit tests multiple times in the verify job to gate flaky PRs deterministically.

10. **[#9167](https://github.com/QwenLM/qwen-code/pull/9167) — feat(dingtalk): support outbound file delivery**  
    Lets the DingTalk channel upload explicitly marked workspace/temp files through DingTalk’s media API and send native file messages.

## Feature Request Trends

- **Review/autofix convergence and resumability** — The dominant theme is making review loops cheaper: resume support, content-anchored incremental rounds, convergence postures, flakiness gates, and CI retry integration.
- **Resource bounding for daemon/serve mode** — Requests for byte-level accounting, session-memory limits, and bounded multi-workspace daemon resource usage recur in multiple issues.
- **Architecture decoupling and clean layering** — Community PRs/issues call for making `utils/` a leaf layer, removing ACP dependencies on serve internals, and reducing coupling to `@google/genai`.
- **Web Shell and channel expansion** — Web Shell workspace uploads, redesign of Channel/session/workspace management, HTML export via `WebShellTranscript`, and evaluation of an Electron desktop host.
- **Security hardening** — Shell classifier bypass prevention, placeholder-response rejection, npm vulnerability follow-ups, and runner-level isolation for PAT-bearing CI jobs.

## Developer Pain Points

- **CI/release instability** — Multiple auto-filed “Main CI failed” issues ([#9143](https://github.com/QwenLM/qwen-code/issues/9143), [#9160](https://github.com/QwenLM/qwen-code/issues/9160), [#9159](https://github.com/QwenLM/qwen-code/issues/9159)) and a v0.21.12-preview.2 publish failure ([#9137](https://github.com/QwenLM/qwen-code/issues/9137)) make CI noise a recurring burden.
- **SDK/CLI and configuration parity gaps** — SDK rejects CLI-supported values like `permission_mode="auto"` ([#9002](https://github.com/QwenLM/qwen-code/issues/9002)); Shell ignores `tools.truncateToolOutputThreshold` ([#8922](https://github.com/QwenLM/qwen-code/issues/8922)); ACP child process receives an unknown `--acp` argument ([#8871](https://github.com/QwenLM/qwen-code/issues/8871)).
- **TUI/UX edge cases in small terminals** — `/statusline` dialog clipping ([#9037](https://github.com/QwenLM/qwen-code/issues/9037)) and stale context usage after `/compress` ([#6806](https://github.com/QwenLM/qwen-code/issues/6806)).
- **Headless/automation fragility** — `NO_TOOL_RESULT_PROGRESS` aborts ([#9026](https://github.com/QwenLM/qwen-code/issues/9026)) make quiet model turns fatal in non-interactive runs.
- **Memory growth in long sessions** — The unbounded UI History array ([#2128](https://github.com/QwenLM/qwen-code/issues/2128)) persists and affects long-running power users.
- **Dependency audit fatigue** — Repeated high-severity npm findings after updates ([#8944](https://github.com/QwenLM/qwen-code/issues/8944)) add friction to routine maintenance.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-08-15

The DeepSeek TUI project now ships as **CodeWhale**, and v0.9.8 is the first release under that public product name; the legacy `deepseek-tui` npm package is deprecated. Today’s activity is mostly stabilization: PRs landed to fix red CI on macOS/Windows and a session-index data-loss race, while open issues highlight agent-schema complexity and a P0 web-UI rebuild.

## Releases

**v0.9.8** — Codewhale by Shannon Labs  
The release note brands **Codewhale** as the public product. The `codewhale` command, npm package, and release-asset names remain lowercase technical identifiers. The legacy `deepseek-tui` npm package is deprecated and receives no further releases; users on older `deepseek` / `d` entry points should follow the migration guidance in the release notes.

## Hot Issues

- [CodeWhale #5324 — Simplify the `agent` tool’s 32-field schema](https://github.com/Hmbown/CodeWhale/issues/5324)  
  The model-facing `agent` tool exposes 32 properties, zero required fields, eight actions, and an alias bag. With 8 comments, this is a top reliability concern: models error on the schema, and simplification is needed for better tool-call fidelity.

- [CodeWhale #3192 — Add CodeWhale to agentclientprotocol/registry](https://github.com/Hmbown/CodeWhale/issues/3192)  
  Highest-engagement open issue this cycle at 13 comments. Listing in the agentclientprotocol registry would make CodeWhale directly installable from Zed, showing strong demand for editor/ecosystem integration.

- [CodeWhale #1004 — Add `/dryrun` to preview the next chat completion request](https://github.com/Hmbown/CodeWhale/issues/1004)  
  9 comments. Users want to inspect exactly what will be sent — long system prompt, cached files, tool definitions, @mentions — before incurring an expensive DeepSeek V4 Pro turn.

- [CodeWhale #5293 — Make deny-by-default approval selection configurable](https://github.com/Hmbown/CodeWhale/issues/5293)  
  Since v0.9.4, the TUI permission dialog defaults to the “deny” option. 5 comments and 1 👍: users are worried this breaks the established quick-confirm muscle memory.

- [CodeWhale #5374 — Agent writing output is corrupted on macOS](https://github.com/Hmbown/CodeWhale/issues/5374)  
  4 comments. Agent text renders “all over the place” on macOS, making transcripts unreadable for at least one MacOS user.

- [CodeWhale #5340 — `doctor` permanently stuck on `needs action` after upgrade](https://github.com/Hmbown/CodeWhale/issues/5340)  
  After upgrading from v0.9.4 to v0.9.6, `doctor` keeps reporting `first-run` and `update checkpoint` as unresolved even after completing onboarding. Upgrade-path regression with 3 comments.

- [CodeWhale #5322 — Output area doesn’t fill wide terminals](https://github.com/Hmbown/CodeWhale/issues/5322)  
  In v0.8.65 the transcript filled terminal width; v0.9 caps it, leaving cramped whitespace on wide displays. 3 comments, likely to keep accumulating as a UX complaint.

- [CodeWhale #5380 — Session-index writes are unsynchronized and can silently lose data](https://github.com/Hmbown/CodeWhale/issues/5380)  
  Concurrent `StateStore` clones can race on `session_index.jsonl`, causing silent data loss. Already closed by [#5382](https://github.com/Hmbown/CodeWhale/pull/5382), but an important data-integrity finding.

- [CodeWhale #5370 — P0: web UI looks broken](https://github.com/Hmbown/CodeWhale/issues/5370)  
  Maintainer reports the public web UI is “totally broken” in looks and features. P0 priority, requiring an audit and rebuild against harness references.

- [CodeWhale #5373 — Output-token ceiling clamped below documented catalogue limit](https://github.com/Hmbown/CodeWhale/issues/5373)  
  CodeWhale requests 65,536 output tokens while models.dev catalogs 384,000 for deepseek-v4-flash/pro. Terminal-Bench tasks crash when the low ceiling truncates the turn.

## Key PR Progress

- [CodeWhale #5382 — fix(state): serialize session-index writes](https://github.com/Hmbown/CodeWhale/pull/5382)  
  Fixes the #5380 data-loss race by moving `session_index.jsonl` append/compact/rename under the same serialization as the SQLite handle.

- [CodeWhale #5381 — fix(hooks): don’t panic on webhook HTTP client build failure](https://github.com/Hmbown/CodeWhale/pull/5381)  
  Replaces the fallback `.expect()` with a graceful error path, preventing host crashes on TLS or environment-specific client failures.

- [CodeWhale #5378 — test(tui): re-pin thinking-ladder assertions](https://github.com/Hmbown/CodeWhale/pull/5378)  
  Nine tests still asserted the pre-ladder vocabulary; this fixes red `main` on macOS and Windows.

- [CodeWhale #5384 — test(cli): re-pin provider-count assertions](https://github.com/Hmbown/CodeWhale/pull/5384)  
  Closes #5383 by updating registry/catalog counts from 43/38 to 45/40 for the v0.9.8 registry.

- [CodeWhale #5376 — fix(tui): keep internal runtime events out of session peek](https://github.com/Hmbown/CodeWhale/pull/5376)  
  Filters internal runtime envelopes from `session peek` so users see real user/model turns instead of runtime projections.

- [CodeWhale #5365 — feat(provider): first-class local DS4 setup](https://github.com/Hmbown/CodeWhale/pull/5365)  
  Adds a prefilled keyless loopback preset for DwarfStar (DS4) via the OpenAI-compatible transport, with no new protocol adapter.

- [CodeWhale #5353 — feat(tui): model guardian tier for Auto-Review](https://github.com/Hmbown/CodeWhale/pull/5353)  
  Auto-Review becomes a two-layer mode: deterministic floor stays non-bypassable, while fallback holds escalate to a one-shot model guardian.

- [CodeWhale #5369 — fix(tools): degrade Moonshot schemas instead of refusing conditionals](https://github.com/Hmbown/CodeWhale/pull/5369)  
  Aligns Moonshot tool schemas with the #5324 goal: degrade gracefully rather than rejecting schemas with conditional requirements.

- [CodeWhale #5368 — fix(tui): confine unguarded tests to the isolated state root](https://github.com/Hmbown/CodeWhale/pull/5368)  
  Fixes four tests that touched the real environment, with regression coverage for lock-holder trust and settings-path isolation.

- [CodeWhale #5339 — fix(engine): suppress child-owned shell completions](https://github.com/Hmbown/CodeWhale/pull/5339)  
  Filters child-owned background shell completion events out of the parent model stream while preserving legitimate parent completions.

## Feature Request Trends

- **Ecosystem integration and installability** — [agentclientprotocol/registry listing for Zed](https://github.com/Hmbown/CodeWhale/issues/3192), a [Reasonix-like interface](https://github.com/Hmbown/CodeWhale/issues/4029), and [plugin system + federated marketplaces](https://github.com/Hmbown/CodeWhale/issues/5311) all point toward making CodeWhale more pluggable and discoverable.

- **Pre-flight transparency** — [Add `/dryrun`](https://github.com/Hmbown/CodeWhale/issues/1004) and [show update notices in the TUI](https://github.com/Hmbown/CodeWhale/issues/5053) reflect a desire to see what will happen before paying the cost.

- **Provider/configuration simplicity** — Users want [prebuilt third-party provider templates](https://github.com/Hmbown/CodeWhale/issues/5350), fewer manual Base URL/model/key steps, and fixes for [NVIDIA NIM 404 errors](https://github.com/Hmbown/CodeWhale/issues/1482).

- **UI/UX regression repair** — The web UI P0 ([#5370](https://github.com/Hmbown/CodeWhale/issues/5370)), broken non-English clickable controls ([#5290](https://github.com/Hmbown/CodeWhale/issues/5290)), and wide-terminal output regression ([#5322](https://github.com/Hmbown/CodeWhale/issues/5322)) show that polish regressions are heavily felt.

- **Reliability contracts** — [Compaction survival contracts](https://github.com/Hmbown/CodeWhale/issues/4394), [keyless assembled-journey fixtures](https://github.com/Hmbown/CodeWhale/issues/5361), and [bounded RSS after worker storms](https://github.com/Hmbown/CodeWhale/issues/4326) indicate demand for explicit memory and data-behavior guarantees.

## Developer Pain Points

- **CI stability** — `main` was red again on multiple platforms due to stale assertions ([#5377](https://github.com/Hmbown/CodeWhale/issues/5377), [#5383](https://github.com/Hmbown/CodeWhale/issues/5383)); the tree also carries 464 `#[allow(dead_code)]` attributes that hide drift ([#4785](https://github.com/Hmbown/CodeWhale/issues/4785)).

- **Concurrency/data integrity** — Session-index races ([#5380](https://github.com/Hmbown/CodeWhale/issues/5380)) and stale write-claims from closed sessions ([#5372](https://github.com/Hmbown/CodeWhale/issues/5372)) are real-world data-loss and blocking bugs.

- **Upgrade/migration regressions** — `doctor` stuck after upgrade ([#5340](https://github.com/Hmbown/CodeWhale/issues/5340)), deny-by-default approval changes ([#5293](https://github.com/Hmbown/CodeWhale/issues/5293)), and output-width regressions ([#5322](https://github.com/Hmbown/CodeWhale/issues/5322)) all appeared after v0.9.x migration.

- **Provider compatibility friction** — NVIDIA NIM 404 ([#1482](https://github.com/Hmbown/CodeWhale/issues/1482)), over-complex agent schemas ([#5324](https://github.com/Hmbown/CodeWhale/issues/5324)), and third-party services stuck in `not checked` / `cache failed` states ([#5350](https://github.com/Hmbown/CodeWhale/issues/5350)) are recurring onboarding blockers.

- **Performance/memory stability** — RSS not settling after a 32-worker cancellation storm ([#4326](https://github.com/Hmbown/CodeWhale/issues/4326)) and truncation from a clamped output-token ceiling ([#5373](https://github.com/Hmbown/CodeWhale/issues/5373)) remain high-impact reliability concerns.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/boom7sss/agents-radar).*