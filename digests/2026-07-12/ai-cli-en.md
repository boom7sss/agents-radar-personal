# AI CLI Tools Community Digest 2026-07-12

> Generated: 2026-07-12 03:32 UTC | Tools covered: 9

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

# Cross-Tool Comparison Report: AI CLI Developer Tools — 2026-07-12

## 1. Ecosystem Overview

The AI CLI tool ecosystem is maturing rapidly, with seven major players now exhibiting distinct architectural philosophies and community dynamics. The landscape is characterized by a tension between feature velocity and platform stability: Claude Code and Codex dominate community engagement but carry significant bug debt, while Gemini CLI and Pi show disciplined security-focused release cycles. A notable pattern is the convergence around multi-agent orchestration (teams, swarms, subagents) across virtually all tools, yet each implementation suffers from reliability gaps—agent hangs, false success reports, and tool routing failures. Windows support and MCP (Model Context Protocol) integration remain the two most consistent cross-tool pain points, suggesting foundational platform challenges that no single vendor has fully solved.

---

## 2. Activity Comparison

| Tool | Hot Issues Today | Active PRs (24h) | Release Today | Community Signal |
|---|---|---|---|---|
| **Claude Code** | 10 (50+ issues updated total) | 5 | ❌ No release | Highest overall activity; dense bug reports |
| **Codex (OpenAI)** | 10 | 10 | ❌ No release | Strong PR throughput; SQLite fix closed |
| **Gemini CLI** | 10 | 10 (5 closed) | ❌ No release | Security patch batch dominated PRs |
| **Copilot CLI** | 10 | 1 | ❌ No release | MCP OAuth issues dominate; low PR velocity |
| **Kimi CLI** | 1 | 5 | ❌ No release | Low activity; contributor-driven fixes |
| **OpenCode** | 10 | 10 | ❌ No release | Active TUI/Windows fixes; GPT-5.6 support |
| **Pi** | 10 | 10 | ❌ No release | GPT-5.6 integration wave; extension API growth |
| **Qwen Code** | 10 | 10 | ❌ No release | Multi-workspace RFC driving discussion |
| **DeepSeek TUI** | 4 | 5 | ❌ No release | Anthropic compliance fixes; small but focused |

**Observation:** No tool published a release today, but **Codex**, **Gemini CLI**, **OpenCode**, and **Pi** showed the highest PR throughput. **Claude Code** leads in community engagement volume but with proportionally more bug reports than features.

---

## 3. Shared Feature Directions

**Multiple tools are converging on the same requirements:**

| Shared Need | Affected Tools | Specific Pain Points |
|---|---|---|
| **Multi-agent orchestration & session chaining** | Claude Code (#24798), Gemini CLI (#21409, #22323), OpenCode, Qwen Code (#6378) | Inter-session context passing, subagent hang detection, false success on turn limits, chaining complex workflows |
| **MCP/OAuth reliability** | Copilot CLI (#4089, #4096), Claude Code (#36800), Qwen Code (#6639) | OAuth "connected but empty" tools, HTTP transport reconnection, channel plugin duplicate instances |
| **Windows platform parity** | Claude Code (#74649, #55206), Codex (#22428), Gemini CLI (#28253), Copilot CLI (#4095) | Sandbox failures, missing Hyper-V services, file-locking conflicts, WSL interop breakage |
| **Model fallback transparency** | Claude Code (#76793), OpenCode, Pi (#6524) | Silent model downgrades without UI notification, reasoning summary artifacts in output |
| **Cost & usage visibility** | Claude Code (#74709), Codex (#31606, #32486), OpenCode (#27037) | Threshold notifications, rate-limit reset fraud, compaction transparency |
| **Context window / token waste management** | Gemini CLI (#28362), OpenCode (#23628), DeepSeek TUI (#4329), Pi (#6206) | Token drain loops, compression-loss indicators, malformed tool input settling |

**Emerging pattern:** MCP is becoming a universal integration standard, but OAuth token bridging and HTTP transport reliability are systemic weaknesses across all implementations. The community is demanding **observability into agent decision-making**—subagent trajectories, scope expansion warnings, and cancellation preservation.

---

## 4. Differentiation Analysis

| Tool | Distinctive Focus | Target User | Technical Approach |
|---|---|---|---|
| **Claude Code** | Multi-agent teams (Cowork, Agent Teams); plugin ecosystem | Power users building complex multi-module projects | Tmux-backed orchestrator; channel-based MCP plugins; desktop-first |
| **Codex (OpenAI)** | Cost optimization & performance; sandbox enforcement | Enterprise teams with budget constraints | SQLite-backed logging; GPU-accelerated sandbox; rate-limit management |
| **Gemini CLI** | Security hardening; subagent architecture | Security-conscious developers; Google ecosystem users | DNS rebinding fixes; env var redaction; symlink traversal prevention |
| **Copilot CLI** | MCP integration depth; voice mode; skill system | GitHub ecosystem users; enterprise Copilot subscribers | OAuth-first MCP bridge; BYOK model support; JSON-based skills |
| **OpenCode** | TUI polish; provider flexibility; Windows support | Cross-platform power users; terminal-native workflows | PowerShell clipboard fix; provider model derivation; subagent picker states |
| **Pi** | Model ecosystem expansion; extension API; GPT-5.6 first-mover | Early adopters; extension developers | Provider catalog updates; deferred reload; constrained sampling (experimental) |
| **Qwen Code** | Multi-workspace daemon; Web Shell; JetBrains integration | Chinese developer ecosystem; IDE-native workflows | `qwen serve` daemon model; ACP protocol; DashScope API |
| **Kimi CLI** | Stability; parity with major tools; gradual feature development | Cost-conscious users; minimalists | Cautious PR acceptance; ACP server fixes; background task observability |
| **DeepSeek TUI** | TUI-centric; cross-platform builds; Anthropic protocol compliance | Terminal purists; Rust ecosystem; BSD/Android users | rquickjs bindings; i18n expansion; strict Anthropic tool schema validation |

**Key differentiators:**
- **Claude Code** is the most *ambitious* in multi-agent orchestration but pays the reliability cost.
- **Gemini CLI** is the most *security-conscious*—the only tool with systematic SSRF, symlink, and env var redaction patches this week.
- **Pi** is the fastest to *adopt new models* (GPT-5.6 integration across all providers within hours).
- **Qwen Code's** multi-workspace daemon RFC represents the most *architecturally forward* thinking.
- **Copilot CLI** has the deepest *enterprise integration* but the weakest *independent innovation velocity* (1 PR today).

---

## 5. Community Momentum & Maturity

| Tool | Momentum Signal | Maturity Signal |
|---|---|---|
| **Claude Code** | 🔥 Highest community engagement; 50+ issues updated/24h | ⚠️ Bug-prone (Windows, Cowork, TUI); long-standing issues unaddressed |
| **Codex** | 💪 Strong PR pipeline; major SQLite fix closed (432 👍) | ✅ Maturing; enterprise-grade cost optimization focus |
| **Gemini CLI** | 🛡️ Disciplined security patches; eval framework growth | ✅ Mature governance; supply-chain hardening; P1 tracking |
| **Copilot CLI** | 🐢 Low PR velocity; MCP OAuth issues stall | ⚠️ Stale innovation; surface-level engagement |
| **OpenCode** | ⚙️ Steady TUI/platform improvements; GPT-5.6 support | ✅ Healthy balance of fixes and features |
| **Pi** | 🚀 High-speed model integration; extension API exciting | ✅ Growing ecosystem; experimental features balanced with fixes |
| **Qwen Code** | 📊 RFC-driven design; multi-workspace vision | ✅ Structured feature development; community-responsive |
| **Kimi CLI** | 📉 Lowest activity; single issue today | ⚠️ Nascent; struggling to match feature parity |
| **DeepSeek TUI** | 🔧 Small but focused; niche platform support | ✅ Reliable for its scope; protocol compliance improvements |

**Verdict:** **Claude Code** and **Codex** are the most *established* but show signs of *technical debt accumulation*. **Pi** and **Gemini CLI** demonstrate the strongest *velocity-to-maturity ratio*. **Copilot CLI** risks *becoming a laggard* unless MCP reliability improves. **Kimi CLI** remains a *niche player* with limited community mass.

---

## 6. Trend Signals for Technical Decision-Makers

1. **Agent reliability is the #1 unmet need.** Token drain loops (Gemini #28362), false success on turn limits (Gemini #22323), and agent hangs (Gemini #21409, OpenCode #16570) are systemic. **Invest in loop detection heuristics, subagent visibility, and scope expansion guardrails**—these are the highest-value engineering investments across all tools.

2. **MCP is winning as the integration standard, but OAuth is broken.** Every tool with MCP support reports "connected but empty" tool states. **If you build MCP integrations, prioritize OAuth token bridging, session affinity, and HTTP transport reconnection.** The current state is production-intolerant.

3. **Windows support remains the Achilles' heel.** Every tool has Windows-specific blockers (sandbox, file locking, Hyper-V services). **For enterprise deployments on Windows, expect friction.** The ecosystem is prioritizing macOS/Linux parity first.

4. **Model fallback transparency is becoming a regulatory concern.** Silent model downgrades (Claude Code #76793) and reasoning summary artifacts (Pi #6524) raise trust issues. **If you build on these tools, monitor model selection actively.** Expect regulation or pricing reform.

5. **Security hardening is accelerating.** Gemini CLI's DNS rebinding fix, env var redaction, and symlink traversal prevention represent a maturity milestone. **Codex's server_registered_tools_only (#31526) and Pi's constrained sampling (#6341) indicate a shift toward sandboxed, auditable agent behavior.** This is a positive trend for enterprise adoption.

6. **GPT-5.6 integration is driving immediate demand.** Pi, OpenCode, and Qwen Code all show GPT-5.6 support within days of release. **If you're building on these tools, expect rapid model churn.** The thinking-level parameter (max vs. normal) is becoming a UX consideration.

7. **Multi-workspace architectures are the next battleground.** Qwen Code's daemon RFC and Claude Code's inter-session orchestration (#24798) point toward *session pools* rather than isolated CLI instances. **This will reshape how teams share context, chain results, and manage long-running workflows.**

---

**Bottom line for developers:** If you need **reliable multi-agent orchestration**, none of these tools are production-ready—Claude Code is furthest but buggiest. If you need **cost optimization and sandboxing**, Codex leads. If you need **security compliance**, Gemini CLI is the safest bet. If you need **cross-platform Windows support**, prepare for pain regardless of your choice. The ecosystem is evolving toward MCP-interconnected agent workflows, but the plumbing is still fragile.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
**Data as of 2026-07-12** | Source: github.com/anthropics/skills

---

## 1. Top Skills Ranking — Most-Discussed Pull Requests

### 1. skill-creator Fixes (PR #1298) — **Open**
**Functionality:** Repairs `run_eval.py` which controls the description-optimization loop (`run_loop.py` and `improve_description.py`). The entire skill-authoring pipeline currently reports `recall=0%` for every description, rendering the optimization loop useless. Fix addresses: eval artifact installation, Windows stream reading, trigger detection logic, and parallel worker isolation.
**Discussion highlights:** References issue #556 (12 comments, 7 👍) — the most-reported blocker in the repository. Multiple independent reproductions confirm the 0% recall bug is consistent across environments.
**Status:** Open, active discussion since June 2026.
🔗 https://github.com/anthropics/skills/pull/1298

### 2. document-typography (PR #514) — **Open**
**Functionality:** Typographic quality control for AI-generated documents. Prevents orphan word wrap (1–6 words isolated on a new line), widow paragraphs (headers stranded at page bottom), and numbering misalignment. Targets the class of formatting issues that users rarely proactively request but consistently degrade document quality.
**Discussion highlights:** Strong reception — the skill addresses a universal pain point across all document-generation workflows.
**Status:** Open since March 2026.
🔗 https://github.com/anthropics/skills/pull/514

### 3. testing-patterns (PR #723) — **Open**
**Functionality:** Comprehensive testing skill covering the full stack: Testing Trophy philosophy, AAA pattern, unit testing for pure functions and edge cases, React component testing with Testing Library, and integration/E2E patterns.
**Discussion highlights:** Relevant community demand signal — Issue #412 (agent governance) and #1385 (reasoning quality gates) show the community is actively seeking structured quality assurance patterns.
**Status:** Open since March 2026.
🔗 https://github.com/anthropics/skills/pull/723

### 4. self-audit (PR #1367) — **Open**
**Functionality:** A universal reasoning quality gate: Step 0 performs mechanical file verification (every claimed output exists), followed by a four-dimension audit covering completeness, correctness, consistency, and clarity. Works with any project, tech stack, or model.
**Discussion highlights:** Proposed by the same author as the reasoning quality gate pipeline proposal (Issue #1385, 3 comments). Represents a v1.3.0 iteration — the community is iterating on audit/verification patterns.
**Status:** Open, very recent (June 2026).
🔗 https://github.com/anthropics/skills/pull/1367

### 5. color-expert (PR #1302) — **Open**
**Functionality:** A self-contained color expertise skill covering ISCC-NBS, Munsell, XKCD, RAL, Ridgway 1912, and CSS color naming systems. Includes a "what to use when" table for color spaces (OKLCH for scales, OKLAB for gradients, CAM16 for perceptually uniform categories).
**Discussion highlights:** Niche but well-crafted — demonstrates the ecosystem expanding into domain-specific expertise skills beyond pure development workflows.
**Status:** Open since June 2026.
🔗 https://github.com/anthropics/skills/pull/1302

### 6. ODT Skill (PR #486) — **Open**
**Functionality:** OpenDocument Text (.odt, .ods) creation, template filling, and parsing to HTML. Covers LibreOffice document creation and full ISO standard format support.
**Discussion highlights:** Part of a broader document-format expansion (PDF fixes in #538, DOCX fix in #541). The community is systematically filling format gaps.
**Status:** Open since March 2026.
🔗 https://github.com/anthropics/skills/pull/486

### 7. SAP-RPT-1-OSS Predictor (PR #181) — **Open**
**Functionality:** Skill for using SAP's open-source tabular foundation model (Apache 2.0, released at TechEd 2025) for predictive analytics on SAP business data.
**Discussion highlights:** Enterprise-focused addition representing the SAP ecosystem's interest in Claude integration. Niche but signals platform expansion.
**Status:** Open since December 2025.
🔗 https://github.com/anthropics/skills/pull/181

### 8. skill-quality-analyzer + skill-security-analyzer (PR #83) — **Open**
**Functionality:** Two meta-skills for evaluating other skills — quality analysis across five dimensions (structure, documentation, error handling, security, maintainability) and security analysis for trust boundary vulnerabilities. Addresses the growing need for quality assurance in the skills marketplace.
**Discussion highlights:** Directly related to the security namespace concern (Issue #492, 34 comments — the most-discussed issue). The community is actively concerned about vetting community-submitted skills.
**Status:** Open since November 2025.
🔗 https://github.com/anthropics/skills/pull/83

---

## 2. Community Demand Trends

From the most-discussed Issues (50 total, top 15 analyzed):

| Demand Category | Signal | Supporting Issues |
|---|---|---|
| **Skill Creator Reliability** | **Highest urgency.** The `run_eval.py` 0% recall bug (#556, 12 comments, 7 👍) is the single most-concentrated technical blocker. Multiple users (dthau120391, tazmad, just2majic) independently reproduced it across Linux and Windows. Three separate PRs (#1298, #1099, #1050) target this exact problem — community is investing heavily in fixing the authoring pipeline. | #556, #1169, #1061 |
| **Trust & Security** | **Strong concern.** Issue #492 (34 comments) about community skills distributed under the `anthropic/` namespace creating trust boundary vulnerabilities is the most-discussed issue overall. Users want official vetting, signed provenance, or namespace separation. PR #83 directly addresses this with a security-analyzer skill. | #492 |
| **Org-Wide Sharing** | **High demand.** Issue #228 (14 comments, 7 👍) requests enterprise sharing workflows — users want direct sharing links or shared skill libraries instead of manual .skill file downloads and Slack forwarding. | #228 |
| **Windows Compatibility** | **Recurring pain point.** Issues #1061, #1169, and PRs #1099, #1050, #1298 all address Windows-specific failures in skill-creator scripts (subprocess PATHEXT, cp1252 encoding, select-on-pipe crashes). The community has invested significant effort in Windows fixes. | #1061, #1169, #556 |
| **Agent Governance & Quality Assurance** | **Emerging direction.** Issue #412 (agent governance — safety patterns, policy enforcement, audit trails) and the self-audit proposal (#1385) signal growing interest in systematic quality gates for AI agent behavior. | #412, #1385 |
| **Document & Format Expansion** | **Steady demand.** PDF case-sensitivity fixes (#538), DOCX tracked-change ID collision fix (#541), ODT format addition (#486), and typography quality (#514) — the community is methodically polishing and expanding document format support. | #538, #541, #486, #514 |

---

## 3. High-Potential Pending Skills

These open PRs have active discussion, clear value propositions, and are likely to merge soon:

- **self-audit (PR #1367)** — Reasoning quality gate with mechanical verification. Author (@YuhaoLin2005) is actively iterating with a follow-up pipeline proposal (#1385). Recent activity (updated July 2, 2026). Likely to merge within weeks.
  🔗 https://github.com/anthropics/skills/pull/1367

- **document-typography (PR #514)** — Well-established (since March 2026), addresses universal document quality issue. No technical obstacles reported. Awaiting maintainer review.
  🔗 https://github.com/anthropics/skills/pull/514

- **color-expert (PR #1302)** — Self-contained, well-structured, from an experienced community contributor (@meodai). No conflicts reported. Niche but polished.
  🔗 https://github.com/anthropics/skills/pull/1302

- **ODT Skill (PR #486)** — Completes the document-format trifecta (PDF, DOCX, ODT). Has been open since March 2026 with consistent interest.
  🔗 https://github.com/anthropics/skills/pull/486

---

## 4. Skills Ecosystem Insight

The community's most concentrated demand is **not for new Skills, but for reliable skill-authoring tooling**: the skill-creator pipeline's 0% recall bug (#556, #1169) has drawn more combined effort (3+ PRs, 10+ direct reports) than any individual Skill proposal, revealing that the ecosystem's growth is bottlenecked by broken eval infrastructure rather than unmet capability gaps.

---

# Claude Code Community Digest — 2026-07-12

No new release today, but the community is highly engaged with a dense wave of bug reports — 50 issues updated in the last 24h alone — and a handful of PRs fixing sandbox, certificate, and plugin security issues. Two long-running threads continue to dominate: **inter-session orchestration** (#24798, 55 comments) and **Windows Cowork failures** (#74649, 52 comments). Several fresh bugs (SGR mouse leaks, background process orphans, silent model fallback) surfaced today.

---

## Releases
No new versions were published in the last 24 hours. The latest reported versions in use are **v2.1.204** through **v2.1.207**.

---

## Hot Issues (10 picks)

1. **#24798 – Inter-session communication for multi-Claude workflows**  
   *[enhancement, area:tui, area:core]*  
   The community’s most-upvoted feature request (👍18) and second-highest comment count (55). Users want Claude sessions to be able to coordinate — pass context, chain results, sequence dependencies — to support large multi-module projects without manual copy-paste.  
   [github.com/anthropics/claude-code/issues/24798](https://github.com/anthropics/claude-code/issues/24798)

2. **#74649 – Missing HCS services: vfpext — Cowork not working on Windows 11 Pro**  
   *[bug, platform:windows, area:cowork]*  
   A critical blocker for Windows users: Cowork (local agent teams) fails on Windows 11 Pro due to missing Hyper-V Container Services (`vfpext`). 52 comments, still open.  
   [github.com/anthropics/claude-code/issues/74649](https://github.com/anthropics/claude-code/issues/74649)

3. **#36800 – Duplicate channel plugin instances causing 409 Conflict (macOS)**  
   *[bug, has repro, platform:macos, area:mcp]*  
   Closed with a fix but serves as a cautionary tale: a Telegram MCP plugin spawned a second process mid-session, leading to tool loss and harness bugs. Highlighted the fragility of channel-based plugins. 16 comments.  
   [github.com/anthropics/claude-code/issues/36800](https://github.com/anthropics/claude-code/issues/36800)

4. **#55206 – Cowork on Windows: bash sandbox unlink denied (breaks git)**  
   *[bug, has repro, platform:windows, platform:macos, area:cowork, area:sandbox]*  
   Files created inside mounted host folders cannot be deleted by the bash sandbox, breaking all `git` write operations. 14 comments, 👍10. Windows Cowork remains a pain point.  
   [github.com/anthropics/claude-code/issues/55206](https://github.com/anthropics/claude-code/issues/55206)

5. **#64615 – /rewind (Esc Esc) silently reverts/loses code with no confirmation**  
   *[bug, area:tui, user-experience]*  
   A widely feared UX bug: pressing Esc twice reverts uncommitted changes without warning. 5 comments but high user impact. No confirmation or undo available.  
   [github.com/anthropics/claude-code/issues/64615](https://github.com/anthropics/claude-code/issues/64615)

6. **#76816 – Scroll-wheel SGR mouse report leaks into prompt input**  
   *[bug, has repro, platform:macos, area:tui]*  
   Fresh bug (reported today): fragments of terminal SGR escape sequences appear as literal text in the prompt after scrolling. Intermittent, triggered by large output blocks.  
   [github.com/anthropics/claude-code/issues/76816](https://github.com/anthropics/claude-code/issues/76816)

7. **#76500 – Agent Teams mailbox: 5–62 min delays, lost reports, /clear queue leak**  
   *[bug, platform:macos, area:agents]*  
   Four interrelated delivery defects in experimental Agent Teams (tmux-backed orchestrator). Turn-boundary delays of up to an hour, final reports replaced by `idle_notification`, and shutdown handshakes never complete. Still open.  
   [github.com/anthropics/claude-code/issues/76500](https://github.com/anthropics/claude-code/issues/76500)

8. **#76793 – Silent model fallback: Fable 5 → Opus 4.8 mid-session with no notification**  
   *[bug, duplicate, platform:windows, area:model]*  
   When a usage limit is nearly hit, Desktop silently switches the model without any UI notice. Users are unaware until they see lower quality responses. Raises transparency concerns.  
   [github.com/anthropics/claude-code/issues/76793](https://github.com/anthropics/claude-code/issues/76793)

9. **#76795 – Bash permission matcher misparses operators inside quoted arguments**  
   *[bug, has repro, platform:macos, area:permissions]*  
   A tricky edge case: a quoted `|` inside a `grep` pattern fools the permission system, causing it to prompt unnecessarily. One of several bugs in the permission-matching subsystem.  
   [github.com/anthropics/claude-code/issues/76795](https://github.com/anthropics/claude-code/issues/76795)

10. **#76814 – Background processes leak as orphans (kill %1 silently fails)**  
    *[bug, platform:macos, area:bash]*  
    Claude Code’s non-interactive shell disables job control, so `kill %1` does nothing. Commands using `&` leave orphaned processes that consume resources. Fresh report.  
    [github.com/anthropics/claude-code/issues/76814](https://github.com/anthropics/claude-code/issues/76814)

---

## Key PR Progress (all 5 updated in the last 24h)

1. **#39043 – Remove "retro-futuristic" recommendation from Frontend Design Skill**  
   *[open]*  
   A lighthearted but community-driven PR by t3dotgg removing an off‑putting design suggestion from the system skill. Long-dormant (March) but recently revived.  
   [github.com/anthropics/claude-code/pull/39043](https://github.com/anthropics/claude-code/pull/39043)

2. **#76673 – fix: 再現性監査で確認した設計不具合を修正 (Japanese: fix design defects found in reproducibility audit)**  
   *[closed]*  
   A substantial bug-fix batch: triage lifecycle locking, Ralph session state isolation, unreachable shell branches, and stale lock handling. Merged.  
   [github.com/anthropics/claude-code/pull/76673](https://github.com/anthropics/claude-code/pull/76673)

3. **#76640 – fix: load macOS system certificates and handle NO_PROXY blackhole for Bun runtime**  
   *[open]*  
   Fixes Cowork API connection failures on macOS when using Bun (v2.1.17+). The Bun SSL context doesn’t load macOS system certificates by default; this PR adds certificate loading and NO_PROXY handling. Closes #24470.  
   [github.com/anthropics/claude-code/pull/76640](https://github.com/anthropics/claude-code/pull/76640)

4. **#76581 – fix(plugins): harden YAML, path, and symlink handling in scripts**  
   *[open]*  
   Security hardening for official plugin scripts: prevents YAML frontmatter breakout, path traversal, and symlink-based credential overwrite attacks.  
   [github.com/anthropics/claude-code/pull/76581](https://github.com/anthropics/claude-code/pull/76581)

5. **#76576 – fix(plugin-dev): align userConfig docs and hook validator with v2.1.207 shell-injection fix**  
   *[open]*  
   Documents the breaking change in v2.1.207 that rejects `${user_config.*}` in shell-form hooks due to shell-injection risks. Also updates plugin references to stop reading from project-level settings.  
   [github.com/anthropics/claude-code/pull/76576](https://github.com/anthropics/claude-code/pull/76576)

---

## Feature Request Trends

- **Multi-session orchestration** – Users want sessions to talk to each other (#24798), inject mid-task messages in Desktop (#71726), and chain complex workflows. This is the single highest signal feature.
- **Windows parity** – Persistent calls for `CLAUDE_DATA_DIR` relocation (#57998), Cowork sandbox fixes, and better integration with Windows tooling. Desktop environment management is also requested (#76811).
- **UI/UX customization** – Ability to hide the Remote Control footer pill (#66343), expand pasted text before sending (#76801), and customizable preview panes for PDF/HTML in remote sessions (#62011).
- **Cost & usage transparency** – Threshold notifications (80%/90%/100%) for daily/monthly spend limits (#74709) and visible model fallback warnings (#76793).
- **MCP & browser integration** – Revisit WebMCP tool discovery in Claude in Chrome (#76809) and improve MCP channel reliability (#36800).

---

## Developer Pain Points

- **Windows Cowork is nearly unusable** – Three distinct blockers remain: missing Hyper-V services (#74649), sandbox unlink denial (#55206), and `ENAMETOOLONG` on session start (#76815). Community frustration is high.
- **Hook and shell reliability** – Hooks fail silently when the working directory is deleted (#65378, #76808). Background jobs orphan because job control is disabled (#76814). Permission matcher misfires on quoted operators (#76795).
- **TUI stability** – Scroll-wheel escape sequences leak into input (#76816); `/rewind` causes data loss with no confirmation (#64615); rendering glitches with touch scroll on Windows VSCode (#76810).
- **Silent model fallback** – No on-screen notification when a usage limit triggers an automatic model downgrade (#76793). Users lose quality without understanding why.
- **Remote Control environment lifecycle** – Stale environments accumulate across server restarts, indistinguishable from active ones, with no cleanup mechanism (#76811). Session hooks that emit `sessionTitle` are ignored in RC mode (#76812).
- **Agent Teams experimental** – 5–62 minute turn-boundary delays, lost final reports, queue leaks (#76500). The feature remains unstable for production use.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-07-12

## Today’s Highlights
A long‑running disk‑space crisis is finally being tamed: the SQLite logging issue that could write **~640 TB/year** (#28224) was closed after three merged PRs cut log volume by ~85% – a win for everyone using Codex CLI on SSD‑backed systems. Meanwhile, Computer Use on macOS remains a pain point, with two fresh crash reports (#32032, #22822) pointing to missing Swift Concurrency symbols in the bundled plugin. On the rate‑limit front, users continue to report reset‑consumption bugs (#31606, #32311) where a reset is “spent” but the quota never recovers.

## Releases
No new releases were published in the last 24 hours.

## Hot Issues (top 10 by community activity)

1. **[#28224] Codex SQLite feedback logs can write ~640 TB/year**  
   *Closed by author after three fix PRs merged. Avoids 85% of logs. Massive SSD endurance impact; 432 👍, 145 comments.*  
   https://github.com/openai/codex/issues/28224

2. **[#28190] `rg` is blocked by macOS**  
   *CLI users on macOS can’t use ripgrep due to a code‑signing block. 71 👍, 46 comments.*  
   https://github.com/openai/codex/issues/28190

3. **[#31606] Reset “succeeded” but quota did not apply – wasted reset**  
   *A reset credit is consumed with no effect. 43 👍, 35 comments – high frustration.*  
   https://github.com/openai/codex/issues/31606

4. **[#28969] Add setting to disable the 60‑second auto‑resolve for questions**  
   *Very popular feature request: 105 👍, 27 comments. Users want full control.*  
   https://github.com/openai/codex/issues/28969

5. **[#32032] Computer Use 1.0.1000366 crashes on macOS 15.7.7 – missing Swift symbol**  
   *Latest Computer Use release fails to launch on recent macOS. 21 comments, 11 👍.*  
   https://github.com/openai/codex/issues/32032

6. **[#31836] Projects “Sort By Last Updated” only sorts tasks, not projects**  
   *UX bug on macOS app: the sort selector appears to do nothing. 14 comments, 9 👍.*  
   https://github.com/openai/codex/issues/31836

7. **[#22428] Windows Desktop sandbox fails with `CreateProcessAsUserW` error**  
   *Long‑standing sandbox issue on Windows affecting many users. 14 comments, 7 👍.*  
   https://github.com/openai/codex/issues/22428

8. **[#22822] Computer Use MCP fails on macOS 15.7.x – bundled plugin requires newer Swift runtime**  
   *Previous report of the same underlying Swift version mismatch. 12 comments, 6 👍.*  
   https://github.com/openai/codex/issues/22822

9. **[#28672] Business Codex unusable: repeated 401 / token revocation / forced phone verification**  
   *Business subscription stability critical. 11 comments, low 👍 but high severity.*  
   https://github.com/openai/codex/issues/28672

10. **[#31664] Reasoning summaries contain literal `<!-- -->` placeholders**  
    *Empty HTML comments leak into TUI and JSON output. 22 👍, 11 comments – visible and quirky.*  
    https://github.com/openai/codex/issues/31664

## Key PR Progress (10 important changes)

1. **[#32485] Use available width for skill names in toggle view**  
   *Fixes truncation of skill names in the toggle view – UX polish.*  
   https://github.com/openai/codex/pull/32485

2. **[#31526] Restrict hosted threads to server‑registered tools**  
   *Adds `server_registered_tools_only` feature for hosted app‑server clients – security and control.*  
   https://github.com/openai/codex/pull/31526

3. **[#32461] Expand tabs when rendering TUI diffs**  
   *Replaces literal tabs with spaces in diff output – improves readability in terminal.*  
   https://github.com/openai/codex/pull/32461

4. **[#32460] Emit `thread-idle` lifecycle after guardian interrupts**  
   *Ensures extensions know when a turn is aborted by the guardian (automatic review denials).*  
   https://github.com/openai/codex/pull/32460

5. **[#32441] Preserve parent sandbox enforcement for memory consolidation**  
   *Memory consolidation agent now inherits parent’s permission profile – fixes sandbox leaks.*  
   https://github.com/openai/codex/pull/32441

6. **[#31806] Publish new releases to Cloudflare R2**  
   *Shadow copy of installer releases for faster/alternate distribution; canonical path unchanged.*  
   https://github.com/openai/codex/pull/31806

7. **[#30135] CI: publish versioned bash fork artifacts**  
   *Re‑establishes independently versioned Bash fork pipeline (previously removed).*  
   https://github.com/openai/codex/pull/30135

8. **[#30036] Make Windows executable resolution deterministic**  
   *Fixes a race where Windows could choose a different executable than Codex intended.*  
   https://github.com/openai/codex/pull/30036

9. **[#30016] Core: inherit current step environments in subagents**  
   *Subagents now see the environment the parent sampling request actually used with deferred executors.*  
   https://github.com/openai/codex/pull/30016

10. **[#29960] Cache stable executor skills and project them per model step**  
    *Performance improvement: skill metadata discovered once per environment, not reread each step.*  
    https://github.com/openai/codex/pull/29960

## Feature Request Trends
- **Configurable auto‑resolve disable** (#28969, 105 👍) – users want to decide when their question is auto‑resolved.
- **Better macOS Computer‑Use compatibility** – repeated requests for a Swift runtime bundle that works on macOS 15.7+.
- **Rate‑limit UX improvements** – several issues asking for clearer indication of reset status and consumption.
- **Projects sorting parity** – sort by last‑updated should order projects, not just tasks.
- **Context‑threshold warnings** (#32486) – users want explicit confirmation before crossing higher‑pricing bands.

## Developer Pain Points
- **Windows sandbox instability** – multiple reports of sandbox failures, ACL corruption, and vsock errors (e.g., #22428, #28248, #8322).
- **macOS code‑signing & runtime clashes** – `rg` blocked (#28190) and Computer‑Use plugins depending on a newer Swift runtime than the OS provides (#32032, #22822).
- **Rate‑limit reset fraud** – reset credits consumed without actual quota restoration (#31606, #32311).
- **Session state bloat** – unbounded turn state causing freezes and lost context (#25779).
- **CLI tool compatibility** – WSL interop breakage (#30040), webview crashes in Windows app (#30178), and extension state loss (#32502).

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-07-12

## Today's Highlights

A significant security patch batch landed today, addressing DNS rebinding vulnerabilities, unredacted CI environment variables, and symlink-based path traversal in core file tools. A nightly release pipeline failure (Issue #28360) has temporarily blocked new builds. Meanwhile, a troubling new "token drain loop" bug (Issue #28362) was filed, where the agent fails to detect repeated error cycles and continuously wastes tokens.

## Releases

No new releases in the last 24 hours.

## Hot Issues

1. **[#28362 — Token drain loop](https://github.com/google-gemini/gemini-cli/issues/28362)** (new, 1 comment)
   Freshly filed: the agent enters an infinite loop attempting to recover from a missing `template.py` error, failing to detect the repetition. This is a concerning pattern that wastes user tokens and compute. Community will likely demand better loop detection heuristics.

2. **[#28360 — Nightly Release Failed](https://github.com/google-gemini/gemini-cli/issues/28360)** (new, 1 comment)
   Automation-generated: the 2026-07-12 nightly build pipeline failed. Blocks all downstream consumers from receiving the latest fixes (including the security patches merged today). High urgency for maintainers.

3. **[#22323 — Subagent false success on MAX_TURNS](https://github.com/google-gemini/gemini-cli/issues/22323)** (10 comments, 2 👍)
   A critical P1 bug: `codebase_investigator` reports `status: "success"` with `Termination Reason: "GOAL"` even when it hit the maximum turn limit without doing any work. This silently hides agent failures from users and makes debugging nearly impossible.

4. **[#21409 — Generalist agent hangs forever](https://github.com/google-gemini/gemini-cli/issues/21409)** (7 comments, 8 👍)
   The highest-reacted issue in the digest. The generalist agent hangs indefinitely on simple tasks (folder creation). Users report waiting up to an hour before cancelling. Workaround: explicitly instruct the model not to delegate to sub-agents. This undermines the core "agentic" value proposition.

5. **[#24353 — Robust component-level evaluations](https://github.com/google-gemini/gemini-cli/issues/24353)** (7 comments)
   A P1 tracking epic for building out the eval framework. 76 behavioral tests now exist across 6 models. The community is investing heavily in CI quality gates—this is the scaffolding that prevents regressions.

6. **[#22745 — AST-aware file reads and mapping](https://github.com/google-gemini/gemini-cli/issues/22745)** (7 comments, 1 👍)
   Epic investigating whether AST-aware tools reduce token waste from misaligned reads and enable method-level navigation. Directly addresses the "huge context window" pain point. Related: #22746 for CLI tooling.

7. **[#25166 — Shell command stuck on "Waiting input"](https://github.com/google-gemini/gemini-cli/issues/25166)** (4 comments, 3 👍)
   Core P1 bug: after simple CLI commands finish, the terminal hangs showing "Awaiting user input." Extremely disruptive to workflow automation. Ongoing for 3 months with no fix merged yet.

8. **[#21983 — Browser subagent fails on Wayland](https://github.com/google-gemini/gemini-cli/issues/21983)** (4 comments, 1 👍)
   Browser agent reports `GOAL` success but actually crashes on Wayland display servers. Linux users with modern desktop environments are locked out of browser automation.

9. **[#26522 — Auto Memory retries low-signal sessions indefinitely](https://github.com/google-gemini/gemini-cli/issues/26522)** (5 comments)
   Auto Memory only marks sessions as "processed" when the extraction agent successfully reads them. Low-signal sessions (which the agent skips) are re-surfaced on every scan, causing unbounded retries. Wasteful token consumption.

10. **[#22672 — Agent should discourage destructive behavior](https://github.com/google-gemini/gemini-cli/issues/22672)** (3 comments, 1 👍)
    Community concern: agents use `--force` flags and `git reset` when safer alternatives exist. Users want guardrails for database mutations and branch operations. Directly relates to the trust and safety surface.

## Key PR Progress

1. **[#28181 — Fix DNS rebinding bypass in web_fetch SSRF](https://github.com/google-gemini/gemini-cli/pull/28181)** (CLOSED)
   Critical security fix: `isPrivateIp()` only checked hostname strings without DNS resolution, making it trivially bypassable with rebinding attacks. Now uses asynchronous resolution. This was a real vulnerability, not theoretical.

2. **[#28180 — Restore defensive path resolution for symlinks](https://github.com/google-gemini/gemini-cli/pull/28180)** (CLOSED)
   Re-applies a security fix that was previously reverted. Re-introduces `resolveDefensiveToolPath` to prevent symlink-based path traversal in `read_file`, `write_file`, and `edit` tools. Highlights a tense back-and-forth between breaking changes and security.

3. **[#28179 — Remove ISSUE_BODY and ISSUE_TITLE from always-allowed env vars](https://github.com/google-gemini/gemini-cli/pull/28179)** (CLOSED)
   These variables bypassed all sanitization, including CI-mode redaction. An attacker who could set these (e.g., via a GitHub issue) could inject unredacted secrets into the AI agent's prompt.

4. **[#28178 — Require approved bot patch artifacts](https://github.com/google-gemini/gemini-cli/pull/28178)** (CLOSED)
   Fixes a supply-chain safety gap: the bot's publish job now requires an explicit approval marker. Rejected critiques automatically remove stale PR artifacts. Good provenance hardening.

5. **[#28175 — Require confirmation for shell parameter expansion](https://github.com/google-gemini/gemini-cli/pull/28175)** (CLOSED)
   Downgrades allowlisted shell commands with parameter expansion (`$VAR`, `${VAR}`) to confirmation mode in interactive use, and denies them entirely in YOLO/non-interactive mode. Addresses the "silent variable expansion" risk.

6. **[#28172 — Prevent silent scope expansion on task failure](https://github.com/google-gemini/gemini-cli/pull/28172)** (CLOSED)
   Fixes #28155: when asked to review specific lines, the agent silently expanded its scope—running scripts and reading full files—without user approval. Added explicit instructions to `mandateConfirm` to prevent this.

7. **[#28171 — Broader fix for silent scope expansion](https://github.com/google-gemini/gemini-cli/pull/28171)** (CLOSED)
   Companion fix to #28172. Addresses the same class of bug (scope expansion when initial approach fails) with a more comprehensive prompt-level change. Labeled size/xL.

8. **[#28169 — Add eval coverage report command](https://github.com/google-gemini/gemini-cli/pull/28169)** (CLOSED)
   Adds `npm run eval:coverage` to cross-reference eval inventory with the tool registry. Helps developers identify untested tools. Important for maintaining eval quality as the tool surface grows.

9. **[#28253 — Fix footer branch name sync on WSL](https://github.com/google-gemini/gemini-cli/pull/28253)** (OPEN)
   The footer "Branch" indicator doesn't update after `git checkout` on WSL mounts where `fs.watch` doesn't fire events. A quality-of-life fix for Windows users.

10. **[#28349 — Guard customDeepMerge against circular references](https://github.com/google-gemini/gemini-cli/pull/28349)** (OPEN)
    Fixes a crash in the settings manager when configuration objects contain circular references (e.g., `obj.self = obj`). Straightforward `Set`-based cycle detection.

## Feature Request Trends

- **AST-aware code analysis:** Multiple issues (#22745, #22746) push for method-level file reads, AST-based codebase mapping, and CLI tools (tilth, glyph). The goal is reducing the token overhead from line-based file reads and enabling precise navigation.

- **Subagent trajectory visibility:** Community wants subagent internals exposed via `/chat share` (#22598) and included in bug reports (#21763). Debugging multi-agent failures is currently a black-box exercise.

- **Self-documenting agent behavior:** A recurring ask (#21432) is for the CLI to accurately explain its own hotkeys, flags, and capabilities—essentially making the CLI its own best documentation.

- **Robust evaluation framework:** The eval infrastructure is a priority (#24353, #28169). 76 behavioral tests is significant, but the community wants formal coverage reporting and component-level (rather than end-to-end) evaluations.

## Developer Pain Points

- **Agent hangs and silent failures** dominate the issue tracker: the generalist agent hangs (#21409), shell commands get stuck on "Waiting input" (#25166), and subagents falsely report success on failure (#22323). These are the highest-reacted bugs and directly erode developer trust.

- **Subagent scope creep** is a persistent frustration. Multiple issues and PRs (#28172, #28171, #22672, #23571) describe agents silently expanding task scope—running full file reads when line-level review was requested, or creating temporary scripts in random directories.

- **Configuration and permission issues** surface regularly: browser agent ignores `settings.json` overrides (#22267), subagents run even when explicitly disabled (#22093), and the tool limit of 128 causes 400 errors (#24246).

- **Memory system quality** is an ongoing concern. Auto Memory retries low-signal sessions (#26522), invalid patches are silently skipped (#26523), and the system sends unredacted content to the extraction model (#26525). A dedicated tracking issue (#26516) bundles multiple memory bugs.

- **Security surface tension** is evident in the batch of patches merged today. The DNS rebinding vulnerability (#28181), unrestrained env var passthrough (#28179), and reverted-then-re-applied symlink traversal fix (#28180) suggest security hardening is playing catch-up with features.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest – 2026-07-12

## Today’s Highlights
This week’s activity is dominated by persistent MCP OAuth integration failures and session data integrity bugs. Multiple reports describe OAuth‑protected MCP servers showing as “connected” yet exposing zero tools in CLI sessions, while another bug causes large binary diffs to bloat session history past the 5 MB API limit. On the feature side, users are asking for dynamic context injection in skills, cross‑app session sync, and voice‑mode polish.

## Releases
*No new releases in the last 24 hours.*

## Hot Issues
1. **#4098 – Resuming a session can leave truncated/concatenated events**  
   *Author: Adamkadaban*  
   Malformed JSONL records on resume prevent the session from being resumed again. A critical data‑integrity bug for anyone relying on persistent sessions.  
   [[Link](https://github.com/github/copilot-cli/issues/4098)]  |  💬 2 comments

2. **#4089 – Atlassian MCP server: OAuth succeeds but no tools exposed**  
   *Author: Mov1ngTrg3t*  
   Despite successful OAuth, the CLI agent session never sees any tools from the Atlassian MCP server. Other HTTP MCP servers work fine with the same app config – points to a protocol‑bridge issue.  
   [[Link](https://github.com/github/copilot-cli/issues/4089)]  |  💬 2 comments

3. **#3983 – Global instructions.md / AGENTS.md / CLAUDE.md documentation clarification**  
   *Author: dylbarne*  
   Users remain confused about the priority and merge behaviour of global instruction files. Clear docs would reduce guesswork. 👍 2 reactions.  
   [[Link](https://github.com/github/copilot-cli/issues/3983)]

4. **#3795 – Feature request: opt‑in model discovery for BYOK / custom providers**  
   *Author: aosama*  
   In BYOK mode, users must manually set `COPILOT_MODEL`. Request to auto‑query the provider for available models. 👍 1 reaction.  
   [[Link](https://github.com/github/copilot-cli/issues/3795)]

5. **#4097 – `apply_patch` stores deleted binary in session history, exceeding 5 MB limit**  
   *Author: Adamkadaban*  
   Deleting a large binary via `apply_patch` saves the entire file as a textual diff, permanently bloating conversation history until `/compact` fails. A tangible data‑management blocker.  
   [[Link](https://github.com/github/copilot-cli/issues/4097)]

6. **#4096 – Third‑party MCP server shows “Connected” but tools missing (OAuth token never bridged)**  
   *Author: bugale*  
   Another variant of the MCP OAuth disconnect: token is obtained but not passed to the CLI agent session. The core OAuth‑to‑session bridge is broken for remote MCP servers.  
   [[Link](https://github.com/github/copilot-cli/issues/4096)]

7. **#4095 – Windows: plugin update fails “Access is denied (os error 5)” while VS Code runs**  
   *Author: FBakkensen*  
   The Copilot VS Code extension holds file handles on the plugin directory, preventing updates. Affects Windows users who keep VS Code open while updating plugins.  
   [[Link](https://github.com/github/copilot-cli/issues/4095)]

8. **#4094 – Deleting a session in the app doesn’t remove it from session‑store.db / VS Code Copilot Chat**  
   *Author: evdbogaard*  
   Orphaned sessions persist across the shared store, causing stale history in VS Code. Inconsistent deletion semantics across surfaces.  
   [[Link](https://github.com/github/copilot-cli/issues/4094)]

9. **#4083 – Voice mode download fails with corporate proxy ENOTFOUND**  
   *Author: sebastianh6r*  
   The voice inference runtime download does not respect corporate proxy settings. Blocks voice mode entirely in enterprise environments.  
   [[Link](https://github.com/github/copilot-cli/issues/4083)]

10. **#4088 – Dynamic context injection in Skills (`!command` placeholder)**  
    *Author: mumenthalers*  
    Proposal to allow `!` followed by a backtick‑enclosed command inside SKILL.md files, enabling runtime shell output injection into agent skills.  
    [[Link](https://github.com/github/copilot-cli/issues/4088)]

## Key PR Progress
1. **#2565 – install: guard against duplicate PATH entries on reinstall**  
   *Author: marcelsafin*  
   Running the installer twice without restarting the shell appends the `copilot` PATH line a second time. The fix adds a check to avoid duplication, improving the re‑installation experience.  
   [[Link](https://github.com/github/copilot-cli/pull/2565)]

## Feature Request Trends
- **MCP OAuth reliability** – 4+ issues (#4089, #4096, #4085, #4084) all describe OAuth‑protected MCP servers not delivering tools to sessions. The community expects a seamless “connect once, use everywhere” experience.
- **Voice mode enhancements** – Multiple requests for auto‑submit on spacebar release (#4090), system audio muting during capture (#4092), and better proxy support (#4083).
- **Session portability** – Cross‑app session sync (#4082) and dynamic context injection in skills (#4088) show a desire for more flexible, shareable agent contexts.
- **Model/configuration discovery** – BYOK model discovery (#3795) and global instructions documentation (#3983) reflect a need for better self‑service configuration.

## Developer Pain Points
- **MCP OAuth “connected but empty”** – The most frequent frustration this week: users complete an OAuth flow, see a green indicator, yet the agent never receives any tools. The disconnect between the app UI and the CLI session is a trust‑breaking regression.
- **Session data bloat and corruption** – Issues #4098 (malformed JSONL on resume) and #4097 (binary diffs in history) highlight that session persistence is fragile and lacks compaction safeguards.
- **Windows‑specific file‑locking conflicts** – Plugin updates (#4095) fail because the VS Code extension holds handles. A cross‑process file‑access issue that blocks regular updates.
- **Orphaned session state** – Deleting from the app does not clean the shared store (#4094), leaving ghost sessions in VS Code and the CLI database. Confusing and clutter‑prone.
- **Proxy blindness** – Voice mode (#4083) and potentially other downloads fail behind corporate proxies. Users in managed environments are locked out of new features.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest – 2026-07-12

**Data source:** [github.com/MoonshotAI/kimi-cli](https://github.com/MoonshotAI/kimi-cli)

---

## 1. Today's Highlights
Activity remained light over the past 24 hours, with no new releases and only one issue filed. The development team continues to focus on stability and parity improvements: a trio of pull requests from contributor **nankingjing** addresses missing runtime metadata for background agents, a string‑truncation off‑by‑three bug, and a missing global MCP configuration loader for the ACP server. A long‑standing PR (#1771) from **he‑yufeng** also edges closer to merge, fixing a critical `content` type mismatch with the OpenAI Chat Completions API.

---

## 2. Releases
No new releases in the last 24 hours.

---

## 3. Hot Issues

**#2491 [OPEN] Bug: kimi-datasource CHANGELOG.md incorrectly listed as a skill**  
Author: `zhangleilaoge` | Created/Updated: 2026-07-11 | Comments: 0  
**Why it matters:** When using the `/skill` autocomplete, `CHANGELOG` appears as an available skill, pointing to a plugin's CHANGELOG.md rather than an actual skill definition. This violates the documented behaviour that requires explicit skill declarations. The issue may confuse users who expect only genuine skills to appear, and could indicate a gap in how plugin manifests are parsed or how the autocomplete index is built.  
**Community reaction:** No comments yet; the bug was reported only hours ago.  
[GitHub](https://github.com/MoonshotAI/kimi-cli/issues/2491)

---

## 4. Key PR Progress

**#1771 [OPEN] fix: always stringify tool message content in Chat Completions provider**  
Author: `he-yufeng` | Created: 2026-04-06 | Updated: 2026-07-11  
**What it does:** Forces the `content` field of `role: "tool"` messages into a plain string, fixing a `400` error when a tool result contains multiple `ContentPart` objects. This resolves issue #1762 and aligns with the OpenAI API spec.  
[GitHub](https://github.com/MoonshotAI/kimi-cli/pull/1771)

**#1769 [OPEN] fix: graceful degradation when MCP server fails to connect**  
Author: `he-yufeng` | Created: 2026-04-06 | Updated: 2026-07-11  
**What it does:** Catches `MCPRuntimeError` in the agent loop so that a failing MCP server (e.g. due to port conflicts) no longer crashes the worker and leaves the frontend stuck in "thinking". The agent either reconnects or reports a clean error.  
[GitHub](https://github.com/MoonshotAI/kimi-cli/pull/1769)

**#2493 [OPEN] Fix: record started_at for background agent tasks so duration is reported**  
Author: `nankingjing` | Created/Updated: 2026-07-11  
**What it does:** Ensures `runtime.started_at` is set for background **agent** tasks (it was only set for background **bash** tasks), allowing run duration to be properly tracked and reported.  
[GitHub](https://github.com/MoonshotAI/kimi-cli/pull/2493)

**#2492 [OPEN] fix: shorten_middle output exceeds target width by ellipsis length**  
Author: `nankingjing` | Created/Updated: 2026-07-11  
**What it does:** Fixes an off‑by‑three bug in the `shorten_middle` utility where the output length was always `width + 3` because the `"..."` ellipsis was not subtracted from the left/right slices.  
[GitHub](https://github.com/MoonshotAI/kimi-cli/pull/2492)

**#2490 [OPEN] fix(acp): load global MCP config in kimi acp server**  
Author: `nankingjing` | Created/Updated: 2026-07-11  
**What it does:** The ACP (multi‑session) server now loads the user’s globally‑configured MCP servers, closing a parity gap with the interactive `kimi` mode. Previously ACP clients (Zed, JetBrains AI Assistant) only saw built‑in tools. Fixes #2464.  
[GitHub](https://github.com/MoonshotAI/kimi-cli/pull/2490)

---

## 5. Feature Request Trends
Given the limited data, the most prominent direction is **reliability and operational visibility**:
- **Graceful failure handling for external integrations** – PR #1769 addresses MCP connection crashes; similar concerns likely exist for other providers.
- **Background task observability** – PR #2493 highlights user desire for runtime metrics even for non‑bash tasks.
- **ACP mode feature parity** – PR #2490 shows demand for consistent MCP tool access regardless of connection mode (interactive vs. ACP).

No explicit feature requests were filed in the last 24 hours, but the issues above indirectly reflect user needs.

---

## 6. Developer Pain Points
- **MCP server failures causing infinite “thinking” state** – PR #1769 targets a recurring frustration where an uncaught `MCPRuntimeError` hangs the UI.
- **Missing duration for background agent tasks** – Users cannot audit how long long‑running agents took, a key debugging need (#2493).
- **String truncation bugs in UI helpers** – `shorten_middle` returning wider strings than requested (PR #2492) may cause layout breaks in the terminal UI.
- **Incorrect skill autocomplete suggestions** – Issue #2491 can mislead users into activating a non‑skill item; suggests plugin manifest parsing or indexing is fragile.
- **ACP vs. interactive mode inconsistency** – Missing global MCP config (PR #2490) forced ACP users to set up tools twice or miss them entirely.

---

*This digest was generated automatically from public GitHub activity on MoonshotAI/kimi-cli. Data window: 2026-07-11 00:00 – 2026-07-12 00:00 UTC.*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest – 2026-07-12

📅 **Data source**: [github.com/anomalyco/opencode](https://github.com/anomalyco/opencode)

---

## Today’s Highlights
No new releases dropped today, but the community was active closing long-standing bugs and pushing forward several high-impact PRs. The most notable issues center around a **GPT‑5.3 Codex regression** (`#24899`, 5 👍) after v1.14.29 and a **persistent OpenRouter provider pinning bug** (`#10557`, 3 👍). On the feature side, the demand for **editable custom providers** (`#18224`, 11 👍) continues to be the community’s top ask. PRs today improved Windows clipboard behavior, enhanced subagent navigation, and laid groundwork for GPT‑5.6 support.

---

## Releases
**None** in the last 24 hours.

---

## Hot Issues (10 of note)

1. **[#23628 – Square Root Boundary for Context Compression Loss Detection](https://github.com/anomalyco/opencode/issues/23628)**  
   *16 comments, 0 👍*  
   Proposes two numeric indicators (`sqrt(N)` threshold and compression‑loss boundary) to help developers monitor context window health during agent execution. A niche but clever idea for advanced LLM workflow debugging.

2. **[#10557 – Pinning OpenRouter provider doesn’t work](https://github.com/anomalyco/opencode/issues/10557)**  
   *14 comments, 3 👍*  
   Users report that setting `provider.order` with `allow_fallbacks: false` is ignored, causing requests to hit undesired backends. Common blocker for those relying on specific providers like Minimax.

3. **[#24899 – v1.14.29 broke GPT‑5.3 Codex support](https://github.com/anomalyco/opencode/issues/24899)**  
   *10 comments, 5 👍*  
   After an update, GPT‑5.3 Codex via OpenAI stops responding mid‑tool‑call — no errors, just idles. High upvote count indicates broad impact.

4. **[#14520 – Config options for `opencode web` browser/launch behavior](https://github.com/anomalyco/opencode/issues/14520)**  
   *6 comments, 7 👍*  
   Users want control over whether the browser auto‑opens on startup and which default browser is used. Strong community desire.

5. **[#18224 – Allow editing custom providers from model settings](https://github.com/anomalyco/opencode/issues/18224)**  
   *3 comments, 11 👍*  
   Highest‑voted open feature request. Custom providers can be added but not updated afterward – users want inline editing of API keys, base URLs, etc.

6. **[#21690 – Add Quartaly as a recognized provider](https://github.com/anomalyco/opencode/issues/21690)**  
   *3 comments, 0 👍*  
   Quartaly offers an OpenAI/Anthropic‑compatible API with models like `claude-opus-4-6-thinking` and `gpt‑5.4`. Currently invisible to `opencode models`.

7. **[#16570 – Model caught on a reasoning loop](https://github.com/anomalyco/opencode/issues/16570)**  
   *5 comments, 1 👍*  
   The model keeps thinking the same thoughts and never implements planned changes. Reproducible with “plan mode” and long sessions.

8. **[#20978 – TUI thinking spinner not spinning](https://github.com/anomalyco/opencode/issues/20978)**  
   *4 comments, 0 👍*  
   Static Braille pattern dots instead of a rotating animation. Affects Ghostty, iTerm2, and likely other terminals.

9. **[#27008 – Copy image capability (like Claude)](https://github.com/anomalyco/opencode/issues/27008)**  
   *3 comments, 0 👍*  
   Wishes to paste an image directly into the TUI prompt and have the model read its text – aligning with Claude’s image‑to‑text feature.

10. **[#27027 – Skill discovery follows symlinks into large directories](https://github.com/anomalyco/opencode/issues/27027)**  
    *2 comments, 0 👍*  
    `followSymlinks: true` causes 120s+ cold starts on NFS when a skill directory symlinks into a deep tree. Performance bug for users with linked workspaces.

---

## Key PR Progress (10 highlights)

1. **[#36488 – fix(session-ui): escape direction:rtl bidi issue](https://github.com/anomalyco/opencode/pull/36488) (OPEN)**  
   Wraps path text with LRE/PDF Unicode marks to correct misplaced dots in RTL environments. Follow‑up to earlier fix `#9591`.

2. **[#36470 – fix(tui): Windows clipboard – use PowerShell directly for text paste](https://github.com/anomalyco/opencode/pull/36470) (CLOSED)**  
   Solves Ctrl+V not working in Admin terminal and fixes text shrinking on copy. Essential fix for Windows users.

3. **[#36475 – fix(cli): keep update preflight through TUI loading](https://github.com/anomalyco/opencode/pull/36475) (CLOSED)**  
   Prevents a blank terminal gap between the update check footer and the fully loaded TUI.

4. **[#36478 – fix(cli): preserve server startup failure cause](https://github.com/anomalyco/opencode/pull/36478) (OPEN)**  
   When the background service fails to register, the CLI now prints actionable error messages instead of raw Effect stack traces.

5. **[#35985 – fix(provider): derive reasoning variants from models.dev](https://github.com/anomalyco/opencode/pull/35985) (OPEN)**  
   Moves reasoning‑variant definitions to the `models.dev` schema, enabling per‑provider effort/budget mappings. Cleaner model configuration.

6. **[#36480 – fix(tui): improve subagent picker states](https://github.com/anomalyco/opencode/pull/36480) (OPEN)**  
   Keeps Ctrl‑B backgrounding working in the V2 picker, adds distinct spinners for foreground vs. background agents.

7. **[#35762 – fix(tui): restore subagent navigation](https://github.com/anomalyco/opencode/pull/35762) (OPEN)**  
   Closes `#34457` and partially fixes `#32432` and `#15972` – brings back ability to navigate into child subagent sessions.

8. **[#36477 – fix(core): settle malformed tool input on failure](https://github.com/anomalyco/opencode/pull/36477) (CLOSED)**  
   Previously, malformed streamed tool JSON left the call unresolved until the next prompt, creating double‑failure entries. Now one truthful failure.

9. **[#36476 – fix(opencode): add GPT‑5.6 family](https://github.com/anomalyco/opencode/pull/36476) (OPEN)**  
   Adds the new GPT‑5.6 model names to the OpenAI plugin’s model list. Closes `#36140` and `#36427`.

10. **[#36471 – feat(tui): paste clipboard on right click](https://github.com/anomalyco/opencode/pull/36471) (OPEN)**  
    Closes `#36456` – with mouse capture enabled, right‑click dispatches `prompt.paste`, matching standard editor conventions.

---

## Feature Request Trends

The strongest signal from today’s issues is **customization and extensibility**. Users consistently ask for more control over:
- **Provider configuration** – inline editing of custom providers (#18224, 11 👍) and adding new providers like Quartaly (#21690).
- **TUI/Web control** – browser launch preferences (#14520, 7 👍), right‑click context menus in file explorer (#26918), and smooth auto‑follow during streaming (#26493).
- **Session management** – `/restart` commands (#18495), fork sessions with parent IDs (#16639).
- **Context window transparency** – visible compaction signals (#27037) and compression‑loss indicators (#23628).
- **Media support** – copy/paste images into prompts (#27008).

The common thread: power users want to mould OpenCode’s behavior and UI to their own workflows, not rely on defaults.

---

## Developer Pain Points

Recurring frustrations in today’s data:

- **Platform‑specific bugs** – Windows users face clipboard issues (#36470), model/dialog loading failures (#21581), and NumLock key input problems (#27138).
- **Model reliability** – Several reports of models stuck in reasoning loops (#16570, #27062) or failing after updates (#24899). The invisible auto‑compaction (#27037) wastes tokens and confuses the model.
- **Configuration fragility** – Pinning providers (#10557) and rebinding keys (#26074) don’t always stick, and the config cannot be easily edited after setup (#18224).
- **Performance penalties** – Symlink‑following in skill discovery causes 120s+ cold starts on slow filesystems (#27027). Desktop app also faces a loading freeze due to CORS header restrictions (#27052).
- **Session state anomalies** – Session timestamps spontaneously updating (#27048) and projects disappearing after restart (#25037) erode trust in local data.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-07-12

## Today's Highlights

The Pi ecosystem saw a burst of GPT-5.6 model integration activity across multiple providers, with the community rapidly adding support for OpenAI's new Sol/Terra/Luna family. A critical bug affecting tool result routing during tree navigation was identified and fixed within hours. Meanwhile, the extension API continues to mature with several proposals for deferred reload, compaction control, and RPC attachment delivery.

## Releases

No new releases in the last 24 hours.

## Hot Issues

1. **[#6475 – Add GPT-5.6 (Sol/Terra/Luna) to the GitHub Copilot provider catalog](https://github.com/earendil-works/pi/issues/6475)** (8 👍, 9 comments, CLOSED)
   Immediate community adoption of OpenAI's new model family. The fast closure suggests maintainers are prioritizing GPT-5.6 support across all providers.

2. **[#6097 – Add support for 'max' thinking level](https://github.com/earendil-works/pi/issues/6097)** (18 👍, 4 comments, CLOSED)
   Highest-voted issue this week. GPT-5.6 Sol introduces a sixth thinking tier; community strongly wants parity with Anthropic's Opus-level reasoning controls.

3. **[#5916 – Support provider extensions with model aliases and improve search](https://github.com/earendil-works/pi/issues/5916)** (0 👍, 12 comments, OPEN)
   Long-running discussion about OpenRouter provider configuration gaps. Users want UI support for model overrides and better provider search, currently limited to manual `models.json` hacks.

4. **[#6206 – Clamping to context window prevents artificial context limits](https://github.com/earendil-works/pi/issues/6206)** (0 👍, 9 comments, CLOSED)
   Subtle regression where `max_tokens` clamping broke user-set artificial context limits. Important for power users who manage token budgets manually.

5. **[#6456 – ctrl-p should show previous prompt / input](https://github.com/earendil-works/pi/issues/6456)** (0 👍, 4 comments, CLOSED)
   UX friction from Codex/Claude migrants: Pi uses Ctrl+P for model switching, breaking a decades-old terminal convention. Community expects shell-like history navigation.

6. **[#6502 – Windows Terminal scrolls to top when pi-tui sends ESC[3J](https://github.com/earendil-works/pi/issues/6502)** (0 👍, 4 comments, OPEN)
   Windows-specific annoyance: TUI redraws include a scrollback-clear sequence that breaks normal terminal behavior on Windows Terminal. Affects daily usability.

7. **[#6459 – Custom keybindings not applied on initial session start](https://github.com/earendil-works/pi/issues/6459)** (0 👍, 3 comments, OPEN)
   Extension ecosystem pain point: user-configured keybindings from `keybindings.json` only work after `/reload`. Affects extension developers like pi-powerline-footer users.

8. **[#6510 – Copilot mai-code-1-flash-picker doesn't work in pi due to wrong API endpoint](https://github.com/earendil-works/pi/issues/6510)** (0 👍, 5 comments, CLOSED)
   Model routing issue: Copilot's MAI-Code model requires the `/responses` endpoint, not `/chat/completions`. Quickly identified and patched.

9. **[#6524 – Hide GPT-5.6 reasoning-summary empty placeholders](https://github.com/earendil-works/pi/issues/6524)** (0 👍, 3 comments, OPEN)
   Cosmetic but noticeable: GPT-5.6 Terra/Sol reasoning blocks show empty HTML comments. Points to a difference in reasoning summary format compared to earlier models.

10. **[#6558 – Tool result attaches to wrong branch after tree navigation](https://github.com/earendil-works/pi/issues/6558)** (0 👍, 2 comments, CLOSED)
    Critical data integrity bug: `/tree` branch switches during active tool execution can orphan tool results. Fixed by the PR that appeared simultaneously.

## Key PR Progress

1. **[#6559 – Fix/tree navigation pending tools](https://github.com/earendil-works/pi/pull/6559)** (CLOSED)
   Prevents `/tree` from switching branches while agent/tool is running. Includes regression tests for idle/cancel/abort flows. Direct fix for #6558.

2. **[#6556 – Expose Codex responses API to extensions](https://github.com/earendil-works/pi/pull/6556)** (CLOSED)
   Opens OpenAI Codex WebSocket session management to extension developers, with documented cleanup helpers and Bun virtual module support.

3. **[#6534 – Add developer message role (experimental)](https://github.com/earendil-works/pi/pull/6534)** (OPEN)
   Experimental PR from mitsuhiko adding a developer message role per RFC 54. Could enable new tool orchestration patterns.

4. **[#6551 – Add deferred extension reload requests](https://github.com/earendil-works/pi/pull/6551)** (CLOSED)
   Extension API improvement: `ExtensionContext.requestReload()` lets event handlers and tools request safe, coalesced reloads without disrupting streaming or compaction.

5. **[#6496 – Support OpenRouter session affinity](https://github.com/earendil-works/pi/pull/6496)** (OPEN)
   Adds sticky sessions for prompt caching on OpenRouter, which uses different headers than OpenAI. Important for users relying on OpenRouter's cache.

6. **[#6533 – Fix Codex compaction "Model not found" for gpt-5.6-luna](https://github.com/earendil-works/pi/pull/6533)** (OPEN)
   Compaction fails on gpt-5.6-luna via Codex API due to internal model ID mapping issues. Regular chat works, but compaction and summarization don't.

7. **[#6544 – Route GitHub Copilot MAI-Code models through /responses endpoint](https://github.com/earendil-works/pi/pull/6544)** (OPEN)
   Companion fix to #6538: sends `mai-*` models to the correct Copilot API endpoint. Validated with mai-code-1-flash-picker.

8. **[#6523 – Fix legacy Alt-prefixed symbol key handling](https://github.com/earendil-works/pi/pull/6523)** (CLOSED)
   Fixes keyboard shortcuts like `Alt+,` on legacy terminals. Only letters/digits worked before; symbol keys now recognized when Kitty protocol is unavailable.

9. **[#6341 – Support constrained sampling (experimental)](https://github.com/earendil-works/pi/pull/6341)** (OPEN)
   Adds opt-in JSON-schema constrained sampling for tool arguments, exposed as `strict` mode. Could improve tool call reliability significantly.

10. **[#6540 – Surface provider errors to LLM via advisories](https://github.com/earendil-works/pi/pull/6540)** (CLOSED)
    Fixes silent error dropping in serializer. Provider errors (context overflow, compaction failure) now visible to the LLM, enabling recovery. Critical for reliability.

## Feature Request Trends

**GPT-5.6 Ecosystem Integration** dominates this week's requests: adding the model family to every provider (Copilot, OpenAI Codex), supporting the new "max" thinking level, handling empty reasoning summaries, and enabling GPT-5.6-specific prompt caching options.

**Extension API Expansion** is the second major theme: developers want deferred reload (`requestReload`), post-turn compaction hooks, opaque RPC attachments for audio/files, and better import path support for `@pi-ai/api` subpaths.

**Provider Expansion & Routing** continues steadily: requests for an LLM Gateway built-in provider, a "auto" pseudo-model for GitHub Copilot Free/Student tiers, Cloudflare Workers AI fixes, and OpenRouter session affinity.

## Developer Pain Points

1. **Configuration persistence gaps**: CLI options (`-t`, `--system-prompt`) don't survive session restart (#6498); compaction disabled flag is bypassed by overflow recovery (#6472).
2. **Terminal UX regressions**: Ctrl+P breaks shell history expectations (#6456); Windows Terminal scrolls to top on redraw (#6502); SelectList option descriptions truncate mid-word (#6560).
3. **Extension development friction**: Custom keybindings require `/reload` on first start (#6459); public API subpaths unimportable by extensions (#6557); typebox/schema module resolution failures (#6512).
4. **Provider-specific quirks**: GLM models fail on Cloudflare Workers (#6494); Codex cached WebSocket leaks across account changes (#6513); `PI_SKIP_VERSION_CHECK` breaks `pi update` (#6549).
5. **Model compatibility gaps**: MAI-Code models hit wrong API endpoint (#6510); GPT-5.6-luna compaction returns 404 (#6533); constrained sampling and developer message role remain experimental (#6341, #6534).

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-07-12

## Today’s Highlights
The community is heavily focused on the **multi-workspace daemon RFC** (#6378), which proposes extending `qwen serve` to manage multiple workspaces from a single process. Meanwhile, several critical bugs were closed or addressed: the macOS clipboard image paste failure (#6590) and a JetBrains ACP integration issue (#6581). On the PR side, a fix for deferred tool discovery to stabilize prompt caching (#6723) and a rework of the `/review` skill with procedural correctness finders (#6711) stand out as significant quality-of-life improvements.

## Releases
*No new releases in the last 24 hours.*

## Hot Issues
1. **[#6378 – RFC: Support multiple workspaces in one qwen serve daemon](https://github.com/QwenLM/qwen-code/issues/6378)**  
   High-activity RFC proposing a 1‑daemon → N‑workspaces model while preserving backward compatibility. Community discussion (20 comments) explores session isolation, workspace registration, and API implications.

2. **[#6565 – “连接到 Qwen Coder 时出现问题” Internal Error](https://github.com/QwenLM/qwen-code/issues/6565)**  
   Multi-language error message (Chinese, Japanese, English) with no clear cause yet. Closed after being marked `needs-information` – likely environment-specific.

3. **[#6581 – JetBrains ACP agent does not receive user prompt](https://github.com/QwenLM/qwen-code/issues/6581)**  
   Qwen Code as an AI agent in IntelliJ IDEA fails to forward user prompts, only sends bootstrap context. A blocking issue for IDE users; closed with a fix expected.

4. **[#6590 – Ctrl+V paste image fails on macOS standalone install](https://github.com/QwenLM/qwen-code/issues/6590)**  
   Root cause identified: native module `@teddyzhu/clipboard` missing from standalone package. Debug logger swallows the error. Marked `welcome-pr` – a quick fix opportunity.

5. **[#6654 – API Error: tool_use blocks missing corresponding tool_result](https://github.com/QwenLM/qwen-code/issues/6654)**  
   Core protocol mismatch causing session failures for multi-turn tool calls. Community suspects ordering or caching issue; closed with a fix merged.

6. **[#6721 – Keep deferred tool discovery from invalidating prompt cache prefixes](https://github.com/QwenLM/qwen-code/issues/6721)**  
   Each hidden deferred tool resolution calls `setTools()`, breaking prompt caching. Open with 4 comments – the fix is already in PR #6723.

7. **[#6666 – Qwen 3.7 Max returns `<think>` tags in `content` instead of `reasoning_content`](https://github.com/QwenLM/qwen-code/issues/6666)**  
   DashScope API inconsistency: thinking output appears in the wrong field. Affects downstream parsing and UI rendering.

8. **[#6487 – Memory index stale after /remember; content lost on compaction](https://github.com/QwenLM/qwen-code/issues/6487)**  
   Two independent memory degradation bugs: the `MEMORY.md` index not refreshed in system instructions, and managed-memory content cleared by microcompaction. Open, marked `needs-triage`.

9. **[#6639 – MCP servers with HTTP transport show as offline on 401](https://github.com/QwenLM/qwen-code/issues/6639)**  
   OAuth recovery not triggered for HTTP-based MCP servers returning 401 Unauthorized. Affects users with custom MCP integrations; closed with a PR referenced.

10. **[#6710 – Distinguish user-cancelled turns from unexpected interruption after restore](https://github.com/QwenLM/qwen-code/issues/6710)**  
    Daemon cannot tell if a restored session was cancelled by the user or interrupted. PR #6727 aims to add a durable cancellation marker.

## Key PR Progress
1. **[#6723 – fix(prompt-cache): stabilize deferred tool calls](https://github.com/QwenLM/qwen-code/pull/6723)**  
   Keeps provider tool declarations stable after deferred tool discovery by returning schema as model-visible content instead of calling `setTools()`. Directly addresses #6721.

2. **[#6747 – perf(core): lazy-load web-tree-sitter runtime](https://github.com/QwenLM/qwen-code/pull/6747)**  
   Moves `web-tree-sitter` from static import to first-use dynamic import, preserving regex fallback and improving startup time.

3. **[#6741 – feat(cli): Add runtime daemon channel control](https://github.com/QwenLM/qwen-code/pull/6741)**  
   Enables enable, replace, query, reload, and stop of daemon channel workers via HTTP, SDK, or `qwen channel` CLI – critical for multi-channel workflows.

4. **[#6019 – feat(cli): add /model --compaction for configurable chat compression model](https://github.com/QwenLM/qwen-code/pull/6019)**  
   Allows users to set a dedicated model for chat auto-compaction. Long-running PR (since June 29) with ongoing refinement.

5. **[#6725 – feat(web-shell): show current git branch in composer toolbar](https://github.com/QwenLM/qwen-code/pull/6725)**  
   Implements the git branch indicator part of the Web Shell toolbar redesign (#6699).

6. **[#6638 – feat(serve): add extension management v2](https://github.com/QwenLM/qwen-code/pull/6638)**  
   Additive capability for `qwen serve`: extensions are shared across workspaces, activation controlled by global default + per-workspace policy.

7. **[#6711 – feat(review): procedural correctness finders, effort levels, and guardrails](https://github.com/QwenLM/qwen-code/pull/6711)**  
   Major rework of `/review` skill’s finder layer with precision/cost controls. Only changes to prompts/design docs – no runtime code.

8. **[#6451 – refactor(cli): rewrite Fleet View to match Claude Code agent view UI](https://github.com/QwenLM/qwen-code/pull/6451)**  
   Multi-session Fleet View rewritten for consistency with Claude Code pattern. Includes CI fixes and improved agent view.

9. **[#6740 – feat(serve): add workspace persisted transcript reader](https://github.com/QwenLM/qwen-code/pull/6740)**  
   REST pager for active transcripts – trusted and registered untrusted workspaces can read transcript projections without attaching to a session.

10. **[#6727 – fix(acp): preserve explicit cancellation across restore](https://github.com/QwenLM/qwen-code/pull/6727)**  
    Adds a durable `system/turn_cancelled` marker so daemon restores keep user-initiated cancellations. Addresses #6710.

## Feature Request Trends
- **Multi-workspace daemon** (#6378, #6726, #6646) – most discussed feature, expanding the 1‑daemon model to N workspaces while maintaining backwards compatibility.
- **Session recovery & continuation** (#6695, #6730, #6710) – demand for automatic resumption of interrupted turns after daemon restart or environment reset.
- **Web Shell UI improvements** (#6699, #6744, #6725) – composer toolbar enhancements (workspace switch, git branch, custom colors for groups).
- **Inline model switching** (#5967) – ability to switch model and send prompt in one line (`/model <id> <prompt>`).
- **Session organization mutations** (#6646) – write-side support for pinning, grouping, and archiving sessions in non-primary workspaces.

## Developer Pain Points
- **Authentication & connection errors** – recurring issues with Qwen Coder connection errors (#6565), DashScope stream failures (#6670), and MCP OAuth recovery (#6639) frustrate new users.
- **Tool reliability** – `read_file` rendering artifacts (#4077) and `tool_use`/`tool_result` mismatches (#6654) break agent workflows; users report failed edits due to rendering inconsistency.
- **Memory degradation** – stale memory index after `/remember` and managed-memory content cleared by microcompaction (#6487, #6713) harm long-session stability.
- **macOS packaging gaps** – missing native clipboard module in standalone build (#6590) blocks image paste; users have to rebuild or use workarounds.
- **JetBrains integration** – ACP agent not receiving user prompts (#6581) remains a blocker for IDE users, despite being marked closed.
- **Subagent crashes** – `${0}` in agent definition files crashes subagents due to template engine interpretation (#6671), a subtle but impactful edge case.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-07-12

## Today's Highlights
No new releases were published today. The community is actively addressing Anthropic API compliance issues (tool schema validation and cache write billing), with two targeted PRs in review. Cross-platform support continues to improve with a NetBSD build fix and a Korean translation PR. The volume of recent activity (10+ PRs/day on the broader CodeWhale project) is reflected in a proposed workflow to help contributors stay in sync with `main`.

## Releases
None.

## Hot Issues

1. **[#4350] Cargo Build on Android/Termux fails due to missing rquickjs bindings**  
   *[Bug, enhancement, question, tui]*  
   Build error on `aarch64-linux-android`. The `rquickjs` crate doesn’t ship pre-generated bindings for this target. A workaround or upstream fix is needed.  
   [GitHub](https://github.com/Hmbown/CodeWhale/issues/4350)

2. **[#4345] Key bindings are unfriendly — cannot be used in terminal?**  
   *[Bug, workflow-runtime]*  
   User reports that certain key combinations (e.g., Ctrl+something) block terminal-based usage. Suggests redesigning input handling. Minimal discussion so far.  
   [GitHub](https://github.com/Hmbown/CodeWhale/issues/4345)

3. **[#4329] Anthropic API error: missing `tool_result` blocks**  
   *[Bug, enhancement]*  
   HTTP 400 error when tool use IDs are not immediately followed by a `tool_result` block. This blocks any workflow using Anthropic tools. Workaround being explored in PR #4346.  
   [GitHub](https://github.com/Hmbown/CodeWhale/issues/4329)

4. **[#4227] Workflow proposal: CodeWhale dev environment setup helper**  
   *[Documentation, enhancement, question, workflow-runtime, subagents]*  
   A skill/workflow to pull latest main, rebuild, and configure a contributor’s environment. Aimed at keeping pace with high project velocity (10+ PRs/day). Community reactions: positive, 5 comments.  
   [GitHub](https://github.com/Hmbown/CodeWhale/issues/4227)

## Key PR Progress

1. **[#4351] fix(scorecard): bind costs to provider routes**  
   Resolves USD cost resolution for Codex OAuth, self-hosted, and unpriced gateway routes by accepting optional provider provenance in offline records.  
   [GitHub](https://github.com/Hmbown/CodeWhale/pull/4351)

2. **[#4349] Update Cargo.toml to allow build under NetBSD**  
   Generates rquickjs bindings for NetBSD (also relevant for FreeBSD, OpenBSD, DragonFly). Unblocks builds on BSD platforms.  
   [GitHub](https://github.com/Hmbown/CodeWhale/pull/4349)

3. **[#4348] fix(tui): bill Anthropic cache-write tokens at published rates**  
   Correctly categorizes `cache_creation_input_tokens` as `prompt_cache_write_tokens` and exposes 5-minute write rates in TUI currency pricing.  
   [GitHub](https://github.com/Hmbown/CodeWhale/pull/4348)

4. **[#4347] i18n: add Korean (ko) locale support**  
   New Korean translation file with 752 keys. Helps Korean-speaking users interact with the TUI in their native language.  
   [GitHub](https://github.com/Hmbown/CodeWhale/pull/4347)

5. **[#4346] fix: sanitize tool input_schema for Anthropic adapter**  
   Strips unsupported top-level `oneOf`/`anyOf`/`allOf` from tool schemas to prevent HTTP 400 errors. Direct fix for issue #4329.  
   [GitHub](https://github.com/Hmbown/CodeWhale/pull/4346)

## Feature Request Trends

- **Cross-platform builds** – Android (Termux) and BSD support are recurring blockers, indicating demand for mobile/alternative OS usage.
- **Workflow automation for contributors** – High-velocity projects need streamlined dev environment setup (see #4227); this could evolve into a general “onboarding workflow” feature.
- **Localization (i18n)** – Korean translation contribution follows earlier language additions, suggesting ongoing community-led internationalization efforts.
- **Anthropic protocol compliance** – Tool use schema validation and cache token handling are being actively addressed, driven by real API errors.

## Developer Pain Points

- **Anthropic tool use protocol strictness** – HTTP 400 errors due to missing `tool_result` blocks or unsupported schema constructs cause frequent workflow failures. Two PRs (#4346, #4348) aim to resolve this.
- **Crate dependency gaps** – `rquickjs` lacks bindings for non-mainstream targets (Android, BSD), forcing manual workarounds.
- **Terminal key binding conflicts** – Input handling that blocks terminal-based usage frustrates users who rely on keyboard shortcuts.
- **Build environment velocity** – With 10+ PRs/day, staying on `main` is time-consuming – the proposed helper workflow (#4227) would reduce friction.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/boom7sss/agents-radar).*