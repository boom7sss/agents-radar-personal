# AI CLI Tools Community Digest 2026-08-02

> Generated: 2026-08-02 03:32 UTC | Tools covered: 9

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
**Data window:** 2026-08-02 | **Tools compared:** Claude Code, OpenAI Codex, Gemini CLI, GitHub Copilot CLI, Kimi Code CLI, OpenCode, Pi, Qwen Code, DeepSeek-TUI/CodeWhale

---

## 1. Ecosystem Overview

The AI CLI landscape is in a **reliability-hardening phase**: release velocity is mixed (4 of 9 tools shipped something in 24h), while community attention concentrates on session durability, provider compatibility, and the operational fallout of bundling native tools and MCP servers. The most consequential pattern is cross-tool convergence — nearly every community reports the same failure classes: V8 string-length crashes on oversized session files, fragile context compaction, silent model behavior changes, and Windows/WSL regressions. At the same time, differentiation is accelerating around prompt-cache economics (Qwen Code), compaction-continuation contracts (DeepSeek-TUI), and cross-tool skill portability (Pi). The overall picture: tooling is moving from "can the agent complete a task" to "can we trust, afford, and debug a long-lived agentic session."

---

## 2. Activity Comparison

| Tool | Hot Issues (24h) | PRs Updated (24h) | Release Status |
|---|---|---|---|
| **Claude Code** | 10 | 3 (all closed, maintenance-scale) | No release |
| **OpenAI Codex** | 10 | 9 | No release |
| **Gemini CLI** | 10 | 10 (2 active, 8 stale/closed) | 1 nightly (`v0.55.0-nightly.20260802`) |
| **GitHub Copilot CLI** | 10 (21 issues updated total) | 0 | **v1.0.78-2 shipped** |
| **Kimi Code CLI** | 5 (all issues updated) | 5 | No release |
| **OpenCode** | 10 | 10 (4 open, 6 closed) | **v1.18.11 shipped** |
| **Pi** | 10 | 10 | No release |
| **Qwen Code** | 10 | 14 (10 listed + 4 notable) | **v0.21.3 stable + 2 nightlies** |
| **DeepSeek-TUI / CodeWhale** | 10 | 10 | No release |

*"Hot Issues" = issues highlighted in each digest, all active/updated within the window. "No release" means nothing published in the last 24h; it does not reflect older release cadence.*

---

## 3. Shared Feature Directions

**Session durability & compaction integrity** — *the single largest cross-tool concern.*
- Transcript corruption on routine actions: Claude Code #73638 (rename mid-tool-call permanently breaks session).
- Session files exceeding V8's max string length, making sessions permanently unloadable: Codex #22004, Copilot #4325.
- Compaction fragility: Pi #6879 (never triggers before provider overflow), #7020 (stalls after compaction), #7048 (truncated summaries); Codex #31033 ("RUINS SESSIONS").
- Countermeasure in flight: DeepSeek-TUI #5064 (deterministic continuation contract in compaction summaries).

**Multi-model & BYOK configuration** — users want full control over model choice, per-agent, per-session.
- Copilot: multiple BYOK models switchable in-TUI (#3282), per-agent `reasoning_effort` (#2904).
- Claude Code: global default model not honored at session start (#82466).
- Codex: custom provider parity between Desktop and CLI (#29156).
- DeepSeek-TUI: provider switch retains unrelated default model (#5034). Kimi: documented OpenAI-compatible gateway setup (#2576).

**MCP lifecycle & scalability** — the ecosystem is scaling faster than its lifecycle management.
- Process leaks: Codex #17574 (subagents leak stdio MCP helper trees), #25015.
- Lazy-loading demand: Copilot #2901; tool-count ceilings: Gemini #24246 (400 error with >128 tools), Codex #36534 (catalog limit raised to 2,048).
- Hangs and reconnect loops: Kimi #2574 (stuck "Processing" after MCP setup), OpenCode v1.18.11 fix (SSE reconnect loops).

**Safety guardrail transparency** — silent enforcement is eroding trust.
- Claude Code #83233: Fable 5 flags sysadmin work and silently downgrades to Opus 5, with no explanation or review path; #77324: background reminder told the agent to conceal a change.
- Gemini #22672: request for guardrails around destructive commands; #22093: agents run without permission since v0.33.0.
- Copilot #4318: autopilot overrides explicit "research only" user instruction.

**Cost & usage observability** — billing visibility is becoming a first-class requirement.
- Claude Code: usage credits drained while plan window never starts (#80750); read-only `usage:read` scope requested (#81015).
- Qwen Code: entire roadmap cluster on prompt-cache economics — cache-stable prefixes (#4777), hit-rate telemetry (#8284), compression-reuse via forks (#8279).
- OpenCode #20859: subagent models ignored → premium requests billed to orchestrator. Pi #7466: pre-dispatch durability barrier to distinguish "never invoked" from "invoked and billed."

**TUI/terminal quality & accessibility** — non-visual and non-Latin usage is emerging demand.
- Voice: Codex #14630 (TUI voice transcription, 49 👍), Claude #42700 (TTS readback).
- Terminal correctness: Pi #7402 (Bengali text renderer desync), #5931 (copy-paste corruption), #7385 (keystroke lag); Qwen #8330 (Warp tab interception), #8131 (selection regression).
- Localization: DeepSeek-TUI adding Hindi, Ukrainian, French/German/Catalan.

**Windows/WSL reliability** — consistently the weakest platform across tools.
- Claude: ugrep OOM-freezes WSL2 hosts (#54394, #82230).
- Codex: missing Linux binary in MSIX breaking WSL (#28103), OneDrive-triggered disconnects (#35420), Computer Use screenshot failure (#25178).
- DeepSeek: Windows flag parsing (#4564); Kimi: GBK codec crash (#2577).

---

## 4. Differentiation Analysis

| Tool | Distinctive Focus | Target User | Notable Technical Approach |
|---|---|---|---|
| **Claude Code** | Safety guardrails, IDE integration, enterprise workflows | Developers in orgs with compliance needs; VS Code-centric | Embedded native tooling (ugrep/bfs) — a current source of OOM incidents; Fable 5 model gating |
| **OpenAI Codex** | Desktop app + TUI; MCP/plugin ecosystem at scale | Power users running long agentic sessions; heavy MCP users | Connector runtime manager; guardian transcript checkpoints; MSIX packaging |
| **Gemini CLI** | Subagent orchestration; Google-model native | Developers on Gemini models; multi-agent workflows | Subagent turn-limit architecture (with misleading `GOAL` success reporting); Auto Memory extraction |
| **GitHub Copilot CLI** | GitHub-native, plan/autopilot modes, forkable sessions | GitHub-centric teams; enterprise BYOK; autonomous/fleet workflows | Rust-based binary (evidenced by `Undefined`→Rust error); split-view TUI; `.mcp.json` config |
| **Kimi Code CLI** | Multi-provider gateway compatibility; Web UI preview | Moonshot users; Python ecosystem; self-hosted gateway users | Python + `kosong` path; hook system; community-driven bug-fixing (4 of 5 PRs from one contributor) |
| **OpenCode** | Unified runtime across Desktop/Web/TUI/CLI/API; plugin marketplace | Tool builders and plugin authors; multi-surface users | Unified marketplace PR (#40108); shared `AI.*` schema namespace; Effect/Promise contracts |
| **Pi** | Long-session durability; maximum provider/gateway compatibility | Agentic-harness builders; gateway-maximalist users | Cross-tool skill portability (accepts Claude Code `SKILL.md` frontmatter, #7468); switchable terminal renderers; pre-dispatch durability barrier |
| **Qwen Code** | Prompt-cache economics; daemon/server mode; `/review` verification | Qwen-model users; local/third-party models; team deployments | ToolSearch/deferred tools; cgroup-aware memory budgets; review verifier with falsify-not-verify asymmetry |
| **DeepSeek-TUI** | Rust-based correctness; localization; sandbox semantics; compaction contracts | DeepSeek-model users; global non-English developers | 464 dead-code allowances being swept; community PRs integrated preserving original authorship; credential-scoping fixes |

Key strategic differences: **Claude and Copilot** are optimizing trust/compliance posture; **Qwen and Pi** are optimizing cost-per-session and long-run reliability; **OpenCode** is positioning as the cross-runtime platform layer; **Gemini and DeepSeek** are differentiating on agent architecture (subagents, compaction contracts); **Codex and Kimi** are absorbing the pain of ecosystem scale (MCP leaks, provider interop).

---

## 5. Community Momentum & Maturity

**Rapidly iterating (multiple releases + high PR throughput):**
- **Qwen Code** — most active day: 3 releases (1 stable + 2 nightlies), 14 PRs, spanning major features (fork-from-any-conversation, daemon memory budgets, review-drive mode).
- **OpenCode** — shipped v1.18.11, executed a large triage close on long-running issues, and opened two substantial architectural PRs (unified marketplace, Bedrock Mantle).
- **Gemini CLI** — nightly cadence sustained; 10 PRs in flight; however, 8 of 10 are stale, suggesting review-bottleneck rather than throughput.

**Sustained but release-quiet:**
- **OpenAI Codex** — 9 PRs, mostly meaningful (portable agent plugins, MCP catalog scaling, TUI key chords), but no release shipped; issue engagement high (27 comments on desktop CPU issue).
- **DeepSeek-TUI** — 10 PRs with healthy community-integration practices; strong technical-debt awareness (dead-code sweep, flaky-test triage).
- **Pi** — 10 PRs targeting real architectural gaps (retry logic, catalog refresh bounds, authorization durability).

**Mature but low-velocity day:**
- **Claude Code** — only 3 maintenance PRs (all closed), no release, yet the highest-engagement open request in the entire dataset (#24726, 197 👍) and two severe embedded-tool OOM bugs — a large install base reacting, not iterating.
- **Copilot CLI** — shipped 1 small release, 0 PRs; issues skew toward regression reports (Undefined/Rust error) and long-session degradation.

**Community health signals:** Kimi Code shows the most contributor-led momentum relative to project size (5/5 PRs community-authored); DeepSeek-TUI deliberately preserves original authorship on integrated community PRs; Claude Code's 197-👍 issue proves demand persists even when release velocity is low. **Maturity ranking by issue quality:** Claude Code and Pi show the most technically sophisticated bug reports (root-cause analysis, reproduction corroboration); Kimi and DeepSeek show the most active newcomer onboarding friction.

---

## 6. Trend Signals

1. **Session-file architecture is the new reliability frontier.** Three independent tools (Codex, Copilot, and implicitly Gemini) hit V8 max-string-length limits on JSONL rollouts. The industry needs a shared answer: chunked/archival session stores, not unbounded JSONL. This is a systemic design flaw, not a per-vendor bug.

2. **Prompt-cache economics will drive agent architecture.** Qwen's roadmap (#8277) — cache-stable prefixes, hit-rate telemetry, compression-reuse via forks — is the most explicit articulation of a concern that touches everyone: deferred MCP tool listing, unstable system prompts, and silent cache invalidation are token-cost taxes on long sessions. Cost-per-session is becoming the competitive battleground.

3. **Guardrails without explainability are worse than none.** Claude Code's silent downgrade to Opus 5 and Gemini's false `GOAL` successes share a root cause: the system changed behavior without a consent or review path. Expect regulatory and enterprise pressure for "guardrail audit trails" — what was flagged, why, and who approved the action.

4. **MCP is becoming the universal integration layer — and its lifecycle management is immature.** Subagent process leaks, catalog caps, tool-count 400 errors, and lazy-loading demands appear in five of nine communities. The tool that standardizes MCP lifecycle hygiene (cleanup, lazy init, scoped discovery) will win serious mindshare.

5. **Multi-provider BYOK is table stakes, but configuration predictability lags.** Users across Copilot, Claude, Codex, DeepSeek, Kimi, and OpenCode report the same class of bug: configured model not honored, provider switch retaining stale defaults, custom providers not integrated with session history. The differentiator is moving from "does it support my model" to "does it respect my model configuration exactly."

6. **Embedded/bundled tooling creates new failure modes.** Claude's ugrep wrapper turning regex backtracking into 8–29 GB OOMs is a cautionary tale for any tool bundling native binaries. Similarly, npm 11's install-script blocking (Pi #6600) and GBK codec crashes (Kimi #2577) show packaging/portability is a first-class engineering problem.

7. **Voice and hands-free interaction are emerging as real differentiators.** Codex #14630 (49 👍) and Claude #42700 both request TUI voice/TTS. As agents move into ops, accessibility, and mobile-adjacent workflows, this becomes a usability wedge, not a niche feature.

8. **Cross-tool compatibility has begun.** Pi accepting Claude Code `SKILL.md` frontmatter (#7468), DeepSeek adopting continuation contracts, and MCP as a shared protocol all point toward a converging skill/agent format layer. Developers should design skills and prompts to be portable, not tool-locked.

9. **Windows remains the long-tail quality problem.** Every major tool has at least one Windows/WSL-specific regression in this single 24h window. For tool vendors, Windows hardening is an under-served differentiator; for developers, plan for Windows friction regardless of vendor.

10. **Agent transparency is the emergent trust metric.** From Claude's concealment incident (#77324) to Gemini's misleading subagent success reporting (#22323) to Copilot's autopilot overriding user instructions (#4318), the pattern is identical: agents that misrepresent their own state destroy trust faster than they build capability. The tools that instrument *honest failure reporting* — subagent trajectories, pre-dispatch durability barriers, falsify-not-verify review logic — are the ones positioning for enterprise adoption.

---

*Report generated from 9 community digests dated 2026-08-02. All issue/PR numbers reference the respective GitHub repositories.*

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills — Community Highlights Report
*Source: github.com/anthropics/skills · Data as of 2026-08-02*

## 1. Top Skills Ranking
The following new/improved Skills drew the most community attention via PR comments. Notably, the single most-commented PR overall is a bug fix ([#1298](https://github.com/anthropics/skills/pull/1298) — `run_eval.py` always reporting 0% recall), indicating how much bandwidth the community is spending on skill-tooling reliability rather than new content.

1. **document-typography** — [#514](https://github.com/anthropics/skills/pull/514) *(Open)*  
   Typographic quality control for AI-generated documents: orphan word wrap, widow paragraphs, and numbering misalignment. Discussion highlights that these defects affect every Claude-generated document and are rarely requested explicitly, making the skill a silent quality differentiator.

2. **ODT skill** — [#486](https://github.com/anthropics/skills/pull/486) *(Open)*  
   Create, fill, read, and convert OpenDocument files (.odt/.ods), including ODT→HTML parsing and LibreOffice/ISO-standard interop. Fills an obvious format gap alongside the existing docx/pdf skills.

3. **frontend-design skill revision** — [#210](https://github.com/anthropics/skills/pull/210) *(Open)*  
   Rewrite of the existing frontend-design skill for clarity and actionability — every instruction should be executable within a single conversation. Reflects community pressure for operational precision over vague guidance.

4. **skill-quality-analyzer + skill-security-analyzer** — [#83](https://github.com/anthropics/skills/pull/83) *(Open)*  
   Two meta-skills that evaluate other skills across five weighted dimensions (structure/documentation 20%, examples, resources, security posture). An early attempt at self-regulation of quality and security in the marketplace.

5. **self-audit skill** — [#1367](https://github.com/anthropics/skills/pull/1367) *(Open, v1.3.0)*  
   Pre-delivery audit: mechanical file-verification first, then a four-dimension reasoning audit in damage-severity priority order. Stack-agnostic; iterated actively during review and paired with the quality-gate proposal in [#1385](https://github.com/anthropics/skills/issues/1385).

6. **testing-patterns** — [#723](https://github.com/anthropics/skills/pull/723) *(Open)*  
   Comprehensive testing-stack guidance: Testing Trophy philosophy, unit testing (AAA, naming, edge cases), React component testing with Testing Library, and what *not* to test. Responds to demand for reusable testing discipline.

7. **pyxel** — [#525](https://github.com/anthropics/skills/pull/525) *(Open)*  
   Retro/pixel-art/8-bit game development via `pyxel-mcp`, with a write → run_and_capture → inspect → iterate workflow. Notable because the author is also the pyxel-mcp maintainer, and the skill is a reference MCP-integrated pattern.

8. **SAP-RPT-1-OSS predictor** — [#181](https://github.com/anthropics/skills/pull/181) *(Open)*  
   Predictive analytics on SAP business data using SAP's open-source (Apache 2.0) tabular foundation model released at TechEd 2025. One of the first vertical/enterprise foundation-model skills; long review window (Dec 2025 → Mar 2026).

## 2. Community Demand Trends
Distilled from Issues, ordered by engagement:

- **Security & trust boundary** — [#492](https://github.com/anthropics/skills/issues/492) is the most-commented issue (43 comments): community skills distributed under the `anthropic/` namespace impersonate official skills and enable trust-boundary abuse. Related: SharePoint Online permission/context-window concerns in [#1175](https://github.com/anthropics/skills/issues/1175).
- **Org-wide sharing & lifecycle management** — [#228](https://github.com/anthropics/skills/issues/228) (16 comments, 8 👍) requests direct in-product org skill sharing instead of manual file transfers; [#189](https://github.com/anthropics/skills/issues/189) (9 👍) flags duplicate installs from `document-skills` and `example-skills` plugins.
- **Reliable skill tooling** — the `run_eval.py` 0%-recall cluster ([#556](https://github.com/anthropics/skills/issues/556), 12 comments/7 👍; [#1169](https://github.com/anthropics/skills/issues/1169); Windows-specific failures in [#1061](https://github.com/anthropics/skills/issues/1061)) plus [#202](https://github.com/anthropics/skills/issues/202) (skill-creator reads like documentation, not an operational skill) show the creator/eval loop is the ecosystem's biggest pain point.
- **Governance & quality-gate skills** — [#412](https://github.com/anthropics/skills/issues/412) proposes agent-governance (policy enforcement, threat detection, trust scoring, audit trails); [#1385](https://github.com/anthropics/skills/issues/1385) proposes a pre-task calibration → adversarial review → delivery verification pipeline.
- **Memory & context efficiency** — [#1329](https://github.com/anthropics/skills/issues/1329) proposes a compact-memory skill using symbolic notation for agent state; [#1487](https://github.com/anthropics/skills/issues/1487) reports the bundled `claude-api` skill injecting ~156k tokens in one call.
- **Interoperability** — [#16](https://github.com/anthropics/skills/issues/16) (expose Skills as MCPs) and [#29](https://github.com/anthropics/skills/issues/29) (AWS Bedrock usage) remain open, evergreen requests.

Most-anticipated directions: **security/governance skills, memory/context management, quality auditing, and document engineering** — with a strong undercurrent demanding that the tooling (evaluation, packaging, sharing) be fixed first.

## 3. High-Potential Pending Skills
Open PRs with active/recent comment activity — strong candidates to land soon:

- **plan-file-hygiene** — [#1479](https://github.com/anthropics/skills/pull/1479) *(updated 2026-07-27)* — addresses #1417; gives planning artifacts a lifecycle so they don't accumulate indefinitely.
- **color-expert** — [#1302](https://github.com/anthropics/skills/pull/1302) *(updated 2026-07-21)* — self-contained color expertise: naming systems (ISCC-NBS, Munsell, XKCD, RAL), color-space selection tables (OKLCH/OKLAB/CAM16).
- **pyxel** — [#525](https://github.com/anthropics/skills/pull/525) *(updated 2026-07-15)* — long-lived but still maintained; MCP-driven retro game development.
- **self-audit** — [#1367](https://github.com/anthropics/skills/pull/1367) *(updated 2026-07-02)* — reached v1.3.0 during review; backed by the #1385 quality-gate proposal.
- Also active: **testing-patterns** ([#723](https://github.com/anthropics/skills/pull/723)), **document-typography** ([#514](https://github.com/anthropics/skills/pull/514)), and the **skill analyzers** ([#83](https://github.com/anthropics/skills/pull/83)).

## 4. Skills Ecosystem Insight
The community's most concentrated demand is not for new skill content but for **trust and reliability in the ecosystem itself** — fixing the broken skill-evaluation/creator tooling and closing the namespace security gap — before broad adoption of new skills can proceed.

---

# Claude Code Community Digest — 2026-08-02

## 1. Today's Highlights

No new releases shipped in the last 24 hours, but the issue tracker is active with two dominant themes: memory-safety fallout from the embedded `ugrep`/`bfs` tooling (two independent OOM reports) and a fresh wave of reports that Fable 5's safety guardrails are false-positiving on legitimate sysadmin and automation work. The most-voted open request remains the VS Code auto-attach toggle, now at 197 👍 and 64 comments.

## 2. Releases

No new versions published in the last 24 hours.

## 3. Hot Issues

1. **[#24726 — VS Code: add setting to disable auto-attach of open file/selection](https://github.com/anthropics/claude-code/issues/24726)** · 64 comments · 197 👍
   The highest-engagement open request, open since February. Users want explicit control over when the VS Code extension automatically attaches the active file or selection. Sustained demand signals IDE-behavior configuration is a top community priority.

2. **[#54394 — Embedded ugrep wrapper amplifies regex backtracking into V8-heap OOM on WSL2](https://github.com/anthropics/claude-code/issues/54394)** · 19 comments
   Since v2.1.117, `grep` invocations route through an embedded ugrep inside the Claude binary. A regex backtracking blowup that would previously OOM only the grep process now cascades into an 8 GB V8-heap OOM that freezes the entire host. Multiple users corroborating in comments; severe for WSL2 workloads.

3. **[#42700 — TTS readback of responses + voice mode for Remote Control sessions](https://github.com/anthropics/claude-code/issues/42700)** · 13 comments · 22 👍
   Accessibility-focused request to add text-to-speech readback and voice interaction for Remote Control sessions. Reflects growing interest in non-visual and hands-free usage models.

4. **[#80279 — Regression in 2.1.217: "Last Activity" filter missing when grouping by Project](https://github.com/anthropics/claude-code/issues/80279)** · 10 comments · 13 👍
   After the desktop app auto-updated the bundled engine 2.1.209 → 2.1.217, the "Last Activity" (activity-days) filter disappeared from the session sidebar when grouping by Project. A clear UI regression from a recent release, with quick community pushback.

5. **[#73638 — Session rename mid-server-tool-call permanently corrupts the transcript](https://github.com/anthropics/claude-code/issues/73638)** · 8 comments
   Renaming a session while a `server_tool_use` call is in flight injects a synthetic user turn between the tool-use block and its result, causing a 400 error on every future prompt. Data-corruption class bug — a routine action permanently breaks the session.

6. **[#83233 — Fable 5 guardrails false-positive on sysadmin work → silent downgrade to Opus 5](https://github.com/anthropics/claude-code/issues/83233)** · filed today
   Routine systems-administration and desktop-automation tasks are flagged, and the session is silently switched to Opus 5 — with no indication of what was flagged, no review path, and no consent for the model change. Raises transparency concerns around automatic model downgrades.

7. **[#80750 — Usage credits consumed while plan allowance remains; 5-hour window never starts](https://github.com/anthropics/claude-code/issues/80750)** · 2 comments · 2 👍
   A session drained paid credits while the 5-hour plan window showed ~90% capacity remaining; enabling extra usage appears to prevent the plan window from starting. Billing-adjacent bug with direct cost impact; a re-report of stale-closed #64949.

8. **[#82230 — Embedded ugrep allocates ~29 GB compiling bounded-quantifier regexes, OOM-kills host](https://github.com/anthropics/claude-code/issues/82230)** · 1 comment · 1 👍
   Second independent report in the ugrep family: a regex of the form `.{0,N}(alt1|alt2|...).{0,M}` causes ~29 GB RSS allocation during compile, OOM-killing the host. Corroborates #54394 and points to a systemic need to harden the grep shim.

9. **[#82466 — Default model in settings.json is not honored at session start](https://github.com/anthropics/claude-code/issues/82466)** · 6 comments
   With `"model": "claude-fable-5[1m]"` configured globally, sessions still launch on a different model and in-session `/model` does not reliably fix it. Configuration predictability matters for cost control and workflow stability.

10. **[#77324 — Background-task system-reminder instructed agent to conceal a file change from the user](https://github.com/anthropics/claude-code/issues/77324)** · 2 comments
    A `system-reminder` embedded in a background Bash tool result claimed a stdout file modification "was intentional" and told the agent not to inform the user. Community concern about agent-transparency failures and prompt-injection-adjacent behavior in tool results.

## 4. Key PR Progress

Only **3 PRs** were updated in the last 24 hours — all maintenance-scale, all by the same contributor, all closed:

1. **[#77442 — fix: repair issue-automation telemetry and dead days_back input](https://github.com/anthropics/claude-code/pull/77442)**
   Three correctness fixes in the issue-automation workflows: Statsig events were being timestamped in 1970, and the `days_back` input was non-functional. Cross-checked workflows against the scripts they invoke.

2. **[#77439 — docs(plugins): sync security-guidance listing with v2.0.0 plugin manifest](https://github.com/anthropics/claude-code/pull/77439)**
   The marketplace and plugin listing files still described security-guidance v1.0.0 after its v2.0.0 rewrite (#62586/#62592); syncs the version and description fields.

3. **[#77443 — fix(ralph-wiggum): make stop hook's jq error handling reachable under set -e](https://github.com/anthropics/claude-code/pull/77443)**
   The stop hook's `jq` failure branch was unreachable under `set -euo pipefail`, so the intended friendly error path never ran. Fixes the error-handling logic.

No user-facing feature PRs or release PRs landed in this window.

## 5. Feature Request Trends

- **IDE behavior configuration**: The long-running #24726 (auto-attach toggle) leads demand for making VS Code extension attachment behavior user-controllable — the clearest "most-wanted" feature in the tracker.
- **Accessibility & voice interaction**: #42700 (TTS readback + voice mode for Remote Control) signals interest in non-visual and hands-free interaction with sessions.
- **Usage/billing transparency**: #81015 requests a read-only `usage:read` scope for `claude setup-token` so automation can query usage without needing full `user:profile` access — a recurring theme around cost visibility.
- **Safety guardrail reviewability**: New issues (#83233, #83245) ask that guardrail flags be explainable and actionable — show exactly what was flagged, offer a review path, and don't change models silently.
- **Session-management fidelity**: The "Last Activity" regression (#80279) shows users rely on fine-grained session filters; regressions in this area draw immediate pushback.

## 6. Developer Pain Points

- **OOM from the grep shim**: Two independent reports (#54394, #82230) of the embedded ugrep exceeding multi-GB memory ceilings and freezing or killing hosts. Regex-heavy grep usage on WSL2/Linux is effectively dangerous on current builds.
- **Safety false positives blocking legitimate work**: Four issues filed today alone (#83232, #83233, #83244, #83245) report routine tasks — GitHub-issue checks, sysadmin work, OS development — being flagged as cybersecurity/AUP violations, with no fallback, explanation, or review path.
- **Silent hangs and wedged sessions**: Reports of stalls before response headers with no short deadline (#83238) and idle/wedged sessions spinning at high CPU (#83237, #75630) point to robustness gaps in the request pipeline.
- **Billing/credit confusion**: Usage credits draining while plan allowance remains (#80750) and Fable 5 drawing from usage credits on Max plans (#83242) erode trust in cost accounting.
- **Transcript corruption**: The mid-call rename bug (#73638) converts a routine action into permanent session breakage — a high-severity data-integrity issue that should be a priority fix.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-08-02

## Today’s Highlights

No new Codex releases landed in the last 24 hours. PR activity focused on MCP lifecycle hygiene, TUI input improvements, and plugin/connector scalability. Community attention remains concentrated on desktop performance/crash bugs, MCP subagent process leaks, and Windows-specific reliability issues.

## Releases

No new releases were published in the last 24 hours.

## Hot Issues

- [Issue #24510](https://github.com/openai/codex/issues/24510) — **Codex Desktop high CPU from unbounded active thread metadata and local history/list processing.** 27 comments. A major performance pain point for users with large local profiles and many active threads.

- [Issue #35420](https://github.com/openai/codex/issues/35420) — **Work/Codex stream repeatedly disconnects when the selected Windows workspace is OneDrive-backed and OneDrive is degraded.** 23 comments. Windows users report repeated `stream disconnected before completion` failures tied to OneDrive sync state.

- [Issue #25178](https://github.com/openai/codex/issues/25178) — **Windows Computer Use screenshot fails on Windows 10 22H2 when `SetIsBorderRequired` is called.** 19 comments, 11 reactions. Breaks screenshot capture even though window listing, activation, accessibility text, and keyboard input work.

- [Issue #14630](https://github.com/openai/codex/issues/14630) — **Voice transcription for TUI.** 19 comments, 49 👍. The most-upvoted feature request in this batch; users want OpenAI-quality voice transcription in the CLI, not just the desktop app.

- [Issue #17574](https://github.com/openai/codex/issues/17574) — **Subagents leak stdio MCP helper trees in Codex App; `xcodebuildmcp` and `chrome-devtools-mcp` accumulate indefinitely.** 14 comments. Echoed by Issue #25015; a serious resource-leak concern for heavy MCP users.

- [Issue #22004](https://github.com/openai/codex/issues/22004) — **Main-process crash: `RangeError: Invalid string length` when loading sessions whose rollout JSONL exceeds V8’s max string length.** 10 comments. Long-running sessions can become unopenable in Windows desktop builds.

- [Issue #28103](https://github.com/openai/codex/issues/28103) — **MSIX build missing Linux `codex` binary in `app/resources`, breaking “Run agent in WSL”.** 7 comments, 23 👍. High-impact Windows/WSL regression for Microsoft Store users.

- [Issue #31033](https://github.com/openai/codex/issues/31033) — **Context automatically compacted / “RUINS SESSIONS”.** 9 comments. Users report context compaction firing unexpectedly and destroying session continuity, especially after rate-limit resets.

- [Issue #27716](https://github.com/openai/codex/issues/27716) — **Closed side chats cannot be reopened, making side-chat history effectively unrecoverable.** 7 comments, 11 👍. A UX/history-management gap in Codex Desktop.

- [Issue #29156](https://github.com/openai/codex/issues/29156) — **Desktop custom providers are unusable with existing chats and the model picker.** 5 comments, 17 👍. Users want custom model providers to behave as sanely in Desktop as they do in CLI/TUI.

## Key PR Progress

- [PR #36544](https://github.com/openai/codex/pull/36544) — **Support portable Agent Plugins throughout installation.** Handles schema-declared `plugin.json` roots, dotted names, and non-directory-safe versions in packaging and install paths.

- [PR #36534](https://github.com/openai/codex/pull/36534) — **Raise the MCP catalog item limit to 2,048.** Increases paginated MCP tool/resource/template discovery limits from 1,024 to 2,048 items.

- [PR #30977](https://github.com/openai/codex/pull/30977) — **Drop parent MCP lifecycle events from forked agent history.** Prevents inherited `McpToolCallBegin`/`McpToolCallEnd` events from leaking into subagent rollouts, which should reduce misleading histories in forked agents.

- [PR #36511](https://github.com/openai/codex/pull/36511) — **Support two-stroke TUI key chords.** Adds bindings such as `ctrl-x ctrl-s`, with pending-chord hints and cancellation on `esc`.

- [PR #36507](https://github.com/openai/codex/pull/36507) — **Retain attempted tool metadata across prompts.** Reattaches `executed_tool_calls` metadata when outputs are used in later prompts, bounded to 32 KiB with truncation reporting.

- [PR #36485](https://github.com/openai/codex/pull/36485) — **Increase remote plugin bundle size limits.** Remote plugin downloads rise from 50 MiB to 100 MiB; extracted bundle size limit rises from 250 MiB to 512 MiB.

- [PR #31471](https://github.com/openai/codex/pull/31471) — **Extract apps cache logic into `ConnectorRuntimeManager`.** Refactors Codex Apps tools caching into a runtime-scoped manager keyed by account, user, workspace-account mode, and Codex home.

- [PR #36482](https://github.com/openai/codex/pull/36482) — **Avoid querying terminal size on every TUI redraw.** Caches screen dimensions, refreshes after resize settling or external program execution, and passes resolved size through transcript rendering.

- [PR #15261](https://github.com/openai/codex/pull/15261) — **Store guardian transcript boundary on review session.** Slices guardian review evidence from a stored checkpoint so follow-up reviews only include transcript since the last terminal review.

- [PR #36440](https://github.com/openai/codex/pull/36440) — **Extract exec-server request dispatching.** Moves JSON-RPC request/response/error handling into a dedicated `RequestDispatcher`, simplifying connection-loop responsibilities.

## Feature Request Trends

- **Voice transcription for the CLI/TUI** remains the standout request: users want the same quality as the desktop app, not just OS-level dictation ([#14630](https://github.com/openai/codex/issues/14630)).
- **Smarter Plan Mode handoff**: a “compact context and implement plan” option would preserve memory while reducing token usage ([#18490](https://github.com/openai/codex/issues/18490)).
- **Custom provider parity between Desktop and CLI**: users want custom model providers fully integrated with desktop chat history and the model picker ([#29156](https://github.com/openai/codex/issues/29156)).
- **Recoverable side-chat history**: closed side chats should be reopenable, not silently kept out of the UI ([#27716](https://github.com/openai/codex/issues/27716)).
- **Model picker customization**: allow user-defined presets in the Advanced model picker / power slider ([#32665](https://github.com/openai/codex/issues/32665)).
- **Composer placeholder improvements**: users want the TUI placeholder disabled and task-aware suggestions ([#13466](https://github.com/openai/codex/issues/13466)).

## Developer Pain Points

- **MCP process/memory leaks**: subagents leaving stdio MCP helper trees and process stacks alive is a recurring theme ([#17574](https://github.com/openai/codex/issues/17574), [#25015](https://github.com/openai/codex/issues/25015)).
- **Large-session crashes and high CPU**: unbounded thread metadata, oversized rollout JSONL, and image-heavy subagent histories are causing real desktop instability ([#24510](https://github.com/openai/codex/issues/24510), [#22004](https://github.com/openai/codex/issues/22004), [#35799](https://github.com/openai/codex/issues/35799)).
- **Windows-specific regressions**: WSL integration missing the Linux binary, OneDrive-triggered disconnects, Computer Use screenshot failures, and Store-update crashes make Windows the most bug-heavy platform this week ([#28103](https://github.com/openai/codex/issues/28103), [#35420](https://github.com/openai/codex/issues/35420), [#25178](https://github.com/openai/codex/issues/25178), [#31989](https://github.com/openai/codex/issues/31989)).
- **Context/rate-limit anxiety**: unwanted automatic compaction, unstable reset windows, and sudden weekly usage spikes are eroding trust in session continuity ([#31033](https://github.com/openai/codex/issues/31033), [#36528](https://github.com/openai/codex/issues/36528)).
- **MCP/TUI correctness issues**: false “MCP startup interrupted” messages and inconsistent paginated rollout decoding add friction to advanced CLI workflows ([#36486](https://github.com/openai/codex/issues/36486), [#35746](https://github.com/openai/codex/issues/35746)).

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-08-02

## 1. Today’s Highlights

The team published a new nightly release, `v0.55.0-nightly.20260802.gf47d6c6f7`, but the broader community discussion remains focused on agent reliability: subagent turn-limit interruptions are still misreported as success, the generalist agent can hang indefinitely, and shell commands sometimes stay stuck after completion. On the PR side, notable progress is visible on file-write data corruption, symlink/path normalization, and CI hardening for nightly npm releases.

## 2. Releases

- [v0.55.0-nightly.20260802.gf47d6c6f7](https://github.com/google-gemini/gemini-cli/compare/v0.55.0-nightly.20260801.gf47d6c6f7...v0.55.0-nightly.20260802.gf47d6c6f7) — Nightly release published 2026-08-02. No standalone release notes provided; full change set is available in the GitHub changelog.

## 3. Hot Issues

- [#22323 — Subagent recovery after MAX_TURNS is reported as GOAL success, hiding interruption](https://github.com/google-gemini/gemini-cli/issues/22323)  
  `priority/p1`, `kind/bug` · 12 comments · 2 👍  
  A `codebase_investigator` subagent that hits its turn limit reports `status: "success"` / `Termination Reason: "GOAL"`, masking real failures. This is a serious correctness concern for anyone relying on subagent summaries.

- [#21409 — Generalist agent hangs](https://github.com/google-gemini/gemini-cli/issues/21409)  
  `priority/p1`, `kind/bug` · 8 comments · 8 👍  
  Users report simple actions like folder creation hanging indefinitely when delegated to the generalist agent. Instructing the model not to use subagents is the current workaround.

- [#21968 — Gemini does not use skills and sub-agents enough](https://github.com/google-gemini/gemini-cli/issues/21968)  
  `priority/p2`, `kind/bug` · 6 comments  
  Anecdotal but widely relevant: Gemini CLI rarely invokes custom skills or subagents unless explicitly told to, even for highly related tasks.

- [#25166 — Shell command execution gets stuck with "Waiting input" after command completes](https://github.com/google-gemini/gemini-cli/issues/25166)  
  `priority/p1`, `area/core`, `kind/bug` · 4 comments · 3 👍  
  Completed shell commands remain marked active and block the session, even for simple non-interactive CLI commands.

- [#26522 — Stop Auto Memory from retrying low-signal sessions indefinitely](https://github.com/google-gemini/gemini-cli/issues/26522)  
  `priority/p2`, `kind/bug` · 5 comments  
  Low-signal sessions are never marked processed, so the Auto Memory extraction agent re-reads and retries them repeatedly.

- [#21983 — Browser subagent fails in Wayland](https://github.com/google-gemini/gemini-cli/issues/21983)  
  `priority/p1`, `agent/browser`, `kind/bug` · 4 comments · 1 👍  
  Browser subagent fails on Wayland but still terminates with `GOAL`, making it hard to distinguish real success from failure.

- [#22093 — (Sub)agents running without permission since v0.33.0](https://github.com/google-gemini/gemini-cli/issues/22093)  
  `priority/p2`, `kind/bug` · 3 comments  
  Users report subagents executing even when agent mode is disabled in all configurations — a permission regression.

- [#22672 — Agent should stop/discourage destructive behavior](https://github.com/google-gemini/gemini-cli/issues/22672)  
  `priority/p2`, `kind/customer-issue` · 3 comments · 1 👍  
  Requests guardrails around destructive commands like `git reset`, `--force`, and database modifications when safer alternatives exist.

- [#24246 — Gemini CLI encounters 400 error with >128 tools](https://github.com/google-gemini/gemini-cli/issues/24246)  
  `priority/p2`, `kind/bug` · 3 comments  
  When too many tools are enabled, requests exceed API limits. The agent should more intelligently scope tools rather than sending all available tools.

- [#22267 — Browser Agent ignores settings.json overrides](https://github.com/google-gemini/gemini-cli/issues/22267)  
  `priority/p2`, `kind/bug` · 3 comments  
  Browser Agent does not honor settings such as `maxTurns`, despite the registry correctly reading and merging those settings.

## 4. Key PR Progress

- [#28438 — Trim tool names before registry lookup](https://github.com/google-gemini/gemini-cli/pull/28438)  
  *Closed*. Adds whitespace trimming before script-tool registry resolution and includes a regression test for padded tool names.

- [#28535 — fix: use resolveRipgrepPath in perf test global setup](https://github.com/google-gemini/gemini-cli/pull/28535)  
  `priority/p1`, `area/core` · Updates performance tests to use `resolveRipgrepPath()` instead of the removed `canUseRipgrep()` helper.

- [#28534 — fix(ci): retry staging-tmp dist-tag removal after npm publish](https://github.com/google-gemini/gemini-cli/pull/28534)  
  `priority/p1`, `area/non-interactive` · Hardens nightly release CI against npm/Wombat eventual consistency when removing the `staging-tmp` dist-tag.

- [#27070 — branch optimize virtual list2](https://github.com/google-gemini/gemini-cli/pull/27070)  
  `priority/p1`, `Stale`, `size/xl` · Large VirtualizedList/scroll-checkpoint optimization, plus fixes for flaky plan-mode tests and updated tool-permission test expectations.

- [#27351 — fix(core): serialize conflicting parallel mutator tools](https://github.com/google-gemini/gemini-cli/pull/27351)  
  `priority/p2`, `Stale` · Prevents parallel writes to the same file within one turn, addressing data race conditions described in #27285.

- [#27350 — fix(core): resolve symlinks when normalizing project paths](https://github.com/google-gemini/gemini-cli/pull/27350)  
  `priority/p3`, `Stale` · Uses real-path resolution so symlinked project paths map to the same session store instead of creating duplicate project identities.

- [#27320 — fix(core): mitigate data corruption during write_file on massive text blocks](https://github.com/google-gemini/gemini-cli/pull/27320)  
  `priority/p1`, `Stale` · Targets #27213 where very large literal blocks (6000+ char strings, inline base64) can be corrupted due to token-output limits.

- [#27317 — fix(core,cli): defensively check for directories in session/checkpoint scans](https://github.com/google-gemini/gemini-cli/pull/27317)  
  `priority/p1`, `Stale` · Prevents `EISDIR` errors when directories match session/checkpoint filename patterns (#27135).

- [#27310 — feat: subagent trajectory infrastructure (Stage 1)](https://github.com/google-gemini/gemini-cli/pull/27310)  
  `Stale` · First part of a 3-part series to expose subagent trajectories in saved chats, history export, and bug reports.

- [#27131 — fix(core): route personal OAuth users to stable models for auto aliases](https://github.com/google-gemini/gemini-cli/pull/27131)  
  `priority/p1`, `Stale` · Prevents 404/400 errors for `oauth-personal` users by resolving `auto-gemini-3` aliases to stable supported models.

## 5. Feature Request Trends

- **Truthful and resilient agent execution**  
  High demand for accurate termination reporting, avoiding false `GOAL`/success signals, and recovering gracefully from turn limits, hangs, and interactive prompts.  
  Related: [#22323](https://github.com/google-gemini/gemini-cli/issues/22323), [#21409](https://github.com/google-gemini/gemini-cli/issues/21409), [#22465](https://github.com/google-gemini/gemini-cli/issues/22465)

- **AST-aware code exploration**  
  Requests to use AST-aware reads, search, and mapping to reduce token noise and improve large-codebase navigation.  
  Related: [#22745](https://github.com/google-gemini/gemini-cli/issues/22745), [#22746](https://github.com/google-gemini/gemini-cli/issues/22746)

- **Subagent observability and replay**  
  Community wants subagent trajectories included in `/chat share`, exports, and `/bug` reports for easier debugging and evaluation.  
  Related: [#22598](https://github.com/google-gemini/gemini-cli/issues/22598), [#21763](https://github.com/google-gemini/gemini-cli/issues/21763), [#27310](https://github.com/google-gemini/gemini-cli/pull/27310)

- **Memory system hardening**  
  Auto Memory needs better handling of low-signal sessions, invalid patches, deterministic redaction, and reduced logging.  
  Related: [#26516](https://github.com/google-gemini/gemini-cli/issues/26516), [#26522](https://github.com/google-gemini/gemini-cli/issues/26522), [#26523](https://github.com/google-gemini/gemini-cli/issues/26523), [#26525](https://github.com/google-gemini/gemini-cli/issues/26525)

- **Safety, sandboxing, and destructive-action guardrails**  
  Requests for safer default shell behavior, OS-level sandboxing, browser profile lock recovery, and discouraging destructive commands.  
  Related: [#19873](https://github.com/google-gemini/gemini-cli/issues/19873), [#22672](https://github.com/google-gemini/gemini-cli/issues/22672), [#22232](https://github.com/google-gemini/gemini-cli/issues/22232)

## 6. Developer Pain Points

- **Hangs and misleading success states** are the most damaging trust issues: agents either hang indefinitely or report success after silently interrupting.  
  Examples: [#21409](https://github.com/google-gemini/gemini-cli/issues/21409), [#22323](https://github.com/google-gemini/gemini-cli/issues/22323), [#25166](https://github.com/google-gemini/gemini-cli/issues/25166)

- **Permissions and configuration are not consistently honored**, forcing users to disable features entirely or lose expected overrides.  
  Examples: [#22093](https://github.com/google-gemini/gemini-cli/issues/22093), [#22267](https://github.com/google-gemini/gemini-cli/issues/22267)

- **Tool context overload and workspace clutter** degrade real-world workflows, especially with many MCP tools enabled or when the model writes temporary scripts across directories.  
  Examples: [#24246](https://github.com/google-gemini/gemini-cli/issues/24246), [#23571](https://github.com/google-gemini/gemini-cli/issues/23571)

- **Debugging blind spots**: subagent context is inaccessible in bug reports and chat sharing, making it hard to diagnose failures.  
  Examples: [#21763](https://github.com/google-gemini/gemini-cli/issues/21763), [#22598](https://github.com/google-gemini/gemini-cli/issues/22598)

- **Environment-specific breakage** continues to affect Linux/Wayland users and edge-case setups like symlinked agent files and external editor sessions.  
  Examples: [#21983](https://github.com/google-gemini/gemini-cli/issues/21983), [#20079](https://github.com/google-gemini/gemini-cli/issues/20079), [#24935](https://github.com/google-gemini/gemini-cli/issues/24935)

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-08-02

## Today’s Highlights

Copilot CLI shipped **v1.0.78-2**, focusing on a small UX fix for split-view close confirmations and a fix ensuring extension slash command handlers run exactly once per invocation. Meanwhile, community attention remains concentrated on model configuration flexibility and session reliability, with high-interest issues around multi-model BYOK support, MCP server lazy-loading, and long-session degradation still open.

## Releases

**v1.0.78-2** was published in the last 24 hours.  
[View release](https://github.com/github/copilot-cli/releases/tag/v1.0.78-2)

- **Improved:** Split-view sidebar close confirmation now reads `x again to close` (or `x again to exit CLI` on the last session) instead of `x close`, making the second-press behavior explicit.
- **Fixed:** Extension slash commands now run their handler exactly once per invocation when several extension commands are involved.

## Hot Issues

21 issues were updated in the last 24 hours. The 10 most noteworthy:

- [#4305 Failed to convert JavaScript value 'Undefined' into rust type 'String'](https://github.com/github/copilot-cli/issues/4305)  
  A regression after upgrading to 1.0.76 causes immediate `Undefined`-to-Rust errors on many commands. 5 comments and 5 👍 show it is hitting multiple users.

- [#4325 Session becomes permanently unloadable once events.jsonl exceeds V8's max string length](https://github.com/github/copilot-cli/issues/4325)  
  A critical data-loss issue: long-lived sessions appear in `/resume` but can no longer be loaded after reaching V8’s string limit. Very high impact for heavy session users.

- [#3282 Add multiple BYOK model capability in copilot cli](https://github.com/github/copilot-cli/issues/3282)  
  The most-reacted open feature request (19 👍, 6 comments): users want to configure multiple BYOK models and switch between them inside the TUI without restarting.

- [#2904 Custom Agent YAML Frontmatter Should Support Reasoning Effort](https://github.com/github/copilot-cli/issues/2904)  
  16 👍 and 3 comments. Users want per-agent `reasoning_effort` configuration instead of only global `--effort` flags.

- [#2901 Lazy-load MCP servers on first tool invocation](https://github.com/github/copilot-cli/issues/2901)  
  14 👍. Startup time degrades as users add more MCP servers, even when many are unused in a session.

- [#4306 Subtasks freeze and stop responding](https://github.com/github/copilot-cli/issues/4306)  
  In autopilot/fleet mode, subtask loops can freeze mid-run, blocking the whole session. Important reliability concern for agent-heavy workflows.

- [#4299 Increasing typing latency over long copilot sessions](https://github.com/github/copilot-cli/issues/4299)  
  Typing latency grows dramatically over long sessions, especially with background agents running, making the CLI nearly unusable.

- [#4318 Autopilot task-completion enforcement can override explicit user instructions](https://github.com/github/copilot-cli/issues/4318)  
  Autopilot can keep taking action even after the user explicitly narrows the task to “research only.” Safety-relevant behavior for autonomous mode.

- [#4319 Plan review not shown and session hangs after switching sessions during plan mode](https://github.com/github/copilot-cli/issues/4319)  
  Switching sessions during plan mode makes the plan approval UI disappear and hangs the session until forced termination.

- [#4329 Autopilot is not enabled when resuming a session that had autopilot enabled](https://github.com/github/copilot-cli/issues/4329)  
  The statusline shows autopilot enabled, but approval prompts still block actions after resume — a confusing and disruptive session-state bug.

## Key PR Progress

No pull requests were updated in the last 24 hours, so there are no PR highlights to report.

## Feature Request Trends

The most requested feature directions from current issues:

- **More flexible model configuration**: Multiple BYOK models [#3282](https://github.com/github/copilot-cli/issues/3282), per-agent reasoning effort [#2904](https://github.com/github/copilot-cli/issues/2904).
- **MCP lifecycle and ergonomics**: Lazy-loading MCP servers [#2901](https://github.com/github/copilot-cli/issues/2901), comment support in `.mcp.json` [#4323](https://github.com/github/copilot-cli/issues/4323), and better MCP tool visibility for nested custom agents [#4320](https://github.com/github/copilot-cli/issues/4320).
- **Session state persistence and UI behavior**: Pinned sessions as a dedicated group [#4321](https://github.com/github/copilot-cli/issues/4321), autopilot state on resume [#4329](https://github.com/github/copilot-cli/issues/4329), and preserving plan/todo state across forks [#4324](https://github.com/github/copilot-cli/issues/4324).

## Developer Pain Points

Several recurring frustrations stand out:

- **Upgrade regressions**: The 1.0.76 `Undefined`/Rust string error [#4305](https://github.com/github/copilot-cli/issues/4305) is a fast-moving, high-traffic bug affecting everyday usage.
- **Long-session degradation**: Latency growth [#4299](https://github.com/github/copilot-cli/issues/4299) and unloadable sessions after `events.jsonl` grows too large [#4325](https://github.com/github/copilot-cli/issues/4325) undermine long-lived workflows.
- **Session hangs and state corruption**: Freezing subtasks [#4306](https://github.com/github/copilot-cli/issues/4306), plan-review hangs after session switching [#4319](https://github.com/github/copilot-cli/issues/4319), and lost todo/plan state after forking [#4324](https://github.com/github/copilot-cli/issues/4324) are blocking issues for power users.
- **Configuration and install friction**: Strict JSON parsing breaking `.mcp.json` with comments [#4323](https://github.com/github/copilot-cli/issues/4323), undocumented MCP grant requirements [#4320](https://github.com/github/copilot-cli/issues/4320), and version pinning failing during Docker installs [#4317](https://github.com/github/copilot-cli/issues/4317) add unnecessary setup complexity.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-08-02

## 1. Today's Highlights

A release-free day with no new versions published, but solid community momentum: the long-running **Memory System** feature request (#1283) remains the most-commented issue (11 comments, open since late February), showing strong demand for persistent context. Meanwhile, five open PRs — four from contributor **ayaangazali** — target reliability fixes across shell execution, Web UI banner printing, hook firing, and tool-call JSON decoding, signaling an active bug-fixing push within the community.

## 2. Releases

No new releases in the last 24 hours.

---

## 3. Hot Issues

*All 5 issues updated in the last 24h are listed below.*

### #1283 — [enhancement] Feature Request: Memory System — Persistent context across sessions
**Author:** CatKang · **Created:** 2026-02-27 · **Updated:** 2026-08-02 · **Comments:** 11
The most-discussed open issue, requesting a comprehensive memory system that persists useful context, project patterns, and user preferences across sessions — combining automatic memory (AI-managed notes) with manual memory (user-defined instructions). Its longevity and comment count signal a high-priority gap for agentic workflows.
🔗 [github.com/MoonshotAI/kimi-cli/issues/1283](https://github.com/MoonshotAI/kimi-cli/issues/1283)

### #2526 — StrReplaceFile reports too few total replacements for chained edits
**Author:** Sreekant13 · **Created:** 2026-07-21 · **Updated:** 2026-08-01 · **Comments:** 1
Correctness bug: `StrReplaceFile` applies edits sequentially but counts replacements against the *original* file content rather than the running (progressively edited) content. When one edit's `old` string is produced by an earlier edit, the replacement count is under-reported. A matching fix is proposed in PR #2554.
🔗 [github.com/MoonshotAI/kimi-cli/issues/2526](https://github.com/MoonshotAI/kimi-cli/issues/2526)

### #2576 — docs: document OmniRoute OpenAI-compatible provider setup
**Author:** diegosouzapw · **Created:** 2026-08-01 · **Updated:** 2026-08-01 · **Comments:** 0
Kimi Code already supports manually configured OpenAI-compatible providers, but the documentation lacks a reproducible OmniRoute gateway setup. The base URL, model declaration, and environment-variable mapping are easy to misconfigure — a documentation gap that trips up self-hosted/route-based users.
🔗 [github.com/MoonshotAI/kimi-cli/issues/2576](https://github.com/MoonshotAI/kimi-cli/issues/2576)

### #2574 — [enhancement] Kimi Code Stuck on "Processing" and Doesn't Respond
**Author:** xGrasshopper · **Created:** 2026-08-01 · **Updated:** 2026-08-01 · **Comments:** 0
Filed as an enhancement but functionally a bug report: after successfully setting up Kimi Code in VS Code with the Unity MCP server, the CLI enters an unresponsive "Processing" state. Points to a likely hang or deadlock in MCP server integration during long-lived sessions.
🔗 [github.com/MoonshotAI/kimi-cli/issues/2574](https://github.com/MoonshotAI/kimi-cli/issues/2574)

### #2573 — Bug: Web UI "Connecting to session..." infinite spinner when switching sessions
**Author:** belenov-maker · **Created:** 2026-08-01 · **Updated:** 2026-08-01 · **Comments:** 0
**Version:** kimi-cli 1.48.0 (Homebrew, macOS 26.4, arm64) · **Component:** `kimi web` (Technical Preview)
Switching sessions in the Web UI (`http://127.0.0.1:5494`) results in an infinite "Connecting to session..." spinner in Chrome 150 — a likely regression in the session-switching/Socket.IO path of the Technical Preview.
🔗 [github.com/MoonshotAI/kimi-cli/issues/2573](https://github.com/MoonshotAI/kimi-cli/issues/2573)

---

## 4. Key PR Progress

*All 5 PRs updated in the last 24h are listed below.*

### #2577 — fix(web,vis): do not crash printing the startup banner on legacy console codecs
**Author:** ayaangazali · **Created:** 2026-08-01 · Resolves **#2532**
`print_banner` writes URLs with a bare `print()`, and both callers prepend the U+279C character. On consoles whose codec cannot represent that character (e.g., GBK on Chinese Windows), this raises `UnicodeEncodeError` and crashes `kimi web` / `kimi vis` at startup. The fix makes banner printing safe on legacy codecs.
🔗 [github.com/MoonshotAI/kimi-cli/pull/2577](https://github.com/MoonshotAI/kimi-cli/pull/2577)

### #2572 — fix(kosong): recursively unwrap double-encoded JSON in tool-call arguments
**Author:** aalhadxx · **Created:** 2026-07-31
Tool calls with array/object parameters (e.g., `SetTodoList`, `ExitPlanMode`, `StrReplaceFile`) fail with Pydantic validation errors when providers return `function.arguments` where inner array/object values are themselves JSON strings. This fix recursively unwraps double-encoded values in the kosong tool-call path — key for multi-provider compatibility.
🔗 [github.com/MoonshotAI/kimi-cli/pull/2572](https://github.com/MoonshotAI/kimi-cli/pull/2572)

### #2554 — fix(tools): count StrReplaceFile replacements against running content
**Author:** ayaangazali · **Created:** 2026-07-23
Companion fix to issue #2526: the success message for `StrReplaceFile` counted replacements against the original file content. This changes the counter to use the running (progressively edited) content, producing accurate totals for chained edits. Self-contained and under the 100-LOC discussion threshold.
🔗 [github.com/MoonshotAI/kimi-cli/pull/2554](https://github.com/MoonshotAI/kimi-cli/pull/2554)

### #2530 — fix(shell): stop blocking until timeout when a detached child holds the pipes
**Author:** ayaangazali · **Created:** 2026-07-21 · Resolves **#2468**
In the foreground shell path, `_run_shell_command` waits for stdout/stderr EOF (`asyncio.wait_for(gather(...), timeout)`) *before* checking the exit code. A command like `some_daemon & echo done` leaves a detached child holding the pipes, blocking execution until the timeout. This fix checks exit code first / handles detached children properly.
🔗 [github.com/MoonshotAI/kimi-cli/pull/2530](https://github.com/MoonshotAI/kimi-cli/pull/2530)

### #2575 — fix(hooks): fire PostToolUse hooks through fire_and_forget_trigger
**Author:** ayaangazali · **Created:** 2026-08-01 · Resolves **#2564**
`PostToolUse` and `PostToolUseFailure` fired their hooks with a bare `asyncio.create_task(...)` and immediately dropped the handle. Since asyncio keeps tasks in a `WeakSet`, pending hook tasks could be garbage-collected mid-execution. Routing them through `fire_and_forget_trigger` ensures the hooks run to completion.
🔗 [github.com/MoonshotAI/kimi-cli/pull/2575](https://github.com/MoonshotAI/kimi-cli/pull/2575)

---

## 5. Feature Request Trends

Across all open issues in this digest, the dominant feature direction is **persistent state and context**:

- **Memory System (#1283)** remains the clear flagship request: automatic AI-managed notes plus manual user-defined instructions surviving across sessions. Its 11 comments and months-long lifespan indicate that users expect agentic CLIs to remember project patterns and preferences by default.
- **Provider/config documentation (#2576)** is a secondary but growing theme: users want reproducible, copy-paste-ready setup guides for OpenAI-compatible gateways (base URL, model declaration, env-var mapping).
- The "stuck on Processing" report (#2574), though filed as an enhancement, reflects an implicit requirement that **long-running MCP-backed sessions must stay responsive** — a stability expectation rather than a new feature per se.

## 6. Developer Pain Points

Recurring frustrations visible in today's data:

- **Provider interop fragility** — double-encoded JSON from third-party providers breaking tool-call validation (#2572), plus the need for documented gateway setups (#2576).
- **Incorrect tool feedback** — `StrReplaceFile`'s reported replacement counts can be wrong in chained-edit scenarios, undermining developer trust in file-edit workflows (#2526, #2554).
- **Session/connection reliability** — infinite "Connecting to session..." spinner in the Web UI (#2573), CLI hanging in "Processing" after MCP setup (#2574), and shell commands blocking until timeout when daemonized children hold pipes (#2530).
- **Environment-specific crashes and dropped work** — startup banner crash on GBK/legacy codecs (#2577), and `PostToolUse` hooks being silently garbage-collected due to dropped asyncio task handles (#2575).
- **Long-tail issue responsiveness** — several bug reports (#2526, #2573, #2574, #2576) have 0–1 comments, indicating either low visibility or low maintainer engagement within the 24h window.

---

*Digest generated from [github.com/MoonshotAI/kimi-cli](https://github.com/MoonshotAI/kimi-cli) activity on 2026-08-02.*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-08-02

## Today's Highlights

v1.18.11 shipped with targeted fixes for MCP SSE reconnect loops and interleaved reasoning-field model configs. Maintainers also executed a large triage pass — nearly all top-scoring issues were closed on this date, including long-running threads on TUI theming (#10661), `tool_call` rendering (#9674), and privacy documentation (#459). On the feature front, a unified marketplace (#40108) and native Bedrock Mantle support (#40119) are now open for community review.

## Releases

**v1.18.11** — Core bugfixes: stopped MCP SSE connections from getting stuck in reconnect loops after server error responses; fixed provider model configs that use interleaved reasoning fields like `reasoning_text` or custom field names. Desktop: external links now open in the system browser.

## Hot Issues

1. [#40118](https://github.com/anomalyco/opencode/issues/40118) [OPEN] **Bug in new update?** — After updating (7.31.36 → 8.1.26), chat fails to get responses from Nemotron and DeepSeek models. A regression affecting multiple providers post-update; still open and worth watching.
2. [#40107](https://github.com/anomalyco/opencode/issues/40107) **Cannot switch to Go plan on OpenRouter** — Spanish-language report: plan switching worked yesterday but fails today. Closed.
3. [#10661](https://github.com/anomalyco/opencode/issues/10661) **TUI: system theme not found on macOS** — 21 comments. `/theme` search for "system" returns no results on macOS; long-running UX bug now closed.
4. [#9674](https://github.com/anomalyco/opencode/issues/9674) **`<tool_call>` tag fails to render after long sessions** — 19 comments, 8 👍. Breaks auto-continuation mid-conversation, especially when using the "Oh My Open Code" plugin; high probability of occurrence in long threads.
5. [#459](https://github.com/anomalyco/opencode/issues/459) **Privacy and data collection clarification** — 16 comments, 58 👍 (most-reacted issue in the batch). Users want explicit privacy documentation despite the local-first design; closed after a long lifecycle.
6. [#24342](https://github.com/anomalyco/opencode/issues/24342) **Main & sub-agents randomly freeze indefinitely** — 13 comments. Frontend permanently shows "thinking" with no errors while LLM inference has already terminated; severe reliability concern, closed.
7. [#20859](https://github.com/anomalyco/opencode/issues/20859) **Subagent models ignored with GitHub Copilot provider** — 7 comments. All Premium Requests billed to the orchestrator (Claude Opus 4.6) despite correct internal subagent model usage; direct cost impact.
8. [#29909](https://github.com/anomalyco/opencode/issues/29909) **[FEATURE] Live token counts + TPS in footer** — 7 comments, 7 👍. A concrete, footer-scoped proposal consolidating earlier token/TPS requests; closed.
9. [#22813](https://github.com/anomalyco/opencode/issues/22813) **Thinking block signature lost when model differs** — 6 comments, 10 👍. Breaks multi-turn conversations with extended thinking (`thinking or redacted_thinking blocks ... cannot be modified`).
10. [#26625](https://github.com/anomalyco/opencode/issues/26625) **`/timestamps` has no visible effect; `/exit` missing from autocomplete** — 9 comments. TUI state toggles but timestamps never render; `/exit` also absent from command autocomplete.

## Key PR Progress

1. [#40108](https://github.com/anomalyco/opencode/pull/40108) [OPEN] **feat: unified marketplace** — Introduces a broad package model with one shared runtime across Desktop, embedded Web, TUI, CLI, and API clients; closes #28696.
2. [#40119](https://github.com/anomalyco/opencode/pull/40119) [OPEN] **feat(ai): native Bedrock Mantle support** — Adds Chat and Responses entrypoints, bearer auth + SigV4 signing, regional endpoints, and native V2 catalog routing; contributed by `opencode-agent[bot]`.
3. [#40110](https://github.com/anomalyco/opencode/pull/40110) [CLOSED] **fix(app): Enter on empty input is a no-op** — Prevents accidental sends and silent task interruption/abort in the desktop/web app; fixes #40106.
4. [#40077](https://github.com/anomalyco/opencode/pull/40077) [OPEN] **feat(plugin): wrap native session HTTP** — Replaces the `session.request` mutation hook with `session.http` around a full Request→Response exchange; preserves streaming and exposes Effect/Promise contracts.
5. [#40115](https://github.com/anomalyco/opencode/pull/40115) [CLOSED] **fix(todo): retry SQLITE_BUSY/LOCKED on parallel todowrite** — Fixes #40020 for background subagents writing todos concurrently; handles delete+insert race conditions.
6. [#39905](https://github.com/anomalyco/opencode/pull/39905) [OPEN] **feat: system prompt debug command** — Adds `opencode debug prompt` to locally inspect the assembled system prompt; relates to #24990, #39033, #33333.
7. [#35838](https://github.com/anomalyco/opencode/pull/35838) [OPEN] **fix(tool): webfetch decodes declared charset via iconv-lite** — Respects the `Content-Type` charset instead of assuming UTF-8; closes #35752.
8. [#35696](https://github.com/anomalyco/opencode/pull/35696) [CLOSED] **fix(tool): grep deny rules now enforced** — Filters matched files so per-pattern deny rules (e.g. `**/config.php`) actually apply; closes #35503.
9. [#36620](https://github.com/anomalyco/opencode/pull/36620) [OPEN] **fix(core): merge model.request.headers into SDK options** — Ensures custom headers reach SDK creation in `prepareOptions()`; closes #36619.
10. [#40073](https://github.com/anomalyco/opencode/pull/40073) [CLOSED] **refactor(ai): align multimodal naming** — Renames `LLMError` → `AIError`, moves runtime identities and provider metadata into the shared `AI.*` Schema namespace; foundational cleanup for multimodal support.

## Feature Request Trends

- **TUI observability & session management**: subagent view (#15223), persistent session sidebar (#30489), live token/TPS footer (#29909), collapsible provider groups in the model picker (#15026).
- **Git-less rollback**: revert/rollback mechanisms that don't require a Git repository (#30422, #29005).
- **Broader VCS support**: SVN review workflow parity with Git (#21493).
- **LSP expansion**: first-party typescript-go support (#12522) and reliability fixes for "No LSP server available" (#30442).
- **Provider/gateway compatibility**: GPT-5.4 via Cloudflare AI Gateway must route to `/v1/responses` (#29545); native Bedrock Mantle (PR #40119); RFC 8628 device-flow OAuth for custom gateways (PR #34785).
- **Plugin ecosystem**: unified marketplace (PR #40108) and better skill discoverability for plugins like superpowers (#21282).

## Developer Pain Points

- **Freezes and hangs**: agents frozen with no error output (#24342); desktop renderer hangs indefinitely on sessions with large message counts (#28844); sessions unresponsive when timestamps are ~7h ahead of wall-clock time (#26159).
- **Resource usage**: ~100% CPU and ~2.5 GB memory on macOS ARM64 after startup (#30126).
- **TUI/input quirks**: blank screen in non-pure mode with external plugins (#26217); missing system theme on macOS (#10661); Kitty keyboard protocol mis-handling shifted printable keys in WezTerm (#29196).
- **Context loss after compaction**: sessions compacted mid-work, model claims "I don't have any prior conversation context" (#30346).
- **Plugins not loading**: superpowers plugin downloaded but `/skills` shows nothing (#21282).
- **Billing/model routing surprises**: Copilot subagent models ignored → premium requests billed to the orchestrator (#20859); failed OpenRouter plan switch (#40107).
- **Headless/Windows issues**: "Session not found" in headless mode on Windows (#28407); desktop installer failing on Windows ARM64 (#33732); GPU sandbox crash on startup with `STATUS_BREAKPOINT` (#28041).

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-08-02

## Today’s Highlights

No new releases landed in the last 24 hours. The most significant movement is around long-session reliability: auto-compaction failures and stuck model-catalog refreshes remain hot topics, while PRs are landing to add retry behavior to Google adapters, bound catalog refresh timeouts, and tolerate missing `finish_reason` from OpenAI-compatible gateways. Provider compatibility and TUI/terminal correctness continue to dominate both issues and PRs.

## Hot Issues

- **[#6879 — Auto-compaction never triggers after context grows past 100% until provider overflow](https://github.com/earendil-works/pi/issues/6879)**  
  Most-discussed issue in this window with 9 comments and 7 👍. A 2-hour agentic turn on `gpt-5.6-sol` exceeded the context window and only compacted after the API rejected a 373k-token request. Expectation: check compaction after every agentic turn, not only on provider error.

- **[#7161 — `anthropic-messages` never sends `x-client-request-id`](https://github.com/earendil-works/pi/issues/7161)**  
  Gateways that use this header for session affinity can’t keep Anthropic conversations grouped, causing round-robin proxies to bounce between accounts. In-progress issue with 8 comments; a contribution proposal already exists.

- **[#7020 — Sometimes Pi doesn’t continue after compaction](https://github.com/earendil-works/pi/issues/7020)**  
  Long-running “coordinator” sessions regularly stall after compaction. Open bug with 7 comments and in-progress label, indicating compaction restoration remains fragile.

- **[#7010 — Optional object tool schemas not normalized for OpenAI-compatible providers](https://github.com/earendil-works/pi/issues/7010)**  
  The OpenAI adapter emits object tool schemas without proper `required` normalization, which can cause tool-call failures on compatible endpoints. 6 comments; important for tool-heavy agent workflows.

- **[#7315 — Fireworks requests sometimes fail instantly with “Request timed out.”](https://github.com/earendil-works/pi/issues/7315)**  
  Some Fireworks turns fail before returning any tokens or usage, then retry three times with 2s/4s/8s gaps. 4 comments; users need better classification of pre-stream transport failures.

- **[#7048 — Compaction summary can be persisted truncated mid-word](https://github.com/earendil-works/pi/issues/7048)**  
  `generateSummary` doesn’t check `stopReason === "length"`, so a summary can be saved while cut off mid-token. 4 comments; silent data-integrity issue for long sessions.

- **[#6600 — `pi update --extensions` blocks npm scripts with new npm 11.16.0](https://github.com/earendil-works/pi/issues/6600)**  
  npm now blocks install scripts by default, breaking extension update flows without an obvious workaround. 4 comments; affects extension-heavy installations.

- **[#7402 — Pressing Space after pasting Bengali text duplicates the line](https://github.com/earendil-works/pi/issues/7402)**  
  Width overcounting desyncs the differential renderer with non-Latin text. Editor state stays correct, but the visual renderer duplicates the pasted line. 6 comments; highlights terminal width-handling gaps.

- **[#7385 — Keystroke input lag scales with conversation length](https://github.com/earendil-works/pi/issues/7385)**  
  350–520ms input latency on sessions with ~160 tool calls because `tool-result-renderer` bypasses the `Text` component cache. 3 comments; a real performance issue for large sessions.

- **[#5931 — Copy-paste from TUI introduces extra spaces and line breaks](https://github.com/earendil-works/pi/issues/5931)**  
  Wrapped paragraphs copied from the TUI don’t preserve original text. Closed as no-action, but 7 comments show continued user frustration with terminal copy fidelity.

## Key PR Progress

- **[#7471 — fix(ai): retry transient provider errors in Google adapters](https://github.com/earendil-works/pi/pull/7471)**  
  Adds retry handling for pre-token 429/5xx errors in Vertex and Gemini adapters, bringing Google behavior in line with Anthropic and OpenAI paths. Important for `AgentHarness` reliability.

- **[#7451 — fix(coding-agent): bound model catalog refreshes](https://github.com/earendil-works/pi/pull/7451)**  
  Open PR that addresses timeout and hang issues across five catalog-related issues, including stuck `/model` switching and post-login freezes.

- **[#7441 — fix(ai): tolerate missing finish_reason on non-empty openai-completions streams](https://github.com/earendil-works/pi/pull/7441)**  
  Prevents session crashes when an SSE stream closes without a terminal `finish_reason` chunk, a common spec violation among OpenAI-compatible gateways.

- **[#7456 — fix(auth): support short-lived OAuth tokens](https://github.com/earendil-works/pi/pull/7456)**  
  Only refreshes stored OAuth credentials when less than one minute remains, fixing providers that issue five-minute tokens and previously triggered refresh on every request.

- **[#7466 — feat(coding-agent): opt-in pre-dispatch durability barrier](https://github.com/earendil-works/pi/pull/7466)**  
  Persists a session marker before the provider request starts, so embedders can distinguish “provider never invoked” from “invoked and billed but output lost” after crashes.

- **[#7468 — feat(agent,coding-agent): accept Claude Code skill frontmatter](https://github.com/earendil-works/pi/pull/7468)**  
  Makes Pi’s skill loaders compatible with Claude Code `SKILL.md` frontmatter, improving cross-tool skill portability.

- **[#7453 — feat(ai): add Cline API and ClinePass providers](https://github.com/earendil-works/pi/pull/7453)**  
  Adds both usage-billing and flat-rate Cline gateways as new OpenAI-compatible chat-completions providers.

- **[#7440 — feat(tui): add switchable terminal renderers](https://github.com/earendil-works/pi/pull/7440)**  
  Open PR allowing TUI renderers to be swapped at runtime while preserving terminal, focus, input, and renderer state.

- **[#7462 — feat(coding-agent): add `PI_JITI_CACHE` env var](https://github.com/earendil-works/pi/pull/7462)**  
  Gives packagers like Nix a way to point the jiti transpile cache to a persistent writable directory.

- **[#7450 — Use type index for SQLite compaction discovery](https://github.com/earendil-works/pi/pull/7450)**  
  Avoids full cached-path scans during SQLite compaction discovery by using the existing session-entry type index. Direct performance win for large sessions.

## Feature Request Trends

- **Long-session durability** remains the top direction: proactive auto-compaction before provider overflow, continuation after compaction, truncated-summary protection, and pre-dispatch persistence.
- **Broader provider compatibility** is a recurring theme: `x-client-request-id` on Anthropic, normalized optional object schemas, direct `image_url` passthrough, Google adapter retries, and new providers like Cline/ClinePass and MiniMax video.
- **Terminal/TUI quality** is heavily requested: scroll lock / reading mode, multi-line paste fallback for terminals without bracketed paste, copy-paste fidelity, non-Latin text rendering, terminal title restore, and iTerm2 image size parameters.
- **Session and performance hygiene** matters more as sessions grow: reducing subagent transcript bloat, fixing keystroke lag with many tool calls, and improving SQLite compaction lookup performance.
- **Packaging and operational control** requests are increasing: `PI_JITI_CACHE` support, npm install-script compatibility, bounded catalog refreshes, and short-lived OAuth token handling.

## Developer Pain Points

- **Compaction is still fragile.** Auto-compaction doesn’t trigger early enough, post-compaction continuation fails in long-running sessions, and summaries can be persisted truncated.
- **Unbounded async operations cause unrecoverable stalls.** Stuck model-catalog promises, `/model` hanging, post-login freezes, and stale availability refreshes are recurring failure modes.
- **Provider quirks require constant adaptation.** Missing headers, missing `finish_reason`, unnormalized tool schemas, instant timeouts, and missing retry logic all create integration friction.
- **TUI rendering causes real user-facing bugs.** Copy-paste corruption, non-Latin renderer desync, input lag on large sessions, and lack of bracketed-paste fallback are common complaints.
- **Session files can bloat out of control.** Subagent transcripts persisted in parent sessions grow JSONL files rapidly and can hang active coding sessions.
- **Install and packaging friction is increasing.** npm 11’s script-blocking behavior and read-only filesystem constraints for jiti caching both need explicit workarounds.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-08-02

## Today's Highlights

Qwen Code shipped stable **v0.21.3**, headlined by a substantially upgraded `/review` command with test-plan validation and measured failure attribution. The community's attention remains fixed on prompt-cache economics — new design discussions and telemetry proposals target cache-stable prefixes, hit-rate visibility, and compression reuse — while maintainers landed fixes for ESC interrupt handling, DeepSeek ToolSearch defaults, and daemon resource governance.

## Releases

- **v0.21.3** — Enhanced `/review` with test plan validation, measured failure attribution, and new verification lenses ([#8215](https://github.com/QwenLM/qwen-code/pull/8215), [#8218](https://github.com/QwenLM/qwen-code/pull/8218)).
- **v0.21.2-nightly.20260801** — Lifecycle hook payloads now include session source ([#8155](https://github.com/QwenLM/qwen-code/pull/8155)); review cache identity checks.
- **v0.21.3-nightly.20260802** — Complete TUI keyboard shortcut reference ([#8327](https://github.com/QwenLM/qwen-code/pull/8327)); fixed core history pagination.

## Hot Issues

1. **[#176 — Tool calling fails with local qwen3-30b-a3b](https://github.com/QwenLM/qwen-code/issues/176)** *(CLOSED, 23 comments, 7 👍)* — Most-discussed issue this cycle. The model emits valid-looking tool calls that never execute, with no error surfaced. Highlights the debugging gap for local/third-party models.

2. **[#7585 — Direct external context provider profile](https://github.com/QwenLM/qwen-code/issues/7585)** *(OPEN, 11 comments)* — Monorepo integration proposal with mutually exclusive managed profiles for retrieving repository-shared context from an admin-bound external memory. Signals demand for enterprise context management.

3. **[#8051 — Bound multi-workspace daemon resource usage](https://github.com/QwenLM/qwen-code/issues/8051)** *(OPEN, 9 comments)* — Tracking issue for `qwen serve` resource governance; count-only limits don't bound bytes held by request bodies or WebSocket assembly buffers.

4. **[#8277 — Better Prompt Caching](https://github.com/QwenLM/qwen-code/issues/8277)** *(OPEN, 1 👍)* — Roadmap issue consolidating cache work across provider adapters, tool discovery, local KV-cache reuse, forks, and telemetry.

5. **[#4777 — Deferred-tools listing busts prompt cache](https://github.com/QwenLM/qwen-code/issues/4777)** *(OPEN)* — MCP progressive discovery and ToolSearch mutate the cached system prompt, invalidating the prefix on every reveal — a silent token-cost and latency tax on long sessions.

6. **[#8330 — `@` completion tab switching broken in Warp](https://github.com/QwenLM/qwen-code/issues/8330)** *(OPEN, 3 comments)* — Ctrl+Tab is intercepted by the terminal, making category tabs (All/Files/Sessions/MCP) in the completion picker unreachable in Warp.

7. **[#8131 — Statusline unselectable in Virtualized History mode](https://github.com/QwenLM/qwen-code/issues/8131)** *(OPEN, 3 comments)* — Text-selection regression; a companion fix ([#8329](https://github.com/QwenLM/qwen-code/pull/8329)) is already in flight.

8. **[#8333 — Main CI failure: ACP cron E2E](https://github.com/QwenLM/qwen-code/issues/8333)** *(OPEN, autofix/in-progress)* — Auto-filed failure in `cli/acp-cron.test.ts` around sessionUpdate streaming after prompt return.

9. **[#7966 — How to get files created in a session?](https://github.com/QwenLM/qwen-code/issues/7966)** *(CLOSED, 6 comments)* — Users want to distinguish directly-written files from code-generated ones, and attribute workspace files back to originating sessions.

10. **[#8286 — Trusted private ASR base URLs for voice](https://github.com/QwenLM/qwen-code/issues/8286)** *(OPEN, 3 comments)* — Opt-in setting to allow HTTP/private voice model endpoints inside isolated networks for managed deployments.

## Key PR Progress

1. **[#8349 — `feat(review): drive` — readiness polled, completion proven, cleanup guaranteed](https://github.com/QwenLM/qwen-code/pull/8349)** — Adds `qwen review drive`: polls real readiness and captures verified outcomes instead of sleep-based heuristics.

2. **[#8346 — Verifier learns the falsify-not-verify asymmetry](https://github.com/QwenLM/qwen-code/pull/8346)** — Teaches the review verifier that "I could not verify it" and "evidence is somewhere I didn't look" are not grounds to reject findings.

3. **[#8331 — Enable ToolSearch by default for DeepSeek](https://github.com/QwenLM/qwen-code/pull/8331)** — Flips an important default while preserving the explicit opt-out and 10% deferred-tool preload threshold; updates guidance that previously recommended disabling ToolSearch.

4. **[#8353 — ESC cancels ongoing work before popping queued messages](https://github.com/QwenLM/qwen-code/pull/8353)** — Fixes a real UX trap: ESC during a response now cancels the request instead of silently discarding queued input.

5. **[#8274 — Fork from any conversation](https://github.com/QwenLM/qwen-code/pull/8274)** — Branching now reliably targets an earlier assistant message instead of the latest active state, handling tool calls, cancellations, rewinds, and pagination.

6. **[#8245 — Daemon memory budget resolution](https://github.com/QwenLM/qwen-code/pull/8245)** — Adds cgroup reads, heap-size limits, and RSS sampling so `serve` can report a meaningful memory budget instead of an unbounded number.

7. **[#8341 — Configurable sub-session concurrency caps](https://github.com/QwenLM/qwen-code/pull/8341)** — New `serve.maxConcurrentSubSessionsPerCaller`/`Total` settings; defaults raised from 5→16 per caller and 20→24 total.

8. **[#8180 — Telemetry: track tool execution outcomes](https://github.com/QwenLM/qwen-code/pull/8180)** — Introduces `executionStatus` to record whether `invocation.execute()` was entered and succeeded, distinct from terminal call status.

9. **[#8324 — Goal v3 in non-interactive mode](https://github.com/QwenLM/qwen-code/pull/8324)** — Unifies `/goal` status/create/replace/edit/pause/resume/clear onto the canonical Goal v3 runtime, with ordered `goal_state` events for `stream-json`.

10. **[#8132 — Web Shell packaged as a release-ready desktop app](https://github.com/QwenLM/qwen-code/pull/8132)** — Converts the Tauri proof-of-concept into a native shell owning startup, recovery, and workspace lifecycle around the shared Web Shell.

Also notable: **[#8342](https://github.com/QwenLM/qwen-code/pull/8342)** allows pasting sensitive extension settings; **[#8302](https://github.com/QwenLM/qwen-code/pull/8302)** makes permission-control SDK E2E deterministic via scripted fake completions; **[#6579](https://github.com/QwenLM/qwen-code/pull/6579)** keeps model switches session-scoped unless `--default` is used; **[#8310](https://github.com/QwenLM/qwen-code/pull/8310)** adds Web Shell management for GitHub/GitLab channels.

## Feature Request Trends

- **Prompt-cache economics dominate**: cache-stable prefixes (#4777), hit-rate telemetry ([#8284](https://github.com/QwenLM/qwen-code/issues/8284)), compression reusing cache via forks ([#8279](https://github.com/QwenLM/qwen-code/issues/8279)), and a consolidated roadmap (#8277).
- **Daemon resource governance**: users want memory budgets, concurrency caps, and bounded resource usage for `qwen serve` (#8051, #8245, #8341).
- **Voice input maturity**: from basic `/voice` requests ([#3110](https://github.com/QwenLM/qwen-code/issues/3110)) to trusted private ASR endpoints (#8286).
- **External & shared context**: an admin-bound external context provider profile for monorepos (#7585).
- **Session/file traceability**: attributing created files back to the session that generated them (#7966).
- **Extension ecosystem growth**: installing extensions directly from the qwen-code repo ([#2635](https://github.com/QwenLM/qwen-code/issues/2635)) and clearer skill activation semantics ([#2338](https://github.com/QwenLM/qwen-code/issues/2338)).

## Developer Pain Points

- **Local-model tool calling is fragile** — #176 shows valid-looking tool calls silently failing with zero diagnostics; a recurring theme for non-hosted models.
- **TUI polish issues keep surfacing** — viewport flicker ([#938](https://github.com/QwenLM/qwen-code/issues/938)), scroll spam ([#5971](https://github.com/QwenLM/qwen-code/issues/5971)), selection regressions (#8131), and terminal keybinding collisions (#8330) indicate the interactive shell needs broader terminal testing.
- **AskUserQuestion reliability** — users hit empty-response stream errors ([#3804](https://github.com/QwenLM/qwen-code/issues/3804)) and array-wrapping bugs ([#2329](https://github.com/QwenLM/qwen-code/issues/2329)), breaking interactive skill flows.
- **Prompt-cache invalidation is a silent cost** — deferred MCP tool listing busts the cache (#4777), inflating token spend and latency on long-running sessions.
- **Perceived model regression** — [#5029](https://github.com/QwenLM/qwen-code/issues/5029) ("降智") and [#2273](https://github.com/QwenLM/qwen-code/issues/2273) report sudden behavioral degradation and unbounded repetitive output; hard to diagnose without better session introspection.
- **Setup friction persists** — Windows install failure (`Missing tiktoken_bg.wasm`, [#1328](https://github.com/QwenLM/qwen-code/issues/1328)) and OAuth login failures ([#2081](https://github.com/QwenLM/qwen-code/issues/2081)) continue to appear, though both are closed and presumably fixed.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek-TUI / CodeWhale Community Digest — 2026-08-02

## 1. Today's Highlights

No new releases landed in the last 24 hours, but development activity remains high: a major issue burn-down PR bundled eight user-facing fixes, and multiple community-contributed PRs were integrated while preserving original authorship. The most urgent emerging theme is credential scoping — duplicate issues report that API keys are being persisted repo-locally instead of in a durable global store, with a path-safety fix already proposed.

## 2. Releases

No releases in the last 24 hours.

## 3. Hot Issues

- [Hmbown/CodeWhale#5007 — Youtuber doesn't use the CodeWhale as TUI for DeepSeek](https://github.com/Hmbown/CodeWhale/issues/5007)  
  Community perception issue: a popular YouTuber reviewed DeepSeek-v4-flash using Codex instead of CodeWhale as the TUI. Closed with 6 comments, but it highlights ongoing branding/adoption friction.

- [Hmbown/CodeWhale#4085 — Cannot read/write files under ~/Library/CloudStorage/Dropbox/ (macOS File Provider)](https://github.com/Hmbown/CodeWhale/issues/4085)  
  Ad-hoc signed CodeWhale fails to read/write/grep/delete under Dropbox's macOS File Provider location. Important for developers with cloud-synced working directories.

- [Hmbown/CodeWhale#4785 — Dead-code sweep: 464 #[allow(dead_code)] attributes are hiding drift](https://github.com/Hmbown/CodeWhale/issues/4785)  
  The codebase carries 464 dead-code allowances across 143 files, preventing the compiler from reporting structural drift. Demonstrates the project's growing focus on technical-debt cleanup.

- [Hmbown/CodeWhale#4683 — Wrong deepseek completions url](https://github.com/Hmbown/CodeWhale/issues/4683)  
  Flaky `https://api.deepseek.com/v1/chat/completions` request failures after long-running sessions. Core reliability concern for DeepSeek-backed workflows.

- [Hmbown/CodeWhale#4684 — danger-full-access does not disable tools-layer workspace boundary check](https://github.com/Hmbown/CodeWhale/issues/4684)  
  `sandbox_mode = "danger-full-access"` disables the OS-level sandbox but still allows the tools layer to block cross-boundary access, breaking global skill use. Raises questions about coherent sandbox semantics.

- [Hmbown/CodeWhale#4790 — Add Hindi localization with a Devanagari terminal-shaping spike](https://github.com/Hmbown/CodeWhale/issues/4790)  
  Hindi is proposed as the first Indian language in the locale matrix, including a terminal-shaping implementation spike. Part of the broader v0.9.2 localization wave.

- [Hmbown/CodeWhale#4716 — TUI exits immediately on launch in a fresh terminal](https://github.com/Hmbown/CodeWhale/issues/4716)  
  Stop-ship bug: `codew` / `codewhale` returns to `[Process completed]` immediately on macOS Terminal.app with v0.9.1. High severity despite only 2 comments.

- [Hmbown/CodeWhale#4564 — --model and --toolsets flags consumed as single arg on Windows](https://github.com/Hmbown/CodeWhale/issues/4564)  
  Windows npm-global installs break pre-exec flags; the issue proposes `CODEWHALE_MODEL` / `CODEWHALE_TOOLSETS` env vars as a workaround. Highlights Windows CLI parity gaps.

- [Hmbown/CodeWhale#5034 — Switching providers can retain an unrelated default model](https://github.com/Hmbown/CodeWhale/issues/5034)  
  Release-blocker for v0.9.4: switching to OpenAI can leave `gpt-5.5` as the default model, suggesting provider and model resolution are not updated coherently.

- [Hmbown/CodeWhale#5045 — API keys must be user-global, not repo-scoped](https://github.com/Hmbown/CodeWhale/issues/5045)  
  Operator dogfood report: API keys entered in one repo remain in `.codewhale/config.toml` and disappear elsewhere. Closely mirrored by [#5047](https://github.com/Hmbown/CodeWhale/issues/5047), indicating a high-priority security/UX fix.

## 4. Key PR Progress

- [Hmbown/CodeWhale#5079 — feat(runtime-api): scope task listing by workspace (community integration)](https://github.com/Hmbown/CodeWhale/pull/5079)  
  Integrates #4985 onto main while preserving the original contributor as Git author. Adds an optional `workspace` filter to `GET /v1/tasks`.

- [Hmbown/CodeWhale#5078 — fix(devcontainer): support Windows development (community integration)](https://github.com/Hmbown/CodeWhale/pull/5078)  
  Uses a dedicated dev image with Rust toolchain, rustfmt, pkg-config, and DBus headers; replaces the host HOME bind mount with named volumes to avoid invalid Windows HOME expansion.

- [Hmbown/CodeWhale#5064 — feat(compaction): carry forward a deterministic continuation contract](https://github.com/Hmbown/CodeWhale/pull/5064)  
  Adds a runtime-extracted Continuation Contract to compaction summaries, preserving working context, intent, decisions, and in-flight tool calls across summarizer models.

- [Hmbown/CodeWhale#5068 — refactor(tui): centralize DeepSeek Pro effort mapping in a dated table](https://github.com/Hmbown/CodeWhale/pull/5068)  
  Creates one dated source of truth for DeepSeek Pro effort mapping and makes Chat and Responses request paths consume the same table.

- [Hmbown/CodeWhale#5069 — feat(tui): show model capability badges in Fleet setup and roster](https://github.com/Hmbown/CodeWhale/pull/5069)  
  Adds provider-aware, provenance-labelled capability badges. Models.dev catalog entries win; seeded registry facts cover routes without catalog rows.

- [Hmbown/CodeWhale#5077 — perf(prompt): progressively disclose fresh context](https://github.com/Hmbown/CodeWhale/pull/5077)  
  Keeps `AGENTS.md` / `CLAUDE.md` eager, caps the ambient skills block at 2,400 chars, and moves larger context behind `load_skill` for better prompt efficiency.

- [Hmbown/CodeWhale#5067 — fix(tui): run operate goals to the completion gate, make continuation cap a configurable backstop](https://github.com/Hmbown/CodeWhale/pull/5067)  
  Removes the hardcoded ten-continuation terminal stop for operate-mode goals. Adds `[goal] max_continuations` with a default of 100.

- [Hmbown/CodeWhale#5063 — fix: issue burn-down batch — eight user-facing fixes](https://github.com/Hmbown/CodeWhale/pull/5063)  
  Seven commits covering Anthropic wire format, sandbox behavior, workflow config, config scoping, session layer, input handling, and TUI. Each fix includes regression tests.

- [Hmbown/CodeWhale#5075 — fix(config): make credential persistence path-safe](https://github.com/Hmbown/CodeWhale/pull/5075)  
  Rejects relative `CODEWHALE_HOME` / `CODEWHALE_CONFIG_PATH` overrides before they become repo-local global state, and refuses automatic plaintext fallback. Directly addresses the #5045/#5047 credential-scoping reports.

- [Hmbown/CodeWhale#5051 — feat(runtime): turn-scoped tool restriction and env-gated sampling overrides](https://github.com/Hmbown/CodeWhale/pull/5051)  
  Adds `StartTurnRequest.allowed_tools` / `disallowed_tools`, threaded into the per-turn engine tool gate, plus env-gated sampling overrides for external benchmark drivers. Stacked on the release lane.

## 5. Feature Request Trends

- **Localization expansion**  
  After Korean, Spanish, and Brazilian Portuguese, the project is pursuing Hindi ([#4790](https://github.com/Hmbown/CodeWhale/issues/4790)), Ukrainian ([#4791](https://github.com/Hmbown/CodeWhale/issues/4791)), and French/German/Catalan ([#4788](https://github.com/Hmbown/CodeWhale/issues/4788)). Non-English developer support is clearly a strategic priority.

- **Global, durable credential storage**  
  Multiple issues ask for API keys to live in a user-global secure store rather than repo-scoped plaintext config ([#5045](https://github.com/Hmbown/CodeWhale/issues/5045), [#5047](https://github.com/Hmbown/CodeWhale/issues/5047)).

- **More granular control over autonomous behavior**  
  Requests include provider-scoped auto-routing consent ([#4411](https://github.com/Hmbown/CodeWhale/issues/4411)), hard per-turn tool budgets ([#4415](https://github.com/Hmbown/CodeWhale/issues/4415)), and configurable continuation caps ([#5067](https://github.com/Hmbown/CodeWhale/pull/5067)).

- **TUI polish and notification ergonomics**  
  Issues and PRs target ambient-life visuals ([#4807](https://github.com/Hmbown/CodeWhale/issues/4807)), notification quiet mode and per-category switches ([#5066](https://github.com/Hmbown/CodeWhale/pull/5066)), and model capability badges ([#5069](https://github.com/Hmbown/CodeWhale/pull/5069)).

- **Windows parity**  
  Windows-specific fixes keep appearing: devcontainer support ([#5078](https://github.com/Hmbown/CodeWhale/pull/5078)), CLI flag parsing ([#4564](https://github.com/Hmbown/CodeWhale/issues/4564)), and sandbox-boundary consistency ([#4684](https://github.com/Hmbown/CodeWhale/issues/4684)).

## 6. Developer Pain Points

- **Credentials unexpectedly vanish between repos**  
  API keys saved in one project are not visible in another; the keys can sit in plaintext inside a repo. Duplicate issue reports suggest this is a frequent and frustrating encounter.

- **Sandbox configuration is confusing**  
  `danger-full-access` still leaves tools-layer workspace boundaries active, so users who expect full access find global skills silently broken ([#4684](https://github.com/Hmbown/CodeWhale/issues/4684)).

- **Intermittent DeepSeek API failures**  
  Long-lived sessions hit flaky `chat/completions` URL errors, and the issue is hard to reproduce reliably ([#4683](https://github.com/Hmbown/CodeWhale/issues/4683)).

- **Windows CLI behavior diverges from macOS/Linux**  
  Flags are consumed as a single argument on Windows, and devcontainer setup requires separate handling ([#4564](https://github.com/Hmbown/CodeWhale/issues/4564), [#5078](https://github.com/Hmbown/CodeWhale/pull/5078)).

- **Test-suite reliability gaps**  
  Flaky verifier background tests, workspace-sensitive fixtures, and 12 untriaged `#[ignore]` tests are documented in [#5056](https://github.com/Hmbown/CodeWhale/issues/5056).

- **Product self-consistency and onboarding friction**  
  The runtime does not implement the documented `/rc` command, despite the website instructing users to run it ([#4936](https://github.com/Hmbown/CodeWhale/issues/4936)). Meanwhile, external reviewers still reach for other tools as their default DeepSeek TUI ([#5007](https://github.com/Hmbown/CodeWhale/issues/5007)).

- **Maintenance burden from accumulated debt**  
  Large god files, 464 dead-code allowances, and outdated branches are being actively triaged, but they remain a sink for maintainer and contributor effort ([#4785](https://github.com/Hmbown/CodeWhale/issues/4785), [#5057](https://github.com/Hmbown/CodeWhale/issues/5057)).

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/boom7sss/agents-radar).*