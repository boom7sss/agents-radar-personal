# AI CLI Tools Community Digest 2026-08-08

> Generated: 2026-08-08 02:01 UTC | Tools covered: 9

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

# AI CLI Tools Cross-Comparison Report — 2026-08-08

## 1. Ecosystem Overview

Nine AI coding CLIs are actively developed, from enterprise orchestration platforms (Claude Code, GitHub Copilot CLI) to model-agnostic multi-provider tools (OpenCode, Pi, DeepSeek TUI) and vendor-specific agents (Codex, Gemini CLI, Kimi Code, Qwen Code). The shared agenda is converging on three fronts: cross-agent interoperability (AGENTS.md, MCP), persistent memory across sessions, and safety guardrails for autonomous operation. Windows reliability remains the largest recurring pain point across every major tool, while custom-provider compatibility (Azure, DeepSeek, Bedrock, LM Studio) is consuming increasing engineering effort. Release velocity is bifurcating — enterprise tools ship stable builds daily, while Rust-track and nightly trains (Codex, Gemini, Qwen) iterate on alpha/preview channels.

## 2. Activity Comparison

Counts reflect issues/PRs surfaced in today's digest, not full tracker totals.

| Tool | Hot issues surfaced | PRs active | Releases (24h) | Release status |
|---|---|---|---|---|
| Claude Code | 10 | 3 | 2 (v2.1.224, v2.1.225) | Stable, two daily releases |
| OpenAI Codex | 10 | 10 | 3 (rust-v0.148.0-alpha.1/2/4) | Alpha churn on Rust track |
| Gemini CLI | 10 | 16 (10 key + 6 noteworthy) | 4 (v0.54.4, v0.55.0-preview.2, 2 nightlies) | Stable patch + preview + nightly train |
| GitHub Copilot CLI | 10 | 0 | 3 (v1.0.79-7 → -9) | Stable patch releases |
| Kimi Code CLI | 2 | 2 | 0 | — (no release) |
| OpenCode | 10 | 10 | 1 (v1.18.15) | Stable feature release |
| Pi | 10 | 10 | 1 (v0.84.1) | Stable feature release |
| Qwen Code | 10 | 10 | 1 (nightly) | Nightly only, no stable |
| DeepSeek TUI | 10 | 10 | 0 | v0.9.4 blocked on CI |

Notable: Claude Code and Copilot CLI show low/open PR counts (3 and 0) despite shipping releases — maintainer focus is on release trains, not community PR absorption. DeepSeek TUI is version-bumped but unpublishable pending a green CI run. Kimi Code's digest footprint (2 issues, 2 PRs) is the smallest by an order of magnitude.

## 3. Shared Feature Directions

**1. Persistent cross-session memory.** Kimi (#1283), DeepSeek TUI (#2492), Qwen Code (#6487), Gemini CLI (Auto Memory: #26522, #26525), and Claude Code's AGENTS.md push (#6235, 4,526 👍) all demand context that survives restarts — automatic and manual, read back correctly, and never silently dropped on compaction.

**2. Windows as a first-class platform.** Claude Code (TUI unresponsive #59750, ECONNRESET #84072), Codex (elevated sandbox #10090, Computer Use #37043, WindowsApps ACL #13965), Copilot CLI (6 Windows issues incl. clipboard #3622, render loop #4222, notification crash #4219), and Qwen Code (IME #8625, EISDIR crash #8615) all report Windows-specific breakage. The platform remains the ecosystem's #1 reliability gap.

**3. Subagent safety and authorization boundaries.** Kimi's `rm -rf` outside the workspace (#2596), Claude Code's agentic subagent bypassing explicit constraints (#84968), Gemini's subagents running with permissions disabled (#22093), and Qwen's git-escape guards (#8687) show capability enforcement is a growing liability as agents become more autonomous.

**4. Plugin/skill ecosystem control.** Users want granular control and organization: disabling individual Claude skills (#14920), skill subfolders in Copilot (#1632) and OpenCode (#38853), Qoder plugin compatibility in Qwen (#8661), and Agent Plugins support in Pi (#7776).

**5. MCP ecosystem maturation and provider parity.** Codex's namespace-tool flattening for non-OpenAI providers (#26234), Copilot's orphaned MCP processes (#4392) and false-loaded states (#1129), Qwen's SSE hangs (#8550) and stale metadata (#8492), and Pi's lost custom tool renderers (#7740) show MCP transport/lifecycle reliability and serialization parity are cross-tool problems.

**6. Long-session reliability and compaction.** Pi's compaction firing only after provider overflow (#6879) and post-compaction stalls (#7020), DeepSeek's hangs on large parallel tasks (#1425), Qwen's memory loss on compaction (#6487), and Claude's ghost Remote Control sessions (#77372) point to context lifecycle management as a top reliability issue.

**7. Evaluation and observability infrastructure.** Gemini's caretaker triage evals (#28530), `eval:validate` static analysis (#28344), and component-level eval EPIC (#24353); Codex's tool-namespace turn metadata (#37492) and payload-trace limiting (#37497); and Qwen's OpenTelemetry session lifecycle alignment (#8616) show mature tools investing in measurable agent quality.

## 4. Differentiation Analysis

| Tool | Primary focus | Target users | Technical approach |
|---|---|---|---|
| Claude Code | Enterprise orchestration: self-hosted runners, gateway spend controls, plugin archives | Enterprise teams standardized on Anthropic | Plugin/hooks + gateway; stable daily releases |
| OpenAI Codex | Systems-grade agent runtime: Rust CLI, gRPC code-mode, sandbox/Computer Use | OpenAI power users; custom-provider adopters | Rust, protocol-first (protobuf), alpha release train |
| Gemini CLI | Reliability & automated QA: caretaker issue-triage, eval frameworks, SSRF hardening | Developers on Gemini models; Google ecosystem | Nightly train; LLM-as-judge evals; GCP-deployed caretaker |
| GitHub Copilot CLI | Enterprise governance: sandbox policies, allow-auto-only, agent plugins | GitHub Enterprise customers | Node/Ink TUI; MCP + Plugins; stable patches |
| Kimi Code CLI | Lightweight MoonshotAI model CLI | MoonshotAI model users | Early-stage; permission modes (yolo); minimal ecosystem |
| OpenCode | Model-agnostic provider aggregation: Go plan, web/TUI, Modal VM sandboxes, background subagents | Multi-provider developers; OSS community | TUI + web + daemon; provider-agnostic billing |
| Pi | Long-session reliability and extensibility: harness recovery, compaction, Cursor CLI bridge | TUI/extension power users | Node monorepo; extension API; provider adapters |
| Qwen Code | Web/IM-first agent surfaces: Web Shell, daemon turn-status APIs, DingTalk/Feishu channels | Enterprise & Asia-first workflows; Qwen users | Daemon architecture; ACP/SDK; OpenTelemetry |
| DeepSeek TUI | Multi-agent fleets: builder/advisor subagents, model auto-selection | DeepSeek model power users | Rust (18 packages); subagent orchestration; MCP registry sync |

The key division is between tools optimizing for **enterprise control** (Claude Code, Copilot CLI — fleet management, spend limits, policy enforcement) and tools optimizing for **model flexibility and surface area** (OpenCode, Pi, Qwen — more providers, more UIs, more channels). Codex and Gemini CLI are engineering showcases for their model vendors: Codex pushes protocol and sandbox systems, Gemini invests disproportionately in eval infrastructure. Kimi Code is the outlier — least activity, single-vendor focus, and a community whose top demand (memory) remains unmet.

## 5. Community Momentum & Maturity

A useful size proxy is top-issue engagement: Claude Code's AGENTS.md request has **4,526 👍** — roughly 80× the most-voted Codex issue (58 👍) and two orders of magnitude above Gemini/Pi/Copilot leaders. Claude Code is the ecosystem's center of gravity, though its 3 active PRs suggest maintainers are release-focused rather than issue-absorbing.

- **Highest momentum:** Claude Code (2 stable releases, dominant issue gravity); Gemini CLI (16 PRs, nightly train, caretaker + eval infrastructure); Codex (3 alphas + 10 PRs in 24h — fastest code velocity).
- **Rapidly iterating:** Qwen Code (nightly + 10 PRs across daemon, Web Shell, telemetry); OpenCode (feature release + 10 PRs, engaged 45-comment outage thread); Pi (release + 10 PRs on deep lifecycle refactors).
- **Steady but process-constrained:** DeepSeek TUI (10 PRs, ambitious features, but v0.9.4 blocked on CI); Copilot CLI (3 patches shipped but 0 PRs and regression churn — #2494, #4222, and #4401 are repeat failures of previously fixed behaviors).
- **Nascent:** Kimi Code CLI (2 issues, 2 PRs, no release; the `rm -rf` safety incident #2596 is a warning sign for its permission-mode design).

Maturity correlates with enterprise features (Claude self-hosted runners, Copilot policy enforcement) and eval/telemetry investments (Gemini, Codex, Qwen); DeepSeek and Kimi are still in reliability/process catch-up.

## 6. Trend Signals

1. **Cross-agent interoperability is a hard requirement.** The most-voted issue in the entire ecosystem is Claude Code's AGENTS.md support (#6235, 4,526 👍), and Codex's MCP namespace flattening (#26234) shows protocol-level interop demand. For developers: standards support (AGENTS.md, MCP) is becoming a purchase criterion.

2. **Persistent memory is the largest unmet feature.** Memory requests span at least five communities (Kimi #1283, DeepSeek #2492, Qwen #6487, Gemini Auto Memory, Claude AGENTS.md). Tools with reliable cross-session memory will win retention.

3. **Windows is the universal tax.** No tool is exempt — from TUI freezes to sandbox failures to installer crashes. If you target Windows, budget for TUI, sandbox, and installer engineering; as a user, web/remote surfaces (Claude self-hosted runners, Qwen Web Shell) are the emerging workaround.

4. **Autonomy is forcing safety engineering.** Data-loss incidents (Kimi #2596), subagent authorization bypasses (Claude #84968), and git-escape hardening (Qwen #8687) are now real reported events. Evaluate permission and sandbox models before adopting yolo/autopilot modes.

5. **Provider-specific API quirks are fragmenting the ecosystem.** `reasoning_content` round-tripping (Pi #7702, OpenCode #24334), Azure namespace validation (#37380), and >128-tool ceilings (Gemini #24246) are recurring integration failures. A provider-abstraction or gateway layer is becoming a necessity.

6. **Eval-driven development is becoming a moat.** Gemini's caretaker evals and `eval:validate`, Codex's turn metadata, and Qwen's OTel alignment indicate that tools measuring their own quality will out-iterate those that don't. Check whether a tool has an eval harness — it predicts iteration speed.

7. **Long-session economics are the next frontier.** Compaction timing, memory loss on compaction, and multi-hour agentic runs dominate reliability complaints (Pi #6879, DeepSeek #1425, Qwen #6487). Context lifecycle management is where the next round of agent reliability will be won.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
*Source: github.com/anthropics/skills | Data as of 2026-08-08*

---

## 1. Top Skills Ranking
*Most-discussed pull requests by comment volume; all remain open.*

1. **[#1298 — skill-creator eval overhaul](https://github.com/anthropics/skills/pull/1298)** *(open)* — Fixes the widely reproduced `run_eval.py` 0% recall bug (tracked in [issue #556](https://github.com/anthropics/skills/issues/556), 12 comments, 7 👍) by installing the eval artifact as a real skill, plus Windows stream-reading, trigger-detection, and parallel-worker fixes. The most-commented PR in the repo; the description-optimization loop was previously tuning against pure noise.

2. **[#514 — document-typography skill](https://github.com/anthropics/skills/pull/514)** *(open)* — Typographic quality control for AI-generated documents: orphan word wrap, widow paragraph headers, and numbering misalignment. Discussion centers on how universal these defects are across Claude-generated documents and where the skill should sit relative to the existing `document-skills` plugin.

3. **[#538 — pdf SKILL.md case-sensitivity fix](https://github.com/anthropics/skills/pull/538)** *(open)* — Corrects 8 uppercase/lowercase file-reference mismatches (`REFERENCE.md` → `reference.md`, `FORMS.md` → `forms.md`) that break the pdf skill on case-sensitive filesystems. A small, high-value reliability fix with sustained comment activity.

4. **[#486 — ODT skill](https://github.com/anthropics/skills/pull/486)** *(open)* — OpenDocument text creation, template filling, and ODT→HTML parsing, triggered by "ODT/ODS/ODF/OpenDocument/LibreOffice" mentions. Discussion covers LibreOffice interoperability and ISO-standard document support.

5. **[#210 — frontend-design skill clarity pass](https://github.com/anthropics/skills/pull/210)** *(open)* — Rewrites the frontend-design skill so every instruction is actionable within a single conversation and specific enough to steer behavior without over-constraining output. Commenters focus on the balance between prescriptive guidance and creative freedom.

6. **[#83 — skill-quality-analyzer & skill-security-analyzer](https://github.com/anthropics/skills/pull/83)** *(open)* — Two meta-skills for the marketplace: a five-dimension quality analyzer (structure/docs 20%, examples, resources…) and a security analyzer for community-contributed skills. Discussion ties directly into the trust-boundary concerns raised in [issue #492](https://github.com/anthropics/skills/issues/492).

7. **[#541 — docx tracked-change `w:id` collision fix](https://github.com/anthropics/skills/pull/541)** *(open)* — Prevents document corruption when the DOCX skill adds tracked changes to files with existing bookmarks; in OOXML, `w:id` is a shared ID space across bookmarks, comments, and move ranges. Highlights the fragility of programmatic OOXML editing.

8. **[#1367 — self-audit skill v1.3.0](https://github.com/anthropics/skills/pull/1367)** *(open)* — Mechanical verification that every claimed output file exists, followed by a four-dimension reasoning audit ordered by damage severity; model- and stack-agnostic. Complements the reasoning-gate pipeline proposed in [issue #1385](https://github.com/anthropics/skills/issues/1385).

---

## 2. Community Demand Trends
*Distilled from the most-commented issues.*

- **Security & trust boundaries** — [Issue #492](https://github.com/anthropics/skills/issues/492) (43 comments) is the single hottest thread: community skills distributed under the `anthropic/` namespace enable trust-boundary abuse, where users grant elevated permissions believing a skill is official. [Issue #1175](https://github.com/anthropics/skills/issues/1175) raises related security/context-window concerns for SharePoint Online handling.
- **Org-wide skill sharing** — [Issue #228](https://github.com/anthropics/skills/issues/228) (16 comments, 8 👍) demands native organizational skill libraries/sharing links instead of manual `.skill` file transfers.
- **Skill evaluation reliability** — [Issues #556](https://github.com/anthropics/skills/issues/556) and [#1169](https://github.com/anthropics/skills/issues/1169) document the `run_eval.py` 0% recall failure; [issue #202](https://github.com/anthropics/skills/issues/202) argues skill-creator itself should be an operational skill, not developer documentation.
- **Context-window efficiency** — [Issue #1487](https://github.com/anthropics/skills/issues/1487): the bundled `claude-api` skill eagerly injects ~156k tokens in a single call; [issue #189](https://github.com/anthropics/skills/issues/189) reports duplicate identical skills across plugins (9 👍).
- **Anticipated new skill directions** — compact-memory / symbolic agent state ([#1329](https://github.com/anthropics/skills/issues/1329)), agent-governance safety patterns ([#412](https://github.com/anthropics/skills/issues/412)), and reasoning quality-gate pipelines ([#1385](https://github.com/anthropics/skills/issues/1385)).
- **Platform reach** — Bedrock support ([#29](https://github.com/anthropics/skills/issues/29)) and exposing Skills as MCPs ([#16](https://github.com/anthropics/skills/issues/16)).
- **Document reliability** — [Issue #12](https://github.com/anthropics/skills/issues/12): docx whitespace reformatting produces Word-unreadable files.

---

## 3. High-Potential Pending Skills
*Active-comment PRs not yet merged; likely to land soon.*

- **[#514 document-typography](https://github.com/anthropics/skills/pull/514)** — Typographic QC for generated documents (orphans, widows, numbering).
- **[#486 ODT](https://github.com/anthropics/skills/pull/486)** — OpenDocument creation/template-filling/ODT→HTML.
- **[#723 testing-patterns](https://github.com/anthropics/skills/pull/723)** — Full testing stack: Testing Trophy model, unit/AAA patterns, React Testing Library, mocking, e2e.
- **[#525 pyxel retro game dev](https://github.com/anthropics/skills/pull/525)** — `write → run_and_capture → inspect → iterate` workflow for pixel-art games via pyxel-mcp.
- **[#1302 color-expert](https://github.com/anthropics/skills/pull/1302)** — Color naming systems (ISCC-NBS, Munsell, XKCD, RAL, Ridgway) and color-space selection tables (OKLCH/OKLAB/CAM16).
- **[#1479 plan-file-hygiene](https://github.com/anthropics/skills/pull/1479)** — Lifecycle management for accumulating planning artifacts (addresses #1417).
- **[#83 skill-quality/security analyzers](https://github.com/anthropics/skills/pull/83)** — Meta-skills for evaluating and securing community Skills.
- **[#1367 self-audit](https://github.com/anthropics/skills/pull/1367)** — Mechanical verification + reasoning quality gate before delivery.

---

## 4. Skills Ecosystem Insight

**The community's most concentrated demand is for meta-tooling that makes Skills themselves reliable and trustworthy — evaluation loops, quality/security analyzers, and audit gates — with document-production (docx/pdf/odt/typography) as the strongest vertical skill category.**

---

# Claude Code Community Digest — 2026-08-08

## Today's Highlights

Two releases shipped: v2.1.224 introduced self-hosted runners (`claude self-hosted-runner`) and archive-based plugin installs, while v2.1.225 added gateway spend-limit warnings and a workspace trust prompt for `claude agents`. The community's most-voted issue — AGENTS.md support (#6235, 4,526 👍) — continues to dominate, and a wave of new bug reports around Remote Control ghost sessions, Windows stability, and silent plugin behavior suggests scaling pains as the platform expands.

## Releases

**v2.1.225**
- Gateway spend-limit support: the limit-reached usage warning now names the cap, its reset time, and the operator's message (requires the gateway on 2.1.225).
- Added a workspace trust prompt to `claude agents` for untrusted directories, matching existing CLI behavior.

**v2.1.224**
- Self-hosted environments: `claude self-hosted-runner` turns your own machines or containers into a place for Claude Code web, mobile, and desktop sessions to run (Team/Enterprise plans).
- New `archive` plugin source: install plugins from a zip over HTTPS without a git dependency.

## Hot Issues

1. **[#6235 — Feature Request: Support AGENTS.md](https://github.com/anthropics/claude-code/issues/6235)** — 347 comments, 4,526 👍. The tracker's hottest issue by far: as Codex, Amp, and Cursor standardize around AGENTS.md, developers want Claude Code to interoperate rather than rely solely on CLAUDE.md. Momentum points to cross-agent compatibility as a must-have.

2. **[#14920 — Add ability to disable individual Claude plugin skills](https://github.com/anthropics/claude-code/issues/14920)** — Users want granular control over plugin skills (keep `:commit`, drop `commit-push-pr` / `clean_gone`). 83 👍 signals broad demand for plugin composability.

3. **[#59750 — `claude agents` TUI fully unresponsive on Windows Terminal](https://github.com/anthropics/claude-code/issues/59750)** — Broken rendering and a dead input loop since 2.1.143, still open and stale-labeled. Windows TUI reliability remains a recurring frustration.

4. **[#50884 — Let users remove stale/dead Remote Control environments](https://github.com/anthropics/claude-code/issues/50884)** — Dead environments linger in the claude.ai/code list with no removal path; related reports (#77372) show ghost sessions causing permanent 404s at worker-attach time.

5. **[#72495 — Prompt suggestions silently suppressed by rate-limit status gate](https://github.com/anthropics/claude-code/issues/72495)** — A strict-equality gate in the shipped binary suppresses prompt suggestions whenever rate-limit status is `allowed_warning`. The reporter located the gate, captured the suppression live, and confirmed it with a pre-registered prediction.

6. **[#64706 — Agent tool ignores `effort:` frontmatter in subagent .md files](https://github.com/anthropics/claude-code/issues/64706)** — Subagents inherit the global `effortLevel` from settings.json instead of their per-file frontmatter, breaking per-agent effort tuning.

7. **[#84072 — ECONNRESET on Windows during API stream after first chunk](https://github.com/anthropics/claude-code/issues/84072)** — Persistent mid-stream resets on Windows 10/11 in both the VS Code extension and terminal CLI; first chunk arrives, then the connection drops.

8. **[#82179 — Bash-tool `grep` shim: catastrophic backtracking OOM](https://github.com/anthropics/claude-code/issues/82179)** — The ugrep emulation re-execs the claude binary as `grep`; patterns combining `-o` with bounded quantifiers hit 6.6 GB RSS / OOM kill on a 20 KB file. A severe performance footgun.

9. **[#84953 — `/goal` condition character limit too low](https://github.com/anthropics/claude-code/issues/84953)** — `/goal` rejects conditions over 4,000 chars after compose/paste, so the failure lands at the worst moment. Users want a higher limit or file reference.

10. **[#84968 — Agentic subagent bypasses authorization gate despite explicit constraints](https://github.com/anthropics/claude-code/issues/84968)** — A subagent pushed a 513-file, 441 MB archive to GitHub despite explicit prompt constraints, raising trust concerns about subagent authorization enforcement.

## Key PR Progress

Only 3 PRs were active in the last 24h — an unusually low volume, suggesting maintainer focus on the release trains:

1. **[#84854 — docs: fix stale hooks documentation link](https://github.com/anthropics/claude-code/pull/84854)** — Updates `bash_command_validator_example.py` to the current `code.claude.com/docs/claude-code/hooks` URL; 46 occurrences across 16 files already migrated.

2. **[#84747 — fix(hookify): enforce proper rule evaluation scope and secure file read](https://github.com/anthropics/claude-code/pull/84747)** — Fixes `load_rules()` bypassing the event filter when `event` is `None`, so unmapped tools like `Read`/`Browser` only trigger `all`-scoped rules; also hardens file read handling.

3. **[#84711 — fix(security): yaml injection and symlink credential overwrites in plugin scripts](https://github.com/anthropics/claude-code/pull/84711)** — Addresses #76580 with defensive checks against YAML injection and symlink credential overwrites in plugin scripts.

## Feature Request Trends

- **Cross-agent standards (AGENTS.md)** — #6235 is the most-supported request in the tracker; developers increasingly work across multiple coding agents and want a shared, tool-agnostic memory format rather than Claude-specific CLAUDE.md.
- **Remote/self-hosted environment lifecycle** — Deleting stale Remote Control environments (#50884, #77372) pairs naturally with the new self-hosted runner release; users want full fleet management over their remote and self-hosted sessions.
- **Granular plugin/skill control** — Disabling individual skills (#14920) and surfacing/documenting plugin dependency installation (#84939) reflect a maturing plugin ecosystem where users want visibility and control.
- **Session ergonomics** — Renaming sessions post-creation (#51791) and pinning/persisting responses for reference (#70987) show demand for richer session management.
- **Cloud-session connectivity** — Outbound SSH from web sessions (#84967) and connector attachment timing on spawned sessions (#83694) highlight needs around running real infrastructure workflows through remote surfaces.

## Developer Pain Points

- **Windows reliability** — TUI unresponsiveness (#59750), ECONNRESET mid-stream (#84072), non-ASCII glob failures (#84966), and desktop app crashes (#84951, #83028) paint Windows as a second-class platform.
- **Remote Control ghost sessions** — Stale environments that can't be deleted and session IDs that 404 on attach (#77372, #50884) are actively blocking remote workflows.
- **Authorization and safeguards misfires** — WebSearch allow rules ignored (#84956), subagents bypassing explicit constraints (#84968), workflow agents stalling on unanswered permission prompts (#78487), and safeguards false-positively downgrading models mid-task (#84952) all erode trust in the permission system.
- **Silent/undocumented behavior** — Plugin installs silently running `bun install`/`npm ci` with no docs (#84939), and a grep shim that can OOM the process (#82179), surprise users in production.
- **Documentation drift** — The ScheduleWakeup tool claims a "5-minute TTL" while subscription main sessions use 1-hour TTL (#74149), and stale doc links persist (#84854) — docs lag behind actual behavior.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-08-08

## Today's Highlights

The Codex project shipped three new Rust `0.148.0` alpha releases and a concentrated batch of backend PRs focused on code-mode latency, MCP event subscriptions, tool-namespace metadata, and diagnostics hardening. Community attention remains centered on Windows sandbox/Computer Use failures and regressions in custom-provider setups (Azure, LiteLLM). Several PRs also landed to improve connection resilience and cleanliness of diagnostic logs.

## Releases

- [`rust-v0.148.0-alpha.1`](https://github.com/openai/codex/releases/tag/rust-v0.148.0-alpha.1)
- [`rust-v0.148.0-alpha.2`](https://github.com/openai/codex/releases/tag/rust-v0.148.0-alpha.2)
- [`rust-v0.148.0-alpha.4`](https://github.com/openai/codex/releases/tag/rust-v0.148.0-alpha.4)

No detailed changelog notes were published for these builds; they appear to be incremental alpha releases on the Rust CLI track.

## Hot Issues

1. [**#8648 — Codex replies to earlier messages instead of latest one in conversations**](https://github.com/openai/codex/issues/8648)  
   **82 comments · 58 👍**  
   A long-running multi-turn context bug. Users report the assistant replying to old messages in active conversations, which makes agentic sessions unreliable. Still open after months.

2. [**#26234 — Flatten MCP namespace tools for non-OpenAI Responses API providers**](https://github.com/openai/codex/issues/26234)  
   **32 comments · 41 👍**  
   MCP tools are serialized as proprietary `{"type": "namespace"}` objects that external providers like Ollama, LM Studio, OpenRouter, and AWS Bedrock cannot handle. Strong demand from local-model and gateway users.

3. [**#35481 — Codex Diff shows "Oops, an error has occurred" in VS Code**](https://github.com/openai/codex/issues/35481)  
   **26 comments · 54 👍**  
   Windows VS Code extension bug where the Codex Diff view fails to render. Since it is closed, a fix may already be in circulation.

4. [**#10090 — `elevated_windows_sandbox` causes all agent commands to fail with `(no output)`**](https://github.com/openai/codex/issues/10090)  
   **24 comments · 7 👍**  
   Windows sandboxed agents fail during `CreateProcessAsUserW` with error 5. This blocks CLI + desktop agent workflows for Business-tier Windows users.

5. [**#37043 — Windows Computer Use fails at EnumWindows with 0x80070003**](https://github.com/openai/codex/issues/37043)  
   **17 comments**  
   Computer Use helper starts but cannot enumerate windows. Survives restarts and appears to be an environment/path resolution problem in the bundled helper.

6. [**#14599 — Allow `trust_level = "trusted"` for any projects**](https://github.com/openai/codex/issues/14599)  
   **16 comments · 57 👍**  
   Users want to permanently trust projects to avoid repeated approval prompts. One of the most-upvoted enhancement requests in the current set.

7. [**#34499 — Cannot create a local Work chat inside a ChatGPT Project (Windows Desktop App)**](https://github.com/openai/codex/issues/34499)  
   **15 comments**  
   Desktop app users cannot create local Work conversations inside ChatGPT Projects, breaking a common project-scoped workflow.

8. [**#29908 — `apply_patch` and managed sandbox fail with Bubblewrap loopback/userns errors on Ubuntu 24.04**](https://github.com/openai/codex/issues/29908)  
   **14 comments**  
   Linux users on Ubuntu 24.04 hit Bubblewrap sandbox setup failures, preventing `apply_patch` and ordinary managed sandbox commands from running.

9. [**#13965 — `apply_patch` fails on Windows because Codex cannot spawn `codex.exe` from WindowsApps**](https://github.com/openai/codex/issues/13965)  
   **12 comments · 10 👍**  
   Closed, but related to the recurring WindowsApps ACL/sandbox spawning issue. Highlights a systemic Windows packaging problem.

10. [**#37380 — 0.147.0 regression: Azure Responses rejects empty functions namespace description**](https://github.com/openai/codex/issues/37380)  
    **9 comments · 19 👍**  
    Recent CLI regression breaking Azure OpenAI users when an empty namespace description reaches provider validation. Especially relevant for custom Responses providers.

## Key PR Progress

1. [**#37519 — Expose auto-review ignore rules in config requirements**](https://github.com/openai/codex/pull/37519)  
   Adds `ignoreRules` to `AutoReviewRequirements` and surfaces configured `auto_review.ignore_rules` through `configRequirements/read`. Improves policy visibility for self-hosted setups.

2. [**#37511 — Enforce automatic review for managed models**](https://github.com/openai/codex/pull/37511)  
   Adds managed `auto_review.required_on_models` requirements and forces listed models to use `on-request` approvals with auto-review. Useful for compliance-focused deployments.

3. [**#37510 — Define the code-mode host gRPC protocol**](https://github.com/openai/codex/pull/37510)  
   New `codex.code_mode.v1` protobuf API for code-mode sessions, executions, waits, and callbacks, with generated Rust `tonic` bindings and Bazel support.

4. [**#37504 — Disable Nagle's algorithm for code-mode WebSockets**](https://github.com/openai/codex/pull/37504)  
   Enables `TCP_NODELAY` for outbound remote-session WebSocket connections, reducing latency on small write-heavy traffic.

5. [**#37494 — Add MCP event discovery and subscriptions**](https://github.com/openai/codex/pull/37494)  
   Exposes hosted Plugin Runtime event definitions and adds cancellable `events/stream` subscriptions in the MCP resource client.

6. [**#37492 — Include tool namespace inventory in turn metadata**](https://github.com/openai/codex/pull/37492)  
   Opt-in `tool_namespaces_info` metadata describes each model-visible function's namespace exposure, direct/deferred status, and code-mode role.

7. [**#37485 — Keep response streams alive through connection failures**](https://github.com/openai/codex/pull/37485)  
   Classifies HTTP connection failures separately from other network errors and retries sampling requests with exponential backoff, showing `Reconnecting...` instead of failing.

8. [**#37483 — Interrupt active code-mode cells with their turn**](https://github.com/openai/codex/pull/37483)  
   New disabled-by-default `code_mode_interrupt` feature stops code-mode work left running when its parent turn is interrupted.

9. [**#37498 — Preserve child waiters during process termination**](https://github.com/openai/codex/pull/37498)  
   Fixes unreaped PTY child processes by detaching the child waiter instead of aborting it during termination, preserving exit status recording.

10. [**#37497 — Limit payload traces in diagnostic logs**](https://github.com/openai/codex/pull/37497)  
    Reduces SQLite log database and diagnostic ring-buffer pressure by limiting HTTP, SSE, and WebSocket payload traces to `DEBUG`-level sinks.

## Feature Request Trends

- **Project/session workflow improvements** — Users want Work chats inside ChatGPT Projects, text-to-voice switching without losing context, and resume behavior that only bootstraps the latest turn instead of replaying full history.
- **Trust and approval controls** — High demand for persistent `trust_level = "trusted"` options, reusable command approvals, and better auto-review ignore rules.
- **MCP ecosystem parity** — Requests to flatten MCP namespace tools for non-OpenAI providers, add plugin MCP secret/env configuration paths, and correct MCP OAuth scope selection.
- **Cross-platform parity** — Repeated asks for Intel macOS Computer Use support and for Windows sandbox/Computer Use to match macOS/Linux behavior.
- **Performance and resource discipline** — Community concern over desktop app crashes, excessive background import work, and heavy thread-history rendering.

## Developer Pain Points

- **Windows sandbox remains a top friction point** — `elevated_windows_sandbox`, WindowsApps ACL failures, `CreateProcessAsUserW failed: 5`, and `spawn EPERM` break `apply_patch`, CLI commands, and Computer Use on Windows.
- **Custom-provider regressions are common** — Codex `0.147.0` triggered Azure and LiteLLM failures; MCP tools are still not callable through non-OpenAI Responses endpoints unless namespace serialization is fixed.
- **Desktop stability concerns persist** — macOS app OOM-crashes while importing legacy Claude Desktop data, 16 GB Apple Silicon machines crash-loop on recent builds, and Windows Desktop crashes when prefetching image-heavy subagent rollouts.
- **Conversation reliability needs work** — Long conversations can reply to stale messages, resumed threads may miss newly available tools or remain on legacy subagent runtimes, and large rollouts can be accidentally loaded by background tasks.
- **MCP connectivity/auth friction** — "Transport Closed" bugs, wrong OAuth scopes, and missing plugin secret configuration paths make self-hosted MCP setups fragile.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-08-08

## Today's Highlights

The release train focuses on reliability and security: capacity exhaustion is being reclassified as a terminal error, and a fix for false capacity warnings preserves the "Keep trying" UI option during surges. On the security front, a critical SSRF vulnerability (CVSS 8.6) in the `web-fetch` tool is being patched. The caretaker agent also matured significantly, with triage evaluation frameworks, prompt hill-climbing results, and GCP deployment tooling landing across multiple PRs.

## Releases

- **v0.56.0-nightly.20260808.gcf22ac7e8** — Reclassifies capacity exhaustion as a terminal error ([PR #28716](https://github.com/google-gemini/gemini-cli/pull/28716)); updates caretaker Firestore schema with `error` and `pr_number` fields ([PR #28467](https://github.com/google-gemini/gemini-cli/pull/28467)).
- **v0.56.0-nightly.20260807.gd5c9a97dc** — Changelog for v0.55.0-preview.1 and routine nightly version bump ([PR #28706](https://github.com/google-gemini/gemini-cli/pull/28706), [PR #28707](https://github.com/google-gemini/gemini-cli/pull/28707)).
- **v0.55.0-preview.2** — Cherry-picks fix `2139b12` onto v0.55.0-preview.1 ([PR #28719](https://github.com/google-gemini/gemini-cli/pull/28719)).
- **v0.54.4** — Cherry-picks fix `56f9688` onto the v0.54.0 branch; bumps through 0.54.2 ([PR #28710](https://github.com/google-gemini/gemini-cli/pull/28710)).

## Hot Issues

1. **[#22323 — Subagent recovery after MAX_TURNS is reported as GOAL success](https://github.com/google-gemini/gemini-cli/issues/22323)** (12 comments, 2 👍) — `codebase_investigator` reports `status: "success"` / `Termination Reason: "GOAL"` even after hitting the max turn limit before doing any work. This masks genuine agent failures as successes and is a top-priority bug.

2. **[#21409 — Generalist agent hangs](https://github.com/google-gemini/gemini-cli/issues/21409)** (8 comments, 8 👍) — Deferring to the generalist agent hangs indefinitely (users report waiting up to an hour) even for trivial folder creation. The 8 reactions reflect broad impact; the workaround is instructing the model not to use subagents.

3. **[#19873 — Zero-Dependency OS Sandboxing & Post-Execution Intent Routing](https://github.com/google-gemini/gemini-cli/issues/19873)** (8 comments, 1 👍) — Proposes letting Gemini 3's native bash capabilities run safely inside an OS sandbox with intent routing — leveraging the model's POSIX-tool affinity without compromising security or UX.

4. **[#24353 — Robust component-level evaluations](https://github.com/google-gemini/gemini-cli/issues/24353)** (7 comments) — Follow-up EPIC to scale the 76 existing behavioral eval tests beyond end-to-end scenarios to component-level coverage across 6 supported Gemini models.

5. **[#22745 — Assess the impact of AST-aware file reads, search, and mapping](https://github.com/google-gemini/gemini-cli/issues/22745)** (7 comments, 1 👍) — Investigates AST-aware tools for precise method-bound reads, reduced token noise, and better codebase navigation. Paired with [#22746](https://github.com/google-gemini/gemini-cli/issues/22746).

6. **[#21968 — Gemini does not use skills and sub-agents enough](https://github.com/google-gemini/gemini-cli/issues/21968)** (6 comments) — Anecdotal but significant: the model ignores custom skills/sub-agents (e.g., gradle/git skills) unless explicitly instructed, undermining user-defined workflows.

7. **[#26522 — Auto Memory retries low-signal sessions indefinitely](https://github.com/google-gemini/gemini-cli/issues/26522)** (5 comments) — Skipped low-signal sessions are never marked processed, so the background extractor re-surfaces them endlessly — a wasted-token and noise problem.

8. **[#25166 — Shell command stuck with "Waiting input" after command completes](https://github.com/google-gemini/gemini-cli/issues/25166)** (4 comments, 3 👍) — Simple CLI commands finish but the agent hangs waiting for input. High impact on interactive workflows; medium effort bug.

9. **[#26525 — Add deterministic redaction and reduce Auto Memory logging](https://github.com/google-gemini/gemini-cli/issues/26525)** (4 comments) — Transcript content is sent to the extraction model *before* redaction; requests deterministic secret redaction and quieter logging. Security-relevant for local transcript processing.

10. **[#22093 — Subagents running without permission since v0.33.0](https://github.com/google-gemini/gemini-cli/issues/22093)** (3 comments) — Subagents (e.g., generalist) execute even when agent modes are disabled in all configs; the user expected MCP-only operation. A trust-boundary regression.

Also notable: [#22232](https://github.com/google-gemini/gemini-cli/issues/22232) (browser agent fail-fast on locked profiles), [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) (browser subagent fails on Wayland), [#20079](https://github.com/google-gemini/gemini-cli/issues/20079) (symlinked agent files not recognized), [#24246](https://github.com/google-gemini/gemini-cli/issues/24246) (400 error with >128 tools), and [#22672](https://github.com/google-gemini/gemini-cli/issues/22672) (agent should discourage destructive commands).

## Key PR Progress

1. **[#28730 — fix(core,cli): resolve false model capacity exhaustion](https://github.com/google-gemini/gemini-cli/pull/28730)** — Fixes false capacity-exhaustion error messaging, corrects the client-side model quota lookup mapping, and preserves the "Keep trying" option during transient capacity surges. Directly addresses user-facing reliability.

2. **[#28725 — fix(security): prevent SSRF via DNS resolution bypass in web-fetch](https://github.com/google-gemini/gemini-cli/pull/28725)** — Fixes a critical SSRF vulnerability (CVSS 8.6, issue [#28555](https://github.com/google-gemini/gemini-cli/issues/28555)) where custom domains could redirect `web-fetch` to private/loopback IPs (e.g., `169.254.169.254`). Essential hardening.

3. **[#28673 — feat(core): add Gemini 3.6 Flash and 3.5 Flash-Lite model configurations](https://github.com/google-gemini/gemini-cli/pull/28673)** — Adds base model definitions, capabilities (`thinking`, `multimodalToolUse`), aliases, and code-execution resolution for two upcoming models.

4. **[#28729 — fix(core): resolve swallowed directory mismatch in IDE connections](https://github.com/google-gemini/gemini-cli/pull/28729)** — Fixes CLI-to-IDE companion connection failures under Cider / VS Code forks where FUSE or virtual directory paths cause candidate port files to be discarded.

5. **[#28597 — fix(cli): load environment variables before resolving settings placeholders](https://github.com/google-gemini/gemini-cli/pull/28597)** — Resolves a load-order race condition where settings were expanded against `process.env` before `.env` was loaded, causing incorrect placeholder resolution.

6. **[#28581 — fix(cli): skip diff hunk markers during @ processing](https://github.com/google-gemini/gemini-cli/pull/28581)** — Prevents unified/combined diff hunk markers (`@@`) from being treated as `@file` references, eliminating two recursive workspace-wide glob searches per hunk and preventing `minimatch`/`path-scurry` heap growth on large diffs.

7. **[#28530 — feat(caretaker-evals): add triage evaluation framework and judge runner](https://github.com/google-gemini/gemini-cli/pull/28530)** — Core evaluation framework with an LLM-as-a-Judge rubric and a parallel Git Worktree benchmark runner for the caretaker issue-triage pipeline.

8. **[#28524 — feat(caretaker-triage): prompt hill-climbing & orchestrator updates](https://github.com/google-gemini/gemini-cli/pull/28524)** — Ships 3 weeks of prompt hill-climbing with significant eval quality improvements, plus a new dedicated `code_explorer` skill.

9. **[#28690 — feat(ingestion): add issue comment handling and re-triage workflow](https://github.com/google-gemini/gemini-cli/pull/28690)** — Processes `issue_comment.created` webhooks so maintainers/reporters can trigger re-triage on `NEEDS_INFO` issues via `@caretaker-agent` mentions or `/caretaker triage` commands.

10. **[#28344 — feat/eval validate](https://github.com/google-gemini/gemini-cli/pull/28344)** — Adds `eval:validate`, a static analysis command enforcing 9 rules on eval source files with a CI-gating exit code. Complements [#28369](https://github.com/google-gemini/gemini-cli/pull/28369) (local eval report command).

Also noteworthy: [#28727](https://github.com/google-gemini/gemini-cli/pull/28727) (Cloud Run eval runner entrypoint), [#28532](https://github.com/google-gemini/gemini-cli/pull/28532) (golden issue collection + Firestore sync), [#28468](https://github.com/google-gemini/gemini-cli/pull/28468) (triage Cloud Run workflow), [#28601](https://github.com/google-gemini/gemini-cli/pull/28601) (caretaker lock clearing on NEEDS_HUMAN), and [#28728](https://github.com/google-gemini/gemini-cli/pull/28728) (js-yaml 4.3.1 security bump).

## Feature Request Trends

- **AST-aware code understanding** — Multiple EPICs ([#22745](https://github.com/google-gemini/gemini-cli/issues/22745), [#22746](https://github.com/google-gemini/gemini-cli/issues/22746)) push toward AST-aware file reads, search, and codebase mapping to reduce token noise and enable precise method-level navigation.
- **Eval infrastructure maturation** — A coordinated push: component-level evals ([#24353](https://github.com/google-gemini/gemini-cli/issues/24353)), local eval reporting ([#28369](https://github.com/google-gemini/gemini-cli/pull/28369)), static validation ([#28344](https://github.com/google-gemini/gemini-cli/pull/28344)), and caretaker triage evals ([#28530](https://github.com/google-gemini/gemini-cli/pull/28530)) — the project is investing heavily in reproducible quality signals.
- **Agent sandboxing and safety** — Requests for OS-level sandboxing ([#19873](https://github.com/google-gemini/gemini-cli/issues/19873)) and discouraging destructive commands ([#22672](https://github.com/google-gemini/gemini-cli/issues/22672)) reflect demand for safer autonomous operation.
- **Subagent/skill usability** — The community wants models to autonomously adopt custom skills and subagents ([#21968](https://github.com/google-gemini/gemini-cli/issues/21968)), with better visibility into subagent trajectories via `/chat share` ([#22598](https://github.com/google-gemini/gemini-cli/issues/22598)).
- **Memory system hardening** — Auto Memory follow-ups ([#26516](https://github.com/google-gemini/gemini-cli/issues/26516), [#26522](https://github.com/google-gemini/gemini-cli/issues/26522), [#26523](https://github.com/google-gemini/gemini-cli/issues/26523), [#26525](https://github.com/google-gemini/gemini-cli/issues/26525)) focus on deterministic redaction, invalid-patch quarantine, and stopping endless retries.

## Developer Pain Points

- **Agent hangs and false completions** — The most recurring cluster: generalist agent hangs ([#21409](https://github.com/google-gemini/gemini-cli/issues/21409)), shell "Waiting input" deadlocks ([#25166](https://github.com/google-gemini/gemini-cli/issues/25166)), interactive prompt stalls ([#22465](https://github.com/google-gemini/gemini-cli/issues/22465)), subagent MAX_TURNS reported as goal success ([#22323](https://github.com/google-gemini/gemini-cli/issues/22323)), and output-hook crashes ([#22186](https://github.com/google-gemini/gemini-cli/issues/22186)). Together they undermine trust in unattended operation.
- **Browser agent fragility** — Failures on Wayland ([#21983](https://github.com/google-gemini/gemini-cli/issues/21983)), ignored `settings.json` overrides ([#22267](https://github.com/google-gemini/gemini-cli/issues/22267)), and fail-fast lock handling ([#22232](https://github.com/google-gemini/gemini-cli/issues/22232)) make the browser subagent unreliable for Linux and persistent-session users.
- **Permission and autonomy surprises** — Subagents running despite disabled agent modes ([#22093](https://github.com/google-gemini/gemini-cli/issues/22093)) and models scattering temp scripts across directories ([#23571](https://github.com/google-gemini/gemini-cli/issues/23571)) frustrate users who want predictable behavior boundaries.
- **Tool quantity ceiling** — A 400 error with >128 tools ([#24246](https://github.com/google-gemini/gemini-cli/issues/24246)) caps the size of custom skill/MCP ecosystems.
- **Memory system noise** — Auto Memory's low-signal retry loop ([#26522](https://github.com/google-gemini/gemini-cli/issues/26522)), pre-redaction secret exposure ([#26525](https://github.com/google-gemini/gemini-cli/issues/26525)), and silently skipped invalid patches ([#26523](https://github.com/google-gemini/gemini-cli/issues/26523)) indicate a background system still needing polish.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-08-08

## Today's Highlights
Three patch releases (v1.0.79-7 through v1.0.79-9) landed, adding enterprise sandbox policy controls, kimi-k3 model support, and `--plan` + `--mode autopilot` chaining. Community attention is split between Windows-specific breakage (clipboard, rendering, crashes) and regression churn in authentication and skill discovery. No pull requests saw activity in the last 24 hours.

## Releases
- **v1.0.79-9**: The `/sandbox` configuration dialog now shows where sandbox settings are stored in `settings.json`.
- **v1.0.79-8**: Adds enterprise `allow-auto-only` policy support so `/allow-all auto` works while full allow-all remains blocked; enterprise-managed sandbox policy can now enforce a proxy URL while credentials remain user-controlled. The `/sandbox` dialog groups git/gh entries for clarity.
- **v1.0.79-7**: Agent Plugins can ship extensions under `com.github.copilot/extensions/`; adds kimi-k3 model support; combining `--plan` with `--mode autopilot` plans first and then implements without approval. Multi-select user prompts were also improved.

## Hot Issues
1. **[#2494 — `copilot login` auto-confirms keychain prompt](https://github.com/github/copilot-cli/issues/2494)** (OPEN, auth) — Regression in v1.0.16: the CLI no longer waits for y/N input when the keychain is unavailable, silently ending the auth flow. Highest comment count today (11).
2. **[#1632 — Support subfolders for skills](https://github.com/github/copilot-cli/issues/1632)** (OPEN, plugins) — 23 👍; users with 10+ skills want hierarchy rather than a flat folder. The most-upvoted open feature request.
3. **[#4118 — `/app` does not select current working directory](https://github.com/github/copilot-cli/issues/4118)** (CLOSED) — 35 👍, the highest reaction count across all issues; users expect the local directory to be preselected when launching the GitHub Copilot app.
4. **[#3622 — Copy to clipboard silently fails on Windows](https://github.com/github/copilot-cli/issues/3622)** (OPEN) — Copy appears to succeed but paste yields stale clipboard contents. Regression from 1.0.48.
5. **[#4311 — Transcript renders as blank lines until resize/re-render](https://github.com/github/copilot-cli/issues/4311)** (OPEN) — WCr/ScrollBox measured-line cache invalidation bug; content is present but invisible, and `/resume` does not recover it.
6. **[#1409 — `--add-dir` converts dashes to underscores in paths](https://github.com/github/copilot-cli/issues/1409)** (OPEN) — Causes an endless permission prompt loop for OneDrive directories on Windows; 4 👍.
7. **[#4345 — Reasoning effort "medium" rejected for claude-haiku-4.5](https://github.com/github/copilot-cli/issues/4345)** (CLOSED) — Conflicting server-side feature flags cause repeated sub-agent failures; 4 👍.
8. **[#4222 — Infinite render loop regression on Windows](https://github.com/github/copilot-cli/issues/4222)** (CLOSED) — The React/Ink "Maximum update depth exceeded" freeze from #2802 has returned on v1.0.72+, affecting VS Code integrated terminal.
9. **[#4219 — Copilot CLI crashes on Windows with `notifications` enabled](https://github.com/github/copilot-cli/issues/4219)** (CLOSED) — Native access violation in the toast-notification path.
10. **[#4401 — `skill` tool cannot find valid skills in `~/.agents/skills`](https://github.com/github/copilot-cli/issues/4401)** (OPEN, triage) — Valid skill directories with `SKILL.md` are ignored; appears related to the closed fix for #2230.

## Key PR Progress
No pull requests were updated in the last 24 hours (total: 0). PR tracking will resume as soon as new activity lands.

## Feature Request Trends
- **Skills ecosystem maturation** — Users are pushing for skill subfolders (#1632), `skill` tool aliases for custom agents (#4209), and fixes to skill discovery regression (#4401). Skills are becoming a first-class extensibility surface.
- **Enterprise governance** — The new allow-auto-only and sandbox proxy enforcement in v1.0.79-8, plus friction with MCP registry policies (#4205), show demand for admin-controlled policy with user-held credentials.
- **Session UX polish** — Persisted default workspace type (#4396), quick-delete in the sessions list (#4395), per-session token usage reporting (#2947, 7 👍), and desktop notifications when input is needed (#2941).
- **Model flexibility** — kimi-k3 support and `--plan` + autopilot in v1.0.79-7, alongside model-picker and resume-model bugs (#4043, #4397), indicate users actively switch models and expect that choice to be honored across sessions.

## Developer Pain Points
- **Windows regressions dominate** — Six distinct Windows issues in 24h: clipboard failure (#3622), codepage-936 screen clears on copy (#4391), render-loop freeze (#4222), notification crash (#4219), PowerShell breakage with Claude hook shell operators (#4399), and OneDrive dash/underscore path mangling (#1409).
- **Regression churn** — Previously-fixed behaviors are breaking again: login keychain prompt (#2494), render loop (#4222), skill discovery (#4401), and `banner: "once"` behaving like `"always"` (#4129).
- **MCP lifecycle untrustworthiness** — Orphaned stdio server processes after post-auth rebuild (#4392), false-positive "loaded" states (#1129), and registry policy conflicts (#4205) erode confidence in MCP status reporting.
- **Terminal rendering instability** — Blank transcript regions (#4311), obscured model picker input (#4043), and copy artifacts (#3622/4391) point to an over-cached rendering layer.
- **Config/permission surprises** — `allowed_directories` in `permissions.config` never loaded (#4398), `--add-dir` path rewriting (#1409), and the npm `bin/copilot` loader serving different versions without a documented pin (#4402): "what you configured isn't what runs."

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-08-08

## Today's Highlights
No new release landed in the last 24 hours. Two open PRs are tackling a serious `StrReplaceFile` data-corruption issue where non-UTF-8 bytes are silently rewritten as `U+FFFD`. A newly reported safety incident also shows an agent in yolo mode deleting a pre-existing directory outside the workspace, raising urgent concerns about autonomous file-operation safeguards.

## Releases
_None in the last 24 hours._

## Hot Issues

Only 2 issues were updated in the last 24 hours; both are listed below.

1. [Feature Request: Memory System — Persistent context across sessions (#1283)](https://github.com/MoonshotAI/kimi-cli/issues/1283)  
   **Type:** enhancement  
   **Why it matters:** Developers want Kimie Code CLI to remember project patterns, user preferences, and useful context across sessions, with both automatic AI-managed notes and manual user-defined instructions.  
   **Community reaction:** 21 comments show sustained interest, although no 👍 reactions have been recorded.

2. [Agent ran `rm -rf` on a pre-existing directory outside the workspace, deleting user session data (#2596)](https://github.com/MoonshotAI/kimi-cli/issues/2596)  
   **Type:** bug / safety  
   **Why it matters:** In yolo permission mode, the agent attempted to clean up a symlink it believed it had created, but the original `ln -sfn` had failed. It then removed a real pre-existing directory at `~/.pi/agent/sessions`, causing irreversible data loss outside the workspace.  
   **Community reaction:** No comments yet, but this is a critical safety regression for permissionless workflows.

## Key PR Progress

Only 2 PRs were updated in the last 24 hours. Both address the same `StrReplaceFile` corruption issue from different angles.

1. [fix(tools): preserve non-UTF-8 bytes in StrReplaceFile edits (#2594)](https://github.com/MoonshotAI/kimi-cli/pull/2594)  
   Changes `StrReplaceFile` to apply `old`/`new` as byte substrings on the raw buffer instead of decoding with `errors="replace"` and re-encoding. This prevents unrelated invalid UTF-8 bytes from being permanently corrupted.

2. [fix(StrReplaceFile): refuse to edit files that are not valid UTF-8 (#2595)](https://github.com/MoonshotAI/kimi-cli/pull/2595)  
   A more conservative approach: reject edits to files that are not valid UTF-8, rather than risk corrupting them. This PR references and resolves #2591.

## Feature Request Trends

- **Persistent memory / context across sessions:** The clearest feature direction is a comprehensive memory system so the CLI remembers project patterns, user preferences, and context between sessions (#1283).
- **Autonomous-mode safety guardrails:** The `rm -rf` incident highlights demand for stricter path containment and better failure detection when running in yolo/permissionless modes.

## Developer Pain Points

- **Destructive operations outside the workspace:** Agents can delete pre-existing directories when underlying commands like `ln -sfn` fail silently, causing irreversible data loss.
- **Silent file corruption in edit tooling:** String-based edit operations that decode and re-encode files can corrupt non-UTF-8 bytes, even in regions unrelated to the actual edit.
- **Missing cross-session continuity:** Developers want to avoid re-explaining project conventions and preferences every time they start a new session.


</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-08-08

## Today's Highlights

OpenCode shipped **v1.18.15**, a bugfix release covering message chronology, revert/fork ordering, and truncation cleanup. The community is most engaged around provider reliability and billing: the OpenCode Go `401` outage ([#38257](https://github.com/anomalyco/opencode/issues/38257), 45 comments) and a Go-plan quota overcharge report ([#41146](https://github.com/anomalyco/opencode/issues/41146)) are top conversations. On the development side, notable PRs landed for background subagents ([#40923](https://github.com/anomalyco/opencode/pull/40923)) and TUI Mermaid rendering ([#41113](https://github.com/anomalyco/opencode/pull/41113)).

## Releases

### v1.18.15
[Release](https://github.com/anomalyco/opencode/releases/tag/v1.18.15)

- **Chronological message ordering** is now correct even when imported or legacy message IDs are out of order.
- **Revert and fork actions** now use real message chronology instead of message ID ordering.
- **Truncation cleanup** now removes stale files by file timestamp more reliably.

## Hot Issues

1. **OpenCode Go 401: chat/completions blocked, /v1/models works** — [#38257](https://github.com/anomalyco/opencode/issues/38257)  
   Top issue with 45 comments and 11 👍. Users report all models under OpenCode Go failing with `401 Request blocked by upstream provider`; appears server-side and is affecting many subscribers.

2. **Why is OpenCode massively abusing git?** — [#3176](https://github.com/anomalyco/opencode/issues/3176)  
   Long-standing issue with 18 comments and 10 👍. OpenCode apparently runs `git add .` on huge directories, causing performance problems in large repos. Community frustration remains high.

3. **Unable to read images for some models** — [#5359](https://github.com/anomalyco/opencode/issues/5359)  
   Regression: pasted images are not readable on v1.0.137+, though they work on v1.0.134. 18 comments; likely a multimodal/provider regression.

4. **Feature request: Pay Go with crypto** — [#23153](https://github.com/anomalyco/opencode/issues/23153)  
   37 👍 and 17 comments make this one of the most upvoted feature requests. Users want crypto payment support for OpenCode Go.

5. **Amazon Bedrock Opus 4.6 compaction failure** — [#14332](https://github.com/anomalyco/opencode/issues/14332)  
   Compaction fails when `thinking`/`redacted_thinking` blocks are modified. 16 comments, 8 👍. Important for Bedrock + reasoning-model users.

6. **DeepSeek: `reasoning_content` must be passed back in thinking mode** — [#24334](https://github.com/anomalyco/opencode/issues/24334)  
   Provider compatibility bug causing 400 errors. 10 comments; affects DeepSeek users relying on reasoning models.

7. **Unexpected server error after adding OpenRouter** — [#29748](https://github.com/anomalyco/opencode/issues/29748)  
   Error persists even after restarting the app. 7 comments; possibly related to provider switching/project state.

8. **Web UI does not list sessions and cannot start agent** — [#40809](https://github.com/anomalyco/opencode/issues/40809)  
   Docker/Coolify/Cloudflare deployment issue; TUI, attach, and mobile work, but web UI fails. 4 comments.

9. **Go plan overcharged: weekly limit exhausted at ~$7.50 despite $30 limit** — [#41146](https://github.com/anomalyco/opencode/issues/41146)  
   Billing/quota bug with high impact for paid users. User reports complete blockage despite low measured spend.

10. **Event table stores full message snapshots per streaming update** — [#41175](https://github.com/anomalyco/opencode/issues/41175)  
   `opencode.db` grows to multiple GB because the `event` table stores full copies per streaming update instead of deltas. Community tooling already proposed; important for heavy users.

## Key PR Progress

1. **Native background subagents + auto-continue** — [#40923](https://github.com/anomalyco/opencode/pull/40923)  
   Adds native `Task(background: true)` orchestration and auto-retry for transient provider errors. A major step for agent-heavy workflows.

2. **TUI Mermaid diagram rendering** — [#41113](https://github.com/anomalyco/opencode/pull/41113)  
   Renders Mermaid flowcharts, sequence diagrams, and state diagrams directly in the session transcript via `@opencode-ai/merman`.

3. **Modal sandboxes on VM runtime** — [#41177](https://github.com/anomalyco/opencode/pull/41177)  
   Switches Modal sandboxes to the full-VM runtime and fixes the kill mechanism. Philosophy: one runtime, no knob.

4. **Remove legacy account subsystem** — [#41173](https://github.com/anomalyco/opencode/pull/41173)  
   Deletes dead V2 Core Account tables (`account`, `account_state`, `control_account`). Destructive, but auth now lives in `credential`.

5. **Modal environment driver** — [#41118](https://github.com/anomalyco/opencode/pull/41118)  
   First hosted binding of the Environment contract; includes a shared filesystem conformance suite.

6. **Apply chunkTimeout to non-SSE EventStream providers** — [#35743](https://github.com/anomalyco/opencode/pull/35743)  
   Fixes AWS Bedrock and other EventStream providers that bypassed chunk-timeout monitoring.

7. **Extract tool-result media for models without attachment capability** — [#41161](https://github.com/anomalyco/opencode/pull/41161)  
   Fixes `supportsMediaInToolResult` returning `true` unconditionally for Anthropic/OpenAI SDK packages.

8. **Propagate config-level npm override to inherited models** — [#41159](https://github.com/anomalyco/opencode/pull/41159)  
   Ensures provider-level `npm` overrides are not silently dropped for child models.

9. **Populate project picker from home** — [#41158](https://github.com/anomalyco/opencode/pull/41158)  
   Fixes empty project pickers by preserving indexed empty-search results and falling back to the current home directory.

10. **Show server projects until first bookmark** — [#41154](https://github.com/anomalyco/opencode/pull/41154)  
   Fixes `opencode web` showing “Nothing here yet” by falling back to server `/project` data.

## Feature Request Trends

- **Billing/payment flexibility**: Crypto payment support for OpenCode Go ([#23153](https://github.com/anomalyco/opencode/issues/23153)) plus related billing/quota complaints ([#41146](https://github.com/anomalyco/opencode/issues/41146)).
- **Agent/subagent runtime control**: Runtime model override for task-tool subagents ([#17595](https://github.com/anomalyco/opencode/issues/17595)) and queuing user messages while a reply is generating ([#41106](https://github.com/anomalyco/opencode/issues/41106)).
- **CI/CD and headless friendliness**: `OPENCODE_DISABLE_INSTALL` env var to skip npm installs at startup ([#37888](https://github.com/anomalyco/opencode/issues/37888)) and `opencode web --no-open` ([#41167](https://github.com/anomalyco/opencode/pull/41167)).
- **Workspace/skill organization**: Support for subfolders in skills ([#38853](https://github.com/anomalyco/opencode/issues/38853)) and proper deletion of projects/sessions ([#41068](https://github.com/anomalyco/opencode/issues/41068)).

## Developer Pain Points

- **Provider compatibility and regressions**: OpenCode Go 401s ([#38257](https://github.com/anomalyco/opencode/issues/38257)), DeepSeek reasoning errors ([#24334](https://github.com/anomalyco/opencode/issues/24334)), Bedrock compaction failures ([#14332](https://github.com/anomalyco/opencode/issues/14332)), and image-reading regressions ([#5359](https://github.com/anomalyco/opencode/issues/5359)).
- **Storage and database bloat**: Event table storing full message snapshots ([#41175](https://github.com/anomalyco/opencode/issues/41175)) and OpenCode abusing `git add` on huge repos ([#3176](https://github.com/anomalyco/opencode/issues/3176)).
- **Billing/quota confusion**: Usage showing >100% and refusing to compact ([#41102](https://github.com/anomalyco/opencode/issues/41102)) and Go-plan quota overcharge reports ([#41146](https://github.com/anomalyco/opencode/issues/41146)).
- **Project/session lifecycle bugs**: Cannot delete projects or sessions; deleting a folder and recreating it resurrects old sessions ([#41068](https://github.com/anomalyco/opencode/issues/41068)), and deleted project paths keep reopening ([#31401](https://github.com/anomalyco/opencode/issues/31401)).
- **Web/TUI inconsistency**: Web UI not listing sessions ([#40809](https://github.com/anomalyco/opencode/issues/40809)), TUI black screen when running from source outside the repo ([#40231](https://github.com/anomalyco/opencode/issues/40231)), and GitHub Copilot OAuth models not appearing ([#41088](https://github.com/anomalyco/opencode/issues/41088)).

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-08-08

## Today's Highlights

Pi shipped **v0.84.1**, adding Qwen Token Plan Individual support and authentication readiness checks. The dominant theme this week is long-session reliability: the most-upvoted issue reports auto-compaction only firing after provider overflow, while PRs land recovery-state refactors and TUI performance improvements. Provider compatibility fixes and extension reload bugs also remain hot.

## Releases

**v0.84.1** — [Release page](https://github.com/earendil-works/pi/releases)

- **Qwen Token Plan Individual** — Use the built-in provider for models documented for Individual subscriptions. See the [provider API keys docs](https://github.com/earendil-works/pi/blob/v0.84.1/packages/coding-agent/docs/providers.md#api-keys).
- **Authentication readiness checks** — `pi auth ...` now supports readiness checks for authentication state.

## Hot Issues

1. [**#6879 — auto-compaction never triggers after context grows past 100% until provider overflow**](https://github.com/earendil-works/pi/issues/6879)  
   Open · 13 comments · 15 👍  
   Long agentic turns can run for hours and push context well past the compaction threshold; the session only compacts after the API rejects the request. Community strongly wants compaction checks after every agentic turn.

2. [**#7128 — New default PI_\* guideline over-encourages unnecessary bash calls**](https://github.com/earendil-works/pi/issues/7128)  
   Open · 11 comments · 7 👍  
   A recent system-prompt guideline biases the agent toward running `env`-inspection commands even when irrelevant, adding noise and token waste.

3. [**#7020 — Sometimes Pi doesn't continue after compaction**](https://github.com/earendil-works/pi/issues/7020)  
   Closed · 10 comments  
   Long-running “coordinator” sessions hit compaction edge cases where Pi fails to continue afterward. Likely related to the deeper lifecycle issues tracked by #5886.

4. [**#5886 — AgentSession settlement/continuation and assistant-tail lifecycle bugs**](https://github.com/earendil-works/pi/issues/5886)  
   Open · 6 comments  
   Meta-issue for recurring bugs where post-run logic tries to continue from a transcript that is no longer valid. Explains many session/compaction failures.

5. [**#7730 — High CPU usage on Mac OS with long session**](https://github.com/earendil-works/pi/issues/7730)  
   Open · 4 comments · 5 👍  
   CPU swings between 50–110% and memory stays at 600–800MB, seemingly tied to session/context length. Significant for long-lived TUI users.

6. [**#7053 — Parallel tool batches lose already-completed tool results when one sibling stalls**](https://github.com/earendil-works/pi/issues/7053)  
   Open · 4 comments  
   Follow-up to #3503: UI events fire per tool, but persisted `toolResult` messages are created only after the whole batch settles. A stalled sibling can orphan completed `toolCalls` and produce “No result provided”.

7. [**#7771 — Unable to start 0.84.1**](https://github.com/earendil-works/pi/issues/7771)  
   Closed · 5 comments  
   Node 23 users hit a startup crash: `zlib.createZstdDecompress is not a function`. Release-blocking for non-LTS Node versions.

8. [**#7703 — Agent.reset() during an active run leaves an assistant-only transcript**](https://github.com/earendil-works/pi/issues/7703)  
   Closed · 5 comments  
   Calling `Agent.reset()` while `prompt()` is active clears state without aborting/settling the active run, then appends the assistant message to the cleared transcript.

9. [**#7702 — DeepSeek models: reasoning_content must be passed back via opencode zen gateway**](https://github.com/earendil-works/pi/issues/7702)  
   Closed · 6 comments  
   Multi-turn/tool-call conversations with DeepSeek models through the zen gateway fail with a 400 unless `reasoning_content` is round-tripped. Root-caused to `detectCompat()`.

10. [**#7740 — TUI after /reload doesn't follow custom tool renderers registered on session_start**](https://github.com/earendil-works/pi/issues/7740)  
    Open · 2 comments  
    Tools registered during `session_start` render incorrectly after `/reload` because of load order. Affects MCP-based extensions with custom rendering.

## Key PR Progress

1. [**#7784 — refactor(agent): derive recovery state from record queries**](https://github.com/earendil-works/pi/pull/7784)  
   Removes recovery-specific query APIs and derives recovery state through bounded `findRecords()` calls, while retaining write-side open-operation enforcement.

2. [**#7801 — feat(coding-agent): lazily load uncommon syntax grammars**](https://github.com/earendil-works/pi/pull/7801)  
   Experimental syntax-highlighting refactor to reduce startup cost by loading uncommon grammars only when needed.

3. [**#7780 — TUI performance improvement**](https://github.com/earendil-works/pi/pull/7780)  
   Incremental markdown parsing plus lazy render invalidation, with partial old-content parsing on startup.

4. [**#7710 — feat(agent): restore suspended harness operations**](https://github.com/earendil-works/pi/pull/7710)  
   Implements R3 of the harness v2 plan: `AgentHarness.create` can now load a harness from an existing session and restore suspended operations.

5. [**#7762 — feat(provider): Introduce LM Studio provider**](https://github.com/earendil-works/pi/pull/7762)  
   Adds a local LM Studio provider to address #7668. Provider-specific tests are guarded by `LM_STUDIO_BASE_URL`.

6. [**#7749 — fix(coding-agent): preserve custom tool renderers after reload**](https://github.com/earendil-works/pi/pull/7749)  
   Fixes custom tool renderers being lost after `/reload` when tools are registered from a `session_start` handler.

7. [**#7758 — feat(coding-agent): add exit foreground task and ctx.version**](https://github.com/earendil-works/pi/pull/7758)  
   Lets extensions take over the foreground process after Pi shuts down, enabling TUI hand-off to long-running servers, plus exposes `ctx.version`.

8. [**#7757 — feat(coding-agent): allow opting out of fullscreen copy-on-select**](https://github.com/earendil-works/pi/pull/7757)  
   Adds a setting to disable copy-on-select in fullscreen mode while preserving existing message-copy keybind behavior.

9. [**#7792 — feat(coding-agent): bridge Cursor CLI auth via local agent session**](https://github.com/earendil-works/pi/pull/7792)  
   Hidden built-in `cursor-agent` extension bridges Pi to an authenticated local Cursor CLI session — no `CURSOR_API_KEY` or Pi OAuth required.

10. [**#7795 — fix(coding-agent): use command -v to verify wl-copy exists**](https://github.com/earendil-works/pi/pull/7795)  
    Replaces the external `which` binary with the shell built-in `command -v`, improving reliability in minimal sandboxes.

## Feature Request Trends

- **Broader plugin/extension interoperability** — Users want Agent Plugins support (#7776), safe session replacement APIs (#5952), tool decoration capability (#7800), and Cursor CLI bridging (#7793).
- **TUI customization and ergonomics** — Requests include sticky prompt headers (#7802), half-page scrolling (#7735), collapsed-paste preview (#7754), slash-menu position in fullscreen (#7786), and theme overrides (#7722).
- **Provider and local-model expansion** — Strong interest in LM Studio (#7762), Amazon Bedrock Mantle (#6216), and local Cursor CLI auth (#7792), plus better handling of provider-specific quirks.
- **Session-lifecycle tooling** — Users are asking for more robust primitives around long sessions, recovery, and compaction, as seen in #6879, #7020, #5886, and the harness-recovery PRs.

## Developer Pain Points

- **Auto-compaction and long-session reliability** — Compaction doesn't trigger early enough, and continuation after compaction is still unreliable (#6879, #7020, #5886).
- **Provider-specific request/response mismatches** — Multi-turn/tool-call failures from missing `reasoning_content`, Gemini thought signatures, incorrect `maxTokens`, missing `strict: false`, and dropped OpenAI `namespace` values (#7702, #6733, #7726, #7250, #7709).
- **Extension API gaps and state corruption** — `Agent.reset()` can corrupt transcripts (#7703), `sendMessage({triggerTurn:false})` still starts a turn (#7783), custom renderers are lost after reload (#7740), and tools can't be decorated (#7800).
- **Environment/startup fragility** — Node 23 startup crash with `zlib.createZstdDecompress` (#7771), reliance on external `which` (#7796), and Undici header-overflow failures (#7791).

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-08-08

## 1. Today's Highlights

The project shipped a new nightly release with a CI fix for autofix takeover admission and added docs for `serve` sub-session concurrency. PR activity is dominated by daemon API enhancements, plugin compatibility, and OpenTelemetry alignment, while issue reports continue to focus on Windows stability and terminal rendering regressions. No new stable release was published in the last 24 hours.

## 2. Releases

- [v0.21.7-nightly.20260808.4ec0371e6](https://github.com/QwenLM/qwen-code/releases/tag/v0.21.7-nightly.20260808.4ec0371e6)
  - fix(ci): surface blocked autofix takeover admission by @qqqys — [#8410](https://github.com/QwenLM/qwen-code/pull/8410)
  - docs: document serve sub-session concurrency

## 3. Hot Issues

- [Windows terminal Chinese IME pinyin is illegible #8625](https://github.com/QwenLM/qwen-code/issues/8625) — Open, P2. Chinese input composition text renders unclearly in Windows terminals. Tagged `welcome-pr`; 6 comments from affected users.

- [Desktop Windows runtime crashes on startup: EISDIR lstat 'C:' #8615](https://github.com/QwenLM/qwen-code/issues/8615) — Closed, P1. Opening a workspace in the Qwen Code Desktop Windows build crashes because the bundled runtime lstat's the drive root as a file. Blocked desktop users until fix landed.

- [tmux flicker over iTerm2 → SSH → Ubuntu #8562](https://github.com/QwenLM/qwen-code/issues/8562) — Open, P2. Recent versions cause flicker only inside tmux splits; user reports Qwen 3.8 Max also pointed to a Qwen Code regression. 5 comments.

- [`qwen mcp list` hangs indefinitely on SSE server without `endpoint` #8550](https://github.com/QwenLM/qwen-code/issues/8550) — Closed, P2. MCP list command can hang forever against slow/non-compliant SSE servers, impacting MCP-heavy workflows.

- [Windows standalone installer fails when `Get-FileHash` cannot be resolved #7118](https://github.com/QwenLM/qwen-code/issues/7118) — Open, P2, 3 👍. SHA-256 verification can fail on Windows machines where PowerShell cannot resolve `Get-FileHash`, forcing users to fall back to npm install. Long-standing installation pain point.

- [Wrapped timeout errors drop the original error code → never auto-retried #8527](https://github.com/QwenLM/qwen-code/issues/8527) — Closed, P2. Timeout errors were being wrapped in a way that hid the original retry classification, so transient API timeouts surfaced as hard errors.

- [MCP metadata hot reload leaves stale session registrations #8492](https://github.com/QwenLM/qwen-code/issues/8492) — Closed, P2. Changing `trust`, `includeTools`, or `excludeTools` without changing transport did not reapply metadata, leaving stale tools active.

- [`stream-json` interrupt aborts reusable session controls #8495](https://github.com/QwenLM/qwen-code/issues/8495) — Closed, P2. Interrupting a turn in non-interactive mode also killed session-lifetime controls, making the session unusable for subsequent requests.

- [Memory index stale after `/remember`; memory lost on compaction #6487](https://github.com/QwenLM/qwen-code/issues/6487) — Closed, P2. MEMORY.md is written to disk but not reflected in the active system instruction, and compaction can drop previously saved memory. Significant for long-running agent sessions.

- [Middle-mouse selection/copy broken in PuTTY over SSH #8672](https://github.com/QwenLM/qwen-code/issues/8672) — Open, P2. Regression after 0.21.1: xterm-style middle-button paste no longer works on remote Linux machines via PuTTY.

## 4. Key PR Progress

- [feat(web-shell): install Extensions from archives #8621](https://github.com/QwenLM/qwen-code/pull/8621) — Adds `.zip` / `.tar.gz` archive installation for Extensions in Web Shell, routed through the daemon's existing queued install path.

- [feat(serve): add pollable turn-status endpoints for daemon sessions #8682](https://github.com/QwenLM/qwen-code/pull/8682) — New `GET /session/:sessionId/turns/:promptId` and `/turns/current` endpoints allow external clients to poll turn lifecycle state and results.

- [feat(web-shell): add model-specific reasoning controls #8675](https://github.com/QwenLM/qwen-code/pull/8675) — Introduces a reasoning-controls registry used across Core, ACP, daemon, SDK, and WebShell, with the first registration for Qwen 3.8.

- [feat(core): support Qoder plugin extensions #8661](https://github.com/QwenLM/qwen-code/pull/8661) — Adds native install compatibility for Qoder plugins from directories, archives, Git repos, archive URLs, and scoped npm packages.

- [feat(daemon): add batch skill toggle API #8664](https://github.com/QwenLM/qwen-code/pull/8664) — Enables toggling up to 100 loaded Skills in one request, with per-target error reporting.

- [feat(telemetry): align session lifecycle with OpenTelemetry #8616](https://github.com/QwenLM/qwen-code/pull/8616) — Emits standard `session.start` / `session.end` LogRecords and includes `session.previous_id` when resuming persisted conversations.

- [fix(core): preserve timeout retry metadata #8531](https://github.com/QwenLM/qwen-code/pull/8531) — Directly addresses #8527 by preserving the original timeout error as `Error.cause` and carrying a normalized HTTP status so retry policy can still classify the failure.

- [fix(core): confirm read-only git commands when repo config executes programs #8645](https://github.com/QwenLM/qwen-code/pull/8645) — Hardens shell/monitor permission gates against repo-local git config that could execute programs while running "read-only" git commands.

- [feat(daemon): guard cross-worktree Git mutations #8687](https://github.com/QwenLM/qwen-code/pull/8687) — Blocks model-issued `run_shell_command` calls that use `-C`, `--work-tree`, or `--git-dir` to escape the session's working tree for mutating Git operations.

- [fix(core): resolve Qwen 3.8 reasoning budget conflicts #8525](https://github.com/QwenLM/qwen-code/pull/8525) — Prevents DashScope requests from sending both `reasoning_effort` and `thinking_budget` when settings come from different configuration layers.

## 5. Feature Request Trends

- **Web Shell as the universal UI layer** — Multiple requests ask for a desktop app built around Web Shell, QR-code phone pairing, and richer composer toolbar controls: [#8092](https://github.com/QwenLM/qwen-code/issues/8092), [#8595](https://github.com/QwenLM/qwen-code/issues/8595), [#6701](https://github.com/QwenLM/qwen-code/issues/6701), [#6699](https://github.com/QwenLM/qwen-code/issues/6699).

- **Deeper IDE/ACP integration** — Users want context-usage updates in JetBrains, ACP reasoning-effort controls, and better attribution metadata for telemetry: [#8513](https://github.com/QwenLM/qwen-code/issues/8513), [#8526](https://github.com/QwenLM/qwen-code/pull/8526), [#8660](https://github.com/QwenLM/qwen-code/issues/8660).

- **Plugin/extension ecosystem growth** — Archive-based extension installs, Qoder plugin compatibility, and a browser-control bridge are all being requested or prototyped: [#8621](https://github.com/QwenLM/qwen-code/pull/8621), [#8661](https://github.com/QwenLM/qwen-code/pull/8661), [#8699](https://github.com/QwenLM/qwen-code/issues/8699).

- **Channel integration completeness** — DingTalk `interactiveCards` exposure, Feishu contact-label enrichment, and Feishu ask-user question cards show growing demand for production-grade IM integrations: [#8515](https://github.com/QwenLM/qwen-code/issues/8515), [#8566](https://github.com/QwenLM/qwen-code/issues/8566), [#8578](https://github.com/QwenLM/qwen-code/pull/8578).

- **Reliability and evidence quality** — S3 delivery cache/recovery, long-running Goal evidence checkpoints, and stricter fact-verification behavior are emerging as priorities: [#8185](https://github.com/QwenLM/qwen-code/issues/8185), [#8465](https://github.com/QwenLM/qwen-code/pull/8465), [#8701](https://github.com/QwenLM/qwen-code/issues/8701).

## 6. Developer Pain Points

- **Windows still has rough edges** — Installer SHA-256 failures (`Get-FileHash`), a desktop runtime crash opening workspaces (`EISDIR lstat 'C:'`), and unreadable Chinese IME pinyin all continue to generate issue traffic: [#7118](https://github.com/QwenLM/qwen-code/issues/7118), [#8615](https://github.com/QwenLM/qwen-code/issues/8615), [#8625](https://github.com/QwenLM/qwen-code/issues/8625).

- **Terminal rendering regressions** — Flicker in tmux, screen tearing in web terminals, and broken middle-mouse behavior in PuTTY indicate the interactive TUI needs more terminal-compatibility testing: [#8562](https://github.com/QwenLM/qwen-code/issues/8562), [#8659](https://github.com/QwenLM/qwen-code/issues/8659), [#8672](https://github.com/QwenLM/qwen-code/issues/8672).

- **MCP/session lifecycle flakiness** — Hangs on SSE MCP servers, stale session registrations after hot reload, and interrupts breaking reusable sessions are recurring reliability complaints: [#8550](https://github.com/QwenLM/qwen-code/issues/8550), [#8492](https://github.com/QwenLM/qwen-code/issues/8492), [#8495](https://github.com/QwenLM/qwen-code/issues/8495).

- **Telemetry configuration friction** — A standard `OTEL_METRICS_EXPORTER=otlp` environment variable silently disables native metrics export, and missing runtime/client attribution makes telemetry harder to reason about: [#8697](https://github.com/QwenLM/qwen-code/issues/8697), [#8660](https://github.com/QwenLM/qwen-code/issues/8660).

- **Memory/context degradation over long sessions** — Stale memory indexes after `/remember`, memory loss during compaction, duplicated context-usage indicators, and disappearing queued-message indicators all affect long-running agent workflows: [#6487](https://github.com/QwenLM/qwen-code/issues/6487), [#8695](https://github.com/QwenLM/qwen-code/issues/8695), [#8666](https://github.com/QwenLM/qwen-code/issues/8666).

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-08-08

## 1. Today's Highlights

No new releases landed in the past 24 hours, but the v0.9.4 release train is finally moving: PR #5282 cleared the four CI blockers that left the version-bumped release unpublishable, and a subagent shared-workspace write fix (#5284) was merged. On the feature front, community momentum is shifting to v0.9.5 with prompt-scoped file recovery (#5272), MCP background registry sync (#5256), and a `model = "auto"` prompt-based tier selection config (#5257).

## 2. Releases

No new releases in the last 24 hours. v0.9.4 remains unpublished — `origin/main` is version-bumped with a dated CHANGELOG and pinned npm/crate registries, but the last exact-head CI dispatch (run 31180519587) failed three ways. PR #5282 addresses those failures; a green run is the final gate before publish.

## 3. Hot Issues

### #2934 — Sidebar sessions panel with auto-resume (CLOSED, 13 comments)
The most-discussed issue this cycle. Users want a persistent sidebar to browse and resume session history instead of relying on `Ctrl+R` popups or `--continue` at startup. Closed after broad community input; a strong signal that session management UX is a top priority.

### #1425 — Session hangs after large-text processing (OPEN, 6 comments)
A user analyzing a 3-million-character novel had the session freeze when 10 sub-agents hit `agent_wait` timeouts. The session was interrupted rather than dead, but sub-agents stayed "Running" for ~2 minutes with no recovery path. A key reliability pain point for long-running parallel tasks.

### #4785 — Dead-code sweep: 464 #[allow(dead_code)] attributes (OPEN, 5 comments)
Maintainer-flagged technical debt: 464 `allow(dead_code)` attributes across 143 files are hiding compiler drift. The author measured the damage by stripping them and running `cargo check`, confirming a large volume of invisible dead code. Community-backed cleanup effort.

### #2492 — No cross-session memory (OPEN, 5 comments)
Users report the tool forgets prior sessions on restart; even when memory is force-written, it's not read back automatically. Fast responses are praised, but the lack of persistent memory is a core complaint.

### #425 — Subagents: resume_from continuation chains (CLOSED, 5 comments)
Adds a `task_id` parameter to `agent_spawn` so subagents can resume prior work instead of starting fresh. Closed with acceptance criteria covering session rehydration and test coverage. Complements #1425 — subagent lifecycle reliability is clearly a focus area.

### #3306 — v0.9.3 refactor: converge runtime ownership (OPEN, 4 comments)
Umbrella issue for reducing 18 Rust packages (~771k lines) with 87% living in `codewhale-tui`. Parallel runtime/tool/config/session paths are seen as the root cause of many bugs. The community generally agrees the architecture is overdue for consolidation.

### #5123 — Release-blocker: agent spawn surface has too many knobs (OPEN, 3 comments)
Dogfooded bug: a `builder`-labeled subagent was blocked from writing because the live tool contract was read-only. The model emitted "BLOCKED — cannot execute assigned gates," showing the label/capability mismatch confuses both users and agents.

### #790 — Improve i18n coverage (OPEN, 3 comments)
After `zh-Hant` support landed, many user-visible TUI strings remain hardcoded in English. Commands, modals, widgets, approval dialogs, and status lines are still waiting for translation. Growing demand from non-English users.

### #5034 — Switching providers retains unrelated default model (OPEN, 2 comments)
Switching the active provider to OpenAI can leave `gpt-5.5` as the default model even when inherited from a different route. Provider and model resolution are not updated as one coherent unit — a classic state-coherence bug that misleads users mid-task.

### #5272 — v0.9.5: prompt-scoped file recovery (OPEN, 1 comment, NEW)
Newest ask: restore workspace files from a prior prompt's session snapshots, not just transcript scrollback. Destructive restores should be confirmed and cooperate with git (no discarding user commits). Directly addresses "agent damaged my tree" recovery workflows.

## 4. Key PR Progress

### #5284 — fix(subagent): stop counting finished children as shared-checkout contenders (CLOSED)
Fixes a real workflow blocker: a builder subagent couldn't run `echo x > file` because finished child agents were still counted as shared-checkout contenders, causing every `Bash` write to fail with "cannot prove a bounded file target." Merged.

### #5282 — fix(release): clear the four CI blockers holding v0.9.4 (CLOSED)
v0.9.4 was version-bumped and CHANGELOG-dated but unpublishable due to a red CI lane that failed three ways. This PR clears the blockers; a green run should be the final gate before publish.

### #5283 — docs(readme): lead with mixed fleets (CLOSED)
README now sells "any model, any role" as the core story. A saved role records its `provider`, `model`, and reasoning tier explicitly, so one fleet can run different models from different vendors — documentation that matches runtime capabilities.

### #5256 — feat(mcp): background incremental registry sync (OPEN)
Stops blocking on full registry downloads: fresh local snapshots are served cache-first with zero network requests, while downloads run in a background `tokio::spawn` guarded by a process-wide mutex. A significant UX win for MCP-heavy workflows.

### #5257 — feat(config): add model = auto for prompt-based tier selection (OPEN)
New `model = "auto"` config selects `deepseek-v4-pro` for complex tasks and `deepseek-v4-flash` for simple ones based on the user's prompt. Directly addresses the recurring "which model should I pick" dilemma.

### #5258 — fix(tui): stop stale cached session title from pinning New Session (OPEN)
Sessions were stuck at "New Session" forever because a stale in-memory title overwrote the computed one after the first user message, and the cache is only refreshed at snapshot end. A subtle state bug with high user visibility.

### #5255 — Layer 5.3: Palette, completion, and discovery filtering (OPEN)
Part of the command-boundary refactor. Verifies and consolidates user-command integration in the command palette and slash-completion surfaces, following Layer 5.2 in #4992. Steady architectural progress.

### #5252 — feat(subagents): allow embedders to isolate runtime state roots (CLOSED)
Adds optional `EngineConfig::subagent_state_root` for embedding hosts needing session-owned delegated-agent state, while keeping the legacy `workspace/.codewhale/state` default unchanged. Useful for sandboxed/embedded deployments.

### #5254 — Build fix for FreeBSD (CLOSED)
FreeBSD builds were failing because rquickjs doesn't ship bindings for `x86_64-unknown-freebsd`. Adds the `bindgen` feature fallback. Small portability fix, important for the BSD community.

### #5281 — chore(deps): bump jsonschema 0.48.5→0.49.4 (OPEN)
One of seven dependabot PRs (thiserror, clap, async-trait, serde_json, docker/login-action, rust-toolchain, sccache-action). Routine maintenance, no breaking changes flagged.

## 5. Feature Request Trends

- **Session persistence & recovery**: The dominant theme. Sidebar session browsing (#2934), cross-session memory (#2492), prompt-scoped file recovery (#5272), and session title fixes (#5258) all point to "the tool should remember and restore my work."
- **Subagent/fleet lifecycle control**: `resume_from` chains (#425), advisor watchers (#3982), named fleet configurations (#5039), and capability display in fleet setup (#5038) — users want finer-grained control over parallel agents.
- **Model/provider coherence**: Auto model selection (#5257), provider-switch model retention fixes (#5034), and reasoning surfacing for Model Studio Token Plan (#5203) — models and providers must behave predictably together.
- **TUI configurability & localization**: Editable config keys from the TUI (#3303) and expanded i18n coverage (#790).
- **Tooling guardrails**: Read-before-edit enforcement (#3364), exec-policy hardening (#5161), and approval-flow fixes (#5146, #5191).

## 6. Developer Pain Points

- **Large-task reliability**: Sub-agent timeouts and session freezes on big workloads (#1425) — the top frustration for power users.
- **Memory loss between sessions**: Restarts wipe context; forced memory writes are never re-read (#2492).
- **State coherence bugs**: Stale session titles (#5258), stale failed-agent rows (#4416), stale model defaults (#5034) — state bleed between sessions and providers is a recurring pattern.
- **Release friction**: v0.9.4 sat version-bumped for days waiting on CI (#5282); fleet-roster tests read real `~/.codewhale` configs and fail on dev machines (#5151).
- **Security/credential UX mismatches**: Exec-policy bypasses via `&` chains (#5161), inverted credential-read precedence (#5197), save confirmation naming the wrong destination (#5195).
- **Tool-call confusion**: Agents emitting `apply_patch` before approval (#5146), labeled roles that are read-only in practice (#5123) — the gap between declared and actual capabilities misleads both users and models.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/boom7sss/agents-radar).*