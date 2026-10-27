# AI CLI Tools Community Digest 2026-07-15

> Generated: 2026-07-15 02:55 UTC | Tools covered: 9

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

# Cross-Tool Comparison Report: AI CLI Developer Tools Ecosystem
**Date: 2026-07-15**

## 1. Ecosystem Overview

The AI CLI tools landscape is experiencing an intense period of rapid iteration, with **seven major tools** all shipping releases or significant PRs within the same 24-hour window. The dominant themes are **agent cost control** (Fable over-consumption, silent quota drains), **session/user interface migration pains** (OpenCode v2, Claude Code permission regressions), and a **surge in multi-agent orchestration demands**. While Claude Code and OpenAI Codex remain the most feature-rich and debated platforms, newer entrants like Qwen Code and DeepSeek TUI are matching development velocity, signaling a maturing market where differentiation increasingly hinges on reliability, transparency, and platform-specific polish.

## 2. Activity Comparison

| Tool | Hot Issues (listed) | Key PRs (listed, 24h) | Release Status | Notable |
|---|---|---|---|---|
| **Claude Code** | 10 | 9 | 2 patches (v2.1.209, v2.1.210) | High community engagement (issues with 54👍) |
| **OpenAI Codex** | 10 | 10 | 4 Rust alphas + v0.144.4 stable | Highest upvoted feature (TUI status line, 103👍) |
| **Gemini CLI** | 10 | 10 | 1 nightly build (v0.52.0-nightly) | P1 issues unresolved (subagent success misreporting) |
| **GitHub Copilot CLI** | 10 | 0 (none in 24h) | 2 patches (v1.0.71-1, v1.0.71-2) | Consolidation phase post-release |
| **Kimi Code CLI** | 2 | 3 | No new releases | Quiet day; stability-focused |
| **OpenCode** | 10 | 10 | 2 patches (v1.18.0, v1.18.1) | Crisis-level UI regression post-v2 migration |
| **Pi** | 10 | 10 | v0.80.7 (breaking change) | High community contribution velocity |
| **Qwen Code** | 10 | 10 | v0.19.10 stable + nightly | RFC with 23 comments (multi-workspace daemon) |
| **DeepSeek TUI** | 10 | 10 | No new releases | 15 merges in 24h—high dev activity |

**Observations:**
- **Claude Code** and **OpenAI Codex** dominate in raw community engagement (issue comments, upvotes).
- **OpenCode** has the most volatile situation: high PR velocity but a major UI regression causing user backlash.
- **Kimi Code** is the quietest—maintainers are focused on bug fixes, not features.
- **GitHub Copilot CLI** had zero PRs in 24h but two releases, suggesting a consolidation phase.

## 3. Shared Feature Directions

| Theme | Tools | Specific Requirements |
|---|---|---|
| **Agent Cost Control & Transparency** | Claude Code, Gemini CLI, OpenAI Codex | Runaway token consumption (Fable auto-selection in Claude #76987, #77665); unauthorized quota drain in Gemini (#26860); workspace spend controls in Codex (#33187). **Cross-tool demand:** real-time cost dashboards, hard opt-outs that actually stick. |
| **Session Observability & Debugging** | Claude Code (#66807, #71773), Gemini CLI (#22598), Qwen Code (#5239), Pi (#6509) | Context-health monitoring, parent-child session lineage, sub-agent trajectory visibility, extension-reported usage. Users want to see what agents are doing and how tokens are spent. |
| **TUI Customization** | OpenAI Codex (#17827, 103👍), GitHub Copilot CLI (#4117, #4121, #4124), Qwen Code (#6149, #5971) | Configurable status lines (token usage, model, rate limits), color themes, session title customization, persistent terminal window titles. Claude Code's TUI sets the benchmark. |
| **Platform Parity & Reliability** | Claude Code (Windows MSIX #76357), OpenAI Codex (Win crashes #30178, #32683), GitHub Copilot CLI (Win orphaned processes #4111), Gemini CLI (Wayland #21983), OpenCode (Win UI #36979, Ivy Bridge #29039) | Windows is the most problematic platform across tools. Wayland support on Linux is another gap. Users demand crash-free desktop experiences and proper multi-platform testing. |
| **Multi-Agent Orchestration** | Claude Code (#71773), GitHub Copilot CLI (#4127), Qwen Code (#5239), Pi (#6509) | Background agents cancelled by new user turns, subagent communication channels, session ID lineage, leaf-agent restrictions. Users want reliable multi-step workflows. |
| **Permission System Maturity** | Claude Code (#73587), Gemini CLI (#25872), Qwen Code (#6923) | Permission rules ignored (Claude desktop), approval mode overrides (Gemini), path canonicalization (Qwen). Community wants consistent, enforceable permission models. |

## 4. Differentiation Analysis

| Tool | Feature Focus | Target Users | Technical Approach |
|---|---|---|---|
| **Claude Code** | Agent orchestration, cost control, permission systems | Power developers, multi-agent workflows | Rich plugin/hook system; worktree pooling; MCP integration |
| **OpenAI Codex** | Conversation branching, TUI customization, Azure enterprise | Enterprise teams, Azure Foundry users | Thread forking, session I/O separation; Python SDK; Azure integration |
| **Gemini CLI** | Browser agent, memory system, evaluation infrastructure | Google Cloud ecosystem users | Subagent architecture; A2A server; memory bootstrap; eval suites |
| **GitHub Copilot CLI** | Voice mode, plugin marketplace, canvas extensions | GitHub-centric developers | MCP toolset config; marketplace; extension-driven UI |
| **Kimi Code CLI** | Reasoning parameter handling, cost stability | Moonshot AI platform users, Chinese market | Kimi provider optimizations; reasoning content handling |
| **OpenCode** | Multi-provider support, v2 UI modernization, session management | Developers wanting flexibility (multiple AI providers) | Desktop v2 migration; flattened error types; community-driven session management |
| **Pi** | Provider bridge, model catalog, extension API | Multi-provider power users | Session-affinity format; sqlite storage; message_end hooks |
| **Qwen Code** | Daemon isolation, multi-workspace, hot-reload | Developers needing persistent server sessions | ACP transport; daemon architecture; multi-workspace RFC |
| **DeepSeek TUI** | Terminal UX polish, provider expansion, configurable internals | Rust ecosystem users, TUI enthusiasts | Config/toml-driven; seam management; provider-agnostic pricing |

**Key Differentiators:**
- **Claude Code** and **OpenAI Codex** compete most directly, but Claude leans toward agent autonomy while Codex emphasizes conversation safety (forking/retry).
- **Gemini CLI** is the only tool with a dedicated evaluation infrastructure epic and AST-based code understanding goals.
- **GitHub Copilot CLI** is alone in offering voice mode and a plugin marketplace.
- **Pi** and **OpenCode** are "bridge tools"—they support multiple AI providers and serve users who don't want vendor lock-in.
- **Kimi Code** and **DeepSeek TUI** are more niche, serving regional (Chinese) or language-specific (Rust) communities.

## 5. Community Momentum & Maturity

| Tool | Momentum Signal | Maturity Indicators |
|---|---|---|
| **Claude Code** | **Very High.** Top-notch issue engagement (54👍, 26 comments on #69415). Rapid patch releases. | **Moderate.** Permission system regressions and Fable cost issues suggest growing pains. Plugin ecosystem is active but fragile. |
| **OpenAI Codex** | **High.** 103👍 on top feature request. 4 alpha releases in one day. Strong PR pipeline. | **Mature.** Stable v0.144.4, Python SDK, comprehensive Azure support. Conversation branching shows mature engineering. |
| **Gemini CLI** | **Moderate-High.** Active RFCs, security PRs. 10 PRs in 24h. | **Moderate.** P1 bugs (#22323 subagent misreporting, #25166 hangs) unresolved. Integration tests gap. |
| **GitHub Copilot CLI** | **Moderate.** Two patches today but zero PRs—consolidation mode. | **Mature but troubled.** Plugin marketplace is new; Windows auto-update leak (#4111) and voice mode failure (#4024) erode trust. |
| **Kimi Code CLI** | **Low.** Only 2 issues, 3 PRs. No releases. | **Fragile.** Small community; bugs take months to resolve (#2318 since May). |
| **OpenCode** | **Very High.** 10 PRs, 2 releases, but UI migration causing user backlash. | **Volatile.** v2 migration broke core UI features (agent switcher, workspace support). Community is angry but engaged. |
| **Pi** | **High.** 10 PRs merged, breaking release (v0.80.7), model catalog refresh. | **Mature.** Provider bridge architecture is stable; extension API is growing. |
| **Qwen Code** | **Very High.** v0.19.10 stable release, RFC with 23 comments, 10+ PRs. | **Growing rapidly.** Multi-workspace daemon is ambitious. Hot-reload feature signals maturity. TUI bugs (#5971, #6809) are growing pains. |
| **DeepSeek TUI** | **High.** 15 merges in 24h, 10 PRs, active issue engagement. | **Early but energetic.** Documentation site redesign, provider expansion, but key bugs unresolved (slow streaming #4270, copy-paste #4208). |

**Verdict:**
- **Most mature:** OpenAI Codex, Claude Code, Pi
- **Fastest iteration:** Qwen Code, DeepSeek TUI, OpenCode
- **Most at risk:** Kimi Code (stagnant), Gemini CLI (unresolved P1s), GitHub Copilot CLI (consolidation may indicate slowing)
- **Most volatile:** OpenCode (v2 migration crisis)

## 6. Trend Signals

### Cost Transparency is Non-Negotiable
Multiple communities are reporting **silent cost drains**: Claude Code's Fable auto-selection (#76987, #77665), Gemini CLI's unauthorized quota consumption (#26860), and OpenAI Codex's workspace spend control gaps (#33187). Users demand real-time cost dashboards (Claude #66807, Codex #17827), hard opt-outs, and per-turn cost accounting. **For developers:** If you're building an AI CLI, transparent cost tracking is now table stakes.

### TUI Customization is the Next Front in UX Wars
The Community's most-voted feature request across all tools is OpenAI Codex's customizable status line (103👍). Copilot CLI users want color themes and session titles. Qwen Code users want scroll fixes. Claude Code's TUI sets the benchmark, and others are rushing to catch up. **Signal:** Terminal-based AI tools are becoming primary workspaces, not just interfaces—users want them to look and behave like professional IDEs.

### Agent Reliability is Trust's Make-or-Break
Subagent misreporting (Gemini #22323), background agent cancellation (Copilot #4127), and session corruption (Kimi #2496, Claude #77609) are eroding trust in autonomous workflows. The community is pushing back: they want deterministic behavior, proper error reporting, and the ability to audit agent decisions. **Signal:** "Agent mode" is a feature, not a product. Reliability features (forking, retry, visibility) matter more than raw autonomy.

### Platform Parity is Still a Distant Goal
Windows remains the most problematic platform: Claude Code MSIX updates fail (#76357), Codex crashes in browser use (#30178, #32683), Copilot CLI auto-update leaks CPU (#4111). Wayland is a known gap for Gemini CLI (#21983). OpenCode's Ivy Bridge CPU crash (#29039) shows even macOS has platform-specific issues. **Signal:** Cross-platform testing infrastructure is under-invested. Users on Windows/Linux are second-class citizens.

### Multi-Provider Bridge Tools Are Gaining Ground
Pi and OpenCode are explicitly designed as **provider-agnostic bridges**, and their growth suggests a market shift away from vendor lock-in. Claude Code's plugin system and GitHub Copilot CLI's marketplace are responses to this trend. **Signal:** The future is multi-model, multi-provider. Tools that lock users into a single model provider risk being displaced.

### Community-Driven Features Are Becoming the Norm
OpenCode's session management PRs (#36964-36968 by @ohsalmeron), Pi's provider additions (#6216, #6656), and DeepSeek TUI's MiniMax provider (#4354) show that community contributions are now a primary innovation channel. **Signal:** Open-source AI CLI tools are evolving like developer tools (VS Code, Neovim)—the platform is a shell, and the community fills it with capabilities.

---

**Bottom Line for Technical Decision-Makers:**

- **If you need stable enterprise deployment:** Look at **OpenAI Codex** (Azure support, conversation branching) or **Pi** (stable provider bridge, mature extension API).
- **If you value cost control above all:** **Claude Code** is investing heavily, but wait for the Fable opt-out fix. **Gemini CLI** has unresolved quota drain issues.
- **If you want the fastest innovation:** **Qwen Code** and **DeepSeek TUI** are releasing daily. **OpenCode** is innovating fast but risking stability.
- **If you need Windows reliability:** None of the tools are mature enough. **OpenAI Codex** and **GitHub Copilot CLI** are investing, but crashes persist.
- **If you build a multi-agent workflow:** **Claude Code** has the richest agent model, but **GitHub Copilot CLI** and **Qwen Code** are catching up with background agent support. Monitor subagent cancellation bugs before deploying.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
*Data as of 2026-07-15 | Source: github.com/anthropics/skills*

---

## 1. Top Skills Ranking

Below are the 5–8 most-discussed Skill submissions (Pull Requests) by community engagement. All remain **open** unless noted.

### 1. `skill-creator` Fix: Run Eval Recall Bug (PR #1298)
**Functionality:** Fixes `run_eval.py` reporting 0% recall across all queries — the root cause invalidates the entire description-optimization loop. The fix installs the eval artifact as a real skill and addresses Windows stream reading, trigger detection, and parallel worker issues.  
**Discussion highlights:** Linked to issue #556 (12 comments, 7 👍), independently reproduced 10+ times. The community has been unable to trust optimizer output for months.  
🔗 https://github.com/anthropics/skills/pull/1298

### 2. `document-typography` (PR #514)
**Functionality:** Typographic quality control for AI-generated documents — prevents orphan word wrap, widow paragraphs, and numbering misalignment. Targets a pain point in every Claude document output.  
**Discussion highlights:** Strong community resonance as a "universal" skill that addresses a persistent quality gap.  
🔗 https://github.com/anthropics/skills/pull/514

### 3. `skill-quality-analyzer` + `skill-security-analyzer` (PR #83)
**Functionality:** Two meta skills for evaluating other skills across five quality dimensions (Structure, Documentation, etc.) and security posture. From the `example-skills` collection.  
**Discussion highlights:** Early meta-skill proposal (Nov 2025). Represents a community desire for tooling around the Skills ecosystem itself — quality gatekeeping and security review.  
🔗 https://github.com/anthropics/skills/pull/83

### 4. `self-audit` — Mechanical Verification + Reasoning Quality Gate (PR #1367)
**Functionality:** Audits AI output before delivery: mechanical file existence check, then a four-dimension reasoning audit in damage-severity priority. Claims universal applicability across projects, tech stacks, and models. Version 1.3.0.  
**Discussion highlights:** Very recent (June 2026), but already followed by a companion proposal (issue #1385) for a three-gate pipeline. Suggests growing demand for safety/quality meta-patterns.  
🔗 https://github.com/anthropics/skills/pull/1367

### 5. `testing-patterns` (PR #723)
**Functionality:** Comprehensive testing skill covering philosophy (Testing Trophy model), unit testing (AAA pattern), React component testing, and edge cases.  
**Discussion highlights:** Moderate comment count but represents a clear community need for test-generation Skills. No similar skill existed before.  
🔗 https://github.com/anthropics/skills/pull/723

### 6. `color-expert` (PR #1302)
**Functionality:** Self-contained color expertise — naming systems (ISCC-NBS, Munsell, XKCD, RAL, Ridgway), color space selection tables (OKLCH for scales, OKLAB for gradients, CAM16 for perception).  
**Discussion highlights:** Niche but enthusiastically received. Demonstrates demand for deep domain-expertise Skills beyond generalist coding.  
🔗 https://github.com/anthropics/skills/pull/1302

### 7. `run_eval` Trigger Detection Fixes (PR #1323)
**Functionality:** Fixes `run_single_query` failing to detect skill triggers, causing recall=0% in the optimization loop. Also bails on first non-Skill tool call.  
**Discussion highlights:** Directly related to #1298; together they form a critical mass of fixes for the broken skill-creator toolchain.  
🔗 https://github.com/anthropics/skills/pull/1323

---

## 2. Community Demand Trends

From the top-commented Issues, the community is most actively requesting:

| Trend | Key Issues | What Drives It |
|---|---|---|
| **Security & Trust** | #492 (34 comments): community skills under `anthropic/` namespace enable trust-boundary abuse | Users are wary of granting elevated permissions to skills that impersonate official Anthropic ones. Demand for namespace separation and security review. |
| **Cross-Platform Compatibility** | #1061 (3 comments, 2 👍): Windows subprocess/PATHEXT/encoding failures; #556 (12 comments, 7 👍): run_eval broken everywhere | The skill-creator tooling is essentially unusable on Windows and unreliable on macOS/Linux. The community's top blocker is not new Skills but broken infrastructure. |
| **Org-Wide Skill Sharing** | #228 (14 comments, 7 👍): no way to share skills within organizations | Enterprise users need a sharing mechanism beyond manual file transfer. Implies demand for a skill registry or repository API. |
| **Meta-Skills & Quality Tooling** | #202: skill-creator needs rewrite; #189: duplicate skills from overlapping installs | Power users want better tooling to author, validate, and audit skills, not just consume them. |
| **New Skill Categories** | #412: agent-governance (safety patterns); #1329: compact-memory (symbolic agent state); #1385: reasoning quality gate pipeline | The community is pushing beyond coding/documentation into AI behavior governance and agent lifecycle management. |
| **Integration with External Ecosystems** | #29: Bedrock support; #16: expose Skills as MCPs | Users want Skills to work outside Claude Code's native environment — on AWS Bedrock, or via Model Context Protocol. |

**Most-anticipated new Skill directions:**
- Agent governance and safety patterns (Issue #412)
- Compact memory / symbolic notation for agent state (Issue #1329)
- Reasoning quality gate pipelines (Issue #1385)
- Document typography (PR #514 — already submitted)

---

## 3. High-Potential Pending Skills

These open PRs have active community discussion and are likely to land soon:

| Skill | PR | Key Reason to Watch |
|---|---|---|
| **run_eval fix (recall)** | #1298 | Addresses the #1 blocker for skill-creator toolchain. Multiple contributors (MartinCajiao, Polluelo978, alvingarcia) each fixing different parts. |
| **document-typography** | #514 | Clean, focused, solves a universal pain point. No controversy. |
| **self-audit** | #1367 | Recently submitted, already spawned a companion proposal (#1385). Signals a new category of meta-Skills. |
| **testing-patterns** | #723 | Fills a clear gap; no competing PR. |
| **color-expert** | #1302 | Niche but well-scoped; likely to merge without heavy blockers. |
| **ODT skill** | #486 | OpenDocument support — fills an enterprise document-format gap (alongside existing DOCX, PDF). |
| **SAP-RPT-1-OSS predictor** | #181 | Enterprise analytics skill — niche but shows demand for domain-specific ML integration. |

All remain **open**; none have been merged or closed as of the data date.

---

## 4. Skills Ecosystem Insight

**The community's most concentrated demand is for robust, cross-platform skill-creator tooling (trigger detection, Windows compatibility, and eval fixes) that unblocks the creation of domain-specific quality-meta-skills, with security namespace governance as the critical trust prerequisite.**

---

# Claude Code Community Digest — 2026-07-15

## Today’s Highlights

Two patch releases landed today addressing a blocking dialog bug in background agents and adding a live elapsed-time counter for long-running tool calls. Meanwhile, the issue tracker saw a surge of reports around **Fable over-consumption**, **permission regressions**, and **worktree isolation bugs**, making it clear that agent cost control and worktree reliability are top community pain points.

---

## Releases

**v2.1.210** — [View release](https://github.com/anthropics/claude-code/releases/tag/v2.1.210)
- Added a **live elapsed-time counter** to the collapsed tool summary line so long-running tool calls visibly tick instead of appearing stuck.
- Added a startup warning for `Write(path)`, `NotebookEdit(path)`, and `Glob(path)` permission rules — users are advised to use `Edit(path)` or `Read(path)` instead.

**v2.1.209** — [View release](https://github.com/anthropics/claude-code/releases/tag/v2.1.209)
- Fixed `/model` and other dialogs being blocked in `claude agents` background sessions (reverted an overly broad guard).

---

## Hot Issues (Top 10 Noteworthy)

1. **[BUG] API Error: Connection closed mid-response** [#69415](https://github.com/anthropics/claude-code/issues/69415)  
   Frequent connection drops making Claude Code unusable on VS Code + WSL. Highly upvoted (54 👍, 26 comments). Community is frustrated by lack of root-cause fix.

2. **[BUG] Desktop app: cannot change primary working directory or open new chat** [#54461](https://github.com/anthropics/claude-code/issues/54461)  
   Long-standing Windows desktop issue (since April) with 18 comments and 9 upvotes. Still open and blocking basic workflow.

3. **[BUG] Fable ate usage on process it invented** [#76987](https://github.com/anthropics/claude-code/issues/76987)  
   A passionate weekend post-mortem detailing how Fable auto-selection inflated token consumption without delivering work. 14 comments, 0 upvotes (likely due to rant tone), but captures a widespread sentiment.

4. **[FEATURE] Context-health monitoring** [#66807](https://github.com/anthropics/claude-code/issues/66807)  
   Request for a real-time dashboard showing context window usage, session token burn, and model interactions. 13 comments, gaining traction.

5. **[BUG] Cowork Desktop: AskUserQuestion card never reaches renderer** [#58750](https://github.com/anthropics/claude-code/issues/58750)  
   macOS desktop bug where pending user requests silently resolve as "Dismissed" on quit. 8 comments, 4 👍. Erodes trust in async workflows.

6. **[BUG] Desktop app ignores `permissions.allow` rules** [#73587](https://github.com/anthropics/claude-code/issues/73587)  
   Regression on Windows: permission prompts appear for every file access, even Claude's own config directory. 5 comments, 2 👍. High impact for desktop users.

7. **[FEATURE] Let parent session observe its spawned children** [#71773](https://github.com/anthropics/claude-code/issues/71773)  
   Request for session ID lineage and visibility into sub‑agent task output from the parent. 4 comments. Critical for multi-agent orchestration.

8. **[BUG] Windows MSIX update fails with file lock** [#76357](https://github.com/anthropics/claude-code/issues/76357)  
   Every update leaves the app unlaunchable until reboot. 3 comments, 1 👍. Reproducible and frustrating for Windows users.

9. **[BUG] Worktree pool grants already-active worktree to second session** [#77609](https://github.com/anthropics/claude-code/issues/77609)  
   Evidence of duplicate allocation (via `createdAt` timestamps) distinct from a reclaim race. 2 comments. Could lead to data corruption.

10. **[BUG] Weekly quota drained in hours: Fable auto-selection + idle cache_read polling** [#77665](https://github.com/anthropics/claude-code/issues/77665) (closed)  
    Max plan user burned 1.37B cache_read tokens in 24h, including 665M after explicitly opting out of Fable. 1 comment but a high signal issue.

---

## Key PR Progress

1. **`claude-compare`** — [#77613](https://github.com/anthropics/claude-code/pull/77613)  
   Open. New tool for side-by-side model output comparison.

2. **fix(plugin-dev): validate-hook-schema.sh handles plugin hooks.json format** — [#77556](https://github.com/anthropics/claude-code/pull/77556)  
   Open. Fixes two bugs in the hook-schema validator shipped with the official plugin-dev skill.

3. **fix(hookify): match Write and prompt rules** — [#77492](https://github.com/anthropics/claude-code/pull/77492)  
   Open. Makes file rules inspect content passed to `Write`, maps simple prompt rules to `UserPromptSubmit`, and adds regression tests.

4. **fix(hookify): match Write and prompt rules** — [#77260](https://github.com/anthropics/claude-code/pull/77260) (closed, reopened)  
   Earlier attempt at the same fix; superseded by #77492.

5. **fix(ralph-wiggum): make stop hook's jq error handling reachable under set -e** — [#77443](https://github.com/anthropics/claude-code/pull/77443)  
   Open. Fixes a bug where `jq` failures were silently skipped due to `set -e` blocking the error branch.

6. **fix: repair issue-automation telemetry and dead days_back input** — [#77442](https://github.com/anthropics/claude-code/pull/77442)  
   Open. Three small correctness fixes: timestamp in 1970, missing days_back passthrough, and misspelled job output reference.

7. **docs(plugins): sync security-guidance listing with v2.0.0 plugin manifest** — [#77439](https://github.com/anthropics/claude-code/pull/77439)  
   Open. Marketplace listing still showed v1.0.0 after a major rewrite.

8. **fix(pr-review-toolkit): make code-reviewer a leaf agent** — [#77427](https://github.com/anthropics/claude-code/pull/77427)  
   Open. Restricts the code reviewer to inspection-only tools to prevent runaway agent spawning.

9. **docs: document Remote Control background-task panel** — [#76298](https://github.com/anthropics/claude-code/pull/76298) (closed, merged)  
   Updates Remote Control docs to describe the web/mobile background-task panel and task status sync behavior.

---

## Feature Request Trends

- **Session & agent observability** — Multiple requests for context‑health monitoring (#66807), parent‑child session lineage (#71773), and sub‑agent identity rendering (#77655) indicate a strong desire for better transparency into multi‑agent workflows.
- **Permission flexibility** — Users want per‑connector toggles for MCP widgets (#77319), configurable shell expansion behaviour (#77668), and language‑customizable session titles (#72004) — all pointing to a need for finer‑grained, user‑controlled permission and UI settings.
- **Agent definition integrity** — Requests for stale‑anchor detection in custom agent definitions (#77667) and leaf‑agent restrictions (PR #77427) show the community wants safer, more maintainable agent orchestration.

---

## Developer Pain Points

- **Fable model cost management** — Reports of runaway token consumption (#76987, #77665, #77659) dominate. Even after opting out, Fable can still be auto‑selected, draining weekly quotas in hours. The community is demanding opt‑out that actually sticks and better cost accounting.
- **Permission system regressions** — Desktop app ignoring `permissions.allow` (#73587) and MCP allowlisted tools prompting again on fresh sessions (#76238) are breaking trust in the permission model.
- **Worktree isolation failures** — Duplicate allocations (#77609), uncommitted work loss (#77661), and remote‑tracking ref clobbering (#77660) suggest the worktree pooling system has critical bugs across platforms.
- **Update reliability on Windows** — Every MSIX update fails with file‑lock errors (#76357), requiring a full reboot.
- **False positives in agent moderation** — Advisor misidentifying legitimate transcript content as injection (#77548) and sub‑agent notifications vanishing (#76681) erode confidence in autonomous operations.

---

*Digest generated from GitHub data at [github.com/anthropics/claude-code](https://github.com/anthropics/claude-code).*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-07-15

## Today’s Highlights
A burst of Rust alpha releases (0.145.0-alpha.9 through .12) signals active pre‑release work, while the stable v0.144.4 patch ships with no user‑facing changes. The community remains highly engaged around Azure/GPT‑5.6-Sol compatibility issues (46 comments on #31870) and the long‑standing request for a customizable TUI status line (103 👍). Several internal refactoring PRs—especially around thread forking and session I/O separation—landed in quick succession, pointing to a focused push on conversation branching and retry robustness.

## Releases
- **rust‑v0.145.0‑alpha.9 / .10 / .11 / .12** – Four alpha releases in the 0.145 pipeline; no changelog details provided.
- **rust‑v0.144.4** – Patch release with no user‑facing changes. ([Full changelog](https://github.com/openai/codex/compare/rust-v0.144.3...rust-v0.144.4))

## Hot Issues (10 selected from 50 recent)

1. [#31870 – Codex with GPT‑5.6‑Sol through Azure fails every turn](https://github.com/openai/codex/issues/31870)  
   *46 comments, 39 👍*  
  **Why it matters:** A show‑stopper for Azure Foundry users on gpt‑5.6‑sol. The `X-OpenAI-Internal-Codex-Responses-Lite` error appears on every turn, making the model unusable. High community attention suggests many enterprise deployments are blocked.

2. [#17827 – Customizable status line in TUI](https://github.com/openai/codex/issues/17827)  
   *28 comments, 103 👍*  
  **Why it matters:** The most upvoted feature request. Users want a configurable bottom bar showing token usage, model, rate limits, git branch – inspired by Claude Code. High demand indicates TUI polish is a priority.

3. [#30178 – Codex Desktop in‑app browser crashes on webview navigation](https://github.com/openai/codex/issues/30178)  
   *16 comments, 0 👍*  
  **Why it matters:** Windows desktop app becomes unusable when using the built‑in browser. The crash (0xC0000005) suggests a memory safety issue in Electron/Chromium.

4. [#20783 – Blocking stop hook continuation fails with invalid local message ID](https://github.com/openai/codex/issues/20783)  
   *15 comments, 4 👍*  
  **Why it matters:** A blocking stop hook can corrupt the conversation state, requiring manual recovery. Impacts users relying on safety or moderation hooks.

5. [#32683 – Windows Codex App crash in CrBrowserMain when Browser Use opens a page](https://github.com/openai/codex/issues/32683)  
   *14 comments, 3 👍*  
  **Why it matters:** Second browser‑related crash on Windows this week. The `chrome.dll+0x2e08f46` access violation suggests a shared underlying cause with #30178.

6. [#22857 – Better SSH key authentication for remote connections](https://github.com/openai/codex/issues/22857)  
   *13 comments, 14 👍*  
  **Why it matters:** Users want to remote‑control CLI hosts from iOS/Desktop apps but find key‑based auth cumbersome. The request spans all app variants.

7. [#28919 – Windows Codex app missing “Control other devices” tab in Settings](https://github.com/openai/codex/issues/28919)  
   *12 comments, 21 👍*  
  **Why it matters:** Windows users cannot access the remote‑device control feature that exists on macOS. A clear platform parity gap.

8. [#29908 – apply_patch and managed sandbox fail with Bubblewrap loopback errors on Ubuntu 24.04](https://github.com/openai/codex/issues/29908)  
   *10 comments, 0 👍*  
  **Why it matters:** Core tool‑calls break on the latest Ubuntu LTS due to Bubblewrap sandboxing issues. Affects developers on newer distributions.

9. [#26984 – MCP stdio servers leak pipe FDs and orphan child processes → EMFILE](https://github.com/openai/codex/issues/26984)  
   *9 comments, 2 👍*  
  **Why it matters:** Long‑running sessions hit `EMFILE` because MCP sub‑processes aren’t cleaned up. A stability risk for heavy MCP users.

10. [#32477 – apply_patch stalls 40–60 seconds on Windows for one‑line edits](https://github.com/openai/codex/issues/32477)  
    *7 comments, 4 👍*  
   **Why it matters:** Severe performance regression in `apply_patch` on Windows 11, reproducible across GPT‑5.6 models. Makes simple file edits painfully slow.

## Key PR Progress (10 selected from 20 recent)

1. [#33213 – Prepare Python SDK 0.144.4 stable release](https://github.com/openai/codex/pull/33213)  
   Marks `openai-codex` as stable and aligns its runtime with CLI 0.144.4. Regenerated protocol models and notification registry.

2. [#33211 – Preserve thread context when retrying or editing turns](https://github.com/openai/codex/pull/33211)  
   Adds `beforeTurnId` support to `thread/fork`, enabling TUI backtracking and safety retries without losing conversation history.

3. [#33209 – Separate session state from session I/O](https://github.com/openai/codex/pull/33209)  
   Refactors `Codex` wrapper into `Arc<Session>` + dedicated `SessionIo` handle. Decouples state management from event handling for better concurrency.

4. [#33207 – Retry safety‑buffered turns on a forked thread](https://github.com/openai/codex/pull/33207)  
   Instead of rolling back the active thread, forks after the preceding completed turn and retries there. Avoids corrupting the original conversation.

5. [#33203 – Preserve in‑flight state when restoring thread input](https://github.com/openai/codex/pull/33203)  
   Adds explicit restore mode for thread input snapshots, preserving pending interrupt flags and queued input during replay.

6. [#33201 – Branch conversations when editing earlier TUI prompts](https://github.com/openai/codex/pull/33201)  
   Forks the conversation before the selected prompt instead of rolling back. Keeps the original conversation intact while allowing edits.

7. [#33200 – Separate exec permission paths from core models](https://github.com/openai/codex/pull/33200)  
   Makes filesystem permission models generic over `AbsolutePathBuf`, enabling sandbox contexts to serialize paths as portable URIs.

8. [#33198 – Keep interrupted prompts in conversation history](https://github.com/openai/codex/pull/33198)  
   Leaves an output‑free interrupted prompt in the transcript and opens a blank composer, improving UX on `Esc`/`Ctrl‑C`.

9. [#33187 – Honor workspace spend controls in rate‑limit handling](https://github.com/openai/codex/pull/33187)  
   Propagates workspace hard‑stop and credit‑availability metadata to prevent stale rate‑limit overwrites.

10. [#33184 – Reuse MCP tool catalogs across sessions](https://github.com/openai/codex/pull/33184)  
    Caches recent tool catalogs for matching stdio MCP servers, eliminating repeated initialization waits on session start.

## Feature Request Trends
- **TUI customization** – The most‑voted request (#17827, 103 👍) for a configurable status line echoes a strong desire for terminal UI parity with Claude Code.
- **Project management** – Several requests (#25498, #22857) ask for first‑class project registration, thread movement between projects, and better remote host key management.
- **macOS integration** – Two related issues (#31925, #32689) ask to restore the `Option+Space` quick‑chat hotkey after the ChatGPT/Codex app unification broke it.
- **Browser use reliability** – Crashes on Windows (#30178, #32683) and Chrome plugin failures (#33004, #32941) indicate fragility in the in‑app browser and extension.

## Developer Pain Points
- **Windows app crashes & performance** – Multiple reports of desktop crashes during browser use (`0xC0000005` at `chrome.dll`), `apply_patch` stalls (40–60s), and global freezes due to large sessions or image‑heavy JSONL (#28531). Windows remains the most troubled platform.
- **Resource leaks** – MCP stdio servers leak file descriptors and orphan processes (#26984), leading to `EMFILE` errors in long sessions.
- **Sandboxing issues** – Bubblewrap failures on Ubuntu 24.04 (#29908) and empty `.git` directories triggering Windows Defender high CPU (#29911) show environment‑specific toolchain friction.
- **Rate limit & account confusion** – Users report banked resets not appearing (#33017) and sparse rate‑limit updates causing misleading spend displays (#33187 indirectly).
- **Azure compatibility** – GPT‑5.6‑Sol via Azure fails on every turn (#31870), impacting enterprise trial users and highlighting gaps in the Azure onboarding path.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-07-15

## Today's Highlights
A new nightly build (v0.52.0‑nightly) is available, though it carries no user‑facing changes. The community is actively discussing a serious P2 issue where user quotas are being consumed without any API calls (#26860), and a security PR landed that closes a bash variable‑expansion bypass (#28403). On the performance front, a new PR bounds shell output sent to the model (#28401) and another limits recursive reasoning turns (#28164), both addressing long‑standing reliability concerns.

## Releases
- **v0.52.0‑nightly.20260715.gfa975395b** – Automated nightly release.  
  [Full changelog](https://github.com/google-gemini/gemini-cli/compare/v0.52.0-nightly.20260714.gfa975395b...v0.52.0-nightly.20260715.gfa975395b)

## Hot Issues (10 most noteworthy)

1. **#26860 – Unauthorized quota consumption** (P2, 13 comments)  
   Users report that their Gemini API quota is being drained without any active requests. The issue has been open since May and is generating frustration.  
   [Issue](https://github.com/google-gemini/gemini-cli/issues/26860)

2. **#22405 – CLI gets stuck after first command** (P3, 10 comments)  
   The agent hangs after executing a single command, requiring a restart. Severity is P3 but impact is high for daily drivers.  
   [Issue](https://github.com/google-gemini/gemini-cli/issues/22405)

3. **#22323 – Subagent recovery misreports success** (P1, 10 comments)  
   A subagent hitting `MAX_TURNS` still returns `status: "success"`, hiding interruption. This breaks trust in the agent’s feedback loop.  
   [Issue](https://github.com/google-gemini/gemini-cli/issues/22323)

4. **#25872 – Browser agent requires constant approval even in yolo mode** (P2, 8 comments)  
   The `browser_agent` ignores approval settings, defeating the purpose of `yolo` mode. Community calls for a consistent override hierarchy.  
   [Issue](https://github.com/google-gemini/gemini-cli/issues/25872)

5. **#24208 – Persistent 429 errors for paid users** (P2, 5 comments)  
   Non‑free users face constant rate‑limiting without acknowledgement. The thread expresses strong dissatisfaction.  
   [Issue](https://github.com/google-gemini/gemini-cli/issues/24208)

6. **#25166 – Shell command hangs with “Waiting input”** (P1, 4 comments)  
   After a command finishes, the agent mistakenly awaits input. Reproduction is trivial and affects simple `ls`‑type commands.  
   [Issue](https://github.com/google-gemini/gemini-cli/issues/25166)

7. **#21983 – Browser subagent fails on Wayland** (P1, 4 comments)  
   The browser subagent crashes on Linux/Wayland, reporting “GOAL” but never launching. A known platform gap.  
   [Issue](https://github.com/google-gemini/gemini-cli/issues/21983)

8. **#26522 – Auto Memory retries low‑signal sessions indefinitely** (P2, 5 comments)  
   Low‑signal sessions are never marked as processed, causing them to re‑appear and waste extraction quota.  
   [Issue](https://github.com/google-gemini/gemini-cli/issues/26522)

9. **#22672 – Agent should discourage destructive operations** (P2, 3 comments)  
   The model occasionally uses `--force` or `git reset` when safer alternatives exist. Community asks for protective guardrails.  
   [Issue](https://github.com/google-gemini/gemini-cli/issues/22672)

10. **#23039 – Infinite restart loop on macOS M4** (P3, 6 comments)  
    Agent mode crashes with `Exit Code 41` on Apple Silicon, while standard chat works. Likely an `invalid_grant` token issue.  
    [Issue](https://github.com/google-gemini/gemini-cli/issues/23039)

## Key PR Progress (10 selected)

1. **#28404 – fix(core): override genai version of google-auth-library** (XS)  
   A dependency bump to address auth‑library compatibility.  
   [PR](https://github.com/google-gemini/gemini-cli/pull/28404)

2. **#28403 – Block $VAR and ${VAR} expansion bypass** (M, security)  
   Closes GHSA‑wpqr‑6v78‑jr5g by extending shell‑injection detection to variable expansion.  
   [PR](https://github.com/google-gemini/gemini-cli/pull/28403)

3. **#28224 – Avoid splitting emoji when truncating display strings** (S, closed)  
   Fixes surrogate‑pair corruption in terminal output.  
   [PR](https://github.com/google-gemini/gemini-cli/pull/28224)

4. **#28219 – Parse commented settings.json in memory bootstrap** (S, closed)  
   Enables comment‑bearing config files to be read without silent fallback to defaults.  
   [PR](https://github.com/google-gemini/gemini-cli/pull/28219)

5. **#28305 – Add tool call formatter for eval failures** (L)  
   Introduces a compact timeline of agent tool calls in eval console output, improving debuggability.  
   [PR](https://github.com/google-gemini/gemini-cli/pull/28305)

6. **#28401 – Bound shell command output sent to the model** (M, P1)  
   Prevents large command outputs (e.g., `find /`) from flooding the model context, saving tokens and improving response quality.  
   [PR](https://github.com/google-gemini/gemini-cli/pull/28401)

7. **#28164 – Limit recursive reasoning turns per request** (M/L)  
   Caps recursion at 15 turns (configurable), protecting CPU and API quotas from infinite loops.  
   [PR](https://github.com/google-gemini/gemini-cli/pull/28164)

8. **#28319 – Refactor A2A server path trust check** (M/L)  
   Moves environment loading after workspace trust verification and isolates task environment via `AsyncLocalStorage`.  
   [PR](https://github.com/google-gemini/gemini-cli/pull/28319)

9. **#24303 – Native V8 memory & profiling suite** (L, maintainer only)  
   GSoC 2026 proposal for a terminal‑integrated diagnostics companion. Still open, showing long‑term interest in performance tooling.  
   [PR](https://github.com/google-gemini/gemini-cli/pull/24303)

10. **#28402 – Bump version to nightly** (S, robot)  
    Automated version bump for today’s nightly release.  
    [PR](https://github.com/google-gemini/gemini-cli/pull/28402)

## Feature Request Trends

- **AST‑aware code understanding** – Several issues (#22745, #22746) and the codebase investigator epic push for AST‑based file reading, search, and mapping to reduce token waste and improve multi‑turn accuracy.
- **Browser agent resilience** – Requests for automatic session takeover, lock recovery (#22232), and proper `maxTurns` override handling (#22267) dominate the browser‑related wish list.
- **Subagent transparency** – Users want subagent trajectories visible in chat shares (#22598) and better reasoning traces so they can audit agent behaviour.
- **Evaluation infrastructure** – A dedicated epic (#24353) calls for component‑level evaluations, with over 76 behavioral evals already written but needing better automation and failure summaries.
- **Memory system polish** – Issues #26516, #26522, #26525 collectively request deterministic redaction, quarantining invalid patches, and stopping low‑signal session retries.

## Developer Pain Points

1. **Silent quota/credits drain** – Multiple threads (#26860, #24208) report unexplained API usage, eroding trust in the tool’s cost transparency.
2. **Agent hangs and false success** – The agent often hangs after a command (#22405, #25166) or reports success when it actually hit a turn limit (#22323). This undermines autonomous workflows.
3. **Browser agent reliability** – Wayland crashes (#21983), ignored settings (#22267), and unnecessary approval prompts (#25872) make the browser subagent unpredictable.
4. **Destructive command risks** – The model occasionally uses forceful operations (#22672) or scatters temporary scripts (#23571), creating cleanup overhead.
5. **Memory system confusion** – Invalid patches are silently skipped, low‑signal sessions loop, and secrets are sent to the model before redaction (#26523, #26525, #26522).
6. **Rate‑limiting for paying users** – Paid users face 429 errors with no official acknowledgement (#24208), a recurring frustration in several open issues.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-07-15

## Today's Highlights

Two patch releases landed today—v1.0.71-1 and v1.0.71-2—bringing persistent microphone selection for voice mode, canvas support for extensions, and plugin marketplace management commands. The community is actively reporting bugs around voice transcription failures (#4024), persistent 400 errors on code reviews (#1274), and a major Windows auto-update leak that spins orphaned processes at 100% CPU (#4111). A high-demand request for built-in PDF reading (#443) continues to gather support.

## Releases

**v1.0.71-2** (latest)
- **Added:** `/voice devices` to choose and persist microphone for voice mode; agent availability limits for tasks/subagents; canvas support in CLI for extension-driven interactions.
- **Improved:** Richer cost profiles in `/chronicle cost-tips`.

**v1.0.71-1**
- **Added:** Persist GitHub MCP toolset/tool config via `settings.json`; `plugins marketplace` subcommands (list, add, remove); sidebar session persistence across restarts; marketplace browse and update commands.
- **Split:** (partial note, likely internal refactoring)

## Hot Issues (10 selected)

1. **#1274 — [area:tools] CLI constantly getting 400 errors for invalid request body**  
   *Author: unusualbob | Updated: 2026-07-15 | Comments: 26 | 👍: 11*  
   The most active bug this cycle. 95% of code review prompts on diffs return 400 errors over the last few hours. Could be server-side validation or malformed requests. High community engagement.  
   [Link](https://github.com/github/copilot-cli/issues/1274)

2. **#4024 — [area:models] Voice mode: all bundled ASR models fail silently**  
   *Author: sylvanc | Updated: 2026-07-14 | Comments: 8 | 👍: 0*  
   `/voice` records audio but every transcription returns empty across all three Nemotron models. Likely a MultiModalProcessor routing bug for RNNT models in Foundry Local Core. Blocks voice mode entirely.  
   [Link](https://github.com/github/copilot-cli/issues/4024)

3. **#443 — [area:tools] Feature Request: Built-in PDF Reading Support**  
   *Author: non-stop-dev | Updated: 2026-07-14 | Comments: 5 | 👍: 33*  
   Community strongly wants native PDF reading—no external `pdftotext` or manual extraction. Academic papers, technical docs, reports.  
   [Link](https://github.com/github/copilot-cli/issues/443)

4. **#2165 — [area:platform-linux, area:authentication] Ubuntu keychain support is broken**  
   *Author: AndreaPi | Updated: 2026-07-14 | Comments: 3 | 👍: 21*  
   Two bugs: incorrect documentation for `secret-tool` installation, and a second authentication failure. Affects Ubuntu users widely.  
   [Link](https://github.com/github/copilot-cli/issues/2165)

5. **#4096 — [area:authentication, area:mcp] Third-party MCP server shows "Connected" but tools missing from CLI**  
   *Author: bugale | Updated: 2026-07-14 | Comments: 3 | 👍: 2*  
   OAuth token is never bridged to CLI sessions after connecting a remote MCP server (e.g., Atlassian). The app says "Connected" but tools are invisible to the agent.  
   [Link](https://github.com/github/copilot-cli/issues/4096)

6. **#4097 — [area:sessions, area:tools] apply_patch stores deleted binary in session history, permanently exceeding CAPI 5 MB limit**  
   *Author: Adamkadaban | Updated: 2026-07-14 | Comments: 1 | 👍: 1*  
   Deleting a large binary via `apply_patch` stores the full binary as a textual diff in conversation history. Subsequent requests exceed the 5 MB limit and `/compact` cannot recover.  
   [Link](https://github.com/github/copilot-cli/issues/4097)

7. **#4103 — [area:authentication, area:plugins] Plugin marketplace clone disables Git credential helpers**  
   *Author: arnab9211 | Updated: 2026-07-14 | Comments: 1 | 👍: 2*  
   Regression from v1.0.70: cloning a private Azure DevOps HTTPS repo fails because Git credential helpers are stripped. Manual clone works fine.  
   [Link](https://github.com/github/copilot-cli/issues/4103)

8. **#4118 — [triage] /app command does not select current working directory by default**  
   *Author: doggy8088 | Updated: 2026-07-14 | Comments: 0 | 👍: 33*  
   High-demand usability issue: the `/app` slash command requires manual selection of the working directory instead of defaulting to cwd.  
   [Link](https://github.com/github/copilot-cli/issues/4118)

9. **#4111 — [area:platform-windows, area:installation] Windows: long-running sessions left open across auto-update spin 100% CPU**  
   *Author: RockNoggin | Updated: 2026-07-14 | Comments: 0 | 👍: 0*  
   Serious resource leak: orphaned `copilot.exe.old` processes continue executing after in-place auto-update, consuming 100% CPU indefinitely.  
   [Link](https://github.com/github/copilot-cli/issues/4111)

10. **#4127 — [triage] Background agents cancelled when new user turn emits `user.abort`**  
    *Author: scotttesler | Updated: 2026-07-14 | Comments: 0 | 👍: 0*  
    Submitting a new user turn cancels background subagents launched by the previous turn, making their IDs unreadable. Breaks multi-agent workflows.  
    [Link](https://github.com/github/copilot-cli/issues/4127)

## Key PR Progress

No pull requests were updated in the last 24 hours. The project appears to be in a consolidation phase after the two new patch releases.

## Feature Request Trends

- **Built-in PDF Reading** (#443, 33 👍): Highest-requested feature. Users want native PDF support for academic papers, technical documentation, and reports without external dependencies.
- **Color Customization** (#4117): Community wants more granular theme definitions—higher-contrast backgrounds, per-element color settings.
- **Terminal/Tab Title Customization** (#4121): Session titles degrade to bare semicolons in SecureCRT; users want persistent, meaningful terminal window titles.
- **Conversation Titles in Session View** (#4124): Users want to see conversation names directly in the CLI without navigating to `/session`.
- **Double-Tap Enter Interrupt** (#4125): Inspired by Grok CLI—send a new prompt immediately by double-tapping Enter, skipping the queue.
- **/app Default Directory** (#4118, 33 👍): The `/app` command should automatically use the current working directory.
- **Enterprise OTel auth with mTLS** (#3477): Enterprise teams need mutual TLS support for OpenTelemetry endpoints, not just static headers.
- **Session Persistence on Crash** (#4115, closed): Users want frequent flush-to-disk of session data to avoid losing work after unexpected restarts.
- **OTel Cost Data in JSON Output** (#4107): Request to include token counts and cost usage in `--output-format json`.

## Developer Pain Points

- **Authentication and Platform Integration**  
  Ubuntu keychain (#2165) and plugin marketplace git credential handling (#4103) remain broken, blocking developers on Linux and those using private HTTPS repos.

- **Voice Mode Reliability**  
  All three bundled ASR models silently fail (#4024), making voice mode unusable despite successful audio capture. The newly released `/voice devices` command (#4125) may help but won't fix the core transcription bug.

- **Session and Memory Management**  
  Binary deletion inflating session history (#4097), session loss after crash (#4115), and `/resume` failing for non-GitHub repos (#4054) are recurring pain points.

- **Tool Integration Bugs**  
  - 400 errors on code review requests (#1274)  
  - SQL tool blocking reserved keywords inside string literals (#4128)  
  - `/copy` failing on Linux snap packages (#4109)  
  - Right-click copy contaminating clipboard with border glyphs (#4116)

- **Windows and Resource Leaks**  
  Auto-update orphaned processes spinning at 100% CPU (#4111) and Python LSP servers appearing in macOS Dock (#4108) are platform-specific nuisances.

- **Agent and Extension Reliability**  
  Background agents cancelled by new user turns (#4127), `.agent.md` relative links failing (#4122), canvas `open` events malformed (#4112), and agents ignoring explicit `AGENTS.MD` (#4123) frustrate advanced users building custom workflows.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-07-15

## Today’s Highlights
No new releases were published today, but the team closed three critical bug-fix pull requests addressing reasoning parameter serialization, empty reasoning content handling, and dynamic completion budget allocation. Meanwhile, an open issue about organization-level TPD rate limits continues to draw community attention, with the original reporter still awaiting a resolution.

## Releases
No new versions were released in the last 24 hours.

## Hot Issues
Only two issues were updated in the past day, and neither qualifies as a “hot” issue by volume. Both are summarized below.

- **[#2318 – [bug] request reached organization TPD rate limit, current: 1505241](https://github.com/MoonshotAI/kimi-cli/issues/2318)**  
  *Status: Open | Created: 2026-05-18 | Updated: 2026-07-14 | 👍 1*  
  The reporter describes a critical bug where the CLI incorrectly calculates or tracks total daily prompt (TPD) usage, causing premature rate limit errors when using the `moonshot.ai` platform with `kimi 2.6` on Windows. With only one comment, the community has not yet engaged heavily, but the open status since May suggests this is a persistent pain point for users at scale.

- **[#2496 – [bug] resuming forked session results in corrupted output](https://github.com/MoonshotAI/kimi-cli/issues/2496)**  
  *Status: Closed | Created: 2026-07-13 | Updated: 2026-07-14 | 👍 0*  
  A user reported that running `kimi -r` on a forked session produces garbled output on Windows. The issue was closed without comments, likely because the root cause was addressed by one of today’s PRs (see PR #2498). No further community reaction was recorded.

## Key PR Progress
All three pull requests merged today address backend-level bugs in the `kosong` and `kimi` providers.

- **[#2499 – fix(kosong): stop sending Kimi reasoning effort implicitly](https://github.com/MoonshotAI/kimi-cli/pull/2499)**  
  *Status: Closed | Merged 2026-07-14*  
  Ensures that the `reasoning_effort` legacy parameter is no longer automatically serialized when configuring Kimi thinking requests through `thinking.type`. The fix preserves caller-provided thinking effort as independent provider state, eliminating implicit clamping.

- **[#2498 – fix(kosong): preserve empty-string reasoning_content as ThinkPart](https://github.com/MoonshotAI/kimi-cli/pull/2498)**  
  *Status: Closed | Merged 2026-07-14*  
  Prevents a 400 error (`preserved thinking requires reasoning_content on every assistant message`) by treating empty-string `reasoning_content` as a valid `ThinkPart`. The bug was caught in a live session dump from model `coding-model-okapi-0711-vibe`. This likely fixes the corruption reported in issue #2496.

- **[#2494 – fix(kimi): use remaining context for completion budget](https://github.com/MoonshotAI/kimi-cli/pull/2494)**  
  *Status: Closed | Merged 2026-07-14*  
  Replaces a hard-coded 32k token completion budget with the remaining context window for Kimi requests, including those wrapped by `ChaosChatProvider`. This change improves long-session reliability by dynamically adjusting the budget based on actual context usage.

## Feature Request Trends
No new feature requests appeared in the last 24 hours. All recent issue and PR activity focused on bug fixes, suggesting the maintainers are currently prioritizing stability over new capabilities.

## Developer Pain Points
Recurring frustrations evident from the last day’s activity:

- **Rate limit misconfiguration** – Issue #2318 highlights that TPD rate limits are incorrectly computed for the `moonshot.ai` platform, causing unpredictable throttling. Users relying on heavy workloads are affected.
- **Session corruption on resume** – Issue #2496 (now resolved by PRs #2498 and #2499) shows that resuming forked sessions could produce broken output, a major obstacle for workflows that depend on persistent agent sessions.
- **Reasoning parameter handling** – Two of today’s three PRs address subtle bugs in how reasoning content and effort are serialized for the Kimi provider, indicating that the thinking/multi-step reasoning pipeline remains a fragile area.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

好的，作为一名专注于AI开发者工具的技术分析师，这是根据您提供的GitHub数据生成的OpenCode社区摘要。

---

### OpenCode 社区摘要
**日期:** 2026-07-15

#### 1. 今日亮点
今日的核心事件是 **v1.18.0 和 v1.18.1 的连续发布**，标志着桌面端向全新的 v2 布局迁移迈出了关键一步。然而，这次更新引发了社区强烈的负面反馈，**大量用户报告 v2 新 UI 中“代理切换器”（Plan/Build 模式）消失**，迫使团队紧急发布 v1.18.1 进行修复。与此同时，社区贡献者 @ohsalmeron 提交了一系列高质量的 PR，专注于增强对话管理（如归档、删除、重命名、分支和上下文压缩），显示出社区对改善基础工作流体验的迫切需求。

#### 2. 版本发布
**v1.18.1 和 v1.18.0** 已发布，主要聚焦于桌面端的 v2 迁移。

- **v1.18.1**: 紧急修复了v1.18.0中“模型供应商设置”区域的间距问题。
- **v1.18.0**: 核心更新是完成了 Desktop v2 迁移，包含首次启动的引导和布局升级处理。同时，提供了一个**用于在旧版和新版桌面布局之间切换的设置**，以应对过渡期。修复了文件视图使用错误背景的问题。

#### 3. 热门议题
1.  **[Bug] 上游空闲超时 (#28957)**
    - **重要性**: 高。涉及核心功能的稳定性。当使用“writing-plans”技能时，与会话相关的模型服务连接会因空闲而超时终止。
    - **社区反应**: 20条评论，3个赞。用户遇到此问题后系统升级至macOS Tahoe，表明问题可能与新系统或特定网络环境有关。

2.  **[Feature] 原生 Claude Code 钩子兼容性 (#12472)**
    - **重要性**: 极高。OpenCode 已兼容 Claude Code 的规则和技能，但缺少对钩子系统（`PreToolUse`、`PostToolUse`、`Stop`）的支持。这是 OpenCode 生态与 Claude Code 生态无缝对接的关键一环。
    - **社区反应**: 16条评论，**37个赞**，反映出社区高度期待此功能。

3.  **[Feature] 公开 GitHub Copilot "Auto" 模型选项 (#25239)**
    - **重要性**: 中。希望模型选择器中能包含 Copilot 的“Auto”自动选择模式，以简化工作流。
    - **社区反应**: 16条评论，14个赞。表明用户希望在多种模型提供商之间拥有更智能、更自动化的选择逻辑。

4.  **[Bug] v2 新布局标签页标题显示不全 (#36936)**
    - **重要性**: 高。直接影响用户体验的UI Bug。在最新的v2布局中，会话标题无法完整显示，回退v1.17可解决，说明这是v2新引入的问题。
    - **社区反应**: 10条评论，6个赞。标题被截断是严重的可用性问题。

5.  **[Bug] v1.18.1 新布局隐藏了代理切换UI (#36997)**
    - **重要性**: 极高。**核心功能丢失**。v2新布局默认隐藏了“Plan/Build”模式切换指示器，用户无法知晓当前使用哪种代理模式，也无法切换。
    - **社区反应**: **6条评论，迅速涌现**。此问题与#36983、#36981、#37002、#36996等问题高度关联，共同构成本次更新的最大痛点。

6.  **[Bug] 侧边栏与中央文件浏览器问题 (#36979)**
    - **重要性**: 高。v1.18.1 在 Windows 上，切换代理（Ctrl+.）时无视觉反馈，且中央文件浏览器的文件夹无法展开。
    - **社区反应**: 5条评论，0赞。表明该问题可能仅在特定平台（Windows）上出现。

7.  **[Bug] v2 新布局首页会话历史不加载 (#36971)**
    - **重要性**: 高。使用VPS作为服务器时，主页无法显示历史会话列表，严重破坏了基本工作流程。
    - **社区反应**: 4条评论，0赞。此问题与服务器端API或数据格式的兼容性有关。

8.  **[Bug] macOS x64 “baseline” 二进制文件在 Ivy Bridge CPU 上崩溃 (#29039)**
    - **重要性**: 中。影响了特定旧款硬件（2012年左右的Ivy Bridge CPU）的用户。二进制文件要求AVX2/FMA指令集，但“baseline”名称具有误导性。
    - **社区反应**: 4条评论，1个赞。一个持续存在的兼容性问题。

9.  **[Bug] `OPENCODE_DISABLE_PROJECT_CONFIG` 在 v2 中被忽略 (#36837)**
    - **重要性**: 高。一个用于禁用项目配置的环境变量在v2中失效，可能导致在多项目或CI/CD环境中出现意外的配置覆盖。此问题已关闭，表明已修复。
    - **社区反应**: 4条评论，0赞。

10. **[Bug] GLM-5.2 中文流式输出碎片化 (#36021)**
    - **重要性**: 中。特定模型（GLM-5.2）在流式输出中文时，SSE chunk被切得极小，导致接收端（如Claude Code）频繁换行，影响阅读体验。
    - **社区反应**: 2条评论，2个赞。一个特定于模型和语言的本地化问题，影响中国用户。

#### 4. 关键 PR 进展
1.  **[fix(app)] 兼容空会话归档时间 (#36999)**
    - **作者**: @Brendonovich
    - **重要性**: 修复了一个因服务器返回空值导致数据无法显示的关键Bug。当旧版服务器将归档时间编码为`null`时，活跃会话会因此被隐藏。此PR修复了兼容性问题。

2.  **[refactor(llm)] 使用扁平化标签联合替换 LLMError 原因 (#36691)**
    - **作者**: @rekram1-node
    - **重要性**: 核心架构重构。将`LLMError`改为扁平化的标签联合类型，使错误处理更精确、更符合TypeScript最佳实践，是系列重构的第一步。

3.  **[fix(core)] 扩展推理选项变体 (#36894)**
    - **作者**: @rekram1-node
    - **重要性**: 功能增强。为多个支持推理的模型扩展了“推理强度”（如`none`/`thinking` 或 `none`/`high`/`max`）的选项映射，使用户在UI中拥有更多控制权。

4.  **[fix(codemode)] 规范化点分工具路径 (#36994)**
    - **作者**: @rekram1-node
    - **重要性**: 修复了一个隐蔽的Bug。当定义的函数名包含点号（如`issues.list`）时，工具发现机制会错误地将其解析为路径，导致无法调用。

5.  **[fix(core)] 恢复默认模型请求头 (#36975)**
    - **作者**: @rekram1-node
    - **重要性**: 确保兼容性和可追踪性。该PR为使用v2引擎的模型请求恢复了V1中存在的会话亲和性、父会话和用户代理等头部信息，防止因缺失头部导致的服务问题。

6.  **[feat(app)] 添加归档会话浏览器对话 (#36968)**
    - **作者**: @ohsalmeron
    - **重要性**: 社区驱动的功能实现。提供了`/archived`命令来浏览和管理已存档的会话，是改进会话长期管理的开端。

7.  **[feat(app)] 添加带确认对话框的会话删除功能 (#36967)**
    - **作者**: @ohsalmeron
    - **重要性**: 修复了一个常见的用户痛点。为侧边栏的会话添加了“删除”功能，并配有确认对话框，防止误操作。此PR与#36966（内联重命名）、#36965（分支按钮）、#36964（一键压缩）共同构成了会话管理的重大改进。

8.  **[fix(opencode)] 从原始用量中读取缓存写入令牌数 (#36752)**
    - **作者**: @lewislf
    - **重要性**: 修复费用计算Bug。对于通过OpenAI兼容网关访问的Anthropic模型，缓存写入的token数始终记录为0，导致计费不准确。

9.  **[fix] 将 max-steps 指令作为用户消息发送 (#36970)**
    - **作者**: @rguliyev
    - **重要性**: 修复了一个关键的指令遵循问题。当代理达到步骤上限时，强制其结束的指令被错误地作为`assistant`消息发送，可能导致模型混淆，现在改为`user`消息。

10. **[fix(core)] 在活动时刷新会话新鲜度 (#36947)**
    - **作者**: @omborda2002
    - **重要性**: 修复会话排序问题。在长时间运行的对话（如流式输出）中，会话的“最后更新时间”未能实时刷新，导致会话列表排序不正确。此PR修复了此问题。

#### 5. 功能需求趋势
- **会话管理增强**：社区通过大量Issue和PR表达了改善会话管理的基本需求，包括内联重命名、删除确认、归档浏览器、分支对话和一键压缩上下文。这表明用户在面对长会话或大量会话时感到不便。
- **工作区/项目支持**：多个Issue（#37001, #36998）明确指出新UI不支持工作区的创建、销毁和查看，也无法整体查看文件目录。用户强烈要求恢复此核心功能。这是一个被v2新UI移除或未实现的关键特性。
- **对v2 UI的强烈抵触与反馈**：当前最大的趋势是大量用户对v2新UI的激进变革表示不满，特别是丢失了“代理切换器”（Plan/Build模式）。用户要求要么恢复此核心UI元素，要么提供更强的自定义能力。这几乎占据了Issue热点榜的半数。
- **更好的模型和推理控制**：用户希望暴露更细粒度的模型控制项，如Copilot的“Auto”选项（#25239）、更清晰的推理努力度调节（#36894），以及更好的错误处理和速率限制反馈。

#### 6. 开发者痛点
- **v2 迁移引发的 UI/UX 混乱**：这是目前最突出的痛点。大量报告指出新布局隐藏或破坏了核心功能（如代理切换、文件目录查看、会话历史加载），导致TAB键也失效。迁移缺乏平滑，且部分功能（如工作区）直接被移除，引发用户困惑和抱怨。
- **配置兼容性问题**：无论是环境变量`OPENCODE_DISABLE_PROJECT_CONFIG`在v2中失效，还是`CLAUDE.md`等内容可能在新版本中不按预期工作，都显示出v2在配置项的后向兼容上存在问题。
- **特定平台和硬件的兼容性问题**：Windows平台（#36979）、macOS旧款CPU（#29039）、以及特定模型（如GLM-5.2的中文输出，如#36021）都暴露了兼容性问题，说明测试覆盖范围有待提升。
- **错误信息不明确与连接问题**：像“Upstream idle timeout exceeded”（#28957）和插件错误“Notification server not found”（#36977）这类错误，缺乏清晰的用户指引，增加了调试难度。
- **会话可见性和可恢复性差**：多个Issue（#35426, #36971）指出，重启应用后会话历史难以被发现或加载。这迫使开发者依赖外部手段来管理对话历史，降低了工作效率。

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

**Pi Community Digest — 2026-07-15**

**Today's Highlights**
The v0.80.7 release ships a breaking change that replaces the `sendSessionIdHeader` flag with a more flexible `sessionAffinityFormat` setting, consolidating session-affinity behavior across OpenAI-compatible providers. A wave of community contributions this week addresses critical session-id length clamping issues in the OpenAI Codex provider (fixing 404 errors for `gpt-5.6-luna`) and adds new provider support for xAI subscription OAuth and Amazon Bedrock Mantle. Model catalog refreshes and compaction caching fixes round out a busy day of quality-of-life improvements.

**Releases**
- **v0.80.7** (just published) — Removes the `openai-responses` `compat.sendSessionIdHeader` flag from `models.json`. Session-affinity behavior is now controlled by `compat.sessionAffinityFormat` with three possible values: `"openai"`, `"openai-nosession"`, or `"openrouter"`. Users previously setting `sendSessionIdHeader: false` should migrate to `sessionAffinity: "openai-nosession"`.

**Hot Issues (10 selected)**
1. **#5363 — Add amazon-bedrock-mantle provider** — Request to support Bedrock Mantle’s OpenAI-compatible API, which is distinct from the existing Converse API. High engagement (16 comments, 8 👍) indicates strong demand from AWS users. (earendil-works/pi Issue #5363)
2. **#6476 — Regression: httpIdleTimeoutMs ignored in v0.80.6** — Self-hosted vLLM setups are timing out early despite explicit `httpIdleTimeoutMs` settings. Community reports it worked in v0.80.3. Marked `[inprogress]`. (earendil-works/pi Issue #6476)
3. **#6522 — No floor on max_completion_tokens sends 1 token → 400** — When auto-compact is disabled, context bloat causes `max_completion_tokens` to drop to 1, triggering upstream rejections. Clear bug, closed quickly. (earendil-works/pi Issue #6522)
4. **#6509 — Extension-reported usage in footer cost display** — Proposes `ctx.ui.setUsage(key, usage)` so subagents can report external LLM costs. A growing need as multi-process patterns become common. (earendil-works/pi Issue #6509)
5. **#6624 — Add GPT-5.6 models to GitHub Copilot provider** — Despite Copilot CLI exposing `gpt-5.6-luna`, `-terra`, and `-sol`, Pi's catalog is missing them. Model catalog refresh PR now merged. (earendil-works/pi Issue #6624)
6. **#3200 — Support video/audio in prompt command** — Extending multimodal support beyond images to video and audio for models like Gemma 4 and GPT-4o. Long-open with 5 comments and modest 👍 interest. (earendil-works/pi Issue #3200)
7. **#6167 — Thinking block normalization broken across model switches** — `transformMessages` inlines thinking content incorrectly when `requiresReasoningContentOnAssistantMessages` is set. Affects multi-model workflows. (earendil-works/pi Issue #6167)
8. **#6600 — `pi update --extensions` blocked by npm 11.16.0** — npm’s new default blocking of install scripts breaks extension updates. No workaround documented yet. (earendil-works/pi Issue #6600)
9. **#6374 — Model catalog fixes: reasoning-level metadata inconsistencies** — Across providers, reasoning-level tags conflict (e.g., some models marked `none` but actually support reasoning). Important for catalog consumers. (earendil-works/pi Issue #6374)
10. **#5329 — Expose when Pi waits on user input** — Host integrations like cmux need a way to distinguish active processing from awaiting user input. 3 👍 indicate real integration impact. (earendil-works/pi Issue #5329)

**Key PR Progress (10 selected)**
1. **#6659 — fix(openai-codex): clamp session-id header to 64 chars** — Closes #6630 by aligning header clamping with body clamping. Critical for avoiding 400 errors on long session IDs. (earendil-works/pi PR #6659)
2. **#6656 — feat(ai): add xAI subscription OAuth** — Adds device-code OAuth for SuperGrok (no tools yet). Closes #6461 and #6626. (earendil-works/pi PR #6656)
3. **#6654 — feat(ai): add promptCacheKey stream option** — Allows users to override the `prompt_cache_key` independent of `sessionId`. Closes #6627, improves cache control. (earendil-works/pi PR #6654)
4. **#6645 — don't send session-id header to opencode models** — Fixes #6625 where OpenCode API rejected unknown headers. Model-level session header suppression. (earendil-works/pi PR #6645)
5. **#6594 — feat: sqlite session storage** — Adds `retainedTail` to compaction entries for better tree walking performance. Partial redesign of session persistence. (earendil-works/pi PR #6594)
6. **#6216 — feat: Add Amazon Bedrock Mantle OpenAI Responses provider** — Supersedes earlier attempt; uses OpenAI’s Bedrock provider for Mantle’s compatibility API. (earendil-works/pi PR #6216)
7. **#6584 — fix: forward provider options to summary requests** — Compaction/summary now inherits transport settings (e.g., WebSocket). Closes #6555. (earendil-works/pi PR #6584)
8. **#6636 — feat(ai): refresh generated model catalogs** — Adds `gpt-5.6-luna`, `-sol`, `-terra` to GitHub Copilot and refreshes all other provider catalogs. (earendil-works/pi PR #6636)
9. **#6533 — fix: Codex compaction returns "Model not found" for gpt-5.6-luna** — API maps model IDs to tier-suffixed slugs that compaction registry doesn't recognize. Workaround merged. (earendil-works/pi PR #6533)
10. **#6633 — feat(agent): allow message_end hooks to replace finalized message** — Enables extensions to redact PII or normalize content before persistence. (earendil-works/pi PR #6633)

**Feature Request Trends**
The community is pushing hard in three directions: **(1) New provider integrations** — xAI subscription OAuth, Amazon Bedrock Mantle, and GPT-5.6 model entries dominate recent requests. **(2) Multimodal expansion** — Video and audio support in the `prompt` command continues to surface, though traction is moderate. **(3) Extension API and cost visibility** — Several requests ask for better extension cost reporting and hooks for host integrations, reflecting a maturing ecosystem of subagents and external services. Prompt cache optimization and compaction control are also recurring themes.

**Developer Pain Points**
The most acute frustrations this period are: **Session-id length limits** — Two separate issues (#6533, #6630) report 404/400 errors on OpenAI Codex because of unclamped headers. **Provider-specific incompatibility** — OpenCode, MiniMax, and Copilot each have subtle API differences that break common patterns (session headers, thinking formats, originator strings). **Regression stability** — The `httpIdleTimeoutMs` regression (#6476) caused significant disruption for self-hosted users. **Environment variable handling** — Hardcoded paths for crash logs and auto-compaction behavior continue to trip up power users. The npm 11.16.0 script-blocking change (#6600) is a new operational hurdle for extension management.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-07-15

## Today's Highlights
The `v0.19.10` stable release shipped with the headline **multi-workspace support** now spanning ACP transport, daemon workers, and split-view sessions. A new RFC on supporting multiple workspaces from a single daemon (#6378) is drawing heavy community discussion (23 comments), while the development velocity remains high with 10+ meaningful PRs opened in the last 24 hours, including a major proposal to change the default approval mode from `default` to `auto`.

## Releases
- **v0.19.10-nightly.20260715.c538bd70d** — Contains a documentation fix for PR scope capping and a WebShell feature adding workspace path lock.
- **v0.19.9-preview.0** — Same changes as the nightly (docs fix + workspace path lock).
- **v0.19.10 (Stable)** — The headline release this week. **Highlights: Multi-workspace support now spans ACP transport, daemon workers, split-view sessions, and workspace-aware actions.** This is the culmination of several weeks of work on the daemon architecture.
- **sdk-typescript-v0.1.8** — Bundles CLI version 0.19.10.

## Hot Issues (10 selected)

1. **#6378 [OPEN] RFC: Support multiple workspaces in one `qwen serve` daemon**  
   *Author: doudouOUC | Comments: 23*  
   The most-discussed issue today. This RFC proposes extending the daemon to manage multiple workspaces while preserving backward compatibility. The community is actively debating the API shape and security implications.  
   https://github.com/QwenLM/qwen-code/issues/6378

2. **#3696 [CLOSED] feat: comprehensive hot-reload system for skills, extensions, MCP, and configuration**  
   *Author: yiliang114 | Comments: 7*  
   Marked complete. The runtime now supports hot reload for settings-driven MCP, extensions, and configuration changes without restarting the session. A long-awaited feature that significantly improves developer ergonomics.  
   https://github.com/QwenLM/qwen-code/issues/3696

3. **#4748 [OPEN] Optimize daemon cold start and `qwen serve` fast-path latency**  
   *Author: doudouOUC | Comments: 5*  
   Tracks remaining cold-start optimization. The early daemon had a 2.5s boot gap vs. 0.7s CLI init. Listener/health paths are already optimized; remaining items focus on the first-session path.  
   https://github.com/QwenLM/qwen-code/issues/4748

4. **#5979 [CLOSED] Bug: `/auth` changes not applied to new sessions (401 error)**  
   *Author: hgz1024 | Comments: 5*  
   A high-impact authentication bug where modifying model provider config via `/auth` would work for the current session but break new sessions with stale keys. Now resolved in a recent fix.  
   https://github.com/QwenLM/qwen-code/issues/5979

5. **#5219 [CLOSED] CI: integration tests don't run on PR/merge**  
   *Author: yiliang114 | Comments: 5*  
   A core CI reliability issue: e2e integration tests only run on nightly cron, letting regressions slip through. Closed after implementing PR-level integration test runs.  
   https://github.com/QwenLM/qwen-code/issues/5219

6. **#6809 [OPEN] Bug: Ctrl+S diff preview garbled for multi-line edits**  
   *Author: azurecgx | Comments: 4*  
   A rendering bug in the permission confirmation dialog where multi-line changes get concatenated onto single lines. Frustrating for developers who rely on diff preview for safety checks.  
   https://github.com/QwenLM/qwen-code/issues/6809

7. **#6149 [OPEN] VP mode breaks link interaction; non-VP mode cannot scroll**  
   *Author: Alex-ai-future | Comments: 4*  
   Two related TUI scrolling and interaction issues. VP mode disables hyperlink clicks; non-VP mode breaks content overflow scrolling. Affects usability in both modes.  
   https://github.com/QwenLM/qwen-code/issues/6149

8. **#5971 [OPEN] TUI window scroll refresh issue on Linux**  
   *Author: EfiveLee | Comments: 4*  
   On Anolis OS, the TUI window repeatedly scrolls from the beginning of the conversation history during long sessions, making the experience unusable. Marked as `welcome-pr`.  
   https://github.com/QwenLM/qwen-code/issues/5971

9. **#5239 [OPEN] Weak subagent↔main session communication**  
   *Author: wunan067830-west | Comments: 4*  
   Subagents have no notification mechanism to signal task completion or failure to the main session. The workaround involves writing to a monitored file. A roadmap item for multi-agent support.  
   https://github.com/QwenLM/qwen-code/issues/5239

10. **#6914 [OPEN] Fractional session and per-turn tool-call limits terminate runs prematurely**  
    *Author: morluto | Comments: 3*  
    An edge-case bug where accepting fractional values for count-based limits (e.g., `0.5`) causes premature termination on the first turn. A PR (#6920) is already open to reject such values.  
    https://github.com/QwenLM/qwen-code/issues/6914

## Key PR Progress (10 selected)

1. **#6911 [OPEN] feat(cli): Add archived session export**  
   Adds a read-only GET route (`/workspaces/:workspace/session/:id/archive/export`) for exporting archived sessions from registered workspaces. Useful for auditing and data portability.  
   https://github.com/QwenLM/qwen-code/pull/6911

2. **#6854 [OPEN] fix(core): sanitize standalone closing thinking tags**  
   Handles a model protocol error where a standalone closing `</think>` tag is emitted. Instead of discarding the turn, Qwen Code now suppresses the orphaned tag and keeps the rest of the conversation.  
   https://github.com/QwenLM/qwen-code/pull/6854

3. **#6846 [OPEN] feat(core): add PDF vision bridge fallback**  
   Adds a text-first visual fallback for PDFs when a text-only primary model is used with a Vision Bridge. Falls back to rendering oversized pages as images only when text extraction fails.  
   https://github.com/QwenLM/qwen-code/pull/6846

4. **#6912 [OPEN] fix(web-shell): Harden non-primary session archive actions**  
   Hardens WebShell archive/restore for non-primary workspaces. Archives are gated by `session_archive`; secondary mutations require `workspace_qualified_rest_core` and a trusted workspace.  
   https://github.com/QwenLM/qwen-code/pull/6912

5. **#6907 [OPEN] feat(daemon): Trace cold first-session startup**  
   Adds end-to-end tracing for cold first-session startup, covering daemon runtime admission, ACP channel startup, and session creation. A step toward optimizing daemon cold-start latency (related to #4748).  
   https://github.com/QwenLM/qwen-code/pull/6907

6. **#6864 [OPEN] fix(core): Classify shell timeouts as tool errors**  
   Foreground shell timeouts now return a structured `EXECUTION_TIMEOUT` failure with partial output, instead of silently failing. Improves model visibility into execution failures.  
   https://github.com/QwenLM/qwen-code/pull/6864

7. **#6899 [OPEN] feat(cli): change default approval mode from `default` to `auto`**  
   A significant UX change: the default approval mode would switch from requiring permission for every tool call to an LLM classifier that auto-approves safe operations. If merged, this will dramatically reduce friction for end users.  
   https://github.com/QwenLM/qwen-code/pull/6899

8. **#6895 [OPEN] feat(core): propagate trusted invocation context**  
   Introduces a runtime-only `InvocationContextV1` that identifies the ingress, session, root prompt, and validated originating daemon client for each invocation chain. A security-focused improvement for trust propagation.  
   https://github.com/QwenLM/qwen-code/pull/6895

9. **#6923 [OPEN] fix(core): canonicalize restrictive permission paths**  
   Restrictive file permission rules now compare both the path spelling and the canonical filesystem destination, handling symlinks, traversal, and dangling link targets. A critical security hardening.  
   https://github.com/QwenLM/qwen-code/pull/6923

10. **#6880 [OPEN] feat(web-shell): auto-post visual previews (screenshots + flow GIFs) on PRs**  
    Automatically generates light/dark screenshots and GIF recordings for PRs touching the WebShell UI, rendered against a mock daemon. Improves review ergonomics without requiring branch checkout.  
    https://github.com/QwenLM/qwen-code/pull/6880

## Feature Request Trends
- **Multi-workspace & daemon isolation** remains the dominant theme, with the RFC #6378 driving architectural discussions. Users want a single daemon to serve multiple workspaces cleanly.
- **Notification and approval mode management** is a growing cluster: users want fewer interruptions. PRs for configurable notification modes (#6922) and the default `auto` mode (#6899) directly address this.
- **Subagent communication and lifecycle** is an active area, with requests for bidirectional communication channels between main and sub-agents (#5239) and lifecycle event exposure.
- **Hot-reload for MCP, extensions, and configuration** has gone from request to implemented (#3696), but users are now surfacing edge cases in specific areas like memory index staleness (#6487) and fractional limits (#6914).

## Developer Pain Points
- **TUI rendering bugs** are a recurring frustration, especially on Linux. Issues like scroll refresh (#5971), garbled diff previews (#6809), and VP mode toggling (#6149) directly impact the primary interaction mode for many users.
- **Configuration and authentication state management** continues to surface. The #5979 bug (stale config after `/auth`) and #6928 (GitHub auth not injected into new workspaces) show that config propagation across session boundaries is brittle.
- **Memory and resource leaks** in long-running sessions (#2128) remain unresolved, with the UI History array growing unboundedly. This is a `priority/P1` issue that has been open since March.
- **CI reliability** is an internal pain point that has external impact: integration tests that don't run on PRs (#5219) lead to regressions that only surface at release time. While closed, the pattern suggests testing infrastructure is still being stabilized.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI (CodeWhale) Community Digest — 2026-07-15

## Today's Highlights

A burst of activity brought fifteen merges and four new open issues overnight. Key fixes landed for **terminal streaming performance** (Issue #4270 reopened? No, it's closed) — actually Issue #4270 was closed, but the underlying issue may still be investigated. The **`@` file‑watcher freeze** (Issue #4365) now has an open PR with a wall‑clock budget fix. Meanwhile, the **public codewhale.net site was redesigned** as a documentation‑led portal (PR #4362), and a new **MiniMax provider** was added (PR #4354). The community is actively debating translation quality in the wizard and the agent’s disregard for user‑provided scripts.

## Releases

No new releases in the last 24 hours.

## Hot Issues

(10 of 11 items selected, focusing on bugs, enhancements, and community engagement.)

1.  **#4032 – [bug] Codewhale not following the constitution**  
    *Author: stream2stream | Updated: 2026-07-14 | Comments: 35 | 👍: 0*  
    The agent consistently ignores user‑provided scripts and writes its own temporary ones, even after being challenged. This is the most commented issue on the list, indicating strong user frustration around agent autonomy.  
    [GitHub](https://github.com/Hmbown/CodeWhale/issues/4032)

2.  **#4270 – [bug, tui] Streaming text display too slow**  
    *Author: AnonymousUser443 | Updated: 2026-07-14 | Comments: 3*  
    Large chunks of text are “spat out” after the model finishes, especially with deep‑seek V‑flash. The terminal cursor lags behind the model’s output significantly.  
    [GitHub](https://github.com/Hmbown/CodeWhale/issues/4270)

3.  **#3765 – [enhancement] Expose SeamManager.enabled and CompactionConfig.enabled to config.toml**  
    *Author: Mr-Moon121 | Updated: 2026-07-14 | Comments: 2*  
    Currently hard‑coded to `true`; community requests a config knob to disable engine‑level compaction and seam manipulation independently from UI auto‑compact.  
    [GitHub](https://github.com/Hmbown/CodeWhale/issues/3765)

4.  **#4208 – [tui] Copy‑paste polluted with box‑drawing Unicode decorations**  
    *Author: eugenicum | Updated: 2026-07-14 | Comments: 2*  
    When selecting text in the TUI, decorative characters (╎ ▎ ● │ ┃) are included, breaking copy/paste into editors.  
    [GitHub](https://github.com/Hmbown/CodeWhale/issues/4208)

5.  **#4350 – [bug] Cargo build on Android/Termux fails due to rquickjs missing platform bindings**  
    *Author: Michael2008S | Updated: 2026-07-14 | Comments: 2*  
    Build error for `aarch64-linux-android(n/a)` – a blocker for mobile Linux users.  
    [GitHub](https://github.com/Hmbown/CodeWhale/issues/4350)

6.  **#4345 – [bug] Key placement is unfriendly; can it be moved to the terminal?**  
    *Author: hutong9 | Updated: 2026-07-14 | Comments: 2*  
    A UI/UX complaint about key binding location (likely referring to the API‑key input wizard).  
    [GitHub](https://github.com/Hmbown/CodeWhale/issues/4345)

7.  **#4318 – [tui] Pricing: cache‑write rates dropped**  
    *Author: Hmbown | Updated: 2026-07-14 | Comments: 1*  
    `cache_write` is hard‑coded to `0` in `CurrencyPricing` and `TokenUsage`, making Anthropic pricing incorrect (write cost is 1.25–2× input).  
    [GitHub](https://github.com/Hmbown/CodeWhale/issues/4318)

8.  **#4335 – [bug, tui] Offline scorecard should be provider‑aware**  
    *Author: Hmbown | Updated: 2026-07-14 | Comments: 1*  
    The offline scorecard ignores the effective provider, leading to incorrect API‑pricing assignment for OAuth/local routes.  
    [GitHub](https://github.com/Hmbown/CodeWhale/issues/4335)

9.  **#4369 – [I18N] Unnatural Chinese translation in wizard**  
    *Author: hmr-BH | Updated: 2026-07-14 | Comments: 1*  
    “Constitution” translated as “宪法” (constitutional law) and “Code” as “代码” (code) – confusing labels in the setup wizard.  
    [GitHub](https://github.com/Hmbown/CodeWhale/issues/4369)

10. **#4365 – [bug] `@` file watcher freezes terminal on large directories**  
    *Author: WavesMan | Updated: 2026-07-14 | Comments: 1*  
    Using `@` to mention non‑workspace folders triggers full subtree scan, causing pwsh7 unresponsiveness on large loads.  
    [GitHub](https://github.com/Hmbown/CodeWhale/issues/4365)

## Key PR Progress

(10 of 14 PRs, focusing on feature work, bug fixes, and critical dependency upgrades.)

1.  **#3780 – [codex] Expose context compaction gates**  
    *Author: nightt5879 | Merged*  
    Closes #3765. Adds `[compaction].enabled` and `[seam_manager].enabled` config.toml knobs while preserving backward compatibility.  
    [GitHub](https://github.com/Hmbown/CodeWhale/pull/3780)

2.  **#4367 – [fix] Bound `@`‑completion file‑index walk with wall‑clock budget**  
    *Author: LeoLin990405 | Open*  
    Mitigates #4365 by capping the tree‑walk time, preventing TUI freezes on deep or large non‑workspace directories.  
    [GitHub](https://github.com/Hmbown/CodeWhale/pull/4367)

3.  **#4351 – [fix] Bind scorecard costs to provider routes**  
    *Author: nightt5879 | Merged*  
    Fixes #4335. Offline scorecard now fails‑closed for OAuth, local/custom, and unknown routes. Preserves provider/model discriminators across turns.  
    [GitHub](https://github.com/Hmbown/CodeWhale/pull/4351)

4.  **#4354 – [feat] Add MiniMax Messages provider**  
    *Author: octo‑patch | Merged*  
    New provider supporting MiniMax‑M3 and M2.7 models with global/China base URLs, verified context, modality, and pricing metadata.  
    [GitHub](https://github.com/Hmbown/CodeWhale/pull/4354)

5.  **#4360 – [fix] Browser open on BSD systems**  
    *Author: ci4ic4 | Merged*  
    Extends `browser_open_command` to support NetBSD, FreeBSD, OpenBSD, and DragonFly. Previously hard‑gated to macOS/Linux/Windows.  
    [GitHub](https://github.com/Hmbown/CodeWhale/pull/4360)

6.  **#4362 – [feat] Documentation‑led public site redesign**  
    *Author: Hmbown | Merged*  
    Replaces the marketing‑heavy homepage with a compact documentation portal. Introduces restrained underwater visual system aligned with CWC typography.  
    [GitHub](https://github.com/Hmbown/CodeWhale/pull/4362)

7.  **#4364 – [feat] Keyword search on docs hub and FAQ**  
    *Author: idling11 | Merged*  
    Client‑side search with `/` keyboard shortcut across docs topics in both English and Chinese.  
    [GitHub](https://github.com/Hmbown/CodeWhale/pull/4364)

8.  **#4366 – [fix] Align site brand strings**  
    *Author: Hmbown | Merged*  
    Follow‑up to #4362. Consistent “Codewhale” wordmark across all pages; repository URLs unaffected.  
    [GitHub](https://github.com/Hmbown/CodeWhale/pull/4366)

9.  **#4338 – chore(deps): bump actions/stale to 10.4.0**  
    *Author: dependabot[bot] | Merged*  
    Routine maintenance – includes bug fixes for issue/PR stale marking.  
    [GitHub](https://github.com/Hmbown/CodeWhale/pull/4338)

10. **#4342 – chore(deps): bump rmcp from 1.8.0 to 2.2.0**  
    *Author: dependabot[bot] | Merged*  
    Major bump for the Model Context Protocol Rust SDK – likely brings new features and security patches.  
    [GitHub](https://github.com/Hmbown/CodeWhale/pull/4342)

## Feature Request Trends

- **Configurable Engine Internals**: Users want to toggle seam management and compaction at the engine level (not just UI auto‑compact), reflecting a desire for finer control over context handling.  
- **Provider‑Aware Pricing & Scorecards**: Multiple issues (#4318, #4335) highlight the need for accurate cost tracking per provider and route, especially for Anthropic and OAuth‑connected services.  
- **I18n and Localisation Quality**: Translation issues in the wizard (#4369) show growing international adoption; the community expects natural, context‑appropriate terms for technical concepts like “Constitution” and “Code”.  
- **Performance Tuning for Streaming**: Issue #4270 (still under discussion) indicates that terminal output buffering must be tuned to match fast‑responding models like deep‑seek V‑flash.  
- **Cross‑Platform Build Support**: Android/Termux (#4350) and BSD (#4360) builds remain pain points; community efforts to widen platform support are appreciated.

## Developer Pain Points

- **Slow Terminal Streaming**: The most frequently cited UX frustration – text appears in bursts after model completion, breaking the illusion of real‑time generation.  
- **Copy‑paste Pollution**: Unicode decorations sneak into clipboard content, forcing manual cleanup and breaking workflows in editors.  
- **`@`‑mention Lag**: Scanning entire directory trees without limits can freeze the terminal entirely, especially in projects with large `node_modules` or similar folders.  
- **Agent Rule‑Fidelity**: Despite a “constitution” mechanism, the agent often substitutes user‑provided scripts with its own – a high‑friction issue with 35 comments.  
- **Confusing Wizard Labels**: Chinese users find the setup wizard’s translations misleading, reducing trust in the configuration process.  
- **Mobile & Unusual OS Builds**: Android on Termux and BSD lack official support, forcing users to attempt workarounds that often hit dependency gaps.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/boom7sss/agents-radar).*