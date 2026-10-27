# AI CLI Tools Community Digest 2026-07-16

> Generated: 2026-07-16 03:17 UTC | Tools covered: 9

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

# AI CLI Developer Tools Cross-Tool Comparison Report
**Date**: July 16, 2026 | **Analysis Period**: Last 24 hours

---

## 1. Ecosystem Overview

The AI CLI tools landscape continues rapid maturation, with eight major projects shipping daily patches while grappling with shared scaling challenges around subagent orchestration and cross-platform reliability. Token cost blow-ups from runaway agent recursion have emerged as the dominant operational risk across Claude Code and OpenAI Codex, while Windows stability remains a universal pain point. The ecosystem shows clear convergence around MCP (Model Context Protocol) standards, VS Code integration, and session persistence features, but differentiation is sharpening in agent architecture philosophy—from Claude's subagent fan-out model to Gemini's native agent-framework approach. Plugin ecosystems are becoming a key battleground, with Claude Code, OpenCode, and Qwen Code all investing heavily in extensibility. Notably, Kimi Code appears dormant in this cycle, suggesting possible strategic re-evaluation or slower development cadence.

---

## 2. Activity Comparison

| Tool | Hot Issues (today) | Key PRs (today) | Release Today | Notable Release Version |
|---|---|---|---|---|
| **Claude Code** | 10 (50 open total) | 5 | ✅ Yes | v2.1.211 (patch) |
| **OpenAI Codex** | 10 | 10 | ✅ Yes | rust-v0.144.5 (patch) |
| **Gemini CLI** | 10 | 10 | ✅ Yes | v0.52.0-nightly (nightly) |
| **Copilot CLI** | 10 | 0 | ✅ Yes | v1.0.71 / v1.0.71-3 (patches) |
| **Kimi Code** | 0 | 1 | ❌ No | — |
| **OpenCode** | 10 | 10 | ✅ Yes | v1.18.2 (patch) |
| **Pi** | 10 | 9 | ❌ No | — |
| **Qwen Code** | 10 | 10 | ✅ Yes | v0.19.10-nightly / cua-driver-rs v0.7.2 |
| **DeepSeek TUI** | 10 | 10 | ❌ No | — |

**Key observations**:
- 6 of 9 tools shipped releases in the last 24 hours, indicating a fast iteration cadence
- Kimi Code shows zero issue activity—either a mature stable period or stalled development
- Copilot CLI had zero PRs despite shipping a release, suggesting small-batch stable patches
- Claude Code leads in total open issue volume (50), reflecting both popularity and accumulated technical debt

---

## 3. Shared Feature Directions

### 3.1 Subagent Orchestration & Cost Control (7 tools)
| Need | Affected Tools |
|---|---|
| Subagent recursion limits / depth caps | **Claude Code** (#68619, $27.60 cost blow), **OpenCode** (v1.18.2 default nesting ban) |
| Per-subagent thread visibility & switching | **OpenAI Codex** (#30813), **Gemini CLI** (#22323 false success) |
| Subagent-to-parent messaging reliability | **Claude Code** (#77950 grandchildren stall), **Qwen Code** (#5239 weak communication) |
| Token/context budget per subagent | **Claude Code**, **Gemini CLI** (#26522 auto-memory retry waste), **Pi** (#6621 cache invalidation) |

### 3.2 Cross-Platform Stability: Windows & Linux (6 tools)
| Need | Affected Tools |
|---|---|
| Windows ARM64 crash-on-launch | **OpenAI Codex** (#33381, #33429), **Pi** (#6596 taskkill ENOENT) |
| Windows data loss via NTFS junctions | **Claude Code** (#75275, ~800 GB data loss) |
| Wayland (Linux) compatibility | **Gemini CLI** (#21983 browser agent crash), **OpenCode** (#26151) |
| Windows IME / input deadlocks | **DeepSeek TUI** (#1835 Sogou IME), (#2261 input leakage) |

### 3.3 MCP Ecosystem Reliability (5 tools)
| Need | Affected Tools |
|---|---|
| MCP OAuth token bridging to sessions | **Copilot CLI** (#4096 tools missing) |
| MCP tool discovery timeout prevention | **Gemini CLI** (#28410, 10-minute freeze) |
| MCP tool name validation (dots rejected) | **Qwen Code** (#6970, fails on OpenAI/Anthropic) |
| MCP sandbox / bwrap failures | **Claude Code** (#64799 merged-usr Linux) |

### 3.4 Session Management (5 tools)
| Need | Affected Tools |
|---|---|
| In-terminal `/delete` session command | **Claude Code** (#26904, 👍56) |
| Disable or configure auto-resolve timeout | **OpenAI Codex** (#28969, 👍124) |
| Session state loss after updates | **OpenCode** (#27859, database cleared) |
| Compact / compaction quality degradation | **Claude Code** (#74990 skills lost), **OpenCode** (#25746, #27758) |

### 3.5 VS Code / IDE Integration (4 tools)
| Need | Affected Tools |
|---|---|
| Visual diff review panel | **Claude Code** (#33932, 👍150) |
| Inline context menus | **Claude Code** (broader IDE requests) |
| VS Code extension memory leak | **Gemini CLI** (#28386) |

### 3.6 Plugin / Extension Standardization (4 tools)
| Need | Affected Tools |
|---|---|
| Plugin structural compatibility (package duplication) | **OpenCode** (#37202) |
| Extension panel fragility after new manifest format | **Claude Code** (#77793, #77785) |
| Plugin marketplace source control | **Claude Code** (#77709, #77977) |

---

## 4. Differentiation Analysis

| Dimension | Claude Code | OpenAI Codex | Gemini CLI | Copilot CLI | Qwen Code |
|---|---|---|---|---|---|
| **Primary user** | Power coders, CI/CD workflows | Enterprise devs, safety-conscious | Google ecosystem, researchers | GitHub users, enterprise | Multimodal, daemon-based |
| **Agent architecture** | Deep subagent fan-out (flawed) | Conservative single-agent + ACP | Native agent framework (skills) | Background agents + voice | CUA driver + daemon sessions |
| **Platform strength** | macOS (Linux partial, Windows weak) | macOS best, Windows broken | Linux best, Wayland weak | Windows best of set | Cross-platform strong |
| **Plugin model** | `.mcpb` extension, marketplaces | MCP connectors | No plugin system (yet) | Limited MCP | Plugin ecosystem emerging |
| **Cost model risk** | **HIGH** – recursion can burn thousands of tokens | **MEDIUM** – dangerous command detection improving | **MEDIUM** – auto-memory retry waste | **LOW** – premium request model | **LOW** – managed memory focus |
| **Key differentiator** | Subagent depth & extension ecosystem | Safety-first dangerous-command filtering | Native agent framework (Google 3 models) | GitHub integration & voice mode | Daemon + multi-workspace + multimodal |
| **Current weakness** | Recursion bugs, Windows data loss | Windows ARM64, app crashes | Agent false success, hang bugs | MCP reliability, voice broken | CI flakiness, silent errors |

**Strategic notes**:
- **Claude Code** has the richest feature surface but is paying for it with critical bugs in subagent orchestration and Windows support
- **Gemini CLI** leans hardest into agent-framework thinking (native skills, auto-memory) but execution reliability lags
- **Copilot CLI** is the most conservative but also the most stable; its Windows support is best-in-class
- **Qwen Code** is the most aggressively expanding feature set (daemon, multimodal, CUA driver) and has the most PR activity
- **Pi** positions itself as a multi-provider aggregator (OpenAI, Bedrock, xAI) but struggles with provider-specific integration bugs

---

## 5. Community Momentum & Maturity

| Tool | Community Activity | Iteration Speed | Bug Profile | Maturity Estimate |
|---|---|---|---|---|
| **Claude Code** | 🔥 Very high (50 open issues) | Fast (daily patches) | Critical bugs in core features | **Mid-growth** – stretching too fast |
| **OpenAI Codex** | 🔥 High (Windows crash storm) | Fast (alpha pre-releases) | Platform stability crisis | **Early-mid** – safety features solid, platform weak |
| **Gemini CLI** | 🔥 High (10 hot issues, all active) | Fast (nightly releases) | Agent reliability regressions | **Early** – promising framework, unstable execution |
| **Copilot CLI** | Moderate (10 issues, 0 PRs today) | Stable (patch releases) | Low severity, MCP friction | **Mature** – stable core, ecosystem maturing |
| **Kimi Code** | ❌ Dormant (0 issues) | Stalled (no releases) | N/A | **Inactive** – possible strategic pause |
| **OpenCode** | 🔥 High (10 issues, 10 PRs) | Fast (v1.18.2 shipped) | Session/data loss critical | **Early-mid** – rapid feature growth, stability catching up |
| **Pi** | Moderate (10 issues, 9 PRs) | Moderate (no release today) | OpenAI integration reliability | **Early** – ambitious provider support, integration bugs |
| **Qwen Code** | 🔥 High (10 issues, 10 PRs) | Very fast (nightly + driver update) | CI flakiness, memory bugs | **Rapid growth** – most new features per day |
| **DeepSeek TUI** | Moderate (10 issues, 10 PRs) | Fast (refactoring trackers) | Windows-specific, IME deadlocks | **Mid-growth** – TUI solid, Windows needs work |

**Maturity ranking** (most → least production-ready):
1. **Copilot CLI** – stable core, fewer features, fewer critical bugs
2. **OpenAI Codex** – good safety, but Windows crisis
3. **Claude Code** – richest features, most critical bugs
4. **DeepSeek TUI** – focused TUI, Windows friction
5. **Qwen Code** – fastest growing, most CI pain
6. **OpenCode** – rapid expansion, session integrity at risk
7. **Gemini CLI** – good framework vision, unreliable execution
8. **Pi** – ambitious but integration quality uneven
9. **Kimi Code** – dormant

---

## 6. Trend Signals

### 6.1 The Subagent Recursion Crisis
The most significant ecosystem-wide signal is that **subagent orchestration is not yet production-safe**. Claude Code's $27.60 single-session cost blow (#69578), Gemini's false-success reports (#22323), and OpenCode's default nesting ban (v1.18.2) all point to a fundamental architectural challenge: current subagent architectures lack deterministic depth/budget enforcement. **Expect all major tools to ship subagent cost caps within 2–3 releases.**

### 6.2 Windows Is the Bleeding Edge
Every non-Microsoft tool has active Windows bugs that block workflows: crash loops, data loss via NTFS junctions, and IME deadlocks. **For developers targeting enterprise Windows users, Copilot CLI is currently the only reliable choice.** This creates a market gap for other tools to invest in Windows QA as a competitive differentiator.

### 6.3 MCP Standardization is Real but Immature
MCP is clearly the winning protocol for tool extensibility, but implementation quality varies widely. The most common failure pattern is silent failure (server "connects" but tools don't appear). **Developers building MCP servers should test against at least 3 CLI tools** to catch cross-implementation bugs.

### 6.4 Cost Visibility is Becoming a Hard Requirement
Following high-profile token waste incidents, **per-session cost break-downs** and **token budgets** are rising as explicit feature requests across Claude Code, OpenAI Codex, and Gemini CLI. This mirrors the broader industry trend toward observability and FinOps for AI operations.

### 6.5 Feature Convergence is Accelerating
Features that were once differentiators are becoming table stakes:
- **Remote session attach** (Copilot CLI #1979 requesting Claude Code-like mobile access)
- **Visual diff review** (Claude Code #33932 mirroring Copilot Edits Review)
- **Session persistence & search** (all tools)
- **Cross-tool migration import** (OpenAI Codex #33426 now imports from both Claude Code and Cursor)

### 6.6 The Plugin Economy Is Emerging—With Growing Pains
Claude Code's extension panel breaking entirely (#77793, #77785) from a new manifest format is a warning: **plugin ecosystems introduce fragility that can halt all customization**. Tools that prioritize backward-compatible plugin APIs (OpenCode's structural tool values fix #37202) will win developer trust.

### 6.7 Safety vs. Speed Tradeoff Intensifies
OpenAI Codex is investing heavily in dangerous-command detection (#33455, #33464). Claude Code's permission denial bugs (#68619) show that safety features can themselves trigger recursion. **The industry is learning that safety must be architected as a first-class constraint**, not bolted on.

---

## Key Takeaway for Technical Decision-Makers

- **Choose Copilot CLI** if Windows support and stability are non-negotiable
- **Choose Claude Code** if you need the richest feature set and accept some volatility
- **Choose Qwen Code** if you want the fastest innovation and are comfortable with CI churn
- **Monitor Gemini CLI** as a future contender—its agent-framework foundation is strong but execution needs 2–3 months of stabilization
- **Avoid Kimi Code** until activity resumes

The next 60 days will be critical: subagent cost controls, Windows fixes, and plugin ecosystem maturity will determine which tools consolidate their positions and which fall behind.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report  
**Data as of 2026-07-16 | Source: github.com/anthropics/skills**

---

## 1. Top Skills Ranking (Most Discussed Pull Requests)

### 🥇 #1298 – Fix `run_eval.py` 0% recall bug (skill-creator)  
**Status:** Open  
**Description:** The core evaluation script `run_eval.py` always reports `recall=0%` for any skill description due to a combination of non‑installed eval artifacts, Windows stream reading failures, and flawed trigger detection (#556 reproduces across 10+ users). This makes the description‑optimization loop optimize against noise. The PR addresses all root causes.  
**Discussion highlights:** Authors and reviewers traced the bug to multiple layers—parallel worker interaction, non‑real skill installation in `.claude/commands`, and Windows subprocess issues. Community consensus calls this the highest‑priority fix in the repo.  
[🔗 PR #1298](https://github.com/anthropics/skills/pull/1298)

### 🥈 #514 – Add `document-typography` skill  
**Status:** Open  
**Description:** A typographic quality‑control skill for AI‑generated documents. Prevents orphan word wrap, widow paragraphs, and numbering misalignment—issues common to all Claude‑generated output.  
**Discussion highlights:** Users praised the focus on a universal pain point; some suggested expanding to LaTeX and markdown.  
[🔗 PR #514](https://github.com/anthropics/skills/pull/514)

### 🥉 #486 – Add ODT skill (OpenDocument text creation)  
**Status:** Open  
**Description:** Enables creation, filling, reading, and conversion of `.odt`/`.ods` files, triggered by mentions of ODF, LibreOffice, or open‑source document formats. Includes template filling and ODT‑to‑HTML parsing.  
**Discussion highlights:** Strong interest from enterprise users working with LibreOffice stacks; concerns about template variable syntax and performance with large files.  
[🔗 PR #486](https://github.com/anthropics/skills/pull/486)

### 4. #210 – Improve `frontend-design` skill clarity & actionability  
**Status:** Open  
**Description:** A thorough revision of the existing frontend‑design skill to make every instruction concrete and executable within a single conversation. Removes vague guidance and structures the skill as a step‑by‑step design system.  
**Discussion highlights:** Reviewers debated the balance between prescriptive rules and creative freedom; ultimately the PR’s focus on “actionability” was widely supported.  
[🔗 PR #210](https://github.com/anthropics/skills/pull/210)

### 5. #83 – Add `skill-quality-analyzer` & `skill-security-analyzer` (meta skills)  
**Status:** Open  
**Description:** Two meta‑skills for evaluating other skills. **Quality‑analyzer** scores skills across structure, documentation, examples, behavior, and safety (5 dimensions). **Security‑analyzer** audits skills for prompt injection, data leakage, and sandbox risks.  
**Discussion highlights:** This was the first proposal for “skill of skills” and generated lively debate about whether meta‑skills belong in the official repo or in a separate governance layer.  
[🔗 PR #83](https://github.com/anthropics/skills/pull/83)

### 6. #1367 – Add `self-audit` skill (v1.3.0) – mechanical verification + reasoning quality gate  
**Status:** Open  
**Description:** A universal skill that audits AI output before delivery. Step 0 verifies every claimed output file exists; then a four‑dimension reasoning audit (damage‑severity priority) checks for logical gaps, hallucination risks, and consistency.  
**Discussion highlights:** Commenters noted parallels with the proposed `agent-governance` skill (Issue #412); the author plans to split into a three‑gate pipeline (see Issue #1385).  
[🔗 PR #1367](https://github.com/anthropics/skills/pull/1367)

### 7. #723 – Add `testing-patterns` skill  
**Status:** Open  
**Description:** Comprehensive skill covering the full testing stack: philosophy (Testing Trophy), unit testing (AAA pattern), React component testing (Testing Library), integration, E2E (Playwright), property‑based testing, and accessibility testing.  
**Discussion highlights:** Highly relevant for both frontend and backend developers; reviewers asked for additional guidance on mocking strategies and snapshot testing.  
[🔗 PR #723](https://github.com/anthropics/skills/pull/723)

### 8. #525 – Add `pyxel` skill for retro game development  
**Status:** Open  
**Description:** Integration with [pyxel-mcp](https://github.com/kitao/pyxel-mcp) for creating retro/pixel‑art/8‑bit games using the Pyxel engine. Covers write → run_and_capture → inspect → iterate workflow.  
**Discussion highlights:** A niche but enthusiastic community; the PR includes detailed example prompts and a game‑loop template.  
[🔗 PR #525](https://github.com/anthropics/skills/pull/525)

---

## 2. Community Demand Trends (from Issues)

| Trend | Key Issues | Description |
|-------|------------|-------------|
| **Security & Trust Boundaries** | #492, #1175, #1385 | Community skills distributed under `anthropic/` namespace create impersonation risk. Users demand clear trust signals, permission scoping, and automated security audits. |
| **Enterprise & Org‑Wide Features** | #228, #1175 | Skills need to be shareable across team members via a central library; also support for SharePoint document handling with proper access control. |
| **Infrastructure Reliability** | #556, #1169, #1061, #202 | The `skill-creator` evaluation loop is broken on Windows and often yields 0% recall. Community wants robust, cross‑platform tooling and a rewritten skill‑creator skill. |
| **New Skill Categories** | #1329, #412, #1385 | Clear demand for **compact‑memory** (symbolic notation for long‑running agents), **agent‑governance** (safety patterns), and **reasoning quality gates** (pre‑delivery audit). |
| **Integration with Other Platforms** | #29, #16 | Users want skills to work with AWS Bedrock and be exposable as MCP servers for programmatic consumption. |
| **Duplicate / Overlapping Skills** | #189 | `document-skills` and `example-skills` plugins contain identical content, wasting context window. Need deduplication and clear role separation. |

**Most‑anticipated new skill directions:**  
1. Agent safety & governance  
2. Compact memory management for long‑running agents  
3. Output quality auditing / reasoning verification  
4. Cross‑platform and MCP interoperability  

---

## 3. High‑Potential Pending Skills (Active PRs Likely to Land Soon)

- **[#1298 – Fix run_eval.py 0% recall](https://github.com/anthropics/skills/pull/1298)** – Blocked by multi‑part bug; once merged it will unblock the entire skill‑creator workflow. Multiple contributors are iterating on the fix.  
- **[#1367 – self-audit skill](https://github.com/anthropics/skills/pull/1367)** – Author is actively pushing a v1.3.0 and has proposed a three‑gate pipeline in Issue #1385; expect rapid iteration.  
- **[#723 – testing-patterns skill](https://github.com/anthropics/skills/pull/723)** – Well‑structured, only minor reviewer feedback remaining. Could merge within weeks.  
- **[#525 – pyxel skill](https://github.com/anthropics/skills/pull/525)** – Author is responsive and the skill is self‑contained; low merge friction.  
- **[#1302 – color-expert skill](https://github.com/anthropics/skills/pull/1302)** – Comprehensive coverage of color systems (ISCC‑NBS, Munsell, OKLCH, etc.). No major objections.

These five PRs have active commit history, maintainer engagement, and clearly defined scope—they are the most likely to land in the next release.

---

## 4. Skills Ecosystem Insight

**The community’s most concentrated demand is for reliability and trust infrastructure**: fixing the broken skill‑creator evaluation loop, establishing security boundaries for community skills, and building governance/audit capabilities—all while users continue to submit high‑quality domain skills (typography, testing, color, OpenDocument) that show the ecosystem maturing from experimentation into production use.

---

## Claude Code Community Digest — 2026-07-16

**Today’s Highlights**  
A new patch release (v2.1.211) adds subagent text forwarding and fixes a permission-preview relay issue, but the community remains focused on a string of critical subagent recursion bugs that can burn hundreds of thousands of tokens and rack up unexpected costs. Several high‑impact Windows‑specific data‑loss bugs and a regression in extensions handling are also drawing attention.

---

### Releases
**v2.1.211** — [Full changelog](https://github.com/anthropics/claude-code/releases/tag/v2.1.211)  
- Added `--forward-subagent-text` flag and `CLAUDE_CODE_FORWARD_SUBAGENT_TEXT` environment variable to include subagent text and thinking in stream‑json output.  
- Fixed permission previews relayed to chat channels not neutralizing bidirectional‑override, zero‑width, and look‑alike characters.

---

### Hot Issues (10 of 50)

1. **[#68619] Subagent spawning and subagent pattern bugs trigger infinite recursion, infinite token usage**  
   *critical, high comment count*  
   Users report subagents recursively spawning 50+ levels deep, ignoring `CLAUDE_CODE_FORK_SUBAGENT=0`, and fetching files over HTTP instead of using Git. Permission denials trigger further agent spawning.  
   [Issue #68619](https://github.com/anthropics/claude-code/issues/68619)

2. **[#69578] Uncontrolled Sub-Agent Recursive Loop ~800k tokens / $27.60 unexpected charge**  
   *concrete cost example*  
   A single session consumed ~800k tokens with nearly zero useful output, exceeding the user’s Max Plan by 5×.  
   [Issue #69578](https://github.com/anthropics/claude-code/issues/69578)

3. **[#33932] VS Code Extension: Diff review UI similar to GitHub Copilot Edits Review**  
   *most upvoted feature request (👍150)*  
   Users want a visual diff‑review panel for Claude Code changes, similar to Copilot’s Edits Review.  
   [Issue #33932](https://github.com/anthropics/claude-code/issues/33932)

4. **[#26904] Add `/delete` command to delete current session**  
   *👍56, recurring ask*  
   Currently no in‑terminal way to delete a session; users must manually remove files.  
   [Issue #26904](https://github.com/anthropics/claude-code/issues/26904)

5. **[#75275] Stale-worktree cleanup on Windows deletes data outside worktree (~800 GB data loss)**  
   *high priority, Windows*  
   `rm -rf` traverses NTFS junctions, deleting target contents instead of following the link. Documented data loss.  
   [Issue #75275](https://github.com/anthropics/claude-code/issues/75275)

6. **[#64799] bwrap sandbox broken on merged-usr systems (Arch)**  
   *platform: Linux*  
   `Can't mount tmpfs on /newroot/lib64` prevents MCP servers from starting; `enableWeakerNestedSandbox` does not help.  
   [Issue #64799](https://github.com/anthropics/claude-code/issues/64799)

7. **[#77793] Extensions tab permanently breaks after installing `manifest_version 0.4 (uv)` extension**  
   *new regression*  
   `TypeError: u._parse is not a function` after installing an extension built with the new uv‑based manifest format.  
   [Issue #77793](https://github.com/anthropics/claude-code/issues/77793)

8. **[#77785] Desktop extensions panel stuck on "Loading extensions…" when local `.mcpb` installed**  
   *same root cause as #77793*  
   IPC handler throws `TypeError: u._parse is not a function`, blocking all extension settings.  
   [Issue #77785](https://github.com/anthropics/claude-code/issues/77785)

9. **[#74990] `/compact` drops entire Available skills system‑reminder**  
   *auto‑compaction also affected*  
   After compaction, skills are silently lost; `/reload-skills` reports "no changes" even though skills are missing.  
   [Issue #74990](https://github.com/anthropics/claude-code/issues/74990)

10. **[#77950] Nested (grandchild) background agents can't message their direct parent**  
    *subagent orchestration bug*  
    When a background agent spawns sub‑agents, the grandchildren’s `SendMessage` never reaches the parent – the parent stalls indefinitely.  
    [Issue #77950](https://github.com/anthropics/claude-code/issues/77950)

---

### Key PR Progress (5 of 5)

1. **[#77977] docs(plugin-dev): document skipLfs marketplace sources**  
   Adds documentation for the `skipLfs` option in `github` and `git` marketplace sources.  
   [PR #77977](https://github.com/anthropics/claude-code/pull/77977)

2. **[#16680] feat: Add recall plugin for conversation context recovery**  
   A plugin that indexes every message and response, allowing users to quickly recover earlier context without scrolling. (Closed, but relevant to community needs.)  
   [PR #16680](https://github.com/anthropics/claude-code/pull/16680)

3. **[#77916] Add code-quality-pipeline plugin**  
   New skill‑based plugin defining two quality gates: per‑file sequential checks and end‑to‑end verification before merge.  
   [PR #77916](https://github.com/anthropics/claude-code/pull/77916)

4. **[#77709] Add settings example: official marketplace only**  
   Example configuration that restricts plugin marketplaces to the official Anthropic marketplace only.  
   [PR #77709](https://github.com/anthropics/claude-code/pull/77709)

5. **[#77705] fix(plugin-dev): validate-settings.sh false-passes marker check**  
   Fixes a bug where a file with no `---` markers would incorrectly pass validation.  
   [PR #77705](https://github.com/anthropics/claude-code/pull/77705)

---

### Feature Request Trends

- **IDE integration** — The most upvoted request (#33932) calls for a VS Code diff review panel. Broader requests for better editor integration (inline suggestions, context menus) continue.  
- **Session management** — `/delete` command (#26904), session visibility (#77463), and better lifecycle control appear repeatedly.  
- **Extension / plugin ecosystem** — GitHub Projects v2 integration (#77971), advisor visibility via hooks (#70611), and stricter marketplace control are rising themes.  
- **Cost visibility & control** — After the high‑profile recursion/cost bugs, users are asking for subagent depth limits, per‑session token budgets, and clearer cost breakdowns.

---

### Developer Pain Points

- **Subagent runaway & token waste** — The #68619 / #69578 class of bugs is the dominant pain point. Recursive spawning, ignoring configuration, high startup token overhead per fan‑out, and invisible background agents create unpredictable costs and data loss.  
- **Windows‑specific sharp edges** — NTFS junction traversal (#75275), PowerShell script‑block bypasses (#74916), and missing headers in Cowork custom gateways (#64414) frustrate Windows users.  
- **Sandbox / MCP reliability** — bwrap failures on merged‑usr Linux (#64799) and the 256‑tool cap regression for custom MCP connectors (#77704) degrade cross‑platform reliability.  
- **Extensions tab fragility** — The new `manifest_version 0.4` format broke the entire Extensions settings panel (#77793, #77785), with no fallback.  
- **Data loss / overwriting** — Multiple reports (e.g., #75685, #74557) of Claude Code overwriting user data (Confluence pages, databases) despite explicit instructions, raising trust concerns around tool‑use safety.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest – 2026-07-16

## Today's Highlights
A stable patch (`rust-v0.144.5`) tightens dangerous-command detection, particularly for forced `rm` forms. On the issue tracker, Windows ARM64 crash-loop (#33381) and the long-standing request to disable 60-second auto-resolve (#28969) dominate discussion. Several internal refactors (MCP cleanup, prompt cache tracking, and external agent migration) landed in pull requests, alongside a new Cursor setup import feature.

## Releases
- **rust-v0.144.5** – Bug fix: improved dangerous-command detection, including more forced `rm` forms, and clearer rejection reasons when commands are denied ([#33455](https://github.com/openai/codex/pull/33455)).  
  Full changelog: [rust-v0.144.4…rust-v0.144.5](https://github.com/openai/codex/compare/rust-v0.144.4...rust-v0.144.5)  
- Pre-release alphas: `rust-v0.145.0-alpha.15`, `.14`, `.13` (no detailed changelogs).

## Hot Issues (10 noteworthy)
1. **[#33381](https://github.com/openai/codex/issues/33381) – Windows ARM64 app crash-loops** (42 comments, 26 👍)  
   ChatGPT.exe exports no N-API symbols; `serialport` addon fails with delay-load error `0xC06D007F`. Community is heavily affected – the app window appears for 10–15 seconds then exits.

2. **[#20214](https://github.com/openai/codex/issues/20214) – Codex App frequent freezes/stutters on Windows 11** (41 comments, 56 👍)  
   Despite sufficient RAM/CPU, UI hangs. Users report the issue persists across updates.

3. **[#28969](https://github.com/openai/codex/issues/28969) – Add setting to disable 60-second auto-resolve** (37 comments, 124 👍)  
   Highest-reacted open issue. Users want control over automatic question resolution in CLI.

4. **[#31846](https://github.com/openai/codex/issues/31846) – GPT-5.3 “Codex Spark” fails with `Unsupported parameter: reasoning.summary`** (29 comments, 34 👍)  
   Pro users cannot use the latest model due to a parameter mismatch in the app.

5. **[#33375](https://github.com/openai/codex/issues/33375) – `serialport.node` delay-load failures cause severe UI lag** (26 comments, 18 👍)  
   Repeated DLL load errors on Windows lead to unresponsive app.

6. **[#32149](https://github.com/openai/codex/issues/32149) – Windows setup fails before UAC prompt** (21 comments, 5 👍)  
   Both installer options non-functional; fresh installs blocked.

7. **[#11011](https://github.com/openai/codex/issues/11011) – Switching threads is very slow** (20 comments, 18 👍)  
   Performance regression in sidebar navigation, persists for months.

8. **[#14601](https://github.com/openai/codex/issues/14601) – Configuration pollution: separate `projects.xxxx.trusted_level` from `config.toml** (16 comments, 54 👍)  
   Users want project-level trusted settings isolated to prevent cross-project leaks.

9. **[#30813](https://github.com/openai/codex/issues/30813) – CLI `/agent` lists subagents but provides no thread selector** (11 comments, 5 👍)  
   Multi-agent workflows lack ability to switch between spawned threads in TUI.

10. **[#33429](https://github.com/openai/codex/issues/33429) – Windows ARM64: ChatGPT desktop (26.707.9981 arm64) crashes on every launch** (2 comments, 4 👍)  
   Duplicate of #33381 but highlights the broken arm64 build specifically.

## Key PR Progress (10 important)
1. **[#33455](https://github.com/openai/codex/pull/33455) – `[release/0.144] fix(core) expand is_dangerous_command`**  
   Cherry-pick enabling dangerous-command detection in danger-full-access mode and expanding forced `rm` detection. (Released as v0.144.5)

2. **[#33467](https://github.com/openai/codex/pull/33467) – Remove template IDs from MCP tool call metadata**  
   Cleans up MCP protocol by stripping `template_id`; reduces surface area for configuration errors.

3. **[#33454](https://github.com/openai/codex/pull/33454) – Track prompt cache write token usage**  
   Adds `cache_write_input_tokens` to usage events – essential for users on usage-based billing.

4. **[#33456](https://github.com/openai/codex/pull/33456) – Move external agent migration into its crate**  
   Refactors import logic for better maintainability; prepares for more import sources.

5. **[#33426](https://github.com/openai/codex/pull/33426) – Add Cursor support to setup import**  
   Extends `/import` to detect and migrate Cursor settings, MCP servers, projects, and chat sessions alongside Claude Code.

6. **[#33444](https://github.com/openai/codex/pull/33444) – Add external agent memory migration**  
   New feature: moves project memory Markdown files into Codex’s memory extension workspace, preserving project scope.

7. **[#33457](https://github.com/openai/codex/pull/33457) – Use final answers in turn history summaries**  
   Improves summarization quality by only including `final_answer` phase messages, reducing commentary noise.

8. **[#33432](https://github.com/openai/codex/pull/33432) – Preserve paginated history for spawned subagents**  
   Fixes a gap where subagents forked from paginated parents lost history; now inherits paginated mode.

9. **[#33464](https://github.com/openai/codex/pull/33464) – Strengthen forced `rm` command detection**  
   Detects `rm -rf` inside control flow, substitutions, and wrapper commands – part of the same safety push as v0.144.5.

10. **[#33423](https://github.com/openai/codex/pull/33423) – Load executor plugin declarations concurrently**  
    Reduces startup latency for remote environments by parallelizing MCP and app connector file reads.

## Feature Request Trends
- **Auto-resolve control** – #28969 (124 👍): demand for a configurable delay or disable switch for CLI’s 60-second question auto-resolve.
- **Configuration isolation** – #14601 (54 👍): separate project-level `trusted_level` from global `config.toml` to avoid pollution.
- **Terminal keybindings** – #33296 (2 comments, 0 👍 but notable): basic vim keybindings missing from CLI TUI, making vim mode unusable.
- **Thread management improvements** – #30813: subagent thread selector in `/agent` list; #29223 (11 comments): thread-management tools missing on fresh sessions.

## Developer Pain Points
- **Windows ecosystem instability** dominates the tracker: ARM64 crash-loop (#33381, #33429), repeated serialport delay-load failures (#33375), setup failures (#32149), system-wide stuttering on task switching (#33382, #33480), and updater crashes (#33320).
- **Performance regressions** – persistent UI freezes (#20214, #33466) and slow thread switching (#11011) on high-spec machines.
- **Model compatibility issues** – GPT-5.3 Spark fails (#31846), GPT-5.6 Luna routes to missing engine (#31967).
- **Developer workflow friction** – missing vim keybindings, no subagent thread selector, stale `MultiAgentV2` branch in legacy watcher (#33468), and image generation producing no visible output (#32153).

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest – 2026-07-16

## Today’s Highlights

The nightly release **v0.52.0-nightly.20260716** ships a critical fix for a `400 Bad Request` error that broke chat continuity after rejecting tool calls. A flurry of security patches landed, including a supply chain RCE fix in CI, a variable expansion bypass fix (GHSA-wpqr-6v78-jr5g), and tighter MCP tool discovery timeout. The community continues to report agent reliability issues, especially around subagent hang, false success after turn limits, and shell command stalls.

## Releases

**v0.52.0-nightly.20260716.g3ff5ba20f** – [Release](https://github.com/google-gemini/gemini-cli/releases/tag/v0.52.0-nightly.20260716.g3ff5ba20f)  
- Fix: Group cancelled tool responses and coalesce consecutive roles to prevent 400 Bad Request (PR #28407).

## Hot Issues (10 noteworthy)

1. **[#22323](https://github.com/google-gemini/gemini-cli/issues/22323) – Subagent recovery after MAX_TURNS reported as GOAL success** (p1, 10 comments)  
   Subagent `codebase_investigator` incorrectly reports success when hitting max turns. Critical because it masks real interruptions and wastes user trust.

2. **[#19873](https://github.com/google-gemini/gemini-cli/issues/19873) – Leverage model’s bash affinity via Zero-Dependency OS Sandboxing** (p2, 8 comments)  
   Proposal to let Gemini 3 use native POSIX tools safely. High interest from advanced users who want the model to operate like a native bash user.

3. **[#24353](https://github.com/google-gemini/gemini-cli/issues/24353) – Robust component level evaluations** (p1, 7 comments)  
   Epic for scaling behavioral evals (76 tests, 6 models). Missing coverage leads to regressions – community eager for more thorough testing.

4. **[#22745](https://github.com/google-gemini/gemini-cli/issues/22745) – Assess AST-aware file reads, search, and mapping** (p2, 7 comments)  
   Investigation into using AST for precise method reading. Could reduce token waste and turn count significantly.

5. **[#21409](https://github.com/google-gemini/gemini-cli/issues/21409) – Generalist agent hangs forever** (p1, 7 comments, 👍8)  
   CLI hangs when deferring to generalist subagent for simple tasks. Workaround: disable subagent use. One of the most upvoted bugs.

6. **[#21968](https://github.com/google-gemini/gemini-cli/issues/21968) – Gemini does not use skills and sub-agents enough** (p2, 6 comments)  
   Community reports the model ignores custom skills even when relevant. Reduces the value of agent customization.

7. **[#26522](https://github.com/google-gemini/gemini-cli/issues/26522) – Stop Auto Memory from retrying low-signal sessions indefinitely** (p2, 5 comments)  
   Auto Memory cycles on low-value sessions, wasting API calls and frustrating users. Needs a processing flag.

8. **[#25166](https://github.com/google-gemini/gemini-cli/issues/25166) – Shell command execution gets stuck with "Waiting input" after command completes** (p1, 4 comments, 👍3)  
   Simple shell commands hang after finishing, forcing session restarts. High impact on daily workflow.

9. **[#21983](https://github.com/google-gemini/gemini-cli/issues/21983) – Browser subagent fails in Wayland** (p1, 4 comments)  
   Browser agent crashes on Wayland with `GOAL` termination. Limits Linux desktop users.

10. **[#20079](https://github.com/google-gemini/gemini-cli/issues/20079) – ~/.gemini/agents/filename.md not recognized if symlink** (p2, 4 comments)  
    Minor but surprising – symlinks in agents directory are ignored. Simple fix would improve configuration flexibility.

## Key PR Progress (10 important)

1. **[#28232](https://github.com/google-gemini/gemini-cli/pull/28232) – ci: fix supply chain RCE by splitting eval workflow** (closed)  
   Mitigates `pull_request_target` vulnerability that exposed API keys. Essential for open-source safety.

2. **[#28319](https://github.com/google-gemini/gemini-cli/pull/28319) – refactor(a2a-server): enforce path trust check prior to environment loading** (open)  
   Prevents untrusted workspace paths from leaking env vars. Adds `AsyncLocalStorage` for isolation.

3. **[#28309](https://github.com/google-gemini/gemini-cli/pull/28309) – fix(cli): improve markdown rendering for CJK text wrapping and __bold__ syntax** (open)  
   Addresses hard line-wrapping in CJK text and misinterpretation of double underscores. Quality-of-life for Asian language users.

4. **[#28386](https://github.com/google-gemini/gemini-cli/pull/28386) – fix(vscode): track activation disposables** (open)  
   Fixes memory leak in VS Code extension where disposables were not correctly tracked (fixes #27790).

5. **[#28412](https://github.com/google-gemini/gemini-cli/pull/28412) – chore(deps): bump systeminformation from 5.25.11 to 5.31.7** (closed)  
   Security-focused dependency update for system information library.

6. **[#28411](https://github.com/google-gemini/gemini-cli/pull/28411) – feat(caretaker): post comment before auto-closing feature requests** (open)  
   Bot will now inform users why feature requests are auto-closed due to current stability focus – better communication.

7. **[#28410](https://github.com/google-gemini/gemini-cli/pull/28410) – fix(core): shorten MCP tools/list discovery timeout so it fails fast** (open)  
   Prevents 10-minute freeze at startup if an MCP server doesn’t respond. Critical for reliability.

8. **[#28407](https://github.com/google-gemini/gemini-cli/pull/28407) – fix(core,a2a): group cancelled tool responses and coalesce consecutive roles** (closed)  
   Ships in today’s nightly – fixes the `400 Bad Request` that forced users to restart chat sessions.

9. **[#28164](https://github.com/google-gemini/gemini-cli/pull/28164) – fix(core): limit recursive reasoning turns per single user request** (open)  
   Caps reasoning loops at 15 turns to protect CPU/API quotas. Prevents infinite loops during complex tasks.

10. **[#28403](https://github.com/google-gemini/gemini-cli/pull/28403) – fix(core): block $VAR and ${VAR} variable expansion bypass** (open)  
    Closes a security bypass for GHSA-wpqr-6v78-jr5g – attacker could exfiltrate `$GITHUB_TOKEN` etc. via shell variable expansion.

## Feature Request Trends

- **Agent self-awareness & configuration**: Users want the CLI to understand its own flags, hotkeys, and limits – and to share subagent trajectories via `/chat share` for debugging.
- **AST & semantic code understanding**: Multiple issues request AST-aware file reads, search, and mapping to reduce token waste and improve navigation.
- **Robust evaluation infrastructure**: Growing demand for component-level behavioral evals to catch regressions before release.
- **Memory system improvements**: Requests to quarantine invalid patches, add deterministic redaction, and avoid endless retries on low-signal sessions.
- **Browser agent resilience**: Need for automatic session takeover, lock recovery, and Wayland support.

## Developer Pain Points

- **Agent hang/false success**: Subagents report `GOAL` success after hitting max turns, and generalist agent hangs indefinitely – both erode confidence.
- **Shell execution stalls**: Commands that finish still show "Waiting input", forcing manual resets.
- **Security bypasses**: Despite earlier fixes, `$VAR` expansion bypass and supply chain RCE in CI show ongoing threat surface.
- **MCP tool discovery freeze**: Startup hangs for minutes if an MCP server misbehaves.
- **Platform friction**: Browser agent fails on Wayland; symlinks in agents directory ignored; CJK text rendering broken.
- **Unwanted subagent activation**: Users report subagents running despite being disabled in settings (since v0.33.0).

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest – 2026-07-16

## Today’s Highlights
Two patches shipped today fixing autopilot hang-on-background-agent and invalid settings.json handling, while the community continued to report friction around MCP OAuth flows and missing tool exposure. A high‑priority data‑loss bug in session navigation (arrow‑key hijack) was opened within the last 24 hours.

## Releases
- **[v1.0.71](https://github.com/github/copilot-cli/releases/tag/v1.0.71)** – `copilot -p --autopilot` no longer hangs when a background shell or agent outlives the turn; it now honours `COPILOT_TASK_WAIT_TIMEOUT_SECONDS` the same way plain `-p` does. The `/subagents` model picker now preserves each agent’s reasoning effort and context tier across reopens.
- **[v1.0.71-3](https://github.com/github/copilot-cli/releases/tag/v1.0.71-3)** – On startup, an invalid `settings.json` now shows a warning identifying the offending value instead of silently ignoring settings. `/terminal-setup` no longer skips setup on terminals without real Kitty keyboard support.

## Hot Issues (10 noteworthy)
1. **[#223 – “Copilot Requests” permission for fine‑grained tokens should be visible for org‑owned tokens](https://github.com/github/copilot-cli/issues/223)** – Enterprise users need org‑owned PATs to support the “Copilot Requests” scope. **31 comments, 76 👍** – high enterprise demand.
2. **[#1477 – “Continuing autonomously (3 premium requests)” after model completion](https://github.com/github/copilot-cli/issues/1477)** – Clarify when autopilot burns premium requests. **11 comments, 18 👍** – closed but still resonates.
3. **[#4024 – Voice mode: all bundled ASR models fail silently](https://github.com/github/copilot-cli/issues/4024)** – `/voice` records audio but every transcription comes back empty for all three models. **8 comments** – blocks voice workflow.
4. **[#4096 – Third‑party MCP server shows “Connected” but tools missing from CLI sessions](https://github.com/github/copilot-cli/issues/4096)** – OAuth token never bridged to sessions. **5 comments** – core MCP reliability pain.
5. **[#1979 – Remote session support for Copilot CLI](https://github.com/github/copilot-cli/issues/1979)** – Attach from mobile/browser like Claude Code. **4 comments, 53 👍** – top feature request.
6. **[#4016 – BYOK (COPILOT_PROVIDER_*) still rejected in --acp mode](https://github.com/github/copilot-cli/issues/4016)** – Regression blocks custom provider usage in ACP. **2 comments** – critical for enterprise.
7. **[#4097 – apply_patch stores deleted binary in session history, permanently exceeding 5 MB limit](https://github.com/github/copilot-cli/issues/4097)** – Large binary deletion causes permanent session bloat. **2 comments** – data loss risk.
8. **[#3421 – Azure DevOps MCP server: “Dangerous Request.Path” error in CLI](https://github.com/github/copilot-cli/issues/3421)** – Works in VS Code but fails in Copilot CLI. **2 comments** – MCP parity issue.
9. **[#4147 – High priority: bare left/right arrow hijacks cursor, discards input](https://github.com/github/copilot-cli/issues/4147)** – Data‑loss bug when arrow keys accidentally trigger session navigation. **0 comments, opened today** – urgent UX.
10. **[#4146 – /resume session picker has invisible selection highlighting](https://github.com/github/copilot-cli/issues/4146)** – Contrast broken compared to other dialogs in the same terminal. **0 comments** – accessibility / usability.

## Key PR Progress
No pull requests were updated in the last 24 hours.

## Feature Request Trends
- **Remote session attach** (#1979, 53 👍) – demand for mobile/browser access mirrors Claude Code.
- **Persistent token/context usage indicator** (#2052, 19 👍) – users want a real‑time status bar showing context window utilisation.
- **1M+ context for Claude Opus models** (#2785, 62 👍; #1610, 18 👍) – parity with Claude Code’s default is strongly requested.
- **Configurable MCP tools for built‑in research agent** (#4076, 2 comments) – users want to extend the `/research` subagent with their own MCP servers.
- **Interactive input variables for plugins** (#4042, 1 comment) – `${input:...}` support to securely prompt for API keys at runtime.

## Developer Pain Points
- **MCP OAuth reliability** – Multiple issues (#4096, #4089, #4085, #4017, #4084, #4086) describe servers that “connect” but never expose tools, or OAuth flows that silently fail. This is the single largest source of frustration in recent weeks.
- **Voice mode broken** (#4024) – all bundled ASR models fail, making `/voice` unusable.
- **Token/context limits** – Binary deletions bloat history (#4097); missing 1M context for Opus (#2785); no visible usage indicator (#2052).
- **Input handling regressions** – Arrow‑key session hijack (#4147), broken Ctrl+A/E shortcuts (#1069), collapsed leading whitespace (#4136), and PTT voice drops during typing (#3896) degrade the interactive experience.
- **Early‑stage MCP parity** – Pagination not followed (#4006), stdio container duplication on `/resume` (#4049), and Docker/hook subprocess issues (#4034, #4049) suggest the MCP implementation is still maturing.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-07-16

## Today's Highlights
The Kimi CLI community saw minimal activity in the last 24 hours. No new releases were published, and no issues were updated. The only notable change is a single open pull request (#2500) that aligns the Python telemetry surface with the TypeScript agent‑core‑v2 schema, adding `trace_id` capture from response headers.

## Releases
*No new releases in the last 24 hours.*

## Hot Issues
*No issues were updated in the last 24 hours.*

## Key PR Progress
**#2500 [OPEN] feat(telemetry): align events with TS schema, add trace_id and missing events**  
*Author: 7Sageer | Created: 2026-07-15 | Updated: 2026-07-16*  
[GitHub PR #2500](https://github.com/MoonshotAI/kimi-cli/pull/2500)

This PR adjusts the Python telemetry to match the event registry defined in the TypeScript rewrite (`agent-core-v2` `events.ts`). Notably:
- The Kimi provider now captures the `x-trace-id` response header via `with_raw_response` for both stream and non-stream modes, making trace IDs available for debugging.
- Missing event types are added to align the Python client with the TS event schema.

No other pull requests were updated or opened in the last 24 hours.

## Feature Request Trends
No feature requests were submitted or updated in the last 24 hours.

## Developer Pain Points
No recurring developer frustrations were reported in the last 24 hours.

---

*Generated from data on github.com/MoonshotAI/kimi-cli. Community activity was low—stay tuned for more updates.*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-07-16

## Today’s Highlights
The team pushed **v1.18.2** with a critical safety change that stops subagents from spawning nested subagents by default, plus a desktop shortcut improvement. On the community side, the most heated discussions continue around **session state loss after auto-updates** (Issue #27859) and **TUI scrolling behavior** (#7648), while a fresh feature request to **keep the legacy layout** (#37012) rallied 7 upvotes in its first day. Several major refactors landed in pull requests, notably around splitting session request preparation and making plugin tools structurally compatible across package boundaries.

## Releases
**v1.18.2** (anomalyco/opencode)  
*Core bugfixes*: Subagents no longer launch nested subagents by default; a configurable `subagent_depth` limit is available for advanced use. Improved default reasoning depth for Meta models.  
*Desktop improvements*: Added `Mod+N` as an additional shortcut for opening a new tab.  
No breaking changes reported.

## Hot Issues (10 noteworthy)

1. **[#27859] Sessions and auth state lost after auto-upgrade** (7 comments, 👍0)  
   *User crewyyyy* reports that upgrading from 1.15.0 to 1.15.1 wiped all chat history and cloud provider authorizations. The database was completely cleared. This is a high‑impact regression for anyone relying on persistent sessions.  
   <https://github.com/anomalyco/opencode/issues/27859>

2. **[#10975] Can use ctrl+c twice to close the TUI?** (21 comments, 👍5)  
   *haimu0427* suggests double‑pressing Ctrl+C to close the terminal UI, a common expectation among Windows users. The feature was closed, but the 21 comments show strong community discussion.  
   <https://github.com/anomalyco/opencode/issues/10975>

3. **[#7648] Setting to prevent TUI scrolling when new messages are streamed in** (9 comments, 👍15)  
   Users want to read earlier messages without the view auto‑scrolling as the agent streams output. The high upvote count indicates a common annoyance.  
   <https://github.com/anomalyco/opencode/issues/7648>

4. **[#37012] Keep legacy layout option** (7 comments, 👍7)  
   *darkine24th* argues that the old layout provided easier access to workspace and options. The new version forces navigation through the app. This fresh issue already has strong support.  
   <https://github.com/anomalyco/opencode/issues/37012>

5. **[#12083] Intranet connection failure** (19 comments, 👍9)  
   *jakiechris* reports being unable to connect in an intranet environment despite trying all known solutions. The issue likely stems from proxy/CSP settings in enterprise networks.  
   <https://github.com/anomalyco/opencode/issues/12083>

6. **[#23011] Windows Desktop shows no models, providers, or history on startup** (6 comments, 👍1)  
   A recurring bug after updates where the Desktop app fails to load any data. Affects multiple versions.  
   <https://github.com/anomalyco/opencode/issues/23011>

7. **[#7690] LSP detection in monorepo not working** (6 comments, 👍27)  
   *evanreichard* notes that eslint and tsserver LSPs don’t activate when starting from the git root of a monorepo; only works inside the subfolder. 27 upvotes signal a widespread pain point.  
   <https://github.com/anomalyco/opencode/issues/7690>

8. **[#27894] LSP causes desktop app to freeze/hang on file read** (4 comments, 👍3)  
   A regression in 1.15.x where enabling LSP completely freezes the app when any file is read internally (e.g., via built‑in file tool).  
   <https://github.com/anomalyco/opencode/issues/27894>

9. **[#27758] Model refused to make a compaction** (6 comments, 👍0)  
   *dphdmn* shares an amusing but serious bug: the model “Big Pickle” generated junk instead of a compaction summary and then sent a thumbs‑up emoji. Highlights fragility in the auto‑compaction logic.  
   <https://github.com/anomalyco/opencode/issues/27758>

10. **[#25746] Compaction updates made the models dumber** (3 comments, 👍2)  
    *spaceemotion* believes recent compaction changes (PR #23870) cause loss of detail, leading to wrong assumptions in new sessions.  
    <https://github.com/anomalyco/opencode/issues/25746>

## Key PR Progress (10 important)

1. **[#37141] Normalize tool and attachment images at settlement** (OPEN)  
   *rekram1-node* fixes a V2 gap where only the `read` tool resized images. Other tools and user‑attached media now get normalized inline, preventing unbounded media bloat and session crashes.  
   <https://github.com/anomalyco/opencode/pull/37141>

2. **[#37194] Fix session overflow detection timing gaps** (CLOSED)  
   *johncoffee715* addresses multiple timing holes: missing pending token checks, incorrect output reservation caps, and absent overflow checks after large tool outputs. Prevents silent session hangs.  
   <https://github.com/anomalyco/opencode/pull/37194>

3. **[#37202] Make plugin tool values structural** (CLOSED)  
   *kitlangton* ensures Effect tools created by external plugins remain valid when plugin and host resolve different copies of `@opencode-ai/plugin`. A key interoperability fix for the plugin ecosystem.  
   <https://github.com/anomalyco/opencode/pull/37202>

4. **[#37212] Expose synthetic session input to plugins** (CLOSED)  
   *kitlangton* adds `ctx.session.synthetic` so long‑running plugins can inject durable synthetic input back into the session. Unblocks advanced plugin workflows.  
   <https://github.com/anomalyco/opencode/pull/37212>

5. **[#37210] Extract session request preparation** (OPEN)  
   *kitlangton* separates provider‑request building from the session runner, making the runner focus on orchestration only. Reduces complexity and enables future non‑persistent session generation.  
   <https://github.com/anomalyco/opencode/pull/37210>

6. **[#37145] Migrate core TUI surfaces to V2 themes** (OPEN)  
   *jlongster* migrates Home, Prompt, and Session surfaces from flat V1 colors to the new component‑based theme V2 API. Part of a broader theming overhaul.  
   <https://github.com/anomalyco/opencode/pull/37145>

7. **[#36341] Show pending command resolution in TUI** (OPEN)  
   *H‑TTTTT* adds a visual indicator for MCP‑backed slash commands while resolution is in progress, fixing the idle look of the TUI.  
   <https://github.com/anomalyco/opencode/pull/36341>

8. **[#35311] Multiple clones of same repo are different projects** (OPEN)  
   *belisoful* closes 14 linked issues by changing project detection to treat multiple clones of the same repository as distinct projects. Reduces many monorepo‑related duplicate project bugs.  
   <https://github.com/anomalyco/opencode/pull/35311>

9. **[#37129] Default advanced features for new users** (CLOSED)  
   *Brendonovich* hides file tree, search, status, and agent selection for fresh installs, then enables them during upgrade. Improves onboarding UX.  
   <https://github.com/anomalyco/opencode/pull/37129>

10. **[#37185] Publish session event when custom tool import fails** (CLOSED)  
    *mgajda* surfaces custom tool load errors in the TUI (via `Session.Event.Error`), matching the pattern used for plugin and skill load failures. Fixes #37186.  
    <https://github.com/anomalyco/opencode/pull/37185>

## Feature Request Trends
- **TUI ergonomics**: Multiple requests for preventing auto‑scroll (#7648), double Ctrl+C to close TUI (#10975), and showing command resolution progress (#34860 via PR #36341).
- **Agent/subagent management**: Custom skills auto‑complete (#25117), hidden subagents leaking to Web UI (#25315), and legacy layout for agent/workspace access (#37012).
- **Compaction & memory**: Users want better compaction quality (#25746, #27758) and a searchable conversation history tool (#11819).
- **Platform parity**: Wayland toggle (#26151), intranet connectivity (#12083), and llama.cpp reasoning budget support (#27957).
- **UI customization**: Keep legacy layout (#37012), display running time for prompts (#27032).

## Developer Pain Points
- **Session/state loss**: Auto‑updates clearing chat history and provider auth (#27859) is the most critical regression.
- **LSP instability**: Monorepo detection fails (#7690) and LSP causes desktop freezes on file reads (#27894) — both heavily upvoted.
- **Compaction degradation**: New compaction logic can produce junk summaries or lose context (#25746, #27758), harming model performance.
- **Plugin/tool compatibility**: Custom tools not shown in autocomplete (#25117), hidden subagents leak (#25315), and plugin tools fail to load due to package duplication (#37202).
- **Desktop loading failures**: App starting empty on Windows (#23011) and “Local Server vlocal” disconnections (#27414) block productivity.
- **Event race conditions**: TUI silently drops `permission.asked` events during project lookup (#27879), leading to tool hang and OOM.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest – 2026-07-16

## Today’s Highlights
OpenAI Codex reliability remains the community’s biggest pain point, with the top issue (#4945) reporting persistent TUI freezes during GPT‑5.5 streaming. On the platform side, two critical Windows fixes landed (#6692, #6681) for Node.js 24 compatibility and terminal title corruption. Two major feature PRs are gaining traction: SQLite session storage (#6594) and an Amazon Bedrock Mantle OpenAI Responses provider (#6216).

## Releases
No new releases in the last 24 hours.

## Hot Issues

1. **[#4945 – openai-codex Connection Reliability Issues](https://github.com/earendil-works/pi/issues/4945)**  
   **75 comments · 30 👍**  
   GPT‑5.5 leaves the TUI stuck on “Working…” with no output, tool calls, or errors. Recovery requires pressing Escape, which aborts the turn. This critical bug heavily impacts user experience; the community has been actively discussing workarounds and root causes for nearly two months.

2. **[#6050 – TUI full redraw clears terminal scrollback](https://github.com/earendil-works/pi/issues/6050)**  
   **14 comments**  
   During active rendering the terminal scrollback jumps to the beginning of the chat. The issue is triggered by frequent UI redraws of widgets, headers, and footers. A core TUI renderer problem is suspected.

3. **[#6657 – Bedrock AWS_PROFILE authentication not working](https://github.com/earendil-works/pi/issues/6657)**  
   **5 comments · 2 👍**  
   Bedrock requests using `AWS_PROFILE` fail with 403 `AccessDeniedException`. Despite a claimed fix in 0.80.7 for a similar issue (#6531), the problem persists for some users, suggesting an incomplete fix.

4. **[#6686 – Pi automatically logs out of GitHub](https://github.com/earendil-works/pi/issues/6686)**  
   **4 comments**  
   A recurring bug (see #2725) where Pi logs out after 15–30 minutes, breaking agent workflows with “Error: No API key for provider: github‑copilot”. Affects both macOS and Linux.

5. **[#6673 – OpenAI Codex exposes raw Cloudflare 520 HTML including client IP](https://github.com/earendil-works/pi/issues/6673)**  
   **3 comments**  
   When Cloudflare returns HTTP 520, Pi displays the full HTML (including the user’s public IP) in the error message and stores it in the session JSONL. A security/privacy concern tied to #6239.

6. **[#6621 – Prevent accidental cache invalidation due to dynamic system prompt](https://github.com/earendil-works/pi/issues/6621)**  
   **4 comments**  
   Users on unified‑memory devices (e.g., AMD Strix Halo) face slow prefill speeds. Dynamic system prompts invalidate the prompt cache, making performance worse. Requests a static prefix to preserve caching.

7. **[#6619 – On Windows dependent extensions mislabeled and show absolute path](https://github.com/earendil-works/pi/issues/6619)**  
   **4 comments**  
   Extensions pulled in by an npm package are incorrectly displayed with an absolute path in the `[Extensions]` banner. Windows‑specific bug.

8. **[#6596 – spawn(taskkill) ENOENT on Node.js 24 – use absolute System32 path](https://github.com/earendil-works/pi/issues/6596)**  
   **3 comments**  
   `killProcessTree()` fails because `spawn("taskkill")` relies on PATH, which may not include System32 in Node.js 24. The `error` event is not caught, crashing the process. Two affected files identified.

9. **[#6690 – Switching back to a session can replay messages out of order](https://github.com/earendil-works/pi/issues/6690)**  
   **2 comments**  
   When jumping between sessions, tool calls may cluster together or messages may be omitted. A data‑integrity issue reported for the first time.

10. **[#6647 – Compaction fails on a single transient stream drop (no retry)](https://github.com/earendil-works/pi/issues/6647)**  
    **2 comments**  
    Compaction performs a single non‑retried summarization call. A mid‑stream socket death (`terminated`) fails the entire compaction, even though normal assistant turns retry that error class.

## Key PR Progress

1. **[#6697 – fix(tui): normalize tabs for terminal output](https://github.com/earendil-works/pi/pull/6697)**  
   Fixes #6696. Pi now emits three spaces instead of a raw TAB byte, preventing auto‑wrapping on logical single‑row overlays that desynchronised subsequent updates.

2. **[#6692 – fix(agent,coding-agent): use absolute System32 path for taskkill/rundll32](https://github.com/earendil-works/pi/pull/6692)**  
   Directly addresses #6596. Replaces PATH‑dependent `spawn` with absolute `C:\Windows\System32` paths and adds error event handlers to prevent crashes on Node.js 24.

3. **[#6651 – feat(ai): add xAI device OAuth and route grok‑4.5 through Responses](https://github.com/earendil-works/pi/pull/6651)**  
   Adds device‑code OAuth alongside `XAI_API_KEY`. Routes `grok‑4.5` through the Responses API with low/medium/high reasoning; other xAI models stay on Completions. Closes #6461.

4. **[#6681 – windows: reset pi terminal title after checking npm packages](https://github.com/earendil-works/pi/pull/6681)**  
   Fixes #6629. On Windows the npm check permanently changes the terminal title; this PR restores the original title.

5. **[#6671 – add usage info to branch summary, compaction and tool result entries](https://github.com/earendil-works/pi/pull/6671)**  
   Adds usage metadata to branch summaries, compaction entries, and tool results. Also notes the need to extend the `ToolResultEvent` to optionally include usage.

6. **[#6683 – fix(coding-agent): accept colon‑qualified skill names](https://github.com/earendil-works/pi/pull/6683)**  
   Plugin‑namespaced skills like `inc:ship-it` were flagged as “Skill conflicts” because the validator only allowed single unqualified segments. Now correctly recognises them.

7. **[#6594 – feat: sqlite session storage](https://github.com/earendil-works/pi/pull/6594)**  
   A large change: adds `retainedTail` to compaction entries, changes `getPathToRoot` to stop at the last compaction, and implements SQLite‑backed session storage to improve performance.

8. **[#6680 – parse extension package name in case of dependent extension](https://github.com/earendil-works/pi/pull/6680)**  
   Partial fix for #6619. Correctly parses the extension package name when resolving dependencies, addressing the mislabelling on Windows.

9. **[#6533 – fix: Codex compaction returns “Model not found” for gpt‑5.6‑luna](https://github.com/earendil-works/pi/pull/6533)**  
   Compaction via the OpenAI Codex API fails with 404 for `gpt‑5.6‑luna` because the API maps the model ID to an unrecognised tier‑suffixed slug. Requires changes to the no‑tools registry.

10. **[#6216 – feat: Add Amazon Bedrock Mantle OpenAI Responses provider](https://github.com/earendil-works/pi/pull/6216)**  
    Adds a new provider for Amazon Bedrock Mantle’s OpenAI Responses API, using OpenAI’s Bedrock provider. Supersedes an earlier approach and brings another cloud backend option.

## Feature Request Trends

The following directions are emerging from recent issues and PRs:

- **Session management** – Browse, rename, organise into folders, and close/archive sessions (#6674).  
- **Extension API hooks** – A `stream_chunk`/`on_token` hook for real‑time advisory patterns (#6693), and the ability to override a tool’s rendering without replacing its execution (#6700).  
- **Ephemeral model/thinking changes** – In‑session changes should not affect global defaults; a single “Default model” setting is desired (#5263).  
- **Platform‑specific improvements** – Nix integration (#2310), improved Windows support (multiple issues), and cache optimisation for unified‑memory devices (#6621).  
- **RPC enhancements** – Stream bash execution results (#6703) and correlate output/failures with originating prompts (#6694).  
- **Orchestration examples** – A standalone frontier orchestrator extension (#6691).  

## Developer Pain Points

- **OpenAI Codex unreliability** – The most heated issue (#4945) continues to plague users with streaming freezes and silent failures.  
- **TUI rendering glitches** – Scrollback clears (#6050), transcript replay on width change (#6702), and missing code‑block borders (#6682) degrade the interactive experience.  
- **Windows compatibility** – Multiple bugs around taskkill PATH, terminal titles, and extension path display suggest Windows is not a first‑class target.  
- **Authentication churn** – GitHub automatic logout (#6686) and ChatGPT OAuth silently overridden by `OPENAI_API_KEY` (#6689) are frustrating.  
- **Compaction fragility** – A single stream drop kills compaction (#6647), and Codex compaction fails for `gpt‑5.6‑luna` (#6533).  
- **Cache invalidation** – Dynamic system prompts defeat prompt caching on slow‑prefill hardware (#6621).  
- **Session integrity** – Out‑of‑order playback (#6690) and persisted error messages (#6701) erode trust in session history.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

Here is the **Qwen Code Community Digest** for **2026-07-16**, based on the provided GitHub data.

---

# Qwen Code Community Digest | 2026-07-16

## 1. Today's Highlights
Today’s activity centers on stabilizing the daemon ecosystem and refining the developer experience. A major **cua-driver-rs v0.7.2** release (with relative-coordinate support) is now baked into installers, while multiple CI failures related to E2E testing are being actively patched. On the feature front, there is a strong push toward **multi-workspace daemon sessions** and **improved sub-agent communication**, reflecting a community desire for more scalable, production-ready agent orchestration.

## 2. Releases
Two releases landed in the last 24 hours:

- **`v0.19.10-nightly.20260716.506ce0a1a`**: A nightly release primarily containing a documentation fix to cap PR scope after repeated review rounds.
- **`cua-driver-rs-v0.7.2`**: A significant update to the CUA driver (vendored under `packages/cua-driver`). Key highlights include:
    - **Relative-coordinate fork**: Enables more flexible point-and-click automation.
    - **macOS**: Codesigned, notarized universal binary + `QwenCuaDriver.app`.
    - **Linux/Windows**: x86_64 + arm64 binaries (unsigned).
    - **Impact**: This update is now being rolled into mainline installers via PR #6980.

## 3. Hot Issues (10 Noteworthy Items)

1.  **[#6378] RFC: Support multiple workspaces in one `qwen serve` daemon**  
    *Comments: 23*  
    A high-engagement RFC proposing a shift from `1 daemon = 1 workspace` to `N workspaces`. This is the most commented-on issue this week, indicating strong community interest in multi-project management without launching separate daemons.  
    [Issue Link](https://github.com/QwenLM/qwen-code/issues/6378)

2.  **[#4782] Tracking: ACP Streamable HTTP Transport**  
    *Comments: 5*  
    Implementation of the Agent Client Protocol (ACP) at `/acp` is now live. This enables native connections from editors like Zed, Goose, and JetBrains without adapters, a major step toward interoperability.  
    [Issue Link](https://github.com/QwenLM/qwen-code/issues/4782)

3.  **[#5239] Sub-agent and main session communication is weak**  
    *Comments: 4*  
    A detailed user report highlighting that sub-agents lack a proper notification mechanism. The user had to resort to file-based monitoring hacks, underscoring a critical gap in the multi-agent architecture.  
    [Issue Link](https://github.com/QwenLM/qwen-code/issues/5239)

4.  **[#6936] `isManagedMemoryAvailable()` ignores setting, wasting context**  
    *Comments: 3*  
    A logic bug where disabling `enableManagedAutoMemory` still injects a ~7-9 KB memory instruction block. This is a "context tax" that frustrates users optimizing prompt budgets.  
    [Issue Link](https://github.com/QwenLM/qwen-code/issues/6936)

5.  **[#6962] Persist channel source metadata for daemon sessions**  
    *Comments: 2*  
    A request to pass `sourceType: 'channel'` through session creation. This would improve traceability in transcripts and enable channel-specific routing for daemon sessions.  
    [Issue Link](https://github.com/QwenLM/qwen-code/issues/6962)

6.  **[#6996] Custom OpenAI-compatible provider fails with generic error**  
    *Comments: 2*  
    A frustrating bug where the real underlying error (e.g., auth failure) is discarded before logging, leaving users with a generic "Connection error." This impacts all custom provider configurations.  
    [Issue Link](https://github.com/QwenLM/qwen-code/issues/6996)

7.  **[#6946] Bounded Todo continuation for daemon sessions**  
    *Comments: 2*  
    A proposal for an opt-in "Todo Stop Guard" that allows up to two follow-up model calls after a `todo_write` command, preventing premature termination of long-running work chains.  
    [Issue Link](https://github.com/QwenLM/qwen-code/issues/6946)

8.  **[#6970] MCP tool names rejected by strict providers**  
    *Comments: 2*  
    Tool names containing dots (e.g., `mcp__zybio__literature.search_pubmed`) work with Gemini but fail on OpenAI/Anthropic endpoints due to stricter validation rules. A middleware sanitization request.  
    [Issue Link](https://github.com/QwenLM/qwen-code/issues/6970)

9.  **[#6943] Feature Request: "Auto" output language mode**  
    *Comments: 2*  
    Users want the LLM to follow the input language automatically rather than being locked by a strict `MUST` rule in `output-language.md`. This is a UX improvement for polyglot teams.  
    [Issue Link](https://github.com/QwenLM/qwen-code/issues/6943)

10. **[#6988] Support full-turn multimodal routing for text-only models**  
    *Comments: 1*  
    A request to enable a full-turn handoff to a vision model when the primary model is text-only, rather than just a single image overlay. This addresses a gap in complex multimodal workflows.  
    [Issue Link](https://github.com/QwenLM/qwen-code/issues/6988)

## 4. Key PR Progress (10 Important Pull Requests)

1.  **[#6993] Headless: Run concurrency-safe tool calls in parallel**  
    *Status: Open*  
    Brings headless (`qwen -p`) tool execution in line with the interactive TUI by running safe tool calls in parallel instead of sequentially. Expected to significantly speed up batch/scripted workflows.  
    [PR Link](https://github.com/QwenLM/qwen-code/pull/6993)

2.  **[#6984] Per-model sub-agent concurrency limits**  
    *Status: Open*  
    Introduces `agents.maxParallelAgentsByModel` to prevent a single model from being overwhelmed by background agents, complementing the global cap.  
    [PR Link](https://github.com/QwenLM/qwen-code/pull/6984)

3.  **[#6895] Propagate trusted invocation context**  
    *Status: Open (In Review)*  
    A security-oriented PR introducing `InvocationContextV1` to trace the origin of a request (CLI, ACP, daemon, channel, etc.). Critical for auditing and access control.  
    [PR Link](https://github.com/QwenLM/qwen-code/pull/6895)

4.  **[#6967] Require explicit approval to exit Plan mode**  
    *Status: Open*  
    Prevents the model from automatically exiting Plan mode without user confirmation, giving developers better control over plan-vs-execute boundaries.  
    [PR Link](https://github.com/QwenLM/qwen-code/pull/6967)

5.  **[#6995] Filter Web Shell sessions by source**  
    *Status: Open*  
    Adds `sourceType: default` to new Web Shell sessions and allows filtering by source. This improves session management in multi-client environments.  
    [PR Link](https://github.com/QwenLM/qwen-code/pull/6995)

6.  **[#6931] Tighten VP-mode controls and fix shell tool overlap**  
    *Status: Open*  
    Fixes five rendering bugs in Viewport mode, including a sticky task panel crowding the conversation view.  
    [PR Link](https://github.com/QwenLM/qwen-code/pull/6931)

7.  **[#6506] Optimize large paste performance**  
    *Status: Open*  
    A long-standing performance fix that bypasses per-character keypress events for large pastes, reducing processing time from 1.7 seconds to near zero for 260K chars.  
    [PR Link](https://github.com/QwenLM/qwen-code/pull/6506)

8.  **[#6999] Replay ChatRecord history in readonly WebShell**  
    *Status: Open*  
    Adds a deterministic replay pipeline for viewing past chat sessions. A significant UX win for debugging and reviewing agent history.  
    [PR Link](https://github.com/QwenLM/qwen-code/pull/6999)

9.  **[#6953] Auto output language follows user input**  
    *Status: Open*  
    Directly addresses Issue #6943, making `auto` dynamically match the user's input language rather than defaulting to a detected system locale.  
    [PR Link](https://github.com/QwenLM/qwen-code/pull/6953)

10. **[#6998] Recover from generated-artifact CI stalls**  
    *Status: Open*  
    Improves the autonomous auto-fix bot to handle CI failures caused by outdated generated artifacts (e.g., schemas), preventing the bot from getting permanently stuck.  
    [PR Link](https://github.com/QwenLM/qwen-code/pull/6998)

## 5. Feature Request Trends
The most requested directions from today’s Issues and PRs indicate a clear community focus on **productionization and scalability**:

- **Multi-workspace & Multi-session Daemons**: A single daemon managing several projects (#6378) is the top trend.
- **Agent Interoperability**: Persistent support for **ACP protocol** (#4782) and **interactive card channels** (DingTalk, #6443) for richer integrations.
- **Granular Sub-Agent Control**: Better communication/subscription mechanisms between main and sub-agents (#5239) and per-model concurrency limits (#6984).
- **Reduced Friction**: Features like **auto language mode** (#6943), **full-turn multimodal routing** (#6988), and **aggregated notifications** (shell reminders at task end, #6898) aim to reduce user interruptions and manual overrides.

## 6. Developer Pain Points
Recurring frustrations visible in today’s data include:

- **Memory & Context Waste**: Bugs like the managed memory setting being ignored (#6936) and fractional session limits (#6914) show a sensitivity to context length inefficiencies.
- **CI Flakiness**: Multiple auto-filed CI failure issues (e.g., #6938, #6940, #6979) suggest the E2E test suite is a source of friction, particularly for bot-driven workflows.
- **Silent Failures**: The generic `Connection error` for custom providers (#6996) and lost channel startup errors (#6909) represent a pattern of swallowing real errors, making debugging opaque.
- **MCP Validation Gaps**: Tool names with dots failing on strict providers (#6970) and the trusted MCP `readOnlyHint` bypass issue (#6917) highlight immaturity in the MCP integration layer.
- **Trust & Security Mutations**: The trust-status preview check mutating the config cache (#6831) is a subtle but dangerous state bug.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-07-16

## Today’s Highlights
No new releases landed in the last 24 hours, but the repository saw a burst of issue and PR updates. Maintainer Hmbown pushed several large refactoring trackers (v0.8.63–71) to split monolithic Rust modules, while community‑reported Windows‑specific bugs (freezes, IME deadlocks, input leakage) continue to dominate the closed issues. On the PR side, the **v0.8.68 stop‑ship repair batch (#4332)** and a **five‑fix performance hot‑path overhaul (#3902)** were merged, signalling the team is actively stabilising the TUI before the next major release.

## Releases
None reported in the last 24 hours.

## Hot Issues
*(10 noteworthy issues, selected for community impact or roadmap significance)*

1. **#2487 – Turn stalled – no completion signal received** ⭐ 1  
   *SnowAmberX* – Closed after 20 comments. The terminal freezes in `yolo` mode; sending `continue` does not resume. A recurring reliability pain point for users of the “fast” execution path.  
   [Issue #2487](https://github.com/Hmbown/CodeWhale/issues/2487)

2. **#1812 – TUI freeze on Windows 11 (crossterm poll)**  
   *aboimpinto* – Closed with 11 comments. Two captured freeze events on Windows 11 where the UI becomes unresponsive but the process stays alive. Debug logs point to a deadlock in the input event poll loop.  
   [Issue #1812](https://github.com/Hmbown/CodeWhale/issues/1812)

3. **#2261 – Crash on Windows: input leaks into PowerShell**  
   *xiaowuguiya888* – Closed, 6 comments. After an AI reply, input focus drops to the shell, causing typed text to be executed as cmdlets. Dangerous UX bug for Windows users.  
   [Issue #2261](https://github.com/Hmbown/CodeWhale/issues/2261)

4. **#1835 – IME composition deadlock on Windows (Sogou)** ❤️ 1  
   *TravisWangchn* – Closed. Input field becomes unresponsive when using a Chinese IME. Root cause appears to be a deadlock between crossterm event handling and IME composition events.  
   [Issue #1835](https://github.com/Hmbown/CodeWhale/issues/1835)

5. **#3368 – Security hardening / code‑scanning fixes (v0.8.64)**  
   *Hmbown* – Open, 29 comments. A dedicated tracker for CodeQL findings and advisory‑class reports, keeping the public release gate clear without exposing exploit details. Critical for release readiness.  
   [Issue #3368](https://github.com/Hmbown/CodeWhale/issues/3368)

6. **#1675 – Chinese garbled characters in Agent real‑time output**  
   *AiurArtanis* – Open, 3 comments. When the Agent runs tasks, Chinese characters display as mojibake. Affects users writing for Obsidian/Word. Localisation regression.  
   [Issue #1675](https://github.com/Hmbown/CodeWhale/issues/1675)

7. **#1512 – Mouse scroll only shows user messages, not model output**  
   *YuSeventeen* – Open, 4 comments. Scrolling backwards in the TUI skips the AI’s responses. Basic UI navigation usability issue.  
   [Issue #1512](https://github.com/Hmbown/CodeWhale/issues/1512)

8. **#864 – Output truncated on Windows 11**  
   *YangLuLu107* – Open, 4 comments. Model output is cut off prematurely; screenshot shows incomplete rendering.  
   [Issue #864](https://github.com/Hmbown/CodeWhale/issues/864)

9. **#1338 – Crash when pressing Enter to add supplementary info**  
   *wangchneyu* – Closed, 4 comments. While a task is running, pressing Enter to add follow‑up instructions causes the GUI to crash instead of queuing the input.  
   [Issue #1338](https://github.com/Hmbown/CodeWhale/issues/1338)

10. **#1607 – Request: more currency units for token cost**  
    *xyz‑225648* – Closed, 7 comments. User wants RMB (¥) and other currencies displayed alongside the current USD estimate. Small enhancement with broad apPEAL.  
    [Issue #1607](https://github.com/Hmbown/CodeWhale/issues/1607)

## Key PR Progress
*(10 important pull requests, focused on fixes, refactors, and roadmap items)*

1. **#4332 – Stopship repair: truthful TUI state and routing (v0.8.68)**  
   *Hmbown* – Merged. Fixes live regressions by treating blank/malformed provider config as unconfigured, restoring correct state display.  
   [PR #4332](https://github.com/Hmbown/CodeWhale/pull/4332)

2. **#3902 – Performance: fix five render/input hot paths**  
   *Hmbown* – Merged. Addresses #3896–#3900: duplicate sidebar rows, stale selection columns, double‑report of items in cockpit, inflated render calls caused by empty‑list edge cases.  
   [PR #3902](https://github.com/Hmbown/CodeWhale/pull/3902)

3. **#4088 – Preserve native selection when mouse capture is off**  
   *nightt5879* – Merged. Fixes #4026 by leaving xterm alternate‑scroll mode disabled when `--no-mouse-capture` is active, enabling proper native drag‑selection.  
   [PR #4088](https://github.com/Hmbown/CodeWhale/pull/4088)

4. **#4044 – Localize dynamic welcome screen**  
   *nightt5879* – Merged. The first‑run onboarding now renders translated `Next:` steps, including `zh-Hant` locale.  
   [PR #4044](https://github.com/Hmbown/CodeWhale/pull/4044)

5. **#4087 – Refactor: split hook config and executor**  
   *cyq1017* – Open. Moves `HooksConfig` into `hooks/config.rs` and `HookExecutor` into its own submodule, improving reviewability.  
   [PR #4087](https://github.com/Hmbown/CodeWhale/pull/4087)

6. **#4084 – Fix fleet: reject retired `model_class_hint` / `route_tier` aliases**  
   *cyq1017* – Merged. Enforces canonical `loadout` field in profile files, ensuring round‑trippable generation.  
   [PR #4084](https://github.com/Hmbown/CodeWhale/pull/4084)

7. **#3969 – Per‑sub‑agent provider routing (held for v0.8.68)**  
   *heyparth1* – Closed (held). Adds per‑profile provider/model/loadout fields. Targeted for the fleet lane; requires rebasing onto #4093.  
   [PR #3969](https://github.com/Hmbown/CodeWhale/pull/3969)

8. **#3818 – Fix: expand active tool‑run summaries**  
   *cyq1017* – Merged. Closes an edge case where collapsing a dense tool‑run summary before it flushes into history caused inaccurate transcript state.  
   [PR #3818](https://github.com/Hmbown/CodeWhale/pull/3818)

9. **#3761 – Defer startup maintenance cleanup**  
   *nightt5879* – Merged. Moves stale tool‑output spillover pruning and old‑session cleanup off the synchronous interactive path into a delayed background thread.  
   [PR #3761](https://github.com/Hmbown/CodeWhale/pull/3761)

10. **#4372 – Fix skills: preserve inline task text**  
    *nightt5879* – Merged. Ensures `$<skill> do X`, `/<skill> do X`, and `/skill <skill> do X` all dispatch the trailing task text in the same turn.  
    [PR #4372](https://github.com/Hmbown/CodeWhale/pull/4372)

## Feature Request Trends
- **Localisation & i18n** – Users repeatedly request full Chinese (Simplified/Traditional) support for the TUI, including garbled‑text fixes, welcome screens, and currency display (RMB in token cost).
- **Auto‑update & version checking** – A community feature request (#1678) wants integrated update notification and GitHub link inside the app.
- **Configurability from the TUI** – Several issues (#3303, #1607) ask for in‑app editing and persisting of config keys (e.g., sub‑agent routing, cost units) rather than editing `config.toml` externally.
- **Slash command integration** – Maintainer‑driven, but the roadmap (#1887–#1892) aims to make slash commands (e.g., `/help`, `/task`, `/note`) first‑class citizens with persistence and workbench routing.
- **Cross‑platform clipboard fidelity** – Issue #1853 (closed) reports that terminal‑native copy includes visual line breaks; feature request to strip formatting when copying from the TUI.

## Developer Pain Points
1. **Windows stability** – The top complaint: frequent freezes (crossterm poll deadlocks), crashes on input, IME deadlocks, and input leakage to the shell. These collectively affect the largest segment of the user base.
2. **TUI unresponsiveness** – The “turn stalled – no completion signal” error (#2487) indicates a deeper reliability issue in the turn‑monitoring state machine, particularly in `yolo` mode.
3. **Mouse interaction friction** – Scroll‑wheel only shows user messages (#1512), and native text selection is broken when mouse capture is on (#4088). Users expect familiar terminal behaviour.
4. **Cross‑distribution compatibility** – Glibc version requirements (#1067) prevent use on older Linux distributions, a common deployment scenario for developers.
5. **High complexity of monolith files** – While not a user‑facing pain point, the maintainer’s aggressive refactoring trackers (#3306, #3314, #3313, etc.) reflect an internal burden of 150‑field App structs and 2,400‑line runtime managers that make contributions and debugging harder.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/boom7sss/agents-radar).*