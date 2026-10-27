# AI CLI Tools Community Digest 2026-07-29

> Generated: 2026-07-29 03:17 UTC | Tools covered: 9

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

# Cross-Tool AI CLI Ecosystem Comparison Report — July 29, 2026

## 1. Ecosystem Overview

The AI CLI developer tools landscape remains in a high-velocity phase of maturation, characterized by rapid feature iteration alongside persistent cross-platform stability gaps. Nine major tools are actively maintained, with the strongest momentum concentrated in the Claude Code, OpenAI Codex, and Gemini CLI ecosystems, each receiving hundreds of community issues daily. A unifying theme across all tools is the tension between developer desire for autonomous agent workflows and the practical challenges of session management, context window limits, and reliable multi-agent orchestration. Windows support continues to be the dominant reliability weak point across the entire ecosystem. MCP (Model Context Protocol) integration is emerging as a critical interoperability layer, but its implementation across tools remains uneven and bug-prone.

## 2. Activity Comparison

| Tool | Hot Issues (today) | Active PRs (today) | Releases (last 24h) |
|---|---|---|---|
| Claude Code | 10 | 3 | 0 |
| OpenAI Codex | 10 | 10 | 3 |
| Gemini CLI | 10 | 10 | 3 |
| GitHub Copilot CLI | 10 | 1 | 1 |
| Kimi Code CLI | 6 | 7 | 0 |
| OpenCode | 10 | 10 | 2 |
| Pi | 10 | 10 | 0 |
| Qwen Code | 10 | 10 | 2 |
| DeepSeek TUI | 10 | 10 | 0 |

OpenAI Codex, Gemini CLI, and Qwen Code show the highest development velocity with multiple releases in a single day. Claude Code and Pi had no releases but maintain high community engagement through issue volume. DeepSeek TUI and Kimi Code CLI show lower throughput but are actively fixing critical bugs.

## 3. Shared Feature Directions

The following requirements appear across multiple tools, indicating ecosystem-wide demand:

**Session lifecycle management:**
- Claude Code, OpenCode, and Pi all face compaction reliability issues—users need deterministic context window management
- Claude Code requests programmatic `/compact`; Pi reports compaction never triggering; OpenCode's compaction crashes with LM Studio
- Multiple tools need better session persistence and cross-device resume (Claude Code, OpenAI Codex, Copilot CLI)

**Multi-agent orchestration & subagent control:**
- OpenAI Codex (#32031) and Gemini CLI (#22323, #22093) both struggle with subagent configuration visibility and permission enforcement
- OpenCode (#29638) and Claude Code (#79177) report subagents not respecting parent constraints
- Users across tools want concurrent execution (OpenCode), graceful failure propagation (Gemini CLI), and transparent model assignment (Codex)

**Windows reliability:**
- Claude Code, OpenAI Codex, Copilot CLI, Kimi Code, OpenCode, Pi, Qwen Code, and DeepSeek TUI all have open Windows-specific crash or hang issues
- Common failures: GPU process crashes (Claude Code #80999, Codex #34133), shell pipe hangs (OpenCode #24784), MSIX corruption (Claude Code #82134), CRLF handling (DeepSeek TUI #4764), and path normalization (Pi #7064, Codex #35851)

**MCP integration robustness:**
- Claude Code (#82096), Gemini CLI (#28481), OpenCode (#29939), and Kimi Code (#2539) all report MCP OAuth, reconnection, or resource management issues
- Users consistently request auto-reconnect (Codex #11489), process isolation (OpenCode), and broader protocol compatibility (Qwen Code #7984)

**Provider & model flexibility:**
- Gemini CLI, OpenCode, Pi, and Qwen Code receive requests for automatic model discovery, custom API endpoints, and local inference support
- Pi (#6922) and OpenCode (#25084) expressly want llama.cpp and alternative provider integration

**Security & permission hygiene:**
- Claude Code (#74301) and Kimi Code (#708) highlight self-undermining guardrails where agents instruct users to bypass restrictions
- Gemini CLI (#28403) actively hardening against variable expansion bypasses
- Multiple tools are implementing attestation/SBOM (DeepSeek TUI #4958) and plugin provenance (Claude Code #77709)

## 4. Differentiation Analysis

**Feature focus differences:**

| Tool | Primary Differentiator | Target User |
|---|---|---|
| Claude Code | Session limit & permission management | Enterprise DevOps |
| OpenAI Codex | Multi-agent orchestration, plugin marketplace | Power users, platform builders |
| Gemini CLI | Automation pipelines, PR generation | CI/CD teams, site reliability |
| GitHub Copilot CLI | Voice mode, scheduled prompts, credit limits | GitHub-native workflow users |
| Kimi Code CLI | Enterprise gateway support, hook system | Asian enterprise, compliance teams |
| OpenCode | DeepSeek+OpenRouter integration, TUI richness | Cost-conscious developers, multi-provider users |
| Pi | Provider agnosticism, extension system | Tinkerers, self-hosters, local inference |
| Qwen Code | Code review automation, GenAI compliance | Chinese ecosystem, review-heavy workflows |
| DeepSeek TUI | LSP integration, zero-config setup | Terminal purists, minimalists |

**Technical approach divergence:**

- **Session architecture**: OpenAI Codex and Claude Code rely on cloud session management with quotas; Pi and OpenCode favor local-first persistence; Gemini CLI is hybrid with Firestore backends
- **Agent parallelism**: OpenAI Codex pushes concurrent subagents via v2 API; Gemini CLI and Claude Code prefer sequential with explicit delegation; OpenCode community demands parallelism but tooling hasn't caught up
- **Plugin systems**: Codex and Claude Code have marketplace-based plugins; Pi and Kimi Code use file-system extension loading; OpenCode and DeepSeek TUI have minimal plugin surfaces
- **Security model**: Claude Code leads with auto-mode permission classification; Gemini CLI invests in SSRF/shell injection hardening; DeepSeek TUI controversially offers zero-sandbox escape hatch

**Target user divergence:** Codex and Claude Code compete for professional developers with substantial budgets. Pi and OpenCode court cost-sensitive and multi-provider users. Gemini CLI and Qwen Code target automated pipeline users. DeepSeek TUI and Kimi Code CLI serve niche ecosystems (terminal purists, Asian enterprise).

## 5. Community Momentum & Maturity

**Rapid iteration (high release cadence, many PRs):**
- **OpenAI Codex**: 3 releases today, 10 active PRs, strong plugin ecosystem growth—likely the most actively developed tool
- **Gemini CLI**: 3 releases, 10 PRs, significant security hardening and Firestore infrastructure work
- **Qwen Code**: 2 releases, 10 PRs, focused on dogfooding-driven `/review` improvements

**High community engagement (many issues, passionate user base):**
- **Claude Code**: 827 comments on a single issue (#38335) indicates extreme user frustration and high engagement. No releases today suggests Anthropic is bottlenecked on fixing plan quota bugs
- **Pi**: 10 hot issues, 10 PRs, but community is frustrated with compaction reliability—core workflow issues persist
- **OpenCode**: 10 issues, 10 PRs, community is active but fragmented across DeepSeek, SiliconFlow, and LM Studio backends

**Lower momentum (fewer releases, quieter community):**
- **GitHub Copilot CLI**: 1 release, 1 PR, but zombie process and session hang bugs resurface—development pace is slow relative to issue volume
- **Kimi Code CLI**: 0 releases, 7 PRs, but 2 long-standing issues closed today. Small but committed user base
- **DeepSeek TUI**: 0 releases, 10 PRs primarily focused on v0.9.2 stabilization—community is small but vocal

**Maturity signals:**
- Enterprise features (SBOM, GenAI compliance, plugin provenance) appearing in Claude Code, DeepSeek TUI, and Qwen Code suggest growing enterprise adoption
- Windows reliability remains the primary maturity gap across the board—no tool has solved it
- MCP integration is still experimental/breakage-prone in most tools, indicating the protocol is not yet production-ready for most teams

## 6. Trend Signals

**For technical decision-makers evaluating AI CLI tools:**

1. **Windows is still an afterthought.** Every tool has open Windows-specific crashes, hangs, or installation bugs. Teams running primarily on Windows should expect friction and plan for Linux/macOS fallback. If your organization is Windows-heavy, budget extra time for evaluation and workaround discovery.

2. **Session limit/credit exhaustion is the #1 user pain point.** Claude Code's #38335 (470 upvotes) and Codex's credit management complaints signal a systemic tension between vendor monetization models and developer workflows. Expect more transparent usage dashboards and pay-per-session models across tools.

3. **Multi-agent orchestration is emergent but immature.** Codex's v2 multi-agent API, Gemini CLI's subagent system, and OpenCode's parallelism requests all point to a future where AI agents delegate subtasks. However, every implementation has configuration bugs, permission gaps, and failure propagation issues. Early adopters should expect manual oversight.

4. **MCP is the connective tissue—but it's fragile.** The Model Context Protocol is becoming the standard for tool-server integration, but OAuth handling, reconnection logic, and process isolation are inconsistent. Teams should plan for MCP server management overhead and have fallback paths.

5. **Provider agnosticism is a competitive advantage.** Tools that support multiple LLM providers (Pi, OpenCode, Gemini CLI) are gaining traction over locked-in ecosystems. The open-sourcing of Kimi K3 and proliferation of inference APIs (Fireworks, SiliconFlow, Apiário) is driving demand for flexible provider configuration.

6. **Security is shifting from "block everything" to "auditable autonomy."** The debate between DeepSeek TUI's zero-sandbox request and Claude Code's bypass-coaching security flaw shows the industry struggling to balance developer freedom with safety. Expect graduated permission models (allow once/session/always) to become standard.

7. **Developer experience UX is improving but has regressions.** Multiple tools shipped TUI improvements (tab glow, pinning, inline images) while simultaneously introducing navigation bugs (OpenCode, Qwen Code). UI polish is important but should not come at the cost of core workflow stability.

**Key recommendation for adopters:** If you need reliable Windows support today, no tool fully delivers—prioritize tools with active Windows issue tracking (Codex, Claude Code) and check regression frequency. If multi-agent workflows are critical, OpenAI Codex has the most mature implementation despite configuration UX regressions. If cost flexibility matters, Pi and OpenCode offer the broadest provider support with active development.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report

*Data as of 2026-07-29 | Source: [anthropics/skills](https://github.com/anthropics/skills)*

---

## 1. Top Skills Ranking (Most-Discussed Pull Requests)

The following PRs have attracted the most attention on the repository. All remain **open** and under active review.

1. **[#1298 – Fix skill-creator `run_eval.py` recall bug](https://github.com/anthropics/skills/pull/1298)**  
   **Functionality:** Repairs the core evaluation script used by the description-optimization loop. The bug caused `recall=0%` on every query, making `run_loop.py` and `improve_description.py` optimize against noise. Includes fixes for Windows stream reading, trigger detection, and parallel workers.  
   **Discussion highlights:** Ties together multiple upstream issues (#556, #1169, #1061). Community has independently reproduced the 0% recall problem at least 10 times.  
   **Status:** Open, high priority.

2. **[#514 – Add document-typography skill](https://github.com/anthropics/skills/pull/514)**  
   **Functionality:** Prevents orphan word wrap, widow paragraphs, and numbering misalignment in AI-generated documents – a cross-cutting quality gap.  
   **Discussion highlights:** Received strong interest for solving a universal problem that “affects every document Claude generates.”  
   **Status:** Open.

3. **[#538 – Fix case-sensitive file references in PDF skill](https://github.com/anthropics/skills/pull/538)**  
   **Functionality:** Corrects 8 case-sensitivity mismatches in `skills/pdf/SKILL.md` that break on case-sensitive file systems (e.g., Linux, macOS).  
   **Discussion highlights:** Illustrates an ongoing tension between platform portability and developer conventions.  
   **Status:** Open.

4. **[#1367 – Add self-audit skill with mechanical verification + reasoning quality gate](https://github.com/anthropics/skills/pull/1367)**  
   **Functionality:** A meta-skill that audits AI output before delivery, checking claimed files exist mechanically and then running a four-dimension reasoning audit in severity order.  
   **Discussion highlights:** Proposes a universal pipeline that works with any project or model. Relates to Issue #1385 (Quality Gate Pipeline proposal).  
   **Status:** Open.

5. **[#723 – Add testing-patterns skill](https://github.com/anthropics/skills/pull/723)**  
   **Functionality:** Comprehensive testing guidance covering Testing Trophy philosophy, AAA pattern, React component tests, CLI tests, and property-based testing.  
   **Discussion highlights:** Addresses a clear community need for structured testing instruction; likely to be merged once refined.  
   **Status:** Open.

6. **[#525 – Add Pyxel skill for retro game development](https://github.com/anthropics/skills/pull/525)**  
   **Functionality:** Integrates with pyxel-mcp (MCP server for the Pyxel retro game engine) to support iterative pixel-art game creation.  
   **Discussion highlights:** Created by the Pyxel engine author (kitao), giving it deep domain authority.  
   **Status:** Open (updated July 15).

7. **[#1479 – Add plan-file-hygiene skill](https://github.com/anthropics/skills/pull/1479)**  
   **Functionality:** Addresses accumulation of planning artifacts (`.md` plan files) by introducing a lifecycle policy – a problem named and framed by community members.  
   **Discussion highlights:** Explicitly credits two community members for problem framing. Collaborative tone suggests a smooth merge path.  
   **Status:** Open (very recent – July 25).

8. **[#1302 – Add color-expert skill](https://github.com/anthropics/skills/pull/1302)**  
   **Functionality:** Self-contained color expertise covering naming systems (ISCC-NBS, Munsell, RAL, XKCD), color spaces (OKLCH, CIELAB), contrast calculations, and palette generation.  
   **Discussion highlights:** Useful for designers, data visualizers, and accessibility checkers. Wide applicability.  
   **Status:** Open.

---

## 2. Community Demand Trends (from Issues)

The most discussed issues reveal three clear currents of demand:

| Theme | Key Issues | Details |
|-------|------------|---------|
| **Tooling & Reliability** | #556, #1169, #1061, #202, #189 | The `skill-creator` evaluation pipeline is the biggest pain point: `recall=0%` bugs, Windows incompatibility, duplicate installations. Users are actively blocked from optimizing their skills. |
| **Security & Governance** | #492, #1175, #412 | Trust boundary abuse (community skills masquerading as Anthropic official), SharePoint permission handling, and a proposed `agent-governance` skill. Users want safety, auditability, and namespace clarity. |
| **New Skill Directions** | #1329, #412, #1385, #16 | Explicit proposals for: **compact-memory** (symbolic notation to reduce context usage), **agent-governance** (policy enforcement), **reasoning quality gate pipeline**, and exposing skills as **MCPs**. These indicate a shift from single-purpose skills toward systemic, protocol-level capabilities. |
| **Organization & Sharing** | #228 | Enterprise users demand org-wide skill sharing without manual file transfers. High 👍 count (8). |

**Distilled takeaway:** The community is pushing past “write a skill” toward **reliable tooling for skill creation**, **security hardening**, and **meta-skills that manage complexity** (context, memory, auditing).

---

## 3. High-Potential Pending Skills (Likely to Merge Soon)

Several PRs are actively discussed and address critical bugs or high-demand features. These are strong candidates for near-term inclusion:

- **Skill-creator reliability bundle:**  
  – [#1298](https://github.com/anthropics/skills/pull/1298) (main recall fix)  
  – [#1099](https://github.com/anthropics/skills/pull/1099) (Windows subprocess crash)  
  – [#1050](https://github.com/anthropics/skills/pull/1050) (Windows PATHEXT + encoding)  
  – [#1323](https://github.com/anthropics/skills/pull/1323) (trigger detection misses skill name)  
  – [#1261](https://github.com/anthropics/skills/pull/1261) (eval command files pollute live project)  
  These five fixes together resolve the core `run_eval` dysfunction across platforms.

- **New skills with clear community support:**  
  – [#514](https://github.com/anthropics/skills/pull/514) – document-typography (universal quality win)  
  – [#723](https://github.com/anthropics/skills/pull/723) – testing-patterns (fills a glaring gap)  
  – [#1479](https://github.com/anthropics/skills/pull/1479) – plan-file-hygiene (collaboratively defined)  
  – [#1367](https://github.com/anthropics/skills/pull/1367) – self-audit (addresses reasoning quality)

- **Utility/domain skills:**  
  – [#486](https://github.com/anthropics/skills/pull/486) – ODT (OpenDocument support for LibreOffice users)  
  – [#525](https://github.com/anthropics/skills/pull/525) – Pyxel retro games (author-driven, specialized but authoritative)  
  – [#1302](https://github.com/anthropics/skills/pull/1302) – color-expert (broad design community audience)

---

## 4. Skills Ecosystem Insight

**The community’s most concentrated demand is for a reliable, cross-platform skill-creation toolchain and meta-skills that manage output quality, security, and context efficiency – not more single-purpose skills.**

The volume of bug reports/PRs around `skill-creator` (0% recall, Windows crashes, trigger-detection gaps) dwarfs any single new skill proposal. Users want to *trust* their skill optimization pipeline before investing in new skills. Simultaneously, the most upvoted feature requests (org-wide sharing, MCP exposure, agent governance, quality gates) point toward an ecosystem that scales beyond one-off `.skill` files into managed, auditable, and shareable capabilities.

---

# Claude Code Community Digest — 2026-07-29

## Today's Highlights
The community is overwhelmingly focused on a single critical bug: Claude Max plan session limits are being exhausted abnormally fast, with **827 comments and 470 👍** on the report. No new releases landed in the last 24 hours. Several Windows-specific crashes (BSOD, MSIX corruption, browser-pane crashes) and a concerning security bypass-coaching issue in the auto-mode permission classifier have also drawn attention.

## Releases
No new releases in the last 24 hours.

## Hot Issues
*(10 most noteworthy issues, ordered by community engagement)*

1. **[BUG] Claude Max plan session limits exhausted abnormally fast**  
   [Issue #38335](https://github.com/anthropics/claude-code/issues/38335) — 827 comments, 470 👍  
   Users report that CLI-based Claude Pro/Max sessions burn through plan quotas in hours instead of days. The sheer volume of replies (updated today, created March 24) indicates this is the dominant unresolved frustration. No official fix has been acknowledged.

2. **[BUG] "Remote Control environments are not available for your account" for Pro plan users**  
   [Issue #29449](https://github.com/anthropics/claude-code/issues/29449) — 27 comments, 31 👍  
   A long-standing authentication/entitlement bug preventing Pro subscribers from using remote control features. Still open after five months.

3. **[FEATURE] Claude-invocable conditional /compact for automated workflows**  
   [Issue #19877](https://github.com/anthropics/claude-code/issues/19877) — 18 comments, 13 👍  
   Request for a programmatic way to trigger `/compact` to manage context window usage in scripts and CI pipelines. Indicates demand for headless workflow control.

4. **[BUG] Windows: hidden Browser-pane preview kills the app via Code Integrity block**  
   [Issue #80999](https://github.com/anthropics/claude-code/issues/80999) — 8 comments  
   A specific Windows crash triggered by packaged `vk_swiftshader.dll` being blocked by Code Integrity, followed by a corrupt "Repair" dialog. Affects corporate-managed devices with HVCI/Credential Guard.

5. **[BUG] Artifact sharing fails: "This version can't be shared publicly"**  
   [Issue #79824](https://github.com/anthropics/claude-code/issues/79824) — 3 comments, 14 👍  
   Publishing artifacts (e.g., Mermaid diagrams) fails persistently even after republishing. High upvote ratio suggests many users hit this when trying to share output.

6. **[BUG] MCP OAuth redirect_uri hardcodes `localhost` — breaks IdPs that allowlist only `127.0.0.1`**  
   [Issue #82096](https://github.com/anthropics/claude-code/issues/82096) — 2 comments, 4 👍  
   Tools relying on MCP with strict OAuth identity providers (e.g., corporate SSO) are broken because the redirect URI uses `localhost` instead of `127.0.0.1`. Small thread but potentially blocking for enterprise adopters.

7. **[BUG] Auto-mode permission classifier appends bypass-coaching to its own denials**  
   [Issue #74301](https://github.com/anthropics/claude-code/issues/74301) — 1 comment, 1 👍  
   **Severity: High.** When auto-mode blocks a tool call, the denial message instructs the agent how to circumvent the block (e.g., "you may attempt to accomplish this action differently"). A security anti-pattern that actively undermines its own guardrails.

8. **[BUG] Repeated multi-minute 'Waiting for API response' stalls when network is fine**  
   [Issue #82155](https://github.com/anthropics/claude-code/issues/82155) — 0 comments (just filed)  
   Long-running sessions stall for 2+ minutes with retry backoff despite 33ms RTT to `api.anthropic.com`. New report, but likely related to capacity or client-side retry logic issues.

9. **[BUG] Windows MSIX app: auto-update during app hang corrupts package registration**  
   [Issue #82134](https://github.com/anthropics/claude-code/issues/82134) — 1 comment (just filed)  
   When the desktop app hangs during an auto-update, the MSIX package registration gets corrupted (error 0x3CFC) and the repair process can never succeed because the source MSIX is deleted from `%TEMP%`. A brittle update flow specific to Windows sideloaded installs.

10. **[BUG] Mobile (Pixel 8 Pro): input typed while agent busy silently discarded on background**  
    [Issue #71603](https://github.com/anthropics/claude-code/issues/71603) — 5 comments, 3 👍  
    Draft input is lost without confirmation when the app is backgrounded on Android. Affects mobile web users and disrupts workflow on the go.

## Key PR Progress
*(Only 3 PRs were updated in the last 24 hours — no significant feature or fix PRs are in flight.)*

1. **[PR #82059](https://github.com/anthropics/claude-code/pull/82059) — Fix: provision poppler-utils for PDF support in devcontainers/scripts**  
   Addresses issue #23704 where the `Read` tool silently fails on PDFs because `poppler-utils` is missing from default container setups. A small but important dev-experience fix.

2. **[PR #80294](https://github.com/anthropics/claude-code/pull/80294) — docs: fix 1 broken link(s) via archive.org**  
   Fixes a broken npm package link in the README using Wayback Machine snapshots. Low-risk documentation improvement.

3. **[PR #77709](https://github.com/anthropics/claude-code/pull/77709) — Add settings example: official marketplace only**  
   Introduces `settings-official-marketplace-only.json` to demonstrate restricting plugin marketplaces to the official Anthropic source. Helps organizations enforce plugin provenance.

## Feature Request Trends
The most requested feature directions from the issue tracker include:

- **Automated workflow control**: The ability to invoke `/compact` or other session-management commands from scripts/CI (e.g., [Issue #19877](https://github.com/anthropics/claude-code/issues/19877)). Developers want to programmatically manage context windows without human intervention.
- **Cross-device session continuity**: Persisting and resuming Claude Code sessions across different machines ([Issue #61849](https://github.com/anthropics/claude-code/issues/61849), now stale-closed). Requested for multi-workstation workflows.
- **Security research / adversarial testing support**: Some users report being blocked or discouraged from using Claude Code for offensive security exploration ([Issue #82157](https://github.com/anthropics/claude-code/issues/82157)). A minority but passionate use case.
- **Model version visibility**: Better visibility into which model version (e.g., Opus 5) is being used, especially when deployed via Bedrock with incomplete catalog entries ([Issue #81068](https://github.com/anthropics/claude-code/issues/81068), [Issue #82136](https://github.com/anthropics/claude-code/issues/82136)).

## Developer Pain Points
Recurring frustrations visible across recent issues:

- **Session limit exhaustion** dominates: the #38335 thread shows widespread alarm at plan quotas draining far faster than expected, with no official communication from Anthropic.
- **Windows reliability** is a hotspot: multiple crashes (BSOD from VS Code sessions, MSIX corruption during updates, Code Integrity blocks, windowless desktop lock-ups, and Cowork "offline" errors) paint a picture of fragile Windows support.
- **Network stall spikes**: users experiencing random 2‑minute+ retry backoffs on healthy connections ([#82155](https://github.com/anthropics/claude-code/issues/82155)) indicate client-side retry logic or server capacity issues that degrade long sessions.
- **Permission & hook inconsistency**: `PermissionRequest` hooks not firing for subagents ([#79177](https://github.com/anthropics/claude-code/issues/79177)), `SessionStart` hooks not rendering output in VS Code ([#76736](https://github.com/anthropics/claude-code/issues/76736)), and environment variables not injected on Windows ([#82154](https://github.com/anthropics/claude-code/issues/82154)) — the plugin/hook system feels fragile.
- **Artifact tool unavailability**: Teams on paid plans report the Artifact tool is missing from CLI sessions ([#80418](https://github.com/anthropics/claude-code/issues/80418)), and sharing published artifacts fails silently ([#79824](https://github.com/anthropics/claude-code/issues/79824)).
- **Bash sandbox confusion**: Redirection into the session’s own working directory is blocked, even though the error message lists that directory as allowed ([#77972](https://github.com/anthropics/claude-code/issues/77972)). Inconsistent permissions messaging.
- **Mobile input loss**: Users on Android lose draft input when backgrounding the app, with no warning ([#71603](https://github.com/anthropics/claude-code/issues/71603)).

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-07-29

## Today’s Highlights

The Codex team released **0.146.0** with revamped session management (multi-thread support, pinning) and expanded plugin marketplace integrations for Amazon Bedrock and Claude C. On the bug front, Windows users continue to face the most friction: multiple GPU crash issues (e.g., #34133, #35352) remain open, and a critical UX regression in multi-agent model overrides (#32031) is generating community outcry. In PRs, the team made significant progress on MCP reliability, environment handling, and Windows path normalization.

## Releases

- **[rust-v0.146.0](https://github.com/openai/codex/releases/tag/v0.146.0)**  
  - New session commands (`/new`, `/clear`), thread pinning, and seamless side conversation switching.  
  - Agent Plugins manifests, workspace plugin publishing, and additional marketplaces (Amazon Bedrock, Claude C).  
- **[rusty-v8-v150.4.0](https://github.com/openai/codex/releases/tag/rusty-v8-v150.4.0)** – V8 engine upgrade (15.0.245.2) with updated prebuilt archives and Bazel targets.  
- **[rust-v0.146.0-alpha.14](https://github.com/openai/codex/releases/tag/v0.146.0-alpha.14)** – Pre-release of the same series.

## Hot Issues (Top 10 by community engagement)

1. **[#34133](https://github.com/openai/codex/issues/34133)** – Windows: `Page.captureScreenshot` crashes GPU after Code Integrity rejects bundled `vk_swiftshader.dll`. 26 comments, still open. This is a recurring theme affecting in-app browser screenshots.

2. **[#35352](https://github.com/openai/codex/issues/35352)** – Windows Desktop exits when GPU process crashes and unsigned SwiftShader fallback is blocked. 15 comments, 1 👍. Users report total app loss during browser usage.

3. **[#13036](https://github.com/openai/codex/issues/13036)** – Request to support multiple simultaneous chats (tabs). 13 comments, 8 👍. Long-standing enhancement, now partly addressed by 0.146.0’s side conversation feature.

4. **[#25709](https://github.com/openai/codex/issues/25709)** – Windows app extremely sluggish after update; suspected Windows Firewall interference. 11 comments, 2 👍. Performance regression affecting daily workflow.

5. **[#24534](https://github.com/openai/codex/issues/24534)** – Feature request for custom storage path for projectless chats. 11 comments, 23 👍 (highest 👍 count). Users want control over where session data lives.

6. **[#30649](https://github.com/openai/codex/issues/30649)** – `render_docx.py` builds invalid `file://` URI for LibreOffice on Windows, breaking document conversion. 9 comments.

7. **[#35619](https://github.com/openai/codex/issues/35619)** – App-server process transition deletes rollout JSONL files, orphaning >930 threads. 9 comments. Critical data loss scenario.

8. **[#32031](https://github.com/openai/codex/issues/32031)** – [Critical UX regression] Multi-agent v2 `spawn_agent` hides model overrides. 8 comments, 16 👍. Users cannot select sub-agent models; the most upvoted open issue this week.

9. **[#35528](https://github.com/openai/codex/issues/35528)** – Incomplete residual fidelity across tool output, model-visible, and durable state. 7 comments, 2 👍. Affects reliability of long-running agent tasks.

10. **[#32334](https://github.com/openai/codex/issues/32334)** – Windows Desktop crashes after in-app Browser sidebar webview creation. 6 comments (closed). Demonstrates community frustration with browser integration stability.

## Key PR Progress

1. **[#35878](https://github.com/openai/codex/pull/35878)** – Use step environments for MCP file uploads. Fixes a timing issue where file arguments were rewritten against stale environment snapshots.

2. **[#35875](https://github.com/openai/codex/pull/35875)** – Allow environment readiness updates in place. Adds `publish_ready_info` to avoid full environment replacement.

3. **[#35874](https://github.com/openai/codex/pull/35874)** – Mark the primary environment in model context. Improves clarity in multi-environment turns.

4. **[#35870](https://github.com/openai/codex/pull/35870)** – Preserve session titles when importing external agent history. Restores metadata lost during import.

5. **[#35859](https://github.com/openai/codex/pull/35859)** – Expose plugin installation timestamps in app-server summaries. Provides better plugin lifecycle visibility.

6. **[#35857](https://github.com/openai/codex/pull/35857)** – Add Bazel unit test targets for Rust binaries. Improves CI coverage for binary crate tests.

7. **[#35856](https://github.com/openai/codex/pull/35856)** – Resolve imported connectors by MCP server name instead of UUID. Simplifies session attribution.

8. **[#35851](https://github.com/openai/codex/pull/35851)** – Normalize Windows namespace paths (e.g., `\\?\D:\reports`) to canonical `file:` URIs. Addresses path handling bugs like #30649.

9. **[#35845](https://github.com/openai/codex/pull/35845)** – Support plaintext collaboration tool messages. Enables structured plaintext args for `spawn_agent`, `send_message`, etc.

10. **[#35831](https://github.com/openai/codex/pull/35831)** – Update `rusty_v8` to 150.4.0 (V8 15.0.245.2). Keeps the engine current with upstream patches.

## Feature Request Trends

- **Multi-chat / Tabbed Sessions** (#13036, #34663) – Users overwhelmingly want to manage multiple conversations without losing context. The 0.146.0 release partially addresses this with side conversation switching, but full tab support is still the top ask.

- **Customizable Session Storage** (#24534, #27207) – Demand for controlling where chat data is saved locally and restoring archived chats from the main UI.

- **Agent & Sub-agent Transparency** (#32031, #32283) – Users need to see which model/reasoning effort each sub-agent uses, and to override those settings easily.

- **MCP Auto-reconnect** (#11489) – MCP servers that disconnect remain unavailable until manual reload. Users want retry logic similar to SSE streams.

- **Remote Session Browser Support** (#21816) – The in-app browser should work when connected to remote development environments.

## Developer Pain Points

- **Windows GPU Crashes** – Issues #34133, #35352, #32334, #33561 highlight a persistent pattern: the embedded browser’s GPU process crashes due to Code Integrity or SwiftShader restrictions, often taking down the entire Desktop app.

- **Session Data Loss & Bloat** – #35619 (orphaned threads after process transition), #28531 (base64 images in JSONL causing freezes), and #34971 (reprocessing massive cached context) point to fundamental fragility in session persistence.

- **Multi-agent Configuration UX** – #32031 shows that the new multi-agent v2 surface makes it nearly impossible to select different models for sub-agents, a critical regression for power users.

- **Context Compaction Fidelity** – #35528 and #35355 report that compaction can promote partial or interrupted outputs into confirmed task state, leading to hallucinations and wasted work.

- **Update & Sandbox Locking** – #23320 (`codex.exe` locked during npm cleanup) and #35871 (`CreateProcessAsUserW` fails with MSIX pwsh) plague Windows developers who rely on daily use.

- **Performance Under Load** – #25709 (sluggish after update), #33561 (severe lag and `0xc06d007f` crashes), and #30665 (unexpected token drain) indicate that the Windows app struggles with concurrent tasks and background activity.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-07-29

## Today’s Highlights
Three releases landed, including a stable v0.53.0 with critical bug fixes for tool response handling and shell output bounding. The nightly track adds Firestore concurrency locking for the new PR generation pipeline. Community attention is split between persistent subagent reliability bugs (false “GOAL” success, hangs) and a growing demand for AST-aware file tools and better memory system hygiene.

## Releases
- **[v0.53.0](https://github.com/google-gemini/gemini-cli/releases/tag/v0.53.0)** — Stable release. Fixes a 400 Bad Request caused by cancelled tool responses and coalesced consecutive roles. Introduces an LLM triage orchestrator for issue caretaker automation.
- **[v0.54.0-preview.0](https://github.com/google-gemini/gemini-cli/releases/tag/v0.54.0-preview.0)** — Preview with aggregated changelogs from v0.52.0 and v0.53.0-preview.0.
- **[v0.55.0-nightly.20260729](https://github.com/google-gemini/gemini-cli/releases/tag/v0.55.0-nightly.20260729.g3499c84f7)** — Nightly build with Firestore dual-locking and test ingestion utilities for the PR Generator backend.

## Hot Issues
*Top 10 issues updated in the last 24h, selected by community impact and priority.*

1. **[#22323 – Subagent recovery after MAX_TURNS is reported as GOAL success](https://github.com/google-gemini/gemini-cli/issues/22323)** (P1, 12 comments)  
   A codebase investigator subagent reports `status: "success"` even though it hit the turn limit mid-analysis. Misleading feedback undermines trust — high priority for agent reliability.

2. **[#21409 – Generalist agent hangs](https://github.com/google-gemini/gemini-cli/issues/21409)** (P1, 8 👍)  
   The CLI hangs indefinitely when deferring to the generalist agent. Workaround exists (disable sub-agents), but the issue is widespread and causes long user frustration.

3. **[#25166 – Shell command gets stuck with “Waiting input” after completion](https://github.com/google-gemini/gemini-cli/issues/25166)** (P1, 3 👍)  
   Simple shell commands appear to await input when already finished. Blocks automation and degrades user experience.

4. **[#21983 – Browser subagent fails on Wayland](https://github.com/google-gemini/gemini-cli/issues/21983)** (P1, 1 👍)  
   Browser agent fails with no actionable error on Wayland, a growing Linux display server. Limits usability for a significant Linux user base.

5. **[#22093 – Subagents running without permission since v0.33.0](https://github.com/google-gemini/gemini-cli/issues/22093)** (P2, 3 comments)  
   Users with subagents disabled report agents being spawned anyway. A serious regression for those who only want MCP or manual control.

6. **[#26522 – Auto Memory retrying low-signal sessions indefinitely](https://github.com/google-gemini/gemini-cli/issues/26522)** (P2, 5 comments)  
   The memory extraction agent keeps reprocessing low-signal transcripts, wasting context and compute. Needs a fail-fast mechanism.

7. **[#24246 – 400 error with >128 tools](https://github.com/google-gemini/gemini-cli/issues/24246)** (P2, 3 comments)  
   Gemini CLI returns a 400 Bad Request when more than 128 tools are available. Tools-heavy setups (e.g., many MCP servers) break entirely.

8. **[#28575 – CLI crashes on startup when GEMINI_API_KEY contains special characters](https://github.com/google-gemini/gemini-cli/issues/28575)** (P2, 1 comment)  
   `=`, `+` in the API key trigger a parse error. Blocks new users and CI setups that might have encoded keys.

9. **[#28574 – CLI crashes with --verbose flag on long prompts](https://github.com/google-gemini/gemini-cli/issues/28574)** (P2, 1 comment)  
   Verbose output combined with prompts over 500 characters causes an immediate crash. Affects debugging workflows.

10. **[#22186 – get-shit-done output hook causes crash](https://github.com/google-gemini/gemini-cli/issues/22186)** (P1, 3 comments)  
    The `get-shit-done` agent crashes when printing its summary, losing the result. High priority workflow blocker.

## Key PR Progress
*Top 10 pull requests updated in the last 24h, highlighting important fixes and features.*

1. **[#28557 – Fix SSRF vulnerability in web-fetch.ts](https://github.com/google-gemini/gemini-cli/pull/28557)** (P1/security)  
   Replaces synchronous DNS check with async resolution to block hostnames that resolve to internal IPs. Closes #28555.

2. **[#28403 – Block $VAR and ${VAR} variable expansion bypass](https://github.com/google-gemini/gemini-cli/pull/28403)** (P1/security)  
   Incomplete detection of bash/PowerShell substitution patterns allowed variable expansion to bypass existing security gates. Defense-in-depth hardening.

3. **[#28401 – Bound shell command output sent to the model](https://github.com/google-gemini/gemini-cli/pull/28401)** (P1/agent)  
   Large command outputs (e.g., `find /`, verbose builds) now truncated before being sent to the model, preventing context overflow and token waste.

4. **[#28566 – Propagate InvalidStreamError details to UI](https://github.com/google-gemini/gemini-cli/pull/28566)** (P1/core)  
   When an empty response stream error occurs, the CLI now shows actionable suggestions (e.g., use `/compress`), improving debuggability.

5. **[#28565 – Skip merged function-response turns when finding active loop](https://github.com/google-gemini/gemini-cli/pull/28565)** (P1/core)  
   Fixes a 400 error caused by tool calls without thought signatures. Previously irrecoverable; now allows session continuation.

6. **[#28481 – Refresh MCP OAuth tokens with stored client ID](https://github.com/google-gemini/gemini-cli/pull/28481)** (P1/security)  
   Fixes token refresh failure that silently deleted stored credentials, forcing re-authentication on every HTTP MCP server connection.

7. **[#28551 – Fall back to embedded macOS seatbelt profiles](https://github.com/google-gemini/gemini-cli/pull/28551)** (P1/core)  
   Resolves startup crash in sandbox mode (`-s`) on macOS when `.sb` seatbelt profiles are missing from runfiles.

8. **[#28432 – Firestore concurrency dual-locking for PR generator](https://github.com/google-gemini/gemini-cli/pull/28432)** (size/l)  
   Central database interface with transactional locking and lifecycle state management for the automated Issue-to-PR pipeline.

9. **[#28474 – Add skill name dimension to tool call telemetry](https://github.com/google-gemini/gemini-cli/pull/28474)** (P3/enterprise)  
   Extracts skill names from `activate_skill` calls and adds them as telemetry labels, enabling per-skill performance tracking.

10. **[#28526 – Fix leaking disposables in VSCode IDE companion](https://github.com/google-gemini/gemini-cli/pull/28526)** (P2/core)  
    Parenthesis bug caused `gemini.diff.accept` command and workspace folder listeners to not be properly disposed, leading to memory leaks.

## Feature Request Trends
The community is pushing hardest in three directions:

- **Agent self-awareness and sub‑agent orchestration** – Users want the CLI to know its own capabilities (flags, hotkeys, tools) and to reliably invoke skills/sub‑agents without explicit instructions. Several issues (e.g., #21432, #21968) call for better automatic delegation and configuration awareness.
- **AST-aware file operations** – Multiple issues (notably EPIC #22745 and #22746) propose replacing naïve file reads and codebase mapping with AST-level tools to reduce token waste, improve context precision, and navigate code more reliably.
- **Memory system resilience and privacy** – The Auto-Memory subsystem (#26522, #26523, #26525) receives significant critique: indefinite retries of low-signal sessions, silent push of invalid memory patches, and insufficient redaction before sending content to the model. Users demand deterministic redaction and better quarantining of malformed data.

## Developer Pain Points
*Recurring frustrations surfaced across the latest issues:*

- **Agent hangs and false success reports** – The generalist agent hangs forever on simple tasks, and subagents incorrectly report successful completion after hitting turn limits (#21409, #22323). Erosion of trust is a top complaint.
- **Shell command instability** – Commands that finish are reported as “waiting input” (#25166), and long outputs are fed directly into model context without limits (#28401 addressed this, but the fix is not yet in a stable release).
- **Configuration and permissions ignored** – Sub-agents run even when disabled in settings (#22093). The browser agent ignores `maxTurns` overrides in `settings.json` (#22267). Users feel the CLI does not respect their explicit choices.
- **Environment-specific breakage** – Wayland display server (#21983), special characters in API keys (#28575), and missing macOS seatbelt profiles (#28551) cause crashes or non‑functioning features for specific setups.
- **Memory system noise** – The automated memory extraction agent repeatedly re-examines low-signal sessions and cannot handle malformed patches, wasting tokens and confusing users (#26522, #26523).

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-07-29

## Today's Highlights
- **v1.0.76-1** shipped with voice-mode media pause/resume, active scheduled prompt counts, a `/limits predict` command, and configurable timed refreshes.
- The zombie process bug (#4163) reappeared on AlmaLinux 8.10 (#4290), prompting a "not fixed" report despite the original issue being closed.
- Multiple Windows‑specific session hangs (#4165, #4159, #4288) continue to frustrate users, with the terminal rendering blank after prompts or failing to resume sessions.

## Releases
**v1.0.76-1**  
[Release link](https://github.com/github/copilot-cli/releases/tag/v1.0.76-1)  
**Added:**
- Voice mode pauses playing media before recording and resumes it afterward (macOS/Windows).
- Show the number of active scheduled prompts in the footer.
- `/limits predict` to suggest a session AI‑credit limit from similar sessions.
- Configurable timed refreshes.

## Hot Issues (10 noteworthy)
1. **#4290 – #4163 is not fixed** (AlmaLinux 8.10)  
   Users confirm child processes still leak as zombies in v1.0.75, contradicting the closure of #4163.  
   [Issue](https://github.com/github/copilot-cli/issues/4290)

2. **#4165 – `copilot --resume` hangs on Windows** (cold start)  
   Session remains stuck at “Resuming session...” with no error; same session works if started interactively first.  
   [Issue](https://github.com/github/copilot-cli/issues/4165)

3. **#4159 – Interactive mode turns blank after submitting a prompt** (Windows Terminal)  
   UI disappears after any prompt; `-p` mode unaffected. High 👍 count suggests broad impact.  
   [Issue](https://github.com/github/copilot-cli/issues/4159)

4. **#4016 – BYOK login rejected in `--acp` mode** (regression 1.0.61–1.0.68)  
   Custom providers still force GitHub login; similar to reopened #3048 and #3902.  
   [Issue](https://github.com/github/copilot-cli/issues/4016)

5. **#4161 – `task_complete` tool unavailable after returning to autopilot**  
   Regression of #1523; maintainers said it was fixed in v1.0.4 but still broken in v1.0.75.  
   [Issue](https://github.com/github/copilot-cli/issues/4161)

6. **#2770 – CLI stuck on “Cancelling” and ignores Enter**  
   After Escape recovery, keyboard input stops working; rate‑limiting seems to trigger it.  
   [Issue](https://github.com/github/copilot-cli/issues/2770)

7. **#2703 – Session hangs after “done” work, Escape enters permanent “Cancelling”**  
   Similar freeze pattern with no error output; affects all platforms.  
   [Issue](https://github.com/github/copilot-cli/issues/2703)

8. **#4078 – Scheduled prompts kill the existing prompt queue**  
   When `/every` or `/after` fires, queued items are lost.  
   [Issue](https://github.com/github/copilot-cli/issues/4078)

9. **#4286 – Streaming tool_use `input_json_delta` buffered until complete**  
   Large tool arguments cause multi‑minute silence before any feedback, breaking UX.  
   [Issue](https://github.com/github/copilot-cli/issues/4286)

10. **#4285 – Silent exit 1 on v1.0.76-1 with most log levels**  
    Log levels `none`/`error`/`warning`/`info`/`debug` cause immediate exit with zero output; only `all` and `default` work.  
    [Issue](https://github.com/github/copilot-cli/issues/4285)

## Key PR Progress
Only one PR was active in the last 24h:

**#4100 – “安全性” (shangti0168)**  
Author: huangyoufeng76-debug  
Updated 2026-07-28 – status: OPEN.  
The PR title suggests a security fix, but lacks English description or context. No comments or reviews yet.  
[PR link](https://github.com/github/copilot-cli/pull/4100)

## Feature Request Trends
- **Auto‑update plugins** (#2734 – 9 👍)  
  Users want a mechanism to check and apply plugin updates automatically, reducing manual friction.
- **Stop update nudges when auto‑update is enabled** (#4284 – 0 👍 but raised)  
  Persistent yellow “update” messages are considered alienating when the tool already auto‑updates.
- **Expose `contextTier` in ACP mode** (#4275 – 0 👍)  
  Parity request: `/model` in interactive mode allows changing context tier, but ACP clients cannot set it programmatically.
- **Keyboard buffer smoothing** (#4274 – 0 👍)  
  Arrow keys continue moving cursor after release; request to flush buffer immediately.
- **Enable new models blocked by policy** (#4272 – 1 👍)  
  Enterprise users report new models greyed out with no admin‑visible setting to enable them.

## Developer Pain Points
- **Zombie process leaks** (#4163, #4290) – child processes accumulate under copilot PID, especially on Linux; closed as fixed but still reproducible.
- **Session hangs and unresponsive UI** (#4165, #2770, #2703, #4159) – cold resume on Windows, freezing after cancel, blank screens; core interactivity broken.
- **Regressions in core tools** (#4016 – BYOK in ACP, #4161 – `task_complete` tool, #4202 – `view` tool fails on existing files) – previously fixed bugs reappear, eroding trust in releases.
- **Streaming buffering** (#4286) – no progress feedback for large tool arguments, making the CLI feel broken during long operations.
- **MCP server spawning on Windows** (#3576) – `npx` and other shell launchers fail with `spawn ENOENT`; configuration that works in VS Code/IntelliJ fails in CLI.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest – 2026-07-29

## Today’s Highlights
No new releases were published in the last 24 hours, but the community remained active with one fresh feature request for enterprise API gateway support (#2568) and a new PR improving the `/usage` panel (#2567). Additionally, two long-standing issues (#708, #732) were finally closed, signaling progress on git safety compliance and documentation for local backends.

## Releases
*None in the last 24 hours.*

## Hot Issues
| # | Title | Status | Reactions | Why It Matters |
|---|-------|--------|-----------|----------------|
| 1783 | [Feature Request] Add /delete command to remove sessions | OPEN | 👍1 · 5 comments | Users want a CLI-native way to delete sessions without manually navigating the filesystem. The request has been open since April and still lacks traction, indicating a gap in session management UX. |
| 708 | [Bug] Agent violated git safety protocol by committing without explicit permission | CLOSED | 👍0 · 2 comments | A critical security fix that took six months to resolve. The agent’s ability to bypass the `--require-permission` flag worried many developers working with sensitive repos. Community reaction is relief rather than applause. |
| 2553 | `/plugins` crashes with TypeError when 2+ plugins are installed (v0.29.0, Windows) | OPEN | 👍0 · 1 comment | A serious regression on Windows blocking multi-plugin workflows. The reporter notes that with 0 or 1 plugin it works, making this a priority for Windows users relying on the plugin ecosystem. |
| 2568 | Feature Request: Support custom API Base URL to access enterprise-level K3 gateway | OPEN | new · 0 comments | Freshly opened today. As Kimi K3 (2.8T parameters) went open-source in July, enterprise teams need custom endpoints for load balancing, failover, and audit trails. This could become a high-demand feature. |
| 2566 | [Bug] Kimi CLI rejects OAuth login for invited free users with active promotional coding credits | OPEN | 👍0 · 0 comments | A user-facing bug that blocks free-tier adoption. Invited users who receive temporary credits cannot log in via OAuth, which undermines the promotional funnel. Needs triage. |
| 732 | [Enhancement] llamacpp local backend for kimi-cli | CLOSED | 👍1 · 0 comments | Closed after six months. The request for better documentation on configuring a `llamacpp` backend remained unresolved, but the closure suggests the team considers it addressed or superseded. Developers hoping for local inference may be disappointed. |

## Key PR Progress
| # | Title | Status | Description & Impact |
|---|-------|--------|----------------------|
| 1637 | fix: route MCP server log notifications to loguru instead of TUI | **CLOSED** | Merged today. Fixes TUI pollution from MCP server logs (e.g. SearXNG). Improves developer experience by isolating MCP noise. |
| 2284 | fix: fire notification hooks for approvals | **CLOSED** | Merged today. Fires `Notification` hooks when an approval request is created. Enables external automation (e.g. Slack alerts) for approval workflows. |
| 2174 | fix: respect model display_name for kimi-for-coding | **CLOSED** | Merged. Removes hardcoded override so that backend-provided names (e.g. “Kimi-k2.6”) are displayed correctly. A small UX win for model clarity. |
| 2176 | fix(hooks): extract text from ContentPart for UserPromptSubmit hook | OPEN | Still open. Fixes empty `prompt` values when user input is a list of `ContentPart`. Awaiting review – affects all hook-based tools. |
| 2507 | fix(acp): signal QuestionNotSupported instead of resolving empty answers | OPEN | Addresses #2495. In ACP server mode, `QuestionRequest` should signal “not supported” rather than returning an empty dict, preventing silent model confusion. |
| 2567 | feat(usage): show absolute reset datetime in /usage panel | OPEN | New PR today. Replaces fuzzy “resets in 4d” with explicit local datetime. Smaller change but highly visible to power users tracking quota. |
| 2539 | fix(mcp): normalize tools for Moonshot API | OPEN | Important for MCP integration. Generates stable Moonshot-compatible tool names and fixes schema issues (missing root `object`, `anyOf`/required shape). Pending merge. |

## Feature Request Trends
- **Session lifecycle management** (#1783): Demand for a built-in `delete` command persists, reflecting a broader need for session CRUD operations within the CLI.
- **Enterprise API gateway support** (#2568): A new trend driven by the open-sourcing of Kimi K3. Users want to bypass official API limits and latency by bringing their own endpoints.
- **Local inference backends** (#732, closed): Although this specific request was closed, the underlying desire for on-premise/offline operation remains. Expect resurgent requests as local LLM hardware improves.

## Developer Pain Points
- **Plugin instability on Windows** (#2553): The `TypeError` with 2+ plugins is a blocker for Windows users, who already face a smaller ecosystem.
- **OAuth login friction for free users** (#2566): A first-impression problem that can deter new adopters, especially those on promotional credits.
- **MCP and hook integration gaps** (#2176, #2507, #2539): Developers building custom tools or services on top of Kimi CLI encounter subtle bugs in hook data extraction and ACP question handling.
- **Git safety compliance** (#708, closed): The six-month delay to fix the agent’s git permissions highlights how easily safety boundaries can be violated. The community expects faster responses on security-adjacent issues.

---
*Generated from github.com/MoonshotAI/kimi-cli data. All links are to the respective GitHub items.*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-07-29

## Today's Highlights

Two patch releases (v1.18.8 and v1.18.9) address critical MCP server reconnection issues, OAuth flow compatibility, and a navigation-breaking Solid cleanup crash. The community remains focused on DeepSeek thinking mode compatibility problems and MCP process duplication, while Kit Langton pushes a series of TUI performance and visibility improvements across multiple merged PRs.

## Releases

**v1.18.9** (latest) — Core: Restored compatibility with legacy MCP SDK clients. Desktop: Fixed a Solid cleanup crash that broke navigation; fixed home session loading to prevent page-wide suspension during list updates.

**v1.18.8** — Core: Improved compatibility with newer MCP servers and OAuth flows. Bugfixes: MCP servers now reconnect after expired SDK sessions (including concurrent requests); OAuth callback ports are properly honored in `mcp debug`; deprecated sampling defaults no longer sent.

## Hot Issues (10 noteworthy)

1. **[#24722](https://github.com/anomalyco/opencode/issues/24722) — DeepSeek thinking mode: `reasoning_content` not passed back for tool call turns**  
   *19 comments, 12 👍* — The highest-engagement issue today. DeepSeek V4 models require `reasoning_content` from assistant messages with tool calls to be included in subsequent requests. Omission causes 400 errors. Three separate reports (#24722, #29618, #28974) indicate this is a systemic pain point affecting both OpenRouter and SiliconFlow users.

2. **[#25168](https://github.com/anomalyco/opencode/issues/25168) — Jinja template error after compaction with LM Studio Qwen3**  
   *15 comments, 1 👍* — After manual or auto-compaction, `/compact` crashes with "No user query found in messages" from LM Studio's Jinja template renderer. Context compaction is a core workflow, making this a high-severity regression.

3. **[#29638](https://github.com/anomalyco/opencode/issues/29638) — Subagents dispatched sequentially instead of in parallel**  
   *5 comments, 4 👍* — Users expect independent subagent tasks to run concurrently, but only one executes at a time. A re-report of #14195; the community is watching for a fix.

4. **[#29939](https://github.com/anomalyco/opencode/issues/29939) — MCP servers spawn duplicate processes per session**  
   *4 comments* — With 5 MCP servers configured, 8+ processes per project lead to crashes. This ties into the `ReadableStreamDefaultController` crash (#29941) under memory pressure.

5. **[#12680](https://github.com/anomalyco/opencode/issues/12680) — TodoRead removed from tools**  
   *7 comments, 8 👍* — PR #11814 removed `TodoRead` from the tool registry entirely. High community demand for restoration — agents can no longer read todo files.

6. **[#27497](https://github.com/anomalyco/opencode/issues/27497) — Redefining permission in subagents stopped working**  
   *7 comments, 4 👍* — A regression in v1.14.50 broke permission inheritance behavior that worked in v1.14.17. Users want either fixed behavior or documentation updates.

7. **[#29762](https://github.com/anomalyco/opencode/issues/29762) — "step-end" diff calculation blocks event loop with 100% CPU**  
   *3 comments, 1 👍* — Large diffs cause the Bun event loop to hang, RSS increases by ~1GB, and the app becomes completely unusable. A fundamental performance issue in diff computation.

8. **[#29952](https://github.com/anomalyco/opencode/issues/29952) — Task tool blocks parent session indefinitely when sub-agent LLM call fails**  
   *3 comments* — When the free-tier API call fails, the subagent session never cleans up, blocking the parent delegator agent. A critical robustness gap for agent orchestration.

9. **[#24784](https://github.com/anomalyco/opencode/issues/24784) — bash tool hangs on Windows when grandchild process inherits stdout pipe**  
   *4 comments* — Windows-specific: Gradle/hvigor daemons cause the bash tool to hang indefinitely due to inherited pipe handles. Root cause is clear but fix is Windows-only.

10. **[#18229](https://github.com/anomalyco/opencode/issues/18229) — Significant input lag in WSL within a Windows VM**  
    *5 comments, 2 👍* — Typing in the chat box takes seconds to appear. A niche but severe performance issue for users in virtualized WSL environments.

## Key PR Progress (10 important PRs)

1. **[#39176](https://github.com/anomalyco/opencode/pull/39176) — Automatic discovery of models from providers**  
   (Open, needs:title) — Implements generic `/v1/models` fetching so providers auto-update available models. Closes #6231, a long-standing feature request.

2. **[#39442](https://github.com/anomalyco/opencode/pull/39442) — Restore permission ask plugin hook**  
   (Open) — Fixes #7006 by restoring the `permission.ask` hook so plugins can programmatically allow/deny tool requests before the user is prompted.

3. **[#39428](https://github.com/anomalyco/opencode/pull/39428) — Add unread tab glow in TUI**  
   (Merged, contributor: kitlangton) — Stationary accent glow behind inactive tabs with unread activity, making them easier to locate without animation.

4. **[#39429](https://github.com/anomalyco/opencode/pull/39429) — Always show session tab strip**  
   (Merged, contributor: kitlangton) — The first open session now immediately appears as a capped-width tab instead of hiding the strip until a second session opens.

5. **[#39418](https://github.com/anomalyco/opencode/pull/39418) — Restore visible tab pulse across themes**  
   (Merged, contributor: kitlangton) — Fixes the running session-tab pulse that was blending into invisibility on some themes.

6. **[#39433](https://github.com/anomalyco/opencode/pull/39433) — Reduce tab pulse allocations**  
   (Merged, contributor: kitlangton) — Performance optimization: reduces per-frame RGBA construction in the 60 FPS pulse renderer without changing visual behavior.

7. **[#39432](https://github.com/anomalyco/opencode/pull/39432) — Add session tab playground**  
   (Merged, contributor: kitlangton) — A fixture-backed test screen for exercising `SessionTabs` without creating real sessions, improving future TUI development velocity.

8. **[#39386](https://github.com/anomalyco/opencode/pull/39386) — Embed native watcher binding in CLI**  
   (Merged) — Restores native directory watching in compiled Bun CLI by embedding `@parcel/watcher` native addon. Lets V2 service discover new local plugins without restarts.

9. **[#39423](https://github.com/anomalyco/opencode/pull/39423) — Hebrew language support with RTL handling**  
   (Open, needs:compliance) — Adds full Hebrew translation and RTL layout handling. A substantial i18n contribution.

10. **[#38625](https://github.com/anomalyco/opencode/pull/38625) — Filter subagents by activity in TUI**  
    (Merged) — Composer picker now shows only active sub-agents by default, with Tab toggling to inactive ones. Improves UX when many subagents exist.

## Feature Request Trends

Three clear feature directions emerge from today's issue activity:

1. **Workspace and session keyboard navigation** — Multiple issues (#29905, #29903, #29904) request keyboard commands for workspace deletion, jumping to sessions with pending permissions, and keybinding permission prompts (Allow/Deny/Always). Users want full keyboard-driven workflows.

2. **Subagent parallelism and lifecycle** — #29638 (sequential dispatch) and #29952 (parent blocking on child failure) reflect growing demand for robust multi-agent orchestration. The community expects concurrent execution and graceful error propagation.

3. **Provider and model flexibility** — Requests include built-in LiteLLM proxy support (#29935), automatic model discovery (#39176, already in PR), and fixing endpoint mismatches for providers like StepFun (#25084). Users want provider-agnostic configuration without manual workarounds.

## Developer Pain Points

- **DeepSeek thinking mode incompatibility** dominates conversation. Four separate issues (#24722, #29618, #28974, #29745) all describe `reasoning_content` failures across different providers. The fix appears straightforward — pass back the reasoning content — but users keep hitting it.

- **MCP server resource management** is a growing pain. Duplicate processes (#29939) cascade into memory pressure, stream controller crashes (#29941), and server disconnection. As MCP adoption grows, isolation and lifecycle management need attention.

- **Windows and WSL-specific stability** remains a recurring theme: process pipe hangs (#24784), WSL VM input lag (#18229), WSL2 command disappearance (#29835), and desktop app crashes (#29001) suggest the Windows port needs more investment in integration testing.

- **UI regression sensitivity** — Multiple issues (#29902, #29650, #18585, #39420) report breakage from UI updates: empty text parts persisted to DB, broken sidebar toggles, and unresponsive tool title metadata. The community is quick to flag UI regressions, indicating a high bar for UX quality.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest – 2026-07-29

## Today's Highlights
The community is actively working through a cluster of compaction‑related bugs that cause session hangs and silent data loss, with multiple issues receiving maintainer attention. WSL users continue to struggle with path handling that breaks core file operations, and a promising fix for inline images under tmux via sixel (PR #7245) has been opened. On the provider front, Kimi K3 on Fireworks and a new Brazilian aggregation API (Apiário) were added as built‑in providers.

## Releases
No new releases were published in the last 24 hours.

## Hot Issues (10 of 50 updated in last 24h)

1. **#7064 – WSL absolute windows paths are mishandled**  
   *9 comments, 1 👍*  
   When using Pi on WSL2, `read`, `write`, and `edit` tools fail because path handling misinterprets absolute Windows paths, forcing fallback to command‑line replacements.  
   [GitHub](https://github.com/earendil-works/pi/issues/7064)

2. **#6879 – Auto‑compaction never triggers after context grows past 100%**  
   *5 comments, 3 👍*  
   In long agentic sessions, compaction is skipped until the API rejects the request at token limit, leading to expensive wasted turns. Users ask for compaction checks after every agent step.  
   [GitHub](https://github.com/earendil-works/pi/issues/6879)

3. **#7020 – Sometimes Pi doesn’t continue after compaction**  
   *5 comments, 2 👍*  
   Long‑running coordinator sessions experience “warts” where compaction terminates the agent’s response mid‑turn, leaving sessions stuck.  
   [GitHub](https://github.com/earendil-works/pi/issues/7020)

4. **#7150 – RPC prompt during in‑flight compaction is ACKed success:true then silently dropped**  
   *2 comments*  
   A `prompt` sent over RPC while compaction runs is acknowledged but never enters the session – silent data loss for automation users.  
   [GitHub](https://github.com/earendil-works/pi/issues/7150)

5. **#6747 – API for enhancing agent message markdown**  
   *11 comments, 2 👍*  
   Request to let extensions mutate agent message rendering without changing LLM‑bound content, motivated by a best‑effort formula renderer. An associated PR (#7231) is in progress.  
   [GitHub](https://github.com/earendil-works/pi/issues/6747)

6. **#7194 – Full re‑render every 1s when active tool card scrolls outside viewport**  
   *5 comments*  
   Remote sandbox users report excessive full re‑paints caused by scroll events, leading to performance degradation.  
   [GitHub](https://github.com/earendil-works/pi/issues/7194)

7. **#7049 – Upgrade Undici to 8.8.0 for correct plain‑HTTP proxy forwarding**  
   *5 comments*  
   Pi 0.81.1 pins Undici 8.5.0 which by default tunnels plain HTTP requests through CONNECT, breaking `HTTP_PROXY` for MCP/API targets. Fixed via PR #7225.  
   [GitHub](https://github.com/earendil-works/pi/issues/7049)

8. **#6922 – Default model cannot be a llama.cpp model**  
   *7 comments, 13 👍*  
   Setting `defaultProvider: "llama.cpp"` shows “No models available” on startup. High community engagement.  
   [GitHub](https://github.com/earendil-works/pi/issues/6922)

9. **#7161 – anthropic‑messages never sends x‑client‑request‑id**  
   *5 comments*  
   Absence of session affinity header disables round‑robin proxy grouping for Claude conversations.  
   [GitHub](https://github.com/earendil-works/pi/issues/7161)

10. **#7195 – Extensions don’t load if directory is a symlink**  
    *6 comments*  
    Users managing dotfiles via symlinks find Pi silently ignores the extension directory. Fixed and closed.  
    [GitHub](https://github.com/earendil-works/pi/issues/7195)

## Key PR Progress (10 of 27 updated in last 24h)

1. **#7245 (OPEN) – feat(tui): inline images under tmux via sixel**  
   Adds a sixel backend that enables image display even when `TMUX` is set, overcoming the previous blanket disable.  
   [GitHub](https://github.com/earendil-works/pi/pull/7245)

2. **#7247 / #7249 (CLOSED) – docs: add architecture decision records**  
   Two complementary PRs recovering 47 ADRs and 6 TDRs from commit history, covering provider abstraction, session architecture, TUI engine, extensions, storage, and infrastructure.  
   [GitHub #7247](https://github.com/earendil-works/pi/pull/7247) | [#7249](https://github.com/earendil-works/pi/pull/7249)

3. **#7231 (OPEN) – Markdown API (closes #6747)**  
   Implements a hook for extensions to transform agent message markdown without modifying LLM‑bound content.  
   [GitHub](https://github.com/earendil-works/pi/pull/7231)

4. **#7230 (CLOSED) – fix(ai): route Fireworks Kimi K3 through openai‑completions**  
   Adds the kimi‑k3 exception in `generate‑models.ts`, bypassing the unsupported native Fireworks path.  
   [GitHub](https://github.com/earendil-works/pi/pull/7230)

5. **#7225 (CLOSED) – fix: update undici from 8.5.0 to 8.8.0**  
   Resolves proxy forwarding issue #7049 by updating the HTTP client.  
   [GitHub](https://github.com/earendil-works/pi/pull/7225)

6. **#7243 (OPEN) – fix(ai): update TypeBox nullable array validation**  
   Bumps TypeBox to 1.3.7, fixing schema errors with `array[T] | null`. May break extensions using removed APIs.  
   [GitHub](https://github.com/earendil-works/pi/pull/7243)

7. **#7240 (CLOSED) – feat(ai): add Apiário as built‑in provider**  
   New Brazilian aggregation API offering unified access to OpenAI, Anthropic, DeepSeek, and others with BRL billing.  
   [GitHub](https://github.com/earendil-works/pi/pull/7240)

8. **#7236 (CLOSED) – feat(tui): pin chat input and support mouse caret**  
   Adds SGR mouse tracking, a `Viewport` component that keeps the composer pinned, and independent scroll for history.  
   [GitHub](https://github.com/earendil-works/pi/pull/7236)

9. **#7218 (CLOSED) – fix(coding‑agent): preserve resource metadata after extension resource reloads**  
   Fixes #6968 where extension resource metadata (icons, descriptions) was lost on reload.  
   [GitHub](https://github.com/earendil-works/pi/pull/7218)

10. **#7163 (OPEN) – feat: search index sqlite**  
    Adds `SessionRepo.search()` with an FTS5 virtual table for SQLite backend, enabling full‑text search across sessions.  
    [GitHub](https://github.com/earendil-works/pi/pull/7163)

## Feature Request Trends

- **Provider expansion**: Continuous demand for new model providers (Kimi K3, Apiário, Vertex, Z.AI, etc.) and better handling of provider‑specific quirks (e.g., `max_tokens` vs `max_completion_tokens`).  
- **UI/UX enhancements**: Inline images in tmux, pinned composer, mouse support, markdown rendering hooks, and session rename improvements.  
- **Extension system maturity**: Symlink support, resource metadata preservation, API for custom markdown rendering, and resilient installation (cleaning up failed git installs).  
- **Session management**: Full‑text search via SQLite, better compaction behavior, and consistent `@path` resolution relative to workspace root.  
- **Networking and proxy**: Correct handling of HTTP proxies, per‑provider client‑request‑ID headers for session affinity.

## Developer Pain Points

- **Compaction unreliability**: Multiple reports (#6879, #7020, #7150) of compaction not triggering, causing data loss or session freezes, especially for long‑running or RPC‑driven workflows.  
- **WSL path handling**: Core `read`/`write`/`edit` tools regularly fail under WSL2 due to incorrect absolute Windows path handling (#7064).  
- **Extension installation failures**: Failed git installs leave poisoned directories that block future attempts (#7189).  
- **UI freezes and excessive re‑renders**: Persistent re‑paints when tool cards scroll out of view (#7194) and frozen TUI after `/login` when model catalog is unreachable (#7113).  
- **Missing session affinity headers**: Anthropic‑messages path omits `x-client-request-id`, breaking proxy round‑robin setups (#7161).  
- **Dependency churn**: TypeBox update (#7243) removes deprecated APIs, risking breakage for extensions using them.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

Here is the **Qwen Code Community Digest** for **2026-07-29**, based on the provided GitHub data.

---

## Qwen Code Community Digest — 2026-07-29

### 1. Today’s Highlights

The team shipped **v0.21.1**, a stable release focused on aligning telemetry and preparing for broader GenAI compliance. A new nightly build (v0.21.0-nightly) introduces an auto-fix deferral mechanism to limit repetitive suggestions. On the bug front, several **P0/P1** issues surfaced around daemon lifecycle management, tool schema compatibility with Anthropic models, and a new `/review` hardening campaign based on extensive dogfooding.

---

### 2. Releases

- **v0.21.0-nightly.20260729.0c0ca5fed**: Includes a single feature change: `feat(autofix): defer suggestions after five change rounds` ([#7913](https://github.com/QwenLM/qwen-code/pull/7913)). Aims to reduce noise from over-aggressive auto-fix loops.
- **v0.21.1**: A stable release. The only documented change is `feat(core): Align GenAI content telemetry fields` ([#7667](https://github.com/QwenLM/qwen-code/pull/7667)). No breaking changes reported.

---

### 3. Hot Issues (Top 10)

1. **[#7984](https://github.com/QwenLM/qwen-code/issues/7984) — `send_message` oneOf breaks Anthropic** [P1/bug]: A critical compatibility issue where `send_message`’s tool schema uses `oneOf`, which Anthropic’s API rejects. Blocks any multi-model deployment. **Community reaction**: High urgency, two comments within hours.

2. **[#7981](https://github.com/QwenLM/qwen-code/issues/7981) — `/review` hardening gaps** [P0/enhancement]: Extensive dogfooding of `/review --effort high` reveals capability gaps and false positives. **Community reaction**: Deep analysis from a lead contributor; likely to drive multiple fixes.

3. **[#7752](https://github.com/QwenLM/qwen-code/issues/7752) — Daemon writer lock release failure** [P0/bug]: Managed writers lock a session file, and a replacement daemon fails with a closed error. **Community reaction**: Direct follow-up to prior work (#7164); labeled P0, indicating blocking severity.

4. **[#7936](https://github.com/QwenLM/qwen-code/issues/7936) — Windows mojibake in shell output** [P2/bug]: Non-UTF-8 OEM code pages cause garbled output. **Community reaction**: Identified by a community user; impacts international workflows.

5. **[#7964](https://github.com/QwenLM/qwen-code/issues/7964) — Windows terminal content not scrollable after v0.21.1** [P2/bug]: Upgrade broke scroll behavior. **Community reaction**: 4 comments, high visibility; a regression from a recent stable release.

6. **[#7972](https://github.com/QwenLM/qwen-code/issues/7972) — v0.21.1 crashes (3 times)** [P2/bug]: User reports repeated crashes post-upgrade. **Community reaction**: 3 comments, likely tied to Windows-specific issues.

7. **[#7940](https://github.com/QwenLM/qwen-code/issues/7940) — `UserPromptSubmit` pollutes transcript** [P2/bug]: Hook context leaks into JSONL transcripts. **Community reaction**: Filed by a power user; touches data privacy and session replay.

8. **[#7819](https://github.com/QwenLM/qwen-code/issues/7819) — `--safe-mode` drops ACP `mcpServers`** [P2/bug]: Safe mode over-clears server configs when driven over ACP. **Community reaction**: Flagged by a contributor; unclear if intended behavior.

9. **[#7831](https://github.com/QwenLM/qwen-code/issues/7831) — ECONNRESET beyond 150k tokens** [P2/bug]: Streaming drops under long contexts. **Community reaction**: 3 comments; important for heavy users of long-duration sessions.

10. **[#7959](https://github.com/QwenLM/qwen-code/issues/7959) — Qwen 3.5 0.8b infinite self-repetition** [status/need-information]: Model loops endlessly on a simple logic question. **Community reaction**: May be a model-side issue, but surfaced via tool.

---

### 4. Key PR Progress (Top 10)

1. **[#7989](https://github.com/QwenLM/qwen-code/pull/7989) — Drop top-level `oneOf` from `send_message`** [fix/code]: Addresses [#7984](https://github.com/QwenLM/qwen-code/issues/7984) by removing schema combinator that breaks Anthropic. **Impact**: Unblocks cross-model compatibility.

2. **[#7993](https://github.com/QwenLM/qwen-code/pull/7993) — Stamp `QWEN_CODE_CLI` and `QWEN_CODE_MODEL`** [fix/cli]: Ensures subprocesses know their runtime identity. **Impact**: Enables reliable tool dispatch; part of the `/review` hardening.

3. **[#7987](https://github.com/QwenLM/qwen-code/pull/7987) — Low-signal Approve disclosure** [feat/review]: Flags zero-finding approves on non-trivial diffs. **Impact**: Prevents false confidence in review summaries.

4. **[#7988](https://github.com/QwenLM/qwen-code/pull/7988) — Prevent SGR mouse events from misclassification** [fix/cli]: Fixes paste detection on Windows. **Impact**: Addresses input corruption on Windows terminals.

5. **[#7974](https://github.com/QwenLM/qwen-code/pull/7974) — Lead verify comment with qualitative verdict** [feat/triage]: Restructures triage comments for clarity. **Impact**: Improves maintainer workflow readability.

6. **[#7970](https://github.com/QwenLM/qwen-code/pull/7970) — Skip `--notes-start-tag` when release diverges** [fix/release]: Fixes release note generation for non-linear histories. **Impact**: Prevents broken release automation.

7. **[#7944](https://github.com/QwenLM/qwen-code/pull/7944) — Accept tool call OR file content in E2E test** [fix/test]: Relaxes a flaky test assertion. **Impact**: Reduces CI false positives.

8. **[#7927](https://github.com/QwenLM/qwen-code/pull/7927) — Rebind fork capabilities on resume** [fix/code]: Resolves [#7924](https://github.com/QwenLM/qwen-code/issues/7924). **Impact**: Prevents stale prompts in background agents.

9. **[#7919](https://github.com/QwenLM/qwen-code/pull/7919) — Preserve active Todo context across tool turns** [fix/core]: Keeps Todo list salient during multi-tool interactions. **Impact**: Enhances task continuity.

10. **[#7994](https://github.com/QwenLM/qwen-code/pull/7994) — Measure immediate prompt dispatch stages** [test/integration]: Adds benchmarks for daemon first-output latency. **Impact**: Supports ongoing performance optimization.

---

### 5. Feature Request Trends

The following directions are emerging from recent issues and PRs:

- **Smart triage and review automation**: Multiple proposals around `/verify` for external PRs ([#7985](https://github.com/QwenLM/qwen-code/pull/7985)), skill subprocess identity ([#7993](https://github.com/QwenLM/qwen-code/pull/7993)), and low-signal detection ([#7987](https://github.com/QwenLM/qwen-code/pull/7987)) point to a push for autonomous, transparent CI triage.
- **Context window and memory management**: Requests for better bracket/summary handling in long sessions ([#7831](https://github.com/QwenLM/qwen-code/issues/7831), [#7960](https://github.com/QwenLM/qwen-code/issues/7960)) indicate a need for smarter token and compression strategies, especially for small-window backends.
- **Hook and plugin isolation**: Issues like [#7940](https://github.com/QwenLM/qwen-code/issues/7940) and [#7968](https://github.com/QwenLM/qwen-code/pull/7968) show interest in better boundaries between user input, system context, and hook execution.
- **Dynamic Workflow and console UX**: [#7890](https://github.com/QwenLM/qwen-code/issues/7890) pushes for a terminal-native execution console for live runs—a UX improvement for complex workflows.

---

### 6. Developer Pain Points

- **Windows-specific regressions**: The v0.21.1 release caused scrolling issues ([#7964](https://github.com/QwenLM/qwen-code/issues/7964)), mojibake in shell output ([#7936](https://github.com/QwenLM/qwen-code/issues/7936)), and mouse event parsing errors ([#7988](https://github.com/QwenLM/qwen-code/pull/7988)). This is a recurring frustration for Windows users.
- **Anthropic model compatibility**: The `send_message` tool schema (`oneOf` rejection) is a blocking P1 issue for multi-model teams ([#7984](https://github.com/QwenLM/qwen-code/issues/7984)).
- **Daemon lifecycle stability**: Two P0 issues ([#7752](https://github.com/QwenLM/qwen-code/issues/7752) and [#7981](https://github.com/QwenLM/qwen-code/issues/7981)) highlight systemic challenges with daemon writer locks and subprocess identity—both critical for reliable background agent execution.
- **Auto-fix noise**: The addition of a 5-round deferral ([#7913](https://github.com/QwenLM/qwen-code/pull/7913)) suggests developers felt overwhelmed by repeated, unhelpful tool suggestions.
- **Token/context-box mismatches**: Reports of compression failures ([#7960](https://github.com/QwenLM/qwen-code/issues/7960)) and CJK token under-counting ([#7961](https://github.com/QwenLM/qwen-code/issues/7961)) indicate that current token estimation is not robust across all backends and languages.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

Here is the **DeepSeek TUI Community Digest** for 2026-07-29, generated from the provided GitHub data.

---

## DeepSeek TUI Community Digest — 2026-07-29

### Today's Highlights
The community is focused on stabilizing the upcoming **v0.9.2 release**, with several critical fixes landed today for Windows CRLF handling, VS Code terminal rendering, and persistent startup mode selection. A significant discussion on Chinese localization (translation of "Constitution") was resolved via a compromise PR. Key open threads highlight developer demand for a `zero-sandbox` mode and a `/stop` command for mechanical tool-call interruption.

### Releases
No new releases were published in the last 24 hours.

### Hot Issues
- **#4100 [BUG] exec_shell fails with exit code 2147483647 in specific Windows sessions** — [Link](https://github.com/Hmbown/CodeWhale/issues/4100)
    Closed. This catastrophic failure points to a fundamental **ConPTY resource leak** in long-running sessions. A significant stability concern for Windows users.
- **#4764 [BUG] `edit_file` tool fails on CRLF files on Windows** — [Link](https://github.com/Hmbown/CodeWhale/issues/4764)
    Closed. A classic cross-platform pain point resolved today (see PR #4942). Highlights the ongoing challenge of Windows support in AI tooling.
- **#4794 [BUG] Model catalog: make vision/modality a first-class routed capability** — [Link](https://github.com/Hmbown/CodeWhale/issues/4794)
    Closed. The maintainer calls out that modality data is already parsed but unused. Signals a deep architectural improvement for multi-modal routing.
- **#4934 [OPEN] Website non-critique (theming)** — [Link](https://github.com/Hmbown/CodeWhale/issues/4934)
    A user admires the new website's activity but requests **theming support**. Community response is minimal, but it points to a desire for customization.
- **#4955 [ENHANCEMENT] Request: zero-sandbox / --no-sandbox mode** — [Link](https://github.com/Hmbown/CodeWhale/issues/4955)
    Open. High community interest. The user reports the Seatbelt sandbox breaks shell commands "daily." A major pain point for local development workflows.
- **#4941 [BUG] Thinking level silently reverts to Auto on restart** — [Link](https://github.com/Hmbown/CodeWhale/issues/4941)
    Open. A subtle persistence bug where the UI picker "keeps going back to auto." The fix is likely in the UI layer, not the model.
- **#4959 [ENHANCEMENT] Proposed 'stop' command** — [Link](https://github.com/Hmbown/CodeWhale/issues/4959)
    Open. A strong feature request for a mechanical `/stop` bypass when the model is in autonomous "YOLO" mode. Critical for user control.
- **#4956 [BUG] Provider Network error: Connection failed** — [Link](https://github.com/Hmbown/CodeWhale/issues/4956)
    Open. A standard connectivity issue, but important as it impacts WSL2 users. Likely a configuration or proxy setup problem.
- **#4957 [ENHANCEMENT] TUI does not render LaTeX math expressions** — [Link](https://github.com/Hmbown/CodeWhale/issues/4957)
    Open. A clear UX gap for technical/scientific users. Raw `$...$` source is shown instead of rendered math, making the TUI unsuitable for math-heavy work.
- **#4949 [DISCUSSION] Chinese Translation of "Constitution"** — [Link](https://github.com/Hmbown/CodeWhale/issues/4949)
    Open. A thoughtful localization debate. The community decided on `宪章` (charter) as a compromise, resolving the sensitivity around `宪法` (constitution).

### Key PR Progress
- **#4958 [OPEN] CI: attach provenance and SBOM attestations to published image** — [Link](https://github.com/Hmbown/CodeWhale/pull/4958)
    A significant security/trust improvement. This enables users to cryptographically verify that the Docker image was built by the official workflow.
- **#4953 [CLOSED] fix(tui): expose Operate startup mode and refresh session capture** — [Link](https://github.com/Hmbown/CodeWhale/pull/4953)
    Critical fix for v0.9.2. The `Operate` mode was missing from the native config picker, preventing users from selecting a core runtime behavior.
- **#4951 [CLOSED] fix(v0.9.2): calm VS Code rendering and retry upstream 499** — [Link](https://github.com/Hmbown/CodeWhale/pull/4951)
    Addresses two key v0.9.2 blockers: graphical corruption in VS Code's terminal and brittle handling of upstream HTTP 499 errors.
- **#4947 [OPEN] fix(web): keep mobile navigation in view** — [Link](https://github.com/Hmbown/CodeWhale/pull/4947)
    A targeted UI fix for mobile responsiveness, capping the locale selector to prevent navigation from breaking at 390px viewports.
- **#4942 [CLOSED] fix(tools): preserve CRLF edits** — [Link](https://github.com/Hmbown/CodeWhale/pull/4942)
    A direct fix for issue #4764. The `edit_file` tool now normalizes line endings for search but preserves the original CRLF bytes on write.
- **#4944 [CLOSED] feat(web): align landing with managed product** — [Link](https://github.com/Hmbown/CodeWhale/pull/4944)
    A branding and UI overhaul for the public site, adopting the "Signal Current" brand mark and simplifying the hero.
- **#4943 [CLOSED] fix(tui): restore account-owned remote control (/rc)** — [Link](https://github.com/Hmbown/CodeWhale/pull/4943)
    Restores the critical `/rc` feature, allowing a web session to control an existing TUI instance without starting a second runtime.
- **#4946 [CLOSED] fix(web): keep install onboarding truthful** — [Link](https://github.com/Hmbown/CodeWhale/pull/4946)
    Fixes the onboarding flow to allow users to launch CodeWhale before configuring a provider key, improving first-run experience.
- **#4948 [CLOSED] fix(i18n): call the zh-Hans constitution a charter** — [Link](https://github.com/Hmbown/CodeWhale/pull/4948)
    The resolution to the translation debate in #4949. Uses `宪章` (charter) as the product term in Simplified Chinese.
- **#4937 [OPEN] fix(tui): finalize stale shell transcript cells** — [Link](https://github.com/Hmbown/CodeWhale/pull/4937)
    Fixes a UI glitch where restored shell sessions show a "live spinner" even after the underlying process has died. Switches to a static "stale" indicator.

### Feature Request Trends
- **User Control & Safety:** The highest demand is for mechanisms to **stop runaway model execution** (Issue #4959) and for a **zero-sandbox mode** (Issue #4955) to remove restrictive security layers during local development.
- **Cross-Platform Parity:** The persistent Windows CRLF and ConPTY issues reinforce a need for **first-class Windows testing and support**.
- **Rich Rendering:** A clear request for **LaTeX rendering** in the TUI (Issue #4957) signals the user base includes researchers and academics.
- **Customization & Theming:** The desire for **website theming** (Issue #4934) and deeper configuration points is present, though not urgent.

### Developer Pain Points
- **Windows Sanboxing & PTY Instability:** The community continues to struggle with the **Seatbelt sandbox** breaking core operations and **ConPTY resource leaks** (Issues #4955, #4100).
- **Subtle UI Persistence Bugs:** Bugs like the "thinking level reverting to auto" (Issue #4941) and the "Operate mode missing from picker" (Issue #4952) erode user trust in configuration persistence.
- **Configuration & Connectivity:** Users frequently hit **connection failures** (Issue #4956) and **model configuration confusion**, suggesting the onboarding/setup UX for providers needs improvement.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/boom7sss/agents-radar).*