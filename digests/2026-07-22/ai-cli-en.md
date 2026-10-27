# AI CLI Tools Community Digest 2026-07-22

> Generated: 2026-07-22 03:20 UTC | Tools covered: 9

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

# Cross-Tool Comparison Report — 2026-07-22

## 1. Ecosystem Overview

The AI CLI tool ecosystem on July 22, 2026 shows a landscape in active maturation, with **reliability and security** emerging as the dominant cross-cutting concerns. While all tools continue shipping new features—emoji autocomplete (Claude Code), paginated thread history (OpenAI Codex), local model management (Pi), and autofix labeling (Qwen Code)—the community discourse is increasingly dominated by **regression bug clusters**, **MCP integration fragility**, and **platform-specific instability** (particularly Windows). A clear tension exists between rapid feature iteration and the foundational reliability demands of daily developer workflows. Notably, the ecosystem is converging on shared architectural patterns (tool-calling protocols, sub-agent orchestration, policy-aware HTTP clients) while diverging in their approach to model-specific execution paths and permission models.

---

## 2. Activity Comparison

| Tool | Issues Active (Recent 24h) | PRs in Progress | Release Status | Key Pain Point Density |
|---|---|---|---|---|
| **Claude Code** | High (50 updated, 10 selected) | 10 | **Shipped** v2.1.217 | Very high: MCP drops, Windows MSIX lock, session freezes |
| **OpenAI Codex** | High (10 selected) | 10 | **Shipped** v0.145.0 stable + alphas | Very high: Windows WMI storms, Git probe overhead |
| **Gemini CLI** | Moderate (10 selected) | 10 | **Shipped** v0.52.0-nightly (security fix) | Moderate-high: agent hangs, false success signals |
| **Copilot CLI** | Moderate (10 selected) | 1 (non-actionable) | **Shipped** v1.0.74-0 | Moderate: plan-mode regression, CAPI body limit, zombie processes |
| **Kimi Code** | Low (5 total active) | 1 | **None** today | Low: API schema strictness, k2.5 model regression |
| **OpenCode** | High (10 selected, 3 critical) | 10 | **None** today | Very high: paid-tier auth outage, streaming errors |
| **Pi** | High (10 selected) | 10 | **Shipped** v0.81.0, v0.81.1 | High: crash instability, SDK retry deadlocks |
| **Qwen Code** | High (10 selected, 5+ P1) | 10 | **Shipped** v0.20.1 | Very high: `enable_thinking` systemic bug, subagent mutation |
| **DeepSeek TUI** | Moderate (10 selected) | 10 | **None** today (v0.9.1 crunch) | Moderate: input lag, output truncation (both fixed) |

**Key observation:** Claude Code, OpenAI Codex, and Qwen Code exhibit the highest volume of **active high-severity bugs**. Kimi Code is notably quiet, likely reflecting a smaller user base or slower development cadence.

---

## 3. Shared Feature Directions

The following requirements appear across **three or more** tool communities, indicating genuine developer demand:

| Shared Need | Tools Affected | Specific Request |
|---|---|---|
| **MCP tool-call reliability** | Claude Code, Copilot CLI, Kimi Code, Pi, Qwen Code | Silent drops (#79992), tools not exposed (#78826), BigInt serialization (#4211), schema rejection (#2531), `enable_thinking` breaks internal tools (#7284) |
| **Windows platform parity** | Claude Code, OpenAI Codex, Qwen Code, Pi | MSIX update locks (#76357), WMI storms (#33776), SHA-256 verification fails (#7118), path-glob failures (#6817) |
| **Sub-agent / thread stability** | Gemini CLI, OpenAI Codex, Claude Code, Qwen Code | Hangs (#21409), false success (#22323), session freezes (#79921), model mutation (#7156), `spawn_agent` hang (#33777) |
| **Input/output UX refinement** | Claude Code, Copilot CLI, Kimi Code, DeepSeek TUI, Pi | Auto-scroll config (#25042), tmux rendering (#4212), numpad keys (#2529), Enter-key lag (#4605), output truncation (#4603) |
| **API schema / provider compatibility** | Kimi Code, Pi, Qwen Code, OpenAI Codex | Custom baseURL key loss (#21738), `enable_thinking` inconsistency (#7332), BigInt serialization (#4211), OAuth refresh failures (#4203) |
| **Permission system consistency** | Claude Code, Copilot CLI, Gemini CLI | Read-only bypass prompts (#62135), plan-mode shell blocking (#4188), subagent permissionless execution (#22093) |
| **Observability / debugging of tool execution** | Claude Code, OpenCode, Pi, Qwen Code | MCP state inspection (#78826), live tool progress (#38217), compaction telemetry (#6901), budget tracking (#7306) |

---

## 4. Differentiation Analysis

| Dimension | Claude Code | OpenAI Codex | Gemini CLI | Copilot CLI | Kimi Code | OpenCode | Pi | Qwen Code | DeepSeek TUI |
|---|---|---|---|---|---|---|---|---|---|
| **Primary focus area** | Plugin/system integration | Multi-modal (SSH, remote) | Sub-agent orchestration | GitHub workflow integration | MCP + Moonshot API | Multi-provider (Paid Go) | Local LLM management | Thinking models + internal tools | Free-form community TUI |
| **Distinctive technical approach** | Hookify plugin system, Twilight spec-first skills | Rust-based, paginated thread history, skill metadata scaling | AST-aware reads, zero-dependency sandboxing | Plan-mode, BYOK custom models | Model-specific execution paths (k2.5, k3) | V2 theme migration, Bun.serve on Windows | llama.cpp integration, AgentHarness abstraction | Autofix label-driven takeover, daemon channels | Runtime API dynamic provider picker, Gherkin E2E |
| **Target user** | Power users with complex MCP setups | Enterprise, remote/SHH workflows | Google ecosystem developers | GitHub-native developers | Moonshot/Kimi ecosystem | Subscription-tier users | Self-hosted/local LLM enthusiasts | Thinking-model first users | Linux/HarmonyOS tinkerers |
| **Community engagement style** | High issue volume, vocal QoL complaints | Structured PRs via automation bots | Security-focused, eval-driven | Release-driven, lower PR volume | Low volume, early-stage detection | Feature-driven, active contributor base | OAuth integration, extensibility APIs | P1 bug clusters, fast closures | High-velocity PRs, community “tsunami” management |
| **Windows maturity** | Poor (MSIX lock, full-screen scroll) | Very poor (WMI storms, Git probes) | Unclear (no Windows issues flagged) | Moderate (no Windows issues flagged) | Poor (numpad keys missing) | Moderate (Bun.serve fix, workspace rename bug) | Poor (find tool fails, external editor slow) | Poor (installer SHA-256, Docker sandbox) | Not addressed |

---

## 5. Community Momentum & Maturity

| Tool | Community Maturity | Iteration Velocity | Risk Profile |
|---|---|---|---|
| **Claude Code** | **Mature but strained** – high issue volume, long-standing bugs (#34255 since March) indicate maintenance debt | **High** – shipping v2.1.x with daily releases, 10+ PRs/day | **Elevated** – MCP reliability cratering, Windows regressions |
| **OpenAI Codex** | **Mature with automation** – heavy bot-driven PR process, structured releases | **High** – v0.145.0 stable + multiple alphas | **Elevated** – WMI storm cluster is a systemic Windows blocker |
| **Gemini CLI** | **Medium** – security-first approach, eval-driven development | **High** – nightly releases, rapid RCE patch turnaround | **Moderate** – agent reliability remains inconsistent |
| **Copilot CLI** | **Mature** – GitHub-integrated, slower PR activity but stable releases | **Low-medium** – one minor release today, minimal PR activity | **Low-moderate** – known regressions but no crisis-level bugs |
| **Kimi Code** | **Early** – low issue count, one small PR, no releases today | **Low** – appears to be in a slower development phase | **Low** – integration-scale problems, not widespread |
| **OpenCode** | **Growing** – high contributor activity, paid-tier subscriber base | **High** – 10+ PRs/day, rapid closure of long-standing bugs | **Elevated** – auth outage for paid users is a business-critical issue |
| **Pi** | **Medium** – Node.js ecosystem, active OAuth/feature development | **High** – two releases today (v0.81.0, v0.81.1), 10+ PRs | **Moderate** – crash instability after updates, but rapid patching |
| **Qwen Code** | **Medium** – structured P1/P2 hierarchy, fast closure on severe bugs | **High** – shipped v0.20.1, 10 PRs, aggressively closing P1s | **Elevated** – systemic `enable_thinking` bug affecting 3+ tools |
| **DeepSeek TUI** | **Medium-high** – community-driven, high PR throughput (10+/day) | **Very high** – v0.9.1 release crunch, daily merges | **Low** – most major bugs fixed same-day; minor regressions persist |

**Overall assessment:** The field splits into two tiers—**feature-rich but reliability-strained** (Claude Code, OpenAI Codex, Qwen Code, Pi) and **smaller but more focused** (Copilot CLI, Gemini CLI, DeepSeek TUI). Kimi Code appears to be the least mature in terms of community size and iteration cadence.

---

## 6. Trend Signals

### For AI Tool Developers

1. **MCP is the new HTTP – and it’s still fragile.** Every major tool is experiencing MCP integration pain: silent drops, schema mismatches, tool-not-exposed bugs, and protocol-level serialization failures. Developers should invest heavily in **MCP compliance testing** and **fallback behavior** before claiming deep integration.

2. **Windows remains the Achilles’ heel.** Across 5 of 9 tools, Windows users face disproportionately severe bugs (WMI storms, MSIX locks, path handling, keyboard input gaps). This is a **market opportunity** for any tool that gets Windows right, as developers in enterprise/Windows-dominated environments are underserved.

3. **Agent orchestration is converging on sub-agent patterns.** Gemini’s sub-agent architecture, OpenAI’s `spawn_agent`, Qwen’s background sub-agent lifecycle, and Claude’s remote control all point to a shared model: hierarchical agents with separate state, model, and permission profiles. Expect **standardization** around sub-agent lifecycle APIs in the next 6–12 months.

4. **Permission/approval systems are failing at scale.** Read-only commands still prompt, plan-mode blocks needed tools, and sub-agents run without permission. The current binary allow/deny model is insufficient for autonomous agents. **Policy-as-code** (e.g., Gemini’s workspace trust) is emerging as the solution.

5. **Model-specific execution paths are a maintenance trap.** Kimi Code’s k2.5 regression and Qwen Code’s `enable_thinking` bug both stem from hard-coded model-specific logic that diverges from the core execution path. The industry is moving toward **model-agnostic providers** with adaptive schema transformation.

### For Developers Evaluating Tools

6. **If you rely on MCP tools, monitor Claude Code, Copilot CLI, and Kimi Code closely.** All three have active MCP reliability issues that could disrupt workflows. Pi’s AgentHarness abstraction and Qwen Code’s daemon channel delivery may offer more robust patterns.

7. **Windows users should prioritize Copilot CLI or Gemini CLI** – both show minimal Windows-specific issues in this snapshot. Avoid OpenAI Codex until WMI storms are resolved.

8. **BigInt in MCP responses (#4211) is a “canary in the coal mine”** – as MCP tools are embedded in more languages and runtimes, serialization edge cases will multiply. Expect more type-system friction ahead.

9. **The silence of Kimi Code is a signal** – a community with only 5 active issues and no releases likely indicates either a stalled project or a closed-source shift. Proceed with caution if evaluating for production use.

10. **OpenCode’s paid-tier outage (#38216 cluster) is a cautionary tale** – subscription-based CLI tools must invest in authentication gateway redundancy. Outages affecting only paid subscribers erode trust faster than free-tier issues.

---

*Report generated from community digest data for 2026-07-22. All issue/PR references link to respective GitHub repositories.*

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
*Data from github.com/anthropics/skills | Snapshot: 2026-07-22*

---

## 1. Top Skills Ranking

### #1 — `run_eval.py` Overhaul (PR #1298)
**Skill:** Skill Creator tooling fix  
**Status:** Open  
**Discussion:** Most-engaged PR in the repository. Addresses a systemic problem where `run_eval.py` reports 0% recall for every skill description (#556, 10+ independent reproductions). Fixes include: installing eval artifacts as real skills, Windows stream reading, trigger detection for non-slash-command skills, and parallel worker improvements.  
**Significance:** The skill-creator optimization loop is currently optimizing against noise—this PR is critical for restoring trust in the evaluation pipeline.  
[PR #1298](https://github.com/anthropics/skills/pull/1298)

### #2 — Document Typography (PR #514)
**Skill:** `document-typography` — orphan/widow control, numbering alignment  
**Status:** Open  
**Discussion:** Proposes a skill preventing common typographic defects in AI-generated documents (orphan word wrap, widow paragraphs, numbering misalignment). Community interest stems from its universal applicability—these issues affect every document Claude generates.  
[PR #514](https://github.com/anthropics/skills/pull/514)

### #3 — PDF Case-Sensitivity Fix (PR #538)
**Skill:** Infrastructure fix for `skills/pdf`  
**Status:** Open  
**Discussion:** Corrects 8 case-sensitivity mismatches between `SKILL.md` references and actual filenames (`REFERENCE.md` → `reference.md`, `FORMS.md` → `forms.md`). Blocks usage on case-sensitive filesystems (Linux, macOS). Simple in scope but high-impact for cross-platform reliability.  
[PR #538](https://github.com/anthropics/skills/pull/538)

### #4 — ODT Skill (PR #486)
**Skill:** `odt` — OpenDocument text creation, template filling, ODT→HTML conversion  
**Status:** Open  
**Discussion:** Adds support for LibreOffice/OpenOffice formats (.odt, .ods). Triggers on "ODT," "ODS," "OpenDocument," "LibreOffice document." Addresses a significant gap for enterprise users in government and regulated industries where ODF is mandated.  
[PR #486](https://github.com/anthropics/skills/pull/486)

### #5 — Frontend Design Clarity (PR #210)
**Skill:** `frontend-design` — revised for actionability  
**Status:** Open  
**Discussion:** Rewrites the frontend-design skill to ensure every instruction is executable within a single conversation. Goals: specific guidance to steer Claude behavior without over-constraining creativity. Community feedback focused on making design skills more prescriptive rather than educational.  
[PR #210](https://github.com/anthropics/skills/pull/210)

### #6 — Quality & Security Analyzer Meta-Skills (PR #83)
**Skills:** `skill-quality-analyzer`, `skill-security-analyzer`  
**Status:** Open  
**Discussion:** Adds two meta-skills to the example-skills marketplace. Quality analyzer evaluates across five dimensions (structure, documentation, examples, resource management, clarity). Security analyzer audits for injection, path traversal, credential exposure, and sandbox escape patterns. Represents community interest in self-healing skill quality.  
[PR #83](https://github.com/anthropics/skills/pull/83)

### #7 — DOCX Tracked Changes ID Collision (PR #541)
**Skill:** Fix for `docx` skill  
**Status:** Open  
**Discussion:** Fixes document corruption when DOCX skill adds tracked changes to documents with existing bookmarks. Root cause: `w:id` is a shared ID space across bookmarks, tracked changes, comments, and move ranges. Skill used hardcoded low IDs (1, 2, 3) that collide with existing IDs in user documents.  
[PR #541](https://github.com/anthropics/skills/pull/541)

---

## 2. Community Demand Trends

### Critical Bug: Skill Creator Recall=0% Loop (Issue #556, #1169, #1061)
**12+ comments, 7 upvotes**  
The dominant community pain point. `run_eval.py` returns 0% recall on every iteration, making the description-optimization loop (`run_loop.py`, `improve_description.py`) functionally broken. Queries that are literal slash-command invocations also fail to trigger. Multiple contributors have independently reproduced this with different skills and platforms.  
**Demand signal:** Skill authoring toolchain reliability is the #1 blocker for the community.  
[Issue #556](https://github.com/anthropics/skills/issues/556)

### Trust Boundary Abuse (Issue #492)
**43 comments, 2 upvotes**  
Community skills distributed under the `anthropic/` namespace impersonate official Anthropic skills. Creates a trust boundary vulnerability: users may grant elevated permissions to community skills they believe are official. Long-running discussion about namespace enforcement, verification badges, and sandboxing.  
**Demand signal:** Security and provenance are emerging as top-tier community concerns.  
[Issue #492](https://github.com/anthropics/skills/issues/492)

### Org-Wide Skill Sharing (Issue #228)
**14 comments, 7 upvotes**  
Users want a shared skill library or direct sharing links rather than manual .skill file distribution via Slack/Teams. Currently requires navigating Settings > Capabilities to upload.  
**Demand signal:** Enterprise adoption hinges on skill distribution infrastructure.  
[Issue #228](https://github.com/anthropics/skills/issues/228)

### Duplicate Skills from Plugin Overlap (Issue #189)
**6 comments, 9 upvotes**  
Installing both `document-skills` and `example-skills` plugins from `anthropic-agent-skills` yields identical skills, cluttering the context window. README claims distinct purposes but content is identical.  
**Demand signal:** Plugin library organization and deduplication need attention.  
[Issue #189](https://github.com/anthropics/skills/issues/189)

### Windows Compatibility (Issue #1061)
**3 comments, 2 upvotes**  
Three distinct blockers on native Windows Python 3.14: `PATHEXT` not honored for `claude.cmd`, `cp1252` encoding failures, `select` on pipes. Skill-creator scripts are effectively unusable on Windows.  
**Demand signal:** Cross-platform support is expected, not optional.  
[Issue #1061](https://github.com/anthropics/skills/issues/1061)

---

## 3. High-Potential Pending Skills

These PRs have active discussion and appear close to landing:

| Skill | PR | Summary | Potential |
|-------|----|---------|-----------|
| **Document Typography** | [#514](https://github.com/anthropics/skills/pull/514) | Orphan/widow control, numbering alignment | High—universal need, no dependencies |
| **ODT / OpenDocument** | [#486](https://github.com/anthropics/skills/pull/486) | Create, fill, read, convert .odt/.ods | High—government/regulated industry requirement |
| **Pyxel Game Dev** | [#525](https://github.com/anthropics/skills/pull/525) | Retro game engine MCP integration | Medium—niche but from library author (kitao) |
| **Testing Patterns** | [#723](https://github.com/anthropics/skills/pull/723) | Unit, React, integration, E2E patterns | High—fills a gap in developer workflow |
| **Self-Audit** | [#1367](https://github.com/anthropics/skills/pull/1367) | Mechanical file verification + 4-dimension reasoning audit | Medium—universal but overlaps with quality-analyzer |
| **Color Expert** | [#1302](https://github.com/anthropics/skills/pull/1302) | Color naming systems, spaces, theory | Medium—design-adjacent, well-scoped |
| **SAP-RPT-1-OSS Predictor** | [#181](https://github.com/anthropics/skills/pull/181) | Tabular foundation model for SAP data | Low—enterprise niche but established library |

---

## 4. Skills Ecosystem Insight

**The community's most concentrated demand is for a reliable, cross-platform skill development toolchain (fixing the broken evaluation loop) and for trust infrastructure (namespace security and organizational sharing), rather than for new skill content itself**—contributors are blocked on tooling before they can effectively build or distribute skills.

---

# Claude Code Community Digest — 2026-07-22

**Key releases, top issues, and PRs shaping the developer experience.**

---

## Today's Highlights

Claude Code v2.1.217 ships with emoji autocomplete and disk‑full warnings, but the community’s attention is focused on a cluster of MCP reliability bugs—particularly silent tool‑call drops on macOS and a new filesystem MCP regression that started overnight. A long‑standing remote‑control reconnection issue (#34255) continues to dominate with 57 comments and 99 👍, while the newly opened #79992 (filesystem MCP calls silently swallowed) is already generating critical discussion.

---

## Releases

**v2.1.217** was released in the last 24 hours. Changes:

- **Emoji shortcode autocomplete** in the prompt input — type `:heart:` to insert ❤️, or `:hea` for suggestions. Disable with the new `emojiCompletionEnabled` setting.
- **Transcript write warnings** — the UI now alerts when transcript writes are failing (e.g. disk full) or when session saving is off due to an inheritance issue.

[Full release notes](https://github.com/anthropics/claude-code/releases/tag/v2.1.217) | [Repo](https://github.com/anthropics/claude-code)

---

## Hot Issues (10 selected from 50 updated in the last 24h)

### 1. Remote Control: automatic reconnection fails silently
**#34255** – [BUG] Remote Control: automatic reconnection doesn't work — connection drops silently with no recovery  
- Author: BluCreator | 57 comments | 99 👍  
- Long‑running (since March), unresolved. The highest‑voted open bug.  
- [GitHub](https://github.com/anthropics/claude-code/issues/34255)

### 2. Feature request: configurable auto‑scroll
**#25042** – Feature Request: Option to control auto‑scroll behavior when submitting questions  
- Author: efreakure | 12 comments | 31 👍  
- Users want to keep the viewport fixed while the model responds, not forced to the bottom.  
- [GitHub](https://github.com/anthropics/claude-code/issues/25042)

### 3. Model: Claude writes verbose code comments despite instructions
**#65961** – [MODEL] Claude verbose code comments by default — ignores instructions to stop  
- Author: bhuvarloka | 7 comments | 33 👍  
- A common complaint about model behaviour; affects developer trust in generated code.  
- [GitHub](https://github.com/anthropics/claude-code/issues/65961)

### 4. Fullscreen render mode: scrolling broken on Windows
**#72215** – [BUG] Fullscreen render mode: no scrollbar and scrolling fully broken (arrows/PageUp/PageDown do nothing) once output exceeds one screen  
- Author: nirupambiswas | 6 comments | 4 👍  
- Blocks users who rely on fullscreen mode in Windows terminals.  
- [GitHub](https://github.com/anthropics/claude-code/issues/72215)

### 5. Windows MSIX update fails every time
**#76357** – [BUG] Windows (MSIX): update fails with 'Another program is currently using this file' — app unlaunchable until reboot  
- Author: Mohan9999 | 6 comments | 4 👍  
- A painful P0 for Windows users; forces a full reboot on every update cycle.  
- [GitHub](https://github.com/anthropics/claude-code/issues/76357)

### 6. MCP server connects but tools never exposed to model
**#78826** – MCP server connects successfully but its tools are never exposed to the model  
- Author: CEO-Rimmer | 5 comments | 0 👍 (new)  
- Remote HTTP MCP (Gmail) completes OAuth and `tools/list` but no tools reach the model.  
- [GitHub](https://github.com/anthropics/claude-code/issues/78826)

### 7. Filesystem MCP tool calls silently dropped on macOS
**#79992** – [BUG] macOS: filesystem‑class MCP tool calls silently dropped between approval gate and local server dispatch  
- Author: tiger-media | 4 comments | 0 👍 (opened today)  
- Starts overnight 2026‑07‑21→22. Renderer logs approval, server never receives `tools/call`. Distinct from #78826.  
- [GitHub](https://github.com/anthropics/claude-code/issues/79992)

### 8. Sessions freeze locally until another session receives input
**#79921** – [BUG] Claude Code sessions freeze locally until another session receives input — Desktop app & VS Code only (not web)  
- Author: degenfiji | 3 comments | 0 👍 (new)  
- Desktop‑only deadlock; may relate to input‑handling or IPC stalls.  
- [GitHub](https://github.com/anthropics/claude-code/issues/79921)

### 9. Bash read‑only tools still prompt despite allow rules
**#62135** – Bash read‑only commands (curl, gh) still prompt for permission despite allow rules  
- Author: devinamar | 2 comments | 1 👍  
- Permission system ignores `read‑only` classification; users tired of unnecessary prompts.  
- [GitHub](https://github.com/anthropics/claude-code/issues/62135)

### 10. Fable 5 model unavailable in CLI despite Max subscription
**#79916** – [Bug] Fable 5 model unavailable in Claude Code CLI despite active Claude Max subscription  
- Author: Mateus-Larini-PC | 2 comments | 0 👍 (new)  
- Works in Desktop but not CLI; credit wall appears incorrectly.  
- [GitHub](https://github.com/anthropics/claude-code/issues/79916)

---

## Key PR Progress (10 selected from 11 updated)

### 1. Twilight plugin: spec‑first design/implement skills
**#80008** – Add twilight plugin: spec‑first design/implement skills with a durable focus stack  
- Author: jklappenbach | Demo strategy for better Claude function calls. Significant modification required before merge.  
- [GitHub](https://github.com/anthropics/claude-code/pull/80008)

### 2. AWS gateway deployment assets (closed)
**#79898** – Add Claude apps gateway on AWS example deployment assets  
- Author: roy-ant (closed) | Reference Terraform + Bedrock assets for running the apps gateway on AWS.  
- [GitHub](https://github.com/anthropics/claude-code/pull/79898)

### 3. Hookify: make entrypoints runnable without CLAUDE_PLUGIN_ROOT
**#79889** – fix(hookify): make hook entrypoints runnable without CLAUDE_PLUGIN_ROOT  
- Author: adelaidasofia | Fixes silent skip of `sys.path` setup when env var absent.  
- [GitHub](https://github.com/anthropics/claude-code/pull/79889)

### 4. Hookify: fix prompt rules never firing
**#79873** – fix(hookify): event: prompt rules never fire (payload key is `prompt`)  
- Author: adelaidasofia | `UserPromptSubmit` rules were reading wrong key (`user_prompt` vs `prompt`).  
- [GitHub](https://github.com/anthropics/claude-code/pull/79873)

### 5. GCP gateway: optional internal ALB + PG16 edition fix
**#78532** – gateway/gcp: optional internal ALB in the Terraform example + PG16 Cloud SQL edition fix  
- Author: gabrielparanthoen-cmd | Prevents `terraform apply` from failing on shared‑core tiers with PG16.  
- [GitHub](https://github.com/anthropics/claude-code/pull/78532)

### 6. Fix hookify imports independent of plugin directory name
**#79647** – fix(hookify): resolve imports independent of the plugin directory name  
- Author: rahulrshetty45 | Fixes #69665 – imports broke if plugin folder wasn’t literally named `hookify`.  
- [GitHub](https://github.com/anthropics/claude-code/pull/79647)

### 7. Fix hookify UTF‑8 file reading on Windows
**#79645** – fix(hookify): read rule and transcript files as UTF‑8  
- Author: rahulrshetty45 | Addresses #77270 – platform default (cp1252) failed on emoji/arrows in shipped rule files.  
- [GitHub](https://github.com/anthropics/claude-code/pull/79645)

### 8. Quote $CLAUDE_PLUGIN_ROOT in hook commands
**#79644** – fix: quote ${CLAUDE_PLUGIN_ROOT} in plugin hook commands  
- Author: rahulrshetty45 | Fixes #78490 – spaces in macOS `Application Support` path caused shell word‑splitting.  
- [GitHub](https://github.com/anthropics/claude-code/pull/79644)

### 9. Docs: align /commit-push-pr description with behavior
**#79643** – docs(commit-commands): align /commit-push-pr description with behavior  
- Author: rahulrshetty45 | Fixes #79144 – docs now correctly state that PR description comes from staged/unstaged diff, not branch history.  
- [GitHub](https://github.com/anthropics/claude-code/pull/79643)

### 10. Docs: correct marketplace name to claude-code-plugins
**#79642** – docs(plugin-dev): correct marketplace name to claude-code-plugins  
- Author: rahulrshetty45 | Fixes #70064 – documented wrong package name for plugin install.  
- [GitHub](https://github.com/anthropics/claude-code/pull/79642)

---

## Feature Request Trends

From the full issue set, the most‑requested feature directions are:

1. **Customizable UI behavior** – Controlling auto‑scroll on submit (#25042), split‑pane rendering (#76231), and scrollbar/render stability in full‑screen mode (#72215). Users want the terminal UI to behave like a standard text editor.
2. **Cross‑session linking** – Request to link Claude Code sessions with claude.ai chat sessions (#76440). Developers want continuity of context between CLI and web chat.
3. **Better permission system** – Allowing read‑only commands to bypass prompts (#62135), and making `permissions.allow` patterns reliable across all platforms (#78774).
4. **Model selection / subscription parity** – Multiple reports that Fable 5 is unavailable in CLI while working in Desktop (#79916, #79687), plus confusion about Max tier limits (#79773). Clearer billing and model routing is needed.
5. **Observability of MCP state** – Users want to know whether an MCP server's tools are actually registered (#78826) and whether tool calls reached the server (#79992).

---

## Developer Pain Points

Multiple high‑frequency frustrations emerge from this week’s data:

- **MCP tool‑call reliability is cratering** – At least three distinct bugs (#78826, #79992, #79971) where MCP tools never reach the server or are silently dropped. This is the single biggest concern among power users.
- **Permission prompts are inconsistent** – Even with exact `permissions.allow` rules, read‑only commands still trigger prompts (#62135, #78774). Breaks automation workflows.
- **UI input bugs are spreading** – `AskUserQuestion` becomes unresponsive in side‑by‑side layout (#70577, #79325, #78306) and in full‑screen mode (#72215). Arrow keys, PageUp/Down, and mouse clicks fail.
- **Windows update process is broken** – MSIX updates lock the file (#76357) requiring a reboot every time. Combined with the sandbox regression (#79606) that breaks Bash on root installs, Windows users are hit hard.
- **Session freezes on Desktop/VS Code** – Sessions stall until another session receives input (#79921), and background daemons can exhaust file descriptors leading to kernel panics (#79920) on macOS.
- **Model quality complaints persist** – Verbose code comments (#65961) and perceived regression in Opus (#70267) erode developer trust. Combined with Fable 5 access issues, the model experience is a recurring pain point.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-07-22

## Today’s Highlights
A new stable release (v0.145.0) landed with experimental paginated thread history and expanded import capabilities. The community continues to be heavily impacted by Windows performance regressions, with multiple reports of process-spawning storms and WMI exhaustion. Several important PRs today focused on hardening HTTP client infrastructure and auth routing.

## Releases
- **rust‑v0.145.0** (stable) – **New Features**: Added experimental paginated thread history with efficient resume, search, persisted names, sub‑agent support, and memories. Expanded `/import` to migrate Cursor and Claude Code settings, MCP servers, plugins, sessions, commands, and project configurations. ([Release notes](https://github.com/openai/codex/releases/tag/rust-v0.145.0))
- **rust‑v0.145.0‑alpha.30** and **rust‑v0.145.0‑alpha.29** – Placeholder releases with no additional notes.

## Hot Issues (10 noteworthy)
1. **#19504 – Add full RTL text direction support for Arabic & Hebrew**  
   *18 comments, 18 👍* – The most upvoted open enhancement. Arabic/Hebrew/Persian text renders incorrectly in both Codex and Chat panels. Users request a native setting to force message direction per language.  
   [Issue #19504](https://github.com/openai/codex/issues/19504)

2. **#33776 – Windows: ChatGPT.exe spawns hundreds of taskkill.exe/conhost.exe, causing WMI storms**  
   *17 comments, 13 👍* – The flagship Windows performance bug. A runaway process‑cleanup loop exhausts WMI provider quota and degrades DWM. Multiple users report identical symptoms.  
   [Issue #33776](https://github.com/openai/codex/issues/33776)

3. **#34260 – Windows: unbounded taskkill.exe/conhost.exe cleanup storm**  
   *15 comments, 8 👍* – A separate but related report describing the same unbounded loop, with process counts in the hundreds.  
   [Issue #34260](https://github.com/openai/codex/issues/34260)

4. **#28078 – Xcode 27 beta: sign‑in fails for ChatGPT Pro accounts requiring email OTP**  
   *13 comments, 11 👍* – ChatGPT Pro users cannot authenticate in the Xcode extension when an OTP is needed, while ChatGPT Go accounts work.  
   [Issue #28078](https://github.com/openai/codex/issues/28078)

5. **#29499 – Windows: high CPU in WMI Provider Host after startup**  
   *12 comments, 14 👍* – Persistent high CPU usage in `WmiPrvSE.exe` triggered by the Codex app. Likely related to the taskkill/conhost storm.  
   [Issue #29499](https://github.com/openai/codex/issues/29499)

6. **#34014 – Standalone Windows app triggers WMI Provider Host (90‑100% CPU)**  
   *9 comments, 7 👍* – Same symptom, but only in the standalone app; the VS Code extension works fine.  
   [Issue #34014](https://github.com/openai/codex/issues/34014)

7. **#21563 – RTL issue: Persian/Farsi messages display incorrectly**  
   *8 comments, 8 👍* – Another RTL report focusing on Persian text, punctuation, and inline code direction.  
   [Issue #21563](https://github.com/openai/codex/issues/21563)

8. **#33778 – Windows: hundreds of taskkill.exe/conhost.exe during local tool execution**  
   *7 comments, 3 👍* – Similar scenario during local shell/tool calls, including MCP plugins.  
   [Issue #33778](https://github.com/openai/codex/issues/33778)

9. **#33777 – MultiAgentV2 spawn_agent can hang indefinitely while evicting a terminal resident thread**  
   *4 comments, 1 👍* – A non‑Windows bug: sub‑agent spawning hangs when trying to evict a terminal thread, blocking further actions.  
   [Issue #33777](https://github.com/openai/codex/issues/33777)

10. **#34473 – Windows: unresolvable git root causes unbounded retry loop saturating the machine**  
    *3 comments, 0 👍* – Git‑root resolution retries without backoff, hitting 60‑second timeouts on ~84% of calls.  
    [Issue #34473](https://github.com/openai/codex/issues/34473)

## Key PR Progress (10 important)
All PRs below were created/updated in the last 24 hours. Most are from the `copyberry[bot]` automation.

1. **#34669 – Expand codex-http-client usage guidance**  
   Documents `codex-http-client` as the owner of direct `reqwest` integration and shared outbound request policies, including route‑aware pooling.  
   [PR #34669](https://github.com/openai/codex/pull/34669)

2. **#34664 – Preserve approvals reviewer when forking threads**  
   Fixes a regression where forking a persisted thread could lose the approvals reviewer and fall back to configuration defaults.  
   [PR #34664](https://github.com/openai/codex/pull/34664)

3. **#34655 – Honor configured proxy routes for auth refreshes**  
   Ensures token refresh requests follow the same routing policy (including system proxy) as other auth traffic.  
   [PR #34655](https://github.com/openai/codex/pull/34655)

4. **#34654 – Render turn diffs for foreign environment paths**  
   Preserves `PathUri` values through patch deltas and display‑root discovery, allowing diff rendering for remote environments (e.g., SSH).  
   [PR #34654](https://github.com/openai/codex/pull/34654)

5. **#34651 – Migrate core test support to the shared HTTP client**  
   Removes the test‑support crate’s direct `reqwest` dependency by using `HttpClientFactory`, progressing the HTTP client consolidation.  
   [PR #34651](https://github.com/openai/codex/pull/34651)

6. **#34644 – Verify Git plugin SHA checkouts**  
   Prevents Git from interpreting a requested commit SHA as a branch name (when the remote default branch has the same name). Resolves `HEAD` after checkout to verify the correct commit.  
   [PR #34644](https://github.com/openai/codex/pull/34644)

7. **#34641 – Harden managed proxy setup for sandboxed executions**  
   Makes the generated Linux proxy socket directory readable inside restricted `bubblewrap` sandboxes and routes `WS_PROXY`/`WSS_PROXY` through the managed proxy bridge.  
   [PR #34641](https://github.com/openai/codex/pull/34641)

8. **#34636 – Keep the TUI open when starting a turn fails**  
   Previously a `turn/start` rejection would exit the TUI; now it displays the failure in the transcript and resumes input handling.  
   [PR #34636](https://github.com/openai/codex/pull/34636)

9. **#34630 – Add a policy-aware HTTP client builder**  
   Introduces `HttpClientBuilder` for configuring default headers, redirects, Cloudflare cookies, and request diagnostics without exposing the underlying transport.  
   [PR #34630](https://github.com/openai/codex/pull/34630)

10. **#34626 – Scale skill metadata budgets with model context windows**  
    Replaces a fixed character limit with a dynamic budget of 2% of the resolved model context window (capped at 4,000 tokens).  
    [PR #34626](https://github.com/openai/codex/issues/34626)

## Feature Request Trends
- **RTL text direction support** – The single most‑requested feature: users of Arabic, Hebrew, Persian (Farsi) consistently report broken rendering. Two related issues (#19504, #21563) have accumulated 26 😸 combined and 26 comments. The community is looking for a native per‑language direction toggle.
- **Open‑sourcing the desktop app** – Issue #10733 (14 👍, now closed) reflects ongoing desire for the full Codex app to be open source, similar to the CLI and VS Code extension.
- **Computer Use plugin reliability** – Issue #26887 reports that all action tools fail with “not active” due to a session model conflict. Users need more robust integration with MCP‑based plugins.

## Developer Pain Points
The overwhelming cluster of pain points is **Windows performance and process management**:
- **taskkill.exe/conhost.exe storms** – At least 6 separate issues (#33776, #34260, #33778, #34025, #34001, #34302) describe unbounded loops that spawn hundreds of process‑cleanup tasks, exhausting WMI and freezing the system. This is the highest‑impact bug family.
- **Git probe overhead** – Multiple reports (#29110, #26812, #16786, #33450, #32113, #31618, #34473) detail the Codex app repeatedly spawning `git.exe` (often with `ls-files` or `write-tree`) even on idle or non‑Git workspaces, causing high CPU, nonpaged pool growth, and Defender activity.
- **WMI Provider Host CPU saturation** – Issues #29499, #34014, and others link the process storms to `WmiPrvSE.exe` consuming 90–100% CPU.
- **Authentication friction** – Xcode extension sign‑in fails for Pro accounts requiring OTP (#28078). Also, SSH setup for Windows Remote Desktop is complex and fragile (#22965).
- **Sub‑agent and thread handling** – Hang in `spawn_agent` (#33777) and thread‑state loss when forking (#34664) indicate lingering concurrency and state‑management bugs.

These issues are under active discussion (many with 10+ comments and high upvote counts) and should be prioritized for the next patch releases.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

Here is the **Gemini CLI Community Digest** for **2026-07-22**, generated from the latest GitHub data.

---

## Gemini CLI Community Digest – 2026-07-22

### 🔥 Today’s Highlights
A critical **RCE vulnerability** in the A2A server was patched (PR #28470), and a new nightly release (v0.52.0) ships the fix. On the issue tracker, agent reliability remains the top concern, with a long-running hang bug (#21409) and a subagent recovery misreporting success (#22323) both seeing renewed activity. The community also continues to push for **AST-aware tooling** and **better subagent orchestration** as the most-requested feature directions.

---

### 🚀 Releases
**[v0.52.0-nightly.20260722.gc776c665b](https://github.com/google-gemini/gemini-cli/releases/tag/v0.52.0-nightly.20260722.gc776c665b)**  
One change:  
- **Security fix** for `a2a-server`: enforces workspace trust and task isolation to prevent **zero-click RCE** (PR #28470 by @luisfelipe-alt).

---

### 🔥 Hot Issues (Top 10 Noteworthy)

1. **[#22323](https://github.com/google-gemini/gemini-cli/issues/22323) – Subagent recovery after MAX_TURNS reported as success**  
   `codebase_investigator` marks itself as `GOAL` success even when it hit the turn limit before doing any work. **12 comments**, still open. Community frustrated by false success signals.

2. **[#21409](https://github.com/google-gemini/gemini-cli/issues/21409) – Generalist agent hangs forever**  
   Simple folder creation causes infinite hangs. Workaround: disabling sub-agents. **8 comments, 8 👍** – long-standing P1, still retesting.

3. **[#19873](https://github.com/google-gemini/gemini-cli/issues/19873) – Leverage model’s bash affinity via zero-dependency OS sandboxing**  
   Proposal to let Gemini 3 use native POSIX tools with secure isolation. **8 comments** – a major UX and security enhancement direction.

4. **[#24353](https://github.com/google-gemini/gemini-cli/issues/24353) – Robust component-level evaluations**  
   Epic to expand behavioral evals from 76 tests to full coverage. **7 comments** – critical for preventing regressions.

5. **[#22745](https://github.com/google-gemini/gemini-cli/issues/22745) – Assess AST-aware file reads, search, and mapping**  
   Investigates using AST to reduce tokens and improve tool-call precision. **7 comments, 1 👍** – highly desired for large codebases.

6. **[#21968](https://github.com/google-gemini/gemini-cli/issues/21968) – Gemini does not use skills and sub-agents enough**  
   Custom skills (e.g., gradle, git) are ignored even when relevant. **6 comments** – community feels the orchestration should be smarter.

7. **[#26522](https://github.com/google-gemini/gemini-cli/issues/26522) – Auto Memory retries low-signal sessions indefinitely**  
   Sessions that are skipped remain unprocessed, causing repeated re-scans. **5 comments** – memory system noise.

8. **[#25166](https://github.com/google-gemini/gemini-cli/issues/25166) – Shell command gets stuck with “Waiting input” after completion**  
   Simple commands hang indefinitely. **4 comments, 3 👍** – terminal integration reliability issue.

9. **[#21983](https://github.com/google-gemini/gemini-cli/issues/21983) – Browser subagent fails on Wayland**  
   Termination Reason: `GOAL` but actually crashes. **4 comments, 1 👍** – Linux desktop users affected.

10. **[#22232](https://github.com/google-gemini/gemini-cli/issues/22232) – Browser agent: automatic session takeover and lock recovery**  
    Fail-fast on locked profiles is too aggressive; persistent sessions often get stuck. **4 comments** – enhancement request.

---

### 🔧 Key PR Progress (Top 10)

1. **[#28470](https://github.com/google-gemini/gemini-cli/pull/28470) – Fix A2A server RCE (merged)**  
   Refactored environment isolation and startup sequence to prevent zero-click code execution in untrusted workspaces. **Size: XL**.

2. **[#28403](https://github.com/google-gemini/gemini-cli/pull/28403) – Block `$VAR`/`${VAR}` variable expansion bypass**  
   Security hardening of `detectBashSubstitution()` and workflow definition. Addresses GHSA-wpqr-6v78-jr5g. **Size: M/L**.

3. **[#28401](https://github.com/google-gemini/gemini-cli/pull/28401) – Bound shell command output sent to model**  
   Prevents context blow-up from verbose commands (e.g., `find /`, large logs). Saves tokens and improves response quality. **Size: M**.

4. **[#28472](https://github.com/google-gemini/gemini-cli/pull/28472) – Fix cached credentials fallback regression**  
   Restores `GOOGLE_APPLICATION_CREDENTIALS` fallback when cached tokens fail, fixing “Agent process exited with code 41” in VS Code. **Size: M**.

5. **[#28469](https://github.com/google-gemini/gemini-cli/pull/28469) – Rotate session ID on model fallback**  
   Prevents “Please submit a new query” errors when falling back to `gemini-2.5-flash` in stateful backend. **Size: M**.

6. **[#28474](https://github.com/google-gemini/gemini-cli/pull/28474) – Add skill name dimension to tool call telemetry**  
   Improves observability of which skill is being invoked. P3, enterprise-oriented. **Size: M**.

7. **[#28411](https://github.com/google-gemini/gemini-cli/pull/28411) – Post explanatory comment before auto-closing issues**  
   Caretaker triage now leaves a clear reason and reopen path. **Size: M**.

8. **[#28305](https://github.com/google-gemini/gemini-cli/pull/28305) – Eval tool call formatter + failure summaries**  
   When an eval fails, prints a compact timeline of tool calls with error details inside the console. **Size: L**.

9. **[#28169](https://github.com/google-gemini/gemini-cli/pull/28169) – Eval coverage report command**  
   New `npm run eval:coverage` command cross-references eval inventory with tool registry. **Size: L**.

10. **[#28433](https://github.com/google-gemini/gemini-cli/pull/28433) – PR generator orchestrator state machine**  
    Implements iterative AI coding loop with Firestore concurrency locking + container worker entrypoint – part of the SSR pipeline project. **Size: L/XL**.

---

### 📈 Feature Request Trends

- **AST-aware tooling** – Multiple issues (#22745, #22746, #19873) call for parsing code structure (AST) to enable precise method reads, navigation, and codebase mapping. This would reduce token waste and misaligned tool calls.
- **Agent self-awareness** – Issues like #21432 and #22598 ask the CLI to understand its own flags, hotkeys, and subagent trajectories, allowing the agent to serve as its own help system and share subagent traces via `/chat share`.
- **Zero-dependency OS sandboxing** – #19873 proposes a lightweight sandbox for native bash/POSIX tool execution without requiring containers, giving the model its preferred environment safely.
- **Destructive behavior prevention** – #22672 requests guards against risky commands (`git reset --force`, dangerous DB operations) when safer alternatives exist.
- **Browser agent resilience** – #22232 and #22267 highlight needs for automatic session takeover, lock recovery, and proper `settings.json` overrides for the browser subagent.

---

### 🐛 Developer Pain Points

| Pain Point | Related Issues |
|---|---|
| **Agents hanging indefinitely** | #21409 (generalist), #25166 (shell waits for input) |
| **Subagent reliability** | #22323 (false success), #21983 (Wayland crash), #22093 (subagents running without permission) |
| **Memory system bugs** | #26522 (retry loops), #26523 (quarantine invalid patches), #26525 (logging secrets) |
| **Tool scaling limits** | #24246 (400 error with >128 tools), #23571 (tmp script clutter) |
| **Configuration ignored** | #22267 (browser agent ignores settings), #20079 (symlinks not recognized as agents) |
| **Skill underutilization** | #21968 (Gemini doesn’t use custom skills/agents autonomously) |

---

*Stay tuned for tomorrow’s digest. Have feedback? Reach out on the [Gemini CLI Discord](https://discord.gg/gemini-cli).*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-07-22

## Today’s Highlights
A minor release (v1.0.74-0) landed today, bringing `/model plan` for in-line model switching during planning mode and improved resume-search matching. However, the community continues to report several critical regressions — especially around plan-mode blocking shell commands (#4188) and a persistent 5 MB CAPI body limit bug (#4183) that auto-compaction doesn’t fix. Meanwhile, long-standing requests for full MCP resource support (#1518) and remote OAuth improvements (#1305) remain hot topics.

## Releases
- **v1.0.74-0** — [View release](https://github.com/github/copilot-cli/releases/tag/v1.0.74-0)
  - **Added:** New `/model plan` (or `/model --plan`) subcommand to pick a model while in plan mode. Pass a model ID, `off` to clear, or no ID to open the picker. Reverts to the session model when leaving plan mode.
  - **Improved:** Resume search now matches session titles even when whitespace differs.

## Hot Issues (10 noteworthy)
1. **[#2288] Regression: plan-mode now blocks shell commands**  
   `[area:permissions, area:tools]` – A recent change prevents plan mode from executing shell commands (e.g., `gh` CLI) that were previously used to enrich plans. Users consider this a serious regression.  
   [Issue #4188](https://github.com/github/copilot-cli/issues/4188) | 3 comments | 2 👍

2. **[#4183] Auto-compaction does not prevent CAPI 5 MB failure from accumulated tool history**  
   Long, tool-heavy sessions hit the independent 5 MB serialized body limit even when context-token capacity is fine. Automatic compaction misses this, causing permanent failures.  
   [Issue #4183](https://github.com/github/copilot-cli/issues/4183) | 2 comments | 5 👍

3. **[#4163] Copilot CLI 1.0.71 does not reap child processes – zombies accumulate**  
   Finished subprocesses remain as zombies under the copilot PID (≈2/min). Affects Linux users.  
   [Issue #4163](https://github.com/github/copilot-cli/issues/4163) | 2 comments | 0 👍

4. **[#4206] Environment footer stuck on “Loading:” forever when built-in GitHub MCP handshake stalls under org policy**  
   Org-level MCP policies cause the loading indicator to never complete, even though all items are loaded.  
   [Issue #4206](https://github.com/github/copilot-cli/issues/4206) | 1 comment | 2 👍

5. **[#3976] Native `tgrep` indexer OOM-kills host on large monorepos**  
   The Rust trigram indexer (experiment) spawns a persistent daemon with no memory cap, leading to OOM kills.  
   [Issue #3976](https://github.com/github/copilot-cli/issues/3976) | 1 comment | 0 👍

6. **[#4212] Prompt box and highlighted menu items render invisible inside tmux**  
   Dark-on-dark rendering in tmux sessions makes input and selection unreadable.  
   [Issue #4212](https://github.com/github/copilot-cli/issues/4212) | 1 comment | 0 👍

7. **[#4211] Copilot CLI couldn’t handle BigInt in structured MCP response**  
   MCP servers returning large numbers cause a `Do not know how to serialize a BigInt` error, aborting all tasks.  
   [Issue #4211](https://github.com/github/copilot-cli/issues/4211) | 0 comments | 0 👍

8. **[#4202] Built-in `view` reports “Path does not exist” for existing files (regression in 1.0.73)**  
   The `view` tool fails on valid files starting in v1.0.72, still present in v1.0.73.  
   [Issue #4202](https://github.com/github/copilot-cli/issues/4202) | 0 comments | 0 👍

9. **[#4203] Remote MCP (OAuth): expired access token forces interactive re-auth instead of silent refresh**  
   When a cached access token expires, the CLI drops the MCP server’s tools and requires a fresh login, ignoring the cached refresh token.  
   [Issue #4203](https://github.com/github/copilot-cli/issues/4203) | 0 comments | 0 👍

10. **[#4012] BYOK: reasoning effort not supported for some custom models**  
    Using `--reasoning-effort max` with certain custom models (e.g., `glm-5.2:cloud`) returns an error even when the configuration is valid.  
    [Issue #4012](https://github.com/github/copilot-cli/issues/4012) | 2 comments | 17 👍

## Key PR Progress
Only one PR was updated in the last 24 hours:
- **[#3163] ViewSonic monitor** (spam/bot PR, unrelated to Copilot CLI) — Not actionable.

*No meaningful PRs were merged or advanced today. Most development activity appears focused on issue triage and the v1.0.74-0 release.*

## Feature Request Trends
The community is consistently pushing for three major enhancements:

1. **Full MCP primitive support** – MCP currently only covers *tools*. Requests for `resources/read` (#1803, 8 👍), `resources/subscribe` (#3073), and general resources/prompts (#1518, 14 👍) are long-standing and highly upvoted.
2. **Better model and agent configurability** – Users want default models for `/fleet` subagents (#2193, 14 👍), inline custom agent invocation (#4208, 3 👍), and a `skill` tool alias for custom agents (#4209).
3. **Credential and OAuth bridge improvements** – Remote OAuth with DCR (#1305, 26 👍) still lacks CIMD support, and refresh token flows (#4203) are broken. Higher retry configurability (#4210) is also requested.

## Developer Pain Points
Several recurring frustrations emerge from recent issues:

- **Plan mode regressions** – Shell command blocking (#4188) and the 5 MB CAPI body limit (#4183) degrade the core planning workflow.
- **Process and resource leaks** – Zombie processes (#4163) and OOM from the `tgrep` indexer (#3976) hurt reliability on Linux and large repos.
- **UI/CLI glitches** – tmux rendering (#4212), stuck loading footers (#4206, #4214, #4215), and dropped key events (#4213) create a poor terminal experience.
- **MCP integration fragility** – BigInt serialization (#4211), missing resource support (#1518), and expired token handling (#4203) make MCP server interactions brittle.
- **Regression velocity** – The `view` tool regression (#4202) in the latest patch highlights a need for stronger release validation.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest – 2026-07-22

**Data source: [github.com/MoonshotAI/kimi-cli](https://github.com/MoonshotAI/kimi-cli)**

---

## 1. Today's Highlights

No new releases were cut in the last 24 hours, but two critical bugs surfaced that demand immediate attention. A core API integration error is rejecting valid MCP tool definitions (Issue #2531), breaking tool-using workflows for anyone on the K3 model. Meanwhile, k2.5 model users are reporting a complete tool-calling failure and an infinite loop in goal mode (Issue #2527), suggesting a possible regression in the model-specific execution path.

---

## 2. Releases

**None** — No new releases in the last 24 hours.

---

## 3. Hot Issues

*(5 issues currently active; all listed below due to low total count)*

1. **Issue #2531** — [MCP tool names & schemas rejected by Moonshot API (HTTP 400)](https://github.com/MoonshotAI/kimi-cli/issues/2531)  
   **Author:** `sbdsam` | **Created:** 2026-07-22 | **👍:** 0  
   **Why it matters:** This is a hard blocker for anyone using MCP tools with the K3 model via Moonshot API. The error message points to a schema validation failure (`anyOf` format issue), likely caused by client-side sanitization that does not conform to Moonshot's specific "flavored" JSON Schema expectations.  
   **Community reaction:** Single comment, no upvotes yet — early detection.

2. **Issue #2474** — [Terminal UI keeps shaking / re-rendering entire conversation from scratch](https://github.com/MoonshotAI/kimi-cli/issues/2474)  
   **Author:** `yudichimiantiao` | **Created:** 2026-06-25 | **Updated:** 2026-07-21 | **👍:** 2  
   **Why it matters:** A persistent rendering bug affecting Linux users on kimi-code 0.19.2. The UI constantly resets, making the CLI effectively unusable for extended sessions.  
   **Community reaction:** 2 upvotes, no resolution yet — indicates a high-friction UX bug that has lingered for ~1 month.

3. **Issue #2529** — [Numpad keys not registered in input box on Windows](https://github.com/MoonshotAI/kimi-cli/issues/2529)  
   **Author:** `woai3c` | **Created:** 2026-07-21 | **👍:** 0  
   **Why it matters:** A keyboard event handling gap on Windows (kimi3 model). Numpad input is completely ignored, which is a basic UX regression.  
   **Community reaction:** No comments or upvotes — likely a low-frequency issue, but easy to fix.

4. **Issue #2528** — [Output too long when using shell mode](https://github.com/MoonshotAI/kimi-cli/issues/2528)  
   **Author:** `wenli7363` | **Created:** 2026-07-21 | **👍:** 0  
   **Why it matters:** Shell mode with `!` prefix produces excessively long output with no truncation or pagination, degrading the interactive experience. Likely a missing output buffer limit.  
   **Community reaction:** No comments — the reporter is the sole mention.

5. **Issue #2527** — [k2.5 model: tool calling completely invalid + goal mode infinite loop](https://github.com/MoonshotAI/kimi-cli/issues/2527)  
   **Author:** `lesteryan` | **Created:** 2026-07-21 | **👍:** 0  
   **Why it matters:** A severe regression in the k2.5 model. Tool calls are issued but execution returns "Tool not found", and goal mode loops indefinitely. Multiple tool invocation formats were tried — all failed — indicating a systemic provider mismatch.  
   **Community reaction:** No comments, but the "必现" tag (must appear) suggests high severity for k2.5 users.

---

## 4. Key PR Progress

*(1 PR active in the last 24 hours)*

1. **PR #2530** — [Fix shell: stop blocking until timeout when a detached child holds pipes](https://github.com/MoonshotAI/kimi-cli/pull/2530)  
   **Author:** `ayaangazali` | **Created:** 2026-07-21 | **Status:** Open  
   **Description:** Resolves Issue #2468. The fix addresses a foreground shell bug where `_run_shell_command` waited for stdout/stderr EOF before checking the exit code. If a detached child process (e.g., `some_daemon &`) kept pipes open, the CLI would block until a timeout instead of returning the exit code promptly.  
   **Why it matters:** This is a root-cause fix for a common shell workflow issue — launching background processes should not stall the CLI.

---

## 5. Feature Request Trends

The current issue set contains no explicit feature requests. However, two implicit direction signals can be extracted:

- **MCP schema compatibility:** Issue #2531 reveals that users expect the CLI to automatically sanitize or transform tool definitions to match Moonshot’s API schema, rather than requiring manual workarounds. A "smart schema adapter" for MCP tools would be a natural evolution.
- **Model-specific execution stability:** Issue #2527 suggests that k2.5 model support needs a dedicated tool-calling execution path, possibly with model-aware fallback handling or an explicit supported-tool registry.

---

## 6. Developer Pain Points

Two dominant pain points emerge from the active bug reports:

1. **API schema strictness (Issue #2531):** Moonshot API’s "flavored" JSON Schema rejects valid MCP definitions, forcing developers to debug protocol-level formatting issues. This is a high-friction integration point for third-party tool authors.
2. **Model-specific regression (Issue #2527):** The k2.5 model appears to have a broken tool execution path, with no graceful degradation or error recovery. Goal mode exacerbates this by entering an infinite loop — effectively a hang state that requires manual kill.

Less severe but still notable:
- **Terminal UI rendering (Issue #2474):** Persistent UI jitter on Linux, unresolved for ~1 month.
- **Cross-platform input gaps (Issue #2529):** Windows numpad keys not captured.
- **Shell mode output management (Issue #2528):** Lack of output truncation in shell mode degrades usability for long-running commands.

---

*End of digest for 2026-07-22*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-07-22

## Today's Highlights
A major outage affecting all **OpenCode Go** subscription models dominated the community today, with multiple reports (#38216, #38195, #38218) of “Request blocked by upstream provider” rendering paid models unusable. On the fix side, contributors landed several impactful patches: restored TUI shell mode styling after the V2 theme migration, added a dedicated system prompt for DeepSeek models, and fixed clock-skew-induced response loops. A new contributor PR also introduces custom reasoning fields for model providers.

## Releases
No new releases were published in the last 24 hours.

## Hot Issues
1. **[#38216 – Request blocked by upstream provider (OPEN)](https://github.com/anomalyco/opencode/issues/38216)** – User on Go plan reports all Go-tier models fail with auth errors; free models work. 6 comments, no upvotes yet. This is one of three identical reports today, indicating a backend authentication issue.

2. **[#38195 – 401 AuthError: Request blocked by upstream provider (OPEN)](https://github.com/anomalyco/opencode/issues/38195)** – Same error on multiple machines (Windows, macOS) in both Desktop and Hermes. 10 👍, 4 comments. Community is actively upvoting, suggesting this is a critical incident for paid subscribers.

3. **[#38218 – bug(opencode-go): All subscription models return "Request blocked by upstream provider" (OPEN)](https://github.com/anomalyco/opencode/issues/38218)** – Another report with very detailed reproduction steps. 3 comments. Combined with the previous two, this forms a clear pattern of a provider gateway issue.

4. **[#8836 – session list is showing all sessions not only the ones scoped to the current dir (CLOSED)](https://github.com/anomalyco/opencode/issues/8836)** – Long-standing bug (filed Jan 2026) where `/sessions` ignores the current working directory. Closed today with 11 comments and 12 👍. Community clearly valued this fix.

5. **[#13763 – Disabling MCPs doesn't persist across sessions (CLOSED)](https://github.com/anomalyco/opencode/issues/13763)** – MCP toggle state is lost on restart. 6 comments, 4 👍. Closed today, a welcome fix for users managing multiple MCPs.

6. **[#21738 – Custom @ai-sdk/google provider drops API key at runtime with custom baseURL (CLOSED)](https://github.com/anomalyco/opencode/issues/21738)** – Google provider loses API key when using custom base URL on Windows. 6 comments. Affects custom model deployments, now closed.

7. **[#18080 – [FEATURE]: Cursor rules/agents/skills compatibility (CLOSED)](https://github.com/anomalyco/opencode/issues/18080)** – Request for compatibility with Cursor's rules/agents system, complementing existing Claude Code migration support. 6 comments, 3 👍. Closed, likely as a duplicate or already addressed.

8. **[#26035 – [FEATURE]: Allow disabling automatic session diff summarization (CLOSED)](https://github.com/anomalyco/opencode/issues/26035)** – Users want an option to turn off automatic diff summaries for long sessions. 5 comments, 2 👍. Closed – may have been implemented.

9. **[#21979 – Wrapped stream error chunks bypass retry and can leave parent sessions waiting forever (CLOSED)](https://github.com/anomalyco/opencode/issues/21979)** – Providers sending error chunks in streaming responses cause hangs. 5 comments, 1 👍. Important reliability fix now closed.

10. **[#14681 – [BUG] Renaming a workspace in desktop app does not change the name of the workspace folder (CLOSED)](https://github.com/anomalyco/opencode/issues/14681)** – Workspace rename in UI doesn't sync to disk folder name. 4 comments, 5 👍. Closed today, fixing a confusing UX inconsistency.

## Key PR Progress
1. **[#38229 – fix(opencode): add DeepSeek system prompt (OPEN)](https://github.com/anomalyco/opencode/pull/38229)** – Adds a dedicated system prompt for DeepSeek models to resolve conflicts with generic instructions. Closes #38234.

2. **[#38231 – fix(tui): restore shell mode styling (OPEN)](https://github.com/anomalyco/opencode/pull/38231)** – Restores visible shell-mode accent and label after V2 theme migration. By jlongster.

3. **[#38232 – fix(provider): preserve DeepSeek V4 output limit (OPEN)](https://github.com/anomalyco/opencode/pull/38232)** – Prevents the global 32K default from overriding DeepSeek V4's 384K token output limit.

4. **[#38213 – fix: stop clock-skew response loops (OPEN)](https://github.com/anomalyco/opencode/pull/38213)** – Fixes infinite retry loops when client and server clocks differ. Closes #24476 and #25270.

5. **[#38224 – fix(tui): inherit elevated tool theme (CLOSED)](https://github.com/anomalyco/opencode/pull/38224)** – Adds scoped theme context for nested components; fixes block tool content rendering. Merged.

6. **[#38217 – fix: make tool progress live-only (OPEN)](https://github.com/anomalyco/opencode/pull/38217)** – Moves running tool progress to live replacement instead of durable session history, improving performance and UX.

7. **[#38225 – fix(opencode): use Bun.serve for HTTP on native Windows (OPEN)](https://github.com/anomalyco/opencode/pull/38225)** – Fixes `node:http` binding issue on Windows where ports appeared bound but didn't accept connections. Closes #38220.

8. **[#37097 – fix(app): show shell output while a command runs (OPEN)](https://github.com/anomalyco/opencode/pull/37097)** – Makes web UI expand bash tool output during execution so users see live command progress.

9. **[#37054 – feat(app): add full session option to web fork dialog (OPEN)](https://github.com/anomalyco/opencode/pull/37054)** – Enables forking an entire conversation (not just up to a selected message) in the web UI. Closes #37016.

10. **[#38200 – feat: add support for Solidity file type and highlighting (OPEN)](https://github.com/anomalyco/opencode/pull/38200)** – Adds syntax highlighting for `.sol` files, requested by blockchain developers.

## Feature Request Trends
- **Cursor ecosystem compatibility** (#18080): Users want OpenCode to support Cursor's rules/agents/skills format, building on existing Claude Code migration.
- **Post-chat command hooks** (#28891): Run custom shell commands automatically after any chat that modifies files.
- **Custom slash commands in GUI** (#17048): Extend `.opencode/commands` support from TUI to the desktop/web UI.
- **Config file–driven theming** (#28925): Allow theme customization via a configuration file with live reload.
- **Panel layout customization** (#16349 from PRs #34419, #18497): Multiple PRs address moving the sidebar/panel to the left or right, suggesting strong community demand for layout flexibility.
- **Timestamp and duration on tool executions** (#22144): Show when tools start/finish and how long they take, aiding debugging.
- **Real-time progress for long shell commands** (#28932): Show a live progress indicator (spinner, elapsed time) in the TUI for long-running commands like builds.

## Developer Pain Points
- **Authentication failures with paid tiers**: The cluster of three identical issues (#38216, #38195, #38218) around “Request blocked by upstream provider” highlights a critical reliability gap for OpenCode Go subscribers. Free models work but paid ones do not, pointing to a backend authentication or quota gateway issue.
- **State persistence frustrations**: Multiple closed issues reveal recurring pain: MCP disable state lost on restart (#13763), workspace rename not reflected on disk (#14681), and session list ignoring current directory (#8836). These “sticky state” problems erode trust in configuration.
- **Provider-specific bugs**: Custom Google provider loses API keys with custom base URLs (#21738), DeepSeek models get incorrect system prompts (#38229), and stream errors cause hangs (#21979). Each provider integration seems to have its own edge cases.
- **Agent interruption inconsistency**: Subagents continue running after the main agent is interrupted (#28738), and multiple simultaneous thoughts are spawned without coordination (#28822). Users expect clean interrupt semantics.
- **Cross-platform input issues**: Keyboard shortcuts (screenshot, voice dictation) are intercepted by the Windows Desktop app (#28853), and Enter key fails to submit prompts containing spaces (#28924). These indicate focus and event handling gaps.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-07-22

## Today's Highlights

Two releases landed in 24 hours: **v0.81.0** introduces local `llama.cpp` model management, and **v0.81.1** adds verifiable, deterministic source archives with rebuild instructions. A wave of stability fixes arrived via PRs, addressing crashes in streaming, autocomplete, and long-running compaction. The community also saw contributions for OAuth integrations (Kimi Code, OpenRouter) and a new `AgentHarness` abstraction for building reusable execution tools.

## Releases

- **[v0.81.1](https://github.com/earendil-works/pi/releases/tag/v0.81.1)** — Adds verifiable release source archives: deterministic, checksummed archives with instructions to rebuild standalone binaries.
- **[v0.81.0](https://github.com/earendil-works/pi/releases/tag/v0.81.0)** — New feature: local llama.cpp model management. Connect to a llama.cpp router, search/download HuggingFace models, load/unload with live progress.

## Hot Issues

1. **[#6278](https://github.com/earendil-works/pi/issues/6278) — Claude models break edit tool (23 comments, 9 👍)**  
   New Claude models inject extra keys into edit tool calls, causing ~20% failure rate. Community frustration high as edits silently fail.

2. **[#6915](https://github.com/earendil-works/pi/issues/6915) — Crash after v0.81.0 update (14 comments, 2 👍)**  
   `TypeError: streamFunction is not a function` on session resume. Affects users upgrading to 0.81.0; quickly patched in 0.81.1.

3. **[#5653](https://github.com/earendil-works/pi/issues/5653) — Move off Shrinkwrap (19 comments, open)**  
   Duplicate module copies caused by npm shrinkwrap. Community discussion centers on switching to a different packaging strategy.

4. **[#6920](https://github.com/earendil-works/pi/issues/6920) — Autocomplete crash on non-string values (4 comments)**  
   `value.startsWith` throws when a provider returns non-string. Affects `/` slash-command autocomplete. Immediate crash in interactive mode.

5. **[#6911](https://github.com/earendil-works/pi/issues/6911) — SDK retry sleeps days (3 comments)**  
   OpenAI/Anthropic SDKs sleep full `Retry-After` with no cap and ignore `AbortSignal`. Can freeze Pi for hours. PR #6912 fixes by disabling SDK retries.

6. **[#6879](https://github.com/earendil-works/pi/issues/6879) — Auto-compaction never triggers (3 comments)**  
   Session ran 2+ hours, context window exceeded 100% without compaction. Only triggered after API rejection at 373k tokens. Request to check after every agentic turn.

7. **[#6747](https://github.com/earendil-works/pi/issues/6747) — API for enhancing agent message markdown (7 comments, 2 👍)**  
   Request to mutate agent message display without affecting LLM content. Example use case: formula rendering. Active discussion on extension API design.

8. **[#6774](https://github.com/earendil-works/pi/issues/6774) — Ctrl+G external editor slow on crowded tmpdir (7 comments)**  
   Writing temp files directly to `os.tmpdir()` causes hangs when directory is crowded. Proposed fix: use private `mkdtemp`. PR #6903 implements this.

9. **[#6817](https://github.com/earendil-works/pi/issues/6817) — find tool returns no results on Windows (2 comments)**  
   Globbing patterns with path separators (e.g. `src/**/*.ts`) fail on Windows due to OS-level path handling. Plain filename patterns work.

10. **[#2557](https://github.com/earendil-works/pi/issues/2557) — edit conflict detection missing (3 comments)**  
    `tool_call` event fires with stale data for conflicting edits; extensions have no way to detect conflict. Long-standing issue.

## Key PR Progress

1. **[#6916](https://github.com/earendil-works/pi/pull/6916) — feat(agent): add AgentHarness execution tools**  
   New abstraction for reusable, context-aware agent tools. Passes arbitrary app-specific context alongside standard arguments.

2. **[#6936](https://github.com/earendil-works/pi/pull/6936) — fix: reentrancy guard for fork/clone operations**  
   Prevents duplicate sessions when `/fork` or clone is triggered rapidly. Merged.

3. **[#6935](https://github.com/earendil-works/pi/pull/6935) — feat: Kimi Code subscription OAuth login**  
   Implements device authorization flow, refresh-token rotation, and Bearer-auth integration. Keeps existing `KIMI_API_KEY` option.

4. **[#6933](https://github.com/earendil-works/pi/pull/6933) — fix: disable undici idle timeout for local LLMs**  
   Sets `DEFAULT_HTTP_IDLE_TIMEOUT_MS` to 0 so slow local backends (vLLM, LM Studio, Ollama) do not get terminated during prompt evaluation. Merged.

5. **[#6654](https://github.com/earendil-works/pi/pull/6654) — feat: add promptCacheKey stream option**  
   Allows overriding the prompt cache key (default `sessionId`) for OpenAI/Azure providers. Useful for shared context across sessions.

6. **[#6928](https://github.com/earendil-works/pi/pull/6928) — generate-models: use reasoning options from models.dev**  
   Applies thinking/conciseness levels from `models.dev/api.json` to model catalog. Diff shows changes for many models.

7. **[#6216](https://github.com/earendil-works/pi/pull/6216) — feat: Amazon Bedrock Mantle OpenAI Responses provider**  
   New provider for Bedrock Mantle's OpenAI-compatible API using the OpenAI Bedrock provider.

8. **[#6927](https://github.com/earendil-works/pi/pull/6927) — feat: native OpenRouter OAuth support**  
   Adds browser-based OAuth flow with PKCE S256, localhost callback, and timeout. Works with text and image providers.

9. **[#6903](https://github.com/earendil-works/pi/pull/6903) — fix: speed up external editor launch**  
   Refactors editor to write temp files in a private subfolder instead of `/tmp` root. Addresses [#6774](https://github.com/earendil-works/pi/issues/6774).

10. **[#6901](https://github.com/earendil-works/pi/pull/6901) — fix: compaction & branch summarization follow retry policy**  
    Retries compaction on transient failures using the same policy as normal assistant turns. Emits TUI events for retry indicators.

## Feature Request Trends

- **Extensibility APIs** — Multiple issues request hooks for extensions: agent message markdown rendering ([#6747](https://github.com/earendil-works/pi/issues/6747)), deferred canonical reload ([#6552](https://github.com/earendil-works/pi/issues/6552)), and exposing system prompt variables ([#6932](https://github.com/earendil-works/pi/issues/6932)).
- **Authentication & Provider Integration** — High interest in OAuth flows: Kimi Code ([#6935](https://github.com/earendil-works/pi/pull/6935)), OpenRouter ([#6927](https://github.com/earendil-works/pi/pull/6927)), and Sockudo transport ([#6929](https://github.com/earendil-works/pi/issues/6929)). Also Anthropic server-side fallback ([#6886](https://github.com/earendil-works/pi/issues/6886)).
- **Packaging & Dependency Management** — Move away from shrinkwrap ([#5653](https://github.com/earendil-works/pi/issues/5653)) and inline settings factories ([#6398](https://github.com/earendil-works/pi/issues/6398)) show demand for simpler, more modular builds.

## Developer Pain Points

- **Crash instability** — Repeated uncaught exceptions after updates (streamFunction, autocomplete, compaction). Users report unpredictable crashes in interactive and headless modes.
- **SDK retry deadlocks** — OpenAI/Anthropic SDK `Retry-After` sleeps block Pi for hours without abort capability, making long-running sessions risky.
- **Local LLM hiccups** — Undici timeouts kill slow local backends. Compaction fails on single transient stream drops. Both now addressed in PRs.
- **Windows compatibility** — The `find` tool and path-separator globbing fail on Windows, plus external editor temp file strategy needs OS-aware fixes.
- **Edit tool regressions** — New Claude models produce malformed edits; lack of conflict detection leaves extensions blind to failures.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-07-22

## Today’s Highlights

Version **0.20.1** shipped with an autofix label-driven takeover system and a critical fix for forced-dispatch green no-op. The community flagged a recurring **`enable_thinking=false`** bug that now affects at least three separate internal tools (web_fetch, side-query, context compaction), causing 400 errors on thinking-only models. Multiple P1 issues around subagent model mutation and Windows platform stability were also closed, while new PRs bring workspace trust hot-reload, Java SDK daemon transport, and Web Shell file previews.

## Releases

- **[v0.20.1](https://github.com/QwenLM/qwen-code/releases/tag/v0.20.1)** — Includes `feat(autofix): label-driven takeover and release; fix forced-dispatch green no-op`. No known breaking changes. Also bundles **cua-driver-rs v0.7.3** with relative-coordinate fork (prebuilt binaries for macOS, Linux, Windows).
- **v0.20.0-preview.0** and **v0.20.0-nightly.20260722** — Both contain test coverage for daemon metrics init ordering and `metricReader` asymmetry (PR #7456).

## Hot Issues

1. **[#7156](https://github.com/QwenLM/qwen-code/issues/7156)** [P1/CLOSED] **Subagent mutates main session model** — Despite the fix in #7119, the same context overflow recurrence occurs through a different code path. Community reported 11 comments; urgency is high.

2. **[#7284](https://github.com/QwenLM/qwen-code/issues/7284)** [P1/CLOSED] **`runSideQuery` forces `enable_thinking=false`** — Breaks TokenPlan endpoints that require thinking enabled. Affects classifiers, `web_fetch`, and other internal calls. 4 comments.

3. **[#7440](https://github.com/QwenLM/qwen-code/issues/7440)** [P1/CLOSED] **`web_fetch` tool completely unusable** — Every fetch fails because the side-query sends `enable_thinking=false`. Same root cause as #7284. 2 comments.

4. **[#7332](https://github.com/QwenLM/qwen-code/issues/7332)** [P1/CLOSED] **`enable_thinking=false` sent to thinking-only models** — Models like `qwen3.8-max-preview` get a 400 during context compaction, goal judge, etc. Another manifestation of the same bug pattern.

5. **[#7316](https://github.com/QwenLM/qwen-code/issues/7316)** [P2/CLOSED] **OpenAI toolCall breaks `subAgent`** — Some OpenAI-compatible models return empty strings for optional parameters, causing validation failures. 5 comments.

6. **[#7056](https://github.com/QwenLM/qwen-code/issues/7056)** [P2/OPEN] **VS Code Companion fails to connect** — “Qwen ACP process exited unexpectedly” on Windows. Needs more information but has been open for 6 days. 5 comments.

7. **[#7287](https://github.com/QwenLM/qwen-code/issues/7287)** [P2/OPEN] **Auto-memory MEMORY.md not in FileReadCache** — The model sees the memory prompt but `write_file` to update it is always rejected on first try because the read is not registered. 3 comments.

8. **[#7427](https://github.com/QwenLM/qwen-code/issues/7427)** [P2/OPEN] **Web Shell artifact panel spams “Load artifacts failed”** — Automatic refresh causes repeated error toasts. UX regression. 4 comments.

9. **[#5540](https://github.com/QwenLM/qwen-code/issues/5540)** [Type/feature-request] **Resume completed background sub-agents** — Currently `send_message` hard-fails to stopped agents. Users want revive capability. 4 comments, long-standing.

10. **[#7118](https://github.com/QwenLM/qwen-code/issues/7118)** [P2/OPEN] **Windows standalone installer fails** — SHA-256 verification fails when `Get-FileHash` is unavailable. Affects new Windows users. 2 comments, 1 👍.

## Key PR Progress

1. **[#7471](https://github.com/QwenLM/qwen-code/pull/7471)** — **feat(web-shell): git mode selector** for new session creation, with three workflows (current branch, new branch, detached worktree).

2. **[#7467](https://github.com/QwenLM/qwen-code/pull/7467)** — **feat(web-shell): rendered file previews** for HTML (sandboxed iframe) and Markdown in the review panel.

3. **[#7279](https://github.com/QwenLM/qwen-code/pull/7279)** — **feat(core): trusted daemon invocation context** — Adds minimal trusted path for daemon-originated root prompts, per-channel capability authentication.

4. **[#7268](https://github.com/QwenLM/qwen-code/pull/7268)** — **feat(serve): hot-reload workspace trust changes** — Allows trust policy changes without daemon restart, with semantic snapshots and reconciliation.

5. **[#7388](https://github.com/QwenLM/qwen-code/pull/7388)** — **feat(daemon): explicit channel delivery** — Named channels for agent prompts, scheduled tasks, and daemon notifications with routing to matching workers.

6. **[#7463](https://github.com/QwenLM/qwen-code/pull/7463)** — **feat(sdk-java): daemon transport** — Java 11 transport for the existing Maven artifact (`qwencode-sdk` 0.1.0-alpha), with thread-scoped sessions and streaming.

7. **[#7453](https://github.com/QwenLM/qwen-code/pull/7453)** — **fix(acp-bridge): prompt-terminal follow-ups** — Four behavioral fixes after the daemon exactly-once work, including proper terminal reporting on removal.

8. **[#7395](https://github.com/QwenLM/qwen-code/pull/7395)** — **feat(cli): custom skill directories via settings** — Support for `skills.directories` array, allowing skill sharing across multiple agent harnesses.

9. **[#7468](https://github.com/QwenLM/qwen-code/pull/7468)** — **fix(core): record auto-memory index reads in FileReadCache** — Solves the first-update rejection described in #7287 by registering the read.

10. **[#7408](https://github.com/QwenLM/qwen-code/pull/7408)** — **perf(web-shell): optimize long session rendering** — Bounds live-session memory growth at 500 UI blocks, virtualizes older history, reduces re-renders.

## Feature Request Trends

- **Session management UX** — Multiple requests for workspace selectors, git mode selectors (current branch / new branch / worktree), and “start-in” context switching (local vs worktree) in the Web Shell composer toolbar.
- **Subagent lifecycle improvements** — Allow resuming completed background sub-agents via `send_message` (#5540), and retain background agent rosters after session restore.
- **Observability & tool-output budgeting** — Requests for hardened budget tracking, wire-level observability, and artifact lifecycle telemetry (#7306) to prevent silent failures.
- **Memory system reliability** — Users want auto-memory updates to work on first write, memory recall delivery telemetry, and better integration with the file cache.
- **Cross-platform & integration** — Windows installation robustness (SHA-256 checks), Docker sandbox fixes for Windows, and better support for OpenAI-compatible providers (tool call schema).

## Developer Pain Points

1. **`enable_thinking` parameter inconsistency** — At least three P1 issues (#7284, #7440, #7332) show that internal side-queries always force `enable_thinking=false`, breaking any model endpoint that requires thinking. This has become a systemic problem.
2. **Subagent model mutation** — Despite the #7119 fix, a different code path still allows subagents to overwrite the main session’s model, causing context overflow errors (#7156). The community is frustrated by the recurrence.
3. **Windows-specific failures** — Standalone installer SHA-256 failures (#7118) and Docker sandbox `chdir` errors (#7139) make Windows adoption painful.
4. **Web Shell refresh token loss** — Starting the daemon with `--token` causes the Web Shell to lose the bearer token on page refresh (#7301, #7398), forcing re-login.
5. **Auto-memory first-update rejection** — Every new session’s first attempt to write to `MEMORY.md` is rejected because the read is not cached (#7287), wasting model turn budget.
6. **Cold-start performance** – The ACP child process still eagerly loads 17+ MiB of modules on every cold start (#7264), adding latency for users with many plugins.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest – 2026-07-22

## Today’s Highlights
The v0.9.1 release crunch is peaking: multiple release-blocker issues were closed yesterday and today, while the completion board (#4650) tracks final integration evidence. Two critical user-reported bugs—Enter-key send lag (#4605) and long-output scrolling truncation (#4603)—were fixed and merged via PRs from community contributors. A new `/skills` unified manager PR (#4679) and a runtime API extension for dynamic provider/model selection (#4658) signal continued momentum for v0.9.2 features.

## Releases
No new releases in the last 24 hours.

## Hot Issues (10 noteworthy)
| Issue | Why it matters | Community reaction |
|-------|----------------|-------------------|
| [#4032](https://github.com/Hmbown/CodeWhale/issues/4032) – Closed – Codewhale not following the constitution | A release-blocker bug where CodeWhale insisted on writing temporary scripts instead of using user-provided ones. 41 comments show heated discussion; closed after root cause and fix. | High engagement, resolved by clarifying tool‑use policies. |
| [#2870](https://github.com/Hmbown/CodeWhale/issues/2870) – Open – EPIC: staged command-boundary refactor | The largest refactor in flight, splitting command ownership into mergeable layers. Directly affects all tool lifecycle code. | 16 comments, tracked across multiple sub‑issues. |
| [#4227](https://github.com/Hmbown/CodeWhale/issues/4227) – Open – Help map CodeWhale tsunami | A workflow to help contributors keep their dev environment in sync with the high‑velocity `main` branch (10+ PRs/day). | 11 comments; community‑owned approach to reducing friction. |
| [#2766](https://github.com/Hmbown/CodeWhale/issues/2766) – Open – UI refactor needed | Output is hard to copy and confirmation pop‑ups hide the main interface. Persistent complaint from multiple users. | 9 comments; waiting for design proposals. |
| [#2889](https://github.com/Hmbown/CodeWhale/issues/2889) – Open – Work Agent rows: real sub‑agent details | Restored design issue for making agent sidebar show clear activity, not raw tool noise. | 7 comments; community design direction preserved. |
| [#4410](https://github.com/Hmbown/CodeWhale/issues/4410) – Closed – Restore xAI device‑code OAuth login | Broken OAuth flow due to hard‑coded path mismatch; fix merged quickly. | 7 comments; critical for xAI provider users. |
| [#2886](https://github.com/Hmbown/CodeWhale/issues/2886) – Open – Gherkin acceptance E2E coverage for tool lifecycle | Needed to prevent regressions during the command refactor. Acceptance criteria defined, implementation pending. | 6 comments; underscores testing gaps. |
| [#1917](https://github.com/Hmbown/CodeWhale/issues/1917) – Open – Universal PreToolUse/PostToolUse hook layer | A unifying pattern for Cancel/Pause/Resume across all action types. Architectural high‑value but not yet active. | 5 comments; broad agreement on concept. |
| [#4605](https://github.com/Hmbown/CodeWhale/issues/4605) – Closed – Enter key send lag (UI freeze ~200–1200ms) | High‑frequency pain point reported across versions 0.6.x–0.9.0. Fix landed same day as report. | 3 comments; quick community + maintainer collaboration. |
| [#4655](https://github.com/Hmbown/CodeWhale/issues/4655) – Closed – Self‑hosted route limits capped by 4K fallback | Unknown local models were limited to 4096 output tokens even when route had explicit limit. Patched by contributor `h3c-hexin`. | 1 comment but important for self‑hosted users. |

## Key PR Progress (10 PRs)
| PR | Description | Status |
|----|-------------|--------|
| [#4679](https://github.com/Hmbown/CodeWhale/pull/4679) – feat(skills): unified `/skills` manager | Implements inventory, audit, install/import, update, remove, and trust from one surface. Refs v0.9.1 completion board. | Open, merged? Let’s check: created 2026-07-22, likely still open. |
| [#4046](https://github.com/Hmbown/CodeWhale/pull/4046) – Layer 5.1: User command registry and loading boundary | Verifies existing code already satisfies acceptance criteria for user‑defined commands. No production changes needed. | Closed, merged. |
| [#4673](https://github.com/Hmbown/CodeWhale/pull/4673) – fix(shell): default no‑cwd commands to `context.workspace` | Sub‑agent worktree isolation fix: shell commands now run in sub‑agent’s worktree, not parent checkout. | Closed, merged. |
| [#4675](https://github.com/Hmbown/CodeWhale/pull/4675) – Integrate v0.9.1 runtime and release surface | Combines runtime simplification, empty‑Work fix, final TUI color grammar. Prepares for release. | Open. |
| [#4654](https://github.com/Hmbown/CodeWhale/pull/4654) – fix(tui): acknowledge Enter before slow send prep | Separates UI acknowledgement from slow send preparation; eliminates the freeze. Contributed by `SamhandsomeLee`. | Closed, merged. |
| [#4653](https://github.com/Hmbown/CodeWhale/pull/4653) – test(tui): lock long‑output transcript scrolling with PTY scenario | E2E test ensuring content beyond viewport is retained and scrollable. | Closed, merged. |
| [#4658](https://github.com/Hmbown/CodeWhale/pull/4658) – feat(runtime‑api): add provider registry + switch endpoints | Three new endpoints for dynamic provider/model picker GUI, replacing fragile `setConfig` flow. | Closed, merged. |
| [#4657](https://github.com/Hmbown/CodeWhale/pull/4657) – fix(streaming): report progress on idle timeouts | Includes received‑byte and timing telemetry in SSE idle‑timeout errors, distinguishing prefill stalls from partial output. | Closed, merged. |
| [#4656](https://github.com/Hmbown/CodeWhale/pull/4656) – fix(route): honor explicit limits for unknown local models | Replaces hard‑coded 4K fallback with route‑specific limits for self‑hosted models. Fixes #4655. | Closed, merged. |
| [#4566](https://github.com/Hmbown/CodeWhale/pull/4566) – [v0.9.2] update tui Cargo.toml for HarmonyOS build | Moves `portable-pty` to Unix gate, enabling HarmonyOS compilation. Submitted by community member `shenyongqing`. | Open. |

## Feature Request Trends
The most‑requested feature directions from recent issues include:
- **Unified skill/configuration management** – Multiple requests for a single `/skills` surface and better provider/model configuration (e.g., #4651, #4660 suggesting Kimi Code‑style configuration).
- **Improved sub‑agent and work orchestration** – Users want clearer visibility into sub‑agent activity, truthful queues, and atomic permission contracts (e.g., #2889, #4636, #4647).
- **Better UI/UX for long sessions** – Output scrolling, copy‑friendliness, and confirmation pop‑ups remain top friction points (#2766, #4603).
- **Enhanced self‑hosted and custom provider support** – Issues around route limits, model detection, and provider‑specific config (#4655, #4370, #4660).
- **Reproducible headless execution** – The `--no-project-config` flag (#4652) fills a need for CI and benchmarking.

## Developer Pain Points
- **Input responsiveness** – The Enter‑key lag (fixed in #4654) was a long‑standing annoyance affecting daily use.
- **Output truncation** – Long content vanishes beyond viewport without scroll support (fixed in #4653, but test coverage was missing before).
- **Configuration fragility** – Changing provider/model required multi‑step `setConfig` calls that could clobber settings; the new runtime API (#4658) directly addresses this.
- **Sub‑agent isolation** – Worktree `cwd` falling back to parent workspace caused silent command mis‑execution (#4674, fixed in #4673).
- **Self‑hosted model limits** – The 4K token cap for unknown models surprised users who expected their route‑specified limits to apply (#4655, fixed in #4656).
- **High churn on `main`** – The project merges 10+ PRs daily; keeping local environments up‑to‑date is a friction point acknowledged in #4227.

*All links point to the [Hmbown/CodeWhale](https://github.com/Hmbown/CodeWhale) repository.*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/boom7sss/agents-radar).*