# AI CLI Tools Community Digest 2026-08-09

> Generated: 2026-08-09 02:08 UTC | Tools covered: 9

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
**Date**: 2026-08-09 | **Coverage**: 9 major AI CLI tools

---

## 1. Ecosystem Overview

The AI CLI tool ecosystem is entering a **reliability-and-orchestration phase** after a period of rapid capability expansion. Across all nine tools, community attention has shifted from "what can the agent do" to "can I trust it for hours of autonomous work" — evidenced by the prevalence of hang reports, misleading success signals, session-state desyncs, and runaway-context issues. The most active communities (Claude Code, Pi, Gemini CLI) are converging on the same underlying problems: context-window lifecycle management, multi-agent coordination, and transport resilience. Meanwhile, Windows compatibility has emerged as a systemic weakness across nearly every tool, and cost/plan transparency is becoming a first-class trust concern. The pace of iteration remains high — OpenAI Codex, Gemini CLI, Qwen Code, and DeepSeek TUI each landed 10 PRs in 24 hours — but the maturation signal is clear: tools are being judged on operational durability, not demos.

---

## 2. Activity Comparison

| Tool | Issues Highlighted | PRs (24h) | Release Status (24h) |
|---|---|---|---|
| **Claude Code** | 10 hot issues (1 with 70 comments, 184👍) | 1 | ✅ v2.1.226 (maintenance) |
| **OpenAI Codex** | 10 hot issues | 10 | ✅ rust-v0.148.0-alpha.5 |
| **Gemini CLI** | 10 hot issues (2 P1s) | 10 | ✅ v0.56.0-nightly |
| **GitHub Copilot CLI** | 10 hot issues (23 touched) | 0 | ⏸️ None |
| **Kimi Code CLI** | 2 issues | 0 | ⏸️ None |
| **OpenCode** | 10 hot issues (incl. 4-duplicate bug cluster) | 10 (2 closed) | ⏸️ None |
| **Pi** | 10 hot issues (1 with 76 comments) | 10 | ⏸️ None (0.84.x line) |
| **Qwen Code** | 10 hot issues (33 updated) | 10 (from 50 updated) | ✅ v0.21.8 |
| **DeepSeek TUI (Codewhale)** | 10 hot issues | 10 (6 closed) | ✅ v0.9.5 + v0.9.4 |

**Read**: Six of nine tools shipped releases or landed significant PR batches within 24 hours. Copilot CLI showed active triage but zero code movement; Kimi Code CLI is effectively dormant.

---

## 3. Shared Feature Directions

The following requirements appear independently across multiple tool communities:

| Direction | Tools | Specific Needs |
|---|---|---|
| **Context-window compaction & lifecycle management** | Pi, DeepSeek TUI, Qwen Code, Gemini CLI | Auto-compaction must trigger per agent step, not at boundaries (Pi #6879/#7821); pressure-aware compaction (DeepSeek #5301); compression-cache sharing (Qwen v0.21.8); AST-aware reads to cut token noise (Gemini #22745) |
| **Persistent memory across sessions** | Kimi, Gemini, DeepSeek TUI, Claude Code | User-controlled + automatic memory layers (Kimi #1283); deterministic redaction and termination of low-signal retry loops (Gemini #26522/#26525); cross-session memory ported into core (DeepSeek PR #7823) |
| **Session-state durability on resume** | Copilot CLI, Codex, OpenCode, Gemini | Autopilot/model selection must survive resume (Copilot #4329/#4397); remote threads visible and consistent (Codex #27284/#34076); per-instance session isolation (OpenCode #31307) |
| **Remote control & cross-session coordination** | Claude Code, Codex, Copilot CLI, Qwen Code, DeepSeek TUI | Reliable Dispatch pairing/reset (Claude #67303/#84035); no concurrent active turns from remote control (Codex #34767); fail-closed cross-session messaging gate (Qwen #8724/#8730); unified task surface for all running work (DeepSeek #5270) |
| **Subagent orchestration & agent-to-agent delegation** | Gemini, Qwen, DeepSeek, Claude Code | Agents-calling-agents via `tools:` frontmatter (Gemini PR #28738); leader/worker dispatch with structured result collection (Qwen #8718); honest subagent terminal states (Gemini #22323); CLI/TUI parity for subagent controls (DeepSeek #4022) |
| **MCP reliability & lifecycle management** | Claude Code, Copilot CLI, Qwen, OpenCode | VS Code extension honoring MCP servers (Claude #19054); enterprise MCP OAuth fixes (Copilot #4408); kill repeat Chrome consent dialogs (Qwen #8737); TUI-based MCP add/remove with persisted config (OpenCode #38993) |
| **Model/cost transparency** | Claude Code, Copilot CLI, DeepSeek TUI | Visible model-switch disclosure and usage thresholds (Claude #79337/#60093); "No model available" diagnostic clarity on Free tier (Copilot #4405); provider/model resolution as one coherent state (DeepSeek #5034) |
| **TUI/terminal UX polish** | Codex, OpenCode, Pi, Qwen | Multi-line status line (Codex #21653); clipboard reliability (OpenCode #13984, Pi #7837); terminal-copy shortcut regression (Qwen #8317); non-destructive clipboard defaults (Pi #7721) |

---

## 4. Differentiation Analysis

| Tool | Feature Focus | Target User | Technical Approach |
|---|---|---|---|
| **Claude Code** | Plan governance, remote Dispatch, safeguard compliance | Enterprise developers on Max/Team plans; orgs needing auditability | Closed-source, Anthropic-hosted models, tight Claude Desktop integration, hook/permission rule system |
| **OpenAI Codex** | Windows agent infrastructure, workload identity, gRPC host service | Windows-heavy enterprises, platform teams embedding agents | Rust core, gRPC code-mode host, workload-identity JWT exchange, Guardian approval reviews |
| **Gemini CLI** | Agent-orchestration correctness, Auto Memory, bash-native operation | Google Cloud / Gemini 3 users, autonomous-mode power users | TypeScript, nightly builds, agent-to-agent delegation, OS-level sandboxing ambitions |
| **Copilot CLI** | GitHub ecosystem integration, session resume fidelity, ACP | GitHub-centric devs, Codespaces users, enterprise GitHub accounts | npm shim distribution, ACP client model, deep VS Code/GitHub MCP coupling |
| **OpenCode** | TUI-first experience, plugin ecosystem, self-hosted control | Open-source enthusiasts, TUI purists, multi-provider users | Go core + Go relay gateway, plugin SDK v2 (just merged), SQLite-backed sessions, desktop app |
| **Pi** | Provider-transport reliability, extension ecosystem (oh-my-pi), compaction correctness | Power users juggling multiple providers, extension authors | Bun/Node/Deno multi-runtime, extension system, provider-agnostic architecture |
| **Qwen Code** | Multi-agent coordination, Web Shell unification, review pipeline | Alibaba Cloud / DashScope users, Chinese enterprise devs, VS Code users | Web Shell as convergent surface, native DashScope API, ACP protocol support |
| **DeepSeek TUI** | Agent-control console, Rust monolith refactor, release automation | Rust developers, multi-provider CLI users, Codewhale product adopters | Rust workspace (20 crates), response-dialect typing, runtime-API goal endpoints |
| **Kimi Code CLI** | Memory system, generation safeguards | Moonshot AI / Kimi users in Chinese dev ecosystem | Minimal visible activity; context-persistence + token-cap concerns dominate |

**Key contrast**: Claude Code and Copilot CLI compete on **ecosystem lock-in and enterprise governance**; Pi and OpenCode compete on **openness and extensibility**; Gemini CLI and Qwen Code are racing on **multi-agent orchestration**; Codex is differentiated by **Windows-first infrastructure**.

---

## 5. Community Momentum & Maturity

**Most engaged communities (by issue depth):**
- **Pi** leads in sustained discussion depth (76 comments on openai-codex transport reliability) and has a mature extension ecosystem (oh-my-pi capabilities being ported into core).
- **Claude Code** has the broadest user base and highest-stakes complaints (plan lockouts, $1,050 overcharges) — 23👍 on the Fable 5 issue and 184👍 on message-queueing show strong product-direction pull.
- **Gemini CLI** maintains the most active P1-bug cadence, with maintainers visibly prioritizing subagent-orchestration reliability.

**Rapidly iterating (10+ PRs/day):**
- **OpenAI Codex, Gemini CLI, OpenCode, Pi, Qwen Code, DeepSeek TUI** all shipped 10 PRs in 24h. DeepSeek TUI is the most release-dense (2 releases + 6 closed PRs) despite being the youngest project.
- **Qwen Code** updated 50 PRs and 33 issues in 24h — the highest raw volume in this cohort.

**Quiet / consolidating:**
- **Copilot CLI** is triaging (23 issues touched) but not shipping code — a possible sign of internal prioritization or a release train gap.
- **Kimi Code CLI** is effectively dormant (2 issues, no PRs, no releases), which may indicate a strategic pause or resource reallocation at Moonshot AI.

**Maturity signals by tool age/stage:**
- **Claude Code** — maintenance releases; community focused on plan-tier value, not raw capability. Most enterprise-mature.
- **Copilot CLI** — stability regressions (session resume, silent startup crash) suggest a tool in use at scale but under active hardening.
- **Pi & OpenCode** — feature-rich but wrestling with database bloat, clipboard bugs (6 months open), and transport edge cases; "power-user hobbyist" maturity with production aspirations.
- **DeepSeek TUI** — unusually disciplined release engineering for a young project (crate-order validation, asset-URL verification, telemetry flush semantics); positioning itself as a durable operator console.

---

## 6. Trend Signals

**1. Agent reliability is the new capability frontier.** The most emotionally charged issues across all tools are not missing features — they are *misleading success* (Gemini #22323: MAX_TURNS reported as GOAL), *silent degradation* (Claude Fable 5 → Opus downgrade), and *indefinite hangs* (Pi "Working..." with no error). Developer trust in autonomous mode is the bottleneck.

**2. Context-window lifecycle management has become a core infrastructure problem.** Pi's compaction bugs (#6879/#7821), DeepSeek's pressure-aware compaction (#5301), Qwen's compression-cache sharing, and Gemini's AST-aware tooling all point to one conclusion: **long-running agent turns require proactive context budgeting, not reactive overflow handling.** The era of "context-window-as-sink" is over.

**3. Session state is a durability contract, not a convenience.** Losing autopilot mode on resume (Copilot #4329), remote threads vanishing (Codex #27284), and cross-instance SQLite bleed (OpenCode #31307) are all treated as critical bugs. Users now expect **crash-safe, resumable, inspectable session state** as table stakes.

**4. Multi-agent coordination is the next architectural wave.** Gemini's agents-calling-agents PR, Qwen's cross-session messaging gate, Claude Code's message-queueing request (184👍), and DeepSeek's unified tasks surface — all independently converge on **orchestrating multiple agents with controlled communication**, not just one agent using tools.

**5. Windows remains an unsolved reliability gap.** Codex Computer Use failures (5+ open issues), Claude Code GPU-process crashes destroying sessions, Copilot extension load failures — Windows users of agentic CLIs are experiencing a systematically worse product. This is a market opportunity for whichever vendor treats Windows as a first-class agent runtime.

**6. Cost and plan transparency is a trust accelerant/breaker.** The Claude Code $1,050 overcharge (#60093) and Fable 5 Max lockout (#79337), plus Copilot Free's "No model available," show that **silent model switching and invisible usage limits erode trust faster than any feature gap**. Expect "model-switch disclosure" and "usage-threshold visibility" to become compliance features.

**7. Memory is becoming a differentiating product surface.** Kimi's memory-system request, Gemini's Auto Memory hardening, and oh-my-pi's cross-session memory port into Pi core all signal that **durable, user-controllable context across sessions** is the next competitive battleground after context-window size.

**8. Safety guardrails need precision, not just presence.** Claude Code's cyber-safeguard false positives on legitimate scientific workloads (#83436) and revocations despite CVP approval (#84352), plus Gemini's redaction-ordering gap (#26525), show that **over-broad safety scanning is now a user-facing reliability bug** — particularly for regulated industries and scientific computing.

---

*Report compiled from 2026-08-09 community digests. Issue/PR numbers reference each tool's public GitHub tracker.*

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights — 2026-08-09

## 1. Top Skills Ranking

Most-discussed PRs by comment volume/attention in the `anthropics/skills` repo. All are currently open.

- **[#1298 — fix(skill-creator): run_eval.py always reports 0% recall](https://github.com/anthropics/skills/pull/1298)**  
  Fixes the broken evaluation loop in `skill-creator`: `run_eval.py` reports `recall=0%` for every skill description, making the optimization loop “optimize against noise.” The PR installs the eval artifact as a real skill, and fixes Windows stream reading, trigger detection, and parallel workers.  
  **Status:** Open · **Discussion:** References issue #556 with 10+ independent reproductions.

- **[#514 — Add document-typography skill](https://github.com/anthropics/skills/pull/514)**  
  Adds typographic quality control for AI-generated documents: orphan word wrap, widow paragraphs, and numbering misalignment.  
  **Status:** Open · **Discussion:** Highlights a universal problem in Claude-generated documents across formats.

- **[#538 — fix(pdf): correct case-sensitive file references in SKILL.md](https://github.com/anthropics/skills/pull/538)**  
  Fixes 8 case mismatches in `skills/pdf/SKILL.md`, e.g. `REFERENCE.md` → `reference.md`, `FORMS.md` → `forms.md`. Prevents breakage on case-sensitive filesystems.  
  **Status:** Open · **Discussion:** Small, focused reliability fix for the PDF skill.

- **[#486 — Add ODT skill](https://github.com/anthropics/skills/pull/486)**  
  Adds OpenDocument text creation, template filling, and ODT-to-HTML parsing for `.odt`/`.ods` files, including LibreOffice and ISO-standard document triggers.  
  **Status:** Open · **Discussion:** Broad demand for open-source document formats and interoperability.

- **[#210 — Improve frontend-design skill clarity and actionability](https://github.com/anthropics/skills/pull/210)**  
  Rewrites the `frontend-design` skill so every instruction is actionable within a single Claude Code conversation, with clearer structure and internal coherence.  
  **Status:** Open · **Discussion:** Community attention on making design guidance concrete rather than conceptual.

- **[#83 — Add skill-quality-analyzer and skill-security-analyzer to marketplace](https://github.com/anthropics/skills/pull/83)**  
  Adds two meta-skills: one for evaluating skill quality across structure, documentation, examples, and resources; one for security analysis.  
  **Status:** Open · **Discussion:** Directly addresses emerging community concerns about skill quality and trust boundaries.

- **[#541 — fix(docx): prevent tracked change w:id collision with existing bookmarks](https://github.com/anthropics/skills/pull/541)**  
  Fixes document corruption when the DOCX skill adds tracked changes to documents that already contain bookmarks. Root cause: OOXML uses a shared `w:id` namespace.  
  **Status:** Open · **Discussion:** Important correctness fix for the widely used `docx` skill.

- **[#539 — fix(skill-creator): warn on unquoted description with YAML special characters](https://github.com/anthropics/skills/pull/539)**  
  Adds pre-parse validation in `quick_validate.py` to detect unquoted `description` fields containing `:`. Prevents silent YAML truncation in skill frontmatter.  
  **Status:** Open · **Discussion:** Addresses a frequent source of broken or mis-parsed skill definitions.

---

## 2. Community Demand Trends

The most active Issues reveal the community’s strongest needs:

- **Security and trust boundaries** — [Issue #492](https://github.com/anthropics/skills/issues/492) (43 comments) warns that community skills under the `anthropic/` namespace create a trust-boundary vulnerability. This is the single largest issue in the repository.
- **Org-wide skill sharing** — [Issue #228](https://github.com/anthropics/skills/issues/228) (16 comments) requests a shared skill library or direct sharing links instead of manual `.skill` file distribution.
- **Reliable skill evaluation tooling** — [Issue #556](https://github.com/anthropics/skills/issues/556) (12 comments) and [Issue #1169](https://github.com/anthropics/skills/issues/1169) report persistent `recall=0%` failures in `skill-creator` evaluation; the community wants trustworthy eval infrastructure and Windows support.
- **Context-window efficiency** — [Issue #1487](https://github.com/anthropics/skills/issues/1487) reports the `claude-api` skill injecting ~156k tokens in a single tool call; [Issue #1175](https://github.com/anthropics/skills/issues/1175) raises security and context concerns for SharePoint workflows.
- **Agent memory and governance** — [Issue #1329](https://github.com/anthropics/skills/issues/1329) proposes `compact-memory` for symbolic agent state; [Issue #412](https://github.com/anthropics/skills/issues/412) proposes `agent-governance` safety patterns.
- **Platform integration** — [Issue #16](https://github.com/anthropics/skills/issues/16) asks to expose Skills as MCPs; [Issue #29](https://github.com/anthropics/skills/issues/29) asks for Bedrock compatibility.

**Bottom line:** the community is less focused on brand-new domain skills and more focused on making the skill platform itself secure, shareable, efficient, and reliably evaluated.

---

## 3. High-Potential Pending Skills

These open PRs add net-new skills and remain active candidates for landing soon:

- **[#514 — document-typography](https://github.com/anthropics/skills/pull/514)** — typographic quality control for generated documents; addresses a problem that affects nearly every long-form Claude output.
- **[#486 — ODT skill](https://github.com/anthropics/skills/pull/486)** — OpenDocument creation, template filling, and conversion; fills an interoperability gap.
- **[#723 — testing-patterns skill](https://github.com/anthropics/skills/pull/723)** — comprehensive testing guidance across unit tests, React Testing Library, and testing philosophy.
- **[#525 — pyxel skill](https://github.com/anthropics/skills/pull/525)** — retro/pixel-art game development via `pyxel-mcp`.
- **[#1367 — self-audit skill](https://github.com/anthropics/skills/pull/1367)** — mechanical file verification plus a four-dimension reasoning audit before delivery.
- **[#1302 — color-expert skill](https://github.com/anthropics/skills/pull/1302)** — color naming systems, color spaces, and “what to use when” guidance.
- **[#1479 — plan-file-hygiene skill](https://github.com/anthropics/skills/pull/1479)** — lifecycle management for accumulated planning artifacts; addresses issue #1417.

These PRs show the ecosystem expanding toward document quality, testing, creative tooling, and meta-auditing.

---

## 4. Skills Ecosystem Insight

The community’s most concentrated demand at the Skills level is for **trustworthy, efficient, and shareable skill infrastructure** — evaluation reliability, security/namespace controls, context-window discipline, and org-wide skill distribution — rather than for more domain-specific skills.

---

# Claude Code Community Digest — 2026-08-09

## Today's Highlights

Anthropic shipped **Claude Code v2.1.226**, described as a maintenance release with bug fixes and reliability improvements. The community’s attention remains concentrated on **Max-plan usage lockouts around Fable 5** (#79337), which has become the highest-engagement issue in the tracker with 70 comments. Dispatch/remote-control and cyber-safeguard false-positive reports are also recurring themes this week.

## Releases

- **v2.1.226** — Bug fixes and reliability improvements.  
  No detailed user-facing changelog was published in the release metadata.  
  [View releases](https://github.com/anthropics/claude-code/releases)

## Hot Issues

1. **[#79337 — Fable 5 prompts “usage credits required” on Max plan](https://github.com/anthropics/claude-code/issues/79337)**  
   The most active issue this cycle: Max subscribers report Fable 5 being silently downgraded to Opus 4.8 with a “usage credits required” prompt, despite Fable 5 being standard on Max. 70 comments and 23 👍 show strong community concern about plan-value transparency and silent model switching.

2. **[#50246 — Message queue mode: queue messages instead of interrupting active tasks](https://github.com/anthropics/claude-code/issues/50246)**  
   A long-running feature request with 184 👍 and 50 comments. Developers want to enqueue follow-up instructions while Claude is mid-task instead of forcing an interrupting context switch. This is one of the highest-signal workflow improvements in the tracker.

3. **[#29006 — Enable Remote Control for Claude Code sessions in Claude Desktop App](https://github.com/anthropics/claude-code/issues/29006)**  
   Highly requested remote-control capability with 119 👍. Users want the desktop app to act as a control plane for headless/background Claude Code sessions, including observation and intervention.

4. **[#19054 — Claude Code for VS Code does not use MCP servers at all](https://github.com/anthropics/claude-code/issues/19054)**  
   A serious integration bug: MCP servers are completely ignored in the VS Code extension on macOS. 24 comments and 26 👍 suggest a broad set of MCP-dependent users are impacted.

5. **[#81698 — Windows desktop app: GPU process crash kills entire app and all running sessions](https://github.com/anthropics/claude-code/issues/81698)**  
   A desktop-app reliability issue where an NVIDIA GPU process crash (exit code 101457950) terminates every active session. Notably severe for Windows users running long-lived agent workloads.

6. **[#84352 — CVP-approved Claude.ai organization still receives cyber safeguard blocks](https://github.com/anthropics/claude-code/issues/84352)**  
   An organization with prior Cyber Verification Program approval is again being blocked in Claude Code, while the portal shows “Under review.” Raises trust questions about safeguard revocation and approval-state synchronization.

7. **[#83436 — Cyber-safeguard false positives on scientific computing session](https://github.com/anthropics/claude-code/issues/83436)**  
   A legitimate IR spectrometer calibration workload triggers cyber-safeguard blocks on accumulated context, affecting both Opus 5 and Opus 4.8. Highlights concern that safeguard scanning can misfire on domain-specific scientific terms.

8. **[#80058 — Dispatch disabled in macOS Desktop app but works on mobile](https://github.com/anthropics/claude-code/issues/80058)**  
   Dispatch availability is inconsistent across platforms: the macOS desktop app cannot use Dispatch while mobile works. Important for users relying on cross-device remote control.

9. **[#60093 — Model switched to Opus without consent — $1,050 overcharge](https://github.com/anthropics/claude-code/issues/60093)**  
   Closed issue, but still notable: a user reported three days of charges totaling $1,050 after the backend model was allegedly switched from Sonnet to Opus without UI disclosure. The issue remains a reference point for cost-transparency demands.

10. **[#67303 — Dispatch permanently shows “Can’t reach your desktop”](https://github.com/anthropics/claude-code/issues/67303)**  
    A duplicate/open report about Dispatch pairing getting stuck server-side. Users need a pairing reset mechanism; the issue reflects broader Dispatch reliability pain.

## Key PR Progress

Only **1 pull request** was updated in the last 24 hours, so a top-10 list is not available for this window.

- **[#77492 — fix(hookify): match Write and prompt rules](https://github.com/anthropics/claude-code/pull/77492)**  
  Open PR by ShiroKSH. It makes file rules inspect content passed to `Write`, maps simple prompt rules to the current `UserPromptSubmit` payload, and preserves the legacy configured field. Adds regression coverage for Write, Edit, and prompt rules. This is a meaningful fix for permission/hook rule accuracy.

## Feature Request Trends

- **Non-interruptive workflows**: The most-supported direction is queuing messages instead of interrupting active tasks (#50246).
- **Remote control and Dispatch parity**: Users want reliable remote session control from desktop and mobile (#29006, #67303, #80058, #84035).
- **Model and cost transparency**: Max-plan users are pushing for clearer Fable 5 usage limits, visible model-switch disclosure, and accurate context-window reporting (#79337, #79410, #81693).
- **Permission rule correctness**: ask/deny rule handling needs to be consistent across interactive sessions, background sessions, and hook payloads (#83362, #77492).
- **MCP/plugin reliability**: Repeated friction around MCP server discovery, OAuth connectors, local `.mcpb` installs, and VS Code MCP support (#19054, #74210, #84199).

## Developer Pain Points

- **Fable 5 Max-plan lockouts**: Users exceed an invisible usage threshold and cannot switch to another available model (#79337, #79410).
- **Silent model/cost surprises**: Unexpected switches to Opus and inaccurate context-window reporting undermine trust in cost controls (#60093, #81693).
- **Cyber-safeguard false positives**: Legitimate organizations and scientific workloads are being blocked even after CVP approval (#84352, #83436).
- **Dispatch unreliability**: Pairing resets, platform inconsistencies, and “can’t reach desktop” states block remote workflows (#67303, #80058).
- **Windows desktop crash exposure**: GPU process crashes and bundled-CLI `ECONNRESET` failures can destroy whole sessions (#81698, #84818).
- **Terminal state restoration bugs**: Crashes leave terminals in mouse-tracking mode, breaking copy-paste and shell input (#84029, #68602).

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-08-09

## Today's Highlights

Codex shipped `rust-v0.148.0-alpha.5`, though no detailed release notes were included. Maintainers landed a strong batch of PRs this cycle around hook lifecycle handling, workload identity auth, and a new gRPC code-mode host service. Meanwhile, the most active community threads continue to focus on Windows Computer Use failures and remote/session state inconsistencies.

## Releases

- [rust-v0.148.0-alpha.5](https://github.com/openai/codex/releases/tag/rust-v0.148.0-alpha.5) — Published as `0.148.0-alpha.5`; no additional changelog details were provided.

## Hot Issues

1. [Support multi-line status line (#21653)](https://github.com/openai/codex/issues/21653) — Long status lines are truncated because the TUI does not support line breaks. High community demand: 13 comments, 59 👍.
2. [Codex App SSH remote project shows "No chats" while remote threads exist in state DB (#27284)](https://github.com/openai/codex/issues/27284) — Remote session visibility is out of sync with the actual state database, blocking SSH-based workflows. 12 comments.
3. [Codex extension fails to start: "The extension couldn't load its resources" (#37458)](https://github.com/openai/codex/issues/37458) — Windows VS Code users are unable to start the extension at all. 11 comments.
4. [Windows Computer Use reuses a stale node_repl exec context across JS calls (#37013)](https://github.com/openai/codex/issues/37013) — Computer Use works only within one JS execution, then fails on subsequent calls. Part of a growing Windows Computer Use bug cluster. 11 comments.
5. [Windows Computer Use approval prompt never appears; launch_app fails with `node_repl exec context not found` (#37180)](https://github.com/openai/codex/issues/37180) — Broken approval flow prevents app launches entirely. 8 comments.
6. [Computer Use on Windows fails during app/window discovery with 0x80070003 (#37383)](https://github.com/openai/codex/issues/37383) — Window/app enumeration fails early in the Computer Use flow. 8 comments, 4 👍.
7. [Windows Codex app causes mouse stutter during startup and task switching without CPU/Disk saturation (#33074)](https://github.com/openai/codex/issues/33074) — Severe desktop UX issue on Windows, even after clean reinstalls. 6 comments, 9 👍.
8. [CLI/macOS frequent reconnect loops and "stream disconnected before completion" errors (#37649)](https://github.com/openai/codex/issues/37649) — Even simple prompts hit stream disconnects on `gpt-5.6-sol` / `gpt-5.6-luna`. 5 comments.
9. [Codex desktop loses local project registrations and hides active threads while CLI/core database remains healthy (#34076)](https://github.com/openai/codex/issues/34076) — Desktop UI state diverges from the healthy core database, hiding active work. 6 comments.
10. [Remote control can create two simultaneously active turns in one thread (#34767)](https://github.com/openai/codex/issues/34767) — Concurrency bug in remote control can produce parallel active turns, risking conflicting edits. 5 comments.

## Key PR Progress

1. [Add workload identity token exchange support (#37610)](https://github.com/openai/codex/pull/37610) — Adds a `codex-workload-identity` crate for exchanging file-backed JWTs and federation rule IDs for short-lived ChatGPT credentials, with caching and refresh handling.
2. [Implement the gRPC code-mode host service (#37530)](https://github.com/openai/codex/pull/37530) — Exports a transport-independent gRPC host with leased sessions, execution/wait lifecycle, filtered nested tool-call subscriptions, and notifications.
3. [Support asynchronous command hooks (#37533)](https://github.com/openai/codex/pull/37533) — Runs async command hooks in the background with a per-session concurrency limit while preserving existing command-hook semantics.
4. [Terminate timed-out hook process trees (#37527)](https://github.com/openai/codex/pull/37527) — Uses Unix process groups and Windows job objects to kill descendant processes when a hook times out.
5. [Keep external agent detection from blocking config requests (#37528)](https://github.com/openai/codex/pull/37528) — Decouples external-agent transcript scanning from the config serialization queue to avoid unrelated config latency.
6. [Prevent launch context from reaching child processes (#37607)](https://github.com/openai/codex/pull/37607) — Treats `OPENAI_FEDERATION_RULE_ID` and `OPENAI_IDENTITY_TOKEN_FILE` as non-inheritable environment variables, closing a credential-leak path.
7. [Generalize hook handler execution (#37644)](https://github.com/openai/codex/pull/37644) — Routes configured handlers through a unified hooks engine and rejects MCP tool input values that cannot be represented in TOML for trust hashing.
8. [Use step environments for Guardian approval reviews (#37618)](https://github.com/openai/codex/pull/37618) — Guardian reviews now use the current step environment rather than a stale turn snapshot for working directory and permission context.
9. [Use the step context for command approval prefix rules (#37641)](https://github.com/openai/codex/pull/37641) — Reads `allow_prefix_rules` from the active step context when selecting exec policy and building unified approval requests.
10. [Include buffered turns when editing prompts (#37622)](https://github.com/openai/codex/pull/37622) — Reconstructs live buffered turns from turn/item notifications so prompt editing works correctly for in-flight messages.

## Feature Request Trends

- **TUI/CLI UX improvements** remain very popular, led by multi-line status line support (#21653) and requests for true text paste in the TUI (#17103).
- **Windows desktop/Computer Use stability** is the dominant reliability theme: users want approval prompts, window discovery, screenshots, and app launches to work reliably on Windows.
- **Remote/session state consistency** is a growing request area: remote threads should be visible, project registrations should persist, and subagents should not be rehydrated as "Working" after restart.
- **IDE/extension compatibility** continues to matter, with requests around VS Code extension loading, Windows `view_image` handling, and broader IDE support such as Antigravity.
- **Skills/sandbox flexibility** is emerging: users want symlinked `SKILL.md` files discovered correctly (#15756) and new workspace sources like ChatGPT Sites repositories (#37633).

## Developer Pain Points

- **Windows Computer Use is the largest recurring pain point**: multiple recent reports cite stale `node_repl` exec contexts (#37013, #37180, #37281), `EnumWindows` 0x80070003 failures (#37383, #37595), screenshot and launch failures (#37509), and app exits during Browser Use teardown (#36645).
- **Session/remote state desync frustrates users**: remote threads appear missing (#27284), local project registrations disappear (#34076), remote control can create two active turns (#34767), and closed subagents are rehydrated as "Working" (#37563).
- **Extension startup failures on Windows** block work before it starts, especially the "couldn't load its resources" error (#37458) and the earlier "Oops, an error has occurred" session issue (#35182).
- **CLI connectivity robustness** is a concern: macOS users report frequent reconnect loops and "stream disconnected before completion" errors (#37649), plus false "MCP startup interrupted" reports (#37418).
- **Hook/process lifecycle edge cases** are surfacing repeatedly: timed-out hooks can leave orphaned process trees, launch context env vars can leak into child processes, and relative sandbox write rules can recursively expand until `E2BIG` (#33479).

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-08-09

## Today's Highlights

A quiet but meaningful day: the nightly v0.56.0 build dropped with no external-facing change notes, while the headline PR is a long-awaited "agents can call agents" feature that finally landed as a help-wanted, large-sized contribution. On the bug front, P1 reports around subagent misreporting (`#22323`) and generalist agent hangs (`#21409`) continue to dominate maintainer attention, signaling that agent orchestration reliability remains the top community concern.

## Releases

**v0.56.0-nightly.20260809.gcf22ac7e8** — Automated nightly release. No explicit changelog beyond the version bump. [Compare changes](https://github.com/google-gemini/gemini-cli/compare/v0.56.0-nightly.20260808.gcf22ac7e8...v0.56.0-nightly.20260809.gcf22ac7e8)

## Hot Issues

1. **[#22323 — Subagent recovery after MAX_TURNS reported as GOAL success](https://github.com/google-gemini/gemini-cli/issues/22323)** (P1, bug, 12 comments). A `codebase_investigator` subagent reports `status: "success"` and `Termination Reason: "GOAL"` even after hitting the turn limit with zero analysis performed. This is a dangerous failure mode: users trust a success signal that actually hides an interruption.

2. **[#21409 — Generalist agent hangs](https://github.com/google-gemini/gemini-cli/issues/21409)** (P1, bug, 8 👍, 8 comments). Simple operations like folder creation hang indefinitely when delegated to the generalist agent, forcing users to cancel after up to an hour. Workaround: explicitly instructing the model not to defer to subagents.

3. **[#25166 — Shell command execution stuck with "Waiting input"](https://github.com/google-gemini/gemini-cli/issues/25166)** (P1, bug, 3 👍). After trivial CLI commands complete, the shell state remains "active" awaiting input that never comes. Reproducible with commands that cannot prompt, pointing to a state-machine bug in shell session handling.

4. **[#22093 — Subagents running without permission since v0.33.0](https://github.com/google-gemini/gemini-cli/issues/22093)** (P2, bug, 3 comments). Users with agents disabled in all configurations report subagents being invoked anyway after the v0.33.0 update, a regression with security implications.

5. **[#26522 — Auto Memory retries low-signal sessions indefinitely](https://github.com/google-gemini/gemini-cli/issues/26522)** (P2, bug, 5 comments). The extraction agent only marks sessions processed after a successful `read_file`, so low-signal sessions get surfaced and retried forever, inflating background work and token costs.

6. **[#26525 — Add deterministic redaction and reduce Auto Memory logging](https://github.com/google-gemini/gemini-cli/issues/26525)** (P2, security bug, 4 comments). Transcript content is sent to the extraction model *before* prompt-based redaction occurs, and existing skill content can be logged. The community is flagging this as a privacy gap in the memory pipeline.

7. **[#21983 — Browser subagent fails in Wayland](https://github.com/google-gemini/gemini-cli/issues/21983)** (P1, bug, 4 comments). The browser subagent terminates immediately on Wayland sessions, blocking Linux users who rely on native Wayland rather than XWayland.

8. **[#20079 — Symlinked agent files not recognized](https://github.com/google-gemini/gemini-cli/issues/20079)** (P2, bug, 4 comments). `~/.gemini/agents/*.md` entries that are symlinks are silently ignored. A simple quality-of-life fix that would let users manage agents across dotfile repos.

9. **[#21968 — Gemini doesn't use skills and sub-agents enough](https://github.com/google-gemini/gemini-cli/issues/21968)** (P2, bug, 6 comments). Anecdotal but widely echoed: custom skills like `gradle` or `git` are only used when explicitly commanded, never opportunistically, undermining the value of user-authored agent tooling.

10. **[#22465 — CLI gets stuck at interactive prompt creating Vite app](https://github.com/google-gemini/gemini-cli/issues/22465)** (P2, bug, 2 comments). Reproducible hang when scaffolding via `npm create vite` — the model drives the interactive prompt but never recovers. Maintainers suggest a behavioral eval to lock in a fix.

## Key PR Progress

1. **[#28738 — Allow agents to call agents](https://github.com/google-gemini/gemini-cli/pull/28738)** (P2, size/l, help wanted). Lets subagents delegate to other subagents — or recurse into themselves — via `tools:` frontmatter. Resolves #22092 and is arguably the most significant agent-architecture PR this week.

2. **[#28734 — Handle EACCES in resolveToRealPath to prevent sandbox crash](https://github.com/google-gemini/gemini-cli/pull/28734)** (P1, platform fix). Prevents a CLI startup crash on macOS when Seatbelt sandboxing is active and the CWD is inside a Git repository. `fs.realpathSync` only recovered from ENOENT/EISDIR/etc., not EACCES.

3. **[#28735 — Formatting guard for non-positive maxChars](https://github.com/google-gemini/gemini-cli/pull/28735)** (P1, core fix). Ensures `formatTruncatedToolOutput` returns content unchanged when `maxChars <= 0`, preventing output inflation from negative/zero truncation values. Fixes #28620.

4. **[#28736 — OAuth callback timeout cleared when flow completes](https://github.com/google-gemini/gemini-cli/pull/28736)** (security fix). Wraps resolve/reject in `startCallbackServer` so the timeout is cleared and the server closes gracefully, eliminating dangling timers post-auth.

5. **[#28608 — Fall back to stable models when preview model 404s](https://github.com/google-gemini/gemini-cli/pull/28608)** (P2, agent fix). With Gemini API key auth, a key lacking preview access gets 404 on `gemini-3.1-pro-preview`; this PR cascades to stable models instead of failing. Fixes #28600.

6. **[#28679 — Improve Vertex AI 401 error message](https://github.com/google-gemini/gemini-cli/pull/28679)** (P2, auth/security). Previously, using `vertex-ai` auth with only a standard Gemini API key produced a confusing failure; this adds actionable guidance for configuring Google Cloud credentials.

7. **[#28526 — Stop leaking VSCode IDE companion disposables](https://github.com/google-gemini/gemini-cli/pull/28526)** (P2, core fix, closed). A stray parenthesis collapsed `context.subscriptions.push(...)` calls into a comma expression, leaking `gemini.diff.accept` and `onDidChangeWorkspaceFolders` registrations. Fixes #27790.

8. **[#28737 — OpenAI-compatible auth](https://github.com/google-gemini/gemini-cli/pull/28737)** (size/xl, closed). Large experimental PR adding OpenAI-compatible auth; closed without merge, but signals continued community demand for third-party provider interop.

9. **[#28619 — Update .gitignore to ignore .env and .ai files; add unit tests](https://github.com/google-gemini/gemini-cli/pull/28619)** (P1). Prevents accidental commits of environment files and AI-generated artifacts, with test coverage. Addresses a recurring footgun in community workflows.

10. **[#28739 — Nightly version bump to 0.56.0-nightly.20260809](https://github.com/google-gemini/gemini-cli/pull/28739)** (size/s). Routine automated release chore from `gemini-cli-robot`.

## Feature Request Trends

- **Agent-to-agent orchestration**: The top architectural ask, now visible in PR #28738, alongside recurring requests for subagent trajectory sharing via `/chat share` (#22598) and richer bug-report context from subagents (#21763).
- **AST-aware tooling**: A dedicated epic (#22745) plus follow-up (#22746) explores AST-aware file reads, search, and codebase mapping to cut token noise and reduce misaligned reads. Community interest is moderate but steady.
- **Robust component-level evals**: Epic #24353 tracks scaling behavioral eval coverage beyond the current 76 tests across 6 Gemini models — a signal that reliability tooling is now a first-class concern.
- **Zero-dependency OS sandboxing**: Issue #19873 asks for OS-level sandboxing plus post-execution intent routing, leaning into Gemini 3's native bash-affinity while preserving security.
- **Memory system hardening**: A cluster of Auto Memory issues (#26516, #26522, #26523, #26525) demands deterministic redaction, quarantine of invalid patches, and termination of low-signal retry loops.

## Developer Pain Points

- **Hangs and misleading success**: The most emotionally charged cluster — generalist hangs (#21409), shell commands stuck at "Waiting input" (#25166), interactive prompt deadlocks (#22465), and MAX_TURNS misreported as GOAL success (#22323). Combined, these erode trust in autonomous mode.
- **Permission and control regressions**: Subagents activating despite disabled settings (#22093) and symlinked agent files being ignored (#20079) frustrate users trying to constrain or organize agent behavior.
- **Browser agent fragility**: Wayland failures (#21983) and ignored `settings.json` overrides like `maxTurns` (#22267) make the browser subagent unreliable in Linux and customized setups.
- **Auto Memory overhead and privacy**: Background extraction retrying low-signal sessions (#26522) and logging before redaction (#26525) waste tokens and raise privacy concerns.
- **Workspace hygiene**: Models scattering temporary edit scripts across directories (#23571) and destructive `git reset`/`--force` usage (#22672) create cleanup overhead and risk — both flagged as needing better guardrails.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-08-09

## Today's Highlights

No releases or pull requests landed in the last 24 hours, but issue triage was active: 23 issues were touched. The most impactful reports center on session-state regressions — autopilot and model selection not surviving session resume — plus a silent startup crash on common log levels and several authentication failures in enterprise/Codespaces environments.

## Releases

No new releases were published in the last 24 hours.

## Hot Issues

- [#4299 — Increasing typing latency over long copilot sessions](https://github.com/github/copilot-cli/issues/4299)  
  Closed after community reports that long-running sessions with background agents make typing latency unbearable. This is a high-impact usability regression for anyone using Copilot CLI as a daily driver.  
  *Reactions: 1 👍 · 2 comments*

- [#4285 — 1.0.76-1: silent exit 1 at session startup when log level is none/error/warning/info/debug](https://github.com/github/copilot-cli/issues/4285)  
  The CLI exits immediately with code 1 and no output for standard log levels, making diagnosis nearly impossible. “all” and “default” happen to work, which points to a configuration-parsing regression.  
  *Reactions: 2 👍 · 1 comment*

- [#4329 — Autopilot is not enabled when resuming a session that had autopilot enabled](https://github.com/github/copilot-cli/issues/4329)  
  Autopilot appears enabled in the statusline after resume, but approval-required actions still fail. This is especially dangerous for autonomous workflows because the UI lies about the actual permission state.  
  *Reactions: 0 👍 · 1 comment*

- [#4397 — Copilot CLI resume session switches back to default model](https://github.com/github/copilot-cli/issues/4397)  
  Users report that resuming a session loses the explicitly selected model and falls back to the default. Together with #4329, this shows a broader problem: session metadata is not being restored reliably.  
  *Reactions: 0 👍 · 0 comments*

- [#4256 — Add cache_control breakpoints to Anthropic requests to reuse expensive context](https://github.com/github/copilot-cli/issues/4256)  
  Feature request: Anthropic requests don’t set `cache_control` breakpoints, so repeated system prompts, tool definitions, and repo context are fully reprocessed each turn. Adding breakpoints would reduce cost and latency significantly.  
  *Reactions: 3 👍 · 1 comment*

- [#4410 — /agent pop-up treats .github\agents\AGENTS.md as a custom agent](https://github.com/github/copilot-cli/issues/4410)  
  Repository guidance files named `AGENTS.md` are being misread as custom agent definitions, producing malformed-frontmatter errors. This is a false-positive bug that could confuse users following documented agent conventions.  
  *Reactions: 0 👍 · 1 comment*

- [#4408 — github-mcp-server /mcp authenticate always fails on Copilot Enterprise](https://github.com/github/copilot-cli/issues/4408)  
  On enterprise-routed accounts, `/mcp` authentication for `github-mcp-server` consistently fails with an MCP OAuth discovery error. This blocks MCP integration for enterprise users entirely.  
  *Reactions: 0 👍 · 0 comments*

- [#4401 — Regression: skill tool cannot find valid skills in ~/.agents/skills](https://github.com/github/copilot-cli/issues/4401)  
  Valid skills with `SKILL.md` under `~/.agents/skills` are not being discovered, despite the directory being present. The report references #2230 as a previously incomplete fix, suggesting an ongoing regression in skill resolution.  
  *Reactions: 0 👍 · 0 comments*

- [#4402 — npm bin/copilot is a loader, not a version pin](https://github.com/github/copilot-cli/issues/4402)  
  The same npm-installed `copilot` path served 1.0.77 and then 1.0.78 101 seconds later. The loader-style shim makes version expectations unpredictable; `--prefer-version` works but is undocumented.  
  *Reactions: 0 👍 · 0 comments*

- [#4405 — Copilot Free in GitHub Codespaces: “No model available” after update](https://github.com/github/copilot-cli/issues/4405)  
  On Copilot Free, every prompt fails with `No model available`, even though the launch succeeds. The reporter raises questions around Auto-selection, token isolation, and re-login behavior in Codespaces.  
  *Reactions: 0 👍 · 0 comments*

## Key PR Progress

No pull requests were updated, merged, or opened in the last 24 hours.

## Feature Request Trends

- **Auto-mode configuration depth** — Users want control over model strength range and bias, not just a single auto behavior.  
  [#4411](https://github.com/github/copilot-cli/issues/4411) · [#4412](https://github.com/github/copilot-cli/issues/4412)

- **Context-cache optimization** — Requests should set Anthropic `cache_control` breakpoints to reuse expensive context and reduce cost/latency.  
  [#4256](https://github.com/github/copilot-cli/issues/4256)

- **Session/configuration parity across surfaces** — ACP clients want the same `contextTier` option available interactively, and the sessions view should restore quick-delete actions.  
  [#4275](https://github.com/github/copilot-cli/issues/4275) · [#4395](https://github.com/github/copilot-cli/issues/4395)

- **More flexible input handling** — Users want to disable/remap the “Ctrl+C twice to exit” behavior, and non-English UI localization is requested for the desktop/CLI integration.  
  [#4394](https://github.com/github/copilot-cli/issues/4394) · [#4407](https://github.com/github/copilot-cli/issues/4407)

- **Transparent remote-control state** — No visible indication is shown when `cli_remote_control_enabled` is false; the setting appears inert and failures are opaque.  
  [#4409](https://github.com/github/copilot-cli/issues/4409)

## Developer Pain Points

- **Silently ignored configuration** — `allowed_directories` in `permissions.config` is never loaded, valid skills under `~/.agents/skills` are not found, and Claude Code hooks with `||`/`&&` break on Windows PowerShell.  
  [#4398](https://github.com/github/copilot-cli/issues/4398) · [#4401](https://github.com/github/copilot-cli/issues/4401) · [#4399](https://github.com/github/copilot-cli/issues/4399)

- **Session state loss** — Both autopilot mode and the active model are lost when resuming sessions, forcing users to re-verify settings before continuing.  
  [#4329](https://github.com/github/copilot-cli/issues/4329) · [#4397](https://github.com/github/copilot-cli/issues/4397)

- **Authentication and entitlement failures** — MCP auth fails on Enterprise, browser login URL wrapping is broken, and Copilot Free users in Codespaces hit “No model available” despite following documented setup.  
  [#4408](https://github.com/github/copilot-cli/issues/4408) · [#4400](https://github.com/github/copilot-cli/issues/4400) · [#4405](https://github.com/github/copilot-cli/issues/4405)

- **Unpredictable version delivery** — The npm shim is a floating loader rather than a pinned version, causing unexpected version changes between invocations.  
  [#4402](https://github.com/github/copilot-cli/issues/4402)

- **Long-session degradation** — Background agents increasingly hurt typing latency over time, making extended interactive sessions effectively unusable.  
  [#4299](https://github.com/github/copilot-cli/issues/4299)

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest – 2026-08-09

## Today's Highlights
No releases or pull requests landed in the last 24 hours, indicating a quiet development window. Two issues saw activity: a long-running enhancement request for a persistent memory system gathered more discussion, and a new critical bug about a runaway generation event surfaced. The project appears to be addressing context persistence while also needing safeguards against unbounded LLM output.

## Releases
None in the last 24 hours.

## Hot Issues
Only 2 issues were updated in the last 24 hours; both are critical and worth monitoring.

- **[#1283 – Feature Request: Memory System – Persistent context across sessions](https://github.com/MoonshotAI/kimi-cli/issues/1283)**  
  *Enhancement | Created 2026-02-27 | Updated 2026-08-08 | 25 comments | 👍 0*  
  This proposal asks for an automatic + manual memory layer that lets Kimi Code CLI remember project patterns, user preferences, and context across sessions. With 25 comments, it clearly resonates with users who need continuity in long-lived projects. It is an important product-direction signal for the CLI.

- **[#2597 – Bug: Runaway garbled generation — 88k tokens of gibberish in one LLM step](https://github.com/MoonshotAI/kimi-cli/issues/2597)**  
  *Bug | Created 2026-08-08 | Updated 2026-08-08 | 0 comments | 👍 0*  
  A user reports a single LLM step running for ~53 minutes and emitting over 88,000 tokens of incoherent, repetitive output. This is a severe reliability issue—wasting credits, time, and potentially corrupting the session state. The lack of an upper bound or early-abort mechanism is a serious concern.

## Key PR Progress
No pull requests were updated in the last 24 hours, so no PR progress to report.

## Feature Request Trends
From current issue activity, the dominant requested direction is a **persistent memory system** (#1283). The back-and-forth in comments suggests users want both automatic memory (AI-managed project notes) and explicit, user-defined instructions that carry over between sessions. This aligns with broader assistant-tool trends toward durable, context-aware workflows.

## Developer Pain Points
Two recurring frustrations are visible in today's data:

1. **Context loss across sessions** – Developers need the CLI to remember project-specific decisions and conventions, not just within a chat but across separate invocations. The memory system request (#1283) directly targets this.
2. **Unbounded, runaway LLM output** – The bug in #2597 highlights a lack of safeguards: no token cap, no automatic stopping, and an extremely long step can spiral out of control. This undermines trust in the tool for paid or time-sensitive usage.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-08-09

## Today's Highlights

A cluster of four duplicate reports (#41300, #41306, #41314, #41322) confirms the OpenCode Go relay is injecting a **leading space into `deepseek-v4-flash` model names**, causing HTTP 400s — with one reporter verifying the bug persists even after prior fix attempts. Meanwhile, contributor `kitlangton` landed a wave of TUI fixes (including `/undo` handling and Mermaid renderer improvements), the long-awaited **plugin SDK v2 PR (#12042) was closed**, and an experimental performance PR (#40427) shows a 75.5% reduction in initial renderer memory. No new releases shipped in the last 24 hours.

## Releases

No new versions published in the last 24 hours.

## Hot Issues

1. **[#27167 — [FEATURE]: Add native session goals with /goal](https://github.com/anomalyco/opencode/issues/27167)** — 69 comments, 128 👍
   The most-upvoted open feature request. Users want persistent, native session goals/lifecycle instead of relying on custom slash commands. Strong community demand signals this is a top roadmap candidate.

2. **[#13984 — Cannot copy and paste in opencode CLI](https://github.com/anomalyco/opencode/issues/13984)** — 55 comments, 27 👍
   A long-running (since February) clipboard bug: the UI confirms "copied to clipboard" but paste yields nothing. High comment count suggests a widely reproduced pain point with no fix yet.

3. **[#14965 — Slow startup](https://github.com/anomalyco/opencode/issues/14965)** — 19 comments, 13 👍
   Startup regressed from instant to slow, specifically in the Ghostty terminal. The terminal-specific nature makes this tricky; users are comparing behavior across Kitty, Alacritty, and Terminal.app.

4. **[#33356 — [2.0] Unbounded growth of the event table: opencode.db reaches 13GB+](https://github.com/anomalyco/opencode/issues/33356)** — 15 comments
   Production users report SQLite databases ballooning to 13GB due to unpruned `message.updated.1` snapshot events. No retention/compaction policy exists — a serious long-running-instance concern.

5. **[#41300 / #41306 / #41314 / #41322 — deepseek-v4-flash leading-space bug cluster](https://github.com/anomalyco/opencode/issues/41300)** — 3–4 comments each
   Four near-simultaneous reports that the OpenCode Go gateway forwards `model: " deepseek-v4-flash"` (with a leading space) to the upstream provider, causing 400s. The community is actively verifying root cause; #41306 claims #41211's fix didn't work, verified 2026-08-09.

6. **[#30611 — Sessions fail on transient network errors instead of retrying](https://github.com/anomalyco/opencode/issues/30611)** — 6 comments
   Only `ECONNRESET` is treated as retryable; other transient transport failures kill the assistant turn. Users want the existing retry policy extended to cover DNS hiccups, TLS timeouts, and dropped sockets.

7. **[#32548 — Step-cap assistant message causes 400 on Claude models with thinking enabled](https://github.com/anomalyco/opencode/issues/32548)** — 5 comments
   Appending "MAXIMUM STEPS REACHED" as an assistant-role message breaks Anthropic's response-prefill validation when thinking is on. A subtle protocol-compatibility bug affecting Claude users on long agent runs.

8. **[#38993 — [FEATURE]: Add/Remove MCP servers from the TUI dialog with config persistence](https://github.com/anomalyco/opencode/issues/38993)** — 5 comments
   HTTP-based MCP controls exist (#37712) but the TUI surface was explicitly left out. Users want full lifecycle management (add/remove/connect/disconnect) with persisted config, without editing JSON manually.

9. **[#31307 — Multiple opencode instances in the same project share the same session via SQLite](https://github.com/anomalyco/opencode/issues/31307)** — 4 comments, 3 👍
   Two terminal tabs in the same project show identical session content because SQLite is shared. Interacting with one instance unexpectedly affects the other — a concurrency/isolation design gap.

10. **[#41339 — Plugin slash commands pass through as raw text in OpenCode Desktop v1.18.15 (regression)](https://github.com/anomalyco/opencode/issues/41339)** — 2 comments
    A fresh regression: plugin-registered `/commands` render as literal text in Desktop while working fine in the CLI. Compounds earlier reports (#34776) of Desktop/CLI command-handling divergence.

## Key PR Progress

1. **[#12042 — [contributor] feat(plugin): provide SDK v2](https://github.com/anomalyco/opencode/pull/12042) — CLOSED**
   After six months, the dual-client (v1/v2) plugin SDK is merged/closed. Provides a backward-compatible v2 SDK so plugin authors can adopt new APIs incrementally — a major milestone for the plugin ecosystem.

2. **[#40427 — [beta] some experimental perf improvements](https://github.com/anomalyco/opencode/pull/40427) — OPEN**
   Renderer entry memory drops from 7.45MB to 1.82MB (−75.5%) against an immutable partial DB snapshot with a fixed 24-hour corpus window. Experimental, but a promising direction for the sluggish-startup complaints.

3. **[#41344 — [contributor] fix(tui): undo latest pending prompt](https://github.com/anomalyco/opencode/pull/41344) — OPEN**
   Makes `/undo` remove the newest pending user prompt (queued or steering) before reverting session history, restoring it to the composer. Fixes #39736.

4. **[#41347 — [contributor] fix(tui): sync Mermaid renderer fixes](https://github.com/anomalyco/opencode/pull/41347) — OPEN**
   Fixes corrupted state diagrams with branching/feedback, adds support for Mermaid connectors seen in real model output, decodes HTML entities in labels, and imports spatial routing fixes from OpenTUI.

5. **[#40861 — fix(opencode): stop storing full patch text in session summary diffs](https://github.com/anomalyco/opencode/pull/40861) — OPEN**
   `SessionSummary.summarize()` was persisting complete `patch` text in snapshots. This trims it — directly relevant to the 13GB database bloat issue (#33356). Third attempt after #32410/#33892 were auto-closed.

6. **[#41342 — [contributor] feat(tui): show session branches in vertical tabs](https://github.com/anomalyco/opencode/pull/41342) — OPEN**
   Each vertical session tab now displays its non-default VCS branch as `project:branch` in subdued metadata color, with default branches hidden to reduce noise.

7. **[#40997 — refactor(core): replace integration prompts with forms](https://github.com/anomalyco/opencode/pull/40997) — OPEN**
   Replaces integration-specific prompt schemas with shared `Form.Fields`, validates OAuth/key answers in Core, and migrates GitHub Copilot, Azure, and Cloudflare integrations onto the new form-over-wire model.

8. **[#41202 — [contributor] fix(core): authorize file mutations before locking](https://github.com/anomalyco/opencode/pull/41202) — OPEN**
   Changes `write`/`edit`/`patch` to a two-phase model: resolve paths + request permission first, then acquire process-global path locks only after approval. Reduces lock contention and blocked-permission deadlocks.

9. **[#41350 — feat(app): add animated BusyWave loading indicator](https://github.com/anomalyco/opencode/pull/41350) — OPEN**
   Replaces the shimmering "Thinking" label with a persistent busy-wave effect inspired by TUI design. User-visibility polish for the desktop app.

10. **[#41336 — fix(cli): add fish shell completion support](https://github.com/anomalyco/opencode/pull/41336) — CLOSED**
    Fixes #41232 where `opencode completion fish` emitted bash/zsh scripts. Adds proper fish completion templates for bash, zsh, and fish in a new `cli/completion.ts`.

## Feature Request Trends

- **Native session goals & lifecycle** (#27167): The dominant feature request — users want first-class persistent goals, not slash-command workarounds.
- **MCP server management in the TUI** (#38993): Following the HTTP API, users want visual add/remove/connect/disconnect controls with persisted config.
- **Richer document input** (#27689): Drag-and-drop support for `.docx`/`.xlsx` files is requested as chat interfaces adopt Office-document workflows.
- **Provider-ecosystem compatibility** (#34877, #41273, #41300): Recurring themes — correct cost tracking for Chinese providers (GLM, DeepSeek, Qwen), Moonshot/Kimi streaming reliability, and model-ID normalization at the gateway.

## Developer Pain Points

- **Database bloat with no retention policy** (#33356): Long-lived instances hit multi-GB SQLite files; users want cap/compaction/retention controls for the event table.
- **Clipboard breakage in the TUI** (#13984): 55 comments over six months with no resolution — a top daily-frustration issue.
- **Terminal-specific rendering bugs**: Ghostty slow startup (#14965), Kitty OSC-8 wrapped links not clickable (#35649), and post-exit gibberish output (#20989, #29021) point to an ongoing TUI/terminal-compatibility tail.
- **Gateway model-name corruption**: The `deepseek-v4-flash` leading-space bug spawned four duplicates in one day — a systemic issue with the OpenCode Go relay's model-string handling.
- **Desktop ↔ CLI feature parity**: Plugin slash commands passing through as raw text in Desktop (#41339) and plugin-hook divergence (#34776) show the desktop app lagging behind the CLI.
- **Concurrency & lifecycle isolation** (#31307, #31554): Shared SQLite sessions across instances and duplicate MCP server processes (2–4× per server on Linux) suggest process/resource isolation needs work.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-08-09

## 1. Today's Highlights

Community attention this week is split between **transport reliability for the `openai-codex` provider** (76-comment issue on stuck `Working...` states and fatal mid-stream disconnects) and a **cluster of auto-compaction bugs** that let context windows overflow past 100% before the provider rejects the request. A large batch of untriaged TUI and extension-API issues landed on Aug 8, covering clipboard handling, scroll ergonomics, and several Windows-specific config pitfalls, while PRs focused on DeepSeek parameter correctness, compaction concurrency guards, and a runtime annotation for `pi --version`.

## 2. Releases

No new releases in the last 24 hours. Repository remains on the 0.84.x line (0.84.1 referenced in recent issues).

## 3. Hot Issues

- **[#4945 — `openai-codex` Connection Reliability Issues](https://github.com/earendil-works/pi/issues/4945)** · 76 comments · 31 👍
  The most-discussed issue this cycle. `openai-codex` / `gpt-5.5` intermittently leaves the interactive TUI stuck on `Working...` with no streamed text, no tool call, and no error; recovery requires Escape, which records an aborted turn. Community reports confirm this is recurrent and not resolved by provider-side changes.

- **[#6879 — Auto-compaction never triggers after context grows past 100% until provider overflow](https://github.com/earendil-works/pi/issues/6879)** · 15 comments · 15 👍
  A 2-hour agentic turn on `gpt-5.6-sol` blew past the compaction threshold and only compacted when the API rejected the request at 373k tokens. The author proposes checking compaction after every agent step rather than waiting for a natural boundary.

- **[#7821 — Auto-compaction waits for `agent_end` during long tool loops](https://github.com/earendil-works/pi/issues/7821)**
  Root-cause follow-up to #6879: compaction is only evaluated after the whole agent loop emits `agent_end`, so uninterrupted tool loops keep making provider requests after crossing the threshold. A session with a 272k window plus 16,384 reserve hit the ceiling mid-loop.

- **[#7820 — `openai-codex` stream requests have no `retryProviderRequest` wrapper; mid-stream disconnects are always fatal](https://github.com/earendil-works/pi/issues/7820)**
  Measured on pi-ai 0.83.0: roughly 30% of long-thinking `gpt-5.6-sol` turns (3–25 min) died with transport errors (`WebSocket closed 1006`, etc.). Unlike non-streaming paths, streaming requests lack the retry wrapper, so any disconnect is fatal.

- **[#7782 — Invalid tool call from Bedrock poisoned pi session](https://github.com/earendil-works/pi/issues/7782)**
  Pi accepted and executed a Bedrock tool call containing an invalid empty key (`"" : ""`), persisted it, and replayed it on every subsequent turn, permanently bricking the session. Community expects validation/sanitization of tool arguments before execution.

- **[#7836 — Edit fuzzy match misses lines with differences in whitespace length](https://github.com/earendil-works/pi/issues/7836)**
  `normalizeForFuzzyMatch` doesn't collapse runs of whitespace or strip leading whitespace, so `oldText` fails to match when indentation differs even though content is identical. Particularly painful for smaller models with imprecise whitespace.

- **[#7837 — Fullscreen TUI: mouse selection silently overwrites the system clipboard (OSC 52, target `c`); no opt-out](https://github.com/earendil-works/pi/issues/7837)**
  Dragging in fullscreen mode immediately writes the selection to the clipboard via OSC 52 on *every* selection, with no modifier key and no setting to disable it — a surprising and potentially destructive default.

- **[#7734 — Print mode with extensions loaded hangs at exit when a subagent was spawned](https://github.com/earendil-works/pi/issues/7734)**
  In print mode, pi finishes the task, prints the final answer, and then never exits (0% CPU, no open sockets). Reproduced on 0.84.0 and 0.83.0 with 14 extensions including pi-subagents 0.41.0.

- **[#7543 — Meta Model API](https://github.com/earendil-works/pi/issues/7543)** · 3 👍
  Feature request to add the Meta Model API as a provider, enabling Meta's Muse Spark via the standard `/login` flow. Labeled `no-action`, but user demand is visible.

- **[#7829 — Invalid settings.json silently ignored; misleading 'bash not found' error on Windows](https://github.com/earendil-works/pi/issues/7829)**
  An unescaped Windows path in `settings.json` (`C:\Users\...`) is invalid JSON, but pi silently ignores it and later surfaces a confusing `bash not found` error. Users want a JSON parse error at load time with the file path.

## 4. Key PR Progress

- **[#7840 — docs: add Aliyun Model Studio CLI (`bailian-cli`) to Related Tools](https://github.com/earendil-works/pi/pull/7840)**
  Adds the official Aliyun/DashScope CLI to the README's Related Tools section, extending coding-agent capabilities for Aliyun AI platform users.

- **[#7610 — feat(ai): add LLM Gateway and LLM Gateway DevPass providers](https://github.com/earendil-works/pi/pull/7610)**
  Adds LLM Gateway (an OpenRouter-style router) as built-in `openai-completions` providers, contributed on behalf of the LLM Gateway team. Replaces auto-closed #7480.

- **[#7811 — fix(ai): send `max_tokens` to native DeepSeek](https://github.com/earendil-works/pi/pull/7811)**
  Pi was sending `max_completion_tokens` to native DeepSeek models; direct API testing confirmed DeepSeek silently ignores it while `max_tokens` is enforced. Sets the correct `maxTokensField` for the provider.

- **[#7817 — fix(ai): treat incomplete reason `'length'` as a length stop, not an error](https://github.com/earendil-works/pi/pull/7817)**
  OpenAI-compatible providers (e.g. Doubao / Volcengine Ark) return `incomplete_details.reason = 'length'` instead of `'max_output_tokens'`. This PR maps it to a normal length stop instead of an error.

- **[#7807 — fix(ai): expose low reasoning effort for native DeepSeek V4 Flash](https://github.com/earendil-works/pi/pull/7807)**
  DeepSeek V4 Flash supports `low` as a distinct reasoning effort while V4 Pro maps it to `high`. Pi's single shared V4 map incorrectly promotes Flash `low` requests to `high`; adds a native Flash-specific map.

- **[#7810 — fix(coding-agent): reject concurrent compaction calls](https://github.com/earendil-works/pi/pull/7810)**
  Pressing `/compact` or its keybinding twice quickly can crash the TUI with `Cannot read properties of undefined (reading 'signal')` because `compact()` stores its `AbortController` in a shared field. Guards against re-entrant compaction.

- **[#7833 — fix(examples): change notify extension from `agent_end` to `agent_settled`](https://github.com/earendil-works/pi/pull/7833)**
  The notify example fires on `agent_end`, but that event occurs before automatic retries, compaction retries, and queued follow-up continuations complete — causing premature "Ready for input" notifications. Switches to `agent_settled`.

- **[#7834 — feat(coding-agent): annotate `--version` with runtime (bun/node/deno)](https://github.com/earendil-works/pi/pull/7834)**
  Output now shows `0.84.1 (node)` / `(bun)` / `(deno)`, helping issue reporters and diagnostics distinguish runtime-specific problems. Closes #7244.

- **[#7823 — feat: A-level capabilities from oh-my-pi (stream rules, subagent tools, advisor, cross-session memory)](https://github.com/earendil-works/pi/pull/7823)**
  Ports four independent capabilities from the oh-my-pi (omp) ecosystem into core: time-traveling stream rules (pattern-match, abort stream, drop partials, inject reminder, retry), subagent tools, an advisor, and cross-session memory. Commit-split per feature.

- **[#7801 — feat(coding-agent): lazily load uncommon syntax grammars](https://github.com/earendil-works/pi/pull/7801)**
  Experimental refactor of syntax highlighting to lazily load grammar definitions, reducing startup cost. The author notes the highlight function is public API, so the change is engineered to preserve compatibility despite UI invalidation after load.

- **[#7721 — fix(tui): avoid unwanted newlines when copying in fullscreen](https://github.com/earendil-works/pi/pull/7721)**
  Fullscreen mouse selection copied each visual wrapped row as a separate line, so pasting introduced newlines absent from the original content. Now tracks which row breaks are real vs. visual wraps.

## 5. Feature Request Trends

- **Provider ecosystem expansion.** Users consistently want more providers and transports: Meta Model API (#7543), Cloudflare Workers AI Gateway over the AI binding (#7838), LLM Gateway built-ins (#7610), and Aliyun CLI discoverability (#7840). DeepSeek-specific correctness fixes (#7811, #7807) show the native DeepSeek path is getting real usage.
- **Multiple logins per provider.** #7814 asks to allow concurrent logins for the same provider (e.g. two ChatGPT Plus subscriptions) without duplicating the OAuth flow in a custom extension.
- **Settings profiles.** #7813 proposes multiple profiles (via CLI flag, env var, or per-project switching) rather than the hardcoded `~/.pi/agent/settings.json` and `<cwd>/.pi/settings.json`.
- **TUI usability polish.** A steady stream of small UX requests: configurable mouse wheel scroll step (#7765), line-by-line transcript scroll (#7830), horizontally scrollable slash-autocomplete descriptions (#7827), and safer clipboard behavior (#7837).
- **Session management ergonomics.** #7818 requests deleting the currently active session with return to the no-session home screen; #7819 asks for an `immediateUserMessage` setting to render user input before agent processing to reduce perceived latency.

## 6. Developer Pain Points

- **`openai-codex` transport is the biggest reliability sore spot.** Two top issues (#4945, #7820) describe the same class of failure: long streaming turns dying with no retry, no visible error, and TUI state stuck on `Working...`. The 76-comment engagement signals this affects many users.
- **Compaction is not aggressive enough in long agentic loops.** #6879 and #7821 both show context limits being exceeded because compaction only triggers at `agent_end`; users want per-step checks, especially for multi-hour autonomous turns.
- **One bad tool call can brick a session.** The Bedrock empty-key incident (#7782) is the extreme case of a wider absence of tool-argument validation; users expect sanitization before execution and persistence.
- **Edit-tool matching is brittle for smaller models.** Two issues (#7835, #7836) show the edit tool rejecting valid inputs over whitespace normalization and single-object `edits` arguments — friction that disproportionately affects weaker models.
- **Windows/configuration footguns.** Invalid `settings.json` paths are silently swallowed, leading to confusing downstream errors like `bash not found` (#7829) — users want parse errors surfaced at load time.
- **Exit hangs and clipboard side effects.** Print mode hanging after subagent spawn (#7734) and silent OSC 52 clipboard overwrites (#7837) are the kind of "quietly wrong" behaviors that erode trust in the TUI.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-08-09

## 1. Today's Highlights

Qwen Code shipped **v0.21.8**, restoring real-time autofix for fork-originated PRs and enabling compression-cache sharing across OpenAI, Gemini, and Vertex AI. The community is converging on multi-session coordination and review-pipeline refactoring as the next major feature areas, while CI/test reliability remains the most visible source of friction.

## 2. Releases

**v0.21.8** ([release](https://github.com/QwenLM/qwen-code/releases/tag/v0.21.8))

- Restored real-time autofix support for pull requests opened from forks by bridging review events to credentialed workflows ([#8676](https://github.com/QwenLM/qwen-code/pull/8676)).
- Enabled compression cache sharing for OpenAI, Gemini, and Vertex AI.

No additional release notes were included.

## 3. Hot Issues

Selected from 33 issues updated in the last 24h.

- [#8092](https://github.com/QwenLM/qwen-code/issues/8092) — **Lower-maintenance desktop app around Web Shell**  
  Feature request to reuse Web Shell as the desktop UI instead of maintaining a separate implementation. 6 comments; clear roadmap interest in reducing desktop product overhead.

- [#8756](https://github.com/QwenLM/qwen-code/issues/8756) — **Main CI failed: E2E Tests**  
  Bot-tracked CI failure on `main` before test results were reported. 5 comments; symptoms of ongoing E2E flakiness on the main branch.

- [#8766](https://github.com/QwenLM/qwen-code/issues/8766) — **CI failed: installs a local Qoder plugin**  
  Extension-install E2E test broken. Autofix is already in progress and approved. 4 comments; indicates plugin installation regression.

- [#8737](https://github.com/QwenLM/qwen-code/issues/8737) — **Chrome remote-debugging consent dialog reappears every session**  
  `chrome-devtools-mcp --autoConnect` prompts again on each session. 4 comments; major UX friction for MCP-based browser automation.

- [#8724](https://github.com/QwenLM/qwen-code/issues/8724) — **Cross-session messaging on the same machine**  
  Proposal for sessions to discover and message each other via `list_agents` / `send_message`, with an explicit fail-closed gate. 4 comments; foundational for local multi-agent workflows.

- [#8718](https://github.com/QwenLM/qwen-code/issues/8718) — **RFC: Native coordination for independent Qwen sessions**  
  Leader/worker dispatch, correlated state observation, and structured result collection. 4 comments; reflects strong demand for multi-agent orchestration.

- [#8317](https://github.com/QwenLM/qwen-code/issues/8317) — **`Ctrl+Shift+C` no longer copies text in terminal**  
  Closed bug report on a standard terminal copy shortcut breaking. 4 comments; likely a regression affecting everyday CLI use.

- [#8627](https://github.com/QwenLM/qwen-code/issues/8627) — **`DO_NOT_TRUST` loses to ancestor `TRUST_FOLDER`**  
  Closed security bug: an explicit distrust rule can be overridden by an ancestor trust rule, allowing an untrusted workspace to inject the `qwen serve` bearer token. 3 comments; important trust-boundary correctness issue.

- [#8752](https://github.com/QwenLM/qwen-code/issues/8752) — **VS Code settings schema rejects supported prompt hooks**  
  The generated VS Code schema rejects `prompt` hooks that the core runtime accepts. 3 comments; configuration compatibility gap between the IDE companion and core.

- [#8697](https://github.com/QwenLM/qwen-code/issues/8697) — **`OTEL_METRICS_EXPORTER=otlp` silently disables metrics export**  
  Standard OpenTelemetry env var causes native qwen-code metrics to stop while traces continue. 3 comments; silent telemetry failure is hard to diagnose.

## 4. Key PR Progress

Selected from 50 PRs updated in the last 24h.

- [#8776](https://github.com/QwenLM/qwen-code/pull/8776) — **refactor(review): extract toolchain adapter boundary**  
  Decouples `qwen review build-test` from npm-specific internals, preparing for additional toolchain support.

- [#8777](https://github.com/QwenLM/qwen-code/pull/8777) — **feat(review): add Maven multi-module verification**  
  Stacked on #8776; adds root Maven reactor recognition and per-module test targeting for `/review`.

- [#8728](https://github.com/QwenLM/qwen-code/pull/8728) — **feat(core): add live-session registry and `qwen sessions ps`**  
  First step toward cross-session messaging; lets running sessions register themselves locally.

- [#8730](https://github.com/QwenLM/qwen-code/pull/8730) — **feat(core): accept cross-session messages behind an inbound gate**  
  Second step of #8724; incoming cross-session messages are gated before the model can act on them.

- [#8714](https://github.com/QwenLM/qwen-code/pull/8714) — **feat(core): add native DashScope integration**  
  Speaks Alibaba ModelStudio’s native generation API instead of going through the OpenAI-compatible endpoint.

- [#8675](https://github.com/QwenLM/qwen-code/pull/8675) — **feat(web-shell): add model-specific reasoning controls**  
  Adds a built-in registry for Thinking/Effort controls across Core, ACP, daemon, SDK, and WebShell.

- [#8614](https://github.com/QwenLM/qwen-code/pull/8614) — **feat(web-shell): add fullscreen view for artifact panel**  
  Fullscreen toggle for the right panel showing artifacts, subagents, review changes, monitors, and scheduled tasks.

- [#8761](https://github.com/QwenLM/qwen-code/pull/8761) — **fix(ci): route workflow label mutations through REST**  
  Replaces `gh pr edit` label mutations with REST API calls across three workflows, plus a guard test.

- [#8469](https://github.com/QwenLM/qwen-code/pull/8469) — **feat(acp): protect against repeated tool execution failures**  
  Adds a conservative guard against repeated typed tool failures on live interactive ACP sessions.

- [#8762](https://github.com/QwenLM/qwen-code/pull/8762) — **fix(serve): stop `usage_update` frames from flooding demo event log**  
  Treats usage updates as a live context meter instead of dumping raw JSON into the `/demo` Events tab.

## 5. Feature Request Trends

- **Multi-session and multi-agent coordination**  
  The clearest trend: native coordination between independent sessions, live session registries, and fail-closed message gates.  
  See [#8724](https://github.com/QwenLM/qwen-code/issues/8724), [#8718](https://github.com/QwenLM/qwen-code/issues/8718), [#8775](https://github.com/QwenLM/qwen-code/issues/8775).

- **Web Shell as the shared product surface**  
  Requests to build desktop apps or web features on top of Web Shell rather than maintaining separate UIs.  
  See [#8092](https://github.com/QwenLM/qwen-code/issues/8092), [#8614](https://github.com/QwenLM/qwen-code/pull/8614).

- **Browser control without mandatory MCP**  
  A direct browser-command bridge is proposed, alongside complaints about current Chrome-devtools MCP consent friction.  
  See [#8699](https://github.com/QwenLM/qwen-code/issues/8699), [#8737](https://github.com/QwenLM/qwen-code/issues/8737).

- **Review pipeline as deterministic workflow**  
  Multiple PRs and RFCs push `/review` orchestration toward the workflow engine, toolchain adapters, and diff-aware perf controls.  
  See [#8769](https://github.com/QwenLM/qwen-code/issues/8769), [#8776](https://github.com/QwenLM/qwen-code/pull/8776), [#8777](https://github.com/QwenLM/qwen-code/pull/8777).

- **Terminal UX and i18n polish**  
  Requests for better selection behavior, clearer blocking messages, and fixes for CJK/full-width punctuation around hyperlinks.  
  See [#8738](https://github.com/QwenLM/qwen-code/issues/8738), [#8741](https://github.com/QwenLM/qwen-code/issues/8741), [#8750](https://github.com/QwenLM/qwen-code/issues/8750).

## 6. Developer Pain Points

- **CI and release instability**  
  E2E failures on main, a nightly release failure, local `npm test` breaking on an unknown flag, and integration tests that have never been type-checked.  
  See [#8756](https://github.com/QwenLM/qwen-code/issues/8756), [#8766](https://github.com/QwenLM/qwen-code/issues/8766), [#8771](https://github.com/QwenLM/qwen-code/issues/8771), [#8721](https://github.com/QwenLM/qwen-code/issues/8721), [#8692](https://github.com/QwenLM/qwen-code/issues/8692).

- **Settings that silently no-op or reject valid config**  
  Exposed settings that do nothing, schema entries that reject supported hooks, and env vars that silently disable metrics.  
  See [#8748](https://github.com/QwenLM/qwen-code/issues/8748), [#8752](https://github.com/QwenLM/qwen-code/issues/8752), [#8697](https://github.com/QwenLM/qwen-code/issues/8697).

- **Trust-boundary and security edge cases**  
  Folder-trust precedence can override explicit distrust, and read-only git commands can execute programs from `.git/config`.  
  See [#8627](https://github.com/QwenLM/qwen-code/issues/8627), [#8575](https://github.com/QwenLM/qwen-code/issues/8575).

- **Terminal regressions and i18n formatting bugs**  
  Standard terminal copy shortcuts breaking and bare URLs swallowing CJK/full-width punctuation into link targets.  
  See [#8317](https://github.com/QwenLM/qwen-code/issues/8317), [#8750](https://github.com/QwenLM/qwen-code/issues/8750).

- **MCP and browser automation friction**  
  Repeated Chrome consent dialogs make browser automation feel non-deterministic and interruptive.  
  See [#8737](https://github.com/QwenLM/qwen-code/issues/8737), [#8699](https://github.com/QwenLM/qwen-code/issues/8699).

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek-TUI / Codewhale Community Digest — 2026-08-09

## Today’s Highlights
The v0.9.5 release train is the main event: both v0.9.5 and v0.9.4 are out, release automation is being hardened, and compaction is now live and pressure-aware. The community conversation is shifting toward turning the TUI into a trustworthy agent-control console: unified task views, mid-turn controls, turn-stop honesty, and better provider/model resolution. A first-time contributor also landed Mistral AI as a first-class provider route.

## Releases
- [v0.9.5](https://github.com/Hmbown/CodeWhale/releases/tag/v0.9.5) and [v0.9.4](https://github.com/Hmbown/CodeWhale/releases/tag/v0.9.4) were published in the last 24h.
- Release notes reinforce that **Codewhale** is now the public product from Shannon Labs; `codewhale` remains the lowercase technical identifier for the command, npm package, and release assets.
- The legacy `deepseek-tui` npm package is deprecated and receives no further releases. Migration guidance for v0.8.x `deepseek` / `ds` users is part of the release notes.

## Hot Issues
1. [#4022 v0.9.3: define CLI/TUI parity for subagent and runtime control surfaces](https://github.com/Hmbown/CodeWhale/issues/4022) — Open, 8 comments. Subagent status and cancellation live mostly in the TUI sidebar, but must not be trapped there for future cloud/remote workflows.

2. [#4785 Dead-code sweep: 464 `#[allow(dead_code)]` attributes are hiding drift](https://github.com/Hmbown/CodeWhale/issues/4785) — Open, 6 comments. Stripping the suppressors would reveal a significant amount of dead code across 143 files; the compiler is currently blind to it.

3. [#4326 Perf: explain and bound RSS after cancelling a 32-worker storm](https://github.com/Hmbown/CodeWhale/issues/4326) — Open, 6 comments. Post-cancellation RSS keeps increasing; the team needs to separate allocator high-water retention from a real worker/runtime leak.

4. [#4416 Isolate stale failed-agent state between CodeWhale sessions in the same workspace](https://github.com/Hmbown/CodeWhale/issues/4416) — Open, 4 comments. A second instance in the same workspace renders failed-agent rows from an earlier session, creating a stale and misleading work surface.

5. [#5034 Switching providers can retain an unrelated default model](https://github.com/Hmbown/CodeWhale/issues/5034) — Open, 3 comments. Provider and model resolution are not updated as one coherent state; switching to OpenAI can leave an inherited `gpt-5.5` default active.

6. [#5266 v0.9.5: milestone tracker — start here](https://github.com/Hmbown/CodeWhale/issues/5266) — Open, 2 comments. This is the v0.9.5 pick-order for contributors; issues are self-contained and land via PR.

7. [#5272 v0.9.5: prompt-scoped file recovery](https://github.com/Hmbown/CodeWhale/issues/5272) — Open, 2 comments. Proposes restoring workspace files from a prior prompt’s session snapshots, with git-aware safeguards and destructive-restore confirmation.

8. [#5270 v0.9.5: unified tasks surface](https://github.com/Hmbown/CodeWhale/issues/5270) — Open, 2 comments. Requests one operator-facing list of everything still running: background shells, subagents, Fleet workers, and workflow runs.

9. [#5267 v0.9.5: turn-stop honesty](https://github.com/Hmbown/CodeWhale/issues/5267) — Open, 2 comments. Users lose trust when the footer says “ending” / “stopping” but the model keeps producing output.

10. [#5244 Unknown model ids silently degrade to the 128K legacy context default](https://github.com/Hmbown/CodeWhale/issues/5244) — Open, 2 comments. Unknown models fall back to 128K with no visible warning, which can silently compact 1M-window models too early.

## Key PR Progress
1. [#5306 fix(release): validate crate publication order](https://github.com/Hmbown/CodeWhale/pull/5306) — Closed. Validates the 20-crate publication order against Cargo metadata; `codewhale-core` must publish before `codewhale-tui`, and duplicate/missing/inverted dependencies fail closed.

2. [#5308 fix(release): use CNB asset download URLs](https://github.com/Hmbown/CodeWhale/pull/5308) — Open. Uses the canonical codewhale.net/codewhale slug and `/-/releases/download/vX.Y.Z` path so mirror mode receives actual asset bytes, not release HTML.

3. [#5295 feat: add Mistral AI as a first-class provider route](https://github.com/Hmbown/CodeWhale/pull/5295) — Closed. First-time contributor @xavierpestel-ai adds Mistral/La Plateforme with `provider = "mistral"`, `CODEWHALE_PROVIDER=mistral`, and `--provider mistral`.

4. [#5301 fix(tui): make compaction live and pressure-aware](https://github.com/Hmbown/CodeWhale/pull/5301) — Closed. Makes manual `/compact` nonblocking, serializes it with typed lifecycle IDs, and aligns 128K / 272K / 1M auto-compaction with real request pressure.

5. [#5300 refactor(core): own primary request preparation](https://github.com/Hmbown/CodeWhale/pull/5300) — Open. Moves the production `MessageRequest` DTO family from the TUI crate into `codewhale-core` and adds a pure `prepare_primary_turn_request` constructor.

6. [#5297 docs(web): publish the v0.9.5 release snapshot](https://github.com/Hmbown/CodeWhale/pull/5297) — Closed. Advances the modeled latest-published release from v0.9.4 to v0.9.5 and verifies 34/34 release assets.

7. [#5296 test(telemetry): serialize process fixtures](https://github.com/Hmbown/CodeWhale/pull/5296) — Closed. Serializes full-binary telemetry fixtures, asserts child exit status/stdout/stderr, and drains hostile-buffer child pipes instead of discarding process evidence.

8. [#5294 fix(telemetry): flush only at shutdown](https://github.com/Hmbown/CodeWhale/pull/5294) — Closed. Removes the startup telemetry drain that could send current-session events before a mid-session opt-out; shutdown is the only structural flush point.

9. [#5292 chore(release): prepare v0.9.5](https://github.com/Hmbown/CodeWhale/pull/5292) — Closed. Consolidates the terminal app into one compiled runtime while keeping `codewhale` and `codew` commands, and removes default turn ceilings that interrupted long work.

10. [#5133 feat(runtime-api): expose persistent goal-loop state and completion controls](https://github.com/Hmbown/CodeWhale/pull/5133) — Closed. Adds `/v1/threads/{id}/goal` endpoints so managed clients can read active-goal state and drive lifecycle transitions through the runtime API.

## Feature Request Trends
- **Agent-ready TUI controls**: The largest cluster asks for the TUI to become a full operator console: unified tasks ([#5270](https://github.com/Hmbown/CodeWhale/issues/5270)), session peek ([#5271](https://github.com/Hmbown/CodeWhale/issues/5271)), mid-turn queue/send-now ([#5268](https://github.com/Hmbown/CodeWhale/issues/5268)), turn-stop honesty ([#5267](https://github.com/Hmbown/CodeWhale/issues/5267)), durable plan artifacts ([#5269](https://github.com/Hmbown/CodeWhale/issues/5269)), and prompt-scoped file recovery ([#5272](https://github.com/Hmbown/CodeWhale/issues/5272)).
- **Core extraction and build-time reduction**: Repeated requests to move prompt assembly, request preparation, and the turn loop out of the monolith `codewhale-tui` into `crates/core` ([#5261](https://github.com/Hmbown/CodeWhale/issues/5261), [#5263](https://github.com/Hmbown/CodeWhale/issues/5263)), plus CLI/TUI parity ([#4022](https://github.com/Hmbown/CodeWhale/issues/4022)) and build performance ([#5249](https://github.com/Hmbown/CodeWhale/issues/5249)).
- **Provider/runtime coherence**: Provider-neutral naming ([#5103](https://github.com/Hmbown/CodeWhale/issues/5103)), typed Responses dialect selection ([#5094](https://github.com/Hmbown/CodeWhale/issues/5094), [#5093](https://github.com/Hmbown/CodeWhale/issues/5093), [#5092](https://github.com/Hmbown/CodeWhale/issues/5092)), and first-class providers like Mistral ([#5295](https://github.com/Hmbown/CodeWhale/pull/5295)).
- **Reliable compaction and context preservation**: Structured survival contracts ([#4394](https://github.com/Hmbown/CodeWhale/issues/4394)), preserving intent/decisions/evidence ([#5043](https://github.com/Hmbown/CodeWhale/issues/5043)), and pressure-aware compaction ([#5301](https://github.com/Hmbown/CodeWhale/pull/5301)).
- **Coherent user-facing facilities**: Actionable notifications ([#5041](https://github.com/Hmbown/CodeWhale/issues/5041)) and a unified high-quality web search/fetch retrieval path ([#5037](https://github.com/Hmbown/CodeWhale/issues/5037)).

## Developer Pain Points
- **Dead-code suppression hides drift**: 464 `#[allow(dead_code)]` attributes across 143 files prevent `cargo check` from surfacing unused code ([#4785](https://github.com/Hmbown/CodeWhale/issues/4785)).
- **Monolith build tax**: The 682,959-line, 620-file `codewhale-tui` crate is 86% of the workspace, recompiles as one unit, invalidates tui+cli on every commit via the build-SHA stamp, and produces 25 integration-test binaries ([#5249](https://github.com/Hmbown/CodeWhale/issues/5249)).
- **Legacy naming burden**: Internal names like `DeepSeekClient` remain even though the client is multi-provider, adding confusion and migration friction ([#5103](https://github.com/Hmbown/CodeWhale/issues/5103)).
- **Silent context fallback**: Unknown model IDs silently degrade to the 128K legacy context window, causing surprising compaction for 1M-window models ([#5244](https://github.com/Hmbown/CodeWhale/issues/5244)).
- **Subagent output ceremony**: The mandated `### SUMMARY` / `### EVIDENCE` / `### CHANGES` / `### RISKS` / `### BLOCKERS` plus sentinel is heavier than needed for small child tasks ([#5189](https://github.com/Hmbown/CodeWhale/issues/5189)).
- **Trust and state bugs**: Stale failed-agent rows across sessions ([#4416](https://github.com/Hmbown/CodeWhale/issues/4416)), provider/model state not updated coherently ([#5034](https://github.com/Hmbown/CodeWhale/issues/5034)), and “ending” / “stopping” status that does not match behavior ([#5267](https://github.com/Hmbown/CodeWhale/issues/5267)).

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/boom7sss/agents-radar).*