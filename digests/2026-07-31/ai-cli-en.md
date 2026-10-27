# AI CLI Tools Community Digest 2026-07-31

> Generated: 2026-07-31 03:32 UTC | Tools covered: 9

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

# AI CLI Tools Cross-Tool Comparison Report
**Date: 2026-07-31** · Covers 9 major tools · Based on official community digests

---

## 1. Ecosystem Overview

The AI CLI tool ecosystem on 2026-07-31 comprises nine actively watched projects: Claude Code, OpenAI Codex, Gemini CLI, GitHub Copilot CLI, Kimi Code CLI, OpenCode, Pi, Qwen Code, and DeepSeek TUI (now branded **CodeWhale**). No major vendor shipped a stable release in the last 24 hours, but GitHub Copilot CLI, OpenCode, Qwen Code, and CodeWhale continued steady release cadence, while Codex merged a batch of infrastructure PRs. Community attention has shifted decisively from "what can agents do" to "can agents be trusted at scale": subagent false-success reports, silent hangs, Windows platform breakage, and context-window exhaustion dominate issue trackers across all nine projects. Meanwhile, PR-level work on sandbox hardening, protocol standardization, workspace-scoped isolation, and telemetry indicates the ecosystem is maturing from demos toward production deployment.

## 2. Activity Comparison

*Issues/PRs counts = items featured or updated in the 24-hour digest window, not total repo counts.*

| Tool | Featured Issues | Key PRs | Release Activity |
|---|---|---|---|
| **Claude Code** | 10 hot threads (top: #36151, 148 comments / 530 👍) | 0 notable (1 spam PR closed) | None |
| **OpenAI Codex** | 10 hot threads (top: Codex Diff crash #35058, 100 👍) | 10 PRs, several merged (sandbox, exec-server, streaming perf) | None |
| **Gemini CLI** | 10 threads, incl. 2 P1s + new SSRF issue (#28555) | 10 PRs (security + correctness fixes) | None |
| **GitHub Copilot CLI** | 10 threads (oversized-attachment wedge #3767; silent subagent failures #4293) | 0 (none updated) | **v1.0.77** + v1.0.77-0 (2026-07-30) |
| **Kimi Code CLI** | 3 (all updated; Memory System #1283, 429 overload #2571) | 1 (asyncio hook lifecycle fix) | None |
| **OpenCode** | 10 (6 closed, 4 open; "exiting loop" #38801 still hot) | 10 PRs | **v1.18.10** (Modal discovery, desktop polish) |
| **Pi (pi-mono)** | 10 (stalled catalog refresh #7153; provider protocol gaps) | 10 PRs (wire protocol, FTS5 search, Markdown API merged) | None |
| **Qwen Code** | 10 (credential sanitizer #8136; Anthropic converter #8162) | 10 PRs (daemon resource budget, telemetry, workspace isolation) | **v0.21.1-nightly** (20260731) |
| **DeepSeek TUI / CodeWhale** | 10+ new issues (monolith refactor epics, #5000 interrupt-state loss) | 10 PRs incl. 37-commit integration train (#4993) | **v0.9.2** (Codewhale rebrand, legacy package deprecated) |

**Takeaway:** The vendor tools with the largest *installed* communities (Claude Code, Codex) had the slowest release windows, while OpenCode, Qwen, and CodeWhale iterated fastest. Kimi Code remains the smallest ecosystem by a wide margin (3 issues, 1 PR).

## 3. Shared Feature Directions

These requirements appear across multiple tool communities independently:

- **Subagent lifecycle & orchestration honesty** — the #1 cross-tool theme. Gemini CLI false `GOAL` success on `MAX_TURNS` (#22323); Copilot CLI subagents returning empty with no logs (#4293); Codex subagents not waking callers (#15723); Claude Code reversed "Tools: All tools" labels (#82562); OpenCode Ollama subagents returning tool calls as text (#21181); Qwen Agent Team message queuing (#8172); CodeWhale CLI/TUI subagent parity (#4022).
- **Context-window control & transparency** — Claude Code real-time steering (#64624); Copilot CLI silently assuming 128K budget on 1M-token models (#4310); OpenCode `/compact` via OpenAI Responses API (#5200) and model input limits (#39797); Gemini AST-aware tooling to reduce token noise (#22745/22746); Qwen Anthropic converter/compaction correctness (#8162); CodeWhale compaction-survival contract (#4394).
- **Rate-limit & credit visibility** — Claude Code model-scoped rate limits in statusline (#77846); Codex disappearing 5-hour usage bucket (#32707) and status-line tokens (#24080); Copilot CLI AI-credit near-limit warnings (#4295).
- **Cross-surface session continuity & persistent memory** — Claude Code unified sessions across Desktop/Mobile/CLI (#42050) and Claude.ai→CLI context import (#13843); Codex cross-device continuity (#34804); Kimi Memory System (#1283); Qwen workspace-scoped memory (#8056); CodeWhale workspace-scoped task listing (#4985).
- **Protocol & MCP/ACP ecosystem compatibility** — Copilot CLI `anyOf` union schema breakage (#4301) and ACP `session/close` gap (#4113); OpenCode global MCP config loss (#30038); Pi remote session wire protocol (#7344/7348); CodeWhale protocol-neutral ACP client (#4996) and GitHub Copilot as ACP worker backend (#4997); Qwen ACP daemon memory ceiling (#8182).
- **Security hardening at the platform edge** — Gemini SSRF via DNS rebinding (#28555, fix #28557); Qwen credential sanitizer leaking passwords with `@` (#8136/#8137); CodeWhale fail-closed measurement and provenance (#4999); Claude Code sandbox/hook reliability; Codex Windows Sysmon BSODs (#31035).

## 4. Differentiation Analysis

- **Claude Code** — The incumbent enterprise-automation platform. Deepest hooks/skills/sessions story, but its extensibility surface is showing strain (hooks silently not firing, context-saturating skills). Community is large but increasingly vocal about reliability gaps.
- **OpenAI Codex** — Platform/plumbing-oriented: exec-server isolation, sandbox violation event normalization, Codex Apps parallel tool calls. Heavy Windows-user base (Sysmon, PowerShell polling, OneDrive). Positioning: runtime-isolated code agent with ChatGPT handoff.
- **Gemini CLI** — Security-forward and model-native (Gemini thinking, Auto model). Small but high-signal community. PRs land fast for SSRF, auth-loop, and stream-error fixes. Positioning: safety-first generalist agent tightly coupled to Google model features.
- **GitHub Copilot CLI** — Release discipline and IDE parity (credits warnings, editor-based `ask_user` editing, web OAuth). Strongest UX polish per release, but silent agent failures and session wedging erode trust. Positioning: the GitHub-native agent.
- **Kimi Code CLI** — Earliest stage. Community's dominant ask is a persistent memory system — pushing a stateless per-session tool toward continuity. Moonshot K3 model integration. Fewer debugging-heavy reports simply because fewer users.
- **OpenCode** — The independent OSS provider-agnostic router. Busiest non-vendor project on provider-model correctness: native Gemini thinking levels (#39796), xAI option mapping (#39787), Codex containment in OpenAI plugin (#39734), LAN provider discovery (#27554). Positioning: "bring your own everything" with a polished TUI.
- **Pi (pi-mono)** — The most library/protocol-centric project: runtime-neutral client packages, shared TypeBox schemas, bounded CBOR framing, FTS5 search. Community is smaller but architecturally sophisticated — targets extension authors and embedders, not end-user mass market.
- **Qwen Code** — Operationally minded: daemon resource budgeting (#8093), workspace-qualified memory isolation (#8056), channel state isolation (#8178), OTel GenAI time-to-first-chunk tracing (#8150). Nightly releases. Also the only project debugging Anthropic converter correctness at this depth — a sign of multi-provider ambitions.
- **DeepSeek TUI / CodeWhale** — The most opinionated product vision (ocean work surface, ambient visuals, delegate cards) combined with the most aggressive refactor: 18-crate Rust monolith (771k lines) being broken up. Community is engaged in governance and identity debates (Constitution translation #4949, marketing GIFs #4906). Positioning: deterministic, visually distinctive TUI with protocol-neutral worker backends.

## 5. Community Momentum & Maturity

- **Highest velocity: CodeWhale** — 10+ new issues in 24h, a 37-commit integration train (#4993), and user-driven refactor epics (#2870, #3306). The v0.9.3 monolith breakup will define its near-term trajectory.
- **Most PR throughput: OpenAI Codex and Qwen Code** — Codex merged sandbox/protocol/streaming PRs; Qwen landed 10 PRs spanning resource budgeting, telemetry, and security fixes, plus a nightly release.
- **Steadiest release cadence: GitHub Copilot CLI, OpenCode** — Both shipped user-visible releases (v1.0.77 with web OAuth; v1.18.10 with Modal discovery).
- **Largest community, quietest window: Claude Code** — 530-reaction and 148-comment issues remain unaddressed; zero notable PRs in 24h. Either a mature plateau or a maintainer-bottleneck signal.
- **Deliberate architectural evolution: Gemini CLI, Pi** — Smaller issue volumes, consistent high-quality PR work; both are quietly building platforms (security infrastructure, protocol clients).
- **Nascent: Kimi Code** — 3 issues, 1 PR. Feature-hungry rather than debugging-heavy; Memory System demand indicates the next growth lever.

## 6. Trend Signals

- **Agent orchestration needs an honest status protocol.** The #1 cross-tool complaint is silent failure, hangs, and false `success` reports from subagents. Expect "status: success" to become a trust metric — CodeWhale's deterministic benchmark harness (#4999) and Qwen's tool-execution telemetry (#8180) are early moves in this direction.
- **Windows reliability is now a competitive moat.** Codex (Sysmon BSODs, PowerShell churn) and Claude Code (GPU crashes) have the loudest Windows pain; Qwen and CodeWhale are actively fixing Windows-specific bugs. Enterprise adoption will hinge on this.
- **Context budget is the new disk space.** Every tool is dying by context exhaustion. Expect native compaction APIs (OpenAI Responses), token-aware tool selection (Gemini's AST epic), and explicit model input limits (OpenCode #39797) to become default features, not requests.
- **Session continuity is a product-level differentiator.** Users reject per-tool silos. Cross-device sessions, Claude.ai↔Claude Code import, persistent memory systems (Kimi #1283), and workspace-scoped state (Qwen, CodeWhale) are converging on "one persistent workspace brain."
- **Security focus is shifting from prompt injection to platform ingress.** SSRF via DNS rebinding, credential-sanitizer parsing bugs, MCP schema confusion, and OAuth token lifecycle issues are the new edges being hardened — a sign the ecosystem is past the "ship it if it works" phase.
- **Protocol standardization (MCP/ACP/wire) is the next battleground.** CodeWhale wants Copilot as an ACP worker, Pi ships runtime-neutral clients, Copilot CLI implements ACP session lifecycle, and Qwen isolates daemon ACP state per workspace. The tool that becomes the standard substrate captures the integration ecosystem.
- **Observability is becoming an agent feature, not an ops feature.** OTel GenAI spans, rate-limit rows in status lines, execution status in telemetry, and credits warnings in the CLI reflect demand for agents you can budget and audit, not just chat with. For developers evaluating tools: prioritize ones with explicit outcomes reporting, context-budget controls, and cross-platform (especially Windows) CI coverage.

---

*Data sources: official community digests for Claude Code, OpenAI Codex, Gemini CLI, GitHub Copilot CLI, Kimi Code CLI, OpenCode, Pi, Qwen Code, and DeepSeek TUI (CodeWhale) for 2026-07-31.*

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
**Data snapshot:** 2026-07-31 | Source: github.com/anthropics/skills

---

## 1. Top Skills Ranking

The five most-discussed PRs in the community, ranked by commentary volume:

### 🥇 #1298 — skill-creator: Fix `run_eval.py` 0% Recall Bug
**Status:** Open | [View PR](https://github.com/anthropics/skills/pull/1298)
- **Functionality:** Repairs the skill-creator evaluation pipeline (`run_eval.py`, `run_loop.py`, `improve_description.py`), which reported `recall=0%` for every skill description due to a broken evaluation artifact installation. Includes Windows stream-reading fixes, trigger-detection corrections, and parallel-worker fixes.
- **Discussion highlights:** This is the community's most-watched PR — it addresses the single most reported bug in the repo (Issue #556, 10+ independent reproductions). The description-optimization loop was effectively "optimizing against noise," making the entire skill-creator workflow untrustworthy.

### 🥈 #514 — document-typography Skill
**Status:** Open | [View PR](https://github.com/anthropics/skills/pull/514)
- **Functionality:** Typographic quality control for AI-generated documents: prevents orphan word wrap (1–6 words spilling to the next line), widow paragraphs (section headers stranded at page bottom), and numbering misalignment.
- **Discussion highlights:** Strong resonance because these defects affect *every* document Claude generates. Users rarely request typographic fixes explicitly, making this a high-leverage default-quality skill.

### 🥉 #538 — fix(pdf): Case-Sensitive File References
**Status:** Open | [View PR](https://github.com/anthropics/skills/pull/538)
- **Functionality:** Fixes 8 case-sensitivity mismatches in `skills/pdf/SKILL.md` (`REFERENCE.md` → `reference.md`, `FORMS.md` → `forms.md`), which broke the skill on case-sensitive filesystems.
- **Discussion highlights:** A small but critical reliability fix — the PDF skill is among the most-used document skills, and silent breakage on Linux/macOS was a persistent complaint.

### #486 — ODT Skill (OpenDocument Text)
**Status:** Open | [View PR](https://github.com/anthropics/skills/pull/486)
- **Functionality:** Create, fill, read, and convert OpenDocument Format files (.odt, .ods), including template filling and ODT-to-HTML conversion. Triggers on any mention of ODT, ODS, ODF, or LibreOffice.
- **Discussion highlights:** Addresses a clear gap — ISO-standard open document formats were missing from the collection. Cross-referenced with the existing DOCX/PDF skills as the natural third pillar of document support.

### #210 — frontend-design Skill Clarity & Actionability Overhaul
**Status:** Open | [View PR](https://github.com/anthropics/skills/pull/210)
- **Functionality:** Revises the frontend-design skill so every instruction is executable within a single conversation, with specific enough guidance to steer Claude's behavior without over-constraining.
- **Discussion highlights:** The community's core complaint was that the original skill read like human documentation rather than operational instructions — the same critique raised in Issue #202 about skill-creator. This PR is the reference case for the "skills must be instructions, not essays" principle.

### #83 — skill-quality-analyzer & skill-security-analyzer Meta-Skills
**Status:** Open | [View PR](https://github.com/anthropics/skills/pull/83)
- **Functionality:** Two meta-skills for the marketplace: a five-dimension quality analyzer (Structure & Documentation 20%, plus four more dimensions) and a security analyzer for Claude Skills.
- **Discussion highlights:** Directly responds to the community's growing concern about skill quality variance and security risks (foreshadowing Issue #492). High conceptual overlap with the later self-audit PR (#1367).

---

## 2. Community Demand Trends

Distilled from the most-commented Issues:

| Trend | Signal | Representative Issues |
|---|---|---|
| **Skill tooling reliability** | The #1 aggregate demand. `run_eval.py` returning 0% recall, Windows incompatibilities, and broken trigger detection dominate the issue tracker. The community wants a trustworthy skill-creator before anything else. | [#556](https://github.com/anthropics/skills/issues/556), [#1169](https://github.com/anthropics/skills/issues/1169), [#1061](https://github.com/anthropics/skills/issues/1061) |
| **Security / trust boundary** | Most emotionally charged topic (43 comments). Community skills distributed under the `anthropic/` namespace create a trust-boundary vulnerability — users may grant elevated permissions to skills they believe are official (resurfaced by the `claude-api` ~156k-token context exhaustion report). | [#492](https://github.com/anthropics/skills/issues/492), [#1175](https://github.com/anthropics/skills/issues/1175), [#1487](https://github.com/anthropics/skills/issues/1487) |
| **Org-wide skill sharing & lifecycle** | Skills are trapped in individual setups — no org sharing, no deduplication, skills silently disappearing. Demand for organizational distribution and lifecycle management. | [#228](https://github.com/anthropics/skills/issues/228), [#62](https://github.com/anthropics/skills/issues/62), [#189](https://github.com/anthropics/skills/issues/189) |
| **Quality-gate / self-audit skills** | A recurring proposal pattern: skills that audit other AI output (mechanical verification + reasoning checks) before delivery. | [#1385](https://github.com/anthropics/skills/issues/1385), [#412](https://github.com/anthropics/skills/issues/412) |
| **Integration surface expansion** | Skills as MCPs, AWS Bedrock compatibility — the community wants the skill format to work beyond the Claude Code CLI. | [#16](https://github.com/anthropics/skills/issues/16), [#29](https://github.com/anthropics/skills/issues/29) |

---

## 3. High-Potential Pending Skills

Active, unmerged PRs with meaningful discussion — likely candidates to land soon:

- **#723 — testing-patterns Skill** · [View PR](https://github.com/anthropics/skills/pull/723)
  Comprehensive testing-stack skill: Testing Trophy philosophy, AAA unit-test patterns, React component testing with Testing Library, and what *not* to test. Directly fills the most-requested engineering-domain gap.

- **#525 — pyxel Skill** · [View PR](https://github.com/anthropics/skills/pull/525)
  Retro/pixel-art/8-bit game development via the pyxel-mcp server. Covers the write → run_and_capture → inspect → iterate workflow. Long-lived PR (updated 2026-07-15) with sustained attention.

- **#1302 — color-expert Skill** · [View PR](https://github.com/anthropics/skills/pull/1302)
  Self-contained color-expertise skill: ISCC-NBS/Munsell/XKCD/RAL naming systems, a "what to use when" table for OKLCH/OKLAB/CAM16 color spaces. Broad applicability across design, data-viz, and frontend work.

- **#1367 — self-audit Skill** · [View PR](https://github.com/anthropics/skills/pull/1367)
  Mechanical file verification + four-dimension reasoning audit in damage-severity priority order. Universal across projects and models. The author has since proposed the full three-gate pipeline (Issue #1385).

- **#1479 — plan-file-hygiene Skill** · [View PR](https://github.com/anthropics/skills/pull/1479)
  Addresses planning-artifact accumulation — the lifecycle problem where planning files pile up with no cleanup mechanism. Actively discussed, with attributed community framing.

- **#486 — ODT Skill** · [View PR](https://github.com/anthropics/skills/pull/486)
  (Detailed in Section 1.) Completes the document-format trilogy alongside DOCX and PDF.

---

## 4. Skills Ecosystem Insight

**The community's most concentrated demand is for trustworthy skill infrastructure — a reliable, cross-platform skill-creator toolchain and a security/trust framework for distribution — before the flood of high-quality domain skills (document formats, testing, design, retro games) can be safely delivered and adopted at scale.**

The pattern is clear: the top PRs are dominated by fixes to the skill-*creator* evaluation loop (5 of the top 20 PRs target `run_eval.py` / Windows compatibility), and the top Issues are dominated by security and trust concerns. The domain-skill PRs with genuine value (typography, ODT, testing-patterns, pyxel, color) are all waiting behind that infrastructure bottleneck. The moment the tooling stabilizes, the repository has a healthy backlog of production-ready skills ready to merge.

---

# Claude Code Community Digest — 2026-07-31

**Data source:** github.com/anthropics/claude-code

## Today's Highlights

No new Claude Code releases shipped in the last 24 hours, but community discussion remained active around long-standing workflow continuity gaps and platform reliability issues. The most visible thread continues to be multi-account switching ([#36151](https://github.com/anthropics/claude-code/issues/36151)) with 148 comments and 530 reactions, while core hook execution issues ([#6305](https://github.com/anthropics/claude-code/issues/6305)) and a Windows desktop GPU crash ([#80444](https://github.com/anthropics/claude-code/issues/80444)) keep surfacing as high-impact bugs. Fresh reports also call out model-table mismatches and silent grep failures in recent CLI versions.

## Releases

No new releases were published in the last 24 hours.

## Hot Issues

- [#36151 Multi-account switching in Claude Mobile app without shared email](https://github.com/anthropics/claude-code/issues/36151) — 148 comments / 530 👍  
  By far the most-reacted open issue. Users are asking for independent account switching on mobile, despite the `invalid` label; it remains open and heavily discussed.

- [#6305 Post/PreToolUse Hooks Not Executing in Claude Code](https://github.com/anthropics/claude-code/issues/6305) — 38 comments / 16 👍  
  A long-standing macOS-specific bug where `PreToolUse` and `PostToolUse` hooks silently fail to run. This continues to be a serious reliability concern for teams automating guardrails.

- [#13843 Share conversation context from Claude.ai to Claude Code](https://github.com/anthropics/claude-code/issues/13843) — 26 comments / 103 👍  
  Strong demand for carrying planning context from Claude.ai into Claude Code sessions, pointing to a broader desire for seamless cross-product continuity.

- [#80444 Windows desktop app 1.24012.1: fatal GPU-process crash](https://github.com/anthropics/claude-code/issues/80444) — 10 comments / 1 👍  
  Opening the in-app Browser tab triggers a GPU crash that leaves the MSIX package unlaunchable until repair. High severity for Windows desktop users.

- [#64624 Real-time steering — send message mid-generation without queueing](https://github.com/anthropics/claude-code/issues/64624) — 9 comments / 17 👍  
  Users want to nudge an in-progress generation without killing it via Escape. The docs promise "interrupt and steer," but current behavior only queues input.

- [#79824 Artifact sharing fails: "This version can't be shared publicly"](https://github.com/anthropics/claude-code/issues/79824) — 8 comments / 15 👍  
  Persistent failure to publish artifacts with public links, even after republishing or creating new artifacts. Affects workflows built around shareable output.

- [#42050 Unified sessions, settings & projects across Desktop, Mobile and CLI](https://github.com/anthropics/claude-code/issues/42050) — 6 comments / 27 👍  
  A recurring request for one consistent session/settings/project model across all Claude Code surfaces.

- [#77846 Expose rate_limits.model_scoped in statusLine stdin](https://github.com/anthropics/claude-code/issues/77846) — 6 comments / 6 👍  
  Custom statusline authors want visibility into per-model weekly rate-limit windows, not just the existing five-hour and seven-day aggregates.

- [#63566 /claude-api bundled skill saturates context unconditionally](https://github.com/anthropics/claude-code/issues/63566) — 6 comments / 7 👍  
  The bundled `/claude-api` skill reportedly causes ~77% context spikes even from neutral questions, making it effectively unusable in some sessions.

- [#82562 Subagent with `tools: []` is listed as "(Tools: All tools)"](https://github.com/anthropics/claude-code/issues/82562) — 1 comment  
  A small but dangerous labeling bug: subagents configured with no tools advertise themselves as having all tools, which can mislead parent agents during orchestration.

## Key PR Progress

No significant pull request activity was observed in the last 24 hours. The only PR updated in the window, [#82555 Claude/youtube instagram mcp yn2u6s](https://github.com/anthropics/claude-code/pull/82555), was closed and appears to be an unrelated or spam submission. No notable code changes are ready for community review.

## Feature Request Trends

- **Cross-surface session continuity** — Users increasingly expect the same sessions, settings, and projects across mobile, desktop, CLI, and Claude.ai. Strong evidence: [#36151](https://github.com/anthropics/claude-code/issues/36151), [#42050](https://github.com/anthropics/claude-code/issues/42050), [#13843](https://github.com/anthropics/claude-code/issues/13843).

- **Context-window control and transparency** — Developers want finer control over context: real-time steering ([#64624](https://github.com/anthropics/claude-code/issues/64624)), configurable memory index limits ([#79217](https://github.com/anthropics/claude-code/issues/79217)), and programmatic continuation prompts ([#35150](https://github.com/anthropics/claude-code/issues/35150)).

- **Exposing more internal state** — Requests to surface model-scoped rate limits in status lines ([#77846](https://github.com/anthropics/claude-code/issues/77846)) and to programmatically set session titles via hooks/skills ([#72404](https://github.com/anthropics/claude-code/issues/72404)) show a desire for deeper scriptable observability.

- **Automation ergonomics** — Smaller but consistent asks for managed subagent model defaults ([#78217](https://github.com/anthropics/claude-code/issues/78217)) and named routine runs ([#82774](https://github.com/anthropics/claude-code/issues/82774)) reflect growing reliance on Claude Code as a background automation platform.

## Developer Pain Points

- **Hooks and skills are unreliable in real workflows** — Hooks not firing on macOS ([#6305](https://github.com/anthropics/claude-code/issues/6305)), skills re-invoked after already being loaded ([#73774](https://github.com/anthropics/claude-code/issues/73774)), and the `/claude-api` skill saturating context ([#63566](https://github.com/anthropics/claude-code/issues/63566)) are eroding trust in extensibility.

- **Context exhaustion remains a daily struggle** — Reports like [#80787 "Context window was full"](https://github.com/anthropics/claude-code/issues/80787) and [#82775 agent asserting states before running falsifying checks](https://github.com/anthropics/claude-code/issues/82775) illustrate the cost of context limits on long sessions.

- **Platform-specific breakages keep appearing** — Windows GPU crashes ([#80444](https://github.com/anthropics/claude-code/issues/80444)), IME input overlap ([#70955](https://github.com/anthropics/claude-code/issues/70955)), scheduler catch-up storms ([#74055](https://github.com/anthropics/claude-code/issues/74055)), and iOS sessions auto-archiving ([#71616](https://github.com/anthropics/claude-code/issues/71616)) show platform reliability is still uneven.

- **Misleading diagnostics waste developer time** — Stale "auto-update failed" messages that `claude doctor` cannot clear ([#82408](https://github.com/anthropics/claude-code/issues/82408)), reversed subagent tool labels ([#82562](https://github.com/anthropics/claude-code/issues/82562)), missing model entries in `/context` ([#82748](https://github.com/anthropics/claude-code/issues/82748)), and silent grep failures on NUL-containing text files ([#82773](https://github.com/anthropics/claude-code/issues/82773)) all contribute to confusing debugging sessions.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-07-31

## Today's Highlights
No new releases were published in the last 24 hours. Community attention remains concentrated on Windows reliability and session stability: top issues cover Sysmon-related BSODs, per-second PowerShell polling, OneDrive-backed workspace disconnects, and a widely upvoted VS Code Codex Diff crash. Meanwhile, the repo saw a batch of merged PRs focused on Windows sandbox compliance, app-server protocol exports, remote metadata deduplication, and streaming output performance.

## Releases
No new releases in the last 24 hours.

## Hot Issues

1. **Codex Diff crashes with “Oops, an error has occurred” in VS Code on macOS** — #35058 (100 👍, 39 comments)  
The Codex Diff tab is unusable even in a fresh workspace, blocking the review step of the Codex loop. This is the highest-signal issue today.  
https://github.com/openai/codex/issues/35058

2. **Windows Codex Desktop reinstalls Sysmon and leads to SysmonDrv.sys BSODs** — #31035 (22 comments)  
Users report forced Sysmon reinstallation and kernel crashes traced to `SysmonDrv.sys`. A severe system-stability problem for Windows users.  
https://github.com/openai/codex/issues/31035

3. **Windows Desktop spawns powershell.exe every second for process polling** — #25453 (21 comments, 5 👍)  
Constant short-lived PowerShell processes cause high CPU usage and make the Desktop app impractical on some Windows hosts.  
https://github.com/openai/codex/issues/25453

4. **OneDrive-backed workspace causes repeated stream disconnects** — #35420 (17 comments)  
When OneDrive is degraded, Work/Codex streams repeatedly fail with `stream disconnected before completion`, interrupting long-running tasks.  
https://github.com/openai/codex/issues/35420

5. **Windows sandbox: CreateProcessAsUserW failed: 1920 after upgrade** — #20570 (15 comments, 11 👍)  
Upgrading Codex broke sandboxed CLI execution on Windows, leaving users unable to run tool calls.  
https://github.com/openai/codex/issues/20570

6. **Background subprocesses/subagents do not wake the calling agent** — #15723 (13 comments, 7 👍)  
Parallel subtasks complete silently without notifying the parent agent, stalling multi-agent orchestrations.  
https://github.com/openai/codex/issues/15723

7. **Text-log attachment can trigger “Request blocked” and poison subsequent turns** — #32177 (12 comments, 12 👍)  
Attaching a plain-text log can put a session into a persistent blocked state, affecting later turns.  
https://github.com/openai/codex/issues/32177

8. **Regression: existing conversations fail with `Unknown parameter: input[...].namespace`** — #31754 (7 comments, 3 👍)  
`codex-cli 0.143.0` breaks resume of conversations that worked in 0.142.0, a serious CLI regression.  
https://github.com/openai/codex/issues/31754

9. **Pro account 5-hour usage bucket disappeared** — #32707 (8 comments, 3 👍)  
The 5-hour usage row vanished from the App and `account/rateLimits/read`, reducing rate-limit transparency for Pro users.  
https://github.com/openai/codex/issues/32707

10. **Cybersecurity content block hides legitimate developer output** — #34306 (7 comments, 5 👍)  
Users hit “This content can't be shown” safety blocks on ordinary security-related tasks with no clear override path.  
https://github.com/openai/codex/issues/34306

## Key PR Progress

1. **Run code mode exclusively through the standalone host** — #36217  
Moves the V8 implementation into a dedicated `codex-code-mode-runtime` crate and removes the embedded fallback from the main Codex process.  
https://github.com/openai/codex/pull/36217

2. **core: add tool-free thread mode** — #31922  
Adds an opt-in `tool_free` mode for lightweight helper threads, skipping MCP, skill, plugin, and tool enumeration.  
https://github.com/openai/codex/pull/31922

3. **exec-server: route remote network policy decisions** — #31458  
Routes executor-local policy misses to the process-scoped decider and fails closed on disconnect or missing deciders.  
https://github.com/openai/codex/pull/31458

4. **Enable parallel tool calls for Codex Apps** — #31591  
Adds a disabled-by-default `codex_apps_parallel_tool_calls` feature, scoped to the host-owned `codex_apps` MCP server.  
https://github.com/openai/codex/pull/31591

5. **Extract apps cache logic into ConnectorRuntimeManager** — #31471  
Refactors the Codex Apps tools cache into `ConnectorRuntimeManager` with immutable snapshots and clearer context scoping.  
https://github.com/openai/codex/pull/31471

6. **codex-mcp: serialize connector runtime refreshes** — #31472  
Adds a shared async lock to prevent duplicate Apps `tools/list` refreshes when multiple callers request a hard refresh.  
https://github.com/openai/codex/pull/31472

7. **Record normalized sandbox violation events** — #36207  
Unifies filesystem denials and managed-network blocks into a shared structured event shape.  
https://github.com/openai/codex/pull/36207

8. **Ignore symbolic slash-tmp permissions on Windows** — #36237  
Prevents the Unix `/tmp` entry from influencing Windows sandbox filesystem policy decisions.  
https://github.com/openai/codex/pull/36237

9. **Avoid shifting bytes in streaming output buffers** — #36194  
Fixes inefficient byte-shifting behavior when decoding streams with invalid UTF-8 or many framed messages.  
https://github.com/openai/codex/pull/36194

10. **Make thread history projection resilient to malformed rollouts** — #36188  
Prevents failed rollout appends from blocking later history projection by separating byte and ordinal checkpoints.  
https://github.com/openai/codex/pull/36188

## Feature Request Trends

- **Rate-limit visibility and fairness**: Users want reset times, balance, and plan type exposed as `status_line` tokens (#24080), are confused when usage buckets disappear (#32707), and argue the Plus tier needs more GPT-SOL 5.6 usage (#36213).
- **Cross-device/workspace continuity**: Requests for Codex workspace continuity across devices (#34804) and complaints about symlinked project paths creating duplicate threads (#31895) show demand for consistent project/session identity.
- **Smarter task handoffs**: Feature request #36251 asks for model and reasoning-level recommendations when ChatGPT hands work to Codex, reducing manual reconfiguration.
- **App/TUI UX polish**: Users want project sorting to work (#33077), a correct model selector (#35066), and better terminal behavior such as tmux mouse-wheel handling (#36158).

## Developer Pain Points

- **Windows remains the most fragile platform**: Sysmon BSODs (#31035), PowerShell polling churn (#25453), OneDrive disconnects (#35420), sandbox launch failures (#20570), AST parser memory leaks (#29317), and corrupted dependency bundles (#35803) all recur in the issue tracker.
- **Session/context corruption erodes trust**: The VS Code Codex Diff crash (#35058), text-log “Request blocked” poisoning (#32177), repeated compacting (#20983), and invalid-request errors on resume (#33011) disrupt long-running workflows.
- **Orchestration and state resets are unpredictable**: Subagents not waking callers (#15723), reasoning level silently resetting after delegations (#26930), and forked sessions writing full parent history (#35647) make multi-step work harder to reason about.
- **Rate-limit uncertainty is a top frustration**: In addition to angry reports like #35552, users cannot always see or trust their usage data (#32707) and feel Plus allocations are unfair for newer models (#36213).

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-07-31

## Today's Highlights
No new release shipped in the last 24 hours, but there are meaningful code and security developments. The most community-visible issues continue to center on subagent reliability — especially false `GOAL` success reports after `MAX_TURNS` and generalist agent hangs. On the PR side, security-focused fixes are landing, including async DNS resolution for SSRF protection and MCP OAuth token refresh corrections.

## Releases
No new Gemini CLI releases were published in the last 24 hours.

## Hot Issues

1. **[#22323 — Subagent recovery after MAX_TURNS is reported as GOAL success, hiding interruption](https://github.com/google-gemini/gemini-cli/issues/22323)**  
   P1 bug where `codebase_investigator` reports `status: "success"` even after hitting max turns. This is dangerous because failures are silently converted into apparent success. 12 comments, 2 👍.

2. **[#21409 — Generalist agent hangs](https://github.com/google-gemini/gemini-cli/issues/21409)**  
   A long-standing P1: deferring to the generalist agent hangs indefinitely, even for simple folder creation. Users have waited up to an hour before canceling. 8 comments, 8 👍 — high community impact.

3. **[#25166 — Shell command execution gets stuck with "Waiting input" after command completes](https://github.com/google-gemini/gemini-cli/issues/25166)**  
   Simple CLI commands hang while the UI still shows active/awaiting input even though the command already finished. P1, effort/medium, 4 comments, 3 👍.

4. **[#28555 — SSRF via DNS Resolution Bypass in web-fetch Tool (CVSS 8.6)](https://github.com/google-gemini/gemini-cli/issues/28555)**  
   New security issue: `web-fetch` only checks literal IPs, so hostnames resolving to internal addresses bypass validation. A fix PR already references this issue.

5. **[#26522 — Stop Auto Memory from retrying low-signal sessions indefinitely](https://github.com/google-gemini/gemini-cli/issues/26522)**  
   Auto Memory can surface the same low-signal session repeatedly because “skipped” sessions are never marked processed. Drives unnecessary extraction work and user confusion.

6. **[#23571 — Model frequently creates tmp scripts in random spots](https://github.com/google-gemini/gemini-cli/issues/23571)**  
   When shell execution is restricted, the model scatters temp edit scripts across directories, making workspace cleanup painful before commits. 3 comments.

7. **[#22093 — (Sub)agents running without permission since v0.33.0](https://github.com/google-gemini/gemini-cli/issues/22093)**  
   Users report subagents executing despite agents being disabled in all configs. A permission/regression concern that erodes trust in agent boundaries.

8. **[#21983 — Browser subagent fails in Wayland](https://github.com/google-gemini/gemini-cli/issues/21983)**  
   Browser subagent terminates with `GOAL` on Wayland despite failing. P1, likely related to sandbox/browser launch behavior under Wayland. 4 comments, 1 👍.

9. **[#24246 — Gemini CLI encounters 400 error with >128 tools](https://github.com/google-gemini/gemini-cli/issues/24246)**  
   Hitting the model’s tool-count limit produces a 400 error instead of smartly limiting tool scope. P2, maintainer-only, 3 comments.

10. **[#22267 — Browser Agent ignores settings.json overrides](https://github.com/google-gemini/gemini-cli/issues/22267)**  
   Browser Agent doesn't honor `maxTurns` or other `settings.json` overrides despite `AgentRegistry` merging them. P2 bug, 3 comments.

## Key PR Progress

1. **[#28586 — fix(core): preserve thoughtSignature in functionCall parts to fix 400 error](https://github.com/google-gemini/gemini-cli/pull/28586)**  
   Fixes a v0.53.0 regression causing 400 Bad Request during parallel tool calls by preserving `thoughtSignature`.

2. **[#28557 — fix: resolve SSRF vulnerability in web-fetch.ts by using async DNS resolution](https://github.com/google-gemini/gemini-cli/pull/28557)**  
   Directly addresses #28555: uses existing async private-IP checking to close the DNS rebinding-style bypass.

3. **[#28519 — fix(core): prevent infinite auth loop by awaiting credential save](https://github.com/google-gemini/gemini-cli/pull/28519)**  
   Fixes #28430 by awaiting `oauth_creds.json` writes and forcing consent — important for stability in headless/CI auth flows.

4. **[#28566 — fix(core,cli): propagate InvalidStreamError details to UI](https://github.com/google-gemini/gemini-cli/pull/28566)**  
   Surfaces specific empty-response errors in the CLI and enables actionable suggestions like using `/compress`.

5. **[#28581 — fix(cli): skip diff hunk markers during @ processing](https://github.com/google-gemini/gemini-cli/pull/28581)**  
   Prevents `@@ ... @@` hunk markers from being treated as `@file` references, removing recursive workspace-wide glob searches that cause heap growth on large diffs.

6. **[#28599 — fix(core): classify capacity exhaustion as terminal to prevent retry hangs](https://github.com/google-gemini/gemini-cli/pull/28599)**  
   Closed quickly after submission, but addresses a real client-side hang on `MODEL_CAPACITY_EXHAUSTED` by triggering fallback instead of infinite retry.

7. **[#28596 — feat(cli): add --list-all-sessions option](https://github.com/google-gemini/gemini-cli/pull/28596)**  
   New UX feature to list chat sessions across all registered workspaces, grouped by path — useful for multi-project workflows.

8. **[#28597 — fix(cli): load environment variables before resolving settings placeholders](https://github.com/google-gemini/gemini-cli/pull/28597)**  
   Fixes a load-order race where `.env` variables were not available when settings placeholders were expanded.

9. **[#28592 — fix(core): keep auto model visible without preview access](https://github.com/google-gemini/gemini-cli/pull/28592)**  
   Ensures the Auto model option remains usable in `/model` even when preview access is unavailable and Auto would resolve to stable models.

10. **[#28551 — fix(cli): fall back to embedded macOS seatbelt profiles if missing](https://github.com/google-gemini/gemini-cli/pull/28551)**  
   Fixes a critical sandbox-mode startup crash on macOS/gMac environments where static Seatbelt `.sb` profiles are not found.

## Feature Request Trends

- **Subagent lifecycle & visibility**: Users want better control over subagent execution, clearer recovery from max turns, subagent trajectories in `/chat share`, and subagent context included in `/bug` reports.
- **AST-aware tooling**: An ongoing epic (#22745, #22746) investigates AST-aware file reads/search/mapping to improve precision and reduce token noise.
- **Browser agent resilience**: Requests for automatic session takeover, lock recovery, honor `settings.json` overrides, and better platform support (especially Wayland).
- **Safety guardrails**: Community asks for discouraging destructive commands (`git reset`, `--force`) and better containment of temporary files.
- **Memory system hardening**: Auto Memory improvements — deterministic redaction, quarantine of invalid patches, avoiding repeated low-signal sessions.

## Developer Pain Points

- **False success reports**: Subagents hitting `MAX_TURNS` are reported as successful goal completion, hiding real interruptions.
- **Hangs and stuck states**: Generalist agent hangs, shell commands waiting for input after completion, and capacity-exhaustion retry hangs waste developer time.
- **Permission boundary violations**: Subagents executing even when disabled is a serious trust issue for users relying on explicit mode control.
- **Messy workspace behavior**: Models creating temp scripts in random locations and destructive git/DB commands force extra cleanup and risk.
- **Security/correctness regressions**: SSRF gaps, infinite auth loops, MCP OAuth credential deletion, and the 400 error with >128 tools indicate integration edges still need hardening.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-07-31

## Today’s Highlights

v1.0.77 ships a browser-based OAuth login flow (default on local terminals), plus a Ctrl+G fix for editing `ask_user` freeform answers and an autopilot sandbox-bypass improvement. On the issue tracker, the community is zeroing in on two themes: silent agent/sub-agent failures and session-state corruption (oversized attachments, blank transcripts, frozen subtasks). No pull requests were updated in the last 24 hours.

## Releases

### v1.0.77 (2026-07-30)
- Unconditional autopilot approval now disables sandbox for the current session when bypass is allowed.
- Ctrl+G opens your editor to edit `ask_user` freeform answers without closing the prompt.
- Browser-based (web) OAuth login flow is now the default for `copilot login` on local interactive terminals. Device-code flow remains the default on remote/headless terminals.
- New flags: `--web-flow` / `--device-code` to force a mode; `/login` command lets you choose interactively.

### v1.0.77-0 (pre-release)
- Introduced the browser-based OAuth login flow and related login-mode selection.

---

## Hot Issues

1. **[#3767 — Oversized attachment permanently wedges session (CAPI 5MB limit)**](https://github.com/github/copilot-cli/issues/3767)  
   A single attachment over the 5MB native limit fails the request and leaves the session permanently unrecoverable. 13 comments and a strong indication that the community wants graceful degradation, not a wedged session.

2. **[#4293 — Sub-agents with full tool access return empty with no error](https://github.com/github/copilot-cli/issues/4293)**  
   Sub-agents launched via the `task` tool silently produce no response when the agent type has full tool access, while restricted-tool agent types work. No log entry makes this especially hard to debug.

3. **[#4310 — Engine falls back to 128K token budget by default](https://github.com/github/copilot-cli/issues/4310)**  
   When a routed model has no capability limits, the CLI silently assumes a 128K-token budget and compacts context aggressively. This is painful for users with 1M-token models and custom/BYOK providers.

4. **[#4305 — Failed to convert JavaScript value 'Undefined' into rust type 'String'](https://github.com/github/copilot-cli/issues/4305)**  
   Regression appearing almost immediately after v1.0.76, affecting `/model auto` and general commands. Quickly closed, but it shows the impact of release-window regressions.

5. **[#4113 — ACP mode does not implement session/close](https://github.com/github/copilot-cli/issues/4113)**  
   ACP clients have no protocol-level way to release sessions because `session/close` is not implemented and the capability is not advertised. Important for tooling that embeds Copilot CLI as an agent.

6. **[#1381 — "Rewind is not available because you're not in a git repository"](https://github.com/github/copilot-cli/issues/1381)**  
   Users of jj and other VCS tools cannot use Rewind. 10 upvotes, and repeated requests for VCS-agnostic session history.

7. **[#4295 — AI Credits Near-Limit Warning](https://github.com/github/copilot-cli/issues/4295)**  
   Feature-parity request: Visual Studio warns users when AI credits are nearly exhausted; CLI users want the same visibility. 8 comments show real demand for proactive credit monitoring.

8. **[#4306 — Subtasks freeze and stop responding](https://github.com/github/copilot-cli/issues/4306)**  
   In autopilot flows with multiple agents (`/fleet`), subtasks can hang indefinitely. Indicates reliability gaps in the orchestration loop, especially with custom skills.

9. **[#4301 — MCP tool arguments with array-or-string union schema are stringified](https://github.com/github/copilot-cli/issues/4301)**  
   MCP tools using `anyOf: [array, string]` receive stringified arguments instead of proper structured values, breaking valid MCP server integration.

10. **[#4299 — Increasing typing latency over long sessions](https://github.com/github/copilot-cli/issues/4299)**  
    Long-running sessions with background agents become effectively unusable due to input latency. Important for users who keep sessions alive for hours.

---

## Key PR Progress

No pull requests were updated in the last 24 hours. There are no PR changes to highlight in this digest.

---

## Feature Request Trends

- **AI credits visibility**: Multiple issues request live credit usage and near-limit warnings in the CLI, matching IDE behavior.
- **Authentication flexibility**: Demand for bearer-token auth for BYO-K/corporate environments, plus the new web OAuth flow from v1.0.77.
- **Configurable sandbox and tool permissions**: Users want to selectively enable/disable tools and whitelist bundled tools from `settings.json`.
- **MCP ecosystem compatibility**: Better handling of complex JSON Schema types (e.g. `anyOf` unions) before forwarding arguments to MCP servers.
- **Session resilience**: Requests for rewind without git, recovery from oversized attachments, and proper ACP session lifecycle support.

---

## Developer Pain Points

- **Silent failures**: Sub-agents returning empty responses with no logs, and sessions continuing to consume credits after visible work finishes.
- **Session corruption**: Oversized attachments can permanently wedge a session; transcript rendering can blank until terminal resize or new input.
- **Long-session degradation**: Typing latency grows significantly in long-lived sessions, especially with background agents.
- **Release regressions**: Recent versions introduced crashes (`Undefined` Rust conversion), missing exit screens, and log-level launch crashes.
- **Terminal and integration friction**: iTerm2 Cmd+V paste issues, MobaXterm scroll problems, `COLORTERM` injection on session resume, and MCP `anyOf` schema mishandling.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest – 2026-07-31

## Today's Highlights

No new releases shipped in the last 24 hours, but activity focused on stability and a recurring product gap. The long-running Memory System feature request (#1283) resurfaced with continued community discussion, while two new bug reports highlight serious usability issues: provider 429 overload errors and CLI freezes tied to browser tab state. On the code side, PR #2565 targets a subtle asyncio hook lifecycle bug that could silently drop fire-and-forget hook triggers.

## Hot Issues

*Only 3 issues were updated in the last 24 hours; all are listed below.*

### #1283 – [enhancement] Feature Request: Memory System - Persistent context across sessions  
- **Author:** CatKang · **Created:** 2026-02-27 · **Updated:** 2026-07-30  
- **Comments:** 7 · **Status:** Open  
- **URL:** https://github.com/MoonshotAI/kimi-cli/issues/1283  
- **Why it matters:** This is the clearest signal that users want Kimi Code CLI to remember project patterns, preferences, and context across sessions. The request covers both automatic AI-managed notes and manual user-defined instructions, making it a broad and high-impact product direction. The existing 7 comments indicate continued community interest.

### #2571 – [bug] LLM Overloaded! Can't use Kimi at all  
- **Author:** andrew-sz · **Created:** 2026-07-30 · **Updated:** 2026-07-30  
- **Comments:** 1 · **Status:** Open  
- **URL:** https://github.com/MoonshotAI/kimi-cli/issues/2571  
- **Why it matters:** Users are being blocked by HTTP 429 rate-limit errors on Kimi K3 via the Moderato platform. This is a critical availability issue because it prevents any CLI usage at all. The single comment suggests the reporter is actively engaging with maintainers.

### #2570 – [bug] CLI intermittently freezes with spinning moon; correlated with browser tab state  
- **Author:** XbackMK · **Created:** 2026-07-30 · **Updated:** 2026-07-30  
- **Comments:** 0 · **Status:** Open  
- **URL:** https://github.com/MoonshotAI/kimi-cli/issues/2570  
- **Why it matters:** The CLI becomes unresponsive with the "spinning moon" indicator, and the issue appears correlated with browser tab state. This is a puzzling but potentially serious UI/runtime bug on Windows 11, and the zero comments suggest it is still very fresh.

## Key PR Progress

*Only 1 PR was updated in the last 24 hours.*

### #2565 – fix(hooks): keep a strong reference to fire-and-forget hook triggers  
- **Author:** LHMQ878 · **Created:** 2026-07-28 · **Updated:** 2026-07-30  
- **Status:** Open  
- **URL:** https://github.com/MoonshotAI/kimi-cli/pull/2565  
- **What it does:** Fixes #2564 by addressing an asyncio lifetime issue. Since `asyncio` stores running tasks in a `WeakSet`, a `_hook_task` created with `asyncio.create_task()` can be garbage-collected once it goes out of scope. This PR ensures a strong reference is kept so fire-and-forget hook triggers are not silently lost.

## Feature Request Trends

The only explicit feature request in the current 24-hour window is the **Memory System** (#1283). The demand centers on persistent context across sessions, combining:

- **Automatic memory:** AI-managed notes and learned project patterns.
- **Manual memory:** User-defined instructions that persist across sessions.

This points toward a broader interest in making Kimi Code CLI a more context-aware assistant rather than a stateless per-session tool.

## Developer Pain Points

From the issues and PRs observed:

- **Rate limiting/provider overload:** HTTP 429 errors can make the CLI completely unusable (#2571).
- **Intermittent UI freezes:** The "spinning moon" hang state, especially when correlated with browser tab state, disrupts workflows (#2570).
- **Lack of persistent context:** Users must repeatedly re-establish project context because there is no memory system (#1283).
- **Hook task lifecycle bugs:** Fire-and-forget hooks can silently fail due to asyncio garbage collection, motivating the fix in #2565.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-07-31

## Today’s Highlights

OpenCode shipped **v1.18.10**, adding automatic Modal model discovery and a round of desktop UI polish. PR activity is concentrated on provider/model-layer correctness — native Gemini thinking levels, xAI option mapping, and a Codex refactor — while the community is still pushing on reliability issues like the TUI “exiting loop” error and provider compatibility edge cases.

## Releases

### [v1.18.10](https://github.com/anomalyco/opencode/releases/tag/v1.18.10)

**Core**
- Automatically discover available Modal models. (@devennavani)

**Desktop**
- Prevent adding the same attachment more than once.
- Always show the new session button.
- Improved toast notifications: better stacking, dismissal, and mobile layout.
- Refined tab hover and active states.

## Hot Issues

1. [**message="exiting loop" (#38801)**](https://github.com/anomalyco/opencode/issues/38801) — Open, 17 comments. A long-running TUI reliability complaint that still draws significant discussion; users report being stuck in an opaque loop in long sessions.

2. [**`/compact` should be configurable to use OpenAI Responses API 'compaction' (#5200)**](https://github.com/anomalyco/opencode/issues/5200) — Open, 11 comments, 28 👍. A highly upvoted feature request to let `/compact` use OpenAI’s native compaction endpoint instead of a generic implementation.

3. [**Edit tool frequently gets `[Tool execution was interrupted]` after v1.15.x (#28011)**](https://github.com/anomalyco/opencode/issues/28011) — Closed, 6 comments. Regression report where consecutive edits to the same file fail after the v1.15.x update; it breaks a core multi-edit workflow.

4. [**Global MCP servers don’t load when a project `.opencode/` exists (#30038)**](https://github.com/anomalyco/opencode/issues/30038) — Closed, 4 comments. Project-level config silently overrides/drops globally defined MCP servers, causing confusing setup behavior.

5. [**Support Linux PRIMARY selection / middle-click paste (#29963)**](https://github.com/anomalyco/opencode/issues/29963) — Closed, 4 comments, 4 👍. Users want the TUI to copy to the Linux PRIMARY selection buffer, not just CLIPBOARD.

6. [**Local Ollama subagents return tool calls as text (#21181)**](https://github.com/anomalyco/opencode/issues/21181) — Closed, 3 comments, 2 👍. Local Ollama subagents don’t execute tools in `task`/`delegate`, producing false success and no filesystem side effects.

7. [**WebUI cannot upload video files to models that support video (#21273)**](https://github.com/anomalyco/opencode/issues/21273) — Closed, 3 comments, 4 👍. `opencode serve` UI restricts attachments to images/PDFs/text even when the model supports video.

8. [**OTel spans lost because AppRuntime is not disposed before `process.exit()` (#30087)**](https://github.com/anomalyco/opencode/issues/30087) — Closed, 3 comments. `opencode run` never flushes OTel traces because the process exits before the batch span processor can send data.

9. [**Fast failure on network errors and concise error output (#39771)**](https://github.com/anomalyco/opencode/issues/39771) — Open, 3 comments. New request asking for short timeouts and fallback behavior when network operations stall, especially in environments where GitHub/HTTPS is flaky.

10. [**Historical chat sessions disappear after upgrading to v1.15.13 (#30054)**](https://github.com/anomalyco/opencode/issues/30054) — Closed, 2 comments, 5 👍. High-impact regression for `opencode web`: all previous sessions vanish from the UI after upgrade.

## Key PR Progress

1. [**fix(core): respect model input limits (#39797)**](https://github.com/anomalyco/opencode/pull/39797) — Open. Adds native and AI SDK input limits to model resolution, preserving catalog limits and compacting against the tighter explicit-input/context budget.

2. [**feat(ai): support Gemini thinking levels (#39796)**](https://github.com/anomalyco/opencode/pull/39796) — Open. Maps Google AI SDK `thinkingConfig` to native Gemini options, including `thinkingBudget`, `includeThoughts`, and `thinkingLevel`.

3. [**fix(opencode): spawn configured posix shell directly on Windows (#39795)**](https://github.com/anomalyco/opencode/pull/39795) — Open. Fixes custom POSIX shells on Windows, e.g. `C:/msys64/usr/bin/bash.exe`, by using the configured shell path directly. Closes #38799.

4. [**refactor(core): contain Codex in OpenAI plugin (#39734)**](https://github.com/anomalyco/opencode/pull/39734) — Closed. Moves ChatGPT/Codex routing and catalog behavior into the OpenAI plugin, removing Codex-specific logic from the generic model resolver.

5. [**fix(core): preserve custom Codex endpoints (#39257)**](https://github.com/anomalyco/opencode/pull/39257) — Closed. Keeps user-provided Codex endpoint and account-header behavior inside the OpenAI plugin so later config overrides still work.

6. [**fix(core): map xAI native options (#39787)**](https://github.com/anomalyco/opencode/pull/39787) — Closed. Validates xAI settings like reasoning effort, storage, prompt cache key, and includes; omits invalid or unsupported keys instead of forwarding them.

7. [**feat(tui): hot-reload local TUI plugins (#39776)**](https://github.com/anomalyco/opencode/pull/39776) — Open. Editing a local TUI plugin now takes effect live; plugin import/setup/render failures are contained and don’t crash the whole TUI.

8. [**feat(plugin): add session request hook (#39764)**](https://github.com/anomalyco/opencode/pull/39764) — Closed. Exposes `session.request` on Effect and Promise plugin boundaries, allowing plugins to mutate final LLM URLs, headers, and bodies after auth.

9. [**fix(session): stop retrying fixed-window usage quotas (#39791)**](https://github.com/anomalyco/opencode/pull/39791) — Open. Prevents futile 429 retry loops for long-window rate limits such as 5-hour, weekly, or monthly quotas.

10. [**feat(opencode): local LAN provider discovery + auto-discover models (#27554)**](https://github.com/anomalyco/opencode/pull/27554) — Open. Long-running feature adding local LAN discovery for OpenAI-compatible servers, combining mDNS/network scanning with automatic model listing.

## Feature Request Trends

- **Provider/model configurability** — Users want modality controls (vision/video), more detailed provider management, custom endpoint preservation, and local LAN provider discovery. (#30071, #21273, #29885, #27554)
- **Compaction and context management** — `/compact` via OpenAI Responses API remains a highly upvoted request; model input limit respect is a related engineering theme. (#5200, #39797)
- **Resilient agent execution** — Requests for fast network failure, subagent continuation after HTTP/connection errors, and smarter quota retry handling are recurring. (#39771, #30154, #39791)
- **Linux and desktop UX** — Linux PRIMARY selection, enhanced file management, session tab scope control, and keyboard shortcut fixes show steady demand for desktop/TUI polish. (#29963, #30074, #39783, #39786)

## Developer Pain Points

- **Agent loop instability** — “exiting loop”, dead loops of empty assistant messages, and laggy long sessions remain top frustrations. (#38801, #28507, #30101)
- **Tool execution regressions** — Edit interruptions after v1.15.x and slow `diffFull` calculations disrupt daily file-editing workflows. (#28011, #20734)
- **Config and state loss** — Global MCP config silently ignored when project config exists, and disappearing chat history after upgrades, erode trust in updates. (#30038, #30054)
- **Provider compatibility friction** — OpenAI-compatible endpoint errors, `ECONNRESET` with Z.AI, Ollama subagent tool misbehavior, and silent provider package install failures all point to fragile provider integration. (#29754, #29334, #15350, #21181, #30069)
- **Process/resource cleanup** — Orphaned MCP child processes and lost OTel traces recur in multiple reports, indicating lifecycle cleanup is still inconsistent. (#30123, #30073, #30087, #13438)

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-07-31

## Today's Highlights

No new releases were published in the last 24 hours. The main momentum is in protocol/plumbing work: new wire-protocol and runtime-neutral client packages (#7344, #7348) and shared runtime schemas (#7346) are moving forward, while the Markdown rendering API (#7231) landed to close the long-discussed issue #6747. Meanwhile, several issues continue to highlight model-catalog refresh stalls as a recurring reliability problem in the TUI.

## Releases

No new releases in the last 24 hours.

## Hot Issues

- [**#6747**](https://github.com/earendil-works/pi/issues/6747) — **API for enhancing agent message markdown** *(closed)*: The most-commented issue this cycle. Extension authors want to mutate rendered agent messages without changing what is sent to the LLM. The thread led to the merged Markdown API in PR #7231.
- [**#7194**](https://github.com/earendil-works/pi/issues/7194) — **Full re-render every 1s when a tool card scrolls outside viewport** *(closed)*: Remote-sandbox users are hit by frequent repaints of the entire session transcript. The 7-comment thread focuses on incremental rendering fixes.
- [**#7153**](https://github.com/earendil-works/pi/issues/7153) — **`/scoped-models` waits ~5 minutes on stalled catalog refresh** *(open)*: The command clears the editor and shows no loading/error UI while synchronously awaiting a refresh. Community reaction: the REPL needs async, non-blocking model selection.
- [**#7161**](https://github.com/earendil-works/pi/issues/7161) — **anthropic-messages never sends `x-client-request-id`** *(open)*: Gateways that key session affinity off that header cannot group Anthropic conversations, causing round-robin account breaks. This is a provider-compatibility gap.
- [**#7047**](https://github.com/earendil-works/pi/issues/7047) — **Gemini 3.x tool-call IDs stripped from function calls/responses** *(open)*: Multi-turn tool conversations break because `functionCall`/`functionResponse` IDs are dropped during history replay. Receiving significant attention from tool-heavy users.
- [**#7007**](https://github.com/earendil-works/pi/issues/7007) — **Concurrent inline `custom` prompts deadlock** *(closed)*: A second inline prompt silently detaches the first, and its Promise never settles. Important for extension authors building interactive workflows.
- [**#7248**](https://github.com/earendil-works/pi/issues/7248) — **Ctrl+V paste silently fails on Wayland** *(open)*: `readClipboardText()` is X11-only; text copied from Wayland apps pastes nothing. PR #7261 now addresses this.
- [**#6300**](https://github.com/earendil-works/pi/issues/6300) — **Windows: input line redrawn on every keystroke** *(open)*: Each character appears on a new line in both cmd.exe and Windows Terminal. A persistent platform-rendering issue.
- [**#7027**](https://github.com/earendil-works/pi/issues/7027) — **API-key login can hang after credential is saved** *(open)*: `/login openrouter` stays stuck if the model-catalog request stalls, even though the credential is already persisted. 4 👍 show broad impact.
- [**#7187**](https://github.com/earendil-works/pi/issues/7187) — **Silent crash from inconsistent error handling and schema validation** *(closed)*: A single third-party package manifest typo permanently kills chat/scheduled sessions. Raises demand for defensive package validation.

## Key PR Progress

- [**#7344**](https://github.com/earendil-works/pi/pull/7344) — **feat(protocol): add remote session wire protocol** *(closed)*: Introduces `@earendil-works/pi-protocol` with validated remote-session commands, events, snapshots, and bounded CBOR framing.
- [**#7346**](https://github.com/earendil-works/pi/pull/7346) — **feat(ai): share runtime schemas with protocol** *(closed)*: Moves TypeBox schemas into `pi-ai` and aligns protocol tool-call/stop-reason values, reducing drift between runtime and wire format.
- [**#7348**](https://github.com/earendil-works/pi/pull/7348) — **feat(client): add runtime-neutral session client** *(open)*: New `@earendil-works/pi-client` package with typed requests, multi-session handles, and detachable connections.
- [**#7163**](https://github.com/earendil-works/pi/pull/7163) — **feat: search index sqlite** *(open)*: Adds `SessionRepo.search()` with contentless FTS5 virtual tables for SQLite; JSONL/memory fall back to in-memory scanning for now.
- [**#6216**](https://github.com/earendil-works/pi/pull/6216) — **feat: Add Amazon Bedrock Mantle OpenAI Responses provider** *(open)*: Adds a Bedrock Mantle provider built on OpenAI's Bedrock integration, superseding an earlier attempt.
- [**#7339**](https://github.com/earendil-works/pi/pull/7339) — **DRAFT: add openai background mode responses** *(open)*: Implements OpenAI's `background: true` mode, though the author is still seeking design feedback.
- [**#7011**](https://github.com/earendil-works/pi/pull/7011) — **fix(coding-agent): share host modules with native esm extensions** *(closed)*: Prevents ESM extensions from resolving private copies of Pi packages, fixing module-state divergence between host and extensions.
- [**#7231**](https://github.com/earendil-works/pi/pull/7231) — **Markdown api** *(closed)*: Implements the extension API requested in #6747 for mutating agent message markdown.
- [**#7261**](https://github.com/earendil-works/pi/pull/7261) — **fix(coding-agent): read clipboard via wl-paste on Wayland, xclip/xsel on X11** *(closed)*: Fixes the Wayland paste issue by mirroring the copy path with platform clipboard CLIs.
- [**#6987**](https://github.com/earendil-works/pi/pull/6987) — **fix(tui): align grapheme widths with terminal cells** *(closed)*: Improves cell-width estimation, addressing rendering misalignment in the TUI.

## Feature Request Trends

- **Richer extension/plugin APIs**: The community wants more extension control over UI and agent lifecycle — message markdown mutation (#6747), stateful ACP agent backends (#7320), and themeable editor cursors (#7141).
- **Provider flexibility and standards alignment**: Requests include configurable Anthropic OAuth-token handling (#5871), OpenAI Responses stateful continuation (#7317), `x-client-request-id` support (#7161), and new providers like Amazon Bedrock Mantle (#6216).
- **Reliability of model catalog refreshes**: Several issues ask for non-blocking catalog refresh with proper loading/error states and recovery (#7153, #7027, #7301, #7323).
- **Diagnostics and documentation**: New users want an installation section in the README (#6907), and maintainers want `version` to include runtime info like bun/node/deno (#7244) to improve issue triage.

## Developer Pain Points

- **Stalled model catalog refresh breaks the TUI**: `/scoped-models`, `/login`, and `pi update --models` all hang when a catalog request stalls; the runtime can become permanently unrecoverable (#7153, #7027, #7301, #7323).
- **Provider protocol gaps cause confusing failures**: Missing `x-client-request-id`, stripped Gemini tool-call IDs, and dropped Anthropic stream blocks are difficult to diagnose in production (#7161, #7047, #7283).
- **Terminal/platform rendering inconsistencies persist**: Windows input redraw, Wayland clipboard failure, iTerm2 instability, and Devanagari text breakage continue to impact users on non-Linux/macOS environments (#6300, #7248, #6784, #6124).
- **Performance degrades on long sessions**: Full transcript re-renders and slower streaming as context grows are recurring complaints (#7194, #7332).
- **Fragile module/extension isolation**: Deadlocked inline prompts, duplicated Pi module instances in ESM extensions, and one bad package manifest crashing all sessions point to a need for stronger isolation and validation (#7007, #7011, #7187).

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

## Today’s Highlights

A new nightly release (`v0.21.1-nightly.20260731.702932cc7`) shipped with CI shell and Web Shell fixes. The project is converging on daemon resource isolation and budgeting, with several PRs landing around workspace-scoped memory, channel state, and capacity foundations. Community attention remains focused on Anthropic converter correctness, provider credential sanitization, and repeated E2E CI failures on `main`.

## Releases

- **[v0.21.1-nightly.20260731.702932cc7](https://github.com/QwenLM/qwen-code/releases/tag/v0.21.1-nightly.20260731.702932cc7)**  
  Two changes are listed:
  - `fix(ci)`: add default bash shell to container jobs in qwen-triage ([#7838](https://github.com/QwenLM/qwen-code/pull/7838))
  - `fix(web-shell)`: pre… (description truncated in source)

No stable release was published in the last 24 hours.

## Hot Issues

1. **[#8124 – Startup banner sometimes missing top lines on first paint](https://github.com/QwenLM/qwen-code/issues/8124)** — 9 comments. Intermittent TUI rendering issue on Windows/first paint that correlates with pending provider updates; affects first-session UX and is tagged `welcome-pr`.

2. **[#7966 – 如何获取会话中创建了哪些文件？](https://github.com/QwenLM/qwen-code/issues/7966)** — 6 comments. Developers want clear session-to-file attribution: direct writes vs. files generated indirectly by executed code is currently indistinguishable.

3. **[#8136 – Provider warning sanitizer truncates messages with a port and leaks passwords containing `@`](https://github.com/QwenLM/qwen-code/issues/8136)** — 4 comments. Security-relevant bug in `/status` payload sanitization; the fix in [#8137](https://github.com/QwenLM/qwen-code/pull/8137) is already under review.

4. **[#8162 – Anthropic converter: stale thinking signatures not pruned on historical turns](https://github.com/QwenLM/qwen-code/issues/8162)** — 4 comments. History compaction can leave orphaned `thinking` blocks after sibling `tool_use` blocks are removed, producing malformed Anthropic requests.

5. **[#8138 – Worktree settings.json writes to project root `.qwen` instead of worktree’s `.qwen`](https://github.com/QwenLM/qwen-code/issues/8138)** — 4 comments. Breaks per-worktree configuration isolation; settings changes leak into the global/project-root directory.

6. **[#8146 – Desktop app not working with LMStudio on Windows](https://github.com/QwenLM/qwen-code/issues/8146)** — 4 comments. UI shows activity but no request reaches the local LM Studio API; important Windows/local-model integration gap.

7. **[#8172 – Agent Team: teammate messages queue for the entire multi-tool-call turn](https://github.com/QwenLM/qwen-code/issues/8172)** — 3 comments. Messages are only delivered once `streamingState` returns to `Idle`, causing long delays in agent-to-agent collaboration.

8. **[#8182 – Daemon authorises each ACP child 50% of host memory](https://github.com/QwenLM/qwen-code/issues/8182)** — 2 comments. The memory ceiling is not divided by the number of `qwen --acp` children, creating a risk of daemon-wide memory overcommit.

9. **[#8177 – macOS + tmux IME cursor/input corruption](https://github.com/QwenLM/qwen-code/issues/8177)** — 2 comments. Chinese IME input causes cursor misalignment, residual cursors, and pinyin fragments mixed into committed text; affects non-Latin input.

10. **[#8102 – Deterministic tool-execution boundaries for a trustworthy agent runtime](https://github.com/QwenLM/qwen-code/issues/8102)** — 4 comments. Proposal to keep the LLM outside the trust boundary and deterministically constrain/authorize/observe tool execution; signals growing interest in agent safety.

## Key PR Progress

1. **[#8005 – feat(cli): adopt Goal v3 in interactive TUI](https://github.com/QwenLM/qwen-code/pull/8005)** — Adds canonical `/goal` lifecycle commands, persistent lifecycle cards, Goal-aware resume/branch recovery, and a two-lane input queue.

2. **[#8093 – feat(serve): Add daemon resource budgeting foundations](https://github.com/QwenLM/qwen-code/pull/8093)** — First step toward a daemon-level capacity model; directly relevant to the memory overcommit bug in [#8182](https://github.com/QwenLM/qwen-code/issues/8182).

3. **[#8056 – fix(serve): isolate managed memory by selected workspace](https://github.com/QwenLM/qwen-code/pull/8056)** — Workspace-qualified asynchronous `remember`/`forget`/`dream` operations plus an opt-in exact-workspace storage mode.

4. **[#8178 – feat(channels): isolate daemon adapter state by workspace](https://github.com/QwenLM/qwen-code/pull/8178)** — Gives each daemon-managed channel instance a stable, sanitized, workspace-owned state directory to prevent namespace collisions.

5. **[#8137 – fix(cli): scope warning credential stripping to the URL authority](https://github.com/QwenLM/qwen-code/pull/8137)** — Fixes the sanitizer bugs reported in [#8136](https://github.com/QwenLM/qwen-code/issues/8136) by reusing URL-authority parsing instead of `indexOf` heuristics.

6. **[#8088 – fix(cli): prevent silent VP-mode crash](https://github.com/QwenLM/qwen-code/pull/8088)** — Adds an `uncaughtException` handler and better error visibility in alternate-screen mode; does not claim to fix the underlying crashes but removes silent failure.

7. **[#8156 – fix(test): scope auto-edit canUseTool assertion to write/edit tools](https://github.com/QwenLM/qwen-code/pull/8156)** — Stabilizes the flaky SDK E2E permission-control test tracked in [#8153](https://github.com/QwenLM/qwen-code/issues/8153).

8. **[#8059 – feat(hooks): add SessionDelete event](https://github.com/QwenLM/qwen-code/pull/8059)** — New hook event emitted after explicit deletion of a historical session, with `deleted_session_id` passed to hooks and invoked by `/delete` and ACP.

9. **[#8150 – feat(core): add GenAI time-to-first-chunk tracing](https://github.com/QwenLM/qwen-code/pull/8150)** — Adds OpenTelemetry GenAI v1.41 streaming attributes and records `gen_ai.response.time_to_first_chunk` for streaming LLM spans.

10. **[#8180 – feat(telemetry): Track tool execution outcomes](https://github.com/QwenLM/qwen-code/pull/8180)** — Introduces `executionStatus` alongside terminal `status`, so telemetry can distinguish whether `invocation.execute()` was entered and succeeded.

## Feature Request Trends

- **Agent orchestration observability**: Multiple requests want more control and visibility into subagents, Agent Team messaging, Goal v3 lifecycle, and memory-agent behavior — e.g. [#8128](https://github.com/QwenLM/qwen-code/issues/8128), [#8172](https://github.com/QwenLM/qwen-code/issues/8172), [#8168](https://github.com/QwenLM/qwen-code/issues/8168).
- **Daemon resource budgeting and workspace isolation**: PRs like [#8093](https://github.com/QwenLM/qwen-code/pull/8093), [#8056](https://github.com/QwenLM/qwen-code/pull/8056), and [#8178](https://github.com/QwenLM/qwen-code/pull/8178) point toward treating `qwen serve` as a production-grade multi-tenant runtime.
- **Desktop/Web Shell convergence**: [#8092](https://github.com/QwenLM/qwen-code/issues/8092) proposes replacing the separate desktop UI with the existing Web Shell to reduce maintenance burden.
- **Security hardening at provider boundaries**: Requests and fixes around sanitization, deterministic tool execution, and ID charset validation — e.g. [#8136](https://github.com/QwenLM/qwen-code/issues/8136), [#8102](https://github.com/QwenLM/qwen-code/issues/8102), [#8160](https://github.com/QwenLM/qwen-code/issues/8160).

## Developer Pain Points

- **CI E2E flakiness on `main`**: Multiple auto-filed CI failures — [#8133](https://github.com/QwenLM/qwen-code/issues/8133), [#8153](https://github.com/QwenLM/qwen-code/issues/8153), [#8173](https://github.com/QwenLM/qwen-code/issues/8173) — continue to require autofix PRs and test-scoping changes, adding merge friction.
- **Anthropic converter correctness**: Four related bugs from the same reporter ([#8159](https://github.com/QwenLM/qwen-code/issues/8159), [#8160](https://github.com/QwenLM/qwen-code/issues/8160), [#8161](https://github.com/QwenLM/qwen-code/issues/8161), [#8162](https://github.com/QwenLM/qwen-code/issues/8162)) show that history compaction and tool-call reconstruction are fragile.
- **Platform-specific terminal/desktop reliability**: Windows startup banner rendering, LM Studio integration, macOS/tmux IME corruption, statusline selection, and the Windows standalone installer remain recurring trouble spots.
- **Session/file attribution**: Developers still cannot reliably determine which files a session created or modified; related transcript pollution issues also resurface, e.g. [#7966](https://github.com/QwenLM/qwen-code/issues/7966) and the closed [#7940](https://github.com/QwenLM/qwen-code/issues/7940).

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI (CodeWhale) Community Digest — 2026-07-31

## Today's Highlights
The project's public identity shifted decisively to **CodeWhale** with the v0.9.2 release, which formally deprecates the legacy `deepseek-tui` npm package. Maintainers landed a 37-commit "local integration train" PR (#4993) consolidating v0.9.3 correctness work, while a new wave of refactor epics targets the 18-crate Rust monolith (771k lines, ~87% inside `codewhale-tui`). The community opened 10+ issues in the last 24 hours spanning headless OAuth, ACP protocol clients, a desktop app proposal, and a deterministic benchmark harness.

## Releases
- **v0.9.2** — Codewhale is now the public product from Shannon Labs. The `codewhale` command, npm package, and release-asset names remain lowercase technical identifiers. The legacy `deepseek-tui` npm package is **deprecated and receives no further releases**; users coming from v0.8.x legacy `deepseek`/`d…` are pointed to the migration path. ([Release](https://github.com/Hmbown/CodeWhale/releases/tag/v0.9.2))

## Hot Issues
1. **[#2870 — EPIC: staged command-boundary refactor](https://github.com/Hmbown/CodeWhale/issues/2870)** *(19 comments)* — Tracks smaller mergeable layers for the command-boundary refactor originally discussed in #2791, with #2851 as reference PR. The highest-activity issue this cycle.
2. **[#2369 — Config paths fragmented across OS/Cygwin + silent migration bug](https://github.com/Hmbown/CodeWhale/issues/2369)** *(7 comments)* — Windows/Cygwin home-directory rules resolve config/secret paths differently, and a legacy migration can silently mis-handle state. High reliability concern for cross-platform users.
3. **[#4022 — Define CLI/TUI parity for subagent and runtime control surfaces](https://github.com/Hmbown/CodeWhale/issues/4022)** *(7 comments)* — The TUI sidebar is the primary interactive surface for subagent status and cancellation, but these controls "must not be trapped inside the TUI" if future cloud/remote workflows are to work.
4. **[#3306 — v0.9.3 Refactor: converge runtime ownership, delete duplication, ship one executable](https://github.com/Hmbown/CodeWhale/issues/3306)** *(4 comments)* — The umbrella for the monolith breakup: 18 Rust packages, ~771k Rust lines, ~87% in `codewhale-tui`, with parallel runtime/tool/config/session paths that should be shared.
5. **[#4949 — Chinese translation of "Constitution" — "宪法", "协作准则", or something else?](https://github.com/Hmbown/CodeWhale/issues/4949)** *(4 comments)* — A bilingual community discussion after PR #4908 reverted the translation to "宪法". Contributors weigh fidelity vs. political sensitivity in the Chinese context; an open call for native-speaker input.
6. **[#4906 — Show, don't tell: record a real Codewhale session for the site and a README GIF](https://github.com/Hmbown/CodeWhale/issues/4906)** *(3 comments)* — The product is "fundamentally visual, motion-heavy" (Work surface, phase rail, delegate cards, ambient ocean) but every marketing surface is prose-only.
7. **[#4807 — Ambient jellyfish reads as a blob-on-a-string](https://github.com/Hmbown/CodeWhale/issues/4807)** *(2 comments)* — Dogfood report with ASCII evidence: `JELLY_BELL = "o*"` plus one width-1 tentacle doesn't read as a jellyfish. A rare, delightful TUI graphics bug with real UX impact.
8. **[#3950 — Split the agent tool runtime from schema, routing, and worktree plumbing](https://github.com/Hmbown/CodeWhale/issues/3950)** *(2 comments)* — `crates/tui/src/tools/subagent/mod.rs` is 6,970 lines with a 5,511-line test file and 122 commits since January — a poster child for the monolith problem.
9. **[#5000 — Preserve visible partial assistant text in authoritative context after interrupt](https://github.com/Hmbown/CodeWhale/issues/5000)** *(new)* — Interrupted streaming text stays visible in TUI history but is missing from the Engine session and the next model request. A correctness gap on a core interaction path.
10. **[#4991 — Discussion: compilation times and the TUI crate monolith — are others feeling this?](https://github.com/Hmbown/CodeWhale/issues/4991)** *(new)* — Opened by aboimpinto while waiting through rebuilds for the slash-command refactor. Expect this to be a rallying point for the v0.9.3 restructuring work.

## Key PR Progress
1. **[#4993 — v0.9.3 local integration train: protocol truth, doctor/paths, PDF-chain deletion, ocean rendering, measurement ratchets](https://github.com/Hmbown/CodeWhale/pull/4993)** — 37 commits of correctness/deletion/measurement work built in isolated lanes on `main` @ `df3bfc7`, each slice independently reviewed. The main integration surface for v0.9.3 right now.
2. **[#4982 — release: finalize Codewhale v0.9.2](https://github.com/Hmbown/CodeWhale/pull/4982)** *(merged)* — Closed out paused v0.9.2 handoff fixes: permission truth, Fleet setup/persistence, reasoning inspection, compaction errors, sub-agent supervision/steering, sandbox truth, provider credential UX, and ambient silhouettes.
3. **[#4992 — Layer 5.2: User command dispatch precedence, shadowing, and error semantics](https://github.com/Hmbown/CodeWhale/pull/4992)** — Adds acceptance-level Gherkin coverage (AT-004…AT-007) for user commands shadowing built-ins, fallback, and invalid-command errors.
4. **[#4979 — fix(tui): detach foreground shell before steering](https://github.com/Hmbown/CodeWhale/pull/4979)** *(merged)* — Fixes #4930: a blocking foreground Bash wait now moves to `/jobs` before a same-turn steer is enqueued, while preserving busy-Enter queue behavior.
5. **[#4981 — feat(tui): LaTeX environments, text, and command support for math rendering](https://github.com/Hmbown/CodeWhale/pull/4981)** — Full environment-block support, common inline commands, accents, command-aware sub/superscripts, and case-insensitive environment matching.
6. **[#4990 — fix(devcontainer): support Windows development](https://github.com/Hmbown/CodeWhale/pull/4990)** — Switches to a dedicated dev image with Rust toolchain, rustfmt, pkg-config, and DBus headers; replaces the host HOME bind mount (which breaks Windows HOME expansion) with named volumes.
7. **[#4985 — feat(runtime-api): scope task listing by workspace](https://github.com/Hmbown/CodeWhale/pull/4985)** — Adds optional `workspace` filter to `GET /v1/tasks` and includes workspace paths in `TaskSummary` so GUI consumers can scope task lists correctly.
8. **[#4984 — fix runtime config persistence and workspace task scoping](https://github.com/Hmbown/CodeWhale/pull/4984)** *(merged)* — Rebases GUI-facing TUI runtime API work onto latest `main` and keeps the provider persistence fix aligned with current tests.
9. **[#4980 — docs(permissions): publish and lock authorization order](https://github.com/Hmbown/CodeWhale/pull/4980)** *(merged)* — New reference documenting how tool admission, hooks, registered requirements, typed permission rules, auto-review, repository law, approval, and sandbox enforcement compose, locked with engine-level contract tests.
10. **[#4977 — fix(tui): let AltGr-typed "/" reach the composer instead of opening help (#4723)](https://github.com/Hmbown/CodeWhale/pull/4977)** — On Windows, AltGr is reported as `Ctrl+Alt`; on Brazilian ABNT2, `/` is `AltGr+Q`, which was hijacked by the global `Ctrl-/` help chord. Fixes a frustrating input bug for non-US layouts.

## Feature Request Trends
- **v0.9.3 monolith breakup** — The dominant direction: thin `main.rs` CLI dispatcher ([#3948](https://github.com/Hmbown/CodeWhale/issues/3948)), split shared modal infra ([#3957](https://github.com/Hmbown/CodeWhale/issues/3957)), split agent tool runtime ([#3950](https://github.com/Hmbown/CodeWhale/issues/3950)), and convergence of runtime ownership ([#3306](https://github.com/Hmbown/CodeWhale/issues/3306)).
- **Protocol-neutral integration** — A bounded, provider-neutral ACP client ([#4996](https://github.com/Hmbown/CodeWhale/issues/4996)) and GitHub Copilot as a named external ACP worker backend — explicitly "never a `ProviderKind`" ([#4997](https://github.com/Hmbown/CodeWhale/issues/4997)).
- **Headless/remote control parity** — CLI/TUI parity for subagent and runtime controls ([#4022](https://github.com/Hmbown/CodeWhale/issues/4022)); generic PKCE headless OAuth with loopback + manual redirect fallback for SSH/container installs ([#4998](https://github.com/Hmbown/CodeWhale/issues/4998)).
- **Desktop product ambitions** — A first-class desktop app "closer to Codex Desktop" for users who don't want to manage terminals, working dirs, and background processes ([#4986](https://github.com/Hmbown/CodeWhale/issues/4986)).
- **Context/token efficiency** — Shorten tool descriptions and progressively disclose advanced schemas ([#4708](https://github.com/Hmbown/CodeWhale/issues/4708)); reduce the default tool surface and unify overlapping task state ([#4706](https://github.com/Hmbown/CodeWhale/issues/4706)); minimize tool results and sub-agent payloads ([#4705](https://github.com/Hmbown/CodeWhale/issues/4705)).
- **Determinism, provenance, fail-closed measurement** — Benchmark/evaluation harness must be deterministic and provenance-exact ([#4999](https://github.com/Hmbown/CodeWhale/issues/4999)); compaction survival contract ([#4394](https://github.com/Hmbown/CodeWhale/issues/4394)); one source of truth for per-model facts ([#4599](https://github.com/Hmbown/CodeWhale/issues/4599)); merge the two model-resolution chains ([#4851](https://github.com/Hmbown/CodeWhale/issues/4851)).

## Developer Pain Points
- **Compile times and monolith inertia** — 18-crate workspace with main.rs at 14,878 lines and `subagent/mod.rs` at 6,970 lines; discussion #4991 confirms the community feels the rebuild pain. The v0.9.3 epics are a direct response.
- **Config/credential inconsistency** — OS/Cygwin path divergence plus silent migration bugs ([#2369](https://github.com/Hmbown/CodeWhale/issues/2369)); provider keys "appear missing" from fresh terminals due to home-scoped store ambiguity ([#4987](https://github.com/Hmbown/CodeWhale/issues/4987)).
- **Lost state on interrupt/failure** — Partial assistant text vanishes from authoritative context on interrupt ([#5000](https://github.com/Hmbown/CodeWhale/issues/5000)); compaction failures lack a persisted trigger/failure receipt ([#4988](https://github.com/Hmbown/CodeWhale/issues/4988)).
- **Blocked interaction while a shell command runs** — Enter/messages during a foreground Bash command fail confusingly; #4930 was fixed by #4979, but the busy-Enter queue semantics remain a delicate area.
- **Windows and international input friction** — AltGr/ABNT2 `Ctrl-Alt-Q` opening the help overlay ([#4977](https://github.com/Hmbown/CodeWhale/pull/4977)); devcontainer host-HOME bind mounts breaking on Windows ([#4990](https://github.com/Hmbown/CodeWhale/pull/4990)); Cygwin home-directory divergence ([#2369](https://github.com/Hmbown/CodeWhale/issues/2369)).
- **Cross-cultural translation sensitivity** — The "Constitution" translation debate ([#4949](https://github.com/Hmbown/CodeWhale/issues/4949)) shows the community cares about inclusive, contextually appropriate terminology — and needs native speakers to settle it.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/boom7sss/agents-radar).*