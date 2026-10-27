# AI CLI Tools Community Digest 2026-07-23

> Generated: 2026-07-23 03:27 UTC | Tools covered: 9

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

# AI CLI Tools Ecosystem Cross-Comparison Report
**Date: 2026-07-23**

---

## 1. Ecosystem Overview

The AI CLI developer tools landscape continues to mature rapidly, with nine actively maintained tools serving overlapping but distinct developer workflows. Today's activity reveals a bifurcated ecosystem: mature tools like Claude Code and OpenAI Codex focus on reliability regressions and feature parity across desktop and CLI surfaces, while newer entrants like Qwen Code and DeepSeek TUI are in heavy active development with frequent CI pipeline churn. A consistent theme across all tools is the tension between rapid feature iteration and platform stability—every digest reports regression bugs, sandbox failures, or CI pipeline breaks that erode developer trust. The most pressing cross-cutting concerns are Windows platform compatibility, rate-limit/billing transparency, and the growing demand for multi-agent orchestration with cost-attribution visibility.

---

## 2. Activity Comparison

| Tool | Hot Issues (Today) | Key PRs (Today) | Release Status |
|------|-------------------|-----------------|----------------|
| **Claude Code** | 10 (20+ new reports) | 9 | ✅ v2.1.218 released |
| **OpenAI Codex** | 10 | 10 | ✅ v0.146.0-alpha.1–4 |
| **Gemini CLI** | 10 | 10 | ✅ v0.52.0 stable, v0.53.0-preview, nightly |
| **GitHub Copilot CLI** | 10 (13 new triage reports) | 2 (both non-functional) | ✅ v1.0.74-1/2/3 |
| **Kimi Code CLI** | 4 | 3 | ⬜ No new release |
| **OpenCode** | 10 | 10 | ⬜ No new release |
| **Pi (pi-mono)** | 10 | 10 | ⬜ No new release |
| **Qwen Code** | 10 (44 total updated) | 10 (50 total updated) | ⬜ Prerelease only (benchmark POC) |
| **DeepSeek TUI (CodeWhale)** | 10 | 10 | ⬜ v0.9.1 candidate (not tagged) |

**Key observations:**
- **Qwen Code** leads in raw activity volume (44 issues, 50 PRs updated in 24h) but much of this is CI churn and security hardening
- **Claude Code** and **Codex** demonstrate the most mature release cadence with stable version tags
- **Copilot CLI** shows concern with zero substantive PRs—a potential maintenance lull
- **Kimi Code** has the least activity, consistent with its smaller community footprint

---

## 3. Shared Feature Directions

Several requirements appear independently across multiple tool communities, indicating genuine unmet developer needs:

### Auto-resolve / Compaction Configurability
- **OpenAI Codex** (#28969, 151👍): Permanent disable flag for 60-second auto-resolve, especially disruptive in `plan` mode
- **Claude Code** (#80196): Auto-compact never triggers despite 100% context reported
- **GitHub Copilot CLI** (#1688, 5👍): Configurable auto-compaction threshold for context memory
- **Pi** (#6621, 1👍): Prevent cache invalidation from dynamic system prompt changes

### Per-Agent / Per-Model Cost Control
- **Kimi Code CLI** (#2533): Per-sub-agent model selection for cost-tiered workflows
- **GitHub Copilot CLI** (#4207, 6👍): Show per-subagent AI credit usage in `/usage`
- **GitHub Copilot CLI** (#4218, 6👍): Configure model pool used by Auto mode
- **Claude Code** (#80326): Account profiles plugin for isolating configurations

### Cross-Session Context Sharing
- **Claude Code** (#13843, 99👍): Share conversation from Claude.ai to CLI (top feature request)
- **OpenCode** (#25582): Fork to new session from message timeline
- **Qwen Code** (#7449): Enterprise external-memory integration profile

### Windows Platform Compatibility
- **Claude Code**: Event-loop starvation after hibernate (#80404), OAuth loop (#77966)
- **OpenAI Codex**: Sandbox `CreateProcessAsUserW` failure (#22428), excessive `taskkill.exe` (#33778)
- **GitHub Copilot CLI**: WSL clipboard quoting (#3534), native crash on exit (#4217)
- **Qwen Code**: Alt+V paste failure (#6577)
- **DeepSeek TUI**: Installer overwrites PATH (#4685)
- **Kimi Code**: Unicode crash on piped stdout (#2532)

### OAuth / MCP Authentication Reliability
- **OpenAI Codex** (#31573, 45👍): OAuth issuer validation fails for free-tier MCP
- **Claude Code** (#77966): State parameter dropped in Linux/IntelliJ OAuth loop
- **GitHub Copilot CLI** (#4016): Third BYOK auth regression in `--acp` mode
- **OpenCode** (#38424): Cache key format selection per provider SDK

### Sandbox Security & Permissions
- **Claude Code** (#79997): bwrap sandbox regression on non-root installs
- **OpenAI Codex** (#22428): Windows sandbox CreateProcessAsUserW failure
- **Gemini CLI** (#22672): Agent destructive behavior guardrails requested
- **DeepSeek TUI** (#4684): `danger-full-access` fails to disable tools-layer boundary

---

## 4. Differentiation Analysis

### Feature Focus

| Tool | Distinctive Emphasis | Target User |
|------|---------------------|-------------|
| **Claude Code** | Plugin ecosystem, desktop-CLI parity, sandbox security | Professional developers, enterprise teams |
| **OpenAI Codex** | Multi-agent v2 architecture, Rust CLI rewrite, Guardian compliance | Advanced AI users, research teams |
| **Gemini CLI** | Browser agent automation, eval infrastructure, memory system | Google Cloud ecosystem, multi-language |
| **GitHub Copilot CLI** | Auto mode, session multiplexing, Microsoft enterprise integration | GitHub-centric enterprise developers |
| **Kimi Code CLI** | Moonshot API compatibility, cost-tiered sub-agents | Chinese market, cost-sensitive teams |
| **OpenCode** | Plugin/API extensibility, LLM provider discovery, TUI diagnostics | Open-source enthusiasts, polyglot developers |
| **Pi** | Constrained sampling, OSS licensing (LGPL), minimal design | Hobbyists, small teams, privacy-conscious |
| **Qwen Code** | CI/CD pipeline integration, large codebase support, enterprise memory | Chinese enterprise, large-scale CI/CD |
| **DeepSeek TUI** | Skill packs, theme customization, community self-organization | Community-driven, creative workflows |

### Technical Approach

- **Rust migration**: OpenAI Codex is mid-migration from Node.js to Rust; others remain Node/TypeScript-based
- **Plugin architecture**: Claude Code and OpenCode have the most mature plugin/extension systems
- **Multi-agent orchestration**: Codex (v2 architecture) and Gemini CLI (subagent delegation) lead in sophistication
- **Editor integration**: Copilot CLI and Qwen Code have the deepest VS Code/IDE integration
- **TUI innovation**: DeepSeek TUI (CodeWhale) and Pi focus on terminal experience; Copilot CLI uses React/Ink

---

## 5. Community Momentum & Maturity

### Rapidly Iterating (High Velocity, Lower Stability)
- **Qwen Code**: 44 issues, 50 PRs updated in 24h—highest raw activity but significant CI instability (red tests, release failures)
- **Gemini CLI**: 10 hot issues, 10 PRs, three release channels (stable, preview, nightly)—active development with growing pains
- **DeepSeek TUI**: v0.9.1 candidate with 10 companion PRs; strong community self-organization but stop-ship launch crash on macOS

### Stable Maturity (Balanced Releases, Predictable Cadence)
- **Claude Code**: 20+ bug reports in a day but stable release v2.1.218; mature plugin ecosystem and enterprise features
- **OpenAI Codex**: Four alpha releases in 24h; long-standing feature requests show disciplined roadmap management

### Moderate Activity (Targeted Iteration)
- **OpenCode**: Steady PR flow (10 significant) with focus on community feature requests; no new release indicates deliberate pace
- **Pi (pi-mono)**: 10 PRs focused on retry, OAuth, and provider compatibility; LGPL licensing attracts niche community

### Concerning Signals
- **GitHub Copilot CLI**: Zero substantive PRs; three patch releases but regressions piling up (infinite render loop recurrence, BYOK auth failure). Community still engaged (13 new triage reports) but maintenance gap is concerning
- **Kimi Code CLI**: Only 4 issues and 3 PRs; no release activity. Smallest community footprint

---

## 6. Trend Signals

### Rising: Multi-Agent Cost Attribution
Developers increasingly work with sub-agents and need granular visibility into token/cost consumption. **Copilot CLI** (#4207), **Kimi Code** (#2533), and **Gemini CLI** (subagent trajectory sharing #22598) all reflect this trend. Expect billing APIs and per-agent model selection to become table stakes within 6 months.

### Rising: Provider-Neutral External Memory
Cross-session context persistence is emerging as a major architectural concern. **Qwen Code** (#7449) proposes a provider-neutral spec; **Claude Code** (#13843) wants web-to-CLI handoff. The ecosystem is converging on "memory as a service" rather than per-tool silos.

### Rising: Windows Terminal Parity
Every digest reports Windows-specific regressions—encoding crashes, sandbox failures, clipboard bugs, PATH corruption. This is a persistent blind spot for primarily macOS-developed tools. The **Kimi Code** GBK encoding crash (#2532) is a textbook example of international locale handling gaps.

### Declining: Single-Threaded CLI UX
**Claude Code** v2.1.218 moving `/code-review` to a background subagent signals a shift toward concurrent, non-blocking agent interactions. **OpenCode**'s `roll-call` command (#38433) for connectivity testing similarly suggests richer diagnostic needs in multi-agent sessions.

### Persistent: Sandbox & Security Hardening
From **Claude Code**'s bwrap regression to **DeepSeek TUI**'s permission boundary gaps, sandboxing remains a weak point across the ecosystem. **Gemini CLI** (#22672) requesting destructive-operation guardrails shows user awareness is outpacing tool implementations.

### Emerging: CI/CD Integration as a Feature
**Qwen Code** stands out with CI pipeline resilience features (autofix retry, stale-base detection, release note generation). This suggests AI CLI tools are evolving from interactive assistants into automated CI/CD agents—a major architectural pivot for the next generation.

---

*Report generated from 2026-07-23 community digest data for 9 major AI CLI tools.*

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills — Community Highlights Report (2026-07-23)

## 1. Top Skills Ranking

**#1298 — `fix(skill-creator): run_eval.py always reports 0% recall`**
🔗 [PR #1298](https://github.com/anthropics/skills/pull/1298)
- **Functionality:** Fixes the skill-creator evaluation pipeline where `run_eval.py` reports 0% recall for every skill description, breaking the optimization loop. Patches include: installing eval artifacts as real skills, Windows stream handling, trigger detection, and parallel worker fixes.
- **Discussion highlights:** The most critical skill-creator bug reported; references issue #556 (10+ reproductions). Multiple follow-up fixes exist (#1099, #1050, #1323).
- **Status:** Open

**#514 — `Add document-typography skill`**
🔗 [PR #514](https://github.com/anthropics/skills/pull/514)
- **Functionality:** A typographic quality-control skill that prevents orphan word wrap, widow paragraphs, and numbering misalignment in AI-generated documents.
- **Discussion highlights:** Addresses a universal pain point — all Claude-generated documents exhibit these issues. Strong practical value for professional document output.
- **Status:** Open

**#1367 — `feat(skills): add self-audit — mechanical verification + reasoning quality gate`**
🔗 [PR #1367](https://github.com/anthropics/skills/pull/1367)
- **Functionality:** A meta-skill that audits AI output before delivery: mechanical file verification followed by a four-dimension reasoning audit in damage-severity priority order. Universal across projects and models.
- **Discussion highlights:** Followed by proposal issue #1385 for a three-gate pipeline. Represents a new category of quality-assurance skills.
- **Status:** Open

**#723 — `feat: add testing-patterns skill`**
🔗 [PR #723](https://github.com/anthropics/skills/pull/723)
- **Functionality:** Comprehensive testing skill covering testing philosophy (Trophy model), AAA pattern, React component testing, accessibility, mocking strategies, and visual/end-to-end testing.
- **Discussion highlights:** Broad scope addresses a clear community need for test generation guidance; active discussion on completeness.
- **Status:** Open

**#525 — `Add pyxel skill for retro game development`**
🔗 [PR #525](https://github.com/anthropics/skills/pull/525)
- **Functionality:** New skill for pyxel-mcp, an MCP server for the Pyxel retro game engine. Covers iterative game development workflow.
- **Discussion highlights:** Notable because it integrates an external MCP server — a pattern that could define future skill architecture.
- **Status:** Open (recently updated 2026-07-15)

**#1302 — `Add color-expert skill`**
🔗 [PR #1302](https://github.com/anthropics/skills/pull/1302)
- **Functionality:** Self-contained color expertise skill covering naming systems (ISCC-NBS, Munsell, XKCD, RAL), color spaces with usage recommendations, and color science formulas.
- **Discussion highlights:** Well-scoped domain knowledge skill; demonstrates how to package specialized expertise for general consumption.
- **Status:** Open (recently updated 2026-07-21)

**#83 — `Add skill-quality-analyzer and skill-security-analyzer to marketplace`**
🔗 [PR #83](https://github.com/anthropics/skills/pull/83)
- **Functionality:** Meta-skills for evaluating other skills across five quality dimensions (structure, instruction clarity, error handling, efficiency, testing) and security patterns.
- **Discussion highlights:** Pioneers the meta-skill category; directly addresses the need for skill quality standards.
- **Status:** Open

---

## 2. Community Demand Trends

**Security & Trust Boundaries** — Issue #492 (43 comments, the highest-engagement issue) reveals deep concern about community skills distributed under the `anthropic/` namespace creating trust boundary vulnerabilities. This is the community's most urgent governance concern.

**Tooling Reliability** — Issues #556 (12 comments), #1169 (3 comments), #1061 (3 comments), and #62 (10 comments) all document critical bugs in skill-creator scripts: 0% recall in evaluation loops, Windows incompatibility, and skills disappearing without explanation. The community demands robust tooling before they invest in creating skills.

**Collaboration & Distribution** — Issue #228 (14 comments) requests org-wide skill sharing within Claude.ai. The current manual download/upload workflow is a barrier to enterprise adoption.

**Agent Governance & Safety** — Issue #412 proposes an `agent-governance` skill for policy enforcement, threat detection, and audit trails. Issue #1175 raises SharePoint security concerns. Combined, these signal demand for enterprise-grade safety patterns.

**Interoperability** — Issue #16 requests exposing Skills as MCPs; Issue #29 asks about Bedrock compatibility. The community wants skills to work across platforms and protocols.

---

## 3. High-Potential Pending Skills

These active PRs show ongoing development and are likely to land in the next release cycle:

| PR | Skill | Last Updated | Why It Matters |
|----|-------|-------------|----------------|
| [#1298](https://github.com/anthropics/skills/pull/1298) | `skill-creator` eval fix | 2026-06-23 | Blocks all optimization work; highest priority bugfix |
| [#1367](https://github.com/anthropics/skills/pull/1367) | `self-audit` | 2026-07-02 | New quality-gate pattern with follow-up proposal |
| [#1302](https://github.com/anthropics/skills/pull/1302) | `color-expert` | 2026-07-21 | Active maintainer engagement; domain knowledge model |
| [#525](https://github.com/anthropics/skills/pull/525) | `pyxel` | 2026-07-15 | MCP integration pattern; active maintainer |
| [#723](https://github.com/anthropics/skills/pull/723) | `testing-patterns` | 2026-04-21 | Broad testing taxonomy; moderate activity |
| [#1323](https://github.com/anthropics/skills/pull/1323) | `skill-creator` trigger detection fix | 2026-06-25 | Second fix for the recall=0% bug family |

---

## 4. Skills Ecosystem Insight

**The community's most concentrated demand is for reliable, trustworthy skill tooling and security governance** — the skill-creator evaluation pipeline is essentially broken for many users, and the lack of namespace trust boundaries undermines adoption of community-contributed skills.

---

# Claude Code Community Digest – 2026-07-23

## Today’s Highlights

Today’s release v2.1.218 moves `/code-review` to a background subagent, keeping conversations clean and enabling stacked slash commands. The issue tracker saw a burst of 20+ new bug reports, including a critical macOS Filesystem extension deadlock (57 comments, 25 👍) and multiple reports of event-loop starvation on Windows after hibernate. The most-upvoted feature request remains sharing conversation context from Claude.ai (99 👍, 6+ months open), and new themes emerged around desktop–CLI parity for mid-task steering and better agent session management.

## Releases

**v2.1.218** – [Release page](https://github.com/anthropics/claude-code/releases/tag/v2.1.218)  
- `/code-review` now runs as a background subagent, so review work no longer fills the conversation and stacked slash commands remain targeted.  
- Added screen-reader announcements for deleted text (`Option+Delete`, `Ctrl+W`, `Cmd+Backspace`).

## Hot Issues (10 most noteworthy)

1. **[macOS: Claude Desktop never dispatches tools/call to Filesystem extension](https://github.com/anthropics/claude-code/issues/80002)** – #80002 (CLOSED, 57 comments, 25 👍)  
   Tools/list succeeds but tools/call never fires. Blocked first-party Filesystem integration for many Desktop users. *Likely the day's most impactful bug.*

2. **[Share conversation context from Claude.ai to Claude Code](https://github.com/anthropics/claude-code/issues/13843)** – #13843 (OPEN, 25 comments, 99 👍)  
   The community’s top feature request—seamless handoff between web planning and CLI execution.

3. **[Max Account downgraded from Max to Free mid-subscription](https://github.com/anthropics/claude-code/issues/56897)** – #56897 (OPEN, 9 comments, 3 👍)  
   Billing bug causing sudden loss of features; high anxiety for paying customers.

4. **[Desktop app: inject queued messages mid-task (CLI steering parity)](https://github.com/anthropics/claude-code/issues/71726)** – #71726 (OPEN, 9 comments, 16 👍)  
   Desktop users want the same ability as CLI to steer an agent mid-turn. Echoed by #77724.

5. **[OAuth loop on Linux/IntelliJ — state parameter dropped](https://github.com/anthropics/claude-code/issues/77966)** – #77966 (OPEN, 8 comments, 6 👍)  
   “Sign in again to continue” redirect loses the state parameter, trapping users in an infinite loop.

6. **[Event-loop starvation ~200% CPU after hibernate/resume](https://github.com/anthropics/claude-code/issues/80404)** – #80404 (OPEN, 4 comments, 0 👍)  
   Windows analog of #62308; libuv stuck after resume. Self-terminates after minutes—still very disruptive.

7. **[Sandbox regression: bwrap: Can't mkdir /opt/.claude](https://github.com/anthropics/claude-code/issues/79997)** – #79997 (OPEN, 3 comments, 2 👍)  
   v2.1.216 sandbox fails closed on non-root installs; kills every Bash tool call before the command runs.

8. **[Cannot purchase API credits in Japan](https://github.com/anthropics/claude-code/issues/80055)** – #80055 (OPEN, 2 comments, 0 👍)  
   Card authorization succeeds but purchase fails; multiple cards affected.

9. **[Plugin submissions stuck at “Published”](https://github.com/anthropics/claude-code/issues/80263)** – #80263 (OPEN, 3 comments, 0 👍)  
   Plugin never appears in the directory after reaching Published status; no removal of stuck duplicates.

10. **[Desktop app webview repeatedly unresponsive (regression)](https://github.com/anthropics/claude-code/issues/80403)** – #80403 (OPEN, 1 comment, 0 👍)  
    White screen loop after upgrade to 1.24012.1.0 on Windows; kill-and-reload cycle.

## Key PR Progress (9 total)

1. **[feat(plugins): add /planwith command](https://github.com/anthropics/claude-code/pull/18217)** – #18217 (CLOSED)  
   Enables inline plan mode prompts (e.g., `/planwith "design auth flow"`), eliminating the two-step toggle. Long-standing request.

2. **[docs(gcp): stop on checksum mismatch](https://github.com/anthropics/claude-code/pull/80353)** – #80353 (OPEN)  
   Halts GCP gateway deployment if the binary’s checksum fails, preventing silent corruption.

3. **[Add account profiles plugin](https://github.com/anthropics/claude-code/pull/80326)** – #80326 (OPEN)  
   Experimental plugin for isolating `CLAUDE_CONFIG_DIR` environments per account (personal, work, client)—manages profiles via CLI commands.

4. **[docs: fix broken link(s) via archive.org](https://github.com/anthropics/claude-code/pull/80294)** – #80294 (OPEN)  
   Restores dead npmjs.com link in README. Same effort as #80229.

5. **[docs: fix broken link(s) via archive.org](https://github.com/anthropics/claude-code/pull/80229)** – #80229 (OPEN)  
   Another broken npm link fix (duplicate PRs from same contributor).

6. **[fix: Console scrolling to top when Claude adds text](https://github.com/anthropics/claude-code/pull/80241)** – #80241 (OPEN)  
   Auto-generated PR fixing scroll jump on output; verified with static + local tests.

7. **[fix: Auto-compact never triggers despite 100% context](https://github.com/anthropics/claude-code/pull/80196)** – #80196 (OPEN)  
   Resolves a reported bug where statusline shows full context but auto-compact never fires.

8. **[fix: Instantly hitting usage limits with Max subscription](https://github.com/anthropics/claude-code/pull/80195)** – #80195 (OPEN)  
   Addresses billing misaccounting that max plan users hit limits prematurely.

9. **[Make devcontainer firewall init resilient to DNS failures](https://github.com/anthropics/claude-code/pull/80112)** – #80112 (OPEN)  
   Prevents one transient DNS lookup failure from aborting the entire firewall setup.

## Feature Request Trends

- **Cross-session context sharing** – #13843 (99 👍) for passing conversation history from Claude.ai to CLI remains the most demanded feature.
- **Desktop–CLI steering parity** – #71726 (16 👍) and #77724 ask for queued messages to be injected mid-turn on Desktop, matching CLI behavior.
- **Agent session management** – #66202 (9 👍) requests a way to dismiss completed background agent sessions (currently stuck on “Ready for review”).
- **Plugin directory reliability** – #80263 highlights the need for better publishing feedback and duplicate removal.
- **Large repository support** – #80414 asks for shallow/partial/sparse clone for cloud environments.
- **User-level skills in Desktop** – #80407 reports custom skills in `~/.claude/skills/` are ignored in Home/Cowork sessions.
- **Toggle for synchronized output** – #80411 requests a counterpart to `CLAUDE_CODE_FORCE_SYNC_OUTPUT` to disable it on buggy terminals.

## Developer Pain Points

- **Sandbox regressions** – #79997 is the second sandbox regression in a week (bwrap failures on non-root installs). Developers reliant on Bash tool calls are frequently blocked.
- **Event-loop & CPU issues** – #80404 (Windows hibernate spin) is a fresh recurrence of a previously closed macOS bug (#62308), suggesting cross-platform reliability gaps.
- **Authentication loops** – #77966 (Linux/IntelliJ OAuth) and #68674 (Windows Turnstile loop) poison the first-run experience across platforms.
- **Billing and plan accounting** – #56897 (sudden downgrade), #80055 (payment in Japan), #80382 (contradictory Fable 5 availability), and #80409 (incorrect credit prompts on Max plan) show recurrent friction in the billing and usage tracking pipeline.
- **Desktop webview crashes** – #80403 (white screen loop on Windows) and #80418 (artifact tool unavailable) indicate frontend stability is fragile on the latest MSIX build.
- **Cowork session data loss** – #80420 (history stored in temp dir inside VM bundles) and #80419 (orphaned CoworkVMService blocking reinstall) affect users on Windows with multiple VMs.
- **Localisation / IME** – #80415 (Korean text garbled in VSCode extension cards) shows Unicode handling gaps in the UI layer.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-07-23

## Today’s Highlights

Four alpha releases of the Rust-based CLI (`v0.146.0‑alpha.1`–`.4`) landed today, continuing the migration from the legacy Node.js client. The community remains vocal about the aggressive auto‑resolve timer, which defaults to 60 seconds and breaks `plan` mode workflows. A new thread‑pinning API and Guardian model‑limit compliance landed in PRs, while several long‑standing Windows sandbox, OAuth, and rate‑limit issues saw no resolution.

## Releases

Four patch‑version alpha releases for the Rust CLI were published in the last 24 hours — `rust‑v0.146.0‑alpha.1` through `rust‑v0.146.0‑alpha.4`. No changelog or commit descriptions were provided; likely contain incremental fixes for the ongoing Rust backend overhaul.  
[Releases page](https://github.com/openai/codex/releases)

## Hot Issues

1. **[#28969] Add setting to disable the auto‑resolve in 60 seconds for questions**  
   *53 comments, 151 👍*  
   The most upvoted open issue. Users working with `plan` mode find the forced 60‑second auto‑resolve interrupts their workflow. The community is strongly requesting a permanent disable flag, not just a timeout override.  
   [Issue #28969](https://github.com/openai/codex/issues/28969)

2. **[#29532] macOS: Persistent SQLite TRACE log churn after v0.142.0**  
   *44 comments, 8 👍*  
   A partial fix reduced websocket‑related logs, but the root cause (`TRACE` target log in the SQLite journal) remains. Users report growing `~/.codex/logs_2.sqlite` files.  
   [Issue #29532](https://github.com/openai/codex/issues/29532)

3. **[#17827] Customizable status line (TUI)**  
   *31 comments, 119 👍*  
   A long‑standing feature request for terminal‑based real‑time info (token usage, model, rate limits). Inspired by Claude Code, it has strong community support.  
   [Issue #17827](https://github.com/openai/codex/issues/17827)

4. **[#21639] Hooks no longer run after Codex Desktop update**  
   *23 comments, 6 👍*  
   A regression in the Desktop app (v26.506) where custom hooks stopped executing. Affects users relying on pre/post‑run automation.  
   [Issue #21639](https://github.com/openai/codex/issues/21639)

5. **[#31573] OAuth authentication fails at issuer validation**  
   *19 comments, 45 👍*  
   Free‑tier users cannot authenticate via MCP because the OAuth flow rejects the issuer URL. Critical for anyone using custom MCP servers with OAuth.  
   [Issue #31573](https://github.com/openai/codex/issues/31573)

6. **[#33685] Weekly limit draining like the old 5‑hour limit**  
   *19 comments, 9 👍*  
   Users report that the new weekly usage cap consumes token at the same breakneck speed as the previous 5‑hour window, suggesting the underlying metering changed only the window length.  
   [Issue #33685](https://github.com/openai/codex/issues/33685)

7. **[#25319] Scope Codex VS Code chats to current workspace**  
   *17 comments, 47 👍*  
   Chat history is shared across all projects. Developers want per‑workspace isolation to avoid context pollution.  
   [Issue #25319](https://github.com/openai/codex/issues/25319)

8. **[#27597] Codex IDE extension fails to load in VS Code Remote‑SSH**  
   *16 comments, 4 👍*  
   The extension crashes on startup when using Remote‑SSH, while the CLI works fine. Blocks remote development workflows.  
   [Issue #27597](https://github.com/openai/codex/issues/27597)

9. **[#22428] Windows desktop sandbox fails with CreateProcessAsUserW error**  
   *15 comments, 10 👍*  
   Sandboxed commands fail on Windows 11 with a `CreateProcessAsUserW` error after a Desktop update. Frequent sandbox refresh failures.  
   [Issue #22428](https://github.com/openai/codex/issues/22428)

10. **[#32031] Multi‑agent v2 spawn_agent model overrides broken**  
    *5 comments, 14 👍*  
    A critical UX regression where default sub‑agent model schema makes overrides undiscoverable and fails to accept natural call shapes. Affects GPT‑5.6‑Sol users.  
    [Issue #32031](https://github.com/openai/codex/issues/32031)

## Key PR Progress

1. **[#34852] Wake sleeping threads for queued agent mail**  
   Fixes a deadlock where idle threads in durable sleep remained unresponsive when new agent work arrived.  
   [PR #34852](https://github.com/openai/codex/pull/34852)

2. **[#34851] Use batch metadata for plugin app summaries**  
   Loads app metadata through the authenticated batch API (100 items per batch), with graceful fallback to cached metadata on failure.  
   [PR #34851](https://github.com/openai/codex/pull/34851)

3. **[#34850] Disable image generation for Free‑plan accounts**  
   Skips registering the standalone `image_generation` tool when the account is Free. Keeps the feature intact for paid tiers.  
   [PR #34850](https://github.com/openai/codex/issues/34850)

4. **[#34849] Cache remote plugin catalogs by scope**  
   Introduces disk caching for global, user, and workspace plugin catalogs with a 3‑hour TTL, reducing network requests and improving startup time.  
   [PR #34849](https://github.com/openai/codex/pull/34849)

5. **[#34847] Use Guardian model limits for review sessions**  
   Clears parent context‑window overrides when Guardian review selects a different model, preventing context‑size mismatches.  
   [PR #34847](https://github.com/openai/codex/pull/34847)

6. **[#34846] Allow custom providers to opt into standalone web search**  
   Adds `supports_standalone_web_search` to model‑provider settings (default `false`), enabling the `web.run` tool for opted‑in custom Response providers.  
   [PR #34846](https://github.com/openai/codex/pull/34846)

7. **[#34845] Track multi‑agent mode in world state**  
   Makes multi‑agent mode instructions durable across history changes by storing them in a dedicated world‑state section that diffs and restores automatically.  
   [PR #34845](https://github.com/openai/codex/pull/34845)

8. **[#34840] Add persisted thread pinning to the app server**  
   Implements `isPinned` flag on threads, with API endpoints to pin/unpin and filter by pinned state. Includes cursor‑based pagination.  
   [PR #34840](https://github.com/openai/codex/pull/34840)

9. **[#34839] Preserve user input when MCP startup is interrupted**  
   Interrupting a turn while MCP tools were still starting no longer loses the submitted user input – the message is recorded before tool setup completes.  
   [PR #34839](https://github.com/openai/codex/pull/34839)

10. **[#34819] Enable git attribution across Codex entry points**  
    Installs the git attribution extension in app server, MCP server, and `codex debug prompt-input` so authenticated workspace policy controls commit‑related instructions sent to the model.  
    [PR #34819](https://github.com/openai/codex/pull/34819)

## Feature Request Trends

The most requested feature directions this week centre on **user control and configurability**:

- **Disable auto‑resolve** — Multiple issues (#28969, #34310) demand a permanent switch to disable the 60‑second auto‑resolve, especially for `plan` mode.
- **Customizable TUI status line** (#17827) – Developers want real‑time visibility into token usage, model name, rate limits, and git branch, similar to Claude Code.
- **Workspace‑scoped chat history** (#25319) – The VS Code extension mixes chat across projects; users want per‑workspace context.
- **Inline diff display in Desktop** (#24513) – The CLI shows file diffs inline, but the Desktop app only shows filenames, forcing manual `git diff`.
- **Persistent thread pinning** – Already addressed by PR #34840, but the underlying request (ability to organise threads) has been a long‑standing ask.

## Developer Pain Points

Recurring frustrations across the reported issues:

- **Windows‑specific breakage** – Sandbox failures (#22428), login token exchanges (#26764), webview errors (#14745), and excessive `taskkill.exe` spawning (#33778) plague Windows users, especially in WSL hybrid setups.
- **Authentication & MCP OAuth** – OAuth issuer validation (#31573) and missing resource parameters during token refresh (#33403) prevent custom MCP servers from working reliably.
- **Rate‑limit surprises** – The weekly limit behaves like the old 5‑hour cap (#33685), and “Ultra” mode reportedly burns usage without producing results (#34743).
- **Multi‑agent v2 UX regression** – Model overrides in sub‑agent spawns are broken and undiscoverable (#32031), blocking power users of GPT‑5.6.
- **Post‑update regressions** – Each release seems to break hooks (#21639), sandbox setups (#22428), or sidebar visibility (#33727), eroding trust in stable upgrades.
- **Context growth and compaction** – Long‑running sessions suffer from excessive context growth even with memories disabled (#24336), and compaction time (now tracked in #34835) remains opaque to users.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest – 2026-07-23

## Today's Highlights

The team shipped **v0.52.0 stable** and a **v0.53.0-preview.0** with a critical fix for A2A tool cancellation and credential handling improvements. Community attention remains focused on agent reliability: the generalist agent hang issue (#21409) continues to receive upvotes, while a new bug report (#22323) reveals that subagent recovery after `MAX_TURNS` is falsely reported as a goal success. On the PR side, a security patch closes a variable expansion bypass (GHSA-wpqr-6v78-jr5g), and a new `eval:coverage` command lands in the nightly.

---

## Releases

- **[v0.52.0](https://github.com/google-gemini/gemini-cli/releases/tag/v0.52.0)** – Stable release. Excludes transient CI files from workspace context and introduces foundational modules for the caretaker triage worker.
- **[v0.53.0-preview.0](https://github.com/google-gemini/gemini-cli/releases/tag/v0.53.0-preview.0)** – Preview release. Fixes a `400 Bad Request` in A2A by grouping cancelled tool responses and coalescing consecutive roles. Also adds an LLM triage orchestrator and container build.
- **[v0.52.0-nightly.20260723](https://github.com/google-gemini/gemini-cli/releases/tag/v0.52.0-nightly.20260723.g9681621c6)** – Adds `eval:coverage` command and fixes cached credential verification with `GOOGLE_APPLICATION_CREDENTIALS` fallback.

---

## Hot Issues

1. **[#22323 – Subagent recovery after MAX_TURNS reported as GOAL success](https://github.com/google-gemini/gemini-cli/issues/22323)**  
   *12 comments, 2 👍*  
   A critical bug where `codebase_investigator` subagents report `status: "success"` even after hitting the turn limit. Users lose visibility into actual interruptions. The community is concerned about false positives in agent task completion.

2. **[#21409 – Generalist agent hangs](https://github.com/google-gemini/gemini-cli/issues/21409)**  
   *8 comments, 8 👍*  
   Simple file operations (e.g., folder creation) cause the generalist agent to hang indefinitely. Workaround: disable subagent delegation. Highly upvoted—this is a top pain point for daily users.

3. **[#25166 – Shell command execution gets stuck with "Waiting input"](https://github.com/google-gemini/gemini-cli/issues/25166)**  
   *4 comments, 3 👍*  
   After completing a shell command, the CLI hangs with "Awaiting user input" even for non-interactive commands. Frustrates automation workflows.

4. **[#21983 – Browser subagent fails in Wayland](https://github.com/google-gemini/gemini-cli/issues/21983)**  
   *4 comments, 1 👍*  
   Browser agent crashes on Wayland with `Termination Reason: GOAL`. Wayland users cannot rely on browser automation.

5. **[#20079 – Symlink agents not recognized](https://github.com/google-gemini/gemini-cli/issues/20079)**  
   *4 comments, 0 👍*  
   `~/.gemini/agents/filename.md` symlinks are ignored. Users expecting symlink support for agent configuration management face unexpected behavior.

6. **[#26522 – Auto Memory retries low‑signal sessions indefinitely](https://github.com/google-gemini/gemini-cli/issues/26522)**  
   *5 comments, 0 👍*  
   Auto Memory only marks sessions as processed when the extraction agent reads them. Low-signal sessions are re‑surfaced repeatedly, creating noise in the memory pipeline.

7. **[#21968 – Gemini does not use skills and sub‑agents enough](https://github.com/google-gemini/gemini-cli/issues/21968)**  
   *6 comments, 0 👍*  
   Even with well‑described custom skills (e.g., gradle, git), the model rarely delegates to them autonomously. Users want better tool‑use prompting and sub‑agent activation.

8. **[#22672 – Agent should stop/discourage destructive behavior](https://github.com/google-gemini/gemini-cli/issues/22672)**  
   *3 comments, 1 👍*  
   The model occasionally uses `git reset --force` or similar unsafe commands. Community requests guardrails for destructive operations.

9. **[#22232 – Enhance browser_agent resilience: automatic session takeover and lock recovery](https://github.com/google-gemini/gemini-cli/issues/22232)**  
   *4 comments, 0 👍*  
   `BrowserManager.ts` uses a fail‑fast strategy on locked profiles. Requesting automatic recovery and lock retry to avoid manual intervention.

10. **[#22267 – Browser Agent ignores settings.json overrides](https://github.com/google-gemini/gemini-cli/issues/22267)**  
    *3 comments, 0 👍*  
    Settings like `maxTurns` are read by `AgentRegistry` but not applied to the Browser Agent. Configuration overrides are effectively broken.

---

## Key PR Progress

1. **[#28403 – Fix variable expansion bypass (GHSA‑wpqr‑6v78‑jr5g)](https://github.com/google-gemini/gemini-cli/pull/28403)**  
   Incomplete checks in `detectBashSubstitution()` and `detectPowerShellSubstitution()` allowed `$VAR` and `${VAR}` patterns to bypass security gates. This patch hardens both detection and the automated dedup workflow.

2. **[#28485 – Add gemini‑3.5‑flash to model selector for all users](https://github.com/google-gemini/gemini-cli/pull/28485)**  
   Fixes #28483: `buildAvailableModels()` (legacy path) omitted `gemini-3.5-flash`. Now all users can select it.

3. **[#28410 – Shorten MCP tools/list discovery timeout](https://github.com/google-gemini/gemini-cli/pull/28410)**  
   A slow or misbehaving MCP server could freeze the CLI for 10 minutes. This PR adds a short default timeout so the CLI fails fast and stays usable.

4. **[#28309 – Improve Markdown rendering for CJK and __bold__ syntax](https://github.com/google-gemini/gemini-cli/pull/28309)**  
   Fixes hard line‑wrapping and misinterpreted lists in CJK text, and corrects bold rendering (`__bold__`). Welcome UX improvement for international users.

5. **[#28469 – Rotate session ID on model fallback to prevent stateful API errors](https://github.com/google-gemini/gemini-cli/pull/28469)**  
   When falling back to `gemini-2.5-flash`, reusing the same session ID caused `[API Error: Please submit a new query]`. Session rotation unblocks fallback paths.

6. **[#28169 – Add eval coverage report command](https://github.com/google-gemini/gemini-cli/pull/28169)**  
   Adds `npm run eval:coverage` to cross‑reference eval test coverage against the tool registry. Supports `--root` for monorepo usage. (Merged into nightly.)

7. **[#28447 – Windows PowerShell troubleshooting docs](https://github.com/google-gemini/gemini-cli/pull/28447)**  
   Adds Windows‑specific guidance for the `gemini` command after global npm install. Addresses missing PowerShell troubleshooting.

8. **[#28509 – Filter thought parts from history turns when context management is disabled](https://github.com/google-gemini/gemini-cli/pull/28509)**  
   Prevents internal monologue (`thought: true`) from leaking into history for Gemini 2.x models, avoiding duplicate reasoning blocks.

9. **[#28406 – Apply modelIdResolutions to tool sub‑agent model configs](https://github.com/google-gemini/gemini-cli/pull/28406)**  
   Fixes #28390: utility tools (web‑search, web‑fetch) hardcoded `gemini-3-flash-preview` without running through `modelIdResolutions`, causing `INVALID_MODEL` errors for API‑key users without preview access.

10. **[#28408 – Centralize dense payload detection in tool mapping](https://github.com/google-gemini/gemini-cli/pull/28408)**  
    Refactors UI code to move `hasDensePayload` logic from `ToolGroupMessage` into `mapToDisplay`, reducing frontend awareness of backend data internals.

---

## Feature Request Trends

- **AST‑aware code understanding** – Issues #22745 and #22746 call for syntax‑tree‑based file reads, search, and codebase mapping to reduce token waste and improve tool‑call precision.
- **Agent reliability and self‑awareness** – Requests for accurate CLI flag/hotkey knowledge (#21432), better subagent trajectory sharing (#22598), and guardrails against destructive operations (#22672) dominate.
- **Memory system improvements** – Multiple issues about Auto Memory (#26516, #26522, #26523, #26525) seek better logging, retry avoidance, and redaction determinism.
- **Browser agent robustness** – Session lock recovery (#22232), Wayland support (#21983), and settings‑override respect (#22267) are recurring themes.
- **Eval infrastructure scaling** – The `component level evaluations` epic (#24353) envisions 76+ behavioral tests running across 6 Gemini models, with coverage reporting now landed as a command.

---

## Developer Pain Points

- **Agent hangs and freezes** – The generalist agent (#21409) and shell execution (#25166) both suffer from indefinite stalling, forcing users to kill sessions.
- **Misleading subagent status** – #22323 shows that turn‑limit interruptions are misrepresented as success, eroding trust in agent reporting.
- **Configuration inconsistencies** – Symlink agents ignored (#20079), browser settings overrides not applied (#22267), and subagents running despite being disabled (#22093) create config surprises.
- **Browser agent fragility** – Wayland crashes (#21983) and locked‑profile failures (#22232) break automation on non‑X11 Linux.
- **Memory system noise** – Auto Memory retrying low‑signal sessions (#26522) and silent invalid patches (#26523) pollute the memory pipeline with unnecessary work.
- **Thought leakage in history** – Internal reasoning parts leaking into user‑visible history (#28509 fix) caused duplicate entries; the fix is now open for review.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-07-23

## Today's Highlights

Three patch releases (v1.0.74-1 through v1.0.74-3) landed today, bringing first-run sandbox onboarding, Gemini 3.6 Flash support, and critical session isolation fixes. Meanwhile, the issue tracker saw a surge of new triage reports—13 opened in the last 24 hours alone—highlighting persistent Windows and tmux compatibility problems, a regression of the React/Ink infinite render loop, and growing community demand for configurable auto-mode model pools and per-subagent billing visibility.

## Releases

**v1.0.74-1, v1.0.74-2, v1.0.74-3** — Three patches pushed today, with v1.0.74-1 containing the most substantial changes:

- **Added:** First-run splash to opt into the default sandbox; support for `gemini-3.6-flash`
- **Improved:** Session multiplexing no longer leaks open dialogs between sessions—eligible pickers reopen on switchback; the `$` interactive shell shortcut now operates correctly
- **Fixes and changes** in v1.0.74-2 and v1.0.74-3 are noted but not detailed in changelogs

## Hot Issues (10 of 30 with highest engagement)

[#443 — Feature Request: Built-in PDF Reading Support](https://github.com/github/copilot-cli/issues/443)
*Author: non-stop-dev | Comments: 6 | 👍: 33*
The top-voted open issue. Users want native PDF handling (academic papers, technical docs) without installing external tools like `pdftotext`. High community resonance indicates this is a significant missing capability for professional and research workflows.

[#3534 — WSL2 (ARM64): `/copy` fails with `clip.exe` quoting bug](https://github.com/github/copilot-cli/issues/3534)
*Author: TheDr1ver | Comments: 5 | 👍: 4*
A platform-specific clipboard regression on Windows ARM64. The `cmd.exe` wrapper mangles quoting, breaking clipboard writes. A related PR (#4228) was withdrawn today, so the fix path remains unclear.

[#4016 — BYOK still rejected in `--acp` mode: authentication regression](https://github.com/github/copilot-cli/issues/4016)
*Author: gwexler-msft | Comments: 5 | 👍: 4*
Custom providers configured via `COPILOT_PROVIDER_*` work with `-p` but fail with `--acp --stdio`, requiring a GitHub login. This is the third recurrence of this bug class—developers using BYOK in non-interactive pipelines are impacted.

[#4163 — Zombie processes accumulate under copilot PID on Linux](https://github.com/github/copilot-cli/issues/4163)
*Author: radtka2-mdt | Comments: 3 | 👍: 2*
Child subprocesses are not reaped, producing zombies at ~2/min. Long-running sessions degrade system resources. Affects all Linux users running persistent sessions.

[#4206 — Environment footer stuck on "Loading:" forever under org MCP policy](https://github.com/github/copilot-cli/issues/4206)
*Author: cryptonic7-tech | Comments: 2 | 👍: 2*
Built-in GitHub MCP handshake stalls when org policies are applied. The `/env` command shows everything loaded, but the status footer never completes. Enterprise users are particularly affected.

[#1688 — Configurable auto-compaction threshold for context memory](https://github.com/github/copilot-cli/issues/1688)
*Author: jvivescortes | Comments: 2 | 👍: 5*
High-capacity model users (e.g., Claude Opus 4.6) experience severe latency bloat before CLI compaction triggers. A configurable threshold in `config.json` would allow tuning for different model characteristics.

[#4161 — `task_complete` tool unavailable after switching back to autopilot](https://github.com/github/copilot-cli/issues/4161)
*Author: AlexMalfr | Comments: 2 | 👍: 1*
Regression of a previously fixed issue (#1523). The `task_complete` tool should always be available in autopilot mode but gets filtered out after mode switches.

[#4222 — Regression of #2802: infinite React/Ink render loop on v1.0.72+](https://github.com/github/copilot-cli/issues/4222)
*Author: jasonthecuber | Comments: 0 | 👍: 0*
A critical regression: the "Maximum update depth exceeded" freeze that was fixed in v1.0.31 has returned. Main pane freezes, output is swallowed, and `/resume` dumps accumulated output. Affects VS Code integrated terminal on native Windows.

[#4218 — Allow users to configure the model pool used by Auto mode](https://github.com/github/copilot-cli/issues/4218)
*Author: ecmusick | Comments: 0 | 👍: 6*
Users want to constrain which models Auto mode can select—enabling control over cost and behavior. Fresh issue with immediate community support.

[#4207 — Show per-subagent AI credit usage breakdown in `/usage`](https://github.com/github/copilot-cli/issues/4207)
*Author: DenDrobiazko-Apryse | Comments: 0 | 👍: 6*
Cumulative session usage is shown, but subagent costs are invisible. Teams need granular billing attribution for subagent-intensive workflows. Complementary issue #4224 highlights that OTel spans omit billing attributes entirely.

## Key PR Progress (2 items total)

[#4228 — Withdrawn: incorrect scope for #3534](https://github.com/github/copilot-cli/pull/4228)
*Author: TheDr1ver | Updated: 2026-07-23*
A PR that attempted to fix the WSL clipboard quoting bug was withdrawn because it changed documentation instead of the private clipboard runtime implementation. Source branch deleted.

[#3163 — ViewSonic monitor (spam)](https://github.com/github/copilot-cli/pull/3163)
*Author: tijuks | Updated: 2026-07-22*
Spam PR referencing unrelated monitor hardware. No code changes.

**Note:** Zero substantive PRs are active in the repository today. This is atypical and may reflect a maintenance lull or internal development cycles.

## Feature Request Trends

The community is converging on several high-value directions:

1. **Enhanced content and format support** — Native PDF reading (#443, 33 👍) is by far the most-requested capability, enabling work with academic and technical documents without external converters.

2. **Granular usage visibility** — Two complementary requests (#4207, #4224) demand per-subagent AI credit breakdowns in both the UI and OTel telemetry for accurate cost accounting.

3. **Advanced orchestration and agent chaining** — Users want inline custom agent invocation and chaining within prompts (#4208, 3 👍), plus a `skill` tool alias for custom agent profiles (#4209), reflecting growing sophistication in multi-agent workflows.

4. **Configurability and control** — Four distinct requests target user configurability: auto-mode model pool selection (#4218), auto-compaction thresholds (#1688), request-error retry counts (#4210), and shell-integration OSC 133 sequences (#3428).

5. **Terminal compatibility and accessibility** — Issues with tmux (invisible text #4212, command hang #4223) and dark-on-dark themes indicate the CLI's terminal rendering stack needs broader compatibility testing.

## Developer Pain Points

**Regressions erode trust.** Issues #2802/#4222 (infinite render loop recurrence) and #4016 (3rd BYOK auth regression) suggest the project lacks systematic regression testing for its React/Ink UI and non-interactive auth paths.

**Cross-platform gaps persist.** Windows users face clipboard quoting bugs (#3534), native crashes on exit (#4217), and hard crashes with notifications enabled (#4219). Linux-on-musl users report broken auto-update binaries (#3696). Zombie process accumulation (#4163) affects all Linux deployments.

**Terminal environment fragmentation.** Tmux users report two distinct blockers—invisible UI elements (#4212) and undetected command completion (#4223). Windows terminal and VS Code integrated terminal users experience the render loop regression (#4222).

**Permission scanner false positives.** Two reports (#4221, #4220) show the read/write command gate misclassifying read-only operations (git log -L, gh api GET) as workspace mutations, blocking legitimate investigative workflows in plan mode.

**Session reliability issues at scale.** Stuck loading indicators (#4206, #4215), hang on cold-start resume (#4165), and the coordinator stuck "Working" state (#4225) indicate session lifecycle management remains brittle, especially under org policies and subagent workloads.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest – 2026-07-23

## Today’s Highlights

No new releases were published in the last 24 hours. The community surfaced four issues and three pull requests, with a notable **critical bug** around TPD rate-limit miscalculation (Issue #2318) and a **compatibility regression** for third‑party APIs that now reject Moonshot‑specific prompt cache parameters (Issue #2534). A timely PR (#2535) already scopes those parameters to Moonshot endpoints, while a new feature request for per‑agent model selection (#2533) signals growing interest in cost‑tiered multi‑agent workflows.

---

## Releases

No new versions were tagged in the last 24 hours.

---

## Hot Issues

1. **[#2318 – “request reached organization TPD rate limit, current: 1505241”](https://github.com/MoonshotAI/kimi-cli/issues/2318)**  
   *Author: globalvideos272-lab* | 👍 2 | Last updated Jul 22  
   **What:** User on Kimi 2.6 (Windows, moonshot.ai platform) reports an incorrect TPD (tokens per day) calculation that blocks legitimate usage. The error talks about a limit of 1.5M but the actual consumption seems mis‑computed.  
   **Why it matters:** If the rate‑limit logic is buggy, teams relying on Kimi Code CLI for automated workflows may be unnecessarily throttled. The issue has been open since May and still lacks a resolution – community frustration is growing.

2. **[#2534 – “Model API error 400 – Unsupported parameter: `prompt_cache_key`”](https://github.com/MoonshotAI/kimi-cli/issues/2534)**  
   *Author: dewrama* | Created & updated Jul 23 | 0 comments  
   **What:** After the latest update, calls to third‑party Kimi‑compatible endpoints (e.g., Nvidia NIM models) fail because the client sends the Moonshot‑specific `prompt_cache_key` parameter. The validation rejects it.  
   **Why it matters:** This is a regression that broke functionality for users who employ alternative model back‑ends. It’s the top‑priority fix today and already has an accompanying PR.

3. **[#2533 – “Feature Request: Per‑agent model selection for sub‑agents”](https://github.com/MoonshotAI/kimi-cli/issues/2533)**  
   *Author: bob0x-ai* | Created & updated Jul 23 | 0 comments  
   **What:** Proposes allowing each sub‑agent to run on a different model independent of the session default. The goal is to route cheap tasks (e.g., summarisation) to lower‑cost models and complex reasoning to capable ones.  
   **Why it matters:** This directly addresses cost optimisation for multi‑agent pipelines. Although not urgent, it received an immediate upvote and signals a clear community desire for finer‑grained resource control.

4. **[#2532 – “`kimi web` crashes at startup on Windows when stdout is redirected: UnicodeEncodeError (gbk) in `print_banner`”](https://github.com/MoonshotAI/kimi-cli/issues/2532)**  
   *Author: BFour666* | Created & updated Jul 22 | 0 comments  
   **What:** On Chinese‑locale Windows, the startup banner’s arrow character (➜ U+279C) cannot be encoded in GBK when stdout is piped or redirected. The application crashes immediately.  
   **Why it matters:** This affects CI/CD pipelines and any Windows‑based automation using `kimi web`. It’s a clear encoding‑handling gap that should be easy to fix with a fallback to plain ASCII.

---

## Key PR Progress

1. **[#2535 – “fix(llm): scope prompt cache keys to Moonshot APIs”](https://github.com/MoonshotAI/kimi-cli/pull/2535)**  
   *Author: Sanjays2402* | Created Jul 23 | Open  
   **What:** Resolves #2534 by ensuring `prompt_cache_key` is sent only to official Kimi/Moonshot endpoints. Third‑party compatible APIs no longer receive the parameter.  
   **Why it matters:** Direct fix for today’s top regression. The PR is clean and already targets the root cause – a welcome rapid response.

2. **[#2524 – “fix(tools): count StrReplaceFile replacements against the running content”](https://github.com/MoonshotAI/kimi-cli/pull/2524)**  
   *Author: Sreekant13* | Created Jul 20, updated Jul 22 | Open  
   **What:** Fixes a subtle bug where `StrReplaceFile` computed the number of replacements against the original file content rather than the content that had been modified by previous edits. This caused chained edits to report incorrect counts (and potentially mis‑behave).  
   **Why it matters:** Important for users who rely on sequential file patching. The fix ensures consistency in multi‑step edit operations.

3. **[#2530 – “fix(shell): stop blocking until timeout when a detached child holds the pipes”](https://github.com/MoonshotAI/kimi-cli/pull/2530)**  
   *Author: ayaangazali* | Created Jul 21, updated Jul 22 | Open  
   **What:** Fixes #2468 by changing `_run_shell_command` to not wait indefinitely for stdout/stderr EOF when a backgrounded process (`some_daemon &`) still holds the pipe open. Instead, it checks the exit code first.  
   **Why it matters:** This resolves a long‑standing bug where shell commands with detached children would block until the global timeout, wasting time in CI and automation.

---

## Feature Request Trends

The primary feature request surfacing this week is **per‑agent model selection** (Issue #2533). Users want to assign different models to sub‑agents within a session, enabling cost‑tiered multi‑agent workflows. This aligns with the broader industry shift toward orchestrating heterogeneous model back‑ends. No other explicit feature requests appeared in the last 24 hours, but the recent bug reports (especially the encoding crash on Windows) suggest a need for **better internationalisation and encoding fallback** in CLI output.

---

## Developer Pain Points

From the issues and PRs, recurring frustrations include:

- **Rate‑limit accuracy** (#2318): The TPD limit calculation appears broken, causing false throttling. The issue has been open for two months with no clear resolution – a growing pain point for power users.
- **Third‑party API compatibility** (#2534): Regressions introduced by platform‑specific parameters break integrations with alternative back‑ends. The rapid PR response is encouraging, but the pattern suggests the client could benefit from a more robust provider‑neutral design.
- **Windows encoding issues** (#2532): Unicode characters in startup banners crash the application on non‑UTF‑8 locale Windows when stdout is redirected. This highlights a lack of robust encoding handling in the CLI’s output paths.
- **Shell subprocess pipe handling** (#2530): Backgrounded processes holding stdout/stderr can cause indefinite blocking – a reliability issue for scripted usage. The PR fixes it, but the underlying pattern (not checking exit code before EOF) was a subtle design flaw.

Overall, the community is actively contributing fixes to real‑world bugs, while the maintainers are showing good responsiveness on today’s critical regression.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest
**2026-07-23** | Generated from GitHub data of [anomalyco/opencode](https://github.com/anomalyco/opencode)

---

## Today's Highlights

A wave of contributor PRs landed today targeting core stability, provider compatibility, and TUI diagnostics. The community remains focused on auto‑discovery of OpenAI‑compatible models (185 👍) and custom system prompts (123 👍), while several long‑standing bugs around session management and model‑specific errors were closed. Two new open issues report desktop local‑server disconnections in v1.18.x.

---

## Releases

No new version was released today. The only new asset is a set of verification recordings for PR #38252.

---

## Hot Issues

*Pick of 10 noteworthy issues, ordered by community engagement and impact.*

### 1. [FEATURE] Auto‑discover models from OpenAI‑compatible provider endpoints  
**#6231** (OPEN, 30 comments, 185 👍)  
Users demand automatic model listing for local providers (LM Studio, Ollama). Manual `opencode.json` configuration is tedious and error‑prone. This is the most upvoted open feature request.  
[GitHub](https://github.com/anomalyco/opencode/issues/6231)

### 2. [FEATURE] Allow custom system prompts in global, project or custom directories  
**#7101** (CLOSED, 35 comments, 123 👍)  
Based on a Reddit discussion, this closed feature would let users define system prompts per scope. High engagement shows broad interest in prompt customization.  
[GitHub](https://github.com/anomalyco/opencode/issues/7101)

### 3. [FEATURE] Add "Fork to new session" from message timeline  
**#25582** (CLOSED, 9 comments, 5 👍)  
Users want to split a conversation at any point into a new session, matching existing behavior in OpenCode Desktop. Frequently requested in community discussions.  
[GitHub](https://github.com/anomalyco/opencode/issues/25582)

### 4. [BUG] AI strips all generics when editing TypeScript files  
**#21911** (CLOSED, 8 comments, 0 👍)  
A persistent bug where the edit tool removes generic type parameters. Affects all models. The root cause is suspected in the edit tool itself.  
[GitHub](https://github.com/anomalyco/opencode/issues/21911)

### 5. [BUG] Model does not actively update todowrite list during task execution  
**#28961** (CLOSED, 6 comments, 2 👍)  
Even when asked to track progress, the model rarely calls `todowrite`, leaving tasks stuck “in_progress”. A common frustration for users relying on task tracking.  
[GitHub](https://github.com/anomalyco/opencode/issues/28961)

### 6. [BUG] AI loops replying with summary prompt instead of answering  
**#18096** (CLOSED, 5 comments, 0 👍)  
A Chinese‑language report: the assistant enters a cycle of “I cannot construct a summary…”, never responding to user queries.  
[GitHub](https://github.com/anomalyco/opencode/issues/18096)

### 7. [BUG] Desktop memory grows to 3‑4 GB with multiple workspaces  
**#25490** (CLOSED, 4 comments, 0 👍)  
High memory consumption on Windows, leading to renderer crashes. Reports started with v1.14.32.  
[GitHub](https://github.com/anomalyco/opencode/issues/25490)

### 8. [BUG] Internal server error with Kimi K2.6 via Nvidia NIM  
**#26662** (CLOSED, 4 comments, 0 👍)  
A `reasoning_content` field as a dict in streaming deltas causes an unhashable type error. Only this model is affected.  
[GitHub](https://github.com/anomalyco/opencode/issues/26662)

### 9. [BUG] Plugin hook rejection aborts unrelated parallel sessions  
**#28958** (CLOSED, 3 comments, 2 👍)  
When a plugin hook throws, the interrupt propagates to sibling sessions in parallel sub‑agent workloads, killing healthy peers.  
[GitHub](https://github.com/anomalyco/opencode/issues/28958)

### 10. [BUG] Desktop v1.18.4 loses local server connection unexpectedly  
**#38419** (OPEN, 2 comments, 0 👍)  
The first of two recent reports (with #37233) about the local server turning red and becoming unresponsive after backgrounding the app.  
[GitHub](https://github.com/anomalyco/opencode/issues/38419)

---

## Key PR Progress

*10 important pull requests updated today, covering fixes, features, and refactors.*

### 1. fix(provider): select prompt cache keys by SDK  
**#38424** (OPEN)  
Uses the AI SDK npm package to pick the correct cache key format (`promptCacheKey` vs `prompt_cache_key`) per provider. Prevents cache misuse for OpenAI, Azure, xAI, and others.  
[GitHub](https://github.com/anomalyco/opencode/pull/38424)

### 2. fix(session): finalize assistant messages on failure  
**#38432** (OPEN)  
Adds cleanup for assistant messages when a provider turn fails, preventing orphaned message states. Closes #38431.  
[GitHub](https://github.com/anomalyco/opencode/pull/38432)

### 3. feat(tui): add turn token usage diagnostics  
**#38398** (OPEN, by jlongster)  
Derives token summaries from persisted assistant steps, groups tool continuations, and shows cache‑read drops with warnings. A major transparency improvement.  
[GitHub](https://github.com/anomalyco/opencode/pull/38398)

### 4. feat(command): identify command sources  
**#38438** (OPEN)  
Adds source metadata so clients can distinguish commands from configuration, plugins, and MCP servers. Enables better UI for command management.  
[GitHub](https://github.com/anomalyco/opencode/pull/38438)

### 5. feat(server): expose location paths  
**#38437** (OPEN)  
New API endpoints return home, state, config, worktree, and other directory paths. Useful for external tools and plugins.  
[GitHub](https://github.com/anomalyco/opencode/pull/38437)

### 6. fix(ai): normalize Bedrock cache usage  
**#38427** (CLOSED)  
Correctly treats Bedrock Converse `inputTokens` as non‑cached input, aligning with AWS semantics. Includes synthetic and record‑replay test coverage.  
[GitHub](https://github.com/anomalyco/opencode/pull/38427)

### 7. fix(core): migrate named agent colors  
**#38414** (CLOSED, by jlongster)  
Preserves named agent colors in V1 config, migrates legacy names to `#aaaaaa` before V2 validation. Prevents config breakage.  
[GitHub](https://github.com/anomalyco/opencode/pull/38414)

### 8. feat(opencode): add roll‑call command  
**#38433** (OPEN)  
Adds a `roll-call` command for connectivity and latency testing of configured text models. Closes #13711.  
[GitHub](https://github.com/anomalyco/opencode/pull/38433)

### 9. fix(core): load dynamic models for generation  
**#38401** (CLOSED)  
Fixes `/api/generate` to work with dynamically loaded provider packages (e.g., Gemini models). Previously threw “Unsupported package” errors.  
[GitHub](https://github.com/anomalyco/opencode/pull/38401)

### 10. fix(core): skip ahead by counting newlines when reading at high offset  
**#38428** (OPEN)  
Speeds up reading large files at high line offsets by counting newlines directly instead of scanning all text. Closes #35044.  
[GitHub](https://github.com/anomalyco/opencode/pull/38428)

---

## Feature Request Trends

Trends distilled from today’s issue and PR activity:

- **Model discovery & compatibility** – Auto‑listing models from OpenAI‑compatible endpoints (#6231) and better handling of provider‑specific quirks (Qwen, Kimi, Bedrock) dominate.
- **Session management** – Fork to new session (#25582), configurable auto‑rename after N messages (#29002), and workspace creation reliability (#29057) show demand for richer session workflows.
- **Tool ecosystem** – New tools like `cp` (#29017), `roll‑call` (#38433), and advanced slash commands (`/effort`, `/goal` in #29030) are repeatedly requested.
- **Plugin/API integration** – Exposing command sources (#38438), ACP‑backed agents (#28991), and message body exposure in plugin hooks (#22831) indicate growing interest in extensibility.
- **Configuration flexibility** – Custom system prompts (#7101), project‑instructions toggle (#38420), and per‑directory settings reflect a need for fine‑grained control.

---

## Developer Pain Points

Recurring frustrations observed across recent issues:

- **System message placement errors** – Multiple Qwen model versions throw “System message must be at the beginning” (#16560, #20785, #20813). Users are forced to switch providers or downgrade.
- **Edit tool corruption** – The edit tool strips TypeScript generics (#21911) and can introduce garbled characters when supplied with prefix markers (#18031).
- **Session mixing** – Non‑git directories share a global project ID, causing `--continue` to resume an unrelated session (#18890).
- **Desktop reliability** – Memory leaks (#25490) and local‑server disconnections after backgrounding (#38419, #37233) hurt daily workflow.
- **Command input quirks** – Home/End keys fail with side panel open (#29053), `cmd‑A` no longer selects all (#25637), and spinner garbage appears in non‑TTY environments (#27908).
- **Parallel session interference** – Plugin hook failures abort unrelated sessions (#28958), and the `todowrite` tool is rarely called as expected (#28961).

*These pain points continue to drive the community’s most active bug reports and feature requests.*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest – 2026-07-23

**Data Source:** [`badlogic/pi-mono`](https://github.com/badlogic/pi-mono) (upstream `earendil-works/pi`)

---

## Today’s Highlights

The community saw a surge of activity around **provider compatibility and resilience**, with multiple issues and PRs addressing retry abortability, OAuth refresh failures, and Copilot Enterprise compaction. Several fixes landed for **external editor startup performance** and **extension dependency display on Windows**. The first **constrained sampling** feature proposal and a new **AgentHarness tool abstraction** signal growing interest in safe, structured tool execution.

---

## Releases

*(No new releases in the last 24 hours.)*

---

## Hot Issues

1. **[#6768] Compaction using Copilot Enterprise not possible**  
   *Open, 9 comments, 9 👍*  
   Compaction fails with both OpenAI and Anthropic models when using a Copilot Enterprise license, showing `421 Misdirected Request` errors. Community interest is high.  
   [🔗](https://github.com/earendil-works/pi/issues/6768)

2. **[#6911] OpenAI SDK retries sleep full Retry-After (days) and Escape cannot abort**  
   *Closed, 5 comments*  
   SDK retries ignore `AbortSignal` and may sleep for days on `429` responses. The fix is being merged as PR #6980.  
   [🔗](https://github.com/earendil-works/pi/issues/6911)

3. **[#6992] OAuth refresh 502 is not retried because lazyStream drops ModelsError.cause**  
   *Closed, 1 comment*  
   Internal contract mismatch: a 502 during OAuth refresh is never retried even though the engine treats 502 as retryable.  
   [🔗](https://github.com/earendil-works/pi/issues/6992)

4. **[#6774] Ctrl+G external editor is slow to launch when os.tmpdir() is crowded**  
   *Closed, 7 comments*  
   Temp file written directly to `os.tmpdir()` causes slowdowns. Solved by PR #6903 which creates a private subdirectory.  
   [🔗](https://github.com/earendil-works/pi/issues/6774)

5. **[#6621] Prevent accidental cache invalidation due to dynamic system prompt**  
   *Closed, 6 comments, 1 👍*  
   Users on unified memory devices (e.g., AMD Strix Halo) suffer slow prefills; every prompt change invalidates the cache. Request for stable system prompt hashing.  
   [🔗](https://github.com/earendil-works/pi/issues/6621)

6. **[#6210] /scoped-models cannot select model ids containing brackets**  
   *Open, 8 comments*  
   Legacy regex parsing breaks custom model IDs like `custom/bracketed-model[1m]`. Awaiting fix.  
   [🔗](https://github.com/earendil-works/pi/issues/6210)

7. **[#6940] OpenRouter cache breakpoint stops before tool results**  
   *Closed, 4 comments*  
   Consecutive tool-only turns fail to advance the cache breakpoint, causing ever-growing uncached input.  
   [🔗](https://github.com/earendil-works/pi/issues/6940)

8. **[#6924] pi --no-session leaves temp session directories behind**  
   *Open, 2 comments*  
   Temp directories under `~/.pi/agent/sessions/` are not cleaned up after subprocess exit, causing clutter.  
   [🔗](https://github.com/earendil-works/pi/issues/6924)

9. **[#6957] aws-bedrock provider ignores profile when there are AWS_* environment vars present**  
   *Closed, 2 comments*  
   Environment variables override the configured profile – a regression for multi-account setups.  
   [🔗](https://github.com/earendil-works/pi/issues/6957)

10. **[#6978] Interactive TUI: concurrent extension dialogs hang (orphaned Promise)**  
    *Closed, 1 comment*  
    When two `ctx.ui.confirm`/`select` dialogs open simultaneously, the earlier Promise never resolves, locking the session.  
    [🔗](https://github.com/earendil-works/pi/issues/6978)

---

## Key PR Progress

1. **[#6987] fix(tui): align grapheme widths with terminal cells** – *Open*  
   Attempts to fix the notoriously messy Unicode width handling in TUI rendering.  
   [🔗](https://github.com/earendil-works/pi/pull/6987)

2. **[#6341] feat(ai): support constrained sampling** – *Open, to-discuss*  
   Adds an opt-in JSON schema–level constraint for tool arguments, leveraging provider-side `strict` or `response_format` support.  
   [🔗](https://github.com/earendil-works/pi/pull/6341)

3. **[#6980] fix(ai): make provider retries abortable** – *Open*  
   Replaces native SDK retries with a homegrown helper that respects `AbortSignal` and caps retry delay. Fixes #6911.  
   [🔗](https://github.com/earendil-works/pi/pull/6980)

4. **[#6916] feat(agent): add AgentHarness execution tools** – *Closed*  
   Introduces `AgentHarnessTool` with arbitrary app-specific context, enabling safer multi-session orchestration.  
   [🔗](https://github.com/earendil-works/pi/pull/6916)

5. **[#6903] fix(coding-agent): speed up external editor launch** – *Closed*  
   Moves temp file into a `mkdtemp` subdirectory under a dedicated `os.tmpdir()` child, fixing #6774.  
   [🔗](https://github.com/earendil-works/pi/pull/6903)

6. **[#6984] feat(ai): honor compat.forceAdaptiveThinking in bedrock-converse-stream** – *Closed*  
   Adds a compatibility escape hatch for Anthropic models on Bedrock that require adaptive thinking but are not in the hardcoded allowlist.  
   [🔗](https://github.com/earendil-works/pi/pull/6984)

7. **[#6967] feat(coding-agent): expose session metadata to bash tools** – *Closed*  
   Passes session ID, provider, model, and reasoning level as environment variables for subprocesses.  
   [🔗](https://github.com/earendil-works/pi/pull/6967)

8. **[#6958] write tui debug/crash logs into the configured pi agent dir** – *Closed*  
   Fixes #6652: crash log now respects `PI_CODING_AGENT_DIR` instead of hardcoding `~/.pi`.  
   [🔗](https://github.com/earendil-works/pi/pull/6958)

9. **[#6965] fix: isolate test environment** – *Open, inprogress*  
   Cleans up environment variables and temp paths for reliable CI runs, preserving only allowed vars.  
   [🔗](https://github.com/earendil-works/pi/pull/6965)

10. **[#6976] fix(coding-agent): preserve TTY in startup benchmark** – *Closed*  
    The TUI startup benchmark now correctly enters interactive mode instead of exiting prematurely. Fixes #6975.  
    [🔗](https://github.com/earendil-works/pi/pull/6976)

---

## Feature Request Trends

Several community requests point toward **smarter model switching and session awareness**:

- **MRU model cycling** (#6982) – users want `ctrl+p` to cycle through recently used models rather than alphabetical order.
- **Per-block hidden thinking labels** (#6988) – callers want dynamic labels on a per-thinking-block basis instead of a single global label.
- **VS Code integration** (#6985) – a user-built extension for VS Code now requests listing in the official package registry.
- **Game UI restart** (#6983) – the built-in tic-tac-toe game should restart immediately rather than closing the TUI.

A more structural request is the **constrained sampling** PR (#6341), which would let tools enforce JSON Schema constraints on model output, enabling safer structured generation.

---

## Developer Pain Points

Recurring frustrations observed this week:

- **Retry and abort inconsistency** – Multiple issues (#6911, #6992) show that SDK retries ignore `AbortSignal` and may sleep for days, while OAuth refresh failures slip through retry logic.
- **Provider-specific config overrides** – The AWS Bedrock profile is silently overridden by environment variables (#6957); Copilot Enterprise compaction fails outright (#6768).
- **Cache invalidation on dynamic prompts** – Users with slow prefill (unified memory devices) suffer from cache misses whenever the system prompt changes (#6621).
- **Temp file placement and cleanup** – External editor launches (Ctrl+G) and `--no-session` mode leave debris in `os.tmpdir()` or `~/.pi/agent/sessions/` (#6774, #6924).
- **Windows extension path display** – NPM-dependent extensions show absolute paths in the extension banner on Windows (#6619, partially fixed by PR #6680 and #6964).
- **Concurrent UI prompts deadlock** – Calling `ctx.ui.confirm` from multiple tools simultaneously hangs the session (#6978).

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-07-23

**Editor’s Note:** This digest covers activity from 2026-07-22 through 2026-07-23. The project is in heavy active development, with 44 updated issues and 50 updated pull requests in the last 24 hours.

---

## 1. Today’s Highlights

A wave of CI and release stability issues dominated the past 24 hours: two consecutive nightly release workflows failed (v0.20.1-nightly.20260723.d064bd7dc and v0.20.1-nightly.20260723.83b97ec79), the core test suite is red on `main` due to a flaky fork dispatch test, and a main-branch E2E test run failed. On the fix side, multiple PRs address credential exposure via child-process environment sanitization, a critical side-query thinking enablement bug has a fix in review, and proactive work continues on autofix pipeline resilience, DAG visualization for session plans, and enterprise external-memory integration profiles. The week’s theme is clearly **hardening the core CI/CD pipeline while simultaneously pushing forward feature work in observability, security, and multi-agent visualization**.

---

## 2. Releases

**v0.0.0-benchmark-poc.20260722.1** (2026-07-22) – This is a temporary prerelease used solely to validate the GitHub Actions ➔ ECS benchmark worker ➔ GitHub result publication path. **Not a Qwen Code product release.** No user-facing changes.

---

## 3. Hot Issues (10 Notable)

1. **[#7516 – Main CI failed: E2E Tests](https://github.com/QwenLM/qwen-code/issues/7516)** [CLOSED]  
   A main-branch CI run failed on the `E2E Tests` workflow. Auto-labeled for agent intervention and quickly resolved, but any main-branch failure blocks all open PRs from merging. Community impact: high—any developer waiting for a merge is blocked.

2. **[#7284 – side-query forces enable_thinking=false, breaking TokenPlan endpoints](https://github.com/QwenLM/qwen-code/issues/7284)** [CLOSED]  
   `runSideQuery` (used by `web_fetch`, classifiers, etc.) always sends `enable_thinking: false`, causing a 400 error on endpoints requiring it `true`. A significant integration bug affecting all users of think-enabled providers. Fixed via PR #7541 (see below).

3. **[#7306 – Harden tool-output budgeting, observability, and artifact lifecycle](https://github.com/QwenLM/qwen-code/issues/7306)** [OPEN]  
   Phase 1 correctness is complete (#7323, #7470 merged). This tracks remaining work around finalization scope, budget enforcement, and cross-session artifact cleanup. Important for any developer relying on tool outputs in multi-step agents.

4. **[#7449 – Define an enterprise external-memory integration profile](https://github.com/QwenLM/qwen-code/issues/7449)** [OPEN]  
   A proposal for a provider-neutral external-memory integration spec. Documentation-first approach, no Core API changes yet. Relevant for teams needing long-term cross-session memory (e.g., knowledge bases, RAG pipelines).

5. **[#7404 – Startup update-check timeout too short when loading long sessions](https://github.com/QwenLM/qwen-code/issues/7404)** [CLOSED]  
   Chinese-language report: the version-check timeout is hit on startup when loading lengthy old sessions. A clear UX regression for power users with large conversation histories. Now closed (likely fixed or mitigated).

6. **[#7264 – Cold-start follow-ups: remaining lazy-loading candidates](https://github.com/QwenLM/qwen-code/issues/7264)** [OPEN]  
   An esbuild audit found a 17.24 MiB / 2420-module eager static import closure on every cold start. Follow-up work to lazy-load remaining candidates. Directly impacts CLI startup time for all users.

7. **[#7489 – VS Code file picker inserts @filename but image not attached](https://github.com/QwenLM/qwen-code/issues/7489)** [CLOSED]  
   The paperclip/attach icon inserts `@filename` text but the image is never sent to the model. A clear UX bug for VS Code Companion users relying on image context.

8. **[#6577 – Windows: Alt+V cannot paste clipboard screenshots](https://github.com/QwenLM/qwen-code/issues/6577)** [OPEN]  
   `Alt+V` shortcut does nothing on Windows PowerShell/Windows Terminal. `welcome-pr` tagged—community contributions welcome. Recurring pain point for Windows users.

9. **[#5958 – Web Shell CodeMirror not working on mobile browsers](https://github.com/QwenLM/qwen-code/issues/5958)** [OPEN]  
   Input editor non-functional on iOS Safari / Android Chrome. `welcome-pr` tagged. No progress for nearly a month—a significant gap for mobile-first workflows.

10. **[#7537 – Core test suite is red on main](https://github.com/QwenLM/qwen-code/issues/7537)** [CLOSED]  
    `packages/core test:ci` fails on `main` due to a fork dispatch test that never sees `registry.complete`. This makes every open PR’s test job red regardless of content. High urgency for CI stability—now closed.

---

## 4. Key PR Progress (10 Important)

1. **[#7490 – Retry a skipped-Prepare instead of stranding the PR terminal](https://github.com/QwenLM/qwen-code/pull/7490)** [OPEN]  
   Prevents an infra failure that happens before the agent runs from permanently terminating a healthy PR. Critical for autofix pipeline resilience. By wenshao.

2. **[#7557 – Persist usage for tool-only subagent rounds](https://github.com/QwenLM/qwen-code/pull/7557)** [OPEN]  
   Provider usage metadata is now persisted for rounds containing only tool calls (no text/reasoning). Enables accurate token-budget tracking in trajectory exporters. By DragonnZhang.

3. **[#7552 – Add workspace-level generation to serve](https://github.com/QwenLM/qwen-code/pull/7552)** [OPEN]  
   Adds a stateless, tool-free generation endpoint scoped to the primary workspace runtime, with capability advertisement and cancellation support. Unlocks workspace-scoped inference without a live session. By ytahdn.

4. **[#7550 – Say review coverage gaps in the author's units](https://github.com/QwenLM/qwen-code/pull/7550)** [OPEN]  
   `/review` now reports chunk-level gaps in PR author’s terms (file/line) instead of raw chunk IDs. Significantly improves review clarity. By wenshao.

5. **[#7527 – Strip daemon secrets from hook and tool-discovery child env](https://github.com/QwenLM/qwen-code/pull/7527)** [OPEN]  
   Follow-up to #7256: applies `sanitizeChildEnv()` to hook runners, tool discovery, and the three remaining agent-launched child processes. Critical for credential security. By chinesepowered.

6. **[#7534 – Retry requests when providers require thinking](https://github.com/QwenLM/qwen-code/pull/7534)** [OPEN]  
   Retries an OpenAI-compatible request once when the actual wire request sent `enable_thinking: false` and the provider returns 400. The core fix for issue #7284. By yiliang114.

7. **[#7530 – Simplify system prompt cache tiers](https://github.com/QwenLM/qwen-code/pull/7530)** [OPEN]  
   Refactors system prompt caching from per-fragment objects to exactly three string keys: `stable`, `context`, `volatile`. Cleaner architecture, easier to extend. By DragonnZhang.

8. **[#7471 – Add git mode selector for Web Shell new session](https://github.com/QwenLM/qwen-code/pull/7471)** [OPEN]  
   Unified git workflow selector (current branch, new branch, no git) in the Web Shell composer. Improves session creation UX for git-heavy workflows. By wenshao.

9. **[#7554 – Auto-update a PR red only from a stale, since-fixed base](https://github.com/QwenLM/qwen-code/pull/7554)** [OPEN]  
   Teaches autofix scan to merge current `main` into a PR that is red only because it merged a broken `main` that has since been fixed. Reduces false-positive autofix interventions. By wenshao.

10. **[#7535 – Retry model calls and surface degraded release notes](https://github.com/QwenLM/qwen-code/pull/7535)** [OPEN]  
    Makes the stable-release notes generator retry model calls before falling back, and makes degraded runs visible instead of silently green. By he-yufeng.

---

## 5. Feature Request Trends

- **Enterprise Memory/Knowledge Integration** (#7449): A clear growing interest in provider-neutral external-memory profiles for long-term, cross-session context retention—RAG, knowledge bases, enterprise document stores.
- **Visualization of Multi-Agent Execution** (#7525): Users are asking for a plan DAG view that links Todo nodes to live subagent executions, moving beyond text-only session logs into visual execution tracking.
- **Server/Workspace-Level Generations** (#7552): A push toward stateless, scoped inference endpoints that don’t require a live chat session—enabling CI/CD pipelines, batch processing, and tool-integrated AI.
- **Custom Skill Directories** (#7394): Support for loading skills from user-defined paths beyond the hardcoded `~/.qwen/`—important for team-shared skill repos and monorepo workflows.
- **Better Update/Disk Hygiene** (#7524): Interest in safe disk cleanup of staging directories left behind by forced termination or OOM—a sign of maturity for the managed-update feature.

---

## 6. Developer Pain Points

- **Update/Registry Check Failures** (#7515, #7543, #7520): Multiple reports of `qwen update` failing with “registry error.” Root causes include `getNpmCliPath` returning a mise bash wrapper instead of `npm-cli.js` and Node.js 26’s npm 12 returning arrays from `view` commands. High-frequency issue across platforms.
- **CI Pipeline Instability**: Two release failures in one day (#7549, #7555), a red core test suite blocking all PRs (#7537), and a main-branch E2E failure (#7516). These create significant developer friction and block merges.
- **Security: Child-Process Credential Exposure** (#6601, #7527): Shell subprocesses inheriting sensitive env vars like `QWEN_SERVER_TOKEN` and API keys. Multiple PRs now applying `sanitizeChildEnv()` to all spawn paths, but the footprint is large.
- **Cross-Platform Terminal Issues**: Windows Alt+V pasting (#6577), mobile Web Shell input (#5958), flickering in xterm/tmux (#6137), and memory access out-of-bounds errors on Linux (#6820). The terminal rendering layer remains a persistent pain point.
- **Time Zone Inconsistencies** (#6835): The `/insight` report mixes UTC and local time across its heatmap, streak, and active-hours components, producing wrong results for non-UTC users. Resolution blocked on a convention decision.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest – 2026-07-23

## Today's Highlights
The CodeWhale team is in the final stages of shipping **v0.9.1**, with the main integration PR (#4675) merged and numerous companion fixes landing (skill pack, theme, chrome, dependency patches). However, a **stop-ship launch crash** on macOS (#4716) and a **security gate audit** (#4713) are blocking the official tag. Several configuration and TUI display bugs were also reported today, signalling that the release surface still needs polishing.

## Releases
**No new versions published in the last 24 hours.** The last release remains v0.9.0; the v0.9.1 candidate is being dogfooded on commits like `0dfe9170a10e`.

## Hot Issues

1. **[#2870 – EPIC: staged command-boundary refactor](https://github.com/Hmbown/CodeWhale/issues/2870)**  
   *Open, 17 comments.* Tracks a major re-architecture of command ownership/routing, split into mergeable layers. Community contributor @aboimpinto is leading this effort – high impact for plugin developers.

2. **[#4227 – Help JayBeest map the CodeWhale tsunami](https://github.com/Hmbown/CodeWhale/issues/4227)**  
   *Open, 12 comments.* Proposes a skill/workflow to keep contributor environments synced with the fast-moving `main` (10+ PRs/day). Shows strong community self-organization.

3. **[#2889 – Work Agent rows: real sub-agent details](https://github.com/Hmbown/CodeWhale/issues/2889)**  
   *Closed, 8 comments.* Restored from a deleted issue; defines design for showing live sub-agent activity in the sidebar. Key UX improvement for multi-agent sessions.

4. **[#4085 – Cannot read/write under Dropbox on macOS](https://github.com/Hmbown/CodeWhale/issues/4085)**  
   *Open, 4 comments.* Files under `~/Library/CloudStorage/Dropbox/` are inaccessible due to File Provider framework restrictions. Not a sandbox issue – affects many macOS users.

5. **[#4684 – `danger-full-access` does not disable tools-layer boundary](https://github.com/Hmbown/CodeWhale/issues/4684)**  
   *Open, 2 comments.* Global skill access is broken because the tools layer still enforces workspace checks even when OS sandbox is disabled. Security/permission design gap.

6. **[#4685 – Installer overwrites PATH on Windows 10](https://github.com/Hmbown/CodeWhale/issues/4685)**  
   *Open, 1 comment.* `CodeWhaleSetup.exe` replaces the user PATH variable instead of appending, wiping existing entries. Critical Windows deployment bug.

7. **[#4683 – Wrong DeepSeek completions URL (flaky)](https://github.com/Hmbown/CodeWhale/issues/4683)**  
   *Open, 1 comment.* Intermittent network failure pointing to `https://api.deepseek.com/v1/chat/completions`. User reports flakiness after long conversations.

8. **[#4682 – Custom provider causes launch failure](https://github.com/Hmbown/CodeWhale/issues/4682)**  
   *Open, 1 comment.* Setting a custom provider name crashes CodeWhale on startup. Configuration edge case that blocks multi-provider workflows.

9. **[#4681 – `<turn_meta>` blocks displayed on session reopen](https://github.com/Hmbown/CodeWhale/issues/4681)**  
   *Open, 1 comment.* Metadata blocks that are hidden during live session reappear after closing and reopening the TUI. Persistence bug in transcript rendering.

10. **[#4716 – TUI exits immediately on fresh macOS terminal](https://github.com/Hmbown/CodeWhale/issues/4716)**  
    *Open, stop-ship.* `codew` returns `[Process completed]` instantly on Mac Studio. Blocks v0.9.1 from being usable on a clean terminal tab.

## Key PR Progress

1. **[#4722 – fix(tui): show complete edit previews in details](https://github.com/Hmbown/CodeWhale/pull/4722)**  
   *Open.* Keeps `edit_file` approval cards compact, renders full diff lazily in Alt+V details. Addresses TUI information density feedback.

2. **[#4679 – feat(skills): unified /skills manager](https://github.com/Hmbown/CodeWhale/pull/4679)**  
   *Closed, merged.* Delivers the single `/skills` surface for inventory, audit, install, remove, trust – a major v0.9.1 feature.

3. **[#4087 – refactor(hooks): split config and executor modules](https://github.com/Hmbown/CodeWhale/pull/4087)**  
   *Open.* Clean separation of hook definitions from runtime executor, improving code reviewability for the hooks subsystem.

4. **[#4714 – chore(deps): patch npm lockfiles for Dependabot alerts](https://github.com/Hmbown/CodeWhale/pull/4714)**  
   *Open.* Applies `npm audit fix` to resolve 17 open alerts (7 high, 10 moderate) across npm workspaces. Pre-release security housekeeping.

5. **[#4715 – chore(deps-dev): bump npm_and_yarn group](https://github.com/Hmbown/CodeWhale/pull/4715)**  
   *Open.* Updates brace-expansion, fast-uri, and linkify-it in the VS Code extension directory. Keeps dependencies current.

6. **[#4711 – fix(tui): focus v0.9.1 chrome on todos and agents](https://github.com/Hmbown/CodeWhale/pull/4711)**  
   *Closed, merged.* Replaces generic Work bar with resizable To-do + Sub-agent bar, makes dividers draggable, uses theme-native rails.

7. **[#4695 – feat(skills): default CodeWhale skill pack](https://github.com/Hmbown/CodeWhale/pull/4695)**  
   *Closed, merged.* Ships bundled v5 of end-user skills (interview, plan, debug, etc.) comparable to Kimi Code / Claude Code workflows.

8. **[#4696 – feat(tui): ship staged /uwu theme](https://github.com/Hmbown/CodeWhale/pull/4696)**  
   *Closed, merged.* Adds the playful `uwu` theme with soft-classic whale mark and color shimmer. Community-friendly addition.

9. **[#4694 – fix(kimi): fail closed on K3 model-ID cross-pairings](https://github.com/Hmbown/CodeWhale/pull/4694)**  
   *Closed, merged.* Treats base URL + model ID as a unique route and prevents invalid combinations (e.g., `kimi-k3` on Moonshot endpoint).

10. **[#4675 – Integrate CodeWhale v0.9.1 runtime and release surface](https://github.com/Hmbown/CodeWhale/pull/4675)**  
    *Closed, merged.* The main integration PR bringing together runtime simplification, empty-work fix, color grammar, and release polish. Foundation for the upcoming tag.

## Feature Request Trends

- **Unified skill management** – Users want a single `/skills` command to install, audit, and trust skills across global and project roots (addressed by #4679).
- **Better TUI information density** – Repeated hints (“Option+V to inspect”) and stacked reasoning states overwhelm the transcript; requests for configurable compactness (#4718, #4701).
- **Multi-provider polish** – Need for seamless provider setup, auto-switching transparency, and legacy DeepSeek-specific UI removal (#4717, #4720).
- **Custom provider support** – Users are adding providers like TelecomJS (#4370) and minimax (#4686), demanding proper catalog refresh and model listing.
- **Sandbox/permission clarity** – `danger-full-access` semantics are confusing; requests for consistent cross-boundary access (#4684) and clearer documentation.

## Developer Pain Points

- **Windows installer breaks PATH** (#4685) – wiping user PATH entries is a major UX regression.
- **macOS Dropbox access blocked** (#4085) – prevents working on synced projects; no workaround known.
- **Flaky deepseek.com endpoint** (#4683) – intermittent failures after long sessions, but likely a server-side issue.
- **Custom provider launch crash** (#4682) – zero-config fail is a hard blocker for polyglot setups.
- **Transcript corruption for large pastes** (#4719) – byte-level mangling breaks paths and lines, undermining trust in the TUI.
- **`<turn_meta>` leakage on session reopen** (#4681) – hidden metadata reappears, confusing users.
- **New macOS launch crash** (#4716) – completely halts adoption for anyone on a fresh Terminal.app tab.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/boom7sss/agents-radar).*