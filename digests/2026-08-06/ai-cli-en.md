# AI CLI Tools Community Digest 2026-08-06

> Generated: 2026-08-06 03:15 UTC | Tools covered: 9

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

# Cross-Tool Comparison Report — AI CLI Developer Tools
**2026-08-06 Community Digest Analysis**

---

## 1. Ecosystem Overview

The AI CLI tool ecosystem is in a phase of rapid maturation: nine actively maintained tools shipped updates within a single 24-hour window, ranging from enterprise governance controls (Claude Code marketplace wildcards) to experimental voice interfaces (Qwen Code Live Voice). The competitive frontier has shifted from raw code-generation quality to reliability infrastructure — MCP interoperability, multi-agent orchestration, data integrity, and permission safety now dominate issue trackers across all tools. The platform split is increasingly clear: Claude Code, Copilot CLI, and Codex optimize for enterprise/cloud-platform lock-in, while OpenCode, Pi, and DeepSeek TUI compete on openness and extensibility. Notably, no tool escaped the day without security- or data-integrity-related findings, signaling that correctness under agentic autonomy is the industry's central unsolved problem.

---

## 2. Activity Comparison

| Tool | Issues (24h) | PRs (24h) | Releases (24h) |
|---|---|---|---|
| Claude Code | 10 highlighted¹ | 5 | v2.1.223 |
| OpenAI Codex | 10 highlighted¹ | 10 | rust-v0.146.1 + 5 alphas |
| Gemini CLI | 10 highlighted¹ | 10 | v0.54.0, v0.55.0-preview.1, nightly |
| GitHub Copilot CLI | 10 highlighted¹ | 0 | v1.0.79-2 … v1.0.79-5 (4 builds) |
| Kimi Code CLI | 3 (all) | 3 (all) | None |
| OpenCode | 10 highlighted¹ | 10 | v1.18.14 |
| Pi | 10 highlighted¹ | 10 | None |
| Qwen Code | 38 (all) | 50 (all) | v0.21.6, nightly, desktop-v0.1.0 |
| DeepSeek TUI / CodeWhale | 1 (all) | 14 (all) | None |

¹ Digest-highlighted selections; the digest does not state the total updated-issue count for these tools. Exact totals are reported for Kimi, Qwen Code, and DeepSeek TUI. Copilot CLI's 0-PR count is explicitly stated.

**Read:** Qwen Code leads raw throughput by a wide margin. Codex, Gemini, OpenCode, and Pi maintain a healthy ~10 PR/day cadence. Copilot CLI ships frequently but with zero community-merged PRs, reflecting a centrally controlled release process.

---

## 3. Shared Feature Directions

**Persistent memory & session continuity** — Kimi CLI's Memory System (#1283, 19 comments, open since February) is the flagship request; Gemini's Auto Memory hardening (#26522, #26525) and Claude Code's portable transcripts (#81946) address the same gap from the maintainer side. Codex persists multi-agent usage hints in world state (#37189); OpenCode adds session JSON export (#40781).

**MCP interoperability hardening** — The most cross-cutting reliability theme: Claude Code reports silent parameter loss on MCP calls (#72228, #84362; measured 6.2% field loss); Copilot CLI fails on non-standard `server/discover`, 3LO OAuth, and GHEC policy fetch (#4370, #4371, #4378); Gemini fixes MCP OAuth token refresh (#28481); Kimi's MCP tools abort mid-task on unsupported media (#2588); Codex bounds MCP handshake requests (#37168). Every MCP-consuming tool has at least one open interop defect.

**Multi-agent orchestration reliability** — Gemini's false-success subagent termination (#22323) and generalist hangs (#21409); Codex's cross-provider encrypted-task failures (#34833, #33551); Copilot's unexpected cross-family delegation (#4377); DeepSeek's interrupted-subagent resume (#5242). Common demand: observability of subagent trajectories and cost transparency.

**Workspace/project isolation** — Codex multi-root workspaces (#2909, 143 👍) and per-workspace chat scoping (#25319); Claude Code session pinning/sorting (#84368); Copilot v1.0.79-5 multi-session management; OpenCode's hosted workspace execution PRs (#40784, #38790).

**Terminal/UI configurability** — Alt-screen control (Copilot #1799), light-background support (Codex #2020), OSC 8 hyperlinks (Codex #25934; Pi #7399), tmux/ConPTY rendering fixes (Qwen #8580, #7897; DeepSeek #5192), and textarea viewport polish (Codex #37166; Gemini #37166-adjacent TUI work).

**Compaction/context-window control** — Pi's auto-compaction never triggers before provider overflow (#6879); Gemini adds `autoCompressOnOverflow` (#28488); OpenCode's compaction corrupts thinking blocks into a 400 loop (#39291); Pi requests separate thinking budgets for compaction (#7553).

---

## 4. Differentiation Analysis

| Tool | Distinctive focus | Primary target |
|---|---|---|
| **Claude Code** | Enterprise governance (owner-wildcard marketplace controls, managed settings), largest plugin/skill ecosystem | Enterprise dev teams, long-running agentic workflows |
| **OpenAI Codex** | Multi-agent orchestration (MultiAgentV2), cyber-model safety circuit breakers, aggressive alpha train | OpenAI-platform-centric teams, VS Code users |
| **Gemini CLI** | Google ecosystem integration (Cloud Workstations OAuth, Code Assist fallback), behavioral eval infrastructure | GCP/Android developers |
| **GitHub Copilot CLI** | GitHub-centric BYOK/BYOM, sandboxed build wrappers, centrally shipped releases | GitHub Enterprise customers |
| **OpenCode** | Open-source V2 architecture rewrite, marketplace/plugin demand, LAN provider discovery | OSS community, self-hosters |
| **Pi** | Provider-agnostic (Bedrock, Qwen, Copilot), terminal-first purism, XDG compliance | Linux/TUI power users, multi-provider setups |
| **Qwen Code** | CLI/desktop/WebShell convergence, Live Voice, tmux-backed interactive subagents | Qwen model users, Windows/WSL cross-platform |
| **Kimi Code CLI** | ACP protocol ecosystem (voice clients), minimal footprint, config-driven | Moonshot API users, hands-free/voice workflows |
| **DeepSeek TUI** | Runtime API completeness for managed clients (MCP/memory/goal/skill lifecycle) | Managed-client builders, Rust/TUI enthusiasts |

The strategic split is between **closed-loop platforms** (Claude, Copilot, Codex) investing in governance and cloud integration, and **open aggregators** (Pi, OpenCode, DeepSeek) investing in provider neutrality and API surface area.

---

## 5. Community Momentum & Maturity

- **Rapid iteration / high throughput:** Qwen Code (38 issues, 50 PRs, 3 releases) is iterating fastest but carries the most P1 security findings. Codex sustains a 10-PR/day queue alongside a visible alpha line. OpenCode is mid-architecture-rewrite with high PR velocity. DeepSeek TUI shows strong maintainer momentum (14 PRs) but minimal community issue traffic — early-stage and builder-driven.
- **Stable / release-driven:** Copilot CLI ships 4 builds with zero community PRs — centralized control, high cadence. Claude Code's 5-PR queue and single release suggest consolidation: the platform is feature-complete enough that PRs target security hardening and bug fixes, not new capability.
- **Moderate steady:** Gemini and Pi maintain consistent 10-PR days with sustained community engagement. Pi's long-running threads (XDG config #534, 23 👍; auto-compaction #6879, 13 👍) indicate a loyal but smaller user base. Kimi's 3-issue day reflects a niche community with high signal-to-noise.
- **Community signal leaders:** Codex multi-root workspaces (143 👍), Copilot alt-screen (8 👍), Gemini generalist hangs (8 👍), OpenCode marketplace (23 👍), Pi XDG compliance (23 👍) are the most strongly demanded features per tool.

---

## 6. Trend Signals

1. **MCP is table stakes, but interop quality is the bottleneck.** Silent parameter loss, broken OAuth flows, and non-standard server discovery appear across Claude, Copilot, Gemini, and Kimi. The 6.2% measured parameter-loss rate (Claude #84362) is the kind of data point that should drive cross-tool testing standards.
2. **Data integrity is the top risk category.** Claude Code's fabricated user messages (#84369), Kimi's non-UTF-8 byte corruption (#2591), and OpenCode's compaction-induced 400 loop (#39291) all corrupt state silently. Expect pressure for checksummed/verified tool I/O.
3. **Security hardening is shifting from policy to enforcement.** Fail-closed hook exceptions (Claude #84364), cyber-model circuit breakers (Codex #37190), read-only shell classifier bypasses (Qwen #8582), and seatbelt profile fallbacks (Gemini #28551) show the industry treating agent safety as a runtime-safety problem, not a prompt problem.
4. **Multi-agent is moving to production and exposing real gaps:** cross-provider protocol incompatibility (Codex), false-success reporting (Gemini), and opaque cost delegation (Copilot). Subagent observability will be the next differentiator.
5. **Context/compaction management is becoming first-class UX.** Auto-compaction, context-window budgets, and session resume are no longer edge features — they are blocking daily-driver usage across Pi, Gemini, OpenCode, and Claude.
6. **Desktop clients are converging to thin shells over web/CLI cores** — Qwen desktop-v0.1.0 explicitly reuses WebShell; Claude and Codex desktop reliability issues (5-hour crashes, OAuth failures) suggest the Electron/Tauri layer remains the weakest component across vendors.
7. **Terminal polish is a competitive moat, not a nicety:** light backgrounds, OSC 8 hyperlinks, tmux/ConPTY correctness, and alt-screen control recur across five of nine tools — CLI UX is where daily drivers are won or lost.
8. **Decision-maker takeaway:** when evaluating tools, weight MCP failure modes, subagent termination honesty, and permission-enforcement behavior more heavily than model-agnostic release notes — those three areas generated the most severe and most cross-tool consistent findings today.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
*Data source: github.com/anthropics/skills • As of 2026-08-06*

## 1. Top Skills Ranking

The following are the most-discussed PRs in the comment-sorted list. All remain **open** as of the data snapshot.

1. **skill-creator eval fix — `run_eval.py` 0% recall bug**  
   [PR #1298](https://github.com/anthropics/skills/pull/1298)  
   Fixes the skill-creator evaluation loop, which reports `recall=0%` for every skill description. The PR addresses Windows stream reading, trigger detection, and parallel worker issues. Discussion references multiple independent reproductions and argues the description-optimization loop is currently “optimizing against noise.”

2. **document-typography skill**  
   [PR #514](https://github.com/anthropics/skills/pull/514)  
   Adds typographic quality control for generated documents: orphan word wrap, widow paragraphs, and numbering misalignment. The discussion emphasizes that these issues affect nearly every Claude-generated document and are rarely requested by users directly.

3. **pdf skill — case-sensitive file reference fixes**  
   [PR #538](https://github.com/anthropics/skills/pull/538)  
   Fixes eight case-sensitive mismatches in `skills/pdf/SKILL.md` (`REFERENCE.md` → `reference.md`, `FORMS.md` → `forms.md`). The issue is relevant for case-sensitive filesystems where the SKILL.md would otherwise fail to locate resources.

4. **ODT skill — OpenDocument creation and conversion**  
   [PR #486](https://github.com/anthropics/skills/pull/486)  
   Adds a skill for creating, filling, reading, and converting OpenDocument Format files (`.odt`, `.ods`), including ODT-to-HTML parsing. Triggers include mentions of OpenDocument, LibreOffice, or ISO-standard document formats.

5. **frontend-design skill clarity improvements**  
   [PR #210](https://github.com/anthropics/skills/pull/210)  
   Revises the frontend-design skill for clarity, actionability, and internal coherence. The discussion focuses on making every instruction executable within a single conversation and ensuring the skill’s guidance is specific enough to steer behavior.

6. **skill-quality-analyzer and skill-security-analyzer meta-skills**  
   [PR #83](https://github.com/anthropics/skills/pull/83)  
   Proposes two new meta-skills: a quality analyzer covering structure, documentation, and examples, and a security analyzer for community-submitted skills. Discussion centers on using these to vet skills before adoption.

7. **docx skill — tracked change `w:id` collision fix**  
   [PR #541](https://github.com/anthropics/skills/pull/541)  
   Prevents document corruption when the DOCX skill adds tracked changes to files with existing bookmarks. The root cause is OOXML’s shared `w:id` ID space; the SKILL.md examples previously used hardcoded low IDs that collide with real bookmarks.

8. **skill-creator — YAML special-character validation**  
   [PR #539](https://github.com/anthropics/skills/pull/539)  
   Adds pre-parse validation to `quick_validate.py` to detect unquoted `description` fields containing `:`. This prevents silent YAML parsing failures where descriptions are truncated or split into multiple keys.

---

## 2. Community Demand Trends

From the most-commented issues, the community’s demand clusters around the following directions:

- **Trust, security, and namespace safety** — [Issue #492](https://github.com/anthropics/skills/issues/492) raises concern about community skills being distributed under the `anthropic/` namespace, creating a trust-boundary vulnerability. This is the highest-comment issue in the dataset.
- **Skill distribution and org sharing** — [Issue #228](https://github.com/anthropics/skills/issues/228) requests org-wide skill sharing in Claude.ai; current file-based transfer via Slack/Teams is seen as a major friction point.
- **Reliability of skill tooling** — Multiple issues ([#556](https://github.com/anthropics/skills/issues/556), [#1169](https://github.com/anthropics/skills/issues/1169), [#202](https://github.com/anthropics/skills/issues/202)) report that `run_eval.py` consistently scores 0% recall, making skill description optimization ineffective.
- **Agent memory and governance skills** — [Issue #1329](https://github.com/anthropics/skills/issues/1329) proposes a compact-memory skill using symbolic notation; [Issue #412](https://github.com/anthropics/skills/issues/412) proposes an agent-governance skill for safety patterns. Both received substantive discussion.
- **Reasoning quality gates** — [Issue #1385](https://github.com/anthropics/skills/issues/1385) proposes a three-stage pipeline: pre-task calibration → adversarial review → delivery verification. This aligns with several recent PRs.
- **Interoperability** — [Issue #16](https://github.com/anthropics/skills/issues/16) asks for Skills to be exposable as MCPs, and [Issue #29](https://github.com/anthropics/skills/issues/29) asks about AWS Bedrock usage.
- **Document fidelity** — [Issue #12](https://github.com/anthropics/skills/issues/12) reports DOCX corruption from whitespace reformatting; [Issue #1175](https://github.com/anthropics/skills/issues/1175) raises security/context-window concerns for SharePoint Online workflows.

---

## 3. High-Potential Pending Skills

These open PRs are not yet merged but are receiving active attention and may land soon:

- **self-audit skill** — [PR #1367](https://github.com/anthropics/skills/pull/1367)  
  Provides mechanical file verification plus a four-dimension reasoning quality gate before delivery. Active discussion through July 2026.

- **plan-file-hygiene skill** — [PR #1479](https://github.com/anthropics/skills/pull/1479)  
  Addresses the lifecycle problem of planning artifacts accumulating with no cleanup or expiration. Recent and directly connected to community issue #1417.

- **testing-patterns skill** — [PR #723](https://github.com/anthropics/skills/pull/723)  
  A broad testing skill covering philosophy, unit testing, React component testing, and the Testing Trophy model. Still open and actively discussed.

- **color-expert skill** — [PR #1302](https://github.com/anthropics/skills/pull/1302)  
  A self-contained color expertise skill covering color naming systems, color spaces, and “what to use when” guidance. Updated as recently as July 2026.

- **pyxel skill for retro game development** — [PR #525](https://github.com/anthropics/skills/pull/525)  
  Integrates with `pyxel-mcp` for retro/pixel-art/8-bit game development in Python. Continued updates through July 2026 suggest active maintainer interest.

---

## 4. Skills Ecosystem Insight

The community’s most concentrated demand is for **trust and reliability around Skills themselves** — meta-skills for quality/security auditing, fixes to skill-creator and evaluation tooling, and safe distribution — rather than for any single new domain skill.

---

# Claude Code Community Digest — 2026-08-06

## 1. Today's Highlights

Release v2.1.223 adds owner-wildcard controls for marketplace allow/block lists and a warning when forked skills or resumed background agents are in play. Community attention is concentrated on a Cowork git-proxy regression that breaks PAT-authenticated pushes ([#76248](https://github.com/anthropics/claude-code/issues/76248)) and on model-behavior complaints around Opus 4.8/5.0 ([#77136](https://github.com/anthropics/claude-code/issues/77136)). Two newly filed data-integrity reports — fabricated user messages ([#84369](https://github.com/anthropics/claude-code/issues/84369)) and a measured 6.2% silent MCP parameter-loss rate ([#84362](https://github.com/anthropics/claude-code/issues/84362)) — are the most urgent reads today.

## 2. Releases

**v2.1.223** (latest, within last 24h)

- Managed settings now accept owner wildcard entries (`"owner/*"`) in `strictKnownMarketplaces` and `blockedMarketplaces`, letting admins allow or block every marketplace repo under a GitHub org in one entry.
- Added a warning when workflow agents, forked skills, slash commands, or resumed background agents are in use (remaining changelog truncated in source data).

## 3. Hot Issues

1. **[#76248 — Cowork git proxy blocks all pushes; PAT pass-through broken](https://github.com/anthropics/claude-code/issues/76248)** — Cloud/Cowork sessions can no longer push to repos outside the session's "authorized repository set," even when the user supplies a fine-grained PAT. With 11 comments and 5 👍, it's the most active thread; the regression reportedly appeared mid-session in early July under the `CCR_TEST_GITPROXY` rollout.
2. **[#77136 — Opus 4.8 tone "toxic"; Opus 5.0 incoherent](https://github.com/anthropics/claude-code/issues/77136)** — The model-behavior complaint with the most reactions (8 👍). Users describe Opus 4.8's language as unpleasant to work with and Opus 5.0 as producing incoherent output — a perceived quality/steering regression across both current flagship models.
3. **[#83403 — Desktop crashes near 5-hour usage limit](https://github.com/anthropics/claude-code/issues/83403)** — The app dies around the 5-hour mark and then fails to reopen, requiring a full reinstall. 7 comments; severe for anyone running long desktop/Cowork sessions.
4. **[#82536 — `--continue` cannot find sessions created by `-p`](https://github.com/anthropics/claude-code/issues/82536)** — Interactive resume fails for sessions started in print mode. 7 comments; breaks a core workflow for script-started sessions.
5. **[#72228 — MCP tool calls silently drop trailing parameters](https://github.com/anthropics/claude-code/issues/72228)** — A sufficiently long parameter value causes every subsequent parameter to vanish before the request leaves the client (v2.1.195). 5 comments; has a repro. Silent data loss on multi-arg MCP tools is high-severity.
6. **[#83342 — Bundled ugrep balloons to 9–14 GB RSS](https://github.com/anthropics/claude-code/issues/83342)** — Ordinary `grep` calls are transparently routed to a bundled ugrep that explodes in memory compiling a bounded-interval BRE. 4 comments; can OOM dev machines.
7. **[#84369 — Model fabricated user messages as assistant output](https://github.com/anthropics/claude-code/issues/84369)** — New escalation of #40629: during a repetitive paste ritual, the model emitted the user's half of the conversation as its own output, then acted on it. 0 comments so far, but a serious confabulation/integrity failure worth watching.
8. **[#84362 — Tag-grammar parser silently absorbs parameter blocks](https://github.com/anthropics/claude-code/issues/84362)** — Mismatched/mangled close tags cause subsequent parameter blocks to bind into a preceding string field; the author measured 6.2% silent field loss on parameter-rich MCP calls. Re-raise of stale-closed #44826.
9. **[#84053 — Opus 5-only prompt overrides user delegation policy](https://github.com/anthropics/claude-code/issues/84053)** — Since v2.1.219, an undocumented `heron_brook` prompt section instructs Opus 5 to avoid AgentTool/workflows unless "the user requested it," overriding user-configured delegation. Includes version-boundary evidence; a governance concern.
10. **[#74715 — Chrome "Always allow" persists as `duration:"once"`](https://github.com/anthropics/claude-code/issues/74715)** — Approved sites list stays empty and permission prompts repeat for every browser action. 4 comments; core friction for Claude-in-Chrome users on Windows.

## 4. Key PR Progress

Only 5 PRs are in motion — a light review queue:

1. **[#84364 — fix(hookify): fail closed on pretooluse exceptions](https://github.com/anthropics/claude-code/pull/84364)** — Security hardening: an exception (ImportError, rule-evaluation error) previously exited 0 and allowed the gated tool to run; it now emits `permissionDecision: 'deny'`, preventing unauthorized actions.
2. **[#84365 — fix(scripts): any user's thumbs down can prevent auto-close](https://github.com/anthropics/claude-code/pull/84365)** — Aligns the auto-close bot with its documented behavior by letting any user's thumbs down prevent closure; fixes #79146.
3. **[#84138 — workaround for Cowork self-signed cert errors](https://github.com/anthropics/claude-code/pull/84138)** — Addresses #24470: Bun's runtime doesn't load macOS system certificates, causing spurious "Self-signed certificate detected" failures in Cowork PostToolUse hooks.
4. **[#16929 — fix(code-review): respect `--comment` flag](https://github.com/anthropics/claude-code/pull/16929)** — Open since January; makes `/code-review` output to terminal by default and only post to GitHub when `--comment` is passed, matching README behavior.
5. **[#41661 — Add 14 plugins to the marketplace](https://github.com/anthropics/claude-code/pull/41661)** — Large marketplace expansion covering security, performance, architecture, and fullstack automation; open since March, awaiting review.

## 5. Feature Request Trends

- **Session organization and portability** — Requests to pin sessions and custom-sort the history sidebar ([#84368](https://github.com/anthropics/claude-code/issues/84368)) and to make transcripts/memory project-portable while keeping scratch files local ([#81946](https://github.com/anthropics/claude-code/issues/81946)) point to growing demand for better long-running-session ergonomics.
- **Gesture/UX configurability** — Users want to disable or rebind the left-arrow detach-to-background gesture ([#84348](https://github.com/anthropics/claude-code/issues/84348)), continuing a broader push for TUI keybinding flexibility.
- **Browser-extension security identity** — A reliable device-identification mechanism for the connected Chrome browser to prevent cross-machine driving ([#77605](https://github.com/anthropics/claude-code/issues/77605)).
- **Mobile/web parity with the CLI** — Slash-command typeahead on claude.ai/code mobile ([#56204](https://github.com/anthropics/claude-code/issues/56204)) remains a requested gap (currently closed/stale).

## 6. Developer Pain Points

- **Silent data loss in tool-call parsing** — Two independent reports ([#72228](https://github.com/anthropics/claude-code/issues/72228), [#84362](https://github.com/anthropics/claude-code/issues/84362)) show parameters silently dropped or mis-bound in MCP/tag-grammar paths. This is the highest-severity recurring theme: calls succeed with corrupted arguments and no error.
- **Opaque model governance and safety flagging** — Users report unexplained downgrades to Opus 4.8 after legitimate security testing ([#84340](https://github.com/anthropics/claude-code/issues/84340)), T&S flags with no violation reason ([#84372](https://github.com/anthropics/claude-code/issues/84372)), false positives on defensive tooling ([#84361](https://github.com/anthropics/claude-code/issues/84361)), and silent refusal-fallback degradation in the desktop app ([#76660](https://github.com/anthropics/claude-code/issues/76660)).
- **Cloud session auth/network regressions** — The Cowork git proxy blocking PAT pushes ([#76248](https://github.com/anthropics/claude-code/issues/76248)) and the Windows Winsock LSP ECONNRESET regression ([#83735](https://github.com/anthropics/claude-code/issues/83735)) show network-layer fragility in recent releases.
- **Desktop reliability** — The 5-hour crash/reinstall cycle ([#83403](https://github.com/anthropics/claude-code/issues/83403)), GPU-process crashes ([#83744](https://github.com/anthropics/claude-code/issues/83744)), and no auto-reconnect for stdio MCP servers ([#84363](https://github.com/anthropics/claude-code/issues/84363)) erode trust in the desktop app for long sessions.
- **Session continuity friction** — `--continue` vs `-p` session lookup mismatch ([#82536](https://github.com/anthropics/claude-code/issues/82536)) and phantom "[Request interrupted by user for tool use]" results with no user interrupt ([#78915](https://github.com/anthropics/claude-code/issues/78915)) disrupt agent pipelines.
- **Missing local context** — No local time/timezone in the system prompt causes UTC-based reasoning about "this evening" ([#84145](https://github.com/anthropics/claude-code/issues/84145)); a small fix with outsized user-visible impact.
- **Resource and config footguns** — ugrep RSS blowups ([#83342](https://github.com/anthropics/claude-code/issues/83342)), dead `CLAUDE_CODE_LOCAL_BINARY` handling in Desktop ([#84371](https://github.com/anthropics/claude-code/issues/84371)), and a GitHub MCP plugin auth-header template leak ([#84367](https://github.com/anthropics/claude-code/issues/84367)) round out the week.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# Codex Community Digest — 2026-08-06

## 1. Today's Highlights

The stable line received a security-relevant patch in `rust-v0.146.1`, backporting safer automatic-review defaults for cyber-capable models. The 0.147 alpha train continued rapidly, while the PR queue was dominated by migration, skills, MCP, and multi-agent reliability work. Community attention remains concentrated on two fronts: cross-provider multi-agent incompatibilities and Windows sandbox/Computer Use breakage.

## 2. Releases

- **[rust-v0.146.1](https://github.com/openai/codex/releases/tag/rust-v0.146.1)** — Bug-fix release that backports [#37057](https://github.com/openai/codex/pull/37057): safer automatic-review defaults for cyber-capable models and clearer permission-change explanations in the terminal interface.  
  [Full changelog](https://github.com/openai/codex/compare/rust-v0.146.0...rust-v0.146.1)

- **rust-v0.147.0-alpha.13 / alpha.12 / alpha.11 / alpha.10 / alpha.6.5** — Pre-release alphas shipped without detailed changelogs; they likely contain incremental work toward the 0.147 line.

## 3. Hot Issues

1. **[#25203 — GitHub OAuth callback fails with "Unable to find Electron app" on Windows](https://github.com/openai/codex/issues/25203)**  
   Closed, 38 comments, 21 👍. A long-running Windows desktop auth blocker; the high comment count indicates it affected many users before being resolved.

2. **[#2880 — Copy/Export Message as Markdown](https://github.com/openai/codex/issues/2880)**  
   Closed, 27 comments, 78 👍. Frequently requested TUI workflow improvement for exporting conversations into docs/issues.

3. **[#2020 — Support for light-background terminals](https://github.com/openai/codex/issues/2020)**  
   Closed, 24 comments, 60 👍. Hard-coded dark-terminal colors made Codex nearly unusable on light backgrounds.

4. **[#2909 — Support for multi-root workspaces](https://github.com/openai/codex/issues/2909)**  
   Closed, 23 comments, 143 👍. The most-upvoted issue in this batch; VS Code extension users need proper multi-root project handling.

5. **[#25319 — Scope Codex VS Code chats to the current workspace/project](https://github.com/openai/codex/issues/25319)**  
   Open, 22 comments, 54 👍. Chat/thread history mixes across projects, making workspace isolation a key usability request.

6. **[#27694 — Codex Desktop crashes Dock external extra via CodexDockTilePlugin setDockTile recursion on macOS](https://github.com/openai/codex/issues/27694)**  
   Closed, 17 comments, 8 👍. Desktop stability issue affecting macOS users running recent bundled CLI versions.

7. **[#34833 — MultiAgentV2 cross-provider subagent cannot consume encrypted task assignment](https://github.com/openai/codex/issues/34833)**  
   Open, 8 comments. OpenAI-parent + custom-provider-child setups fail because the child receives encrypted content it cannot decrypt.

8. **[#33551 — Multi-Agent V2 sends OpenAI-specific agent_message items to external Responses providers](https://github.com/openai/codex/issues/33551)**  
   Open, 7 comments, 4 👍. External providers like Ollama can't parse the `agent_message` item type, blocking multi-agent use outside OpenAI.

9. **[#25934 — TUI markdown hyperlinks are not clickable in OSC 8-capable terminals on 0.136.0](https://github.com/openai/codex/issues/25934)**  
   Open, 6 comments. Release notes advertised terminal hyperlinks, but they don't work in the interactive TUI across emulators.

10. **[#29242 — Chrome and Computer Use fail with "missing field sandboxPolicy" on Windows 10](https://github.com/openai/codex/issues/29242)**  
    Closed, 6 comments, 4 👍. Part of a larger Windows Computer Use failure cluster: [#29238](https://github.com/openai/codex/issues/29238), [#29267](https://github.com/openai/codex/issues/29267), [#29214](https://github.com/openai/codex/issues/29214), [#37043](https://github.com/openai/codex/issues/37043).

## 4. Key PR Progress

1. **[#37206 — Add a unified image budget](https://github.com/openai/codex/pull/37206)**  
   Introduces a gated `unified_image_budget` with a 6,000-pixel / 10,000-patch preprocessing limit, simplifying legacy image detail handling.

2. **[#37204 — Add durable user-message queue dispatch](https://github.com/openai/codex/pull/37204)**  
   Adds storage-neutral queue management and FIFO dispatch of queued user messages when a thread becomes idle.

3. **[#37198 — Prefer persisted cwd when reading local threads](https://github.com/openai/codex/pull/37198)**  
   Fixes stale `cwd` mismatches between thread reads and lists after metadata updates.

4. **[#37191 — Preserve legacy semantics during rollout migration](https://github.com/openai/codex/pull/37191)**  
   Prevents legacy rollbacks/compaction/subagent history from changing visible conversation or model context during migration.

5. **[#37190 — Interrupt cyber model turns after one Guardian denial](https://github.com/openai/codex/pull/37190)**  
   Adds a stricter circuit-breaker policy for cyber-catalog models while retaining existing thresholds for others.

6. **[#37189 — Track multi-agent usage hints in world state](https://github.com/openai/codex/pull/37189)**  
   Persists multi-agent usage instructions so resumed sessions stay consistent after config changes or saved-history gaps.

7. **[#37188 — Reserve the tool_search namespace for the search tool](https://github.com/openai/codex/pull/37188)**  
   Prevents namespace tools named `tool_search` from colliding with the built-in search tool's model-visible surface.

8. **[#37177 — Move explicit skill selection into the skills crate](https://github.com/openai/codex/pull/37177)**  
   Decouples explicit skill mention handling from core skill loading via `ExplicitSkillLookup`, improving extensibility.

9. **[#37168 — Bound remote MCP handshake HTTP requests](https://github.com/openai/codex/pull/37168)**  
   Fixes a serial-executor block where a streamable HTTP MCP handshake could time out while its HTTP request kept running.

10. **[#37166 — Keep textarea cursors and rendering inside the viewport](https://github.com/openai/codex/pull/37166)**  
    TUI textarea polish: correct continuation rows for full-width lines and clipping of overflowing wrapped spaces.

## 5. Feature Request Trends

- **Workspace/project isolation** is the strongest signal: multi-root workspace support ([#2909](https://github.com/openai/codex/issues/2909)) and per-workspace chat scoping ([#25319](https://github.com/openai/codex/issues/25319)) are both heavily upvoted.
- **Terminal UX remains a hot area**: light-background support ([#2020](https://github.com/openai/codex/issues/2020)), clickable OSC 8 hyperlinks ([#25934](https://github.com/openai/codex/issues/25934)), and Markdown copy/export ([#2880](https://github.com/openai/codex/issues/2880)) all draw steady demand.
- **Subagent control and interoperability**: users want caller-defined display names ([#26112](https://github.com/openai/codex/issues/26112)) and working multi-agent task delivery to non-OpenAI providers ([#34833](https://github.com/openai/codex/issues/34833), [#33551](https://github.com/openai/codex/issues/33551)).
- **App-level quality-of-life**: manual refresh/auto-sync for archived conversations ([#11907](https://github.com/openai/codex/issues/11907)), visible voice-transcription processing state ([#34338](https://github.com/openai/codex/issues/34338)), and clearer task-running indicators ([#37200](https://github.com/openai/codex/issues/37200)) are recurring papercut requests.

## 6. Developer Pain Points

- **Multi-agent + custom providers is the biggest pain point.** Several open issues describe the same failure: subagents receive encrypted or OpenAI-specific payloads that non-OpenAI providers cannot consume, or receive empty task input entirely ([#36586](https://github.com/openai/codex/issues/36586), [#36321](https://github.com/openai/codex/issues/36321), [#34833](https://github.com/openai/codex/issues/34833), [#33551](https://github.com/openai/codex/issues/33551)).
- **Windows Computer Use/sandbox instability is recurring.** The `missing field sandboxPolicy` runtime error and `EnumWindows` failures affect browser tooling, `node_repl/js`, and desktop app execution on Windows ([#29242](https://github.com/openai/codex/issues/29242), [#37043](https://github.com/openai/codex/issues/37043), [#37201](https://github.com/openai/codex/issues/37201)).
- **Desktop app reliability issues persist**: GitHub OAuth failing on Windows ([#25203](https://github.com/openai/codex/issues/25203)), macOS Dock recursion crashes ([#27694](https://github.com/openai/codex/issues/27694)), and profile-path crashes for non-ASCII Windows usernames ([#28262](https://github.com/openai/codex/issues/28262)).
- **Usage-limit logic causes confusion**, e.g. remaining Spark usage that won't run because the app reports a limit ([#37186](https://github.com/openai/codex/issues/37186)).

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-08-06

## Today’s Highlights

Three releases landed in the last 24 hours: **v0.54.0** stable, **v0.55.0-preview.1**, and a fresh **v0.55.0-nightly** with a macOS seatbelt fix and PR-generator groundwork. The issue tracker continues to focus heavily on agent reliability — false-success subagent termination, generalist hangs, and stuck shell commands. Meanwhile, the PR queue is dominated by fixes for the v0.53.0 `thoughtSignature` 400 regression and SDK robustness against malformed tool arguments.

## Releases

- [v0.54.0](https://github.com/google-gemini/gemini-cli/releases/tag/v0.54.0) — New stable release; includes changelog updates for v0.53.0-preview.0 and v0.52.0.
- [v0.55.0-preview.1](https://github.com/google-gemini/gemini-cli/releases/tag/v0.55.0-preview.1) — Preview release with changelog updates for v0.54.0-preview.0 and v0.53.
- [v0.55.0-nightly.20260806.g761f604c1](https://github.com/google-gemini/gemini-cli/releases/tag/v0.55.0-nightly.20260806.g761f604c1) — Nightly with:
  - `fix(cli): fall back to embedded macOS seatbelt profiles if missing` ([#28551](https://github.com/google-gemini/gemini-cli/pull/28551))
  - `feat(pr-generator-core): add environment config parser, command executor, and GitHub integration groundwork`

## Hot Issues

- [#22323 — Subagent recovery after MAX_TURNS is reported as GOAL success, hiding interruption](https://github.com/google-gemini/gemini-cli/issues/22323)  
  A `codebase_investigator` subagent can report `status: "success"` with `Termination Reason: "GOAL"` even after hitting MAX_TURNS and doing no analysis. This hides incomplete work from the main agent. 12 comments, 2 👍.

- [#21409 — Generalist agent hangs](https://github.com/google-gemini/gemini-cli/issues/21409)  
  The generalist agent can hang indefinitely on simple tasks like folder creation; users report waiting up to an hour before canceling. Disabling subagent use is the current workaround. 8 comments, 8 👍.

- [#24353 — Robust component level evaluations](https://github.com/google-gemini/gemini-cli/issues/24353)  
  Follow-up to the behavioral eval infrastructure; 76 tests exist, but maintainers want component-level evals to catch regressions more precisely. 7 comments.

- [#22745 — Assess the impact of AST-aware file reads, search, and mapping](https://github.com/google-gemini/gemini-cli/issues/22745)  
  AST-aware tools could reduce token noise, avoid misaligned reads, and reduce turn count. A related investigation is tracked in [#22746](https://github.com/google-gemini/gemini-cli/issues/22746). 7 comments.

- [#21968 — Gemini does not use skills and sub-agents enough](https://github.com/google-gemini/gemini-cli/issues/21968)  
  Even with well-described custom `gradle` and `git` skills, the model rarely invokes them unless explicitly told. This limits the value of custom agent setups. 6 comments.

- [#28698 — High memory usage detected](https://github.com/google-gemini/gemini-cli/issues/28698)  
  New report against CLI v0.53.1 showing memory growth over time. Maintainers are asking for an exported chat history to diagnose. 5 comments.

- [#26522 — Stop Auto Memory from retrying low-signal sessions indefinitely](https://github.com/google-gemini/gemini-cli/issues/26522)  
  Low-signal sessions are never marked processed if the extraction agent skips them, so they keep resurfacing in the background inbox. 5 comments.

- [#25166 — Shell command execution gets stuck with “Waiting input” after command completes](https://github.com/google-gemini/gemini-cli/issues/25166)  
  Simple CLI commands finish but remain displayed as active and awaiting input, forcing manual interruption. 4 comments, 3 👍.

- [#21983 — Browser subagent fails in Wayland](https://github.com/google-gemini/gemini-cli/issues/21983)  
  The browser subagent is unreliable under Wayland, making browser automation effectively unusable for affected Linux users. 4 comments, 1 👍.

- [#26525 — Add deterministic redaction and reduce Auto Memory logging](https://github.com/google-gemini/gemini-cli/issues/26525)  
  Auto Memory sends transcript content to the extraction model before prompt-based redaction occurs, meaning secrets may already enter model context. 4 comments.

## Key PR Progress

- [#28607 — fix(core): preserve functionCall thoughtSignature when stripping thought parts](https://github.com/google-gemini/gemini-cli/pull/28607)  
  Fixes the v0.53.0 regression that caused `API Error 400: Function call is missing a thought_signature` during parallel tool calls.

- [#28695 — fix(sdk): don't abort sendStream on malformed tool arguments](https://github.com/google-gemini/gemini-cli/pull/28695)  
  Guards `JSON.parse()` for string-valued tool args so malformed model output no longer aborts the stream. Closes [#28649](https://github.com/google-gemini/gemini-cli/issues/28649).

- [#28660 — fix(sdk): keep sendStream alive on malformed tool arguments](https://github.com/google-gemini/gemini-cli/pull/28660)  
  Open alternative for the same SDK issue; validates decoded arguments must be JSON objects and converts invalid args into structured `functionResponse` errors.

- [#28481 — fix(core): refresh MCP OAuth tokens with the stored client ID](https://github.com/google-gemini/gemini-cli/pull/28481)  
  Fixes MCP OAuth token refresh for servers configured via dynamic client registration; refresh failures were previously deleting stored credentials and forcing re-auth.

- [#28485 — fix(cli): add gemini-3.5-flash to model selector for all users](https://github.com/google-gemini/gemini-cli/pull/28485)  
  Adds `gemini-3.5-flash` to the model selector, addressing a gap where v0.51.0 users could not select newer flash models.

- [#28488 — feat(cli): auto-compress chat history on context window overflow](https://github.com/google-gemini/gemini-cli/pull/28488)  
  Adds `model.autoCompressOnOverflow` so sessions automatically compress history instead of stopping with a context-limit warning.

- [#28676 — fix(cli): forward termination signals to relaunched child process](https://github.com/google-gemini/gemini-cli/pull/28676)  
  The bootstrap parent now forwards SIGTERM/SIGHUP/SIGINT/etc. to the child process, preventing orphaned processes after supervised kills. Marked `help wanted`.

- [#28581 — fix(cli): skip diff hunk markers during @ processing](https://github.com/google-gemini/gemini-cli/pull/28581)  
  Prevents diff hunk markers from being interpreted as `@file` references, eliminating recursive workspace-wide glob searches and reducing heap growth on large diffs.

- [#28688 — fix(core): dynamically resolve Cloud Workstations proxy redirect URI for OAuth flows](https://github.com/google-gemini/gemini-cli/pull/28688)  
  Fixes OAuth flows inside Google Cloud Workstations where the browser runs on the local developer machine but the callback must use the VM proxy.

- [#28689 — fix(core): unwrap and parse nested gaxios streaming errors from cause message](https://github.com/google-gemini/gemini-cli/pull/28689)  
  Improves parsing and classification of nested quota/rate-limit streaming errors, especially for Gemini Code Assist fallback handling.

## Feature Request Trends

- **AST-aware code navigation** — Requests to use AST-aware tools for more precise file reads, search, and codebase mapping continue to gain traction.  
  [#22745](https://github.com/google-gemini/gemini-cli/issues/22745), [#22746](https://github.com/google-gemini/gemini-cli/issues/22746)

- **More autonomous use of skills/sub-agents** — Users want Gemini to invoke custom skills and sub-agents proactively, plus better self-awareness about its own flags, hotkeys, and execution modes.  
  [#21968](https://github.com/google-gemini/gemini-cli/issues/21968), [#21432](https://github.com/google-gemini/gemini-cli/issues/21432)

- **Browser agent resilience** — Multiple requests ask for better browser subagent behavior: lock recovery, session takeover, Wayland support, and honoring `settings.json` overrides like `maxTurns`.  
  [#22232](https://github.com/google-gemini/gemini-cli/issues/22232), [#22267](https://github.com/google-gemini/gemini-cli/issues/22267), [#21983](https://github.com/google-gemini/gemini-cli/issues/21983)

- **Memory system hardening** — Auto Memory needs deterministic secret redaction, quarantine of invalid patches, and a way to stop retrying low-signal sessions.  
  [#26522](https://github.com/google-gemini/gemini-cli/issues/26522), [#26523](https://github.com/google-gemini/gemini-cli/issues/26523), [#26525](https://github.com/google-gemini/gemini-cli/issues/26525)

- **Subagent observability** — Requests to expose subagent trajectories via `/chat share` and include subagent context in bug reports.  
  [#22598](https://github.com/google-gemini/gemini-cli/issues/22598), [#21763](https://github.com/google-gemini/gemini-cli/issues/21763)

- **Eval infrastructure** — Continued investment in behavioral and component-level evaluations to prevent agent regressions.  
  [#24353](https://github.com/google-gemini/gemini-cli/issues/24353)

## Developer Pain Points

- **False success and silent failures** — Subagents can report success after MAX_TURNS, and bug reports lack subagent context, making failures hard to diagnose.  
  [#22323](https://github.com/google-gemini/gemini-cli/issues/22323), [#21763](https://github.com/google-gemini/gemini-cli/issues/21763)

- **Hangs and stuck commands** — Generalist agent hangs, shell commands stuck on “Waiting input,” and interactive prompts like Vite app creation often require manual cancellation.  
  [#21409](https://github.com/google-gemini/gemini-cli/issues/21409), [#25166](https://github.com/google-gemini/gemini-cli/issues/25166), [#22465](https://github.com/google-gemini/gemini-cli/issues/22465)

- **Resource and cleanup issues** — High memory usage and models leaving temporary scripts across the workspace complicate long sessions and clean commits.  
  [#28698](https://github.com/google-gemini/gemini-cli/issues/28698), [#23571](https://github.com/google-gemini/gemini-cli/issues/23571)

- **Configuration not honored** — Browser agent settings overrides are ignored, and symlinked custom agents under `~/.gemini/agents/` are not recognized.  
  [#22267](https://github.com/google-gemini/gemini-cli/issues/22267), [#20079](https://github.com/google-gemini/gemini-cli/issues/20079)

- **Security/privacy concerns** — Auto Memory can send transcript content to the model before redaction, and token refresh failures can delete stored credentials.  
  [#26525](https://github.com/google-gemini/gemini-cli/issues/26525), [#28481](https://github.com/google-gemini/gemini-cli/pull/28481)

- **Destructive behavior risk** — The agent occasionally uses `git reset`, `--force`, or unsafe resource-modifying commands when safer alternatives exist.  
  [#22672](https://github.com/google-gemini/gemini-cli/issues/22672)

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-08-06

## Today's Highlights
The Copilot CLI team shipped several new builds, most notably v1.0.79-5, which adds multi-session management and makes prompt pinning opt-in by default. Meanwhile, the issue tracker shows growing friction around MCP interoperability, model delegation/reasoning-effort mismatches, and terminal rendering regressions. No pull requests were updated in the last 24 hours.

## Releases
New builds were published in the last 24 hours:

- [v1.0.79-5](https://github.com/github/copilot-cli/releases/tag/v1.0.79-5)
  - **Added:** Manage multiple concurrent sessions from the Sessions tab and sidebar.
  - **Improved:** Prompt pinning is now off by default; enable with `pinnedPrompts: true`.
  - **Fixed:** Sandboxed wrapper builds (`make` and friends) now receive the dev tool caches they need based on the build manifest.

- [v1.0.79-4](https://github.com/github/copilot-cli/releases/tag/v1.0.79-4) — Pre-release.

- [v1.0.79-3](https://github.com/github/copilot-cli/releases/tag/v1.0.79-3) — Improved: `/worktree new` starts a new session in a new worktree.

- [v1.0.79-2](https://github.com/github/copilot-cli/releases/tag/v1.0.79-2) — Improved: pinned prompts move one row higher; also disabled by default on terminals under 30 rows.

## Hot Issues
Notable issues updated in the last 24 hours:

- [#1799 — How to turn off alt-screen views?](https://github.com/github/copilot-cli/issues/1799)
  The alt-screen terminal rendering change continues to frustrate users. 12 comments, 8 👍; still open since March.

- [#4202 — Built-in `view` reports “Path does not exist” for existing files](https://github.com/github/copilot-cli/issues/4202)
  Regression in v1.0.72/v1.0.73 after working in v1.0.71. Affects a core tool and is drawing attention from users relying on the built-in file viewer.

- [#3135 — BYOK statusline shows “medium effort” despite `--effort high`](https://github.com/github/copilot-cli/issues/3135)
  The request is correct but the statusline displays the wrong model/effort label, creating confusion about what model is actually being used.

- [#4345 — Reasoning effort 'medium' is not supported for 'claude-haiku-4.5'](https://github.com/github/copilot-cli/issues/4345)
  Feature flags can cause sub-agent execution to fail repeatedly when the selected model doesn’t support the requested reasoning effort. 4 👍.

- [#4370 — Copilot CLI 1.0.79-1 fails MCP initialization when `server/discover` returns `-32602`](https://github.com/github/copilot-cli/issues/4370)
  FastMCP servers don’t implement `server/discover`, and the CLI treats the JSON-RPC error as fatal. Shows continued MCP ecosystem compatibility issues.

- [#4378 — Cloud agent: MCP registry policy fetch fails on GHEC data residency, silently blocking MCP servers](https://github.com/github/copilot-cli/issues/4378)
  Enterprise users on `<tenant>.ghe.com` lose all user-configured MCP servers due to 401/403 policy-fetch failures. Significant for GHEC data-residency customers.

- [#4374 — `/mcp search` fails with 400 Bad Request when git remote is Azure DevOps](https://github.com/github/copilot-cli/issues/4374)
  Non-GitHub remotes break the interactive MCP registry browser. 4 👍 in a short time, indicating broad interest in non-GitHub remote support.

- [#4373 — Queued messages are stuck forever](https://github.com/github/copilot-cli/issues/4373)
  In v1.0.75, queued messages are never picked up; Ctrl-C doesn’t cancel them, and new prompts don’t recover the session. Major reliability concern for interactive use.

- [#4377 — GPT-5.6 Terra delegates to Opus subagent](https://github.com/github/copilot-cli/issues/4377)
  Users report large unexpected Opus credit spend when the configured model delegates to a different model family. Highlights billing transparency concerns.

- [#4371 — MCP OAuth 3LO fails with -32042: “This request requires more information”](https://github.com/github/copilot-cli/issues/4371)
  OAuth Authorization Code flows fail because the CLI doesn’t surface the URL needed for user authentication. Blocks MCP Gateway targets using 3LO.

## Key PR Progress
No pull requests were updated in the last 24 hours (`Total: 0 items`), so there are no PR highlights to report in this digest.

## Feature Request Trends
Trending feature directions from the issues:

- **Terminal/UI configurability:** Users want control over alt-screen behavior, pinned prompts, and statusline layout.
- **BYOK/BYOM model transparency:** Requests for model discovery, in-session model switching, and accurate model/effort display names.
- **MCP ecosystem hardening:** Better handling of non-standard MCP servers, OAuth flows, policy failures, and non-GitHub git remotes.
- **Session/queue reliability:** More predictable queuing behavior, cancellation semantics, and ordering for steering messages.
- **Cross-platform stability:** Repeated asks for fixes on Windows native crashes, Linux runtime issues, and macOS subprocess noise.

## Developer Pain Points
Recurring frustrations visible across the latest issues:

- **Built-in tool regressions** — e.g., `view` failing on existing files and `web_search` returning hallucinated answers.
- **Silent MCP failures** — policy blocking or registry fetch errors can disable servers without clear user feedback.
- **Unexpected model delegation and cost surprises** — models silently delegating to other families or displaying incorrect effort levels.
- **Terminal rendering issues** — alt-screen mode, clipboard ownership messages, and pinned-prompt layout problems disrupt workflows.
- **Unpredictable message ordering/queueing** — multiple steering messages can be reordered or stuck, causing wrong execution order.
- **Platform-specific execution failures** — Windows crashes, Oracle Linux `ENOEXEC`, and macOS `MallocStackLogging` noise continue to surface.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-08-06

## Today's Highlights

The past 24 hours center on two fresh bugs in the Soul engine: one where `StrReplaceFile` corrupts non-UTF-8 bytes outside the edited region (#2591), and another where an image-returning MCP tool aborts the run *after* side effects are applied with no hint at the config fix (#2588). Two fix PRs are already in flight, with #2592 taking the more substantive approach of degrading unsupported tool media instead of aborting. The long-running Memory System request (#1283) continues to accumulate community discussion, with 19 comments since February.

## Releases

No new releases in the last 24 hours.

## Hot Issues

Only 3 issues were updated in the last 24h — picked as the most noteworthy:

- **[#1283 — Feature Request: Memory System - Persistent context across sessions](https://github.com/MoonshotAI/kimi-cli/issues/1283)** — Open since February, this is the community's most-discussed enhancement. Proposes automatic (AI-managed notes) and manual (user-defined instructions) memory to persist project patterns and preferences across sessions. With 19 comments and continuous updates through today, this remains the top-cited gap between Kimi CLI and agentic IDE workflows.

- **[#2591 — StrReplaceFile corrupts undecodable bytes outside the edited region](https://github.com/MoonshotAI/kimi-cli/issues/2591)** — A serious data-integrity bug: the file is decoded with `errors="replace"`, edited, then written back, so any non-UTF-8 byte anywhere in the file is silently replaced with U+FFFD (`EF BF BD`) — even far from the intended edit. File length and content are changed outside the edit region. No comments yet, but this is a quiet severity-1: risky for users editing binary-adjacent or legacy-encoded files.

- **[#2588 — Model declared without capabilities: image-returning MCP tool aborts the run mid-task, after side effects, with no hint at the fix](https://github.com/MoonshotAI/kimi-cli/issues/2588)** — When a model in `config.toml` lacks `capabilities` and an MCP tool returns an image, the run aborts after the tool has already executed. Two distinct pain points in one report: the abort happens post-side-effect (wasted/partial LLM calls) and the error message does not tell the user what field to add. Split into two PRs below.

## Key PR Progress

Only 3 PRs updated in the last 24h — all included:

- **[#2592 — fix(soul): degrade unsupported tool media instead of aborting mid-task](https://github.com/MoonshotAI/kimi-cli/pull/2592)** — Resolves #2588 at the root cause. Instead of raising `LLMNotSupported` after the tool has already run, `_grow_context` will degrade unsupported media gracefully, preserving earlier side effects and avoiding mid-turn aborts. The more substantial of the two #2588 fixes.

- **[#2590 — fix(soul): name the config fix in the unsupported-capability error](https://github.com/MoonshotAI/kimi-cli/pull/2590)** — Partially addresses #2588 (the "no hint at the fix" half). The error now tells users which capability is missing and what to change, e.g. for the Qwen3 family. Small, self-contained, and immediately actionable.

- **[#2589 — docs: mention qwen-audio-agent as a voice ACP client](https://github.com/MoonshotAI/kimi-cli/pull/2589)** — Expands the ACP section beyond editor/IDE clients (Zed, JetBrains) by adding a sentence about `qwen-audio-agent`, an open-source full-duplex voice runtime that launches `kimi acp` as an agent for hands-free interaction. Author discloses affiliation.

## Feature Request Trends

- **Persistent memory / context across sessions** — #1283 remains the single most-requested feature, combining automatic memory (AI-managed notes) and manual memory (user-defined instructions). High sustained engagement over 5+ months.
- **Broader ACP ecosystem integration** — The qwen-audio-agent docs PR (#2589) signals growing demand for non-IDE ACP clients, particularly voice/audio interfaces for hands-free agent usage.
- **Actionable configuration errors** — The #2588 split into two PRs (#2590, #2592) shows community-driven pressure for errors that both diagnose *and* prescribe the fix, rather than bare runtime failures.

## Developer Pain Points

- **Silent data corruption on file edits** (#2591) — decoding with `errors="replace"` and writing back the whole string risks destroying bytes outside the edit region; a severe correctness issue for any non-UTF-8 file.
- **Side effects before failure** (#2588) — tools execute and their effects persist before the model supports the output type, wasting resources and leaving the session in an inconsistent state.
- **Unclear capability configuration** (#2588) — users hitting models declared without `capabilities` receive errors that do not state the missing field, causing needless debugging of `config.toml`.
- **Missing long-term memory** (#1283) — repeatedly surfaced since February as the limiter for using Kimi CLI as a daily driver across projects, with 19 comments reflecting sustained demand.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-08-06

## Today's Highlights
Release **v1.18.14** shipped with a streamlined xAI device-code login and more resilient retry handling for transient provider/network errors. Meanwhile, the codebase continues its aggressive push toward the V2 architecture: the V1 compatibility layer was removed from the App, V1→V2 data migration landed, and hosted workspace execution entered the Core. On the community side, the plugin/skills marketplace request ([#28696](https://github.com/anomalyco/opencode/issues/28696)) stands out with 23 👍, and a fresh complaint about the paid GO subscription being "basically unusable" ([#40791](https://github.com/anomalyco/opencode/issues/40791)) is gaining traction.

## Releases
**[v1.18.14](https://github.com/anomalyco/opencode/releases/tag/v1.18.14)**
- **Simplified xAI login** to a single device-code flow that works better in headless and remote environments.
- **Preserved structured mid-stream provider errors**, allowing compatible providers to retry failed responses.
- **Added retries for more transient provider and network errors.**

## Hot Issues
1. **[#28696 — Plugin/Agent/Skills marketplace](https://github.com/anomalyco/opencode/issues/28696)** *(OPEN, 7 comments, 23 👍)* — Master issue for a unified marketplace/registry/package-distribution system. The highest-reacted open feature request; discovery and distribution are the core asks.
2. **[#40791 — GO subscription basically unusable](https://github.com/anomalyco/opencode/issues/40791)** *(OPEN, 3 comments)* — Newly filed: extreme latency and `403: This model is not available in your region` for GPT-based models. Signals possible capacity or regional licensing problems with the paid offering.
3. **[#14026 — Some models output tool calls but never execute them](https://github.com/anomalyco/opencode/issues/14026)** *(CLOSED, 9 comments)* — `qwen2.5-coder:14b` and `ministral-3:14b` via Ollama print the tool call but never run it, while `gpt-oss` variants work. Important for local-model users.
4. **[#27749 — /exit or /quit kills the terminal on Windows PowerShell](https://github.com/anomalyco/opencode/issues/27749)** *(CLOSED, 7 comments)* — Entire window/tab closes instead of returning to the shell prompt. Part of a recurring Windows exit-behavior bug cluster (see also #28673, #30495, #26480).
5. **[#31042 — small_model ignored for title agent + FreeUsageLimitError retry loop](https://github.com/anomalyco/opencode/issues/31042)** *(CLOSED, 5 comments)* — Title generation always uses a hardcoded free flash model, and a usage-limit error enters a ~90s blocking retry loop. Two config frustrations in one report.
6. **[#39291 — Compaction sends mutated thinking block → permanent 400 retry loop](https://github.com/anomalyco/opencode/issues/39291)** *(OPEN, 2 comments)* — With extended thinking enabled, compaction corrupts the `thinking` block and causes an unrecoverable `400 invalid_request_error` loop. Session-breaking for Claude users.
7. **[#31105 — Terminal repeatedly outputs duplicate message markers ("259 259 259...")](https://github.com/anomalyco/opencode/issues/31105)** *(CLOSED, 5 comments)* — On Windows, system message markers get re-rendered as endless numeric output that fills the screen across new windows.
8. **[#31099 — Renderer freezes via Solid.js findDOMIndex infinite loop](https://github.com/anomalyco/opencode/issues/31099)** *(CLOSED, 5 comments)* — Desktop v1.16.2 becomes unresponsive after ~12 minutes on macOS; root cause traced to a Solid.js infinite loop.
9. **[#35881 — kotlin-ls auto-install silently fails](https://github.com/anomalyco/opencode/issues/35881)** *(OPEN, 2 comments)* — LSP install creates an empty cache dir, never spawns, and logs no error. Silent failures like this erode trust in LSP auto-setup.
10. **[#31155 — Illegal-instruction crash on CPUs without AVX2](https://github.com/anomalyco/opencode/issues/31155)** *(CLOSED, 3 comments)* — Older Windows CPUs crash immediately, and the supposedly "baseline" binary also fails. Highlights a gap in fallback-binary distribution.

## Key PR Progress
1. **[#40382 — refactor(app): remove v1 compatibility](https://github.com/anomalyco/opencode/pull/40382)** *(CLOSED)* — Deletes V1 protocol detection, legacy adapters, migration docs, and the old SDK dependency. A major milestone in the V2-only transition.
2. **[#40608 — refactor(app): use native v2 types](https://github.com/anomalyco/opencode/pull/40608)** *(OPEN)* — Replaces app type aliases with generated V2 client types and renders V2 permission fields natively. Builds on #40595.
3. **[#40723 — feat(core): migrate v1 data to v2](https://github.com/anomalyco/opencode/pull/40723)** *(CLOSED)* — Adds REST-triggered V1 session-history migration with resumable progress, legacy JSON credential import, and updated TUI migration flow.
4. **[#40784 — feat(core): hosted workspace execution with modal driver](https://github.com/anomalyco/opencode/pull/40784)** *(OPEN)* — Introduces durable "Workspace" execution environments (machines with a root, not a repo) that sessions can target through the existing runner graph.
5. **[#38790 — [beta] feat(app): add workspace flows to new layout](https://github.com/anomalyco/opencode/pull/38790)** *(OPEN)* — New-session UI now lets users choose local repo, a fresh isolated workspace, or an existing workspace, with a context-aware composer pill.
6. **[#35311 — fix(core): multiple clones of same repo are different projects](https://github.com/anomalyco/opencode/pull/35311)** *(OPEN)* — A long-requested fix that closes **14 issues** (#17940, #19348, #29869, and more) by unifying project identity across clones.
7. **[#40781 — feat(app): export session as JSON from UI](https://github.com/anomalyco/opencode/pull/40781)** *(CLOSED)* — Adds session transcript export via the 3-dot dropdown, a Context-tab action button, and a `/export` command palette entry.
8. **[#27554 — feat(opencode): local LAN provider discovery + auto-discover models](https://github.com/anomalyco/opencode/pull/27554)** *(OPEN)* — Adds `/connect` discovery for local OpenAI-compatible servers via mDNS, closing #6231 and #27553. High value for self-hosted/LAN users.
9. **[#40765 — refactor(core): deduplicate Copilot endpoint routing](https://github.com/anomalyco/opencode/pull/40765)** *(OPEN)* — Reuses the shared `shouldUseResponsesApi` heuristic from `@opencode-ai/ai` instead of maintaining a parallel fallback in Core.
10. **[#40772 — fix(opencode): report a missing auth method instead of crashing](https://github.com/anomalyco/opencode/pull/40772)** *(OPEN)* — Guards the provider auth hook lookup so a missing method produces a clear error rather than a crash (closes #40774).

## Feature Request Trends
- **Marketplace / plugin ecosystem**: The unified plugin-agent-skills marketplace ([#28696](https://github.com/anomalyco/opencode/issues/28696)) is the clear #1 request at 23 👍, covering discovery, registry, and package distribution.
- **Workspace-based execution**: Multiple PRs ([#40784](https://github.com/anomalyco/opencode/pull/40784), [#38790](https://github.com/anomalyco/opencode/pull/38790)) point to hosted/isolated workspaces as the next major workflow direction.
- **Provider flexibility**: Requests to honor `small_model`, auto-discover LAN providers, and support local OpenAI-compatible servers recur across issues (#31042, #27554, #31109).
- **UI/UX customization**: Configurable keybindings (e.g., Ctrl+W, #31100), send-button-only prompt submission (#16226), and editing/splitting model responses (#17251) show demand for finer interaction control.
- **Session data tooling**: JSON export (#40781), a `/simplify` review skill (#29272), and a system-prompt environment plugin API (#31158) round out the session-lifecycle requests.

## Developer Pain Points
- **Windows exit behavior remains the most persistent bug family**: `/exit` and Ctrl+C kill the parent shell, crash `conhost.exe`, destroy `psmux` panes, and corrupt ConPTY hosts (#27749, #28673, #30495, #26480). Multiple regressions since v1.14.25.
- **Provider reliability**: Local Ollama models emit tool calls without executing them (#14026); the GO subscription is slow and region-locked for GPT models (#40791); network errors with error IDs are not retried (#31133).
- **Retry loops and hangs**: FreeUsageLimitError blocks sessions for ~90s (#31042); compaction causes a permanent 400 loop (#39291); the TUI stays active after "exiting loop" with vLLM (#31109); SSE streams grow memory without bound (#31087).
- **Desktop/terminal stability**: Renderer freezes on Solid.js `findDOMIndex` (#31099), AVX2-unsupported CPUs crash even with the baseline binary (#31155), and duplicate numeric markers flood the Windows terminal (#31105).
- **Silent LSP failures**: kotlin-ls auto-install creates an empty cache, never spawns, and logs nothing (#35881) — a debugging dead end.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-08-06

## Today’s Highlights
The most active work this cycle is about reliability: fixes landed for Linux X11 clipboard leaks, extension event-bus leaks, and terminal hyperlink truncation bugs. At the same time, users are pushing hard for more provider flexibility (Bedrock, Qwen, Meta) and better control over context compaction and model selection. The Windows support issue remains the most-discussed community thread.

## Releases
No new releases were published in the last 24 hours.

## Hot Issues

- [Windows support: “How do you use Pi on Windows?”](https://github.com/earendil-works/pi/issues/7547) — Open, 18 comments. The community is trying to inventory the many ways Pi runs on Windows so maintainers can focus bug fixes/documentation efforts. High signal for a looming Windows hardening push.

- [Config folder is out of place on Linux](https://github.com/earendil-works/pi/issues/534) — Closed, 14 comments, 23 👍. Long-running request to follow the XDG Base Directory Specification. Strong user agreement even though the issue is not new.

- [Auto-compaction never triggers after context grows past 100%](https://github.com/earendil-works/pi/issues/6879) — Open, 11 comments, 13 👍. A session can run past the context limit until the provider rejects the request. Users want compaction checks after every agentic turn, not only near provider overflow.

- [Make in-session model/thinking-level changes ephemeral by default](https://github.com/earendil-works/pi/issues/5263) — Open, 11 comments, 12 👍. Request to stop session-scoped model changes from leaking into global defaults, with a clearer “Default model” surface in `/settings`.

- [truncateToWidth() leaves dangling OSC 8 hyperlink](https://github.com/earendil-works/pi/issues/7399) — Closed, 12 comments. Truncation can split an OSC 8 hyperlink open/close, leaving malformed terminal output. Fixed by PR #7665, with follow-up perf work.

- [Sessions hang on “Working…” with Anthropic subscription](https://github.com/earendil-works/pi/issues/5291) — Closed, 8 comments. Intermittent stalls were especially painful because interrupt/resume didn’t always recover the session.

- [`pi update --self` gives up after one transient failure](https://github.com/earendil-works/pi/issues/6675) — Closed, 8 comments. A single latest-version fetch failure aborts the whole self-update path instead of retrying.

- [Default PI_* guideline over-encourages unnecessary bash calls](https://github.com/earendil-works/pi/issues/7128) — Closed, 7 comments. The system prompt’s “Inspect PI_* environment variables” guidance biased agents toward pointless env-inspection commands.

- [Support video/audio content in prompt command](https://github.com/earendil-works/pi/issues/3200) — Open, 7 comments. Users want `prompt` RPC to forward video/audio to multimodal models, extending existing image support.

- [Configurable thinking level/model for compaction](https://github.com/earendil-works/pi/issues/7553) — Open, 7 comments. Compaction always reuses the session thinking level, making summarization budgets impossible to separate from normal turns.

## Key PR Progress

- [fix(coding-agent): avoid Linux clipboard X11 leaks](https://github.com/earendil-works/pi/pull/7694) — Replaces native clipboard reads with `wl-paste`/`xclip`/`xsel`, fixing the X11 client-table leak reported in #7600.

- [feat(coding-agent): support line ranges in @file references](https://github.com/earendil-works/pi/pull/7679) — Adds `#L<start>-L<end>` selectors to CLI `@file` references with EOF handling and metadata in file prompt tags.

- [feat: Add Amazon Bedrock Mantle OpenAI Responses provider](https://github.com/earendil-works/pi/pull/6216) — Adds Bedrock Mantle via OpenAI’s Bedrock provider, expanding enterprise cloud options.

- [feat(ai): add Qwen Token Plan Individual provider](https://github.com/earendil-works/pi/pull/7659) — New built-in provider for the international Qwen Token Plan endpoint, exposing eight documented models.

- [feat(ai): support thinking_token_budget on openai-completions](https://github.com/earendil-works/pi/pull/7638) — Prevents reasoning-heavy OpenAI-compatible calls from consuming the entire `max_tokens` and ending with no response.

- [Fix event bus leak](https://github.com/earendil-works/pi/pull/7656) — Scopes `pi.events.on()` subscriptions to the extension runtime, cleaning up listeners after reload/disposal.

- [fix(coding-agent): disable bunfig autoload in compiled binaries](https://github.com/earendil-works/pi/pull/7685) — Prevents cwd `bunfig.toml` preloads from crashing standalone `pi` binaries.

- [fix(ai): restore Copilot models from account policy](https://github.com/earendil-works/pi/pull/7672) — Falls back to policy-enabled Copilot models when `model_picker_enabled` returns no usable models.

- [Support AGENTS.override.md as a per-directory context override](https://github.com/earendil-works/pi/pull/7681) — Loads `AGENTS.override.md` instead of `AGENTS.md`/`CLAUDE.md` when both exist, with ancestor layering preserved.

- [fix(tui): skip OSC 8 scan for plain prefixes](https://github.com/earendil-works/pi/pull/7665) — Performance follow-up to the dangling hyperlink fix: avoids ANSI parsing when the retained prefix cannot contain OSC 8.

## Feature Request Trends

- **Richer context/file references** — Users want GitHub-style line ranges in `@file` refs (#7673), per-directory `AGENTS.override.md` support (#7642), and JetBrains as a language backend for pi-serena (#7641).

- **Granular model and compaction control** — Ephemeral in-session model changes (#5263), configurable context window size (#5064), and separate thinking/model settings for compaction (#7553).

- **More LLM providers and multimodal support** — Meta Model API (#7543), Bedrock Mantle (#6216), Qwen Token Plan (#7659), Copilot account policy fixes (#7634), and video/audio in `prompt` (#3200).

- **TUI and terminal polish** — Per-component mouse events (#7683), bottom-anchor fill marker (#7682), mermaid rendering (#7623), and page up/down handling in selectors (#7680).

- **Extension API hardening** — Persisting API-key credentials to `auth.json` (#7658), exposing retry callbacks (#7649), and correct event-bus scoping (#7193).

## Developer Pain Points

- **Compaction/context reliability** — Auto-compaction can fail to trigger before provider overflow (#6879), and there is no easy way to configure context-window size or compaction-specific thinking budgets (#5064, #7553).

- **Windows onboarding fragmentation** — Too many supported ways to run Pi on Windows make it hard for users to know what is broken and for maintainers to prioritize fixes (#7547).

- **Platform/terminal integration bugs** — Long-running processes leak X11 connections (#7600), terminal truncation breaks OSC 8 hyperlinks (#7399), and iTerm2 images are rejected without a `size` parameter (#7465).

- **Extension lifecycle leaks** — Event-bus listeners survive session reloads/disposal (#7193), and extensions still lack a clean credential-persistence API (#7658).

- **Poor resilience to transient network failures** — Self-update gives up after one fetch failure (#6675), WebSocket retries only handle two error codes (#7444), and provider retry behavior is invisible to callers (#7649).

- **Config/OS convention friction** — Config files ignore the XDG spec on Linux (#534), and Node 20 users hit a crash from undici `CacheStorage` requiring newer Node (#7601).

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-08-06

## 1. Today's Highlights
Qwen Code shipped v0.21.6, a new desktop v0.1.0, and a nightly build. The most notable new capabilities are experimental native Live Voice support for WebShell on macOS and continued convergence between the desktop shell and WebShell. On the bug front, a P1 Windows desktop startup crash and a P1 read-only shell classifier bypass are drawing community attention, while maintainers pushed fixes for `/review` CI hangs, WebShell auth refreshes, and WSL/ConPTY rendering duplication.

## 2. Releases
- **v0.21.6** ([releases](https://github.com/QwenLM/qwen-code/releases))  
  - Added experimental native Live Voice support to WebShell on macOS with real-time audio via a global shortcut. ([#7859](https://github.com/QwenLM/qwen-code/pull/7859))
  - WebShell conversation turn-expansion behavior was improved for active background interactions.
- **v0.21.6-nightly.20260806.cb3dc107f**  
  - Contains one test fix: deflake glob external-path test by using a dedicated empty dir instead of `/tmp`. ([#8604](https://github.com/QwenLM/qwen-code/pull/8604))
- **desktop-v0.1.0** ([releases](https://github.com/QwenLM/qwen-code/releases))  
  - Desktop shell release with CI container-job fixes and WebShell preselection/behavior fixes.

## 3. Hot Issues
Selected from 38 issues updated in the last 24 hours.

- **[#8136 — Provider warning sanitizer truncates port-bearing messages and leaks passwords containing `@`](https://github.com/QwenLM/qwen-code/issues/8136)** — P2 security bug. The URL sanitizer used for provider warnings mis-parses userinfo when a password contains `@`, and also truncates messages containing ports. Sensitive provider credentials can leak into `/status` payloads. 8 comments.

- **[#8582 — Read-only shell classifier auto-approves command substitution hidden by line continuation or `${var@P}`](https://github.com/QwenLM/qwen-code/issues/8582)** — P1 security bypass. Both the AST-based read-only check and the runtime substitution gate miss obfuscated command substitution, so read-only mode can silently execute arbitrary code. 5 comments.

- **[#8532 — CI logs make mocked disk-full test errors look like runner ENOSPC](https://github.com/QwenLM/qwen-code/issues/8532)** — Error-path unit tests deliberately throw `new Error('disk full')`, and production logging makes CI output look like real runner disk exhaustion. This creates false alarms and wastes maintainer time. 6 comments.

- **[#8615 — Desktop 0.1.0 on Windows crashes on startup: `EISDIR lstat 'C:'`](https://github.com/QwenLM/qwen-code/issues/8615)** — P1 desktop regression. Opening a workspace folder crashes the bundled runtime at workspace canonicalization. A fix is already in progress. 4 comments.

- **[#8597 — CI `/review` reverse-audit fan-out hangs silently until the outer timeout kills the run](https://github.com/QwenLM/qwen-code/issues/8597)** — P1 CI reliability. 12 timeouts on Aug 4 and 9 more before 14:50 on Aug 5, many burning the full 360-minute budget. 4 of the 5 most recent runs share the same hang failure mode. 3 comments.

- **[#8606 — VSCode companion Edit/Write links always resolve to `<workspace-root>/<basename>`](https://github.com/QwenLM/qwen-code/issues/8606)** — File-operation links break for any nested file, showing "file not found" instead of opening the target. Directly impacts VSCode extension workflows. 3 comments.

- **[#8560 — WebShell session deep-link refresh returns 401 when `qwen serve` has a bearer token](https://github.com/QwenLM/qwen-code/issues/8560)** — Session deep links work until the page is refreshed, then the public HTML shell cannot reload the session. Blocks long-lived remote sessions. 3 comments.

- **[#8580 — TUI flickers continuously in tmux < 3.5](https://github.com/QwenLM/qwen-code/issues/8580)** — Rendering issue caused by full-screen clear+repaint on overflowing frames, guarded only by an unqueried DEC 2026 capability. Severely impacts tmux users. Related report: [#8562](https://github.com/QwenLM/qwen-code/issues/8562). 3 comments.

- **[#8584 — Anthropic model-ID parsing rejects dotted-minor aliases and lacks Opus 5 token limits](https://github.com/QwenLM/qwen-code/issues/8584)** — Proxy deployments using aliases like `claude-opus-4.8` fail parsing, and Opus 5 token-limit metadata is missing. Causes provider compatibility issues for Anthropic users. 3 comments.

- **[#8538 — Copy-response button does nothing on Windows desktop](https://github.com/QwenLM/qwen-code/issues/8538)** — High-frequency UX bug: the clipboard remains unchanged even after restarts and Windows reboot. 4 comments.

## 4. Key PR Progress
Selected from 50 PRs updated in the last 24 hours.

- **[#8619 — fix(desktop): strip Windows verbatim prefix from workspace paths](https://github.com/QwenLM/qwen-code/pull/8619)** — Replaces `std::fs::canonicalize` with `dunce::canonicalize` in desktop-shell workspace paths. Directly addresses the Windows `EISDIR lstat 'C:'` crash in #8615.

- **[#8620 — fix(serve): allow approved same-host text reads outside workspace](https://github.com/QwenLM/qwen-code/pull/8620)** — Aligns daemon-side text reads with CLI permission semantics, allowing host files outside the workspace when explicitly approved. Closes the inconsistency reported in #8618.

- **[#8399 — fix(core): recognize OpenAI SDK APIUserAbortError as an abort](https://github.com/QwenLM/qwen-code/pull/8399)** — The OpenAI SDK user-abort error no longer produces misleading `error_type=APIUserAbortError` noise because it is now correctly classified as an abort.

- **[#8602 — fix(core): cap a streaming response's total lifetime, slim the review fan-out launch](https://github.com/QwenLM/qwen-code/pull/8602)** — Adds a per-request total-lifetime cap for streaming responses and reduces the `/review` fan-out launch surface. This is the main mitigation for the silent `/review` CI hangs in #8597.

- **[#8445 — fix(web-shell): allow session refresh with daemon auth](https://github.com/QwenLM/qwen-code/pull/8445)** — Allows exact WebShell session document navigation to load the public HTML shell before bearer auth, while keeping session API subpaths protected. Fixes #8560.

- **[#8613 — feat(web-shell): tmux-backed interactive terminal sub-agent](https://github.com/QwenLM/qwen-code/pull/8613)** — Lets an agent run REPLs and TUI apps in a tmux session on the daemon host and stream a live interactive terminal view into WebShell.

- **[#8529 — feat(core): resolve model modalities from API metadata](https://github.com/QwenLM/qwen-code/pull/8529)** — Fetches modalities from models.dev for configured models and runtime switches, with a compact snapshot and background refresh so cold startup is not blocked.

- **[#8465 — feat(core): checkpoint long-running Goal evidence](https://github.com/QwenLM/qwen-code/pull/8465)** — Adds durable, Core-owned evidence checkpoints before the bounded evidence catalog fills up, preventing long-running Goals from losing context.

- **[#7897 — fix(cli): skip terminal redraw optimizer on WSL/ConPTY](https://github.com/QwenLM/qwen-code/pull/7897)** — Fixes the WSL + Windows Terminal streaming duplication bug by disabling batched cursor-up sequences under ConPTY.

- **[#8616 — feat(telemetry): align session lifecycle with OpenTelemetry](https://github.com/QwenLM/qwen-code/pull/8616)** — Emits standard `session.start` and `session.end` LogRecords with `event.name` and `session.id`, including `session.previous_id` for resumed sessions.

## 5. Feature Request Trends
- **Desktop as a thin shell over WebShell**  
  The community is pushing for a lower-maintenance desktop experience that reuses WebShell as the primary UI, deprecating the Electron desktop app and renaming the Tauri shell. ([#8092](https://github.com/QwenLM/qwen-code/issues/8092), [#8596](https://github.com/QwenLM/qwen-code/issues/8596))

- **Phone/local remote control**  
  A first-class "Local Control" mode with QR-code pairing for phone access to local sessions was requested for both CLI and desktop. ([#8595](https://github.com/QwenLM/qwen-code/issues/8595))

- **Background automation and daemon health**  
  Multiple requests target background Agent recovery, `/slow` batch mode for lower-cost async runs, TS SDK hook support, and OpenTelemetry session lifecycle alignment. ([#8586](https://github.com/QwenLM/qwen-code/issues/8586), [#8605](https://github.com/QwenLM/qwen-code/issues/8605), [#8591](https://github.com/QwenLM/qwen-code/issues/8591), [#8589](https://github.com/QwenLM/qwen-code/issues/8589))

- **Tool-output governance and bounded display payloads**  
  Follow-ups to #7306 continue asking for bounded textual tool-result payloads across ACP and headless output, plus stronger artifact lifecycle controls. ([#8447](https://github.com/QwenLM/qwen-code/issues/8447))

## 6. Developer Pain Points
- **Terminal rendering fragility is a recurring theme**  
  Reported problems include tmux <3.5 flicker, WSL/ConPTY duplicated output, and scrollback reprints when the terminal is resized. ([#8580](https://github.com/QwenLM/qwen-code/issues/8580), [#8562](https://github.com/QwenLM/qwen-code/issues/8562), [#7897](https://github.com/QwenLM/qwen-code/pull/7897), [#8557](https://github.com/QwenLM/qwen-code/issues/8557))

- **Desktop UI still has rough edges on Windows/macOS**  
  Dead copy-response buttons, unclickable Markdown links, ineffective language switching, and startup crashes are frequent desktop complaints. ([#8538](https://github.com/QwenLM/qwen-code/issues/8538), [#8593](https://github.com/QwenLM/qwen-code/issues/8593), [#8592](https://github.com/QwenLM/qwen-code/issues/8592), [#8615](https://github.com/QwenLM/qwen-code/issues/8615))

- **CI reliability and misleading logs**  
  `/review` jobs silently burn the full timeout budget, mocked disk-full errors look real, and autofix concurrency gaps cause redundant runs. ([#8597](https://github.com/QwenLM/qwen-code/issues/8597), [#8532](https://github.com/QwenLM/qwen-code/issues/8532), [#8435](https://github.com/QwenLM/qwen-code/pull/8435))

- **Permissions, auth, and security edge cases**  
  Read-only shell classifier bypasses, provider warning sanitizer leaks, WebShell 401 refreshes, and inconsistent same-host file reads are the most security-sensitive recurring pain points. ([#8582](https://github.com/QwenLM/qwen-code/issues/8582), [#8136](https://github.com/QwenLM/qwen-code/issues/8136), [#8560](https://github.com/QwenLM/qwen-code/issues/8560), [#8618](https://github.com/QwenLM/qwen-code/issues/8618))

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

**DeepSeek TUI / CodeWhale Community Digest — 2026-08-06**

*Note: the issue/PR URLs in the dataset point to `Hmbown/CodeWhale`, matching the data source.*

### 1. Today's Highlights
No new release landed in the last 24h, but the PR queue is active with 14 PRs updated. The most significant work is around making managed clients first-class: the ACP server is finally being wired to execute real tool calls, and the Runtime API is gaining lifecycle endpoints for MCP, memory, goals, skills, and verifier receipts. TUI quality fixes also feature prominently, including ratatui pinning, scroll/capture behavior, subagent resume, and wait-time visibility.

### 2. Releases
No releases in the last 24h.

### 3. Hot Issues
Only **1 issue** was updated in the last 24h, so fewer than 10 are available.

- [#4029 [OPEN] planning to create an interface similar to Reasonix?](https://github.com/Hmbown/CodeWhale/issues/4029) — Author: `longASKme` | Created: 2026-07-04 | Updated: 2026-08-05 | Comments: 4 | 👍: 0
  The only community issue updated in the window. It asks whether the project plans to build an interface similar to Reasonix, implying interest in a richer, possibly more visual/AI-native UI beyond the TUI. The 4 comments show active conversation, though no upvotes yet means it hasn’t become a consensus request.

### 4. Key PR Progress
Selected from 14 PRs updated in the last 24h:

- [#5135 release: Codewhale v0.9.4 release train](https://github.com/Hmbown/CodeWhale/pull/5135) — Integration train for v0.9.4, currently 77 commits ahead of `main`; supersedes #5044 and contains all 2026-08-01 source candidates.
- [#5225 feat(acp): expose file/search/git/patch/shell tools over session/prompt](https://github.com/Hmbown/CodeWhale/pull/5225) — ACP server previously streamed only model text; this makes it actually execute tool calls, fixing chat-only behavior for Zed and other ACP bridges.
- [#5130 feat(runtime-api): bounded MCP server configuration and lifecycle management](https://github.com/Hmbown/CodeWhale/pull/5130) — Adds CRUD-style `/v1/apps/mcp/servers` routes so managed clients no longer need to edit TOML/JSON directly.
- [#5131 feat: Runtime API memory endpoints — bounded inspection and lifecycle controls](https://github.com/Hmbown/CodeWhale/pull/5131) — Adds `/v1/memory` routes behind `require_runtime_token`, giving clients inspectable memory scope/provenance and lifecycle control.
- [#5133 feat(runtime-api): expose persistent goal-loop state and completion controls](https://github.com/Hmbown/CodeWhale/pull/5133) — New GET/completion routes for `/v1/threads/{id}/goal`, allowing managed clients to read and drive goal-loop state.
- [#5132 Runtime API: expose verifier receipts and evidence beyond the aggregate counter](https://github.com/Hmbown/CodeWhale/pull/5132) — Adds read-only endpoints under `/v1/fleet/runs/{run_id}/` for durable task receipts, evidence, and retry-specific failure data.
- [#5129 feat(runtime-api): add skill lifecycle endpoints — install, update, uninstall, trust, audit](https://github.com/Hmbown/CodeWhale/pull/5129) — Brings full skill lifecycle management to HTTP clients, matching what the TUI already offers.
- [#5242 feat(tui/subagent): resume interrupted children from checkpoint via followup](https://github.com/Hmbown/CodeWhale/pull/5242) — Fixes dead-lettering of `interrupted_continuable` children; long tasks interrupted mid-way can now be resumed instead of re-dispatched.
- [#5240 feat(tui/shell): surface real wait elapsed time in tool content](https://github.com/Hmbown/CodeWhale/pull/5240) — Exposes the actual wait/delta duration to the model; previously the model only saw metadata it couldn’t read, causing poor wait/poll behavior.
- [#5192 fix(tui): pin ratatui to 0.30.0](https://github.com/Hmbown/CodeWhale/pull/5192) — CLOSED. Pins ratatui to avoid `ratatui-core 0.1.1+` making `Terminal::clear()` issue a blocking cursor position report that races the TUI event loop.

### 5. Feature Request Trends
Issue-level feature requests are thin right now — only one issue was updated. The clear signal from that issue is interest in a **Reasonix-like interface**, i.e. a different, more visual interaction model around the agent.

Indirectly, the PR set shows a strong internal product direction toward **Runtime API completeness** — MCP lifecycle, memory inspection, goal-loop control, skill management, and verifier evidence. Combined with the ACP tool-execution PR, the pattern is: managed/desktop clients should be able to do everything the TUI can do.

### 6. Developer Pain Points
Recurring pain points visible in the PRs:

- **ACP integrations were chat-only** — editors/bridges could not trigger actual code-editing tools through `session/prompt` (#5225).
- **Manual config editing is still a burden** — managed clients had no HTTP path to update MCP servers, skills, memory, or goals, forcing direct TOML/JSON edits (#5130, #5129, #5133).
- **Interrupted long tasks were stuck** — checkpoints existed but no way to resume interrupted subagents, forcing full re-dispatch (#5242).
- **Hidden tool timing** — wait/delta results looked identical to the model whether a task just started or ran for minutes, biasing the model toward busy-polling (#5240).
- **TUI terminal-mode bugs** — mouse-wheel scrolling was broken in long transcripts, and ratatui upgrades introduced a blocking cursor-position query race (#5234, #5192).
- **Windows/OpenHarmony linker path quoting** — SDKs installed under paths with spaces broke linker argument passing (#5095, closed).

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/boom7sss/agents-radar).*